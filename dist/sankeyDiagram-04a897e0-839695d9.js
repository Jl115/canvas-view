'use strict';

var index = require('./index-d3f4d11e.js');
require('./main-8c6d7706.js');
var Tableau10 = require('./Tableau10-2d909d9e.js');
var ordinal = require('./ordinal-457f9936.js');
require('obsidian');
require('@/components/modals');
require('@/views/view');
require('./init-8ddd39ad.js');

function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  }
  return max;
}

function min(values, valueof) {
  let min;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  }
  return min;
}

function sum(values, valueof) {
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value = +value) {
        sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index, values)) {
        sum += value;
      }
    }
  }
  return sum;
}

function targetDepth(d) {
  return d.target.depth;
}

function left(node) {
  return node.depth;
}

function right(node, n) {
  return n - 1 - node.height;
}

function justify(node, n) {
  return node.sourceLinks.length ? node.depth : n - 1;
}

function center(node) {
  return node.targetLinks.length ? node.depth
      : node.sourceLinks.length ? min(node.sourceLinks, targetDepth) - 1
      : 0;
}

function constant$1(x) {
  return function() {
    return x;
  };
}

function ascendingSourceBreadth(a, b) {
  return ascendingBreadth(a.source, b.source) || a.index - b.index;
}

function ascendingTargetBreadth(a, b) {
  return ascendingBreadth(a.target, b.target) || a.index - b.index;
}

function ascendingBreadth(a, b) {
  return a.y0 - b.y0;
}

function value(d) {
  return d.value;
}

function defaultId(d) {
  return d.index;
}

function defaultNodes(graph) {
  return graph.nodes;
}

function defaultLinks(graph) {
  return graph.links;
}

function find(nodeById, id) {
  const node = nodeById.get(id);
  if (!node) throw new Error("missing: " + id);
  return node;
}

function computeLinkBreadths({nodes}) {
  for (const node of nodes) {
    let y0 = node.y0;
    let y1 = y0;
    for (const link of node.sourceLinks) {
      link.y0 = y0 + link.width / 2;
      y0 += link.width;
    }
    for (const link of node.targetLinks) {
      link.y1 = y1 + link.width / 2;
      y1 += link.width;
    }
  }
}

function Sankey() {
  let x0 = 0, y0 = 0, x1 = 1, y1 = 1; // extent
  let dx = 24; // nodeWidth
  let dy = 8, py; // nodePadding
  let id = defaultId;
  let align = justify;
  let sort;
  let linkSort;
  let nodes = defaultNodes;
  let links = defaultLinks;
  let iterations = 6;

  function sankey() {
    const graph = {nodes: nodes.apply(null, arguments), links: links.apply(null, arguments)};
    computeNodeLinks(graph);
    computeNodeValues(graph);
    computeNodeDepths(graph);
    computeNodeHeights(graph);
    computeNodeBreadths(graph);
    computeLinkBreadths(graph);
    return graph;
  }

  sankey.update = function(graph) {
    computeLinkBreadths(graph);
    return graph;
  };

  sankey.nodeId = function(_) {
    return arguments.length ? (id = typeof _ === "function" ? _ : constant$1(_), sankey) : id;
  };

  sankey.nodeAlign = function(_) {
    return arguments.length ? (align = typeof _ === "function" ? _ : constant$1(_), sankey) : align;
  };

  sankey.nodeSort = function(_) {
    return arguments.length ? (sort = _, sankey) : sort;
  };

  sankey.nodeWidth = function(_) {
    return arguments.length ? (dx = +_, sankey) : dx;
  };

  sankey.nodePadding = function(_) {
    return arguments.length ? (dy = py = +_, sankey) : dy;
  };

  sankey.nodes = function(_) {
    return arguments.length ? (nodes = typeof _ === "function" ? _ : constant$1(_), sankey) : nodes;
  };

  sankey.links = function(_) {
    return arguments.length ? (links = typeof _ === "function" ? _ : constant$1(_), sankey) : links;
  };

  sankey.linkSort = function(_) {
    return arguments.length ? (linkSort = _, sankey) : linkSort;
  };

  sankey.size = function(_) {
    return arguments.length ? (x0 = y0 = 0, x1 = +_[0], y1 = +_[1], sankey) : [x1 - x0, y1 - y0];
  };

  sankey.extent = function(_) {
    return arguments.length ? (x0 = +_[0][0], x1 = +_[1][0], y0 = +_[0][1], y1 = +_[1][1], sankey) : [[x0, y0], [x1, y1]];
  };

  sankey.iterations = function(_) {
    return arguments.length ? (iterations = +_, sankey) : iterations;
  };

  function computeNodeLinks({nodes, links}) {
    for (const [i, node] of nodes.entries()) {
      node.index = i;
      node.sourceLinks = [];
      node.targetLinks = [];
    }
    const nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d]));
    for (const [i, link] of links.entries()) {
      link.index = i;
      let {source, target} = link;
      if (typeof source !== "object") source = link.source = find(nodeById, source);
      if (typeof target !== "object") target = link.target = find(nodeById, target);
      source.sourceLinks.push(link);
      target.targetLinks.push(link);
    }
    if (linkSort != null) {
      for (const {sourceLinks, targetLinks} of nodes) {
        sourceLinks.sort(linkSort);
        targetLinks.sort(linkSort);
      }
    }
  }

  function computeNodeValues({nodes}) {
    for (const node of nodes) {
      node.value = node.fixedValue === undefined
          ? Math.max(sum(node.sourceLinks, value), sum(node.targetLinks, value))
          : node.fixedValue;
    }
  }

  function computeNodeDepths({nodes}) {
    const n = nodes.length;
    let current = new Set(nodes);
    let next = new Set;
    let x = 0;
    while (current.size) {
      for (const node of current) {
        node.depth = x;
        for (const {target} of node.sourceLinks) {
          next.add(target);
        }
      }
      if (++x > n) throw new Error("circular link");
      current = next;
      next = new Set;
    }
  }

  function computeNodeHeights({nodes}) {
    const n = nodes.length;
    let current = new Set(nodes);
    let next = new Set;
    let x = 0;
    while (current.size) {
      for (const node of current) {
        node.height = x;
        for (const {source} of node.targetLinks) {
          next.add(source);
        }
      }
      if (++x > n) throw new Error("circular link");
      current = next;
      next = new Set;
    }
  }

  function computeNodeLayers({nodes}) {
    const x = max(nodes, d => d.depth) + 1;
    const kx = (x1 - x0 - dx) / (x - 1);
    const columns = new Array(x);
    for (const node of nodes) {
      const i = Math.max(0, Math.min(x - 1, Math.floor(align.call(null, node, x))));
      node.layer = i;
      node.x0 = x0 + i * kx;
      node.x1 = node.x0 + dx;
      if (columns[i]) columns[i].push(node);
      else columns[i] = [node];
    }
    if (sort) for (const column of columns) {
      column.sort(sort);
    }
    return columns;
  }

  function initializeNodeBreadths(columns) {
    const ky = min(columns, c => (y1 - y0 - (c.length - 1) * py) / sum(c, value));
    for (const nodes of columns) {
      let y = y0;
      for (const node of nodes) {
        node.y0 = y;
        node.y1 = y + node.value * ky;
        y = node.y1 + py;
        for (const link of node.sourceLinks) {
          link.width = link.value * ky;
        }
      }
      y = (y1 - y + py) / (nodes.length + 1);
      for (let i = 0; i < nodes.length; ++i) {
        const node = nodes[i];
        node.y0 += y * (i + 1);
        node.y1 += y * (i + 1);
      }
      reorderLinks(nodes);
    }
  }

  function computeNodeBreadths(graph) {
    const columns = computeNodeLayers(graph);
    py = Math.min(dy, (y1 - y0) / (max(columns, c => c.length) - 1));
    initializeNodeBreadths(columns);
    for (let i = 0; i < iterations; ++i) {
      const alpha = Math.pow(0.99, i);
      const beta = Math.max(1 - alpha, (i + 1) / iterations);
      relaxRightToLeft(columns, alpha, beta);
      relaxLeftToRight(columns, alpha, beta);
    }
  }

  // Reposition each node based on its incoming (target) links.
  function relaxLeftToRight(columns, alpha, beta) {
    for (let i = 1, n = columns.length; i < n; ++i) {
      const column = columns[i];
      for (const target of column) {
        let y = 0;
        let w = 0;
        for (const {source, value} of target.targetLinks) {
          let v = value * (target.layer - source.layer);
          y += targetTop(source, target) * v;
          w += v;
        }
        if (!(w > 0)) continue;
        let dy = (y / w - target.y0) * alpha;
        target.y0 += dy;
        target.y1 += dy;
        reorderNodeLinks(target);
      }
      if (sort === undefined) column.sort(ascendingBreadth);
      resolveCollisions(column, beta);
    }
  }

  // Reposition each node based on its outgoing (source) links.
  function relaxRightToLeft(columns, alpha, beta) {
    for (let n = columns.length, i = n - 2; i >= 0; --i) {
      const column = columns[i];
      for (const source of column) {
        let y = 0;
        let w = 0;
        for (const {target, value} of source.sourceLinks) {
          let v = value * (target.layer - source.layer);
          y += sourceTop(source, target) * v;
          w += v;
        }
        if (!(w > 0)) continue;
        let dy = (y / w - source.y0) * alpha;
        source.y0 += dy;
        source.y1 += dy;
        reorderNodeLinks(source);
      }
      if (sort === undefined) column.sort(ascendingBreadth);
      resolveCollisions(column, beta);
    }
  }

  function resolveCollisions(nodes, alpha) {
    const i = nodes.length >> 1;
    const subject = nodes[i];
    resolveCollisionsBottomToTop(nodes, subject.y0 - py, i - 1, alpha);
    resolveCollisionsTopToBottom(nodes, subject.y1 + py, i + 1, alpha);
    resolveCollisionsBottomToTop(nodes, y1, nodes.length - 1, alpha);
    resolveCollisionsTopToBottom(nodes, y0, 0, alpha);
  }

  // Push any overlapping nodes down.
  function resolveCollisionsTopToBottom(nodes, y, i, alpha) {
    for (; i < nodes.length; ++i) {
      const node = nodes[i];
      const dy = (y - node.y0) * alpha;
      if (dy > 1e-6) node.y0 += dy, node.y1 += dy;
      y = node.y1 + py;
    }
  }

  // Push any overlapping nodes up.
  function resolveCollisionsBottomToTop(nodes, y, i, alpha) {
    for (; i >= 0; --i) {
      const node = nodes[i];
      const dy = (node.y1 - y) * alpha;
      if (dy > 1e-6) node.y0 -= dy, node.y1 -= dy;
      y = node.y0 - py;
    }
  }

  function reorderNodeLinks({sourceLinks, targetLinks}) {
    if (linkSort === undefined) {
      for (const {source: {sourceLinks}} of targetLinks) {
        sourceLinks.sort(ascendingTargetBreadth);
      }
      for (const {target: {targetLinks}} of sourceLinks) {
        targetLinks.sort(ascendingSourceBreadth);
      }
    }
  }

  function reorderLinks(nodes) {
    if (linkSort === undefined) {
      for (const {sourceLinks, targetLinks} of nodes) {
        sourceLinks.sort(ascendingTargetBreadth);
        targetLinks.sort(ascendingSourceBreadth);
      }
    }
  }

  // Returns the target.y0 that would produce an ideal link from source to target.
  function targetTop(source, target) {
    let y = source.y0 - (source.sourceLinks.length - 1) * py / 2;
    for (const {target: node, width} of source.sourceLinks) {
      if (node === target) break;
      y += width + py;
    }
    for (const {source: node, width} of target.targetLinks) {
      if (node === source) break;
      y -= width;
    }
    return y;
  }

  // Returns the source.y0 that would produce an ideal link from source to target.
  function sourceTop(source, target) {
    let y = target.y0 - (target.targetLinks.length - 1) * py / 2;
    for (const {source: node, width} of target.targetLinks) {
      if (node === source) break;
      y += width + py;
    }
    for (const {target: node, width} of source.sourceLinks) {
      if (node === target) break;
      y -= width;
    }
    return y;
  }

  return sankey;
}

var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

function constant(x) {
  return function constant() {
    return x;
  };
}

function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}

var slice = Array.prototype.slice;

function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x$1 = x,
      y$1 = y,
      context = null;

  function link() {
    var buffer, argv = slice.call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = path();
    curve(context, +x$1.apply(this, (argv[0] = s, argv)), +y$1.apply(this, argv), +x$1.apply(this, (argv[0] = t, argv)), +y$1.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant(+_), link) : x$1;
  };

  link.y = function(_) {
    return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant(+_), link) : y$1;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function horizontalSource(d) {
  return [d.source.x1, d.y0];
}

function horizontalTarget(d) {
  return [d.target.x0, d.y1];
}

function sankeyLinkHorizontal() {
  return linkHorizontal()
      .source(horizontalSource)
      .target(horizontalTarget);
}

var parser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [1, 9], $V1 = [1, 10], $V2 = [1, 5, 10, 12];
  var parser2 = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "start": 3, "SANKEY": 4, "NEWLINE": 5, "csv": 6, "opt_eof": 7, "record": 8, "csv_tail": 9, "EOF": 10, "field[source]": 11, "COMMA": 12, "field[target]": 13, "field[value]": 14, "field": 15, "escaped": 16, "non_escaped": 17, "DQUOTE": 18, "ESCAPED_TEXT": 19, "NON_ESCAPED_TEXT": 20, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 4: "SANKEY", 5: "NEWLINE", 10: "EOF", 11: "field[source]", 12: "COMMA", 13: "field[target]", 14: "field[value]", 18: "DQUOTE", 19: "ESCAPED_TEXT", 20: "NON_ESCAPED_TEXT" },
    productions_: [0, [3, 4], [6, 2], [9, 2], [9, 0], [7, 1], [7, 0], [8, 5], [15, 1], [15, 1], [16, 3], [17, 1]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 7:
          const source = yy.findOrCreateNode($$[$0 - 4].trim().replaceAll('""', '"'));
          const target = yy.findOrCreateNode($$[$0 - 2].trim().replaceAll('""', '"'));
          const value = parseFloat($$[$0].trim());
          yy.addLink(source, target, value);
          break;
        case 8:
        case 9:
        case 11:
          this.$ = $$[$0];
          break;
        case 10:
          this.$ = $$[$0 - 1];
          break;
      }
    },
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, { 5: [1, 3] }, { 6: 4, 8: 5, 15: 6, 16: 7, 17: 8, 18: $V0, 20: $V1 }, { 1: [2, 6], 7: 11, 10: [1, 12] }, o($V1, [2, 4], { 9: 13, 5: [1, 14] }), { 12: [1, 15] }, o($V2, [2, 8]), o($V2, [2, 9]), { 19: [1, 16] }, o($V2, [2, 11]), { 1: [2, 1] }, { 1: [2, 5] }, o($V1, [2, 2]), { 6: 17, 8: 5, 15: 6, 16: 7, 17: 8, 18: $V0, 20: $V1 }, { 15: 18, 16: 7, 17: 8, 18: $V0, 20: $V1 }, { 18: [1, 19] }, o($V1, [2, 3]), { 12: [1, 20] }, o($V2, [2, 10]), { 15: 21, 16: 7, 17: 8, 18: $V0, 20: $V1 }, o([1, 5, 10], [2, 7])],
    defaultActions: { 11: [2, 1], 12: [2, 5] },
    parseError: function parseError(str, hash) {
      if (hash.recoverable) {
        this.trace(str);
      } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
      }
    },
    parse: function parse(input) {
      var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, TERROR = 2, EOF = 1;
      var args = lstack.slice.call(arguments, 1);
      var lexer2 = Object.create(this.lexer);
      var sharedState = { yy: {} };
      for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
          sharedState.yy[k] = this.yy[k];
        }
      }
      lexer2.setInput(input, sharedState.yy);
      sharedState.yy.lexer = lexer2;
      sharedState.yy.parser = this;
      if (typeof lexer2.yylloc == "undefined") {
        lexer2.yylloc = {};
      }
      var yyloc = lexer2.yylloc;
      lstack.push(yyloc);
      var ranges = lexer2.options && lexer2.options.ranges;
      if (typeof sharedState.yy.parseError === "function") {
        this.parseError = sharedState.yy.parseError;
      } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
      }
      function lex() {
        var token;
        token = tstack.pop() || lexer2.lex() || EOF;
        if (typeof token !== "number") {
          if (token instanceof Array) {
            tstack = token;
            token = tstack.pop();
          }
          token = self.symbols_[token] || token;
        }
        return token;
      }
      var symbol, state, action, r, yyval = {}, p, len, newState, expected;
      while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
          action = this.defaultActions[state];
        } else {
          if (symbol === null || typeof symbol == "undefined") {
            symbol = lex();
          }
          action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
          var errStr = "";
          expected = [];
          for (p in table[state]) {
            if (this.terminals_[p] && p > TERROR) {
              expected.push("'" + this.terminals_[p] + "'");
            }
          }
          if (lexer2.showPosition) {
            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
          } else {
            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
          }
          this.parseError(errStr, {
            text: lexer2.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer2.yylineno,
            loc: yyloc,
            expected
          });
        }
        if (action[0] instanceof Array && action.length > 1) {
          throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
          case 1:
            stack.push(symbol);
            vstack.push(lexer2.yytext);
            lstack.push(lexer2.yylloc);
            stack.push(action[1]);
            symbol = null;
            {
              yyleng = lexer2.yyleng;
              yytext = lexer2.yytext;
              yylineno = lexer2.yylineno;
              yyloc = lexer2.yylloc;
            }
            break;
          case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
              yyval._$.range = [
                lstack[lstack.length - (len || 1)].range[0],
                lstack[lstack.length - 1].range[1]
              ];
            }
            r = this.performAction.apply(yyval, [
              yytext,
              yyleng,
              yylineno,
              sharedState.yy,
              action[1],
              vstack,
              lstack
            ].concat(args));
            if (typeof r !== "undefined") {
              return r;
            }
            if (len) {
              stack = stack.slice(0, -1 * len * 2);
              vstack = vstack.slice(0, -1 * len);
              lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  };
  var lexer = function() {
    var lexer2 = {
      EOF: 1,
      parseError: function parseError(str, hash) {
        if (this.yy.parser) {
          this.yy.parser.parseError(str, hash);
        } else {
          throw new Error(str);
        }
      },
      // resets the lexer, sets new input
      setInput: function(input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = "";
        this.conditionStack = ["INITIAL"];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        };
        if (this.options.ranges) {
          this.yylloc.range = [0, 0];
        }
        this.offset = 0;
        return this;
      },
      // consumes and returns one char from the input
      input: function() {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return ch;
      },
      // unshifts one char (or a string) into the input
      unput: function(ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);
        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (lines.length - 1) {
          this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
        };
        if (this.options.ranges) {
          this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        this._more = true;
        return this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer) {
          this._backtrack = true;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
        return this;
      },
      // retain first n characters of the match
      less: function(n) {
        this.unput(this.match.slice(n));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var next = this.match;
        if (next.length < 20) {
          next += this._input.substr(0, 20 - next.length);
        }
        return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(match, indexed_rule) {
        var token, lines, backup;
        if (this.options.backtrack_lexer) {
          backup = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          };
          if (this.options.ranges) {
            backup.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno += lines.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (token) {
          return token;
        } else if (this._backtrack) {
          for (var k in backup) {
            this[k] = backup[k];
          }
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done) {
          return this.EOF;
        }
        if (!this._input) {
          this.done = true;
        }
        var token, match, tempMatch, index;
        if (!this._more) {
          this.yytext = "";
          this.match = "";
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
          tempMatch = this._input.match(this.rules[rules[i]]);
          if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch;
            index = i;
            if (this.options.backtrack_lexer) {
              token = this.test_match(tempMatch, rules[i]);
              if (token !== false) {
                return token;
              } else if (this._backtrack) {
                match = false;
                continue;
              } else {
                return false;
              }
            } else if (!this.options.flex) {
              break;
            }
          }
        }
        if (match) {
          token = this.test_match(match, rules[index]);
          if (token !== false) {
            return token;
          }
          return false;
        }
        if (this._input === "") {
          return this.EOF;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      },
      // return next match that has a token
      lex: function lex() {
        var r = this.next();
        if (r) {
          return r;
        } else {
          return this.lex();
        }
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function begin(condition) {
        this.conditionStack.push(condition);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
          return this.conditions["INITIAL"].rules;
        }
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
          return this.conditionStack[n];
        } else {
          return "INITIAL";
        }
      },
      // alias for begin(condition)
      pushState: function pushState(condition) {
        this.begin(condition);
      },
      // return the number of states currently on the stack
      stateStackSize: function stateStackSize() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
        switch ($avoiding_name_collisions) {
          case 0:
            this.pushState("csv");
            return 4;
          case 1:
            return 10;
          case 2:
            return 5;
          case 3:
            return 12;
          case 4:
            this.pushState("escaped_text");
            return 18;
          case 5:
            return 20;
          case 6:
            this.popState("escaped_text");
            return 18;
          case 7:
            return 19;
        }
      },
      rules: [/^(?:sankey-beta\b)/i, /^(?:$)/i, /^(?:((\u000D\u000A)|(\u000A)))/i, /^(?:(\u002C))/i, /^(?:(\u0022))/i, /^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i, /^(?:(\u0022)(?!(\u0022)))/i, /^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],
      conditions: { "csv": { "rules": [1, 2, 3, 4, 5, 6, 7], "inclusive": false }, "escaped_text": { "rules": [6, 7], "inclusive": false }, "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 6, 7], "inclusive": true } }
    };
    return lexer2;
  }();
  parser2.lexer = lexer;
  function Parser() {
    this.yy = {};
  }
  Parser.prototype = parser2;
  parser2.Parser = Parser;
  return new Parser();
}();
parser.parser = parser;
const parser$1 = parser;
let links = [];
let nodes = [];
let nodesMap = {};
const clear = () => {
  links = [];
  nodes = [];
  nodesMap = {};
  index.clear();
};
class SankeyLink {
  constructor(source, target, value = 0) {
    this.source = source;
    this.target = target;
    this.value = value;
  }
}
const addLink = (source, target, value) => {
  links.push(new SankeyLink(source, target, value));
};
class SankeyNode {
  constructor(ID) {
    this.ID = ID;
  }
}
const findOrCreateNode = (ID) => {
  ID = index.common$1.sanitizeText(ID, index.getConfig());
  if (!nodesMap[ID]) {
    nodesMap[ID] = new SankeyNode(ID);
    nodes.push(nodesMap[ID]);
  }
  return nodesMap[ID];
};
const getNodes = () => nodes;
const getLinks = () => links;
const getGraph = () => ({
  nodes: nodes.map((node) => ({ id: node.ID })),
  links: links.map((link) => ({
    source: link.source.ID,
    target: link.target.ID,
    value: link.value
  }))
});
const db = {
  nodesMap,
  getConfig: () => index.getConfig().sankey,
  getNodes,
  getLinks,
  getGraph,
  addLink,
  findOrCreateNode,
  getAccTitle: index.getAccTitle,
  setAccTitle: index.setAccTitle,
  getAccDescription: index.getAccDescription,
  setAccDescription: index.setAccDescription,
  getDiagramTitle: index.getDiagramTitle,
  setDiagramTitle: index.setDiagramTitle,
  clear
};
const _Uid = class _Uid2 {
  static next(name) {
    return new _Uid2(name + ++_Uid2.count);
  }
  constructor(id) {
    this.id = id;
    this.href = `#${id}`;
  }
  toString() {
    return "url(" + this.href + ")";
  }
};
_Uid.count = 0;
let Uid = _Uid;
const alignmentsMap = {
  left: left,
  right: right,
  center: center,
  justify: justify
};
const draw = function(text, id, _version, diagObj) {
  const { securityLevel, sankey: conf } = index.getConfig();
  const defaultSankeyConfig = index.defaultConfig.sankey;
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = index.select("#i" + id);
  }
  const root = securityLevel === "sandbox" ? index.select(sandboxElement.nodes()[0].contentDocument.body) : index.select("body");
  const svg = securityLevel === "sandbox" ? root.select(`[id="${id}"]`) : index.select(`[id="${id}"]`);
  const width = (conf == null ? void 0 : conf.width) ?? defaultSankeyConfig.width;
  const height = (conf == null ? void 0 : conf.height) ?? defaultSankeyConfig.width;
  const useMaxWidth = (conf == null ? void 0 : conf.useMaxWidth) ?? defaultSankeyConfig.useMaxWidth;
  const nodeAlignment = (conf == null ? void 0 : conf.nodeAlignment) ?? defaultSankeyConfig.nodeAlignment;
  const prefix = (conf == null ? void 0 : conf.prefix) ?? defaultSankeyConfig.prefix;
  const suffix = (conf == null ? void 0 : conf.suffix) ?? defaultSankeyConfig.suffix;
  const showValues = (conf == null ? void 0 : conf.showValues) ?? defaultSankeyConfig.showValues;
  const graph = diagObj.db.getGraph();
  const nodeAlign = alignmentsMap[nodeAlignment];
  const nodeWidth = 10;
  const sankey$1 = Sankey().nodeId((d) => d.id).nodeWidth(nodeWidth).nodePadding(10 + (showValues ? 15 : 0)).nodeAlign(nodeAlign).extent([
    [0, 0],
    [width, height]
  ]);
  sankey$1(graph);
  const colorScheme = ordinal.ordinal(Tableau10.schemeTableau10);
  svg.append("g").attr("class", "nodes").selectAll(".node").data(graph.nodes).join("g").attr("class", "node").attr("id", (d) => (d.uid = Uid.next("node-")).id).attr("transform", function(d) {
    return "translate(" + d.x0 + "," + d.y0 + ")";
  }).attr("x", (d) => d.x0).attr("y", (d) => d.y0).append("rect").attr("height", (d) => {
    return d.y1 - d.y0;
  }).attr("width", (d) => d.x1 - d.x0).attr("fill", (d) => colorScheme(d.id));
  const getText = ({ id: id2, value }) => {
    if (!showValues) {
      return id2;
    }
    return `${id2}
${prefix}${Math.round(value * 100) / 100}${suffix}`;
  };
  svg.append("g").attr("class", "node-labels").attr("font-family", "sans-serif").attr("font-size", 14).selectAll("text").data(graph.nodes).join("text").attr("x", (d) => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6).attr("y", (d) => (d.y1 + d.y0) / 2).attr("dy", `${showValues ? "0" : "0.35"}em`).attr("text-anchor", (d) => d.x0 < width / 2 ? "start" : "end").text(getText);
  const link = svg.append("g").attr("class", "links").attr("fill", "none").attr("stroke-opacity", 0.5).selectAll(".link").data(graph.links).join("g").attr("class", "link").style("mix-blend-mode", "multiply");
  const linkColor = (conf == null ? void 0 : conf.linkColor) || "gradient";
  if (linkColor === "gradient") {
    const gradient = link.append("linearGradient").attr("id", (d) => (d.uid = Uid.next("linearGradient-")).id).attr("gradientUnits", "userSpaceOnUse").attr("x1", (d) => d.source.x1).attr("x2", (d) => d.target.x0);
    gradient.append("stop").attr("offset", "0%").attr("stop-color", (d) => colorScheme(d.source.id));
    gradient.append("stop").attr("offset", "100%").attr("stop-color", (d) => colorScheme(d.target.id));
  }
  let coloring;
  switch (linkColor) {
    case "gradient":
      coloring = (d) => d.uid;
      break;
    case "source":
      coloring = (d) => colorScheme(d.source.id);
      break;
    case "target":
      coloring = (d) => colorScheme(d.target.id);
      break;
    default:
      coloring = linkColor;
  }
  link.append("path").attr("d", sankeyLinkHorizontal()).attr("stroke", coloring).attr("stroke-width", (d) => Math.max(1, d.width));
  index.setupGraphViewbox$1(void 0, svg, 0, useMaxWidth);
};
const renderer = {
  draw
};
const prepareTextForParsing = (text) => {
  const textToParse = text.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "").replaceAll(/([\n\r])+/g, "\n").trim();
  return textToParse;
};
const originalParse = parser$1.parse.bind(parser$1);
parser$1.parse = (text) => originalParse(prepareTextForParsing(text));
const diagram = {
  parser: parser$1,
  db,
  renderer
};

exports.diagram = diagram;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Fua2V5RGlhZ3JhbS0wNGE4OTdlMC04Mzk2OTVkOS5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL2QzLXNhbmtleS9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL21heC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy1zYW5rZXkvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9taW4uanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtc2Fua2V5L25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvc3VtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLXNhbmtleS9zcmMvYWxpZ24uanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtc2Fua2V5L3NyYy9jb25zdGFudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy1zYW5rZXkvc3JjL3NhbmtleS5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy1zYW5rZXkvbm9kZV9tb2R1bGVzL2QzLXBhdGgvc3JjL3BhdGguanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtc2Fua2V5L25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY29uc3RhbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtc2Fua2V5L25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvcG9pbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtc2Fua2V5L25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvYXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtc2Fua2V5L25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvbGluay9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy1zYW5rZXkvc3JjL3NhbmtleUxpbmtIb3Jpem9udGFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21lcm1haWQvZGlzdC9zYW5rZXlEaWFncmFtLTA0YTg5N2UwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1heCh2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgbGV0IG1heDtcbiAgaWYgKHZhbHVlb2YgPT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbFxuICAgICAgICAgICYmIChtYXggPCB2YWx1ZSB8fCAobWF4ID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gdmFsdWUpKSkge1xuICAgICAgICBtYXggPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVvZih2YWx1ZSwgKytpbmRleCwgdmFsdWVzKSkgIT0gbnVsbFxuICAgICAgICAgICYmIChtYXggPCB2YWx1ZSB8fCAobWF4ID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gdmFsdWUpKSkge1xuICAgICAgICBtYXggPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1heDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pbih2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgbGV0IG1pbjtcbiAgaWYgKHZhbHVlb2YgPT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbFxuICAgICAgICAgICYmIChtaW4gPiB2YWx1ZSB8fCAobWluID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gdmFsdWUpKSkge1xuICAgICAgICBtaW4gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVvZih2YWx1ZSwgKytpbmRleCwgdmFsdWVzKSkgIT0gbnVsbFxuICAgICAgICAgICYmIChtaW4gPiB2YWx1ZSB8fCAobWluID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gdmFsdWUpKSkge1xuICAgICAgICBtaW4gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1pbjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1bSh2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgbGV0IHN1bSA9IDA7XG4gIGlmICh2YWx1ZW9mID09PSB1bmRlZmluZWQpIHtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZSA9ICt2YWx1ZSkge1xuICAgICAgICBzdW0gKz0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlID0gK3ZhbHVlb2YodmFsdWUsICsraW5kZXgsIHZhbHVlcykpIHtcbiAgICAgICAgc3VtICs9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3VtO1xufVxuIiwiaW1wb3J0IHttaW59IGZyb20gXCJkMy1hcnJheVwiO1xuXG5mdW5jdGlvbiB0YXJnZXREZXB0aChkKSB7XG4gIHJldHVybiBkLnRhcmdldC5kZXB0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnQobm9kZSkge1xuICByZXR1cm4gbm9kZS5kZXB0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0KG5vZGUsIG4pIHtcbiAgcmV0dXJuIG4gLSAxIC0gbm9kZS5oZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdXN0aWZ5KG5vZGUsIG4pIHtcbiAgcmV0dXJuIG5vZGUuc291cmNlTGlua3MubGVuZ3RoID8gbm9kZS5kZXB0aCA6IG4gLSAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2VudGVyKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFyZ2V0TGlua3MubGVuZ3RoID8gbm9kZS5kZXB0aFxuICAgICAgOiBub2RlLnNvdXJjZUxpbmtzLmxlbmd0aCA/IG1pbihub2RlLnNvdXJjZUxpbmtzLCB0YXJnZXREZXB0aCkgLSAxXG4gICAgICA6IDA7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25zdGFudCh4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cbiIsImltcG9ydCB7bWF4LCBtaW4sIHN1bX0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge2p1c3RpZnl9IGZyb20gXCIuL2FsaWduLmpzXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcblxuZnVuY3Rpb24gYXNjZW5kaW5nU291cmNlQnJlYWR0aChhLCBiKSB7XG4gIHJldHVybiBhc2NlbmRpbmdCcmVhZHRoKGEuc291cmNlLCBiLnNvdXJjZSkgfHwgYS5pbmRleCAtIGIuaW5kZXg7XG59XG5cbmZ1bmN0aW9uIGFzY2VuZGluZ1RhcmdldEJyZWFkdGgoYSwgYikge1xuICByZXR1cm4gYXNjZW5kaW5nQnJlYWR0aChhLnRhcmdldCwgYi50YXJnZXQpIHx8IGEuaW5kZXggLSBiLmluZGV4O1xufVxuXG5mdW5jdGlvbiBhc2NlbmRpbmdCcmVhZHRoKGEsIGIpIHtcbiAgcmV0dXJuIGEueTAgLSBiLnkwO1xufVxuXG5mdW5jdGlvbiB2YWx1ZShkKSB7XG4gIHJldHVybiBkLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0SWQoZCkge1xuICByZXR1cm4gZC5pbmRleDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdE5vZGVzKGdyYXBoKSB7XG4gIHJldHVybiBncmFwaC5ub2Rlcztcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExpbmtzKGdyYXBoKSB7XG4gIHJldHVybiBncmFwaC5saW5rcztcbn1cblxuZnVuY3Rpb24gZmluZChub2RlQnlJZCwgaWQpIHtcbiAgY29uc3Qgbm9kZSA9IG5vZGVCeUlkLmdldChpZCk7XG4gIGlmICghbm9kZSkgdGhyb3cgbmV3IEVycm9yKFwibWlzc2luZzogXCIgKyBpZCk7XG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlTGlua0JyZWFkdGhzKHtub2Rlc30pIHtcbiAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgbGV0IHkwID0gbm9kZS55MDtcbiAgICBsZXQgeTEgPSB5MDtcbiAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygbm9kZS5zb3VyY2VMaW5rcykge1xuICAgICAgbGluay55MCA9IHkwICsgbGluay53aWR0aCAvIDI7XG4gICAgICB5MCArPSBsaW5rLndpZHRoO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygbm9kZS50YXJnZXRMaW5rcykge1xuICAgICAgbGluay55MSA9IHkxICsgbGluay53aWR0aCAvIDI7XG4gICAgICB5MSArPSBsaW5rLndpZHRoO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTYW5rZXkoKSB7XG4gIGxldCB4MCA9IDAsIHkwID0gMCwgeDEgPSAxLCB5MSA9IDE7IC8vIGV4dGVudFxuICBsZXQgZHggPSAyNDsgLy8gbm9kZVdpZHRoXG4gIGxldCBkeSA9IDgsIHB5OyAvLyBub2RlUGFkZGluZ1xuICBsZXQgaWQgPSBkZWZhdWx0SWQ7XG4gIGxldCBhbGlnbiA9IGp1c3RpZnk7XG4gIGxldCBzb3J0O1xuICBsZXQgbGlua1NvcnQ7XG4gIGxldCBub2RlcyA9IGRlZmF1bHROb2RlcztcbiAgbGV0IGxpbmtzID0gZGVmYXVsdExpbmtzO1xuICBsZXQgaXRlcmF0aW9ucyA9IDY7XG5cbiAgZnVuY3Rpb24gc2Fua2V5KCkge1xuICAgIGNvbnN0IGdyYXBoID0ge25vZGVzOiBub2Rlcy5hcHBseShudWxsLCBhcmd1bWVudHMpLCBsaW5rczogbGlua3MuYXBwbHkobnVsbCwgYXJndW1lbnRzKX07XG4gICAgY29tcHV0ZU5vZGVMaW5rcyhncmFwaCk7XG4gICAgY29tcHV0ZU5vZGVWYWx1ZXMoZ3JhcGgpO1xuICAgIGNvbXB1dGVOb2RlRGVwdGhzKGdyYXBoKTtcbiAgICBjb21wdXRlTm9kZUhlaWdodHMoZ3JhcGgpO1xuICAgIGNvbXB1dGVOb2RlQnJlYWR0aHMoZ3JhcGgpO1xuICAgIGNvbXB1dGVMaW5rQnJlYWR0aHMoZ3JhcGgpO1xuICAgIHJldHVybiBncmFwaDtcbiAgfVxuXG4gIHNhbmtleS51cGRhdGUgPSBmdW5jdGlvbihncmFwaCkge1xuICAgIGNvbXB1dGVMaW5rQnJlYWR0aHMoZ3JhcGgpO1xuICAgIHJldHVybiBncmFwaDtcbiAgfTtcblxuICBzYW5rZXkubm9kZUlkID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGlkID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChfKSwgc2Fua2V5KSA6IGlkO1xuICB9O1xuXG4gIHNhbmtleS5ub2RlQWxpZ24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoYWxpZ24gPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KF8pLCBzYW5rZXkpIDogYWxpZ247XG4gIH07XG5cbiAgc2Fua2V5Lm5vZGVTb3J0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNvcnQgPSBfLCBzYW5rZXkpIDogc29ydDtcbiAgfTtcblxuICBzYW5rZXkubm9kZVdpZHRoID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGR4ID0gK18sIHNhbmtleSkgOiBkeDtcbiAgfTtcblxuICBzYW5rZXkubm9kZVBhZGRpbmcgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZHkgPSBweSA9ICtfLCBzYW5rZXkpIDogZHk7XG4gIH07XG5cbiAgc2Fua2V5Lm5vZGVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKG5vZGVzID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChfKSwgc2Fua2V5KSA6IG5vZGVzO1xuICB9O1xuXG4gIHNhbmtleS5saW5rcyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChsaW5rcyA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoXyksIHNhbmtleSkgOiBsaW5rcztcbiAgfTtcblxuICBzYW5rZXkubGlua1NvcnQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAobGlua1NvcnQgPSBfLCBzYW5rZXkpIDogbGlua1NvcnQ7XG4gIH07XG5cbiAgc2Fua2V5LnNpemUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeDAgPSB5MCA9IDAsIHgxID0gK19bMF0sIHkxID0gK19bMV0sIHNhbmtleSkgOiBbeDEgLSB4MCwgeTEgLSB5MF07XG4gIH07XG5cbiAgc2Fua2V5LmV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4MCA9ICtfWzBdWzBdLCB4MSA9ICtfWzFdWzBdLCB5MCA9ICtfWzBdWzFdLCB5MSA9ICtfWzFdWzFdLCBzYW5rZXkpIDogW1t4MCwgeTBdLCBbeDEsIHkxXV07XG4gIH07XG5cbiAgc2Fua2V5Lml0ZXJhdGlvbnMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaXRlcmF0aW9ucyA9ICtfLCBzYW5rZXkpIDogaXRlcmF0aW9ucztcbiAgfTtcblxuICBmdW5jdGlvbiBjb21wdXRlTm9kZUxpbmtzKHtub2RlcywgbGlua3N9KSB7XG4gICAgZm9yIChjb25zdCBbaSwgbm9kZV0gb2Ygbm9kZXMuZW50cmllcygpKSB7XG4gICAgICBub2RlLmluZGV4ID0gaTtcbiAgICAgIG5vZGUuc291cmNlTGlua3MgPSBbXTtcbiAgICAgIG5vZGUudGFyZ2V0TGlua3MgPSBbXTtcbiAgICB9XG4gICAgY29uc3Qgbm9kZUJ5SWQgPSBuZXcgTWFwKG5vZGVzLm1hcCgoZCwgaSkgPT4gW2lkKGQsIGksIG5vZGVzKSwgZF0pKTtcbiAgICBmb3IgKGNvbnN0IFtpLCBsaW5rXSBvZiBsaW5rcy5lbnRyaWVzKCkpIHtcbiAgICAgIGxpbmsuaW5kZXggPSBpO1xuICAgICAgbGV0IHtzb3VyY2UsIHRhcmdldH0gPSBsaW5rO1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09IFwib2JqZWN0XCIpIHNvdXJjZSA9IGxpbmsuc291cmNlID0gZmluZChub2RlQnlJZCwgc291cmNlKTtcbiAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiKSB0YXJnZXQgPSBsaW5rLnRhcmdldCA9IGZpbmQobm9kZUJ5SWQsIHRhcmdldCk7XG4gICAgICBzb3VyY2Uuc291cmNlTGlua3MucHVzaChsaW5rKTtcbiAgICAgIHRhcmdldC50YXJnZXRMaW5rcy5wdXNoKGxpbmspO1xuICAgIH1cbiAgICBpZiAobGlua1NvcnQgIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCB7c291cmNlTGlua3MsIHRhcmdldExpbmtzfSBvZiBub2Rlcykge1xuICAgICAgICBzb3VyY2VMaW5rcy5zb3J0KGxpbmtTb3J0KTtcbiAgICAgICAgdGFyZ2V0TGlua3Muc29ydChsaW5rU29ydCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZU5vZGVWYWx1ZXMoe25vZGVzfSkge1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgbm9kZS52YWx1ZSA9IG5vZGUuZml4ZWRWYWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBNYXRoLm1heChzdW0obm9kZS5zb3VyY2VMaW5rcywgdmFsdWUpLCBzdW0obm9kZS50YXJnZXRMaW5rcywgdmFsdWUpKVxuICAgICAgICAgIDogbm9kZS5maXhlZFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVOb2RlRGVwdGhzKHtub2Rlc30pIHtcbiAgICBjb25zdCBuID0gbm9kZXMubGVuZ3RoO1xuICAgIGxldCBjdXJyZW50ID0gbmV3IFNldChub2Rlcyk7XG4gICAgbGV0IG5leHQgPSBuZXcgU2V0O1xuICAgIGxldCB4ID0gMDtcbiAgICB3aGlsZSAoY3VycmVudC5zaXplKSB7XG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgY3VycmVudCkge1xuICAgICAgICBub2RlLmRlcHRoID0geDtcbiAgICAgICAgZm9yIChjb25zdCB7dGFyZ2V0fSBvZiBub2RlLnNvdXJjZUxpbmtzKSB7XG4gICAgICAgICAgbmV4dC5hZGQodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCsreCA+IG4pIHRocm93IG5ldyBFcnJvcihcImNpcmN1bGFyIGxpbmtcIik7XG4gICAgICBjdXJyZW50ID0gbmV4dDtcbiAgICAgIG5leHQgPSBuZXcgU2V0O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVOb2RlSGVpZ2h0cyh7bm9kZXN9KSB7XG4gICAgY29uc3QgbiA9IG5vZGVzLmxlbmd0aDtcbiAgICBsZXQgY3VycmVudCA9IG5ldyBTZXQobm9kZXMpO1xuICAgIGxldCBuZXh0ID0gbmV3IFNldDtcbiAgICBsZXQgeCA9IDA7XG4gICAgd2hpbGUgKGN1cnJlbnQuc2l6ZSkge1xuICAgICAgZm9yIChjb25zdCBub2RlIG9mIGN1cnJlbnQpIHtcbiAgICAgICAgbm9kZS5oZWlnaHQgPSB4O1xuICAgICAgICBmb3IgKGNvbnN0IHtzb3VyY2V9IG9mIG5vZGUudGFyZ2V0TGlua3MpIHtcbiAgICAgICAgICBuZXh0LmFkZChzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoKyt4ID4gbikgdGhyb3cgbmV3IEVycm9yKFwiY2lyY3VsYXIgbGlua1wiKTtcbiAgICAgIGN1cnJlbnQgPSBuZXh0O1xuICAgICAgbmV4dCA9IG5ldyBTZXQ7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZU5vZGVMYXllcnMoe25vZGVzfSkge1xuICAgIGNvbnN0IHggPSBtYXgobm9kZXMsIGQgPT4gZC5kZXB0aCkgKyAxO1xuICAgIGNvbnN0IGt4ID0gKHgxIC0geDAgLSBkeCkgLyAoeCAtIDEpO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBuZXcgQXJyYXkoeCk7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICBjb25zdCBpID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oeCAtIDEsIE1hdGguZmxvb3IoYWxpZ24uY2FsbChudWxsLCBub2RlLCB4KSkpKTtcbiAgICAgIG5vZGUubGF5ZXIgPSBpO1xuICAgICAgbm9kZS54MCA9IHgwICsgaSAqIGt4O1xuICAgICAgbm9kZS54MSA9IG5vZGUueDAgKyBkeDtcbiAgICAgIGlmIChjb2x1bW5zW2ldKSBjb2x1bW5zW2ldLnB1c2gobm9kZSk7XG4gICAgICBlbHNlIGNvbHVtbnNbaV0gPSBbbm9kZV07XG4gICAgfVxuICAgIGlmIChzb3J0KSBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2x1bW5zKSB7XG4gICAgICBjb2x1bW4uc29ydChzb3J0KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplTm9kZUJyZWFkdGhzKGNvbHVtbnMpIHtcbiAgICBjb25zdCBreSA9IG1pbihjb2x1bW5zLCBjID0+ICh5MSAtIHkwIC0gKGMubGVuZ3RoIC0gMSkgKiBweSkgLyBzdW0oYywgdmFsdWUpKTtcbiAgICBmb3IgKGNvbnN0IG5vZGVzIG9mIGNvbHVtbnMpIHtcbiAgICAgIGxldCB5ID0geTA7XG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgbm9kZS55MCA9IHk7XG4gICAgICAgIG5vZGUueTEgPSB5ICsgbm9kZS52YWx1ZSAqIGt5O1xuICAgICAgICB5ID0gbm9kZS55MSArIHB5O1xuICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygbm9kZS5zb3VyY2VMaW5rcykge1xuICAgICAgICAgIGxpbmsud2lkdGggPSBsaW5rLnZhbHVlICoga3k7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHkgPSAoeTEgLSB5ICsgcHkpIC8gKG5vZGVzLmxlbmd0aCArIDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIG5vZGUueTAgKz0geSAqIChpICsgMSk7XG4gICAgICAgIG5vZGUueTEgKz0geSAqIChpICsgMSk7XG4gICAgICB9XG4gICAgICByZW9yZGVyTGlua3Mobm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVOb2RlQnJlYWR0aHMoZ3JhcGgpIHtcbiAgICBjb25zdCBjb2x1bW5zID0gY29tcHV0ZU5vZGVMYXllcnMoZ3JhcGgpO1xuICAgIHB5ID0gTWF0aC5taW4oZHksICh5MSAtIHkwKSAvIChtYXgoY29sdW1ucywgYyA9PiBjLmxlbmd0aCkgLSAxKSk7XG4gICAgaW5pdGlhbGl6ZU5vZGVCcmVhZHRocyhjb2x1bW5zKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnM7ICsraSkge1xuICAgICAgY29uc3QgYWxwaGEgPSBNYXRoLnBvdygwLjk5LCBpKTtcbiAgICAgIGNvbnN0IGJldGEgPSBNYXRoLm1heCgxIC0gYWxwaGEsIChpICsgMSkgLyBpdGVyYXRpb25zKTtcbiAgICAgIHJlbGF4UmlnaHRUb0xlZnQoY29sdW1ucywgYWxwaGEsIGJldGEpO1xuICAgICAgcmVsYXhMZWZ0VG9SaWdodChjb2x1bW5zLCBhbHBoYSwgYmV0YSk7XG4gICAgfVxuICB9XG5cbiAgLy8gUmVwb3NpdGlvbiBlYWNoIG5vZGUgYmFzZWQgb24gaXRzIGluY29taW5nICh0YXJnZXQpIGxpbmtzLlxuICBmdW5jdGlvbiByZWxheExlZnRUb1JpZ2h0KGNvbHVtbnMsIGFscGhhLCBiZXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDEsIG4gPSBjb2x1bW5zLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgY29uc3QgY29sdW1uID0gY29sdW1uc1tpXTtcbiAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIGNvbHVtbikge1xuICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgIGxldCB3ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB7c291cmNlLCB2YWx1ZX0gb2YgdGFyZ2V0LnRhcmdldExpbmtzKSB7XG4gICAgICAgICAgbGV0IHYgPSB2YWx1ZSAqICh0YXJnZXQubGF5ZXIgLSBzb3VyY2UubGF5ZXIpO1xuICAgICAgICAgIHkgKz0gdGFyZ2V0VG9wKHNvdXJjZSwgdGFyZ2V0KSAqIHY7XG4gICAgICAgICAgdyArPSB2O1xuICAgICAgICB9XG4gICAgICAgIGlmICghKHcgPiAwKSkgY29udGludWU7XG4gICAgICAgIGxldCBkeSA9ICh5IC8gdyAtIHRhcmdldC55MCkgKiBhbHBoYTtcbiAgICAgICAgdGFyZ2V0LnkwICs9IGR5O1xuICAgICAgICB0YXJnZXQueTEgKz0gZHk7XG4gICAgICAgIHJlb3JkZXJOb2RlTGlua3ModGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIGlmIChzb3J0ID09PSB1bmRlZmluZWQpIGNvbHVtbi5zb3J0KGFzY2VuZGluZ0JyZWFkdGgpO1xuICAgICAgcmVzb2x2ZUNvbGxpc2lvbnMoY29sdW1uLCBiZXRhKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXBvc2l0aW9uIGVhY2ggbm9kZSBiYXNlZCBvbiBpdHMgb3V0Z29pbmcgKHNvdXJjZSkgbGlua3MuXG4gIGZ1bmN0aW9uIHJlbGF4UmlnaHRUb0xlZnQoY29sdW1ucywgYWxwaGEsIGJldGEpIHtcbiAgICBmb3IgKGxldCBuID0gY29sdW1ucy5sZW5ndGgsIGkgPSBuIC0gMjsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnNbaV07XG4gICAgICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBjb2x1bW4pIHtcbiAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICBsZXQgdyA9IDA7XG4gICAgICAgIGZvciAoY29uc3Qge3RhcmdldCwgdmFsdWV9IG9mIHNvdXJjZS5zb3VyY2VMaW5rcykge1xuICAgICAgICAgIGxldCB2ID0gdmFsdWUgKiAodGFyZ2V0LmxheWVyIC0gc291cmNlLmxheWVyKTtcbiAgICAgICAgICB5ICs9IHNvdXJjZVRvcChzb3VyY2UsIHRhcmdldCkgKiB2O1xuICAgICAgICAgIHcgKz0gdjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISh3ID4gMCkpIGNvbnRpbnVlO1xuICAgICAgICBsZXQgZHkgPSAoeSAvIHcgLSBzb3VyY2UueTApICogYWxwaGE7XG4gICAgICAgIHNvdXJjZS55MCArPSBkeTtcbiAgICAgICAgc291cmNlLnkxICs9IGR5O1xuICAgICAgICByZW9yZGVyTm9kZUxpbmtzKHNvdXJjZSk7XG4gICAgICB9XG4gICAgICBpZiAoc29ydCA9PT0gdW5kZWZpbmVkKSBjb2x1bW4uc29ydChhc2NlbmRpbmdCcmVhZHRoKTtcbiAgICAgIHJlc29sdmVDb2xsaXNpb25zKGNvbHVtbiwgYmV0YSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUNvbGxpc2lvbnMobm9kZXMsIGFscGhhKSB7XG4gICAgY29uc3QgaSA9IG5vZGVzLmxlbmd0aCA+PiAxO1xuICAgIGNvbnN0IHN1YmplY3QgPSBub2Rlc1tpXTtcbiAgICByZXNvbHZlQ29sbGlzaW9uc0JvdHRvbVRvVG9wKG5vZGVzLCBzdWJqZWN0LnkwIC0gcHksIGkgLSAxLCBhbHBoYSk7XG4gICAgcmVzb2x2ZUNvbGxpc2lvbnNUb3BUb0JvdHRvbShub2Rlcywgc3ViamVjdC55MSArIHB5LCBpICsgMSwgYWxwaGEpO1xuICAgIHJlc29sdmVDb2xsaXNpb25zQm90dG9tVG9Ub3Aobm9kZXMsIHkxLCBub2Rlcy5sZW5ndGggLSAxLCBhbHBoYSk7XG4gICAgcmVzb2x2ZUNvbGxpc2lvbnNUb3BUb0JvdHRvbShub2RlcywgeTAsIDAsIGFscGhhKTtcbiAgfVxuXG4gIC8vIFB1c2ggYW55IG92ZXJsYXBwaW5nIG5vZGVzIGRvd24uXG4gIGZ1bmN0aW9uIHJlc29sdmVDb2xsaXNpb25zVG9wVG9Cb3R0b20obm9kZXMsIHksIGksIGFscGhhKSB7XG4gICAgZm9yICg7IGkgPCBub2Rlcy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgY29uc3QgZHkgPSAoeSAtIG5vZGUueTApICogYWxwaGE7XG4gICAgICBpZiAoZHkgPiAxZS02KSBub2RlLnkwICs9IGR5LCBub2RlLnkxICs9IGR5O1xuICAgICAgeSA9IG5vZGUueTEgKyBweTtcbiAgICB9XG4gIH1cblxuICAvLyBQdXNoIGFueSBvdmVybGFwcGluZyBub2RlcyB1cC5cbiAgZnVuY3Rpb24gcmVzb2x2ZUNvbGxpc2lvbnNCb3R0b21Ub1RvcChub2RlcywgeSwgaSwgYWxwaGEpIHtcbiAgICBmb3IgKDsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgIGNvbnN0IGR5ID0gKG5vZGUueTEgLSB5KSAqIGFscGhhO1xuICAgICAgaWYgKGR5ID4gMWUtNikgbm9kZS55MCAtPSBkeSwgbm9kZS55MSAtPSBkeTtcbiAgICAgIHkgPSBub2RlLnkwIC0gcHk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVvcmRlck5vZGVMaW5rcyh7c291cmNlTGlua3MsIHRhcmdldExpbmtzfSkge1xuICAgIGlmIChsaW5rU29ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKGNvbnN0IHtzb3VyY2U6IHtzb3VyY2VMaW5rc319IG9mIHRhcmdldExpbmtzKSB7XG4gICAgICAgIHNvdXJjZUxpbmtzLnNvcnQoYXNjZW5kaW5nVGFyZ2V0QnJlYWR0aCk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHt0YXJnZXQ6IHt0YXJnZXRMaW5rc319IG9mIHNvdXJjZUxpbmtzKSB7XG4gICAgICAgIHRhcmdldExpbmtzLnNvcnQoYXNjZW5kaW5nU291cmNlQnJlYWR0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVvcmRlckxpbmtzKG5vZGVzKSB7XG4gICAgaWYgKGxpbmtTb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAoY29uc3Qge3NvdXJjZUxpbmtzLCB0YXJnZXRMaW5rc30gb2Ygbm9kZXMpIHtcbiAgICAgICAgc291cmNlTGlua3Muc29ydChhc2NlbmRpbmdUYXJnZXRCcmVhZHRoKTtcbiAgICAgICAgdGFyZ2V0TGlua3Muc29ydChhc2NlbmRpbmdTb3VyY2VCcmVhZHRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSB0YXJnZXQueTAgdGhhdCB3b3VsZCBwcm9kdWNlIGFuIGlkZWFsIGxpbmsgZnJvbSBzb3VyY2UgdG8gdGFyZ2V0LlxuICBmdW5jdGlvbiB0YXJnZXRUb3Aoc291cmNlLCB0YXJnZXQpIHtcbiAgICBsZXQgeSA9IHNvdXJjZS55MCAtIChzb3VyY2Uuc291cmNlTGlua3MubGVuZ3RoIC0gMSkgKiBweSAvIDI7XG4gICAgZm9yIChjb25zdCB7dGFyZ2V0OiBub2RlLCB3aWR0aH0gb2Ygc291cmNlLnNvdXJjZUxpbmtzKSB7XG4gICAgICBpZiAobm9kZSA9PT0gdGFyZ2V0KSBicmVhaztcbiAgICAgIHkgKz0gd2lkdGggKyBweTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB7c291cmNlOiBub2RlLCB3aWR0aH0gb2YgdGFyZ2V0LnRhcmdldExpbmtzKSB7XG4gICAgICBpZiAobm9kZSA9PT0gc291cmNlKSBicmVhaztcbiAgICAgIHkgLT0gd2lkdGg7XG4gICAgfVxuICAgIHJldHVybiB5O1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgc291cmNlLnkwIHRoYXQgd291bGQgcHJvZHVjZSBhbiBpZGVhbCBsaW5rIGZyb20gc291cmNlIHRvIHRhcmdldC5cbiAgZnVuY3Rpb24gc291cmNlVG9wKHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgbGV0IHkgPSB0YXJnZXQueTAgLSAodGFyZ2V0LnRhcmdldExpbmtzLmxlbmd0aCAtIDEpICogcHkgLyAyO1xuICAgIGZvciAoY29uc3Qge3NvdXJjZTogbm9kZSwgd2lkdGh9IG9mIHRhcmdldC50YXJnZXRMaW5rcykge1xuICAgICAgaWYgKG5vZGUgPT09IHNvdXJjZSkgYnJlYWs7XG4gICAgICB5ICs9IHdpZHRoICsgcHk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qge3RhcmdldDogbm9kZSwgd2lkdGh9IG9mIHNvdXJjZS5zb3VyY2VMaW5rcykge1xuICAgICAgaWYgKG5vZGUgPT09IHRhcmdldCkgYnJlYWs7XG4gICAgICB5IC09IHdpZHRoO1xuICAgIH1cbiAgICByZXR1cm4geTtcbiAgfVxuXG4gIHJldHVybiBzYW5rZXk7XG59XG4iLCJ2YXIgcGkgPSBNYXRoLlBJLFxuICAgIHRhdSA9IDIgKiBwaSxcbiAgICBlcHNpbG9uID0gMWUtNixcbiAgICB0YXVFcHNpbG9uID0gdGF1IC0gZXBzaWxvbjtcblxuZnVuY3Rpb24gUGF0aCgpIHtcbiAgdGhpcy5feDAgPSB0aGlzLl95MCA9IC8vIHN0YXJ0IG9mIGN1cnJlbnQgc3VicGF0aFxuICB0aGlzLl94MSA9IHRoaXMuX3kxID0gbnVsbDsgLy8gZW5kIG9mIGN1cnJlbnQgc3VicGF0aFxuICB0aGlzLl8gPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBwYXRoKCkge1xuICByZXR1cm4gbmV3IFBhdGg7XG59XG5cblBhdGgucHJvdG90eXBlID0gcGF0aC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBQYXRoLFxuICBtb3ZlVG86IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB0aGlzLl8gKz0gXCJNXCIgKyAodGhpcy5feDAgPSB0aGlzLl94MSA9ICt4KSArIFwiLFwiICsgKHRoaXMuX3kwID0gdGhpcy5feTEgPSAreSk7XG4gIH0sXG4gIGNsb3NlUGF0aDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3gxICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl94MSA9IHRoaXMuX3gwLCB0aGlzLl95MSA9IHRoaXMuX3kwO1xuICAgICAgdGhpcy5fICs9IFwiWlwiO1xuICAgIH1cbiAgfSxcbiAgbGluZVRvOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgdGhpcy5fICs9IFwiTFwiICsgKHRoaXMuX3gxID0gK3gpICsgXCIsXCIgKyAodGhpcy5feTEgPSAreSk7XG4gIH0sXG4gIHF1YWRyYXRpY0N1cnZlVG86IGZ1bmN0aW9uKHgxLCB5MSwgeCwgeSkge1xuICAgIHRoaXMuXyArPSBcIlFcIiArICgreDEpICsgXCIsXCIgKyAoK3kxKSArIFwiLFwiICsgKHRoaXMuX3gxID0gK3gpICsgXCIsXCIgKyAodGhpcy5feTEgPSAreSk7XG4gIH0sXG4gIGJlemllckN1cnZlVG86IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyLCB4LCB5KSB7XG4gICAgdGhpcy5fICs9IFwiQ1wiICsgKCt4MSkgKyBcIixcIiArICgreTEpICsgXCIsXCIgKyAoK3gyKSArIFwiLFwiICsgKCt5MikgKyBcIixcIiArICh0aGlzLl94MSA9ICt4KSArIFwiLFwiICsgKHRoaXMuX3kxID0gK3kpO1xuICB9LFxuICBhcmNUbzogZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIsIHIpIHtcbiAgICB4MSA9ICt4MSwgeTEgPSAreTEsIHgyID0gK3gyLCB5MiA9ICt5MiwgciA9ICtyO1xuICAgIHZhciB4MCA9IHRoaXMuX3gxLFxuICAgICAgICB5MCA9IHRoaXMuX3kxLFxuICAgICAgICB4MjEgPSB4MiAtIHgxLFxuICAgICAgICB5MjEgPSB5MiAtIHkxLFxuICAgICAgICB4MDEgPSB4MCAtIHgxLFxuICAgICAgICB5MDEgPSB5MCAtIHkxLFxuICAgICAgICBsMDFfMiA9IHgwMSAqIHgwMSArIHkwMSAqIHkwMTtcblxuICAgIC8vIElzIHRoZSByYWRpdXMgbmVnYXRpdmU/IEVycm9yLlxuICAgIGlmIChyIDwgMCkgdGhyb3cgbmV3IEVycm9yKFwibmVnYXRpdmUgcmFkaXVzOiBcIiArIHIpO1xuXG4gICAgLy8gSXMgdGhpcyBwYXRoIGVtcHR5PyBNb3ZlIHRvICh4MSx5MSkuXG4gICAgaWYgKHRoaXMuX3gxID09PSBudWxsKSB7XG4gICAgICB0aGlzLl8gKz0gXCJNXCIgKyAodGhpcy5feDEgPSB4MSkgKyBcIixcIiArICh0aGlzLl95MSA9IHkxKTtcbiAgICB9XG5cbiAgICAvLyBPciwgaXMgKHgxLHkxKSBjb2luY2lkZW50IHdpdGggKHgwLHkwKT8gRG8gbm90aGluZy5cbiAgICBlbHNlIGlmICghKGwwMV8yID4gZXBzaWxvbikpO1xuXG4gICAgLy8gT3IsIGFyZSAoeDAseTApLCAoeDEseTEpIGFuZCAoeDIseTIpIGNvbGxpbmVhcj9cbiAgICAvLyBFcXVpdmFsZW50bHksIGlzICh4MSx5MSkgY29pbmNpZGVudCB3aXRoICh4Mix5Mik/XG4gICAgLy8gT3IsIGlzIHRoZSByYWRpdXMgemVybz8gTGluZSB0byAoeDEseTEpLlxuICAgIGVsc2UgaWYgKCEoTWF0aC5hYnMoeTAxICogeDIxIC0geTIxICogeDAxKSA+IGVwc2lsb24pIHx8ICFyKSB7XG4gICAgICB0aGlzLl8gKz0gXCJMXCIgKyAodGhpcy5feDEgPSB4MSkgKyBcIixcIiArICh0aGlzLl95MSA9IHkxKTtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIGRyYXcgYW4gYXJjIVxuICAgIGVsc2Uge1xuICAgICAgdmFyIHgyMCA9IHgyIC0geDAsXG4gICAgICAgICAgeTIwID0geTIgLSB5MCxcbiAgICAgICAgICBsMjFfMiA9IHgyMSAqIHgyMSArIHkyMSAqIHkyMSxcbiAgICAgICAgICBsMjBfMiA9IHgyMCAqIHgyMCArIHkyMCAqIHkyMCxcbiAgICAgICAgICBsMjEgPSBNYXRoLnNxcnQobDIxXzIpLFxuICAgICAgICAgIGwwMSA9IE1hdGguc3FydChsMDFfMiksXG4gICAgICAgICAgbCA9IHIgKiBNYXRoLnRhbigocGkgLSBNYXRoLmFjb3MoKGwyMV8yICsgbDAxXzIgLSBsMjBfMikgLyAoMiAqIGwyMSAqIGwwMSkpKSAvIDIpLFxuICAgICAgICAgIHQwMSA9IGwgLyBsMDEsXG4gICAgICAgICAgdDIxID0gbCAvIGwyMTtcblxuICAgICAgLy8gSWYgdGhlIHN0YXJ0IHRhbmdlbnQgaXMgbm90IGNvaW5jaWRlbnQgd2l0aCAoeDAseTApLCBsaW5lIHRvLlxuICAgICAgaWYgKE1hdGguYWJzKHQwMSAtIDEpID4gZXBzaWxvbikge1xuICAgICAgICB0aGlzLl8gKz0gXCJMXCIgKyAoeDEgKyB0MDEgKiB4MDEpICsgXCIsXCIgKyAoeTEgKyB0MDEgKiB5MDEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl8gKz0gXCJBXCIgKyByICsgXCIsXCIgKyByICsgXCIsMCwwLFwiICsgKCsoeTAxICogeDIwID4geDAxICogeTIwKSkgKyBcIixcIiArICh0aGlzLl94MSA9IHgxICsgdDIxICogeDIxKSArIFwiLFwiICsgKHRoaXMuX3kxID0geTEgKyB0MjEgKiB5MjEpO1xuICAgIH1cbiAgfSxcbiAgYXJjOiBmdW5jdGlvbih4LCB5LCByLCBhMCwgYTEsIGNjdykge1xuICAgIHggPSAreCwgeSA9ICt5LCByID0gK3IsIGNjdyA9ICEhY2N3O1xuICAgIHZhciBkeCA9IHIgKiBNYXRoLmNvcyhhMCksXG4gICAgICAgIGR5ID0gciAqIE1hdGguc2luKGEwKSxcbiAgICAgICAgeDAgPSB4ICsgZHgsXG4gICAgICAgIHkwID0geSArIGR5LFxuICAgICAgICBjdyA9IDEgXiBjY3csXG4gICAgICAgIGRhID0gY2N3ID8gYTAgLSBhMSA6IGExIC0gYTA7XG5cbiAgICAvLyBJcyB0aGUgcmFkaXVzIG5lZ2F0aXZlPyBFcnJvci5cbiAgICBpZiAociA8IDApIHRocm93IG5ldyBFcnJvcihcIm5lZ2F0aXZlIHJhZGl1czogXCIgKyByKTtcblxuICAgIC8vIElzIHRoaXMgcGF0aCBlbXB0eT8gTW92ZSB0byAoeDAseTApLlxuICAgIGlmICh0aGlzLl94MSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5fICs9IFwiTVwiICsgeDAgKyBcIixcIiArIHkwO1xuICAgIH1cblxuICAgIC8vIE9yLCBpcyAoeDAseTApIG5vdCBjb2luY2lkZW50IHdpdGggdGhlIHByZXZpb3VzIHBvaW50PyBMaW5lIHRvICh4MCx5MCkuXG4gICAgZWxzZSBpZiAoTWF0aC5hYnModGhpcy5feDEgLSB4MCkgPiBlcHNpbG9uIHx8IE1hdGguYWJzKHRoaXMuX3kxIC0geTApID4gZXBzaWxvbikge1xuICAgICAgdGhpcy5fICs9IFwiTFwiICsgeDAgKyBcIixcIiArIHkwO1xuICAgIH1cblxuICAgIC8vIElzIHRoaXMgYXJjIGVtcHR5PyBXZeKAmXJlIGRvbmUuXG4gICAgaWYgKCFyKSByZXR1cm47XG5cbiAgICAvLyBEb2VzIHRoZSBhbmdsZSBnbyB0aGUgd3Jvbmcgd2F5PyBGbGlwIHRoZSBkaXJlY3Rpb24uXG4gICAgaWYgKGRhIDwgMCkgZGEgPSBkYSAlIHRhdSArIHRhdTtcblxuICAgIC8vIElzIHRoaXMgYSBjb21wbGV0ZSBjaXJjbGU/IERyYXcgdHdvIGFyY3MgdG8gY29tcGxldGUgdGhlIGNpcmNsZS5cbiAgICBpZiAoZGEgPiB0YXVFcHNpbG9uKSB7XG4gICAgICB0aGlzLl8gKz0gXCJBXCIgKyByICsgXCIsXCIgKyByICsgXCIsMCwxLFwiICsgY3cgKyBcIixcIiArICh4IC0gZHgpICsgXCIsXCIgKyAoeSAtIGR5KSArIFwiQVwiICsgciArIFwiLFwiICsgciArIFwiLDAsMSxcIiArIGN3ICsgXCIsXCIgKyAodGhpcy5feDEgPSB4MCkgKyBcIixcIiArICh0aGlzLl95MSA9IHkwKTtcbiAgICB9XG5cbiAgICAvLyBJcyB0aGlzIGFyYyBub24tZW1wdHk/IERyYXcgYW4gYXJjIVxuICAgIGVsc2UgaWYgKGRhID4gZXBzaWxvbikge1xuICAgICAgdGhpcy5fICs9IFwiQVwiICsgciArIFwiLFwiICsgciArIFwiLDAsXCIgKyAoKyhkYSA+PSBwaSkpICsgXCIsXCIgKyBjdyArIFwiLFwiICsgKHRoaXMuX3gxID0geCArIHIgKiBNYXRoLmNvcyhhMSkpICsgXCIsXCIgKyAodGhpcy5feTEgPSB5ICsgciAqIE1hdGguc2luKGExKSk7XG4gICAgfVxuICB9LFxuICByZWN0OiBmdW5jdGlvbih4LCB5LCB3LCBoKSB7XG4gICAgdGhpcy5fICs9IFwiTVwiICsgKHRoaXMuX3gwID0gdGhpcy5feDEgPSAreCkgKyBcIixcIiArICh0aGlzLl95MCA9IHRoaXMuX3kxID0gK3kpICsgXCJoXCIgKyAoK3cpICsgXCJ2XCIgKyAoK2gpICsgXCJoXCIgKyAoLXcpICsgXCJaXCI7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYXRoO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gZnVuY3Rpb24gY29uc3RhbnQoKSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24geChwKSB7XG4gIHJldHVybiBwWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geShwKSB7XG4gIHJldHVybiBwWzFdO1xufVxuIiwiZXhwb3J0IHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbiIsImltcG9ydCB7cGF0aH0gZnJvbSBcImQzLXBhdGhcIjtcbmltcG9ydCB7c2xpY2V9IGZyb20gXCIuLi9hcnJheS5qc1wiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IHt4IGFzIHBvaW50WCwgeSBhcyBwb2ludFl9IGZyb20gXCIuLi9wb2ludC5qc1wiO1xuaW1wb3J0IHBvaW50UmFkaWFsIGZyb20gXCIuLi9wb2ludFJhZGlhbC5qc1wiO1xuXG5mdW5jdGlvbiBsaW5rU291cmNlKGQpIHtcbiAgcmV0dXJuIGQuc291cmNlO1xufVxuXG5mdW5jdGlvbiBsaW5rVGFyZ2V0KGQpIHtcbiAgcmV0dXJuIGQudGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBsaW5rKGN1cnZlKSB7XG4gIHZhciBzb3VyY2UgPSBsaW5rU291cmNlLFxuICAgICAgdGFyZ2V0ID0gbGlua1RhcmdldCxcbiAgICAgIHggPSBwb2ludFgsXG4gICAgICB5ID0gcG9pbnRZLFxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gbGluaygpIHtcbiAgICB2YXIgYnVmZmVyLCBhcmd2ID0gc2xpY2UuY2FsbChhcmd1bWVudHMpLCBzID0gc291cmNlLmFwcGx5KHRoaXMsIGFyZ3YpLCB0ID0gdGFyZ2V0LmFwcGx5KHRoaXMsIGFyZ3YpO1xuICAgIGlmICghY29udGV4dCkgY29udGV4dCA9IGJ1ZmZlciA9IHBhdGgoKTtcbiAgICBjdXJ2ZShjb250ZXh0LCAreC5hcHBseSh0aGlzLCAoYXJndlswXSA9IHMsIGFyZ3YpKSwgK3kuYXBwbHkodGhpcywgYXJndiksICt4LmFwcGx5KHRoaXMsIChhcmd2WzBdID0gdCwgYXJndikpLCAreS5hcHBseSh0aGlzLCBhcmd2KSk7XG4gICAgaWYgKGJ1ZmZlcikgcmV0dXJuIGNvbnRleHQgPSBudWxsLCBidWZmZXIgKyBcIlwiIHx8IG51bGw7XG4gIH1cblxuICBsaW5rLnNvdXJjZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzb3VyY2UgPSBfLCBsaW5rKSA6IHNvdXJjZTtcbiAgfTtcblxuICBsaW5rLnRhcmdldCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0YXJnZXQgPSBfLCBsaW5rKSA6IHRhcmdldDtcbiAgfTtcblxuICBsaW5rLnggPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBsaW5rKSA6IHg7XG4gIH07XG5cbiAgbGluay55ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHkgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgbGluaykgOiB5O1xuICB9O1xuXG4gIGxpbmsuY29udGV4dCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICgoY29udGV4dCA9IF8gPT0gbnVsbCA/IG51bGwgOiBfKSwgbGluaykgOiBjb250ZXh0O1xuICB9O1xuXG4gIHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBjdXJ2ZUhvcml6b250YWwoY29udGV4dCwgeDAsIHkwLCB4MSwgeTEpIHtcbiAgY29udGV4dC5tb3ZlVG8oeDAsIHkwKTtcbiAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKHgwID0gKHgwICsgeDEpIC8gMiwgeTAsIHgwLCB5MSwgeDEsIHkxKTtcbn1cblxuZnVuY3Rpb24gY3VydmVWZXJ0aWNhbChjb250ZXh0LCB4MCwgeTAsIHgxLCB5MSkge1xuICBjb250ZXh0Lm1vdmVUbyh4MCwgeTApO1xuICBjb250ZXh0LmJlemllckN1cnZlVG8oeDAsIHkwID0gKHkwICsgeTEpIC8gMiwgeDEsIHkwLCB4MSwgeTEpO1xufVxuXG5mdW5jdGlvbiBjdXJ2ZVJhZGlhbChjb250ZXh0LCB4MCwgeTAsIHgxLCB5MSkge1xuICB2YXIgcDAgPSBwb2ludFJhZGlhbCh4MCwgeTApLFxuICAgICAgcDEgPSBwb2ludFJhZGlhbCh4MCwgeTAgPSAoeTAgKyB5MSkgLyAyKSxcbiAgICAgIHAyID0gcG9pbnRSYWRpYWwoeDEsIHkwKSxcbiAgICAgIHAzID0gcG9pbnRSYWRpYWwoeDEsIHkxKTtcbiAgY29udGV4dC5tb3ZlVG8ocDBbMF0sIHAwWzFdKTtcbiAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKHAxWzBdLCBwMVsxXSwgcDJbMF0sIHAyWzFdLCBwM1swXSwgcDNbMV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlua0hvcml6b250YWwoKSB7XG4gIHJldHVybiBsaW5rKGN1cnZlSG9yaXpvbnRhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rVmVydGljYWwoKSB7XG4gIHJldHVybiBsaW5rKGN1cnZlVmVydGljYWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlua1JhZGlhbCgpIHtcbiAgdmFyIGwgPSBsaW5rKGN1cnZlUmFkaWFsKTtcbiAgbC5hbmdsZSA9IGwueCwgZGVsZXRlIGwueDtcbiAgbC5yYWRpdXMgPSBsLnksIGRlbGV0ZSBsLnk7XG4gIHJldHVybiBsO1xufVxuIiwiaW1wb3J0IHtsaW5rSG9yaXpvbnRhbH0gZnJvbSBcImQzLXNoYXBlXCI7XG5cbmZ1bmN0aW9uIGhvcml6b250YWxTb3VyY2UoZCkge1xuICByZXR1cm4gW2Quc291cmNlLngxLCBkLnkwXTtcbn1cblxuZnVuY3Rpb24gaG9yaXpvbnRhbFRhcmdldChkKSB7XG4gIHJldHVybiBbZC50YXJnZXQueDAsIGQueTFdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGxpbmtIb3Jpem9udGFsKClcbiAgICAgIC5zb3VyY2UoaG9yaXpvbnRhbFNvdXJjZSlcbiAgICAgIC50YXJnZXQoaG9yaXpvbnRhbFRhcmdldCk7XG59XG4iLCJpbXBvcnQgeyBjIGFzIGdldENvbmZpZywgZyBhcyBnZXRBY2NUaXRsZSwgcyBhcyBzZXRBY2NUaXRsZSwgYSBhcyBnZXRBY2NEZXNjcmlwdGlvbiwgYiBhcyBzZXRBY2NEZXNjcmlwdGlvbiwgdCBhcyBnZXREaWFncmFtVGl0bGUsIHEgYXMgc2V0RGlhZ3JhbVRpdGxlLCB2IGFzIGNsZWFyJDEsIGUgYXMgY29tbW9uLCBLIGFzIGRlZmF1bHRDb25maWcsIG8gYXMgc2V0dXBHcmFwaFZpZXdib3ggfSBmcm9tIFwiLi9tZXJtYWlkLWI1ODYwYjU0LmpzXCI7XG5pbXBvcnQgeyBzZWxlY3QsIHNjYWxlT3JkaW5hbCwgc2NoZW1lVGFibGVhdTEwIH0gZnJvbSBcImQzXCI7XG5pbXBvcnQgeyBzYW5rZXksIHNhbmtleUxpbmtIb3Jpem9udGFsLCBzYW5rZXlMZWZ0LCBzYW5rZXlSaWdodCwgc2Fua2V5Q2VudGVyLCBzYW5rZXlKdXN0aWZ5IH0gZnJvbSBcImQzLXNhbmtleVwiO1xuaW1wb3J0IFwidHMtZGVkZW50XCI7XG5pbXBvcnQgXCJkYXlqc1wiO1xuaW1wb3J0IFwiQGJyYWludHJlZS9zYW5pdGl6ZS11cmxcIjtcbmltcG9ydCBcImRvbXB1cmlmeVwiO1xuaW1wb3J0IFwia2hyb21hXCI7XG5pbXBvcnQgXCJsb2Rhc2gtZXMvbWVtb2l6ZS5qc1wiO1xuaW1wb3J0IFwibG9kYXNoLWVzL21lcmdlLmpzXCI7XG5pbXBvcnQgXCJzdHlsaXNcIjtcbmltcG9ydCBcImxvZGFzaC1lcy9pc0VtcHR5LmpzXCI7XG52YXIgcGFyc2VyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBvID0gZnVuY3Rpb24oaywgdiwgbzIsIGwpIHtcbiAgICBmb3IgKG8yID0gbzIgfHwge30sIGwgPSBrLmxlbmd0aDsgbC0tOyBvMltrW2xdXSA9IHYpXG4gICAgICA7XG4gICAgcmV0dXJuIG8yO1xuICB9LCAkVjAgPSBbMSwgOV0sICRWMSA9IFsxLCAxMF0sICRWMiA9IFsxLCA1LCAxMCwgMTJdO1xuICB2YXIgcGFyc2VyMiA9IHtcbiAgICB0cmFjZTogZnVuY3Rpb24gdHJhY2UoKSB7XG4gICAgfSxcbiAgICB5eToge30sXG4gICAgc3ltYm9sc186IHsgXCJlcnJvclwiOiAyLCBcInN0YXJ0XCI6IDMsIFwiU0FOS0VZXCI6IDQsIFwiTkVXTElORVwiOiA1LCBcImNzdlwiOiA2LCBcIm9wdF9lb2ZcIjogNywgXCJyZWNvcmRcIjogOCwgXCJjc3ZfdGFpbFwiOiA5LCBcIkVPRlwiOiAxMCwgXCJmaWVsZFtzb3VyY2VdXCI6IDExLCBcIkNPTU1BXCI6IDEyLCBcImZpZWxkW3RhcmdldF1cIjogMTMsIFwiZmllbGRbdmFsdWVdXCI6IDE0LCBcImZpZWxkXCI6IDE1LCBcImVzY2FwZWRcIjogMTYsIFwibm9uX2VzY2FwZWRcIjogMTcsIFwiRFFVT1RFXCI6IDE4LCBcIkVTQ0FQRURfVEVYVFwiOiAxOSwgXCJOT05fRVNDQVBFRF9URVhUXCI6IDIwLCBcIiRhY2NlcHRcIjogMCwgXCIkZW5kXCI6IDEgfSxcbiAgICB0ZXJtaW5hbHNfOiB7IDI6IFwiZXJyb3JcIiwgNDogXCJTQU5LRVlcIiwgNTogXCJORVdMSU5FXCIsIDEwOiBcIkVPRlwiLCAxMTogXCJmaWVsZFtzb3VyY2VdXCIsIDEyOiBcIkNPTU1BXCIsIDEzOiBcImZpZWxkW3RhcmdldF1cIiwgMTQ6IFwiZmllbGRbdmFsdWVdXCIsIDE4OiBcIkRRVU9URVwiLCAxOTogXCJFU0NBUEVEX1RFWFRcIiwgMjA6IFwiTk9OX0VTQ0FQRURfVEVYVFwiIH0sXG4gICAgcHJvZHVjdGlvbnNfOiBbMCwgWzMsIDRdLCBbNiwgMl0sIFs5LCAyXSwgWzksIDBdLCBbNywgMV0sIFs3LCAwXSwgWzgsIDVdLCBbMTUsIDFdLCBbMTUsIDFdLCBbMTYsIDNdLCBbMTcsIDFdXSxcbiAgICBwZXJmb3JtQWN0aW9uOiBmdW5jdGlvbiBhbm9ueW1vdXMoeXl0ZXh0LCB5eWxlbmcsIHl5bGluZW5vLCB5eSwgeXlzdGF0ZSwgJCQsIF8kKSB7XG4gICAgICB2YXIgJDAgPSAkJC5sZW5ndGggLSAxO1xuICAgICAgc3dpdGNoICh5eXN0YXRlKSB7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBjb25zdCBzb3VyY2UgPSB5eS5maW5kT3JDcmVhdGVOb2RlKCQkWyQwIC0gNF0udHJpbSgpLnJlcGxhY2VBbGwoJ1wiXCInLCAnXCInKSk7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0geXkuZmluZE9yQ3JlYXRlTm9kZSgkJFskMCAtIDJdLnRyaW0oKS5yZXBsYWNlQWxsKCdcIlwiJywgJ1wiJykpO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VGbG9hdCgkJFskMF0udHJpbSgpKTtcbiAgICAgICAgICB5eS5hZGRMaW5rKHNvdXJjZSwgdGFyZ2V0LCB2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMCAtIDFdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gICAgdGFibGU6IFt7IDM6IDEsIDQ6IFsxLCAyXSB9LCB7IDE6IFszXSB9LCB7IDU6IFsxLCAzXSB9LCB7IDY6IDQsIDg6IDUsIDE1OiA2LCAxNjogNywgMTc6IDgsIDE4OiAkVjAsIDIwOiAkVjEgfSwgeyAxOiBbMiwgNl0sIDc6IDExLCAxMDogWzEsIDEyXSB9LCBvKCRWMSwgWzIsIDRdLCB7IDk6IDEzLCA1OiBbMSwgMTRdIH0pLCB7IDEyOiBbMSwgMTVdIH0sIG8oJFYyLCBbMiwgOF0pLCBvKCRWMiwgWzIsIDldKSwgeyAxOTogWzEsIDE2XSB9LCBvKCRWMiwgWzIsIDExXSksIHsgMTogWzIsIDFdIH0sIHsgMTogWzIsIDVdIH0sIG8oJFYxLCBbMiwgMl0pLCB7IDY6IDE3LCA4OiA1LCAxNTogNiwgMTY6IDcsIDE3OiA4LCAxODogJFYwLCAyMDogJFYxIH0sIHsgMTU6IDE4LCAxNjogNywgMTc6IDgsIDE4OiAkVjAsIDIwOiAkVjEgfSwgeyAxODogWzEsIDE5XSB9LCBvKCRWMSwgWzIsIDNdKSwgeyAxMjogWzEsIDIwXSB9LCBvKCRWMiwgWzIsIDEwXSksIHsgMTU6IDIxLCAxNjogNywgMTc6IDgsIDE4OiAkVjAsIDIwOiAkVjEgfSwgbyhbMSwgNSwgMTBdLCBbMiwgN10pXSxcbiAgICBkZWZhdWx0QWN0aW9uczogeyAxMTogWzIsIDFdLCAxMjogWzIsIDVdIH0sXG4gICAgcGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcbiAgICAgIGlmIChoYXNoLnJlY292ZXJhYmxlKSB7XG4gICAgICAgIHRoaXMudHJhY2Uoc3RyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihzdHIpO1xuICAgICAgICBlcnJvci5oYXNoID0gaGFzaDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcywgc3RhY2sgPSBbMF0sIHRzdGFjayA9IFtdLCB2c3RhY2sgPSBbbnVsbF0sIGxzdGFjayA9IFtdLCB0YWJsZSA9IHRoaXMudGFibGUsIHl5dGV4dCA9IFwiXCIsIHl5bGluZW5vID0gMCwgeXlsZW5nID0gMCwgVEVSUk9SID0gMiwgRU9GID0gMTtcbiAgICAgIHZhciBhcmdzID0gbHN0YWNrLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHZhciBsZXhlcjIgPSBPYmplY3QuY3JlYXRlKHRoaXMubGV4ZXIpO1xuICAgICAgdmFyIHNoYXJlZFN0YXRlID0geyB5eToge30gfTtcbiAgICAgIGZvciAodmFyIGsgaW4gdGhpcy55eSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMueXksIGspKSB7XG4gICAgICAgICAgc2hhcmVkU3RhdGUueXlba10gPSB0aGlzLnl5W2tdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXhlcjIuc2V0SW5wdXQoaW5wdXQsIHNoYXJlZFN0YXRlLnl5KTtcbiAgICAgIHNoYXJlZFN0YXRlLnl5LmxleGVyID0gbGV4ZXIyO1xuICAgICAgc2hhcmVkU3RhdGUueXkucGFyc2VyID0gdGhpcztcbiAgICAgIGlmICh0eXBlb2YgbGV4ZXIyLnl5bGxvYyA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGxleGVyMi55eWxsb2MgPSB7fTtcbiAgICAgIH1cbiAgICAgIHZhciB5eWxvYyA9IGxleGVyMi55eWxsb2M7XG4gICAgICBsc3RhY2sucHVzaCh5eWxvYyk7XG4gICAgICB2YXIgcmFuZ2VzID0gbGV4ZXIyLm9wdGlvbnMgJiYgbGV4ZXIyLm9wdGlvbnMucmFuZ2VzO1xuICAgICAgaWYgKHR5cGVvZiBzaGFyZWRTdGF0ZS55eS5wYXJzZUVycm9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhpcy5wYXJzZUVycm9yID0gc2hhcmVkU3RhdGUueXkucGFyc2VFcnJvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFyc2VFcnJvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZUVycm9yO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gbGV4KCkge1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHRva2VuID0gdHN0YWNrLnBvcCgpIHx8IGxleGVyMi5sZXgoKSB8fCBFT0Y7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBpZiAodG9rZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgdHN0YWNrID0gdG9rZW47XG4gICAgICAgICAgICB0b2tlbiA9IHRzdGFjay5wb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG9rZW4gPSBzZWxmLnN5bWJvbHNfW3Rva2VuXSB8fCB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICB9XG4gICAgICB2YXIgc3ltYm9sLCBzdGF0ZSwgYWN0aW9uLCByLCB5eXZhbCA9IHt9LCBwLCBsZW4sIG5ld1N0YXRlLCBleHBlY3RlZDtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHN0YXRlID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlXSkge1xuICAgICAgICAgIGFjdGlvbiA9IHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzeW1ib2wgPT09IG51bGwgfHwgdHlwZW9mIHN5bWJvbCA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBzeW1ib2wgPSBsZXgoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWN0aW9uID0gdGFibGVbc3RhdGVdICYmIHRhYmxlW3N0YXRlXVtzeW1ib2xdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSBcInVuZGVmaW5lZFwiIHx8ICFhY3Rpb24ubGVuZ3RoIHx8ICFhY3Rpb25bMF0pIHtcbiAgICAgICAgICB2YXIgZXJyU3RyID0gXCJcIjtcbiAgICAgICAgICBleHBlY3RlZCA9IFtdO1xuICAgICAgICAgIGZvciAocCBpbiB0YWJsZVtzdGF0ZV0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRlcm1pbmFsc19bcF0gJiYgcCA+IFRFUlJPUikge1xuICAgICAgICAgICAgICBleHBlY3RlZC5wdXNoKFwiJ1wiICsgdGhpcy50ZXJtaW5hbHNfW3BdICsgXCInXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobGV4ZXIyLnNob3dQb3NpdGlvbikge1xuICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjpcXG5cIiArIGxleGVyMi5zaG93UG9zaXRpb24oKSArIFwiXFxuRXhwZWN0aW5nIFwiICsgZXhwZWN0ZWQuam9pbihcIiwgXCIpICsgXCIsIGdvdCAnXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJTdHIgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoeXlsaW5lbm8gKyAxKSArIFwiOiBVbmV4cGVjdGVkIFwiICsgKHN5bWJvbCA9PSBFT0YgPyBcImVuZCBvZiBpbnB1dFwiIDogXCInXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wYXJzZUVycm9yKGVyclN0ciwge1xuICAgICAgICAgICAgdGV4dDogbGV4ZXIyLm1hdGNoLFxuICAgICAgICAgICAgdG9rZW46IHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCxcbiAgICAgICAgICAgIGxpbmU6IGxleGVyMi55eWxpbmVubyxcbiAgICAgICAgICAgIGxvYzogeXlsb2MsXG4gICAgICAgICAgICBleHBlY3RlZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rpb25bMF0gaW5zdGFuY2VvZiBBcnJheSAmJiBhY3Rpb24ubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcnNlIEVycm9yOiBtdWx0aXBsZSBhY3Rpb25zIHBvc3NpYmxlIGF0IHN0YXRlOiBcIiArIHN0YXRlICsgXCIsIHRva2VuOiBcIiArIHN5bWJvbCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChhY3Rpb25bMF0pIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBzdGFjay5wdXNoKHN5bWJvbCk7XG4gICAgICAgICAgICB2c3RhY2sucHVzaChsZXhlcjIueXl0ZXh0KTtcbiAgICAgICAgICAgIGxzdGFjay5wdXNoKGxleGVyMi55eWxsb2MpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChhY3Rpb25bMV0pO1xuICAgICAgICAgICAgc3ltYm9sID0gbnVsbDtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeXlsZW5nID0gbGV4ZXIyLnl5bGVuZztcbiAgICAgICAgICAgICAgeXl0ZXh0ID0gbGV4ZXIyLnl5dGV4dDtcbiAgICAgICAgICAgICAgeXlsaW5lbm8gPSBsZXhlcjIueXlsaW5lbm87XG4gICAgICAgICAgICAgIHl5bG9jID0gbGV4ZXIyLnl5bGxvYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxlbiA9IHRoaXMucHJvZHVjdGlvbnNfW2FjdGlvblsxXV1bMV07XG4gICAgICAgICAgICB5eXZhbC4kID0gdnN0YWNrW3ZzdGFjay5sZW5ndGggLSBsZW5dO1xuICAgICAgICAgICAgeXl2YWwuXyQgPSB7XG4gICAgICAgICAgICAgIGZpcnN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgbGFzdF9saW5lOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9jb2x1bW5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocmFuZ2VzKSB7XG4gICAgICAgICAgICAgIHl5dmFsLl8kLnJhbmdlID0gW1xuICAgICAgICAgICAgICAgIGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0ucmFuZ2VbMF0sXG4gICAgICAgICAgICAgICAgbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5yYW5nZVsxXVxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgciA9IHRoaXMucGVyZm9ybUFjdGlvbi5hcHBseSh5eXZhbCwgW1xuICAgICAgICAgICAgICB5eXRleHQsXG4gICAgICAgICAgICAgIHl5bGVuZyxcbiAgICAgICAgICAgICAgeXlsaW5lbm8sXG4gICAgICAgICAgICAgIHNoYXJlZFN0YXRlLnl5LFxuICAgICAgICAgICAgICBhY3Rpb25bMV0sXG4gICAgICAgICAgICAgIHZzdGFjayxcbiAgICAgICAgICAgICAgbHN0YWNrXG4gICAgICAgICAgICBdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIHN0YWNrID0gc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4gKiAyKTtcbiAgICAgICAgICAgICAgdnN0YWNrID0gdnN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcbiAgICAgICAgICAgICAgbHN0YWNrID0gbHN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YWNrLnB1c2godGhpcy5wcm9kdWN0aW9uc19bYWN0aW9uWzFdXVswXSk7XG4gICAgICAgICAgICB2c3RhY2sucHVzaCh5eXZhbC4kKTtcbiAgICAgICAgICAgIGxzdGFjay5wdXNoKHl5dmFsLl8kKTtcbiAgICAgICAgICAgIG5ld1N0YXRlID0gdGFibGVbc3RhY2tbc3RhY2subGVuZ3RoIC0gMl1dW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDFdXTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV3U3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbiAgdmFyIGxleGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxleGVyMiA9IHtcbiAgICAgIEVPRjogMSxcbiAgICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XG4gICAgICAgIGlmICh0aGlzLnl5LnBhcnNlcikge1xuICAgICAgICAgIHRoaXMueXkucGFyc2VyLnBhcnNlRXJyb3Ioc3RyLCBoYXNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJlc2V0cyB0aGUgbGV4ZXIsIHNldHMgbmV3IGlucHV0XG4gICAgICBzZXRJbnB1dDogZnVuY3Rpb24oaW5wdXQsIHl5KSB7XG4gICAgICAgIHRoaXMueXkgPSB5eSB8fCB0aGlzLnl5IHx8IHt9O1xuICAgICAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuICAgICAgICB0aGlzLl9tb3JlID0gdGhpcy5fYmFja3RyYWNrID0gdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDA7XG4gICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbXCJJTklUSUFMXCJdO1xuICAgICAgICB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogMCxcbiAgICAgICAgICBsYXN0X2xpbmU6IDEsXG4gICAgICAgICAgbGFzdF9jb2x1bW46IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFswLCAwXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIGNvbnN1bWVzIGFuZCByZXR1cm5zIG9uZSBjaGFyIGZyb20gdGhlIGlucHV0XG4gICAgICBpbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMuX2lucHV0WzBdO1xuICAgICAgICB0aGlzLnl5dGV4dCArPSBjaDtcbiAgICAgICAgdGhpcy55eWxlbmcrKztcbiAgICAgICAgdGhpcy5vZmZzZXQrKztcbiAgICAgICAgdGhpcy5tYXRjaCArPSBjaDtcbiAgICAgICAgdGhpcy5tYXRjaGVkICs9IGNoO1xuICAgICAgICB2YXIgbGluZXMgPSBjaC5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG4gICAgICAgIGlmIChsaW5lcykge1xuICAgICAgICAgIHRoaXMueXlsaW5lbm8rKztcbiAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2VbMV0rKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKDEpO1xuICAgICAgICByZXR1cm4gY2g7XG4gICAgICB9LFxuICAgICAgLy8gdW5zaGlmdHMgb25lIGNoYXIgKG9yIGEgc3RyaW5nKSBpbnRvIHRoZSBpbnB1dFxuICAgICAgdW5wdXQ6IGZ1bmN0aW9uKGNoKSB7XG4gICAgICAgIHZhciBsZW4gPSBjaC5sZW5ndGg7XG4gICAgICAgIHZhciBsaW5lcyA9IGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gY2ggKyB0aGlzLl9pbnB1dDtcbiAgICAgICAgdGhpcy55eXRleHQgPSB0aGlzLnl5dGV4dC5zdWJzdHIoMCwgdGhpcy55eXRleHQubGVuZ3RoIC0gbGVuKTtcbiAgICAgICAgdGhpcy5vZmZzZXQgLT0gbGVuO1xuICAgICAgICB2YXIgb2xkTGluZXMgPSB0aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMubWF0Y2ggPSB0aGlzLm1hdGNoLnN1YnN0cigwLCB0aGlzLm1hdGNoLmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSAxKTtcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLnl5bGluZW5vIC09IGxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSB0aGlzLnl5bGxvYy5yYW5nZTtcbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MuZmlyc3RfbGluZSxcbiAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiBsaW5lcyA/IChsaW5lcy5sZW5ndGggPT09IG9sZExpbmVzLmxlbmd0aCA/IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiA6IDApICsgb2xkTGluZXNbb2xkTGluZXMubGVuZ3RoIC0gbGluZXMubGVuZ3RoXS5sZW5ndGggLSBsaW5lc1swXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gLSBsZW5cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFtyWzBdLCByWzBdICsgdGhpcy55eWxlbmcgLSBsZW5dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBXaGVuIGNhbGxlZCBmcm9tIGFjdGlvbiwgY2FjaGVzIG1hdGNoZWQgdGV4dCBhbmQgYXBwZW5kcyBpdCBvbiBuZXh0IGFjdGlvblxuICAgICAgbW9yZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX21vcmUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBXaGVuIGNhbGxlZCBmcm9tIGFjdGlvbiwgc2lnbmFscyB0aGUgbGV4ZXIgdGhhdCB0aGlzIHJ1bGUgZmFpbHMgdG8gbWF0Y2ggdGhlIGlucHV0LCBzbyB0aGUgbmV4dCBtYXRjaGluZyBydWxlIChyZWdleCkgc2hvdWxkIGJlIHRlc3RlZCBpbnN0ZWFkLlxuICAgICAgcmVqZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFlvdSBjYW4gb25seSBpbnZva2UgcmVqZWN0KCkgaW4gdGhlIGxleGVyIHdoZW4gdGhlIGxleGVyIGlzIG9mIHRoZSBiYWNrdHJhY2tpbmcgcGVyc3Vhc2lvbiAob3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIgPSB0cnVlKS5cXG5cIiArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgIGxpbmU6IHRoaXMueXlsaW5lbm9cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyByZXRhaW4gZmlyc3QgbiBjaGFyYWN0ZXJzIG9mIHRoZSBtYXRjaFxuICAgICAgbGVzczogZnVuY3Rpb24obikge1xuICAgICAgICB0aGlzLnVucHV0KHRoaXMubWF0Y2guc2xpY2UobikpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIGFscmVhZHkgbWF0Y2hlZCBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHBhc3RJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwYXN0ID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gdGhpcy5tYXRjaC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gKHBhc3QubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikgKyBwYXN0LnN1YnN0cigtMjApLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sXG4gICAgICAvLyBkaXNwbGF5cyB1cGNvbWluZyBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHVwY29taW5nSW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbmV4dCA9IHRoaXMubWF0Y2g7XG4gICAgICAgIGlmIChuZXh0Lmxlbmd0aCA8IDIwKSB7XG4gICAgICAgICAgbmV4dCArPSB0aGlzLl9pbnB1dC5zdWJzdHIoMCwgMjAgLSBuZXh0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChuZXh0LnN1YnN0cigwLCAyMCkgKyAobmV4dC5sZW5ndGggPiAyMCA/IFwiLi4uXCIgOiBcIlwiKSkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIHRoZSBjaGFyYWN0ZXIgcG9zaXRpb24gd2hlcmUgdGhlIGxleGluZyBlcnJvciBvY2N1cnJlZCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHNob3dQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwcmUgPSB0aGlzLnBhc3RJbnB1dCgpO1xuICAgICAgICB2YXIgYyA9IG5ldyBBcnJheShwcmUubGVuZ3RoICsgMSkuam9pbihcIi1cIik7XG4gICAgICAgIHJldHVybiBwcmUgKyB0aGlzLnVwY29taW5nSW5wdXQoKSArIFwiXFxuXCIgKyBjICsgXCJeXCI7XG4gICAgICB9LFxuICAgICAgLy8gdGVzdCB0aGUgbGV4ZWQgdG9rZW46IHJldHVybiBGQUxTRSB3aGVuIG5vdCBhIG1hdGNoLCBvdGhlcndpc2UgcmV0dXJuIHRva2VuXG4gICAgICB0ZXN0X21hdGNoOiBmdW5jdGlvbihtYXRjaCwgaW5kZXhlZF9ydWxlKSB7XG4gICAgICAgIHZhciB0b2tlbiwgbGluZXMsIGJhY2t1cDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICBiYWNrdXAgPSB7XG4gICAgICAgICAgICB5eWxpbmVubzogdGhpcy55eWxpbmVubyxcbiAgICAgICAgICAgIHl5bGxvYzoge1xuICAgICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMubGFzdF9saW5lLFxuICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeXl0ZXh0OiB0aGlzLnl5dGV4dCxcbiAgICAgICAgICAgIG1hdGNoOiB0aGlzLm1hdGNoLFxuICAgICAgICAgICAgbWF0Y2hlczogdGhpcy5tYXRjaGVzLFxuICAgICAgICAgICAgbWF0Y2hlZDogdGhpcy5tYXRjaGVkLFxuICAgICAgICAgICAgeXlsZW5nOiB0aGlzLnl5bGVuZyxcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgICBfbW9yZTogdGhpcy5fbW9yZSxcbiAgICAgICAgICAgIF9pbnB1dDogdGhpcy5faW5wdXQsXG4gICAgICAgICAgICB5eTogdGhpcy55eSxcbiAgICAgICAgICAgIGNvbmRpdGlvblN0YWNrOiB0aGlzLmNvbmRpdGlvblN0YWNrLnNsaWNlKDApLFxuICAgICAgICAgICAgZG9uZTogdGhpcy5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgICAgYmFja3VwLnl5bGxvYy5yYW5nZSA9IHRoaXMueXlsbG9jLnJhbmdlLnNsaWNlKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsaW5lcyA9IG1hdGNoWzBdLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgaWYgKGxpbmVzKSB7XG4gICAgICAgICAgdGhpcy55eWxpbmVubyArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5sZW5ndGggLSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIG1hdGNoWzBdLmxlbmd0aFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnl5dGV4dCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gbWF0Y2g7XG4gICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3RoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZ107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9yZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICB0aGlzLm1hdGNoZWQgKz0gbWF0Y2hbMF07XG4gICAgICAgIHRva2VuID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodGhpcywgdGhpcy55eSwgdGhpcywgaW5kZXhlZF9ydWxlLCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pO1xuICAgICAgICBpZiAodGhpcy5kb25lICYmIHRoaXMuX2lucHV0KSB7XG4gICAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgIGZvciAodmFyIGsgaW4gYmFja3VwKSB7XG4gICAgICAgICAgICB0aGlzW2tdID0gYmFja3VwW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiBuZXh0IG1hdGNoIGluIGlucHV0XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lucHV0KSB7XG4gICAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG9rZW4sIG1hdGNoLCB0ZW1wTWF0Y2gsIGluZGV4O1xuICAgICAgICBpZiAoIXRoaXMuX21vcmUpIHtcbiAgICAgICAgICB0aGlzLnl5dGV4dCA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5tYXRjaCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJ1bGVzID0gdGhpcy5fY3VycmVudFJ1bGVzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0ZW1wTWF0Y2ggPSB0aGlzLl9pbnB1dC5tYXRjaCh0aGlzLnJ1bGVzW3J1bGVzW2ldXSk7XG4gICAgICAgICAgaWYgKHRlbXBNYXRjaCAmJiAoIW1hdGNoIHx8IHRlbXBNYXRjaFswXS5sZW5ndGggPiBtYXRjaFswXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBtYXRjaCA9IHRlbXBNYXRjaDtcbiAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgICAgIHRva2VuID0gdGhpcy50ZXN0X21hdGNoKHRlbXBNYXRjaCwgcnVsZXNbaV0pO1xuICAgICAgICAgICAgICBpZiAodG9rZW4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuZmxleCkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdG9rZW4gPSB0aGlzLnRlc3RfbWF0Y2gobWF0Y2gsIHJ1bGVzW2luZGV4XSk7XG4gICAgICAgICAgaWYgKHRva2VuICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lucHV0ID09PSBcIlwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFVucmVjb2duaXplZCB0ZXh0LlxcblwiICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggdGhhdCBoYXMgYSB0b2tlblxuICAgICAgbGV4OiBmdW5jdGlvbiBsZXgoKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5uZXh0KCk7XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubGV4KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBhY3RpdmF0ZXMgYSBuZXcgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIChwdXNoZXMgdGhlIG5ldyBsZXhlciBjb25kaXRpb24gc3RhdGUgb250byB0aGUgY29uZGl0aW9uIHN0YWNrKVxuICAgICAgYmVnaW46IGZ1bmN0aW9uIGJlZ2luKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrLnB1c2goY29uZGl0aW9uKTtcbiAgICAgIH0sXG4gICAgICAvLyBwb3AgdGhlIHByZXZpb3VzbHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvZmYgdGhlIGNvbmRpdGlvbiBzdGFja1xuICAgICAgcG9wU3RhdGU6IGZ1bmN0aW9uIHBvcFN0YXRlKCkge1xuICAgICAgICB2YXIgbiA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKG4gPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbMF07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBwcm9kdWNlIHRoZSBsZXhlciBydWxlIHNldCB3aGljaCBpcyBhY3RpdmUgZm9yIHRoZSBjdXJyZW50bHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZVxuICAgICAgX2N1cnJlbnRSdWxlczogZnVuY3Rpb24gX2N1cnJlbnRSdWxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoICYmIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbnNbdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdXS5ydWxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zW1wiSU5JVElBTFwiXS5ydWxlcztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGU7IHdoZW4gYW4gaW5kZXggYXJndW1lbnQgaXMgcHJvdmlkZWQgaXQgcHJvZHVjZXMgdGhlIE4tdGggcHJldmlvdXMgY29uZGl0aW9uIHN0YXRlLCBpZiBhdmFpbGFibGVcbiAgICAgIHRvcFN0YXRlOiBmdW5jdGlvbiB0b3BTdGF0ZShuKSB7XG4gICAgICAgIG4gPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDEgLSBNYXRoLmFicyhuIHx8IDApO1xuICAgICAgICBpZiAobiA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbbl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiSU5JVElBTFwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gYWxpYXMgZm9yIGJlZ2luKGNvbmRpdGlvbilcbiAgICAgIHB1c2hTdGF0ZTogZnVuY3Rpb24gcHVzaFN0YXRlKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmJlZ2luKGNvbmRpdGlvbik7XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIHRoZSBudW1iZXIgb2Ygc3RhdGVzIGN1cnJlbnRseSBvbiB0aGUgc3RhY2tcbiAgICAgIHN0YXRlU3RhY2tTaXplOiBmdW5jdGlvbiBzdGF0ZVN0YWNrU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoO1xuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHsgXCJjYXNlLWluc2Vuc2l0aXZlXCI6IHRydWUgfSxcbiAgICAgIHBlcmZvcm1BY3Rpb246IGZ1bmN0aW9uIGFub255bW91cyh5eSwgeXlfLCAkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zLCBZWV9TVEFSVCkge1xuICAgICAgICBzd2l0Y2ggKCRhdm9pZGluZ19uYW1lX2NvbGxpc2lvbnMpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcImNzdlwiKTtcbiAgICAgICAgICAgIHJldHVybiA0O1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiAxMDtcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gNTtcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gMTI7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJlc2NhcGVkX3RleHRcIik7XG4gICAgICAgICAgICByZXR1cm4gMTg7XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgcmV0dXJuIDIwO1xuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoXCJlc2NhcGVkX3RleHRcIik7XG4gICAgICAgICAgICByZXR1cm4gMTg7XG4gICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgcmV0dXJuIDE5O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcnVsZXM6IFsvXig/OnNhbmtleS1iZXRhXFxiKS9pLCAvXig/OiQpL2ksIC9eKD86KChcXHUwMDBEXFx1MDAwQSl8KFxcdTAwMEEpKSkvaSwgL14oPzooXFx1MDAyQykpL2ksIC9eKD86KFxcdTAwMjIpKS9pLCAvXig/OihbXFx1MDAyMC1cXHUwMDIxXFx1MDAyMy1cXHUwMDJCXFx1MDAyRC1cXHUwMDdFXSkqKS9pLCAvXig/OihcXHUwMDIyKSg/IShcXHUwMDIyKSkpL2ksIC9eKD86KChbXFx1MDAyMC1cXHUwMDIxXFx1MDAyMy1cXHUwMDJCXFx1MDAyRC1cXHUwMDdFXSl8KFxcdTAwMkMpfChcXHUwMDBEKXwoXFx1MDAwQSl8KFxcdTAwMjIpKFxcdTAwMjIpKSopL2ldLFxuICAgICAgY29uZGl0aW9uczogeyBcImNzdlwiOiB7IFwicnVsZXNcIjogWzEsIDIsIDMsIDQsIDUsIDYsIDddLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImVzY2FwZWRfdGV4dFwiOiB7IFwicnVsZXNcIjogWzYsIDddLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIklOSVRJQUxcIjogeyBcInJ1bGVzXCI6IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3XSwgXCJpbmNsdXNpdmVcIjogdHJ1ZSB9IH1cbiAgICB9O1xuICAgIHJldHVybiBsZXhlcjI7XG4gIH0oKTtcbiAgcGFyc2VyMi5sZXhlciA9IGxleGVyO1xuICBmdW5jdGlvbiBQYXJzZXIoKSB7XG4gICAgdGhpcy55eSA9IHt9O1xuICB9XG4gIFBhcnNlci5wcm90b3R5cGUgPSBwYXJzZXIyO1xuICBwYXJzZXIyLlBhcnNlciA9IFBhcnNlcjtcbiAgcmV0dXJuIG5ldyBQYXJzZXIoKTtcbn0oKTtcbnBhcnNlci5wYXJzZXIgPSBwYXJzZXI7XG5jb25zdCBwYXJzZXIkMSA9IHBhcnNlcjtcbmxldCBsaW5rcyA9IFtdO1xubGV0IG5vZGVzID0gW107XG5sZXQgbm9kZXNNYXAgPSB7fTtcbmNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICBsaW5rcyA9IFtdO1xuICBub2RlcyA9IFtdO1xuICBub2Rlc01hcCA9IHt9O1xuICBjbGVhciQxKCk7XG59O1xuY2xhc3MgU2Fua2V5TGluayB7XG4gIGNvbnN0cnVjdG9yKHNvdXJjZSwgdGFyZ2V0LCB2YWx1ZSA9IDApIHtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cbmNvbnN0IGFkZExpbmsgPSAoc291cmNlLCB0YXJnZXQsIHZhbHVlKSA9PiB7XG4gIGxpbmtzLnB1c2gobmV3IFNhbmtleUxpbmsoc291cmNlLCB0YXJnZXQsIHZhbHVlKSk7XG59O1xuY2xhc3MgU2Fua2V5Tm9kZSB7XG4gIGNvbnN0cnVjdG9yKElEKSB7XG4gICAgdGhpcy5JRCA9IElEO1xuICB9XG59XG5jb25zdCBmaW5kT3JDcmVhdGVOb2RlID0gKElEKSA9PiB7XG4gIElEID0gY29tbW9uLnNhbml0aXplVGV4dChJRCwgZ2V0Q29uZmlnKCkpO1xuICBpZiAoIW5vZGVzTWFwW0lEXSkge1xuICAgIG5vZGVzTWFwW0lEXSA9IG5ldyBTYW5rZXlOb2RlKElEKTtcbiAgICBub2Rlcy5wdXNoKG5vZGVzTWFwW0lEXSk7XG4gIH1cbiAgcmV0dXJuIG5vZGVzTWFwW0lEXTtcbn07XG5jb25zdCBnZXROb2RlcyA9ICgpID0+IG5vZGVzO1xuY29uc3QgZ2V0TGlua3MgPSAoKSA9PiBsaW5rcztcbmNvbnN0IGdldEdyYXBoID0gKCkgPT4gKHtcbiAgbm9kZXM6IG5vZGVzLm1hcCgobm9kZSkgPT4gKHsgaWQ6IG5vZGUuSUQgfSkpLFxuICBsaW5rczogbGlua3MubWFwKChsaW5rKSA9PiAoe1xuICAgIHNvdXJjZTogbGluay5zb3VyY2UuSUQsXG4gICAgdGFyZ2V0OiBsaW5rLnRhcmdldC5JRCxcbiAgICB2YWx1ZTogbGluay52YWx1ZVxuICB9KSlcbn0pO1xuY29uc3QgZGIgPSB7XG4gIG5vZGVzTWFwLFxuICBnZXRDb25maWc6ICgpID0+IGdldENvbmZpZygpLnNhbmtleSxcbiAgZ2V0Tm9kZXMsXG4gIGdldExpbmtzLFxuICBnZXRHcmFwaCxcbiAgYWRkTGluayxcbiAgZmluZE9yQ3JlYXRlTm9kZSxcbiAgZ2V0QWNjVGl0bGUsXG4gIHNldEFjY1RpdGxlLFxuICBnZXRBY2NEZXNjcmlwdGlvbixcbiAgc2V0QWNjRGVzY3JpcHRpb24sXG4gIGdldERpYWdyYW1UaXRsZSxcbiAgc2V0RGlhZ3JhbVRpdGxlLFxuICBjbGVhclxufTtcbmNvbnN0IF9VaWQgPSBjbGFzcyBfVWlkMiB7XG4gIHN0YXRpYyBuZXh0KG5hbWUpIHtcbiAgICByZXR1cm4gbmV3IF9VaWQyKG5hbWUgKyArK19VaWQyLmNvdW50KTtcbiAgfVxuICBjb25zdHJ1Y3RvcihpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmhyZWYgPSBgIyR7aWR9YDtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gXCJ1cmwoXCIgKyB0aGlzLmhyZWYgKyBcIilcIjtcbiAgfVxufTtcbl9VaWQuY291bnQgPSAwO1xubGV0IFVpZCA9IF9VaWQ7XG5jb25zdCBhbGlnbm1lbnRzTWFwID0ge1xuICBsZWZ0OiBzYW5rZXlMZWZ0LFxuICByaWdodDogc2Fua2V5UmlnaHQsXG4gIGNlbnRlcjogc2Fua2V5Q2VudGVyLFxuICBqdXN0aWZ5OiBzYW5rZXlKdXN0aWZ5XG59O1xuY29uc3QgZHJhdyA9IGZ1bmN0aW9uKHRleHQsIGlkLCBfdmVyc2lvbiwgZGlhZ09iaikge1xuICBjb25zdCB7IHNlY3VyaXR5TGV2ZWwsIHNhbmtleTogY29uZiB9ID0gZ2V0Q29uZmlnKCk7XG4gIGNvbnN0IGRlZmF1bHRTYW5rZXlDb25maWcgPSBkZWZhdWx0Q29uZmlnLnNhbmtleTtcbiAgbGV0IHNhbmRib3hFbGVtZW50O1xuICBpZiAoc2VjdXJpdHlMZXZlbCA9PT0gXCJzYW5kYm94XCIpIHtcbiAgICBzYW5kYm94RWxlbWVudCA9IHNlbGVjdChcIiNpXCIgKyBpZCk7XG4gIH1cbiAgY29uc3Qgcm9vdCA9IHNlY3VyaXR5TGV2ZWwgPT09IFwic2FuZGJveFwiID8gc2VsZWN0KHNhbmRib3hFbGVtZW50Lm5vZGVzKClbMF0uY29udGVudERvY3VtZW50LmJvZHkpIDogc2VsZWN0KFwiYm9keVwiKTtcbiAgY29uc3Qgc3ZnID0gc2VjdXJpdHlMZXZlbCA9PT0gXCJzYW5kYm94XCIgPyByb290LnNlbGVjdChgW2lkPVwiJHtpZH1cIl1gKSA6IHNlbGVjdChgW2lkPVwiJHtpZH1cIl1gKTtcbiAgY29uc3Qgd2lkdGggPSAoY29uZiA9PSBudWxsID8gdm9pZCAwIDogY29uZi53aWR0aCkgPz8gZGVmYXVsdFNhbmtleUNvbmZpZy53aWR0aDtcbiAgY29uc3QgaGVpZ2h0ID0gKGNvbmYgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmYuaGVpZ2h0KSA/PyBkZWZhdWx0U2Fua2V5Q29uZmlnLndpZHRoO1xuICBjb25zdCB1c2VNYXhXaWR0aCA9IChjb25mID09IG51bGwgPyB2b2lkIDAgOiBjb25mLnVzZU1heFdpZHRoKSA/PyBkZWZhdWx0U2Fua2V5Q29uZmlnLnVzZU1heFdpZHRoO1xuICBjb25zdCBub2RlQWxpZ25tZW50ID0gKGNvbmYgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmYubm9kZUFsaWdubWVudCkgPz8gZGVmYXVsdFNhbmtleUNvbmZpZy5ub2RlQWxpZ25tZW50O1xuICBjb25zdCBwcmVmaXggPSAoY29uZiA9PSBudWxsID8gdm9pZCAwIDogY29uZi5wcmVmaXgpID8/IGRlZmF1bHRTYW5rZXlDb25maWcucHJlZml4O1xuICBjb25zdCBzdWZmaXggPSAoY29uZiA9PSBudWxsID8gdm9pZCAwIDogY29uZi5zdWZmaXgpID8/IGRlZmF1bHRTYW5rZXlDb25maWcuc3VmZml4O1xuICBjb25zdCBzaG93VmFsdWVzID0gKGNvbmYgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmYuc2hvd1ZhbHVlcykgPz8gZGVmYXVsdFNhbmtleUNvbmZpZy5zaG93VmFsdWVzO1xuICBjb25zdCBncmFwaCA9IGRpYWdPYmouZGIuZ2V0R3JhcGgoKTtcbiAgY29uc3Qgbm9kZUFsaWduID0gYWxpZ25tZW50c01hcFtub2RlQWxpZ25tZW50XTtcbiAgY29uc3Qgbm9kZVdpZHRoID0gMTA7XG4gIGNvbnN0IHNhbmtleSQxID0gc2Fua2V5KCkubm9kZUlkKChkKSA9PiBkLmlkKS5ub2RlV2lkdGgobm9kZVdpZHRoKS5ub2RlUGFkZGluZygxMCArIChzaG93VmFsdWVzID8gMTUgOiAwKSkubm9kZUFsaWduKG5vZGVBbGlnbikuZXh0ZW50KFtcbiAgICBbMCwgMF0sXG4gICAgW3dpZHRoLCBoZWlnaHRdXG4gIF0pO1xuICBzYW5rZXkkMShncmFwaCk7XG4gIGNvbnN0IGNvbG9yU2NoZW1lID0gc2NhbGVPcmRpbmFsKHNjaGVtZVRhYmxlYXUxMCk7XG4gIHN2Zy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGVzXCIpLnNlbGVjdEFsbChcIi5ub2RlXCIpLmRhdGEoZ3JhcGgubm9kZXMpLmpvaW4oXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGVcIikuYXR0cihcImlkXCIsIChkKSA9PiAoZC51aWQgPSBVaWQubmV4dChcIm5vZGUtXCIpKS5pZCkuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54MCArIFwiLFwiICsgZC55MCArIFwiKVwiO1xuICB9KS5hdHRyKFwieFwiLCAoZCkgPT4gZC54MCkuYXR0cihcInlcIiwgKGQpID0+IGQueTApLmFwcGVuZChcInJlY3RcIikuYXR0cihcImhlaWdodFwiLCAoZCkgPT4ge1xuICAgIHJldHVybiBkLnkxIC0gZC55MDtcbiAgfSkuYXR0cihcIndpZHRoXCIsIChkKSA9PiBkLngxIC0gZC54MCkuYXR0cihcImZpbGxcIiwgKGQpID0+IGNvbG9yU2NoZW1lKGQuaWQpKTtcbiAgY29uc3QgZ2V0VGV4dCA9ICh7IGlkOiBpZDIsIHZhbHVlIH0pID0+IHtcbiAgICBpZiAoIXNob3dWYWx1ZXMpIHtcbiAgICAgIHJldHVybiBpZDI7XG4gICAgfVxuICAgIHJldHVybiBgJHtpZDJ9XG4ke3ByZWZpeH0ke01hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwfSR7c3VmZml4fWA7XG4gIH07XG4gIHN2Zy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGUtbGFiZWxzXCIpLmF0dHIoXCJmb250LWZhbWlseVwiLCBcInNhbnMtc2VyaWZcIikuYXR0cihcImZvbnQtc2l6ZVwiLCAxNCkuc2VsZWN0QWxsKFwidGV4dFwiKS5kYXRhKGdyYXBoLm5vZGVzKS5qb2luKFwidGV4dFwiKS5hdHRyKFwieFwiLCAoZCkgPT4gZC54MCA8IHdpZHRoIC8gMiA/IGQueDEgKyA2IDogZC54MCAtIDYpLmF0dHIoXCJ5XCIsIChkKSA9PiAoZC55MSArIGQueTApIC8gMikuYXR0cihcImR5XCIsIGAke3Nob3dWYWx1ZXMgPyBcIjBcIiA6IFwiMC4zNVwifWVtYCkuYXR0cihcInRleHQtYW5jaG9yXCIsIChkKSA9PiBkLngwIDwgd2lkdGggLyAyID8gXCJzdGFydFwiIDogXCJlbmRcIikudGV4dChnZXRUZXh0KTtcbiAgY29uc3QgbGluayA9IHN2Zy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImxpbmtzXCIpLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKS5hdHRyKFwic3Ryb2tlLW9wYWNpdHlcIiwgMC41KS5zZWxlY3RBbGwoXCIubGlua1wiKS5kYXRhKGdyYXBoLmxpbmtzKS5qb2luKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJsaW5rXCIpLnN0eWxlKFwibWl4LWJsZW5kLW1vZGVcIiwgXCJtdWx0aXBseVwiKTtcbiAgY29uc3QgbGlua0NvbG9yID0gKGNvbmYgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmYubGlua0NvbG9yKSB8fCBcImdyYWRpZW50XCI7XG4gIGlmIChsaW5rQ29sb3IgPT09IFwiZ3JhZGllbnRcIikge1xuICAgIGNvbnN0IGdyYWRpZW50ID0gbGluay5hcHBlbmQoXCJsaW5lYXJHcmFkaWVudFwiKS5hdHRyKFwiaWRcIiwgKGQpID0+IChkLnVpZCA9IFVpZC5uZXh0KFwibGluZWFyR3JhZGllbnQtXCIpKS5pZCkuYXR0cihcImdyYWRpZW50VW5pdHNcIiwgXCJ1c2VyU3BhY2VPblVzZVwiKS5hdHRyKFwieDFcIiwgKGQpID0+IGQuc291cmNlLngxKS5hdHRyKFwieDJcIiwgKGQpID0+IGQudGFyZ2V0LngwKTtcbiAgICBncmFkaWVudC5hcHBlbmQoXCJzdG9wXCIpLmF0dHIoXCJvZmZzZXRcIiwgXCIwJVwiKS5hdHRyKFwic3RvcC1jb2xvclwiLCAoZCkgPT4gY29sb3JTY2hlbWUoZC5zb3VyY2UuaWQpKTtcbiAgICBncmFkaWVudC5hcHBlbmQoXCJzdG9wXCIpLmF0dHIoXCJvZmZzZXRcIiwgXCIxMDAlXCIpLmF0dHIoXCJzdG9wLWNvbG9yXCIsIChkKSA9PiBjb2xvclNjaGVtZShkLnRhcmdldC5pZCkpO1xuICB9XG4gIGxldCBjb2xvcmluZztcbiAgc3dpdGNoIChsaW5rQ29sb3IpIHtcbiAgICBjYXNlIFwiZ3JhZGllbnRcIjpcbiAgICAgIGNvbG9yaW5nID0gKGQpID0+IGQudWlkO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInNvdXJjZVwiOlxuICAgICAgY29sb3JpbmcgPSAoZCkgPT4gY29sb3JTY2hlbWUoZC5zb3VyY2UuaWQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInRhcmdldFwiOlxuICAgICAgY29sb3JpbmcgPSAoZCkgPT4gY29sb3JTY2hlbWUoZC50YXJnZXQuaWQpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbG9yaW5nID0gbGlua0NvbG9yO1xuICB9XG4gIGxpbmsuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBzYW5rZXlMaW5rSG9yaXpvbnRhbCgpKS5hdHRyKFwic3Ryb2tlXCIsIGNvbG9yaW5nKS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIChkKSA9PiBNYXRoLm1heCgxLCBkLndpZHRoKSk7XG4gIHNldHVwR3JhcGhWaWV3Ym94KHZvaWQgMCwgc3ZnLCAwLCB1c2VNYXhXaWR0aCk7XG59O1xuY29uc3QgcmVuZGVyZXIgPSB7XG4gIGRyYXdcbn07XG5jb25zdCBwcmVwYXJlVGV4dEZvclBhcnNpbmcgPSAodGV4dCkgPT4ge1xuICBjb25zdCB0ZXh0VG9QYXJzZSA9IHRleHQucmVwbGFjZUFsbCgvXlteXFxTXFxuXFxyXSt8W15cXFNcXG5cXHJdKyQvZywgXCJcIikucmVwbGFjZUFsbCgvKFtcXG5cXHJdKSsvZywgXCJcXG5cIikudHJpbSgpO1xuICByZXR1cm4gdGV4dFRvUGFyc2U7XG59O1xuY29uc3Qgb3JpZ2luYWxQYXJzZSA9IHBhcnNlciQxLnBhcnNlLmJpbmQocGFyc2VyJDEpO1xucGFyc2VyJDEucGFyc2UgPSAodGV4dCkgPT4gb3JpZ2luYWxQYXJzZShwcmVwYXJlVGV4dEZvclBhcnNpbmcodGV4dCkpO1xuY29uc3QgZGlhZ3JhbSA9IHtcbiAgcGFyc2VyOiBwYXJzZXIkMSxcbiAgZGIsXG4gIHJlbmRlcmVyXG59O1xuZXhwb3J0IHtcbiAgZGlhZ3JhbVxufTtcbiJdLCJuYW1lcyI6WyJjb25zdGFudCIsIngiLCJwb2ludFgiLCJ5IiwicG9pbnRZIiwiY2xlYXIkMSIsImNvbW1vbiIsImdldENvbmZpZyIsImdldEFjY1RpdGxlIiwic2V0QWNjVGl0bGUiLCJnZXRBY2NEZXNjcmlwdGlvbiIsInNldEFjY0Rlc2NyaXB0aW9uIiwiZ2V0RGlhZ3JhbVRpdGxlIiwic2V0RGlhZ3JhbVRpdGxlIiwic2Fua2V5TGVmdCIsInNhbmtleVJpZ2h0Iiwic2Fua2V5Q2VudGVyIiwic2Fua2V5SnVzdGlmeSIsImRlZmF1bHRDb25maWciLCJzZWxlY3QiLCJzYW5rZXkiLCJzY2FsZU9yZGluYWwiLCJzY2hlbWVUYWJsZWF1MTAiLCJzZXR1cEdyYXBoVmlld2JveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZSxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFO0FBQzdDLEVBQUUsSUFBSSxHQUFHLENBQUM7QUFDVixFQUFFLElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtBQUM3QixJQUFJLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFF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c0IsQ0FBQyxDQUFDO0FBQ2pELE9BQU87QUFDUCxNQUFNLEtBQUssTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksV0FBVyxFQUFFO0FBQ3pELFFBQVEsV0FBVyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ2pELE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsRUFBRSxTQUFTLFlBQVksQ0FBQyxLQUFLLEVBQUU7QUFDL0IsSUFBSSxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7QUFDaEMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLElBQUksS0FBSyxFQUFFO0FBQ3RELFFBQVEsV0FBVyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ2pELFFBQVEsV0FBVyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ2pELE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFLFNBQVMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDckMsSUFBSSxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakUsSUFBSSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7QUFDNUQsTUFBTSxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUUsTUFBTTtBQUNqQyxNQUFNLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLEtBQUs7QUFDTCxJQUFJLEtBQUssTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRTtBQUM1RCxNQUFNLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRSxNQUFNO0FB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RSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEYsR0FBRztBQUNILEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEQsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwSCxHQUFHO0FBQ0gsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQ3JDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuRCxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHO0FBQ3JCLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHO0FBQ3JCLFFBQVEsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3JCLFFBQVEsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3JCLFFBQVEsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3JCLFFBQVEsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3JCLFFBQVEsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUN0QztBQUNBO0FBQ0EsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4RDtBQUNBO0FBQ0EsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFO0FBQzNCLE1BQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUM5RCxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVMsSUFBSSxFQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtBQUNqRSxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDOUQsS0FBSztBQUNMO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUN2QixVQUFVLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUN2QixVQUFVLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3ZDLFVBQVUsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDdkMsVUFBVSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDaEMsVUFBVSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDaEMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0YsVUFBVSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUc7QUFDdkIsVUFBVSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUN4QjtBQUNBO0FBQ0EsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sRUFBRTtBQUN2QyxRQUFRLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDbEUsT0FBTztBQUNQO0FBQ0EsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxPQUFPLElBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNqSixLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUU7QUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUN4QyxJQUFJLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUM3QixRQUFRLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDN0IsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUU7QUFDbkIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUU7QUFDbkIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUc7QUFDcEIsUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNyQztBQUNBO0FBQ0EsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4RDtBQUNBO0FBQ0EsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFO0FBQzNCLE1BQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDcEMsS0FBSztBQUNMO0FBQ0E7QUFDQSxTQUFTLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFO0FBQ3JGLE1BQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDcEMsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsT0FBTztBQUNuQjtBQUNBO0FBQ0EsSUFBSSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BDO0FBQ0E7QUFDQSxJQUFJLElBQUksRUFBRSxHQUFHLFVBQVUsRUFBRTtBQUN6QixNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsRUFBRSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3RLLEtBQUs7QUFDTDtBQUNBO0FBQ0EsU0FBUyxJQUFJLEVBQUUsR0FBRyxPQUFPLEVBQUU7QUFDM0IsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMs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RSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FB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QUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7QUFDM0IsUUFBUSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN6RCxRQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLFFBQVEsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkUsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzlCLFVBQVUsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUM1QyxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNsQyxRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUc7QUFDdEIsVUFBVSxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO0FBQzVDLFVBQVUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztBQUN0QyxVQUFVLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVk7QUFDaEQsVUFBVSxXQUFXLEVBQUUsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMs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ckgsRUFBRSxNQUFNLEdBQUcsR0FBRyxhQUFhLEtBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUdBLFlBQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqRyxFQUFFLE1BQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxLQUFLLG1CQUFtQixDQUFDLEtBQUssQ0FBQztBQUNsRixFQUFFLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLG1CQUFtQixDQUFDLEtBQUssQ0FBQztBQUNwRixFQUFFLE1BQU0sV0FBVyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxLQUFLLG1CQUFtQixDQUFDLFdBQVcsQ0FBQztBQUNwRyxFQUFFLE1BQU0sYUFBYSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxLQUFLLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztBQUMxRyxFQUFFLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztBQUNyRixFQUFFLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztBQUNyRixFQUFFLE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxLQUFLLG1C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QyxJQUFJLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL1csRUFBRSxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFn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
