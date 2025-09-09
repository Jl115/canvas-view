'use strict';

var index = require('./index-deb671d6.js');
var createText2e5e7dd3 = require('./createText-2e5e7dd3-781a22a4.js');
var line = require('./line-891b5b35.js');

const insertMarkers = (elem, markerArray, type, id) => {
  markerArray.forEach((markerName) => {
    markers[markerName](elem, type, id);
  });
};
const extension = (elem, type, id) => {
  index.log$1.trace("Making markers for ", id);
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-extensionStart").attr("class", "marker extension " + type).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z");
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-extensionEnd").attr("class", "marker extension " + type).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
};
const composition = (elem, type, id) => {
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-compositionStart").attr("class", "marker composition " + type).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-compositionEnd").attr("class", "marker composition " + type).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
};
const aggregation = (elem, type, id) => {
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-aggregationStart").attr("class", "marker aggregation " + type).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-aggregationEnd").attr("class", "marker aggregation " + type).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
};
const dependency = (elem, type, id) => {
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-dependencyStart").attr("class", "marker dependency " + type).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-dependencyEnd").attr("class", "marker dependency " + type).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
};
const lollipop = (elem, type, id) => {
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-lollipopStart").attr("class", "marker lollipop " + type).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-lollipopEnd").attr("class", "marker lollipop " + type).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
};
const point = (elem, type, id) => {
  elem.append("marker").attr("id", id + "_" + type + "-pointEnd").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", 6).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  elem.append("marker").attr("id", id + "_" + type + "-pointStart").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
};
const circle$1 = (elem, type, id) => {
  elem.append("marker").attr("id", id + "_" + type + "-circleEnd").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  elem.append("marker").attr("id", id + "_" + type + "-circleStart").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
};
const cross = (elem, type, id) => {
  elem.append("marker").attr("id", id + "_" + type + "-crossEnd").attr("class", "marker cross " + type).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
  elem.append("marker").attr("id", id + "_" + type + "-crossStart").attr("class", "marker cross " + type).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
};
const barb = (elem, type, id) => {
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
};
const markers = {
  extension,
  composition,
  aggregation,
  dependency,
  lollipop,
  point,
  circle: circle$1,
  cross,
  barb
};
const insertMarkers$1 = insertMarkers;
function applyStyle(dom, styleFn) {
  if (styleFn) {
    dom.attr("style", styleFn);
  }
}
function addHtmlLabel(node) {
  const fo = index.select(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"));
  const div = fo.append("xhtml:div");
  const label = node.label;
  const labelClass = node.isNode ? "nodeLabel" : "edgeLabel";
  div.html(
    '<span class="' + labelClass + '" ' + (node.labelStyle ? 'style="' + node.labelStyle + '"' : "") + ">" + label + "</span>"
  );
  applyStyle(div, node.labelStyle);
  div.style("display", "inline-block");
  div.style("white-space", "nowrap");
  div.attr("xmlns", "http://www.w3.org/1999/xhtml");
  return fo.node();
}
const createLabel = (_vertexText, style, isTitle, isNode) => {
  let vertexText = _vertexText || "";
  if (typeof vertexText === "object") {
    vertexText = vertexText[0];
  }
  if (index.evaluate(index.getConfig().flowchart.htmlLabels)) {
    vertexText = vertexText.replace(/\\n|\n/g, "<br />");
    index.log$1.debug("vertexText" + vertexText);
    const node = {
      isNode,
      label: index.decodeEntities(vertexText).replace(
        /fa[blrs]?:fa-[\w-]+/g,
        // cspell: disable-line
        (s) => `<i class='${s.replace(":", " ")}'></i>`
      ),
      labelStyle: style.replace("fill:", "color:")
    };
    let vertexNode = addHtmlLabel(node);
    return vertexNode;
  } else {
    const svgLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    svgLabel.setAttribute("style", style.replace("color:", "fill:"));
    let rows = [];
    if (typeof vertexText === "string") {
      rows = vertexText.split(/\\n|\n|<br\s*\/?>/gi);
    } else if (Array.isArray(vertexText)) {
      rows = vertexText;
    } else {
      rows = [];
    }
    for (const row of rows) {
      const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
      tspan.setAttribute("dy", "1em");
      tspan.setAttribute("x", "0");
      if (isTitle) {
        tspan.setAttribute("class", "title-row");
      } else {
        tspan.setAttribute("class", "row");
      }
      tspan.textContent = row.trim();
      svgLabel.appendChild(tspan);
    }
    return svgLabel;
  }
};
const createLabel$1 = createLabel;
const labelHelper = async (parent, node, _classes, isNode) => {
  let classes;
  const useHtmlLabels = node.useHtmlLabels || index.evaluate(index.getConfig().flowchart.htmlLabels);
  if (!_classes) {
    classes = "node default";
  } else {
    classes = _classes;
  }
  const shapeSvg = parent.insert("g").attr("class", classes).attr("id", node.domId || node.id);
  const label = shapeSvg.insert("g").attr("class", "label").attr("style", node.labelStyle);
  let labelText;
  if (node.labelText === void 0) {
    labelText = "";
  } else {
    labelText = typeof node.labelText === "string" ? node.labelText : node.labelText[0];
  }
  const textNode = label.node();
  let text;
  if (node.labelType === "markdown") {
    text = createText2e5e7dd3.createText(label, index.sanitizeText$2(index.decodeEntities(labelText), index.getConfig()), {
      useHtmlLabels,
      width: node.width || index.getConfig().flowchart.wrappingWidth,
      classes: "markdown-node-label"
    });
  } else {
    text = textNode.appendChild(
      createLabel$1(
        index.sanitizeText$2(index.decodeEntities(labelText), index.getConfig()),
        node.labelStyle,
        false,
        isNode
      )
    );
  }
  let bbox = text.getBBox();
  const halfPadding = node.padding / 2;
  if (index.evaluate(index.getConfig().flowchart.htmlLabels)) {
    const div = text.children[0];
    const dv = index.select(text);
    const images = div.getElementsByTagName("img");
    if (images) {
      const noImgText = labelText.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...images].map(
          (img) => new Promise((res) => {
            function setupImage() {
              img.style.display = "flex";
              img.style.flexDirection = "column";
              if (noImgText) {
                const bodyFontSize = index.getConfig().fontSize ? index.getConfig().fontSize : window.getComputedStyle(document.body).fontSize;
                const enlargingFactor = 5;
                const width = parseInt(bodyFontSize, 10) * enlargingFactor + "px";
                img.style.minWidth = width;
                img.style.maxWidth = width;
              } else {
                img.style.width = "100%";
              }
              res(img);
            }
            setTimeout(() => {
              if (img.complete) {
                setupImage();
              }
            });
            img.addEventListener("error", setupImage);
            img.addEventListener("load", setupImage);
          })
        )
      );
    }
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  if (useHtmlLabels) {
    label.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
  } else {
    label.attr("transform", "translate(0, " + -bbox.height / 2 + ")");
  }
  if (node.centerLabel) {
    label.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
  }
  label.insert("rect", ":first-child");
  return { shapeSvg, bbox, halfPadding, label };
};
const updateNodeBounds = (node, element) => {
  const bbox = element.node().getBBox();
  node.width = bbox.width;
  node.height = bbox.height;
};
function insertPolygonShape(parent, w, h, points) {
  return parent.insert("polygon", ":first-child").attr(
    "points",
    points.map(function(d) {
      return d.x + "," + d.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -w / 2 + "," + h / 2 + ")");
}
function intersectNode(node, point2) {
  return node.intersect(point2);
}
function intersectEllipse(node, rx, ry, point2) {
  var cx = node.x;
  var cy = node.y;
  var px = cx - point2.x;
  var py = cy - point2.y;
  var det = Math.sqrt(rx * rx * py * py + ry * ry * px * px);
  var dx = Math.abs(rx * ry * px / det);
  if (point2.x < cx) {
    dx = -dx;
  }
  var dy = Math.abs(rx * ry * py / det);
  if (point2.y < cy) {
    dy = -dy;
  }
  return { x: cx + dx, y: cy + dy };
}
function intersectCircle(node, rx, point2) {
  return intersectEllipse(node, rx, rx, point2);
}
function intersectLine(p1, p2, q1, q2) {
  var a1, a2, b1, b2, c1, c2;
  var r1, r2, r3, r4;
  var denom, offset, num;
  var x, y;
  a1 = p2.y - p1.y;
  b1 = p1.x - p2.x;
  c1 = p2.x * p1.y - p1.x * p2.y;
  r3 = a1 * q1.x + b1 * q1.y + c1;
  r4 = a1 * q2.x + b1 * q2.y + c1;
  if (r3 !== 0 && r4 !== 0 && sameSign(r3, r4)) {
    return;
  }
  a2 = q2.y - q1.y;
  b2 = q1.x - q2.x;
  c2 = q2.x * q1.y - q1.x * q2.y;
  r1 = a2 * p1.x + b2 * p1.y + c2;
  r2 = a2 * p2.x + b2 * p2.y + c2;
  if (r1 !== 0 && r2 !== 0 && sameSign(r1, r2)) {
    return;
  }
  denom = a1 * b2 - a2 * b1;
  if (denom === 0) {
    return;
  }
  offset = Math.abs(denom / 2);
  num = b1 * c2 - b2 * c1;
  x = num < 0 ? (num - offset) / denom : (num + offset) / denom;
  num = a2 * c1 - a1 * c2;
  y = num < 0 ? (num - offset) / denom : (num + offset) / denom;
  return { x, y };
}
function sameSign(r1, r2) {
  return r1 * r2 > 0;
}
function intersectPolygon(node, polyPoints, point2) {
  var x1 = node.x;
  var y1 = node.y;
  var intersections = [];
  var minX = Number.POSITIVE_INFINITY;
  var minY = Number.POSITIVE_INFINITY;
  if (typeof polyPoints.forEach === "function") {
    polyPoints.forEach(function(entry) {
      minX = Math.min(minX, entry.x);
      minY = Math.min(minY, entry.y);
    });
  } else {
    minX = Math.min(minX, polyPoints.x);
    minY = Math.min(minY, polyPoints.y);
  }
  var left = x1 - node.width / 2 - minX;
  var top = y1 - node.height / 2 - minY;
  for (var i = 0; i < polyPoints.length; i++) {
    var p1 = polyPoints[i];
    var p2 = polyPoints[i < polyPoints.length - 1 ? i + 1 : 0];
    var intersect2 = intersectLine(
      node,
      point2,
      { x: left + p1.x, y: top + p1.y },
      { x: left + p2.x, y: top + p2.y }
    );
    if (intersect2) {
      intersections.push(intersect2);
    }
  }
  if (!intersections.length) {
    return node;
  }
  if (intersections.length > 1) {
    intersections.sort(function(p, q) {
      var pdx = p.x - point2.x;
      var pdy = p.y - point2.y;
      var distp = Math.sqrt(pdx * pdx + pdy * pdy);
      var qdx = q.x - point2.x;
      var qdy = q.y - point2.y;
      var distq = Math.sqrt(qdx * qdx + qdy * qdy);
      return distp < distq ? -1 : distp === distq ? 0 : 1;
    });
  }
  return intersections[0];
}
const intersectRect = (node, point2) => {
  var x = node.x;
  var y = node.y;
  var dx = point2.x - x;
  var dy = point2.y - y;
  var w = node.width / 2;
  var h = node.height / 2;
  var sx, sy;
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    if (dy < 0) {
      h = -h;
    }
    sx = dy === 0 ? 0 : h * dx / dy;
    sy = h;
  } else {
    if (dx < 0) {
      w = -w;
    }
    sx = w;
    sy = dx === 0 ? 0 : w * dy / dx;
  }
  return { x: x + sx, y: y + sy };
};
const intersectRect$1 = intersectRect;
const intersect = {
  node: intersectNode,
  circle: intersectCircle,
  ellipse: intersectEllipse,
  polygon: intersectPolygon,
  rect: intersectRect$1
};
const note = async (parent, node) => {
  const useHtmlLabels = node.useHtmlLabels || index.getConfig().flowchart.htmlLabels;
  if (!useHtmlLabels) {
    node.centerLabel = true;
  }
  const { shapeSvg, bbox, halfPadding } = await labelHelper(
    parent,
    node,
    "node " + node.classes,
    true
  );
  index.log$1.info("Classes = ", node.classes);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  rect2.attr("rx", node.rx).attr("ry", node.ry).attr("x", -bbox.width / 2 - halfPadding).attr("y", -bbox.height / 2 - halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
  updateNodeBounds(node, rect2);
  node.intersect = function(point2) {
    return intersect.rect(node, point2);
  };
  return shapeSvg;
};
const note$1 = note;
const expandAndDeduplicateDirections = (directions) => {
  const uniqueDirections = /* @__PURE__ */ new Set();
  for (const direction of directions) {
    switch (direction) {
      case "x":
        uniqueDirections.add("right");
        uniqueDirections.add("left");
        break;
      case "y":
        uniqueDirections.add("up");
        uniqueDirections.add("down");
        break;
      default:
        uniqueDirections.add(direction);
        break;
    }
  }
  return uniqueDirections;
};
const getArrowPoints = (duplicatedDirections, bbox, node) => {
  const directions = expandAndDeduplicateDirections(duplicatedDirections);
  const f = 2;
  const height = bbox.height + 2 * node.padding;
  const midpoint = height / f;
  const width = bbox.width + 2 * midpoint + node.padding;
  const padding = node.padding / 2;
  if (directions.has("right") && directions.has("left") && directions.has("up") && directions.has("down")) {
    return [
      // Bottom
      { x: 0, y: 0 },
      { x: midpoint, y: 0 },
      { x: width / 2, y: 2 * padding },
      { x: width - midpoint, y: 0 },
      { x: width, y: 0 },
      // Right
      { x: width, y: -height / 3 },
      { x: width + 2 * padding, y: -height / 2 },
      { x: width, y: -2 * height / 3 },
      { x: width, y: -height },
      // Top
      { x: width - midpoint, y: -height },
      { x: width / 2, y: -height - 2 * padding },
      { x: midpoint, y: -height },
      // Left
      { x: 0, y: -height },
      { x: 0, y: -2 * height / 3 },
      { x: -2 * padding, y: -height / 2 },
      { x: 0, y: -height / 3 }
    ];
  }
  if (directions.has("right") && directions.has("left") && directions.has("up")) {
    return [
      { x: midpoint, y: 0 },
      { x: width - midpoint, y: 0 },
      { x: width, y: -height / 2 },
      { x: width - midpoint, y: -height },
      { x: midpoint, y: -height },
      { x: 0, y: -height / 2 }
    ];
  }
  if (directions.has("right") && directions.has("left") && directions.has("down")) {
    return [
      { x: 0, y: 0 },
      { x: midpoint, y: -height },
      { x: width - midpoint, y: -height },
      { x: width, y: 0 }
    ];
  }
  if (directions.has("right") && directions.has("up") && directions.has("down")) {
    return [
      { x: 0, y: 0 },
      { x: width, y: -midpoint },
      { x: width, y: -height + midpoint },
      { x: 0, y: -height }
    ];
  }
  if (directions.has("left") && directions.has("up") && directions.has("down")) {
    return [
      { x: width, y: 0 },
      { x: 0, y: -midpoint },
      { x: 0, y: -height + midpoint },
      { x: width, y: -height }
    ];
  }
  if (directions.has("right") && directions.has("left")) {
    return [
      { x: midpoint, y: 0 },
      { x: midpoint, y: -padding },
      { x: width - midpoint, y: -padding },
      { x: width - midpoint, y: 0 },
      { x: width, y: -height / 2 },
      { x: width - midpoint, y: -height },
      { x: width - midpoint, y: -height + padding },
      { x: midpoint, y: -height + padding },
      { x: midpoint, y: -height },
      { x: 0, y: -height / 2 }
    ];
  }
  if (directions.has("up") && directions.has("down")) {
    return [
      // Bottom center
      { x: width / 2, y: 0 },
      // Left pont of bottom arrow
      { x: 0, y: -padding },
      { x: midpoint, y: -padding },
      // Left top over vertical section
      { x: midpoint, y: -height + padding },
      { x: 0, y: -height + padding },
      // Top of arrow
      { x: width / 2, y: -height },
      { x: width, y: -height + padding },
      // Top of right vertical bar
      { x: width - midpoint, y: -height + padding },
      { x: width - midpoint, y: -padding },
      { x: width, y: -padding }
    ];
  }
  if (directions.has("right") && directions.has("up")) {
    return [
      { x: 0, y: 0 },
      { x: width, y: -midpoint },
      { x: 0, y: -height }
    ];
  }
  if (directions.has("right") && directions.has("down")) {
    return [
      { x: 0, y: 0 },
      { x: width, y: 0 },
      { x: 0, y: -height }
    ];
  }
  if (directions.has("left") && directions.has("up")) {
    return [
      { x: width, y: 0 },
      { x: 0, y: -midpoint },
      { x: width, y: -height }
    ];
  }
  if (directions.has("left") && directions.has("down")) {
    return [
      { x: width, y: 0 },
      { x: 0, y: 0 },
      { x: width, y: -height }
    ];
  }
  if (directions.has("right")) {
    return [
      { x: midpoint, y: -padding },
      { x: midpoint, y: -padding },
      { x: width - midpoint, y: -padding },
      { x: width - midpoint, y: 0 },
      { x: width, y: -height / 2 },
      { x: width - midpoint, y: -height },
      { x: width - midpoint, y: -height + padding },
      // top left corner of arrow
      { x: midpoint, y: -height + padding },
      { x: midpoint, y: -height + padding }
    ];
  }
  if (directions.has("left")) {
    return [
      { x: midpoint, y: 0 },
      { x: midpoint, y: -padding },
      // Two points, the right corners
      { x: width - midpoint, y: -padding },
      { x: width - midpoint, y: -height + padding },
      { x: midpoint, y: -height + padding },
      { x: midpoint, y: -height },
      { x: 0, y: -height / 2 }
    ];
  }
  if (directions.has("up")) {
    return [
      // Bottom center
      { x: midpoint, y: -padding },
      // Left top over vertical section
      { x: midpoint, y: -height + padding },
      { x: 0, y: -height + padding },
      // Top of arrow
      { x: width / 2, y: -height },
      { x: width, y: -height + padding },
      // Top of right vertical bar
      { x: width - midpoint, y: -height + padding },
      { x: width - midpoint, y: -padding }
    ];
  }
  if (directions.has("down")) {
    return [
      // Bottom center
      { x: width / 2, y: 0 },
      // Left pont of bottom arrow
      { x: 0, y: -padding },
      { x: midpoint, y: -padding },
      // Left top over vertical section
      { x: midpoint, y: -height + padding },
      { x: width - midpoint, y: -height + padding },
      { x: width - midpoint, y: -padding },
      { x: width, y: -padding }
    ];
  }
  return [{ x: 0, y: 0 }];
};
const formatClass = (str) => {
  if (str) {
    return " " + str;
  }
  return "";
};
const getClassesFromNode = (node, otherClasses) => {
  return `${otherClasses ? otherClasses : "node default"}${formatClass(node.classes)} ${formatClass(
    node.class
  )}`;
};
const question = async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const s = w + h;
  const points = [
    { x: s / 2, y: 0 },
    { x: s, y: -s / 2 },
    { x: s / 2, y: -s },
    { x: 0, y: -s / 2 }
  ];
  index.log$1.info("Question main (Circle)");
  const questionElem = insertPolygonShape(shapeSvg, s, s, points);
  questionElem.attr("style", node.style);
  updateNodeBounds(node, questionElem);
  node.intersect = function(point2) {
    index.log$1.warn("Intersect called");
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const choice = (parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
  const s = 28;
  const points = [
    { x: 0, y: s / 2 },
    { x: s / 2, y: 0 },
    { x: 0, y: -s / 2 },
    { x: -s / 2, y: 0 }
  ];
  const choice2 = shapeSvg.insert("polygon", ":first-child").attr(
    "points",
    points.map(function(d) {
      return d.x + "," + d.y;
    }).join(" ")
  );
  choice2.attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28);
  node.width = 28;
  node.height = 28;
  node.intersect = function(point2) {
    return intersect.circle(node, 14, point2);
  };
  return shapeSvg;
};
const hexagon = async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const f = 4;
  const h = bbox.height + node.padding;
  const m = h / f;
  const w = bbox.width + 2 * m + node.padding;
  const points = [
    { x: m, y: 0 },
    { x: w - m, y: 0 },
    { x: w, y: -h / 2 },
    { x: w - m, y: -h },
    { x: m, y: -h },
    { x: 0, y: -h / 2 }
  ];
  const hex = insertPolygonShape(shapeSvg, w, h, points);
  hex.attr("style", node.style);
  updateNodeBounds(node, hex);
  node.intersect = function(point2) {
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const block_arrow = async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(parent, node, void 0, true);
  const f = 2;
  const h = bbox.height + 2 * node.padding;
  const m = h / f;
  const w = bbox.width + 2 * m + node.padding;
  const points = getArrowPoints(node.directions, bbox, node);
  const blockArrow = insertPolygonShape(shapeSvg, w, h, points);
  blockArrow.attr("style", node.style);
  updateNodeBounds(node, blockArrow);
  node.intersect = function(point2) {
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const rect_left_inv_arrow = async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: -h / 2, y: 0 },
    { x: w, y: 0 },
    { x: w, y: -h },
    { x: -h / 2, y: -h },
    { x: 0, y: -h / 2 }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  node.width = w + h;
  node.height = h;
  node.intersect = function(point2) {
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const lean_right = async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(parent, node, getClassesFromNode(node), true);
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: -2 * h / 6, y: 0 },
    { x: w - h / 6, y: 0 },
    { x: w + 2 * h / 6, y: -h },
    { x: h / 6, y: -h }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  updateNodeBounds(node, el);
  node.intersect = function(point2) {
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const lean_left = async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: 2 * h / 6, y: 0 },
    { x: w + h / 6, y: 0 },
    { x: w - 2 * h / 6, y: -h },
    { x: -h / 6, y: -h }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  updateNodeBounds(node, el);
  node.intersect = function(point2) {
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const trapezoid = async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: -2 * h / 6, y: 0 },
    { x: w + 2 * h / 6, y: 0 },
    { x: w - h / 6, y: -h },
    { x: h / 6, y: -h }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  updateNodeBounds(node, el);
  node.intersect = function(point2) {
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const inv_trapezoid = async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: h / 6, y: 0 },
    { x: w - h / 6, y: 0 },
    { x: w + 2 * h / 6, y: -h },
    { x: -2 * h / 6, y: -h }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  updateNodeBounds(node, el);
  node.intersect = function(point2) {
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const rect_right_inv_arrow = async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: 0, y: 0 },
    { x: w + h / 2, y: 0 },
    { x: w, y: -h / 2 },
    { x: w + h / 2, y: -h },
    { x: 0, y: -h }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  updateNodeBounds(node, el);
  node.intersect = function(point2) {
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const cylinder = async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const w = bbox.width + node.padding;
  const rx = w / 2;
  const ry = rx / (2.5 + w / 50);
  const h = bbox.height + ry + node.padding;
  const shape = "M 0," + ry + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 a " + rx + "," + ry + " 0,0,0 " + -w + " 0 l 0," + h + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 l 0," + -h;
  const el = shapeSvg.attr("label-offset-y", ry).insert("path", ":first-child").attr("style", node.style).attr("d", shape).attr("transform", "translate(" + -w / 2 + "," + -(h / 2 + ry) + ")");
  updateNodeBounds(node, el);
  node.intersect = function(point2) {
    const pos = intersect.rect(node, point2);
    const x = pos.x - node.x;
    if (rx != 0 && (Math.abs(x) < node.width / 2 || Math.abs(x) == node.width / 2 && Math.abs(pos.y - node.y) > node.height / 2 - ry)) {
      let y = ry * ry * (1 - x * x / (rx * rx));
      if (y != 0) {
        y = Math.sqrt(y);
      }
      y = ry - y;
      if (point2.y - node.y > 0) {
        y = -y;
      }
      pos.y += y;
    }
    return pos;
  };
  return shapeSvg;
};
const rect = async (parent, node) => {
  const { shapeSvg, bbox, halfPadding } = await labelHelper(
    parent,
    node,
    "node " + node.classes + " " + node.class,
    true
  );
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const totalWidth = node.positioned ? node.width : bbox.width + node.padding;
  const totalHeight = node.positioned ? node.height : bbox.height + node.padding;
  const x = node.positioned ? -totalWidth / 2 : -bbox.width / 2 - halfPadding;
  const y = node.positioned ? -totalHeight / 2 : -bbox.height / 2 - halfPadding;
  rect2.attr("class", "basic label-container").attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("x", x).attr("y", y).attr("width", totalWidth).attr("height", totalHeight);
  if (node.props) {
    const propKeys = new Set(Object.keys(node.props));
    if (node.props.borders) {
      applyNodePropertyBorders(rect2, node.props.borders, totalWidth, totalHeight);
      propKeys.delete("borders");
    }
    propKeys.forEach((propKey) => {
      index.log$1.warn(`Unknown node property ${propKey}`);
    });
  }
  updateNodeBounds(node, rect2);
  node.intersect = function(point2) {
    return intersect.rect(node, point2);
  };
  return shapeSvg;
};
const composite = async (parent, node) => {
  const { shapeSvg, bbox, halfPadding } = await labelHelper(
    parent,
    node,
    "node " + node.classes,
    true
  );
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const totalWidth = node.positioned ? node.width : bbox.width + node.padding;
  const totalHeight = node.positioned ? node.height : bbox.height + node.padding;
  const x = node.positioned ? -totalWidth / 2 : -bbox.width / 2 - halfPadding;
  const y = node.positioned ? -totalHeight / 2 : -bbox.height / 2 - halfPadding;
  rect2.attr("class", "basic cluster composite label-container").attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("x", x).attr("y", y).attr("width", totalWidth).attr("height", totalHeight);
  if (node.props) {
    const propKeys = new Set(Object.keys(node.props));
    if (node.props.borders) {
      applyNodePropertyBorders(rect2, node.props.borders, totalWidth, totalHeight);
      propKeys.delete("borders");
    }
    propKeys.forEach((propKey) => {
      index.log$1.warn(`Unknown node property ${propKey}`);
    });
  }
  updateNodeBounds(node, rect2);
  node.intersect = function(point2) {
    return intersect.rect(node, point2);
  };
  return shapeSvg;
};
const labelRect = async (parent, node) => {
  const { shapeSvg } = await labelHelper(parent, node, "label", true);
  index.log$1.trace("Classes = ", node.class);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const totalWidth = 0;
  const totalHeight = 0;
  rect2.attr("width", totalWidth).attr("height", totalHeight);
  shapeSvg.attr("class", "label edgeLabel");
  if (node.props) {
    const propKeys = new Set(Object.keys(node.props));
    if (node.props.borders) {
      applyNodePropertyBorders(rect2, node.props.borders, totalWidth, totalHeight);
      propKeys.delete("borders");
    }
    propKeys.forEach((propKey) => {
      index.log$1.warn(`Unknown node property ${propKey}`);
    });
  }
  updateNodeBounds(node, rect2);
  node.intersect = function(point2) {
    return intersect.rect(node, point2);
  };
  return shapeSvg;
};
function applyNodePropertyBorders(rect2, borders, totalWidth, totalHeight) {
  const strokeDashArray = [];
  const addBorder = (length) => {
    strokeDashArray.push(length, 0);
  };
  const skipBorder = (length) => {
    strokeDashArray.push(0, length);
  };
  if (borders.includes("t")) {
    index.log$1.debug("add top border");
    addBorder(totalWidth);
  } else {
    skipBorder(totalWidth);
  }
  if (borders.includes("r")) {
    index.log$1.debug("add right border");
    addBorder(totalHeight);
  } else {
    skipBorder(totalHeight);
  }
  if (borders.includes("b")) {
    index.log$1.debug("add bottom border");
    addBorder(totalWidth);
  } else {
    skipBorder(totalWidth);
  }
  if (borders.includes("l")) {
    index.log$1.debug("add left border");
    addBorder(totalHeight);
  } else {
    skipBorder(totalHeight);
  }
  rect2.attr("stroke-dasharray", strokeDashArray.join(" "));
}
const rectWithTitle = (parent, node) => {
  let classes;
  if (!node.classes) {
    classes = "node default";
  } else {
    classes = "node " + node.classes;
  }
  const shapeSvg = parent.insert("g").attr("class", classes).attr("id", node.domId || node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const innerLine = shapeSvg.insert("line");
  const label = shapeSvg.insert("g").attr("class", "label");
  const text2 = node.labelText.flat ? node.labelText.flat() : node.labelText;
  let title = "";
  if (typeof text2 === "object") {
    title = text2[0];
  } else {
    title = text2;
  }
  index.log$1.info("Label text abc79", title, text2, typeof text2 === "object");
  const text = label.node().appendChild(createLabel$1(title, node.labelStyle, true, true));
  let bbox = { width: 0, height: 0 };
  if (index.evaluate(index.getConfig().flowchart.htmlLabels)) {
    const div = text.children[0];
    const dv = index.select(text);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  index.log$1.info("Text 2", text2);
  const textRows = text2.slice(1, text2.length);
  let titleBox = text.getBBox();
  const descr = label.node().appendChild(
    createLabel$1(textRows.join ? textRows.join("<br/>") : textRows, node.labelStyle, true, true)
  );
  if (index.evaluate(index.getConfig().flowchart.htmlLabels)) {
    const div = descr.children[0];
    const dv = index.select(descr);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  const halfPadding = node.padding / 2;
  index.select(descr).attr(
    "transform",
    "translate( " + // (titleBox.width - bbox.width) / 2 +
    (bbox.width > titleBox.width ? 0 : (titleBox.width - bbox.width) / 2) + ", " + (titleBox.height + halfPadding + 5) + ")"
  );
  index.select(text).attr(
    "transform",
    "translate( " + // (titleBox.width - bbox.width) / 2 +
    (bbox.width < titleBox.width ? 0 : -(titleBox.width - bbox.width) / 2) + ", 0)"
  );
  bbox = label.node().getBBox();
  label.attr(
    "transform",
    "translate(" + -bbox.width / 2 + ", " + (-bbox.height / 2 - halfPadding + 3) + ")"
  );
  rect2.attr("class", "outer title-state").attr("x", -bbox.width / 2 - halfPadding).attr("y", -bbox.height / 2 - halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
  innerLine.attr("class", "divider").attr("x1", -bbox.width / 2 - halfPadding).attr("x2", bbox.width / 2 + halfPadding).attr("y1", -bbox.height / 2 - halfPadding + titleBox.height + halfPadding).attr("y2", -bbox.height / 2 - halfPadding + titleBox.height + halfPadding);
  updateNodeBounds(node, rect2);
  node.intersect = function(point2) {
    return intersect.rect(node, point2);
  };
  return shapeSvg;
};
const stadium = async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const h = bbox.height + node.padding;
  const w = bbox.width + h / 4 + node.padding;
  const rect2 = shapeSvg.insert("rect", ":first-child").attr("style", node.style).attr("rx", h / 2).attr("ry", h / 2).attr("x", -w / 2).attr("y", -h / 2).attr("width", w).attr("height", h);
  updateNodeBounds(node, rect2);
  node.intersect = function(point2) {
    return intersect.rect(node, point2);
  };
  return shapeSvg;
};
const circle = async (parent, node) => {
  const { shapeSvg, bbox, halfPadding } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const circle2 = shapeSvg.insert("circle", ":first-child");
  circle2.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("r", bbox.width / 2 + halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
  index.log$1.info("Circle main");
  updateNodeBounds(node, circle2);
  node.intersect = function(point2) {
    index.log$1.info("Circle intersect", node, bbox.width / 2 + halfPadding, point2);
    return intersect.circle(node, bbox.width / 2 + halfPadding, point2);
  };
  return shapeSvg;
};
const doublecircle = async (parent, node) => {
  const { shapeSvg, bbox, halfPadding } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const gap = 5;
  const circleGroup = shapeSvg.insert("g", ":first-child");
  const outerCircle = circleGroup.insert("circle");
  const innerCircle = circleGroup.insert("circle");
  circleGroup.attr("class", node.class);
  outerCircle.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("r", bbox.width / 2 + halfPadding + gap).attr("width", bbox.width + node.padding + gap * 2).attr("height", bbox.height + node.padding + gap * 2);
  innerCircle.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("r", bbox.width / 2 + halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
  index.log$1.info("DoubleCircle main");
  updateNodeBounds(node, outerCircle);
  node.intersect = function(point2) {
    index.log$1.info("DoubleCircle intersect", node, bbox.width / 2 + halfPadding + gap, point2);
    return intersect.circle(node, bbox.width / 2 + halfPadding + gap, point2);
  };
  return shapeSvg;
};
const subroutine = async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
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
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  updateNodeBounds(node, el);
  node.intersect = function(point2) {
    return intersect.polygon(node, points, point2);
  };
  return shapeSvg;
};
const start = (parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
  const circle2 = shapeSvg.insert("circle", ":first-child");
  circle2.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  updateNodeBounds(node, circle2);
  node.intersect = function(point2) {
    return intersect.circle(node, 7, point2);
  };
  return shapeSvg;
};
const forkJoin = (parent, node, dir) => {
  const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
  let width = 70;
  let height = 10;
  if (dir === "LR") {
    width = 10;
    height = 70;
  }
  const shape = shapeSvg.append("rect").attr("x", -1 * width / 2).attr("y", -1 * height / 2).attr("width", width).attr("height", height).attr("class", "fork-join");
  updateNodeBounds(node, shape);
  node.height = node.height + node.padding / 2;
  node.width = node.width + node.padding / 2;
  node.intersect = function(point2) {
    return intersect.rect(node, point2);
  };
  return shapeSvg;
};
const end = (parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
  const innerCircle = shapeSvg.insert("circle", ":first-child");
  const circle2 = shapeSvg.insert("circle", ":first-child");
  circle2.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  innerCircle.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10);
  updateNodeBounds(node, circle2);
  node.intersect = function(point2) {
    return intersect.circle(node, 7, point2);
  };
  return shapeSvg;
};
const class_box = (parent, node) => {
  const halfPadding = node.padding / 2;
  const rowPadding = 4;
  const lineHeight = 8;
  let classes;
  if (!node.classes) {
    classes = "node default";
  } else {
    classes = "node " + node.classes;
  }
  const shapeSvg = parent.insert("g").attr("class", classes).attr("id", node.domId || node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const topLine = shapeSvg.insert("line");
  const bottomLine = shapeSvg.insert("line");
  let maxWidth = 0;
  let maxHeight = rowPadding;
  const labelContainer = shapeSvg.insert("g").attr("class", "label");
  let verticalPos = 0;
  const hasInterface = node.classData.annotations && node.classData.annotations[0];
  const interfaceLabelText = node.classData.annotations[0] ? "«" + node.classData.annotations[0] + "»" : "";
  const interfaceLabel = labelContainer.node().appendChild(createLabel$1(interfaceLabelText, node.labelStyle, true, true));
  let interfaceBBox = interfaceLabel.getBBox();
  if (index.evaluate(index.getConfig().flowchart.htmlLabels)) {
    const div = interfaceLabel.children[0];
    const dv = index.select(interfaceLabel);
    interfaceBBox = div.getBoundingClientRect();
    dv.attr("width", interfaceBBox.width);
    dv.attr("height", interfaceBBox.height);
  }
  if (node.classData.annotations[0]) {
    maxHeight += interfaceBBox.height + rowPadding;
    maxWidth += interfaceBBox.width;
  }
  let classTitleString = node.classData.label;
  if (node.classData.type !== void 0 && node.classData.type !== "") {
    if (index.getConfig().flowchart.htmlLabels) {
      classTitleString += "&lt;" + node.classData.type + "&gt;";
    } else {
      classTitleString += "<" + node.classData.type + ">";
    }
  }
  const classTitleLabel = labelContainer.node().appendChild(createLabel$1(classTitleString, node.labelStyle, true, true));
  index.select(classTitleLabel).attr("class", "classTitle");
  let classTitleBBox = classTitleLabel.getBBox();
  if (index.evaluate(index.getConfig().flowchart.htmlLabels)) {
    const div = classTitleLabel.children[0];
    const dv = index.select(classTitleLabel);
    classTitleBBox = div.getBoundingClientRect();
    dv.attr("width", classTitleBBox.width);
    dv.attr("height", classTitleBBox.height);
  }
  maxHeight += classTitleBBox.height + rowPadding;
  if (classTitleBBox.width > maxWidth) {
    maxWidth = classTitleBBox.width;
  }
  const classAttributes = [];
  node.classData.members.forEach((member) => {
    const parsedInfo = member.getDisplayDetails();
    let parsedText = parsedInfo.displayText;
    if (index.getConfig().flowchart.htmlLabels) {
      parsedText = parsedText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    const lbl = labelContainer.node().appendChild(
      createLabel$1(
        parsedText,
        parsedInfo.cssStyle ? parsedInfo.cssStyle : node.labelStyle,
        true,
        true
      )
    );
    let bbox = lbl.getBBox();
    if (index.evaluate(index.getConfig().flowchart.htmlLabels)) {
      const div = lbl.children[0];
      const dv = index.select(lbl);
      bbox = div.getBoundingClientRect();
      dv.attr("width", bbox.width);
      dv.attr("height", bbox.height);
    }
    if (bbox.width > maxWidth) {
      maxWidth = bbox.width;
    }
    maxHeight += bbox.height + rowPadding;
    classAttributes.push(lbl);
  });
  maxHeight += lineHeight;
  const classMethods = [];
  node.classData.methods.forEach((member) => {
    const parsedInfo = member.getDisplayDetails();
    let displayText = parsedInfo.displayText;
    if (index.getConfig().flowchart.htmlLabels) {
      displayText = displayText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    const lbl = labelContainer.node().appendChild(
      createLabel$1(
        displayText,
        parsedInfo.cssStyle ? parsedInfo.cssStyle : node.labelStyle,
        true,
        true
      )
    );
    let bbox = lbl.getBBox();
    if (index.evaluate(index.getConfig().flowchart.htmlLabels)) {
      const div = lbl.children[0];
      const dv = index.select(lbl);
      bbox = div.getBoundingClientRect();
      dv.attr("width", bbox.width);
      dv.attr("height", bbox.height);
    }
    if (bbox.width > maxWidth) {
      maxWidth = bbox.width;
    }
    maxHeight += bbox.height + rowPadding;
    classMethods.push(lbl);
  });
  maxHeight += lineHeight;
  if (hasInterface) {
    let diffX2 = (maxWidth - interfaceBBox.width) / 2;
    index.select(interfaceLabel).attr(
      "transform",
      "translate( " + (-1 * maxWidth / 2 + diffX2) + ", " + -1 * maxHeight / 2 + ")"
    );
    verticalPos = interfaceBBox.height + rowPadding;
  }
  let diffX = (maxWidth - classTitleBBox.width) / 2;
  index.select(classTitleLabel).attr(
    "transform",
    "translate( " + (-1 * maxWidth / 2 + diffX) + ", " + (-1 * maxHeight / 2 + verticalPos) + ")"
  );
  verticalPos += classTitleBBox.height + rowPadding;
  topLine.attr("class", "divider").attr("x1", -maxWidth / 2 - halfPadding).attr("x2", maxWidth / 2 + halfPadding).attr("y1", -maxHeight / 2 - halfPadding + lineHeight + verticalPos).attr("y2", -maxHeight / 2 - halfPadding + lineHeight + verticalPos);
  verticalPos += lineHeight;
  classAttributes.forEach((lbl) => {
    index.select(lbl).attr(
      "transform",
      "translate( " + -maxWidth / 2 + ", " + (-1 * maxHeight / 2 + verticalPos + lineHeight / 2) + ")"
    );
    const memberBBox = lbl == null ? void 0 : lbl.getBBox();
    verticalPos += ((memberBBox == null ? void 0 : memberBBox.height) ?? 0) + rowPadding;
  });
  verticalPos += lineHeight;
  bottomLine.attr("class", "divider").attr("x1", -maxWidth / 2 - halfPadding).attr("x2", maxWidth / 2 + halfPadding).attr("y1", -maxHeight / 2 - halfPadding + lineHeight + verticalPos).attr("y2", -maxHeight / 2 - halfPadding + lineHeight + verticalPos);
  verticalPos += lineHeight;
  classMethods.forEach((lbl) => {
    index.select(lbl).attr(
      "transform",
      "translate( " + -maxWidth / 2 + ", " + (-1 * maxHeight / 2 + verticalPos) + ")"
    );
    const memberBBox = lbl == null ? void 0 : lbl.getBBox();
    verticalPos += ((memberBBox == null ? void 0 : memberBBox.height) ?? 0) + rowPadding;
  });
  rect2.attr("style", node.style).attr("class", "outer title-state").attr("x", -maxWidth / 2 - halfPadding).attr("y", -(maxHeight / 2) - halfPadding).attr("width", maxWidth + node.padding).attr("height", maxHeight + node.padding);
  updateNodeBounds(node, rect2);
  node.intersect = function(point2) {
    return intersect.rect(node, point2);
  };
  return shapeSvg;
};
const shapes = {
  rhombus: question,
  composite,
  question,
  rect,
  labelRect,
  rectWithTitle,
  choice,
  circle,
  doublecircle,
  stadium,
  hexagon,
  block_arrow,
  rect_left_inv_arrow,
  lean_right,
  lean_left,
  trapezoid,
  inv_trapezoid,
  rect_right_inv_arrow,
  cylinder,
  start,
  end,
  note: note$1,
  subroutine,
  fork: forkJoin,
  join: forkJoin,
  class_box
};
let nodeElems = {};
const insertNode = async (elem, node, dir) => {
  let newEl;
  let el;
  if (node.link) {
    let target;
    if (index.getConfig().securityLevel === "sandbox") {
      target = "_top";
    } else if (node.linkTarget) {
      target = node.linkTarget || "_blank";
    }
    newEl = elem.insert("svg:a").attr("xlink:href", node.link).attr("target", target);
    el = await shapes[node.shape](newEl, node, dir);
  } else {
    el = await shapes[node.shape](elem, node, dir);
    newEl = el;
  }
  if (node.tooltip) {
    el.attr("title", node.tooltip);
  }
  if (node.class) {
    el.attr("class", "node default " + node.class);
  }
  newEl.attr("data-node", "true");
  newEl.attr("data-id", node.id);
  nodeElems[node.id] = newEl;
  if (node.haveCallback) {
    nodeElems[node.id].attr("class", nodeElems[node.id].attr("class") + " clickable");
  }
  return newEl;
};
const setNodeElem = (elem, node) => {
  nodeElems[node.id] = elem;
};
const clear$1 = () => {
  nodeElems = {};
};
const positionNode = (node) => {
  const el = nodeElems[node.id];
  index.log$1.trace(
    "Transforming node",
    node.diff,
    node,
    "translate(" + (node.x - node.width / 2 - 5) + ", " + node.width / 2 + ")"
  );
  const padding = 8;
  const diff = node.diff || 0;
  if (node.clusterNode) {
    el.attr(
      "transform",
      "translate(" + (node.x + diff - node.width / 2) + ", " + (node.y - node.height / 2 - padding) + ")"
    );
  } else {
    el.attr("transform", "translate(" + node.x + ", " + node.y + ")");
  }
  return diff;
};
const getSubGraphTitleMargins = ({
  flowchart
}) => {
  var _a, _b;
  const subGraphTitleTopMargin = ((_a = flowchart == null ? void 0 : flowchart.subGraphTitleMargin) == null ? void 0 : _a.top) ?? 0;
  const subGraphTitleBottomMargin = ((_b = flowchart == null ? void 0 : flowchart.subGraphTitleMargin) == null ? void 0 : _b.bottom) ?? 0;
  const subGraphTitleTotalMargin = subGraphTitleTopMargin + subGraphTitleBottomMargin;
  return {
    subGraphTitleTopMargin,
    subGraphTitleBottomMargin,
    subGraphTitleTotalMargin
  };
};
const markerOffsets = {
  aggregation: 18,
  extension: 18,
  composition: 18,
  dependency: 6,
  lollipop: 13.5,
  arrow_point: 5.3
};
function calculateDeltaAndAngle(point1, point2) {
  if (point1 === void 0 || point2 === void 0) {
    return { angle: 0, deltaX: 0, deltaY: 0 };
  }
  point1 = pointTransformer(point1);
  point2 = pointTransformer(point2);
  const [x1, y1] = [point1.x, point1.y];
  const [x2, y2] = [point2.x, point2.y];
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;
  return { angle: Math.atan(deltaY / deltaX), deltaX, deltaY };
}
const pointTransformer = (data) => {
  if (Array.isArray(data)) {
    return { x: data[0], y: data[1] };
  }
  return data;
};
const getLineFunctionsWithOffset = (edge) => {
  return {
    x: function(d, i, data) {
      let offset = 0;
      if (i === 0 && Object.hasOwn(markerOffsets, edge.arrowTypeStart)) {
        const { angle, deltaX } = calculateDeltaAndAngle(data[0], data[1]);
        offset = markerOffsets[edge.arrowTypeStart] * Math.cos(angle) * (deltaX >= 0 ? 1 : -1);
      } else if (i === data.length - 1 && Object.hasOwn(markerOffsets, edge.arrowTypeEnd)) {
        const { angle, deltaX } = calculateDeltaAndAngle(
          data[data.length - 1],
          data[data.length - 2]
        );
        offset = markerOffsets[edge.arrowTypeEnd] * Math.cos(angle) * (deltaX >= 0 ? 1 : -1);
      }
      return pointTransformer(d).x + offset;
    },
    y: function(d, i, data) {
      let offset = 0;
      if (i === 0 && Object.hasOwn(markerOffsets, edge.arrowTypeStart)) {
        const { angle, deltaY } = calculateDeltaAndAngle(data[0], data[1]);
        offset = markerOffsets[edge.arrowTypeStart] * Math.abs(Math.sin(angle)) * (deltaY >= 0 ? 1 : -1);
      } else if (i === data.length - 1 && Object.hasOwn(markerOffsets, edge.arrowTypeEnd)) {
        const { angle, deltaY } = calculateDeltaAndAngle(
          data[data.length - 1],
          data[data.length - 2]
        );
        offset = markerOffsets[edge.arrowTypeEnd] * Math.abs(Math.sin(angle)) * (deltaY >= 0 ? 1 : -1);
      }
      return pointTransformer(d).y + offset;
    }
  };
};
const addEdgeMarkers = (svgPath, edge, url, id, diagramType) => {
  if (edge.arrowTypeStart) {
    addEdgeMarker(svgPath, "start", edge.arrowTypeStart, url, id, diagramType);
  }
  if (edge.arrowTypeEnd) {
    addEdgeMarker(svgPath, "end", edge.arrowTypeEnd, url, id, diagramType);
  }
};
const arrowTypesMap = {
  arrow_cross: "cross",
  arrow_point: "point",
  arrow_barb: "barb",
  arrow_circle: "circle",
  aggregation: "aggregation",
  extension: "extension",
  composition: "composition",
  dependency: "dependency",
  lollipop: "lollipop"
};
const addEdgeMarker = (svgPath, position, arrowType, url, id, diagramType) => {
  const endMarkerType = arrowTypesMap[arrowType];
  if (!endMarkerType) {
    index.log$1.warn(`Unknown arrow type: ${arrowType}`);
    return;
  }
  const suffix = position === "start" ? "Start" : "End";
  svgPath.attr(`marker-${position}`, `url(${url}#${id}_${diagramType}-${endMarkerType}${suffix})`);
};
let edgeLabels = {};
let terminalLabels = {};
const clear = () => {
  edgeLabels = {};
  terminalLabels = {};
};
const insertEdgeLabel = (elem, edge) => {
  const useHtmlLabels = index.evaluate(index.getConfig().flowchart.htmlLabels);
  const labelElement = edge.labelType === "markdown" ? createText2e5e7dd3.createText(elem, edge.label, {
    style: edge.labelStyle,
    useHtmlLabels,
    addSvgBackground: true
  }) : createLabel$1(edge.label, edge.labelStyle);
  const edgeLabel = elem.insert("g").attr("class", "edgeLabel");
  const label = edgeLabel.insert("g").attr("class", "label");
  label.node().appendChild(labelElement);
  let bbox = labelElement.getBBox();
  if (useHtmlLabels) {
    const div = labelElement.children[0];
    const dv = index.select(labelElement);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  label.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
  edgeLabels[edge.id] = edgeLabel;
  edge.width = bbox.width;
  edge.height = bbox.height;
  let fo;
  if (edge.startLabelLeft) {
    const startLabelElement = createLabel$1(edge.startLabelLeft, edge.labelStyle);
    const startEdgeLabelLeft = elem.insert("g").attr("class", "edgeTerminals");
    const inner = startEdgeLabelLeft.insert("g").attr("class", "inner");
    fo = inner.node().appendChild(startLabelElement);
    const slBox = startLabelElement.getBBox();
    inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
    if (!terminalLabels[edge.id]) {
      terminalLabels[edge.id] = {};
    }
    terminalLabels[edge.id].startLeft = startEdgeLabelLeft;
    setTerminalWidth(fo, edge.startLabelLeft);
  }
  if (edge.startLabelRight) {
    const startLabelElement = createLabel$1(edge.startLabelRight, edge.labelStyle);
    const startEdgeLabelRight = elem.insert("g").attr("class", "edgeTerminals");
    const inner = startEdgeLabelRight.insert("g").attr("class", "inner");
    fo = startEdgeLabelRight.node().appendChild(startLabelElement);
    inner.node().appendChild(startLabelElement);
    const slBox = startLabelElement.getBBox();
    inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
    if (!terminalLabels[edge.id]) {
      terminalLabels[edge.id] = {};
    }
    terminalLabels[edge.id].startRight = startEdgeLabelRight;
    setTerminalWidth(fo, edge.startLabelRight);
  }
  if (edge.endLabelLeft) {
    const endLabelElement = createLabel$1(edge.endLabelLeft, edge.labelStyle);
    const endEdgeLabelLeft = elem.insert("g").attr("class", "edgeTerminals");
    const inner = endEdgeLabelLeft.insert("g").attr("class", "inner");
    fo = inner.node().appendChild(endLabelElement);
    const slBox = endLabelElement.getBBox();
    inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
    endEdgeLabelLeft.node().appendChild(endLabelElement);
    if (!terminalLabels[edge.id]) {
      terminalLabels[edge.id] = {};
    }
    terminalLabels[edge.id].endLeft = endEdgeLabelLeft;
    setTerminalWidth(fo, edge.endLabelLeft);
  }
  if (edge.endLabelRight) {
    const endLabelElement = createLabel$1(edge.endLabelRight, edge.labelStyle);
    const endEdgeLabelRight = elem.insert("g").attr("class", "edgeTerminals");
    const inner = endEdgeLabelRight.insert("g").attr("class", "inner");
    fo = inner.node().appendChild(endLabelElement);
    const slBox = endLabelElement.getBBox();
    inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
    endEdgeLabelRight.node().appendChild(endLabelElement);
    if (!terminalLabels[edge.id]) {
      terminalLabels[edge.id] = {};
    }
    terminalLabels[edge.id].endRight = endEdgeLabelRight;
    setTerminalWidth(fo, edge.endLabelRight);
  }
  return labelElement;
};
function setTerminalWidth(fo, value) {
  if (index.getConfig().flowchart.htmlLabels && fo) {
    fo.style.width = value.length * 9 + "px";
    fo.style.height = "12px";
  }
}
const positionEdgeLabel = (edge, paths) => {
  index.log$1.debug("Moving label abc88 ", edge.id, edge.label, edgeLabels[edge.id], paths);
  let path = paths.updatedPath ? paths.updatedPath : paths.originalPath;
  const siteConfig = index.getConfig();
  const { subGraphTitleTotalMargin } = getSubGraphTitleMargins(siteConfig);
  if (edge.label) {
    const el = edgeLabels[edge.id];
    let x = edge.x;
    let y = edge.y;
    if (path) {
      const pos = index.utils.calcLabelPosition(path);
      index.log$1.debug(
        "Moving label " + edge.label + " from (",
        x,
        ",",
        y,
        ") to (",
        pos.x,
        ",",
        pos.y,
        ") abc88"
      );
      if (paths.updatedPath) {
        x = pos.x;
        y = pos.y;
      }
    }
    el.attr("transform", `translate(${x}, ${y + subGraphTitleTotalMargin / 2})`);
  }
  if (edge.startLabelLeft) {
    const el = terminalLabels[edge.id].startLeft;
    let x = edge.x;
    let y = edge.y;
    if (path) {
      const pos = index.utils.calcTerminalLabelPosition(edge.arrowTypeStart ? 10 : 0, "start_left", path);
      x = pos.x;
      y = pos.y;
    }
    el.attr("transform", `translate(${x}, ${y})`);
  }
  if (edge.startLabelRight) {
    const el = terminalLabels[edge.id].startRight;
    let x = edge.x;
    let y = edge.y;
    if (path) {
      const pos = index.utils.calcTerminalLabelPosition(
        edge.arrowTypeStart ? 10 : 0,
        "start_right",
        path
      );
      x = pos.x;
      y = pos.y;
    }
    el.attr("transform", `translate(${x}, ${y})`);
  }
  if (edge.endLabelLeft) {
    const el = terminalLabels[edge.id].endLeft;
    let x = edge.x;
    let y = edge.y;
    if (path) {
      const pos = index.utils.calcTerminalLabelPosition(edge.arrowTypeEnd ? 10 : 0, "end_left", path);
      x = pos.x;
      y = pos.y;
    }
    el.attr("transform", `translate(${x}, ${y})`);
  }
  if (edge.endLabelRight) {
    const el = terminalLabels[edge.id].endRight;
    let x = edge.x;
    let y = edge.y;
    if (path) {
      const pos = index.utils.calcTerminalLabelPosition(edge.arrowTypeEnd ? 10 : 0, "end_right", path);
      x = pos.x;
      y = pos.y;
    }
    el.attr("transform", `translate(${x}, ${y})`);
  }
};
const outsideNode = (node, point2) => {
  const x = node.x;
  const y = node.y;
  const dx = Math.abs(point2.x - x);
  const dy = Math.abs(point2.y - y);
  const w = node.width / 2;
  const h = node.height / 2;
  if (dx >= w || dy >= h) {
    return true;
  }
  return false;
};
const intersection = (node, outsidePoint, insidePoint) => {
  index.log$1.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(outsidePoint)}
  insidePoint : ${JSON.stringify(insidePoint)}
  node        : x:${node.x} y:${node.y} w:${node.width} h:${node.height}`);
  const x = node.x;
  const y = node.y;
  const dx = Math.abs(x - insidePoint.x);
  const w = node.width / 2;
  let r = insidePoint.x < outsidePoint.x ? w - dx : w + dx;
  const h = node.height / 2;
  const Q = Math.abs(outsidePoint.y - insidePoint.y);
  const R = Math.abs(outsidePoint.x - insidePoint.x);
  if (Math.abs(y - outsidePoint.y) * w > Math.abs(x - outsidePoint.x) * h) {
    let q = insidePoint.y < outsidePoint.y ? outsidePoint.y - h - y : y - h - outsidePoint.y;
    r = R * q / Q;
    const res = {
      x: insidePoint.x < outsidePoint.x ? insidePoint.x + r : insidePoint.x - R + r,
      y: insidePoint.y < outsidePoint.y ? insidePoint.y + Q - q : insidePoint.y - Q + q
    };
    if (r === 0) {
      res.x = outsidePoint.x;
      res.y = outsidePoint.y;
    }
    if (R === 0) {
      res.x = outsidePoint.x;
    }
    if (Q === 0) {
      res.y = outsidePoint.y;
    }
    index.log$1.debug(`abc89 topp/bott calc, Q ${Q}, q ${q}, R ${R}, r ${r}`, res);
    return res;
  } else {
    if (insidePoint.x < outsidePoint.x) {
      r = outsidePoint.x - w - x;
    } else {
      r = x - w - outsidePoint.x;
    }
    let q = Q * r / R;
    let _x = insidePoint.x < outsidePoint.x ? insidePoint.x + R - r : insidePoint.x - R + r;
    let _y = insidePoint.y < outsidePoint.y ? insidePoint.y + q : insidePoint.y - q;
    index.log$1.debug(`sides calc abc89, Q ${Q}, q ${q}, R ${R}, r ${r}`, { _x, _y });
    if (r === 0) {
      _x = outsidePoint.x;
      _y = outsidePoint.y;
    }
    if (R === 0) {
      _x = outsidePoint.x;
    }
    if (Q === 0) {
      _y = outsidePoint.y;
    }
    return { x: _x, y: _y };
  }
};
const cutPathAtIntersect = (_points, boundaryNode) => {
  index.log$1.debug("abc88 cutPathAtIntersect", _points, boundaryNode);
  let points = [];
  let lastPointOutside = _points[0];
  let isInside = false;
  _points.forEach((point2) => {
    if (!outsideNode(boundaryNode, point2) && !isInside) {
      const inter = intersection(boundaryNode, lastPointOutside, point2);
      let pointPresent = false;
      points.forEach((p) => {
        pointPresent = pointPresent || p.x === inter.x && p.y === inter.y;
      });
      if (!points.some((e) => e.x === inter.x && e.y === inter.y)) {
        points.push(inter);
      }
      isInside = true;
    } else {
      lastPointOutside = point2;
      if (!isInside) {
        points.push(point2);
      }
    }
  });
  return points;
};
const insertEdge = function(elem, e, edge, clusterDb, diagramType, graph, id) {
  let points = edge.points;
  index.log$1.debug("abc88 InsertEdge: edge=", edge, "e=", e);
  let pointsHasChanged = false;
  const tail = graph.node(e.v);
  var head = graph.node(e.w);
  if ((head == null ? void 0 : head.intersect) && (tail == null ? void 0 : tail.intersect)) {
    points = points.slice(1, edge.points.length - 1);
    points.unshift(tail.intersect(points[0]));
    points.push(head.intersect(points[points.length - 1]));
  }
  if (edge.toCluster) {
    index.log$1.debug("to cluster abc88", clusterDb[edge.toCluster]);
    points = cutPathAtIntersect(edge.points, clusterDb[edge.toCluster].node);
    pointsHasChanged = true;
  }
  if (edge.fromCluster) {
    index.log$1.debug("from cluster abc88", clusterDb[edge.fromCluster]);
    points = cutPathAtIntersect(points.reverse(), clusterDb[edge.fromCluster].node).reverse();
    pointsHasChanged = true;
  }
  const lineData = points.filter((p) => !Number.isNaN(p.y));
  let curve = index.curveBasis;
  if (edge.curve && (diagramType === "graph" || diagramType === "flowchart")) {
    curve = edge.curve;
  }
  const { x, y } = getLineFunctionsWithOffset(edge);
  const lineFunction = line.line().x(x).y(y).curve(curve);
  let strokeClasses;
  switch (edge.thickness) {
    case "normal":
      strokeClasses = "edge-thickness-normal";
      break;
    case "thick":
      strokeClasses = "edge-thickness-thick";
      break;
    case "invisible":
      strokeClasses = "edge-thickness-thick";
      break;
    default:
      strokeClasses = "";
  }
  switch (edge.pattern) {
    case "solid":
      strokeClasses += " edge-pattern-solid";
      break;
    case "dotted":
      strokeClasses += " edge-pattern-dotted";
      break;
    case "dashed":
      strokeClasses += " edge-pattern-dashed";
      break;
  }
  const svgPath = elem.append("path").attr("d", lineFunction(lineData)).attr("id", edge.id).attr("class", " " + strokeClasses + (edge.classes ? " " + edge.classes : "")).attr("style", edge.style);
  let url = "";
  if (index.getConfig().flowchart.arrowMarkerAbsolute || index.getConfig().state.arrowMarkerAbsolute) {
    url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
    url = url.replace(/\(/g, "\\(");
    url = url.replace(/\)/g, "\\)");
  }
  addEdgeMarkers(svgPath, edge, url, id, diagramType);
  let paths = {};
  if (pointsHasChanged) {
    paths.updatedPath = points;
  }
  paths.originalPath = edge.points;
  return paths;
};

exports.addEdgeMarkers = addEdgeMarkers;
exports.clear = clear;
exports.clear$1 = clear$1;
exports.createLabel$1 = createLabel$1;
exports.getLineFunctionsWithOffset = getLineFunctionsWithOffset;
exports.getSubGraphTitleMargins = getSubGraphTitleMargins;
exports.insertEdge = insertEdge;
exports.insertEdgeLabel = insertEdgeLabel;
exports.insertMarkers$1 = insertMarkers$1;
exports.insertNode = insertNode;
exports.intersectRect$1 = intersectRect$1;
exports.labelHelper = labelHelper;
exports.positionEdgeLabel = positionEdgeLabel;
exports.positionNode = positionNode;
exports.setNodeElem = setNodeElem;
exports.updateNodeBounds = updateNodeBounds;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRnZXMtZTBkYTJhOWUtZGFjYWU1YmMuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9tZXJtYWlkL2Rpc3QvZWRnZXMtZTBkYTJhOWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbCBhcyBsb2csIG0gYXMgZXZhbHVhdGUsIGMgYXMgZ2V0Q29uZmlnLCBNIGFzIGRlY29kZUVudGl0aWVzLCBkIGFzIHNhbml0aXplVGV4dCwgdSBhcyB1dGlscyB9IGZyb20gXCIuL21lcm1haWQtYjU4NjBiNTQuanNcIjtcbmltcG9ydCB7IHNlbGVjdCwgbGluZSwgY3VydmVCYXNpcyB9IGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgYSBhcyBjcmVhdGVUZXh0IH0gZnJvbSBcIi4vY3JlYXRlVGV4dC0yZTVlN2RkMy5qc1wiO1xuY29uc3QgaW5zZXJ0TWFya2VycyA9IChlbGVtLCBtYXJrZXJBcnJheSwgdHlwZSwgaWQpID0+IHtcbiAgbWFya2VyQXJyYXkuZm9yRWFjaCgobWFya2VyTmFtZSkgPT4ge1xuICAgIG1hcmtlcnNbbWFya2VyTmFtZV0oZWxlbSwgdHlwZSwgaWQpO1xuICB9KTtcbn07XG5jb25zdCBleHRlbnNpb24gPSAoZWxlbSwgdHlwZSwgaWQpID0+IHtcbiAgbG9nLnRyYWNlKFwiTWFraW5nIG1hcmtlcnMgZm9yIFwiLCBpZCk7XG4gIGVsZW0uYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIGlkICsgXCJfXCIgKyB0eXBlICsgXCItZXh0ZW5zaW9uU3RhcnRcIikuYXR0cihcImNsYXNzXCIsIFwibWFya2VyIGV4dGVuc2lvbiBcIiArIHR5cGUpLmF0dHIoXCJyZWZYXCIsIDE4KS5hdHRyKFwicmVmWVwiLCA3KS5hdHRyKFwibWFya2VyV2lkdGhcIiwgMTkwKS5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDI0MCkuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBcIk0gMSw3IEwxOCwxMyBWIDEgWlwiKTtcbiAgZWxlbS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgaWQgKyBcIl9cIiArIHR5cGUgKyBcIi1leHRlbnNpb25FbmRcIikuYXR0cihcImNsYXNzXCIsIFwibWFya2VyIGV4dGVuc2lvbiBcIiArIHR5cGUpLmF0dHIoXCJyZWZYXCIsIDEpLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAyMCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAyOCkuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBcIk0gMSwxIFYgMTMgTDE4LDcgWlwiKTtcbn07XG5jb25zdCBjb21wb3NpdGlvbiA9IChlbGVtLCB0eXBlLCBpZCkgPT4ge1xuICBlbGVtLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBpZCArIFwiX1wiICsgdHlwZSArIFwiLWNvbXBvc2l0aW9uU3RhcnRcIikuYXR0cihcImNsYXNzXCIsIFwibWFya2VyIGNvbXBvc2l0aW9uIFwiICsgdHlwZSkuYXR0cihcInJlZlhcIiwgMTgpLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAxOTApLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMjQwKS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSAxOCw3IEw5LDEzIEwxLDcgTDksMSBaXCIpO1xuICBlbGVtLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBpZCArIFwiX1wiICsgdHlwZSArIFwiLWNvbXBvc2l0aW9uRW5kXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1hcmtlciBjb21wb3NpdGlvbiBcIiArIHR5cGUpLmF0dHIoXCJyZWZYXCIsIDEpLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAyMCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAyOCkuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBcIk0gMTgsNyBMOSwxMyBMMSw3IEw5LDEgWlwiKTtcbn07XG5jb25zdCBhZ2dyZWdhdGlvbiA9IChlbGVtLCB0eXBlLCBpZCkgPT4ge1xuICBlbGVtLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBpZCArIFwiX1wiICsgdHlwZSArIFwiLWFnZ3JlZ2F0aW9uU3RhcnRcIikuYXR0cihcImNsYXNzXCIsIFwibWFya2VyIGFnZ3JlZ2F0aW9uIFwiICsgdHlwZSkuYXR0cihcInJlZlhcIiwgMTgpLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAxOTApLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMjQwKS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSAxOCw3IEw5LDEzIEwxLDcgTDksMSBaXCIpO1xuICBlbGVtLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBpZCArIFwiX1wiICsgdHlwZSArIFwiLWFnZ3JlZ2F0aW9uRW5kXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1hcmtlciBhZ2dyZWdhdGlvbiBcIiArIHR5cGUpLmF0dHIoXCJyZWZYXCIsIDEpLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAyMCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAyOCkuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBcIk0gMTgsNyBMOSwxMyBMMSw3IEw5LDEgWlwiKTtcbn07XG5jb25zdCBkZXBlbmRlbmN5ID0gKGVsZW0sIHR5cGUsIGlkKSA9PiB7XG4gIGVsZW0uYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIGlkICsgXCJfXCIgKyB0eXBlICsgXCItZGVwZW5kZW5jeVN0YXJ0XCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1hcmtlciBkZXBlbmRlbmN5IFwiICsgdHlwZSkuYXR0cihcInJlZlhcIiwgNikuYXR0cihcInJlZllcIiwgNykuYXR0cihcIm1hcmtlcldpZHRoXCIsIDE5MCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAyNDApLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpLmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgXCJNIDUsNyBMOSwxMyBMMSw3IEw5LDEgWlwiKTtcbiAgZWxlbS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgaWQgKyBcIl9cIiArIHR5cGUgKyBcIi1kZXBlbmRlbmN5RW5kXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1hcmtlciBkZXBlbmRlbmN5IFwiICsgdHlwZSkuYXR0cihcInJlZlhcIiwgMTMpLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAyMCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAyOCkuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBcIk0gMTgsNyBMOSwxMyBMMTQsNyBMOSwxIFpcIik7XG59O1xuY29uc3QgbG9sbGlwb3AgPSAoZWxlbSwgdHlwZSwgaWQpID0+IHtcbiAgZWxlbS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgaWQgKyBcIl9cIiArIHR5cGUgKyBcIi1sb2xsaXBvcFN0YXJ0XCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1hcmtlciBsb2xsaXBvcCBcIiArIHR5cGUpLmF0dHIoXCJyZWZYXCIsIDEzKS5hdHRyKFwicmVmWVwiLCA3KS5hdHRyKFwibWFya2VyV2lkdGhcIiwgMTkwKS5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDI0MCkuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKS5hdHRyKFwiZmlsbFwiLCBcInRyYW5zcGFyZW50XCIpLmF0dHIoXCJjeFwiLCA3KS5hdHRyKFwiY3lcIiwgNykuYXR0cihcInJcIiwgNik7XG4gIGVsZW0uYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIGlkICsgXCJfXCIgKyB0eXBlICsgXCItbG9sbGlwb3BFbmRcIikuYXR0cihcImNsYXNzXCIsIFwibWFya2VyIGxvbGxpcG9wIFwiICsgdHlwZSkuYXR0cihcInJlZlhcIiwgMSkuYXR0cihcInJlZllcIiwgNykuYXR0cihcIm1hcmtlcldpZHRoXCIsIDE5MCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAyNDApLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIikuYXR0cihcImZpbGxcIiwgXCJ0cmFuc3BhcmVudFwiKS5hdHRyKFwiY3hcIiwgNykuYXR0cihcImN5XCIsIDcpLmF0dHIoXCJyXCIsIDYpO1xufTtcbmNvbnN0IHBvaW50ID0gKGVsZW0sIHR5cGUsIGlkKSA9PiB7XG4gIGVsZW0uYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBpZCArIFwiX1wiICsgdHlwZSArIFwiLXBvaW50RW5kXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1hcmtlciBcIiArIHR5cGUpLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIDEwIDEwXCIpLmF0dHIoXCJyZWZYXCIsIDYpLmF0dHIoXCJyZWZZXCIsIDUpLmF0dHIoXCJtYXJrZXJVbml0c1wiLCBcInVzZXJTcGFjZU9uVXNlXCIpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAxMikuYXR0cihcIm1hcmtlckhlaWdodFwiLCAxMikuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBcIk0gMCAwIEwgMTAgNSBMIDAgMTAgelwiKS5hdHRyKFwiY2xhc3NcIiwgXCJhcnJvd01hcmtlclBhdGhcIikuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgMSkuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiMSwwXCIpO1xuICBlbGVtLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgaWQgKyBcIl9cIiArIHR5cGUgKyBcIi1wb2ludFN0YXJ0XCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1hcmtlciBcIiArIHR5cGUpLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIDEwIDEwXCIpLmF0dHIoXCJyZWZYXCIsIDQuNSkuYXR0cihcInJlZllcIiwgNSkuYXR0cihcIm1hcmtlclVuaXRzXCIsIFwidXNlclNwYWNlT25Vc2VcIikuYXR0cihcIm1hcmtlcldpZHRoXCIsIDEyKS5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDEyKS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSAwIDUgTCAxMCAxMCBMIDEwIDAgelwiKS5hdHRyKFwiY2xhc3NcIiwgXCJhcnJvd01hcmtlclBhdGhcIikuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgMSkuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiMSwwXCIpO1xufTtcbmNvbnN0IGNpcmNsZSQxID0gKGVsZW0sIHR5cGUsIGlkKSA9PiB7XG4gIGVsZW0uYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBpZCArIFwiX1wiICsgdHlwZSArIFwiLWNpcmNsZUVuZFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJtYXJrZXIgXCIgKyB0eXBlKS5hdHRyKFwidmlld0JveFwiLCBcIjAgMCAxMCAxMFwiKS5hdHRyKFwicmVmWFwiLCAxMSkuYXR0cihcInJlZllcIiwgNSkuYXR0cihcIm1hcmtlclVuaXRzXCIsIFwidXNlclNwYWNlT25Vc2VcIikuYXR0cihcIm1hcmtlcldpZHRoXCIsIDExKS5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDExKS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIFwiNVwiKS5hdHRyKFwiY3lcIiwgXCI1XCIpLmF0dHIoXCJyXCIsIFwiNVwiKS5hdHRyKFwiY2xhc3NcIiwgXCJhcnJvd01hcmtlclBhdGhcIikuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgMSkuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiMSwwXCIpO1xuICBlbGVtLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgaWQgKyBcIl9cIiArIHR5cGUgKyBcIi1jaXJjbGVTdGFydFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJtYXJrZXIgXCIgKyB0eXBlKS5hdHRyKFwidmlld0JveFwiLCBcIjAgMCAxMCAxMFwiKS5hdHRyKFwicmVmWFwiLCAtMSkuYXR0cihcInJlZllcIiwgNSkuYXR0cihcIm1hcmtlclVuaXRzXCIsIFwidXNlclNwYWNlT25Vc2VcIikuYXR0cihcIm1hcmtlcldpZHRoXCIsIDExKS5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDExKS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIFwiNVwiKS5hdHRyKFwiY3lcIiwgXCI1XCIpLmF0dHIoXCJyXCIsIFwiNVwiKS5hdHRyKFwiY2xhc3NcIiwgXCJhcnJvd01hcmtlclBhdGhcIikuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgMSkuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiMSwwXCIpO1xufTtcbmNvbnN0IGNyb3NzID0gKGVsZW0sIHR5cGUsIGlkKSA9PiB7XG4gIGVsZW0uYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBpZCArIFwiX1wiICsgdHlwZSArIFwiLWNyb3NzRW5kXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1hcmtlciBjcm9zcyBcIiArIHR5cGUpLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIDExIDExXCIpLmF0dHIoXCJyZWZYXCIsIDEyKS5hdHRyKFwicmVmWVwiLCA1LjIpLmF0dHIoXCJtYXJrZXJVbml0c1wiLCBcInVzZXJTcGFjZU9uVXNlXCIpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAxMSkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAxMSkuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBcIk0gMSwxIGwgOSw5IE0gMTAsMSBsIC05LDlcIikuYXR0cihcImNsYXNzXCIsIFwiYXJyb3dNYXJrZXJQYXRoXCIpLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIDIpLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcIjEsMFwiKTtcbiAgZWxlbS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIGlkICsgXCJfXCIgKyB0eXBlICsgXCItY3Jvc3NTdGFydFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJtYXJrZXIgY3Jvc3MgXCIgKyB0eXBlKS5hdHRyKFwidmlld0JveFwiLCBcIjAgMCAxMSAxMVwiKS5hdHRyKFwicmVmWFwiLCAtMSkuYXR0cihcInJlZllcIiwgNS4yKS5hdHRyKFwibWFya2VyVW5pdHNcIiwgXCJ1c2VyU3BhY2VPblVzZVwiKS5hdHRyKFwibWFya2VyV2lkdGhcIiwgMTEpLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMTEpLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpLmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgXCJNIDEsMSBsIDksOSBNIDEwLDEgbCAtOSw5XCIpLmF0dHIoXCJjbGFzc1wiLCBcImFycm93TWFya2VyUGF0aFwiKS5zdHlsZShcInN0cm9rZS13aWR0aFwiLCAyKS5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCIxLDBcIik7XG59O1xuY29uc3QgYmFyYiA9IChlbGVtLCB0eXBlLCBpZCkgPT4ge1xuICBlbGVtLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBpZCArIFwiX1wiICsgdHlwZSArIFwiLWJhcmJFbmRcIikuYXR0cihcInJlZlhcIiwgMTkpLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAyMCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAxNCkuYXR0cihcIm1hcmtlclVuaXRzXCIsIFwic3Ryb2tlV2lkdGhcIikuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBcIk0gMTksNyBMOSwxMyBMMTQsNyBMOSwxIFpcIik7XG59O1xuY29uc3QgbWFya2VycyA9IHtcbiAgZXh0ZW5zaW9uLFxuICBjb21wb3NpdGlvbixcbiAgYWdncmVnYXRpb24sXG4gIGRlcGVuZGVuY3ksXG4gIGxvbGxpcG9wLFxuICBwb2ludCxcbiAgY2lyY2xlOiBjaXJjbGUkMSxcbiAgY3Jvc3MsXG4gIGJhcmJcbn07XG5jb25zdCBpbnNlcnRNYXJrZXJzJDEgPSBpbnNlcnRNYXJrZXJzO1xuZnVuY3Rpb24gYXBwbHlTdHlsZShkb20sIHN0eWxlRm4pIHtcbiAgaWYgKHN0eWxlRm4pIHtcbiAgICBkb20uYXR0cihcInN0eWxlXCIsIHN0eWxlRm4pO1xuICB9XG59XG5mdW5jdGlvbiBhZGRIdG1sTGFiZWwobm9kZSkge1xuICBjb25zdCBmbyA9IHNlbGVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImZvcmVpZ25PYmplY3RcIikpO1xuICBjb25zdCBkaXYgPSBmby5hcHBlbmQoXCJ4aHRtbDpkaXZcIik7XG4gIGNvbnN0IGxhYmVsID0gbm9kZS5sYWJlbDtcbiAgY29uc3QgbGFiZWxDbGFzcyA9IG5vZGUuaXNOb2RlID8gXCJub2RlTGFiZWxcIiA6IFwiZWRnZUxhYmVsXCI7XG4gIGRpdi5odG1sKFxuICAgICc8c3BhbiBjbGFzcz1cIicgKyBsYWJlbENsYXNzICsgJ1wiICcgKyAobm9kZS5sYWJlbFN0eWxlID8gJ3N0eWxlPVwiJyArIG5vZGUubGFiZWxTdHlsZSArICdcIicgOiBcIlwiKSArIFwiPlwiICsgbGFiZWwgKyBcIjwvc3Bhbj5cIlxuICApO1xuICBhcHBseVN0eWxlKGRpdiwgbm9kZS5sYWJlbFN0eWxlKTtcbiAgZGl2LnN0eWxlKFwiZGlzcGxheVwiLCBcImlubGluZS1ibG9ja1wiKTtcbiAgZGl2LnN0eWxlKFwid2hpdGUtc3BhY2VcIiwgXCJub3dyYXBcIik7XG4gIGRpdi5hdHRyKFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIpO1xuICByZXR1cm4gZm8ubm9kZSgpO1xufVxuY29uc3QgY3JlYXRlTGFiZWwgPSAoX3ZlcnRleFRleHQsIHN0eWxlLCBpc1RpdGxlLCBpc05vZGUpID0+IHtcbiAgbGV0IHZlcnRleFRleHQgPSBfdmVydGV4VGV4dCB8fCBcIlwiO1xuICBpZiAodHlwZW9mIHZlcnRleFRleHQgPT09IFwib2JqZWN0XCIpIHtcbiAgICB2ZXJ0ZXhUZXh0ID0gdmVydGV4VGV4dFswXTtcbiAgfVxuICBpZiAoZXZhbHVhdGUoZ2V0Q29uZmlnKCkuZmxvd2NoYXJ0Lmh0bWxMYWJlbHMpKSB7XG4gICAgdmVydGV4VGV4dCA9IHZlcnRleFRleHQucmVwbGFjZSgvXFxcXG58XFxuL2csIFwiPGJyIC8+XCIpO1xuICAgIGxvZy5kZWJ1ZyhcInZlcnRleFRleHRcIiArIHZlcnRleFRleHQpO1xuICAgIGNvbnN0IG5vZGUgPSB7XG4gICAgICBpc05vZGUsXG4gICAgICBsYWJlbDogZGVjb2RlRW50aXRpZXModmVydGV4VGV4dCkucmVwbGFjZShcbiAgICAgICAgL2ZhW2JscnNdPzpmYS1bXFx3LV0rL2csXG4gICAgICAgIC8vIGNzcGVsbDogZGlzYWJsZS1saW5lXG4gICAgICAgIChzKSA9PiBgPGkgY2xhc3M9JyR7cy5yZXBsYWNlKFwiOlwiLCBcIiBcIil9Jz48L2k+YFxuICAgICAgKSxcbiAgICAgIGxhYmVsU3R5bGU6IHN0eWxlLnJlcGxhY2UoXCJmaWxsOlwiLCBcImNvbG9yOlwiKVxuICAgIH07XG4gICAgbGV0IHZlcnRleE5vZGUgPSBhZGRIdG1sTGFiZWwobm9kZSk7XG4gICAgcmV0dXJuIHZlcnRleE5vZGU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3ZnTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInRleHRcIik7XG4gICAgc3ZnTGFiZWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgc3R5bGUucmVwbGFjZShcImNvbG9yOlwiLCBcImZpbGw6XCIpKTtcbiAgICBsZXQgcm93cyA9IFtdO1xuICAgIGlmICh0eXBlb2YgdmVydGV4VGV4dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcm93cyA9IHZlcnRleFRleHQuc3BsaXQoL1xcXFxufFxcbnw8YnJcXHMqXFwvPz4vZ2kpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2ZXJ0ZXhUZXh0KSkge1xuICAgICAgcm93cyA9IHZlcnRleFRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvd3MgPSBbXTtcbiAgICB9XG4gICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgICAgY29uc3QgdHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInRzcGFuXCIpO1xuICAgICAgdHNwYW4uc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIiwgXCJ4bWw6c3BhY2VcIiwgXCJwcmVzZXJ2ZVwiKTtcbiAgICAgIHRzcGFuLnNldEF0dHJpYnV0ZShcImR5XCIsIFwiMWVtXCIpO1xuICAgICAgdHNwYW4uc2V0QXR0cmlidXRlKFwieFwiLCBcIjBcIik7XG4gICAgICBpZiAoaXNUaXRsZSkge1xuICAgICAgICB0c3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlLXJvd1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicm93XCIpO1xuICAgICAgfVxuICAgICAgdHNwYW4udGV4dENvbnRlbnQgPSByb3cudHJpbSgpO1xuICAgICAgc3ZnTGFiZWwuYXBwZW5kQ2hpbGQodHNwYW4pO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnTGFiZWw7XG4gIH1cbn07XG5jb25zdCBjcmVhdGVMYWJlbCQxID0gY3JlYXRlTGFiZWw7XG5jb25zdCBsYWJlbEhlbHBlciA9IGFzeW5jIChwYXJlbnQsIG5vZGUsIF9jbGFzc2VzLCBpc05vZGUpID0+IHtcbiAgbGV0IGNsYXNzZXM7XG4gIGNvbnN0IHVzZUh0bWxMYWJlbHMgPSBub2RlLnVzZUh0bWxMYWJlbHMgfHwgZXZhbHVhdGUoZ2V0Q29uZmlnKCkuZmxvd2NoYXJ0Lmh0bWxMYWJlbHMpO1xuICBpZiAoIV9jbGFzc2VzKSB7XG4gICAgY2xhc3NlcyA9IFwibm9kZSBkZWZhdWx0XCI7XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NlcyA9IF9jbGFzc2VzO1xuICB9XG4gIGNvbnN0IHNoYXBlU3ZnID0gcGFyZW50Lmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIGNsYXNzZXMpLmF0dHIoXCJpZFwiLCBub2RlLmRvbUlkIHx8IG5vZGUuaWQpO1xuICBjb25zdCBsYWJlbCA9IHNoYXBlU3ZnLmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIFwibGFiZWxcIikuYXR0cihcInN0eWxlXCIsIG5vZGUubGFiZWxTdHlsZSk7XG4gIGxldCBsYWJlbFRleHQ7XG4gIGlmIChub2RlLmxhYmVsVGV4dCA9PT0gdm9pZCAwKSB7XG4gICAgbGFiZWxUZXh0ID0gXCJcIjtcbiAgfSBlbHNlIHtcbiAgICBsYWJlbFRleHQgPSB0eXBlb2Ygbm9kZS5sYWJlbFRleHQgPT09IFwic3RyaW5nXCIgPyBub2RlLmxhYmVsVGV4dCA6IG5vZGUubGFiZWxUZXh0WzBdO1xuICB9XG4gIGNvbnN0IHRleHROb2RlID0gbGFiZWwubm9kZSgpO1xuICBsZXQgdGV4dDtcbiAgaWYgKG5vZGUubGFiZWxUeXBlID09PSBcIm1hcmtkb3duXCIpIHtcbiAgICB0ZXh0ID0gY3JlYXRlVGV4dChsYWJlbCwgc2FuaXRpemVUZXh0KGRlY29kZUVudGl0aWVzKGxhYmVsVGV4dCksIGdldENvbmZpZygpKSwge1xuICAgICAgdXNlSHRtbExhYmVscyxcbiAgICAgIHdpZHRoOiBub2RlLndpZHRoIHx8IGdldENvbmZpZygpLmZsb3djaGFydC53cmFwcGluZ1dpZHRoLFxuICAgICAgY2xhc3NlczogXCJtYXJrZG93bi1ub2RlLWxhYmVsXCJcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0ZXh0ID0gdGV4dE5vZGUuYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVMYWJlbCQxKFxuICAgICAgICBzYW5pdGl6ZVRleHQoZGVjb2RlRW50aXRpZXMobGFiZWxUZXh0KSwgZ2V0Q29uZmlnKCkpLFxuICAgICAgICBub2RlLmxhYmVsU3R5bGUsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBpc05vZGVcbiAgICAgIClcbiAgICApO1xuICB9XG4gIGxldCBiYm94ID0gdGV4dC5nZXRCQm94KCk7XG4gIGNvbnN0IGhhbGZQYWRkaW5nID0gbm9kZS5wYWRkaW5nIC8gMjtcbiAgaWYgKGV2YWx1YXRlKGdldENvbmZpZygpLmZsb3djaGFydC5odG1sTGFiZWxzKSkge1xuICAgIGNvbnN0IGRpdiA9IHRleHQuY2hpbGRyZW5bMF07XG4gICAgY29uc3QgZHYgPSBzZWxlY3QodGV4dCk7XG4gICAgY29uc3QgaW1hZ2VzID0gZGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpO1xuICAgIGlmIChpbWFnZXMpIHtcbiAgICAgIGNvbnN0IG5vSW1nVGV4dCA9IGxhYmVsVGV4dC5yZXBsYWNlKC88aW1nW14+XSo+L2csIFwiXCIpLnRyaW0oKSA9PT0gXCJcIjtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBbLi4uaW1hZ2VzXS5tYXAoXG4gICAgICAgICAgKGltZykgPT4gbmV3IFByb21pc2UoKHJlcykgPT4ge1xuICAgICAgICAgICAgZnVuY3Rpb24gc2V0dXBJbWFnZSgpIHtcbiAgICAgICAgICAgICAgaW1nLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgICAgaW1nLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICBpZiAobm9JbWdUZXh0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9keUZvbnRTaXplID0gZ2V0Q29uZmlnKCkuZm9udFNpemUgPyBnZXRDb25maWcoKS5mb250U2l6ZSA6IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmZvbnRTaXplO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVubGFyZ2luZ0ZhY3RvciA9IDU7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBwYXJzZUludChib2R5Rm9udFNpemUsIDEwKSAqIGVubGFyZ2luZ0ZhY3RvciArIFwicHhcIjtcbiAgICAgICAgICAgICAgICBpbWcuc3R5bGUubWluV2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgICAgICBpbWcuc3R5bGUubWF4V2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXMoaW1nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgc2V0dXBJbWFnZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgc2V0dXBJbWFnZSk7XG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgc2V0dXBJbWFnZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gICAgYmJveCA9IGRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBkdi5hdHRyKFwid2lkdGhcIiwgYmJveC53aWR0aCk7XG4gICAgZHYuYXR0cihcImhlaWdodFwiLCBiYm94LmhlaWdodCk7XG4gIH1cbiAgaWYgKHVzZUh0bWxMYWJlbHMpIHtcbiAgICBsYWJlbC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgLWJib3gud2lkdGggLyAyICsgXCIsIFwiICsgLWJib3guaGVpZ2h0IC8gMiArIFwiKVwiKTtcbiAgfSBlbHNlIHtcbiAgICBsYWJlbC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsIFwiICsgLWJib3guaGVpZ2h0IC8gMiArIFwiKVwiKTtcbiAgfVxuICBpZiAobm9kZS5jZW50ZXJMYWJlbCkge1xuICAgIGxhYmVsLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAtYmJveC53aWR0aCAvIDIgKyBcIiwgXCIgKyAtYmJveC5oZWlnaHQgLyAyICsgXCIpXCIpO1xuICB9XG4gIGxhYmVsLmluc2VydChcInJlY3RcIiwgXCI6Zmlyc3QtY2hpbGRcIik7XG4gIHJldHVybiB7IHNoYXBlU3ZnLCBiYm94LCBoYWxmUGFkZGluZywgbGFiZWwgfTtcbn07XG5jb25zdCB1cGRhdGVOb2RlQm91bmRzID0gKG5vZGUsIGVsZW1lbnQpID0+IHtcbiAgY29uc3QgYmJveCA9IGVsZW1lbnQubm9kZSgpLmdldEJCb3goKTtcbiAgbm9kZS53aWR0aCA9IGJib3gud2lkdGg7XG4gIG5vZGUuaGVpZ2h0ID0gYmJveC5oZWlnaHQ7XG59O1xuZnVuY3Rpb24gaW5zZXJ0UG9seWdvblNoYXBlKHBhcmVudCwgdywgaCwgcG9pbnRzKSB7XG4gIHJldHVybiBwYXJlbnQuaW5zZXJ0KFwicG9seWdvblwiLCBcIjpmaXJzdC1jaGlsZFwiKS5hdHRyKFxuICAgIFwicG9pbnRzXCIsXG4gICAgcG9pbnRzLm1hcChmdW5jdGlvbihkKSB7XG4gICAgICByZXR1cm4gZC54ICsgXCIsXCIgKyBkLnk7XG4gICAgfSkuam9pbihcIiBcIilcbiAgKS5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbC1jb250YWluZXJcIikuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIC13IC8gMiArIFwiLFwiICsgaCAvIDIgKyBcIilcIik7XG59XG5mdW5jdGlvbiBpbnRlcnNlY3ROb2RlKG5vZGUsIHBvaW50Mikge1xuICByZXR1cm4gbm9kZS5pbnRlcnNlY3QocG9pbnQyKTtcbn1cbmZ1bmN0aW9uIGludGVyc2VjdEVsbGlwc2Uobm9kZSwgcngsIHJ5LCBwb2ludDIpIHtcbiAgdmFyIGN4ID0gbm9kZS54O1xuICB2YXIgY3kgPSBub2RlLnk7XG4gIHZhciBweCA9IGN4IC0gcG9pbnQyLng7XG4gIHZhciBweSA9IGN5IC0gcG9pbnQyLnk7XG4gIHZhciBkZXQgPSBNYXRoLnNxcnQocnggKiByeCAqIHB5ICogcHkgKyByeSAqIHJ5ICogcHggKiBweCk7XG4gIHZhciBkeCA9IE1hdGguYWJzKHJ4ICogcnkgKiBweCAvIGRldCk7XG4gIGlmIChwb2ludDIueCA8IGN4KSB7XG4gICAgZHggPSAtZHg7XG4gIH1cbiAgdmFyIGR5ID0gTWF0aC5hYnMocnggKiByeSAqIHB5IC8gZGV0KTtcbiAgaWYgKHBvaW50Mi55IDwgY3kpIHtcbiAgICBkeSA9IC1keTtcbiAgfVxuICByZXR1cm4geyB4OiBjeCArIGR4LCB5OiBjeSArIGR5IH07XG59XG5mdW5jdGlvbiBpbnRlcnNlY3RDaXJjbGUobm9kZSwgcngsIHBvaW50Mikge1xuICByZXR1cm4gaW50ZXJzZWN0RWxsaXBzZShub2RlLCByeCwgcngsIHBvaW50Mik7XG59XG5mdW5jdGlvbiBpbnRlcnNlY3RMaW5lKHAxLCBwMiwgcTEsIHEyKSB7XG4gIHZhciBhMSwgYTIsIGIxLCBiMiwgYzEsIGMyO1xuICB2YXIgcjEsIHIyLCByMywgcjQ7XG4gIHZhciBkZW5vbSwgb2Zmc2V0LCBudW07XG4gIHZhciB4LCB5O1xuICBhMSA9IHAyLnkgLSBwMS55O1xuICBiMSA9IHAxLnggLSBwMi54O1xuICBjMSA9IHAyLnggKiBwMS55IC0gcDEueCAqIHAyLnk7XG4gIHIzID0gYTEgKiBxMS54ICsgYjEgKiBxMS55ICsgYzE7XG4gIHI0ID0gYTEgKiBxMi54ICsgYjEgKiBxMi55ICsgYzE7XG4gIGlmIChyMyAhPT0gMCAmJiByNCAhPT0gMCAmJiBzYW1lU2lnbihyMywgcjQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGEyID0gcTIueSAtIHExLnk7XG4gIGIyID0gcTEueCAtIHEyLng7XG4gIGMyID0gcTIueCAqIHExLnkgLSBxMS54ICogcTIueTtcbiAgcjEgPSBhMiAqIHAxLnggKyBiMiAqIHAxLnkgKyBjMjtcbiAgcjIgPSBhMiAqIHAyLnggKyBiMiAqIHAyLnkgKyBjMjtcbiAgaWYgKHIxICE9PSAwICYmIHIyICE9PSAwICYmIHNhbWVTaWduKHIxLCByMikpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZGVub20gPSBhMSAqIGIyIC0gYTIgKiBiMTtcbiAgaWYgKGRlbm9tID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIG9mZnNldCA9IE1hdGguYWJzKGRlbm9tIC8gMik7XG4gIG51bSA9IGIxICogYzIgLSBiMiAqIGMxO1xuICB4ID0gbnVtIDwgMCA/IChudW0gLSBvZmZzZXQpIC8gZGVub20gOiAobnVtICsgb2Zmc2V0KSAvIGRlbm9tO1xuICBudW0gPSBhMiAqIGMxIC0gYTEgKiBjMjtcbiAgeSA9IG51bSA8IDAgPyAobnVtIC0gb2Zmc2V0KSAvIGRlbm9tIDogKG51bSArIG9mZnNldCkgLyBkZW5vbTtcbiAgcmV0dXJuIHsgeCwgeSB9O1xufVxuZnVuY3Rpb24gc2FtZVNpZ24ocjEsIHIyKSB7XG4gIHJldHVybiByMSAqIHIyID4gMDtcbn1cbmZ1bmN0aW9uIGludGVyc2VjdFBvbHlnb24obm9kZSwgcG9seVBvaW50cywgcG9pbnQyKSB7XG4gIHZhciB4MSA9IG5vZGUueDtcbiAgdmFyIHkxID0gbm9kZS55O1xuICB2YXIgaW50ZXJzZWN0aW9ucyA9IFtdO1xuICB2YXIgbWluWCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgdmFyIG1pblkgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gIGlmICh0eXBlb2YgcG9seVBvaW50cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBwb2x5UG9pbnRzLmZvckVhY2goZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgIG1pblggPSBNYXRoLm1pbihtaW5YLCBlbnRyeS54KTtcbiAgICAgIG1pblkgPSBNYXRoLm1pbihtaW5ZLCBlbnRyeS55KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBtaW5YID0gTWF0aC5taW4obWluWCwgcG9seVBvaW50cy54KTtcbiAgICBtaW5ZID0gTWF0aC5taW4obWluWSwgcG9seVBvaW50cy55KTtcbiAgfVxuICB2YXIgbGVmdCA9IHgxIC0gbm9kZS53aWR0aCAvIDIgLSBtaW5YO1xuICB2YXIgdG9wID0geTEgLSBub2RlLmhlaWdodCAvIDIgLSBtaW5ZO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHBvbHlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcDEgPSBwb2x5UG9pbnRzW2ldO1xuICAgIHZhciBwMiA9IHBvbHlQb2ludHNbaSA8IHBvbHlQb2ludHMubGVuZ3RoIC0gMSA/IGkgKyAxIDogMF07XG4gICAgdmFyIGludGVyc2VjdDIgPSBpbnRlcnNlY3RMaW5lKFxuICAgICAgbm9kZSxcbiAgICAgIHBvaW50MixcbiAgICAgIHsgeDogbGVmdCArIHAxLngsIHk6IHRvcCArIHAxLnkgfSxcbiAgICAgIHsgeDogbGVmdCArIHAyLngsIHk6IHRvcCArIHAyLnkgfVxuICAgICk7XG4gICAgaWYgKGludGVyc2VjdDIpIHtcbiAgICAgIGludGVyc2VjdGlvbnMucHVzaChpbnRlcnNlY3QyKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpbnRlcnNlY3Rpb25zLmxlbmd0aCkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG4gIGlmIChpbnRlcnNlY3Rpb25zLmxlbmd0aCA+IDEpIHtcbiAgICBpbnRlcnNlY3Rpb25zLnNvcnQoZnVuY3Rpb24ocCwgcSkge1xuICAgICAgdmFyIHBkeCA9IHAueCAtIHBvaW50Mi54O1xuICAgICAgdmFyIHBkeSA9IHAueSAtIHBvaW50Mi55O1xuICAgICAgdmFyIGRpc3RwID0gTWF0aC5zcXJ0KHBkeCAqIHBkeCArIHBkeSAqIHBkeSk7XG4gICAgICB2YXIgcWR4ID0gcS54IC0gcG9pbnQyLng7XG4gICAgICB2YXIgcWR5ID0gcS55IC0gcG9pbnQyLnk7XG4gICAgICB2YXIgZGlzdHEgPSBNYXRoLnNxcnQocWR4ICogcWR4ICsgcWR5ICogcWR5KTtcbiAgICAgIHJldHVybiBkaXN0cCA8IGRpc3RxID8gLTEgOiBkaXN0cCA9PT0gZGlzdHEgPyAwIDogMTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gaW50ZXJzZWN0aW9uc1swXTtcbn1cbmNvbnN0IGludGVyc2VjdFJlY3QgPSAobm9kZSwgcG9pbnQyKSA9PiB7XG4gIHZhciB4ID0gbm9kZS54O1xuICB2YXIgeSA9IG5vZGUueTtcbiAgdmFyIGR4ID0gcG9pbnQyLnggLSB4O1xuICB2YXIgZHkgPSBwb2ludDIueSAtIHk7XG4gIHZhciB3ID0gbm9kZS53aWR0aCAvIDI7XG4gIHZhciBoID0gbm9kZS5oZWlnaHQgLyAyO1xuICB2YXIgc3gsIHN5O1xuICBpZiAoTWF0aC5hYnMoZHkpICogdyA+IE1hdGguYWJzKGR4KSAqIGgpIHtcbiAgICBpZiAoZHkgPCAwKSB7XG4gICAgICBoID0gLWg7XG4gICAgfVxuICAgIHN4ID0gZHkgPT09IDAgPyAwIDogaCAqIGR4IC8gZHk7XG4gICAgc3kgPSBoO1xuICB9IGVsc2Uge1xuICAgIGlmIChkeCA8IDApIHtcbiAgICAgIHcgPSAtdztcbiAgICB9XG4gICAgc3ggPSB3O1xuICAgIHN5ID0gZHggPT09IDAgPyAwIDogdyAqIGR5IC8gZHg7XG4gIH1cbiAgcmV0dXJuIHsgeDogeCArIHN4LCB5OiB5ICsgc3kgfTtcbn07XG5jb25zdCBpbnRlcnNlY3RSZWN0JDEgPSBpbnRlcnNlY3RSZWN0O1xuY29uc3QgaW50ZXJzZWN0ID0ge1xuICBub2RlOiBpbnRlcnNlY3ROb2RlLFxuICBjaXJjbGU6IGludGVyc2VjdENpcmNsZSxcbiAgZWxsaXBzZTogaW50ZXJzZWN0RWxsaXBzZSxcbiAgcG9seWdvbjogaW50ZXJzZWN0UG9seWdvbixcbiAgcmVjdDogaW50ZXJzZWN0UmVjdCQxXG59O1xuY29uc3Qgbm90ZSA9IGFzeW5jIChwYXJlbnQsIG5vZGUpID0+IHtcbiAgY29uc3QgdXNlSHRtbExhYmVscyA9IG5vZGUudXNlSHRtbExhYmVscyB8fCBnZXRDb25maWcoKS5mbG93Y2hhcnQuaHRtbExhYmVscztcbiAgaWYgKCF1c2VIdG1sTGFiZWxzKSB7XG4gICAgbm9kZS5jZW50ZXJMYWJlbCA9IHRydWU7XG4gIH1cbiAgY29uc3QgeyBzaGFwZVN2ZywgYmJveCwgaGFsZlBhZGRpbmcgfSA9IGF3YWl0IGxhYmVsSGVscGVyKFxuICAgIHBhcmVudCxcbiAgICBub2RlLFxuICAgIFwibm9kZSBcIiArIG5vZGUuY2xhc3NlcyxcbiAgICB0cnVlXG4gICk7XG4gIGxvZy5pbmZvKFwiQ2xhc3NlcyA9IFwiLCBub2RlLmNsYXNzZXMpO1xuICBjb25zdCByZWN0MiA9IHNoYXBlU3ZnLmluc2VydChcInJlY3RcIiwgXCI6Zmlyc3QtY2hpbGRcIik7XG4gIHJlY3QyLmF0dHIoXCJyeFwiLCBub2RlLnJ4KS5hdHRyKFwicnlcIiwgbm9kZS5yeSkuYXR0cihcInhcIiwgLWJib3gud2lkdGggLyAyIC0gaGFsZlBhZGRpbmcpLmF0dHIoXCJ5XCIsIC1iYm94LmhlaWdodCAvIDIgLSBoYWxmUGFkZGluZykuYXR0cihcIndpZHRoXCIsIGJib3gud2lkdGggKyBub2RlLnBhZGRpbmcpLmF0dHIoXCJoZWlnaHRcIiwgYmJveC5oZWlnaHQgKyBub2RlLnBhZGRpbmcpO1xuICB1cGRhdGVOb2RlQm91bmRzKG5vZGUsIHJlY3QyKTtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludDIpIHtcbiAgICByZXR1cm4gaW50ZXJzZWN0LnJlY3Qobm9kZSwgcG9pbnQyKTtcbiAgfTtcbiAgcmV0dXJuIHNoYXBlU3ZnO1xufTtcbmNvbnN0IG5vdGUkMSA9IG5vdGU7XG5jb25zdCBleHBhbmRBbmREZWR1cGxpY2F0ZURpcmVjdGlvbnMgPSAoZGlyZWN0aW9ucykgPT4ge1xuICBjb25zdCB1bmlxdWVEaXJlY3Rpb25zID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgZm9yIChjb25zdCBkaXJlY3Rpb24gb2YgZGlyZWN0aW9ucykge1xuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICB1bmlxdWVEaXJlY3Rpb25zLmFkZChcInJpZ2h0XCIpO1xuICAgICAgICB1bmlxdWVEaXJlY3Rpb25zLmFkZChcImxlZnRcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgdW5pcXVlRGlyZWN0aW9ucy5hZGQoXCJ1cFwiKTtcbiAgICAgICAgdW5pcXVlRGlyZWN0aW9ucy5hZGQoXCJkb3duXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHVuaXF1ZURpcmVjdGlvbnMuYWRkKGRpcmVjdGlvbik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5pcXVlRGlyZWN0aW9ucztcbn07XG5jb25zdCBnZXRBcnJvd1BvaW50cyA9IChkdXBsaWNhdGVkRGlyZWN0aW9ucywgYmJveCwgbm9kZSkgPT4ge1xuICBjb25zdCBkaXJlY3Rpb25zID0gZXhwYW5kQW5kRGVkdXBsaWNhdGVEaXJlY3Rpb25zKGR1cGxpY2F0ZWREaXJlY3Rpb25zKTtcbiAgY29uc3QgZiA9IDI7XG4gIGNvbnN0IGhlaWdodCA9IGJib3guaGVpZ2h0ICsgMiAqIG5vZGUucGFkZGluZztcbiAgY29uc3QgbWlkcG9pbnQgPSBoZWlnaHQgLyBmO1xuICBjb25zdCB3aWR0aCA9IGJib3gud2lkdGggKyAyICogbWlkcG9pbnQgKyBub2RlLnBhZGRpbmc7XG4gIGNvbnN0IHBhZGRpbmcgPSBub2RlLnBhZGRpbmcgLyAyO1xuICBpZiAoZGlyZWN0aW9ucy5oYXMoXCJyaWdodFwiKSAmJiBkaXJlY3Rpb25zLmhhcyhcImxlZnRcIikgJiYgZGlyZWN0aW9ucy5oYXMoXCJ1cFwiKSAmJiBkaXJlY3Rpb25zLmhhcyhcImRvd25cIikpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLy8gQm90dG9tXG4gICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgIHsgeDogbWlkcG9pbnQsIHk6IDAgfSxcbiAgICAgIHsgeDogd2lkdGggLyAyLCB5OiAyICogcGFkZGluZyB9LFxuICAgICAgeyB4OiB3aWR0aCAtIG1pZHBvaW50LCB5OiAwIH0sXG4gICAgICB7IHg6IHdpZHRoLCB5OiAwIH0sXG4gICAgICAvLyBSaWdodFxuICAgICAgeyB4OiB3aWR0aCwgeTogLWhlaWdodCAvIDMgfSxcbiAgICAgIHsgeDogd2lkdGggKyAyICogcGFkZGluZywgeTogLWhlaWdodCAvIDIgfSxcbiAgICAgIHsgeDogd2lkdGgsIHk6IC0yICogaGVpZ2h0IC8gMyB9LFxuICAgICAgeyB4OiB3aWR0aCwgeTogLWhlaWdodCB9LFxuICAgICAgLy8gVG9wXG4gICAgICB7IHg6IHdpZHRoIC0gbWlkcG9pbnQsIHk6IC1oZWlnaHQgfSxcbiAgICAgIHsgeDogd2lkdGggLyAyLCB5OiAtaGVpZ2h0IC0gMiAqIHBhZGRpbmcgfSxcbiAgICAgIHsgeDogbWlkcG9pbnQsIHk6IC1oZWlnaHQgfSxcbiAgICAgIC8vIExlZnRcbiAgICAgIHsgeDogMCwgeTogLWhlaWdodCB9LFxuICAgICAgeyB4OiAwLCB5OiAtMiAqIGhlaWdodCAvIDMgfSxcbiAgICAgIHsgeDogLTIgKiBwYWRkaW5nLCB5OiAtaGVpZ2h0IC8gMiB9LFxuICAgICAgeyB4OiAwLCB5OiAtaGVpZ2h0IC8gMyB9XG4gICAgXTtcbiAgfVxuICBpZiAoZGlyZWN0aW9ucy5oYXMoXCJyaWdodFwiKSAmJiBkaXJlY3Rpb25zLmhhcyhcImxlZnRcIikgJiYgZGlyZWN0aW9ucy5oYXMoXCJ1cFwiKSkge1xuICAgIHJldHVybiBbXG4gICAgICB7IHg6IG1pZHBvaW50LCB5OiAwIH0sXG4gICAgICB7IHg6IHdpZHRoIC0gbWlkcG9pbnQsIHk6IDAgfSxcbiAgICAgIHsgeDogd2lkdGgsIHk6IC1oZWlnaHQgLyAyIH0sXG4gICAgICB7IHg6IHdpZHRoIC0gbWlkcG9pbnQsIHk6IC1oZWlnaHQgfSxcbiAgICAgIHsgeDogbWlkcG9pbnQsIHk6IC1oZWlnaHQgfSxcbiAgICAgIHsgeDogMCwgeTogLWhlaWdodCAvIDIgfVxuICAgIF07XG4gIH1cbiAgaWYgKGRpcmVjdGlvbnMuaGFzKFwicmlnaHRcIikgJiYgZGlyZWN0aW9ucy5oYXMoXCJsZWZ0XCIpICYmIGRpcmVjdGlvbnMuaGFzKFwiZG93blwiKSkge1xuICAgIHJldHVybiBbXG4gICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgIHsgeDogbWlkcG9pbnQsIHk6IC1oZWlnaHQgfSxcbiAgICAgIHsgeDogd2lkdGggLSBtaWRwb2ludCwgeTogLWhlaWdodCB9LFxuICAgICAgeyB4OiB3aWR0aCwgeTogMCB9XG4gICAgXTtcbiAgfVxuICBpZiAoZGlyZWN0aW9ucy5oYXMoXCJyaWdodFwiKSAmJiBkaXJlY3Rpb25zLmhhcyhcInVwXCIpICYmIGRpcmVjdGlvbnMuaGFzKFwiZG93blwiKSkge1xuICAgIHJldHVybiBbXG4gICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgIHsgeDogd2lkdGgsIHk6IC1taWRwb2ludCB9LFxuICAgICAgeyB4OiB3aWR0aCwgeTogLWhlaWdodCArIG1pZHBvaW50IH0sXG4gICAgICB7IHg6IDAsIHk6IC1oZWlnaHQgfVxuICAgIF07XG4gIH1cbiAgaWYgKGRpcmVjdGlvbnMuaGFzKFwibGVmdFwiKSAmJiBkaXJlY3Rpb25zLmhhcyhcInVwXCIpICYmIGRpcmVjdGlvbnMuaGFzKFwiZG93blwiKSkge1xuICAgIHJldHVybiBbXG4gICAgICB7IHg6IHdpZHRoLCB5OiAwIH0sXG4gICAgICB7IHg6IDAsIHk6IC1taWRwb2ludCB9LFxuICAgICAgeyB4OiAwLCB5OiAtaGVpZ2h0ICsgbWlkcG9pbnQgfSxcbiAgICAgIHsgeDogd2lkdGgsIHk6IC1oZWlnaHQgfVxuICAgIF07XG4gIH1cbiAgaWYgKGRpcmVjdGlvbnMuaGFzKFwicmlnaHRcIikgJiYgZGlyZWN0aW9ucy5oYXMoXCJsZWZ0XCIpKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHsgeDogbWlkcG9pbnQsIHk6IDAgfSxcbiAgICAgIHsgeDogbWlkcG9pbnQsIHk6IC1wYWRkaW5nIH0sXG4gICAgICB7IHg6IHdpZHRoIC0gbWlkcG9pbnQsIHk6IC1wYWRkaW5nIH0sXG4gICAgICB7IHg6IHdpZHRoIC0gbWlkcG9pbnQsIHk6IDAgfSxcbiAgICAgIHsgeDogd2lkdGgsIHk6IC1oZWlnaHQgLyAyIH0sXG4gICAgICB7IHg6IHdpZHRoIC0gbWlkcG9pbnQsIHk6IC1oZWlnaHQgfSxcbiAgICAgIHsgeDogd2lkdGggLSBtaWRwb2ludCwgeTogLWhlaWdodCArIHBhZGRpbmcgfSxcbiAgICAgIHsgeDogbWlkcG9pbnQsIHk6IC1oZWlnaHQgKyBwYWRkaW5nIH0sXG4gICAgICB7IHg6IG1pZHBvaW50LCB5OiAtaGVpZ2h0IH0sXG4gICAgICB7IHg6IDAsIHk6IC1oZWlnaHQgLyAyIH1cbiAgICBdO1xuICB9XG4gIGlmIChkaXJlY3Rpb25zLmhhcyhcInVwXCIpICYmIGRpcmVjdGlvbnMuaGFzKFwiZG93blwiKSkge1xuICAgIHJldHVybiBbXG4gICAgICAvLyBCb3R0b20gY2VudGVyXG4gICAgICB7IHg6IHdpZHRoIC8gMiwgeTogMCB9LFxuICAgICAgLy8gTGVmdCBwb250IG9mIGJvdHRvbSBhcnJvd1xuICAgICAgeyB4OiAwLCB5OiAtcGFkZGluZyB9LFxuICAgICAgeyB4OiBtaWRwb2ludCwgeTogLXBhZGRpbmcgfSxcbiAgICAgIC8vIExlZnQgdG9wIG92ZXIgdmVydGljYWwgc2VjdGlvblxuICAgICAgeyB4OiBtaWRwb2ludCwgeTogLWhlaWdodCArIHBhZGRpbmcgfSxcbiAgICAgIHsgeDogMCwgeTogLWhlaWdodCArIHBhZGRpbmcgfSxcbiAgICAgIC8vIFRvcCBvZiBhcnJvd1xuICAgICAgeyB4OiB3aWR0aCAvIDIsIHk6IC1oZWlnaHQgfSxcbiAgICAgIHsgeDogd2lkdGgsIHk6IC1oZWlnaHQgKyBwYWRkaW5nIH0sXG4gICAgICAvLyBUb3Agb2YgcmlnaHQgdmVydGljYWwgYmFyXG4gICAgICB7IHg6IHdpZHRoIC0gbWlkcG9pbnQsIHk6IC1oZWlnaHQgKyBwYWRkaW5nIH0sXG4gICAgICB7IHg6IHdpZHRoIC0gbWlkcG9pbnQsIHk6IC1wYWRkaW5nIH0sXG4gICAgICB7IHg6IHdpZHRoLCB5OiAtcGFkZGluZyB9XG4gICAgXTtcbiAgfVxuICBpZiAoZGlyZWN0aW9ucy5oYXMoXCJyaWdodFwiKSAmJiBkaXJlY3Rpb25zLmhhcyhcInVwXCIpKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgeyB4OiB3aWR0aCwgeTogLW1pZHBvaW50IH0sXG4gICAgICB7IHg6IDAsIHk6IC1oZWlnaHQgfVxuICAgIF07XG4gIH1cbiAgaWYgKGRpcmVjdGlvbnMuaGFzKFwicmlnaHRcIikgJiYgZGlyZWN0aW9ucy5oYXMoXCJkb3duXCIpKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgeyB4OiB3aWR0aCwgeTogMCB9LFxuICAgICAgeyB4OiAwLCB5OiAtaGVpZ2h0IH1cbiAgICBdO1xuICB9XG4gIGlmIChkaXJlY3Rpb25zLmhhcyhcImxlZnRcIikgJiYgZGlyZWN0aW9ucy5oYXMoXCJ1cFwiKSkge1xuICAgIHJldHVybiBbXG4gICAgICB7IHg6IHdpZHRoLCB5OiAwIH0sXG4gICAgICB7IHg6IDAsIHk6IC1taWRwb2ludCB9LFxuICAgICAgeyB4OiB3aWR0aCwgeTogLWhlaWdodCB9XG4gICAgXTtcbiAgfVxuICBpZiAoZGlyZWN0aW9ucy5oYXMoXCJsZWZ0XCIpICYmIGRpcmVjdGlvbnMuaGFzKFwiZG93blwiKSkge1xuICAgIHJldHVybiBbXG4gICAgICB7IHg6IHdpZHRoLCB5OiAwIH0sXG4gICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgIHsgeDogd2lkdGgsIHk6IC1oZWlnaHQgfVxuICAgIF07XG4gIH1cbiAgaWYgKGRpcmVjdGlvbnMuaGFzKFwicmlnaHRcIikpIHtcbiAgICByZXR1cm4gW1xuICAgICAgeyB4OiBtaWRwb2ludCwgeTogLXBhZGRpbmcgfSxcbiAgICAgIHsgeDogbWlkcG9pbnQsIHk6IC1wYWRkaW5nIH0sXG4gICAgICB7IHg6IHdpZHRoIC0gbWlkcG9pbnQsIHk6IC1wYWRkaW5nIH0sXG4gICAgICB7IHg6IHdpZHRoIC0gbWlkcG9pbnQsIHk6IDAgfSxcbiAgICAgIHsgeDogd2lkdGgsIHk6IC1oZWlnaHQgLyAyIH0sXG4gICAgICB7IHg6IHdpZHRoIC0gbWlkcG9pbnQsIHk6IC1oZWlnaHQgfSxcbiAgICAgIHsgeDogd2lkdGggLSBtaWRwb2ludCwgeTogLWhlaWdodCArIHBhZGRpbmcgfSxcbiAgICAgIC8vIHRvcCBsZWZ0IGNvcm5lciBvZiBhcnJvd1xuICAgICAgeyB4OiBtaWRwb2ludCwgeTogLWhlaWdodCArIHBhZGRpbmcgfSxcbiAgICAgIHsgeDogbWlkcG9pbnQsIHk6IC1oZWlnaHQgKyBwYWRkaW5nIH1cbiAgICBdO1xuICB9XG4gIGlmIChkaXJlY3Rpb25zLmhhcyhcImxlZnRcIikpIHtcbiAgICByZXR1cm4gW1xuICAgICAgeyB4OiBtaWRwb2ludCwgeTogMCB9LFxuICAgICAgeyB4OiBtaWRwb2ludCwgeTogLXBhZGRpbmcgfSxcbiAgICAgIC8vIFR3byBwb2ludHMsIHRoZSByaWdodCBjb3JuZXJzXG4gICAgICB7IHg6IHdpZHRoIC0gbWlkcG9pbnQsIHk6IC1wYWRkaW5nIH0sXG4gICAgICB7IHg6IHdpZHRoIC0gbWlkcG9pbnQsIHk6IC1oZWlnaHQgKyBwYWRkaW5nIH0sXG4gICAgICB7IHg6IG1pZHBvaW50LCB5OiAtaGVpZ2h0ICsgcGFkZGluZyB9LFxuICAgICAgeyB4OiBtaWRwb2ludCwgeTogLWhlaWdodCB9LFxuICAgICAgeyB4OiAwLCB5OiAtaGVpZ2h0IC8gMiB9XG4gICAgXTtcbiAgfVxuICBpZiAoZGlyZWN0aW9ucy5oYXMoXCJ1cFwiKSkge1xuICAgIHJldHVybiBbXG4gICAgICAvLyBCb3R0b20gY2VudGVyXG4gICAgICB7IHg6IG1pZHBvaW50LCB5OiAtcGFkZGluZyB9LFxuICAgICAgLy8gTGVmdCB0b3Agb3ZlciB2ZXJ0aWNhbCBzZWN0aW9uXG4gICAgICB7IHg6IG1pZHBvaW50LCB5OiAtaGVpZ2h0ICsgcGFkZGluZyB9LFxuICAgICAgeyB4OiAwLCB5OiAtaGVpZ2h0ICsgcGFkZGluZyB9LFxuICAgICAgLy8gVG9wIG9mIGFycm93XG4gICAgICB7IHg6IHdpZHRoIC8gMiwgeTogLWhlaWdodCB9LFxuICAgICAgeyB4OiB3aWR0aCwgeTogLWhlaWdodCArIHBhZGRpbmcgfSxcbiAgICAgIC8vIFRvcCBvZiByaWdodCB2ZXJ0aWNhbCBiYXJcbiAgICAgIHsgeDogd2lkdGggLSBtaWRwb2ludCwgeTogLWhlaWdodCArIHBhZGRpbmcgfSxcbiAgICAgIHsgeDogd2lkdGggLSBtaWRwb2ludCwgeTogLXBhZGRpbmcgfVxuICAgIF07XG4gIH1cbiAgaWYgKGRpcmVjdGlvbnMuaGFzKFwiZG93blwiKSkge1xuICAgIHJldHVybiBbXG4gICAgICAvLyBCb3R0b20gY2VudGVyXG4gICAgICB7IHg6IHdpZHRoIC8gMiwgeTogMCB9LFxuICAgICAgLy8gTGVmdCBwb250IG9mIGJvdHRvbSBhcnJvd1xuICAgICAgeyB4OiAwLCB5OiAtcGFkZGluZyB9LFxuICAgICAgeyB4OiBtaWRwb2ludCwgeTogLXBhZGRpbmcgfSxcbiAgICAgIC8vIExlZnQgdG9wIG92ZXIgdmVydGljYWwgc2VjdGlvblxuICAgICAgeyB4OiBtaWRwb2ludCwgeTogLWhlaWdodCArIHBhZGRpbmcgfSxcbiAgICAgIHsgeDogd2lkdGggLSBtaWRwb2ludCwgeTogLWhlaWdodCArIHBhZGRpbmcgfSxcbiAgICAgIHsgeDogd2lkdGggLSBtaWRwb2ludCwgeTogLXBhZGRpbmcgfSxcbiAgICAgIHsgeDogd2lkdGgsIHk6IC1wYWRkaW5nIH1cbiAgICBdO1xuICB9XG4gIHJldHVybiBbeyB4OiAwLCB5OiAwIH1dO1xufTtcbmNvbnN0IGZvcm1hdENsYXNzID0gKHN0cikgPT4ge1xuICBpZiAoc3RyKSB7XG4gICAgcmV0dXJuIFwiIFwiICsgc3RyO1xuICB9XG4gIHJldHVybiBcIlwiO1xufTtcbmNvbnN0IGdldENsYXNzZXNGcm9tTm9kZSA9IChub2RlLCBvdGhlckNsYXNzZXMpID0+IHtcbiAgcmV0dXJuIGAke290aGVyQ2xhc3NlcyA/IG90aGVyQ2xhc3NlcyA6IFwibm9kZSBkZWZhdWx0XCJ9JHtmb3JtYXRDbGFzcyhub2RlLmNsYXNzZXMpfSAke2Zvcm1hdENsYXNzKFxuICAgIG5vZGUuY2xhc3NcbiAgKX1gO1xufTtcbmNvbnN0IHF1ZXN0aW9uID0gYXN5bmMgKHBhcmVudCwgbm9kZSkgPT4ge1xuICBjb25zdCB7IHNoYXBlU3ZnLCBiYm94IH0gPSBhd2FpdCBsYWJlbEhlbHBlcihcbiAgICBwYXJlbnQsXG4gICAgbm9kZSxcbiAgICBnZXRDbGFzc2VzRnJvbU5vZGUobm9kZSwgdm9pZCAwKSxcbiAgICB0cnVlXG4gICk7XG4gIGNvbnN0IHcgPSBiYm94LndpZHRoICsgbm9kZS5wYWRkaW5nO1xuICBjb25zdCBoID0gYmJveC5oZWlnaHQgKyBub2RlLnBhZGRpbmc7XG4gIGNvbnN0IHMgPSB3ICsgaDtcbiAgY29uc3QgcG9pbnRzID0gW1xuICAgIHsgeDogcyAvIDIsIHk6IDAgfSxcbiAgICB7IHg6IHMsIHk6IC1zIC8gMiB9LFxuICAgIHsgeDogcyAvIDIsIHk6IC1zIH0sXG4gICAgeyB4OiAwLCB5OiAtcyAvIDIgfVxuICBdO1xuICBsb2cuaW5mbyhcIlF1ZXN0aW9uIG1haW4gKENpcmNsZSlcIik7XG4gIGNvbnN0IHF1ZXN0aW9uRWxlbSA9IGluc2VydFBvbHlnb25TaGFwZShzaGFwZVN2ZywgcywgcywgcG9pbnRzKTtcbiAgcXVlc3Rpb25FbGVtLmF0dHIoXCJzdHlsZVwiLCBub2RlLnN0eWxlKTtcbiAgdXBkYXRlTm9kZUJvdW5kcyhub2RlLCBxdWVzdGlvbkVsZW0pO1xuICBub2RlLmludGVyc2VjdCA9IGZ1bmN0aW9uKHBvaW50Mikge1xuICAgIGxvZy53YXJuKFwiSW50ZXJzZWN0IGNhbGxlZFwiKTtcbiAgICByZXR1cm4gaW50ZXJzZWN0LnBvbHlnb24obm9kZSwgcG9pbnRzLCBwb2ludDIpO1xuICB9O1xuICByZXR1cm4gc2hhcGVTdmc7XG59O1xuY29uc3QgY2hvaWNlID0gKHBhcmVudCwgbm9kZSkgPT4ge1xuICBjb25zdCBzaGFwZVN2ZyA9IHBhcmVudC5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGUgZGVmYXVsdFwiKS5hdHRyKFwiaWRcIiwgbm9kZS5kb21JZCB8fCBub2RlLmlkKTtcbiAgY29uc3QgcyA9IDI4O1xuICBjb25zdCBwb2ludHMgPSBbXG4gICAgeyB4OiAwLCB5OiBzIC8gMiB9LFxuICAgIHsgeDogcyAvIDIsIHk6IDAgfSxcbiAgICB7IHg6IDAsIHk6IC1zIC8gMiB9LFxuICAgIHsgeDogLXMgLyAyLCB5OiAwIH1cbiAgXTtcbiAgY29uc3QgY2hvaWNlMiA9IHNoYXBlU3ZnLmluc2VydChcInBvbHlnb25cIiwgXCI6Zmlyc3QtY2hpbGRcIikuYXR0cihcbiAgICBcInBvaW50c1wiLFxuICAgIHBvaW50cy5tYXAoZnVuY3Rpb24oZCkge1xuICAgICAgcmV0dXJuIGQueCArIFwiLFwiICsgZC55O1xuICAgIH0pLmpvaW4oXCIgXCIpXG4gICk7XG4gIGNob2ljZTIuYXR0cihcImNsYXNzXCIsIFwic3RhdGUtc3RhcnRcIikuYXR0cihcInJcIiwgNykuYXR0cihcIndpZHRoXCIsIDI4KS5hdHRyKFwiaGVpZ2h0XCIsIDI4KTtcbiAgbm9kZS53aWR0aCA9IDI4O1xuICBub2RlLmhlaWdodCA9IDI4O1xuICBub2RlLmludGVyc2VjdCA9IGZ1bmN0aW9uKHBvaW50Mikge1xuICAgIHJldHVybiBpbnRlcnNlY3QuY2lyY2xlKG5vZGUsIDE0LCBwb2ludDIpO1xuICB9O1xuICByZXR1cm4gc2hhcGVTdmc7XG59O1xuY29uc3QgaGV4YWdvbiA9IGFzeW5jIChwYXJlbnQsIG5vZGUpID0+IHtcbiAgY29uc3QgeyBzaGFwZVN2ZywgYmJveCB9ID0gYXdhaXQgbGFiZWxIZWxwZXIoXG4gICAgcGFyZW50LFxuICAgIG5vZGUsXG4gICAgZ2V0Q2xhc3Nlc0Zyb21Ob2RlKG5vZGUsIHZvaWQgMCksXG4gICAgdHJ1ZVxuICApO1xuICBjb25zdCBmID0gNDtcbiAgY29uc3QgaCA9IGJib3guaGVpZ2h0ICsgbm9kZS5wYWRkaW5nO1xuICBjb25zdCBtID0gaCAvIGY7XG4gIGNvbnN0IHcgPSBiYm94LndpZHRoICsgMiAqIG0gKyBub2RlLnBhZGRpbmc7XG4gIGNvbnN0IHBvaW50cyA9IFtcbiAgICB7IHg6IG0sIHk6IDAgfSxcbiAgICB7IHg6IHcgLSBtLCB5OiAwIH0sXG4gICAgeyB4OiB3LCB5OiAtaCAvIDIgfSxcbiAgICB7IHg6IHcgLSBtLCB5OiAtaCB9LFxuICAgIHsgeDogbSwgeTogLWggfSxcbiAgICB7IHg6IDAsIHk6IC1oIC8gMiB9XG4gIF07XG4gIGNvbnN0IGhleCA9IGluc2VydFBvbHlnb25TaGFwZShzaGFwZVN2ZywgdywgaCwgcG9pbnRzKTtcbiAgaGV4LmF0dHIoXCJzdHlsZVwiLCBub2RlLnN0eWxlKTtcbiAgdXBkYXRlTm9kZUJvdW5kcyhub2RlLCBoZXgpO1xuICBub2RlLmludGVyc2VjdCA9IGZ1bmN0aW9uKHBvaW50Mikge1xuICAgIHJldHVybiBpbnRlcnNlY3QucG9seWdvbihub2RlLCBwb2ludHMsIHBvaW50Mik7XG4gIH07XG4gIHJldHVybiBzaGFwZVN2Zztcbn07XG5jb25zdCBibG9ja19hcnJvdyA9IGFzeW5jIChwYXJlbnQsIG5vZGUpID0+IHtcbiAgY29uc3QgeyBzaGFwZVN2ZywgYmJveCB9ID0gYXdhaXQgbGFiZWxIZWxwZXIocGFyZW50LCBub2RlLCB2b2lkIDAsIHRydWUpO1xuICBjb25zdCBmID0gMjtcbiAgY29uc3QgaCA9IGJib3guaGVpZ2h0ICsgMiAqIG5vZGUucGFkZGluZztcbiAgY29uc3QgbSA9IGggLyBmO1xuICBjb25zdCB3ID0gYmJveC53aWR0aCArIDIgKiBtICsgbm9kZS5wYWRkaW5nO1xuICBjb25zdCBwb2ludHMgPSBnZXRBcnJvd1BvaW50cyhub2RlLmRpcmVjdGlvbnMsIGJib3gsIG5vZGUpO1xuICBjb25zdCBibG9ja0Fycm93ID0gaW5zZXJ0UG9seWdvblNoYXBlKHNoYXBlU3ZnLCB3LCBoLCBwb2ludHMpO1xuICBibG9ja0Fycm93LmF0dHIoXCJzdHlsZVwiLCBub2RlLnN0eWxlKTtcbiAgdXBkYXRlTm9kZUJvdW5kcyhub2RlLCBibG9ja0Fycm93KTtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludDIpIHtcbiAgICByZXR1cm4gaW50ZXJzZWN0LnBvbHlnb24obm9kZSwgcG9pbnRzLCBwb2ludDIpO1xuICB9O1xuICByZXR1cm4gc2hhcGVTdmc7XG59O1xuY29uc3QgcmVjdF9sZWZ0X2ludl9hcnJvdyA9IGFzeW5jIChwYXJlbnQsIG5vZGUpID0+IHtcbiAgY29uc3QgeyBzaGFwZVN2ZywgYmJveCB9ID0gYXdhaXQgbGFiZWxIZWxwZXIoXG4gICAgcGFyZW50LFxuICAgIG5vZGUsXG4gICAgZ2V0Q2xhc3Nlc0Zyb21Ob2RlKG5vZGUsIHZvaWQgMCksXG4gICAgdHJ1ZVxuICApO1xuICBjb25zdCB3ID0gYmJveC53aWR0aCArIG5vZGUucGFkZGluZztcbiAgY29uc3QgaCA9IGJib3guaGVpZ2h0ICsgbm9kZS5wYWRkaW5nO1xuICBjb25zdCBwb2ludHMgPSBbXG4gICAgeyB4OiAtaCAvIDIsIHk6IDAgfSxcbiAgICB7IHg6IHcsIHk6IDAgfSxcbiAgICB7IHg6IHcsIHk6IC1oIH0sXG4gICAgeyB4OiAtaCAvIDIsIHk6IC1oIH0sXG4gICAgeyB4OiAwLCB5OiAtaCAvIDIgfVxuICBdO1xuICBjb25zdCBlbCA9IGluc2VydFBvbHlnb25TaGFwZShzaGFwZVN2ZywgdywgaCwgcG9pbnRzKTtcbiAgZWwuYXR0cihcInN0eWxlXCIsIG5vZGUuc3R5bGUpO1xuICBub2RlLndpZHRoID0gdyArIGg7XG4gIG5vZGUuaGVpZ2h0ID0gaDtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludDIpIHtcbiAgICByZXR1cm4gaW50ZXJzZWN0LnBvbHlnb24obm9kZSwgcG9pbnRzLCBwb2ludDIpO1xuICB9O1xuICByZXR1cm4gc2hhcGVTdmc7XG59O1xuY29uc3QgbGVhbl9yaWdodCA9IGFzeW5jIChwYXJlbnQsIG5vZGUpID0+IHtcbiAgY29uc3QgeyBzaGFwZVN2ZywgYmJveCB9ID0gYXdhaXQgbGFiZWxIZWxwZXIocGFyZW50LCBub2RlLCBnZXRDbGFzc2VzRnJvbU5vZGUobm9kZSksIHRydWUpO1xuICBjb25zdCB3ID0gYmJveC53aWR0aCArIG5vZGUucGFkZGluZztcbiAgY29uc3QgaCA9IGJib3guaGVpZ2h0ICsgbm9kZS5wYWRkaW5nO1xuICBjb25zdCBwb2ludHMgPSBbXG4gICAgeyB4OiAtMiAqIGggLyA2LCB5OiAwIH0sXG4gICAgeyB4OiB3IC0gaCAvIDYsIHk6IDAgfSxcbiAgICB7IHg6IHcgKyAyICogaCAvIDYsIHk6IC1oIH0sXG4gICAgeyB4OiBoIC8gNiwgeTogLWggfVxuICBdO1xuICBjb25zdCBlbCA9IGluc2VydFBvbHlnb25TaGFwZShzaGFwZVN2ZywgdywgaCwgcG9pbnRzKTtcbiAgZWwuYXR0cihcInN0eWxlXCIsIG5vZGUuc3R5bGUpO1xuICB1cGRhdGVOb2RlQm91bmRzKG5vZGUsIGVsKTtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludDIpIHtcbiAgICByZXR1cm4gaW50ZXJzZWN0LnBvbHlnb24obm9kZSwgcG9pbnRzLCBwb2ludDIpO1xuICB9O1xuICByZXR1cm4gc2hhcGVTdmc7XG59O1xuY29uc3QgbGVhbl9sZWZ0ID0gYXN5bmMgKHBhcmVudCwgbm9kZSkgPT4ge1xuICBjb25zdCB7IHNoYXBlU3ZnLCBiYm94IH0gPSBhd2FpdCBsYWJlbEhlbHBlcihcbiAgICBwYXJlbnQsXG4gICAgbm9kZSxcbiAgICBnZXRDbGFzc2VzRnJvbU5vZGUobm9kZSwgdm9pZCAwKSxcbiAgICB0cnVlXG4gICk7XG4gIGNvbnN0IHcgPSBiYm94LndpZHRoICsgbm9kZS5wYWRkaW5nO1xuICBjb25zdCBoID0gYmJveC5oZWlnaHQgKyBub2RlLnBhZGRpbmc7XG4gIGNvbnN0IHBvaW50cyA9IFtcbiAgICB7IHg6IDIgKiBoIC8gNiwgeTogMCB9LFxuICAgIHsgeDogdyArIGggLyA2LCB5OiAwIH0sXG4gICAgeyB4OiB3IC0gMiAqIGggLyA2LCB5OiAtaCB9LFxuICAgIHsgeDogLWggLyA2LCB5OiAtaCB9XG4gIF07XG4gIGNvbnN0IGVsID0gaW5zZXJ0UG9seWdvblNoYXBlKHNoYXBlU3ZnLCB3LCBoLCBwb2ludHMpO1xuICBlbC5hdHRyKFwic3R5bGVcIiwgbm9kZS5zdHlsZSk7XG4gIHVwZGF0ZU5vZGVCb3VuZHMobm9kZSwgZWwpO1xuICBub2RlLmludGVyc2VjdCA9IGZ1bmN0aW9uKHBvaW50Mikge1xuICAgIHJldHVybiBpbnRlcnNlY3QucG9seWdvbihub2RlLCBwb2ludHMsIHBvaW50Mik7XG4gIH07XG4gIHJldHVybiBzaGFwZVN2Zztcbn07XG5jb25zdCB0cmFwZXpvaWQgPSBhc3luYyAocGFyZW50LCBub2RlKSA9PiB7XG4gIGNvbnN0IHsgc2hhcGVTdmcsIGJib3ggfSA9IGF3YWl0IGxhYmVsSGVscGVyKFxuICAgIHBhcmVudCxcbiAgICBub2RlLFxuICAgIGdldENsYXNzZXNGcm9tTm9kZShub2RlLCB2b2lkIDApLFxuICAgIHRydWVcbiAgKTtcbiAgY29uc3QgdyA9IGJib3gud2lkdGggKyBub2RlLnBhZGRpbmc7XG4gIGNvbnN0IGggPSBiYm94LmhlaWdodCArIG5vZGUucGFkZGluZztcbiAgY29uc3QgcG9pbnRzID0gW1xuICAgIHsgeDogLTIgKiBoIC8gNiwgeTogMCB9LFxuICAgIHsgeDogdyArIDIgKiBoIC8gNiwgeTogMCB9LFxuICAgIHsgeDogdyAtIGggLyA2LCB5OiAtaCB9LFxuICAgIHsgeDogaCAvIDYsIHk6IC1oIH1cbiAgXTtcbiAgY29uc3QgZWwgPSBpbnNlcnRQb2x5Z29uU2hhcGUoc2hhcGVTdmcsIHcsIGgsIHBvaW50cyk7XG4gIGVsLmF0dHIoXCJzdHlsZVwiLCBub2RlLnN0eWxlKTtcbiAgdXBkYXRlTm9kZUJvdW5kcyhub2RlLCBlbCk7XG4gIG5vZGUuaW50ZXJzZWN0ID0gZnVuY3Rpb24ocG9pbnQyKSB7XG4gICAgcmV0dXJuIGludGVyc2VjdC5wb2x5Z29uKG5vZGUsIHBvaW50cywgcG9pbnQyKTtcbiAgfTtcbiAgcmV0dXJuIHNoYXBlU3ZnO1xufTtcbmNvbnN0IGludl90cmFwZXpvaWQgPSBhc3luYyAocGFyZW50LCBub2RlKSA9PiB7XG4gIGNvbnN0IHsgc2hhcGVTdmcsIGJib3ggfSA9IGF3YWl0IGxhYmVsSGVscGVyKFxuICAgIHBhcmVudCxcbiAgICBub2RlLFxuICAgIGdldENsYXNzZXNGcm9tTm9kZShub2RlLCB2b2lkIDApLFxuICAgIHRydWVcbiAgKTtcbiAgY29uc3QgdyA9IGJib3gud2lkdGggKyBub2RlLnBhZGRpbmc7XG4gIGNvbnN0IGggPSBiYm94LmhlaWdodCArIG5vZGUucGFkZGluZztcbiAgY29uc3QgcG9pbnRzID0gW1xuICAgIHsgeDogaCAvIDYsIHk6IDAgfSxcbiAgICB7IHg6IHcgLSBoIC8gNiwgeTogMCB9LFxuICAgIHsgeDogdyArIDIgKiBoIC8gNiwgeTogLWggfSxcbiAgICB7IHg6IC0yICogaCAvIDYsIHk6IC1oIH1cbiAgXTtcbiAgY29uc3QgZWwgPSBpbnNlcnRQb2x5Z29uU2hhcGUoc2hhcGVTdmcsIHcsIGgsIHBvaW50cyk7XG4gIGVsLmF0dHIoXCJzdHlsZVwiLCBub2RlLnN0eWxlKTtcbiAgdXBkYXRlTm9kZUJvdW5kcyhub2RlLCBlbCk7XG4gIG5vZGUuaW50ZXJzZWN0ID0gZnVuY3Rpb24ocG9pbnQyKSB7XG4gICAgcmV0dXJuIGludGVyc2VjdC5wb2x5Z29uKG5vZGUsIHBvaW50cywgcG9pbnQyKTtcbiAgfTtcbiAgcmV0dXJuIHNoYXBlU3ZnO1xufTtcbmNvbnN0IHJlY3RfcmlnaHRfaW52X2Fycm93ID0gYXN5bmMgKHBhcmVudCwgbm9kZSkgPT4ge1xuICBjb25zdCB7IHNoYXBlU3ZnLCBiYm94IH0gPSBhd2FpdCBsYWJlbEhlbHBlcihcbiAgICBwYXJlbnQsXG4gICAgbm9kZSxcbiAgICBnZXRDbGFzc2VzRnJvbU5vZGUobm9kZSwgdm9pZCAwKSxcbiAgICB0cnVlXG4gICk7XG4gIGNvbnN0IHcgPSBiYm94LndpZHRoICsgbm9kZS5wYWRkaW5nO1xuICBjb25zdCBoID0gYmJveC5oZWlnaHQgKyBub2RlLnBhZGRpbmc7XG4gIGNvbnN0IHBvaW50cyA9IFtcbiAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICB7IHg6IHcgKyBoIC8gMiwgeTogMCB9LFxuICAgIHsgeDogdywgeTogLWggLyAyIH0sXG4gICAgeyB4OiB3ICsgaCAvIDIsIHk6IC1oIH0sXG4gICAgeyB4OiAwLCB5OiAtaCB9XG4gIF07XG4gIGNvbnN0IGVsID0gaW5zZXJ0UG9seWdvblNoYXBlKHNoYXBlU3ZnLCB3LCBoLCBwb2ludHMpO1xuICBlbC5hdHRyKFwic3R5bGVcIiwgbm9kZS5zdHlsZSk7XG4gIHVwZGF0ZU5vZGVCb3VuZHMobm9kZSwgZWwpO1xuICBub2RlLmludGVyc2VjdCA9IGZ1bmN0aW9uKHBvaW50Mikge1xuICAgIHJldHVybiBpbnRlcnNlY3QucG9seWdvbihub2RlLCBwb2ludHMsIHBvaW50Mik7XG4gIH07XG4gIHJldHVybiBzaGFwZVN2Zztcbn07XG5jb25zdCBjeWxpbmRlciA9IGFzeW5jIChwYXJlbnQsIG5vZGUpID0+IHtcbiAgY29uc3QgeyBzaGFwZVN2ZywgYmJveCB9ID0gYXdhaXQgbGFiZWxIZWxwZXIoXG4gICAgcGFyZW50LFxuICAgIG5vZGUsXG4gICAgZ2V0Q2xhc3Nlc0Zyb21Ob2RlKG5vZGUsIHZvaWQgMCksXG4gICAgdHJ1ZVxuICApO1xuICBjb25zdCB3ID0gYmJveC53aWR0aCArIG5vZGUucGFkZGluZztcbiAgY29uc3QgcnggPSB3IC8gMjtcbiAgY29uc3QgcnkgPSByeCAvICgyLjUgKyB3IC8gNTApO1xuICBjb25zdCBoID0gYmJveC5oZWlnaHQgKyByeSArIG5vZGUucGFkZGluZztcbiAgY29uc3Qgc2hhcGUgPSBcIk0gMCxcIiArIHJ5ICsgXCIgYSBcIiArIHJ4ICsgXCIsXCIgKyByeSArIFwiIDAsMCwwIFwiICsgdyArIFwiIDAgYSBcIiArIHJ4ICsgXCIsXCIgKyByeSArIFwiIDAsMCwwIFwiICsgLXcgKyBcIiAwIGwgMCxcIiArIGggKyBcIiBhIFwiICsgcnggKyBcIixcIiArIHJ5ICsgXCIgMCwwLDAgXCIgKyB3ICsgXCIgMCBsIDAsXCIgKyAtaDtcbiAgY29uc3QgZWwgPSBzaGFwZVN2Zy5hdHRyKFwibGFiZWwtb2Zmc2V0LXlcIiwgcnkpLmluc2VydChcInBhdGhcIiwgXCI6Zmlyc3QtY2hpbGRcIikuYXR0cihcInN0eWxlXCIsIG5vZGUuc3R5bGUpLmF0dHIoXCJkXCIsIHNoYXBlKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgLXcgLyAyICsgXCIsXCIgKyAtKGggLyAyICsgcnkpICsgXCIpXCIpO1xuICB1cGRhdGVOb2RlQm91bmRzKG5vZGUsIGVsKTtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludDIpIHtcbiAgICBjb25zdCBwb3MgPSBpbnRlcnNlY3QucmVjdChub2RlLCBwb2ludDIpO1xuICAgIGNvbnN0IHggPSBwb3MueCAtIG5vZGUueDtcbiAgICBpZiAocnggIT0gMCAmJiAoTWF0aC5hYnMoeCkgPCBub2RlLndpZHRoIC8gMiB8fCBNYXRoLmFicyh4KSA9PSBub2RlLndpZHRoIC8gMiAmJiBNYXRoLmFicyhwb3MueSAtIG5vZGUueSkgPiBub2RlLmhlaWdodCAvIDIgLSByeSkpIHtcbiAgICAgIGxldCB5ID0gcnkgKiByeSAqICgxIC0geCAqIHggLyAocnggKiByeCkpO1xuICAgICAgaWYgKHkgIT0gMCkge1xuICAgICAgICB5ID0gTWF0aC5zcXJ0KHkpO1xuICAgICAgfVxuICAgICAgeSA9IHJ5IC0geTtcbiAgICAgIGlmIChwb2ludDIueSAtIG5vZGUueSA+IDApIHtcbiAgICAgICAgeSA9IC15O1xuICAgICAgfVxuICAgICAgcG9zLnkgKz0geTtcbiAgICB9XG4gICAgcmV0dXJuIHBvcztcbiAgfTtcbiAgcmV0dXJuIHNoYXBlU3ZnO1xufTtcbmNvbnN0IHJlY3QgPSBhc3luYyAocGFyZW50LCBub2RlKSA9PiB7XG4gIGNvbnN0IHsgc2hhcGVTdmcsIGJib3gsIGhhbGZQYWRkaW5nIH0gPSBhd2FpdCBsYWJlbEhlbHBlcihcbiAgICBwYXJlbnQsXG4gICAgbm9kZSxcbiAgICBcIm5vZGUgXCIgKyBub2RlLmNsYXNzZXMgKyBcIiBcIiArIG5vZGUuY2xhc3MsXG4gICAgdHJ1ZVxuICApO1xuICBjb25zdCByZWN0MiA9IHNoYXBlU3ZnLmluc2VydChcInJlY3RcIiwgXCI6Zmlyc3QtY2hpbGRcIik7XG4gIGNvbnN0IHRvdGFsV2lkdGggPSBub2RlLnBvc2l0aW9uZWQgPyBub2RlLndpZHRoIDogYmJveC53aWR0aCArIG5vZGUucGFkZGluZztcbiAgY29uc3QgdG90YWxIZWlnaHQgPSBub2RlLnBvc2l0aW9uZWQgPyBub2RlLmhlaWdodCA6IGJib3guaGVpZ2h0ICsgbm9kZS5wYWRkaW5nO1xuICBjb25zdCB4ID0gbm9kZS5wb3NpdGlvbmVkID8gLXRvdGFsV2lkdGggLyAyIDogLWJib3gud2lkdGggLyAyIC0gaGFsZlBhZGRpbmc7XG4gIGNvbnN0IHkgPSBub2RlLnBvc2l0aW9uZWQgPyAtdG90YWxIZWlnaHQgLyAyIDogLWJib3guaGVpZ2h0IC8gMiAtIGhhbGZQYWRkaW5nO1xuICByZWN0Mi5hdHRyKFwiY2xhc3NcIiwgXCJiYXNpYyBsYWJlbC1jb250YWluZXJcIikuYXR0cihcInN0eWxlXCIsIG5vZGUuc3R5bGUpLmF0dHIoXCJyeFwiLCBub2RlLnJ4KS5hdHRyKFwicnlcIiwgbm9kZS5yeSkuYXR0cihcInhcIiwgeCkuYXR0cihcInlcIiwgeSkuYXR0cihcIndpZHRoXCIsIHRvdGFsV2lkdGgpLmF0dHIoXCJoZWlnaHRcIiwgdG90YWxIZWlnaHQpO1xuICBpZiAobm9kZS5wcm9wcykge1xuICAgIGNvbnN0IHByb3BLZXlzID0gbmV3IFNldChPYmplY3Qua2V5cyhub2RlLnByb3BzKSk7XG4gICAgaWYgKG5vZGUucHJvcHMuYm9yZGVycykge1xuICAgICAgYXBwbHlOb2RlUHJvcGVydHlCb3JkZXJzKHJlY3QyLCBub2RlLnByb3BzLmJvcmRlcnMsIHRvdGFsV2lkdGgsIHRvdGFsSGVpZ2h0KTtcbiAgICAgIHByb3BLZXlzLmRlbGV0ZShcImJvcmRlcnNcIik7XG4gICAgfVxuICAgIHByb3BLZXlzLmZvckVhY2goKHByb3BLZXkpID0+IHtcbiAgICAgIGxvZy53YXJuKGBVbmtub3duIG5vZGUgcHJvcGVydHkgJHtwcm9wS2V5fWApO1xuICAgIH0pO1xuICB9XG4gIHVwZGF0ZU5vZGVCb3VuZHMobm9kZSwgcmVjdDIpO1xuICBub2RlLmludGVyc2VjdCA9IGZ1bmN0aW9uKHBvaW50Mikge1xuICAgIHJldHVybiBpbnRlcnNlY3QucmVjdChub2RlLCBwb2ludDIpO1xuICB9O1xuICByZXR1cm4gc2hhcGVTdmc7XG59O1xuY29uc3QgY29tcG9zaXRlID0gYXN5bmMgKHBhcmVudCwgbm9kZSkgPT4ge1xuICBjb25zdCB7IHNoYXBlU3ZnLCBiYm94LCBoYWxmUGFkZGluZyB9ID0gYXdhaXQgbGFiZWxIZWxwZXIoXG4gICAgcGFyZW50LFxuICAgIG5vZGUsXG4gICAgXCJub2RlIFwiICsgbm9kZS5jbGFzc2VzLFxuICAgIHRydWVcbiAgKTtcbiAgY29uc3QgcmVjdDIgPSBzaGFwZVN2Zy5pbnNlcnQoXCJyZWN0XCIsIFwiOmZpcnN0LWNoaWxkXCIpO1xuICBjb25zdCB0b3RhbFdpZHRoID0gbm9kZS5wb3NpdGlvbmVkID8gbm9kZS53aWR0aCA6IGJib3gud2lkdGggKyBub2RlLnBhZGRpbmc7XG4gIGNvbnN0IHRvdGFsSGVpZ2h0ID0gbm9kZS5wb3NpdGlvbmVkID8gbm9kZS5oZWlnaHQgOiBiYm94LmhlaWdodCArIG5vZGUucGFkZGluZztcbiAgY29uc3QgeCA9IG5vZGUucG9zaXRpb25lZCA/IC10b3RhbFdpZHRoIC8gMiA6IC1iYm94LndpZHRoIC8gMiAtIGhhbGZQYWRkaW5nO1xuICBjb25zdCB5ID0gbm9kZS5wb3NpdGlvbmVkID8gLXRvdGFsSGVpZ2h0IC8gMiA6IC1iYm94LmhlaWdodCAvIDIgLSBoYWxmUGFkZGluZztcbiAgcmVjdDIuYXR0cihcImNsYXNzXCIsIFwiYmFzaWMgY2x1c3RlciBjb21wb3NpdGUgbGFiZWwtY29udGFpbmVyXCIpLmF0dHIoXCJzdHlsZVwiLCBub2RlLnN0eWxlKS5hdHRyKFwicnhcIiwgbm9kZS5yeCkuYXR0cihcInJ5XCIsIG5vZGUucnkpLmF0dHIoXCJ4XCIsIHgpLmF0dHIoXCJ5XCIsIHkpLmF0dHIoXCJ3aWR0aFwiLCB0b3RhbFdpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIHRvdGFsSGVpZ2h0KTtcbiAgaWYgKG5vZGUucHJvcHMpIHtcbiAgICBjb25zdCBwcm9wS2V5cyA9IG5ldyBTZXQoT2JqZWN0LmtleXMobm9kZS5wcm9wcykpO1xuICAgIGlmIChub2RlLnByb3BzLmJvcmRlcnMpIHtcbiAgICAgIGFwcGx5Tm9kZVByb3BlcnR5Qm9yZGVycyhyZWN0Miwgbm9kZS5wcm9wcy5ib3JkZXJzLCB0b3RhbFdpZHRoLCB0b3RhbEhlaWdodCk7XG4gICAgICBwcm9wS2V5cy5kZWxldGUoXCJib3JkZXJzXCIpO1xuICAgIH1cbiAgICBwcm9wS2V5cy5mb3JFYWNoKChwcm9wS2V5KSA9PiB7XG4gICAgICBsb2cud2FybihgVW5rbm93biBub2RlIHByb3BlcnR5ICR7cHJvcEtleX1gKTtcbiAgICB9KTtcbiAgfVxuICB1cGRhdGVOb2RlQm91bmRzKG5vZGUsIHJlY3QyKTtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludDIpIHtcbiAgICByZXR1cm4gaW50ZXJzZWN0LnJlY3Qobm9kZSwgcG9pbnQyKTtcbiAgfTtcbiAgcmV0dXJuIHNoYXBlU3ZnO1xufTtcbmNvbnN0IGxhYmVsUmVjdCA9IGFzeW5jIChwYXJlbnQsIG5vZGUpID0+IHtcbiAgY29uc3QgeyBzaGFwZVN2ZyB9ID0gYXdhaXQgbGFiZWxIZWxwZXIocGFyZW50LCBub2RlLCBcImxhYmVsXCIsIHRydWUpO1xuICBsb2cudHJhY2UoXCJDbGFzc2VzID0gXCIsIG5vZGUuY2xhc3MpO1xuICBjb25zdCByZWN0MiA9IHNoYXBlU3ZnLmluc2VydChcInJlY3RcIiwgXCI6Zmlyc3QtY2hpbGRcIik7XG4gIGNvbnN0IHRvdGFsV2lkdGggPSAwO1xuICBjb25zdCB0b3RhbEhlaWdodCA9IDA7XG4gIHJlY3QyLmF0dHIoXCJ3aWR0aFwiLCB0b3RhbFdpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIHRvdGFsSGVpZ2h0KTtcbiAgc2hhcGVTdmcuYXR0cihcImNsYXNzXCIsIFwibGFiZWwgZWRnZUxhYmVsXCIpO1xuICBpZiAobm9kZS5wcm9wcykge1xuICAgIGNvbnN0IHByb3BLZXlzID0gbmV3IFNldChPYmplY3Qua2V5cyhub2RlLnByb3BzKSk7XG4gICAgaWYgKG5vZGUucHJvcHMuYm9yZGVycykge1xuICAgICAgYXBwbHlOb2RlUHJvcGVydHlCb3JkZXJzKHJlY3QyLCBub2RlLnByb3BzLmJvcmRlcnMsIHRvdGFsV2lkdGgsIHRvdGFsSGVpZ2h0KTtcbiAgICAgIHByb3BLZXlzLmRlbGV0ZShcImJvcmRlcnNcIik7XG4gICAgfVxuICAgIHByb3BLZXlzLmZvckVhY2goKHByb3BLZXkpID0+IHtcbiAgICAgIGxvZy53YXJuKGBVbmtub3duIG5vZGUgcHJvcGVydHkgJHtwcm9wS2V5fWApO1xuICAgIH0pO1xuICB9XG4gIHVwZGF0ZU5vZGVCb3VuZHMobm9kZSwgcmVjdDIpO1xuICBub2RlLmludGVyc2VjdCA9IGZ1bmN0aW9uKHBvaW50Mikge1xuICAgIHJldHVybiBpbnRlcnNlY3QucmVjdChub2RlLCBwb2ludDIpO1xuICB9O1xuICByZXR1cm4gc2hhcGVTdmc7XG59O1xuZnVuY3Rpb24gYXBwbHlOb2RlUHJvcGVydHlCb3JkZXJzKHJlY3QyLCBib3JkZXJzLCB0b3RhbFdpZHRoLCB0b3RhbEhlaWdodCkge1xuICBjb25zdCBzdHJva2VEYXNoQXJyYXkgPSBbXTtcbiAgY29uc3QgYWRkQm9yZGVyID0gKGxlbmd0aCkgPT4ge1xuICAgIHN0cm9rZURhc2hBcnJheS5wdXNoKGxlbmd0aCwgMCk7XG4gIH07XG4gIGNvbnN0IHNraXBCb3JkZXIgPSAobGVuZ3RoKSA9PiB7XG4gICAgc3Ryb2tlRGFzaEFycmF5LnB1c2goMCwgbGVuZ3RoKTtcbiAgfTtcbiAgaWYgKGJvcmRlcnMuaW5jbHVkZXMoXCJ0XCIpKSB7XG4gICAgbG9nLmRlYnVnKFwiYWRkIHRvcCBib3JkZXJcIik7XG4gICAgYWRkQm9yZGVyKHRvdGFsV2lkdGgpO1xuICB9IGVsc2Uge1xuICAgIHNraXBCb3JkZXIodG90YWxXaWR0aCk7XG4gIH1cbiAgaWYgKGJvcmRlcnMuaW5jbHVkZXMoXCJyXCIpKSB7XG4gICAgbG9nLmRlYnVnKFwiYWRkIHJpZ2h0IGJvcmRlclwiKTtcbiAgICBhZGRCb3JkZXIodG90YWxIZWlnaHQpO1xuICB9IGVsc2Uge1xuICAgIHNraXBCb3JkZXIodG90YWxIZWlnaHQpO1xuICB9XG4gIGlmIChib3JkZXJzLmluY2x1ZGVzKFwiYlwiKSkge1xuICAgIGxvZy5kZWJ1ZyhcImFkZCBib3R0b20gYm9yZGVyXCIpO1xuICAgIGFkZEJvcmRlcih0b3RhbFdpZHRoKTtcbiAgfSBlbHNlIHtcbiAgICBza2lwQm9yZGVyKHRvdGFsV2lkdGgpO1xuICB9XG4gIGlmIChib3JkZXJzLmluY2x1ZGVzKFwibFwiKSkge1xuICAgIGxvZy5kZWJ1ZyhcImFkZCBsZWZ0IGJvcmRlclwiKTtcbiAgICBhZGRCb3JkZXIodG90YWxIZWlnaHQpO1xuICB9IGVsc2Uge1xuICAgIHNraXBCb3JkZXIodG90YWxIZWlnaHQpO1xuICB9XG4gIHJlY3QyLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIHN0cm9rZURhc2hBcnJheS5qb2luKFwiIFwiKSk7XG59XG5jb25zdCByZWN0V2l0aFRpdGxlID0gKHBhcmVudCwgbm9kZSkgPT4ge1xuICBsZXQgY2xhc3NlcztcbiAgaWYgKCFub2RlLmNsYXNzZXMpIHtcbiAgICBjbGFzc2VzID0gXCJub2RlIGRlZmF1bHRcIjtcbiAgfSBlbHNlIHtcbiAgICBjbGFzc2VzID0gXCJub2RlIFwiICsgbm9kZS5jbGFzc2VzO1xuICB9XG4gIGNvbnN0IHNoYXBlU3ZnID0gcGFyZW50Lmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIGNsYXNzZXMpLmF0dHIoXCJpZFwiLCBub2RlLmRvbUlkIHx8IG5vZGUuaWQpO1xuICBjb25zdCByZWN0MiA9IHNoYXBlU3ZnLmluc2VydChcInJlY3RcIiwgXCI6Zmlyc3QtY2hpbGRcIik7XG4gIGNvbnN0IGlubmVyTGluZSA9IHNoYXBlU3ZnLmluc2VydChcImxpbmVcIik7XG4gIGNvbnN0IGxhYmVsID0gc2hhcGVTdmcuaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbFwiKTtcbiAgY29uc3QgdGV4dDIgPSBub2RlLmxhYmVsVGV4dC5mbGF0ID8gbm9kZS5sYWJlbFRleHQuZmxhdCgpIDogbm9kZS5sYWJlbFRleHQ7XG4gIGxldCB0aXRsZSA9IFwiXCI7XG4gIGlmICh0eXBlb2YgdGV4dDIgPT09IFwib2JqZWN0XCIpIHtcbiAgICB0aXRsZSA9IHRleHQyWzBdO1xuICB9IGVsc2Uge1xuICAgIHRpdGxlID0gdGV4dDI7XG4gIH1cbiAgbG9nLmluZm8oXCJMYWJlbCB0ZXh0IGFiYzc5XCIsIHRpdGxlLCB0ZXh0MiwgdHlwZW9mIHRleHQyID09PSBcIm9iamVjdFwiKTtcbiAgY29uc3QgdGV4dCA9IGxhYmVsLm5vZGUoKS5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCQxKHRpdGxlLCBub2RlLmxhYmVsU3R5bGUsIHRydWUsIHRydWUpKTtcbiAgbGV0IGJib3ggPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgaWYgKGV2YWx1YXRlKGdldENvbmZpZygpLmZsb3djaGFydC5odG1sTGFiZWxzKSkge1xuICAgIGNvbnN0IGRpdiA9IHRleHQuY2hpbGRyZW5bMF07XG4gICAgY29uc3QgZHYgPSBzZWxlY3QodGV4dCk7XG4gICAgYmJveCA9IGRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBkdi5hdHRyKFwid2lkdGhcIiwgYmJveC53aWR0aCk7XG4gICAgZHYuYXR0cihcImhlaWdodFwiLCBiYm94LmhlaWdodCk7XG4gIH1cbiAgbG9nLmluZm8oXCJUZXh0IDJcIiwgdGV4dDIpO1xuICBjb25zdCB0ZXh0Um93cyA9IHRleHQyLnNsaWNlKDEsIHRleHQyLmxlbmd0aCk7XG4gIGxldCB0aXRsZUJveCA9IHRleHQuZ2V0QkJveCgpO1xuICBjb25zdCBkZXNjciA9IGxhYmVsLm5vZGUoKS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVMYWJlbCQxKHRleHRSb3dzLmpvaW4gPyB0ZXh0Um93cy5qb2luKFwiPGJyLz5cIikgOiB0ZXh0Um93cywgbm9kZS5sYWJlbFN0eWxlLCB0cnVlLCB0cnVlKVxuICApO1xuICBpZiAoZXZhbHVhdGUoZ2V0Q29uZmlnKCkuZmxvd2NoYXJ0Lmh0bWxMYWJlbHMpKSB7XG4gICAgY29uc3QgZGl2ID0gZGVzY3IuY2hpbGRyZW5bMF07XG4gICAgY29uc3QgZHYgPSBzZWxlY3QoZGVzY3IpO1xuICAgIGJib3ggPSBkaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgZHYuYXR0cihcIndpZHRoXCIsIGJib3gud2lkdGgpO1xuICAgIGR2LmF0dHIoXCJoZWlnaHRcIiwgYmJveC5oZWlnaHQpO1xuICB9XG4gIGNvbnN0IGhhbGZQYWRkaW5nID0gbm9kZS5wYWRkaW5nIC8gMjtcbiAgc2VsZWN0KGRlc2NyKS5hdHRyKFxuICAgIFwidHJhbnNmb3JtXCIsXG4gICAgXCJ0cmFuc2xhdGUoIFwiICsgLy8gKHRpdGxlQm94LndpZHRoIC0gYmJveC53aWR0aCkgLyAyICtcbiAgICAoYmJveC53aWR0aCA+IHRpdGxlQm94LndpZHRoID8gMCA6ICh0aXRsZUJveC53aWR0aCAtIGJib3gud2lkdGgpIC8gMikgKyBcIiwgXCIgKyAodGl0bGVCb3guaGVpZ2h0ICsgaGFsZlBhZGRpbmcgKyA1KSArIFwiKVwiXG4gICk7XG4gIHNlbGVjdCh0ZXh0KS5hdHRyKFxuICAgIFwidHJhbnNmb3JtXCIsXG4gICAgXCJ0cmFuc2xhdGUoIFwiICsgLy8gKHRpdGxlQm94LndpZHRoIC0gYmJveC53aWR0aCkgLyAyICtcbiAgICAoYmJveC53aWR0aCA8IHRpdGxlQm94LndpZHRoID8gMCA6IC0odGl0bGVCb3gud2lkdGggLSBiYm94LndpZHRoKSAvIDIpICsgXCIsIDApXCJcbiAgKTtcbiAgYmJveCA9IGxhYmVsLm5vZGUoKS5nZXRCQm94KCk7XG4gIGxhYmVsLmF0dHIoXG4gICAgXCJ0cmFuc2Zvcm1cIixcbiAgICBcInRyYW5zbGF0ZShcIiArIC1iYm94LndpZHRoIC8gMiArIFwiLCBcIiArICgtYmJveC5oZWlnaHQgLyAyIC0gaGFsZlBhZGRpbmcgKyAzKSArIFwiKVwiXG4gICk7XG4gIHJlY3QyLmF0dHIoXCJjbGFzc1wiLCBcIm91dGVyIHRpdGxlLXN0YXRlXCIpLmF0dHIoXCJ4XCIsIC1iYm94LndpZHRoIC8gMiAtIGhhbGZQYWRkaW5nKS5hdHRyKFwieVwiLCAtYmJveC5oZWlnaHQgLyAyIC0gaGFsZlBhZGRpbmcpLmF0dHIoXCJ3aWR0aFwiLCBiYm94LndpZHRoICsgbm9kZS5wYWRkaW5nKS5hdHRyKFwiaGVpZ2h0XCIsIGJib3guaGVpZ2h0ICsgbm9kZS5wYWRkaW5nKTtcbiAgaW5uZXJMaW5lLmF0dHIoXCJjbGFzc1wiLCBcImRpdmlkZXJcIikuYXR0cihcIngxXCIsIC1iYm94LndpZHRoIC8gMiAtIGhhbGZQYWRkaW5nKS5hdHRyKFwieDJcIiwgYmJveC53aWR0aCAvIDIgKyBoYWxmUGFkZGluZykuYXR0cihcInkxXCIsIC1iYm94LmhlaWdodCAvIDIgLSBoYWxmUGFkZGluZyArIHRpdGxlQm94LmhlaWdodCArIGhhbGZQYWRkaW5nKS5hdHRyKFwieTJcIiwgLWJib3guaGVpZ2h0IC8gMiAtIGhhbGZQYWRkaW5nICsgdGl0bGVCb3guaGVpZ2h0ICsgaGFsZlBhZGRpbmcpO1xuICB1cGRhdGVOb2RlQm91bmRzKG5vZGUsIHJlY3QyKTtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludDIpIHtcbiAgICByZXR1cm4gaW50ZXJzZWN0LnJlY3Qobm9kZSwgcG9pbnQyKTtcbiAgfTtcbiAgcmV0dXJuIHNoYXBlU3ZnO1xufTtcbmNvbnN0IHN0YWRpdW0gPSBhc3luYyAocGFyZW50LCBub2RlKSA9PiB7XG4gIGNvbnN0IHsgc2hhcGVTdmcsIGJib3ggfSA9IGF3YWl0IGxhYmVsSGVscGVyKFxuICAgIHBhcmVudCxcbiAgICBub2RlLFxuICAgIGdldENsYXNzZXNGcm9tTm9kZShub2RlLCB2b2lkIDApLFxuICAgIHRydWVcbiAgKTtcbiAgY29uc3QgaCA9IGJib3guaGVpZ2h0ICsgbm9kZS5wYWRkaW5nO1xuICBjb25zdCB3ID0gYmJveC53aWR0aCArIGggLyA0ICsgbm9kZS5wYWRkaW5nO1xuICBjb25zdCByZWN0MiA9IHNoYXBlU3ZnLmluc2VydChcInJlY3RcIiwgXCI6Zmlyc3QtY2hpbGRcIikuYXR0cihcInN0eWxlXCIsIG5vZGUuc3R5bGUpLmF0dHIoXCJyeFwiLCBoIC8gMikuYXR0cihcInJ5XCIsIGggLyAyKS5hdHRyKFwieFwiLCAtdyAvIDIpLmF0dHIoXCJ5XCIsIC1oIC8gMikuYXR0cihcIndpZHRoXCIsIHcpLmF0dHIoXCJoZWlnaHRcIiwgaCk7XG4gIHVwZGF0ZU5vZGVCb3VuZHMobm9kZSwgcmVjdDIpO1xuICBub2RlLmludGVyc2VjdCA9IGZ1bmN0aW9uKHBvaW50Mikge1xuICAgIHJldHVybiBpbnRlcnNlY3QucmVjdChub2RlLCBwb2ludDIpO1xuICB9O1xuICByZXR1cm4gc2hhcGVTdmc7XG59O1xuY29uc3QgY2lyY2xlID0gYXN5bmMgKHBhcmVudCwgbm9kZSkgPT4ge1xuICBjb25zdCB7IHNoYXBlU3ZnLCBiYm94LCBoYWxmUGFkZGluZyB9ID0gYXdhaXQgbGFiZWxIZWxwZXIoXG4gICAgcGFyZW50LFxuICAgIG5vZGUsXG4gICAgZ2V0Q2xhc3Nlc0Zyb21Ob2RlKG5vZGUsIHZvaWQgMCksXG4gICAgdHJ1ZVxuICApO1xuICBjb25zdCBjaXJjbGUyID0gc2hhcGVTdmcuaW5zZXJ0KFwiY2lyY2xlXCIsIFwiOmZpcnN0LWNoaWxkXCIpO1xuICBjaXJjbGUyLmF0dHIoXCJzdHlsZVwiLCBub2RlLnN0eWxlKS5hdHRyKFwicnhcIiwgbm9kZS5yeCkuYXR0cihcInJ5XCIsIG5vZGUucnkpLmF0dHIoXCJyXCIsIGJib3gud2lkdGggLyAyICsgaGFsZlBhZGRpbmcpLmF0dHIoXCJ3aWR0aFwiLCBiYm94LndpZHRoICsgbm9kZS5wYWRkaW5nKS5hdHRyKFwiaGVpZ2h0XCIsIGJib3guaGVpZ2h0ICsgbm9kZS5wYWRkaW5nKTtcbiAgbG9nLmluZm8oXCJDaXJjbGUgbWFpblwiKTtcbiAgdXBkYXRlTm9kZUJvdW5kcyhub2RlLCBjaXJjbGUyKTtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludDIpIHtcbiAgICBsb2cuaW5mbyhcIkNpcmNsZSBpbnRlcnNlY3RcIiwgbm9kZSwgYmJveC53aWR0aCAvIDIgKyBoYWxmUGFkZGluZywgcG9pbnQyKTtcbiAgICByZXR1cm4gaW50ZXJzZWN0LmNpcmNsZShub2RlLCBiYm94LndpZHRoIC8gMiArIGhhbGZQYWRkaW5nLCBwb2ludDIpO1xuICB9O1xuICByZXR1cm4gc2hhcGVTdmc7XG59O1xuY29uc3QgZG91YmxlY2lyY2xlID0gYXN5bmMgKHBhcmVudCwgbm9kZSkgPT4ge1xuICBjb25zdCB7IHNoYXBlU3ZnLCBiYm94LCBoYWxmUGFkZGluZyB9ID0gYXdhaXQgbGFiZWxIZWxwZXIoXG4gICAgcGFyZW50LFxuICAgIG5vZGUsXG4gICAgZ2V0Q2xhc3Nlc0Zyb21Ob2RlKG5vZGUsIHZvaWQgMCksXG4gICAgdHJ1ZVxuICApO1xuICBjb25zdCBnYXAgPSA1O1xuICBjb25zdCBjaXJjbGVHcm91cCA9IHNoYXBlU3ZnLmluc2VydChcImdcIiwgXCI6Zmlyc3QtY2hpbGRcIik7XG4gIGNvbnN0IG91dGVyQ2lyY2xlID0gY2lyY2xlR3JvdXAuaW5zZXJ0KFwiY2lyY2xlXCIpO1xuICBjb25zdCBpbm5lckNpcmNsZSA9IGNpcmNsZUdyb3VwLmluc2VydChcImNpcmNsZVwiKTtcbiAgY2lyY2xlR3JvdXAuYXR0cihcImNsYXNzXCIsIG5vZGUuY2xhc3MpO1xuICBvdXRlckNpcmNsZS5hdHRyKFwic3R5bGVcIiwgbm9kZS5zdHlsZSkuYXR0cihcInJ4XCIsIG5vZGUucngpLmF0dHIoXCJyeVwiLCBub2RlLnJ5KS5hdHRyKFwiclwiLCBiYm94LndpZHRoIC8gMiArIGhhbGZQYWRkaW5nICsgZ2FwKS5hdHRyKFwid2lkdGhcIiwgYmJveC53aWR0aCArIG5vZGUucGFkZGluZyArIGdhcCAqIDIpLmF0dHIoXCJoZWlnaHRcIiwgYmJveC5oZWlnaHQgKyBub2RlLnBhZGRpbmcgKyBnYXAgKiAyKTtcbiAgaW5uZXJDaXJjbGUuYXR0cihcInN0eWxlXCIsIG5vZGUuc3R5bGUpLmF0dHIoXCJyeFwiLCBub2RlLnJ4KS5hdHRyKFwicnlcIiwgbm9kZS5yeSkuYXR0cihcInJcIiwgYmJveC53aWR0aCAvIDIgKyBoYWxmUGFkZGluZykuYXR0cihcIndpZHRoXCIsIGJib3gud2lkdGggKyBub2RlLnBhZGRpbmcpLmF0dHIoXCJoZWlnaHRcIiwgYmJveC5oZWlnaHQgKyBub2RlLnBhZGRpbmcpO1xuICBsb2cuaW5mbyhcIkRvdWJsZUNpcmNsZSBtYWluXCIpO1xuICB1cGRhdGVOb2RlQm91bmRzKG5vZGUsIG91dGVyQ2lyY2xlKTtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludDIpIHtcbiAgICBsb2cuaW5mbyhcIkRvdWJsZUNpcmNsZSBpbnRlcnNlY3RcIiwgbm9kZSwgYmJveC53aWR0aCAvIDIgKyBoYWxmUGFkZGluZyArIGdhcCwgcG9pbnQyKTtcbiAgICByZXR1cm4gaW50ZXJzZWN0LmNpcmNsZShub2RlLCBiYm94LndpZHRoIC8gMiArIGhhbGZQYWRkaW5nICsgZ2FwLCBwb2ludDIpO1xuICB9O1xuICByZXR1cm4gc2hhcGVTdmc7XG59O1xuY29uc3Qgc3Vicm91dGluZSA9IGFzeW5jIChwYXJlbnQsIG5vZGUpID0+IHtcbiAgY29uc3QgeyBzaGFwZVN2ZywgYmJveCB9ID0gYXdhaXQgbGFiZWxIZWxwZXIoXG4gICAgcGFyZW50LFxuICAgIG5vZGUsXG4gICAgZ2V0Q2xhc3Nlc0Zyb21Ob2RlKG5vZGUsIHZvaWQgMCksXG4gICAgdHJ1ZVxuICApO1xuICBjb25zdCB3ID0gYmJveC53aWR0aCArIG5vZGUucGFkZGluZztcbiAgY29uc3QgaCA9IGJib3guaGVpZ2h0ICsgbm9kZS5wYWRkaW5nO1xuICBjb25zdCBwb2ludHMgPSBbXG4gICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgeyB4OiB3LCB5OiAwIH0sXG4gICAgeyB4OiB3LCB5OiAtaCB9LFxuICAgIHsgeDogMCwgeTogLWggfSxcbiAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICB7IHg6IC04LCB5OiAwIH0sXG4gICAgeyB4OiB3ICsgOCwgeTogMCB9LFxuICAgIHsgeDogdyArIDgsIHk6IC1oIH0sXG4gICAgeyB4OiAtOCwgeTogLWggfSxcbiAgICB7IHg6IC04LCB5OiAwIH1cbiAgXTtcbiAgY29uc3QgZWwgPSBpbnNlcnRQb2x5Z29uU2hhcGUoc2hhcGVTdmcsIHcsIGgsIHBvaW50cyk7XG4gIGVsLmF0dHIoXCJzdHlsZVwiLCBub2RlLnN0eWxlKTtcbiAgdXBkYXRlTm9kZUJvdW5kcyhub2RlLCBlbCk7XG4gIG5vZGUuaW50ZXJzZWN0ID0gZnVuY3Rpb24ocG9pbnQyKSB7XG4gICAgcmV0dXJuIGludGVyc2VjdC5wb2x5Z29uKG5vZGUsIHBvaW50cywgcG9pbnQyKTtcbiAgfTtcbiAgcmV0dXJuIHNoYXBlU3ZnO1xufTtcbmNvbnN0IHN0YXJ0ID0gKHBhcmVudCwgbm9kZSkgPT4ge1xuICBjb25zdCBzaGFwZVN2ZyA9IHBhcmVudC5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGUgZGVmYXVsdFwiKS5hdHRyKFwiaWRcIiwgbm9kZS5kb21JZCB8fCBub2RlLmlkKTtcbiAgY29uc3QgY2lyY2xlMiA9IHNoYXBlU3ZnLmluc2VydChcImNpcmNsZVwiLCBcIjpmaXJzdC1jaGlsZFwiKTtcbiAgY2lyY2xlMi5hdHRyKFwiY2xhc3NcIiwgXCJzdGF0ZS1zdGFydFwiKS5hdHRyKFwiclwiLCA3KS5hdHRyKFwid2lkdGhcIiwgMTQpLmF0dHIoXCJoZWlnaHRcIiwgMTQpO1xuICB1cGRhdGVOb2RlQm91bmRzKG5vZGUsIGNpcmNsZTIpO1xuICBub2RlLmludGVyc2VjdCA9IGZ1bmN0aW9uKHBvaW50Mikge1xuICAgIHJldHVybiBpbnRlcnNlY3QuY2lyY2xlKG5vZGUsIDcsIHBvaW50Mik7XG4gIH07XG4gIHJldHVybiBzaGFwZVN2Zztcbn07XG5jb25zdCBmb3JrSm9pbiA9IChwYXJlbnQsIG5vZGUsIGRpcikgPT4ge1xuICBjb25zdCBzaGFwZVN2ZyA9IHBhcmVudC5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGUgZGVmYXVsdFwiKS5hdHRyKFwiaWRcIiwgbm9kZS5kb21JZCB8fCBub2RlLmlkKTtcbiAgbGV0IHdpZHRoID0gNzA7XG4gIGxldCBoZWlnaHQgPSAxMDtcbiAgaWYgKGRpciA9PT0gXCJMUlwiKSB7XG4gICAgd2lkdGggPSAxMDtcbiAgICBoZWlnaHQgPSA3MDtcbiAgfVxuICBjb25zdCBzaGFwZSA9IHNoYXBlU3ZnLmFwcGVuZChcInJlY3RcIikuYXR0cihcInhcIiwgLTEgKiB3aWR0aCAvIDIpLmF0dHIoXCJ5XCIsIC0xICogaGVpZ2h0IC8gMikuYXR0cihcIndpZHRoXCIsIHdpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCkuYXR0cihcImNsYXNzXCIsIFwiZm9yay1qb2luXCIpO1xuICB1cGRhdGVOb2RlQm91bmRzKG5vZGUsIHNoYXBlKTtcbiAgbm9kZS5oZWlnaHQgPSBub2RlLmhlaWdodCArIG5vZGUucGFkZGluZyAvIDI7XG4gIG5vZGUud2lkdGggPSBub2RlLndpZHRoICsgbm9kZS5wYWRkaW5nIC8gMjtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludDIpIHtcbiAgICByZXR1cm4gaW50ZXJzZWN0LnJlY3Qobm9kZSwgcG9pbnQyKTtcbiAgfTtcbiAgcmV0dXJuIHNoYXBlU3ZnO1xufTtcbmNvbnN0IGVuZCA9IChwYXJlbnQsIG5vZGUpID0+IHtcbiAgY29uc3Qgc2hhcGVTdmcgPSBwYXJlbnQuaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJub2RlIGRlZmF1bHRcIikuYXR0cihcImlkXCIsIG5vZGUuZG9tSWQgfHwgbm9kZS5pZCk7XG4gIGNvbnN0IGlubmVyQ2lyY2xlID0gc2hhcGVTdmcuaW5zZXJ0KFwiY2lyY2xlXCIsIFwiOmZpcnN0LWNoaWxkXCIpO1xuICBjb25zdCBjaXJjbGUyID0gc2hhcGVTdmcuaW5zZXJ0KFwiY2lyY2xlXCIsIFwiOmZpcnN0LWNoaWxkXCIpO1xuICBjaXJjbGUyLmF0dHIoXCJjbGFzc1wiLCBcInN0YXRlLXN0YXJ0XCIpLmF0dHIoXCJyXCIsIDcpLmF0dHIoXCJ3aWR0aFwiLCAxNCkuYXR0cihcImhlaWdodFwiLCAxNCk7XG4gIGlubmVyQ2lyY2xlLmF0dHIoXCJjbGFzc1wiLCBcInN0YXRlLWVuZFwiKS5hdHRyKFwiclwiLCA1KS5hdHRyKFwid2lkdGhcIiwgMTApLmF0dHIoXCJoZWlnaHRcIiwgMTApO1xuICB1cGRhdGVOb2RlQm91bmRzKG5vZGUsIGNpcmNsZTIpO1xuICBub2RlLmludGVyc2VjdCA9IGZ1bmN0aW9uKHBvaW50Mikge1xuICAgIHJldHVybiBpbnRlcnNlY3QuY2lyY2xlKG5vZGUsIDcsIHBvaW50Mik7XG4gIH07XG4gIHJldHVybiBzaGFwZVN2Zztcbn07XG5jb25zdCBjbGFzc19ib3ggPSAocGFyZW50LCBub2RlKSA9PiB7XG4gIGNvbnN0IGhhbGZQYWRkaW5nID0gbm9kZS5wYWRkaW5nIC8gMjtcbiAgY29uc3Qgcm93UGFkZGluZyA9IDQ7XG4gIGNvbnN0IGxpbmVIZWlnaHQgPSA4O1xuICBsZXQgY2xhc3NlcztcbiAgaWYgKCFub2RlLmNsYXNzZXMpIHtcbiAgICBjbGFzc2VzID0gXCJub2RlIGRlZmF1bHRcIjtcbiAgfSBlbHNlIHtcbiAgICBjbGFzc2VzID0gXCJub2RlIFwiICsgbm9kZS5jbGFzc2VzO1xuICB9XG4gIGNvbnN0IHNoYXBlU3ZnID0gcGFyZW50Lmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIGNsYXNzZXMpLmF0dHIoXCJpZFwiLCBub2RlLmRvbUlkIHx8IG5vZGUuaWQpO1xuICBjb25zdCByZWN0MiA9IHNoYXBlU3ZnLmluc2VydChcInJlY3RcIiwgXCI6Zmlyc3QtY2hpbGRcIik7XG4gIGNvbnN0IHRvcExpbmUgPSBzaGFwZVN2Zy5pbnNlcnQoXCJsaW5lXCIpO1xuICBjb25zdCBib3R0b21MaW5lID0gc2hhcGVTdmcuaW5zZXJ0KFwibGluZVwiKTtcbiAgbGV0IG1heFdpZHRoID0gMDtcbiAgbGV0IG1heEhlaWdodCA9IHJvd1BhZGRpbmc7XG4gIGNvbnN0IGxhYmVsQ29udGFpbmVyID0gc2hhcGVTdmcuaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbFwiKTtcbiAgbGV0IHZlcnRpY2FsUG9zID0gMDtcbiAgY29uc3QgaGFzSW50ZXJmYWNlID0gbm9kZS5jbGFzc0RhdGEuYW5ub3RhdGlvbnMgJiYgbm9kZS5jbGFzc0RhdGEuYW5ub3RhdGlvbnNbMF07XG4gIGNvbnN0IGludGVyZmFjZUxhYmVsVGV4dCA9IG5vZGUuY2xhc3NEYXRhLmFubm90YXRpb25zWzBdID8gXCLCq1wiICsgbm9kZS5jbGFzc0RhdGEuYW5ub3RhdGlvbnNbMF0gKyBcIsK7XCIgOiBcIlwiO1xuICBjb25zdCBpbnRlcmZhY2VMYWJlbCA9IGxhYmVsQ29udGFpbmVyLm5vZGUoKS5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCQxKGludGVyZmFjZUxhYmVsVGV4dCwgbm9kZS5sYWJlbFN0eWxlLCB0cnVlLCB0cnVlKSk7XG4gIGxldCBpbnRlcmZhY2VCQm94ID0gaW50ZXJmYWNlTGFiZWwuZ2V0QkJveCgpO1xuICBpZiAoZXZhbHVhdGUoZ2V0Q29uZmlnKCkuZmxvd2NoYXJ0Lmh0bWxMYWJlbHMpKSB7XG4gICAgY29uc3QgZGl2ID0gaW50ZXJmYWNlTGFiZWwuY2hpbGRyZW5bMF07XG4gICAgY29uc3QgZHYgPSBzZWxlY3QoaW50ZXJmYWNlTGFiZWwpO1xuICAgIGludGVyZmFjZUJCb3ggPSBkaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgZHYuYXR0cihcIndpZHRoXCIsIGludGVyZmFjZUJCb3gud2lkdGgpO1xuICAgIGR2LmF0dHIoXCJoZWlnaHRcIiwgaW50ZXJmYWNlQkJveC5oZWlnaHQpO1xuICB9XG4gIGlmIChub2RlLmNsYXNzRGF0YS5hbm5vdGF0aW9uc1swXSkge1xuICAgIG1heEhlaWdodCArPSBpbnRlcmZhY2VCQm94LmhlaWdodCArIHJvd1BhZGRpbmc7XG4gICAgbWF4V2lkdGggKz0gaW50ZXJmYWNlQkJveC53aWR0aDtcbiAgfVxuICBsZXQgY2xhc3NUaXRsZVN0cmluZyA9IG5vZGUuY2xhc3NEYXRhLmxhYmVsO1xuICBpZiAobm9kZS5jbGFzc0RhdGEudHlwZSAhPT0gdm9pZCAwICYmIG5vZGUuY2xhc3NEYXRhLnR5cGUgIT09IFwiXCIpIHtcbiAgICBpZiAoZ2V0Q29uZmlnKCkuZmxvd2NoYXJ0Lmh0bWxMYWJlbHMpIHtcbiAgICAgIGNsYXNzVGl0bGVTdHJpbmcgKz0gXCImbHQ7XCIgKyBub2RlLmNsYXNzRGF0YS50eXBlICsgXCImZ3Q7XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsYXNzVGl0bGVTdHJpbmcgKz0gXCI8XCIgKyBub2RlLmNsYXNzRGF0YS50eXBlICsgXCI+XCI7XG4gICAgfVxuICB9XG4gIGNvbnN0IGNsYXNzVGl0bGVMYWJlbCA9IGxhYmVsQ29udGFpbmVyLm5vZGUoKS5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCQxKGNsYXNzVGl0bGVTdHJpbmcsIG5vZGUubGFiZWxTdHlsZSwgdHJ1ZSwgdHJ1ZSkpO1xuICBzZWxlY3QoY2xhc3NUaXRsZUxhYmVsKS5hdHRyKFwiY2xhc3NcIiwgXCJjbGFzc1RpdGxlXCIpO1xuICBsZXQgY2xhc3NUaXRsZUJCb3ggPSBjbGFzc1RpdGxlTGFiZWwuZ2V0QkJveCgpO1xuICBpZiAoZXZhbHVhdGUoZ2V0Q29uZmlnKCkuZmxvd2NoYXJ0Lmh0bWxMYWJlbHMpKSB7XG4gICAgY29uc3QgZGl2ID0gY2xhc3NUaXRsZUxhYmVsLmNoaWxkcmVuWzBdO1xuICAgIGNvbnN0IGR2ID0gc2VsZWN0KGNsYXNzVGl0bGVMYWJlbCk7XG4gICAgY2xhc3NUaXRsZUJCb3ggPSBkaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgZHYuYXR0cihcIndpZHRoXCIsIGNsYXNzVGl0bGVCQm94LndpZHRoKTtcbiAgICBkdi5hdHRyKFwiaGVpZ2h0XCIsIGNsYXNzVGl0bGVCQm94LmhlaWdodCk7XG4gIH1cbiAgbWF4SGVpZ2h0ICs9IGNsYXNzVGl0bGVCQm94LmhlaWdodCArIHJvd1BhZGRpbmc7XG4gIGlmIChjbGFzc1RpdGxlQkJveC53aWR0aCA+IG1heFdpZHRoKSB7XG4gICAgbWF4V2lkdGggPSBjbGFzc1RpdGxlQkJveC53aWR0aDtcbiAgfVxuICBjb25zdCBjbGFzc0F0dHJpYnV0ZXMgPSBbXTtcbiAgbm9kZS5jbGFzc0RhdGEubWVtYmVycy5mb3JFYWNoKChtZW1iZXIpID0+IHtcbiAgICBjb25zdCBwYXJzZWRJbmZvID0gbWVtYmVyLmdldERpc3BsYXlEZXRhaWxzKCk7XG4gICAgbGV0IHBhcnNlZFRleHQgPSBwYXJzZWRJbmZvLmRpc3BsYXlUZXh0O1xuICAgIGlmIChnZXRDb25maWcoKS5mbG93Y2hhcnQuaHRtbExhYmVscykge1xuICAgICAgcGFyc2VkVGV4dCA9IHBhcnNlZFRleHQucmVwbGFjZSgvPC9nLCBcIiZsdDtcIikucmVwbGFjZSgvPi9nLCBcIiZndDtcIik7XG4gICAgfVxuICAgIGNvbnN0IGxibCA9IGxhYmVsQ29udGFpbmVyLm5vZGUoKS5hcHBlbmRDaGlsZChcbiAgICAgIGNyZWF0ZUxhYmVsJDEoXG4gICAgICAgIHBhcnNlZFRleHQsXG4gICAgICAgIHBhcnNlZEluZm8uY3NzU3R5bGUgPyBwYXJzZWRJbmZvLmNzc1N0eWxlIDogbm9kZS5sYWJlbFN0eWxlLFxuICAgICAgICB0cnVlLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgKTtcbiAgICBsZXQgYmJveCA9IGxibC5nZXRCQm94KCk7XG4gICAgaWYgKGV2YWx1YXRlKGdldENvbmZpZygpLmZsb3djaGFydC5odG1sTGFiZWxzKSkge1xuICAgICAgY29uc3QgZGl2ID0gbGJsLmNoaWxkcmVuWzBdO1xuICAgICAgY29uc3QgZHYgPSBzZWxlY3QobGJsKTtcbiAgICAgIGJib3ggPSBkaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBkdi5hdHRyKFwid2lkdGhcIiwgYmJveC53aWR0aCk7XG4gICAgICBkdi5hdHRyKFwiaGVpZ2h0XCIsIGJib3guaGVpZ2h0KTtcbiAgICB9XG4gICAgaWYgKGJib3gud2lkdGggPiBtYXhXaWR0aCkge1xuICAgICAgbWF4V2lkdGggPSBiYm94LndpZHRoO1xuICAgIH1cbiAgICBtYXhIZWlnaHQgKz0gYmJveC5oZWlnaHQgKyByb3dQYWRkaW5nO1xuICAgIGNsYXNzQXR0cmlidXRlcy5wdXNoKGxibCk7XG4gIH0pO1xuICBtYXhIZWlnaHQgKz0gbGluZUhlaWdodDtcbiAgY29uc3QgY2xhc3NNZXRob2RzID0gW107XG4gIG5vZGUuY2xhc3NEYXRhLm1ldGhvZHMuZm9yRWFjaCgobWVtYmVyKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkSW5mbyA9IG1lbWJlci5nZXREaXNwbGF5RGV0YWlscygpO1xuICAgIGxldCBkaXNwbGF5VGV4dCA9IHBhcnNlZEluZm8uZGlzcGxheVRleHQ7XG4gICAgaWYgKGdldENvbmZpZygpLmZsb3djaGFydC5odG1sTGFiZWxzKSB7XG4gICAgICBkaXNwbGF5VGV4dCA9IGRpc3BsYXlUZXh0LnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpO1xuICAgIH1cbiAgICBjb25zdCBsYmwgPSBsYWJlbENvbnRhaW5lci5ub2RlKCkuYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVMYWJlbCQxKFxuICAgICAgICBkaXNwbGF5VGV4dCxcbiAgICAgICAgcGFyc2VkSW5mby5jc3NTdHlsZSA/IHBhcnNlZEluZm8uY3NzU3R5bGUgOiBub2RlLmxhYmVsU3R5bGUsXG4gICAgICAgIHRydWUsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICApO1xuICAgIGxldCBiYm94ID0gbGJsLmdldEJCb3goKTtcbiAgICBpZiAoZXZhbHVhdGUoZ2V0Q29uZmlnKCkuZmxvd2NoYXJ0Lmh0bWxMYWJlbHMpKSB7XG4gICAgICBjb25zdCBkaXYgPSBsYmwuY2hpbGRyZW5bMF07XG4gICAgICBjb25zdCBkdiA9IHNlbGVjdChsYmwpO1xuICAgICAgYmJveCA9IGRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGR2LmF0dHIoXCJ3aWR0aFwiLCBiYm94LndpZHRoKTtcbiAgICAgIGR2LmF0dHIoXCJoZWlnaHRcIiwgYmJveC5oZWlnaHQpO1xuICAgIH1cbiAgICBpZiAoYmJveC53aWR0aCA+IG1heFdpZHRoKSB7XG4gICAgICBtYXhXaWR0aCA9IGJib3gud2lkdGg7XG4gICAgfVxuICAgIG1heEhlaWdodCArPSBiYm94LmhlaWdodCArIHJvd1BhZGRpbmc7XG4gICAgY2xhc3NNZXRob2RzLnB1c2gobGJsKTtcbiAgfSk7XG4gIG1heEhlaWdodCArPSBsaW5lSGVpZ2h0O1xuICBpZiAoaGFzSW50ZXJmYWNlKSB7XG4gICAgbGV0IGRpZmZYMiA9IChtYXhXaWR0aCAtIGludGVyZmFjZUJCb3gud2lkdGgpIC8gMjtcbiAgICBzZWxlY3QoaW50ZXJmYWNlTGFiZWwpLmF0dHIoXG4gICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoIFwiICsgKC0xICogbWF4V2lkdGggLyAyICsgZGlmZlgyKSArIFwiLCBcIiArIC0xICogbWF4SGVpZ2h0IC8gMiArIFwiKVwiXG4gICAgKTtcbiAgICB2ZXJ0aWNhbFBvcyA9IGludGVyZmFjZUJCb3guaGVpZ2h0ICsgcm93UGFkZGluZztcbiAgfVxuICBsZXQgZGlmZlggPSAobWF4V2lkdGggLSBjbGFzc1RpdGxlQkJveC53aWR0aCkgLyAyO1xuICBzZWxlY3QoY2xhc3NUaXRsZUxhYmVsKS5hdHRyKFxuICAgIFwidHJhbnNmb3JtXCIsXG4gICAgXCJ0cmFuc2xhdGUoIFwiICsgKC0xICogbWF4V2lkdGggLyAyICsgZGlmZlgpICsgXCIsIFwiICsgKC0xICogbWF4SGVpZ2h0IC8gMiArIHZlcnRpY2FsUG9zKSArIFwiKVwiXG4gICk7XG4gIHZlcnRpY2FsUG9zICs9IGNsYXNzVGl0bGVCQm94LmhlaWdodCArIHJvd1BhZGRpbmc7XG4gIHRvcExpbmUuYXR0cihcImNsYXNzXCIsIFwiZGl2aWRlclwiKS5hdHRyKFwieDFcIiwgLW1heFdpZHRoIC8gMiAtIGhhbGZQYWRkaW5nKS5hdHRyKFwieDJcIiwgbWF4V2lkdGggLyAyICsgaGFsZlBhZGRpbmcpLmF0dHIoXCJ5MVwiLCAtbWF4SGVpZ2h0IC8gMiAtIGhhbGZQYWRkaW5nICsgbGluZUhlaWdodCArIHZlcnRpY2FsUG9zKS5hdHRyKFwieTJcIiwgLW1heEhlaWdodCAvIDIgLSBoYWxmUGFkZGluZyArIGxpbmVIZWlnaHQgKyB2ZXJ0aWNhbFBvcyk7XG4gIHZlcnRpY2FsUG9zICs9IGxpbmVIZWlnaHQ7XG4gIGNsYXNzQXR0cmlidXRlcy5mb3JFYWNoKChsYmwpID0+IHtcbiAgICBzZWxlY3QobGJsKS5hdHRyKFxuICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgIFwidHJhbnNsYXRlKCBcIiArIC1tYXhXaWR0aCAvIDIgKyBcIiwgXCIgKyAoLTEgKiBtYXhIZWlnaHQgLyAyICsgdmVydGljYWxQb3MgKyBsaW5lSGVpZ2h0IC8gMikgKyBcIilcIlxuICAgICk7XG4gICAgY29uc3QgbWVtYmVyQkJveCA9IGxibCA9PSBudWxsID8gdm9pZCAwIDogbGJsLmdldEJCb3goKTtcbiAgICB2ZXJ0aWNhbFBvcyArPSAoKG1lbWJlckJCb3ggPT0gbnVsbCA/IHZvaWQgMCA6IG1lbWJlckJCb3guaGVpZ2h0KSA/PyAwKSArIHJvd1BhZGRpbmc7XG4gIH0pO1xuICB2ZXJ0aWNhbFBvcyArPSBsaW5lSGVpZ2h0O1xuICBib3R0b21MaW5lLmF0dHIoXCJjbGFzc1wiLCBcImRpdmlkZXJcIikuYXR0cihcIngxXCIsIC1tYXhXaWR0aCAvIDIgLSBoYWxmUGFkZGluZykuYXR0cihcIngyXCIsIG1heFdpZHRoIC8gMiArIGhhbGZQYWRkaW5nKS5hdHRyKFwieTFcIiwgLW1heEhlaWdodCAvIDIgLSBoYWxmUGFkZGluZyArIGxpbmVIZWlnaHQgKyB2ZXJ0aWNhbFBvcykuYXR0cihcInkyXCIsIC1tYXhIZWlnaHQgLyAyIC0gaGFsZlBhZGRpbmcgKyBsaW5lSGVpZ2h0ICsgdmVydGljYWxQb3MpO1xuICB2ZXJ0aWNhbFBvcyArPSBsaW5lSGVpZ2h0O1xuICBjbGFzc01ldGhvZHMuZm9yRWFjaCgobGJsKSA9PiB7XG4gICAgc2VsZWN0KGxibCkuYXR0cihcbiAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICBcInRyYW5zbGF0ZSggXCIgKyAtbWF4V2lkdGggLyAyICsgXCIsIFwiICsgKC0xICogbWF4SGVpZ2h0IC8gMiArIHZlcnRpY2FsUG9zKSArIFwiKVwiXG4gICAgKTtcbiAgICBjb25zdCBtZW1iZXJCQm94ID0gbGJsID09IG51bGwgPyB2b2lkIDAgOiBsYmwuZ2V0QkJveCgpO1xuICAgIHZlcnRpY2FsUG9zICs9ICgobWVtYmVyQkJveCA9PSBudWxsID8gdm9pZCAwIDogbWVtYmVyQkJveC5oZWlnaHQpID8/IDApICsgcm93UGFkZGluZztcbiAgfSk7XG4gIHJlY3QyLmF0dHIoXCJzdHlsZVwiLCBub2RlLnN0eWxlKS5hdHRyKFwiY2xhc3NcIiwgXCJvdXRlciB0aXRsZS1zdGF0ZVwiKS5hdHRyKFwieFwiLCAtbWF4V2lkdGggLyAyIC0gaGFsZlBhZGRpbmcpLmF0dHIoXCJ5XCIsIC0obWF4SGVpZ2h0IC8gMikgLSBoYWxmUGFkZGluZykuYXR0cihcIndpZHRoXCIsIG1heFdpZHRoICsgbm9kZS5wYWRkaW5nKS5hdHRyKFwiaGVpZ2h0XCIsIG1heEhlaWdodCArIG5vZGUucGFkZGluZyk7XG4gIHVwZGF0ZU5vZGVCb3VuZHMobm9kZSwgcmVjdDIpO1xuICBub2RlLmludGVyc2VjdCA9IGZ1bmN0aW9uKHBvaW50Mikge1xuICAgIHJldHVybiBpbnRlcnNlY3QucmVjdChub2RlLCBwb2ludDIpO1xuICB9O1xuICByZXR1cm4gc2hhcGVTdmc7XG59O1xuY29uc3Qgc2hhcGVzID0ge1xuICByaG9tYnVzOiBxdWVzdGlvbixcbiAgY29tcG9zaXRlLFxuICBxdWVzdGlvbixcbiAgcmVjdCxcbiAgbGFiZWxSZWN0LFxuICByZWN0V2l0aFRpdGxlLFxuICBjaG9pY2UsXG4gIGNpcmNsZSxcbiAgZG91YmxlY2lyY2xlLFxuICBzdGFkaXVtLFxuICBoZXhhZ29uLFxuICBibG9ja19hcnJvdyxcbiAgcmVjdF9sZWZ0X2ludl9hcnJvdyxcbiAgbGVhbl9yaWdodCxcbiAgbGVhbl9sZWZ0LFxuICB0cmFwZXpvaWQsXG4gIGludl90cmFwZXpvaWQsXG4gIHJlY3RfcmlnaHRfaW52X2Fycm93LFxuICBjeWxpbmRlcixcbiAgc3RhcnQsXG4gIGVuZCxcbiAgbm90ZTogbm90ZSQxLFxuICBzdWJyb3V0aW5lLFxuICBmb3JrOiBmb3JrSm9pbixcbiAgam9pbjogZm9ya0pvaW4sXG4gIGNsYXNzX2JveFxufTtcbmxldCBub2RlRWxlbXMgPSB7fTtcbmNvbnN0IGluc2VydE5vZGUgPSBhc3luYyAoZWxlbSwgbm9kZSwgZGlyKSA9PiB7XG4gIGxldCBuZXdFbDtcbiAgbGV0IGVsO1xuICBpZiAobm9kZS5saW5rKSB7XG4gICAgbGV0IHRhcmdldDtcbiAgICBpZiAoZ2V0Q29uZmlnKCkuc2VjdXJpdHlMZXZlbCA9PT0gXCJzYW5kYm94XCIpIHtcbiAgICAgIHRhcmdldCA9IFwiX3RvcFwiO1xuICAgIH0gZWxzZSBpZiAobm9kZS5saW5rVGFyZ2V0KSB7XG4gICAgICB0YXJnZXQgPSBub2RlLmxpbmtUYXJnZXQgfHwgXCJfYmxhbmtcIjtcbiAgICB9XG4gICAgbmV3RWwgPSBlbGVtLmluc2VydChcInN2ZzphXCIpLmF0dHIoXCJ4bGluazpocmVmXCIsIG5vZGUubGluaykuYXR0cihcInRhcmdldFwiLCB0YXJnZXQpO1xuICAgIGVsID0gYXdhaXQgc2hhcGVzW25vZGUuc2hhcGVdKG5ld0VsLCBub2RlLCBkaXIpO1xuICB9IGVsc2Uge1xuICAgIGVsID0gYXdhaXQgc2hhcGVzW25vZGUuc2hhcGVdKGVsZW0sIG5vZGUsIGRpcik7XG4gICAgbmV3RWwgPSBlbDtcbiAgfVxuICBpZiAobm9kZS50b29sdGlwKSB7XG4gICAgZWwuYXR0cihcInRpdGxlXCIsIG5vZGUudG9vbHRpcCk7XG4gIH1cbiAgaWYgKG5vZGUuY2xhc3MpIHtcbiAgICBlbC5hdHRyKFwiY2xhc3NcIiwgXCJub2RlIGRlZmF1bHQgXCIgKyBub2RlLmNsYXNzKTtcbiAgfVxuICBuZXdFbC5hdHRyKFwiZGF0YS1ub2RlXCIsIFwidHJ1ZVwiKTtcbiAgbmV3RWwuYXR0cihcImRhdGEtaWRcIiwgbm9kZS5pZCk7XG4gIG5vZGVFbGVtc1tub2RlLmlkXSA9IG5ld0VsO1xuICBpZiAobm9kZS5oYXZlQ2FsbGJhY2spIHtcbiAgICBub2RlRWxlbXNbbm9kZS5pZF0uYXR0cihcImNsYXNzXCIsIG5vZGVFbGVtc1tub2RlLmlkXS5hdHRyKFwiY2xhc3NcIikgKyBcIiBjbGlja2FibGVcIik7XG4gIH1cbiAgcmV0dXJuIG5ld0VsO1xufTtcbmNvbnN0IHNldE5vZGVFbGVtID0gKGVsZW0sIG5vZGUpID0+IHtcbiAgbm9kZUVsZW1zW25vZGUuaWRdID0gZWxlbTtcbn07XG5jb25zdCBjbGVhciQxID0gKCkgPT4ge1xuICBub2RlRWxlbXMgPSB7fTtcbn07XG5jb25zdCBwb3NpdGlvbk5vZGUgPSAobm9kZSkgPT4ge1xuICBjb25zdCBlbCA9IG5vZGVFbGVtc1tub2RlLmlkXTtcbiAgbG9nLnRyYWNlKFxuICAgIFwiVHJhbnNmb3JtaW5nIG5vZGVcIixcbiAgICBub2RlLmRpZmYsXG4gICAgbm9kZSxcbiAgICBcInRyYW5zbGF0ZShcIiArIChub2RlLnggLSBub2RlLndpZHRoIC8gMiAtIDUpICsgXCIsIFwiICsgbm9kZS53aWR0aCAvIDIgKyBcIilcIlxuICApO1xuICBjb25zdCBwYWRkaW5nID0gODtcbiAgY29uc3QgZGlmZiA9IG5vZGUuZGlmZiB8fCAwO1xuICBpZiAobm9kZS5jbHVzdGVyTm9kZSkge1xuICAgIGVsLmF0dHIoXG4gICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoXCIgKyAobm9kZS54ICsgZGlmZiAtIG5vZGUud2lkdGggLyAyKSArIFwiLCBcIiArIChub2RlLnkgLSBub2RlLmhlaWdodCAvIDIgLSBwYWRkaW5nKSArIFwiKVwiXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBlbC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbm9kZS54ICsgXCIsIFwiICsgbm9kZS55ICsgXCIpXCIpO1xuICB9XG4gIHJldHVybiBkaWZmO1xufTtcbmNvbnN0IGdldFN1YkdyYXBoVGl0bGVNYXJnaW5zID0gKHtcbiAgZmxvd2NoYXJ0XG59KSA9PiB7XG4gIHZhciBfYSwgX2I7XG4gIGNvbnN0IHN1YkdyYXBoVGl0bGVUb3BNYXJnaW4gPSAoKF9hID0gZmxvd2NoYXJ0ID09IG51bGwgPyB2b2lkIDAgOiBmbG93Y2hhcnQuc3ViR3JhcGhUaXRsZU1hcmdpbikgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnRvcCkgPz8gMDtcbiAgY29uc3Qgc3ViR3JhcGhUaXRsZUJvdHRvbU1hcmdpbiA9ICgoX2IgPSBmbG93Y2hhcnQgPT0gbnVsbCA/IHZvaWQgMCA6IGZsb3djaGFydC5zdWJHcmFwaFRpdGxlTWFyZ2luKSA9PSBudWxsID8gdm9pZCAwIDogX2IuYm90dG9tKSA/PyAwO1xuICBjb25zdCBzdWJHcmFwaFRpdGxlVG90YWxNYXJnaW4gPSBzdWJHcmFwaFRpdGxlVG9wTWFyZ2luICsgc3ViR3JhcGhUaXRsZUJvdHRvbU1hcmdpbjtcbiAgcmV0dXJuIHtcbiAgICBzdWJHcmFwaFRpdGxlVG9wTWFyZ2luLFxuICAgIHN1YkdyYXBoVGl0bGVCb3R0b21NYXJnaW4sXG4gICAgc3ViR3JhcGhUaXRsZVRvdGFsTWFyZ2luXG4gIH07XG59O1xuY29uc3QgbWFya2VyT2Zmc2V0cyA9IHtcbiAgYWdncmVnYXRpb246IDE4LFxuICBleHRlbnNpb246IDE4LFxuICBjb21wb3NpdGlvbjogMTgsXG4gIGRlcGVuZGVuY3k6IDYsXG4gIGxvbGxpcG9wOiAxMy41LFxuICBhcnJvd19wb2ludDogNS4zXG59O1xuZnVuY3Rpb24gY2FsY3VsYXRlRGVsdGFBbmRBbmdsZShwb2ludDEsIHBvaW50Mikge1xuICBpZiAocG9pbnQxID09PSB2b2lkIDAgfHwgcG9pbnQyID09PSB2b2lkIDApIHtcbiAgICByZXR1cm4geyBhbmdsZTogMCwgZGVsdGFYOiAwLCBkZWx0YVk6IDAgfTtcbiAgfVxuICBwb2ludDEgPSBwb2ludFRyYW5zZm9ybWVyKHBvaW50MSk7XG4gIHBvaW50MiA9IHBvaW50VHJhbnNmb3JtZXIocG9pbnQyKTtcbiAgY29uc3QgW3gxLCB5MV0gPSBbcG9pbnQxLngsIHBvaW50MS55XTtcbiAgY29uc3QgW3gyLCB5Ml0gPSBbcG9pbnQyLngsIHBvaW50Mi55XTtcbiAgY29uc3QgZGVsdGFYID0geDIgLSB4MTtcbiAgY29uc3QgZGVsdGFZID0geTIgLSB5MTtcbiAgcmV0dXJuIHsgYW5nbGU6IE1hdGguYXRhbihkZWx0YVkgLyBkZWx0YVgpLCBkZWx0YVgsIGRlbHRhWSB9O1xufVxuY29uc3QgcG9pbnRUcmFuc2Zvcm1lciA9IChkYXRhKSA9PiB7XG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgcmV0dXJuIHsgeDogZGF0YVswXSwgeTogZGF0YVsxXSB9O1xuICB9XG4gIHJldHVybiBkYXRhO1xufTtcbmNvbnN0IGdldExpbmVGdW5jdGlvbnNXaXRoT2Zmc2V0ID0gKGVkZ2UpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB4OiBmdW5jdGlvbihkLCBpLCBkYXRhKSB7XG4gICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgIGlmIChpID09PSAwICYmIE9iamVjdC5oYXNPd24obWFya2VyT2Zmc2V0cywgZWRnZS5hcnJvd1R5cGVTdGFydCkpIHtcbiAgICAgICAgY29uc3QgeyBhbmdsZSwgZGVsdGFYIH0gPSBjYWxjdWxhdGVEZWx0YUFuZEFuZ2xlKGRhdGFbMF0sIGRhdGFbMV0pO1xuICAgICAgICBvZmZzZXQgPSBtYXJrZXJPZmZzZXRzW2VkZ2UuYXJyb3dUeXBlU3RhcnRdICogTWF0aC5jb3MoYW5nbGUpICogKGRlbHRhWCA+PSAwID8gMSA6IC0xKTtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gZGF0YS5sZW5ndGggLSAxICYmIE9iamVjdC5oYXNPd24obWFya2VyT2Zmc2V0cywgZWRnZS5hcnJvd1R5cGVFbmQpKSB7XG4gICAgICAgIGNvbnN0IHsgYW5nbGUsIGRlbHRhWCB9ID0gY2FsY3VsYXRlRGVsdGFBbmRBbmdsZShcbiAgICAgICAgICBkYXRhW2RhdGEubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgZGF0YVtkYXRhLmxlbmd0aCAtIDJdXG4gICAgICAgICk7XG4gICAgICAgIG9mZnNldCA9IG1hcmtlck9mZnNldHNbZWRnZS5hcnJvd1R5cGVFbmRdICogTWF0aC5jb3MoYW5nbGUpICogKGRlbHRhWCA+PSAwID8gMSA6IC0xKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwb2ludFRyYW5zZm9ybWVyKGQpLnggKyBvZmZzZXQ7XG4gICAgfSxcbiAgICB5OiBmdW5jdGlvbihkLCBpLCBkYXRhKSB7XG4gICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgIGlmIChpID09PSAwICYmIE9iamVjdC5oYXNPd24obWFya2VyT2Zmc2V0cywgZWRnZS5hcnJvd1R5cGVTdGFydCkpIHtcbiAgICAgICAgY29uc3QgeyBhbmdsZSwgZGVsdGFZIH0gPSBjYWxjdWxhdGVEZWx0YUFuZEFuZ2xlKGRhdGFbMF0sIGRhdGFbMV0pO1xuICAgICAgICBvZmZzZXQgPSBtYXJrZXJPZmZzZXRzW2VkZ2UuYXJyb3dUeXBlU3RhcnRdICogTWF0aC5hYnMoTWF0aC5zaW4oYW5nbGUpKSAqIChkZWx0YVkgPj0gMCA/IDEgOiAtMSk7XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IGRhdGEubGVuZ3RoIC0gMSAmJiBPYmplY3QuaGFzT3duKG1hcmtlck9mZnNldHMsIGVkZ2UuYXJyb3dUeXBlRW5kKSkge1xuICAgICAgICBjb25zdCB7IGFuZ2xlLCBkZWx0YVkgfSA9IGNhbGN1bGF0ZURlbHRhQW5kQW5nbGUoXG4gICAgICAgICAgZGF0YVtkYXRhLmxlbmd0aCAtIDFdLFxuICAgICAgICAgIGRhdGFbZGF0YS5sZW5ndGggLSAyXVxuICAgICAgICApO1xuICAgICAgICBvZmZzZXQgPSBtYXJrZXJPZmZzZXRzW2VkZ2UuYXJyb3dUeXBlRW5kXSAqIE1hdGguYWJzKE1hdGguc2luKGFuZ2xlKSkgKiAoZGVsdGFZID49IDAgPyAxIDogLTEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBvaW50VHJhbnNmb3JtZXIoZCkueSArIG9mZnNldDtcbiAgICB9XG4gIH07XG59O1xuY29uc3QgYWRkRWRnZU1hcmtlcnMgPSAoc3ZnUGF0aCwgZWRnZSwgdXJsLCBpZCwgZGlhZ3JhbVR5cGUpID0+IHtcbiAgaWYgKGVkZ2UuYXJyb3dUeXBlU3RhcnQpIHtcbiAgICBhZGRFZGdlTWFya2VyKHN2Z1BhdGgsIFwic3RhcnRcIiwgZWRnZS5hcnJvd1R5cGVTdGFydCwgdXJsLCBpZCwgZGlhZ3JhbVR5cGUpO1xuICB9XG4gIGlmIChlZGdlLmFycm93VHlwZUVuZCkge1xuICAgIGFkZEVkZ2VNYXJrZXIoc3ZnUGF0aCwgXCJlbmRcIiwgZWRnZS5hcnJvd1R5cGVFbmQsIHVybCwgaWQsIGRpYWdyYW1UeXBlKTtcbiAgfVxufTtcbmNvbnN0IGFycm93VHlwZXNNYXAgPSB7XG4gIGFycm93X2Nyb3NzOiBcImNyb3NzXCIsXG4gIGFycm93X3BvaW50OiBcInBvaW50XCIsXG4gIGFycm93X2JhcmI6IFwiYmFyYlwiLFxuICBhcnJvd19jaXJjbGU6IFwiY2lyY2xlXCIsXG4gIGFnZ3JlZ2F0aW9uOiBcImFnZ3JlZ2F0aW9uXCIsXG4gIGV4dGVuc2lvbjogXCJleHRlbnNpb25cIixcbiAgY29tcG9zaXRpb246IFwiY29tcG9zaXRpb25cIixcbiAgZGVwZW5kZW5jeTogXCJkZXBlbmRlbmN5XCIsXG4gIGxvbGxpcG9wOiBcImxvbGxpcG9wXCJcbn07XG5jb25zdCBhZGRFZGdlTWFya2VyID0gKHN2Z1BhdGgsIHBvc2l0aW9uLCBhcnJvd1R5cGUsIHVybCwgaWQsIGRpYWdyYW1UeXBlKSA9PiB7XG4gIGNvbnN0IGVuZE1hcmtlclR5cGUgPSBhcnJvd1R5cGVzTWFwW2Fycm93VHlwZV07XG4gIGlmICghZW5kTWFya2VyVHlwZSkge1xuICAgIGxvZy53YXJuKGBVbmtub3duIGFycm93IHR5cGU6ICR7YXJyb3dUeXBlfWApO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzdWZmaXggPSBwb3NpdGlvbiA9PT0gXCJzdGFydFwiID8gXCJTdGFydFwiIDogXCJFbmRcIjtcbiAgc3ZnUGF0aC5hdHRyKGBtYXJrZXItJHtwb3NpdGlvbn1gLCBgdXJsKCR7dXJsfSMke2lkfV8ke2RpYWdyYW1UeXBlfS0ke2VuZE1hcmtlclR5cGV9JHtzdWZmaXh9KWApO1xufTtcbmxldCBlZGdlTGFiZWxzID0ge307XG5sZXQgdGVybWluYWxMYWJlbHMgPSB7fTtcbmNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICBlZGdlTGFiZWxzID0ge307XG4gIHRlcm1pbmFsTGFiZWxzID0ge307XG59O1xuY29uc3QgaW5zZXJ0RWRnZUxhYmVsID0gKGVsZW0sIGVkZ2UpID0+IHtcbiAgY29uc3QgdXNlSHRtbExhYmVscyA9IGV2YWx1YXRlKGdldENvbmZpZygpLmZsb3djaGFydC5odG1sTGFiZWxzKTtcbiAgY29uc3QgbGFiZWxFbGVtZW50ID0gZWRnZS5sYWJlbFR5cGUgPT09IFwibWFya2Rvd25cIiA/IGNyZWF0ZVRleHQoZWxlbSwgZWRnZS5sYWJlbCwge1xuICAgIHN0eWxlOiBlZGdlLmxhYmVsU3R5bGUsXG4gICAgdXNlSHRtbExhYmVscyxcbiAgICBhZGRTdmdCYWNrZ3JvdW5kOiB0cnVlXG4gIH0pIDogY3JlYXRlTGFiZWwkMShlZGdlLmxhYmVsLCBlZGdlLmxhYmVsU3R5bGUpO1xuICBjb25zdCBlZGdlTGFiZWwgPSBlbGVtLmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiZWRnZUxhYmVsXCIpO1xuICBjb25zdCBsYWJlbCA9IGVkZ2VMYWJlbC5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsXCIpO1xuICBsYWJlbC5ub2RlKCkuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcbiAgbGV0IGJib3ggPSBsYWJlbEVsZW1lbnQuZ2V0QkJveCgpO1xuICBpZiAodXNlSHRtbExhYmVscykge1xuICAgIGNvbnN0IGRpdiA9IGxhYmVsRWxlbWVudC5jaGlsZHJlblswXTtcbiAgICBjb25zdCBkdiA9IHNlbGVjdChsYWJlbEVsZW1lbnQpO1xuICAgIGJib3ggPSBkaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgZHYuYXR0cihcIndpZHRoXCIsIGJib3gud2lkdGgpO1xuICAgIGR2LmF0dHIoXCJoZWlnaHRcIiwgYmJveC5oZWlnaHQpO1xuICB9XG4gIGxhYmVsLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAtYmJveC53aWR0aCAvIDIgKyBcIiwgXCIgKyAtYmJveC5oZWlnaHQgLyAyICsgXCIpXCIpO1xuICBlZGdlTGFiZWxzW2VkZ2UuaWRdID0gZWRnZUxhYmVsO1xuICBlZGdlLndpZHRoID0gYmJveC53aWR0aDtcbiAgZWRnZS5oZWlnaHQgPSBiYm94LmhlaWdodDtcbiAgbGV0IGZvO1xuICBpZiAoZWRnZS5zdGFydExhYmVsTGVmdCkge1xuICAgIGNvbnN0IHN0YXJ0TGFiZWxFbGVtZW50ID0gY3JlYXRlTGFiZWwkMShlZGdlLnN0YXJ0TGFiZWxMZWZ0LCBlZGdlLmxhYmVsU3R5bGUpO1xuICAgIGNvbnN0IHN0YXJ0RWRnZUxhYmVsTGVmdCA9IGVsZW0uaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJlZGdlVGVybWluYWxzXCIpO1xuICAgIGNvbnN0IGlubmVyID0gc3RhcnRFZGdlTGFiZWxMZWZ0Lmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiaW5uZXJcIik7XG4gICAgZm8gPSBpbm5lci5ub2RlKCkuYXBwZW5kQ2hpbGQoc3RhcnRMYWJlbEVsZW1lbnQpO1xuICAgIGNvbnN0IHNsQm94ID0gc3RhcnRMYWJlbEVsZW1lbnQuZ2V0QkJveCgpO1xuICAgIGlubmVyLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAtc2xCb3gud2lkdGggLyAyICsgXCIsIFwiICsgLXNsQm94LmhlaWdodCAvIDIgKyBcIilcIik7XG4gICAgaWYgKCF0ZXJtaW5hbExhYmVsc1tlZGdlLmlkXSkge1xuICAgICAgdGVybWluYWxMYWJlbHNbZWRnZS5pZF0gPSB7fTtcbiAgICB9XG4gICAgdGVybWluYWxMYWJlbHNbZWRnZS5pZF0uc3RhcnRMZWZ0ID0gc3RhcnRFZGdlTGFiZWxMZWZ0O1xuICAgIHNldFRlcm1pbmFsV2lkdGgoZm8sIGVkZ2Uuc3RhcnRMYWJlbExlZnQpO1xuICB9XG4gIGlmIChlZGdlLnN0YXJ0TGFiZWxSaWdodCkge1xuICAgIGNvbnN0IHN0YXJ0TGFiZWxFbGVtZW50ID0gY3JlYXRlTGFiZWwkMShlZGdlLnN0YXJ0TGFiZWxSaWdodCwgZWRnZS5sYWJlbFN0eWxlKTtcbiAgICBjb25zdCBzdGFydEVkZ2VMYWJlbFJpZ2h0ID0gZWxlbS5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImVkZ2VUZXJtaW5hbHNcIik7XG4gICAgY29uc3QgaW5uZXIgPSBzdGFydEVkZ2VMYWJlbFJpZ2h0Lmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiaW5uZXJcIik7XG4gICAgZm8gPSBzdGFydEVkZ2VMYWJlbFJpZ2h0Lm5vZGUoKS5hcHBlbmRDaGlsZChzdGFydExhYmVsRWxlbWVudCk7XG4gICAgaW5uZXIubm9kZSgpLmFwcGVuZENoaWxkKHN0YXJ0TGFiZWxFbGVtZW50KTtcbiAgICBjb25zdCBzbEJveCA9IHN0YXJ0TGFiZWxFbGVtZW50LmdldEJCb3goKTtcbiAgICBpbm5lci5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgLXNsQm94LndpZHRoIC8gMiArIFwiLCBcIiArIC1zbEJveC5oZWlnaHQgLyAyICsgXCIpXCIpO1xuICAgIGlmICghdGVybWluYWxMYWJlbHNbZWRnZS5pZF0pIHtcbiAgICAgIHRlcm1pbmFsTGFiZWxzW2VkZ2UuaWRdID0ge307XG4gICAgfVxuICAgIHRlcm1pbmFsTGFiZWxzW2VkZ2UuaWRdLnN0YXJ0UmlnaHQgPSBzdGFydEVkZ2VMYWJlbFJpZ2h0O1xuICAgIHNldFRlcm1pbmFsV2lkdGgoZm8sIGVkZ2Uuc3RhcnRMYWJlbFJpZ2h0KTtcbiAgfVxuICBpZiAoZWRnZS5lbmRMYWJlbExlZnQpIHtcbiAgICBjb25zdCBlbmRMYWJlbEVsZW1lbnQgPSBjcmVhdGVMYWJlbCQxKGVkZ2UuZW5kTGFiZWxMZWZ0LCBlZGdlLmxhYmVsU3R5bGUpO1xuICAgIGNvbnN0IGVuZEVkZ2VMYWJlbExlZnQgPSBlbGVtLmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiZWRnZVRlcm1pbmFsc1wiKTtcbiAgICBjb25zdCBpbm5lciA9IGVuZEVkZ2VMYWJlbExlZnQuaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJpbm5lclwiKTtcbiAgICBmbyA9IGlubmVyLm5vZGUoKS5hcHBlbmRDaGlsZChlbmRMYWJlbEVsZW1lbnQpO1xuICAgIGNvbnN0IHNsQm94ID0gZW5kTGFiZWxFbGVtZW50LmdldEJCb3goKTtcbiAgICBpbm5lci5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgLXNsQm94LndpZHRoIC8gMiArIFwiLCBcIiArIC1zbEJveC5oZWlnaHQgLyAyICsgXCIpXCIpO1xuICAgIGVuZEVkZ2VMYWJlbExlZnQubm9kZSgpLmFwcGVuZENoaWxkKGVuZExhYmVsRWxlbWVudCk7XG4gICAgaWYgKCF0ZXJtaW5hbExhYmVsc1tlZGdlLmlkXSkge1xuICAgICAgdGVybWluYWxMYWJlbHNbZWRnZS5pZF0gPSB7fTtcbiAgICB9XG4gICAgdGVybWluYWxMYWJlbHNbZWRnZS5pZF0uZW5kTGVmdCA9IGVuZEVkZ2VMYWJlbExlZnQ7XG4gICAgc2V0VGVybWluYWxXaWR0aChmbywgZWRnZS5lbmRMYWJlbExlZnQpO1xuICB9XG4gIGlmIChlZGdlLmVuZExhYmVsUmlnaHQpIHtcbiAgICBjb25zdCBlbmRMYWJlbEVsZW1lbnQgPSBjcmVhdGVMYWJlbCQxKGVkZ2UuZW5kTGFiZWxSaWdodCwgZWRnZS5sYWJlbFN0eWxlKTtcbiAgICBjb25zdCBlbmRFZGdlTGFiZWxSaWdodCA9IGVsZW0uaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJlZGdlVGVybWluYWxzXCIpO1xuICAgIGNvbnN0IGlubmVyID0gZW5kRWRnZUxhYmVsUmlnaHQuaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJpbm5lclwiKTtcbiAgICBmbyA9IGlubmVyLm5vZGUoKS5hcHBlbmRDaGlsZChlbmRMYWJlbEVsZW1lbnQpO1xuICAgIGNvbnN0IHNsQm94ID0gZW5kTGFiZWxFbGVtZW50LmdldEJCb3goKTtcbiAgICBpbm5lci5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgLXNsQm94LndpZHRoIC8gMiArIFwiLCBcIiArIC1zbEJveC5oZWlnaHQgLyAyICsgXCIpXCIpO1xuICAgIGVuZEVkZ2VMYWJlbFJpZ2h0Lm5vZGUoKS5hcHBlbmRDaGlsZChlbmRMYWJlbEVsZW1lbnQpO1xuICAgIGlmICghdGVybWluYWxMYWJlbHNbZWRnZS5pZF0pIHtcbiAgICAgIHRlcm1pbmFsTGFiZWxzW2VkZ2UuaWRdID0ge307XG4gICAgfVxuICAgIHRlcm1pbmFsTGFiZWxzW2VkZ2UuaWRdLmVuZFJpZ2h0ID0gZW5kRWRnZUxhYmVsUmlnaHQ7XG4gICAgc2V0VGVybWluYWxXaWR0aChmbywgZWRnZS5lbmRMYWJlbFJpZ2h0KTtcbiAgfVxuICByZXR1cm4gbGFiZWxFbGVtZW50O1xufTtcbmZ1bmN0aW9uIHNldFRlcm1pbmFsV2lkdGgoZm8sIHZhbHVlKSB7XG4gIGlmIChnZXRDb25maWcoKS5mbG93Y2hhcnQuaHRtbExhYmVscyAmJiBmbykge1xuICAgIGZvLnN0eWxlLndpZHRoID0gdmFsdWUubGVuZ3RoICogOSArIFwicHhcIjtcbiAgICBmby5zdHlsZS5oZWlnaHQgPSBcIjEycHhcIjtcbiAgfVxufVxuY29uc3QgcG9zaXRpb25FZGdlTGFiZWwgPSAoZWRnZSwgcGF0aHMpID0+IHtcbiAgbG9nLmRlYnVnKFwiTW92aW5nIGxhYmVsIGFiYzg4IFwiLCBlZGdlLmlkLCBlZGdlLmxhYmVsLCBlZGdlTGFiZWxzW2VkZ2UuaWRdLCBwYXRocyk7XG4gIGxldCBwYXRoID0gcGF0aHMudXBkYXRlZFBhdGggPyBwYXRocy51cGRhdGVkUGF0aCA6IHBhdGhzLm9yaWdpbmFsUGF0aDtcbiAgY29uc3Qgc2l0ZUNvbmZpZyA9IGdldENvbmZpZygpO1xuICBjb25zdCB7IHN1YkdyYXBoVGl0bGVUb3RhbE1hcmdpbiB9ID0gZ2V0U3ViR3JhcGhUaXRsZU1hcmdpbnMoc2l0ZUNvbmZpZyk7XG4gIGlmIChlZGdlLmxhYmVsKSB7XG4gICAgY29uc3QgZWwgPSBlZGdlTGFiZWxzW2VkZ2UuaWRdO1xuICAgIGxldCB4ID0gZWRnZS54O1xuICAgIGxldCB5ID0gZWRnZS55O1xuICAgIGlmIChwYXRoKSB7XG4gICAgICBjb25zdCBwb3MgPSB1dGlscy5jYWxjTGFiZWxQb3NpdGlvbihwYXRoKTtcbiAgICAgIGxvZy5kZWJ1ZyhcbiAgICAgICAgXCJNb3ZpbmcgbGFiZWwgXCIgKyBlZGdlLmxhYmVsICsgXCIgZnJvbSAoXCIsXG4gICAgICAgIHgsXG4gICAgICAgIFwiLFwiLFxuICAgICAgICB5LFxuICAgICAgICBcIikgdG8gKFwiLFxuICAgICAgICBwb3MueCxcbiAgICAgICAgXCIsXCIsXG4gICAgICAgIHBvcy55LFxuICAgICAgICBcIikgYWJjODhcIlxuICAgICAgKTtcbiAgICAgIGlmIChwYXRocy51cGRhdGVkUGF0aCkge1xuICAgICAgICB4ID0gcG9zLng7XG4gICAgICAgIHkgPSBwb3MueTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWwuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7eH0sICR7eSArIHN1YkdyYXBoVGl0bGVUb3RhbE1hcmdpbiAvIDJ9KWApO1xuICB9XG4gIGlmIChlZGdlLnN0YXJ0TGFiZWxMZWZ0KSB7XG4gICAgY29uc3QgZWwgPSB0ZXJtaW5hbExhYmVsc1tlZGdlLmlkXS5zdGFydExlZnQ7XG4gICAgbGV0IHggPSBlZGdlLng7XG4gICAgbGV0IHkgPSBlZGdlLnk7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIGNvbnN0IHBvcyA9IHV0aWxzLmNhbGNUZXJtaW5hbExhYmVsUG9zaXRpb24oZWRnZS5hcnJvd1R5cGVTdGFydCA/IDEwIDogMCwgXCJzdGFydF9sZWZ0XCIsIHBhdGgpO1xuICAgICAgeCA9IHBvcy54O1xuICAgICAgeSA9IHBvcy55O1xuICAgIH1cbiAgICBlbC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHt4fSwgJHt5fSlgKTtcbiAgfVxuICBpZiAoZWRnZS5zdGFydExhYmVsUmlnaHQpIHtcbiAgICBjb25zdCBlbCA9IHRlcm1pbmFsTGFiZWxzW2VkZ2UuaWRdLnN0YXJ0UmlnaHQ7XG4gICAgbGV0IHggPSBlZGdlLng7XG4gICAgbGV0IHkgPSBlZGdlLnk7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIGNvbnN0IHBvcyA9IHV0aWxzLmNhbGNUZXJtaW5hbExhYmVsUG9zaXRpb24oXG4gICAgICAgIGVkZ2UuYXJyb3dUeXBlU3RhcnQgPyAxMCA6IDAsXG4gICAgICAgIFwic3RhcnRfcmlnaHRcIixcbiAgICAgICAgcGF0aFxuICAgICAgKTtcbiAgICAgIHggPSBwb3MueDtcbiAgICAgIHkgPSBwb3MueTtcbiAgICB9XG4gICAgZWwuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7eH0sICR7eX0pYCk7XG4gIH1cbiAgaWYgKGVkZ2UuZW5kTGFiZWxMZWZ0KSB7XG4gICAgY29uc3QgZWwgPSB0ZXJtaW5hbExhYmVsc1tlZGdlLmlkXS5lbmRMZWZ0O1xuICAgIGxldCB4ID0gZWRnZS54O1xuICAgIGxldCB5ID0gZWRnZS55O1xuICAgIGlmIChwYXRoKSB7XG4gICAgICBjb25zdCBwb3MgPSB1dGlscy5jYWxjVGVybWluYWxMYWJlbFBvc2l0aW9uKGVkZ2UuYXJyb3dUeXBlRW5kID8gMTAgOiAwLCBcImVuZF9sZWZ0XCIsIHBhdGgpO1xuICAgICAgeCA9IHBvcy54O1xuICAgICAgeSA9IHBvcy55O1xuICAgIH1cbiAgICBlbC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHt4fSwgJHt5fSlgKTtcbiAgfVxuICBpZiAoZWRnZS5lbmRMYWJlbFJpZ2h0KSB7XG4gICAgY29uc3QgZWwgPSB0ZXJtaW5hbExhYmVsc1tlZGdlLmlkXS5lbmRSaWdodDtcbiAgICBsZXQgeCA9IGVkZ2UueDtcbiAgICBsZXQgeSA9IGVkZ2UueTtcbiAgICBpZiAocGF0aCkge1xuICAgICAgY29uc3QgcG9zID0gdXRpbHMuY2FsY1Rlcm1pbmFsTGFiZWxQb3NpdGlvbihlZGdlLmFycm93VHlwZUVuZCA/IDEwIDogMCwgXCJlbmRfcmlnaHRcIiwgcGF0aCk7XG4gICAgICB4ID0gcG9zLng7XG4gICAgICB5ID0gcG9zLnk7XG4gICAgfVxuICAgIGVsLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke3h9LCAke3l9KWApO1xuICB9XG59O1xuY29uc3Qgb3V0c2lkZU5vZGUgPSAobm9kZSwgcG9pbnQyKSA9PiB7XG4gIGNvbnN0IHggPSBub2RlLng7XG4gIGNvbnN0IHkgPSBub2RlLnk7XG4gIGNvbnN0IGR4ID0gTWF0aC5hYnMocG9pbnQyLnggLSB4KTtcbiAgY29uc3QgZHkgPSBNYXRoLmFicyhwb2ludDIueSAtIHkpO1xuICBjb25zdCB3ID0gbm9kZS53aWR0aCAvIDI7XG4gIGNvbnN0IGggPSBub2RlLmhlaWdodCAvIDI7XG4gIGlmIChkeCA+PSB3IHx8IGR5ID49IGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuY29uc3QgaW50ZXJzZWN0aW9uID0gKG5vZGUsIG91dHNpZGVQb2ludCwgaW5zaWRlUG9pbnQpID0+IHtcbiAgbG9nLmRlYnVnKGBpbnRlcnNlY3Rpb24gY2FsYyBhYmM4OTpcbiAgb3V0c2lkZVBvaW50OiAke0pTT04uc3RyaW5naWZ5KG91dHNpZGVQb2ludCl9XG4gIGluc2lkZVBvaW50IDogJHtKU09OLnN0cmluZ2lmeShpbnNpZGVQb2ludCl9XG4gIG5vZGUgICAgICAgIDogeDoke25vZGUueH0geToke25vZGUueX0gdzoke25vZGUud2lkdGh9IGg6JHtub2RlLmhlaWdodH1gKTtcbiAgY29uc3QgeCA9IG5vZGUueDtcbiAgY29uc3QgeSA9IG5vZGUueTtcbiAgY29uc3QgZHggPSBNYXRoLmFicyh4IC0gaW5zaWRlUG9pbnQueCk7XG4gIGNvbnN0IHcgPSBub2RlLndpZHRoIC8gMjtcbiAgbGV0IHIgPSBpbnNpZGVQb2ludC54IDwgb3V0c2lkZVBvaW50LnggPyB3IC0gZHggOiB3ICsgZHg7XG4gIGNvbnN0IGggPSBub2RlLmhlaWdodCAvIDI7XG4gIGNvbnN0IFEgPSBNYXRoLmFicyhvdXRzaWRlUG9pbnQueSAtIGluc2lkZVBvaW50LnkpO1xuICBjb25zdCBSID0gTWF0aC5hYnMob3V0c2lkZVBvaW50LnggLSBpbnNpZGVQb2ludC54KTtcbiAgaWYgKE1hdGguYWJzKHkgLSBvdXRzaWRlUG9pbnQueSkgKiB3ID4gTWF0aC5hYnMoeCAtIG91dHNpZGVQb2ludC54KSAqIGgpIHtcbiAgICBsZXQgcSA9IGluc2lkZVBvaW50LnkgPCBvdXRzaWRlUG9pbnQueSA/IG91dHNpZGVQb2ludC55IC0gaCAtIHkgOiB5IC0gaCAtIG91dHNpZGVQb2ludC55O1xuICAgIHIgPSBSICogcSAvIFE7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgeDogaW5zaWRlUG9pbnQueCA8IG91dHNpZGVQb2ludC54ID8gaW5zaWRlUG9pbnQueCArIHIgOiBpbnNpZGVQb2ludC54IC0gUiArIHIsXG4gICAgICB5OiBpbnNpZGVQb2ludC55IDwgb3V0c2lkZVBvaW50LnkgPyBpbnNpZGVQb2ludC55ICsgUSAtIHEgOiBpbnNpZGVQb2ludC55IC0gUSArIHFcbiAgICB9O1xuICAgIGlmIChyID09PSAwKSB7XG4gICAgICByZXMueCA9IG91dHNpZGVQb2ludC54O1xuICAgICAgcmVzLnkgPSBvdXRzaWRlUG9pbnQueTtcbiAgICB9XG4gICAgaWYgKFIgPT09IDApIHtcbiAgICAgIHJlcy54ID0gb3V0c2lkZVBvaW50Lng7XG4gICAgfVxuICAgIGlmIChRID09PSAwKSB7XG4gICAgICByZXMueSA9IG91dHNpZGVQb2ludC55O1xuICAgIH1cbiAgICBsb2cuZGVidWcoYGFiYzg5IHRvcHAvYm90dCBjYWxjLCBRICR7UX0sIHEgJHtxfSwgUiAke1J9LCByICR7cn1gLCByZXMpO1xuICAgIHJldHVybiByZXM7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGluc2lkZVBvaW50LnggPCBvdXRzaWRlUG9pbnQueCkge1xuICAgICAgciA9IG91dHNpZGVQb2ludC54IC0gdyAtIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSB4IC0gdyAtIG91dHNpZGVQb2ludC54O1xuICAgIH1cbiAgICBsZXQgcSA9IFEgKiByIC8gUjtcbiAgICBsZXQgX3ggPSBpbnNpZGVQb2ludC54IDwgb3V0c2lkZVBvaW50LnggPyBpbnNpZGVQb2ludC54ICsgUiAtIHIgOiBpbnNpZGVQb2ludC54IC0gUiArIHI7XG4gICAgbGV0IF95ID0gaW5zaWRlUG9pbnQueSA8IG91dHNpZGVQb2ludC55ID8gaW5zaWRlUG9pbnQueSArIHEgOiBpbnNpZGVQb2ludC55IC0gcTtcbiAgICBsb2cuZGVidWcoYHNpZGVzIGNhbGMgYWJjODksIFEgJHtRfSwgcSAke3F9LCBSICR7Un0sIHIgJHtyfWAsIHsgX3gsIF95IH0pO1xuICAgIGlmIChyID09PSAwKSB7XG4gICAgICBfeCA9IG91dHNpZGVQb2ludC54O1xuICAgICAgX3kgPSBvdXRzaWRlUG9pbnQueTtcbiAgICB9XG4gICAgaWYgKFIgPT09IDApIHtcbiAgICAgIF94ID0gb3V0c2lkZVBvaW50Lng7XG4gICAgfVxuICAgIGlmIChRID09PSAwKSB7XG4gICAgICBfeSA9IG91dHNpZGVQb2ludC55O1xuICAgIH1cbiAgICByZXR1cm4geyB4OiBfeCwgeTogX3kgfTtcbiAgfVxufTtcbmNvbnN0IGN1dFBhdGhBdEludGVyc2VjdCA9IChfcG9pbnRzLCBib3VuZGFyeU5vZGUpID0+IHtcbiAgbG9nLmRlYnVnKFwiYWJjODggY3V0UGF0aEF0SW50ZXJzZWN0XCIsIF9wb2ludHMsIGJvdW5kYXJ5Tm9kZSk7XG4gIGxldCBwb2ludHMgPSBbXTtcbiAgbGV0IGxhc3RQb2ludE91dHNpZGUgPSBfcG9pbnRzWzBdO1xuICBsZXQgaXNJbnNpZGUgPSBmYWxzZTtcbiAgX3BvaW50cy5mb3JFYWNoKChwb2ludDIpID0+IHtcbiAgICBpZiAoIW91dHNpZGVOb2RlKGJvdW5kYXJ5Tm9kZSwgcG9pbnQyKSAmJiAhaXNJbnNpZGUpIHtcbiAgICAgIGNvbnN0IGludGVyID0gaW50ZXJzZWN0aW9uKGJvdW5kYXJ5Tm9kZSwgbGFzdFBvaW50T3V0c2lkZSwgcG9pbnQyKTtcbiAgICAgIGxldCBwb2ludFByZXNlbnQgPSBmYWxzZTtcbiAgICAgIHBvaW50cy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgIHBvaW50UHJlc2VudCA9IHBvaW50UHJlc2VudCB8fCBwLnggPT09IGludGVyLnggJiYgcC55ID09PSBpbnRlci55O1xuICAgICAgfSk7XG4gICAgICBpZiAoIXBvaW50cy5zb21lKChlKSA9PiBlLnggPT09IGludGVyLnggJiYgZS55ID09PSBpbnRlci55KSkge1xuICAgICAgICBwb2ludHMucHVzaChpbnRlcik7XG4gICAgICB9XG4gICAgICBpc0luc2lkZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3RQb2ludE91dHNpZGUgPSBwb2ludDI7XG4gICAgICBpZiAoIWlzSW5zaWRlKSB7XG4gICAgICAgIHBvaW50cy5wdXNoKHBvaW50Mik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHBvaW50cztcbn07XG5jb25zdCBpbnNlcnRFZGdlID0gZnVuY3Rpb24oZWxlbSwgZSwgZWRnZSwgY2x1c3RlckRiLCBkaWFncmFtVHlwZSwgZ3JhcGgsIGlkKSB7XG4gIGxldCBwb2ludHMgPSBlZGdlLnBvaW50cztcbiAgbG9nLmRlYnVnKFwiYWJjODggSW5zZXJ0RWRnZTogZWRnZT1cIiwgZWRnZSwgXCJlPVwiLCBlKTtcbiAgbGV0IHBvaW50c0hhc0NoYW5nZWQgPSBmYWxzZTtcbiAgY29uc3QgdGFpbCA9IGdyYXBoLm5vZGUoZS52KTtcbiAgdmFyIGhlYWQgPSBncmFwaC5ub2RlKGUudyk7XG4gIGlmICgoaGVhZCA9PSBudWxsID8gdm9pZCAwIDogaGVhZC5pbnRlcnNlY3QpICYmICh0YWlsID09IG51bGwgPyB2b2lkIDAgOiB0YWlsLmludGVyc2VjdCkpIHtcbiAgICBwb2ludHMgPSBwb2ludHMuc2xpY2UoMSwgZWRnZS5wb2ludHMubGVuZ3RoIC0gMSk7XG4gICAgcG9pbnRzLnVuc2hpZnQodGFpbC5pbnRlcnNlY3QocG9pbnRzWzBdKSk7XG4gICAgcG9pbnRzLnB1c2goaGVhZC5pbnRlcnNlY3QocG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSkpO1xuICB9XG4gIGlmIChlZGdlLnRvQ2x1c3Rlcikge1xuICAgIGxvZy5kZWJ1ZyhcInRvIGNsdXN0ZXIgYWJjODhcIiwgY2x1c3RlckRiW2VkZ2UudG9DbHVzdGVyXSk7XG4gICAgcG9pbnRzID0gY3V0UGF0aEF0SW50ZXJzZWN0KGVkZ2UucG9pbnRzLCBjbHVzdGVyRGJbZWRnZS50b0NsdXN0ZXJdLm5vZGUpO1xuICAgIHBvaW50c0hhc0NoYW5nZWQgPSB0cnVlO1xuICB9XG4gIGlmIChlZGdlLmZyb21DbHVzdGVyKSB7XG4gICAgbG9nLmRlYnVnKFwiZnJvbSBjbHVzdGVyIGFiYzg4XCIsIGNsdXN0ZXJEYltlZGdlLmZyb21DbHVzdGVyXSk7XG4gICAgcG9pbnRzID0gY3V0UGF0aEF0SW50ZXJzZWN0KHBvaW50cy5yZXZlcnNlKCksIGNsdXN0ZXJEYltlZGdlLmZyb21DbHVzdGVyXS5ub2RlKS5yZXZlcnNlKCk7XG4gICAgcG9pbnRzSGFzQ2hhbmdlZCA9IHRydWU7XG4gIH1cbiAgY29uc3QgbGluZURhdGEgPSBwb2ludHMuZmlsdGVyKChwKSA9PiAhTnVtYmVyLmlzTmFOKHAueSkpO1xuICBsZXQgY3VydmUgPSBjdXJ2ZUJhc2lzO1xuICBpZiAoZWRnZS5jdXJ2ZSAmJiAoZGlhZ3JhbVR5cGUgPT09IFwiZ3JhcGhcIiB8fCBkaWFncmFtVHlwZSA9PT0gXCJmbG93Y2hhcnRcIikpIHtcbiAgICBjdXJ2ZSA9IGVkZ2UuY3VydmU7XG4gIH1cbiAgY29uc3QgeyB4LCB5IH0gPSBnZXRMaW5lRnVuY3Rpb25zV2l0aE9mZnNldChlZGdlKTtcbiAgY29uc3QgbGluZUZ1bmN0aW9uID0gbGluZSgpLngoeCkueSh5KS5jdXJ2ZShjdXJ2ZSk7XG4gIGxldCBzdHJva2VDbGFzc2VzO1xuICBzd2l0Y2ggKGVkZ2UudGhpY2tuZXNzKSB7XG4gICAgY2FzZSBcIm5vcm1hbFwiOlxuICAgICAgc3Ryb2tlQ2xhc3NlcyA9IFwiZWRnZS10aGlja25lc3Mtbm9ybWFsXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwidGhpY2tcIjpcbiAgICAgIHN0cm9rZUNsYXNzZXMgPSBcImVkZ2UtdGhpY2tuZXNzLXRoaWNrXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaW52aXNpYmxlXCI6XG4gICAgICBzdHJva2VDbGFzc2VzID0gXCJlZGdlLXRoaWNrbmVzcy10aGlja1wiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHN0cm9rZUNsYXNzZXMgPSBcIlwiO1xuICB9XG4gIHN3aXRjaCAoZWRnZS5wYXR0ZXJuKSB7XG4gICAgY2FzZSBcInNvbGlkXCI6XG4gICAgICBzdHJva2VDbGFzc2VzICs9IFwiIGVkZ2UtcGF0dGVybi1zb2xpZFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImRvdHRlZFwiOlxuICAgICAgc3Ryb2tlQ2xhc3NlcyArPSBcIiBlZGdlLXBhdHRlcm4tZG90dGVkXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZGFzaGVkXCI6XG4gICAgICBzdHJva2VDbGFzc2VzICs9IFwiIGVkZ2UtcGF0dGVybi1kYXNoZWRcIjtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGNvbnN0IHN2Z1BhdGggPSBlbGVtLmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgbGluZUZ1bmN0aW9uKGxpbmVEYXRhKSkuYXR0cihcImlkXCIsIGVkZ2UuaWQpLmF0dHIoXCJjbGFzc1wiLCBcIiBcIiArIHN0cm9rZUNsYXNzZXMgKyAoZWRnZS5jbGFzc2VzID8gXCIgXCIgKyBlZGdlLmNsYXNzZXMgOiBcIlwiKSkuYXR0cihcInN0eWxlXCIsIGVkZ2Uuc3R5bGUpO1xuICBsZXQgdXJsID0gXCJcIjtcbiAgaWYgKGdldENvbmZpZygpLmZsb3djaGFydC5hcnJvd01hcmtlckFic29sdXRlIHx8IGdldENvbmZpZygpLnN0YXRlLmFycm93TWFya2VyQWJzb2x1dGUpIHtcbiAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgdXJsID0gdXJsLnJlcGxhY2UoL1xcKC9nLCBcIlxcXFwoXCIpO1xuICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXCkvZywgXCJcXFxcKVwiKTtcbiAgfVxuICBhZGRFZGdlTWFya2VycyhzdmdQYXRoLCBlZGdlLCB1cmwsIGlkLCBkaWFncmFtVHlwZSk7XG4gIGxldCBwYXRocyA9IHt9O1xuICBpZiAocG9pbnRzSGFzQ2hhbmdlZCkge1xuICAgIHBhdGhzLnVwZGF0ZWRQYXRoID0gcG9pbnRzO1xuICB9XG4gIHBhdGhzLm9yaWdpbmFsUGF0aCA9IGVkZ2UucG9pbnRzO1xuICByZXR1cm4gcGF0aHM7XG59O1xuZXhwb3J0IHtcbiAgaW5zZXJ0TWFya2VycyQxIGFzIGEsXG4gIGNsZWFyJDEgYXMgYixcbiAgY3JlYXRlTGFiZWwkMSBhcyBjLFxuICBjbGVhciBhcyBkLFxuICBpbnNlcnROb2RlIGFzIGUsXG4gIGluc2VydEVkZ2VMYWJlbCBhcyBmLFxuICBnZXRTdWJHcmFwaFRpdGxlTWFyZ2lucyBhcyBnLFxuICBpbnNlcnRFZGdlIGFzIGgsXG4gIGludGVyc2VjdFJlY3QkMSBhcyBpLFxuICBwb3NpdGlvbkVkZ2VMYWJlbCBhcyBqLFxuICBnZXRMaW5lRnVuY3Rpb25zV2l0aE9mZnNldCBhcyBrLFxuICBsYWJlbEhlbHBlciBhcyBsLFxuICBhZGRFZGdlTWFya2VycyBhcyBtLFxuICBwb3NpdGlvbk5vZGUgYXMgcCxcbiAgc2V0Tm9kZUVsZW0gYXMgcyxcbiAgdXBkYXRlTm9kZUJvdW5kcyBhcyB1XG59O1xuIl0sIm5hbWVzIjpbImxvZyIsInNlbGVjdCIsImV2YWx1YXRlIiwiZ2V0Q29uZmlnIiwiZGVjb2RlRW50aXRpZXMiLCJjcmVhdGVUZXh0Iiwic2FuaXRpemVUZXh0IiwidXRpbHMiLCJjdXJ2ZUJhc2lzIiwibGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsTUFBTSxhQUFhLEdBQUcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUs7QUFDdkQsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxLQUFLO0FBQ3RDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDeEMsR0FBRyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRixNQUFNLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLO0FBQ3RDLEVBQUVBLFdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdkMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxD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QyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeFYsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDclYsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSztBQUNsQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFB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LElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN2YSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxP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SUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QyxHQUFHO0FBQ0gsRUFBRSxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3hDLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUN4QyxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzlDLElBQUksSUFBSSxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNCLElBQUksSUFBSSxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9ELElBQUksSUFBSSxVQUFVLEdBQUcsYUFBYTtBQUNsQyxNQUFNLElBQUk7QUFDVixNQUFNLE1BQU07QUFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUN2QyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUN2QyxLQUFLLENBQUM7QUFDTixJQUFJLElBQUksVUFBVSxFQUFFO0FBQ3BCLE1BQU0sYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNy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RUFBRSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN4QjtBQUNBLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDbEMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ2hELE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRTtBQUM5QjtBQUNBLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7QUFDekMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsT0FBTyxFQUFFO0FBQ2hELE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRTtBQUNqQztBQUNBLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRTtBQUMxQixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNsQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3pDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FB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QUssQ0FBQztBQUNOLEdBQUc7QUFDSCxFQUFFLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUM5QixJQUFJLE9BQU87QUFDWCxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzNCLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtBQUNsQztBQUNBLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7QUFDMUMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxPQUFPLEVBQUU7QUFDbkQsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLE9BQU8sRUFBRTtBQUMzQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7QUFDakMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUM5QixLQUFLLENBQUM7QUFDTixHQUFHO0FBQ0gsRUFBRSxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDNUIsSUFBSSxPQUFPO0FBQ1g7QUFDQSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7QUFDbEM7QUFDQSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUFFO0FBQzNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxPQUFPLEVBQUU7QUFDcEM7QUFDQSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFO0FBQ2xDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxPQUFPLEVBQUU7QUFDeEM7QUFDQSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLE9BQU8sRUFBRTtBQUNuRCxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO0FBQzFDLEtBQUssQ0FBQztBQUNOLEdBQUc7QUFDSCxFQUFFLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUM5QixJQUFJLE9BQU87QUFDWDtBQUNBLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzVCO0FBQ0EsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO0FBQzNCLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtBQUNsQztBQUNBLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxPQUFPLEVBQUU7QUFDM0MsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxPQUFPLEVBQUU7QUFDbkQsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtBQUMxQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7QUFDL0IsS0FBSyxDQUFDO0FBQ04sR0FBRztBQUNILEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUM7QUFDRixNQUFNLFdBQVcsR0FBRyxDQUFDLEdBQUcsS0FBSztBQUM3QixFQUFFLElBQUksR0FBRyxFQUFFO0FBQ1gsSUFBSSxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDckIsR0FBRztBQUNILEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDLENBQUM7QUFDRixNQUFNLGtCQUFrQixHQUFHLENBQUMsSUFBSSxFQUFFLFlBQVksS0FBSztBQUNuRCxFQUFFLE9BQU8sQ0FBQyxFQUFFLFlBQVksR0FBRyxZQUFZLEdBQUcsY0FBYyxDQUFDLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVztBQUNuRyxJQUFJLElBQUksQ0FBQyxLQUFLO0FBQ2QsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUNGLE1BQU0sUUFBUSxHQUFHLE9BQU8sTUFBTSxFQUFFLElBQUksS0FBSztBQUN6QyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxXQUFXO0FBQzlDLElBQUksTUFBTTtBQUNWLElBQUksSUFBSTtBQUNSLElBQUksa0JBQWtCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLElBQUksSUFBSTtBQUNSLEdBQUcsQ0FBQztBQUNKLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3RDLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3ZDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsQixFQUFFLE1BQU0sTUFBTSxHQUFHO0FBQ2pCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDdkIsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUN2QixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZCLEdBQUcsQ0FBQztBQUNKLEVBQUVBLFdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUNyQyxFQUFFLE1BQU0sWUFBWSxHQUFHLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2xFLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pDLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3ZDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLE1BQU0sRUFBRTtBQUNwQyxJQUFJQSxXQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDakMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNuRCxHQUFHLENBQUM7QUFDSixFQUFFLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUNGLE1BQU0sTUFBTSxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksS0FBSztBQUNqQyxFQUFFLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3RHLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2YsRUFBRSxNQUFNLE1BQU0sR0FBRztBQUNqQixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUN0QixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0QixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdkIsR0FBRyxDQUFDO0FBQ0osRUFBRSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQyxJQUFJO0FBQ2pFLElBQUksUUFBUTtBQUNaLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUMzQixNQUFNLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ2hCLEdBQUcsQ0FBQztBQUNKLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNsQixFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ25CLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLE1BQU0sRUFBRTtBQUNwQyxJQUFJLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLEdBQUcsQ0FBQztBQUNKLEVBQUUsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxPQUFPLEdBQUcsT0FBTyxNQUFNLEVBQUUsSUFBSSxLQUFLO0FBQ3hDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLFdBQVc7QUFDOUMsSUFBSSxNQUFNO0FBQ1YsSUFBSSxJQUFJO0FBQ1IsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEMsSUFBSSxJQUFJO0FBQ1IsR0FBRyxDQUFDO0FBQ0osRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZCxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN2QyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEIsRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUM5QyxFQUFFLE1BQU0sTUFBTSxHQUFHO0FBQ2pCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbEIsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEIsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUN2QixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ3ZCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNuQixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZCLEdBQUcsQ0FBQztBQUNKLEVBQUUsTUFBTSxHQUFHLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDekQsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDOUIsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsTUFBTSxFQUFFO0FBQ3BDLElBQUksT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbkQsR0FBRyxDQUFDO0FBQ0osRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFDRixNQUFNLFdBQVcsR0FBRyxPQUFPLE1BQU0sRUFBRSxJQUFJLEtBQUs7QUFDNUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM0UsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZCxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDM0MsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDOUMsRUFBRSxNQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0QsRUFBRSxNQUFNLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoRSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2QyxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNyQyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxNQUFNLEVBQUU7QUFDcEMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNuRCxHQUFHLENBQUM7QUFDSixFQUFFLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUNGLE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxNQUFNLEVBQUUsSUFBSSxLQUFLO0FBQ3BELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLFdBQVc7QUFDOUMsSUFBSSxNQUFNO0FBQ1YsSUFBSSxJQUFJO0FBQ1IsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEMsSUFBSSxJQUFJO0FBQ1IsR0FBRyxDQUFDO0FBQ0osRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDdEMsRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDdkMsRUFBRSxNQUFNLE1BQU0sR0FBRztBQUNqQixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3ZCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbEIsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ25CLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUN4QixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZCLEdBQUcsQ0FBQztBQUNKLEVBQUUsTUFBTSxFQUFFLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEQsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckIsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNsQixFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxNQUFNLEVBQUU7QUFDcEMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNuRCxHQUFHLENBQUM7QUFDSixFQUFFLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUNGLE1BQU0sVUFBVSxHQUFHLE9BQU8sTUFBTSxFQUFFLElBQUksS0FBSztBQUMzQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM3RixFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN0QyxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN2QyxFQUFFLE1BQU0sTUFBTSxHQUFHO0FBQ2pCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzNCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUMxQixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDL0IsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUN2QixHQUFHLENBQUM7QUFDSixFQUFFLE1BQU0sRUFBRSxHQUFHLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3hELEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLE1BQU0sRUFBRTtBQUNwQyxJQUFJLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ25ELEdBQUcsQ0FBQztBQUNKLEVBQUUsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxTQUFTLEdBQUcsT0FBTyxNQUFNLEVBQUUsSUFBSSxLQUFLO0FBQzFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLFdBQVc7QUFDOUMsSUFBSSxNQUFNO0FBQ1YsSUFBSSxJQUFJO0FBQ1IsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEMsSUFBSSxJQUFJO0FBQ1IsR0FBRyxDQUFDO0FBQ0osRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDdEMsRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDdkMsRUFBRSxNQUFNLE1BQU0sR0FBRztBQUNqQixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDMUIsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzFCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUMvQixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDeEIsR0FBRyxDQUFDO0FBQ0osRUFBRSxNQUFNLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN4RCxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QixFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxNQUFNLEVBQUU7QUFDcEMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNuRCxHQUFHLENBQUM7QUFDSixFQUFFLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUNGLE1BQU0sU0FBUyxHQUFHLE9BQU8sTUFBTSxFQUFFLElBQUksS0FBSztBQUMxQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxXQUFXO0FBQzlDLElBQUksTUFBTTtBQUNWLElBQUksSUFBSTtBQUNSLElBQUksa0JBQWtCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLElBQUksSUFBSTtBQUNSLEdBQUcsQ0FBQztBQUNKLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3RDLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3ZDLEVBQUUsTUFBTSxNQUFNLEdBQUc7QUFDakIsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDM0IsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUM5QixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUMzQixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ3ZCLEdBQUcsQ0FBQztBQUNKLEVBQUUsTUFBTSxFQUFFLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEQsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0IsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsTUFBTSxFQUFFO0FBQ3BDLElBQUksT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbkQsR0FBRyxDQUFDO0FBQ0osRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFDRixNQUFNLGFBQWEsR0FBRyxPQUFPLE1BQU0sRUFBRSxJQUFJLEtBQUs7QUFDOUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sV0FBVztBQUM5QyxJQUFJLE1BQU07QUFDVixJQUFJLElBQUk7QUFDUixJQUFJLGtCQUFrQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQyxJQUFJLElBQUk7QUFDUixHQUFHLENBQUM7QUFDSixFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN0QyxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN2QyxFQUFFLE1BQU0sTUFBTSxHQUFHO0FBQ2pCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUMxQixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDL0IsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUM1QixHQUFHLENBQUM7QUFDSixFQUFFLE1BQU0sRUFBRSxHQUFHLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3hELEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLE1BQU0sRUFBRTtBQUNwQyxJQUFJLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ25ELEdBQUcsQ0FBQztBQUNKLEVBQUUsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxvQkFBb0IsR0FBRyxPQUFPLE1BQU0sRUFBRSxJQUFJLEtBQUs7QUFDckQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sV0FBVztBQUM5QyxJQUFJLE1BQU07QUFDVixJQUFJLElBQUk7QUFDUixJQUFJLGtCQUFrQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQyxJQUFJLElBQUk7QUFDUixHQUFHLENBQUM7QUFDSixFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN0QyxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN2QyxFQUFFLE1BQU0sTUFBTSxHQUFHO0FBQ2pCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbEIsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzFCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDdkIsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDM0IsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ25CLEdBQUcsQ0FBQztBQUNKLEVBQUUsTUFBTSxFQUFFLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEQsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0IsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsTUFBTSxFQUFFO0FBQ3BDLElBQUksT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbkQsR0FBRyxDQUFDO0FBQ0osRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFDRixNQUFNLFFBQVEsR0FBRyxPQUFPLE1BQU0sRUFBRSxJQUFJLEtBQUs7QUFDekMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sV0FBVztBQUM5QyxJQUFJLE1BQU07QUFDVixJQUFJLElBQUk7QUFDUixJQUFJLGtCQUFrQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQyxJQUFJLElBQUk7QUFDUixHQUFHLENBQUM7QUFDSixFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN0QyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkIsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNqQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDNUMsRUFBRSxNQUFNLEtBQUssR0FBRyxNQUFNLEdBQUcsRUFBRSxHQUFHLEtBQUssR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxTQUFTLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsU0FBUyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDeEwsRUFBRSxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNoTSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QixFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxNQUFNLEVBQUU7QUFDcEMsSUFBSSxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM3QyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM3QixJQUFJLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRTtBQUN2SSxNQUFNLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEQsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDbEIsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QixPQUFPO0FBQ1AsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqQixNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNqQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNmLE9BQU87QUFDUCxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pCLEtBQUs7QUFDTCxJQUFJLE9BQU8sR0FBRyxDQUFDO0FBQ2YsR0FBRyxDQUFDO0FBQ0osRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFDRixNQUFNLElBQUksR0FBRyxPQUFPLE1BQU0sRUFBRSxJQUFJLEtBQUs7QUFDckMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxNQUFNLFdBQVc7QUFDM0QsSUFBSSxNQUFNO0FBQ1YsSUFBSSxJQUFJO0FBQ1IsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUs7QUFDN0MsSUFBSSxJQUFJO0FBQ1IsR0FBRyxDQUFDO0FBQ0osRUFBRSxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztBQUN4RCxFQUFFLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDOUUsRUFBRSxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ2pGLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUM7QUFDOUUsRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQztBQUNoRixFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNqTSxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNsQixJQUFJLE1BQU0sUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDdEQsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO0FBQzVCLE1BQU0sd0JBQXdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNuRixNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsS0FBSztBQUNMLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSztBQUNsQyxNQUFNQSxXQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25ELEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRztBQUNILEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLE1BQU0sRUFBRTtBQUNwQyxJQUFJLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEMsR0FBRyxDQUFDO0FBQ0osRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFDRixNQUFNLFNBQVMsR0FBRyxPQUFPLE1BQU0sRUFBRSxJQUFJLEtBQUs7QUFDMUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxNQUFNLFdBQVc7QUFDM0QsSUFBSSxNQUFNO0FBQ1YsSUFBSSxJQUFJO0FBQ1IsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87QUFDMUIsSUFBSSxJQUFJO0FBQ1IsR0FBRyxDQUFDO0FBQ0osRUFBRSxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztBQUN4RCxFQUFFLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDOUUsRUFBRSxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ2pGLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUM7QUFDOUUsRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQztBQUNoRixFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLHlDQUF5QyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNuTixFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNsQixJQUFJLE1BQU0sUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDdEQsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO0FBQzVCLE1BQU0sd0JBQXdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNuRixNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsS0FBSztBQUNMLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSztBQUNsQyxNQUFNQSxXQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25ELEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRztBQUNILEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLE1BQU0sRUFBRTtBQUNwQyxJQUFJLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEMsR0FBRyxDQUFDO0FBQ0osRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFDRixNQUFNLFNBQVMsR0FBRyxPQUFPLE1BQU0sRUFBRSxJQUFJLEtBQUs7QUFDMUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEUsRUFBRUEsV0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLEVBQUUsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDeEQsRUFBRSxNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDdkIsRUFBRSxNQUFNLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFDeEIsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzlELEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUM1QyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNsQixJQUFJLE1BQU0sUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDdEQsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO0FBQzVCLE1BQU0sd0JBQXdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNuRixNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsS0FBSztBQUNMLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSztBQUNsQyxNQUFNQSxXQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25ELEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRztBQUNILEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLE1BQU0sRUFBRTtBQUNwQyxJQUFJLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEMsR0FBRyxDQUFDO0FBQ0osRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFDRixTQUFTLHdCQUF3QixDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRTtBQUMzRSxFQUFFLE1BQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUM3QixFQUFFLE1BQU0sU0FBUyxHQUFHLENBQUMsTUFBTSxLQUFLO0FBQ2hDLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEMsR0FBRyxDQUFDO0FBQ0osRUFBRSxNQUFNLFVBQVUsR0FBRyxDQUFDLE1BQU0sS0FBSztBQUNqQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3BDLEdBQUcsQ0FBQztBQUNKLEVBQUUsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzdCLElBQUlBLFdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNoQyxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMxQixHQUFHLE1BQU07QUFDVCxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMzQixHQUFHO0FBQ0gsRUFBRSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDN0IsSUFBSUEsV0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2xDLElBQUksU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzNCLEdBQUcsTUFBTTtBQUNULElBQUksVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzVCLEdBQUc7QUFDSCxFQUFFLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUM3QixJQUFJQSxXQUFHLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDbkMsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDMUIsR0FBRyxNQUFNO0FBQ1QsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDM0IsR0FBRztBQUNILEVBQUUsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzdCLElBQUlBLFdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNqQyxJQUFJLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMzQixHQUFHLE1BQU07QUFDVCxJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM1QixHQUFHO0FBQ0gsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1RCxDQUFDO0FBQ0QsTUFBTSxhQUFhLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxLQUFLO0FBQ3hDLEVBQUUsSUFBSSxPQUFPLENBQUM7QUFDZCxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ3JCLElBQUksT0FBTyxHQUFHLGNBQWMsQ0FBQztBQUM3QixHQUFHLE1BQU07QUFDVCxJQUFJLE9BQU8sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUNyQyxHQUFHO0FBQ0gsRUFBRSxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMvRixFQUFFLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3hELEVBQUUsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1QyxFQUFFLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1RCxFQUFFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUM3RSxFQUFFLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNqQixFQUFFLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO0FBQ2pDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQixHQUFHLE1BQU07QUFDVCxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbEIsR0FBRztBQUNILEVBQUVBLFdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQztBQUN4RSxFQUFFLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzNGLEVBQUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUNyQyxFQUFFLElBQUlFLGNBQVEsQ0FBQ0MsZUFBUyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ2xELElBQUksTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQyxJQUFJLE1BQU0sRUFBRSxHQUFHRixZQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDdkMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkMsR0FBRztBQUNILEVBQUVELFdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzVCLEVBQUUsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hELEVBQUUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2hDLEVBQUUsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVc7QUFDeEMsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7QUFDakcsR0FBRyxDQUFDO0FBQ0osRUFBRSxJQUFJRSxjQUFRLENBQUNDLGVBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUNsRCxJQUFJLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsSUFBSSxNQUFNLEVBQUUsR0FBR0YsWUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQ3ZDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLEdBQUc7QUFDSCxFQUFFLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZDLEVBQUVBLFlBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJO0FBQ3BCLElBQUksV0FBVztBQUNmLElBQUksYUFBYTtBQUNqQixLQUFLLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUc7QUFDNUgsR0FBRyxDQUFDO0FBQ0osRUFBRUEsWUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUk7QUFDbkIsSUFBSSxXQUFXO0FBQ2YsSUFBSSxhQUFhO0FBQ2pCLEtBQUssSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU07QUFDbkYsR0FBRyxDQUFDO0FBQ0osRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2hDLEVBQUUsS0FBSyxDQUFDLElBQUk7QUFDWixJQUFJLFdBQVc7QUFDZixJQUFJLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHO0FBQ3RGLEdBQUcsQ0FBQztBQUNKLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsTixFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxXQUFXLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsV0FBVyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUM7QUFDOVEsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEMsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsTUFBTSxFQUFFO0FBQ3BDLElBQUksT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN4QyxHQUFHLENBQUM7QUFDSixFQUFFLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUNGLE1BQU0sT0FBTyxHQUFHLE9BQU8sTUFBTSxFQUFFLElBQUksS0FBSztBQUN4QyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxXQUFXO0FBQzlDLElBQUksTUFBTTtBQUNWLElBQUksSUFBSTtBQUNSLElBQUksa0JBQWtCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLElBQUksSUFBSTtBQUNSLEdBQUcsQ0FBQztBQUNKLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3ZDLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDOUMsRUFBRSxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdMLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLE1BQU0sRUFBRTtBQUNwQyxJQUFJLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEMsR0FBRyxDQUFDO0FBQ0osRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFDRixNQUFNLE1BQU0sR0FBRyxPQUFPLE1BQU0sRUFBRSxJQUFJLEtBQUs7QUFDdkMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxNQUFNLFdBQVc7QUFDM0QsSUFBSSxNQUFNO0FBQ1YsSUFBSSxJQUFJO0FBQ1IsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEMsSUFBSSxJQUFJO0FBQ1IsR0FBRyxDQUFDO0FBQ0osRUFBRSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUM1RCxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4TSxFQUFFRCxXQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzFCLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2xDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLE1BQU0sRUFBRTtBQUNwQyxJQUFJQSxXQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDN0UsSUFBSSxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN4RSxHQUFHLENBQUM7QUFDSixFQUFFLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUNGLE1BQU0sWUFBWSxHQUFHLE9BQU8sTUFBTSxFQUFFLElBQUksS0FBSztBQUM3QyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxHQUFHLE1BQU0sV0FBVztBQUMzRCxJQUFJLE1BQU07QUFDVixJQUFJLElBQUk7QUFDUixJQUFJLGtCQUFrQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQyxJQUFJLElBQUk7QUFDUixHQUFHLENBQUM7QUFDSixFQUFFLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNoQixFQUFFLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQzNELEVBQUUsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuRCxFQUFFLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkQsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEMsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN0TyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM1TSxFQUFFQSxXQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDaEMsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDdEMsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsTUFBTSxFQUFFO0FBQ3BDLElBQUlBLFdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFdBQVcsR0FBRyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDekYsSUFBSSxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFdBQVcsR0FBRyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDOUUsR0FBRyxDQUFDO0FBQ0osRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFDRixNQUFNLFVBQVUsR0FBRyxPQUFPLE1BQU0sRUFBRSxJQUFJLEtBQUs7QUFDM0MsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sV0FBVztBQUM5QyxJQUFJLE1BQU07QUFDVixJQUFJLElBQUk7QUFDUixJQUFJLGtCQUFrQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQyxJQUFJLElBQUk7QUFDUixHQUFHLENBQUM7QUFDSixFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN0QyxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN2QyxFQUFFLE1BQU0sTUFBTSxHQUFHO0FBQ2pCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbEIsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNsQixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDbkIsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ25CLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbEIsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25CLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDdkIsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDcEIsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25CLEdBQUcsQ0FBQztBQUNKLEVBQUUsTUFBTSxFQUFFLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEQsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0IsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsTUFBTSxFQUFFO0FBQ3BDLElBQUksT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbkQsR0FBRyxDQUFDO0FBQ0osRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFDRixNQUFNLEtBQUssR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLEtBQUs7QUFDaEMsRUFBRSxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0RyxFQUFFLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQzVELEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEMsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsTUFBTSxFQUFFO0FBQ3BDLElBQUksT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDN0MsR0FBRyxDQUFDO0FBQ0osRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFDRixNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLO0FBQ3hDLEVBQUUsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEcsRUFBRSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDakIsRUFBRSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDbEIsRUFBRSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7QUFDcEIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2YsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLEdBQUc7QUFDSCxFQUFFLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDcEssRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDL0MsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDN0MsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsTUFBTSxFQUFFO0FBQ3BDLElBQUksT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN4QyxHQUFHLENBQUM7QUFDSixFQUFFLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUNGLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksS0FBSztBQUM5QixFQUFFLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3RHLEVBQUUsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDaEUsRUFBRSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUM1RCxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDM0YsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEMsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsTUFBTSxFQUFFO0FBQ3BDLElBQUksT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDN0MsR0FBRyxDQUFDO0FBQ0osRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFDRixNQUFNLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLEtBQUs7QUFDcEMsRUFBRSxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUN2QyxFQUFFLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQztBQUN2QixFQUFFLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQztBQUN2QixFQUFFLElBQUksT0FBTyxDQUFDO0FBQ2QsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNyQixJQUFJLE9BQU8sR0FBRyxjQUFjLENBQUM7QUFDN0IsR0FBRyxNQUFNO0FBQ1QsSUFBSSxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDckMsR0FBRztBQUNILEVBQUUsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDL0YsRUFBRSxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztBQUN4RCxFQUFFLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUMsRUFBRSxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdDLEVBQUUsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLEVBQUUsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDO0FBQzdCLEVBQUUsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3JFLEVBQUUsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLEVBQUUsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkYsRUFBRSxNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQzVHLEVBQUUsTUFBTSxjQUFjLEdBQUcsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMzSCxFQUFFLElBQUksYUFBYSxHQUFHLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMvQyxFQUFFLElBQUlFLGNBQVEsQ0FBQ0MsZUFBUyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ2xELElBQUksTUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQyxJQUFJLE1BQU0sRUFBRSxHQUFHRixZQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdEMsSUFBSSxhQUFhLEdBQUcsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDaEQsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDMUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUMsR0FBRztBQUNILEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNyQyxJQUFJLFNBQVMsSUFBSSxhQUFhLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztBQUNuRCxJQUFJLFFBQVEsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDO0FBQ3BDLEdBQUc7QUFDSCxFQUFFLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDOUMsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLEVBQUUsRUFBRTtBQUNwRSxJQUFJLElBQUlFLGVBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7QUFDMUMsTUFBTSxnQkFBZ0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBQ2hFLEtBQUssTUFBTTtBQUNYLE1BQU0sZ0JBQWdCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUMxRCxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUUsTUFBTSxlQUFlLEdBQUcsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMxSCxFQUFFRixZQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN0RCxFQUFFLElBQUksY0FBYyxHQUFHLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNqRCxFQUFFLElBQUlDLGNBQVEsQ0FBQ0MsZUFBUyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ2xELElBQUksTUFBTSxHQUFHLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QyxJQUFJLE1BQU0sRUFBRSxHQUFHRixZQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDdkMsSUFBSSxjQUFjLEdBQUcsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDakQsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0MsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0MsR0FBRztBQUNILEVBQUUsU0FBUyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO0FBQ2xELEVBQUUsSUFBSSxjQUFjLENBQUMsS0FBSyxHQUFHLFFBQVEsRUFBRTtBQUN2QyxJQUFJLFFBQVEsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ3BDLEdBQUc7QUFDSCxFQUFFLE1BQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUM3QixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSztBQUM3QyxJQUFJLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQ2xELElBQUksSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQztBQUM1QyxJQUFJLElBQUlFLGVBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7QUFDMUMsTUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMxRSxLQUFLO0FBQ0wsSUFBSSxNQUFNLEdBQUcsR0FBRyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVztBQUNqRCxNQUFNLGFBQWE7QUFDbkIsUUFBUSxVQUFVO0FBQ2xCLFFBQVEsVUFBVSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVO0FBQ25FLFFBQVEsSUFBSTtBQUNaLFFBQVEsSUFBSTtBQUNaLE9BQU87QUFDUCxLQUFLLENBQUM7QUFDTixJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM3QixJQUFJLElBQUlELGNBQVEsQ0FBQ0MsZUFBUyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ3BELE1BQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxNQUFNLE1BQU0sRUFBRSxHQUFHRixZQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0IsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDekMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckMsS0FBSztBQUNMLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsRUFBRTtBQUMvQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQzVCLEtBQUs7QUFDTCxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztBQUMxQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUIsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLFNBQVMsSUFBSSxVQUFVLENBQUM7QUFDMUIsRUFBRSxNQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDMUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUs7QUFDN0MsSUFBSSxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUNsRCxJQUFJLElBQUksV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUM7QUFDN0MsSUFBSSxJQUFJRSxlQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO0FBQzFDLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUUsS0FBSztBQUNMLElBQUksTUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVc7QUFDakQsTUFBTSxhQUFhO0FBQ25CLFFBQVEsV0FBVztBQUNuQixRQUFRLFVBQVUsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVTtBQUNuRSxRQUFRLElBQUk7QUFDWixRQUFRLElBQUk7QUFDWixPQUFPO0FBQ1AsS0FBSyxDQUFDO0FBQ04sSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDN0IsSUFBSSxJQUFJRCxjQUFRLENBQUNDLGVBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUNwRCxNQUFNLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsTUFBTSxNQUFNLEVBQUUsR0FBR0YsWUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQ3pDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25DLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JDLEtBQUs7QUFDTCxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUU7QUFDL0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUM1QixLQUFLO0FBQ0wsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7QUFDMUMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsRUFBRSxTQUFTLElBQUksVUFBVSxDQUFDO0FBQzFCLEVBQUUsSUFBSSxZQUFZLEVBQUU7QUFDcEIsSUFBSSxJQUFJLE1BQU0sR0FBRyxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztBQUN0RCxJQUFJQSxZQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSTtBQUMvQixNQUFNLFdBQVc7QUFDakIsTUFBTSxhQUFhLElBQUksQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsR0FBRyxHQUFHO0FBQ3BGLEtBQUssQ0FBQztBQUNOLElBQUksV0FBVyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO0FBQ3BELEdBQUc7QUFDSCxFQUFFLElBQUksS0FBSyxHQUFHLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0FBQ3BELEVBQUVBLFlBQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJO0FBQzlCLElBQUksV0FBVztBQUNmLElBQUksYUFBYSxJQUFJLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLEdBQUcsR0FBRztBQUNqRyxHQUFHLENBQUM7QUFDSixFQUFFLFdBQVcsSUFBSSxjQUFjLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztBQUNwRCxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxXQUFXLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLFdBQVcsR0FBRyxVQUFVLEdBQUcsV0FBVyxDQUFDLENBQUM7QUFDMVAsRUFBRSxXQUFXLElBQUksVUFBVSxDQUFDO0FBQzVCLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsS0FBSztBQUNuQyxJQUFJQSxZQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSTtBQUNwQixNQUFNLFdBQVc7QUFDakIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxHQUFHLFdBQVcsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRztBQUN0RyxLQUFLLENBQUM7QUFDTixJQUFJLE1BQU0sVUFBVSxHQUFHLEdBQUcsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzVELElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQyxVQUFVLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFVBQVUsQ0FBQztBQUN6RixHQUFHLENBQUMsQ0FBQztBQUNMLEVBQUUsV0FBVyxJQUFJLFVBQVUsQ0FBQztBQUM1QixFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxXQUFXLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLFdBQVcsR0FBRyxVQUFVLEdBQUcsV0FBVyxDQUFDLENBQUM7QUFDN1AsRUFBRSxXQUFXLElBQUksVUFBVSxDQUFDO0FBQzVCLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsS0FBSztBQUNoQyxJQUFJQSxZQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSTtBQUNwQixNQUFNLFdBQVc7QUFDakIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEdBQUc7QUFDckYsS0FBSyxDQUFDO0FBQ04sSUFBSSxNQUFNLFVBQVUsR0FBRyxHQUFHLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM1RCxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxVQUFVLENBQUM7QUFDekYsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RPLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLE1BQU0sRUFBRTtBQUNwQyxJQUFJLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEMsR0FBRyxDQUFDO0FBQ0osRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFDRixNQUFNLE1BQU0sR0FBRztBQUNmLEVBQUUsT0FBTyxFQUFFLFFBQVE7QUFDbkIsRUFBRSxTQUFTO0FBQ1gsRUFBRSxRQUFRO0FBQ1YsRUFBRSxJQUFJO0FBQ04sRUFBRSxTQUFTO0FBQ1gsRUFBRSxhQUFhO0FBQ2YsRUFBRSxNQUFNO0FBQ1IsRUFBRSxNQUFNO0FBQ1IsRUFBRSxZQUFZO0FBQ2QsRUFBRSxPQUFPO0FBQ1QsRUFBRSxPQUFPO0FBQ1QsRUFBRSxXQUFXO0FBQ2IsRUFBRSxtQkFBbUI7QUFDckIsRUFBRSxVQUFVO0FBQ1osRUFBRSxTQUFTO0FBQ1gsRUFBRSxTQUFTO0FBQ1gsRUFBRSxhQUFhO0FBQ2YsRUFBRSxvQkFBb0I7QUFDdEIsRUFBRSxRQUFRO0FBQ1YsRUFBRSxLQUFLO0FBQ1AsRUFBRSxHQUFHO0FBQ0wsRUFBRSxJQUFJLEVBQUUsTUFBTTtBQUNkLEVBQUUsVUFBVTtBQUNaLEVBQUUsSUFBSSxFQUFFLFFBQVE7QUFDaEIsRUFBRSxJQUFJLEVBQUUsUUFBUTtBQUNoQixFQUFFLFNBQVM7QUFDWCxDQUFDLENBQUM7QUFDRixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDZCxNQUFDLFVBQVUsR0FBRyxPQUFPLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLO0FBQzlDLEVBQUUsSUFBSSxLQUFLLENBQUM7QUFDWixFQUFFLElBQUksRUFBRSxDQUFDO0FBQ1QsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDakIsSUFBSSxJQUFJLE1BQU0sQ0FBQztBQUNmLElBQUksSUFBSUUsZUFBUyxFQUFFLENBQUMsYUFBYSxLQUFLLFNBQVMsRUFBRTtBQUNqRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDdEIsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNoQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQztBQUMzQyxLQUFLO0FBQ0wsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3RGLElBQUksRUFBRSxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3BELEdBQUcsTUFBTTtBQUNULElBQUksRUFBRSxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ25ELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNmLEdBQUc7QUFDSCxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNwQixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuQyxHQUFHO0FBQ0gsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDbEIsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25ELEdBQUc7QUFDSCxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDN0IsRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDekIsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUM7QUFDdEYsR0FBRztBQUNILEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDZixFQUFFO0FBQ0csTUFBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxLQUFLO0FBQ3BDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDNUIsRUFBRTtBQUNHLE1BQUMsT0FBTyxHQUFHLE1BQU07QUFDdEIsRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLEVBQUU7QUFDRyxNQUFDLFlBQVksR0FBRyxDQUFDLElBQUksS0FBSztBQUMvQixFQUFFLE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDaEMsRUFBRUgsV0FBRyxDQUFDLEtBQUs7QUFDWCxJQUFJLG1CQUFtQjtBQUN2QixJQUFJLElBQUksQ0FBQyxJQUFJO0FBQ2IsSUFBSSxJQUFJO0FBQ1IsSUFBSSxZQUFZLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRztBQUM5RSxHQUFHLENBQUM7QUFDSixFQUFFLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNwQixFQUFFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQzlCLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ3hCLElBQUksRUFBRSxDQUFDLElBQUk7QUFDWCxNQUFNLFdBQVc7QUFDakIsTUFBTSxZQUFZLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxHQUFHO0FBQ3pHLEtBQUssQ0FBQztBQUNOLEdBQUcsTUFBTTtBQUNULElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDdEUsR0FBRztBQUNILEVBQUUsT0FBTyxJQUFJLENBQUM7QUFDZCxFQUFFO0FBQ0csTUFBQyx1QkFBdUIsR0FBRyxDQUFDO0FBQ2pDLEVBQUUsU0FBUztBQUNYLENBQUMsS0FBSztBQUNOLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQ2IsRUFBRSxNQUFNLHNCQUFzQixHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsU0FBUyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsbUJBQW1CLEtBQUssSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ3BJLEVBQUUsTUFBTSx5QkFBeUIsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLFNBQVMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLG1CQUFtQixLQUFLLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztBQUMxSSxFQUFFLE1BQU0sd0JBQXdCLEdBQUcsc0JBQXNCLEdBQUcseUJBQXlCLENBQUM7QUFDdEYsRUFBRSxPQUFPO0FBQ1QsSUFBSSxzQkFBc0I7QUFDMUIsSUFBSSx5QkFBeUI7QUFDN0IsSUFBSSx3QkFBd0I7QUFDNUIsR0FBRyxDQUFDO0FBQ0osRUFBRTtBQUNGLE1BQU0sYUFBYSxHQUFHO0FBQ3RCLEVBQUUsV0FBVyxFQUFFLEVBQUU7QUFDakIsRUFBRSxTQUFTLEVBQUUsRUFBRTtBQUNmLEVBQUUsV0FBVyxFQUFFLEVBQUU7QUFDakIsRUFBRSxVQUFVLEVBQUUsQ0FBQztBQUNmLEVBQUUsUUFBUSxFQUFFLElBQUk7QUFDaEIsRUFBRSxXQUFXLEVBQUUsR0FBRztBQUNsQixDQUFDLENBQUM7QUFDRixTQUFTLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDaEQsRUFBRSxJQUFJLE1BQU0sS0FBSyxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssS0FBSyxDQUFDLEVBQUU7QUFDOUMsSUFBSSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUM5QyxHQUFHO0FBQ0gsRUFBRSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsRUFBRSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEMsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEMsRUFBRSxNQUFNLE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLEVBQUUsTUFBTSxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUN6QixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO0FBQy9ELENBQUM7QUFDRCxNQUFNLGdCQUFnQixHQUFHLENBQUMsSUFBSSxLQUFLO0FBQ25DLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzNCLElBQUksT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3RDLEdBQUc7QUFDSCxFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBQ0csTUFBQywwQkFBMEIsR0FBRyxDQUFDLElBQUksS0FBSztBQUM3QyxFQUFFLE9BQU87QUFDVCxJQUFJLENBQUMsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFO0FBQzVCLE1BQU0sSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtBQUN4RSxRQUFRLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNFLFFBQVEsTUFBTSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9GLE9BQU8sTUFBTSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7QUFDM0YsUUFBUSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLHNCQUFzQjtBQUN4RCxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUMvQixVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUMvQixTQUFTLENBQUM7QUFDVixRQUFRLE1BQU0sR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3RixPQUFPO0FBQ1AsTUFBTSxPQUFPLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDNUMsS0FBSztBQUNMLElBQUksQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUU7QUFDNUIsTUFBTSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDckIsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO0FBQ3hFLFFBQVEsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0UsUUFBUSxNQUFNLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pHLE9BQU8sTUFBTSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7QUFDM0YsUUFBUSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLHNCQUFzQjtBQUN4RCxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUMvQixVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUMvQixTQUFTLENBQUM7QUFDVixRQUFRLE1BQU0sR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkcsT0FBTztBQUNQLE1BQU0sT0FBTyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQzVDLEtBQUs7QUFDTCxHQUFHLENBQUM7QUFDSixFQUFFO0FBQ0csTUFBQyxjQUFjLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsV0FBVyxLQUFLO0FBQ2hFLEVBQUUsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQzNCLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQy9FLEdBQUc7QUFDSCxFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUN6QixJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUMzRSxHQUFHO0FBQ0gsRUFBRTtBQUNGLE1BQU0sYUFBYSxHQUFHO0FBQ3RCLEVBQUUsV0FBVyxFQUFFLE9BQU87QUFDdEIsRUFBRSxXQUFXLEVBQUUsT0FBTztBQUN0QixFQUFFLFVBQVUsRUFBRSxNQUFNO0FBQ3BCLEVBQUUsWUFBWSxFQUFFLFFBQVE7QUFDeEIsRUFBRSxXQUFXLEVBQUUsYUFBYTtBQUM1QixFQUFFLFNBQVMsRUFBRSxXQUFXO0FBQ3hCLEVBQUUsV0FBVyxFQUFFLGFBQWE7QUFDNUIsRUFBRSxVQUFVLEVBQUUsWUFBWTtBQUMxQixFQUFFLFFBQVEsRUFBRSxVQUFVO0FBQ3RCLENBQUMsQ0FBQztBQUNGLE1BQU0sYUFBYSxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxXQUFXLEtBQUs7QUFDOUUsRUFBRSxNQUFNLGFBQWEsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakQsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO0FBQ3RCLElBQUlBLFdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakQsSUFBSSxPQUFPO0FBQ1gsR0FBRztBQUNILEVBQUUsTUFBTSxNQUFNLEdBQUcsUUFBUSxLQUFLLE9BQU8sR0FBRyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3hELEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25HLENBQUMsQ0FBQztBQUNGLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUNwQixJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDbkIsTUFBQyxLQUFLLEdBQUcsTUFBTTtBQUNwQixFQUFFLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDbEIsRUFBRSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLEVBQUU7QUFDRyxNQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEtBQUs7QUFDeEMsRUFBRSxNQUFNLGFBQWEsR0FBR0UsY0FBUSxDQUFDQyxlQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkUsRUFBRSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsR0FBR0UsNkJBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNwRixJQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVTtBQUMxQixJQUFJLGFBQWE7QUFDakIsSUFBSSxnQkFBZ0IsRUFBRSxJQUFJO0FBQzFCLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsRCxFQUFFLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNoRSxFQUFFLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM3RCxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekMsRUFBRSxJQUFJLElBQUksR0FBRyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDcEMsRUFBRSxJQUFJLGFBQWEsRUFBRTtBQUNyQixJQUFJLE1BQU0sR0FBRyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekMsSUFBSSxNQUFNLEVBQUUsR0FBR0osWUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3BDLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQ3ZDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLEdBQUc7QUFDSCxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQzFGLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUM7QUFDbEMsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDMUIsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDNUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUNULEVBQUUsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQzNCLElBQUksTUFBTSxpQkFBaUIsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbEYsSUFBSSxNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztBQUMvRSxJQUFJLE1BQU0sS0FBSyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNyRCxJQUFJLE1BQU0sS0FBSyxHQUFHLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzlDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDOUYsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNsQyxNQUFNLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ25DLEtBQUs7QUFDTCxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO0FBQzNELElBQUksZ0JBQWdCLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUM5QyxHQUFHO0FBQ0gsRUFBRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7QUFDNUIsSUFBSSxNQUFNLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNuRixJQUFJLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ2hGLElBQUksTUFBTSxLQUFLLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekUsSUFBSSxFQUFFLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDbkUsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDaEQsSUFBSSxNQUFNLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM5QyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQzlGLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbEMsTUFBTSxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNuQyxLQUFLO0FBQ0wsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQztBQUM3RCxJQUFJLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0MsR0FBRztBQUNILEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ3pCLElBQUksTUFBTSxlQUFlLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzlFLElBQUksTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDN0UsSUFBSSxNQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0RSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ25ELElBQUksTUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzVDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDOUYsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDekQsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNsQyxNQUFNLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ25DLEtBQUs7QUFDTCxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDO0FBQ3ZELElBQUksZ0JBQWdCLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM1QyxHQUFHO0FBQ0gsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDMUIsSUFBSSxNQUFNLGVBQWUsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDL0UsSUFBSSxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztBQUM5RSxJQUFJLE1BQU0sS0FBSyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDbkQsSUFBSSxNQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDNUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxZQUFZLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUM5RixJQUFJLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMxRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2xDLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDbkMsS0FBSztBQUNMLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUM7QUFDekQsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzdDLEdBQUc7QUFDSCxFQUFFLE9BQU8sWUFBWSxDQUFDO0FBQ3RCLEVBQUU7QUFDRixTQUFTLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7QUFDckMsRUFBRSxJQUFJRSxlQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRTtBQUM5QyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUM3QyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUM3QixHQUFHO0FBQ0gsQ0FBQztBQUNJLE1BQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxLQUFLO0FBQzNDLEVBQUVILFdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEYsRUFBRSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztBQUN4RSxFQUFFLE1BQU0sVUFBVSxHQUFHRyxlQUFTLEVBQUUsQ0FBQztBQUNqQyxFQUFFLE1BQU0sRUFBRSx3QkFBd0IsRUFBRSxHQUFHLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzNFLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2xCLElBQUksTUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNuQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbkIsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ25CLElBQUksSUFBSSxJQUFJLEVBQUU7QUFDZCxNQUFNLE1BQU0sR0FBRyxHQUFHSSxXQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEQsTUFBTVAsV0FBRyxDQUFDLEtBQUs7QUFDZixRQUFRLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVM7QUFDaEQsUUFBUSxDQUFDO0FBQ1QsUUFBUSxHQUFHO0FBQ1gsUUFBUSxDQUFDO0FBQ1QsUUFBUSxRQUFRO0FBQ2hCLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDYixRQUFRLEdBQUc7QUFDWCxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2IsUUFBUSxTQUFTO0FBQ2pCLE9BQU8sQ0FBQztBQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO0FBQzdCLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbEIsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsQixPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakYsR0FBRztBQUNILEVBQUUsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQzNCLElBQUksTUFBTSxFQUFFLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDakQsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ25CLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuQixJQUFJLElBQUksSUFBSSxFQUFFO0FBQ2QsTUFBTSxNQUFNLEdBQUcsR0FBR08sV0FBSyxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDcEcsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoQixNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2hCLEtBQUs7QUFDTCxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEQsR0FBRztBQUNILEVBQUUsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO0FBQzVCLElBQUksTUFBTSxFQUFFLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUM7QUFDbEQsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ25CLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuQixJQUFJLElBQUksSUFBSSxFQUFFO0FBQ2QsTUFBTSxNQUFNLEdBQUcsR0FBR0EsV0FBSyxDQUFDLHlCQUF5QjtBQUNqRCxRQUFRLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFDcEMsUUFBUSxhQUFhO0FBQ3JCLFFBQVEsSUFBSTtBQUNaLE9BQU8sQ0FBQztBQUNSLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDaEIsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoQixLQUFLO0FBQ0wsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xELEdBQUc7QUFDSCxFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUN6QixJQUFJLE1BQU0sRUFBRSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQy9DLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuQixJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbkIsSUFBSSxJQUFJLElBQUksRUFBRTtBQUNkLE1BQU0sTUFBTSxHQUFHLEdBQUdBLFdBQUssQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDaEIsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoQixLQUFLO0FBQ0wsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xELEdBQUc7QUFDSCxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUMxQixJQUFJLE1BQU0sRUFBRSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDO0FBQ2hELElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuQixJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbkIsSUFBSSxJQUFJLElBQUksRUFBRTtBQUNkLE1BQU0sTUFBTSxHQUFHLEdBQUdBLFdBQUssQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2pHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDaEIsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoQixLQUFLO0FBQ0wsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xELEdBQUc7QUFDSCxFQUFFO0FBQ0YsTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxLQUFLO0FBQ3RDLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuQixFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbkIsRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDcEMsRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDcEMsRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUMzQixFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7QUFDMUIsSUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixHQUFHO0FBQ0gsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQztBQUNGLE1BQU0sWUFBWSxHQUFHLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxXQUFXLEtBQUs7QUFDMUQsRUFBRVAsV0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2IsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMvQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzlDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0UsRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ25CLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuQixFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLEVBQUUsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMzRCxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRCxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckQsRUFBRSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUMzRSxJ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
