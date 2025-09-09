'use strict';

var styles6aaf32cf = require('./styles-6aaf32cf-1eb31b96.js');
var index = require('./index-deb671d6.js');
var graph = require('./graph-4ff464ab.js');
var layout = require('./layout-d88296cc.js');
require('./main-5c8f274d.js');
var line = require('./line-891b5b35.js');
require('obsidian');
require('./array-aca279a4.js');
require('./path-29c5310d.js');

const drawStartState = (g) => g.append("circle").attr("class", "start-state").attr("r", index.getConfig().state.sizeUnit).attr("cx", index.getConfig().state.padding + index.getConfig().state.sizeUnit).attr("cy", index.getConfig().state.padding + index.getConfig().state.sizeUnit);
const drawDivider = (g) => g.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", index.getConfig().state.textHeight).attr("class", "divider").attr("x2", index.getConfig().state.textHeight * 2).attr("y1", 0).attr("y2", 0);
const drawSimpleState = (g, stateDef) => {
  const state = g.append("text").attr("x", 2 * index.getConfig().state.padding).attr("y", index.getConfig().state.textHeight + 2 * index.getConfig().state.padding).attr("font-size", index.getConfig().state.fontSize).attr("class", "state-title").text(stateDef.id);
  const classBox = state.node().getBBox();
  g.insert("rect", ":first-child").attr("x", index.getConfig().state.padding).attr("y", index.getConfig().state.padding).attr("width", classBox.width + 2 * index.getConfig().state.padding).attr("height", classBox.height + 2 * index.getConfig().state.padding).attr("rx", index.getConfig().state.radius);
  return state;
};
const drawDescrState = (g, stateDef) => {
  const addTspan = function(textEl, txt, isFirst2) {
    const tSpan = textEl.append("tspan").attr("x", 2 * index.getConfig().state.padding).text(txt);
    if (!isFirst2) {
      tSpan.attr("dy", index.getConfig().state.textHeight);
    }
  };
  const title = g.append("text").attr("x", 2 * index.getConfig().state.padding).attr("y", index.getConfig().state.textHeight + 1.3 * index.getConfig().state.padding).attr("font-size", index.getConfig().state.fontSize).attr("class", "state-title").text(stateDef.descriptions[0]);
  const titleBox = title.node().getBBox();
  const titleHeight = titleBox.height;
  const description = g.append("text").attr("x", index.getConfig().state.padding).attr(
    "y",
    titleHeight + index.getConfig().state.padding * 0.4 + index.getConfig().state.dividerMargin + index.getConfig().state.textHeight
  ).attr("class", "state-description");
  let isFirst = true;
  let isSecond = true;
  stateDef.descriptions.forEach(function(descr) {
    if (!isFirst) {
      addTspan(description, descr, isSecond);
      isSecond = false;
    }
    isFirst = false;
  });
  const descrLine = g.append("line").attr("x1", index.getConfig().state.padding).attr("y1", index.getConfig().state.padding + titleHeight + index.getConfig().state.dividerMargin / 2).attr("y2", index.getConfig().state.padding + titleHeight + index.getConfig().state.dividerMargin / 2).attr("class", "descr-divider");
  const descrBox = description.node().getBBox();
  const width = Math.max(descrBox.width, titleBox.width);
  descrLine.attr("x2", width + 3 * index.getConfig().state.padding);
  g.insert("rect", ":first-child").attr("x", index.getConfig().state.padding).attr("y", index.getConfig().state.padding).attr("width", width + 2 * index.getConfig().state.padding).attr("height", descrBox.height + titleHeight + 2 * index.getConfig().state.padding).attr("rx", index.getConfig().state.radius);
  return g;
};
const addTitleAndBox = (g, stateDef, altBkg) => {
  const pad = index.getConfig().state.padding;
  const dblPad = 2 * index.getConfig().state.padding;
  const orgBox = g.node().getBBox();
  const orgWidth = orgBox.width;
  const orgX = orgBox.x;
  const title = g.append("text").attr("x", 0).attr("y", index.getConfig().state.titleShift).attr("font-size", index.getConfig().state.fontSize).attr("class", "state-title").text(stateDef.id);
  const titleBox = title.node().getBBox();
  const titleWidth = titleBox.width + dblPad;
  let width = Math.max(titleWidth, orgWidth);
  if (width === orgWidth) {
    width = width + dblPad;
  }
  let startX;
  const graphBox = g.node().getBBox();
  if (stateDef.doc)
    ;
  startX = orgX - pad;
  if (titleWidth > orgWidth) {
    startX = (orgWidth - width) / 2 + pad;
  }
  if (Math.abs(orgX - graphBox.x) < pad && titleWidth > orgWidth) {
    startX = orgX - (titleWidth - orgWidth) / 2;
  }
  const lineY = 1 - index.getConfig().state.textHeight;
  g.insert("rect", ":first-child").attr("x", startX).attr("y", lineY).attr("class", altBkg ? "alt-composit" : "composit").attr("width", width).attr(
    "height",
    graphBox.height + index.getConfig().state.textHeight + index.getConfig().state.titleShift + 1
  ).attr("rx", "0");
  title.attr("x", startX + pad);
  if (titleWidth <= orgWidth) {
    title.attr("x", orgX + (width - dblPad) / 2 - titleWidth / 2 + pad);
  }
  g.insert("rect", ":first-child").attr("x", startX).attr(
    "y",
    index.getConfig().state.titleShift - index.getConfig().state.textHeight - index.getConfig().state.padding
  ).attr("width", width).attr("height", index.getConfig().state.textHeight * 3).attr("rx", index.getConfig().state.radius);
  g.insert("rect", ":first-child").attr("x", startX).attr(
    "y",
    index.getConfig().state.titleShift - index.getConfig().state.textHeight - index.getConfig().state.padding
  ).attr("width", width).attr("height", graphBox.height + 3 + 2 * index.getConfig().state.textHeight).attr("rx", index.getConfig().state.radius);
  return g;
};
const drawEndState = (g) => {
  g.append("circle").attr("class", "end-state-outer").attr("r", index.getConfig().state.sizeUnit + index.getConfig().state.miniPadding).attr(
    "cx",
    index.getConfig().state.padding + index.getConfig().state.sizeUnit + index.getConfig().state.miniPadding
  ).attr(
    "cy",
    index.getConfig().state.padding + index.getConfig().state.sizeUnit + index.getConfig().state.miniPadding
  );
  return g.append("circle").attr("class", "end-state-inner").attr("r", index.getConfig().state.sizeUnit).attr("cx", index.getConfig().state.padding + index.getConfig().state.sizeUnit + 2).attr("cy", index.getConfig().state.padding + index.getConfig().state.sizeUnit + 2);
};
const drawForkJoinState = (g, stateDef) => {
  let width = index.getConfig().state.forkWidth;
  let height = index.getConfig().state.forkHeight;
  if (stateDef.parentId) {
    let tmp = width;
    width = height;
    height = tmp;
  }
  return g.append("rect").style("stroke", "black").style("fill", "black").attr("width", width).attr("height", height).attr("x", index.getConfig().state.padding).attr("y", index.getConfig().state.padding);
};
const _drawLongText = (_text, x, y, g) => {
  let textHeight = 0;
  const textElem = g.append("text");
  textElem.style("text-anchor", "start");
  textElem.attr("class", "noteText");
  let text = _text.replace(/\r\n/g, "<br/>");
  text = text.replace(/\n/g, "<br/>");
  const lines = text.split(index.common$1.lineBreakRegex);
  let tHeight = 1.25 * index.getConfig().state.noteMargin;
  for (const line2 of lines) {
    const txt = line2.trim();
    if (txt.length > 0) {
      const span = textElem.append("tspan");
      span.text(txt);
      if (tHeight === 0) {
        const textBounds = span.node().getBBox();
        tHeight += textBounds.height;
      }
      textHeight += tHeight;
      span.attr("x", x + index.getConfig().state.noteMargin);
      span.attr("y", y + textHeight + 1.25 * index.getConfig().state.noteMargin);
    }
  }
  return { textWidth: textElem.node().getBBox().width, textHeight };
};
const drawNote = (text, g) => {
  g.attr("class", "state-note");
  const note = g.append("rect").attr("x", 0).attr("y", index.getConfig().state.padding);
  const rectElem = g.append("g");
  const { textWidth, textHeight } = _drawLongText(text, 0, 0, rectElem);
  note.attr("height", textHeight + 2 * index.getConfig().state.noteMargin);
  note.attr("width", textWidth + index.getConfig().state.noteMargin * 2);
  return note;
};
const drawState = function(elem, stateDef) {
  const id = stateDef.id;
  const stateInfo = {
    id,
    label: stateDef.id,
    width: 0,
    height: 0
  };
  const g = elem.append("g").attr("id", id).attr("class", "stateGroup");
  if (stateDef.type === "start") {
    drawStartState(g);
  }
  if (stateDef.type === "end") {
    drawEndState(g);
  }
  if (stateDef.type === "fork" || stateDef.type === "join") {
    drawForkJoinState(g, stateDef);
  }
  if (stateDef.type === "note") {
    drawNote(stateDef.note.text, g);
  }
  if (stateDef.type === "divider") {
    drawDivider(g);
  }
  if (stateDef.type === "default" && stateDef.descriptions.length === 0) {
    drawSimpleState(g, stateDef);
  }
  if (stateDef.type === "default" && stateDef.descriptions.length > 0) {
    drawDescrState(g, stateDef);
  }
  const stateBox = g.node().getBBox();
  stateInfo.width = stateBox.width + 2 * index.getConfig().state.padding;
  stateInfo.height = stateBox.height + 2 * index.getConfig().state.padding;
  return stateInfo;
};
let edgeCount = 0;
const drawEdge = function(elem, path, relation) {
  const getRelationType = function(type) {
    switch (type) {
      case styles6aaf32cf.db.relationType.AGGREGATION:
        return "aggregation";
      case styles6aaf32cf.db.relationType.EXTENSION:
        return "extension";
      case styles6aaf32cf.db.relationType.COMPOSITION:
        return "composition";
      case styles6aaf32cf.db.relationType.DEPENDENCY:
        return "dependency";
    }
  };
  path.points = path.points.filter((p) => !Number.isNaN(p.y));
  const lineData = path.points;
  const lineFunction = line.line().x(function(d) {
    return d.x;
  }).y(function(d) {
    return d.y;
  }).curve(index.curveBasis);
  const svgPath = elem.append("path").attr("d", lineFunction(lineData)).attr("id", "edge" + edgeCount).attr("class", "transition");
  let url = "";
  if (index.getConfig().state.arrowMarkerAbsolute) {
    url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
    url = url.replace(/\(/g, "\\(");
    url = url.replace(/\)/g, "\\)");
  }
  svgPath.attr(
    "marker-end",
    "url(" + url + "#" + getRelationType(styles6aaf32cf.db.relationType.DEPENDENCY) + "End)"
  );
  if (relation.title !== void 0) {
    const label = elem.append("g").attr("class", "stateLabel");
    const { x, y } = index.utils.calcLabelPosition(path.points);
    const rows = index.common$1.getRows(relation.title);
    let titleHeight = 0;
    const titleRows = [];
    let maxWidth = 0;
    let minX = 0;
    for (let i = 0; i <= rows.length; i++) {
      const title = label.append("text").attr("text-anchor", "middle").text(rows[i]).attr("x", x).attr("y", y + titleHeight);
      const boundsTmp = title.node().getBBox();
      maxWidth = Math.max(maxWidth, boundsTmp.width);
      minX = Math.min(minX, boundsTmp.x);
      index.log$1.info(boundsTmp.x, x, y + titleHeight);
      if (titleHeight === 0) {
        const titleBox = title.node().getBBox();
        titleHeight = titleBox.height;
        index.log$1.info("Title height", titleHeight, y);
      }
      titleRows.push(title);
    }
    let boxHeight = titleHeight * rows.length;
    if (rows.length > 1) {
      const heightAdj = (rows.length - 1) * titleHeight * 0.5;
      titleRows.forEach((title, i) => title.attr("y", y + i * titleHeight - heightAdj));
      boxHeight = titleHeight * rows.length;
    }
    const bounds = label.node().getBBox();
    label.insert("rect", ":first-child").attr("class", "box").attr("x", x - maxWidth / 2 - index.getConfig().state.padding / 2).attr("y", y - boxHeight / 2 - index.getConfig().state.padding / 2 - 3.5).attr("width", maxWidth + index.getConfig().state.padding).attr("height", boxHeight + index.getConfig().state.padding);
    index.log$1.info(bounds);
  }
  edgeCount++;
};
let conf;
const transformationLog = {};
const setConf = function() {
};
const insertMarkers = function(elem) {
  elem.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
};
const draw = function(text, id, _version, diagObj) {
  conf = index.getConfig().state;
  const securityLevel = index.getConfig().securityLevel;
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = index.select("#i" + id);
  }
  const root = securityLevel === "sandbox" ? index.select(sandboxElement.nodes()[0].contentDocument.body) : index.select("body");
  const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
  index.log$1.debug("Rendering diagram " + text);
  const diagram2 = root.select(`[id='${id}']`);
  insertMarkers(diagram2);
  const rootDoc = diagObj.db.getRootDoc();
  renderDoc(rootDoc, diagram2, void 0, false, root, doc, diagObj);
  const padding = conf.padding;
  const bounds = diagram2.node().getBBox();
  const width = bounds.width + padding * 2;
  const height = bounds.height + padding * 2;
  const svgWidth = width * 1.75;
  index.configureSvgSize(diagram2, height, svgWidth, conf.useMaxWidth);
  diagram2.attr(
    "viewBox",
    `${bounds.x - conf.padding}  ${bounds.y - conf.padding} ` + width + " " + height
  );
};
const getLabelWidth = (text) => {
  return text ? text.length * conf.fontSizeFactor : 1;
};
const renderDoc = (doc, diagram2, parentId, altBkg, root, domDocument, diagObj) => {
  const graph$1 = new graph.Graph({
    compound: true,
    multigraph: true
  });
  let i;
  let edgeFreeDoc = true;
  for (i = 0; i < doc.length; i++) {
    if (doc[i].stmt === "relation") {
      edgeFreeDoc = false;
      break;
    }
  }
  if (parentId) {
    graph$1.setGraph({
      rankdir: "LR",
      multigraph: true,
      compound: true,
      // acyclicer: 'greedy',
      ranker: "tight-tree",
      ranksep: edgeFreeDoc ? 1 : conf.edgeLengthFactor,
      nodeSep: edgeFreeDoc ? 1 : 50,
      isMultiGraph: true
      // ranksep: 5,
      // nodesep: 1
    });
  } else {
    graph$1.setGraph({
      rankdir: "TB",
      multigraph: true,
      compound: true,
      // isCompound: true,
      // acyclicer: 'greedy',
      // ranker: 'longest-path'
      ranksep: edgeFreeDoc ? 1 : conf.edgeLengthFactor,
      nodeSep: edgeFreeDoc ? 1 : 50,
      ranker: "tight-tree",
      // ranker: 'network-simplex'
      isMultiGraph: true
    });
  }
  graph$1.setDefaultEdgeLabel(function() {
    return {};
  });
  diagObj.db.extract(doc);
  const states = diagObj.db.getStates();
  const relations = diagObj.db.getRelations();
  const keys2 = Object.keys(states);
  for (const key of keys2) {
    const stateDef = states[key];
    if (parentId) {
      stateDef.parentId = parentId;
    }
    let node;
    if (stateDef.doc) {
      let sub = diagram2.append("g").attr("id", stateDef.id).attr("class", "stateGroup");
      node = renderDoc(stateDef.doc, sub, stateDef.id, !altBkg, root, domDocument, diagObj);
      {
        sub = addTitleAndBox(sub, stateDef, altBkg);
        let boxBounds = sub.node().getBBox();
        node.width = boxBounds.width;
        node.height = boxBounds.height + conf.padding / 2;
        transformationLog[stateDef.id] = { y: conf.compositTitleSize };
      }
    } else {
      node = drawState(diagram2, stateDef);
    }
    if (stateDef.note) {
      const noteDef = {
        descriptions: [],
        id: stateDef.id + "-note",
        note: stateDef.note,
        type: "note"
      };
      const note = drawState(diagram2, noteDef);
      if (stateDef.note.position === "left of") {
        graph$1.setNode(node.id + "-note", note);
        graph$1.setNode(node.id, node);
      } else {
        graph$1.setNode(node.id, node);
        graph$1.setNode(node.id + "-note", note);
      }
      graph$1.setParent(node.id, node.id + "-group");
      graph$1.setParent(node.id + "-note", node.id + "-group");
    } else {
      graph$1.setNode(node.id, node);
    }
  }
  index.log$1.debug("Count=", graph$1.nodeCount(), graph$1);
  let cnt = 0;
  relations.forEach(function(relation) {
    cnt++;
    index.log$1.debug("Setting edge", relation);
    graph$1.setEdge(
      relation.id1,
      relation.id2,
      {
        relation,
        width: getLabelWidth(relation.title),
        height: conf.labelHeight * index.common$1.getRows(relation.title).length,
        labelpos: "c"
      },
      "id" + cnt
    );
  });
  layout.layout(graph$1);
  index.log$1.debug("Graph after layout", graph$1.nodes());
  const svgElem = diagram2.node();
  graph$1.nodes().forEach(function(v) {
    if (v !== void 0 && graph$1.node(v) !== void 0) {
      index.log$1.warn("Node " + v + ": " + JSON.stringify(graph$1.node(v)));
      root.select("#" + svgElem.id + " #" + v).attr(
        "transform",
        "translate(" + (graph$1.node(v).x - graph$1.node(v).width / 2) + "," + (graph$1.node(v).y + (transformationLog[v] ? transformationLog[v].y : 0) - graph$1.node(v).height / 2) + " )"
      );
      root.select("#" + svgElem.id + " #" + v).attr("data-x-shift", graph$1.node(v).x - graph$1.node(v).width / 2);
      const dividers = domDocument.querySelectorAll("#" + svgElem.id + " #" + v + " .divider");
      dividers.forEach((divider) => {
        const parent = divider.parentElement;
        let pWidth = 0;
        let pShift = 0;
        if (parent) {
          if (parent.parentElement) {
            pWidth = parent.parentElement.getBBox().width;
          }
          pShift = parseInt(parent.getAttribute("data-x-shift"), 10);
          if (Number.isNaN(pShift)) {
            pShift = 0;
          }
        }
        divider.setAttribute("x1", 0 - pShift + 8);
        divider.setAttribute("x2", pWidth - pShift - 8);
      });
    } else {
      index.log$1.debug("No Node " + v + ": " + JSON.stringify(graph$1.node(v)));
    }
  });
  let stateBox = svgElem.getBBox();
  graph$1.edges().forEach(function(e) {
    if (e !== void 0 && graph$1.edge(e) !== void 0) {
      index.log$1.debug("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(graph$1.edge(e)));
      drawEdge(diagram2, graph$1.edge(e), graph$1.edge(e).relation);
    }
  });
  stateBox = svgElem.getBBox();
  const stateInfo = {
    id: parentId ? parentId : "root",
    label: parentId ? parentId : "root",
    width: 0,
    height: 0
  };
  stateInfo.width = stateBox.width + 2 * conf.padding;
  stateInfo.height = stateBox.height + 2 * conf.padding;
  index.log$1.debug("Doc rendered", stateInfo, graph$1);
  return stateInfo;
};
const renderer = {
  setConf,
  draw
};
const diagram = {
  parser: styles6aaf32cf.parser$1,
  db: styles6aaf32cf.db,
  renderer,
  styles: styles6aaf32cf.styles,
  init: (cnf) => {
    if (!cnf.state) {
      cnf.state = {};
    }
    cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    styles6aaf32cf.db.clear();
  }
};

exports.diagram = diagram;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGVEaWFncmFtLTU4Nzg5OWExLTA2MWFjNGU0LmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvbWVybWFpZC9kaXN0L3N0YXRlRGlhZ3JhbS01ODc4OTlhMS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkIGFzIGRiLCBwIGFzIHBhcnNlciwgcyBhcyBzdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXMtNmFhZjMyY2YuanNcIjtcbmltcG9ydCB7IGxpbmUsIGN1cnZlQmFzaXMsIHNlbGVjdCB9IGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgbGF5b3V0IH0gZnJvbSBcImRhZ3JlLWQzLWVzL3NyYy9kYWdyZS9pbmRleC5qc1wiO1xuaW1wb3J0ICogYXMgZ3JhcGhsaWIgZnJvbSBcImRhZ3JlLWQzLWVzL3NyYy9ncmFwaGxpYi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgYyBhcyBnZXRDb25maWcsIHUgYXMgdXRpbHMsIGUgYXMgY29tbW9uLCBsIGFzIGxvZywgaSBhcyBjb25maWd1cmVTdmdTaXplIH0gZnJvbSBcIi4vbWVybWFpZC1iNTg2MGI1NC5qc1wiO1xuaW1wb3J0IFwidHMtZGVkZW50XCI7XG5pbXBvcnQgXCJkYXlqc1wiO1xuaW1wb3J0IFwiQGJyYWludHJlZS9zYW5pdGl6ZS11cmxcIjtcbmltcG9ydCBcImRvbXB1cmlmeVwiO1xuaW1wb3J0IFwia2hyb21hXCI7XG5pbXBvcnQgXCJsb2Rhc2gtZXMvbWVtb2l6ZS5qc1wiO1xuaW1wb3J0IFwibG9kYXNoLWVzL21lcmdlLmpzXCI7XG5pbXBvcnQgXCJzdHlsaXNcIjtcbmltcG9ydCBcImxvZGFzaC1lcy9pc0VtcHR5LmpzXCI7XG5jb25zdCBpZENhY2hlID0ge307XG5jb25zdCBzZXQgPSAoa2V5LCB2YWwpID0+IHtcbiAgaWRDYWNoZVtrZXldID0gdmFsO1xufTtcbmNvbnN0IGdldCA9IChrKSA9PiBpZENhY2hlW2tdO1xuY29uc3Qga2V5cyA9ICgpID0+IE9iamVjdC5rZXlzKGlkQ2FjaGUpO1xuY29uc3Qgc2l6ZSA9ICgpID0+IGtleXMoKS5sZW5ndGg7XG5jb25zdCBpZENhY2hlJDEgPSB7XG4gIGdldCxcbiAgc2V0LFxuICBrZXlzLFxuICBzaXplXG59O1xuY29uc3QgZHJhd1N0YXJ0U3RhdGUgPSAoZykgPT4gZy5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImNsYXNzXCIsIFwic3RhcnQtc3RhdGVcIikuYXR0cihcInJcIiwgZ2V0Q29uZmlnKCkuc3RhdGUuc2l6ZVVuaXQpLmF0dHIoXCJjeFwiLCBnZXRDb25maWcoKS5zdGF0ZS5wYWRkaW5nICsgZ2V0Q29uZmlnKCkuc3RhdGUuc2l6ZVVuaXQpLmF0dHIoXCJjeVwiLCBnZXRDb25maWcoKS5zdGF0ZS5wYWRkaW5nICsgZ2V0Q29uZmlnKCkuc3RhdGUuc2l6ZVVuaXQpO1xuY29uc3QgZHJhd0RpdmlkZXIgPSAoZykgPT4gZy5hcHBlbmQoXCJsaW5lXCIpLnN0eWxlKFwic3Ryb2tlXCIsIFwiZ3JleVwiKS5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCIzXCIpLmF0dHIoXCJ4MVwiLCBnZXRDb25maWcoKS5zdGF0ZS50ZXh0SGVpZ2h0KS5hdHRyKFwiY2xhc3NcIiwgXCJkaXZpZGVyXCIpLmF0dHIoXCJ4MlwiLCBnZXRDb25maWcoKS5zdGF0ZS50ZXh0SGVpZ2h0ICogMikuYXR0cihcInkxXCIsIDApLmF0dHIoXCJ5MlwiLCAwKTtcbmNvbnN0IGRyYXdTaW1wbGVTdGF0ZSA9IChnLCBzdGF0ZURlZikgPT4ge1xuICBjb25zdCBzdGF0ZSA9IGcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCAyICogZ2V0Q29uZmlnKCkuc3RhdGUucGFkZGluZykuYXR0cihcInlcIiwgZ2V0Q29uZmlnKCkuc3RhdGUudGV4dEhlaWdodCArIDIgKiBnZXRDb25maWcoKS5zdGF0ZS5wYWRkaW5nKS5hdHRyKFwiZm9udC1zaXplXCIsIGdldENvbmZpZygpLnN0YXRlLmZvbnRTaXplKS5hdHRyKFwiY2xhc3NcIiwgXCJzdGF0ZS10aXRsZVwiKS50ZXh0KHN0YXRlRGVmLmlkKTtcbiAgY29uc3QgY2xhc3NCb3ggPSBzdGF0ZS5ub2RlKCkuZ2V0QkJveCgpO1xuICBnLmluc2VydChcInJlY3RcIiwgXCI6Zmlyc3QtY2hpbGRcIikuYXR0cihcInhcIiwgZ2V0Q29uZmlnKCkuc3RhdGUucGFkZGluZykuYXR0cihcInlcIiwgZ2V0Q29uZmlnKCkuc3RhdGUucGFkZGluZykuYXR0cihcIndpZHRoXCIsIGNsYXNzQm94LndpZHRoICsgMiAqIGdldENvbmZpZygpLnN0YXRlLnBhZGRpbmcpLmF0dHIoXCJoZWlnaHRcIiwgY2xhc3NCb3guaGVpZ2h0ICsgMiAqIGdldENvbmZpZygpLnN0YXRlLnBhZGRpbmcpLmF0dHIoXCJyeFwiLCBnZXRDb25maWcoKS5zdGF0ZS5yYWRpdXMpO1xuICByZXR1cm4gc3RhdGU7XG59O1xuY29uc3QgZHJhd0Rlc2NyU3RhdGUgPSAoZywgc3RhdGVEZWYpID0+IHtcbiAgY29uc3QgYWRkVHNwYW4gPSBmdW5jdGlvbih0ZXh0RWwsIHR4dCwgaXNGaXJzdDIpIHtcbiAgICBjb25zdCB0U3BhbiA9IHRleHRFbC5hcHBlbmQoXCJ0c3BhblwiKS5hdHRyKFwieFwiLCAyICogZ2V0Q29uZmlnKCkuc3RhdGUucGFkZGluZykudGV4dCh0eHQpO1xuICAgIGlmICghaXNGaXJzdDIpIHtcbiAgICAgIHRTcGFuLmF0dHIoXCJkeVwiLCBnZXRDb25maWcoKS5zdGF0ZS50ZXh0SGVpZ2h0KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHRpdGxlID0gZy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIDIgKiBnZXRDb25maWcoKS5zdGF0ZS5wYWRkaW5nKS5hdHRyKFwieVwiLCBnZXRDb25maWcoKS5zdGF0ZS50ZXh0SGVpZ2h0ICsgMS4zICogZ2V0Q29uZmlnKCkuc3RhdGUucGFkZGluZykuYXR0cihcImZvbnQtc2l6ZVwiLCBnZXRDb25maWcoKS5zdGF0ZS5mb250U2l6ZSkuYXR0cihcImNsYXNzXCIsIFwic3RhdGUtdGl0bGVcIikudGV4dChzdGF0ZURlZi5kZXNjcmlwdGlvbnNbMF0pO1xuICBjb25zdCB0aXRsZUJveCA9IHRpdGxlLm5vZGUoKS5nZXRCQm94KCk7XG4gIGNvbnN0IHRpdGxlSGVpZ2h0ID0gdGl0bGVCb3guaGVpZ2h0O1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCBnZXRDb25maWcoKS5zdGF0ZS5wYWRkaW5nKS5hdHRyKFxuICAgIFwieVwiLFxuICAgIHRpdGxlSGVpZ2h0ICsgZ2V0Q29uZmlnKCkuc3RhdGUucGFkZGluZyAqIDAuNCArIGdldENvbmZpZygpLnN0YXRlLmRpdmlkZXJNYXJnaW4gKyBnZXRDb25maWcoKS5zdGF0ZS50ZXh0SGVpZ2h0XG4gICkuYXR0cihcImNsYXNzXCIsIFwic3RhdGUtZGVzY3JpcHRpb25cIik7XG4gIGxldCBpc0ZpcnN0ID0gdHJ1ZTtcbiAgbGV0IGlzU2Vjb25kID0gdHJ1ZTtcbiAgc3RhdGVEZWYuZGVzY3JpcHRpb25zLmZvckVhY2goZnVuY3Rpb24oZGVzY3IpIHtcbiAgICBpZiAoIWlzRmlyc3QpIHtcbiAgICAgIGFkZFRzcGFuKGRlc2NyaXB0aW9uLCBkZXNjciwgaXNTZWNvbmQpO1xuICAgICAgaXNTZWNvbmQgPSBmYWxzZTtcbiAgICB9XG4gICAgaXNGaXJzdCA9IGZhbHNlO1xuICB9KTtcbiAgY29uc3QgZGVzY3JMaW5lID0gZy5hcHBlbmQoXCJsaW5lXCIpLmF0dHIoXCJ4MVwiLCBnZXRDb25maWcoKS5zdGF0ZS5wYWRkaW5nKS5hdHRyKFwieTFcIiwgZ2V0Q29uZmlnKCkuc3RhdGUucGFkZGluZyArIHRpdGxlSGVpZ2h0ICsgZ2V0Q29uZmlnKCkuc3RhdGUuZGl2aWRlck1hcmdpbiAvIDIpLmF0dHIoXCJ5MlwiLCBnZXRDb25maWcoKS5zdGF0ZS5wYWRkaW5nICsgdGl0bGVIZWlnaHQgKyBnZXRDb25maWcoKS5zdGF0ZS5kaXZpZGVyTWFyZ2luIC8gMikuYXR0cihcImNsYXNzXCIsIFwiZGVzY3ItZGl2aWRlclwiKTtcbiAgY29uc3QgZGVzY3JCb3ggPSBkZXNjcmlwdGlvbi5ub2RlKCkuZ2V0QkJveCgpO1xuICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KGRlc2NyQm94LndpZHRoLCB0aXRsZUJveC53aWR0aCk7XG4gIGRlc2NyTGluZS5hdHRyKFwieDJcIiwgd2lkdGggKyAzICogZ2V0Q29uZmlnKCkuc3RhdGUucGFkZGluZyk7XG4gIGcuaW5zZXJ0KFwicmVjdFwiLCBcIjpmaXJzdC1jaGlsZFwiKS5hdHRyKFwieFwiLCBnZXRDb25maWcoKS5zdGF0ZS5wYWRkaW5nKS5hdHRyKFwieVwiLCBnZXRDb25maWcoKS5zdGF0ZS5wYWRkaW5nKS5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyAyICogZ2V0Q29uZmlnKCkuc3RhdGUucGFkZGluZykuYXR0cihcImhlaWdodFwiLCBkZXNjckJveC5oZWlnaHQgKyB0aXRsZUhlaWdodCArIDIgKiBnZXRDb25maWcoKS5zdGF0ZS5wYWRkaW5nKS5hdHRyKFwicnhcIiwgZ2V0Q29uZmlnKCkuc3RhdGUucmFkaXVzKTtcbiAgcmV0dXJuIGc7XG59O1xuY29uc3QgYWRkVGl0bGVBbmRCb3ggPSAoZywgc3RhdGVEZWYsIGFsdEJrZykgPT4ge1xuICBjb25zdCBwYWQgPSBnZXRDb25maWcoKS5zdGF0ZS5wYWRkaW5nO1xuICBjb25zdCBkYmxQYWQgPSAyICogZ2V0Q29uZmlnKCkuc3RhdGUucGFkZGluZztcbiAgY29uc3Qgb3JnQm94ID0gZy5ub2RlKCkuZ2V0QkJveCgpO1xuICBjb25zdCBvcmdXaWR0aCA9IG9yZ0JveC53aWR0aDtcbiAgY29uc3Qgb3JnWCA9IG9yZ0JveC54O1xuICBjb25zdCB0aXRsZSA9IGcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCAwKS5hdHRyKFwieVwiLCBnZXRDb25maWcoKS5zdGF0ZS50aXRsZVNoaWZ0KS5hdHRyKFwiZm9udC1zaXplXCIsIGdldENvbmZpZygpLnN0YXRlLmZvbnRTaXplKS5hdHRyKFwiY2xhc3NcIiwgXCJzdGF0ZS10aXRsZVwiKS50ZXh0KHN0YXRlRGVmLmlkKTtcbiAgY29uc3QgdGl0bGVCb3ggPSB0aXRsZS5ub2RlKCkuZ2V0QkJveCgpO1xuICBjb25zdCB0aXRsZVdpZHRoID0gdGl0bGVCb3gud2lkdGggKyBkYmxQYWQ7XG4gIGxldCB3aWR0aCA9IE1hdGgubWF4KHRpdGxlV2lkdGgsIG9yZ1dpZHRoKTtcbiAgaWYgKHdpZHRoID09PSBvcmdXaWR0aCkge1xuICAgIHdpZHRoID0gd2lkdGggKyBkYmxQYWQ7XG4gIH1cbiAgbGV0IHN0YXJ0WDtcbiAgY29uc3QgZ3JhcGhCb3ggPSBnLm5vZGUoKS5nZXRCQm94KCk7XG4gIGlmIChzdGF0ZURlZi5kb2MpXG4gICAgO1xuICBzdGFydFggPSBvcmdYIC0gcGFkO1xuICBpZiAodGl0bGVXaWR0aCA+IG9yZ1dpZHRoKSB7XG4gICAgc3RhcnRYID0gKG9yZ1dpZHRoIC0gd2lkdGgpIC8gMiArIHBhZDtcbiAgfVxuICBpZiAoTWF0aC5hYnMob3JnWCAtIGdyYXBoQm94LngpIDwgcGFkICYmIHRpdGxlV2lkdGggPiBvcmdXaWR0aCkge1xuICAgIHN0YXJ0WCA9IG9yZ1ggLSAodGl0bGVXaWR0aCAtIG9yZ1dpZHRoKSAvIDI7XG4gIH1cbiAgY29uc3QgbGluZVkgPSAxIC0gZ2V0Q29uZmlnKCkuc3RhdGUudGV4dEhlaWdodDtcbiAgZy5pbnNlcnQoXCJyZWN0XCIsIFwiOmZpcnN0LWNoaWxkXCIpLmF0dHIoXCJ4XCIsIHN0YXJ0WCkuYXR0cihcInlcIiwgbGluZVkpLmF0dHIoXCJjbGFzc1wiLCBhbHRCa2cgPyBcImFsdC1jb21wb3NpdFwiIDogXCJjb21wb3NpdFwiKS5hdHRyKFwid2lkdGhcIiwgd2lkdGgpLmF0dHIoXG4gICAgXCJoZWlnaHRcIixcbiAgICBncmFwaEJveC5oZWlnaHQgKyBnZXRDb25maWcoKS5zdGF0ZS50ZXh0SGVpZ2h0ICsgZ2V0Q29uZmlnKCkuc3RhdGUudGl0bGVTaGlmdCArIDFcbiAgKS5hdHRyKFwicnhcIiwgXCIwXCIpO1xuICB0aXRsZS5hdHRyKFwieFwiLCBzdGFydFggKyBwYWQpO1xuICBpZiAodGl0bGVXaWR0aCA8PSBvcmdXaWR0aCkge1xuICAgIHRpdGxlLmF0dHIoXCJ4XCIsIG9yZ1ggKyAod2lkdGggLSBkYmxQYWQpIC8gMiAtIHRpdGxlV2lkdGggLyAyICsgcGFkKTtcbiAgfVxuICBnLmluc2VydChcInJlY3RcIiwgXCI6Zmlyc3QtY2hpbGRcIikuYXR0cihcInhcIiwgc3RhcnRYKS5hdHRyKFxuICAgIFwieVwiLFxuICAgIGdldENvbmZpZygpLnN0YXRlLnRpdGxlU2hpZnQgLSBnZXRDb25maWcoKS5zdGF0ZS50ZXh0SGVpZ2h0IC0gZ2V0Q29uZmlnKCkuc3RhdGUucGFkZGluZ1xuICApLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCkuYXR0cihcImhlaWdodFwiLCBnZXRDb25maWcoKS5zdGF0ZS50ZXh0SGVpZ2h0ICogMykuYXR0cihcInJ4XCIsIGdldENvbmZpZygpLnN0YXRlLnJhZGl1cyk7XG4gIGcuaW5zZXJ0KFwicmVjdFwiLCBcIjpmaXJzdC1jaGlsZFwiKS5hdHRyKFwieFwiLCBzdGFydFgpLmF0dHIoXG4gICAgXCJ5XCIsXG4gICAgZ2V0Q29uZmlnKCkuc3RhdGUudGl0bGVTaGlmdCAtIGdldENvbmZpZygpLnN0YXRlLnRleHRIZWlnaHQgLSBnZXRDb25maWcoKS5zdGF0ZS5wYWRkaW5nXG4gICkuYXR0cihcIndpZHRoXCIsIHdpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIGdyYXBoQm94LmhlaWdodCArIDMgKyAyICogZ2V0Q29uZmlnKCkuc3RhdGUudGV4dEhlaWdodCkuYXR0cihcInJ4XCIsIGdldENvbmZpZygpLnN0YXRlLnJhZGl1cyk7XG4gIHJldHVybiBnO1xufTtcbmNvbnN0IGRyYXdFbmRTdGF0ZSA9IChnKSA9PiB7XG4gIGcuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJjbGFzc1wiLCBcImVuZC1zdGF0ZS1vdXRlclwiKS5hdHRyKFwiclwiLCBnZXRDb25maWcoKS5zdGF0ZS5zaXplVW5pdCArIGdldENvbmZpZygpLnN0YXRlLm1pbmlQYWRkaW5nKS5hdHRyKFxuICAgIFwiY3hcIixcbiAgICBnZXRDb25maWcoKS5zdGF0ZS5wYWRkaW5nICsgZ2V0Q29uZmlnKCkuc3RhdGUuc2l6ZVVuaXQgKyBnZXRDb25maWcoKS5zdGF0ZS5taW5pUGFkZGluZ1xuICApLmF0dHIoXG4gICAgXCJjeVwiLFxuICAgIGdldENvbmZpZygpLnN0YXRlLnBhZGRpbmcgKyBnZXRDb25maWcoKS5zdGF0ZS5zaXplVW5pdCArIGdldENvbmZpZygpLnN0YXRlLm1pbmlQYWRkaW5nXG4gICk7XG4gIHJldHVybiBnLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY2xhc3NcIiwgXCJlbmQtc3RhdGUtaW5uZXJcIikuYXR0cihcInJcIiwgZ2V0Q29uZmlnKCkuc3RhdGUuc2l6ZVVuaXQpLmF0dHIoXCJjeFwiLCBnZXRDb25maWcoKS5zdGF0ZS5wYWRkaW5nICsgZ2V0Q29uZmlnKCkuc3RhdGUuc2l6ZVVuaXQgKyAyKS5hdHRyKFwiY3lcIiwgZ2V0Q29uZmlnKCkuc3RhdGUucGFkZGluZyArIGdldENvbmZpZygpLnN0YXRlLnNpemVVbml0ICsgMik7XG59O1xuY29uc3QgZHJhd0ZvcmtKb2luU3RhdGUgPSAoZywgc3RhdGVEZWYpID0+IHtcbiAgbGV0IHdpZHRoID0gZ2V0Q29uZmlnKCkuc3RhdGUuZm9ya1dpZHRoO1xuICBsZXQgaGVpZ2h0ID0gZ2V0Q29uZmlnKCkuc3RhdGUuZm9ya0hlaWdodDtcbiAgaWYgKHN0YXRlRGVmLnBhcmVudElkKSB7XG4gICAgbGV0IHRtcCA9IHdpZHRoO1xuICAgIHdpZHRoID0gaGVpZ2h0O1xuICAgIGhlaWdodCA9IHRtcDtcbiAgfVxuICByZXR1cm4gZy5hcHBlbmQoXCJyZWN0XCIpLnN0eWxlKFwic3Ryb2tlXCIsIFwiYmxhY2tcIikuc3R5bGUoXCJmaWxsXCIsIFwiYmxhY2tcIikuYXR0cihcIndpZHRoXCIsIHdpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCkuYXR0cihcInhcIiwgZ2V0Q29uZmlnKCkuc3RhdGUucGFkZGluZykuYXR0cihcInlcIiwgZ2V0Q29uZmlnKCkuc3RhdGUucGFkZGluZyk7XG59O1xuY29uc3QgX2RyYXdMb25nVGV4dCA9IChfdGV4dCwgeCwgeSwgZykgPT4ge1xuICBsZXQgdGV4dEhlaWdodCA9IDA7XG4gIGNvbnN0IHRleHRFbGVtID0gZy5hcHBlbmQoXCJ0ZXh0XCIpO1xuICB0ZXh0RWxlbS5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwic3RhcnRcIik7XG4gIHRleHRFbGVtLmF0dHIoXCJjbGFzc1wiLCBcIm5vdGVUZXh0XCIpO1xuICBsZXQgdGV4dCA9IF90ZXh0LnJlcGxhY2UoL1xcclxcbi9nLCBcIjxici8+XCIpO1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXG4vZywgXCI8YnIvPlwiKTtcbiAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KGNvbW1vbi5saW5lQnJlYWtSZWdleCk7XG4gIGxldCB0SGVpZ2h0ID0gMS4yNSAqIGdldENvbmZpZygpLnN0YXRlLm5vdGVNYXJnaW47XG4gIGZvciAoY29uc3QgbGluZTIgb2YgbGluZXMpIHtcbiAgICBjb25zdCB0eHQgPSBsaW5lMi50cmltKCk7XG4gICAgaWYgKHR4dC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzcGFuID0gdGV4dEVsZW0uYXBwZW5kKFwidHNwYW5cIik7XG4gICAgICBzcGFuLnRleHQodHh0KTtcbiAgICAgIGlmICh0SGVpZ2h0ID09PSAwKSB7XG4gICAgICAgIGNvbnN0IHRleHRCb3VuZHMgPSBzcGFuLm5vZGUoKS5nZXRCQm94KCk7XG4gICAgICAgIHRIZWlnaHQgKz0gdGV4dEJvdW5kcy5oZWlnaHQ7XG4gICAgICB9XG4gICAgICB0ZXh0SGVpZ2h0ICs9IHRIZWlnaHQ7XG4gICAgICBzcGFuLmF0dHIoXCJ4XCIsIHggKyBnZXRDb25maWcoKS5zdGF0ZS5ub3RlTWFyZ2luKTtcbiAgICAgIHNwYW4uYXR0cihcInlcIiwgeSArIHRleHRIZWlnaHQgKyAxLjI1ICogZ2V0Q29uZmlnKCkuc3RhdGUubm90ZU1hcmdpbik7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHRleHRXaWR0aDogdGV4dEVsZW0ubm9kZSgpLmdldEJCb3goKS53aWR0aCwgdGV4dEhlaWdodCB9O1xufTtcbmNvbnN0IGRyYXdOb3RlID0gKHRleHQsIGcpID0+IHtcbiAgZy5hdHRyKFwiY2xhc3NcIiwgXCJzdGF0ZS1ub3RlXCIpO1xuICBjb25zdCBub3RlID0gZy5hcHBlbmQoXCJyZWN0XCIpLmF0dHIoXCJ4XCIsIDApLmF0dHIoXCJ5XCIsIGdldENvbmZpZygpLnN0YXRlLnBhZGRpbmcpO1xuICBjb25zdCByZWN0RWxlbSA9IGcuYXBwZW5kKFwiZ1wiKTtcbiAgY29uc3QgeyB0ZXh0V2lkdGgsIHRleHRIZWlnaHQgfSA9IF9kcmF3TG9uZ1RleHQodGV4dCwgMCwgMCwgcmVjdEVsZW0pO1xuICBub3RlLmF0dHIoXCJoZWlnaHRcIiwgdGV4dEhlaWdodCArIDIgKiBnZXRDb25maWcoKS5zdGF0ZS5ub3RlTWFyZ2luKTtcbiAgbm90ZS5hdHRyKFwid2lkdGhcIiwgdGV4dFdpZHRoICsgZ2V0Q29uZmlnKCkuc3RhdGUubm90ZU1hcmdpbiAqIDIpO1xuICByZXR1cm4gbm90ZTtcbn07XG5jb25zdCBkcmF3U3RhdGUgPSBmdW5jdGlvbihlbGVtLCBzdGF0ZURlZikge1xuICBjb25zdCBpZCA9IHN0YXRlRGVmLmlkO1xuICBjb25zdCBzdGF0ZUluZm8gPSB7XG4gICAgaWQsXG4gICAgbGFiZWw6IHN0YXRlRGVmLmlkLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9O1xuICBjb25zdCBnID0gZWxlbS5hcHBlbmQoXCJnXCIpLmF0dHIoXCJpZFwiLCBpZCkuYXR0cihcImNsYXNzXCIsIFwic3RhdGVHcm91cFwiKTtcbiAgaWYgKHN0YXRlRGVmLnR5cGUgPT09IFwic3RhcnRcIikge1xuICAgIGRyYXdTdGFydFN0YXRlKGcpO1xuICB9XG4gIGlmIChzdGF0ZURlZi50eXBlID09PSBcImVuZFwiKSB7XG4gICAgZHJhd0VuZFN0YXRlKGcpO1xuICB9XG4gIGlmIChzdGF0ZURlZi50eXBlID09PSBcImZvcmtcIiB8fCBzdGF0ZURlZi50eXBlID09PSBcImpvaW5cIikge1xuICAgIGRyYXdGb3JrSm9pblN0YXRlKGcsIHN0YXRlRGVmKTtcbiAgfVxuICBpZiAoc3RhdGVEZWYudHlwZSA9PT0gXCJub3RlXCIpIHtcbiAgICBkcmF3Tm90ZShzdGF0ZURlZi5ub3RlLnRleHQsIGcpO1xuICB9XG4gIGlmIChzdGF0ZURlZi50eXBlID09PSBcImRpdmlkZXJcIikge1xuICAgIGRyYXdEaXZpZGVyKGcpO1xuICB9XG4gIGlmIChzdGF0ZURlZi50eXBlID09PSBcImRlZmF1bHRcIiAmJiBzdGF0ZURlZi5kZXNjcmlwdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgZHJhd1NpbXBsZVN0YXRlKGcsIHN0YXRlRGVmKTtcbiAgfVxuICBpZiAoc3RhdGVEZWYudHlwZSA9PT0gXCJkZWZhdWx0XCIgJiYgc3RhdGVEZWYuZGVzY3JpcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICBkcmF3RGVzY3JTdGF0ZShnLCBzdGF0ZURlZik7XG4gIH1cbiAgY29uc3Qgc3RhdGVCb3ggPSBnLm5vZGUoKS5nZXRCQm94KCk7XG4gIHN0YXRlSW5mby53aWR0aCA9IHN0YXRlQm94LndpZHRoICsgMiAqIGdldENvbmZpZygpLnN0YXRlLnBhZGRpbmc7XG4gIHN0YXRlSW5mby5oZWlnaHQgPSBzdGF0ZUJveC5oZWlnaHQgKyAyICogZ2V0Q29uZmlnKCkuc3RhdGUucGFkZGluZztcbiAgaWRDYWNoZSQxLnNldChpZCwgc3RhdGVJbmZvKTtcbiAgcmV0dXJuIHN0YXRlSW5mbztcbn07XG5sZXQgZWRnZUNvdW50ID0gMDtcbmNvbnN0IGRyYXdFZGdlID0gZnVuY3Rpb24oZWxlbSwgcGF0aCwgcmVsYXRpb24pIHtcbiAgY29uc3QgZ2V0UmVsYXRpb25UeXBlID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBkYi5yZWxhdGlvblR5cGUuQUdHUkVHQVRJT046XG4gICAgICAgIHJldHVybiBcImFnZ3JlZ2F0aW9uXCI7XG4gICAgICBjYXNlIGRiLnJlbGF0aW9uVHlwZS5FWFRFTlNJT046XG4gICAgICAgIHJldHVybiBcImV4dGVuc2lvblwiO1xuICAgICAgY2FzZSBkYi5yZWxhdGlvblR5cGUuQ09NUE9TSVRJT046XG4gICAgICAgIHJldHVybiBcImNvbXBvc2l0aW9uXCI7XG4gICAgICBjYXNlIGRiLnJlbGF0aW9uVHlwZS5ERVBFTkRFTkNZOlxuICAgICAgICByZXR1cm4gXCJkZXBlbmRlbmN5XCI7XG4gICAgfVxuICB9O1xuICBwYXRoLnBvaW50cyA9IHBhdGgucG9pbnRzLmZpbHRlcigocCkgPT4gIU51bWJlci5pc05hTihwLnkpKTtcbiAgY29uc3QgbGluZURhdGEgPSBwYXRoLnBvaW50cztcbiAgY29uc3QgbGluZUZ1bmN0aW9uID0gbGluZSgpLngoZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBkLng7XG4gIH0pLnkoZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBkLnk7XG4gIH0pLmN1cnZlKGN1cnZlQmFzaXMpO1xuICBjb25zdCBzdmdQYXRoID0gZWxlbS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIGxpbmVGdW5jdGlvbihsaW5lRGF0YSkpLmF0dHIoXCJpZFwiLCBcImVkZ2VcIiArIGVkZ2VDb3VudCkuYXR0cihcImNsYXNzXCIsIFwidHJhbnNpdGlvblwiKTtcbiAgbGV0IHVybCA9IFwiXCI7XG4gIGlmIChnZXRDb25maWcoKS5zdGF0ZS5hcnJvd01hcmtlckFic29sdXRlKSB7XG4gICAgdXJsID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXCgvZywgXCJcXFxcKFwiKTtcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFwpL2csIFwiXFxcXClcIik7XG4gIH1cbiAgc3ZnUGF0aC5hdHRyKFxuICAgIFwibWFya2VyLWVuZFwiLFxuICAgIFwidXJsKFwiICsgdXJsICsgXCIjXCIgKyBnZXRSZWxhdGlvblR5cGUoZGIucmVsYXRpb25UeXBlLkRFUEVOREVOQ1kpICsgXCJFbmQpXCJcbiAgKTtcbiAgaWYgKHJlbGF0aW9uLnRpdGxlICE9PSB2b2lkIDApIHtcbiAgICBjb25zdCBsYWJlbCA9IGVsZW0uYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJzdGF0ZUxhYmVsXCIpO1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdXRpbHMuY2FsY0xhYmVsUG9zaXRpb24ocGF0aC5wb2ludHMpO1xuICAgIGNvbnN0IHJvd3MgPSBjb21tb24uZ2V0Um93cyhyZWxhdGlvbi50aXRsZSk7XG4gICAgbGV0IHRpdGxlSGVpZ2h0ID0gMDtcbiAgICBjb25zdCB0aXRsZVJvd3MgPSBbXTtcbiAgICBsZXQgbWF4V2lkdGggPSAwO1xuICAgIGxldCBtaW5YID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0aXRsZSA9IGxhYmVsLmFwcGVuZChcInRleHRcIikuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpLnRleHQocm93c1tpXSkuYXR0cihcInhcIiwgeCkuYXR0cihcInlcIiwgeSArIHRpdGxlSGVpZ2h0KTtcbiAgICAgIGNvbnN0IGJvdW5kc1RtcCA9IHRpdGxlLm5vZGUoKS5nZXRCQm94KCk7XG4gICAgICBtYXhXaWR0aCA9IE1hdGgubWF4KG1heFdpZHRoLCBib3VuZHNUbXAud2lkdGgpO1xuICAgICAgbWluWCA9IE1hdGgubWluKG1pblgsIGJvdW5kc1RtcC54KTtcbiAgICAgIGxvZy5pbmZvKGJvdW5kc1RtcC54LCB4LCB5ICsgdGl0bGVIZWlnaHQpO1xuICAgICAgaWYgKHRpdGxlSGVpZ2h0ID09PSAwKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlQm94ID0gdGl0bGUubm9kZSgpLmdldEJCb3goKTtcbiAgICAgICAgdGl0bGVIZWlnaHQgPSB0aXRsZUJveC5oZWlnaHQ7XG4gICAgICAgIGxvZy5pbmZvKFwiVGl0bGUgaGVpZ2h0XCIsIHRpdGxlSGVpZ2h0LCB5KTtcbiAgICAgIH1cbiAgICAgIHRpdGxlUm93cy5wdXNoKHRpdGxlKTtcbiAgICB9XG4gICAgbGV0IGJveEhlaWdodCA9IHRpdGxlSGVpZ2h0ICogcm93cy5sZW5ndGg7XG4gICAgaWYgKHJvd3MubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgaGVpZ2h0QWRqID0gKHJvd3MubGVuZ3RoIC0gMSkgKiB0aXRsZUhlaWdodCAqIDAuNTtcbiAgICAgIHRpdGxlUm93cy5mb3JFYWNoKCh0aXRsZSwgaSkgPT4gdGl0bGUuYXR0cihcInlcIiwgeSArIGkgKiB0aXRsZUhlaWdodCAtIGhlaWdodEFkaikpO1xuICAgICAgYm94SGVpZ2h0ID0gdGl0bGVIZWlnaHQgKiByb3dzLmxlbmd0aDtcbiAgICB9XG4gICAgY29uc3QgYm91bmRzID0gbGFiZWwubm9kZSgpLmdldEJCb3goKTtcbiAgICBsYWJlbC5pbnNlcnQoXCJyZWN0XCIsIFwiOmZpcnN0LWNoaWxkXCIpLmF0dHIoXCJjbGFzc1wiLCBcImJveFwiKS5hdHRyKFwieFwiLCB4IC0gbWF4V2lkdGggLyAyIC0gZ2V0Q29uZmlnKCkuc3RhdGUucGFkZGluZyAvIDIpLmF0dHIoXCJ5XCIsIHkgLSBib3hIZWlnaHQgLyAyIC0gZ2V0Q29uZmlnKCkuc3RhdGUucGFkZGluZyAvIDIgLSAzLjUpLmF0dHIoXCJ3aWR0aFwiLCBtYXhXaWR0aCArIGdldENvbmZpZygpLnN0YXRlLnBhZGRpbmcpLmF0dHIoXCJoZWlnaHRcIiwgYm94SGVpZ2h0ICsgZ2V0Q29uZmlnKCkuc3RhdGUucGFkZGluZyk7XG4gICAgbG9nLmluZm8oYm91bmRzKTtcbiAgfVxuICBlZGdlQ291bnQrKztcbn07XG5sZXQgY29uZjtcbmNvbnN0IHRyYW5zZm9ybWF0aW9uTG9nID0ge307XG5jb25zdCBzZXRDb25mID0gZnVuY3Rpb24oKSB7XG59O1xuY29uc3QgaW5zZXJ0TWFya2VycyA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgZWxlbS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgXCJkZXBlbmRlbmN5RW5kXCIpLmF0dHIoXCJyZWZYXCIsIDE5KS5hdHRyKFwicmVmWVwiLCA3KS5hdHRyKFwibWFya2VyV2lkdGhcIiwgMjApLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMjgpLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpLmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgXCJNIDE5LDcgTDksMTMgTDE0LDcgTDksMSBaXCIpO1xufTtcbmNvbnN0IGRyYXcgPSBmdW5jdGlvbih0ZXh0LCBpZCwgX3ZlcnNpb24sIGRpYWdPYmopIHtcbiAgY29uZiA9IGdldENvbmZpZygpLnN0YXRlO1xuICBjb25zdCBzZWN1cml0eUxldmVsID0gZ2V0Q29uZmlnKCkuc2VjdXJpdHlMZXZlbDtcbiAgbGV0IHNhbmRib3hFbGVtZW50O1xuICBpZiAoc2VjdXJpdHlMZXZlbCA9PT0gXCJzYW5kYm94XCIpIHtcbiAgICBzYW5kYm94RWxlbWVudCA9IHNlbGVjdChcIiNpXCIgKyBpZCk7XG4gIH1cbiAgY29uc3Qgcm9vdCA9IHNlY3VyaXR5TGV2ZWwgPT09IFwic2FuZGJveFwiID8gc2VsZWN0KHNhbmRib3hFbGVtZW50Lm5vZGVzKClbMF0uY29udGVudERvY3VtZW50LmJvZHkpIDogc2VsZWN0KFwiYm9keVwiKTtcbiAgY29uc3QgZG9jID0gc2VjdXJpdHlMZXZlbCA9PT0gXCJzYW5kYm94XCIgPyBzYW5kYm94RWxlbWVudC5ub2RlcygpWzBdLmNvbnRlbnREb2N1bWVudCA6IGRvY3VtZW50O1xuICBsb2cuZGVidWcoXCJSZW5kZXJpbmcgZGlhZ3JhbSBcIiArIHRleHQpO1xuICBjb25zdCBkaWFncmFtMiA9IHJvb3Quc2VsZWN0KGBbaWQ9JyR7aWR9J11gKTtcbiAgaW5zZXJ0TWFya2VycyhkaWFncmFtMik7XG4gIGNvbnN0IHJvb3REb2MgPSBkaWFnT2JqLmRiLmdldFJvb3REb2MoKTtcbiAgcmVuZGVyRG9jKHJvb3REb2MsIGRpYWdyYW0yLCB2b2lkIDAsIGZhbHNlLCByb290LCBkb2MsIGRpYWdPYmopO1xuICBjb25zdCBwYWRkaW5nID0gY29uZi5wYWRkaW5nO1xuICBjb25zdCBib3VuZHMgPSBkaWFncmFtMi5ub2RlKCkuZ2V0QkJveCgpO1xuICBjb25zdCB3aWR0aCA9IGJvdW5kcy53aWR0aCArIHBhZGRpbmcgKiAyO1xuICBjb25zdCBoZWlnaHQgPSBib3VuZHMuaGVpZ2h0ICsgcGFkZGluZyAqIDI7XG4gIGNvbnN0IHN2Z1dpZHRoID0gd2lkdGggKiAxLjc1O1xuICBjb25maWd1cmVTdmdTaXplKGRpYWdyYW0yLCBoZWlnaHQsIHN2Z1dpZHRoLCBjb25mLnVzZU1heFdpZHRoKTtcbiAgZGlhZ3JhbTIuYXR0cihcbiAgICBcInZpZXdCb3hcIixcbiAgICBgJHtib3VuZHMueCAtIGNvbmYucGFkZGluZ30gICR7Ym91bmRzLnkgLSBjb25mLnBhZGRpbmd9IGAgKyB3aWR0aCArIFwiIFwiICsgaGVpZ2h0XG4gICk7XG59O1xuY29uc3QgZ2V0TGFiZWxXaWR0aCA9ICh0ZXh0KSA9PiB7XG4gIHJldHVybiB0ZXh0ID8gdGV4dC5sZW5ndGggKiBjb25mLmZvbnRTaXplRmFjdG9yIDogMTtcbn07XG5jb25zdCByZW5kZXJEb2MgPSAoZG9jLCBkaWFncmFtMiwgcGFyZW50SWQsIGFsdEJrZywgcm9vdCwgZG9tRG9jdW1lbnQsIGRpYWdPYmopID0+IHtcbiAgY29uc3QgZ3JhcGggPSBuZXcgZ3JhcGhsaWIuR3JhcGgoe1xuICAgIGNvbXBvdW5kOiB0cnVlLFxuICAgIG11bHRpZ3JhcGg6IHRydWVcbiAgfSk7XG4gIGxldCBpO1xuICBsZXQgZWRnZUZyZWVEb2MgPSB0cnVlO1xuICBmb3IgKGkgPSAwOyBpIDwgZG9jLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRvY1tpXS5zdG10ID09PSBcInJlbGF0aW9uXCIpIHtcbiAgICAgIGVkZ2VGcmVlRG9jID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKHBhcmVudElkKSB7XG4gICAgZ3JhcGguc2V0R3JhcGgoe1xuICAgICAgcmFua2RpcjogXCJMUlwiLFxuICAgICAgbXVsdGlncmFwaDogdHJ1ZSxcbiAgICAgIGNvbXBvdW5kOiB0cnVlLFxuICAgICAgLy8gYWN5Y2xpY2VyOiAnZ3JlZWR5JyxcbiAgICAgIHJhbmtlcjogXCJ0aWdodC10cmVlXCIsXG4gICAgICByYW5rc2VwOiBlZGdlRnJlZURvYyA/IDEgOiBjb25mLmVkZ2VMZW5ndGhGYWN0b3IsXG4gICAgICBub2RlU2VwOiBlZGdlRnJlZURvYyA/IDEgOiA1MCxcbiAgICAgIGlzTXVsdGlHcmFwaDogdHJ1ZVxuICAgICAgLy8gcmFua3NlcDogNSxcbiAgICAgIC8vIG5vZGVzZXA6IDFcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBncmFwaC5zZXRHcmFwaCh7XG4gICAgICByYW5rZGlyOiBcIlRCXCIsXG4gICAgICBtdWx0aWdyYXBoOiB0cnVlLFxuICAgICAgY29tcG91bmQ6IHRydWUsXG4gICAgICAvLyBpc0NvbXBvdW5kOiB0cnVlLFxuICAgICAgLy8gYWN5Y2xpY2VyOiAnZ3JlZWR5JyxcbiAgICAgIC8vIHJhbmtlcjogJ2xvbmdlc3QtcGF0aCdcbiAgICAgIHJhbmtzZXA6IGVkZ2VGcmVlRG9jID8gMSA6IGNvbmYuZWRnZUxlbmd0aEZhY3RvcixcbiAgICAgIG5vZGVTZXA6IGVkZ2VGcmVlRG9jID8gMSA6IDUwLFxuICAgICAgcmFua2VyOiBcInRpZ2h0LXRyZWVcIixcbiAgICAgIC8vIHJhbmtlcjogJ25ldHdvcmstc2ltcGxleCdcbiAgICAgIGlzTXVsdGlHcmFwaDogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGdyYXBoLnNldERlZmF1bHRFZGdlTGFiZWwoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9KTtcbiAgZGlhZ09iai5kYi5leHRyYWN0KGRvYyk7XG4gIGNvbnN0IHN0YXRlcyA9IGRpYWdPYmouZGIuZ2V0U3RhdGVzKCk7XG4gIGNvbnN0IHJlbGF0aW9ucyA9IGRpYWdPYmouZGIuZ2V0UmVsYXRpb25zKCk7XG4gIGNvbnN0IGtleXMyID0gT2JqZWN0LmtleXMoc3RhdGVzKTtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5czIpIHtcbiAgICBjb25zdCBzdGF0ZURlZiA9IHN0YXRlc1trZXldO1xuICAgIGlmIChwYXJlbnRJZCkge1xuICAgICAgc3RhdGVEZWYucGFyZW50SWQgPSBwYXJlbnRJZDtcbiAgICB9XG4gICAgbGV0IG5vZGU7XG4gICAgaWYgKHN0YXRlRGVmLmRvYykge1xuICAgICAgbGV0IHN1YiA9IGRpYWdyYW0yLmFwcGVuZChcImdcIikuYXR0cihcImlkXCIsIHN0YXRlRGVmLmlkKS5hdHRyKFwiY2xhc3NcIiwgXCJzdGF0ZUdyb3VwXCIpO1xuICAgICAgbm9kZSA9IHJlbmRlckRvYyhzdGF0ZURlZi5kb2MsIHN1Yiwgc3RhdGVEZWYuaWQsICFhbHRCa2csIHJvb3QsIGRvbURvY3VtZW50LCBkaWFnT2JqKTtcbiAgICAgIHtcbiAgICAgICAgc3ViID0gYWRkVGl0bGVBbmRCb3goc3ViLCBzdGF0ZURlZiwgYWx0QmtnKTtcbiAgICAgICAgbGV0IGJveEJvdW5kcyA9IHN1Yi5ub2RlKCkuZ2V0QkJveCgpO1xuICAgICAgICBub2RlLndpZHRoID0gYm94Qm91bmRzLndpZHRoO1xuICAgICAgICBub2RlLmhlaWdodCA9IGJveEJvdW5kcy5oZWlnaHQgKyBjb25mLnBhZGRpbmcgLyAyO1xuICAgICAgICB0cmFuc2Zvcm1hdGlvbkxvZ1tzdGF0ZURlZi5pZF0gPSB7IHk6IGNvbmYuY29tcG9zaXRUaXRsZVNpemUgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZSA9IGRyYXdTdGF0ZShkaWFncmFtMiwgc3RhdGVEZWYpO1xuICAgIH1cbiAgICBpZiAoc3RhdGVEZWYubm90ZSkge1xuICAgICAgY29uc3Qgbm90ZURlZiA9IHtcbiAgICAgICAgZGVzY3JpcHRpb25zOiBbXSxcbiAgICAgICAgaWQ6IHN0YXRlRGVmLmlkICsgXCItbm90ZVwiLFxuICAgICAgICBub3RlOiBzdGF0ZURlZi5ub3RlLFxuICAgICAgICB0eXBlOiBcIm5vdGVcIlxuICAgICAgfTtcbiAgICAgIGNvbnN0IG5vdGUgPSBkcmF3U3RhdGUoZGlhZ3JhbTIsIG5vdGVEZWYpO1xuICAgICAgaWYgKHN0YXRlRGVmLm5vdGUucG9zaXRpb24gPT09IFwibGVmdCBvZlwiKSB7XG4gICAgICAgIGdyYXBoLnNldE5vZGUobm9kZS5pZCArIFwiLW5vdGVcIiwgbm90ZSk7XG4gICAgICAgIGdyYXBoLnNldE5vZGUobm9kZS5pZCwgbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncmFwaC5zZXROb2RlKG5vZGUuaWQsIG5vZGUpO1xuICAgICAgICBncmFwaC5zZXROb2RlKG5vZGUuaWQgKyBcIi1ub3RlXCIsIG5vdGUpO1xuICAgICAgfVxuICAgICAgZ3JhcGguc2V0UGFyZW50KG5vZGUuaWQsIG5vZGUuaWQgKyBcIi1ncm91cFwiKTtcbiAgICAgIGdyYXBoLnNldFBhcmVudChub2RlLmlkICsgXCItbm90ZVwiLCBub2RlLmlkICsgXCItZ3JvdXBcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdyYXBoLnNldE5vZGUobm9kZS5pZCwgbm9kZSk7XG4gICAgfVxuICB9XG4gIGxvZy5kZWJ1ZyhcIkNvdW50PVwiLCBncmFwaC5ub2RlQ291bnQoKSwgZ3JhcGgpO1xuICBsZXQgY250ID0gMDtcbiAgcmVsYXRpb25zLmZvckVhY2goZnVuY3Rpb24ocmVsYXRpb24pIHtcbiAgICBjbnQrKztcbiAgICBsb2cuZGVidWcoXCJTZXR0aW5nIGVkZ2VcIiwgcmVsYXRpb24pO1xuICAgIGdyYXBoLnNldEVkZ2UoXG4gICAgICByZWxhdGlvbi5pZDEsXG4gICAgICByZWxhdGlvbi5pZDIsXG4gICAgICB7XG4gICAgICAgIHJlbGF0aW9uLFxuICAgICAgICB3aWR0aDogZ2V0TGFiZWxXaWR0aChyZWxhdGlvbi50aXRsZSksXG4gICAgICAgIGhlaWdodDogY29uZi5sYWJlbEhlaWdodCAqIGNvbW1vbi5nZXRSb3dzKHJlbGF0aW9uLnRpdGxlKS5sZW5ndGgsXG4gICAgICAgIGxhYmVscG9zOiBcImNcIlxuICAgICAgfSxcbiAgICAgIFwiaWRcIiArIGNudFxuICAgICk7XG4gIH0pO1xuICBsYXlvdXQoZ3JhcGgpO1xuICBsb2cuZGVidWcoXCJHcmFwaCBhZnRlciBsYXlvdXRcIiwgZ3JhcGgubm9kZXMoKSk7XG4gIGNvbnN0IHN2Z0VsZW0gPSBkaWFncmFtMi5ub2RlKCk7XG4gIGdyYXBoLm5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbih2KSB7XG4gICAgaWYgKHYgIT09IHZvaWQgMCAmJiBncmFwaC5ub2RlKHYpICE9PSB2b2lkIDApIHtcbiAgICAgIGxvZy53YXJuKFwiTm9kZSBcIiArIHYgKyBcIjogXCIgKyBKU09OLnN0cmluZ2lmeShncmFwaC5ub2RlKHYpKSk7XG4gICAgICByb290LnNlbGVjdChcIiNcIiArIHN2Z0VsZW0uaWQgKyBcIiAjXCIgKyB2KS5hdHRyKFxuICAgICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgICBcInRyYW5zbGF0ZShcIiArIChncmFwaC5ub2RlKHYpLnggLSBncmFwaC5ub2RlKHYpLndpZHRoIC8gMikgKyBcIixcIiArIChncmFwaC5ub2RlKHYpLnkgKyAodHJhbnNmb3JtYXRpb25Mb2dbdl0gPyB0cmFuc2Zvcm1hdGlvbkxvZ1t2XS55IDogMCkgLSBncmFwaC5ub2RlKHYpLmhlaWdodCAvIDIpICsgXCIgKVwiXG4gICAgICApO1xuICAgICAgcm9vdC5zZWxlY3QoXCIjXCIgKyBzdmdFbGVtLmlkICsgXCIgI1wiICsgdikuYXR0cihcImRhdGEteC1zaGlmdFwiLCBncmFwaC5ub2RlKHYpLnggLSBncmFwaC5ub2RlKHYpLndpZHRoIC8gMik7XG4gICAgICBjb25zdCBkaXZpZGVycyA9IGRvbURvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjXCIgKyBzdmdFbGVtLmlkICsgXCIgI1wiICsgdiArIFwiIC5kaXZpZGVyXCIpO1xuICAgICAgZGl2aWRlcnMuZm9yRWFjaCgoZGl2aWRlcikgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkaXZpZGVyLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGxldCBwV2lkdGggPSAwO1xuICAgICAgICBsZXQgcFNoaWZ0ID0gMDtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgIGlmIChwYXJlbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgcFdpZHRoID0gcGFyZW50LnBhcmVudEVsZW1lbnQuZ2V0QkJveCgpLndpZHRoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwU2hpZnQgPSBwYXJzZUludChwYXJlbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS14LXNoaWZ0XCIpLCAxMCk7XG4gICAgICAgICAgaWYgKE51bWJlci5pc05hTihwU2hpZnQpKSB7XG4gICAgICAgICAgICBwU2hpZnQgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkaXZpZGVyLnNldEF0dHJpYnV0ZShcIngxXCIsIDAgLSBwU2hpZnQgKyA4KTtcbiAgICAgICAgZGl2aWRlci5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCBwV2lkdGggLSBwU2hpZnQgLSA4KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2cuZGVidWcoXCJObyBOb2RlIFwiICsgdiArIFwiOiBcIiArIEpTT04uc3RyaW5naWZ5KGdyYXBoLm5vZGUodikpKTtcbiAgICB9XG4gIH0pO1xuICBsZXQgc3RhdGVCb3ggPSBzdmdFbGVtLmdldEJCb3goKTtcbiAgZ3JhcGguZWRnZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZSAhPT0gdm9pZCAwICYmIGdyYXBoLmVkZ2UoZSkgIT09IHZvaWQgMCkge1xuICAgICAgbG9nLmRlYnVnKFwiRWRnZSBcIiArIGUudiArIFwiIC0+IFwiICsgZS53ICsgXCI6IFwiICsgSlNPTi5zdHJpbmdpZnkoZ3JhcGguZWRnZShlKSkpO1xuICAgICAgZHJhd0VkZ2UoZGlhZ3JhbTIsIGdyYXBoLmVkZ2UoZSksIGdyYXBoLmVkZ2UoZSkucmVsYXRpb24pO1xuICAgIH1cbiAgfSk7XG4gIHN0YXRlQm94ID0gc3ZnRWxlbS5nZXRCQm94KCk7XG4gIGNvbnN0IHN0YXRlSW5mbyA9IHtcbiAgICBpZDogcGFyZW50SWQgPyBwYXJlbnRJZCA6IFwicm9vdFwiLFxuICAgIGxhYmVsOiBwYXJlbnRJZCA/IHBhcmVudElkIDogXCJyb290XCIsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwXG4gIH07XG4gIHN0YXRlSW5mby53aWR0aCA9IHN0YXRlQm94LndpZHRoICsgMiAqIGNvbmYucGFkZGluZztcbiAgc3RhdGVJbmZvLmhlaWdodCA9IHN0YXRlQm94LmhlaWdodCArIDIgKiBjb25mLnBhZGRpbmc7XG4gIGxvZy5kZWJ1ZyhcIkRvYyByZW5kZXJlZFwiLCBzdGF0ZUluZm8sIGdyYXBoKTtcbiAgcmV0dXJuIHN0YXRlSW5mbztcbn07XG5jb25zdCByZW5kZXJlciA9IHtcbiAgc2V0Q29uZixcbiAgZHJhd1xufTtcbmNvbnN0IGRpYWdyYW0gPSB7XG4gIHBhcnNlcixcbiAgZGIsXG4gIHJlbmRlcmVyLFxuICBzdHlsZXMsXG4gIGluaXQ6IChjbmYpID0+IHtcbiAgICBpZiAoIWNuZi5zdGF0ZSkge1xuICAgICAgY25mLnN0YXRlID0ge307XG4gICAgfVxuICAgIGNuZi5zdGF0ZS5hcnJvd01hcmtlckFic29sdXRlID0gY25mLmFycm93TWFya2VyQWJzb2x1dGU7XG4gICAgZGIuY2xlYXIoKTtcbiAgfVxufTtcbmV4cG9ydCB7XG4gIGRpYWdyYW1cbn07XG4iXSwibmFtZXMiOlsiZ2V0Q29uZmlnIiwiY29tbW9uIiwiZGIiLCJsaW5lIiwiY3VydmVCYXNpcyIsInV0aWxzIiwibG9nIiwic2VsZWN0IiwiY29uZmlndXJlU3ZnU2l6ZSIsImdyYXBoIiwiZ3JhcGhsaWIuR3JhcGgiLCJsYXlvdXQiLCJwYXJzZXIiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQTJCQSxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRUEsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUVBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMVAsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5TyxNQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLEtBQUs7QUFDekMsRUFBRSxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRUEsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQy9PLEVBQUUsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRUEsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUVBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBR0EsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUVBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoUixFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxLQUFLO0FBQ3hDLEVBQUUsTUFBTSxRQUFRLEdBQUcsU0FBUyxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTtBQUNuRCxJQUFJLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUYsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ25CLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUVBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNyRCxLQUFLO0FBQ0wsR0FBRyxDQUFDO0FBQ0osRUFBRSxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRUEsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlQLEVBQUUsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzFDLEVBQUUsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUN0QyxFQUFFLE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRUEsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUk7QUFDaEYsSUFBSSxHQUFHO0FBQ1AsSUFBSSxXQUFXLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVTtBQUNsSCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3ZDLEVBQUUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLEVBQUUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLEVBQUUsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxLQUFLLEVBQUU7QUFDaEQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2xCLE1BQU0sUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDN0MsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLEtBQUs7QUFDTCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDcEIsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRUEsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUVBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsV0FBVyxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUVBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsV0FBVyxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDOVIsRUFBRSxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDaEQsRUFBRSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pELEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsR0FBR0EsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRUEsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUVBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssR0FBRyxDQUFDLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsV0FBVyxHQUFHLENBQUMsR0FBR0EsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUVBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNyUixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sS0FBSztBQUNoRCxFQUFFLE1BQU0sR0FBRyxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQ3hDLEVBQUUsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQy9DLEVBQUUsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3BDLEVBQUUsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNoQyxFQUFFLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDeEIsRUFBRSxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRUEsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUVBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbkwsRUFBRSxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDMUMsRUFBRSxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUM3QyxFQUFFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzdDLEVBQUUsSUFBSSxLQUFLLEtBQUssUUFBUSxFQUFFO0FBQzFCLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7QUFDM0IsR0FBRztBQUNILEVBQUUsSUFBSSxNQUFNLENBQUM7QUFDYixFQUFFLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN0QyxFQUFFLElBQUksUUFBUSxDQUFDLEdBQUc7QUFDbEIsSUFBSSxDQUFDO0FBQ0wsRUFBRSxNQUFNLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUN0QixFQUFFLElBQUksVUFBVSxHQUFHLFFBQVEsRUFBRTtBQUM3QixJQUFJLE1BQU0sR0FBRyxDQUFDLFFBQVEsR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUMxQyxHQUFHO0FBQ0gsRUFBRSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxHQUFHLFFBQVEsRUFBRTtBQUNsRSxJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEdBQUcsUUFBUSxJQUFJLENBQUMsQ0FBQztBQUNoRCxHQUFHO0FBQ0gsRUFBRSxNQUFNLEtBQUssR0FBRyxDQUFDLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7QUFDakQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEdBQUcsY0FBYyxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSTtBQUNuSixJQUFJLFFBQVE7QUFDWixJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQztBQUNyRixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNwQixFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNoQyxFQUFFLElBQUksVUFBVSxJQUFJLFFBQVEsRUFBRTtBQUM5QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDeEUsR0FBRztBQUNILEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJO0FBQ3pELElBQUksR0FBRztBQUNQLElBQUlBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPO0FBQzNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUVBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRUEsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9HLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJO0FBQ3pELElBQUksR0FBRztBQUNQLElBQUlBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPO0FBQzNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRUEsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUM7QUFDRixNQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSztBQUM1QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUVBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJO0FBQ2hJLElBQUksSUFBSTtBQUNSLElBQUlBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXO0FBQzFGLEdBQUcsQ0FBQyxJQUFJO0FBQ1IsSUFBSSxJQUFJO0FBQ1IsSUFBSUEsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBR0EsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBR0EsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVc7QUFDMUYsR0FBRyxDQUFDO0FBQ0osRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUVBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUVBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDalAsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLEtBQUs7QUFDM0MsRUFBRSxJQUFJLEtBQUssR0FBR0EsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztBQUMxQyxFQUFFLElBQUksTUFBTSxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO0FBQzVDLEVBQUUsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFO0FBQ3pCLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUNuQixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDakIsR0FBRztBQUNILEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRUEsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUVBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoTSxDQUFDLENBQUM7QUFDRixNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSztBQUMxQyxFQUFFLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNyQixFQUFFLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6QyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3JDLEVBQUUsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDN0MsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEMsRUFBRSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDQyxjQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDbEQsRUFBRSxJQUFJLE9BQU8sR0FBRyxJQUFJLEdBQUdELGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7QUFDcEQsRUFBRSxLQUFLLE1BQU0sS0FBSyxJQUFJLEtBQUssRUFBRTtBQUM3QixJQUFJLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM3QixJQUFJLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDeEIsTUFBTSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixNQUFNLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtBQUN6QixRQUFRLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNqRCxRQUFRLE9BQU8sSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDO0FBQ3JDLE9BQU87QUFDUCxNQUFNLFVBQVUsSUFBSSxPQUFPLENBQUM7QUFDNUIsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN2RCxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsSUFBSSxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDM0UsS0FBSztBQUNMLEdBQUc7QUFDSCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQztBQUNwRSxDQUFDLENBQUM7QUFDRixNQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUs7QUFDOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNoQyxFQUFFLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEYsRUFBRSxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsR0FBRyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDeEUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLEdBQUcsQ0FBQyxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDckUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbkUsRUFBRSxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUNGLE1BQU0sU0FBUyxHQUFHLFNBQVMsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUMzQyxFQUFFLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7QUFDekIsRUFBRSxNQUFNLFNBQVMsR0FBRztBQUNwQixJQUFJLEVBQUU7QUFDTixJQUFJLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRTtBQUN0QixJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLEdBQUcsQ0FBQztBQUNKLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDeEUsRUFBRSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO0FBQ2pDLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLEdBQUc7QUFDSCxFQUFFLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUU7QUFDL0IsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsR0FBRztBQUNILEVBQUUsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtBQUM1RCxJQUFJLGlCQUFpQixDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNuQyxHQUFHO0FBQ0gsRUFBRSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO0FBQ2hDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLEdBQUc7QUFDSCxFQUFFLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7QUFDbkMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkIsR0FBRztBQUNILEVBQUUsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDekUsSUFBSSxlQUFlLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLEdBQUc7QUFDSCxFQUFFLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZFLElBQUksY0FBYyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNoQyxHQUFHO0FBQ0gsRUFBRSxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdEMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQ25FLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBR0EsZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUVyRSxFQUFFLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQztBQUNGLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNsQixNQUFNLFFBQVEsR0FBRyxTQUFTLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0FBQ2hELEVBQUUsTUFBTSxlQUFlLEdBQUcsU0FBUyxJQUFJLEVBQUU7QUFDekMsSUFBSSxRQUFRLElBQUk7QUFDaEIsTUFBTSxLQUFLRSxpQkFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXO0FBQ3RDLFFBQVEsT0FBTyxhQUFhLENBQUM7QUFDN0IsTUFBTSxLQUFLQSxpQkFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTO0FBQ3BDLFFBQVEsT0FBTyxXQUFXLENBQUM7QUFDM0IsTUFBTSxLQUFLQSxpQkFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXO0FBQ3RDLFFBQVEsT0FBTyxhQUFhLENBQUM7QUFDN0IsTUFBTSxLQUFLQSxpQkFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVO0FBQ3JDLFFBQVEsT0FBTyxZQUFZLENBQUM7QUFDNUIsS0FBSztBQUNMLEdBQUcsQ0FBQztBQUNKLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUQsRUFBRSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQy9CLEVBQUUsTUFBTSxZQUFZLEdBQUdDLFNBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUM1QyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNmLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUNuQixJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNmLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQ0MsZ0JBQVUsQ0FBQyxDQUFDO0FBQ3ZCLEVBQUUsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDbkksRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDZixFQUFFLElBQUlKLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRTtBQUM3QyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDckgsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEMsR0FBRztBQUNILEVBQUUsT0FBTyxDQUFDLElBQUk7QUFDZCxJQUFJLFlBQVk7QUFDaEIsSUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxlQUFlLENBQUNFLGlCQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU07QUFDN0UsR0FBRyxDQUFDO0FBQ0osRUFBRSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEVBQUU7QUFDakMsSUFBSSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDL0QsSUFBSSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHRyxXQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFELElBQUksTUFBTSxJQUFJLEdBQUdKLGNBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hELElBQUksSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLElBQUksTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLElBQUksSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDM0MsTUFBTSxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7QUFDN0gsTUFBTSxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDL0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxNQUFNSyxXQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztBQUNoRCxNQUFNLElBQUksV0FBVyxLQUFLLENBQUMsRUFBRTtBQUM3QixRQUFRLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNoRCxRQUFRLFdBQVcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQ3RDLFFBQVFBLFdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqRCxPQUFPO0FBQ1AsTUFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVCLEtBQUs7QUFDTCxJQUFJLElBQUksU0FBUyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzlDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUN6QixNQUFNLE1BQU0sU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUM5RCxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDeEYsTUFBTSxTQUFTLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDNUMsS0FBSztBQUNMLElBQUksTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxHQUFHTixlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLEdBQUdBLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2UyxJQUFJTSxXQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JCLEdBQUc7QUFDSCxFQUFFLFNBQVMsRUFBRSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBQ0YsSUFBSSxJQUFJLENBQUM7QUFDVCxNQUFNLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztBQUM3QixNQUFNLE9BQU8sR0FBRyxXQUFXO0FBQzNCLENBQUMsQ0FBQztBQUNGLE1BQU0sYUFBYSxHQUFHLFNBQVMsSUFBSSxFQUFFO0FBQ3JDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztBQUNsTyxDQUFDLENBQUM7QUFDRixNQUFNLElBQUksR0FBRyxTQUFTLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRTtBQUNuRCxFQUFFLElBQUksR0FBR04sZUFBUyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQzNCLEVBQUUsTUFBTSxhQUFhLEdBQUdBLGVBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztBQUNsRCxFQUFFLElBQUksY0FBYyxDQUFDO0FBQ3JCLEVBQUUsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFO0FBQ25DLElBQUksY0FBYyxHQUFHTyxZQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZDLEdBQUc7QUFDSCxFQUFFLE1BQU0sSUFBSSxHQUFHLGFBQWEsS0FBSyxTQUFTLEdBQUdBLFlBQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHQSxZQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckgsRUFBRSxNQUFNLEdBQUcsR0FBRyxhQUFhLEtBQUssU0FBUyxHQUFHLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO0FBQ2pHLEVBQUVELFdBQUcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDekMsRUFBRSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9DLEVBQUUsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFCLEVBQUUsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUMxQyxFQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2xFLEVBQUUsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUMvQixFQUFFLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMzQyxFQUFFLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUMzQyxFQUFFLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUM3QyxFQUFFLE1BQU0sUUFBUSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDaEMsRUFBRUUsc0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2pFLEVBQUUsUUFBUSxDQUFDLElBQUk7QUFDZixJQUFJLFNBQVM7QUFDYixJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLE1BQU07QUFDcEYsR0FBRyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0YsTUFBTSxhQUFhLEdBQUcsQ0FBQyxJQUFJLEtBQUs7QUFDaEMsRUFBRSxPQUFPLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQztBQUNGLE1BQU0sU0FBUyxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxLQUFLO0FBQ25GLEVBQUUsTUFBTUMsT0FBSyxHQUFHLElBQUlDLFdBQWMsQ0FBQztBQUNuQyxJQUFJLFFBQVEsRUFBRSxJQUFJO0FBQ2xCLElBQUksVUFBVSxFQUFFLElBQUk7QUFDcEIsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ1IsRUFBRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDekIsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDbkMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO0FBQ3BDLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQztBQUMxQixNQUFNLE1BQU07QUFDWixLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUUsSUFBSSxRQUFRLEVBQUU7QUFDaEIsSUFBSUQsT0FBSyxDQUFDLFFBQVEsQ0FBQztBQUNuQixNQUFNLE9BQU8sRUFBRSxJQUFJO0FBQ25CLE1BQU0sVUFBVSxFQUFFLElBQUk7QUFDdEIsTUFBTSxRQUFRLEVBQUUsSUFBSTtBQUNwQjtBQUNBLE1BQU0sTUFBTSxFQUFFLFlBQVk7QUFDMUIsTUFBTSxPQUFPLEVBQUUsV0FBVyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCO0FBQ3RELE1BQU0sT0FBTyxFQUFFLFdBQVcsR0FBRyxDQUFDLEdBQUcsRUFBRTtBQUNuQyxNQUFNLFlBQVksRUFBRSxJQUFJO0FBQ3hCO0FBQ0E7QUFDQSxLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUcsTUFBTTtBQUNULElBQUlBLE9BQUssQ0FBQyxRQUFRLENBQUM7QUFDbkIsTUFBTSxPQUFPLEVBQUUsSUFBSTtBQUNuQixNQUFNLFVBQVUsRUFBRSxJQUFJO0FBQ3RCLE1BQU0sUUFBUSxFQUFFLElBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsTUFBTSxPQUFPLEVBQUUsV0FBVyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCO0FBQ3RELE1BQU0sT0FBTyxFQUFFLFdBQVcsR0FBRyxDQUFDLEdBQUcsRUFBRTtBQUNuQyxNQUFNLE1BQU0sRUFBRSxZQUFZO0FBQzFCO0FBQ0EsTUFBTSxZQUFZLEVBQUUsSUFBSTtBQUN4QixLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSCxFQUFFQSxPQUFLLENBQUMsbUJBQW1CLENBQUMsV0FBVztBQUN2QyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2QsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLEVBQUUsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN4QyxFQUFFLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDOUMsRUFBRSxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BDLEVBQUUsS0FBSyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7QUFDM0IsSUFBSSxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsSUFBSSxJQUFJLFFBQVEsRUFBRTtBQUNsQixNQUFNLFFBQVEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ25DLEtBQUs7QUFDTCxJQUFJLElBQUksSUFBSSxDQUFDO0FBQ2IsSUFBSSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUU7QUFDdEIsTUFBTSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDekYsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1RixNQUFNO0FBQ04sUUFBUSxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDcEQsUUFBUSxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDN0MsUUFBUSxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDckMsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDMUQsUUFBUSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFDdkUsT0FBTztBQUNQLEtBQUssTUFBTTtBQUNYLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDM0MsS0FBSztBQUNMLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO0FBQ3ZCLE1BQU0sTUFBTSxPQUFPLEdBQUc7QUFDdEIsUUFBUSxZQUFZLEVBQUUsRUFBRTtBQUN4QixRQUFRLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRSxHQUFHLE9BQU87QUFDakMsUUFBUSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7QUFDM0IsUUFBUSxJQUFJLEVBQUUsTUFBTTtBQUNwQixPQUFPLENBQUM7QUFDUixNQUFNLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDaEQsTUFBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUNoRCxRQUFRQSxPQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9DLFFBQVFBLE9BQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyQyxPQUFPLE1BQU07QUFDYixRQUFRQSxPQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDckMsUUFBUUEsT0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMvQyxPQUFPO0FBQ1AsTUFBTUEsT0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUM7QUFDbkQsTUFBTUEsT0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0FBQzdELEtBQUssTUFBTTtBQUNYLE1BQU1BLE9BQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNuQyxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUVILFdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFRyxPQUFLLENBQUMsU0FBUyxFQUFFLEVBQUVBLE9BQUssQ0FBQyxDQUFDO0FBQ2hELEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsUUFBUSxFQUFFO0FBQ3ZDLElBQUksR0FBRyxFQUFFLENBQUM7QUFDVixJQUFJSCxXQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN4QyxJQUFJRyxPQUFLLENBQUMsT0FBTztBQUNqQixNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQ2xCLE1BQU0sUUFBUSxDQUFDLEdBQUc7QUFDbEIsTUFBTTtBQUNOLFFBQVEsUUFBUTtBQUNoQixRQUFRLEtBQUssRUFBRSxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUM1QyxRQUFRLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHUixjQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO0FBQ3hFLFFBQVEsUUFBUSxFQUFFLEdBQUc7QUFDckIsT0FBTztBQUNQLE1BQU0sSUFBSSxHQUFHLEdBQUc7QUFDaEIsS0FBSyxDQUFDO0FBQ04sR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFVSxhQUFNLENBQUNGLE9BQUssQ0FBQyxDQUFDO0FBQ2hCLEVBQUVILFdBQUcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUVHLE9BQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ2pELEVBQUUsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2xDLEVBQUVBLE9BQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDcEMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSUEsT0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtBQUNsRCxNQUFNSCxXQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUNHLE9BQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25FLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSTtBQUNuRCxRQUFRLFdBQVc7QUFDbkIsUUFBUSxZQUFZLElBQUlBLE9BQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxPQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUlBLE9BQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBR0EsT0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSTtBQUNwTCxPQUFPLENBQUM7QUFDUixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUVBLE9BQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxPQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMvRyxNQUFNLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0FBQy9GLE1BQU0sUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSztBQUNwQyxRQUFRLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDN0MsUUFBUSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDdkIsUUFBUSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDdkIsUUFBUSxJQUFJLE1BQU0sRUFBRTtBQUNwQixVQUFVLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRTtBQUNwQyxZQUFZLE1BQU0sR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQztBQUMxRCxXQUFXO0FBQ1gsVUFBVSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDckUsVUFBVSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDcEMsWUFBWSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ25ELFFBQVEsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4RCxPQUFPLENBQUMsQ0FBQztBQUNULEtBQUssTUFBTTtBQUNYLE1BQU1ILFdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQ0csT0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkUsS0FBSztBQUNMLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsRUFBRSxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDbkMsRUFBRUEsT0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUNwQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJQSxPQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ2xELE1BQU1ILFdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUNHLE9BQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JGLE1BQU0sUUFBUSxDQUFDLFFBQVEsRUFBRUEsT0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRUEsT0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoRSxLQUFLO0FBQ0wsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDL0IsRUFBRSxNQUFNLFNBQVMsR0FBRztBQUNwQixJQUFJLEVBQUUsRUFBRSxRQUFRLEdBQUcsUUFBUSxHQUFHLE1BQU07QUFDcEMsSUFBSSxLQUFLLEVBQUUsUUFBUSxHQUFHLFFBQVEsR0FBRyxNQUFNO0FBQ3ZDLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ2IsR0FBRyxDQUFDO0FBQ0osRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDdEQsRUFBRSxTQUFTLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEQsRUFBRUgsV0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsU0FBUyxFQUFFRyxPQUFLLENBQUMsQ0FBQztBQUM5QyxFQUFFLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQztBQUNGLE1BQU0sUUFBUSxHQUFHO0FBQ2pCLEVBQUUsT0FBTztBQUNULEVBQUUsSUFBSTtBQUNOLENBQUMsQ0FBQztBQUNHLE1BQUMsT0FBTyxHQUFHO0FBQ2hCLFVBQUVHLHVCQUFNO0FBQ1IsTUFBRVYsaUJBQUU7QUFDSixFQUFFLFFBQVE7QUFDVixVQUFFVyxxQkFBTTtBQUNSLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLO0FBQ2pCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7QUFDcEIsTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNyQixLQUFLO0FBQ0wsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztBQUM1RCxJQUFJWCxpQkFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2YsR0FBRztBQUNIOzs7OyJ9
