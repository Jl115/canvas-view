'use strict';

var index = require('./index-d3f4d11e.js');
var svgDrawCommon08f97a94 = require('./svgDrawCommon-08f97a94-cc11eeba.js');
var main = require('./main-8c6d7706.js');
require('obsidian');
require('@/components/modals');
require('@/views/view');

var parser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [1, 24], $V1 = [1, 25], $V2 = [1, 26], $V3 = [1, 27], $V4 = [1, 28], $V5 = [1, 63], $V6 = [1, 64], $V7 = [1, 65], $V8 = [1, 66], $V9 = [1, 67], $Va = [1, 68], $Vb = [1, 69], $Vc = [1, 29], $Vd = [1, 30], $Ve = [1, 31], $Vf = [1, 32], $Vg = [1, 33], $Vh = [1, 34], $Vi = [1, 35], $Vj = [1, 36], $Vk = [1, 37], $Vl = [1, 38], $Vm = [1, 39], $Vn = [1, 40], $Vo = [1, 41], $Vp = [1, 42], $Vq = [1, 43], $Vr = [1, 44], $Vs = [1, 45], $Vt = [1, 46], $Vu = [1, 47], $Vv = [1, 48], $Vw = [1, 50], $Vx = [1, 51], $Vy = [1, 52], $Vz = [1, 53], $VA = [1, 54], $VB = [1, 55], $VC = [1, 56], $VD = [1, 57], $VE = [1, 58], $VF = [1, 59], $VG = [1, 60], $VH = [14, 42], $VI = [14, 34, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74], $VJ = [12, 14, 34, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74], $VK = [1, 82], $VL = [1, 83], $VM = [1, 84], $VN = [1, 85], $VO = [12, 14, 42], $VP = [12, 14, 33, 42], $VQ = [12, 14, 33, 42, 76, 77, 79, 80], $VR = [12, 33], $VS = [34, 36, 37, 38, 39, 40, 41, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74];
  var parser2 = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "start": 3, "mermaidDoc": 4, "direction": 5, "direction_tb": 6, "direction_bt": 7, "direction_rl": 8, "direction_lr": 9, "graphConfig": 10, "C4_CONTEXT": 11, "NEWLINE": 12, "statements": 13, "EOF": 14, "C4_CONTAINER": 15, "C4_COMPONENT": 16, "C4_DYNAMIC": 17, "C4_DEPLOYMENT": 18, "otherStatements": 19, "diagramStatements": 20, "otherStatement": 21, "title": 22, "accDescription": 23, "acc_title": 24, "acc_title_value": 25, "acc_descr": 26, "acc_descr_value": 27, "acc_descr_multiline_value": 28, "boundaryStatement": 29, "boundaryStartStatement": 30, "boundaryStopStatement": 31, "boundaryStart": 32, "LBRACE": 33, "ENTERPRISE_BOUNDARY": 34, "attributes": 35, "SYSTEM_BOUNDARY": 36, "BOUNDARY": 37, "CONTAINER_BOUNDARY": 38, "NODE": 39, "NODE_L": 40, "NODE_R": 41, "RBRACE": 42, "diagramStatement": 43, "PERSON": 44, "PERSON_EXT": 45, "SYSTEM": 46, "SYSTEM_DB": 47, "SYSTEM_QUEUE": 48, "SYSTEM_EXT": 49, "SYSTEM_EXT_DB": 50, "SYSTEM_EXT_QUEUE": 51, "CONTAINER": 52, "CONTAINER_DB": 53, "CONTAINER_QUEUE": 54, "CONTAINER_EXT": 55, "CONTAINER_EXT_DB": 56, "CONTAINER_EXT_QUEUE": 57, "COMPONENT": 58, "COMPONENT_DB": 59, "COMPONENT_QUEUE": 60, "COMPONENT_EXT": 61, "COMPONENT_EXT_DB": 62, "COMPONENT_EXT_QUEUE": 63, "REL": 64, "BIREL": 65, "REL_U": 66, "REL_D": 67, "REL_L": 68, "REL_R": 69, "REL_B": 70, "REL_INDEX": 71, "UPDATE_EL_STYLE": 72, "UPDATE_REL_STYLE": 73, "UPDATE_LAYOUT_CONFIG": 74, "attribute": 75, "STR": 76, "STR_KEY": 77, "STR_VALUE": 78, "ATTRIBUTE": 79, "ATTRIBUTE_EMPTY": 80, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 6: "direction_tb", 7: "direction_bt", 8: "direction_rl", 9: "direction_lr", 11: "C4_CONTEXT", 12: "NEWLINE", 14: "EOF", 15: "C4_CONTAINER", 16: "C4_COMPONENT", 17: "C4_DYNAMIC", 18: "C4_DEPLOYMENT", 22: "title", 23: "accDescription", 24: "acc_title", 25: "acc_title_value", 26: "acc_descr", 27: "acc_descr_value", 28: "acc_descr_multiline_value", 33: "LBRACE", 34: "ENTERPRISE_BOUNDARY", 36: "SYSTEM_BOUNDARY", 37: "BOUNDARY", 38: "CONTAINER_BOUNDARY", 39: "NODE", 40: "NODE_L", 41: "NODE_R", 42: "RBRACE", 44: "PERSON", 45: "PERSON_EXT", 46: "SYSTEM", 47: "SYSTEM_DB", 48: "SYSTEM_QUEUE", 49: "SYSTEM_EXT", 50: "SYSTEM_EXT_DB", 51: "SYSTEM_EXT_QUEUE", 52: "CONTAINER", 53: "CONTAINER_DB", 54: "CONTAINER_QUEUE", 55: "CONTAINER_EXT", 56: "CONTAINER_EXT_DB", 57: "CONTAINER_EXT_QUEUE", 58: "COMPONENT", 59: "COMPONENT_DB", 60: "COMPONENT_QUEUE", 61: "COMPONENT_EXT", 62: "COMPONENT_EXT_DB", 63: "COMPONENT_EXT_QUEUE", 64: "REL", 65: "BIREL", 66: "REL_U", 67: "REL_D", 68: "REL_L", 69: "REL_R", 70: "REL_B", 71: "REL_INDEX", 72: "UPDATE_EL_STYLE", 73: "UPDATE_REL_STYLE", 74: "UPDATE_LAYOUT_CONFIG", 76: "STR", 77: "STR_KEY", 78: "STR_VALUE", 79: "ATTRIBUTE", 80: "ATTRIBUTE_EMPTY" },
    productions_: [0, [3, 1], [3, 1], [5, 1], [5, 1], [5, 1], [5, 1], [4, 1], [10, 4], [10, 4], [10, 4], [10, 4], [10, 4], [13, 1], [13, 1], [13, 2], [19, 1], [19, 2], [19, 3], [21, 1], [21, 1], [21, 2], [21, 2], [21, 1], [29, 3], [30, 3], [30, 3], [30, 4], [32, 2], [32, 2], [32, 2], [32, 2], [32, 2], [32, 2], [32, 2], [31, 1], [20, 1], [20, 2], [20, 3], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 1], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [35, 1], [35, 2], [75, 1], [75, 2], [75, 1], [75, 1]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 3:
          yy.setDirection("TB");
          break;
        case 4:
          yy.setDirection("BT");
          break;
        case 5:
          yy.setDirection("RL");
          break;
        case 6:
          yy.setDirection("LR");
          break;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
          yy.setC4Type($$[$0 - 3]);
          break;
        case 19:
          yy.setTitle($$[$0].substring(6));
          this.$ = $$[$0].substring(6);
          break;
        case 20:
          yy.setAccDescription($$[$0].substring(15));
          this.$ = $$[$0].substring(15);
          break;
        case 21:
          this.$ = $$[$0].trim();
          yy.setTitle(this.$);
          break;
        case 22:
        case 23:
          this.$ = $$[$0].trim();
          yy.setAccDescription(this.$);
          break;
        case 28:
        case 29:
          $$[$0].splice(2, 0, "ENTERPRISE");
          yy.addPersonOrSystemBoundary(...$$[$0]);
          this.$ = $$[$0];
          break;
        case 30:
          yy.addPersonOrSystemBoundary(...$$[$0]);
          this.$ = $$[$0];
          break;
        case 31:
          $$[$0].splice(2, 0, "CONTAINER");
          yy.addContainerBoundary(...$$[$0]);
          this.$ = $$[$0];
          break;
        case 32:
          yy.addDeploymentNode("node", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 33:
          yy.addDeploymentNode("nodeL", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 34:
          yy.addDeploymentNode("nodeR", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 35:
          yy.popBoundaryParseStack();
          break;
        case 39:
          yy.addPersonOrSystem("person", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 40:
          yy.addPersonOrSystem("external_person", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 41:
          yy.addPersonOrSystem("system", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 42:
          yy.addPersonOrSystem("system_db", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 43:
          yy.addPersonOrSystem("system_queue", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 44:
          yy.addPersonOrSystem("external_system", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 45:
          yy.addPersonOrSystem("external_system_db", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 46:
          yy.addPersonOrSystem("external_system_queue", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 47:
          yy.addContainer("container", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 48:
          yy.addContainer("container_db", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 49:
          yy.addContainer("container_queue", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 50:
          yy.addContainer("external_container", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 51:
          yy.addContainer("external_container_db", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 52:
          yy.addContainer("external_container_queue", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 53:
          yy.addComponent("component", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 54:
          yy.addComponent("component_db", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 55:
          yy.addComponent("component_queue", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 56:
          yy.addComponent("external_component", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 57:
          yy.addComponent("external_component_db", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 58:
          yy.addComponent("external_component_queue", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 60:
          yy.addRel("rel", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 61:
          yy.addRel("birel", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 62:
          yy.addRel("rel_u", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 63:
          yy.addRel("rel_d", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 64:
          yy.addRel("rel_l", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 65:
          yy.addRel("rel_r", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 66:
          yy.addRel("rel_b", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 67:
          $$[$0].splice(0, 1);
          yy.addRel("rel", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 68:
          yy.updateElStyle("update_el_style", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 69:
          yy.updateRelStyle("update_rel_style", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 70:
          yy.updateLayoutConfig("update_layout_config", ...$$[$0]);
          this.$ = $$[$0];
          break;
        case 71:
          this.$ = [$$[$0]];
          break;
        case 72:
          $$[$0].unshift($$[$0 - 1]);
          this.$ = $$[$0];
          break;
        case 73:
        case 75:
          this.$ = $$[$0].trim();
          break;
        case 74:
          let kv = {};
          kv[$$[$0 - 1].trim()] = $$[$0].trim();
          this.$ = kv;
          break;
        case 76:
          this.$ = "";
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: 3, 6: [1, 5], 7: [1, 6], 8: [1, 7], 9: [1, 8], 10: 4, 11: [1, 9], 15: [1, 10], 16: [1, 11], 17: [1, 12], 18: [1, 13] }, { 1: [3] }, { 1: [2, 1] }, { 1: [2, 2] }, { 1: [2, 7] }, { 1: [2, 3] }, { 1: [2, 4] }, { 1: [2, 5] }, { 1: [2, 6] }, { 12: [1, 14] }, { 12: [1, 15] }, { 12: [1, 16] }, { 12: [1, 17] }, { 12: [1, 18] }, { 13: 19, 19: 20, 20: 21, 21: 22, 22: $V0, 23: $V1, 24: $V2, 26: $V3, 28: $V4, 29: 49, 30: 61, 32: 62, 34: $V5, 36: $V6, 37: $V7, 38: $V8, 39: $V9, 40: $Va, 41: $Vb, 43: 23, 44: $Vc, 45: $Vd, 46: $Ve, 47: $Vf, 48: $Vg, 49: $Vh, 50: $Vi, 51: $Vj, 52: $Vk, 53: $Vl, 54: $Vm, 55: $Vn, 56: $Vo, 57: $Vp, 58: $Vq, 59: $Vr, 60: $Vs, 61: $Vt, 62: $Vu, 63: $Vv, 64: $Vw, 65: $Vx, 66: $Vy, 67: $Vz, 68: $VA, 69: $VB, 70: $VC, 71: $VD, 72: $VE, 73: $VF, 74: $VG }, { 13: 70, 19: 20, 20: 21, 21: 22, 22: $V0, 23: $V1, 24: $V2, 26: $V3, 28: $V4, 29: 49, 30: 61, 32: 62, 34: $V5, 36: $V6, 37: $V7, 38: $V8, 39: $V9, 40: $Va, 41: $Vb, 43: 23, 44: $Vc, 45: $Vd, 46: $Ve, 47: $Vf, 48: $Vg, 49: $Vh, 50: $Vi, 51: $Vj, 52: $Vk, 53: $Vl, 54: $Vm, 55: $Vn, 56: $Vo, 57: $Vp, 58: $Vq, 59: $Vr, 60: $Vs, 61: $Vt, 62: $Vu, 63: $Vv, 64: $Vw, 65: $Vx, 66: $Vy, 67: $Vz, 68: $VA, 69: $VB, 70: $VC, 71: $VD, 72: $VE, 73: $VF, 74: $VG }, { 13: 71, 19: 20, 20: 21, 21: 22, 22: $V0, 23: $V1, 24: $V2, 26: $V3, 28: $V4, 29: 49, 30: 61, 32: 62, 34: $V5, 36: $V6, 37: $V7, 38: $V8, 39: $V9, 40: $Va, 41: $Vb, 43: 23, 44: $Vc, 45: $Vd, 46: $Ve, 47: $Vf, 48: $Vg, 49: $Vh, 50: $Vi, 51: $Vj, 52: $Vk, 53: $Vl, 54: $Vm, 55: $Vn, 56: $Vo, 57: $Vp, 58: $Vq, 59: $Vr, 60: $Vs, 61: $Vt, 62: $Vu, 63: $Vv, 64: $Vw, 65: $Vx, 66: $Vy, 67: $Vz, 68: $VA, 69: $VB, 70: $VC, 71: $VD, 72: $VE, 73: $VF, 74: $VG }, { 13: 72, 19: 20, 20: 21, 21: 22, 22: $V0, 23: $V1, 24: $V2, 26: $V3, 28: $V4, 29: 49, 30: 61, 32: 62, 34: $V5, 36: $V6, 37: $V7, 38: $V8, 39: $V9, 40: $Va, 41: $Vb, 43: 23, 44: $Vc, 45: $Vd, 46: $Ve, 47: $Vf, 48: $Vg, 49: $Vh, 50: $Vi, 51: $Vj, 52: $Vk, 53: $Vl, 54: $Vm, 55: $Vn, 56: $Vo, 57: $Vp, 58: $Vq, 59: $Vr, 60: $Vs, 61: $Vt, 62: $Vu, 63: $Vv, 64: $Vw, 65: $Vx, 66: $Vy, 67: $Vz, 68: $VA, 69: $VB, 70: $VC, 71: $VD, 72: $VE, 73: $VF, 74: $VG }, { 13: 73, 19: 20, 20: 21, 21: 22, 22: $V0, 23: $V1, 24: $V2, 26: $V3, 28: $V4, 29: 49, 30: 61, 32: 62, 34: $V5, 36: $V6, 37: $V7, 38: $V8, 39: $V9, 40: $Va, 41: $Vb, 43: 23, 44: $Vc, 45: $Vd, 46: $Ve, 47: $Vf, 48: $Vg, 49: $Vh, 50: $Vi, 51: $Vj, 52: $Vk, 53: $Vl, 54: $Vm, 55: $Vn, 56: $Vo, 57: $Vp, 58: $Vq, 59: $Vr, 60: $Vs, 61: $Vt, 62: $Vu, 63: $Vv, 64: $Vw, 65: $Vx, 66: $Vy, 67: $Vz, 68: $VA, 69: $VB, 70: $VC, 71: $VD, 72: $VE, 73: $VF, 74: $VG }, { 14: [1, 74] }, o($VH, [2, 13], { 43: 23, 29: 49, 30: 61, 32: 62, 20: 75, 34: $V5, 36: $V6, 37: $V7, 38: $V8, 39: $V9, 40: $Va, 41: $Vb, 44: $Vc, 45: $Vd, 46: $Ve, 47: $Vf, 48: $Vg, 49: $Vh, 50: $Vi, 51: $Vj, 52: $Vk, 53: $Vl, 54: $Vm, 55: $Vn, 56: $Vo, 57: $Vp, 58: $Vq, 59: $Vr, 60: $Vs, 61: $Vt, 62: $Vu, 63: $Vv, 64: $Vw, 65: $Vx, 66: $Vy, 67: $Vz, 68: $VA, 69: $VB, 70: $VC, 71: $VD, 72: $VE, 73: $VF, 74: $VG }), o($VH, [2, 14]), o($VI, [2, 16], { 12: [1, 76] }), o($VH, [2, 36], { 12: [1, 77] }), o($VJ, [2, 19]), o($VJ, [2, 20]), { 25: [1, 78] }, { 27: [1, 79] }, o($VJ, [2, 23]), { 35: 80, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 86, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 87, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 88, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 89, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 90, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 91, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 92, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 93, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 94, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 95, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 96, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 97, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 98, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 99, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 100, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 101, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 102, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 103, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 104, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, o($VO, [2, 59]), { 35: 105, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 106, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 107, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 108, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 109, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 110, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 111, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 112, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 113, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 114, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 115, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 20: 116, 29: 49, 30: 61, 32: 62, 34: $V5, 36: $V6, 37: $V7, 38: $V8, 39: $V9, 40: $Va, 41: $Vb, 43: 23, 44: $Vc, 45: $Vd, 46: $Ve, 47: $Vf, 48: $Vg, 49: $Vh, 50: $Vi, 51: $Vj, 52: $Vk, 53: $Vl, 54: $Vm, 55: $Vn, 56: $Vo, 57: $Vp, 58: $Vq, 59: $Vr, 60: $Vs, 61: $Vt, 62: $Vu, 63: $Vv, 64: $Vw, 65: $Vx, 66: $Vy, 67: $Vz, 68: $VA, 69: $VB, 70: $VC, 71: $VD, 72: $VE, 73: $VF, 74: $VG }, { 12: [1, 118], 33: [1, 117] }, { 35: 119, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 120, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 121, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 122, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 123, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 124, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 35: 125, 75: 81, 76: $VK, 77: $VL, 79: $VM, 80: $VN }, { 14: [1, 126] }, { 14: [1, 127] }, { 14: [1, 128] }, { 14: [1, 129] }, { 1: [2, 8] }, o($VH, [2, 15]), o($VI, [2, 17], { 21: 22, 19: 130, 22: $V0, 23: $V1, 24: $V2, 26: $V3, 28: $V4 }), o($VH, [2, 37], { 19: 20, 20: 21, 21: 22, 43: 23, 29: 49, 30: 61, 32: 62, 13: 131, 22: $V0, 23: $V1, 24: $V2, 26: $V3, 28: $V4, 34: $V5, 36: $V6, 37: $V7, 38: $V8, 39: $V9, 40: $Va, 41: $Vb, 44: $Vc, 45: $Vd, 46: $Ve, 47: $Vf, 48: $Vg, 49: $Vh, 50: $Vi, 51: $Vj, 52: $Vk, 53: $Vl, 54: $Vm, 55: $Vn, 56: $Vo, 57: $Vp, 58: $Vq, 59: $Vr, 60: $Vs, 61: $Vt, 62: $Vu, 63: $Vv, 64: $Vw, 65: $Vx, 66: $Vy, 67: $Vz, 68: $VA, 69: $VB, 70: $VC, 71: $VD, 72: $VE, 73: $VF, 74: $VG }), o($VJ, [2, 21]), o($VJ, [2, 22]), o($VO, [2, 39]), o($VP, [2, 71], { 75: 81, 35: 132, 76: $VK, 77: $VL, 79: $VM, 80: $VN }), o($VQ, [2, 73]), { 78: [1, 133] }, o($VQ, [2, 75]), o($VQ, [2, 76]), o($VO, [2, 40]), o($VO, [2, 41]), o($VO, [2, 42]), o($VO, [2, 43]), o($VO, [2, 44]), o($VO, [2, 45]), o($VO, [2, 46]), o($VO, [2, 47]), o($VO, [2, 48]), o($VO, [2, 49]), o($VO, [2, 50]), o($VO, [2, 51]), o($VO, [2, 52]), o($VO, [2, 53]), o($VO, [2, 54]), o($VO, [2, 55]), o($VO, [2, 56]), o($VO, [2, 57]), o($VO, [2, 58]), o($VO, [2, 60]), o($VO, [2, 61]), o($VO, [2, 62]), o($VO, [2, 63]), o($VO, [2, 64]), o($VO, [2, 65]), o($VO, [2, 66]), o($VO, [2, 67]), o($VO, [2, 68]), o($VO, [2, 69]), o($VO, [2, 70]), { 31: 134, 42: [1, 135] }, { 12: [1, 136] }, { 33: [1, 137] }, o($VR, [2, 28]), o($VR, [2, 29]), o($VR, [2, 30]), o($VR, [2, 31]), o($VR, [2, 32]), o($VR, [2, 33]), o($VR, [2, 34]), { 1: [2, 9] }, { 1: [2, 10] }, { 1: [2, 11] }, { 1: [2, 12] }, o($VI, [2, 18]), o($VH, [2, 38]), o($VP, [2, 72]), o($VQ, [2, 74]), o($VO, [2, 24]), o($VO, [2, 35]), o($VS, [2, 25]), o($VS, [2, 26], { 12: [1, 138] }), o($VS, [2, 27])],
    defaultActions: { 2: [2, 1], 3: [2, 2], 4: [2, 7], 5: [2, 3], 6: [2, 4], 7: [2, 5], 8: [2, 6], 74: [2, 8], 126: [2, 9], 127: [2, 10], 128: [2, 11], 129: [2, 12] },
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
        var c2 = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c2 + "^";
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
      options: {},
      performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
        switch ($avoiding_name_collisions) {
          case 0:
            return 6;
          case 1:
            return 7;
          case 2:
            return 8;
          case 3:
            return 9;
          case 4:
            return 22;
          case 5:
            return 23;
          case 6:
            this.begin("acc_title");
            return 24;
          case 7:
            this.popState();
            return "acc_title_value";
          case 8:
            this.begin("acc_descr");
            return 26;
          case 9:
            this.popState();
            return "acc_descr_value";
          case 10:
            this.begin("acc_descr_multiline");
            break;
          case 11:
            this.popState();
            break;
          case 12:
            return "acc_descr_multiline_value";
          case 13:
            break;
          case 14:
            c;
            break;
          case 15:
            return 12;
          case 16:
            break;
          case 17:
            return 11;
          case 18:
            return 15;
          case 19:
            return 16;
          case 20:
            return 17;
          case 21:
            return 18;
          case 22:
            this.begin("person_ext");
            return 45;
          case 23:
            this.begin("person");
            return 44;
          case 24:
            this.begin("system_ext_queue");
            return 51;
          case 25:
            this.begin("system_ext_db");
            return 50;
          case 26:
            this.begin("system_ext");
            return 49;
          case 27:
            this.begin("system_queue");
            return 48;
          case 28:
            this.begin("system_db");
            return 47;
          case 29:
            this.begin("system");
            return 46;
          case 30:
            this.begin("boundary");
            return 37;
          case 31:
            this.begin("enterprise_boundary");
            return 34;
          case 32:
            this.begin("system_boundary");
            return 36;
          case 33:
            this.begin("container_ext_queue");
            return 57;
          case 34:
            this.begin("container_ext_db");
            return 56;
          case 35:
            this.begin("container_ext");
            return 55;
          case 36:
            this.begin("container_queue");
            return 54;
          case 37:
            this.begin("container_db");
            return 53;
          case 38:
            this.begin("container");
            return 52;
          case 39:
            this.begin("container_boundary");
            return 38;
          case 40:
            this.begin("component_ext_queue");
            return 63;
          case 41:
            this.begin("component_ext_db");
            return 62;
          case 42:
            this.begin("component_ext");
            return 61;
          case 43:
            this.begin("component_queue");
            return 60;
          case 44:
            this.begin("component_db");
            return 59;
          case 45:
            this.begin("component");
            return 58;
          case 46:
            this.begin("node");
            return 39;
          case 47:
            this.begin("node");
            return 39;
          case 48:
            this.begin("node_l");
            return 40;
          case 49:
            this.begin("node_r");
            return 41;
          case 50:
            this.begin("rel");
            return 64;
          case 51:
            this.begin("birel");
            return 65;
          case 52:
            this.begin("rel_u");
            return 66;
          case 53:
            this.begin("rel_u");
            return 66;
          case 54:
            this.begin("rel_d");
            return 67;
          case 55:
            this.begin("rel_d");
            return 67;
          case 56:
            this.begin("rel_l");
            return 68;
          case 57:
            this.begin("rel_l");
            return 68;
          case 58:
            this.begin("rel_r");
            return 69;
          case 59:
            this.begin("rel_r");
            return 69;
          case 60:
            this.begin("rel_b");
            return 70;
          case 61:
            this.begin("rel_index");
            return 71;
          case 62:
            this.begin("update_el_style");
            return 72;
          case 63:
            this.begin("update_rel_style");
            return 73;
          case 64:
            this.begin("update_layout_config");
            return 74;
          case 65:
            return "EOF_IN_STRUCT";
          case 66:
            this.begin("attribute");
            return "ATTRIBUTE_EMPTY";
          case 67:
            this.begin("attribute");
            break;
          case 68:
            this.popState();
            this.popState();
            break;
          case 69:
            return 80;
          case 70:
            break;
          case 71:
            return 80;
          case 72:
            this.begin("string");
            break;
          case 73:
            this.popState();
            break;
          case 74:
            return "STR";
          case 75:
            this.begin("string_kv");
            break;
          case 76:
            this.begin("string_kv_key");
            return "STR_KEY";
          case 77:
            this.popState();
            this.begin("string_kv_value");
            break;
          case 78:
            return "STR_VALUE";
          case 79:
            this.popState();
            this.popState();
            break;
          case 80:
            return "STR";
          case 81:
            return "LBRACE";
          case 82:
            return "RBRACE";
          case 83:
            return "SPACE";
          case 84:
            return "EOL";
          case 85:
            return 14;
        }
      },
      rules: [/^(?:.*direction\s+TB[^\n]*)/, /^(?:.*direction\s+BT[^\n]*)/, /^(?:.*direction\s+RL[^\n]*)/, /^(?:.*direction\s+LR[^\n]*)/, /^(?:title\s[^#\n;]+)/, /^(?:accDescription\s[^#\n;]+)/, /^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:%%(?!\{)*[^\n]*(\r?\n?)+)/, /^(?:%%[^\n]*(\r?\n)*)/, /^(?:\s*(\r?\n)+)/, /^(?:\s+)/, /^(?:C4Context\b)/, /^(?:C4Container\b)/, /^(?:C4Component\b)/, /^(?:C4Dynamic\b)/, /^(?:C4Deployment\b)/, /^(?:Person_Ext\b)/, /^(?:Person\b)/, /^(?:SystemQueue_Ext\b)/, /^(?:SystemDb_Ext\b)/, /^(?:System_Ext\b)/, /^(?:SystemQueue\b)/, /^(?:SystemDb\b)/, /^(?:System\b)/, /^(?:Boundary\b)/, /^(?:Enterprise_Boundary\b)/, /^(?:System_Boundary\b)/, /^(?:ContainerQueue_Ext\b)/, /^(?:ContainerDb_Ext\b)/, /^(?:Container_Ext\b)/, /^(?:ContainerQueue\b)/, /^(?:ContainerDb\b)/, /^(?:Container\b)/, /^(?:Container_Boundary\b)/, /^(?:ComponentQueue_Ext\b)/, /^(?:ComponentDb_Ext\b)/, /^(?:Component_Ext\b)/, /^(?:ComponentQueue\b)/, /^(?:ComponentDb\b)/, /^(?:Component\b)/, /^(?:Deployment_Node\b)/, /^(?:Node\b)/, /^(?:Node_L\b)/, /^(?:Node_R\b)/, /^(?:Rel\b)/, /^(?:BiRel\b)/, /^(?:Rel_Up\b)/, /^(?:Rel_U\b)/, /^(?:Rel_Down\b)/, /^(?:Rel_D\b)/, /^(?:Rel_Left\b)/, /^(?:Rel_L\b)/, /^(?:Rel_Right\b)/, /^(?:Rel_R\b)/, /^(?:Rel_Back\b)/, /^(?:RelIndex\b)/, /^(?:UpdateElementStyle\b)/, /^(?:UpdateRelStyle\b)/, /^(?:UpdateLayoutConfig\b)/, /^(?:$)/, /^(?:[(][ ]*[,])/, /^(?:[(])/, /^(?:[)])/, /^(?:,,)/, /^(?:,)/, /^(?:[ ]*["]["])/, /^(?:[ ]*["])/, /^(?:["])/, /^(?:[^"]*)/, /^(?:[ ]*[\$])/, /^(?:[^=]*)/, /^(?:[=][ ]*["])/, /^(?:[^"]+)/, /^(?:["])/, /^(?:[^,]+)/, /^(?:\{)/, /^(?:\})/, /^(?:[\s]+)/, /^(?:[\n\r]+)/, /^(?:$)/],
      conditions: { "acc_descr_multiline": { "rules": [11, 12], "inclusive": false }, "acc_descr": { "rules": [9], "inclusive": false }, "acc_title": { "rules": [7], "inclusive": false }, "string_kv_value": { "rules": [78, 79], "inclusive": false }, "string_kv_key": { "rules": [77], "inclusive": false }, "string_kv": { "rules": [76], "inclusive": false }, "string": { "rules": [73, 74], "inclusive": false }, "attribute": { "rules": [68, 69, 70, 71, 72, 75, 80], "inclusive": false }, "update_layout_config": { "rules": [65, 66, 67, 68], "inclusive": false }, "update_rel_style": { "rules": [65, 66, 67, 68], "inclusive": false }, "update_el_style": { "rules": [65, 66, 67, 68], "inclusive": false }, "rel_b": { "rules": [65, 66, 67, 68], "inclusive": false }, "rel_r": { "rules": [65, 66, 67, 68], "inclusive": false }, "rel_l": { "rules": [65, 66, 67, 68], "inclusive": false }, "rel_d": { "rules": [65, 66, 67, 68], "inclusive": false }, "rel_u": { "rules": [65, 66, 67, 68], "inclusive": false }, "rel_bi": { "rules": [], "inclusive": false }, "rel": { "rules": [65, 66, 67, 68], "inclusive": false }, "node_r": { "rules": [65, 66, 67, 68], "inclusive": false }, "node_l": { "rules": [65, 66, 67, 68], "inclusive": false }, "node": { "rules": [65, 66, 67, 68], "inclusive": false }, "index": { "rules": [], "inclusive": false }, "rel_index": { "rules": [65, 66, 67, 68], "inclusive": false }, "component_ext_queue": { "rules": [], "inclusive": false }, "component_ext_db": { "rules": [65, 66, 67, 68], "inclusive": false }, "component_ext": { "rules": [65, 66, 67, 68], "inclusive": false }, "component_queue": { "rules": [65, 66, 67, 68], "inclusive": false }, "component_db": { "rules": [65, 66, 67, 68], "inclusive": false }, "component": { "rules": [65, 66, 67, 68], "inclusive": false }, "container_boundary": { "rules": [65, 66, 67, 68], "inclusive": false }, "container_ext_queue": { "rules": [65, 66, 67, 68], "inclusive": false }, "container_ext_db": { "rules": [65, 66, 67, 68], "inclusive": false }, "container_ext": { "rules": [65, 66, 67, 68], "inclusive": false }, "container_queue": { "rules": [65, 66, 67, 68], "inclusive": false }, "container_db": { "rules": [65, 66, 67, 68], "inclusive": false }, "container": { "rules": [65, 66, 67, 68], "inclusive": false }, "birel": { "rules": [65, 66, 67, 68], "inclusive": false }, "system_boundary": { "rules": [65, 66, 67, 68], "inclusive": false }, "enterprise_boundary": { "rules": [65, 66, 67, 68], "inclusive": false }, "boundary": { "rules": [65, 66, 67, 68], "inclusive": false }, "system_ext_queue": { "rules": [65, 66, 67, 68], "inclusive": false }, "system_ext_db": { "rules": [65, 66, 67, 68], "inclusive": false }, "system_ext": { "rules": [65, 66, 67, 68], "inclusive": false }, "system_queue": { "rules": [65, 66, 67, 68], "inclusive": false }, "system_db": { "rules": [65, 66, 67, 68], "inclusive": false }, "system": { "rules": [65, 66, 67, 68], "inclusive": false }, "person_ext": { "rules": [65, 66, 67, 68], "inclusive": false }, "person": { "rules": [65, 66, 67, 68], "inclusive": false }, "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 81, 82, 83, 84, 85], "inclusive": true } }
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
let c4ShapeArray = [];
let boundaryParseStack = [""];
let currentBoundaryParse = "global";
let parentBoundaryParse = "";
let boundaries = [
  {
    alias: "global",
    label: { text: "global" },
    type: { text: "global" },
    tags: null,
    link: null,
    parentBoundary: ""
  }
];
let rels = [];
let title = "";
let wrapEnabled = false;
let c4ShapeInRow$1 = 4;
let c4BoundaryInRow$1 = 2;
var c4Type;
const getC4Type = function() {
  return c4Type;
};
const setC4Type = function(c4TypeParam) {
  let sanitizedText = index.sanitizeText$2(c4TypeParam, index.getConfig());
  c4Type = sanitizedText;
};
const addRel = function(type, from, to, label, techn, descr, sprite, tags, link) {
  if (type === void 0 || type === null || from === void 0 || from === null || to === void 0 || to === null || label === void 0 || label === null) {
    return;
  }
  let rel = {};
  const old = rels.find((rel2) => rel2.from === from && rel2.to === to);
  if (old) {
    rel = old;
  } else {
    rels.push(rel);
  }
  rel.type = type;
  rel.from = from;
  rel.to = to;
  rel.label = { text: label };
  if (techn === void 0 || techn === null) {
    rel.techn = { text: "" };
  } else {
    if (typeof techn === "object") {
      let [key, value] = Object.entries(techn)[0];
      rel[key] = { text: value };
    } else {
      rel.techn = { text: techn };
    }
  }
  if (descr === void 0 || descr === null) {
    rel.descr = { text: "" };
  } else {
    if (typeof descr === "object") {
      let [key, value] = Object.entries(descr)[0];
      rel[key] = { text: value };
    } else {
      rel.descr = { text: descr };
    }
  }
  if (typeof sprite === "object") {
    let [key, value] = Object.entries(sprite)[0];
    rel[key] = value;
  } else {
    rel.sprite = sprite;
  }
  if (typeof tags === "object") {
    let [key, value] = Object.entries(tags)[0];
    rel[key] = value;
  } else {
    rel.tags = tags;
  }
  if (typeof link === "object") {
    let [key, value] = Object.entries(link)[0];
    rel[key] = value;
  } else {
    rel.link = link;
  }
  rel.wrap = autoWrap();
};
const addPersonOrSystem = function(typeC4Shape, alias, label, descr, sprite, tags, link) {
  if (alias === null || label === null) {
    return;
  }
  let personOrSystem = {};
  const old = c4ShapeArray.find((personOrSystem2) => personOrSystem2.alias === alias);
  if (old && alias === old.alias) {
    personOrSystem = old;
  } else {
    personOrSystem.alias = alias;
    c4ShapeArray.push(personOrSystem);
  }
  if (label === void 0 || label === null) {
    personOrSystem.label = { text: "" };
  } else {
    personOrSystem.label = { text: label };
  }
  if (descr === void 0 || descr === null) {
    personOrSystem.descr = { text: "" };
  } else {
    if (typeof descr === "object") {
      let [key, value] = Object.entries(descr)[0];
      personOrSystem[key] = { text: value };
    } else {
      personOrSystem.descr = { text: descr };
    }
  }
  if (typeof sprite === "object") {
    let [key, value] = Object.entries(sprite)[0];
    personOrSystem[key] = value;
  } else {
    personOrSystem.sprite = sprite;
  }
  if (typeof tags === "object") {
    let [key, value] = Object.entries(tags)[0];
    personOrSystem[key] = value;
  } else {
    personOrSystem.tags = tags;
  }
  if (typeof link === "object") {
    let [key, value] = Object.entries(link)[0];
    personOrSystem[key] = value;
  } else {
    personOrSystem.link = link;
  }
  personOrSystem.typeC4Shape = { text: typeC4Shape };
  personOrSystem.parentBoundary = currentBoundaryParse;
  personOrSystem.wrap = autoWrap();
};
const addContainer = function(typeC4Shape, alias, label, techn, descr, sprite, tags, link) {
  if (alias === null || label === null) {
    return;
  }
  let container = {};
  const old = c4ShapeArray.find((container2) => container2.alias === alias);
  if (old && alias === old.alias) {
    container = old;
  } else {
    container.alias = alias;
    c4ShapeArray.push(container);
  }
  if (label === void 0 || label === null) {
    container.label = { text: "" };
  } else {
    container.label = { text: label };
  }
  if (techn === void 0 || techn === null) {
    container.techn = { text: "" };
  } else {
    if (typeof techn === "object") {
      let [key, value] = Object.entries(techn)[0];
      container[key] = { text: value };
    } else {
      container.techn = { text: techn };
    }
  }
  if (descr === void 0 || descr === null) {
    container.descr = { text: "" };
  } else {
    if (typeof descr === "object") {
      let [key, value] = Object.entries(descr)[0];
      container[key] = { text: value };
    } else {
      container.descr = { text: descr };
    }
  }
  if (typeof sprite === "object") {
    let [key, value] = Object.entries(sprite)[0];
    container[key] = value;
  } else {
    container.sprite = sprite;
  }
  if (typeof tags === "object") {
    let [key, value] = Object.entries(tags)[0];
    container[key] = value;
  } else {
    container.tags = tags;
  }
  if (typeof link === "object") {
    let [key, value] = Object.entries(link)[0];
    container[key] = value;
  } else {
    container.link = link;
  }
  container.wrap = autoWrap();
  container.typeC4Shape = { text: typeC4Shape };
  container.parentBoundary = currentBoundaryParse;
};
const addComponent = function(typeC4Shape, alias, label, techn, descr, sprite, tags, link) {
  if (alias === null || label === null) {
    return;
  }
  let component = {};
  const old = c4ShapeArray.find((component2) => component2.alias === alias);
  if (old && alias === old.alias) {
    component = old;
  } else {
    component.alias = alias;
    c4ShapeArray.push(component);
  }
  if (label === void 0 || label === null) {
    component.label = { text: "" };
  } else {
    component.label = { text: label };
  }
  if (techn === void 0 || techn === null) {
    component.techn = { text: "" };
  } else {
    if (typeof techn === "object") {
      let [key, value] = Object.entries(techn)[0];
      component[key] = { text: value };
    } else {
      component.techn = { text: techn };
    }
  }
  if (descr === void 0 || descr === null) {
    component.descr = { text: "" };
  } else {
    if (typeof descr === "object") {
      let [key, value] = Object.entries(descr)[0];
      component[key] = { text: value };
    } else {
      component.descr = { text: descr };
    }
  }
  if (typeof sprite === "object") {
    let [key, value] = Object.entries(sprite)[0];
    component[key] = value;
  } else {
    component.sprite = sprite;
  }
  if (typeof tags === "object") {
    let [key, value] = Object.entries(tags)[0];
    component[key] = value;
  } else {
    component.tags = tags;
  }
  if (typeof link === "object") {
    let [key, value] = Object.entries(link)[0];
    component[key] = value;
  } else {
    component.link = link;
  }
  component.wrap = autoWrap();
  component.typeC4Shape = { text: typeC4Shape };
  component.parentBoundary = currentBoundaryParse;
};
const addPersonOrSystemBoundary = function(alias, label, type, tags, link) {
  if (alias === null || label === null) {
    return;
  }
  let boundary = {};
  const old = boundaries.find((boundary2) => boundary2.alias === alias);
  if (old && alias === old.alias) {
    boundary = old;
  } else {
    boundary.alias = alias;
    boundaries.push(boundary);
  }
  if (label === void 0 || label === null) {
    boundary.label = { text: "" };
  } else {
    boundary.label = { text: label };
  }
  if (type === void 0 || type === null) {
    boundary.type = { text: "system" };
  } else {
    if (typeof type === "object") {
      let [key, value] = Object.entries(type)[0];
      boundary[key] = { text: value };
    } else {
      boundary.type = { text: type };
    }
  }
  if (typeof tags === "object") {
    let [key, value] = Object.entries(tags)[0];
    boundary[key] = value;
  } else {
    boundary.tags = tags;
  }
  if (typeof link === "object") {
    let [key, value] = Object.entries(link)[0];
    boundary[key] = value;
  } else {
    boundary.link = link;
  }
  boundary.parentBoundary = currentBoundaryParse;
  boundary.wrap = autoWrap();
  parentBoundaryParse = currentBoundaryParse;
  currentBoundaryParse = alias;
  boundaryParseStack.push(parentBoundaryParse);
};
const addContainerBoundary = function(alias, label, type, tags, link) {
  if (alias === null || label === null) {
    return;
  }
  let boundary = {};
  const old = boundaries.find((boundary2) => boundary2.alias === alias);
  if (old && alias === old.alias) {
    boundary = old;
  } else {
    boundary.alias = alias;
    boundaries.push(boundary);
  }
  if (label === void 0 || label === null) {
    boundary.label = { text: "" };
  } else {
    boundary.label = { text: label };
  }
  if (type === void 0 || type === null) {
    boundary.type = { text: "container" };
  } else {
    if (typeof type === "object") {
      let [key, value] = Object.entries(type)[0];
      boundary[key] = { text: value };
    } else {
      boundary.type = { text: type };
    }
  }
  if (typeof tags === "object") {
    let [key, value] = Object.entries(tags)[0];
    boundary[key] = value;
  } else {
    boundary.tags = tags;
  }
  if (typeof link === "object") {
    let [key, value] = Object.entries(link)[0];
    boundary[key] = value;
  } else {
    boundary.link = link;
  }
  boundary.parentBoundary = currentBoundaryParse;
  boundary.wrap = autoWrap();
  parentBoundaryParse = currentBoundaryParse;
  currentBoundaryParse = alias;
  boundaryParseStack.push(parentBoundaryParse);
};
const addDeploymentNode = function(nodeType, alias, label, type, descr, sprite, tags, link) {
  if (alias === null || label === null) {
    return;
  }
  let boundary = {};
  const old = boundaries.find((boundary2) => boundary2.alias === alias);
  if (old && alias === old.alias) {
    boundary = old;
  } else {
    boundary.alias = alias;
    boundaries.push(boundary);
  }
  if (label === void 0 || label === null) {
    boundary.label = { text: "" };
  } else {
    boundary.label = { text: label };
  }
  if (type === void 0 || type === null) {
    boundary.type = { text: "node" };
  } else {
    if (typeof type === "object") {
      let [key, value] = Object.entries(type)[0];
      boundary[key] = { text: value };
    } else {
      boundary.type = { text: type };
    }
  }
  if (descr === void 0 || descr === null) {
    boundary.descr = { text: "" };
  } else {
    if (typeof descr === "object") {
      let [key, value] = Object.entries(descr)[0];
      boundary[key] = { text: value };
    } else {
      boundary.descr = { text: descr };
    }
  }
  if (typeof tags === "object") {
    let [key, value] = Object.entries(tags)[0];
    boundary[key] = value;
  } else {
    boundary.tags = tags;
  }
  if (typeof link === "object") {
    let [key, value] = Object.entries(link)[0];
    boundary[key] = value;
  } else {
    boundary.link = link;
  }
  boundary.nodeType = nodeType;
  boundary.parentBoundary = currentBoundaryParse;
  boundary.wrap = autoWrap();
  parentBoundaryParse = currentBoundaryParse;
  currentBoundaryParse = alias;
  boundaryParseStack.push(parentBoundaryParse);
};
const popBoundaryParseStack = function() {
  currentBoundaryParse = parentBoundaryParse;
  boundaryParseStack.pop();
  parentBoundaryParse = boundaryParseStack.pop();
  boundaryParseStack.push(parentBoundaryParse);
};
const updateElStyle = function(typeC4Shape, elementName, bgColor, fontColor, borderColor, shadowing, shape, sprite, techn, legendText, legendSprite) {
  let old = c4ShapeArray.find((element) => element.alias === elementName);
  if (old === void 0) {
    old = boundaries.find((element) => element.alias === elementName);
    if (old === void 0) {
      return;
    }
  }
  if (bgColor !== void 0 && bgColor !== null) {
    if (typeof bgColor === "object") {
      let [key, value] = Object.entries(bgColor)[0];
      old[key] = value;
    } else {
      old.bgColor = bgColor;
    }
  }
  if (fontColor !== void 0 && fontColor !== null) {
    if (typeof fontColor === "object") {
      let [key, value] = Object.entries(fontColor)[0];
      old[key] = value;
    } else {
      old.fontColor = fontColor;
    }
  }
  if (borderColor !== void 0 && borderColor !== null) {
    if (typeof borderColor === "object") {
      let [key, value] = Object.entries(borderColor)[0];
      old[key] = value;
    } else {
      old.borderColor = borderColor;
    }
  }
  if (shadowing !== void 0 && shadowing !== null) {
    if (typeof shadowing === "object") {
      let [key, value] = Object.entries(shadowing)[0];
      old[key] = value;
    } else {
      old.shadowing = shadowing;
    }
  }
  if (shape !== void 0 && shape !== null) {
    if (typeof shape === "object") {
      let [key, value] = Object.entries(shape)[0];
      old[key] = value;
    } else {
      old.shape = shape;
    }
  }
  if (sprite !== void 0 && sprite !== null) {
    if (typeof sprite === "object") {
      let [key, value] = Object.entries(sprite)[0];
      old[key] = value;
    } else {
      old.sprite = sprite;
    }
  }
  if (techn !== void 0 && techn !== null) {
    if (typeof techn === "object") {
      let [key, value] = Object.entries(techn)[0];
      old[key] = value;
    } else {
      old.techn = techn;
    }
  }
  if (legendText !== void 0 && legendText !== null) {
    if (typeof legendText === "object") {
      let [key, value] = Object.entries(legendText)[0];
      old[key] = value;
    } else {
      old.legendText = legendText;
    }
  }
  if (legendSprite !== void 0 && legendSprite !== null) {
    if (typeof legendSprite === "object") {
      let [key, value] = Object.entries(legendSprite)[0];
      old[key] = value;
    } else {
      old.legendSprite = legendSprite;
    }
  }
};
const updateRelStyle = function(typeC4Shape, from, to, textColor, lineColor, offsetX, offsetY) {
  const old = rels.find((rel) => rel.from === from && rel.to === to);
  if (old === void 0) {
    return;
  }
  if (textColor !== void 0 && textColor !== null) {
    if (typeof textColor === "object") {
      let [key, value] = Object.entries(textColor)[0];
      old[key] = value;
    } else {
      old.textColor = textColor;
    }
  }
  if (lineColor !== void 0 && lineColor !== null) {
    if (typeof lineColor === "object") {
      let [key, value] = Object.entries(lineColor)[0];
      old[key] = value;
    } else {
      old.lineColor = lineColor;
    }
  }
  if (offsetX !== void 0 && offsetX !== null) {
    if (typeof offsetX === "object") {
      let [key, value] = Object.entries(offsetX)[0];
      old[key] = parseInt(value);
    } else {
      old.offsetX = parseInt(offsetX);
    }
  }
  if (offsetY !== void 0 && offsetY !== null) {
    if (typeof offsetY === "object") {
      let [key, value] = Object.entries(offsetY)[0];
      old[key] = parseInt(value);
    } else {
      old.offsetY = parseInt(offsetY);
    }
  }
};
const updateLayoutConfig = function(typeC4Shape, c4ShapeInRowParam, c4BoundaryInRowParam) {
  let c4ShapeInRowValue = c4ShapeInRow$1;
  let c4BoundaryInRowValue = c4BoundaryInRow$1;
  if (typeof c4ShapeInRowParam === "object") {
    const value = Object.values(c4ShapeInRowParam)[0];
    c4ShapeInRowValue = parseInt(value);
  } else {
    c4ShapeInRowValue = parseInt(c4ShapeInRowParam);
  }
  if (typeof c4BoundaryInRowParam === "object") {
    const value = Object.values(c4BoundaryInRowParam)[0];
    c4BoundaryInRowValue = parseInt(value);
  } else {
    c4BoundaryInRowValue = parseInt(c4BoundaryInRowParam);
  }
  if (c4ShapeInRowValue >= 1) {
    c4ShapeInRow$1 = c4ShapeInRowValue;
  }
  if (c4BoundaryInRowValue >= 1) {
    c4BoundaryInRow$1 = c4BoundaryInRowValue;
  }
};
const getC4ShapeInRow = function() {
  return c4ShapeInRow$1;
};
const getC4BoundaryInRow = function() {
  return c4BoundaryInRow$1;
};
const getCurrentBoundaryParse = function() {
  return currentBoundaryParse;
};
const getParentBoundaryParse = function() {
  return parentBoundaryParse;
};
const getC4ShapeArray = function(parentBoundary) {
  if (parentBoundary === void 0 || parentBoundary === null) {
    return c4ShapeArray;
  } else {
    return c4ShapeArray.filter((personOrSystem) => {
      return personOrSystem.parentBoundary === parentBoundary;
    });
  }
};
const getC4Shape = function(alias) {
  return c4ShapeArray.find((personOrSystem) => personOrSystem.alias === alias);
};
const getC4ShapeKeys = function(parentBoundary) {
  return Object.keys(getC4ShapeArray(parentBoundary));
};
const getBoundaries = function(parentBoundary) {
  if (parentBoundary === void 0 || parentBoundary === null) {
    return boundaries;
  } else {
    return boundaries.filter((boundary) => boundary.parentBoundary === parentBoundary);
  }
};
const getBoundarys = getBoundaries;
const getRels = function() {
  return rels;
};
const getTitle = function() {
  return title;
};
const setWrap = function(wrapSetting) {
  wrapEnabled = wrapSetting;
};
const autoWrap = function() {
  return wrapEnabled;
};
const clear = function() {
  c4ShapeArray = [];
  boundaries = [
    {
      alias: "global",
      label: { text: "global" },
      type: { text: "global" },
      tags: null,
      link: null,
      parentBoundary: ""
    }
  ];
  parentBoundaryParse = "";
  currentBoundaryParse = "global";
  boundaryParseStack = [""];
  rels = [];
  boundaryParseStack = [""];
  title = "";
  wrapEnabled = false;
  c4ShapeInRow$1 = 4;
  c4BoundaryInRow$1 = 2;
};
const LINETYPE = {
  SOLID: 0,
  DOTTED: 1,
  NOTE: 2,
  SOLID_CROSS: 3,
  DOTTED_CROSS: 4,
  SOLID_OPEN: 5,
  DOTTED_OPEN: 6,
  LOOP_START: 10,
  LOOP_END: 11,
  ALT_START: 12,
  ALT_ELSE: 13,
  ALT_END: 14,
  OPT_START: 15,
  OPT_END: 16,
  ACTIVE_START: 17,
  ACTIVE_END: 18,
  PAR_START: 19,
  PAR_AND: 20,
  PAR_END: 21,
  RECT_START: 22,
  RECT_END: 23,
  SOLID_POINT: 24,
  DOTTED_POINT: 25
};
const ARROWTYPE = {
  FILLED: 0,
  OPEN: 1
};
const PLACEMENT = {
  LEFTOF: 0,
  RIGHTOF: 1,
  OVER: 2
};
const setTitle = function(txt) {
  let sanitizedText = index.sanitizeText$2(txt, index.getConfig());
  title = sanitizedText;
};
const db = {
  addPersonOrSystem,
  addPersonOrSystemBoundary,
  addContainer,
  addContainerBoundary,
  addComponent,
  addDeploymentNode,
  popBoundaryParseStack,
  addRel,
  updateElStyle,
  updateRelStyle,
  updateLayoutConfig,
  autoWrap,
  setWrap,
  getC4ShapeArray,
  getC4Shape,
  getC4ShapeKeys,
  getBoundaries,
  getBoundarys,
  getCurrentBoundaryParse,
  getParentBoundaryParse,
  getRels,
  getTitle,
  getC4Type,
  getC4ShapeInRow,
  getC4BoundaryInRow,
  setAccTitle: index.setAccTitle,
  getAccTitle: index.getAccTitle,
  getAccDescription: index.getAccDescription,
  setAccDescription: index.setAccDescription,
  getConfig: () => index.getConfig().c4,
  clear,
  LINETYPE,
  ARROWTYPE,
  PLACEMENT,
  setTitle,
  setC4Type
  // apply,
};
const drawRect = function(elem, rectData) {
  return svgDrawCommon08f97a94.drawRect(elem, rectData);
};
const drawImage = function(elem, width, height, x, y, link) {
  const imageElem = elem.append("image");
  imageElem.attr("width", width);
  imageElem.attr("height", height);
  imageElem.attr("x", x);
  imageElem.attr("y", y);
  let sanitizedLink = link.startsWith("data:image/png;base64") ? link : main.distExports.sanitizeUrl(link);
  imageElem.attr("xlink:href", sanitizedLink);
};
const drawRels$1 = (elem, rels2, conf2) => {
  const relsElem = elem.append("g");
  let i = 0;
  for (let rel of rels2) {
    let textColor = rel.textColor ? rel.textColor : "#444444";
    let strokeColor = rel.lineColor ? rel.lineColor : "#444444";
    let offsetX = rel.offsetX ? parseInt(rel.offsetX) : 0;
    let offsetY = rel.offsetY ? parseInt(rel.offsetY) : 0;
    let url = "";
    if (i === 0) {
      let line = relsElem.append("line");
      line.attr("x1", rel.startPoint.x);
      line.attr("y1", rel.startPoint.y);
      line.attr("x2", rel.endPoint.x);
      line.attr("y2", rel.endPoint.y);
      line.attr("stroke-width", "1");
      line.attr("stroke", strokeColor);
      line.style("fill", "none");
      if (rel.type !== "rel_b") {
        line.attr("marker-end", "url(" + url + "#arrowhead)");
      }
      if (rel.type === "birel" || rel.type === "rel_b") {
        line.attr("marker-start", "url(" + url + "#arrowend)");
      }
      i = -1;
    } else {
      let line = relsElem.append("path");
      line.attr("fill", "none").attr("stroke-width", "1").attr("stroke", strokeColor).attr(
        "d",
        "Mstartx,starty Qcontrolx,controly stopx,stopy ".replaceAll("startx", rel.startPoint.x).replaceAll("starty", rel.startPoint.y).replaceAll(
          "controlx",
          rel.startPoint.x + (rel.endPoint.x - rel.startPoint.x) / 2 - (rel.endPoint.x - rel.startPoint.x) / 4
        ).replaceAll("controly", rel.startPoint.y + (rel.endPoint.y - rel.startPoint.y) / 2).replaceAll("stopx", rel.endPoint.x).replaceAll("stopy", rel.endPoint.y)
      );
      if (rel.type !== "rel_b") {
        line.attr("marker-end", "url(" + url + "#arrowhead)");
      }
      if (rel.type === "birel" || rel.type === "rel_b") {
        line.attr("marker-start", "url(" + url + "#arrowend)");
      }
    }
    let messageConf = conf2.messageFont();
    _drawTextCandidateFunc(conf2)(
      rel.label.text,
      relsElem,
      Math.min(rel.startPoint.x, rel.endPoint.x) + Math.abs(rel.endPoint.x - rel.startPoint.x) / 2 + offsetX,
      Math.min(rel.startPoint.y, rel.endPoint.y) + Math.abs(rel.endPoint.y - rel.startPoint.y) / 2 + offsetY,
      rel.label.width,
      rel.label.height,
      { fill: textColor },
      messageConf
    );
    if (rel.techn && rel.techn.text !== "") {
      messageConf = conf2.messageFont();
      _drawTextCandidateFunc(conf2)(
        "[" + rel.techn.text + "]",
        relsElem,
        Math.min(rel.startPoint.x, rel.endPoint.x) + Math.abs(rel.endPoint.x - rel.startPoint.x) / 2 + offsetX,
        Math.min(rel.startPoint.y, rel.endPoint.y) + Math.abs(rel.endPoint.y - rel.startPoint.y) / 2 + conf2.messageFontSize + 5 + offsetY,
        Math.max(rel.label.width, rel.techn.width),
        rel.techn.height,
        { fill: textColor, "font-style": "italic" },
        messageConf
      );
    }
  }
};
const drawBoundary$1 = function(elem, boundary, conf2) {
  const boundaryElem = elem.append("g");
  let fillColor = boundary.bgColor ? boundary.bgColor : "none";
  let strokeColor = boundary.borderColor ? boundary.borderColor : "#444444";
  let fontColor = boundary.fontColor ? boundary.fontColor : "black";
  let attrsValue = { "stroke-width": 1, "stroke-dasharray": "7.0,7.0" };
  if (boundary.nodeType) {
    attrsValue = { "stroke-width": 1 };
  }
  let rectData = {
    x: boundary.x,
    y: boundary.y,
    fill: fillColor,
    stroke: strokeColor,
    width: boundary.width,
    height: boundary.height,
    rx: 2.5,
    ry: 2.5,
    attrs: attrsValue
  };
  drawRect(boundaryElem, rectData);
  let boundaryConf = conf2.boundaryFont();
  boundaryConf.fontWeight = "bold";
  boundaryConf.fontSize = boundaryConf.fontSize + 2;
  boundaryConf.fontColor = fontColor;
  _drawTextCandidateFunc(conf2)(
    boundary.label.text,
    boundaryElem,
    boundary.x,
    boundary.y + boundary.label.Y,
    boundary.width,
    boundary.height,
    { fill: "#444444" },
    boundaryConf
  );
  if (boundary.type && boundary.type.text !== "") {
    boundaryConf = conf2.boundaryFont();
    boundaryConf.fontColor = fontColor;
    _drawTextCandidateFunc(conf2)(
      boundary.type.text,
      boundaryElem,
      boundary.x,
      boundary.y + boundary.type.Y,
      boundary.width,
      boundary.height,
      { fill: "#444444" },
      boundaryConf
    );
  }
  if (boundary.descr && boundary.descr.text !== "") {
    boundaryConf = conf2.boundaryFont();
    boundaryConf.fontSize = boundaryConf.fontSize - 2;
    boundaryConf.fontColor = fontColor;
    _drawTextCandidateFunc(conf2)(
      boundary.descr.text,
      boundaryElem,
      boundary.x,
      boundary.y + boundary.descr.Y,
      boundary.width,
      boundary.height,
      { fill: "#444444" },
      boundaryConf
    );
  }
};
const drawC4Shape = function(elem, c4Shape, conf2) {
  var _a;
  let fillColor = c4Shape.bgColor ? c4Shape.bgColor : conf2[c4Shape.typeC4Shape.text + "_bg_color"];
  let strokeColor = c4Shape.borderColor ? c4Shape.borderColor : conf2[c4Shape.typeC4Shape.text + "_border_color"];
  let fontColor = c4Shape.fontColor ? c4Shape.fontColor : "#FFFFFF";
  let personImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAACD0lEQVR4Xu2YoU4EMRCGT+4j8Ai8AhaH4QHgAUjQuFMECUgMIUgwJAgMhgQsAYUiJCiQIBBY+EITsjfTdme6V24v4c8vyGbb+ZjOtN0bNcvjQXmkH83WvYBWto6PLm6v7p7uH1/w2fXD+PBycX1Pv2l3IdDm/vn7x+dXQiAubRzoURa7gRZWd0iGRIiJbOnhnfYBQZNJjNbuyY2eJG8fkDE3bbG4ep6MHUAsgYxmE3nVs6VsBWJSGccsOlFPmLIViMzLOB7pCVO2AtHJMohH7Fh6zqitQK7m0rJvAVYgGcEpe//PLdDz65sM4pF9N7ICcXDKIB5Nv6j7tD0NoSdM2QrU9Gg0ewE1LqBhHR3BBdvj2vapnidjHxD/q6vd7Pvhr31AwcY8eXMTXAKECZZJFXuEq27aLgQK5uLMohCenGGuGewOxSjBvYBqeG6B+Nqiblggdjnc+ZXDy+FNFpFzw76O3UBAROuXh6FoiAcf5g9eTvUgzy0nWg6I8cXHRUpg5bOVBCo+KDpFajOf23GgPme7RSQ+lacIENUgJ6gg1k6HjgOlqnLqip4tEuhv0hNEMXUD0clyXE3p6pZA0S2nnvTlXwLJEZWlb7cTQH1+USgTN4VhAenm/wea1OCAOmqo6fE1WCb9WSKBah+rbUWPWAmE2Rvk0ApiB45eOyNAzU8xcTvj8KvkKEoOaIYeHNA3ZuygAvFMUO0AAAAASUVORK5CYII=";
  switch (c4Shape.typeC4Shape.text) {
    case "person":
      personImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAACD0lEQVR4Xu2YoU4EMRCGT+4j8Ai8AhaH4QHgAUjQuFMECUgMIUgwJAgMhgQsAYUiJCiQIBBY+EITsjfTdme6V24v4c8vyGbb+ZjOtN0bNcvjQXmkH83WvYBWto6PLm6v7p7uH1/w2fXD+PBycX1Pv2l3IdDm/vn7x+dXQiAubRzoURa7gRZWd0iGRIiJbOnhnfYBQZNJjNbuyY2eJG8fkDE3bbG4ep6MHUAsgYxmE3nVs6VsBWJSGccsOlFPmLIViMzLOB7pCVO2AtHJMohH7Fh6zqitQK7m0rJvAVYgGcEpe//PLdDz65sM4pF9N7ICcXDKIB5Nv6j7tD0NoSdM2QrU9Gg0ewE1LqBhHR3BBdvj2vapnidjHxD/q6vd7Pvhr31AwcY8eXMTXAKECZZJFXuEq27aLgQK5uLMohCenGGuGewOxSjBvYBqeG6B+Nqiblggdjnc+ZXDy+FNFpFzw76O3UBAROuXh6FoiAcf5g9eTvUgzy0nWg6I8cXHRUpg5bOVBCo+KDpFajOf23GgPme7RSQ+lacIENUgJ6gg1k6HjgOlqnLqip4tEuhv0hNEMXUD0clyXE3p6pZA0S2nnvTlXwLJEZWlb7cTQH1+USgTN4VhAenm/wea1OCAOmqo6fE1WCb9WSKBah+rbUWPWAmE2Rvk0ApiB45eOyNAzU8xcTvj8KvkKEoOaIYeHNA3ZuygAvFMUO0AAAAASUVORK5CYII=";
      break;
    case "external_person":
      personImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAB6ElEQVR4Xu2YLY+EMBCG9+dWr0aj0Wg0Go1Go0+j8Xdv2uTCvv1gpt0ebHKPuhDaeW4605Z9mJvx4AdXUyTUdd08z+u6flmWZRnHsWkafk9DptAwDPu+f0eAYtu2PEaGWuj5fCIZrBAC2eLBAnRCsEkkxmeaJp7iDJ2QMDdHsLg8SxKFEJaAo8lAXnmuOFIhTMpxxKATebo4UiFknuNo4OniSIXQyRxEA3YsnjGCVEjVXD7yLUAqxBGUyPv/Y4W2beMgGuS7kVQIBycH0fD+oi5pezQETxdHKmQKGk1eQEYldK+jw5GxPfZ9z7Mk0Qnhf1W1m3w//EUn5BDmSZsbR44QQLBEqrBHqOrmSKaQAxdnLArCrxZcM7A7ZKs4ioRq8LFC+NpC3WCBJsvpVw5edm9iEXFuyNfxXAgSwfrFQ1c0iNda8AdejvUgnktOtJQQxmcfFzGglc5WVCj7oDgFqU18boeFSs52CUh8LE8BIVQDT1ABrB0HtgSEYlX5doJnCwv9TXocKCaKbnwhdDKPq4lf3SwU3HLq4V/+WYhHVMa/3b4IlfyikAduCkcBc7mQ3/z/Qq/cTuikhkzB12Ae/mcJC9U+Vo8Ej1gWAtgbeGgFsAMHr50BIWOLCbezvhpBFUdY6EJuJ/QDW0XoMX60zZ0AAAAASUVORK5CYII=";
      break;
  }
  const c4ShapeElem = elem.append("g");
  c4ShapeElem.attr("class", "person-man");
  const rect = svgDrawCommon08f97a94.getNoteRect();
  switch (c4Shape.typeC4Shape.text) {
    case "person":
    case "external_person":
    case "system":
    case "external_system":
    case "container":
    case "external_container":
    case "component":
    case "external_component":
      rect.x = c4Shape.x;
      rect.y = c4Shape.y;
      rect.fill = fillColor;
      rect.width = c4Shape.width;
      rect.height = c4Shape.height;
      rect.stroke = strokeColor;
      rect.rx = 2.5;
      rect.ry = 2.5;
      rect.attrs = { "stroke-width": 0.5 };
      drawRect(c4ShapeElem, rect);
      break;
    case "system_db":
    case "external_system_db":
    case "container_db":
    case "external_container_db":
    case "component_db":
    case "external_component_db":
      c4ShapeElem.append("path").attr("fill", fillColor).attr("stroke-width", "0.5").attr("stroke", strokeColor).attr(
        "d",
        "Mstartx,startyc0,-10 half,-10 half,-10c0,0 half,0 half,10l0,heightc0,10 -half,10 -half,10c0,0 -half,0 -half,-10l0,-height".replaceAll("startx", c4Shape.x).replaceAll("starty", c4Shape.y).replaceAll("half", c4Shape.width / 2).replaceAll("height", c4Shape.height)
      );
      c4ShapeElem.append("path").attr("fill", "none").attr("stroke-width", "0.5").attr("stroke", strokeColor).attr(
        "d",
        "Mstartx,startyc0,10 half,10 half,10c0,0 half,0 half,-10".replaceAll("startx", c4Shape.x).replaceAll("starty", c4Shape.y).replaceAll("half", c4Shape.width / 2)
      );
      break;
    case "system_queue":
    case "external_system_queue":
    case "container_queue":
    case "external_container_queue":
    case "component_queue":
    case "external_component_queue":
      c4ShapeElem.append("path").attr("fill", fillColor).attr("stroke-width", "0.5").attr("stroke", strokeColor).attr(
        "d",
        "Mstartx,startylwidth,0c5,0 5,half 5,halfc0,0 0,half -5,halfl-width,0c-5,0 -5,-half -5,-halfc0,0 0,-half 5,-half".replaceAll("startx", c4Shape.x).replaceAll("starty", c4Shape.y).replaceAll("width", c4Shape.width).replaceAll("half", c4Shape.height / 2)
      );
      c4ShapeElem.append("path").attr("fill", "none").attr("stroke-width", "0.5").attr("stroke", strokeColor).attr(
        "d",
        "Mstartx,startyc-5,0 -5,half -5,halfc0,half 5,half 5,half".replaceAll("startx", c4Shape.x + c4Shape.width).replaceAll("starty", c4Shape.y).replaceAll("half", c4Shape.height / 2)
      );
      break;
  }
  let c4ShapeFontConf = getC4ShapeFont(conf2, c4Shape.typeC4Shape.text);
  c4ShapeElem.append("text").attr("fill", fontColor).attr("font-family", c4ShapeFontConf.fontFamily).attr("font-size", c4ShapeFontConf.fontSize - 2).attr("font-style", "italic").attr("lengthAdjust", "spacing").attr("textLength", c4Shape.typeC4Shape.width).attr("x", c4Shape.x + c4Shape.width / 2 - c4Shape.typeC4Shape.width / 2).attr("y", c4Shape.y + c4Shape.typeC4Shape.Y).text("<<" + c4Shape.typeC4Shape.text + ">>");
  switch (c4Shape.typeC4Shape.text) {
    case "person":
    case "external_person":
      drawImage(
        c4ShapeElem,
        48,
        48,
        c4Shape.x + c4Shape.width / 2 - 24,
        c4Shape.y + c4Shape.image.Y,
        personImg
      );
      break;
  }
  let textFontConf = conf2[c4Shape.typeC4Shape.text + "Font"]();
  textFontConf.fontWeight = "bold";
  textFontConf.fontSize = textFontConf.fontSize + 2;
  textFontConf.fontColor = fontColor;
  _drawTextCandidateFunc(conf2)(
    c4Shape.label.text,
    c4ShapeElem,
    c4Shape.x,
    c4Shape.y + c4Shape.label.Y,
    c4Shape.width,
    c4Shape.height,
    { fill: fontColor },
    textFontConf
  );
  textFontConf = conf2[c4Shape.typeC4Shape.text + "Font"]();
  textFontConf.fontColor = fontColor;
  if (c4Shape.techn && ((_a = c4Shape.techn) == null ? void 0 : _a.text) !== "") {
    _drawTextCandidateFunc(conf2)(
      c4Shape.techn.text,
      c4ShapeElem,
      c4Shape.x,
      c4Shape.y + c4Shape.techn.Y,
      c4Shape.width,
      c4Shape.height,
      { fill: fontColor, "font-style": "italic" },
      textFontConf
    );
  } else if (c4Shape.type && c4Shape.type.text !== "") {
    _drawTextCandidateFunc(conf2)(
      c4Shape.type.text,
      c4ShapeElem,
      c4Shape.x,
      c4Shape.y + c4Shape.type.Y,
      c4Shape.width,
      c4Shape.height,
      { fill: fontColor, "font-style": "italic" },
      textFontConf
    );
  }
  if (c4Shape.descr && c4Shape.descr.text !== "") {
    textFontConf = conf2.personFont();
    textFontConf.fontColor = fontColor;
    _drawTextCandidateFunc(conf2)(
      c4Shape.descr.text,
      c4ShapeElem,
      c4Shape.x,
      c4Shape.y + c4Shape.descr.Y,
      c4Shape.width,
      c4Shape.height,
      { fill: fontColor },
      textFontConf
    );
  }
  return c4Shape.height;
};
const insertDatabaseIcon = function(elem) {
  elem.append("defs").append("symbol").attr("id", "database").attr("fill-rule", "evenodd").attr("clip-rule", "evenodd").append("path").attr("transform", "scale(.5)").attr(
    "d",
    "M12.258.001l.256.004.255.005.253.008.251.01.249.012.247.015.246.016.242.019.241.02.239.023.236.024.233.027.231.028.229.031.225.032.223.034.22.036.217.038.214.04.211.041.208.043.205.045.201.046.198.048.194.05.191.051.187.053.183.054.18.056.175.057.172.059.168.06.163.061.16.063.155.064.15.066.074.033.073.033.071.034.07.034.069.035.068.035.067.035.066.035.064.036.064.036.062.036.06.036.06.037.058.037.058.037.055.038.055.038.053.038.052.038.051.039.05.039.048.039.047.039.045.04.044.04.043.04.041.04.04.041.039.041.037.041.036.041.034.041.033.042.032.042.03.042.029.042.027.042.026.043.024.043.023.043.021.043.02.043.018.044.017.043.015.044.013.044.012.044.011.045.009.044.007.045.006.045.004.045.002.045.001.045v17l-.001.045-.002.045-.004.045-.006.045-.007.045-.009.044-.011.045-.012.044-.013.044-.015.044-.017.043-.018.044-.02.043-.021.043-.023.043-.024.043-.026.043-.027.042-.029.042-.03.042-.032.042-.033.042-.034.041-.036.041-.037.041-.039.041-.04.041-.041.04-.043.04-.044.04-.045.04-.047.039-.048.039-.05.039-.051.039-.052.038-.053.038-.055.038-.055.038-.058.037-.058.037-.06.037-.06.036-.062.036-.064.036-.064.036-.066.035-.067.035-.068.035-.069.035-.07.034-.071.034-.073.033-.074.033-.15.066-.155.064-.16.063-.163.061-.168.06-.172.059-.175.057-.18.056-.183.054-.187.053-.191.051-.194.05-.198.048-.201.046-.205.045-.208.043-.211.041-.214.04-.217.038-.22.036-.223.034-.225.032-.229.031-.231.028-.233.027-.236.024-.239.023-.241.02-.242.019-.246.016-.247.015-.249.012-.251.01-.253.008-.255.005-.256.004-.258.001-.258-.001-.256-.004-.255-.005-.253-.008-.251-.01-.249-.012-.247-.015-.245-.016-.243-.019-.241-.02-.238-.023-.236-.024-.234-.027-.231-.028-.228-.031-.226-.032-.223-.034-.22-.036-.217-.038-.214-.04-.211-.041-.208-.043-.204-.045-.201-.046-.198-.048-.195-.05-.19-.051-.187-.053-.184-.054-.179-.056-.176-.057-.172-.059-.167-.06-.164-.061-.159-.063-.155-.064-.151-.066-.074-.033-.072-.033-.072-.034-.07-.034-.069-.035-.068-.035-.067-.035-.066-.035-.064-.036-.063-.036-.062-.036-.061-.036-.06-.037-.058-.037-.057-.037-.056-.038-.055-.038-.053-.038-.052-.038-.051-.039-.049-.039-.049-.039-.046-.039-.046-.04-.044-.04-.043-.04-.041-.04-.04-.041-.039-.041-.037-.041-.036-.041-.034-.041-.033-.042-.032-.042-.03-.042-.029-.042-.027-.042-.026-.043-.024-.043-.023-.043-.021-.043-.02-.043-.018-.044-.017-.043-.015-.044-.013-.044-.012-.044-.011-.045-.009-.044-.007-.045-.006-.045-.004-.045-.002-.045-.001-.045v-17l.001-.045.002-.045.004-.045.006-.045.007-.045.009-.044.011-.045.012-.044.013-.044.015-.044.017-.043.018-.044.02-.043.021-.043.023-.043.024-.043.026-.043.027-.042.029-.042.03-.042.032-.042.033-.042.034-.041.036-.041.037-.041.039-.041.04-.041.041-.04.043-.04.044-.04.046-.04.046-.039.049-.039.049-.039.051-.039.052-.038.053-.038.055-.038.056-.038.057-.037.058-.037.06-.037.061-.036.062-.036.063-.036.064-.036.066-.035.067-.035.068-.035.069-.035.07-.034.072-.034.072-.033.074-.033.151-.066.155-.064.159-.063.164-.061.167-.06.172-.059.176-.057.179-.056.184-.054.187-.053.19-.051.195-.05.198-.048.201-.046.204-.045.208-.043.211-.041.214-.04.217-.038.22-.036.223-.034.226-.032.228-.031.231-.028.234-.027.236-.024.238-.023.241-.02.243-.019.245-.016.247-.015.249-.012.251-.01.253-.008.255-.005.256-.004.258-.001.258.001zm-9.258 20.499v.01l.001.021.003.021.004.022.005.021.006.022.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.023.018.024.019.024.021.024.022.025.023.024.024.025.052.049.056.05.061.051.066.051.07.051.075.051.079.052.084.052.088.052.092.052.097.052.102.051.105.052.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.048.144.049.147.047.152.047.155.047.16.045.163.045.167.043.171.043.176.041.178.041.183.039.187.039.19.037.194.035.197.035.202.033.204.031.209.03.212.029.216.027.219.025.222.024.226.021.23.02.233.018.236.016.24.015.243.012.246.01.249.008.253.005.256.004.259.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.021.224-.024.22-.026.216-.027.212-.028.21-.031.205-.031.202-.034.198-.034.194-.036.191-.037.187-.039.183-.04.179-.04.175-.042.172-.043.168-.044.163-.045.16-.046.155-.046.152-.047.148-.048.143-.049.139-.049.136-.05.131-.05.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.053.083-.051.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.05.023-.024.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.023.01-.022.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.127l-.077.055-.08.053-.083.054-.085.053-.087.052-.09.052-.093.051-.095.05-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.045-.118.044-.12.043-.122.042-.124.042-.126.041-.128.04-.13.04-.132.038-.134.038-.135.037-.138.037-.139.035-.142.035-.143.034-.144.033-.147.032-.148.031-.15.03-.151.03-.153.029-.154.027-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.01-.179.008-.179.008-.181.006-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.006-.179-.008-.179-.008-.178-.01-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.027-.153-.029-.151-.03-.15-.03-.148-.031-.146-.032-.145-.033-.143-.034-.141-.035-.14-.035-.137-.037-.136-.037-.134-.038-.132-.038-.13-.04-.128-.04-.126-.041-.124-.042-.122-.042-.12-.044-.117-.043-.116-.045-.113-.045-.112-.046-.109-.047-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.05-.093-.052-.09-.051-.087-.052-.085-.053-.083-.054-.08-.054-.077-.054v4.127zm0-5.654v.011l.001.021.003.021.004.021.005.022.006.022.007.022.009.022.01.022.011.023.012.023.013.023.015.024.016.023.017.024.018.024.019.024.021.024.022.024.023.025.024.024.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.052.11.051.114.051.119.052.123.05.127.051.131.05.135.049.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.044.171.042.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.022.23.02.233.018.236.016.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.012.241-.015.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.048.139-.05.136-.049.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.051.051-.049.023-.025.023-.024.021-.025.02-.024.019-.024.018-.024.017-.024.015-.023.014-.023.013-.024.012-.022.01-.023.01-.023.008-.022.006-.022.006-.022.004-.021.004-.022.001-.021.001-.021v-4.139l-.077.054-.08.054-.083.054-.085.052-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.044-.118.044-.12.044-.122.042-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.035-.143.033-.144.033-.147.033-.148.031-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.009-.179.009-.179.007-.181.007-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.007-.179-.007-.179-.009-.178-.009-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.031-.146-.033-.145-.033-.143-.033-.141-.035-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.04-.126-.041-.124-.042-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.051-.093-.051-.09-.051-.087-.053-.085-.052-.083-.054-.08-.054-.077-.054v4.139zm0-5.666v.011l.001.02.003.022.004.021.005.022.006.021.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.024.018.023.019.024.021.025.022.024.023.024.024.025.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.051.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.043.171.043.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.021.23.02.233.018.236.017.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.013.241-.014.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.049.139-.049.136-.049.131-.051.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.049.023-.025.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.022.01-.023.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.153l-.077.054-.08.054-.083.053-.085.053-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.048-.105.048-.106.048-.109.046-.111.046-.114.046-.115.044-.118.044-.12.043-.122.043-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.034-.143.034-.144.033-.147.032-.148.032-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.024-.161.024-.162.023-.163.023-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.01-.178.01-.179.009-.179.007-.181.006-.182.006-.182.004-.184.003-.184.001-.185.001-.185-.001-.184-.001-.184-.003-.182-.004-.182-.006-.181-.006-.179-.007-.179-.009-.178-.01-.176-.01-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.023-.162-.023-.161-.024-.159-.024-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.032-.146-.032-.145-.033-.143-.034-.141-.034-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.041-.126-.041-.124-.041-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.048-.105-.048-.102-.048-.1-.05-.097-.049-.095-.051-.093-.051-.09-.052-.087-.052-.085-.053-.083-.053-.08-.054-.077-.054v4.153zm8.74-8.179l-.257.004-.254.005-.25.008-.247.011-.244.012-.241.014-.237.016-.233.018-.231.021-.226.022-.224.023-.22.026-.216.027-.212.028-.21.031-.205.032-.202.033-.198.034-.194.036-.191.038-.187.038-.183.04-.179.041-.175.042-.172.043-.168.043-.163.045-.16.046-.155.046-.152.048-.148.048-.143.048-.139.049-.136.05-.131.05-.126.051-.123.051-.118.051-.114.052-.11.052-.106.052-.101.052-.096.052-.092.052-.088.052-.083.052-.079.052-.074.051-.07.052-.065.051-.06.05-.056.05-.051.05-.023.025-.023.024-.021.024-.02.025-.019.024-.018.024-.017.023-.015.024-.014.023-.013.023-.012.023-.01.023-.01.022-.008.022-.006.023-.006.021-.004.022-.004.021-.001.021-.001.021.001.021.001.021.004.021.004.022.006.021.006.023.008.022.01.022.01.023.012.023.013.023.014.023.015.024.017.023.018.024.019.024.02.025.021.024.023.024.023.025.051.05.056.05.06.05.065.051.07.052.074.051.079.052.083.052.088.052.092.052.096.052.101.052.106.052.11.052.114.052.118.051.123.051.126.051.131.05.136.05.139.049.143.048.148.048.152.048.155.046.16.046.163.045.168.043.172.043.175.042.179.041.183.04.187.038.191.038.194.036.198.034.202.033.205.032.21.031.212.028.216.027.22.026.224.023.226.022.231.021.233.018.237.016.241.014.244.012.247.011.25.008.254.005.257.004.26.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.022.224-.023.22-.026.216-.027.212-.028.21-.031.205-.032.202-.033.198-.034.194-.036.191-.038.187-.038.183-.04.179-.041.175-.042.172-.043.168-.043.163-.045.16-.046.155-.046.152-.048.148-.048.143-.048.139-.049.136-.05.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.05.051-.05.023-.025.023-.024.021-.024.02-.025.019-.024.018-.024.017-.023.015-.024.014-.023.013-.023.012-.023.01-.023.01-.022.008-.022.006-.023.006-.021.004-.022.004-.021.001-.021.001-.021-.001-.021-.001-.021-.004-.021-.004-.022-.006-.021-.006-.023-.008-.022-.01-.022-.01-.023-.012-.023-.013-.023-.014-.023-.015-.024-.017-.023-.018-.024-.019-.024-.02-.025-.021-.024-.023-.024-.023-.025-.051-.05-.056-.05-.06-.05-.065-.051-.07-.052-.074-.051-.079-.052-.083-.052-.088-.052-.092-.052-.096-.052-.101-.052-.106-.052-.11-.052-.114-.052-.118-.051-.123-.051-.126-.051-.131-.05-.136-.05-.139-.049-.143-.048-.148-.048-.152-.048-.155-.046-.16-.046-.163-.045-.168-.043-.172-.043-.175-.042-.179-.041-.183-.04-.187-.038-.191-.038-.194-.036-.198-.034-.202-.033-.205-.032-.21-.031-.212-.028-.216-.027-.22-.026-.224-.023-.226-.022-.231-.021-.233-.018-.237-.016-.241-.014-.244-.012-.247-.011-.25-.008-.254-.005-.257-.004-.26-.001-.26.001z"
  );
};
const insertComputerIcon = function(elem) {
  elem.append("defs").append("symbol").attr("id", "computer").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr(
    "d",
    "M2 2v13h20v-13h-20zm18 11h-16v-9h16v9zm-10.228 6l.466-1h3.524l.467 1h-4.457zm14.228 3h-24l2-6h2.104l-1.33 4h18.45l-1.297-4h2.073l2 6zm-5-10h-14v-7h14v7z"
  );
};
const insertClockIcon = function(elem) {
  elem.append("defs").append("symbol").attr("id", "clock").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr(
    "d",
    "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"
  );
};
const insertArrowHead = function(elem) {
  elem.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 9).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z");
};
const insertArrowEnd = function(elem) {
  elem.append("defs").append("marker").attr("id", "arrowend").attr("refX", 1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 10 0 L 0 5 L 10 10 z");
};
const insertArrowFilledHead = function(elem) {
  elem.append("defs").append("marker").attr("id", "filled-head").attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
};
const insertDynamicNumber = function(elem) {
  elem.append("defs").append("marker").attr("id", "sequencenumber").attr("refX", 15).attr("refY", 15).attr("markerWidth", 60).attr("markerHeight", 40).attr("orient", "auto").append("circle").attr("cx", 15).attr("cy", 15).attr("r", 6);
};
const insertArrowCrossHead = function(elem) {
  const defs = elem.append("defs");
  const marker = defs.append("marker").attr("id", "crosshead").attr("markerWidth", 15).attr("markerHeight", 8).attr("orient", "auto").attr("refX", 16).attr("refY", 4);
  marker.append("path").attr("fill", "black").attr("stroke", "#000000").style("stroke-dasharray", "0, 0").attr("stroke-width", "1px").attr("d", "M 9,2 V 6 L16,4 Z");
  marker.append("path").attr("fill", "none").attr("stroke", "#000000").style("stroke-dasharray", "0, 0").attr("stroke-width", "1px").attr("d", "M 0,1 L 6,7 M 6,1 L 0,7");
};
const getC4ShapeFont = (cnf, typeC4Shape) => {
  return {
    fontFamily: cnf[typeC4Shape + "FontFamily"],
    fontSize: cnf[typeC4Shape + "FontSize"],
    fontWeight: cnf[typeC4Shape + "FontWeight"]
  };
};
const _drawTextCandidateFunc = function() {
  function byText(content, g, x, y, width, height, textAttrs) {
    const text = g.append("text").attr("x", x + width / 2).attr("y", y + height / 2 + 5).style("text-anchor", "middle").text(content);
    _setTextAttrs(text, textAttrs);
  }
  function byTspan(content, g, x, y, width, height, textAttrs, conf2) {
    const { fontSize, fontFamily, fontWeight } = conf2;
    const lines = content.split(index.common$1.lineBreakRegex);
    for (let i = 0; i < lines.length; i++) {
      const dy = i * fontSize - fontSize * (lines.length - 1) / 2;
      const text = g.append("text").attr("x", x + width / 2).attr("y", y).style("text-anchor", "middle").attr("dominant-baseline", "middle").style("font-size", fontSize).style("font-weight", fontWeight).style("font-family", fontFamily);
      text.append("tspan").attr("dy", dy).text(lines[i]).attr("alignment-baseline", "mathematical");
      _setTextAttrs(text, textAttrs);
    }
  }
  function byFo(content, g, x, y, width, height, textAttrs, conf2) {
    const s = g.append("switch");
    const f = s.append("foreignObject").attr("x", x).attr("y", y).attr("width", width).attr("height", height);
    const text = f.append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    text.append("div").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(content);
    byTspan(content, s, x, y, width, height, textAttrs, conf2);
    _setTextAttrs(text, textAttrs);
  }
  function _setTextAttrs(toText, fromTextAttrsDict) {
    for (const key in fromTextAttrsDict) {
      if (fromTextAttrsDict.hasOwnProperty(key)) {
        toText.attr(key, fromTextAttrsDict[key]);
      }
    }
  }
  return function(conf2) {
    return conf2.textPlacement === "fo" ? byFo : conf2.textPlacement === "old" ? byText : byTspan;
  };
}();
const svgDraw = {
  drawRect,
  drawBoundary: drawBoundary$1,
  drawC4Shape,
  drawRels: drawRels$1,
  drawImage,
  insertArrowHead,
  insertArrowEnd,
  insertArrowFilledHead,
  insertDynamicNumber,
  insertArrowCrossHead,
  insertDatabaseIcon,
  insertComputerIcon,
  insertClockIcon
};
let globalBoundaryMaxX = 0, globalBoundaryMaxY = 0;
let c4ShapeInRow = 4;
let c4BoundaryInRow = 2;
parser.yy = db;
let conf = {};
class Bounds {
  constructor(diagObj) {
    this.name = "";
    this.data = {};
    this.data.startx = void 0;
    this.data.stopx = void 0;
    this.data.starty = void 0;
    this.data.stopy = void 0;
    this.data.widthLimit = void 0;
    this.nextData = {};
    this.nextData.startx = void 0;
    this.nextData.stopx = void 0;
    this.nextData.starty = void 0;
    this.nextData.stopy = void 0;
    this.nextData.cnt = 0;
    setConf(diagObj.db.getConfig());
  }
  setData(startx, stopx, starty, stopy) {
    this.nextData.startx = this.data.startx = startx;
    this.nextData.stopx = this.data.stopx = stopx;
    this.nextData.starty = this.data.starty = starty;
    this.nextData.stopy = this.data.stopy = stopy;
  }
  updateVal(obj, key, val, fun) {
    if (obj[key] === void 0) {
      obj[key] = val;
    } else {
      obj[key] = fun(val, obj[key]);
    }
  }
  insert(c4Shape) {
    this.nextData.cnt = this.nextData.cnt + 1;
    let _startx = this.nextData.startx === this.nextData.stopx ? this.nextData.stopx + c4Shape.margin : this.nextData.stopx + c4Shape.margin * 2;
    let _stopx = _startx + c4Shape.width;
    let _starty = this.nextData.starty + c4Shape.margin * 2;
    let _stopy = _starty + c4Shape.height;
    if (_startx >= this.data.widthLimit || _stopx >= this.data.widthLimit || this.nextData.cnt > c4ShapeInRow) {
      _startx = this.nextData.startx + c4Shape.margin + conf.nextLinePaddingX;
      _starty = this.nextData.stopy + c4Shape.margin * 2;
      this.nextData.stopx = _stopx = _startx + c4Shape.width;
      this.nextData.starty = this.nextData.stopy;
      this.nextData.stopy = _stopy = _starty + c4Shape.height;
      this.nextData.cnt = 1;
    }
    c4Shape.x = _startx;
    c4Shape.y = _starty;
    this.updateVal(this.data, "startx", _startx, Math.min);
    this.updateVal(this.data, "starty", _starty, Math.min);
    this.updateVal(this.data, "stopx", _stopx, Math.max);
    this.updateVal(this.data, "stopy", _stopy, Math.max);
    this.updateVal(this.nextData, "startx", _startx, Math.min);
    this.updateVal(this.nextData, "starty", _starty, Math.min);
    this.updateVal(this.nextData, "stopx", _stopx, Math.max);
    this.updateVal(this.nextData, "stopy", _stopy, Math.max);
  }
  init(diagObj) {
    this.name = "";
    this.data = {
      startx: void 0,
      stopx: void 0,
      starty: void 0,
      stopy: void 0,
      widthLimit: void 0
    };
    this.nextData = {
      startx: void 0,
      stopx: void 0,
      starty: void 0,
      stopy: void 0,
      cnt: 0
    };
    setConf(diagObj.db.getConfig());
  }
  bumpLastMargin(margin) {
    this.data.stopx += margin;
    this.data.stopy += margin;
  }
}
const setConf = function(cnf) {
  index.assignWithDepth$1(conf, cnf);
  if (cnf.fontFamily) {
    conf.personFontFamily = conf.systemFontFamily = conf.messageFontFamily = cnf.fontFamily;
  }
  if (cnf.fontSize) {
    conf.personFontSize = conf.systemFontSize = conf.messageFontSize = cnf.fontSize;
  }
  if (cnf.fontWeight) {
    conf.personFontWeight = conf.systemFontWeight = conf.messageFontWeight = cnf.fontWeight;
  }
};
const c4ShapeFont = (cnf, typeC4Shape) => {
  return {
    fontFamily: cnf[typeC4Shape + "FontFamily"],
    fontSize: cnf[typeC4Shape + "FontSize"],
    fontWeight: cnf[typeC4Shape + "FontWeight"]
  };
};
const boundaryFont = (cnf) => {
  return {
    fontFamily: cnf.boundaryFontFamily,
    fontSize: cnf.boundaryFontSize,
    fontWeight: cnf.boundaryFontWeight
  };
};
const messageFont = (cnf) => {
  return {
    fontFamily: cnf.messageFontFamily,
    fontSize: cnf.messageFontSize,
    fontWeight: cnf.messageFontWeight
  };
};
function calcC4ShapeTextWH(textType, c4Shape, c4ShapeTextWrap, textConf, textLimitWidth) {
  if (!c4Shape[textType].width) {
    if (c4ShapeTextWrap) {
      c4Shape[textType].text = index.wrapLabel(c4Shape[textType].text, textLimitWidth, textConf);
      c4Shape[textType].textLines = c4Shape[textType].text.split(index.common$1.lineBreakRegex).length;
      c4Shape[textType].width = textLimitWidth;
      c4Shape[textType].height = index.calculateTextHeight(c4Shape[textType].text, textConf);
    } else {
      let lines = c4Shape[textType].text.split(index.common$1.lineBreakRegex);
      c4Shape[textType].textLines = lines.length;
      let lineHeight = 0;
      c4Shape[textType].height = 0;
      c4Shape[textType].width = 0;
      for (const line of lines) {
        c4Shape[textType].width = Math.max(
          index.calculateTextWidth(line, textConf),
          c4Shape[textType].width
        );
        lineHeight = index.calculateTextHeight(line, textConf);
        c4Shape[textType].height = c4Shape[textType].height + lineHeight;
      }
    }
  }
}
const drawBoundary = function(diagram2, boundary, bounds) {
  boundary.x = bounds.data.startx;
  boundary.y = bounds.data.starty;
  boundary.width = bounds.data.stopx - bounds.data.startx;
  boundary.height = bounds.data.stopy - bounds.data.starty;
  boundary.label.y = conf.c4ShapeMargin - 35;
  let boundaryTextWrap = boundary.wrap && conf.wrap;
  let boundaryLabelConf = boundaryFont(conf);
  boundaryLabelConf.fontSize = boundaryLabelConf.fontSize + 2;
  boundaryLabelConf.fontWeight = "bold";
  let textLimitWidth = index.calculateTextWidth(boundary.label.text, boundaryLabelConf);
  calcC4ShapeTextWH("label", boundary, boundaryTextWrap, boundaryLabelConf, textLimitWidth);
  svgDraw.drawBoundary(diagram2, boundary, conf);
};
const drawC4ShapeArray = function(currentBounds, diagram2, c4ShapeArray2, c4ShapeKeys) {
  let Y = 0;
  for (const c4ShapeKey of c4ShapeKeys) {
    Y = 0;
    const c4Shape = c4ShapeArray2[c4ShapeKey];
    let c4ShapeTypeConf = c4ShapeFont(conf, c4Shape.typeC4Shape.text);
    c4ShapeTypeConf.fontSize = c4ShapeTypeConf.fontSize - 2;
    c4Shape.typeC4Shape.width = index.calculateTextWidth(
      "«" + c4Shape.typeC4Shape.text + "»",
      c4ShapeTypeConf
    );
    c4Shape.typeC4Shape.height = c4ShapeTypeConf.fontSize + 2;
    c4Shape.typeC4Shape.Y = conf.c4ShapePadding;
    Y = c4Shape.typeC4Shape.Y + c4Shape.typeC4Shape.height - 4;
    c4Shape.image = { width: 0, height: 0, Y: 0 };
    switch (c4Shape.typeC4Shape.text) {
      case "person":
      case "external_person":
        c4Shape.image.width = 48;
        c4Shape.image.height = 48;
        c4Shape.image.Y = Y;
        Y = c4Shape.image.Y + c4Shape.image.height;
        break;
    }
    if (c4Shape.sprite) {
      c4Shape.image.width = 48;
      c4Shape.image.height = 48;
      c4Shape.image.Y = Y;
      Y = c4Shape.image.Y + c4Shape.image.height;
    }
    let c4ShapeTextWrap = c4Shape.wrap && conf.wrap;
    let textLimitWidth = conf.width - conf.c4ShapePadding * 2;
    let c4ShapeLabelConf = c4ShapeFont(conf, c4Shape.typeC4Shape.text);
    c4ShapeLabelConf.fontSize = c4ShapeLabelConf.fontSize + 2;
    c4ShapeLabelConf.fontWeight = "bold";
    calcC4ShapeTextWH("label", c4Shape, c4ShapeTextWrap, c4ShapeLabelConf, textLimitWidth);
    c4Shape["label"].Y = Y + 8;
    Y = c4Shape["label"].Y + c4Shape["label"].height;
    if (c4Shape.type && c4Shape.type.text !== "") {
      c4Shape.type.text = "[" + c4Shape.type.text + "]";
      let c4ShapeTypeConf2 = c4ShapeFont(conf, c4Shape.typeC4Shape.text);
      calcC4ShapeTextWH("type", c4Shape, c4ShapeTextWrap, c4ShapeTypeConf2, textLimitWidth);
      c4Shape["type"].Y = Y + 5;
      Y = c4Shape["type"].Y + c4Shape["type"].height;
    } else if (c4Shape.techn && c4Shape.techn.text !== "") {
      c4Shape.techn.text = "[" + c4Shape.techn.text + "]";
      let c4ShapeTechnConf = c4ShapeFont(conf, c4Shape.techn.text);
      calcC4ShapeTextWH("techn", c4Shape, c4ShapeTextWrap, c4ShapeTechnConf, textLimitWidth);
      c4Shape["techn"].Y = Y + 5;
      Y = c4Shape["techn"].Y + c4Shape["techn"].height;
    }
    let rectHeight = Y;
    let rectWidth = c4Shape.label.width;
    if (c4Shape.descr && c4Shape.descr.text !== "") {
      let c4ShapeDescrConf = c4ShapeFont(conf, c4Shape.typeC4Shape.text);
      calcC4ShapeTextWH("descr", c4Shape, c4ShapeTextWrap, c4ShapeDescrConf, textLimitWidth);
      c4Shape["descr"].Y = Y + 20;
      Y = c4Shape["descr"].Y + c4Shape["descr"].height;
      rectWidth = Math.max(c4Shape.label.width, c4Shape.descr.width);
      rectHeight = Y - c4Shape["descr"].textLines * 5;
    }
    rectWidth = rectWidth + conf.c4ShapePadding;
    c4Shape.width = Math.max(c4Shape.width || conf.width, rectWidth, conf.width);
    c4Shape.height = Math.max(c4Shape.height || conf.height, rectHeight, conf.height);
    c4Shape.margin = c4Shape.margin || conf.c4ShapeMargin;
    currentBounds.insert(c4Shape);
    svgDraw.drawC4Shape(diagram2, c4Shape, conf);
  }
  currentBounds.bumpLastMargin(conf.c4ShapeMargin);
};
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
let getIntersectPoint = function(fromNode, endPoint) {
  let x1 = fromNode.x;
  let y1 = fromNode.y;
  let x2 = endPoint.x;
  let y2 = endPoint.y;
  let fromCenterX = x1 + fromNode.width / 2;
  let fromCenterY = y1 + fromNode.height / 2;
  let dx = Math.abs(x1 - x2);
  let dy = Math.abs(y1 - y2);
  let tanDYX = dy / dx;
  let fromDYX = fromNode.height / fromNode.width;
  let returnPoint = null;
  if (y1 == y2 && x1 < x2) {
    returnPoint = new Point(x1 + fromNode.width, fromCenterY);
  } else if (y1 == y2 && x1 > x2) {
    returnPoint = new Point(x1, fromCenterY);
  } else if (x1 == x2 && y1 < y2) {
    returnPoint = new Point(fromCenterX, y1 + fromNode.height);
  } else if (x1 == x2 && y1 > y2) {
    returnPoint = new Point(fromCenterX, y1);
  }
  if (x1 > x2 && y1 < y2) {
    if (fromDYX >= tanDYX) {
      returnPoint = new Point(x1, fromCenterY + tanDYX * fromNode.width / 2);
    } else {
      returnPoint = new Point(
        fromCenterX - dx / dy * fromNode.height / 2,
        y1 + fromNode.height
      );
    }
  } else if (x1 < x2 && y1 < y2) {
    if (fromDYX >= tanDYX) {
      returnPoint = new Point(x1 + fromNode.width, fromCenterY + tanDYX * fromNode.width / 2);
    } else {
      returnPoint = new Point(
        fromCenterX + dx / dy * fromNode.height / 2,
        y1 + fromNode.height
      );
    }
  } else if (x1 < x2 && y1 > y2) {
    if (fromDYX >= tanDYX) {
      returnPoint = new Point(x1 + fromNode.width, fromCenterY - tanDYX * fromNode.width / 2);
    } else {
      returnPoint = new Point(fromCenterX + fromNode.height / 2 * dx / dy, y1);
    }
  } else if (x1 > x2 && y1 > y2) {
    if (fromDYX >= tanDYX) {
      returnPoint = new Point(x1, fromCenterY - fromNode.width / 2 * tanDYX);
    } else {
      returnPoint = new Point(fromCenterX - fromNode.height / 2 * dx / dy, y1);
    }
  }
  return returnPoint;
};
let getIntersectPoints = function(fromNode, endNode) {
  let endIntersectPoint = { x: 0, y: 0 };
  endIntersectPoint.x = endNode.x + endNode.width / 2;
  endIntersectPoint.y = endNode.y + endNode.height / 2;
  let startPoint = getIntersectPoint(fromNode, endIntersectPoint);
  endIntersectPoint.x = fromNode.x + fromNode.width / 2;
  endIntersectPoint.y = fromNode.y + fromNode.height / 2;
  let endPoint = getIntersectPoint(endNode, endIntersectPoint);
  return { startPoint, endPoint };
};
const drawRels = function(diagram2, rels2, getC4ShapeObj, diagObj) {
  let i = 0;
  for (let rel of rels2) {
    i = i + 1;
    let relTextWrap = rel.wrap && conf.wrap;
    let relConf = messageFont(conf);
    let diagramType = diagObj.db.getC4Type();
    if (diagramType === "C4Dynamic") {
      rel.label.text = i + ": " + rel.label.text;
    }
    let textLimitWidth = index.calculateTextWidth(rel.label.text, relConf);
    calcC4ShapeTextWH("label", rel, relTextWrap, relConf, textLimitWidth);
    if (rel.techn && rel.techn.text !== "") {
      textLimitWidth = index.calculateTextWidth(rel.techn.text, relConf);
      calcC4ShapeTextWH("techn", rel, relTextWrap, relConf, textLimitWidth);
    }
    if (rel.descr && rel.descr.text !== "") {
      textLimitWidth = index.calculateTextWidth(rel.descr.text, relConf);
      calcC4ShapeTextWH("descr", rel, relTextWrap, relConf, textLimitWidth);
    }
    let fromNode = getC4ShapeObj(rel.from);
    let endNode = getC4ShapeObj(rel.to);
    let points = getIntersectPoints(fromNode, endNode);
    rel.startPoint = points.startPoint;
    rel.endPoint = points.endPoint;
  }
  svgDraw.drawRels(diagram2, rels2, conf);
};
function drawInsideBoundary(diagram2, parentBoundaryAlias, parentBounds, currentBoundaries, diagObj) {
  let currentBounds = new Bounds(diagObj);
  currentBounds.data.widthLimit = parentBounds.data.widthLimit / Math.min(c4BoundaryInRow, currentBoundaries.length);
  for (let [i, currentBoundary] of currentBoundaries.entries()) {
    let Y = 0;
    currentBoundary.image = { width: 0, height: 0, Y: 0 };
    if (currentBoundary.sprite) {
      currentBoundary.image.width = 48;
      currentBoundary.image.height = 48;
      currentBoundary.image.Y = Y;
      Y = currentBoundary.image.Y + currentBoundary.image.height;
    }
    let currentBoundaryTextWrap = currentBoundary.wrap && conf.wrap;
    let currentBoundaryLabelConf = boundaryFont(conf);
    currentBoundaryLabelConf.fontSize = currentBoundaryLabelConf.fontSize + 2;
    currentBoundaryLabelConf.fontWeight = "bold";
    calcC4ShapeTextWH(
      "label",
      currentBoundary,
      currentBoundaryTextWrap,
      currentBoundaryLabelConf,
      currentBounds.data.widthLimit
    );
    currentBoundary["label"].Y = Y + 8;
    Y = currentBoundary["label"].Y + currentBoundary["label"].height;
    if (currentBoundary.type && currentBoundary.type.text !== "") {
      currentBoundary.type.text = "[" + currentBoundary.type.text + "]";
      let currentBoundaryTypeConf = boundaryFont(conf);
      calcC4ShapeTextWH(
        "type",
        currentBoundary,
        currentBoundaryTextWrap,
        currentBoundaryTypeConf,
        currentBounds.data.widthLimit
      );
      currentBoundary["type"].Y = Y + 5;
      Y = currentBoundary["type"].Y + currentBoundary["type"].height;
    }
    if (currentBoundary.descr && currentBoundary.descr.text !== "") {
      let currentBoundaryDescrConf = boundaryFont(conf);
      currentBoundaryDescrConf.fontSize = currentBoundaryDescrConf.fontSize - 2;
      calcC4ShapeTextWH(
        "descr",
        currentBoundary,
        currentBoundaryTextWrap,
        currentBoundaryDescrConf,
        currentBounds.data.widthLimit
      );
      currentBoundary["descr"].Y = Y + 20;
      Y = currentBoundary["descr"].Y + currentBoundary["descr"].height;
    }
    if (i == 0 || i % c4BoundaryInRow === 0) {
      let _x = parentBounds.data.startx + conf.diagramMarginX;
      let _y = parentBounds.data.stopy + conf.diagramMarginY + Y;
      currentBounds.setData(_x, _x, _y, _y);
    } else {
      let _x = currentBounds.data.stopx !== currentBounds.data.startx ? currentBounds.data.stopx + conf.diagramMarginX : currentBounds.data.startx;
      let _y = currentBounds.data.starty;
      currentBounds.setData(_x, _x, _y, _y);
    }
    currentBounds.name = currentBoundary.alias;
    let currentPersonOrSystemArray = diagObj.db.getC4ShapeArray(currentBoundary.alias);
    let currentPersonOrSystemKeys = diagObj.db.getC4ShapeKeys(currentBoundary.alias);
    if (currentPersonOrSystemKeys.length > 0) {
      drawC4ShapeArray(
        currentBounds,
        diagram2,
        currentPersonOrSystemArray,
        currentPersonOrSystemKeys
      );
    }
    parentBoundaryAlias = currentBoundary.alias;
    let nextCurrentBoundaries = diagObj.db.getBoundarys(parentBoundaryAlias);
    if (nextCurrentBoundaries.length > 0) {
      drawInsideBoundary(
        diagram2,
        parentBoundaryAlias,
        currentBounds,
        nextCurrentBoundaries,
        diagObj
      );
    }
    if (currentBoundary.alias !== "global") {
      drawBoundary(diagram2, currentBoundary, currentBounds);
    }
    parentBounds.data.stopy = Math.max(
      currentBounds.data.stopy + conf.c4ShapeMargin,
      parentBounds.data.stopy
    );
    parentBounds.data.stopx = Math.max(
      currentBounds.data.stopx + conf.c4ShapeMargin,
      parentBounds.data.stopx
    );
    globalBoundaryMaxX = Math.max(globalBoundaryMaxX, parentBounds.data.stopx);
    globalBoundaryMaxY = Math.max(globalBoundaryMaxY, parentBounds.data.stopy);
  }
}
const draw = function(_text, id, _version, diagObj) {
  conf = index.getConfig().c4;
  const securityLevel = index.getConfig().securityLevel;
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = index.select("#i" + id);
  }
  const root = securityLevel === "sandbox" ? index.select(sandboxElement.nodes()[0].contentDocument.body) : index.select("body");
  let db2 = diagObj.db;
  diagObj.db.setWrap(conf.wrap);
  c4ShapeInRow = db2.getC4ShapeInRow();
  c4BoundaryInRow = db2.getC4BoundaryInRow();
  index.log$1.debug(`C:${JSON.stringify(conf, null, 2)}`);
  const diagram2 = securityLevel === "sandbox" ? root.select(`[id="${id}"]`) : index.select(`[id="${id}"]`);
  svgDraw.insertComputerIcon(diagram2);
  svgDraw.insertDatabaseIcon(diagram2);
  svgDraw.insertClockIcon(diagram2);
  let screenBounds = new Bounds(diagObj);
  screenBounds.setData(
    conf.diagramMarginX,
    conf.diagramMarginX,
    conf.diagramMarginY,
    conf.diagramMarginY
  );
  screenBounds.data.widthLimit = screen.availWidth;
  globalBoundaryMaxX = conf.diagramMarginX;
  globalBoundaryMaxY = conf.diagramMarginY;
  const title2 = diagObj.db.getTitle();
  let currentBoundaries = diagObj.db.getBoundarys("");
  drawInsideBoundary(diagram2, "", screenBounds, currentBoundaries, diagObj);
  svgDraw.insertArrowHead(diagram2);
  svgDraw.insertArrowEnd(diagram2);
  svgDraw.insertArrowCrossHead(diagram2);
  svgDraw.insertArrowFilledHead(diagram2);
  drawRels(diagram2, diagObj.db.getRels(), diagObj.db.getC4Shape, diagObj);
  screenBounds.data.stopx = globalBoundaryMaxX;
  screenBounds.data.stopy = globalBoundaryMaxY;
  const box = screenBounds.data;
  let boxHeight = box.stopy - box.starty;
  let height = boxHeight + 2 * conf.diagramMarginY;
  let boxWidth = box.stopx - box.startx;
  const width = boxWidth + 2 * conf.diagramMarginX;
  if (title2) {
    diagram2.append("text").text(title2).attr("x", (box.stopx - box.startx) / 2 - 4 * conf.diagramMarginX).attr("y", box.starty + conf.diagramMarginY);
  }
  index.configureSvgSize(diagram2, height, width, conf.useMaxWidth);
  const extraVertForTitle = title2 ? 60 : 0;
  diagram2.attr(
    "viewBox",
    box.startx - conf.diagramMarginX + " -" + (conf.diagramMarginY + extraVertForTitle) + " " + width + " " + (height + extraVertForTitle)
  );
  index.log$1.debug(`models:`, box);
};
const renderer = {
  drawPersonOrSystemArray: drawC4ShapeArray,
  drawBoundary,
  setConf,
  draw
};
const getStyles = (options) => `.person {
    stroke: ${options.personBorder};
    fill: ${options.personBkg};
  }
`;
const styles = getStyles;
const diagram = {
  parser: parser$1,
  db,
  renderer,
  styles,
  init: ({ c4, wrap }) => {
    renderer.setConf(c4);
    db.setWrap(wrap);
  }
};

exports.diagram = diagram;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYzREaWFncmFtLTNkNGU0OGNmLTM1YmIxMTU0LmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvbWVybWFpZC9kaXN0L2M0RGlhZ3JhbS0zZDRlNDhjZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzIGFzIHNldEFjY1RpdGxlLCBnIGFzIGdldEFjY1RpdGxlLCBhIGFzIGdldEFjY0Rlc2NyaXB0aW9uLCBiIGFzIHNldEFjY0Rlc2NyaXB0aW9uLCBjIGFzIGdldENvbmZpZywgZCBhcyBzYW5pdGl6ZVRleHQsIGUgYXMgY29tbW9uLCBmIGFzIGFzc2lnbldpdGhEZXB0aCwgaCBhcyBjYWxjdWxhdGVUZXh0V2lkdGgsIGwgYXMgbG9nLCBpIGFzIGNvbmZpZ3VyZVN2Z1NpemUsIHcgYXMgd3JhcExhYmVsLCBqIGFzIGNhbGN1bGF0ZVRleHRIZWlnaHQgfSBmcm9tIFwiLi9tZXJtYWlkLWI1ODYwYjU0LmpzXCI7XG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IGQgYXMgZHJhd1JlY3QkMSwgZyBhcyBnZXROb3RlUmVjdCB9IGZyb20gXCIuL3N2Z0RyYXdDb21tb24tMDhmOTdhOTQuanNcIjtcbmltcG9ydCB7IHNhbml0aXplVXJsIH0gZnJvbSBcIkBicmFpbnRyZWUvc2FuaXRpemUtdXJsXCI7XG5pbXBvcnQgXCJ0cy1kZWRlbnRcIjtcbmltcG9ydCBcImRheWpzXCI7XG5pbXBvcnQgXCJkb21wdXJpZnlcIjtcbmltcG9ydCBcImtocm9tYVwiO1xuaW1wb3J0IFwibG9kYXNoLWVzL21lbW9pemUuanNcIjtcbmltcG9ydCBcImxvZGFzaC1lcy9tZXJnZS5qc1wiO1xuaW1wb3J0IFwic3R5bGlzXCI7XG5pbXBvcnQgXCJsb2Rhc2gtZXMvaXNFbXB0eS5qc1wiO1xudmFyIHBhcnNlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbyA9IGZ1bmN0aW9uKGssIHYsIG8yLCBsKSB7XG4gICAgZm9yIChvMiA9IG8yIHx8IHt9LCBsID0gay5sZW5ndGg7IGwtLTsgbzJba1tsXV0gPSB2KVxuICAgICAgO1xuICAgIHJldHVybiBvMjtcbiAgfSwgJFYwID0gWzEsIDI0XSwgJFYxID0gWzEsIDI1XSwgJFYyID0gWzEsIDI2XSwgJFYzID0gWzEsIDI3XSwgJFY0ID0gWzEsIDI4XSwgJFY1ID0gWzEsIDYzXSwgJFY2ID0gWzEsIDY0XSwgJFY3ID0gWzEsIDY1XSwgJFY4ID0gWzEsIDY2XSwgJFY5ID0gWzEsIDY3XSwgJFZhID0gWzEsIDY4XSwgJFZiID0gWzEsIDY5XSwgJFZjID0gWzEsIDI5XSwgJFZkID0gWzEsIDMwXSwgJFZlID0gWzEsIDMxXSwgJFZmID0gWzEsIDMyXSwgJFZnID0gWzEsIDMzXSwgJFZoID0gWzEsIDM0XSwgJFZpID0gWzEsIDM1XSwgJFZqID0gWzEsIDM2XSwgJFZrID0gWzEsIDM3XSwgJFZsID0gWzEsIDM4XSwgJFZtID0gWzEsIDM5XSwgJFZuID0gWzEsIDQwXSwgJFZvID0gWzEsIDQxXSwgJFZwID0gWzEsIDQyXSwgJFZxID0gWzEsIDQzXSwgJFZyID0gWzEsIDQ0XSwgJFZzID0gWzEsIDQ1XSwgJFZ0ID0gWzEsIDQ2XSwgJFZ1ID0gWzEsIDQ3XSwgJFZ2ID0gWzEsIDQ4XSwgJFZ3ID0gWzEsIDUwXSwgJFZ4ID0gWzEsIDUxXSwgJFZ5ID0gWzEsIDUyXSwgJFZ6ID0gWzEsIDUzXSwgJFZBID0gWzEsIDU0XSwgJFZCID0gWzEsIDU1XSwgJFZDID0gWzEsIDU2XSwgJFZEID0gWzEsIDU3XSwgJFZFID0gWzEsIDU4XSwgJFZGID0gWzEsIDU5XSwgJFZHID0gWzEsIDYwXSwgJFZIID0gWzE0LCA0Ml0sICRWSSA9IFsxNCwgMzQsIDM2LCAzNywgMzgsIDM5LCA0MCwgNDEsIDQyLCA0NCwgNDUsIDQ2LCA0NywgNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDU4LCA1OSwgNjAsIDYxLCA2MiwgNjMsIDY0LCA2NSwgNjYsIDY3LCA2OCwgNjksIDcwLCA3MSwgNzIsIDczLCA3NF0sICRWSiA9IFsxMiwgMTQsIDM0LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDQxLCA0MiwgNDQsIDQ1LCA0NiwgNDcsIDQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3LCA1OCwgNTksIDYwLCA2MSwgNjIsIDYzLCA2NCwgNjUsIDY2LCA2NywgNjgsIDY5LCA3MCwgNzEsIDcyLCA3MywgNzRdLCAkVksgPSBbMSwgODJdLCAkVkwgPSBbMSwgODNdLCAkVk0gPSBbMSwgODRdLCAkVk4gPSBbMSwgODVdLCAkVk8gPSBbMTIsIDE0LCA0Ml0sICRWUCA9IFsxMiwgMTQsIDMzLCA0Ml0sICRWUSA9IFsxMiwgMTQsIDMzLCA0MiwgNzYsIDc3LCA3OSwgODBdLCAkVlIgPSBbMTIsIDMzXSwgJFZTID0gWzM0LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDQxLCA0NCwgNDUsIDQ2LCA0NywgNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDU4LCA1OSwgNjAsIDYxLCA2MiwgNjMsIDY0LCA2NSwgNjYsIDY3LCA2OCwgNjksIDcwLCA3MSwgNzIsIDczLCA3NF07XG4gIHZhciBwYXJzZXIyID0ge1xuICAgIHRyYWNlOiBmdW5jdGlvbiB0cmFjZSgpIHtcbiAgICB9LFxuICAgIHl5OiB7fSxcbiAgICBzeW1ib2xzXzogeyBcImVycm9yXCI6IDIsIFwic3RhcnRcIjogMywgXCJtZXJtYWlkRG9jXCI6IDQsIFwiZGlyZWN0aW9uXCI6IDUsIFwiZGlyZWN0aW9uX3RiXCI6IDYsIFwiZGlyZWN0aW9uX2J0XCI6IDcsIFwiZGlyZWN0aW9uX3JsXCI6IDgsIFwiZGlyZWN0aW9uX2xyXCI6IDksIFwiZ3JhcGhDb25maWdcIjogMTAsIFwiQzRfQ09OVEVYVFwiOiAxMSwgXCJORVdMSU5FXCI6IDEyLCBcInN0YXRlbWVudHNcIjogMTMsIFwiRU9GXCI6IDE0LCBcIkM0X0NPTlRBSU5FUlwiOiAxNSwgXCJDNF9DT01QT05FTlRcIjogMTYsIFwiQzRfRFlOQU1JQ1wiOiAxNywgXCJDNF9ERVBMT1lNRU5UXCI6IDE4LCBcIm90aGVyU3RhdGVtZW50c1wiOiAxOSwgXCJkaWFncmFtU3RhdGVtZW50c1wiOiAyMCwgXCJvdGhlclN0YXRlbWVudFwiOiAyMSwgXCJ0aXRsZVwiOiAyMiwgXCJhY2NEZXNjcmlwdGlvblwiOiAyMywgXCJhY2NfdGl0bGVcIjogMjQsIFwiYWNjX3RpdGxlX3ZhbHVlXCI6IDI1LCBcImFjY19kZXNjclwiOiAyNiwgXCJhY2NfZGVzY3JfdmFsdWVcIjogMjcsIFwiYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZVwiOiAyOCwgXCJib3VuZGFyeVN0YXRlbWVudFwiOiAyOSwgXCJib3VuZGFyeVN0YXJ0U3RhdGVtZW50XCI6IDMwLCBcImJvdW5kYXJ5U3RvcFN0YXRlbWVudFwiOiAzMSwgXCJib3VuZGFyeVN0YXJ0XCI6IDMyLCBcIkxCUkFDRVwiOiAzMywgXCJFTlRFUlBSSVNFX0JPVU5EQVJZXCI6IDM0LCBcImF0dHJpYnV0ZXNcIjogMzUsIFwiU1lTVEVNX0JPVU5EQVJZXCI6IDM2LCBcIkJPVU5EQVJZXCI6IDM3LCBcIkNPTlRBSU5FUl9CT1VOREFSWVwiOiAzOCwgXCJOT0RFXCI6IDM5LCBcIk5PREVfTFwiOiA0MCwgXCJOT0RFX1JcIjogNDEsIFwiUkJSQUNFXCI6IDQyLCBcImRpYWdyYW1TdGF0ZW1lbnRcIjogNDMsIFwiUEVSU09OXCI6IDQ0LCBcIlBFUlNPTl9FWFRcIjogNDUsIFwiU1lTVEVNXCI6IDQ2LCBcIlNZU1RFTV9EQlwiOiA0NywgXCJTWVNURU1fUVVFVUVcIjogNDgsIFwiU1lTVEVNX0VYVFwiOiA0OSwgXCJTWVNURU1fRVhUX0RCXCI6IDUwLCBcIlNZU1RFTV9FWFRfUVVFVUVcIjogNTEsIFwiQ09OVEFJTkVSXCI6IDUyLCBcIkNPTlRBSU5FUl9EQlwiOiA1MywgXCJDT05UQUlORVJfUVVFVUVcIjogNTQsIFwiQ09OVEFJTkVSX0VYVFwiOiA1NSwgXCJDT05UQUlORVJfRVhUX0RCXCI6IDU2LCBcIkNPTlRBSU5FUl9FWFRfUVVFVUVcIjogNTcsIFwiQ09NUE9ORU5UXCI6IDU4LCBcIkNPTVBPTkVOVF9EQlwiOiA1OSwgXCJDT01QT05FTlRfUVVFVUVcIjogNjAsIFwiQ09NUE9ORU5UX0VYVFwiOiA2MSwgXCJDT01QT05FTlRfRVhUX0RCXCI6IDYyLCBcIkNPTVBPTkVOVF9FWFRfUVVFVUVcIjogNjMsIFwiUkVMXCI6IDY0LCBcIkJJUkVMXCI6IDY1LCBcIlJFTF9VXCI6IDY2LCBcIlJFTF9EXCI6IDY3LCBcIlJFTF9MXCI6IDY4LCBcIlJFTF9SXCI6IDY5LCBcIlJFTF9CXCI6IDcwLCBcIlJFTF9JTkRFWFwiOiA3MSwgXCJVUERBVEVfRUxfU1RZTEVcIjogNzIsIFwiVVBEQVRFX1JFTF9TVFlMRVwiOiA3MywgXCJVUERBVEVfTEFZT1VUX0NPTkZJR1wiOiA3NCwgXCJhdHRyaWJ1dGVcIjogNzUsIFwiU1RSXCI6IDc2LCBcIlNUUl9LRVlcIjogNzcsIFwiU1RSX1ZBTFVFXCI6IDc4LCBcIkFUVFJJQlVURVwiOiA3OSwgXCJBVFRSSUJVVEVfRU1QVFlcIjogODAsIFwiJGFjY2VwdFwiOiAwLCBcIiRlbmRcIjogMSB9LFxuICAgIHRlcm1pbmFsc186IHsgMjogXCJlcnJvclwiLCA2OiBcImRpcmVjdGlvbl90YlwiLCA3OiBcImRpcmVjdGlvbl9idFwiLCA4OiBcImRpcmVjdGlvbl9ybFwiLCA5OiBcImRpcmVjdGlvbl9sclwiLCAxMTogXCJDNF9DT05URVhUXCIsIDEyOiBcIk5FV0xJTkVcIiwgMTQ6IFwiRU9GXCIsIDE1OiBcIkM0X0NPTlRBSU5FUlwiLCAxNjogXCJDNF9DT01QT05FTlRcIiwgMTc6IFwiQzRfRFlOQU1JQ1wiLCAxODogXCJDNF9ERVBMT1lNRU5UXCIsIDIyOiBcInRpdGxlXCIsIDIzOiBcImFjY0Rlc2NyaXB0aW9uXCIsIDI0OiBcImFjY190aXRsZVwiLCAyNTogXCJhY2NfdGl0bGVfdmFsdWVcIiwgMjY6IFwiYWNjX2Rlc2NyXCIsIDI3OiBcImFjY19kZXNjcl92YWx1ZVwiLCAyODogXCJhY2NfZGVzY3JfbXVsdGlsaW5lX3ZhbHVlXCIsIDMzOiBcIkxCUkFDRVwiLCAzNDogXCJFTlRFUlBSSVNFX0JPVU5EQVJZXCIsIDM2OiBcIlNZU1RFTV9CT1VOREFSWVwiLCAzNzogXCJCT1VOREFSWVwiLCAzODogXCJDT05UQUlORVJfQk9VTkRBUllcIiwgMzk6IFwiTk9ERVwiLCA0MDogXCJOT0RFX0xcIiwgNDE6IFwiTk9ERV9SXCIsIDQyOiBcIlJCUkFDRVwiLCA0NDogXCJQRVJTT05cIiwgNDU6IFwiUEVSU09OX0VYVFwiLCA0NjogXCJTWVNURU1cIiwgNDc6IFwiU1lTVEVNX0RCXCIsIDQ4OiBcIlNZU1RFTV9RVUVVRVwiLCA0OTogXCJTWVNURU1fRVhUXCIsIDUwOiBcIlNZU1RFTV9FWFRfREJcIiwgNTE6IFwiU1lTVEVNX0VYVF9RVUVVRVwiLCA1MjogXCJDT05UQUlORVJcIiwgNTM6IFwiQ09OVEFJTkVSX0RCXCIsIDU0OiBcIkNPTlRBSU5FUl9RVUVVRVwiLCA1NTogXCJDT05UQUlORVJfRVhUXCIsIDU2OiBcIkNPTlRBSU5FUl9FWFRfREJcIiwgNTc6IFwiQ09OVEFJTkVSX0VYVF9RVUVVRVwiLCA1ODogXCJDT01QT05FTlRcIiwgNTk6IFwiQ09NUE9ORU5UX0RCXCIsIDYwOiBcIkNPTVBPTkVOVF9RVUVVRVwiLCA2MTogXCJDT01QT05FTlRfRVhUXCIsIDYyOiBcIkNPTVBPTkVOVF9FWFRfREJcIiwgNjM6IFwiQ09NUE9ORU5UX0VYVF9RVUVVRVwiLCA2NDogXCJSRUxcIiwgNjU6IFwiQklSRUxcIiwgNjY6IFwiUkVMX1VcIiwgNjc6IFwiUkVMX0RcIiwgNjg6IFwiUkVMX0xcIiwgNjk6IFwiUkVMX1JcIiwgNzA6IFwiUkVMX0JcIiwgNzE6IFwiUkVMX0lOREVYXCIsIDcyOiBcIlVQREFURV9FTF9TVFlMRVwiLCA3MzogXCJVUERBVEVfUkVMX1NUWUxFXCIsIDc0OiBcIlVQREFURV9MQVlPVVRfQ09ORklHXCIsIDc2OiBcIlNUUlwiLCA3NzogXCJTVFJfS0VZXCIsIDc4OiBcIlNUUl9WQUxVRVwiLCA3OTogXCJBVFRSSUJVVEVcIiwgODA6IFwiQVRUUklCVVRFX0VNUFRZXCIgfSxcbiAgICBwcm9kdWN0aW9uc186IFswLCBbMywgMV0sIFszLCAxXSwgWzUsIDFdLCBbNSwgMV0sIFs1LCAxXSwgWzUsIDFdLCBbNCwgMV0sIFsxMCwgNF0sIFsxMCwgNF0sIFsxMCwgNF0sIFsxMCwgNF0sIFsxMCwgNF0sIFsxMywgMV0sIFsxMywgMV0sIFsxMywgMl0sIFsxOSwgMV0sIFsxOSwgMl0sIFsxOSwgM10sIFsyMSwgMV0sIFsyMSwgMV0sIFsyMSwgMl0sIFsyMSwgMl0sIFsyMSwgMV0sIFsyOSwgM10sIFszMCwgM10sIFszMCwgM10sIFszMCwgNF0sIFszMiwgMl0sIFszMiwgMl0sIFszMiwgMl0sIFszMiwgMl0sIFszMiwgMl0sIFszMiwgMl0sIFszMiwgMl0sIFszMSwgMV0sIFsyMCwgMV0sIFsyMCwgMl0sIFsyMCwgM10sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMV0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFs0MywgMl0sIFszNSwgMV0sIFszNSwgMl0sIFs3NSwgMV0sIFs3NSwgMl0sIFs3NSwgMV0sIFs3NSwgMV1dLFxuICAgIHBlcmZvcm1BY3Rpb246IGZ1bmN0aW9uIGFub255bW91cyh5eXRleHQsIHl5bGVuZywgeXlsaW5lbm8sIHl5LCB5eXN0YXRlLCAkJCwgXyQpIHtcbiAgICAgIHZhciAkMCA9ICQkLmxlbmd0aCAtIDE7XG4gICAgICBzd2l0Y2ggKHl5c3RhdGUpIHtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHl5LnNldERpcmVjdGlvbihcIlRCXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgeXkuc2V0RGlyZWN0aW9uKFwiQlRcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB5eS5zZXREaXJlY3Rpb24oXCJSTFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHl5LnNldERpcmVjdGlvbihcIkxSXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICB5eS5zZXRDNFR5cGUoJCRbJDAgLSAzXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgeXkuc2V0VGl0bGUoJCRbJDBdLnN1YnN0cmluZyg2KSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdLnN1YnN0cmluZyg2KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICB5eS5zZXRBY2NEZXNjcmlwdGlvbigkJFskMF0uc3Vic3RyaW5nKDE1KSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdLnN1YnN0cmluZygxNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdLnRyaW0oKTtcbiAgICAgICAgICB5eS5zZXRUaXRsZSh0aGlzLiQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIyOlxuICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXS50cmltKCk7XG4gICAgICAgICAgeXkuc2V0QWNjRGVzY3JpcHRpb24odGhpcy4kKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyODpcbiAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICAkJFskMF0uc3BsaWNlKDIsIDAsIFwiRU5URVJQUklTRVwiKTtcbiAgICAgICAgICB5eS5hZGRQZXJzb25PclN5c3RlbUJvdW5kYXJ5KC4uLiQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgIHl5LmFkZFBlcnNvbk9yU3lzdGVtQm91bmRhcnkoLi4uJCRbJDBdKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgJCRbJDBdLnNwbGljZSgyLCAwLCBcIkNPTlRBSU5FUlwiKTtcbiAgICAgICAgICB5eS5hZGRDb250YWluZXJCb3VuZGFyeSguLi4kJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICB5eS5hZGREZXBsb3ltZW50Tm9kZShcIm5vZGVcIiwgLi4uJCRbJDBdKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgeXkuYWRkRGVwbG95bWVudE5vZGUoXCJub2RlTFwiLCAuLi4kJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICB5eS5hZGREZXBsb3ltZW50Tm9kZShcIm5vZGVSXCIsIC4uLiQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM1OlxuICAgICAgICAgIHl5LnBvcEJvdW5kYXJ5UGFyc2VTdGFjaygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgIHl5LmFkZFBlcnNvbk9yU3lzdGVtKFwicGVyc29uXCIsIC4uLiQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgIHl5LmFkZFBlcnNvbk9yU3lzdGVtKFwiZXh0ZXJuYWxfcGVyc29uXCIsIC4uLiQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgIHl5LmFkZFBlcnNvbk9yU3lzdGVtKFwic3lzdGVtXCIsIC4uLiQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgIHl5LmFkZFBlcnNvbk9yU3lzdGVtKFwic3lzdGVtX2RiXCIsIC4uLiQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQzOlxuICAgICAgICAgIHl5LmFkZFBlcnNvbk9yU3lzdGVtKFwic3lzdGVtX3F1ZXVlXCIsIC4uLiQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgIHl5LmFkZFBlcnNvbk9yU3lzdGVtKFwiZXh0ZXJuYWxfc3lzdGVtXCIsIC4uLiQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgIHl5LmFkZFBlcnNvbk9yU3lzdGVtKFwiZXh0ZXJuYWxfc3lzdGVtX2RiXCIsIC4uLiQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ2OlxuICAgICAgICAgIHl5LmFkZFBlcnNvbk9yU3lzdGVtKFwiZXh0ZXJuYWxfc3lzdGVtX3F1ZXVlXCIsIC4uLiQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgIHl5LmFkZENvbnRhaW5lcihcImNvbnRhaW5lclwiLCAuLi4kJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0ODpcbiAgICAgICAgICB5eS5hZGRDb250YWluZXIoXCJjb250YWluZXJfZGJcIiwgLi4uJCRbJDBdKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDk6XG4gICAgICAgICAgeXkuYWRkQ29udGFpbmVyKFwiY29udGFpbmVyX3F1ZXVlXCIsIC4uLiQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDUwOlxuICAgICAgICAgIHl5LmFkZENvbnRhaW5lcihcImV4dGVybmFsX2NvbnRhaW5lclwiLCAuLi4kJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1MTpcbiAgICAgICAgICB5eS5hZGRDb250YWluZXIoXCJleHRlcm5hbF9jb250YWluZXJfZGJcIiwgLi4uJCRbJDBdKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTI6XG4gICAgICAgICAgeXkuYWRkQ29udGFpbmVyKFwiZXh0ZXJuYWxfY29udGFpbmVyX3F1ZXVlXCIsIC4uLiQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDUzOlxuICAgICAgICAgIHl5LmFkZENvbXBvbmVudChcImNvbXBvbmVudFwiLCAuLi4kJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1NDpcbiAgICAgICAgICB5eS5hZGRDb21wb25lbnQoXCJjb21wb25lbnRfZGJcIiwgLi4uJCRbJDBdKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTU6XG4gICAgICAgICAgeXkuYWRkQ29tcG9uZW50KFwiY29tcG9uZW50X3F1ZXVlXCIsIC4uLiQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU2OlxuICAgICAgICAgIHl5LmFkZENvbXBvbmVudChcImV4dGVybmFsX2NvbXBvbmVudFwiLCAuLi4kJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1NzpcbiAgICAgICAgICB5eS5hZGRDb21wb25lbnQoXCJleHRlcm5hbF9jb21wb25lbnRfZGJcIiwgLi4uJCRbJDBdKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgeXkuYWRkQ29tcG9uZW50KFwiZXh0ZXJuYWxfY29tcG9uZW50X3F1ZXVlXCIsIC4uLiQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDYwOlxuICAgICAgICAgIHl5LmFkZFJlbChcInJlbFwiLCAuLi4kJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2MTpcbiAgICAgICAgICB5eS5hZGRSZWwoXCJiaXJlbFwiLCAuLi4kJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2MjpcbiAgICAgICAgICB5eS5hZGRSZWwoXCJyZWxfdVwiLCAuLi4kJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2MzpcbiAgICAgICAgICB5eS5hZGRSZWwoXCJyZWxfZFwiLCAuLi4kJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICB5eS5hZGRSZWwoXCJyZWxfbFwiLCAuLi4kJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2NTpcbiAgICAgICAgICB5eS5hZGRSZWwoXCJyZWxfclwiLCAuLi4kJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2NjpcbiAgICAgICAgICB5eS5hZGRSZWwoXCJyZWxfYlwiLCAuLi4kJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2NzpcbiAgICAgICAgICAkJFskMF0uc3BsaWNlKDAsIDEpO1xuICAgICAgICAgIHl5LmFkZFJlbChcInJlbFwiLCAuLi4kJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2ODpcbiAgICAgICAgICB5eS51cGRhdGVFbFN0eWxlKFwidXBkYXRlX2VsX3N0eWxlXCIsIC4uLiQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY5OlxuICAgICAgICAgIHl5LnVwZGF0ZVJlbFN0eWxlKFwidXBkYXRlX3JlbF9zdHlsZVwiLCAuLi4kJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3MDpcbiAgICAgICAgICB5eS51cGRhdGVMYXlvdXRDb25maWcoXCJ1cGRhdGVfbGF5b3V0X2NvbmZpZ1wiLCAuLi4kJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3MTpcbiAgICAgICAgICB0aGlzLiQgPSBbJCRbJDBdXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3MjpcbiAgICAgICAgICAkJFskMF0udW5zaGlmdCgkJFskMCAtIDFdKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzM6XG4gICAgICAgIGNhc2UgNzU6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdLnRyaW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3NDpcbiAgICAgICAgICBsZXQga3YgPSB7fTtcbiAgICAgICAgICBrdlskJFskMCAtIDFdLnRyaW0oKV0gPSAkJFskMF0udHJpbSgpO1xuICAgICAgICAgIHRoaXMuJCA9IGt2O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc2OlxuICAgICAgICAgIHRoaXMuJCA9IFwiXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcbiAgICB0YWJsZTogW3sgMzogMSwgNDogMiwgNTogMywgNjogWzEsIDVdLCA3OiBbMSwgNl0sIDg6IFsxLCA3XSwgOTogWzEsIDhdLCAxMDogNCwgMTE6IFsxLCA5XSwgMTU6IFsxLCAxMF0sIDE2OiBbMSwgMTFdLCAxNzogWzEsIDEyXSwgMTg6IFsxLCAxM10gfSwgeyAxOiBbM10gfSwgeyAxOiBbMiwgMV0gfSwgeyAxOiBbMiwgMl0gfSwgeyAxOiBbMiwgN10gfSwgeyAxOiBbMiwgM10gfSwgeyAxOiBbMiwgNF0gfSwgeyAxOiBbMiwgNV0gfSwgeyAxOiBbMiwgNl0gfSwgeyAxMjogWzEsIDE0XSB9LCB7IDEyOiBbMSwgMTVdIH0sIHsgMTI6IFsxLCAxNl0gfSwgeyAxMjogWzEsIDE3XSB9LCB7IDEyOiBbMSwgMThdIH0sIHsgMTM6IDE5LCAxOTogMjAsIDIwOiAyMSwgMjE6IDIyLCAyMjogJFYwLCAyMzogJFYxLCAyNDogJFYyLCAyNjogJFYzLCAyODogJFY0LCAyOTogNDksIDMwOiA2MSwgMzI6IDYyLCAzNDogJFY1LCAzNjogJFY2LCAzNzogJFY3LCAzODogJFY4LCAzOTogJFY5LCA0MDogJFZhLCA0MTogJFZiLCA0MzogMjMsIDQ0OiAkVmMsIDQ1OiAkVmQsIDQ2OiAkVmUsIDQ3OiAkVmYsIDQ4OiAkVmcsIDQ5OiAkVmgsIDUwOiAkVmksIDUxOiAkVmosIDUyOiAkVmssIDUzOiAkVmwsIDU0OiAkVm0sIDU1OiAkVm4sIDU2OiAkVm8sIDU3OiAkVnAsIDU4OiAkVnEsIDU5OiAkVnIsIDYwOiAkVnMsIDYxOiAkVnQsIDYyOiAkVnUsIDYzOiAkVnYsIDY0OiAkVncsIDY1OiAkVngsIDY2OiAkVnksIDY3OiAkVnosIDY4OiAkVkEsIDY5OiAkVkIsIDcwOiAkVkMsIDcxOiAkVkQsIDcyOiAkVkUsIDczOiAkVkYsIDc0OiAkVkcgfSwgeyAxMzogNzAsIDE5OiAyMCwgMjA6IDIxLCAyMTogMjIsIDIyOiAkVjAsIDIzOiAkVjEsIDI0OiAkVjIsIDI2OiAkVjMsIDI4OiAkVjQsIDI5OiA0OSwgMzA6IDYxLCAzMjogNjIsIDM0OiAkVjUsIDM2OiAkVjYsIDM3OiAkVjcsIDM4OiAkVjgsIDM5OiAkVjksIDQwOiAkVmEsIDQxOiAkVmIsIDQzOiAyMywgNDQ6ICRWYywgNDU6ICRWZCwgNDY6ICRWZSwgNDc6ICRWZiwgNDg6ICRWZywgNDk6ICRWaCwgNTA6ICRWaSwgNTE6ICRWaiwgNTI6ICRWaywgNTM6ICRWbCwgNTQ6ICRWbSwgNTU6ICRWbiwgNTY6ICRWbywgNTc6ICRWcCwgNTg6ICRWcSwgNTk6ICRWciwgNjA6ICRWcywgNjE6ICRWdCwgNjI6ICRWdSwgNjM6ICRWdiwgNjQ6ICRWdywgNjU6ICRWeCwgNjY6ICRWeSwgNjc6ICRWeiwgNjg6ICRWQSwgNjk6ICRWQiwgNzA6ICRWQywgNzE6ICRWRCwgNzI6ICRWRSwgNzM6ICRWRiwgNzQ6ICRWRyB9LCB7IDEzOiA3MSwgMTk6IDIwLCAyMDogMjEsIDIxOiAyMiwgMjI6ICRWMCwgMjM6ICRWMSwgMjQ6ICRWMiwgMjY6ICRWMywgMjg6ICRWNCwgMjk6IDQ5LCAzMDogNjEsIDMyOiA2MiwgMzQ6ICRWNSwgMzY6ICRWNiwgMzc6ICRWNywgMzg6ICRWOCwgMzk6ICRWOSwgNDA6ICRWYSwgNDE6ICRWYiwgNDM6IDIzLCA0NDogJFZjLCA0NTogJFZkLCA0NjogJFZlLCA0NzogJFZmLCA0ODogJFZnLCA0OTogJFZoLCA1MDogJFZpLCA1MTogJFZqLCA1MjogJFZrLCA1MzogJFZsLCA1NDogJFZtLCA1NTogJFZuLCA1NjogJFZvLCA1NzogJFZwLCA1ODogJFZxLCA1OTogJFZyLCA2MDogJFZzLCA2MTogJFZ0LCA2MjogJFZ1LCA2MzogJFZ2LCA2NDogJFZ3LCA2NTogJFZ4LCA2NjogJFZ5LCA2NzogJFZ6LCA2ODogJFZBLCA2OTogJFZCLCA3MDogJFZDLCA3MTogJFZELCA3MjogJFZFLCA3MzogJFZGLCA3NDogJFZHIH0sIHsgMTM6IDcyLCAxOTogMjAsIDIwOiAyMSwgMjE6IDIyLCAyMjogJFYwLCAyMzogJFYxLCAyNDogJFYyLCAyNjogJFYzLCAyODogJFY0LCAyOTogNDksIDMwOiA2MSwgMzI6IDYyLCAzNDogJFY1LCAzNjogJFY2LCAzNzogJFY3LCAzODogJFY4LCAzOTogJFY5LCA0MDogJFZhLCA0MTogJFZiLCA0MzogMjMsIDQ0OiAkVmMsIDQ1OiAkVmQsIDQ2OiAkVmUsIDQ3OiAkVmYsIDQ4OiAkVmcsIDQ5OiAkVmgsIDUwOiAkVmksIDUxOiAkVmosIDUyOiAkVmssIDUzOiAkVmwsIDU0OiAkVm0sIDU1OiAkVm4sIDU2OiAkVm8sIDU3OiAkVnAsIDU4OiAkVnEsIDU5OiAkVnIsIDYwOiAkVnMsIDYxOiAkVnQsIDYyOiAkVnUsIDYzOiAkVnYsIDY0OiAkVncsIDY1OiAkVngsIDY2OiAkVnksIDY3OiAkVnosIDY4OiAkVkEsIDY5OiAkVkIsIDcwOiAkVkMsIDcxOiAkVkQsIDcyOiAkVkUsIDczOiAkVkYsIDc0OiAkVkcgfSwgeyAxMzogNzMsIDE5OiAyMCwgMjA6IDIxLCAyMTogMjIsIDIyOiAkVjAsIDIzOiAkVjEsIDI0OiAkVjIsIDI2OiAkVjMsIDI4OiAkVjQsIDI5OiA0OSwgMzA6IDYxLCAzMjogNjIsIDM0OiAkVjUsIDM2OiAkVjYsIDM3OiAkVjcsIDM4OiAkVjgsIDM5OiAkVjksIDQwOiAkVmEsIDQxOiAkVmIsIDQzOiAyMywgNDQ6ICRWYywgNDU6ICRWZCwgNDY6ICRWZSwgNDc6ICRWZiwgNDg6ICRWZywgNDk6ICRWaCwgNTA6ICRWaSwgNTE6ICRWaiwgNTI6ICRWaywgNTM6ICRWbCwgNTQ6ICRWbSwgNTU6ICRWbiwgNTY6ICRWbywgNTc6ICRWcCwgNTg6ICRWcSwgNTk6ICRWciwgNjA6ICRWcywgNjE6ICRWdCwgNjI6ICRWdSwgNjM6ICRWdiwgNjQ6ICRWdywgNjU6ICRWeCwgNjY6ICRWeSwgNjc6ICRWeiwgNjg6ICRWQSwgNjk6ICRWQiwgNzA6ICRWQywgNzE6ICRWRCwgNzI6ICRWRSwgNzM6ICRWRiwgNzQ6ICRWRyB9LCB7IDE0OiBbMSwgNzRdIH0sIG8oJFZILCBbMiwgMTNdLCB7IDQzOiAyMywgMjk6IDQ5LCAzMDogNjEsIDMyOiA2MiwgMjA6IDc1LCAzNDogJFY1LCAzNjogJFY2LCAzNzogJFY3LCAzODogJFY4LCAzOTogJFY5LCA0MDogJFZhLCA0MTogJFZiLCA0NDogJFZjLCA0NTogJFZkLCA0NjogJFZlLCA0NzogJFZmLCA0ODogJFZnLCA0OTogJFZoLCA1MDogJFZpLCA1MTogJFZqLCA1MjogJFZrLCA1MzogJFZsLCA1NDogJFZtLCA1NTogJFZuLCA1NjogJFZvLCA1NzogJFZwLCA1ODogJFZxLCA1OTogJFZyLCA2MDogJFZzLCA2MTogJFZ0LCA2MjogJFZ1LCA2MzogJFZ2LCA2NDogJFZ3LCA2NTogJFZ4LCA2NjogJFZ5LCA2NzogJFZ6LCA2ODogJFZBLCA2OTogJFZCLCA3MDogJFZDLCA3MTogJFZELCA3MjogJFZFLCA3MzogJFZGLCA3NDogJFZHIH0pLCBvKCRWSCwgWzIsIDE0XSksIG8oJFZJLCBbMiwgMTZdLCB7IDEyOiBbMSwgNzZdIH0pLCBvKCRWSCwgWzIsIDM2XSwgeyAxMjogWzEsIDc3XSB9KSwgbygkVkosIFsyLCAxOV0pLCBvKCRWSiwgWzIsIDIwXSksIHsgMjU6IFsxLCA3OF0gfSwgeyAyNzogWzEsIDc5XSB9LCBvKCRWSiwgWzIsIDIzXSksIHsgMzU6IDgwLCA3NTogODEsIDc2OiAkVkssIDc3OiAkVkwsIDc5OiAkVk0sIDgwOiAkVk4gfSwgeyAzNTogODYsIDc1OiA4MSwgNzY6ICRWSywgNzc6ICRWTCwgNzk6ICRWTSwgODA6ICRWTiB9LCB7IDM1OiA4NywgNzU6IDgxLCA3NjogJFZLLCA3NzogJFZMLCA3OTogJFZNLCA4MDogJFZOIH0sIHsgMzU6IDg4LCA3NTogODEsIDc2OiAkVkssIDc3OiAkVkwsIDc5OiAkVk0sIDgwOiAkVk4gfSwgeyAzNTogODksIDc1OiA4MSwgNzY6ICRWSywgNzc6ICRWTCwgNzk6ICRWTSwgODA6ICRWTiB9LCB7IDM1OiA5MCwgNzU6IDgxLCA3NjogJFZLLCA3NzogJFZMLCA3OTogJFZNLCA4MDogJFZOIH0sIHsgMzU6IDkxLCA3NTogODEsIDc2OiAkVkssIDc3OiAkVkwsIDc5OiAkVk0sIDgwOiAkVk4gfSwgeyAzNTogOTIsIDc1OiA4MSwgNzY6ICRWSywgNzc6ICRWTCwgNzk6ICRWTSwgODA6ICRWTiB9LCB7IDM1OiA5MywgNzU6IDgxLCA3NjogJFZLLCA3NzogJFZMLCA3OTogJFZNLCA4MDogJFZOIH0sIHsgMzU6IDk0LCA3NTogODEsIDc2OiAkVkssIDc3OiAkVkwsIDc5OiAkVk0sIDgwOiAkVk4gfSwgeyAzNTogOTUsIDc1OiA4MSwgNzY6ICRWSywgNzc6ICRWTCwgNzk6ICRWTSwgODA6ICRWTiB9LCB7IDM1OiA5NiwgNzU6IDgxLCA3NjogJFZLLCA3NzogJFZMLCA3OTogJFZNLCA4MDogJFZOIH0sIHsgMzU6IDk3LCA3NTogODEsIDc2OiAkVkssIDc3OiAkVkwsIDc5OiAkVk0sIDgwOiAkVk4gfSwgeyAzNTogOTgsIDc1OiA4MSwgNzY6ICRWSywgNzc6ICRWTCwgNzk6ICRWTSwgODA6ICRWTiB9LCB7IDM1OiA5OSwgNzU6IDgxLCA3NjogJFZLLCA3NzogJFZMLCA3OTogJFZNLCA4MDogJFZOIH0sIHsgMzU6IDEwMCwgNzU6IDgxLCA3NjogJFZLLCA3NzogJFZMLCA3OTogJFZNLCA4MDogJFZOIH0sIHsgMzU6IDEwMSwgNzU6IDgxLCA3NjogJFZLLCA3NzogJFZMLCA3OTogJFZNLCA4MDogJFZOIH0sIHsgMzU6IDEwMiwgNzU6IDgxLCA3NjogJFZLLCA3NzogJFZMLCA3OTogJFZNLCA4MDogJFZOIH0sIHsgMzU6IDEwMywgNzU6IDgxLCA3NjogJFZLLCA3NzogJFZMLCA3OTogJFZNLCA4MDogJFZOIH0sIHsgMzU6IDEwNCwgNzU6IDgxLCA3NjogJFZLLCA3NzogJFZMLCA3OTogJFZNLCA4MDogJFZOIH0sIG8oJFZPLCBbMiwgNTldKSwgeyAzNTogMTA1LCA3NTogODEsIDc2OiAkVkssIDc3OiAkVkwsIDc5OiAkVk0sIDgwOiAkVk4gfSwgeyAzNTogMTA2LCA3NTogODEsIDc2OiAkVkssIDc3OiAkVkwsIDc5OiAkVk0sIDgwOiAkVk4gfSwgeyAzNTogMTA3LCA3NTogODEsIDc2OiAkVkssIDc3OiAkVkwsIDc5OiAkVk0sIDgwOiAkVk4gfSwgeyAzNTogMTA4LCA3NTogODEsIDc2OiAkVkssIDc3OiAkVkwsIDc5OiAkVk0sIDgwOiAkVk4gfSwgeyAzNTogMTA5LCA3NTogODEsIDc2OiAkVkssIDc3OiAkVkwsIDc5OiAkVk0sIDgwOiAkVk4gfSwgeyAzNTogMTEwLCA3NTogODEsIDc2OiAkVkssIDc3OiAkVkwsIDc5OiAkVk0sIDgwOiAkVk4gfSwgeyAzNTogMTExLCA3NTogODEsIDc2OiAkVkssIDc3OiAkVkwsIDc5OiAkVk0sIDgwOiAkVk4gfSwgeyAzNTogMTEyLCA3NTogODEsIDc2OiAkVkssIDc3OiAkVkwsIDc5OiAkVk0sIDgwOiAkVk4gfSwgeyAzNTogMTEzLCA3NTogODEsIDc2OiAkVkssIDc3OiAkVkwsIDc5OiAkVk0sIDgwOiAkVk4gfSwgeyAzNTogMTE0LCA3NTogODEsIDc2OiAkVkssIDc3OiAkVkwsIDc5OiAkVk0sIDgwOiAkVk4gfSwgeyAzNTogMTE1LCA3NTogODEsIDc2OiAkVkssIDc3OiAkVkwsIDc5OiAkVk0sIDgwOiAkVk4gfSwgeyAyMDogMTE2LCAyOTogNDksIDMwOiA2MSwgMzI6IDYyLCAzNDogJFY1LCAzNjogJFY2LCAzNzogJFY3LCAzODogJFY4LCAzOTogJFY5LCA0MDogJFZhLCA0MTogJFZiLCA0MzogMjMsIDQ0OiAkVmMsIDQ1OiAkVmQsIDQ2OiAkVmUsIDQ3OiAkVmYsIDQ4OiAkVmcsIDQ5OiAkVmgsIDUwOiAkVmksIDUxOiAkVmosIDUyOiAkVmssIDUzOiAkVmwsIDU0OiAkVm0sIDU1OiAkVm4sIDU2OiAkVm8sIDU3OiAkVnAsIDU4OiAkVnEsIDU5OiAkVnIsIDYwOiAkVnMsIDYxOiAkVnQsIDYyOiAkVnUsIDYzOiAkVnYsIDY0OiAkVncsIDY1OiAkVngsIDY2OiAkVnksIDY3OiAkVnosIDY4OiAkVkEsIDY5OiAkVkIsIDcwOiAkVkMsIDcxOiAkVkQsIDcyOiAkVkUsIDczOiAkVkYsIDc0OiAkVkcgfSwgeyAxMjogWzEsIDExOF0sIDMzOiBbMSwgMTE3XSB9LCB7IDM1OiAxMTksIDc1OiA4MSwgNzY6ICRWSywgNzc6ICRWTCwgNzk6ICRWTSwgODA6ICRWTiB9LCB7IDM1OiAxMjAsIDc1OiA4MSwgNzY6ICRWSywgNzc6ICRWTCwgNzk6ICRWTSwgODA6ICRWTiB9LCB7IDM1OiAxMjEsIDc1OiA4MSwgNzY6ICRWSywgNzc6ICRWTCwgNzk6ICRWTSwgODA6ICRWTiB9LCB7IDM1OiAxMjIsIDc1OiA4MSwgNzY6ICRWSywgNzc6ICRWTCwgNzk6ICRWTSwgODA6ICRWTiB9LCB7IDM1OiAxMjMsIDc1OiA4MSwgNzY6ICRWSywgNzc6ICRWTCwgNzk6ICRWTSwgODA6ICRWTiB9LCB7IDM1OiAxMjQsIDc1OiA4MSwgNzY6ICRWSywgNzc6ICRWTCwgNzk6ICRWTSwgODA6ICRWTiB9LCB7IDM1OiAxMjUsIDc1OiA4MSwgNzY6ICRWSywgNzc6ICRWTCwgNzk6ICRWTSwgODA6ICRWTiB9LCB7IDE0OiBbMSwgMTI2XSB9LCB7IDE0OiBbMSwgMTI3XSB9LCB7IDE0OiBbMSwgMTI4XSB9LCB7IDE0OiBbMSwgMTI5XSB9LCB7IDE6IFsyLCA4XSB9LCBvKCRWSCwgWzIsIDE1XSksIG8oJFZJLCBbMiwgMTddLCB7IDIxOiAyMiwgMTk6IDEzMCwgMjI6ICRWMCwgMjM6ICRWMSwgMjQ6ICRWMiwgMjY6ICRWMywgMjg6ICRWNCB9KSwgbygkVkgsIFsyLCAzN10sIHsgMTk6IDIwLCAyMDogMjEsIDIxOiAyMiwgNDM6IDIzLCAyOTogNDksIDMwOiA2MSwgMzI6IDYyLCAxMzogMTMxLCAyMjogJFYwLCAyMzogJFYxLCAyNDogJFYyLCAyNjogJFYzLCAyODogJFY0LCAzNDogJFY1LCAzNjogJFY2LCAzNzogJFY3LCAzODogJFY4LCAzOTogJFY5LCA0MDogJFZhLCA0MTogJFZiLCA0NDogJFZjLCA0NTogJFZkLCA0NjogJFZlLCA0NzogJFZmLCA0ODogJFZnLCA0OTogJFZoLCA1MDogJFZpLCA1MTogJFZqLCA1MjogJFZrLCA1MzogJFZsLCA1NDogJFZtLCA1NTogJFZuLCA1NjogJFZvLCA1NzogJFZwLCA1ODogJFZxLCA1OTogJFZyLCA2MDogJFZzLCA2MTogJFZ0LCA2MjogJFZ1LCA2MzogJFZ2LCA2NDogJFZ3LCA2NTogJFZ4LCA2NjogJFZ5LCA2NzogJFZ6LCA2ODogJFZBLCA2OTogJFZCLCA3MDogJFZDLCA3MTogJFZELCA3MjogJFZFLCA3MzogJFZGLCA3NDogJFZHIH0pLCBvKCRWSiwgWzIsIDIxXSksIG8oJFZKLCBbMiwgMjJdKSwgbygkVk8sIFsyLCAzOV0pLCBvKCRWUCwgWzIsIDcxXSwgeyA3NTogODEsIDM1OiAxMzIsIDc2OiAkVkssIDc3OiAkVkwsIDc5OiAkVk0sIDgwOiAkVk4gfSksIG8oJFZRLCBbMiwgNzNdKSwgeyA3ODogWzEsIDEzM10gfSwgbygkVlEsIFsyLCA3NV0pLCBvKCRWUSwgWzIsIDc2XSksIG8oJFZPLCBbMiwgNDBdKSwgbygkVk8sIFsyLCA0MV0pLCBvKCRWTywgWzIsIDQyXSksIG8oJFZPLCBbMiwgNDNdKSwgbygkVk8sIFsyLCA0NF0pLCBvKCRWTywgWzIsIDQ1XSksIG8oJFZPLCBbMiwgNDZdKSwgbygkVk8sIFsyLCA0N10pLCBvKCRWTywgWzIsIDQ4XSksIG8oJFZPLCBbMiwgNDldKSwgbygkVk8sIFsyLCA1MF0pLCBvKCRWTywgWzIsIDUxXSksIG8oJFZPLCBbMiwgNTJdKSwgbygkVk8sIFsyLCA1M10pLCBvKCRWTywgWzIsIDU0XSksIG8oJFZPLCBbMiwgNTVdKSwgbygkVk8sIFsyLCA1Nl0pLCBvKCRWTywgWzIsIDU3XSksIG8oJFZPLCBbMiwgNThdKSwgbygkVk8sIFsyLCA2MF0pLCBvKCRWTywgWzIsIDYxXSksIG8oJFZPLCBbMiwgNjJdKSwgbygkVk8sIFsyLCA2M10pLCBvKCRWTywgWzIsIDY0XSksIG8oJFZPLCBbMiwgNjVdKSwgbygkVk8sIFsyLCA2Nl0pLCBvKCRWTywgWzIsIDY3XSksIG8oJFZPLCBbMiwgNjhdKSwgbygkVk8sIFsyLCA2OV0pLCBvKCRWTywgWzIsIDcwXSksIHsgMzE6IDEzNCwgNDI6IFsxLCAxMzVdIH0sIHsgMTI6IFsxLCAxMzZdIH0sIHsgMzM6IFsxLCAxMzddIH0sIG8oJFZSLCBbMiwgMjhdKSwgbygkVlIsIFsyLCAyOV0pLCBvKCRWUiwgWzIsIDMwXSksIG8oJFZSLCBbMiwgMzFdKSwgbygkVlIsIFsyLCAzMl0pLCBvKCRWUiwgWzIsIDMzXSksIG8oJFZSLCBbMiwgMzRdKSwgeyAxOiBbMiwgOV0gfSwgeyAxOiBbMiwgMTBdIH0sIHsgMTogWzIsIDExXSB9LCB7IDE6IFsyLCAxMl0gfSwgbygkVkksIFsyLCAxOF0pLCBvKCRWSCwgWzIsIDM4XSksIG8oJFZQLCBbMiwgNzJdKSwgbygkVlEsIFsyLCA3NF0pLCBvKCRWTywgWzIsIDI0XSksIG8oJFZPLCBbMiwgMzVdKSwgbygkVlMsIFsyLCAyNV0pLCBvKCRWUywgWzIsIDI2XSwgeyAxMjogWzEsIDEzOF0gfSksIG8oJFZTLCBbMiwgMjddKV0sXG4gICAgZGVmYXVsdEFjdGlvbnM6IHsgMjogWzIsIDFdLCAzOiBbMiwgMl0sIDQ6IFsyLCA3XSwgNTogWzIsIDNdLCA2OiBbMiwgNF0sIDc6IFsyLCA1XSwgODogWzIsIDZdLCA3NDogWzIsIDhdLCAxMjY6IFsyLCA5XSwgMTI3OiBbMiwgMTBdLCAxMjg6IFsyLCAxMV0sIDEyOTogWzIsIDEyXSB9LFxuICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XG4gICAgICBpZiAoaGFzaC5yZWNvdmVyYWJsZSkge1xuICAgICAgICB0aGlzLnRyYWNlKHN0cik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3Ioc3RyKTtcbiAgICAgICAgZXJyb3IuaGFzaCA9IGhhc2g7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsIHN0YWNrID0gWzBdLCB0c3RhY2sgPSBbXSwgdnN0YWNrID0gW251bGxdLCBsc3RhY2sgPSBbXSwgdGFibGUgPSB0aGlzLnRhYmxlLCB5eXRleHQgPSBcIlwiLCB5eWxpbmVubyA9IDAsIHl5bGVuZyA9IDAsIFRFUlJPUiA9IDIsIEVPRiA9IDE7XG4gICAgICB2YXIgYXJncyA9IGxzdGFjay5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICB2YXIgbGV4ZXIyID0gT2JqZWN0LmNyZWF0ZSh0aGlzLmxleGVyKTtcbiAgICAgIHZhciBzaGFyZWRTdGF0ZSA9IHsgeXk6IHt9IH07XG4gICAgICBmb3IgKHZhciBrIGluIHRoaXMueXkpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnl5LCBrKSkge1xuICAgICAgICAgIHNoYXJlZFN0YXRlLnl5W2tdID0gdGhpcy55eVtrXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV4ZXIyLnNldElucHV0KGlucHV0LCBzaGFyZWRTdGF0ZS55eSk7XG4gICAgICBzaGFyZWRTdGF0ZS55eS5sZXhlciA9IGxleGVyMjtcbiAgICAgIHNoYXJlZFN0YXRlLnl5LnBhcnNlciA9IHRoaXM7XG4gICAgICBpZiAodHlwZW9mIGxleGVyMi55eWxsb2MgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBsZXhlcjIueXlsbG9jID0ge307XG4gICAgICB9XG4gICAgICB2YXIgeXlsb2MgPSBsZXhlcjIueXlsbG9jO1xuICAgICAgbHN0YWNrLnB1c2goeXlsb2MpO1xuICAgICAgdmFyIHJhbmdlcyA9IGxleGVyMi5vcHRpb25zICYmIGxleGVyMi5vcHRpb25zLnJhbmdlcztcbiAgICAgIGlmICh0eXBlb2Ygc2hhcmVkU3RhdGUueXkucGFyc2VFcnJvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRoaXMucGFyc2VFcnJvciA9IHNoYXJlZFN0YXRlLnl5LnBhcnNlRXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhcnNlRXJyb3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykucGFyc2VFcnJvcjtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGxleCgpIHtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB0b2tlbiA9IHRzdGFjay5wb3AoKSB8fCBsZXhlcjIubGV4KCkgfHwgRU9GO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgaWYgKHRva2VuIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHRzdGFjayA9IHRva2VuO1xuICAgICAgICAgICAgdG9rZW4gPSB0c3RhY2sucG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRva2VuID0gc2VsZi5zeW1ib2xzX1t0b2tlbl0gfHwgdG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgfVxuICAgICAgdmFyIHN5bWJvbCwgc3RhdGUsIGFjdGlvbiwgciwgeXl2YWwgPSB7fSwgcCwgbGVuLCBuZXdTdGF0ZSwgZXhwZWN0ZWQ7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBzdGF0ZSA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0QWN0aW9uc1tzdGF0ZV0pIHtcbiAgICAgICAgICBhY3Rpb24gPSB0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc3ltYm9sID09PSBudWxsIHx8IHR5cGVvZiBzeW1ib2wgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgc3ltYm9sID0gbGV4KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFjdGlvbiA9IHRhYmxlW3N0YXRlXSAmJiB0YWJsZVtzdGF0ZV1bc3ltYm9sXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhYWN0aW9uLmxlbmd0aCB8fCAhYWN0aW9uWzBdKSB7XG4gICAgICAgICAgdmFyIGVyclN0ciA9IFwiXCI7XG4gICAgICAgICAgZXhwZWN0ZWQgPSBbXTtcbiAgICAgICAgICBmb3IgKHAgaW4gdGFibGVbc3RhdGVdKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ZXJtaW5hbHNfW3BdICYmIHAgPiBURVJST1IpIHtcbiAgICAgICAgICAgICAgZXhwZWN0ZWQucHVzaChcIidcIiArIHRoaXMudGVybWluYWxzX1twXSArIFwiJ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGxleGVyMi5zaG93UG9zaXRpb24pIHtcbiAgICAgICAgICAgIGVyclN0ciA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArICh5eWxpbmVubyArIDEpICsgXCI6XFxuXCIgKyBsZXhlcjIuc2hvd1Bvc2l0aW9uKCkgKyBcIlxcbkV4cGVjdGluZyBcIiArIGV4cGVjdGVkLmpvaW4oXCIsIFwiKSArIFwiLCBnb3QgJ1wiICsgKHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCkgKyBcIidcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjogVW5leHBlY3RlZCBcIiArIChzeW1ib2wgPT0gRU9GID8gXCJlbmQgb2YgaW5wdXRcIiA6IFwiJ1wiICsgKHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCkgKyBcIidcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucGFyc2VFcnJvcihlcnJTdHIsIHtcbiAgICAgICAgICAgIHRleHQ6IGxleGVyMi5tYXRjaCxcbiAgICAgICAgICAgIHRva2VuOiB0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wsXG4gICAgICAgICAgICBsaW5lOiBsZXhlcjIueXlsaW5lbm8sXG4gICAgICAgICAgICBsb2M6IHl5bG9jLFxuICAgICAgICAgICAgZXhwZWN0ZWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uWzBdIGluc3RhbmNlb2YgQXJyYXkgJiYgYWN0aW9uLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJzZSBFcnJvcjogbXVsdGlwbGUgYWN0aW9ucyBwb3NzaWJsZSBhdCBzdGF0ZTogXCIgKyBzdGF0ZSArIFwiLCB0b2tlbjogXCIgKyBzeW1ib2wpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uWzBdKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgc3RhY2sucHVzaChzeW1ib2wpO1xuICAgICAgICAgICAgdnN0YWNrLnB1c2gobGV4ZXIyLnl5dGV4dCk7XG4gICAgICAgICAgICBsc3RhY2sucHVzaChsZXhlcjIueXlsbG9jKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2goYWN0aW9uWzFdKTtcbiAgICAgICAgICAgIHN5bWJvbCA9IG51bGw7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHl5bGVuZyA9IGxleGVyMi55eWxlbmc7XG4gICAgICAgICAgICAgIHl5dGV4dCA9IGxleGVyMi55eXRleHQ7XG4gICAgICAgICAgICAgIHl5bGluZW5vID0gbGV4ZXIyLnl5bGluZW5vO1xuICAgICAgICAgICAgICB5eWxvYyA9IGxleGVyMi55eWxsb2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBsZW4gPSB0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzFdO1xuICAgICAgICAgICAgeXl2YWwuJCA9IHZzdGFja1t2c3RhY2subGVuZ3RoIC0gbGVuXTtcbiAgICAgICAgICAgIHl5dmFsLl8kID0ge1xuICAgICAgICAgICAgICBmaXJzdF9saW5lOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICAgIGxhc3RfbGluZTogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICAgIGxhc3RfY29sdW1uOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLmxhc3RfY29sdW1uXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHJhbmdlcykge1xuICAgICAgICAgICAgICB5eXZhbC5fJC5yYW5nZSA9IFtcbiAgICAgICAgICAgICAgICBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLnJhbmdlWzBdLFxuICAgICAgICAgICAgICAgIGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ucmFuZ2VbMV1cbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHIgPSB0aGlzLnBlcmZvcm1BY3Rpb24uYXBwbHkoeXl2YWwsIFtcbiAgICAgICAgICAgICAgeXl0ZXh0LFxuICAgICAgICAgICAgICB5eWxlbmcsXG4gICAgICAgICAgICAgIHl5bGluZW5vLFxuICAgICAgICAgICAgICBzaGFyZWRTdGF0ZS55eSxcbiAgICAgICAgICAgICAgYWN0aW9uWzFdLFxuICAgICAgICAgICAgICB2c3RhY2ssXG4gICAgICAgICAgICAgIGxzdGFja1xuICAgICAgICAgICAgXS5jb25jYXQoYXJncykpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICBzdGFjayA9IHN0YWNrLnNsaWNlKDAsIC0xICogbGVuICogMik7XG4gICAgICAgICAgICAgIHZzdGFjayA9IHZzdGFjay5zbGljZSgwLCAtMSAqIGxlbik7XG4gICAgICAgICAgICAgIGxzdGFjayA9IGxzdGFjay5zbGljZSgwLCAtMSAqIGxlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFjay5wdXNoKHRoaXMucHJvZHVjdGlvbnNfW2FjdGlvblsxXV1bMF0pO1xuICAgICAgICAgICAgdnN0YWNrLnB1c2goeXl2YWwuJCk7XG4gICAgICAgICAgICBsc3RhY2sucHVzaCh5eXZhbC5fJCk7XG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHRhYmxlW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDJdXVtzdGFja1tzdGFjay5sZW5ndGggLSAxXV07XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5ld1N0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIHZhciBsZXhlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZXhlcjIgPSB7XG4gICAgICBFT0Y6IDEsXG4gICAgICBwYXJzZUVycm9yOiBmdW5jdGlvbiBwYXJzZUVycm9yKHN0ciwgaGFzaCkge1xuICAgICAgICBpZiAodGhpcy55eS5wYXJzZXIpIHtcbiAgICAgICAgICB0aGlzLnl5LnBhcnNlci5wYXJzZUVycm9yKHN0ciwgaGFzaCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0cik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyByZXNldHMgdGhlIGxleGVyLCBzZXRzIG5ldyBpbnB1dFxuICAgICAgc2V0SW5wdXQ6IGZ1bmN0aW9uKGlucHV0LCB5eSkge1xuICAgICAgICB0aGlzLnl5ID0geXkgfHwgdGhpcy55eSB8fCB7fTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5fbW9yZSA9IHRoaXMuX2JhY2t0cmFjayA9IHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnl5bGluZW5vID0gdGhpcy55eWxlbmcgPSAwO1xuICAgICAgICB0aGlzLnl5dGV4dCA9IHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2ggPSBcIlwiO1xuICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrID0gW1wiSU5JVElBTFwiXTtcbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IDAsXG4gICAgICAgICAgbGFzdF9saW5lOiAxLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiAwXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbMCwgMF07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBjb25zdW1lcyBhbmQgcmV0dXJucyBvbmUgY2hhciBmcm9tIHRoZSBpbnB1dFxuICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLl9pbnB1dFswXTtcbiAgICAgICAgdGhpcy55eXRleHQgKz0gY2g7XG4gICAgICAgIHRoaXMueXlsZW5nKys7XG4gICAgICAgIHRoaXMub2Zmc2V0Kys7XG4gICAgICAgIHRoaXMubWF0Y2ggKz0gY2g7XG4gICAgICAgIHRoaXMubWF0Y2hlZCArPSBjaDtcbiAgICAgICAgdmFyIGxpbmVzID0gY2gubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO1xuICAgICAgICBpZiAobGluZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGluZW5vKys7XG4gICAgICAgICAgdGhpcy55eWxsb2MubGFzdF9saW5lKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MubGFzdF9jb2x1bW4rKztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlWzFdKys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZSgxKTtcbiAgICAgICAgcmV0dXJuIGNoO1xuICAgICAgfSxcbiAgICAgIC8vIHVuc2hpZnRzIG9uZSBjaGFyIChvciBhIHN0cmluZykgaW50byB0aGUgaW5wdXRcbiAgICAgIHVucHV0OiBmdW5jdGlvbihjaCkge1xuICAgICAgICB2YXIgbGVuID0gY2gubGVuZ3RoO1xuICAgICAgICB2YXIgbGluZXMgPSBjaC5zcGxpdCgvKD86XFxyXFxuP3xcXG4pL2cpO1xuICAgICAgICB0aGlzLl9pbnB1dCA9IGNoICsgdGhpcy5faW5wdXQ7XG4gICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy55eXRleHQuc3Vic3RyKDAsIHRoaXMueXl0ZXh0Lmxlbmd0aCAtIGxlbik7XG4gICAgICAgIHRoaXMub2Zmc2V0IC09IGxlbjtcbiAgICAgICAgdmFyIG9sZExpbmVzID0gdGhpcy5tYXRjaC5zcGxpdCgvKD86XFxyXFxuP3xcXG4pL2cpO1xuICAgICAgICB0aGlzLm1hdGNoID0gdGhpcy5tYXRjaC5zdWJzdHIoMCwgdGhpcy5tYXRjaC5sZW5ndGggLSAxKTtcbiAgICAgICAgdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gMSk7XG4gICAgICAgIGlmIChsaW5lcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy55eWxpbmVubyAtPSBsaW5lcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gdGhpcy55eWxsb2MucmFuZ2U7XG4gICAgICAgIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyAobGluZXMubGVuZ3RoID09PSBvbGRMaW5lcy5sZW5ndGggPyB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gOiAwKSArIG9sZExpbmVzW29sZExpbmVzLmxlbmd0aCAtIGxpbmVzLmxlbmd0aF0ubGVuZ3RoIC0gbGluZXNbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIC0gbGVuXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbclswXSwgclswXSArIHRoaXMueXlsZW5nIC0gbGVuXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnl5bGVuZyA9IHRoaXMueXl0ZXh0Lmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIGNhY2hlcyBtYXRjaGVkIHRleHQgYW5kIGFwcGVuZHMgaXQgb24gbmV4dCBhY3Rpb25cbiAgICAgIG1vcmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLl9tb3JlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIHNpZ25hbHMgdGhlIGxleGVyIHRoYXQgdGhpcyBydWxlIGZhaWxzIHRvIG1hdGNoIHRoZSBpbnB1dCwgc28gdGhlIG5leHQgbWF0Y2hpbmcgcnVsZSAocmVnZXgpIHNob3VsZCBiZSB0ZXN0ZWQgaW5zdGVhZC5cbiAgICAgIHJlamVjdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgdGhpcy5fYmFja3RyYWNrID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVycm9yKFwiTGV4aWNhbCBlcnJvciBvbiBsaW5lIFwiICsgKHRoaXMueXlsaW5lbm8gKyAxKSArIFwiLiBZb3UgY2FuIG9ubHkgaW52b2tlIHJlamVjdCgpIGluIHRoZSBsZXhlciB3aGVuIHRoZSBsZXhlciBpcyBvZiB0aGUgYmFja3RyYWNraW5nIHBlcnN1YXNpb24gKG9wdGlvbnMuYmFja3RyYWNrX2xleGVyID0gdHJ1ZSkuXFxuXCIgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7XG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICBsaW5lOiB0aGlzLnl5bGluZW5vXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gcmV0YWluIGZpcnN0IG4gY2hhcmFjdGVycyBvZiB0aGUgbWF0Y2hcbiAgICAgIGxlc3M6IGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgdGhpcy51bnB1dCh0aGlzLm1hdGNoLnNsaWNlKG4pKTtcbiAgICAgIH0sXG4gICAgICAvLyBkaXNwbGF5cyBhbHJlYWR5IG1hdGNoZWQgaW5wdXQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICBwYXN0SW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGFzdCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIHRoaXMubWF0Y2gubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIChwYXN0Lmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpICsgcGFzdC5zdWJzdHIoLTIwKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICB9LFxuICAgICAgLy8gZGlzcGxheXMgdXBjb21pbmcgaW5wdXQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICB1cGNvbWluZ0lucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG5leHQgPSB0aGlzLm1hdGNoO1xuICAgICAgICBpZiAobmV4dC5sZW5ndGggPCAyMCkge1xuICAgICAgICAgIG5leHQgKz0gdGhpcy5faW5wdXQuc3Vic3RyKDAsIDIwIC0gbmV4dC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobmV4dC5zdWJzdHIoMCwgMjApICsgKG5leHQubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikpLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sXG4gICAgICAvLyBkaXNwbGF5cyB0aGUgY2hhcmFjdGVyIHBvc2l0aW9uIHdoZXJlIHRoZSBsZXhpbmcgZXJyb3Igb2NjdXJyZWQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICBzaG93UG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcHJlID0gdGhpcy5wYXN0SW5wdXQoKTtcbiAgICAgICAgdmFyIGMyID0gbmV3IEFycmF5KHByZS5sZW5ndGggKyAxKS5qb2luKFwiLVwiKTtcbiAgICAgICAgcmV0dXJuIHByZSArIHRoaXMudXBjb21pbmdJbnB1dCgpICsgXCJcXG5cIiArIGMyICsgXCJeXCI7XG4gICAgICB9LFxuICAgICAgLy8gdGVzdCB0aGUgbGV4ZWQgdG9rZW46IHJldHVybiBGQUxTRSB3aGVuIG5vdCBhIG1hdGNoLCBvdGhlcndpc2UgcmV0dXJuIHRva2VuXG4gICAgICB0ZXN0X21hdGNoOiBmdW5jdGlvbihtYXRjaCwgaW5kZXhlZF9ydWxlKSB7XG4gICAgICAgIHZhciB0b2tlbiwgbGluZXMsIGJhY2t1cDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICBiYWNrdXAgPSB7XG4gICAgICAgICAgICB5eWxpbmVubzogdGhpcy55eWxpbmVubyxcbiAgICAgICAgICAgIHl5bGxvYzoge1xuICAgICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMubGFzdF9saW5lLFxuICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeXl0ZXh0OiB0aGlzLnl5dGV4dCxcbiAgICAgICAgICAgIG1hdGNoOiB0aGlzLm1hdGNoLFxuICAgICAgICAgICAgbWF0Y2hlczogdGhpcy5tYXRjaGVzLFxuICAgICAgICAgICAgbWF0Y2hlZDogdGhpcy5tYXRjaGVkLFxuICAgICAgICAgICAgeXlsZW5nOiB0aGlzLnl5bGVuZyxcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgICBfbW9yZTogdGhpcy5fbW9yZSxcbiAgICAgICAgICAgIF9pbnB1dDogdGhpcy5faW5wdXQsXG4gICAgICAgICAgICB5eTogdGhpcy55eSxcbiAgICAgICAgICAgIGNvbmRpdGlvblN0YWNrOiB0aGlzLmNvbmRpdGlvblN0YWNrLnNsaWNlKDApLFxuICAgICAgICAgICAgZG9uZTogdGhpcy5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgICAgYmFja3VwLnl5bGxvYy5yYW5nZSA9IHRoaXMueXlsbG9jLnJhbmdlLnNsaWNlKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsaW5lcyA9IG1hdGNoWzBdLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgaWYgKGxpbmVzKSB7XG4gICAgICAgICAgdGhpcy55eWxpbmVubyArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5sZW5ndGggLSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIG1hdGNoWzBdLmxlbmd0aFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnl5dGV4dCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gbWF0Y2g7XG4gICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3RoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZ107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9yZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICB0aGlzLm1hdGNoZWQgKz0gbWF0Y2hbMF07XG4gICAgICAgIHRva2VuID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodGhpcywgdGhpcy55eSwgdGhpcywgaW5kZXhlZF9ydWxlLCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pO1xuICAgICAgICBpZiAodGhpcy5kb25lICYmIHRoaXMuX2lucHV0KSB7XG4gICAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgIGZvciAodmFyIGsgaW4gYmFja3VwKSB7XG4gICAgICAgICAgICB0aGlzW2tdID0gYmFja3VwW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiBuZXh0IG1hdGNoIGluIGlucHV0XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lucHV0KSB7XG4gICAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG9rZW4sIG1hdGNoLCB0ZW1wTWF0Y2gsIGluZGV4O1xuICAgICAgICBpZiAoIXRoaXMuX21vcmUpIHtcbiAgICAgICAgICB0aGlzLnl5dGV4dCA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5tYXRjaCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJ1bGVzID0gdGhpcy5fY3VycmVudFJ1bGVzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0ZW1wTWF0Y2ggPSB0aGlzLl9pbnB1dC5tYXRjaCh0aGlzLnJ1bGVzW3J1bGVzW2ldXSk7XG4gICAgICAgICAgaWYgKHRlbXBNYXRjaCAmJiAoIW1hdGNoIHx8IHRlbXBNYXRjaFswXS5sZW5ndGggPiBtYXRjaFswXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBtYXRjaCA9IHRlbXBNYXRjaDtcbiAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgICAgIHRva2VuID0gdGhpcy50ZXN0X21hdGNoKHRlbXBNYXRjaCwgcnVsZXNbaV0pO1xuICAgICAgICAgICAgICBpZiAodG9rZW4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuZmxleCkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdG9rZW4gPSB0aGlzLnRlc3RfbWF0Y2gobWF0Y2gsIHJ1bGVzW2luZGV4XSk7XG4gICAgICAgICAgaWYgKHRva2VuICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lucHV0ID09PSBcIlwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFVucmVjb2duaXplZCB0ZXh0LlxcblwiICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggdGhhdCBoYXMgYSB0b2tlblxuICAgICAgbGV4OiBmdW5jdGlvbiBsZXgoKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5uZXh0KCk7XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubGV4KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBhY3RpdmF0ZXMgYSBuZXcgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIChwdXNoZXMgdGhlIG5ldyBsZXhlciBjb25kaXRpb24gc3RhdGUgb250byB0aGUgY29uZGl0aW9uIHN0YWNrKVxuICAgICAgYmVnaW46IGZ1bmN0aW9uIGJlZ2luKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrLnB1c2goY29uZGl0aW9uKTtcbiAgICAgIH0sXG4gICAgICAvLyBwb3AgdGhlIHByZXZpb3VzbHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvZmYgdGhlIGNvbmRpdGlvbiBzdGFja1xuICAgICAgcG9wU3RhdGU6IGZ1bmN0aW9uIHBvcFN0YXRlKCkge1xuICAgICAgICB2YXIgbiA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKG4gPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbMF07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBwcm9kdWNlIHRoZSBsZXhlciBydWxlIHNldCB3aGljaCBpcyBhY3RpdmUgZm9yIHRoZSBjdXJyZW50bHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZVxuICAgICAgX2N1cnJlbnRSdWxlczogZnVuY3Rpb24gX2N1cnJlbnRSdWxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoICYmIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbnNbdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdXS5ydWxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zW1wiSU5JVElBTFwiXS5ydWxlcztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGU7IHdoZW4gYW4gaW5kZXggYXJndW1lbnQgaXMgcHJvdmlkZWQgaXQgcHJvZHVjZXMgdGhlIE4tdGggcHJldmlvdXMgY29uZGl0aW9uIHN0YXRlLCBpZiBhdmFpbGFibGVcbiAgICAgIHRvcFN0YXRlOiBmdW5jdGlvbiB0b3BTdGF0ZShuKSB7XG4gICAgICAgIG4gPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDEgLSBNYXRoLmFicyhuIHx8IDApO1xuICAgICAgICBpZiAobiA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbbl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiSU5JVElBTFwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gYWxpYXMgZm9yIGJlZ2luKGNvbmRpdGlvbilcbiAgICAgIHB1c2hTdGF0ZTogZnVuY3Rpb24gcHVzaFN0YXRlKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmJlZ2luKGNvbmRpdGlvbik7XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIHRoZSBudW1iZXIgb2Ygc3RhdGVzIGN1cnJlbnRseSBvbiB0aGUgc3RhY2tcbiAgICAgIHN0YXRlU3RhY2tTaXplOiBmdW5jdGlvbiBzdGF0ZVN0YWNrU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoO1xuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHt9LFxuICAgICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24gYW5vbnltb3VzKHl5LCB5eV8sICRhdm9pZGluZ19uYW1lX2NvbGxpc2lvbnMsIFlZX1NUQVJUKSB7XG4gICAgICAgIHN3aXRjaCAoJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucykge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiA2O1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiA3O1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiA4O1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiA5O1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHJldHVybiAyMjtcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICByZXR1cm4gMjM7XG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImFjY190aXRsZVwiKTtcbiAgICAgICAgICAgIHJldHVybiAyNDtcbiAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfdGl0bGVfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiYWNjX2Rlc2NyXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDI2O1xuICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiBcImFjY19kZXNjcl92YWx1ZVwiO1xuICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiYWNjX2Rlc2NyX211bHRpbGluZVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZVwiO1xuICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgYztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICByZXR1cm4gMTI7XG4gICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICByZXR1cm4gMTE7XG4gICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgIHJldHVybiAxNTtcbiAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICAgcmV0dXJuIDE2O1xuICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICByZXR1cm4gMTc7XG4gICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgIHJldHVybiAxODtcbiAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcInBlcnNvbl9leHRcIik7XG4gICAgICAgICAgICByZXR1cm4gNDU7XG4gICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJwZXJzb25cIik7XG4gICAgICAgICAgICByZXR1cm4gNDQ7XG4gICAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJzeXN0ZW1fZXh0X3F1ZXVlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDUxO1xuICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwic3lzdGVtX2V4dF9kYlwiKTtcbiAgICAgICAgICAgIHJldHVybiA1MDtcbiAgICAgICAgICBjYXNlIDI2OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcInN5c3RlbV9leHRcIik7XG4gICAgICAgICAgICByZXR1cm4gNDk7XG4gICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJzeXN0ZW1fcXVldWVcIik7XG4gICAgICAgICAgICByZXR1cm4gNDg7XG4gICAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJzeXN0ZW1fZGJcIik7XG4gICAgICAgICAgICByZXR1cm4gNDc7XG4gICAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJzeXN0ZW1cIik7XG4gICAgICAgICAgICByZXR1cm4gNDY7XG4gICAgICAgICAgY2FzZSAzMDpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJib3VuZGFyeVwiKTtcbiAgICAgICAgICAgIHJldHVybiAzNztcbiAgICAgICAgICBjYXNlIDMxOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImVudGVycHJpc2VfYm91bmRhcnlcIik7XG4gICAgICAgICAgICByZXR1cm4gMzQ7XG4gICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJzeXN0ZW1fYm91bmRhcnlcIik7XG4gICAgICAgICAgICByZXR1cm4gMzY7XG4gICAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJjb250YWluZXJfZXh0X3F1ZXVlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDU3O1xuICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiY29udGFpbmVyX2V4dF9kYlwiKTtcbiAgICAgICAgICAgIHJldHVybiA1NjtcbiAgICAgICAgICBjYXNlIDM1OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImNvbnRhaW5lcl9leHRcIik7XG4gICAgICAgICAgICByZXR1cm4gNTU7XG4gICAgICAgICAgY2FzZSAzNjpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJjb250YWluZXJfcXVldWVcIik7XG4gICAgICAgICAgICByZXR1cm4gNTQ7XG4gICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJjb250YWluZXJfZGJcIik7XG4gICAgICAgICAgICByZXR1cm4gNTM7XG4gICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJjb250YWluZXJcIik7XG4gICAgICAgICAgICByZXR1cm4gNTI7XG4gICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJjb250YWluZXJfYm91bmRhcnlcIik7XG4gICAgICAgICAgICByZXR1cm4gMzg7XG4gICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJjb21wb25lbnRfZXh0X3F1ZXVlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDYzO1xuICAgICAgICAgIGNhc2UgNDE6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiY29tcG9uZW50X2V4dF9kYlwiKTtcbiAgICAgICAgICAgIHJldHVybiA2MjtcbiAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImNvbXBvbmVudF9leHRcIik7XG4gICAgICAgICAgICByZXR1cm4gNjE7XG4gICAgICAgICAgY2FzZSA0MzpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJjb21wb25lbnRfcXVldWVcIik7XG4gICAgICAgICAgICByZXR1cm4gNjA7XG4gICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJjb21wb25lbnRfZGJcIik7XG4gICAgICAgICAgICByZXR1cm4gNTk7XG4gICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJjb21wb25lbnRcIik7XG4gICAgICAgICAgICByZXR1cm4gNTg7XG4gICAgICAgICAgY2FzZSA0NjpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJub2RlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDM5O1xuICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwibm9kZVwiKTtcbiAgICAgICAgICAgIHJldHVybiAzOTtcbiAgICAgICAgICBjYXNlIDQ4OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcIm5vZGVfbFwiKTtcbiAgICAgICAgICAgIHJldHVybiA0MDtcbiAgICAgICAgICBjYXNlIDQ5OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcIm5vZGVfclwiKTtcbiAgICAgICAgICAgIHJldHVybiA0MTtcbiAgICAgICAgICBjYXNlIDUwOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcInJlbFwiKTtcbiAgICAgICAgICAgIHJldHVybiA2NDtcbiAgICAgICAgICBjYXNlIDUxOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImJpcmVsXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDY1O1xuICAgICAgICAgIGNhc2UgNTI6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwicmVsX3VcIik7XG4gICAgICAgICAgICByZXR1cm4gNjY7XG4gICAgICAgICAgY2FzZSA1MzpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJyZWxfdVwiKTtcbiAgICAgICAgICAgIHJldHVybiA2NjtcbiAgICAgICAgICBjYXNlIDU0OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcInJlbF9kXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDY3O1xuICAgICAgICAgIGNhc2UgNTU6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwicmVsX2RcIik7XG4gICAgICAgICAgICByZXR1cm4gNjc7XG4gICAgICAgICAgY2FzZSA1NjpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJyZWxfbFwiKTtcbiAgICAgICAgICAgIHJldHVybiA2ODtcbiAgICAgICAgICBjYXNlIDU3OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcInJlbF9sXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDY4O1xuICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwicmVsX3JcIik7XG4gICAgICAgICAgICByZXR1cm4gNjk7XG4gICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJyZWxfclwiKTtcbiAgICAgICAgICAgIHJldHVybiA2OTtcbiAgICAgICAgICBjYXNlIDYwOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcInJlbF9iXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDcwO1xuICAgICAgICAgIGNhc2UgNjE6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwicmVsX2luZGV4XCIpO1xuICAgICAgICAgICAgcmV0dXJuIDcxO1xuICAgICAgICAgIGNhc2UgNjI6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwidXBkYXRlX2VsX3N0eWxlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDcyO1xuICAgICAgICAgIGNhc2UgNjM6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwidXBkYXRlX3JlbF9zdHlsZVwiKTtcbiAgICAgICAgICAgIHJldHVybiA3MztcbiAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcInVwZGF0ZV9sYXlvdXRfY29uZmlnXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDc0O1xuICAgICAgICAgIGNhc2UgNjU6XG4gICAgICAgICAgICByZXR1cm4gXCJFT0ZfSU5fU1RSVUNUXCI7XG4gICAgICAgICAgY2FzZSA2NjpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJhdHRyaWJ1dGVcIik7XG4gICAgICAgICAgICByZXR1cm4gXCJBVFRSSUJVVEVfRU1QVFlcIjtcbiAgICAgICAgICBjYXNlIDY3OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImF0dHJpYnV0ZVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNjg6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDY5OlxuICAgICAgICAgICAgcmV0dXJuIDgwO1xuICAgICAgICAgIGNhc2UgNzA6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDcxOlxuICAgICAgICAgICAgcmV0dXJuIDgwO1xuICAgICAgICAgIGNhc2UgNzI6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwic3RyaW5nXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA3MzpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNzQ6XG4gICAgICAgICAgICByZXR1cm4gXCJTVFJcIjtcbiAgICAgICAgICBjYXNlIDc1OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcInN0cmluZ19rdlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNzY6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwic3RyaW5nX2t2X2tleVwiKTtcbiAgICAgICAgICAgIHJldHVybiBcIlNUUl9LRVlcIjtcbiAgICAgICAgICBjYXNlIDc3OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5iZWdpbihcInN0cmluZ19rdl92YWx1ZVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNzg6XG4gICAgICAgICAgICByZXR1cm4gXCJTVFJfVkFMVUVcIjtcbiAgICAgICAgICBjYXNlIDc5OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA4MDpcbiAgICAgICAgICAgIHJldHVybiBcIlNUUlwiO1xuICAgICAgICAgIGNhc2UgODE6XG4gICAgICAgICAgICByZXR1cm4gXCJMQlJBQ0VcIjtcbiAgICAgICAgICBjYXNlIDgyOlxuICAgICAgICAgICAgcmV0dXJuIFwiUkJSQUNFXCI7XG4gICAgICAgICAgY2FzZSA4MzpcbiAgICAgICAgICAgIHJldHVybiBcIlNQQUNFXCI7XG4gICAgICAgICAgY2FzZSA4NDpcbiAgICAgICAgICAgIHJldHVybiBcIkVPTFwiO1xuICAgICAgICAgIGNhc2UgODU6XG4gICAgICAgICAgICByZXR1cm4gMTQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBydWxlczogWy9eKD86LipkaXJlY3Rpb25cXHMrVEJbXlxcbl0qKS8sIC9eKD86LipkaXJlY3Rpb25cXHMrQlRbXlxcbl0qKS8sIC9eKD86LipkaXJlY3Rpb25cXHMrUkxbXlxcbl0qKS8sIC9eKD86LipkaXJlY3Rpb25cXHMrTFJbXlxcbl0qKS8sIC9eKD86dGl0bGVcXHNbXiNcXG47XSspLywgL14oPzphY2NEZXNjcmlwdGlvblxcc1teI1xcbjtdKykvLCAvXig/OmFjY1RpdGxlXFxzKjpcXHMqKS8sIC9eKD86KD8hXFxufHwpKlteXFxuXSopLywgL14oPzphY2NEZXNjclxccyo6XFxzKikvLCAvXig/Oig/IVxcbnx8KSpbXlxcbl0qKS8sIC9eKD86YWNjRGVzY3JcXHMqXFx7XFxzKikvLCAvXig/OltcXH1dKS8sIC9eKD86W15cXH1dKikvLCAvXig/OiUlKD8hXFx7KSpbXlxcbl0qKFxccj9cXG4/KSspLywgL14oPzolJVteXFxuXSooXFxyP1xcbikqKS8sIC9eKD86XFxzKihcXHI/XFxuKSspLywgL14oPzpcXHMrKS8sIC9eKD86QzRDb250ZXh0XFxiKS8sIC9eKD86QzRDb250YWluZXJcXGIpLywgL14oPzpDNENvbXBvbmVudFxcYikvLCAvXig/OkM0RHluYW1pY1xcYikvLCAvXig/OkM0RGVwbG95bWVudFxcYikvLCAvXig/OlBlcnNvbl9FeHRcXGIpLywgL14oPzpQZXJzb25cXGIpLywgL14oPzpTeXN0ZW1RdWV1ZV9FeHRcXGIpLywgL14oPzpTeXN0ZW1EYl9FeHRcXGIpLywgL14oPzpTeXN0ZW1fRXh0XFxiKS8sIC9eKD86U3lzdGVtUXVldWVcXGIpLywgL14oPzpTeXN0ZW1EYlxcYikvLCAvXig/OlN5c3RlbVxcYikvLCAvXig/OkJvdW5kYXJ5XFxiKS8sIC9eKD86RW50ZXJwcmlzZV9Cb3VuZGFyeVxcYikvLCAvXig/OlN5c3RlbV9Cb3VuZGFyeVxcYikvLCAvXig/OkNvbnRhaW5lclF1ZXVlX0V4dFxcYikvLCAvXig/OkNvbnRhaW5lckRiX0V4dFxcYikvLCAvXig/OkNvbnRhaW5lcl9FeHRcXGIpLywgL14oPzpDb250YWluZXJRdWV1ZVxcYikvLCAvXig/OkNvbnRhaW5lckRiXFxiKS8sIC9eKD86Q29udGFpbmVyXFxiKS8sIC9eKD86Q29udGFpbmVyX0JvdW5kYXJ5XFxiKS8sIC9eKD86Q29tcG9uZW50UXVldWVfRXh0XFxiKS8sIC9eKD86Q29tcG9uZW50RGJfRXh0XFxiKS8sIC9eKD86Q29tcG9uZW50X0V4dFxcYikvLCAvXig/OkNvbXBvbmVudFF1ZXVlXFxiKS8sIC9eKD86Q29tcG9uZW50RGJcXGIpLywgL14oPzpDb21wb25lbnRcXGIpLywgL14oPzpEZXBsb3ltZW50X05vZGVcXGIpLywgL14oPzpOb2RlXFxiKS8sIC9eKD86Tm9kZV9MXFxiKS8sIC9eKD86Tm9kZV9SXFxiKS8sIC9eKD86UmVsXFxiKS8sIC9eKD86QmlSZWxcXGIpLywgL14oPzpSZWxfVXBcXGIpLywgL14oPzpSZWxfVVxcYikvLCAvXig/OlJlbF9Eb3duXFxiKS8sIC9eKD86UmVsX0RcXGIpLywgL14oPzpSZWxfTGVmdFxcYikvLCAvXig/OlJlbF9MXFxiKS8sIC9eKD86UmVsX1JpZ2h0XFxiKS8sIC9eKD86UmVsX1JcXGIpLywgL14oPzpSZWxfQmFja1xcYikvLCAvXig/OlJlbEluZGV4XFxiKS8sIC9eKD86VXBkYXRlRWxlbWVudFN0eWxlXFxiKS8sIC9eKD86VXBkYXRlUmVsU3R5bGVcXGIpLywgL14oPzpVcGRhdGVMYXlvdXRDb25maWdcXGIpLywgL14oPzokKS8sIC9eKD86WyhdWyBdKlssXSkvLCAvXig/OlsoXSkvLCAvXig/OlspXSkvLCAvXig/OiwsKS8sIC9eKD86LCkvLCAvXig/OlsgXSpbXCJdW1wiXSkvLCAvXig/OlsgXSpbXCJdKS8sIC9eKD86W1wiXSkvLCAvXig/OlteXCJdKikvLCAvXig/OlsgXSpbXFwkXSkvLCAvXig/OltePV0qKS8sIC9eKD86Wz1dWyBdKltcIl0pLywgL14oPzpbXlwiXSspLywgL14oPzpbXCJdKS8sIC9eKD86W14sXSspLywgL14oPzpcXHspLywgL14oPzpcXH0pLywgL14oPzpbXFxzXSspLywgL14oPzpbXFxuXFxyXSspLywgL14oPzokKS9dLFxuICAgICAgY29uZGl0aW9uczogeyBcImFjY19kZXNjcl9tdWx0aWxpbmVcIjogeyBcInJ1bGVzXCI6IFsxMSwgMTJdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImFjY19kZXNjclwiOiB7IFwicnVsZXNcIjogWzldLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImFjY190aXRsZVwiOiB7IFwicnVsZXNcIjogWzddLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcInN0cmluZ19rdl92YWx1ZVwiOiB7IFwicnVsZXNcIjogWzc4LCA3OV0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwic3RyaW5nX2t2X2tleVwiOiB7IFwicnVsZXNcIjogWzc3XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJzdHJpbmdfa3ZcIjogeyBcInJ1bGVzXCI6IFs3Nl0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwic3RyaW5nXCI6IHsgXCJydWxlc1wiOiBbNzMsIDc0XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJhdHRyaWJ1dGVcIjogeyBcInJ1bGVzXCI6IFs2OCwgNjksIDcwLCA3MSwgNzIsIDc1LCA4MF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwidXBkYXRlX2xheW91dF9jb25maWdcIjogeyBcInJ1bGVzXCI6IFs2NSwgNjYsIDY3LCA2OF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwidXBkYXRlX3JlbF9zdHlsZVwiOiB7IFwicnVsZXNcIjogWzY1LCA2NiwgNjcsIDY4XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJ1cGRhdGVfZWxfc3R5bGVcIjogeyBcInJ1bGVzXCI6IFs2NSwgNjYsIDY3LCA2OF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwicmVsX2JcIjogeyBcInJ1bGVzXCI6IFs2NSwgNjYsIDY3LCA2OF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwicmVsX3JcIjogeyBcInJ1bGVzXCI6IFs2NSwgNjYsIDY3LCA2OF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwicmVsX2xcIjogeyBcInJ1bGVzXCI6IFs2NSwgNjYsIDY3LCA2OF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwicmVsX2RcIjogeyBcInJ1bGVzXCI6IFs2NSwgNjYsIDY3LCA2OF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwicmVsX3VcIjogeyBcInJ1bGVzXCI6IFs2NSwgNjYsIDY3LCA2OF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwicmVsX2JpXCI6IHsgXCJydWxlc1wiOiBbXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJyZWxcIjogeyBcInJ1bGVzXCI6IFs2NSwgNjYsIDY3LCA2OF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwibm9kZV9yXCI6IHsgXCJydWxlc1wiOiBbNjUsIDY2LCA2NywgNjhdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIm5vZGVfbFwiOiB7IFwicnVsZXNcIjogWzY1LCA2NiwgNjcsIDY4XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJub2RlXCI6IHsgXCJydWxlc1wiOiBbNjUsIDY2LCA2NywgNjhdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImluZGV4XCI6IHsgXCJydWxlc1wiOiBbXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJyZWxfaW5kZXhcIjogeyBcInJ1bGVzXCI6IFs2NSwgNjYsIDY3LCA2OF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiY29tcG9uZW50X2V4dF9xdWV1ZVwiOiB7IFwicnVsZXNcIjogW10sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiY29tcG9uZW50X2V4dF9kYlwiOiB7IFwicnVsZXNcIjogWzY1LCA2NiwgNjcsIDY4XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJjb21wb25lbnRfZXh0XCI6IHsgXCJydWxlc1wiOiBbNjUsIDY2LCA2NywgNjhdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImNvbXBvbmVudF9xdWV1ZVwiOiB7IFwicnVsZXNcIjogWzY1LCA2NiwgNjcsIDY4XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJjb21wb25lbnRfZGJcIjogeyBcInJ1bGVzXCI6IFs2NSwgNjYsIDY3LCA2OF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiY29tcG9uZW50XCI6IHsgXCJydWxlc1wiOiBbNjUsIDY2LCA2NywgNjhdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImNvbnRhaW5lcl9ib3VuZGFyeVwiOiB7IFwicnVsZXNcIjogWzY1LCA2NiwgNjcsIDY4XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJjb250YWluZXJfZXh0X3F1ZXVlXCI6IHsgXCJydWxlc1wiOiBbNjUsIDY2LCA2NywgNjhdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImNvbnRhaW5lcl9leHRfZGJcIjogeyBcInJ1bGVzXCI6IFs2NSwgNjYsIDY3LCA2OF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiY29udGFpbmVyX2V4dFwiOiB7IFwicnVsZXNcIjogWzY1LCA2NiwgNjcsIDY4XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJjb250YWluZXJfcXVldWVcIjogeyBcInJ1bGVzXCI6IFs2NSwgNjYsIDY3LCA2OF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiY29udGFpbmVyX2RiXCI6IHsgXCJydWxlc1wiOiBbNjUsIDY2LCA2NywgNjhdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImNvbnRhaW5lclwiOiB7IFwicnVsZXNcIjogWzY1LCA2NiwgNjcsIDY4XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJiaXJlbFwiOiB7IFwicnVsZXNcIjogWzY1LCA2NiwgNjcsIDY4XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJzeXN0ZW1fYm91bmRhcnlcIjogeyBcInJ1bGVzXCI6IFs2NSwgNjYsIDY3LCA2OF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiZW50ZXJwcmlzZV9ib3VuZGFyeVwiOiB7IFwicnVsZXNcIjogWzY1LCA2NiwgNjcsIDY4XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJib3VuZGFyeVwiOiB7IFwicnVsZXNcIjogWzY1LCA2NiwgNjcsIDY4XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJzeXN0ZW1fZXh0X3F1ZXVlXCI6IHsgXCJydWxlc1wiOiBbNjUsIDY2LCA2NywgNjhdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcInN5c3RlbV9leHRfZGJcIjogeyBcInJ1bGVzXCI6IFs2NSwgNjYsIDY3LCA2OF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwic3lzdGVtX2V4dFwiOiB7IFwicnVsZXNcIjogWzY1LCA2NiwgNjcsIDY4XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJzeXN0ZW1fcXVldWVcIjogeyBcInJ1bGVzXCI6IFs2NSwgNjYsIDY3LCA2OF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwic3lzdGVtX2RiXCI6IHsgXCJydWxlc1wiOiBbNjUsIDY2LCA2NywgNjhdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcInN5c3RlbVwiOiB7IFwicnVsZXNcIjogWzY1LCA2NiwgNjcsIDY4XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJwZXJzb25fZXh0XCI6IHsgXCJydWxlc1wiOiBbNjUsIDY2LCA2NywgNjhdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcInBlcnNvblwiOiB7IFwicnVsZXNcIjogWzY1LCA2NiwgNjcsIDY4XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJJTklUSUFMXCI6IHsgXCJydWxlc1wiOiBbMCwgMSwgMiwgMywgNCwgNSwgNiwgOCwgMTAsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMCwgMjEsIDIyLCAyMywgMjQsIDI1LCAyNiwgMjcsIDI4LCAyOSwgMzAsIDMxLCAzMiwgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MSwgNDIsIDQzLCA0NCwgNDUsIDQ2LCA0NywgNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDU4LCA1OSwgNjAsIDYxLCA2MiwgNjMsIDY0LCA4MSwgODIsIDgzLCA4NCwgODVdLCBcImluY2x1c2l2ZVwiOiB0cnVlIH0gfVxuICAgIH07XG4gICAgcmV0dXJuIGxleGVyMjtcbiAgfSgpO1xuICBwYXJzZXIyLmxleGVyID0gbGV4ZXI7XG4gIGZ1bmN0aW9uIFBhcnNlcigpIHtcbiAgICB0aGlzLnl5ID0ge307XG4gIH1cbiAgUGFyc2VyLnByb3RvdHlwZSA9IHBhcnNlcjI7XG4gIHBhcnNlcjIuUGFyc2VyID0gUGFyc2VyO1xuICByZXR1cm4gbmV3IFBhcnNlcigpO1xufSgpO1xucGFyc2VyLnBhcnNlciA9IHBhcnNlcjtcbmNvbnN0IHBhcnNlciQxID0gcGFyc2VyO1xubGV0IGM0U2hhcGVBcnJheSA9IFtdO1xubGV0IGJvdW5kYXJ5UGFyc2VTdGFjayA9IFtcIlwiXTtcbmxldCBjdXJyZW50Qm91bmRhcnlQYXJzZSA9IFwiZ2xvYmFsXCI7XG5sZXQgcGFyZW50Qm91bmRhcnlQYXJzZSA9IFwiXCI7XG5sZXQgYm91bmRhcmllcyA9IFtcbiAge1xuICAgIGFsaWFzOiBcImdsb2JhbFwiLFxuICAgIGxhYmVsOiB7IHRleHQ6IFwiZ2xvYmFsXCIgfSxcbiAgICB0eXBlOiB7IHRleHQ6IFwiZ2xvYmFsXCIgfSxcbiAgICB0YWdzOiBudWxsLFxuICAgIGxpbms6IG51bGwsXG4gICAgcGFyZW50Qm91bmRhcnk6IFwiXCJcbiAgfVxuXTtcbmxldCByZWxzID0gW107XG5sZXQgdGl0bGUgPSBcIlwiO1xubGV0IHdyYXBFbmFibGVkID0gZmFsc2U7XG5sZXQgYzRTaGFwZUluUm93JDEgPSA0O1xubGV0IGM0Qm91bmRhcnlJblJvdyQxID0gMjtcbnZhciBjNFR5cGU7XG5jb25zdCBnZXRDNFR5cGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGM0VHlwZTtcbn07XG5jb25zdCBzZXRDNFR5cGUgPSBmdW5jdGlvbihjNFR5cGVQYXJhbSkge1xuICBsZXQgc2FuaXRpemVkVGV4dCA9IHNhbml0aXplVGV4dChjNFR5cGVQYXJhbSwgZ2V0Q29uZmlnKCkpO1xuICBjNFR5cGUgPSBzYW5pdGl6ZWRUZXh0O1xufTtcbmNvbnN0IGFkZFJlbCA9IGZ1bmN0aW9uKHR5cGUsIGZyb20sIHRvLCBsYWJlbCwgdGVjaG4sIGRlc2NyLCBzcHJpdGUsIHRhZ3MsIGxpbmspIHtcbiAgaWYgKHR5cGUgPT09IHZvaWQgMCB8fCB0eXBlID09PSBudWxsIHx8IGZyb20gPT09IHZvaWQgMCB8fCBmcm9tID09PSBudWxsIHx8IHRvID09PSB2b2lkIDAgfHwgdG8gPT09IG51bGwgfHwgbGFiZWwgPT09IHZvaWQgMCB8fCBsYWJlbCA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgcmVsID0ge307XG4gIGNvbnN0IG9sZCA9IHJlbHMuZmluZCgocmVsMikgPT4gcmVsMi5mcm9tID09PSBmcm9tICYmIHJlbDIudG8gPT09IHRvKTtcbiAgaWYgKG9sZCkge1xuICAgIHJlbCA9IG9sZDtcbiAgfSBlbHNlIHtcbiAgICByZWxzLnB1c2gocmVsKTtcbiAgfVxuICByZWwudHlwZSA9IHR5cGU7XG4gIHJlbC5mcm9tID0gZnJvbTtcbiAgcmVsLnRvID0gdG87XG4gIHJlbC5sYWJlbCA9IHsgdGV4dDogbGFiZWwgfTtcbiAgaWYgKHRlY2huID09PSB2b2lkIDAgfHwgdGVjaG4gPT09IG51bGwpIHtcbiAgICByZWwudGVjaG4gPSB7IHRleHQ6IFwiXCIgfTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIHRlY2huID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBsZXQgW2tleSwgdmFsdWVdID0gT2JqZWN0LmVudHJpZXModGVjaG4pWzBdO1xuICAgICAgcmVsW2tleV0gPSB7IHRleHQ6IHZhbHVlIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbC50ZWNobiA9IHsgdGV4dDogdGVjaG4gfTtcbiAgICB9XG4gIH1cbiAgaWYgKGRlc2NyID09PSB2b2lkIDAgfHwgZGVzY3IgPT09IG51bGwpIHtcbiAgICByZWwuZGVzY3IgPSB7IHRleHQ6IFwiXCIgfTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGRlc2NyID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBsZXQgW2tleSwgdmFsdWVdID0gT2JqZWN0LmVudHJpZXMoZGVzY3IpWzBdO1xuICAgICAgcmVsW2tleV0gPSB7IHRleHQ6IHZhbHVlIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbC5kZXNjciA9IHsgdGV4dDogZGVzY3IgfTtcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiBzcHJpdGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICBsZXQgW2tleSwgdmFsdWVdID0gT2JqZWN0LmVudHJpZXMoc3ByaXRlKVswXTtcbiAgICByZWxba2V5XSA9IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHJlbC5zcHJpdGUgPSBzcHJpdGU7XG4gIH1cbiAgaWYgKHR5cGVvZiB0YWdzID09PSBcIm9iamVjdFwiKSB7XG4gICAgbGV0IFtrZXksIHZhbHVlXSA9IE9iamVjdC5lbnRyaWVzKHRhZ3MpWzBdO1xuICAgIHJlbFtrZXldID0gdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgcmVsLnRhZ3MgPSB0YWdzO1xuICB9XG4gIGlmICh0eXBlb2YgbGluayA9PT0gXCJvYmplY3RcIikge1xuICAgIGxldCBba2V5LCB2YWx1ZV0gPSBPYmplY3QuZW50cmllcyhsaW5rKVswXTtcbiAgICByZWxba2V5XSA9IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHJlbC5saW5rID0gbGluaztcbiAgfVxuICByZWwud3JhcCA9IGF1dG9XcmFwKCk7XG59O1xuY29uc3QgYWRkUGVyc29uT3JTeXN0ZW0gPSBmdW5jdGlvbih0eXBlQzRTaGFwZSwgYWxpYXMsIGxhYmVsLCBkZXNjciwgc3ByaXRlLCB0YWdzLCBsaW5rKSB7XG4gIGlmIChhbGlhcyA9PT0gbnVsbCB8fCBsYWJlbCA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgcGVyc29uT3JTeXN0ZW0gPSB7fTtcbiAgY29uc3Qgb2xkID0gYzRTaGFwZUFycmF5LmZpbmQoKHBlcnNvbk9yU3lzdGVtMikgPT4gcGVyc29uT3JTeXN0ZW0yLmFsaWFzID09PSBhbGlhcyk7XG4gIGlmIChvbGQgJiYgYWxpYXMgPT09IG9sZC5hbGlhcykge1xuICAgIHBlcnNvbk9yU3lzdGVtID0gb2xkO1xuICB9IGVsc2Uge1xuICAgIHBlcnNvbk9yU3lzdGVtLmFsaWFzID0gYWxpYXM7XG4gICAgYzRTaGFwZUFycmF5LnB1c2gocGVyc29uT3JTeXN0ZW0pO1xuICB9XG4gIGlmIChsYWJlbCA9PT0gdm9pZCAwIHx8IGxhYmVsID09PSBudWxsKSB7XG4gICAgcGVyc29uT3JTeXN0ZW0ubGFiZWwgPSB7IHRleHQ6IFwiXCIgfTtcbiAgfSBlbHNlIHtcbiAgICBwZXJzb25PclN5c3RlbS5sYWJlbCA9IHsgdGV4dDogbGFiZWwgfTtcbiAgfVxuICBpZiAoZGVzY3IgPT09IHZvaWQgMCB8fCBkZXNjciA9PT0gbnVsbCkge1xuICAgIHBlcnNvbk9yU3lzdGVtLmRlc2NyID0geyB0ZXh0OiBcIlwiIH07XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBkZXNjciA9PT0gXCJvYmplY3RcIikge1xuICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IE9iamVjdC5lbnRyaWVzKGRlc2NyKVswXTtcbiAgICAgIHBlcnNvbk9yU3lzdGVtW2tleV0gPSB7IHRleHQ6IHZhbHVlIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlcnNvbk9yU3lzdGVtLmRlc2NyID0geyB0ZXh0OiBkZXNjciB9O1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIHNwcml0ZSA9PT0gXCJvYmplY3RcIikge1xuICAgIGxldCBba2V5LCB2YWx1ZV0gPSBPYmplY3QuZW50cmllcyhzcHJpdGUpWzBdO1xuICAgIHBlcnNvbk9yU3lzdGVtW2tleV0gPSB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBwZXJzb25PclN5c3RlbS5zcHJpdGUgPSBzcHJpdGU7XG4gIH1cbiAgaWYgKHR5cGVvZiB0YWdzID09PSBcIm9iamVjdFwiKSB7XG4gICAgbGV0IFtrZXksIHZhbHVlXSA9IE9iamVjdC5lbnRyaWVzKHRhZ3MpWzBdO1xuICAgIHBlcnNvbk9yU3lzdGVtW2tleV0gPSB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBwZXJzb25PclN5c3RlbS50YWdzID0gdGFncztcbiAgfVxuICBpZiAodHlwZW9mIGxpbmsgPT09IFwib2JqZWN0XCIpIHtcbiAgICBsZXQgW2tleSwgdmFsdWVdID0gT2JqZWN0LmVudHJpZXMobGluaylbMF07XG4gICAgcGVyc29uT3JTeXN0ZW1ba2V5XSA9IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHBlcnNvbk9yU3lzdGVtLmxpbmsgPSBsaW5rO1xuICB9XG4gIHBlcnNvbk9yU3lzdGVtLnR5cGVDNFNoYXBlID0geyB0ZXh0OiB0eXBlQzRTaGFwZSB9O1xuICBwZXJzb25PclN5c3RlbS5wYXJlbnRCb3VuZGFyeSA9IGN1cnJlbnRCb3VuZGFyeVBhcnNlO1xuICBwZXJzb25PclN5c3RlbS53cmFwID0gYXV0b1dyYXAoKTtcbn07XG5jb25zdCBhZGRDb250YWluZXIgPSBmdW5jdGlvbih0eXBlQzRTaGFwZSwgYWxpYXMsIGxhYmVsLCB0ZWNobiwgZGVzY3IsIHNwcml0ZSwgdGFncywgbGluaykge1xuICBpZiAoYWxpYXMgPT09IG51bGwgfHwgbGFiZWwgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGNvbnRhaW5lciA9IHt9O1xuICBjb25zdCBvbGQgPSBjNFNoYXBlQXJyYXkuZmluZCgoY29udGFpbmVyMikgPT4gY29udGFpbmVyMi5hbGlhcyA9PT0gYWxpYXMpO1xuICBpZiAob2xkICYmIGFsaWFzID09PSBvbGQuYWxpYXMpIHtcbiAgICBjb250YWluZXIgPSBvbGQ7XG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLmFsaWFzID0gYWxpYXM7XG4gICAgYzRTaGFwZUFycmF5LnB1c2goY29udGFpbmVyKTtcbiAgfVxuICBpZiAobGFiZWwgPT09IHZvaWQgMCB8fCBsYWJlbCA9PT0gbnVsbCkge1xuICAgIGNvbnRhaW5lci5sYWJlbCA9IHsgdGV4dDogXCJcIiB9O1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5sYWJlbCA9IHsgdGV4dDogbGFiZWwgfTtcbiAgfVxuICBpZiAodGVjaG4gPT09IHZvaWQgMCB8fCB0ZWNobiA9PT0gbnVsbCkge1xuICAgIGNvbnRhaW5lci50ZWNobiA9IHsgdGV4dDogXCJcIiB9O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgdGVjaG4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBPYmplY3QuZW50cmllcyh0ZWNobilbMF07XG4gICAgICBjb250YWluZXJba2V5XSA9IHsgdGV4dDogdmFsdWUgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLnRlY2huID0geyB0ZXh0OiB0ZWNobiB9O1xuICAgIH1cbiAgfVxuICBpZiAoZGVzY3IgPT09IHZvaWQgMCB8fCBkZXNjciA9PT0gbnVsbCkge1xuICAgIGNvbnRhaW5lci5kZXNjciA9IHsgdGV4dDogXCJcIiB9O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZGVzY3IgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBPYmplY3QuZW50cmllcyhkZXNjcilbMF07XG4gICAgICBjb250YWluZXJba2V5XSA9IHsgdGV4dDogdmFsdWUgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmRlc2NyID0geyB0ZXh0OiBkZXNjciB9O1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIHNwcml0ZSA9PT0gXCJvYmplY3RcIikge1xuICAgIGxldCBba2V5LCB2YWx1ZV0gPSBPYmplY3QuZW50cmllcyhzcHJpdGUpWzBdO1xuICAgIGNvbnRhaW5lcltrZXldID0gdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLnNwcml0ZSA9IHNwcml0ZTtcbiAgfVxuICBpZiAodHlwZW9mIHRhZ3MgPT09IFwib2JqZWN0XCIpIHtcbiAgICBsZXQgW2tleSwgdmFsdWVdID0gT2JqZWN0LmVudHJpZXModGFncylbMF07XG4gICAgY29udGFpbmVyW2tleV0gPSB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb250YWluZXIudGFncyA9IHRhZ3M7XG4gIH1cbiAgaWYgKHR5cGVvZiBsaW5rID09PSBcIm9iamVjdFwiKSB7XG4gICAgbGV0IFtrZXksIHZhbHVlXSA9IE9iamVjdC5lbnRyaWVzKGxpbmspWzBdO1xuICAgIGNvbnRhaW5lcltrZXldID0gdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLmxpbmsgPSBsaW5rO1xuICB9XG4gIGNvbnRhaW5lci53cmFwID0gYXV0b1dyYXAoKTtcbiAgY29udGFpbmVyLnR5cGVDNFNoYXBlID0geyB0ZXh0OiB0eXBlQzRTaGFwZSB9O1xuICBjb250YWluZXIucGFyZW50Qm91bmRhcnkgPSBjdXJyZW50Qm91bmRhcnlQYXJzZTtcbn07XG5jb25zdCBhZGRDb21wb25lbnQgPSBmdW5jdGlvbih0eXBlQzRTaGFwZSwgYWxpYXMsIGxhYmVsLCB0ZWNobiwgZGVzY3IsIHNwcml0ZSwgdGFncywgbGluaykge1xuICBpZiAoYWxpYXMgPT09IG51bGwgfHwgbGFiZWwgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGNvbXBvbmVudCA9IHt9O1xuICBjb25zdCBvbGQgPSBjNFNoYXBlQXJyYXkuZmluZCgoY29tcG9uZW50MikgPT4gY29tcG9uZW50Mi5hbGlhcyA9PT0gYWxpYXMpO1xuICBpZiAob2xkICYmIGFsaWFzID09PSBvbGQuYWxpYXMpIHtcbiAgICBjb21wb25lbnQgPSBvbGQ7XG4gIH0gZWxzZSB7XG4gICAgY29tcG9uZW50LmFsaWFzID0gYWxpYXM7XG4gICAgYzRTaGFwZUFycmF5LnB1c2goY29tcG9uZW50KTtcbiAgfVxuICBpZiAobGFiZWwgPT09IHZvaWQgMCB8fCBsYWJlbCA9PT0gbnVsbCkge1xuICAgIGNvbXBvbmVudC5sYWJlbCA9IHsgdGV4dDogXCJcIiB9O1xuICB9IGVsc2Uge1xuICAgIGNvbXBvbmVudC5sYWJlbCA9IHsgdGV4dDogbGFiZWwgfTtcbiAgfVxuICBpZiAodGVjaG4gPT09IHZvaWQgMCB8fCB0ZWNobiA9PT0gbnVsbCkge1xuICAgIGNvbXBvbmVudC50ZWNobiA9IHsgdGV4dDogXCJcIiB9O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgdGVjaG4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBPYmplY3QuZW50cmllcyh0ZWNobilbMF07XG4gICAgICBjb21wb25lbnRba2V5XSA9IHsgdGV4dDogdmFsdWUgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50LnRlY2huID0geyB0ZXh0OiB0ZWNobiB9O1xuICAgIH1cbiAgfVxuICBpZiAoZGVzY3IgPT09IHZvaWQgMCB8fCBkZXNjciA9PT0gbnVsbCkge1xuICAgIGNvbXBvbmVudC5kZXNjciA9IHsgdGV4dDogXCJcIiB9O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZGVzY3IgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBPYmplY3QuZW50cmllcyhkZXNjcilbMF07XG4gICAgICBjb21wb25lbnRba2V5XSA9IHsgdGV4dDogdmFsdWUgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50LmRlc2NyID0geyB0ZXh0OiBkZXNjciB9O1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIHNwcml0ZSA9PT0gXCJvYmplY3RcIikge1xuICAgIGxldCBba2V5LCB2YWx1ZV0gPSBPYmplY3QuZW50cmllcyhzcHJpdGUpWzBdO1xuICAgIGNvbXBvbmVudFtrZXldID0gdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgY29tcG9uZW50LnNwcml0ZSA9IHNwcml0ZTtcbiAgfVxuICBpZiAodHlwZW9mIHRhZ3MgPT09IFwib2JqZWN0XCIpIHtcbiAgICBsZXQgW2tleSwgdmFsdWVdID0gT2JqZWN0LmVudHJpZXModGFncylbMF07XG4gICAgY29tcG9uZW50W2tleV0gPSB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb21wb25lbnQudGFncyA9IHRhZ3M7XG4gIH1cbiAgaWYgKHR5cGVvZiBsaW5rID09PSBcIm9iamVjdFwiKSB7XG4gICAgbGV0IFtrZXksIHZhbHVlXSA9IE9iamVjdC5lbnRyaWVzKGxpbmspWzBdO1xuICAgIGNvbXBvbmVudFtrZXldID0gdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgY29tcG9uZW50LmxpbmsgPSBsaW5rO1xuICB9XG4gIGNvbXBvbmVudC53cmFwID0gYXV0b1dyYXAoKTtcbiAgY29tcG9uZW50LnR5cGVDNFNoYXBlID0geyB0ZXh0OiB0eXBlQzRTaGFwZSB9O1xuICBjb21wb25lbnQucGFyZW50Qm91bmRhcnkgPSBjdXJyZW50Qm91bmRhcnlQYXJzZTtcbn07XG5jb25zdCBhZGRQZXJzb25PclN5c3RlbUJvdW5kYXJ5ID0gZnVuY3Rpb24oYWxpYXMsIGxhYmVsLCB0eXBlLCB0YWdzLCBsaW5rKSB7XG4gIGlmIChhbGlhcyA9PT0gbnVsbCB8fCBsYWJlbCA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgYm91bmRhcnkgPSB7fTtcbiAgY29uc3Qgb2xkID0gYm91bmRhcmllcy5maW5kKChib3VuZGFyeTIpID0+IGJvdW5kYXJ5Mi5hbGlhcyA9PT0gYWxpYXMpO1xuICBpZiAob2xkICYmIGFsaWFzID09PSBvbGQuYWxpYXMpIHtcbiAgICBib3VuZGFyeSA9IG9sZDtcbiAgfSBlbHNlIHtcbiAgICBib3VuZGFyeS5hbGlhcyA9IGFsaWFzO1xuICAgIGJvdW5kYXJpZXMucHVzaChib3VuZGFyeSk7XG4gIH1cbiAgaWYgKGxhYmVsID09PSB2b2lkIDAgfHwgbGFiZWwgPT09IG51bGwpIHtcbiAgICBib3VuZGFyeS5sYWJlbCA9IHsgdGV4dDogXCJcIiB9O1xuICB9IGVsc2Uge1xuICAgIGJvdW5kYXJ5LmxhYmVsID0geyB0ZXh0OiBsYWJlbCB9O1xuICB9XG4gIGlmICh0eXBlID09PSB2b2lkIDAgfHwgdHlwZSA9PT0gbnVsbCkge1xuICAgIGJvdW5kYXJ5LnR5cGUgPSB7IHRleHQ6IFwic3lzdGVtXCIgfTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBPYmplY3QuZW50cmllcyh0eXBlKVswXTtcbiAgICAgIGJvdW5kYXJ5W2tleV0gPSB7IHRleHQ6IHZhbHVlIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdW5kYXJ5LnR5cGUgPSB7IHRleHQ6IHR5cGUgfTtcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiB0YWdzID09PSBcIm9iamVjdFwiKSB7XG4gICAgbGV0IFtrZXksIHZhbHVlXSA9IE9iamVjdC5lbnRyaWVzKHRhZ3MpWzBdO1xuICAgIGJvdW5kYXJ5W2tleV0gPSB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBib3VuZGFyeS50YWdzID0gdGFncztcbiAgfVxuICBpZiAodHlwZW9mIGxpbmsgPT09IFwib2JqZWN0XCIpIHtcbiAgICBsZXQgW2tleSwgdmFsdWVdID0gT2JqZWN0LmVudHJpZXMobGluaylbMF07XG4gICAgYm91bmRhcnlba2V5XSA9IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGJvdW5kYXJ5LmxpbmsgPSBsaW5rO1xuICB9XG4gIGJvdW5kYXJ5LnBhcmVudEJvdW5kYXJ5ID0gY3VycmVudEJvdW5kYXJ5UGFyc2U7XG4gIGJvdW5kYXJ5LndyYXAgPSBhdXRvV3JhcCgpO1xuICBwYXJlbnRCb3VuZGFyeVBhcnNlID0gY3VycmVudEJvdW5kYXJ5UGFyc2U7XG4gIGN1cnJlbnRCb3VuZGFyeVBhcnNlID0gYWxpYXM7XG4gIGJvdW5kYXJ5UGFyc2VTdGFjay5wdXNoKHBhcmVudEJvdW5kYXJ5UGFyc2UpO1xufTtcbmNvbnN0IGFkZENvbnRhaW5lckJvdW5kYXJ5ID0gZnVuY3Rpb24oYWxpYXMsIGxhYmVsLCB0eXBlLCB0YWdzLCBsaW5rKSB7XG4gIGlmIChhbGlhcyA9PT0gbnVsbCB8fCBsYWJlbCA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgYm91bmRhcnkgPSB7fTtcbiAgY29uc3Qgb2xkID0gYm91bmRhcmllcy5maW5kKChib3VuZGFyeTIpID0+IGJvdW5kYXJ5Mi5hbGlhcyA9PT0gYWxpYXMpO1xuICBpZiAob2xkICYmIGFsaWFzID09PSBvbGQuYWxpYXMpIHtcbiAgICBib3VuZGFyeSA9IG9sZDtcbiAgfSBlbHNlIHtcbiAgICBib3VuZGFyeS5hbGlhcyA9IGFsaWFzO1xuICAgIGJvdW5kYXJpZXMucHVzaChib3VuZGFyeSk7XG4gIH1cbiAgaWYgKGxhYmVsID09PSB2b2lkIDAgfHwgbGFiZWwgPT09IG51bGwpIHtcbiAgICBib3VuZGFyeS5sYWJlbCA9IHsgdGV4dDogXCJcIiB9O1xuICB9IGVsc2Uge1xuICAgIGJvdW5kYXJ5LmxhYmVsID0geyB0ZXh0OiBsYWJlbCB9O1xuICB9XG4gIGlmICh0eXBlID09PSB2b2lkIDAgfHwgdHlwZSA9PT0gbnVsbCkge1xuICAgIGJvdW5kYXJ5LnR5cGUgPSB7IHRleHQ6IFwiY29udGFpbmVyXCIgfTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBPYmplY3QuZW50cmllcyh0eXBlKVswXTtcbiAgICAgIGJvdW5kYXJ5W2tleV0gPSB7IHRleHQ6IHZhbHVlIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdW5kYXJ5LnR5cGUgPSB7IHRleHQ6IHR5cGUgfTtcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiB0YWdzID09PSBcIm9iamVjdFwiKSB7XG4gICAgbGV0IFtrZXksIHZhbHVlXSA9IE9iamVjdC5lbnRyaWVzKHRhZ3MpWzBdO1xuICAgIGJvdW5kYXJ5W2tleV0gPSB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBib3VuZGFyeS50YWdzID0gdGFncztcbiAgfVxuICBpZiAodHlwZW9mIGxpbmsgPT09IFwib2JqZWN0XCIpIHtcbiAgICBsZXQgW2tleSwgdmFsdWVdID0gT2JqZWN0LmVudHJpZXMobGluaylbMF07XG4gICAgYm91bmRhcnlba2V5XSA9IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGJvdW5kYXJ5LmxpbmsgPSBsaW5rO1xuICB9XG4gIGJvdW5kYXJ5LnBhcmVudEJvdW5kYXJ5ID0gY3VycmVudEJvdW5kYXJ5UGFyc2U7XG4gIGJvdW5kYXJ5LndyYXAgPSBhdXRvV3JhcCgpO1xuICBwYXJlbnRCb3VuZGFyeVBhcnNlID0gY3VycmVudEJvdW5kYXJ5UGFyc2U7XG4gIGN1cnJlbnRCb3VuZGFyeVBhcnNlID0gYWxpYXM7XG4gIGJvdW5kYXJ5UGFyc2VTdGFjay5wdXNoKHBhcmVudEJvdW5kYXJ5UGFyc2UpO1xufTtcbmNvbnN0IGFkZERlcGxveW1lbnROb2RlID0gZnVuY3Rpb24obm9kZVR5cGUsIGFsaWFzLCBsYWJlbCwgdHlwZSwgZGVzY3IsIHNwcml0ZSwgdGFncywgbGluaykge1xuICBpZiAoYWxpYXMgPT09IG51bGwgfHwgbGFiZWwgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGJvdW5kYXJ5ID0ge307XG4gIGNvbnN0IG9sZCA9IGJvdW5kYXJpZXMuZmluZCgoYm91bmRhcnkyKSA9PiBib3VuZGFyeTIuYWxpYXMgPT09IGFsaWFzKTtcbiAgaWYgKG9sZCAmJiBhbGlhcyA9PT0gb2xkLmFsaWFzKSB7XG4gICAgYm91bmRhcnkgPSBvbGQ7XG4gIH0gZWxzZSB7XG4gICAgYm91bmRhcnkuYWxpYXMgPSBhbGlhcztcbiAgICBib3VuZGFyaWVzLnB1c2goYm91bmRhcnkpO1xuICB9XG4gIGlmIChsYWJlbCA9PT0gdm9pZCAwIHx8IGxhYmVsID09PSBudWxsKSB7XG4gICAgYm91bmRhcnkubGFiZWwgPSB7IHRleHQ6IFwiXCIgfTtcbiAgfSBlbHNlIHtcbiAgICBib3VuZGFyeS5sYWJlbCA9IHsgdGV4dDogbGFiZWwgfTtcbiAgfVxuICBpZiAodHlwZSA9PT0gdm9pZCAwIHx8IHR5cGUgPT09IG51bGwpIHtcbiAgICBib3VuZGFyeS50eXBlID0geyB0ZXh0OiBcIm5vZGVcIiB9O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IE9iamVjdC5lbnRyaWVzKHR5cGUpWzBdO1xuICAgICAgYm91bmRhcnlba2V5XSA9IHsgdGV4dDogdmFsdWUgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm91bmRhcnkudHlwZSA9IHsgdGV4dDogdHlwZSB9O1xuICAgIH1cbiAgfVxuICBpZiAoZGVzY3IgPT09IHZvaWQgMCB8fCBkZXNjciA9PT0gbnVsbCkge1xuICAgIGJvdW5kYXJ5LmRlc2NyID0geyB0ZXh0OiBcIlwiIH07XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBkZXNjciA9PT0gXCJvYmplY3RcIikge1xuICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IE9iamVjdC5lbnRyaWVzKGRlc2NyKVswXTtcbiAgICAgIGJvdW5kYXJ5W2tleV0gPSB7IHRleHQ6IHZhbHVlIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdW5kYXJ5LmRlc2NyID0geyB0ZXh0OiBkZXNjciB9O1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIHRhZ3MgPT09IFwib2JqZWN0XCIpIHtcbiAgICBsZXQgW2tleSwgdmFsdWVdID0gT2JqZWN0LmVudHJpZXModGFncylbMF07XG4gICAgYm91bmRhcnlba2V5XSA9IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGJvdW5kYXJ5LnRhZ3MgPSB0YWdzO1xuICB9XG4gIGlmICh0eXBlb2YgbGluayA9PT0gXCJvYmplY3RcIikge1xuICAgIGxldCBba2V5LCB2YWx1ZV0gPSBPYmplY3QuZW50cmllcyhsaW5rKVswXTtcbiAgICBib3VuZGFyeVtrZXldID0gdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgYm91bmRhcnkubGluayA9IGxpbms7XG4gIH1cbiAgYm91bmRhcnkubm9kZVR5cGUgPSBub2RlVHlwZTtcbiAgYm91bmRhcnkucGFyZW50Qm91bmRhcnkgPSBjdXJyZW50Qm91bmRhcnlQYXJzZTtcbiAgYm91bmRhcnkud3JhcCA9IGF1dG9XcmFwKCk7XG4gIHBhcmVudEJvdW5kYXJ5UGFyc2UgPSBjdXJyZW50Qm91bmRhcnlQYXJzZTtcbiAgY3VycmVudEJvdW5kYXJ5UGFyc2UgPSBhbGlhcztcbiAgYm91bmRhcnlQYXJzZVN0YWNrLnB1c2gocGFyZW50Qm91bmRhcnlQYXJzZSk7XG59O1xuY29uc3QgcG9wQm91bmRhcnlQYXJzZVN0YWNrID0gZnVuY3Rpb24oKSB7XG4gIGN1cnJlbnRCb3VuZGFyeVBhcnNlID0gcGFyZW50Qm91bmRhcnlQYXJzZTtcbiAgYm91bmRhcnlQYXJzZVN0YWNrLnBvcCgpO1xuICBwYXJlbnRCb3VuZGFyeVBhcnNlID0gYm91bmRhcnlQYXJzZVN0YWNrLnBvcCgpO1xuICBib3VuZGFyeVBhcnNlU3RhY2sucHVzaChwYXJlbnRCb3VuZGFyeVBhcnNlKTtcbn07XG5jb25zdCB1cGRhdGVFbFN0eWxlID0gZnVuY3Rpb24odHlwZUM0U2hhcGUsIGVsZW1lbnROYW1lLCBiZ0NvbG9yLCBmb250Q29sb3IsIGJvcmRlckNvbG9yLCBzaGFkb3dpbmcsIHNoYXBlLCBzcHJpdGUsIHRlY2huLCBsZWdlbmRUZXh0LCBsZWdlbmRTcHJpdGUpIHtcbiAgbGV0IG9sZCA9IGM0U2hhcGVBcnJheS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LmFsaWFzID09PSBlbGVtZW50TmFtZSk7XG4gIGlmIChvbGQgPT09IHZvaWQgMCkge1xuICAgIG9sZCA9IGJvdW5kYXJpZXMuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5hbGlhcyA9PT0gZWxlbWVudE5hbWUpO1xuICAgIGlmIChvbGQgPT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBpZiAoYmdDb2xvciAhPT0gdm9pZCAwICYmIGJnQ29sb3IgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZW9mIGJnQ29sb3IgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBPYmplY3QuZW50cmllcyhiZ0NvbG9yKVswXTtcbiAgICAgIG9sZFtrZXldID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sZC5iZ0NvbG9yID0gYmdDb2xvcjtcbiAgICB9XG4gIH1cbiAgaWYgKGZvbnRDb2xvciAhPT0gdm9pZCAwICYmIGZvbnRDb2xvciAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlb2YgZm9udENvbG9yID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBsZXQgW2tleSwgdmFsdWVdID0gT2JqZWN0LmVudHJpZXMoZm9udENvbG9yKVswXTtcbiAgICAgIG9sZFtrZXldID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sZC5mb250Q29sb3IgPSBmb250Q29sb3I7XG4gICAgfVxuICB9XG4gIGlmIChib3JkZXJDb2xvciAhPT0gdm9pZCAwICYmIGJvcmRlckNvbG9yICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGVvZiBib3JkZXJDb2xvciA9PT0gXCJvYmplY3RcIikge1xuICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IE9iamVjdC5lbnRyaWVzKGJvcmRlckNvbG9yKVswXTtcbiAgICAgIG9sZFtrZXldID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sZC5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yO1xuICAgIH1cbiAgfVxuICBpZiAoc2hhZG93aW5nICE9PSB2b2lkIDAgJiYgc2hhZG93aW5nICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGVvZiBzaGFkb3dpbmcgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBPYmplY3QuZW50cmllcyhzaGFkb3dpbmcpWzBdO1xuICAgICAgb2xkW2tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2xkLnNoYWRvd2luZyA9IHNoYWRvd2luZztcbiAgICB9XG4gIH1cbiAgaWYgKHNoYXBlICE9PSB2b2lkIDAgJiYgc2hhcGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZW9mIHNoYXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBsZXQgW2tleSwgdmFsdWVdID0gT2JqZWN0LmVudHJpZXMoc2hhcGUpWzBdO1xuICAgICAgb2xkW2tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2xkLnNoYXBlID0gc2hhcGU7XG4gICAgfVxuICB9XG4gIGlmIChzcHJpdGUgIT09IHZvaWQgMCAmJiBzcHJpdGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZW9mIHNwcml0ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IE9iamVjdC5lbnRyaWVzKHNwcml0ZSlbMF07XG4gICAgICBvbGRba2V5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbGQuc3ByaXRlID0gc3ByaXRlO1xuICAgIH1cbiAgfVxuICBpZiAodGVjaG4gIT09IHZvaWQgMCAmJiB0ZWNobiAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlb2YgdGVjaG4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBPYmplY3QuZW50cmllcyh0ZWNobilbMF07XG4gICAgICBvbGRba2V5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbGQudGVjaG4gPSB0ZWNobjtcbiAgICB9XG4gIH1cbiAgaWYgKGxlZ2VuZFRleHQgIT09IHZvaWQgMCAmJiBsZWdlbmRUZXh0ICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGVvZiBsZWdlbmRUZXh0ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBsZXQgW2tleSwgdmFsdWVdID0gT2JqZWN0LmVudHJpZXMobGVnZW5kVGV4dClbMF07XG4gICAgICBvbGRba2V5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbGQubGVnZW5kVGV4dCA9IGxlZ2VuZFRleHQ7XG4gICAgfVxuICB9XG4gIGlmIChsZWdlbmRTcHJpdGUgIT09IHZvaWQgMCAmJiBsZWdlbmRTcHJpdGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZW9mIGxlZ2VuZFNwcml0ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IE9iamVjdC5lbnRyaWVzKGxlZ2VuZFNwcml0ZSlbMF07XG4gICAgICBvbGRba2V5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbGQubGVnZW5kU3ByaXRlID0gbGVnZW5kU3ByaXRlO1xuICAgIH1cbiAgfVxufTtcbmNvbnN0IHVwZGF0ZVJlbFN0eWxlID0gZnVuY3Rpb24odHlwZUM0U2hhcGUsIGZyb20sIHRvLCB0ZXh0Q29sb3IsIGxpbmVDb2xvciwgb2Zmc2V0WCwgb2Zmc2V0WSkge1xuICBjb25zdCBvbGQgPSByZWxzLmZpbmQoKHJlbCkgPT4gcmVsLmZyb20gPT09IGZyb20gJiYgcmVsLnRvID09PSB0byk7XG4gIGlmIChvbGQgPT09IHZvaWQgMCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodGV4dENvbG9yICE9PSB2b2lkIDAgJiYgdGV4dENvbG9yICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGVvZiB0ZXh0Q29sb3IgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBPYmplY3QuZW50cmllcyh0ZXh0Q29sb3IpWzBdO1xuICAgICAgb2xkW2tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2xkLnRleHRDb2xvciA9IHRleHRDb2xvcjtcbiAgICB9XG4gIH1cbiAgaWYgKGxpbmVDb2xvciAhPT0gdm9pZCAwICYmIGxpbmVDb2xvciAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlb2YgbGluZUNvbG9yID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBsZXQgW2tleSwgdmFsdWVdID0gT2JqZWN0LmVudHJpZXMobGluZUNvbG9yKVswXTtcbiAgICAgIG9sZFtrZXldID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sZC5saW5lQ29sb3IgPSBsaW5lQ29sb3I7XG4gICAgfVxuICB9XG4gIGlmIChvZmZzZXRYICE9PSB2b2lkIDAgJiYgb2Zmc2V0WCAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlb2Ygb2Zmc2V0WCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IE9iamVjdC5lbnRyaWVzKG9mZnNldFgpWzBdO1xuICAgICAgb2xkW2tleV0gPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sZC5vZmZzZXRYID0gcGFyc2VJbnQob2Zmc2V0WCk7XG4gICAgfVxuICB9XG4gIGlmIChvZmZzZXRZICE9PSB2b2lkIDAgJiYgb2Zmc2V0WSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlb2Ygb2Zmc2V0WSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IE9iamVjdC5lbnRyaWVzKG9mZnNldFkpWzBdO1xuICAgICAgb2xkW2tleV0gPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sZC5vZmZzZXRZID0gcGFyc2VJbnQob2Zmc2V0WSk7XG4gICAgfVxuICB9XG59O1xuY29uc3QgdXBkYXRlTGF5b3V0Q29uZmlnID0gZnVuY3Rpb24odHlwZUM0U2hhcGUsIGM0U2hhcGVJblJvd1BhcmFtLCBjNEJvdW5kYXJ5SW5Sb3dQYXJhbSkge1xuICBsZXQgYzRTaGFwZUluUm93VmFsdWUgPSBjNFNoYXBlSW5Sb3ckMTtcbiAgbGV0IGM0Qm91bmRhcnlJblJvd1ZhbHVlID0gYzRCb3VuZGFyeUluUm93JDE7XG4gIGlmICh0eXBlb2YgYzRTaGFwZUluUm93UGFyYW0gPT09IFwib2JqZWN0XCIpIHtcbiAgICBjb25zdCB2YWx1ZSA9IE9iamVjdC52YWx1ZXMoYzRTaGFwZUluUm93UGFyYW0pWzBdO1xuICAgIGM0U2hhcGVJblJvd1ZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGM0U2hhcGVJblJvd1ZhbHVlID0gcGFyc2VJbnQoYzRTaGFwZUluUm93UGFyYW0pO1xuICB9XG4gIGlmICh0eXBlb2YgYzRCb3VuZGFyeUluUm93UGFyYW0gPT09IFwib2JqZWN0XCIpIHtcbiAgICBjb25zdCB2YWx1ZSA9IE9iamVjdC52YWx1ZXMoYzRCb3VuZGFyeUluUm93UGFyYW0pWzBdO1xuICAgIGM0Qm91bmRhcnlJblJvd1ZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGM0Qm91bmRhcnlJblJvd1ZhbHVlID0gcGFyc2VJbnQoYzRCb3VuZGFyeUluUm93UGFyYW0pO1xuICB9XG4gIGlmIChjNFNoYXBlSW5Sb3dWYWx1ZSA+PSAxKSB7XG4gICAgYzRTaGFwZUluUm93JDEgPSBjNFNoYXBlSW5Sb3dWYWx1ZTtcbiAgfVxuICBpZiAoYzRCb3VuZGFyeUluUm93VmFsdWUgPj0gMSkge1xuICAgIGM0Qm91bmRhcnlJblJvdyQxID0gYzRCb3VuZGFyeUluUm93VmFsdWU7XG4gIH1cbn07XG5jb25zdCBnZXRDNFNoYXBlSW5Sb3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGM0U2hhcGVJblJvdyQxO1xufTtcbmNvbnN0IGdldEM0Qm91bmRhcnlJblJvdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gYzRCb3VuZGFyeUluUm93JDE7XG59O1xuY29uc3QgZ2V0Q3VycmVudEJvdW5kYXJ5UGFyc2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGN1cnJlbnRCb3VuZGFyeVBhcnNlO1xufTtcbmNvbnN0IGdldFBhcmVudEJvdW5kYXJ5UGFyc2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHBhcmVudEJvdW5kYXJ5UGFyc2U7XG59O1xuY29uc3QgZ2V0QzRTaGFwZUFycmF5ID0gZnVuY3Rpb24ocGFyZW50Qm91bmRhcnkpIHtcbiAgaWYgKHBhcmVudEJvdW5kYXJ5ID09PSB2b2lkIDAgfHwgcGFyZW50Qm91bmRhcnkgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYzRTaGFwZUFycmF5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjNFNoYXBlQXJyYXkuZmlsdGVyKChwZXJzb25PclN5c3RlbSkgPT4ge1xuICAgICAgcmV0dXJuIHBlcnNvbk9yU3lzdGVtLnBhcmVudEJvdW5kYXJ5ID09PSBwYXJlbnRCb3VuZGFyeTtcbiAgICB9KTtcbiAgfVxufTtcbmNvbnN0IGdldEM0U2hhcGUgPSBmdW5jdGlvbihhbGlhcykge1xuICByZXR1cm4gYzRTaGFwZUFycmF5LmZpbmQoKHBlcnNvbk9yU3lzdGVtKSA9PiBwZXJzb25PclN5c3RlbS5hbGlhcyA9PT0gYWxpYXMpO1xufTtcbmNvbnN0IGdldEM0U2hhcGVLZXlzID0gZnVuY3Rpb24ocGFyZW50Qm91bmRhcnkpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGdldEM0U2hhcGVBcnJheShwYXJlbnRCb3VuZGFyeSkpO1xufTtcbmNvbnN0IGdldEJvdW5kYXJpZXMgPSBmdW5jdGlvbihwYXJlbnRCb3VuZGFyeSkge1xuICBpZiAocGFyZW50Qm91bmRhcnkgPT09IHZvaWQgMCB8fCBwYXJlbnRCb3VuZGFyeSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBib3VuZGFyaWVzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBib3VuZGFyaWVzLmZpbHRlcigoYm91bmRhcnkpID0+IGJvdW5kYXJ5LnBhcmVudEJvdW5kYXJ5ID09PSBwYXJlbnRCb3VuZGFyeSk7XG4gIH1cbn07XG5jb25zdCBnZXRCb3VuZGFyeXMgPSBnZXRCb3VuZGFyaWVzO1xuY29uc3QgZ2V0UmVscyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVscztcbn07XG5jb25zdCBnZXRUaXRsZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGl0bGU7XG59O1xuY29uc3Qgc2V0V3JhcCA9IGZ1bmN0aW9uKHdyYXBTZXR0aW5nKSB7XG4gIHdyYXBFbmFibGVkID0gd3JhcFNldHRpbmc7XG59O1xuY29uc3QgYXV0b1dyYXAgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdyYXBFbmFibGVkO1xufTtcbmNvbnN0IGNsZWFyID0gZnVuY3Rpb24oKSB7XG4gIGM0U2hhcGVBcnJheSA9IFtdO1xuICBib3VuZGFyaWVzID0gW1xuICAgIHtcbiAgICAgIGFsaWFzOiBcImdsb2JhbFwiLFxuICAgICAgbGFiZWw6IHsgdGV4dDogXCJnbG9iYWxcIiB9LFxuICAgICAgdHlwZTogeyB0ZXh0OiBcImdsb2JhbFwiIH0sXG4gICAgICB0YWdzOiBudWxsLFxuICAgICAgbGluazogbnVsbCxcbiAgICAgIHBhcmVudEJvdW5kYXJ5OiBcIlwiXG4gICAgfVxuICBdO1xuICBwYXJlbnRCb3VuZGFyeVBhcnNlID0gXCJcIjtcbiAgY3VycmVudEJvdW5kYXJ5UGFyc2UgPSBcImdsb2JhbFwiO1xuICBib3VuZGFyeVBhcnNlU3RhY2sgPSBbXCJcIl07XG4gIHJlbHMgPSBbXTtcbiAgYm91bmRhcnlQYXJzZVN0YWNrID0gW1wiXCJdO1xuICB0aXRsZSA9IFwiXCI7XG4gIHdyYXBFbmFibGVkID0gZmFsc2U7XG4gIGM0U2hhcGVJblJvdyQxID0gNDtcbiAgYzRCb3VuZGFyeUluUm93JDEgPSAyO1xufTtcbmNvbnN0IExJTkVUWVBFID0ge1xuICBTT0xJRDogMCxcbiAgRE9UVEVEOiAxLFxuICBOT1RFOiAyLFxuICBTT0xJRF9DUk9TUzogMyxcbiAgRE9UVEVEX0NST1NTOiA0LFxuICBTT0xJRF9PUEVOOiA1LFxuICBET1RURURfT1BFTjogNixcbiAgTE9PUF9TVEFSVDogMTAsXG4gIExPT1BfRU5EOiAxMSxcbiAgQUxUX1NUQVJUOiAxMixcbiAgQUxUX0VMU0U6IDEzLFxuICBBTFRfRU5EOiAxNCxcbiAgT1BUX1NUQVJUOiAxNSxcbiAgT1BUX0VORDogMTYsXG4gIEFDVElWRV9TVEFSVDogMTcsXG4gIEFDVElWRV9FTkQ6IDE4LFxuICBQQVJfU1RBUlQ6IDE5LFxuICBQQVJfQU5EOiAyMCxcbiAgUEFSX0VORDogMjEsXG4gIFJFQ1RfU1RBUlQ6IDIyLFxuICBSRUNUX0VORDogMjMsXG4gIFNPTElEX1BPSU5UOiAyNCxcbiAgRE9UVEVEX1BPSU5UOiAyNVxufTtcbmNvbnN0IEFSUk9XVFlQRSA9IHtcbiAgRklMTEVEOiAwLFxuICBPUEVOOiAxXG59O1xuY29uc3QgUExBQ0VNRU5UID0ge1xuICBMRUZUT0Y6IDAsXG4gIFJJR0hUT0Y6IDEsXG4gIE9WRVI6IDJcbn07XG5jb25zdCBzZXRUaXRsZSA9IGZ1bmN0aW9uKHR4dCkge1xuICBsZXQgc2FuaXRpemVkVGV4dCA9IHNhbml0aXplVGV4dCh0eHQsIGdldENvbmZpZygpKTtcbiAgdGl0bGUgPSBzYW5pdGl6ZWRUZXh0O1xufTtcbmNvbnN0IGRiID0ge1xuICBhZGRQZXJzb25PclN5c3RlbSxcbiAgYWRkUGVyc29uT3JTeXN0ZW1Cb3VuZGFyeSxcbiAgYWRkQ29udGFpbmVyLFxuICBhZGRDb250YWluZXJCb3VuZGFyeSxcbiAgYWRkQ29tcG9uZW50LFxuICBhZGREZXBsb3ltZW50Tm9kZSxcbiAgcG9wQm91bmRhcnlQYXJzZVN0YWNrLFxuICBhZGRSZWwsXG4gIHVwZGF0ZUVsU3R5bGUsXG4gIHVwZGF0ZVJlbFN0eWxlLFxuICB1cGRhdGVMYXlvdXRDb25maWcsXG4gIGF1dG9XcmFwLFxuICBzZXRXcmFwLFxuICBnZXRDNFNoYXBlQXJyYXksXG4gIGdldEM0U2hhcGUsXG4gIGdldEM0U2hhcGVLZXlzLFxuICBnZXRCb3VuZGFyaWVzLFxuICBnZXRCb3VuZGFyeXMsXG4gIGdldEN1cnJlbnRCb3VuZGFyeVBhcnNlLFxuICBnZXRQYXJlbnRCb3VuZGFyeVBhcnNlLFxuICBnZXRSZWxzLFxuICBnZXRUaXRsZSxcbiAgZ2V0QzRUeXBlLFxuICBnZXRDNFNoYXBlSW5Sb3csXG4gIGdldEM0Qm91bmRhcnlJblJvdyxcbiAgc2V0QWNjVGl0bGUsXG4gIGdldEFjY1RpdGxlLFxuICBnZXRBY2NEZXNjcmlwdGlvbixcbiAgc2V0QWNjRGVzY3JpcHRpb24sXG4gIGdldENvbmZpZzogKCkgPT4gZ2V0Q29uZmlnKCkuYzQsXG4gIGNsZWFyLFxuICBMSU5FVFlQRSxcbiAgQVJST1dUWVBFLFxuICBQTEFDRU1FTlQsXG4gIHNldFRpdGxlLFxuICBzZXRDNFR5cGVcbiAgLy8gYXBwbHksXG59O1xuY29uc3QgZHJhd1JlY3QgPSBmdW5jdGlvbihlbGVtLCByZWN0RGF0YSkge1xuICByZXR1cm4gZHJhd1JlY3QkMShlbGVtLCByZWN0RGF0YSk7XG59O1xuY29uc3QgZHJhd0ltYWdlID0gZnVuY3Rpb24oZWxlbSwgd2lkdGgsIGhlaWdodCwgeCwgeSwgbGluaykge1xuICBjb25zdCBpbWFnZUVsZW0gPSBlbGVtLmFwcGVuZChcImltYWdlXCIpO1xuICBpbWFnZUVsZW0uYXR0cihcIndpZHRoXCIsIHdpZHRoKTtcbiAgaW1hZ2VFbGVtLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcbiAgaW1hZ2VFbGVtLmF0dHIoXCJ4XCIsIHgpO1xuICBpbWFnZUVsZW0uYXR0cihcInlcIiwgeSk7XG4gIGxldCBzYW5pdGl6ZWRMaW5rID0gbGluay5zdGFydHNXaXRoKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0XCIpID8gbGluayA6IHNhbml0aXplVXJsKGxpbmspO1xuICBpbWFnZUVsZW0uYXR0cihcInhsaW5rOmhyZWZcIiwgc2FuaXRpemVkTGluayk7XG59O1xuY29uc3QgZHJhd1JlbHMkMSA9IChlbGVtLCByZWxzMiwgY29uZjIpID0+IHtcbiAgY29uc3QgcmVsc0VsZW0gPSBlbGVtLmFwcGVuZChcImdcIik7XG4gIGxldCBpID0gMDtcbiAgZm9yIChsZXQgcmVsIG9mIHJlbHMyKSB7XG4gICAgbGV0IHRleHRDb2xvciA9IHJlbC50ZXh0Q29sb3IgPyByZWwudGV4dENvbG9yIDogXCIjNDQ0NDQ0XCI7XG4gICAgbGV0IHN0cm9rZUNvbG9yID0gcmVsLmxpbmVDb2xvciA/IHJlbC5saW5lQ29sb3IgOiBcIiM0NDQ0NDRcIjtcbiAgICBsZXQgb2Zmc2V0WCA9IHJlbC5vZmZzZXRYID8gcGFyc2VJbnQocmVsLm9mZnNldFgpIDogMDtcbiAgICBsZXQgb2Zmc2V0WSA9IHJlbC5vZmZzZXRZID8gcGFyc2VJbnQocmVsLm9mZnNldFkpIDogMDtcbiAgICBsZXQgdXJsID0gXCJcIjtcbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgbGV0IGxpbmUgPSByZWxzRWxlbS5hcHBlbmQoXCJsaW5lXCIpO1xuICAgICAgbGluZS5hdHRyKFwieDFcIiwgcmVsLnN0YXJ0UG9pbnQueCk7XG4gICAgICBsaW5lLmF0dHIoXCJ5MVwiLCByZWwuc3RhcnRQb2ludC55KTtcbiAgICAgIGxpbmUuYXR0cihcIngyXCIsIHJlbC5lbmRQb2ludC54KTtcbiAgICAgIGxpbmUuYXR0cihcInkyXCIsIHJlbC5lbmRQb2ludC55KTtcbiAgICAgIGxpbmUuYXR0cihcInN0cm9rZS13aWR0aFwiLCBcIjFcIik7XG4gICAgICBsaW5lLmF0dHIoXCJzdHJva2VcIiwgc3Ryb2tlQ29sb3IpO1xuICAgICAgbGluZS5zdHlsZShcImZpbGxcIiwgXCJub25lXCIpO1xuICAgICAgaWYgKHJlbC50eXBlICE9PSBcInJlbF9iXCIpIHtcbiAgICAgICAgbGluZS5hdHRyKFwibWFya2VyLWVuZFwiLCBcInVybChcIiArIHVybCArIFwiI2Fycm93aGVhZClcIik7XG4gICAgICB9XG4gICAgICBpZiAocmVsLnR5cGUgPT09IFwiYmlyZWxcIiB8fCByZWwudHlwZSA9PT0gXCJyZWxfYlwiKSB7XG4gICAgICAgIGxpbmUuYXR0cihcIm1hcmtlci1zdGFydFwiLCBcInVybChcIiArIHVybCArIFwiI2Fycm93ZW5kKVwiKTtcbiAgICAgIH1cbiAgICAgIGkgPSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGxpbmUgPSByZWxzRWxlbS5hcHBlbmQoXCJwYXRoXCIpO1xuICAgICAgbGluZS5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIikuYXR0cihcInN0cm9rZS13aWR0aFwiLCBcIjFcIikuYXR0cihcInN0cm9rZVwiLCBzdHJva2VDb2xvcikuYXR0cihcbiAgICAgICAgXCJkXCIsXG4gICAgICAgIFwiTXN0YXJ0eCxzdGFydHkgUWNvbnRyb2x4LGNvbnRyb2x5IHN0b3B4LHN0b3B5IFwiLnJlcGxhY2VBbGwoXCJzdGFydHhcIiwgcmVsLnN0YXJ0UG9pbnQueCkucmVwbGFjZUFsbChcInN0YXJ0eVwiLCByZWwuc3RhcnRQb2ludC55KS5yZXBsYWNlQWxsKFxuICAgICAgICAgIFwiY29udHJvbHhcIixcbiAgICAgICAgICByZWwuc3RhcnRQb2ludC54ICsgKHJlbC5lbmRQb2ludC54IC0gcmVsLnN0YXJ0UG9pbnQueCkgLyAyIC0gKHJlbC5lbmRQb2ludC54IC0gcmVsLnN0YXJ0UG9pbnQueCkgLyA0XG4gICAgICAgICkucmVwbGFjZUFsbChcImNvbnRyb2x5XCIsIHJlbC5zdGFydFBvaW50LnkgKyAocmVsLmVuZFBvaW50LnkgLSByZWwuc3RhcnRQb2ludC55KSAvIDIpLnJlcGxhY2VBbGwoXCJzdG9weFwiLCByZWwuZW5kUG9pbnQueCkucmVwbGFjZUFsbChcInN0b3B5XCIsIHJlbC5lbmRQb2ludC55KVxuICAgICAgKTtcbiAgICAgIGlmIChyZWwudHlwZSAhPT0gXCJyZWxfYlwiKSB7XG4gICAgICAgIGxpbmUuYXR0cihcIm1hcmtlci1lbmRcIiwgXCJ1cmwoXCIgKyB1cmwgKyBcIiNhcnJvd2hlYWQpXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHJlbC50eXBlID09PSBcImJpcmVsXCIgfHwgcmVsLnR5cGUgPT09IFwicmVsX2JcIikge1xuICAgICAgICBsaW5lLmF0dHIoXCJtYXJrZXItc3RhcnRcIiwgXCJ1cmwoXCIgKyB1cmwgKyBcIiNhcnJvd2VuZClcIik7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBtZXNzYWdlQ29uZiA9IGNvbmYyLm1lc3NhZ2VGb250KCk7XG4gICAgX2RyYXdUZXh0Q2FuZGlkYXRlRnVuYyhjb25mMikoXG4gICAgICByZWwubGFiZWwudGV4dCxcbiAgICAgIHJlbHNFbGVtLFxuICAgICAgTWF0aC5taW4ocmVsLnN0YXJ0UG9pbnQueCwgcmVsLmVuZFBvaW50LngpICsgTWF0aC5hYnMocmVsLmVuZFBvaW50LnggLSByZWwuc3RhcnRQb2ludC54KSAvIDIgKyBvZmZzZXRYLFxuICAgICAgTWF0aC5taW4ocmVsLnN0YXJ0UG9pbnQueSwgcmVsLmVuZFBvaW50LnkpICsgTWF0aC5hYnMocmVsLmVuZFBvaW50LnkgLSByZWwuc3RhcnRQb2ludC55KSAvIDIgKyBvZmZzZXRZLFxuICAgICAgcmVsLmxhYmVsLndpZHRoLFxuICAgICAgcmVsLmxhYmVsLmhlaWdodCxcbiAgICAgIHsgZmlsbDogdGV4dENvbG9yIH0sXG4gICAgICBtZXNzYWdlQ29uZlxuICAgICk7XG4gICAgaWYgKHJlbC50ZWNobiAmJiByZWwudGVjaG4udGV4dCAhPT0gXCJcIikge1xuICAgICAgbWVzc2FnZUNvbmYgPSBjb25mMi5tZXNzYWdlRm9udCgpO1xuICAgICAgX2RyYXdUZXh0Q2FuZGlkYXRlRnVuYyhjb25mMikoXG4gICAgICAgIFwiW1wiICsgcmVsLnRlY2huLnRleHQgKyBcIl1cIixcbiAgICAgICAgcmVsc0VsZW0sXG4gICAgICAgIE1hdGgubWluKHJlbC5zdGFydFBvaW50LngsIHJlbC5lbmRQb2ludC54KSArIE1hdGguYWJzKHJlbC5lbmRQb2ludC54IC0gcmVsLnN0YXJ0UG9pbnQueCkgLyAyICsgb2Zmc2V0WCxcbiAgICAgICAgTWF0aC5taW4ocmVsLnN0YXJ0UG9pbnQueSwgcmVsLmVuZFBvaW50LnkpICsgTWF0aC5hYnMocmVsLmVuZFBvaW50LnkgLSByZWwuc3RhcnRQb2ludC55KSAvIDIgKyBjb25mMi5tZXNzYWdlRm9udFNpemUgKyA1ICsgb2Zmc2V0WSxcbiAgICAgICAgTWF0aC5tYXgocmVsLmxhYmVsLndpZHRoLCByZWwudGVjaG4ud2lkdGgpLFxuICAgICAgICByZWwudGVjaG4uaGVpZ2h0LFxuICAgICAgICB7IGZpbGw6IHRleHRDb2xvciwgXCJmb250LXN0eWxlXCI6IFwiaXRhbGljXCIgfSxcbiAgICAgICAgbWVzc2FnZUNvbmZcbiAgICAgICk7XG4gICAgfVxuICB9XG59O1xuY29uc3QgZHJhd0JvdW5kYXJ5JDEgPSBmdW5jdGlvbihlbGVtLCBib3VuZGFyeSwgY29uZjIpIHtcbiAgY29uc3QgYm91bmRhcnlFbGVtID0gZWxlbS5hcHBlbmQoXCJnXCIpO1xuICBsZXQgZmlsbENvbG9yID0gYm91bmRhcnkuYmdDb2xvciA/IGJvdW5kYXJ5LmJnQ29sb3IgOiBcIm5vbmVcIjtcbiAgbGV0IHN0cm9rZUNvbG9yID0gYm91bmRhcnkuYm9yZGVyQ29sb3IgPyBib3VuZGFyeS5ib3JkZXJDb2xvciA6IFwiIzQ0NDQ0NFwiO1xuICBsZXQgZm9udENvbG9yID0gYm91bmRhcnkuZm9udENvbG9yID8gYm91bmRhcnkuZm9udENvbG9yIDogXCJibGFja1wiO1xuICBsZXQgYXR0cnNWYWx1ZSA9IHsgXCJzdHJva2Utd2lkdGhcIjogMSwgXCJzdHJva2UtZGFzaGFycmF5XCI6IFwiNy4wLDcuMFwiIH07XG4gIGlmIChib3VuZGFyeS5ub2RlVHlwZSkge1xuICAgIGF0dHJzVmFsdWUgPSB7IFwic3Ryb2tlLXdpZHRoXCI6IDEgfTtcbiAgfVxuICBsZXQgcmVjdERhdGEgPSB7XG4gICAgeDogYm91bmRhcnkueCxcbiAgICB5OiBib3VuZGFyeS55LFxuICAgIGZpbGw6IGZpbGxDb2xvcixcbiAgICBzdHJva2U6IHN0cm9rZUNvbG9yLFxuICAgIHdpZHRoOiBib3VuZGFyeS53aWR0aCxcbiAgICBoZWlnaHQ6IGJvdW5kYXJ5LmhlaWdodCxcbiAgICByeDogMi41LFxuICAgIHJ5OiAyLjUsXG4gICAgYXR0cnM6IGF0dHJzVmFsdWVcbiAgfTtcbiAgZHJhd1JlY3QoYm91bmRhcnlFbGVtLCByZWN0RGF0YSk7XG4gIGxldCBib3VuZGFyeUNvbmYgPSBjb25mMi5ib3VuZGFyeUZvbnQoKTtcbiAgYm91bmRhcnlDb25mLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgYm91bmRhcnlDb25mLmZvbnRTaXplID0gYm91bmRhcnlDb25mLmZvbnRTaXplICsgMjtcbiAgYm91bmRhcnlDb25mLmZvbnRDb2xvciA9IGZvbnRDb2xvcjtcbiAgX2RyYXdUZXh0Q2FuZGlkYXRlRnVuYyhjb25mMikoXG4gICAgYm91bmRhcnkubGFiZWwudGV4dCxcbiAgICBib3VuZGFyeUVsZW0sXG4gICAgYm91bmRhcnkueCxcbiAgICBib3VuZGFyeS55ICsgYm91bmRhcnkubGFiZWwuWSxcbiAgICBib3VuZGFyeS53aWR0aCxcbiAgICBib3VuZGFyeS5oZWlnaHQsXG4gICAgeyBmaWxsOiBcIiM0NDQ0NDRcIiB9LFxuICAgIGJvdW5kYXJ5Q29uZlxuICApO1xuICBpZiAoYm91bmRhcnkudHlwZSAmJiBib3VuZGFyeS50eXBlLnRleHQgIT09IFwiXCIpIHtcbiAgICBib3VuZGFyeUNvbmYgPSBjb25mMi5ib3VuZGFyeUZvbnQoKTtcbiAgICBib3VuZGFyeUNvbmYuZm9udENvbG9yID0gZm9udENvbG9yO1xuICAgIF9kcmF3VGV4dENhbmRpZGF0ZUZ1bmMoY29uZjIpKFxuICAgICAgYm91bmRhcnkudHlwZS50ZXh0LFxuICAgICAgYm91bmRhcnlFbGVtLFxuICAgICAgYm91bmRhcnkueCxcbiAgICAgIGJvdW5kYXJ5LnkgKyBib3VuZGFyeS50eXBlLlksXG4gICAgICBib3VuZGFyeS53aWR0aCxcbiAgICAgIGJvdW5kYXJ5LmhlaWdodCxcbiAgICAgIHsgZmlsbDogXCIjNDQ0NDQ0XCIgfSxcbiAgICAgIGJvdW5kYXJ5Q29uZlxuICAgICk7XG4gIH1cbiAgaWYgKGJvdW5kYXJ5LmRlc2NyICYmIGJvdW5kYXJ5LmRlc2NyLnRleHQgIT09IFwiXCIpIHtcbiAgICBib3VuZGFyeUNvbmYgPSBjb25mMi5ib3VuZGFyeUZvbnQoKTtcbiAgICBib3VuZGFyeUNvbmYuZm9udFNpemUgPSBib3VuZGFyeUNvbmYuZm9udFNpemUgLSAyO1xuICAgIGJvdW5kYXJ5Q29uZi5mb250Q29sb3IgPSBmb250Q29sb3I7XG4gICAgX2RyYXdUZXh0Q2FuZGlkYXRlRnVuYyhjb25mMikoXG4gICAgICBib3VuZGFyeS5kZXNjci50ZXh0LFxuICAgICAgYm91bmRhcnlFbGVtLFxuICAgICAgYm91bmRhcnkueCxcbiAgICAgIGJvdW5kYXJ5LnkgKyBib3VuZGFyeS5kZXNjci5ZLFxuICAgICAgYm91bmRhcnkud2lkdGgsXG4gICAgICBib3VuZGFyeS5oZWlnaHQsXG4gICAgICB7IGZpbGw6IFwiIzQ0NDQ0NFwiIH0sXG4gICAgICBib3VuZGFyeUNvbmZcbiAgICApO1xuICB9XG59O1xuY29uc3QgZHJhd0M0U2hhcGUgPSBmdW5jdGlvbihlbGVtLCBjNFNoYXBlLCBjb25mMikge1xuICB2YXIgX2E7XG4gIGxldCBmaWxsQ29sb3IgPSBjNFNoYXBlLmJnQ29sb3IgPyBjNFNoYXBlLmJnQ29sb3IgOiBjb25mMltjNFNoYXBlLnR5cGVDNFNoYXBlLnRleHQgKyBcIl9iZ19jb2xvclwiXTtcbiAgbGV0IHN0cm9rZUNvbG9yID0gYzRTaGFwZS5ib3JkZXJDb2xvciA/IGM0U2hhcGUuYm9yZGVyQ29sb3IgOiBjb25mMltjNFNoYXBlLnR5cGVDNFNoYXBlLnRleHQgKyBcIl9ib3JkZXJfY29sb3JcIl07XG4gIGxldCBmb250Q29sb3IgPSBjNFNoYXBlLmZvbnRDb2xvciA/IGM0U2hhcGUuZm9udENvbG9yIDogXCIjRkZGRkZGXCI7XG4gIGxldCBwZXJzb25JbWcgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBSUFBQURZWUc3UUFBQUNEMGxFUVZSNFh1MllvVTRFTVJDR1QrNGo4QWk4QWhhSDRRSGdBVWpRdUZNRUNVZ01JVWd3SkFnTWhnUXNBWVVpSkNpUUlCQlkrRUlUc2pmVGRtZTZWMjR2NGM4dnlHYmIrWmpPdE4wYk5jdmpRWG1rSDgzV3ZZQld0bzZQTG02djdwN3VIMS93MmZYRCtQQnljWDFQdjJsM0lkRG0vdm43eCtkWFFpQXViUnpvVVJhN2dSWldkMGlHUklpSmJPbmhuZllCUVpOSmpOYnV5WTJlSkc4ZmtERTNiYkc0ZXA2TUhVQXNnWXhtRTNuVnM2VnNCV0pTR2Njc09sRlBtTElWaU16TE9CN3BDVk8yQXRISk1vaEg3Rmg2enFpdFFLN20wckp2QVZZZ0djRXBlLy9QTGREejY1c000cEY5TjdJQ2NYREtJQjVOdjZqN3REME5vU2RNMlFyVTlHZzBld0UxTHFCaEhSM0JCZHZqMnZhcG5pZGpIeEQvcTZ2ZDdQdmhyMzFBd2NZOGVYTVRYQUtFQ1paSkZYdUVxMjdhTGdRSzV1TE1vaENlbkdHdUdld094U2pCdllCcWVHNkIrTnFpYmxnZ2RqbmMrWlhEeStGTkZwRnp3NzZPM1VCQVJPdVhoNkZvaUFjZjVnOWVUdlVnenkwbldnNkk4Y1hIUlVwZzViT1ZCQ28rS0RwRmFqT2YyM0dnUG1lN1JTUStsYWNJRU5VZ0o2Z2cxazZIamdPbHFuTHFpcDR0RXVodjBoTkVNWFVEMGNseVhFM3A2cFpBMFMybm52VGxYd0xKRVpXbGI3Y1RRSDErVVNnVE40VmhBZW5tL3dlYTFPQ0FPbXFvNmZFMVdDYjlXU0tCYWgrcmJVV1BXQW1FMlJ2azBBcGlCNDVlT3lOQXpVOHhjVHZqOEt2a0tFb09hSVllSE5BM1p1eWdBdkZNVU8wQUFBQUFTVVZPUks1Q1lJST1cIjtcbiAgc3dpdGNoIChjNFNoYXBlLnR5cGVDNFNoYXBlLnRleHQpIHtcbiAgICBjYXNlIFwicGVyc29uXCI6XG4gICAgICBwZXJzb25JbWcgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBSUFBQURZWUc3UUFBQUNEMGxFUVZSNFh1MllvVTRFTVJDR1QrNGo4QWk4QWhhSDRRSGdBVWpRdUZNRUNVZ01JVWd3SkFnTWhnUXNBWVVpSkNpUUlCQlkrRUlUc2pmVGRtZTZWMjR2NGM4dnlHYmIrWmpPdE4wYk5jdmpRWG1rSDgzV3ZZQld0bzZQTG02djdwN3VIMS93MmZYRCtQQnljWDFQdjJsM0lkRG0vdm43eCtkWFFpQXViUnpvVVJhN2dSWldkMGlHUklpSmJPbmhuZllCUVpOSmpOYnV5WTJlSkc4ZmtERTNiYkc0ZXA2TUhVQXNnWXhtRTNuVnM2VnNCV0pTR2Njc09sRlBtTElWaU16TE9CN3BDVk8yQXRISk1vaEg3Rmg2enFpdFFLN20wckp2QVZZZ0djRXBlLy9QTGREejY1c000cEY5TjdJQ2NYREtJQjVOdjZqN3REME5vU2RNMlFyVTlHZzBld0UxTHFCaEhSM0JCZHZqMnZhcG5pZGpIeEQvcTZ2ZDdQdmhyMzFBd2NZOGVYTVRYQUtFQ1paSkZYdUVxMjdhTGdRSzV1TE1vaENlbkdHdUdld094U2pCdllCcWVHNkIrTnFpYmxnZ2RqbmMrWlhEeStGTkZwRnp3NzZPM1VCQVJPdVhoNkZvaUFjZjVnOWVUdlVnenkwbldnNkk4Y1hIUlVwZzViT1ZCQ28rS0RwRmFqT2YyM0dnUG1lN1JTUStsYWNJRU5VZ0o2Z2cxazZIamdPbHFuTHFpcDR0RXVodjBoTkVNWFVEMGNseVhFM3A2cFpBMFMybm52VGxYd0xKRVpXbGI3Y1RRSDErVVNnVE40VmhBZW5tL3dlYTFPQ0FPbXFvNmZFMVdDYjlXU0tCYWgrcmJVV1BXQW1FMlJ2azBBcGlCNDVlT3lOQXpVOHhjVHZqOEt2a0tFb09hSVllSE5BM1p1eWdBdkZNVU8wQUFBQUFTVVZPUks1Q1lJST1cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJleHRlcm5hbF9wZXJzb25cIjpcbiAgICAgIHBlcnNvbkltZyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FJQUFBRFlZRzdRQUFBQjZFbEVRVlI0WHUyWUxZK0VNQkNHOStkV3IwYWowV2cwR28xR28wK2o4WGR2MnVUQ3Z2MWdwdDBlYkhLUHVoRGFlVzQ2MDVaOW1Kdng0QWRYVXlUVWRkMDh6K3U2ZmxtV1pSbkhzV2thZms5RHB0QXdEUHUrZjBlQVl0dTJQRWFHV3VqNWZDSVpyQkFDMmVMQkFuUkNzRWtreG1lYUpwN2lESjJRTURkSHNMZzhTeEtGRUphQW84bEFYbm11T0ZJaFRNcHh4S0FUZWJvNFVpRmtudU5vNE9uaVNJWFF5UnhFQTNZc25qR0NWRWpWWEQ3eUxVQXF4QkdVeVB2L1k0VzJiZU1nR3VTN2tWUUlCeWNIMGZEK29pNXBlelFFVHhkSEttUUtHazFlUUVZbGRLK2p3NUd4UGZaOXo3TWswUW5oZjFXMW0zdy8vRVVuNUJEbVNac2JSNDRRUUxCRXFyQkhxT3JtU0thUUF4ZG5MQXJDcnhaY003QTdaS3M0aW9ScThMRkMrTnBDM1dDQkpzdnBWdzVlZG05aUVYRnV5TmZ4WEFnU3dmckZRMWMwaU5kYThBZGVqdlVnbmt0T3RKUVF4bWNmRnpHZ2xjNVdWQ2o3b0RnRnFVMThib2VGU3M1MkNVaDhMRThCSVZRRFQxQUJyQjBIdGdTRVlsWDVkb0puQ3d2OVRYb2NLQ2FLYm53aGRES1BxNGxmM1N3VTNITHE0Vi8rV1loSFZNYS8zYjRJbGZ5aWtBZHVDa2NCYzdtUTMvei9RcS9jVHVpa2hrekIxMkFlL21jSkM5VStWbzhFajFnV0F0Z2JlR2dGc0FNSHI1MEJJV09MQ2JlenZocEJGVWRZNkVKdUovUURXMFhvTVg2MHpaMEFBQUFBU1VWT1JLNUNZSUk9XCI7XG4gICAgICBicmVhaztcbiAgfVxuICBjb25zdCBjNFNoYXBlRWxlbSA9IGVsZW0uYXBwZW5kKFwiZ1wiKTtcbiAgYzRTaGFwZUVsZW0uYXR0cihcImNsYXNzXCIsIFwicGVyc29uLW1hblwiKTtcbiAgY29uc3QgcmVjdCA9IGdldE5vdGVSZWN0KCk7XG4gIHN3aXRjaCAoYzRTaGFwZS50eXBlQzRTaGFwZS50ZXh0KSB7XG4gICAgY2FzZSBcInBlcnNvblwiOlxuICAgIGNhc2UgXCJleHRlcm5hbF9wZXJzb25cIjpcbiAgICBjYXNlIFwic3lzdGVtXCI6XG4gICAgY2FzZSBcImV4dGVybmFsX3N5c3RlbVwiOlxuICAgIGNhc2UgXCJjb250YWluZXJcIjpcbiAgICBjYXNlIFwiZXh0ZXJuYWxfY29udGFpbmVyXCI6XG4gICAgY2FzZSBcImNvbXBvbmVudFwiOlxuICAgIGNhc2UgXCJleHRlcm5hbF9jb21wb25lbnRcIjpcbiAgICAgIHJlY3QueCA9IGM0U2hhcGUueDtcbiAgICAgIHJlY3QueSA9IGM0U2hhcGUueTtcbiAgICAgIHJlY3QuZmlsbCA9IGZpbGxDb2xvcjtcbiAgICAgIHJlY3Qud2lkdGggPSBjNFNoYXBlLndpZHRoO1xuICAgICAgcmVjdC5oZWlnaHQgPSBjNFNoYXBlLmhlaWdodDtcbiAgICAgIHJlY3Quc3Ryb2tlID0gc3Ryb2tlQ29sb3I7XG4gICAgICByZWN0LnJ4ID0gMi41O1xuICAgICAgcmVjdC5yeSA9IDIuNTtcbiAgICAgIHJlY3QuYXR0cnMgPSB7IFwic3Ryb2tlLXdpZHRoXCI6IDAuNSB9O1xuICAgICAgZHJhd1JlY3QoYzRTaGFwZUVsZW0sIHJlY3QpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInN5c3RlbV9kYlwiOlxuICAgIGNhc2UgXCJleHRlcm5hbF9zeXN0ZW1fZGJcIjpcbiAgICBjYXNlIFwiY29udGFpbmVyX2RiXCI6XG4gICAgY2FzZSBcImV4dGVybmFsX2NvbnRhaW5lcl9kYlwiOlxuICAgIGNhc2UgXCJjb21wb25lbnRfZGJcIjpcbiAgICBjYXNlIFwiZXh0ZXJuYWxfY29tcG9uZW50X2RiXCI6XG4gICAgICBjNFNoYXBlRWxlbS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJmaWxsXCIsIGZpbGxDb2xvcikuYXR0cihcInN0cm9rZS13aWR0aFwiLCBcIjAuNVwiKS5hdHRyKFwic3Ryb2tlXCIsIHN0cm9rZUNvbG9yKS5hdHRyKFxuICAgICAgICBcImRcIixcbiAgICAgICAgXCJNc3RhcnR4LHN0YXJ0eWMwLC0xMCBoYWxmLC0xMCBoYWxmLC0xMGMwLDAgaGFsZiwwIGhhbGYsMTBsMCxoZWlnaHRjMCwxMCAtaGFsZiwxMCAtaGFsZiwxMGMwLDAgLWhhbGYsMCAtaGFsZiwtMTBsMCwtaGVpZ2h0XCIucmVwbGFjZUFsbChcInN0YXJ0eFwiLCBjNFNoYXBlLngpLnJlcGxhY2VBbGwoXCJzdGFydHlcIiwgYzRTaGFwZS55KS5yZXBsYWNlQWxsKFwiaGFsZlwiLCBjNFNoYXBlLndpZHRoIC8gMikucmVwbGFjZUFsbChcImhlaWdodFwiLCBjNFNoYXBlLmhlaWdodClcbiAgICAgICk7XG4gICAgICBjNFNoYXBlRWxlbS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMC41XCIpLmF0dHIoXCJzdHJva2VcIiwgc3Ryb2tlQ29sb3IpLmF0dHIoXG4gICAgICAgIFwiZFwiLFxuICAgICAgICBcIk1zdGFydHgsc3RhcnR5YzAsMTAgaGFsZiwxMCBoYWxmLDEwYzAsMCBoYWxmLDAgaGFsZiwtMTBcIi5yZXBsYWNlQWxsKFwic3RhcnR4XCIsIGM0U2hhcGUueCkucmVwbGFjZUFsbChcInN0YXJ0eVwiLCBjNFNoYXBlLnkpLnJlcGxhY2VBbGwoXCJoYWxmXCIsIGM0U2hhcGUud2lkdGggLyAyKVxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzeXN0ZW1fcXVldWVcIjpcbiAgICBjYXNlIFwiZXh0ZXJuYWxfc3lzdGVtX3F1ZXVlXCI6XG4gICAgY2FzZSBcImNvbnRhaW5lcl9xdWV1ZVwiOlxuICAgIGNhc2UgXCJleHRlcm5hbF9jb250YWluZXJfcXVldWVcIjpcbiAgICBjYXNlIFwiY29tcG9uZW50X3F1ZXVlXCI6XG4gICAgY2FzZSBcImV4dGVybmFsX2NvbXBvbmVudF9xdWV1ZVwiOlxuICAgICAgYzRTaGFwZUVsZW0uYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZmlsbFwiLCBmaWxsQ29sb3IpLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIwLjVcIikuYXR0cihcInN0cm9rZVwiLCBzdHJva2VDb2xvcikuYXR0cihcbiAgICAgICAgXCJkXCIsXG4gICAgICAgIFwiTXN0YXJ0eCxzdGFydHlsd2lkdGgsMGM1LDAgNSxoYWxmIDUsaGFsZmMwLDAgMCxoYWxmIC01LGhhbGZsLXdpZHRoLDBjLTUsMCAtNSwtaGFsZiAtNSwtaGFsZmMwLDAgMCwtaGFsZiA1LC1oYWxmXCIucmVwbGFjZUFsbChcInN0YXJ0eFwiLCBjNFNoYXBlLngpLnJlcGxhY2VBbGwoXCJzdGFydHlcIiwgYzRTaGFwZS55KS5yZXBsYWNlQWxsKFwid2lkdGhcIiwgYzRTaGFwZS53aWR0aCkucmVwbGFjZUFsbChcImhhbGZcIiwgYzRTaGFwZS5oZWlnaHQgLyAyKVxuICAgICAgKTtcbiAgICAgIGM0U2hhcGVFbGVtLmFwcGVuZChcInBhdGhcIikuYXR0cihcImZpbGxcIiwgXCJub25lXCIpLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIwLjVcIikuYXR0cihcInN0cm9rZVwiLCBzdHJva2VDb2xvcikuYXR0cihcbiAgICAgICAgXCJkXCIsXG4gICAgICAgIFwiTXN0YXJ0eCxzdGFydHljLTUsMCAtNSxoYWxmIC01LGhhbGZjMCxoYWxmIDUsaGFsZiA1LGhhbGZcIi5yZXBsYWNlQWxsKFwic3RhcnR4XCIsIGM0U2hhcGUueCArIGM0U2hhcGUud2lkdGgpLnJlcGxhY2VBbGwoXCJzdGFydHlcIiwgYzRTaGFwZS55KS5yZXBsYWNlQWxsKFwiaGFsZlwiLCBjNFNoYXBlLmhlaWdodCAvIDIpXG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgbGV0IGM0U2hhcGVGb250Q29uZiA9IGdldEM0U2hhcGVGb250KGNvbmYyLCBjNFNoYXBlLnR5cGVDNFNoYXBlLnRleHQpO1xuICBjNFNoYXBlRWxlbS5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJmaWxsXCIsIGZvbnRDb2xvcikuYXR0cihcImZvbnQtZmFtaWx5XCIsIGM0U2hhcGVGb250Q29uZi5mb250RmFtaWx5KS5hdHRyKFwiZm9udC1zaXplXCIsIGM0U2hhcGVGb250Q29uZi5mb250U2l6ZSAtIDIpLmF0dHIoXCJmb250LXN0eWxlXCIsIFwiaXRhbGljXCIpLmF0dHIoXCJsZW5ndGhBZGp1c3RcIiwgXCJzcGFjaW5nXCIpLmF0dHIoXCJ0ZXh0TGVuZ3RoXCIsIGM0U2hhcGUudHlwZUM0U2hhcGUud2lkdGgpLmF0dHIoXCJ4XCIsIGM0U2hhcGUueCArIGM0U2hhcGUud2lkdGggLyAyIC0gYzRTaGFwZS50eXBlQzRTaGFwZS53aWR0aCAvIDIpLmF0dHIoXCJ5XCIsIGM0U2hhcGUueSArIGM0U2hhcGUudHlwZUM0U2hhcGUuWSkudGV4dChcIjw8XCIgKyBjNFNoYXBlLnR5cGVDNFNoYXBlLnRleHQgKyBcIj4+XCIpO1xuICBzd2l0Y2ggKGM0U2hhcGUudHlwZUM0U2hhcGUudGV4dCkge1xuICAgIGNhc2UgXCJwZXJzb25cIjpcbiAgICBjYXNlIFwiZXh0ZXJuYWxfcGVyc29uXCI6XG4gICAgICBkcmF3SW1hZ2UoXG4gICAgICAgIGM0U2hhcGVFbGVtLFxuICAgICAgICA0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIGM0U2hhcGUueCArIGM0U2hhcGUud2lkdGggLyAyIC0gMjQsXG4gICAgICAgIGM0U2hhcGUueSArIGM0U2hhcGUuaW1hZ2UuWSxcbiAgICAgICAgcGVyc29uSW1nXG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgbGV0IHRleHRGb250Q29uZiA9IGNvbmYyW2M0U2hhcGUudHlwZUM0U2hhcGUudGV4dCArIFwiRm9udFwiXSgpO1xuICB0ZXh0Rm9udENvbmYuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICB0ZXh0Rm9udENvbmYuZm9udFNpemUgPSB0ZXh0Rm9udENvbmYuZm9udFNpemUgKyAyO1xuICB0ZXh0Rm9udENvbmYuZm9udENvbG9yID0gZm9udENvbG9yO1xuICBfZHJhd1RleHRDYW5kaWRhdGVGdW5jKGNvbmYyKShcbiAgICBjNFNoYXBlLmxhYmVsLnRleHQsXG4gICAgYzRTaGFwZUVsZW0sXG4gICAgYzRTaGFwZS54LFxuICAgIGM0U2hhcGUueSArIGM0U2hhcGUubGFiZWwuWSxcbiAgICBjNFNoYXBlLndpZHRoLFxuICAgIGM0U2hhcGUuaGVpZ2h0LFxuICAgIHsgZmlsbDogZm9udENvbG9yIH0sXG4gICAgdGV4dEZvbnRDb25mXG4gICk7XG4gIHRleHRGb250Q29uZiA9IGNvbmYyW2M0U2hhcGUudHlwZUM0U2hhcGUudGV4dCArIFwiRm9udFwiXSgpO1xuICB0ZXh0Rm9udENvbmYuZm9udENvbG9yID0gZm9udENvbG9yO1xuICBpZiAoYzRTaGFwZS50ZWNobiAmJiAoKF9hID0gYzRTaGFwZS50ZWNobikgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnRleHQpICE9PSBcIlwiKSB7XG4gICAgX2RyYXdUZXh0Q2FuZGlkYXRlRnVuYyhjb25mMikoXG4gICAgICBjNFNoYXBlLnRlY2huLnRleHQsXG4gICAgICBjNFNoYXBlRWxlbSxcbiAgICAgIGM0U2hhcGUueCxcbiAgICAgIGM0U2hhcGUueSArIGM0U2hhcGUudGVjaG4uWSxcbiAgICAgIGM0U2hhcGUud2lkdGgsXG4gICAgICBjNFNoYXBlLmhlaWdodCxcbiAgICAgIHsgZmlsbDogZm9udENvbG9yLCBcImZvbnQtc3R5bGVcIjogXCJpdGFsaWNcIiB9LFxuICAgICAgdGV4dEZvbnRDb25mXG4gICAgKTtcbiAgfSBlbHNlIGlmIChjNFNoYXBlLnR5cGUgJiYgYzRTaGFwZS50eXBlLnRleHQgIT09IFwiXCIpIHtcbiAgICBfZHJhd1RleHRDYW5kaWRhdGVGdW5jKGNvbmYyKShcbiAgICAgIGM0U2hhcGUudHlwZS50ZXh0LFxuICAgICAgYzRTaGFwZUVsZW0sXG4gICAgICBjNFNoYXBlLngsXG4gICAgICBjNFNoYXBlLnkgKyBjNFNoYXBlLnR5cGUuWSxcbiAgICAgIGM0U2hhcGUud2lkdGgsXG4gICAgICBjNFNoYXBlLmhlaWdodCxcbiAgICAgIHsgZmlsbDogZm9udENvbG9yLCBcImZvbnQtc3R5bGVcIjogXCJpdGFsaWNcIiB9LFxuICAgICAgdGV4dEZvbnRDb25mXG4gICAgKTtcbiAgfVxuICBpZiAoYzRTaGFwZS5kZXNjciAmJiBjNFNoYXBlLmRlc2NyLnRleHQgIT09IFwiXCIpIHtcbiAgICB0ZXh0Rm9udENvbmYgPSBjb25mMi5wZXJzb25Gb250KCk7XG4gICAgdGV4dEZvbnRDb25mLmZvbnRDb2xvciA9IGZvbnRDb2xvcjtcbiAgICBfZHJhd1RleHRDYW5kaWRhdGVGdW5jKGNvbmYyKShcbiAgICAgIGM0U2hhcGUuZGVzY3IudGV4dCxcbiAgICAgIGM0U2hhcGVFbGVtLFxuICAgICAgYzRTaGFwZS54LFxuICAgICAgYzRTaGFwZS55ICsgYzRTaGFwZS5kZXNjci5ZLFxuICAgICAgYzRTaGFwZS53aWR0aCxcbiAgICAgIGM0U2hhcGUuaGVpZ2h0LFxuICAgICAgeyBmaWxsOiBmb250Q29sb3IgfSxcbiAgICAgIHRleHRGb250Q29uZlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGM0U2hhcGUuaGVpZ2h0O1xufTtcbmNvbnN0IGluc2VydERhdGFiYXNlSWNvbiA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgZWxlbS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcInN5bWJvbFwiKS5hdHRyKFwiaWRcIiwgXCJkYXRhYmFzZVwiKS5hdHRyKFwiZmlsbC1ydWxlXCIsIFwiZXZlbm9kZFwiKS5hdHRyKFwiY2xpcC1ydWxlXCIsIFwiZXZlbm9kZFwiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJzY2FsZSguNSlcIikuYXR0cihcbiAgICBcImRcIixcbiAgICBcIk0xMi4yNTguMDAxbC4yNTYuMDA0LjI1NS4wMDUuMjUzLjAwOC4yNTEuMDEuMjQ5LjAxMi4yNDcuMDE1LjI0Ni4wMTYuMjQyLjAxOS4yNDEuMDIuMjM5LjAyMy4yMzYuMDI0LjIzMy4wMjcuMjMxLjAyOC4yMjkuMDMxLjIyNS4wMzIuMjIzLjAzNC4yMi4wMzYuMjE3LjAzOC4yMTQuMDQuMjExLjA0MS4yMDguMDQzLjIwNS4wNDUuMjAxLjA0Ni4xOTguMDQ4LjE5NC4wNS4xOTEuMDUxLjE4Ny4wNTMuMTgzLjA1NC4xOC4wNTYuMTc1LjA1Ny4xNzIuMDU5LjE2OC4wNi4xNjMuMDYxLjE2LjA2My4xNTUuMDY0LjE1LjA2Ni4wNzQuMDMzLjA3My4wMzMuMDcxLjAzNC4wNy4wMzQuMDY5LjAzNS4wNjguMDM1LjA2Ny4wMzUuMDY2LjAzNS4wNjQuMDM2LjA2NC4wMzYuMDYyLjAzNi4wNi4wMzYuMDYuMDM3LjA1OC4wMzcuMDU4LjAzNy4wNTUuMDM4LjA1NS4wMzguMDUzLjAzOC4wNTIuMDM4LjA1MS4wMzkuMDUuMDM5LjA0OC4wMzkuMDQ3LjAzOS4wNDUuMDQuMDQ0LjA0LjA0My4wNC4wNDEuMDQuMDQuMDQxLjAzOS4wNDEuMDM3LjA0MS4wMzYuMDQxLjAzNC4wNDEuMDMzLjA0Mi4wMzIuMDQyLjAzLjA0Mi4wMjkuMDQyLjAyNy4wNDIuMDI2LjA0My4wMjQuMDQzLjAyMy4wNDMuMDIxLjA0My4wMi4wNDMuMDE4LjA0NC4wMTcuMDQzLjAxNS4wNDQuMDEzLjA0NC4wMTIuMDQ0LjAxMS4wNDUuMDA5LjA0NC4wMDcuMDQ1LjAwNi4wNDUuMDA0LjA0NS4wMDIuMDQ1LjAwMS4wNDV2MTdsLS4wMDEuMDQ1LS4wMDIuMDQ1LS4wMDQuMDQ1LS4wMDYuMDQ1LS4wMDcuMDQ1LS4wMDkuMDQ0LS4wMTEuMDQ1LS4wMTIuMDQ0LS4wMTMuMDQ0LS4wMTUuMDQ0LS4wMTcuMDQzLS4wMTguMDQ0LS4wMi4wNDMtLjAyMS4wNDMtLjAyMy4wNDMtLjAyNC4wNDMtLjAyNi4wNDMtLjAyNy4wNDItLjAyOS4wNDItLjAzLjA0Mi0uMDMyLjA0Mi0uMDMzLjA0Mi0uMDM0LjA0MS0uMDM2LjA0MS0uMDM3LjA0MS0uMDM5LjA0MS0uMDQuMDQxLS4wNDEuMDQtLjA0My4wNC0uMDQ0LjA0LS4wNDUuMDQtLjA0Ny4wMzktLjA0OC4wMzktLjA1LjAzOS0uMDUxLjAzOS0uMDUyLjAzOC0uMDUzLjAzOC0uMDU1LjAzOC0uMDU1LjAzOC0uMDU4LjAzNy0uMDU4LjAzNy0uMDYuMDM3LS4wNi4wMzYtLjA2Mi4wMzYtLjA2NC4wMzYtLjA2NC4wMzYtLjA2Ni4wMzUtLjA2Ny4wMzUtLjA2OC4wMzUtLjA2OS4wMzUtLjA3LjAzNC0uMDcxLjAzNC0uMDczLjAzMy0uMDc0LjAzMy0uMTUuMDY2LS4xNTUuMDY0LS4xNi4wNjMtLjE2My4wNjEtLjE2OC4wNi0uMTcyLjA1OS0uMTc1LjA1Ny0uMTguMDU2LS4xODMuMDU0LS4xODcuMDUzLS4xOTEuMDUxLS4xOTQuMDUtLjE5OC4wNDgtLjIwMS4wNDYtLjIwNS4wNDUtLjIwOC4wNDMtLjIxMS4wNDEtLjIxNC4wNC0uMjE3LjAzOC0uMjIuMDM2LS4yMjMuMDM0LS4yMjUuMDMyLS4yMjkuMDMxLS4yMzEuMDI4LS4yMzMuMDI3LS4yMzYuMDI0LS4yMzkuMDIzLS4yNDEuMDItLjI0Mi4wMTktLjI0Ni4wMTYtLjI0Ny4wMTUtLjI0OS4wMTItLjI1MS4wMS0uMjUzLjAwOC0uMjU1LjAwNS0uMjU2LjAwNC0uMjU4LjAwMS0uMjU4LS4wMDEtLjI1Ni0uMDA0LS4yNTUtLjAwNS0uMjUzLS4wMDgtLjI1MS0uMDEtLjI0OS0uMDEyLS4yNDctLjAxNS0uMjQ1LS4wMTYtLjI0My0uMDE5LS4yNDEtLjAyLS4yMzgtLjAyMy0uMjM2LS4wMjQtLjIzNC0uMDI3LS4yMzEtLjAyOC0uMjI4LS4wMzEtLjIyNi0uMDMyLS4yMjMtLjAzNC0uMjItLjAzNi0uMjE3LS4wMzgtLjIxNC0uMDQtLjIxMS0uMDQxLS4yMDgtLjA0My0uMjA0LS4wNDUtLjIwMS0uMDQ2LS4xOTgtLjA0OC0uMTk1LS4wNS0uMTktLjA1MS0uMTg3LS4wNTMtLjE4NC0uMDU0LS4xNzktLjA1Ni0uMTc2LS4wNTctLjE3Mi0uMDU5LS4xNjctLjA2LS4xNjQtLjA2MS0uMTU5LS4wNjMtLjE1NS0uMDY0LS4xNTEtLjA2Ni0uMDc0LS4wMzMtLjA3Mi0uMDMzLS4wNzItLjAzNC0uMDctLjAzNC0uMDY5LS4wMzUtLjA2OC0uMDM1LS4wNjctLjAzNS0uMDY2LS4wMzUtLjA2NC0uMDM2LS4wNjMtLjAzNi0uMDYyLS4wMzYtLjA2MS0uMDM2LS4wNi0uMDM3LS4wNTgtLjAzNy0uMDU3LS4wMzctLjA1Ni0uMDM4LS4wNTUtLjAzOC0uMDUzLS4wMzgtLjA1Mi0uMDM4LS4wNTEtLjAzOS0uMDQ5LS4wMzktLjA0OS0uMDM5LS4wNDYtLjAzOS0uMDQ2LS4wNC0uMDQ0LS4wNC0uMDQzLS4wNC0uMDQxLS4wNC0uMDQtLjA0MS0uMDM5LS4wNDEtLjAzNy0uMDQxLS4wMzYtLjA0MS0uMDM0LS4wNDEtLjAzMy0uMDQyLS4wMzItLjA0Mi0uMDMtLjA0Mi0uMDI5LS4wNDItLjAyNy0uMDQyLS4wMjYtLjA0My0uMDI0LS4wNDMtLjAyMy0uMDQzLS4wMjEtLjA0My0uMDItLjA0My0uMDE4LS4wNDQtLjAxNy0uMDQzLS4wMTUtLjA0NC0uMDEzLS4wNDQtLjAxMi0uMDQ0LS4wMTEtLjA0NS0uMDA5LS4wNDQtLjAwNy0uMDQ1LS4wMDYtLjA0NS0uMDA0LS4wNDUtLjAwMi0uMDQ1LS4wMDEtLjA0NXYtMTdsLjAwMS0uMDQ1LjAwMi0uMDQ1LjAwNC0uMDQ1LjAwNi0uMDQ1LjAwNy0uMDQ1LjAwOS0uMDQ0LjAxMS0uMDQ1LjAxMi0uMDQ0LjAxMy0uMDQ0LjAxNS0uMDQ0LjAxNy0uMDQzLjAxOC0uMDQ0LjAyLS4wNDMuMDIxLS4wNDMuMDIzLS4wNDMuMDI0LS4wNDMuMDI2LS4wNDMuMDI3LS4wNDIuMDI5LS4wNDIuMDMtLjA0Mi4wMzItLjA0Mi4wMzMtLjA0Mi4wMzQtLjA0MS4wMzYtLjA0MS4wMzctLjA0MS4wMzktLjA0MS4wNC0uMDQxLjA0MS0uMDQuMDQzLS4wNC4wNDQtLjA0LjA0Ni0uMDQuMDQ2LS4wMzkuMDQ5LS4wMzkuMDQ5LS4wMzkuMDUxLS4wMzkuMDUyLS4wMzguMDUzLS4wMzguMDU1LS4wMzguMDU2LS4wMzguMDU3LS4wMzcuMDU4LS4wMzcuMDYtLjAzNy4wNjEtLjAzNi4wNjItLjAzNi4wNjMtLjAzNi4wNjQtLjAzNi4wNjYtLjAzNS4wNjctLjAzNS4wNjgtLjAzNS4wNjktLjAzNS4wNy0uMDM0LjA3Mi0uMDM0LjA3Mi0uMDMzLjA3NC0uMDMzLjE1MS0uMDY2LjE1NS0uMDY0LjE1OS0uMDYzLjE2NC0uMDYxLjE2Ny0uMDYuMTcyLS4wNTkuMTc2LS4wNTcuMTc5LS4wNTYuMTg0LS4wNTQuMTg3LS4wNTMuMTktLjA1MS4xOTUtLjA1LjE5OC0uMDQ4LjIwMS0uMDQ2LjIwNC0uMDQ1LjIwOC0uMDQzLjIxMS0uMDQxLjIxNC0uMDQuMjE3LS4wMzguMjItLjAzNi4yMjMtLjAzNC4yMjYtLjAzMi4yMjgtLjAzMS4yMzEtLjAyOC4yMzQtLjAyNy4yMzYtLjAyNC4yMzgtLjAyMy4yNDEtLjAyLjI0My0uMDE5LjI0NS0uMDE2LjI0Ny0uMDE1LjI0OS0uMDEyLjI1MS0uMDEuMjUzLS4wMDguMjU1LS4wMDUuMjU2LS4wMDQuMjU4LS4wMDEuMjU4LjAwMXptLTkuMjU4IDIwLjQ5OXYuMDFsLjAwMS4wMjEuMDAzLjAyMS4wMDQuMDIyLjAwNS4wMjEuMDA2LjAyMi4wMDcuMDIyLjAwOS4wMjMuMDEuMDIyLjAxMS4wMjMuMDEyLjAyMy4wMTMuMDIzLjAxNS4wMjMuMDE2LjAyNC4wMTcuMDIzLjAxOC4wMjQuMDE5LjAyNC4wMjEuMDI0LjAyMi4wMjUuMDIzLjAyNC4wMjQuMDI1LjA1Mi4wNDkuMDU2LjA1LjA2MS4wNTEuMDY2LjA1MS4wNy4wNTEuMDc1LjA1MS4wNzkuMDUyLjA4NC4wNTIuMDg4LjA1Mi4wOTIuMDUyLjA5Ny4wNTIuMTAyLjA1MS4xMDUuMDUyLjExLjA1Mi4xMTQuMDUxLjExOS4wNTEuMTIzLjA1MS4xMjcuMDUuMTMxLjA1LjEzNS4wNS4xMzkuMDQ4LjE0NC4wNDkuMTQ3LjA0Ny4xNTIuMDQ3LjE1NS4wNDcuMTYuMDQ1LjE2My4wNDUuMTY3LjA0My4xNzEuMDQzLjE3Ni4wNDEuMTc4LjA0MS4xODMuMDM5LjE4Ny4wMzkuMTkuMDM3LjE5NC4wMzUuMTk3LjAzNS4yMDIuMDMzLjIwNC4wMzEuMjA5LjAzLjIxMi4wMjkuMjE2LjAyNy4yMTkuMDI1LjIyMi4wMjQuMjI2LjAyMS4yMy4wMi4yMzMuMDE4LjIzNi4wMTYuMjQuMDE1LjI0My4wMTIuMjQ2LjAxLjI0OS4wMDguMjUzLjAwNS4yNTYuMDA0LjI1OS4wMDEuMjYtLjAwMS4yNTctLjAwNC4yNTQtLjAwNS4yNS0uMDA4LjI0Ny0uMDExLjI0NC0uMDEyLjI0MS0uMDE0LjIzNy0uMDE2LjIzMy0uMDE4LjIzMS0uMDIxLjIyNi0uMDIxLjIyNC0uMDI0LjIyLS4wMjYuMjE2LS4wMjcuMjEyLS4wMjguMjEtLjAzMS4yMDUtLjAzMS4yMDItLjAzNC4xOTgtLjAzNC4xOTQtLjAzNi4xOTEtLjAzNy4xODctLjAzOS4xODMtLjA0LjE3OS0uMDQuMTc1LS4wNDIuMTcyLS4wNDMuMTY4LS4wNDQuMTYzLS4wNDUuMTYtLjA0Ni4xNTUtLjA0Ni4xNTItLjA0Ny4xNDgtLjA0OC4xNDMtLjA0OS4xMzktLjA0OS4xMzYtLjA1LjEzMS0uMDUuMTI2LS4wNS4xMjMtLjA1MS4xMTgtLjA1Mi4xMTQtLjA1MS4xMS0uMDUyLjEwNi0uMDUyLjEwMS0uMDUyLjA5Ni0uMDUyLjA5Mi0uMDUyLjA4OC0uMDUzLjA4My0uMDUxLjA3OS0uMDUyLjA3NC0uMDUyLjA3LS4wNTEuMDY1LS4wNTEuMDYtLjA1MS4wNTYtLjA1LjA1MS0uMDUuMDIzLS4wMjQuMDIzLS4wMjUuMDIxLS4wMjQuMDItLjAyNC4wMTktLjAyNC4wMTgtLjAyNC4wMTctLjAyNC4wMTUtLjAyMy4wMTQtLjAyNC4wMTMtLjAyMy4wMTItLjAyMy4wMS0uMDIzLjAxLS4wMjIuMDA4LS4wMjIuMDA2LS4wMjIuMDA2LS4wMjIuMDA0LS4wMjIuMDA0LS4wMjEuMDAxLS4wMjEuMDAxLS4wMjF2LTQuMTI3bC0uMDc3LjA1NS0uMDguMDUzLS4wODMuMDU0LS4wODUuMDUzLS4wODcuMDUyLS4wOS4wNTItLjA5My4wNTEtLjA5NS4wNS0uMDk3LjA1LS4xLjA0OS0uMTAyLjA0OS0uMTA1LjA0OC0uMTA2LjA0Ny0uMTA5LjA0Ny0uMTExLjA0Ni0uMTE0LjA0NS0uMTE1LjA0NS0uMTE4LjA0NC0uMTIuMDQzLS4xMjIuMDQyLS4xMjQuMDQyLS4xMjYuMDQxLS4xMjguMDQtLjEzLjA0LS4xMzIuMDM4LS4xMzQuMDM4LS4xMzUuMDM3LS4xMzguMDM3LS4xMzkuMDM1LS4xNDIuMDM1LS4xNDMuMDM0LS4xNDQuMDMzLS4xNDcuMDMyLS4xNDguMDMxLS4xNS4wMy0uMTUxLjAzLS4xNTMuMDI5LS4xNTQuMDI3LS4xNTYuMDI3LS4xNTguMDI2LS4xNTkuMDI1LS4xNjEuMDI0LS4xNjIuMDIzLS4xNjMuMDIyLS4xNjUuMDIxLS4xNjYuMDItLjE2Ny4wMTktLjE2OS4wMTgtLjE2OS4wMTctLjE3MS4wMTYtLjE3My4wMTUtLjE3My4wMTQtLjE3NS4wMTMtLjE3NS4wMTItLjE3Ny4wMTEtLjE3OC4wMS0uMTc5LjAwOC0uMTc5LjAwOC0uMTgxLjAwNi0uMTgyLjAwNS0uMTgyLjAwNC0uMTg0LjAwMy0uMTg0LjAwMmgtLjM3bC0uMTg0LS4wMDItLjE4NC0uMDAzLS4xODItLjAwNC0uMTgyLS4wMDUtLjE4MS0uMDA2LS4xNzktLjAwOC0uMTc5LS4wMDgtLjE3OC0uMDEtLjE3Ni0uMDExLS4xNzYtLjAxMi0uMTc1LS4wMTMtLjE3My0uMDE0LS4xNzItLjAxNS0uMTcxLS4wMTYtLjE3LS4wMTctLjE2OS0uMDE4LS4xNjctLjAxOS0uMTY2LS4wMi0uMTY1LS4wMjEtLjE2My0uMDIyLS4xNjItLjAyMy0uMTYxLS4wMjQtLjE1OS0uMDI1LS4xNTctLjAyNi0uMTU2LS4wMjctLjE1NS0uMDI3LS4xNTMtLjAyOS0uMTUxLS4wMy0uMTUtLjAzLS4xNDgtLjAzMS0uMTQ2LS4wMzItLjE0NS0uMDMzLS4xNDMtLjAzNC0uMTQxLS4wMzUtLjE0LS4wMzUtLjEzNy0uMDM3LS4xMzYtLjAzNy0uMTM0LS4wMzgtLjEzMi0uMDM4LS4xMy0uMDQtLjEyOC0uMDQtLjEyNi0uMDQxLS4xMjQtLjA0Mi0uMTIyLS4wNDItLjEyLS4wNDQtLjExNy0uMDQzLS4xMTYtLjA0NS0uMTEzLS4wNDUtLjExMi0uMDQ2LS4xMDktLjA0Ny0uMTA2LS4wNDctLjEwNS0uMDQ4LS4xMDItLjA0OS0uMS0uMDQ5LS4wOTctLjA1LS4wOTUtLjA1LS4wOTMtLjA1Mi0uMDktLjA1MS0uMDg3LS4wNTItLjA4NS0uMDUzLS4wODMtLjA1NC0uMDgtLjA1NC0uMDc3LS4wNTR2NC4xMjd6bTAtNS42NTR2LjAxMWwuMDAxLjAyMS4wMDMuMDIxLjAwNC4wMjEuMDA1LjAyMi4wMDYuMDIyLjAwNy4wMjIuMDA5LjAyMi4wMS4wMjIuMDExLjAyMy4wMTIuMDIzLjAxMy4wMjMuMDE1LjAyNC4wMTYuMDIzLjAxNy4wMjQuMDE4LjAyNC4wMTkuMDI0LjAyMS4wMjQuMDIyLjAyNC4wMjMuMDI1LjAyNC4wMjQuMDUyLjA1LjA1Ni4wNS4wNjEuMDUuMDY2LjA1MS4wNy4wNTEuMDc1LjA1Mi4wNzkuMDUxLjA4NC4wNTIuMDg4LjA1Mi4wOTIuMDUyLjA5Ny4wNTIuMTAyLjA1Mi4xMDUuMDUyLjExLjA1MS4xMTQuMDUxLjExOS4wNTIuMTIzLjA1LjEyNy4wNTEuMTMxLjA1LjEzNS4wNDkuMTM5LjA0OS4xNDQuMDQ4LjE0Ny4wNDguMTUyLjA0Ny4xNTUuMDQ2LjE2LjA0NS4xNjMuMDQ1LjE2Ny4wNDQuMTcxLjA0Mi4xNzYuMDQyLjE3OC4wNC4xODMuMDQuMTg3LjAzOC4xOS4wMzcuMTk0LjAzNi4xOTcuMDM0LjIwMi4wMzMuMjA0LjAzMi4yMDkuMDMuMjEyLjAyOC4yMTYuMDI3LjIxOS4wMjUuMjIyLjAyNC4yMjYuMDIyLjIzLjAyLjIzMy4wMTguMjM2LjAxNi4yNC4wMTQuMjQzLjAxMi4yNDYuMDEuMjQ5LjAwOC4yNTMuMDA2LjI1Ni4wMDMuMjU5LjAwMS4yNi0uMDAxLjI1Ny0uMDAzLjI1NC0uMDA2LjI1LS4wMDguMjQ3LS4wMS4yNDQtLjAxMi4yNDEtLjAxNS4yMzctLjAxNi4yMzMtLjAxOC4yMzEtLjAyLjIyNi0uMDIyLjIyNC0uMDI0LjIyLS4wMjUuMjE2LS4wMjcuMjEyLS4wMjkuMjEtLjAzLjIwNS0uMDMyLjIwMi0uMDMzLjE5OC0uMDM1LjE5NC0uMDM2LjE5MS0uMDM3LjE4Ny0uMDM5LjE4My0uMDM5LjE3OS0uMDQxLjE3NS0uMDQyLjE3Mi0uMDQzLjE2OC0uMDQ0LjE2My0uMDQ1LjE2LS4wNDUuMTU1LS4wNDcuMTUyLS4wNDcuMTQ4LS4wNDguMTQzLS4wNDguMTM5LS4wNS4xMzYtLjA0OS4xMzEtLjA1LjEyNi0uMDUxLjEyMy0uMDUxLjExOC0uMDUxLjExNC0uMDUyLjExLS4wNTIuMTA2LS4wNTIuMTAxLS4wNTIuMDk2LS4wNTIuMDkyLS4wNTIuMDg4LS4wNTIuMDgzLS4wNTIuMDc5LS4wNTIuMDc0LS4wNTEuMDctLjA1Mi4wNjUtLjA1MS4wNi0uMDUuMDU2LS4wNTEuMDUxLS4wNDkuMDIzLS4wMjUuMDIzLS4wMjQuMDIxLS4wMjUuMDItLjAyNC4wMTktLjAyNC4wMTgtLjAyNC4wMTctLjAyNC4wMTUtLjAyMy4wMTQtLjAyMy4wMTMtLjAyNC4wMTItLjAyMi4wMS0uMDIzLjAxLS4wMjMuMDA4LS4wMjIuMDA2LS4wMjIuMDA2LS4wMjIuMDA0LS4wMjEuMDA0LS4wMjIuMDAxLS4wMjEuMDAxLS4wMjF2LTQuMTM5bC0uMDc3LjA1NC0uMDguMDU0LS4wODMuMDU0LS4wODUuMDUyLS4wODcuMDUzLS4wOS4wNTEtLjA5My4wNTEtLjA5NS4wNTEtLjA5Ny4wNS0uMS4wNDktLjEwMi4wNDktLjEwNS4wNDgtLjEwNi4wNDctLjEwOS4wNDctLjExMS4wNDYtLjExNC4wNDUtLjExNS4wNDQtLjExOC4wNDQtLjEyLjA0NC0uMTIyLjA0Mi0uMTI0LjA0Mi0uMTI2LjA0MS0uMTI4LjA0LS4xMy4wMzktLjEzMi4wMzktLjEzNC4wMzgtLjEzNS4wMzctLjEzOC4wMzYtLjEzOS4wMzYtLjE0Mi4wMzUtLjE0My4wMzMtLjE0NC4wMzMtLjE0Ny4wMzMtLjE0OC4wMzEtLjE1LjAzLS4xNTEuMDMtLjE1My4wMjgtLjE1NC4wMjgtLjE1Ni4wMjctLjE1OC4wMjYtLjE1OS4wMjUtLjE2MS4wMjQtLjE2Mi4wMjMtLjE2My4wMjItLjE2NS4wMjEtLjE2Ni4wMi0uMTY3LjAxOS0uMTY5LjAxOC0uMTY5LjAxNy0uMTcxLjAxNi0uMTczLjAxNS0uMTczLjAxNC0uMTc1LjAxMy0uMTc1LjAxMi0uMTc3LjAxMS0uMTc4LjAwOS0uMTc5LjAwOS0uMTc5LjAwNy0uMTgxLjAwNy0uMTgyLjAwNS0uMTgyLjAwNC0uMTg0LjAwMy0uMTg0LjAwMmgtLjM3bC0uMTg0LS4wMDItLjE4NC0uMDAzLS4xODItLjAwNC0uMTgyLS4wMDUtLjE4MS0uMDA3LS4xNzktLjAwNy0uMTc5LS4wMDktLjE3OC0uMDA5LS4xNzYtLjAxMS0uMTc2LS4wMTItLjE3NS0uMDEzLS4xNzMtLjAxNC0uMTcyLS4wMTUtLjE3MS0uMDE2LS4xNy0uMDE3LS4xNjktLjAxOC0uMTY3LS4wMTktLjE2Ni0uMDItLjE2NS0uMDIxLS4xNjMtLjAyMi0uMTYyLS4wMjMtLjE2MS0uMDI0LS4xNTktLjAyNS0uMTU3LS4wMjYtLjE1Ni0uMDI3LS4xNTUtLjAyOC0uMTUzLS4wMjgtLjE1MS0uMDMtLjE1LS4wMy0uMTQ4LS4wMzEtLjE0Ni0uMDMzLS4xNDUtLjAzMy0uMTQzLS4wMzMtLjE0MS0uMDM1LS4xNC0uMDM2LS4xMzctLjAzNi0uMTM2LS4wMzctLjEzNC0uMDM4LS4xMzItLjAzOS0uMTMtLjAzOS0uMTI4LS4wNC0uMTI2LS4wNDEtLjEyNC0uMDQyLS4xMjItLjA0My0uMTItLjA0My0uMTE3LS4wNDQtLjExNi0uMDQ0LS4xMTMtLjA0Ni0uMTEyLS4wNDYtLjEwOS0uMDQ2LS4xMDYtLjA0Ny0uMTA1LS4wNDgtLjEwMi0uMDQ5LS4xLS4wNDktLjA5Ny0uMDUtLjA5NS0uMDUxLS4wOTMtLjA1MS0uMDktLjA1MS0uMDg3LS4wNTMtLjA4NS0uMDUyLS4wODMtLjA1NC0uMDgtLjA1NC0uMDc3LS4wNTR2NC4xMzl6bTAtNS42NjZ2LjAxMWwuMDAxLjAyLjAwMy4wMjIuMDA0LjAyMS4wMDUuMDIyLjAwNi4wMjEuMDA3LjAyMi4wMDkuMDIzLjAxLjAyMi4wMTEuMDIzLjAxMi4wMjMuMDEzLjAyMy4wMTUuMDIzLjAxNi4wMjQuMDE3LjAyNC4wMTguMDIzLjAxOS4wMjQuMDIxLjAyNS4wMjIuMDI0LjAyMy4wMjQuMDI0LjAyNS4wNTIuMDUuMDU2LjA1LjA2MS4wNS4wNjYuMDUxLjA3LjA1MS4wNzUuMDUyLjA3OS4wNTEuMDg0LjA1Mi4wODguMDUyLjA5Mi4wNTIuMDk3LjA1Mi4xMDIuMDUyLjEwNS4wNTEuMTEuMDUyLjExNC4wNTEuMTE5LjA1MS4xMjMuMDUxLjEyNy4wNS4xMzEuMDUuMTM1LjA1LjEzOS4wNDkuMTQ0LjA0OC4xNDcuMDQ4LjE1Mi4wNDcuMTU1LjA0Ni4xNi4wNDUuMTYzLjA0NS4xNjcuMDQzLjE3MS4wNDMuMTc2LjA0Mi4xNzguMDQuMTgzLjA0LjE4Ny4wMzguMTkuMDM3LjE5NC4wMzYuMTk3LjAzNC4yMDIuMDMzLjIwNC4wMzIuMjA5LjAzLjIxMi4wMjguMjE2LjAyNy4yMTkuMDI1LjIyMi4wMjQuMjI2LjAyMS4yMy4wMi4yMzMuMDE4LjIzNi4wMTcuMjQuMDE0LjI0My4wMTIuMjQ2LjAxLjI0OS4wMDguMjUzLjAwNi4yNTYuMDAzLjI1OS4wMDEuMjYtLjAwMS4yNTctLjAwMy4yNTQtLjAwNi4yNS0uMDA4LjI0Ny0uMDEuMjQ0LS4wMTMuMjQxLS4wMTQuMjM3LS4wMTYuMjMzLS4wMTguMjMxLS4wMi4yMjYtLjAyMi4yMjQtLjAyNC4yMi0uMDI1LjIxNi0uMDI3LjIxMi0uMDI5LjIxLS4wMy4yMDUtLjAzMi4yMDItLjAzMy4xOTgtLjAzNS4xOTQtLjAzNi4xOTEtLjAzNy4xODctLjAzOS4xODMtLjAzOS4xNzktLjA0MS4xNzUtLjA0Mi4xNzItLjA0My4xNjgtLjA0NC4xNjMtLjA0NS4xNi0uMDQ1LjE1NS0uMDQ3LjE1Mi0uMDQ3LjE0OC0uMDQ4LjE0My0uMDQ5LjEzOS0uMDQ5LjEzNi0uMDQ5LjEzMS0uMDUxLjEyNi0uMDUuMTIzLS4wNTEuMTE4LS4wNTIuMTE0LS4wNTEuMTEtLjA1Mi4xMDYtLjA1Mi4xMDEtLjA1Mi4wOTYtLjA1Mi4wOTItLjA1Mi4wODgtLjA1Mi4wODMtLjA1Mi4wNzktLjA1Mi4wNzQtLjA1Mi4wNy0uMDUxLjA2NS0uMDUxLjA2LS4wNTEuMDU2LS4wNS4wNTEtLjA0OS4wMjMtLjAyNS4wMjMtLjAyNS4wMjEtLjAyNC4wMi0uMDI0LjAxOS0uMDI0LjAxOC0uMDI0LjAxNy0uMDI0LjAxNS0uMDIzLjAxNC0uMDI0LjAxMy0uMDIzLjAxMi0uMDIzLjAxLS4wMjIuMDEtLjAyMy4wMDgtLjAyMi4wMDYtLjAyMi4wMDYtLjAyMi4wMDQtLjAyMi4wMDQtLjAyMS4wMDEtLjAyMS4wMDEtLjAyMXYtNC4xNTNsLS4wNzcuMDU0LS4wOC4wNTQtLjA4My4wNTMtLjA4NS4wNTMtLjA4Ny4wNTMtLjA5LjA1MS0uMDkzLjA1MS0uMDk1LjA1MS0uMDk3LjA1LS4xLjA0OS0uMTAyLjA0OC0uMTA1LjA0OC0uMTA2LjA0OC0uMTA5LjA0Ni0uMTExLjA0Ni0uMTE0LjA0Ni0uMTE1LjA0NC0uMTE4LjA0NC0uMTIuMDQzLS4xMjIuMDQzLS4xMjQuMDQyLS4xMjYuMDQxLS4xMjguMDQtLjEzLjAzOS0uMTMyLjAzOS0uMTM0LjAzOC0uMTM1LjAzNy0uMTM4LjAzNi0uMTM5LjAzNi0uMTQyLjAzNC0uMTQzLjAzNC0uMTQ0LjAzMy0uMTQ3LjAzMi0uMTQ4LjAzMi0uMTUuMDMtLjE1MS4wMy0uMTUzLjAyOC0uMTU0LjAyOC0uMTU2LjAyNy0uMTU4LjAyNi0uMTU5LjAyNC0uMTYxLjAyNC0uMTYyLjAyMy0uMTYzLjAyMy0uMTY1LjAyMS0uMTY2LjAyLS4xNjcuMDE5LS4xNjkuMDE4LS4xNjkuMDE3LS4xNzEuMDE2LS4xNzMuMDE1LS4xNzMuMDE0LS4xNzUuMDEzLS4xNzUuMDEyLS4xNzcuMDEtLjE3OC4wMS0uMTc5LjAwOS0uMTc5LjAwNy0uMTgxLjAwNi0uMTgyLjAwNi0uMTgyLjAwNC0uMTg0LjAwMy0uMTg0LjAwMS0uMTg1LjAwMS0uMTg1LS4wMDEtLjE4NC0uMDAxLS4xODQtLjAwMy0uMTgyLS4wMDQtLjE4Mi0uMDA2LS4xODEtLjAwNi0uMTc5LS4wMDctLjE3OS0uMDA5LS4xNzgtLjAxLS4xNzYtLjAxLS4xNzYtLjAxMi0uMTc1LS4wMTMtLjE3My0uMDE0LS4xNzItLjAxNS0uMTcxLS4wMTYtLjE3LS4wMTctLjE2OS0uMDE4LS4xNjctLjAxOS0uMTY2LS4wMi0uMTY1LS4wMjEtLjE2My0uMDIzLS4xNjItLjAyMy0uMTYxLS4wMjQtLjE1OS0uMDI0LS4xNTctLjAyNi0uMTU2LS4wMjctLjE1NS0uMDI4LS4xNTMtLjAyOC0uMTUxLS4wMy0uMTUtLjAzLS4xNDgtLjAzMi0uMTQ2LS4wMzItLjE0NS0uMDMzLS4xNDMtLjAzNC0uMTQxLS4wMzQtLjE0LS4wMzYtLjEzNy0uMDM2LS4xMzYtLjAzNy0uMTM0LS4wMzgtLjEzMi0uMDM5LS4xMy0uMDM5LS4xMjgtLjA0MS0uMTI2LS4wNDEtLjEyNC0uMDQxLS4xMjItLjA0My0uMTItLjA0My0uMTE3LS4wNDQtLjExNi0uMDQ0LS4xMTMtLjA0Ni0uMTEyLS4wNDYtLjEwOS0uMDQ2LS4xMDYtLjA0OC0uMTA1LS4wNDgtLjEwMi0uMDQ4LS4xLS4wNS0uMDk3LS4wNDktLjA5NS0uMDUxLS4wOTMtLjA1MS0uMDktLjA1Mi0uMDg3LS4wNTItLjA4NS0uMDUzLS4wODMtLjA1My0uMDgtLjA1NC0uMDc3LS4wNTR2NC4xNTN6bTguNzQtOC4xNzlsLS4yNTcuMDA0LS4yNTQuMDA1LS4yNS4wMDgtLjI0Ny4wMTEtLjI0NC4wMTItLjI0MS4wMTQtLjIzNy4wMTYtLjIzMy4wMTgtLjIzMS4wMjEtLjIyNi4wMjItLjIyNC4wMjMtLjIyLjAyNi0uMjE2LjAyNy0uMjEyLjAyOC0uMjEuMDMxLS4yMDUuMDMyLS4yMDIuMDMzLS4xOTguMDM0LS4xOTQuMDM2LS4xOTEuMDM4LS4xODcuMDM4LS4xODMuMDQtLjE3OS4wNDEtLjE3NS4wNDItLjE3Mi4wNDMtLjE2OC4wNDMtLjE2My4wNDUtLjE2LjA0Ni0uMTU1LjA0Ni0uMTUyLjA0OC0uMTQ4LjA0OC0uMTQzLjA0OC0uMTM5LjA0OS0uMTM2LjA1LS4xMzEuMDUtLjEyNi4wNTEtLjEyMy4wNTEtLjExOC4wNTEtLjExNC4wNTItLjExLjA1Mi0uMTA2LjA1Mi0uMTAxLjA1Mi0uMDk2LjA1Mi0uMDkyLjA1Mi0uMDg4LjA1Mi0uMDgzLjA1Mi0uMDc5LjA1Mi0uMDc0LjA1MS0uMDcuMDUyLS4wNjUuMDUxLS4wNi4wNS0uMDU2LjA1LS4wNTEuMDUtLjAyMy4wMjUtLjAyMy4wMjQtLjAyMS4wMjQtLjAyLjAyNS0uMDE5LjAyNC0uMDE4LjAyNC0uMDE3LjAyMy0uMDE1LjAyNC0uMDE0LjAyMy0uMDEzLjAyMy0uMDEyLjAyMy0uMDEuMDIzLS4wMS4wMjItLjAwOC4wMjItLjAwNi4wMjMtLjAwNi4wMjEtLjAwNC4wMjItLjAwNC4wMjEtLjAwMS4wMjEtLjAwMS4wMjEuMDAxLjAyMS4wMDEuMDIxLjAwNC4wMjEuMDA0LjAyMi4wMDYuMDIxLjAwNi4wMjMuMDA4LjAyMi4wMS4wMjIuMDEuMDIzLjAxMi4wMjMuMDEzLjAyMy4wMTQuMDIzLjAxNS4wMjQuMDE3LjAyMy4wMTguMDI0LjAxOS4wMjQuMDIuMDI1LjAyMS4wMjQuMDIzLjAyNC4wMjMuMDI1LjA1MS4wNS4wNTYuMDUuMDYuMDUuMDY1LjA1MS4wNy4wNTIuMDc0LjA1MS4wNzkuMDUyLjA4My4wNTIuMDg4LjA1Mi4wOTIuMDUyLjA5Ni4wNTIuMTAxLjA1Mi4xMDYuMDUyLjExLjA1Mi4xMTQuMDUyLjExOC4wNTEuMTIzLjA1MS4xMjYuMDUxLjEzMS4wNS4xMzYuMDUuMTM5LjA0OS4xNDMuMDQ4LjE0OC4wNDguMTUyLjA0OC4xNTUuMDQ2LjE2LjA0Ni4xNjMuMDQ1LjE2OC4wNDMuMTcyLjA0My4xNzUuMDQyLjE3OS4wNDEuMTgzLjA0LjE4Ny4wMzguMTkxLjAzOC4xOTQuMDM2LjE5OC4wMzQuMjAyLjAzMy4yMDUuMDMyLjIxLjAzMS4yMTIuMDI4LjIxNi4wMjcuMjIuMDI2LjIyNC4wMjMuMjI2LjAyMi4yMzEuMDIxLjIzMy4wMTguMjM3LjAxNi4yNDEuMDE0LjI0NC4wMTIuMjQ3LjAxMS4yNS4wMDguMjU0LjAwNS4yNTcuMDA0LjI2LjAwMS4yNi0uMDAxLjI1Ny0uMDA0LjI1NC0uMDA1LjI1LS4wMDguMjQ3LS4wMTEuMjQ0LS4wMTIuMjQxLS4wMTQuMjM3LS4wMTYuMjMzLS4wMTguMjMxLS4wMjEuMjI2LS4wMjIuMjI0LS4wMjMuMjItLjAyNi4yMTYtLjAyNy4yMTItLjAyOC4yMS0uMDMxLjIwNS0uMDMyLjIwMi0uMDMzLjE5OC0uMDM0LjE5NC0uMDM2LjE5MS0uMDM4LjE4Ny0uMDM4LjE4My0uMDQuMTc5LS4wNDEuMTc1LS4wNDIuMTcyLS4wNDMuMTY4LS4wNDMuMTYzLS4wNDUuMTYtLjA0Ni4xNTUtLjA0Ni4xNTItLjA0OC4xNDgtLjA0OC4xNDMtLjA0OC4xMzktLjA0OS4xMzYtLjA1LjEzMS0uMDUuMTI2LS4wNTEuMTIzLS4wNTEuMTE4LS4wNTEuMTE0LS4wNTIuMTEtLjA1Mi4xMDYtLjA1Mi4xMDEtLjA1Mi4wOTYtLjA1Mi4wOTItLjA1Mi4wODgtLjA1Mi4wODMtLjA1Mi4wNzktLjA1Mi4wNzQtLjA1MS4wNy0uMDUyLjA2NS0uMDUxLjA2LS4wNS4wNTYtLjA1LjA1MS0uMDUuMDIzLS4wMjUuMDIzLS4wMjQuMDIxLS4wMjQuMDItLjAyNS4wMTktLjAyNC4wMTgtLjAyNC4wMTctLjAyMy4wMTUtLjAyNC4wMTQtLjAyMy4wMTMtLjAyMy4wMTItLjAyMy4wMS0uMDIzLjAxLS4wMjIuMDA4LS4wMjIuMDA2LS4wMjMuMDA2LS4wMjEuMDA0LS4wMjIuMDA0LS4wMjEuMDAxLS4wMjEuMDAxLS4wMjEtLjAwMS0uMDIxLS4wMDEtLjAyMS0uMDA0LS4wMjEtLjAwNC0uMDIyLS4wMDYtLjAyMS0uMDA2LS4wMjMtLjAwOC0uMDIyLS4wMS0uMDIyLS4wMS0uMDIzLS4wMTItLjAyMy0uMDEzLS4wMjMtLjAxNC0uMDIzLS4wMTUtLjAyNC0uMDE3LS4wMjMtLjAxOC0uMDI0LS4wMTktLjAyNC0uMDItLjAyNS0uMDIxLS4wMjQtLjAyMy0uMDI0LS4wMjMtLjAyNS0uMDUxLS4wNS0uMDU2LS4wNS0uMDYtLjA1LS4wNjUtLjA1MS0uMDctLjA1Mi0uMDc0LS4wNTEtLjA3OS0uMDUyLS4wODMtLjA1Mi0uMDg4LS4wNTItLjA5Mi0uMDUyLS4wOTYtLjA1Mi0uMTAxLS4wNTItLjEwNi0uMDUyLS4xMS0uMDUyLS4xMTQtLjA1Mi0uMTE4LS4wNTEtLjEyMy0uMDUxLS4xMjYtLjA1MS0uMTMxLS4wNS0uMTM2LS4wNS0uMTM5LS4wNDktLjE0My0uMDQ4LS4xNDgtLjA0OC0uMTUyLS4wNDgtLjE1NS0uMDQ2LS4xNi0uMDQ2LS4xNjMtLjA0NS0uMTY4LS4wNDMtLjE3Mi0uMDQzLS4xNzUtLjA0Mi0uMTc5LS4wNDEtLjE4My0uMDQtLjE4Ny0uMDM4LS4xOTEtLjAzOC0uMTk0LS4wMzYtLjE5OC0uMDM0LS4yMDItLjAzMy0uMjA1LS4wMzItLjIxLS4wMzEtLjIxMi0uMDI4LS4yMTYtLjAyNy0uMjItLjAyNi0uMjI0LS4wMjMtLjIyNi0uMDIyLS4yMzEtLjAyMS0uMjMzLS4wMTgtLjIzNy0uMDE2LS4yNDEtLjAxNC0uMjQ0LS4wMTItLjI0Ny0uMDExLS4yNS0uMDA4LS4yNTQtLjAwNS0uMjU3LS4wMDQtLjI2LS4wMDEtLjI2LjAwMXpcIlxuICApO1xufTtcbmNvbnN0IGluc2VydENvbXB1dGVySWNvbiA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgZWxlbS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcInN5bWJvbFwiKS5hdHRyKFwiaWRcIiwgXCJjb21wdXRlclwiKS5hdHRyKFwid2lkdGhcIiwgXCIyNFwiKS5hdHRyKFwiaGVpZ2h0XCIsIFwiMjRcIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwic2NhbGUoLjUpXCIpLmF0dHIoXG4gICAgXCJkXCIsXG4gICAgXCJNMiAydjEzaDIwdi0xM2gtMjB6bTE4IDExaC0xNnYtOWgxNnY5em0tMTAuMjI4IDZsLjQ2Ni0xaDMuNTI0bC40NjcgMWgtNC40NTd6bTE0LjIyOCAzaC0yNGwyLTZoMi4xMDRsLTEuMzMgNGgxOC40NWwtMS4yOTctNGgyLjA3M2wyIDZ6bS01LTEwaC0xNHYtN2gxNHY3elwiXG4gICk7XG59O1xuY29uc3QgaW5zZXJ0Q2xvY2tJY29uID0gZnVuY3Rpb24oZWxlbSkge1xuICBlbGVtLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwic3ltYm9sXCIpLmF0dHIoXCJpZFwiLCBcImNsb2NrXCIpLmF0dHIoXCJ3aWR0aFwiLCBcIjI0XCIpLmF0dHIoXCJoZWlnaHRcIiwgXCIyNFwiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJzY2FsZSguNSlcIikuYXR0cihcbiAgICBcImRcIixcbiAgICBcIk0xMiAyYzUuNTE0IDAgMTAgNC40ODYgMTAgMTBzLTQuNDg2IDEwLTEwIDEwLTEwLTQuNDg2LTEwLTEwIDQuNDg2LTEwIDEwLTEwem0wLTJjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTItNS4zNzMtMTItMTItMTJ6bTUuODQ4IDEyLjQ1OWMuMjAyLjAzOC4yMDIuMzMzLjAwMS4zNzItMS45MDcuMzYxLTYuMDQ1IDEuMTExLTYuNTQ3IDEuMTExLS43MTkgMC0xLjMwMS0uNTgyLTEuMzAxLTEuMzAxIDAtLjUxMi43Ny01LjQ0NyAxLjEyNS03LjQ0NS4wMzQtLjE5Mi4zMTItLjE4MS4zNDMuMDE0bC45ODUgNi4yMzggNS4zOTQgMS4wMTF6XCJcbiAgKTtcbn07XG5jb25zdCBpbnNlcnRBcnJvd0hlYWQgPSBmdW5jdGlvbihlbGVtKSB7XG4gIGVsZW0uYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIFwiYXJyb3doZWFkXCIpLmF0dHIoXCJyZWZYXCIsIDkpLmF0dHIoXCJyZWZZXCIsIDUpLmF0dHIoXCJtYXJrZXJVbml0c1wiLCBcInVzZXJTcGFjZU9uVXNlXCIpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAxMikuYXR0cihcIm1hcmtlckhlaWdodFwiLCAxMikuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBcIk0gMCAwIEwgMTAgNSBMIDAgMTAgelwiKTtcbn07XG5jb25zdCBpbnNlcnRBcnJvd0VuZCA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgZWxlbS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgXCJhcnJvd2VuZFwiKS5hdHRyKFwicmVmWFwiLCAxKS5hdHRyKFwicmVmWVwiLCA1KS5hdHRyKFwibWFya2VyVW5pdHNcIiwgXCJ1c2VyU3BhY2VPblVzZVwiKS5hdHRyKFwibWFya2VyV2lkdGhcIiwgMTIpLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMTIpLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpLmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgXCJNIDEwIDAgTCAwIDUgTCAxMCAxMCB6XCIpO1xufTtcbmNvbnN0IGluc2VydEFycm93RmlsbGVkSGVhZCA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgZWxlbS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgXCJmaWxsZWQtaGVhZFwiKS5hdHRyKFwicmVmWFwiLCAxOCkuYXR0cihcInJlZllcIiwgNykuYXR0cihcIm1hcmtlcldpZHRoXCIsIDIwKS5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDI4KS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSAxOCw3IEw5LDEzIEwxNCw3IEw5LDEgWlwiKTtcbn07XG5jb25zdCBpbnNlcnREeW5hbWljTnVtYmVyID0gZnVuY3Rpb24oZWxlbSkge1xuICBlbGVtLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBcInNlcXVlbmNlbnVtYmVyXCIpLmF0dHIoXCJyZWZYXCIsIDE1KS5hdHRyKFwicmVmWVwiLCAxNSkuYXR0cihcIm1hcmtlcldpZHRoXCIsIDYwKS5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDQwKS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIDE1KS5hdHRyKFwiY3lcIiwgMTUpLmF0dHIoXCJyXCIsIDYpO1xufTtcbmNvbnN0IGluc2VydEFycm93Q3Jvc3NIZWFkID0gZnVuY3Rpb24oZWxlbSkge1xuICBjb25zdCBkZWZzID0gZWxlbS5hcHBlbmQoXCJkZWZzXCIpO1xuICBjb25zdCBtYXJrZXIgPSBkZWZzLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgXCJjcm9zc2hlYWRcIikuYXR0cihcIm1hcmtlcldpZHRoXCIsIDE1KS5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDgpLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpLmF0dHIoXCJyZWZYXCIsIDE2KS5hdHRyKFwicmVmWVwiLCA0KTtcbiAgbWFya2VyLmFwcGVuZChcInBhdGhcIikuYXR0cihcImZpbGxcIiwgXCJibGFja1wiKS5hdHRyKFwic3Ryb2tlXCIsIFwiIzAwMDAwMFwiKS5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCIwLCAwXCIpLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIxcHhcIikuYXR0cihcImRcIiwgXCJNIDksMiBWIDYgTDE2LDQgWlwiKTtcbiAgbWFya2VyLmFwcGVuZChcInBhdGhcIikuYXR0cihcImZpbGxcIiwgXCJub25lXCIpLmF0dHIoXCJzdHJva2VcIiwgXCIjMDAwMDAwXCIpLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcIjAsIDBcIikuYXR0cihcInN0cm9rZS13aWR0aFwiLCBcIjFweFwiKS5hdHRyKFwiZFwiLCBcIk0gMCwxIEwgNiw3IE0gNiwxIEwgMCw3XCIpO1xufTtcbmNvbnN0IGdldEM0U2hhcGVGb250ID0gKGNuZiwgdHlwZUM0U2hhcGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmb250RmFtaWx5OiBjbmZbdHlwZUM0U2hhcGUgKyBcIkZvbnRGYW1pbHlcIl0sXG4gICAgZm9udFNpemU6IGNuZlt0eXBlQzRTaGFwZSArIFwiRm9udFNpemVcIl0sXG4gICAgZm9udFdlaWdodDogY25mW3R5cGVDNFNoYXBlICsgXCJGb250V2VpZ2h0XCJdXG4gIH07XG59O1xuY29uc3QgX2RyYXdUZXh0Q2FuZGlkYXRlRnVuYyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBieVRleHQoY29udGVudCwgZywgeCwgeSwgd2lkdGgsIGhlaWdodCwgdGV4dEF0dHJzKSB7XG4gICAgY29uc3QgdGV4dCA9IGcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCB4ICsgd2lkdGggLyAyKS5hdHRyKFwieVwiLCB5ICsgaGVpZ2h0IC8gMiArIDUpLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIikudGV4dChjb250ZW50KTtcbiAgICBfc2V0VGV4dEF0dHJzKHRleHQsIHRleHRBdHRycyk7XG4gIH1cbiAgZnVuY3Rpb24gYnlUc3Bhbihjb250ZW50LCBnLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0ZXh0QXR0cnMsIGNvbmYyKSB7XG4gICAgY29uc3QgeyBmb250U2l6ZSwgZm9udEZhbWlseSwgZm9udFdlaWdodCB9ID0gY29uZjI7XG4gICAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KGNvbW1vbi5saW5lQnJlYWtSZWdleCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZHkgPSBpICogZm9udFNpemUgLSBmb250U2l6ZSAqIChsaW5lcy5sZW5ndGggLSAxKSAvIDI7XG4gICAgICBjb25zdCB0ZXh0ID0gZy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIHggKyB3aWR0aCAvIDIpLmF0dHIoXCJ5XCIsIHkpLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIikuYXR0cihcImRvbWluYW50LWJhc2VsaW5lXCIsIFwibWlkZGxlXCIpLnN0eWxlKFwiZm9udC1zaXplXCIsIGZvbnRTaXplKS5zdHlsZShcImZvbnQtd2VpZ2h0XCIsIGZvbnRXZWlnaHQpLnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgZm9udEZhbWlseSk7XG4gICAgICB0ZXh0LmFwcGVuZChcInRzcGFuXCIpLmF0dHIoXCJkeVwiLCBkeSkudGV4dChsaW5lc1tpXSkuYXR0cihcImFsaWdubWVudC1iYXNlbGluZVwiLCBcIm1hdGhlbWF0aWNhbFwiKTtcbiAgICAgIF9zZXRUZXh0QXR0cnModGV4dCwgdGV4dEF0dHJzKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gYnlGbyhjb250ZW50LCBnLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0ZXh0QXR0cnMsIGNvbmYyKSB7XG4gICAgY29uc3QgcyA9IGcuYXBwZW5kKFwic3dpdGNoXCIpO1xuICAgIGNvbnN0IGYgPSBzLmFwcGVuZChcImZvcmVpZ25PYmplY3RcIikuYXR0cihcInhcIiwgeCkuYXR0cihcInlcIiwgeSkuYXR0cihcIndpZHRoXCIsIHdpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG4gICAgY29uc3QgdGV4dCA9IGYuYXBwZW5kKFwieGh0bWw6ZGl2XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcInRhYmxlXCIpLnN0eWxlKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKS5zdHlsZShcIndpZHRoXCIsIFwiMTAwJVwiKTtcbiAgICB0ZXh0LmFwcGVuZChcImRpdlwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJ0YWJsZS1jZWxsXCIpLnN0eWxlKFwidGV4dC1hbGlnblwiLCBcImNlbnRlclwiKS5zdHlsZShcInZlcnRpY2FsLWFsaWduXCIsIFwibWlkZGxlXCIpLnRleHQoY29udGVudCk7XG4gICAgYnlUc3Bhbihjb250ZW50LCBzLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0ZXh0QXR0cnMsIGNvbmYyKTtcbiAgICBfc2V0VGV4dEF0dHJzKHRleHQsIHRleHRBdHRycyk7XG4gIH1cbiAgZnVuY3Rpb24gX3NldFRleHRBdHRycyh0b1RleHQsIGZyb21UZXh0QXR0cnNEaWN0KSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZnJvbVRleHRBdHRyc0RpY3QpIHtcbiAgICAgIGlmIChmcm9tVGV4dEF0dHJzRGljdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRvVGV4dC5hdHRyKGtleSwgZnJvbVRleHRBdHRyc0RpY3Rba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmdW5jdGlvbihjb25mMikge1xuICAgIHJldHVybiBjb25mMi50ZXh0UGxhY2VtZW50ID09PSBcImZvXCIgPyBieUZvIDogY29uZjIudGV4dFBsYWNlbWVudCA9PT0gXCJvbGRcIiA/IGJ5VGV4dCA6IGJ5VHNwYW47XG4gIH07XG59KCk7XG5jb25zdCBzdmdEcmF3ID0ge1xuICBkcmF3UmVjdCxcbiAgZHJhd0JvdW5kYXJ5OiBkcmF3Qm91bmRhcnkkMSxcbiAgZHJhd0M0U2hhcGUsXG4gIGRyYXdSZWxzOiBkcmF3UmVscyQxLFxuICBkcmF3SW1hZ2UsXG4gIGluc2VydEFycm93SGVhZCxcbiAgaW5zZXJ0QXJyb3dFbmQsXG4gIGluc2VydEFycm93RmlsbGVkSGVhZCxcbiAgaW5zZXJ0RHluYW1pY051bWJlcixcbiAgaW5zZXJ0QXJyb3dDcm9zc0hlYWQsXG4gIGluc2VydERhdGFiYXNlSWNvbixcbiAgaW5zZXJ0Q29tcHV0ZXJJY29uLFxuICBpbnNlcnRDbG9ja0ljb25cbn07XG5sZXQgZ2xvYmFsQm91bmRhcnlNYXhYID0gMCwgZ2xvYmFsQm91bmRhcnlNYXhZID0gMDtcbmxldCBjNFNoYXBlSW5Sb3cgPSA0O1xubGV0IGM0Qm91bmRhcnlJblJvdyA9IDI7XG5wYXJzZXIueXkgPSBkYjtcbmxldCBjb25mID0ge307XG5jbGFzcyBCb3VuZHMge1xuICBjb25zdHJ1Y3RvcihkaWFnT2JqKSB7XG4gICAgdGhpcy5uYW1lID0gXCJcIjtcbiAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB0aGlzLmRhdGEuc3RhcnR4ID0gdm9pZCAwO1xuICAgIHRoaXMuZGF0YS5zdG9weCA9IHZvaWQgMDtcbiAgICB0aGlzLmRhdGEuc3RhcnR5ID0gdm9pZCAwO1xuICAgIHRoaXMuZGF0YS5zdG9weSA9IHZvaWQgMDtcbiAgICB0aGlzLmRhdGEud2lkdGhMaW1pdCA9IHZvaWQgMDtcbiAgICB0aGlzLm5leHREYXRhID0ge307XG4gICAgdGhpcy5uZXh0RGF0YS5zdGFydHggPSB2b2lkIDA7XG4gICAgdGhpcy5uZXh0RGF0YS5zdG9weCA9IHZvaWQgMDtcbiAgICB0aGlzLm5leHREYXRhLnN0YXJ0eSA9IHZvaWQgMDtcbiAgICB0aGlzLm5leHREYXRhLnN0b3B5ID0gdm9pZCAwO1xuICAgIHRoaXMubmV4dERhdGEuY250ID0gMDtcbiAgICBzZXRDb25mKGRpYWdPYmouZGIuZ2V0Q29uZmlnKCkpO1xuICB9XG4gIHNldERhdGEoc3RhcnR4LCBzdG9weCwgc3RhcnR5LCBzdG9weSkge1xuICAgIHRoaXMubmV4dERhdGEuc3RhcnR4ID0gdGhpcy5kYXRhLnN0YXJ0eCA9IHN0YXJ0eDtcbiAgICB0aGlzLm5leHREYXRhLnN0b3B4ID0gdGhpcy5kYXRhLnN0b3B4ID0gc3RvcHg7XG4gICAgdGhpcy5uZXh0RGF0YS5zdGFydHkgPSB0aGlzLmRhdGEuc3RhcnR5ID0gc3RhcnR5O1xuICAgIHRoaXMubmV4dERhdGEuc3RvcHkgPSB0aGlzLmRhdGEuc3RvcHkgPSBzdG9weTtcbiAgfVxuICB1cGRhdGVWYWwob2JqLCBrZXksIHZhbCwgZnVuKSB7XG4gICAgaWYgKG9ialtrZXldID09PSB2b2lkIDApIHtcbiAgICAgIG9ialtrZXldID0gdmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba2V5XSA9IGZ1bih2YWwsIG9ialtrZXldKTtcbiAgICB9XG4gIH1cbiAgaW5zZXJ0KGM0U2hhcGUpIHtcbiAgICB0aGlzLm5leHREYXRhLmNudCA9IHRoaXMubmV4dERhdGEuY250ICsgMTtcbiAgICBsZXQgX3N0YXJ0eCA9IHRoaXMubmV4dERhdGEuc3RhcnR4ID09PSB0aGlzLm5leHREYXRhLnN0b3B4ID8gdGhpcy5uZXh0RGF0YS5zdG9weCArIGM0U2hhcGUubWFyZ2luIDogdGhpcy5uZXh0RGF0YS5zdG9weCArIGM0U2hhcGUubWFyZ2luICogMjtcbiAgICBsZXQgX3N0b3B4ID0gX3N0YXJ0eCArIGM0U2hhcGUud2lkdGg7XG4gICAgbGV0IF9zdGFydHkgPSB0aGlzLm5leHREYXRhLnN0YXJ0eSArIGM0U2hhcGUubWFyZ2luICogMjtcbiAgICBsZXQgX3N0b3B5ID0gX3N0YXJ0eSArIGM0U2hhcGUuaGVpZ2h0O1xuICAgIGlmIChfc3RhcnR4ID49IHRoaXMuZGF0YS53aWR0aExpbWl0IHx8IF9zdG9weCA+PSB0aGlzLmRhdGEud2lkdGhMaW1pdCB8fCB0aGlzLm5leHREYXRhLmNudCA+IGM0U2hhcGVJblJvdykge1xuICAgICAgX3N0YXJ0eCA9IHRoaXMubmV4dERhdGEuc3RhcnR4ICsgYzRTaGFwZS5tYXJnaW4gKyBjb25mLm5leHRMaW5lUGFkZGluZ1g7XG4gICAgICBfc3RhcnR5ID0gdGhpcy5uZXh0RGF0YS5zdG9weSArIGM0U2hhcGUubWFyZ2luICogMjtcbiAgICAgIHRoaXMubmV4dERhdGEuc3RvcHggPSBfc3RvcHggPSBfc3RhcnR4ICsgYzRTaGFwZS53aWR0aDtcbiAgICAgIHRoaXMubmV4dERhdGEuc3RhcnR5ID0gdGhpcy5uZXh0RGF0YS5zdG9weTtcbiAgICAgIHRoaXMubmV4dERhdGEuc3RvcHkgPSBfc3RvcHkgPSBfc3RhcnR5ICsgYzRTaGFwZS5oZWlnaHQ7XG4gICAgICB0aGlzLm5leHREYXRhLmNudCA9IDE7XG4gICAgfVxuICAgIGM0U2hhcGUueCA9IF9zdGFydHg7XG4gICAgYzRTaGFwZS55ID0gX3N0YXJ0eTtcbiAgICB0aGlzLnVwZGF0ZVZhbCh0aGlzLmRhdGEsIFwic3RhcnR4XCIsIF9zdGFydHgsIE1hdGgubWluKTtcbiAgICB0aGlzLnVwZGF0ZVZhbCh0aGlzLmRhdGEsIFwic3RhcnR5XCIsIF9zdGFydHksIE1hdGgubWluKTtcbiAgICB0aGlzLnVwZGF0ZVZhbCh0aGlzLmRhdGEsIFwic3RvcHhcIiwgX3N0b3B4LCBNYXRoLm1heCk7XG4gICAgdGhpcy51cGRhdGVWYWwodGhpcy5kYXRhLCBcInN0b3B5XCIsIF9zdG9weSwgTWF0aC5tYXgpO1xuICAgIHRoaXMudXBkYXRlVmFsKHRoaXMubmV4dERhdGEsIFwic3RhcnR4XCIsIF9zdGFydHgsIE1hdGgubWluKTtcbiAgICB0aGlzLnVwZGF0ZVZhbCh0aGlzLm5leHREYXRhLCBcInN0YXJ0eVwiLCBfc3RhcnR5LCBNYXRoLm1pbik7XG4gICAgdGhpcy51cGRhdGVWYWwodGhpcy5uZXh0RGF0YSwgXCJzdG9weFwiLCBfc3RvcHgsIE1hdGgubWF4KTtcbiAgICB0aGlzLnVwZGF0ZVZhbCh0aGlzLm5leHREYXRhLCBcInN0b3B5XCIsIF9zdG9weSwgTWF0aC5tYXgpO1xuICB9XG4gIGluaXQoZGlhZ09iaikge1xuICAgIHRoaXMubmFtZSA9IFwiXCI7XG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgc3RhcnR4OiB2b2lkIDAsXG4gICAgICBzdG9weDogdm9pZCAwLFxuICAgICAgc3RhcnR5OiB2b2lkIDAsXG4gICAgICBzdG9weTogdm9pZCAwLFxuICAgICAgd2lkdGhMaW1pdDogdm9pZCAwXG4gICAgfTtcbiAgICB0aGlzLm5leHREYXRhID0ge1xuICAgICAgc3RhcnR4OiB2b2lkIDAsXG4gICAgICBzdG9weDogdm9pZCAwLFxuICAgICAgc3RhcnR5OiB2b2lkIDAsXG4gICAgICBzdG9weTogdm9pZCAwLFxuICAgICAgY250OiAwXG4gICAgfTtcbiAgICBzZXRDb25mKGRpYWdPYmouZGIuZ2V0Q29uZmlnKCkpO1xuICB9XG4gIGJ1bXBMYXN0TWFyZ2luKG1hcmdpbikge1xuICAgIHRoaXMuZGF0YS5zdG9weCArPSBtYXJnaW47XG4gICAgdGhpcy5kYXRhLnN0b3B5ICs9IG1hcmdpbjtcbiAgfVxufVxuY29uc3Qgc2V0Q29uZiA9IGZ1bmN0aW9uKGNuZikge1xuICBhc3NpZ25XaXRoRGVwdGgoY29uZiwgY25mKTtcbiAgaWYgKGNuZi5mb250RmFtaWx5KSB7XG4gICAgY29uZi5wZXJzb25Gb250RmFtaWx5ID0gY29uZi5zeXN0ZW1Gb250RmFtaWx5ID0gY29uZi5tZXNzYWdlRm9udEZhbWlseSA9IGNuZi5mb250RmFtaWx5O1xuICB9XG4gIGlmIChjbmYuZm9udFNpemUpIHtcbiAgICBjb25mLnBlcnNvbkZvbnRTaXplID0gY29uZi5zeXN0ZW1Gb250U2l6ZSA9IGNvbmYubWVzc2FnZUZvbnRTaXplID0gY25mLmZvbnRTaXplO1xuICB9XG4gIGlmIChjbmYuZm9udFdlaWdodCkge1xuICAgIGNvbmYucGVyc29uRm9udFdlaWdodCA9IGNvbmYuc3lzdGVtRm9udFdlaWdodCA9IGNvbmYubWVzc2FnZUZvbnRXZWlnaHQgPSBjbmYuZm9udFdlaWdodDtcbiAgfVxufTtcbmNvbnN0IGM0U2hhcGVGb250ID0gKGNuZiwgdHlwZUM0U2hhcGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmb250RmFtaWx5OiBjbmZbdHlwZUM0U2hhcGUgKyBcIkZvbnRGYW1pbHlcIl0sXG4gICAgZm9udFNpemU6IGNuZlt0eXBlQzRTaGFwZSArIFwiRm9udFNpemVcIl0sXG4gICAgZm9udFdlaWdodDogY25mW3R5cGVDNFNoYXBlICsgXCJGb250V2VpZ2h0XCJdXG4gIH07XG59O1xuY29uc3QgYm91bmRhcnlGb250ID0gKGNuZikgPT4ge1xuICByZXR1cm4ge1xuICAgIGZvbnRGYW1pbHk6IGNuZi5ib3VuZGFyeUZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IGNuZi5ib3VuZGFyeUZvbnRTaXplLFxuICAgIGZvbnRXZWlnaHQ6IGNuZi5ib3VuZGFyeUZvbnRXZWlnaHRcbiAgfTtcbn07XG5jb25zdCBtZXNzYWdlRm9udCA9IChjbmYpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmb250RmFtaWx5OiBjbmYubWVzc2FnZUZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IGNuZi5tZXNzYWdlRm9udFNpemUsXG4gICAgZm9udFdlaWdodDogY25mLm1lc3NhZ2VGb250V2VpZ2h0XG4gIH07XG59O1xuZnVuY3Rpb24gY2FsY0M0U2hhcGVUZXh0V0godGV4dFR5cGUsIGM0U2hhcGUsIGM0U2hhcGVUZXh0V3JhcCwgdGV4dENvbmYsIHRleHRMaW1pdFdpZHRoKSB7XG4gIGlmICghYzRTaGFwZVt0ZXh0VHlwZV0ud2lkdGgpIHtcbiAgICBpZiAoYzRTaGFwZVRleHRXcmFwKSB7XG4gICAgICBjNFNoYXBlW3RleHRUeXBlXS50ZXh0ID0gd3JhcExhYmVsKGM0U2hhcGVbdGV4dFR5cGVdLnRleHQsIHRleHRMaW1pdFdpZHRoLCB0ZXh0Q29uZik7XG4gICAgICBjNFNoYXBlW3RleHRUeXBlXS50ZXh0TGluZXMgPSBjNFNoYXBlW3RleHRUeXBlXS50ZXh0LnNwbGl0KGNvbW1vbi5saW5lQnJlYWtSZWdleCkubGVuZ3RoO1xuICAgICAgYzRTaGFwZVt0ZXh0VHlwZV0ud2lkdGggPSB0ZXh0TGltaXRXaWR0aDtcbiAgICAgIGM0U2hhcGVbdGV4dFR5cGVdLmhlaWdodCA9IGNhbGN1bGF0ZVRleHRIZWlnaHQoYzRTaGFwZVt0ZXh0VHlwZV0udGV4dCwgdGV4dENvbmYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbGluZXMgPSBjNFNoYXBlW3RleHRUeXBlXS50ZXh0LnNwbGl0KGNvbW1vbi5saW5lQnJlYWtSZWdleCk7XG4gICAgICBjNFNoYXBlW3RleHRUeXBlXS50ZXh0TGluZXMgPSBsaW5lcy5sZW5ndGg7XG4gICAgICBsZXQgbGluZUhlaWdodCA9IDA7XG4gICAgICBjNFNoYXBlW3RleHRUeXBlXS5oZWlnaHQgPSAwO1xuICAgICAgYzRTaGFwZVt0ZXh0VHlwZV0ud2lkdGggPSAwO1xuICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICAgIGM0U2hhcGVbdGV4dFR5cGVdLndpZHRoID0gTWF0aC5tYXgoXG4gICAgICAgICAgY2FsY3VsYXRlVGV4dFdpZHRoKGxpbmUsIHRleHRDb25mKSxcbiAgICAgICAgICBjNFNoYXBlW3RleHRUeXBlXS53aWR0aFxuICAgICAgICApO1xuICAgICAgICBsaW5lSGVpZ2h0ID0gY2FsY3VsYXRlVGV4dEhlaWdodChsaW5lLCB0ZXh0Q29uZik7XG4gICAgICAgIGM0U2hhcGVbdGV4dFR5cGVdLmhlaWdodCA9IGM0U2hhcGVbdGV4dFR5cGVdLmhlaWdodCArIGxpbmVIZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5jb25zdCBkcmF3Qm91bmRhcnkgPSBmdW5jdGlvbihkaWFncmFtMiwgYm91bmRhcnksIGJvdW5kcykge1xuICBib3VuZGFyeS54ID0gYm91bmRzLmRhdGEuc3RhcnR4O1xuICBib3VuZGFyeS55ID0gYm91bmRzLmRhdGEuc3RhcnR5O1xuICBib3VuZGFyeS53aWR0aCA9IGJvdW5kcy5kYXRhLnN0b3B4IC0gYm91bmRzLmRhdGEuc3RhcnR4O1xuICBib3VuZGFyeS5oZWlnaHQgPSBib3VuZHMuZGF0YS5zdG9weSAtIGJvdW5kcy5kYXRhLnN0YXJ0eTtcbiAgYm91bmRhcnkubGFiZWwueSA9IGNvbmYuYzRTaGFwZU1hcmdpbiAtIDM1O1xuICBsZXQgYm91bmRhcnlUZXh0V3JhcCA9IGJvdW5kYXJ5LndyYXAgJiYgY29uZi53cmFwO1xuICBsZXQgYm91bmRhcnlMYWJlbENvbmYgPSBib3VuZGFyeUZvbnQoY29uZik7XG4gIGJvdW5kYXJ5TGFiZWxDb25mLmZvbnRTaXplID0gYm91bmRhcnlMYWJlbENvbmYuZm9udFNpemUgKyAyO1xuICBib3VuZGFyeUxhYmVsQ29uZi5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gIGxldCB0ZXh0TGltaXRXaWR0aCA9IGNhbGN1bGF0ZVRleHRXaWR0aChib3VuZGFyeS5sYWJlbC50ZXh0LCBib3VuZGFyeUxhYmVsQ29uZik7XG4gIGNhbGNDNFNoYXBlVGV4dFdIKFwibGFiZWxcIiwgYm91bmRhcnksIGJvdW5kYXJ5VGV4dFdyYXAsIGJvdW5kYXJ5TGFiZWxDb25mLCB0ZXh0TGltaXRXaWR0aCk7XG4gIHN2Z0RyYXcuZHJhd0JvdW5kYXJ5KGRpYWdyYW0yLCBib3VuZGFyeSwgY29uZik7XG59O1xuY29uc3QgZHJhd0M0U2hhcGVBcnJheSA9IGZ1bmN0aW9uKGN1cnJlbnRCb3VuZHMsIGRpYWdyYW0yLCBjNFNoYXBlQXJyYXkyLCBjNFNoYXBlS2V5cykge1xuICBsZXQgWSA9IDA7XG4gIGZvciAoY29uc3QgYzRTaGFwZUtleSBvZiBjNFNoYXBlS2V5cykge1xuICAgIFkgPSAwO1xuICAgIGNvbnN0IGM0U2hhcGUgPSBjNFNoYXBlQXJyYXkyW2M0U2hhcGVLZXldO1xuICAgIGxldCBjNFNoYXBlVHlwZUNvbmYgPSBjNFNoYXBlRm9udChjb25mLCBjNFNoYXBlLnR5cGVDNFNoYXBlLnRleHQpO1xuICAgIGM0U2hhcGVUeXBlQ29uZi5mb250U2l6ZSA9IGM0U2hhcGVUeXBlQ29uZi5mb250U2l6ZSAtIDI7XG4gICAgYzRTaGFwZS50eXBlQzRTaGFwZS53aWR0aCA9IGNhbGN1bGF0ZVRleHRXaWR0aChcbiAgICAgIFwiwqtcIiArIGM0U2hhcGUudHlwZUM0U2hhcGUudGV4dCArIFwiwrtcIixcbiAgICAgIGM0U2hhcGVUeXBlQ29uZlxuICAgICk7XG4gICAgYzRTaGFwZS50eXBlQzRTaGFwZS5oZWlnaHQgPSBjNFNoYXBlVHlwZUNvbmYuZm9udFNpemUgKyAyO1xuICAgIGM0U2hhcGUudHlwZUM0U2hhcGUuWSA9IGNvbmYuYzRTaGFwZVBhZGRpbmc7XG4gICAgWSA9IGM0U2hhcGUudHlwZUM0U2hhcGUuWSArIGM0U2hhcGUudHlwZUM0U2hhcGUuaGVpZ2h0IC0gNDtcbiAgICBjNFNoYXBlLmltYWdlID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwLCBZOiAwIH07XG4gICAgc3dpdGNoIChjNFNoYXBlLnR5cGVDNFNoYXBlLnRleHQpIHtcbiAgICAgIGNhc2UgXCJwZXJzb25cIjpcbiAgICAgIGNhc2UgXCJleHRlcm5hbF9wZXJzb25cIjpcbiAgICAgICAgYzRTaGFwZS5pbWFnZS53aWR0aCA9IDQ4O1xuICAgICAgICBjNFNoYXBlLmltYWdlLmhlaWdodCA9IDQ4O1xuICAgICAgICBjNFNoYXBlLmltYWdlLlkgPSBZO1xuICAgICAgICBZID0gYzRTaGFwZS5pbWFnZS5ZICsgYzRTaGFwZS5pbWFnZS5oZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoYzRTaGFwZS5zcHJpdGUpIHtcbiAgICAgIGM0U2hhcGUuaW1hZ2Uud2lkdGggPSA0ODtcbiAgICAgIGM0U2hhcGUuaW1hZ2UuaGVpZ2h0ID0gNDg7XG4gICAgICBjNFNoYXBlLmltYWdlLlkgPSBZO1xuICAgICAgWSA9IGM0U2hhcGUuaW1hZ2UuWSArIGM0U2hhcGUuaW1hZ2UuaGVpZ2h0O1xuICAgIH1cbiAgICBsZXQgYzRTaGFwZVRleHRXcmFwID0gYzRTaGFwZS53cmFwICYmIGNvbmYud3JhcDtcbiAgICBsZXQgdGV4dExpbWl0V2lkdGggPSBjb25mLndpZHRoIC0gY29uZi5jNFNoYXBlUGFkZGluZyAqIDI7XG4gICAgbGV0IGM0U2hhcGVMYWJlbENvbmYgPSBjNFNoYXBlRm9udChjb25mLCBjNFNoYXBlLnR5cGVDNFNoYXBlLnRleHQpO1xuICAgIGM0U2hhcGVMYWJlbENvbmYuZm9udFNpemUgPSBjNFNoYXBlTGFiZWxDb25mLmZvbnRTaXplICsgMjtcbiAgICBjNFNoYXBlTGFiZWxDb25mLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICBjYWxjQzRTaGFwZVRleHRXSChcImxhYmVsXCIsIGM0U2hhcGUsIGM0U2hhcGVUZXh0V3JhcCwgYzRTaGFwZUxhYmVsQ29uZiwgdGV4dExpbWl0V2lkdGgpO1xuICAgIGM0U2hhcGVbXCJsYWJlbFwiXS5ZID0gWSArIDg7XG4gICAgWSA9IGM0U2hhcGVbXCJsYWJlbFwiXS5ZICsgYzRTaGFwZVtcImxhYmVsXCJdLmhlaWdodDtcbiAgICBpZiAoYzRTaGFwZS50eXBlICYmIGM0U2hhcGUudHlwZS50ZXh0ICE9PSBcIlwiKSB7XG4gICAgICBjNFNoYXBlLnR5cGUudGV4dCA9IFwiW1wiICsgYzRTaGFwZS50eXBlLnRleHQgKyBcIl1cIjtcbiAgICAgIGxldCBjNFNoYXBlVHlwZUNvbmYyID0gYzRTaGFwZUZvbnQoY29uZiwgYzRTaGFwZS50eXBlQzRTaGFwZS50ZXh0KTtcbiAgICAgIGNhbGNDNFNoYXBlVGV4dFdIKFwidHlwZVwiLCBjNFNoYXBlLCBjNFNoYXBlVGV4dFdyYXAsIGM0U2hhcGVUeXBlQ29uZjIsIHRleHRMaW1pdFdpZHRoKTtcbiAgICAgIGM0U2hhcGVbXCJ0eXBlXCJdLlkgPSBZICsgNTtcbiAgICAgIFkgPSBjNFNoYXBlW1widHlwZVwiXS5ZICsgYzRTaGFwZVtcInR5cGVcIl0uaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoYzRTaGFwZS50ZWNobiAmJiBjNFNoYXBlLnRlY2huLnRleHQgIT09IFwiXCIpIHtcbiAgICAgIGM0U2hhcGUudGVjaG4udGV4dCA9IFwiW1wiICsgYzRTaGFwZS50ZWNobi50ZXh0ICsgXCJdXCI7XG4gICAgICBsZXQgYzRTaGFwZVRlY2huQ29uZiA9IGM0U2hhcGVGb250KGNvbmYsIGM0U2hhcGUudGVjaG4udGV4dCk7XG4gICAgICBjYWxjQzRTaGFwZVRleHRXSChcInRlY2huXCIsIGM0U2hhcGUsIGM0U2hhcGVUZXh0V3JhcCwgYzRTaGFwZVRlY2huQ29uZiwgdGV4dExpbWl0V2lkdGgpO1xuICAgICAgYzRTaGFwZVtcInRlY2huXCJdLlkgPSBZICsgNTtcbiAgICAgIFkgPSBjNFNoYXBlW1widGVjaG5cIl0uWSArIGM0U2hhcGVbXCJ0ZWNoblwiXS5oZWlnaHQ7XG4gICAgfVxuICAgIGxldCByZWN0SGVpZ2h0ID0gWTtcbiAgICBsZXQgcmVjdFdpZHRoID0gYzRTaGFwZS5sYWJlbC53aWR0aDtcbiAgICBpZiAoYzRTaGFwZS5kZXNjciAmJiBjNFNoYXBlLmRlc2NyLnRleHQgIT09IFwiXCIpIHtcbiAgICAgIGxldCBjNFNoYXBlRGVzY3JDb25mID0gYzRTaGFwZUZvbnQoY29uZiwgYzRTaGFwZS50eXBlQzRTaGFwZS50ZXh0KTtcbiAgICAgIGNhbGNDNFNoYXBlVGV4dFdIKFwiZGVzY3JcIiwgYzRTaGFwZSwgYzRTaGFwZVRleHRXcmFwLCBjNFNoYXBlRGVzY3JDb25mLCB0ZXh0TGltaXRXaWR0aCk7XG4gICAgICBjNFNoYXBlW1wiZGVzY3JcIl0uWSA9IFkgKyAyMDtcbiAgICAgIFkgPSBjNFNoYXBlW1wiZGVzY3JcIl0uWSArIGM0U2hhcGVbXCJkZXNjclwiXS5oZWlnaHQ7XG4gICAgICByZWN0V2lkdGggPSBNYXRoLm1heChjNFNoYXBlLmxhYmVsLndpZHRoLCBjNFNoYXBlLmRlc2NyLndpZHRoKTtcbiAgICAgIHJlY3RIZWlnaHQgPSBZIC0gYzRTaGFwZVtcImRlc2NyXCJdLnRleHRMaW5lcyAqIDU7XG4gICAgfVxuICAgIHJlY3RXaWR0aCA9IHJlY3RXaWR0aCArIGNvbmYuYzRTaGFwZVBhZGRpbmc7XG4gICAgYzRTaGFwZS53aWR0aCA9IE1hdGgubWF4KGM0U2hhcGUud2lkdGggfHwgY29uZi53aWR0aCwgcmVjdFdpZHRoLCBjb25mLndpZHRoKTtcbiAgICBjNFNoYXBlLmhlaWdodCA9IE1hdGgubWF4KGM0U2hhcGUuaGVpZ2h0IHx8IGNvbmYuaGVpZ2h0LCByZWN0SGVpZ2h0LCBjb25mLmhlaWdodCk7XG4gICAgYzRTaGFwZS5tYXJnaW4gPSBjNFNoYXBlLm1hcmdpbiB8fCBjb25mLmM0U2hhcGVNYXJnaW47XG4gICAgY3VycmVudEJvdW5kcy5pbnNlcnQoYzRTaGFwZSk7XG4gICAgc3ZnRHJhdy5kcmF3QzRTaGFwZShkaWFncmFtMiwgYzRTaGFwZSwgY29uZik7XG4gIH1cbiAgY3VycmVudEJvdW5kcy5idW1wTGFzdE1hcmdpbihjb25mLmM0U2hhcGVNYXJnaW4pO1xufTtcbmNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxufVxubGV0IGdldEludGVyc2VjdFBvaW50ID0gZnVuY3Rpb24oZnJvbU5vZGUsIGVuZFBvaW50KSB7XG4gIGxldCB4MSA9IGZyb21Ob2RlLng7XG4gIGxldCB5MSA9IGZyb21Ob2RlLnk7XG4gIGxldCB4MiA9IGVuZFBvaW50Lng7XG4gIGxldCB5MiA9IGVuZFBvaW50Lnk7XG4gIGxldCBmcm9tQ2VudGVyWCA9IHgxICsgZnJvbU5vZGUud2lkdGggLyAyO1xuICBsZXQgZnJvbUNlbnRlclkgPSB5MSArIGZyb21Ob2RlLmhlaWdodCAvIDI7XG4gIGxldCBkeCA9IE1hdGguYWJzKHgxIC0geDIpO1xuICBsZXQgZHkgPSBNYXRoLmFicyh5MSAtIHkyKTtcbiAgbGV0IHRhbkRZWCA9IGR5IC8gZHg7XG4gIGxldCBmcm9tRFlYID0gZnJvbU5vZGUuaGVpZ2h0IC8gZnJvbU5vZGUud2lkdGg7XG4gIGxldCByZXR1cm5Qb2ludCA9IG51bGw7XG4gIGlmICh5MSA9PSB5MiAmJiB4MSA8IHgyKSB7XG4gICAgcmV0dXJuUG9pbnQgPSBuZXcgUG9pbnQoeDEgKyBmcm9tTm9kZS53aWR0aCwgZnJvbUNlbnRlclkpO1xuICB9IGVsc2UgaWYgKHkxID09IHkyICYmIHgxID4geDIpIHtcbiAgICByZXR1cm5Qb2ludCA9IG5ldyBQb2ludCh4MSwgZnJvbUNlbnRlclkpO1xuICB9IGVsc2UgaWYgKHgxID09IHgyICYmIHkxIDwgeTIpIHtcbiAgICByZXR1cm5Qb2ludCA9IG5ldyBQb2ludChmcm9tQ2VudGVyWCwgeTEgKyBmcm9tTm9kZS5oZWlnaHQpO1xuICB9IGVsc2UgaWYgKHgxID09IHgyICYmIHkxID4geTIpIHtcbiAgICByZXR1cm5Qb2ludCA9IG5ldyBQb2ludChmcm9tQ2VudGVyWCwgeTEpO1xuICB9XG4gIGlmICh4MSA+IHgyICYmIHkxIDwgeTIpIHtcbiAgICBpZiAoZnJvbURZWCA+PSB0YW5EWVgpIHtcbiAgICAgIHJldHVyblBvaW50ID0gbmV3IFBvaW50KHgxLCBmcm9tQ2VudGVyWSArIHRhbkRZWCAqIGZyb21Ob2RlLndpZHRoIC8gMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVyblBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgICBmcm9tQ2VudGVyWCAtIGR4IC8gZHkgKiBmcm9tTm9kZS5oZWlnaHQgLyAyLFxuICAgICAgICB5MSArIGZyb21Ob2RlLmhlaWdodFxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoeDEgPCB4MiAmJiB5MSA8IHkyKSB7XG4gICAgaWYgKGZyb21EWVggPj0gdGFuRFlYKSB7XG4gICAgICByZXR1cm5Qb2ludCA9IG5ldyBQb2ludCh4MSArIGZyb21Ob2RlLndpZHRoLCBmcm9tQ2VudGVyWSArIHRhbkRZWCAqIGZyb21Ob2RlLndpZHRoIC8gMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVyblBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgICBmcm9tQ2VudGVyWCArIGR4IC8gZHkgKiBmcm9tTm9kZS5oZWlnaHQgLyAyLFxuICAgICAgICB5MSArIGZyb21Ob2RlLmhlaWdodFxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoeDEgPCB4MiAmJiB5MSA+IHkyKSB7XG4gICAgaWYgKGZyb21EWVggPj0gdGFuRFlYKSB7XG4gICAgICByZXR1cm5Qb2ludCA9IG5ldyBQb2ludCh4MSArIGZyb21Ob2RlLndpZHRoLCBmcm9tQ2VudGVyWSAtIHRhbkRZWCAqIGZyb21Ob2RlLndpZHRoIC8gMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVyblBvaW50ID0gbmV3IFBvaW50KGZyb21DZW50ZXJYICsgZnJvbU5vZGUuaGVpZ2h0IC8gMiAqIGR4IC8gZHksIHkxKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoeDEgPiB4MiAmJiB5MSA+IHkyKSB7XG4gICAgaWYgKGZyb21EWVggPj0gdGFuRFlYKSB7XG4gICAgICByZXR1cm5Qb2ludCA9IG5ldyBQb2ludCh4MSwgZnJvbUNlbnRlclkgLSBmcm9tTm9kZS53aWR0aCAvIDIgKiB0YW5EWVgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm5Qb2ludCA9IG5ldyBQb2ludChmcm9tQ2VudGVyWCAtIGZyb21Ob2RlLmhlaWdodCAvIDIgKiBkeCAvIGR5LCB5MSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXR1cm5Qb2ludDtcbn07XG5sZXQgZ2V0SW50ZXJzZWN0UG9pbnRzID0gZnVuY3Rpb24oZnJvbU5vZGUsIGVuZE5vZGUpIHtcbiAgbGV0IGVuZEludGVyc2VjdFBvaW50ID0geyB4OiAwLCB5OiAwIH07XG4gIGVuZEludGVyc2VjdFBvaW50LnggPSBlbmROb2RlLnggKyBlbmROb2RlLndpZHRoIC8gMjtcbiAgZW5kSW50ZXJzZWN0UG9pbnQueSA9IGVuZE5vZGUueSArIGVuZE5vZGUuaGVpZ2h0IC8gMjtcbiAgbGV0IHN0YXJ0UG9pbnQgPSBnZXRJbnRlcnNlY3RQb2ludChmcm9tTm9kZSwgZW5kSW50ZXJzZWN0UG9pbnQpO1xuICBlbmRJbnRlcnNlY3RQb2ludC54ID0gZnJvbU5vZGUueCArIGZyb21Ob2RlLndpZHRoIC8gMjtcbiAgZW5kSW50ZXJzZWN0UG9pbnQueSA9IGZyb21Ob2RlLnkgKyBmcm9tTm9kZS5oZWlnaHQgLyAyO1xuICBsZXQgZW5kUG9pbnQgPSBnZXRJbnRlcnNlY3RQb2ludChlbmROb2RlLCBlbmRJbnRlcnNlY3RQb2ludCk7XG4gIHJldHVybiB7IHN0YXJ0UG9pbnQsIGVuZFBvaW50IH07XG59O1xuY29uc3QgZHJhd1JlbHMgPSBmdW5jdGlvbihkaWFncmFtMiwgcmVsczIsIGdldEM0U2hhcGVPYmosIGRpYWdPYmopIHtcbiAgbGV0IGkgPSAwO1xuICBmb3IgKGxldCByZWwgb2YgcmVsczIpIHtcbiAgICBpID0gaSArIDE7XG4gICAgbGV0IHJlbFRleHRXcmFwID0gcmVsLndyYXAgJiYgY29uZi53cmFwO1xuICAgIGxldCByZWxDb25mID0gbWVzc2FnZUZvbnQoY29uZik7XG4gICAgbGV0IGRpYWdyYW1UeXBlID0gZGlhZ09iai5kYi5nZXRDNFR5cGUoKTtcbiAgICBpZiAoZGlhZ3JhbVR5cGUgPT09IFwiQzREeW5hbWljXCIpIHtcbiAgICAgIHJlbC5sYWJlbC50ZXh0ID0gaSArIFwiOiBcIiArIHJlbC5sYWJlbC50ZXh0O1xuICAgIH1cbiAgICBsZXQgdGV4dExpbWl0V2lkdGggPSBjYWxjdWxhdGVUZXh0V2lkdGgocmVsLmxhYmVsLnRleHQsIHJlbENvbmYpO1xuICAgIGNhbGNDNFNoYXBlVGV4dFdIKFwibGFiZWxcIiwgcmVsLCByZWxUZXh0V3JhcCwgcmVsQ29uZiwgdGV4dExpbWl0V2lkdGgpO1xuICAgIGlmIChyZWwudGVjaG4gJiYgcmVsLnRlY2huLnRleHQgIT09IFwiXCIpIHtcbiAgICAgIHRleHRMaW1pdFdpZHRoID0gY2FsY3VsYXRlVGV4dFdpZHRoKHJlbC50ZWNobi50ZXh0LCByZWxDb25mKTtcbiAgICAgIGNhbGNDNFNoYXBlVGV4dFdIKFwidGVjaG5cIiwgcmVsLCByZWxUZXh0V3JhcCwgcmVsQ29uZiwgdGV4dExpbWl0V2lkdGgpO1xuICAgIH1cbiAgICBpZiAocmVsLmRlc2NyICYmIHJlbC5kZXNjci50ZXh0ICE9PSBcIlwiKSB7XG4gICAgICB0ZXh0TGltaXRXaWR0aCA9IGNhbGN1bGF0ZVRleHRXaWR0aChyZWwuZGVzY3IudGV4dCwgcmVsQ29uZik7XG4gICAgICBjYWxjQzRTaGFwZVRleHRXSChcImRlc2NyXCIsIHJlbCwgcmVsVGV4dFdyYXAsIHJlbENvbmYsIHRleHRMaW1pdFdpZHRoKTtcbiAgICB9XG4gICAgbGV0IGZyb21Ob2RlID0gZ2V0QzRTaGFwZU9iaihyZWwuZnJvbSk7XG4gICAgbGV0IGVuZE5vZGUgPSBnZXRDNFNoYXBlT2JqKHJlbC50byk7XG4gICAgbGV0IHBvaW50cyA9IGdldEludGVyc2VjdFBvaW50cyhmcm9tTm9kZSwgZW5kTm9kZSk7XG4gICAgcmVsLnN0YXJ0UG9pbnQgPSBwb2ludHMuc3RhcnRQb2ludDtcbiAgICByZWwuZW5kUG9pbnQgPSBwb2ludHMuZW5kUG9pbnQ7XG4gIH1cbiAgc3ZnRHJhdy5kcmF3UmVscyhkaWFncmFtMiwgcmVsczIsIGNvbmYpO1xufTtcbmZ1bmN0aW9uIGRyYXdJbnNpZGVCb3VuZGFyeShkaWFncmFtMiwgcGFyZW50Qm91bmRhcnlBbGlhcywgcGFyZW50Qm91bmRzLCBjdXJyZW50Qm91bmRhcmllcywgZGlhZ09iaikge1xuICBsZXQgY3VycmVudEJvdW5kcyA9IG5ldyBCb3VuZHMoZGlhZ09iaik7XG4gIGN1cnJlbnRCb3VuZHMuZGF0YS53aWR0aExpbWl0ID0gcGFyZW50Qm91bmRzLmRhdGEud2lkdGhMaW1pdCAvIE1hdGgubWluKGM0Qm91bmRhcnlJblJvdywgY3VycmVudEJvdW5kYXJpZXMubGVuZ3RoKTtcbiAgZm9yIChsZXQgW2ksIGN1cnJlbnRCb3VuZGFyeV0gb2YgY3VycmVudEJvdW5kYXJpZXMuZW50cmllcygpKSB7XG4gICAgbGV0IFkgPSAwO1xuICAgIGN1cnJlbnRCb3VuZGFyeS5pbWFnZSA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCwgWTogMCB9O1xuICAgIGlmIChjdXJyZW50Qm91bmRhcnkuc3ByaXRlKSB7XG4gICAgICBjdXJyZW50Qm91bmRhcnkuaW1hZ2Uud2lkdGggPSA0ODtcbiAgICAgIGN1cnJlbnRCb3VuZGFyeS5pbWFnZS5oZWlnaHQgPSA0ODtcbiAgICAgIGN1cnJlbnRCb3VuZGFyeS5pbWFnZS5ZID0gWTtcbiAgICAgIFkgPSBjdXJyZW50Qm91bmRhcnkuaW1hZ2UuWSArIGN1cnJlbnRCb3VuZGFyeS5pbWFnZS5oZWlnaHQ7XG4gICAgfVxuICAgIGxldCBjdXJyZW50Qm91bmRhcnlUZXh0V3JhcCA9IGN1cnJlbnRCb3VuZGFyeS53cmFwICYmIGNvbmYud3JhcDtcbiAgICBsZXQgY3VycmVudEJvdW5kYXJ5TGFiZWxDb25mID0gYm91bmRhcnlGb250KGNvbmYpO1xuICAgIGN1cnJlbnRCb3VuZGFyeUxhYmVsQ29uZi5mb250U2l6ZSA9IGN1cnJlbnRCb3VuZGFyeUxhYmVsQ29uZi5mb250U2l6ZSArIDI7XG4gICAgY3VycmVudEJvdW5kYXJ5TGFiZWxDb25mLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICBjYWxjQzRTaGFwZVRleHRXSChcbiAgICAgIFwibGFiZWxcIixcbiAgICAgIGN1cnJlbnRCb3VuZGFyeSxcbiAgICAgIGN1cnJlbnRCb3VuZGFyeVRleHRXcmFwLFxuICAgICAgY3VycmVudEJvdW5kYXJ5TGFiZWxDb25mLFxuICAgICAgY3VycmVudEJvdW5kcy5kYXRhLndpZHRoTGltaXRcbiAgICApO1xuICAgIGN1cnJlbnRCb3VuZGFyeVtcImxhYmVsXCJdLlkgPSBZICsgODtcbiAgICBZID0gY3VycmVudEJvdW5kYXJ5W1wibGFiZWxcIl0uWSArIGN1cnJlbnRCb3VuZGFyeVtcImxhYmVsXCJdLmhlaWdodDtcbiAgICBpZiAoY3VycmVudEJvdW5kYXJ5LnR5cGUgJiYgY3VycmVudEJvdW5kYXJ5LnR5cGUudGV4dCAhPT0gXCJcIikge1xuICAgICAgY3VycmVudEJvdW5kYXJ5LnR5cGUudGV4dCA9IFwiW1wiICsgY3VycmVudEJvdW5kYXJ5LnR5cGUudGV4dCArIFwiXVwiO1xuICAgICAgbGV0IGN1cnJlbnRCb3VuZGFyeVR5cGVDb25mID0gYm91bmRhcnlGb250KGNvbmYpO1xuICAgICAgY2FsY0M0U2hhcGVUZXh0V0goXG4gICAgICAgIFwidHlwZVwiLFxuICAgICAgICBjdXJyZW50Qm91bmRhcnksXG4gICAgICAgIGN1cnJlbnRCb3VuZGFyeVRleHRXcmFwLFxuICAgICAgICBjdXJyZW50Qm91bmRhcnlUeXBlQ29uZixcbiAgICAgICAgY3VycmVudEJvdW5kcy5kYXRhLndpZHRoTGltaXRcbiAgICAgICk7XG4gICAgICBjdXJyZW50Qm91bmRhcnlbXCJ0eXBlXCJdLlkgPSBZICsgNTtcbiAgICAgIFkgPSBjdXJyZW50Qm91bmRhcnlbXCJ0eXBlXCJdLlkgKyBjdXJyZW50Qm91bmRhcnlbXCJ0eXBlXCJdLmhlaWdodDtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRCb3VuZGFyeS5kZXNjciAmJiBjdXJyZW50Qm91bmRhcnkuZGVzY3IudGV4dCAhPT0gXCJcIikge1xuICAgICAgbGV0IGN1cnJlbnRCb3VuZGFyeURlc2NyQ29uZiA9IGJvdW5kYXJ5Rm9udChjb25mKTtcbiAgICAgIGN1cnJlbnRCb3VuZGFyeURlc2NyQ29uZi5mb250U2l6ZSA9IGN1cnJlbnRCb3VuZGFyeURlc2NyQ29uZi5mb250U2l6ZSAtIDI7XG4gICAgICBjYWxjQzRTaGFwZVRleHRXSChcbiAgICAgICAgXCJkZXNjclwiLFxuICAgICAgICBjdXJyZW50Qm91bmRhcnksXG4gICAgICAgIGN1cnJlbnRCb3VuZGFyeVRleHRXcmFwLFxuICAgICAgICBjdXJyZW50Qm91bmRhcnlEZXNjckNvbmYsXG4gICAgICAgIGN1cnJlbnRCb3VuZHMuZGF0YS53aWR0aExpbWl0XG4gICAgICApO1xuICAgICAgY3VycmVudEJvdW5kYXJ5W1wiZGVzY3JcIl0uWSA9IFkgKyAyMDtcbiAgICAgIFkgPSBjdXJyZW50Qm91bmRhcnlbXCJkZXNjclwiXS5ZICsgY3VycmVudEJvdW5kYXJ5W1wiZGVzY3JcIl0uaGVpZ2h0O1xuICAgIH1cbiAgICBpZiAoaSA9PSAwIHx8IGkgJSBjNEJvdW5kYXJ5SW5Sb3cgPT09IDApIHtcbiAgICAgIGxldCBfeCA9IHBhcmVudEJvdW5kcy5kYXRhLnN0YXJ0eCArIGNvbmYuZGlhZ3JhbU1hcmdpblg7XG4gICAgICBsZXQgX3kgPSBwYXJlbnRCb3VuZHMuZGF0YS5zdG9weSArIGNvbmYuZGlhZ3JhbU1hcmdpblkgKyBZO1xuICAgICAgY3VycmVudEJvdW5kcy5zZXREYXRhKF94LCBfeCwgX3ksIF95KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IF94ID0gY3VycmVudEJvdW5kcy5kYXRhLnN0b3B4ICE9PSBjdXJyZW50Qm91bmRzLmRhdGEuc3RhcnR4ID8gY3VycmVudEJvdW5kcy5kYXRhLnN0b3B4ICsgY29uZi5kaWFncmFtTWFyZ2luWCA6IGN1cnJlbnRCb3VuZHMuZGF0YS5zdGFydHg7XG4gICAgICBsZXQgX3kgPSBjdXJyZW50Qm91bmRzLmRhdGEuc3RhcnR5O1xuICAgICAgY3VycmVudEJvdW5kcy5zZXREYXRhKF94LCBfeCwgX3ksIF95KTtcbiAgICB9XG4gICAgY3VycmVudEJvdW5kcy5uYW1lID0gY3VycmVudEJvdW5kYXJ5LmFsaWFzO1xuICAgIGxldCBjdXJyZW50UGVyc29uT3JTeXN0ZW1BcnJheSA9IGRpYWdPYmouZGIuZ2V0QzRTaGFwZUFycmF5KGN1cnJlbnRCb3VuZGFyeS5hbGlhcyk7XG4gICAgbGV0IGN1cnJlbnRQZXJzb25PclN5c3RlbUtleXMgPSBkaWFnT2JqLmRiLmdldEM0U2hhcGVLZXlzKGN1cnJlbnRCb3VuZGFyeS5hbGlhcyk7XG4gICAgaWYgKGN1cnJlbnRQZXJzb25PclN5c3RlbUtleXMubGVuZ3RoID4gMCkge1xuICAgICAgZHJhd0M0U2hhcGVBcnJheShcbiAgICAgICAgY3VycmVudEJvdW5kcyxcbiAgICAgICAgZGlhZ3JhbTIsXG4gICAgICAgIGN1cnJlbnRQZXJzb25PclN5c3RlbUFycmF5LFxuICAgICAgICBjdXJyZW50UGVyc29uT3JTeXN0ZW1LZXlzXG4gICAgICApO1xuICAgIH1cbiAgICBwYXJlbnRCb3VuZGFyeUFsaWFzID0gY3VycmVudEJvdW5kYXJ5LmFsaWFzO1xuICAgIGxldCBuZXh0Q3VycmVudEJvdW5kYXJpZXMgPSBkaWFnT2JqLmRiLmdldEJvdW5kYXJ5cyhwYXJlbnRCb3VuZGFyeUFsaWFzKTtcbiAgICBpZiAobmV4dEN1cnJlbnRCb3VuZGFyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGRyYXdJbnNpZGVCb3VuZGFyeShcbiAgICAgICAgZGlhZ3JhbTIsXG4gICAgICAgIHBhcmVudEJvdW5kYXJ5QWxpYXMsXG4gICAgICAgIGN1cnJlbnRCb3VuZHMsXG4gICAgICAgIG5leHRDdXJyZW50Qm91bmRhcmllcyxcbiAgICAgICAgZGlhZ09ialxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRCb3VuZGFyeS5hbGlhcyAhPT0gXCJnbG9iYWxcIikge1xuICAgICAgZHJhd0JvdW5kYXJ5KGRpYWdyYW0yLCBjdXJyZW50Qm91bmRhcnksIGN1cnJlbnRCb3VuZHMpO1xuICAgIH1cbiAgICBwYXJlbnRCb3VuZHMuZGF0YS5zdG9weSA9IE1hdGgubWF4KFxuICAgICAgY3VycmVudEJvdW5kcy5kYXRhLnN0b3B5ICsgY29uZi5jNFNoYXBlTWFyZ2luLFxuICAgICAgcGFyZW50Qm91bmRzLmRhdGEuc3RvcHlcbiAgICApO1xuICAgIHBhcmVudEJvdW5kcy5kYXRhLnN0b3B4ID0gTWF0aC5tYXgoXG4gICAgICBjdXJyZW50Qm91bmRzLmRhdGEuc3RvcHggKyBjb25mLmM0U2hhcGVNYXJnaW4sXG4gICAgICBwYXJlbnRCb3VuZHMuZGF0YS5zdG9weFxuICAgICk7XG4gICAgZ2xvYmFsQm91bmRhcnlNYXhYID0gTWF0aC5tYXgoZ2xvYmFsQm91bmRhcnlNYXhYLCBwYXJlbnRCb3VuZHMuZGF0YS5zdG9weCk7XG4gICAgZ2xvYmFsQm91bmRhcnlNYXhZID0gTWF0aC5tYXgoZ2xvYmFsQm91bmRhcnlNYXhZLCBwYXJlbnRCb3VuZHMuZGF0YS5zdG9weSk7XG4gIH1cbn1cbmNvbnN0IGRyYXcgPSBmdW5jdGlvbihfdGV4dCwgaWQsIF92ZXJzaW9uLCBkaWFnT2JqKSB7XG4gIGNvbmYgPSBnZXRDb25maWcoKS5jNDtcbiAgY29uc3Qgc2VjdXJpdHlMZXZlbCA9IGdldENvbmZpZygpLnNlY3VyaXR5TGV2ZWw7XG4gIGxldCBzYW5kYm94RWxlbWVudDtcbiAgaWYgKHNlY3VyaXR5TGV2ZWwgPT09IFwic2FuZGJveFwiKSB7XG4gICAgc2FuZGJveEVsZW1lbnQgPSBzZWxlY3QoXCIjaVwiICsgaWQpO1xuICB9XG4gIGNvbnN0IHJvb3QgPSBzZWN1cml0eUxldmVsID09PSBcInNhbmRib3hcIiA/IHNlbGVjdChzYW5kYm94RWxlbWVudC5ub2RlcygpWzBdLmNvbnRlbnREb2N1bWVudC5ib2R5KSA6IHNlbGVjdChcImJvZHlcIik7XG4gIGxldCBkYjIgPSBkaWFnT2JqLmRiO1xuICBkaWFnT2JqLmRiLnNldFdyYXAoY29uZi53cmFwKTtcbiAgYzRTaGFwZUluUm93ID0gZGIyLmdldEM0U2hhcGVJblJvdygpO1xuICBjNEJvdW5kYXJ5SW5Sb3cgPSBkYjIuZ2V0QzRCb3VuZGFyeUluUm93KCk7XG4gIGxvZy5kZWJ1ZyhgQzoke0pTT04uc3RyaW5naWZ5KGNvbmYsIG51bGwsIDIpfWApO1xuICBjb25zdCBkaWFncmFtMiA9IHNlY3VyaXR5TGV2ZWwgPT09IFwic2FuZGJveFwiID8gcm9vdC5zZWxlY3QoYFtpZD1cIiR7aWR9XCJdYCkgOiBzZWxlY3QoYFtpZD1cIiR7aWR9XCJdYCk7XG4gIHN2Z0RyYXcuaW5zZXJ0Q29tcHV0ZXJJY29uKGRpYWdyYW0yKTtcbiAgc3ZnRHJhdy5pbnNlcnREYXRhYmFzZUljb24oZGlhZ3JhbTIpO1xuICBzdmdEcmF3Lmluc2VydENsb2NrSWNvbihkaWFncmFtMik7XG4gIGxldCBzY3JlZW5Cb3VuZHMgPSBuZXcgQm91bmRzKGRpYWdPYmopO1xuICBzY3JlZW5Cb3VuZHMuc2V0RGF0YShcbiAgICBjb25mLmRpYWdyYW1NYXJnaW5YLFxuICAgIGNvbmYuZGlhZ3JhbU1hcmdpblgsXG4gICAgY29uZi5kaWFncmFtTWFyZ2luWSxcbiAgICBjb25mLmRpYWdyYW1NYXJnaW5ZXG4gICk7XG4gIHNjcmVlbkJvdW5kcy5kYXRhLndpZHRoTGltaXQgPSBzY3JlZW4uYXZhaWxXaWR0aDtcbiAgZ2xvYmFsQm91bmRhcnlNYXhYID0gY29uZi5kaWFncmFtTWFyZ2luWDtcbiAgZ2xvYmFsQm91bmRhcnlNYXhZID0gY29uZi5kaWFncmFtTWFyZ2luWTtcbiAgY29uc3QgdGl0bGUyID0gZGlhZ09iai5kYi5nZXRUaXRsZSgpO1xuICBsZXQgY3VycmVudEJvdW5kYXJpZXMgPSBkaWFnT2JqLmRiLmdldEJvdW5kYXJ5cyhcIlwiKTtcbiAgZHJhd0luc2lkZUJvdW5kYXJ5KGRpYWdyYW0yLCBcIlwiLCBzY3JlZW5Cb3VuZHMsIGN1cnJlbnRCb3VuZGFyaWVzLCBkaWFnT2JqKTtcbiAgc3ZnRHJhdy5pbnNlcnRBcnJvd0hlYWQoZGlhZ3JhbTIpO1xuICBzdmdEcmF3Lmluc2VydEFycm93RW5kKGRpYWdyYW0yKTtcbiAgc3ZnRHJhdy5pbnNlcnRBcnJvd0Nyb3NzSGVhZChkaWFncmFtMik7XG4gIHN2Z0RyYXcuaW5zZXJ0QXJyb3dGaWxsZWRIZWFkKGRpYWdyYW0yKTtcbiAgZHJhd1JlbHMoZGlhZ3JhbTIsIGRpYWdPYmouZGIuZ2V0UmVscygpLCBkaWFnT2JqLmRiLmdldEM0U2hhcGUsIGRpYWdPYmopO1xuICBzY3JlZW5Cb3VuZHMuZGF0YS5zdG9weCA9IGdsb2JhbEJvdW5kYXJ5TWF4WDtcbiAgc2NyZWVuQm91bmRzLmRhdGEuc3RvcHkgPSBnbG9iYWxCb3VuZGFyeU1heFk7XG4gIGNvbnN0IGJveCA9IHNjcmVlbkJvdW5kcy5kYXRhO1xuICBsZXQgYm94SGVpZ2h0ID0gYm94LnN0b3B5IC0gYm94LnN0YXJ0eTtcbiAgbGV0IGhlaWdodCA9IGJveEhlaWdodCArIDIgKiBjb25mLmRpYWdyYW1NYXJnaW5ZO1xuICBsZXQgYm94V2lkdGggPSBib3guc3RvcHggLSBib3guc3RhcnR4O1xuICBjb25zdCB3aWR0aCA9IGJveFdpZHRoICsgMiAqIGNvbmYuZGlhZ3JhbU1hcmdpblg7XG4gIGlmICh0aXRsZTIpIHtcbiAgICBkaWFncmFtMi5hcHBlbmQoXCJ0ZXh0XCIpLnRleHQodGl0bGUyKS5hdHRyKFwieFwiLCAoYm94LnN0b3B4IC0gYm94LnN0YXJ0eCkgLyAyIC0gNCAqIGNvbmYuZGlhZ3JhbU1hcmdpblgpLmF0dHIoXCJ5XCIsIGJveC5zdGFydHkgKyBjb25mLmRpYWdyYW1NYXJnaW5ZKTtcbiAgfVxuICBjb25maWd1cmVTdmdTaXplKGRpYWdyYW0yLCBoZWlnaHQsIHdpZHRoLCBjb25mLnVzZU1heFdpZHRoKTtcbiAgY29uc3QgZXh0cmFWZXJ0Rm9yVGl0bGUgPSB0aXRsZTIgPyA2MCA6IDA7XG4gIGRpYWdyYW0yLmF0dHIoXG4gICAgXCJ2aWV3Qm94XCIsXG4gICAgYm94LnN0YXJ0eCAtIGNvbmYuZGlhZ3JhbU1hcmdpblggKyBcIiAtXCIgKyAoY29uZi5kaWFncmFtTWFyZ2luWSArIGV4dHJhVmVydEZvclRpdGxlKSArIFwiIFwiICsgd2lkdGggKyBcIiBcIiArIChoZWlnaHQgKyBleHRyYVZlcnRGb3JUaXRsZSlcbiAgKTtcbiAgbG9nLmRlYnVnKGBtb2RlbHM6YCwgYm94KTtcbn07XG5jb25zdCByZW5kZXJlciA9IHtcbiAgZHJhd1BlcnNvbk9yU3lzdGVtQXJyYXk6IGRyYXdDNFNoYXBlQXJyYXksXG4gIGRyYXdCb3VuZGFyeSxcbiAgc2V0Q29uZixcbiAgZHJhd1xufTtcbmNvbnN0IGdldFN0eWxlcyA9IChvcHRpb25zKSA9PiBgLnBlcnNvbiB7XG4gICAgc3Ryb2tlOiAke29wdGlvbnMucGVyc29uQm9yZGVyfTtcbiAgICBmaWxsOiAke29wdGlvbnMucGVyc29uQmtnfTtcbiAgfVxuYDtcbmNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcztcbmNvbnN0IGRpYWdyYW0gPSB7XG4gIHBhcnNlcjogcGFyc2VyJDEsXG4gIGRiLFxuICByZW5kZXJlcixcbiAgc3R5bGVzLFxuICBpbml0OiAoeyBjNCwgd3JhcCB9KSA9PiB7XG4gICAgcmVuZGVyZXIuc2V0Q29uZihjNCk7XG4gICAgZGIuc2V0V3JhcCh3cmFwKTtcbiAgfVxufTtcbmV4cG9ydCB7XG4gIGRpYWdyYW1cbn07XG4iXSwibmFtZXMiOlsic2FuaXRpemVUZXh0IiwiZ2V0Q29uZmlnIiwic2V0QWNjVGl0bGUiLCJnZXRBY2NUaXRsZSIsImdldEFjY0Rlc2NyaXB0aW9uIiwic2V0QWNjRGVzY3JpcHRpb24iLCJkcmF3UmVjdCQxIiwic2FuaXRpemVVcmwiLCJnZXROb3RlUmVjdCIsImNvbW1vbiIsImFzc2lnbldpdGhEZXB0aCIsIndyYXBMYWJlbCIsImNhbGN1bGF0ZVRleHRIZWlnaHQiLCJjYWxjdWxhdGVUZXh0V2lkdGgiLCJzZWxlY3QiLCJsb2ciLCJjb25maWd1cmVTdmdTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFZQSxJQUFJLE1BQU0sR0FBRyxXQUFXO0FBQ3hCLEVBQUUsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3ZELE1BQU0sQ0FBQztBQUNQLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxF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QUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLHFCQUFxQixFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLHFCQUFxQixFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsRUFBRSxzQkFBc0IsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRTtBQUMzckMsSUFBSSxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVB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QUFFLENBQUMsWUFBWSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakUsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdEMsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEMsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEMsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEMsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFD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VSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN0QixVQUFVLE1BQU07QUFDaEIsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzk1TyxJQUFJLGNBQWMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQ3RLLElBQUksVUFBVSxFQUFFLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDL0MsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDNUIsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLE9BQU8sTUFBTTtBQUNiLFFBQVEsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsUUFBUSxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUMxQixRQUFRLE1BQU0sS0FBSyxDQUFDO0FBQ3BCLE9BQU87QUFDUCxLQUFLO0FBQ0wsSUFBSSxLQUFLLEVBQUUsU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFO0FBQ2pDLE1BQU0sSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLEVBQUUsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEdBQUcsRUFBRSxFQUFFLFFBQVEsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDOUosTUFBTSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakQsTUFBTSxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QyxNQUFNLElBQUksV0FBVyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQ25DLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQzdCLFFBQVEsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUM5RCxVQUFVLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxTQUFTO0FBQ1QsT0FBTztBQUNQLE1BQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLE1BQU0sV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ3BDLE1BQU0sV0FBVyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25DLE1BQU0sSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLElBQUksV0FBVyxFQUFFO0FBQy9DLFFBQVEsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDM0IsT0FBTztBQUNQLE1BQU0sSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsTUFBTSxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQzNELE1BQU0sSUFBSSxPQUFPLFdBQVcsQ0FBQyxFQUFFLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtBQUMzRCxRQUFRLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFDcEQsT0FBTyxNQUFNO0FBQ2IsUUFBUSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDO0FBQ2pFLE9BQU87QUFDUCxNQUFNLFNBQVMsR0FBRyxHQUFHO0FBQ3JCLFFBQVEsSUFBSSxLQUFLLENBQUM7QUFDbEIsUUFBUSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFHLENBQUM7QUFDcEQsUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUN2QyxVQUFVLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtBQUN0QyxZQUFZLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDM0IsWUFBWSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2pDLFdBQVc7QUFDWCxVQUFVLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQztBQUNoRCxTQUFTO0FBQ1QsUUFBUSxPQUFPLEtBQUssQ0FBQztBQUNyQixPQUFPO0FBQ1AsTUFBTSxJQUFJLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztBQUMzRSxNQUFNLE9BQU8sSUFBSSxFQUFFO0FBQ25CLFFBQVEsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3hDLFVBQVUsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUMsU0FBUyxNQUFNO0FBQ2YsVUFBVSxJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksT0FBTyxNQUFNLElBQUksV0FBVyxFQUFFO0FBQy9ELFlBQVksTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQzNCLFdBQVc7QUFDWCxVQUFVLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hELFNBQVM7QUFDVCxRQUFRLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUMzRSxVQUFVLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUMxQixVQUFVLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDeEIsVUFBVSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDbEMsWUFBWSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRTtBQUNsRCxjQUFjLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDNUQsYUFBYTtBQUNiLFdBQVc7QUFDWCxVQUFVLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTtBQUNuQyxZQUFZLE1BQU0sR0FBRyxzQkFBc0IsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsR0FBRyxjQUFjLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDNUwsV0FBVyxNQUFNO0FBQ2pCLFlBQVksTUFBTSxHQUFHLHNCQUFzQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxlQUFlLElBQUksTUFBTSxJQUFJLEdBQUcsR0FBRyxjQUFjLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDcEssV0FBVztBQUNYLFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDbEMsWUFBWSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUs7QUFDOUIsWUFBWSxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNO0FBQ3BELFlBQVksSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRO0FBQ2pDLFlBQVksR0FBRyxFQUFFLEtBQUs7QUFDdEIsWUFBWSxRQUFRO0FBQ3BCLFdBQVcsQ0FBQyxDQUFDO0FBQ2IsU0FBUztBQUNULFFBQVEsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzdELFVBQVUsTUFBTSxJQUFJLEtBQUssQ0FBQyxtREFBbUQsR0FBRyxLQUFLLEdBQUcsV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQzlHLFNBQVM7QUFDVCxRQUFRLFFBQVEsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN6QixVQUFVLEtBQUssQ0FBQztBQUNoQixZQUFZLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0IsWUFBWSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2QyxZQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLFlBQVksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxZQUFZLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDMUIsWUFBWTtBQUNaLGNBQWMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDckMsY0FBYyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNyQyxjQUFjLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ3pDLGNBQWMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDcEMsYUFBYTtBQUNiLFlBQVksTUFBTTtBQUNsQixVQUFVLEtBQUssQ0FBQztBQUNoQixZQUFZLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xELFlBQVksS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNsRCxZQUFZLEtBQUssQ0FBQyxFQUFFLEdBQUc7QUFDdkIsY0FBYyxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtBQUN2RSxjQUFjLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQzVELGNBQWMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7QUFDM0UsY0FBYyxXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVztBQUNoRSxhQUFhLENBQUM7QUFDZCxZQUFZLElBQUksTUFBTSxFQUFFO0FBQ3hCLGNBQWMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUc7QUFDL0IsZ0JBQWdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDM0QsZ0JBQWdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDbEQsZUFBZSxDQUFDO0FBQ2hCLGFBQWE7QUFDYixZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7QUFDaEQsY0FBYyxNQUFNO0FBQ3BCLGNBQWMsTUFBTTtBQUNwQixjQUFjLFFBQVE7QUFDdEIsY0FBYyxXQUFXLENBQUMsRUFBRTtBQUM1QixjQUFjLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdkIsY0FBYyxNQUFNO0FBQ3BCLGNBQWMsTUFBTTtBQUNwQixhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDNUIsWUFBWSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFdBQVcsRUFBRTtBQUMxQyxjQUFjLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZCLGFBQWE7QUFDYixZQUFZLElBQUksR0FBRyxFQUFFO0FBQ3JCLGNBQWMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuRCxjQUFjLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNqRCxjQUFjLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNqRCxhQUFhO0FBQ2IsWUFBWSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RCxZQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLFlBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbEMsWUFBWSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvRSxZQUFZLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsWUFBWSxNQUFNO0FBQ2xCLFVBQVUsS0FBSyxDQUFDO0FBQ2hCLFlBQVksT0FBTyxJQUFJLENBQUM7QUFDeEIsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLEtBQUs7QUFDTCxHQUFHLENBQUM7QUFDSixFQUFFLElBQUksS0FBSyxHQUFHLFdBQVc7QUFDekIsSUFBSSxJQUFJLE1BQU0sR0FBRztBQUNqQixNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ1osTUFBTSxVQUFVLEVBQUUsU0FBUyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUNqRCxRQUFRLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7QUFDNUIsVUFBVSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9DLFNBQVMsTUFBTTtBQUNmLFVBQVUsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvQixTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsTUFBTSxRQUFRLEVBQUUsU0FBUyxLQUFLLEVBQUUsRUFBRSxFQUFFO0FBQ3BDLFFBQVEsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDdEMsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUM1QixRQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUN6RCxRQUFRLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDeEMsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDckQsUUFBUSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDMUMsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHO0FBQ3RCLFVBQVUsVUFBVSxFQUFFLENBQUM7QUFDdkIsVUFBVSxZQUFZLEVBQUUsQ0FBQztBQUN6QixVQUFVLFNBQVMsRUFBRSxDQUFDO0FBQ3RCLFVBQVUsV0FBVyxFQUFFLENBQUM7QUFDeEIsU0FBUyxDQUFDO0FBQ1YsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQ2pDLFVBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckMsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDeEIsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixPQUFPO0FBQ1A7QUFDQSxNQUFNLEtBQUssRUFBRSxXQUFXO0FBQ3hCLFFBQVEsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQyxRQUFRLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0FBQzFCLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7QUFDekIsUUFBUSxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUMzQixRQUFRLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNoRCxRQUFRLElBQUksS0FBSyxFQUFFO0FBQ25CLFVBQVUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzFCLFVBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNsQyxTQUFTLE1BQU07QUFDZixVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDcEMsU0FBUztBQUNULFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNqQyxVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDakMsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQyxRQUFRLE9BQU8sRUFBRSxDQUFDO0FBQ2xCLE9BQU87QUFDUDtBQUNBLE1BQU0sS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFO0FBQzFCLFFBQVEsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztBQUM1QixRQUFRLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDOUMsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3ZDLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDdEUsUUFBUSxJQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztBQUMzQixRQUFRLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pELFFBQVEsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakUsUUFBUSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2RSxRQUFRLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDOUIsVUFBVSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzVDLFNBQVM7QUFDVCxRQUFRLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2xDLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRztBQUN0QixVQUFVLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVU7QUFDNUMsVUFBVSxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO0FBQ3RDLFVBQVUsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWTtBQUNoRCxVQUFVLFdBQVcsRUFBRSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHO0FBQ3JNLFNBQVMsQ0FBQztBQUNWLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNqQyxVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQy9ELFNBQVM7QUFDVCxRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDekMsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixPQUFPO0FBQ1A7QUFDQSxNQUFNLElBQUksRUFBRSxXQUFXO0FBQ3ZCLFFBQVEsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDMUIsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixPQUFPO0FBQ1A7QUFDQSxNQUFNLE1BQU0sRUFBRSxXQUFXO0FBQ3pCLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRTtBQUMxQyxVQUFVLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ2pDLFNBQVMsTUFBTTtBQUNmLFVBQVUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsa0lBQWtJLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO0FBQzVPLFlBQVksSUFBSSxFQUFFLEVBQUU7QUFDcEIsWUFBWSxLQUFLLEVBQUUsSUFBSTtBQUN2QixZQUFZLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtBQUMvQixXQUFXLENBQUMsQ0FBQztBQUNiLFNBQVM7QUFDVCxRQUFRLE9BQU8sSUFBSSxDQUFDO0FBQ3BCLE9BQU87QUFDUDtBQUNBLE1BQU0sSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFO0FBQ3hCLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLE9BQU87QUFDUDtBQUNBLE1BQU0sU0FBUyxFQUFFLFdBQVc7QUFDNUIsUUFBUSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuRixRQUFRLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxLQUFLLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3JGLE9BQU87QUFDUDtBQUNBLE1BQU0sYUFBYSxFQUFFLFdBQVc7QUFDaEMsUUFBUSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQzlCLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtBQUM5QixVQUFVLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMxRCxTQUFTO0FBQ1QsUUFBUSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsT0FBTztBQUNQO0FBQ0EsTUFBTSxZQUFZLEVBQUUsV0FBVztBQUMvQixRQUFRLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNuQyxRQUFRLElBQUksRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELFFBQVEsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQzVELE9BQU87QUFDUDtBQUNBLE1BQU0sVUFBVSxFQUFFLFNBQVMsS0FBSyxFQUFFLFlBQVksRUFBRTtBQUNoRCxRQUFRLElBQUksS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUM7QUFDakMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFO0FBQzFDLFVBQVUsTUFBTSxHQUFHO0FBQ25CLFlBQVksUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQ25DLFlBQVksTUFBTSxFQUFFO0FBQ3BCLGNBQWMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtBQUNoRCxjQUFjLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztBQUN2QyxjQUFjLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVk7QUFDcEQsY0FBYyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXO0FBQ2xELGFBQWE7QUFDYixZQUFZLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtBQUMvQixZQUFZLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztBQUM3QixZQUFZLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztBQUNqQyxZQUFZLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztBQUNqQyxZQUFZLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtBQUMvQixZQUFZLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtBQUMvQixZQUFZLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztBQUM3QixZQUFZLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtBQUMvQixZQUFZLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtBQUN2QixZQUFZLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDeEQsWUFBWSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7QUFDM0IsV0FBVyxDQUFDO0FBQ1osVUFBVSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQ25DLFlBQVksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdELFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2xELFFBQVEsSUFBSSxLQUFLLEVBQUU7QUFDbkIsVUFBVSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDeEMsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRztBQUN0QixVQUFVLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7QUFDM0MsVUFBVSxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO0FBQ3RDLFVBQVUsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztBQUMvQyxVQUFVLFdBQVcsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07QUFDN0osU0FBUyxDQUFDO0FBQ1YsUUFBUSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQyxRQUFRLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9CLFFBQVEsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDN0IsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ3pDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNqQyxVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4RSxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUMzQixRQUFRLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQ2hDLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekQsUUFBUSxJQUFJLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQyxRQUFRLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoSSxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3RDLFVBQVUsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7QUFDNUIsU0FBUztBQUNULFFBQVEsSUFBSSxLQUFLLEVBQUU7QUFDbkIsVUFBVSxPQUFPLEtBQUssQ0FBQztBQUN2QixTQUFTLE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ3BDLFVBQVUsS0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUU7QUFDaEMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLFdBQVc7QUFDWCxVQUFVLE9BQU8sS0FBSyxDQUFDO0FBQ3ZCLFNBQVM7QUFDVCxRQUFRLE9BQU8sS0FBSyxDQUFDO0FBQ3JCLE9BQU87QUFDUDtBQUNBLE1BQU0sSUFBSSxFQUFFLFdBQVc7QUFDdkIsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDdkIsVUFBVSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDMUIsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDMUIsVUFBVSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUMzQixTQUFTO0FBQ1QsUUFBUSxJQUFJLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQztBQUMzQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3pCLFVBQVUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDM0IsVUFBVSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUMxQixTQUFTO0FBQ1QsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDekMsUUFBUSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMvQyxVQUFVLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUQsVUFBVSxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUM5RSxZQUFZLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDOUIsWUFBWSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLFlBQVksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRTtBQUM5QyxjQUFjLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzRCxjQUFjLElBQUksS0FBSyxLQUFLLEtBQUssRUFBRTtBQUNuQyxnQkFBZ0IsT0FBTyxLQUFLLENBQUM7QUFDN0IsZUFBZSxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUMxQyxnQkFBZ0IsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUM5QixnQkFBZ0IsU0FBUztBQUN6QixlQUFlLE1BQU07QUFDckIsZ0JBQWdCLE9BQU8sS0FBSyxDQUFDO0FBQzdCLGVBQWU7QUFDZixhQUFhLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQzNDLGNBQWMsTUFBTTtBQUNwQixhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVCxRQUFRLElBQUksS0FBSyxFQUFFO0FBQ25CLFVBQVUsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELFVBQVUsSUFBSSxLQUFLLEtBQUssS0FBSyxFQUFFO0FBQy9CLFlBQVksT0FBTyxLQUFLLENBQUM7QUFDekIsV0FBVztBQUNYLFVBQVUsT0FBTyxLQUFLLENBQUM7QUFDdkIsU0FBUztBQUNULFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtBQUNoQyxVQUFVLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUMxQixTQUFTLE1BQU07QUFDZixVQUFVLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLHdCQUF3QixHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtBQUNsSSxZQUFZLElBQUksRUFBRSxFQUFFO0FBQ3BCLFlBQVksS0FBSyxFQUFFLElBQUk7QUFDdkIsWUFBWSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7QUFDL0IsV0FBVyxDQUFDLENBQUM7QUFDYixTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsTUFBTSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDMUIsUUFBUSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDNUIsUUFBUSxJQUFJLENBQUMsRUFBRTtBQUNmLFVBQVUsT0FBTyxDQUFDLENBQUM7QUFDbkIsU0FBUyxNQUFNO0FBQ2YsVUFBVSxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUM1QixTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsTUFBTSxLQUFLLEVBQUUsU0FBUyxLQUFLLENBQUMsU0FBUyxFQUFFO0FBQ3ZDLFFBQVEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsT0FBTztBQUNQO0FBQ0EsTUFBTSxRQUFRLEVBQUUsU0FBUyxRQUFRLEdBQUc7QUFDcEMsUUFBUSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDL0MsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDbkIsVUFBVSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDM0MsU0FBUyxNQUFNO0FBQ2YsVUFBVSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEMsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE1BQU0sYUFBYSxFQUFFLFNBQVMsYUFBYSxHQUFHO0FBQzlDLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQy9GLFVBQVUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDNUYsU0FBUyxNQUFNO0FBQ2YsVUFBVSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ2xELFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxNQUFNLFFBQVEsRUFBRSxTQUFTLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDckMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzlELFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3BCLFVBQVUsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLFNBQVMsTUFBTTtBQUNmLFVBQVUsT0FBTyxTQUFTLENBQUM7QUFDM0IsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE1BQU0sU0FBUyxFQUFFLFNBQVMsU0FBUyxDQUFDLFNBQVMsRUFBRTtBQUMvQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUIsT0FBTztBQUNQO0FBQ0EsTUFBTSxjQUFjLEVBQUUsU0FBUyxjQUFjLEdBQUc7QUFDaEQsUUFBUSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO0FBQzFDLE9BQU87QUFDUCxNQUFNLE9BQU8sRUFBRSxFQUFFO0FBQ2pCLE1BQU0sYUFBYSxFQUFFLFNBQVMsU0FBUyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxFQUFFO0FBQ3RGLFFBQVEsUUFBUSx5QkFBeUI7QUFDekMsVUFBVSxLQUFLLENBQUM7QUFDaEIsWUFBWSxPQUFPLENBQUMsQ0FBQztBQUNyQixVQUFVLEtBQUssQ0FBQztBQUNoQixZQUFZLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLFVBQVUsS0FBSyxDQUFDO0FBQ2hCLFlBQVksT0FBTyxDQUFDLENBQUM7QUFDckIsVUFBVSxLQUFLLENBQUM7QUFDaEIsWUFBWSxPQUFPLENBQUMsQ0FBQztBQUNyQixVQUFVLEtBQUssQ0FBQztBQUNoQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxDQUFDO0FBQ2hCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLENBQUM7QUFDaEIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLENBQUM7QUFDaEIsWUFBWSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDNUIsWUFBWSxPQUFPLGlCQUFpQixDQUFDO0FBQ3JDLFVBQVUsS0FBSyxDQUFDO0FBQ2hCLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwQyxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxDQUFDO0FBQ2hCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksT0FBTyxpQkFBaUIsQ0FBQztBQUNyQyxVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUM5QyxZQUFZLE1BQU07QUFDbEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDNUIsWUFBWSxNQUFNO0FBQ2xCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTywyQkFBMkIsQ0FBQztBQUMvQyxVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE1BQU07QUFDbEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxDQUFDLENBQUM7QUFDZCxZQUFZLE1BQU07QUFDbEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE1BQU07QUFDbEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNyQyxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3hDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3JDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3ZDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25DLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDOUMsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMxQyxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQzlDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDeEMsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMxQyxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN2QyxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwQyxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzdDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDOUMsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzQyxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN4QyxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzFDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3ZDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8s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LENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLGVBQWUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsc0JBQXNCLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLHFCQUFxQixFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsZUFBZSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsb0JBQW9CLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsZUFBZSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLHFCQUFxQixFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxlQUFlLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxF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RyxNQUFNO0FBQ1QsSUFBSSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUNuQyxNQUFNLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsRCxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUNqQyxLQUFLLE1BQU07QUFDWCxNQUFNLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDbEMsS0FBSztBQUNMLEdBQUc7QUFDSCxFQUFFLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7QUFDMUMsSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQzdCLEdBQUcsTUFBTTtBQUNULElBQUksSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7QUFDbkMsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEQsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDakMsS0FBSyxNQUFNO0FBQ1gsTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ2xDLEtBQUs7QUFDTCxHQUFHO0FBQ0gsRUFBRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtBQUNsQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRCxJQUFJLEdBQUcsQ0FBQyxH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QUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDO0FBQ3hFLEVBQUUsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUU7QUFDbEMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ25CLEdBQUcsTUFBTTtBQUNULElBQUksUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDM0IsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlCLEdBQUc7QUFDSCxFQUFFLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7QUFDMUMsSUFBSSxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQ2xDLEdBQUcsTUFBTTtBQUNULElBQUksUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUNyQyxHQUFHO0FBQ0gsRUFBRSxJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQ3hDLElBQUksUUFBUSxDQUFDLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztBQUNyQyxHQUFHLE1BQU07QUFDVCxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO0FBQ2xDLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3RDLEtBQUssTUFBTTtBQUNYLE1BQU0sUUFBUSxDQUFDLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUNyQyxLQUFLO0FB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LEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxTyxDQUFDLENBQUM7QUFDRixNQUFNLG9CQUFvQixHQUFHLFNBQVMsSUFBSSxFQUFFO0FBQzVDLEVBQUUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQyxFQUFFLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFDckssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxF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
