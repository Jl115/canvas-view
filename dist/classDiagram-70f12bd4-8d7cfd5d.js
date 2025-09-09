'use strict';

var styles9a916d00 = require('./styles-9a916d00-3e4f4379.js');
var index = require('./index-deb671d6.js');
var graph = require('./graph-4ff464ab.js');
var layout = require('./layout-d88296cc.js');
require('./main-5c8f274d.js');
var line = require('./line-891b5b35.js');
require('obsidian');
require('./array-aca279a4.js');
require('./path-29c5310d.js');

let edgeCount = 0;
const drawEdge = function(elem, path, relation, conf, diagObj) {
  const getRelationType = function(type) {
    switch (type) {
      case diagObj.db.relationType.AGGREGATION:
        return "aggregation";
      case diagObj.db.relationType.EXTENSION:
        return "extension";
      case diagObj.db.relationType.COMPOSITION:
        return "composition";
      case diagObj.db.relationType.DEPENDENCY:
        return "dependency";
      case diagObj.db.relationType.LOLLIPOP:
        return "lollipop";
    }
  };
  path.points = path.points.filter((p) => !Number.isNaN(p.y));
  const lineData = path.points;
  const lineFunction = line.line().x(function(d) {
    return d.x;
  }).y(function(d) {
    return d.y;
  }).curve(index.curveBasis);
  const svgPath = elem.append("path").attr("d", lineFunction(lineData)).attr("id", "edge" + edgeCount).attr("class", "relation");
  let url = "";
  if (conf.arrowMarkerAbsolute) {
    url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
    url = url.replace(/\(/g, "\\(");
    url = url.replace(/\)/g, "\\)");
  }
  if (relation.relation.lineType == 1) {
    svgPath.attr("class", "relation dashed-line");
  }
  if (relation.relation.lineType == 10) {
    svgPath.attr("class", "relation dotted-line");
  }
  if (relation.relation.type1 !== "none") {
    svgPath.attr(
      "marker-start",
      "url(" + url + "#" + getRelationType(relation.relation.type1) + "Start)"
    );
  }
  if (relation.relation.type2 !== "none") {
    svgPath.attr(
      "marker-end",
      "url(" + url + "#" + getRelationType(relation.relation.type2) + "End)"
    );
  }
  let x, y;
  const l = path.points.length;
  let labelPosition = index.utils.calcLabelPosition(path.points);
  x = labelPosition.x;
  y = labelPosition.y;
  let p1_card_x, p1_card_y;
  let p2_card_x, p2_card_y;
  if (l % 2 !== 0 && l > 1) {
    let cardinality_1_point = index.utils.calcCardinalityPosition(
      relation.relation.type1 !== "none",
      path.points,
      path.points[0]
    );
    let cardinality_2_point = index.utils.calcCardinalityPosition(
      relation.relation.type2 !== "none",
      path.points,
      path.points[l - 1]
    );
    index.log$1.debug("cardinality_1_point " + JSON.stringify(cardinality_1_point));
    index.log$1.debug("cardinality_2_point " + JSON.stringify(cardinality_2_point));
    p1_card_x = cardinality_1_point.x;
    p1_card_y = cardinality_1_point.y;
    p2_card_x = cardinality_2_point.x;
    p2_card_y = cardinality_2_point.y;
  }
  if (relation.title !== void 0) {
    const g = elem.append("g").attr("class", "classLabel");
    const label = g.append("text").attr("class", "label").attr("x", x).attr("y", y).attr("fill", "red").attr("text-anchor", "middle").text(relation.title);
    window.label = label;
    const bounds = label.node().getBBox();
    g.insert("rect", ":first-child").attr("class", "box").attr("x", bounds.x - conf.padding / 2).attr("y", bounds.y - conf.padding / 2).attr("width", bounds.width + conf.padding).attr("height", bounds.height + conf.padding);
  }
  index.log$1.info("Rendering relation " + JSON.stringify(relation));
  if (relation.relationTitle1 !== void 0 && relation.relationTitle1 !== "none") {
    const g = elem.append("g").attr("class", "cardinality");
    g.append("text").attr("class", "type1").attr("x", p1_card_x).attr("y", p1_card_y).attr("fill", "black").attr("font-size", "6").text(relation.relationTitle1);
  }
  if (relation.relationTitle2 !== void 0 && relation.relationTitle2 !== "none") {
    const g = elem.append("g").attr("class", "cardinality");
    g.append("text").attr("class", "type2").attr("x", p2_card_x).attr("y", p2_card_y).attr("fill", "black").attr("font-size", "6").text(relation.relationTitle2);
  }
  edgeCount++;
};
const drawClass = function(elem, classDef, conf, diagObj) {
  index.log$1.debug("Rendering class ", classDef, conf);
  const id = classDef.id;
  const classInfo = {
    id,
    label: classDef.id,
    width: 0,
    height: 0
  };
  const g = elem.append("g").attr("id", diagObj.db.lookUpDomId(id)).attr("class", "classGroup");
  let title;
  if (classDef.link) {
    title = g.append("svg:a").attr("xlink:href", classDef.link).attr("target", classDef.linkTarget).append("text").attr("y", conf.textHeight + conf.padding).attr("x", 0);
  } else {
    title = g.append("text").attr("y", conf.textHeight + conf.padding).attr("x", 0);
  }
  let isFirst = true;
  classDef.annotations.forEach(function(member) {
    const titleText2 = title.append("tspan").text("«" + member + "»");
    if (!isFirst) {
      titleText2.attr("dy", conf.textHeight);
    }
    isFirst = false;
  });
  let classTitleString = getClassTitleString(classDef);
  const classTitle = title.append("tspan").text(classTitleString).attr("class", "title");
  if (!isFirst) {
    classTitle.attr("dy", conf.textHeight);
  }
  const titleHeight = title.node().getBBox().height;
  let membersLine;
  let membersBox;
  let methodsLine;
  if (classDef.members.length > 0) {
    membersLine = g.append("line").attr("x1", 0).attr("y1", conf.padding + titleHeight + conf.dividerMargin / 2).attr("y2", conf.padding + titleHeight + conf.dividerMargin / 2);
    const members = g.append("text").attr("x", conf.padding).attr("y", titleHeight + conf.dividerMargin + conf.textHeight).attr("fill", "white").attr("class", "classText");
    isFirst = true;
    classDef.members.forEach(function(member) {
      addTspan(members, member, isFirst, conf);
      isFirst = false;
    });
    membersBox = members.node().getBBox();
  }
  if (classDef.methods.length > 0) {
    methodsLine = g.append("line").attr("x1", 0).attr("y1", conf.padding + titleHeight + conf.dividerMargin + membersBox.height).attr("y2", conf.padding + titleHeight + conf.dividerMargin + membersBox.height);
    const methods = g.append("text").attr("x", conf.padding).attr("y", titleHeight + 2 * conf.dividerMargin + membersBox.height + conf.textHeight).attr("fill", "white").attr("class", "classText");
    isFirst = true;
    classDef.methods.forEach(function(method) {
      addTspan(methods, method, isFirst, conf);
      isFirst = false;
    });
  }
  const classBox = g.node().getBBox();
  var cssClassStr = " ";
  if (classDef.cssClasses.length > 0) {
    cssClassStr = cssClassStr + classDef.cssClasses.join(" ");
  }
  const rect = g.insert("rect", ":first-child").attr("x", 0).attr("y", 0).attr("width", classBox.width + 2 * conf.padding).attr("height", classBox.height + conf.padding + 0.5 * conf.dividerMargin).attr("class", cssClassStr);
  const rectWidth = rect.node().getBBox().width;
  title.node().childNodes.forEach(function(x) {
    x.setAttribute("x", (rectWidth - x.getBBox().width) / 2);
  });
  if (classDef.tooltip) {
    title.insert("title").text(classDef.tooltip);
  }
  if (membersLine) {
    membersLine.attr("x2", rectWidth);
  }
  if (methodsLine) {
    methodsLine.attr("x2", rectWidth);
  }
  classInfo.width = rectWidth;
  classInfo.height = classBox.height + conf.padding + 0.5 * conf.dividerMargin;
  return classInfo;
};
const getClassTitleString = function(classDef) {
  let classTitleString = classDef.id;
  if (classDef.type) {
    classTitleString += "<" + index.parseGenericTypes(classDef.type) + ">";
  }
  return classTitleString;
};
const drawNote = function(elem, note, conf, diagObj) {
  index.log$1.debug("Rendering note ", note, conf);
  const id = note.id;
  const noteInfo = {
    id,
    text: note.text,
    width: 0,
    height: 0
  };
  const g = elem.append("g").attr("id", id).attr("class", "classGroup");
  let text = g.append("text").attr("y", conf.textHeight + conf.padding).attr("x", 0);
  const lines = JSON.parse(`"${note.text}"`).split("\n");
  lines.forEach(function(line2) {
    index.log$1.debug(`Adding line: ${line2}`);
    text.append("tspan").text(line2).attr("class", "title").attr("dy", conf.textHeight);
  });
  const noteBox = g.node().getBBox();
  const rect = g.insert("rect", ":first-child").attr("x", 0).attr("y", 0).attr("width", noteBox.width + 2 * conf.padding).attr(
    "height",
    noteBox.height + lines.length * conf.textHeight + conf.padding + 0.5 * conf.dividerMargin
  );
  const rectWidth = rect.node().getBBox().width;
  text.node().childNodes.forEach(function(x) {
    x.setAttribute("x", (rectWidth - x.getBBox().width) / 2);
  });
  noteInfo.width = rectWidth;
  noteInfo.height = noteBox.height + lines.length * conf.textHeight + conf.padding + 0.5 * conf.dividerMargin;
  return noteInfo;
};
const addTspan = function(textEl, member, isFirst, conf) {
  const { displayText, cssStyle } = member.getDisplayDetails();
  const tSpan = textEl.append("tspan").attr("x", conf.padding).text(displayText);
  if (cssStyle !== "") {
    tSpan.attr("style", member.cssStyle);
  }
  if (!isFirst) {
    tSpan.attr("dy", conf.textHeight);
  }
};
const svgDraw = {
  getClassTitleString,
  drawClass,
  drawEdge,
  drawNote
};
let idCache = {};
const padding = 20;
const getGraphId = function(label) {
  const foundEntry = Object.entries(idCache).find((entry) => entry[1].label === label);
  if (foundEntry) {
    return foundEntry[0];
  }
};
const insertMarkers = function(elem) {
  elem.append("defs").append("marker").attr("id", "extensionStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z");
  elem.append("defs").append("marker").attr("id", "extensionEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
  elem.append("defs").append("marker").attr("id", "compositionStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", "compositionEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", "aggregationStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", "aggregationEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", "dependencyStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
};
const draw = function(text, id, _version, diagObj) {
  const conf = index.getConfig().class;
  idCache = {};
  index.log$1.info("Rendering diagram " + text);
  const securityLevel = index.getConfig().securityLevel;
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = index.select("#i" + id);
  }
  const root = securityLevel === "sandbox" ? index.select(sandboxElement.nodes()[0].contentDocument.body) : index.select("body");
  const diagram2 = root.select(`[id='${id}']`);
  insertMarkers(diagram2);
  const g = new graph.Graph({
    multigraph: true
  });
  g.setGraph({
    isMultiGraph: true
  });
  g.setDefaultEdgeLabel(function() {
    return {};
  });
  const classes = diagObj.db.getClasses();
  const keys = Object.keys(classes);
  for (const key of keys) {
    const classDef = classes[key];
    const node = svgDraw.drawClass(diagram2, classDef, conf, diagObj);
    idCache[node.id] = node;
    g.setNode(node.id, node);
    index.log$1.info("Org height: " + node.height);
  }
  const relations = diagObj.db.getRelations();
  relations.forEach(function(relation) {
    index.log$1.info(
      // cspell:ignore tjoho
      "tjoho" + getGraphId(relation.id1) + getGraphId(relation.id2) + JSON.stringify(relation)
    );
    g.setEdge(
      getGraphId(relation.id1),
      getGraphId(relation.id2),
      {
        relation
      },
      relation.title || "DEFAULT"
    );
  });
  const notes = diagObj.db.getNotes();
  notes.forEach(function(note) {
    index.log$1.debug(`Adding note: ${JSON.stringify(note)}`);
    const node = svgDraw.drawNote(diagram2, note, conf, diagObj);
    idCache[node.id] = node;
    g.setNode(node.id, node);
    if (note.class && note.class in classes) {
      g.setEdge(
        note.id,
        getGraphId(note.class),
        {
          relation: {
            id1: note.id,
            id2: note.class,
            relation: {
              type1: "none",
              type2: "none",
              lineType: 10
            }
          }
        },
        "DEFAULT"
      );
    }
  });
  layout.layout(g);
  g.nodes().forEach(function(v) {
    if (v !== void 0 && g.node(v) !== void 0) {
      index.log$1.debug("Node " + v + ": " + JSON.stringify(g.node(v)));
      root.select("#" + (diagObj.db.lookUpDomId(v) || v)).attr(
        "transform",
        "translate(" + (g.node(v).x - g.node(v).width / 2) + "," + (g.node(v).y - g.node(v).height / 2) + " )"
      );
    }
  });
  g.edges().forEach(function(e) {
    if (e !== void 0 && g.edge(e) !== void 0) {
      index.log$1.debug("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(g.edge(e)));
      svgDraw.drawEdge(diagram2, g.edge(e), g.edge(e).relation, conf, diagObj);
    }
  });
  const svgBounds = diagram2.node().getBBox();
  const width = svgBounds.width + padding * 2;
  const height = svgBounds.height + padding * 2;
  index.configureSvgSize(diagram2, height, width, conf.useMaxWidth);
  const vBox = `${svgBounds.x - padding} ${svgBounds.y - padding} ${width} ${height}`;
  index.log$1.debug(`viewBox ${vBox}`);
  diagram2.attr("viewBox", vBox);
};
const renderer = {
  draw
};
const diagram = {
  parser: styles9a916d00.parser$1,
  db: styles9a916d00.db,
  renderer,
  styles: styles9a916d00.styles,
  init: (cnf) => {
    if (!cnf.class) {
      cnf.class = {};
    }
    cnf.class.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    styles9a916d00.db.clear();
  }
};

exports.diagram = diagram;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NEaWFncmFtLTcwZjEyYmQ0LThkN2NmZDVkLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvbWVybWFpZC9kaXN0L2NsYXNzRGlhZ3JhbS03MGYxMmJkNC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwIGFzIHBhcnNlciwgZCBhcyBkYiwgcyBhcyBzdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXMtOWE5MTZkMDAuanNcIjtcbmltcG9ydCB7IGxpbmUsIGN1cnZlQmFzaXMsIHNlbGVjdCB9IGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgbGF5b3V0IH0gZnJvbSBcImRhZ3JlLWQzLWVzL3NyYy9kYWdyZS9pbmRleC5qc1wiO1xuaW1wb3J0ICogYXMgZ3JhcGhsaWIgZnJvbSBcImRhZ3JlLWQzLWVzL3NyYy9ncmFwaGxpYi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgdSBhcyB1dGlscywgbCBhcyBsb2csIHggYXMgcGFyc2VHZW5lcmljVHlwZXMsIGMgYXMgZ2V0Q29uZmlnLCBpIGFzIGNvbmZpZ3VyZVN2Z1NpemUgfSBmcm9tIFwiLi9tZXJtYWlkLWI1ODYwYjU0LmpzXCI7XG5pbXBvcnQgXCJ0cy1kZWRlbnRcIjtcbmltcG9ydCBcImRheWpzXCI7XG5pbXBvcnQgXCJAYnJhaW50cmVlL3Nhbml0aXplLXVybFwiO1xuaW1wb3J0IFwiZG9tcHVyaWZ5XCI7XG5pbXBvcnQgXCJraHJvbWFcIjtcbmltcG9ydCBcImxvZGFzaC1lcy9tZW1vaXplLmpzXCI7XG5pbXBvcnQgXCJsb2Rhc2gtZXMvbWVyZ2UuanNcIjtcbmltcG9ydCBcInN0eWxpc1wiO1xuaW1wb3J0IFwibG9kYXNoLWVzL2lzRW1wdHkuanNcIjtcbmxldCBlZGdlQ291bnQgPSAwO1xuY29uc3QgZHJhd0VkZ2UgPSBmdW5jdGlvbihlbGVtLCBwYXRoLCByZWxhdGlvbiwgY29uZiwgZGlhZ09iaikge1xuICBjb25zdCBnZXRSZWxhdGlvblR5cGUgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIGRpYWdPYmouZGIucmVsYXRpb25UeXBlLkFHR1JFR0FUSU9OOlxuICAgICAgICByZXR1cm4gXCJhZ2dyZWdhdGlvblwiO1xuICAgICAgY2FzZSBkaWFnT2JqLmRiLnJlbGF0aW9uVHlwZS5FWFRFTlNJT046XG4gICAgICAgIHJldHVybiBcImV4dGVuc2lvblwiO1xuICAgICAgY2FzZSBkaWFnT2JqLmRiLnJlbGF0aW9uVHlwZS5DT01QT1NJVElPTjpcbiAgICAgICAgcmV0dXJuIFwiY29tcG9zaXRpb25cIjtcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5yZWxhdGlvblR5cGUuREVQRU5ERU5DWTpcbiAgICAgICAgcmV0dXJuIFwiZGVwZW5kZW5jeVwiO1xuICAgICAgY2FzZSBkaWFnT2JqLmRiLnJlbGF0aW9uVHlwZS5MT0xMSVBPUDpcbiAgICAgICAgcmV0dXJuIFwibG9sbGlwb3BcIjtcbiAgICB9XG4gIH07XG4gIHBhdGgucG9pbnRzID0gcGF0aC5wb2ludHMuZmlsdGVyKChwKSA9PiAhTnVtYmVyLmlzTmFOKHAueSkpO1xuICBjb25zdCBsaW5lRGF0YSA9IHBhdGgucG9pbnRzO1xuICBjb25zdCBsaW5lRnVuY3Rpb24gPSBsaW5lKCkueChmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGQueDtcbiAgfSkueShmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGQueTtcbiAgfSkuY3VydmUoY3VydmVCYXNpcyk7XG4gIGNvbnN0IHN2Z1BhdGggPSBlbGVtLmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgbGluZUZ1bmN0aW9uKGxpbmVEYXRhKSkuYXR0cihcImlkXCIsIFwiZWRnZVwiICsgZWRnZUNvdW50KS5hdHRyKFwiY2xhc3NcIiwgXCJyZWxhdGlvblwiKTtcbiAgbGV0IHVybCA9IFwiXCI7XG4gIGlmIChjb25mLmFycm93TWFya2VyQWJzb2x1dGUpIHtcbiAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgdXJsID0gdXJsLnJlcGxhY2UoL1xcKC9nLCBcIlxcXFwoXCIpO1xuICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXCkvZywgXCJcXFxcKVwiKTtcbiAgfVxuICBpZiAocmVsYXRpb24ucmVsYXRpb24ubGluZVR5cGUgPT0gMSkge1xuICAgIHN2Z1BhdGguYXR0cihcImNsYXNzXCIsIFwicmVsYXRpb24gZGFzaGVkLWxpbmVcIik7XG4gIH1cbiAgaWYgKHJlbGF0aW9uLnJlbGF0aW9uLmxpbmVUeXBlID09IDEwKSB7XG4gICAgc3ZnUGF0aC5hdHRyKFwiY2xhc3NcIiwgXCJyZWxhdGlvbiBkb3R0ZWQtbGluZVwiKTtcbiAgfVxuICBpZiAocmVsYXRpb24ucmVsYXRpb24udHlwZTEgIT09IFwibm9uZVwiKSB7XG4gICAgc3ZnUGF0aC5hdHRyKFxuICAgICAgXCJtYXJrZXItc3RhcnRcIixcbiAgICAgIFwidXJsKFwiICsgdXJsICsgXCIjXCIgKyBnZXRSZWxhdGlvblR5cGUocmVsYXRpb24ucmVsYXRpb24udHlwZTEpICsgXCJTdGFydClcIlxuICAgICk7XG4gIH1cbiAgaWYgKHJlbGF0aW9uLnJlbGF0aW9uLnR5cGUyICE9PSBcIm5vbmVcIikge1xuICAgIHN2Z1BhdGguYXR0cihcbiAgICAgIFwibWFya2VyLWVuZFwiLFxuICAgICAgXCJ1cmwoXCIgKyB1cmwgKyBcIiNcIiArIGdldFJlbGF0aW9uVHlwZShyZWxhdGlvbi5yZWxhdGlvbi50eXBlMikgKyBcIkVuZClcIlxuICAgICk7XG4gIH1cbiAgbGV0IHgsIHk7XG4gIGNvbnN0IGwgPSBwYXRoLnBvaW50cy5sZW5ndGg7XG4gIGxldCBsYWJlbFBvc2l0aW9uID0gdXRpbHMuY2FsY0xhYmVsUG9zaXRpb24ocGF0aC5wb2ludHMpO1xuICB4ID0gbGFiZWxQb3NpdGlvbi54O1xuICB5ID0gbGFiZWxQb3NpdGlvbi55O1xuICBsZXQgcDFfY2FyZF94LCBwMV9jYXJkX3k7XG4gIGxldCBwMl9jYXJkX3gsIHAyX2NhcmRfeTtcbiAgaWYgKGwgJSAyICE9PSAwICYmIGwgPiAxKSB7XG4gICAgbGV0IGNhcmRpbmFsaXR5XzFfcG9pbnQgPSB1dGlscy5jYWxjQ2FyZGluYWxpdHlQb3NpdGlvbihcbiAgICAgIHJlbGF0aW9uLnJlbGF0aW9uLnR5cGUxICE9PSBcIm5vbmVcIixcbiAgICAgIHBhdGgucG9pbnRzLFxuICAgICAgcGF0aC5wb2ludHNbMF1cbiAgICApO1xuICAgIGxldCBjYXJkaW5hbGl0eV8yX3BvaW50ID0gdXRpbHMuY2FsY0NhcmRpbmFsaXR5UG9zaXRpb24oXG4gICAgICByZWxhdGlvbi5yZWxhdGlvbi50eXBlMiAhPT0gXCJub25lXCIsXG4gICAgICBwYXRoLnBvaW50cyxcbiAgICAgIHBhdGgucG9pbnRzW2wgLSAxXVxuICAgICk7XG4gICAgbG9nLmRlYnVnKFwiY2FyZGluYWxpdHlfMV9wb2ludCBcIiArIEpTT04uc3RyaW5naWZ5KGNhcmRpbmFsaXR5XzFfcG9pbnQpKTtcbiAgICBsb2cuZGVidWcoXCJjYXJkaW5hbGl0eV8yX3BvaW50IFwiICsgSlNPTi5zdHJpbmdpZnkoY2FyZGluYWxpdHlfMl9wb2ludCkpO1xuICAgIHAxX2NhcmRfeCA9IGNhcmRpbmFsaXR5XzFfcG9pbnQueDtcbiAgICBwMV9jYXJkX3kgPSBjYXJkaW5hbGl0eV8xX3BvaW50Lnk7XG4gICAgcDJfY2FyZF94ID0gY2FyZGluYWxpdHlfMl9wb2ludC54O1xuICAgIHAyX2NhcmRfeSA9IGNhcmRpbmFsaXR5XzJfcG9pbnQueTtcbiAgfVxuICBpZiAocmVsYXRpb24udGl0bGUgIT09IHZvaWQgMCkge1xuICAgIGNvbnN0IGcgPSBlbGVtLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiY2xhc3NMYWJlbFwiKTtcbiAgICBjb25zdCBsYWJlbCA9IGcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbFwiKS5hdHRyKFwieFwiLCB4KS5hdHRyKFwieVwiLCB5KS5hdHRyKFwiZmlsbFwiLCBcInJlZFwiKS5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIikudGV4dChyZWxhdGlvbi50aXRsZSk7XG4gICAgd2luZG93LmxhYmVsID0gbGFiZWw7XG4gICAgY29uc3QgYm91bmRzID0gbGFiZWwubm9kZSgpLmdldEJCb3goKTtcbiAgICBnLmluc2VydChcInJlY3RcIiwgXCI6Zmlyc3QtY2hpbGRcIikuYXR0cihcImNsYXNzXCIsIFwiYm94XCIpLmF0dHIoXCJ4XCIsIGJvdW5kcy54IC0gY29uZi5wYWRkaW5nIC8gMikuYXR0cihcInlcIiwgYm91bmRzLnkgLSBjb25mLnBhZGRpbmcgLyAyKS5hdHRyKFwid2lkdGhcIiwgYm91bmRzLndpZHRoICsgY29uZi5wYWRkaW5nKS5hdHRyKFwiaGVpZ2h0XCIsIGJvdW5kcy5oZWlnaHQgKyBjb25mLnBhZGRpbmcpO1xuICB9XG4gIGxvZy5pbmZvKFwiUmVuZGVyaW5nIHJlbGF0aW9uIFwiICsgSlNPTi5zdHJpbmdpZnkocmVsYXRpb24pKTtcbiAgaWYgKHJlbGF0aW9uLnJlbGF0aW9uVGl0bGUxICE9PSB2b2lkIDAgJiYgcmVsYXRpb24ucmVsYXRpb25UaXRsZTEgIT09IFwibm9uZVwiKSB7XG4gICAgY29uc3QgZyA9IGVsZW0uYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJjYXJkaW5hbGl0eVwiKTtcbiAgICBnLmFwcGVuZChcInRleHRcIikuYXR0cihcImNsYXNzXCIsIFwidHlwZTFcIikuYXR0cihcInhcIiwgcDFfY2FyZF94KS5hdHRyKFwieVwiLCBwMV9jYXJkX3kpLmF0dHIoXCJmaWxsXCIsIFwiYmxhY2tcIikuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjZcIikudGV4dChyZWxhdGlvbi5yZWxhdGlvblRpdGxlMSk7XG4gIH1cbiAgaWYgKHJlbGF0aW9uLnJlbGF0aW9uVGl0bGUyICE9PSB2b2lkIDAgJiYgcmVsYXRpb24ucmVsYXRpb25UaXRsZTIgIT09IFwibm9uZVwiKSB7XG4gICAgY29uc3QgZyA9IGVsZW0uYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJjYXJkaW5hbGl0eVwiKTtcbiAgICBnLmFwcGVuZChcInRleHRcIikuYXR0cihcImNsYXNzXCIsIFwidHlwZTJcIikuYXR0cihcInhcIiwgcDJfY2FyZF94KS5hdHRyKFwieVwiLCBwMl9jYXJkX3kpLmF0dHIoXCJmaWxsXCIsIFwiYmxhY2tcIikuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjZcIikudGV4dChyZWxhdGlvbi5yZWxhdGlvblRpdGxlMik7XG4gIH1cbiAgZWRnZUNvdW50Kys7XG59O1xuY29uc3QgZHJhd0NsYXNzID0gZnVuY3Rpb24oZWxlbSwgY2xhc3NEZWYsIGNvbmYsIGRpYWdPYmopIHtcbiAgbG9nLmRlYnVnKFwiUmVuZGVyaW5nIGNsYXNzIFwiLCBjbGFzc0RlZiwgY29uZik7XG4gIGNvbnN0IGlkID0gY2xhc3NEZWYuaWQ7XG4gIGNvbnN0IGNsYXNzSW5mbyA9IHtcbiAgICBpZCxcbiAgICBsYWJlbDogY2xhc3NEZWYuaWQsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwXG4gIH07XG4gIGNvbnN0IGcgPSBlbGVtLmFwcGVuZChcImdcIikuYXR0cihcImlkXCIsIGRpYWdPYmouZGIubG9va1VwRG9tSWQoaWQpKS5hdHRyKFwiY2xhc3NcIiwgXCJjbGFzc0dyb3VwXCIpO1xuICBsZXQgdGl0bGU7XG4gIGlmIChjbGFzc0RlZi5saW5rKSB7XG4gICAgdGl0bGUgPSBnLmFwcGVuZChcInN2ZzphXCIpLmF0dHIoXCJ4bGluazpocmVmXCIsIGNsYXNzRGVmLmxpbmspLmF0dHIoXCJ0YXJnZXRcIiwgY2xhc3NEZWYubGlua1RhcmdldCkuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieVwiLCBjb25mLnRleHRIZWlnaHQgKyBjb25mLnBhZGRpbmcpLmF0dHIoXCJ4XCIsIDApO1xuICB9IGVsc2Uge1xuICAgIHRpdGxlID0gZy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ5XCIsIGNvbmYudGV4dEhlaWdodCArIGNvbmYucGFkZGluZykuYXR0cihcInhcIiwgMCk7XG4gIH1cbiAgbGV0IGlzRmlyc3QgPSB0cnVlO1xuICBjbGFzc0RlZi5hbm5vdGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG1lbWJlcikge1xuICAgIGNvbnN0IHRpdGxlVGV4dDIgPSB0aXRsZS5hcHBlbmQoXCJ0c3BhblwiKS50ZXh0KFwiwqtcIiArIG1lbWJlciArIFwiwrtcIik7XG4gICAgaWYgKCFpc0ZpcnN0KSB7XG4gICAgICB0aXRsZVRleHQyLmF0dHIoXCJkeVwiLCBjb25mLnRleHRIZWlnaHQpO1xuICAgIH1cbiAgICBpc0ZpcnN0ID0gZmFsc2U7XG4gIH0pO1xuICBsZXQgY2xhc3NUaXRsZVN0cmluZyA9IGdldENsYXNzVGl0bGVTdHJpbmcoY2xhc3NEZWYpO1xuICBjb25zdCBjbGFzc1RpdGxlID0gdGl0bGUuYXBwZW5kKFwidHNwYW5cIikudGV4dChjbGFzc1RpdGxlU3RyaW5nKS5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZVwiKTtcbiAgaWYgKCFpc0ZpcnN0KSB7XG4gICAgY2xhc3NUaXRsZS5hdHRyKFwiZHlcIiwgY29uZi50ZXh0SGVpZ2h0KTtcbiAgfVxuICBjb25zdCB0aXRsZUhlaWdodCA9IHRpdGxlLm5vZGUoKS5nZXRCQm94KCkuaGVpZ2h0O1xuICBsZXQgbWVtYmVyc0xpbmU7XG4gIGxldCBtZW1iZXJzQm94O1xuICBsZXQgbWV0aG9kc0xpbmU7XG4gIGlmIChjbGFzc0RlZi5tZW1iZXJzLmxlbmd0aCA+IDApIHtcbiAgICBtZW1iZXJzTGluZSA9IGcuYXBwZW5kKFwibGluZVwiKS5hdHRyKFwieDFcIiwgMCkuYXR0cihcInkxXCIsIGNvbmYucGFkZGluZyArIHRpdGxlSGVpZ2h0ICsgY29uZi5kaXZpZGVyTWFyZ2luIC8gMikuYXR0cihcInkyXCIsIGNvbmYucGFkZGluZyArIHRpdGxlSGVpZ2h0ICsgY29uZi5kaXZpZGVyTWFyZ2luIC8gMik7XG4gICAgY29uc3QgbWVtYmVycyA9IGcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCBjb25mLnBhZGRpbmcpLmF0dHIoXCJ5XCIsIHRpdGxlSGVpZ2h0ICsgY29uZi5kaXZpZGVyTWFyZ2luICsgY29uZi50ZXh0SGVpZ2h0KS5hdHRyKFwiZmlsbFwiLCBcIndoaXRlXCIpLmF0dHIoXCJjbGFzc1wiLCBcImNsYXNzVGV4dFwiKTtcbiAgICBpc0ZpcnN0ID0gdHJ1ZTtcbiAgICBjbGFzc0RlZi5tZW1iZXJzLmZvckVhY2goZnVuY3Rpb24obWVtYmVyKSB7XG4gICAgICBhZGRUc3BhbihtZW1iZXJzLCBtZW1iZXIsIGlzRmlyc3QsIGNvbmYpO1xuICAgICAgaXNGaXJzdCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIG1lbWJlcnNCb3ggPSBtZW1iZXJzLm5vZGUoKS5nZXRCQm94KCk7XG4gIH1cbiAgaWYgKGNsYXNzRGVmLm1ldGhvZHMubGVuZ3RoID4gMCkge1xuICAgIG1ldGhvZHNMaW5lID0gZy5hcHBlbmQoXCJsaW5lXCIpLmF0dHIoXCJ4MVwiLCAwKS5hdHRyKFwieTFcIiwgY29uZi5wYWRkaW5nICsgdGl0bGVIZWlnaHQgKyBjb25mLmRpdmlkZXJNYXJnaW4gKyBtZW1iZXJzQm94LmhlaWdodCkuYXR0cihcInkyXCIsIGNvbmYucGFkZGluZyArIHRpdGxlSGVpZ2h0ICsgY29uZi5kaXZpZGVyTWFyZ2luICsgbWVtYmVyc0JveC5oZWlnaHQpO1xuICAgIGNvbnN0IG1ldGhvZHMgPSBnLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgY29uZi5wYWRkaW5nKS5hdHRyKFwieVwiLCB0aXRsZUhlaWdodCArIDIgKiBjb25mLmRpdmlkZXJNYXJnaW4gKyBtZW1iZXJzQm94LmhlaWdodCArIGNvbmYudGV4dEhlaWdodCkuYXR0cihcImZpbGxcIiwgXCJ3aGl0ZVwiKS5hdHRyKFwiY2xhc3NcIiwgXCJjbGFzc1RleHRcIik7XG4gICAgaXNGaXJzdCA9IHRydWU7XG4gICAgY2xhc3NEZWYubWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgYWRkVHNwYW4obWV0aG9kcywgbWV0aG9kLCBpc0ZpcnN0LCBjb25mKTtcbiAgICAgIGlzRmlyc3QgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBjbGFzc0JveCA9IGcubm9kZSgpLmdldEJCb3goKTtcbiAgdmFyIGNzc0NsYXNzU3RyID0gXCIgXCI7XG4gIGlmIChjbGFzc0RlZi5jc3NDbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICBjc3NDbGFzc1N0ciA9IGNzc0NsYXNzU3RyICsgY2xhc3NEZWYuY3NzQ2xhc3Nlcy5qb2luKFwiIFwiKTtcbiAgfVxuICBjb25zdCByZWN0ID0gZy5pbnNlcnQoXCJyZWN0XCIsIFwiOmZpcnN0LWNoaWxkXCIpLmF0dHIoXCJ4XCIsIDApLmF0dHIoXCJ5XCIsIDApLmF0dHIoXCJ3aWR0aFwiLCBjbGFzc0JveC53aWR0aCArIDIgKiBjb25mLnBhZGRpbmcpLmF0dHIoXCJoZWlnaHRcIiwgY2xhc3NCb3guaGVpZ2h0ICsgY29uZi5wYWRkaW5nICsgMC41ICogY29uZi5kaXZpZGVyTWFyZ2luKS5hdHRyKFwiY2xhc3NcIiwgY3NzQ2xhc3NTdHIpO1xuICBjb25zdCByZWN0V2lkdGggPSByZWN0Lm5vZGUoKS5nZXRCQm94KCkud2lkdGg7XG4gIHRpdGxlLm5vZGUoKS5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24oeCkge1xuICAgIHguc2V0QXR0cmlidXRlKFwieFwiLCAocmVjdFdpZHRoIC0geC5nZXRCQm94KCkud2lkdGgpIC8gMik7XG4gIH0pO1xuICBpZiAoY2xhc3NEZWYudG9vbHRpcCkge1xuICAgIHRpdGxlLmluc2VydChcInRpdGxlXCIpLnRleHQoY2xhc3NEZWYudG9vbHRpcCk7XG4gIH1cbiAgaWYgKG1lbWJlcnNMaW5lKSB7XG4gICAgbWVtYmVyc0xpbmUuYXR0cihcIngyXCIsIHJlY3RXaWR0aCk7XG4gIH1cbiAgaWYgKG1ldGhvZHNMaW5lKSB7XG4gICAgbWV0aG9kc0xpbmUuYXR0cihcIngyXCIsIHJlY3RXaWR0aCk7XG4gIH1cbiAgY2xhc3NJbmZvLndpZHRoID0gcmVjdFdpZHRoO1xuICBjbGFzc0luZm8uaGVpZ2h0ID0gY2xhc3NCb3guaGVpZ2h0ICsgY29uZi5wYWRkaW5nICsgMC41ICogY29uZi5kaXZpZGVyTWFyZ2luO1xuICByZXR1cm4gY2xhc3NJbmZvO1xufTtcbmNvbnN0IGdldENsYXNzVGl0bGVTdHJpbmcgPSBmdW5jdGlvbihjbGFzc0RlZikge1xuICBsZXQgY2xhc3NUaXRsZVN0cmluZyA9IGNsYXNzRGVmLmlkO1xuICBpZiAoY2xhc3NEZWYudHlwZSkge1xuICAgIGNsYXNzVGl0bGVTdHJpbmcgKz0gXCI8XCIgKyBwYXJzZUdlbmVyaWNUeXBlcyhjbGFzc0RlZi50eXBlKSArIFwiPlwiO1xuICB9XG4gIHJldHVybiBjbGFzc1RpdGxlU3RyaW5nO1xufTtcbmNvbnN0IGRyYXdOb3RlID0gZnVuY3Rpb24oZWxlbSwgbm90ZSwgY29uZiwgZGlhZ09iaikge1xuICBsb2cuZGVidWcoXCJSZW5kZXJpbmcgbm90ZSBcIiwgbm90ZSwgY29uZik7XG4gIGNvbnN0IGlkID0gbm90ZS5pZDtcbiAgY29uc3Qgbm90ZUluZm8gPSB7XG4gICAgaWQsXG4gICAgdGV4dDogbm90ZS50ZXh0LFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9O1xuICBjb25zdCBnID0gZWxlbS5hcHBlbmQoXCJnXCIpLmF0dHIoXCJpZFwiLCBpZCkuYXR0cihcImNsYXNzXCIsIFwiY2xhc3NHcm91cFwiKTtcbiAgbGV0IHRleHQgPSBnLmFwcGVuZChcInRleHRcIikuYXR0cihcInlcIiwgY29uZi50ZXh0SGVpZ2h0ICsgY29uZi5wYWRkaW5nKS5hdHRyKFwieFwiLCAwKTtcbiAgY29uc3QgbGluZXMgPSBKU09OLnBhcnNlKGBcIiR7bm90ZS50ZXh0fVwiYCkuc3BsaXQoXCJcXG5cIik7XG4gIGxpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZTIpIHtcbiAgICBsb2cuZGVidWcoYEFkZGluZyBsaW5lOiAke2xpbmUyfWApO1xuICAgIHRleHQuYXBwZW5kKFwidHNwYW5cIikudGV4dChsaW5lMikuYXR0cihcImNsYXNzXCIsIFwidGl0bGVcIikuYXR0cihcImR5XCIsIGNvbmYudGV4dEhlaWdodCk7XG4gIH0pO1xuICBjb25zdCBub3RlQm94ID0gZy5ub2RlKCkuZ2V0QkJveCgpO1xuICBjb25zdCByZWN0ID0gZy5pbnNlcnQoXCJyZWN0XCIsIFwiOmZpcnN0LWNoaWxkXCIpLmF0dHIoXCJ4XCIsIDApLmF0dHIoXCJ5XCIsIDApLmF0dHIoXCJ3aWR0aFwiLCBub3RlQm94LndpZHRoICsgMiAqIGNvbmYucGFkZGluZykuYXR0cihcbiAgICBcImhlaWdodFwiLFxuICAgIG5vdGVCb3guaGVpZ2h0ICsgbGluZXMubGVuZ3RoICogY29uZi50ZXh0SGVpZ2h0ICsgY29uZi5wYWRkaW5nICsgMC41ICogY29uZi5kaXZpZGVyTWFyZ2luXG4gICk7XG4gIGNvbnN0IHJlY3RXaWR0aCA9IHJlY3Qubm9kZSgpLmdldEJCb3goKS53aWR0aDtcbiAgdGV4dC5ub2RlKCkuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKHgpIHtcbiAgICB4LnNldEF0dHJpYnV0ZShcInhcIiwgKHJlY3RXaWR0aCAtIHguZ2V0QkJveCgpLndpZHRoKSAvIDIpO1xuICB9KTtcbiAgbm90ZUluZm8ud2lkdGggPSByZWN0V2lkdGg7XG4gIG5vdGVJbmZvLmhlaWdodCA9IG5vdGVCb3guaGVpZ2h0ICsgbGluZXMubGVuZ3RoICogY29uZi50ZXh0SGVpZ2h0ICsgY29uZi5wYWRkaW5nICsgMC41ICogY29uZi5kaXZpZGVyTWFyZ2luO1xuICByZXR1cm4gbm90ZUluZm87XG59O1xuY29uc3QgYWRkVHNwYW4gPSBmdW5jdGlvbih0ZXh0RWwsIG1lbWJlciwgaXNGaXJzdCwgY29uZikge1xuICBjb25zdCB7IGRpc3BsYXlUZXh0LCBjc3NTdHlsZSB9ID0gbWVtYmVyLmdldERpc3BsYXlEZXRhaWxzKCk7XG4gIGNvbnN0IHRTcGFuID0gdGV4dEVsLmFwcGVuZChcInRzcGFuXCIpLmF0dHIoXCJ4XCIsIGNvbmYucGFkZGluZykudGV4dChkaXNwbGF5VGV4dCk7XG4gIGlmIChjc3NTdHlsZSAhPT0gXCJcIikge1xuICAgIHRTcGFuLmF0dHIoXCJzdHlsZVwiLCBtZW1iZXIuY3NzU3R5bGUpO1xuICB9XG4gIGlmICghaXNGaXJzdCkge1xuICAgIHRTcGFuLmF0dHIoXCJkeVwiLCBjb25mLnRleHRIZWlnaHQpO1xuICB9XG59O1xuY29uc3Qgc3ZnRHJhdyA9IHtcbiAgZ2V0Q2xhc3NUaXRsZVN0cmluZyxcbiAgZHJhd0NsYXNzLFxuICBkcmF3RWRnZSxcbiAgZHJhd05vdGVcbn07XG5sZXQgaWRDYWNoZSA9IHt9O1xuY29uc3QgcGFkZGluZyA9IDIwO1xuY29uc3QgZ2V0R3JhcGhJZCA9IGZ1bmN0aW9uKGxhYmVsKSB7XG4gIGNvbnN0IGZvdW5kRW50cnkgPSBPYmplY3QuZW50cmllcyhpZENhY2hlKS5maW5kKChlbnRyeSkgPT4gZW50cnlbMV0ubGFiZWwgPT09IGxhYmVsKTtcbiAgaWYgKGZvdW5kRW50cnkpIHtcbiAgICByZXR1cm4gZm91bmRFbnRyeVswXTtcbiAgfVxufTtcbmNvbnN0IGluc2VydE1hcmtlcnMgPSBmdW5jdGlvbihlbGVtKSB7XG4gIGVsZW0uYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIFwiZXh0ZW5zaW9uU3RhcnRcIikuYXR0cihcImNsYXNzXCIsIFwiZXh0ZW5zaW9uXCIpLmF0dHIoXCJyZWZYXCIsIDApLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAxOTApLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMjQwKS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSAxLDcgTDE4LDEzIFYgMSBaXCIpO1xuICBlbGVtLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBcImV4dGVuc2lvbkVuZFwiKS5hdHRyKFwicmVmWFwiLCAxOSkuYXR0cihcInJlZllcIiwgNykuYXR0cihcIm1hcmtlcldpZHRoXCIsIDIwKS5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDI4KS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSAxLDEgViAxMyBMMTgsNyBaXCIpO1xuICBlbGVtLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBcImNvbXBvc2l0aW9uU3RhcnRcIikuYXR0cihcImNsYXNzXCIsIFwiZXh0ZW5zaW9uXCIpLmF0dHIoXCJyZWZYXCIsIDApLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAxOTApLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMjQwKS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSAxOCw3IEw5LDEzIEwxLDcgTDksMSBaXCIpO1xuICBlbGVtLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBcImNvbXBvc2l0aW9uRW5kXCIpLmF0dHIoXCJyZWZYXCIsIDE5KS5hdHRyKFwicmVmWVwiLCA3KS5hdHRyKFwibWFya2VyV2lkdGhcIiwgMjApLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMjgpLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpLmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgXCJNIDE4LDcgTDksMTMgTDEsNyBMOSwxIFpcIik7XG4gIGVsZW0uYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIFwiYWdncmVnYXRpb25TdGFydFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJleHRlbnNpb25cIikuYXR0cihcInJlZlhcIiwgMCkuYXR0cihcInJlZllcIiwgNykuYXR0cihcIm1hcmtlcldpZHRoXCIsIDE5MCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAyNDApLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpLmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgXCJNIDE4LDcgTDksMTMgTDEsNyBMOSwxIFpcIik7XG4gIGVsZW0uYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIFwiYWdncmVnYXRpb25FbmRcIikuYXR0cihcInJlZlhcIiwgMTkpLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAyMCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAyOCkuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBcIk0gMTgsNyBMOSwxMyBMMSw3IEw5LDEgWlwiKTtcbiAgZWxlbS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgXCJkZXBlbmRlbmN5U3RhcnRcIikuYXR0cihcImNsYXNzXCIsIFwiZXh0ZW5zaW9uXCIpLmF0dHIoXCJyZWZYXCIsIDApLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAxOTApLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMjQwKS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSA1LDcgTDksMTMgTDEsNyBMOSwxIFpcIik7XG4gIGVsZW0uYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIFwiZGVwZW5kZW5jeUVuZFwiKS5hdHRyKFwicmVmWFwiLCAxOSkuYXR0cihcInJlZllcIiwgNykuYXR0cihcIm1hcmtlcldpZHRoXCIsIDIwKS5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDI4KS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSAxOCw3IEw5LDEzIEwxNCw3IEw5LDEgWlwiKTtcbn07XG5jb25zdCBkcmF3ID0gZnVuY3Rpb24odGV4dCwgaWQsIF92ZXJzaW9uLCBkaWFnT2JqKSB7XG4gIGNvbnN0IGNvbmYgPSBnZXRDb25maWcoKS5jbGFzcztcbiAgaWRDYWNoZSA9IHt9O1xuICBsb2cuaW5mbyhcIlJlbmRlcmluZyBkaWFncmFtIFwiICsgdGV4dCk7XG4gIGNvbnN0IHNlY3VyaXR5TGV2ZWwgPSBnZXRDb25maWcoKS5zZWN1cml0eUxldmVsO1xuICBsZXQgc2FuZGJveEVsZW1lbnQ7XG4gIGlmIChzZWN1cml0eUxldmVsID09PSBcInNhbmRib3hcIikge1xuICAgIHNhbmRib3hFbGVtZW50ID0gc2VsZWN0KFwiI2lcIiArIGlkKTtcbiAgfVxuICBjb25zdCByb290ID0gc2VjdXJpdHlMZXZlbCA9PT0gXCJzYW5kYm94XCIgPyBzZWxlY3Qoc2FuZGJveEVsZW1lbnQubm9kZXMoKVswXS5jb250ZW50RG9jdW1lbnQuYm9keSkgOiBzZWxlY3QoXCJib2R5XCIpO1xuICBjb25zdCBkaWFncmFtMiA9IHJvb3Quc2VsZWN0KGBbaWQ9JyR7aWR9J11gKTtcbiAgaW5zZXJ0TWFya2VycyhkaWFncmFtMik7XG4gIGNvbnN0IGcgPSBuZXcgZ3JhcGhsaWIuR3JhcGgoe1xuICAgIG11bHRpZ3JhcGg6IHRydWVcbiAgfSk7XG4gIGcuc2V0R3JhcGgoe1xuICAgIGlzTXVsdGlHcmFwaDogdHJ1ZVxuICB9KTtcbiAgZy5zZXREZWZhdWx0RWRnZUxhYmVsKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSk7XG4gIGNvbnN0IGNsYXNzZXMgPSBkaWFnT2JqLmRiLmdldENsYXNzZXMoKTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNsYXNzZXMpO1xuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgY29uc3QgY2xhc3NEZWYgPSBjbGFzc2VzW2tleV07XG4gICAgY29uc3Qgbm9kZSA9IHN2Z0RyYXcuZHJhd0NsYXNzKGRpYWdyYW0yLCBjbGFzc0RlZiwgY29uZiwgZGlhZ09iaik7XG4gICAgaWRDYWNoZVtub2RlLmlkXSA9IG5vZGU7XG4gICAgZy5zZXROb2RlKG5vZGUuaWQsIG5vZGUpO1xuICAgIGxvZy5pbmZvKFwiT3JnIGhlaWdodDogXCIgKyBub2RlLmhlaWdodCk7XG4gIH1cbiAgY29uc3QgcmVsYXRpb25zID0gZGlhZ09iai5kYi5nZXRSZWxhdGlvbnMoKTtcbiAgcmVsYXRpb25zLmZvckVhY2goZnVuY3Rpb24ocmVsYXRpb24pIHtcbiAgICBsb2cuaW5mbyhcbiAgICAgIC8vIGNzcGVsbDppZ25vcmUgdGpvaG9cbiAgICAgIFwidGpvaG9cIiArIGdldEdyYXBoSWQocmVsYXRpb24uaWQxKSArIGdldEdyYXBoSWQocmVsYXRpb24uaWQyKSArIEpTT04uc3RyaW5naWZ5KHJlbGF0aW9uKVxuICAgICk7XG4gICAgZy5zZXRFZGdlKFxuICAgICAgZ2V0R3JhcGhJZChyZWxhdGlvbi5pZDEpLFxuICAgICAgZ2V0R3JhcGhJZChyZWxhdGlvbi5pZDIpLFxuICAgICAge1xuICAgICAgICByZWxhdGlvblxuICAgICAgfSxcbiAgICAgIHJlbGF0aW9uLnRpdGxlIHx8IFwiREVGQVVMVFwiXG4gICAgKTtcbiAgfSk7XG4gIGNvbnN0IG5vdGVzID0gZGlhZ09iai5kYi5nZXROb3RlcygpO1xuICBub3Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG5vdGUpIHtcbiAgICBsb2cuZGVidWcoYEFkZGluZyBub3RlOiAke0pTT04uc3RyaW5naWZ5KG5vdGUpfWApO1xuICAgIGNvbnN0IG5vZGUgPSBzdmdEcmF3LmRyYXdOb3RlKGRpYWdyYW0yLCBub3RlLCBjb25mLCBkaWFnT2JqKTtcbiAgICBpZENhY2hlW25vZGUuaWRdID0gbm9kZTtcbiAgICBnLnNldE5vZGUobm9kZS5pZCwgbm9kZSk7XG4gICAgaWYgKG5vdGUuY2xhc3MgJiYgbm90ZS5jbGFzcyBpbiBjbGFzc2VzKSB7XG4gICAgICBnLnNldEVkZ2UoXG4gICAgICAgIG5vdGUuaWQsXG4gICAgICAgIGdldEdyYXBoSWQobm90ZS5jbGFzcyksXG4gICAgICAgIHtcbiAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgaWQxOiBub3RlLmlkLFxuICAgICAgICAgICAgaWQyOiBub3RlLmNsYXNzLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgdHlwZTE6IFwibm9uZVwiLFxuICAgICAgICAgICAgICB0eXBlMjogXCJub25lXCIsXG4gICAgICAgICAgICAgIGxpbmVUeXBlOiAxMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJERUZBVUxUXCJcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbiAgbGF5b3V0KGcpO1xuICBnLm5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbih2KSB7XG4gICAgaWYgKHYgIT09IHZvaWQgMCAmJiBnLm5vZGUodikgIT09IHZvaWQgMCkge1xuICAgICAgbG9nLmRlYnVnKFwiTm9kZSBcIiArIHYgKyBcIjogXCIgKyBKU09OLnN0cmluZ2lmeShnLm5vZGUodikpKTtcbiAgICAgIHJvb3Quc2VsZWN0KFwiI1wiICsgKGRpYWdPYmouZGIubG9va1VwRG9tSWQodikgfHwgdikpLmF0dHIoXG4gICAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICAgIFwidHJhbnNsYXRlKFwiICsgKGcubm9kZSh2KS54IC0gZy5ub2RlKHYpLndpZHRoIC8gMikgKyBcIixcIiArIChnLm5vZGUodikueSAtIGcubm9kZSh2KS5oZWlnaHQgLyAyKSArIFwiIClcIlxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuICBnLmVkZ2VzKCkuZm9yRWFjaChmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUgIT09IHZvaWQgMCAmJiBnLmVkZ2UoZSkgIT09IHZvaWQgMCkge1xuICAgICAgbG9nLmRlYnVnKFwiRWRnZSBcIiArIGUudiArIFwiIC0+IFwiICsgZS53ICsgXCI6IFwiICsgSlNPTi5zdHJpbmdpZnkoZy5lZGdlKGUpKSk7XG4gICAgICBzdmdEcmF3LmRyYXdFZGdlKGRpYWdyYW0yLCBnLmVkZ2UoZSksIGcuZWRnZShlKS5yZWxhdGlvbiwgY29uZiwgZGlhZ09iaik7XG4gICAgfVxuICB9KTtcbiAgY29uc3Qgc3ZnQm91bmRzID0gZGlhZ3JhbTIubm9kZSgpLmdldEJCb3goKTtcbiAgY29uc3Qgd2lkdGggPSBzdmdCb3VuZHMud2lkdGggKyBwYWRkaW5nICogMjtcbiAgY29uc3QgaGVpZ2h0ID0gc3ZnQm91bmRzLmhlaWdodCArIHBhZGRpbmcgKiAyO1xuICBjb25maWd1cmVTdmdTaXplKGRpYWdyYW0yLCBoZWlnaHQsIHdpZHRoLCBjb25mLnVzZU1heFdpZHRoKTtcbiAgY29uc3QgdkJveCA9IGAke3N2Z0JvdW5kcy54IC0gcGFkZGluZ30gJHtzdmdCb3VuZHMueSAtIHBhZGRpbmd9ICR7d2lkdGh9ICR7aGVpZ2h0fWA7XG4gIGxvZy5kZWJ1Zyhgdmlld0JveCAke3ZCb3h9YCk7XG4gIGRpYWdyYW0yLmF0dHIoXCJ2aWV3Qm94XCIsIHZCb3gpO1xufTtcbmNvbnN0IHJlbmRlcmVyID0ge1xuICBkcmF3XG59O1xuY29uc3QgZGlhZ3JhbSA9IHtcbiAgcGFyc2VyLFxuICBkYixcbiAgcmVuZGVyZXIsXG4gIHN0eWxlcyxcbiAgaW5pdDogKGNuZikgPT4ge1xuICAgIGlmICghY25mLmNsYXNzKSB7XG4gICAgICBjbmYuY2xhc3MgPSB7fTtcbiAgICB9XG4gICAgY25mLmNsYXNzLmFycm93TWFya2VyQWJzb2x1dGUgPSBjbmYuYXJyb3dNYXJrZXJBYnNvbHV0ZTtcbiAgICBkYi5jbGVhcigpO1xuICB9XG59O1xuZXhwb3J0IHtcbiAgZGlhZ3JhbVxufTtcbiJdLCJuYW1lcyI6WyJsaW5lIiwiY3VydmVCYXNpcyIsInV0aWxzIiwibG9nIiwicGFyc2VHZW5lcmljVHlwZXMiLCJnZXRDb25maWciLCJzZWxlY3QiLCJncmFwaGxpYi5HcmFwaCIsImxheW91dCIsImNvbmZpZ3VyZVN2Z1NpemUiLCJwYXJzZXIiLCJkYiIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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QUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztBQUNsTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0FBQ2hRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0FBQ2xPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLHlCQUF5QixDQUFDLENBQUM7QUFDOVAsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0FBQ2xPLENBQUMsQ0FBQztBQUNGLE1BQU0sSUFBSSxHQUFHLFNBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBQ25ELEVBQUUsTUFBTSxJQUFJLEdBQUdFLGVBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQztBQUNqQyxFQUFFLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDZixFQUFFRixXQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3hDLEVBQUUsTUFBTSxhQUFhLEdBQUdFLGVBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztBQUNsRCxFQUFFLElBQUksY0FBYyxDQUFDO0FBQ3JCLEVBQUUsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFO0FBQ25DLElBQUksY0FBYyxHQUFHQyxZQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZDLEdBQUc7QUFDSCxFQUFFLE1BQU0sSUFBSSxHQUFHLGFBQWEsS0FBSyxTQUFTLEdBQUdBLFlBQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHQSxZQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckgsRUFBRSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9DLEVBQUUsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFCLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSUMsV0FBYyxDQUFDO0FBQy9CLElBQUksVUFBVSxFQUFFLElBQUk7QUFDcEIsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFDYixJQUFJLFlBQVksRUFBRSxJQUFJO0FBQ3RCLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsRUFBRSxDQUFDLENBQUMsbUJBQW1CLENBQUMsV0FBVztBQUNuQyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2QsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDMUMsRUFBRSxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BDLEVBQUUsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFDMUIsSUFBSSxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEMsSUFBSSxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDNUIsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0IsSUFBSUosV0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLEdBQUc7QUFDSCxFQUFFLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDOUMsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsUUFBUSxFQUFFO0FBQ3ZDLElBQUlBLFdBQUcsQ0FBQyxJQUFJO0FBQ1o7QUFDQSxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDOUYsS0FBSyxDQUFDO0FBQ04sSUFBSSxDQUFDLENBQUMsT0FBTztBQUNiLE1BQU0sVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7QUFDOUIsTUFBTSxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztBQUM5QixNQUFNO0FBQ04sUUFBUSxRQUFRO0FBQ2hCLE9BQU87QUFDUCxNQUFNLFFBQVEsQ0FBQyxLQUFLLElBQUksU0FBUztBQUNqQyxLQUFLLENBQUM7QUFDTixHQUFHLENBQUMsQ0FBQztBQUNMLEVBQUUsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN0QyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLEVBQUU7QUFDL0IsSUFBSUEsV0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RELElBQUksTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNqRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQzVCLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdCLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxFQUFFO0FBQzdDLE1BQU0sQ0FBQyxDQUFDLE9BQU87QUFDZixRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2YsUUFBUSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUM5QixRQUFRO0FBQ1IsVUFBVSxRQUFRLEVBQUU7QUFDcEIsWUFBWSxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUU7QUFDeEIsWUFBWSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUs7QUFDM0IsWUFBWSxRQUFRLEVBQUU7QUFDdEIsY0FBYyxLQUFLLEVBQUUsTUFBTTtBQUMzQixjQUFjLEtBQUssRUFBRSxNQUFNO0FBQzNCLGNBQWMsUUFBUSxFQUFFLEVBQUU7QUFDMUIsYUFBYTtBQUNiLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxTQUFTO0FBQ2pCLE9BQU8sQ0FBQztBQUNSLEtBQUs7QUFDTCxHQUFHLENBQUMsQ0FBQztBQUNMLEVBQUVLLGFBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNaLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUNoQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7QUFDOUMsTUFBTUwsV0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO0FBQzlELFFBQVEsV0FBVztBQUNuQixRQUFRLFlBQVksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSTtBQUM5RyxPQUFPLENBQUM7QUFDUixLQUFLO0FBQ0wsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQzlDLE1BQU1BLFdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakYsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvRSxLQUFLO0FBQ0wsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM5QyxFQUFFLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUM5QyxFQUFFLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNoRCxFQUFFTSxzQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDOUQsRUFBRSxNQUFNLElBQUksR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdEYsRUFBRU4sV0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqQyxDQUFDLENBQUM7QUFDRixNQUFNLFFBQVEsR0FBRztBQUNqQixFQUFFLElBQUk7QUFDTixDQUFDLENBQUM7QUFDRyxNQUFDLE9BQU8sR0FBRztBQUNoQixVQUFFTyx1QkFBTTtBQUNSLE1BQUVDLGlCQUFFO0FBQ0osRUFBRSxRQUFRO0FBQ1YsVUFBRUMscUJBQU07QUFDUixFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSztBQUNqQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO0FBQ3BCLE1BQU0sR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDckIsS0FBSztBQUNMLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLENBQUMsbUJBQW1CLENBQUM7QUFDNUQsSUFBSUQsaUJBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNmLEdBQUc7QUFDSDs7OzsifQ==
