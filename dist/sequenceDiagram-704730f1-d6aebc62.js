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
  }, $V0 = [1, 2], $V1 = [1, 3], $V2 = [1, 4], $V3 = [2, 4], $V4 = [1, 9], $V5 = [1, 11], $V6 = [1, 13], $V7 = [1, 14], $V8 = [1, 16], $V9 = [1, 17], $Va = [1, 18], $Vb = [1, 24], $Vc = [1, 25], $Vd = [1, 26], $Ve = [1, 27], $Vf = [1, 28], $Vg = [1, 29], $Vh = [1, 30], $Vi = [1, 31], $Vj = [1, 32], $Vk = [1, 33], $Vl = [1, 34], $Vm = [1, 35], $Vn = [1, 36], $Vo = [1, 37], $Vp = [1, 38], $Vq = [1, 39], $Vr = [1, 41], $Vs = [1, 42], $Vt = [1, 43], $Vu = [1, 44], $Vv = [1, 45], $Vw = [1, 46], $Vx = [1, 4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 47, 48, 49, 50, 52, 53, 54, 59, 60, 61, 62, 70], $Vy = [4, 5, 16, 50, 52, 53], $Vz = [4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 50, 52, 53, 54, 59, 60, 61, 62, 70], $VA = [4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 49, 50, 52, 53, 54, 59, 60, 61, 62, 70], $VB = [4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 48, 50, 52, 53, 54, 59, 60, 61, 62, 70], $VC = [4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 47, 50, 52, 53, 54, 59, 60, 61, 62, 70], $VD = [68, 69, 70], $VE = [1, 120];
  var parser2 = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "start": 3, "SPACE": 4, "NEWLINE": 5, "SD": 6, "document": 7, "line": 8, "statement": 9, "box_section": 10, "box_line": 11, "participant_statement": 12, "create": 13, "box": 14, "restOfLine": 15, "end": 16, "signal": 17, "autonumber": 18, "NUM": 19, "off": 20, "activate": 21, "actor": 22, "deactivate": 23, "note_statement": 24, "links_statement": 25, "link_statement": 26, "properties_statement": 27, "details_statement": 28, "title": 29, "legacy_title": 30, "acc_title": 31, "acc_title_value": 32, "acc_descr": 33, "acc_descr_value": 34, "acc_descr_multiline_value": 35, "loop": 36, "rect": 37, "opt": 38, "alt": 39, "else_sections": 40, "par": 41, "par_sections": 42, "par_over": 43, "critical": 44, "option_sections": 45, "break": 46, "option": 47, "and": 48, "else": 49, "participant": 50, "AS": 51, "participant_actor": 52, "destroy": 53, "note": 54, "placement": 55, "text2": 56, "over": 57, "actor_pair": 58, "links": 59, "link": 60, "properties": 61, "details": 62, "spaceList": 63, ",": 64, "left_of": 65, "right_of": 66, "signaltype": 67, "+": 68, "-": 69, "ACTOR": 70, "SOLID_OPEN_ARROW": 71, "DOTTED_OPEN_ARROW": 72, "SOLID_ARROW": 73, "DOTTED_ARROW": 74, "SOLID_CROSS": 75, "DOTTED_CROSS": 76, "SOLID_POINT": 77, "DOTTED_POINT": 78, "TXT": 79, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 4: "SPACE", 5: "NEWLINE", 6: "SD", 13: "create", 14: "box", 15: "restOfLine", 16: "end", 18: "autonumber", 19: "NUM", 20: "off", 21: "activate", 23: "deactivate", 29: "title", 30: "legacy_title", 31: "acc_title", 32: "acc_title_value", 33: "acc_descr", 34: "acc_descr_value", 35: "acc_descr_multiline_value", 36: "loop", 37: "rect", 38: "opt", 39: "alt", 41: "par", 43: "par_over", 44: "critical", 46: "break", 47: "option", 48: "and", 49: "else", 50: "participant", 51: "AS", 52: "participant_actor", 53: "destroy", 54: "note", 57: "over", 59: "links", 60: "link", 61: "properties", 62: "details", 64: ",", 65: "left_of", 66: "right_of", 68: "+", 69: "-", 70: "ACTOR", 71: "SOLID_OPEN_ARROW", 72: "DOTTED_OPEN_ARROW", 73: "SOLID_ARROW", 74: "DOTTED_ARROW", 75: "SOLID_CROSS", 76: "DOTTED_CROSS", 77: "SOLID_POINT", 78: "DOTTED_POINT", 79: "TXT" },
    productions_: [0, [3, 2], [3, 2], [3, 2], [7, 0], [7, 2], [8, 2], [8, 1], [8, 1], [10, 0], [10, 2], [11, 2], [11, 1], [11, 1], [9, 1], [9, 2], [9, 4], [9, 2], [9, 4], [9, 3], [9, 3], [9, 2], [9, 3], [9, 3], [9, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [45, 1], [45, 4], [42, 1], [42, 4], [40, 1], [40, 4], [12, 5], [12, 3], [12, 5], [12, 3], [12, 3], [24, 4], [24, 4], [25, 3], [26, 3], [27, 3], [28, 3], [63, 2], [63, 1], [58, 3], [58, 1], [55, 1], [55, 1], [17, 5], [17, 5], [17, 4], [22, 1], [67, 1], [67, 1], [67, 1], [67, 1], [67, 1], [67, 1], [67, 1], [67, 1], [56, 1]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 3:
          yy.apply($$[$0]);
          return $$[$0];
        case 4:
        case 9:
          this.$ = [];
          break;
        case 5:
        case 10:
          $$[$0 - 1].push($$[$0]);
          this.$ = $$[$0 - 1];
          break;
        case 6:
        case 7:
        case 11:
        case 12:
          this.$ = $$[$0];
          break;
        case 8:
        case 13:
          this.$ = [];
          break;
        case 15:
          $$[$0].type = "createParticipant";
          this.$ = $$[$0];
          break;
        case 16:
          $$[$0 - 1].unshift({ type: "boxStart", boxData: yy.parseBoxData($$[$0 - 2]) });
          $$[$0 - 1].push({ type: "boxEnd", boxText: $$[$0 - 2] });
          this.$ = $$[$0 - 1];
          break;
        case 18:
          this.$ = { type: "sequenceIndex", sequenceIndex: Number($$[$0 - 2]), sequenceIndexStep: Number($$[$0 - 1]), sequenceVisible: true, signalType: yy.LINETYPE.AUTONUMBER };
          break;
        case 19:
          this.$ = { type: "sequenceIndex", sequenceIndex: Number($$[$0 - 1]), sequenceIndexStep: 1, sequenceVisible: true, signalType: yy.LINETYPE.AUTONUMBER };
          break;
        case 20:
          this.$ = { type: "sequenceIndex", sequenceVisible: false, signalType: yy.LINETYPE.AUTONUMBER };
          break;
        case 21:
          this.$ = { type: "sequenceIndex", sequenceVisible: true, signalType: yy.LINETYPE.AUTONUMBER };
          break;
        case 22:
          this.$ = { type: "activeStart", signalType: yy.LINETYPE.ACTIVE_START, actor: $$[$0 - 1] };
          break;
        case 23:
          this.$ = { type: "activeEnd", signalType: yy.LINETYPE.ACTIVE_END, actor: $$[$0 - 1] };
          break;
        case 29:
          yy.setDiagramTitle($$[$0].substring(6));
          this.$ = $$[$0].substring(6);
          break;
        case 30:
          yy.setDiagramTitle($$[$0].substring(7));
          this.$ = $$[$0].substring(7);
          break;
        case 31:
          this.$ = $$[$0].trim();
          yy.setAccTitle(this.$);
          break;
        case 32:
        case 33:
          this.$ = $$[$0].trim();
          yy.setAccDescription(this.$);
          break;
        case 34:
          $$[$0 - 1].unshift({ type: "loopStart", loopText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.LOOP_START });
          $$[$0 - 1].push({ type: "loopEnd", loopText: $$[$0 - 2], signalType: yy.LINETYPE.LOOP_END });
          this.$ = $$[$0 - 1];
          break;
        case 35:
          $$[$0 - 1].unshift({ type: "rectStart", color: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.RECT_START });
          $$[$0 - 1].push({ type: "rectEnd", color: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.RECT_END });
          this.$ = $$[$0 - 1];
          break;
        case 36:
          $$[$0 - 1].unshift({ type: "optStart", optText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.OPT_START });
          $$[$0 - 1].push({ type: "optEnd", optText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.OPT_END });
          this.$ = $$[$0 - 1];
          break;
        case 37:
          $$[$0 - 1].unshift({ type: "altStart", altText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.ALT_START });
          $$[$0 - 1].push({ type: "altEnd", signalType: yy.LINETYPE.ALT_END });
          this.$ = $$[$0 - 1];
          break;
        case 38:
          $$[$0 - 1].unshift({ type: "parStart", parText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.PAR_START });
          $$[$0 - 1].push({ type: "parEnd", signalType: yy.LINETYPE.PAR_END });
          this.$ = $$[$0 - 1];
          break;
        case 39:
          $$[$0 - 1].unshift({ type: "parStart", parText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.PAR_OVER_START });
          $$[$0 - 1].push({ type: "parEnd", signalType: yy.LINETYPE.PAR_END });
          this.$ = $$[$0 - 1];
          break;
        case 40:
          $$[$0 - 1].unshift({ type: "criticalStart", criticalText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.CRITICAL_START });
          $$[$0 - 1].push({ type: "criticalEnd", signalType: yy.LINETYPE.CRITICAL_END });
          this.$ = $$[$0 - 1];
          break;
        case 41:
          $$[$0 - 1].unshift({ type: "breakStart", breakText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.BREAK_START });
          $$[$0 - 1].push({ type: "breakEnd", optText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.BREAK_END });
          this.$ = $$[$0 - 1];
          break;
        case 43:
          this.$ = $$[$0 - 3].concat([{ type: "option", optionText: yy.parseMessage($$[$0 - 1]), signalType: yy.LINETYPE.CRITICAL_OPTION }, $$[$0]]);
          break;
        case 45:
          this.$ = $$[$0 - 3].concat([{ type: "and", parText: yy.parseMessage($$[$0 - 1]), signalType: yy.LINETYPE.PAR_AND }, $$[$0]]);
          break;
        case 47:
          this.$ = $$[$0 - 3].concat([{ type: "else", altText: yy.parseMessage($$[$0 - 1]), signalType: yy.LINETYPE.ALT_ELSE }, $$[$0]]);
          break;
        case 48:
          $$[$0 - 3].draw = "participant";
          $$[$0 - 3].type = "addParticipant";
          $$[$0 - 3].description = yy.parseMessage($$[$0 - 1]);
          this.$ = $$[$0 - 3];
          break;
        case 49:
          $$[$0 - 1].draw = "participant";
          $$[$0 - 1].type = "addParticipant";
          this.$ = $$[$0 - 1];
          break;
        case 50:
          $$[$0 - 3].draw = "actor";
          $$[$0 - 3].type = "addParticipant";
          $$[$0 - 3].description = yy.parseMessage($$[$0 - 1]);
          this.$ = $$[$0 - 3];
          break;
        case 51:
          $$[$0 - 1].draw = "actor";
          $$[$0 - 1].type = "addParticipant";
          this.$ = $$[$0 - 1];
          break;
        case 52:
          $$[$0 - 1].type = "destroyParticipant";
          this.$ = $$[$0 - 1];
          break;
        case 53:
          this.$ = [$$[$0 - 1], { type: "addNote", placement: $$[$0 - 2], actor: $$[$0 - 1].actor, text: $$[$0] }];
          break;
        case 54:
          $$[$0 - 2] = [].concat($$[$0 - 1], $$[$0 - 1]).slice(0, 2);
          $$[$0 - 2][0] = $$[$0 - 2][0].actor;
          $$[$0 - 2][1] = $$[$0 - 2][1].actor;
          this.$ = [$$[$0 - 1], { type: "addNote", placement: yy.PLACEMENT.OVER, actor: $$[$0 - 2].slice(0, 2), text: $$[$0] }];
          break;
        case 55:
          this.$ = [$$[$0 - 1], { type: "addLinks", actor: $$[$0 - 1].actor, text: $$[$0] }];
          break;
        case 56:
          this.$ = [$$[$0 - 1], { type: "addALink", actor: $$[$0 - 1].actor, text: $$[$0] }];
          break;
        case 57:
          this.$ = [$$[$0 - 1], { type: "addProperties", actor: $$[$0 - 1].actor, text: $$[$0] }];
          break;
        case 58:
          this.$ = [$$[$0 - 1], { type: "addDetails", actor: $$[$0 - 1].actor, text: $$[$0] }];
          break;
        case 61:
          this.$ = [$$[$0 - 2], $$[$0]];
          break;
        case 62:
          this.$ = $$[$0];
          break;
        case 63:
          this.$ = yy.PLACEMENT.LEFTOF;
          break;
        case 64:
          this.$ = yy.PLACEMENT.RIGHTOF;
          break;
        case 65:
          this.$ = [
            $$[$0 - 4],
            $$[$0 - 1],
            { type: "addMessage", from: $$[$0 - 4].actor, to: $$[$0 - 1].actor, signalType: $$[$0 - 3], msg: $$[$0], activate: true },
            { type: "activeStart", signalType: yy.LINETYPE.ACTIVE_START, actor: $$[$0 - 1] }
          ];
          break;
        case 66:
          this.$ = [
            $$[$0 - 4],
            $$[$0 - 1],
            { type: "addMessage", from: $$[$0 - 4].actor, to: $$[$0 - 1].actor, signalType: $$[$0 - 3], msg: $$[$0] },
            { type: "activeEnd", signalType: yy.LINETYPE.ACTIVE_END, actor: $$[$0 - 4] }
          ];
          break;
        case 67:
          this.$ = [$$[$0 - 3], $$[$0 - 1], { type: "addMessage", from: $$[$0 - 3].actor, to: $$[$0 - 1].actor, signalType: $$[$0 - 2], msg: $$[$0] }];
          break;
        case 68:
          this.$ = { type: "addParticipant", actor: $$[$0] };
          break;
        case 69:
          this.$ = yy.LINETYPE.SOLID_OPEN;
          break;
        case 70:
          this.$ = yy.LINETYPE.DOTTED_OPEN;
          break;
        case 71:
          this.$ = yy.LINETYPE.SOLID;
          break;
        case 72:
          this.$ = yy.LINETYPE.DOTTED;
          break;
        case 73:
          this.$ = yy.LINETYPE.SOLID_CROSS;
          break;
        case 74:
          this.$ = yy.LINETYPE.DOTTED_CROSS;
          break;
        case 75:
          this.$ = yy.LINETYPE.SOLID_POINT;
          break;
        case 76:
          this.$ = yy.LINETYPE.DOTTED_POINT;
          break;
        case 77:
          this.$ = yy.parseMessage($$[$0].trim().substring(1));
          break;
      }
    },
    table: [{ 3: 1, 4: $V0, 5: $V1, 6: $V2 }, { 1: [3] }, { 3: 5, 4: $V0, 5: $V1, 6: $V2 }, { 3: 6, 4: $V0, 5: $V1, 6: $V2 }, o([1, 4, 5, 13, 14, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 50, 52, 53, 54, 59, 60, 61, 62, 70], $V3, { 7: 7 }), { 1: [2, 1] }, { 1: [2, 2] }, { 1: [2, 3], 4: $V4, 5: $V5, 8: 8, 9: 10, 12: 12, 13: $V6, 14: $V7, 17: 15, 18: $V8, 21: $V9, 22: 40, 23: $Va, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: $Vb, 30: $Vc, 31: $Vd, 33: $Ve, 35: $Vf, 36: $Vg, 37: $Vh, 38: $Vi, 39: $Vj, 41: $Vk, 43: $Vl, 44: $Vm, 46: $Vn, 50: $Vo, 52: $Vp, 53: $Vq, 54: $Vr, 59: $Vs, 60: $Vt, 61: $Vu, 62: $Vv, 70: $Vw }, o($Vx, [2, 5]), { 9: 47, 12: 12, 13: $V6, 14: $V7, 17: 15, 18: $V8, 21: $V9, 22: 40, 23: $Va, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: $Vb, 30: $Vc, 31: $Vd, 33: $Ve, 35: $Vf, 36: $Vg, 37: $Vh, 38: $Vi, 39: $Vj, 41: $Vk, 43: $Vl, 44: $Vm, 46: $Vn, 50: $Vo, 52: $Vp, 53: $Vq, 54: $Vr, 59: $Vs, 60: $Vt, 61: $Vu, 62: $Vv, 70: $Vw }, o($Vx, [2, 7]), o($Vx, [2, 8]), o($Vx, [2, 14]), { 12: 48, 50: $Vo, 52: $Vp, 53: $Vq }, { 15: [1, 49] }, { 5: [1, 50] }, { 5: [1, 53], 19: [1, 51], 20: [1, 52] }, { 22: 54, 70: $Vw }, { 22: 55, 70: $Vw }, { 5: [1, 56] }, { 5: [1, 57] }, { 5: [1, 58] }, { 5: [1, 59] }, { 5: [1, 60] }, o($Vx, [2, 29]), o($Vx, [2, 30]), { 32: [1, 61] }, { 34: [1, 62] }, o($Vx, [2, 33]), { 15: [1, 63] }, { 15: [1, 64] }, { 15: [1, 65] }, { 15: [1, 66] }, { 15: [1, 67] }, { 15: [1, 68] }, { 15: [1, 69] }, { 15: [1, 70] }, { 22: 71, 70: $Vw }, { 22: 72, 70: $Vw }, { 22: 73, 70: $Vw }, { 67: 74, 71: [1, 75], 72: [1, 76], 73: [1, 77], 74: [1, 78], 75: [1, 79], 76: [1, 80], 77: [1, 81], 78: [1, 82] }, { 55: 83, 57: [1, 84], 65: [1, 85], 66: [1, 86] }, { 22: 87, 70: $Vw }, { 22: 88, 70: $Vw }, { 22: 89, 70: $Vw }, { 22: 90, 70: $Vw }, o([5, 51, 64, 71, 72, 73, 74, 75, 76, 77, 78, 79], [2, 68]), o($Vx, [2, 6]), o($Vx, [2, 15]), o($Vy, [2, 9], { 10: 91 }), o($Vx, [2, 17]), { 5: [1, 93], 19: [1, 92] }, { 5: [1, 94] }, o($Vx, [2, 21]), { 5: [1, 95] }, { 5: [1, 96] }, o($Vx, [2, 24]), o($Vx, [2, 25]), o($Vx, [2, 26]), o($Vx, [2, 27]), o($Vx, [2, 28]), o($Vx, [2, 31]), o($Vx, [2, 32]), o($Vz, $V3, { 7: 97 }), o($Vz, $V3, { 7: 98 }), o($Vz, $V3, { 7: 99 }), o($VA, $V3, { 40: 100, 7: 101 }), o($VB, $V3, { 42: 102, 7: 103 }), o($VB, $V3, { 7: 103, 42: 104 }), o($VC, $V3, { 45: 105, 7: 106 }), o($Vz, $V3, { 7: 107 }), { 5: [1, 109], 51: [1, 108] }, { 5: [1, 111], 51: [1, 110] }, { 5: [1, 112] }, { 22: 115, 68: [1, 113], 69: [1, 114], 70: $Vw }, o($VD, [2, 69]), o($VD, [2, 70]), o($VD, [2, 71]), o($VD, [2, 72]), o($VD, [2, 73]), o($VD, [2, 74]), o($VD, [2, 75]), o($VD, [2, 76]), { 22: 116, 70: $Vw }, { 22: 118, 58: 117, 70: $Vw }, { 70: [2, 63] }, { 70: [2, 64] }, { 56: 119, 79: $VE }, { 56: 121, 79: $VE }, { 56: 122, 79: $VE }, { 56: 123, 79: $VE }, { 4: [1, 126], 5: [1, 128], 11: 125, 12: 127, 16: [1, 124], 50: $Vo, 52: $Vp, 53: $Vq }, { 5: [1, 129] }, o($Vx, [2, 19]), o($Vx, [2, 20]), o($Vx, [2, 22]), o($Vx, [2, 23]), { 4: $V4, 5: $V5, 8: 8, 9: 10, 12: 12, 13: $V6, 14: $V7, 16: [1, 130], 17: 15, 18: $V8, 21: $V9, 22: 40, 23: $Va, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: $Vb, 30: $Vc, 31: $Vd, 33: $Ve, 35: $Vf, 36: $Vg, 37: $Vh, 38: $Vi, 39: $Vj, 41: $Vk, 43: $Vl, 44: $Vm, 46: $Vn, 50: $Vo, 52: $Vp, 53: $Vq, 54: $Vr, 59: $Vs, 60: $Vt, 61: $Vu, 62: $Vv, 70: $Vw }, { 4: $V4, 5: $V5, 8: 8, 9: 10, 12: 12, 13: $V6, 14: $V7, 16: [1, 131], 17: 15, 18: $V8, 21: $V9, 22: 40, 23: $Va, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: $Vb, 30: $Vc, 31: $Vd, 33: $Ve, 35: $Vf, 36: $Vg, 37: $Vh, 38: $Vi, 39: $Vj, 41: $Vk, 43: $Vl, 44: $Vm, 46: $Vn, 50: $Vo, 52: $Vp, 53: $Vq, 54: $Vr, 59: $Vs, 60: $Vt, 61: $Vu, 62: $Vv, 70: $Vw }, { 4: $V4, 5: $V5, 8: 8, 9: 10, 12: 12, 13: $V6, 14: $V7, 16: [1, 132], 17: 15, 18: $V8, 21: $V9, 22: 40, 23: $Va, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: $Vb, 30: $Vc, 31: $Vd, 33: $Ve, 35: $Vf, 36: $Vg, 37: $Vh, 38: $Vi, 39: $Vj, 41: $Vk, 43: $Vl, 44: $Vm, 46: $Vn, 50: $Vo, 52: $Vp, 53: $Vq, 54: $Vr, 59: $Vs, 60: $Vt, 61: $Vu, 62: $Vv, 70: $Vw }, { 16: [1, 133] }, { 4: $V4, 5: $V5, 8: 8, 9: 10, 12: 12, 13: $V6, 14: $V7, 16: [2, 46], 17: 15, 18: $V8, 21: $V9, 22: 40, 23: $Va, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: $Vb, 30: $Vc, 31: $Vd, 33: $Ve, 35: $Vf, 36: $Vg, 37: $Vh, 38: $Vi, 39: $Vj, 41: $Vk, 43: $Vl, 44: $Vm, 46: $Vn, 49: [1, 134], 50: $Vo, 52: $Vp, 53: $Vq, 54: $Vr, 59: $Vs, 60: $Vt, 61: $Vu, 62: $Vv, 70: $Vw }, { 16: [1, 135] }, { 4: $V4, 5: $V5, 8: 8, 9: 10, 12: 12, 13: $V6, 14: $V7, 16: [2, 44], 17: 15, 18: $V8, 21: $V9, 22: 40, 23: $Va, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: $Vb, 30: $Vc, 31: $Vd, 33: $Ve, 35: $Vf, 36: $Vg, 37: $Vh, 38: $Vi, 39: $Vj, 41: $Vk, 43: $Vl, 44: $Vm, 46: $Vn, 48: [1, 136], 50: $Vo, 52: $Vp, 53: $Vq, 54: $Vr, 59: $Vs, 60: $Vt, 61: $Vu, 62: $Vv, 70: $Vw }, { 16: [1, 137] }, { 16: [1, 138] }, { 4: $V4, 5: $V5, 8: 8, 9: 10, 12: 12, 13: $V6, 14: $V7, 16: [2, 42], 17: 15, 18: $V8, 21: $V9, 22: 40, 23: $Va, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: $Vb, 30: $Vc, 31: $Vd, 33: $Ve, 35: $Vf, 36: $Vg, 37: $Vh, 38: $Vi, 39: $Vj, 41: $Vk, 43: $Vl, 44: $Vm, 46: $Vn, 47: [1, 139], 50: $Vo, 52: $Vp, 53: $Vq, 54: $Vr, 59: $Vs, 60: $Vt, 61: $Vu, 62: $Vv, 70: $Vw }, { 4: $V4, 5: $V5, 8: 8, 9: 10, 12: 12, 13: $V6, 14: $V7, 16: [1, 140], 17: 15, 18: $V8, 21: $V9, 22: 40, 23: $Va, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: $Vb, 30: $Vc, 31: $Vd, 33: $Ve, 35: $Vf, 36: $Vg, 37: $Vh, 38: $Vi, 39: $Vj, 41: $Vk, 43: $Vl, 44: $Vm, 46: $Vn, 50: $Vo, 52: $Vp, 53: $Vq, 54: $Vr, 59: $Vs, 60: $Vt, 61: $Vu, 62: $Vv, 70: $Vw }, { 15: [1, 141] }, o($Vx, [2, 49]), { 15: [1, 142] }, o($Vx, [2, 51]), o($Vx, [2, 52]), { 22: 143, 70: $Vw }, { 22: 144, 70: $Vw }, { 56: 145, 79: $VE }, { 56: 146, 79: $VE }, { 56: 147, 79: $VE }, { 64: [1, 148], 79: [2, 62] }, { 5: [2, 55] }, { 5: [2, 77] }, { 5: [2, 56] }, { 5: [2, 57] }, { 5: [2, 58] }, o($Vx, [2, 16]), o($Vy, [2, 10]), { 12: 149, 50: $Vo, 52: $Vp, 53: $Vq }, o($Vy, [2, 12]), o($Vy, [2, 13]), o($Vx, [2, 18]), o($Vx, [2, 34]), o($Vx, [2, 35]), o($Vx, [2, 36]), o($Vx, [2, 37]), { 15: [1, 150] }, o($Vx, [2, 38]), { 15: [1, 151] }, o($Vx, [2, 39]), o($Vx, [2, 40]), { 15: [1, 152] }, o($Vx, [2, 41]), { 5: [1, 153] }, { 5: [1, 154] }, { 56: 155, 79: $VE }, { 56: 156, 79: $VE }, { 5: [2, 67] }, { 5: [2, 53] }, { 5: [2, 54] }, { 22: 157, 70: $Vw }, o($Vy, [2, 11]), o($VA, $V3, { 7: 101, 40: 158 }), o($VB, $V3, { 7: 103, 42: 159 }), o($VC, $V3, { 7: 106, 45: 160 }), o($Vx, [2, 48]), o($Vx, [2, 50]), { 5: [2, 65] }, { 5: [2, 66] }, { 79: [2, 61] }, { 16: [2, 47] }, { 16: [2, 45] }, { 16: [2, 43] }],
    defaultActions: { 5: [2, 1], 6: [2, 2], 85: [2, 63], 86: [2, 64], 119: [2, 55], 120: [2, 77], 121: [2, 56], 122: [2, 57], 123: [2, 58], 145: [2, 67], 146: [2, 53], 147: [2, 54], 155: [2, 65], 156: [2, 66], 157: [2, 61], 158: [2, 47], 159: [2, 45], 160: [2, 43] },
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
      var symbol, state2, action, r, yyval = {}, p, len, newState, expected;
      while (true) {
        state2 = stack[stack.length - 1];
        if (this.defaultActions[state2]) {
          action = this.defaultActions[state2];
        } else {
          if (symbol === null || typeof symbol == "undefined") {
            symbol = lex();
          }
          action = table[state2] && table[state2][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
          var errStr = "";
          expected = [];
          for (p in table[state2]) {
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
          throw new Error("Parse Error: multiple actions possible at state: " + state2 + ", token: " + symbol);
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
            return 5;
          case 1:
            break;
          case 2:
            break;
          case 3:
            break;
          case 4:
            break;
          case 5:
            break;
          case 6:
            return 19;
          case 7:
            this.begin("LINE");
            return 14;
          case 8:
            this.begin("ID");
            return 50;
          case 9:
            this.begin("ID");
            return 52;
          case 10:
            return 13;
          case 11:
            this.begin("ID");
            return 53;
          case 12:
            yy_.yytext = yy_.yytext.trim();
            this.begin("ALIAS");
            return 70;
          case 13:
            this.popState();
            this.popState();
            this.begin("LINE");
            return 51;
          case 14:
            this.popState();
            this.popState();
            return 5;
          case 15:
            this.begin("LINE");
            return 36;
          case 16:
            this.begin("LINE");
            return 37;
          case 17:
            this.begin("LINE");
            return 38;
          case 18:
            this.begin("LINE");
            return 39;
          case 19:
            this.begin("LINE");
            return 49;
          case 20:
            this.begin("LINE");
            return 41;
          case 21:
            this.begin("LINE");
            return 43;
          case 22:
            this.begin("LINE");
            return 48;
          case 23:
            this.begin("LINE");
            return 44;
          case 24:
            this.begin("LINE");
            return 47;
          case 25:
            this.begin("LINE");
            return 46;
          case 26:
            this.popState();
            return 15;
          case 27:
            return 16;
          case 28:
            return 65;
          case 29:
            return 66;
          case 30:
            return 59;
          case 31:
            return 60;
          case 32:
            return 61;
          case 33:
            return 62;
          case 34:
            return 57;
          case 35:
            return 54;
          case 36:
            this.begin("ID");
            return 21;
          case 37:
            this.begin("ID");
            return 23;
          case 38:
            return 29;
          case 39:
            return 30;
          case 40:
            this.begin("acc_title");
            return 31;
          case 41:
            this.popState();
            return "acc_title_value";
          case 42:
            this.begin("acc_descr");
            return 33;
          case 43:
            this.popState();
            return "acc_descr_value";
          case 44:
            this.begin("acc_descr_multiline");
            break;
          case 45:
            this.popState();
            break;
          case 46:
            return "acc_descr_multiline_value";
          case 47:
            return 6;
          case 48:
            return 18;
          case 49:
            return 20;
          case 50:
            return 64;
          case 51:
            return 5;
          case 52:
            yy_.yytext = yy_.yytext.trim();
            return 70;
          case 53:
            return 73;
          case 54:
            return 74;
          case 55:
            return 71;
          case 56:
            return 72;
          case 57:
            return 75;
          case 58:
            return 76;
          case 59:
            return 77;
          case 60:
            return 78;
          case 61:
            return 79;
          case 62:
            return 68;
          case 63:
            return 69;
          case 64:
            return 5;
          case 65:
            return "INVALID";
        }
      },
      rules: [/^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:((?!\n)\s)+)/i, /^(?:#[^\n]*)/i, /^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[0-9]+(?=[ \n]+))/i, /^(?:box\b)/i, /^(?:participant\b)/i, /^(?:actor\b)/i, /^(?:create\b)/i, /^(?:destroy\b)/i, /^(?:[^\->:\n,;]+?([\-]*[^\->:\n,;]+?)*?(?=((?!\n)\s)+as(?!\n)\s|[#\n;]|$))/i, /^(?:as\b)/i, /^(?:(?:))/i, /^(?:loop\b)/i, /^(?:rect\b)/i, /^(?:opt\b)/i, /^(?:alt\b)/i, /^(?:else\b)/i, /^(?:par\b)/i, /^(?:par_over\b)/i, /^(?:and\b)/i, /^(?:critical\b)/i, /^(?:option\b)/i, /^(?:break\b)/i, /^(?:(?:[:]?(?:no)?wrap)?[^#\n;]*)/i, /^(?:end\b)/i, /^(?:left of\b)/i, /^(?:right of\b)/i, /^(?:links\b)/i, /^(?:link\b)/i, /^(?:properties\b)/i, /^(?:details\b)/i, /^(?:over\b)/i, /^(?:note\b)/i, /^(?:activate\b)/i, /^(?:deactivate\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:title:\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:sequenceDiagram\b)/i, /^(?:autonumber\b)/i, /^(?:off\b)/i, /^(?:,)/i, /^(?:;)/i, /^(?:[^\+\->:\n,;]+((?!(-x|--x|-\)|--\)))[\-]*[^\+\->:\n,;]+)*)/i, /^(?:->>)/i, /^(?:-->>)/i, /^(?:->)/i, /^(?:-->)/i, /^(?:-[x])/i, /^(?:--[x])/i, /^(?:-[\)])/i, /^(?:--[\)])/i, /^(?::(?:(?:no)?wrap)?[^#\n;]+)/i, /^(?:\+)/i, /^(?:-)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { "acc_descr_multiline": { "rules": [45, 46], "inclusive": false }, "acc_descr": { "rules": [43], "inclusive": false }, "acc_title": { "rules": [41], "inclusive": false }, "ID": { "rules": [2, 3, 12], "inclusive": false }, "ALIAS": { "rules": [2, 3, 13, 14], "inclusive": false }, "LINE": { "rules": [2, 3, 26], "inclusive": false }, "INITIAL": { "rules": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 44, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65], "inclusive": true } }
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
class ImperativeState {
  /**
   * @param init - Function that creates the default state.
   */
  constructor(init) {
    this.init = init;
    this.records = this.init();
  }
  reset() {
    this.records = this.init();
  }
}
const state = new ImperativeState(() => ({
  prevActor: void 0,
  actors: {},
  createdActors: {},
  destroyedActors: {},
  boxes: [],
  messages: [],
  notes: [],
  sequenceNumbersEnabled: false,
  wrapEnabled: void 0,
  currentBox: void 0,
  lastCreated: void 0,
  lastDestroyed: void 0
}));
const addBox = function(data) {
  state.records.boxes.push({
    name: data.text,
    wrap: data.wrap === void 0 && autoWrap() || !!data.wrap,
    fill: data.color,
    actorKeys: []
  });
  state.records.currentBox = state.records.boxes.slice(-1)[0];
};
const addActor = function(id, name, description, type) {
  let assignedBox = state.records.currentBox;
  const old = state.records.actors[id];
  if (old) {
    if (state.records.currentBox && old.box && state.records.currentBox !== old.box) {
      throw new Error(
        "A same participant should only be defined in one Box: " + old.name + " can't be in '" + old.box.name + "' and in '" + state.records.currentBox.name + "' at the same time."
      );
    }
    assignedBox = old.box ? old.box : state.records.currentBox;
    old.box = assignedBox;
    if (old && name === old.name && description == null) {
      return;
    }
  }
  if (description == null || description.text == null) {
    description = { text: name, wrap: null, type };
  }
  if (type == null || description.text == null) {
    description = { text: name, wrap: null, type };
  }
  state.records.actors[id] = {
    box: assignedBox,
    name,
    description: description.text,
    wrap: description.wrap === void 0 && autoWrap() || !!description.wrap,
    prevActor: state.records.prevActor,
    links: {},
    properties: {},
    actorCnt: null,
    rectData: null,
    type: type || "participant"
  };
  if (state.records.prevActor && state.records.actors[state.records.prevActor]) {
    state.records.actors[state.records.prevActor].nextActor = id;
  }
  if (state.records.currentBox) {
    state.records.currentBox.actorKeys.push(id);
  }
  state.records.prevActor = id;
};
const activationCount = (part) => {
  let i;
  let count = 0;
  for (i = 0; i < state.records.messages.length; i++) {
    if (state.records.messages[i].type === LINETYPE.ACTIVE_START && state.records.messages[i].from.actor === part) {
      count++;
    }
    if (state.records.messages[i].type === LINETYPE.ACTIVE_END && state.records.messages[i].from.actor === part) {
      count--;
    }
  }
  return count;
};
const addMessage = function(idFrom, idTo, message, answer) {
  state.records.messages.push({
    from: idFrom,
    to: idTo,
    message: message.text,
    wrap: message.wrap === void 0 && autoWrap() || !!message.wrap,
    answer
  });
};
const addSignal = function(idFrom, idTo, message = { text: void 0, wrap: void 0 }, messageType, activate = false) {
  if (messageType === LINETYPE.ACTIVE_END) {
    const cnt = activationCount(idFrom.actor);
    if (cnt < 1) {
      let error = new Error("Trying to inactivate an inactive participant (" + idFrom.actor + ")");
      error.hash = {
        text: "->>-",
        token: "->>-",
        line: "1",
        loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
        expected: ["'ACTIVE_PARTICIPANT'"]
      };
      throw error;
    }
  }
  state.records.messages.push({
    from: idFrom,
    to: idTo,
    message: message.text,
    wrap: message.wrap === void 0 && autoWrap() || !!message.wrap,
    type: messageType,
    activate
  });
  return true;
};
const hasAtLeastOneBox = function() {
  return state.records.boxes.length > 0;
};
const hasAtLeastOneBoxWithTitle = function() {
  return state.records.boxes.some((b) => b.name);
};
const getMessages = function() {
  return state.records.messages;
};
const getBoxes = function() {
  return state.records.boxes;
};
const getActors = function() {
  return state.records.actors;
};
const getCreatedActors = function() {
  return state.records.createdActors;
};
const getDestroyedActors = function() {
  return state.records.destroyedActors;
};
const getActor = function(id) {
  return state.records.actors[id];
};
const getActorKeys = function() {
  return Object.keys(state.records.actors);
};
const enableSequenceNumbers = function() {
  state.records.sequenceNumbersEnabled = true;
};
const disableSequenceNumbers = function() {
  state.records.sequenceNumbersEnabled = false;
};
const showSequenceNumbers = () => state.records.sequenceNumbersEnabled;
const setWrap = function(wrapSetting) {
  state.records.wrapEnabled = wrapSetting;
};
const autoWrap = () => {
  if (state.records.wrapEnabled !== void 0) {
    return state.records.wrapEnabled;
  }
  return index.getConfig().sequence.wrap;
};
const clear = function() {
  state.reset();
  index.clear();
};
const parseMessage = function(str) {
  const _str = str.trim();
  const message = {
    text: _str.replace(/^:?(?:no)?wrap:/, "").trim(),
    wrap: _str.match(/^:?wrap:/) !== null ? true : _str.match(/^:?nowrap:/) !== null ? false : void 0
  };
  index.log$1.debug("parseMessage:", message);
  return message;
};
const parseBoxData = function(str) {
  const match = str.match(/^((?:rgba?|hsla?)\s*\(.*\)|\w*)(.*)$/);
  let color = match != null && match[1] ? match[1].trim() : "transparent";
  let title = match != null && match[2] ? match[2].trim() : void 0;
  if (window && window.CSS) {
    if (!window.CSS.supports("color", color)) {
      color = "transparent";
      title = str.trim();
    }
  } else {
    const style = new Option().style;
    style.color = color;
    if (style.color !== color) {
      color = "transparent";
      title = str.trim();
    }
  }
  return {
    color,
    text: title !== void 0 ? index.sanitizeText$2(title.replace(/^:?(?:no)?wrap:/, ""), index.getConfig()) : void 0,
    wrap: title !== void 0 ? title.match(/^:?wrap:/) !== null ? true : title.match(/^:?nowrap:/) !== null ? false : void 0 : void 0
  };
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
  DOTTED_POINT: 25,
  AUTONUMBER: 26,
  CRITICAL_START: 27,
  CRITICAL_OPTION: 28,
  CRITICAL_END: 29,
  BREAK_START: 30,
  BREAK_END: 31,
  PAR_OVER_START: 32
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
const addNote = function(actor, placement, message) {
  const note = {
    actor,
    placement,
    message: message.text,
    wrap: message.wrap === void 0 && autoWrap() || !!message.wrap
  };
  const actors = [].concat(actor, actor);
  state.records.notes.push(note);
  state.records.messages.push({
    from: actors[0],
    to: actors[1],
    message: message.text,
    wrap: message.wrap === void 0 && autoWrap() || !!message.wrap,
    type: LINETYPE.NOTE,
    placement
  });
};
const addLinks = function(actorId, text) {
  const actor = getActor(actorId);
  try {
    let sanitizedText = index.sanitizeText$2(text.text, index.getConfig());
    sanitizedText = sanitizedText.replace(/&amp;/g, "&");
    sanitizedText = sanitizedText.replace(/&equals;/g, "=");
    const links = JSON.parse(sanitizedText);
    insertLinks(actor, links);
  } catch (e) {
    index.log$1.error("error while parsing actor link text", e);
  }
};
const addALink = function(actorId, text) {
  const actor = getActor(actorId);
  try {
    const links = {};
    let sanitizedText = index.sanitizeText$2(text.text, index.getConfig());
    var sep = sanitizedText.indexOf("@");
    sanitizedText = sanitizedText.replace(/&amp;/g, "&");
    sanitizedText = sanitizedText.replace(/&equals;/g, "=");
    var label = sanitizedText.slice(0, sep - 1).trim();
    var link = sanitizedText.slice(sep + 1).trim();
    links[label] = link;
    insertLinks(actor, links);
  } catch (e) {
    index.log$1.error("error while parsing actor link text", e);
  }
};
function insertLinks(actor, links) {
  if (actor.links == null) {
    actor.links = links;
  } else {
    for (let key in links) {
      actor.links[key] = links[key];
    }
  }
}
const addProperties = function(actorId, text) {
  const actor = getActor(actorId);
  try {
    let sanitizedText = index.sanitizeText$2(text.text, index.getConfig());
    const properties = JSON.parse(sanitizedText);
    insertProperties(actor, properties);
  } catch (e) {
    index.log$1.error("error while parsing actor properties text", e);
  }
};
function insertProperties(actor, properties) {
  if (actor.properties == null) {
    actor.properties = properties;
  } else {
    for (let key in properties) {
      actor.properties[key] = properties[key];
    }
  }
}
function boxEnd() {
  state.records.currentBox = void 0;
}
const addDetails = function(actorId, text) {
  const actor = getActor(actorId);
  const elem = document.getElementById(text.text);
  try {
    const text2 = elem.innerHTML;
    const details = JSON.parse(text2);
    if (details["properties"]) {
      insertProperties(actor, details["properties"]);
    }
    if (details["links"]) {
      insertLinks(actor, details["links"]);
    }
  } catch (e) {
    index.log$1.error("error while parsing actor details text", e);
  }
};
const getActorProperty = function(actor, key) {
  if (actor !== void 0 && actor.properties !== void 0) {
    return actor.properties[key];
  }
  return void 0;
};
const apply = function(param) {
  if (Array.isArray(param)) {
    param.forEach(function(item) {
      apply(item);
    });
  } else {
    switch (param.type) {
      case "sequenceIndex":
        state.records.messages.push({
          from: void 0,
          to: void 0,
          message: {
            start: param.sequenceIndex,
            step: param.sequenceIndexStep,
            visible: param.sequenceVisible
          },
          wrap: false,
          type: param.signalType
        });
        break;
      case "addParticipant":
        addActor(param.actor, param.actor, param.description, param.draw);
        break;
      case "createParticipant":
        if (state.records.actors[param.actor]) {
          throw new Error(
            "It is not possible to have actors with the same id, even if one is destroyed before the next is created. Use 'AS' aliases to simulate the behavior"
          );
        }
        state.records.lastCreated = param.actor;
        addActor(param.actor, param.actor, param.description, param.draw);
        state.records.createdActors[param.actor] = state.records.messages.length;
        break;
      case "destroyParticipant":
        state.records.lastDestroyed = param.actor;
        state.records.destroyedActors[param.actor] = state.records.messages.length;
        break;
      case "activeStart":
        addSignal(param.actor, void 0, void 0, param.signalType);
        break;
      case "activeEnd":
        addSignal(param.actor, void 0, void 0, param.signalType);
        break;
      case "addNote":
        addNote(param.actor, param.placement, param.text);
        break;
      case "addLinks":
        addLinks(param.actor, param.text);
        break;
      case "addALink":
        addALink(param.actor, param.text);
        break;
      case "addProperties":
        addProperties(param.actor, param.text);
        break;
      case "addDetails":
        addDetails(param.actor, param.text);
        break;
      case "addMessage":
        if (state.records.lastCreated) {
          if (param.to !== state.records.lastCreated) {
            throw new Error(
              "The created participant " + state.records.lastCreated + " does not have an associated creating message after its declaration. Please check the sequence diagram."
            );
          } else {
            state.records.lastCreated = void 0;
          }
        } else if (state.records.lastDestroyed) {
          if (param.to !== state.records.lastDestroyed && param.from !== state.records.lastDestroyed) {
            throw new Error(
              "The destroyed participant " + state.records.lastDestroyed + " does not have an associated destroying message after its declaration. Please check the sequence diagram."
            );
          } else {
            state.records.lastDestroyed = void 0;
          }
        }
        addSignal(param.from, param.to, param.msg, param.signalType, param.activate);
        break;
      case "boxStart":
        addBox(param.boxData);
        break;
      case "boxEnd":
        boxEnd();
        break;
      case "loopStart":
        addSignal(void 0, void 0, param.loopText, param.signalType);
        break;
      case "loopEnd":
        addSignal(void 0, void 0, void 0, param.signalType);
        break;
      case "rectStart":
        addSignal(void 0, void 0, param.color, param.signalType);
        break;
      case "rectEnd":
        addSignal(void 0, void 0, void 0, param.signalType);
        break;
      case "optStart":
        addSignal(void 0, void 0, param.optText, param.signalType);
        break;
      case "optEnd":
        addSignal(void 0, void 0, void 0, param.signalType);
        break;
      case "altStart":
        addSignal(void 0, void 0, param.altText, param.signalType);
        break;
      case "else":
        addSignal(void 0, void 0, param.altText, param.signalType);
        break;
      case "altEnd":
        addSignal(void 0, void 0, void 0, param.signalType);
        break;
      case "setAccTitle":
        index.setAccTitle(param.text);
        break;
      case "parStart":
        addSignal(void 0, void 0, param.parText, param.signalType);
        break;
      case "and":
        addSignal(void 0, void 0, param.parText, param.signalType);
        break;
      case "parEnd":
        addSignal(void 0, void 0, void 0, param.signalType);
        break;
      case "criticalStart":
        addSignal(void 0, void 0, param.criticalText, param.signalType);
        break;
      case "option":
        addSignal(void 0, void 0, param.optionText, param.signalType);
        break;
      case "criticalEnd":
        addSignal(void 0, void 0, void 0, param.signalType);
        break;
      case "breakStart":
        addSignal(void 0, void 0, param.breakText, param.signalType);
        break;
      case "breakEnd":
        addSignal(void 0, void 0, void 0, param.signalType);
        break;
    }
  }
};
const db = {
  addActor,
  addMessage,
  addSignal,
  addLinks,
  addDetails,
  addProperties,
  autoWrap,
  setWrap,
  enableSequenceNumbers,
  disableSequenceNumbers,
  showSequenceNumbers,
  getMessages,
  getActors,
  getCreatedActors,
  getDestroyedActors,
  getActor,
  getActorKeys,
  getActorProperty,
  getAccTitle: index.getAccTitle,
  getBoxes,
  getDiagramTitle: index.getDiagramTitle,
  setDiagramTitle: index.setDiagramTitle,
  getConfig: () => index.getConfig().sequence,
  clear,
  parseMessage,
  parseBoxData,
  LINETYPE,
  ARROWTYPE,
  PLACEMENT,
  addNote,
  setAccTitle: index.setAccTitle,
  apply,
  setAccDescription: index.setAccDescription,
  getAccDescription: index.getAccDescription,
  hasAtLeastOneBox,
  hasAtLeastOneBoxWithTitle
};
const getStyles = (options) => `.actor {
    stroke: ${options.actorBorder};
    fill: ${options.actorBkg};
  }

  text.actor > tspan {
    fill: ${options.actorTextColor};
    stroke: none;
  }

  .actor-line {
    stroke: ${options.actorLineColor};
  }

  .messageLine0 {
    stroke-width: 1.5;
    stroke-dasharray: none;
    stroke: ${options.signalColor};
  }

  .messageLine1 {
    stroke-width: 1.5;
    stroke-dasharray: 2, 2;
    stroke: ${options.signalColor};
  }

  #arrowhead path {
    fill: ${options.signalColor};
    stroke: ${options.signalColor};
  }

  .sequenceNumber {
    fill: ${options.sequenceNumberColor};
  }

  #sequencenumber {
    fill: ${options.signalColor};
  }

  #crosshead path {
    fill: ${options.signalColor};
    stroke: ${options.signalColor};
  }

  .messageText {
    fill: ${options.signalTextColor};
    stroke: none;
  }

  .labelBox {
    stroke: ${options.labelBoxBorderColor};
    fill: ${options.labelBoxBkgColor};
  }

  .labelText, .labelText > tspan {
    fill: ${options.labelTextColor};
    stroke: none;
  }

  .loopText, .loopText > tspan {
    fill: ${options.loopTextColor};
    stroke: none;
  }

  .loopLine {
    stroke-width: 2px;
    stroke-dasharray: 2, 2;
    stroke: ${options.labelBoxBorderColor};
    fill: ${options.labelBoxBorderColor};
  }

  .note {
    //stroke: #decc93;
    stroke: ${options.noteBorderColor};
    fill: ${options.noteBkgColor};
  }

  .noteText, .noteText > tspan {
    fill: ${options.noteTextColor};
    stroke: none;
  }

  .activation0 {
    fill: ${options.activationBkgColor};
    stroke: ${options.activationBorderColor};
  }

  .activation1 {
    fill: ${options.activationBkgColor};
    stroke: ${options.activationBorderColor};
  }

  .activation2 {
    fill: ${options.activationBkgColor};
    stroke: ${options.activationBorderColor};
  }

  .actorPopupMenu {
    position: absolute;
  }

  .actorPopupMenuPanel {
    position: absolute;
    fill: ${options.actorBkg};
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
}
  .actor-man line {
    stroke: ${options.actorBorder};
    fill: ${options.actorBkg};
  }
  .actor-man circle, line {
    stroke: ${options.actorBorder};
    fill: ${options.actorBkg};
    stroke-width: 2px;
  }
`;
const styles = getStyles;
const ACTOR_TYPE_WIDTH = 18 * 2;
const TOP_ACTOR_CLASS = "actor-top";
const BOTTOM_ACTOR_CLASS = "actor-bottom";
const drawRect = function(elem, rectData) {
  return svgDrawCommon08f97a94.drawRect(elem, rectData);
};
const drawPopup = function(elem, actor, minMenuWidth, textAttrs, forceMenus) {
  if (actor.links === void 0 || actor.links === null || Object.keys(actor.links).length === 0) {
    return { height: 0, width: 0 };
  }
  const links = actor.links;
  const actorCnt2 = actor.actorCnt;
  const rectData = actor.rectData;
  var displayValue = "none";
  if (forceMenus) {
    displayValue = "block !important";
  }
  const g = elem.append("g");
  g.attr("id", "actor" + actorCnt2 + "_popup");
  g.attr("class", "actorPopupMenu");
  g.attr("display", displayValue);
  var actorClass = "";
  if (rectData.class !== void 0) {
    actorClass = " " + rectData.class;
  }
  let menuWidth = rectData.width > minMenuWidth ? rectData.width : minMenuWidth;
  const rectElem = g.append("rect");
  rectElem.attr("class", "actorPopupMenuPanel" + actorClass);
  rectElem.attr("x", rectData.x);
  rectElem.attr("y", rectData.height);
  rectElem.attr("fill", rectData.fill);
  rectElem.attr("stroke", rectData.stroke);
  rectElem.attr("width", menuWidth);
  rectElem.attr("height", rectData.height);
  rectElem.attr("rx", rectData.rx);
  rectElem.attr("ry", rectData.ry);
  if (links != null) {
    var linkY = 20;
    for (let key in links) {
      var linkElem = g.append("a");
      var sanitizedLink = main.distExports.sanitizeUrl(links[key]);
      linkElem.attr("xlink:href", sanitizedLink);
      linkElem.attr("target", "_blank");
      _drawMenuItemTextCandidateFunc(textAttrs)(
        key,
        linkElem,
        rectData.x + 10,
        rectData.height + linkY,
        menuWidth,
        20,
        { class: "actor" },
        textAttrs
      );
      linkY += 30;
    }
  }
  rectElem.attr("height", linkY);
  return { height: rectData.height + linkY, width: menuWidth };
};
const popupMenuToggle = function(popId) {
  return "var pu = document.getElementById('" + popId + "'); if (pu != null) { pu.style.display = pu.style.display == 'block' ? 'none' : 'block'; }";
};
const drawKatex = async function(elem, textData, msgModel = null) {
  let textElem = elem.append("foreignObject");
  const lines = await index.renderKatex(textData.text, index.getConfig$1());
  const divElem = textElem.append("xhtml:div").attr("style", "width: fit-content;").attr("xmlns", "http://www.w3.org/1999/xhtml").html(lines);
  const dim = divElem.node().getBoundingClientRect();
  textElem.attr("height", Math.round(dim.height)).attr("width", Math.round(dim.width));
  if (textData.class === "noteText") {
    const rectElem = elem.node().firstChild;
    rectElem.setAttribute("height", dim.height + 2 * textData.textMargin);
    const rectDim = rectElem.getBBox();
    textElem.attr("x", Math.round(rectDim.x + rectDim.width / 2 - dim.width / 2)).attr("y", Math.round(rectDim.y + rectDim.height / 2 - dim.height / 2));
  } else if (msgModel) {
    let { startx, stopx, starty } = msgModel;
    if (startx > stopx) {
      const temp = startx;
      startx = stopx;
      stopx = temp;
    }
    textElem.attr("x", Math.round(startx + Math.abs(startx - stopx) / 2 - dim.width / 2));
    if (textData.class === "loopText") {
      textElem.attr("y", Math.round(starty));
    } else {
      textElem.attr("y", Math.round(starty - dim.height));
    }
  }
  return [textElem];
};
const drawText = function(elem, textData) {
  let prevTextHeight = 0;
  let textHeight = 0;
  const lines = textData.text.split(index.common$1.lineBreakRegex);
  const [_textFontSize, _textFontSizePx] = index.parseFontSize(textData.fontSize);
  let textElems = [];
  let dy = 0;
  let yfunc = () => textData.y;
  if (textData.valign !== void 0 && textData.textMargin !== void 0 && textData.textMargin > 0) {
    switch (textData.valign) {
      case "top":
      case "start":
        yfunc = () => Math.round(textData.y + textData.textMargin);
        break;
      case "middle":
      case "center":
        yfunc = () => Math.round(textData.y + (prevTextHeight + textHeight + textData.textMargin) / 2);
        break;
      case "bottom":
      case "end":
        yfunc = () => Math.round(
          textData.y + (prevTextHeight + textHeight + 2 * textData.textMargin) - textData.textMargin
        );
        break;
    }
  }
  if (textData.anchor !== void 0 && textData.textMargin !== void 0 && textData.width !== void 0) {
    switch (textData.anchor) {
      case "left":
      case "start":
        textData.x = Math.round(textData.x + textData.textMargin);
        textData.anchor = "start";
        textData.dominantBaseline = "middle";
        textData.alignmentBaseline = "middle";
        break;
      case "middle":
      case "center":
        textData.x = Math.round(textData.x + textData.width / 2);
        textData.anchor = "middle";
        textData.dominantBaseline = "middle";
        textData.alignmentBaseline = "middle";
        break;
      case "right":
      case "end":
        textData.x = Math.round(textData.x + textData.width - textData.textMargin);
        textData.anchor = "end";
        textData.dominantBaseline = "middle";
        textData.alignmentBaseline = "middle";
        break;
    }
  }
  for (let [i, line] of lines.entries()) {
    if (textData.textMargin !== void 0 && textData.textMargin === 0 && _textFontSize !== void 0) {
      dy = i * _textFontSize;
    }
    const textElem = elem.append("text");
    textElem.attr("x", textData.x);
    textElem.attr("y", yfunc());
    if (textData.anchor !== void 0) {
      textElem.attr("text-anchor", textData.anchor).attr("dominant-baseline", textData.dominantBaseline).attr("alignment-baseline", textData.alignmentBaseline);
    }
    if (textData.fontFamily !== void 0) {
      textElem.style("font-family", textData.fontFamily);
    }
    if (_textFontSizePx !== void 0) {
      textElem.style("font-size", _textFontSizePx);
    }
    if (textData.fontWeight !== void 0) {
      textElem.style("font-weight", textData.fontWeight);
    }
    if (textData.fill !== void 0) {
      textElem.attr("fill", textData.fill);
    }
    if (textData.class !== void 0) {
      textElem.attr("class", textData.class);
    }
    if (textData.dy !== void 0) {
      textElem.attr("dy", textData.dy);
    } else if (dy !== 0) {
      textElem.attr("dy", dy);
    }
    const text = line || index.ZERO_WIDTH_SPACE;
    if (textData.tspan) {
      const span = textElem.append("tspan");
      span.attr("x", textData.x);
      if (textData.fill !== void 0) {
        span.attr("fill", textData.fill);
      }
      span.text(text);
    } else {
      textElem.text(text);
    }
    if (textData.valign !== void 0 && textData.textMargin !== void 0 && textData.textMargin > 0) {
      textHeight += (textElem._groups || textElem)[0][0].getBBox().height;
      prevTextHeight = textHeight;
    }
    textElems.push(textElem);
  }
  return textElems;
};
const drawLabel = function(elem, txtObject) {
  function genPoints(x, y, width, height, cut) {
    return x + "," + y + " " + (x + width) + "," + y + " " + (x + width) + "," + (y + height - cut) + " " + (x + width - cut * 1.2) + "," + (y + height) + " " + x + "," + (y + height);
  }
  const polygon = elem.append("polygon");
  polygon.attr("points", genPoints(txtObject.x, txtObject.y, txtObject.width, txtObject.height, 7));
  polygon.attr("class", "labelBox");
  txtObject.y = txtObject.y + txtObject.height / 2;
  drawText(elem, txtObject);
  return polygon;
};
let actorCnt = -1;
const fixLifeLineHeights = (diagram2, actors, actorKeys, conf2) => {
  if (!diagram2.select) {
    return;
  }
  actorKeys.forEach((actorKey) => {
    const actor = actors[actorKey];
    const actorDOM = diagram2.select("#actor" + actor.actorCnt);
    if (!conf2.mirrorActors && actor.stopy) {
      actorDOM.attr("y2", actor.stopy + actor.height / 2);
    } else if (conf2.mirrorActors) {
      actorDOM.attr("y2", actor.stopy);
    }
  });
};
const drawActorTypeParticipant = async function(elem, actor, conf2, isFooter) {
  const actorY = isFooter ? actor.stopy : actor.starty;
  const center = actor.x + actor.width / 2;
  const centerY = actorY + 5;
  const boxplusLineGroup = elem.append("g").lower();
  var g = boxplusLineGroup;
  if (!isFooter) {
    actorCnt++;
    if (Object.keys(actor.links || {}).length && !conf2.forceMenus) {
      g.attr("onclick", popupMenuToggle(`actor${actorCnt}_popup`)).attr("cursor", "pointer");
    }
    g.append("line").attr("id", "actor" + actorCnt).attr("x1", center).attr("y1", centerY).attr("x2", center).attr("y2", 2e3).attr("class", "actor-line").attr("class", "200").attr("stroke-width", "0.5px").attr("stroke", "#999");
    g = boxplusLineGroup.append("g");
    actor.actorCnt = actorCnt;
    if (actor.links != null) {
      g.attr("id", "root-" + actorCnt);
    }
  }
  const rect = svgDrawCommon08f97a94.getNoteRect();
  var cssclass = "actor";
  if (actor.properties != null && actor.properties["class"]) {
    cssclass = actor.properties["class"];
  } else {
    rect.fill = "#eaeaea";
  }
  if (isFooter) {
    cssclass += ` ${BOTTOM_ACTOR_CLASS}`;
  } else {
    cssclass += ` ${TOP_ACTOR_CLASS}`;
  }
  rect.x = actor.x;
  rect.y = actorY;
  rect.width = actor.width;
  rect.height = actor.height;
  rect.class = cssclass;
  rect.rx = 3;
  rect.ry = 3;
  rect.name = actor.name;
  const rectElem = drawRect(g, rect);
  actor.rectData = rect;
  if (actor.properties != null && actor.properties["icon"]) {
    const iconSrc = actor.properties["icon"].trim();
    if (iconSrc.charAt(0) === "@") {
      svgDrawCommon08f97a94.drawEmbeddedImage(g, rect.x + rect.width - 20, rect.y + 10, iconSrc.substr(1));
    } else {
      svgDrawCommon08f97a94.drawImage(g, rect.x + rect.width - 20, rect.y + 10, iconSrc);
    }
  }
  await _drawTextCandidateFunc(conf2, index.hasKatex(actor.description))(
    actor.description,
    g,
    rect.x,
    rect.y,
    rect.width,
    rect.height,
    { class: "actor" },
    conf2
  );
  let height = actor.height;
  if (rectElem.node) {
    const bounds2 = rectElem.node().getBBox();
    actor.height = bounds2.height;
    height = bounds2.height;
  }
  return height;
};
const drawActorTypeActor = async function(elem, actor, conf2, isFooter) {
  const actorY = isFooter ? actor.stopy : actor.starty;
  const center = actor.x + actor.width / 2;
  const centerY = actorY + 80;
  elem.lower();
  if (!isFooter) {
    actorCnt++;
    elem.append("line").attr("id", "actor" + actorCnt).attr("x1", center).attr("y1", centerY).attr("x2", center).attr("y2", 2e3).attr("class", "actor-line").attr("class", "200").attr("stroke-width", "0.5px").attr("stroke", "#999");
    actor.actorCnt = actorCnt;
  }
  const actElem = elem.append("g");
  let cssClass = "actor-man";
  if (isFooter) {
    cssClass += ` ${BOTTOM_ACTOR_CLASS}`;
  } else {
    cssClass += ` ${TOP_ACTOR_CLASS}`;
  }
  actElem.attr("class", cssClass);
  actElem.attr("name", actor.name);
  const rect = svgDrawCommon08f97a94.getNoteRect();
  rect.x = actor.x;
  rect.y = actorY;
  rect.fill = "#eaeaea";
  rect.width = actor.width;
  rect.height = actor.height;
  rect.class = "actor";
  rect.rx = 3;
  rect.ry = 3;
  actElem.append("line").attr("id", "actor-man-torso" + actorCnt).attr("x1", center).attr("y1", actorY + 25).attr("x2", center).attr("y2", actorY + 45);
  actElem.append("line").attr("id", "actor-man-arms" + actorCnt).attr("x1", center - ACTOR_TYPE_WIDTH / 2).attr("y1", actorY + 33).attr("x2", center + ACTOR_TYPE_WIDTH / 2).attr("y2", actorY + 33);
  actElem.append("line").attr("x1", center - ACTOR_TYPE_WIDTH / 2).attr("y1", actorY + 60).attr("x2", center).attr("y2", actorY + 45);
  actElem.append("line").attr("x1", center).attr("y1", actorY + 45).attr("x2", center + ACTOR_TYPE_WIDTH / 2 - 2).attr("y2", actorY + 60);
  const circle = actElem.append("circle");
  circle.attr("cx", actor.x + actor.width / 2);
  circle.attr("cy", actorY + 10);
  circle.attr("r", 15);
  circle.attr("width", actor.width);
  circle.attr("height", actor.height);
  const bounds2 = actElem.node().getBBox();
  actor.height = bounds2.height;
  await _drawTextCandidateFunc(conf2, index.hasKatex(actor.description))(
    actor.description,
    actElem,
    rect.x,
    rect.y + 35,
    rect.width,
    rect.height,
    { class: "actor" },
    conf2
  );
  return actor.height;
};
const drawActor = async function(elem, actor, conf2, isFooter) {
  switch (actor.type) {
    case "actor":
      return await drawActorTypeActor(elem, actor, conf2, isFooter);
    case "participant":
      return await drawActorTypeParticipant(elem, actor, conf2, isFooter);
  }
};
const drawBox = async function(elem, box, conf2) {
  const boxplusTextGroup = elem.append("g");
  const g = boxplusTextGroup;
  drawBackgroundRect(g, box);
  if (box.name) {
    await _drawTextCandidateFunc(conf2)(
      box.name,
      g,
      box.x,
      box.y + (box.textMaxHeight || 0) / 2,
      box.width,
      0,
      { class: "text" },
      conf2
    );
  }
  g.lower();
};
const anchorElement = function(elem) {
  return elem.append("g");
};
const drawActivation = function(elem, bounds2, verticalPos, conf2, actorActivations2) {
  const rect = svgDrawCommon08f97a94.getNoteRect();
  const g = bounds2.anchored;
  rect.x = bounds2.startx;
  rect.y = bounds2.starty;
  rect.class = "activation" + actorActivations2 % 3;
  rect.width = bounds2.stopx - bounds2.startx;
  rect.height = verticalPos - bounds2.starty;
  drawRect(g, rect);
};
const drawLoop = async function(elem, loopModel, labelText, conf2) {
  const {
    boxMargin,
    boxTextMargin,
    labelBoxHeight,
    labelBoxWidth,
    messageFontFamily: fontFamily,
    messageFontSize: fontSize,
    messageFontWeight: fontWeight
  } = conf2;
  const g = elem.append("g");
  const drawLoopLine = function(startx, starty, stopx, stopy) {
    return g.append("line").attr("x1", startx).attr("y1", starty).attr("x2", stopx).attr("y2", stopy).attr("class", "loopLine");
  };
  drawLoopLine(loopModel.startx, loopModel.starty, loopModel.stopx, loopModel.starty);
  drawLoopLine(loopModel.stopx, loopModel.starty, loopModel.stopx, loopModel.stopy);
  drawLoopLine(loopModel.startx, loopModel.stopy, loopModel.stopx, loopModel.stopy);
  drawLoopLine(loopModel.startx, loopModel.starty, loopModel.startx, loopModel.stopy);
  if (loopModel.sections !== void 0) {
    loopModel.sections.forEach(function(item) {
      drawLoopLine(loopModel.startx, item.y, loopModel.stopx, item.y).style(
        "stroke-dasharray",
        "3, 3"
      );
    });
  }
  let txt = svgDrawCommon08f97a94.getTextObj();
  txt.text = labelText;
  txt.x = loopModel.startx;
  txt.y = loopModel.starty;
  txt.fontFamily = fontFamily;
  txt.fontSize = fontSize;
  txt.fontWeight = fontWeight;
  txt.anchor = "middle";
  txt.valign = "middle";
  txt.tspan = false;
  txt.width = labelBoxWidth || 50;
  txt.height = labelBoxHeight || 20;
  txt.textMargin = boxTextMargin;
  txt.class = "labelText";
  drawLabel(g, txt);
  txt = getTextObj();
  txt.text = loopModel.title;
  txt.x = loopModel.startx + labelBoxWidth / 2 + (loopModel.stopx - loopModel.startx) / 2;
  txt.y = loopModel.starty + boxMargin + boxTextMargin;
  txt.anchor = "middle";
  txt.valign = "middle";
  txt.textMargin = boxTextMargin;
  txt.class = "loopText";
  txt.fontFamily = fontFamily;
  txt.fontSize = fontSize;
  txt.fontWeight = fontWeight;
  txt.wrap = true;
  let textElem = index.hasKatex(txt.text) ? await drawKatex(g, txt, loopModel) : drawText(g, txt);
  if (loopModel.sectionTitles !== void 0) {
    for (const [idx, item] of Object.entries(loopModel.sectionTitles)) {
      if (item.message) {
        txt.text = item.message;
        txt.x = loopModel.startx + (loopModel.stopx - loopModel.startx) / 2;
        txt.y = loopModel.sections[idx].y + boxMargin + boxTextMargin;
        txt.class = "loopText";
        txt.anchor = "middle";
        txt.valign = "middle";
        txt.tspan = false;
        txt.fontFamily = fontFamily;
        txt.fontSize = fontSize;
        txt.fontWeight = fontWeight;
        txt.wrap = loopModel.wrap;
        if (index.hasKatex(txt.text)) {
          loopModel.starty = loopModel.sections[idx].y;
          await drawKatex(g, txt, loopModel);
        } else {
          drawText(g, txt);
        }
        let sectionHeight = Math.round(
          textElem.map((te) => (te._groups || te)[0][0].getBBox().height).reduce((acc, curr) => acc + curr)
        );
        loopModel.sections[idx].height += sectionHeight - (boxMargin + boxTextMargin);
      }
    }
  }
  loopModel.height = Math.round(loopModel.stopy - loopModel.starty);
  return g;
};
const drawBackgroundRect = function(elem, bounds2) {
  svgDrawCommon08f97a94.drawBackgroundRect(elem, bounds2);
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
  elem.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 7.9).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z");
};
const insertArrowFilledHead = function(elem) {
  elem.append("defs").append("marker").attr("id", "filled-head").attr("refX", 15.5).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
};
const insertSequenceNumber = function(elem) {
  elem.append("defs").append("marker").attr("id", "sequencenumber").attr("refX", 15).attr("refY", 15).attr("markerWidth", 60).attr("markerHeight", 40).attr("orient", "auto").append("circle").attr("cx", 15).attr("cy", 15).attr("r", 6);
};
const insertArrowCrossHead = function(elem) {
  const defs = elem.append("defs");
  const marker = defs.append("marker").attr("id", "crosshead").attr("markerWidth", 15).attr("markerHeight", 8).attr("orient", "auto").attr("refX", 4).attr("refY", 4.5);
  marker.append("path").attr("fill", "none").attr("stroke", "#000000").style("stroke-dasharray", "0, 0").attr("stroke-width", "1pt").attr("d", "M 1,2 L 6,7 M 6,2 L 1,7");
};
const getTextObj = function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: void 0,
    style: "#666",
    width: void 0,
    height: void 0,
    textMargin: 0,
    rx: 0,
    ry: 0,
    tspan: true,
    valign: void 0
  };
};
const getNoteRect = function() {
  return {
    x: 0,
    y: 0,
    fill: "#EDF2AE",
    stroke: "#666",
    width: 100,
    anchor: "start",
    height: 100,
    rx: 0,
    ry: 0
  };
};
const _drawTextCandidateFunc = function() {
  function byText(content, g, x, y, width, height, textAttrs) {
    const text = g.append("text").attr("x", x + width / 2).attr("y", y + height / 2 + 5).style("text-anchor", "middle").text(content);
    _setTextAttrs(text, textAttrs);
  }
  function byTspan(content, g, x, y, width, height, textAttrs, conf2) {
    const { actorFontSize, actorFontFamily, actorFontWeight } = conf2;
    const [_actorFontSize, _actorFontSizePx] = index.parseFontSize(actorFontSize);
    const lines = content.split(index.common$1.lineBreakRegex);
    for (let i = 0; i < lines.length; i++) {
      const dy = i * _actorFontSize - _actorFontSize * (lines.length - 1) / 2;
      const text = g.append("text").attr("x", x + width / 2).attr("y", y).style("text-anchor", "middle").style("font-size", _actorFontSizePx).style("font-weight", actorFontWeight).style("font-family", actorFontFamily);
      text.append("tspan").attr("x", x + width / 2).attr("dy", dy).text(lines[i]);
      text.attr("y", y + height / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central");
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
  async function byKatex(content, g, x, y, width, height, textAttrs, conf2) {
    const dim = await index.calculateMathMLDimensions(content, index.getConfig$1());
    const s = g.append("switch");
    const f = s.append("foreignObject").attr("x", x + width / 2 - dim.width / 2).attr("y", y + height / 2 - dim.height / 2).attr("width", dim.width).attr("height", dim.height);
    const text = f.append("xhtml:div").style("height", "100%").style("width", "100%");
    text.append("div").style("text-align", "center").style("vertical-align", "middle").html(await index.renderKatex(content, index.getConfig$1()));
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
  return function(conf2, hasKatex2 = false) {
    if (hasKatex2) {
      return byKatex;
    }
    return conf2.textPlacement === "fo" ? byFo : conf2.textPlacement === "old" ? byText : byTspan;
  };
}();
const _drawMenuItemTextCandidateFunc = function() {
  function byText(content, g, x, y, width, height, textAttrs) {
    const text = g.append("text").attr("x", x).attr("y", y).style("text-anchor", "start").text(content);
    _setTextAttrs(text, textAttrs);
  }
  function byTspan(content, g, x, y, width, height, textAttrs, conf2) {
    const { actorFontSize, actorFontFamily, actorFontWeight } = conf2;
    const lines = content.split(index.common$1.lineBreakRegex);
    for (let i = 0; i < lines.length; i++) {
      const dy = i * actorFontSize - actorFontSize * (lines.length - 1) / 2;
      const text = g.append("text").attr("x", x).attr("y", y).style("text-anchor", "start").style("font-size", actorFontSize).style("font-weight", actorFontWeight).style("font-family", actorFontFamily);
      text.append("tspan").attr("x", x).attr("dy", dy).text(lines[i]);
      text.attr("y", y + height / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central");
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
  drawText,
  drawLabel,
  drawActor,
  drawBox,
  drawPopup,
  anchorElement,
  drawActivation,
  drawLoop,
  drawBackgroundRect,
  insertArrowHead,
  insertArrowFilledHead,
  insertSequenceNumber,
  insertArrowCrossHead,
  insertDatabaseIcon,
  insertComputerIcon,
  insertClockIcon,
  getTextObj,
  getNoteRect,
  fixLifeLineHeights,
  sanitizeUrl: main.distExports.sanitizeUrl
};
let conf = {};
const bounds = {
  data: {
    startx: void 0,
    stopx: void 0,
    starty: void 0,
    stopy: void 0
  },
  verticalPos: 0,
  sequenceItems: [],
  activations: [],
  models: {
    getHeight: function() {
      return Math.max.apply(
        null,
        this.actors.length === 0 ? [0] : this.actors.map((actor) => actor.height || 0)
      ) + (this.loops.length === 0 ? 0 : this.loops.map((it) => it.height || 0).reduce((acc, h) => acc + h)) + (this.messages.length === 0 ? 0 : this.messages.map((it) => it.height || 0).reduce((acc, h) => acc + h)) + (this.notes.length === 0 ? 0 : this.notes.map((it) => it.height || 0).reduce((acc, h) => acc + h));
    },
    clear: function() {
      this.actors = [];
      this.boxes = [];
      this.loops = [];
      this.messages = [];
      this.notes = [];
    },
    addBox: function(boxModel) {
      this.boxes.push(boxModel);
    },
    addActor: function(actorModel) {
      this.actors.push(actorModel);
    },
    addLoop: function(loopModel) {
      this.loops.push(loopModel);
    },
    addMessage: function(msgModel) {
      this.messages.push(msgModel);
    },
    addNote: function(noteModel) {
      this.notes.push(noteModel);
    },
    lastActor: function() {
      return this.actors[this.actors.length - 1];
    },
    lastLoop: function() {
      return this.loops[this.loops.length - 1];
    },
    lastMessage: function() {
      return this.messages[this.messages.length - 1];
    },
    lastNote: function() {
      return this.notes[this.notes.length - 1];
    },
    actors: [],
    boxes: [],
    loops: [],
    messages: [],
    notes: []
  },
  init: function() {
    this.sequenceItems = [];
    this.activations = [];
    this.models.clear();
    this.data = {
      startx: void 0,
      stopx: void 0,
      starty: void 0,
      stopy: void 0
    };
    this.verticalPos = 0;
    setConf(index.getConfig());
  },
  updateVal: function(obj, key, val, fun) {
    if (obj[key] === void 0) {
      obj[key] = val;
    } else {
      obj[key] = fun(val, obj[key]);
    }
  },
  updateBounds: function(startx, starty, stopx, stopy) {
    const _self = this;
    let cnt = 0;
    function updateFn(type) {
      return function updateItemBounds(item) {
        cnt++;
        const n = _self.sequenceItems.length - cnt + 1;
        _self.updateVal(item, "starty", starty - n * conf.boxMargin, Math.min);
        _self.updateVal(item, "stopy", stopy + n * conf.boxMargin, Math.max);
        _self.updateVal(bounds.data, "startx", startx - n * conf.boxMargin, Math.min);
        _self.updateVal(bounds.data, "stopx", stopx + n * conf.boxMargin, Math.max);
        if (!(type === "activation")) {
          _self.updateVal(item, "startx", startx - n * conf.boxMargin, Math.min);
          _self.updateVal(item, "stopx", stopx + n * conf.boxMargin, Math.max);
          _self.updateVal(bounds.data, "starty", starty - n * conf.boxMargin, Math.min);
          _self.updateVal(bounds.data, "stopy", stopy + n * conf.boxMargin, Math.max);
        }
      };
    }
    this.sequenceItems.forEach(updateFn());
    this.activations.forEach(updateFn("activation"));
  },
  insert: function(startx, starty, stopx, stopy) {
    const _startx = index.common$1.getMin(startx, stopx);
    const _stopx = index.common$1.getMax(startx, stopx);
    const _starty = index.common$1.getMin(starty, stopy);
    const _stopy = index.common$1.getMax(starty, stopy);
    this.updateVal(bounds.data, "startx", _startx, Math.min);
    this.updateVal(bounds.data, "starty", _starty, Math.min);
    this.updateVal(bounds.data, "stopx", _stopx, Math.max);
    this.updateVal(bounds.data, "stopy", _stopy, Math.max);
    this.updateBounds(_startx, _starty, _stopx, _stopy);
  },
  newActivation: function(message, diagram2, actors) {
    const actorRect = actors[message.from.actor];
    const stackedSize = actorActivations(message.from.actor).length || 0;
    const x = actorRect.x + actorRect.width / 2 + (stackedSize - 1) * conf.activationWidth / 2;
    this.activations.push({
      startx: x,
      starty: this.verticalPos + 2,
      stopx: x + conf.activationWidth,
      stopy: void 0,
      actor: message.from.actor,
      anchored: svgDraw.anchorElement(diagram2)
    });
  },
  endActivation: function(message) {
    const lastActorActivationIdx = this.activations.map(function(activation) {
      return activation.actor;
    }).lastIndexOf(message.from.actor);
    return this.activations.splice(lastActorActivationIdx, 1)[0];
  },
  createLoop: function(title = { message: void 0, wrap: false, width: void 0 }, fill) {
    return {
      startx: void 0,
      starty: this.verticalPos,
      stopx: void 0,
      stopy: void 0,
      title: title.message,
      wrap: title.wrap,
      width: title.width,
      height: 0,
      fill
    };
  },
  newLoop: function(title = { message: void 0, wrap: false, width: void 0 }, fill) {
    this.sequenceItems.push(this.createLoop(title, fill));
  },
  endLoop: function() {
    return this.sequenceItems.pop();
  },
  isLoopOverlap: function() {
    return this.sequenceItems.length ? this.sequenceItems[this.sequenceItems.length - 1].overlap : false;
  },
  addSectionToLoop: function(message) {
    const loop = this.sequenceItems.pop();
    loop.sections = loop.sections || [];
    loop.sectionTitles = loop.sectionTitles || [];
    loop.sections.push({ y: bounds.getVerticalPos(), height: 0 });
    loop.sectionTitles.push(message);
    this.sequenceItems.push(loop);
  },
  saveVerticalPos: function() {
    if (this.isLoopOverlap()) {
      this.savedVerticalPos = this.verticalPos;
    }
  },
  resetVerticalPos: function() {
    if (this.isLoopOverlap()) {
      this.verticalPos = this.savedVerticalPos;
    }
  },
  bumpVerticalPos: function(bump) {
    this.verticalPos = this.verticalPos + bump;
    this.data.stopy = index.common$1.getMax(this.data.stopy, this.verticalPos);
  },
  getVerticalPos: function() {
    return this.verticalPos;
  },
  getBounds: function() {
    return { bounds: this.data, models: this.models };
  }
};
const drawNote = async function(elem, noteModel) {
  bounds.bumpVerticalPos(conf.boxMargin);
  noteModel.height = conf.boxMargin;
  noteModel.starty = bounds.getVerticalPos();
  const rect = svgDrawCommon08f97a94.getNoteRect();
  rect.x = noteModel.startx;
  rect.y = noteModel.starty;
  rect.width = noteModel.width || conf.width;
  rect.class = "note";
  const g = elem.append("g");
  const rectElem = svgDraw.drawRect(g, rect);
  const textObj = svgDrawCommon08f97a94.getTextObj();
  textObj.x = noteModel.startx;
  textObj.y = noteModel.starty;
  textObj.width = rect.width;
  textObj.dy = "1em";
  textObj.text = noteModel.message;
  textObj.class = "noteText";
  textObj.fontFamily = conf.noteFontFamily;
  textObj.fontSize = conf.noteFontSize;
  textObj.fontWeight = conf.noteFontWeight;
  textObj.anchor = conf.noteAlign;
  textObj.textMargin = conf.noteMargin;
  textObj.valign = "center";
  const textElem = index.hasKatex(textObj.text) ? await drawKatex(g, textObj) : drawText(g, textObj);
  const textHeight = Math.round(
    textElem.map((te) => (te._groups || te)[0][0].getBBox().height).reduce((acc, curr) => acc + curr)
  );
  rectElem.attr("height", textHeight + 2 * conf.noteMargin);
  noteModel.height += textHeight + 2 * conf.noteMargin;
  bounds.bumpVerticalPos(textHeight + 2 * conf.noteMargin);
  noteModel.stopy = noteModel.starty + textHeight + 2 * conf.noteMargin;
  noteModel.stopx = noteModel.startx + rect.width;
  bounds.insert(noteModel.startx, noteModel.starty, noteModel.stopx, noteModel.stopy);
  bounds.models.addNote(noteModel);
};
const messageFont = (cnf) => {
  return {
    fontFamily: cnf.messageFontFamily,
    fontSize: cnf.messageFontSize,
    fontWeight: cnf.messageFontWeight
  };
};
const noteFont = (cnf) => {
  return {
    fontFamily: cnf.noteFontFamily,
    fontSize: cnf.noteFontSize,
    fontWeight: cnf.noteFontWeight
  };
};
const actorFont = (cnf) => {
  return {
    fontFamily: cnf.actorFontFamily,
    fontSize: cnf.actorFontSize,
    fontWeight: cnf.actorFontWeight
  };
};
async function boundMessage(_diagram, msgModel) {
  bounds.bumpVerticalPos(10);
  const { startx, stopx, message } = msgModel;
  const lines = index.common$1.splitBreaks(message).length;
  const isKatexMsg = index.hasKatex(message);
  const textDims = isKatexMsg ? await index.calculateMathMLDimensions(message, index.getConfig()) : index.utils.calculateTextDimensions(message, messageFont(conf));
  if (!isKatexMsg) {
    const lineHeight = textDims.height / lines;
    msgModel.height += lineHeight;
    bounds.bumpVerticalPos(lineHeight);
  }
  let lineStartY;
  let totalOffset = textDims.height - 10;
  const textWidth = textDims.width;
  if (startx === stopx) {
    lineStartY = bounds.getVerticalPos() + totalOffset;
    if (!conf.rightAngles) {
      totalOffset += conf.boxMargin;
      lineStartY = bounds.getVerticalPos() + totalOffset;
    }
    totalOffset += 30;
    const dx = index.common$1.getMax(textWidth / 2, conf.width / 2);
    bounds.insert(
      startx - dx,
      bounds.getVerticalPos() - 10 + totalOffset,
      stopx + dx,
      bounds.getVerticalPos() + 30 + totalOffset
    );
  } else {
    totalOffset += conf.boxMargin;
    lineStartY = bounds.getVerticalPos() + totalOffset;
    bounds.insert(startx, lineStartY - 10, stopx, lineStartY);
  }
  bounds.bumpVerticalPos(totalOffset);
  msgModel.height += totalOffset;
  msgModel.stopy = msgModel.starty + msgModel.height;
  bounds.insert(msgModel.fromBounds, msgModel.starty, msgModel.toBounds, msgModel.stopy);
  return lineStartY;
}
const drawMessage = async function(diagram2, msgModel, lineStartY, diagObj) {
  const { startx, stopx, starty, message, type, sequenceIndex, sequenceVisible } = msgModel;
  const textDims = index.utils.calculateTextDimensions(message, messageFont(conf));
  const textObj = svgDrawCommon08f97a94.getTextObj();
  textObj.x = startx;
  textObj.y = starty + 10;
  textObj.width = stopx - startx;
  textObj.class = "messageText";
  textObj.dy = "1em";
  textObj.text = message;
  textObj.fontFamily = conf.messageFontFamily;
  textObj.fontSize = conf.messageFontSize;
  textObj.fontWeight = conf.messageFontWeight;
  textObj.anchor = conf.messageAlign;
  textObj.valign = "center";
  textObj.textMargin = conf.wrapPadding;
  textObj.tspan = false;
  index.hasKatex(textObj.text) ? await drawKatex(diagram2, textObj, { startx, stopx, starty: lineStartY }) : drawText(diagram2, textObj);
  const textWidth = textDims.width;
  let line;
  if (startx === stopx) {
    if (conf.rightAngles) {
      line = diagram2.append("path").attr(
        "d",
        `M  ${startx},${lineStartY} H ${startx + index.common$1.getMax(conf.width / 2, textWidth / 2)} V ${lineStartY + 25} H ${startx}`
      );
    } else {
      line = diagram2.append("path").attr(
        "d",
        "M " + startx + "," + lineStartY + " C " + (startx + 60) + "," + (lineStartY - 10) + " " + (startx + 60) + "," + (lineStartY + 30) + " " + startx + "," + (lineStartY + 20)
      );
    }
  } else {
    line = diagram2.append("line");
    line.attr("x1", startx);
    line.attr("y1", lineStartY);
    line.attr("x2", stopx);
    line.attr("y2", lineStartY);
  }
  if (type === diagObj.db.LINETYPE.DOTTED || type === diagObj.db.LINETYPE.DOTTED_CROSS || type === diagObj.db.LINETYPE.DOTTED_POINT || type === diagObj.db.LINETYPE.DOTTED_OPEN) {
    line.style("stroke-dasharray", "3, 3");
    line.attr("class", "messageLine1");
  } else {
    line.attr("class", "messageLine0");
  }
  let url = "";
  if (conf.arrowMarkerAbsolute) {
    url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
    url = url.replace(/\(/g, "\\(");
    url = url.replace(/\)/g, "\\)");
  }
  line.attr("stroke-width", 2);
  line.attr("stroke", "none");
  line.style("fill", "none");
  if (type === diagObj.db.LINETYPE.SOLID || type === diagObj.db.LINETYPE.DOTTED) {
    line.attr("marker-end", "url(" + url + "#arrowhead)");
  }
  if (type === diagObj.db.LINETYPE.SOLID_POINT || type === diagObj.db.LINETYPE.DOTTED_POINT) {
    line.attr("marker-end", "url(" + url + "#filled-head)");
  }
  if (type === diagObj.db.LINETYPE.SOLID_CROSS || type === diagObj.db.LINETYPE.DOTTED_CROSS) {
    line.attr("marker-end", "url(" + url + "#crosshead)");
  }
  if (sequenceVisible || conf.showSequenceNumbers) {
    line.attr("marker-start", "url(" + url + "#sequencenumber)");
    diagram2.append("text").attr("x", startx).attr("y", lineStartY + 4).attr("font-family", "sans-serif").attr("font-size", "12px").attr("text-anchor", "middle").attr("class", "sequenceNumber").text(sequenceIndex);
  }
};
const addActorRenderingData = async function(diagram2, actors, createdActors, actorKeys, verticalPos, messages, isFooter) {
  let prevWidth = 0;
  let prevMargin = 0;
  let prevBox = void 0;
  let maxHeight = 0;
  for (const actorKey of actorKeys) {
    const actor = actors[actorKey];
    const box = actor.box;
    if (prevBox && prevBox != box) {
      if (!isFooter) {
        bounds.models.addBox(prevBox);
      }
      prevMargin += conf.boxMargin + prevBox.margin;
    }
    if (box && box != prevBox) {
      if (!isFooter) {
        box.x = prevWidth + prevMargin;
        box.y = verticalPos;
      }
      prevMargin += box.margin;
    }
    actor.width = actor.width || conf.width;
    actor.height = index.common$1.getMax(actor.height || conf.height, conf.height);
    actor.margin = actor.margin || conf.actorMargin;
    maxHeight = index.common$1.getMax(maxHeight, actor.height);
    if (createdActors[actor.name]) {
      prevMargin += actor.width / 2;
    }
    actor.x = prevWidth + prevMargin;
    actor.starty = bounds.getVerticalPos();
    bounds.insert(actor.x, verticalPos, actor.x + actor.width, actor.height);
    prevWidth += actor.width + prevMargin;
    if (actor.box) {
      actor.box.width = prevWidth + box.margin - actor.box.x;
    }
    prevMargin = actor.margin;
    prevBox = actor.box;
    bounds.models.addActor(actor);
  }
  if (prevBox && !isFooter) {
    bounds.models.addBox(prevBox);
  }
  bounds.bumpVerticalPos(maxHeight);
};
const drawActors = async function(diagram2, actors, actorKeys, isFooter) {
  if (!isFooter) {
    for (const actorKey of actorKeys) {
      const actor = actors[actorKey];
      await svgDraw.drawActor(diagram2, actor, conf, false);
    }
  } else {
    let maxHeight = 0;
    bounds.bumpVerticalPos(conf.boxMargin * 2);
    for (const actorKey of actorKeys) {
      const actor = actors[actorKey];
      if (!actor.stopy) {
        actor.stopy = bounds.getVerticalPos();
      }
      const height = await svgDraw.drawActor(diagram2, actor, conf, true);
      maxHeight = index.common$1.getMax(maxHeight, height);
    }
    bounds.bumpVerticalPos(maxHeight + conf.boxMargin);
  }
};
const drawActorsPopup = function(diagram2, actors, actorKeys, doc) {
  let maxHeight = 0;
  let maxWidth = 0;
  for (const actorKey of actorKeys) {
    const actor = actors[actorKey];
    const minMenuWidth = getRequiredPopupWidth(actor);
    const menuDimensions = svgDraw.drawPopup(
      diagram2,
      actor,
      minMenuWidth,
      conf,
      conf.forceMenus,
      doc
    );
    if (menuDimensions.height > maxHeight) {
      maxHeight = menuDimensions.height;
    }
    if (menuDimensions.width + actor.x > maxWidth) {
      maxWidth = menuDimensions.width + actor.x;
    }
  }
  return { maxHeight, maxWidth };
};
const setConf = function(cnf) {
  index.assignWithDepth$1(conf, cnf);
  if (cnf.fontFamily) {
    conf.actorFontFamily = conf.noteFontFamily = conf.messageFontFamily = cnf.fontFamily;
  }
  if (cnf.fontSize) {
    conf.actorFontSize = conf.noteFontSize = conf.messageFontSize = cnf.fontSize;
  }
  if (cnf.fontWeight) {
    conf.actorFontWeight = conf.noteFontWeight = conf.messageFontWeight = cnf.fontWeight;
  }
};
const actorActivations = function(actor) {
  return bounds.activations.filter(function(activation) {
    return activation.actor === actor;
  });
};
const activationBounds = function(actor, actors) {
  const actorObj = actors[actor];
  const activations = actorActivations(actor);
  const left = activations.reduce(function(acc, activation) {
    return index.common$1.getMin(acc, activation.startx);
  }, actorObj.x + actorObj.width / 2 - 1);
  const right = activations.reduce(function(acc, activation) {
    return index.common$1.getMax(acc, activation.stopx);
  }, actorObj.x + actorObj.width / 2 + 1);
  return [left, right];
};
function adjustLoopHeightForWrap(loopWidths, msg, preMargin, postMargin, addLoopFn) {
  bounds.bumpVerticalPos(preMargin);
  let heightAdjust = postMargin;
  if (msg.id && msg.message && loopWidths[msg.id]) {
    const loopWidth = loopWidths[msg.id].width;
    const textConf = messageFont(conf);
    msg.message = index.utils.wrapLabel(`[${msg.message}]`, loopWidth - 2 * conf.wrapPadding, textConf);
    msg.width = loopWidth;
    msg.wrap = true;
    const textDims = index.utils.calculateTextDimensions(msg.message, textConf);
    const totalOffset = index.common$1.getMax(textDims.height, conf.labelBoxHeight);
    heightAdjust = postMargin + totalOffset;
    index.log$1.debug(`${totalOffset} - ${msg.message}`);
  }
  addLoopFn(msg);
  bounds.bumpVerticalPos(heightAdjust);
}
function adjustCreatedDestroyedData(msg, msgModel, lineStartY, index, actors, createdActors, destroyedActors) {
  function receiverAdjustment(actor, adjustment) {
    if (actor.x < actors[msg.from].x) {
      bounds.insert(
        msgModel.stopx - adjustment,
        msgModel.starty,
        msgModel.startx,
        msgModel.stopy + actor.height / 2 + conf.noteMargin
      );
      msgModel.stopx = msgModel.stopx + adjustment;
    } else {
      bounds.insert(
        msgModel.startx,
        msgModel.starty,
        msgModel.stopx + adjustment,
        msgModel.stopy + actor.height / 2 + conf.noteMargin
      );
      msgModel.stopx = msgModel.stopx - adjustment;
    }
  }
  function senderAdjustment(actor, adjustment) {
    if (actor.x < actors[msg.to].x) {
      bounds.insert(
        msgModel.startx - adjustment,
        msgModel.starty,
        msgModel.stopx,
        msgModel.stopy + actor.height / 2 + conf.noteMargin
      );
      msgModel.startx = msgModel.startx + adjustment;
    } else {
      bounds.insert(
        msgModel.stopx,
        msgModel.starty,
        msgModel.startx + adjustment,
        msgModel.stopy + actor.height / 2 + conf.noteMargin
      );
      msgModel.startx = msgModel.startx - adjustment;
    }
  }
  if (createdActors[msg.to] == index) {
    const actor = actors[msg.to];
    const adjustment = actor.type == "actor" ? ACTOR_TYPE_WIDTH / 2 + 3 : actor.width / 2 + 3;
    receiverAdjustment(actor, adjustment);
    actor.starty = lineStartY - actor.height / 2;
    bounds.bumpVerticalPos(actor.height / 2);
  } else if (destroyedActors[msg.from] == index) {
    const actor = actors[msg.from];
    if (conf.mirrorActors) {
      const adjustment = actor.type == "actor" ? ACTOR_TYPE_WIDTH / 2 : actor.width / 2;
      senderAdjustment(actor, adjustment);
    }
    actor.stopy = lineStartY - actor.height / 2;
    bounds.bumpVerticalPos(actor.height / 2);
  } else if (destroyedActors[msg.to] == index) {
    const actor = actors[msg.to];
    if (conf.mirrorActors) {
      const adjustment = actor.type == "actor" ? ACTOR_TYPE_WIDTH / 2 + 3 : actor.width / 2 + 3;
      receiverAdjustment(actor, adjustment);
    }
    actor.stopy = lineStartY - actor.height / 2;
    bounds.bumpVerticalPos(actor.height / 2);
  }
}
const draw = async function(_text, id, _version, diagObj) {
  const { securityLevel, sequence } = index.getConfig();
  conf = sequence;
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = index.select("#i" + id);
  }
  const root = securityLevel === "sandbox" ? index.select(sandboxElement.nodes()[0].contentDocument.body) : index.select("body");
  const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
  bounds.init();
  index.log$1.debug(diagObj.db);
  const diagram2 = securityLevel === "sandbox" ? root.select(`[id="${id}"]`) : index.select(`[id="${id}"]`);
  const actors = diagObj.db.getActors();
  const createdActors = diagObj.db.getCreatedActors();
  const destroyedActors = diagObj.db.getDestroyedActors();
  const boxes = diagObj.db.getBoxes();
  let actorKeys = diagObj.db.getActorKeys();
  const messages = diagObj.db.getMessages();
  const title = diagObj.db.getDiagramTitle();
  const hasBoxes = diagObj.db.hasAtLeastOneBox();
  const hasBoxTitles = diagObj.db.hasAtLeastOneBoxWithTitle();
  const maxMessageWidthPerActor = await getMaxMessageWidthPerActor(actors, messages, diagObj);
  conf.height = await calculateActorMargins(actors, maxMessageWidthPerActor, boxes);
  svgDraw.insertComputerIcon(diagram2);
  svgDraw.insertDatabaseIcon(diagram2);
  svgDraw.insertClockIcon(diagram2);
  if (hasBoxes) {
    bounds.bumpVerticalPos(conf.boxMargin);
    if (hasBoxTitles) {
      bounds.bumpVerticalPos(boxes[0].textMaxHeight);
    }
  }
  if (conf.hideUnusedParticipants === true) {
    const newActors = /* @__PURE__ */ new Set();
    messages.forEach((message) => {
      newActors.add(message.from);
      newActors.add(message.to);
    });
    actorKeys = actorKeys.filter((actorKey) => newActors.has(actorKey));
  }
  await addActorRenderingData(diagram2, actors, createdActors, actorKeys, 0, messages, false);
  const loopWidths = await calculateLoopBounds(messages, actors, maxMessageWidthPerActor, diagObj);
  svgDraw.insertArrowHead(diagram2);
  svgDraw.insertArrowCrossHead(diagram2);
  svgDraw.insertArrowFilledHead(diagram2);
  svgDraw.insertSequenceNumber(diagram2);
  function activeEnd(msg, verticalPos) {
    const activationData = bounds.endActivation(msg);
    if (activationData.starty + 18 > verticalPos) {
      activationData.starty = verticalPos - 6;
      verticalPos += 12;
    }
    svgDraw.drawActivation(
      diagram2,
      activationData,
      verticalPos,
      conf,
      actorActivations(msg.from.actor).length
    );
    bounds.insert(activationData.startx, verticalPos - 10, activationData.stopx, verticalPos);
  }
  let sequenceIndex = 1;
  let sequenceIndexStep = 1;
  const messagesToDraw = [];
  const backgrounds = [];
  let index$1 = 0;
  for (const msg of messages) {
    let loopModel, noteModel, msgModel;
    switch (msg.type) {
      case diagObj.db.LINETYPE.NOTE:
        bounds.resetVerticalPos();
        noteModel = msg.noteModel;
        await drawNote(diagram2, noteModel);
        break;
      case diagObj.db.LINETYPE.ACTIVE_START:
        bounds.newActivation(msg, diagram2, actors);
        break;
      case diagObj.db.LINETYPE.ACTIVE_END:
        activeEnd(msg, bounds.getVerticalPos());
        break;
      case diagObj.db.LINETYPE.LOOP_START:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin,
          conf.boxMargin + conf.boxTextMargin,
          (message) => bounds.newLoop(message)
        );
        break;
      case diagObj.db.LINETYPE.LOOP_END:
        loopModel = bounds.endLoop();
        await svgDraw.drawLoop(diagram2, loopModel, "loop", conf);
        bounds.bumpVerticalPos(loopModel.stopy - bounds.getVerticalPos());
        bounds.models.addLoop(loopModel);
        break;
      case diagObj.db.LINETYPE.RECT_START:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin,
          conf.boxMargin,
          (message) => bounds.newLoop(void 0, message.message)
        );
        break;
      case diagObj.db.LINETYPE.RECT_END:
        loopModel = bounds.endLoop();
        backgrounds.push(loopModel);
        bounds.models.addLoop(loopModel);
        bounds.bumpVerticalPos(loopModel.stopy - bounds.getVerticalPos());
        break;
      case diagObj.db.LINETYPE.OPT_START:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin,
          conf.boxMargin + conf.boxTextMargin,
          (message) => bounds.newLoop(message)
        );
        break;
      case diagObj.db.LINETYPE.OPT_END:
        loopModel = bounds.endLoop();
        await svgDraw.drawLoop(diagram2, loopModel, "opt", conf);
        bounds.bumpVerticalPos(loopModel.stopy - bounds.getVerticalPos());
        bounds.models.addLoop(loopModel);
        break;
      case diagObj.db.LINETYPE.ALT_START:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin,
          conf.boxMargin + conf.boxTextMargin,
          (message) => bounds.newLoop(message)
        );
        break;
      case diagObj.db.LINETYPE.ALT_ELSE:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin + conf.boxTextMargin,
          conf.boxMargin,
          (message) => bounds.addSectionToLoop(message)
        );
        break;
      case diagObj.db.LINETYPE.ALT_END:
        loopModel = bounds.endLoop();
        await svgDraw.drawLoop(diagram2, loopModel, "alt", conf);
        bounds.bumpVerticalPos(loopModel.stopy - bounds.getVerticalPos());
        bounds.models.addLoop(loopModel);
        break;
      case diagObj.db.LINETYPE.PAR_START:
      case diagObj.db.LINETYPE.PAR_OVER_START:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin,
          conf.boxMargin + conf.boxTextMargin,
          (message) => bounds.newLoop(message)
        );
        bounds.saveVerticalPos();
        break;
      case diagObj.db.LINETYPE.PAR_AND:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin + conf.boxTextMargin,
          conf.boxMargin,
          (message) => bounds.addSectionToLoop(message)
        );
        break;
      case diagObj.db.LINETYPE.PAR_END:
        loopModel = bounds.endLoop();
        await svgDraw.drawLoop(diagram2, loopModel, "par", conf);
        bounds.bumpVerticalPos(loopModel.stopy - bounds.getVerticalPos());
        bounds.models.addLoop(loopModel);
        break;
      case diagObj.db.LINETYPE.AUTONUMBER:
        sequenceIndex = msg.message.start || sequenceIndex;
        sequenceIndexStep = msg.message.step || sequenceIndexStep;
        if (msg.message.visible) {
          diagObj.db.enableSequenceNumbers();
        } else {
          diagObj.db.disableSequenceNumbers();
        }
        break;
      case diagObj.db.LINETYPE.CRITICAL_START:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin,
          conf.boxMargin + conf.boxTextMargin,
          (message) => bounds.newLoop(message)
        );
        break;
      case diagObj.db.LINETYPE.CRITICAL_OPTION:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin + conf.boxTextMargin,
          conf.boxMargin,
          (message) => bounds.addSectionToLoop(message)
        );
        break;
      case diagObj.db.LINETYPE.CRITICAL_END:
        loopModel = bounds.endLoop();
        await svgDraw.drawLoop(diagram2, loopModel, "critical", conf);
        bounds.bumpVerticalPos(loopModel.stopy - bounds.getVerticalPos());
        bounds.models.addLoop(loopModel);
        break;
      case diagObj.db.LINETYPE.BREAK_START:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin,
          conf.boxMargin + conf.boxTextMargin,
          (message) => bounds.newLoop(message)
        );
        break;
      case diagObj.db.LINETYPE.BREAK_END:
        loopModel = bounds.endLoop();
        await svgDraw.drawLoop(diagram2, loopModel, "break", conf);
        bounds.bumpVerticalPos(loopModel.stopy - bounds.getVerticalPos());
        bounds.models.addLoop(loopModel);
        break;
      default:
        try {
          msgModel = msg.msgModel;
          msgModel.starty = bounds.getVerticalPos();
          msgModel.sequenceIndex = sequenceIndex;
          msgModel.sequenceVisible = diagObj.db.showSequenceNumbers();
          const lineStartY = await boundMessage(diagram2, msgModel);
          adjustCreatedDestroyedData(
            msg,
            msgModel,
            lineStartY,
            index$1,
            actors,
            createdActors,
            destroyedActors
          );
          messagesToDraw.push({ messageModel: msgModel, lineStartY });
          bounds.models.addMessage(msgModel);
        } catch (e) {
          index.log$1.error("error while drawing message", e);
        }
    }
    if ([
      diagObj.db.LINETYPE.SOLID_OPEN,
      diagObj.db.LINETYPE.DOTTED_OPEN,
      diagObj.db.LINETYPE.SOLID,
      diagObj.db.LINETYPE.DOTTED,
      diagObj.db.LINETYPE.SOLID_CROSS,
      diagObj.db.LINETYPE.DOTTED_CROSS,
      diagObj.db.LINETYPE.SOLID_POINT,
      diagObj.db.LINETYPE.DOTTED_POINT
    ].includes(msg.type)) {
      sequenceIndex = sequenceIndex + sequenceIndexStep;
    }
    index$1++;
  }
  index.log$1.debug("createdActors", createdActors);
  index.log$1.debug("destroyedActors", destroyedActors);
  await drawActors(diagram2, actors, actorKeys, false);
  for (const e of messagesToDraw) {
    await drawMessage(diagram2, e.messageModel, e.lineStartY, diagObj);
  }
  if (conf.mirrorActors) {
    await drawActors(diagram2, actors, actorKeys, true);
  }
  backgrounds.forEach((e) => svgDraw.drawBackgroundRect(diagram2, e));
  fixLifeLineHeights(diagram2, actors, actorKeys, conf);
  for (const box2 of bounds.models.boxes) {
    box2.height = bounds.getVerticalPos() - box2.y;
    bounds.insert(box2.x, box2.y, box2.x + box2.width, box2.height);
    box2.startx = box2.x;
    box2.starty = box2.y;
    box2.stopx = box2.startx + box2.width;
    box2.stopy = box2.starty + box2.height;
    box2.stroke = "rgb(0,0,0, 0.5)";
    await svgDraw.drawBox(diagram2, box2, conf);
  }
  if (hasBoxes) {
    bounds.bumpVerticalPos(conf.boxMargin);
  }
  const requiredBoxSize = drawActorsPopup(diagram2, actors, actorKeys, doc);
  const { bounds: box } = bounds.getBounds();
  let boxHeight = box.stopy - box.starty;
  if (boxHeight < requiredBoxSize.maxHeight) {
    boxHeight = requiredBoxSize.maxHeight;
  }
  let height = boxHeight + 2 * conf.diagramMarginY;
  if (conf.mirrorActors) {
    height = height - conf.boxMargin + conf.bottomMarginAdj;
  }
  let boxWidth = box.stopx - box.startx;
  if (boxWidth < requiredBoxSize.maxWidth) {
    boxWidth = requiredBoxSize.maxWidth;
  }
  const width = boxWidth + 2 * conf.diagramMarginX;
  if (title) {
    diagram2.append("text").text(title).attr("x", (box.stopx - box.startx) / 2 - 2 * conf.diagramMarginX).attr("y", -25);
  }
  index.configureSvgSize(diagram2, height, width, conf.useMaxWidth);
  const extraVertForTitle = title ? 40 : 0;
  diagram2.attr(
    "viewBox",
    box.startx - conf.diagramMarginX + " -" + (conf.diagramMarginY + extraVertForTitle) + " " + width + " " + (height + extraVertForTitle)
  );
  index.log$1.debug(`models:`, bounds.models);
};
async function getMaxMessageWidthPerActor(actors, messages, diagObj) {
  const maxMessageWidthPerActor = {};
  for (const msg of messages) {
    if (actors[msg.to] && actors[msg.from]) {
      const actor = actors[msg.to];
      if (msg.placement === diagObj.db.PLACEMENT.LEFTOF && !actor.prevActor) {
        continue;
      }
      if (msg.placement === diagObj.db.PLACEMENT.RIGHTOF && !actor.nextActor) {
        continue;
      }
      const isNote = msg.placement !== void 0;
      const isMessage = !isNote;
      const textFont = isNote ? noteFont(conf) : messageFont(conf);
      const wrappedMessage = msg.wrap ? index.utils.wrapLabel(msg.message, conf.width - 2 * conf.wrapPadding, textFont) : msg.message;
      const messageDimensions = index.hasKatex(wrappedMessage) ? await index.calculateMathMLDimensions(msg.message, index.getConfig()) : index.utils.calculateTextDimensions(wrappedMessage, textFont);
      const messageWidth = messageDimensions.width + 2 * conf.wrapPadding;
      if (isMessage && msg.from === actor.nextActor) {
        maxMessageWidthPerActor[msg.to] = index.common$1.getMax(
          maxMessageWidthPerActor[msg.to] || 0,
          messageWidth
        );
      } else if (isMessage && msg.from === actor.prevActor) {
        maxMessageWidthPerActor[msg.from] = index.common$1.getMax(
          maxMessageWidthPerActor[msg.from] || 0,
          messageWidth
        );
      } else if (isMessage && msg.from === msg.to) {
        maxMessageWidthPerActor[msg.from] = index.common$1.getMax(
          maxMessageWidthPerActor[msg.from] || 0,
          messageWidth / 2
        );
        maxMessageWidthPerActor[msg.to] = index.common$1.getMax(
          maxMessageWidthPerActor[msg.to] || 0,
          messageWidth / 2
        );
      } else if (msg.placement === diagObj.db.PLACEMENT.RIGHTOF) {
        maxMessageWidthPerActor[msg.from] = index.common$1.getMax(
          maxMessageWidthPerActor[msg.from] || 0,
          messageWidth
        );
      } else if (msg.placement === diagObj.db.PLACEMENT.LEFTOF) {
        maxMessageWidthPerActor[actor.prevActor] = index.common$1.getMax(
          maxMessageWidthPerActor[actor.prevActor] || 0,
          messageWidth
        );
      } else if (msg.placement === diagObj.db.PLACEMENT.OVER) {
        if (actor.prevActor) {
          maxMessageWidthPerActor[actor.prevActor] = index.common$1.getMax(
            maxMessageWidthPerActor[actor.prevActor] || 0,
            messageWidth / 2
          );
        }
        if (actor.nextActor) {
          maxMessageWidthPerActor[msg.from] = index.common$1.getMax(
            maxMessageWidthPerActor[msg.from] || 0,
            messageWidth / 2
          );
        }
      }
    }
  }
  index.log$1.debug("maxMessageWidthPerActor:", maxMessageWidthPerActor);
  return maxMessageWidthPerActor;
}
const getRequiredPopupWidth = function(actor) {
  let requiredPopupWidth = 0;
  const textFont = actorFont(conf);
  for (const key in actor.links) {
    const labelDimensions = index.utils.calculateTextDimensions(key, textFont);
    const labelWidth = labelDimensions.width + 2 * conf.wrapPadding + 2 * conf.boxMargin;
    if (requiredPopupWidth < labelWidth) {
      requiredPopupWidth = labelWidth;
    }
  }
  return requiredPopupWidth;
};
async function calculateActorMargins(actors, actorToMessageWidth, boxes) {
  let maxHeight = 0;
  for (const prop of Object.keys(actors)) {
    const actor = actors[prop];
    if (actor.wrap) {
      actor.description = index.utils.wrapLabel(
        actor.description,
        conf.width - 2 * conf.wrapPadding,
        actorFont(conf)
      );
    }
    const actDims = index.hasKatex(actor.description) ? await index.calculateMathMLDimensions(actor.description, index.getConfig()) : index.utils.calculateTextDimensions(actor.description, actorFont(conf));
    actor.width = actor.wrap ? conf.width : index.common$1.getMax(conf.width, actDims.width + 2 * conf.wrapPadding);
    actor.height = actor.wrap ? index.common$1.getMax(actDims.height, conf.height) : conf.height;
    maxHeight = index.common$1.getMax(maxHeight, actor.height);
  }
  for (const actorKey in actorToMessageWidth) {
    const actor = actors[actorKey];
    if (!actor) {
      continue;
    }
    const nextActor = actors[actor.nextActor];
    if (!nextActor) {
      const messageWidth2 = actorToMessageWidth[actorKey];
      const actorWidth2 = messageWidth2 + conf.actorMargin - actor.width / 2;
      actor.margin = index.common$1.getMax(actorWidth2, conf.actorMargin);
      continue;
    }
    const messageWidth = actorToMessageWidth[actorKey];
    const actorWidth = messageWidth + conf.actorMargin - actor.width / 2 - nextActor.width / 2;
    actor.margin = index.common$1.getMax(actorWidth, conf.actorMargin);
  }
  let maxBoxHeight = 0;
  boxes.forEach((box) => {
    const textFont = messageFont(conf);
    let totalWidth = box.actorKeys.reduce((total, aKey) => {
      return total += actors[aKey].width + (actors[aKey].margin || 0);
    }, 0);
    totalWidth -= 2 * conf.boxTextMargin;
    if (box.wrap) {
      box.name = index.utils.wrapLabel(box.name, totalWidth - 2 * conf.wrapPadding, textFont);
    }
    const boxMsgDimensions = index.utils.calculateTextDimensions(box.name, textFont);
    maxBoxHeight = index.common$1.getMax(boxMsgDimensions.height, maxBoxHeight);
    const minWidth = index.common$1.getMax(totalWidth, boxMsgDimensions.width + 2 * conf.wrapPadding);
    box.margin = conf.boxTextMargin;
    if (totalWidth < minWidth) {
      const missing = (minWidth - totalWidth) / 2;
      box.margin += missing;
    }
  });
  boxes.forEach((box) => box.textMaxHeight = maxBoxHeight);
  return index.common$1.getMax(maxHeight, conf.height);
}
const buildNoteModel = async function(msg, actors, diagObj) {
  const startx = actors[msg.from].x;
  const stopx = actors[msg.to].x;
  const shouldWrap = msg.wrap && msg.message;
  let textDimensions = index.hasKatex(msg.message) ? await index.calculateMathMLDimensions(msg.message, index.getConfig()) : index.utils.calculateTextDimensions(
    shouldWrap ? index.utils.wrapLabel(msg.message, conf.width, noteFont(conf)) : msg.message,
    noteFont(conf)
  );
  const noteModel = {
    width: shouldWrap ? conf.width : index.common$1.getMax(conf.width, textDimensions.width + 2 * conf.noteMargin),
    height: 0,
    startx: actors[msg.from].x,
    stopx: 0,
    starty: 0,
    stopy: 0,
    message: msg.message
  };
  if (msg.placement === diagObj.db.PLACEMENT.RIGHTOF) {
    noteModel.width = shouldWrap ? index.common$1.getMax(conf.width, textDimensions.width) : index.common$1.getMax(
      actors[msg.from].width / 2 + actors[msg.to].width / 2,
      textDimensions.width + 2 * conf.noteMargin
    );
    noteModel.startx = startx + (actors[msg.from].width + conf.actorMargin) / 2;
  } else if (msg.placement === diagObj.db.PLACEMENT.LEFTOF) {
    noteModel.width = shouldWrap ? index.common$1.getMax(conf.width, textDimensions.width + 2 * conf.noteMargin) : index.common$1.getMax(
      actors[msg.from].width / 2 + actors[msg.to].width / 2,
      textDimensions.width + 2 * conf.noteMargin
    );
    noteModel.startx = startx - noteModel.width + (actors[msg.from].width - conf.actorMargin) / 2;
  } else if (msg.to === msg.from) {
    textDimensions = index.utils.calculateTextDimensions(
      shouldWrap ? index.utils.wrapLabel(
        msg.message,
        index.common$1.getMax(conf.width, actors[msg.from].width),
        noteFont(conf)
      ) : msg.message,
      noteFont(conf)
    );
    noteModel.width = shouldWrap ? index.common$1.getMax(conf.width, actors[msg.from].width) : index.common$1.getMax(
      actors[msg.from].width,
      conf.width,
      textDimensions.width + 2 * conf.noteMargin
    );
    noteModel.startx = startx + (actors[msg.from].width - noteModel.width) / 2;
  } else {
    noteModel.width = Math.abs(startx + actors[msg.from].width / 2 - (stopx + actors[msg.to].width / 2)) + conf.actorMargin;
    noteModel.startx = startx < stopx ? startx + actors[msg.from].width / 2 - conf.actorMargin / 2 : stopx + actors[msg.to].width / 2 - conf.actorMargin / 2;
  }
  if (shouldWrap) {
    noteModel.message = index.utils.wrapLabel(
      msg.message,
      noteModel.width - 2 * conf.wrapPadding,
      noteFont(conf)
    );
  }
  index.log$1.debug(
    `NM:[${noteModel.startx},${noteModel.stopx},${noteModel.starty},${noteModel.stopy}:${noteModel.width},${noteModel.height}=${msg.message}]`
  );
  return noteModel;
};
const buildMessageModel = function(msg, actors, diagObj) {
  if (![
    diagObj.db.LINETYPE.SOLID_OPEN,
    diagObj.db.LINETYPE.DOTTED_OPEN,
    diagObj.db.LINETYPE.SOLID,
    diagObj.db.LINETYPE.DOTTED,
    diagObj.db.LINETYPE.SOLID_CROSS,
    diagObj.db.LINETYPE.DOTTED_CROSS,
    diagObj.db.LINETYPE.SOLID_POINT,
    diagObj.db.LINETYPE.DOTTED_POINT
  ].includes(msg.type)) {
    return {};
  }
  const [fromLeft, fromRight] = activationBounds(msg.from, actors);
  const [toLeft, toRight] = activationBounds(msg.to, actors);
  const isArrowToRight = fromLeft <= toLeft;
  const startx = isArrowToRight ? fromRight : fromLeft;
  let stopx = isArrowToRight ? toLeft : toRight;
  const isArrowToActivation = Math.abs(toLeft - toRight) > 2;
  const adjustValue = (value) => {
    return isArrowToRight ? -value : value;
  };
  if (msg.from === msg.to) {
    stopx = startx;
  } else {
    if (msg.activate && !isArrowToActivation) {
      stopx += adjustValue(conf.activationWidth / 2 - 1);
    }
    if (![diagObj.db.LINETYPE.SOLID_OPEN, diagObj.db.LINETYPE.DOTTED_OPEN].includes(msg.type)) {
      stopx += adjustValue(3);
    }
  }
  const allBounds = [fromLeft, fromRight, toLeft, toRight];
  const boundedWidth = Math.abs(startx - stopx);
  if (msg.wrap && msg.message) {
    msg.message = index.utils.wrapLabel(
      msg.message,
      index.common$1.getMax(boundedWidth + 2 * conf.wrapPadding, conf.width),
      messageFont(conf)
    );
  }
  const msgDims = index.utils.calculateTextDimensions(msg.message, messageFont(conf));
  return {
    width: index.common$1.getMax(
      msg.wrap ? 0 : msgDims.width + 2 * conf.wrapPadding,
      boundedWidth + 2 * conf.wrapPadding,
      conf.width
    ),
    height: 0,
    startx,
    stopx,
    starty: 0,
    stopy: 0,
    message: msg.message,
    type: msg.type,
    wrap: msg.wrap,
    fromBounds: Math.min.apply(null, allBounds),
    toBounds: Math.max.apply(null, allBounds)
  };
};
const calculateLoopBounds = async function(messages, actors, _maxWidthPerActor, diagObj) {
  const loops = {};
  const stack = [];
  let current, noteModel, msgModel;
  for (const msg of messages) {
    msg.id = index.utils.random({ length: 10 });
    switch (msg.type) {
      case diagObj.db.LINETYPE.LOOP_START:
      case diagObj.db.LINETYPE.ALT_START:
      case diagObj.db.LINETYPE.OPT_START:
      case diagObj.db.LINETYPE.PAR_START:
      case diagObj.db.LINETYPE.PAR_OVER_START:
      case diagObj.db.LINETYPE.CRITICAL_START:
      case diagObj.db.LINETYPE.BREAK_START:
        stack.push({
          id: msg.id,
          msg: msg.message,
          from: Number.MAX_SAFE_INTEGER,
          to: Number.MIN_SAFE_INTEGER,
          width: 0
        });
        break;
      case diagObj.db.LINETYPE.ALT_ELSE:
      case diagObj.db.LINETYPE.PAR_AND:
      case diagObj.db.LINETYPE.CRITICAL_OPTION:
        if (msg.message) {
          current = stack.pop();
          loops[current.id] = current;
          loops[msg.id] = current;
          stack.push(current);
        }
        break;
      case diagObj.db.LINETYPE.LOOP_END:
      case diagObj.db.LINETYPE.ALT_END:
      case diagObj.db.LINETYPE.OPT_END:
      case diagObj.db.LINETYPE.PAR_END:
      case diagObj.db.LINETYPE.CRITICAL_END:
      case diagObj.db.LINETYPE.BREAK_END:
        current = stack.pop();
        loops[current.id] = current;
        break;
      case diagObj.db.LINETYPE.ACTIVE_START:
        {
          const actorRect = actors[msg.from ? msg.from.actor : msg.to.actor];
          const stackedSize = actorActivations(msg.from ? msg.from.actor : msg.to.actor).length;
          const x = actorRect.x + actorRect.width / 2 + (stackedSize - 1) * conf.activationWidth / 2;
          const toAdd = {
            startx: x,
            stopx: x + conf.activationWidth,
            actor: msg.from.actor,
            enabled: true
          };
          bounds.activations.push(toAdd);
        }
        break;
      case diagObj.db.LINETYPE.ACTIVE_END:
        {
          const lastActorActivationIdx = bounds.activations.map((a) => a.actor).lastIndexOf(msg.from.actor);
          delete bounds.activations.splice(lastActorActivationIdx, 1)[0];
        }
        break;
    }
    const isNote = msg.placement !== void 0;
    if (isNote) {
      noteModel = await buildNoteModel(msg, actors, diagObj);
      msg.noteModel = noteModel;
      stack.forEach((stk) => {
        current = stk;
        current.from = index.common$1.getMin(current.from, noteModel.startx);
        current.to = index.common$1.getMax(current.to, noteModel.startx + noteModel.width);
        current.width = index.common$1.getMax(current.width, Math.abs(current.from - current.to)) - conf.labelBoxWidth;
      });
    } else {
      msgModel = buildMessageModel(msg, actors, diagObj);
      msg.msgModel = msgModel;
      if (msgModel.startx && msgModel.stopx && stack.length > 0) {
        stack.forEach((stk) => {
          current = stk;
          if (msgModel.startx === msgModel.stopx) {
            const from = actors[msg.from];
            const to = actors[msg.to];
            current.from = index.common$1.getMin(
              from.x - msgModel.width / 2,
              from.x - from.width / 2,
              current.from
            );
            current.to = index.common$1.getMax(
              to.x + msgModel.width / 2,
              to.x + from.width / 2,
              current.to
            );
            current.width = index.common$1.getMax(current.width, Math.abs(current.to - current.from)) - conf.labelBoxWidth;
          } else {
            current.from = index.common$1.getMin(msgModel.startx, current.from);
            current.to = index.common$1.getMax(msgModel.stopx, current.to);
            current.width = index.common$1.getMax(current.width, msgModel.width) - conf.labelBoxWidth;
          }
        });
      }
    }
  }
  bounds.activations = [];
  index.log$1.debug("Loop type widths:", loops);
  return loops;
};
const renderer = {
  bounds,
  drawActors,
  drawActorsPopup,
  setConf,
  draw
};
const diagram = {
  parser: parser$1,
  db,
  renderer,
  styles,
  init: ({ wrap }) => {
    db.setWrap(wrap);
  }
};

exports.diagram = diagram;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VxdWVuY2VEaWFncmFtLTcwNDczMGYxLWQ2YWViYzYyLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvbWVybWFpZC9kaXN0L3NlcXVlbmNlRGlhZ3JhbS03MDQ3MzBmMS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnIGFzIGdldEFjY1RpdGxlLCB0IGFzIGdldERpYWdyYW1UaXRsZSwgcSBhcyBzZXREaWFncmFtVGl0bGUsIGMgYXMgZ2V0Q29uZmlnLCBzIGFzIHNldEFjY1RpdGxlLCBiIGFzIHNldEFjY0Rlc2NyaXB0aW9uLCBhIGFzIGdldEFjY0Rlc2NyaXB0aW9uLCB2IGFzIGNsZWFyJDEsIGwgYXMgbG9nLCBkIGFzIHNhbml0aXplVGV4dCwgZSBhcyBjb21tb24sIEQgYXMgcGFyc2VGb250U2l6ZSwgRyBhcyBoYXNLYXRleCwgciBhcyByZW5kZXJLYXRleCwgRiBhcyBnZXRDb25maWckMSwgWiBhcyBaRVJPX1dJRFRIX1NQQUNFLCBIIGFzIGNhbGN1bGF0ZU1hdGhNTERpbWVuc2lvbnMsIGYgYXMgYXNzaWduV2l0aERlcHRoLCBpIGFzIGNvbmZpZ3VyZVN2Z1NpemUsIHUgYXMgdXRpbHMgfSBmcm9tIFwiLi9tZXJtYWlkLWI1ODYwYjU0LmpzXCI7XG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IGQgYXMgZHJhd1JlY3QkMSwgYSBhcyBkcmF3QmFja2dyb3VuZFJlY3QkMSwgYiBhcyBkcmF3RW1iZWRkZWRJbWFnZSwgYyBhcyBkcmF3SW1hZ2UsIGUgYXMgZ2V0VGV4dE9iaiQxLCBnIGFzIGdldE5vdGVSZWN0JDEgfSBmcm9tIFwiLi9zdmdEcmF3Q29tbW9uLTA4Zjk3YTk0LmpzXCI7XG5pbXBvcnQgeyBzYW5pdGl6ZVVybCB9IGZyb20gXCJAYnJhaW50cmVlL3Nhbml0aXplLXVybFwiO1xuaW1wb3J0IFwidHMtZGVkZW50XCI7XG5pbXBvcnQgXCJkYXlqc1wiO1xuaW1wb3J0IFwiZG9tcHVyaWZ5XCI7XG5pbXBvcnQgXCJraHJvbWFcIjtcbmltcG9ydCBcImxvZGFzaC1lcy9tZW1vaXplLmpzXCI7XG5pbXBvcnQgXCJsb2Rhc2gtZXMvbWVyZ2UuanNcIjtcbmltcG9ydCBcInN0eWxpc1wiO1xuaW1wb3J0IFwibG9kYXNoLWVzL2lzRW1wdHkuanNcIjtcbnZhciBwYXJzZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG8gPSBmdW5jdGlvbihrLCB2LCBvMiwgbCkge1xuICAgIGZvciAobzIgPSBvMiB8fCB7fSwgbCA9IGsubGVuZ3RoOyBsLS07IG8yW2tbbF1dID0gdilcbiAgICAgIDtcbiAgICByZXR1cm4gbzI7XG4gIH0sICRWMCA9IFsxLCAyXSwgJFYxID0gWzEsIDNdLCAkVjIgPSBbMSwgNF0sICRWMyA9IFsyLCA0XSwgJFY0ID0gWzEsIDldLCAkVjUgPSBbMSwgMTFdLCAkVjYgPSBbMSwgMTNdLCAkVjcgPSBbMSwgMTRdLCAkVjggPSBbMSwgMTZdLCAkVjkgPSBbMSwgMTddLCAkVmEgPSBbMSwgMThdLCAkVmIgPSBbMSwgMjRdLCAkVmMgPSBbMSwgMjVdLCAkVmQgPSBbMSwgMjZdLCAkVmUgPSBbMSwgMjddLCAkVmYgPSBbMSwgMjhdLCAkVmcgPSBbMSwgMjldLCAkVmggPSBbMSwgMzBdLCAkVmkgPSBbMSwgMzFdLCAkVmogPSBbMSwgMzJdLCAkVmsgPSBbMSwgMzNdLCAkVmwgPSBbMSwgMzRdLCAkVm0gPSBbMSwgMzVdLCAkVm4gPSBbMSwgMzZdLCAkVm8gPSBbMSwgMzddLCAkVnAgPSBbMSwgMzhdLCAkVnEgPSBbMSwgMzldLCAkVnIgPSBbMSwgNDFdLCAkVnMgPSBbMSwgNDJdLCAkVnQgPSBbMSwgNDNdLCAkVnUgPSBbMSwgNDRdLCAkVnYgPSBbMSwgNDVdLCAkVncgPSBbMSwgNDZdLCAkVnggPSBbMSwgNCwgNSwgMTMsIDE0LCAxNiwgMTgsIDIxLCAyMywgMjksIDMwLCAzMSwgMzMsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDEsIDQzLCA0NCwgNDYsIDQ3LCA0OCwgNDksIDUwLCA1MiwgNTMsIDU0LCA1OSwgNjAsIDYxLCA2MiwgNzBdLCAkVnkgPSBbNCwgNSwgMTYsIDUwLCA1MiwgNTNdLCAkVnogPSBbNCwgNSwgMTMsIDE0LCAxNiwgMTgsIDIxLCAyMywgMjksIDMwLCAzMSwgMzMsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDEsIDQzLCA0NCwgNDYsIDUwLCA1MiwgNTMsIDU0LCA1OSwgNjAsIDYxLCA2MiwgNzBdLCAkVkEgPSBbNCwgNSwgMTMsIDE0LCAxNiwgMTgsIDIxLCAyMywgMjksIDMwLCAzMSwgMzMsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDEsIDQzLCA0NCwgNDYsIDQ5LCA1MCwgNTIsIDUzLCA1NCwgNTksIDYwLCA2MSwgNjIsIDcwXSwgJFZCID0gWzQsIDUsIDEzLCAxNCwgMTYsIDE4LCAyMSwgMjMsIDI5LCAzMCwgMzEsIDMzLCAzNSwgMzYsIDM3LCAzOCwgMzksIDQxLCA0MywgNDQsIDQ2LCA0OCwgNTAsIDUyLCA1MywgNTQsIDU5LCA2MCwgNjEsIDYyLCA3MF0sICRWQyA9IFs0LCA1LCAxMywgMTQsIDE2LCAxOCwgMjEsIDIzLCAyOSwgMzAsIDMxLCAzMywgMzUsIDM2LCAzNywgMzgsIDM5LCA0MSwgNDMsIDQ0LCA0NiwgNDcsIDUwLCA1MiwgNTMsIDU0LCA1OSwgNjAsIDYxLCA2MiwgNzBdLCAkVkQgPSBbNjgsIDY5LCA3MF0sICRWRSA9IFsxLCAxMjBdO1xuICB2YXIgcGFyc2VyMiA9IHtcbiAgICB0cmFjZTogZnVuY3Rpb24gdHJhY2UoKSB7XG4gICAgfSxcbiAgICB5eToge30sXG4gICAgc3ltYm9sc186IHsgXCJlcnJvclwiOiAyLCBcInN0YXJ0XCI6IDMsIFwiU1BBQ0VcIjogNCwgXCJORVdMSU5FXCI6IDUsIFwiU0RcIjogNiwgXCJkb2N1bWVudFwiOiA3LCBcImxpbmVcIjogOCwgXCJzdGF0ZW1lbnRcIjogOSwgXCJib3hfc2VjdGlvblwiOiAxMCwgXCJib3hfbGluZVwiOiAxMSwgXCJwYXJ0aWNpcGFudF9zdGF0ZW1lbnRcIjogMTIsIFwiY3JlYXRlXCI6IDEzLCBcImJveFwiOiAxNCwgXCJyZXN0T2ZMaW5lXCI6IDE1LCBcImVuZFwiOiAxNiwgXCJzaWduYWxcIjogMTcsIFwiYXV0b251bWJlclwiOiAxOCwgXCJOVU1cIjogMTksIFwib2ZmXCI6IDIwLCBcImFjdGl2YXRlXCI6IDIxLCBcImFjdG9yXCI6IDIyLCBcImRlYWN0aXZhdGVcIjogMjMsIFwibm90ZV9zdGF0ZW1lbnRcIjogMjQsIFwibGlua3Nfc3RhdGVtZW50XCI6IDI1LCBcImxpbmtfc3RhdGVtZW50XCI6IDI2LCBcInByb3BlcnRpZXNfc3RhdGVtZW50XCI6IDI3LCBcImRldGFpbHNfc3RhdGVtZW50XCI6IDI4LCBcInRpdGxlXCI6IDI5LCBcImxlZ2FjeV90aXRsZVwiOiAzMCwgXCJhY2NfdGl0bGVcIjogMzEsIFwiYWNjX3RpdGxlX3ZhbHVlXCI6IDMyLCBcImFjY19kZXNjclwiOiAzMywgXCJhY2NfZGVzY3JfdmFsdWVcIjogMzQsIFwiYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZVwiOiAzNSwgXCJsb29wXCI6IDM2LCBcInJlY3RcIjogMzcsIFwib3B0XCI6IDM4LCBcImFsdFwiOiAzOSwgXCJlbHNlX3NlY3Rpb25zXCI6IDQwLCBcInBhclwiOiA0MSwgXCJwYXJfc2VjdGlvbnNcIjogNDIsIFwicGFyX292ZXJcIjogNDMsIFwiY3JpdGljYWxcIjogNDQsIFwib3B0aW9uX3NlY3Rpb25zXCI6IDQ1LCBcImJyZWFrXCI6IDQ2LCBcIm9wdGlvblwiOiA0NywgXCJhbmRcIjogNDgsIFwiZWxzZVwiOiA0OSwgXCJwYXJ0aWNpcGFudFwiOiA1MCwgXCJBU1wiOiA1MSwgXCJwYXJ0aWNpcGFudF9hY3RvclwiOiA1MiwgXCJkZXN0cm95XCI6IDUzLCBcIm5vdGVcIjogNTQsIFwicGxhY2VtZW50XCI6IDU1LCBcInRleHQyXCI6IDU2LCBcIm92ZXJcIjogNTcsIFwiYWN0b3JfcGFpclwiOiA1OCwgXCJsaW5rc1wiOiA1OSwgXCJsaW5rXCI6IDYwLCBcInByb3BlcnRpZXNcIjogNjEsIFwiZGV0YWlsc1wiOiA2MiwgXCJzcGFjZUxpc3RcIjogNjMsIFwiLFwiOiA2NCwgXCJsZWZ0X29mXCI6IDY1LCBcInJpZ2h0X29mXCI6IDY2LCBcInNpZ25hbHR5cGVcIjogNjcsIFwiK1wiOiA2OCwgXCItXCI6IDY5LCBcIkFDVE9SXCI6IDcwLCBcIlNPTElEX09QRU5fQVJST1dcIjogNzEsIFwiRE9UVEVEX09QRU5fQVJST1dcIjogNzIsIFwiU09MSURfQVJST1dcIjogNzMsIFwiRE9UVEVEX0FSUk9XXCI6IDc0LCBcIlNPTElEX0NST1NTXCI6IDc1LCBcIkRPVFRFRF9DUk9TU1wiOiA3NiwgXCJTT0xJRF9QT0lOVFwiOiA3NywgXCJET1RURURfUE9JTlRcIjogNzgsIFwiVFhUXCI6IDc5LCBcIiRhY2NlcHRcIjogMCwgXCIkZW5kXCI6IDEgfSxcbiAgICB0ZXJtaW5hbHNfOiB7IDI6IFwiZXJyb3JcIiwgNDogXCJTUEFDRVwiLCA1OiBcIk5FV0xJTkVcIiwgNjogXCJTRFwiLCAxMzogXCJjcmVhdGVcIiwgMTQ6IFwiYm94XCIsIDE1OiBcInJlc3RPZkxpbmVcIiwgMTY6IFwiZW5kXCIsIDE4OiBcImF1dG9udW1iZXJcIiwgMTk6IFwiTlVNXCIsIDIwOiBcIm9mZlwiLCAyMTogXCJhY3RpdmF0ZVwiLCAyMzogXCJkZWFjdGl2YXRlXCIsIDI5OiBcInRpdGxlXCIsIDMwOiBcImxlZ2FjeV90aXRsZVwiLCAzMTogXCJhY2NfdGl0bGVcIiwgMzI6IFwiYWNjX3RpdGxlX3ZhbHVlXCIsIDMzOiBcImFjY19kZXNjclwiLCAzNDogXCJhY2NfZGVzY3JfdmFsdWVcIiwgMzU6IFwiYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZVwiLCAzNjogXCJsb29wXCIsIDM3OiBcInJlY3RcIiwgMzg6IFwib3B0XCIsIDM5OiBcImFsdFwiLCA0MTogXCJwYXJcIiwgNDM6IFwicGFyX292ZXJcIiwgNDQ6IFwiY3JpdGljYWxcIiwgNDY6IFwiYnJlYWtcIiwgNDc6IFwib3B0aW9uXCIsIDQ4OiBcImFuZFwiLCA0OTogXCJlbHNlXCIsIDUwOiBcInBhcnRpY2lwYW50XCIsIDUxOiBcIkFTXCIsIDUyOiBcInBhcnRpY2lwYW50X2FjdG9yXCIsIDUzOiBcImRlc3Ryb3lcIiwgNTQ6IFwibm90ZVwiLCA1NzogXCJvdmVyXCIsIDU5OiBcImxpbmtzXCIsIDYwOiBcImxpbmtcIiwgNjE6IFwicHJvcGVydGllc1wiLCA2MjogXCJkZXRhaWxzXCIsIDY0OiBcIixcIiwgNjU6IFwibGVmdF9vZlwiLCA2NjogXCJyaWdodF9vZlwiLCA2ODogXCIrXCIsIDY5OiBcIi1cIiwgNzA6IFwiQUNUT1JcIiwgNzE6IFwiU09MSURfT1BFTl9BUlJPV1wiLCA3MjogXCJET1RURURfT1BFTl9BUlJPV1wiLCA3MzogXCJTT0xJRF9BUlJPV1wiLCA3NDogXCJET1RURURfQVJST1dcIiwgNzU6IFwiU09MSURfQ1JPU1NcIiwgNzY6IFwiRE9UVEVEX0NST1NTXCIsIDc3OiBcIlNPTElEX1BPSU5UXCIsIDc4OiBcIkRPVFRFRF9QT0lOVFwiLCA3OTogXCJUWFRcIiB9LFxuICAgIHByb2R1Y3Rpb25zXzogWzAsIFszLCAyXSwgWzMsIDJdLCBbMywgMl0sIFs3LCAwXSwgWzcsIDJdLCBbOCwgMl0sIFs4LCAxXSwgWzgsIDFdLCBbMTAsIDBdLCBbMTAsIDJdLCBbMTEsIDJdLCBbMTEsIDFdLCBbMTEsIDFdLCBbOSwgMV0sIFs5LCAyXSwgWzksIDRdLCBbOSwgMl0sIFs5LCA0XSwgWzksIDNdLCBbOSwgM10sIFs5LCAyXSwgWzksIDNdLCBbOSwgM10sIFs5LCAyXSwgWzksIDJdLCBbOSwgMl0sIFs5LCAyXSwgWzksIDJdLCBbOSwgMV0sIFs5LCAxXSwgWzksIDJdLCBbOSwgMl0sIFs5LCAxXSwgWzksIDRdLCBbOSwgNF0sIFs5LCA0XSwgWzksIDRdLCBbOSwgNF0sIFs5LCA0XSwgWzksIDRdLCBbOSwgNF0sIFs0NSwgMV0sIFs0NSwgNF0sIFs0MiwgMV0sIFs0MiwgNF0sIFs0MCwgMV0sIFs0MCwgNF0sIFsxMiwgNV0sIFsxMiwgM10sIFsxMiwgNV0sIFsxMiwgM10sIFsxMiwgM10sIFsyNCwgNF0sIFsyNCwgNF0sIFsyNSwgM10sIFsyNiwgM10sIFsyNywgM10sIFsyOCwgM10sIFs2MywgMl0sIFs2MywgMV0sIFs1OCwgM10sIFs1OCwgMV0sIFs1NSwgMV0sIFs1NSwgMV0sIFsxNywgNV0sIFsxNywgNV0sIFsxNywgNF0sIFsyMiwgMV0sIFs2NywgMV0sIFs2NywgMV0sIFs2NywgMV0sIFs2NywgMV0sIFs2NywgMV0sIFs2NywgMV0sIFs2NywgMV0sIFs2NywgMV0sIFs1NiwgMV1dLFxuICAgIHBlcmZvcm1BY3Rpb246IGZ1bmN0aW9uIGFub255bW91cyh5eXRleHQsIHl5bGVuZywgeXlsaW5lbm8sIHl5LCB5eXN0YXRlLCAkJCwgXyQpIHtcbiAgICAgIHZhciAkMCA9ICQkLmxlbmd0aCAtIDE7XG4gICAgICBzd2l0Y2ggKHl5c3RhdGUpIHtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHl5LmFwcGx5KCQkWyQwXSk7XG4gICAgICAgICAgcmV0dXJuICQkWyQwXTtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgdGhpcy4kID0gW107XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMCAtIDFdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICB0aGlzLiQgPSBbXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAkJFskMF0udHlwZSA9IFwiY3JlYXRlUGFydGljaXBhbnRcIjtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgJCRbJDAgLSAxXS51bnNoaWZ0KHsgdHlwZTogXCJib3hTdGFydFwiLCBib3hEYXRhOiB5eS5wYXJzZUJveERhdGEoJCRbJDAgLSAyXSkgfSk7XG4gICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKHsgdHlwZTogXCJib3hFbmRcIiwgYm94VGV4dDogJCRbJDAgLSAyXSB9KTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMCAtIDFdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogXCJzZXF1ZW5jZUluZGV4XCIsIHNlcXVlbmNlSW5kZXg6IE51bWJlcigkJFskMCAtIDJdKSwgc2VxdWVuY2VJbmRleFN0ZXA6IE51bWJlcigkJFskMCAtIDFdKSwgc2VxdWVuY2VWaXNpYmxlOiB0cnVlLCBzaWduYWxUeXBlOiB5eS5MSU5FVFlQRS5BVVRPTlVNQkVSIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgdGhpcy4kID0geyB0eXBlOiBcInNlcXVlbmNlSW5kZXhcIiwgc2VxdWVuY2VJbmRleDogTnVtYmVyKCQkWyQwIC0gMV0pLCBzZXF1ZW5jZUluZGV4U3RlcDogMSwgc2VxdWVuY2VWaXNpYmxlOiB0cnVlLCBzaWduYWxUeXBlOiB5eS5MSU5FVFlQRS5BVVRPTlVNQkVSIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgdGhpcy4kID0geyB0eXBlOiBcInNlcXVlbmNlSW5kZXhcIiwgc2VxdWVuY2VWaXNpYmxlOiBmYWxzZSwgc2lnbmFsVHlwZTogeXkuTElORVRZUEUuQVVUT05VTUJFUiB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogXCJzZXF1ZW5jZUluZGV4XCIsIHNlcXVlbmNlVmlzaWJsZTogdHJ1ZSwgc2lnbmFsVHlwZTogeXkuTElORVRZUEUuQVVUT05VTUJFUiB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogXCJhY3RpdmVTdGFydFwiLCBzaWduYWxUeXBlOiB5eS5MSU5FVFlQRS5BQ1RJVkVfU1RBUlQsIGFjdG9yOiAkJFskMCAtIDFdIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgdGhpcy4kID0geyB0eXBlOiBcImFjdGl2ZUVuZFwiLCBzaWduYWxUeXBlOiB5eS5MSU5FVFlQRS5BQ1RJVkVfRU5ELCBhY3RvcjogJCRbJDAgLSAxXSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgIHl5LnNldERpYWdyYW1UaXRsZSgkJFskMF0uc3Vic3RyaW5nKDYpKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0uc3Vic3RyaW5nKDYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgIHl5LnNldERpYWdyYW1UaXRsZSgkJFskMF0uc3Vic3RyaW5nKDcpKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0uc3Vic3RyaW5nKDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMxOlxuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXS50cmltKCk7XG4gICAgICAgICAgeXkuc2V0QWNjVGl0bGUodGhpcy4kKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0udHJpbSgpO1xuICAgICAgICAgIHl5LnNldEFjY0Rlc2NyaXB0aW9uKHRoaXMuJCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgJCRbJDAgLSAxXS51bnNoaWZ0KHsgdHlwZTogXCJsb29wU3RhcnRcIiwgbG9vcFRleHQ6IHl5LnBhcnNlTWVzc2FnZSgkJFskMCAtIDJdKSwgc2lnbmFsVHlwZTogeXkuTElORVRZUEUuTE9PUF9TVEFSVCB9KTtcbiAgICAgICAgICAkJFskMCAtIDFdLnB1c2goeyB0eXBlOiBcImxvb3BFbmRcIiwgbG9vcFRleHQ6ICQkWyQwIC0gMl0sIHNpZ25hbFR5cGU6IHl5LkxJTkVUWVBFLkxPT1BfRU5EIH0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwIC0gMV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzU6XG4gICAgICAgICAgJCRbJDAgLSAxXS51bnNoaWZ0KHsgdHlwZTogXCJyZWN0U3RhcnRcIiwgY29sb3I6IHl5LnBhcnNlTWVzc2FnZSgkJFskMCAtIDJdKSwgc2lnbmFsVHlwZTogeXkuTElORVRZUEUuUkVDVF9TVEFSVCB9KTtcbiAgICAgICAgICAkJFskMCAtIDFdLnB1c2goeyB0eXBlOiBcInJlY3RFbmRcIiwgY29sb3I6IHl5LnBhcnNlTWVzc2FnZSgkJFskMCAtIDJdKSwgc2lnbmFsVHlwZTogeXkuTElORVRZUEUuUkVDVF9FTkQgfSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDAgLSAxXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNjpcbiAgICAgICAgICAkJFskMCAtIDFdLnVuc2hpZnQoeyB0eXBlOiBcIm9wdFN0YXJ0XCIsIG9wdFRleHQ6IHl5LnBhcnNlTWVzc2FnZSgkJFskMCAtIDJdKSwgc2lnbmFsVHlwZTogeXkuTElORVRZUEUuT1BUX1NUQVJUIH0pO1xuICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCh7IHR5cGU6IFwib3B0RW5kXCIsIG9wdFRleHQ6IHl5LnBhcnNlTWVzc2FnZSgkJFskMCAtIDJdKSwgc2lnbmFsVHlwZTogeXkuTElORVRZUEUuT1BUX0VORCB9KTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMCAtIDFdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICQkWyQwIC0gMV0udW5zaGlmdCh7IHR5cGU6IFwiYWx0U3RhcnRcIiwgYWx0VGV4dDogeXkucGFyc2VNZXNzYWdlKCQkWyQwIC0gMl0pLCBzaWduYWxUeXBlOiB5eS5MSU5FVFlQRS5BTFRfU1RBUlQgfSk7XG4gICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKHsgdHlwZTogXCJhbHRFbmRcIiwgc2lnbmFsVHlwZTogeXkuTElORVRZUEUuQUxUX0VORCB9KTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMCAtIDFdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICQkWyQwIC0gMV0udW5zaGlmdCh7IHR5cGU6IFwicGFyU3RhcnRcIiwgcGFyVGV4dDogeXkucGFyc2VNZXNzYWdlKCQkWyQwIC0gMl0pLCBzaWduYWxUeXBlOiB5eS5MSU5FVFlQRS5QQVJfU1RBUlQgfSk7XG4gICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKHsgdHlwZTogXCJwYXJFbmRcIiwgc2lnbmFsVHlwZTogeXkuTElORVRZUEUuUEFSX0VORCB9KTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMCAtIDFdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICQkWyQwIC0gMV0udW5zaGlmdCh7IHR5cGU6IFwicGFyU3RhcnRcIiwgcGFyVGV4dDogeXkucGFyc2VNZXNzYWdlKCQkWyQwIC0gMl0pLCBzaWduYWxUeXBlOiB5eS5MSU5FVFlQRS5QQVJfT1ZFUl9TVEFSVCB9KTtcbiAgICAgICAgICAkJFskMCAtIDFdLnB1c2goeyB0eXBlOiBcInBhckVuZFwiLCBzaWduYWxUeXBlOiB5eS5MSU5FVFlQRS5QQVJfRU5EIH0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwIC0gMV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgJCRbJDAgLSAxXS51bnNoaWZ0KHsgdHlwZTogXCJjcml0aWNhbFN0YXJ0XCIsIGNyaXRpY2FsVGV4dDogeXkucGFyc2VNZXNzYWdlKCQkWyQwIC0gMl0pLCBzaWduYWxUeXBlOiB5eS5MSU5FVFlQRS5DUklUSUNBTF9TVEFSVCB9KTtcbiAgICAgICAgICAkJFskMCAtIDFdLnB1c2goeyB0eXBlOiBcImNyaXRpY2FsRW5kXCIsIHNpZ25hbFR5cGU6IHl5LkxJTkVUWVBFLkNSSVRJQ0FMX0VORCB9KTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMCAtIDFdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgICQkWyQwIC0gMV0udW5zaGlmdCh7IHR5cGU6IFwiYnJlYWtTdGFydFwiLCBicmVha1RleHQ6IHl5LnBhcnNlTWVzc2FnZSgkJFskMCAtIDJdKSwgc2lnbmFsVHlwZTogeXkuTElORVRZUEUuQlJFQUtfU1RBUlQgfSk7XG4gICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKHsgdHlwZTogXCJicmVha0VuZFwiLCBvcHRUZXh0OiB5eS5wYXJzZU1lc3NhZ2UoJCRbJDAgLSAyXSksIHNpZ25hbFR5cGU6IHl5LkxJTkVUWVBFLkJSRUFLX0VORCB9KTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMCAtIDFdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQzOlxuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwIC0gM10uY29uY2F0KFt7IHR5cGU6IFwib3B0aW9uXCIsIG9wdGlvblRleHQ6IHl5LnBhcnNlTWVzc2FnZSgkJFskMCAtIDFdKSwgc2lnbmFsVHlwZTogeXkuTElORVRZUEUuQ1JJVElDQUxfT1BUSU9OIH0sICQkWyQwXV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwIC0gM10uY29uY2F0KFt7IHR5cGU6IFwiYW5kXCIsIHBhclRleHQ6IHl5LnBhcnNlTWVzc2FnZSgkJFskMCAtIDFdKSwgc2lnbmFsVHlwZTogeXkuTElORVRZUEUuUEFSX0FORCB9LCAkJFskMF1dKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMCAtIDNdLmNvbmNhdChbeyB0eXBlOiBcImVsc2VcIiwgYWx0VGV4dDogeXkucGFyc2VNZXNzYWdlKCQkWyQwIC0gMV0pLCBzaWduYWxUeXBlOiB5eS5MSU5FVFlQRS5BTFRfRUxTRSB9LCAkJFskMF1dKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0ODpcbiAgICAgICAgICAkJFskMCAtIDNdLmRyYXcgPSBcInBhcnRpY2lwYW50XCI7XG4gICAgICAgICAgJCRbJDAgLSAzXS50eXBlID0gXCJhZGRQYXJ0aWNpcGFudFwiO1xuICAgICAgICAgICQkWyQwIC0gM10uZGVzY3JpcHRpb24gPSB5eS5wYXJzZU1lc3NhZ2UoJCRbJDAgLSAxXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDAgLSAzXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OTpcbiAgICAgICAgICAkJFskMCAtIDFdLmRyYXcgPSBcInBhcnRpY2lwYW50XCI7XG4gICAgICAgICAgJCRbJDAgLSAxXS50eXBlID0gXCJhZGRQYXJ0aWNpcGFudFwiO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwIC0gMV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTA6XG4gICAgICAgICAgJCRbJDAgLSAzXS5kcmF3ID0gXCJhY3RvclwiO1xuICAgICAgICAgICQkWyQwIC0gM10udHlwZSA9IFwiYWRkUGFydGljaXBhbnRcIjtcbiAgICAgICAgICAkJFskMCAtIDNdLmRlc2NyaXB0aW9uID0geXkucGFyc2VNZXNzYWdlKCQkWyQwIC0gMV0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwIC0gM107XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTE6XG4gICAgICAgICAgJCRbJDAgLSAxXS5kcmF3ID0gXCJhY3RvclwiO1xuICAgICAgICAgICQkWyQwIC0gMV0udHlwZSA9IFwiYWRkUGFydGljaXBhbnRcIjtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMCAtIDFdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDUyOlxuICAgICAgICAgICQkWyQwIC0gMV0udHlwZSA9IFwiZGVzdHJveVBhcnRpY2lwYW50XCI7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDAgLSAxXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1MzpcbiAgICAgICAgICB0aGlzLiQgPSBbJCRbJDAgLSAxXSwgeyB0eXBlOiBcImFkZE5vdGVcIiwgcGxhY2VtZW50OiAkJFskMCAtIDJdLCBhY3RvcjogJCRbJDAgLSAxXS5hY3RvciwgdGV4dDogJCRbJDBdIH1dO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU0OlxuICAgICAgICAgICQkWyQwIC0gMl0gPSBbXS5jb25jYXQoJCRbJDAgLSAxXSwgJCRbJDAgLSAxXSkuc2xpY2UoMCwgMik7XG4gICAgICAgICAgJCRbJDAgLSAyXVswXSA9ICQkWyQwIC0gMl1bMF0uYWN0b3I7XG4gICAgICAgICAgJCRbJDAgLSAyXVsxXSA9ICQkWyQwIC0gMl1bMV0uYWN0b3I7XG4gICAgICAgICAgdGhpcy4kID0gWyQkWyQwIC0gMV0sIHsgdHlwZTogXCJhZGROb3RlXCIsIHBsYWNlbWVudDogeXkuUExBQ0VNRU5ULk9WRVIsIGFjdG9yOiAkJFskMCAtIDJdLnNsaWNlKDAsIDIpLCB0ZXh0OiAkJFskMF0gfV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTU6XG4gICAgICAgICAgdGhpcy4kID0gWyQkWyQwIC0gMV0sIHsgdHlwZTogXCJhZGRMaW5rc1wiLCBhY3RvcjogJCRbJDAgLSAxXS5hY3RvciwgdGV4dDogJCRbJDBdIH1dO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU2OlxuICAgICAgICAgIHRoaXMuJCA9IFskJFskMCAtIDFdLCB7IHR5cGU6IFwiYWRkQUxpbmtcIiwgYWN0b3I6ICQkWyQwIC0gMV0uYWN0b3IsIHRleHQ6ICQkWyQwXSB9XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1NzpcbiAgICAgICAgICB0aGlzLiQgPSBbJCRbJDAgLSAxXSwgeyB0eXBlOiBcImFkZFByb3BlcnRpZXNcIiwgYWN0b3I6ICQkWyQwIC0gMV0uYWN0b3IsIHRleHQ6ICQkWyQwXSB9XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICB0aGlzLiQgPSBbJCRbJDAgLSAxXSwgeyB0eXBlOiBcImFkZERldGFpbHNcIiwgYWN0b3I6ICQkWyQwIC0gMV0uYWN0b3IsIHRleHQ6ICQkWyQwXSB9XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2MTpcbiAgICAgICAgICB0aGlzLiQgPSBbJCRbJDAgLSAyXSwgJCRbJDBdXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2MjpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjM6XG4gICAgICAgICAgdGhpcy4kID0geXkuUExBQ0VNRU5ULkxFRlRPRjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICB0aGlzLiQgPSB5eS5QTEFDRU1FTlQuUklHSFRPRjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2NTpcbiAgICAgICAgICB0aGlzLiQgPSBbXG4gICAgICAgICAgICAkJFskMCAtIDRdLFxuICAgICAgICAgICAgJCRbJDAgLSAxXSxcbiAgICAgICAgICAgIHsgdHlwZTogXCJhZGRNZXNzYWdlXCIsIGZyb206ICQkWyQwIC0gNF0uYWN0b3IsIHRvOiAkJFskMCAtIDFdLmFjdG9yLCBzaWduYWxUeXBlOiAkJFskMCAtIDNdLCBtc2c6ICQkWyQwXSwgYWN0aXZhdGU6IHRydWUgfSxcbiAgICAgICAgICAgIHsgdHlwZTogXCJhY3RpdmVTdGFydFwiLCBzaWduYWxUeXBlOiB5eS5MSU5FVFlQRS5BQ1RJVkVfU1RBUlQsIGFjdG9yOiAkJFskMCAtIDFdIH1cbiAgICAgICAgICBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY2OlxuICAgICAgICAgIHRoaXMuJCA9IFtcbiAgICAgICAgICAgICQkWyQwIC0gNF0sXG4gICAgICAgICAgICAkJFskMCAtIDFdLFxuICAgICAgICAgICAgeyB0eXBlOiBcImFkZE1lc3NhZ2VcIiwgZnJvbTogJCRbJDAgLSA0XS5hY3RvciwgdG86ICQkWyQwIC0gMV0uYWN0b3IsIHNpZ25hbFR5cGU6ICQkWyQwIC0gM10sIG1zZzogJCRbJDBdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFwiYWN0aXZlRW5kXCIsIHNpZ25hbFR5cGU6IHl5LkxJTkVUWVBFLkFDVElWRV9FTkQsIGFjdG9yOiAkJFskMCAtIDRdIH1cbiAgICAgICAgICBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY3OlxuICAgICAgICAgIHRoaXMuJCA9IFskJFskMCAtIDNdLCAkJFskMCAtIDFdLCB7IHR5cGU6IFwiYWRkTWVzc2FnZVwiLCBmcm9tOiAkJFskMCAtIDNdLmFjdG9yLCB0bzogJCRbJDAgLSAxXS5hY3Rvciwgc2lnbmFsVHlwZTogJCRbJDAgLSAyXSwgbXNnOiAkJFskMF0gfV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjg6XG4gICAgICAgICAgdGhpcy4kID0geyB0eXBlOiBcImFkZFBhcnRpY2lwYW50XCIsIGFjdG9yOiAkJFskMF0gfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OTpcbiAgICAgICAgICB0aGlzLiQgPSB5eS5MSU5FVFlQRS5TT0xJRF9PUEVOO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDcwOlxuICAgICAgICAgIHRoaXMuJCA9IHl5LkxJTkVUWVBFLkRPVFRFRF9PUEVOO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDcxOlxuICAgICAgICAgIHRoaXMuJCA9IHl5LkxJTkVUWVBFLlNPTElEO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDcyOlxuICAgICAgICAgIHRoaXMuJCA9IHl5LkxJTkVUWVBFLkRPVFRFRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3MzpcbiAgICAgICAgICB0aGlzLiQgPSB5eS5MSU5FVFlQRS5TT0xJRF9DUk9TUztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3NDpcbiAgICAgICAgICB0aGlzLiQgPSB5eS5MSU5FVFlQRS5ET1RURURfQ1JPU1M7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzU6XG4gICAgICAgICAgdGhpcy4kID0geXkuTElORVRZUEUuU09MSURfUE9JTlQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzY6XG4gICAgICAgICAgdGhpcy4kID0geXkuTElORVRZUEUuRE9UVEVEX1BPSU5UO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc3OlxuICAgICAgICAgIHRoaXMuJCA9IHl5LnBhcnNlTWVzc2FnZSgkJFskMF0udHJpbSgpLnN1YnN0cmluZygxKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcbiAgICB0YWJsZTogW3sgMzogMSwgNDogJFYwLCA1OiAkVjEsIDY6ICRWMiB9LCB7IDE6IFszXSB9LCB7IDM6IDUsIDQ6ICRWMCwgNTogJFYxLCA2OiAkVjIgfSwgeyAzOiA2LCA0OiAkVjAsIDU6ICRWMSwgNjogJFYyIH0sIG8oWzEsIDQsIDUsIDEzLCAxNCwgMTgsIDIxLCAyMywgMjksIDMwLCAzMSwgMzMsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDEsIDQzLCA0NCwgNDYsIDUwLCA1MiwgNTMsIDU0LCA1OSwgNjAsIDYxLCA2MiwgNzBdLCAkVjMsIHsgNzogNyB9KSwgeyAxOiBbMiwgMV0gfSwgeyAxOiBbMiwgMl0gfSwgeyAxOiBbMiwgM10sIDQ6ICRWNCwgNTogJFY1LCA4OiA4LCA5OiAxMCwgMTI6IDEyLCAxMzogJFY2LCAxNDogJFY3LCAxNzogMTUsIDE4OiAkVjgsIDIxOiAkVjksIDIyOiA0MCwgMjM6ICRWYSwgMjQ6IDE5LCAyNTogMjAsIDI2OiAyMSwgMjc6IDIyLCAyODogMjMsIDI5OiAkVmIsIDMwOiAkVmMsIDMxOiAkVmQsIDMzOiAkVmUsIDM1OiAkVmYsIDM2OiAkVmcsIDM3OiAkVmgsIDM4OiAkVmksIDM5OiAkVmosIDQxOiAkVmssIDQzOiAkVmwsIDQ0OiAkVm0sIDQ2OiAkVm4sIDUwOiAkVm8sIDUyOiAkVnAsIDUzOiAkVnEsIDU0OiAkVnIsIDU5OiAkVnMsIDYwOiAkVnQsIDYxOiAkVnUsIDYyOiAkVnYsIDcwOiAkVncgfSwgbygkVngsIFsyLCA1XSksIHsgOTogNDcsIDEyOiAxMiwgMTM6ICRWNiwgMTQ6ICRWNywgMTc6IDE1LCAxODogJFY4LCAyMTogJFY5LCAyMjogNDAsIDIzOiAkVmEsIDI0OiAxOSwgMjU6IDIwLCAyNjogMjEsIDI3OiAyMiwgMjg6IDIzLCAyOTogJFZiLCAzMDogJFZjLCAzMTogJFZkLCAzMzogJFZlLCAzNTogJFZmLCAzNjogJFZnLCAzNzogJFZoLCAzODogJFZpLCAzOTogJFZqLCA0MTogJFZrLCA0MzogJFZsLCA0NDogJFZtLCA0NjogJFZuLCA1MDogJFZvLCA1MjogJFZwLCA1MzogJFZxLCA1NDogJFZyLCA1OTogJFZzLCA2MDogJFZ0LCA2MTogJFZ1LCA2MjogJFZ2LCA3MDogJFZ3IH0sIG8oJFZ4LCBbMiwgN10pLCBvKCRWeCwgWzIsIDhdKSwgbygkVngsIFsyLCAxNF0pLCB7IDEyOiA0OCwgNTA6ICRWbywgNTI6ICRWcCwgNTM6ICRWcSB9LCB7IDE1OiBbMSwgNDldIH0sIHsgNTogWzEsIDUwXSB9LCB7IDU6IFsxLCA1M10sIDE5OiBbMSwgNTFdLCAyMDogWzEsIDUyXSB9LCB7IDIyOiA1NCwgNzA6ICRWdyB9LCB7IDIyOiA1NSwgNzA6ICRWdyB9LCB7IDU6IFsxLCA1Nl0gfSwgeyA1OiBbMSwgNTddIH0sIHsgNTogWzEsIDU4XSB9LCB7IDU6IFsxLCA1OV0gfSwgeyA1OiBbMSwgNjBdIH0sIG8oJFZ4LCBbMiwgMjldKSwgbygkVngsIFsyLCAzMF0pLCB7IDMyOiBbMSwgNjFdIH0sIHsgMzQ6IFsxLCA2Ml0gfSwgbygkVngsIFsyLCAzM10pLCB7IDE1OiBbMSwgNjNdIH0sIHsgMTU6IFsxLCA2NF0gfSwgeyAxNTogWzEsIDY1XSB9LCB7IDE1OiBbMSwgNjZdIH0sIHsgMTU6IFsxLCA2N10gfSwgeyAxNTogWzEsIDY4XSB9LCB7IDE1OiBbMSwgNjldIH0sIHsgMTU6IFsxLCA3MF0gfSwgeyAyMjogNzEsIDcwOiAkVncgfSwgeyAyMjogNzIsIDcwOiAkVncgfSwgeyAyMjogNzMsIDcwOiAkVncgfSwgeyA2NzogNzQsIDcxOiBbMSwgNzVdLCA3MjogWzEsIDc2XSwgNzM6IFsxLCA3N10sIDc0OiBbMSwgNzhdLCA3NTogWzEsIDc5XSwgNzY6IFsxLCA4MF0sIDc3OiBbMSwgODFdLCA3ODogWzEsIDgyXSB9LCB7IDU1OiA4MywgNTc6IFsxLCA4NF0sIDY1OiBbMSwgODVdLCA2NjogWzEsIDg2XSB9LCB7IDIyOiA4NywgNzA6ICRWdyB9LCB7IDIyOiA4OCwgNzA6ICRWdyB9LCB7IDIyOiA4OSwgNzA6ICRWdyB9LCB7IDIyOiA5MCwgNzA6ICRWdyB9LCBvKFs1LCA1MSwgNjQsIDcxLCA3MiwgNzMsIDc0LCA3NSwgNzYsIDc3LCA3OCwgNzldLCBbMiwgNjhdKSwgbygkVngsIFsyLCA2XSksIG8oJFZ4LCBbMiwgMTVdKSwgbygkVnksIFsyLCA5XSwgeyAxMDogOTEgfSksIG8oJFZ4LCBbMiwgMTddKSwgeyA1OiBbMSwgOTNdLCAxOTogWzEsIDkyXSB9LCB7IDU6IFsxLCA5NF0gfSwgbygkVngsIFsyLCAyMV0pLCB7IDU6IFsxLCA5NV0gfSwgeyA1OiBbMSwgOTZdIH0sIG8oJFZ4LCBbMiwgMjRdKSwgbygkVngsIFsyLCAyNV0pLCBvKCRWeCwgWzIsIDI2XSksIG8oJFZ4LCBbMiwgMjddKSwgbygkVngsIFsyLCAyOF0pLCBvKCRWeCwgWzIsIDMxXSksIG8oJFZ4LCBbMiwgMzJdKSwgbygkVnosICRWMywgeyA3OiA5NyB9KSwgbygkVnosICRWMywgeyA3OiA5OCB9KSwgbygkVnosICRWMywgeyA3OiA5OSB9KSwgbygkVkEsICRWMywgeyA0MDogMTAwLCA3OiAxMDEgfSksIG8oJFZCLCAkVjMsIHsgNDI6IDEwMiwgNzogMTAzIH0pLCBvKCRWQiwgJFYzLCB7IDc6IDEwMywgNDI6IDEwNCB9KSwgbygkVkMsICRWMywgeyA0NTogMTA1LCA3OiAxMDYgfSksIG8oJFZ6LCAkVjMsIHsgNzogMTA3IH0pLCB7IDU6IFsxLCAxMDldLCA1MTogWzEsIDEwOF0gfSwgeyA1OiBbMSwgMTExXSwgNTE6IFsxLCAxMTBdIH0sIHsgNTogWzEsIDExMl0gfSwgeyAyMjogMTE1LCA2ODogWzEsIDExM10sIDY5OiBbMSwgMTE0XSwgNzA6ICRWdyB9LCBvKCRWRCwgWzIsIDY5XSksIG8oJFZELCBbMiwgNzBdKSwgbygkVkQsIFsyLCA3MV0pLCBvKCRWRCwgWzIsIDcyXSksIG8oJFZELCBbMiwgNzNdKSwgbygkVkQsIFsyLCA3NF0pLCBvKCRWRCwgWzIsIDc1XSksIG8oJFZELCBbMiwgNzZdKSwgeyAyMjogMTE2LCA3MDogJFZ3IH0sIHsgMjI6IDExOCwgNTg6IDExNywgNzA6ICRWdyB9LCB7IDcwOiBbMiwgNjNdIH0sIHsgNzA6IFsyLCA2NF0gfSwgeyA1NjogMTE5LCA3OTogJFZFIH0sIHsgNTY6IDEyMSwgNzk6ICRWRSB9LCB7IDU2OiAxMjIsIDc5OiAkVkUgfSwgeyA1NjogMTIzLCA3OTogJFZFIH0sIHsgNDogWzEsIDEyNl0sIDU6IFsxLCAxMjhdLCAxMTogMTI1LCAxMjogMTI3LCAxNjogWzEsIDEyNF0sIDUwOiAkVm8sIDUyOiAkVnAsIDUzOiAkVnEgfSwgeyA1OiBbMSwgMTI5XSB9LCBvKCRWeCwgWzIsIDE5XSksIG8oJFZ4LCBbMiwgMjBdKSwgbygkVngsIFsyLCAyMl0pLCBvKCRWeCwgWzIsIDIzXSksIHsgNDogJFY0LCA1OiAkVjUsIDg6IDgsIDk6IDEwLCAxMjogMTIsIDEzOiAkVjYsIDE0OiAkVjcsIDE2OiBbMSwgMTMwXSwgMTc6IDE1LCAxODogJFY4LCAyMTogJFY5LCAyMjogNDAsIDIzOiAkVmEsIDI0OiAxOSwgMjU6IDIwLCAyNjogMjEsIDI3OiAyMiwgMjg6IDIzLCAyOTogJFZiLCAzMDogJFZjLCAzMTogJFZkLCAzMzogJFZlLCAzNTogJFZmLCAzNjogJFZnLCAzNzogJFZoLCAzODogJFZpLCAzOTogJFZqLCA0MTogJFZrLCA0MzogJFZsLCA0NDogJFZtLCA0NjogJFZuLCA1MDogJFZvLCA1MjogJFZwLCA1MzogJFZxLCA1NDogJFZyLCA1OTogJFZzLCA2MDogJFZ0LCA2MTogJFZ1LCA2MjogJFZ2LCA3MDogJFZ3IH0sIHsgNDogJFY0LCA1OiAkVjUsIDg6IDgsIDk6IDEwLCAxMjogMTIsIDEzOiAkVjYsIDE0OiAkVjcsIDE2OiBbMSwgMTMxXSwgMTc6IDE1LCAxODogJFY4LCAyMTogJFY5LCAyMjogNDAsIDIzOiAkVmEsIDI0OiAxOSwgMjU6IDIwLCAyNjogMjEsIDI3OiAyMiwgMjg6IDIzLCAyOTogJFZiLCAzMDogJFZjLCAzMTogJFZkLCAzMzogJFZlLCAzNTogJFZmLCAzNjogJFZnLCAzNzogJFZoLCAzODogJFZpLCAzOTogJFZqLCA0MTogJFZrLCA0MzogJFZsLCA0NDogJFZtLCA0NjogJFZuLCA1MDogJFZvLCA1MjogJFZwLCA1MzogJFZxLCA1NDogJFZyLCA1OTogJFZzLCA2MDogJFZ0LCA2MTogJFZ1LCA2MjogJFZ2LCA3MDogJFZ3IH0sIHsgNDogJFY0LCA1OiAkVjUsIDg6IDgsIDk6IDEwLCAxMjogMTIsIDEzOiAkVjYsIDE0OiAkVjcsIDE2OiBbMSwgMTMyXSwgMTc6IDE1LCAxODogJFY4LCAyMTogJFY5LCAyMjogNDAsIDIzOiAkVmEsIDI0OiAxOSwgMjU6IDIwLCAyNjogMjEsIDI3OiAyMiwgMjg6IDIzLCAyOTogJFZiLCAzMDogJFZjLCAzMTogJFZkLCAzMzogJFZlLCAzNTogJFZmLCAzNjogJFZnLCAzNzogJFZoLCAzODogJFZpLCAzOTogJFZqLCA0MTogJFZrLCA0MzogJFZsLCA0NDogJFZtLCA0NjogJFZuLCA1MDogJFZvLCA1MjogJFZwLCA1MzogJFZxLCA1NDogJFZyLCA1OTogJFZzLCA2MDogJFZ0LCA2MTogJFZ1LCA2MjogJFZ2LCA3MDogJFZ3IH0sIHsgMTY6IFsxLCAxMzNdIH0sIHsgNDogJFY0LCA1OiAkVjUsIDg6IDgsIDk6IDEwLCAxMjogMTIsIDEzOiAkVjYsIDE0OiAkVjcsIDE2OiBbMiwgNDZdLCAxNzogMTUsIDE4OiAkVjgsIDIxOiAkVjksIDIyOiA0MCwgMjM6ICRWYSwgMjQ6IDE5LCAyNTogMjAsIDI2OiAyMSwgMjc6IDIyLCAyODogMjMsIDI5OiAkVmIsIDMwOiAkVmMsIDMxOiAkVmQsIDMzOiAkVmUsIDM1OiAkVmYsIDM2OiAkVmcsIDM3OiAkVmgsIDM4OiAkVmksIDM5OiAkVmosIDQxOiAkVmssIDQzOiAkVmwsIDQ0OiAkVm0sIDQ2OiAkVm4sIDQ5OiBbMSwgMTM0XSwgNTA6ICRWbywgNTI6ICRWcCwgNTM6ICRWcSwgNTQ6ICRWciwgNTk6ICRWcywgNjA6ICRWdCwgNjE6ICRWdSwgNjI6ICRWdiwgNzA6ICRWdyB9LCB7IDE2OiBbMSwgMTM1XSB9LCB7IDQ6ICRWNCwgNTogJFY1LCA4OiA4LCA5OiAxMCwgMTI6IDEyLCAxMzogJFY2LCAxNDogJFY3LCAxNjogWzIsIDQ0XSwgMTc6IDE1LCAxODogJFY4LCAyMTogJFY5LCAyMjogNDAsIDIzOiAkVmEsIDI0OiAxOSwgMjU6IDIwLCAyNjogMjEsIDI3OiAyMiwgMjg6IDIzLCAyOTogJFZiLCAzMDogJFZjLCAzMTogJFZkLCAzMzogJFZlLCAzNTogJFZmLCAzNjogJFZnLCAzNzogJFZoLCAzODogJFZpLCAzOTogJFZqLCA0MTogJFZrLCA0MzogJFZsLCA0NDogJFZtLCA0NjogJFZuLCA0ODogWzEsIDEzNl0sIDUwOiAkVm8sIDUyOiAkVnAsIDUzOiAkVnEsIDU0OiAkVnIsIDU5OiAkVnMsIDYwOiAkVnQsIDYxOiAkVnUsIDYyOiAkVnYsIDcwOiAkVncgfSwgeyAxNjogWzEsIDEzN10gfSwgeyAxNjogWzEsIDEzOF0gfSwgeyA0OiAkVjQsIDU6ICRWNSwgODogOCwgOTogMTAsIDEyOiAxMiwgMTM6ICRWNiwgMTQ6ICRWNywgMTY6IFsyLCA0Ml0sIDE3OiAxNSwgMTg6ICRWOCwgMjE6ICRWOSwgMjI6IDQwLCAyMzogJFZhLCAyNDogMTksIDI1OiAyMCwgMjY6IDIxLCAyNzogMjIsIDI4OiAyMywgMjk6ICRWYiwgMzA6ICRWYywgMzE6ICRWZCwgMzM6ICRWZSwgMzU6ICRWZiwgMzY6ICRWZywgMzc6ICRWaCwgMzg6ICRWaSwgMzk6ICRWaiwgNDE6ICRWaywgNDM6ICRWbCwgNDQ6ICRWbSwgNDY6ICRWbiwgNDc6IFsxLCAxMzldLCA1MDogJFZvLCA1MjogJFZwLCA1MzogJFZxLCA1NDogJFZyLCA1OTogJFZzLCA2MDogJFZ0LCA2MTogJFZ1LCA2MjogJFZ2LCA3MDogJFZ3IH0sIHsgNDogJFY0LCA1OiAkVjUsIDg6IDgsIDk6IDEwLCAxMjogMTIsIDEzOiAkVjYsIDE0OiAkVjcsIDE2OiBbMSwgMTQwXSwgMTc6IDE1LCAxODogJFY4LCAyMTogJFY5LCAyMjogNDAsIDIzOiAkVmEsIDI0OiAxOSwgMjU6IDIwLCAyNjogMjEsIDI3OiAyMiwgMjg6IDIzLCAyOTogJFZiLCAzMDogJFZjLCAzMTogJFZkLCAzMzogJFZlLCAzNTogJFZmLCAzNjogJFZnLCAzNzogJFZoLCAzODogJFZpLCAzOTogJFZqLCA0MTogJFZrLCA0MzogJFZsLCA0NDogJFZtLCA0NjogJFZuLCA1MDogJFZvLCA1MjogJFZwLCA1MzogJFZxLCA1NDogJFZyLCA1OTogJFZzLCA2MDogJFZ0LCA2MTogJFZ1LCA2MjogJFZ2LCA3MDogJFZ3IH0sIHsgMTU6IFsxLCAxNDFdIH0sIG8oJFZ4LCBbMiwgNDldKSwgeyAxNTogWzEsIDE0Ml0gfSwgbygkVngsIFsyLCA1MV0pLCBvKCRWeCwgWzIsIDUyXSksIHsgMjI6IDE0MywgNzA6ICRWdyB9LCB7IDIyOiAxNDQsIDcwOiAkVncgfSwgeyA1NjogMTQ1LCA3OTogJFZFIH0sIHsgNTY6IDE0NiwgNzk6ICRWRSB9LCB7IDU2OiAxNDcsIDc5OiAkVkUgfSwgeyA2NDogWzEsIDE0OF0sIDc5OiBbMiwgNjJdIH0sIHsgNTogWzIsIDU1XSB9LCB7IDU6IFsyLCA3N10gfSwgeyA1OiBbMiwgNTZdIH0sIHsgNTogWzIsIDU3XSB9LCB7IDU6IFsyLCA1OF0gfSwgbygkVngsIFsyLCAxNl0pLCBvKCRWeSwgWzIsIDEwXSksIHsgMTI6IDE0OSwgNTA6ICRWbywgNTI6ICRWcCwgNTM6ICRWcSB9LCBvKCRWeSwgWzIsIDEyXSksIG8oJFZ5LCBbMiwgMTNdKSwgbygkVngsIFsyLCAxOF0pLCBvKCRWeCwgWzIsIDM0XSksIG8oJFZ4LCBbMiwgMzVdKSwgbygkVngsIFsyLCAzNl0pLCBvKCRWeCwgWzIsIDM3XSksIHsgMTU6IFsxLCAxNTBdIH0sIG8oJFZ4LCBbMiwgMzhdKSwgeyAxNTogWzEsIDE1MV0gfSwgbygkVngsIFsyLCAzOV0pLCBvKCRWeCwgWzIsIDQwXSksIHsgMTU6IFsxLCAxNTJdIH0sIG8oJFZ4LCBbMiwgNDFdKSwgeyA1OiBbMSwgMTUzXSB9LCB7IDU6IFsxLCAxNTRdIH0sIHsgNTY6IDE1NSwgNzk6ICRWRSB9LCB7IDU2OiAxNTYsIDc5OiAkVkUgfSwgeyA1OiBbMiwgNjddIH0sIHsgNTogWzIsIDUzXSB9LCB7IDU6IFsyLCA1NF0gfSwgeyAyMjogMTU3LCA3MDogJFZ3IH0sIG8oJFZ5LCBbMiwgMTFdKSwgbygkVkEsICRWMywgeyA3OiAxMDEsIDQwOiAxNTggfSksIG8oJFZCLCAkVjMsIHsgNzogMTAzLCA0MjogMTU5IH0pLCBvKCRWQywgJFYzLCB7IDc6IDEwNiwgNDU6IDE2MCB9KSwgbygkVngsIFsyLCA0OF0pLCBvKCRWeCwgWzIsIDUwXSksIHsgNTogWzIsIDY1XSB9LCB7IDU6IFsyLCA2Nl0gfSwgeyA3OTogWzIsIDYxXSB9LCB7IDE2OiBbMiwgNDddIH0sIHsgMTY6IFsyLCA0NV0gfSwgeyAxNjogWzIsIDQzXSB9XSxcbiAgICBkZWZhdWx0QWN0aW9uczogeyA1OiBbMiwgMV0sIDY6IFsyLCAyXSwgODU6IFsyLCA2M10sIDg2OiBbMiwgNjRdLCAxMTk6IFsyLCA1NV0sIDEyMDogWzIsIDc3XSwgMTIxOiBbMiwgNTZdLCAxMjI6IFsyLCA1N10sIDEyMzogWzIsIDU4XSwgMTQ1OiBbMiwgNjddLCAxNDY6IFsyLCA1M10sIDE0NzogWzIsIDU0XSwgMTU1OiBbMiwgNjVdLCAxNTY6IFsyLCA2Nl0sIDE1NzogWzIsIDYxXSwgMTU4OiBbMiwgNDddLCAxNTk6IFsyLCA0NV0sIDE2MDogWzIsIDQzXSB9LFxuICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XG4gICAgICBpZiAoaGFzaC5yZWNvdmVyYWJsZSkge1xuICAgICAgICB0aGlzLnRyYWNlKHN0cik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3Ioc3RyKTtcbiAgICAgICAgZXJyb3IuaGFzaCA9IGhhc2g7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsIHN0YWNrID0gWzBdLCB0c3RhY2sgPSBbXSwgdnN0YWNrID0gW251bGxdLCBsc3RhY2sgPSBbXSwgdGFibGUgPSB0aGlzLnRhYmxlLCB5eXRleHQgPSBcIlwiLCB5eWxpbmVubyA9IDAsIHl5bGVuZyA9IDAsIFRFUlJPUiA9IDIsIEVPRiA9IDE7XG4gICAgICB2YXIgYXJncyA9IGxzdGFjay5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICB2YXIgbGV4ZXIyID0gT2JqZWN0LmNyZWF0ZSh0aGlzLmxleGVyKTtcbiAgICAgIHZhciBzaGFyZWRTdGF0ZSA9IHsgeXk6IHt9IH07XG4gICAgICBmb3IgKHZhciBrIGluIHRoaXMueXkpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnl5LCBrKSkge1xuICAgICAgICAgIHNoYXJlZFN0YXRlLnl5W2tdID0gdGhpcy55eVtrXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV4ZXIyLnNldElucHV0KGlucHV0LCBzaGFyZWRTdGF0ZS55eSk7XG4gICAgICBzaGFyZWRTdGF0ZS55eS5sZXhlciA9IGxleGVyMjtcbiAgICAgIHNoYXJlZFN0YXRlLnl5LnBhcnNlciA9IHRoaXM7XG4gICAgICBpZiAodHlwZW9mIGxleGVyMi55eWxsb2MgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBsZXhlcjIueXlsbG9jID0ge307XG4gICAgICB9XG4gICAgICB2YXIgeXlsb2MgPSBsZXhlcjIueXlsbG9jO1xuICAgICAgbHN0YWNrLnB1c2goeXlsb2MpO1xuICAgICAgdmFyIHJhbmdlcyA9IGxleGVyMi5vcHRpb25zICYmIGxleGVyMi5vcHRpb25zLnJhbmdlcztcbiAgICAgIGlmICh0eXBlb2Ygc2hhcmVkU3RhdGUueXkucGFyc2VFcnJvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRoaXMucGFyc2VFcnJvciA9IHNoYXJlZFN0YXRlLnl5LnBhcnNlRXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhcnNlRXJyb3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykucGFyc2VFcnJvcjtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGxleCgpIHtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB0b2tlbiA9IHRzdGFjay5wb3AoKSB8fCBsZXhlcjIubGV4KCkgfHwgRU9GO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgaWYgKHRva2VuIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHRzdGFjayA9IHRva2VuO1xuICAgICAgICAgICAgdG9rZW4gPSB0c3RhY2sucG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRva2VuID0gc2VsZi5zeW1ib2xzX1t0b2tlbl0gfHwgdG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgfVxuICAgICAgdmFyIHN5bWJvbCwgc3RhdGUyLCBhY3Rpb24sIHIsIHl5dmFsID0ge30sIHAsIGxlbiwgbmV3U3RhdGUsIGV4cGVjdGVkO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgc3RhdGUyID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlMl0pIHtcbiAgICAgICAgICBhY3Rpb24gPSB0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlMl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHN5bWJvbCA9PT0gbnVsbCB8fCB0eXBlb2Ygc3ltYm9sID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHN5bWJvbCA9IGxleCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhY3Rpb24gPSB0YWJsZVtzdGF0ZTJdICYmIHRhYmxlW3N0YXRlMl1bc3ltYm9sXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhYWN0aW9uLmxlbmd0aCB8fCAhYWN0aW9uWzBdKSB7XG4gICAgICAgICAgdmFyIGVyclN0ciA9IFwiXCI7XG4gICAgICAgICAgZXhwZWN0ZWQgPSBbXTtcbiAgICAgICAgICBmb3IgKHAgaW4gdGFibGVbc3RhdGUyXSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGVybWluYWxzX1twXSAmJiBwID4gVEVSUk9SKSB7XG4gICAgICAgICAgICAgIGV4cGVjdGVkLnB1c2goXCInXCIgKyB0aGlzLnRlcm1pbmFsc19bcF0gKyBcIidcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChsZXhlcjIuc2hvd1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICBlcnJTdHIgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoeXlsaW5lbm8gKyAxKSArIFwiOlxcblwiICsgbGV4ZXIyLnNob3dQb3NpdGlvbigpICsgXCJcXG5FeHBlY3RpbmcgXCIgKyBleHBlY3RlZC5qb2luKFwiLCBcIikgKyBcIiwgZ290ICdcIiArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgXCInXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVyclN0ciA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArICh5eWxpbmVubyArIDEpICsgXCI6IFVuZXhwZWN0ZWQgXCIgKyAoc3ltYm9sID09IEVPRiA/IFwiZW5kIG9mIGlucHV0XCIgOiBcIidcIiArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgXCInXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnBhcnNlRXJyb3IoZXJyU3RyLCB7XG4gICAgICAgICAgICB0ZXh0OiBsZXhlcjIubWF0Y2gsXG4gICAgICAgICAgICB0b2tlbjogdGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sLFxuICAgICAgICAgICAgbGluZTogbGV4ZXIyLnl5bGluZW5vLFxuICAgICAgICAgICAgbG9jOiB5eWxvYyxcbiAgICAgICAgICAgIGV4cGVjdGVkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvblswXSBpbnN0YW5jZW9mIEFycmF5ICYmIGFjdGlvbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyc2UgRXJyb3I6IG11bHRpcGxlIGFjdGlvbnMgcG9zc2libGUgYXQgc3RhdGU6IFwiICsgc3RhdGUyICsgXCIsIHRva2VuOiBcIiArIHN5bWJvbCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChhY3Rpb25bMF0pIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBzdGFjay5wdXNoKHN5bWJvbCk7XG4gICAgICAgICAgICB2c3RhY2sucHVzaChsZXhlcjIueXl0ZXh0KTtcbiAgICAgICAgICAgIGxzdGFjay5wdXNoKGxleGVyMi55eWxsb2MpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChhY3Rpb25bMV0pO1xuICAgICAgICAgICAgc3ltYm9sID0gbnVsbDtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeXlsZW5nID0gbGV4ZXIyLnl5bGVuZztcbiAgICAgICAgICAgICAgeXl0ZXh0ID0gbGV4ZXIyLnl5dGV4dDtcbiAgICAgICAgICAgICAgeXlsaW5lbm8gPSBsZXhlcjIueXlsaW5lbm87XG4gICAgICAgICAgICAgIHl5bG9jID0gbGV4ZXIyLnl5bGxvYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxlbiA9IHRoaXMucHJvZHVjdGlvbnNfW2FjdGlvblsxXV1bMV07XG4gICAgICAgICAgICB5eXZhbC4kID0gdnN0YWNrW3ZzdGFjay5sZW5ndGggLSBsZW5dO1xuICAgICAgICAgICAgeXl2YWwuXyQgPSB7XG4gICAgICAgICAgICAgIGZpcnN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgbGFzdF9saW5lOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9jb2x1bW5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocmFuZ2VzKSB7XG4gICAgICAgICAgICAgIHl5dmFsLl8kLnJhbmdlID0gW1xuICAgICAgICAgICAgICAgIGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0ucmFuZ2VbMF0sXG4gICAgICAgICAgICAgICAgbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5yYW5nZVsxXVxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgciA9IHRoaXMucGVyZm9ybUFjdGlvbi5hcHBseSh5eXZhbCwgW1xuICAgICAgICAgICAgICB5eXRleHQsXG4gICAgICAgICAgICAgIHl5bGVuZyxcbiAgICAgICAgICAgICAgeXlsaW5lbm8sXG4gICAgICAgICAgICAgIHNoYXJlZFN0YXRlLnl5LFxuICAgICAgICAgICAgICBhY3Rpb25bMV0sXG4gICAgICAgICAgICAgIHZzdGFjayxcbiAgICAgICAgICAgICAgbHN0YWNrXG4gICAgICAgICAgICBdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIHN0YWNrID0gc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4gKiAyKTtcbiAgICAgICAgICAgICAgdnN0YWNrID0gdnN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcbiAgICAgICAgICAgICAgbHN0YWNrID0gbHN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YWNrLnB1c2godGhpcy5wcm9kdWN0aW9uc19bYWN0aW9uWzFdXVswXSk7XG4gICAgICAgICAgICB2c3RhY2sucHVzaCh5eXZhbC4kKTtcbiAgICAgICAgICAgIGxzdGFjay5wdXNoKHl5dmFsLl8kKTtcbiAgICAgICAgICAgIG5ld1N0YXRlID0gdGFibGVbc3RhY2tbc3RhY2subGVuZ3RoIC0gMl1dW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDFdXTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV3U3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbiAgdmFyIGxleGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxleGVyMiA9IHtcbiAgICAgIEVPRjogMSxcbiAgICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XG4gICAgICAgIGlmICh0aGlzLnl5LnBhcnNlcikge1xuICAgICAgICAgIHRoaXMueXkucGFyc2VyLnBhcnNlRXJyb3Ioc3RyLCBoYXNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJlc2V0cyB0aGUgbGV4ZXIsIHNldHMgbmV3IGlucHV0XG4gICAgICBzZXRJbnB1dDogZnVuY3Rpb24oaW5wdXQsIHl5KSB7XG4gICAgICAgIHRoaXMueXkgPSB5eSB8fCB0aGlzLnl5IHx8IHt9O1xuICAgICAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuICAgICAgICB0aGlzLl9tb3JlID0gdGhpcy5fYmFja3RyYWNrID0gdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDA7XG4gICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbXCJJTklUSUFMXCJdO1xuICAgICAgICB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogMCxcbiAgICAgICAgICBsYXN0X2xpbmU6IDEsXG4gICAgICAgICAgbGFzdF9jb2x1bW46IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFswLCAwXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIGNvbnN1bWVzIGFuZCByZXR1cm5zIG9uZSBjaGFyIGZyb20gdGhlIGlucHV0XG4gICAgICBpbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMuX2lucHV0WzBdO1xuICAgICAgICB0aGlzLnl5dGV4dCArPSBjaDtcbiAgICAgICAgdGhpcy55eWxlbmcrKztcbiAgICAgICAgdGhpcy5vZmZzZXQrKztcbiAgICAgICAgdGhpcy5tYXRjaCArPSBjaDtcbiAgICAgICAgdGhpcy5tYXRjaGVkICs9IGNoO1xuICAgICAgICB2YXIgbGluZXMgPSBjaC5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG4gICAgICAgIGlmIChsaW5lcykge1xuICAgICAgICAgIHRoaXMueXlsaW5lbm8rKztcbiAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2VbMV0rKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKDEpO1xuICAgICAgICByZXR1cm4gY2g7XG4gICAgICB9LFxuICAgICAgLy8gdW5zaGlmdHMgb25lIGNoYXIgKG9yIGEgc3RyaW5nKSBpbnRvIHRoZSBpbnB1dFxuICAgICAgdW5wdXQ6IGZ1bmN0aW9uKGNoKSB7XG4gICAgICAgIHZhciBsZW4gPSBjaC5sZW5ndGg7XG4gICAgICAgIHZhciBsaW5lcyA9IGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gY2ggKyB0aGlzLl9pbnB1dDtcbiAgICAgICAgdGhpcy55eXRleHQgPSB0aGlzLnl5dGV4dC5zdWJzdHIoMCwgdGhpcy55eXRleHQubGVuZ3RoIC0gbGVuKTtcbiAgICAgICAgdGhpcy5vZmZzZXQgLT0gbGVuO1xuICAgICAgICB2YXIgb2xkTGluZXMgPSB0aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMubWF0Y2ggPSB0aGlzLm1hdGNoLnN1YnN0cigwLCB0aGlzLm1hdGNoLmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSAxKTtcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLnl5bGluZW5vIC09IGxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSB0aGlzLnl5bGxvYy5yYW5nZTtcbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MuZmlyc3RfbGluZSxcbiAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiBsaW5lcyA/IChsaW5lcy5sZW5ndGggPT09IG9sZExpbmVzLmxlbmd0aCA/IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiA6IDApICsgb2xkTGluZXNbb2xkTGluZXMubGVuZ3RoIC0gbGluZXMubGVuZ3RoXS5sZW5ndGggLSBsaW5lc1swXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gLSBsZW5cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFtyWzBdLCByWzBdICsgdGhpcy55eWxlbmcgLSBsZW5dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBXaGVuIGNhbGxlZCBmcm9tIGFjdGlvbiwgY2FjaGVzIG1hdGNoZWQgdGV4dCBhbmQgYXBwZW5kcyBpdCBvbiBuZXh0IGFjdGlvblxuICAgICAgbW9yZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX21vcmUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBXaGVuIGNhbGxlZCBmcm9tIGFjdGlvbiwgc2lnbmFscyB0aGUgbGV4ZXIgdGhhdCB0aGlzIHJ1bGUgZmFpbHMgdG8gbWF0Y2ggdGhlIGlucHV0LCBzbyB0aGUgbmV4dCBtYXRjaGluZyBydWxlIChyZWdleCkgc2hvdWxkIGJlIHRlc3RlZCBpbnN0ZWFkLlxuICAgICAgcmVqZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFlvdSBjYW4gb25seSBpbnZva2UgcmVqZWN0KCkgaW4gdGhlIGxleGVyIHdoZW4gdGhlIGxleGVyIGlzIG9mIHRoZSBiYWNrdHJhY2tpbmcgcGVyc3Vhc2lvbiAob3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIgPSB0cnVlKS5cXG5cIiArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgIGxpbmU6IHRoaXMueXlsaW5lbm9cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyByZXRhaW4gZmlyc3QgbiBjaGFyYWN0ZXJzIG9mIHRoZSBtYXRjaFxuICAgICAgbGVzczogZnVuY3Rpb24obikge1xuICAgICAgICB0aGlzLnVucHV0KHRoaXMubWF0Y2guc2xpY2UobikpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIGFscmVhZHkgbWF0Y2hlZCBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHBhc3RJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwYXN0ID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gdGhpcy5tYXRjaC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gKHBhc3QubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikgKyBwYXN0LnN1YnN0cigtMjApLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sXG4gICAgICAvLyBkaXNwbGF5cyB1cGNvbWluZyBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHVwY29taW5nSW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbmV4dCA9IHRoaXMubWF0Y2g7XG4gICAgICAgIGlmIChuZXh0Lmxlbmd0aCA8IDIwKSB7XG4gICAgICAgICAgbmV4dCArPSB0aGlzLl9pbnB1dC5zdWJzdHIoMCwgMjAgLSBuZXh0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChuZXh0LnN1YnN0cigwLCAyMCkgKyAobmV4dC5sZW5ndGggPiAyMCA/IFwiLi4uXCIgOiBcIlwiKSkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIHRoZSBjaGFyYWN0ZXIgcG9zaXRpb24gd2hlcmUgdGhlIGxleGluZyBlcnJvciBvY2N1cnJlZCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHNob3dQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwcmUgPSB0aGlzLnBhc3RJbnB1dCgpO1xuICAgICAgICB2YXIgYyA9IG5ldyBBcnJheShwcmUubGVuZ3RoICsgMSkuam9pbihcIi1cIik7XG4gICAgICAgIHJldHVybiBwcmUgKyB0aGlzLnVwY29taW5nSW5wdXQoKSArIFwiXFxuXCIgKyBjICsgXCJeXCI7XG4gICAgICB9LFxuICAgICAgLy8gdGVzdCB0aGUgbGV4ZWQgdG9rZW46IHJldHVybiBGQUxTRSB3aGVuIG5vdCBhIG1hdGNoLCBvdGhlcndpc2UgcmV0dXJuIHRva2VuXG4gICAgICB0ZXN0X21hdGNoOiBmdW5jdGlvbihtYXRjaCwgaW5kZXhlZF9ydWxlKSB7XG4gICAgICAgIHZhciB0b2tlbiwgbGluZXMsIGJhY2t1cDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICBiYWNrdXAgPSB7XG4gICAgICAgICAgICB5eWxpbmVubzogdGhpcy55eWxpbmVubyxcbiAgICAgICAgICAgIHl5bGxvYzoge1xuICAgICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMubGFzdF9saW5lLFxuICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeXl0ZXh0OiB0aGlzLnl5dGV4dCxcbiAgICAgICAgICAgIG1hdGNoOiB0aGlzLm1hdGNoLFxuICAgICAgICAgICAgbWF0Y2hlczogdGhpcy5tYXRjaGVzLFxuICAgICAgICAgICAgbWF0Y2hlZDogdGhpcy5tYXRjaGVkLFxuICAgICAgICAgICAgeXlsZW5nOiB0aGlzLnl5bGVuZyxcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgICBfbW9yZTogdGhpcy5fbW9yZSxcbiAgICAgICAgICAgIF9pbnB1dDogdGhpcy5faW5wdXQsXG4gICAgICAgICAgICB5eTogdGhpcy55eSxcbiAgICAgICAgICAgIGNvbmRpdGlvblN0YWNrOiB0aGlzLmNvbmRpdGlvblN0YWNrLnNsaWNlKDApLFxuICAgICAgICAgICAgZG9uZTogdGhpcy5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgICAgYmFja3VwLnl5bGxvYy5yYW5nZSA9IHRoaXMueXlsbG9jLnJhbmdlLnNsaWNlKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsaW5lcyA9IG1hdGNoWzBdLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgaWYgKGxpbmVzKSB7XG4gICAgICAgICAgdGhpcy55eWxpbmVubyArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5sZW5ndGggLSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIG1hdGNoWzBdLmxlbmd0aFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnl5dGV4dCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gbWF0Y2g7XG4gICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3RoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZ107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9yZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICB0aGlzLm1hdGNoZWQgKz0gbWF0Y2hbMF07XG4gICAgICAgIHRva2VuID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodGhpcywgdGhpcy55eSwgdGhpcywgaW5kZXhlZF9ydWxlLCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pO1xuICAgICAgICBpZiAodGhpcy5kb25lICYmIHRoaXMuX2lucHV0KSB7XG4gICAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgIGZvciAodmFyIGsgaW4gYmFja3VwKSB7XG4gICAgICAgICAgICB0aGlzW2tdID0gYmFja3VwW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiBuZXh0IG1hdGNoIGluIGlucHV0XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lucHV0KSB7XG4gICAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG9rZW4sIG1hdGNoLCB0ZW1wTWF0Y2gsIGluZGV4O1xuICAgICAgICBpZiAoIXRoaXMuX21vcmUpIHtcbiAgICAgICAgICB0aGlzLnl5dGV4dCA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5tYXRjaCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJ1bGVzID0gdGhpcy5fY3VycmVudFJ1bGVzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0ZW1wTWF0Y2ggPSB0aGlzLl9pbnB1dC5tYXRjaCh0aGlzLnJ1bGVzW3J1bGVzW2ldXSk7XG4gICAgICAgICAgaWYgKHRlbXBNYXRjaCAmJiAoIW1hdGNoIHx8IHRlbXBNYXRjaFswXS5sZW5ndGggPiBtYXRjaFswXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBtYXRjaCA9IHRlbXBNYXRjaDtcbiAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgICAgIHRva2VuID0gdGhpcy50ZXN0X21hdGNoKHRlbXBNYXRjaCwgcnVsZXNbaV0pO1xuICAgICAgICAgICAgICBpZiAodG9rZW4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuZmxleCkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdG9rZW4gPSB0aGlzLnRlc3RfbWF0Y2gobWF0Y2gsIHJ1bGVzW2luZGV4XSk7XG4gICAgICAgICAgaWYgKHRva2VuICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lucHV0ID09PSBcIlwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFVucmVjb2duaXplZCB0ZXh0LlxcblwiICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggdGhhdCBoYXMgYSB0b2tlblxuICAgICAgbGV4OiBmdW5jdGlvbiBsZXgoKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5uZXh0KCk7XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubGV4KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBhY3RpdmF0ZXMgYSBuZXcgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIChwdXNoZXMgdGhlIG5ldyBsZXhlciBjb25kaXRpb24gc3RhdGUgb250byB0aGUgY29uZGl0aW9uIHN0YWNrKVxuICAgICAgYmVnaW46IGZ1bmN0aW9uIGJlZ2luKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrLnB1c2goY29uZGl0aW9uKTtcbiAgICAgIH0sXG4gICAgICAvLyBwb3AgdGhlIHByZXZpb3VzbHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvZmYgdGhlIGNvbmRpdGlvbiBzdGFja1xuICAgICAgcG9wU3RhdGU6IGZ1bmN0aW9uIHBvcFN0YXRlKCkge1xuICAgICAgICB2YXIgbiA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKG4gPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbMF07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBwcm9kdWNlIHRoZSBsZXhlciBydWxlIHNldCB3aGljaCBpcyBhY3RpdmUgZm9yIHRoZSBjdXJyZW50bHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZVxuICAgICAgX2N1cnJlbnRSdWxlczogZnVuY3Rpb24gX2N1cnJlbnRSdWxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoICYmIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbnNbdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdXS5ydWxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zW1wiSU5JVElBTFwiXS5ydWxlcztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGU7IHdoZW4gYW4gaW5kZXggYXJndW1lbnQgaXMgcHJvdmlkZWQgaXQgcHJvZHVjZXMgdGhlIE4tdGggcHJldmlvdXMgY29uZGl0aW9uIHN0YXRlLCBpZiBhdmFpbGFibGVcbiAgICAgIHRvcFN0YXRlOiBmdW5jdGlvbiB0b3BTdGF0ZShuKSB7XG4gICAgICAgIG4gPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDEgLSBNYXRoLmFicyhuIHx8IDApO1xuICAgICAgICBpZiAobiA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbbl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiSU5JVElBTFwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gYWxpYXMgZm9yIGJlZ2luKGNvbmRpdGlvbilcbiAgICAgIHB1c2hTdGF0ZTogZnVuY3Rpb24gcHVzaFN0YXRlKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmJlZ2luKGNvbmRpdGlvbik7XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIHRoZSBudW1iZXIgb2Ygc3RhdGVzIGN1cnJlbnRseSBvbiB0aGUgc3RhY2tcbiAgICAgIHN0YXRlU3RhY2tTaXplOiBmdW5jdGlvbiBzdGF0ZVN0YWNrU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoO1xuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHsgXCJjYXNlLWluc2Vuc2l0aXZlXCI6IHRydWUgfSxcbiAgICAgIHBlcmZvcm1BY3Rpb246IGZ1bmN0aW9uIGFub255bW91cyh5eSwgeXlfLCAkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zLCBZWV9TVEFSVCkge1xuICAgICAgICBzd2l0Y2ggKCRhdm9pZGluZ19uYW1lX2NvbGxpc2lvbnMpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gNTtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICByZXR1cm4gMTk7XG4gICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcIkxJTkVcIik7XG4gICAgICAgICAgICByZXR1cm4gMTQ7XG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcIklEXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDUwO1xuICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJJRFwiKTtcbiAgICAgICAgICAgIHJldHVybiA1MjtcbiAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgcmV0dXJuIDEzO1xuICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiSURcIik7XG4gICAgICAgICAgICByZXR1cm4gNTM7XG4gICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgIHl5Xy55eXRleHQgPSB5eV8ueXl0ZXh0LnRyaW0oKTtcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJBTElBU1wiKTtcbiAgICAgICAgICAgIHJldHVybiA3MDtcbiAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5iZWdpbihcIkxJTkVcIik7XG4gICAgICAgICAgICByZXR1cm4gNTE7XG4gICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiA1O1xuICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiTElORVwiKTtcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcIkxJTkVcIik7XG4gICAgICAgICAgICByZXR1cm4gMzc7XG4gICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJMSU5FXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDM4O1xuICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiTElORVwiKTtcbiAgICAgICAgICAgIHJldHVybiAzOTtcbiAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcIkxJTkVcIik7XG4gICAgICAgICAgICByZXR1cm4gNDk7XG4gICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJMSU5FXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDQxO1xuICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiTElORVwiKTtcbiAgICAgICAgICAgIHJldHVybiA0MztcbiAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcIkxJTkVcIik7XG4gICAgICAgICAgICByZXR1cm4gNDg7XG4gICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJMSU5FXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDQ0O1xuICAgICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiTElORVwiKTtcbiAgICAgICAgICAgIHJldHVybiA0NztcbiAgICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcIkxJTkVcIik7XG4gICAgICAgICAgICByZXR1cm4gNDY7XG4gICAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiAxNTtcbiAgICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgICAgcmV0dXJuIDE2O1xuICAgICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgICByZXR1cm4gNjU7XG4gICAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICAgIHJldHVybiA2NjtcbiAgICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgICAgcmV0dXJuIDU5O1xuICAgICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgICByZXR1cm4gNjA7XG4gICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIHJldHVybiA2MTtcbiAgICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgICAgcmV0dXJuIDYyO1xuICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICByZXR1cm4gNTc7XG4gICAgICAgICAgY2FzZSAzNTpcbiAgICAgICAgICAgIHJldHVybiA1NDtcbiAgICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcIklEXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDIxO1xuICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiSURcIik7XG4gICAgICAgICAgICByZXR1cm4gMjM7XG4gICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgIHJldHVybiAyOTtcbiAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgcmV0dXJuIDMwO1xuICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiYWNjX3RpdGxlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDMxO1xuICAgICAgICAgIGNhc2UgNDE6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfdGl0bGVfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImFjY19kZXNjclwiKTtcbiAgICAgICAgICAgIHJldHVybiAzMztcbiAgICAgICAgICBjYXNlIDQzOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX2Rlc2NyX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJhY2NfZGVzY3JfbXVsdGlsaW5lXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDY6XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfZGVzY3JfbXVsdGlsaW5lX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgIHJldHVybiA2O1xuICAgICAgICAgIGNhc2UgNDg6XG4gICAgICAgICAgICByZXR1cm4gMTg7XG4gICAgICAgICAgY2FzZSA0OTpcbiAgICAgICAgICAgIHJldHVybiAyMDtcbiAgICAgICAgICBjYXNlIDUwOlxuICAgICAgICAgICAgcmV0dXJuIDY0O1xuICAgICAgICAgIGNhc2UgNTE6XG4gICAgICAgICAgICByZXR1cm4gNTtcbiAgICAgICAgICBjYXNlIDUyOlxuICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHl5Xy55eXRleHQudHJpbSgpO1xuICAgICAgICAgICAgcmV0dXJuIDcwO1xuICAgICAgICAgIGNhc2UgNTM6XG4gICAgICAgICAgICByZXR1cm4gNzM7XG4gICAgICAgICAgY2FzZSA1NDpcbiAgICAgICAgICAgIHJldHVybiA3NDtcbiAgICAgICAgICBjYXNlIDU1OlxuICAgICAgICAgICAgcmV0dXJuIDcxO1xuICAgICAgICAgIGNhc2UgNTY6XG4gICAgICAgICAgICByZXR1cm4gNzI7XG4gICAgICAgICAgY2FzZSA1NzpcbiAgICAgICAgICAgIHJldHVybiA3NTtcbiAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgcmV0dXJuIDc2O1xuICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICByZXR1cm4gNzc7XG4gICAgICAgICAgY2FzZSA2MDpcbiAgICAgICAgICAgIHJldHVybiA3ODtcbiAgICAgICAgICBjYXNlIDYxOlxuICAgICAgICAgICAgcmV0dXJuIDc5O1xuICAgICAgICAgIGNhc2UgNjI6XG4gICAgICAgICAgICByZXR1cm4gNjg7XG4gICAgICAgICAgY2FzZSA2MzpcbiAgICAgICAgICAgIHJldHVybiA2OTtcbiAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgcmV0dXJuIDU7XG4gICAgICAgICAgY2FzZSA2NTpcbiAgICAgICAgICAgIHJldHVybiBcIklOVkFMSURcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJ1bGVzOiBbL14oPzpbXFxuXSspL2ksIC9eKD86XFxzKykvaSwgL14oPzooKD8hXFxuKVxccykrKS9pLCAvXig/OiNbXlxcbl0qKS9pLCAvXig/OiUoPyFcXHspW15cXG5dKikvaSwgL14oPzpbXlxcfV0lJVteXFxuXSopL2ksIC9eKD86WzAtOV0rKD89WyBcXG5dKykpL2ksIC9eKD86Ym94XFxiKS9pLCAvXig/OnBhcnRpY2lwYW50XFxiKS9pLCAvXig/OmFjdG9yXFxiKS9pLCAvXig/OmNyZWF0ZVxcYikvaSwgL14oPzpkZXN0cm95XFxiKS9pLCAvXig/OlteXFwtPjpcXG4sO10rPyhbXFwtXSpbXlxcLT46XFxuLDtdKz8pKj8oPz0oKD8hXFxuKVxccykrYXMoPyFcXG4pXFxzfFsjXFxuO118JCkpL2ksIC9eKD86YXNcXGIpL2ksIC9eKD86KD86KSkvaSwgL14oPzpsb29wXFxiKS9pLCAvXig/OnJlY3RcXGIpL2ksIC9eKD86b3B0XFxiKS9pLCAvXig/OmFsdFxcYikvaSwgL14oPzplbHNlXFxiKS9pLCAvXig/OnBhclxcYikvaSwgL14oPzpwYXJfb3ZlclxcYikvaSwgL14oPzphbmRcXGIpL2ksIC9eKD86Y3JpdGljYWxcXGIpL2ksIC9eKD86b3B0aW9uXFxiKS9pLCAvXig/OmJyZWFrXFxiKS9pLCAvXig/Oig/Ols6XT8oPzpubyk/d3JhcCk/W14jXFxuO10qKS9pLCAvXig/OmVuZFxcYikvaSwgL14oPzpsZWZ0IG9mXFxiKS9pLCAvXig/OnJpZ2h0IG9mXFxiKS9pLCAvXig/OmxpbmtzXFxiKS9pLCAvXig/OmxpbmtcXGIpL2ksIC9eKD86cHJvcGVydGllc1xcYikvaSwgL14oPzpkZXRhaWxzXFxiKS9pLCAvXig/Om92ZXJcXGIpL2ksIC9eKD86bm90ZVxcYikvaSwgL14oPzphY3RpdmF0ZVxcYikvaSwgL14oPzpkZWFjdGl2YXRlXFxiKS9pLCAvXig/OnRpdGxlXFxzW14jXFxuO10rKS9pLCAvXig/OnRpdGxlOlxcc1teI1xcbjtdKykvaSwgL14oPzphY2NUaXRsZVxccyo6XFxzKikvaSwgL14oPzooPyFcXG58fCkqW15cXG5dKikvaSwgL14oPzphY2NEZXNjclxccyo6XFxzKikvaSwgL14oPzooPyFcXG58fCkqW15cXG5dKikvaSwgL14oPzphY2NEZXNjclxccypcXHtcXHMqKS9pLCAvXig/OltcXH1dKS9pLCAvXig/OlteXFx9XSopL2ksIC9eKD86c2VxdWVuY2VEaWFncmFtXFxiKS9pLCAvXig/OmF1dG9udW1iZXJcXGIpL2ksIC9eKD86b2ZmXFxiKS9pLCAvXig/OiwpL2ksIC9eKD86OykvaSwgL14oPzpbXlxcK1xcLT46XFxuLDtdKygoPyEoLXh8LS14fC1cXCl8LS1cXCkpKVtcXC1dKlteXFwrXFwtPjpcXG4sO10rKSopL2ksIC9eKD86LT4+KS9pLCAvXig/Oi0tPj4pL2ksIC9eKD86LT4pL2ksIC9eKD86LS0+KS9pLCAvXig/Oi1beF0pL2ksIC9eKD86LS1beF0pL2ksIC9eKD86LVtcXCldKS9pLCAvXig/Oi0tW1xcKV0pL2ksIC9eKD86Oig/Oig/Om5vKT93cmFwKT9bXiNcXG47XSspL2ksIC9eKD86XFwrKS9pLCAvXig/Oi0pL2ksIC9eKD86JCkvaSwgL14oPzouKS9pXSxcbiAgICAgIGNvbmRpdGlvbnM6IHsgXCJhY2NfZGVzY3JfbXVsdGlsaW5lXCI6IHsgXCJydWxlc1wiOiBbNDUsIDQ2XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJhY2NfZGVzY3JcIjogeyBcInJ1bGVzXCI6IFs0M10sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiYWNjX3RpdGxlXCI6IHsgXCJydWxlc1wiOiBbNDFdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIklEXCI6IHsgXCJydWxlc1wiOiBbMiwgMywgMTJdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIkFMSUFTXCI6IHsgXCJydWxlc1wiOiBbMiwgMywgMTMsIDE0XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJMSU5FXCI6IHsgXCJydWxlc1wiOiBbMiwgMywgMjZdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIklOSVRJQUxcIjogeyBcInJ1bGVzXCI6IFswLCAxLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjMsIDI0LCAyNSwgMjcsIDI4LCAyOSwgMzAsIDMxLCAzMiwgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MiwgNDQsIDQ3LCA0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA1NCwgNTUsIDU2LCA1NywgNTgsIDU5LCA2MCwgNjEsIDYyLCA2MywgNjQsIDY1XSwgXCJpbmNsdXNpdmVcIjogdHJ1ZSB9IH1cbiAgICB9O1xuICAgIHJldHVybiBsZXhlcjI7XG4gIH0oKTtcbiAgcGFyc2VyMi5sZXhlciA9IGxleGVyO1xuICBmdW5jdGlvbiBQYXJzZXIoKSB7XG4gICAgdGhpcy55eSA9IHt9O1xuICB9XG4gIFBhcnNlci5wcm90b3R5cGUgPSBwYXJzZXIyO1xuICBwYXJzZXIyLlBhcnNlciA9IFBhcnNlcjtcbiAgcmV0dXJuIG5ldyBQYXJzZXIoKTtcbn0oKTtcbnBhcnNlci5wYXJzZXIgPSBwYXJzZXI7XG5jb25zdCBwYXJzZXIkMSA9IHBhcnNlcjtcbmNsYXNzIEltcGVyYXRpdmVTdGF0ZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0gaW5pdCAtIEZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGUgZGVmYXVsdCBzdGF0ZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGluaXQpIHtcbiAgICB0aGlzLmluaXQgPSBpbml0O1xuICAgIHRoaXMucmVjb3JkcyA9IHRoaXMuaW5pdCgpO1xuICB9XG4gIHJlc2V0KCkge1xuICAgIHRoaXMucmVjb3JkcyA9IHRoaXMuaW5pdCgpO1xuICB9XG59XG5jb25zdCBzdGF0ZSA9IG5ldyBJbXBlcmF0aXZlU3RhdGUoKCkgPT4gKHtcbiAgcHJldkFjdG9yOiB2b2lkIDAsXG4gIGFjdG9yczoge30sXG4gIGNyZWF0ZWRBY3RvcnM6IHt9LFxuICBkZXN0cm95ZWRBY3RvcnM6IHt9LFxuICBib3hlczogW10sXG4gIG1lc3NhZ2VzOiBbXSxcbiAgbm90ZXM6IFtdLFxuICBzZXF1ZW5jZU51bWJlcnNFbmFibGVkOiBmYWxzZSxcbiAgd3JhcEVuYWJsZWQ6IHZvaWQgMCxcbiAgY3VycmVudEJveDogdm9pZCAwLFxuICBsYXN0Q3JlYXRlZDogdm9pZCAwLFxuICBsYXN0RGVzdHJveWVkOiB2b2lkIDBcbn0pKTtcbmNvbnN0IGFkZEJveCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgc3RhdGUucmVjb3Jkcy5ib3hlcy5wdXNoKHtcbiAgICBuYW1lOiBkYXRhLnRleHQsXG4gICAgd3JhcDogZGF0YS53cmFwID09PSB2b2lkIDAgJiYgYXV0b1dyYXAoKSB8fCAhIWRhdGEud3JhcCxcbiAgICBmaWxsOiBkYXRhLmNvbG9yLFxuICAgIGFjdG9yS2V5czogW11cbiAgfSk7XG4gIHN0YXRlLnJlY29yZHMuY3VycmVudEJveCA9IHN0YXRlLnJlY29yZHMuYm94ZXMuc2xpY2UoLTEpWzBdO1xufTtcbmNvbnN0IGFkZEFjdG9yID0gZnVuY3Rpb24oaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCB0eXBlKSB7XG4gIGxldCBhc3NpZ25lZEJveCA9IHN0YXRlLnJlY29yZHMuY3VycmVudEJveDtcbiAgY29uc3Qgb2xkID0gc3RhdGUucmVjb3Jkcy5hY3RvcnNbaWRdO1xuICBpZiAob2xkKSB7XG4gICAgaWYgKHN0YXRlLnJlY29yZHMuY3VycmVudEJveCAmJiBvbGQuYm94ICYmIHN0YXRlLnJlY29yZHMuY3VycmVudEJveCAhPT0gb2xkLmJveCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkEgc2FtZSBwYXJ0aWNpcGFudCBzaG91bGQgb25seSBiZSBkZWZpbmVkIGluIG9uZSBCb3g6IFwiICsgb2xkLm5hbWUgKyBcIiBjYW4ndCBiZSBpbiAnXCIgKyBvbGQuYm94Lm5hbWUgKyBcIicgYW5kIGluICdcIiArIHN0YXRlLnJlY29yZHMuY3VycmVudEJveC5uYW1lICsgXCInIGF0IHRoZSBzYW1lIHRpbWUuXCJcbiAgICAgICk7XG4gICAgfVxuICAgIGFzc2lnbmVkQm94ID0gb2xkLmJveCA/IG9sZC5ib3ggOiBzdGF0ZS5yZWNvcmRzLmN1cnJlbnRCb3g7XG4gICAgb2xkLmJveCA9IGFzc2lnbmVkQm94O1xuICAgIGlmIChvbGQgJiYgbmFtZSA9PT0gb2xkLm5hbWUgJiYgZGVzY3JpcHRpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBpZiAoZGVzY3JpcHRpb24gPT0gbnVsbCB8fCBkZXNjcmlwdGlvbi50ZXh0ID09IG51bGwpIHtcbiAgICBkZXNjcmlwdGlvbiA9IHsgdGV4dDogbmFtZSwgd3JhcDogbnVsbCwgdHlwZSB9O1xuICB9XG4gIGlmICh0eXBlID09IG51bGwgfHwgZGVzY3JpcHRpb24udGV4dCA9PSBudWxsKSB7XG4gICAgZGVzY3JpcHRpb24gPSB7IHRleHQ6IG5hbWUsIHdyYXA6IG51bGwsIHR5cGUgfTtcbiAgfVxuICBzdGF0ZS5yZWNvcmRzLmFjdG9yc1tpZF0gPSB7XG4gICAgYm94OiBhc3NpZ25lZEJveCxcbiAgICBuYW1lLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbi50ZXh0LFxuICAgIHdyYXA6IGRlc2NyaXB0aW9uLndyYXAgPT09IHZvaWQgMCAmJiBhdXRvV3JhcCgpIHx8ICEhZGVzY3JpcHRpb24ud3JhcCxcbiAgICBwcmV2QWN0b3I6IHN0YXRlLnJlY29yZHMucHJldkFjdG9yLFxuICAgIGxpbmtzOiB7fSxcbiAgICBwcm9wZXJ0aWVzOiB7fSxcbiAgICBhY3RvckNudDogbnVsbCxcbiAgICByZWN0RGF0YTogbnVsbCxcbiAgICB0eXBlOiB0eXBlIHx8IFwicGFydGljaXBhbnRcIlxuICB9O1xuICBpZiAoc3RhdGUucmVjb3Jkcy5wcmV2QWN0b3IgJiYgc3RhdGUucmVjb3Jkcy5hY3RvcnNbc3RhdGUucmVjb3Jkcy5wcmV2QWN0b3JdKSB7XG4gICAgc3RhdGUucmVjb3Jkcy5hY3RvcnNbc3RhdGUucmVjb3Jkcy5wcmV2QWN0b3JdLm5leHRBY3RvciA9IGlkO1xuICB9XG4gIGlmIChzdGF0ZS5yZWNvcmRzLmN1cnJlbnRCb3gpIHtcbiAgICBzdGF0ZS5yZWNvcmRzLmN1cnJlbnRCb3guYWN0b3JLZXlzLnB1c2goaWQpO1xuICB9XG4gIHN0YXRlLnJlY29yZHMucHJldkFjdG9yID0gaWQ7XG59O1xuY29uc3QgYWN0aXZhdGlvbkNvdW50ID0gKHBhcnQpID0+IHtcbiAgbGV0IGk7XG4gIGxldCBjb3VudCA9IDA7XG4gIGZvciAoaSA9IDA7IGkgPCBzdGF0ZS5yZWNvcmRzLm1lc3NhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0YXRlLnJlY29yZHMubWVzc2FnZXNbaV0udHlwZSA9PT0gTElORVRZUEUuQUNUSVZFX1NUQVJUICYmIHN0YXRlLnJlY29yZHMubWVzc2FnZXNbaV0uZnJvbS5hY3RvciA9PT0gcGFydCkge1xuICAgICAgY291bnQrKztcbiAgICB9XG4gICAgaWYgKHN0YXRlLnJlY29yZHMubWVzc2FnZXNbaV0udHlwZSA9PT0gTElORVRZUEUuQUNUSVZFX0VORCAmJiBzdGF0ZS5yZWNvcmRzLm1lc3NhZ2VzW2ldLmZyb20uYWN0b3IgPT09IHBhcnQpIHtcbiAgICAgIGNvdW50LS07XG4gICAgfVxuICB9XG4gIHJldHVybiBjb3VudDtcbn07XG5jb25zdCBhZGRNZXNzYWdlID0gZnVuY3Rpb24oaWRGcm9tLCBpZFRvLCBtZXNzYWdlLCBhbnN3ZXIpIHtcbiAgc3RhdGUucmVjb3Jkcy5tZXNzYWdlcy5wdXNoKHtcbiAgICBmcm9tOiBpZEZyb20sXG4gICAgdG86IGlkVG8sXG4gICAgbWVzc2FnZTogbWVzc2FnZS50ZXh0LFxuICAgIHdyYXA6IG1lc3NhZ2Uud3JhcCA9PT0gdm9pZCAwICYmIGF1dG9XcmFwKCkgfHwgISFtZXNzYWdlLndyYXAsXG4gICAgYW5zd2VyXG4gIH0pO1xufTtcbmNvbnN0IGFkZFNpZ25hbCA9IGZ1bmN0aW9uKGlkRnJvbSwgaWRUbywgbWVzc2FnZSA9IHsgdGV4dDogdm9pZCAwLCB3cmFwOiB2b2lkIDAgfSwgbWVzc2FnZVR5cGUsIGFjdGl2YXRlID0gZmFsc2UpIHtcbiAgaWYgKG1lc3NhZ2VUeXBlID09PSBMSU5FVFlQRS5BQ1RJVkVfRU5EKSB7XG4gICAgY29uc3QgY250ID0gYWN0aXZhdGlvbkNvdW50KGlkRnJvbS5hY3Rvcik7XG4gICAgaWYgKGNudCA8IDEpIHtcbiAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcihcIlRyeWluZyB0byBpbmFjdGl2YXRlIGFuIGluYWN0aXZlIHBhcnRpY2lwYW50IChcIiArIGlkRnJvbS5hY3RvciArIFwiKVwiKTtcbiAgICAgIGVycm9yLmhhc2ggPSB7XG4gICAgICAgIHRleHQ6IFwiLT4+LVwiLFxuICAgICAgICB0b2tlbjogXCItPj4tXCIsXG4gICAgICAgIGxpbmU6IFwiMVwiLFxuICAgICAgICBsb2M6IHsgZmlyc3RfbGluZTogMSwgbGFzdF9saW5lOiAxLCBmaXJzdF9jb2x1bW46IDEsIGxhc3RfY29sdW1uOiAxIH0sXG4gICAgICAgIGV4cGVjdGVkOiBbXCInQUNUSVZFX1BBUlRJQ0lQQU5UJ1wiXVxuICAgICAgfTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuICBzdGF0ZS5yZWNvcmRzLm1lc3NhZ2VzLnB1c2goe1xuICAgIGZyb206IGlkRnJvbSxcbiAgICB0bzogaWRUbyxcbiAgICBtZXNzYWdlOiBtZXNzYWdlLnRleHQsXG4gICAgd3JhcDogbWVzc2FnZS53cmFwID09PSB2b2lkIDAgJiYgYXV0b1dyYXAoKSB8fCAhIW1lc3NhZ2Uud3JhcCxcbiAgICB0eXBlOiBtZXNzYWdlVHlwZSxcbiAgICBhY3RpdmF0ZVxuICB9KTtcbiAgcmV0dXJuIHRydWU7XG59O1xuY29uc3QgaGFzQXRMZWFzdE9uZUJveCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gc3RhdGUucmVjb3Jkcy5ib3hlcy5sZW5ndGggPiAwO1xufTtcbmNvbnN0IGhhc0F0TGVhc3RPbmVCb3hXaXRoVGl0bGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHN0YXRlLnJlY29yZHMuYm94ZXMuc29tZSgoYikgPT4gYi5uYW1lKTtcbn07XG5jb25zdCBnZXRNZXNzYWdlcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gc3RhdGUucmVjb3Jkcy5tZXNzYWdlcztcbn07XG5jb25zdCBnZXRCb3hlcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gc3RhdGUucmVjb3Jkcy5ib3hlcztcbn07XG5jb25zdCBnZXRBY3RvcnMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHN0YXRlLnJlY29yZHMuYWN0b3JzO1xufTtcbmNvbnN0IGdldENyZWF0ZWRBY3RvcnMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHN0YXRlLnJlY29yZHMuY3JlYXRlZEFjdG9ycztcbn07XG5jb25zdCBnZXREZXN0cm95ZWRBY3RvcnMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHN0YXRlLnJlY29yZHMuZGVzdHJveWVkQWN0b3JzO1xufTtcbmNvbnN0IGdldEFjdG9yID0gZnVuY3Rpb24oaWQpIHtcbiAgcmV0dXJuIHN0YXRlLnJlY29yZHMuYWN0b3JzW2lkXTtcbn07XG5jb25zdCBnZXRBY3RvcktleXMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0YXRlLnJlY29yZHMuYWN0b3JzKTtcbn07XG5jb25zdCBlbmFibGVTZXF1ZW5jZU51bWJlcnMgPSBmdW5jdGlvbigpIHtcbiAgc3RhdGUucmVjb3Jkcy5zZXF1ZW5jZU51bWJlcnNFbmFibGVkID0gdHJ1ZTtcbn07XG5jb25zdCBkaXNhYmxlU2VxdWVuY2VOdW1iZXJzID0gZnVuY3Rpb24oKSB7XG4gIHN0YXRlLnJlY29yZHMuc2VxdWVuY2VOdW1iZXJzRW5hYmxlZCA9IGZhbHNlO1xufTtcbmNvbnN0IHNob3dTZXF1ZW5jZU51bWJlcnMgPSAoKSA9PiBzdGF0ZS5yZWNvcmRzLnNlcXVlbmNlTnVtYmVyc0VuYWJsZWQ7XG5jb25zdCBzZXRXcmFwID0gZnVuY3Rpb24od3JhcFNldHRpbmcpIHtcbiAgc3RhdGUucmVjb3Jkcy53cmFwRW5hYmxlZCA9IHdyYXBTZXR0aW5nO1xufTtcbmNvbnN0IGF1dG9XcmFwID0gKCkgPT4ge1xuICBpZiAoc3RhdGUucmVjb3Jkcy53cmFwRW5hYmxlZCAhPT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIHN0YXRlLnJlY29yZHMud3JhcEVuYWJsZWQ7XG4gIH1cbiAgcmV0dXJuIGdldENvbmZpZygpLnNlcXVlbmNlLndyYXA7XG59O1xuY29uc3QgY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgc3RhdGUucmVzZXQoKTtcbiAgY2xlYXIkMSgpO1xufTtcbmNvbnN0IHBhcnNlTWVzc2FnZSA9IGZ1bmN0aW9uKHN0cikge1xuICBjb25zdCBfc3RyID0gc3RyLnRyaW0oKTtcbiAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICB0ZXh0OiBfc3RyLnJlcGxhY2UoL146Pyg/Om5vKT93cmFwOi8sIFwiXCIpLnRyaW0oKSxcbiAgICB3cmFwOiBfc3RyLm1hdGNoKC9eOj93cmFwOi8pICE9PSBudWxsID8gdHJ1ZSA6IF9zdHIubWF0Y2goL146P25vd3JhcDovKSAhPT0gbnVsbCA/IGZhbHNlIDogdm9pZCAwXG4gIH07XG4gIGxvZy5kZWJ1ZyhcInBhcnNlTWVzc2FnZTpcIiwgbWVzc2FnZSk7XG4gIHJldHVybiBtZXNzYWdlO1xufTtcbmNvbnN0IHBhcnNlQm94RGF0YSA9IGZ1bmN0aW9uKHN0cikge1xuICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaCgvXigoPzpyZ2JhP3xoc2xhPylcXHMqXFwoLipcXCl8XFx3KikoLiopJC8pO1xuICBsZXQgY29sb3IgPSBtYXRjaCAhPSBudWxsICYmIG1hdGNoWzFdID8gbWF0Y2hbMV0udHJpbSgpIDogXCJ0cmFuc3BhcmVudFwiO1xuICBsZXQgdGl0bGUgPSBtYXRjaCAhPSBudWxsICYmIG1hdGNoWzJdID8gbWF0Y2hbMl0udHJpbSgpIDogdm9pZCAwO1xuICBpZiAod2luZG93ICYmIHdpbmRvdy5DU1MpIHtcbiAgICBpZiAoIXdpbmRvdy5DU1Muc3VwcG9ydHMoXCJjb2xvclwiLCBjb2xvcikpIHtcbiAgICAgIGNvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgdGl0bGUgPSBzdHIudHJpbSgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdHlsZSA9IG5ldyBPcHRpb24oKS5zdHlsZTtcbiAgICBzdHlsZS5jb2xvciA9IGNvbG9yO1xuICAgIGlmIChzdHlsZS5jb2xvciAhPT0gY29sb3IpIHtcbiAgICAgIGNvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgdGl0bGUgPSBzdHIudHJpbSgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbG9yLFxuICAgIHRleHQ6IHRpdGxlICE9PSB2b2lkIDAgPyBzYW5pdGl6ZVRleHQodGl0bGUucmVwbGFjZSgvXjo/KD86bm8pP3dyYXA6LywgXCJcIiksIGdldENvbmZpZygpKSA6IHZvaWQgMCxcbiAgICB3cmFwOiB0aXRsZSAhPT0gdm9pZCAwID8gdGl0bGUubWF0Y2goL146P3dyYXA6LykgIT09IG51bGwgPyB0cnVlIDogdGl0bGUubWF0Y2goL146P25vd3JhcDovKSAhPT0gbnVsbCA/IGZhbHNlIDogdm9pZCAwIDogdm9pZCAwXG4gIH07XG59O1xuY29uc3QgTElORVRZUEUgPSB7XG4gIFNPTElEOiAwLFxuICBET1RURUQ6IDEsXG4gIE5PVEU6IDIsXG4gIFNPTElEX0NST1NTOiAzLFxuICBET1RURURfQ1JPU1M6IDQsXG4gIFNPTElEX09QRU46IDUsXG4gIERPVFRFRF9PUEVOOiA2LFxuICBMT09QX1NUQVJUOiAxMCxcbiAgTE9PUF9FTkQ6IDExLFxuICBBTFRfU1RBUlQ6IDEyLFxuICBBTFRfRUxTRTogMTMsXG4gIEFMVF9FTkQ6IDE0LFxuICBPUFRfU1RBUlQ6IDE1LFxuICBPUFRfRU5EOiAxNixcbiAgQUNUSVZFX1NUQVJUOiAxNyxcbiAgQUNUSVZFX0VORDogMTgsXG4gIFBBUl9TVEFSVDogMTksXG4gIFBBUl9BTkQ6IDIwLFxuICBQQVJfRU5EOiAyMSxcbiAgUkVDVF9TVEFSVDogMjIsXG4gIFJFQ1RfRU5EOiAyMyxcbiAgU09MSURfUE9JTlQ6IDI0LFxuICBET1RURURfUE9JTlQ6IDI1LFxuICBBVVRPTlVNQkVSOiAyNixcbiAgQ1JJVElDQUxfU1RBUlQ6IDI3LFxuICBDUklUSUNBTF9PUFRJT046IDI4LFxuICBDUklUSUNBTF9FTkQ6IDI5LFxuICBCUkVBS19TVEFSVDogMzAsXG4gIEJSRUFLX0VORDogMzEsXG4gIFBBUl9PVkVSX1NUQVJUOiAzMlxufTtcbmNvbnN0IEFSUk9XVFlQRSA9IHtcbiAgRklMTEVEOiAwLFxuICBPUEVOOiAxXG59O1xuY29uc3QgUExBQ0VNRU5UID0ge1xuICBMRUZUT0Y6IDAsXG4gIFJJR0hUT0Y6IDEsXG4gIE9WRVI6IDJcbn07XG5jb25zdCBhZGROb3RlID0gZnVuY3Rpb24oYWN0b3IsIHBsYWNlbWVudCwgbWVzc2FnZSkge1xuICBjb25zdCBub3RlID0ge1xuICAgIGFjdG9yLFxuICAgIHBsYWNlbWVudCxcbiAgICBtZXNzYWdlOiBtZXNzYWdlLnRleHQsXG4gICAgd3JhcDogbWVzc2FnZS53cmFwID09PSB2b2lkIDAgJiYgYXV0b1dyYXAoKSB8fCAhIW1lc3NhZ2Uud3JhcFxuICB9O1xuICBjb25zdCBhY3RvcnMgPSBbXS5jb25jYXQoYWN0b3IsIGFjdG9yKTtcbiAgc3RhdGUucmVjb3Jkcy5ub3Rlcy5wdXNoKG5vdGUpO1xuICBzdGF0ZS5yZWNvcmRzLm1lc3NhZ2VzLnB1c2goe1xuICAgIGZyb206IGFjdG9yc1swXSxcbiAgICB0bzogYWN0b3JzWzFdLFxuICAgIG1lc3NhZ2U6IG1lc3NhZ2UudGV4dCxcbiAgICB3cmFwOiBtZXNzYWdlLndyYXAgPT09IHZvaWQgMCAmJiBhdXRvV3JhcCgpIHx8ICEhbWVzc2FnZS53cmFwLFxuICAgIHR5cGU6IExJTkVUWVBFLk5PVEUsXG4gICAgcGxhY2VtZW50XG4gIH0pO1xufTtcbmNvbnN0IGFkZExpbmtzID0gZnVuY3Rpb24oYWN0b3JJZCwgdGV4dCkge1xuICBjb25zdCBhY3RvciA9IGdldEFjdG9yKGFjdG9ySWQpO1xuICB0cnkge1xuICAgIGxldCBzYW5pdGl6ZWRUZXh0ID0gc2FuaXRpemVUZXh0KHRleHQudGV4dCwgZ2V0Q29uZmlnKCkpO1xuICAgIHNhbml0aXplZFRleHQgPSBzYW5pdGl6ZWRUZXh0LnJlcGxhY2UoLyZhbXA7L2csIFwiJlwiKTtcbiAgICBzYW5pdGl6ZWRUZXh0ID0gc2FuaXRpemVkVGV4dC5yZXBsYWNlKC8mZXF1YWxzOy9nLCBcIj1cIik7XG4gICAgY29uc3QgbGlua3MgPSBKU09OLnBhcnNlKHNhbml0aXplZFRleHQpO1xuICAgIGluc2VydExpbmtzKGFjdG9yLCBsaW5rcyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBsb2cuZXJyb3IoXCJlcnJvciB3aGlsZSBwYXJzaW5nIGFjdG9yIGxpbmsgdGV4dFwiLCBlKTtcbiAgfVxufTtcbmNvbnN0IGFkZEFMaW5rID0gZnVuY3Rpb24oYWN0b3JJZCwgdGV4dCkge1xuICBjb25zdCBhY3RvciA9IGdldEFjdG9yKGFjdG9ySWQpO1xuICB0cnkge1xuICAgIGNvbnN0IGxpbmtzID0ge307XG4gICAgbGV0IHNhbml0aXplZFRleHQgPSBzYW5pdGl6ZVRleHQodGV4dC50ZXh0LCBnZXRDb25maWcoKSk7XG4gICAgdmFyIHNlcCA9IHNhbml0aXplZFRleHQuaW5kZXhPZihcIkBcIik7XG4gICAgc2FuaXRpemVkVGV4dCA9IHNhbml0aXplZFRleHQucmVwbGFjZSgvJmFtcDsvZywgXCImXCIpO1xuICAgIHNhbml0aXplZFRleHQgPSBzYW5pdGl6ZWRUZXh0LnJlcGxhY2UoLyZlcXVhbHM7L2csIFwiPVwiKTtcbiAgICB2YXIgbGFiZWwgPSBzYW5pdGl6ZWRUZXh0LnNsaWNlKDAsIHNlcCAtIDEpLnRyaW0oKTtcbiAgICB2YXIgbGluayA9IHNhbml0aXplZFRleHQuc2xpY2Uoc2VwICsgMSkudHJpbSgpO1xuICAgIGxpbmtzW2xhYmVsXSA9IGxpbms7XG4gICAgaW5zZXJ0TGlua3MoYWN0b3IsIGxpbmtzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvZy5lcnJvcihcImVycm9yIHdoaWxlIHBhcnNpbmcgYWN0b3IgbGluayB0ZXh0XCIsIGUpO1xuICB9XG59O1xuZnVuY3Rpb24gaW5zZXJ0TGlua3MoYWN0b3IsIGxpbmtzKSB7XG4gIGlmIChhY3Rvci5saW5rcyA9PSBudWxsKSB7XG4gICAgYWN0b3IubGlua3MgPSBsaW5rcztcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gbGlua3MpIHtcbiAgICAgIGFjdG9yLmxpbmtzW2tleV0gPSBsaW5rc1trZXldO1xuICAgIH1cbiAgfVxufVxuY29uc3QgYWRkUHJvcGVydGllcyA9IGZ1bmN0aW9uKGFjdG9ySWQsIHRleHQpIHtcbiAgY29uc3QgYWN0b3IgPSBnZXRBY3RvcihhY3RvcklkKTtcbiAgdHJ5IHtcbiAgICBsZXQgc2FuaXRpemVkVGV4dCA9IHNhbml0aXplVGV4dCh0ZXh0LnRleHQsIGdldENvbmZpZygpKTtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gSlNPTi5wYXJzZShzYW5pdGl6ZWRUZXh0KTtcbiAgICBpbnNlcnRQcm9wZXJ0aWVzKGFjdG9yLCBwcm9wZXJ0aWVzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvZy5lcnJvcihcImVycm9yIHdoaWxlIHBhcnNpbmcgYWN0b3IgcHJvcGVydGllcyB0ZXh0XCIsIGUpO1xuICB9XG59O1xuZnVuY3Rpb24gaW5zZXJ0UHJvcGVydGllcyhhY3RvciwgcHJvcGVydGllcykge1xuICBpZiAoYWN0b3IucHJvcGVydGllcyA9PSBudWxsKSB7XG4gICAgYWN0b3IucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQga2V5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgIGFjdG9yLnByb3BlcnRpZXNba2V5XSA9IHByb3BlcnRpZXNba2V5XTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGJveEVuZCgpIHtcbiAgc3RhdGUucmVjb3Jkcy5jdXJyZW50Qm94ID0gdm9pZCAwO1xufVxuY29uc3QgYWRkRGV0YWlscyA9IGZ1bmN0aW9uKGFjdG9ySWQsIHRleHQpIHtcbiAgY29uc3QgYWN0b3IgPSBnZXRBY3RvcihhY3RvcklkKTtcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRleHQudGV4dCk7XG4gIHRyeSB7XG4gICAgY29uc3QgdGV4dDIgPSBlbGVtLmlubmVySFRNTDtcbiAgICBjb25zdCBkZXRhaWxzID0gSlNPTi5wYXJzZSh0ZXh0Mik7XG4gICAgaWYgKGRldGFpbHNbXCJwcm9wZXJ0aWVzXCJdKSB7XG4gICAgICBpbnNlcnRQcm9wZXJ0aWVzKGFjdG9yLCBkZXRhaWxzW1wicHJvcGVydGllc1wiXSk7XG4gICAgfVxuICAgIGlmIChkZXRhaWxzW1wibGlua3NcIl0pIHtcbiAgICAgIGluc2VydExpbmtzKGFjdG9yLCBkZXRhaWxzW1wibGlua3NcIl0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvZy5lcnJvcihcImVycm9yIHdoaWxlIHBhcnNpbmcgYWN0b3IgZGV0YWlscyB0ZXh0XCIsIGUpO1xuICB9XG59O1xuY29uc3QgZ2V0QWN0b3JQcm9wZXJ0eSA9IGZ1bmN0aW9uKGFjdG9yLCBrZXkpIHtcbiAgaWYgKGFjdG9yICE9PSB2b2lkIDAgJiYgYWN0b3IucHJvcGVydGllcyAhPT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIGFjdG9yLnByb3BlcnRpZXNba2V5XTtcbiAgfVxuICByZXR1cm4gdm9pZCAwO1xufTtcbmNvbnN0IGFwcGx5ID0gZnVuY3Rpb24ocGFyYW0pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocGFyYW0pKSB7XG4gICAgcGFyYW0uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICBhcHBseShpdGVtKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHBhcmFtLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJzZXF1ZW5jZUluZGV4XCI6XG4gICAgICAgIHN0YXRlLnJlY29yZHMubWVzc2FnZXMucHVzaCh7XG4gICAgICAgICAgZnJvbTogdm9pZCAwLFxuICAgICAgICAgIHRvOiB2b2lkIDAsXG4gICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgc3RhcnQ6IHBhcmFtLnNlcXVlbmNlSW5kZXgsXG4gICAgICAgICAgICBzdGVwOiBwYXJhbS5zZXF1ZW5jZUluZGV4U3RlcCxcbiAgICAgICAgICAgIHZpc2libGU6IHBhcmFtLnNlcXVlbmNlVmlzaWJsZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgd3JhcDogZmFsc2UsXG4gICAgICAgICAgdHlwZTogcGFyYW0uc2lnbmFsVHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYWRkUGFydGljaXBhbnRcIjpcbiAgICAgICAgYWRkQWN0b3IocGFyYW0uYWN0b3IsIHBhcmFtLmFjdG9yLCBwYXJhbS5kZXNjcmlwdGlvbiwgcGFyYW0uZHJhdyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImNyZWF0ZVBhcnRpY2lwYW50XCI6XG4gICAgICAgIGlmIChzdGF0ZS5yZWNvcmRzLmFjdG9yc1twYXJhbS5hY3Rvcl0pIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBcIkl0IGlzIG5vdCBwb3NzaWJsZSB0byBoYXZlIGFjdG9ycyB3aXRoIHRoZSBzYW1lIGlkLCBldmVuIGlmIG9uZSBpcyBkZXN0cm95ZWQgYmVmb3JlIHRoZSBuZXh0IGlzIGNyZWF0ZWQuIFVzZSAnQVMnIGFsaWFzZXMgdG8gc2ltdWxhdGUgdGhlIGJlaGF2aW9yXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLnJlY29yZHMubGFzdENyZWF0ZWQgPSBwYXJhbS5hY3RvcjtcbiAgICAgICAgYWRkQWN0b3IocGFyYW0uYWN0b3IsIHBhcmFtLmFjdG9yLCBwYXJhbS5kZXNjcmlwdGlvbiwgcGFyYW0uZHJhdyk7XG4gICAgICAgIHN0YXRlLnJlY29yZHMuY3JlYXRlZEFjdG9yc1twYXJhbS5hY3Rvcl0gPSBzdGF0ZS5yZWNvcmRzLm1lc3NhZ2VzLmxlbmd0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGVzdHJveVBhcnRpY2lwYW50XCI6XG4gICAgICAgIHN0YXRlLnJlY29yZHMubGFzdERlc3Ryb3llZCA9IHBhcmFtLmFjdG9yO1xuICAgICAgICBzdGF0ZS5yZWNvcmRzLmRlc3Ryb3llZEFjdG9yc1twYXJhbS5hY3Rvcl0gPSBzdGF0ZS5yZWNvcmRzLm1lc3NhZ2VzLmxlbmd0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYWN0aXZlU3RhcnRcIjpcbiAgICAgICAgYWRkU2lnbmFsKHBhcmFtLmFjdG9yLCB2b2lkIDAsIHZvaWQgMCwgcGFyYW0uc2lnbmFsVHlwZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImFjdGl2ZUVuZFwiOlxuICAgICAgICBhZGRTaWduYWwocGFyYW0uYWN0b3IsIHZvaWQgMCwgdm9pZCAwLCBwYXJhbS5zaWduYWxUeXBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYWRkTm90ZVwiOlxuICAgICAgICBhZGROb3RlKHBhcmFtLmFjdG9yLCBwYXJhbS5wbGFjZW1lbnQsIHBhcmFtLnRleHQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJhZGRMaW5rc1wiOlxuICAgICAgICBhZGRMaW5rcyhwYXJhbS5hY3RvciwgcGFyYW0udGV4dCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImFkZEFMaW5rXCI6XG4gICAgICAgIGFkZEFMaW5rKHBhcmFtLmFjdG9yLCBwYXJhbS50ZXh0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYWRkUHJvcGVydGllc1wiOlxuICAgICAgICBhZGRQcm9wZXJ0aWVzKHBhcmFtLmFjdG9yLCBwYXJhbS50ZXh0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYWRkRGV0YWlsc1wiOlxuICAgICAgICBhZGREZXRhaWxzKHBhcmFtLmFjdG9yLCBwYXJhbS50ZXh0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYWRkTWVzc2FnZVwiOlxuICAgICAgICBpZiAoc3RhdGUucmVjb3Jkcy5sYXN0Q3JlYXRlZCkge1xuICAgICAgICAgIGlmIChwYXJhbS50byAhPT0gc3RhdGUucmVjb3Jkcy5sYXN0Q3JlYXRlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBcIlRoZSBjcmVhdGVkIHBhcnRpY2lwYW50IFwiICsgc3RhdGUucmVjb3Jkcy5sYXN0Q3JlYXRlZCArIFwiIGRvZXMgbm90IGhhdmUgYW4gYXNzb2NpYXRlZCBjcmVhdGluZyBtZXNzYWdlIGFmdGVyIGl0cyBkZWNsYXJhdGlvbi4gUGxlYXNlIGNoZWNrIHRoZSBzZXF1ZW5jZSBkaWFncmFtLlwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZS5yZWNvcmRzLmxhc3RDcmVhdGVkID0gdm9pZCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5yZWNvcmRzLmxhc3REZXN0cm95ZWQpIHtcbiAgICAgICAgICBpZiAocGFyYW0udG8gIT09IHN0YXRlLnJlY29yZHMubGFzdERlc3Ryb3llZCAmJiBwYXJhbS5mcm9tICE9PSBzdGF0ZS5yZWNvcmRzLmxhc3REZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgXCJUaGUgZGVzdHJveWVkIHBhcnRpY2lwYW50IFwiICsgc3RhdGUucmVjb3Jkcy5sYXN0RGVzdHJveWVkICsgXCIgZG9lcyBub3QgaGF2ZSBhbiBhc3NvY2lhdGVkIGRlc3Ryb3lpbmcgbWVzc2FnZSBhZnRlciBpdHMgZGVjbGFyYXRpb24uIFBsZWFzZSBjaGVjayB0aGUgc2VxdWVuY2UgZGlhZ3JhbS5cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUucmVjb3Jkcy5sYXN0RGVzdHJveWVkID0gdm9pZCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhZGRTaWduYWwocGFyYW0uZnJvbSwgcGFyYW0udG8sIHBhcmFtLm1zZywgcGFyYW0uc2lnbmFsVHlwZSwgcGFyYW0uYWN0aXZhdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJib3hTdGFydFwiOlxuICAgICAgICBhZGRCb3gocGFyYW0uYm94RGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImJveEVuZFwiOlxuICAgICAgICBib3hFbmQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibG9vcFN0YXJ0XCI6XG4gICAgICAgIGFkZFNpZ25hbCh2b2lkIDAsIHZvaWQgMCwgcGFyYW0ubG9vcFRleHQsIHBhcmFtLnNpZ25hbFR5cGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsb29wRW5kXCI6XG4gICAgICAgIGFkZFNpZ25hbCh2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBwYXJhbS5zaWduYWxUeXBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicmVjdFN0YXJ0XCI6XG4gICAgICAgIGFkZFNpZ25hbCh2b2lkIDAsIHZvaWQgMCwgcGFyYW0uY29sb3IsIHBhcmFtLnNpZ25hbFR5cGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJyZWN0RW5kXCI6XG4gICAgICAgIGFkZFNpZ25hbCh2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBwYXJhbS5zaWduYWxUeXBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwib3B0U3RhcnRcIjpcbiAgICAgICAgYWRkU2lnbmFsKHZvaWQgMCwgdm9pZCAwLCBwYXJhbS5vcHRUZXh0LCBwYXJhbS5zaWduYWxUeXBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwib3B0RW5kXCI6XG4gICAgICAgIGFkZFNpZ25hbCh2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBwYXJhbS5zaWduYWxUeXBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYWx0U3RhcnRcIjpcbiAgICAgICAgYWRkU2lnbmFsKHZvaWQgMCwgdm9pZCAwLCBwYXJhbS5hbHRUZXh0LCBwYXJhbS5zaWduYWxUeXBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZWxzZVwiOlxuICAgICAgICBhZGRTaWduYWwodm9pZCAwLCB2b2lkIDAsIHBhcmFtLmFsdFRleHQsIHBhcmFtLnNpZ25hbFR5cGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJhbHRFbmRcIjpcbiAgICAgICAgYWRkU2lnbmFsKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIHBhcmFtLnNpZ25hbFR5cGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzZXRBY2NUaXRsZVwiOlxuICAgICAgICBzZXRBY2NUaXRsZShwYXJhbS50ZXh0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicGFyU3RhcnRcIjpcbiAgICAgICAgYWRkU2lnbmFsKHZvaWQgMCwgdm9pZCAwLCBwYXJhbS5wYXJUZXh0LCBwYXJhbS5zaWduYWxUeXBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYW5kXCI6XG4gICAgICAgIGFkZFNpZ25hbCh2b2lkIDAsIHZvaWQgMCwgcGFyYW0ucGFyVGV4dCwgcGFyYW0uc2lnbmFsVHlwZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInBhckVuZFwiOlxuICAgICAgICBhZGRTaWduYWwodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgcGFyYW0uc2lnbmFsVHlwZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImNyaXRpY2FsU3RhcnRcIjpcbiAgICAgICAgYWRkU2lnbmFsKHZvaWQgMCwgdm9pZCAwLCBwYXJhbS5jcml0aWNhbFRleHQsIHBhcmFtLnNpZ25hbFR5cGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJvcHRpb25cIjpcbiAgICAgICAgYWRkU2lnbmFsKHZvaWQgMCwgdm9pZCAwLCBwYXJhbS5vcHRpb25UZXh0LCBwYXJhbS5zaWduYWxUeXBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiY3JpdGljYWxFbmRcIjpcbiAgICAgICAgYWRkU2lnbmFsKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIHBhcmFtLnNpZ25hbFR5cGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJicmVha1N0YXJ0XCI6XG4gICAgICAgIGFkZFNpZ25hbCh2b2lkIDAsIHZvaWQgMCwgcGFyYW0uYnJlYWtUZXh0LCBwYXJhbS5zaWduYWxUeXBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYnJlYWtFbmRcIjpcbiAgICAgICAgYWRkU2lnbmFsKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIHBhcmFtLnNpZ25hbFR5cGUpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG5jb25zdCBkYiA9IHtcbiAgYWRkQWN0b3IsXG4gIGFkZE1lc3NhZ2UsXG4gIGFkZFNpZ25hbCxcbiAgYWRkTGlua3MsXG4gIGFkZERldGFpbHMsXG4gIGFkZFByb3BlcnRpZXMsXG4gIGF1dG9XcmFwLFxuICBzZXRXcmFwLFxuICBlbmFibGVTZXF1ZW5jZU51bWJlcnMsXG4gIGRpc2FibGVTZXF1ZW5jZU51bWJlcnMsXG4gIHNob3dTZXF1ZW5jZU51bWJlcnMsXG4gIGdldE1lc3NhZ2VzLFxuICBnZXRBY3RvcnMsXG4gIGdldENyZWF0ZWRBY3RvcnMsXG4gIGdldERlc3Ryb3llZEFjdG9ycyxcbiAgZ2V0QWN0b3IsXG4gIGdldEFjdG9yS2V5cyxcbiAgZ2V0QWN0b3JQcm9wZXJ0eSxcbiAgZ2V0QWNjVGl0bGUsXG4gIGdldEJveGVzLFxuICBnZXREaWFncmFtVGl0bGUsXG4gIHNldERpYWdyYW1UaXRsZSxcbiAgZ2V0Q29uZmlnOiAoKSA9PiBnZXRDb25maWcoKS5zZXF1ZW5jZSxcbiAgY2xlYXIsXG4gIHBhcnNlTWVzc2FnZSxcbiAgcGFyc2VCb3hEYXRhLFxuICBMSU5FVFlQRSxcbiAgQVJST1dUWVBFLFxuICBQTEFDRU1FTlQsXG4gIGFkZE5vdGUsXG4gIHNldEFjY1RpdGxlLFxuICBhcHBseSxcbiAgc2V0QWNjRGVzY3JpcHRpb24sXG4gIGdldEFjY0Rlc2NyaXB0aW9uLFxuICBoYXNBdExlYXN0T25lQm94LFxuICBoYXNBdExlYXN0T25lQm94V2l0aFRpdGxlXG59O1xuY29uc3QgZ2V0U3R5bGVzID0gKG9wdGlvbnMpID0+IGAuYWN0b3Ige1xuICAgIHN0cm9rZTogJHtvcHRpb25zLmFjdG9yQm9yZGVyfTtcbiAgICBmaWxsOiAke29wdGlvbnMuYWN0b3JCa2d9O1xuICB9XG5cbiAgdGV4dC5hY3RvciA+IHRzcGFuIHtcbiAgICBmaWxsOiAke29wdGlvbnMuYWN0b3JUZXh0Q29sb3J9O1xuICAgIHN0cm9rZTogbm9uZTtcbiAgfVxuXG4gIC5hY3Rvci1saW5lIHtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy5hY3RvckxpbmVDb2xvcn07XG4gIH1cblxuICAubWVzc2FnZUxpbmUwIHtcbiAgICBzdHJva2Utd2lkdGg6IDEuNTtcbiAgICBzdHJva2UtZGFzaGFycmF5OiBub25lO1xuICAgIHN0cm9rZTogJHtvcHRpb25zLnNpZ25hbENvbG9yfTtcbiAgfVxuXG4gIC5tZXNzYWdlTGluZTEge1xuICAgIHN0cm9rZS13aWR0aDogMS41O1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDIsIDI7XG4gICAgc3Ryb2tlOiAke29wdGlvbnMuc2lnbmFsQ29sb3J9O1xuICB9XG5cbiAgI2Fycm93aGVhZCBwYXRoIHtcbiAgICBmaWxsOiAke29wdGlvbnMuc2lnbmFsQ29sb3J9O1xuICAgIHN0cm9rZTogJHtvcHRpb25zLnNpZ25hbENvbG9yfTtcbiAgfVxuXG4gIC5zZXF1ZW5jZU51bWJlciB7XG4gICAgZmlsbDogJHtvcHRpb25zLnNlcXVlbmNlTnVtYmVyQ29sb3J9O1xuICB9XG5cbiAgI3NlcXVlbmNlbnVtYmVyIHtcbiAgICBmaWxsOiAke29wdGlvbnMuc2lnbmFsQ29sb3J9O1xuICB9XG5cbiAgI2Nyb3NzaGVhZCBwYXRoIHtcbiAgICBmaWxsOiAke29wdGlvbnMuc2lnbmFsQ29sb3J9O1xuICAgIHN0cm9rZTogJHtvcHRpb25zLnNpZ25hbENvbG9yfTtcbiAgfVxuXG4gIC5tZXNzYWdlVGV4dCB7XG4gICAgZmlsbDogJHtvcHRpb25zLnNpZ25hbFRleHRDb2xvcn07XG4gICAgc3Ryb2tlOiBub25lO1xuICB9XG5cbiAgLmxhYmVsQm94IHtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy5sYWJlbEJveEJvcmRlckNvbG9yfTtcbiAgICBmaWxsOiAke29wdGlvbnMubGFiZWxCb3hCa2dDb2xvcn07XG4gIH1cblxuICAubGFiZWxUZXh0LCAubGFiZWxUZXh0ID4gdHNwYW4ge1xuICAgIGZpbGw6ICR7b3B0aW9ucy5sYWJlbFRleHRDb2xvcn07XG4gICAgc3Ryb2tlOiBub25lO1xuICB9XG5cbiAgLmxvb3BUZXh0LCAubG9vcFRleHQgPiB0c3BhbiB7XG4gICAgZmlsbDogJHtvcHRpb25zLmxvb3BUZXh0Q29sb3J9O1xuICAgIHN0cm9rZTogbm9uZTtcbiAgfVxuXG4gIC5sb29wTGluZSB7XG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMiwgMjtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy5sYWJlbEJveEJvcmRlckNvbG9yfTtcbiAgICBmaWxsOiAke29wdGlvbnMubGFiZWxCb3hCb3JkZXJDb2xvcn07XG4gIH1cblxuICAubm90ZSB7XG4gICAgLy9zdHJva2U6ICNkZWNjOTM7XG4gICAgc3Ryb2tlOiAke29wdGlvbnMubm90ZUJvcmRlckNvbG9yfTtcbiAgICBmaWxsOiAke29wdGlvbnMubm90ZUJrZ0NvbG9yfTtcbiAgfVxuXG4gIC5ub3RlVGV4dCwgLm5vdGVUZXh0ID4gdHNwYW4ge1xuICAgIGZpbGw6ICR7b3B0aW9ucy5ub3RlVGV4dENvbG9yfTtcbiAgICBzdHJva2U6IG5vbmU7XG4gIH1cblxuICAuYWN0aXZhdGlvbjAge1xuICAgIGZpbGw6ICR7b3B0aW9ucy5hY3RpdmF0aW9uQmtnQ29sb3J9O1xuICAgIHN0cm9rZTogJHtvcHRpb25zLmFjdGl2YXRpb25Cb3JkZXJDb2xvcn07XG4gIH1cblxuICAuYWN0aXZhdGlvbjEge1xuICAgIGZpbGw6ICR7b3B0aW9ucy5hY3RpdmF0aW9uQmtnQ29sb3J9O1xuICAgIHN0cm9rZTogJHtvcHRpb25zLmFjdGl2YXRpb25Cb3JkZXJDb2xvcn07XG4gIH1cblxuICAuYWN0aXZhdGlvbjIge1xuICAgIGZpbGw6ICR7b3B0aW9ucy5hY3RpdmF0aW9uQmtnQ29sb3J9O1xuICAgIHN0cm9rZTogJHtvcHRpb25zLmFjdGl2YXRpb25Cb3JkZXJDb2xvcn07XG4gIH1cblxuICAuYWN0b3JQb3B1cE1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIC5hY3RvclBvcHVwTWVudVBhbmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZmlsbDogJHtvcHRpb25zLmFjdG9yQmtnfTtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCA1cHggMnB4IHJnYigwIDAgMCAvIDAuNCkpO1xufVxuICAuYWN0b3ItbWFuIGxpbmUge1xuICAgIHN0cm9rZTogJHtvcHRpb25zLmFjdG9yQm9yZGVyfTtcbiAgICBmaWxsOiAke29wdGlvbnMuYWN0b3JCa2d9O1xuICB9XG4gIC5hY3Rvci1tYW4gY2lyY2xlLCBsaW5lIHtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy5hY3RvckJvcmRlcn07XG4gICAgZmlsbDogJHtvcHRpb25zLmFjdG9yQmtnfTtcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcbiAgfVxuYDtcbmNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcztcbmNvbnN0IEFDVE9SX1RZUEVfV0lEVEggPSAxOCAqIDI7XG5jb25zdCBUT1BfQUNUT1JfQ0xBU1MgPSBcImFjdG9yLXRvcFwiO1xuY29uc3QgQk9UVE9NX0FDVE9SX0NMQVNTID0gXCJhY3Rvci1ib3R0b21cIjtcbmNvbnN0IGRyYXdSZWN0ID0gZnVuY3Rpb24oZWxlbSwgcmVjdERhdGEpIHtcbiAgcmV0dXJuIGRyYXdSZWN0JDEoZWxlbSwgcmVjdERhdGEpO1xufTtcbmNvbnN0IGRyYXdQb3B1cCA9IGZ1bmN0aW9uKGVsZW0sIGFjdG9yLCBtaW5NZW51V2lkdGgsIHRleHRBdHRycywgZm9yY2VNZW51cykge1xuICBpZiAoYWN0b3IubGlua3MgPT09IHZvaWQgMCB8fCBhY3Rvci5saW5rcyA9PT0gbnVsbCB8fCBPYmplY3Qua2V5cyhhY3Rvci5saW5rcykubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHsgaGVpZ2h0OiAwLCB3aWR0aDogMCB9O1xuICB9XG4gIGNvbnN0IGxpbmtzID0gYWN0b3IubGlua3M7XG4gIGNvbnN0IGFjdG9yQ250MiA9IGFjdG9yLmFjdG9yQ250O1xuICBjb25zdCByZWN0RGF0YSA9IGFjdG9yLnJlY3REYXRhO1xuICB2YXIgZGlzcGxheVZhbHVlID0gXCJub25lXCI7XG4gIGlmIChmb3JjZU1lbnVzKSB7XG4gICAgZGlzcGxheVZhbHVlID0gXCJibG9jayAhaW1wb3J0YW50XCI7XG4gIH1cbiAgY29uc3QgZyA9IGVsZW0uYXBwZW5kKFwiZ1wiKTtcbiAgZy5hdHRyKFwiaWRcIiwgXCJhY3RvclwiICsgYWN0b3JDbnQyICsgXCJfcG9wdXBcIik7XG4gIGcuYXR0cihcImNsYXNzXCIsIFwiYWN0b3JQb3B1cE1lbnVcIik7XG4gIGcuYXR0cihcImRpc3BsYXlcIiwgZGlzcGxheVZhbHVlKTtcbiAgdmFyIGFjdG9yQ2xhc3MgPSBcIlwiO1xuICBpZiAocmVjdERhdGEuY2xhc3MgIT09IHZvaWQgMCkge1xuICAgIGFjdG9yQ2xhc3MgPSBcIiBcIiArIHJlY3REYXRhLmNsYXNzO1xuICB9XG4gIGxldCBtZW51V2lkdGggPSByZWN0RGF0YS53aWR0aCA+IG1pbk1lbnVXaWR0aCA/IHJlY3REYXRhLndpZHRoIDogbWluTWVudVdpZHRoO1xuICBjb25zdCByZWN0RWxlbSA9IGcuYXBwZW5kKFwicmVjdFwiKTtcbiAgcmVjdEVsZW0uYXR0cihcImNsYXNzXCIsIFwiYWN0b3JQb3B1cE1lbnVQYW5lbFwiICsgYWN0b3JDbGFzcyk7XG4gIHJlY3RFbGVtLmF0dHIoXCJ4XCIsIHJlY3REYXRhLngpO1xuICByZWN0RWxlbS5hdHRyKFwieVwiLCByZWN0RGF0YS5oZWlnaHQpO1xuICByZWN0RWxlbS5hdHRyKFwiZmlsbFwiLCByZWN0RGF0YS5maWxsKTtcbiAgcmVjdEVsZW0uYXR0cihcInN0cm9rZVwiLCByZWN0RGF0YS5zdHJva2UpO1xuICByZWN0RWxlbS5hdHRyKFwid2lkdGhcIiwgbWVudVdpZHRoKTtcbiAgcmVjdEVsZW0uYXR0cihcImhlaWdodFwiLCByZWN0RGF0YS5oZWlnaHQpO1xuICByZWN0RWxlbS5hdHRyKFwicnhcIiwgcmVjdERhdGEucngpO1xuICByZWN0RWxlbS5hdHRyKFwicnlcIiwgcmVjdERhdGEucnkpO1xuICBpZiAobGlua3MgIT0gbnVsbCkge1xuICAgIHZhciBsaW5rWSA9IDIwO1xuICAgIGZvciAobGV0IGtleSBpbiBsaW5rcykge1xuICAgICAgdmFyIGxpbmtFbGVtID0gZy5hcHBlbmQoXCJhXCIpO1xuICAgICAgdmFyIHNhbml0aXplZExpbmsgPSBzYW5pdGl6ZVVybChsaW5rc1trZXldKTtcbiAgICAgIGxpbmtFbGVtLmF0dHIoXCJ4bGluazpocmVmXCIsIHNhbml0aXplZExpbmspO1xuICAgICAgbGlua0VsZW0uYXR0cihcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgICAgIF9kcmF3TWVudUl0ZW1UZXh0Q2FuZGlkYXRlRnVuYyh0ZXh0QXR0cnMpKFxuICAgICAgICBrZXksXG4gICAgICAgIGxpbmtFbGVtLFxuICAgICAgICByZWN0RGF0YS54ICsgMTAsXG4gICAgICAgIHJlY3REYXRhLmhlaWdodCArIGxpbmtZLFxuICAgICAgICBtZW51V2lkdGgsXG4gICAgICAgIDIwLFxuICAgICAgICB7IGNsYXNzOiBcImFjdG9yXCIgfSxcbiAgICAgICAgdGV4dEF0dHJzXG4gICAgICApO1xuICAgICAgbGlua1kgKz0gMzA7XG4gICAgfVxuICB9XG4gIHJlY3RFbGVtLmF0dHIoXCJoZWlnaHRcIiwgbGlua1kpO1xuICByZXR1cm4geyBoZWlnaHQ6IHJlY3REYXRhLmhlaWdodCArIGxpbmtZLCB3aWR0aDogbWVudVdpZHRoIH07XG59O1xuY29uc3QgcG9wdXBNZW51VG9nZ2xlID0gZnVuY3Rpb24ocG9wSWQpIHtcbiAgcmV0dXJuIFwidmFyIHB1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1wiICsgcG9wSWQgKyBcIicpOyBpZiAocHUgIT0gbnVsbCkgeyBwdS5zdHlsZS5kaXNwbGF5ID0gcHUuc3R5bGUuZGlzcGxheSA9PSAnYmxvY2snID8gJ25vbmUnIDogJ2Jsb2NrJzsgfVwiO1xufTtcbmNvbnN0IGRyYXdLYXRleCA9IGFzeW5jIGZ1bmN0aW9uKGVsZW0sIHRleHREYXRhLCBtc2dNb2RlbCA9IG51bGwpIHtcbiAgbGV0IHRleHRFbGVtID0gZWxlbS5hcHBlbmQoXCJmb3JlaWduT2JqZWN0XCIpO1xuICBjb25zdCBsaW5lcyA9IGF3YWl0IHJlbmRlckthdGV4KHRleHREYXRhLnRleHQsIGdldENvbmZpZyQxKCkpO1xuICBjb25zdCBkaXZFbGVtID0gdGV4dEVsZW0uYXBwZW5kKFwieGh0bWw6ZGl2XCIpLmF0dHIoXCJzdHlsZVwiLCBcIndpZHRoOiBmaXQtY29udGVudDtcIikuYXR0cihcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKS5odG1sKGxpbmVzKTtcbiAgY29uc3QgZGltID0gZGl2RWxlbS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHRleHRFbGVtLmF0dHIoXCJoZWlnaHRcIiwgTWF0aC5yb3VuZChkaW0uaGVpZ2h0KSkuYXR0cihcIndpZHRoXCIsIE1hdGgucm91bmQoZGltLndpZHRoKSk7XG4gIGlmICh0ZXh0RGF0YS5jbGFzcyA9PT0gXCJub3RlVGV4dFwiKSB7XG4gICAgY29uc3QgcmVjdEVsZW0gPSBlbGVtLm5vZGUoKS5maXJzdENoaWxkO1xuICAgIHJlY3RFbGVtLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBkaW0uaGVpZ2h0ICsgMiAqIHRleHREYXRhLnRleHRNYXJnaW4pO1xuICAgIGNvbnN0IHJlY3REaW0gPSByZWN0RWxlbS5nZXRCQm94KCk7XG4gICAgdGV4dEVsZW0uYXR0cihcInhcIiwgTWF0aC5yb3VuZChyZWN0RGltLnggKyByZWN0RGltLndpZHRoIC8gMiAtIGRpbS53aWR0aCAvIDIpKS5hdHRyKFwieVwiLCBNYXRoLnJvdW5kKHJlY3REaW0ueSArIHJlY3REaW0uaGVpZ2h0IC8gMiAtIGRpbS5oZWlnaHQgLyAyKSk7XG4gIH0gZWxzZSBpZiAobXNnTW9kZWwpIHtcbiAgICBsZXQgeyBzdGFydHgsIHN0b3B4LCBzdGFydHkgfSA9IG1zZ01vZGVsO1xuICAgIGlmIChzdGFydHggPiBzdG9weCkge1xuICAgICAgY29uc3QgdGVtcCA9IHN0YXJ0eDtcbiAgICAgIHN0YXJ0eCA9IHN0b3B4O1xuICAgICAgc3RvcHggPSB0ZW1wO1xuICAgIH1cbiAgICB0ZXh0RWxlbS5hdHRyKFwieFwiLCBNYXRoLnJvdW5kKHN0YXJ0eCArIE1hdGguYWJzKHN0YXJ0eCAtIHN0b3B4KSAvIDIgLSBkaW0ud2lkdGggLyAyKSk7XG4gICAgaWYgKHRleHREYXRhLmNsYXNzID09PSBcImxvb3BUZXh0XCIpIHtcbiAgICAgIHRleHRFbGVtLmF0dHIoXCJ5XCIsIE1hdGgucm91bmQoc3RhcnR5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHRFbGVtLmF0dHIoXCJ5XCIsIE1hdGgucm91bmQoc3RhcnR5IC0gZGltLmhlaWdodCkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW3RleHRFbGVtXTtcbn07XG5jb25zdCBkcmF3VGV4dCA9IGZ1bmN0aW9uKGVsZW0sIHRleHREYXRhKSB7XG4gIGxldCBwcmV2VGV4dEhlaWdodCA9IDA7XG4gIGxldCB0ZXh0SGVpZ2h0ID0gMDtcbiAgY29uc3QgbGluZXMgPSB0ZXh0RGF0YS50ZXh0LnNwbGl0KGNvbW1vbi5saW5lQnJlYWtSZWdleCk7XG4gIGNvbnN0IFtfdGV4dEZvbnRTaXplLCBfdGV4dEZvbnRTaXplUHhdID0gcGFyc2VGb250U2l6ZSh0ZXh0RGF0YS5mb250U2l6ZSk7XG4gIGxldCB0ZXh0RWxlbXMgPSBbXTtcbiAgbGV0IGR5ID0gMDtcbiAgbGV0IHlmdW5jID0gKCkgPT4gdGV4dERhdGEueTtcbiAgaWYgKHRleHREYXRhLnZhbGlnbiAhPT0gdm9pZCAwICYmIHRleHREYXRhLnRleHRNYXJnaW4gIT09IHZvaWQgMCAmJiB0ZXh0RGF0YS50ZXh0TWFyZ2luID4gMCkge1xuICAgIHN3aXRjaCAodGV4dERhdGEudmFsaWduKSB7XG4gICAgICBjYXNlIFwidG9wXCI6XG4gICAgICBjYXNlIFwic3RhcnRcIjpcbiAgICAgICAgeWZ1bmMgPSAoKSA9PiBNYXRoLnJvdW5kKHRleHREYXRhLnkgKyB0ZXh0RGF0YS50ZXh0TWFyZ2luKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWlkZGxlXCI6XG4gICAgICBjYXNlIFwiY2VudGVyXCI6XG4gICAgICAgIHlmdW5jID0gKCkgPT4gTWF0aC5yb3VuZCh0ZXh0RGF0YS55ICsgKHByZXZUZXh0SGVpZ2h0ICsgdGV4dEhlaWdodCArIHRleHREYXRhLnRleHRNYXJnaW4pIC8gMik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICB5ZnVuYyA9ICgpID0+IE1hdGgucm91bmQoXG4gICAgICAgICAgdGV4dERhdGEueSArIChwcmV2VGV4dEhlaWdodCArIHRleHRIZWlnaHQgKyAyICogdGV4dERhdGEudGV4dE1hcmdpbikgLSB0ZXh0RGF0YS50ZXh0TWFyZ2luXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBpZiAodGV4dERhdGEuYW5jaG9yICE9PSB2b2lkIDAgJiYgdGV4dERhdGEudGV4dE1hcmdpbiAhPT0gdm9pZCAwICYmIHRleHREYXRhLndpZHRoICE9PSB2b2lkIDApIHtcbiAgICBzd2l0Y2ggKHRleHREYXRhLmFuY2hvcikge1xuICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgIGNhc2UgXCJzdGFydFwiOlxuICAgICAgICB0ZXh0RGF0YS54ID0gTWF0aC5yb3VuZCh0ZXh0RGF0YS54ICsgdGV4dERhdGEudGV4dE1hcmdpbik7XG4gICAgICAgIHRleHREYXRhLmFuY2hvciA9IFwic3RhcnRcIjtcbiAgICAgICAgdGV4dERhdGEuZG9taW5hbnRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICAgIHRleHREYXRhLmFsaWdubWVudEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWlkZGxlXCI6XG4gICAgICBjYXNlIFwiY2VudGVyXCI6XG4gICAgICAgIHRleHREYXRhLnggPSBNYXRoLnJvdW5kKHRleHREYXRhLnggKyB0ZXh0RGF0YS53aWR0aCAvIDIpO1xuICAgICAgICB0ZXh0RGF0YS5hbmNob3IgPSBcIm1pZGRsZVwiO1xuICAgICAgICB0ZXh0RGF0YS5kb21pbmFudEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgdGV4dERhdGEuYWxpZ25tZW50QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICB0ZXh0RGF0YS54ID0gTWF0aC5yb3VuZCh0ZXh0RGF0YS54ICsgdGV4dERhdGEud2lkdGggLSB0ZXh0RGF0YS50ZXh0TWFyZ2luKTtcbiAgICAgICAgdGV4dERhdGEuYW5jaG9yID0gXCJlbmRcIjtcbiAgICAgICAgdGV4dERhdGEuZG9taW5hbnRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICAgIHRleHREYXRhLmFsaWdubWVudEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IFtpLCBsaW5lXSBvZiBsaW5lcy5lbnRyaWVzKCkpIHtcbiAgICBpZiAodGV4dERhdGEudGV4dE1hcmdpbiAhPT0gdm9pZCAwICYmIHRleHREYXRhLnRleHRNYXJnaW4gPT09IDAgJiYgX3RleHRGb250U2l6ZSAhPT0gdm9pZCAwKSB7XG4gICAgICBkeSA9IGkgKiBfdGV4dEZvbnRTaXplO1xuICAgIH1cbiAgICBjb25zdCB0ZXh0RWxlbSA9IGVsZW0uYXBwZW5kKFwidGV4dFwiKTtcbiAgICB0ZXh0RWxlbS5hdHRyKFwieFwiLCB0ZXh0RGF0YS54KTtcbiAgICB0ZXh0RWxlbS5hdHRyKFwieVwiLCB5ZnVuYygpKTtcbiAgICBpZiAodGV4dERhdGEuYW5jaG9yICE9PSB2b2lkIDApIHtcbiAgICAgIHRleHRFbGVtLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCB0ZXh0RGF0YS5hbmNob3IpLmF0dHIoXCJkb21pbmFudC1iYXNlbGluZVwiLCB0ZXh0RGF0YS5kb21pbmFudEJhc2VsaW5lKS5hdHRyKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsIHRleHREYXRhLmFsaWdubWVudEJhc2VsaW5lKTtcbiAgICB9XG4gICAgaWYgKHRleHREYXRhLmZvbnRGYW1pbHkgIT09IHZvaWQgMCkge1xuICAgICAgdGV4dEVsZW0uc3R5bGUoXCJmb250LWZhbWlseVwiLCB0ZXh0RGF0YS5mb250RmFtaWx5KTtcbiAgICB9XG4gICAgaWYgKF90ZXh0Rm9udFNpemVQeCAhPT0gdm9pZCAwKSB7XG4gICAgICB0ZXh0RWxlbS5zdHlsZShcImZvbnQtc2l6ZVwiLCBfdGV4dEZvbnRTaXplUHgpO1xuICAgIH1cbiAgICBpZiAodGV4dERhdGEuZm9udFdlaWdodCAhPT0gdm9pZCAwKSB7XG4gICAgICB0ZXh0RWxlbS5zdHlsZShcImZvbnQtd2VpZ2h0XCIsIHRleHREYXRhLmZvbnRXZWlnaHQpO1xuICAgIH1cbiAgICBpZiAodGV4dERhdGEuZmlsbCAhPT0gdm9pZCAwKSB7XG4gICAgICB0ZXh0RWxlbS5hdHRyKFwiZmlsbFwiLCB0ZXh0RGF0YS5maWxsKTtcbiAgICB9XG4gICAgaWYgKHRleHREYXRhLmNsYXNzICE9PSB2b2lkIDApIHtcbiAgICAgIHRleHRFbGVtLmF0dHIoXCJjbGFzc1wiLCB0ZXh0RGF0YS5jbGFzcyk7XG4gICAgfVxuICAgIGlmICh0ZXh0RGF0YS5keSAhPT0gdm9pZCAwKSB7XG4gICAgICB0ZXh0RWxlbS5hdHRyKFwiZHlcIiwgdGV4dERhdGEuZHkpO1xuICAgIH0gZWxzZSBpZiAoZHkgIT09IDApIHtcbiAgICAgIHRleHRFbGVtLmF0dHIoXCJkeVwiLCBkeSk7XG4gICAgfVxuICAgIGNvbnN0IHRleHQgPSBsaW5lIHx8IFpFUk9fV0lEVEhfU1BBQ0U7XG4gICAgaWYgKHRleHREYXRhLnRzcGFuKSB7XG4gICAgICBjb25zdCBzcGFuID0gdGV4dEVsZW0uYXBwZW5kKFwidHNwYW5cIik7XG4gICAgICBzcGFuLmF0dHIoXCJ4XCIsIHRleHREYXRhLngpO1xuICAgICAgaWYgKHRleHREYXRhLmZpbGwgIT09IHZvaWQgMCkge1xuICAgICAgICBzcGFuLmF0dHIoXCJmaWxsXCIsIHRleHREYXRhLmZpbGwpO1xuICAgICAgfVxuICAgICAgc3Bhbi50ZXh0KHRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0RWxlbS50ZXh0KHRleHQpO1xuICAgIH1cbiAgICBpZiAodGV4dERhdGEudmFsaWduICE9PSB2b2lkIDAgJiYgdGV4dERhdGEudGV4dE1hcmdpbiAhPT0gdm9pZCAwICYmIHRleHREYXRhLnRleHRNYXJnaW4gPiAwKSB7XG4gICAgICB0ZXh0SGVpZ2h0ICs9ICh0ZXh0RWxlbS5fZ3JvdXBzIHx8IHRleHRFbGVtKVswXVswXS5nZXRCQm94KCkuaGVpZ2h0O1xuICAgICAgcHJldlRleHRIZWlnaHQgPSB0ZXh0SGVpZ2h0O1xuICAgIH1cbiAgICB0ZXh0RWxlbXMucHVzaCh0ZXh0RWxlbSk7XG4gIH1cbiAgcmV0dXJuIHRleHRFbGVtcztcbn07XG5jb25zdCBkcmF3TGFiZWwgPSBmdW5jdGlvbihlbGVtLCB0eHRPYmplY3QpIHtcbiAgZnVuY3Rpb24gZ2VuUG9pbnRzKHgsIHksIHdpZHRoLCBoZWlnaHQsIGN1dCkge1xuICAgIHJldHVybiB4ICsgXCIsXCIgKyB5ICsgXCIgXCIgKyAoeCArIHdpZHRoKSArIFwiLFwiICsgeSArIFwiIFwiICsgKHggKyB3aWR0aCkgKyBcIixcIiArICh5ICsgaGVpZ2h0IC0gY3V0KSArIFwiIFwiICsgKHggKyB3aWR0aCAtIGN1dCAqIDEuMikgKyBcIixcIiArICh5ICsgaGVpZ2h0KSArIFwiIFwiICsgeCArIFwiLFwiICsgKHkgKyBoZWlnaHQpO1xuICB9XG4gIGNvbnN0IHBvbHlnb24gPSBlbGVtLmFwcGVuZChcInBvbHlnb25cIik7XG4gIHBvbHlnb24uYXR0cihcInBvaW50c1wiLCBnZW5Qb2ludHModHh0T2JqZWN0LngsIHR4dE9iamVjdC55LCB0eHRPYmplY3Qud2lkdGgsIHR4dE9iamVjdC5oZWlnaHQsIDcpKTtcbiAgcG9seWdvbi5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbEJveFwiKTtcbiAgdHh0T2JqZWN0LnkgPSB0eHRPYmplY3QueSArIHR4dE9iamVjdC5oZWlnaHQgLyAyO1xuICBkcmF3VGV4dChlbGVtLCB0eHRPYmplY3QpO1xuICByZXR1cm4gcG9seWdvbjtcbn07XG5sZXQgYWN0b3JDbnQgPSAtMTtcbmNvbnN0IGZpeExpZmVMaW5lSGVpZ2h0cyA9IChkaWFncmFtMiwgYWN0b3JzLCBhY3RvcktleXMsIGNvbmYyKSA9PiB7XG4gIGlmICghZGlhZ3JhbTIuc2VsZWN0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFjdG9yS2V5cy5mb3JFYWNoKChhY3RvcktleSkgPT4ge1xuICAgIGNvbnN0IGFjdG9yID0gYWN0b3JzW2FjdG9yS2V5XTtcbiAgICBjb25zdCBhY3RvckRPTSA9IGRpYWdyYW0yLnNlbGVjdChcIiNhY3RvclwiICsgYWN0b3IuYWN0b3JDbnQpO1xuICAgIGlmICghY29uZjIubWlycm9yQWN0b3JzICYmIGFjdG9yLnN0b3B5KSB7XG4gICAgICBhY3RvckRPTS5hdHRyKFwieTJcIiwgYWN0b3Iuc3RvcHkgKyBhY3Rvci5oZWlnaHQgLyAyKTtcbiAgICB9IGVsc2UgaWYgKGNvbmYyLm1pcnJvckFjdG9ycykge1xuICAgICAgYWN0b3JET00uYXR0cihcInkyXCIsIGFjdG9yLnN0b3B5KTtcbiAgICB9XG4gIH0pO1xufTtcbmNvbnN0IGRyYXdBY3RvclR5cGVQYXJ0aWNpcGFudCA9IGFzeW5jIGZ1bmN0aW9uKGVsZW0sIGFjdG9yLCBjb25mMiwgaXNGb290ZXIpIHtcbiAgY29uc3QgYWN0b3JZID0gaXNGb290ZXIgPyBhY3Rvci5zdG9weSA6IGFjdG9yLnN0YXJ0eTtcbiAgY29uc3QgY2VudGVyID0gYWN0b3IueCArIGFjdG9yLndpZHRoIC8gMjtcbiAgY29uc3QgY2VudGVyWSA9IGFjdG9yWSArIDU7XG4gIGNvbnN0IGJveHBsdXNMaW5lR3JvdXAgPSBlbGVtLmFwcGVuZChcImdcIikubG93ZXIoKTtcbiAgdmFyIGcgPSBib3hwbHVzTGluZUdyb3VwO1xuICBpZiAoIWlzRm9vdGVyKSB7XG4gICAgYWN0b3JDbnQrKztcbiAgICBpZiAoT2JqZWN0LmtleXMoYWN0b3IubGlua3MgfHwge30pLmxlbmd0aCAmJiAhY29uZjIuZm9yY2VNZW51cykge1xuICAgICAgZy5hdHRyKFwib25jbGlja1wiLCBwb3B1cE1lbnVUb2dnbGUoYGFjdG9yJHthY3RvckNudH1fcG9wdXBgKSkuYXR0cihcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gICAgfVxuICAgIGcuYXBwZW5kKFwibGluZVwiKS5hdHRyKFwiaWRcIiwgXCJhY3RvclwiICsgYWN0b3JDbnQpLmF0dHIoXCJ4MVwiLCBjZW50ZXIpLmF0dHIoXCJ5MVwiLCBjZW50ZXJZKS5hdHRyKFwieDJcIiwgY2VudGVyKS5hdHRyKFwieTJcIiwgMmUzKS5hdHRyKFwiY2xhc3NcIiwgXCJhY3Rvci1saW5lXCIpLmF0dHIoXCJjbGFzc1wiLCBcIjIwMFwiKS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMC41cHhcIikuYXR0cihcInN0cm9rZVwiLCBcIiM5OTlcIik7XG4gICAgZyA9IGJveHBsdXNMaW5lR3JvdXAuYXBwZW5kKFwiZ1wiKTtcbiAgICBhY3Rvci5hY3RvckNudCA9IGFjdG9yQ250O1xuICAgIGlmIChhY3Rvci5saW5rcyAhPSBudWxsKSB7XG4gICAgICBnLmF0dHIoXCJpZFwiLCBcInJvb3QtXCIgKyBhY3RvckNudCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHJlY3QgPSBnZXROb3RlUmVjdCQxKCk7XG4gIHZhciBjc3NjbGFzcyA9IFwiYWN0b3JcIjtcbiAgaWYgKGFjdG9yLnByb3BlcnRpZXMgIT0gbnVsbCAmJiBhY3Rvci5wcm9wZXJ0aWVzW1wiY2xhc3NcIl0pIHtcbiAgICBjc3NjbGFzcyA9IGFjdG9yLnByb3BlcnRpZXNbXCJjbGFzc1wiXTtcbiAgfSBlbHNlIHtcbiAgICByZWN0LmZpbGwgPSBcIiNlYWVhZWFcIjtcbiAgfVxuICBpZiAoaXNGb290ZXIpIHtcbiAgICBjc3NjbGFzcyArPSBgICR7Qk9UVE9NX0FDVE9SX0NMQVNTfWA7XG4gIH0gZWxzZSB7XG4gICAgY3NzY2xhc3MgKz0gYCAke1RPUF9BQ1RPUl9DTEFTU31gO1xuICB9XG4gIHJlY3QueCA9IGFjdG9yLng7XG4gIHJlY3QueSA9IGFjdG9yWTtcbiAgcmVjdC53aWR0aCA9IGFjdG9yLndpZHRoO1xuICByZWN0LmhlaWdodCA9IGFjdG9yLmhlaWdodDtcbiAgcmVjdC5jbGFzcyA9IGNzc2NsYXNzO1xuICByZWN0LnJ4ID0gMztcbiAgcmVjdC5yeSA9IDM7XG4gIHJlY3QubmFtZSA9IGFjdG9yLm5hbWU7XG4gIGNvbnN0IHJlY3RFbGVtID0gZHJhd1JlY3QoZywgcmVjdCk7XG4gIGFjdG9yLnJlY3REYXRhID0gcmVjdDtcbiAgaWYgKGFjdG9yLnByb3BlcnRpZXMgIT0gbnVsbCAmJiBhY3Rvci5wcm9wZXJ0aWVzW1wiaWNvblwiXSkge1xuICAgIGNvbnN0IGljb25TcmMgPSBhY3Rvci5wcm9wZXJ0aWVzW1wiaWNvblwiXS50cmltKCk7XG4gICAgaWYgKGljb25TcmMuY2hhckF0KDApID09PSBcIkBcIikge1xuICAgICAgZHJhd0VtYmVkZGVkSW1hZ2UoZywgcmVjdC54ICsgcmVjdC53aWR0aCAtIDIwLCByZWN0LnkgKyAxMCwgaWNvblNyYy5zdWJzdHIoMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkcmF3SW1hZ2UoZywgcmVjdC54ICsgcmVjdC53aWR0aCAtIDIwLCByZWN0LnkgKyAxMCwgaWNvblNyYyk7XG4gICAgfVxuICB9XG4gIGF3YWl0IF9kcmF3VGV4dENhbmRpZGF0ZUZ1bmMoY29uZjIsIGhhc0thdGV4KGFjdG9yLmRlc2NyaXB0aW9uKSkoXG4gICAgYWN0b3IuZGVzY3JpcHRpb24sXG4gICAgZyxcbiAgICByZWN0LngsXG4gICAgcmVjdC55LFxuICAgIHJlY3Qud2lkdGgsXG4gICAgcmVjdC5oZWlnaHQsXG4gICAgeyBjbGFzczogXCJhY3RvclwiIH0sXG4gICAgY29uZjJcbiAgKTtcbiAgbGV0IGhlaWdodCA9IGFjdG9yLmhlaWdodDtcbiAgaWYgKHJlY3RFbGVtLm5vZGUpIHtcbiAgICBjb25zdCBib3VuZHMyID0gcmVjdEVsZW0ubm9kZSgpLmdldEJCb3goKTtcbiAgICBhY3Rvci5oZWlnaHQgPSBib3VuZHMyLmhlaWdodDtcbiAgICBoZWlnaHQgPSBib3VuZHMyLmhlaWdodDtcbiAgfVxuICByZXR1cm4gaGVpZ2h0O1xufTtcbmNvbnN0IGRyYXdBY3RvclR5cGVBY3RvciA9IGFzeW5jIGZ1bmN0aW9uKGVsZW0sIGFjdG9yLCBjb25mMiwgaXNGb290ZXIpIHtcbiAgY29uc3QgYWN0b3JZID0gaXNGb290ZXIgPyBhY3Rvci5zdG9weSA6IGFjdG9yLnN0YXJ0eTtcbiAgY29uc3QgY2VudGVyID0gYWN0b3IueCArIGFjdG9yLndpZHRoIC8gMjtcbiAgY29uc3QgY2VudGVyWSA9IGFjdG9yWSArIDgwO1xuICBlbGVtLmxvd2VyKCk7XG4gIGlmICghaXNGb290ZXIpIHtcbiAgICBhY3RvckNudCsrO1xuICAgIGVsZW0uYXBwZW5kKFwibGluZVwiKS5hdHRyKFwiaWRcIiwgXCJhY3RvclwiICsgYWN0b3JDbnQpLmF0dHIoXCJ4MVwiLCBjZW50ZXIpLmF0dHIoXCJ5MVwiLCBjZW50ZXJZKS5hdHRyKFwieDJcIiwgY2VudGVyKS5hdHRyKFwieTJcIiwgMmUzKS5hdHRyKFwiY2xhc3NcIiwgXCJhY3Rvci1saW5lXCIpLmF0dHIoXCJjbGFzc1wiLCBcIjIwMFwiKS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMC41cHhcIikuYXR0cihcInN0cm9rZVwiLCBcIiM5OTlcIik7XG4gICAgYWN0b3IuYWN0b3JDbnQgPSBhY3RvckNudDtcbiAgfVxuICBjb25zdCBhY3RFbGVtID0gZWxlbS5hcHBlbmQoXCJnXCIpO1xuICBsZXQgY3NzQ2xhc3MgPSBcImFjdG9yLW1hblwiO1xuICBpZiAoaXNGb290ZXIpIHtcbiAgICBjc3NDbGFzcyArPSBgICR7Qk9UVE9NX0FDVE9SX0NMQVNTfWA7XG4gIH0gZWxzZSB7XG4gICAgY3NzQ2xhc3MgKz0gYCAke1RPUF9BQ1RPUl9DTEFTU31gO1xuICB9XG4gIGFjdEVsZW0uYXR0cihcImNsYXNzXCIsIGNzc0NsYXNzKTtcbiAgYWN0RWxlbS5hdHRyKFwibmFtZVwiLCBhY3Rvci5uYW1lKTtcbiAgY29uc3QgcmVjdCA9IGdldE5vdGVSZWN0JDEoKTtcbiAgcmVjdC54ID0gYWN0b3IueDtcbiAgcmVjdC55ID0gYWN0b3JZO1xuICByZWN0LmZpbGwgPSBcIiNlYWVhZWFcIjtcbiAgcmVjdC53aWR0aCA9IGFjdG9yLndpZHRoO1xuICByZWN0LmhlaWdodCA9IGFjdG9yLmhlaWdodDtcbiAgcmVjdC5jbGFzcyA9IFwiYWN0b3JcIjtcbiAgcmVjdC5yeCA9IDM7XG4gIHJlY3QucnkgPSAzO1xuICBhY3RFbGVtLmFwcGVuZChcImxpbmVcIikuYXR0cihcImlkXCIsIFwiYWN0b3ItbWFuLXRvcnNvXCIgKyBhY3RvckNudCkuYXR0cihcIngxXCIsIGNlbnRlcikuYXR0cihcInkxXCIsIGFjdG9yWSArIDI1KS5hdHRyKFwieDJcIiwgY2VudGVyKS5hdHRyKFwieTJcIiwgYWN0b3JZICsgNDUpO1xuICBhY3RFbGVtLmFwcGVuZChcImxpbmVcIikuYXR0cihcImlkXCIsIFwiYWN0b3ItbWFuLWFybXNcIiArIGFjdG9yQ250KS5hdHRyKFwieDFcIiwgY2VudGVyIC0gQUNUT1JfVFlQRV9XSURUSCAvIDIpLmF0dHIoXCJ5MVwiLCBhY3RvclkgKyAzMykuYXR0cihcIngyXCIsIGNlbnRlciArIEFDVE9SX1RZUEVfV0lEVEggLyAyKS5hdHRyKFwieTJcIiwgYWN0b3JZICsgMzMpO1xuICBhY3RFbGVtLmFwcGVuZChcImxpbmVcIikuYXR0cihcIngxXCIsIGNlbnRlciAtIEFDVE9SX1RZUEVfV0lEVEggLyAyKS5hdHRyKFwieTFcIiwgYWN0b3JZICsgNjApLmF0dHIoXCJ4MlwiLCBjZW50ZXIpLmF0dHIoXCJ5MlwiLCBhY3RvclkgKyA0NSk7XG4gIGFjdEVsZW0uYXBwZW5kKFwibGluZVwiKS5hdHRyKFwieDFcIiwgY2VudGVyKS5hdHRyKFwieTFcIiwgYWN0b3JZICsgNDUpLmF0dHIoXCJ4MlwiLCBjZW50ZXIgKyBBQ1RPUl9UWVBFX1dJRFRIIC8gMiAtIDIpLmF0dHIoXCJ5MlwiLCBhY3RvclkgKyA2MCk7XG4gIGNvbnN0IGNpcmNsZSA9IGFjdEVsZW0uYXBwZW5kKFwiY2lyY2xlXCIpO1xuICBjaXJjbGUuYXR0cihcImN4XCIsIGFjdG9yLnggKyBhY3Rvci53aWR0aCAvIDIpO1xuICBjaXJjbGUuYXR0cihcImN5XCIsIGFjdG9yWSArIDEwKTtcbiAgY2lyY2xlLmF0dHIoXCJyXCIsIDE1KTtcbiAgY2lyY2xlLmF0dHIoXCJ3aWR0aFwiLCBhY3Rvci53aWR0aCk7XG4gIGNpcmNsZS5hdHRyKFwiaGVpZ2h0XCIsIGFjdG9yLmhlaWdodCk7XG4gIGNvbnN0IGJvdW5kczIgPSBhY3RFbGVtLm5vZGUoKS5nZXRCQm94KCk7XG4gIGFjdG9yLmhlaWdodCA9IGJvdW5kczIuaGVpZ2h0O1xuICBhd2FpdCBfZHJhd1RleHRDYW5kaWRhdGVGdW5jKGNvbmYyLCBoYXNLYXRleChhY3Rvci5kZXNjcmlwdGlvbikpKFxuICAgIGFjdG9yLmRlc2NyaXB0aW9uLFxuICAgIGFjdEVsZW0sXG4gICAgcmVjdC54LFxuICAgIHJlY3QueSArIDM1LFxuICAgIHJlY3Qud2lkdGgsXG4gICAgcmVjdC5oZWlnaHQsXG4gICAgeyBjbGFzczogXCJhY3RvclwiIH0sXG4gICAgY29uZjJcbiAgKTtcbiAgcmV0dXJuIGFjdG9yLmhlaWdodDtcbn07XG5jb25zdCBkcmF3QWN0b3IgPSBhc3luYyBmdW5jdGlvbihlbGVtLCBhY3RvciwgY29uZjIsIGlzRm9vdGVyKSB7XG4gIHN3aXRjaCAoYWN0b3IudHlwZSkge1xuICAgIGNhc2UgXCJhY3RvclwiOlxuICAgICAgcmV0dXJuIGF3YWl0IGRyYXdBY3RvclR5cGVBY3RvcihlbGVtLCBhY3RvciwgY29uZjIsIGlzRm9vdGVyKTtcbiAgICBjYXNlIFwicGFydGljaXBhbnRcIjpcbiAgICAgIHJldHVybiBhd2FpdCBkcmF3QWN0b3JUeXBlUGFydGljaXBhbnQoZWxlbSwgYWN0b3IsIGNvbmYyLCBpc0Zvb3Rlcik7XG4gIH1cbn07XG5jb25zdCBkcmF3Qm94ID0gYXN5bmMgZnVuY3Rpb24oZWxlbSwgYm94LCBjb25mMikge1xuICBjb25zdCBib3hwbHVzVGV4dEdyb3VwID0gZWxlbS5hcHBlbmQoXCJnXCIpO1xuICBjb25zdCBnID0gYm94cGx1c1RleHRHcm91cDtcbiAgZHJhd0JhY2tncm91bmRSZWN0KGcsIGJveCk7XG4gIGlmIChib3gubmFtZSkge1xuICAgIGF3YWl0IF9kcmF3VGV4dENhbmRpZGF0ZUZ1bmMoY29uZjIpKFxuICAgICAgYm94Lm5hbWUsXG4gICAgICBnLFxuICAgICAgYm94LngsXG4gICAgICBib3gueSArIChib3gudGV4dE1heEhlaWdodCB8fCAwKSAvIDIsXG4gICAgICBib3gud2lkdGgsXG4gICAgICAwLFxuICAgICAgeyBjbGFzczogXCJ0ZXh0XCIgfSxcbiAgICAgIGNvbmYyXG4gICAgKTtcbiAgfVxuICBnLmxvd2VyKCk7XG59O1xuY29uc3QgYW5jaG9yRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgcmV0dXJuIGVsZW0uYXBwZW5kKFwiZ1wiKTtcbn07XG5jb25zdCBkcmF3QWN0aXZhdGlvbiA9IGZ1bmN0aW9uKGVsZW0sIGJvdW5kczIsIHZlcnRpY2FsUG9zLCBjb25mMiwgYWN0b3JBY3RpdmF0aW9uczIpIHtcbiAgY29uc3QgcmVjdCA9IGdldE5vdGVSZWN0JDEoKTtcbiAgY29uc3QgZyA9IGJvdW5kczIuYW5jaG9yZWQ7XG4gIHJlY3QueCA9IGJvdW5kczIuc3RhcnR4O1xuICByZWN0LnkgPSBib3VuZHMyLnN0YXJ0eTtcbiAgcmVjdC5jbGFzcyA9IFwiYWN0aXZhdGlvblwiICsgYWN0b3JBY3RpdmF0aW9uczIgJSAzO1xuICByZWN0LndpZHRoID0gYm91bmRzMi5zdG9weCAtIGJvdW5kczIuc3RhcnR4O1xuICByZWN0LmhlaWdodCA9IHZlcnRpY2FsUG9zIC0gYm91bmRzMi5zdGFydHk7XG4gIGRyYXdSZWN0KGcsIHJlY3QpO1xufTtcbmNvbnN0IGRyYXdMb29wID0gYXN5bmMgZnVuY3Rpb24oZWxlbSwgbG9vcE1vZGVsLCBsYWJlbFRleHQsIGNvbmYyKSB7XG4gIGNvbnN0IHtcbiAgICBib3hNYXJnaW4sXG4gICAgYm94VGV4dE1hcmdpbixcbiAgICBsYWJlbEJveEhlaWdodCxcbiAgICBsYWJlbEJveFdpZHRoLFxuICAgIG1lc3NhZ2VGb250RmFtaWx5OiBmb250RmFtaWx5LFxuICAgIG1lc3NhZ2VGb250U2l6ZTogZm9udFNpemUsXG4gICAgbWVzc2FnZUZvbnRXZWlnaHQ6IGZvbnRXZWlnaHRcbiAgfSA9IGNvbmYyO1xuICBjb25zdCBnID0gZWxlbS5hcHBlbmQoXCJnXCIpO1xuICBjb25zdCBkcmF3TG9vcExpbmUgPSBmdW5jdGlvbihzdGFydHgsIHN0YXJ0eSwgc3RvcHgsIHN0b3B5KSB7XG4gICAgcmV0dXJuIGcuYXBwZW5kKFwibGluZVwiKS5hdHRyKFwieDFcIiwgc3RhcnR4KS5hdHRyKFwieTFcIiwgc3RhcnR5KS5hdHRyKFwieDJcIiwgc3RvcHgpLmF0dHIoXCJ5MlwiLCBzdG9weSkuYXR0cihcImNsYXNzXCIsIFwibG9vcExpbmVcIik7XG4gIH07XG4gIGRyYXdMb29wTGluZShsb29wTW9kZWwuc3RhcnR4LCBsb29wTW9kZWwuc3RhcnR5LCBsb29wTW9kZWwuc3RvcHgsIGxvb3BNb2RlbC5zdGFydHkpO1xuICBkcmF3TG9vcExpbmUobG9vcE1vZGVsLnN0b3B4LCBsb29wTW9kZWwuc3RhcnR5LCBsb29wTW9kZWwuc3RvcHgsIGxvb3BNb2RlbC5zdG9weSk7XG4gIGRyYXdMb29wTGluZShsb29wTW9kZWwuc3RhcnR4LCBsb29wTW9kZWwuc3RvcHksIGxvb3BNb2RlbC5zdG9weCwgbG9vcE1vZGVsLnN0b3B5KTtcbiAgZHJhd0xvb3BMaW5lKGxvb3BNb2RlbC5zdGFydHgsIGxvb3BNb2RlbC5zdGFydHksIGxvb3BNb2RlbC5zdGFydHgsIGxvb3BNb2RlbC5zdG9weSk7XG4gIGlmIChsb29wTW9kZWwuc2VjdGlvbnMgIT09IHZvaWQgMCkge1xuICAgIGxvb3BNb2RlbC5zZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGRyYXdMb29wTGluZShsb29wTW9kZWwuc3RhcnR4LCBpdGVtLnksIGxvb3BNb2RlbC5zdG9weCwgaXRlbS55KS5zdHlsZShcbiAgICAgICAgXCJzdHJva2UtZGFzaGFycmF5XCIsXG4gICAgICAgIFwiMywgM1wiXG4gICAgICApO1xuICAgIH0pO1xuICB9XG4gIGxldCB0eHQgPSBnZXRUZXh0T2JqJDEoKTtcbiAgdHh0LnRleHQgPSBsYWJlbFRleHQ7XG4gIHR4dC54ID0gbG9vcE1vZGVsLnN0YXJ0eDtcbiAgdHh0LnkgPSBsb29wTW9kZWwuc3RhcnR5O1xuICB0eHQuZm9udEZhbWlseSA9IGZvbnRGYW1pbHk7XG4gIHR4dC5mb250U2l6ZSA9IGZvbnRTaXplO1xuICB0eHQuZm9udFdlaWdodCA9IGZvbnRXZWlnaHQ7XG4gIHR4dC5hbmNob3IgPSBcIm1pZGRsZVwiO1xuICB0eHQudmFsaWduID0gXCJtaWRkbGVcIjtcbiAgdHh0LnRzcGFuID0gZmFsc2U7XG4gIHR4dC53aWR0aCA9IGxhYmVsQm94V2lkdGggfHwgNTA7XG4gIHR4dC5oZWlnaHQgPSBsYWJlbEJveEhlaWdodCB8fCAyMDtcbiAgdHh0LnRleHRNYXJnaW4gPSBib3hUZXh0TWFyZ2luO1xuICB0eHQuY2xhc3MgPSBcImxhYmVsVGV4dFwiO1xuICBkcmF3TGFiZWwoZywgdHh0KTtcbiAgdHh0ID0gZ2V0VGV4dE9iaigpO1xuICB0eHQudGV4dCA9IGxvb3BNb2RlbC50aXRsZTtcbiAgdHh0LnggPSBsb29wTW9kZWwuc3RhcnR4ICsgbGFiZWxCb3hXaWR0aCAvIDIgKyAobG9vcE1vZGVsLnN0b3B4IC0gbG9vcE1vZGVsLnN0YXJ0eCkgLyAyO1xuICB0eHQueSA9IGxvb3BNb2RlbC5zdGFydHkgKyBib3hNYXJnaW4gKyBib3hUZXh0TWFyZ2luO1xuICB0eHQuYW5jaG9yID0gXCJtaWRkbGVcIjtcbiAgdHh0LnZhbGlnbiA9IFwibWlkZGxlXCI7XG4gIHR4dC50ZXh0TWFyZ2luID0gYm94VGV4dE1hcmdpbjtcbiAgdHh0LmNsYXNzID0gXCJsb29wVGV4dFwiO1xuICB0eHQuZm9udEZhbWlseSA9IGZvbnRGYW1pbHk7XG4gIHR4dC5mb250U2l6ZSA9IGZvbnRTaXplO1xuICB0eHQuZm9udFdlaWdodCA9IGZvbnRXZWlnaHQ7XG4gIHR4dC53cmFwID0gdHJ1ZTtcbiAgbGV0IHRleHRFbGVtID0gaGFzS2F0ZXgodHh0LnRleHQpID8gYXdhaXQgZHJhd0thdGV4KGcsIHR4dCwgbG9vcE1vZGVsKSA6IGRyYXdUZXh0KGcsIHR4dCk7XG4gIGlmIChsb29wTW9kZWwuc2VjdGlvblRpdGxlcyAhPT0gdm9pZCAwKSB7XG4gICAgZm9yIChjb25zdCBbaWR4LCBpdGVtXSBvZiBPYmplY3QuZW50cmllcyhsb29wTW9kZWwuc2VjdGlvblRpdGxlcykpIHtcbiAgICAgIGlmIChpdGVtLm1lc3NhZ2UpIHtcbiAgICAgICAgdHh0LnRleHQgPSBpdGVtLm1lc3NhZ2U7XG4gICAgICAgIHR4dC54ID0gbG9vcE1vZGVsLnN0YXJ0eCArIChsb29wTW9kZWwuc3RvcHggLSBsb29wTW9kZWwuc3RhcnR4KSAvIDI7XG4gICAgICAgIHR4dC55ID0gbG9vcE1vZGVsLnNlY3Rpb25zW2lkeF0ueSArIGJveE1hcmdpbiArIGJveFRleHRNYXJnaW47XG4gICAgICAgIHR4dC5jbGFzcyA9IFwibG9vcFRleHRcIjtcbiAgICAgICAgdHh0LmFuY2hvciA9IFwibWlkZGxlXCI7XG4gICAgICAgIHR4dC52YWxpZ24gPSBcIm1pZGRsZVwiO1xuICAgICAgICB0eHQudHNwYW4gPSBmYWxzZTtcbiAgICAgICAgdHh0LmZvbnRGYW1pbHkgPSBmb250RmFtaWx5O1xuICAgICAgICB0eHQuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICAgICAgdHh0LmZvbnRXZWlnaHQgPSBmb250V2VpZ2h0O1xuICAgICAgICB0eHQud3JhcCA9IGxvb3BNb2RlbC53cmFwO1xuICAgICAgICBpZiAoaGFzS2F0ZXgodHh0LnRleHQpKSB7XG4gICAgICAgICAgbG9vcE1vZGVsLnN0YXJ0eSA9IGxvb3BNb2RlbC5zZWN0aW9uc1tpZHhdLnk7XG4gICAgICAgICAgYXdhaXQgZHJhd0thdGV4KGcsIHR4dCwgbG9vcE1vZGVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmF3VGV4dChnLCB0eHQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWN0aW9uSGVpZ2h0ID0gTWF0aC5yb3VuZChcbiAgICAgICAgICB0ZXh0RWxlbS5tYXAoKHRlKSA9PiAodGUuX2dyb3VwcyB8fCB0ZSlbMF1bMF0uZ2V0QkJveCgpLmhlaWdodCkucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIGN1cnIpXG4gICAgICAgICk7XG4gICAgICAgIGxvb3BNb2RlbC5zZWN0aW9uc1tpZHhdLmhlaWdodCArPSBzZWN0aW9uSGVpZ2h0IC0gKGJveE1hcmdpbiArIGJveFRleHRNYXJnaW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsb29wTW9kZWwuaGVpZ2h0ID0gTWF0aC5yb3VuZChsb29wTW9kZWwuc3RvcHkgLSBsb29wTW9kZWwuc3RhcnR5KTtcbiAgcmV0dXJuIGc7XG59O1xuY29uc3QgZHJhd0JhY2tncm91bmRSZWN0ID0gZnVuY3Rpb24oZWxlbSwgYm91bmRzMikge1xuICBkcmF3QmFja2dyb3VuZFJlY3QkMShlbGVtLCBib3VuZHMyKTtcbn07XG5jb25zdCBpbnNlcnREYXRhYmFzZUljb24gPSBmdW5jdGlvbihlbGVtKSB7XG4gIGVsZW0uYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJzeW1ib2xcIikuYXR0cihcImlkXCIsIFwiZGF0YWJhc2VcIikuYXR0cihcImZpbGwtcnVsZVwiLCBcImV2ZW5vZGRcIikuYXR0cihcImNsaXAtcnVsZVwiLCBcImV2ZW5vZGRcIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwic2NhbGUoLjUpXCIpLmF0dHIoXG4gICAgXCJkXCIsXG4gICAgXCJNMTIuMjU4LjAwMWwuMjU2LjAwNC4yNTUuMDA1LjI1My4wMDguMjUxLjAxLjI0OS4wMTIuMjQ3LjAxNS4yNDYuMDE2LjI0Mi4wMTkuMjQxLjAyLjIzOS4wMjMuMjM2LjAyNC4yMzMuMDI3LjIzMS4wMjguMjI5LjAzMS4yMjUuMDMyLjIyMy4wMzQuMjIuMDM2LjIxNy4wMzguMjE0LjA0LjIxMS4wNDEuMjA4LjA0My4yMDUuMDQ1LjIwMS4wNDYuMTk4LjA0OC4xOTQuMDUuMTkxLjA1MS4xODcuMDUzLjE4My4wNTQuMTguMDU2LjE3NS4wNTcuMTcyLjA1OS4xNjguMDYuMTYzLjA2MS4xNi4wNjMuMTU1LjA2NC4xNS4wNjYuMDc0LjAzMy4wNzMuMDMzLjA3MS4wMzQuMDcuMDM0LjA2OS4wMzUuMDY4LjAzNS4wNjcuMDM1LjA2Ni4wMzUuMDY0LjAzNi4wNjQuMDM2LjA2Mi4wMzYuMDYuMDM2LjA2LjAzNy4wNTguMDM3LjA1OC4wMzcuMDU1LjAzOC4wNTUuMDM4LjA1My4wMzguMDUyLjAzOC4wNTEuMDM5LjA1LjAzOS4wNDguMDM5LjA0Ny4wMzkuMDQ1LjA0LjA0NC4wNC4wNDMuMDQuMDQxLjA0LjA0LjA0MS4wMzkuMDQxLjAzNy4wNDEuMDM2LjA0MS4wMzQuMDQxLjAzMy4wNDIuMDMyLjA0Mi4wMy4wNDIuMDI5LjA0Mi4wMjcuMDQyLjAyNi4wNDMuMDI0LjA0My4wMjMuMDQzLjAyMS4wNDMuMDIuMDQzLjAxOC4wNDQuMDE3LjA0My4wMTUuMDQ0LjAxMy4wNDQuMDEyLjA0NC4wMTEuMDQ1LjAwOS4wNDQuMDA3LjA0NS4wMDYuMDQ1LjAwNC4wNDUuMDAyLjA0NS4wMDEuMDQ1djE3bC0uMDAxLjA0NS0uMDAyLjA0NS0uMDA0LjA0NS0uMDA2LjA0NS0uMDA3LjA0NS0uMDA5LjA0NC0uMDExLjA0NS0uMDEyLjA0NC0uMDEzLjA0NC0uMDE1LjA0NC0uMDE3LjA0My0uMDE4LjA0NC0uMDIuMDQzLS4wMjEuMDQzLS4wMjMuMDQzLS4wMjQuMDQzLS4wMjYuMDQzLS4wMjcuMDQyLS4wMjkuMDQyLS4wMy4wNDItLjAzMi4wNDItLjAzMy4wNDItLjAzNC4wNDEtLjAzNi4wNDEtLjAzNy4wNDEtLjAzOS4wNDEtLjA0LjA0MS0uMDQxLjA0LS4wNDMuMDQtLjA0NC4wNC0uMDQ1LjA0LS4wNDcuMDM5LS4wNDguMDM5LS4wNS4wMzktLjA1MS4wMzktLjA1Mi4wMzgtLjA1My4wMzgtLjA1NS4wMzgtLjA1NS4wMzgtLjA1OC4wMzctLjA1OC4wMzctLjA2LjAzNy0uMDYuMDM2LS4wNjIuMDM2LS4wNjQuMDM2LS4wNjQuMDM2LS4wNjYuMDM1LS4wNjcuMDM1LS4wNjguMDM1LS4wNjkuMDM1LS4wNy4wMzQtLjA3MS4wMzQtLjA3My4wMzMtLjA3NC4wMzMtLjE1LjA2Ni0uMTU1LjA2NC0uMTYuMDYzLS4xNjMuMDYxLS4xNjguMDYtLjE3Mi4wNTktLjE3NS4wNTctLjE4LjA1Ni0uMTgzLjA1NC0uMTg3LjA1My0uMTkxLjA1MS0uMTk0LjA1LS4xOTguMDQ4LS4yMDEuMDQ2LS4yMDUuMDQ1LS4yMDguMDQzLS4yMTEuMDQxLS4yMTQuMDQtLjIxNy4wMzgtLjIyLjAzNi0uMjIzLjAzNC0uMjI1LjAzMi0uMjI5LjAzMS0uMjMxLjAyOC0uMjMzLjAyNy0uMjM2LjAyNC0uMjM5LjAyMy0uMjQxLjAyLS4yNDIuMDE5LS4yNDYuMDE2LS4yNDcuMDE1LS4yNDkuMDEyLS4yNTEuMDEtLjI1My4wMDgtLjI1NS4wMDUtLjI1Ni4wMDQtLjI1OC4wMDEtLjI1OC0uMDAxLS4yNTYtLjAwNC0uMjU1LS4wMDUtLjI1My0uMDA4LS4yNTEtLjAxLS4yNDktLjAxMi0uMjQ3LS4wMTUtLjI0NS0uMDE2LS4yNDMtLjAxOS0uMjQxLS4wMi0uMjM4LS4wMjMtLjIzNi0uMDI0LS4yMzQtLjAyNy0uMjMxLS4wMjgtLjIyOC0uMDMxLS4yMjYtLjAzMi0uMjIzLS4wMzQtLjIyLS4wMzYtLjIxNy0uMDM4LS4yMTQtLjA0LS4yMTEtLjA0MS0uMjA4LS4wNDMtLjIwNC0uMDQ1LS4yMDEtLjA0Ni0uMTk4LS4wNDgtLjE5NS0uMDUtLjE5LS4wNTEtLjE4Ny0uMDUzLS4xODQtLjA1NC0uMTc5LS4wNTYtLjE3Ni0uMDU3LS4xNzItLjA1OS0uMTY3LS4wNi0uMTY0LS4wNjEtLjE1OS0uMDYzLS4xNTUtLjA2NC0uMTUxLS4wNjYtLjA3NC0uMDMzLS4wNzItLjAzMy0uMDcyLS4wMzQtLjA3LS4wMzQtLjA2OS0uMDM1LS4wNjgtLjAzNS0uMDY3LS4wMzUtLjA2Ni0uMDM1LS4wNjQtLjAzNi0uMDYzLS4wMzYtLjA2Mi0uMDM2LS4wNjEtLjAzNi0uMDYtLjAzNy0uMDU4LS4wMzctLjA1Ny0uMDM3LS4wNTYtLjAzOC0uMDU1LS4wMzgtLjA1My0uMDM4LS4wNTItLjAzOC0uMDUxLS4wMzktLjA0OS0uMDM5LS4wNDktLjAzOS0uMDQ2LS4wMzktLjA0Ni0uMDQtLjA0NC0uMDQtLjA0My0uMDQtLjA0MS0uMDQtLjA0LS4wNDEtLjAzOS0uMDQxLS4wMzctLjA0MS0uMDM2LS4wNDEtLjAzNC0uMDQxLS4wMzMtLjA0Mi0uMDMyLS4wNDItLjAzLS4wNDItLjAyOS0uMDQyLS4wMjctLjA0Mi0uMDI2LS4wNDMtLjAyNC0uMDQzLS4wMjMtLjA0My0uMDIxLS4wNDMtLjAyLS4wNDMtLjAxOC0uMDQ0LS4wMTctLjA0My0uMDE1LS4wNDQtLjAxMy0uMDQ0LS4wMTItLjA0NC0uMDExLS4wNDUtLjAwOS0uMDQ0LS4wMDctLjA0NS0uMDA2LS4wNDUtLjAwNC0uMDQ1LS4wMDItLjA0NS0uMDAxLS4wNDV2LTE3bC4wMDEtLjA0NS4wMDItLjA0NS4wMDQtLjA0NS4wMDYtLjA0NS4wMDctLjA0NS4wMDktLjA0NC4wMTEtLjA0NS4wMTItLjA0NC4wMTMtLjA0NC4wMTUtLjA0NC4wMTctLjA0My4wMTgtLjA0NC4wMi0uMDQzLjAyMS0uMDQzLjAyMy0uMDQzLjAyNC0uMDQzLjAyNi0uMDQzLjAyNy0uMDQyLjAyOS0uMDQyLjAzLS4wNDIuMDMyLS4wNDIuMDMzLS4wNDIuMDM0LS4wNDEuMDM2LS4wNDEuMDM3LS4wNDEuMDM5LS4wNDEuMDQtLjA0MS4wNDEtLjA0LjA0My0uMDQuMDQ0LS4wNC4wNDYtLjA0LjA0Ni0uMDM5LjA0OS0uMDM5LjA0OS0uMDM5LjA1MS0uMDM5LjA1Mi0uMDM4LjA1My0uMDM4LjA1NS0uMDM4LjA1Ni0uMDM4LjA1Ny0uMDM3LjA1OC0uMDM3LjA2LS4wMzcuMDYxLS4wMzYuMDYyLS4wMzYuMDYzLS4wMzYuMDY0LS4wMzYuMDY2LS4wMzUuMDY3LS4wMzUuMDY4LS4wMzUuMDY5LS4wMzUuMDctLjAzNC4wNzItLjAzNC4wNzItLjAzMy4wNzQtLjAzMy4xNTEtLjA2Ni4xNTUtLjA2NC4xNTktLjA2My4xNjQtLjA2MS4xNjctLjA2LjE3Mi0uMDU5LjE3Ni0uMDU3LjE3OS0uMDU2LjE4NC0uMDU0LjE4Ny0uMDUzLjE5LS4wNTEuMTk1LS4wNS4xOTgtLjA0OC4yMDEtLjA0Ni4yMDQtLjA0NS4yMDgtLjA0My4yMTEtLjA0MS4yMTQtLjA0LjIxNy0uMDM4LjIyLS4wMzYuMjIzLS4wMzQuMjI2LS4wMzIuMjI4LS4wMzEuMjMxLS4wMjguMjM0LS4wMjcuMjM2LS4wMjQuMjM4LS4wMjMuMjQxLS4wMi4yNDMtLjAxOS4yNDUtLjAxNi4yNDctLjAxNS4yNDktLjAxMi4yNTEtLjAxLjI1My0uMDA4LjI1NS0uMDA1LjI1Ni0uMDA0LjI1OC0uMDAxLjI1OC4wMDF6bS05LjI1OCAyMC40OTl2LjAxbC4wMDEuMDIxLjAwMy4wMjEuMDA0LjAyMi4wMDUuMDIxLjAwNi4wMjIuMDA3LjAyMi4wMDkuMDIzLjAxLjAyMi4wMTEuMDIzLjAxMi4wMjMuMDEzLjAyMy4wMTUuMDIzLjAxNi4wMjQuMDE3LjAyMy4wMTguMDI0LjAxOS4wMjQuMDIxLjAyNC4wMjIuMDI1LjAyMy4wMjQuMDI0LjAyNS4wNTIuMDQ5LjA1Ni4wNS4wNjEuMDUxLjA2Ni4wNTEuMDcuMDUxLjA3NS4wNTEuMDc5LjA1Mi4wODQuMDUyLjA4OC4wNTIuMDkyLjA1Mi4wOTcuMDUyLjEwMi4wNTEuMTA1LjA1Mi4xMS4wNTIuMTE0LjA1MS4xMTkuMDUxLjEyMy4wNTEuMTI3LjA1LjEzMS4wNS4xMzUuMDUuMTM5LjA0OC4xNDQuMDQ5LjE0Ny4wNDcuMTUyLjA0Ny4xNTUuMDQ3LjE2LjA0NS4xNjMuMDQ1LjE2Ny4wNDMuMTcxLjA0My4xNzYuMDQxLjE3OC4wNDEuMTgzLjAzOS4xODcuMDM5LjE5LjAzNy4xOTQuMDM1LjE5Ny4wMzUuMjAyLjAzMy4yMDQuMDMxLjIwOS4wMy4yMTIuMDI5LjIxNi4wMjcuMjE5LjAyNS4yMjIuMDI0LjIyNi4wMjEuMjMuMDIuMjMzLjAxOC4yMzYuMDE2LjI0LjAxNS4yNDMuMDEyLjI0Ni4wMS4yNDkuMDA4LjI1My4wMDUuMjU2LjAwNC4yNTkuMDAxLjI2LS4wMDEuMjU3LS4wMDQuMjU0LS4wMDUuMjUtLjAwOC4yNDctLjAxMS4yNDQtLjAxMi4yNDEtLjAxNC4yMzctLjAxNi4yMzMtLjAxOC4yMzEtLjAyMS4yMjYtLjAyMS4yMjQtLjAyNC4yMi0uMDI2LjIxNi0uMDI3LjIxMi0uMDI4LjIxLS4wMzEuMjA1LS4wMzEuMjAyLS4wMzQuMTk4LS4wMzQuMTk0LS4wMzYuMTkxLS4wMzcuMTg3LS4wMzkuMTgzLS4wNC4xNzktLjA0LjE3NS0uMDQyLjE3Mi0uMDQzLjE2OC0uMDQ0LjE2My0uMDQ1LjE2LS4wNDYuMTU1LS4wNDYuMTUyLS4wNDcuMTQ4LS4wNDguMTQzLS4wNDkuMTM5LS4wNDkuMTM2LS4wNS4xMzEtLjA1LjEyNi0uMDUuMTIzLS4wNTEuMTE4LS4wNTIuMTE0LS4wNTEuMTEtLjA1Mi4xMDYtLjA1Mi4xMDEtLjA1Mi4wOTYtLjA1Mi4wOTItLjA1Mi4wODgtLjA1My4wODMtLjA1MS4wNzktLjA1Mi4wNzQtLjA1Mi4wNy0uMDUxLjA2NS0uMDUxLjA2LS4wNTEuMDU2LS4wNS4wNTEtLjA1LjAyMy0uMDI0LjAyMy0uMDI1LjAyMS0uMDI0LjAyLS4wMjQuMDE5LS4wMjQuMDE4LS4wMjQuMDE3LS4wMjQuMDE1LS4wMjMuMDE0LS4wMjQuMDEzLS4wMjMuMDEyLS4wMjMuMDEtLjAyMy4wMS0uMDIyLjAwOC0uMDIyLjAwNi0uMDIyLjAwNi0uMDIyLjAwNC0uMDIyLjAwNC0uMDIxLjAwMS0uMDIxLjAwMS0uMDIxdi00LjEyN2wtLjA3Ny4wNTUtLjA4LjA1My0uMDgzLjA1NC0uMDg1LjA1My0uMDg3LjA1Mi0uMDkuMDUyLS4wOTMuMDUxLS4wOTUuMDUtLjA5Ny4wNS0uMS4wNDktLjEwMi4wNDktLjEwNS4wNDgtLjEwNi4wNDctLjEwOS4wNDctLjExMS4wNDYtLjExNC4wNDUtLjExNS4wNDUtLjExOC4wNDQtLjEyLjA0My0uMTIyLjA0Mi0uMTI0LjA0Mi0uMTI2LjA0MS0uMTI4LjA0LS4xMy4wNC0uMTMyLjAzOC0uMTM0LjAzOC0uMTM1LjAzNy0uMTM4LjAzNy0uMTM5LjAzNS0uMTQyLjAzNS0uMTQzLjAzNC0uMTQ0LjAzMy0uMTQ3LjAzMi0uMTQ4LjAzMS0uMTUuMDMtLjE1MS4wMy0uMTUzLjAyOS0uMTU0LjAyNy0uMTU2LjAyNy0uMTU4LjAyNi0uMTU5LjAyNS0uMTYxLjAyNC0uMTYyLjAyMy0uMTYzLjAyMi0uMTY1LjAyMS0uMTY2LjAyLS4xNjcuMDE5LS4xNjkuMDE4LS4xNjkuMDE3LS4xNzEuMDE2LS4xNzMuMDE1LS4xNzMuMDE0LS4xNzUuMDEzLS4xNzUuMDEyLS4xNzcuMDExLS4xNzguMDEtLjE3OS4wMDgtLjE3OS4wMDgtLjE4MS4wMDYtLjE4Mi4wMDUtLjE4Mi4wMDQtLjE4NC4wMDMtLjE4NC4wMDJoLS4zN2wtLjE4NC0uMDAyLS4xODQtLjAwMy0uMTgyLS4wMDQtLjE4Mi0uMDA1LS4xODEtLjAwNi0uMTc5LS4wMDgtLjE3OS0uMDA4LS4xNzgtLjAxLS4xNzYtLjAxMS0uMTc2LS4wMTItLjE3NS0uMDEzLS4xNzMtLjAxNC0uMTcyLS4wMTUtLjE3MS0uMDE2LS4xNy0uMDE3LS4xNjktLjAxOC0uMTY3LS4wMTktLjE2Ni0uMDItLjE2NS0uMDIxLS4xNjMtLjAyMi0uMTYyLS4wMjMtLjE2MS0uMDI0LS4xNTktLjAyNS0uMTU3LS4wMjYtLjE1Ni0uMDI3LS4xNTUtLjAyNy0uMTUzLS4wMjktLjE1MS0uMDMtLjE1LS4wMy0uMTQ4LS4wMzEtLjE0Ni0uMDMyLS4xNDUtLjAzMy0uMTQzLS4wMzQtLjE0MS0uMDM1LS4xNC0uMDM1LS4xMzctLjAzNy0uMTM2LS4wMzctLjEzNC0uMDM4LS4xMzItLjAzOC0uMTMtLjA0LS4xMjgtLjA0LS4xMjYtLjA0MS0uMTI0LS4wNDItLjEyMi0uMDQyLS4xMi0uMDQ0LS4xMTctLjA0My0uMTE2LS4wNDUtLjExMy0uMDQ1LS4xMTItLjA0Ni0uMTA5LS4wNDctLjEwNi0uMDQ3LS4xMDUtLjA0OC0uMTAyLS4wNDktLjEtLjA0OS0uMDk3LS4wNS0uMDk1LS4wNS0uMDkzLS4wNTItLjA5LS4wNTEtLjA4Ny0uMDUyLS4wODUtLjA1My0uMDgzLS4wNTQtLjA4LS4wNTQtLjA3Ny0uMDU0djQuMTI3em0wLTUuNjU0di4wMTFsLjAwMS4wMjEuMDAzLjAyMS4wMDQuMDIxLjAwNS4wMjIuMDA2LjAyMi4wMDcuMDIyLjAwOS4wMjIuMDEuMDIyLjAxMS4wMjMuMDEyLjAyMy4wMTMuMDIzLjAxNS4wMjQuMDE2LjAyMy4wMTcuMDI0LjAxOC4wMjQuMDE5LjAyNC4wMjEuMDI0LjAyMi4wMjQuMDIzLjAyNS4wMjQuMDI0LjA1Mi4wNS4wNTYuMDUuMDYxLjA1LjA2Ni4wNTEuMDcuMDUxLjA3NS4wNTIuMDc5LjA1MS4wODQuMDUyLjA4OC4wNTIuMDkyLjA1Mi4wOTcuMDUyLjEwMi4wNTIuMTA1LjA1Mi4xMS4wNTEuMTE0LjA1MS4xMTkuMDUyLjEyMy4wNS4xMjcuMDUxLjEzMS4wNS4xMzUuMDQ5LjEzOS4wNDkuMTQ0LjA0OC4xNDcuMDQ4LjE1Mi4wNDcuMTU1LjA0Ni4xNi4wNDUuMTYzLjA0NS4xNjcuMDQ0LjE3MS4wNDIuMTc2LjA0Mi4xNzguMDQuMTgzLjA0LjE4Ny4wMzguMTkuMDM3LjE5NC4wMzYuMTk3LjAzNC4yMDIuMDMzLjIwNC4wMzIuMjA5LjAzLjIxMi4wMjguMjE2LjAyNy4yMTkuMDI1LjIyMi4wMjQuMjI2LjAyMi4yMy4wMi4yMzMuMDE4LjIzNi4wMTYuMjQuMDE0LjI0My4wMTIuMjQ2LjAxLjI0OS4wMDguMjUzLjAwNi4yNTYuMDAzLjI1OS4wMDEuMjYtLjAwMS4yNTctLjAwMy4yNTQtLjAwNi4yNS0uMDA4LjI0Ny0uMDEuMjQ0LS4wMTIuMjQxLS4wMTUuMjM3LS4wMTYuMjMzLS4wMTguMjMxLS4wMi4yMjYtLjAyMi4yMjQtLjAyNC4yMi0uMDI1LjIxNi0uMDI3LjIxMi0uMDI5LjIxLS4wMy4yMDUtLjAzMi4yMDItLjAzMy4xOTgtLjAzNS4xOTQtLjAzNi4xOTEtLjAzNy4xODctLjAzOS4xODMtLjAzOS4xNzktLjA0MS4xNzUtLjA0Mi4xNzItLjA0My4xNjgtLjA0NC4xNjMtLjA0NS4xNi0uMDQ1LjE1NS0uMDQ3LjE1Mi0uMDQ3LjE0OC0uMDQ4LjE0My0uMDQ4LjEzOS0uMDUuMTM2LS4wNDkuMTMxLS4wNS4xMjYtLjA1MS4xMjMtLjA1MS4xMTgtLjA1MS4xMTQtLjA1Mi4xMS0uMDUyLjEwNi0uMDUyLjEwMS0uMDUyLjA5Ni0uMDUyLjA5Mi0uMDUyLjA4OC0uMDUyLjA4My0uMDUyLjA3OS0uMDUyLjA3NC0uMDUxLjA3LS4wNTIuMDY1LS4wNTEuMDYtLjA1LjA1Ni0uMDUxLjA1MS0uMDQ5LjAyMy0uMDI1LjAyMy0uMDI0LjAyMS0uMDI1LjAyLS4wMjQuMDE5LS4wMjQuMDE4LS4wMjQuMDE3LS4wMjQuMDE1LS4wMjMuMDE0LS4wMjMuMDEzLS4wMjQuMDEyLS4wMjIuMDEtLjAyMy4wMS0uMDIzLjAwOC0uMDIyLjAwNi0uMDIyLjAwNi0uMDIyLjAwNC0uMDIxLjAwNC0uMDIyLjAwMS0uMDIxLjAwMS0uMDIxdi00LjEzOWwtLjA3Ny4wNTQtLjA4LjA1NC0uMDgzLjA1NC0uMDg1LjA1Mi0uMDg3LjA1My0uMDkuMDUxLS4wOTMuMDUxLS4wOTUuMDUxLS4wOTcuMDUtLjEuMDQ5LS4xMDIuMDQ5LS4xMDUuMDQ4LS4xMDYuMDQ3LS4xMDkuMDQ3LS4xMTEuMDQ2LS4xMTQuMDQ1LS4xMTUuMDQ0LS4xMTguMDQ0LS4xMi4wNDQtLjEyMi4wNDItLjEyNC4wNDItLjEyNi4wNDEtLjEyOC4wNC0uMTMuMDM5LS4xMzIuMDM5LS4xMzQuMDM4LS4xMzUuMDM3LS4xMzguMDM2LS4xMzkuMDM2LS4xNDIuMDM1LS4xNDMuMDMzLS4xNDQuMDMzLS4xNDcuMDMzLS4xNDguMDMxLS4xNS4wMy0uMTUxLjAzLS4xNTMuMDI4LS4xNTQuMDI4LS4xNTYuMDI3LS4xNTguMDI2LS4xNTkuMDI1LS4xNjEuMDI0LS4xNjIuMDIzLS4xNjMuMDIyLS4xNjUuMDIxLS4xNjYuMDItLjE2Ny4wMTktLjE2OS4wMTgtLjE2OS4wMTctLjE3MS4wMTYtLjE3My4wMTUtLjE3My4wMTQtLjE3NS4wMTMtLjE3NS4wMTItLjE3Ny4wMTEtLjE3OC4wMDktLjE3OS4wMDktLjE3OS4wMDctLjE4MS4wMDctLjE4Mi4wMDUtLjE4Mi4wMDQtLjE4NC4wMDMtLjE4NC4wMDJoLS4zN2wtLjE4NC0uMDAyLS4xODQtLjAwMy0uMTgyLS4wMDQtLjE4Mi0uMDA1LS4xODEtLjAwNy0uMTc5LS4wMDctLjE3OS0uMDA5LS4xNzgtLjAwOS0uMTc2LS4wMTEtLjE3Ni0uMDEyLS4xNzUtLjAxMy0uMTczLS4wMTQtLjE3Mi0uMDE1LS4xNzEtLjAxNi0uMTctLjAxNy0uMTY5LS4wMTgtLjE2Ny0uMDE5LS4xNjYtLjAyLS4xNjUtLjAyMS0uMTYzLS4wMjItLjE2Mi0uMDIzLS4xNjEtLjAyNC0uMTU5LS4wMjUtLjE1Ny0uMDI2LS4xNTYtLjAyNy0uMTU1LS4wMjgtLjE1My0uMDI4LS4xNTEtLjAzLS4xNS0uMDMtLjE0OC0uMDMxLS4xNDYtLjAzMy0uMTQ1LS4wMzMtLjE0My0uMDMzLS4xNDEtLjAzNS0uMTQtLjAzNi0uMTM3LS4wMzYtLjEzNi0uMDM3LS4xMzQtLjAzOC0uMTMyLS4wMzktLjEzLS4wMzktLjEyOC0uMDQtLjEyNi0uMDQxLS4xMjQtLjA0Mi0uMTIyLS4wNDMtLjEyLS4wNDMtLjExNy0uMDQ0LS4xMTYtLjA0NC0uMTEzLS4wNDYtLjExMi0uMDQ2LS4xMDktLjA0Ni0uMTA2LS4wNDctLjEwNS0uMDQ4LS4xMDItLjA0OS0uMS0uMDQ5LS4wOTctLjA1LS4wOTUtLjA1MS0uMDkzLS4wNTEtLjA5LS4wNTEtLjA4Ny0uMDUzLS4wODUtLjA1Mi0uMDgzLS4wNTQtLjA4LS4wNTQtLjA3Ny0uMDU0djQuMTM5em0wLTUuNjY2di4wMTFsLjAwMS4wMi4wMDMuMDIyLjAwNC4wMjEuMDA1LjAyMi4wMDYuMDIxLjAwNy4wMjIuMDA5LjAyMy4wMS4wMjIuMDExLjAyMy4wMTIuMDIzLjAxMy4wMjMuMDE1LjAyMy4wMTYuMDI0LjAxNy4wMjQuMDE4LjAyMy4wMTkuMDI0LjAyMS4wMjUuMDIyLjAyNC4wMjMuMDI0LjAyNC4wMjUuMDUyLjA1LjA1Ni4wNS4wNjEuMDUuMDY2LjA1MS4wNy4wNTEuMDc1LjA1Mi4wNzkuMDUxLjA4NC4wNTIuMDg4LjA1Mi4wOTIuMDUyLjA5Ny4wNTIuMTAyLjA1Mi4xMDUuMDUxLjExLjA1Mi4xMTQuMDUxLjExOS4wNTEuMTIzLjA1MS4xMjcuMDUuMTMxLjA1LjEzNS4wNS4xMzkuMDQ5LjE0NC4wNDguMTQ3LjA0OC4xNTIuMDQ3LjE1NS4wNDYuMTYuMDQ1LjE2My4wNDUuMTY3LjA0My4xNzEuMDQzLjE3Ni4wNDIuMTc4LjA0LjE4My4wNC4xODcuMDM4LjE5LjAzNy4xOTQuMDM2LjE5Ny4wMzQuMjAyLjAzMy4yMDQuMDMyLjIwOS4wMy4yMTIuMDI4LjIxNi4wMjcuMjE5LjAyNS4yMjIuMDI0LjIyNi4wMjEuMjMuMDIuMjMzLjAxOC4yMzYuMDE3LjI0LjAxNC4yNDMuMDEyLjI0Ni4wMS4yNDkuMDA4LjI1My4wMDYuMjU2LjAwMy4yNTkuMDAxLjI2LS4wMDEuMjU3LS4wMDMuMjU0LS4wMDYuMjUtLjAwOC4yNDctLjAxLjI0NC0uMDEzLjI0MS0uMDE0LjIzNy0uMDE2LjIzMy0uMDE4LjIzMS0uMDIuMjI2LS4wMjIuMjI0LS4wMjQuMjItLjAyNS4yMTYtLjAyNy4yMTItLjAyOS4yMS0uMDMuMjA1LS4wMzIuMjAyLS4wMzMuMTk4LS4wMzUuMTk0LS4wMzYuMTkxLS4wMzcuMTg3LS4wMzkuMTgzLS4wMzkuMTc5LS4wNDEuMTc1LS4wNDIuMTcyLS4wNDMuMTY4LS4wNDQuMTYzLS4wNDUuMTYtLjA0NS4xNTUtLjA0Ny4xNTItLjA0Ny4xNDgtLjA0OC4xNDMtLjA0OS4xMzktLjA0OS4xMzYtLjA0OS4xMzEtLjA1MS4xMjYtLjA1LjEyMy0uMDUxLjExOC0uMDUyLjExNC0uMDUxLjExLS4wNTIuMTA2LS4wNTIuMTAxLS4wNTIuMDk2LS4wNTIuMDkyLS4wNTIuMDg4LS4wNTIuMDgzLS4wNTIuMDc5LS4wNTIuMDc0LS4wNTIuMDctLjA1MS4wNjUtLjA1MS4wNi0uMDUxLjA1Ni0uMDUuMDUxLS4wNDkuMDIzLS4wMjUuMDIzLS4wMjUuMDIxLS4wMjQuMDItLjAyNC4wMTktLjAyNC4wMTgtLjAyNC4wMTctLjAyNC4wMTUtLjAyMy4wMTQtLjAyNC4wMTMtLjAyMy4wMTItLjAyMy4wMS0uMDIyLjAxLS4wMjMuMDA4LS4wMjIuMDA2LS4wMjIuMDA2LS4wMjIuMDA0LS4wMjIuMDA0LS4wMjEuMDAxLS4wMjEuMDAxLS4wMjF2LTQuMTUzbC0uMDc3LjA1NC0uMDguMDU0LS4wODMuMDUzLS4wODUuMDUzLS4wODcuMDUzLS4wOS4wNTEtLjA5My4wNTEtLjA5NS4wNTEtLjA5Ny4wNS0uMS4wNDktLjEwMi4wNDgtLjEwNS4wNDgtLjEwNi4wNDgtLjEwOS4wNDYtLjExMS4wNDYtLjExNC4wNDYtLjExNS4wNDQtLjExOC4wNDQtLjEyLjA0My0uMTIyLjA0My0uMTI0LjA0Mi0uMTI2LjA0MS0uMTI4LjA0LS4xMy4wMzktLjEzMi4wMzktLjEzNC4wMzgtLjEzNS4wMzctLjEzOC4wMzYtLjEzOS4wMzYtLjE0Mi4wMzQtLjE0My4wMzQtLjE0NC4wMzMtLjE0Ny4wMzItLjE0OC4wMzItLjE1LjAzLS4xNTEuMDMtLjE1My4wMjgtLjE1NC4wMjgtLjE1Ni4wMjctLjE1OC4wMjYtLjE1OS4wMjQtLjE2MS4wMjQtLjE2Mi4wMjMtLjE2My4wMjMtLjE2NS4wMjEtLjE2Ni4wMi0uMTY3LjAxOS0uMTY5LjAxOC0uMTY5LjAxNy0uMTcxLjAxNi0uMTczLjAxNS0uMTczLjAxNC0uMTc1LjAxMy0uMTc1LjAxMi0uMTc3LjAxLS4xNzguMDEtLjE3OS4wMDktLjE3OS4wMDctLjE4MS4wMDYtLjE4Mi4wMDYtLjE4Mi4wMDQtLjE4NC4wMDMtLjE4NC4wMDEtLjE4NS4wMDEtLjE4NS0uMDAxLS4xODQtLjAwMS0uMTg0LS4wMDMtLjE4Mi0uMDA0LS4xODItLjAwNi0uMTgxLS4wMDYtLjE3OS0uMDA3LS4xNzktLjAwOS0uMTc4LS4wMS0uMTc2LS4wMS0uMTc2LS4wMTItLjE3NS0uMDEzLS4xNzMtLjAxNC0uMTcyLS4wMTUtLjE3MS0uMDE2LS4xNy0uMDE3LS4xNjktLjAxOC0uMTY3LS4wMTktLjE2Ni0uMDItLjE2NS0uMDIxLS4xNjMtLjAyMy0uMTYyLS4wMjMtLjE2MS0uMDI0LS4xNTktLjAyNC0uMTU3LS4wMjYtLjE1Ni0uMDI3LS4xNTUtLjAyOC0uMTUzLS4wMjgtLjE1MS0uMDMtLjE1LS4wMy0uMTQ4LS4wMzItLjE0Ni0uMDMyLS4xNDUtLjAzMy0uMTQzLS4wMzQtLjE0MS0uMDM0LS4xNC0uMDM2LS4xMzctLjAzNi0uMTM2LS4wMzctLjEzNC0uMDM4LS4xMzItLjAzOS0uMTMtLjAzOS0uMTI4LS4wNDEtLjEyNi0uMDQxLS4xMjQtLjA0MS0uMTIyLS4wNDMtLjEyLS4wNDMtLjExNy0uMDQ0LS4xMTYtLjA0NC0uMTEzLS4wNDYtLjExMi0uMDQ2LS4xMDktLjA0Ni0uMTA2LS4wNDgtLjEwNS0uMDQ4LS4xMDItLjA0OC0uMS0uMDUtLjA5Ny0uMDQ5LS4wOTUtLjA1MS0uMDkzLS4wNTEtLjA5LS4wNTItLjA4Ny0uMDUyLS4wODUtLjA1My0uMDgzLS4wNTMtLjA4LS4wNTQtLjA3Ny0uMDU0djQuMTUzem04Ljc0LTguMTc5bC0uMjU3LjAwNC0uMjU0LjAwNS0uMjUuMDA4LS4yNDcuMDExLS4yNDQuMDEyLS4yNDEuMDE0LS4yMzcuMDE2LS4yMzMuMDE4LS4yMzEuMDIxLS4yMjYuMDIyLS4yMjQuMDIzLS4yMi4wMjYtLjIxNi4wMjctLjIxMi4wMjgtLjIxLjAzMS0uMjA1LjAzMi0uMjAyLjAzMy0uMTk4LjAzNC0uMTk0LjAzNi0uMTkxLjAzOC0uMTg3LjAzOC0uMTgzLjA0LS4xNzkuMDQxLS4xNzUuMDQyLS4xNzIuMDQzLS4xNjguMDQzLS4xNjMuMDQ1LS4xNi4wNDYtLjE1NS4wNDYtLjE1Mi4wNDgtLjE0OC4wNDgtLjE0My4wNDgtLjEzOS4wNDktLjEzNi4wNS0uMTMxLjA1LS4xMjYuMDUxLS4xMjMuMDUxLS4xMTguMDUxLS4xMTQuMDUyLS4xMS4wNTItLjEwNi4wNTItLjEwMS4wNTItLjA5Ni4wNTItLjA5Mi4wNTItLjA4OC4wNTItLjA4My4wNTItLjA3OS4wNTItLjA3NC4wNTEtLjA3LjA1Mi0uMDY1LjA1MS0uMDYuMDUtLjA1Ni4wNS0uMDUxLjA1LS4wMjMuMDI1LS4wMjMuMDI0LS4wMjEuMDI0LS4wMi4wMjUtLjAxOS4wMjQtLjAxOC4wMjQtLjAxNy4wMjMtLjAxNS4wMjQtLjAxNC4wMjMtLjAxMy4wMjMtLjAxMi4wMjMtLjAxLjAyMy0uMDEuMDIyLS4wMDguMDIyLS4wMDYuMDIzLS4wMDYuMDIxLS4wMDQuMDIyLS4wMDQuMDIxLS4wMDEuMDIxLS4wMDEuMDIxLjAwMS4wMjEuMDAxLjAyMS4wMDQuMDIxLjAwNC4wMjIuMDA2LjAyMS4wMDYuMDIzLjAwOC4wMjIuMDEuMDIyLjAxLjAyMy4wMTIuMDIzLjAxMy4wMjMuMDE0LjAyMy4wMTUuMDI0LjAxNy4wMjMuMDE4LjAyNC4wMTkuMDI0LjAyLjAyNS4wMjEuMDI0LjAyMy4wMjQuMDIzLjAyNS4wNTEuMDUuMDU2LjA1LjA2LjA1LjA2NS4wNTEuMDcuMDUyLjA3NC4wNTEuMDc5LjA1Mi4wODMuMDUyLjA4OC4wNTIuMDkyLjA1Mi4wOTYuMDUyLjEwMS4wNTIuMTA2LjA1Mi4xMS4wNTIuMTE0LjA1Mi4xMTguMDUxLjEyMy4wNTEuMTI2LjA1MS4xMzEuMDUuMTM2LjA1LjEzOS4wNDkuMTQzLjA0OC4xNDguMDQ4LjE1Mi4wNDguMTU1LjA0Ni4xNi4wNDYuMTYzLjA0NS4xNjguMDQzLjE3Mi4wNDMuMTc1LjA0Mi4xNzkuMDQxLjE4My4wNC4xODcuMDM4LjE5MS4wMzguMTk0LjAzNi4xOTguMDM0LjIwMi4wMzMuMjA1LjAzMi4yMS4wMzEuMjEyLjAyOC4yMTYuMDI3LjIyLjAyNi4yMjQuMDIzLjIyNi4wMjIuMjMxLjAyMS4yMzMuMDE4LjIzNy4wMTYuMjQxLjAxNC4yNDQuMDEyLjI0Ny4wMTEuMjUuMDA4LjI1NC4wMDUuMjU3LjAwNC4yNi4wMDEuMjYtLjAwMS4yNTctLjAwNC4yNTQtLjAwNS4yNS0uMDA4LjI0Ny0uMDExLjI0NC0uMDEyLjI0MS0uMDE0LjIzNy0uMDE2LjIzMy0uMDE4LjIzMS0uMDIxLjIyNi0uMDIyLjIyNC0uMDIzLjIyLS4wMjYuMjE2LS4wMjcuMjEyLS4wMjguMjEtLjAzMS4yMDUtLjAzMi4yMDItLjAzMy4xOTgtLjAzNC4xOTQtLjAzNi4xOTEtLjAzOC4xODctLjAzOC4xODMtLjA0LjE3OS0uMDQxLjE3NS0uMDQyLjE3Mi0uMDQzLjE2OC0uMDQzLjE2My0uMDQ1LjE2LS4wNDYuMTU1LS4wNDYuMTUyLS4wNDguMTQ4LS4wNDguMTQzLS4wNDguMTM5LS4wNDkuMTM2LS4wNS4xMzEtLjA1LjEyNi0uMDUxLjEyMy0uMDUxLjExOC0uMDUxLjExNC0uMDUyLjExLS4wNTIuMTA2LS4wNTIuMTAxLS4wNTIuMDk2LS4wNTIuMDkyLS4wNTIuMDg4LS4wNTIuMDgzLS4wNTIuMDc5LS4wNTIuMDc0LS4wNTEuMDctLjA1Mi4wNjUtLjA1MS4wNi0uMDUuMDU2LS4wNS4wNTEtLjA1LjAyMy0uMDI1LjAyMy0uMDI0LjAyMS0uMDI0LjAyLS4wMjUuMDE5LS4wMjQuMDE4LS4wMjQuMDE3LS4wMjMuMDE1LS4wMjQuMDE0LS4wMjMuMDEzLS4wMjMuMDEyLS4wMjMuMDEtLjAyMy4wMS0uMDIyLjAwOC0uMDIyLjAwNi0uMDIzLjAwNi0uMDIxLjAwNC0uMDIyLjAwNC0uMDIxLjAwMS0uMDIxLjAwMS0uMDIxLS4wMDEtLjAyMS0uMDAxLS4wMjEtLjAwNC0uMDIxLS4wMDQtLjAyMi0uMDA2LS4wMjEtLjAwNi0uMDIzLS4wMDgtLjAyMi0uMDEtLjAyMi0uMDEtLjAyMy0uMDEyLS4wMjMtLjAxMy0uMDIzLS4wMTQtLjAyMy0uMDE1LS4wMjQtLjAxNy0uMDIzLS4wMTgtLjAyNC0uMDE5LS4wMjQtLjAyLS4wMjUtLjAyMS0uMDI0LS4wMjMtLjAyNC0uMDIzLS4wMjUtLjA1MS0uMDUtLjA1Ni0uMDUtLjA2LS4wNS0uMDY1LS4wNTEtLjA3LS4wNTItLjA3NC0uMDUxLS4wNzktLjA1Mi0uMDgzLS4wNTItLjA4OC0uMDUyLS4wOTItLjA1Mi0uMDk2LS4wNTItLjEwMS0uMDUyLS4xMDYtLjA1Mi0uMTEtLjA1Mi0uMTE0LS4wNTItLjExOC0uMDUxLS4xMjMtLjA1MS0uMTI2LS4wNTEtLjEzMS0uMDUtLjEzNi0uMDUtLjEzOS0uMDQ5LS4xNDMtLjA0OC0uMTQ4LS4wNDgtLjE1Mi0uMDQ4LS4xNTUtLjA0Ni0uMTYtLjA0Ni0uMTYzLS4wNDUtLjE2OC0uMDQzLS4xNzItLjA0My0uMTc1LS4wNDItLjE3OS0uMDQxLS4xODMtLjA0LS4xODctLjAzOC0uMTkxLS4wMzgtLjE5NC0uMDM2LS4xOTgtLjAzNC0uMjAyLS4wMzMtLjIwNS0uMDMyLS4yMS0uMDMxLS4yMTItLjAyOC0uMjE2LS4wMjctLjIyLS4wMjYtLjIyNC0uMDIzLS4yMjYtLjAyMi0uMjMxLS4wMjEtLjIzMy0uMDE4LS4yMzctLjAxNi0uMjQxLS4wMTQtLjI0NC0uMDEyLS4yNDctLjAxMS0uMjUtLjAwOC0uMjU0LS4wMDUtLjI1Ny0uMDA0LS4yNi0uMDAxLS4yNi4wMDF6XCJcbiAgKTtcbn07XG5jb25zdCBpbnNlcnRDb21wdXRlckljb24gPSBmdW5jdGlvbihlbGVtKSB7XG4gIGVsZW0uYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJzeW1ib2xcIikuYXR0cihcImlkXCIsIFwiY29tcHV0ZXJcIikuYXR0cihcIndpZHRoXCIsIFwiMjRcIikuYXR0cihcImhlaWdodFwiLCBcIjI0XCIpLmFwcGVuZChcInBhdGhcIikuYXR0cihcInRyYW5zZm9ybVwiLCBcInNjYWxlKC41KVwiKS5hdHRyKFxuICAgIFwiZFwiLFxuICAgIFwiTTIgMnYxM2gyMHYtMTNoLTIwem0xOCAxMWgtMTZ2LTloMTZ2OXptLTEwLjIyOCA2bC40NjYtMWgzLjUyNGwuNDY3IDFoLTQuNDU3em0xNC4yMjggM2gtMjRsMi02aDIuMTA0bC0xLjMzIDRoMTguNDVsLTEuMjk3LTRoMi4wNzNsMiA2em0tNS0xMGgtMTR2LTdoMTR2N3pcIlxuICApO1xufTtcbmNvbnN0IGluc2VydENsb2NrSWNvbiA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgZWxlbS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcInN5bWJvbFwiKS5hdHRyKFwiaWRcIiwgXCJjbG9ja1wiKS5hdHRyKFwid2lkdGhcIiwgXCIyNFwiKS5hdHRyKFwiaGVpZ2h0XCIsIFwiMjRcIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwic2NhbGUoLjUpXCIpLmF0dHIoXG4gICAgXCJkXCIsXG4gICAgXCJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyem01Ljg0OCAxMi40NTljLjIwMi4wMzguMjAyLjMzMy4wMDEuMzcyLTEuOTA3LjM2MS02LjA0NSAxLjExMS02LjU0NyAxLjExMS0uNzE5IDAtMS4zMDEtLjU4Mi0xLjMwMS0xLjMwMSAwLS41MTIuNzctNS40NDcgMS4xMjUtNy40NDUuMDM0LS4xOTIuMzEyLS4xODEuMzQzLjAxNGwuOTg1IDYuMjM4IDUuMzk0IDEuMDExelwiXG4gICk7XG59O1xuY29uc3QgaW5zZXJ0QXJyb3dIZWFkID0gZnVuY3Rpb24oZWxlbSkge1xuICBlbGVtLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBcImFycm93aGVhZFwiKS5hdHRyKFwicmVmWFwiLCA3LjkpLmF0dHIoXCJyZWZZXCIsIDUpLmF0dHIoXCJtYXJrZXJVbml0c1wiLCBcInVzZXJTcGFjZU9uVXNlXCIpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAxMikuYXR0cihcIm1hcmtlckhlaWdodFwiLCAxMikuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBcIk0gMCAwIEwgMTAgNSBMIDAgMTAgelwiKTtcbn07XG5jb25zdCBpbnNlcnRBcnJvd0ZpbGxlZEhlYWQgPSBmdW5jdGlvbihlbGVtKSB7XG4gIGVsZW0uYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIFwiZmlsbGVkLWhlYWRcIikuYXR0cihcInJlZlhcIiwgMTUuNSkuYXR0cihcInJlZllcIiwgNykuYXR0cihcIm1hcmtlcldpZHRoXCIsIDIwKS5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDI4KS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSAxOCw3IEw5LDEzIEwxNCw3IEw5LDEgWlwiKTtcbn07XG5jb25zdCBpbnNlcnRTZXF1ZW5jZU51bWJlciA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgZWxlbS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgXCJzZXF1ZW5jZW51bWJlclwiKS5hdHRyKFwicmVmWFwiLCAxNSkuYXR0cihcInJlZllcIiwgMTUpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCA2MCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCA0MCkuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJjeFwiLCAxNSkuYXR0cihcImN5XCIsIDE1KS5hdHRyKFwiclwiLCA2KTtcbn07XG5jb25zdCBpbnNlcnRBcnJvd0Nyb3NzSGVhZCA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgY29uc3QgZGVmcyA9IGVsZW0uYXBwZW5kKFwiZGVmc1wiKTtcbiAgY29uc3QgbWFya2VyID0gZGVmcy5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIFwiY3Jvc3NoZWFkXCIpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAxNSkuYXR0cihcIm1hcmtlckhlaWdodFwiLCA4KS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hdHRyKFwicmVmWFwiLCA0KS5hdHRyKFwicmVmWVwiLCA0LjUpO1xuICBtYXJrZXIuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIikuYXR0cihcInN0cm9rZVwiLCBcIiMwMDAwMDBcIikuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiMCwgMFwiKS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMXB0XCIpLmF0dHIoXCJkXCIsIFwiTSAxLDIgTCA2LDcgTSA2LDIgTCAxLDdcIik7XG59O1xuY29uc3QgZ2V0VGV4dE9iaiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBmaWxsOiB2b2lkIDAsXG4gICAgYW5jaG9yOiB2b2lkIDAsXG4gICAgc3R5bGU6IFwiIzY2NlwiLFxuICAgIHdpZHRoOiB2b2lkIDAsXG4gICAgaGVpZ2h0OiB2b2lkIDAsXG4gICAgdGV4dE1hcmdpbjogMCxcbiAgICByeDogMCxcbiAgICByeTogMCxcbiAgICB0c3BhbjogdHJ1ZSxcbiAgICB2YWxpZ246IHZvaWQgMFxuICB9O1xufTtcbmNvbnN0IGdldE5vdGVSZWN0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGZpbGw6IFwiI0VERjJBRVwiLFxuICAgIHN0cm9rZTogXCIjNjY2XCIsXG4gICAgd2lkdGg6IDEwMCxcbiAgICBhbmNob3I6IFwic3RhcnRcIixcbiAgICBoZWlnaHQ6IDEwMCxcbiAgICByeDogMCxcbiAgICByeTogMFxuICB9O1xufTtcbmNvbnN0IF9kcmF3VGV4dENhbmRpZGF0ZUZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gYnlUZXh0KGNvbnRlbnQsIGcsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHRleHRBdHRycykge1xuICAgIGNvbnN0IHRleHQgPSBnLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgeCArIHdpZHRoIC8gMikuYXR0cihcInlcIiwgeSArIGhlaWdodCAvIDIgKyA1KS5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpLnRleHQoY29udGVudCk7XG4gICAgX3NldFRleHRBdHRycyh0ZXh0LCB0ZXh0QXR0cnMpO1xuICB9XG4gIGZ1bmN0aW9uIGJ5VHNwYW4oY29udGVudCwgZywgeCwgeSwgd2lkdGgsIGhlaWdodCwgdGV4dEF0dHJzLCBjb25mMikge1xuICAgIGNvbnN0IHsgYWN0b3JGb250U2l6ZSwgYWN0b3JGb250RmFtaWx5LCBhY3RvckZvbnRXZWlnaHQgfSA9IGNvbmYyO1xuICAgIGNvbnN0IFtfYWN0b3JGb250U2l6ZSwgX2FjdG9yRm9udFNpemVQeF0gPSBwYXJzZUZvbnRTaXplKGFjdG9yRm9udFNpemUpO1xuICAgIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdChjb21tb24ubGluZUJyZWFrUmVnZXgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGR5ID0gaSAqIF9hY3RvckZvbnRTaXplIC0gX2FjdG9yRm9udFNpemUgKiAobGluZXMubGVuZ3RoIC0gMSkgLyAyO1xuICAgICAgY29uc3QgdGV4dCA9IGcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCB4ICsgd2lkdGggLyAyKS5hdHRyKFwieVwiLCB5KS5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpLnN0eWxlKFwiZm9udC1zaXplXCIsIF9hY3RvckZvbnRTaXplUHgpLnN0eWxlKFwiZm9udC13ZWlnaHRcIiwgYWN0b3JGb250V2VpZ2h0KS5zdHlsZShcImZvbnQtZmFtaWx5XCIsIGFjdG9yRm9udEZhbWlseSk7XG4gICAgICB0ZXh0LmFwcGVuZChcInRzcGFuXCIpLmF0dHIoXCJ4XCIsIHggKyB3aWR0aCAvIDIpLmF0dHIoXCJkeVwiLCBkeSkudGV4dChsaW5lc1tpXSk7XG4gICAgICB0ZXh0LmF0dHIoXCJ5XCIsIHkgKyBoZWlnaHQgLyAyKS5hdHRyKFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJjZW50cmFsXCIpLmF0dHIoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJjZW50cmFsXCIpO1xuICAgICAgX3NldFRleHRBdHRycyh0ZXh0LCB0ZXh0QXR0cnMpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBieUZvKGNvbnRlbnQsIGcsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHRleHRBdHRycywgY29uZjIpIHtcbiAgICBjb25zdCBzID0gZy5hcHBlbmQoXCJzd2l0Y2hcIik7XG4gICAgY29uc3QgZiA9IHMuYXBwZW5kKFwiZm9yZWlnbk9iamVjdFwiKS5hdHRyKFwieFwiLCB4KS5hdHRyKFwieVwiLCB5KS5hdHRyKFwid2lkdGhcIiwgd2lkdGgpLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcbiAgICBjb25zdCB0ZXh0ID0gZi5hcHBlbmQoXCJ4aHRtbDpkaXZcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwidGFibGVcIikuc3R5bGUoXCJoZWlnaHRcIiwgXCIxMDAlXCIpLnN0eWxlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xuICAgIHRleHQuYXBwZW5kKFwiZGl2XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcInRhYmxlLWNlbGxcIikuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsIFwiY2VudGVyXCIpLnN0eWxlKFwidmVydGljYWwtYWxpZ25cIiwgXCJtaWRkbGVcIikudGV4dChjb250ZW50KTtcbiAgICBieVRzcGFuKGNvbnRlbnQsIHMsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHRleHRBdHRycywgY29uZjIpO1xuICAgIF9zZXRUZXh0QXR0cnModGV4dCwgdGV4dEF0dHJzKTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBieUthdGV4KGNvbnRlbnQsIGcsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHRleHRBdHRycywgY29uZjIpIHtcbiAgICBjb25zdCBkaW0gPSBhd2FpdCBjYWxjdWxhdGVNYXRoTUxEaW1lbnNpb25zKGNvbnRlbnQsIGdldENvbmZpZyQxKCkpO1xuICAgIGNvbnN0IHMgPSBnLmFwcGVuZChcInN3aXRjaFwiKTtcbiAgICBjb25zdCBmID0gcy5hcHBlbmQoXCJmb3JlaWduT2JqZWN0XCIpLmF0dHIoXCJ4XCIsIHggKyB3aWR0aCAvIDIgLSBkaW0ud2lkdGggLyAyKS5hdHRyKFwieVwiLCB5ICsgaGVpZ2h0IC8gMiAtIGRpbS5oZWlnaHQgLyAyKS5hdHRyKFwid2lkdGhcIiwgZGltLndpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIGRpbS5oZWlnaHQpO1xuICAgIGNvbnN0IHRleHQgPSBmLmFwcGVuZChcInhodG1sOmRpdlwiKS5zdHlsZShcImhlaWdodFwiLCBcIjEwMCVcIikuc3R5bGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XG4gICAgdGV4dC5hcHBlbmQoXCJkaXZcIikuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsIFwiY2VudGVyXCIpLnN0eWxlKFwidmVydGljYWwtYWxpZ25cIiwgXCJtaWRkbGVcIikuaHRtbChhd2FpdCByZW5kZXJLYXRleChjb250ZW50LCBnZXRDb25maWckMSgpKSk7XG4gICAgYnlUc3Bhbihjb250ZW50LCBzLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0ZXh0QXR0cnMsIGNvbmYyKTtcbiAgICBfc2V0VGV4dEF0dHJzKHRleHQsIHRleHRBdHRycyk7XG4gIH1cbiAgZnVuY3Rpb24gX3NldFRleHRBdHRycyh0b1RleHQsIGZyb21UZXh0QXR0cnNEaWN0KSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZnJvbVRleHRBdHRyc0RpY3QpIHtcbiAgICAgIGlmIChmcm9tVGV4dEF0dHJzRGljdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRvVGV4dC5hdHRyKGtleSwgZnJvbVRleHRBdHRyc0RpY3Rba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmdW5jdGlvbihjb25mMiwgaGFzS2F0ZXgyID0gZmFsc2UpIHtcbiAgICBpZiAoaGFzS2F0ZXgyKSB7XG4gICAgICByZXR1cm4gYnlLYXRleDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbmYyLnRleHRQbGFjZW1lbnQgPT09IFwiZm9cIiA/IGJ5Rm8gOiBjb25mMi50ZXh0UGxhY2VtZW50ID09PSBcIm9sZFwiID8gYnlUZXh0IDogYnlUc3BhbjtcbiAgfTtcbn0oKTtcbmNvbnN0IF9kcmF3TWVudUl0ZW1UZXh0Q2FuZGlkYXRlRnVuYyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBieVRleHQoY29udGVudCwgZywgeCwgeSwgd2lkdGgsIGhlaWdodCwgdGV4dEF0dHJzKSB7XG4gICAgY29uc3QgdGV4dCA9IGcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCB4KS5hdHRyKFwieVwiLCB5KS5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwic3RhcnRcIikudGV4dChjb250ZW50KTtcbiAgICBfc2V0VGV4dEF0dHJzKHRleHQsIHRleHRBdHRycyk7XG4gIH1cbiAgZnVuY3Rpb24gYnlUc3Bhbihjb250ZW50LCBnLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0ZXh0QXR0cnMsIGNvbmYyKSB7XG4gICAgY29uc3QgeyBhY3RvckZvbnRTaXplLCBhY3RvckZvbnRGYW1pbHksIGFjdG9yRm9udFdlaWdodCB9ID0gY29uZjI7XG4gICAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KGNvbW1vbi5saW5lQnJlYWtSZWdleCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZHkgPSBpICogYWN0b3JGb250U2l6ZSAtIGFjdG9yRm9udFNpemUgKiAobGluZXMubGVuZ3RoIC0gMSkgLyAyO1xuICAgICAgY29uc3QgdGV4dCA9IGcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCB4KS5hdHRyKFwieVwiLCB5KS5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwic3RhcnRcIikuc3R5bGUoXCJmb250LXNpemVcIiwgYWN0b3JGb250U2l6ZSkuc3R5bGUoXCJmb250LXdlaWdodFwiLCBhY3RvckZvbnRXZWlnaHQpLnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgYWN0b3JGb250RmFtaWx5KTtcbiAgICAgIHRleHQuYXBwZW5kKFwidHNwYW5cIikuYXR0cihcInhcIiwgeCkuYXR0cihcImR5XCIsIGR5KS50ZXh0KGxpbmVzW2ldKTtcbiAgICAgIHRleHQuYXR0cihcInlcIiwgeSArIGhlaWdodCAvIDIpLmF0dHIoXCJkb21pbmFudC1iYXNlbGluZVwiLCBcImNlbnRyYWxcIikuYXR0cihcImFsaWdubWVudC1iYXNlbGluZVwiLCBcImNlbnRyYWxcIik7XG4gICAgICBfc2V0VGV4dEF0dHJzKHRleHQsIHRleHRBdHRycyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGJ5Rm8oY29udGVudCwgZywgeCwgeSwgd2lkdGgsIGhlaWdodCwgdGV4dEF0dHJzLCBjb25mMikge1xuICAgIGNvbnN0IHMgPSBnLmFwcGVuZChcInN3aXRjaFwiKTtcbiAgICBjb25zdCBmID0gcy5hcHBlbmQoXCJmb3JlaWduT2JqZWN0XCIpLmF0dHIoXCJ4XCIsIHgpLmF0dHIoXCJ5XCIsIHkpLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCkuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpO1xuICAgIGNvbnN0IHRleHQgPSBmLmFwcGVuZChcInhodG1sOmRpdlwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJ0YWJsZVwiKS5zdHlsZShcImhlaWdodFwiLCBcIjEwMCVcIikuc3R5bGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XG4gICAgdGV4dC5hcHBlbmQoXCJkaXZcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwidGFibGUtY2VsbFwiKS5zdHlsZShcInRleHQtYWxpZ25cIiwgXCJjZW50ZXJcIikuc3R5bGUoXCJ2ZXJ0aWNhbC1hbGlnblwiLCBcIm1pZGRsZVwiKS50ZXh0KGNvbnRlbnQpO1xuICAgIGJ5VHNwYW4oY29udGVudCwgcywgeCwgeSwgd2lkdGgsIGhlaWdodCwgdGV4dEF0dHJzLCBjb25mMik7XG4gICAgX3NldFRleHRBdHRycyh0ZXh0LCB0ZXh0QXR0cnMpO1xuICB9XG4gIGZ1bmN0aW9uIF9zZXRUZXh0QXR0cnModG9UZXh0LCBmcm9tVGV4dEF0dHJzRGljdCkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGZyb21UZXh0QXR0cnNEaWN0KSB7XG4gICAgICBpZiAoZnJvbVRleHRBdHRyc0RpY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0b1RleHQuYXR0cihrZXksIGZyb21UZXh0QXR0cnNEaWN0W2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oY29uZjIpIHtcbiAgICByZXR1cm4gY29uZjIudGV4dFBsYWNlbWVudCA9PT0gXCJmb1wiID8gYnlGbyA6IGNvbmYyLnRleHRQbGFjZW1lbnQgPT09IFwib2xkXCIgPyBieVRleHQgOiBieVRzcGFuO1xuICB9O1xufSgpO1xuY29uc3Qgc3ZnRHJhdyA9IHtcbiAgZHJhd1JlY3QsXG4gIGRyYXdUZXh0LFxuICBkcmF3TGFiZWwsXG4gIGRyYXdBY3RvcixcbiAgZHJhd0JveCxcbiAgZHJhd1BvcHVwLFxuICBhbmNob3JFbGVtZW50LFxuICBkcmF3QWN0aXZhdGlvbixcbiAgZHJhd0xvb3AsXG4gIGRyYXdCYWNrZ3JvdW5kUmVjdCxcbiAgaW5zZXJ0QXJyb3dIZWFkLFxuICBpbnNlcnRBcnJvd0ZpbGxlZEhlYWQsXG4gIGluc2VydFNlcXVlbmNlTnVtYmVyLFxuICBpbnNlcnRBcnJvd0Nyb3NzSGVhZCxcbiAgaW5zZXJ0RGF0YWJhc2VJY29uLFxuICBpbnNlcnRDb21wdXRlckljb24sXG4gIGluc2VydENsb2NrSWNvbixcbiAgZ2V0VGV4dE9iaixcbiAgZ2V0Tm90ZVJlY3QsXG4gIGZpeExpZmVMaW5lSGVpZ2h0cyxcbiAgc2FuaXRpemVVcmxcbn07XG5sZXQgY29uZiA9IHt9O1xuY29uc3QgYm91bmRzID0ge1xuICBkYXRhOiB7XG4gICAgc3RhcnR4OiB2b2lkIDAsXG4gICAgc3RvcHg6IHZvaWQgMCxcbiAgICBzdGFydHk6IHZvaWQgMCxcbiAgICBzdG9weTogdm9pZCAwXG4gIH0sXG4gIHZlcnRpY2FsUG9zOiAwLFxuICBzZXF1ZW5jZUl0ZW1zOiBbXSxcbiAgYWN0aXZhdGlvbnM6IFtdLFxuICBtb2RlbHM6IHtcbiAgICBnZXRIZWlnaHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLmFjdG9ycy5sZW5ndGggPT09IDAgPyBbMF0gOiB0aGlzLmFjdG9ycy5tYXAoKGFjdG9yKSA9PiBhY3Rvci5oZWlnaHQgfHwgMClcbiAgICAgICkgKyAodGhpcy5sb29wcy5sZW5ndGggPT09IDAgPyAwIDogdGhpcy5sb29wcy5tYXAoKGl0KSA9PiBpdC5oZWlnaHQgfHwgMCkucmVkdWNlKChhY2MsIGgpID0+IGFjYyArIGgpKSArICh0aGlzLm1lc3NhZ2VzLmxlbmd0aCA9PT0gMCA/IDAgOiB0aGlzLm1lc3NhZ2VzLm1hcCgoaXQpID0+IGl0LmhlaWdodCB8fCAwKS5yZWR1Y2UoKGFjYywgaCkgPT4gYWNjICsgaCkpICsgKHRoaXMubm90ZXMubGVuZ3RoID09PSAwID8gMCA6IHRoaXMubm90ZXMubWFwKChpdCkgPT4gaXQuaGVpZ2h0IHx8IDApLnJlZHVjZSgoYWNjLCBoKSA9PiBhY2MgKyBoKSk7XG4gICAgfSxcbiAgICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmFjdG9ycyA9IFtdO1xuICAgICAgdGhpcy5ib3hlcyA9IFtdO1xuICAgICAgdGhpcy5sb29wcyA9IFtdO1xuICAgICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgICAgdGhpcy5ub3RlcyA9IFtdO1xuICAgIH0sXG4gICAgYWRkQm94OiBmdW5jdGlvbihib3hNb2RlbCkge1xuICAgICAgdGhpcy5ib3hlcy5wdXNoKGJveE1vZGVsKTtcbiAgICB9LFxuICAgIGFkZEFjdG9yOiBmdW5jdGlvbihhY3Rvck1vZGVsKSB7XG4gICAgICB0aGlzLmFjdG9ycy5wdXNoKGFjdG9yTW9kZWwpO1xuICAgIH0sXG4gICAgYWRkTG9vcDogZnVuY3Rpb24obG9vcE1vZGVsKSB7XG4gICAgICB0aGlzLmxvb3BzLnB1c2gobG9vcE1vZGVsKTtcbiAgICB9LFxuICAgIGFkZE1lc3NhZ2U6IGZ1bmN0aW9uKG1zZ01vZGVsKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobXNnTW9kZWwpO1xuICAgIH0sXG4gICAgYWRkTm90ZTogZnVuY3Rpb24obm90ZU1vZGVsKSB7XG4gICAgICB0aGlzLm5vdGVzLnB1c2gobm90ZU1vZGVsKTtcbiAgICB9LFxuICAgIGxhc3RBY3RvcjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RvcnNbdGhpcy5hY3RvcnMubGVuZ3RoIC0gMV07XG4gICAgfSxcbiAgICBsYXN0TG9vcDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb29wc1t0aGlzLmxvb3BzLmxlbmd0aCAtIDFdO1xuICAgIH0sXG4gICAgbGFzdE1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXNbdGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxXTtcbiAgICB9LFxuICAgIGxhc3ROb3RlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vdGVzW3RoaXMubm90ZXMubGVuZ3RoIC0gMV07XG4gICAgfSxcbiAgICBhY3RvcnM6IFtdLFxuICAgIGJveGVzOiBbXSxcbiAgICBsb29wczogW10sXG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIG5vdGVzOiBbXVxuICB9LFxuICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNlcXVlbmNlSXRlbXMgPSBbXTtcbiAgICB0aGlzLmFjdGl2YXRpb25zID0gW107XG4gICAgdGhpcy5tb2RlbHMuY2xlYXIoKTtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICBzdGFydHg6IHZvaWQgMCxcbiAgICAgIHN0b3B4OiB2b2lkIDAsXG4gICAgICBzdGFydHk6IHZvaWQgMCxcbiAgICAgIHN0b3B5OiB2b2lkIDBcbiAgICB9O1xuICAgIHRoaXMudmVydGljYWxQb3MgPSAwO1xuICAgIHNldENvbmYoZ2V0Q29uZmlnKCkpO1xuICB9LFxuICB1cGRhdGVWYWw6IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWwsIGZ1bikge1xuICAgIGlmIChvYmpba2V5XSA9PT0gdm9pZCAwKSB7XG4gICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSBmdW4odmFsLCBvYmpba2V5XSk7XG4gICAgfVxuICB9LFxuICB1cGRhdGVCb3VuZHM6IGZ1bmN0aW9uKHN0YXJ0eCwgc3RhcnR5LCBzdG9weCwgc3RvcHkpIHtcbiAgICBjb25zdCBfc2VsZiA9IHRoaXM7XG4gICAgbGV0IGNudCA9IDA7XG4gICAgZnVuY3Rpb24gdXBkYXRlRm4odHlwZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZUl0ZW1Cb3VuZHMoaXRlbSkge1xuICAgICAgICBjbnQrKztcbiAgICAgICAgY29uc3QgbiA9IF9zZWxmLnNlcXVlbmNlSXRlbXMubGVuZ3RoIC0gY250ICsgMTtcbiAgICAgICAgX3NlbGYudXBkYXRlVmFsKGl0ZW0sIFwic3RhcnR5XCIsIHN0YXJ0eSAtIG4gKiBjb25mLmJveE1hcmdpbiwgTWF0aC5taW4pO1xuICAgICAgICBfc2VsZi51cGRhdGVWYWwoaXRlbSwgXCJzdG9weVwiLCBzdG9weSArIG4gKiBjb25mLmJveE1hcmdpbiwgTWF0aC5tYXgpO1xuICAgICAgICBfc2VsZi51cGRhdGVWYWwoYm91bmRzLmRhdGEsIFwic3RhcnR4XCIsIHN0YXJ0eCAtIG4gKiBjb25mLmJveE1hcmdpbiwgTWF0aC5taW4pO1xuICAgICAgICBfc2VsZi51cGRhdGVWYWwoYm91bmRzLmRhdGEsIFwic3RvcHhcIiwgc3RvcHggKyBuICogY29uZi5ib3hNYXJnaW4sIE1hdGgubWF4KTtcbiAgICAgICAgaWYgKCEodHlwZSA9PT0gXCJhY3RpdmF0aW9uXCIpKSB7XG4gICAgICAgICAgX3NlbGYudXBkYXRlVmFsKGl0ZW0sIFwic3RhcnR4XCIsIHN0YXJ0eCAtIG4gKiBjb25mLmJveE1hcmdpbiwgTWF0aC5taW4pO1xuICAgICAgICAgIF9zZWxmLnVwZGF0ZVZhbChpdGVtLCBcInN0b3B4XCIsIHN0b3B4ICsgbiAqIGNvbmYuYm94TWFyZ2luLCBNYXRoLm1heCk7XG4gICAgICAgICAgX3NlbGYudXBkYXRlVmFsKGJvdW5kcy5kYXRhLCBcInN0YXJ0eVwiLCBzdGFydHkgLSBuICogY29uZi5ib3hNYXJnaW4sIE1hdGgubWluKTtcbiAgICAgICAgICBfc2VsZi51cGRhdGVWYWwoYm91bmRzLmRhdGEsIFwic3RvcHlcIiwgc3RvcHkgKyBuICogY29uZi5ib3hNYXJnaW4sIE1hdGgubWF4KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5zZXF1ZW5jZUl0ZW1zLmZvckVhY2godXBkYXRlRm4oKSk7XG4gICAgdGhpcy5hY3RpdmF0aW9ucy5mb3JFYWNoKHVwZGF0ZUZuKFwiYWN0aXZhdGlvblwiKSk7XG4gIH0sXG4gIGluc2VydDogZnVuY3Rpb24oc3RhcnR4LCBzdGFydHksIHN0b3B4LCBzdG9weSkge1xuICAgIGNvbnN0IF9zdGFydHggPSBjb21tb24uZ2V0TWluKHN0YXJ0eCwgc3RvcHgpO1xuICAgIGNvbnN0IF9zdG9weCA9IGNvbW1vbi5nZXRNYXgoc3RhcnR4LCBzdG9weCk7XG4gICAgY29uc3QgX3N0YXJ0eSA9IGNvbW1vbi5nZXRNaW4oc3RhcnR5LCBzdG9weSk7XG4gICAgY29uc3QgX3N0b3B5ID0gY29tbW9uLmdldE1heChzdGFydHksIHN0b3B5KTtcbiAgICB0aGlzLnVwZGF0ZVZhbChib3VuZHMuZGF0YSwgXCJzdGFydHhcIiwgX3N0YXJ0eCwgTWF0aC5taW4pO1xuICAgIHRoaXMudXBkYXRlVmFsKGJvdW5kcy5kYXRhLCBcInN0YXJ0eVwiLCBfc3RhcnR5LCBNYXRoLm1pbik7XG4gICAgdGhpcy51cGRhdGVWYWwoYm91bmRzLmRhdGEsIFwic3RvcHhcIiwgX3N0b3B4LCBNYXRoLm1heCk7XG4gICAgdGhpcy51cGRhdGVWYWwoYm91bmRzLmRhdGEsIFwic3RvcHlcIiwgX3N0b3B5LCBNYXRoLm1heCk7XG4gICAgdGhpcy51cGRhdGVCb3VuZHMoX3N0YXJ0eCwgX3N0YXJ0eSwgX3N0b3B4LCBfc3RvcHkpO1xuICB9LFxuICBuZXdBY3RpdmF0aW9uOiBmdW5jdGlvbihtZXNzYWdlLCBkaWFncmFtMiwgYWN0b3JzKSB7XG4gICAgY29uc3QgYWN0b3JSZWN0ID0gYWN0b3JzW21lc3NhZ2UuZnJvbS5hY3Rvcl07XG4gICAgY29uc3Qgc3RhY2tlZFNpemUgPSBhY3RvckFjdGl2YXRpb25zKG1lc3NhZ2UuZnJvbS5hY3RvcikubGVuZ3RoIHx8IDA7XG4gICAgY29uc3QgeCA9IGFjdG9yUmVjdC54ICsgYWN0b3JSZWN0LndpZHRoIC8gMiArIChzdGFja2VkU2l6ZSAtIDEpICogY29uZi5hY3RpdmF0aW9uV2lkdGggLyAyO1xuICAgIHRoaXMuYWN0aXZhdGlvbnMucHVzaCh7XG4gICAgICBzdGFydHg6IHgsXG4gICAgICBzdGFydHk6IHRoaXMudmVydGljYWxQb3MgKyAyLFxuICAgICAgc3RvcHg6IHggKyBjb25mLmFjdGl2YXRpb25XaWR0aCxcbiAgICAgIHN0b3B5OiB2b2lkIDAsXG4gICAgICBhY3RvcjogbWVzc2FnZS5mcm9tLmFjdG9yLFxuICAgICAgYW5jaG9yZWQ6IHN2Z0RyYXcuYW5jaG9yRWxlbWVudChkaWFncmFtMilcbiAgICB9KTtcbiAgfSxcbiAgZW5kQWN0aXZhdGlvbjogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgIGNvbnN0IGxhc3RBY3RvckFjdGl2YXRpb25JZHggPSB0aGlzLmFjdGl2YXRpb25zLm1hcChmdW5jdGlvbihhY3RpdmF0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aXZhdGlvbi5hY3RvcjtcbiAgICB9KS5sYXN0SW5kZXhPZihtZXNzYWdlLmZyb20uYWN0b3IpO1xuICAgIHJldHVybiB0aGlzLmFjdGl2YXRpb25zLnNwbGljZShsYXN0QWN0b3JBY3RpdmF0aW9uSWR4LCAxKVswXTtcbiAgfSxcbiAgY3JlYXRlTG9vcDogZnVuY3Rpb24odGl0bGUgPSB7IG1lc3NhZ2U6IHZvaWQgMCwgd3JhcDogZmFsc2UsIHdpZHRoOiB2b2lkIDAgfSwgZmlsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydHg6IHZvaWQgMCxcbiAgICAgIHN0YXJ0eTogdGhpcy52ZXJ0aWNhbFBvcyxcbiAgICAgIHN0b3B4OiB2b2lkIDAsXG4gICAgICBzdG9weTogdm9pZCAwLFxuICAgICAgdGl0bGU6IHRpdGxlLm1lc3NhZ2UsXG4gICAgICB3cmFwOiB0aXRsZS53cmFwLFxuICAgICAgd2lkdGg6IHRpdGxlLndpZHRoLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgZmlsbFxuICAgIH07XG4gIH0sXG4gIG5ld0xvb3A6IGZ1bmN0aW9uKHRpdGxlID0geyBtZXNzYWdlOiB2b2lkIDAsIHdyYXA6IGZhbHNlLCB3aWR0aDogdm9pZCAwIH0sIGZpbGwpIHtcbiAgICB0aGlzLnNlcXVlbmNlSXRlbXMucHVzaCh0aGlzLmNyZWF0ZUxvb3AodGl0bGUsIGZpbGwpKTtcbiAgfSxcbiAgZW5kTG9vcDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VxdWVuY2VJdGVtcy5wb3AoKTtcbiAgfSxcbiAgaXNMb29wT3ZlcmxhcDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VxdWVuY2VJdGVtcy5sZW5ndGggPyB0aGlzLnNlcXVlbmNlSXRlbXNbdGhpcy5zZXF1ZW5jZUl0ZW1zLmxlbmd0aCAtIDFdLm92ZXJsYXAgOiBmYWxzZTtcbiAgfSxcbiAgYWRkU2VjdGlvblRvTG9vcDogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgIGNvbnN0IGxvb3AgPSB0aGlzLnNlcXVlbmNlSXRlbXMucG9wKCk7XG4gICAgbG9vcC5zZWN0aW9ucyA9IGxvb3Auc2VjdGlvbnMgfHwgW107XG4gICAgbG9vcC5zZWN0aW9uVGl0bGVzID0gbG9vcC5zZWN0aW9uVGl0bGVzIHx8IFtdO1xuICAgIGxvb3Auc2VjdGlvbnMucHVzaCh7IHk6IGJvdW5kcy5nZXRWZXJ0aWNhbFBvcygpLCBoZWlnaHQ6IDAgfSk7XG4gICAgbG9vcC5zZWN0aW9uVGl0bGVzLnB1c2gobWVzc2FnZSk7XG4gICAgdGhpcy5zZXF1ZW5jZUl0ZW1zLnB1c2gobG9vcCk7XG4gIH0sXG4gIHNhdmVWZXJ0aWNhbFBvczogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNMb29wT3ZlcmxhcCgpKSB7XG4gICAgICB0aGlzLnNhdmVkVmVydGljYWxQb3MgPSB0aGlzLnZlcnRpY2FsUG9zO1xuICAgIH1cbiAgfSxcbiAgcmVzZXRWZXJ0aWNhbFBvczogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNMb29wT3ZlcmxhcCgpKSB7XG4gICAgICB0aGlzLnZlcnRpY2FsUG9zID0gdGhpcy5zYXZlZFZlcnRpY2FsUG9zO1xuICAgIH1cbiAgfSxcbiAgYnVtcFZlcnRpY2FsUG9zOiBmdW5jdGlvbihidW1wKSB7XG4gICAgdGhpcy52ZXJ0aWNhbFBvcyA9IHRoaXMudmVydGljYWxQb3MgKyBidW1wO1xuICAgIHRoaXMuZGF0YS5zdG9weSA9IGNvbW1vbi5nZXRNYXgodGhpcy5kYXRhLnN0b3B5LCB0aGlzLnZlcnRpY2FsUG9zKTtcbiAgfSxcbiAgZ2V0VmVydGljYWxQb3M6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsUG9zO1xuICB9LFxuICBnZXRCb3VuZHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7IGJvdW5kczogdGhpcy5kYXRhLCBtb2RlbHM6IHRoaXMubW9kZWxzIH07XG4gIH1cbn07XG5jb25zdCBkcmF3Tm90ZSA9IGFzeW5jIGZ1bmN0aW9uKGVsZW0sIG5vdGVNb2RlbCkge1xuICBib3VuZHMuYnVtcFZlcnRpY2FsUG9zKGNvbmYuYm94TWFyZ2luKTtcbiAgbm90ZU1vZGVsLmhlaWdodCA9IGNvbmYuYm94TWFyZ2luO1xuICBub3RlTW9kZWwuc3RhcnR5ID0gYm91bmRzLmdldFZlcnRpY2FsUG9zKCk7XG4gIGNvbnN0IHJlY3QgPSBnZXROb3RlUmVjdCQxKCk7XG4gIHJlY3QueCA9IG5vdGVNb2RlbC5zdGFydHg7XG4gIHJlY3QueSA9IG5vdGVNb2RlbC5zdGFydHk7XG4gIHJlY3Qud2lkdGggPSBub3RlTW9kZWwud2lkdGggfHwgY29uZi53aWR0aDtcbiAgcmVjdC5jbGFzcyA9IFwibm90ZVwiO1xuICBjb25zdCBnID0gZWxlbS5hcHBlbmQoXCJnXCIpO1xuICBjb25zdCByZWN0RWxlbSA9IHN2Z0RyYXcuZHJhd1JlY3QoZywgcmVjdCk7XG4gIGNvbnN0IHRleHRPYmogPSBnZXRUZXh0T2JqJDEoKTtcbiAgdGV4dE9iai54ID0gbm90ZU1vZGVsLnN0YXJ0eDtcbiAgdGV4dE9iai55ID0gbm90ZU1vZGVsLnN0YXJ0eTtcbiAgdGV4dE9iai53aWR0aCA9IHJlY3Qud2lkdGg7XG4gIHRleHRPYmouZHkgPSBcIjFlbVwiO1xuICB0ZXh0T2JqLnRleHQgPSBub3RlTW9kZWwubWVzc2FnZTtcbiAgdGV4dE9iai5jbGFzcyA9IFwibm90ZVRleHRcIjtcbiAgdGV4dE9iai5mb250RmFtaWx5ID0gY29uZi5ub3RlRm9udEZhbWlseTtcbiAgdGV4dE9iai5mb250U2l6ZSA9IGNvbmYubm90ZUZvbnRTaXplO1xuICB0ZXh0T2JqLmZvbnRXZWlnaHQgPSBjb25mLm5vdGVGb250V2VpZ2h0O1xuICB0ZXh0T2JqLmFuY2hvciA9IGNvbmYubm90ZUFsaWduO1xuICB0ZXh0T2JqLnRleHRNYXJnaW4gPSBjb25mLm5vdGVNYXJnaW47XG4gIHRleHRPYmoudmFsaWduID0gXCJjZW50ZXJcIjtcbiAgY29uc3QgdGV4dEVsZW0gPSBoYXNLYXRleCh0ZXh0T2JqLnRleHQpID8gYXdhaXQgZHJhd0thdGV4KGcsIHRleHRPYmopIDogZHJhd1RleHQoZywgdGV4dE9iaik7XG4gIGNvbnN0IHRleHRIZWlnaHQgPSBNYXRoLnJvdW5kKFxuICAgIHRleHRFbGVtLm1hcCgodGUpID0+ICh0ZS5fZ3JvdXBzIHx8IHRlKVswXVswXS5nZXRCQm94KCkuaGVpZ2h0KS5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3VycilcbiAgKTtcbiAgcmVjdEVsZW0uYXR0cihcImhlaWdodFwiLCB0ZXh0SGVpZ2h0ICsgMiAqIGNvbmYubm90ZU1hcmdpbik7XG4gIG5vdGVNb2RlbC5oZWlnaHQgKz0gdGV4dEhlaWdodCArIDIgKiBjb25mLm5vdGVNYXJnaW47XG4gIGJvdW5kcy5idW1wVmVydGljYWxQb3ModGV4dEhlaWdodCArIDIgKiBjb25mLm5vdGVNYXJnaW4pO1xuICBub3RlTW9kZWwuc3RvcHkgPSBub3RlTW9kZWwuc3RhcnR5ICsgdGV4dEhlaWdodCArIDIgKiBjb25mLm5vdGVNYXJnaW47XG4gIG5vdGVNb2RlbC5zdG9weCA9IG5vdGVNb2RlbC5zdGFydHggKyByZWN0LndpZHRoO1xuICBib3VuZHMuaW5zZXJ0KG5vdGVNb2RlbC5zdGFydHgsIG5vdGVNb2RlbC5zdGFydHksIG5vdGVNb2RlbC5zdG9weCwgbm90ZU1vZGVsLnN0b3B5KTtcbiAgYm91bmRzLm1vZGVscy5hZGROb3RlKG5vdGVNb2RlbCk7XG59O1xuY29uc3QgbWVzc2FnZUZvbnQgPSAoY25mKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZm9udEZhbWlseTogY25mLm1lc3NhZ2VGb250RmFtaWx5LFxuICAgIGZvbnRTaXplOiBjbmYubWVzc2FnZUZvbnRTaXplLFxuICAgIGZvbnRXZWlnaHQ6IGNuZi5tZXNzYWdlRm9udFdlaWdodFxuICB9O1xufTtcbmNvbnN0IG5vdGVGb250ID0gKGNuZikgPT4ge1xuICByZXR1cm4ge1xuICAgIGZvbnRGYW1pbHk6IGNuZi5ub3RlRm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogY25mLm5vdGVGb250U2l6ZSxcbiAgICBmb250V2VpZ2h0OiBjbmYubm90ZUZvbnRXZWlnaHRcbiAgfTtcbn07XG5jb25zdCBhY3RvckZvbnQgPSAoY25mKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZm9udEZhbWlseTogY25mLmFjdG9yRm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogY25mLmFjdG9yRm9udFNpemUsXG4gICAgZm9udFdlaWdodDogY25mLmFjdG9yRm9udFdlaWdodFxuICB9O1xufTtcbmFzeW5jIGZ1bmN0aW9uIGJvdW5kTWVzc2FnZShfZGlhZ3JhbSwgbXNnTW9kZWwpIHtcbiAgYm91bmRzLmJ1bXBWZXJ0aWNhbFBvcygxMCk7XG4gIGNvbnN0IHsgc3RhcnR4LCBzdG9weCwgbWVzc2FnZSB9ID0gbXNnTW9kZWw7XG4gIGNvbnN0IGxpbmVzID0gY29tbW9uLnNwbGl0QnJlYWtzKG1lc3NhZ2UpLmxlbmd0aDtcbiAgY29uc3QgaXNLYXRleE1zZyA9IGhhc0thdGV4KG1lc3NhZ2UpO1xuICBjb25zdCB0ZXh0RGltcyA9IGlzS2F0ZXhNc2cgPyBhd2FpdCBjYWxjdWxhdGVNYXRoTUxEaW1lbnNpb25zKG1lc3NhZ2UsIGdldENvbmZpZygpKSA6IHV0aWxzLmNhbGN1bGF0ZVRleHREaW1lbnNpb25zKG1lc3NhZ2UsIG1lc3NhZ2VGb250KGNvbmYpKTtcbiAgaWYgKCFpc0thdGV4TXNnKSB7XG4gICAgY29uc3QgbGluZUhlaWdodCA9IHRleHREaW1zLmhlaWdodCAvIGxpbmVzO1xuICAgIG1zZ01vZGVsLmhlaWdodCArPSBsaW5lSGVpZ2h0O1xuICAgIGJvdW5kcy5idW1wVmVydGljYWxQb3MobGluZUhlaWdodCk7XG4gIH1cbiAgbGV0IGxpbmVTdGFydFk7XG4gIGxldCB0b3RhbE9mZnNldCA9IHRleHREaW1zLmhlaWdodCAtIDEwO1xuICBjb25zdCB0ZXh0V2lkdGggPSB0ZXh0RGltcy53aWR0aDtcbiAgaWYgKHN0YXJ0eCA9PT0gc3RvcHgpIHtcbiAgICBsaW5lU3RhcnRZID0gYm91bmRzLmdldFZlcnRpY2FsUG9zKCkgKyB0b3RhbE9mZnNldDtcbiAgICBpZiAoIWNvbmYucmlnaHRBbmdsZXMpIHtcbiAgICAgIHRvdGFsT2Zmc2V0ICs9IGNvbmYuYm94TWFyZ2luO1xuICAgICAgbGluZVN0YXJ0WSA9IGJvdW5kcy5nZXRWZXJ0aWNhbFBvcygpICsgdG90YWxPZmZzZXQ7XG4gICAgfVxuICAgIHRvdGFsT2Zmc2V0ICs9IDMwO1xuICAgIGNvbnN0IGR4ID0gY29tbW9uLmdldE1heCh0ZXh0V2lkdGggLyAyLCBjb25mLndpZHRoIC8gMik7XG4gICAgYm91bmRzLmluc2VydChcbiAgICAgIHN0YXJ0eCAtIGR4LFxuICAgICAgYm91bmRzLmdldFZlcnRpY2FsUG9zKCkgLSAxMCArIHRvdGFsT2Zmc2V0LFxuICAgICAgc3RvcHggKyBkeCxcbiAgICAgIGJvdW5kcy5nZXRWZXJ0aWNhbFBvcygpICsgMzAgKyB0b3RhbE9mZnNldFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgdG90YWxPZmZzZXQgKz0gY29uZi5ib3hNYXJnaW47XG4gICAgbGluZVN0YXJ0WSA9IGJvdW5kcy5nZXRWZXJ0aWNhbFBvcygpICsgdG90YWxPZmZzZXQ7XG4gICAgYm91bmRzLmluc2VydChzdGFydHgsIGxpbmVTdGFydFkgLSAxMCwgc3RvcHgsIGxpbmVTdGFydFkpO1xuICB9XG4gIGJvdW5kcy5idW1wVmVydGljYWxQb3ModG90YWxPZmZzZXQpO1xuICBtc2dNb2RlbC5oZWlnaHQgKz0gdG90YWxPZmZzZXQ7XG4gIG1zZ01vZGVsLnN0b3B5ID0gbXNnTW9kZWwuc3RhcnR5ICsgbXNnTW9kZWwuaGVpZ2h0O1xuICBib3VuZHMuaW5zZXJ0KG1zZ01vZGVsLmZyb21Cb3VuZHMsIG1zZ01vZGVsLnN0YXJ0eSwgbXNnTW9kZWwudG9Cb3VuZHMsIG1zZ01vZGVsLnN0b3B5KTtcbiAgcmV0dXJuIGxpbmVTdGFydFk7XG59XG5jb25zdCBkcmF3TWVzc2FnZSA9IGFzeW5jIGZ1bmN0aW9uKGRpYWdyYW0yLCBtc2dNb2RlbCwgbGluZVN0YXJ0WSwgZGlhZ09iaikge1xuICBjb25zdCB7IHN0YXJ0eCwgc3RvcHgsIHN0YXJ0eSwgbWVzc2FnZSwgdHlwZSwgc2VxdWVuY2VJbmRleCwgc2VxdWVuY2VWaXNpYmxlIH0gPSBtc2dNb2RlbDtcbiAgY29uc3QgdGV4dERpbXMgPSB1dGlscy5jYWxjdWxhdGVUZXh0RGltZW5zaW9ucyhtZXNzYWdlLCBtZXNzYWdlRm9udChjb25mKSk7XG4gIGNvbnN0IHRleHRPYmogPSBnZXRUZXh0T2JqJDEoKTtcbiAgdGV4dE9iai54ID0gc3RhcnR4O1xuICB0ZXh0T2JqLnkgPSBzdGFydHkgKyAxMDtcbiAgdGV4dE9iai53aWR0aCA9IHN0b3B4IC0gc3RhcnR4O1xuICB0ZXh0T2JqLmNsYXNzID0gXCJtZXNzYWdlVGV4dFwiO1xuICB0ZXh0T2JqLmR5ID0gXCIxZW1cIjtcbiAgdGV4dE9iai50ZXh0ID0gbWVzc2FnZTtcbiAgdGV4dE9iai5mb250RmFtaWx5ID0gY29uZi5tZXNzYWdlRm9udEZhbWlseTtcbiAgdGV4dE9iai5mb250U2l6ZSA9IGNvbmYubWVzc2FnZUZvbnRTaXplO1xuICB0ZXh0T2JqLmZvbnRXZWlnaHQgPSBjb25mLm1lc3NhZ2VGb250V2VpZ2h0O1xuICB0ZXh0T2JqLmFuY2hvciA9IGNvbmYubWVzc2FnZUFsaWduO1xuICB0ZXh0T2JqLnZhbGlnbiA9IFwiY2VudGVyXCI7XG4gIHRleHRPYmoudGV4dE1hcmdpbiA9IGNvbmYud3JhcFBhZGRpbmc7XG4gIHRleHRPYmoudHNwYW4gPSBmYWxzZTtcbiAgaGFzS2F0ZXgodGV4dE9iai50ZXh0KSA/IGF3YWl0IGRyYXdLYXRleChkaWFncmFtMiwgdGV4dE9iaiwgeyBzdGFydHgsIHN0b3B4LCBzdGFydHk6IGxpbmVTdGFydFkgfSkgOiBkcmF3VGV4dChkaWFncmFtMiwgdGV4dE9iaik7XG4gIGNvbnN0IHRleHRXaWR0aCA9IHRleHREaW1zLndpZHRoO1xuICBsZXQgbGluZTtcbiAgaWYgKHN0YXJ0eCA9PT0gc3RvcHgpIHtcbiAgICBpZiAoY29uZi5yaWdodEFuZ2xlcykge1xuICAgICAgbGluZSA9IGRpYWdyYW0yLmFwcGVuZChcInBhdGhcIikuYXR0cihcbiAgICAgICAgXCJkXCIsXG4gICAgICAgIGBNICAke3N0YXJ0eH0sJHtsaW5lU3RhcnRZfSBIICR7c3RhcnR4ICsgY29tbW9uLmdldE1heChjb25mLndpZHRoIC8gMiwgdGV4dFdpZHRoIC8gMil9IFYgJHtsaW5lU3RhcnRZICsgMjV9IEggJHtzdGFydHh9YFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZSA9IGRpYWdyYW0yLmFwcGVuZChcInBhdGhcIikuYXR0cihcbiAgICAgICAgXCJkXCIsXG4gICAgICAgIFwiTSBcIiArIHN0YXJ0eCArIFwiLFwiICsgbGluZVN0YXJ0WSArIFwiIEMgXCIgKyAoc3RhcnR4ICsgNjApICsgXCIsXCIgKyAobGluZVN0YXJ0WSAtIDEwKSArIFwiIFwiICsgKHN0YXJ0eCArIDYwKSArIFwiLFwiICsgKGxpbmVTdGFydFkgKyAzMCkgKyBcIiBcIiArIHN0YXJ0eCArIFwiLFwiICsgKGxpbmVTdGFydFkgKyAyMClcbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxpbmUgPSBkaWFncmFtMi5hcHBlbmQoXCJsaW5lXCIpO1xuICAgIGxpbmUuYXR0cihcIngxXCIsIHN0YXJ0eCk7XG4gICAgbGluZS5hdHRyKFwieTFcIiwgbGluZVN0YXJ0WSk7XG4gICAgbGluZS5hdHRyKFwieDJcIiwgc3RvcHgpO1xuICAgIGxpbmUuYXR0cihcInkyXCIsIGxpbmVTdGFydFkpO1xuICB9XG4gIGlmICh0eXBlID09PSBkaWFnT2JqLmRiLkxJTkVUWVBFLkRPVFRFRCB8fCB0eXBlID09PSBkaWFnT2JqLmRiLkxJTkVUWVBFLkRPVFRFRF9DUk9TUyB8fCB0eXBlID09PSBkaWFnT2JqLmRiLkxJTkVUWVBFLkRPVFRFRF9QT0lOVCB8fCB0eXBlID09PSBkaWFnT2JqLmRiLkxJTkVUWVBFLkRPVFRFRF9PUEVOKSB7XG4gICAgbGluZS5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCIzLCAzXCIpO1xuICAgIGxpbmUuYXR0cihcImNsYXNzXCIsIFwibWVzc2FnZUxpbmUxXCIpO1xuICB9IGVsc2Uge1xuICAgIGxpbmUuYXR0cihcImNsYXNzXCIsIFwibWVzc2FnZUxpbmUwXCIpO1xuICB9XG4gIGxldCB1cmwgPSBcIlwiO1xuICBpZiAoY29uZi5hcnJvd01hcmtlckFic29sdXRlKSB7XG4gICAgdXJsID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXCgvZywgXCJcXFxcKFwiKTtcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFwpL2csIFwiXFxcXClcIik7XG4gIH1cbiAgbGluZS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpO1xuICBsaW5lLmF0dHIoXCJzdHJva2VcIiwgXCJub25lXCIpO1xuICBsaW5lLnN0eWxlKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gIGlmICh0eXBlID09PSBkaWFnT2JqLmRiLkxJTkVUWVBFLlNPTElEIHx8IHR5cGUgPT09IGRpYWdPYmouZGIuTElORVRZUEUuRE9UVEVEKSB7XG4gICAgbGluZS5hdHRyKFwibWFya2VyLWVuZFwiLCBcInVybChcIiArIHVybCArIFwiI2Fycm93aGVhZClcIik7XG4gIH1cbiAgaWYgKHR5cGUgPT09IGRpYWdPYmouZGIuTElORVRZUEUuU09MSURfUE9JTlQgfHwgdHlwZSA9PT0gZGlhZ09iai5kYi5MSU5FVFlQRS5ET1RURURfUE9JTlQpIHtcbiAgICBsaW5lLmF0dHIoXCJtYXJrZXItZW5kXCIsIFwidXJsKFwiICsgdXJsICsgXCIjZmlsbGVkLWhlYWQpXCIpO1xuICB9XG4gIGlmICh0eXBlID09PSBkaWFnT2JqLmRiLkxJTkVUWVBFLlNPTElEX0NST1NTIHx8IHR5cGUgPT09IGRpYWdPYmouZGIuTElORVRZUEUuRE9UVEVEX0NST1NTKSB7XG4gICAgbGluZS5hdHRyKFwibWFya2VyLWVuZFwiLCBcInVybChcIiArIHVybCArIFwiI2Nyb3NzaGVhZClcIik7XG4gIH1cbiAgaWYgKHNlcXVlbmNlVmlzaWJsZSB8fCBjb25mLnNob3dTZXF1ZW5jZU51bWJlcnMpIHtcbiAgICBsaW5lLmF0dHIoXCJtYXJrZXItc3RhcnRcIiwgXCJ1cmwoXCIgKyB1cmwgKyBcIiNzZXF1ZW5jZW51bWJlcilcIik7XG4gICAgZGlhZ3JhbTIuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCBzdGFydHgpLmF0dHIoXCJ5XCIsIGxpbmVTdGFydFkgKyA0KS5hdHRyKFwiZm9udC1mYW1pbHlcIiwgXCJzYW5zLXNlcmlmXCIpLmF0dHIoXCJmb250LXNpemVcIiwgXCIxMnB4XCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKS5hdHRyKFwiY2xhc3NcIiwgXCJzZXF1ZW5jZU51bWJlclwiKS50ZXh0KHNlcXVlbmNlSW5kZXgpO1xuICB9XG59O1xuY29uc3QgYWRkQWN0b3JSZW5kZXJpbmdEYXRhID0gYXN5bmMgZnVuY3Rpb24oZGlhZ3JhbTIsIGFjdG9ycywgY3JlYXRlZEFjdG9ycywgYWN0b3JLZXlzLCB2ZXJ0aWNhbFBvcywgbWVzc2FnZXMsIGlzRm9vdGVyKSB7XG4gIGxldCBwcmV2V2lkdGggPSAwO1xuICBsZXQgcHJldk1hcmdpbiA9IDA7XG4gIGxldCBwcmV2Qm94ID0gdm9pZCAwO1xuICBsZXQgbWF4SGVpZ2h0ID0gMDtcbiAgZm9yIChjb25zdCBhY3RvcktleSBvZiBhY3RvcktleXMpIHtcbiAgICBjb25zdCBhY3RvciA9IGFjdG9yc1thY3RvcktleV07XG4gICAgY29uc3QgYm94ID0gYWN0b3IuYm94O1xuICAgIGlmIChwcmV2Qm94ICYmIHByZXZCb3ggIT0gYm94KSB7XG4gICAgICBpZiAoIWlzRm9vdGVyKSB7XG4gICAgICAgIGJvdW5kcy5tb2RlbHMuYWRkQm94KHByZXZCb3gpO1xuICAgICAgfVxuICAgICAgcHJldk1hcmdpbiArPSBjb25mLmJveE1hcmdpbiArIHByZXZCb3gubWFyZ2luO1xuICAgIH1cbiAgICBpZiAoYm94ICYmIGJveCAhPSBwcmV2Qm94KSB7XG4gICAgICBpZiAoIWlzRm9vdGVyKSB7XG4gICAgICAgIGJveC54ID0gcHJldldpZHRoICsgcHJldk1hcmdpbjtcbiAgICAgICAgYm94LnkgPSB2ZXJ0aWNhbFBvcztcbiAgICAgIH1cbiAgICAgIHByZXZNYXJnaW4gKz0gYm94Lm1hcmdpbjtcbiAgICB9XG4gICAgYWN0b3Iud2lkdGggPSBhY3Rvci53aWR0aCB8fCBjb25mLndpZHRoO1xuICAgIGFjdG9yLmhlaWdodCA9IGNvbW1vbi5nZXRNYXgoYWN0b3IuaGVpZ2h0IHx8IGNvbmYuaGVpZ2h0LCBjb25mLmhlaWdodCk7XG4gICAgYWN0b3IubWFyZ2luID0gYWN0b3IubWFyZ2luIHx8IGNvbmYuYWN0b3JNYXJnaW47XG4gICAgbWF4SGVpZ2h0ID0gY29tbW9uLmdldE1heChtYXhIZWlnaHQsIGFjdG9yLmhlaWdodCk7XG4gICAgaWYgKGNyZWF0ZWRBY3RvcnNbYWN0b3IubmFtZV0pIHtcbiAgICAgIHByZXZNYXJnaW4gKz0gYWN0b3Iud2lkdGggLyAyO1xuICAgIH1cbiAgICBhY3Rvci54ID0gcHJldldpZHRoICsgcHJldk1hcmdpbjtcbiAgICBhY3Rvci5zdGFydHkgPSBib3VuZHMuZ2V0VmVydGljYWxQb3MoKTtcbiAgICBib3VuZHMuaW5zZXJ0KGFjdG9yLngsIHZlcnRpY2FsUG9zLCBhY3Rvci54ICsgYWN0b3Iud2lkdGgsIGFjdG9yLmhlaWdodCk7XG4gICAgcHJldldpZHRoICs9IGFjdG9yLndpZHRoICsgcHJldk1hcmdpbjtcbiAgICBpZiAoYWN0b3IuYm94KSB7XG4gICAgICBhY3Rvci5ib3gud2lkdGggPSBwcmV2V2lkdGggKyBib3gubWFyZ2luIC0gYWN0b3IuYm94Lng7XG4gICAgfVxuICAgIHByZXZNYXJnaW4gPSBhY3Rvci5tYXJnaW47XG4gICAgcHJldkJveCA9IGFjdG9yLmJveDtcbiAgICBib3VuZHMubW9kZWxzLmFkZEFjdG9yKGFjdG9yKTtcbiAgfVxuICBpZiAocHJldkJveCAmJiAhaXNGb290ZXIpIHtcbiAgICBib3VuZHMubW9kZWxzLmFkZEJveChwcmV2Qm94KTtcbiAgfVxuICBib3VuZHMuYnVtcFZlcnRpY2FsUG9zKG1heEhlaWdodCk7XG59O1xuY29uc3QgZHJhd0FjdG9ycyA9IGFzeW5jIGZ1bmN0aW9uKGRpYWdyYW0yLCBhY3RvcnMsIGFjdG9yS2V5cywgaXNGb290ZXIpIHtcbiAgaWYgKCFpc0Zvb3Rlcikge1xuICAgIGZvciAoY29uc3QgYWN0b3JLZXkgb2YgYWN0b3JLZXlzKSB7XG4gICAgICBjb25zdCBhY3RvciA9IGFjdG9yc1thY3RvcktleV07XG4gICAgICBhd2FpdCBzdmdEcmF3LmRyYXdBY3RvcihkaWFncmFtMiwgYWN0b3IsIGNvbmYsIGZhbHNlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IG1heEhlaWdodCA9IDA7XG4gICAgYm91bmRzLmJ1bXBWZXJ0aWNhbFBvcyhjb25mLmJveE1hcmdpbiAqIDIpO1xuICAgIGZvciAoY29uc3QgYWN0b3JLZXkgb2YgYWN0b3JLZXlzKSB7XG4gICAgICBjb25zdCBhY3RvciA9IGFjdG9yc1thY3RvcktleV07XG4gICAgICBpZiAoIWFjdG9yLnN0b3B5KSB7XG4gICAgICAgIGFjdG9yLnN0b3B5ID0gYm91bmRzLmdldFZlcnRpY2FsUG9zKCk7XG4gICAgICB9XG4gICAgICBjb25zdCBoZWlnaHQgPSBhd2FpdCBzdmdEcmF3LmRyYXdBY3RvcihkaWFncmFtMiwgYWN0b3IsIGNvbmYsIHRydWUpO1xuICAgICAgbWF4SGVpZ2h0ID0gY29tbW9uLmdldE1heChtYXhIZWlnaHQsIGhlaWdodCk7XG4gICAgfVxuICAgIGJvdW5kcy5idW1wVmVydGljYWxQb3MobWF4SGVpZ2h0ICsgY29uZi5ib3hNYXJnaW4pO1xuICB9XG59O1xuY29uc3QgZHJhd0FjdG9yc1BvcHVwID0gZnVuY3Rpb24oZGlhZ3JhbTIsIGFjdG9ycywgYWN0b3JLZXlzLCBkb2MpIHtcbiAgbGV0IG1heEhlaWdodCA9IDA7XG4gIGxldCBtYXhXaWR0aCA9IDA7XG4gIGZvciAoY29uc3QgYWN0b3JLZXkgb2YgYWN0b3JLZXlzKSB7XG4gICAgY29uc3QgYWN0b3IgPSBhY3RvcnNbYWN0b3JLZXldO1xuICAgIGNvbnN0IG1pbk1lbnVXaWR0aCA9IGdldFJlcXVpcmVkUG9wdXBXaWR0aChhY3Rvcik7XG4gICAgY29uc3QgbWVudURpbWVuc2lvbnMgPSBzdmdEcmF3LmRyYXdQb3B1cChcbiAgICAgIGRpYWdyYW0yLFxuICAgICAgYWN0b3IsXG4gICAgICBtaW5NZW51V2lkdGgsXG4gICAgICBjb25mLFxuICAgICAgY29uZi5mb3JjZU1lbnVzLFxuICAgICAgZG9jXG4gICAgKTtcbiAgICBpZiAobWVudURpbWVuc2lvbnMuaGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG4gICAgICBtYXhIZWlnaHQgPSBtZW51RGltZW5zaW9ucy5oZWlnaHQ7XG4gICAgfVxuICAgIGlmIChtZW51RGltZW5zaW9ucy53aWR0aCArIGFjdG9yLnggPiBtYXhXaWR0aCkge1xuICAgICAgbWF4V2lkdGggPSBtZW51RGltZW5zaW9ucy53aWR0aCArIGFjdG9yLng7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IG1heEhlaWdodCwgbWF4V2lkdGggfTtcbn07XG5jb25zdCBzZXRDb25mID0gZnVuY3Rpb24oY25mKSB7XG4gIGFzc2lnbldpdGhEZXB0aChjb25mLCBjbmYpO1xuICBpZiAoY25mLmZvbnRGYW1pbHkpIHtcbiAgICBjb25mLmFjdG9yRm9udEZhbWlseSA9IGNvbmYubm90ZUZvbnRGYW1pbHkgPSBjb25mLm1lc3NhZ2VGb250RmFtaWx5ID0gY25mLmZvbnRGYW1pbHk7XG4gIH1cbiAgaWYgKGNuZi5mb250U2l6ZSkge1xuICAgIGNvbmYuYWN0b3JGb250U2l6ZSA9IGNvbmYubm90ZUZvbnRTaXplID0gY29uZi5tZXNzYWdlRm9udFNpemUgPSBjbmYuZm9udFNpemU7XG4gIH1cbiAgaWYgKGNuZi5mb250V2VpZ2h0KSB7XG4gICAgY29uZi5hY3RvckZvbnRXZWlnaHQgPSBjb25mLm5vdGVGb250V2VpZ2h0ID0gY29uZi5tZXNzYWdlRm9udFdlaWdodCA9IGNuZi5mb250V2VpZ2h0O1xuICB9XG59O1xuY29uc3QgYWN0b3JBY3RpdmF0aW9ucyA9IGZ1bmN0aW9uKGFjdG9yKSB7XG4gIHJldHVybiBib3VuZHMuYWN0aXZhdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGFjdGl2YXRpb24pIHtcbiAgICByZXR1cm4gYWN0aXZhdGlvbi5hY3RvciA9PT0gYWN0b3I7XG4gIH0pO1xufTtcbmNvbnN0IGFjdGl2YXRpb25Cb3VuZHMgPSBmdW5jdGlvbihhY3RvciwgYWN0b3JzKSB7XG4gIGNvbnN0IGFjdG9yT2JqID0gYWN0b3JzW2FjdG9yXTtcbiAgY29uc3QgYWN0aXZhdGlvbnMgPSBhY3RvckFjdGl2YXRpb25zKGFjdG9yKTtcbiAgY29uc3QgbGVmdCA9IGFjdGl2YXRpb25zLnJlZHVjZShmdW5jdGlvbihhY2MsIGFjdGl2YXRpb24pIHtcbiAgICByZXR1cm4gY29tbW9uLmdldE1pbihhY2MsIGFjdGl2YXRpb24uc3RhcnR4KTtcbiAgfSwgYWN0b3JPYmoueCArIGFjdG9yT2JqLndpZHRoIC8gMiAtIDEpO1xuICBjb25zdCByaWdodCA9IGFjdGl2YXRpb25zLnJlZHVjZShmdW5jdGlvbihhY2MsIGFjdGl2YXRpb24pIHtcbiAgICByZXR1cm4gY29tbW9uLmdldE1heChhY2MsIGFjdGl2YXRpb24uc3RvcHgpO1xuICB9LCBhY3Rvck9iai54ICsgYWN0b3JPYmoud2lkdGggLyAyICsgMSk7XG4gIHJldHVybiBbbGVmdCwgcmlnaHRdO1xufTtcbmZ1bmN0aW9uIGFkanVzdExvb3BIZWlnaHRGb3JXcmFwKGxvb3BXaWR0aHMsIG1zZywgcHJlTWFyZ2luLCBwb3N0TWFyZ2luLCBhZGRMb29wRm4pIHtcbiAgYm91bmRzLmJ1bXBWZXJ0aWNhbFBvcyhwcmVNYXJnaW4pO1xuICBsZXQgaGVpZ2h0QWRqdXN0ID0gcG9zdE1hcmdpbjtcbiAgaWYgKG1zZy5pZCAmJiBtc2cubWVzc2FnZSAmJiBsb29wV2lkdGhzW21zZy5pZF0pIHtcbiAgICBjb25zdCBsb29wV2lkdGggPSBsb29wV2lkdGhzW21zZy5pZF0ud2lkdGg7XG4gICAgY29uc3QgdGV4dENvbmYgPSBtZXNzYWdlRm9udChjb25mKTtcbiAgICBtc2cubWVzc2FnZSA9IHV0aWxzLndyYXBMYWJlbChgWyR7bXNnLm1lc3NhZ2V9XWAsIGxvb3BXaWR0aCAtIDIgKiBjb25mLndyYXBQYWRkaW5nLCB0ZXh0Q29uZik7XG4gICAgbXNnLndpZHRoID0gbG9vcFdpZHRoO1xuICAgIG1zZy53cmFwID0gdHJ1ZTtcbiAgICBjb25zdCB0ZXh0RGltcyA9IHV0aWxzLmNhbGN1bGF0ZVRleHREaW1lbnNpb25zKG1zZy5tZXNzYWdlLCB0ZXh0Q29uZik7XG4gICAgY29uc3QgdG90YWxPZmZzZXQgPSBjb21tb24uZ2V0TWF4KHRleHREaW1zLmhlaWdodCwgY29uZi5sYWJlbEJveEhlaWdodCk7XG4gICAgaGVpZ2h0QWRqdXN0ID0gcG9zdE1hcmdpbiArIHRvdGFsT2Zmc2V0O1xuICAgIGxvZy5kZWJ1ZyhgJHt0b3RhbE9mZnNldH0gLSAke21zZy5tZXNzYWdlfWApO1xuICB9XG4gIGFkZExvb3BGbihtc2cpO1xuICBib3VuZHMuYnVtcFZlcnRpY2FsUG9zKGhlaWdodEFkanVzdCk7XG59XG5mdW5jdGlvbiBhZGp1c3RDcmVhdGVkRGVzdHJveWVkRGF0YShtc2csIG1zZ01vZGVsLCBsaW5lU3RhcnRZLCBpbmRleCwgYWN0b3JzLCBjcmVhdGVkQWN0b3JzLCBkZXN0cm95ZWRBY3RvcnMpIHtcbiAgZnVuY3Rpb24gcmVjZWl2ZXJBZGp1c3RtZW50KGFjdG9yLCBhZGp1c3RtZW50KSB7XG4gICAgaWYgKGFjdG9yLnggPCBhY3RvcnNbbXNnLmZyb21dLngpIHtcbiAgICAgIGJvdW5kcy5pbnNlcnQoXG4gICAgICAgIG1zZ01vZGVsLnN0b3B4IC0gYWRqdXN0bWVudCxcbiAgICAgICAgbXNnTW9kZWwuc3RhcnR5LFxuICAgICAgICBtc2dNb2RlbC5zdGFydHgsXG4gICAgICAgIG1zZ01vZGVsLnN0b3B5ICsgYWN0b3IuaGVpZ2h0IC8gMiArIGNvbmYubm90ZU1hcmdpblxuICAgICAgKTtcbiAgICAgIG1zZ01vZGVsLnN0b3B4ID0gbXNnTW9kZWwuc3RvcHggKyBhZGp1c3RtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBib3VuZHMuaW5zZXJ0KFxuICAgICAgICBtc2dNb2RlbC5zdGFydHgsXG4gICAgICAgIG1zZ01vZGVsLnN0YXJ0eSxcbiAgICAgICAgbXNnTW9kZWwuc3RvcHggKyBhZGp1c3RtZW50LFxuICAgICAgICBtc2dNb2RlbC5zdG9weSArIGFjdG9yLmhlaWdodCAvIDIgKyBjb25mLm5vdGVNYXJnaW5cbiAgICAgICk7XG4gICAgICBtc2dNb2RlbC5zdG9weCA9IG1zZ01vZGVsLnN0b3B4IC0gYWRqdXN0bWVudDtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc2VuZGVyQWRqdXN0bWVudChhY3RvciwgYWRqdXN0bWVudCkge1xuICAgIGlmIChhY3Rvci54IDwgYWN0b3JzW21zZy50b10ueCkge1xuICAgICAgYm91bmRzLmluc2VydChcbiAgICAgICAgbXNnTW9kZWwuc3RhcnR4IC0gYWRqdXN0bWVudCxcbiAgICAgICAgbXNnTW9kZWwuc3RhcnR5LFxuICAgICAgICBtc2dNb2RlbC5zdG9weCxcbiAgICAgICAgbXNnTW9kZWwuc3RvcHkgKyBhY3Rvci5oZWlnaHQgLyAyICsgY29uZi5ub3RlTWFyZ2luXG4gICAgICApO1xuICAgICAgbXNnTW9kZWwuc3RhcnR4ID0gbXNnTW9kZWwuc3RhcnR4ICsgYWRqdXN0bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgYm91bmRzLmluc2VydChcbiAgICAgICAgbXNnTW9kZWwuc3RvcHgsXG4gICAgICAgIG1zZ01vZGVsLnN0YXJ0eSxcbiAgICAgICAgbXNnTW9kZWwuc3RhcnR4ICsgYWRqdXN0bWVudCxcbiAgICAgICAgbXNnTW9kZWwuc3RvcHkgKyBhY3Rvci5oZWlnaHQgLyAyICsgY29uZi5ub3RlTWFyZ2luXG4gICAgICApO1xuICAgICAgbXNnTW9kZWwuc3RhcnR4ID0gbXNnTW9kZWwuc3RhcnR4IC0gYWRqdXN0bWVudDtcbiAgICB9XG4gIH1cbiAgaWYgKGNyZWF0ZWRBY3RvcnNbbXNnLnRvXSA9PSBpbmRleCkge1xuICAgIGNvbnN0IGFjdG9yID0gYWN0b3JzW21zZy50b107XG4gICAgY29uc3QgYWRqdXN0bWVudCA9IGFjdG9yLnR5cGUgPT0gXCJhY3RvclwiID8gQUNUT1JfVFlQRV9XSURUSCAvIDIgKyAzIDogYWN0b3Iud2lkdGggLyAyICsgMztcbiAgICByZWNlaXZlckFkanVzdG1lbnQoYWN0b3IsIGFkanVzdG1lbnQpO1xuICAgIGFjdG9yLnN0YXJ0eSA9IGxpbmVTdGFydFkgLSBhY3Rvci5oZWlnaHQgLyAyO1xuICAgIGJvdW5kcy5idW1wVmVydGljYWxQb3MoYWN0b3IuaGVpZ2h0IC8gMik7XG4gIH0gZWxzZSBpZiAoZGVzdHJveWVkQWN0b3JzW21zZy5mcm9tXSA9PSBpbmRleCkge1xuICAgIGNvbnN0IGFjdG9yID0gYWN0b3JzW21zZy5mcm9tXTtcbiAgICBpZiAoY29uZi5taXJyb3JBY3RvcnMpIHtcbiAgICAgIGNvbnN0IGFkanVzdG1lbnQgPSBhY3Rvci50eXBlID09IFwiYWN0b3JcIiA/IEFDVE9SX1RZUEVfV0lEVEggLyAyIDogYWN0b3Iud2lkdGggLyAyO1xuICAgICAgc2VuZGVyQWRqdXN0bWVudChhY3RvciwgYWRqdXN0bWVudCk7XG4gICAgfVxuICAgIGFjdG9yLnN0b3B5ID0gbGluZVN0YXJ0WSAtIGFjdG9yLmhlaWdodCAvIDI7XG4gICAgYm91bmRzLmJ1bXBWZXJ0aWNhbFBvcyhhY3Rvci5oZWlnaHQgLyAyKTtcbiAgfSBlbHNlIGlmIChkZXN0cm95ZWRBY3RvcnNbbXNnLnRvXSA9PSBpbmRleCkge1xuICAgIGNvbnN0IGFjdG9yID0gYWN0b3JzW21zZy50b107XG4gICAgaWYgKGNvbmYubWlycm9yQWN0b3JzKSB7XG4gICAgICBjb25zdCBhZGp1c3RtZW50ID0gYWN0b3IudHlwZSA9PSBcImFjdG9yXCIgPyBBQ1RPUl9UWVBFX1dJRFRIIC8gMiArIDMgOiBhY3Rvci53aWR0aCAvIDIgKyAzO1xuICAgICAgcmVjZWl2ZXJBZGp1c3RtZW50KGFjdG9yLCBhZGp1c3RtZW50KTtcbiAgICB9XG4gICAgYWN0b3Iuc3RvcHkgPSBsaW5lU3RhcnRZIC0gYWN0b3IuaGVpZ2h0IC8gMjtcbiAgICBib3VuZHMuYnVtcFZlcnRpY2FsUG9zKGFjdG9yLmhlaWdodCAvIDIpO1xuICB9XG59XG5jb25zdCBkcmF3ID0gYXN5bmMgZnVuY3Rpb24oX3RleHQsIGlkLCBfdmVyc2lvbiwgZGlhZ09iaikge1xuICBjb25zdCB7IHNlY3VyaXR5TGV2ZWwsIHNlcXVlbmNlIH0gPSBnZXRDb25maWcoKTtcbiAgY29uZiA9IHNlcXVlbmNlO1xuICBsZXQgc2FuZGJveEVsZW1lbnQ7XG4gIGlmIChzZWN1cml0eUxldmVsID09PSBcInNhbmRib3hcIikge1xuICAgIHNhbmRib3hFbGVtZW50ID0gc2VsZWN0KFwiI2lcIiArIGlkKTtcbiAgfVxuICBjb25zdCByb290ID0gc2VjdXJpdHlMZXZlbCA9PT0gXCJzYW5kYm94XCIgPyBzZWxlY3Qoc2FuZGJveEVsZW1lbnQubm9kZXMoKVswXS5jb250ZW50RG9jdW1lbnQuYm9keSkgOiBzZWxlY3QoXCJib2R5XCIpO1xuICBjb25zdCBkb2MgPSBzZWN1cml0eUxldmVsID09PSBcInNhbmRib3hcIiA/IHNhbmRib3hFbGVtZW50Lm5vZGVzKClbMF0uY29udGVudERvY3VtZW50IDogZG9jdW1lbnQ7XG4gIGJvdW5kcy5pbml0KCk7XG4gIGxvZy5kZWJ1ZyhkaWFnT2JqLmRiKTtcbiAgY29uc3QgZGlhZ3JhbTIgPSBzZWN1cml0eUxldmVsID09PSBcInNhbmRib3hcIiA/IHJvb3Quc2VsZWN0KGBbaWQ9XCIke2lkfVwiXWApIDogc2VsZWN0KGBbaWQ9XCIke2lkfVwiXWApO1xuICBjb25zdCBhY3RvcnMgPSBkaWFnT2JqLmRiLmdldEFjdG9ycygpO1xuICBjb25zdCBjcmVhdGVkQWN0b3JzID0gZGlhZ09iai5kYi5nZXRDcmVhdGVkQWN0b3JzKCk7XG4gIGNvbnN0IGRlc3Ryb3llZEFjdG9ycyA9IGRpYWdPYmouZGIuZ2V0RGVzdHJveWVkQWN0b3JzKCk7XG4gIGNvbnN0IGJveGVzID0gZGlhZ09iai5kYi5nZXRCb3hlcygpO1xuICBsZXQgYWN0b3JLZXlzID0gZGlhZ09iai5kYi5nZXRBY3RvcktleXMoKTtcbiAgY29uc3QgbWVzc2FnZXMgPSBkaWFnT2JqLmRiLmdldE1lc3NhZ2VzKCk7XG4gIGNvbnN0IHRpdGxlID0gZGlhZ09iai5kYi5nZXREaWFncmFtVGl0bGUoKTtcbiAgY29uc3QgaGFzQm94ZXMgPSBkaWFnT2JqLmRiLmhhc0F0TGVhc3RPbmVCb3goKTtcbiAgY29uc3QgaGFzQm94VGl0bGVzID0gZGlhZ09iai5kYi5oYXNBdExlYXN0T25lQm94V2l0aFRpdGxlKCk7XG4gIGNvbnN0IG1heE1lc3NhZ2VXaWR0aFBlckFjdG9yID0gYXdhaXQgZ2V0TWF4TWVzc2FnZVdpZHRoUGVyQWN0b3IoYWN0b3JzLCBtZXNzYWdlcywgZGlhZ09iaik7XG4gIGNvbmYuaGVpZ2h0ID0gYXdhaXQgY2FsY3VsYXRlQWN0b3JNYXJnaW5zKGFjdG9ycywgbWF4TWVzc2FnZVdpZHRoUGVyQWN0b3IsIGJveGVzKTtcbiAgc3ZnRHJhdy5pbnNlcnRDb21wdXRlckljb24oZGlhZ3JhbTIpO1xuICBzdmdEcmF3Lmluc2VydERhdGFiYXNlSWNvbihkaWFncmFtMik7XG4gIHN2Z0RyYXcuaW5zZXJ0Q2xvY2tJY29uKGRpYWdyYW0yKTtcbiAgaWYgKGhhc0JveGVzKSB7XG4gICAgYm91bmRzLmJ1bXBWZXJ0aWNhbFBvcyhjb25mLmJveE1hcmdpbik7XG4gICAgaWYgKGhhc0JveFRpdGxlcykge1xuICAgICAgYm91bmRzLmJ1bXBWZXJ0aWNhbFBvcyhib3hlc1swXS50ZXh0TWF4SGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgaWYgKGNvbmYuaGlkZVVudXNlZFBhcnRpY2lwYW50cyA9PT0gdHJ1ZSkge1xuICAgIGNvbnN0IG5ld0FjdG9ycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gICAgbWVzc2FnZXMuZm9yRWFjaCgobWVzc2FnZSkgPT4ge1xuICAgICAgbmV3QWN0b3JzLmFkZChtZXNzYWdlLmZyb20pO1xuICAgICAgbmV3QWN0b3JzLmFkZChtZXNzYWdlLnRvKTtcbiAgICB9KTtcbiAgICBhY3RvcktleXMgPSBhY3RvcktleXMuZmlsdGVyKChhY3RvcktleSkgPT4gbmV3QWN0b3JzLmhhcyhhY3RvcktleSkpO1xuICB9XG4gIGF3YWl0IGFkZEFjdG9yUmVuZGVyaW5nRGF0YShkaWFncmFtMiwgYWN0b3JzLCBjcmVhdGVkQWN0b3JzLCBhY3RvcktleXMsIDAsIG1lc3NhZ2VzLCBmYWxzZSk7XG4gIGNvbnN0IGxvb3BXaWR0aHMgPSBhd2FpdCBjYWxjdWxhdGVMb29wQm91bmRzKG1lc3NhZ2VzLCBhY3RvcnMsIG1heE1lc3NhZ2VXaWR0aFBlckFjdG9yLCBkaWFnT2JqKTtcbiAgc3ZnRHJhdy5pbnNlcnRBcnJvd0hlYWQoZGlhZ3JhbTIpO1xuICBzdmdEcmF3Lmluc2VydEFycm93Q3Jvc3NIZWFkKGRpYWdyYW0yKTtcbiAgc3ZnRHJhdy5pbnNlcnRBcnJvd0ZpbGxlZEhlYWQoZGlhZ3JhbTIpO1xuICBzdmdEcmF3Lmluc2VydFNlcXVlbmNlTnVtYmVyKGRpYWdyYW0yKTtcbiAgZnVuY3Rpb24gYWN0aXZlRW5kKG1zZywgdmVydGljYWxQb3MpIHtcbiAgICBjb25zdCBhY3RpdmF0aW9uRGF0YSA9IGJvdW5kcy5lbmRBY3RpdmF0aW9uKG1zZyk7XG4gICAgaWYgKGFjdGl2YXRpb25EYXRhLnN0YXJ0eSArIDE4ID4gdmVydGljYWxQb3MpIHtcbiAgICAgIGFjdGl2YXRpb25EYXRhLnN0YXJ0eSA9IHZlcnRpY2FsUG9zIC0gNjtcbiAgICAgIHZlcnRpY2FsUG9zICs9IDEyO1xuICAgIH1cbiAgICBzdmdEcmF3LmRyYXdBY3RpdmF0aW9uKFxuICAgICAgZGlhZ3JhbTIsXG4gICAgICBhY3RpdmF0aW9uRGF0YSxcbiAgICAgIHZlcnRpY2FsUG9zLFxuICAgICAgY29uZixcbiAgICAgIGFjdG9yQWN0aXZhdGlvbnMobXNnLmZyb20uYWN0b3IpLmxlbmd0aFxuICAgICk7XG4gICAgYm91bmRzLmluc2VydChhY3RpdmF0aW9uRGF0YS5zdGFydHgsIHZlcnRpY2FsUG9zIC0gMTAsIGFjdGl2YXRpb25EYXRhLnN0b3B4LCB2ZXJ0aWNhbFBvcyk7XG4gIH1cbiAgbGV0IHNlcXVlbmNlSW5kZXggPSAxO1xuICBsZXQgc2VxdWVuY2VJbmRleFN0ZXAgPSAxO1xuICBjb25zdCBtZXNzYWdlc1RvRHJhdyA9IFtdO1xuICBjb25zdCBiYWNrZ3JvdW5kcyA9IFtdO1xuICBsZXQgaW5kZXggPSAwO1xuICBmb3IgKGNvbnN0IG1zZyBvZiBtZXNzYWdlcykge1xuICAgIGxldCBsb29wTW9kZWwsIG5vdGVNb2RlbCwgbXNnTW9kZWw7XG4gICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgY2FzZSBkaWFnT2JqLmRiLkxJTkVUWVBFLk5PVEU6XG4gICAgICAgIGJvdW5kcy5yZXNldFZlcnRpY2FsUG9zKCk7XG4gICAgICAgIG5vdGVNb2RlbCA9IG1zZy5ub3RlTW9kZWw7XG4gICAgICAgIGF3YWl0IGRyYXdOb3RlKGRpYWdyYW0yLCBub3RlTW9kZWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5MSU5FVFlQRS5BQ1RJVkVfU1RBUlQ6XG4gICAgICAgIGJvdW5kcy5uZXdBY3RpdmF0aW9uKG1zZywgZGlhZ3JhbTIsIGFjdG9ycyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBkaWFnT2JqLmRiLkxJTkVUWVBFLkFDVElWRV9FTkQ6XG4gICAgICAgIGFjdGl2ZUVuZChtc2csIGJvdW5kcy5nZXRWZXJ0aWNhbFBvcygpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGRpYWdPYmouZGIuTElORVRZUEUuTE9PUF9TVEFSVDpcbiAgICAgICAgYWRqdXN0TG9vcEhlaWdodEZvcldyYXAoXG4gICAgICAgICAgbG9vcFdpZHRocyxcbiAgICAgICAgICBtc2csXG4gICAgICAgICAgY29uZi5ib3hNYXJnaW4sXG4gICAgICAgICAgY29uZi5ib3hNYXJnaW4gKyBjb25mLmJveFRleHRNYXJnaW4sXG4gICAgICAgICAgKG1lc3NhZ2UpID0+IGJvdW5kcy5uZXdMb29wKG1lc3NhZ2UpXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBkaWFnT2JqLmRiLkxJTkVUWVBFLkxPT1BfRU5EOlxuICAgICAgICBsb29wTW9kZWwgPSBib3VuZHMuZW5kTG9vcCgpO1xuICAgICAgICBhd2FpdCBzdmdEcmF3LmRyYXdMb29wKGRpYWdyYW0yLCBsb29wTW9kZWwsIFwibG9vcFwiLCBjb25mKTtcbiAgICAgICAgYm91bmRzLmJ1bXBWZXJ0aWNhbFBvcyhsb29wTW9kZWwuc3RvcHkgLSBib3VuZHMuZ2V0VmVydGljYWxQb3MoKSk7XG4gICAgICAgIGJvdW5kcy5tb2RlbHMuYWRkTG9vcChsb29wTW9kZWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5MSU5FVFlQRS5SRUNUX1NUQVJUOlxuICAgICAgICBhZGp1c3RMb29wSGVpZ2h0Rm9yV3JhcChcbiAgICAgICAgICBsb29wV2lkdGhzLFxuICAgICAgICAgIG1zZyxcbiAgICAgICAgICBjb25mLmJveE1hcmdpbixcbiAgICAgICAgICBjb25mLmJveE1hcmdpbixcbiAgICAgICAgICAobWVzc2FnZSkgPT4gYm91bmRzLm5ld0xvb3Aodm9pZCAwLCBtZXNzYWdlLm1lc3NhZ2UpXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBkaWFnT2JqLmRiLkxJTkVUWVBFLlJFQ1RfRU5EOlxuICAgICAgICBsb29wTW9kZWwgPSBib3VuZHMuZW5kTG9vcCgpO1xuICAgICAgICBiYWNrZ3JvdW5kcy5wdXNoKGxvb3BNb2RlbCk7XG4gICAgICAgIGJvdW5kcy5tb2RlbHMuYWRkTG9vcChsb29wTW9kZWwpO1xuICAgICAgICBib3VuZHMuYnVtcFZlcnRpY2FsUG9zKGxvb3BNb2RlbC5zdG9weSAtIGJvdW5kcy5nZXRWZXJ0aWNhbFBvcygpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGRpYWdPYmouZGIuTElORVRZUEUuT1BUX1NUQVJUOlxuICAgICAgICBhZGp1c3RMb29wSGVpZ2h0Rm9yV3JhcChcbiAgICAgICAgICBsb29wV2lkdGhzLFxuICAgICAgICAgIG1zZyxcbiAgICAgICAgICBjb25mLmJveE1hcmdpbixcbiAgICAgICAgICBjb25mLmJveE1hcmdpbiArIGNvbmYuYm94VGV4dE1hcmdpbixcbiAgICAgICAgICAobWVzc2FnZSkgPT4gYm91bmRzLm5ld0xvb3AobWVzc2FnZSlcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGRpYWdPYmouZGIuTElORVRZUEUuT1BUX0VORDpcbiAgICAgICAgbG9vcE1vZGVsID0gYm91bmRzLmVuZExvb3AoKTtcbiAgICAgICAgYXdhaXQgc3ZnRHJhdy5kcmF3TG9vcChkaWFncmFtMiwgbG9vcE1vZGVsLCBcIm9wdFwiLCBjb25mKTtcbiAgICAgICAgYm91bmRzLmJ1bXBWZXJ0aWNhbFBvcyhsb29wTW9kZWwuc3RvcHkgLSBib3VuZHMuZ2V0VmVydGljYWxQb3MoKSk7XG4gICAgICAgIGJvdW5kcy5tb2RlbHMuYWRkTG9vcChsb29wTW9kZWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5MSU5FVFlQRS5BTFRfU1RBUlQ6XG4gICAgICAgIGFkanVzdExvb3BIZWlnaHRGb3JXcmFwKFxuICAgICAgICAgIGxvb3BXaWR0aHMsXG4gICAgICAgICAgbXNnLFxuICAgICAgICAgIGNvbmYuYm94TWFyZ2luLFxuICAgICAgICAgIGNvbmYuYm94TWFyZ2luICsgY29uZi5ib3hUZXh0TWFyZ2luLFxuICAgICAgICAgIChtZXNzYWdlKSA9PiBib3VuZHMubmV3TG9vcChtZXNzYWdlKVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5MSU5FVFlQRS5BTFRfRUxTRTpcbiAgICAgICAgYWRqdXN0TG9vcEhlaWdodEZvcldyYXAoXG4gICAgICAgICAgbG9vcFdpZHRocyxcbiAgICAgICAgICBtc2csXG4gICAgICAgICAgY29uZi5ib3hNYXJnaW4gKyBjb25mLmJveFRleHRNYXJnaW4sXG4gICAgICAgICAgY29uZi5ib3hNYXJnaW4sXG4gICAgICAgICAgKG1lc3NhZ2UpID0+IGJvdW5kcy5hZGRTZWN0aW9uVG9Mb29wKG1lc3NhZ2UpXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBkaWFnT2JqLmRiLkxJTkVUWVBFLkFMVF9FTkQ6XG4gICAgICAgIGxvb3BNb2RlbCA9IGJvdW5kcy5lbmRMb29wKCk7XG4gICAgICAgIGF3YWl0IHN2Z0RyYXcuZHJhd0xvb3AoZGlhZ3JhbTIsIGxvb3BNb2RlbCwgXCJhbHRcIiwgY29uZik7XG4gICAgICAgIGJvdW5kcy5idW1wVmVydGljYWxQb3MobG9vcE1vZGVsLnN0b3B5IC0gYm91bmRzLmdldFZlcnRpY2FsUG9zKCkpO1xuICAgICAgICBib3VuZHMubW9kZWxzLmFkZExvb3AobG9vcE1vZGVsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGRpYWdPYmouZGIuTElORVRZUEUuUEFSX1NUQVJUOlxuICAgICAgY2FzZSBkaWFnT2JqLmRiLkxJTkVUWVBFLlBBUl9PVkVSX1NUQVJUOlxuICAgICAgICBhZGp1c3RMb29wSGVpZ2h0Rm9yV3JhcChcbiAgICAgICAgICBsb29wV2lkdGhzLFxuICAgICAgICAgIG1zZyxcbiAgICAgICAgICBjb25mLmJveE1hcmdpbixcbiAgICAgICAgICBjb25mLmJveE1hcmdpbiArIGNvbmYuYm94VGV4dE1hcmdpbixcbiAgICAgICAgICAobWVzc2FnZSkgPT4gYm91bmRzLm5ld0xvb3AobWVzc2FnZSlcbiAgICAgICAgKTtcbiAgICAgICAgYm91bmRzLnNhdmVWZXJ0aWNhbFBvcygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5MSU5FVFlQRS5QQVJfQU5EOlxuICAgICAgICBhZGp1c3RMb29wSGVpZ2h0Rm9yV3JhcChcbiAgICAgICAgICBsb29wV2lkdGhzLFxuICAgICAgICAgIG1zZyxcbiAgICAgICAgICBjb25mLmJveE1hcmdpbiArIGNvbmYuYm94VGV4dE1hcmdpbixcbiAgICAgICAgICBjb25mLmJveE1hcmdpbixcbiAgICAgICAgICAobWVzc2FnZSkgPT4gYm91bmRzLmFkZFNlY3Rpb25Ub0xvb3AobWVzc2FnZSlcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGRpYWdPYmouZGIuTElORVRZUEUuUEFSX0VORDpcbiAgICAgICAgbG9vcE1vZGVsID0gYm91bmRzLmVuZExvb3AoKTtcbiAgICAgICAgYXdhaXQgc3ZnRHJhdy5kcmF3TG9vcChkaWFncmFtMiwgbG9vcE1vZGVsLCBcInBhclwiLCBjb25mKTtcbiAgICAgICAgYm91bmRzLmJ1bXBWZXJ0aWNhbFBvcyhsb29wTW9kZWwuc3RvcHkgLSBib3VuZHMuZ2V0VmVydGljYWxQb3MoKSk7XG4gICAgICAgIGJvdW5kcy5tb2RlbHMuYWRkTG9vcChsb29wTW9kZWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5MSU5FVFlQRS5BVVRPTlVNQkVSOlxuICAgICAgICBzZXF1ZW5jZUluZGV4ID0gbXNnLm1lc3NhZ2Uuc3RhcnQgfHwgc2VxdWVuY2VJbmRleDtcbiAgICAgICAgc2VxdWVuY2VJbmRleFN0ZXAgPSBtc2cubWVzc2FnZS5zdGVwIHx8IHNlcXVlbmNlSW5kZXhTdGVwO1xuICAgICAgICBpZiAobXNnLm1lc3NhZ2UudmlzaWJsZSkge1xuICAgICAgICAgIGRpYWdPYmouZGIuZW5hYmxlU2VxdWVuY2VOdW1iZXJzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlhZ09iai5kYi5kaXNhYmxlU2VxdWVuY2VOdW1iZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGRpYWdPYmouZGIuTElORVRZUEUuQ1JJVElDQUxfU1RBUlQ6XG4gICAgICAgIGFkanVzdExvb3BIZWlnaHRGb3JXcmFwKFxuICAgICAgICAgIGxvb3BXaWR0aHMsXG4gICAgICAgICAgbXNnLFxuICAgICAgICAgIGNvbmYuYm94TWFyZ2luLFxuICAgICAgICAgIGNvbmYuYm94TWFyZ2luICsgY29uZi5ib3hUZXh0TWFyZ2luLFxuICAgICAgICAgIChtZXNzYWdlKSA9PiBib3VuZHMubmV3TG9vcChtZXNzYWdlKVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5MSU5FVFlQRS5DUklUSUNBTF9PUFRJT046XG4gICAgICAgIGFkanVzdExvb3BIZWlnaHRGb3JXcmFwKFxuICAgICAgICAgIGxvb3BXaWR0aHMsXG4gICAgICAgICAgbXNnLFxuICAgICAgICAgIGNvbmYuYm94TWFyZ2luICsgY29uZi5ib3hUZXh0TWFyZ2luLFxuICAgICAgICAgIGNvbmYuYm94TWFyZ2luLFxuICAgICAgICAgIChtZXNzYWdlKSA9PiBib3VuZHMuYWRkU2VjdGlvblRvTG9vcChtZXNzYWdlKVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5MSU5FVFlQRS5DUklUSUNBTF9FTkQ6XG4gICAgICAgIGxvb3BNb2RlbCA9IGJvdW5kcy5lbmRMb29wKCk7XG4gICAgICAgIGF3YWl0IHN2Z0RyYXcuZHJhd0xvb3AoZGlhZ3JhbTIsIGxvb3BNb2RlbCwgXCJjcml0aWNhbFwiLCBjb25mKTtcbiAgICAgICAgYm91bmRzLmJ1bXBWZXJ0aWNhbFBvcyhsb29wTW9kZWwuc3RvcHkgLSBib3VuZHMuZ2V0VmVydGljYWxQb3MoKSk7XG4gICAgICAgIGJvdW5kcy5tb2RlbHMuYWRkTG9vcChsb29wTW9kZWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5MSU5FVFlQRS5CUkVBS19TVEFSVDpcbiAgICAgICAgYWRqdXN0TG9vcEhlaWdodEZvcldyYXAoXG4gICAgICAgICAgbG9vcFdpZHRocyxcbiAgICAgICAgICBtc2csXG4gICAgICAgICAgY29uZi5ib3hNYXJnaW4sXG4gICAgICAgICAgY29uZi5ib3hNYXJnaW4gKyBjb25mLmJveFRleHRNYXJnaW4sXG4gICAgICAgICAgKG1lc3NhZ2UpID0+IGJvdW5kcy5uZXdMb29wKG1lc3NhZ2UpXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBkaWFnT2JqLmRiLkxJTkVUWVBFLkJSRUFLX0VORDpcbiAgICAgICAgbG9vcE1vZGVsID0gYm91bmRzLmVuZExvb3AoKTtcbiAgICAgICAgYXdhaXQgc3ZnRHJhdy5kcmF3TG9vcChkaWFncmFtMiwgbG9vcE1vZGVsLCBcImJyZWFrXCIsIGNvbmYpO1xuICAgICAgICBib3VuZHMuYnVtcFZlcnRpY2FsUG9zKGxvb3BNb2RlbC5zdG9weSAtIGJvdW5kcy5nZXRWZXJ0aWNhbFBvcygpKTtcbiAgICAgICAgYm91bmRzLm1vZGVscy5hZGRMb29wKGxvb3BNb2RlbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBtc2dNb2RlbCA9IG1zZy5tc2dNb2RlbDtcbiAgICAgICAgICBtc2dNb2RlbC5zdGFydHkgPSBib3VuZHMuZ2V0VmVydGljYWxQb3MoKTtcbiAgICAgICAgICBtc2dNb2RlbC5zZXF1ZW5jZUluZGV4ID0gc2VxdWVuY2VJbmRleDtcbiAgICAgICAgICBtc2dNb2RlbC5zZXF1ZW5jZVZpc2libGUgPSBkaWFnT2JqLmRiLnNob3dTZXF1ZW5jZU51bWJlcnMoKTtcbiAgICAgICAgICBjb25zdCBsaW5lU3RhcnRZID0gYXdhaXQgYm91bmRNZXNzYWdlKGRpYWdyYW0yLCBtc2dNb2RlbCk7XG4gICAgICAgICAgYWRqdXN0Q3JlYXRlZERlc3Ryb3llZERhdGEoXG4gICAgICAgICAgICBtc2csXG4gICAgICAgICAgICBtc2dNb2RlbCxcbiAgICAgICAgICAgIGxpbmVTdGFydFksXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIGFjdG9ycyxcbiAgICAgICAgICAgIGNyZWF0ZWRBY3RvcnMsXG4gICAgICAgICAgICBkZXN0cm95ZWRBY3RvcnNcbiAgICAgICAgICApO1xuICAgICAgICAgIG1lc3NhZ2VzVG9EcmF3LnB1c2goeyBtZXNzYWdlTW9kZWw6IG1zZ01vZGVsLCBsaW5lU3RhcnRZIH0pO1xuICAgICAgICAgIGJvdW5kcy5tb2RlbHMuYWRkTWVzc2FnZShtc2dNb2RlbCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsb2cuZXJyb3IoXCJlcnJvciB3aGlsZSBkcmF3aW5nIG1lc3NhZ2VcIiwgZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKFtcbiAgICAgIGRpYWdPYmouZGIuTElORVRZUEUuU09MSURfT1BFTixcbiAgICAgIGRpYWdPYmouZGIuTElORVRZUEUuRE9UVEVEX09QRU4sXG4gICAgICBkaWFnT2JqLmRiLkxJTkVUWVBFLlNPTElELFxuICAgICAgZGlhZ09iai5kYi5MSU5FVFlQRS5ET1RURUQsXG4gICAgICBkaWFnT2JqLmRiLkxJTkVUWVBFLlNPTElEX0NST1NTLFxuICAgICAgZGlhZ09iai5kYi5MSU5FVFlQRS5ET1RURURfQ1JPU1MsXG4gICAgICBkaWFnT2JqLmRiLkxJTkVUWVBFLlNPTElEX1BPSU5ULFxuICAgICAgZGlhZ09iai5kYi5MSU5FVFlQRS5ET1RURURfUE9JTlRcbiAgICBdLmluY2x1ZGVzKG1zZy50eXBlKSkge1xuICAgICAgc2VxdWVuY2VJbmRleCA9IHNlcXVlbmNlSW5kZXggKyBzZXF1ZW5jZUluZGV4U3RlcDtcbiAgICB9XG4gICAgaW5kZXgrKztcbiAgfVxuICBsb2cuZGVidWcoXCJjcmVhdGVkQWN0b3JzXCIsIGNyZWF0ZWRBY3RvcnMpO1xuICBsb2cuZGVidWcoXCJkZXN0cm95ZWRBY3RvcnNcIiwgZGVzdHJveWVkQWN0b3JzKTtcbiAgYXdhaXQgZHJhd0FjdG9ycyhkaWFncmFtMiwgYWN0b3JzLCBhY3RvcktleXMsIGZhbHNlKTtcbiAgZm9yIChjb25zdCBlIG9mIG1lc3NhZ2VzVG9EcmF3KSB7XG4gICAgYXdhaXQgZHJhd01lc3NhZ2UoZGlhZ3JhbTIsIGUubWVzc2FnZU1vZGVsLCBlLmxpbmVTdGFydFksIGRpYWdPYmopO1xuICB9XG4gIGlmIChjb25mLm1pcnJvckFjdG9ycykge1xuICAgIGF3YWl0IGRyYXdBY3RvcnMoZGlhZ3JhbTIsIGFjdG9ycywgYWN0b3JLZXlzLCB0cnVlKTtcbiAgfVxuICBiYWNrZ3JvdW5kcy5mb3JFYWNoKChlKSA9PiBzdmdEcmF3LmRyYXdCYWNrZ3JvdW5kUmVjdChkaWFncmFtMiwgZSkpO1xuICBmaXhMaWZlTGluZUhlaWdodHMoZGlhZ3JhbTIsIGFjdG9ycywgYWN0b3JLZXlzLCBjb25mKTtcbiAgZm9yIChjb25zdCBib3gyIG9mIGJvdW5kcy5tb2RlbHMuYm94ZXMpIHtcbiAgICBib3gyLmhlaWdodCA9IGJvdW5kcy5nZXRWZXJ0aWNhbFBvcygpIC0gYm94Mi55O1xuICAgIGJvdW5kcy5pbnNlcnQoYm94Mi54LCBib3gyLnksIGJveDIueCArIGJveDIud2lkdGgsIGJveDIuaGVpZ2h0KTtcbiAgICBib3gyLnN0YXJ0eCA9IGJveDIueDtcbiAgICBib3gyLnN0YXJ0eSA9IGJveDIueTtcbiAgICBib3gyLnN0b3B4ID0gYm94Mi5zdGFydHggKyBib3gyLndpZHRoO1xuICAgIGJveDIuc3RvcHkgPSBib3gyLnN0YXJ0eSArIGJveDIuaGVpZ2h0O1xuICAgIGJveDIuc3Ryb2tlID0gXCJyZ2IoMCwwLDAsIDAuNSlcIjtcbiAgICBhd2FpdCBzdmdEcmF3LmRyYXdCb3goZGlhZ3JhbTIsIGJveDIsIGNvbmYpO1xuICB9XG4gIGlmIChoYXNCb3hlcykge1xuICAgIGJvdW5kcy5idW1wVmVydGljYWxQb3MoY29uZi5ib3hNYXJnaW4pO1xuICB9XG4gIGNvbnN0IHJlcXVpcmVkQm94U2l6ZSA9IGRyYXdBY3RvcnNQb3B1cChkaWFncmFtMiwgYWN0b3JzLCBhY3RvcktleXMsIGRvYyk7XG4gIGNvbnN0IHsgYm91bmRzOiBib3ggfSA9IGJvdW5kcy5nZXRCb3VuZHMoKTtcbiAgbGV0IGJveEhlaWdodCA9IGJveC5zdG9weSAtIGJveC5zdGFydHk7XG4gIGlmIChib3hIZWlnaHQgPCByZXF1aXJlZEJveFNpemUubWF4SGVpZ2h0KSB7XG4gICAgYm94SGVpZ2h0ID0gcmVxdWlyZWRCb3hTaXplLm1heEhlaWdodDtcbiAgfVxuICBsZXQgaGVpZ2h0ID0gYm94SGVpZ2h0ICsgMiAqIGNvbmYuZGlhZ3JhbU1hcmdpblk7XG4gIGlmIChjb25mLm1pcnJvckFjdG9ycykge1xuICAgIGhlaWdodCA9IGhlaWdodCAtIGNvbmYuYm94TWFyZ2luICsgY29uZi5ib3R0b21NYXJnaW5BZGo7XG4gIH1cbiAgbGV0IGJveFdpZHRoID0gYm94LnN0b3B4IC0gYm94LnN0YXJ0eDtcbiAgaWYgKGJveFdpZHRoIDwgcmVxdWlyZWRCb3hTaXplLm1heFdpZHRoKSB7XG4gICAgYm94V2lkdGggPSByZXF1aXJlZEJveFNpemUubWF4V2lkdGg7XG4gIH1cbiAgY29uc3Qgd2lkdGggPSBib3hXaWR0aCArIDIgKiBjb25mLmRpYWdyYW1NYXJnaW5YO1xuICBpZiAodGl0bGUpIHtcbiAgICBkaWFncmFtMi5hcHBlbmQoXCJ0ZXh0XCIpLnRleHQodGl0bGUpLmF0dHIoXCJ4XCIsIChib3guc3RvcHggLSBib3guc3RhcnR4KSAvIDIgLSAyICogY29uZi5kaWFncmFtTWFyZ2luWCkuYXR0cihcInlcIiwgLTI1KTtcbiAgfVxuICBjb25maWd1cmVTdmdTaXplKGRpYWdyYW0yLCBoZWlnaHQsIHdpZHRoLCBjb25mLnVzZU1heFdpZHRoKTtcbiAgY29uc3QgZXh0cmFWZXJ0Rm9yVGl0bGUgPSB0aXRsZSA/IDQwIDogMDtcbiAgZGlhZ3JhbTIuYXR0cihcbiAgICBcInZpZXdCb3hcIixcbiAgICBib3guc3RhcnR4IC0gY29uZi5kaWFncmFtTWFyZ2luWCArIFwiIC1cIiArIChjb25mLmRpYWdyYW1NYXJnaW5ZICsgZXh0cmFWZXJ0Rm9yVGl0bGUpICsgXCIgXCIgKyB3aWR0aCArIFwiIFwiICsgKGhlaWdodCArIGV4dHJhVmVydEZvclRpdGxlKVxuICApO1xuICBsb2cuZGVidWcoYG1vZGVsczpgLCBib3VuZHMubW9kZWxzKTtcbn07XG5hc3luYyBmdW5jdGlvbiBnZXRNYXhNZXNzYWdlV2lkdGhQZXJBY3RvcihhY3RvcnMsIG1lc3NhZ2VzLCBkaWFnT2JqKSB7XG4gIGNvbnN0IG1heE1lc3NhZ2VXaWR0aFBlckFjdG9yID0ge307XG4gIGZvciAoY29uc3QgbXNnIG9mIG1lc3NhZ2VzKSB7XG4gICAgaWYgKGFjdG9yc1ttc2cudG9dICYmIGFjdG9yc1ttc2cuZnJvbV0pIHtcbiAgICAgIGNvbnN0IGFjdG9yID0gYWN0b3JzW21zZy50b107XG4gICAgICBpZiAobXNnLnBsYWNlbWVudCA9PT0gZGlhZ09iai5kYi5QTEFDRU1FTlQuTEVGVE9GICYmICFhY3Rvci5wcmV2QWN0b3IpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAobXNnLnBsYWNlbWVudCA9PT0gZGlhZ09iai5kYi5QTEFDRU1FTlQuUklHSFRPRiAmJiAhYWN0b3IubmV4dEFjdG9yKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNOb3RlID0gbXNnLnBsYWNlbWVudCAhPT0gdm9pZCAwO1xuICAgICAgY29uc3QgaXNNZXNzYWdlID0gIWlzTm90ZTtcbiAgICAgIGNvbnN0IHRleHRGb250ID0gaXNOb3RlID8gbm90ZUZvbnQoY29uZikgOiBtZXNzYWdlRm9udChjb25mKTtcbiAgICAgIGNvbnN0IHdyYXBwZWRNZXNzYWdlID0gbXNnLndyYXAgPyB1dGlscy53cmFwTGFiZWwobXNnLm1lc3NhZ2UsIGNvbmYud2lkdGggLSAyICogY29uZi53cmFwUGFkZGluZywgdGV4dEZvbnQpIDogbXNnLm1lc3NhZ2U7XG4gICAgICBjb25zdCBtZXNzYWdlRGltZW5zaW9ucyA9IGhhc0thdGV4KHdyYXBwZWRNZXNzYWdlKSA/IGF3YWl0IGNhbGN1bGF0ZU1hdGhNTERpbWVuc2lvbnMobXNnLm1lc3NhZ2UsIGdldENvbmZpZygpKSA6IHV0aWxzLmNhbGN1bGF0ZVRleHREaW1lbnNpb25zKHdyYXBwZWRNZXNzYWdlLCB0ZXh0Rm9udCk7XG4gICAgICBjb25zdCBtZXNzYWdlV2lkdGggPSBtZXNzYWdlRGltZW5zaW9ucy53aWR0aCArIDIgKiBjb25mLndyYXBQYWRkaW5nO1xuICAgICAgaWYgKGlzTWVzc2FnZSAmJiBtc2cuZnJvbSA9PT0gYWN0b3IubmV4dEFjdG9yKSB7XG4gICAgICAgIG1heE1lc3NhZ2VXaWR0aFBlckFjdG9yW21zZy50b10gPSBjb21tb24uZ2V0TWF4KFxuICAgICAgICAgIG1heE1lc3NhZ2VXaWR0aFBlckFjdG9yW21zZy50b10gfHwgMCxcbiAgICAgICAgICBtZXNzYWdlV2lkdGhcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNNZXNzYWdlICYmIG1zZy5mcm9tID09PSBhY3Rvci5wcmV2QWN0b3IpIHtcbiAgICAgICAgbWF4TWVzc2FnZVdpZHRoUGVyQWN0b3JbbXNnLmZyb21dID0gY29tbW9uLmdldE1heChcbiAgICAgICAgICBtYXhNZXNzYWdlV2lkdGhQZXJBY3Rvclttc2cuZnJvbV0gfHwgMCxcbiAgICAgICAgICBtZXNzYWdlV2lkdGhcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNNZXNzYWdlICYmIG1zZy5mcm9tID09PSBtc2cudG8pIHtcbiAgICAgICAgbWF4TWVzc2FnZVdpZHRoUGVyQWN0b3JbbXNnLmZyb21dID0gY29tbW9uLmdldE1heChcbiAgICAgICAgICBtYXhNZXNzYWdlV2lkdGhQZXJBY3Rvclttc2cuZnJvbV0gfHwgMCxcbiAgICAgICAgICBtZXNzYWdlV2lkdGggLyAyXG4gICAgICAgICk7XG4gICAgICAgIG1heE1lc3NhZ2VXaWR0aFBlckFjdG9yW21zZy50b10gPSBjb21tb24uZ2V0TWF4KFxuICAgICAgICAgIG1heE1lc3NhZ2VXaWR0aFBlckFjdG9yW21zZy50b10gfHwgMCxcbiAgICAgICAgICBtZXNzYWdlV2lkdGggLyAyXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKG1zZy5wbGFjZW1lbnQgPT09IGRpYWdPYmouZGIuUExBQ0VNRU5ULlJJR0hUT0YpIHtcbiAgICAgICAgbWF4TWVzc2FnZVdpZHRoUGVyQWN0b3JbbXNnLmZyb21dID0gY29tbW9uLmdldE1heChcbiAgICAgICAgICBtYXhNZXNzYWdlV2lkdGhQZXJBY3Rvclttc2cuZnJvbV0gfHwgMCxcbiAgICAgICAgICBtZXNzYWdlV2lkdGhcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAobXNnLnBsYWNlbWVudCA9PT0gZGlhZ09iai5kYi5QTEFDRU1FTlQuTEVGVE9GKSB7XG4gICAgICAgIG1heE1lc3NhZ2VXaWR0aFBlckFjdG9yW2FjdG9yLnByZXZBY3Rvcl0gPSBjb21tb24uZ2V0TWF4KFxuICAgICAgICAgIG1heE1lc3NhZ2VXaWR0aFBlckFjdG9yW2FjdG9yLnByZXZBY3Rvcl0gfHwgMCxcbiAgICAgICAgICBtZXNzYWdlV2lkdGhcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAobXNnLnBsYWNlbWVudCA9PT0gZGlhZ09iai5kYi5QTEFDRU1FTlQuT1ZFUikge1xuICAgICAgICBpZiAoYWN0b3IucHJldkFjdG9yKSB7XG4gICAgICAgICAgbWF4TWVzc2FnZVdpZHRoUGVyQWN0b3JbYWN0b3IucHJldkFjdG9yXSA9IGNvbW1vbi5nZXRNYXgoXG4gICAgICAgICAgICBtYXhNZXNzYWdlV2lkdGhQZXJBY3RvclthY3Rvci5wcmV2QWN0b3JdIHx8IDAsXG4gICAgICAgICAgICBtZXNzYWdlV2lkdGggLyAyXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0b3IubmV4dEFjdG9yKSB7XG4gICAgICAgICAgbWF4TWVzc2FnZVdpZHRoUGVyQWN0b3JbbXNnLmZyb21dID0gY29tbW9uLmdldE1heChcbiAgICAgICAgICAgIG1heE1lc3NhZ2VXaWR0aFBlckFjdG9yW21zZy5mcm9tXSB8fCAwLFxuICAgICAgICAgICAgbWVzc2FnZVdpZHRoIC8gMlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbG9nLmRlYnVnKFwibWF4TWVzc2FnZVdpZHRoUGVyQWN0b3I6XCIsIG1heE1lc3NhZ2VXaWR0aFBlckFjdG9yKTtcbiAgcmV0dXJuIG1heE1lc3NhZ2VXaWR0aFBlckFjdG9yO1xufVxuY29uc3QgZ2V0UmVxdWlyZWRQb3B1cFdpZHRoID0gZnVuY3Rpb24oYWN0b3IpIHtcbiAgbGV0IHJlcXVpcmVkUG9wdXBXaWR0aCA9IDA7XG4gIGNvbnN0IHRleHRGb250ID0gYWN0b3JGb250KGNvbmYpO1xuICBmb3IgKGNvbnN0IGtleSBpbiBhY3Rvci5saW5rcykge1xuICAgIGNvbnN0IGxhYmVsRGltZW5zaW9ucyA9IHV0aWxzLmNhbGN1bGF0ZVRleHREaW1lbnNpb25zKGtleSwgdGV4dEZvbnQpO1xuICAgIGNvbnN0IGxhYmVsV2lkdGggPSBsYWJlbERpbWVuc2lvbnMud2lkdGggKyAyICogY29uZi53cmFwUGFkZGluZyArIDIgKiBjb25mLmJveE1hcmdpbjtcbiAgICBpZiAocmVxdWlyZWRQb3B1cFdpZHRoIDwgbGFiZWxXaWR0aCkge1xuICAgICAgcmVxdWlyZWRQb3B1cFdpZHRoID0gbGFiZWxXaWR0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcXVpcmVkUG9wdXBXaWR0aDtcbn07XG5hc3luYyBmdW5jdGlvbiBjYWxjdWxhdGVBY3Rvck1hcmdpbnMoYWN0b3JzLCBhY3RvclRvTWVzc2FnZVdpZHRoLCBib3hlcykge1xuICBsZXQgbWF4SGVpZ2h0ID0gMDtcbiAgZm9yIChjb25zdCBwcm9wIG9mIE9iamVjdC5rZXlzKGFjdG9ycykpIHtcbiAgICBjb25zdCBhY3RvciA9IGFjdG9yc1twcm9wXTtcbiAgICBpZiAoYWN0b3Iud3JhcCkge1xuICAgICAgYWN0b3IuZGVzY3JpcHRpb24gPSB1dGlscy53cmFwTGFiZWwoXG4gICAgICAgIGFjdG9yLmRlc2NyaXB0aW9uLFxuICAgICAgICBjb25mLndpZHRoIC0gMiAqIGNvbmYud3JhcFBhZGRpbmcsXG4gICAgICAgIGFjdG9yRm9udChjb25mKVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgYWN0RGltcyA9IGhhc0thdGV4KGFjdG9yLmRlc2NyaXB0aW9uKSA/IGF3YWl0IGNhbGN1bGF0ZU1hdGhNTERpbWVuc2lvbnMoYWN0b3IuZGVzY3JpcHRpb24sIGdldENvbmZpZygpKSA6IHV0aWxzLmNhbGN1bGF0ZVRleHREaW1lbnNpb25zKGFjdG9yLmRlc2NyaXB0aW9uLCBhY3RvckZvbnQoY29uZikpO1xuICAgIGFjdG9yLndpZHRoID0gYWN0b3Iud3JhcCA/IGNvbmYud2lkdGggOiBjb21tb24uZ2V0TWF4KGNvbmYud2lkdGgsIGFjdERpbXMud2lkdGggKyAyICogY29uZi53cmFwUGFkZGluZyk7XG4gICAgYWN0b3IuaGVpZ2h0ID0gYWN0b3Iud3JhcCA/IGNvbW1vbi5nZXRNYXgoYWN0RGltcy5oZWlnaHQsIGNvbmYuaGVpZ2h0KSA6IGNvbmYuaGVpZ2h0O1xuICAgIG1heEhlaWdodCA9IGNvbW1vbi5nZXRNYXgobWF4SGVpZ2h0LCBhY3Rvci5oZWlnaHQpO1xuICB9XG4gIGZvciAoY29uc3QgYWN0b3JLZXkgaW4gYWN0b3JUb01lc3NhZ2VXaWR0aCkge1xuICAgIGNvbnN0IGFjdG9yID0gYWN0b3JzW2FjdG9yS2V5XTtcbiAgICBpZiAoIWFjdG9yKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgbmV4dEFjdG9yID0gYWN0b3JzW2FjdG9yLm5leHRBY3Rvcl07XG4gICAgaWYgKCFuZXh0QWN0b3IpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VXaWR0aDIgPSBhY3RvclRvTWVzc2FnZVdpZHRoW2FjdG9yS2V5XTtcbiAgICAgIGNvbnN0IGFjdG9yV2lkdGgyID0gbWVzc2FnZVdpZHRoMiArIGNvbmYuYWN0b3JNYXJnaW4gLSBhY3Rvci53aWR0aCAvIDI7XG4gICAgICBhY3Rvci5tYXJnaW4gPSBjb21tb24uZ2V0TWF4KGFjdG9yV2lkdGgyLCBjb25mLmFjdG9yTWFyZ2luKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCBtZXNzYWdlV2lkdGggPSBhY3RvclRvTWVzc2FnZVdpZHRoW2FjdG9yS2V5XTtcbiAgICBjb25zdCBhY3RvcldpZHRoID0gbWVzc2FnZVdpZHRoICsgY29uZi5hY3Rvck1hcmdpbiAtIGFjdG9yLndpZHRoIC8gMiAtIG5leHRBY3Rvci53aWR0aCAvIDI7XG4gICAgYWN0b3IubWFyZ2luID0gY29tbW9uLmdldE1heChhY3RvcldpZHRoLCBjb25mLmFjdG9yTWFyZ2luKTtcbiAgfVxuICBsZXQgbWF4Qm94SGVpZ2h0ID0gMDtcbiAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgY29uc3QgdGV4dEZvbnQgPSBtZXNzYWdlRm9udChjb25mKTtcbiAgICBsZXQgdG90YWxXaWR0aCA9IGJveC5hY3RvcktleXMucmVkdWNlKCh0b3RhbCwgYUtleSkgPT4ge1xuICAgICAgcmV0dXJuIHRvdGFsICs9IGFjdG9yc1thS2V5XS53aWR0aCArIChhY3RvcnNbYUtleV0ubWFyZ2luIHx8IDApO1xuICAgIH0sIDApO1xuICAgIHRvdGFsV2lkdGggLT0gMiAqIGNvbmYuYm94VGV4dE1hcmdpbjtcbiAgICBpZiAoYm94LndyYXApIHtcbiAgICAgIGJveC5uYW1lID0gdXRpbHMud3JhcExhYmVsKGJveC5uYW1lLCB0b3RhbFdpZHRoIC0gMiAqIGNvbmYud3JhcFBhZGRpbmcsIHRleHRGb250KTtcbiAgICB9XG4gICAgY29uc3QgYm94TXNnRGltZW5zaW9ucyA9IHV0aWxzLmNhbGN1bGF0ZVRleHREaW1lbnNpb25zKGJveC5uYW1lLCB0ZXh0Rm9udCk7XG4gICAgbWF4Qm94SGVpZ2h0ID0gY29tbW9uLmdldE1heChib3hNc2dEaW1lbnNpb25zLmhlaWdodCwgbWF4Qm94SGVpZ2h0KTtcbiAgICBjb25zdCBtaW5XaWR0aCA9IGNvbW1vbi5nZXRNYXgodG90YWxXaWR0aCwgYm94TXNnRGltZW5zaW9ucy53aWR0aCArIDIgKiBjb25mLndyYXBQYWRkaW5nKTtcbiAgICBib3gubWFyZ2luID0gY29uZi5ib3hUZXh0TWFyZ2luO1xuICAgIGlmICh0b3RhbFdpZHRoIDwgbWluV2lkdGgpIHtcbiAgICAgIGNvbnN0IG1pc3NpbmcgPSAobWluV2lkdGggLSB0b3RhbFdpZHRoKSAvIDI7XG4gICAgICBib3gubWFyZ2luICs9IG1pc3Npbmc7XG4gICAgfVxuICB9KTtcbiAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiBib3gudGV4dE1heEhlaWdodCA9IG1heEJveEhlaWdodCk7XG4gIHJldHVybiBjb21tb24uZ2V0TWF4KG1heEhlaWdodCwgY29uZi5oZWlnaHQpO1xufVxuY29uc3QgYnVpbGROb3RlTW9kZWwgPSBhc3luYyBmdW5jdGlvbihtc2csIGFjdG9ycywgZGlhZ09iaikge1xuICBjb25zdCBzdGFydHggPSBhY3RvcnNbbXNnLmZyb21dLng7XG4gIGNvbnN0IHN0b3B4ID0gYWN0b3JzW21zZy50b10ueDtcbiAgY29uc3Qgc2hvdWxkV3JhcCA9IG1zZy53cmFwICYmIG1zZy5tZXNzYWdlO1xuICBsZXQgdGV4dERpbWVuc2lvbnMgPSBoYXNLYXRleChtc2cubWVzc2FnZSkgPyBhd2FpdCBjYWxjdWxhdGVNYXRoTUxEaW1lbnNpb25zKG1zZy5tZXNzYWdlLCBnZXRDb25maWcoKSkgOiB1dGlscy5jYWxjdWxhdGVUZXh0RGltZW5zaW9ucyhcbiAgICBzaG91bGRXcmFwID8gdXRpbHMud3JhcExhYmVsKG1zZy5tZXNzYWdlLCBjb25mLndpZHRoLCBub3RlRm9udChjb25mKSkgOiBtc2cubWVzc2FnZSxcbiAgICBub3RlRm9udChjb25mKVxuICApO1xuICBjb25zdCBub3RlTW9kZWwgPSB7XG4gICAgd2lkdGg6IHNob3VsZFdyYXAgPyBjb25mLndpZHRoIDogY29tbW9uLmdldE1heChjb25mLndpZHRoLCB0ZXh0RGltZW5zaW9ucy53aWR0aCArIDIgKiBjb25mLm5vdGVNYXJnaW4pLFxuICAgIGhlaWdodDogMCxcbiAgICBzdGFydHg6IGFjdG9yc1ttc2cuZnJvbV0ueCxcbiAgICBzdG9weDogMCxcbiAgICBzdGFydHk6IDAsXG4gICAgc3RvcHk6IDAsXG4gICAgbWVzc2FnZTogbXNnLm1lc3NhZ2VcbiAgfTtcbiAgaWYgKG1zZy5wbGFjZW1lbnQgPT09IGRpYWdPYmouZGIuUExBQ0VNRU5ULlJJR0hUT0YpIHtcbiAgICBub3RlTW9kZWwud2lkdGggPSBzaG91bGRXcmFwID8gY29tbW9uLmdldE1heChjb25mLndpZHRoLCB0ZXh0RGltZW5zaW9ucy53aWR0aCkgOiBjb21tb24uZ2V0TWF4KFxuICAgICAgYWN0b3JzW21zZy5mcm9tXS53aWR0aCAvIDIgKyBhY3RvcnNbbXNnLnRvXS53aWR0aCAvIDIsXG4gICAgICB0ZXh0RGltZW5zaW9ucy53aWR0aCArIDIgKiBjb25mLm5vdGVNYXJnaW5cbiAgICApO1xuICAgIG5vdGVNb2RlbC5zdGFydHggPSBzdGFydHggKyAoYWN0b3JzW21zZy5mcm9tXS53aWR0aCArIGNvbmYuYWN0b3JNYXJnaW4pIC8gMjtcbiAgfSBlbHNlIGlmIChtc2cucGxhY2VtZW50ID09PSBkaWFnT2JqLmRiLlBMQUNFTUVOVC5MRUZUT0YpIHtcbiAgICBub3RlTW9kZWwud2lkdGggPSBzaG91bGRXcmFwID8gY29tbW9uLmdldE1heChjb25mLndpZHRoLCB0ZXh0RGltZW5zaW9ucy53aWR0aCArIDIgKiBjb25mLm5vdGVNYXJnaW4pIDogY29tbW9uLmdldE1heChcbiAgICAgIGFjdG9yc1ttc2cuZnJvbV0ud2lkdGggLyAyICsgYWN0b3JzW21zZy50b10ud2lkdGggLyAyLFxuICAgICAgdGV4dERpbWVuc2lvbnMud2lkdGggKyAyICogY29uZi5ub3RlTWFyZ2luXG4gICAgKTtcbiAgICBub3RlTW9kZWwuc3RhcnR4ID0gc3RhcnR4IC0gbm90ZU1vZGVsLndpZHRoICsgKGFjdG9yc1ttc2cuZnJvbV0ud2lkdGggLSBjb25mLmFjdG9yTWFyZ2luKSAvIDI7XG4gIH0gZWxzZSBpZiAobXNnLnRvID09PSBtc2cuZnJvbSkge1xuICAgIHRleHREaW1lbnNpb25zID0gdXRpbHMuY2FsY3VsYXRlVGV4dERpbWVuc2lvbnMoXG4gICAgICBzaG91bGRXcmFwID8gdXRpbHMud3JhcExhYmVsKFxuICAgICAgICBtc2cubWVzc2FnZSxcbiAgICAgICAgY29tbW9uLmdldE1heChjb25mLndpZHRoLCBhY3RvcnNbbXNnLmZyb21dLndpZHRoKSxcbiAgICAgICAgbm90ZUZvbnQoY29uZilcbiAgICAgICkgOiBtc2cubWVzc2FnZSxcbiAgICAgIG5vdGVGb250KGNvbmYpXG4gICAgKTtcbiAgICBub3RlTW9kZWwud2lkdGggPSBzaG91bGRXcmFwID8gY29tbW9uLmdldE1heChjb25mLndpZHRoLCBhY3RvcnNbbXNnLmZyb21dLndpZHRoKSA6IGNvbW1vbi5nZXRNYXgoXG4gICAgICBhY3RvcnNbbXNnLmZyb21dLndpZHRoLFxuICAgICAgY29uZi53aWR0aCxcbiAgICAgIHRleHREaW1lbnNpb25zLndpZHRoICsgMiAqIGNvbmYubm90ZU1hcmdpblxuICAgICk7XG4gICAgbm90ZU1vZGVsLnN0YXJ0eCA9IHN0YXJ0eCArIChhY3RvcnNbbXNnLmZyb21dLndpZHRoIC0gbm90ZU1vZGVsLndpZHRoKSAvIDI7XG4gIH0gZWxzZSB7XG4gICAgbm90ZU1vZGVsLndpZHRoID0gTWF0aC5hYnMoc3RhcnR4ICsgYWN0b3JzW21zZy5mcm9tXS53aWR0aCAvIDIgLSAoc3RvcHggKyBhY3RvcnNbbXNnLnRvXS53aWR0aCAvIDIpKSArIGNvbmYuYWN0b3JNYXJnaW47XG4gICAgbm90ZU1vZGVsLnN0YXJ0eCA9IHN0YXJ0eCA8IHN0b3B4ID8gc3RhcnR4ICsgYWN0b3JzW21zZy5mcm9tXS53aWR0aCAvIDIgLSBjb25mLmFjdG9yTWFyZ2luIC8gMiA6IHN0b3B4ICsgYWN0b3JzW21zZy50b10ud2lkdGggLyAyIC0gY29uZi5hY3Rvck1hcmdpbiAvIDI7XG4gIH1cbiAgaWYgKHNob3VsZFdyYXApIHtcbiAgICBub3RlTW9kZWwubWVzc2FnZSA9IHV0aWxzLndyYXBMYWJlbChcbiAgICAgIG1zZy5tZXNzYWdlLFxuICAgICAgbm90ZU1vZGVsLndpZHRoIC0gMiAqIGNvbmYud3JhcFBhZGRpbmcsXG4gICAgICBub3RlRm9udChjb25mKVxuICAgICk7XG4gIH1cbiAgbG9nLmRlYnVnKFxuICAgIGBOTTpbJHtub3RlTW9kZWwuc3RhcnR4fSwke25vdGVNb2RlbC5zdG9weH0sJHtub3RlTW9kZWwuc3RhcnR5fSwke25vdGVNb2RlbC5zdG9weX06JHtub3RlTW9kZWwud2lkdGh9LCR7bm90ZU1vZGVsLmhlaWdodH09JHttc2cubWVzc2FnZX1dYFxuICApO1xuICByZXR1cm4gbm90ZU1vZGVsO1xufTtcbmNvbnN0IGJ1aWxkTWVzc2FnZU1vZGVsID0gZnVuY3Rpb24obXNnLCBhY3RvcnMsIGRpYWdPYmopIHtcbiAgaWYgKCFbXG4gICAgZGlhZ09iai5kYi5MSU5FVFlQRS5TT0xJRF9PUEVOLFxuICAgIGRpYWdPYmouZGIuTElORVRZUEUuRE9UVEVEX09QRU4sXG4gICAgZGlhZ09iai5kYi5MSU5FVFlQRS5TT0xJRCxcbiAgICBkaWFnT2JqLmRiLkxJTkVUWVBFLkRPVFRFRCxcbiAgICBkaWFnT2JqLmRiLkxJTkVUWVBFLlNPTElEX0NST1NTLFxuICAgIGRpYWdPYmouZGIuTElORVRZUEUuRE9UVEVEX0NST1NTLFxuICAgIGRpYWdPYmouZGIuTElORVRZUEUuU09MSURfUE9JTlQsXG4gICAgZGlhZ09iai5kYi5MSU5FVFlQRS5ET1RURURfUE9JTlRcbiAgXS5pbmNsdWRlcyhtc2cudHlwZSkpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgY29uc3QgW2Zyb21MZWZ0LCBmcm9tUmlnaHRdID0gYWN0aXZhdGlvbkJvdW5kcyhtc2cuZnJvbSwgYWN0b3JzKTtcbiAgY29uc3QgW3RvTGVmdCwgdG9SaWdodF0gPSBhY3RpdmF0aW9uQm91bmRzKG1zZy50bywgYWN0b3JzKTtcbiAgY29uc3QgaXNBcnJvd1RvUmlnaHQgPSBmcm9tTGVmdCA8PSB0b0xlZnQ7XG4gIGNvbnN0IHN0YXJ0eCA9IGlzQXJyb3dUb1JpZ2h0ID8gZnJvbVJpZ2h0IDogZnJvbUxlZnQ7XG4gIGxldCBzdG9weCA9IGlzQXJyb3dUb1JpZ2h0ID8gdG9MZWZ0IDogdG9SaWdodDtcbiAgY29uc3QgaXNBcnJvd1RvQWN0aXZhdGlvbiA9IE1hdGguYWJzKHRvTGVmdCAtIHRvUmlnaHQpID4gMjtcbiAgY29uc3QgYWRqdXN0VmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gaXNBcnJvd1RvUmlnaHQgPyAtdmFsdWUgOiB2YWx1ZTtcbiAgfTtcbiAgaWYgKG1zZy5mcm9tID09PSBtc2cudG8pIHtcbiAgICBzdG9weCA9IHN0YXJ0eDtcbiAgfSBlbHNlIHtcbiAgICBpZiAobXNnLmFjdGl2YXRlICYmICFpc0Fycm93VG9BY3RpdmF0aW9uKSB7XG4gICAgICBzdG9weCArPSBhZGp1c3RWYWx1ZShjb25mLmFjdGl2YXRpb25XaWR0aCAvIDIgLSAxKTtcbiAgICB9XG4gICAgaWYgKCFbZGlhZ09iai5kYi5MSU5FVFlQRS5TT0xJRF9PUEVOLCBkaWFnT2JqLmRiLkxJTkVUWVBFLkRPVFRFRF9PUEVOXS5pbmNsdWRlcyhtc2cudHlwZSkpIHtcbiAgICAgIHN0b3B4ICs9IGFkanVzdFZhbHVlKDMpO1xuICAgIH1cbiAgfVxuICBjb25zdCBhbGxCb3VuZHMgPSBbZnJvbUxlZnQsIGZyb21SaWdodCwgdG9MZWZ0LCB0b1JpZ2h0XTtcbiAgY29uc3QgYm91bmRlZFdpZHRoID0gTWF0aC5hYnMoc3RhcnR4IC0gc3RvcHgpO1xuICBpZiAobXNnLndyYXAgJiYgbXNnLm1lc3NhZ2UpIHtcbiAgICBtc2cubWVzc2FnZSA9IHV0aWxzLndyYXBMYWJlbChcbiAgICAgIG1zZy5tZXNzYWdlLFxuICAgICAgY29tbW9uLmdldE1heChib3VuZGVkV2lkdGggKyAyICogY29uZi53cmFwUGFkZGluZywgY29uZi53aWR0aCksXG4gICAgICBtZXNzYWdlRm9udChjb25mKVxuICAgICk7XG4gIH1cbiAgY29uc3QgbXNnRGltcyA9IHV0aWxzLmNhbGN1bGF0ZVRleHREaW1lbnNpb25zKG1zZy5tZXNzYWdlLCBtZXNzYWdlRm9udChjb25mKSk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IGNvbW1vbi5nZXRNYXgoXG4gICAgICBtc2cud3JhcCA/IDAgOiBtc2dEaW1zLndpZHRoICsgMiAqIGNvbmYud3JhcFBhZGRpbmcsXG4gICAgICBib3VuZGVkV2lkdGggKyAyICogY29uZi53cmFwUGFkZGluZyxcbiAgICAgIGNvbmYud2lkdGhcbiAgICApLFxuICAgIGhlaWdodDogMCxcbiAgICBzdGFydHgsXG4gICAgc3RvcHgsXG4gICAgc3RhcnR5OiAwLFxuICAgIHN0b3B5OiAwLFxuICAgIG1lc3NhZ2U6IG1zZy5tZXNzYWdlLFxuICAgIHR5cGU6IG1zZy50eXBlLFxuICAgIHdyYXA6IG1zZy53cmFwLFxuICAgIGZyb21Cb3VuZHM6IE1hdGgubWluLmFwcGx5KG51bGwsIGFsbEJvdW5kcyksXG4gICAgdG9Cb3VuZHM6IE1hdGgubWF4LmFwcGx5KG51bGwsIGFsbEJvdW5kcylcbiAgfTtcbn07XG5jb25zdCBjYWxjdWxhdGVMb29wQm91bmRzID0gYXN5bmMgZnVuY3Rpb24obWVzc2FnZXMsIGFjdG9ycywgX21heFdpZHRoUGVyQWN0b3IsIGRpYWdPYmopIHtcbiAgY29uc3QgbG9vcHMgPSB7fTtcbiAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgbGV0IGN1cnJlbnQsIG5vdGVNb2RlbCwgbXNnTW9kZWw7XG4gIGZvciAoY29uc3QgbXNnIG9mIG1lc3NhZ2VzKSB7XG4gICAgbXNnLmlkID0gdXRpbHMucmFuZG9tKHsgbGVuZ3RoOiAxMCB9KTtcbiAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICBjYXNlIGRpYWdPYmouZGIuTElORVRZUEUuTE9PUF9TVEFSVDpcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5MSU5FVFlQRS5BTFRfU1RBUlQ6XG4gICAgICBjYXNlIGRpYWdPYmouZGIuTElORVRZUEUuT1BUX1NUQVJUOlxuICAgICAgY2FzZSBkaWFnT2JqLmRiLkxJTkVUWVBFLlBBUl9TVEFSVDpcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5MSU5FVFlQRS5QQVJfT1ZFUl9TVEFSVDpcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5MSU5FVFlQRS5DUklUSUNBTF9TVEFSVDpcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5MSU5FVFlQRS5CUkVBS19TVEFSVDpcbiAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgaWQ6IG1zZy5pZCxcbiAgICAgICAgICBtc2c6IG1zZy5tZXNzYWdlLFxuICAgICAgICAgIGZyb206IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICAgIHRvOiBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUixcbiAgICAgICAgICB3aWR0aDogMFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGRpYWdPYmouZGIuTElORVRZUEUuQUxUX0VMU0U6XG4gICAgICBjYXNlIGRpYWdPYmouZGIuTElORVRZUEUuUEFSX0FORDpcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5MSU5FVFlQRS5DUklUSUNBTF9PUFRJT046XG4gICAgICAgIGlmIChtc2cubWVzc2FnZSkge1xuICAgICAgICAgIGN1cnJlbnQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICBsb29wc1tjdXJyZW50LmlkXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgbG9vcHNbbXNnLmlkXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgc3RhY2sucHVzaChjdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5MSU5FVFlQRS5MT09QX0VORDpcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5MSU5FVFlQRS5BTFRfRU5EOlxuICAgICAgY2FzZSBkaWFnT2JqLmRiLkxJTkVUWVBFLk9QVF9FTkQ6XG4gICAgICBjYXNlIGRpYWdPYmouZGIuTElORVRZUEUuUEFSX0VORDpcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5MSU5FVFlQRS5DUklUSUNBTF9FTkQ6XG4gICAgICBjYXNlIGRpYWdPYmouZGIuTElORVRZUEUuQlJFQUtfRU5EOlxuICAgICAgICBjdXJyZW50ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGxvb3BzW2N1cnJlbnQuaWRdID0gY3VycmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGRpYWdPYmouZGIuTElORVRZUEUuQUNUSVZFX1NUQVJUOlxuICAgICAgICB7XG4gICAgICAgICAgY29uc3QgYWN0b3JSZWN0ID0gYWN0b3JzW21zZy5mcm9tID8gbXNnLmZyb20uYWN0b3IgOiBtc2cudG8uYWN0b3JdO1xuICAgICAgICAgIGNvbnN0IHN0YWNrZWRTaXplID0gYWN0b3JBY3RpdmF0aW9ucyhtc2cuZnJvbSA/IG1zZy5mcm9tLmFjdG9yIDogbXNnLnRvLmFjdG9yKS5sZW5ndGg7XG4gICAgICAgICAgY29uc3QgeCA9IGFjdG9yUmVjdC54ICsgYWN0b3JSZWN0LndpZHRoIC8gMiArIChzdGFja2VkU2l6ZSAtIDEpICogY29uZi5hY3RpdmF0aW9uV2lkdGggLyAyO1xuICAgICAgICAgIGNvbnN0IHRvQWRkID0ge1xuICAgICAgICAgICAgc3RhcnR4OiB4LFxuICAgICAgICAgICAgc3RvcHg6IHggKyBjb25mLmFjdGl2YXRpb25XaWR0aCxcbiAgICAgICAgICAgIGFjdG9yOiBtc2cuZnJvbS5hY3RvcixcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJvdW5kcy5hY3RpdmF0aW9ucy5wdXNoKHRvQWRkKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZGlhZ09iai5kYi5MSU5FVFlQRS5BQ1RJVkVfRU5EOlxuICAgICAgICB7XG4gICAgICAgICAgY29uc3QgbGFzdEFjdG9yQWN0aXZhdGlvbklkeCA9IGJvdW5kcy5hY3RpdmF0aW9ucy5tYXAoKGEpID0+IGEuYWN0b3IpLmxhc3RJbmRleE9mKG1zZy5mcm9tLmFjdG9yKTtcbiAgICAgICAgICBkZWxldGUgYm91bmRzLmFjdGl2YXRpb25zLnNwbGljZShsYXN0QWN0b3JBY3RpdmF0aW9uSWR4LCAxKVswXTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgY29uc3QgaXNOb3RlID0gbXNnLnBsYWNlbWVudCAhPT0gdm9pZCAwO1xuICAgIGlmIChpc05vdGUpIHtcbiAgICAgIG5vdGVNb2RlbCA9IGF3YWl0IGJ1aWxkTm90ZU1vZGVsKG1zZywgYWN0b3JzLCBkaWFnT2JqKTtcbiAgICAgIG1zZy5ub3RlTW9kZWwgPSBub3RlTW9kZWw7XG4gICAgICBzdGFjay5mb3JFYWNoKChzdGspID0+IHtcbiAgICAgICAgY3VycmVudCA9IHN0aztcbiAgICAgICAgY3VycmVudC5mcm9tID0gY29tbW9uLmdldE1pbihjdXJyZW50LmZyb20sIG5vdGVNb2RlbC5zdGFydHgpO1xuICAgICAgICBjdXJyZW50LnRvID0gY29tbW9uLmdldE1heChjdXJyZW50LnRvLCBub3RlTW9kZWwuc3RhcnR4ICsgbm90ZU1vZGVsLndpZHRoKTtcbiAgICAgICAgY3VycmVudC53aWR0aCA9IGNvbW1vbi5nZXRNYXgoY3VycmVudC53aWR0aCwgTWF0aC5hYnMoY3VycmVudC5mcm9tIC0gY3VycmVudC50bykpIC0gY29uZi5sYWJlbEJveFdpZHRoO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1zZ01vZGVsID0gYnVpbGRNZXNzYWdlTW9kZWwobXNnLCBhY3RvcnMsIGRpYWdPYmopO1xuICAgICAgbXNnLm1zZ01vZGVsID0gbXNnTW9kZWw7XG4gICAgICBpZiAobXNnTW9kZWwuc3RhcnR4ICYmIG1zZ01vZGVsLnN0b3B4ICYmIHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc3RhY2suZm9yRWFjaCgoc3RrKSA9PiB7XG4gICAgICAgICAgY3VycmVudCA9IHN0aztcbiAgICAgICAgICBpZiAobXNnTW9kZWwuc3RhcnR4ID09PSBtc2dNb2RlbC5zdG9weCkge1xuICAgICAgICAgICAgY29uc3QgZnJvbSA9IGFjdG9yc1ttc2cuZnJvbV07XG4gICAgICAgICAgICBjb25zdCB0byA9IGFjdG9yc1ttc2cudG9dO1xuICAgICAgICAgICAgY3VycmVudC5mcm9tID0gY29tbW9uLmdldE1pbihcbiAgICAgICAgICAgICAgZnJvbS54IC0gbXNnTW9kZWwud2lkdGggLyAyLFxuICAgICAgICAgICAgICBmcm9tLnggLSBmcm9tLndpZHRoIC8gMixcbiAgICAgICAgICAgICAgY3VycmVudC5mcm9tXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY3VycmVudC50byA9IGNvbW1vbi5nZXRNYXgoXG4gICAgICAgICAgICAgIHRvLnggKyBtc2dNb2RlbC53aWR0aCAvIDIsXG4gICAgICAgICAgICAgIHRvLnggKyBmcm9tLndpZHRoIC8gMixcbiAgICAgICAgICAgICAgY3VycmVudC50b1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1cnJlbnQud2lkdGggPSBjb21tb24uZ2V0TWF4KGN1cnJlbnQud2lkdGgsIE1hdGguYWJzKGN1cnJlbnQudG8gLSBjdXJyZW50LmZyb20pKSAtIGNvbmYubGFiZWxCb3hXaWR0aDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudC5mcm9tID0gY29tbW9uLmdldE1pbihtc2dNb2RlbC5zdGFydHgsIGN1cnJlbnQuZnJvbSk7XG4gICAgICAgICAgICBjdXJyZW50LnRvID0gY29tbW9uLmdldE1heChtc2dNb2RlbC5zdG9weCwgY3VycmVudC50byk7XG4gICAgICAgICAgICBjdXJyZW50LndpZHRoID0gY29tbW9uLmdldE1heChjdXJyZW50LndpZHRoLCBtc2dNb2RlbC53aWR0aCkgLSBjb25mLmxhYmVsQm94V2lkdGg7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYm91bmRzLmFjdGl2YXRpb25zID0gW107XG4gIGxvZy5kZWJ1ZyhcIkxvb3AgdHlwZSB3aWR0aHM6XCIsIGxvb3BzKTtcbiAgcmV0dXJuIGxvb3BzO1xufTtcbmNvbnN0IHJlbmRlcmVyID0ge1xuICBib3VuZHMsXG4gIGRyYXdBY3RvcnMsXG4gIGRyYXdBY3RvcnNQb3B1cCxcbiAgc2V0Q29uZixcbiAgZHJhd1xufTtcbmNvbnN0IGRpYWdyYW0gPSB7XG4gIHBhcnNlcjogcGFyc2VyJDEsXG4gIGRiLFxuICByZW5kZXJlcixcbiAgc3R5bGVzLFxuICBpbml0OiAoeyB3cmFwIH0pID0+IHtcbiAgICBkYi5zZXRXcmFwKHdyYXApO1xuICB9XG59O1xuZXhwb3J0IHtcbiAgZGlhZ3JhbVxufTtcbiJdLCJuYW1lcyI6WyJnZXRDb25maWciLCJjbGVhciQxIiwibG9nIiwic2FuaXRpemVUZXh0Iiwic2V0QWNjVGl0bGUiLCJnZXRBY2NUaXRsZSIsImdldERpYWdyYW1UaXRsZSIsInNldERpYWdyYW1UaXRsZSIsInNldEFjY0Rlc2NyaXB0aW9uIiwiZ2V0QWNjRGVzY3JpcHRpb24iLCJkcmF3UmVjdCQxIiwic2FuaXRpemVVcmwiLCJyZW5kZXJLYXRleCIsImdldENvbmZpZyQxIiwiY29tbW9uIiwicGFyc2VGb250U2l6ZSIsIlpFUk9fV0lEVEhfU1BBQ0UiLCJnZXROb3RlUmVjdCQxIiwiZHJhd0VtYmVkZGVkSW1hZ2UiLCJkcmF3SW1hZ2UiLCJoYXNLYXRleCIsImdldFRleHRPYmokMSIsImRyYXdCYWNrZ3JvdW5kUmVjdCQxIiwiY2FsY3VsYXRlTWF0aE1MRGltZW5zaW9ucyIsInV0aWxzIiwiYXNzaWduV2l0aERlcHRoIiwic2VsZWN0IiwiaW5kZXgiLCJjb25maWd1cmVTdmdTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFZQSxJQUFJLE1BQU0sR0FBRyxXQUFXO0FBQ3hCLEVBQUUsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3ZELE1BQU0sQ0FBQztBQUNQLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pzQyxFQUFFLElBQUksT0FBTyxHQUFHO0FBQ2hCLElBQUksS0FBSyxFQUFFLFNBQVMsS0FBSyxHQUFHO0FBQzVCLEtBQUs7QUFDTCxJQUFJLEVBQUUsRUFBRSxFQUFFO0FBQ1YsSUFBSSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsc0JBQXNCLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtBQUNoeUMsSUFBSSxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUU7QUFDNzJCLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RxQixJQUFJLGFBQWEsRUFBRSxTQUFTLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDckYsTUFBTSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUM3QixNQUFNLFFBQVEsT0FBTztBQUNyQixRQUFRLEtBQUssQ0FBQztBQUNkLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzQixVQUFVLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLFFBQVEsS0FBSyxDQUFDLENBQUM7QUFDZixRQUFRLEtBQUssQ0FBQztBQUNkLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDdEIsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxDQUFDLENBQUM7QUFDZixRQUFRLEtBQUssRUFB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QUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUM1SCxVQUFVLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNySCxVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUM1SCxVQUFVLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUNySCxVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUM1SCxVQUFVLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQy9FLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzlCLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQzVILFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDL0UsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDOUIsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFDakksVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUMvRSxVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztBQUMzSSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzlCLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ2xJLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ3pILFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzlCLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNySixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkksVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pJLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO0FBQzFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7QUFDN0MsVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvRCxVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztBQUMxQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDO0FBQzdDLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzlCLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQ3BDLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7QUFDN0MsVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvRCxVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUNwQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDO0FBQzdDLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzlCLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUM7QUFDakQsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDOUIsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ25ILFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckUsVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzlDLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUM5QyxVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNoSSxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0YsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdGLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNsRyxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFD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QUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7QUFDNUMsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9ELFVBQVUsTUFBTTtBQUNoQixPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUksS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUNqOU0sSUFBSSxjQUFjLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUs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QyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLFFBQVEsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkUsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzlCLFVBQVUsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUM1QyxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNsQyxRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUc7QUFDdEIsVUFBVSxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO0FBQzVDLFVBQVUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztBQUN0QyxVQUFVLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVk7QUFDaEQsVUFBVSxXQUFXLEVBQUUsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRztBQUNyTSxTQUFTLENBQUM7QUFDVixRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDakMsVUFBVSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdB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LE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksT0FBTyxDQUFDLENBQUM7QUFDckIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDNUIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxL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QUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFO0FBQ3htQixLQUFL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QU0sS0FBSyxXQUFXO0FBQ3RCLFFBQVEsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2pFLFFBQVEsTUFBTTtBQUNkLE1BQU0sS0FBSyxTQUFTO0FBQ3BCLFFBQVEsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM1RCxRQUFRLE1BQU07QUFDZCxNQUFNLEtBQUssVUFBVTtBQUNyQixRQUFRLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNuRSxRQUFRLE1BQU07QUFDZCxNQUFNLEtBQUssUUFBUTtBQUNuQixRQUFRLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDNUQsUUFBUSxNQUFNO0FBQ2QsTUFBTSxLQUFLLFVBQVU7QUFDckIsUUFBUSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkUsUUFBUSxNQUFNO0FBQ2QsTUFBTSxLQUFLLE1BQU07QUFDakIsUUFBUSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkUsUUFBUSxNQUFNO0FBQ2QsTUFBTSxLQUFLLFFBQVE7QUFDbkIsUUFBUSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzVELFFBQVEsTUFB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R0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3RSxRQUFRLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0RixRQUFRLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwRixRQUFRLElBQUksRUFBRSxJQUFJLEtBQUssWUFBWSxDQUFDLEVBQUU7QUFDdEMsVUFBVSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqRixVQUFVLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9FLFVBQVUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hGLFVBQVUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RGLFNBQVM7QUFDVCxPQUFPLENBQUM7QUFDUixLQUFLO0FBQ0wsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQzNDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDckQsR0FBRztBQUNILEVBQUUsTUFBTSxFQUFFLFNBQVMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ2pELElBQUksTUFBTSxPQUFPLEdBQUdjLGNBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2pELElBQUksTUFBTSxNQUFNLEdBQUdBLGNBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hELElBQUksTUFBTSxPQUFPLEdBQUdBLGNBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2pELElBQUksTUFBTSxNQUFNLEdBQUdBLGNBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1B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
