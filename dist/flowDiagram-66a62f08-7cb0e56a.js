'use strict';

var flowDb956e92f1 = require('./flowDb-956e92f1-350bdbf3.js');
var graph = require('./graph-4ff464ab.js');
var index = require('./index-deb671d6.js');
var layout = require('./layout-d88296cc.js');
var stylesC10674c1 = require('./styles-c10674c1-31101d64.js');
var line = require('./line-891b5b35.js');
require('./main-5c8f274d.js');
require('./index-3862675e-1083dfe4.js');
require('./clone-eca71c22.js');
require('./edges-e0da2a9e-dacae5bc.js');
require('./createText-2e5e7dd3-781a22a4.js');
require('./channel-41a23379.js');
require('./array-aca279a4.js');
require('./path-29c5310d.js');
require('obsidian');

function responseText(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.text();
}

function text(input, init) {
  return fetch(input, init).then(responseText);
}

function parser(type) {
  return (input, init) => text(input, init)
    .then(text => (new DOMParser).parseFromString(text, type));
}

var svg = parser("image/svg+xml");

var arrows = {
  normal,
  vee,
  undirected,
};

function setArrows(value) {
  arrows = value;
}

function normal(parent, id, edge, type) {
  var marker = parent
    .append('marker')
    .attr('id', id)
    .attr('viewBox', '0 0 10 10')
    .attr('refX', 9)
    .attr('refY', 5)
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', 8)
    .attr('markerHeight', 6)
    .attr('orient', 'auto');

  var path = marker
    .append('path')
    .attr('d', 'M 0 0 L 10 5 L 0 10 z')
    .style('stroke-width', 1)
    .style('stroke-dasharray', '1,0');
  stylesC10674c1.applyStyle(path, edge[type + 'Style']);
  if (edge[type + 'Class']) {
    path.attr('class', edge[type + 'Class']);
  }
}

function vee(parent, id, edge, type) {
  var marker = parent
    .append('marker')
    .attr('id', id)
    .attr('viewBox', '0 0 10 10')
    .attr('refX', 9)
    .attr('refY', 5)
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', 8)
    .attr('markerHeight', 6)
    .attr('orient', 'auto');

  var path = marker
    .append('path')
    .attr('d', 'M 0 0 L 10 5 L 0 10 L 4 5 z')
    .style('stroke-width', 1)
    .style('stroke-dasharray', '1,0');
  stylesC10674c1.applyStyle(path, edge[type + 'Style']);
  if (edge[type + 'Class']) {
    path.attr('class', edge[type + 'Class']);
  }
}

function undirected(parent, id, edge, type) {
  var marker = parent
    .append('marker')
    .attr('id', id)
    .attr('viewBox', '0 0 10 10')
    .attr('refX', 9)
    .attr('refY', 5)
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', 8)
    .attr('markerHeight', 6)
    .attr('orient', 'auto');

  var path = marker
    .append('path')
    .attr('d', 'M 0 5 L 10 5')
    .style('stroke-width', 1)
    .style('stroke-dasharray', '1,0');
  stylesC10674c1.applyStyle(path, edge[type + 'Style']);
  if (edge[type + 'Class']) {
    path.attr('class', edge[type + 'Class']);
  }
}

function addSVGLabel(root, node) {
  var domNode = root;

  domNode.node().appendChild(node.label);

  stylesC10674c1.applyStyle(domNode, node.labelStyle);

  return domNode;
}

/*
 * Attaches a text label to the specified root. Handles escape sequences.
 */
function addTextLabel(root, node) {
  var domNode = root.append('text');

  var lines = processEscapeSequences(node.label).split('\n');
  for (var i = 0; i < lines.length; i++) {
    domNode
      .append('tspan')
      .attr('xml:space', 'preserve')
      .attr('dy', '1em')
      .attr('x', '1')
      .text(lines[i]);
  }

  stylesC10674c1.applyStyle(domNode, node.labelStyle);

  return domNode;
}

function processEscapeSequences(text) {
  var newText = '';
  var escaped = false;
  var ch;
  for (var i = 0; i < text.length; ++i) {
    ch = text[i];
    if (escaped) {
      switch (ch) {
        case 'n':
          newText += '\n';
          break;
        default:
          newText += ch;
      }
      escaped = false;
    } else if (ch === '\\') {
      escaped = true;
    } else {
      newText += ch;
    }
  }
  return newText;
}

function addLabel(root, node, location) {
  var label = node.label;
  var labelSvg = root.append('g');

  // Allow the label to be a string, a function that returns a DOM element, or
  // a DOM element itself.
  if (node.labelType === 'svg') {
    addSVGLabel(labelSvg, node);
  } else if (typeof label !== 'string' || node.labelType === 'html') {
    stylesC10674c1.addHtmlLabel(labelSvg, node);
  } else {
    addTextLabel(labelSvg, node);
  }

  var labelBBox = labelSvg.node().getBBox();
  var y;
  switch (location) {
    case 'top':
      y = -node.height / 2;
      break;
    case 'bottom':
      y = node.height / 2 - labelBBox.height;
      break;
    default:
      y = -labelBBox.height / 2;
  }
  labelSvg.attr('transform', 'translate(' + -labelBBox.width / 2 + ',' + y + ')');

  return labelSvg;
}

var createClusters = function (selection, g) {
  var clusters = g.nodes().filter(function (v) {
    return stylesC10674c1.isSubgraph(g, v);
  });
  var svgClusters = selection.selectAll('g.cluster').data(clusters, function (v) {
    return v;
  });

  stylesC10674c1.applyTransition(svgClusters.exit(), g).style('opacity', 0).remove();

  var enterSelection = svgClusters
    .enter()
    .append('g')
    .attr('class', 'cluster')
    .attr('id', function (v) {
      var node = g.node(v);
      return node.id;
    })
    .style('opacity', 0)
    .each(function (v) {
      var node = g.node(v);
      var thisGroup = index.select(this);
      index.select(this).append('rect');
      var labelGroup = thisGroup.append('g').attr('class', 'label');
      addLabel(labelGroup, node, node.clusterLabelPos);
    });

  svgClusters = svgClusters.merge(enterSelection);

  svgClusters = stylesC10674c1.applyTransition(svgClusters, g).style('opacity', 1);

  svgClusters.selectAll('rect').each(function (c) {
    var node = g.node(c);
    var domCluster = index.select(this);
    stylesC10674c1.applyStyle(domCluster, node.style);
  });

  return svgClusters;
};

function setCreateClusters(value) {
  createClusters = value;
}

let createEdgeLabels = function (selection, g) {
  var svgEdgeLabels = selection
    .selectAll('g.edgeLabel')
    .data(g.edges(), function (e) {
      return stylesC10674c1.edgeToId(e);
    })
    .classed('update', true);

  svgEdgeLabels.exit().remove();
  svgEdgeLabels.enter().append('g').classed('edgeLabel', true).style('opacity', 0);

  svgEdgeLabels = selection.selectAll('g.edgeLabel');

  svgEdgeLabels.each(function (e) {
    var root = index.select(this);
    root.select('.label').remove();
    var edge = g.edge(e);
    var label = addLabel(root, g.edge(e), 0).classed('label', true);
    var bbox = label.node().getBBox();

    if (edge.labelId) {
      label.attr('id', edge.labelId);
    }
    if (!graph.has(edge, 'width')) {
      edge.width = bbox.width;
    }
    if (!graph.has(edge, 'height')) {
      edge.height = bbox.height;
    }
  });

  var exitSelection;

  if (svgEdgeLabels.exit) {
    exitSelection = svgEdgeLabels.exit();
  } else {
    exitSelection = svgEdgeLabels.selectAll(null); // empty selection
  }

  stylesC10674c1.applyTransition(exitSelection, g).style('opacity', 0).remove();

  return svgEdgeLabels;
};

function setCreateEdgeLabels(value) {
  createEdgeLabels = value;
}

function intersectNode(node, point) {
  return node.intersect(point);
}

var createEdgePaths = function (selection, g, arrows) {
  var previousPaths = selection
    .selectAll('g.edgePath')
    .data(g.edges(), function (e) {
      return stylesC10674c1.edgeToId(e);
    })
    .classed('update', true);

  var newPaths = enter(previousPaths, g);
  exit(previousPaths, g);

  var svgPaths = previousPaths.merge !== undefined ? previousPaths.merge(newPaths) : previousPaths;
  stylesC10674c1.applyTransition(svgPaths, g).style('opacity', 1);

  // Save DOM element in the path group, and set ID and class
  svgPaths.each(function (e) {
    var domEdge = index.select(this);
    var edge = g.edge(e);
    edge.elem = this;

    if (edge.id) {
      domEdge.attr('id', edge.id);
    }

    stylesC10674c1.applyClass(
      domEdge,
      edge['class'],
      (domEdge.classed('update') ? 'update ' : '') + 'edgePath'
    );
  });

  svgPaths.selectAll('path.path').each(function (e) {
    var edge = g.edge(e);
    edge.arrowheadId = layout.uniqueId('arrowhead');

    var domEdge = index.select(this)
      .attr('marker-end', function () {
        return 'url(' + makeFragmentRef(location.href, edge.arrowheadId) + ')';
      })
      .style('fill', 'none');

    stylesC10674c1.applyTransition(domEdge, g).attr('d', function (e) {
      return calcPoints(g, e);
    });

    stylesC10674c1.applyStyle(domEdge, edge.style);
  });

  svgPaths.selectAll('defs *').remove();
  svgPaths.selectAll('defs').each(function (e) {
    var edge = g.edge(e);
    var arrowhead = arrows[edge.arrowhead];
    arrowhead(index.select(this), edge.arrowheadId, edge, 'arrowhead');
  });

  return svgPaths;
};

function setCreateEdgePaths(value) {
  createEdgePaths = value;
}

function makeFragmentRef(url, fragmentId) {
  var baseUrl = url.split('#')[0];
  return baseUrl + '#' + fragmentId;
}

function calcPoints(g, e) {
  var edge = g.edge(e);
  var tail = g.node(e.v);
  var head = g.node(e.w);
  var points = edge.points.slice(1, edge.points.length - 1);
  points.unshift(intersectNode(tail, points[0]));
  points.push(intersectNode(head, points[points.length - 1]));

  return createLine(edge, points);
}

function createLine(edge, points) {
  // @ts-expect-error
  var line$1 = (line.line || svg.line)()
    .x(function (d) {
      return d.x;
    })
    .y(function (d) {
      return d.y;
    });

  (line$1.curve || line$1.interpolate)(edge.curve);

  return line$1(points);
}

function getCoords(elem) {
  var bbox = elem.getBBox();
  var matrix = elem.ownerSVGElement
    .getScreenCTM()
    .inverse()
    .multiply(elem.getScreenCTM())
    .translate(bbox.width / 2, bbox.height / 2);
  return { x: matrix.e, y: matrix.f };
}

function enter(svgPaths, g) {
  var svgPathsEnter = svgPaths.enter().append('g').attr('class', 'edgePath').style('opacity', 0);
  svgPathsEnter
    .append('path')
    .attr('class', 'path')
    .attr('d', function (e) {
      var edge = g.edge(e);
      var sourceElem = g.node(e.v).elem;
      var points = layout.range(edge.points.length).map(function () {
        return getCoords(sourceElem);
      });
      return createLine(edge, points);
    });
  svgPathsEnter.append('defs');
  return svgPathsEnter;
}

function exit(svgPaths, g) {
  var svgPathExit = svgPaths.exit();
  stylesC10674c1.applyTransition(svgPathExit, g).style('opacity', 0).remove();
}

var createNodes = function (selection, g, shapes) {
  var simpleNodes = g.nodes().filter(function (v) {
    return !stylesC10674c1.isSubgraph(g, v);
  });
  var svgNodes = selection
    .selectAll('g.node')
    .data(simpleNodes, function (v) {
      return v;
    })
    .classed('update', true);

  svgNodes.exit().remove();

  svgNodes.enter().append('g').attr('class', 'node').style('opacity', 0);

  svgNodes = selection.selectAll('g.node');

  svgNodes.each(function (v) {
    var node = g.node(v);
    var thisGroup = index.select(this);
    stylesC10674c1.applyClass(
      thisGroup,
      node['class'],
      (thisGroup.classed('update') ? 'update ' : '') + 'node'
    );

    thisGroup.select('g.label').remove();
    var labelGroup = thisGroup.append('g').attr('class', 'label');
    var labelDom = addLabel(labelGroup, node);
    var shape = shapes[node.shape];
    var bbox = layout.pick(labelDom.node().getBBox(), 'width', 'height');

    node.elem = this;

    if (node.id) {
      thisGroup.attr('id', node.id);
    }
    if (node.labelId) {
      labelGroup.attr('id', node.labelId);
    }

    if (graph.has(node, 'width')) {
      bbox.width = node.width;
    }
    if (graph.has(node, 'height')) {
      bbox.height = node.height;
    }

    bbox.width += node.paddingLeft + node.paddingRight;
    bbox.height += node.paddingTop + node.paddingBottom;
    labelGroup.attr(
      'transform',
      'translate(' +
        (node.paddingLeft - node.paddingRight) / 2 +
        ',' +
        (node.paddingTop - node.paddingBottom) / 2 +
        ')'
    );

    var root = index.select(this);
    root.select('.label-container').remove();
    var shapeSvg = shape(root, bbox, node).classed('label-container', true);
    stylesC10674c1.applyStyle(shapeSvg, node.style);

    var shapeBBox = shapeSvg.node().getBBox();
    node.width = shapeBBox.width;
    node.height = shapeBBox.height;
  });

  var exitSelection;

  if (svgNodes.exit) {
    exitSelection = svgNodes.exit();
  } else {
    exitSelection = svgNodes.selectAll(null); // empty selection
  }

  stylesC10674c1.applyTransition(exitSelection, g).style('opacity', 0).remove();

  return svgNodes;
};

function setCreateNodes(value) {
  createNodes = value;
}

function positionClusters(selection, g) {
  var created = selection.filter(function () {
    return !index.select(this).classed('update');
  });

  function translate(v) {
    var node = g.node(v);
    return 'translate(' + node.x + ',' + node.y + ')';
  }

  created.attr('transform', translate);

  stylesC10674c1.applyTransition(selection, g).style('opacity', 1).attr('transform', translate);

  stylesC10674c1.applyTransition(created.selectAll('rect'), g)
    .attr('width', function (v) {
      return g.node(v).width;
    })
    .attr('height', function (v) {
      return g.node(v).height;
    })
    .attr('x', function (v) {
      var node = g.node(v);
      return -node.width / 2;
    })
    .attr('y', function (v) {
      var node = g.node(v);
      return -node.height / 2;
    });
}

function positionEdgeLabels(selection, g) {
  var created = selection.filter(function () {
    return !index.select(this).classed('update');
  });

  function translate(e) {
    var edge = g.edge(e);
    return graph.has(edge, 'x') ? 'translate(' + edge.x + ',' + edge.y + ')' : '';
  }

  created.attr('transform', translate);

  stylesC10674c1.applyTransition(selection, g).style('opacity', 1).attr('transform', translate);
}

function positionNodes(selection, g) {
  var created = selection.filter(function () {
    return !index.select(this).classed('update');
  });

  function translate(v) {
    var node = g.node(v);
    return 'translate(' + node.x + ',' + node.y + ')';
  }

  created.attr('transform', translate);

  stylesC10674c1.applyTransition(selection, g).style('opacity', 1).attr('transform', translate);
}

function intersectEllipse(node, rx, ry, point) {
  // Formulae from: http://mathworld.wolfram.com/Ellipse-LineIntersection.html

  var cx = node.x;
  var cy = node.y;

  var px = cx - point.x;
  var py = cy - point.y;

  var det = Math.sqrt(rx * rx * py * py + ry * ry * px * px);

  var dx = Math.abs((rx * ry * px) / det);
  if (point.x < cx) {
    dx = -dx;
  }
  var dy = Math.abs((rx * ry * py) / det);
  if (point.y < cy) {
    dy = -dy;
  }

  return { x: cx + dx, y: cy + dy };
}

function intersectCircle(node, rx, point) {
  return intersectEllipse(node, rx, rx, point);
}

/*
 * Returns the point at which two lines, p and q, intersect or returns
 * undefined if they do not intersect.
 */
function intersectLine(p1, p2, q1, q2) {
  // Algorithm from J. Avro, (ed.) Graphics Gems, No 2, Morgan Kaufmann, 1994,
  // p7 and p473.

  var a1, a2, b1, b2, c1, c2;
  var r1, r2, r3, r4;
  var denom, offset, num;
  var x, y;

  // Compute a1, b1, c1, where line joining points 1 and 2 is F(x,y) = a1 x +
  // b1 y + c1 = 0.
  a1 = p2.y - p1.y;
  b1 = p1.x - p2.x;
  c1 = p2.x * p1.y - p1.x * p2.y;

  // Compute r3 and r4.
  r3 = a1 * q1.x + b1 * q1.y + c1;
  r4 = a1 * q2.x + b1 * q2.y + c1;

  // Check signs of r3 and r4. If both point 3 and point 4 lie on
  // same side of line 1, the line segments do not intersect.
  if (r3 !== 0 && r4 !== 0 && sameSign(r3, r4)) {
    return /*DONT_INTERSECT*/;
  }

  // Compute a2, b2, c2 where line joining points 3 and 4 is G(x,y) = a2 x + b2 y + c2 = 0
  a2 = q2.y - q1.y;
  b2 = q1.x - q2.x;
  c2 = q2.x * q1.y - q1.x * q2.y;

  // Compute r1 and r2
  r1 = a2 * p1.x + b2 * p1.y + c2;
  r2 = a2 * p2.x + b2 * p2.y + c2;

  // Check signs of r1 and r2. If both point 1 and point 2 lie
  // on same side of second line segment, the line segments do
  // not intersect.
  if (r1 !== 0 && r2 !== 0 && sameSign(r1, r2)) {
    return /*DONT_INTERSECT*/;
  }

  // Line segments intersect: compute intersection point.
  denom = a1 * b2 - a2 * b1;
  if (denom === 0) {
    return /*COLLINEAR*/;
  }

  offset = Math.abs(denom / 2);

  // The denom/2 is to get rounding instead of truncating. It
  // is added or subtracted to the numerator, depending upon the
  // sign of the numerator.
  num = b1 * c2 - b2 * c1;
  x = num < 0 ? (num - offset) / denom : (num + offset) / denom;

  num = a2 * c1 - a1 * c2;
  y = num < 0 ? (num - offset) / denom : (num + offset) / denom;

  return { x: x, y: y };
}

function sameSign(r1, r2) {
  return r1 * r2 > 0;
}

/*
 * Returns the point ({x, y}) at which the point argument intersects with the
 * node argument assuming that it has the shape specified by polygon.
 */
function intersectPolygon(node, polyPoints, point) {
  var x1 = node.x;
  var y1 = node.y;

  var intersections = [];

  var minX = Number.POSITIVE_INFINITY;
  var minY = Number.POSITIVE_INFINITY;
  polyPoints.forEach(function (entry) {
    minX = Math.min(minX, entry.x);
    minY = Math.min(minY, entry.y);
  });

  var left = x1 - node.width / 2 - minX;
  var top = y1 - node.height / 2 - minY;

  for (var i = 0; i < polyPoints.length; i++) {
    var p1 = polyPoints[i];
    var p2 = polyPoints[i < polyPoints.length - 1 ? i + 1 : 0];
    var intersect = intersectLine(
      node,
      point,
      { x: left + p1.x, y: top + p1.y },
      { x: left + p2.x, y: top + p2.y }
    );
    if (intersect) {
      intersections.push(intersect);
    }
  }

  if (!intersections.length) {
    console.log('NO INTERSECTION FOUND, RETURN NODE CENTER', node);
    return node;
  }

  if (intersections.length > 1) {
    // More intersections, find the one nearest to edge end point
    intersections.sort(function (p, q) {
      var pdx = p.x - point.x;
      var pdy = p.y - point.y;
      var distp = Math.sqrt(pdx * pdx + pdy * pdy);

      var qdx = q.x - point.x;
      var qdy = q.y - point.y;
      var distq = Math.sqrt(qdx * qdx + qdy * qdy);

      return distp < distq ? -1 : distp === distq ? 0 : 1;
    });
  }
  return intersections[0];
}

function intersectRect(node, point) {
  var x = node.x;
  var y = node.y;

  // Rectangle intersection algorithm from:
  // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
  var dx = point.x - x;
  var dy = point.y - y;
  var w = node.width / 2;
  var h = node.height / 2;

  var sx, sy;
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    // Intersection is top or bottom of rect.
    if (dy < 0) {
      h = -h;
    }
    sx = dy === 0 ? 0 : (h * dx) / dy;
    sy = h;
  } else {
    // Intersection is left or right of rect.
    if (dx < 0) {
      w = -w;
    }
    sx = w;
    sy = dx === 0 ? 0 : (w * dy) / dx;
  }

  return { x: x + sx, y: y + sy };
}

var shapes = {
  rect,
  ellipse,
  circle,
  diamond,
};

function setShapes(value) {
  shapes = value;
}

function rect(parent, bbox, node) {
  var shapeSvg = parent
    .insert('rect', ':first-child')
    .attr('rx', node.rx)
    .attr('ry', node.ry)
    .attr('x', -bbox.width / 2)
    .attr('y', -bbox.height / 2)
    .attr('width', bbox.width)
    .attr('height', bbox.height);

  node.intersect = function (point) {
    return intersectRect(node, point);
  };

  return shapeSvg;
}

function ellipse(parent, bbox, node) {
  var rx = bbox.width / 2;
  var ry = bbox.height / 2;
  var shapeSvg = parent
    .insert('ellipse', ':first-child')
    .attr('x', -bbox.width / 2)
    .attr('y', -bbox.height / 2)
    .attr('rx', rx)
    .attr('ry', ry);

  node.intersect = function (point) {
    return intersectEllipse(node, rx, ry, point);
  };

  return shapeSvg;
}

function circle(parent, bbox, node) {
  var r = Math.max(bbox.width, bbox.height) / 2;
  var shapeSvg = parent
    .insert('circle', ':first-child')
    .attr('x', -bbox.width / 2)
    .attr('y', -bbox.height / 2)
    .attr('r', r);

  node.intersect = function (point) {
    return intersectCircle(node, r, point);
  };

  return shapeSvg;
}

// Circumscribe an ellipse for the bounding box with a diamond shape. I derived
// the function to calculate the diamond shape from:
// http://mathforum.org/kb/message.jspa?messageID=3750236
function diamond(parent, bbox, node) {
  var w = (bbox.width * Math.SQRT2) / 2;
  var h = (bbox.height * Math.SQRT2) / 2;
  var points = [
    { x: 0, y: -h },
    { x: -w, y: 0 },
    { x: 0, y: h },
    { x: w, y: 0 },
  ];
  var shapeSvg = parent.insert('polygon', ':first-child').attr(
    'points',
    points
      .map(function (p) {
        return p.x + ',' + p.y;
      })
      .join(' ')
  );

  node.intersect = function (p) {
    return intersectPolygon(node, points, p);
  };

  return shapeSvg;
}

// This design is based on http://bost.ocks.org/mike/chart/.
function render() {
  var fn = function (svg, g) {
    preProcessGraph(g);

    var outputGroup = createOrSelectGroup(svg, 'output');
    var clustersGroup = createOrSelectGroup(outputGroup, 'clusters');
    var edgePathsGroup = createOrSelectGroup(outputGroup, 'edgePaths');
    var edgeLabels = createEdgeLabels(createOrSelectGroup(outputGroup, 'edgeLabels'), g);
    var nodes = createNodes(createOrSelectGroup(outputGroup, 'nodes'), g, shapes);

    layout.layout(g);

    positionNodes(nodes, g);
    positionEdgeLabels(edgeLabels, g);
    createEdgePaths(edgePathsGroup, g, arrows);

    var clusters = createClusters(clustersGroup, g);
    positionClusters(clusters, g);

    postProcessGraph(g);
  };

  fn.createNodes = function (value) {
    if (!arguments.length) return createNodes;
    setCreateNodes(value);
    return fn;
  };

  fn.createClusters = function (value) {
    if (!arguments.length) return createClusters;
    setCreateClusters(value);
    return fn;
  };

  fn.createEdgeLabels = function (value) {
    if (!arguments.length) return createEdgeLabels;
    setCreateEdgeLabels(value);
    return fn;
  };

  fn.createEdgePaths = function (value) {
    if (!arguments.length) return createEdgePaths;
    setCreateEdgePaths(value);
    return fn;
  };

  fn.shapes = function (value) {
    if (!arguments.length) return shapes;
    setShapes(value);
    return fn;
  };

  fn.arrows = function (value) {
    if (!arguments.length) return arrows;
    setArrows(value);
    return fn;
  };

  return fn;
}

var NODE_DEFAULT_ATTRS = {
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
  rx: 0,
  ry: 0,
  shape: 'rect',
};

var EDGE_DEFAULT_ATTRS = {
  arrowhead: 'normal',
  curve: index.curveLinear,
};

function preProcessGraph(g) {
  g.nodes().forEach(function (v) {
    var node = g.node(v);
    if (!graph.has(node, 'label') && !g.children(v).length) {
      node.label = v;
    }

    if (graph.has(node, 'paddingX')) {
      layout.defaults(node, {
        paddingLeft: node.paddingX,
        paddingRight: node.paddingX,
      });
    }

    if (graph.has(node, 'paddingY')) {
      layout.defaults(node, {
        paddingTop: node.paddingY,
        paddingBottom: node.paddingY,
      });
    }

    if (graph.has(node, 'padding')) {
      layout.defaults(node, {
        paddingLeft: node.padding,
        paddingRight: node.padding,
        paddingTop: node.padding,
        paddingBottom: node.padding,
      });
    }

    layout.defaults(node, NODE_DEFAULT_ATTRS);

    graph.forEach(['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'], function (k) {
      node[k] = Number(node[k]);
    });

    // Save dimensions for restore during post-processing
    if (graph.has(node, 'width')) {
      node._prevWidth = node.width;
    }
    if (graph.has(node, 'height')) {
      node._prevHeight = node.height;
    }
  });

  g.edges().forEach(function (e) {
    var edge = g.edge(e);
    if (!graph.has(edge, 'label')) {
      edge.label = '';
    }
    layout.defaults(edge, EDGE_DEFAULT_ATTRS);
  });
}

function postProcessGraph(g) {
  graph.forEach(g.nodes(), function (v) {
    var node = g.node(v);

    // Restore original dimensions
    if (graph.has(node, '_prevWidth')) {
      node.width = node._prevWidth;
    } else {
      delete node.width;
    }

    if (graph.has(node, '_prevHeight')) {
      node.height = node._prevHeight;
    } else {
      delete node.height;
    }

    delete node._prevWidth;
    delete node._prevHeight;
  });
}

function createOrSelectGroup(root, name) {
  var selection = root.select('g.' + name);
  if (selection.empty()) {
    selection = root.append('g').attr('class', name);
  }
  return selection;
}

function question(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const s = (w + h) * 0.9;
  const points = [
    { x: s / 2, y: 0 },
    { x: s, y: -s / 2 },
    { x: s / 2, y: -s },
    { x: 0, y: -s / 2 }
  ];
  const shapeSvg = insertPolygonShape(parent, s, s, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function hexagon(parent, bbox, node) {
  const f = 4;
  const h = bbox.height;
  const m = h / f;
  const w = bbox.width + 2 * m;
  const points = [
    { x: m, y: 0 },
    { x: w - m, y: 0 },
    { x: w, y: -h / 2 },
    { x: w - m, y: -h },
    { x: m, y: -h },
    { x: 0, y: -h / 2 }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function rect_left_inv_arrow(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: -h / 2, y: 0 },
    { x: w, y: 0 },
    { x: w, y: -h },
    { x: -h / 2, y: -h },
    { x: 0, y: -h / 2 }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function lean_right(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: -2 * h / 6, y: 0 },
    { x: w - h / 6, y: 0 },
    { x: w + 2 * h / 6, y: -h },
    { x: h / 6, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function lean_left(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: 2 * h / 6, y: 0 },
    { x: w + h / 6, y: 0 },
    { x: w - 2 * h / 6, y: -h },
    { x: -h / 6, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function trapezoid(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: -2 * h / 6, y: 0 },
    { x: w + 2 * h / 6, y: 0 },
    { x: w - h / 6, y: -h },
    { x: h / 6, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function inv_trapezoid(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: h / 6, y: 0 },
    { x: w - h / 6, y: 0 },
    { x: w + 2 * h / 6, y: -h },
    { x: -2 * h / 6, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function rect_right_inv_arrow(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: 0, y: 0 },
    { x: w + h / 2, y: 0 },
    { x: w, y: -h / 2 },
    { x: w + h / 2, y: -h },
    { x: 0, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function stadium(parent, bbox, node) {
  const h = bbox.height;
  const w = bbox.width + h / 4;
  const shapeSvg = parent.insert("rect", ":first-child").attr("rx", h / 2).attr("ry", h / 2).attr("x", -w / 2).attr("y", -h / 2).attr("width", w).attr("height", h);
  node.intersect = function(point) {
    return intersectRect(node, point);
  };
  return shapeSvg;
}
function subroutine(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: 0, y: 0 },
    { x: w, y: 0 },
    { x: w, y: -h },
    { x: 0, y: -h },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: w + 8, y: 0 },
    { x: w + 8, y: -h },
    { x: -8, y: -h },
    { x: -8, y: 0 }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function cylinder(parent, bbox, node) {
  const w = bbox.width;
  const rx = w / 2;
  const ry = rx / (2.5 + w / 50);
  const h = bbox.height + ry;
  const shape = "M 0," + ry + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 a " + rx + "," + ry + " 0,0,0 " + -w + " 0 l 0," + h + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 l 0," + -h;
  const shapeSvg = parent.attr("label-offset-y", ry).insert("path", ":first-child").attr("d", shape).attr("transform", "translate(" + -w / 2 + "," + -(h / 2 + ry) + ")");
  node.intersect = function(point) {
    const pos = intersectRect(node, point);
    const x = pos.x - node.x;
    if (rx != 0 && (Math.abs(x) < node.width / 2 || Math.abs(x) == node.width / 2 && Math.abs(pos.y - node.y) > node.height / 2 - ry)) {
      let y = ry * ry * (1 - x * x / (rx * rx));
      if (y != 0) {
        y = Math.sqrt(y);
      }
      y = ry - y;
      if (point.y - node.y > 0) {
        y = -y;
      }
      pos.y += y;
    }
    return pos;
  };
  return shapeSvg;
}
function addToRender(render2) {
  render2.shapes().question = question;
  render2.shapes().hexagon = hexagon;
  render2.shapes().stadium = stadium;
  render2.shapes().subroutine = subroutine;
  render2.shapes().cylinder = cylinder;
  render2.shapes().rect_left_inv_arrow = rect_left_inv_arrow;
  render2.shapes().lean_right = lean_right;
  render2.shapes().lean_left = lean_left;
  render2.shapes().trapezoid = trapezoid;
  render2.shapes().inv_trapezoid = inv_trapezoid;
  render2.shapes().rect_right_inv_arrow = rect_right_inv_arrow;
}
function addToRenderV2(addShape) {
  addShape({ question });
  addShape({ hexagon });
  addShape({ stadium });
  addShape({ subroutine });
  addShape({ cylinder });
  addShape({ rect_left_inv_arrow });
  addShape({ lean_right });
  addShape({ lean_left });
  addShape({ trapezoid });
  addShape({ inv_trapezoid });
  addShape({ rect_right_inv_arrow });
}
function insertPolygonShape(parent, w, h, points) {
  return parent.insert("polygon", ":first-child").attr(
    "points",
    points.map(function(d) {
      return d.x + "," + d.y;
    }).join(" ")
  ).attr("transform", "translate(" + -w / 2 + "," + h / 2 + ")");
}
const flowChartShapes = {
  addToRender,
  addToRenderV2
};
const conf = {};
const setConf = function(cnf) {
  const keys = Object.keys(cnf);
  for (const key of keys) {
    conf[key] = cnf[key];
  }
};
const addVertices = async function(vert, g, svgId, root, _doc, diagObj) {
  const svg = !root ? index.select(`[id="${svgId}"]`) : root.select(`[id="${svgId}"]`);
  const doc = !_doc ? document : _doc;
  const keys = Object.keys(vert);
  for (const id of keys) {
    const vertex = vert[id];
    let classStr = "default";
    if (vertex.classes.length > 0) {
      classStr = vertex.classes.join(" ");
    }
    const styles = index.getStylesFromArray(vertex.styles);
    let vertexText = vertex.text !== void 0 ? vertex.text : vertex.id;
    let vertexNode;
    if (index.evaluate(index.getConfig().flowchart.htmlLabels)) {
      const node = {
        label: await index.renderKatex(
          vertexText.replace(
            /fa[blrs]?:fa-[\w-]+/g,
            // cspell:disable-line
            (s) => `<i class='${s.replace(":", " ")}'></i>`
          ),
          index.getConfig()
        )
      };
      vertexNode = stylesC10674c1.addHtmlLabel(svg, node).node();
      vertexNode.parentNode.removeChild(vertexNode);
    } else {
      const svgLabel = doc.createElementNS("http://www.w3.org/2000/svg", "text");
      svgLabel.setAttribute("style", styles.labelStyle.replace("color:", "fill:"));
      const rows = vertexText.split(index.common$1.lineBreakRegex);
      for (const row of rows) {
        const tspan = doc.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        tspan.setAttribute("dy", "1em");
        tspan.setAttribute("x", "1");
        tspan.textContent = row;
        svgLabel.appendChild(tspan);
      }
      vertexNode = svgLabel;
    }
    let radius = 0;
    let _shape = "";
    switch (vertex.type) {
      case "round":
        radius = 5;
        _shape = "rect";
        break;
      case "square":
        _shape = "rect";
        break;
      case "diamond":
        _shape = "question";
        break;
      case "hexagon":
        _shape = "hexagon";
        break;
      case "odd":
        _shape = "rect_left_inv_arrow";
        break;
      case "lean_right":
        _shape = "lean_right";
        break;
      case "lean_left":
        _shape = "lean_left";
        break;
      case "trapezoid":
        _shape = "trapezoid";
        break;
      case "inv_trapezoid":
        _shape = "inv_trapezoid";
        break;
      case "odd_right":
        _shape = "rect_left_inv_arrow";
        break;
      case "circle":
        _shape = "circle";
        break;
      case "ellipse":
        _shape = "ellipse";
        break;
      case "stadium":
        _shape = "stadium";
        break;
      case "subroutine":
        _shape = "subroutine";
        break;
      case "cylinder":
        _shape = "cylinder";
        break;
      case "group":
        _shape = "rect";
        break;
      default:
        _shape = "rect";
    }
    index.log$1.warn("Adding node", vertex.id, vertex.domId);
    g.setNode(diagObj.db.lookUpDomId(vertex.id), {
      labelType: "svg",
      labelStyle: styles.labelStyle,
      shape: _shape,
      label: vertexNode,
      rx: radius,
      ry: radius,
      class: classStr,
      style: styles.style,
      id: diagObj.db.lookUpDomId(vertex.id)
    });
  }
};
const addEdges = async function(edges, g, diagObj) {
  let cnt = 0;
  let defaultStyle;
  let defaultLabelStyle;
  if (edges.defaultStyle !== void 0) {
    const defaultStyles = index.getStylesFromArray(edges.defaultStyle);
    defaultStyle = defaultStyles.style;
    defaultLabelStyle = defaultStyles.labelStyle;
  }
  for (const edge of edges) {
    cnt++;
    const linkId = "L-" + edge.start + "-" + edge.end;
    const linkNameStart = "LS-" + edge.start;
    const linkNameEnd = "LE-" + edge.end;
    const edgeData = {};
    if (edge.type === "arrow_open") {
      edgeData.arrowhead = "none";
    } else {
      edgeData.arrowhead = "normal";
    }
    let style = "";
    let labelStyle = "";
    if (edge.style !== void 0) {
      const styles = index.getStylesFromArray(edge.style);
      style = styles.style;
      labelStyle = styles.labelStyle;
    } else {
      switch (edge.stroke) {
        case "normal":
          style = "fill:none";
          if (defaultStyle !== void 0) {
            style = defaultStyle;
          }
          if (defaultLabelStyle !== void 0) {
            labelStyle = defaultLabelStyle;
          }
          break;
        case "dotted":
          style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
          break;
        case "thick":
          style = " stroke-width: 3.5px;fill:none";
          break;
      }
    }
    edgeData.style = style;
    edgeData.labelStyle = labelStyle;
    if (edge.interpolate !== void 0) {
      edgeData.curve = index.interpolateToCurve(edge.interpolate, index.curveLinear);
    } else if (edges.defaultInterpolate !== void 0) {
      edgeData.curve = index.interpolateToCurve(edges.defaultInterpolate, index.curveLinear);
    } else {
      edgeData.curve = index.interpolateToCurve(conf.curve, index.curveLinear);
    }
    if (edge.text === void 0) {
      if (edge.style !== void 0) {
        edgeData.arrowheadStyle = "fill: #333";
      }
    } else {
      edgeData.arrowheadStyle = "fill: #333";
      edgeData.labelpos = "c";
      if (index.evaluate(index.getConfig().flowchart.htmlLabels)) {
        edgeData.labelType = "html";
        edgeData.label = `<span id="L-${linkId}" class="edgeLabel L-${linkNameStart}' L-${linkNameEnd}" style="${edgeData.labelStyle}">${await index.renderKatex(
          edge.text.replace(
            /fa[blrs]?:fa-[\w-]+/g,
            // cspell:disable-line
            (s) => `<i class='${s.replace(":", " ")}'></i>`
          ),
          index.getConfig()
        )}</span>`;
      } else {
        edgeData.labelType = "text";
        edgeData.label = edge.text.replace(index.common$1.lineBreakRegex, "\n");
        if (edge.style === void 0) {
          edgeData.style = edgeData.style || "stroke: #333; stroke-width: 1.5px;fill:none";
        }
        edgeData.labelStyle = edgeData.labelStyle.replace("color:", "fill:");
      }
    }
    edgeData.id = linkId;
    edgeData.class = linkNameStart + " " + linkNameEnd;
    edgeData.minlen = edge.length || 1;
    g.setEdge(diagObj.db.lookUpDomId(edge.start), diagObj.db.lookUpDomId(edge.end), edgeData, cnt);
  }
};
const getClasses = function(text, diagObj) {
  index.log$1.info("Extracting classes");
  return diagObj.db.getClasses();
};
const draw = async function(text, id, _version, diagObj) {
  index.log$1.info("Drawing flowchart");
  const { securityLevel, flowchart: conf2 } = index.getConfig();
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = index.select("#i" + id);
  }
  const root = securityLevel === "sandbox" ? index.select(sandboxElement.nodes()[0].contentDocument.body) : index.select("body");
  const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
  let dir = diagObj.db.getDirection();
  if (dir === void 0) {
    dir = "TD";
  }
  const nodeSpacing = conf2.nodeSpacing || 50;
  const rankSpacing = conf2.rankSpacing || 50;
  const g = new graph.Graph({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: dir,
    nodesep: nodeSpacing,
    ranksep: rankSpacing,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  let subG;
  const subGraphs = diagObj.db.getSubGraphs();
  for (let i2 = subGraphs.length - 1; i2 >= 0; i2--) {
    subG = subGraphs[i2];
    diagObj.db.addVertex(subG.id, subG.title, "group", void 0, subG.classes);
  }
  const vert = diagObj.db.getVertices();
  index.log$1.warn("Get vertices", vert);
  const edges = diagObj.db.getEdges();
  let i = 0;
  for (i = subGraphs.length - 1; i >= 0; i--) {
    subG = subGraphs[i];
    stylesC10674c1.selectAll("cluster").append("text");
    for (let j = 0; j < subG.nodes.length; j++) {
      index.log$1.warn(
        "Setting subgraph",
        subG.nodes[j],
        diagObj.db.lookUpDomId(subG.nodes[j]),
        diagObj.db.lookUpDomId(subG.id)
      );
      g.setParent(diagObj.db.lookUpDomId(subG.nodes[j]), diagObj.db.lookUpDomId(subG.id));
    }
  }
  await addVertices(vert, g, id, root, doc, diagObj);
  await addEdges(edges, g, diagObj);
  const render$1 = new render();
  flowChartShapes.addToRender(render$1);
  render$1.arrows().none = function normal(parent, id2, edge, type) {
    const marker = parent.append("marker").attr("id", id2).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
    const path = marker.append("path").attr("d", "M 0 0 L 0 0 L 0 0 z");
    stylesC10674c1.applyStyle(path, edge[type + "Style"]);
  };
  render$1.arrows().normal = function normal(parent, id2) {
    const marker = parent.append("marker").attr("id", id2).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
    marker.append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowheadPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  };
  const svg = root.select(`[id="${id}"]`);
  const element = root.select("#" + id + " g");
  render$1(element, g);
  element.selectAll("g.node").attr("title", function() {
    return diagObj.db.getTooltip(this.id);
  });
  diagObj.db.indexNodes("subGraph" + i);
  for (i = 0; i < subGraphs.length; i++) {
    subG = subGraphs[i];
    if (subG.title !== "undefined") {
      const clusterRects = doc.querySelectorAll(
        "#" + id + ' [id="' + diagObj.db.lookUpDomId(subG.id) + '"] rect'
      );
      const clusterEl = doc.querySelectorAll(
        "#" + id + ' [id="' + diagObj.db.lookUpDomId(subG.id) + '"]'
      );
      const xPos = clusterRects[0].x.baseVal.value;
      const yPos = clusterRects[0].y.baseVal.value;
      const _width = clusterRects[0].width.baseVal.value;
      const cluster = index.select(clusterEl[0]);
      const te = cluster.select(".label");
      te.attr("transform", `translate(${xPos + _width / 2}, ${yPos + 14})`);
      te.attr("id", id + "Text");
      for (let j = 0; j < subG.classes.length; j++) {
        clusterEl[0].classList.add(subG.classes[j]);
      }
    }
  }
  if (!conf2.htmlLabels) {
    const labels = doc.querySelectorAll('[id="' + id + '"] .edgeLabel .label');
    for (const label of labels) {
      const dim = label.getBBox();
      const rect = doc.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("rx", 0);
      rect.setAttribute("ry", 0);
      rect.setAttribute("width", dim.width);
      rect.setAttribute("height", dim.height);
      label.insertBefore(rect, label.firstChild);
    }
  }
  index.setupGraphViewbox$1(g, svg, conf2.diagramPadding, conf2.useMaxWidth);
  const keys = Object.keys(vert);
  keys.forEach(function(key) {
    const vertex = vert[key];
    if (vertex.link) {
      const node = root.select("#" + id + ' [id="' + diagObj.db.lookUpDomId(key) + '"]');
      if (node) {
        const link = doc.createElementNS("http://www.w3.org/2000/svg", "a");
        link.setAttributeNS("http://www.w3.org/2000/svg", "class", vertex.classes.join(" "));
        link.setAttributeNS("http://www.w3.org/2000/svg", "href", vertex.link);
        link.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener");
        if (securityLevel === "sandbox") {
          link.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top");
        } else if (vertex.linkTarget) {
          link.setAttributeNS("http://www.w3.org/2000/svg", "target", vertex.linkTarget);
        }
        const linkNode = node.insert(function() {
          return link;
        }, ":first-child");
        const shape = node.select(".label-container");
        if (shape) {
          linkNode.append(function() {
            return shape.node();
          });
        }
        const label = node.select(".label");
        if (label) {
          linkNode.append(function() {
            return label.node();
          });
        }
      }
    }
  });
};
const flowRenderer = {
  setConf,
  addVertices,
  addEdges,
  getClasses,
  draw
};
const diagram = {
  parser: flowDb956e92f1.parser$1,
  db: flowDb956e92f1.flowDb,
  renderer: stylesC10674c1.flowRendererV2,
  styles: stylesC10674c1.flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    flowRenderer.setConf(cnf.flowchart);
    flowDb956e92f1.flowDb.clear();
    flowDb956e92f1.flowDb.setGen("gen-1");
  }
};

exports.diagram = diagram;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvd0RpYWdyYW0tNjZhNjJmMDgtN2NiMGU1NmEuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9kMy1mZXRjaC9zcmMvdGV4dC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy1mZXRjaC9zcmMveG1sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhZ3JlLWQzLWVzL3NyYy9kYWdyZS1qcy9hcnJvd3MuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlLWpzL2xhYmVsL2FkZC1zdmctbGFiZWwuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlLWpzL2xhYmVsL2FkZC10ZXh0LWxhYmVsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhZ3JlLWQzLWVzL3NyYy9kYWdyZS1qcy9sYWJlbC9hZGQtbGFiZWwuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlLWpzL2NyZWF0ZS1jbHVzdGVycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYWdyZS1kMy1lcy9zcmMvZGFncmUtanMvY3JlYXRlLWVkZ2UtbGFiZWxzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhZ3JlLWQzLWVzL3NyYy9kYWdyZS1qcy9pbnRlcnNlY3QvaW50ZXJzZWN0LW5vZGUuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlLWpzL2NyZWF0ZS1lZGdlLXBhdGhzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhZ3JlLWQzLWVzL3NyYy9kYWdyZS1qcy9jcmVhdGUtbm9kZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlLWpzL3Bvc2l0aW9uLWNsdXN0ZXJzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhZ3JlLWQzLWVzL3NyYy9kYWdyZS1qcy9wb3NpdGlvbi1lZGdlLWxhYmVscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYWdyZS1kMy1lcy9zcmMvZGFncmUtanMvcG9zaXRpb24tbm9kZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlLWpzL2ludGVyc2VjdC9pbnRlcnNlY3QtZWxsaXBzZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYWdyZS1kMy1lcy9zcmMvZGFncmUtanMvaW50ZXJzZWN0L2ludGVyc2VjdC1jaXJjbGUuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlLWpzL2ludGVyc2VjdC9pbnRlcnNlY3QtbGluZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYWdyZS1kMy1lcy9zcmMvZGFncmUtanMvaW50ZXJzZWN0L2ludGVyc2VjdC1wb2x5Z29uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhZ3JlLWQzLWVzL3NyYy9kYWdyZS1qcy9pbnRlcnNlY3QvaW50ZXJzZWN0LXJlY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlLWpzL3NoYXBlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYWdyZS1kMy1lcy9zcmMvZGFncmUtanMvcmVuZGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21lcm1haWQvZGlzdC9mbG93RGlhZ3JhbS02NmE2MmYwOC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByZXNwb25zZVRleHQocmVzcG9uc2UpIHtcbiAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyArIFwiIFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gIHJldHVybiBmZXRjaChpbnB1dCwgaW5pdCkudGhlbihyZXNwb25zZVRleHQpO1xufVxuIiwiaW1wb3J0IHRleHQgZnJvbSBcIi4vdGV4dC5qc1wiO1xuXG5mdW5jdGlvbiBwYXJzZXIodHlwZSkge1xuICByZXR1cm4gKGlucHV0LCBpbml0KSA9PiB0ZXh0KGlucHV0LCBpbml0KVxuICAgIC50aGVuKHRleHQgPT4gKG5ldyBET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyh0ZXh0LCB0eXBlKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlcihcImFwcGxpY2F0aW9uL3htbFwiKTtcblxuZXhwb3J0IHZhciBodG1sID0gcGFyc2VyKFwidGV4dC9odG1sXCIpO1xuXG5leHBvcnQgdmFyIHN2ZyA9IHBhcnNlcihcImltYWdlL3N2Zyt4bWxcIik7XG4iLCJpbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbC5qcyc7XG5cbmV4cG9ydCB7IGFycm93cywgc2V0QXJyb3dzIH07XG5cbnZhciBhcnJvd3MgPSB7XG4gIG5vcm1hbCxcbiAgdmVlLFxuICB1bmRpcmVjdGVkLFxufTtcblxuZnVuY3Rpb24gc2V0QXJyb3dzKHZhbHVlKSB7XG4gIGFycm93cyA9IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBub3JtYWwocGFyZW50LCBpZCwgZWRnZSwgdHlwZSkge1xuICB2YXIgbWFya2VyID0gcGFyZW50XG4gICAgLmFwcGVuZCgnbWFya2VyJylcbiAgICAuYXR0cignaWQnLCBpZClcbiAgICAuYXR0cigndmlld0JveCcsICcwIDAgMTAgMTAnKVxuICAgIC5hdHRyKCdyZWZYJywgOSlcbiAgICAuYXR0cigncmVmWScsIDUpXG4gICAgLmF0dHIoJ21hcmtlclVuaXRzJywgJ3N0cm9rZVdpZHRoJylcbiAgICAuYXR0cignbWFya2VyV2lkdGgnLCA4KVxuICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCA2KVxuICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpO1xuXG4gIHZhciBwYXRoID0gbWFya2VyXG4gICAgLmFwcGVuZCgncGF0aCcpXG4gICAgLmF0dHIoJ2QnLCAnTSAwIDAgTCAxMCA1IEwgMCAxMCB6JylcbiAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpXG4gICAgLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JywgJzEsMCcpO1xuICB1dGlsLmFwcGx5U3R5bGUocGF0aCwgZWRnZVt0eXBlICsgJ1N0eWxlJ10pO1xuICBpZiAoZWRnZVt0eXBlICsgJ0NsYXNzJ10pIHtcbiAgICBwYXRoLmF0dHIoJ2NsYXNzJywgZWRnZVt0eXBlICsgJ0NsYXNzJ10pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZlZShwYXJlbnQsIGlkLCBlZGdlLCB0eXBlKSB7XG4gIHZhciBtYXJrZXIgPSBwYXJlbnRcbiAgICAuYXBwZW5kKCdtYXJrZXInKVxuICAgIC5hdHRyKCdpZCcsIGlkKVxuICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgMCAxMCAxMCcpXG4gICAgLmF0dHIoJ3JlZlgnLCA5KVxuICAgIC5hdHRyKCdyZWZZJywgNSlcbiAgICAuYXR0cignbWFya2VyVW5pdHMnLCAnc3Ryb2tlV2lkdGgnKVxuICAgIC5hdHRyKCdtYXJrZXJXaWR0aCcsIDgpXG4gICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDYpXG4gICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJyk7XG5cbiAgdmFyIHBhdGggPSBtYXJrZXJcbiAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAuYXR0cignZCcsICdNIDAgMCBMIDEwIDUgTCAwIDEwIEwgNCA1IHonKVxuICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMSlcbiAgICAuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCAnMSwwJyk7XG4gIHV0aWwuYXBwbHlTdHlsZShwYXRoLCBlZGdlW3R5cGUgKyAnU3R5bGUnXSk7XG4gIGlmIChlZGdlW3R5cGUgKyAnQ2xhc3MnXSkge1xuICAgIHBhdGguYXR0cignY2xhc3MnLCBlZGdlW3R5cGUgKyAnQ2xhc3MnXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5kaXJlY3RlZChwYXJlbnQsIGlkLCBlZGdlLCB0eXBlKSB7XG4gIHZhciBtYXJrZXIgPSBwYXJlbnRcbiAgICAuYXBwZW5kKCdtYXJrZXInKVxuICAgIC5hdHRyKCdpZCcsIGlkKVxuICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgMCAxMCAxMCcpXG4gICAgLmF0dHIoJ3JlZlgnLCA5KVxuICAgIC5hdHRyKCdyZWZZJywgNSlcbiAgICAuYXR0cignbWFya2VyVW5pdHMnLCAnc3Ryb2tlV2lkdGgnKVxuICAgIC5hdHRyKCdtYXJrZXJXaWR0aCcsIDgpXG4gICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDYpXG4gICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJyk7XG5cbiAgdmFyIHBhdGggPSBtYXJrZXJcbiAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAuYXR0cignZCcsICdNIDAgNSBMIDEwIDUnKVxuICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMSlcbiAgICAuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCAnMSwwJyk7XG4gIHV0aWwuYXBwbHlTdHlsZShwYXRoLCBlZGdlW3R5cGUgKyAnU3R5bGUnXSk7XG4gIGlmIChlZGdlW3R5cGUgKyAnQ2xhc3MnXSkge1xuICAgIHBhdGguYXR0cignY2xhc3MnLCBlZGdlW3R5cGUgKyAnQ2xhc3MnXSk7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vdXRpbC5qcyc7XG5cbmV4cG9ydCB7IGFkZFNWR0xhYmVsIH07XG5cbmZ1bmN0aW9uIGFkZFNWR0xhYmVsKHJvb3QsIG5vZGUpIHtcbiAgdmFyIGRvbU5vZGUgPSByb290O1xuXG4gIGRvbU5vZGUubm9kZSgpLmFwcGVuZENoaWxkKG5vZGUubGFiZWwpO1xuXG4gIHV0aWwuYXBwbHlTdHlsZShkb21Ob2RlLCBub2RlLmxhYmVsU3R5bGUpO1xuXG4gIHJldHVybiBkb21Ob2RlO1xufVxuIiwiaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi91dGlsLmpzJztcblxuZXhwb3J0IHsgYWRkVGV4dExhYmVsIH07XG5cbi8qXG4gKiBBdHRhY2hlcyBhIHRleHQgbGFiZWwgdG8gdGhlIHNwZWNpZmllZCByb290LiBIYW5kbGVzIGVzY2FwZSBzZXF1ZW5jZXMuXG4gKi9cbmZ1bmN0aW9uIGFkZFRleHRMYWJlbChyb290LCBub2RlKSB7XG4gIHZhciBkb21Ob2RlID0gcm9vdC5hcHBlbmQoJ3RleHQnKTtcblxuICB2YXIgbGluZXMgPSBwcm9jZXNzRXNjYXBlU2VxdWVuY2VzKG5vZGUubGFiZWwpLnNwbGl0KCdcXG4nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIGRvbU5vZGVcbiAgICAgIC5hcHBlbmQoJ3RzcGFuJylcbiAgICAgIC5hdHRyKCd4bWw6c3BhY2UnLCAncHJlc2VydmUnKVxuICAgICAgLmF0dHIoJ2R5JywgJzFlbScpXG4gICAgICAuYXR0cigneCcsICcxJylcbiAgICAgIC50ZXh0KGxpbmVzW2ldKTtcbiAgfVxuXG4gIHV0aWwuYXBwbHlTdHlsZShkb21Ob2RlLCBub2RlLmxhYmVsU3R5bGUpO1xuXG4gIHJldHVybiBkb21Ob2RlO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzRXNjYXBlU2VxdWVuY2VzKHRleHQpIHtcbiAgdmFyIG5ld1RleHQgPSAnJztcbiAgdmFyIGVzY2FwZWQgPSBmYWxzZTtcbiAgdmFyIGNoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyArK2kpIHtcbiAgICBjaCA9IHRleHRbaV07XG4gICAgaWYgKGVzY2FwZWQpIHtcbiAgICAgIHN3aXRjaCAoY2gpIHtcbiAgICAgICAgY2FzZSAnbic6XG4gICAgICAgICAgbmV3VGV4dCArPSAnXFxuJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBuZXdUZXh0ICs9IGNoO1xuICAgICAgfVxuICAgICAgZXNjYXBlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoY2ggPT09ICdcXFxcJykge1xuICAgICAgZXNjYXBlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1RleHQgKz0gY2g7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdUZXh0O1xufVxuIiwiaW1wb3J0IHsgYWRkSHRtbExhYmVsIH0gZnJvbSAnLi9hZGQtaHRtbC1sYWJlbC5qcyc7XG5pbXBvcnQgeyBhZGRTVkdMYWJlbCB9IGZyb20gJy4vYWRkLXN2Zy1sYWJlbC5qcyc7XG5pbXBvcnQgeyBhZGRUZXh0TGFiZWwgfSBmcm9tICcuL2FkZC10ZXh0LWxhYmVsLmpzJztcblxuZXhwb3J0IHsgYWRkTGFiZWwgfTtcblxuZnVuY3Rpb24gYWRkTGFiZWwocm9vdCwgbm9kZSwgbG9jYXRpb24pIHtcbiAgdmFyIGxhYmVsID0gbm9kZS5sYWJlbDtcbiAgdmFyIGxhYmVsU3ZnID0gcm9vdC5hcHBlbmQoJ2cnKTtcblxuICAvLyBBbGxvdyB0aGUgbGFiZWwgdG8gYmUgYSBzdHJpbmcsIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgRE9NIGVsZW1lbnQsIG9yXG4gIC8vIGEgRE9NIGVsZW1lbnQgaXRzZWxmLlxuICBpZiAobm9kZS5sYWJlbFR5cGUgPT09ICdzdmcnKSB7XG4gICAgYWRkU1ZHTGFiZWwobGFiZWxTdmcsIG5vZGUpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBsYWJlbCAhPT0gJ3N0cmluZycgfHwgbm9kZS5sYWJlbFR5cGUgPT09ICdodG1sJykge1xuICAgIGFkZEh0bWxMYWJlbChsYWJlbFN2Zywgbm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgYWRkVGV4dExhYmVsKGxhYmVsU3ZnLCBub2RlKTtcbiAgfVxuXG4gIHZhciBsYWJlbEJCb3ggPSBsYWJlbFN2Zy5ub2RlKCkuZ2V0QkJveCgpO1xuICB2YXIgeTtcbiAgc3dpdGNoIChsb2NhdGlvbikge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgICB5ID0gLW5vZGUuaGVpZ2h0IC8gMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICB5ID0gbm9kZS5oZWlnaHQgLyAyIC0gbGFiZWxCQm94LmhlaWdodDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB5ID0gLWxhYmVsQkJveC5oZWlnaHQgLyAyO1xuICB9XG4gIGxhYmVsU3ZnLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIC1sYWJlbEJCb3gud2lkdGggLyAyICsgJywnICsgeSArICcpJyk7XG5cbiAgcmV0dXJuIGxhYmVsU3ZnO1xufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IHsgYWRkTGFiZWwgfSBmcm9tICcuL2xhYmVsL2FkZC1sYWJlbC5qcyc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbC5qcyc7XG5cbmV4cG9ydCB7IGNyZWF0ZUNsdXN0ZXJzLCBzZXRDcmVhdGVDbHVzdGVycyB9O1xuXG52YXIgY3JlYXRlQ2x1c3RlcnMgPSBmdW5jdGlvbiAoc2VsZWN0aW9uLCBnKSB7XG4gIHZhciBjbHVzdGVycyA9IGcubm9kZXMoKS5maWx0ZXIoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdXRpbC5pc1N1YmdyYXBoKGcsIHYpO1xuICB9KTtcbiAgdmFyIHN2Z0NsdXN0ZXJzID0gc2VsZWN0aW9uLnNlbGVjdEFsbCgnZy5jbHVzdGVyJykuZGF0YShjbHVzdGVycywgZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdjtcbiAgfSk7XG5cbiAgdXRpbC5hcHBseVRyYW5zaXRpb24oc3ZnQ2x1c3RlcnMuZXhpdCgpLCBnKS5zdHlsZSgnb3BhY2l0eScsIDApLnJlbW92ZSgpO1xuXG4gIHZhciBlbnRlclNlbGVjdGlvbiA9IHN2Z0NsdXN0ZXJzXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKCdnJylcbiAgICAuYXR0cignY2xhc3MnLCAnY2x1c3RlcicpXG4gICAgLmF0dHIoJ2lkJywgZnVuY3Rpb24gKHYpIHtcbiAgICAgIHZhciBub2RlID0gZy5ub2RlKHYpO1xuICAgICAgcmV0dXJuIG5vZGUuaWQ7XG4gICAgfSlcbiAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxuICAgIC5lYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICB2YXIgbm9kZSA9IGcubm9kZSh2KTtcbiAgICAgIHZhciB0aGlzR3JvdXAgPSBkMy5zZWxlY3QodGhpcyk7XG4gICAgICBkMy5zZWxlY3QodGhpcykuYXBwZW5kKCdyZWN0Jyk7XG4gICAgICB2YXIgbGFiZWxHcm91cCA9IHRoaXNHcm91cC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdsYWJlbCcpO1xuICAgICAgYWRkTGFiZWwobGFiZWxHcm91cCwgbm9kZSwgbm9kZS5jbHVzdGVyTGFiZWxQb3MpO1xuICAgIH0pO1xuXG4gIHN2Z0NsdXN0ZXJzID0gc3ZnQ2x1c3RlcnMubWVyZ2UoZW50ZXJTZWxlY3Rpb24pO1xuXG4gIHN2Z0NsdXN0ZXJzID0gdXRpbC5hcHBseVRyYW5zaXRpb24oc3ZnQ2x1c3RlcnMsIGcpLnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cbiAgc3ZnQ2x1c3RlcnMuc2VsZWN0QWxsKCdyZWN0JykuZWFjaChmdW5jdGlvbiAoYykge1xuICAgIHZhciBub2RlID0gZy5ub2RlKGMpO1xuICAgIHZhciBkb21DbHVzdGVyID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgIHV0aWwuYXBwbHlTdHlsZShkb21DbHVzdGVyLCBub2RlLnN0eWxlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHN2Z0NsdXN0ZXJzO1xufTtcblxuZnVuY3Rpb24gc2V0Q3JlYXRlQ2x1c3RlcnModmFsdWUpIHtcbiAgY3JlYXRlQ2x1c3RlcnMgPSB2YWx1ZTtcbn1cbiIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IGFkZExhYmVsIH0gZnJvbSAnLi9sYWJlbC9hZGQtbGFiZWwuanMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwuanMnO1xuXG5leHBvcnQgeyBjcmVhdGVFZGdlTGFiZWxzLCBzZXRDcmVhdGVFZGdlTGFiZWxzIH07XG5cbmxldCBjcmVhdGVFZGdlTGFiZWxzID0gZnVuY3Rpb24gKHNlbGVjdGlvbiwgZykge1xuICB2YXIgc3ZnRWRnZUxhYmVscyA9IHNlbGVjdGlvblxuICAgIC5zZWxlY3RBbGwoJ2cuZWRnZUxhYmVsJylcbiAgICAuZGF0YShnLmVkZ2VzKCksIGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gdXRpbC5lZGdlVG9JZChlKTtcbiAgICB9KVxuICAgIC5jbGFzc2VkKCd1cGRhdGUnLCB0cnVlKTtcblxuICBzdmdFZGdlTGFiZWxzLmV4aXQoKS5yZW1vdmUoKTtcbiAgc3ZnRWRnZUxhYmVscy5lbnRlcigpLmFwcGVuZCgnZycpLmNsYXNzZWQoJ2VkZ2VMYWJlbCcsIHRydWUpLnN0eWxlKCdvcGFjaXR5JywgMCk7XG5cbiAgc3ZnRWRnZUxhYmVscyA9IHNlbGVjdGlvbi5zZWxlY3RBbGwoJ2cuZWRnZUxhYmVsJyk7XG5cbiAgc3ZnRWRnZUxhYmVscy5lYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHJvb3QgPSBkMy5zZWxlY3QodGhpcyk7XG4gICAgcm9vdC5zZWxlY3QoJy5sYWJlbCcpLnJlbW92ZSgpO1xuICAgIHZhciBlZGdlID0gZy5lZGdlKGUpO1xuICAgIHZhciBsYWJlbCA9IGFkZExhYmVsKHJvb3QsIGcuZWRnZShlKSwgMCkuY2xhc3NlZCgnbGFiZWwnLCB0cnVlKTtcbiAgICB2YXIgYmJveCA9IGxhYmVsLm5vZGUoKS5nZXRCQm94KCk7XG5cbiAgICBpZiAoZWRnZS5sYWJlbElkKSB7XG4gICAgICBsYWJlbC5hdHRyKCdpZCcsIGVkZ2UubGFiZWxJZCk7XG4gICAgfVxuICAgIGlmICghXy5oYXMoZWRnZSwgJ3dpZHRoJykpIHtcbiAgICAgIGVkZ2Uud2lkdGggPSBiYm94LndpZHRoO1xuICAgIH1cbiAgICBpZiAoIV8uaGFzKGVkZ2UsICdoZWlnaHQnKSkge1xuICAgICAgZWRnZS5oZWlnaHQgPSBiYm94LmhlaWdodDtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBleGl0U2VsZWN0aW9uO1xuXG4gIGlmIChzdmdFZGdlTGFiZWxzLmV4aXQpIHtcbiAgICBleGl0U2VsZWN0aW9uID0gc3ZnRWRnZUxhYmVscy5leGl0KCk7XG4gIH0gZWxzZSB7XG4gICAgZXhpdFNlbGVjdGlvbiA9IHN2Z0VkZ2VMYWJlbHMuc2VsZWN0QWxsKG51bGwpOyAvLyBlbXB0eSBzZWxlY3Rpb25cbiAgfVxuXG4gIHV0aWwuYXBwbHlUcmFuc2l0aW9uKGV4aXRTZWxlY3Rpb24sIGcpLnN0eWxlKCdvcGFjaXR5JywgMCkucmVtb3ZlKCk7XG5cbiAgcmV0dXJuIHN2Z0VkZ2VMYWJlbHM7XG59O1xuXG5mdW5jdGlvbiBzZXRDcmVhdGVFZGdlTGFiZWxzKHZhbHVlKSB7XG4gIGNyZWF0ZUVkZ2VMYWJlbHMgPSB2YWx1ZTtcbn1cbiIsImV4cG9ydCB7IGludGVyc2VjdE5vZGUgfTtcblxuZnVuY3Rpb24gaW50ZXJzZWN0Tm9kZShub2RlLCBwb2ludCkge1xuICByZXR1cm4gbm9kZS5pbnRlcnNlY3QocG9pbnQpO1xufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgaW50ZXJzZWN0Tm9kZSB9IGZyb20gJy4vaW50ZXJzZWN0L2ludGVyc2VjdC1ub2RlLmpzJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsLmpzJztcblxuZXhwb3J0IHsgY3JlYXRlRWRnZVBhdGhzLCBzZXRDcmVhdGVFZGdlUGF0aHMgfTtcblxudmFyIGNyZWF0ZUVkZ2VQYXRocyA9IGZ1bmN0aW9uIChzZWxlY3Rpb24sIGcsIGFycm93cykge1xuICB2YXIgcHJldmlvdXNQYXRocyA9IHNlbGVjdGlvblxuICAgIC5zZWxlY3RBbGwoJ2cuZWRnZVBhdGgnKVxuICAgIC5kYXRhKGcuZWRnZXMoKSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiB1dGlsLmVkZ2VUb0lkKGUpO1xuICAgIH0pXG4gICAgLmNsYXNzZWQoJ3VwZGF0ZScsIHRydWUpO1xuXG4gIHZhciBuZXdQYXRocyA9IGVudGVyKHByZXZpb3VzUGF0aHMsIGcpO1xuICBleGl0KHByZXZpb3VzUGF0aHMsIGcpO1xuXG4gIHZhciBzdmdQYXRocyA9IHByZXZpb3VzUGF0aHMubWVyZ2UgIT09IHVuZGVmaW5lZCA/IHByZXZpb3VzUGF0aHMubWVyZ2UobmV3UGF0aHMpIDogcHJldmlvdXNQYXRocztcbiAgdXRpbC5hcHBseVRyYW5zaXRpb24oc3ZnUGF0aHMsIGcpLnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cbiAgLy8gU2F2ZSBET00gZWxlbWVudCBpbiB0aGUgcGF0aCBncm91cCwgYW5kIHNldCBJRCBhbmQgY2xhc3NcbiAgc3ZnUGF0aHMuZWFjaChmdW5jdGlvbiAoZSkge1xuICAgIHZhciBkb21FZGdlID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgIHZhciBlZGdlID0gZy5lZGdlKGUpO1xuICAgIGVkZ2UuZWxlbSA9IHRoaXM7XG5cbiAgICBpZiAoZWRnZS5pZCkge1xuICAgICAgZG9tRWRnZS5hdHRyKCdpZCcsIGVkZ2UuaWQpO1xuICAgIH1cblxuICAgIHV0aWwuYXBwbHlDbGFzcyhcbiAgICAgIGRvbUVkZ2UsXG4gICAgICBlZGdlWydjbGFzcyddLFxuICAgICAgKGRvbUVkZ2UuY2xhc3NlZCgndXBkYXRlJykgPyAndXBkYXRlICcgOiAnJykgKyAnZWRnZVBhdGgnXG4gICAgKTtcbiAgfSk7XG5cbiAgc3ZnUGF0aHMuc2VsZWN0QWxsKCdwYXRoLnBhdGgnKS5lYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGVkZ2UgPSBnLmVkZ2UoZSk7XG4gICAgZWRnZS5hcnJvd2hlYWRJZCA9IF8udW5pcXVlSWQoJ2Fycm93aGVhZCcpO1xuXG4gICAgdmFyIGRvbUVkZ2UgPSBkM1xuICAgICAgLnNlbGVjdCh0aGlzKVxuICAgICAgLmF0dHIoJ21hcmtlci1lbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAndXJsKCcgKyBtYWtlRnJhZ21lbnRSZWYobG9jYXRpb24uaHJlZiwgZWRnZS5hcnJvd2hlYWRJZCkgKyAnKSc7XG4gICAgICB9KVxuICAgICAgLnN0eWxlKCdmaWxsJywgJ25vbmUnKTtcblxuICAgIHV0aWwuYXBwbHlUcmFuc2l0aW9uKGRvbUVkZ2UsIGcpLmF0dHIoJ2QnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGNhbGNQb2ludHMoZywgZSk7XG4gICAgfSk7XG5cbiAgICB1dGlsLmFwcGx5U3R5bGUoZG9tRWRnZSwgZWRnZS5zdHlsZSk7XG4gIH0pO1xuXG4gIHN2Z1BhdGhzLnNlbGVjdEFsbCgnZGVmcyAqJykucmVtb3ZlKCk7XG4gIHN2Z1BhdGhzLnNlbGVjdEFsbCgnZGVmcycpLmVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgZWRnZSA9IGcuZWRnZShlKTtcbiAgICB2YXIgYXJyb3doZWFkID0gYXJyb3dzW2VkZ2UuYXJyb3doZWFkXTtcbiAgICBhcnJvd2hlYWQoZDMuc2VsZWN0KHRoaXMpLCBlZGdlLmFycm93aGVhZElkLCBlZGdlLCAnYXJyb3doZWFkJyk7XG4gIH0pO1xuXG4gIHJldHVybiBzdmdQYXRocztcbn07XG5cbmZ1bmN0aW9uIHNldENyZWF0ZUVkZ2VQYXRocyh2YWx1ZSkge1xuICBjcmVhdGVFZGdlUGF0aHMgPSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbWFrZUZyYWdtZW50UmVmKHVybCwgZnJhZ21lbnRJZCkge1xuICB2YXIgYmFzZVVybCA9IHVybC5zcGxpdCgnIycpWzBdO1xuICByZXR1cm4gYmFzZVVybCArICcjJyArIGZyYWdtZW50SWQ7XG59XG5cbmZ1bmN0aW9uIGNhbGNQb2ludHMoZywgZSkge1xuICB2YXIgZWRnZSA9IGcuZWRnZShlKTtcbiAgdmFyIHRhaWwgPSBnLm5vZGUoZS52KTtcbiAgdmFyIGhlYWQgPSBnLm5vZGUoZS53KTtcbiAgdmFyIHBvaW50cyA9IGVkZ2UucG9pbnRzLnNsaWNlKDEsIGVkZ2UucG9pbnRzLmxlbmd0aCAtIDEpO1xuICBwb2ludHMudW5zaGlmdChpbnRlcnNlY3ROb2RlKHRhaWwsIHBvaW50c1swXSkpO1xuICBwb2ludHMucHVzaChpbnRlcnNlY3ROb2RlKGhlYWQsIHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV0pKTtcblxuICByZXR1cm4gY3JlYXRlTGluZShlZGdlLCBwb2ludHMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5lKGVkZ2UsIHBvaW50cykge1xuICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gIHZhciBsaW5lID0gKGQzLmxpbmUgfHwgZDMuc3ZnLmxpbmUpKClcbiAgICAueChmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGQueDtcbiAgICB9KVxuICAgIC55KGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gZC55O1xuICAgIH0pO1xuXG4gIChsaW5lLmN1cnZlIHx8IGxpbmUuaW50ZXJwb2xhdGUpKGVkZ2UuY3VydmUpO1xuXG4gIHJldHVybiBsaW5lKHBvaW50cyk7XG59XG5cbmZ1bmN0aW9uIGdldENvb3JkcyhlbGVtKSB7XG4gIHZhciBiYm94ID0gZWxlbS5nZXRCQm94KCk7XG4gIHZhciBtYXRyaXggPSBlbGVtLm93bmVyU1ZHRWxlbWVudFxuICAgIC5nZXRTY3JlZW5DVE0oKVxuICAgIC5pbnZlcnNlKClcbiAgICAubXVsdGlwbHkoZWxlbS5nZXRTY3JlZW5DVE0oKSlcbiAgICAudHJhbnNsYXRlKGJib3gud2lkdGggLyAyLCBiYm94LmhlaWdodCAvIDIpO1xuICByZXR1cm4geyB4OiBtYXRyaXguZSwgeTogbWF0cml4LmYgfTtcbn1cblxuZnVuY3Rpb24gZW50ZXIoc3ZnUGF0aHMsIGcpIHtcbiAgdmFyIHN2Z1BhdGhzRW50ZXIgPSBzdmdQYXRocy5lbnRlcigpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2VkZ2VQYXRoJykuc3R5bGUoJ29wYWNpdHknLCAwKTtcbiAgc3ZnUGF0aHNFbnRlclxuICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgIC5hdHRyKCdjbGFzcycsICdwYXRoJylcbiAgICAuYXR0cignZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZWRnZSA9IGcuZWRnZShlKTtcbiAgICAgIHZhciBzb3VyY2VFbGVtID0gZy5ub2RlKGUudikuZWxlbTtcbiAgICAgIHZhciBwb2ludHMgPSBfLnJhbmdlKGVkZ2UucG9pbnRzLmxlbmd0aCkubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldENvb3Jkcyhzb3VyY2VFbGVtKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNyZWF0ZUxpbmUoZWRnZSwgcG9pbnRzKTtcbiAgICB9KTtcbiAgc3ZnUGF0aHNFbnRlci5hcHBlbmQoJ2RlZnMnKTtcbiAgcmV0dXJuIHN2Z1BhdGhzRW50ZXI7XG59XG5cbmZ1bmN0aW9uIGV4aXQoc3ZnUGF0aHMsIGcpIHtcbiAgdmFyIHN2Z1BhdGhFeGl0ID0gc3ZnUGF0aHMuZXhpdCgpO1xuICB1dGlsLmFwcGx5VHJhbnNpdGlvbihzdmdQYXRoRXhpdCwgZykuc3R5bGUoJ29wYWNpdHknLCAwKS5yZW1vdmUoKTtcbn1cbiIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IGFkZExhYmVsIH0gZnJvbSAnLi9sYWJlbC9hZGQtbGFiZWwuanMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwuanMnO1xuXG5leHBvcnQgeyBjcmVhdGVOb2Rlcywgc2V0Q3JlYXRlTm9kZXMgfTtcblxudmFyIGNyZWF0ZU5vZGVzID0gZnVuY3Rpb24gKHNlbGVjdGlvbiwgZywgc2hhcGVzKSB7XG4gIHZhciBzaW1wbGVOb2RlcyA9IGcubm9kZXMoKS5maWx0ZXIoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gIXV0aWwuaXNTdWJncmFwaChnLCB2KTtcbiAgfSk7XG4gIHZhciBzdmdOb2RlcyA9IHNlbGVjdGlvblxuICAgIC5zZWxlY3RBbGwoJ2cubm9kZScpXG4gICAgLmRhdGEoc2ltcGxlTm9kZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gdjtcbiAgICB9KVxuICAgIC5jbGFzc2VkKCd1cGRhdGUnLCB0cnVlKTtcblxuICBzdmdOb2Rlcy5leGl0KCkucmVtb3ZlKCk7XG5cbiAgc3ZnTm9kZXMuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdub2RlJykuc3R5bGUoJ29wYWNpdHknLCAwKTtcblxuICBzdmdOb2RlcyA9IHNlbGVjdGlvbi5zZWxlY3RBbGwoJ2cubm9kZScpO1xuXG4gIHN2Z05vZGVzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgbm9kZSA9IGcubm9kZSh2KTtcbiAgICB2YXIgdGhpc0dyb3VwID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgIHV0aWwuYXBwbHlDbGFzcyhcbiAgICAgIHRoaXNHcm91cCxcbiAgICAgIG5vZGVbJ2NsYXNzJ10sXG4gICAgICAodGhpc0dyb3VwLmNsYXNzZWQoJ3VwZGF0ZScpID8gJ3VwZGF0ZSAnIDogJycpICsgJ25vZGUnXG4gICAgKTtcblxuICAgIHRoaXNHcm91cC5zZWxlY3QoJ2cubGFiZWwnKS5yZW1vdmUoKTtcbiAgICB2YXIgbGFiZWxHcm91cCA9IHRoaXNHcm91cC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdsYWJlbCcpO1xuICAgIHZhciBsYWJlbERvbSA9IGFkZExhYmVsKGxhYmVsR3JvdXAsIG5vZGUpO1xuICAgIHZhciBzaGFwZSA9IHNoYXBlc1tub2RlLnNoYXBlXTtcbiAgICB2YXIgYmJveCA9IF8ucGljayhsYWJlbERvbS5ub2RlKCkuZ2V0QkJveCgpLCAnd2lkdGgnLCAnaGVpZ2h0Jyk7XG5cbiAgICBub2RlLmVsZW0gPSB0aGlzO1xuXG4gICAgaWYgKG5vZGUuaWQpIHtcbiAgICAgIHRoaXNHcm91cC5hdHRyKCdpZCcsIG5vZGUuaWQpO1xuICAgIH1cbiAgICBpZiAobm9kZS5sYWJlbElkKSB7XG4gICAgICBsYWJlbEdyb3VwLmF0dHIoJ2lkJywgbm9kZS5sYWJlbElkKTtcbiAgICB9XG5cbiAgICBpZiAoXy5oYXMobm9kZSwgJ3dpZHRoJykpIHtcbiAgICAgIGJib3gud2lkdGggPSBub2RlLndpZHRoO1xuICAgIH1cbiAgICBpZiAoXy5oYXMobm9kZSwgJ2hlaWdodCcpKSB7XG4gICAgICBiYm94LmhlaWdodCA9IG5vZGUuaGVpZ2h0O1xuICAgIH1cblxuICAgIGJib3gud2lkdGggKz0gbm9kZS5wYWRkaW5nTGVmdCArIG5vZGUucGFkZGluZ1JpZ2h0O1xuICAgIGJib3guaGVpZ2h0ICs9IG5vZGUucGFkZGluZ1RvcCArIG5vZGUucGFkZGluZ0JvdHRvbTtcbiAgICBsYWJlbEdyb3VwLmF0dHIoXG4gICAgICAndHJhbnNmb3JtJyxcbiAgICAgICd0cmFuc2xhdGUoJyArXG4gICAgICAgIChub2RlLnBhZGRpbmdMZWZ0IC0gbm9kZS5wYWRkaW5nUmlnaHQpIC8gMiArXG4gICAgICAgICcsJyArXG4gICAgICAgIChub2RlLnBhZGRpbmdUb3AgLSBub2RlLnBhZGRpbmdCb3R0b20pIC8gMiArXG4gICAgICAgICcpJ1xuICAgICk7XG5cbiAgICB2YXIgcm9vdCA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICByb290LnNlbGVjdCgnLmxhYmVsLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgIHZhciBzaGFwZVN2ZyA9IHNoYXBlKHJvb3QsIGJib3gsIG5vZGUpLmNsYXNzZWQoJ2xhYmVsLWNvbnRhaW5lcicsIHRydWUpO1xuICAgIHV0aWwuYXBwbHlTdHlsZShzaGFwZVN2Zywgbm9kZS5zdHlsZSk7XG5cbiAgICB2YXIgc2hhcGVCQm94ID0gc2hhcGVTdmcubm9kZSgpLmdldEJCb3goKTtcbiAgICBub2RlLndpZHRoID0gc2hhcGVCQm94LndpZHRoO1xuICAgIG5vZGUuaGVpZ2h0ID0gc2hhcGVCQm94LmhlaWdodDtcbiAgfSk7XG5cbiAgdmFyIGV4aXRTZWxlY3Rpb247XG5cbiAgaWYgKHN2Z05vZGVzLmV4aXQpIHtcbiAgICBleGl0U2VsZWN0aW9uID0gc3ZnTm9kZXMuZXhpdCgpO1xuICB9IGVsc2Uge1xuICAgIGV4aXRTZWxlY3Rpb24gPSBzdmdOb2Rlcy5zZWxlY3RBbGwobnVsbCk7IC8vIGVtcHR5IHNlbGVjdGlvblxuICB9XG5cbiAgdXRpbC5hcHBseVRyYW5zaXRpb24oZXhpdFNlbGVjdGlvbiwgZykuc3R5bGUoJ29wYWNpdHknLCAwKS5yZW1vdmUoKTtcblxuICByZXR1cm4gc3ZnTm9kZXM7XG59O1xuXG5mdW5jdGlvbiBzZXRDcmVhdGVOb2Rlcyh2YWx1ZSkge1xuICBjcmVhdGVOb2RlcyA9IHZhbHVlO1xufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwuanMnO1xuXG5leHBvcnQgeyBwb3NpdGlvbkNsdXN0ZXJzIH07XG5cbmZ1bmN0aW9uIHBvc2l0aW9uQ2x1c3RlcnMoc2VsZWN0aW9uLCBnKSB7XG4gIHZhciBjcmVhdGVkID0gc2VsZWN0aW9uLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICFkMy5zZWxlY3QodGhpcykuY2xhc3NlZCgndXBkYXRlJyk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHRyYW5zbGF0ZSh2KSB7XG4gICAgdmFyIG5vZGUgPSBnLm5vZGUodik7XG4gICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIG5vZGUueCArICcsJyArIG5vZGUueSArICcpJztcbiAgfVxuXG4gIGNyZWF0ZWQuYXR0cigndHJhbnNmb3JtJywgdHJhbnNsYXRlKTtcblxuICB1dGlsLmFwcGx5VHJhbnNpdGlvbihzZWxlY3Rpb24sIGcpLnN0eWxlKCdvcGFjaXR5JywgMSkuYXR0cigndHJhbnNmb3JtJywgdHJhbnNsYXRlKTtcblxuICB1dGlsXG4gICAgLmFwcGx5VHJhbnNpdGlvbihjcmVhdGVkLnNlbGVjdEFsbCgncmVjdCcpLCBnKVxuICAgIC5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gZy5ub2RlKHYpLndpZHRoO1xuICAgIH0pXG4gICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gZy5ub2RlKHYpLmhlaWdodDtcbiAgICB9KVxuICAgIC5hdHRyKCd4JywgZnVuY3Rpb24gKHYpIHtcbiAgICAgIHZhciBub2RlID0gZy5ub2RlKHYpO1xuICAgICAgcmV0dXJuIC1ub2RlLndpZHRoIC8gMjtcbiAgICB9KVxuICAgIC5hdHRyKCd5JywgZnVuY3Rpb24gKHYpIHtcbiAgICAgIHZhciBub2RlID0gZy5ub2RlKHYpO1xuICAgICAgcmV0dXJuIC1ub2RlLmhlaWdodCAvIDI7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbC5qcyc7XG5cbmV4cG9ydCB7IHBvc2l0aW9uRWRnZUxhYmVscyB9O1xuXG5mdW5jdGlvbiBwb3NpdGlvbkVkZ2VMYWJlbHMoc2VsZWN0aW9uLCBnKSB7XG4gIHZhciBjcmVhdGVkID0gc2VsZWN0aW9uLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICFkMy5zZWxlY3QodGhpcykuY2xhc3NlZCgndXBkYXRlJyk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHRyYW5zbGF0ZShlKSB7XG4gICAgdmFyIGVkZ2UgPSBnLmVkZ2UoZSk7XG4gICAgcmV0dXJuIF8uaGFzKGVkZ2UsICd4JykgPyAndHJhbnNsYXRlKCcgKyBlZGdlLnggKyAnLCcgKyBlZGdlLnkgKyAnKScgOiAnJztcbiAgfVxuXG4gIGNyZWF0ZWQuYXR0cigndHJhbnNmb3JtJywgdHJhbnNsYXRlKTtcblxuICB1dGlsLmFwcGx5VHJhbnNpdGlvbihzZWxlY3Rpb24sIGcpLnN0eWxlKCdvcGFjaXR5JywgMSkuYXR0cigndHJhbnNmb3JtJywgdHJhbnNsYXRlKTtcbn1cbiIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsLmpzJztcblxuZXhwb3J0IHsgcG9zaXRpb25Ob2RlcyB9O1xuXG5mdW5jdGlvbiBwb3NpdGlvbk5vZGVzKHNlbGVjdGlvbiwgZykge1xuICB2YXIgY3JlYXRlZCA9IHNlbGVjdGlvbi5maWx0ZXIoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoJ3VwZGF0ZScpO1xuICB9KTtcblxuICBmdW5jdGlvbiB0cmFuc2xhdGUodikge1xuICAgIHZhciBub2RlID0gZy5ub2RlKHYpO1xuICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyBub2RlLnggKyAnLCcgKyBub2RlLnkgKyAnKSc7XG4gIH1cblxuICBjcmVhdGVkLmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zbGF0ZSk7XG5cbiAgdXRpbC5hcHBseVRyYW5zaXRpb24oc2VsZWN0aW9uLCBnKS5zdHlsZSgnb3BhY2l0eScsIDEpLmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zbGF0ZSk7XG59XG4iLCJleHBvcnQgeyBpbnRlcnNlY3RFbGxpcHNlIH07XG5cbmZ1bmN0aW9uIGludGVyc2VjdEVsbGlwc2Uobm9kZSwgcngsIHJ5LCBwb2ludCkge1xuICAvLyBGb3JtdWxhZSBmcm9tOiBodHRwOi8vbWF0aHdvcmxkLndvbGZyYW0uY29tL0VsbGlwc2UtTGluZUludGVyc2VjdGlvbi5odG1sXG5cbiAgdmFyIGN4ID0gbm9kZS54O1xuICB2YXIgY3kgPSBub2RlLnk7XG5cbiAgdmFyIHB4ID0gY3ggLSBwb2ludC54O1xuICB2YXIgcHkgPSBjeSAtIHBvaW50Lnk7XG5cbiAgdmFyIGRldCA9IE1hdGguc3FydChyeCAqIHJ4ICogcHkgKiBweSArIHJ5ICogcnkgKiBweCAqIHB4KTtcblxuICB2YXIgZHggPSBNYXRoLmFicygocnggKiByeSAqIHB4KSAvIGRldCk7XG4gIGlmIChwb2ludC54IDwgY3gpIHtcbiAgICBkeCA9IC1keDtcbiAgfVxuICB2YXIgZHkgPSBNYXRoLmFicygocnggKiByeSAqIHB5KSAvIGRldCk7XG4gIGlmIChwb2ludC55IDwgY3kpIHtcbiAgICBkeSA9IC1keTtcbiAgfVxuXG4gIHJldHVybiB7IHg6IGN4ICsgZHgsIHk6IGN5ICsgZHkgfTtcbn1cbiIsImltcG9ydCB7IGludGVyc2VjdEVsbGlwc2UgfSBmcm9tICcuL2ludGVyc2VjdC1lbGxpcHNlLmpzJztcblxuZXhwb3J0IHsgaW50ZXJzZWN0Q2lyY2xlIH07XG5cbmZ1bmN0aW9uIGludGVyc2VjdENpcmNsZShub2RlLCByeCwgcG9pbnQpIHtcbiAgcmV0dXJuIGludGVyc2VjdEVsbGlwc2Uobm9kZSwgcngsIHJ4LCBwb2ludCk7XG59XG4iLCJleHBvcnQgeyBpbnRlcnNlY3RMaW5lIH07XG5cbi8qXG4gKiBSZXR1cm5zIHRoZSBwb2ludCBhdCB3aGljaCB0d28gbGluZXMsIHAgYW5kIHEsIGludGVyc2VjdCBvciByZXR1cm5zXG4gKiB1bmRlZmluZWQgaWYgdGhleSBkbyBub3QgaW50ZXJzZWN0LlxuICovXG5mdW5jdGlvbiBpbnRlcnNlY3RMaW5lKHAxLCBwMiwgcTEsIHEyKSB7XG4gIC8vIEFsZ29yaXRobSBmcm9tIEouIEF2cm8sIChlZC4pIEdyYXBoaWNzIEdlbXMsIE5vIDIsIE1vcmdhbiBLYXVmbWFubiwgMTk5NCxcbiAgLy8gcDcgYW5kIHA0NzMuXG5cbiAgdmFyIGExLCBhMiwgYjEsIGIyLCBjMSwgYzI7XG4gIHZhciByMSwgcjIsIHIzLCByNDtcbiAgdmFyIGRlbm9tLCBvZmZzZXQsIG51bTtcbiAgdmFyIHgsIHk7XG5cbiAgLy8gQ29tcHV0ZSBhMSwgYjEsIGMxLCB3aGVyZSBsaW5lIGpvaW5pbmcgcG9pbnRzIDEgYW5kIDIgaXMgRih4LHkpID0gYTEgeCArXG4gIC8vIGIxIHkgKyBjMSA9IDAuXG4gIGExID0gcDIueSAtIHAxLnk7XG4gIGIxID0gcDEueCAtIHAyLng7XG4gIGMxID0gcDIueCAqIHAxLnkgLSBwMS54ICogcDIueTtcblxuICAvLyBDb21wdXRlIHIzIGFuZCByNC5cbiAgcjMgPSBhMSAqIHExLnggKyBiMSAqIHExLnkgKyBjMTtcbiAgcjQgPSBhMSAqIHEyLnggKyBiMSAqIHEyLnkgKyBjMTtcblxuICAvLyBDaGVjayBzaWducyBvZiByMyBhbmQgcjQuIElmIGJvdGggcG9pbnQgMyBhbmQgcG9pbnQgNCBsaWUgb25cbiAgLy8gc2FtZSBzaWRlIG9mIGxpbmUgMSwgdGhlIGxpbmUgc2VnbWVudHMgZG8gbm90IGludGVyc2VjdC5cbiAgaWYgKHIzICE9PSAwICYmIHI0ICE9PSAwICYmIHNhbWVTaWduKHIzLCByNCkpIHtcbiAgICByZXR1cm4gLypET05UX0lOVEVSU0VDVCovO1xuICB9XG5cbiAgLy8gQ29tcHV0ZSBhMiwgYjIsIGMyIHdoZXJlIGxpbmUgam9pbmluZyBwb2ludHMgMyBhbmQgNCBpcyBHKHgseSkgPSBhMiB4ICsgYjIgeSArIGMyID0gMFxuICBhMiA9IHEyLnkgLSBxMS55O1xuICBiMiA9IHExLnggLSBxMi54O1xuICBjMiA9IHEyLnggKiBxMS55IC0gcTEueCAqIHEyLnk7XG5cbiAgLy8gQ29tcHV0ZSByMSBhbmQgcjJcbiAgcjEgPSBhMiAqIHAxLnggKyBiMiAqIHAxLnkgKyBjMjtcbiAgcjIgPSBhMiAqIHAyLnggKyBiMiAqIHAyLnkgKyBjMjtcblxuICAvLyBDaGVjayBzaWducyBvZiByMSBhbmQgcjIuIElmIGJvdGggcG9pbnQgMSBhbmQgcG9pbnQgMiBsaWVcbiAgLy8gb24gc2FtZSBzaWRlIG9mIHNlY29uZCBsaW5lIHNlZ21lbnQsIHRoZSBsaW5lIHNlZ21lbnRzIGRvXG4gIC8vIG5vdCBpbnRlcnNlY3QuXG4gIGlmIChyMSAhPT0gMCAmJiByMiAhPT0gMCAmJiBzYW1lU2lnbihyMSwgcjIpKSB7XG4gICAgcmV0dXJuIC8qRE9OVF9JTlRFUlNFQ1QqLztcbiAgfVxuXG4gIC8vIExpbmUgc2VnbWVudHMgaW50ZXJzZWN0OiBjb21wdXRlIGludGVyc2VjdGlvbiBwb2ludC5cbiAgZGVub20gPSBhMSAqIGIyIC0gYTIgKiBiMTtcbiAgaWYgKGRlbm9tID09PSAwKSB7XG4gICAgcmV0dXJuIC8qQ09MTElORUFSKi87XG4gIH1cblxuICBvZmZzZXQgPSBNYXRoLmFicyhkZW5vbSAvIDIpO1xuXG4gIC8vIFRoZSBkZW5vbS8yIGlzIHRvIGdldCByb3VuZGluZyBpbnN0ZWFkIG9mIHRydW5jYXRpbmcuIEl0XG4gIC8vIGlzIGFkZGVkIG9yIHN1YnRyYWN0ZWQgdG8gdGhlIG51bWVyYXRvciwgZGVwZW5kaW5nIHVwb24gdGhlXG4gIC8vIHNpZ24gb2YgdGhlIG51bWVyYXRvci5cbiAgbnVtID0gYjEgKiBjMiAtIGIyICogYzE7XG4gIHggPSBudW0gPCAwID8gKG51bSAtIG9mZnNldCkgLyBkZW5vbSA6IChudW0gKyBvZmZzZXQpIC8gZGVub207XG5cbiAgbnVtID0gYTIgKiBjMSAtIGExICogYzI7XG4gIHkgPSBudW0gPCAwID8gKG51bSAtIG9mZnNldCkgLyBkZW5vbSA6IChudW0gKyBvZmZzZXQpIC8gZGVub207XG5cbiAgcmV0dXJuIHsgeDogeCwgeTogeSB9O1xufVxuXG5mdW5jdGlvbiBzYW1lU2lnbihyMSwgcjIpIHtcbiAgcmV0dXJuIHIxICogcjIgPiAwO1xufVxuIiwiaW1wb3J0IHsgaW50ZXJzZWN0TGluZSB9IGZyb20gJy4vaW50ZXJzZWN0LWxpbmUuanMnO1xuXG5leHBvcnQgeyBpbnRlcnNlY3RQb2x5Z29uIH07XG5cbi8qXG4gKiBSZXR1cm5zIHRoZSBwb2ludCAoe3gsIHl9KSBhdCB3aGljaCB0aGUgcG9pbnQgYXJndW1lbnQgaW50ZXJzZWN0cyB3aXRoIHRoZVxuICogbm9kZSBhcmd1bWVudCBhc3N1bWluZyB0aGF0IGl0IGhhcyB0aGUgc2hhcGUgc3BlY2lmaWVkIGJ5IHBvbHlnb24uXG4gKi9cbmZ1bmN0aW9uIGludGVyc2VjdFBvbHlnb24obm9kZSwgcG9seVBvaW50cywgcG9pbnQpIHtcbiAgdmFyIHgxID0gbm9kZS54O1xuICB2YXIgeTEgPSBub2RlLnk7XG5cbiAgdmFyIGludGVyc2VjdGlvbnMgPSBbXTtcblxuICB2YXIgbWluWCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgdmFyIG1pblkgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gIHBvbHlQb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICBtaW5YID0gTWF0aC5taW4obWluWCwgZW50cnkueCk7XG4gICAgbWluWSA9IE1hdGgubWluKG1pblksIGVudHJ5LnkpO1xuICB9KTtcblxuICB2YXIgbGVmdCA9IHgxIC0gbm9kZS53aWR0aCAvIDIgLSBtaW5YO1xuICB2YXIgdG9wID0geTEgLSBub2RlLmhlaWdodCAvIDIgLSBtaW5ZO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcG9seVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwMSA9IHBvbHlQb2ludHNbaV07XG4gICAgdmFyIHAyID0gcG9seVBvaW50c1tpIDwgcG9seVBvaW50cy5sZW5ndGggLSAxID8gaSArIDEgOiAwXTtcbiAgICB2YXIgaW50ZXJzZWN0ID0gaW50ZXJzZWN0TGluZShcbiAgICAgIG5vZGUsXG4gICAgICBwb2ludCxcbiAgICAgIHsgeDogbGVmdCArIHAxLngsIHk6IHRvcCArIHAxLnkgfSxcbiAgICAgIHsgeDogbGVmdCArIHAyLngsIHk6IHRvcCArIHAyLnkgfVxuICAgICk7XG4gICAgaWYgKGludGVyc2VjdCkge1xuICAgICAgaW50ZXJzZWN0aW9ucy5wdXNoKGludGVyc2VjdCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFpbnRlcnNlY3Rpb25zLmxlbmd0aCkge1xuICAgIGNvbnNvbGUubG9nKCdOTyBJTlRFUlNFQ1RJT04gRk9VTkQsIFJFVFVSTiBOT0RFIENFTlRFUicsIG5vZGUpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgaWYgKGludGVyc2VjdGlvbnMubGVuZ3RoID4gMSkge1xuICAgIC8vIE1vcmUgaW50ZXJzZWN0aW9ucywgZmluZCB0aGUgb25lIG5lYXJlc3QgdG8gZWRnZSBlbmQgcG9pbnRcbiAgICBpbnRlcnNlY3Rpb25zLnNvcnQoZnVuY3Rpb24gKHAsIHEpIHtcbiAgICAgIHZhciBwZHggPSBwLnggLSBwb2ludC54O1xuICAgICAgdmFyIHBkeSA9IHAueSAtIHBvaW50Lnk7XG4gICAgICB2YXIgZGlzdHAgPSBNYXRoLnNxcnQocGR4ICogcGR4ICsgcGR5ICogcGR5KTtcblxuICAgICAgdmFyIHFkeCA9IHEueCAtIHBvaW50Lng7XG4gICAgICB2YXIgcWR5ID0gcS55IC0gcG9pbnQueTtcbiAgICAgIHZhciBkaXN0cSA9IE1hdGguc3FydChxZHggKiBxZHggKyBxZHkgKiBxZHkpO1xuXG4gICAgICByZXR1cm4gZGlzdHAgPCBkaXN0cSA/IC0xIDogZGlzdHAgPT09IGRpc3RxID8gMCA6IDE7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGludGVyc2VjdGlvbnNbMF07XG59XG4iLCJleHBvcnQgeyBpbnRlcnNlY3RSZWN0IH07XG5cbmZ1bmN0aW9uIGludGVyc2VjdFJlY3Qobm9kZSwgcG9pbnQpIHtcbiAgdmFyIHggPSBub2RlLng7XG4gIHZhciB5ID0gbm9kZS55O1xuXG4gIC8vIFJlY3RhbmdsZSBpbnRlcnNlY3Rpb24gYWxnb3JpdGhtIGZyb206XG4gIC8vIGh0dHA6Ly9tYXRoLnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy8xMDgxMTMvZmluZC1lZGdlLWJldHdlZW4tdHdvLWJveGVzXG4gIHZhciBkeCA9IHBvaW50LnggLSB4O1xuICB2YXIgZHkgPSBwb2ludC55IC0geTtcbiAgdmFyIHcgPSBub2RlLndpZHRoIC8gMjtcbiAgdmFyIGggPSBub2RlLmhlaWdodCAvIDI7XG5cbiAgdmFyIHN4LCBzeTtcbiAgaWYgKE1hdGguYWJzKGR5KSAqIHcgPiBNYXRoLmFicyhkeCkgKiBoKSB7XG4gICAgLy8gSW50ZXJzZWN0aW9uIGlzIHRvcCBvciBib3R0b20gb2YgcmVjdC5cbiAgICBpZiAoZHkgPCAwKSB7XG4gICAgICBoID0gLWg7XG4gICAgfVxuICAgIHN4ID0gZHkgPT09IDAgPyAwIDogKGggKiBkeCkgLyBkeTtcbiAgICBzeSA9IGg7XG4gIH0gZWxzZSB7XG4gICAgLy8gSW50ZXJzZWN0aW9uIGlzIGxlZnQgb3IgcmlnaHQgb2YgcmVjdC5cbiAgICBpZiAoZHggPCAwKSB7XG4gICAgICB3ID0gLXc7XG4gICAgfVxuICAgIHN4ID0gdztcbiAgICBzeSA9IGR4ID09PSAwID8gMCA6ICh3ICogZHkpIC8gZHg7XG4gIH1cblxuICByZXR1cm4geyB4OiB4ICsgc3gsIHk6IHkgKyBzeSB9O1xufVxuIiwiaW1wb3J0IHsgaW50ZXJzZWN0Q2lyY2xlIH0gZnJvbSAnLi9pbnRlcnNlY3QvaW50ZXJzZWN0LWNpcmNsZS5qcyc7XG5pbXBvcnQgeyBpbnRlcnNlY3RFbGxpcHNlIH0gZnJvbSAnLi9pbnRlcnNlY3QvaW50ZXJzZWN0LWVsbGlwc2UuanMnO1xuaW1wb3J0IHsgaW50ZXJzZWN0UG9seWdvbiB9IGZyb20gJy4vaW50ZXJzZWN0L2ludGVyc2VjdC1wb2x5Z29uLmpzJztcbmltcG9ydCB7IGludGVyc2VjdFJlY3QgfSBmcm9tICcuL2ludGVyc2VjdC9pbnRlcnNlY3QtcmVjdC5qcyc7XG5cbmV4cG9ydCB7IHNoYXBlcywgc2V0U2hhcGVzIH07XG5cbnZhciBzaGFwZXMgPSB7XG4gIHJlY3QsXG4gIGVsbGlwc2UsXG4gIGNpcmNsZSxcbiAgZGlhbW9uZCxcbn07XG5cbmZ1bmN0aW9uIHNldFNoYXBlcyh2YWx1ZSkge1xuICBzaGFwZXMgPSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcmVjdChwYXJlbnQsIGJib3gsIG5vZGUpIHtcbiAgdmFyIHNoYXBlU3ZnID0gcGFyZW50XG4gICAgLmluc2VydCgncmVjdCcsICc6Zmlyc3QtY2hpbGQnKVxuICAgIC5hdHRyKCdyeCcsIG5vZGUucngpXG4gICAgLmF0dHIoJ3J5Jywgbm9kZS5yeSlcbiAgICAuYXR0cigneCcsIC1iYm94LndpZHRoIC8gMilcbiAgICAuYXR0cigneScsIC1iYm94LmhlaWdodCAvIDIpXG4gICAgLmF0dHIoJ3dpZHRoJywgYmJveC53aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgYmJveC5oZWlnaHQpO1xuXG4gIG5vZGUuaW50ZXJzZWN0ID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgcmV0dXJuIGludGVyc2VjdFJlY3Qobm9kZSwgcG9pbnQpO1xuICB9O1xuXG4gIHJldHVybiBzaGFwZVN2Zztcbn1cblxuZnVuY3Rpb24gZWxsaXBzZShwYXJlbnQsIGJib3gsIG5vZGUpIHtcbiAgdmFyIHJ4ID0gYmJveC53aWR0aCAvIDI7XG4gIHZhciByeSA9IGJib3guaGVpZ2h0IC8gMjtcbiAgdmFyIHNoYXBlU3ZnID0gcGFyZW50XG4gICAgLmluc2VydCgnZWxsaXBzZScsICc6Zmlyc3QtY2hpbGQnKVxuICAgIC5hdHRyKCd4JywgLWJib3gud2lkdGggLyAyKVxuICAgIC5hdHRyKCd5JywgLWJib3guaGVpZ2h0IC8gMilcbiAgICAuYXR0cigncngnLCByeClcbiAgICAuYXR0cigncnknLCByeSk7XG5cbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICByZXR1cm4gaW50ZXJzZWN0RWxsaXBzZShub2RlLCByeCwgcnksIHBvaW50KTtcbiAgfTtcblxuICByZXR1cm4gc2hhcGVTdmc7XG59XG5cbmZ1bmN0aW9uIGNpcmNsZShwYXJlbnQsIGJib3gsIG5vZGUpIHtcbiAgdmFyIHIgPSBNYXRoLm1heChiYm94LndpZHRoLCBiYm94LmhlaWdodCkgLyAyO1xuICB2YXIgc2hhcGVTdmcgPSBwYXJlbnRcbiAgICAuaW5zZXJ0KCdjaXJjbGUnLCAnOmZpcnN0LWNoaWxkJylcbiAgICAuYXR0cigneCcsIC1iYm94LndpZHRoIC8gMilcbiAgICAuYXR0cigneScsIC1iYm94LmhlaWdodCAvIDIpXG4gICAgLmF0dHIoJ3InLCByKTtcblxuICBub2RlLmludGVyc2VjdCA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgIHJldHVybiBpbnRlcnNlY3RDaXJjbGUobm9kZSwgciwgcG9pbnQpO1xuICB9O1xuXG4gIHJldHVybiBzaGFwZVN2Zztcbn1cblxuLy8gQ2lyY3Vtc2NyaWJlIGFuIGVsbGlwc2UgZm9yIHRoZSBib3VuZGluZyBib3ggd2l0aCBhIGRpYW1vbmQgc2hhcGUuIEkgZGVyaXZlZFxuLy8gdGhlIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgZGlhbW9uZCBzaGFwZSBmcm9tOlxuLy8gaHR0cDovL21hdGhmb3J1bS5vcmcva2IvbWVzc2FnZS5qc3BhP21lc3NhZ2VJRD0zNzUwMjM2XG5mdW5jdGlvbiBkaWFtb25kKHBhcmVudCwgYmJveCwgbm9kZSkge1xuICB2YXIgdyA9IChiYm94LndpZHRoICogTWF0aC5TUVJUMikgLyAyO1xuICB2YXIgaCA9IChiYm94LmhlaWdodCAqIE1hdGguU1FSVDIpIC8gMjtcbiAgdmFyIHBvaW50cyA9IFtcbiAgICB7IHg6IDAsIHk6IC1oIH0sXG4gICAgeyB4OiAtdywgeTogMCB9LFxuICAgIHsgeDogMCwgeTogaCB9LFxuICAgIHsgeDogdywgeTogMCB9LFxuICBdO1xuICB2YXIgc2hhcGVTdmcgPSBwYXJlbnQuaW5zZXJ0KCdwb2x5Z29uJywgJzpmaXJzdC1jaGlsZCcpLmF0dHIoXG4gICAgJ3BvaW50cycsXG4gICAgcG9pbnRzXG4gICAgICAubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHJldHVybiBwLnggKyAnLCcgKyBwLnk7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJyAnKVxuICApO1xuXG4gIG5vZGUuaW50ZXJzZWN0ID0gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gaW50ZXJzZWN0UG9seWdvbihub2RlLCBwb2ludHMsIHApO1xuICB9O1xuXG4gIHJldHVybiBzaGFwZVN2Zztcbn1cbiIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IGxheW91dCB9IGZyb20gJy4uL2RhZ3JlL2luZGV4LmpzJztcbmltcG9ydCB7IGFycm93cywgc2V0QXJyb3dzIH0gZnJvbSAnLi9hcnJvd3MuanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2x1c3RlcnMsIHNldENyZWF0ZUNsdXN0ZXJzIH0gZnJvbSAnLi9jcmVhdGUtY2x1c3RlcnMuanMnO1xuaW1wb3J0IHsgY3JlYXRlRWRnZUxhYmVscywgc2V0Q3JlYXRlRWRnZUxhYmVscyB9IGZyb20gJy4vY3JlYXRlLWVkZ2UtbGFiZWxzLmpzJztcbmltcG9ydCB7IGNyZWF0ZUVkZ2VQYXRocywgc2V0Q3JlYXRlRWRnZVBhdGhzIH0gZnJvbSAnLi9jcmVhdGUtZWRnZS1wYXRocy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVOb2Rlcywgc2V0Q3JlYXRlTm9kZXMgfSBmcm9tICcuL2NyZWF0ZS1ub2Rlcy5qcyc7XG5pbXBvcnQgeyBwb3NpdGlvbkNsdXN0ZXJzIH0gZnJvbSAnLi9wb3NpdGlvbi1jbHVzdGVycy5qcyc7XG5pbXBvcnQgeyBwb3NpdGlvbkVkZ2VMYWJlbHMgfSBmcm9tICcuL3Bvc2l0aW9uLWVkZ2UtbGFiZWxzLmpzJztcbmltcG9ydCB7IHBvc2l0aW9uTm9kZXMgfSBmcm9tICcuL3Bvc2l0aW9uLW5vZGVzLmpzJztcbmltcG9ydCB7IHNoYXBlcywgc2V0U2hhcGVzIH0gZnJvbSAnLi9zaGFwZXMuanMnO1xuXG5leHBvcnQgeyByZW5kZXIgfTtcblxuLy8gVGhpcyBkZXNpZ24gaXMgYmFzZWQgb24gaHR0cDovL2Jvc3Qub2Nrcy5vcmcvbWlrZS9jaGFydC8uXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBmbiA9IGZ1bmN0aW9uIChzdmcsIGcpIHtcbiAgICBwcmVQcm9jZXNzR3JhcGgoZyk7XG5cbiAgICB2YXIgb3V0cHV0R3JvdXAgPSBjcmVhdGVPclNlbGVjdEdyb3VwKHN2ZywgJ291dHB1dCcpO1xuICAgIHZhciBjbHVzdGVyc0dyb3VwID0gY3JlYXRlT3JTZWxlY3RHcm91cChvdXRwdXRHcm91cCwgJ2NsdXN0ZXJzJyk7XG4gICAgdmFyIGVkZ2VQYXRoc0dyb3VwID0gY3JlYXRlT3JTZWxlY3RHcm91cChvdXRwdXRHcm91cCwgJ2VkZ2VQYXRocycpO1xuICAgIHZhciBlZGdlTGFiZWxzID0gY3JlYXRlRWRnZUxhYmVscyhjcmVhdGVPclNlbGVjdEdyb3VwKG91dHB1dEdyb3VwLCAnZWRnZUxhYmVscycpLCBnKTtcbiAgICB2YXIgbm9kZXMgPSBjcmVhdGVOb2RlcyhjcmVhdGVPclNlbGVjdEdyb3VwKG91dHB1dEdyb3VwLCAnbm9kZXMnKSwgZywgc2hhcGVzKTtcblxuICAgIGxheW91dChnKTtcblxuICAgIHBvc2l0aW9uTm9kZXMobm9kZXMsIGcpO1xuICAgIHBvc2l0aW9uRWRnZUxhYmVscyhlZGdlTGFiZWxzLCBnKTtcbiAgICBjcmVhdGVFZGdlUGF0aHMoZWRnZVBhdGhzR3JvdXAsIGcsIGFycm93cyk7XG5cbiAgICB2YXIgY2x1c3RlcnMgPSBjcmVhdGVDbHVzdGVycyhjbHVzdGVyc0dyb3VwLCBnKTtcbiAgICBwb3NpdGlvbkNsdXN0ZXJzKGNsdXN0ZXJzLCBnKTtcblxuICAgIHBvc3RQcm9jZXNzR3JhcGgoZyk7XG4gIH07XG5cbiAgZm4uY3JlYXRlTm9kZXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBjcmVhdGVOb2RlcztcbiAgICBzZXRDcmVhdGVOb2Rlcyh2YWx1ZSk7XG4gICAgcmV0dXJuIGZuO1xuICB9O1xuXG4gIGZuLmNyZWF0ZUNsdXN0ZXJzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gY3JlYXRlQ2x1c3RlcnM7XG4gICAgc2V0Q3JlYXRlQ2x1c3RlcnModmFsdWUpO1xuICAgIHJldHVybiBmbjtcbiAgfTtcblxuICBmbi5jcmVhdGVFZGdlTGFiZWxzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gY3JlYXRlRWRnZUxhYmVscztcbiAgICBzZXRDcmVhdGVFZGdlTGFiZWxzKHZhbHVlKTtcbiAgICByZXR1cm4gZm47XG4gIH07XG5cbiAgZm4uY3JlYXRlRWRnZVBhdGhzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gY3JlYXRlRWRnZVBhdGhzO1xuICAgIHNldENyZWF0ZUVkZ2VQYXRocyh2YWx1ZSk7XG4gICAgcmV0dXJuIGZuO1xuICB9O1xuXG4gIGZuLnNoYXBlcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHNoYXBlcztcbiAgICBzZXRTaGFwZXModmFsdWUpO1xuICAgIHJldHVybiBmbjtcbiAgfTtcblxuICBmbi5hcnJvd3MgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBhcnJvd3M7XG4gICAgc2V0QXJyb3dzKHZhbHVlKTtcbiAgICByZXR1cm4gZm47XG4gIH07XG5cbiAgcmV0dXJuIGZuO1xufVxuXG52YXIgTk9ERV9ERUZBVUxUX0FUVFJTID0ge1xuICBwYWRkaW5nTGVmdDogMTAsXG4gIHBhZGRpbmdSaWdodDogMTAsXG4gIHBhZGRpbmdUb3A6IDEwLFxuICBwYWRkaW5nQm90dG9tOiAxMCxcbiAgcng6IDAsXG4gIHJ5OiAwLFxuICBzaGFwZTogJ3JlY3QnLFxufTtcblxudmFyIEVER0VfREVGQVVMVF9BVFRSUyA9IHtcbiAgYXJyb3doZWFkOiAnbm9ybWFsJyxcbiAgY3VydmU6IGQzLmN1cnZlTGluZWFyLFxufTtcblxuZnVuY3Rpb24gcHJlUHJvY2Vzc0dyYXBoKGcpIHtcbiAgZy5ub2RlcygpLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgbm9kZSA9IGcubm9kZSh2KTtcbiAgICBpZiAoIV8uaGFzKG5vZGUsICdsYWJlbCcpICYmICFnLmNoaWxkcmVuKHYpLmxlbmd0aCkge1xuICAgICAgbm9kZS5sYWJlbCA9IHY7XG4gICAgfVxuXG4gICAgaWYgKF8uaGFzKG5vZGUsICdwYWRkaW5nWCcpKSB7XG4gICAgICBfLmRlZmF1bHRzKG5vZGUsIHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IG5vZGUucGFkZGluZ1gsXG4gICAgICAgIHBhZGRpbmdSaWdodDogbm9kZS5wYWRkaW5nWCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChfLmhhcyhub2RlLCAncGFkZGluZ1knKSkge1xuICAgICAgXy5kZWZhdWx0cyhub2RlLCB7XG4gICAgICAgIHBhZGRpbmdUb3A6IG5vZGUucGFkZGluZ1ksXG4gICAgICAgIHBhZGRpbmdCb3R0b206IG5vZGUucGFkZGluZ1ksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoXy5oYXMobm9kZSwgJ3BhZGRpbmcnKSkge1xuICAgICAgXy5kZWZhdWx0cyhub2RlLCB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiBub2RlLnBhZGRpbmcsXG4gICAgICAgIHBhZGRpbmdSaWdodDogbm9kZS5wYWRkaW5nLFxuICAgICAgICBwYWRkaW5nVG9wOiBub2RlLnBhZGRpbmcsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IG5vZGUucGFkZGluZyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF8uZGVmYXVsdHMobm9kZSwgTk9ERV9ERUZBVUxUX0FUVFJTKTtcblxuICAgIF8uZWFjaChbJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdSaWdodCcsICdwYWRkaW5nVG9wJywgJ3BhZGRpbmdCb3R0b20nXSwgZnVuY3Rpb24gKGspIHtcbiAgICAgIG5vZGVba10gPSBOdW1iZXIobm9kZVtrXSk7XG4gICAgfSk7XG5cbiAgICAvLyBTYXZlIGRpbWVuc2lvbnMgZm9yIHJlc3RvcmUgZHVyaW5nIHBvc3QtcHJvY2Vzc2luZ1xuICAgIGlmIChfLmhhcyhub2RlLCAnd2lkdGgnKSkge1xuICAgICAgbm9kZS5fcHJldldpZHRoID0gbm9kZS53aWR0aDtcbiAgICB9XG4gICAgaWYgKF8uaGFzKG5vZGUsICdoZWlnaHQnKSkge1xuICAgICAgbm9kZS5fcHJldkhlaWdodCA9IG5vZGUuaGVpZ2h0O1xuICAgIH1cbiAgfSk7XG5cbiAgZy5lZGdlcygpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgZWRnZSA9IGcuZWRnZShlKTtcbiAgICBpZiAoIV8uaGFzKGVkZ2UsICdsYWJlbCcpKSB7XG4gICAgICBlZGdlLmxhYmVsID0gJyc7XG4gICAgfVxuICAgIF8uZGVmYXVsdHMoZWRnZSwgRURHRV9ERUZBVUxUX0FUVFJTKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBvc3RQcm9jZXNzR3JhcGgoZykge1xuICBfLmVhY2goZy5ub2RlcygpLCBmdW5jdGlvbiAodikge1xuICAgIHZhciBub2RlID0gZy5ub2RlKHYpO1xuXG4gICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBkaW1lbnNpb25zXG4gICAgaWYgKF8uaGFzKG5vZGUsICdfcHJldldpZHRoJykpIHtcbiAgICAgIG5vZGUud2lkdGggPSBub2RlLl9wcmV2V2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBub2RlLndpZHRoO1xuICAgIH1cblxuICAgIGlmIChfLmhhcyhub2RlLCAnX3ByZXZIZWlnaHQnKSkge1xuICAgICAgbm9kZS5oZWlnaHQgPSBub2RlLl9wcmV2SGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgbm9kZS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgZGVsZXRlIG5vZGUuX3ByZXZXaWR0aDtcbiAgICBkZWxldGUgbm9kZS5fcHJldkhlaWdodDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9yU2VsZWN0R3JvdXAocm9vdCwgbmFtZSkge1xuICB2YXIgc2VsZWN0aW9uID0gcm9vdC5zZWxlY3QoJ2cuJyArIG5hbWUpO1xuICBpZiAoc2VsZWN0aW9uLmVtcHR5KCkpIHtcbiAgICBzZWxlY3Rpb24gPSByb290LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgbmFtZSk7XG4gIH1cbiAgcmV0dXJuIHNlbGVjdGlvbjtcbn1cbiIsImltcG9ydCB7IHAgYXMgcGFyc2VyLCBmIGFzIGZsb3dEYiB9IGZyb20gXCIuL2Zsb3dEYi05NTZlOTJmMS5qc1wiO1xuaW1wb3J0ICogYXMgZ3JhcGhsaWIgZnJvbSBcImRhZ3JlLWQzLWVzL3NyYy9ncmFwaGxpYi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgc2VsZWN0LCBjdXJ2ZUxpbmVhciwgc2VsZWN0QWxsIH0gZnJvbSBcImQzXCI7XG5pbXBvcnQgeyBrIGFzIGdldFN0eWxlc0Zyb21BcnJheSwgbSBhcyBldmFsdWF0ZSwgYyBhcyBnZXRDb25maWcsIHIgYXMgcmVuZGVyS2F0ZXgsIGUgYXMgY29tbW9uLCBsIGFzIGxvZywgbiBhcyBpbnRlcnBvbGF0ZVRvQ3VydmUsIG8gYXMgc2V0dXBHcmFwaFZpZXdib3ggfSBmcm9tIFwiLi9tZXJtYWlkLWI1ODYwYjU0LmpzXCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiZGFncmUtZDMtZXNcIjtcbmltcG9ydCB7IGFwcGx5U3R5bGUgfSBmcm9tIFwiZGFncmUtZDMtZXMvc3JjL2RhZ3JlLWpzL3V0aWwuanNcIjtcbmltcG9ydCB7IGFkZEh0bWxMYWJlbCB9IGZyb20gXCJkYWdyZS1kMy1lcy9zcmMvZGFncmUtanMvbGFiZWwvYWRkLWh0bWwtbGFiZWwuanNcIjtcbmltcG9ydCB7IGludGVyc2VjdFBvbHlnb24gfSBmcm9tIFwiZGFncmUtZDMtZXMvc3JjL2RhZ3JlLWpzL2ludGVyc2VjdC9pbnRlcnNlY3QtcG9seWdvbi5qc1wiO1xuaW1wb3J0IHsgaW50ZXJzZWN0UmVjdCB9IGZyb20gXCJkYWdyZS1kMy1lcy9zcmMvZGFncmUtanMvaW50ZXJzZWN0L2ludGVyc2VjdC1yZWN0LmpzXCI7XG5pbXBvcnQgeyBmIGFzIGZsb3dSZW5kZXJlclYyLCBhIGFzIGZsb3dTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXMtYzEwNjc0YzEuanNcIjtcbmltcG9ydCBcInRzLWRlZGVudFwiO1xuaW1wb3J0IFwiZGF5anNcIjtcbmltcG9ydCBcIkBicmFpbnRyZWUvc2FuaXRpemUtdXJsXCI7XG5pbXBvcnQgXCJkb21wdXJpZnlcIjtcbmltcG9ydCBcImtocm9tYVwiO1xuaW1wb3J0IFwibG9kYXNoLWVzL21lbW9pemUuanNcIjtcbmltcG9ydCBcImxvZGFzaC1lcy9tZXJnZS5qc1wiO1xuaW1wb3J0IFwic3R5bGlzXCI7XG5pbXBvcnQgXCJsb2Rhc2gtZXMvaXNFbXB0eS5qc1wiO1xuaW1wb3J0IFwiLi9pbmRleC0zODYyNjc1ZS5qc1wiO1xuaW1wb3J0IFwiZGFncmUtZDMtZXMvc3JjL2RhZ3JlL2luZGV4LmpzXCI7XG5pbXBvcnQgXCJkYWdyZS1kMy1lcy9zcmMvZ3JhcGhsaWIvanNvbi5qc1wiO1xuaW1wb3J0IFwiLi9lZGdlcy1lMGRhMmE5ZS5qc1wiO1xuaW1wb3J0IFwiLi9jcmVhdGVUZXh0LTJlNWU3ZGQzLmpzXCI7XG5pbXBvcnQgXCJtZGFzdC11dGlsLWZyb20tbWFya2Rvd25cIjtcbmZ1bmN0aW9uIHF1ZXN0aW9uKHBhcmVudCwgYmJveCwgbm9kZSkge1xuICBjb25zdCB3ID0gYmJveC53aWR0aDtcbiAgY29uc3QgaCA9IGJib3guaGVpZ2h0O1xuICBjb25zdCBzID0gKHcgKyBoKSAqIDAuOTtcbiAgY29uc3QgcG9pbnRzID0gW1xuICAgIHsgeDogcyAvIDIsIHk6IDAgfSxcbiAgICB7IHg6IHMsIHk6IC1zIC8gMiB9LFxuICAgIHsgeDogcyAvIDIsIHk6IC1zIH0sXG4gICAgeyB4OiAwLCB5OiAtcyAvIDIgfVxuICBdO1xuICBjb25zdCBzaGFwZVN2ZyA9IGluc2VydFBvbHlnb25TaGFwZShwYXJlbnQsIHMsIHMsIHBvaW50cyk7XG4gIG5vZGUuaW50ZXJzZWN0ID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgICByZXR1cm4gaW50ZXJzZWN0UG9seWdvbihub2RlLCBwb2ludHMsIHBvaW50KTtcbiAgfTtcbiAgcmV0dXJuIHNoYXBlU3ZnO1xufVxuZnVuY3Rpb24gaGV4YWdvbihwYXJlbnQsIGJib3gsIG5vZGUpIHtcbiAgY29uc3QgZiA9IDQ7XG4gIGNvbnN0IGggPSBiYm94LmhlaWdodDtcbiAgY29uc3QgbSA9IGggLyBmO1xuICBjb25zdCB3ID0gYmJveC53aWR0aCArIDIgKiBtO1xuICBjb25zdCBwb2ludHMgPSBbXG4gICAgeyB4OiBtLCB5OiAwIH0sXG4gICAgeyB4OiB3IC0gbSwgeTogMCB9LFxuICAgIHsgeDogdywgeTogLWggLyAyIH0sXG4gICAgeyB4OiB3IC0gbSwgeTogLWggfSxcbiAgICB7IHg6IG0sIHk6IC1oIH0sXG4gICAgeyB4OiAwLCB5OiAtaCAvIDIgfVxuICBdO1xuICBjb25zdCBzaGFwZVN2ZyA9IGluc2VydFBvbHlnb25TaGFwZShwYXJlbnQsIHcsIGgsIHBvaW50cyk7XG4gIG5vZGUuaW50ZXJzZWN0ID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgICByZXR1cm4gaW50ZXJzZWN0UG9seWdvbihub2RlLCBwb2ludHMsIHBvaW50KTtcbiAgfTtcbiAgcmV0dXJuIHNoYXBlU3ZnO1xufVxuZnVuY3Rpb24gcmVjdF9sZWZ0X2ludl9hcnJvdyhwYXJlbnQsIGJib3gsIG5vZGUpIHtcbiAgY29uc3QgdyA9IGJib3gud2lkdGg7XG4gIGNvbnN0IGggPSBiYm94LmhlaWdodDtcbiAgY29uc3QgcG9pbnRzID0gW1xuICAgIHsgeDogLWggLyAyLCB5OiAwIH0sXG4gICAgeyB4OiB3LCB5OiAwIH0sXG4gICAgeyB4OiB3LCB5OiAtaCB9LFxuICAgIHsgeDogLWggLyAyLCB5OiAtaCB9LFxuICAgIHsgeDogMCwgeTogLWggLyAyIH1cbiAgXTtcbiAgY29uc3Qgc2hhcGVTdmcgPSBpbnNlcnRQb2x5Z29uU2hhcGUocGFyZW50LCB3LCBoLCBwb2ludHMpO1xuICBub2RlLmludGVyc2VjdCA9IGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgcmV0dXJuIGludGVyc2VjdFBvbHlnb24obm9kZSwgcG9pbnRzLCBwb2ludCk7XG4gIH07XG4gIHJldHVybiBzaGFwZVN2Zztcbn1cbmZ1bmN0aW9uIGxlYW5fcmlnaHQocGFyZW50LCBiYm94LCBub2RlKSB7XG4gIGNvbnN0IHcgPSBiYm94LndpZHRoO1xuICBjb25zdCBoID0gYmJveC5oZWlnaHQ7XG4gIGNvbnN0IHBvaW50cyA9IFtcbiAgICB7IHg6IC0yICogaCAvIDYsIHk6IDAgfSxcbiAgICB7IHg6IHcgLSBoIC8gNiwgeTogMCB9LFxuICAgIHsgeDogdyArIDIgKiBoIC8gNiwgeTogLWggfSxcbiAgICB7IHg6IGggLyA2LCB5OiAtaCB9XG4gIF07XG4gIGNvbnN0IHNoYXBlU3ZnID0gaW5zZXJ0UG9seWdvblNoYXBlKHBhcmVudCwgdywgaCwgcG9pbnRzKTtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludCkge1xuICAgIHJldHVybiBpbnRlcnNlY3RQb2x5Z29uKG5vZGUsIHBvaW50cywgcG9pbnQpO1xuICB9O1xuICByZXR1cm4gc2hhcGVTdmc7XG59XG5mdW5jdGlvbiBsZWFuX2xlZnQocGFyZW50LCBiYm94LCBub2RlKSB7XG4gIGNvbnN0IHcgPSBiYm94LndpZHRoO1xuICBjb25zdCBoID0gYmJveC5oZWlnaHQ7XG4gIGNvbnN0IHBvaW50cyA9IFtcbiAgICB7IHg6IDIgKiBoIC8gNiwgeTogMCB9LFxuICAgIHsgeDogdyArIGggLyA2LCB5OiAwIH0sXG4gICAgeyB4OiB3IC0gMiAqIGggLyA2LCB5OiAtaCB9LFxuICAgIHsgeDogLWggLyA2LCB5OiAtaCB9XG4gIF07XG4gIGNvbnN0IHNoYXBlU3ZnID0gaW5zZXJ0UG9seWdvblNoYXBlKHBhcmVudCwgdywgaCwgcG9pbnRzKTtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludCkge1xuICAgIHJldHVybiBpbnRlcnNlY3RQb2x5Z29uKG5vZGUsIHBvaW50cywgcG9pbnQpO1xuICB9O1xuICByZXR1cm4gc2hhcGVTdmc7XG59XG5mdW5jdGlvbiB0cmFwZXpvaWQocGFyZW50LCBiYm94LCBub2RlKSB7XG4gIGNvbnN0IHcgPSBiYm94LndpZHRoO1xuICBjb25zdCBoID0gYmJveC5oZWlnaHQ7XG4gIGNvbnN0IHBvaW50cyA9IFtcbiAgICB7IHg6IC0yICogaCAvIDYsIHk6IDAgfSxcbiAgICB7IHg6IHcgKyAyICogaCAvIDYsIHk6IDAgfSxcbiAgICB7IHg6IHcgLSBoIC8gNiwgeTogLWggfSxcbiAgICB7IHg6IGggLyA2LCB5OiAtaCB9XG4gIF07XG4gIGNvbnN0IHNoYXBlU3ZnID0gaW5zZXJ0UG9seWdvblNoYXBlKHBhcmVudCwgdywgaCwgcG9pbnRzKTtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludCkge1xuICAgIHJldHVybiBpbnRlcnNlY3RQb2x5Z29uKG5vZGUsIHBvaW50cywgcG9pbnQpO1xuICB9O1xuICByZXR1cm4gc2hhcGVTdmc7XG59XG5mdW5jdGlvbiBpbnZfdHJhcGV6b2lkKHBhcmVudCwgYmJveCwgbm9kZSkge1xuICBjb25zdCB3ID0gYmJveC53aWR0aDtcbiAgY29uc3QgaCA9IGJib3guaGVpZ2h0O1xuICBjb25zdCBwb2ludHMgPSBbXG4gICAgeyB4OiBoIC8gNiwgeTogMCB9LFxuICAgIHsgeDogdyAtIGggLyA2LCB5OiAwIH0sXG4gICAgeyB4OiB3ICsgMiAqIGggLyA2LCB5OiAtaCB9LFxuICAgIHsgeDogLTIgKiBoIC8gNiwgeTogLWggfVxuICBdO1xuICBjb25zdCBzaGFwZVN2ZyA9IGluc2VydFBvbHlnb25TaGFwZShwYXJlbnQsIHcsIGgsIHBvaW50cyk7XG4gIG5vZGUuaW50ZXJzZWN0ID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgICByZXR1cm4gaW50ZXJzZWN0UG9seWdvbihub2RlLCBwb2ludHMsIHBvaW50KTtcbiAgfTtcbiAgcmV0dXJuIHNoYXBlU3ZnO1xufVxuZnVuY3Rpb24gcmVjdF9yaWdodF9pbnZfYXJyb3cocGFyZW50LCBiYm94LCBub2RlKSB7XG4gIGNvbnN0IHcgPSBiYm94LndpZHRoO1xuICBjb25zdCBoID0gYmJveC5oZWlnaHQ7XG4gIGNvbnN0IHBvaW50cyA9IFtcbiAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICB7IHg6IHcgKyBoIC8gMiwgeTogMCB9LFxuICAgIHsgeDogdywgeTogLWggLyAyIH0sXG4gICAgeyB4OiB3ICsgaCAvIDIsIHk6IC1oIH0sXG4gICAgeyB4OiAwLCB5OiAtaCB9XG4gIF07XG4gIGNvbnN0IHNoYXBlU3ZnID0gaW5zZXJ0UG9seWdvblNoYXBlKHBhcmVudCwgdywgaCwgcG9pbnRzKTtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludCkge1xuICAgIHJldHVybiBpbnRlcnNlY3RQb2x5Z29uKG5vZGUsIHBvaW50cywgcG9pbnQpO1xuICB9O1xuICByZXR1cm4gc2hhcGVTdmc7XG59XG5mdW5jdGlvbiBzdGFkaXVtKHBhcmVudCwgYmJveCwgbm9kZSkge1xuICBjb25zdCBoID0gYmJveC5oZWlnaHQ7XG4gIGNvbnN0IHcgPSBiYm94LndpZHRoICsgaCAvIDQ7XG4gIGNvbnN0IHNoYXBlU3ZnID0gcGFyZW50Lmluc2VydChcInJlY3RcIiwgXCI6Zmlyc3QtY2hpbGRcIikuYXR0cihcInJ4XCIsIGggLyAyKS5hdHRyKFwicnlcIiwgaCAvIDIpLmF0dHIoXCJ4XCIsIC13IC8gMikuYXR0cihcInlcIiwgLWggLyAyKS5hdHRyKFwid2lkdGhcIiwgdykuYXR0cihcImhlaWdodFwiLCBoKTtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludCkge1xuICAgIHJldHVybiBpbnRlcnNlY3RSZWN0KG5vZGUsIHBvaW50KTtcbiAgfTtcbiAgcmV0dXJuIHNoYXBlU3ZnO1xufVxuZnVuY3Rpb24gc3Vicm91dGluZShwYXJlbnQsIGJib3gsIG5vZGUpIHtcbiAgY29uc3QgdyA9IGJib3gud2lkdGg7XG4gIGNvbnN0IGggPSBiYm94LmhlaWdodDtcbiAgY29uc3QgcG9pbnRzID0gW1xuICAgIHsgeDogMCwgeTogMCB9LFxuICAgIHsgeDogdywgeTogMCB9LFxuICAgIHsgeDogdywgeTogLWggfSxcbiAgICB7IHg6IDAsIHk6IC1oIH0sXG4gICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgeyB4OiAtOCwgeTogMCB9LFxuICAgIHsgeDogdyArIDgsIHk6IDAgfSxcbiAgICB7IHg6IHcgKyA4LCB5OiAtaCB9LFxuICAgIHsgeDogLTgsIHk6IC1oIH0sXG4gICAgeyB4OiAtOCwgeTogMCB9XG4gIF07XG4gIGNvbnN0IHNoYXBlU3ZnID0gaW5zZXJ0UG9seWdvblNoYXBlKHBhcmVudCwgdywgaCwgcG9pbnRzKTtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludCkge1xuICAgIHJldHVybiBpbnRlcnNlY3RQb2x5Z29uKG5vZGUsIHBvaW50cywgcG9pbnQpO1xuICB9O1xuICByZXR1cm4gc2hhcGVTdmc7XG59XG5mdW5jdGlvbiBjeWxpbmRlcihwYXJlbnQsIGJib3gsIG5vZGUpIHtcbiAgY29uc3QgdyA9IGJib3gud2lkdGg7XG4gIGNvbnN0IHJ4ID0gdyAvIDI7XG4gIGNvbnN0IHJ5ID0gcnggLyAoMi41ICsgdyAvIDUwKTtcbiAgY29uc3QgaCA9IGJib3guaGVpZ2h0ICsgcnk7XG4gIGNvbnN0IHNoYXBlID0gXCJNIDAsXCIgKyByeSArIFwiIGEgXCIgKyByeCArIFwiLFwiICsgcnkgKyBcIiAwLDAsMCBcIiArIHcgKyBcIiAwIGEgXCIgKyByeCArIFwiLFwiICsgcnkgKyBcIiAwLDAsMCBcIiArIC13ICsgXCIgMCBsIDAsXCIgKyBoICsgXCIgYSBcIiArIHJ4ICsgXCIsXCIgKyByeSArIFwiIDAsMCwwIFwiICsgdyArIFwiIDAgbCAwLFwiICsgLWg7XG4gIGNvbnN0IHNoYXBlU3ZnID0gcGFyZW50LmF0dHIoXCJsYWJlbC1vZmZzZXQteVwiLCByeSkuaW5zZXJ0KFwicGF0aFwiLCBcIjpmaXJzdC1jaGlsZFwiKS5hdHRyKFwiZFwiLCBzaGFwZSkuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIC13IC8gMiArIFwiLFwiICsgLShoIC8gMiArIHJ5KSArIFwiKVwiKTtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludCkge1xuICAgIGNvbnN0IHBvcyA9IGludGVyc2VjdFJlY3Qobm9kZSwgcG9pbnQpO1xuICAgIGNvbnN0IHggPSBwb3MueCAtIG5vZGUueDtcbiAgICBpZiAocnggIT0gMCAmJiAoTWF0aC5hYnMoeCkgPCBub2RlLndpZHRoIC8gMiB8fCBNYXRoLmFicyh4KSA9PSBub2RlLndpZHRoIC8gMiAmJiBNYXRoLmFicyhwb3MueSAtIG5vZGUueSkgPiBub2RlLmhlaWdodCAvIDIgLSByeSkpIHtcbiAgICAgIGxldCB5ID0gcnkgKiByeSAqICgxIC0geCAqIHggLyAocnggKiByeCkpO1xuICAgICAgaWYgKHkgIT0gMCkge1xuICAgICAgICB5ID0gTWF0aC5zcXJ0KHkpO1xuICAgICAgfVxuICAgICAgeSA9IHJ5IC0geTtcbiAgICAgIGlmIChwb2ludC55IC0gbm9kZS55ID4gMCkge1xuICAgICAgICB5ID0gLXk7XG4gICAgICB9XG4gICAgICBwb3MueSArPSB5O1xuICAgIH1cbiAgICByZXR1cm4gcG9zO1xuICB9O1xuICByZXR1cm4gc2hhcGVTdmc7XG59XG5mdW5jdGlvbiBhZGRUb1JlbmRlcihyZW5kZXIyKSB7XG4gIHJlbmRlcjIuc2hhcGVzKCkucXVlc3Rpb24gPSBxdWVzdGlvbjtcbiAgcmVuZGVyMi5zaGFwZXMoKS5oZXhhZ29uID0gaGV4YWdvbjtcbiAgcmVuZGVyMi5zaGFwZXMoKS5zdGFkaXVtID0gc3RhZGl1bTtcbiAgcmVuZGVyMi5zaGFwZXMoKS5zdWJyb3V0aW5lID0gc3Vicm91dGluZTtcbiAgcmVuZGVyMi5zaGFwZXMoKS5jeWxpbmRlciA9IGN5bGluZGVyO1xuICByZW5kZXIyLnNoYXBlcygpLnJlY3RfbGVmdF9pbnZfYXJyb3cgPSByZWN0X2xlZnRfaW52X2Fycm93O1xuICByZW5kZXIyLnNoYXBlcygpLmxlYW5fcmlnaHQgPSBsZWFuX3JpZ2h0O1xuICByZW5kZXIyLnNoYXBlcygpLmxlYW5fbGVmdCA9IGxlYW5fbGVmdDtcbiAgcmVuZGVyMi5zaGFwZXMoKS50cmFwZXpvaWQgPSB0cmFwZXpvaWQ7XG4gIHJlbmRlcjIuc2hhcGVzKCkuaW52X3RyYXBlem9pZCA9IGludl90cmFwZXpvaWQ7XG4gIHJlbmRlcjIuc2hhcGVzKCkucmVjdF9yaWdodF9pbnZfYXJyb3cgPSByZWN0X3JpZ2h0X2ludl9hcnJvdztcbn1cbmZ1bmN0aW9uIGFkZFRvUmVuZGVyVjIoYWRkU2hhcGUpIHtcbiAgYWRkU2hhcGUoeyBxdWVzdGlvbiB9KTtcbiAgYWRkU2hhcGUoeyBoZXhhZ29uIH0pO1xuICBhZGRTaGFwZSh7IHN0YWRpdW0gfSk7XG4gIGFkZFNoYXBlKHsgc3Vicm91dGluZSB9KTtcbiAgYWRkU2hhcGUoeyBjeWxpbmRlciB9KTtcbiAgYWRkU2hhcGUoeyByZWN0X2xlZnRfaW52X2Fycm93IH0pO1xuICBhZGRTaGFwZSh7IGxlYW5fcmlnaHQgfSk7XG4gIGFkZFNoYXBlKHsgbGVhbl9sZWZ0IH0pO1xuICBhZGRTaGFwZSh7IHRyYXBlem9pZCB9KTtcbiAgYWRkU2hhcGUoeyBpbnZfdHJhcGV6b2lkIH0pO1xuICBhZGRTaGFwZSh7IHJlY3RfcmlnaHRfaW52X2Fycm93IH0pO1xufVxuZnVuY3Rpb24gaW5zZXJ0UG9seWdvblNoYXBlKHBhcmVudCwgdywgaCwgcG9pbnRzKSB7XG4gIHJldHVybiBwYXJlbnQuaW5zZXJ0KFwicG9seWdvblwiLCBcIjpmaXJzdC1jaGlsZFwiKS5hdHRyKFxuICAgIFwicG9pbnRzXCIsXG4gICAgcG9pbnRzLm1hcChmdW5jdGlvbihkKSB7XG4gICAgICByZXR1cm4gZC54ICsgXCIsXCIgKyBkLnk7XG4gICAgfSkuam9pbihcIiBcIilcbiAgKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgLXcgLyAyICsgXCIsXCIgKyBoIC8gMiArIFwiKVwiKTtcbn1cbmNvbnN0IGZsb3dDaGFydFNoYXBlcyA9IHtcbiAgYWRkVG9SZW5kZXIsXG4gIGFkZFRvUmVuZGVyVjJcbn07XG5jb25zdCBjb25mID0ge307XG5jb25zdCBzZXRDb25mID0gZnVuY3Rpb24oY25mKSB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjbmYpO1xuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgY29uZltrZXldID0gY25mW2tleV07XG4gIH1cbn07XG5jb25zdCBhZGRWZXJ0aWNlcyA9IGFzeW5jIGZ1bmN0aW9uKHZlcnQsIGcsIHN2Z0lkLCByb290LCBfZG9jLCBkaWFnT2JqKSB7XG4gIGNvbnN0IHN2ZyA9ICFyb290ID8gc2VsZWN0KGBbaWQ9XCIke3N2Z0lkfVwiXWApIDogcm9vdC5zZWxlY3QoYFtpZD1cIiR7c3ZnSWR9XCJdYCk7XG4gIGNvbnN0IGRvYyA9ICFfZG9jID8gZG9jdW1lbnQgOiBfZG9jO1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmVydCk7XG4gIGZvciAoY29uc3QgaWQgb2Yga2V5cykge1xuICAgIGNvbnN0IHZlcnRleCA9IHZlcnRbaWRdO1xuICAgIGxldCBjbGFzc1N0ciA9IFwiZGVmYXVsdFwiO1xuICAgIGlmICh2ZXJ0ZXguY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjbGFzc1N0ciA9IHZlcnRleC5jbGFzc2VzLmpvaW4oXCIgXCIpO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXNGcm9tQXJyYXkodmVydGV4LnN0eWxlcyk7XG4gICAgbGV0IHZlcnRleFRleHQgPSB2ZXJ0ZXgudGV4dCAhPT0gdm9pZCAwID8gdmVydGV4LnRleHQgOiB2ZXJ0ZXguaWQ7XG4gICAgbGV0IHZlcnRleE5vZGU7XG4gICAgaWYgKGV2YWx1YXRlKGdldENvbmZpZygpLmZsb3djaGFydC5odG1sTGFiZWxzKSkge1xuICAgICAgY29uc3Qgbm9kZSA9IHtcbiAgICAgICAgbGFiZWw6IGF3YWl0IHJlbmRlckthdGV4KFxuICAgICAgICAgIHZlcnRleFRleHQucmVwbGFjZShcbiAgICAgICAgICAgIC9mYVtibHJzXT86ZmEtW1xcdy1dKy9nLFxuICAgICAgICAgICAgLy8gY3NwZWxsOmRpc2FibGUtbGluZVxuICAgICAgICAgICAgKHMpID0+IGA8aSBjbGFzcz0nJHtzLnJlcGxhY2UoXCI6XCIsIFwiIFwiKX0nPjwvaT5gXG4gICAgICAgICAgKSxcbiAgICAgICAgICBnZXRDb25maWcoKVxuICAgICAgICApXG4gICAgICB9O1xuICAgICAgdmVydGV4Tm9kZSA9IGFkZEh0bWxMYWJlbChzdmcsIG5vZGUpLm5vZGUoKTtcbiAgICAgIHZlcnRleE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh2ZXJ0ZXhOb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3ZnTGFiZWwgPSBkb2MuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJ0ZXh0XCIpO1xuICAgICAgc3ZnTGFiZWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgc3R5bGVzLmxhYmVsU3R5bGUucmVwbGFjZShcImNvbG9yOlwiLCBcImZpbGw6XCIpKTtcbiAgICAgIGNvbnN0IHJvd3MgPSB2ZXJ0ZXhUZXh0LnNwbGl0KGNvbW1vbi5saW5lQnJlYWtSZWdleCk7XG4gICAgICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgICAgIGNvbnN0IHRzcGFuID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwidHNwYW5cIik7XG4gICAgICAgIHRzcGFuLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIsIFwieG1sOnNwYWNlXCIsIFwicHJlc2VydmVcIik7XG4gICAgICAgIHRzcGFuLnNldEF0dHJpYnV0ZShcImR5XCIsIFwiMWVtXCIpO1xuICAgICAgICB0c3Bhbi5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFwiMVwiKTtcbiAgICAgICAgdHNwYW4udGV4dENvbnRlbnQgPSByb3c7XG4gICAgICAgIHN2Z0xhYmVsLmFwcGVuZENoaWxkKHRzcGFuKTtcbiAgICAgIH1cbiAgICAgIHZlcnRleE5vZGUgPSBzdmdMYWJlbDtcbiAgICB9XG4gICAgbGV0IHJhZGl1cyA9IDA7XG4gICAgbGV0IF9zaGFwZSA9IFwiXCI7XG4gICAgc3dpdGNoICh2ZXJ0ZXgudHlwZSkge1xuICAgICAgY2FzZSBcInJvdW5kXCI6XG4gICAgICAgIHJhZGl1cyA9IDU7XG4gICAgICAgIF9zaGFwZSA9IFwicmVjdFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzcXVhcmVcIjpcbiAgICAgICAgX3NoYXBlID0gXCJyZWN0XCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRpYW1vbmRcIjpcbiAgICAgICAgX3NoYXBlID0gXCJxdWVzdGlvblwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJoZXhhZ29uXCI6XG4gICAgICAgIF9zaGFwZSA9IFwiaGV4YWdvblwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJvZGRcIjpcbiAgICAgICAgX3NoYXBlID0gXCJyZWN0X2xlZnRfaW52X2Fycm93XCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxlYW5fcmlnaHRcIjpcbiAgICAgICAgX3NoYXBlID0gXCJsZWFuX3JpZ2h0XCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxlYW5fbGVmdFwiOlxuICAgICAgICBfc2hhcGUgPSBcImxlYW5fbGVmdFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ0cmFwZXpvaWRcIjpcbiAgICAgICAgX3NoYXBlID0gXCJ0cmFwZXpvaWRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaW52X3RyYXBlem9pZFwiOlxuICAgICAgICBfc2hhcGUgPSBcImludl90cmFwZXpvaWRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwib2RkX3JpZ2h0XCI6XG4gICAgICAgIF9zaGFwZSA9IFwicmVjdF9sZWZ0X2ludl9hcnJvd1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJjaXJjbGVcIjpcbiAgICAgICAgX3NoYXBlID0gXCJjaXJjbGVcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZWxsaXBzZVwiOlxuICAgICAgICBfc2hhcGUgPSBcImVsbGlwc2VcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3RhZGl1bVwiOlxuICAgICAgICBfc2hhcGUgPSBcInN0YWRpdW1cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3Vicm91dGluZVwiOlxuICAgICAgICBfc2hhcGUgPSBcInN1YnJvdXRpbmVcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiY3lsaW5kZXJcIjpcbiAgICAgICAgX3NoYXBlID0gXCJjeWxpbmRlclwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJncm91cFwiOlxuICAgICAgICBfc2hhcGUgPSBcInJlY3RcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBfc2hhcGUgPSBcInJlY3RcIjtcbiAgICB9XG4gICAgbG9nLndhcm4oXCJBZGRpbmcgbm9kZVwiLCB2ZXJ0ZXguaWQsIHZlcnRleC5kb21JZCk7XG4gICAgZy5zZXROb2RlKGRpYWdPYmouZGIubG9va1VwRG9tSWQodmVydGV4LmlkKSwge1xuICAgICAgbGFiZWxUeXBlOiBcInN2Z1wiLFxuICAgICAgbGFiZWxTdHlsZTogc3R5bGVzLmxhYmVsU3R5bGUsXG4gICAgICBzaGFwZTogX3NoYXBlLFxuICAgICAgbGFiZWw6IHZlcnRleE5vZGUsXG4gICAgICByeDogcmFkaXVzLFxuICAgICAgcnk6IHJhZGl1cyxcbiAgICAgIGNsYXNzOiBjbGFzc1N0cixcbiAgICAgIHN0eWxlOiBzdHlsZXMuc3R5bGUsXG4gICAgICBpZDogZGlhZ09iai5kYi5sb29rVXBEb21JZCh2ZXJ0ZXguaWQpXG4gICAgfSk7XG4gIH1cbn07XG5jb25zdCBhZGRFZGdlcyA9IGFzeW5jIGZ1bmN0aW9uKGVkZ2VzLCBnLCBkaWFnT2JqKSB7XG4gIGxldCBjbnQgPSAwO1xuICBsZXQgZGVmYXVsdFN0eWxlO1xuICBsZXQgZGVmYXVsdExhYmVsU3R5bGU7XG4gIGlmIChlZGdlcy5kZWZhdWx0U3R5bGUgIT09IHZvaWQgMCkge1xuICAgIGNvbnN0IGRlZmF1bHRTdHlsZXMgPSBnZXRTdHlsZXNGcm9tQXJyYXkoZWRnZXMuZGVmYXVsdFN0eWxlKTtcbiAgICBkZWZhdWx0U3R5bGUgPSBkZWZhdWx0U3R5bGVzLnN0eWxlO1xuICAgIGRlZmF1bHRMYWJlbFN0eWxlID0gZGVmYXVsdFN0eWxlcy5sYWJlbFN0eWxlO1xuICB9XG4gIGZvciAoY29uc3QgZWRnZSBvZiBlZGdlcykge1xuICAgIGNudCsrO1xuICAgIGNvbnN0IGxpbmtJZCA9IFwiTC1cIiArIGVkZ2Uuc3RhcnQgKyBcIi1cIiArIGVkZ2UuZW5kO1xuICAgIGNvbnN0IGxpbmtOYW1lU3RhcnQgPSBcIkxTLVwiICsgZWRnZS5zdGFydDtcbiAgICBjb25zdCBsaW5rTmFtZUVuZCA9IFwiTEUtXCIgKyBlZGdlLmVuZDtcbiAgICBjb25zdCBlZGdlRGF0YSA9IHt9O1xuICAgIGlmIChlZGdlLnR5cGUgPT09IFwiYXJyb3dfb3BlblwiKSB7XG4gICAgICBlZGdlRGF0YS5hcnJvd2hlYWQgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWRnZURhdGEuYXJyb3doZWFkID0gXCJub3JtYWxcIjtcbiAgICB9XG4gICAgbGV0IHN0eWxlID0gXCJcIjtcbiAgICBsZXQgbGFiZWxTdHlsZSA9IFwiXCI7XG4gICAgaWYgKGVkZ2Uuc3R5bGUgIT09IHZvaWQgMCkge1xuICAgICAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzRnJvbUFycmF5KGVkZ2Uuc3R5bGUpO1xuICAgICAgc3R5bGUgPSBzdHlsZXMuc3R5bGU7XG4gICAgICBsYWJlbFN0eWxlID0gc3R5bGVzLmxhYmVsU3R5bGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAoZWRnZS5zdHJva2UpIHtcbiAgICAgICAgY2FzZSBcIm5vcm1hbFwiOlxuICAgICAgICAgIHN0eWxlID0gXCJmaWxsOm5vbmVcIjtcbiAgICAgICAgICBpZiAoZGVmYXVsdFN0eWxlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHN0eWxlID0gZGVmYXVsdFN0eWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZGVmYXVsdExhYmVsU3R5bGUgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgbGFiZWxTdHlsZSA9IGRlZmF1bHRMYWJlbFN0eWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImRvdHRlZFwiOlxuICAgICAgICAgIHN0eWxlID0gXCJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtZGFzaGFycmF5OjM7XCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ0aGlja1wiOlxuICAgICAgICAgIHN0eWxlID0gXCIgc3Ryb2tlLXdpZHRoOiAzLjVweDtmaWxsOm5vbmVcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgZWRnZURhdGEuc3R5bGUgPSBzdHlsZTtcbiAgICBlZGdlRGF0YS5sYWJlbFN0eWxlID0gbGFiZWxTdHlsZTtcbiAgICBpZiAoZWRnZS5pbnRlcnBvbGF0ZSAhPT0gdm9pZCAwKSB7XG4gICAgICBlZGdlRGF0YS5jdXJ2ZSA9IGludGVycG9sYXRlVG9DdXJ2ZShlZGdlLmludGVycG9sYXRlLCBjdXJ2ZUxpbmVhcik7XG4gICAgfSBlbHNlIGlmIChlZGdlcy5kZWZhdWx0SW50ZXJwb2xhdGUgIT09IHZvaWQgMCkge1xuICAgICAgZWRnZURhdGEuY3VydmUgPSBpbnRlcnBvbGF0ZVRvQ3VydmUoZWRnZXMuZGVmYXVsdEludGVycG9sYXRlLCBjdXJ2ZUxpbmVhcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVkZ2VEYXRhLmN1cnZlID0gaW50ZXJwb2xhdGVUb0N1cnZlKGNvbmYuY3VydmUsIGN1cnZlTGluZWFyKTtcbiAgICB9XG4gICAgaWYgKGVkZ2UudGV4dCA9PT0gdm9pZCAwKSB7XG4gICAgICBpZiAoZWRnZS5zdHlsZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGVkZ2VEYXRhLmFycm93aGVhZFN0eWxlID0gXCJmaWxsOiAjMzMzXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVkZ2VEYXRhLmFycm93aGVhZFN0eWxlID0gXCJmaWxsOiAjMzMzXCI7XG4gICAgICBlZGdlRGF0YS5sYWJlbHBvcyA9IFwiY1wiO1xuICAgICAgaWYgKGV2YWx1YXRlKGdldENvbmZpZygpLmZsb3djaGFydC5odG1sTGFiZWxzKSkge1xuICAgICAgICBlZGdlRGF0YS5sYWJlbFR5cGUgPSBcImh0bWxcIjtcbiAgICAgICAgZWRnZURhdGEubGFiZWwgPSBgPHNwYW4gaWQ9XCJMLSR7bGlua0lkfVwiIGNsYXNzPVwiZWRnZUxhYmVsIEwtJHtsaW5rTmFtZVN0YXJ0fScgTC0ke2xpbmtOYW1lRW5kfVwiIHN0eWxlPVwiJHtlZGdlRGF0YS5sYWJlbFN0eWxlfVwiPiR7YXdhaXQgcmVuZGVyS2F0ZXgoXG4gICAgICAgICAgZWRnZS50ZXh0LnJlcGxhY2UoXG4gICAgICAgICAgICAvZmFbYmxyc10/OmZhLVtcXHctXSsvZyxcbiAgICAgICAgICAgIC8vIGNzcGVsbDpkaXNhYmxlLWxpbmVcbiAgICAgICAgICAgIChzKSA9PiBgPGkgY2xhc3M9JyR7cy5yZXBsYWNlKFwiOlwiLCBcIiBcIil9Jz48L2k+YFxuICAgICAgICAgICksXG4gICAgICAgICAgZ2V0Q29uZmlnKClcbiAgICAgICAgKX08L3NwYW4+YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVkZ2VEYXRhLmxhYmVsVHlwZSA9IFwidGV4dFwiO1xuICAgICAgICBlZGdlRGF0YS5sYWJlbCA9IGVkZ2UudGV4dC5yZXBsYWNlKGNvbW1vbi5saW5lQnJlYWtSZWdleCwgXCJcXG5cIik7XG4gICAgICAgIGlmIChlZGdlLnN0eWxlID09PSB2b2lkIDApIHtcbiAgICAgICAgICBlZGdlRGF0YS5zdHlsZSA9IGVkZ2VEYXRhLnN0eWxlIHx8IFwic3Ryb2tlOiAjMzMzOyBzdHJva2Utd2lkdGg6IDEuNXB4O2ZpbGw6bm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIGVkZ2VEYXRhLmxhYmVsU3R5bGUgPSBlZGdlRGF0YS5sYWJlbFN0eWxlLnJlcGxhY2UoXCJjb2xvcjpcIiwgXCJmaWxsOlwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWRnZURhdGEuaWQgPSBsaW5rSWQ7XG4gICAgZWRnZURhdGEuY2xhc3MgPSBsaW5rTmFtZVN0YXJ0ICsgXCIgXCIgKyBsaW5rTmFtZUVuZDtcbiAgICBlZGdlRGF0YS5taW5sZW4gPSBlZGdlLmxlbmd0aCB8fCAxO1xuICAgIGcuc2V0RWRnZShkaWFnT2JqLmRiLmxvb2tVcERvbUlkKGVkZ2Uuc3RhcnQpLCBkaWFnT2JqLmRiLmxvb2tVcERvbUlkKGVkZ2UuZW5kKSwgZWRnZURhdGEsIGNudCk7XG4gIH1cbn07XG5jb25zdCBnZXRDbGFzc2VzID0gZnVuY3Rpb24odGV4dCwgZGlhZ09iaikge1xuICBsb2cuaW5mbyhcIkV4dHJhY3RpbmcgY2xhc3Nlc1wiKTtcbiAgcmV0dXJuIGRpYWdPYmouZGIuZ2V0Q2xhc3NlcygpO1xufTtcbmNvbnN0IGRyYXcgPSBhc3luYyBmdW5jdGlvbih0ZXh0LCBpZCwgX3ZlcnNpb24sIGRpYWdPYmopIHtcbiAgbG9nLmluZm8oXCJEcmF3aW5nIGZsb3djaGFydFwiKTtcbiAgY29uc3QgeyBzZWN1cml0eUxldmVsLCBmbG93Y2hhcnQ6IGNvbmYyIH0gPSBnZXRDb25maWcoKTtcbiAgbGV0IHNhbmRib3hFbGVtZW50O1xuICBpZiAoc2VjdXJpdHlMZXZlbCA9PT0gXCJzYW5kYm94XCIpIHtcbiAgICBzYW5kYm94RWxlbWVudCA9IHNlbGVjdChcIiNpXCIgKyBpZCk7XG4gIH1cbiAgY29uc3Qgcm9vdCA9IHNlY3VyaXR5TGV2ZWwgPT09IFwic2FuZGJveFwiID8gc2VsZWN0KHNhbmRib3hFbGVtZW50Lm5vZGVzKClbMF0uY29udGVudERvY3VtZW50LmJvZHkpIDogc2VsZWN0KFwiYm9keVwiKTtcbiAgY29uc3QgZG9jID0gc2VjdXJpdHlMZXZlbCA9PT0gXCJzYW5kYm94XCIgPyBzYW5kYm94RWxlbWVudC5ub2RlcygpWzBdLmNvbnRlbnREb2N1bWVudCA6IGRvY3VtZW50O1xuICBsZXQgZGlyID0gZGlhZ09iai5kYi5nZXREaXJlY3Rpb24oKTtcbiAgaWYgKGRpciA9PT0gdm9pZCAwKSB7XG4gICAgZGlyID0gXCJURFwiO1xuICB9XG4gIGNvbnN0IG5vZGVTcGFjaW5nID0gY29uZjIubm9kZVNwYWNpbmcgfHwgNTA7XG4gIGNvbnN0IHJhbmtTcGFjaW5nID0gY29uZjIucmFua1NwYWNpbmcgfHwgNTA7XG4gIGNvbnN0IGcgPSBuZXcgZ3JhcGhsaWIuR3JhcGgoe1xuICAgIG11bHRpZ3JhcGg6IHRydWUsXG4gICAgY29tcG91bmQ6IHRydWVcbiAgfSkuc2V0R3JhcGgoe1xuICAgIHJhbmtkaXI6IGRpcixcbiAgICBub2Rlc2VwOiBub2RlU3BhY2luZyxcbiAgICByYW5rc2VwOiByYW5rU3BhY2luZyxcbiAgICBtYXJnaW54OiA4LFxuICAgIG1hcmdpbnk6IDhcbiAgfSkuc2V0RGVmYXVsdEVkZ2VMYWJlbChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge307XG4gIH0pO1xuICBsZXQgc3ViRztcbiAgY29uc3Qgc3ViR3JhcGhzID0gZGlhZ09iai5kYi5nZXRTdWJHcmFwaHMoKTtcbiAgZm9yIChsZXQgaTIgPSBzdWJHcmFwaHMubGVuZ3RoIC0gMTsgaTIgPj0gMDsgaTItLSkge1xuICAgIHN1YkcgPSBzdWJHcmFwaHNbaTJdO1xuICAgIGRpYWdPYmouZGIuYWRkVmVydGV4KHN1YkcuaWQsIHN1YkcudGl0bGUsIFwiZ3JvdXBcIiwgdm9pZCAwLCBzdWJHLmNsYXNzZXMpO1xuICB9XG4gIGNvbnN0IHZlcnQgPSBkaWFnT2JqLmRiLmdldFZlcnRpY2VzKCk7XG4gIGxvZy53YXJuKFwiR2V0IHZlcnRpY2VzXCIsIHZlcnQpO1xuICBjb25zdCBlZGdlcyA9IGRpYWdPYmouZGIuZ2V0RWRnZXMoKTtcbiAgbGV0IGkgPSAwO1xuICBmb3IgKGkgPSBzdWJHcmFwaHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBzdWJHID0gc3ViR3JhcGhzW2ldO1xuICAgIHNlbGVjdEFsbChcImNsdXN0ZXJcIikuYXBwZW5kKFwidGV4dFwiKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN1Ykcubm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxvZy53YXJuKFxuICAgICAgICBcIlNldHRpbmcgc3ViZ3JhcGhcIixcbiAgICAgICAgc3ViRy5ub2Rlc1tqXSxcbiAgICAgICAgZGlhZ09iai5kYi5sb29rVXBEb21JZChzdWJHLm5vZGVzW2pdKSxcbiAgICAgICAgZGlhZ09iai5kYi5sb29rVXBEb21JZChzdWJHLmlkKVxuICAgICAgKTtcbiAgICAgIGcuc2V0UGFyZW50KGRpYWdPYmouZGIubG9va1VwRG9tSWQoc3ViRy5ub2Rlc1tqXSksIGRpYWdPYmouZGIubG9va1VwRG9tSWQoc3ViRy5pZCkpO1xuICAgIH1cbiAgfVxuICBhd2FpdCBhZGRWZXJ0aWNlcyh2ZXJ0LCBnLCBpZCwgcm9vdCwgZG9jLCBkaWFnT2JqKTtcbiAgYXdhaXQgYWRkRWRnZXMoZWRnZXMsIGcsIGRpYWdPYmopO1xuICBjb25zdCByZW5kZXIkMSA9IG5ldyByZW5kZXIoKTtcbiAgZmxvd0NoYXJ0U2hhcGVzLmFkZFRvUmVuZGVyKHJlbmRlciQxKTtcbiAgcmVuZGVyJDEuYXJyb3dzKCkubm9uZSA9IGZ1bmN0aW9uIG5vcm1hbChwYXJlbnQsIGlkMiwgZWRnZSwgdHlwZSkge1xuICAgIGNvbnN0IG1hcmtlciA9IHBhcmVudC5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIGlkMikuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgMTAgMTBcIikuYXR0cihcInJlZlhcIiwgOSkuYXR0cihcInJlZllcIiwgNSkuYXR0cihcIm1hcmtlclVuaXRzXCIsIFwic3Ryb2tlV2lkdGhcIikuYXR0cihcIm1hcmtlcldpZHRoXCIsIDgpLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgNikuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIik7XG4gICAgY29uc3QgcGF0aCA9IG1hcmtlci5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSAwIDAgTCAwIDAgTCAwIDAgelwiKTtcbiAgICBhcHBseVN0eWxlKHBhdGgsIGVkZ2VbdHlwZSArIFwiU3R5bGVcIl0pO1xuICB9O1xuICByZW5kZXIkMS5hcnJvd3MoKS5ub3JtYWwgPSBmdW5jdGlvbiBub3JtYWwocGFyZW50LCBpZDIpIHtcbiAgICBjb25zdCBtYXJrZXIgPSBwYXJlbnQuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBpZDIpLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIDEwIDEwXCIpLmF0dHIoXCJyZWZYXCIsIDkpLmF0dHIoXCJyZWZZXCIsIDUpLmF0dHIoXCJtYXJrZXJVbml0c1wiLCBcInN0cm9rZVdpZHRoXCIpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCA4KS5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDYpLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpO1xuICAgIG1hcmtlci5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSAwIDAgTCAxMCA1IEwgMCAxMCB6XCIpLmF0dHIoXCJjbGFzc1wiLCBcImFycm93aGVhZFBhdGhcIikuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgMSkuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiMSwwXCIpO1xuICB9O1xuICBjb25zdCBzdmcgPSByb290LnNlbGVjdChgW2lkPVwiJHtpZH1cIl1gKTtcbiAgY29uc3QgZWxlbWVudCA9IHJvb3Quc2VsZWN0KFwiI1wiICsgaWQgKyBcIiBnXCIpO1xuICByZW5kZXIkMShlbGVtZW50LCBnKTtcbiAgZWxlbWVudC5zZWxlY3RBbGwoXCJnLm5vZGVcIikuYXR0cihcInRpdGxlXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkaWFnT2JqLmRiLmdldFRvb2x0aXAodGhpcy5pZCk7XG4gIH0pO1xuICBkaWFnT2JqLmRiLmluZGV4Tm9kZXMoXCJzdWJHcmFwaFwiICsgaSk7XG4gIGZvciAoaSA9IDA7IGkgPCBzdWJHcmFwaHMubGVuZ3RoOyBpKyspIHtcbiAgICBzdWJHID0gc3ViR3JhcGhzW2ldO1xuICAgIGlmIChzdWJHLnRpdGxlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBjb25zdCBjbHVzdGVyUmVjdHMgPSBkb2MucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgXCIjXCIgKyBpZCArICcgW2lkPVwiJyArIGRpYWdPYmouZGIubG9va1VwRG9tSWQoc3ViRy5pZCkgKyAnXCJdIHJlY3QnXG4gICAgICApO1xuICAgICAgY29uc3QgY2x1c3RlckVsID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIFwiI1wiICsgaWQgKyAnIFtpZD1cIicgKyBkaWFnT2JqLmRiLmxvb2tVcERvbUlkKHN1YkcuaWQpICsgJ1wiXSdcbiAgICAgICk7XG4gICAgICBjb25zdCB4UG9zID0gY2x1c3RlclJlY3RzWzBdLnguYmFzZVZhbC52YWx1ZTtcbiAgICAgIGNvbnN0IHlQb3MgPSBjbHVzdGVyUmVjdHNbMF0ueS5iYXNlVmFsLnZhbHVlO1xuICAgICAgY29uc3QgX3dpZHRoID0gY2x1c3RlclJlY3RzWzBdLndpZHRoLmJhc2VWYWwudmFsdWU7XG4gICAgICBjb25zdCBjbHVzdGVyID0gc2VsZWN0KGNsdXN0ZXJFbFswXSk7XG4gICAgICBjb25zdCB0ZSA9IGNsdXN0ZXIuc2VsZWN0KFwiLmxhYmVsXCIpO1xuICAgICAgdGUuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7eFBvcyArIF93aWR0aCAvIDJ9LCAke3lQb3MgKyAxNH0pYCk7XG4gICAgICB0ZS5hdHRyKFwiaWRcIiwgaWQgKyBcIlRleHRcIik7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN1YkcuY2xhc3Nlcy5sZW5ndGg7IGorKykge1xuICAgICAgICBjbHVzdGVyRWxbMF0uY2xhc3NMaXN0LmFkZChzdWJHLmNsYXNzZXNbal0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIWNvbmYyLmh0bWxMYWJlbHMpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnW2lkPVwiJyArIGlkICsgJ1wiXSAuZWRnZUxhYmVsIC5sYWJlbCcpO1xuICAgIGZvciAoY29uc3QgbGFiZWwgb2YgbGFiZWxzKSB7XG4gICAgICBjb25zdCBkaW0gPSBsYWJlbC5nZXRCQm94KCk7XG4gICAgICBjb25zdCByZWN0ID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicmVjdFwiKTtcbiAgICAgIHJlY3Quc2V0QXR0cmlidXRlKFwicnhcIiwgMCk7XG4gICAgICByZWN0LnNldEF0dHJpYnV0ZShcInJ5XCIsIDApO1xuICAgICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBkaW0ud2lkdGgpO1xuICAgICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgZGltLmhlaWdodCk7XG4gICAgICBsYWJlbC5pbnNlcnRCZWZvcmUocmVjdCwgbGFiZWwuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG4gIHNldHVwR3JhcGhWaWV3Ym94KGcsIHN2ZywgY29uZjIuZGlhZ3JhbVBhZGRpbmcsIGNvbmYyLnVzZU1heFdpZHRoKTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZlcnQpO1xuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgY29uc3QgdmVydGV4ID0gdmVydFtrZXldO1xuICAgIGlmICh2ZXJ0ZXgubGluaykge1xuICAgICAgY29uc3Qgbm9kZSA9IHJvb3Quc2VsZWN0KFwiI1wiICsgaWQgKyAnIFtpZD1cIicgKyBkaWFnT2JqLmRiLmxvb2tVcERvbUlkKGtleSkgKyAnXCJdJyk7XG4gICAgICBpZiAobm9kZSkge1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiYVwiKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiY2xhc3NcIiwgdmVydGV4LmNsYXNzZXMuam9pbihcIiBcIikpO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJocmVmXCIsIHZlcnRleC5saW5rKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicmVsXCIsIFwibm9vcGVuZXJcIik7XG4gICAgICAgIGlmIChzZWN1cml0eUxldmVsID09PSBcInNhbmRib3hcIikge1xuICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInRhcmdldFwiLCBcIl90b3BcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodmVydGV4LmxpbmtUYXJnZXQpIHtcbiAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJ0YXJnZXRcIiwgdmVydGV4LmxpbmtUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxpbmtOb2RlID0gbm9kZS5pbnNlcnQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGxpbms7XG4gICAgICAgIH0sIFwiOmZpcnN0LWNoaWxkXCIpO1xuICAgICAgICBjb25zdCBzaGFwZSA9IG5vZGUuc2VsZWN0KFwiLmxhYmVsLWNvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKHNoYXBlKSB7XG4gICAgICAgICAgbGlua05vZGUuYXBwZW5kKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNoYXBlLm5vZGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYWJlbCA9IG5vZGUuc2VsZWN0KFwiLmxhYmVsXCIpO1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICBsaW5rTm9kZS5hcHBlbmQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbGFiZWwubm9kZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5jb25zdCBmbG93UmVuZGVyZXIgPSB7XG4gIHNldENvbmYsXG4gIGFkZFZlcnRpY2VzLFxuICBhZGRFZGdlcyxcbiAgZ2V0Q2xhc3NlcyxcbiAgZHJhd1xufTtcbmNvbnN0IGRpYWdyYW0gPSB7XG4gIHBhcnNlcixcbiAgZGI6IGZsb3dEYixcbiAgcmVuZGVyZXI6IGZsb3dSZW5kZXJlclYyLFxuICBzdHlsZXM6IGZsb3dTdHlsZXMsXG4gIGluaXQ6IChjbmYpID0+IHtcbiAgICBpZiAoIWNuZi5mbG93Y2hhcnQpIHtcbiAgICAgIGNuZi5mbG93Y2hhcnQgPSB7fTtcbiAgICB9XG4gICAgY25mLmZsb3djaGFydC5hcnJvd01hcmtlckFic29sdXRlID0gY25mLmFycm93TWFya2VyQWJzb2x1dGU7XG4gICAgZmxvd1JlbmRlcmVyLnNldENvbmYoY25mLmZsb3djaGFydCk7XG4gICAgZmxvd0RiLmNsZWFyKCk7XG4gICAgZmxvd0RiLnNldEdlbihcImdlbi0xXCIpO1xuICB9XG59O1xuZXhwb3J0IHtcbiAgZGlhZ3JhbVxufTtcbiJdLCJuYW1lcyI6WyJ1dGlsLmFwcGx5U3R5bGUiLCJhZGRIdG1sTGFiZWwiLCJ1dGlsLmlzU3ViZ3JhcGgiLCJ1dGlsLmFwcGx5VHJhbnNpdGlvbiIsImQzLnNlbGVjdCIsInV0aWwuZWRnZVRvSWQiLCJfLmhhcyIsInV0aWwuYXBwbHlDbGFzcyIsIl8udW5pcXVlSWQiLCJkM1xuICAgICAgLnNlbGVjdCIsImxpbmUiLCJkMy5saW5lIiwiZDMuc3ZnIiwiXy5yYW5nZSIsIl8ucGljayIsInV0aWxcbiAgICAuYXBwbHlUcmFuc2l0aW9uIiwibGF5b3V0IiwiZDMuY3VydmVMaW5lYXIiLCJfLmRlZmF1bHRzIiwiXy5lYWNoIiwic2VsZWN0IiwiZ2V0U3R5bGVzRnJvbUFycmF5IiwiZXZhbHVhdGUiLCJnZXRDb25maWciLCJyZW5kZXJLYXRleCIsImNvbW1vbiIsImxvZyIsImludGVycG9sYXRlVG9DdXJ2ZSIsImN1cnZlTGluZWFyIiwiZ3JhcGhsaWIuR3JhcGgiLCJzZWxlY3RBbGwiLCJhcHBseVN0eWxlIiwic2V0dXBHcmFwaFZpZXdib3giLCJwYXJzZXIiLCJmbG93RGIiLCJmbG93UmVuZGVyZXJWMiIsImZsb3dTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsWUFBWSxDQUFDLFFBQVEsRUFBRTtBQUNoQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2pGLEVBQUUsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsQ0FBQztB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QUFNLEtBQUssR0FBRyxNQUFNLEdBQUcsRUFBRSxHQUFHLEtBQUssR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxTQUFTLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsU0FBUyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDeEwsRUFBRSxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUMxSyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxLQUFLLEVBQUU7QUFDbkMsSUFBSSxNQUFNLEdBQUcsR0FBRyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzNDLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzdCLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFD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
