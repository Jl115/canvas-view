'use strict';

var graph = require('./graph-55c4c685.js');
var index = require('./index-d3f4d11e.js');
var index3862675e = require('./index-3862675e-ae592491.js');
var channel = require('./channel-b7ca254f.js');

function selectAll(selector) {
  return typeof selector === "string"
      ? new index.Selection([document.querySelectorAll(selector)], [document.documentElement])
      : new index.Selection([index.array(selector)], index.root);
}

/*
 * Returns true if the specified node in the graph is a subgraph node. A
 * subgraph node is one that contains other nodes.
 */
function isSubgraph(g, v) {
  return !!g.children(v).length;
}

function edgeToId(e) {
  return escapeId(e.v) + ':' + escapeId(e.w) + ':' + escapeId(e.name);
}

var ID_DELIM = /:/g;
function escapeId(str) {
  return str ? String(str).replace(ID_DELIM, '\\:') : '';
}

function applyStyle(dom, styleFn) {
  if (styleFn) {
    dom.attr('style', styleFn);
  }
}

function applyClass(dom, classFn, otherClasses) {
  if (classFn) {
    dom.attr('class', classFn).attr('class', otherClasses + ' ' + dom.attr('class'));
  }
}

function applyTransition(selection, g) {
  var graph = g.graph();

  if (index.isPlainObject(graph)) {
    var transition = graph.transition;
    if (index.isFunction(transition)) {
      return transition(selection);
    }
  }

  return selection;
}

function addHtmlLabel(root, node) {
  var fo = root.append('foreignObject').attr('width', '100000');

  var div = fo.append('xhtml:div');
  div.attr('xmlns', 'http://www.w3.org/1999/xhtml');

  var label = node.label;
  switch (typeof label) {
    case 'function':
      div.insert(label);
      break;
    case 'object':
      // Currently we assume this is a DOM object.
      div.insert(function () {
        return label;
      });
      break;
    default:
      div.html(label);
  }

  applyStyle(div, node.labelStyle);
  div.style('display', 'inline-block');
  // Fix for firefox
  div.style('white-space', 'nowrap');

  var client = div.node().getBoundingClientRect();
  fo.attr('width', client.width).attr('height', client.height);

  return fo;
}

const conf = {};
const setConf = function(cnf) {
  const keys = Object.keys(cnf);
  for (const key of keys) {
    conf[key] = cnf[key];
  }
};
const addVertices = async function(vert, g, svgId, root, doc, diagObj) {
  const svg = root.select(`[id="${svgId}"]`);
  const keys = Object.keys(vert);
  for (const id of keys) {
    const vertex = vert[id];
    let classStr = "default";
    if (vertex.classes.length > 0) {
      classStr = vertex.classes.join(" ");
    }
    classStr = classStr + " flowchart-label";
    const styles = index.getStylesFromArray(vertex.styles);
    let vertexText = vertex.text !== void 0 ? vertex.text : vertex.id;
    let vertexNode;
    index.log$1.info("vertex", vertex, vertex.labelType);
    if (vertex.labelType === "markdown") {
      index.log$1.info("vertex", vertex, vertex.labelType);
    } else {
      if (index.evaluate(index.getConfig().flowchart.htmlLabels)) {
        const node = {
          label: vertexText
        };
        vertexNode = addHtmlLabel(svg, node).node();
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
      case "doublecircle":
        _shape = "doublecircle";
        break;
      default:
        _shape = "rect";
    }
    const labelText = await index.renderKatex(vertexText, index.getConfig());
    g.setNode(vertex.id, {
      labelStyle: styles.labelStyle,
      shape: _shape,
      labelText,
      labelType: vertex.labelType,
      rx: radius,
      ry: radius,
      class: classStr,
      style: styles.style,
      id: vertex.id,
      link: vertex.link,
      linkTarget: vertex.linkTarget,
      tooltip: diagObj.db.getTooltip(vertex.id) || "",
      domId: diagObj.db.lookUpDomId(vertex.id),
      haveCallback: vertex.haveCallback,
      width: vertex.type === "group" ? 500 : void 0,
      dir: vertex.dir,
      type: vertex.type,
      props: vertex.props,
      padding: index.getConfig().flowchart.padding
    });
    index.log$1.info("setNode", {
      labelStyle: styles.labelStyle,
      labelType: vertex.labelType,
      shape: _shape,
      labelText,
      rx: radius,
      ry: radius,
      class: classStr,
      style: styles.style,
      id: vertex.id,
      domId: diagObj.db.lookUpDomId(vertex.id),
      width: vertex.type === "group" ? 500 : void 0,
      type: vertex.type,
      dir: vertex.dir,
      props: vertex.props,
      padding: index.getConfig().flowchart.padding
    });
  }
};
const addEdges = async function(edges, g, diagObj) {
  index.log$1.info("abc78 edges = ", edges);
  let cnt = 0;
  let linkIdCnt = {};
  let defaultStyle;
  let defaultLabelStyle;
  if (edges.defaultStyle !== void 0) {
    const defaultStyles = index.getStylesFromArray(edges.defaultStyle);
    defaultStyle = defaultStyles.style;
    defaultLabelStyle = defaultStyles.labelStyle;
  }
  for (const edge of edges) {
    cnt++;
    const linkIdBase = "L-" + edge.start + "-" + edge.end;
    if (linkIdCnt[linkIdBase] === void 0) {
      linkIdCnt[linkIdBase] = 0;
      index.log$1.info("abc78 new entry", linkIdBase, linkIdCnt[linkIdBase]);
    } else {
      linkIdCnt[linkIdBase]++;
      index.log$1.info("abc78 new entry", linkIdBase, linkIdCnt[linkIdBase]);
    }
    let linkId = linkIdBase + "-" + linkIdCnt[linkIdBase];
    index.log$1.info("abc78 new link id to be used is", linkIdBase, linkId, linkIdCnt[linkIdBase]);
    const linkNameStart = "LS-" + edge.start;
    const linkNameEnd = "LE-" + edge.end;
    const edgeData = { style: "", labelStyle: "" };
    edgeData.minlen = edge.length || 1;
    if (edge.type === "arrow_open") {
      edgeData.arrowhead = "none";
    } else {
      edgeData.arrowhead = "normal";
    }
    edgeData.arrowTypeStart = "arrow_open";
    edgeData.arrowTypeEnd = "arrow_open";
    switch (edge.type) {
      case "double_arrow_cross":
        edgeData.arrowTypeStart = "arrow_cross";
      case "arrow_cross":
        edgeData.arrowTypeEnd = "arrow_cross";
        break;
      case "double_arrow_point":
        edgeData.arrowTypeStart = "arrow_point";
      case "arrow_point":
        edgeData.arrowTypeEnd = "arrow_point";
        break;
      case "double_arrow_circle":
        edgeData.arrowTypeStart = "arrow_circle";
      case "arrow_circle":
        edgeData.arrowTypeEnd = "arrow_circle";
        break;
    }
    let style = "";
    let labelStyle = "";
    switch (edge.stroke) {
      case "normal":
        style = "fill:none;";
        if (defaultStyle !== void 0) {
          style = defaultStyle;
        }
        if (defaultLabelStyle !== void 0) {
          labelStyle = defaultLabelStyle;
        }
        edgeData.thickness = "normal";
        edgeData.pattern = "solid";
        break;
      case "dotted":
        edgeData.thickness = "normal";
        edgeData.pattern = "dotted";
        edgeData.style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
        break;
      case "thick":
        edgeData.thickness = "thick";
        edgeData.pattern = "solid";
        edgeData.style = "stroke-width: 3.5px;fill:none;";
        break;
      case "invisible":
        edgeData.thickness = "invisible";
        edgeData.pattern = "solid";
        edgeData.style = "stroke-width: 0;fill:none;";
        break;
    }
    if (edge.style !== void 0) {
      const styles = index.getStylesFromArray(edge.style);
      style = styles.style;
      labelStyle = styles.labelStyle;
    }
    edgeData.style = edgeData.style += style;
    edgeData.labelStyle = edgeData.labelStyle += labelStyle;
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
    }
    edgeData.labelType = edge.labelType;
    edgeData.label = await index.renderKatex(edge.text.replace(index.common$1.lineBreakRegex, "\n"), index.getConfig());
    if (edge.style === void 0) {
      edgeData.style = edgeData.style || "stroke: #333; stroke-width: 1.5px;fill:none;";
    }
    edgeData.labelStyle = edgeData.labelStyle.replace("color:", "fill:");
    edgeData.id = linkId;
    edgeData.classes = "flowchart-link " + linkNameStart + " " + linkNameEnd;
    g.setEdge(edge.start, edge.end, edgeData, cnt);
  }
};
const getClasses = function(text, diagObj) {
  return diagObj.db.getClasses();
};
const draw = async function(text, id, _version, diagObj) {
  index.log$1.info("Drawing flowchart");
  let dir = diagObj.db.getDirection();
  if (dir === void 0) {
    dir = "TD";
  }
  const { securityLevel, flowchart: conf2 } = index.getConfig();
  const nodeSpacing = conf2.nodeSpacing || 50;
  const rankSpacing = conf2.rankSpacing || 50;
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = index.select("#i" + id);
  }
  const root = securityLevel === "sandbox" ? index.select(sandboxElement.nodes()[0].contentDocument.body) : index.select("body");
  const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
  const g = new graph.Graph({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: dir,
    nodesep: nodeSpacing,
    ranksep: rankSpacing,
    marginx: 0,
    marginy: 0
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  let subG;
  const subGraphs = diagObj.db.getSubGraphs();
  index.log$1.info("Subgraphs - ", subGraphs);
  for (let i2 = subGraphs.length - 1; i2 >= 0; i2--) {
    subG = subGraphs[i2];
    index.log$1.info("Subgraph - ", subG);
    diagObj.db.addVertex(
      subG.id,
      { text: subG.title, type: subG.labelType },
      "group",
      void 0,
      subG.classes,
      subG.dir
    );
  }
  const vert = diagObj.db.getVertices();
  const edges = diagObj.db.getEdges();
  index.log$1.info("Edges", edges);
  let i = 0;
  for (i = subGraphs.length - 1; i >= 0; i--) {
    subG = subGraphs[i];
    selectAll("cluster").append("text");
    for (let j = 0; j < subG.nodes.length; j++) {
      index.log$1.info("Setting up subgraphs", subG.nodes[j], subG.id);
      g.setParent(subG.nodes[j], subG.id);
    }
  }
  await addVertices(vert, g, id, root, doc, diagObj);
  await addEdges(edges, g);
  const svg = root.select(`[id="${id}"]`);
  const element = root.select("#" + id + " g");
  await index3862675e.render(element, g, ["point", "circle", "cross"], "flowchart", id);
  index.utils.insertTitle(svg, "flowchartTitleText", conf2.titleTopMargin, diagObj.db.getDiagramTitle());
  index.setupGraphViewbox$1(g, svg, conf2.diagramPadding, conf2.useMaxWidth);
  diagObj.db.indexNodes("subGraph" + i);
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
  const keys = Object.keys(vert);
  keys.forEach(function(key) {
    const vertex = vert[key];
    if (vertex.link) {
      const node = index.select("#" + id + ' [id="' + key + '"]');
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
const flowRendererV2 = {
  setConf,
  addVertices,
  addEdges,
  getClasses,
  draw
};
const fade = (color, opacity) => {
  const channel$1 = channel.channel;
  const r = channel$1(color, "r");
  const g = channel$1(color, "g");
  const b = channel$1(color, "b");
  return index.rgba(r, g, b, opacity);
};
const getStyles = (options) => `.label {
    font-family: ${options.fontFamily};
    color: ${options.nodeTextColor || options.textColor};
  }
  .cluster-label text {
    fill: ${options.titleColor};
  }
  .cluster-label span,p {
    color: ${options.titleColor};
  }

  .label text,span,p {
    fill: ${options.nodeTextColor || options.textColor};
    color: ${options.nodeTextColor || options.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${options.mainBkg};
    stroke: ${options.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${options.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${options.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${options.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${options.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${options.edgeLabelBackground};
      fill: ${options.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${fade(options.edgeLabelBackground, 0.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${options.clusterBkg};
    stroke: ${options.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${options.titleColor};
  }

  .cluster span,p {
    color: ${options.titleColor};
  }
  /* .cluster div {
    color: ${options.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${options.fontFamily};
    font-size: 12px;
    background: ${options.tertiaryColor};
    border: 1px solid ${options.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${options.textColor};
  }
`;
const flowStyles = getStyles;

exports.addHtmlLabel = addHtmlLabel;
exports.applyClass = applyClass;
exports.applyStyle = applyStyle;
exports.applyTransition = applyTransition;
exports.edgeToId = edgeToId;
exports.flowRendererV2 = flowRendererV2;
exports.flowStyles = flowStyles;
exports.isSubgraph = isSubgraph;
exports.selectAll = selectAll;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzLWMxMDY3NGMxLThkMGEwODNjLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3RBbGwuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlLWpzL3V0aWwuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlLWpzL2xhYmVsL2FkZC1odG1sLWxhYmVsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21lcm1haWQvZGlzdC9zdHlsZXMtYzEwNjc0YzEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFycmF5IGZyb20gXCIuL2FycmF5LmpzXCI7XG5pbXBvcnQge1NlbGVjdGlvbiwgcm9vdH0gZnJvbSBcIi4vc2VsZWN0aW9uL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCJcbiAgICAgID8gbmV3IFNlbGVjdGlvbihbZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcildLCBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XSlcbiAgICAgIDogbmV3IFNlbGVjdGlvbihbYXJyYXkoc2VsZWN0b3IpXSwgcm9vdCk7XG59XG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaC1lcyc7XG5cbi8vIFB1YmxpYyB1dGlsaXR5IGZ1bmN0aW9uc1xuZXhwb3J0IHsgaXNTdWJncmFwaCwgZWRnZVRvSWQsIGFwcGx5U3R5bGUsIGFwcGx5Q2xhc3MsIGFwcGx5VHJhbnNpdGlvbiB9O1xuXG4vKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBzcGVjaWZpZWQgbm9kZSBpbiB0aGUgZ3JhcGggaXMgYSBzdWJncmFwaCBub2RlLiBBXG4gKiBzdWJncmFwaCBub2RlIGlzIG9uZSB0aGF0IGNvbnRhaW5zIG90aGVyIG5vZGVzLlxuICovXG5mdW5jdGlvbiBpc1N1YmdyYXBoKGcsIHYpIHtcbiAgcmV0dXJuICEhZy5jaGlsZHJlbih2KS5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGVkZ2VUb0lkKGUpIHtcbiAgcmV0dXJuIGVzY2FwZUlkKGUudikgKyAnOicgKyBlc2NhcGVJZChlLncpICsgJzonICsgZXNjYXBlSWQoZS5uYW1lKTtcbn1cblxudmFyIElEX0RFTElNID0gLzovZztcbmZ1bmN0aW9uIGVzY2FwZUlkKHN0cikge1xuICByZXR1cm4gc3RyID8gU3RyaW5nKHN0cikucmVwbGFjZShJRF9ERUxJTSwgJ1xcXFw6JykgOiAnJztcbn1cblxuZnVuY3Rpb24gYXBwbHlTdHlsZShkb20sIHN0eWxlRm4pIHtcbiAgaWYgKHN0eWxlRm4pIHtcbiAgICBkb20uYXR0cignc3R5bGUnLCBzdHlsZUZuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseUNsYXNzKGRvbSwgY2xhc3NGbiwgb3RoZXJDbGFzc2VzKSB7XG4gIGlmIChjbGFzc0ZuKSB7XG4gICAgZG9tLmF0dHIoJ2NsYXNzJywgY2xhc3NGbikuYXR0cignY2xhc3MnLCBvdGhlckNsYXNzZXMgKyAnICcgKyBkb20uYXR0cignY2xhc3MnKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUcmFuc2l0aW9uKHNlbGVjdGlvbiwgZykge1xuICB2YXIgZ3JhcGggPSBnLmdyYXBoKCk7XG5cbiAgaWYgKF8uaXNQbGFpbk9iamVjdChncmFwaCkpIHtcbiAgICB2YXIgdHJhbnNpdGlvbiA9IGdyYXBoLnRyYW5zaXRpb247XG4gICAgaWYgKF8uaXNGdW5jdGlvbih0cmFuc2l0aW9uKSkge1xuICAgICAgcmV0dXJuIHRyYW5zaXRpb24oc2VsZWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2VsZWN0aW9uO1xufVxuIiwiaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi91dGlsLmpzJztcblxuZXhwb3J0IHsgYWRkSHRtbExhYmVsIH07XG5cbmZ1bmN0aW9uIGFkZEh0bWxMYWJlbChyb290LCBub2RlKSB7XG4gIHZhciBmbyA9IHJvb3QuYXBwZW5kKCdmb3JlaWduT2JqZWN0JykuYXR0cignd2lkdGgnLCAnMTAwMDAwJyk7XG5cbiAgdmFyIGRpdiA9IGZvLmFwcGVuZCgneGh0bWw6ZGl2Jyk7XG4gIGRpdi5hdHRyKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJyk7XG5cbiAgdmFyIGxhYmVsID0gbm9kZS5sYWJlbDtcbiAgc3dpdGNoICh0eXBlb2YgbGFiZWwpIHtcbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICBkaXYuaW5zZXJ0KGxhYmVsKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAvLyBDdXJyZW50bHkgd2UgYXNzdW1lIHRoaXMgaXMgYSBET00gb2JqZWN0LlxuICAgICAgZGl2Lmluc2VydChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGRpdi5odG1sKGxhYmVsKTtcbiAgfVxuXG4gIHV0aWwuYXBwbHlTdHlsZShkaXYsIG5vZGUubGFiZWxTdHlsZSk7XG4gIGRpdi5zdHlsZSgnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcbiAgLy8gRml4IGZvciBmaXJlZm94XG4gIGRpdi5zdHlsZSgnd2hpdGUtc3BhY2UnLCAnbm93cmFwJyk7XG5cbiAgdmFyIGNsaWVudCA9IGRpdi5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGZvLmF0dHIoJ3dpZHRoJywgY2xpZW50LndpZHRoKS5hdHRyKCdoZWlnaHQnLCBjbGllbnQuaGVpZ2h0KTtcblxuICByZXR1cm4gZm87XG59XG4iLCJpbXBvcnQgKiBhcyBncmFwaGxpYiBmcm9tIFwiZGFncmUtZDMtZXMvc3JjL2dyYXBobGliL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBjdXJ2ZUxpbmVhciwgc2VsZWN0LCBzZWxlY3RBbGwgfSBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IGsgYXMgZ2V0U3R5bGVzRnJvbUFycmF5LCBsIGFzIGxvZywgbSBhcyBldmFsdWF0ZSwgYyBhcyBnZXRDb25maWcsIGUgYXMgY29tbW9uLCByIGFzIHJlbmRlckthdGV4LCBuIGFzIGludGVycG9sYXRlVG9DdXJ2ZSwgdSBhcyB1dGlscywgbyBhcyBzZXR1cEdyYXBoVmlld2JveCB9IGZyb20gXCIuL21lcm1haWQtYjU4NjBiNTQuanNcIjtcbmltcG9ydCB7IHIgYXMgcmVuZGVyIH0gZnJvbSBcIi4vaW5kZXgtMzg2MjY3NWUuanNcIjtcbmltcG9ydCB7IGFkZEh0bWxMYWJlbCB9IGZyb20gXCJkYWdyZS1kMy1lcy9zcmMvZGFncmUtanMvbGFiZWwvYWRkLWh0bWwtbGFiZWwuanNcIjtcbmltcG9ydCAqIGFzIGtocm9tYSBmcm9tIFwia2hyb21hXCI7XG5jb25zdCBjb25mID0ge307XG5jb25zdCBzZXRDb25mID0gZnVuY3Rpb24oY25mKSB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjbmYpO1xuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgY29uZltrZXldID0gY25mW2tleV07XG4gIH1cbn07XG5jb25zdCBhZGRWZXJ0aWNlcyA9IGFzeW5jIGZ1bmN0aW9uKHZlcnQsIGcsIHN2Z0lkLCByb290LCBkb2MsIGRpYWdPYmopIHtcbiAgY29uc3Qgc3ZnID0gcm9vdC5zZWxlY3QoYFtpZD1cIiR7c3ZnSWR9XCJdYCk7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2ZXJ0KTtcbiAgZm9yIChjb25zdCBpZCBvZiBrZXlzKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdmVydFtpZF07XG4gICAgbGV0IGNsYXNzU3RyID0gXCJkZWZhdWx0XCI7XG4gICAgaWYgKHZlcnRleC5jbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNsYXNzU3RyID0gdmVydGV4LmNsYXNzZXMuam9pbihcIiBcIik7XG4gICAgfVxuICAgIGNsYXNzU3RyID0gY2xhc3NTdHIgKyBcIiBmbG93Y2hhcnQtbGFiZWxcIjtcbiAgICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXNGcm9tQXJyYXkodmVydGV4LnN0eWxlcyk7XG4gICAgbGV0IHZlcnRleFRleHQgPSB2ZXJ0ZXgudGV4dCAhPT0gdm9pZCAwID8gdmVydGV4LnRleHQgOiB2ZXJ0ZXguaWQ7XG4gICAgbGV0IHZlcnRleE5vZGU7XG4gICAgbG9nLmluZm8oXCJ2ZXJ0ZXhcIiwgdmVydGV4LCB2ZXJ0ZXgubGFiZWxUeXBlKTtcbiAgICBpZiAodmVydGV4LmxhYmVsVHlwZSA9PT0gXCJtYXJrZG93blwiKSB7XG4gICAgICBsb2cuaW5mbyhcInZlcnRleFwiLCB2ZXJ0ZXgsIHZlcnRleC5sYWJlbFR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZXZhbHVhdGUoZ2V0Q29uZmlnKCkuZmxvd2NoYXJ0Lmh0bWxMYWJlbHMpKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB7XG4gICAgICAgICAgbGFiZWw6IHZlcnRleFRleHRcbiAgICAgICAgfTtcbiAgICAgICAgdmVydGV4Tm9kZSA9IGFkZEh0bWxMYWJlbChzdmcsIG5vZGUpLm5vZGUoKTtcbiAgICAgICAgdmVydGV4Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHZlcnRleE5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3ZnTGFiZWwgPSBkb2MuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBzdmdMYWJlbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBzdHlsZXMubGFiZWxTdHlsZS5yZXBsYWNlKFwiY29sb3I6XCIsIFwiZmlsbDpcIikpO1xuICAgICAgICBjb25zdCByb3dzID0gdmVydGV4VGV4dC5zcGxpdChjb21tb24ubGluZUJyZWFrUmVnZXgpO1xuICAgICAgICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgICAgICAgY29uc3QgdHNwYW4gPSBkb2MuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJ0c3BhblwiKTtcbiAgICAgICAgICB0c3Bhbi5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiLCBcInhtbDpzcGFjZVwiLCBcInByZXNlcnZlXCIpO1xuICAgICAgICAgIHRzcGFuLnNldEF0dHJpYnV0ZShcImR5XCIsIFwiMWVtXCIpO1xuICAgICAgICAgIHRzcGFuLnNldEF0dHJpYnV0ZShcInhcIiwgXCIxXCIpO1xuICAgICAgICAgIHRzcGFuLnRleHRDb250ZW50ID0gcm93O1xuICAgICAgICAgIHN2Z0xhYmVsLmFwcGVuZENoaWxkKHRzcGFuKTtcbiAgICAgICAgfVxuICAgICAgICB2ZXJ0ZXhOb2RlID0gc3ZnTGFiZWw7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCByYWRpdXMgPSAwO1xuICAgIGxldCBfc2hhcGUgPSBcIlwiO1xuICAgIHN3aXRjaCAodmVydGV4LnR5cGUpIHtcbiAgICAgIGNhc2UgXCJyb3VuZFwiOlxuICAgICAgICByYWRpdXMgPSA1O1xuICAgICAgICBfc2hhcGUgPSBcInJlY3RcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3F1YXJlXCI6XG4gICAgICAgIF9zaGFwZSA9IFwicmVjdFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkaWFtb25kXCI6XG4gICAgICAgIF9zaGFwZSA9IFwicXVlc3Rpb25cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaGV4YWdvblwiOlxuICAgICAgICBfc2hhcGUgPSBcImhleGFnb25cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwib2RkXCI6XG4gICAgICAgIF9zaGFwZSA9IFwicmVjdF9sZWZ0X2ludl9hcnJvd1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsZWFuX3JpZ2h0XCI6XG4gICAgICAgIF9zaGFwZSA9IFwibGVhbl9yaWdodFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsZWFuX2xlZnRcIjpcbiAgICAgICAgX3NoYXBlID0gXCJsZWFuX2xlZnRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwidHJhcGV6b2lkXCI6XG4gICAgICAgIF9zaGFwZSA9IFwidHJhcGV6b2lkXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImludl90cmFwZXpvaWRcIjpcbiAgICAgICAgX3NoYXBlID0gXCJpbnZfdHJhcGV6b2lkXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm9kZF9yaWdodFwiOlxuICAgICAgICBfc2hhcGUgPSBcInJlY3RfbGVmdF9pbnZfYXJyb3dcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiY2lyY2xlXCI6XG4gICAgICAgIF9zaGFwZSA9IFwiY2lyY2xlXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImVsbGlwc2VcIjpcbiAgICAgICAgX3NoYXBlID0gXCJlbGxpcHNlXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN0YWRpdW1cIjpcbiAgICAgICAgX3NoYXBlID0gXCJzdGFkaXVtXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN1YnJvdXRpbmVcIjpcbiAgICAgICAgX3NoYXBlID0gXCJzdWJyb3V0aW5lXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImN5bGluZGVyXCI6XG4gICAgICAgIF9zaGFwZSA9IFwiY3lsaW5kZXJcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZ3JvdXBcIjpcbiAgICAgICAgX3NoYXBlID0gXCJyZWN0XCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRvdWJsZWNpcmNsZVwiOlxuICAgICAgICBfc2hhcGUgPSBcImRvdWJsZWNpcmNsZVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIF9zaGFwZSA9IFwicmVjdFwiO1xuICAgIH1cbiAgICBjb25zdCBsYWJlbFRleHQgPSBhd2FpdCByZW5kZXJLYXRleCh2ZXJ0ZXhUZXh0LCBnZXRDb25maWcoKSk7XG4gICAgZy5zZXROb2RlKHZlcnRleC5pZCwge1xuICAgICAgbGFiZWxTdHlsZTogc3R5bGVzLmxhYmVsU3R5bGUsXG4gICAgICBzaGFwZTogX3NoYXBlLFxuICAgICAgbGFiZWxUZXh0LFxuICAgICAgbGFiZWxUeXBlOiB2ZXJ0ZXgubGFiZWxUeXBlLFxuICAgICAgcng6IHJhZGl1cyxcbiAgICAgIHJ5OiByYWRpdXMsXG4gICAgICBjbGFzczogY2xhc3NTdHIsXG4gICAgICBzdHlsZTogc3R5bGVzLnN0eWxlLFxuICAgICAgaWQ6IHZlcnRleC5pZCxcbiAgICAgIGxpbms6IHZlcnRleC5saW5rLFxuICAgICAgbGlua1RhcmdldDogdmVydGV4LmxpbmtUYXJnZXQsXG4gICAgICB0b29sdGlwOiBkaWFnT2JqLmRiLmdldFRvb2x0aXAodmVydGV4LmlkKSB8fCBcIlwiLFxuICAgICAgZG9tSWQ6IGRpYWdPYmouZGIubG9va1VwRG9tSWQodmVydGV4LmlkKSxcbiAgICAgIGhhdmVDYWxsYmFjazogdmVydGV4LmhhdmVDYWxsYmFjayxcbiAgICAgIHdpZHRoOiB2ZXJ0ZXgudHlwZSA9PT0gXCJncm91cFwiID8gNTAwIDogdm9pZCAwLFxuICAgICAgZGlyOiB2ZXJ0ZXguZGlyLFxuICAgICAgdHlwZTogdmVydGV4LnR5cGUsXG4gICAgICBwcm9wczogdmVydGV4LnByb3BzLFxuICAgICAgcGFkZGluZzogZ2V0Q29uZmlnKCkuZmxvd2NoYXJ0LnBhZGRpbmdcbiAgICB9KTtcbiAgICBsb2cuaW5mbyhcInNldE5vZGVcIiwge1xuICAgICAgbGFiZWxTdHlsZTogc3R5bGVzLmxhYmVsU3R5bGUsXG4gICAgICBsYWJlbFR5cGU6IHZlcnRleC5sYWJlbFR5cGUsXG4gICAgICBzaGFwZTogX3NoYXBlLFxuICAgICAgbGFiZWxUZXh0LFxuICAgICAgcng6IHJhZGl1cyxcbiAgICAgIHJ5OiByYWRpdXMsXG4gICAgICBjbGFzczogY2xhc3NTdHIsXG4gICAgICBzdHlsZTogc3R5bGVzLnN0eWxlLFxuICAgICAgaWQ6IHZlcnRleC5pZCxcbiAgICAgIGRvbUlkOiBkaWFnT2JqLmRiLmxvb2tVcERvbUlkKHZlcnRleC5pZCksXG4gICAgICB3aWR0aDogdmVydGV4LnR5cGUgPT09IFwiZ3JvdXBcIiA/IDUwMCA6IHZvaWQgMCxcbiAgICAgIHR5cGU6IHZlcnRleC50eXBlLFxuICAgICAgZGlyOiB2ZXJ0ZXguZGlyLFxuICAgICAgcHJvcHM6IHZlcnRleC5wcm9wcyxcbiAgICAgIHBhZGRpbmc6IGdldENvbmZpZygpLmZsb3djaGFydC5wYWRkaW5nXG4gICAgfSk7XG4gIH1cbn07XG5jb25zdCBhZGRFZGdlcyA9IGFzeW5jIGZ1bmN0aW9uKGVkZ2VzLCBnLCBkaWFnT2JqKSB7XG4gIGxvZy5pbmZvKFwiYWJjNzggZWRnZXMgPSBcIiwgZWRnZXMpO1xuICBsZXQgY250ID0gMDtcbiAgbGV0IGxpbmtJZENudCA9IHt9O1xuICBsZXQgZGVmYXVsdFN0eWxlO1xuICBsZXQgZGVmYXVsdExhYmVsU3R5bGU7XG4gIGlmIChlZGdlcy5kZWZhdWx0U3R5bGUgIT09IHZvaWQgMCkge1xuICAgIGNvbnN0IGRlZmF1bHRTdHlsZXMgPSBnZXRTdHlsZXNGcm9tQXJyYXkoZWRnZXMuZGVmYXVsdFN0eWxlKTtcbiAgICBkZWZhdWx0U3R5bGUgPSBkZWZhdWx0U3R5bGVzLnN0eWxlO1xuICAgIGRlZmF1bHRMYWJlbFN0eWxlID0gZGVmYXVsdFN0eWxlcy5sYWJlbFN0eWxlO1xuICB9XG4gIGZvciAoY29uc3QgZWRnZSBvZiBlZGdlcykge1xuICAgIGNudCsrO1xuICAgIGNvbnN0IGxpbmtJZEJhc2UgPSBcIkwtXCIgKyBlZGdlLnN0YXJ0ICsgXCItXCIgKyBlZGdlLmVuZDtcbiAgICBpZiAobGlua0lkQ250W2xpbmtJZEJhc2VdID09PSB2b2lkIDApIHtcbiAgICAgIGxpbmtJZENudFtsaW5rSWRCYXNlXSA9IDA7XG4gICAgICBsb2cuaW5mbyhcImFiYzc4IG5ldyBlbnRyeVwiLCBsaW5rSWRCYXNlLCBsaW5rSWRDbnRbbGlua0lkQmFzZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5rSWRDbnRbbGlua0lkQmFzZV0rKztcbiAgICAgIGxvZy5pbmZvKFwiYWJjNzggbmV3IGVudHJ5XCIsIGxpbmtJZEJhc2UsIGxpbmtJZENudFtsaW5rSWRCYXNlXSk7XG4gICAgfVxuICAgIGxldCBsaW5rSWQgPSBsaW5rSWRCYXNlICsgXCItXCIgKyBsaW5rSWRDbnRbbGlua0lkQmFzZV07XG4gICAgbG9nLmluZm8oXCJhYmM3OCBuZXcgbGluayBpZCB0byBiZSB1c2VkIGlzXCIsIGxpbmtJZEJhc2UsIGxpbmtJZCwgbGlua0lkQ250W2xpbmtJZEJhc2VdKTtcbiAgICBjb25zdCBsaW5rTmFtZVN0YXJ0ID0gXCJMUy1cIiArIGVkZ2Uuc3RhcnQ7XG4gICAgY29uc3QgbGlua05hbWVFbmQgPSBcIkxFLVwiICsgZWRnZS5lbmQ7XG4gICAgY29uc3QgZWRnZURhdGEgPSB7IHN0eWxlOiBcIlwiLCBsYWJlbFN0eWxlOiBcIlwiIH07XG4gICAgZWRnZURhdGEubWlubGVuID0gZWRnZS5sZW5ndGggfHwgMTtcbiAgICBpZiAoZWRnZS50eXBlID09PSBcImFycm93X29wZW5cIikge1xuICAgICAgZWRnZURhdGEuYXJyb3doZWFkID0gXCJub25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVkZ2VEYXRhLmFycm93aGVhZCA9IFwibm9ybWFsXCI7XG4gICAgfVxuICAgIGVkZ2VEYXRhLmFycm93VHlwZVN0YXJ0ID0gXCJhcnJvd19vcGVuXCI7XG4gICAgZWRnZURhdGEuYXJyb3dUeXBlRW5kID0gXCJhcnJvd19vcGVuXCI7XG4gICAgc3dpdGNoIChlZGdlLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJkb3VibGVfYXJyb3dfY3Jvc3NcIjpcbiAgICAgICAgZWRnZURhdGEuYXJyb3dUeXBlU3RhcnQgPSBcImFycm93X2Nyb3NzXCI7XG4gICAgICBjYXNlIFwiYXJyb3dfY3Jvc3NcIjpcbiAgICAgICAgZWRnZURhdGEuYXJyb3dUeXBlRW5kID0gXCJhcnJvd19jcm9zc1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkb3VibGVfYXJyb3dfcG9pbnRcIjpcbiAgICAgICAgZWRnZURhdGEuYXJyb3dUeXBlU3RhcnQgPSBcImFycm93X3BvaW50XCI7XG4gICAgICBjYXNlIFwiYXJyb3dfcG9pbnRcIjpcbiAgICAgICAgZWRnZURhdGEuYXJyb3dUeXBlRW5kID0gXCJhcnJvd19wb2ludFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkb3VibGVfYXJyb3dfY2lyY2xlXCI6XG4gICAgICAgIGVkZ2VEYXRhLmFycm93VHlwZVN0YXJ0ID0gXCJhcnJvd19jaXJjbGVcIjtcbiAgICAgIGNhc2UgXCJhcnJvd19jaXJjbGVcIjpcbiAgICAgICAgZWRnZURhdGEuYXJyb3dUeXBlRW5kID0gXCJhcnJvd19jaXJjbGVcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGxldCBzdHlsZSA9IFwiXCI7XG4gICAgbGV0IGxhYmVsU3R5bGUgPSBcIlwiO1xuICAgIHN3aXRjaCAoZWRnZS5zdHJva2UpIHtcbiAgICAgIGNhc2UgXCJub3JtYWxcIjpcbiAgICAgICAgc3R5bGUgPSBcImZpbGw6bm9uZTtcIjtcbiAgICAgICAgaWYgKGRlZmF1bHRTdHlsZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgc3R5bGUgPSBkZWZhdWx0U3R5bGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZmF1bHRMYWJlbFN0eWxlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBsYWJlbFN0eWxlID0gZGVmYXVsdExhYmVsU3R5bGU7XG4gICAgICAgIH1cbiAgICAgICAgZWRnZURhdGEudGhpY2tuZXNzID0gXCJub3JtYWxcIjtcbiAgICAgICAgZWRnZURhdGEucGF0dGVybiA9IFwic29saWRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZG90dGVkXCI6XG4gICAgICAgIGVkZ2VEYXRhLnRoaWNrbmVzcyA9IFwibm9ybWFsXCI7XG4gICAgICAgIGVkZ2VEYXRhLnBhdHRlcm4gPSBcImRvdHRlZFwiO1xuICAgICAgICBlZGdlRGF0YS5zdHlsZSA9IFwiZmlsbDpub25lO3N0cm9rZS13aWR0aDoycHg7c3Ryb2tlLWRhc2hhcnJheTozO1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ0aGlja1wiOlxuICAgICAgICBlZGdlRGF0YS50aGlja25lc3MgPSBcInRoaWNrXCI7XG4gICAgICAgIGVkZ2VEYXRhLnBhdHRlcm4gPSBcInNvbGlkXCI7XG4gICAgICAgIGVkZ2VEYXRhLnN0eWxlID0gXCJzdHJva2Utd2lkdGg6IDMuNXB4O2ZpbGw6bm9uZTtcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaW52aXNpYmxlXCI6XG4gICAgICAgIGVkZ2VEYXRhLnRoaWNrbmVzcyA9IFwiaW52aXNpYmxlXCI7XG4gICAgICAgIGVkZ2VEYXRhLnBhdHRlcm4gPSBcInNvbGlkXCI7XG4gICAgICAgIGVkZ2VEYXRhLnN0eWxlID0gXCJzdHJva2Utd2lkdGg6IDA7ZmlsbDpub25lO1wiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKGVkZ2Uuc3R5bGUgIT09IHZvaWQgMCkge1xuICAgICAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzRnJvbUFycmF5KGVkZ2Uuc3R5bGUpO1xuICAgICAgc3R5bGUgPSBzdHlsZXMuc3R5bGU7XG4gICAgICBsYWJlbFN0eWxlID0gc3R5bGVzLmxhYmVsU3R5bGU7XG4gICAgfVxuICAgIGVkZ2VEYXRhLnN0eWxlID0gZWRnZURhdGEuc3R5bGUgKz0gc3R5bGU7XG4gICAgZWRnZURhdGEubGFiZWxTdHlsZSA9IGVkZ2VEYXRhLmxhYmVsU3R5bGUgKz0gbGFiZWxTdHlsZTtcbiAgICBpZiAoZWRnZS5pbnRlcnBvbGF0ZSAhPT0gdm9pZCAwKSB7XG4gICAgICBlZGdlRGF0YS5jdXJ2ZSA9IGludGVycG9sYXRlVG9DdXJ2ZShlZGdlLmludGVycG9sYXRlLCBjdXJ2ZUxpbmVhcik7XG4gICAgfSBlbHNlIGlmIChlZGdlcy5kZWZhdWx0SW50ZXJwb2xhdGUgIT09IHZvaWQgMCkge1xuICAgICAgZWRnZURhdGEuY3VydmUgPSBpbnRlcnBvbGF0ZVRvQ3VydmUoZWRnZXMuZGVmYXVsdEludGVycG9sYXRlLCBjdXJ2ZUxpbmVhcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVkZ2VEYXRhLmN1cnZlID0gaW50ZXJwb2xhdGVUb0N1cnZlKGNvbmYuY3VydmUsIGN1cnZlTGluZWFyKTtcbiAgICB9XG4gICAgaWYgKGVkZ2UudGV4dCA9PT0gdm9pZCAwKSB7XG4gICAgICBpZiAoZWRnZS5zdHlsZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGVkZ2VEYXRhLmFycm93aGVhZFN0eWxlID0gXCJmaWxsOiAjMzMzXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVkZ2VEYXRhLmFycm93aGVhZFN0eWxlID0gXCJmaWxsOiAjMzMzXCI7XG4gICAgICBlZGdlRGF0YS5sYWJlbHBvcyA9IFwiY1wiO1xuICAgIH1cbiAgICBlZGdlRGF0YS5sYWJlbFR5cGUgPSBlZGdlLmxhYmVsVHlwZTtcbiAgICBlZGdlRGF0YS5sYWJlbCA9IGF3YWl0IHJlbmRlckthdGV4KGVkZ2UudGV4dC5yZXBsYWNlKGNvbW1vbi5saW5lQnJlYWtSZWdleCwgXCJcXG5cIiksIGdldENvbmZpZygpKTtcbiAgICBpZiAoZWRnZS5zdHlsZSA9PT0gdm9pZCAwKSB7XG4gICAgICBlZGdlRGF0YS5zdHlsZSA9IGVkZ2VEYXRhLnN0eWxlIHx8IFwic3Ryb2tlOiAjMzMzOyBzdHJva2Utd2lkdGg6IDEuNXB4O2ZpbGw6bm9uZTtcIjtcbiAgICB9XG4gICAgZWRnZURhdGEubGFiZWxTdHlsZSA9IGVkZ2VEYXRhLmxhYmVsU3R5bGUucmVwbGFjZShcImNvbG9yOlwiLCBcImZpbGw6XCIpO1xuICAgIGVkZ2VEYXRhLmlkID0gbGlua0lkO1xuICAgIGVkZ2VEYXRhLmNsYXNzZXMgPSBcImZsb3djaGFydC1saW5rIFwiICsgbGlua05hbWVTdGFydCArIFwiIFwiICsgbGlua05hbWVFbmQ7XG4gICAgZy5zZXRFZGdlKGVkZ2Uuc3RhcnQsIGVkZ2UuZW5kLCBlZGdlRGF0YSwgY250KTtcbiAgfVxufTtcbmNvbnN0IGdldENsYXNzZXMgPSBmdW5jdGlvbih0ZXh0LCBkaWFnT2JqKSB7XG4gIHJldHVybiBkaWFnT2JqLmRiLmdldENsYXNzZXMoKTtcbn07XG5jb25zdCBkcmF3ID0gYXN5bmMgZnVuY3Rpb24odGV4dCwgaWQsIF92ZXJzaW9uLCBkaWFnT2JqKSB7XG4gIGxvZy5pbmZvKFwiRHJhd2luZyBmbG93Y2hhcnRcIik7XG4gIGxldCBkaXIgPSBkaWFnT2JqLmRiLmdldERpcmVjdGlvbigpO1xuICBpZiAoZGlyID09PSB2b2lkIDApIHtcbiAgICBkaXIgPSBcIlREXCI7XG4gIH1cbiAgY29uc3QgeyBzZWN1cml0eUxldmVsLCBmbG93Y2hhcnQ6IGNvbmYyIH0gPSBnZXRDb25maWcoKTtcbiAgY29uc3Qgbm9kZVNwYWNpbmcgPSBjb25mMi5ub2RlU3BhY2luZyB8fCA1MDtcbiAgY29uc3QgcmFua1NwYWNpbmcgPSBjb25mMi5yYW5rU3BhY2luZyB8fCA1MDtcbiAgbGV0IHNhbmRib3hFbGVtZW50O1xuICBpZiAoc2VjdXJpdHlMZXZlbCA9PT0gXCJzYW5kYm94XCIpIHtcbiAgICBzYW5kYm94RWxlbWVudCA9IHNlbGVjdChcIiNpXCIgKyBpZCk7XG4gIH1cbiAgY29uc3Qgcm9vdCA9IHNlY3VyaXR5TGV2ZWwgPT09IFwic2FuZGJveFwiID8gc2VsZWN0KHNhbmRib3hFbGVtZW50Lm5vZGVzKClbMF0uY29udGVudERvY3VtZW50LmJvZHkpIDogc2VsZWN0KFwiYm9keVwiKTtcbiAgY29uc3QgZG9jID0gc2VjdXJpdHlMZXZlbCA9PT0gXCJzYW5kYm94XCIgPyBzYW5kYm94RWxlbWVudC5ub2RlcygpWzBdLmNvbnRlbnREb2N1bWVudCA6IGRvY3VtZW50O1xuICBjb25zdCBnID0gbmV3IGdyYXBobGliLkdyYXBoKHtcbiAgICBtdWx0aWdyYXBoOiB0cnVlLFxuICAgIGNvbXBvdW5kOiB0cnVlXG4gIH0pLnNldEdyYXBoKHtcbiAgICByYW5rZGlyOiBkaXIsXG4gICAgbm9kZXNlcDogbm9kZVNwYWNpbmcsXG4gICAgcmFua3NlcDogcmFua1NwYWNpbmcsXG4gICAgbWFyZ2lueDogMCxcbiAgICBtYXJnaW55OiAwXG4gIH0pLnNldERlZmF1bHRFZGdlTGFiZWwoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9KTtcbiAgbGV0IHN1Ykc7XG4gIGNvbnN0IHN1YkdyYXBocyA9IGRpYWdPYmouZGIuZ2V0U3ViR3JhcGhzKCk7XG4gIGxvZy5pbmZvKFwiU3ViZ3JhcGhzIC0gXCIsIHN1YkdyYXBocyk7XG4gIGZvciAobGV0IGkyID0gc3ViR3JhcGhzLmxlbmd0aCAtIDE7IGkyID49IDA7IGkyLS0pIHtcbiAgICBzdWJHID0gc3ViR3JhcGhzW2kyXTtcbiAgICBsb2cuaW5mbyhcIlN1YmdyYXBoIC0gXCIsIHN1YkcpO1xuICAgIGRpYWdPYmouZGIuYWRkVmVydGV4KFxuICAgICAgc3ViRy5pZCxcbiAgICAgIHsgdGV4dDogc3ViRy50aXRsZSwgdHlwZTogc3ViRy5sYWJlbFR5cGUgfSxcbiAgICAgIFwiZ3JvdXBcIixcbiAgICAgIHZvaWQgMCxcbiAgICAgIHN1YkcuY2xhc3NlcyxcbiAgICAgIHN1YkcuZGlyXG4gICAgKTtcbiAgfVxuICBjb25zdCB2ZXJ0ID0gZGlhZ09iai5kYi5nZXRWZXJ0aWNlcygpO1xuICBjb25zdCBlZGdlcyA9IGRpYWdPYmouZGIuZ2V0RWRnZXMoKTtcbiAgbG9nLmluZm8oXCJFZGdlc1wiLCBlZGdlcyk7XG4gIGxldCBpID0gMDtcbiAgZm9yIChpID0gc3ViR3JhcGhzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgc3ViRyA9IHN1YkdyYXBoc1tpXTtcbiAgICBzZWxlY3RBbGwoXCJjbHVzdGVyXCIpLmFwcGVuZChcInRleHRcIik7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdWJHLm5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsb2cuaW5mbyhcIlNldHRpbmcgdXAgc3ViZ3JhcGhzXCIsIHN1Ykcubm9kZXNbal0sIHN1YkcuaWQpO1xuICAgICAgZy5zZXRQYXJlbnQoc3ViRy5ub2Rlc1tqXSwgc3ViRy5pZCk7XG4gICAgfVxuICB9XG4gIGF3YWl0IGFkZFZlcnRpY2VzKHZlcnQsIGcsIGlkLCByb290LCBkb2MsIGRpYWdPYmopO1xuICBhd2FpdCBhZGRFZGdlcyhlZGdlcywgZyk7XG4gIGNvbnN0IHN2ZyA9IHJvb3Quc2VsZWN0KGBbaWQ9XCIke2lkfVwiXWApO1xuICBjb25zdCBlbGVtZW50ID0gcm9vdC5zZWxlY3QoXCIjXCIgKyBpZCArIFwiIGdcIik7XG4gIGF3YWl0IHJlbmRlcihlbGVtZW50LCBnLCBbXCJwb2ludFwiLCBcImNpcmNsZVwiLCBcImNyb3NzXCJdLCBcImZsb3djaGFydFwiLCBpZCk7XG4gIHV0aWxzLmluc2VydFRpdGxlKHN2ZywgXCJmbG93Y2hhcnRUaXRsZVRleHRcIiwgY29uZjIudGl0bGVUb3BNYXJnaW4sIGRpYWdPYmouZGIuZ2V0RGlhZ3JhbVRpdGxlKCkpO1xuICBzZXR1cEdyYXBoVmlld2JveChnLCBzdmcsIGNvbmYyLmRpYWdyYW1QYWRkaW5nLCBjb25mMi51c2VNYXhXaWR0aCk7XG4gIGRpYWdPYmouZGIuaW5kZXhOb2RlcyhcInN1YkdyYXBoXCIgKyBpKTtcbiAgaWYgKCFjb25mMi5odG1sTGFiZWxzKSB7XG4gICAgY29uc3QgbGFiZWxzID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZD1cIicgKyBpZCArICdcIl0gLmVkZ2VMYWJlbCAubGFiZWwnKTtcbiAgICBmb3IgKGNvbnN0IGxhYmVsIG9mIGxhYmVscykge1xuICAgICAgY29uc3QgZGltID0gbGFiZWwuZ2V0QkJveCgpO1xuICAgICAgY29uc3QgcmVjdCA9IGRvYy5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInJlY3RcIik7XG4gICAgICByZWN0LnNldEF0dHJpYnV0ZShcInJ4XCIsIDApO1xuICAgICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJyeVwiLCAwKTtcbiAgICAgIHJlY3Quc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgZGltLndpZHRoKTtcbiAgICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGRpbS5oZWlnaHQpO1xuICAgICAgbGFiZWwuaW5zZXJ0QmVmb3JlKHJlY3QsIGxhYmVsLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmVydCk7XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB2ZXJ0W2tleV07XG4gICAgaWYgKHZlcnRleC5saW5rKSB7XG4gICAgICBjb25zdCBub2RlID0gc2VsZWN0KFwiI1wiICsgaWQgKyAnIFtpZD1cIicgKyBrZXkgKyAnXCJdJyk7XG4gICAgICBpZiAobm9kZSkge1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiYVwiKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiY2xhc3NcIiwgdmVydGV4LmNsYXNzZXMuam9pbihcIiBcIikpO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJocmVmXCIsIHZlcnRleC5saW5rKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicmVsXCIsIFwibm9vcGVuZXJcIik7XG4gICAgICAgIGlmIChzZWN1cml0eUxldmVsID09PSBcInNhbmRib3hcIikge1xuICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInRhcmdldFwiLCBcIl90b3BcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodmVydGV4LmxpbmtUYXJnZXQpIHtcbiAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJ0YXJnZXRcIiwgdmVydGV4LmxpbmtUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxpbmtOb2RlID0gbm9kZS5pbnNlcnQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGxpbms7XG4gICAgICAgIH0sIFwiOmZpcnN0LWNoaWxkXCIpO1xuICAgICAgICBjb25zdCBzaGFwZSA9IG5vZGUuc2VsZWN0KFwiLmxhYmVsLWNvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKHNoYXBlKSB7XG4gICAgICAgICAgbGlua05vZGUuYXBwZW5kKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNoYXBlLm5vZGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYWJlbCA9IG5vZGUuc2VsZWN0KFwiLmxhYmVsXCIpO1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICBsaW5rTm9kZS5hcHBlbmQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbGFiZWwubm9kZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5jb25zdCBmbG93UmVuZGVyZXJWMiA9IHtcbiAgc2V0Q29uZixcbiAgYWRkVmVydGljZXMsXG4gIGFkZEVkZ2VzLFxuICBnZXRDbGFzc2VzLFxuICBkcmF3XG59O1xuY29uc3QgZmFkZSA9IChjb2xvciwgb3BhY2l0eSkgPT4ge1xuICBjb25zdCBjaGFubmVsID0ga2hyb21hLmNoYW5uZWw7XG4gIGNvbnN0IHIgPSBjaGFubmVsKGNvbG9yLCBcInJcIik7XG4gIGNvbnN0IGcgPSBjaGFubmVsKGNvbG9yLCBcImdcIik7XG4gIGNvbnN0IGIgPSBjaGFubmVsKGNvbG9yLCBcImJcIik7XG4gIHJldHVybiBraHJvbWEucmdiYShyLCBnLCBiLCBvcGFjaXR5KTtcbn07XG5jb25zdCBnZXRTdHlsZXMgPSAob3B0aW9ucykgPT4gYC5sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6ICR7b3B0aW9ucy5mb250RmFtaWx5fTtcbiAgICBjb2xvcjogJHtvcHRpb25zLm5vZGVUZXh0Q29sb3IgfHwgb3B0aW9ucy50ZXh0Q29sb3J9O1xuICB9XG4gIC5jbHVzdGVyLWxhYmVsIHRleHQge1xuICAgIGZpbGw6ICR7b3B0aW9ucy50aXRsZUNvbG9yfTtcbiAgfVxuICAuY2x1c3Rlci1sYWJlbCBzcGFuLHAge1xuICAgIGNvbG9yOiAke29wdGlvbnMudGl0bGVDb2xvcn07XG4gIH1cblxuICAubGFiZWwgdGV4dCxzcGFuLHAge1xuICAgIGZpbGw6ICR7b3B0aW9ucy5ub2RlVGV4dENvbG9yIHx8IG9wdGlvbnMudGV4dENvbG9yfTtcbiAgICBjb2xvcjogJHtvcHRpb25zLm5vZGVUZXh0Q29sb3IgfHwgb3B0aW9ucy50ZXh0Q29sb3J9O1xuICB9XG5cbiAgLm5vZGUgcmVjdCxcbiAgLm5vZGUgY2lyY2xlLFxuICAubm9kZSBlbGxpcHNlLFxuICAubm9kZSBwb2x5Z29uLFxuICAubm9kZSBwYXRoIHtcbiAgICBmaWxsOiAke29wdGlvbnMubWFpbkJrZ307XG4gICAgc3Ryb2tlOiAke29wdGlvbnMubm9kZUJvcmRlcn07XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gIH1cbiAgLmZsb3djaGFydC1sYWJlbCB0ZXh0IHtcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICB9XG4gIC8vIC5mbG93Y2hhcnQtbGFiZWwgLnRleHQtb3V0ZXItdHNwYW4ge1xuICAvLyAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gIC8vIH1cbiAgLy8gLmZsb3djaGFydC1sYWJlbCAudGV4dC1pbm5lci10c3BhbiB7XG4gIC8vICAgdGV4dC1hbmNob3I6IHN0YXJ0O1xuICAvLyB9XG5cbiAgLm5vZGUgLmthdGV4IHBhdGgge1xuICAgIGZpbGw6ICMwMDA7XG4gICAgc3Ryb2tlOiAjMDAwO1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICB9XG5cbiAgLm5vZGUgLmxhYmVsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm5vZGUuY2xpY2thYmxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuYXJyb3doZWFkUGF0aCB7XG4gICAgZmlsbDogJHtvcHRpb25zLmFycm93aGVhZENvbG9yfTtcbiAgfVxuXG4gIC5lZGdlUGF0aCAucGF0aCB7XG4gICAgc3Ryb2tlOiAke29wdGlvbnMubGluZUNvbG9yfTtcbiAgICBzdHJva2Utd2lkdGg6IDIuMHB4O1xuICB9XG5cbiAgLmZsb3djaGFydC1saW5rIHtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy5saW5lQ29sb3J9O1xuICAgIGZpbGw6IG5vbmU7XG4gIH1cblxuICAuZWRnZUxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke29wdGlvbnMuZWRnZUxhYmVsQmFja2dyb3VuZH07XG4gICAgcmVjdCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke29wdGlvbnMuZWRnZUxhYmVsQmFja2dyb3VuZH07XG4gICAgICBmaWxsOiAke29wdGlvbnMuZWRnZUxhYmVsQmFja2dyb3VuZH07XG4gICAgfVxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC8qIEZvciBodG1sIGxhYmVscyBvbmx5ICovXG4gIC5sYWJlbEJrZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtmYWRlKG9wdGlvbnMuZWRnZUxhYmVsQmFja2dyb3VuZCwgMC41KX07XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogXG4gIH1cblxuICAuY2x1c3RlciByZWN0IHtcbiAgICBmaWxsOiAke29wdGlvbnMuY2x1c3RlckJrZ307XG4gICAgc3Ryb2tlOiAke29wdGlvbnMuY2x1c3RlckJvcmRlcn07XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gIH1cblxuICAuY2x1c3RlciB0ZXh0IHtcbiAgICBmaWxsOiAke29wdGlvbnMudGl0bGVDb2xvcn07XG4gIH1cblxuICAuY2x1c3RlciBzcGFuLHAge1xuICAgIGNvbG9yOiAke29wdGlvbnMudGl0bGVDb2xvcn07XG4gIH1cbiAgLyogLmNsdXN0ZXIgZGl2IHtcbiAgICBjb2xvcjogJHtvcHRpb25zLnRpdGxlQ29sb3J9O1xuICB9ICovXG5cbiAgZGl2Lm1lcm1haWRUb29sdGlwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGZvbnQtZmFtaWx5OiAke29wdGlvbnMuZm9udEZhbWlseX07XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICR7b3B0aW9ucy50ZXJ0aWFyeUNvbG9yfTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke29wdGlvbnMuYm9yZGVyMn07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgfVxuXG4gIC5mbG93Y2hhcnRUaXRsZVRleHQge1xuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZpbGw6ICR7b3B0aW9ucy50ZXh0Q29sb3J9O1xuICB9XG5gO1xuY29uc3QgZmxvd1N0eWxlcyA9IGdldFN0eWxlcztcbmV4cG9ydCB7XG4gIGZsb3dTdHlsZXMgYXMgYSxcbiAgZmxvd1JlbmRlcmVyVjIgYXMgZlxufTtcbiJdLCJuYW1lcyI6WyJTZWxlY3Rpb24iLCJhcnJheSIsInJvb3QiLCJfLmlzUGxhaW5PYmplY3QiLCJfLmlzRnVuY3Rpb24iLCJ1dGlsLmFwcGx5U3R5bGUiLCJnZXRTdHlsZXNGcm9tQXJyYXkiLCJsb2ciLCJldmFsdWF0ZSIsImdldENvbmZpZyIsImNvbW1vbiIsInJlbmRlckthdGV4IiwiaW50ZXJwb2xhdGVUb0N1cnZlIiwiY3VydmVMaW5lYXIiLCJzZWxlY3QiLCJncmFwaGxpYi5HcmFwaCIsInJlbmRlciIsInV0aWxzIiwic2V0dXBHcmFwaFZpZXdib3giLCJjaGFubmVsIiwia2hyb21hLmNoYW5uZWwiLCJraHJvbWEucmdiYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdlLGtCQUFRLENBQUMsUUFBUSxFQUFFO0FBQ2xDLEVBQUUsT0FBTyxPQUFPLFFBQVEsS0FBSyxRQUFRO0FBQ3JDLFFBQVEsSUFBSUEsZUFBUyxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDeEYsUUFBUSxJQUFJQSxlQUFTLENBQUMsQ0FBQ0MsV0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUVDLFVBQUksQ0FBQyxDQUFDO0FBQy9DOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUMxQixFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ2hDLENBQUM7QUFDRDtBQUNBLFNBQVMsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUNyQixFQUFFLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDcEIsU0FBUyxRQUFRLENBQUMsR0FBRyxFQUFFO0FBQ3ZCLEVBQUUsT0FBTyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8s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
