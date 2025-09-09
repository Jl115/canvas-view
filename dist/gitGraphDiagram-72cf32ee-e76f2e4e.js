'use strict';

var index = require('./index-d3f4d11e.js');
require('./main-8c6d7706.js');
require('obsidian');
require('@/components/modals');
require('@/views/view');

var parser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [1, 3], $V1 = [1, 6], $V2 = [1, 4], $V3 = [1, 5], $V4 = [2, 5], $V5 = [1, 12], $V6 = [5, 7, 13, 19, 21, 23, 24, 26, 28, 31, 37, 40, 47], $V7 = [7, 13, 19, 21, 23, 24, 26, 28, 31, 37, 40], $V8 = [7, 12, 13, 19, 21, 23, 24, 26, 28, 31, 37, 40], $V9 = [7, 13, 47], $Va = [1, 42], $Vb = [1, 41], $Vc = [7, 13, 29, 32, 35, 38, 47], $Vd = [1, 55], $Ve = [1, 56], $Vf = [1, 57], $Vg = [7, 13, 32, 35, 42, 47];
  var parser2 = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "start": 3, "eol": 4, "GG": 5, "document": 6, "EOF": 7, ":": 8, "DIR": 9, "options": 10, "body": 11, "OPT": 12, "NL": 13, "line": 14, "statement": 15, "commitStatement": 16, "mergeStatement": 17, "cherryPickStatement": 18, "acc_title": 19, "acc_title_value": 20, "acc_descr": 21, "acc_descr_value": 22, "acc_descr_multiline_value": 23, "section": 24, "branchStatement": 25, "CHECKOUT": 26, "ref": 27, "BRANCH": 28, "ORDER": 29, "NUM": 30, "CHERRY_PICK": 31, "COMMIT_ID": 32, "STR": 33, "PARENT_COMMIT": 34, "COMMIT_TAG": 35, "EMPTYSTR": 36, "MERGE": 37, "COMMIT_TYPE": 38, "commitType": 39, "COMMIT": 40, "commit_arg": 41, "COMMIT_MSG": 42, "NORMAL": 43, "REVERSE": 44, "HIGHLIGHT": 45, "ID": 46, ";": 47, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 5: "GG", 7: "EOF", 8: ":", 9: "DIR", 12: "OPT", 13: "NL", 19: "acc_title", 20: "acc_title_value", 21: "acc_descr", 22: "acc_descr_value", 23: "acc_descr_multiline_value", 24: "section", 26: "CHECKOUT", 28: "BRANCH", 29: "ORDER", 30: "NUM", 31: "CHERRY_PICK", 32: "COMMIT_ID", 33: "STR", 34: "PARENT_COMMIT", 35: "COMMIT_TAG", 36: "EMPTYSTR", 37: "MERGE", 38: "COMMIT_TYPE", 40: "COMMIT", 42: "COMMIT_MSG", 43: "NORMAL", 44: "REVERSE", 45: "HIGHLIGHT", 46: "ID", 47: ";" },
    productions_: [0, [3, 2], [3, 3], [3, 4], [3, 5], [6, 0], [6, 2], [10, 2], [10, 1], [11, 0], [11, 2], [14, 2], [14, 1], [15, 1], [15, 1], [15, 1], [15, 2], [15, 2], [15, 1], [15, 1], [15, 1], [15, 2], [25, 2], [25, 4], [18, 3], [18, 5], [18, 5], [18, 7], [18, 7], [18, 5], [18, 5], [18, 5], [18, 7], [18, 7], [18, 7], [18, 7], [17, 2], [17, 4], [17, 4], [17, 4], [17, 6], [17, 6], [17, 6], [17, 6], [17, 6], [17, 6], [17, 8], [17, 8], [17, 8], [17, 8], [17, 8], [17, 8], [16, 2], [16, 3], [16, 3], [16, 5], [16, 5], [16, 3], [16, 5], [16, 5], [16, 5], [16, 5], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 3], [16, 5], [16, 5], [16, 5], [16, 5], [16, 5], [16, 5], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [41, 0], [41, 1], [39, 1], [39, 1], [39, 1], [27, 1], [27, 1], [4, 1], [4, 1], [4, 1]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 2:
          return $$[$0];
        case 3:
          return $$[$0 - 1];
        case 4:
          yy.setDirection($$[$0 - 3]);
          return $$[$0 - 1];
        case 6:
          yy.setOptions($$[$0 - 1]);
          this.$ = $$[$0];
          break;
        case 7:
          $$[$0 - 1] += $$[$0];
          this.$ = $$[$0 - 1];
          break;
        case 9:
          this.$ = [];
          break;
        case 10:
          $$[$0 - 1].push($$[$0]);
          this.$ = $$[$0 - 1];
          break;
        case 11:
          this.$ = $$[$0 - 1];
          break;
        case 16:
          this.$ = $$[$0].trim();
          yy.setAccTitle(this.$);
          break;
        case 17:
        case 18:
          this.$ = $$[$0].trim();
          yy.setAccDescription(this.$);
          break;
        case 19:
          yy.addSection($$[$0].substr(8));
          this.$ = $$[$0].substr(8);
          break;
        case 21:
          yy.checkout($$[$0]);
          break;
        case 22:
          yy.branch($$[$0]);
          break;
        case 23:
          yy.branch($$[$0 - 2], $$[$0]);
          break;
        case 24:
          yy.cherryPick($$[$0], "", void 0);
          break;
        case 25:
          yy.cherryPick($$[$0 - 2], "", void 0, $$[$0]);
          break;
        case 26:
          yy.cherryPick($$[$0 - 2], "", $$[$0]);
          break;
        case 27:
          yy.cherryPick($$[$0 - 4], "", $$[$0], $$[$0 - 2]);
          break;
        case 28:
          yy.cherryPick($$[$0 - 4], "", $$[$0 - 2], $$[$0]);
          break;
        case 29:
          yy.cherryPick($$[$0], "", $$[$0 - 2]);
          break;
        case 30:
          yy.cherryPick($$[$0], "", "");
          break;
        case 31:
          yy.cherryPick($$[$0 - 2], "", "");
          break;
        case 32:
          yy.cherryPick($$[$0 - 4], "", "", $$[$0 - 2]);
          break;
        case 33:
          yy.cherryPick($$[$0 - 4], "", "", $$[$0]);
          break;
        case 34:
          yy.cherryPick($$[$0 - 2], "", $$[$0 - 4], $$[$0]);
          break;
        case 35:
          yy.cherryPick($$[$0 - 2], "", "", $$[$0]);
          break;
        case 36:
          yy.merge($$[$0], "", "", "");
          break;
        case 37:
          yy.merge($$[$0 - 2], $$[$0], "", "");
          break;
        case 38:
          yy.merge($$[$0 - 2], "", $$[$0], "");
          break;
        case 39:
          yy.merge($$[$0 - 2], "", "", $$[$0]);
          break;
        case 40:
          yy.merge($$[$0 - 4], $$[$0], "", $$[$0 - 2]);
          break;
        case 41:
          yy.merge($$[$0 - 4], "", $$[$0], $$[$0 - 2]);
          break;
        case 42:
          yy.merge($$[$0 - 4], "", $$[$0 - 2], $$[$0]);
          break;
        case 43:
          yy.merge($$[$0 - 4], $$[$0 - 2], $$[$0], "");
          break;
        case 44:
          yy.merge($$[$0 - 4], $$[$0 - 2], "", $$[$0]);
          break;
        case 45:
          yy.merge($$[$0 - 4], $$[$0], $$[$0 - 2], "");
          break;
        case 46:
          yy.merge($$[$0 - 6], $$[$0 - 4], $$[$0 - 2], $$[$0]);
          break;
        case 47:
          yy.merge($$[$0 - 6], $$[$0], $$[$0 - 4], $$[$0 - 2]);
          break;
        case 48:
          yy.merge($$[$0 - 6], $$[$0 - 4], $$[$0], $$[$0 - 2]);
          break;
        case 49:
          yy.merge($$[$0 - 6], $$[$0 - 2], $$[$0 - 4], $$[$0]);
          break;
        case 50:
          yy.merge($$[$0 - 6], $$[$0], $$[$0 - 2], $$[$0 - 4]);
          break;
        case 51:
          yy.merge($$[$0 - 6], $$[$0 - 2], $$[$0], $$[$0 - 4]);
          break;
        case 52:
          yy.commit($$[$0]);
          break;
        case 53:
          yy.commit("", "", yy.commitType.NORMAL, $$[$0]);
          break;
        case 54:
          yy.commit("", "", $$[$0], "");
          break;
        case 55:
          yy.commit("", "", $$[$0], $$[$0 - 2]);
          break;
        case 56:
          yy.commit("", "", $$[$0 - 2], $$[$0]);
          break;
        case 57:
          yy.commit("", $$[$0], yy.commitType.NORMAL, "");
          break;
        case 58:
          yy.commit("", $$[$0 - 2], yy.commitType.NORMAL, $$[$0]);
          break;
        case 59:
          yy.commit("", $$[$0], yy.commitType.NORMAL, $$[$0 - 2]);
          break;
        case 60:
          yy.commit("", $$[$0 - 2], $$[$0], "");
          break;
        case 61:
          yy.commit("", $$[$0], $$[$0 - 2], "");
          break;
        case 62:
          yy.commit("", $$[$0 - 4], $$[$0 - 2], $$[$0]);
          break;
        case 63:
          yy.commit("", $$[$0 - 4], $$[$0], $$[$0 - 2]);
          break;
        case 64:
          yy.commit("", $$[$0 - 2], $$[$0 - 4], $$[$0]);
          break;
        case 65:
          yy.commit("", $$[$0], $$[$0 - 4], $$[$0 - 2]);
          break;
        case 66:
          yy.commit("", $$[$0], $$[$0 - 2], $$[$0 - 4]);
          break;
        case 67:
          yy.commit("", $$[$0 - 2], $$[$0], $$[$0 - 4]);
          break;
        case 68:
          yy.commit($$[$0], "", yy.commitType.NORMAL, "");
          break;
        case 69:
          yy.commit($$[$0], "", yy.commitType.NORMAL, $$[$0 - 2]);
          break;
        case 70:
          yy.commit($$[$0 - 2], "", yy.commitType.NORMAL, $$[$0]);
          break;
        case 71:
          yy.commit($$[$0 - 2], "", $$[$0], "");
          break;
        case 72:
          yy.commit($$[$0], "", $$[$0 - 2], "");
          break;
        case 73:
          yy.commit($$[$0], $$[$0 - 2], yy.commitType.NORMAL, "");
          break;
        case 74:
          yy.commit($$[$0 - 2], $$[$0], yy.commitType.NORMAL, "");
          break;
        case 75:
          yy.commit($$[$0 - 4], "", $$[$0 - 2], $$[$0]);
          break;
        case 76:
          yy.commit($$[$0 - 4], "", $$[$0], $$[$0 - 2]);
          break;
        case 77:
          yy.commit($$[$0 - 2], "", $$[$0 - 4], $$[$0]);
          break;
        case 78:
          yy.commit($$[$0], "", $$[$0 - 4], $$[$0 - 2]);
          break;
        case 79:
          yy.commit($$[$0], "", $$[$0 - 2], $$[$0 - 4]);
          break;
        case 80:
          yy.commit($$[$0 - 2], "", $$[$0], $$[$0 - 4]);
          break;
        case 81:
          yy.commit($$[$0 - 4], $$[$0], $$[$0 - 2], "");
          break;
        case 82:
          yy.commit($$[$0 - 4], $$[$0 - 2], $$[$0], "");
          break;
        case 83:
          yy.commit($$[$0 - 2], $$[$0], $$[$0 - 4], "");
          break;
        case 84:
          yy.commit($$[$0], $$[$0 - 2], $$[$0 - 4], "");
          break;
        case 85:
          yy.commit($$[$0], $$[$0 - 4], $$[$0 - 2], "");
          break;
        case 86:
          yy.commit($$[$0 - 2], $$[$0 - 4], $$[$0], "");
          break;
        case 87:
          yy.commit($$[$0 - 4], $$[$0], yy.commitType.NORMAL, $$[$0 - 2]);
          break;
        case 88:
          yy.commit($$[$0 - 4], $$[$0 - 2], yy.commitType.NORMAL, $$[$0]);
          break;
        case 89:
          yy.commit($$[$0 - 2], $$[$0], yy.commitType.NORMAL, $$[$0 - 4]);
          break;
        case 90:
          yy.commit($$[$0], $$[$0 - 2], yy.commitType.NORMAL, $$[$0 - 4]);
          break;
        case 91:
          yy.commit($$[$0], $$[$0 - 4], yy.commitType.NORMAL, $$[$0 - 2]);
          break;
        case 92:
          yy.commit($$[$0 - 2], $$[$0 - 4], yy.commitType.NORMAL, $$[$0]);
          break;
        case 93:
          yy.commit($$[$0 - 6], $$[$0 - 4], $$[$0 - 2], $$[$0]);
          break;
        case 94:
          yy.commit($$[$0 - 6], $$[$0 - 4], $$[$0], $$[$0 - 2]);
          break;
        case 95:
          yy.commit($$[$0 - 6], $$[$0 - 2], $$[$0 - 4], $$[$0]);
          break;
        case 96:
          yy.commit($$[$0 - 6], $$[$0], $$[$0 - 4], $$[$0 - 2]);
          break;
        case 97:
          yy.commit($$[$0 - 6], $$[$0 - 2], $$[$0], $$[$0 - 4]);
          break;
        case 98:
          yy.commit($$[$0 - 6], $$[$0], $$[$0 - 2], $$[$0 - 4]);
          break;
        case 99:
          yy.commit($$[$0 - 4], $$[$0 - 6], $$[$0 - 2], $$[$0]);
          break;
        case 100:
          yy.commit($$[$0 - 4], $$[$0 - 6], $$[$0], $$[$0 - 2]);
          break;
        case 101:
          yy.commit($$[$0 - 2], $$[$0 - 6], $$[$0 - 4], $$[$0]);
          break;
        case 102:
          yy.commit($$[$0], $$[$0 - 6], $$[$0 - 4], $$[$0 - 2]);
          break;
        case 103:
          yy.commit($$[$0 - 2], $$[$0 - 6], $$[$0], $$[$0 - 4]);
          break;
        case 104:
          yy.commit($$[$0], $$[$0 - 6], $$[$0 - 2], $$[$0 - 4]);
          break;
        case 105:
          yy.commit($$[$0], $$[$0 - 4], $$[$0 - 2], $$[$0 - 6]);
          break;
        case 106:
          yy.commit($$[$0 - 2], $$[$0 - 4], $$[$0], $$[$0 - 6]);
          break;
        case 107:
          yy.commit($$[$0], $$[$0 - 2], $$[$0 - 4], $$[$0 - 6]);
          break;
        case 108:
          yy.commit($$[$0 - 2], $$[$0], $$[$0 - 4], $$[$0 - 6]);
          break;
        case 109:
          yy.commit($$[$0 - 4], $$[$0 - 2], $$[$0], $$[$0 - 6]);
          break;
        case 110:
          yy.commit($$[$0 - 4], $$[$0], $$[$0 - 2], $$[$0 - 6]);
          break;
        case 111:
          yy.commit($$[$0 - 2], $$[$0 - 4], $$[$0 - 6], $$[$0]);
          break;
        case 112:
          yy.commit($$[$0], $$[$0 - 4], $$[$0 - 6], $$[$0 - 2]);
          break;
        case 113:
          yy.commit($$[$0 - 2], $$[$0], $$[$0 - 6], $$[$0 - 4]);
          break;
        case 114:
          yy.commit($$[$0], $$[$0 - 2], $$[$0 - 6], $$[$0 - 4]);
          break;
        case 115:
          yy.commit($$[$0 - 4], $$[$0 - 2], $$[$0 - 6], $$[$0]);
          break;
        case 116:
          yy.commit($$[$0 - 4], $$[$0], $$[$0 - 6], $$[$0 - 2]);
          break;
        case 117:
          this.$ = "";
          break;
        case 118:
          this.$ = $$[$0];
          break;
        case 119:
          this.$ = yy.commitType.NORMAL;
          break;
        case 120:
          this.$ = yy.commitType.REVERSE;
          break;
        case 121:
          this.$ = yy.commitType.HIGHLIGHT;
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: $V0, 7: $V1, 13: $V2, 47: $V3 }, { 1: [3] }, { 3: 7, 4: 2, 5: $V0, 7: $V1, 13: $V2, 47: $V3 }, { 6: 8, 7: $V4, 8: [1, 9], 9: [1, 10], 10: 11, 13: $V5 }, o($V6, [2, 124]), o($V6, [2, 125]), o($V6, [2, 126]), { 1: [2, 1] }, { 7: [1, 13] }, { 6: 14, 7: $V4, 10: 11, 13: $V5 }, { 8: [1, 15] }, o($V7, [2, 9], { 11: 16, 12: [1, 17] }), o($V8, [2, 8]), { 1: [2, 2] }, { 7: [1, 18] }, { 6: 19, 7: $V4, 10: 11, 13: $V5 }, { 7: [2, 6], 13: [1, 22], 14: 20, 15: 21, 16: 23, 17: 24, 18: 25, 19: [1, 26], 21: [1, 27], 23: [1, 28], 24: [1, 29], 25: 30, 26: [1, 31], 28: [1, 35], 31: [1, 34], 37: [1, 33], 40: [1, 32] }, o($V8, [2, 7]), { 1: [2, 3] }, { 7: [1, 36] }, o($V7, [2, 10]), { 4: 37, 7: $V1, 13: $V2, 47: $V3 }, o($V7, [2, 12]), o($V9, [2, 13]), o($V9, [2, 14]), o($V9, [2, 15]), { 20: [1, 38] }, { 22: [1, 39] }, o($V9, [2, 18]), o($V9, [2, 19]), o($V9, [2, 20]), { 27: 40, 33: $Va, 46: $Vb }, o($V9, [2, 117], { 41: 43, 32: [1, 46], 33: [1, 48], 35: [1, 44], 38: [1, 45], 42: [1, 47] }), { 27: 49, 33: $Va, 46: $Vb }, { 32: [1, 50], 35: [1, 51] }, { 27: 52, 33: $Va, 46: $Vb }, { 1: [2, 4] }, o($V7, [2, 11]), o($V9, [2, 16]), o($V9, [2, 17]), o($V9, [2, 21]), o($Vc, [2, 122]), o($Vc, [2, 123]), o($V9, [2, 52]), { 33: [1, 53] }, { 39: 54, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 58] }, { 33: [1, 59] }, o($V9, [2, 118]), o($V9, [2, 36], { 32: [1, 60], 35: [1, 62], 38: [1, 61] }), { 33: [1, 63] }, { 33: [1, 64], 36: [1, 65] }, o($V9, [2, 22], { 29: [1, 66] }), o($V9, [2, 53], { 32: [1, 68], 38: [1, 67], 42: [1, 69] }), o($V9, [2, 54], { 32: [1, 71], 35: [1, 70], 42: [1, 72] }), o($Vg, [2, 119]), o($Vg, [2, 120]), o($Vg, [2, 121]), o($V9, [2, 57], { 35: [1, 73], 38: [1, 74], 42: [1, 75] }), o($V9, [2, 68], { 32: [1, 78], 35: [1, 76], 38: [1, 77] }), { 33: [1, 79] }, { 39: 80, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 81] }, o($V9, [2, 24], { 34: [1, 82], 35: [1, 83] }), { 32: [1, 84] }, { 32: [1, 85] }, { 30: [1, 86] }, { 39: 87, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 88] }, { 33: [1, 89] }, { 33: [1, 90] }, { 33: [1, 91] }, { 33: [1, 92] }, { 33: [1, 93] }, { 39: 94, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 95] }, { 33: [1, 96] }, { 39: 97, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 98] }, o($V9, [2, 37], { 35: [1, 100], 38: [1, 99] }), o($V9, [2, 38], { 32: [1, 102], 35: [1, 101] }), o($V9, [2, 39], { 32: [1, 103], 38: [1, 104] }), { 33: [1, 105] }, { 33: [1, 106], 36: [1, 107] }, { 33: [1, 108] }, { 33: [1, 109] }, o($V9, [2, 23]), o($V9, [2, 55], { 32: [1, 110], 42: [1, 111] }), o($V9, [2, 59], { 38: [1, 112], 42: [1, 113] }), o($V9, [2, 69], { 32: [1, 115], 38: [1, 114] }), o($V9, [2, 56], { 32: [1, 116], 42: [1, 117] }), o($V9, [2, 61], { 35: [1, 118], 42: [1, 119] }), o($V9, [2, 72], { 32: [1, 121], 35: [1, 120] }), o($V9, [2, 58], { 38: [1, 122], 42: [1, 123] }), o($V9, [2, 60], { 35: [1, 124], 42: [1, 125] }), o($V9, [2, 73], { 35: [1, 127], 38: [1, 126] }), o($V9, [2, 70], { 32: [1, 129], 38: [1, 128] }), o($V9, [2, 71], { 32: [1, 131], 35: [1, 130] }), o($V9, [2, 74], { 35: [1, 133], 38: [1, 132] }), { 39: 134, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 135] }, { 33: [1, 136] }, { 33: [1, 137] }, { 33: [1, 138] }, { 39: 139, 43: $Vd, 44: $Ve, 45: $Vf }, o($V9, [2, 25], { 35: [1, 140] }), o($V9, [2, 26], { 34: [1, 141] }), o($V9, [2, 31], { 34: [1, 142] }), o($V9, [2, 29], { 34: [1, 143] }), o($V9, [2, 30], { 34: [1, 144] }), { 33: [1, 145] }, { 33: [1, 146] }, { 39: 147, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 148] }, { 39: 149, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 150] }, { 33: [1, 151] }, { 33: [1, 152] }, { 33: [1, 153] }, { 33: [1, 154] }, { 33: [1, 155] }, { 33: [1, 156] }, { 39: 157, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 158] }, { 33: [1, 159] }, { 33: [1, 160] }, { 39: 161, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 162] }, { 39: 163, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 164] }, { 33: [1, 165] }, { 33: [1, 166] }, { 39: 167, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 168] }, o($V9, [2, 43], { 35: [1, 169] }), o($V9, [2, 44], { 38: [1, 170] }), o($V9, [2, 42], { 32: [1, 171] }), o($V9, [2, 45], { 35: [1, 172] }), o($V9, [2, 40], { 38: [1, 173] }), o($V9, [2, 41], { 32: [1, 174] }), { 33: [1, 175], 36: [1, 176] }, { 33: [1, 177] }, { 33: [1, 178] }, { 33: [1, 179] }, { 33: [1, 180] }, o($V9, [2, 66], { 42: [1, 181] }), o($V9, [2, 79], { 32: [1, 182] }), o($V9, [2, 67], { 42: [1, 183] }), o($V9, [2, 90], { 38: [1, 184] }), o($V9, [2, 80], { 32: [1, 185] }), o($V9, [2, 89], { 38: [1, 186] }), o($V9, [2, 65], { 42: [1, 187] }), o($V9, [2, 78], { 32: [1, 188] }), o($V9, [2, 64], { 42: [1, 189] }), o($V9, [2, 84], { 35: [1, 190] }), o($V9, [2, 77], { 32: [1, 191] }), o($V9, [2, 83], { 35: [1, 192] }), o($V9, [2, 63], { 42: [1, 193] }), o($V9, [2, 91], { 38: [1, 194] }), o($V9, [2, 62], { 42: [1, 195] }), o($V9, [2, 85], { 35: [1, 196] }), o($V9, [2, 86], { 35: [1, 197] }), o($V9, [2, 92], { 38: [1, 198] }), o($V9, [2, 76], { 32: [1, 199] }), o($V9, [2, 87], { 38: [1, 200] }), o($V9, [2, 75], { 32: [1, 201] }), o($V9, [2, 81], { 35: [1, 202] }), o($V9, [2, 82], { 35: [1, 203] }), o($V9, [2, 88], { 38: [1, 204] }), { 33: [1, 205] }, { 39: 206, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 207] }, { 33: [1, 208] }, { 39: 209, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 210] }, o($V9, [2, 27]), o($V9, [2, 32]), o($V9, [2, 28]), o($V9, [2, 33]), o($V9, [2, 34]), o($V9, [2, 35]), { 33: [1, 211] }, { 33: [1, 212] }, { 33: [1, 213] }, { 39: 214, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 215] }, { 39: 216, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 217] }, { 33: [1, 218] }, { 33: [1, 219] }, { 33: [1, 220] }, { 33: [1, 221] }, { 33: [1, 222] }, { 33: [1, 223] }, { 39: 224, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 225] }, { 33: [1, 226] }, { 33: [1, 227] }, { 39: 228, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 229] }, { 39: 230, 43: $Vd, 44: $Ve, 45: $Vf }, { 33: [1, 231] }, { 33: [1, 232] }, { 33: [1, 233] }, { 39: 234, 43: $Vd, 44: $Ve, 45: $Vf }, o($V9, [2, 46]), o($V9, [2, 48]), o($V9, [2, 47]), o($V9, [2, 49]), o($V9, [2, 51]), o($V9, [2, 50]), o($V9, [2, 107]), o($V9, [2, 108]), o($V9, [2, 105]), o($V9, [2, 106]), o($V9, [2, 110]), o($V9, [2, 109]), o($V9, [2, 114]), o($V9, [2, 113]), o($V9, [2, 112]), o($V9, [2, 111]), o($V9, [2, 116]), o($V9, [2, 115]), o($V9, [2, 104]), o($V9, [2, 103]), o($V9, [2, 102]), o($V9, [2, 101]), o($V9, [2, 99]), o($V9, [2, 100]), o($V9, [2, 98]), o($V9, [2, 97]), o($V9, [2, 96]), o($V9, [2, 95]), o($V9, [2, 93]), o($V9, [2, 94])],
    defaultActions: { 7: [2, 1], 13: [2, 2], 18: [2, 3], 36: [2, 4] },
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
            this.begin("acc_title");
            return 19;
          case 1:
            this.popState();
            return "acc_title_value";
          case 2:
            this.begin("acc_descr");
            return 21;
          case 3:
            this.popState();
            return "acc_descr_value";
          case 4:
            this.begin("acc_descr_multiline");
            break;
          case 5:
            this.popState();
            break;
          case 6:
            return "acc_descr_multiline_value";
          case 7:
            return 13;
          case 8:
            break;
          case 9:
            break;
          case 10:
            return 5;
          case 11:
            return 40;
          case 12:
            return 32;
          case 13:
            return 38;
          case 14:
            return 42;
          case 15:
            return 43;
          case 16:
            return 44;
          case 17:
            return 45;
          case 18:
            return 35;
          case 19:
            return 28;
          case 20:
            return 29;
          case 21:
            return 37;
          case 22:
            return 31;
          case 23:
            return 34;
          case 24:
            return 26;
          case 25:
            return 9;
          case 26:
            return 9;
          case 27:
            return 8;
          case 28:
            return "CARET";
          case 29:
            this.begin("options");
            break;
          case 30:
            this.popState();
            break;
          case 31:
            return 12;
          case 32:
            return 36;
          case 33:
            this.begin("string");
            break;
          case 34:
            this.popState();
            break;
          case 35:
            return 33;
          case 36:
            return 30;
          case 37:
            return 46;
          case 38:
            return 7;
        }
      },
      rules: [/^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:(\r?\n)+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:gitGraph\b)/i, /^(?:commit(?=\s|$))/i, /^(?:id:)/i, /^(?:type:)/i, /^(?:msg:)/i, /^(?:NORMAL\b)/i, /^(?:REVERSE\b)/i, /^(?:HIGHLIGHT\b)/i, /^(?:tag:)/i, /^(?:branch(?=\s|$))/i, /^(?:order:)/i, /^(?:merge(?=\s|$))/i, /^(?:cherry-pick(?=\s|$))/i, /^(?:parent:)/i, /^(?:checkout(?=\s|$))/i, /^(?:LR\b)/i, /^(?:TB\b)/i, /^(?::)/i, /^(?:\^)/i, /^(?:options\r?\n)/i, /^(?:[ \r\n\t]+end\b)/i, /^(?:[\s\S]+(?=[ \r\n\t]+end))/i, /^(?:["]["])/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[0-9]+(?=\s|$))/i, /^(?:\w([-\./\w]*[-\w])?)/i, /^(?:$)/i, /^(?:\s+)/i],
      conditions: { "acc_descr_multiline": { "rules": [5, 6], "inclusive": false }, "acc_descr": { "rules": [3], "inclusive": false }, "acc_title": { "rules": [1], "inclusive": false }, "options": { "rules": [30, 31], "inclusive": false }, "string": { "rules": [34, 35], "inclusive": false }, "INITIAL": { "rules": [0, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 32, 33, 36, 37, 38, 39], "inclusive": true } }
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
const gitGraphParser = parser;
let mainBranchName = index.getConfig().gitGraph.mainBranchName;
let mainBranchOrder = index.getConfig().gitGraph.mainBranchOrder;
let commits = {};
let head = null;
let branchesConfig = {};
branchesConfig[mainBranchName] = { name: mainBranchName, order: mainBranchOrder };
let branches = {};
branches[mainBranchName] = head;
let curBranch = mainBranchName;
let direction = "LR";
let seq = 0;
function getId() {
  return index.random({ length: 7 });
}
function uniqBy(list, fn) {
  const recordMap = /* @__PURE__ */ Object.create(null);
  return list.reduce((out, item) => {
    const key = fn(item);
    if (!recordMap[key]) {
      recordMap[key] = true;
      out.push(item);
    }
    return out;
  }, []);
}
const setDirection = function(dir2) {
  direction = dir2;
};
let options = {};
const setOptions = function(rawOptString) {
  index.log$1.debug("options str", rawOptString);
  rawOptString = rawOptString && rawOptString.trim();
  rawOptString = rawOptString || "{}";
  try {
    options = JSON.parse(rawOptString);
  } catch (e) {
    index.log$1.error("error while parsing gitGraph options", e.message);
  }
};
const getOptions = function() {
  return options;
};
const commit = function(msg, id, type, tag) {
  index.log$1.debug("Entering commit:", msg, id, type, tag);
  id = index.common$1.sanitizeText(id, index.getConfig());
  msg = index.common$1.sanitizeText(msg, index.getConfig());
  tag = index.common$1.sanitizeText(tag, index.getConfig());
  const commit2 = {
    id: id ? id : seq + "-" + getId(),
    message: msg,
    seq: seq++,
    type: type ? type : commitType$1.NORMAL,
    tag: tag ? tag : "",
    parents: head == null ? [] : [head.id],
    branch: curBranch
  };
  head = commit2;
  commits[commit2.id] = commit2;
  branches[curBranch] = commit2.id;
  index.log$1.debug("in pushCommit " + commit2.id);
};
const branch = function(name, order) {
  name = index.common$1.sanitizeText(name, index.getConfig());
  if (branches[name] === void 0) {
    branches[name] = head != null ? head.id : null;
    branchesConfig[name] = { name, order: order ? parseInt(order, 10) : null };
    checkout(name);
    index.log$1.debug("in createBranch");
  } else {
    let error = new Error(
      'Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ' + name + '")'
    );
    error.hash = {
      text: "branch " + name,
      token: "branch " + name,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ['"checkout ' + name + '"']
    };
    throw error;
  }
};
const merge = function(otherBranch, custom_id, override_type, custom_tag) {
  otherBranch = index.common$1.sanitizeText(otherBranch, index.getConfig());
  custom_id = index.common$1.sanitizeText(custom_id, index.getConfig());
  const currentCommit = commits[branches[curBranch]];
  const otherCommit = commits[branches[otherBranch]];
  if (curBranch === otherBranch) {
    let error = new Error('Incorrect usage of "merge". Cannot merge a branch to itself');
    error.hash = {
      text: "merge " + otherBranch,
      token: "merge " + otherBranch,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ["branch abc"]
    };
    throw error;
  } else if (currentCommit === void 0 || !currentCommit) {
    let error = new Error(
      'Incorrect usage of "merge". Current branch (' + curBranch + ")has no commits"
    );
    error.hash = {
      text: "merge " + otherBranch,
      token: "merge " + otherBranch,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ["commit"]
    };
    throw error;
  } else if (branches[otherBranch] === void 0) {
    let error = new Error(
      'Incorrect usage of "merge". Branch to be merged (' + otherBranch + ") does not exist"
    );
    error.hash = {
      text: "merge " + otherBranch,
      token: "merge " + otherBranch,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ["branch " + otherBranch]
    };
    throw error;
  } else if (otherCommit === void 0 || !otherCommit) {
    let error = new Error(
      'Incorrect usage of "merge". Branch to be merged (' + otherBranch + ") has no commits"
    );
    error.hash = {
      text: "merge " + otherBranch,
      token: "merge " + otherBranch,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ['"commit"']
    };
    throw error;
  } else if (currentCommit === otherCommit) {
    let error = new Error('Incorrect usage of "merge". Both branches have same head');
    error.hash = {
      text: "merge " + otherBranch,
      token: "merge " + otherBranch,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ["branch abc"]
    };
    throw error;
  } else if (custom_id && commits[custom_id] !== void 0) {
    let error = new Error(
      'Incorrect usage of "merge". Commit with id:' + custom_id + " already exists, use different custom Id"
    );
    error.hash = {
      text: "merge " + otherBranch + custom_id + override_type + custom_tag,
      token: "merge " + otherBranch + custom_id + override_type + custom_tag,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: [
        "merge " + otherBranch + " " + custom_id + "_UNIQUE " + override_type + " " + custom_tag
      ]
    };
    throw error;
  }
  const commit2 = {
    id: custom_id ? custom_id : seq + "-" + getId(),
    message: "merged branch " + otherBranch + " into " + curBranch,
    seq: seq++,
    parents: [head == null ? null : head.id, branches[otherBranch]],
    branch: curBranch,
    type: commitType$1.MERGE,
    customType: override_type,
    customId: custom_id ? true : false,
    tag: custom_tag ? custom_tag : ""
  };
  head = commit2;
  commits[commit2.id] = commit2;
  branches[curBranch] = commit2.id;
  index.log$1.debug(branches);
  index.log$1.debug("in mergeBranch");
};
const cherryPick = function(sourceId, targetId, tag, parentCommitId) {
  index.log$1.debug("Entering cherryPick:", sourceId, targetId, tag);
  sourceId = index.common$1.sanitizeText(sourceId, index.getConfig());
  targetId = index.common$1.sanitizeText(targetId, index.getConfig());
  tag = index.common$1.sanitizeText(tag, index.getConfig());
  parentCommitId = index.common$1.sanitizeText(parentCommitId, index.getConfig());
  if (!sourceId || commits[sourceId] === void 0) {
    let error = new Error(
      'Incorrect usage of "cherryPick". Source commit id should exist and provided'
    );
    error.hash = {
      text: "cherryPick " + sourceId + " " + targetId,
      token: "cherryPick " + sourceId + " " + targetId,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ["cherry-pick abc"]
    };
    throw error;
  }
  let sourceCommit = commits[sourceId];
  let sourceCommitBranch = sourceCommit.branch;
  if (parentCommitId && !(Array.isArray(sourceCommit.parents) && sourceCommit.parents.includes(parentCommitId))) {
    let error = new Error(
      "Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit."
    );
    throw error;
  }
  if (sourceCommit.type === commitType$1.MERGE && !parentCommitId) {
    let error = new Error(
      "Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified."
    );
    throw error;
  }
  if (!targetId || commits[targetId] === void 0) {
    if (sourceCommitBranch === curBranch) {
      let error = new Error(
        'Incorrect usage of "cherryPick". Source commit is already on current branch'
      );
      error.hash = {
        text: "cherryPick " + sourceId + " " + targetId,
        token: "cherryPick " + sourceId + " " + targetId,
        line: "1",
        loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
        expected: ["cherry-pick abc"]
      };
      throw error;
    }
    const currentCommit = commits[branches[curBranch]];
    if (currentCommit === void 0 || !currentCommit) {
      let error = new Error(
        'Incorrect usage of "cherry-pick". Current branch (' + curBranch + ")has no commits"
      );
      error.hash = {
        text: "cherryPick " + sourceId + " " + targetId,
        token: "cherryPick " + sourceId + " " + targetId,
        line: "1",
        loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
        expected: ["cherry-pick abc"]
      };
      throw error;
    }
    const commit2 = {
      id: seq + "-" + getId(),
      message: "cherry-picked " + sourceCommit + " into " + curBranch,
      seq: seq++,
      parents: [head == null ? null : head.id, sourceCommit.id],
      branch: curBranch,
      type: commitType$1.CHERRY_PICK,
      tag: tag ?? `cherry-pick:${sourceCommit.id}${sourceCommit.type === commitType$1.MERGE ? `|parent:${parentCommitId}` : ""}`
    };
    head = commit2;
    commits[commit2.id] = commit2;
    branches[curBranch] = commit2.id;
    index.log$1.debug(branches);
    index.log$1.debug("in cherryPick");
  }
};
const checkout = function(branch2) {
  branch2 = index.common$1.sanitizeText(branch2, index.getConfig());
  if (branches[branch2] === void 0) {
    let error = new Error(
      'Trying to checkout branch which is not yet created. (Help try using "branch ' + branch2 + '")'
    );
    error.hash = {
      text: "checkout " + branch2,
      token: "checkout " + branch2,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ['"branch ' + branch2 + '"']
    };
    throw error;
  } else {
    curBranch = branch2;
    const id = branches[curBranch];
    head = commits[id];
  }
};
function upsert(arr, key, newVal) {
  const index = arr.indexOf(key);
  if (index === -1) {
    arr.push(newVal);
  } else {
    arr.splice(index, 1, newVal);
  }
}
function prettyPrintCommitHistory(commitArr) {
  const commit2 = commitArr.reduce((out, commit3) => {
    if (out.seq > commit3.seq) {
      return out;
    }
    return commit3;
  }, commitArr[0]);
  let line = "";
  commitArr.forEach(function(c) {
    if (c === commit2) {
      line += "	*";
    } else {
      line += "	|";
    }
  });
  const label = [line, commit2.id, commit2.seq];
  for (let branch2 in branches) {
    if (branches[branch2] === commit2.id) {
      label.push(branch2);
    }
  }
  index.log$1.debug(label.join(" "));
  if (commit2.parents && commit2.parents.length == 2) {
    const newCommit = commits[commit2.parents[0]];
    upsert(commitArr, commit2, newCommit);
    commitArr.push(commits[commit2.parents[1]]);
  } else if (commit2.parents.length == 0) {
    return;
  } else {
    const nextCommit = commits[commit2.parents];
    upsert(commitArr, commit2, nextCommit);
  }
  commitArr = uniqBy(commitArr, (c) => c.id);
  prettyPrintCommitHistory(commitArr);
}
const prettyPrint = function() {
  index.log$1.debug(commits);
  const node = getCommitsArray()[0];
  prettyPrintCommitHistory([node]);
};
const clear$1 = function() {
  commits = {};
  head = null;
  let mainBranch = index.getConfig().gitGraph.mainBranchName;
  let mainBranchOrder2 = index.getConfig().gitGraph.mainBranchOrder;
  branches = {};
  branches[mainBranch] = null;
  branchesConfig = {};
  branchesConfig[mainBranch] = { name: mainBranch, order: mainBranchOrder2 };
  curBranch = mainBranch;
  seq = 0;
  index.clear();
};
const getBranchesAsObjArray = function() {
  const branchesArray = Object.values(branchesConfig).map((branchConfig, i) => {
    if (branchConfig.order !== null) {
      return branchConfig;
    }
    return {
      ...branchConfig,
      order: parseFloat(`0.${i}`, 10)
    };
  }).sort((a, b) => a.order - b.order).map(({ name }) => ({ name }));
  return branchesArray;
};
const getBranches = function() {
  return branches;
};
const getCommits = function() {
  return commits;
};
const getCommitsArray = function() {
  const commitArr = Object.keys(commits).map(function(key) {
    return commits[key];
  });
  commitArr.forEach(function(o) {
    index.log$1.debug(o.id);
  });
  commitArr.sort((a, b) => a.seq - b.seq);
  return commitArr;
};
const getCurrentBranch = function() {
  return curBranch;
};
const getDirection = function() {
  return direction;
};
const getHead = function() {
  return head;
};
const commitType$1 = {
  NORMAL: 0,
  REVERSE: 1,
  HIGHLIGHT: 2,
  MERGE: 3,
  CHERRY_PICK: 4
};
const gitGraphDb = {
  getConfig: () => index.getConfig().gitGraph,
  setDirection,
  setOptions,
  getOptions,
  commit,
  branch,
  merge,
  cherryPick,
  checkout,
  //reset,
  prettyPrint,
  clear: clear$1,
  getBranchesAsObjArray,
  getBranches,
  getCommits,
  getCommitsArray,
  getCurrentBranch,
  getDirection,
  getHead,
  setAccTitle: index.setAccTitle,
  getAccTitle: index.getAccTitle,
  getAccDescription: index.getAccDescription,
  setAccDescription: index.setAccDescription,
  setDiagramTitle: index.setDiagramTitle,
  getDiagramTitle: index.getDiagramTitle,
  commitType: commitType$1
};
let allCommitsDict = {};
const commitType = {
  NORMAL: 0,
  REVERSE: 1,
  HIGHLIGHT: 2,
  MERGE: 3,
  CHERRY_PICK: 4
};
const THEME_COLOR_LIMIT = 8;
let branchPos = {};
let commitPos = {};
let lanes = [];
let maxPos = 0;
let dir = "LR";
const clear = () => {
  branchPos = {};
  commitPos = {};
  allCommitsDict = {};
  maxPos = 0;
  lanes = [];
  dir = "LR";
};
const drawText = (txt) => {
  const svgLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
  let rows = [];
  if (typeof txt === "string") {
    rows = txt.split(/\\n|\n|<br\s*\/?>/gi);
  } else if (Array.isArray(txt)) {
    rows = txt;
  } else {
    rows = [];
  }
  for (const row of rows) {
    const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
    tspan.setAttribute("dy", "1em");
    tspan.setAttribute("x", "0");
    tspan.setAttribute("class", "row");
    tspan.textContent = row.trim();
    svgLabel.appendChild(tspan);
  }
  return svgLabel;
};
const findClosestParent = (parents) => {
  let closestParent = "";
  let maxPosition = 0;
  parents.forEach((parent) => {
    const parentPosition = dir === "TB" ? commitPos[parent].y : commitPos[parent].x;
    if (parentPosition >= maxPosition) {
      closestParent = parent;
      maxPosition = parentPosition;
    }
  });
  return closestParent || void 0;
};
const drawCommits = (svg, commits2, modifyGraph) => {
  const gitGraphConfig = index.getConfig().gitGraph;
  const gBullets = svg.append("g").attr("class", "commit-bullets");
  const gLabels = svg.append("g").attr("class", "commit-labels");
  let pos = 0;
  if (dir === "TB") {
    pos = 30;
  }
  const keys = Object.keys(commits2);
  const sortedKeys = keys.sort((a, b) => {
    return commits2[a].seq - commits2[b].seq;
  });
  const isParallelCommits = gitGraphConfig.parallelCommits;
  const layoutOffset = 10;
  const commitStep = 40;
  sortedKeys.forEach((key) => {
    const commit2 = commits2[key];
    if (isParallelCommits) {
      if (commit2.parents.length) {
        const closestParent = findClosestParent(commit2.parents);
        pos = dir === "TB" ? commitPos[closestParent].y + commitStep : commitPos[closestParent].x + commitStep;
      } else {
        pos = 0;
        if (dir === "TB") {
          pos = 30;
        }
      }
    }
    const posWithOffset = pos + layoutOffset;
    const y = dir === "TB" ? posWithOffset : branchPos[commit2.branch].pos;
    const x = dir === "TB" ? branchPos[commit2.branch].pos : posWithOffset;
    if (modifyGraph) {
      let typeClass;
      let commitSymbolType = commit2.customType !== void 0 && commit2.customType !== "" ? commit2.customType : commit2.type;
      switch (commitSymbolType) {
        case commitType.NORMAL:
          typeClass = "commit-normal";
          break;
        case commitType.REVERSE:
          typeClass = "commit-reverse";
          break;
        case commitType.HIGHLIGHT:
          typeClass = "commit-highlight";
          break;
        case commitType.MERGE:
          typeClass = "commit-merge";
          break;
        case commitType.CHERRY_PICK:
          typeClass = "commit-cherry-pick";
          break;
        default:
          typeClass = "commit-normal";
      }
      if (commitSymbolType === commitType.HIGHLIGHT) {
        const circle = gBullets.append("rect");
        circle.attr("x", x - 10);
        circle.attr("y", y - 10);
        circle.attr("height", 20);
        circle.attr("width", 20);
        circle.attr(
          "class",
          `commit ${commit2.id} commit-highlight${branchPos[commit2.branch].index % THEME_COLOR_LIMIT} ${typeClass}-outer`
        );
        gBullets.append("rect").attr("x", x - 6).attr("y", y - 6).attr("height", 12).attr("width", 12).attr(
          "class",
          `commit ${commit2.id} commit${branchPos[commit2.branch].index % THEME_COLOR_LIMIT} ${typeClass}-inner`
        );
      } else if (commitSymbolType === commitType.CHERRY_PICK) {
        gBullets.append("circle").attr("cx", x).attr("cy", y).attr("r", 10).attr("class", `commit ${commit2.id} ${typeClass}`);
        gBullets.append("circle").attr("cx", x - 3).attr("cy", y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${commit2.id} ${typeClass}`);
        gBullets.append("circle").attr("cx", x + 3).attr("cy", y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${commit2.id} ${typeClass}`);
        gBullets.append("line").attr("x1", x + 3).attr("y1", y + 1).attr("x2", x).attr("y2", y - 5).attr("stroke", "#fff").attr("class", `commit ${commit2.id} ${typeClass}`);
        gBullets.append("line").attr("x1", x - 3).attr("y1", y + 1).attr("x2", x).attr("y2", y - 5).attr("stroke", "#fff").attr("class", `commit ${commit2.id} ${typeClass}`);
      } else {
        const circle = gBullets.append("circle");
        circle.attr("cx", x);
        circle.attr("cy", y);
        circle.attr("r", commit2.type === commitType.MERGE ? 9 : 10);
        circle.attr(
          "class",
          `commit ${commit2.id} commit${branchPos[commit2.branch].index % THEME_COLOR_LIMIT}`
        );
        if (commitSymbolType === commitType.MERGE) {
          const circle2 = gBullets.append("circle");
          circle2.attr("cx", x);
          circle2.attr("cy", y);
          circle2.attr("r", 6);
          circle2.attr(
            "class",
            `commit ${typeClass} ${commit2.id} commit${branchPos[commit2.branch].index % THEME_COLOR_LIMIT}`
          );
        }
        if (commitSymbolType === commitType.REVERSE) {
          const cross = gBullets.append("path");
          cross.attr("d", `M ${x - 5},${y - 5}L${x + 5},${y + 5}M${x - 5},${y + 5}L${x + 5},${y - 5}`).attr(
            "class",
            `commit ${typeClass} ${commit2.id} commit${branchPos[commit2.branch].index % THEME_COLOR_LIMIT}`
          );
        }
      }
    }
    if (dir === "TB") {
      commitPos[commit2.id] = { x, y: posWithOffset };
    } else {
      commitPos[commit2.id] = { x: posWithOffset, y };
    }
    if (modifyGraph) {
      const px = 4;
      const py = 2;
      if (commit2.type !== commitType.CHERRY_PICK && (commit2.customId && commit2.type === commitType.MERGE || commit2.type !== commitType.MERGE) && gitGraphConfig.showCommitLabel) {
        const wrapper = gLabels.append("g");
        const labelBkg = wrapper.insert("rect").attr("class", "commit-label-bkg");
        const text = wrapper.append("text").attr("x", pos).attr("y", y + 25).attr("class", "commit-label").text(commit2.id);
        let bbox = text.node().getBBox();
        labelBkg.attr("x", posWithOffset - bbox.width / 2 - py).attr("y", y + 13.5).attr("width", bbox.width + 2 * py).attr("height", bbox.height + 2 * py);
        if (dir === "TB") {
          labelBkg.attr("x", x - (bbox.width + 4 * px + 5)).attr("y", y - 12);
          text.attr("x", x - (bbox.width + 4 * px)).attr("y", y + bbox.height - 12);
        }
        if (dir !== "TB") {
          text.attr("x", posWithOffset - bbox.width / 2);
        }
        if (gitGraphConfig.rotateCommitLabel) {
          if (dir === "TB") {
            text.attr("transform", "rotate(-45, " + x + ", " + y + ")");
            labelBkg.attr("transform", "rotate(-45, " + x + ", " + y + ")");
          } else {
            let r_x = -7.5 - (bbox.width + 10) / 25 * 9.5;
            let r_y = 10 + bbox.width / 25 * 8.5;
            wrapper.attr(
              "transform",
              "translate(" + r_x + ", " + r_y + ") rotate(-45, " + pos + ", " + y + ")"
            );
          }
        }
      }
      if (commit2.tag) {
        const rect = gLabels.insert("polygon");
        const hole = gLabels.append("circle");
        const tag = gLabels.append("text").attr("y", y - 16).attr("class", "tag-label").text(commit2.tag);
        let tagBbox = tag.node().getBBox();
        tag.attr("x", posWithOffset - tagBbox.width / 2);
        const h2 = tagBbox.height / 2;
        const ly = y - 19.2;
        rect.attr("class", "tag-label-bkg").attr(
          "points",
          `
          ${pos - tagBbox.width / 2 - px / 2},${ly + py}
          ${pos - tagBbox.width / 2 - px / 2},${ly - py}
          ${posWithOffset - tagBbox.width / 2 - px},${ly - h2 - py}
          ${posWithOffset + tagBbox.width / 2 + px},${ly - h2 - py}
          ${posWithOffset + tagBbox.width / 2 + px},${ly + h2 + py}
          ${posWithOffset - tagBbox.width / 2 - px},${ly + h2 + py}`
        );
        hole.attr("cx", pos - tagBbox.width / 2 + px / 2).attr("cy", ly).attr("r", 1.5).attr("class", "tag-hole");
        if (dir === "TB") {
          rect.attr("class", "tag-label-bkg").attr(
            "points",
            `
            ${x},${pos + py}
            ${x},${pos - py}
            ${x + layoutOffset},${pos - h2 - py}
            ${x + layoutOffset + tagBbox.width + px},${pos - h2 - py}
            ${x + layoutOffset + tagBbox.width + px},${pos + h2 + py}
            ${x + layoutOffset},${pos + h2 + py}`
          ).attr("transform", "translate(12,12) rotate(45, " + x + "," + pos + ")");
          hole.attr("cx", x + px / 2).attr("cy", pos).attr("transform", "translate(12,12) rotate(45, " + x + "," + pos + ")");
          tag.attr("x", x + 5).attr("y", pos + 3).attr("transform", "translate(14,14) rotate(45, " + x + "," + pos + ")");
        }
      }
    }
    pos += commitStep + layoutOffset;
    if (pos > maxPos) {
      maxPos = pos;
    }
  });
};
const shouldRerouteArrow = (commitA, commitB, p1, p2, allCommits) => {
  const commitBIsFurthest = dir === "TB" ? p1.x < p2.x : p1.y < p2.y;
  const branchToGetCurve = commitBIsFurthest ? commitB.branch : commitA.branch;
  const isOnBranchToGetCurve = (x) => x.branch === branchToGetCurve;
  const isBetweenCommits = (x) => x.seq > commitA.seq && x.seq < commitB.seq;
  return Object.values(allCommits).some((commitX) => {
    return isBetweenCommits(commitX) && isOnBranchToGetCurve(commitX);
  });
};
const findLane = (y1, y2, depth = 0) => {
  const candidate = y1 + Math.abs(y1 - y2) / 2;
  if (depth > 5) {
    return candidate;
  }
  let ok = lanes.every((lane) => Math.abs(lane - candidate) >= 10);
  if (ok) {
    lanes.push(candidate);
    return candidate;
  }
  const diff = Math.abs(y1 - y2);
  return findLane(y1, y2 - diff / 5, depth + 1);
};
const drawArrow = (svg, commitA, commitB, allCommits) => {
  const p1 = commitPos[commitA.id];
  const p2 = commitPos[commitB.id];
  const arrowNeedsRerouting = shouldRerouteArrow(commitA, commitB, p1, p2, allCommits);
  let arc = "";
  let arc2 = "";
  let radius = 0;
  let offset = 0;
  let colorClassNum = branchPos[commitB.branch].index;
  if (commitB.type === commitType.MERGE && commitA.id !== commitB.parents[0]) {
    colorClassNum = branchPos[commitA.branch].index;
  }
  let lineDef;
  if (arrowNeedsRerouting) {
    arc = "A 10 10, 0, 0, 0,";
    arc2 = "A 10 10, 0, 0, 1,";
    radius = 10;
    offset = 10;
    const lineY = p1.y < p2.y ? findLane(p1.y, p2.y) : findLane(p2.y, p1.y);
    const lineX = p1.x < p2.x ? findLane(p1.x, p2.x) : findLane(p2.x, p1.x);
    if (dir === "TB") {
      if (p1.x < p2.x) {
        lineDef = `M ${p1.x} ${p1.y} L ${lineX - radius} ${p1.y} ${arc2} ${lineX} ${p1.y + offset} L ${lineX} ${p2.y - radius} ${arc} ${lineX + offset} ${p2.y} L ${p2.x} ${p2.y}`;
      } else {
        colorClassNum = branchPos[commitA.branch].index;
        lineDef = `M ${p1.x} ${p1.y} L ${lineX + radius} ${p1.y} ${arc} ${lineX} ${p1.y + offset} L ${lineX} ${p2.y - radius} ${arc2} ${lineX - offset} ${p2.y} L ${p2.x} ${p2.y}`;
      }
    } else {
      if (p1.y < p2.y) {
        lineDef = `M ${p1.x} ${p1.y} L ${p1.x} ${lineY - radius} ${arc} ${p1.x + offset} ${lineY} L ${p2.x - radius} ${lineY} ${arc2} ${p2.x} ${lineY + offset} L ${p2.x} ${p2.y}`;
      } else {
        colorClassNum = branchPos[commitA.branch].index;
        lineDef = `M ${p1.x} ${p1.y} L ${p1.x} ${lineY + radius} ${arc2} ${p1.x + offset} ${lineY} L ${p2.x - radius} ${lineY} ${arc} ${p2.x} ${lineY - offset} L ${p2.x} ${p2.y}`;
      }
    }
  } else {
    arc = "A 20 20, 0, 0, 0,";
    arc2 = "A 20 20, 0, 0, 1,";
    radius = 20;
    offset = 20;
    if (dir === "TB") {
      if (p1.x < p2.x) {
        if (commitB.type === commitType.MERGE && commitA.id !== commitB.parents[0]) {
          lineDef = `M ${p1.x} ${p1.y} L ${p1.x} ${p2.y - radius} ${arc} ${p1.x + offset} ${p2.y} L ${p2.x} ${p2.y}`;
        } else {
          lineDef = `M ${p1.x} ${p1.y} L ${p2.x - radius} ${p1.y} ${arc2} ${p2.x} ${p1.y + offset} L ${p2.x} ${p2.y}`;
        }
      }
      if (p1.x > p2.x) {
        arc = "A 20 20, 0, 0, 0,";
        arc2 = "A 20 20, 0, 0, 1,";
        radius = 20;
        offset = 20;
        if (commitB.type === commitType.MERGE && commitA.id !== commitB.parents[0]) {
          lineDef = `M ${p1.x} ${p1.y} L ${p1.x} ${p2.y - radius} ${arc2} ${p1.x - offset} ${p2.y} L ${p2.x} ${p2.y}`;
        } else {
          lineDef = `M ${p1.x} ${p1.y} L ${p2.x + radius} ${p1.y} ${arc} ${p2.x} ${p1.y + offset} L ${p2.x} ${p2.y}`;
        }
      }
      if (p1.x === p2.x) {
        lineDef = `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;
      }
    } else {
      if (p1.y < p2.y) {
        if (commitB.type === commitType.MERGE && commitA.id !== commitB.parents[0]) {
          lineDef = `M ${p1.x} ${p1.y} L ${p2.x - radius} ${p1.y} ${arc2} ${p2.x} ${p1.y + offset} L ${p2.x} ${p2.y}`;
        } else {
          lineDef = `M ${p1.x} ${p1.y} L ${p1.x} ${p2.y - radius} ${arc} ${p1.x + offset} ${p2.y} L ${p2.x} ${p2.y}`;
        }
      }
      if (p1.y > p2.y) {
        if (commitB.type === commitType.MERGE && commitA.id !== commitB.parents[0]) {
          lineDef = `M ${p1.x} ${p1.y} L ${p2.x - radius} ${p1.y} ${arc} ${p2.x} ${p1.y - offset} L ${p2.x} ${p2.y}`;
        } else {
          lineDef = `M ${p1.x} ${p1.y} L ${p1.x} ${p2.y + radius} ${arc2} ${p1.x + offset} ${p2.y} L ${p2.x} ${p2.y}`;
        }
      }
      if (p1.y === p2.y) {
        lineDef = `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;
      }
    }
  }
  svg.append("path").attr("d", lineDef).attr("class", "arrow arrow" + colorClassNum % THEME_COLOR_LIMIT);
};
const drawArrows = (svg, commits2) => {
  const gArrows = svg.append("g").attr("class", "commit-arrows");
  Object.keys(commits2).forEach((key) => {
    const commit2 = commits2[key];
    if (commit2.parents && commit2.parents.length > 0) {
      commit2.parents.forEach((parent) => {
        drawArrow(gArrows, commits2[parent], commit2, commits2);
      });
    }
  });
};
const drawBranches = (svg, branches2) => {
  const gitGraphConfig = index.getConfig().gitGraph;
  const g = svg.append("g");
  branches2.forEach((branch2, index) => {
    const adjustIndexForTheme = index % THEME_COLOR_LIMIT;
    const pos = branchPos[branch2.name].pos;
    const line = g.append("line");
    line.attr("x1", 0);
    line.attr("y1", pos);
    line.attr("x2", maxPos);
    line.attr("y2", pos);
    line.attr("class", "branch branch" + adjustIndexForTheme);
    if (dir === "TB") {
      line.attr("y1", 30);
      line.attr("x1", pos);
      line.attr("y2", maxPos);
      line.attr("x2", pos);
    }
    lanes.push(pos);
    let name = branch2.name;
    const labelElement = drawText(name);
    const bkg = g.insert("rect");
    const branchLabel = g.insert("g").attr("class", "branchLabel");
    const label = branchLabel.insert("g").attr("class", "label branch-label" + adjustIndexForTheme);
    label.node().appendChild(labelElement);
    let bbox = labelElement.getBBox();
    bkg.attr("class", "branchLabelBkg label" + adjustIndexForTheme).attr("rx", 4).attr("ry", 4).attr("x", -bbox.width - 4 - (gitGraphConfig.rotateCommitLabel === true ? 30 : 0)).attr("y", -bbox.height / 2 + 8).attr("width", bbox.width + 18).attr("height", bbox.height + 4);
    label.attr(
      "transform",
      "translate(" + (-bbox.width - 14 - (gitGraphConfig.rotateCommitLabel === true ? 30 : 0)) + ", " + (pos - bbox.height / 2 - 1) + ")"
    );
    if (dir === "TB") {
      bkg.attr("x", pos - bbox.width / 2 - 10).attr("y", 0);
      label.attr("transform", "translate(" + (pos - bbox.width / 2 - 5) + ", 0)");
    }
    if (dir !== "TB") {
      bkg.attr("transform", "translate(-19, " + (pos - bbox.height / 2) + ")");
    }
  });
};
const draw = function(txt, id, ver, diagObj) {
  clear();
  const conf = index.getConfig();
  const gitGraphConfig = conf.gitGraph;
  index.log$1.debug("in gitgraph renderer", txt + "\n", "id:", id, ver);
  allCommitsDict = diagObj.db.getCommits();
  const branches2 = diagObj.db.getBranchesAsObjArray();
  dir = diagObj.db.getDirection();
  const diagram2 = index.select(`[id="${id}"]`);
  let pos = 0;
  branches2.forEach((branch2, index) => {
    const labelElement = drawText(branch2.name);
    const g = diagram2.append("g");
    const branchLabel = g.insert("g").attr("class", "branchLabel");
    const label = branchLabel.insert("g").attr("class", "label branch-label");
    label.node().appendChild(labelElement);
    let bbox = labelElement.getBBox();
    branchPos[branch2.name] = { pos, index };
    pos += 50 + (gitGraphConfig.rotateCommitLabel ? 40 : 0) + (dir === "TB" ? bbox.width / 2 : 0);
    label.remove();
    branchLabel.remove();
    g.remove();
  });
  drawCommits(diagram2, allCommitsDict, false);
  if (gitGraphConfig.showBranches) {
    drawBranches(diagram2, branches2);
  }
  drawArrows(diagram2, allCommitsDict);
  drawCommits(diagram2, allCommitsDict, true);
  index.utils.insertTitle(
    diagram2,
    "gitTitleText",
    gitGraphConfig.titleTopMargin,
    diagObj.db.getDiagramTitle()
  );
  index.setupGraphViewbox(
    void 0,
    diagram2,
    gitGraphConfig.diagramPadding,
    gitGraphConfig.useMaxWidth ?? conf.useMaxWidth
  );
};
const gitGraphRenderer = {
  draw
};
const getStyles = (options2) => `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0, 1, 2, 3, 4, 5, 6, 7].map(
  (i) => `
        .branch-label${i} { fill: ${options2["gitBranchLabel" + i]}; }
        .commit${i} { stroke: ${options2["git" + i]}; fill: ${options2["git" + i]}; }
        .commit-highlight${i} { stroke: ${options2["gitInv" + i]}; fill: ${options2["gitInv" + i]}; }
        .label${i}  { fill: ${options2["git" + i]}; }
        .arrow${i} { stroke: ${options2["git" + i]}; }
        `
).join("\n")}

  .branch {
    stroke-width: 1;
    stroke: ${options2.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${options2.commitLabelFontSize}; fill: ${options2.commitLabelColor};}
  .commit-label-bkg { font-size: ${options2.commitLabelFontSize}; fill: ${options2.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${options2.tagLabelFontSize}; fill: ${options2.tagLabelColor};}
  .tag-label-bkg { fill: ${options2.tagLabelBackground}; stroke: ${options2.tagLabelBorder}; }
  .tag-hole { fill: ${options2.textColor}; }

  .commit-merge {
    stroke: ${options2.primaryColor};
    fill: ${options2.primaryColor};
  }
  .commit-reverse {
    stroke: ${options2.primaryColor};
    fill: ${options2.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${options2.primaryColor};
    fill: ${options2.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${options2.textColor};
  }
`;
const gitGraphStyles = getStyles;
const diagram = {
  parser: gitGraphParser,
  db: gitGraphDb,
  renderer: gitGraphRenderer,
  styles: gitGraphStyles
};

exports.diagram = diagram;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0R3JhcGhEaWFncmFtLTcyY2YzMmVlLWU3NmYyZTRlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvbWVybWFpZC9kaXN0L2dpdEdyYXBoRGlhZ3JhbS03MmNmMzJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjIGFzIGdldENvbmZpZywgcyBhcyBzZXRBY2NUaXRsZSwgZyBhcyBnZXRBY2NUaXRsZSwgYSBhcyBnZXRBY2NEZXNjcmlwdGlvbiwgYiBhcyBzZXRBY2NEZXNjcmlwdGlvbiwgcSBhcyBzZXREaWFncmFtVGl0bGUsIHQgYXMgZ2V0RGlhZ3JhbVRpdGxlLCBsIGFzIGxvZywgZSBhcyBjb21tb24sIHYgYXMgY2xlYXIkMiwgeSBhcyByYW5kb20sIHUgYXMgdXRpbHMsIHogYXMgc2V0dXBHcmFwaFZpZXdib3ggfSBmcm9tIFwiLi9tZXJtYWlkLWI1ODYwYjU0LmpzXCI7XG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tIFwiZDNcIjtcbmltcG9ydCBcInRzLWRlZGVudFwiO1xuaW1wb3J0IFwiZGF5anNcIjtcbmltcG9ydCBcIkBicmFpbnRyZWUvc2FuaXRpemUtdXJsXCI7XG5pbXBvcnQgXCJkb21wdXJpZnlcIjtcbmltcG9ydCBcImtocm9tYVwiO1xuaW1wb3J0IFwibG9kYXNoLWVzL21lbW9pemUuanNcIjtcbmltcG9ydCBcImxvZGFzaC1lcy9tZXJnZS5qc1wiO1xuaW1wb3J0IFwic3R5bGlzXCI7XG5pbXBvcnQgXCJsb2Rhc2gtZXMvaXNFbXB0eS5qc1wiO1xudmFyIHBhcnNlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbyA9IGZ1bmN0aW9uKGssIHYsIG8yLCBsKSB7XG4gICAgZm9yIChvMiA9IG8yIHx8IHt9LCBsID0gay5sZW5ndGg7IGwtLTsgbzJba1tsXV0gPSB2KVxuICAgICAgO1xuICAgIHJldHVybiBvMjtcbiAgfSwgJFYwID0gWzEsIDNdLCAkVjEgPSBbMSwgNl0sICRWMiA9IFsxLCA0XSwgJFYzID0gWzEsIDVdLCAkVjQgPSBbMiwgNV0sICRWNSA9IFsxLCAxMl0sICRWNiA9IFs1LCA3LCAxMywgMTksIDIxLCAyMywgMjQsIDI2LCAyOCwgMzEsIDM3LCA0MCwgNDddLCAkVjcgPSBbNywgMTMsIDE5LCAyMSwgMjMsIDI0LCAyNiwgMjgsIDMxLCAzNywgNDBdLCAkVjggPSBbNywgMTIsIDEzLCAxOSwgMjEsIDIzLCAyNCwgMjYsIDI4LCAzMSwgMzcsIDQwXSwgJFY5ID0gWzcsIDEzLCA0N10sICRWYSA9IFsxLCA0Ml0sICRWYiA9IFsxLCA0MV0sICRWYyA9IFs3LCAxMywgMjksIDMyLCAzNSwgMzgsIDQ3XSwgJFZkID0gWzEsIDU1XSwgJFZlID0gWzEsIDU2XSwgJFZmID0gWzEsIDU3XSwgJFZnID0gWzcsIDEzLCAzMiwgMzUsIDQyLCA0N107XG4gIHZhciBwYXJzZXIyID0ge1xuICAgIHRyYWNlOiBmdW5jdGlvbiB0cmFjZSgpIHtcbiAgICB9LFxuICAgIHl5OiB7fSxcbiAgICBzeW1ib2xzXzogeyBcImVycm9yXCI6IDIsIFwic3RhcnRcIjogMywgXCJlb2xcIjogNCwgXCJHR1wiOiA1LCBcImRvY3VtZW50XCI6IDYsIFwiRU9GXCI6IDcsIFwiOlwiOiA4LCBcIkRJUlwiOiA5LCBcIm9wdGlvbnNcIjogMTAsIFwiYm9keVwiOiAxMSwgXCJPUFRcIjogMTIsIFwiTkxcIjogMTMsIFwibGluZVwiOiAxNCwgXCJzdGF0ZW1lbnRcIjogMTUsIFwiY29tbWl0U3RhdGVtZW50XCI6IDE2LCBcIm1lcmdlU3RhdGVtZW50XCI6IDE3LCBcImNoZXJyeVBpY2tTdGF0ZW1lbnRcIjogMTgsIFwiYWNjX3RpdGxlXCI6IDE5LCBcImFjY190aXRsZV92YWx1ZVwiOiAyMCwgXCJhY2NfZGVzY3JcIjogMjEsIFwiYWNjX2Rlc2NyX3ZhbHVlXCI6IDIyLCBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIjogMjMsIFwic2VjdGlvblwiOiAyNCwgXCJicmFuY2hTdGF0ZW1lbnRcIjogMjUsIFwiQ0hFQ0tPVVRcIjogMjYsIFwicmVmXCI6IDI3LCBcIkJSQU5DSFwiOiAyOCwgXCJPUkRFUlwiOiAyOSwgXCJOVU1cIjogMzAsIFwiQ0hFUlJZX1BJQ0tcIjogMzEsIFwiQ09NTUlUX0lEXCI6IDMyLCBcIlNUUlwiOiAzMywgXCJQQVJFTlRfQ09NTUlUXCI6IDM0LCBcIkNPTU1JVF9UQUdcIjogMzUsIFwiRU1QVFlTVFJcIjogMzYsIFwiTUVSR0VcIjogMzcsIFwiQ09NTUlUX1RZUEVcIjogMzgsIFwiY29tbWl0VHlwZVwiOiAzOSwgXCJDT01NSVRcIjogNDAsIFwiY29tbWl0X2FyZ1wiOiA0MSwgXCJDT01NSVRfTVNHXCI6IDQyLCBcIk5PUk1BTFwiOiA0MywgXCJSRVZFUlNFXCI6IDQ0LCBcIkhJR0hMSUdIVFwiOiA0NSwgXCJJRFwiOiA0NiwgXCI7XCI6IDQ3LCBcIiRhY2NlcHRcIjogMCwgXCIkZW5kXCI6IDEgfSxcbiAgICB0ZXJtaW5hbHNfOiB7IDI6IFwiZXJyb3JcIiwgNTogXCJHR1wiLCA3OiBcIkVPRlwiLCA4OiBcIjpcIiwgOTogXCJESVJcIiwgMTI6IFwiT1BUXCIsIDEzOiBcIk5MXCIsIDE5OiBcImFjY190aXRsZVwiLCAyMDogXCJhY2NfdGl0bGVfdmFsdWVcIiwgMjE6IFwiYWNjX2Rlc2NyXCIsIDIyOiBcImFjY19kZXNjcl92YWx1ZVwiLCAyMzogXCJhY2NfZGVzY3JfbXVsdGlsaW5lX3ZhbHVlXCIsIDI0OiBcInNlY3Rpb25cIiwgMjY6IFwiQ0hFQ0tPVVRcIiwgMjg6IFwiQlJBTkNIXCIsIDI5OiBcIk9SREVSXCIsIDMwOiBcIk5VTVwiLCAzMTogXCJDSEVSUllfUElDS1wiLCAzMjogXCJDT01NSVRfSURcIiwgMzM6IFwiU1RSXCIsIDM0OiBcIlBBUkVOVF9DT01NSVRcIiwgMzU6IFwiQ09NTUlUX1RBR1wiLCAzNjogXCJFTVBUWVNUUlwiLCAzNzogXCJNRVJHRVwiLCAzODogXCJDT01NSVRfVFlQRVwiLCA0MDogXCJDT01NSVRcIiwgNDI6IFwiQ09NTUlUX01TR1wiLCA0MzogXCJOT1JNQUxcIiwgNDQ6IFwiUkVWRVJTRVwiLCA0NTogXCJISUdITElHSFRcIiwgNDY6IFwiSURcIiwgNDc6IFwiO1wiIH0sXG4gICAgcHJvZHVjdGlvbnNfOiBbMCwgWzMsIDJdLCBbMywgM10sIFszLCA0XSwgWzMsIDVdLCBbNiwgMF0sIFs2LCAyXSwgWzEwLCAyXSwgWzEwLCAxXSwgWzExLCAwXSwgWzExLCAyXSwgWzE0LCAyXSwgWzE0LCAxXSwgWzE1LCAxXSwgWzE1LCAxXSwgWzE1LCAxXSwgWzE1LCAyXSwgWzE1LCAyXSwgWzE1LCAxXSwgWzE1LCAxXSwgWzE1LCAxXSwgWzE1LCAyXSwgWzI1LCAyXSwgWzI1LCA0XSwgWzE4LCAzXSwgWzE4LCA1XSwgWzE4LCA1XSwgWzE4LCA3XSwgWzE4LCA3XSwgWzE4LCA1XSwgWzE4LCA1XSwgWzE4LCA1XSwgWzE4LCA3XSwgWzE4LCA3XSwgWzE4LCA3XSwgWzE4LCA3XSwgWzE3LCAyXSwgWzE3LCA0XSwgWzE3LCA0XSwgWzE3LCA0XSwgWzE3LCA2XSwgWzE3LCA2XSwgWzE3LCA2XSwgWzE3LCA2XSwgWzE3LCA2XSwgWzE3LCA2XSwgWzE3LCA4XSwgWzE3LCA4XSwgWzE3LCA4XSwgWzE3LCA4XSwgWzE3LCA4XSwgWzE3LCA4XSwgWzE2LCAyXSwgWzE2LCAzXSwgWzE2LCAzXSwgWzE2LCA1XSwgWzE2LCA1XSwgWzE2LCAzXSwgWzE2LCA1XSwgWzE2LCA1XSwgWzE2LCA1XSwgWzE2LCA1XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCAzXSwgWzE2LCA1XSwgWzE2LCA1XSwgWzE2LCA1XSwgWzE2LCA1XSwgWzE2LCA1XSwgWzE2LCA1XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA3XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzE2LCA5XSwgWzQxLCAwXSwgWzQxLCAxXSwgWzM5LCAxXSwgWzM5LCAxXSwgWzM5LCAxXSwgWzI3LCAxXSwgWzI3LCAxXSwgWzQsIDFdLCBbNCwgMV0sIFs0LCAxXV0sXG4gICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24gYW5vbnltb3VzKHl5dGV4dCwgeXlsZW5nLCB5eWxpbmVubywgeXksIHl5c3RhdGUsICQkLCBfJCkge1xuICAgICAgdmFyICQwID0gJCQubGVuZ3RoIC0gMTtcbiAgICAgIHN3aXRjaCAoeXlzdGF0ZSkge1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuICQkWyQwXTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiAkJFskMCAtIDFdO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgeXkuc2V0RGlyZWN0aW9uKCQkWyQwIC0gM10pO1xuICAgICAgICAgIHJldHVybiAkJFskMCAtIDFdO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgeXkuc2V0T3B0aW9ucygkJFskMCAtIDFdKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAkJFskMCAtIDFdICs9ICQkWyQwXTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMCAtIDFdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgdGhpcy4kID0gW107XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDAgLSAxXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMCAtIDFdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXS50cmltKCk7XG4gICAgICAgICAgeXkuc2V0QWNjVGl0bGUodGhpcy4kKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0udHJpbSgpO1xuICAgICAgICAgIHl5LnNldEFjY0Rlc2NyaXB0aW9uKHRoaXMuJCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgeXkuYWRkU2VjdGlvbigkJFskMF0uc3Vic3RyKDgpKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0uc3Vic3RyKDgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgIHl5LmNoZWNrb3V0KCQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgeXkuYnJhbmNoKCQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgeXkuYnJhbmNoKCQkWyQwIC0gMl0sICQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgeXkuY2hlcnJ5UGljaygkJFskMF0sIFwiXCIsIHZvaWQgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgeXkuY2hlcnJ5UGljaygkJFskMCAtIDJdLCBcIlwiLCB2b2lkIDAsICQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgeXkuY2hlcnJ5UGljaygkJFskMCAtIDJdLCBcIlwiLCAkJFskMF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgIHl5LmNoZXJyeVBpY2soJCRbJDAgLSA0XSwgXCJcIiwgJCRbJDBdLCAkJFskMCAtIDJdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICB5eS5jaGVycnlQaWNrKCQkWyQwIC0gNF0sIFwiXCIsICQkWyQwIC0gMl0sICQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgeXkuY2hlcnJ5UGljaygkJFskMF0sIFwiXCIsICQkWyQwIC0gMl0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgIHl5LmNoZXJyeVBpY2soJCRbJDBdLCBcIlwiLCBcIlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICB5eS5jaGVycnlQaWNrKCQkWyQwIC0gMl0sIFwiXCIsIFwiXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgIHl5LmNoZXJyeVBpY2soJCRbJDAgLSA0XSwgXCJcIiwgXCJcIiwgJCRbJDAgLSAyXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgeXkuY2hlcnJ5UGljaygkJFskMCAtIDRdLCBcIlwiLCBcIlwiLCAkJFskMF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgIHl5LmNoZXJyeVBpY2soJCRbJDAgLSAyXSwgXCJcIiwgJCRbJDAgLSA0XSwgJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNTpcbiAgICAgICAgICB5eS5jaGVycnlQaWNrKCQkWyQwIC0gMl0sIFwiXCIsIFwiXCIsICQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzY6XG4gICAgICAgICAgeXkubWVyZ2UoJCRbJDBdLCBcIlwiLCBcIlwiLCBcIlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICB5eS5tZXJnZSgkJFskMCAtIDJdLCAkJFskMF0sIFwiXCIsIFwiXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgIHl5Lm1lcmdlKCQkWyQwIC0gMl0sIFwiXCIsICQkWyQwXSwgXCJcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgeXkubWVyZ2UoJCRbJDAgLSAyXSwgXCJcIiwgXCJcIiwgJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICB5eS5tZXJnZSgkJFskMCAtIDRdLCAkJFskMF0sIFwiXCIsICQkWyQwIC0gMl0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgIHl5Lm1lcmdlKCQkWyQwIC0gNF0sIFwiXCIsICQkWyQwXSwgJCRbJDAgLSAyXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgeXkubWVyZ2UoJCRbJDAgLSA0XSwgXCJcIiwgJCRbJDAgLSAyXSwgJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0MzpcbiAgICAgICAgICB5eS5tZXJnZSgkJFskMCAtIDRdLCAkJFskMCAtIDJdLCAkJFskMF0sIFwiXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgIHl5Lm1lcmdlKCQkWyQwIC0gNF0sICQkWyQwIC0gMl0sIFwiXCIsICQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgeXkubWVyZ2UoJCRbJDAgLSA0XSwgJCRbJDBdLCAkJFskMCAtIDJdLCBcIlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0NjpcbiAgICAgICAgICB5eS5tZXJnZSgkJFskMCAtIDZdLCAkJFskMCAtIDRdLCAkJFskMCAtIDJdLCAkJFskMF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgIHl5Lm1lcmdlKCQkWyQwIC0gNl0sICQkWyQwXSwgJCRbJDAgLSA0XSwgJCRbJDAgLSAyXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDg6XG4gICAgICAgICAgeXkubWVyZ2UoJCRbJDAgLSA2XSwgJCRbJDAgLSA0XSwgJCRbJDBdLCAkJFskMCAtIDJdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OTpcbiAgICAgICAgICB5eS5tZXJnZSgkJFskMCAtIDZdLCAkJFskMCAtIDJdLCAkJFskMCAtIDRdLCAkJFskMF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDUwOlxuICAgICAgICAgIHl5Lm1lcmdlKCQkWyQwIC0gNl0sICQkWyQwXSwgJCRbJDAgLSAyXSwgJCRbJDAgLSA0XSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTE6XG4gICAgICAgICAgeXkubWVyZ2UoJCRbJDAgLSA2XSwgJCRbJDAgLSAyXSwgJCRbJDBdLCAkJFskMCAtIDRdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1MjpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1MzpcbiAgICAgICAgICB5eS5jb21taXQoXCJcIiwgXCJcIiwgeXkuY29tbWl0VHlwZS5OT1JNQUwsICQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTQ6XG4gICAgICAgICAgeXkuY29tbWl0KFwiXCIsIFwiXCIsICQkWyQwXSwgXCJcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTU6XG4gICAgICAgICAgeXkuY29tbWl0KFwiXCIsIFwiXCIsICQkWyQwXSwgJCRbJDAgLSAyXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTY6XG4gICAgICAgICAgeXkuY29tbWl0KFwiXCIsIFwiXCIsICQkWyQwIC0gMl0sICQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTc6XG4gICAgICAgICAgeXkuY29tbWl0KFwiXCIsICQkWyQwXSwgeXkuY29tbWl0VHlwZS5OT1JNQUwsIFwiXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgIHl5LmNvbW1pdChcIlwiLCAkJFskMCAtIDJdLCB5eS5jb21taXRUeXBlLk5PUk1BTCwgJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICB5eS5jb21taXQoXCJcIiwgJCRbJDBdLCB5eS5jb21taXRUeXBlLk5PUk1BTCwgJCRbJDAgLSAyXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjA6XG4gICAgICAgICAgeXkuY29tbWl0KFwiXCIsICQkWyQwIC0gMl0sICQkWyQwXSwgXCJcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjE6XG4gICAgICAgICAgeXkuY29tbWl0KFwiXCIsICQkWyQwXSwgJCRbJDAgLSAyXSwgXCJcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjI6XG4gICAgICAgICAgeXkuY29tbWl0KFwiXCIsICQkWyQwIC0gNF0sICQkWyQwIC0gMl0sICQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjM6XG4gICAgICAgICAgeXkuY29tbWl0KFwiXCIsICQkWyQwIC0gNF0sICQkWyQwXSwgJCRbJDAgLSAyXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgeXkuY29tbWl0KFwiXCIsICQkWyQwIC0gMl0sICQkWyQwIC0gNF0sICQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjU6XG4gICAgICAgICAgeXkuY29tbWl0KFwiXCIsICQkWyQwXSwgJCRbJDAgLSA0XSwgJCRbJDAgLSAyXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjY6XG4gICAgICAgICAgeXkuY29tbWl0KFwiXCIsICQkWyQwXSwgJCRbJDAgLSAyXSwgJCRbJDAgLSA0XSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjc6XG4gICAgICAgICAgeXkuY29tbWl0KFwiXCIsICQkWyQwIC0gMl0sICQkWyQwXSwgJCRbJDAgLSA0XSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjg6XG4gICAgICAgICAgeXkuY29tbWl0KCQkWyQwXSwgXCJcIiwgeXkuY29tbWl0VHlwZS5OT1JNQUwsIFwiXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY5OlxuICAgICAgICAgIHl5LmNvbW1pdCgkJFskMF0sIFwiXCIsIHl5LmNvbW1pdFR5cGUuTk9STUFMLCAkJFskMCAtIDJdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3MDpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSAyXSwgXCJcIiwgeXkuY29tbWl0VHlwZS5OT1JNQUwsICQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzE6XG4gICAgICAgICAgeXkuY29tbWl0KCQkWyQwIC0gMl0sIFwiXCIsICQkWyQwXSwgXCJcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzI6XG4gICAgICAgICAgeXkuY29tbWl0KCQkWyQwXSwgXCJcIiwgJCRbJDAgLSAyXSwgXCJcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzM6XG4gICAgICAgICAgeXkuY29tbWl0KCQkWyQwXSwgJCRbJDAgLSAyXSwgeXkuY29tbWl0VHlwZS5OT1JNQUwsIFwiXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc0OlxuICAgICAgICAgIHl5LmNvbW1pdCgkJFskMCAtIDJdLCAkJFskMF0sIHl5LmNvbW1pdFR5cGUuTk9STUFMLCBcIlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3NTpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSA0XSwgXCJcIiwgJCRbJDAgLSAyXSwgJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3NjpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSA0XSwgXCJcIiwgJCRbJDBdLCAkJFskMCAtIDJdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3NzpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSAyXSwgXCJcIiwgJCRbJDAgLSA0XSwgJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3ODpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDBdLCBcIlwiLCAkJFskMCAtIDRdLCAkJFskMCAtIDJdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OTpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDBdLCBcIlwiLCAkJFskMCAtIDJdLCAkJFskMCAtIDRdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4MDpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSAyXSwgXCJcIiwgJCRbJDBdLCAkJFskMCAtIDRdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4MTpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSA0XSwgJCRbJDBdLCAkJFskMCAtIDJdLCBcIlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4MjpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSA0XSwgJCRbJDAgLSAyXSwgJCRbJDBdLCBcIlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4MzpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSAyXSwgJCRbJDBdLCAkJFskMCAtIDRdLCBcIlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4NDpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDBdLCAkJFskMCAtIDJdLCAkJFskMCAtIDRdLCBcIlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4NTpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDBdLCAkJFskMCAtIDRdLCAkJFskMCAtIDJdLCBcIlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4NjpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSAyXSwgJCRbJDAgLSA0XSwgJCRbJDBdLCBcIlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4NzpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSA0XSwgJCRbJDBdLCB5eS5jb21taXRUeXBlLk5PUk1BTCwgJCRbJDAgLSAyXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODg6XG4gICAgICAgICAgeXkuY29tbWl0KCQkWyQwIC0gNF0sICQkWyQwIC0gMl0sIHl5LmNvbW1pdFR5cGUuTk9STUFMLCAkJFskMF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg5OlxuICAgICAgICAgIHl5LmNvbW1pdCgkJFskMCAtIDJdLCAkJFskMF0sIHl5LmNvbW1pdFR5cGUuTk9STUFMLCAkJFskMCAtIDRdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5MDpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDBdLCAkJFskMCAtIDJdLCB5eS5jb21taXRUeXBlLk5PUk1BTCwgJCRbJDAgLSA0XSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgeXkuY29tbWl0KCQkWyQwXSwgJCRbJDAgLSA0XSwgeXkuY29tbWl0VHlwZS5OT1JNQUwsICQkWyQwIC0gMl0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDkyOlxuICAgICAgICAgIHl5LmNvbW1pdCgkJFskMCAtIDJdLCAkJFskMCAtIDRdLCB5eS5jb21taXRUeXBlLk5PUk1BTCwgJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5MzpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSA2XSwgJCRbJDAgLSA0XSwgJCRbJDAgLSAyXSwgJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5NDpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSA2XSwgJCRbJDAgLSA0XSwgJCRbJDBdLCAkJFskMCAtIDJdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5NTpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSA2XSwgJCRbJDAgLSAyXSwgJCRbJDAgLSA0XSwgJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5NjpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSA2XSwgJCRbJDBdLCAkJFskMCAtIDRdLCAkJFskMCAtIDJdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5NzpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSA2XSwgJCRbJDAgLSAyXSwgJCRbJDBdLCAkJFskMCAtIDRdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSA2XSwgJCRbJDBdLCAkJFskMCAtIDJdLCAkJFskMCAtIDRdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OTpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSA0XSwgJCRbJDAgLSA2XSwgJCRbJDAgLSAyXSwgJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgeXkuY29tbWl0KCQkWyQwIC0gNF0sICQkWyQwIC0gNl0sICQkWyQwXSwgJCRbJDAgLSAyXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTAxOlxuICAgICAgICAgIHl5LmNvbW1pdCgkJFskMCAtIDJdLCAkJFskMCAtIDZdLCAkJFskMCAtIDRdLCAkJFskMF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDBdLCAkJFskMCAtIDZdLCAkJFskMCAtIDRdLCAkJFskMCAtIDJdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDM6XG4gICAgICAgICAgeXkuY29tbWl0KCQkWyQwIC0gMl0sICQkWyQwIC0gNl0sICQkWyQwXSwgJCRbJDAgLSA0XSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA0OlxuICAgICAgICAgIHl5LmNvbW1pdCgkJFskMF0sICQkWyQwIC0gNl0sICQkWyQwIC0gMl0sICQkWyQwIC0gNF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwNTpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDBdLCAkJFskMCAtIDRdLCAkJFskMCAtIDJdLCAkJFskMCAtIDZdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDY6XG4gICAgICAgICAgeXkuY29tbWl0KCQkWyQwIC0gMl0sICQkWyQwIC0gNF0sICQkWyQwXSwgJCRbJDAgLSA2XSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA3OlxuICAgICAgICAgIHl5LmNvbW1pdCgkJFskMF0sICQkWyQwIC0gMl0sICQkWyQwIC0gNF0sICQkWyQwIC0gNl0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSAyXSwgJCRbJDBdLCAkJFskMCAtIDRdLCAkJFskMCAtIDZdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgeXkuY29tbWl0KCQkWyQwIC0gNF0sICQkWyQwIC0gMl0sICQkWyQwXSwgJCRbJDAgLSA2XSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTEwOlxuICAgICAgICAgIHl5LmNvbW1pdCgkJFskMCAtIDRdLCAkJFskMF0sICQkWyQwIC0gMl0sICQkWyQwIC0gNl0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExMTpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDAgLSAyXSwgJCRbJDAgLSA0XSwgJCRbJDAgLSA2XSwgJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTI6XG4gICAgICAgICAgeXkuY29tbWl0KCQkWyQwXSwgJCRbJDAgLSA0XSwgJCRbJDAgLSA2XSwgJCRbJDAgLSAyXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTEzOlxuICAgICAgICAgIHl5LmNvbW1pdCgkJFskMCAtIDJdLCAkJFskMF0sICQkWyQwIC0gNl0sICQkWyQwIC0gNF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExNDpcbiAgICAgICAgICB5eS5jb21taXQoJCRbJDBdLCAkJFskMCAtIDJdLCAkJFskMCAtIDZdLCAkJFskMCAtIDRdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgeXkuY29tbWl0KCQkWyQwIC0gNF0sICQkWyQwIC0gMl0sICQkWyQwIC0gNl0sICQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE2OlxuICAgICAgICAgIHl5LmNvbW1pdCgkJFskMCAtIDRdLCAkJFskMF0sICQkWyQwIC0gNl0sICQkWyQwIC0gMl0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExNzpcbiAgICAgICAgICB0aGlzLiQgPSBcIlwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExODpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE5OlxuICAgICAgICAgIHRoaXMuJCA9IHl5LmNvbW1pdFR5cGUuTk9STUFMO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyMDpcbiAgICAgICAgICB0aGlzLiQgPSB5eS5jb21taXRUeXBlLlJFVkVSU0U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTIxOlxuICAgICAgICAgIHRoaXMuJCA9IHl5LmNvbW1pdFR5cGUuSElHSExJR0hUO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gICAgdGFibGU6IFt7IDM6IDEsIDQ6IDIsIDU6ICRWMCwgNzogJFYxLCAxMzogJFYyLCA0NzogJFYzIH0sIHsgMTogWzNdIH0sIHsgMzogNywgNDogMiwgNTogJFYwLCA3OiAkVjEsIDEzOiAkVjIsIDQ3OiAkVjMgfSwgeyA2OiA4LCA3OiAkVjQsIDg6IFsxLCA5XSwgOTogWzEsIDEwXSwgMTA6IDExLCAxMzogJFY1IH0sIG8oJFY2LCBbMiwgMTI0XSksIG8oJFY2LCBbMiwgMTI1XSksIG8oJFY2LCBbMiwgMTI2XSksIHsgMTogWzIsIDFdIH0sIHsgNzogWzEsIDEzXSB9LCB7IDY6IDE0LCA3OiAkVjQsIDEwOiAxMSwgMTM6ICRWNSB9LCB7IDg6IFsxLCAxNV0gfSwgbygkVjcsIFsyLCA5XSwgeyAxMTogMTYsIDEyOiBbMSwgMTddIH0pLCBvKCRWOCwgWzIsIDhdKSwgeyAxOiBbMiwgMl0gfSwgeyA3OiBbMSwgMThdIH0sIHsgNjogMTksIDc6ICRWNCwgMTA6IDExLCAxMzogJFY1IH0sIHsgNzogWzIsIDZdLCAxMzogWzEsIDIyXSwgMTQ6IDIwLCAxNTogMjEsIDE2OiAyMywgMTc6IDI0LCAxODogMjUsIDE5OiBbMSwgMjZdLCAyMTogWzEsIDI3XSwgMjM6IFsxLCAyOF0sIDI0OiBbMSwgMjldLCAyNTogMzAsIDI2OiBbMSwgMzFdLCAyODogWzEsIDM1XSwgMzE6IFsxLCAzNF0sIDM3OiBbMSwgMzNdLCA0MDogWzEsIDMyXSB9LCBvKCRWOCwgWzIsIDddKSwgeyAxOiBbMiwgM10gfSwgeyA3OiBbMSwgMzZdIH0sIG8oJFY3LCBbMiwgMTBdKSwgeyA0OiAzNywgNzogJFYxLCAxMzogJFYyLCA0NzogJFYzIH0sIG8oJFY3LCBbMiwgMTJdKSwgbygkVjksIFsyLCAxM10pLCBvKCRWOSwgWzIsIDE0XSksIG8oJFY5LCBbMiwgMTVdKSwgeyAyMDogWzEsIDM4XSB9LCB7IDIyOiBbMSwgMzldIH0sIG8oJFY5LCBbMiwgMThdKSwgbygkVjksIFsyLCAxOV0pLCBvKCRWOSwgWzIsIDIwXSksIHsgMjc6IDQwLCAzMzogJFZhLCA0NjogJFZiIH0sIG8oJFY5LCBbMiwgMTE3XSwgeyA0MTogNDMsIDMyOiBbMSwgNDZdLCAzMzogWzEsIDQ4XSwgMzU6IFsxLCA0NF0sIDM4OiBbMSwgNDVdLCA0MjogWzEsIDQ3XSB9KSwgeyAyNzogNDksIDMzOiAkVmEsIDQ2OiAkVmIgfSwgeyAzMjogWzEsIDUwXSwgMzU6IFsxLCA1MV0gfSwgeyAyNzogNTIsIDMzOiAkVmEsIDQ2OiAkVmIgfSwgeyAxOiBbMiwgNF0gfSwgbygkVjcsIFsyLCAxMV0pLCBvKCRWOSwgWzIsIDE2XSksIG8oJFY5LCBbMiwgMTddKSwgbygkVjksIFsyLCAyMV0pLCBvKCRWYywgWzIsIDEyMl0pLCBvKCRWYywgWzIsIDEyM10pLCBvKCRWOSwgWzIsIDUyXSksIHsgMzM6IFsxLCA1M10gfSwgeyAzOTogNTQsIDQzOiAkVmQsIDQ0OiAkVmUsIDQ1OiAkVmYgfSwgeyAzMzogWzEsIDU4XSB9LCB7IDMzOiBbMSwgNTldIH0sIG8oJFY5LCBbMiwgMTE4XSksIG8oJFY5LCBbMiwgMzZdLCB7IDMyOiBbMSwgNjBdLCAzNTogWzEsIDYyXSwgMzg6IFsxLCA2MV0gfSksIHsgMzM6IFsxLCA2M10gfSwgeyAzMzogWzEsIDY0XSwgMzY6IFsxLCA2NV0gfSwgbygkVjksIFsyLCAyMl0sIHsgMjk6IFsxLCA2Nl0gfSksIG8oJFY5LCBbMiwgNTNdLCB7IDMyOiBbMSwgNjhdLCAzODogWzEsIDY3XSwgNDI6IFsxLCA2OV0gfSksIG8oJFY5LCBbMiwgNTRdLCB7IDMyOiBbMSwgNzFdLCAzNTogWzEsIDcwXSwgNDI6IFsxLCA3Ml0gfSksIG8oJFZnLCBbMiwgMTE5XSksIG8oJFZnLCBbMiwgMTIwXSksIG8oJFZnLCBbMiwgMTIxXSksIG8oJFY5LCBbMiwgNTddLCB7IDM1OiBbMSwgNzNdLCAzODogWzEsIDc0XSwgNDI6IFsxLCA3NV0gfSksIG8oJFY5LCBbMiwgNjhdLCB7IDMyOiBbMSwgNzhdLCAzNTogWzEsIDc2XSwgMzg6IFsxLCA3N10gfSksIHsgMzM6IFsxLCA3OV0gfSwgeyAzOTogODAsIDQzOiAkVmQsIDQ0OiAkVmUsIDQ1OiAkVmYgfSwgeyAzMzogWzEsIDgxXSB9LCBvKCRWOSwgWzIsIDI0XSwgeyAzNDogWzEsIDgyXSwgMzU6IFsxLCA4M10gfSksIHsgMzI6IFsxLCA4NF0gfSwgeyAzMjogWzEsIDg1XSB9LCB7IDMwOiBbMSwgODZdIH0sIHsgMzk6IDg3LCA0MzogJFZkLCA0NDogJFZlLCA0NTogJFZmIH0sIHsgMzM6IFsxLCA4OF0gfSwgeyAzMzogWzEsIDg5XSB9LCB7IDMzOiBbMSwgOTBdIH0sIHsgMzM6IFsxLCA5MV0gfSwgeyAzMzogWzEsIDkyXSB9LCB7IDMzOiBbMSwgOTNdIH0sIHsgMzk6IDk0LCA0MzogJFZkLCA0NDogJFZlLCA0NTogJFZmIH0sIHsgMzM6IFsxLCA5NV0gfSwgeyAzMzogWzEsIDk2XSB9LCB7IDM5OiA5NywgNDM6ICRWZCwgNDQ6ICRWZSwgNDU6ICRWZiB9LCB7IDMzOiBbMSwgOThdIH0sIG8oJFY5LCBbMiwgMzddLCB7IDM1OiBbMSwgMTAwXSwgMzg6IFsxLCA5OV0gfSksIG8oJFY5LCBbMiwgMzhdLCB7IDMyOiBbMSwgMTAyXSwgMzU6IFsxLCAxMDFdIH0pLCBvKCRWOSwgWzIsIDM5XSwgeyAzMjogWzEsIDEwM10sIDM4OiBbMSwgMTA0XSB9KSwgeyAzMzogWzEsIDEwNV0gfSwgeyAzMzogWzEsIDEwNl0sIDM2OiBbMSwgMTA3XSB9LCB7IDMzOiBbMSwgMTA4XSB9LCB7IDMzOiBbMSwgMTA5XSB9LCBvKCRWOSwgWzIsIDIzXSksIG8oJFY5LCBbMiwgNTVdLCB7IDMyOiBbMSwgMTEwXSwgNDI6IFsxLCAxMTFdIH0pLCBvKCRWOSwgWzIsIDU5XSwgeyAzODogWzEsIDExMl0sIDQyOiBbMSwgMTEzXSB9KSwgbygkVjksIFsyLCA2OV0sIHsgMzI6IFsxLCAxMTVdLCAzODogWzEsIDExNF0gfSksIG8oJFY5LCBbMiwgNTZdLCB7IDMyOiBbMSwgMTE2XSwgNDI6IFsxLCAxMTddIH0pLCBvKCRWOSwgWzIsIDYxXSwgeyAzNTogWzEsIDExOF0sIDQyOiBbMSwgMTE5XSB9KSwgbygkVjksIFsyLCA3Ml0sIHsgMzI6IFsxLCAxMjFdLCAzNTogWzEsIDEyMF0gfSksIG8oJFY5LCBbMiwgNThdLCB7IDM4OiBbMSwgMTIyXSwgNDI6IFsxLCAxMjNdIH0pLCBvKCRWOSwgWzIsIDYwXSwgeyAzNTogWzEsIDEyNF0sIDQyOiBbMSwgMTI1XSB9KSwgbygkVjksIFsyLCA3M10sIHsgMzU6IFsxLCAxMjddLCAzODogWzEsIDEyNl0gfSksIG8oJFY5LCBbMiwgNzBdLCB7IDMyOiBbMSwgMTI5XSwgMzg6IFsxLCAxMjhdIH0pLCBvKCRWOSwgWzIsIDcxXSwgeyAzMjogWzEsIDEzMV0sIDM1OiBbMSwgMTMwXSB9KSwgbygkVjksIFsyLCA3NF0sIHsgMzU6IFsxLCAxMzNdLCAzODogWzEsIDEzMl0gfSksIHsgMzk6IDEzNCwgNDM6ICRWZCwgNDQ6ICRWZSwgNDU6ICRWZiB9LCB7IDMzOiBbMSwgMTM1XSB9LCB7IDMzOiBbMSwgMTM2XSB9LCB7IDMzOiBbMSwgMTM3XSB9LCB7IDMzOiBbMSwgMTM4XSB9LCB7IDM5OiAxMzksIDQzOiAkVmQsIDQ0OiAkVmUsIDQ1OiAkVmYgfSwgbygkVjksIFsyLCAyNV0sIHsgMzU6IFsxLCAxNDBdIH0pLCBvKCRWOSwgWzIsIDI2XSwgeyAzNDogWzEsIDE0MV0gfSksIG8oJFY5LCBbMiwgMzFdLCB7IDM0OiBbMSwgMTQyXSB9KSwgbygkVjksIFsyLCAyOV0sIHsgMzQ6IFsxLCAxNDNdIH0pLCBvKCRWOSwgWzIsIDMwXSwgeyAzNDogWzEsIDE0NF0gfSksIHsgMzM6IFsxLCAxNDVdIH0sIHsgMzM6IFsxLCAxNDZdIH0sIHsgMzk6IDE0NywgNDM6ICRWZCwgNDQ6ICRWZSwgNDU6ICRWZiB9LCB7IDMzOiBbMSwgMTQ4XSB9LCB7IDM5OiAxNDksIDQzOiAkVmQsIDQ0OiAkVmUsIDQ1OiAkVmYgfSwgeyAzMzogWzEsIDE1MF0gfSwgeyAzMzogWzEsIDE1MV0gfSwgeyAzMzogWzEsIDE1Ml0gfSwgeyAzMzogWzEsIDE1M10gfSwgeyAzMzogWzEsIDE1NF0gfSwgeyAzMzogWzEsIDE1NV0gfSwgeyAzMzogWzEsIDE1Nl0gfSwgeyAzOTogMTU3LCA0MzogJFZkLCA0NDogJFZlLCA0NTogJFZmIH0sIHsgMzM6IFsxLCAxNThdIH0sIHsgMzM6IFsxLCAxNTldIH0sIHsgMzM6IFsxLCAxNjBdIH0sIHsgMzk6IDE2MSwgNDM6ICRWZCwgNDQ6ICRWZSwgNDU6ICRWZiB9LCB7IDMzOiBbMSwgMTYyXSB9LCB7IDM5OiAxNjMsIDQzOiAkVmQsIDQ0OiAkVmUsIDQ1OiAkVmYgfSwgeyAzMzogWzEsIDE2NF0gfSwgeyAzMzogWzEsIDE2NV0gfSwgeyAzMzogWzEsIDE2Nl0gfSwgeyAzOTogMTY3LCA0MzogJFZkLCA0NDogJFZlLCA0NTogJFZmIH0sIHsgMzM6IFsxLCAxNjhdIH0sIG8oJFY5LCBbMiwgNDNdLCB7IDM1OiBbMSwgMTY5XSB9KSwgbygkVjksIFsyLCA0NF0sIHsgMzg6IFsxLCAxNzBdIH0pLCBvKCRWOSwgWzIsIDQyXSwgeyAzMjogWzEsIDE3MV0gfSksIG8oJFY5LCBbMiwgNDVdLCB7IDM1OiBbMSwgMTcyXSB9KSwgbygkVjksIFsyLCA0MF0sIHsgMzg6IFsxLCAxNzNdIH0pLCBvKCRWOSwgWzIsIDQxXSwgeyAzMjogWzEsIDE3NF0gfSksIHsgMzM6IFsxLCAxNzVdLCAzNjogWzEsIDE3Nl0gfSwgeyAzMzogWzEsIDE3N10gfSwgeyAzMzogWzEsIDE3OF0gfSwgeyAzMzogWzEsIDE3OV0gfSwgeyAzMzogWzEsIDE4MF0gfSwgbygkVjksIFsyLCA2Nl0sIHsgNDI6IFsxLCAxODFdIH0pLCBvKCRWOSwgWzIsIDc5XSwgeyAzMjogWzEsIDE4Ml0gfSksIG8oJFY5LCBbMiwgNjddLCB7IDQyOiBbMSwgMTgzXSB9KSwgbygkVjksIFsyLCA5MF0sIHsgMzg6IFsxLCAxODRdIH0pLCBvKCRWOSwgWzIsIDgwXSwgeyAzMjogWzEsIDE4NV0gfSksIG8oJFY5LCBbMiwgODldLCB7IDM4OiBbMSwgMTg2XSB9KSwgbygkVjksIFsyLCA2NV0sIHsgNDI6IFsxLCAxODddIH0pLCBvKCRWOSwgWzIsIDc4XSwgeyAzMjogWzEsIDE4OF0gfSksIG8oJFY5LCBbMiwgNjRdLCB7IDQyOiBbMSwgMTg5XSB9KSwgbygkVjksIFsyLCA4NF0sIHsgMzU6IFsxLCAxOTBdIH0pLCBvKCRWOSwgWzIsIDc3XSwgeyAzMjogWzEsIDE5MV0gfSksIG8oJFY5LCBbMiwgODNdLCB7IDM1OiBbMSwgMTkyXSB9KSwgbygkVjksIFsyLCA2M10sIHsgNDI6IFsxLCAxOTNdIH0pLCBvKCRWOSwgWzIsIDkxXSwgeyAzODogWzEsIDE5NF0gfSksIG8oJFY5LCBbMiwgNjJdLCB7IDQyOiBbMSwgMTk1XSB9KSwgbygkVjksIFsyLCA4NV0sIHsgMzU6IFsxLCAxOTZdIH0pLCBvKCRWOSwgWzIsIDg2XSwgeyAzNTogWzEsIDE5N10gfSksIG8oJFY5LCBbMiwgOTJdLCB7IDM4OiBbMSwgMTk4XSB9KSwgbygkVjksIFsyLCA3Nl0sIHsgMzI6IFsxLCAxOTldIH0pLCBvKCRWOSwgWzIsIDg3XSwgeyAzODogWzEsIDIwMF0gfSksIG8oJFY5LCBbMiwgNzVdLCB7IDMyOiBbMSwgMjAxXSB9KSwgbygkVjksIFsyLCA4MV0sIHsgMzU6IFsxLCAyMDJdIH0pLCBvKCRWOSwgWzIsIDgyXSwgeyAzNTogWzEsIDIwM10gfSksIG8oJFY5LCBbMiwgODhdLCB7IDM4OiBbMSwgMjA0XSB9KSwgeyAzMzogWzEsIDIwNV0gfSwgeyAzOTogMjA2LCA0MzogJFZkLCA0NDogJFZlLCA0NTogJFZmIH0sIHsgMzM6IFsxLCAyMDddIH0sIHsgMzM6IFsxLCAyMDhdIH0sIHsgMzk6IDIwOSwgNDM6ICRWZCwgNDQ6ICRWZSwgNDU6ICRWZiB9LCB7IDMzOiBbMSwgMjEwXSB9LCBvKCRWOSwgWzIsIDI3XSksIG8oJFY5LCBbMiwgMzJdKSwgbygkVjksIFsyLCAyOF0pLCBvKCRWOSwgWzIsIDMzXSksIG8oJFY5LCBbMiwgMzRdKSwgbygkVjksIFsyLCAzNV0pLCB7IDMzOiBbMSwgMjExXSB9LCB7IDMzOiBbMSwgMjEyXSB9LCB7IDMzOiBbMSwgMjEzXSB9LCB7IDM5OiAyMTQsIDQzOiAkVmQsIDQ0OiAkVmUsIDQ1OiAkVmYgfSwgeyAzMzogWzEsIDIxNV0gfSwgeyAzOTogMjE2LCA0MzogJFZkLCA0NDogJFZlLCA0NTogJFZmIH0sIHsgMzM6IFsxLCAyMTddIH0sIHsgMzM6IFsxLCAyMThdIH0sIHsgMzM6IFsxLCAyMTldIH0sIHsgMzM6IFsxLCAyMjBdIH0sIHsgMzM6IFsxLCAyMjFdIH0sIHsgMzM6IFsxLCAyMjJdIH0sIHsgMzM6IFsxLCAyMjNdIH0sIHsgMzk6IDIyNCwgNDM6ICRWZCwgNDQ6ICRWZSwgNDU6ICRWZiB9LCB7IDMzOiBbMSwgMjI1XSB9LCB7IDMzOiBbMSwgMjI2XSB9LCB7IDMzOiBbMSwgMjI3XSB9LCB7IDM5OiAyMjgsIDQzOiAkVmQsIDQ0OiAkVmUsIDQ1OiAkVmYgfSwgeyAzMzogWzEsIDIyOV0gfSwgeyAzOTogMjMwLCA0MzogJFZkLCA0NDogJFZlLCA0NTogJFZmIH0sIHsgMzM6IFsxLCAyMzFdIH0sIHsgMzM6IFsxLCAyMzJdIH0sIHsgMzM6IFsxLCAyMzNdIH0sIHsgMzk6IDIzNCwgNDM6ICRWZCwgNDQ6ICRWZSwgNDU6ICRWZiB9LCBvKCRWOSwgWzIsIDQ2XSksIG8oJFY5LCBbMiwgNDhdKSwgbygkVjksIFsyLCA0N10pLCBvKCRWOSwgWzIsIDQ5XSksIG8oJFY5LCBbMiwgNTFdKSwgbygkVjksIFsyLCA1MF0pLCBvKCRWOSwgWzIsIDEwN10pLCBvKCRWOSwgWzIsIDEwOF0pLCBvKCRWOSwgWzIsIDEwNV0pLCBvKCRWOSwgWzIsIDEwNl0pLCBvKCRWOSwgWzIsIDExMF0pLCBvKCRWOSwgWzIsIDEwOV0pLCBvKCRWOSwgWzIsIDExNF0pLCBvKCRWOSwgWzIsIDExM10pLCBvKCRWOSwgWzIsIDExMl0pLCBvKCRWOSwgWzIsIDExMV0pLCBvKCRWOSwgWzIsIDExNl0pLCBvKCRWOSwgWzIsIDExNV0pLCBvKCRWOSwgWzIsIDEwNF0pLCBvKCRWOSwgWzIsIDEwM10pLCBvKCRWOSwgWzIsIDEwMl0pLCBvKCRWOSwgWzIsIDEwMV0pLCBvKCRWOSwgWzIsIDk5XSksIG8oJFY5LCBbMiwgMTAwXSksIG8oJFY5LCBbMiwgOThdKSwgbygkVjksIFsyLCA5N10pLCBvKCRWOSwgWzIsIDk2XSksIG8oJFY5LCBbMiwgOTVdKSwgbygkVjksIFsyLCA5M10pLCBvKCRWOSwgWzIsIDk0XSldLFxuICAgIGRlZmF1bHRBY3Rpb25zOiB7IDc6IFsyLCAxXSwgMTM6IFsyLCAyXSwgMTg6IFsyLCAzXSwgMzY6IFsyLCA0XSB9LFxuICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XG4gICAgICBpZiAoaGFzaC5yZWNvdmVyYWJsZSkge1xuICAgICAgICB0aGlzLnRyYWNlKHN0cik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3Ioc3RyKTtcbiAgICAgICAgZXJyb3IuaGFzaCA9IGhhc2g7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsIHN0YWNrID0gWzBdLCB0c3RhY2sgPSBbXSwgdnN0YWNrID0gW251bGxdLCBsc3RhY2sgPSBbXSwgdGFibGUgPSB0aGlzLnRhYmxlLCB5eXRleHQgPSBcIlwiLCB5eWxpbmVubyA9IDAsIHl5bGVuZyA9IDAsIFRFUlJPUiA9IDIsIEVPRiA9IDE7XG4gICAgICB2YXIgYXJncyA9IGxzdGFjay5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICB2YXIgbGV4ZXIyID0gT2JqZWN0LmNyZWF0ZSh0aGlzLmxleGVyKTtcbiAgICAgIHZhciBzaGFyZWRTdGF0ZSA9IHsgeXk6IHt9IH07XG4gICAgICBmb3IgKHZhciBrIGluIHRoaXMueXkpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnl5LCBrKSkge1xuICAgICAgICAgIHNoYXJlZFN0YXRlLnl5W2tdID0gdGhpcy55eVtrXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV4ZXIyLnNldElucHV0KGlucHV0LCBzaGFyZWRTdGF0ZS55eSk7XG4gICAgICBzaGFyZWRTdGF0ZS55eS5sZXhlciA9IGxleGVyMjtcbiAgICAgIHNoYXJlZFN0YXRlLnl5LnBhcnNlciA9IHRoaXM7XG4gICAgICBpZiAodHlwZW9mIGxleGVyMi55eWxsb2MgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBsZXhlcjIueXlsbG9jID0ge307XG4gICAgICB9XG4gICAgICB2YXIgeXlsb2MgPSBsZXhlcjIueXlsbG9jO1xuICAgICAgbHN0YWNrLnB1c2goeXlsb2MpO1xuICAgICAgdmFyIHJhbmdlcyA9IGxleGVyMi5vcHRpb25zICYmIGxleGVyMi5vcHRpb25zLnJhbmdlcztcbiAgICAgIGlmICh0eXBlb2Ygc2hhcmVkU3RhdGUueXkucGFyc2VFcnJvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRoaXMucGFyc2VFcnJvciA9IHNoYXJlZFN0YXRlLnl5LnBhcnNlRXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhcnNlRXJyb3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykucGFyc2VFcnJvcjtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGxleCgpIHtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB0b2tlbiA9IHRzdGFjay5wb3AoKSB8fCBsZXhlcjIubGV4KCkgfHwgRU9GO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgaWYgKHRva2VuIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHRzdGFjayA9IHRva2VuO1xuICAgICAgICAgICAgdG9rZW4gPSB0c3RhY2sucG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRva2VuID0gc2VsZi5zeW1ib2xzX1t0b2tlbl0gfHwgdG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgfVxuICAgICAgdmFyIHN5bWJvbCwgc3RhdGUsIGFjdGlvbiwgciwgeXl2YWwgPSB7fSwgcCwgbGVuLCBuZXdTdGF0ZSwgZXhwZWN0ZWQ7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBzdGF0ZSA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0QWN0aW9uc1tzdGF0ZV0pIHtcbiAgICAgICAgICBhY3Rpb24gPSB0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc3ltYm9sID09PSBudWxsIHx8IHR5cGVvZiBzeW1ib2wgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgc3ltYm9sID0gbGV4KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFjdGlvbiA9IHRhYmxlW3N0YXRlXSAmJiB0YWJsZVtzdGF0ZV1bc3ltYm9sXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhYWN0aW9uLmxlbmd0aCB8fCAhYWN0aW9uWzBdKSB7XG4gICAgICAgICAgdmFyIGVyclN0ciA9IFwiXCI7XG4gICAgICAgICAgZXhwZWN0ZWQgPSBbXTtcbiAgICAgICAgICBmb3IgKHAgaW4gdGFibGVbc3RhdGVdKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ZXJtaW5hbHNfW3BdICYmIHAgPiBURVJST1IpIHtcbiAgICAgICAgICAgICAgZXhwZWN0ZWQucHVzaChcIidcIiArIHRoaXMudGVybWluYWxzX1twXSArIFwiJ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGxleGVyMi5zaG93UG9zaXRpb24pIHtcbiAgICAgICAgICAgIGVyclN0ciA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArICh5eWxpbmVubyArIDEpICsgXCI6XFxuXCIgKyBsZXhlcjIuc2hvd1Bvc2l0aW9uKCkgKyBcIlxcbkV4cGVjdGluZyBcIiArIGV4cGVjdGVkLmpvaW4oXCIsIFwiKSArIFwiLCBnb3QgJ1wiICsgKHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCkgKyBcIidcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjogVW5leHBlY3RlZCBcIiArIChzeW1ib2wgPT0gRU9GID8gXCJlbmQgb2YgaW5wdXRcIiA6IFwiJ1wiICsgKHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCkgKyBcIidcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucGFyc2VFcnJvcihlcnJTdHIsIHtcbiAgICAgICAgICAgIHRleHQ6IGxleGVyMi5tYXRjaCxcbiAgICAgICAgICAgIHRva2VuOiB0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wsXG4gICAgICAgICAgICBsaW5lOiBsZXhlcjIueXlsaW5lbm8sXG4gICAgICAgICAgICBsb2M6IHl5bG9jLFxuICAgICAgICAgICAgZXhwZWN0ZWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uWzBdIGluc3RhbmNlb2YgQXJyYXkgJiYgYWN0aW9uLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJzZSBFcnJvcjogbXVsdGlwbGUgYWN0aW9ucyBwb3NzaWJsZSBhdCBzdGF0ZTogXCIgKyBzdGF0ZSArIFwiLCB0b2tlbjogXCIgKyBzeW1ib2wpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uWzBdKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgc3RhY2sucHVzaChzeW1ib2wpO1xuICAgICAgICAgICAgdnN0YWNrLnB1c2gobGV4ZXIyLnl5dGV4dCk7XG4gICAgICAgICAgICBsc3RhY2sucHVzaChsZXhlcjIueXlsbG9jKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2goYWN0aW9uWzFdKTtcbiAgICAgICAgICAgIHN5bWJvbCA9IG51bGw7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHl5bGVuZyA9IGxleGVyMi55eWxlbmc7XG4gICAgICAgICAgICAgIHl5dGV4dCA9IGxleGVyMi55eXRleHQ7XG4gICAgICAgICAgICAgIHl5bGluZW5vID0gbGV4ZXIyLnl5bGluZW5vO1xuICAgICAgICAgICAgICB5eWxvYyA9IGxleGVyMi55eWxsb2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBsZW4gPSB0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzFdO1xuICAgICAgICAgICAgeXl2YWwuJCA9IHZzdGFja1t2c3RhY2subGVuZ3RoIC0gbGVuXTtcbiAgICAgICAgICAgIHl5dmFsLl8kID0ge1xuICAgICAgICAgICAgICBmaXJzdF9saW5lOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICAgIGxhc3RfbGluZTogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICAgIGxhc3RfY29sdW1uOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLmxhc3RfY29sdW1uXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHJhbmdlcykge1xuICAgICAgICAgICAgICB5eXZhbC5fJC5yYW5nZSA9IFtcbiAgICAgICAgICAgICAgICBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLnJhbmdlWzBdLFxuICAgICAgICAgICAgICAgIGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ucmFuZ2VbMV1cbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHIgPSB0aGlzLnBlcmZvcm1BY3Rpb24uYXBwbHkoeXl2YWwsIFtcbiAgICAgICAgICAgICAgeXl0ZXh0LFxuICAgICAgICAgICAgICB5eWxlbmcsXG4gICAgICAgICAgICAgIHl5bGluZW5vLFxuICAgICAgICAgICAgICBzaGFyZWRTdGF0ZS55eSxcbiAgICAgICAgICAgICAgYWN0aW9uWzFdLFxuICAgICAgICAgICAgICB2c3RhY2ssXG4gICAgICAgICAgICAgIGxzdGFja1xuICAgICAgICAgICAgXS5jb25jYXQoYXJncykpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICBzdGFjayA9IHN0YWNrLnNsaWNlKDAsIC0xICogbGVuICogMik7XG4gICAgICAgICAgICAgIHZzdGFjayA9IHZzdGFjay5zbGljZSgwLCAtMSAqIGxlbik7XG4gICAgICAgICAgICAgIGxzdGFjayA9IGxzdGFjay5zbGljZSgwLCAtMSAqIGxlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFjay5wdXNoKHRoaXMucHJvZHVjdGlvbnNfW2FjdGlvblsxXV1bMF0pO1xuICAgICAgICAgICAgdnN0YWNrLnB1c2goeXl2YWwuJCk7XG4gICAgICAgICAgICBsc3RhY2sucHVzaCh5eXZhbC5fJCk7XG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHRhYmxlW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDJdXVtzdGFja1tzdGFjay5sZW5ndGggLSAxXV07XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5ld1N0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIHZhciBsZXhlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZXhlcjIgPSB7XG4gICAgICBFT0Y6IDEsXG4gICAgICBwYXJzZUVycm9yOiBmdW5jdGlvbiBwYXJzZUVycm9yKHN0ciwgaGFzaCkge1xuICAgICAgICBpZiAodGhpcy55eS5wYXJzZXIpIHtcbiAgICAgICAgICB0aGlzLnl5LnBhcnNlci5wYXJzZUVycm9yKHN0ciwgaGFzaCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0cik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyByZXNldHMgdGhlIGxleGVyLCBzZXRzIG5ldyBpbnB1dFxuICAgICAgc2V0SW5wdXQ6IGZ1bmN0aW9uKGlucHV0LCB5eSkge1xuICAgICAgICB0aGlzLnl5ID0geXkgfHwgdGhpcy55eSB8fCB7fTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5fbW9yZSA9IHRoaXMuX2JhY2t0cmFjayA9IHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnl5bGluZW5vID0gdGhpcy55eWxlbmcgPSAwO1xuICAgICAgICB0aGlzLnl5dGV4dCA9IHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2ggPSBcIlwiO1xuICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrID0gW1wiSU5JVElBTFwiXTtcbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IDAsXG4gICAgICAgICAgbGFzdF9saW5lOiAxLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiAwXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbMCwgMF07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBjb25zdW1lcyBhbmQgcmV0dXJucyBvbmUgY2hhciBmcm9tIHRoZSBpbnB1dFxuICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLl9pbnB1dFswXTtcbiAgICAgICAgdGhpcy55eXRleHQgKz0gY2g7XG4gICAgICAgIHRoaXMueXlsZW5nKys7XG4gICAgICAgIHRoaXMub2Zmc2V0Kys7XG4gICAgICAgIHRoaXMubWF0Y2ggKz0gY2g7XG4gICAgICAgIHRoaXMubWF0Y2hlZCArPSBjaDtcbiAgICAgICAgdmFyIGxpbmVzID0gY2gubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO1xuICAgICAgICBpZiAobGluZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGluZW5vKys7XG4gICAgICAgICAgdGhpcy55eWxsb2MubGFzdF9saW5lKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MubGFzdF9jb2x1bW4rKztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlWzFdKys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZSgxKTtcbiAgICAgICAgcmV0dXJuIGNoO1xuICAgICAgfSxcbiAgICAgIC8vIHVuc2hpZnRzIG9uZSBjaGFyIChvciBhIHN0cmluZykgaW50byB0aGUgaW5wdXRcbiAgICAgIHVucHV0OiBmdW5jdGlvbihjaCkge1xuICAgICAgICB2YXIgbGVuID0gY2gubGVuZ3RoO1xuICAgICAgICB2YXIgbGluZXMgPSBjaC5zcGxpdCgvKD86XFxyXFxuP3xcXG4pL2cpO1xuICAgICAgICB0aGlzLl9pbnB1dCA9IGNoICsgdGhpcy5faW5wdXQ7XG4gICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy55eXRleHQuc3Vic3RyKDAsIHRoaXMueXl0ZXh0Lmxlbmd0aCAtIGxlbik7XG4gICAgICAgIHRoaXMub2Zmc2V0IC09IGxlbjtcbiAgICAgICAgdmFyIG9sZExpbmVzID0gdGhpcy5tYXRjaC5zcGxpdCgvKD86XFxyXFxuP3xcXG4pL2cpO1xuICAgICAgICB0aGlzLm1hdGNoID0gdGhpcy5tYXRjaC5zdWJzdHIoMCwgdGhpcy5tYXRjaC5sZW5ndGggLSAxKTtcbiAgICAgICAgdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gMSk7XG4gICAgICAgIGlmIChsaW5lcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy55eWxpbmVubyAtPSBsaW5lcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gdGhpcy55eWxsb2MucmFuZ2U7XG4gICAgICAgIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyAobGluZXMubGVuZ3RoID09PSBvbGRMaW5lcy5sZW5ndGggPyB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gOiAwKSArIG9sZExpbmVzW29sZExpbmVzLmxlbmd0aCAtIGxpbmVzLmxlbmd0aF0ubGVuZ3RoIC0gbGluZXNbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIC0gbGVuXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbclswXSwgclswXSArIHRoaXMueXlsZW5nIC0gbGVuXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnl5bGVuZyA9IHRoaXMueXl0ZXh0Lmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIGNhY2hlcyBtYXRjaGVkIHRleHQgYW5kIGFwcGVuZHMgaXQgb24gbmV4dCBhY3Rpb25cbiAgICAgIG1vcmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLl9tb3JlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIHNpZ25hbHMgdGhlIGxleGVyIHRoYXQgdGhpcyBydWxlIGZhaWxzIHRvIG1hdGNoIHRoZSBpbnB1dCwgc28gdGhlIG5leHQgbWF0Y2hpbmcgcnVsZSAocmVnZXgpIHNob3VsZCBiZSB0ZXN0ZWQgaW5zdGVhZC5cbiAgICAgIHJlamVjdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgdGhpcy5fYmFja3RyYWNrID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVycm9yKFwiTGV4aWNhbCBlcnJvciBvbiBsaW5lIFwiICsgKHRoaXMueXlsaW5lbm8gKyAxKSArIFwiLiBZb3UgY2FuIG9ubHkgaW52b2tlIHJlamVjdCgpIGluIHRoZSBsZXhlciB3aGVuIHRoZSBsZXhlciBpcyBvZiB0aGUgYmFja3RyYWNraW5nIHBlcnN1YXNpb24gKG9wdGlvbnMuYmFja3RyYWNrX2xleGVyID0gdHJ1ZSkuXFxuXCIgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7XG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICBsaW5lOiB0aGlzLnl5bGluZW5vXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gcmV0YWluIGZpcnN0IG4gY2hhcmFjdGVycyBvZiB0aGUgbWF0Y2hcbiAgICAgIGxlc3M6IGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgdGhpcy51bnB1dCh0aGlzLm1hdGNoLnNsaWNlKG4pKTtcbiAgICAgIH0sXG4gICAgICAvLyBkaXNwbGF5cyBhbHJlYWR5IG1hdGNoZWQgaW5wdXQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICBwYXN0SW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGFzdCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIHRoaXMubWF0Y2gubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIChwYXN0Lmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpICsgcGFzdC5zdWJzdHIoLTIwKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICB9LFxuICAgICAgLy8gZGlzcGxheXMgdXBjb21pbmcgaW5wdXQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICB1cGNvbWluZ0lucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG5leHQgPSB0aGlzLm1hdGNoO1xuICAgICAgICBpZiAobmV4dC5sZW5ndGggPCAyMCkge1xuICAgICAgICAgIG5leHQgKz0gdGhpcy5faW5wdXQuc3Vic3RyKDAsIDIwIC0gbmV4dC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobmV4dC5zdWJzdHIoMCwgMjApICsgKG5leHQubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikpLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sXG4gICAgICAvLyBkaXNwbGF5cyB0aGUgY2hhcmFjdGVyIHBvc2l0aW9uIHdoZXJlIHRoZSBsZXhpbmcgZXJyb3Igb2NjdXJyZWQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICBzaG93UG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcHJlID0gdGhpcy5wYXN0SW5wdXQoKTtcbiAgICAgICAgdmFyIGMgPSBuZXcgQXJyYXkocHJlLmxlbmd0aCArIDEpLmpvaW4oXCItXCIpO1xuICAgICAgICByZXR1cm4gcHJlICsgdGhpcy51cGNvbWluZ0lucHV0KCkgKyBcIlxcblwiICsgYyArIFwiXlwiO1xuICAgICAgfSxcbiAgICAgIC8vIHRlc3QgdGhlIGxleGVkIHRva2VuOiByZXR1cm4gRkFMU0Ugd2hlbiBub3QgYSBtYXRjaCwgb3RoZXJ3aXNlIHJldHVybiB0b2tlblxuICAgICAgdGVzdF9tYXRjaDogZnVuY3Rpb24obWF0Y2gsIGluZGV4ZWRfcnVsZSkge1xuICAgICAgICB2YXIgdG9rZW4sIGxpbmVzLCBiYWNrdXA7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgYmFja3VwID0ge1xuICAgICAgICAgICAgeXlsaW5lbm86IHRoaXMueXlsaW5lbm8sXG4gICAgICAgICAgICB5eWxsb2M6IHtcbiAgICAgICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MuZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICAgIGxhc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHl5dGV4dDogdGhpcy55eXRleHQsXG4gICAgICAgICAgICBtYXRjaDogdGhpcy5tYXRjaCxcbiAgICAgICAgICAgIG1hdGNoZXM6IHRoaXMubWF0Y2hlcyxcbiAgICAgICAgICAgIG1hdGNoZWQ6IHRoaXMubWF0Y2hlZCxcbiAgICAgICAgICAgIHl5bGVuZzogdGhpcy55eWxlbmcsXG4gICAgICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgICAgICAgX21vcmU6IHRoaXMuX21vcmUsXG4gICAgICAgICAgICBfaW5wdXQ6IHRoaXMuX2lucHV0LFxuICAgICAgICAgICAgeXk6IHRoaXMueXksXG4gICAgICAgICAgICBjb25kaXRpb25TdGFjazogdGhpcy5jb25kaXRpb25TdGFjay5zbGljZSgwKSxcbiAgICAgICAgICAgIGRvbmU6IHRoaXMuZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICAgIGJhY2t1cC55eWxsb2MucmFuZ2UgPSB0aGlzLnl5bGxvYy5yYW5nZS5zbGljZSgwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGluZXMgPSBtYXRjaFswXS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG4gICAgICAgIGlmIChsaW5lcykge1xuICAgICAgICAgIHRoaXMueXlsaW5lbm8gKz0gbGluZXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmxhc3RfbGluZSxcbiAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4sXG4gICAgICAgICAgbGFzdF9jb2x1bW46IGxpbmVzID8gbGluZXNbbGluZXMubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gbGluZXNbbGluZXMubGVuZ3RoIC0gMV0ubWF0Y2goL1xccj9cXG4/LylbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4gKyBtYXRjaFswXS5sZW5ndGhcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy55eXRleHQgKz0gbWF0Y2hbMF07XG4gICAgICAgIHRoaXMubWF0Y2ggKz0gbWF0Y2hbMF07XG4gICAgICAgIHRoaXMubWF0Y2hlcyA9IG1hdGNoO1xuICAgICAgICB0aGlzLnl5bGVuZyA9IHRoaXMueXl0ZXh0Lmxlbmd0aDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFt0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKz0gdGhpcy55eWxlbmddO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21vcmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fYmFja3RyYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UobWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5tYXRjaGVkICs9IG1hdGNoWzBdO1xuICAgICAgICB0b2tlbiA9IHRoaXMucGVyZm9ybUFjdGlvbi5jYWxsKHRoaXMsIHRoaXMueXksIHRoaXMsIGluZGV4ZWRfcnVsZSwgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgaWYgKHRoaXMuZG9uZSAmJiB0aGlzLl9pbnB1dCkge1xuICAgICAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9iYWNrdHJhY2spIHtcbiAgICAgICAgICBmb3IgKHZhciBrIGluIGJhY2t1cCkge1xuICAgICAgICAgICAgdGhpc1trXSA9IGJhY2t1cFtrXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICAvLyByZXR1cm4gbmV4dCBtYXRjaCBpbiBpbnB1dFxuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9pbnB1dCkge1xuICAgICAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRva2VuLCBtYXRjaCwgdGVtcE1hdGNoLCBpbmRleDtcbiAgICAgICAgaWYgKCF0aGlzLl9tb3JlKSB7XG4gICAgICAgICAgdGhpcy55eXRleHQgPSBcIlwiO1xuICAgICAgICAgIHRoaXMubWF0Y2ggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBydWxlcyA9IHRoaXMuX2N1cnJlbnRSdWxlcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGVtcE1hdGNoID0gdGhpcy5faW5wdXQubWF0Y2godGhpcy5ydWxlc1tydWxlc1tpXV0pO1xuICAgICAgICAgIGlmICh0ZW1wTWF0Y2ggJiYgKCFtYXRjaCB8fCB0ZW1wTWF0Y2hbMF0ubGVuZ3RoID4gbWF0Y2hbMF0ubGVuZ3RoKSkge1xuICAgICAgICAgICAgbWF0Y2ggPSB0ZW1wTWF0Y2g7XG4gICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcikge1xuICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMudGVzdF9tYXRjaCh0ZW1wTWF0Y2gsIHJ1bGVzW2ldKTtcbiAgICAgICAgICAgICAgaWYgKHRva2VuICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9iYWNrdHJhY2spIHtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vcHRpb25zLmZsZXgpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIHRva2VuID0gdGhpcy50ZXN0X21hdGNoKG1hdGNoLCBydWxlc1tpbmRleF0pO1xuICAgICAgICAgIGlmICh0b2tlbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9pbnB1dCA9PT0gXCJcIikge1xuICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVycm9yKFwiTGV4aWNhbCBlcnJvciBvbiBsaW5lIFwiICsgKHRoaXMueXlsaW5lbm8gKyAxKSArIFwiLiBVbnJlY29nbml6ZWQgdGV4dC5cXG5cIiArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgIGxpbmU6IHRoaXMueXlsaW5lbm9cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiBuZXh0IG1hdGNoIHRoYXQgaGFzIGEgdG9rZW5cbiAgICAgIGxleDogZnVuY3Rpb24gbGV4KCkge1xuICAgICAgICB2YXIgciA9IHRoaXMubmV4dCgpO1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmxleCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gYWN0aXZhdGVzIGEgbmV3IGxleGVyIGNvbmRpdGlvbiBzdGF0ZSAocHVzaGVzIHRoZSBuZXcgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIG9udG8gdGhlIGNvbmRpdGlvbiBzdGFjaylcbiAgICAgIGJlZ2luOiBmdW5jdGlvbiBiZWdpbihjb25kaXRpb24pIHtcbiAgICAgICAgdGhpcy5jb25kaXRpb25TdGFjay5wdXNoKGNvbmRpdGlvbik7XG4gICAgICB9LFxuICAgICAgLy8gcG9wIHRoZSBwcmV2aW91c2x5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGUgb2ZmIHRoZSBjb25kaXRpb24gc3RhY2tcbiAgICAgIHBvcFN0YXRlOiBmdW5jdGlvbiBwb3BTdGF0ZSgpIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgIGlmIChuID4gMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLnBvcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrWzBdO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcHJvZHVjZSB0aGUgbGV4ZXIgcnVsZSBzZXQgd2hpY2ggaXMgYWN0aXZlIGZvciB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGVcbiAgICAgIF9jdXJyZW50UnVsZXM6IGZ1bmN0aW9uIF9jdXJyZW50UnVsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAmJiB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zW3RoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXV0ucnVsZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uc1tcIklOSVRJQUxcIl0ucnVsZXM7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyByZXR1cm4gdGhlIGN1cnJlbnRseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlOyB3aGVuIGFuIGluZGV4IGFyZ3VtZW50IGlzIHByb3ZpZGVkIGl0IHByb2R1Y2VzIHRoZSBOLXRoIHByZXZpb3VzIGNvbmRpdGlvbiBzdGF0ZSwgaWYgYXZhaWxhYmxlXG4gICAgICB0b3BTdGF0ZTogZnVuY3Rpb24gdG9wU3RhdGUobikge1xuICAgICAgICBuID0gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxIC0gTWF0aC5hYnMobiB8fCAwKTtcbiAgICAgICAgaWYgKG4gPj0gMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrW25dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIklOSVRJQUxcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIGFsaWFzIGZvciBiZWdpbihjb25kaXRpb24pXG4gICAgICBwdXNoU3RhdGU6IGZ1bmN0aW9uIHB1c2hTdGF0ZShjb25kaXRpb24pIHtcbiAgICAgICAgdGhpcy5iZWdpbihjb25kaXRpb24pO1xuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiB0aGUgbnVtYmVyIG9mIHN0YXRlcyBjdXJyZW50bHkgb24gdGhlIHN0YWNrXG4gICAgICBzdGF0ZVN0YWNrU2l6ZTogZnVuY3Rpb24gc3RhdGVTdGFja1NpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aDtcbiAgICAgIH0sXG4gICAgICBvcHRpb25zOiB7IFwiY2FzZS1pbnNlbnNpdGl2ZVwiOiB0cnVlIH0sXG4gICAgICBwZXJmb3JtQWN0aW9uOiBmdW5jdGlvbiBhbm9ueW1vdXMoeXksIHl5XywgJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucywgWVlfU1RBUlQpIHtcbiAgICAgICAgc3dpdGNoICgkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImFjY190aXRsZVwiKTtcbiAgICAgICAgICAgIHJldHVybiAxOTtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfdGl0bGVfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiYWNjX2Rlc2NyXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDIxO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiBcImFjY19kZXNjcl92YWx1ZVwiO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJhY2NfZGVzY3JfbXVsdGlsaW5lXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZVwiO1xuICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHJldHVybiAxMztcbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgcmV0dXJuIDU7XG4gICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIHJldHVybiA0MDtcbiAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgcmV0dXJuIDMyO1xuICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICByZXR1cm4gMzg7XG4gICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgIHJldHVybiA0MjtcbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgcmV0dXJuIDQzO1xuICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICByZXR1cm4gNDQ7XG4gICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgIHJldHVybiA0NTtcbiAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgcmV0dXJuIDM1O1xuICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICByZXR1cm4gMjg7XG4gICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgIHJldHVybiAyOTtcbiAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgcmV0dXJuIDM3O1xuICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICByZXR1cm4gMzE7XG4gICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICAgIHJldHVybiAzNDtcbiAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgICAgcmV0dXJuIDI2O1xuICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICByZXR1cm4gOTtcbiAgICAgICAgICBjYXNlIDI2OlxuICAgICAgICAgICAgcmV0dXJuIDk7XG4gICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgIHJldHVybiA4O1xuICAgICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgICByZXR1cm4gXCJDQVJFVFwiO1xuICAgICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwib3B0aW9uc1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDMxOlxuICAgICAgICAgICAgcmV0dXJuIDEyO1xuICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICByZXR1cm4gMzY7XG4gICAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJzdHJpbmdcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzNTpcbiAgICAgICAgICAgIHJldHVybiAzMztcbiAgICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgICAgcmV0dXJuIDMwO1xuICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICByZXR1cm4gNDY7XG4gICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgIHJldHVybiA3O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcnVsZXM6IFsvXig/OmFjY1RpdGxlXFxzKjpcXHMqKS9pLCAvXig/Oig/IVxcbnx8KSpbXlxcbl0qKS9pLCAvXig/OmFjY0Rlc2NyXFxzKjpcXHMqKS9pLCAvXig/Oig/IVxcbnx8KSpbXlxcbl0qKS9pLCAvXig/OmFjY0Rlc2NyXFxzKlxce1xccyopL2ksIC9eKD86W1xcfV0pL2ksIC9eKD86W15cXH1dKikvaSwgL14oPzooXFxyP1xcbikrKS9pLCAvXig/OiNbXlxcbl0qKS9pLCAvXig/OiVbXlxcbl0qKS9pLCAvXig/OmdpdEdyYXBoXFxiKS9pLCAvXig/OmNvbW1pdCg/PVxcc3wkKSkvaSwgL14oPzppZDopL2ksIC9eKD86dHlwZTopL2ksIC9eKD86bXNnOikvaSwgL14oPzpOT1JNQUxcXGIpL2ksIC9eKD86UkVWRVJTRVxcYikvaSwgL14oPzpISUdITElHSFRcXGIpL2ksIC9eKD86dGFnOikvaSwgL14oPzpicmFuY2goPz1cXHN8JCkpL2ksIC9eKD86b3JkZXI6KS9pLCAvXig/Om1lcmdlKD89XFxzfCQpKS9pLCAvXig/OmNoZXJyeS1waWNrKD89XFxzfCQpKS9pLCAvXig/OnBhcmVudDopL2ksIC9eKD86Y2hlY2tvdXQoPz1cXHN8JCkpL2ksIC9eKD86TFJcXGIpL2ksIC9eKD86VEJcXGIpL2ksIC9eKD86OikvaSwgL14oPzpcXF4pL2ksIC9eKD86b3B0aW9uc1xccj9cXG4pL2ksIC9eKD86WyBcXHJcXG5cXHRdK2VuZFxcYikvaSwgL14oPzpbXFxzXFxTXSsoPz1bIFxcclxcblxcdF0rZW5kKSkvaSwgL14oPzpbXCJdW1wiXSkvaSwgL14oPzpbXCJdKS9pLCAvXig/OltcIl0pL2ksIC9eKD86W15cIl0qKS9pLCAvXig/OlswLTldKyg/PVxcc3wkKSkvaSwgL14oPzpcXHcoWy1cXC4vXFx3XSpbLVxcd10pPykvaSwgL14oPzokKS9pLCAvXig/OlxccyspL2ldLFxuICAgICAgY29uZGl0aW9uczogeyBcImFjY19kZXNjcl9tdWx0aWxpbmVcIjogeyBcInJ1bGVzXCI6IFs1LCA2XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJhY2NfZGVzY3JcIjogeyBcInJ1bGVzXCI6IFszXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJhY2NfdGl0bGVcIjogeyBcInJ1bGVzXCI6IFsxXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJvcHRpb25zXCI6IHsgXCJydWxlc1wiOiBbMzAsIDMxXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJzdHJpbmdcIjogeyBcInJ1bGVzXCI6IFszNCwgMzVdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIklOSVRJQUxcIjogeyBcInJ1bGVzXCI6IFswLCAyLCA0LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjMsIDI0LCAyNSwgMjYsIDI3LCAyOCwgMjksIDMyLCAzMywgMzYsIDM3LCAzOCwgMzldLCBcImluY2x1c2l2ZVwiOiB0cnVlIH0gfVxuICAgIH07XG4gICAgcmV0dXJuIGxleGVyMjtcbiAgfSgpO1xuICBwYXJzZXIyLmxleGVyID0gbGV4ZXI7XG4gIGZ1bmN0aW9uIFBhcnNlcigpIHtcbiAgICB0aGlzLnl5ID0ge307XG4gIH1cbiAgUGFyc2VyLnByb3RvdHlwZSA9IHBhcnNlcjI7XG4gIHBhcnNlcjIuUGFyc2VyID0gUGFyc2VyO1xuICByZXR1cm4gbmV3IFBhcnNlcigpO1xufSgpO1xucGFyc2VyLnBhcnNlciA9IHBhcnNlcjtcbmNvbnN0IGdpdEdyYXBoUGFyc2VyID0gcGFyc2VyO1xubGV0IG1haW5CcmFuY2hOYW1lID0gZ2V0Q29uZmlnKCkuZ2l0R3JhcGgubWFpbkJyYW5jaE5hbWU7XG5sZXQgbWFpbkJyYW5jaE9yZGVyID0gZ2V0Q29uZmlnKCkuZ2l0R3JhcGgubWFpbkJyYW5jaE9yZGVyO1xubGV0IGNvbW1pdHMgPSB7fTtcbmxldCBoZWFkID0gbnVsbDtcbmxldCBicmFuY2hlc0NvbmZpZyA9IHt9O1xuYnJhbmNoZXNDb25maWdbbWFpbkJyYW5jaE5hbWVdID0geyBuYW1lOiBtYWluQnJhbmNoTmFtZSwgb3JkZXI6IG1haW5CcmFuY2hPcmRlciB9O1xubGV0IGJyYW5jaGVzID0ge307XG5icmFuY2hlc1ttYWluQnJhbmNoTmFtZV0gPSBoZWFkO1xubGV0IGN1ckJyYW5jaCA9IG1haW5CcmFuY2hOYW1lO1xubGV0IGRpcmVjdGlvbiA9IFwiTFJcIjtcbmxldCBzZXEgPSAwO1xuZnVuY3Rpb24gZ2V0SWQoKSB7XG4gIHJldHVybiByYW5kb20oeyBsZW5ndGg6IDcgfSk7XG59XG5mdW5jdGlvbiB1bmlxQnkobGlzdCwgZm4pIHtcbiAgY29uc3QgcmVjb3JkTWFwID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiBsaXN0LnJlZHVjZSgob3V0LCBpdGVtKSA9PiB7XG4gICAgY29uc3Qga2V5ID0gZm4oaXRlbSk7XG4gICAgaWYgKCFyZWNvcmRNYXBba2V5XSkge1xuICAgICAgcmVjb3JkTWFwW2tleV0gPSB0cnVlO1xuICAgICAgb3V0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH0sIFtdKTtcbn1cbmNvbnN0IHNldERpcmVjdGlvbiA9IGZ1bmN0aW9uKGRpcjIpIHtcbiAgZGlyZWN0aW9uID0gZGlyMjtcbn07XG5sZXQgb3B0aW9ucyA9IHt9O1xuY29uc3Qgc2V0T3B0aW9ucyA9IGZ1bmN0aW9uKHJhd09wdFN0cmluZykge1xuICBsb2cuZGVidWcoXCJvcHRpb25zIHN0clwiLCByYXdPcHRTdHJpbmcpO1xuICByYXdPcHRTdHJpbmcgPSByYXdPcHRTdHJpbmcgJiYgcmF3T3B0U3RyaW5nLnRyaW0oKTtcbiAgcmF3T3B0U3RyaW5nID0gcmF3T3B0U3RyaW5nIHx8IFwie31cIjtcbiAgdHJ5IHtcbiAgICBvcHRpb25zID0gSlNPTi5wYXJzZShyYXdPcHRTdHJpbmcpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgbG9nLmVycm9yKFwiZXJyb3Igd2hpbGUgcGFyc2luZyBnaXRHcmFwaCBvcHRpb25zXCIsIGUubWVzc2FnZSk7XG4gIH1cbn07XG5jb25zdCBnZXRPcHRpb25zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBvcHRpb25zO1xufTtcbmNvbnN0IGNvbW1pdCA9IGZ1bmN0aW9uKG1zZywgaWQsIHR5cGUsIHRhZykge1xuICBsb2cuZGVidWcoXCJFbnRlcmluZyBjb21taXQ6XCIsIG1zZywgaWQsIHR5cGUsIHRhZyk7XG4gIGlkID0gY29tbW9uLnNhbml0aXplVGV4dChpZCwgZ2V0Q29uZmlnKCkpO1xuICBtc2cgPSBjb21tb24uc2FuaXRpemVUZXh0KG1zZywgZ2V0Q29uZmlnKCkpO1xuICB0YWcgPSBjb21tb24uc2FuaXRpemVUZXh0KHRhZywgZ2V0Q29uZmlnKCkpO1xuICBjb25zdCBjb21taXQyID0ge1xuICAgIGlkOiBpZCA/IGlkIDogc2VxICsgXCItXCIgKyBnZXRJZCgpLFxuICAgIG1lc3NhZ2U6IG1zZyxcbiAgICBzZXE6IHNlcSsrLFxuICAgIHR5cGU6IHR5cGUgPyB0eXBlIDogY29tbWl0VHlwZSQxLk5PUk1BTCxcbiAgICB0YWc6IHRhZyA/IHRhZyA6IFwiXCIsXG4gICAgcGFyZW50czogaGVhZCA9PSBudWxsID8gW10gOiBbaGVhZC5pZF0sXG4gICAgYnJhbmNoOiBjdXJCcmFuY2hcbiAgfTtcbiAgaGVhZCA9IGNvbW1pdDI7XG4gIGNvbW1pdHNbY29tbWl0Mi5pZF0gPSBjb21taXQyO1xuICBicmFuY2hlc1tjdXJCcmFuY2hdID0gY29tbWl0Mi5pZDtcbiAgbG9nLmRlYnVnKFwiaW4gcHVzaENvbW1pdCBcIiArIGNvbW1pdDIuaWQpO1xufTtcbmNvbnN0IGJyYW5jaCA9IGZ1bmN0aW9uKG5hbWUsIG9yZGVyKSB7XG4gIG5hbWUgPSBjb21tb24uc2FuaXRpemVUZXh0KG5hbWUsIGdldENvbmZpZygpKTtcbiAgaWYgKGJyYW5jaGVzW25hbWVdID09PSB2b2lkIDApIHtcbiAgICBicmFuY2hlc1tuYW1lXSA9IGhlYWQgIT0gbnVsbCA/IGhlYWQuaWQgOiBudWxsO1xuICAgIGJyYW5jaGVzQ29uZmlnW25hbWVdID0geyBuYW1lLCBvcmRlcjogb3JkZXIgPyBwYXJzZUludChvcmRlciwgMTApIDogbnVsbCB9O1xuICAgIGNoZWNrb3V0KG5hbWUpO1xuICAgIGxvZy5kZWJ1ZyhcImluIGNyZWF0ZUJyYW5jaFwiKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAnVHJ5aW5nIHRvIGNyZWF0ZSBhbiBleGlzdGluZyBicmFuY2guIChIZWxwOiBFaXRoZXIgdXNlIGEgbmV3IG5hbWUgaWYgeW91IHdhbnQgY3JlYXRlIGEgbmV3IGJyYW5jaCBvciB0cnkgdXNpbmcgXCJjaGVja291dCAnICsgbmFtZSArICdcIiknXG4gICAgKTtcbiAgICBlcnJvci5oYXNoID0ge1xuICAgICAgdGV4dDogXCJicmFuY2ggXCIgKyBuYW1lLFxuICAgICAgdG9rZW46IFwiYnJhbmNoIFwiICsgbmFtZSxcbiAgICAgIGxpbmU6IFwiMVwiLFxuICAgICAgbG9jOiB7IGZpcnN0X2xpbmU6IDEsIGxhc3RfbGluZTogMSwgZmlyc3RfY29sdW1uOiAxLCBsYXN0X2NvbHVtbjogMSB9LFxuICAgICAgZXhwZWN0ZWQ6IFsnXCJjaGVja291dCAnICsgbmFtZSArICdcIiddXG4gICAgfTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcbmNvbnN0IG1lcmdlID0gZnVuY3Rpb24ob3RoZXJCcmFuY2gsIGN1c3RvbV9pZCwgb3ZlcnJpZGVfdHlwZSwgY3VzdG9tX3RhZykge1xuICBvdGhlckJyYW5jaCA9IGNvbW1vbi5zYW5pdGl6ZVRleHQob3RoZXJCcmFuY2gsIGdldENvbmZpZygpKTtcbiAgY3VzdG9tX2lkID0gY29tbW9uLnNhbml0aXplVGV4dChjdXN0b21faWQsIGdldENvbmZpZygpKTtcbiAgY29uc3QgY3VycmVudENvbW1pdCA9IGNvbW1pdHNbYnJhbmNoZXNbY3VyQnJhbmNoXV07XG4gIGNvbnN0IG90aGVyQ29tbWl0ID0gY29tbWl0c1ticmFuY2hlc1tvdGhlckJyYW5jaF1dO1xuICBpZiAoY3VyQnJhbmNoID09PSBvdGhlckJyYW5jaCkge1xuICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcignSW5jb3JyZWN0IHVzYWdlIG9mIFwibWVyZ2VcIi4gQ2Fubm90IG1lcmdlIGEgYnJhbmNoIHRvIGl0c2VsZicpO1xuICAgIGVycm9yLmhhc2ggPSB7XG4gICAgICB0ZXh0OiBcIm1lcmdlIFwiICsgb3RoZXJCcmFuY2gsXG4gICAgICB0b2tlbjogXCJtZXJnZSBcIiArIG90aGVyQnJhbmNoLFxuICAgICAgbGluZTogXCIxXCIsXG4gICAgICBsb2M6IHsgZmlyc3RfbGluZTogMSwgbGFzdF9saW5lOiAxLCBmaXJzdF9jb2x1bW46IDEsIGxhc3RfY29sdW1uOiAxIH0sXG4gICAgICBleHBlY3RlZDogW1wiYnJhbmNoIGFiY1wiXVxuICAgIH07XG4gICAgdGhyb3cgZXJyb3I7XG4gIH0gZWxzZSBpZiAoY3VycmVudENvbW1pdCA9PT0gdm9pZCAwIHx8ICFjdXJyZW50Q29tbWl0KSB7XG4gICAgbGV0IGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgJ0luY29ycmVjdCB1c2FnZSBvZiBcIm1lcmdlXCIuIEN1cnJlbnQgYnJhbmNoICgnICsgY3VyQnJhbmNoICsgXCIpaGFzIG5vIGNvbW1pdHNcIlxuICAgICk7XG4gICAgZXJyb3IuaGFzaCA9IHtcbiAgICAgIHRleHQ6IFwibWVyZ2UgXCIgKyBvdGhlckJyYW5jaCxcbiAgICAgIHRva2VuOiBcIm1lcmdlIFwiICsgb3RoZXJCcmFuY2gsXG4gICAgICBsaW5lOiBcIjFcIixcbiAgICAgIGxvYzogeyBmaXJzdF9saW5lOiAxLCBsYXN0X2xpbmU6IDEsIGZpcnN0X2NvbHVtbjogMSwgbGFzdF9jb2x1bW46IDEgfSxcbiAgICAgIGV4cGVjdGVkOiBbXCJjb21taXRcIl1cbiAgICB9O1xuICAgIHRocm93IGVycm9yO1xuICB9IGVsc2UgaWYgKGJyYW5jaGVzW290aGVyQnJhbmNoXSA9PT0gdm9pZCAwKSB7XG4gICAgbGV0IGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgJ0luY29ycmVjdCB1c2FnZSBvZiBcIm1lcmdlXCIuIEJyYW5jaCB0byBiZSBtZXJnZWQgKCcgKyBvdGhlckJyYW5jaCArIFwiKSBkb2VzIG5vdCBleGlzdFwiXG4gICAgKTtcbiAgICBlcnJvci5oYXNoID0ge1xuICAgICAgdGV4dDogXCJtZXJnZSBcIiArIG90aGVyQnJhbmNoLFxuICAgICAgdG9rZW46IFwibWVyZ2UgXCIgKyBvdGhlckJyYW5jaCxcbiAgICAgIGxpbmU6IFwiMVwiLFxuICAgICAgbG9jOiB7IGZpcnN0X2xpbmU6IDEsIGxhc3RfbGluZTogMSwgZmlyc3RfY29sdW1uOiAxLCBsYXN0X2NvbHVtbjogMSB9LFxuICAgICAgZXhwZWN0ZWQ6IFtcImJyYW5jaCBcIiArIG90aGVyQnJhbmNoXVxuICAgIH07XG4gICAgdGhyb3cgZXJyb3I7XG4gIH0gZWxzZSBpZiAob3RoZXJDb21taXQgPT09IHZvaWQgMCB8fCAhb3RoZXJDb21taXQpIHtcbiAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAnSW5jb3JyZWN0IHVzYWdlIG9mIFwibWVyZ2VcIi4gQnJhbmNoIHRvIGJlIG1lcmdlZCAoJyArIG90aGVyQnJhbmNoICsgXCIpIGhhcyBubyBjb21taXRzXCJcbiAgICApO1xuICAgIGVycm9yLmhhc2ggPSB7XG4gICAgICB0ZXh0OiBcIm1lcmdlIFwiICsgb3RoZXJCcmFuY2gsXG4gICAgICB0b2tlbjogXCJtZXJnZSBcIiArIG90aGVyQnJhbmNoLFxuICAgICAgbGluZTogXCIxXCIsXG4gICAgICBsb2M6IHsgZmlyc3RfbGluZTogMSwgbGFzdF9saW5lOiAxLCBmaXJzdF9jb2x1bW46IDEsIGxhc3RfY29sdW1uOiAxIH0sXG4gICAgICBleHBlY3RlZDogWydcImNvbW1pdFwiJ11cbiAgICB9O1xuICAgIHRocm93IGVycm9yO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRDb21taXQgPT09IG90aGVyQ29tbWl0KSB7XG4gICAgbGV0IGVycm9yID0gbmV3IEVycm9yKCdJbmNvcnJlY3QgdXNhZ2Ugb2YgXCJtZXJnZVwiLiBCb3RoIGJyYW5jaGVzIGhhdmUgc2FtZSBoZWFkJyk7XG4gICAgZXJyb3IuaGFzaCA9IHtcbiAgICAgIHRleHQ6IFwibWVyZ2UgXCIgKyBvdGhlckJyYW5jaCxcbiAgICAgIHRva2VuOiBcIm1lcmdlIFwiICsgb3RoZXJCcmFuY2gsXG4gICAgICBsaW5lOiBcIjFcIixcbiAgICAgIGxvYzogeyBmaXJzdF9saW5lOiAxLCBsYXN0X2xpbmU6IDEsIGZpcnN0X2NvbHVtbjogMSwgbGFzdF9jb2x1bW46IDEgfSxcbiAgICAgIGV4cGVjdGVkOiBbXCJicmFuY2ggYWJjXCJdXG4gICAgfTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfSBlbHNlIGlmIChjdXN0b21faWQgJiYgY29tbWl0c1tjdXN0b21faWRdICE9PSB2b2lkIDApIHtcbiAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAnSW5jb3JyZWN0IHVzYWdlIG9mIFwibWVyZ2VcIi4gQ29tbWl0IHdpdGggaWQ6JyArIGN1c3RvbV9pZCArIFwiIGFscmVhZHkgZXhpc3RzLCB1c2UgZGlmZmVyZW50IGN1c3RvbSBJZFwiXG4gICAgKTtcbiAgICBlcnJvci5oYXNoID0ge1xuICAgICAgdGV4dDogXCJtZXJnZSBcIiArIG90aGVyQnJhbmNoICsgY3VzdG9tX2lkICsgb3ZlcnJpZGVfdHlwZSArIGN1c3RvbV90YWcsXG4gICAgICB0b2tlbjogXCJtZXJnZSBcIiArIG90aGVyQnJhbmNoICsgY3VzdG9tX2lkICsgb3ZlcnJpZGVfdHlwZSArIGN1c3RvbV90YWcsXG4gICAgICBsaW5lOiBcIjFcIixcbiAgICAgIGxvYzogeyBmaXJzdF9saW5lOiAxLCBsYXN0X2xpbmU6IDEsIGZpcnN0X2NvbHVtbjogMSwgbGFzdF9jb2x1bW46IDEgfSxcbiAgICAgIGV4cGVjdGVkOiBbXG4gICAgICAgIFwibWVyZ2UgXCIgKyBvdGhlckJyYW5jaCArIFwiIFwiICsgY3VzdG9tX2lkICsgXCJfVU5JUVVFIFwiICsgb3ZlcnJpZGVfdHlwZSArIFwiIFwiICsgY3VzdG9tX3RhZ1xuICAgICAgXVxuICAgIH07XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbiAgY29uc3QgY29tbWl0MiA9IHtcbiAgICBpZDogY3VzdG9tX2lkID8gY3VzdG9tX2lkIDogc2VxICsgXCItXCIgKyBnZXRJZCgpLFxuICAgIG1lc3NhZ2U6IFwibWVyZ2VkIGJyYW5jaCBcIiArIG90aGVyQnJhbmNoICsgXCIgaW50byBcIiArIGN1ckJyYW5jaCxcbiAgICBzZXE6IHNlcSsrLFxuICAgIHBhcmVudHM6IFtoZWFkID09IG51bGwgPyBudWxsIDogaGVhZC5pZCwgYnJhbmNoZXNbb3RoZXJCcmFuY2hdXSxcbiAgICBicmFuY2g6IGN1ckJyYW5jaCxcbiAgICB0eXBlOiBjb21taXRUeXBlJDEuTUVSR0UsXG4gICAgY3VzdG9tVHlwZTogb3ZlcnJpZGVfdHlwZSxcbiAgICBjdXN0b21JZDogY3VzdG9tX2lkID8gdHJ1ZSA6IGZhbHNlLFxuICAgIHRhZzogY3VzdG9tX3RhZyA/IGN1c3RvbV90YWcgOiBcIlwiXG4gIH07XG4gIGhlYWQgPSBjb21taXQyO1xuICBjb21taXRzW2NvbW1pdDIuaWRdID0gY29tbWl0MjtcbiAgYnJhbmNoZXNbY3VyQnJhbmNoXSA9IGNvbW1pdDIuaWQ7XG4gIGxvZy5kZWJ1ZyhicmFuY2hlcyk7XG4gIGxvZy5kZWJ1ZyhcImluIG1lcmdlQnJhbmNoXCIpO1xufTtcbmNvbnN0IGNoZXJyeVBpY2sgPSBmdW5jdGlvbihzb3VyY2VJZCwgdGFyZ2V0SWQsIHRhZywgcGFyZW50Q29tbWl0SWQpIHtcbiAgbG9nLmRlYnVnKFwiRW50ZXJpbmcgY2hlcnJ5UGljazpcIiwgc291cmNlSWQsIHRhcmdldElkLCB0YWcpO1xuICBzb3VyY2VJZCA9IGNvbW1vbi5zYW5pdGl6ZVRleHQoc291cmNlSWQsIGdldENvbmZpZygpKTtcbiAgdGFyZ2V0SWQgPSBjb21tb24uc2FuaXRpemVUZXh0KHRhcmdldElkLCBnZXRDb25maWcoKSk7XG4gIHRhZyA9IGNvbW1vbi5zYW5pdGl6ZVRleHQodGFnLCBnZXRDb25maWcoKSk7XG4gIHBhcmVudENvbW1pdElkID0gY29tbW9uLnNhbml0aXplVGV4dChwYXJlbnRDb21taXRJZCwgZ2V0Q29uZmlnKCkpO1xuICBpZiAoIXNvdXJjZUlkIHx8IGNvbW1pdHNbc291cmNlSWRdID09PSB2b2lkIDApIHtcbiAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAnSW5jb3JyZWN0IHVzYWdlIG9mIFwiY2hlcnJ5UGlja1wiLiBTb3VyY2UgY29tbWl0IGlkIHNob3VsZCBleGlzdCBhbmQgcHJvdmlkZWQnXG4gICAgKTtcbiAgICBlcnJvci5oYXNoID0ge1xuICAgICAgdGV4dDogXCJjaGVycnlQaWNrIFwiICsgc291cmNlSWQgKyBcIiBcIiArIHRhcmdldElkLFxuICAgICAgdG9rZW46IFwiY2hlcnJ5UGljayBcIiArIHNvdXJjZUlkICsgXCIgXCIgKyB0YXJnZXRJZCxcbiAgICAgIGxpbmU6IFwiMVwiLFxuICAgICAgbG9jOiB7IGZpcnN0X2xpbmU6IDEsIGxhc3RfbGluZTogMSwgZmlyc3RfY29sdW1uOiAxLCBsYXN0X2NvbHVtbjogMSB9LFxuICAgICAgZXhwZWN0ZWQ6IFtcImNoZXJyeS1waWNrIGFiY1wiXVxuICAgIH07XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbiAgbGV0IHNvdXJjZUNvbW1pdCA9IGNvbW1pdHNbc291cmNlSWRdO1xuICBsZXQgc291cmNlQ29tbWl0QnJhbmNoID0gc291cmNlQ29tbWl0LmJyYW5jaDtcbiAgaWYgKHBhcmVudENvbW1pdElkICYmICEoQXJyYXkuaXNBcnJheShzb3VyY2VDb21taXQucGFyZW50cykgJiYgc291cmNlQ29tbWl0LnBhcmVudHMuaW5jbHVkZXMocGFyZW50Q29tbWl0SWQpKSkge1xuICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgIFwiSW52YWxpZCBvcGVyYXRpb246IFRoZSBzcGVjaWZpZWQgcGFyZW50IGNvbW1pdCBpcyBub3QgYW4gaW1tZWRpYXRlIHBhcmVudCBvZiB0aGUgY2hlcnJ5LXBpY2tlZCBjb21taXQuXCJcbiAgICApO1xuICAgIHRocm93IGVycm9yO1xuICB9XG4gIGlmIChzb3VyY2VDb21taXQudHlwZSA9PT0gY29tbWl0VHlwZSQxLk1FUkdFICYmICFwYXJlbnRDb21taXRJZCkge1xuICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgIFwiSW5jb3JyZWN0IHVzYWdlIG9mIGNoZXJyeS1waWNrOiBJZiB0aGUgc291cmNlIGNvbW1pdCBpcyBhIG1lcmdlIGNvbW1pdCwgYW4gaW1tZWRpYXRlIHBhcmVudCBjb21taXQgbXVzdCBiZSBzcGVjaWZpZWQuXCJcbiAgICApO1xuICAgIHRocm93IGVycm9yO1xuICB9XG4gIGlmICghdGFyZ2V0SWQgfHwgY29tbWl0c1t0YXJnZXRJZF0gPT09IHZvaWQgMCkge1xuICAgIGlmIChzb3VyY2VDb21taXRCcmFuY2ggPT09IGN1ckJyYW5jaCkge1xuICAgICAgbGV0IGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnSW5jb3JyZWN0IHVzYWdlIG9mIFwiY2hlcnJ5UGlja1wiLiBTb3VyY2UgY29tbWl0IGlzIGFscmVhZHkgb24gY3VycmVudCBicmFuY2gnXG4gICAgICApO1xuICAgICAgZXJyb3IuaGFzaCA9IHtcbiAgICAgICAgdGV4dDogXCJjaGVycnlQaWNrIFwiICsgc291cmNlSWQgKyBcIiBcIiArIHRhcmdldElkLFxuICAgICAgICB0b2tlbjogXCJjaGVycnlQaWNrIFwiICsgc291cmNlSWQgKyBcIiBcIiArIHRhcmdldElkLFxuICAgICAgICBsaW5lOiBcIjFcIixcbiAgICAgICAgbG9jOiB7IGZpcnN0X2xpbmU6IDEsIGxhc3RfbGluZTogMSwgZmlyc3RfY29sdW1uOiAxLCBsYXN0X2NvbHVtbjogMSB9LFxuICAgICAgICBleHBlY3RlZDogW1wiY2hlcnJ5LXBpY2sgYWJjXCJdXG4gICAgICB9O1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRDb21taXQgPSBjb21taXRzW2JyYW5jaGVzW2N1ckJyYW5jaF1dO1xuICAgIGlmIChjdXJyZW50Q29tbWl0ID09PSB2b2lkIDAgfHwgIWN1cnJlbnRDb21taXQpIHtcbiAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ0luY29ycmVjdCB1c2FnZSBvZiBcImNoZXJyeS1waWNrXCIuIEN1cnJlbnQgYnJhbmNoICgnICsgY3VyQnJhbmNoICsgXCIpaGFzIG5vIGNvbW1pdHNcIlxuICAgICAgKTtcbiAgICAgIGVycm9yLmhhc2ggPSB7XG4gICAgICAgIHRleHQ6IFwiY2hlcnJ5UGljayBcIiArIHNvdXJjZUlkICsgXCIgXCIgKyB0YXJnZXRJZCxcbiAgICAgICAgdG9rZW46IFwiY2hlcnJ5UGljayBcIiArIHNvdXJjZUlkICsgXCIgXCIgKyB0YXJnZXRJZCxcbiAgICAgICAgbGluZTogXCIxXCIsXG4gICAgICAgIGxvYzogeyBmaXJzdF9saW5lOiAxLCBsYXN0X2xpbmU6IDEsIGZpcnN0X2NvbHVtbjogMSwgbGFzdF9jb2x1bW46IDEgfSxcbiAgICAgICAgZXhwZWN0ZWQ6IFtcImNoZXJyeS1waWNrIGFiY1wiXVxuICAgICAgfTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBjb25zdCBjb21taXQyID0ge1xuICAgICAgaWQ6IHNlcSArIFwiLVwiICsgZ2V0SWQoKSxcbiAgICAgIG1lc3NhZ2U6IFwiY2hlcnJ5LXBpY2tlZCBcIiArIHNvdXJjZUNvbW1pdCArIFwiIGludG8gXCIgKyBjdXJCcmFuY2gsXG4gICAgICBzZXE6IHNlcSsrLFxuICAgICAgcGFyZW50czogW2hlYWQgPT0gbnVsbCA/IG51bGwgOiBoZWFkLmlkLCBzb3VyY2VDb21taXQuaWRdLFxuICAgICAgYnJhbmNoOiBjdXJCcmFuY2gsXG4gICAgICB0eXBlOiBjb21taXRUeXBlJDEuQ0hFUlJZX1BJQ0ssXG4gICAgICB0YWc6IHRhZyA/PyBgY2hlcnJ5LXBpY2s6JHtzb3VyY2VDb21taXQuaWR9JHtzb3VyY2VDb21taXQudHlwZSA9PT0gY29tbWl0VHlwZSQxLk1FUkdFID8gYHxwYXJlbnQ6JHtwYXJlbnRDb21taXRJZH1gIDogXCJcIn1gXG4gICAgfTtcbiAgICBoZWFkID0gY29tbWl0MjtcbiAgICBjb21taXRzW2NvbW1pdDIuaWRdID0gY29tbWl0MjtcbiAgICBicmFuY2hlc1tjdXJCcmFuY2hdID0gY29tbWl0Mi5pZDtcbiAgICBsb2cuZGVidWcoYnJhbmNoZXMpO1xuICAgIGxvZy5kZWJ1ZyhcImluIGNoZXJyeVBpY2tcIik7XG4gIH1cbn07XG5jb25zdCBjaGVja291dCA9IGZ1bmN0aW9uKGJyYW5jaDIpIHtcbiAgYnJhbmNoMiA9IGNvbW1vbi5zYW5pdGl6ZVRleHQoYnJhbmNoMiwgZ2V0Q29uZmlnKCkpO1xuICBpZiAoYnJhbmNoZXNbYnJhbmNoMl0gPT09IHZvaWQgMCkge1xuICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICdUcnlpbmcgdG8gY2hlY2tvdXQgYnJhbmNoIHdoaWNoIGlzIG5vdCB5ZXQgY3JlYXRlZC4gKEhlbHAgdHJ5IHVzaW5nIFwiYnJhbmNoICcgKyBicmFuY2gyICsgJ1wiKSdcbiAgICApO1xuICAgIGVycm9yLmhhc2ggPSB7XG4gICAgICB0ZXh0OiBcImNoZWNrb3V0IFwiICsgYnJhbmNoMixcbiAgICAgIHRva2VuOiBcImNoZWNrb3V0IFwiICsgYnJhbmNoMixcbiAgICAgIGxpbmU6IFwiMVwiLFxuICAgICAgbG9jOiB7IGZpcnN0X2xpbmU6IDEsIGxhc3RfbGluZTogMSwgZmlyc3RfY29sdW1uOiAxLCBsYXN0X2NvbHVtbjogMSB9LFxuICAgICAgZXhwZWN0ZWQ6IFsnXCJicmFuY2ggJyArIGJyYW5jaDIgKyAnXCInXVxuICAgIH07XG4gICAgdGhyb3cgZXJyb3I7XG4gIH0gZWxzZSB7XG4gICAgY3VyQnJhbmNoID0gYnJhbmNoMjtcbiAgICBjb25zdCBpZCA9IGJyYW5jaGVzW2N1ckJyYW5jaF07XG4gICAgaGVhZCA9IGNvbW1pdHNbaWRdO1xuICB9XG59O1xuZnVuY3Rpb24gdXBzZXJ0KGFyciwga2V5LCBuZXdWYWwpIHtcbiAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZihrZXkpO1xuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgYXJyLnB1c2gobmV3VmFsKTtcbiAgfSBlbHNlIHtcbiAgICBhcnIuc3BsaWNlKGluZGV4LCAxLCBuZXdWYWwpO1xuICB9XG59XG5mdW5jdGlvbiBwcmV0dHlQcmludENvbW1pdEhpc3RvcnkoY29tbWl0QXJyKSB7XG4gIGNvbnN0IGNvbW1pdDIgPSBjb21taXRBcnIucmVkdWNlKChvdXQsIGNvbW1pdDMpID0+IHtcbiAgICBpZiAob3V0LnNlcSA+IGNvbW1pdDMuc2VxKSB7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICByZXR1cm4gY29tbWl0MztcbiAgfSwgY29tbWl0QXJyWzBdKTtcbiAgbGV0IGxpbmUgPSBcIlwiO1xuICBjb21taXRBcnIuZm9yRWFjaChmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IGNvbW1pdDIpIHtcbiAgICAgIGxpbmUgKz0gXCJcdCpcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZSArPSBcIlx0fFwiO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGxhYmVsID0gW2xpbmUsIGNvbW1pdDIuaWQsIGNvbW1pdDIuc2VxXTtcbiAgZm9yIChsZXQgYnJhbmNoMiBpbiBicmFuY2hlcykge1xuICAgIGlmIChicmFuY2hlc1ticmFuY2gyXSA9PT0gY29tbWl0Mi5pZCkge1xuICAgICAgbGFiZWwucHVzaChicmFuY2gyKTtcbiAgICB9XG4gIH1cbiAgbG9nLmRlYnVnKGxhYmVsLmpvaW4oXCIgXCIpKTtcbiAgaWYgKGNvbW1pdDIucGFyZW50cyAmJiBjb21taXQyLnBhcmVudHMubGVuZ3RoID09IDIpIHtcbiAgICBjb25zdCBuZXdDb21taXQgPSBjb21taXRzW2NvbW1pdDIucGFyZW50c1swXV07XG4gICAgdXBzZXJ0KGNvbW1pdEFyciwgY29tbWl0MiwgbmV3Q29tbWl0KTtcbiAgICBjb21taXRBcnIucHVzaChjb21taXRzW2NvbW1pdDIucGFyZW50c1sxXV0pO1xuICB9IGVsc2UgaWYgKGNvbW1pdDIucGFyZW50cy5sZW5ndGggPT0gMCkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBuZXh0Q29tbWl0ID0gY29tbWl0c1tjb21taXQyLnBhcmVudHNdO1xuICAgIHVwc2VydChjb21taXRBcnIsIGNvbW1pdDIsIG5leHRDb21taXQpO1xuICB9XG4gIGNvbW1pdEFyciA9IHVuaXFCeShjb21taXRBcnIsIChjKSA9PiBjLmlkKTtcbiAgcHJldHR5UHJpbnRDb21taXRIaXN0b3J5KGNvbW1pdEFycik7XG59XG5jb25zdCBwcmV0dHlQcmludCA9IGZ1bmN0aW9uKCkge1xuICBsb2cuZGVidWcoY29tbWl0cyk7XG4gIGNvbnN0IG5vZGUgPSBnZXRDb21taXRzQXJyYXkoKVswXTtcbiAgcHJldHR5UHJpbnRDb21taXRIaXN0b3J5KFtub2RlXSk7XG59O1xuY29uc3QgY2xlYXIkMSA9IGZ1bmN0aW9uKCkge1xuICBjb21taXRzID0ge307XG4gIGhlYWQgPSBudWxsO1xuICBsZXQgbWFpbkJyYW5jaCA9IGdldENvbmZpZygpLmdpdEdyYXBoLm1haW5CcmFuY2hOYW1lO1xuICBsZXQgbWFpbkJyYW5jaE9yZGVyMiA9IGdldENvbmZpZygpLmdpdEdyYXBoLm1haW5CcmFuY2hPcmRlcjtcbiAgYnJhbmNoZXMgPSB7fTtcbiAgYnJhbmNoZXNbbWFpbkJyYW5jaF0gPSBudWxsO1xuICBicmFuY2hlc0NvbmZpZyA9IHt9O1xuICBicmFuY2hlc0NvbmZpZ1ttYWluQnJhbmNoXSA9IHsgbmFtZTogbWFpbkJyYW5jaCwgb3JkZXI6IG1haW5CcmFuY2hPcmRlcjIgfTtcbiAgY3VyQnJhbmNoID0gbWFpbkJyYW5jaDtcbiAgc2VxID0gMDtcbiAgY2xlYXIkMigpO1xufTtcbmNvbnN0IGdldEJyYW5jaGVzQXNPYmpBcnJheSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBicmFuY2hlc0FycmF5ID0gT2JqZWN0LnZhbHVlcyhicmFuY2hlc0NvbmZpZykubWFwKChicmFuY2hDb25maWcsIGkpID0+IHtcbiAgICBpZiAoYnJhbmNoQ29uZmlnLm9yZGVyICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gYnJhbmNoQ29uZmlnO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgLi4uYnJhbmNoQ29uZmlnLFxuICAgICAgb3JkZXI6IHBhcnNlRmxvYXQoYDAuJHtpfWAsIDEwKVxuICAgIH07XG4gIH0pLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKS5tYXAoKHsgbmFtZSB9KSA9PiAoeyBuYW1lIH0pKTtcbiAgcmV0dXJuIGJyYW5jaGVzQXJyYXk7XG59O1xuY29uc3QgZ2V0QnJhbmNoZXMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGJyYW5jaGVzO1xufTtcbmNvbnN0IGdldENvbW1pdHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGNvbW1pdHM7XG59O1xuY29uc3QgZ2V0Q29tbWl0c0FycmF5ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNvbW1pdEFyciA9IE9iamVjdC5rZXlzKGNvbW1pdHMpLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gY29tbWl0c1trZXldO1xuICB9KTtcbiAgY29tbWl0QXJyLmZvckVhY2goZnVuY3Rpb24obykge1xuICAgIGxvZy5kZWJ1ZyhvLmlkKTtcbiAgfSk7XG4gIGNvbW1pdEFyci5zb3J0KChhLCBiKSA9PiBhLnNlcSAtIGIuc2VxKTtcbiAgcmV0dXJuIGNvbW1pdEFycjtcbn07XG5jb25zdCBnZXRDdXJyZW50QnJhbmNoID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBjdXJCcmFuY2g7XG59O1xuY29uc3QgZ2V0RGlyZWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBkaXJlY3Rpb247XG59O1xuY29uc3QgZ2V0SGVhZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gaGVhZDtcbn07XG5jb25zdCBjb21taXRUeXBlJDEgPSB7XG4gIE5PUk1BTDogMCxcbiAgUkVWRVJTRTogMSxcbiAgSElHSExJR0hUOiAyLFxuICBNRVJHRTogMyxcbiAgQ0hFUlJZX1BJQ0s6IDRcbn07XG5jb25zdCBnaXRHcmFwaERiID0ge1xuICBnZXRDb25maWc6ICgpID0+IGdldENvbmZpZygpLmdpdEdyYXBoLFxuICBzZXREaXJlY3Rpb24sXG4gIHNldE9wdGlvbnMsXG4gIGdldE9wdGlvbnMsXG4gIGNvbW1pdCxcbiAgYnJhbmNoLFxuICBtZXJnZSxcbiAgY2hlcnJ5UGljayxcbiAgY2hlY2tvdXQsXG4gIC8vcmVzZXQsXG4gIHByZXR0eVByaW50LFxuICBjbGVhcjogY2xlYXIkMSxcbiAgZ2V0QnJhbmNoZXNBc09iakFycmF5LFxuICBnZXRCcmFuY2hlcyxcbiAgZ2V0Q29tbWl0cyxcbiAgZ2V0Q29tbWl0c0FycmF5LFxuICBnZXRDdXJyZW50QnJhbmNoLFxuICBnZXREaXJlY3Rpb24sXG4gIGdldEhlYWQsXG4gIHNldEFjY1RpdGxlLFxuICBnZXRBY2NUaXRsZSxcbiAgZ2V0QWNjRGVzY3JpcHRpb24sXG4gIHNldEFjY0Rlc2NyaXB0aW9uLFxuICBzZXREaWFncmFtVGl0bGUsXG4gIGdldERpYWdyYW1UaXRsZSxcbiAgY29tbWl0VHlwZTogY29tbWl0VHlwZSQxXG59O1xubGV0IGFsbENvbW1pdHNEaWN0ID0ge307XG5jb25zdCBjb21taXRUeXBlID0ge1xuICBOT1JNQUw6IDAsXG4gIFJFVkVSU0U6IDEsXG4gIEhJR0hMSUdIVDogMixcbiAgTUVSR0U6IDMsXG4gIENIRVJSWV9QSUNLOiA0XG59O1xuY29uc3QgVEhFTUVfQ09MT1JfTElNSVQgPSA4O1xubGV0IGJyYW5jaFBvcyA9IHt9O1xubGV0IGNvbW1pdFBvcyA9IHt9O1xubGV0IGxhbmVzID0gW107XG5sZXQgbWF4UG9zID0gMDtcbmxldCBkaXIgPSBcIkxSXCI7XG5jb25zdCBjbGVhciA9ICgpID0+IHtcbiAgYnJhbmNoUG9zID0ge307XG4gIGNvbW1pdFBvcyA9IHt9O1xuICBhbGxDb21taXRzRGljdCA9IHt9O1xuICBtYXhQb3MgPSAwO1xuICBsYW5lcyA9IFtdO1xuICBkaXIgPSBcIkxSXCI7XG59O1xuY29uc3QgZHJhd1RleHQgPSAodHh0KSA9PiB7XG4gIGNvbnN0IHN2Z0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJ0ZXh0XCIpO1xuICBsZXQgcm93cyA9IFtdO1xuICBpZiAodHlwZW9mIHR4dCA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJvd3MgPSB0eHQuc3BsaXQoL1xcXFxufFxcbnw8YnJcXHMqXFwvPz4vZ2kpO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHh0KSkge1xuICAgIHJvd3MgPSB0eHQ7XG4gIH0gZWxzZSB7XG4gICAgcm93cyA9IFtdO1xuICB9XG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICBjb25zdCB0c3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwidHNwYW5cIik7XG4gICAgdHNwYW4uc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIiwgXCJ4bWw6c3BhY2VcIiwgXCJwcmVzZXJ2ZVwiKTtcbiAgICB0c3Bhbi5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBcIjFlbVwiKTtcbiAgICB0c3Bhbi5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFwiMFwiKTtcbiAgICB0c3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJvd1wiKTtcbiAgICB0c3Bhbi50ZXh0Q29udGVudCA9IHJvdy50cmltKCk7XG4gICAgc3ZnTGFiZWwuYXBwZW5kQ2hpbGQodHNwYW4pO1xuICB9XG4gIHJldHVybiBzdmdMYWJlbDtcbn07XG5jb25zdCBmaW5kQ2xvc2VzdFBhcmVudCA9IChwYXJlbnRzKSA9PiB7XG4gIGxldCBjbG9zZXN0UGFyZW50ID0gXCJcIjtcbiAgbGV0IG1heFBvc2l0aW9uID0gMDtcbiAgcGFyZW50cy5mb3JFYWNoKChwYXJlbnQpID0+IHtcbiAgICBjb25zdCBwYXJlbnRQb3NpdGlvbiA9IGRpciA9PT0gXCJUQlwiID8gY29tbWl0UG9zW3BhcmVudF0ueSA6IGNvbW1pdFBvc1twYXJlbnRdLng7XG4gICAgaWYgKHBhcmVudFBvc2l0aW9uID49IG1heFBvc2l0aW9uKSB7XG4gICAgICBjbG9zZXN0UGFyZW50ID0gcGFyZW50O1xuICAgICAgbWF4UG9zaXRpb24gPSBwYXJlbnRQb3NpdGlvbjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY2xvc2VzdFBhcmVudCB8fCB2b2lkIDA7XG59O1xuY29uc3QgZHJhd0NvbW1pdHMgPSAoc3ZnLCBjb21taXRzMiwgbW9kaWZ5R3JhcGgpID0+IHtcbiAgY29uc3QgZ2l0R3JhcGhDb25maWcgPSBnZXRDb25maWcoKS5naXRHcmFwaDtcbiAgY29uc3QgZ0J1bGxldHMgPSBzdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJjb21taXQtYnVsbGV0c1wiKTtcbiAgY29uc3QgZ0xhYmVscyA9IHN2Zy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImNvbW1pdC1sYWJlbHNcIik7XG4gIGxldCBwb3MgPSAwO1xuICBpZiAoZGlyID09PSBcIlRCXCIpIHtcbiAgICBwb3MgPSAzMDtcbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tbWl0czIpO1xuICBjb25zdCBzb3J0ZWRLZXlzID0ga2V5cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGNvbW1pdHMyW2FdLnNlcSAtIGNvbW1pdHMyW2JdLnNlcTtcbiAgfSk7XG4gIGNvbnN0IGlzUGFyYWxsZWxDb21taXRzID0gZ2l0R3JhcGhDb25maWcucGFyYWxsZWxDb21taXRzO1xuICBjb25zdCBsYXlvdXRPZmZzZXQgPSAxMDtcbiAgY29uc3QgY29tbWl0U3RlcCA9IDQwO1xuICBzb3J0ZWRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IGNvbW1pdDIgPSBjb21taXRzMltrZXldO1xuICAgIGlmIChpc1BhcmFsbGVsQ29tbWl0cykge1xuICAgICAgaWYgKGNvbW1pdDIucGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY2xvc2VzdFBhcmVudCA9IGZpbmRDbG9zZXN0UGFyZW50KGNvbW1pdDIucGFyZW50cyk7XG4gICAgICAgIHBvcyA9IGRpciA9PT0gXCJUQlwiID8gY29tbWl0UG9zW2Nsb3Nlc3RQYXJlbnRdLnkgKyBjb21taXRTdGVwIDogY29tbWl0UG9zW2Nsb3Nlc3RQYXJlbnRdLnggKyBjb21taXRTdGVwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zID0gMDtcbiAgICAgICAgaWYgKGRpciA9PT0gXCJUQlwiKSB7XG4gICAgICAgICAgcG9zID0gMzA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcG9zV2l0aE9mZnNldCA9IHBvcyArIGxheW91dE9mZnNldDtcbiAgICBjb25zdCB5ID0gZGlyID09PSBcIlRCXCIgPyBwb3NXaXRoT2Zmc2V0IDogYnJhbmNoUG9zW2NvbW1pdDIuYnJhbmNoXS5wb3M7XG4gICAgY29uc3QgeCA9IGRpciA9PT0gXCJUQlwiID8gYnJhbmNoUG9zW2NvbW1pdDIuYnJhbmNoXS5wb3MgOiBwb3NXaXRoT2Zmc2V0O1xuICAgIGlmIChtb2RpZnlHcmFwaCkge1xuICAgICAgbGV0IHR5cGVDbGFzcztcbiAgICAgIGxldCBjb21taXRTeW1ib2xUeXBlID0gY29tbWl0Mi5jdXN0b21UeXBlICE9PSB2b2lkIDAgJiYgY29tbWl0Mi5jdXN0b21UeXBlICE9PSBcIlwiID8gY29tbWl0Mi5jdXN0b21UeXBlIDogY29tbWl0Mi50eXBlO1xuICAgICAgc3dpdGNoIChjb21taXRTeW1ib2xUeXBlKSB7XG4gICAgICAgIGNhc2UgY29tbWl0VHlwZS5OT1JNQUw6XG4gICAgICAgICAgdHlwZUNsYXNzID0gXCJjb21taXQtbm9ybWFsXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgY29tbWl0VHlwZS5SRVZFUlNFOlxuICAgICAgICAgIHR5cGVDbGFzcyA9IFwiY29tbWl0LXJldmVyc2VcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBjb21taXRUeXBlLkhJR0hMSUdIVDpcbiAgICAgICAgICB0eXBlQ2xhc3MgPSBcImNvbW1pdC1oaWdobGlnaHRcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBjb21taXRUeXBlLk1FUkdFOlxuICAgICAgICAgIHR5cGVDbGFzcyA9IFwiY29tbWl0LW1lcmdlXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgY29tbWl0VHlwZS5DSEVSUllfUElDSzpcbiAgICAgICAgICB0eXBlQ2xhc3MgPSBcImNvbW1pdC1jaGVycnktcGlja1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHR5cGVDbGFzcyA9IFwiY29tbWl0LW5vcm1hbFwiO1xuICAgICAgfVxuICAgICAgaWYgKGNvbW1pdFN5bWJvbFR5cGUgPT09IGNvbW1pdFR5cGUuSElHSExJR0hUKSB7XG4gICAgICAgIGNvbnN0IGNpcmNsZSA9IGdCdWxsZXRzLmFwcGVuZChcInJlY3RcIik7XG4gICAgICAgIGNpcmNsZS5hdHRyKFwieFwiLCB4IC0gMTApO1xuICAgICAgICBjaXJjbGUuYXR0cihcInlcIiwgeSAtIDEwKTtcbiAgICAgICAgY2lyY2xlLmF0dHIoXCJoZWlnaHRcIiwgMjApO1xuICAgICAgICBjaXJjbGUuYXR0cihcIndpZHRoXCIsIDIwKTtcbiAgICAgICAgY2lyY2xlLmF0dHIoXG4gICAgICAgICAgXCJjbGFzc1wiLFxuICAgICAgICAgIGBjb21taXQgJHtjb21taXQyLmlkfSBjb21taXQtaGlnaGxpZ2h0JHticmFuY2hQb3NbY29tbWl0Mi5icmFuY2hdLmluZGV4ICUgVEhFTUVfQ09MT1JfTElNSVR9ICR7dHlwZUNsYXNzfS1vdXRlcmBcbiAgICAgICAgKTtcbiAgICAgICAgZ0J1bGxldHMuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwieFwiLCB4IC0gNikuYXR0cihcInlcIiwgeSAtIDYpLmF0dHIoXCJoZWlnaHRcIiwgMTIpLmF0dHIoXCJ3aWR0aFwiLCAxMikuYXR0cihcbiAgICAgICAgICBcImNsYXNzXCIsXG4gICAgICAgICAgYGNvbW1pdCAke2NvbW1pdDIuaWR9IGNvbW1pdCR7YnJhbmNoUG9zW2NvbW1pdDIuYnJhbmNoXS5pbmRleCAlIFRIRU1FX0NPTE9SX0xJTUlUfSAke3R5cGVDbGFzc30taW5uZXJgXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGNvbW1pdFN5bWJvbFR5cGUgPT09IGNvbW1pdFR5cGUuQ0hFUlJZX1BJQ0spIHtcbiAgICAgICAgZ0J1bGxldHMuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJjeFwiLCB4KS5hdHRyKFwiY3lcIiwgeSkuYXR0cihcInJcIiwgMTApLmF0dHIoXCJjbGFzc1wiLCBgY29tbWl0ICR7Y29tbWl0Mi5pZH0gJHt0eXBlQ2xhc3N9YCk7XG4gICAgICAgIGdCdWxsZXRzLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgeCAtIDMpLmF0dHIoXCJjeVwiLCB5ICsgMikuYXR0cihcInJcIiwgMi43NSkuYXR0cihcImZpbGxcIiwgXCIjZmZmXCIpLmF0dHIoXCJjbGFzc1wiLCBgY29tbWl0ICR7Y29tbWl0Mi5pZH0gJHt0eXBlQ2xhc3N9YCk7XG4gICAgICAgIGdCdWxsZXRzLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgeCArIDMpLmF0dHIoXCJjeVwiLCB5ICsgMikuYXR0cihcInJcIiwgMi43NSkuYXR0cihcImZpbGxcIiwgXCIjZmZmXCIpLmF0dHIoXCJjbGFzc1wiLCBgY29tbWl0ICR7Y29tbWl0Mi5pZH0gJHt0eXBlQ2xhc3N9YCk7XG4gICAgICAgIGdCdWxsZXRzLmFwcGVuZChcImxpbmVcIikuYXR0cihcIngxXCIsIHggKyAzKS5hdHRyKFwieTFcIiwgeSArIDEpLmF0dHIoXCJ4MlwiLCB4KS5hdHRyKFwieTJcIiwgeSAtIDUpLmF0dHIoXCJzdHJva2VcIiwgXCIjZmZmXCIpLmF0dHIoXCJjbGFzc1wiLCBgY29tbWl0ICR7Y29tbWl0Mi5pZH0gJHt0eXBlQ2xhc3N9YCk7XG4gICAgICAgIGdCdWxsZXRzLmFwcGVuZChcImxpbmVcIikuYXR0cihcIngxXCIsIHggLSAzKS5hdHRyKFwieTFcIiwgeSArIDEpLmF0dHIoXCJ4MlwiLCB4KS5hdHRyKFwieTJcIiwgeSAtIDUpLmF0dHIoXCJzdHJva2VcIiwgXCIjZmZmXCIpLmF0dHIoXCJjbGFzc1wiLCBgY29tbWl0ICR7Y29tbWl0Mi5pZH0gJHt0eXBlQ2xhc3N9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjaXJjbGUgPSBnQnVsbGV0cy5hcHBlbmQoXCJjaXJjbGVcIik7XG4gICAgICAgIGNpcmNsZS5hdHRyKFwiY3hcIiwgeCk7XG4gICAgICAgIGNpcmNsZS5hdHRyKFwiY3lcIiwgeSk7XG4gICAgICAgIGNpcmNsZS5hdHRyKFwiclwiLCBjb21taXQyLnR5cGUgPT09IGNvbW1pdFR5cGUuTUVSR0UgPyA5IDogMTApO1xuICAgICAgICBjaXJjbGUuYXR0cihcbiAgICAgICAgICBcImNsYXNzXCIsXG4gICAgICAgICAgYGNvbW1pdCAke2NvbW1pdDIuaWR9IGNvbW1pdCR7YnJhbmNoUG9zW2NvbW1pdDIuYnJhbmNoXS5pbmRleCAlIFRIRU1FX0NPTE9SX0xJTUlUfWBcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGNvbW1pdFN5bWJvbFR5cGUgPT09IGNvbW1pdFR5cGUuTUVSR0UpIHtcbiAgICAgICAgICBjb25zdCBjaXJjbGUyID0gZ0J1bGxldHMuYXBwZW5kKFwiY2lyY2xlXCIpO1xuICAgICAgICAgIGNpcmNsZTIuYXR0cihcImN4XCIsIHgpO1xuICAgICAgICAgIGNpcmNsZTIuYXR0cihcImN5XCIsIHkpO1xuICAgICAgICAgIGNpcmNsZTIuYXR0cihcInJcIiwgNik7XG4gICAgICAgICAgY2lyY2xlMi5hdHRyKFxuICAgICAgICAgICAgXCJjbGFzc1wiLFxuICAgICAgICAgICAgYGNvbW1pdCAke3R5cGVDbGFzc30gJHtjb21taXQyLmlkfSBjb21taXQke2JyYW5jaFBvc1tjb21taXQyLmJyYW5jaF0uaW5kZXggJSBUSEVNRV9DT0xPUl9MSU1JVH1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWl0U3ltYm9sVHlwZSA9PT0gY29tbWl0VHlwZS5SRVZFUlNFKSB7XG4gICAgICAgICAgY29uc3QgY3Jvc3MgPSBnQnVsbGV0cy5hcHBlbmQoXCJwYXRoXCIpO1xuICAgICAgICAgIGNyb3NzLmF0dHIoXCJkXCIsIGBNICR7eCAtIDV9LCR7eSAtIDV9TCR7eCArIDV9LCR7eSArIDV9TSR7eCAtIDV9LCR7eSArIDV9TCR7eCArIDV9LCR7eSAtIDV9YCkuYXR0cihcbiAgICAgICAgICAgIFwiY2xhc3NcIixcbiAgICAgICAgICAgIGBjb21taXQgJHt0eXBlQ2xhc3N9ICR7Y29tbWl0Mi5pZH0gY29tbWl0JHticmFuY2hQb3NbY29tbWl0Mi5icmFuY2hdLmluZGV4ICUgVEhFTUVfQ09MT1JfTElNSVR9YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRpciA9PT0gXCJUQlwiKSB7XG4gICAgICBjb21taXRQb3NbY29tbWl0Mi5pZF0gPSB7IHgsIHk6IHBvc1dpdGhPZmZzZXQgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tbWl0UG9zW2NvbW1pdDIuaWRdID0geyB4OiBwb3NXaXRoT2Zmc2V0LCB5IH07XG4gICAgfVxuICAgIGlmIChtb2RpZnlHcmFwaCkge1xuICAgICAgY29uc3QgcHggPSA0O1xuICAgICAgY29uc3QgcHkgPSAyO1xuICAgICAgaWYgKGNvbW1pdDIudHlwZSAhPT0gY29tbWl0VHlwZS5DSEVSUllfUElDSyAmJiAoY29tbWl0Mi5jdXN0b21JZCAmJiBjb21taXQyLnR5cGUgPT09IGNvbW1pdFR5cGUuTUVSR0UgfHwgY29tbWl0Mi50eXBlICE9PSBjb21taXRUeXBlLk1FUkdFKSAmJiBnaXRHcmFwaENvbmZpZy5zaG93Q29tbWl0TGFiZWwpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGdMYWJlbHMuYXBwZW5kKFwiZ1wiKTtcbiAgICAgICAgY29uc3QgbGFiZWxCa2cgPSB3cmFwcGVyLmluc2VydChcInJlY3RcIikuYXR0cihcImNsYXNzXCIsIFwiY29tbWl0LWxhYmVsLWJrZ1wiKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IHdyYXBwZXIuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCBwb3MpLmF0dHIoXCJ5XCIsIHkgKyAyNSkuYXR0cihcImNsYXNzXCIsIFwiY29tbWl0LWxhYmVsXCIpLnRleHQoY29tbWl0Mi5pZCk7XG4gICAgICAgIGxldCBiYm94ID0gdGV4dC5ub2RlKCkuZ2V0QkJveCgpO1xuICAgICAgICBsYWJlbEJrZy5hdHRyKFwieFwiLCBwb3NXaXRoT2Zmc2V0IC0gYmJveC53aWR0aCAvIDIgLSBweSkuYXR0cihcInlcIiwgeSArIDEzLjUpLmF0dHIoXCJ3aWR0aFwiLCBiYm94LndpZHRoICsgMiAqIHB5KS5hdHRyKFwiaGVpZ2h0XCIsIGJib3guaGVpZ2h0ICsgMiAqIHB5KTtcbiAgICAgICAgaWYgKGRpciA9PT0gXCJUQlwiKSB7XG4gICAgICAgICAgbGFiZWxCa2cuYXR0cihcInhcIiwgeCAtIChiYm94LndpZHRoICsgNCAqIHB4ICsgNSkpLmF0dHIoXCJ5XCIsIHkgLSAxMik7XG4gICAgICAgICAgdGV4dC5hdHRyKFwieFwiLCB4IC0gKGJib3gud2lkdGggKyA0ICogcHgpKS5hdHRyKFwieVwiLCB5ICsgYmJveC5oZWlnaHQgLSAxMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpciAhPT0gXCJUQlwiKSB7XG4gICAgICAgICAgdGV4dC5hdHRyKFwieFwiLCBwb3NXaXRoT2Zmc2V0IC0gYmJveC53aWR0aCAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnaXRHcmFwaENvbmZpZy5yb3RhdGVDb21taXRMYWJlbCkge1xuICAgICAgICAgIGlmIChkaXIgPT09IFwiVEJcIikge1xuICAgICAgICAgICAgdGV4dC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC00NSwgXCIgKyB4ICsgXCIsIFwiICsgeSArIFwiKVwiKTtcbiAgICAgICAgICAgIGxhYmVsQmtnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTQ1LCBcIiArIHggKyBcIiwgXCIgKyB5ICsgXCIpXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcl94ID0gLTcuNSAtIChiYm94LndpZHRoICsgMTApIC8gMjUgKiA5LjU7XG4gICAgICAgICAgICBsZXQgcl95ID0gMTAgKyBiYm94LndpZHRoIC8gMjUgKiA4LjU7XG4gICAgICAgICAgICB3cmFwcGVyLmF0dHIoXG4gICAgICAgICAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICAgICAgICAgIFwidHJhbnNsYXRlKFwiICsgcl94ICsgXCIsIFwiICsgcl95ICsgXCIpIHJvdGF0ZSgtNDUsIFwiICsgcG9zICsgXCIsIFwiICsgeSArIFwiKVwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvbW1pdDIudGFnKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBnTGFiZWxzLmluc2VydChcInBvbHlnb25cIik7XG4gICAgICAgIGNvbnN0IGhvbGUgPSBnTGFiZWxzLmFwcGVuZChcImNpcmNsZVwiKTtcbiAgICAgICAgY29uc3QgdGFnID0gZ0xhYmVscy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ5XCIsIHkgLSAxNikuYXR0cihcImNsYXNzXCIsIFwidGFnLWxhYmVsXCIpLnRleHQoY29tbWl0Mi50YWcpO1xuICAgICAgICBsZXQgdGFnQmJveCA9IHRhZy5ub2RlKCkuZ2V0QkJveCgpO1xuICAgICAgICB0YWcuYXR0cihcInhcIiwgcG9zV2l0aE9mZnNldCAtIHRhZ0Jib3gud2lkdGggLyAyKTtcbiAgICAgICAgY29uc3QgaDIgPSB0YWdCYm94LmhlaWdodCAvIDI7XG4gICAgICAgIGNvbnN0IGx5ID0geSAtIDE5LjI7XG4gICAgICAgIHJlY3QuYXR0cihcImNsYXNzXCIsIFwidGFnLWxhYmVsLWJrZ1wiKS5hdHRyKFxuICAgICAgICAgIFwicG9pbnRzXCIsXG4gICAgICAgICAgYFxuICAgICAgICAgICR7cG9zIC0gdGFnQmJveC53aWR0aCAvIDIgLSBweCAvIDJ9LCR7bHkgKyBweX1cbiAgICAgICAgICAke3BvcyAtIHRhZ0Jib3gud2lkdGggLyAyIC0gcHggLyAyfSwke2x5IC0gcHl9XG4gICAgICAgICAgJHtwb3NXaXRoT2Zmc2V0IC0gdGFnQmJveC53aWR0aCAvIDIgLSBweH0sJHtseSAtIGgyIC0gcHl9XG4gICAgICAgICAgJHtwb3NXaXRoT2Zmc2V0ICsgdGFnQmJveC53aWR0aCAvIDIgKyBweH0sJHtseSAtIGgyIC0gcHl9XG4gICAgICAgICAgJHtwb3NXaXRoT2Zmc2V0ICsgdGFnQmJveC53aWR0aCAvIDIgKyBweH0sJHtseSArIGgyICsgcHl9XG4gICAgICAgICAgJHtwb3NXaXRoT2Zmc2V0IC0gdGFnQmJveC53aWR0aCAvIDIgLSBweH0sJHtseSArIGgyICsgcHl9YFxuICAgICAgICApO1xuICAgICAgICBob2xlLmF0dHIoXCJjeFwiLCBwb3MgLSB0YWdCYm94LndpZHRoIC8gMiArIHB4IC8gMikuYXR0cihcImN5XCIsIGx5KS5hdHRyKFwiclwiLCAxLjUpLmF0dHIoXCJjbGFzc1wiLCBcInRhZy1ob2xlXCIpO1xuICAgICAgICBpZiAoZGlyID09PSBcIlRCXCIpIHtcbiAgICAgICAgICByZWN0LmF0dHIoXCJjbGFzc1wiLCBcInRhZy1sYWJlbC1ia2dcIikuYXR0cihcbiAgICAgICAgICAgIFwicG9pbnRzXCIsXG4gICAgICAgICAgICBgXG4gICAgICAgICAgICAke3h9LCR7cG9zICsgcHl9XG4gICAgICAgICAgICAke3h9LCR7cG9zIC0gcHl9XG4gICAgICAgICAgICAke3ggKyBsYXlvdXRPZmZzZXR9LCR7cG9zIC0gaDIgLSBweX1cbiAgICAgICAgICAgICR7eCArIGxheW91dE9mZnNldCArIHRhZ0Jib3gud2lkdGggKyBweH0sJHtwb3MgLSBoMiAtIHB5fVxuICAgICAgICAgICAgJHt4ICsgbGF5b3V0T2Zmc2V0ICsgdGFnQmJveC53aWR0aCArIHB4fSwke3BvcyArIGgyICsgcHl9XG4gICAgICAgICAgICAke3ggKyBsYXlvdXRPZmZzZXR9LCR7cG9zICsgaDIgKyBweX1gXG4gICAgICAgICAgKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDEyLDEyKSByb3RhdGUoNDUsIFwiICsgeCArIFwiLFwiICsgcG9zICsgXCIpXCIpO1xuICAgICAgICAgIGhvbGUuYXR0cihcImN4XCIsIHggKyBweCAvIDIpLmF0dHIoXCJjeVwiLCBwb3MpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMTIsMTIpIHJvdGF0ZSg0NSwgXCIgKyB4ICsgXCIsXCIgKyBwb3MgKyBcIilcIik7XG4gICAgICAgICAgdGFnLmF0dHIoXCJ4XCIsIHggKyA1KS5hdHRyKFwieVwiLCBwb3MgKyAzKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDE0LDE0KSByb3RhdGUoNDUsIFwiICsgeCArIFwiLFwiICsgcG9zICsgXCIpXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHBvcyArPSBjb21taXRTdGVwICsgbGF5b3V0T2Zmc2V0O1xuICAgIGlmIChwb3MgPiBtYXhQb3MpIHtcbiAgICAgIG1heFBvcyA9IHBvcztcbiAgICB9XG4gIH0pO1xufTtcbmNvbnN0IHNob3VsZFJlcm91dGVBcnJvdyA9IChjb21taXRBLCBjb21taXRCLCBwMSwgcDIsIGFsbENvbW1pdHMpID0+IHtcbiAgY29uc3QgY29tbWl0QklzRnVydGhlc3QgPSBkaXIgPT09IFwiVEJcIiA/IHAxLnggPCBwMi54IDogcDEueSA8IHAyLnk7XG4gIGNvbnN0IGJyYW5jaFRvR2V0Q3VydmUgPSBjb21taXRCSXNGdXJ0aGVzdCA/IGNvbW1pdEIuYnJhbmNoIDogY29tbWl0QS5icmFuY2g7XG4gIGNvbnN0IGlzT25CcmFuY2hUb0dldEN1cnZlID0gKHgpID0+IHguYnJhbmNoID09PSBicmFuY2hUb0dldEN1cnZlO1xuICBjb25zdCBpc0JldHdlZW5Db21taXRzID0gKHgpID0+IHguc2VxID4gY29tbWl0QS5zZXEgJiYgeC5zZXEgPCBjb21taXRCLnNlcTtcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoYWxsQ29tbWl0cykuc29tZSgoY29tbWl0WCkgPT4ge1xuICAgIHJldHVybiBpc0JldHdlZW5Db21taXRzKGNvbW1pdFgpICYmIGlzT25CcmFuY2hUb0dldEN1cnZlKGNvbW1pdFgpO1xuICB9KTtcbn07XG5jb25zdCBmaW5kTGFuZSA9ICh5MSwgeTIsIGRlcHRoID0gMCkgPT4ge1xuICBjb25zdCBjYW5kaWRhdGUgPSB5MSArIE1hdGguYWJzKHkxIC0geTIpIC8gMjtcbiAgaWYgKGRlcHRoID4gNSkge1xuICAgIHJldHVybiBjYW5kaWRhdGU7XG4gIH1cbiAgbGV0IG9rID0gbGFuZXMuZXZlcnkoKGxhbmUpID0+IE1hdGguYWJzKGxhbmUgLSBjYW5kaWRhdGUpID49IDEwKTtcbiAgaWYgKG9rKSB7XG4gICAgbGFuZXMucHVzaChjYW5kaWRhdGUpO1xuICAgIHJldHVybiBjYW5kaWRhdGU7XG4gIH1cbiAgY29uc3QgZGlmZiA9IE1hdGguYWJzKHkxIC0geTIpO1xuICByZXR1cm4gZmluZExhbmUoeTEsIHkyIC0gZGlmZiAvIDUsIGRlcHRoICsgMSk7XG59O1xuY29uc3QgZHJhd0Fycm93ID0gKHN2ZywgY29tbWl0QSwgY29tbWl0QiwgYWxsQ29tbWl0cykgPT4ge1xuICBjb25zdCBwMSA9IGNvbW1pdFBvc1tjb21taXRBLmlkXTtcbiAgY29uc3QgcDIgPSBjb21taXRQb3NbY29tbWl0Qi5pZF07XG4gIGNvbnN0IGFycm93TmVlZHNSZXJvdXRpbmcgPSBzaG91bGRSZXJvdXRlQXJyb3coY29tbWl0QSwgY29tbWl0QiwgcDEsIHAyLCBhbGxDb21taXRzKTtcbiAgbGV0IGFyYyA9IFwiXCI7XG4gIGxldCBhcmMyID0gXCJcIjtcbiAgbGV0IHJhZGl1cyA9IDA7XG4gIGxldCBvZmZzZXQgPSAwO1xuICBsZXQgY29sb3JDbGFzc051bSA9IGJyYW5jaFBvc1tjb21taXRCLmJyYW5jaF0uaW5kZXg7XG4gIGlmIChjb21taXRCLnR5cGUgPT09IGNvbW1pdFR5cGUuTUVSR0UgJiYgY29tbWl0QS5pZCAhPT0gY29tbWl0Qi5wYXJlbnRzWzBdKSB7XG4gICAgY29sb3JDbGFzc051bSA9IGJyYW5jaFBvc1tjb21taXRBLmJyYW5jaF0uaW5kZXg7XG4gIH1cbiAgbGV0IGxpbmVEZWY7XG4gIGlmIChhcnJvd05lZWRzUmVyb3V0aW5nKSB7XG4gICAgYXJjID0gXCJBIDEwIDEwLCAwLCAwLCAwLFwiO1xuICAgIGFyYzIgPSBcIkEgMTAgMTAsIDAsIDAsIDEsXCI7XG4gICAgcmFkaXVzID0gMTA7XG4gICAgb2Zmc2V0ID0gMTA7XG4gICAgY29uc3QgbGluZVkgPSBwMS55IDwgcDIueSA/IGZpbmRMYW5lKHAxLnksIHAyLnkpIDogZmluZExhbmUocDIueSwgcDEueSk7XG4gICAgY29uc3QgbGluZVggPSBwMS54IDwgcDIueCA/IGZpbmRMYW5lKHAxLngsIHAyLngpIDogZmluZExhbmUocDIueCwgcDEueCk7XG4gICAgaWYgKGRpciA9PT0gXCJUQlwiKSB7XG4gICAgICBpZiAocDEueCA8IHAyLngpIHtcbiAgICAgICAgbGluZURlZiA9IGBNICR7cDEueH0gJHtwMS55fSBMICR7bGluZVggLSByYWRpdXN9ICR7cDEueX0gJHthcmMyfSAke2xpbmVYfSAke3AxLnkgKyBvZmZzZXR9IEwgJHtsaW5lWH0gJHtwMi55IC0gcmFkaXVzfSAke2FyY30gJHtsaW5lWCArIG9mZnNldH0gJHtwMi55fSBMICR7cDIueH0gJHtwMi55fWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xvckNsYXNzTnVtID0gYnJhbmNoUG9zW2NvbW1pdEEuYnJhbmNoXS5pbmRleDtcbiAgICAgICAgbGluZURlZiA9IGBNICR7cDEueH0gJHtwMS55fSBMICR7bGluZVggKyByYWRpdXN9ICR7cDEueX0gJHthcmN9ICR7bGluZVh9ICR7cDEueSArIG9mZnNldH0gTCAke2xpbmVYfSAke3AyLnkgLSByYWRpdXN9ICR7YXJjMn0gJHtsaW5lWCAtIG9mZnNldH0gJHtwMi55fSBMICR7cDIueH0gJHtwMi55fWA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwMS55IDwgcDIueSkge1xuICAgICAgICBsaW5lRGVmID0gYE0gJHtwMS54fSAke3AxLnl9IEwgJHtwMS54fSAke2xpbmVZIC0gcmFkaXVzfSAke2FyY30gJHtwMS54ICsgb2Zmc2V0fSAke2xpbmVZfSBMICR7cDIueCAtIHJhZGl1c30gJHtsaW5lWX0gJHthcmMyfSAke3AyLnh9ICR7bGluZVkgKyBvZmZzZXR9IEwgJHtwMi54fSAke3AyLnl9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbG9yQ2xhc3NOdW0gPSBicmFuY2hQb3NbY29tbWl0QS5icmFuY2hdLmluZGV4O1xuICAgICAgICBsaW5lRGVmID0gYE0gJHtwMS54fSAke3AxLnl9IEwgJHtwMS54fSAke2xpbmVZICsgcmFkaXVzfSAke2FyYzJ9ICR7cDEueCArIG9mZnNldH0gJHtsaW5lWX0gTCAke3AyLnggLSByYWRpdXN9ICR7bGluZVl9ICR7YXJjfSAke3AyLnh9ICR7bGluZVkgLSBvZmZzZXR9IEwgJHtwMi54fSAke3AyLnl9YDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYXJjID0gXCJBIDIwIDIwLCAwLCAwLCAwLFwiO1xuICAgIGFyYzIgPSBcIkEgMjAgMjAsIDAsIDAsIDEsXCI7XG4gICAgcmFkaXVzID0gMjA7XG4gICAgb2Zmc2V0ID0gMjA7XG4gICAgaWYgKGRpciA9PT0gXCJUQlwiKSB7XG4gICAgICBpZiAocDEueCA8IHAyLngpIHtcbiAgICAgICAgaWYgKGNvbW1pdEIudHlwZSA9PT0gY29tbWl0VHlwZS5NRVJHRSAmJiBjb21taXRBLmlkICE9PSBjb21taXRCLnBhcmVudHNbMF0pIHtcbiAgICAgICAgICBsaW5lRGVmID0gYE0gJHtwMS54fSAke3AxLnl9IEwgJHtwMS54fSAke3AyLnkgLSByYWRpdXN9ICR7YXJjfSAke3AxLnggKyBvZmZzZXR9ICR7cDIueX0gTCAke3AyLnh9ICR7cDIueX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpbmVEZWYgPSBgTSAke3AxLnh9ICR7cDEueX0gTCAke3AyLnggLSByYWRpdXN9ICR7cDEueX0gJHthcmMyfSAke3AyLnh9ICR7cDEueSArIG9mZnNldH0gTCAke3AyLnh9ICR7cDIueX1gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocDEueCA+IHAyLngpIHtcbiAgICAgICAgYXJjID0gXCJBIDIwIDIwLCAwLCAwLCAwLFwiO1xuICAgICAgICBhcmMyID0gXCJBIDIwIDIwLCAwLCAwLCAxLFwiO1xuICAgICAgICByYWRpdXMgPSAyMDtcbiAgICAgICAgb2Zmc2V0ID0gMjA7XG4gICAgICAgIGlmIChjb21taXRCLnR5cGUgPT09IGNvbW1pdFR5cGUuTUVSR0UgJiYgY29tbWl0QS5pZCAhPT0gY29tbWl0Qi5wYXJlbnRzWzBdKSB7XG4gICAgICAgICAgbGluZURlZiA9IGBNICR7cDEueH0gJHtwMS55fSBMICR7cDEueH0gJHtwMi55IC0gcmFkaXVzfSAke2FyYzJ9ICR7cDEueCAtIG9mZnNldH0gJHtwMi55fSBMICR7cDIueH0gJHtwMi55fWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGluZURlZiA9IGBNICR7cDEueH0gJHtwMS55fSBMICR7cDIueCArIHJhZGl1c30gJHtwMS55fSAke2FyY30gJHtwMi54fSAke3AxLnkgKyBvZmZzZXR9IEwgJHtwMi54fSAke3AyLnl9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHAxLnggPT09IHAyLngpIHtcbiAgICAgICAgbGluZURlZiA9IGBNICR7cDEueH0gJHtwMS55fSBMICR7cDIueH0gJHtwMi55fWA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwMS55IDwgcDIueSkge1xuICAgICAgICBpZiAoY29tbWl0Qi50eXBlID09PSBjb21taXRUeXBlLk1FUkdFICYmIGNvbW1pdEEuaWQgIT09IGNvbW1pdEIucGFyZW50c1swXSkge1xuICAgICAgICAgIGxpbmVEZWYgPSBgTSAke3AxLnh9ICR7cDEueX0gTCAke3AyLnggLSByYWRpdXN9ICR7cDEueX0gJHthcmMyfSAke3AyLnh9ICR7cDEueSArIG9mZnNldH0gTCAke3AyLnh9ICR7cDIueX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpbmVEZWYgPSBgTSAke3AxLnh9ICR7cDEueX0gTCAke3AxLnh9ICR7cDIueSAtIHJhZGl1c30gJHthcmN9ICR7cDEueCArIG9mZnNldH0gJHtwMi55fSBMICR7cDIueH0gJHtwMi55fWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwMS55ID4gcDIueSkge1xuICAgICAgICBpZiAoY29tbWl0Qi50eXBlID09PSBjb21taXRUeXBlLk1FUkdFICYmIGNvbW1pdEEuaWQgIT09IGNvbW1pdEIucGFyZW50c1swXSkge1xuICAgICAgICAgIGxpbmVEZWYgPSBgTSAke3AxLnh9ICR7cDEueX0gTCAke3AyLnggLSByYWRpdXN9ICR7cDEueX0gJHthcmN9ICR7cDIueH0gJHtwMS55IC0gb2Zmc2V0fSBMICR7cDIueH0gJHtwMi55fWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGluZURlZiA9IGBNICR7cDEueH0gJHtwMS55fSBMICR7cDEueH0gJHtwMi55ICsgcmFkaXVzfSAke2FyYzJ9ICR7cDEueCArIG9mZnNldH0gJHtwMi55fSBMICR7cDIueH0gJHtwMi55fWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwMS55ID09PSBwMi55KSB7XG4gICAgICAgIGxpbmVEZWYgPSBgTSAke3AxLnh9ICR7cDEueX0gTCAke3AyLnh9ICR7cDIueX1gO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdmcuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBsaW5lRGVmKS5hdHRyKFwiY2xhc3NcIiwgXCJhcnJvdyBhcnJvd1wiICsgY29sb3JDbGFzc051bSAlIFRIRU1FX0NPTE9SX0xJTUlUKTtcbn07XG5jb25zdCBkcmF3QXJyb3dzID0gKHN2ZywgY29tbWl0czIpID0+IHtcbiAgY29uc3QgZ0Fycm93cyA9IHN2Zy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImNvbW1pdC1hcnJvd3NcIik7XG4gIE9iamVjdC5rZXlzKGNvbW1pdHMyKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCBjb21taXQyID0gY29tbWl0czJba2V5XTtcbiAgICBpZiAoY29tbWl0Mi5wYXJlbnRzICYmIGNvbW1pdDIucGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb21taXQyLnBhcmVudHMuZm9yRWFjaCgocGFyZW50KSA9PiB7XG4gICAgICAgIGRyYXdBcnJvdyhnQXJyb3dzLCBjb21taXRzMltwYXJlbnRdLCBjb21taXQyLCBjb21taXRzMik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcbmNvbnN0IGRyYXdCcmFuY2hlcyA9IChzdmcsIGJyYW5jaGVzMikgPT4ge1xuICBjb25zdCBnaXRHcmFwaENvbmZpZyA9IGdldENvbmZpZygpLmdpdEdyYXBoO1xuICBjb25zdCBnID0gc3ZnLmFwcGVuZChcImdcIik7XG4gIGJyYW5jaGVzMi5mb3JFYWNoKChicmFuY2gyLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGFkanVzdEluZGV4Rm9yVGhlbWUgPSBpbmRleCAlIFRIRU1FX0NPTE9SX0xJTUlUO1xuICAgIGNvbnN0IHBvcyA9IGJyYW5jaFBvc1ticmFuY2gyLm5hbWVdLnBvcztcbiAgICBjb25zdCBsaW5lID0gZy5hcHBlbmQoXCJsaW5lXCIpO1xuICAgIGxpbmUuYXR0cihcIngxXCIsIDApO1xuICAgIGxpbmUuYXR0cihcInkxXCIsIHBvcyk7XG4gICAgbGluZS5hdHRyKFwieDJcIiwgbWF4UG9zKTtcbiAgICBsaW5lLmF0dHIoXCJ5MlwiLCBwb3MpO1xuICAgIGxpbmUuYXR0cihcImNsYXNzXCIsIFwiYnJhbmNoIGJyYW5jaFwiICsgYWRqdXN0SW5kZXhGb3JUaGVtZSk7XG4gICAgaWYgKGRpciA9PT0gXCJUQlwiKSB7XG4gICAgICBsaW5lLmF0dHIoXCJ5MVwiLCAzMCk7XG4gICAgICBsaW5lLmF0dHIoXCJ4MVwiLCBwb3MpO1xuICAgICAgbGluZS5hdHRyKFwieTJcIiwgbWF4UG9zKTtcbiAgICAgIGxpbmUuYXR0cihcIngyXCIsIHBvcyk7XG4gICAgfVxuICAgIGxhbmVzLnB1c2gocG9zKTtcbiAgICBsZXQgbmFtZSA9IGJyYW5jaDIubmFtZTtcbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkcmF3VGV4dChuYW1lKTtcbiAgICBjb25zdCBia2cgPSBnLmluc2VydChcInJlY3RcIik7XG4gICAgY29uc3QgYnJhbmNoTGFiZWwgPSBnLmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiYnJhbmNoTGFiZWxcIik7XG4gICAgY29uc3QgbGFiZWwgPSBicmFuY2hMYWJlbC5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsIGJyYW5jaC1sYWJlbFwiICsgYWRqdXN0SW5kZXhGb3JUaGVtZSk7XG4gICAgbGFiZWwubm9kZSgpLmFwcGVuZENoaWxkKGxhYmVsRWxlbWVudCk7XG4gICAgbGV0IGJib3ggPSBsYWJlbEVsZW1lbnQuZ2V0QkJveCgpO1xuICAgIGJrZy5hdHRyKFwiY2xhc3NcIiwgXCJicmFuY2hMYWJlbEJrZyBsYWJlbFwiICsgYWRqdXN0SW5kZXhGb3JUaGVtZSkuYXR0cihcInJ4XCIsIDQpLmF0dHIoXCJyeVwiLCA0KS5hdHRyKFwieFwiLCAtYmJveC53aWR0aCAtIDQgLSAoZ2l0R3JhcGhDb25maWcucm90YXRlQ29tbWl0TGFiZWwgPT09IHRydWUgPyAzMCA6IDApKS5hdHRyKFwieVwiLCAtYmJveC5oZWlnaHQgLyAyICsgOCkuYXR0cihcIndpZHRoXCIsIGJib3gud2lkdGggKyAxOCkuYXR0cihcImhlaWdodFwiLCBiYm94LmhlaWdodCArIDQpO1xuICAgIGxhYmVsLmF0dHIoXG4gICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoXCIgKyAoLWJib3gud2lkdGggLSAxNCAtIChnaXRHcmFwaENvbmZpZy5yb3RhdGVDb21taXRMYWJlbCA9PT0gdHJ1ZSA/IDMwIDogMCkpICsgXCIsIFwiICsgKHBvcyAtIGJib3guaGVpZ2h0IC8gMiAtIDEpICsgXCIpXCJcbiAgICApO1xuICAgIGlmIChkaXIgPT09IFwiVEJcIikge1xuICAgICAgYmtnLmF0dHIoXCJ4XCIsIHBvcyAtIGJib3gud2lkdGggLyAyIC0gMTApLmF0dHIoXCJ5XCIsIDApO1xuICAgICAgbGFiZWwuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIChwb3MgLSBiYm94LndpZHRoIC8gMiAtIDUpICsgXCIsIDApXCIpO1xuICAgIH1cbiAgICBpZiAoZGlyICE9PSBcIlRCXCIpIHtcbiAgICAgIGJrZy5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0xOSwgXCIgKyAocG9zIC0gYmJveC5oZWlnaHQgLyAyKSArIFwiKVwiKTtcbiAgICB9XG4gIH0pO1xufTtcbmNvbnN0IGRyYXcgPSBmdW5jdGlvbih0eHQsIGlkLCB2ZXIsIGRpYWdPYmopIHtcbiAgY2xlYXIoKTtcbiAgY29uc3QgY29uZiA9IGdldENvbmZpZygpO1xuICBjb25zdCBnaXRHcmFwaENvbmZpZyA9IGNvbmYuZ2l0R3JhcGg7XG4gIGxvZy5kZWJ1ZyhcImluIGdpdGdyYXBoIHJlbmRlcmVyXCIsIHR4dCArIFwiXFxuXCIsIFwiaWQ6XCIsIGlkLCB2ZXIpO1xuICBhbGxDb21taXRzRGljdCA9IGRpYWdPYmouZGIuZ2V0Q29tbWl0cygpO1xuICBjb25zdCBicmFuY2hlczIgPSBkaWFnT2JqLmRiLmdldEJyYW5jaGVzQXNPYmpBcnJheSgpO1xuICBkaXIgPSBkaWFnT2JqLmRiLmdldERpcmVjdGlvbigpO1xuICBjb25zdCBkaWFncmFtMiA9IHNlbGVjdChgW2lkPVwiJHtpZH1cIl1gKTtcbiAgbGV0IHBvcyA9IDA7XG4gIGJyYW5jaGVzMi5mb3JFYWNoKChicmFuY2gyLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRyYXdUZXh0KGJyYW5jaDIubmFtZSk7XG4gICAgY29uc3QgZyA9IGRpYWdyYW0yLmFwcGVuZChcImdcIik7XG4gICAgY29uc3QgYnJhbmNoTGFiZWwgPSBnLmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiYnJhbmNoTGFiZWxcIik7XG4gICAgY29uc3QgbGFiZWwgPSBicmFuY2hMYWJlbC5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsIGJyYW5jaC1sYWJlbFwiKTtcbiAgICBsYWJlbC5ub2RlKCkuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcbiAgICBsZXQgYmJveCA9IGxhYmVsRWxlbWVudC5nZXRCQm94KCk7XG4gICAgYnJhbmNoUG9zW2JyYW5jaDIubmFtZV0gPSB7IHBvcywgaW5kZXggfTtcbiAgICBwb3MgKz0gNTAgKyAoZ2l0R3JhcGhDb25maWcucm90YXRlQ29tbWl0TGFiZWwgPyA0MCA6IDApICsgKGRpciA9PT0gXCJUQlwiID8gYmJveC53aWR0aCAvIDIgOiAwKTtcbiAgICBsYWJlbC5yZW1vdmUoKTtcbiAgICBicmFuY2hMYWJlbC5yZW1vdmUoKTtcbiAgICBnLnJlbW92ZSgpO1xuICB9KTtcbiAgZHJhd0NvbW1pdHMoZGlhZ3JhbTIsIGFsbENvbW1pdHNEaWN0LCBmYWxzZSk7XG4gIGlmIChnaXRHcmFwaENvbmZpZy5zaG93QnJhbmNoZXMpIHtcbiAgICBkcmF3QnJhbmNoZXMoZGlhZ3JhbTIsIGJyYW5jaGVzMik7XG4gIH1cbiAgZHJhd0Fycm93cyhkaWFncmFtMiwgYWxsQ29tbWl0c0RpY3QpO1xuICBkcmF3Q29tbWl0cyhkaWFncmFtMiwgYWxsQ29tbWl0c0RpY3QsIHRydWUpO1xuICB1dGlscy5pbnNlcnRUaXRsZShcbiAgICBkaWFncmFtMixcbiAgICBcImdpdFRpdGxlVGV4dFwiLFxuICAgIGdpdEdyYXBoQ29uZmlnLnRpdGxlVG9wTWFyZ2luLFxuICAgIGRpYWdPYmouZGIuZ2V0RGlhZ3JhbVRpdGxlKClcbiAgKTtcbiAgc2V0dXBHcmFwaFZpZXdib3goXG4gICAgdm9pZCAwLFxuICAgIGRpYWdyYW0yLFxuICAgIGdpdEdyYXBoQ29uZmlnLmRpYWdyYW1QYWRkaW5nLFxuICAgIGdpdEdyYXBoQ29uZmlnLnVzZU1heFdpZHRoID8/IGNvbmYudXNlTWF4V2lkdGhcbiAgKTtcbn07XG5jb25zdCBnaXRHcmFwaFJlbmRlcmVyID0ge1xuICBkcmF3XG59O1xuY29uc3QgZ2V0U3R5bGVzID0gKG9wdGlvbnMyKSA9PiBgXG4gIC5jb21taXQtaWQsXG4gIC5jb21taXQtbXNnLFxuICAuYnJhbmNoLWxhYmVsIHtcbiAgICBmaWxsOiBsaWdodGdyZXk7XG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBmb250LWZhbWlseTogJ3RyZWJ1Y2hldCBtcycsIHZlcmRhbmEsIGFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tZXJtYWlkLWZvbnQtZmFtaWx5KTtcbiAgfVxuICAke1swLCAxLCAyLCAzLCA0LCA1LCA2LCA3XS5tYXAoXG4gIChpKSA9PiBgXG4gICAgICAgIC5icmFuY2gtbGFiZWwke2l9IHsgZmlsbDogJHtvcHRpb25zMltcImdpdEJyYW5jaExhYmVsXCIgKyBpXX07IH1cbiAgICAgICAgLmNvbW1pdCR7aX0geyBzdHJva2U6ICR7b3B0aW9uczJbXCJnaXRcIiArIGldfTsgZmlsbDogJHtvcHRpb25zMltcImdpdFwiICsgaV19OyB9XG4gICAgICAgIC5jb21taXQtaGlnaGxpZ2h0JHtpfSB7IHN0cm9rZTogJHtvcHRpb25zMltcImdpdEludlwiICsgaV19OyBmaWxsOiAke29wdGlvbnMyW1wiZ2l0SW52XCIgKyBpXX07IH1cbiAgICAgICAgLmxhYmVsJHtpfSAgeyBmaWxsOiAke29wdGlvbnMyW1wiZ2l0XCIgKyBpXX07IH1cbiAgICAgICAgLmFycm93JHtpfSB7IHN0cm9rZTogJHtvcHRpb25zMltcImdpdFwiICsgaV19OyB9XG4gICAgICAgIGBcbikuam9pbihcIlxcblwiKX1cblxuICAuYnJhbmNoIHtcbiAgICBzdHJva2Utd2lkdGg6IDE7XG4gICAgc3Ryb2tlOiAke29wdGlvbnMyLmxpbmVDb2xvcn07XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMjtcbiAgfVxuICAuY29tbWl0LWxhYmVsIHsgZm9udC1zaXplOiAke29wdGlvbnMyLmNvbW1pdExhYmVsRm9udFNpemV9OyBmaWxsOiAke29wdGlvbnMyLmNvbW1pdExhYmVsQ29sb3J9O31cbiAgLmNvbW1pdC1sYWJlbC1ia2cgeyBmb250LXNpemU6ICR7b3B0aW9uczIuY29tbWl0TGFiZWxGb250U2l6ZX07IGZpbGw6ICR7b3B0aW9uczIuY29tbWl0TGFiZWxCYWNrZ3JvdW5kfTsgb3BhY2l0eTogMC41OyB9XG4gIC50YWctbGFiZWwgeyBmb250LXNpemU6ICR7b3B0aW9uczIudGFnTGFiZWxGb250U2l6ZX07IGZpbGw6ICR7b3B0aW9uczIudGFnTGFiZWxDb2xvcn07fVxuICAudGFnLWxhYmVsLWJrZyB7IGZpbGw6ICR7b3B0aW9uczIudGFnTGFiZWxCYWNrZ3JvdW5kfTsgc3Ryb2tlOiAke29wdGlvbnMyLnRhZ0xhYmVsQm9yZGVyfTsgfVxuICAudGFnLWhvbGUgeyBmaWxsOiAke29wdGlvbnMyLnRleHRDb2xvcn07IH1cblxuICAuY29tbWl0LW1lcmdlIHtcbiAgICBzdHJva2U6ICR7b3B0aW9uczIucHJpbWFyeUNvbG9yfTtcbiAgICBmaWxsOiAke29wdGlvbnMyLnByaW1hcnlDb2xvcn07XG4gIH1cbiAgLmNvbW1pdC1yZXZlcnNlIHtcbiAgICBzdHJva2U6ICR7b3B0aW9uczIucHJpbWFyeUNvbG9yfTtcbiAgICBmaWxsOiAke29wdGlvbnMyLnByaW1hcnlDb2xvcn07XG4gICAgc3Ryb2tlLXdpZHRoOiAzO1xuICB9XG4gIC5jb21taXQtaGlnaGxpZ2h0LW91dGVyIHtcbiAgfVxuICAuY29tbWl0LWhpZ2hsaWdodC1pbm5lciB7XG4gICAgc3Ryb2tlOiAke29wdGlvbnMyLnByaW1hcnlDb2xvcn07XG4gICAgZmlsbDogJHtvcHRpb25zMi5wcmltYXJ5Q29sb3J9O1xuICB9XG5cbiAgLmFycm93IHsgc3Ryb2tlLXdpZHRoOiA4OyBzdHJva2UtbGluZWNhcDogcm91bmQ7IGZpbGw6IG5vbmV9XG4gIC5naXRUaXRsZVRleHQge1xuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZpbGw6ICR7b3B0aW9uczIudGV4dENvbG9yfTtcbiAgfVxuYDtcbmNvbnN0IGdpdEdyYXBoU3R5bGVzID0gZ2V0U3R5bGVzO1xuY29uc3QgZGlhZ3JhbSA9IHtcbiAgcGFyc2VyOiBnaXRHcmFwaFBhcnNlcixcbiAgZGI6IGdpdEdyYXBoRGIsXG4gIHJlbmRlcmVyOiBnaXRHcmFwaFJlbmRlcmVyLFxuICBzdHlsZXM6IGdpdEdyYXBoU3R5bGVzXG59O1xuZXhwb3J0IHtcbiAgZGlhZ3JhbVxufTtcbiJdLCJuYW1lcyI6WyJnZXRDb25maWciLCJyYW5kb20iLCJsb2ciLCJjb21tb24iLCJjbGVhciQyIiwic2V0QWNjVGl0bGUiLCJnZXRBY2NUaXRsZSIsImdldEFjY0Rlc2NyaXB0aW9uIiwic2V0QWNjRGVzY3JpcHRpb24iLCJzZXREaWFncmFtVGl0bGUiLCJnZXREaWFncmFtVGl0bGUiLCJzZWxlY3QiLCJ1dGlscyIsInNldHVwR3JhcGhWaWV3Ym94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVdBLElBQUksTUFBTSxHQUFHLFdBQVc7QUFDeEIsRUFBRSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDdkQsTUFBTSxDQUFDO0FBQ1AsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNkLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3WixFQUFFLElBQUksT0FBTyxHQUFHO0FBQ2hCLElBQUksS0FBSyxFQUFFLFNBQVMsS0FBSyxHQUFHO0FBQzVCLEtBQUs7QUFDTCxJQUFJLEVBQUUsRUFBRSxFQUFFO0FBQ1YsSUFBSSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO0FBQ3Z2QixJQUFJLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLDJCQUEyQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRTtBQUNyZixJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFB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QUM7QUFDMUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlCLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QyxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzVDLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4RCxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3hDLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM1QyxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RCxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzVELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZDLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDL0MsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMvQyxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9DLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvRCxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0QsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9ELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvRCxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0QsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9ELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxRCxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDeEMsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRCxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzFELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRSxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEUsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNoRCxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2hELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzFELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsRSxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEUsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNoRCxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2hELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsRSxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbEUsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDeEQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDeEQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDeEQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDeEQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDeEQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDeEQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRSxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFFLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUUsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRSxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFFLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDMUUsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRSxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEUsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRSxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEUsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssR0FBRztBQUNoQixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEUsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxHQUFHO0FBQ2hCLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNoRSxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEdBQUc7QUFDaEIsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssR0FBRztBQUNoQixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEUsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxHQUFHO0FBQ2hCLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRSxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEdBQUc7QUFDaEIsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssR0FBRztBQUNoQixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEUsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxHQUFHO0FBQ2hCLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRSxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEdBQUc7QUFDaEIsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssR0FBRztBQUNoQixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEUsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxHQUFHO0FBQ2hCLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRSxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEdBQUc7QUFDaEIsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssR0FBRztBQUNoQixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEUsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxHQUFHO0FBQ2hCLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRSxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEdBQUc7QUFDaEIsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssR0FBRztBQUNoQixVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEUsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxHQUFHO0FBQ2hCLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRSxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEdBQUc7QUFDaEIsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN0QixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEdBQUc7QUFDaEIsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEdBQUc7QUFDaEIsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0FBQ3hDLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssR0FBRztBQUNoQixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7QUFDekMsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxHQUFHO0FBQ2hCLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztBQUMzQyxVQUFVLE1BQU07QUFDaEIsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ256TSxJQUFJLGNBQWMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFB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Q0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkUsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzlCLFVBQVUsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUM1QyxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNsQyxRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUc7QUFDdEIsVUFBVSxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO0FBQzVDLFVBQVUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztBQUN0QyxVQUFVLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVk7QUFDaEQsVUFBVSxXQUFXLEVBQUUsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRztBQUNyTSxTQUFTLENBQUM7QUFDVixRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDakMsVUFBVSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztBQUMvRCxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ3pDLFFBQVEsT0FBTyxJQUFJLENBQUM7QUFDcEIsT0FBTztBQUNQO0FBQ0EsTUFBTSxJQUFJLEVBQUUsV0FBVztBQUN2QixRQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQzFCLFFBQVEsT0FBTyxJQUFJLENBQUM7QUFDcEIsT0FBTztBQUNQO0FBQ0EsTUFBTSxNQUFNLEVBQUUsV0FBVztBQUN6QixRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUU7QUFDMUMsVUFBVSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUNqQyxTQUFTLE1BQU07QUFDZixVQUFVLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLGtJQUFrSSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtBQUM1TyxZQUFZLElBQUksRUFBRSxFQUFFO0FBQ3BCLFlBQVksS0FBSyxFQUFFLElBQUk7QUFDdkIsWUFBWSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7QUFDL0IsV0FBVyxDQUFDLENBQUM7QUFDYixTQUFTO0FBQ1QsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixPQUFPO0FBQ1A7QUFDQSxNQUFNLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRTtBQUN4QixRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QyxPQUFPO0FBQ1A7QUFDQSxNQUFNLFNBQVMsRUFBRSxXQUFXO0FBQzVCLFFBQVEsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkYsUUFBUSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsS0FBSyxHQUFHLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNyRixPQUFPO0FBQ1A7QUFDQSxNQUFNLGFBQWEsRUFBRSxXQUFXO0FBQ2hDLFFBQVEsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUM5QixRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7QUFDOUIsVUFBVSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUQsU0FBUztBQUNULFFBQVEsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLE9BQU87QUFDUDtBQUNBLE1BQU0sWUFBWSxFQUFFLFdBQVc7QUFDL0IsUUFBUSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbkMsUUFBUSxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwRCxRQUFRLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUMzRCxPQUFPO0FBQ1A7QUFDQSxNQUFNLFVBQVUsRUFBRSxTQUFTLEtBQUssRUFBRSxZQUFZLEVBQUU7QUFDaEQsUUFBUSxJQUFJLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDO0FBQ2pDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRTtBQUMxQyxVQUFVLE1BQU0sR0FBRztBQUNuQixZQUFZLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtBQUNuQyxZQUFZLE1BQU0sRUFBRTtBQUNwQixjQUFjLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVU7QUFDaEQsY0FBYyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7QUFDdkMsY0FBYyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZO0FBQ3BELGNBQWMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztBQUNsRCxhQUFhO0FBQ2IsWUFBWSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07QUFDL0IsWUFBWSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7QUFDN0IsWUFBWSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87QUFDakMsWUFBWSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87QUFDakMsWUFBWSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07QUFDL0IsWUFBWSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07QUFDL0IsWUFBWSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7QUFDN0IsWUFBWSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07QUFDL0IsWUFBWSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7QUFDdkIsWUFBWSxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3hELFlBQVksSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO0FBQzNCLFdBQVcsQ0FBQztBQUNaLFVBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNuQyxZQUFZLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3RCxXQUFXO0FBQ1gsU0FBUztBQUNULFFBQVEsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNsRCxRQUFRLElBQUksS0FBSyxFQUFFO0FBQ25CLFVBQVUsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ3hDLFNBQVM7QUFDVCxRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUc7QUFDdEIsVUFBVSxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO0FBQzNDLFVBQVUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztBQUN0QyxVQUFVLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7QUFDL0MsVUFBVSxXQUFXLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO0FBQzdKLFNBQVMsQ0FBQztBQUNWLFFBQVEsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEMsUUFBUSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQixRQUFRLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQzdCLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUN6QyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDakMsVUFBVSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEUsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDM0IsUUFBUSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUNoQyxRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pELFFBQVEsSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakMsUUFBUSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEksUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUN0QyxVQUFVLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFNBQVM7QUFDVCxRQUFRLElBQUksS0FBSyxFQUFFO0FBQ25CLFVBQVUsT0FBTyxLQUFLLENBQUM7QUFDdkIsU0FBUyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNwQyxVQUFVLEtBQUssSUFBSSxDQUFDLElBQUksTUFBTSxFQUFFO0FBQ2hDLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQyxXQUFXO0FBQ1gsVUFBVSxPQUFPLEtBQUssQ0FBQztBQUN2QixTQUFTO0FBQ1QsUUFBUSxPQUFPLEtBQUssQ0FBQztBQUNyQixPQUFPO0FBQ1A7QUFDQSxNQUFNLElBQUksRUFBRSxXQUFXO0FBQ3ZCLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ3ZCLFVBQVUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzFCLFNBQVM7QUFDVCxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQzFCLFVBQVUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDM0IsU0FBUztBQUNULFFBQVEsSUFBSSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUM7QUFDM0MsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUN6QixVQUFVLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQzNCLFVBQVUsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDMUIsU0FBUztBQUNULFFBQVEsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ3pDLFFBQVEsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDL0MsVUFBVSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlELFVBQVUsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDOUUsWUFBWSxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQzlCLFlBQVksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUN0QixZQUFZLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUU7QUFDOUMsY0FBYyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0QsY0FBYyxJQUFJLEtBQUssS0FBSyxLQUFLLEVBQUU7QUFDbkMsZ0JBQWdCLE9BQU8sS0FBSyxDQUFDO0FBQzdCLGVBQWUsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDMUMsZ0JBQWdCLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDOUIsZ0JBQWdCLFNBQVM7QUFDekIsZUFBZSxNQUFNO0FBQ3JCLGdCQUFnQixPQUFPLEtBQUssQ0FBQztBQUM3QixlQUFlO0FBQ2YsYUFBYSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtBQUMzQyxjQUFjLE1BQU07QUFDcEIsYUFBYTtBQUNiLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxJQUFJLEtBQUssRUFBRTtBQUNuQixVQUFVLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN2RCxVQUFVLElBQUksS0FBSyxLQUFLLEtBQUssRUFBRTtBQUMvQixZQUFZLE9BQU8sS0FBSyxDQUFDO0FBQ3pCLFdBQVc7QUFDWCxVQUFVLE9BQU8sS0FBSyxDQUFDO0FBQ3ZCLFNBQVM7QUFDVCxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUU7QUFDaEMsVUFBVSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDMUIsU0FBUyxNQUFNO0FBQ2YsVUFBVSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7QUFDbEksWUFBWSxJQUFJLEVBQUUsRUFBRTtBQUNwQixZQUFZLEtBQUssRUFBRSxJQUFJO0FBQ3ZCLFlBQVksSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQy9CLFdBQVcsQ0FBQyxDQUFDO0FBQ2IsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE1BQU0sR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQzFCLFFBQVEsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzVCLFFBQVEsSUFBSSxDQUFDLEVBQUU7QUFDZixVQUFVLE9BQU8sQ0FBQyxDQUFDO0FBQ25CLFNBQVMsTUFBTTtBQUNmLFVBQVUsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDNUIsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE1BQU0sS0FBSyxFQUFFLFNBQVMsS0FBSyxDQUFDLFNBQVMsRUFBRTtBQUN2QyxRQUFRLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzVDLE9BQU87QUFDUDtBQUNBLE1BQU0sUUFBUSxFQUFFLFNBQVMsUUFBUSxHQUFHO0FBQ3BDLFFBQVEsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQy9DLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ25CLFVBQVUsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzNDLFNBQVMsTUFBTTtBQUNmLFVBQVUsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxNQUFNLGFBQWEsRUFBRSxTQUFTLGFBQWEsR0FBRztBQUM5QyxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMvRixVQUFVLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzVGLFNBQVMsTUFBTTtBQUNmLFVBQVUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNsRCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsTUFBTSxRQUFRLEVBQUUsU0FBUyxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3JDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM5RCxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNwQixVQUFVLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QyxTQUFTLE1BQU07QUFDZixVQUFVLE9BQU8sU0FBUyxDQUFDO0FBQzNCLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxNQUFNLFNBQVMsRUFBRSxTQUFTLFNBQVMsQ0FBQyxTQUFTLEVBQUU7QUFDL0MsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlCLE9BQU87QUFDUDtBQUNBLE1BQU0sY0FBYyxFQUFFLFNBQVMsY0FBYyxHQUFHO0FBQ2hELFFBQVEsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztBQUMxQyxPQUFPO0FBQ1AsTUFBTSxPQUFPLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUU7QUFDM0MsTUFBTSxhQUFhLEVBQUUsU0FBUyxTQUFTLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUU7QUFDdEYsUUFBUSxRQUFRLHlCQUF5QjtBQUN6QyxVQUFVLEtBQUssQ0FBQztBQUNoQixZQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEMsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssQ0FBQztBQUNoQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLE9BQU8saUJBQWlCLENBQUM7QUFDckMsVUFBVSxLQUFLLENBQUM7QUFDaEIsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLENBQUM7QUFDaEIsWUFBWSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDNUIsWUFBWSxPQUFPLGlCQUFpQixDQUFDO0FBQ3JDLFVBQVUsS0FBSyxDQUFDO0FBQ2hCLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQzlDLFlBQVksTUFBTTtBQUNsQixVQUFVLEtBQUssQ0FBQztBQUNoQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLE1BQU07QUFDbEIsVUFBVSxLQUFLLENBQUM7QUFDaEIsWUFBWSxPQUFPLDJCQUEyQixDQUFDO0FBQy9DLFVBQVUsS0FBSyxDQUFDO0FBQ2hCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLENBQUM7QUFDaEIsWUFBWSxNQUFNO0FBQ2xCLFVBQVUsS0FBSyxDQUFDO0FBQ2hCLFlBQVksTUFBTTtBQUNsQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxDQUFDLENBQUM7QUFDckIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLENBQUMsQ0FBQztBQUNyQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sT0FBTyxDQUFDO0FBQzNCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNsQyxZQUFZLE1BQU07QUFDbEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDNUIsWUFBWSxNQUFNO0FBQ2xCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsWUFBWSxNQUFNO0FBQ2xCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksTUFBTTtBQUNsQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLFNBQVM7QUFDVCxPQUFPO0FBQ1AsTUFBTSxLQUFLLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLHNCQUFzQixFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBRSwyQkFBMkIsRUFBRSxlQUFlLEVBQUUsd0JBQXdCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLHVCQUF1QixFQUFFLGdDQUFnQyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSwyQkFBMkIsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDO0FBQzV3QixNQUFNLFVBQVUsRUFBRSxFQUFFLHFCQUFxQixFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFO0FBQzVjLEtBQUssQ0FBQztBQUNOLElBQUksT0FBTyxNQUFNLENBQUM7QUFDbEIsR0FBRyxFQUFFLENBQUM7QUFDTixFQUFFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLEVBQUUsU0FBUyxNQUFNLEdBQUc7QUFDcEIsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNqQixHQUFHO0FBQ0gsRUFBRSxNQUFNLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUM3QixFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzFCLEVBQUUsT0FBTyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ3RCLENBQUMsRUFBRSxDQUFDO0FBQ0osTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDdkIsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDO0FBQzlCLElBQUksY0FBYyxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO0FBQ3pELElBQUksZUFBZSxHQUFHQSxlQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO0FBQzNELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNqQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLGNBQWMsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxDQUFDO0FBQ2xGLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNsQixRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2hDLElBQUksU0FBUyxHQUFHLGNBQWMsQ0FBQztBQUMvQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ1osU0FBUyxLQUFLLEdBQUc7QUFDakIsRUFBRSxPQUFPQyxZQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBQ0QsU0FBUyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUMxQixFQUFFLE1BQU0sU0FBUyxtQkFBbUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4RCxFQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEtBQUs7QUFDcEMsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3pCLE1BQU0sU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUM1QixNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckIsS0FBSztBQUNMLElBQUksT0FBTyxHQUFHLENBQUM7QUFDZixHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDVCxDQUFDO0FBQ0QsTUFBTSxZQUFZLEdBQUcsU0FBUyxJQUFJLEVBQUU7QUFDcEMsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ25CLENBQUMsQ0FBQztBQUNGLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNqQixNQUFNLFVBQVUsR0FBRyxTQUFTLFlBQVksRUFBRTtBQUMxQyxFQUFFQyxXQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN6QyxFQUFFLFlBQVksR0FBRyxZQUFZLElBQUksWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3JELEVBQUUsWUFBWSxHQUFHLFlBQVksSUFBSSxJQUFJLENBQUM7QUFDdEMsRUFBRSxJQUFJO0FBQ04sSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDZCxJQUFJQSxXQUFHLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNqRSxHQUFHO0FBQ0gsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxVQUFVLEdBQUcsV0FBVztBQUM5QixFQUFFLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUNGLE1BQU0sTUFBTSxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzVDLEVBQUVBLFdBQUcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDcEQsRUFBRSxFQUFFLEdBQUdDLGNBQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFSCxlQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLEVBQUUsR0FBRyxHQUFHRyxjQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRUgsZUFBUyxFQUFFLENBQUMsQ0FBQztBQUM5QyxFQUFFLEdBQUcsR0FBR0csY0FBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUVILGVBQVMsRUFBRSxDQUFDLENBQUM7QUFDOUMsRUFBRSxNQUFNLE9BQU8sR0FBRztBQUNsQixJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxFQUFFO0FBQ3JDLElBQUksT0FBTyxFQUFFLEdBQUc7QUFDaEIsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ2QsSUFBSSxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxZQUFZLENBQUMsTUFBTTtBQUMzQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUU7QUFDdkIsSUFBSSxPQUFPLEVBQUUsSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQzFDLElBQUksTUFBTSxFQUFFLFNBQVM7QUFDckIsR0FBRyxDQUFDO0FBQ0osRUFBRSxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQ2pCLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDaEMsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztBQUNuQyxFQUFFRSxXQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUM7QUFDRixNQUFNLE1BQU0sR0FBRyxTQUFTLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDckMsRUFBRSxJQUFJLEdBQUdDLGNBQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFSCxlQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ2hELEVBQUUsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7QUFDakMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztBQUNuRCxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7QUFDL0UsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkIsSUFBSUUsV0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pDLEdBQUcsTUFBTTtBQUNULElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLO0FBQ3pCLE1BQU0sMkhBQTJILEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDL0ksS0FBSyxDQUFDO0FBQ04sSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHO0FBQ2pCLE1BQU0sSUFBSSxFQUFFLFNBQVMsR0FBRyxJQUFJO0FBQzVCLE1BQU0sS0FBSyxFQUFFLFNBQVMsR0FBRyxJQUFJO0FBQzdCLE1BQU0sSUFBSSxFQUFFLEdBQUc7QUFDZixNQUFNLEdBQUcsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUU7QUFDM0UsTUFBTSxRQUFRLEVBQUUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUMzQyxLQUFLLENBQUM7QUFDTixJQUFJLE1BQU0sS0FBSyxDQUFDO0FBQ2hCLEdBQUc7QUFDSCxDQUFDLENBQUM7QUFDRixNQUFNLEtBQUssR0FBRyxTQUFTLFdBQVcsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRTtBQUMxRSxFQUFFLFdBQVcsR0FBR0MsY0FBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUVILGVBQVMsRUFBRSxDQUFDLENBQUM7QUFDOUQsRUFBRSxTQUFTLEdBQUdHLGNBQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFSCxlQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQzFELEVBQUUsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ3JELEVBQUUsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQ3JELEVBQUUsSUFBSSxTQUFTLEtBQUssV0FBVyxFQUFFO0FBQ2pDLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsNkRBQTZELENBQUMsQ0FBQztBQUN6RixJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUc7QUFDakIsTUFBTSxJQUFJLEVBQUUsUUFBUSxHQUFHLFdBQVc7QUFDbEMsTUFBTSxLQUFLLEVBQUUsUUFBUSxHQUFHLFdBQVc7QUFDbkMsTUFBTSxJQUFJLEVBQUUsR0FBRztBQUNmLE1BQU0sR0FBRyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRTtBQUMzRSxNQUFNLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztBQUM5QixLQUFLLENBQUM7QUFDTixJQUFJLE1BQU0sS0FBSyxDQUFDO0FBQ2hCLEdBQUcsTUFBTSxJQUFJLGFBQWEsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUN6RCxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksS0FBSztBQUN6QixNQUFNLDhDQUE4QyxHQUFHLFNBQVMsR0FBRyxpQkFBaUI7QUFDcEYsS0FBSyxDQUFDO0FBQ04sSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHO0FBQ2pCLE1BQU0sSUFBSSxFQUFFLFFBQVEsR0FBRyxXQUFXO0FBQ2xDLE1BQU0sS0FBSyxFQUFFLFFBQVEsR0FBRyxXQUFXO0FBQ25DLE1BQU0sSUFBSSxFQUFFLEdBQUc7QUFDZixNQUFNLEdBQUcsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUU7QUFDM0UsTUFBTSxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDMUIsS0FBSyxDQUFDO0FBQ04sSUFBSSxNQUFNLEtBQUssQ0FBQztBQUNoQixHQUFHLE1BQU0sSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7QUFDL0MsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUs7QUFDekIsTUFBTSxtREFBbUQsR0FBRyxXQUFXLEdBQUcsa0JBQWtCO0FBQzVGLEtBQUssQ0FBQztBQUNOLElBQUksS0FBSyxDQUFDLElBQUksR0FBRztBQUNqQixNQUFNLElBQUksRUFBRSxRQUFRLEdBQUcsV0FBVztBQUNsQyxNQUFNLEtBQUssRUFBRSxRQUFRLEdBQUcsV0FBVztBQUNuQyxNQUFNLElBQUksRUFBRSxHQUFHO0FBQ2YsTUFBTSxHQUFHLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFO0FBQzNFLE1BQU0sUUFBUSxFQUFFLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztBQUN6QyxLQUFLLENBQUM7QUFDTixJQUFJLE1BQU0sS0FBSyxDQUFDO0FBQ2hCLEdBQUcsTUFBTSxJQUFJLFdBQVcsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNyRCxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksS0FBSztBQUN6QixNQUFNLG1EQUFtRCxHQUFHLFdBQVcsR0FBRyxrQkFBa0I7QUFDNUYsS0FBSyxDQUFDO0FBQ04sSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHO0FBQ2pCLE1BQU0sSUFBSSxFQUFFLFFBQVEsR0FBRyxXQUFXO0FBQ2xDLE1BQU0sS0FBSyxFQUFFLFFBQVEsR0FBRyxXQUFXO0FBQ25DLE1BQU0sSUFBSSxFQUFFLEdBQUc7QUFDZixNQUFNLEdBQUcsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUU7QUFDM0UsTUFBTSxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFDNUIsS0FBSyxDQUFDO0FBQ04sSUFBSSxNQUFNLEtBQUssQ0FBQztBQUNoQixHQUFHLE1BQU0sSUFBSSxhQUFhLEtBQUssV0FBVyxFQUFFO0FBQzVDLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztBQUN0RixJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUc7QUFDakIsTUFBTSxJQUFJLEVBQUUsUUFBUSxHQUFHLFdBQVc7QUFDbEMsTUFBTSxLQUFLLEVBQUUsUUFBUSxHQUFHLFdBQVc7QUFDbkMsTUFBTSxJQUFJLEVBQUUsR0FBRztBQUNmLE1BQU0sR0FBRyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRTtBQUMzRSxNQUFNLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztBQUM5QixLQUFLLENBQUM7QUFDTixJQUFJLE1BQU0sS0FBSyxDQUFDO0FBQ2hCLEdBQUcsTUFBTSxJQUFJLFNBQVMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7QUFDekQsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUs7QUFDekIsTUFBTSw2Q0FBNkMsR0FBRyxTQUFTLEdBQUcsMENBQTBDO0FBQzVHLEtBQUssQ0FBQztBQUNOLElBQUksS0FBSyxDQUFDLElBQUksR0FBRztBQUNqQixNQUFNLElBQUksRUFBRSxRQUFRLEdBQUcsV0FBVyxHQUFHLFNBQVMsR0FBRyxhQUFhLEdBQUcsVUFBVTtBQUMzRSxNQUFNLEtBQUssRUFBRSxRQUFRLEdBQUcsV0FBVyxHQUFHLFNBQVMsR0FBRyxhQUFhLEdBQUcsVUFBVTtBQUM1RSxNQUFNLElBQUksRUFBRSxHQUFHO0FBQ2YsTUFBTSxHQUFHLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFO0FBQzNFLE1BQU0sUUFBUSxFQUFFO0FBQ2hCLFFBQVEsUUFBUSxHQUFHLFdBQVcsR0FBRyxHQUFHLEdBQUcsU0FBUyxHQUFHLFVBQVUsR0FBRyxhQUFhLEdBQUcsR0FBRyxHQUFHLFVBQVU7QUFDaEcsT0FBTztBQUNQLEtBQUssQ0FBQztBQUNOLElBQUksTUFBTSxLQUFLLENBQUM7QUFDaEIsR0FBRztBQUNILEVBQUUsTUFBTSxPQUFPLEdBQUc7QUFDbEIsSUFBSSxFQUFFLEVBQUUsU0FBUyxHQUFHLFNBQVMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssRUFBRTtBQUNuRCxJQUFJLE9BQU8sRUFBRSxnQkFBZ0IsR0FBRyxXQUFXLEdBQUcsUUFBUSxHQUFHLFNBQVM7QUFDbEUsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ2QsSUFBSSxPQUFPLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuRSxJQUFJLE1BQU0sRUFBRSxTQUFTO0FBQ3JCLElBQUksSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO0FBQzVCLElBQUksVUFBVSxFQUFFLGFBQWE7QUFDN0IsSUFBSSxRQUFRLEVBQUUsU0FBUyxHQUFHLElBQUksR0FBRyxLQUFLO0FBQ3RDLElBQUksR0FBRyxFQUFFLFVBQVUsR0FBRyxVQUFVLEdBQUcsRUFBRTtBQUNyQyxHQUFHLENBQUM7QUFDSixFQUFFLElBQUksR0FBRyxPQUFPLENBQUM7QUFDakIsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUNoQyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO0FBQ25DLEVBQUVFLFdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEIsRUFBRUEsV0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQztBQUNGLE1BQU0sVUFBVSxHQUFHLFNBQVMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFO0FBQ3JFLEVBQUVBLFdBQUcsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM3RCxFQUFFLFFBQVEsR0FBR0MsY0FBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUVILGVBQVMsRUFBRSxDQUFDLENBQUM7QUFDeEQsRUFBRSxRQUFRLEdBQUdHLGNBQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFSCxlQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ3hELEVBQUUsR0FBRyxHQUFHRyxjQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRUgsZUFBUyxFQUFFLENBQUMsQ0FBQztBQUM5QyxFQUFFLGNBQWMsR0FBR0csY0FBTSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUVILGVBQVMsRUFBRSxDQUFDLENBQUM7QUFDcEUsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtBQUNqRCxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksS0FBSztBQUN6QixNQUFNLDZFQUE2RTtBQUNuRixLQUFLLENBQUM7QUFDTixJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUc7QUFDakIsTUFBTSxJQUFJLEVBQUUsYUFBYSxHQUFHLFFBQVEsR0FBRyxHQUFHLEdBQUcsUUFBUTtBQUNyRCxNQUFNLEtBQUssRUFBRSxhQUFhLEdBQUcsUUFBUSxHQUFHLEdBQUcsR0FBRyxRQUFRO0FBQ3RELE1BQU0sSUFBSSxFQUFFLEdBQUc7QUFDZixNQUFNLEdBQUcsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUU7QUFDM0UsTUFBTSxRQUFRLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztBQUNuQyxLQUFLLENBQUM7QUFDTixJQUFJLE1BQU0sS0FBSyxDQUFDO0FBQ2hCLEdBQUc7QUFDSCxFQUFFLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2QyxFQUFFLElBQUksa0JBQWtCLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztBQUMvQyxFQUFFLElBQUksY0FBYyxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRTtBQUNqSCxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksS0FBSztBQUN6QixNQUFNLHdHQUF3RztBQUM5RyxLQUFLLENBQUM7QUFDTixJQUFJLE1BQU0sS0FBSyxDQUFDO0FBQ2hCLEdBQUc7QUFDSCxFQUFFLElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsS0FBSyxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQ25FLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLO0FBQ3pCLE1BQU0sdUhBQXVIO0FBQzdILEtBQUssQ0FBQztBQUNOLElBQUksTUFBTSxLQUFLLENBQUM7QUFDaEIsR0FBRztBQUNILEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7QUFDakQsSUFBSSxJQUFJLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtBQUMxQyxNQUFNLElBQUksS0FBSyxHQUFHLElBQUksS0FBSztBQUMzQixRQUFRLDZFQUE2RTtBQUNyRixPQUFPLENBQUM7QUFDUixNQUFNLEtBQUssQ0FBQyxJQUFJLEdBQUc7QUFDbkIsUUFBUSxJQUFJLEVBQUUsYUFBYSxHQUFHLFFBQVEsR0FBRyxHQUFHLEdBQUcsUUFBUTtBQUN2RCxRQUFRLEtBQUssRUFBRSxhQUFhLEdBQUcsUUFBUSxHQUFHLEdBQUcsR0FBRyxRQUFRO0FBQ3hELFFBQVEsSUFBSSxFQUFFLEdBQUc7QUFDakIsUUFBUSxHQUFHLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFO0FBQzdFLFFBQVEsUUFBUSxFQUFFLENBQUMsaUJBQWlCLENBQUM7QUFDckMsT0FBTyxDQUFDO0FBQ1IsTUFBTSxNQUFNLEtBQUssQ0FBQztBQUNsQixLQUFLO0FBQ0wsSUFBSSxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDdkQsSUFBSSxJQUFJLGFBQWEsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUNwRCxNQUFNLElBQUksS0FBSyxHQUFHLElBQUksS0FBSztBQUMzQixRQUFRLG9EQUFvRCxHQUFHLFNBQVMsR0FBRyxpQkFBaUI7QUFDNUYsT0FBTyxDQUFDO0FBQ1IsTUFBTSxLQUFLLENBQUMsSUFBSSxHQUFHO0FBQ25CLFFBQVEsSUFBSSxFQUFFLGFBQWEsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLFFBQVE7QUFDdkQsUUFBUSxLQUFLLEVBQUUsYUFBYSxHQUFHLFFBQVEsR0FBRyxHQUFHLEdBQUcsUUFBUTtBQUN4RCxRQUFRLElBQUksRUFBRSxHQUFHO0FBQ2pCLFFBQVEsR0FBRyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRTtBQUM3RSxRQUFRLFFBQVEsRUFBRSxDQUFDLGlCQUFpQixDQUFDO0FBQ3JDLE9BQU8sQ0FBQztBQUNSLE1BQU0sTUFBTSxLQUFLLENBQUM7QUFDbEIsS0FBSztBQUNMLElBQUksTUFBTSxPQUFPLEdBQUc7QUFDcEIsTUFBTSxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEVBQUU7QUFDN0IsTUFBTSxPQUFPLEVBQUUsZ0JBQWdCLEdBQUcsWUFBWSxHQUFHLFFBQVEsR0FBRyxTQUFTO0FBQ3JFLE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUNoQixNQUFNLE9BQU8sRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztBQUMvRCxNQUFNLE1BQU0sRUFBRSxTQUFTO0FBQ3ZCLE1BQU0sSUFBSSxFQUFFLFlBQVksQ0FBQyxXQUFXO0FBQ3BDLE1BQU0sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDaEksS0FBSyxDQUFDO0FBQ04sSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQ25CLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDbEMsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztBQUNyQyxJQUFJRSxXQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hCLElBQUlBLFdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0IsR0FBRztBQUNILENBQUMsQ0FBQztBQUNGLE1BQU0sUUFBUSxHQUFHLFNBQVMsT0FBTyxFQUFFO0FBQ25DLEVBQUUsT0FBTyxHQUFHQyxjQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRUgsZUFBUyxFQUFFLENBQUMsQ0FBQztBQUN0RCxFQUFFLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ3BDLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLO0FBQ3pCLE1BQU0sOEVBQThFLEdBQUcsT0FBTyxHQUFHLElBQUk7QUFDckcsS0FBSyxDQUFDO0FBQ04sSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHO0FBQ2pCLE1BQU0sSUFBSSxFQUFFLFdBQVcsR0FBRyxPQUFPO0FBQ2pDLE1BQU0sS0FBSyxFQUFFLFdBQVcsR0FBRyxPQUFPO0FBQ2xDLE1BQU0sSUFBSSxFQUFFLEdBQUc7QUFDZixNQUFNLEdBQUcsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUU7QUFDM0UsTUFBTSxRQUFRLEVBQUUsQ0FBQyxVQUFVLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztBQUM1QyxLQUFLLENBQUM7QUFDTixJQUFJLE1BQU0sS0FBSyxDQUFDO0FBQ2hCLEdBQUcsTUFBTTtBQUNULElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUN4QixJQUFJLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkIsR0FBRztBQUNILENBQUMsQ0FBQztBQUNGLFNBQVMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO0FBQ2xDLEVBQUUsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxFQUFFLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQ3BCLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNyQixHQUFHLE1BQU07QUFDVCxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNqQyxHQUFHO0FBQ0gsQ0FBQztBQUNELFNBQVMsd0JBQXdCLENBQUMsU0FBUyxFQUFFO0FBQzdDLEVBQUUsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxPQUFPLEtBQUs7QUFDckQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixNQUFNLE9BQU8sR0FBRyxDQUFDO0FBQ2pCLEtBQUs7QUFDTCxJQUFJLE9BQU8sT0FBTyxDQUFDO0FBQ25CLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixFQUFFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNoQixFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxPQUFPLEVBQUU7QUFDdkIsTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDO0FBQ25CLEtBQUssTUFBTTtBQUNYLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQztBQUNuQixLQUFLO0FBQ0wsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLE1BQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hELEVBQUUsS0FBSyxJQUFJLE9BQU8sSUFBSSxRQUFRLEVBQUU7QUFDaEMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxPQUFPLENBQUMsRUFBRSxFQUFFO0FBQzFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMxQixLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUVFLFdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzdCLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtBQUN0RCxJQUFJLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEQsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztBQUMxQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hELEdBQUcsTUFBTSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtBQUMxQyxJQUFJLE9BQU87QUFDWCxHQUFHLE1BQU07QUFDVCxJQUFJLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEQsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMzQyxHQUFHO0FBQ0gsRUFBRSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0MsRUFBRSx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBQ0QsTUFBTSxXQUFXLEdBQUcsV0FBVztBQUMvQixFQUFFQSxXQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLEVBQUUsTUFBTSxJQUFJLEdBQUcsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxPQUFPLEdBQUcsV0FBVztBQUMzQixFQUFFLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDZixFQUFFLElBQUksR0FBRyxJQUFJLENBQUM7QUFDZCxFQUFFLElBQUksVUFBVSxHQUFHRixlQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO0FBQ3ZELEVBQUUsSUFBSSxnQkFBZ0IsR0FBR0EsZUFBUyxFQUFFLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztBQUM5RCxFQUFFLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDaEIsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQzlCLEVBQUUsY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUN0QixFQUFFLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLENBQUM7QUFDN0UsRUFBRSxTQUFTLEdBQUcsVUFBVSxDQUFDO0FBQ3pCLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNWLEVBQUVJLFdBQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBQ0YsTUFBTSxxQkFBcUIsR0FBRyxXQUFXO0FBQ3pDLEVBQUUsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLO0FBQy9FLElBQUksSUFBSSxZQUFZLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtBQUNyQyxNQUFNLE9BQU8sWUFBWSxDQUFDO0FBQzFCLEtBQUs7QUFDTCxJQUFJLE9BQU87QUFDWCxNQUFNLEdBQUcsWUFBWTtBQUNyQixNQUFNLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDckMsS0FBSyxDQUFDO0FBQ04sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLEVBQUUsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxXQUFXLEdBQUcsV0FBVztBQUMvQixFQUFFLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUNGLE1BQU0sVUFBVSxHQUFHLFdBQVc7QUFDOUIsRUFBRSxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUM7QUFDRixNQUFNLGVBQWUsR0FBRyxXQUFXO0FBQ25DLEVBQUUsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUU7QUFDM0QsSUFBSSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsQ0FBQztBQUNMLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUNoQyxJQUFJRixXQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwQixHQUFHLENBQUMsQ0FBQztBQUNMLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUMsRUFBRSxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUM7QUFDRixNQUFNLGdCQUFnQixHQUFHLFdBQVc7QUFDcEMsRUFBRSxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUM7QUFDRixNQUFNLFlBQVksR0FBRyxXQUFXO0FBQ2hDLEVBQUUsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxPQUFPLEdBQUcsV0FBVztBQUMzQixFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxZQUFZLEdBQUc7QUFDckIsRUFBRSxNQUFNLEVBQUUsQ0FBQztBQUNYLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDWixFQUFFLFNBQVMsRUFBRSxDQUFDO0FBQ2QsRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUNWLEVBQUUsV0FBVyxFQUFFLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxVQUFVLEdBQUc7QUFDbkIsRUFBRSxTQUFTLEVBQUUsTUFBTUYsZUFBUyxFQUFFLENBQUMsUUFBUTtBQUN2QyxFQUFFLFlBQVk7QUFDZCxFQUFFLFVBQVU7QUFDWixFQUFFLFVBQVU7QUFDWixFQUFFLE1BQU07QUFDUixFQUFFLE1BQU07QUFDUixFQUFFLEtBQUs7QUFDUCxFQUFFLFVBQVU7QUFDWixFQUFFLFFBQVE7QUFDVjtBQUNBLEVBQUUsV0FBVztBQUNiLEVBQUUsS0FBSyxFQUFFLE9BQU87QUFDaEIsRUFBRSxxQkFBcUI7QUFDdkIsRUFBRSxXQUFXO0FBQ2IsRUFBRSxVQUFVO0FBQ1osRUFBRSxlQUFlO0FBQ2pCLEVBQUUsZ0JBQWdCO0FBQ2xCLEVBQUUsWUFBWTtBQUNkLEVBQUUsT0FBTztBQUNULGVBQUVLLGlCQUFXO0FBQ2IsZUFBRUMsaUJBQVc7QUFDYixxQkFBRUMsdUJBQWlCO0FBQ25CLHFCQUFFQyx1QkFBaUI7QUFDbkIsbUJBQUVDLHFCQUFlO0FBQ2pCLG1CQUFFQyxxQkFBZTtBQUNqQixFQUFFLFVBQVUsRUFBRSxZQUFZO0FBQzFCLENBQUMsQ0FBQztBQUNGLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUN4QixNQUFNLFVBQVUsR0FBRztBQUNuQixFQUFFLE1BQU0sRUFBRSxDQUFDO0FBQ1gsRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUNaLEVBQUUsU0FBUyxFQUFFLENBQUM7QUFDZCxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ1YsRUFBRSxXQUFXLEVBQUUsQ0FBQztBQUNoQixDQUFDLENBQUM7QUFDRixNQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQUM1QixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDbkIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ25CLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNmLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNmLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQztBQUNmLE1BQU0sS0FBSyxHQUFHLE1BQU07QUFDcEIsRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLEVBQUUsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNqQixFQUFFLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDdEIsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2IsRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2IsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLEtBQUs7QUFDMUIsRUFBRSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLDRCQUE0QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2xGLEVBQUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLEVBQUUsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7QUFDL0IsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQzVDLEdBQUcsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDakMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2YsR0FBRyxNQUFNO0FBQ1QsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsR0FBRztBQUNILEVBQUUsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFDMUIsSUFBSSxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLDRCQUE0QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2xGLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxzQ0FBc0MsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDMUYsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdkMsSUFBSSxLQUFLLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNuQyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsR0FBRztBQUNILEVBQUUsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLE9BQU8sS0FBSztBQUN2QyxFQUFFLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUN6QixFQUFFLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztBQUN0QixFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUs7QUFDOUIsSUFBSSxNQUFNLGNBQWMsR0FBRyxHQUFHLEtBQUssSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRixJQUFJLElBQUksY0FBYyxJQUFJLFdBQVcsRUFBRTtBQUN2QyxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUM7QUFDN0IsTUFBTSxXQUFXLEdBQUcsY0FBYyxDQUFDO0FBQ25DLEtBQUs7QUFDTCxHQUFHLENBQUMsQ0FBQztBQUNMLEVBQUUsT0FBTyxhQUFhLElBQUksS0FBSyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFdBQVcsS0FBSztBQUNwRCxFQUFFLE1BQU0sY0FBYyxHQUFHVixlQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDOUMsRUFBRSxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUNuRSxFQUFFLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztBQUNqRSxFQUFFLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNkLEVBQUUsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO0FBQ3BCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLEdBQUc7QUFDSCxFQUFFLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckMsRUFBRSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSztBQUN6QyxJQUFJLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQzdDLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsRUFBRSxNQUFNLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxlQUFlLENBQUM7QUFDM0QsRUFBRSxNQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDMUIsRUFBRSxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDeEIsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLO0FBQzlCLElBQUksTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xDLElBQUksSUFBSSxpQkFBaUIsRUFBRTtBQUMzQixNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDbEMsUUFBUSxNQUFNLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakUsUUFBUSxHQUFHLEdBQUcsR0FBRyxLQUFLLElBQUksR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztBQUMvRyxPQUFPLE1BQU07QUFDYixRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDaEIsUUFBUSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7QUFDMUIsVUFBVSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ25CLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUksTUFBTSxhQUFhLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQztBQUM3QyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLEdBQUcsYUFBYSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQzNFLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFLLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUM7QUFDM0UsSUFBSSxJQUFJLFdBQVcsRUFBRTtBQUNyQixNQUFNLElBQUksU0FBUyxDQUFDO0FBQ3BCLE1BQU0sSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztBQUM1SCxNQUFNLFFBQVEsZ0JBQWdCO0FBQzlCLFFBQVEsS0FBSyxVQUFVLENBQUMsTUFBTTtBQUM5QixVQUFVLFNBQVMsR0FBRyxlQUFlLENBQUM7QUFDdEMsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxVQUFVLENBQUMsT0FBTztBQUMvQixVQUFVLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztBQUN2QyxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLFVBQVUsQ0FBQyxTQUFTO0FBQ2pDLFVBQVUsU0FBUyxHQUFHLGtCQUFrQixDQUFDO0FBQ3pDLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssVUFBVSxDQUFDLEtBQUs7QUFDN0IsVUFBVSxTQUFTLEdBQUcsY0FBYyxDQUFDO0FBQ3JDLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssVUFBVSxDQUFDLFdBQVc7QUFDbkMsVUFBVSxTQUFTLEdBQUcsb0JBQW9CLENBQUM7QUFDM0MsVUFBVSxNQUFNO0FBQ2hCLFFBQVE7QUFDUixVQUFVLFNBQVMsR0FBRyxlQUFlLENBQUM7QUFDdEMsT0FBTztBQUNQLE1BQU0sSUFBSSxnQkFBZ0IsS0FBSyxVQUFVLENBQUMsU0FBUyxFQUFFO0FBQ3JELFFBQVEsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNqQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNqQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2xDLFFBQVEsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDakMsUUFBUSxNQUFNLENBQUMsSUFBSTtBQUNuQixVQUFVLE9BQU87QUFDakIsVUFBVSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQzFILFNBQVMsQ0FBQztBQUNWLFFBQVEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSTtBQUMzRyxVQUFVLE9BQU87QUFDakIsVUFBVSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUNoSCxTQUFTLENBQUM7QUFDVixPQUFPLE1BQU0sSUFBSSxnQkFBZ0IsS0FBSyxVQUFVLENBQUMsV0FBVyxFQUFFO0FBQzlELFFBQVEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvSCxRQUFRLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlKLFFBQVEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUosUUFBUSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5SyxRQUFRLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUs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LFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUUsSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1RSxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtBQUN0QixNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ3ZCLFFBQVEsT0FBTyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuTCxPQUFPLE1BQU07QUFDYixRQUFRLGFBQWEsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN4RCxRQUFRLE9BQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkwsT0FBTztBQUNQLEtBQUssTUFBTTtBQUNYLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDdkIsUUFBUSxPQUFPLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxD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QUFPLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ3BGLFVBQVUsT0FBTyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0SCxTQUFTLE1BQU07QUFDZixVQUFVLE9BQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckgsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ3pCLFFBQVEsT0FBTyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hELE9BQU87QUFDUCxLQUFLLE1BQU07QUFDWCxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ3ZCLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ3BGLFVBQVUsT0FBTyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0SCxTQUFTLE1BQU07QUFDZixVQUFVLE9BQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckgsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ3ZCLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ3BGLFVBQVUsT0FBTyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNySCxTQUFTLE1BQU07QUFDZixVQUFVLE9BQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEgsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsS0FB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
