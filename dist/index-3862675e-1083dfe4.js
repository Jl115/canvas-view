'use strict';

var graph = require('./graph-4ff464ab.js');
var layout = require('./layout-d88296cc.js');
var clone = require('./clone-eca71c22.js');
var edgesE0da2a9e = require('./edges-e0da2a9e-dacae5bc.js');
var index = require('./index-deb671d6.js');
var createText2e5e7dd3 = require('./createText-2e5e7dd3-781a22a4.js');

function write(g) {
  var json = {
    options: {
      directed: g.isDirected(),
      multigraph: g.isMultigraph(),
      compound: g.isCompound(),
    },
    nodes: writeNodes(g),
    edges: writeEdges(g),
  };
  if (!graph.isUndefined(g.graph())) {
    json.value = clone.clone(g.graph());
  }
  return json;
}

function writeNodes(g) {
  return layout.map(g.nodes(), function (v) {
    var nodeValue = g.node(v);
    var parent = g.parent(v);
    var node = { v: v };
    if (!graph.isUndefined(nodeValue)) {
      node.value = nodeValue;
    }
    if (!graph.isUndefined(parent)) {
      node.parent = parent;
    }
    return node;
  });
}

function writeEdges(g) {
  return layout.map(g.edges(), function (e) {
    var edgeValue = g.edge(e);
    var edge = { v: e.v, w: e.w };
    if (!graph.isUndefined(e.name)) {
      edge.name = e.name;
    }
    if (!graph.isUndefined(edgeValue)) {
      edge.value = edgeValue;
    }
    return edge;
  });
}

let clusterDb = {};
let descendants = {};
let parents = {};
const clear$1 = () => {
  descendants = {};
  parents = {};
  clusterDb = {};
};
const isDescendant = (id, ancestorId) => {
  index.log$1.trace("In isDescendant", ancestorId, " ", id, " = ", descendants[ancestorId].includes(id));
  if (descendants[ancestorId].includes(id)) {
    return true;
  }
  return false;
};
const edgeInCluster = (edge, clusterId) => {
  index.log$1.info("Descendants of ", clusterId, " is ", descendants[clusterId]);
  index.log$1.info("Edge is ", edge);
  if (edge.v === clusterId) {
    return false;
  }
  if (edge.w === clusterId) {
    return false;
  }
  if (!descendants[clusterId]) {
    index.log$1.debug("Tilt, ", clusterId, ",not in descendants");
    return false;
  }
  return descendants[clusterId].includes(edge.v) || isDescendant(edge.v, clusterId) || isDescendant(edge.w, clusterId) || descendants[clusterId].includes(edge.w);
};
const copy = (clusterId, graph, newGraph, rootId) => {
  index.log$1.warn(
    "Copying children of ",
    clusterId,
    "root",
    rootId,
    "data",
    graph.node(clusterId),
    rootId
  );
  const nodes = graph.children(clusterId) || [];
  if (clusterId !== rootId) {
    nodes.push(clusterId);
  }
  index.log$1.warn("Copying (nodes) clusterId", clusterId, "nodes", nodes);
  nodes.forEach((node) => {
    if (graph.children(node).length > 0) {
      copy(node, graph, newGraph, rootId);
    } else {
      const data = graph.node(node);
      index.log$1.info("cp ", node, " to ", rootId, " with parent ", clusterId);
      newGraph.setNode(node, data);
      if (rootId !== graph.parent(node)) {
        index.log$1.warn("Setting parent", node, graph.parent(node));
        newGraph.setParent(node, graph.parent(node));
      }
      if (clusterId !== rootId && node !== clusterId) {
        index.log$1.debug("Setting parent", node, clusterId);
        newGraph.setParent(node, clusterId);
      } else {
        index.log$1.info("In copy ", clusterId, "root", rootId, "data", graph.node(clusterId), rootId);
        index.log$1.debug(
          "Not Setting parent for node=",
          node,
          "cluster!==rootId",
          clusterId !== rootId,
          "node!==clusterId",
          node !== clusterId
        );
      }
      const edges = graph.edges(node);
      index.log$1.debug("Copying Edges", edges);
      edges.forEach((edge) => {
        index.log$1.info("Edge", edge);
        const data2 = graph.edge(edge.v, edge.w, edge.name);
        index.log$1.info("Edge data", data2, rootId);
        try {
          if (edgeInCluster(edge, rootId)) {
            index.log$1.info("Copying as ", edge.v, edge.w, data2, edge.name);
            newGraph.setEdge(edge.v, edge.w, data2, edge.name);
            index.log$1.info("newGraph edges ", newGraph.edges(), newGraph.edge(newGraph.edges()[0]));
          } else {
            index.log$1.info(
              "Skipping copy of edge ",
              edge.v,
              "-->",
              edge.w,
              " rootId: ",
              rootId,
              " clusterId:",
              clusterId
            );
          }
        } catch (e) {
          index.log$1.error(e);
        }
      });
    }
    index.log$1.debug("Removing node", node);
    graph.removeNode(node);
  });
};
const extractDescendants = (id, graph) => {
  const children = graph.children(id);
  let res = [...children];
  for (const child of children) {
    parents[child] = id;
    res = [...res, ...extractDescendants(child, graph)];
  }
  return res;
};
const findNonClusterChild = (id, graph) => {
  index.log$1.trace("Searching", id);
  const children = graph.children(id);
  index.log$1.trace("Searching children of id ", id, children);
  if (children.length < 1) {
    index.log$1.trace("This is a valid node", id);
    return id;
  }
  for (const child of children) {
    const _id = findNonClusterChild(child, graph);
    if (_id) {
      index.log$1.trace("Found replacement for", id, " => ", _id);
      return _id;
    }
  }
};
const getAnchorId = (id) => {
  if (!clusterDb[id]) {
    return id;
  }
  if (!clusterDb[id].externalConnections) {
    return id;
  }
  if (clusterDb[id]) {
    return clusterDb[id].id;
  }
  return id;
};
const adjustClustersAndEdges = (graph, depth) => {
  if (!graph || depth > 10) {
    index.log$1.debug("Opting out, no graph ");
    return;
  } else {
    index.log$1.debug("Opting in, graph ");
  }
  graph.nodes().forEach(function(id) {
    const children = graph.children(id);
    if (children.length > 0) {
      index.log$1.warn(
        "Cluster identified",
        id,
        " Replacement id in edges: ",
        findNonClusterChild(id, graph)
      );
      descendants[id] = extractDescendants(id, graph);
      clusterDb[id] = { id: findNonClusterChild(id, graph), clusterData: graph.node(id) };
    }
  });
  graph.nodes().forEach(function(id) {
    const children = graph.children(id);
    const edges = graph.edges();
    if (children.length > 0) {
      index.log$1.debug("Cluster identified", id, descendants);
      edges.forEach((edge) => {
        if (edge.v !== id && edge.w !== id) {
          const d1 = isDescendant(edge.v, id);
          const d2 = isDescendant(edge.w, id);
          if (d1 ^ d2) {
            index.log$1.warn("Edge: ", edge, " leaves cluster ", id);
            index.log$1.warn("Descendants of XXX ", id, ": ", descendants[id]);
            clusterDb[id].externalConnections = true;
          }
        }
      });
    } else {
      index.log$1.debug("Not a cluster ", id, descendants);
    }
  });
  for (let id of Object.keys(clusterDb)) {
    const nonClusterChild = clusterDb[id].id;
    const parent = graph.parent(nonClusterChild);
    if (parent !== id && clusterDb[parent] && !clusterDb[parent].externalConnections) {
      clusterDb[id].id = parent;
    }
  }
  graph.edges().forEach(function(e) {
    const edge = graph.edge(e);
    index.log$1.warn("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
    index.log$1.warn("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(graph.edge(e)));
    let v = e.v;
    let w = e.w;
    index.log$1.warn(
      "Fix XXX",
      clusterDb,
      "ids:",
      e.v,
      e.w,
      "Translating: ",
      clusterDb[e.v],
      " --- ",
      clusterDb[e.w]
    );
    if (clusterDb[e.v] && clusterDb[e.w] && clusterDb[e.v] === clusterDb[e.w]) {
      index.log$1.warn("Fixing and trixing link to self - removing XXX", e.v, e.w, e.name);
      index.log$1.warn("Fixing and trixing - removing XXX", e.v, e.w, e.name);
      v = getAnchorId(e.v);
      w = getAnchorId(e.w);
      graph.removeEdge(e.v, e.w, e.name);
      const specialId = e.w + "---" + e.v;
      graph.setNode(specialId, {
        domId: specialId,
        id: specialId,
        labelStyle: "",
        labelText: edge.label,
        padding: 0,
        shape: "labelRect",
        style: ""
      });
      const edge1 = structuredClone(edge);
      const edge2 = structuredClone(edge);
      edge1.label = "";
      edge1.arrowTypeEnd = "none";
      edge2.label = "";
      edge1.fromCluster = e.v;
      edge2.toCluster = e.v;
      graph.setEdge(v, specialId, edge1, e.name + "-cyclic-special");
      graph.setEdge(specialId, w, edge2, e.name + "-cyclic-special");
    } else if (clusterDb[e.v] || clusterDb[e.w]) {
      index.log$1.warn("Fixing and trixing - removing XXX", e.v, e.w, e.name);
      v = getAnchorId(e.v);
      w = getAnchorId(e.w);
      graph.removeEdge(e.v, e.w, e.name);
      if (v !== e.v) {
        const parent = graph.parent(v);
        clusterDb[parent].externalConnections = true;
        edge.fromCluster = e.v;
      }
      if (w !== e.w) {
        const parent = graph.parent(w);
        clusterDb[parent].externalConnections = true;
        edge.toCluster = e.w;
      }
      index.log$1.warn("Fix Replacing with XXX", v, w, e.name);
      graph.setEdge(v, w, edge, e.name);
    }
  });
  index.log$1.warn("Adjusted Graph", write(graph));
  extractor(graph, 0);
  index.log$1.trace(clusterDb);
};
const extractor = (graph$1, depth) => {
  index.log$1.warn("extractor - ", depth, write(graph$1), graph$1.children("D"));
  if (depth > 10) {
    index.log$1.error("Bailing out");
    return;
  }
  let nodes = graph$1.nodes();
  let hasChildren = false;
  for (const node of nodes) {
    const children = graph$1.children(node);
    hasChildren = hasChildren || children.length > 0;
  }
  if (!hasChildren) {
    index.log$1.debug("Done, no node has children", graph$1.nodes());
    return;
  }
  index.log$1.debug("Nodes = ", nodes, depth);
  for (const node of nodes) {
    index.log$1.debug(
      "Extracting node",
      node,
      clusterDb,
      clusterDb[node] && !clusterDb[node].externalConnections,
      !graph$1.parent(node),
      graph$1.node(node),
      graph$1.children("D"),
      " Depth ",
      depth
    );
    if (!clusterDb[node]) {
      index.log$1.debug("Not a cluster", node, depth);
    } else if (!clusterDb[node].externalConnections && // !graph.parent(node) &&
    graph$1.children(node) && graph$1.children(node).length > 0) {
      index.log$1.warn(
        "Cluster without external connections, without a parent and with children",
        node,
        depth
      );
      const graphSettings = graph$1.graph();
      let dir = graphSettings.rankdir === "TB" ? "LR" : "TB";
      if (clusterDb[node] && clusterDb[node].clusterData && clusterDb[node].clusterData.dir) {
        dir = clusterDb[node].clusterData.dir;
        index.log$1.warn("Fixing dir", clusterDb[node].clusterData.dir, dir);
      }
      const clusterGraph = new graph.Graph({
        multigraph: true,
        compound: true
      }).setGraph({
        rankdir: dir,
        // Todo: set proper spacing
        nodesep: 50,
        ranksep: 50,
        marginx: 8,
        marginy: 8
      }).setDefaultEdgeLabel(function() {
        return {};
      });
      index.log$1.warn("Old graph before copy", write(graph$1));
      copy(node, graph$1, clusterGraph, node);
      graph$1.setNode(node, {
        clusterNode: true,
        id: node,
        clusterData: clusterDb[node].clusterData,
        labelText: clusterDb[node].labelText,
        graph: clusterGraph
      });
      index.log$1.warn("New graph after copy node: (", node, ")", write(clusterGraph));
      index.log$1.debug("Old graph after copy", write(graph$1));
    } else {
      index.log$1.warn(
        "Cluster ** ",
        node,
        " **not meeting the criteria !externalConnections:",
        !clusterDb[node].externalConnections,
        " no parent: ",
        !graph$1.parent(node),
        " children ",
        graph$1.children(node) && graph$1.children(node).length > 0,
        graph$1.children("D"),
        depth
      );
      index.log$1.debug(clusterDb);
    }
  }
  nodes = graph$1.nodes();
  index.log$1.warn("New list of nodes", nodes);
  for (const node of nodes) {
    const data = graph$1.node(node);
    index.log$1.warn(" Now next level", node, data);
    if (data.clusterNode) {
      extractor(data.graph, depth + 1);
    }
  }
};
const sorter = (graph, nodes) => {
  if (nodes.length === 0) {
    return [];
  }
  let result = Object.assign(nodes);
  nodes.forEach((node) => {
    const children = graph.children(node);
    const sorted = sorter(graph, children);
    result = [...result, ...sorted];
  });
  return result;
};
const sortNodesByHierarchy = (graph) => sorter(graph, graph.children());
const rect = (parent, node) => {
  index.log$1.info("Creating subgraph rect for ", node.id, node);
  const siteConfig = index.getConfig();
  const shapeSvg = parent.insert("g").attr("class", "cluster" + (node.class ? " " + node.class : "")).attr("id", node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const useHtmlLabels = index.evaluate(siteConfig.flowchart.htmlLabels);
  const label = shapeSvg.insert("g").attr("class", "cluster-label");
  const text = node.labelType === "markdown" ? createText2e5e7dd3.createText(label, node.labelText, { style: node.labelStyle, useHtmlLabels }) : label.node().appendChild(edgesE0da2a9e.createLabel$1(node.labelText, node.labelStyle, void 0, true));
  let bbox = text.getBBox();
  if (index.evaluate(siteConfig.flowchart.htmlLabels)) {
    const div = text.children[0];
    const dv = index.select(text);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  const padding = 0 * node.padding;
  const halfPadding = padding / 2;
  const width = node.width <= bbox.width + padding ? bbox.width + padding : node.width;
  if (node.width <= bbox.width + padding) {
    node.diff = (bbox.width - node.width) / 2 - node.padding / 2;
  } else {
    node.diff = -node.padding / 2;
  }
  index.log$1.trace("Data ", node, JSON.stringify(node));
  rect2.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("x", node.x - width / 2).attr("y", node.y - node.height / 2 - halfPadding).attr("width", width).attr("height", node.height + padding);
  const { subGraphTitleTopMargin } = edgesE0da2a9e.getSubGraphTitleMargins(siteConfig);
  if (useHtmlLabels) {
    label.attr(
      "transform",
      // This puts the label on top of the box instead of inside it
      `translate(${node.x - bbox.width / 2}, ${node.y - node.height / 2 + subGraphTitleTopMargin})`
    );
  } else {
    label.attr(
      "transform",
      // This puts the label on top of the box instead of inside it
      `translate(${node.x}, ${node.y - node.height / 2 + subGraphTitleTopMargin})`
    );
  }
  const rectBox = rect2.node().getBBox();
  node.width = rectBox.width;
  node.height = rectBox.height;
  node.intersect = function(point) {
    return edgesE0da2a9e.intersectRect$1(node, point);
  };
  return shapeSvg;
};
const noteGroup = (parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", "note-cluster").attr("id", node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const padding = 0 * node.padding;
  const halfPadding = padding / 2;
  rect2.attr("rx", node.rx).attr("ry", node.ry).attr("x", node.x - node.width / 2 - halfPadding).attr("y", node.y - node.height / 2 - halfPadding).attr("width", node.width + padding).attr("height", node.height + padding).attr("fill", "none");
  const rectBox = rect2.node().getBBox();
  node.width = rectBox.width;
  node.height = rectBox.height;
  node.intersect = function(point) {
    return edgesE0da2a9e.intersectRect$1(node, point);
  };
  return shapeSvg;
};
const roundedWithTitle = (parent, node) => {
  const siteConfig = index.getConfig();
  const shapeSvg = parent.insert("g").attr("class", node.classes).attr("id", node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const label = shapeSvg.insert("g").attr("class", "cluster-label");
  const innerRect = shapeSvg.append("rect");
  const text = label.node().appendChild(edgesE0da2a9e.createLabel$1(node.labelText, node.labelStyle, void 0, true));
  let bbox = text.getBBox();
  if (index.evaluate(siteConfig.flowchart.htmlLabels)) {
    const div = text.children[0];
    const dv = index.select(text);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  bbox = text.getBBox();
  const padding = 0 * node.padding;
  const halfPadding = padding / 2;
  const width = node.width <= bbox.width + node.padding ? bbox.width + node.padding : node.width;
  if (node.width <= bbox.width + node.padding) {
    node.diff = (bbox.width + node.padding * 0 - node.width) / 2;
  } else {
    node.diff = -node.padding / 2;
  }
  rect2.attr("class", "outer").attr("x", node.x - width / 2 - halfPadding).attr("y", node.y - node.height / 2 - halfPadding).attr("width", width + padding).attr("height", node.height + padding);
  innerRect.attr("class", "inner").attr("x", node.x - width / 2 - halfPadding).attr("y", node.y - node.height / 2 - halfPadding + bbox.height - 1).attr("width", width + padding).attr("height", node.height + padding - bbox.height - 3);
  const { subGraphTitleTopMargin } = edgesE0da2a9e.getSubGraphTitleMargins(siteConfig);
  label.attr(
    "transform",
    `translate(${node.x - bbox.width / 2}, ${node.y - node.height / 2 - node.padding / 3 + (index.evaluate(siteConfig.flowchart.htmlLabels) ? 5 : 3) + subGraphTitleTopMargin})`
  );
  const rectBox = rect2.node().getBBox();
  node.height = rectBox.height;
  node.intersect = function(point) {
    return edgesE0da2a9e.intersectRect$1(node, point);
  };
  return shapeSvg;
};
const divider = (parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", node.classes).attr("id", node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const padding = 0 * node.padding;
  const halfPadding = padding / 2;
  rect2.attr("class", "divider").attr("x", node.x - node.width / 2 - halfPadding).attr("y", node.y - node.height / 2).attr("width", node.width + padding).attr("height", node.height + padding);
  const rectBox = rect2.node().getBBox();
  node.width = rectBox.width;
  node.height = rectBox.height;
  node.diff = -node.padding / 2;
  node.intersect = function(point) {
    return edgesE0da2a9e.intersectRect$1(node, point);
  };
  return shapeSvg;
};
const shapes = { rect, roundedWithTitle, noteGroup, divider };
let clusterElems = {};
const insertCluster = (elem, node) => {
  index.log$1.trace("Inserting cluster");
  const shape = node.shape || "rect";
  clusterElems[node.id] = shapes[shape](elem, node);
};
const clear = () => {
  clusterElems = {};
};
const recursiveRender = async (_elem, graph, diagramType, id, parentCluster, siteConfig) => {
  index.log$1.info("Graph in recursive render: XXX", write(graph), parentCluster);
  const dir = graph.graph().rankdir;
  index.log$1.trace("Dir in recursive render - dir:", dir);
  const elem = _elem.insert("g").attr("class", "root");
  if (!graph.nodes()) {
    index.log$1.info("No nodes found for", graph);
  } else {
    index.log$1.info("Recursive render XXX", graph.nodes());
  }
  if (graph.edges().length > 0) {
    index.log$1.trace("Recursive edges", graph.edge(graph.edges()[0]));
  }
  const clusters = elem.insert("g").attr("class", "clusters");
  const edgePaths = elem.insert("g").attr("class", "edgePaths");
  const edgeLabels = elem.insert("g").attr("class", "edgeLabels");
  const nodes = elem.insert("g").attr("class", "nodes");
  await Promise.all(
    graph.nodes().map(async function(v) {
      const node = graph.node(v);
      if (parentCluster !== void 0) {
        const data = JSON.parse(JSON.stringify(parentCluster.clusterData));
        index.log$1.info("Setting data for cluster XXX (", v, ") ", data, parentCluster);
        graph.setNode(parentCluster.id, data);
        if (!graph.parent(v)) {
          index.log$1.trace("Setting parent", v, parentCluster.id);
          graph.setParent(v, parentCluster.id, data);
        }
      }
      index.log$1.info("(Insert) Node XXX" + v + ": " + JSON.stringify(graph.node(v)));
      if (node && node.clusterNode) {
        index.log$1.info("Cluster identified", v, node.width, graph.node(v));
        const o = await recursiveRender(
          nodes,
          node.graph,
          diagramType,
          id,
          graph.node(v),
          siteConfig
        );
        const newEl = o.elem;
        edgesE0da2a9e.updateNodeBounds(node, newEl);
        node.diff = o.diff || 0;
        index.log$1.info("Node bounds (abc123)", v, node, node.width, node.x, node.y);
        edgesE0da2a9e.setNodeElem(newEl, node);
        index.log$1.warn("Recursive render complete ", newEl, node);
      } else {
        if (graph.children(v).length > 0) {
          index.log$1.info("Cluster - the non recursive path XXX", v, node.id, node, graph);
          index.log$1.info(findNonClusterChild(node.id, graph));
          clusterDb[node.id] = { id: findNonClusterChild(node.id, graph), node };
        } else {
          index.log$1.info("Node - the non recursive path", v, node.id, node);
          await edgesE0da2a9e.insertNode(nodes, graph.node(v), dir);
        }
      }
    })
  );
  graph.edges().forEach(function(e) {
    const edge = graph.edge(e.v, e.w, e.name);
    index.log$1.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
    index.log$1.info("Edge " + e.v + " -> " + e.w + ": ", e, " ", JSON.stringify(graph.edge(e)));
    index.log$1.info("Fix", clusterDb, "ids:", e.v, e.w, "Translating: ", clusterDb[e.v], clusterDb[e.w]);
    edgesE0da2a9e.insertEdgeLabel(edgeLabels, edge);
  });
  graph.edges().forEach(function(e) {
    index.log$1.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
  });
  index.log$1.info("#############################################");
  index.log$1.info("###                Layout                 ###");
  index.log$1.info("#############################################");
  index.log$1.info(graph);
  layout.layout(graph);
  index.log$1.info("Graph after layout:", write(graph));
  let diff = 0;
  const { subGraphTitleTotalMargin } = edgesE0da2a9e.getSubGraphTitleMargins(siteConfig);
  sortNodesByHierarchy(graph).forEach(function(v) {
    const node = graph.node(v);
    index.log$1.info("Position " + v + ": " + JSON.stringify(graph.node(v)));
    index.log$1.info(
      "Position " + v + ": (" + node.x,
      "," + node.y,
      ") width: ",
      node.width,
      " height: ",
      node.height
    );
    if (node && node.clusterNode) {
      node.y += subGraphTitleTotalMargin;
      edgesE0da2a9e.positionNode(node);
    } else {
      if (graph.children(v).length > 0) {
        node.height += subGraphTitleTotalMargin;
        insertCluster(clusters, node);
        clusterDb[node.id].node = node;
      } else {
        node.y += subGraphTitleTotalMargin / 2;
        edgesE0da2a9e.positionNode(node);
      }
    }
  });
  graph.edges().forEach(function(e) {
    const edge = graph.edge(e);
    index.log$1.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(edge), edge);
    edge.points.forEach((point) => point.y += subGraphTitleTotalMargin / 2);
    const paths = edgesE0da2a9e.insertEdge(edgePaths, e, edge, clusterDb, diagramType, graph, id);
    edgesE0da2a9e.positionEdgeLabel(edge, paths);
  });
  graph.nodes().forEach(function(v) {
    const n = graph.node(v);
    index.log$1.info(v, n.type, n.diff);
    if (n.type === "group") {
      diff = n.diff;
    }
  });
  return { elem, diff };
};
const render = async (elem, graph, markers, diagramType, id) => {
  edgesE0da2a9e.insertMarkers$1(elem, markers, diagramType, id);
  edgesE0da2a9e.clear$1();
  edgesE0da2a9e.clear();
  clear();
  clear$1();
  index.log$1.warn("Graph at first:", JSON.stringify(write(graph)));
  adjustClustersAndEdges(graph);
  index.log$1.warn("Graph after:", JSON.stringify(write(graph)));
  const siteConfig = index.getConfig();
  await recursiveRender(elem, graph, diagramType, id, void 0, siteConfig);
};

exports.render = render;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtMzg2MjY3NWUtMTA4M2RmZTQuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9kYWdyZS1kMy1lcy9zcmMvZ3JhcGhsaWIvanNvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZXJtYWlkL2Rpc3QvaW5kZXgtMzg2MjY3NWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgR3JhcGggfSBmcm9tICcuL2dyYXBoLmpzJztcblxuZXhwb3J0IHsgd3JpdGUsIHJlYWQgfTtcblxuZnVuY3Rpb24gd3JpdGUoZykge1xuICB2YXIganNvbiA9IHtcbiAgICBvcHRpb25zOiB7XG4gICAgICBkaXJlY3RlZDogZy5pc0RpcmVjdGVkKCksXG4gICAgICBtdWx0aWdyYXBoOiBnLmlzTXVsdGlncmFwaCgpLFxuICAgICAgY29tcG91bmQ6IGcuaXNDb21wb3VuZCgpLFxuICAgIH0sXG4gICAgbm9kZXM6IHdyaXRlTm9kZXMoZyksXG4gICAgZWRnZXM6IHdyaXRlRWRnZXMoZyksXG4gIH07XG4gIGlmICghXy5pc1VuZGVmaW5lZChnLmdyYXBoKCkpKSB7XG4gICAganNvbi52YWx1ZSA9IF8uY2xvbmUoZy5ncmFwaCgpKTtcbiAgfVxuICByZXR1cm4ganNvbjtcbn1cblxuZnVuY3Rpb24gd3JpdGVOb2RlcyhnKSB7XG4gIHJldHVybiBfLm1hcChnLm5vZGVzKCksIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIG5vZGVWYWx1ZSA9IGcubm9kZSh2KTtcbiAgICB2YXIgcGFyZW50ID0gZy5wYXJlbnQodik7XG4gICAgdmFyIG5vZGUgPSB7IHY6IHYgfTtcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQobm9kZVZhbHVlKSkge1xuICAgICAgbm9kZS52YWx1ZSA9IG5vZGVWYWx1ZTtcbiAgICB9XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKHBhcmVudCkpIHtcbiAgICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdyaXRlRWRnZXMoZykge1xuICByZXR1cm4gXy5tYXAoZy5lZGdlcygpLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBlZGdlVmFsdWUgPSBnLmVkZ2UoZSk7XG4gICAgdmFyIGVkZ2UgPSB7IHY6IGUudiwgdzogZS53IH07XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKGUubmFtZSkpIHtcbiAgICAgIGVkZ2UubmFtZSA9IGUubmFtZTtcbiAgICB9XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKGVkZ2VWYWx1ZSkpIHtcbiAgICAgIGVkZ2UudmFsdWUgPSBlZGdlVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBlZGdlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVhZChqc29uKSB7XG4gIHZhciBnID0gbmV3IEdyYXBoKGpzb24ub3B0aW9ucykuc2V0R3JhcGgoanNvbi52YWx1ZSk7XG4gIF8uZWFjaChqc29uLm5vZGVzLCBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICBnLnNldE5vZGUoZW50cnkudiwgZW50cnkudmFsdWUpO1xuICAgIGlmIChlbnRyeS5wYXJlbnQpIHtcbiAgICAgIGcuc2V0UGFyZW50KGVudHJ5LnYsIGVudHJ5LnBhcmVudCk7XG4gICAgfVxuICB9KTtcbiAgXy5lYWNoKGpzb24uZWRnZXMsIGZ1bmN0aW9uIChlbnRyeSkge1xuICAgIGcuc2V0RWRnZSh7IHY6IGVudHJ5LnYsIHc6IGVudHJ5LncsIG5hbWU6IGVudHJ5Lm5hbWUgfSwgZW50cnkudmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIGc7XG59XG4iLCJpbXBvcnQgeyBsYXlvdXQgfSBmcm9tIFwiZGFncmUtZDMtZXMvc3JjL2RhZ3JlL2luZGV4LmpzXCI7XG5pbXBvcnQgKiBhcyBncmFwaGxpYkpzb24gZnJvbSBcImRhZ3JlLWQzLWVzL3NyYy9ncmFwaGxpYi9qc29uLmpzXCI7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUxhYmVsLCBnIGFzIGdldFN1YkdyYXBoVGl0bGVNYXJnaW5zLCBpIGFzIGludGVyc2VjdFJlY3QsIGEgYXMgaW5zZXJ0TWFya2VycywgYiBhcyBjbGVhciQyLCBkIGFzIGNsZWFyJDMsIHUgYXMgdXBkYXRlTm9kZUJvdW5kcywgcyBhcyBzZXROb2RlRWxlbSwgZSBhcyBpbnNlcnROb2RlLCBmIGFzIGluc2VydEVkZ2VMYWJlbCwgcCBhcyBwb3NpdGlvbk5vZGUsIGggYXMgaW5zZXJ0RWRnZSwgaiBhcyBwb3NpdGlvbkVkZ2VMYWJlbCB9IGZyb20gXCIuL2VkZ2VzLWUwZGEyYTllLmpzXCI7XG5pbXBvcnQgeyBsIGFzIGxvZywgYyBhcyBnZXRDb25maWcsIG0gYXMgZXZhbHVhdGUgfSBmcm9tIFwiLi9tZXJtYWlkLWI1ODYwYjU0LmpzXCI7XG5pbXBvcnQgKiBhcyBncmFwaGxpYiBmcm9tIFwiZGFncmUtZDMtZXMvc3JjL2dyYXBobGliL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBhIGFzIGNyZWF0ZVRleHQgfSBmcm9tIFwiLi9jcmVhdGVUZXh0LTJlNWU3ZGQzLmpzXCI7XG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tIFwiZDNcIjtcbmxldCBjbHVzdGVyRGIgPSB7fTtcbmxldCBkZXNjZW5kYW50cyA9IHt9O1xubGV0IHBhcmVudHMgPSB7fTtcbmNvbnN0IGNsZWFyJDEgPSAoKSA9PiB7XG4gIGRlc2NlbmRhbnRzID0ge307XG4gIHBhcmVudHMgPSB7fTtcbiAgY2x1c3RlckRiID0ge307XG59O1xuY29uc3QgaXNEZXNjZW5kYW50ID0gKGlkLCBhbmNlc3RvcklkKSA9PiB7XG4gIGxvZy50cmFjZShcIkluIGlzRGVzY2VuZGFudFwiLCBhbmNlc3RvcklkLCBcIiBcIiwgaWQsIFwiID0gXCIsIGRlc2NlbmRhbnRzW2FuY2VzdG9ySWRdLmluY2x1ZGVzKGlkKSk7XG4gIGlmIChkZXNjZW5kYW50c1thbmNlc3RvcklkXS5pbmNsdWRlcyhpZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuY29uc3QgZWRnZUluQ2x1c3RlciA9IChlZGdlLCBjbHVzdGVySWQpID0+IHtcbiAgbG9nLmluZm8oXCJEZXNjZW5kYW50cyBvZiBcIiwgY2x1c3RlcklkLCBcIiBpcyBcIiwgZGVzY2VuZGFudHNbY2x1c3RlcklkXSk7XG4gIGxvZy5pbmZvKFwiRWRnZSBpcyBcIiwgZWRnZSk7XG4gIGlmIChlZGdlLnYgPT09IGNsdXN0ZXJJZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZWRnZS53ID09PSBjbHVzdGVySWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCFkZXNjZW5kYW50c1tjbHVzdGVySWRdKSB7XG4gICAgbG9nLmRlYnVnKFwiVGlsdCwgXCIsIGNsdXN0ZXJJZCwgXCIsbm90IGluIGRlc2NlbmRhbnRzXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gZGVzY2VuZGFudHNbY2x1c3RlcklkXS5pbmNsdWRlcyhlZGdlLnYpIHx8IGlzRGVzY2VuZGFudChlZGdlLnYsIGNsdXN0ZXJJZCkgfHwgaXNEZXNjZW5kYW50KGVkZ2UudywgY2x1c3RlcklkKSB8fCBkZXNjZW5kYW50c1tjbHVzdGVySWRdLmluY2x1ZGVzKGVkZ2Uudyk7XG59O1xuY29uc3QgY29weSA9IChjbHVzdGVySWQsIGdyYXBoLCBuZXdHcmFwaCwgcm9vdElkKSA9PiB7XG4gIGxvZy53YXJuKFxuICAgIFwiQ29weWluZyBjaGlsZHJlbiBvZiBcIixcbiAgICBjbHVzdGVySWQsXG4gICAgXCJyb290XCIsXG4gICAgcm9vdElkLFxuICAgIFwiZGF0YVwiLFxuICAgIGdyYXBoLm5vZGUoY2x1c3RlcklkKSxcbiAgICByb290SWRcbiAgKTtcbiAgY29uc3Qgbm9kZXMgPSBncmFwaC5jaGlsZHJlbihjbHVzdGVySWQpIHx8IFtdO1xuICBpZiAoY2x1c3RlcklkICE9PSByb290SWQpIHtcbiAgICBub2Rlcy5wdXNoKGNsdXN0ZXJJZCk7XG4gIH1cbiAgbG9nLndhcm4oXCJDb3B5aW5nIChub2RlcykgY2x1c3RlcklkXCIsIGNsdXN0ZXJJZCwgXCJub2Rlc1wiLCBub2Rlcyk7XG4gIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBpZiAoZ3JhcGguY2hpbGRyZW4obm9kZSkubGVuZ3RoID4gMCkge1xuICAgICAgY29weShub2RlLCBncmFwaCwgbmV3R3JhcGgsIHJvb3RJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBncmFwaC5ub2RlKG5vZGUpO1xuICAgICAgbG9nLmluZm8oXCJjcCBcIiwgbm9kZSwgXCIgdG8gXCIsIHJvb3RJZCwgXCIgd2l0aCBwYXJlbnQgXCIsIGNsdXN0ZXJJZCk7XG4gICAgICBuZXdHcmFwaC5zZXROb2RlKG5vZGUsIGRhdGEpO1xuICAgICAgaWYgKHJvb3RJZCAhPT0gZ3JhcGgucGFyZW50KG5vZGUpKSB7XG4gICAgICAgIGxvZy53YXJuKFwiU2V0dGluZyBwYXJlbnRcIiwgbm9kZSwgZ3JhcGgucGFyZW50KG5vZGUpKTtcbiAgICAgICAgbmV3R3JhcGguc2V0UGFyZW50KG5vZGUsIGdyYXBoLnBhcmVudChub2RlKSk7XG4gICAgICB9XG4gICAgICBpZiAoY2x1c3RlcklkICE9PSByb290SWQgJiYgbm9kZSAhPT0gY2x1c3RlcklkKSB7XG4gICAgICAgIGxvZy5kZWJ1ZyhcIlNldHRpbmcgcGFyZW50XCIsIG5vZGUsIGNsdXN0ZXJJZCk7XG4gICAgICAgIG5ld0dyYXBoLnNldFBhcmVudChub2RlLCBjbHVzdGVySWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nLmluZm8oXCJJbiBjb3B5IFwiLCBjbHVzdGVySWQsIFwicm9vdFwiLCByb290SWQsIFwiZGF0YVwiLCBncmFwaC5ub2RlKGNsdXN0ZXJJZCksIHJvb3RJZCk7XG4gICAgICAgIGxvZy5kZWJ1ZyhcbiAgICAgICAgICBcIk5vdCBTZXR0aW5nIHBhcmVudCBmb3Igbm9kZT1cIixcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIFwiY2x1c3RlciE9PXJvb3RJZFwiLFxuICAgICAgICAgIGNsdXN0ZXJJZCAhPT0gcm9vdElkLFxuICAgICAgICAgIFwibm9kZSE9PWNsdXN0ZXJJZFwiLFxuICAgICAgICAgIG5vZGUgIT09IGNsdXN0ZXJJZFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc3QgZWRnZXMgPSBncmFwaC5lZGdlcyhub2RlKTtcbiAgICAgIGxvZy5kZWJ1ZyhcIkNvcHlpbmcgRWRnZXNcIiwgZWRnZXMpO1xuICAgICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgICBsb2cuaW5mbyhcIkVkZ2VcIiwgZWRnZSk7XG4gICAgICAgIGNvbnN0IGRhdGEyID0gZ3JhcGguZWRnZShlZGdlLnYsIGVkZ2UudywgZWRnZS5uYW1lKTtcbiAgICAgICAgbG9nLmluZm8oXCJFZGdlIGRhdGFcIiwgZGF0YTIsIHJvb3RJZCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKGVkZ2VJbkNsdXN0ZXIoZWRnZSwgcm9vdElkKSkge1xuICAgICAgICAgICAgbG9nLmluZm8oXCJDb3B5aW5nIGFzIFwiLCBlZGdlLnYsIGVkZ2UudywgZGF0YTIsIGVkZ2UubmFtZSk7XG4gICAgICAgICAgICBuZXdHcmFwaC5zZXRFZGdlKGVkZ2UudiwgZWRnZS53LCBkYXRhMiwgZWRnZS5uYW1lKTtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwibmV3R3JhcGggZWRnZXMgXCIsIG5ld0dyYXBoLmVkZ2VzKCksIG5ld0dyYXBoLmVkZ2UobmV3R3JhcGguZWRnZXMoKVswXSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2cuaW5mbyhcbiAgICAgICAgICAgICAgXCJTa2lwcGluZyBjb3B5IG9mIGVkZ2UgXCIsXG4gICAgICAgICAgICAgIGVkZ2UudixcbiAgICAgICAgICAgICAgXCItLT5cIixcbiAgICAgICAgICAgICAgZWRnZS53LFxuICAgICAgICAgICAgICBcIiByb290SWQ6IFwiLFxuICAgICAgICAgICAgICByb290SWQsXG4gICAgICAgICAgICAgIFwiIGNsdXN0ZXJJZDpcIixcbiAgICAgICAgICAgICAgY2x1c3RlcklkXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxvZy5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGxvZy5kZWJ1ZyhcIlJlbW92aW5nIG5vZGVcIiwgbm9kZSk7XG4gICAgZ3JhcGgucmVtb3ZlTm9kZShub2RlKTtcbiAgfSk7XG59O1xuY29uc3QgZXh0cmFjdERlc2NlbmRhbnRzID0gKGlkLCBncmFwaCkgPT4ge1xuICBjb25zdCBjaGlsZHJlbiA9IGdyYXBoLmNoaWxkcmVuKGlkKTtcbiAgbGV0IHJlcyA9IFsuLi5jaGlsZHJlbl07XG4gIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICBwYXJlbnRzW2NoaWxkXSA9IGlkO1xuICAgIHJlcyA9IFsuLi5yZXMsIC4uLmV4dHJhY3REZXNjZW5kYW50cyhjaGlsZCwgZ3JhcGgpXTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcbmNvbnN0IGZpbmROb25DbHVzdGVyQ2hpbGQgPSAoaWQsIGdyYXBoKSA9PiB7XG4gIGxvZy50cmFjZShcIlNlYXJjaGluZ1wiLCBpZCk7XG4gIGNvbnN0IGNoaWxkcmVuID0gZ3JhcGguY2hpbGRyZW4oaWQpO1xuICBsb2cudHJhY2UoXCJTZWFyY2hpbmcgY2hpbGRyZW4gb2YgaWQgXCIsIGlkLCBjaGlsZHJlbik7XG4gIGlmIChjaGlsZHJlbi5sZW5ndGggPCAxKSB7XG4gICAgbG9nLnRyYWNlKFwiVGhpcyBpcyBhIHZhbGlkIG5vZGVcIiwgaWQpO1xuICAgIHJldHVybiBpZDtcbiAgfVxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgY29uc3QgX2lkID0gZmluZE5vbkNsdXN0ZXJDaGlsZChjaGlsZCwgZ3JhcGgpO1xuICAgIGlmIChfaWQpIHtcbiAgICAgIGxvZy50cmFjZShcIkZvdW5kIHJlcGxhY2VtZW50IGZvclwiLCBpZCwgXCIgPT4gXCIsIF9pZCk7XG4gICAgICByZXR1cm4gX2lkO1xuICAgIH1cbiAgfVxufTtcbmNvbnN0IGdldEFuY2hvcklkID0gKGlkKSA9PiB7XG4gIGlmICghY2x1c3RlckRiW2lkXSkge1xuICAgIHJldHVybiBpZDtcbiAgfVxuICBpZiAoIWNsdXN0ZXJEYltpZF0uZXh0ZXJuYWxDb25uZWN0aW9ucykge1xuICAgIHJldHVybiBpZDtcbiAgfVxuICBpZiAoY2x1c3RlckRiW2lkXSkge1xuICAgIHJldHVybiBjbHVzdGVyRGJbaWRdLmlkO1xuICB9XG4gIHJldHVybiBpZDtcbn07XG5jb25zdCBhZGp1c3RDbHVzdGVyc0FuZEVkZ2VzID0gKGdyYXBoLCBkZXB0aCkgPT4ge1xuICBpZiAoIWdyYXBoIHx8IGRlcHRoID4gMTApIHtcbiAgICBsb2cuZGVidWcoXCJPcHRpbmcgb3V0LCBubyBncmFwaCBcIik7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGxvZy5kZWJ1ZyhcIk9wdGluZyBpbiwgZ3JhcGggXCIpO1xuICB9XG4gIGdyYXBoLm5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbihpZCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZ3JhcGguY2hpbGRyZW4oaWQpO1xuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBsb2cud2FybihcbiAgICAgICAgXCJDbHVzdGVyIGlkZW50aWZpZWRcIixcbiAgICAgICAgaWQsXG4gICAgICAgIFwiIFJlcGxhY2VtZW50IGlkIGluIGVkZ2VzOiBcIixcbiAgICAgICAgZmluZE5vbkNsdXN0ZXJDaGlsZChpZCwgZ3JhcGgpXG4gICAgICApO1xuICAgICAgZGVzY2VuZGFudHNbaWRdID0gZXh0cmFjdERlc2NlbmRhbnRzKGlkLCBncmFwaCk7XG4gICAgICBjbHVzdGVyRGJbaWRdID0geyBpZDogZmluZE5vbkNsdXN0ZXJDaGlsZChpZCwgZ3JhcGgpLCBjbHVzdGVyRGF0YTogZ3JhcGgubm9kZShpZCkgfTtcbiAgICB9XG4gIH0pO1xuICBncmFwaC5ub2RlcygpLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGdyYXBoLmNoaWxkcmVuKGlkKTtcbiAgICBjb25zdCBlZGdlcyA9IGdyYXBoLmVkZ2VzKCk7XG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIkNsdXN0ZXIgaWRlbnRpZmllZFwiLCBpZCwgZGVzY2VuZGFudHMpO1xuICAgICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgICBpZiAoZWRnZS52ICE9PSBpZCAmJiBlZGdlLncgIT09IGlkKSB7XG4gICAgICAgICAgY29uc3QgZDEgPSBpc0Rlc2NlbmRhbnQoZWRnZS52LCBpZCk7XG4gICAgICAgICAgY29uc3QgZDIgPSBpc0Rlc2NlbmRhbnQoZWRnZS53LCBpZCk7XG4gICAgICAgICAgaWYgKGQxIF4gZDIpIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFwiRWRnZTogXCIsIGVkZ2UsIFwiIGxlYXZlcyBjbHVzdGVyIFwiLCBpZCk7XG4gICAgICAgICAgICBsb2cud2FybihcIkRlc2NlbmRhbnRzIG9mIFhYWCBcIiwgaWQsIFwiOiBcIiwgZGVzY2VuZGFudHNbaWRdKTtcbiAgICAgICAgICAgIGNsdXN0ZXJEYltpZF0uZXh0ZXJuYWxDb25uZWN0aW9ucyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nLmRlYnVnKFwiTm90IGEgY2x1c3RlciBcIiwgaWQsIGRlc2NlbmRhbnRzKTtcbiAgICB9XG4gIH0pO1xuICBmb3IgKGxldCBpZCBvZiBPYmplY3Qua2V5cyhjbHVzdGVyRGIpKSB7XG4gICAgY29uc3Qgbm9uQ2x1c3RlckNoaWxkID0gY2x1c3RlckRiW2lkXS5pZDtcbiAgICBjb25zdCBwYXJlbnQgPSBncmFwaC5wYXJlbnQobm9uQ2x1c3RlckNoaWxkKTtcbiAgICBpZiAocGFyZW50ICE9PSBpZCAmJiBjbHVzdGVyRGJbcGFyZW50XSAmJiAhY2x1c3RlckRiW3BhcmVudF0uZXh0ZXJuYWxDb25uZWN0aW9ucykge1xuICAgICAgY2x1c3RlckRiW2lkXS5pZCA9IHBhcmVudDtcbiAgICB9XG4gIH1cbiAgZ3JhcGguZWRnZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBlZGdlID0gZ3JhcGguZWRnZShlKTtcbiAgICBsb2cud2FybihcIkVkZ2UgXCIgKyBlLnYgKyBcIiAtPiBcIiArIGUudyArIFwiOiBcIiArIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICBsb2cud2FybihcIkVkZ2UgXCIgKyBlLnYgKyBcIiAtPiBcIiArIGUudyArIFwiOiBcIiArIEpTT04uc3RyaW5naWZ5KGdyYXBoLmVkZ2UoZSkpKTtcbiAgICBsZXQgdiA9IGUudjtcbiAgICBsZXQgdyA9IGUudztcbiAgICBsb2cud2FybihcbiAgICAgIFwiRml4IFhYWFwiLFxuICAgICAgY2x1c3RlckRiLFxuICAgICAgXCJpZHM6XCIsXG4gICAgICBlLnYsXG4gICAgICBlLncsXG4gICAgICBcIlRyYW5zbGF0aW5nOiBcIixcbiAgICAgIGNsdXN0ZXJEYltlLnZdLFxuICAgICAgXCIgLS0tIFwiLFxuICAgICAgY2x1c3RlckRiW2Uud11cbiAgICApO1xuICAgIGlmIChjbHVzdGVyRGJbZS52XSAmJiBjbHVzdGVyRGJbZS53XSAmJiBjbHVzdGVyRGJbZS52XSA9PT0gY2x1c3RlckRiW2Uud10pIHtcbiAgICAgIGxvZy53YXJuKFwiRml4aW5nIGFuZCB0cml4aW5nIGxpbmsgdG8gc2VsZiAtIHJlbW92aW5nIFhYWFwiLCBlLnYsIGUudywgZS5uYW1lKTtcbiAgICAgIGxvZy53YXJuKFwiRml4aW5nIGFuZCB0cml4aW5nIC0gcmVtb3ZpbmcgWFhYXCIsIGUudiwgZS53LCBlLm5hbWUpO1xuICAgICAgdiA9IGdldEFuY2hvcklkKGUudik7XG4gICAgICB3ID0gZ2V0QW5jaG9ySWQoZS53KTtcbiAgICAgIGdyYXBoLnJlbW92ZUVkZ2UoZS52LCBlLncsIGUubmFtZSk7XG4gICAgICBjb25zdCBzcGVjaWFsSWQgPSBlLncgKyBcIi0tLVwiICsgZS52O1xuICAgICAgZ3JhcGguc2V0Tm9kZShzcGVjaWFsSWQsIHtcbiAgICAgICAgZG9tSWQ6IHNwZWNpYWxJZCxcbiAgICAgICAgaWQ6IHNwZWNpYWxJZCxcbiAgICAgICAgbGFiZWxTdHlsZTogXCJcIixcbiAgICAgICAgbGFiZWxUZXh0OiBlZGdlLmxhYmVsLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBzaGFwZTogXCJsYWJlbFJlY3RcIixcbiAgICAgICAgc3R5bGU6IFwiXCJcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZWRnZTEgPSBzdHJ1Y3R1cmVkQ2xvbmUoZWRnZSk7XG4gICAgICBjb25zdCBlZGdlMiA9IHN0cnVjdHVyZWRDbG9uZShlZGdlKTtcbiAgICAgIGVkZ2UxLmxhYmVsID0gXCJcIjtcbiAgICAgIGVkZ2UxLmFycm93VHlwZUVuZCA9IFwibm9uZVwiO1xuICAgICAgZWRnZTIubGFiZWwgPSBcIlwiO1xuICAgICAgZWRnZTEuZnJvbUNsdXN0ZXIgPSBlLnY7XG4gICAgICBlZGdlMi50b0NsdXN0ZXIgPSBlLnY7XG4gICAgICBncmFwaC5zZXRFZGdlKHYsIHNwZWNpYWxJZCwgZWRnZTEsIGUubmFtZSArIFwiLWN5Y2xpYy1zcGVjaWFsXCIpO1xuICAgICAgZ3JhcGguc2V0RWRnZShzcGVjaWFsSWQsIHcsIGVkZ2UyLCBlLm5hbWUgKyBcIi1jeWNsaWMtc3BlY2lhbFwiKTtcbiAgICB9IGVsc2UgaWYgKGNsdXN0ZXJEYltlLnZdIHx8IGNsdXN0ZXJEYltlLnddKSB7XG4gICAgICBsb2cud2FybihcIkZpeGluZyBhbmQgdHJpeGluZyAtIHJlbW92aW5nIFhYWFwiLCBlLnYsIGUudywgZS5uYW1lKTtcbiAgICAgIHYgPSBnZXRBbmNob3JJZChlLnYpO1xuICAgICAgdyA9IGdldEFuY2hvcklkKGUudyk7XG4gICAgICBncmFwaC5yZW1vdmVFZGdlKGUudiwgZS53LCBlLm5hbWUpO1xuICAgICAgaWYgKHYgIT09IGUudikge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBncmFwaC5wYXJlbnQodik7XG4gICAgICAgIGNsdXN0ZXJEYltwYXJlbnRdLmV4dGVybmFsQ29ubmVjdGlvbnMgPSB0cnVlO1xuICAgICAgICBlZGdlLmZyb21DbHVzdGVyID0gZS52O1xuICAgICAgfVxuICAgICAgaWYgKHcgIT09IGUudykge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBncmFwaC5wYXJlbnQodyk7XG4gICAgICAgIGNsdXN0ZXJEYltwYXJlbnRdLmV4dGVybmFsQ29ubmVjdGlvbnMgPSB0cnVlO1xuICAgICAgICBlZGdlLnRvQ2x1c3RlciA9IGUudztcbiAgICAgIH1cbiAgICAgIGxvZy53YXJuKFwiRml4IFJlcGxhY2luZyB3aXRoIFhYWFwiLCB2LCB3LCBlLm5hbWUpO1xuICAgICAgZ3JhcGguc2V0RWRnZSh2LCB3LCBlZGdlLCBlLm5hbWUpO1xuICAgIH1cbiAgfSk7XG4gIGxvZy53YXJuKFwiQWRqdXN0ZWQgR3JhcGhcIiwgZ3JhcGhsaWJKc29uLndyaXRlKGdyYXBoKSk7XG4gIGV4dHJhY3RvcihncmFwaCwgMCk7XG4gIGxvZy50cmFjZShjbHVzdGVyRGIpO1xufTtcbmNvbnN0IGV4dHJhY3RvciA9IChncmFwaCwgZGVwdGgpID0+IHtcbiAgbG9nLndhcm4oXCJleHRyYWN0b3IgLSBcIiwgZGVwdGgsIGdyYXBobGliSnNvbi53cml0ZShncmFwaCksIGdyYXBoLmNoaWxkcmVuKFwiRFwiKSk7XG4gIGlmIChkZXB0aCA+IDEwKSB7XG4gICAgbG9nLmVycm9yKFwiQmFpbGluZyBvdXRcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBub2RlcyA9IGdyYXBoLm5vZGVzKCk7XG4gIGxldCBoYXNDaGlsZHJlbiA9IGZhbHNlO1xuICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGdyYXBoLmNoaWxkcmVuKG5vZGUpO1xuICAgIGhhc0NoaWxkcmVuID0gaGFzQ2hpbGRyZW4gfHwgY2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgfVxuICBpZiAoIWhhc0NoaWxkcmVuKSB7XG4gICAgbG9nLmRlYnVnKFwiRG9uZSwgbm8gbm9kZSBoYXMgY2hpbGRyZW5cIiwgZ3JhcGgubm9kZXMoKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxvZy5kZWJ1ZyhcIk5vZGVzID0gXCIsIG5vZGVzLCBkZXB0aCk7XG4gIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgIGxvZy5kZWJ1ZyhcbiAgICAgIFwiRXh0cmFjdGluZyBub2RlXCIsXG4gICAgICBub2RlLFxuICAgICAgY2x1c3RlckRiLFxuICAgICAgY2x1c3RlckRiW25vZGVdICYmICFjbHVzdGVyRGJbbm9kZV0uZXh0ZXJuYWxDb25uZWN0aW9ucyxcbiAgICAgICFncmFwaC5wYXJlbnQobm9kZSksXG4gICAgICBncmFwaC5ub2RlKG5vZGUpLFxuICAgICAgZ3JhcGguY2hpbGRyZW4oXCJEXCIpLFxuICAgICAgXCIgRGVwdGggXCIsXG4gICAgICBkZXB0aFxuICAgICk7XG4gICAgaWYgKCFjbHVzdGVyRGJbbm9kZV0pIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIk5vdCBhIGNsdXN0ZXJcIiwgbm9kZSwgZGVwdGgpO1xuICAgIH0gZWxzZSBpZiAoIWNsdXN0ZXJEYltub2RlXS5leHRlcm5hbENvbm5lY3Rpb25zICYmIC8vICFncmFwaC5wYXJlbnQobm9kZSkgJiZcbiAgICBncmFwaC5jaGlsZHJlbihub2RlKSAmJiBncmFwaC5jaGlsZHJlbihub2RlKS5sZW5ndGggPiAwKSB7XG4gICAgICBsb2cud2FybihcbiAgICAgICAgXCJDbHVzdGVyIHdpdGhvdXQgZXh0ZXJuYWwgY29ubmVjdGlvbnMsIHdpdGhvdXQgYSBwYXJlbnQgYW5kIHdpdGggY2hpbGRyZW5cIixcbiAgICAgICAgbm9kZSxcbiAgICAgICAgZGVwdGhcbiAgICAgICk7XG4gICAgICBjb25zdCBncmFwaFNldHRpbmdzID0gZ3JhcGguZ3JhcGgoKTtcbiAgICAgIGxldCBkaXIgPSBncmFwaFNldHRpbmdzLnJhbmtkaXIgPT09IFwiVEJcIiA/IFwiTFJcIiA6IFwiVEJcIjtcbiAgICAgIGlmIChjbHVzdGVyRGJbbm9kZV0gJiYgY2x1c3RlckRiW25vZGVdLmNsdXN0ZXJEYXRhICYmIGNsdXN0ZXJEYltub2RlXS5jbHVzdGVyRGF0YS5kaXIpIHtcbiAgICAgICAgZGlyID0gY2x1c3RlckRiW25vZGVdLmNsdXN0ZXJEYXRhLmRpcjtcbiAgICAgICAgbG9nLndhcm4oXCJGaXhpbmcgZGlyXCIsIGNsdXN0ZXJEYltub2RlXS5jbHVzdGVyRGF0YS5kaXIsIGRpcik7XG4gICAgICB9XG4gICAgICBjb25zdCBjbHVzdGVyR3JhcGggPSBuZXcgZ3JhcGhsaWIuR3JhcGgoe1xuICAgICAgICBtdWx0aWdyYXBoOiB0cnVlLFxuICAgICAgICBjb21wb3VuZDogdHJ1ZVxuICAgICAgfSkuc2V0R3JhcGgoe1xuICAgICAgICByYW5rZGlyOiBkaXIsXG4gICAgICAgIC8vIFRvZG86IHNldCBwcm9wZXIgc3BhY2luZ1xuICAgICAgICBub2Rlc2VwOiA1MCxcbiAgICAgICAgcmFua3NlcDogNTAsXG4gICAgICAgIG1hcmdpbng6IDgsXG4gICAgICAgIG1hcmdpbnk6IDhcbiAgICAgIH0pLnNldERlZmF1bHRFZGdlTGFiZWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH0pO1xuICAgICAgbG9nLndhcm4oXCJPbGQgZ3JhcGggYmVmb3JlIGNvcHlcIiwgZ3JhcGhsaWJKc29uLndyaXRlKGdyYXBoKSk7XG4gICAgICBjb3B5KG5vZGUsIGdyYXBoLCBjbHVzdGVyR3JhcGgsIG5vZGUpO1xuICAgICAgZ3JhcGguc2V0Tm9kZShub2RlLCB7XG4gICAgICAgIGNsdXN0ZXJOb2RlOiB0cnVlLFxuICAgICAgICBpZDogbm9kZSxcbiAgICAgICAgY2x1c3RlckRhdGE6IGNsdXN0ZXJEYltub2RlXS5jbHVzdGVyRGF0YSxcbiAgICAgICAgbGFiZWxUZXh0OiBjbHVzdGVyRGJbbm9kZV0ubGFiZWxUZXh0LFxuICAgICAgICBncmFwaDogY2x1c3RlckdyYXBoXG4gICAgICB9KTtcbiAgICAgIGxvZy53YXJuKFwiTmV3IGdyYXBoIGFmdGVyIGNvcHkgbm9kZTogKFwiLCBub2RlLCBcIilcIiwgZ3JhcGhsaWJKc29uLndyaXRlKGNsdXN0ZXJHcmFwaCkpO1xuICAgICAgbG9nLmRlYnVnKFwiT2xkIGdyYXBoIGFmdGVyIGNvcHlcIiwgZ3JhcGhsaWJKc29uLndyaXRlKGdyYXBoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZy53YXJuKFxuICAgICAgICBcIkNsdXN0ZXIgKiogXCIsXG4gICAgICAgIG5vZGUsXG4gICAgICAgIFwiICoqbm90IG1lZXRpbmcgdGhlIGNyaXRlcmlhICFleHRlcm5hbENvbm5lY3Rpb25zOlwiLFxuICAgICAgICAhY2x1c3RlckRiW25vZGVdLmV4dGVybmFsQ29ubmVjdGlvbnMsXG4gICAgICAgIFwiIG5vIHBhcmVudDogXCIsXG4gICAgICAgICFncmFwaC5wYXJlbnQobm9kZSksXG4gICAgICAgIFwiIGNoaWxkcmVuIFwiLFxuICAgICAgICBncmFwaC5jaGlsZHJlbihub2RlKSAmJiBncmFwaC5jaGlsZHJlbihub2RlKS5sZW5ndGggPiAwLFxuICAgICAgICBncmFwaC5jaGlsZHJlbihcIkRcIiksXG4gICAgICAgIGRlcHRoXG4gICAgICApO1xuICAgICAgbG9nLmRlYnVnKGNsdXN0ZXJEYik7XG4gICAgfVxuICB9XG4gIG5vZGVzID0gZ3JhcGgubm9kZXMoKTtcbiAgbG9nLndhcm4oXCJOZXcgbGlzdCBvZiBub2Rlc1wiLCBub2Rlcyk7XG4gIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgIGNvbnN0IGRhdGEgPSBncmFwaC5ub2RlKG5vZGUpO1xuICAgIGxvZy53YXJuKFwiIE5vdyBuZXh0IGxldmVsXCIsIG5vZGUsIGRhdGEpO1xuICAgIGlmIChkYXRhLmNsdXN0ZXJOb2RlKSB7XG4gICAgICBleHRyYWN0b3IoZGF0YS5ncmFwaCwgZGVwdGggKyAxKTtcbiAgICB9XG4gIH1cbn07XG5jb25zdCBzb3J0ZXIgPSAoZ3JhcGgsIG5vZGVzKSA9PiB7XG4gIGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgbGV0IHJlc3VsdCA9IE9iamVjdC5hc3NpZ24obm9kZXMpO1xuICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBncmFwaC5jaGlsZHJlbihub2RlKTtcbiAgICBjb25zdCBzb3J0ZWQgPSBzb3J0ZXIoZ3JhcGgsIGNoaWxkcmVuKTtcbiAgICByZXN1bHQgPSBbLi4ucmVzdWx0LCAuLi5zb3J0ZWRdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5jb25zdCBzb3J0Tm9kZXNCeUhpZXJhcmNoeSA9IChncmFwaCkgPT4gc29ydGVyKGdyYXBoLCBncmFwaC5jaGlsZHJlbigpKTtcbmNvbnN0IHJlY3QgPSAocGFyZW50LCBub2RlKSA9PiB7XG4gIGxvZy5pbmZvKFwiQ3JlYXRpbmcgc3ViZ3JhcGggcmVjdCBmb3IgXCIsIG5vZGUuaWQsIG5vZGUpO1xuICBjb25zdCBzaXRlQ29uZmlnID0gZ2V0Q29uZmlnKCk7XG4gIGNvbnN0IHNoYXBlU3ZnID0gcGFyZW50Lmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiY2x1c3RlclwiICsgKG5vZGUuY2xhc3MgPyBcIiBcIiArIG5vZGUuY2xhc3MgOiBcIlwiKSkuYXR0cihcImlkXCIsIG5vZGUuaWQpO1xuICBjb25zdCByZWN0MiA9IHNoYXBlU3ZnLmluc2VydChcInJlY3RcIiwgXCI6Zmlyc3QtY2hpbGRcIik7XG4gIGNvbnN0IHVzZUh0bWxMYWJlbHMgPSBldmFsdWF0ZShzaXRlQ29uZmlnLmZsb3djaGFydC5odG1sTGFiZWxzKTtcbiAgY29uc3QgbGFiZWwgPSBzaGFwZVN2Zy5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImNsdXN0ZXItbGFiZWxcIik7XG4gIGNvbnN0IHRleHQgPSBub2RlLmxhYmVsVHlwZSA9PT0gXCJtYXJrZG93blwiID8gY3JlYXRlVGV4dChsYWJlbCwgbm9kZS5sYWJlbFRleHQsIHsgc3R5bGU6IG5vZGUubGFiZWxTdHlsZSwgdXNlSHRtbExhYmVscyB9KSA6IGxhYmVsLm5vZGUoKS5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbChub2RlLmxhYmVsVGV4dCwgbm9kZS5sYWJlbFN0eWxlLCB2b2lkIDAsIHRydWUpKTtcbiAgbGV0IGJib3ggPSB0ZXh0LmdldEJCb3goKTtcbiAgaWYgKGV2YWx1YXRlKHNpdGVDb25maWcuZmxvd2NoYXJ0Lmh0bWxMYWJlbHMpKSB7XG4gICAgY29uc3QgZGl2ID0gdGV4dC5jaGlsZHJlblswXTtcbiAgICBjb25zdCBkdiA9IHNlbGVjdCh0ZXh0KTtcbiAgICBiYm94ID0gZGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGR2LmF0dHIoXCJ3aWR0aFwiLCBiYm94LndpZHRoKTtcbiAgICBkdi5hdHRyKFwiaGVpZ2h0XCIsIGJib3guaGVpZ2h0KTtcbiAgfVxuICBjb25zdCBwYWRkaW5nID0gMCAqIG5vZGUucGFkZGluZztcbiAgY29uc3QgaGFsZlBhZGRpbmcgPSBwYWRkaW5nIC8gMjtcbiAgY29uc3Qgd2lkdGggPSBub2RlLndpZHRoIDw9IGJib3gud2lkdGggKyBwYWRkaW5nID8gYmJveC53aWR0aCArIHBhZGRpbmcgOiBub2RlLndpZHRoO1xuICBpZiAobm9kZS53aWR0aCA8PSBiYm94LndpZHRoICsgcGFkZGluZykge1xuICAgIG5vZGUuZGlmZiA9IChiYm94LndpZHRoIC0gbm9kZS53aWR0aCkgLyAyIC0gbm9kZS5wYWRkaW5nIC8gMjtcbiAgfSBlbHNlIHtcbiAgICBub2RlLmRpZmYgPSAtbm9kZS5wYWRkaW5nIC8gMjtcbiAgfVxuICBsb2cudHJhY2UoXCJEYXRhIFwiLCBub2RlLCBKU09OLnN0cmluZ2lmeShub2RlKSk7XG4gIHJlY3QyLmF0dHIoXCJzdHlsZVwiLCBub2RlLnN0eWxlKS5hdHRyKFwicnhcIiwgbm9kZS5yeCkuYXR0cihcInJ5XCIsIG5vZGUucnkpLmF0dHIoXCJ4XCIsIG5vZGUueCAtIHdpZHRoIC8gMikuYXR0cihcInlcIiwgbm9kZS55IC0gbm9kZS5oZWlnaHQgLyAyIC0gaGFsZlBhZGRpbmcpLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCkuYXR0cihcImhlaWdodFwiLCBub2RlLmhlaWdodCArIHBhZGRpbmcpO1xuICBjb25zdCB7IHN1YkdyYXBoVGl0bGVUb3BNYXJnaW4gfSA9IGdldFN1YkdyYXBoVGl0bGVNYXJnaW5zKHNpdGVDb25maWcpO1xuICBpZiAodXNlSHRtbExhYmVscykge1xuICAgIGxhYmVsLmF0dHIoXG4gICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgLy8gVGhpcyBwdXRzIHRoZSBsYWJlbCBvbiB0b3Agb2YgdGhlIGJveCBpbnN0ZWFkIG9mIGluc2lkZSBpdFxuICAgICAgYHRyYW5zbGF0ZSgke25vZGUueCAtIGJib3gud2lkdGggLyAyfSwgJHtub2RlLnkgLSBub2RlLmhlaWdodCAvIDIgKyBzdWJHcmFwaFRpdGxlVG9wTWFyZ2lufSlgXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBsYWJlbC5hdHRyKFxuICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgIC8vIFRoaXMgcHV0cyB0aGUgbGFiZWwgb24gdG9wIG9mIHRoZSBib3ggaW5zdGVhZCBvZiBpbnNpZGUgaXRcbiAgICAgIGB0cmFuc2xhdGUoJHtub2RlLnh9LCAke25vZGUueSAtIG5vZGUuaGVpZ2h0IC8gMiArIHN1YkdyYXBoVGl0bGVUb3BNYXJnaW59KWBcbiAgICApO1xuICB9XG4gIGNvbnN0IHJlY3RCb3ggPSByZWN0Mi5ub2RlKCkuZ2V0QkJveCgpO1xuICBub2RlLndpZHRoID0gcmVjdEJveC53aWR0aDtcbiAgbm9kZS5oZWlnaHQgPSByZWN0Qm94LmhlaWdodDtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludCkge1xuICAgIHJldHVybiBpbnRlcnNlY3RSZWN0KG5vZGUsIHBvaW50KTtcbiAgfTtcbiAgcmV0dXJuIHNoYXBlU3ZnO1xufTtcbmNvbnN0IG5vdGVHcm91cCA9IChwYXJlbnQsIG5vZGUpID0+IHtcbiAgY29uc3Qgc2hhcGVTdmcgPSBwYXJlbnQuaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJub3RlLWNsdXN0ZXJcIikuYXR0cihcImlkXCIsIG5vZGUuaWQpO1xuICBjb25zdCByZWN0MiA9IHNoYXBlU3ZnLmluc2VydChcInJlY3RcIiwgXCI6Zmlyc3QtY2hpbGRcIik7XG4gIGNvbnN0IHBhZGRpbmcgPSAwICogbm9kZS5wYWRkaW5nO1xuICBjb25zdCBoYWxmUGFkZGluZyA9IHBhZGRpbmcgLyAyO1xuICByZWN0Mi5hdHRyKFwicnhcIiwgbm9kZS5yeCkuYXR0cihcInJ5XCIsIG5vZGUucnkpLmF0dHIoXCJ4XCIsIG5vZGUueCAtIG5vZGUud2lkdGggLyAyIC0gaGFsZlBhZGRpbmcpLmF0dHIoXCJ5XCIsIG5vZGUueSAtIG5vZGUuaGVpZ2h0IC8gMiAtIGhhbGZQYWRkaW5nKS5hdHRyKFwid2lkdGhcIiwgbm9kZS53aWR0aCArIHBhZGRpbmcpLmF0dHIoXCJoZWlnaHRcIiwgbm9kZS5oZWlnaHQgKyBwYWRkaW5nKS5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gIGNvbnN0IHJlY3RCb3ggPSByZWN0Mi5ub2RlKCkuZ2V0QkJveCgpO1xuICBub2RlLndpZHRoID0gcmVjdEJveC53aWR0aDtcbiAgbm9kZS5oZWlnaHQgPSByZWN0Qm94LmhlaWdodDtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludCkge1xuICAgIHJldHVybiBpbnRlcnNlY3RSZWN0KG5vZGUsIHBvaW50KTtcbiAgfTtcbiAgcmV0dXJuIHNoYXBlU3ZnO1xufTtcbmNvbnN0IHJvdW5kZWRXaXRoVGl0bGUgPSAocGFyZW50LCBub2RlKSA9PiB7XG4gIGNvbnN0IHNpdGVDb25maWcgPSBnZXRDb25maWcoKTtcbiAgY29uc3Qgc2hhcGVTdmcgPSBwYXJlbnQuaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgbm9kZS5jbGFzc2VzKS5hdHRyKFwiaWRcIiwgbm9kZS5pZCk7XG4gIGNvbnN0IHJlY3QyID0gc2hhcGVTdmcuaW5zZXJ0KFwicmVjdFwiLCBcIjpmaXJzdC1jaGlsZFwiKTtcbiAgY29uc3QgbGFiZWwgPSBzaGFwZVN2Zy5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImNsdXN0ZXItbGFiZWxcIik7XG4gIGNvbnN0IGlubmVyUmVjdCA9IHNoYXBlU3ZnLmFwcGVuZChcInJlY3RcIik7XG4gIGNvbnN0IHRleHQgPSBsYWJlbC5ub2RlKCkuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwobm9kZS5sYWJlbFRleHQsIG5vZGUubGFiZWxTdHlsZSwgdm9pZCAwLCB0cnVlKSk7XG4gIGxldCBiYm94ID0gdGV4dC5nZXRCQm94KCk7XG4gIGlmIChldmFsdWF0ZShzaXRlQ29uZmlnLmZsb3djaGFydC5odG1sTGFiZWxzKSkge1xuICAgIGNvbnN0IGRpdiA9IHRleHQuY2hpbGRyZW5bMF07XG4gICAgY29uc3QgZHYgPSBzZWxlY3QodGV4dCk7XG4gICAgYmJveCA9IGRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBkdi5hdHRyKFwid2lkdGhcIiwgYmJveC53aWR0aCk7XG4gICAgZHYuYXR0cihcImhlaWdodFwiLCBiYm94LmhlaWdodCk7XG4gIH1cbiAgYmJveCA9IHRleHQuZ2V0QkJveCgpO1xuICBjb25zdCBwYWRkaW5nID0gMCAqIG5vZGUucGFkZGluZztcbiAgY29uc3QgaGFsZlBhZGRpbmcgPSBwYWRkaW5nIC8gMjtcbiAgY29uc3Qgd2lkdGggPSBub2RlLndpZHRoIDw9IGJib3gud2lkdGggKyBub2RlLnBhZGRpbmcgPyBiYm94LndpZHRoICsgbm9kZS5wYWRkaW5nIDogbm9kZS53aWR0aDtcbiAgaWYgKG5vZGUud2lkdGggPD0gYmJveC53aWR0aCArIG5vZGUucGFkZGluZykge1xuICAgIG5vZGUuZGlmZiA9IChiYm94LndpZHRoICsgbm9kZS5wYWRkaW5nICogMCAtIG5vZGUud2lkdGgpIC8gMjtcbiAgfSBlbHNlIHtcbiAgICBub2RlLmRpZmYgPSAtbm9kZS5wYWRkaW5nIC8gMjtcbiAgfVxuICByZWN0Mi5hdHRyKFwiY2xhc3NcIiwgXCJvdXRlclwiKS5hdHRyKFwieFwiLCBub2RlLnggLSB3aWR0aCAvIDIgLSBoYWxmUGFkZGluZykuYXR0cihcInlcIiwgbm9kZS55IC0gbm9kZS5oZWlnaHQgLyAyIC0gaGFsZlBhZGRpbmcpLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIHBhZGRpbmcpLmF0dHIoXCJoZWlnaHRcIiwgbm9kZS5oZWlnaHQgKyBwYWRkaW5nKTtcbiAgaW5uZXJSZWN0LmF0dHIoXCJjbGFzc1wiLCBcImlubmVyXCIpLmF0dHIoXCJ4XCIsIG5vZGUueCAtIHdpZHRoIC8gMiAtIGhhbGZQYWRkaW5nKS5hdHRyKFwieVwiLCBub2RlLnkgLSBub2RlLmhlaWdodCAvIDIgLSBoYWxmUGFkZGluZyArIGJib3guaGVpZ2h0IC0gMSkuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgcGFkZGluZykuYXR0cihcImhlaWdodFwiLCBub2RlLmhlaWdodCArIHBhZGRpbmcgLSBiYm94LmhlaWdodCAtIDMpO1xuICBjb25zdCB7IHN1YkdyYXBoVGl0bGVUb3BNYXJnaW4gfSA9IGdldFN1YkdyYXBoVGl0bGVNYXJnaW5zKHNpdGVDb25maWcpO1xuICBsYWJlbC5hdHRyKFxuICAgIFwidHJhbnNmb3JtXCIsXG4gICAgYHRyYW5zbGF0ZSgke25vZGUueCAtIGJib3gud2lkdGggLyAyfSwgJHtub2RlLnkgLSBub2RlLmhlaWdodCAvIDIgLSBub2RlLnBhZGRpbmcgLyAzICsgKGV2YWx1YXRlKHNpdGVDb25maWcuZmxvd2NoYXJ0Lmh0bWxMYWJlbHMpID8gNSA6IDMpICsgc3ViR3JhcGhUaXRsZVRvcE1hcmdpbn0pYFxuICApO1xuICBjb25zdCByZWN0Qm94ID0gcmVjdDIubm9kZSgpLmdldEJCb3goKTtcbiAgbm9kZS5oZWlnaHQgPSByZWN0Qm94LmhlaWdodDtcbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludCkge1xuICAgIHJldHVybiBpbnRlcnNlY3RSZWN0KG5vZGUsIHBvaW50KTtcbiAgfTtcbiAgcmV0dXJuIHNoYXBlU3ZnO1xufTtcbmNvbnN0IGRpdmlkZXIgPSAocGFyZW50LCBub2RlKSA9PiB7XG4gIGNvbnN0IHNoYXBlU3ZnID0gcGFyZW50Lmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIG5vZGUuY2xhc3NlcykuYXR0cihcImlkXCIsIG5vZGUuaWQpO1xuICBjb25zdCByZWN0MiA9IHNoYXBlU3ZnLmluc2VydChcInJlY3RcIiwgXCI6Zmlyc3QtY2hpbGRcIik7XG4gIGNvbnN0IHBhZGRpbmcgPSAwICogbm9kZS5wYWRkaW5nO1xuICBjb25zdCBoYWxmUGFkZGluZyA9IHBhZGRpbmcgLyAyO1xuICByZWN0Mi5hdHRyKFwiY2xhc3NcIiwgXCJkaXZpZGVyXCIpLmF0dHIoXCJ4XCIsIG5vZGUueCAtIG5vZGUud2lkdGggLyAyIC0gaGFsZlBhZGRpbmcpLmF0dHIoXCJ5XCIsIG5vZGUueSAtIG5vZGUuaGVpZ2h0IC8gMikuYXR0cihcIndpZHRoXCIsIG5vZGUud2lkdGggKyBwYWRkaW5nKS5hdHRyKFwiaGVpZ2h0XCIsIG5vZGUuaGVpZ2h0ICsgcGFkZGluZyk7XG4gIGNvbnN0IHJlY3RCb3ggPSByZWN0Mi5ub2RlKCkuZ2V0QkJveCgpO1xuICBub2RlLndpZHRoID0gcmVjdEJveC53aWR0aDtcbiAgbm9kZS5oZWlnaHQgPSByZWN0Qm94LmhlaWdodDtcbiAgbm9kZS5kaWZmID0gLW5vZGUucGFkZGluZyAvIDI7XG4gIG5vZGUuaW50ZXJzZWN0ID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgICByZXR1cm4gaW50ZXJzZWN0UmVjdChub2RlLCBwb2ludCk7XG4gIH07XG4gIHJldHVybiBzaGFwZVN2Zztcbn07XG5jb25zdCBzaGFwZXMgPSB7IHJlY3QsIHJvdW5kZWRXaXRoVGl0bGUsIG5vdGVHcm91cCwgZGl2aWRlciB9O1xubGV0IGNsdXN0ZXJFbGVtcyA9IHt9O1xuY29uc3QgaW5zZXJ0Q2x1c3RlciA9IChlbGVtLCBub2RlKSA9PiB7XG4gIGxvZy50cmFjZShcIkluc2VydGluZyBjbHVzdGVyXCIpO1xuICBjb25zdCBzaGFwZSA9IG5vZGUuc2hhcGUgfHwgXCJyZWN0XCI7XG4gIGNsdXN0ZXJFbGVtc1tub2RlLmlkXSA9IHNoYXBlc1tzaGFwZV0oZWxlbSwgbm9kZSk7XG59O1xuY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gIGNsdXN0ZXJFbGVtcyA9IHt9O1xufTtcbmNvbnN0IHJlY3Vyc2l2ZVJlbmRlciA9IGFzeW5jIChfZWxlbSwgZ3JhcGgsIGRpYWdyYW1UeXBlLCBpZCwgcGFyZW50Q2x1c3Rlciwgc2l0ZUNvbmZpZykgPT4ge1xuICBsb2cuaW5mbyhcIkdyYXBoIGluIHJlY3Vyc2l2ZSByZW5kZXI6IFhYWFwiLCBncmFwaGxpYkpzb24ud3JpdGUoZ3JhcGgpLCBwYXJlbnRDbHVzdGVyKTtcbiAgY29uc3QgZGlyID0gZ3JhcGguZ3JhcGgoKS5yYW5rZGlyO1xuICBsb2cudHJhY2UoXCJEaXIgaW4gcmVjdXJzaXZlIHJlbmRlciAtIGRpcjpcIiwgZGlyKTtcbiAgY29uc3QgZWxlbSA9IF9lbGVtLmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIFwicm9vdFwiKTtcbiAgaWYgKCFncmFwaC5ub2RlcygpKSB7XG4gICAgbG9nLmluZm8oXCJObyBub2RlcyBmb3VuZCBmb3JcIiwgZ3JhcGgpO1xuICB9IGVsc2Uge1xuICAgIGxvZy5pbmZvKFwiUmVjdXJzaXZlIHJlbmRlciBYWFhcIiwgZ3JhcGgubm9kZXMoKSk7XG4gIH1cbiAgaWYgKGdyYXBoLmVkZ2VzKCkubGVuZ3RoID4gMCkge1xuICAgIGxvZy50cmFjZShcIlJlY3Vyc2l2ZSBlZGdlc1wiLCBncmFwaC5lZGdlKGdyYXBoLmVkZ2VzKClbMF0pKTtcbiAgfVxuICBjb25zdCBjbHVzdGVycyA9IGVsZW0uaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJjbHVzdGVyc1wiKTtcbiAgY29uc3QgZWRnZVBhdGhzID0gZWxlbS5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImVkZ2VQYXRoc1wiKTtcbiAgY29uc3QgZWRnZUxhYmVscyA9IGVsZW0uaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJlZGdlTGFiZWxzXCIpO1xuICBjb25zdCBub2RlcyA9IGVsZW0uaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJub2Rlc1wiKTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgZ3JhcGgubm9kZXMoKS5tYXAoYXN5bmMgZnVuY3Rpb24odikge1xuICAgICAgY29uc3Qgbm9kZSA9IGdyYXBoLm5vZGUodik7XG4gICAgICBpZiAocGFyZW50Q2x1c3RlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHBhcmVudENsdXN0ZXIuY2x1c3RlckRhdGEpKTtcbiAgICAgICAgbG9nLmluZm8oXCJTZXR0aW5nIGRhdGEgZm9yIGNsdXN0ZXIgWFhYIChcIiwgdiwgXCIpIFwiLCBkYXRhLCBwYXJlbnRDbHVzdGVyKTtcbiAgICAgICAgZ3JhcGguc2V0Tm9kZShwYXJlbnRDbHVzdGVyLmlkLCBkYXRhKTtcbiAgICAgICAgaWYgKCFncmFwaC5wYXJlbnQodikpIHtcbiAgICAgICAgICBsb2cudHJhY2UoXCJTZXR0aW5nIHBhcmVudFwiLCB2LCBwYXJlbnRDbHVzdGVyLmlkKTtcbiAgICAgICAgICBncmFwaC5zZXRQYXJlbnQodiwgcGFyZW50Q2x1c3Rlci5pZCwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxvZy5pbmZvKFwiKEluc2VydCkgTm9kZSBYWFhcIiArIHYgKyBcIjogXCIgKyBKU09OLnN0cmluZ2lmeShncmFwaC5ub2RlKHYpKSk7XG4gICAgICBpZiAobm9kZSAmJiBub2RlLmNsdXN0ZXJOb2RlKSB7XG4gICAgICAgIGxvZy5pbmZvKFwiQ2x1c3RlciBpZGVudGlmaWVkXCIsIHYsIG5vZGUud2lkdGgsIGdyYXBoLm5vZGUodikpO1xuICAgICAgICBjb25zdCBvID0gYXdhaXQgcmVjdXJzaXZlUmVuZGVyKFxuICAgICAgICAgIG5vZGVzLFxuICAgICAgICAgIG5vZGUuZ3JhcGgsXG4gICAgICAgICAgZGlhZ3JhbVR5cGUsXG4gICAgICAgICAgaWQsXG4gICAgICAgICAgZ3JhcGgubm9kZSh2KSxcbiAgICAgICAgICBzaXRlQ29uZmlnXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5ld0VsID0gby5lbGVtO1xuICAgICAgICB1cGRhdGVOb2RlQm91bmRzKG5vZGUsIG5ld0VsKTtcbiAgICAgICAgbm9kZS5kaWZmID0gby5kaWZmIHx8IDA7XG4gICAgICAgIGxvZy5pbmZvKFwiTm9kZSBib3VuZHMgKGFiYzEyMylcIiwgdiwgbm9kZSwgbm9kZS53aWR0aCwgbm9kZS54LCBub2RlLnkpO1xuICAgICAgICBzZXROb2RlRWxlbShuZXdFbCwgbm9kZSk7XG4gICAgICAgIGxvZy53YXJuKFwiUmVjdXJzaXZlIHJlbmRlciBjb21wbGV0ZSBcIiwgbmV3RWwsIG5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGdyYXBoLmNoaWxkcmVuKHYpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsb2cuaW5mbyhcIkNsdXN0ZXIgLSB0aGUgbm9uIHJlY3Vyc2l2ZSBwYXRoIFhYWFwiLCB2LCBub2RlLmlkLCBub2RlLCBncmFwaCk7XG4gICAgICAgICAgbG9nLmluZm8oZmluZE5vbkNsdXN0ZXJDaGlsZChub2RlLmlkLCBncmFwaCkpO1xuICAgICAgICAgIGNsdXN0ZXJEYltub2RlLmlkXSA9IHsgaWQ6IGZpbmROb25DbHVzdGVyQ2hpbGQobm9kZS5pZCwgZ3JhcGgpLCBub2RlIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9nLmluZm8oXCJOb2RlIC0gdGhlIG5vbiByZWN1cnNpdmUgcGF0aFwiLCB2LCBub2RlLmlkLCBub2RlKTtcbiAgICAgICAgICBhd2FpdCBpbnNlcnROb2RlKG5vZGVzLCBncmFwaC5ub2RlKHYpLCBkaXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbiAgZ3JhcGguZWRnZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBlZGdlID0gZ3JhcGguZWRnZShlLnYsIGUudywgZS5uYW1lKTtcbiAgICBsb2cuaW5mbyhcIkVkZ2UgXCIgKyBlLnYgKyBcIiAtPiBcIiArIGUudyArIFwiOiBcIiArIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICBsb2cuaW5mbyhcIkVkZ2UgXCIgKyBlLnYgKyBcIiAtPiBcIiArIGUudyArIFwiOiBcIiwgZSwgXCIgXCIsIEpTT04uc3RyaW5naWZ5KGdyYXBoLmVkZ2UoZSkpKTtcbiAgICBsb2cuaW5mbyhcIkZpeFwiLCBjbHVzdGVyRGIsIFwiaWRzOlwiLCBlLnYsIGUudywgXCJUcmFuc2xhdGluZzogXCIsIGNsdXN0ZXJEYltlLnZdLCBjbHVzdGVyRGJbZS53XSk7XG4gICAgaW5zZXJ0RWRnZUxhYmVsKGVkZ2VMYWJlbHMsIGVkZ2UpO1xuICB9KTtcbiAgZ3JhcGguZWRnZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcbiAgICBsb2cuaW5mbyhcIkVkZ2UgXCIgKyBlLnYgKyBcIiAtPiBcIiArIGUudyArIFwiOiBcIiArIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgfSk7XG4gIGxvZy5pbmZvKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xuICBsb2cuaW5mbyhcIiMjIyAgICAgICAgICAgICAgICBMYXlvdXQgICAgICAgICAgICAgICAgICMjI1wiKTtcbiAgbG9nLmluZm8oXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XG4gIGxvZy5pbmZvKGdyYXBoKTtcbiAgbGF5b3V0KGdyYXBoKTtcbiAgbG9nLmluZm8oXCJHcmFwaCBhZnRlciBsYXlvdXQ6XCIsIGdyYXBobGliSnNvbi53cml0ZShncmFwaCkpO1xuICBsZXQgZGlmZiA9IDA7XG4gIGNvbnN0IHsgc3ViR3JhcGhUaXRsZVRvdGFsTWFyZ2luIH0gPSBnZXRTdWJHcmFwaFRpdGxlTWFyZ2lucyhzaXRlQ29uZmlnKTtcbiAgc29ydE5vZGVzQnlIaWVyYXJjaHkoZ3JhcGgpLmZvckVhY2goZnVuY3Rpb24odikge1xuICAgIGNvbnN0IG5vZGUgPSBncmFwaC5ub2RlKHYpO1xuICAgIGxvZy5pbmZvKFwiUG9zaXRpb24gXCIgKyB2ICsgXCI6IFwiICsgSlNPTi5zdHJpbmdpZnkoZ3JhcGgubm9kZSh2KSkpO1xuICAgIGxvZy5pbmZvKFxuICAgICAgXCJQb3NpdGlvbiBcIiArIHYgKyBcIjogKFwiICsgbm9kZS54LFxuICAgICAgXCIsXCIgKyBub2RlLnksXG4gICAgICBcIikgd2lkdGg6IFwiLFxuICAgICAgbm9kZS53aWR0aCxcbiAgICAgIFwiIGhlaWdodDogXCIsXG4gICAgICBub2RlLmhlaWdodFxuICAgICk7XG4gICAgaWYgKG5vZGUgJiYgbm9kZS5jbHVzdGVyTm9kZSkge1xuICAgICAgbm9kZS55ICs9IHN1YkdyYXBoVGl0bGVUb3RhbE1hcmdpbjtcbiAgICAgIHBvc2l0aW9uTm9kZShub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGdyYXBoLmNoaWxkcmVuKHYpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbm9kZS5oZWlnaHQgKz0gc3ViR3JhcGhUaXRsZVRvdGFsTWFyZ2luO1xuICAgICAgICBpbnNlcnRDbHVzdGVyKGNsdXN0ZXJzLCBub2RlKTtcbiAgICAgICAgY2x1c3RlckRiW25vZGUuaWRdLm5vZGUgPSBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS55ICs9IHN1YkdyYXBoVGl0bGVUb3RhbE1hcmdpbiAvIDI7XG4gICAgICAgIHBvc2l0aW9uTm9kZShub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBncmFwaC5lZGdlcygpLmZvckVhY2goZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBncmFwaC5lZGdlKGUpO1xuICAgIGxvZy5pbmZvKFwiRWRnZSBcIiArIGUudiArIFwiIC0+IFwiICsgZS53ICsgXCI6IFwiICsgSlNPTi5zdHJpbmdpZnkoZWRnZSksIGVkZ2UpO1xuICAgIGVkZ2UucG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiBwb2ludC55ICs9IHN1YkdyYXBoVGl0bGVUb3RhbE1hcmdpbiAvIDIpO1xuICAgIGNvbnN0IHBhdGhzID0gaW5zZXJ0RWRnZShlZGdlUGF0aHMsIGUsIGVkZ2UsIGNsdXN0ZXJEYiwgZGlhZ3JhbVR5cGUsIGdyYXBoLCBpZCk7XG4gICAgcG9zaXRpb25FZGdlTGFiZWwoZWRnZSwgcGF0aHMpO1xuICB9KTtcbiAgZ3JhcGgubm9kZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKHYpIHtcbiAgICBjb25zdCBuID0gZ3JhcGgubm9kZSh2KTtcbiAgICBsb2cuaW5mbyh2LCBuLnR5cGUsIG4uZGlmZik7XG4gICAgaWYgKG4udHlwZSA9PT0gXCJncm91cFwiKSB7XG4gICAgICBkaWZmID0gbi5kaWZmO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7IGVsZW0sIGRpZmYgfTtcbn07XG5jb25zdCByZW5kZXIgPSBhc3luYyAoZWxlbSwgZ3JhcGgsIG1hcmtlcnMsIGRpYWdyYW1UeXBlLCBpZCkgPT4ge1xuICBpbnNlcnRNYXJrZXJzKGVsZW0sIG1hcmtlcnMsIGRpYWdyYW1UeXBlLCBpZCk7XG4gIGNsZWFyJDIoKTtcbiAgY2xlYXIkMygpO1xuICBjbGVhcigpO1xuICBjbGVhciQxKCk7XG4gIGxvZy53YXJuKFwiR3JhcGggYXQgZmlyc3Q6XCIsIEpTT04uc3RyaW5naWZ5KGdyYXBobGliSnNvbi53cml0ZShncmFwaCkpKTtcbiAgYWRqdXN0Q2x1c3RlcnNBbmRFZGdlcyhncmFwaCk7XG4gIGxvZy53YXJuKFwiR3JhcGggYWZ0ZXI6XCIsIEpTT04uc3RyaW5naWZ5KGdyYXBobGliSnNvbi53cml0ZShncmFwaCkpKTtcbiAgY29uc3Qgc2l0ZUNvbmZpZyA9IGdldENvbmZpZygpO1xuICBhd2FpdCByZWN1cnNpdmVSZW5kZXIoZWxlbSwgZ3JhcGgsIGRpYWdyYW1UeXBlLCBpZCwgdm9pZCAwLCBzaXRlQ29uZmlnKTtcbn07XG5leHBvcnQge1xuICByZW5kZXIgYXMgclxufTtcbiJdLCJuYW1lcyI6WyJfLmlzVW5kZWZpbmVkIiwiXy5jbG9uZSIsIl8ubWFwIiwibG9nIiwiZ3JhcGhsaWJKc29uLndyaXRlIiwiZ3JhcGgiLCJncmFwaGxpYi5HcmFwaCIsImdldENvbmZpZyIsImV2YWx1YXRlIiwiY3JlYXRlVGV4dCIsImNyZWF0ZUxhYmVsIiwic2VsZWN0IiwiZ2V0U3ViR3JhcGhUaXRsZU1hcmdpbnMiLCJpbnRlcnNlY3RSZWN0IiwidXBkYXRlTm9kZUJvdW5kcyIsInNldE5vZGVFbGVtIiwiaW5zZXJ0Tm9kZSIsImluc2VydEVkZ2VMYWJlbCIsImxheW91dCIsInBvc2l0aW9uTm9kZSIsImluc2VydEVkZ2UiLCJwb3NpdGlvbkVkZ2VMYWJlbCIsImluc2VydE1hcmtlcnMiLCJjbGVhciQyIiwiY2xlYXIkMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsU0FBUyxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQ2xCLEVBQUUsSUFBSSxJQUFJLEdBQUc7QUFDYixJQUFJLE9BQU8sRUFBRTtBQUNiLE1BQU0sUUFBUSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUU7QUFDOUIsTUFBTSxVQUFVLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRTtBQUNsQyxNQUFNLFFBQVEsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFO0FBQzlCLEtBQUs7QUFDTCxJQUFJLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDO0FBQ0osRUFBRSxJQUFJLENBQUNBLGlCQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUU7QUFDakMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHQyxXQUFP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TSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3ZGLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxFQUFFO0FBQzFDLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDakUsR0FBRyxNQUFNO0FBQ1QsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDbEMsR0FBRztBQUNILEVBQUVSLFdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDakQsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUM7QUFDck4sRUFBRSxNQUFNLEVBQUUsc0JBQXNC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LENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQ2xNLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxTyxFQUFFLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxHQUFHQyxxQ0FBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN6RSxFQUFFLEtBQUssQ0FBQyxJQUFJO0FBQ1osSUFBSSxXQUFXO0FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJ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LENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUMsSUFBSWIsV0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLElBQUlBLFdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RixJQUFJQSxXQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEcsSUFBSWMsNkJBQWUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEMsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDcEMsSUFBSWQsV0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsRUFBRUEsV0FBRyxDQUFDLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0FBQzVELEVBQUVBLFdBQUcsQ0FBQyxJ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
