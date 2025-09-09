'use strict';

var index = require('./index-d3f4d11e.js');
var graph = require('./graph-55c4c685.js');
var layout = require('./layout-3cb522d3.js');
require('./main-8c6d7706.js');
var line = require('./line-2db9d5e8.js');
require('obsidian');
require('@/components/modals');
require('@/views/view');
require('./array-aca279a4.js');
require('./path-29c5310d.js');

var parser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [1, 3], $V1 = [1, 4], $V2 = [1, 5], $V3 = [1, 6], $V4 = [5, 6, 8, 9, 11, 13, 31, 32, 33, 34, 35, 36, 44, 62, 63], $V5 = [1, 18], $V6 = [2, 7], $V7 = [1, 22], $V8 = [1, 23], $V9 = [1, 24], $Va = [1, 25], $Vb = [1, 26], $Vc = [1, 27], $Vd = [1, 20], $Ve = [1, 28], $Vf = [1, 29], $Vg = [62, 63], $Vh = [5, 8, 9, 11, 13, 31, 32, 33, 34, 35, 36, 44, 51, 53, 62, 63], $Vi = [1, 47], $Vj = [1, 48], $Vk = [1, 49], $Vl = [1, 50], $Vm = [1, 51], $Vn = [1, 52], $Vo = [1, 53], $Vp = [53, 54], $Vq = [1, 64], $Vr = [1, 60], $Vs = [1, 61], $Vt = [1, 62], $Vu = [1, 63], $Vv = [1, 65], $Vw = [1, 69], $Vx = [1, 70], $Vy = [1, 67], $Vz = [1, 68], $VA = [5, 8, 9, 11, 13, 31, 32, 33, 34, 35, 36, 44, 62, 63];
  var parser2 = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "start": 3, "directive": 4, "NEWLINE": 5, "RD": 6, "diagram": 7, "EOF": 8, "acc_title": 9, "acc_title_value": 10, "acc_descr": 11, "acc_descr_value": 12, "acc_descr_multiline_value": 13, "requirementDef": 14, "elementDef": 15, "relationshipDef": 16, "requirementType": 17, "requirementName": 18, "STRUCT_START": 19, "requirementBody": 20, "ID": 21, "COLONSEP": 22, "id": 23, "TEXT": 24, "text": 25, "RISK": 26, "riskLevel": 27, "VERIFYMTHD": 28, "verifyType": 29, "STRUCT_STOP": 30, "REQUIREMENT": 31, "FUNCTIONAL_REQUIREMENT": 32, "INTERFACE_REQUIREMENT": 33, "PERFORMANCE_REQUIREMENT": 34, "PHYSICAL_REQUIREMENT": 35, "DESIGN_CONSTRAINT": 36, "LOW_RISK": 37, "MED_RISK": 38, "HIGH_RISK": 39, "VERIFY_ANALYSIS": 40, "VERIFY_DEMONSTRATION": 41, "VERIFY_INSPECTION": 42, "VERIFY_TEST": 43, "ELEMENT": 44, "elementName": 45, "elementBody": 46, "TYPE": 47, "type": 48, "DOCREF": 49, "ref": 50, "END_ARROW_L": 51, "relationship": 52, "LINE": 53, "END_ARROW_R": 54, "CONTAINS": 55, "COPIES": 56, "DERIVES": 57, "SATISFIES": 58, "VERIFIES": 59, "REFINES": 60, "TRACES": 61, "unqString": 62, "qString": 63, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 5: "NEWLINE", 6: "RD", 8: "EOF", 9: "acc_title", 10: "acc_title_value", 11: "acc_descr", 12: "acc_descr_value", 13: "acc_descr_multiline_value", 19: "STRUCT_START", 21: "ID", 22: "COLONSEP", 24: "TEXT", 26: "RISK", 28: "VERIFYMTHD", 30: "STRUCT_STOP", 31: "REQUIREMENT", 32: "FUNCTIONAL_REQUIREMENT", 33: "INTERFACE_REQUIREMENT", 34: "PERFORMANCE_REQUIREMENT", 35: "PHYSICAL_REQUIREMENT", 36: "DESIGN_CONSTRAINT", 37: "LOW_RISK", 38: "MED_RISK", 39: "HIGH_RISK", 40: "VERIFY_ANALYSIS", 41: "VERIFY_DEMONSTRATION", 42: "VERIFY_INSPECTION", 43: "VERIFY_TEST", 44: "ELEMENT", 47: "TYPE", 49: "DOCREF", 51: "END_ARROW_L", 53: "LINE", 54: "END_ARROW_R", 55: "CONTAINS", 56: "COPIES", 57: "DERIVES", 58: "SATISFIES", 59: "VERIFIES", 60: "REFINES", 61: "TRACES", 62: "unqString", 63: "qString" },
    productions_: [0, [3, 3], [3, 2], [3, 4], [4, 2], [4, 2], [4, 1], [7, 0], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [14, 5], [20, 5], [20, 5], [20, 5], [20, 5], [20, 2], [20, 1], [17, 1], [17, 1], [17, 1], [17, 1], [17, 1], [17, 1], [27, 1], [27, 1], [27, 1], [29, 1], [29, 1], [29, 1], [29, 1], [15, 5], [46, 5], [46, 5], [46, 2], [46, 1], [16, 5], [16, 5], [52, 1], [52, 1], [52, 1], [52, 1], [52, 1], [52, 1], [52, 1], [18, 1], [18, 1], [23, 1], [23, 1], [25, 1], [25, 1], [45, 1], [45, 1], [48, 1], [48, 1], [50, 1], [50, 1]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 4:
          this.$ = $$[$0].trim();
          yy.setAccTitle(this.$);
          break;
        case 5:
        case 6:
          this.$ = $$[$0].trim();
          yy.setAccDescription(this.$);
          break;
        case 7:
          this.$ = [];
          break;
        case 13:
          yy.addRequirement($$[$0 - 3], $$[$0 - 4]);
          break;
        case 14:
          yy.setNewReqId($$[$0 - 2]);
          break;
        case 15:
          yy.setNewReqText($$[$0 - 2]);
          break;
        case 16:
          yy.setNewReqRisk($$[$0 - 2]);
          break;
        case 17:
          yy.setNewReqVerifyMethod($$[$0 - 2]);
          break;
        case 20:
          this.$ = yy.RequirementType.REQUIREMENT;
          break;
        case 21:
          this.$ = yy.RequirementType.FUNCTIONAL_REQUIREMENT;
          break;
        case 22:
          this.$ = yy.RequirementType.INTERFACE_REQUIREMENT;
          break;
        case 23:
          this.$ = yy.RequirementType.PERFORMANCE_REQUIREMENT;
          break;
        case 24:
          this.$ = yy.RequirementType.PHYSICAL_REQUIREMENT;
          break;
        case 25:
          this.$ = yy.RequirementType.DESIGN_CONSTRAINT;
          break;
        case 26:
          this.$ = yy.RiskLevel.LOW_RISK;
          break;
        case 27:
          this.$ = yy.RiskLevel.MED_RISK;
          break;
        case 28:
          this.$ = yy.RiskLevel.HIGH_RISK;
          break;
        case 29:
          this.$ = yy.VerifyType.VERIFY_ANALYSIS;
          break;
        case 30:
          this.$ = yy.VerifyType.VERIFY_DEMONSTRATION;
          break;
        case 31:
          this.$ = yy.VerifyType.VERIFY_INSPECTION;
          break;
        case 32:
          this.$ = yy.VerifyType.VERIFY_TEST;
          break;
        case 33:
          yy.addElement($$[$0 - 3]);
          break;
        case 34:
          yy.setNewElementType($$[$0 - 2]);
          break;
        case 35:
          yy.setNewElementDocRef($$[$0 - 2]);
          break;
        case 38:
          yy.addRelationship($$[$0 - 2], $$[$0], $$[$0 - 4]);
          break;
        case 39:
          yy.addRelationship($$[$0 - 2], $$[$0 - 4], $$[$0]);
          break;
        case 40:
          this.$ = yy.Relationships.CONTAINS;
          break;
        case 41:
          this.$ = yy.Relationships.COPIES;
          break;
        case 42:
          this.$ = yy.Relationships.DERIVES;
          break;
        case 43:
          this.$ = yy.Relationships.SATISFIES;
          break;
        case 44:
          this.$ = yy.Relationships.VERIFIES;
          break;
        case 45:
          this.$ = yy.Relationships.REFINES;
          break;
        case 46:
          this.$ = yy.Relationships.TRACES;
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 6: $V0, 9: $V1, 11: $V2, 13: $V3 }, { 1: [3] }, { 3: 8, 4: 2, 5: [1, 7], 6: $V0, 9: $V1, 11: $V2, 13: $V3 }, { 5: [1, 9] }, { 10: [1, 10] }, { 12: [1, 11] }, o($V4, [2, 6]), { 3: 12, 4: 2, 6: $V0, 9: $V1, 11: $V2, 13: $V3 }, { 1: [2, 2] }, { 4: 17, 5: $V5, 7: 13, 8: $V6, 9: $V1, 11: $V2, 13: $V3, 14: 14, 15: 15, 16: 16, 17: 19, 23: 21, 31: $V7, 32: $V8, 33: $V9, 34: $Va, 35: $Vb, 36: $Vc, 44: $Vd, 62: $Ve, 63: $Vf }, o($V4, [2, 4]), o($V4, [2, 5]), { 1: [2, 1] }, { 8: [1, 30] }, { 4: 17, 5: $V5, 7: 31, 8: $V6, 9: $V1, 11: $V2, 13: $V3, 14: 14, 15: 15, 16: 16, 17: 19, 23: 21, 31: $V7, 32: $V8, 33: $V9, 34: $Va, 35: $Vb, 36: $Vc, 44: $Vd, 62: $Ve, 63: $Vf }, { 4: 17, 5: $V5, 7: 32, 8: $V6, 9: $V1, 11: $V2, 13: $V3, 14: 14, 15: 15, 16: 16, 17: 19, 23: 21, 31: $V7, 32: $V8, 33: $V9, 34: $Va, 35: $Vb, 36: $Vc, 44: $Vd, 62: $Ve, 63: $Vf }, { 4: 17, 5: $V5, 7: 33, 8: $V6, 9: $V1, 11: $V2, 13: $V3, 14: 14, 15: 15, 16: 16, 17: 19, 23: 21, 31: $V7, 32: $V8, 33: $V9, 34: $Va, 35: $Vb, 36: $Vc, 44: $Vd, 62: $Ve, 63: $Vf }, { 4: 17, 5: $V5, 7: 34, 8: $V6, 9: $V1, 11: $V2, 13: $V3, 14: 14, 15: 15, 16: 16, 17: 19, 23: 21, 31: $V7, 32: $V8, 33: $V9, 34: $Va, 35: $Vb, 36: $Vc, 44: $Vd, 62: $Ve, 63: $Vf }, { 4: 17, 5: $V5, 7: 35, 8: $V6, 9: $V1, 11: $V2, 13: $V3, 14: 14, 15: 15, 16: 16, 17: 19, 23: 21, 31: $V7, 32: $V8, 33: $V9, 34: $Va, 35: $Vb, 36: $Vc, 44: $Vd, 62: $Ve, 63: $Vf }, { 18: 36, 62: [1, 37], 63: [1, 38] }, { 45: 39, 62: [1, 40], 63: [1, 41] }, { 51: [1, 42], 53: [1, 43] }, o($Vg, [2, 20]), o($Vg, [2, 21]), o($Vg, [2, 22]), o($Vg, [2, 23]), o($Vg, [2, 24]), o($Vg, [2, 25]), o($Vh, [2, 49]), o($Vh, [2, 50]), { 1: [2, 3] }, { 8: [2, 8] }, { 8: [2, 9] }, { 8: [2, 10] }, { 8: [2, 11] }, { 8: [2, 12] }, { 19: [1, 44] }, { 19: [2, 47] }, { 19: [2, 48] }, { 19: [1, 45] }, { 19: [2, 53] }, { 19: [2, 54] }, { 52: 46, 55: $Vi, 56: $Vj, 57: $Vk, 58: $Vl, 59: $Vm, 60: $Vn, 61: $Vo }, { 52: 54, 55: $Vi, 56: $Vj, 57: $Vk, 58: $Vl, 59: $Vm, 60: $Vn, 61: $Vo }, { 5: [1, 55] }, { 5: [1, 56] }, { 53: [1, 57] }, o($Vp, [2, 40]), o($Vp, [2, 41]), o($Vp, [2, 42]), o($Vp, [2, 43]), o($Vp, [2, 44]), o($Vp, [2, 45]), o($Vp, [2, 46]), { 54: [1, 58] }, { 5: $Vq, 20: 59, 21: $Vr, 24: $Vs, 26: $Vt, 28: $Vu, 30: $Vv }, { 5: $Vw, 30: $Vx, 46: 66, 47: $Vy, 49: $Vz }, { 23: 71, 62: $Ve, 63: $Vf }, { 23: 72, 62: $Ve, 63: $Vf }, o($VA, [2, 13]), { 22: [1, 73] }, { 22: [1, 74] }, { 22: [1, 75] }, { 22: [1, 76] }, { 5: $Vq, 20: 77, 21: $Vr, 24: $Vs, 26: $Vt, 28: $Vu, 30: $Vv }, o($VA, [2, 19]), o($VA, [2, 33]), { 22: [1, 78] }, { 22: [1, 79] }, { 5: $Vw, 30: $Vx, 46: 80, 47: $Vy, 49: $Vz }, o($VA, [2, 37]), o($VA, [2, 38]), o($VA, [2, 39]), { 23: 81, 62: $Ve, 63: $Vf }, { 25: 82, 62: [1, 83], 63: [1, 84] }, { 27: 85, 37: [1, 86], 38: [1, 87], 39: [1, 88] }, { 29: 89, 40: [1, 90], 41: [1, 91], 42: [1, 92], 43: [1, 93] }, o($VA, [2, 18]), { 48: 94, 62: [1, 95], 63: [1, 96] }, { 50: 97, 62: [1, 98], 63: [1, 99] }, o($VA, [2, 36]), { 5: [1, 100] }, { 5: [1, 101] }, { 5: [2, 51] }, { 5: [2, 52] }, { 5: [1, 102] }, { 5: [2, 26] }, { 5: [2, 27] }, { 5: [2, 28] }, { 5: [1, 103] }, { 5: [2, 29] }, { 5: [2, 30] }, { 5: [2, 31] }, { 5: [2, 32] }, { 5: [1, 104] }, { 5: [2, 55] }, { 5: [2, 56] }, { 5: [1, 105] }, { 5: [2, 57] }, { 5: [2, 58] }, { 5: $Vq, 20: 106, 21: $Vr, 24: $Vs, 26: $Vt, 28: $Vu, 30: $Vv }, { 5: $Vq, 20: 107, 21: $Vr, 24: $Vs, 26: $Vt, 28: $Vu, 30: $Vv }, { 5: $Vq, 20: 108, 21: $Vr, 24: $Vs, 26: $Vt, 28: $Vu, 30: $Vv }, { 5: $Vq, 20: 109, 21: $Vr, 24: $Vs, 26: $Vt, 28: $Vu, 30: $Vv }, { 5: $Vw, 30: $Vx, 46: 110, 47: $Vy, 49: $Vz }, { 5: $Vw, 30: $Vx, 46: 111, 47: $Vy, 49: $Vz }, o($VA, [2, 14]), o($VA, [2, 15]), o($VA, [2, 16]), o($VA, [2, 17]), o($VA, [2, 34]), o($VA, [2, 35])],
    defaultActions: { 8: [2, 2], 12: [2, 1], 30: [2, 3], 31: [2, 8], 32: [2, 9], 33: [2, 10], 34: [2, 11], 35: [2, 12], 37: [2, 47], 38: [2, 48], 40: [2, 53], 41: [2, 54], 83: [2, 51], 84: [2, 52], 86: [2, 26], 87: [2, 27], 88: [2, 28], 90: [2, 29], 91: [2, 30], 92: [2, 31], 93: [2, 32], 95: [2, 55], 96: [2, 56], 98: [2, 57], 99: [2, 58] },
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
            return "title";
          case 1:
            this.begin("acc_title");
            return 9;
          case 2:
            this.popState();
            return "acc_title_value";
          case 3:
            this.begin("acc_descr");
            return 11;
          case 4:
            this.popState();
            return "acc_descr_value";
          case 5:
            this.begin("acc_descr_multiline");
            break;
          case 6:
            this.popState();
            break;
          case 7:
            return "acc_descr_multiline_value";
          case 8:
            return 5;
          case 9:
            break;
          case 10:
            break;
          case 11:
            break;
          case 12:
            return 8;
          case 13:
            return 6;
          case 14:
            return 19;
          case 15:
            return 30;
          case 16:
            return 22;
          case 17:
            return 21;
          case 18:
            return 24;
          case 19:
            return 26;
          case 20:
            return 28;
          case 21:
            return 31;
          case 22:
            return 32;
          case 23:
            return 33;
          case 24:
            return 34;
          case 25:
            return 35;
          case 26:
            return 36;
          case 27:
            return 37;
          case 28:
            return 38;
          case 29:
            return 39;
          case 30:
            return 40;
          case 31:
            return 41;
          case 32:
            return 42;
          case 33:
            return 43;
          case 34:
            return 44;
          case 35:
            return 55;
          case 36:
            return 56;
          case 37:
            return 57;
          case 38:
            return 58;
          case 39:
            return 59;
          case 40:
            return 60;
          case 41:
            return 61;
          case 42:
            return 47;
          case 43:
            return 49;
          case 44:
            return 51;
          case 45:
            return 54;
          case 46:
            return 53;
          case 47:
            this.begin("string");
            break;
          case 48:
            this.popState();
            break;
          case 49:
            return "qString";
          case 50:
            yy_.yytext = yy_.yytext.trim();
            return 62;
        }
      },
      rules: [/^(?:title\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:(\r?\n)+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:$)/i, /^(?:requirementDiagram\b)/i, /^(?:\{)/i, /^(?:\})/i, /^(?::)/i, /^(?:id\b)/i, /^(?:text\b)/i, /^(?:risk\b)/i, /^(?:verifyMethod\b)/i, /^(?:requirement\b)/i, /^(?:functionalRequirement\b)/i, /^(?:interfaceRequirement\b)/i, /^(?:performanceRequirement\b)/i, /^(?:physicalRequirement\b)/i, /^(?:designConstraint\b)/i, /^(?:low\b)/i, /^(?:medium\b)/i, /^(?:high\b)/i, /^(?:analysis\b)/i, /^(?:demonstration\b)/i, /^(?:inspection\b)/i, /^(?:test\b)/i, /^(?:element\b)/i, /^(?:contains\b)/i, /^(?:copies\b)/i, /^(?:derives\b)/i, /^(?:satisfies\b)/i, /^(?:verifies\b)/i, /^(?:refines\b)/i, /^(?:traces\b)/i, /^(?:type\b)/i, /^(?:docref\b)/i, /^(?:<-)/i, /^(?:->)/i, /^(?:-)/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[\w][^\r\n\{\<\>\-\=]*)/i],
      conditions: { "acc_descr_multiline": { "rules": [6, 7], "inclusive": false }, "acc_descr": { "rules": [4], "inclusive": false }, "acc_title": { "rules": [2], "inclusive": false }, "unqString": { "rules": [], "inclusive": false }, "token": { "rules": [], "inclusive": false }, "string": { "rules": [48, 49], "inclusive": false }, "INITIAL": { "rules": [0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 50], "inclusive": true } }
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
let relations = [];
let latestRequirement = {};
let requirements = {};
let latestElement = {};
let elements = {};
const RequirementType = {
  REQUIREMENT: "Requirement",
  FUNCTIONAL_REQUIREMENT: "Functional Requirement",
  INTERFACE_REQUIREMENT: "Interface Requirement",
  PERFORMANCE_REQUIREMENT: "Performance Requirement",
  PHYSICAL_REQUIREMENT: "Physical Requirement",
  DESIGN_CONSTRAINT: "Design Constraint"
};
const RiskLevel = {
  LOW_RISK: "Low",
  MED_RISK: "Medium",
  HIGH_RISK: "High"
};
const VerifyType = {
  VERIFY_ANALYSIS: "Analysis",
  VERIFY_DEMONSTRATION: "Demonstration",
  VERIFY_INSPECTION: "Inspection",
  VERIFY_TEST: "Test"
};
const Relationships = {
  CONTAINS: "contains",
  COPIES: "copies",
  DERIVES: "derives",
  SATISFIES: "satisfies",
  VERIFIES: "verifies",
  REFINES: "refines",
  TRACES: "traces"
};
const addRequirement = (name, type) => {
  if (requirements[name] === void 0) {
    requirements[name] = {
      name,
      type,
      id: latestRequirement.id,
      text: latestRequirement.text,
      risk: latestRequirement.risk,
      verifyMethod: latestRequirement.verifyMethod
    };
  }
  latestRequirement = {};
  return requirements[name];
};
const getRequirements = () => requirements;
const setNewReqId = (id) => {
  if (latestRequirement !== void 0) {
    latestRequirement.id = id;
  }
};
const setNewReqText = (text) => {
  if (latestRequirement !== void 0) {
    latestRequirement.text = text;
  }
};
const setNewReqRisk = (risk) => {
  if (latestRequirement !== void 0) {
    latestRequirement.risk = risk;
  }
};
const setNewReqVerifyMethod = (verifyMethod) => {
  if (latestRequirement !== void 0) {
    latestRequirement.verifyMethod = verifyMethod;
  }
};
const addElement = (name) => {
  if (elements[name] === void 0) {
    elements[name] = {
      name,
      type: latestElement.type,
      docRef: latestElement.docRef
    };
    index.log$1.info("Added new requirement: ", name);
  }
  latestElement = {};
  return elements[name];
};
const getElements = () => elements;
const setNewElementType = (type) => {
  if (latestElement !== void 0) {
    latestElement.type = type;
  }
};
const setNewElementDocRef = (docRef) => {
  if (latestElement !== void 0) {
    latestElement.docRef = docRef;
  }
};
const addRelationship = (type, src, dst) => {
  relations.push({
    type,
    src,
    dst
  });
};
const getRelationships = () => relations;
const clear = () => {
  relations = [];
  latestRequirement = {};
  requirements = {};
  latestElement = {};
  elements = {};
  index.clear();
};
const db = {
  RequirementType,
  RiskLevel,
  VerifyType,
  Relationships,
  getConfig: () => index.getConfig().req,
  addRequirement,
  getRequirements,
  setNewReqId,
  setNewReqText,
  setNewReqRisk,
  setNewReqVerifyMethod,
  setAccTitle: index.setAccTitle,
  getAccTitle: index.getAccTitle,
  setAccDescription: index.setAccDescription,
  getAccDescription: index.getAccDescription,
  addElement,
  getElements,
  setNewElementType,
  setNewElementDocRef,
  addRelationship,
  getRelationships,
  clear
};
const getStyles = (options) => `

  marker {
    fill: ${options.relationColor};
    stroke: ${options.relationColor};
  }

  marker.cross {
    stroke: ${options.lineColor};
  }

  svg {
    font-family: ${options.fontFamily};
    font-size: ${options.fontSize};
  }

  .reqBox {
    fill: ${options.requirementBackground};
    fill-opacity: 1.0;
    stroke: ${options.requirementBorderColor};
    stroke-width: ${options.requirementBorderSize};
  }
  
  .reqTitle, .reqLabel{
    fill:  ${options.requirementTextColor};
  }
  .reqLabelBox {
    fill: ${options.relationLabelBackground};
    fill-opacity: 1.0;
  }

  .req-title-line {
    stroke: ${options.requirementBorderColor};
    stroke-width: ${options.requirementBorderSize};
  }
  .relationshipLine {
    stroke: ${options.relationColor};
    stroke-width: 1;
  }
  .relationshipLabel {
    fill: ${options.relationLabelColor};
  }

`;
const styles = getStyles;
const ReqMarkers = {
  CONTAINS: "contains",
  ARROW: "arrow"
};
const insertLineEndings = (parentNode, conf2) => {
  let containsNode = parentNode.append("defs").append("marker").attr("id", ReqMarkers.CONTAINS + "_line_ending").attr("refX", 0).attr("refY", conf2.line_height / 2).attr("markerWidth", conf2.line_height).attr("markerHeight", conf2.line_height).attr("orient", "auto").append("g");
  containsNode.append("circle").attr("cx", conf2.line_height / 2).attr("cy", conf2.line_height / 2).attr("r", conf2.line_height / 2).attr("fill", "none");
  containsNode.append("line").attr("x1", 0).attr("x2", conf2.line_height).attr("y1", conf2.line_height / 2).attr("y2", conf2.line_height / 2).attr("stroke-width", 1);
  containsNode.append("line").attr("y1", 0).attr("y2", conf2.line_height).attr("x1", conf2.line_height / 2).attr("x2", conf2.line_height / 2).attr("stroke-width", 1);
  parentNode.append("defs").append("marker").attr("id", ReqMarkers.ARROW + "_line_ending").attr("refX", conf2.line_height).attr("refY", 0.5 * conf2.line_height).attr("markerWidth", conf2.line_height).attr("markerHeight", conf2.line_height).attr("orient", "auto").append("path").attr(
    "d",
    `M0,0
      L${conf2.line_height},${conf2.line_height / 2}
      M${conf2.line_height},${conf2.line_height / 2}
      L0,${conf2.line_height}`
  ).attr("stroke-width", 1);
};
const markers = {
  ReqMarkers,
  insertLineEndings
};
let conf = {};
let relCnt = 0;
const newRectNode = (parentNode, id) => {
  return parentNode.insert("rect", "#" + id).attr("class", "req reqBox").attr("x", 0).attr("y", 0).attr("width", conf.rect_min_width + "px").attr("height", conf.rect_min_height + "px");
};
const newTitleNode = (parentNode, id, txts) => {
  let x = conf.rect_min_width / 2;
  let title = parentNode.append("text").attr("class", "req reqLabel reqTitle").attr("id", id).attr("x", x).attr("y", conf.rect_padding).attr("dominant-baseline", "hanging");
  let i = 0;
  txts.forEach((textStr) => {
    if (i == 0) {
      title.append("tspan").attr("text-anchor", "middle").attr("x", conf.rect_min_width / 2).attr("dy", 0).text(textStr);
    } else {
      title.append("tspan").attr("text-anchor", "middle").attr("x", conf.rect_min_width / 2).attr("dy", conf.line_height * 0.75).text(textStr);
    }
    i++;
  });
  let yPadding = 1.5 * conf.rect_padding;
  let linePadding = i * conf.line_height * 0.75;
  let totalY = yPadding + linePadding;
  parentNode.append("line").attr("class", "req-title-line").attr("x1", "0").attr("x2", conf.rect_min_width).attr("y1", totalY).attr("y2", totalY);
  return {
    titleNode: title,
    y: totalY
  };
};
const newBodyNode = (parentNode, id, txts, yStart) => {
  let body = parentNode.append("text").attr("class", "req reqLabel").attr("id", id).attr("x", conf.rect_padding).attr("y", yStart).attr("dominant-baseline", "hanging");
  let currentRow = 0;
  const charLimit = 30;
  let wrappedTxts = [];
  txts.forEach((textStr) => {
    let currentTextLen = textStr.length;
    while (currentTextLen > charLimit && currentRow < 3) {
      let firstPart = textStr.substring(0, charLimit);
      textStr = textStr.substring(charLimit, textStr.length);
      currentTextLen = textStr.length;
      wrappedTxts[wrappedTxts.length] = firstPart;
      currentRow++;
    }
    if (currentRow == 3) {
      let lastStr = wrappedTxts[wrappedTxts.length - 1];
      wrappedTxts[wrappedTxts.length - 1] = lastStr.substring(0, lastStr.length - 4) + "...";
    } else {
      wrappedTxts[wrappedTxts.length] = textStr;
    }
    currentRow = 0;
  });
  wrappedTxts.forEach((textStr) => {
    body.append("tspan").attr("x", conf.rect_padding).attr("dy", conf.line_height).text(textStr);
  });
  return body;
};
const addEdgeLabel = (parentNode, svgPath, conf2, txt) => {
  const len = svgPath.node().getTotalLength();
  const labelPoint = svgPath.node().getPointAtLength(len * 0.5);
  const labelId = "rel" + relCnt;
  relCnt++;
  const labelNode = parentNode.append("text").attr("class", "req relationshipLabel").attr("id", labelId).attr("x", labelPoint.x).attr("y", labelPoint.y).attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(txt);
  const labelBBox = labelNode.node().getBBox();
  parentNode.insert("rect", "#" + labelId).attr("class", "req reqLabelBox").attr("x", labelPoint.x - labelBBox.width / 2).attr("y", labelPoint.y - labelBBox.height / 2).attr("width", labelBBox.width).attr("height", labelBBox.height).attr("fill", "white").attr("fill-opacity", "85%");
};
const drawRelationshipFromLayout = function(svg, rel, g, insert, diagObj) {
  const edge = g.edge(elementString(rel.src), elementString(rel.dst));
  const lineFunction = line.line().x(function(d) {
    return d.x;
  }).y(function(d) {
    return d.y;
  });
  const svgPath = svg.insert("path", "#" + insert).attr("class", "er relationshipLine").attr("d", lineFunction(edge.points)).attr("fill", "none");
  if (rel.type == diagObj.db.Relationships.CONTAINS) {
    svgPath.attr(
      "marker-start",
      "url(" + index.common$1.getUrl(conf.arrowMarkerAbsolute) + "#" + rel.type + "_line_ending)"
    );
  } else {
    svgPath.attr("stroke-dasharray", "10,7");
    svgPath.attr(
      "marker-end",
      "url(" + index.common$1.getUrl(conf.arrowMarkerAbsolute) + "#" + markers.ReqMarkers.ARROW + "_line_ending)"
    );
  }
  addEdgeLabel(svg, svgPath, conf, `<<${rel.type}>>`);
  return;
};
const drawReqs = (reqs, graph, svgNode) => {
  Object.keys(reqs).forEach((reqName) => {
    let req = reqs[reqName];
    reqName = elementString(reqName);
    index.log$1.info("Added new requirement: ", reqName);
    const groupNode = svgNode.append("g").attr("id", reqName);
    const textId = "req-" + reqName;
    const rectNode = newRectNode(groupNode, textId);
    let titleNodeInfo = newTitleNode(groupNode, reqName + "_title", [
      `<<${req.type}>>`,
      `${req.name}`
    ]);
    newBodyNode(
      groupNode,
      reqName + "_body",
      [
        `Id: ${req.id}`,
        `Text: ${req.text}`,
        `Risk: ${req.risk}`,
        `Verification: ${req.verifyMethod}`
      ],
      titleNodeInfo.y
    );
    const rectBBox = rectNode.node().getBBox();
    graph.setNode(reqName, {
      width: rectBBox.width,
      height: rectBBox.height,
      shape: "rect",
      id: reqName
    });
  });
};
const drawElements = (els, graph, svgNode) => {
  Object.keys(els).forEach((elName) => {
    let el = els[elName];
    const id = elementString(elName);
    const groupNode = svgNode.append("g").attr("id", id);
    const textId = "element-" + id;
    const rectNode = newRectNode(groupNode, textId);
    let titleNodeInfo = newTitleNode(groupNode, textId + "_title", [`<<Element>>`, `${elName}`]);
    newBodyNode(
      groupNode,
      textId + "_body",
      [`Type: ${el.type || "Not Specified"}`, `Doc Ref: ${el.docRef || "None"}`],
      titleNodeInfo.y
    );
    const rectBBox = rectNode.node().getBBox();
    graph.setNode(id, {
      width: rectBBox.width,
      height: rectBBox.height,
      shape: "rect",
      id
    });
  });
};
const addRelationships = (relationships, g) => {
  relationships.forEach(function(r) {
    let src = elementString(r.src);
    let dst = elementString(r.dst);
    g.setEdge(src, dst, { relationship: r });
  });
  return relationships;
};
const adjustEntities = function(svgNode, graph) {
  graph.nodes().forEach(function(v) {
    if (v !== void 0 && graph.node(v) !== void 0) {
      svgNode.select("#" + v);
      svgNode.select("#" + v).attr(
        "transform",
        "translate(" + (graph.node(v).x - graph.node(v).width / 2) + "," + (graph.node(v).y - graph.node(v).height / 2) + " )"
      );
    }
  });
  return;
};
const elementString = (str) => {
  return str.replace(/\s/g, "").replace(/\./g, "_");
};
const draw = (text, id, _version, diagObj) => {
  conf = index.getConfig().requirement;
  const securityLevel = conf.securityLevel;
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = index.select("#i" + id);
  }
  const root = securityLevel === "sandbox" ? index.select(sandboxElement.nodes()[0].contentDocument.body) : index.select("body");
  const svg = root.select(`[id='${id}']`);
  markers.insertLineEndings(svg, conf);
  const g = new graph.Graph({
    multigraph: false,
    compound: false,
    directed: true
  }).setGraph({
    rankdir: conf.layoutDirection,
    marginx: 20,
    marginy: 20,
    nodesep: 100,
    edgesep: 100,
    ranksep: 100
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  let requirements2 = diagObj.db.getRequirements();
  let elements2 = diagObj.db.getElements();
  let relationships = diagObj.db.getRelationships();
  drawReqs(requirements2, g, svg);
  drawElements(elements2, g, svg);
  addRelationships(relationships, g);
  layout.layout(g);
  adjustEntities(svg, g);
  relationships.forEach(function(rel) {
    drawRelationshipFromLayout(svg, rel, g, id, diagObj);
  });
  const padding = conf.rect_padding;
  const svgBounds = svg.node().getBBox();
  const width = svgBounds.width + padding * 2;
  const height = svgBounds.height + padding * 2;
  index.configureSvgSize(svg, height, width, conf.useMaxWidth);
  svg.attr("viewBox", `${svgBounds.x - padding} ${svgBounds.y - padding} ${width} ${height}`);
};
const renderer = {
  draw
};
const diagram = {
  parser: parser$1,
  db,
  renderer,
  styles
};

exports.diagram = diagram;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZW1lbnREaWFncmFtLWRlZmYzYmNhLTM4YmJhYmQ5LmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvbWVybWFpZC9kaXN0L3JlcXVpcmVtZW50RGlhZ3JhbS1kZWZmM2JjYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjIGFzIGdldENvbmZpZywgcyBhcyBzZXRBY2NUaXRsZSwgZyBhcyBnZXRBY2NUaXRsZSwgYiBhcyBzZXRBY2NEZXNjcmlwdGlvbiwgYSBhcyBnZXRBY2NEZXNjcmlwdGlvbiwgbCBhcyBsb2csIHYgYXMgY2xlYXIkMSwgaSBhcyBjb25maWd1cmVTdmdTaXplLCBlIGFzIGNvbW1vbiB9IGZyb20gXCIuL21lcm1haWQtYjU4NjBiNTQuanNcIjtcbmltcG9ydCB7IHNlbGVjdCwgbGluZSB9IGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgbGF5b3V0IH0gZnJvbSBcImRhZ3JlLWQzLWVzL3NyYy9kYWdyZS9pbmRleC5qc1wiO1xuaW1wb3J0ICogYXMgZ3JhcGhsaWIgZnJvbSBcImRhZ3JlLWQzLWVzL3NyYy9ncmFwaGxpYi9pbmRleC5qc1wiO1xuaW1wb3J0IFwidHMtZGVkZW50XCI7XG5pbXBvcnQgXCJkYXlqc1wiO1xuaW1wb3J0IFwiQGJyYWludHJlZS9zYW5pdGl6ZS11cmxcIjtcbmltcG9ydCBcImRvbXB1cmlmeVwiO1xuaW1wb3J0IFwia2hyb21hXCI7XG5pbXBvcnQgXCJsb2Rhc2gtZXMvbWVtb2l6ZS5qc1wiO1xuaW1wb3J0IFwibG9kYXNoLWVzL21lcmdlLmpzXCI7XG5pbXBvcnQgXCJzdHlsaXNcIjtcbmltcG9ydCBcImxvZGFzaC1lcy9pc0VtcHR5LmpzXCI7XG52YXIgcGFyc2VyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBvID0gZnVuY3Rpb24oaywgdiwgbzIsIGwpIHtcbiAgICBmb3IgKG8yID0gbzIgfHwge30sIGwgPSBrLmxlbmd0aDsgbC0tOyBvMltrW2xdXSA9IHYpXG4gICAgICA7XG4gICAgcmV0dXJuIG8yO1xuICB9LCAkVjAgPSBbMSwgM10sICRWMSA9IFsxLCA0XSwgJFYyID0gWzEsIDVdLCAkVjMgPSBbMSwgNl0sICRWNCA9IFs1LCA2LCA4LCA5LCAxMSwgMTMsIDMxLCAzMiwgMzMsIDM0LCAzNSwgMzYsIDQ0LCA2MiwgNjNdLCAkVjUgPSBbMSwgMThdLCAkVjYgPSBbMiwgN10sICRWNyA9IFsxLCAyMl0sICRWOCA9IFsxLCAyM10sICRWOSA9IFsxLCAyNF0sICRWYSA9IFsxLCAyNV0sICRWYiA9IFsxLCAyNl0sICRWYyA9IFsxLCAyN10sICRWZCA9IFsxLCAyMF0sICRWZSA9IFsxLCAyOF0sICRWZiA9IFsxLCAyOV0sICRWZyA9IFs2MiwgNjNdLCAkVmggPSBbNSwgOCwgOSwgMTEsIDEzLCAzMSwgMzIsIDMzLCAzNCwgMzUsIDM2LCA0NCwgNTEsIDUzLCA2MiwgNjNdLCAkVmkgPSBbMSwgNDddLCAkVmogPSBbMSwgNDhdLCAkVmsgPSBbMSwgNDldLCAkVmwgPSBbMSwgNTBdLCAkVm0gPSBbMSwgNTFdLCAkVm4gPSBbMSwgNTJdLCAkVm8gPSBbMSwgNTNdLCAkVnAgPSBbNTMsIDU0XSwgJFZxID0gWzEsIDY0XSwgJFZyID0gWzEsIDYwXSwgJFZzID0gWzEsIDYxXSwgJFZ0ID0gWzEsIDYyXSwgJFZ1ID0gWzEsIDYzXSwgJFZ2ID0gWzEsIDY1XSwgJFZ3ID0gWzEsIDY5XSwgJFZ4ID0gWzEsIDcwXSwgJFZ5ID0gWzEsIDY3XSwgJFZ6ID0gWzEsIDY4XSwgJFZBID0gWzUsIDgsIDksIDExLCAxMywgMzEsIDMyLCAzMywgMzQsIDM1LCAzNiwgNDQsIDYyLCA2M107XG4gIHZhciBwYXJzZXIyID0ge1xuICAgIHRyYWNlOiBmdW5jdGlvbiB0cmFjZSgpIHtcbiAgICB9LFxuICAgIHl5OiB7fSxcbiAgICBzeW1ib2xzXzogeyBcImVycm9yXCI6IDIsIFwic3RhcnRcIjogMywgXCJkaXJlY3RpdmVcIjogNCwgXCJORVdMSU5FXCI6IDUsIFwiUkRcIjogNiwgXCJkaWFncmFtXCI6IDcsIFwiRU9GXCI6IDgsIFwiYWNjX3RpdGxlXCI6IDksIFwiYWNjX3RpdGxlX3ZhbHVlXCI6IDEwLCBcImFjY19kZXNjclwiOiAxMSwgXCJhY2NfZGVzY3JfdmFsdWVcIjogMTIsIFwiYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZVwiOiAxMywgXCJyZXF1aXJlbWVudERlZlwiOiAxNCwgXCJlbGVtZW50RGVmXCI6IDE1LCBcInJlbGF0aW9uc2hpcERlZlwiOiAxNiwgXCJyZXF1aXJlbWVudFR5cGVcIjogMTcsIFwicmVxdWlyZW1lbnROYW1lXCI6IDE4LCBcIlNUUlVDVF9TVEFSVFwiOiAxOSwgXCJyZXF1aXJlbWVudEJvZHlcIjogMjAsIFwiSURcIjogMjEsIFwiQ09MT05TRVBcIjogMjIsIFwiaWRcIjogMjMsIFwiVEVYVFwiOiAyNCwgXCJ0ZXh0XCI6IDI1LCBcIlJJU0tcIjogMjYsIFwicmlza0xldmVsXCI6IDI3LCBcIlZFUklGWU1USERcIjogMjgsIFwidmVyaWZ5VHlwZVwiOiAyOSwgXCJTVFJVQ1RfU1RPUFwiOiAzMCwgXCJSRVFVSVJFTUVOVFwiOiAzMSwgXCJGVU5DVElPTkFMX1JFUVVJUkVNRU5UXCI6IDMyLCBcIklOVEVSRkFDRV9SRVFVSVJFTUVOVFwiOiAzMywgXCJQRVJGT1JNQU5DRV9SRVFVSVJFTUVOVFwiOiAzNCwgXCJQSFlTSUNBTF9SRVFVSVJFTUVOVFwiOiAzNSwgXCJERVNJR05fQ09OU1RSQUlOVFwiOiAzNiwgXCJMT1dfUklTS1wiOiAzNywgXCJNRURfUklTS1wiOiAzOCwgXCJISUdIX1JJU0tcIjogMzksIFwiVkVSSUZZX0FOQUxZU0lTXCI6IDQwLCBcIlZFUklGWV9ERU1PTlNUUkFUSU9OXCI6IDQxLCBcIlZFUklGWV9JTlNQRUNUSU9OXCI6IDQyLCBcIlZFUklGWV9URVNUXCI6IDQzLCBcIkVMRU1FTlRcIjogNDQsIFwiZWxlbWVudE5hbWVcIjogNDUsIFwiZWxlbWVudEJvZHlcIjogNDYsIFwiVFlQRVwiOiA0NywgXCJ0eXBlXCI6IDQ4LCBcIkRPQ1JFRlwiOiA0OSwgXCJyZWZcIjogNTAsIFwiRU5EX0FSUk9XX0xcIjogNTEsIFwicmVsYXRpb25zaGlwXCI6IDUyLCBcIkxJTkVcIjogNTMsIFwiRU5EX0FSUk9XX1JcIjogNTQsIFwiQ09OVEFJTlNcIjogNTUsIFwiQ09QSUVTXCI6IDU2LCBcIkRFUklWRVNcIjogNTcsIFwiU0FUSVNGSUVTXCI6IDU4LCBcIlZFUklGSUVTXCI6IDU5LCBcIlJFRklORVNcIjogNjAsIFwiVFJBQ0VTXCI6IDYxLCBcInVucVN0cmluZ1wiOiA2MiwgXCJxU3RyaW5nXCI6IDYzLCBcIiRhY2NlcHRcIjogMCwgXCIkZW5kXCI6IDEgfSxcbiAgICB0ZXJtaW5hbHNfOiB7IDI6IFwiZXJyb3JcIiwgNTogXCJORVdMSU5FXCIsIDY6IFwiUkRcIiwgODogXCJFT0ZcIiwgOTogXCJhY2NfdGl0bGVcIiwgMTA6IFwiYWNjX3RpdGxlX3ZhbHVlXCIsIDExOiBcImFjY19kZXNjclwiLCAxMjogXCJhY2NfZGVzY3JfdmFsdWVcIiwgMTM6IFwiYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZVwiLCAxOTogXCJTVFJVQ1RfU1RBUlRcIiwgMjE6IFwiSURcIiwgMjI6IFwiQ09MT05TRVBcIiwgMjQ6IFwiVEVYVFwiLCAyNjogXCJSSVNLXCIsIDI4OiBcIlZFUklGWU1USERcIiwgMzA6IFwiU1RSVUNUX1NUT1BcIiwgMzE6IFwiUkVRVUlSRU1FTlRcIiwgMzI6IFwiRlVOQ1RJT05BTF9SRVFVSVJFTUVOVFwiLCAzMzogXCJJTlRFUkZBQ0VfUkVRVUlSRU1FTlRcIiwgMzQ6IFwiUEVSRk9STUFOQ0VfUkVRVUlSRU1FTlRcIiwgMzU6IFwiUEhZU0lDQUxfUkVRVUlSRU1FTlRcIiwgMzY6IFwiREVTSUdOX0NPTlNUUkFJTlRcIiwgMzc6IFwiTE9XX1JJU0tcIiwgMzg6IFwiTUVEX1JJU0tcIiwgMzk6IFwiSElHSF9SSVNLXCIsIDQwOiBcIlZFUklGWV9BTkFMWVNJU1wiLCA0MTogXCJWRVJJRllfREVNT05TVFJBVElPTlwiLCA0MjogXCJWRVJJRllfSU5TUEVDVElPTlwiLCA0MzogXCJWRVJJRllfVEVTVFwiLCA0NDogXCJFTEVNRU5UXCIsIDQ3OiBcIlRZUEVcIiwgNDk6IFwiRE9DUkVGXCIsIDUxOiBcIkVORF9BUlJPV19MXCIsIDUzOiBcIkxJTkVcIiwgNTQ6IFwiRU5EX0FSUk9XX1JcIiwgNTU6IFwiQ09OVEFJTlNcIiwgNTY6IFwiQ09QSUVTXCIsIDU3OiBcIkRFUklWRVNcIiwgNTg6IFwiU0FUSVNGSUVTXCIsIDU5OiBcIlZFUklGSUVTXCIsIDYwOiBcIlJFRklORVNcIiwgNjE6IFwiVFJBQ0VTXCIsIDYyOiBcInVucVN0cmluZ1wiLCA2MzogXCJxU3RyaW5nXCIgfSxcbiAgICBwcm9kdWN0aW9uc186IFswLCBbMywgM10sIFszLCAyXSwgWzMsIDRdLCBbNCwgMl0sIFs0LCAyXSwgWzQsIDFdLCBbNywgMF0sIFs3LCAyXSwgWzcsIDJdLCBbNywgMl0sIFs3LCAyXSwgWzcsIDJdLCBbMTQsIDVdLCBbMjAsIDVdLCBbMjAsIDVdLCBbMjAsIDVdLCBbMjAsIDVdLCBbMjAsIDJdLCBbMjAsIDFdLCBbMTcsIDFdLCBbMTcsIDFdLCBbMTcsIDFdLCBbMTcsIDFdLCBbMTcsIDFdLCBbMTcsIDFdLCBbMjcsIDFdLCBbMjcsIDFdLCBbMjcsIDFdLCBbMjksIDFdLCBbMjksIDFdLCBbMjksIDFdLCBbMjksIDFdLCBbMTUsIDVdLCBbNDYsIDVdLCBbNDYsIDVdLCBbNDYsIDJdLCBbNDYsIDFdLCBbMTYsIDVdLCBbMTYsIDVdLCBbNTIsIDFdLCBbNTIsIDFdLCBbNTIsIDFdLCBbNTIsIDFdLCBbNTIsIDFdLCBbNTIsIDFdLCBbNTIsIDFdLCBbMTgsIDFdLCBbMTgsIDFdLCBbMjMsIDFdLCBbMjMsIDFdLCBbMjUsIDFdLCBbMjUsIDFdLCBbNDUsIDFdLCBbNDUsIDFdLCBbNDgsIDFdLCBbNDgsIDFdLCBbNTAsIDFdLCBbNTAsIDFdXSxcbiAgICBwZXJmb3JtQWN0aW9uOiBmdW5jdGlvbiBhbm9ueW1vdXMoeXl0ZXh0LCB5eWxlbmcsIHl5bGluZW5vLCB5eSwgeXlzdGF0ZSwgJCQsIF8kKSB7XG4gICAgICB2YXIgJDAgPSAkJC5sZW5ndGggLSAxO1xuICAgICAgc3dpdGNoICh5eXN0YXRlKSB7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0udHJpbSgpO1xuICAgICAgICAgIHl5LnNldEFjY1RpdGxlKHRoaXMuJCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXS50cmltKCk7XG4gICAgICAgICAgeXkuc2V0QWNjRGVzY3JpcHRpb24odGhpcy4kKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIHRoaXMuJCA9IFtdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIHl5LmFkZFJlcXVpcmVtZW50KCQkWyQwIC0gM10sICQkWyQwIC0gNF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgIHl5LnNldE5ld1JlcUlkKCQkWyQwIC0gMl0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgIHl5LnNldE5ld1JlcVRleHQoJCRbJDAgLSAyXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgeXkuc2V0TmV3UmVxUmlzaygkJFskMCAtIDJdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICB5eS5zZXROZXdSZXFWZXJpZnlNZXRob2QoJCRbJDAgLSAyXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgdGhpcy4kID0geXkuUmVxdWlyZW1lbnRUeXBlLlJFUVVJUkVNRU5UO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgIHRoaXMuJCA9IHl5LlJlcXVpcmVtZW50VHlwZS5GVU5DVElPTkFMX1JFUVVJUkVNRU5UO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgIHRoaXMuJCA9IHl5LlJlcXVpcmVtZW50VHlwZS5JTlRFUkZBQ0VfUkVRVUlSRU1FTlQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgdGhpcy4kID0geXkuUmVxdWlyZW1lbnRUeXBlLlBFUkZPUk1BTkNFX1JFUVVJUkVNRU5UO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgIHRoaXMuJCA9IHl5LlJlcXVpcmVtZW50VHlwZS5QSFlTSUNBTF9SRVFVSVJFTUVOVDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICB0aGlzLiQgPSB5eS5SZXF1aXJlbWVudFR5cGUuREVTSUdOX0NPTlNUUkFJTlQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgdGhpcy4kID0geXkuUmlza0xldmVsLkxPV19SSVNLO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgIHRoaXMuJCA9IHl5LlJpc2tMZXZlbC5NRURfUklTSztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICB0aGlzLiQgPSB5eS5SaXNrTGV2ZWwuSElHSF9SSVNLO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgIHRoaXMuJCA9IHl5LlZlcmlmeVR5cGUuVkVSSUZZX0FOQUxZU0lTO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgIHRoaXMuJCA9IHl5LlZlcmlmeVR5cGUuVkVSSUZZX0RFTU9OU1RSQVRJT047XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgdGhpcy4kID0geXkuVmVyaWZ5VHlwZS5WRVJJRllfSU5TUEVDVElPTjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICB0aGlzLiQgPSB5eS5WZXJpZnlUeXBlLlZFUklGWV9URVNUO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgIHl5LmFkZEVsZW1lbnQoJCRbJDAgLSAzXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgeXkuc2V0TmV3RWxlbWVudFR5cGUoJCRbJDAgLSAyXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzU6XG4gICAgICAgICAgeXkuc2V0TmV3RWxlbWVudERvY1JlZigkJFskMCAtIDJdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICB5eS5hZGRSZWxhdGlvbnNoaXAoJCRbJDAgLSAyXSwgJCRbJDBdLCAkJFskMCAtIDRdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICB5eS5hZGRSZWxhdGlvbnNoaXAoJCRbJDAgLSAyXSwgJCRbJDAgLSA0XSwgJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICB0aGlzLiQgPSB5eS5SZWxhdGlvbnNoaXBzLkNPTlRBSU5TO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgIHRoaXMuJCA9IHl5LlJlbGF0aW9uc2hpcHMuQ09QSUVTO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgIHRoaXMuJCA9IHl5LlJlbGF0aW9uc2hpcHMuREVSSVZFUztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0MzpcbiAgICAgICAgICB0aGlzLiQgPSB5eS5SZWxhdGlvbnNoaXBzLlNBVElTRklFUztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICB0aGlzLiQgPSB5eS5SZWxhdGlvbnNoaXBzLlZFUklGSUVTO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgIHRoaXMuJCA9IHl5LlJlbGF0aW9uc2hpcHMuUkVGSU5FUztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0NjpcbiAgICAgICAgICB0aGlzLiQgPSB5eS5SZWxhdGlvbnNoaXBzLlRSQUNFUztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuICAgIHRhYmxlOiBbeyAzOiAxLCA0OiAyLCA2OiAkVjAsIDk6ICRWMSwgMTE6ICRWMiwgMTM6ICRWMyB9LCB7IDE6IFszXSB9LCB7IDM6IDgsIDQ6IDIsIDU6IFsxLCA3XSwgNjogJFYwLCA5OiAkVjEsIDExOiAkVjIsIDEzOiAkVjMgfSwgeyA1OiBbMSwgOV0gfSwgeyAxMDogWzEsIDEwXSB9LCB7IDEyOiBbMSwgMTFdIH0sIG8oJFY0LCBbMiwgNl0pLCB7IDM6IDEyLCA0OiAyLCA2OiAkVjAsIDk6ICRWMSwgMTE6ICRWMiwgMTM6ICRWMyB9LCB7IDE6IFsyLCAyXSB9LCB7IDQ6IDE3LCA1OiAkVjUsIDc6IDEzLCA4OiAkVjYsIDk6ICRWMSwgMTE6ICRWMiwgMTM6ICRWMywgMTQ6IDE0LCAxNTogMTUsIDE2OiAxNiwgMTc6IDE5LCAyMzogMjEsIDMxOiAkVjcsIDMyOiAkVjgsIDMzOiAkVjksIDM0OiAkVmEsIDM1OiAkVmIsIDM2OiAkVmMsIDQ0OiAkVmQsIDYyOiAkVmUsIDYzOiAkVmYgfSwgbygkVjQsIFsyLCA0XSksIG8oJFY0LCBbMiwgNV0pLCB7IDE6IFsyLCAxXSB9LCB7IDg6IFsxLCAzMF0gfSwgeyA0OiAxNywgNTogJFY1LCA3OiAzMSwgODogJFY2LCA5OiAkVjEsIDExOiAkVjIsIDEzOiAkVjMsIDE0OiAxNCwgMTU6IDE1LCAxNjogMTYsIDE3OiAxOSwgMjM6IDIxLCAzMTogJFY3LCAzMjogJFY4LCAzMzogJFY5LCAzNDogJFZhLCAzNTogJFZiLCAzNjogJFZjLCA0NDogJFZkLCA2MjogJFZlLCA2MzogJFZmIH0sIHsgNDogMTcsIDU6ICRWNSwgNzogMzIsIDg6ICRWNiwgOTogJFYxLCAxMTogJFYyLCAxMzogJFYzLCAxNDogMTQsIDE1OiAxNSwgMTY6IDE2LCAxNzogMTksIDIzOiAyMSwgMzE6ICRWNywgMzI6ICRWOCwgMzM6ICRWOSwgMzQ6ICRWYSwgMzU6ICRWYiwgMzY6ICRWYywgNDQ6ICRWZCwgNjI6ICRWZSwgNjM6ICRWZiB9LCB7IDQ6IDE3LCA1OiAkVjUsIDc6IDMzLCA4OiAkVjYsIDk6ICRWMSwgMTE6ICRWMiwgMTM6ICRWMywgMTQ6IDE0LCAxNTogMTUsIDE2OiAxNiwgMTc6IDE5LCAyMzogMjEsIDMxOiAkVjcsIDMyOiAkVjgsIDMzOiAkVjksIDM0OiAkVmEsIDM1OiAkVmIsIDM2OiAkVmMsIDQ0OiAkVmQsIDYyOiAkVmUsIDYzOiAkVmYgfSwgeyA0OiAxNywgNTogJFY1LCA3OiAzNCwgODogJFY2LCA5OiAkVjEsIDExOiAkVjIsIDEzOiAkVjMsIDE0OiAxNCwgMTU6IDE1LCAxNjogMTYsIDE3OiAxOSwgMjM6IDIxLCAzMTogJFY3LCAzMjogJFY4LCAzMzogJFY5LCAzNDogJFZhLCAzNTogJFZiLCAzNjogJFZjLCA0NDogJFZkLCA2MjogJFZlLCA2MzogJFZmIH0sIHsgNDogMTcsIDU6ICRWNSwgNzogMzUsIDg6ICRWNiwgOTogJFYxLCAxMTogJFYyLCAxMzogJFYzLCAxNDogMTQsIDE1OiAxNSwgMTY6IDE2LCAxNzogMTksIDIzOiAyMSwgMzE6ICRWNywgMzI6ICRWOCwgMzM6ICRWOSwgMzQ6ICRWYSwgMzU6ICRWYiwgMzY6ICRWYywgNDQ6ICRWZCwgNjI6ICRWZSwgNjM6ICRWZiB9LCB7IDE4OiAzNiwgNjI6IFsxLCAzN10sIDYzOiBbMSwgMzhdIH0sIHsgNDU6IDM5LCA2MjogWzEsIDQwXSwgNjM6IFsxLCA0MV0gfSwgeyA1MTogWzEsIDQyXSwgNTM6IFsxLCA0M10gfSwgbygkVmcsIFsyLCAyMF0pLCBvKCRWZywgWzIsIDIxXSksIG8oJFZnLCBbMiwgMjJdKSwgbygkVmcsIFsyLCAyM10pLCBvKCRWZywgWzIsIDI0XSksIG8oJFZnLCBbMiwgMjVdKSwgbygkVmgsIFsyLCA0OV0pLCBvKCRWaCwgWzIsIDUwXSksIHsgMTogWzIsIDNdIH0sIHsgODogWzIsIDhdIH0sIHsgODogWzIsIDldIH0sIHsgODogWzIsIDEwXSB9LCB7IDg6IFsyLCAxMV0gfSwgeyA4OiBbMiwgMTJdIH0sIHsgMTk6IFsxLCA0NF0gfSwgeyAxOTogWzIsIDQ3XSB9LCB7IDE5OiBbMiwgNDhdIH0sIHsgMTk6IFsxLCA0NV0gfSwgeyAxOTogWzIsIDUzXSB9LCB7IDE5OiBbMiwgNTRdIH0sIHsgNTI6IDQ2LCA1NTogJFZpLCA1NjogJFZqLCA1NzogJFZrLCA1ODogJFZsLCA1OTogJFZtLCA2MDogJFZuLCA2MTogJFZvIH0sIHsgNTI6IDU0LCA1NTogJFZpLCA1NjogJFZqLCA1NzogJFZrLCA1ODogJFZsLCA1OTogJFZtLCA2MDogJFZuLCA2MTogJFZvIH0sIHsgNTogWzEsIDU1XSB9LCB7IDU6IFsxLCA1Nl0gfSwgeyA1MzogWzEsIDU3XSB9LCBvKCRWcCwgWzIsIDQwXSksIG8oJFZwLCBbMiwgNDFdKSwgbygkVnAsIFsyLCA0Ml0pLCBvKCRWcCwgWzIsIDQzXSksIG8oJFZwLCBbMiwgNDRdKSwgbygkVnAsIFsyLCA0NV0pLCBvKCRWcCwgWzIsIDQ2XSksIHsgNTQ6IFsxLCA1OF0gfSwgeyA1OiAkVnEsIDIwOiA1OSwgMjE6ICRWciwgMjQ6ICRWcywgMjY6ICRWdCwgMjg6ICRWdSwgMzA6ICRWdiB9LCB7IDU6ICRWdywgMzA6ICRWeCwgNDY6IDY2LCA0NzogJFZ5LCA0OTogJFZ6IH0sIHsgMjM6IDcxLCA2MjogJFZlLCA2MzogJFZmIH0sIHsgMjM6IDcyLCA2MjogJFZlLCA2MzogJFZmIH0sIG8oJFZBLCBbMiwgMTNdKSwgeyAyMjogWzEsIDczXSB9LCB7IDIyOiBbMSwgNzRdIH0sIHsgMjI6IFsxLCA3NV0gfSwgeyAyMjogWzEsIDc2XSB9LCB7IDU6ICRWcSwgMjA6IDc3LCAyMTogJFZyLCAyNDogJFZzLCAyNjogJFZ0LCAyODogJFZ1LCAzMDogJFZ2IH0sIG8oJFZBLCBbMiwgMTldKSwgbygkVkEsIFsyLCAzM10pLCB7IDIyOiBbMSwgNzhdIH0sIHsgMjI6IFsxLCA3OV0gfSwgeyA1OiAkVncsIDMwOiAkVngsIDQ2OiA4MCwgNDc6ICRWeSwgNDk6ICRWeiB9LCBvKCRWQSwgWzIsIDM3XSksIG8oJFZBLCBbMiwgMzhdKSwgbygkVkEsIFsyLCAzOV0pLCB7IDIzOiA4MSwgNjI6ICRWZSwgNjM6ICRWZiB9LCB7IDI1OiA4MiwgNjI6IFsxLCA4M10sIDYzOiBbMSwgODRdIH0sIHsgMjc6IDg1LCAzNzogWzEsIDg2XSwgMzg6IFsxLCA4N10sIDM5OiBbMSwgODhdIH0sIHsgMjk6IDg5LCA0MDogWzEsIDkwXSwgNDE6IFsxLCA5MV0sIDQyOiBbMSwgOTJdLCA0MzogWzEsIDkzXSB9LCBvKCRWQSwgWzIsIDE4XSksIHsgNDg6IDk0LCA2MjogWzEsIDk1XSwgNjM6IFsxLCA5Nl0gfSwgeyA1MDogOTcsIDYyOiBbMSwgOThdLCA2MzogWzEsIDk5XSB9LCBvKCRWQSwgWzIsIDM2XSksIHsgNTogWzEsIDEwMF0gfSwgeyA1OiBbMSwgMTAxXSB9LCB7IDU6IFsyLCA1MV0gfSwgeyA1OiBbMiwgNTJdIH0sIHsgNTogWzEsIDEwMl0gfSwgeyA1OiBbMiwgMjZdIH0sIHsgNTogWzIsIDI3XSB9LCB7IDU6IFsyLCAyOF0gfSwgeyA1OiBbMSwgMTAzXSB9LCB7IDU6IFsyLCAyOV0gfSwgeyA1OiBbMiwgMzBdIH0sIHsgNTogWzIsIDMxXSB9LCB7IDU6IFsyLCAzMl0gfSwgeyA1OiBbMSwgMTA0XSB9LCB7IDU6IFsyLCA1NV0gfSwgeyA1OiBbMiwgNTZdIH0sIHsgNTogWzEsIDEwNV0gfSwgeyA1OiBbMiwgNTddIH0sIHsgNTogWzIsIDU4XSB9LCB7IDU6ICRWcSwgMjA6IDEwNiwgMjE6ICRWciwgMjQ6ICRWcywgMjY6ICRWdCwgMjg6ICRWdSwgMzA6ICRWdiB9LCB7IDU6ICRWcSwgMjA6IDEwNywgMjE6ICRWciwgMjQ6ICRWcywgMjY6ICRWdCwgMjg6ICRWdSwgMzA6ICRWdiB9LCB7IDU6ICRWcSwgMjA6IDEwOCwgMjE6ICRWciwgMjQ6ICRWcywgMjY6ICRWdCwgMjg6ICRWdSwgMzA6ICRWdiB9LCB7IDU6ICRWcSwgMjA6IDEwOSwgMjE6ICRWciwgMjQ6ICRWcywgMjY6ICRWdCwgMjg6ICRWdSwgMzA6ICRWdiB9LCB7IDU6ICRWdywgMzA6ICRWeCwgNDY6IDExMCwgNDc6ICRWeSwgNDk6ICRWeiB9LCB7IDU6ICRWdywgMzA6ICRWeCwgNDY6IDExMSwgNDc6ICRWeSwgNDk6ICRWeiB9LCBvKCRWQSwgWzIsIDE0XSksIG8oJFZBLCBbMiwgMTVdKSwgbygkVkEsIFsyLCAxNl0pLCBvKCRWQSwgWzIsIDE3XSksIG8oJFZBLCBbMiwgMzRdKSwgbygkVkEsIFsyLCAzNV0pXSxcbiAgICBkZWZhdWx0QWN0aW9uczogeyA4OiBbMiwgMl0sIDEyOiBbMiwgMV0sIDMwOiBbMiwgM10sIDMxOiBbMiwgOF0sIDMyOiBbMiwgOV0sIDMzOiBbMiwgMTBdLCAzNDogWzIsIDExXSwgMzU6IFsyLCAxMl0sIDM3OiBbMiwgNDddLCAzODogWzIsIDQ4XSwgNDA6IFsyLCA1M10sIDQxOiBbMiwgNTRdLCA4MzogWzIsIDUxXSwgODQ6IFsyLCA1Ml0sIDg2OiBbMiwgMjZdLCA4NzogWzIsIDI3XSwgODg6IFsyLCAyOF0sIDkwOiBbMiwgMjldLCA5MTogWzIsIDMwXSwgOTI6IFsyLCAzMV0sIDkzOiBbMiwgMzJdLCA5NTogWzIsIDU1XSwgOTY6IFsyLCA1Nl0sIDk4OiBbMiwgNTddLCA5OTogWzIsIDU4XSB9LFxuICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XG4gICAgICBpZiAoaGFzaC5yZWNvdmVyYWJsZSkge1xuICAgICAgICB0aGlzLnRyYWNlKHN0cik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3Ioc3RyKTtcbiAgICAgICAgZXJyb3IuaGFzaCA9IGhhc2g7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsIHN0YWNrID0gWzBdLCB0c3RhY2sgPSBbXSwgdnN0YWNrID0gW251bGxdLCBsc3RhY2sgPSBbXSwgdGFibGUgPSB0aGlzLnRhYmxlLCB5eXRleHQgPSBcIlwiLCB5eWxpbmVubyA9IDAsIHl5bGVuZyA9IDAsIFRFUlJPUiA9IDIsIEVPRiA9IDE7XG4gICAgICB2YXIgYXJncyA9IGxzdGFjay5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICB2YXIgbGV4ZXIyID0gT2JqZWN0LmNyZWF0ZSh0aGlzLmxleGVyKTtcbiAgICAgIHZhciBzaGFyZWRTdGF0ZSA9IHsgeXk6IHt9IH07XG4gICAgICBmb3IgKHZhciBrIGluIHRoaXMueXkpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnl5LCBrKSkge1xuICAgICAgICAgIHNoYXJlZFN0YXRlLnl5W2tdID0gdGhpcy55eVtrXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV4ZXIyLnNldElucHV0KGlucHV0LCBzaGFyZWRTdGF0ZS55eSk7XG4gICAgICBzaGFyZWRTdGF0ZS55eS5sZXhlciA9IGxleGVyMjtcbiAgICAgIHNoYXJlZFN0YXRlLnl5LnBhcnNlciA9IHRoaXM7XG4gICAgICBpZiAodHlwZW9mIGxleGVyMi55eWxsb2MgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBsZXhlcjIueXlsbG9jID0ge307XG4gICAgICB9XG4gICAgICB2YXIgeXlsb2MgPSBsZXhlcjIueXlsbG9jO1xuICAgICAgbHN0YWNrLnB1c2goeXlsb2MpO1xuICAgICAgdmFyIHJhbmdlcyA9IGxleGVyMi5vcHRpb25zICYmIGxleGVyMi5vcHRpb25zLnJhbmdlcztcbiAgICAgIGlmICh0eXBlb2Ygc2hhcmVkU3RhdGUueXkucGFyc2VFcnJvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRoaXMucGFyc2VFcnJvciA9IHNoYXJlZFN0YXRlLnl5LnBhcnNlRXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhcnNlRXJyb3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykucGFyc2VFcnJvcjtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGxleCgpIHtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB0b2tlbiA9IHRzdGFjay5wb3AoKSB8fCBsZXhlcjIubGV4KCkgfHwgRU9GO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgaWYgKHRva2VuIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHRzdGFjayA9IHRva2VuO1xuICAgICAgICAgICAgdG9rZW4gPSB0c3RhY2sucG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRva2VuID0gc2VsZi5zeW1ib2xzX1t0b2tlbl0gfHwgdG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgfVxuICAgICAgdmFyIHN5bWJvbCwgc3RhdGUsIGFjdGlvbiwgciwgeXl2YWwgPSB7fSwgcCwgbGVuLCBuZXdTdGF0ZSwgZXhwZWN0ZWQ7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBzdGF0ZSA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0QWN0aW9uc1tzdGF0ZV0pIHtcbiAgICAgICAgICBhY3Rpb24gPSB0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc3ltYm9sID09PSBudWxsIHx8IHR5cGVvZiBzeW1ib2wgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgc3ltYm9sID0gbGV4KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFjdGlvbiA9IHRhYmxlW3N0YXRlXSAmJiB0YWJsZVtzdGF0ZV1bc3ltYm9sXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhYWN0aW9uLmxlbmd0aCB8fCAhYWN0aW9uWzBdKSB7XG4gICAgICAgICAgdmFyIGVyclN0ciA9IFwiXCI7XG4gICAgICAgICAgZXhwZWN0ZWQgPSBbXTtcbiAgICAgICAgICBmb3IgKHAgaW4gdGFibGVbc3RhdGVdKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ZXJtaW5hbHNfW3BdICYmIHAgPiBURVJST1IpIHtcbiAgICAgICAgICAgICAgZXhwZWN0ZWQucHVzaChcIidcIiArIHRoaXMudGVybWluYWxzX1twXSArIFwiJ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGxleGVyMi5zaG93UG9zaXRpb24pIHtcbiAgICAgICAgICAgIGVyclN0ciA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArICh5eWxpbmVubyArIDEpICsgXCI6XFxuXCIgKyBsZXhlcjIuc2hvd1Bvc2l0aW9uKCkgKyBcIlxcbkV4cGVjdGluZyBcIiArIGV4cGVjdGVkLmpvaW4oXCIsIFwiKSArIFwiLCBnb3QgJ1wiICsgKHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCkgKyBcIidcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjogVW5leHBlY3RlZCBcIiArIChzeW1ib2wgPT0gRU9GID8gXCJlbmQgb2YgaW5wdXRcIiA6IFwiJ1wiICsgKHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCkgKyBcIidcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucGFyc2VFcnJvcihlcnJTdHIsIHtcbiAgICAgICAgICAgIHRleHQ6IGxleGVyMi5tYXRjaCxcbiAgICAgICAgICAgIHRva2VuOiB0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wsXG4gICAgICAgICAgICBsaW5lOiBsZXhlcjIueXlsaW5lbm8sXG4gICAgICAgICAgICBsb2M6IHl5bG9jLFxuICAgICAgICAgICAgZXhwZWN0ZWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uWzBdIGluc3RhbmNlb2YgQXJyYXkgJiYgYWN0aW9uLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJzZSBFcnJvcjogbXVsdGlwbGUgYWN0aW9ucyBwb3NzaWJsZSBhdCBzdGF0ZTogXCIgKyBzdGF0ZSArIFwiLCB0b2tlbjogXCIgKyBzeW1ib2wpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uWzBdKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgc3RhY2sucHVzaChzeW1ib2wpO1xuICAgICAgICAgICAgdnN0YWNrLnB1c2gobGV4ZXIyLnl5dGV4dCk7XG4gICAgICAgICAgICBsc3RhY2sucHVzaChsZXhlcjIueXlsbG9jKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2goYWN0aW9uWzFdKTtcbiAgICAgICAgICAgIHN5bWJvbCA9IG51bGw7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHl5bGVuZyA9IGxleGVyMi55eWxlbmc7XG4gICAgICAgICAgICAgIHl5dGV4dCA9IGxleGVyMi55eXRleHQ7XG4gICAgICAgICAgICAgIHl5bGluZW5vID0gbGV4ZXIyLnl5bGluZW5vO1xuICAgICAgICAgICAgICB5eWxvYyA9IGxleGVyMi55eWxsb2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBsZW4gPSB0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzFdO1xuICAgICAgICAgICAgeXl2YWwuJCA9IHZzdGFja1t2c3RhY2subGVuZ3RoIC0gbGVuXTtcbiAgICAgICAgICAgIHl5dmFsLl8kID0ge1xuICAgICAgICAgICAgICBmaXJzdF9saW5lOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICAgIGxhc3RfbGluZTogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICAgIGxhc3RfY29sdW1uOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLmxhc3RfY29sdW1uXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHJhbmdlcykge1xuICAgICAgICAgICAgICB5eXZhbC5fJC5yYW5nZSA9IFtcbiAgICAgICAgICAgICAgICBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLnJhbmdlWzBdLFxuICAgICAgICAgICAgICAgIGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ucmFuZ2VbMV1cbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHIgPSB0aGlzLnBlcmZvcm1BY3Rpb24uYXBwbHkoeXl2YWwsIFtcbiAgICAgICAgICAgICAgeXl0ZXh0LFxuICAgICAgICAgICAgICB5eWxlbmcsXG4gICAgICAgICAgICAgIHl5bGluZW5vLFxuICAgICAgICAgICAgICBzaGFyZWRTdGF0ZS55eSxcbiAgICAgICAgICAgICAgYWN0aW9uWzFdLFxuICAgICAgICAgICAgICB2c3RhY2ssXG4gICAgICAgICAgICAgIGxzdGFja1xuICAgICAgICAgICAgXS5jb25jYXQoYXJncykpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICBzdGFjayA9IHN0YWNrLnNsaWNlKDAsIC0xICogbGVuICogMik7XG4gICAgICAgICAgICAgIHZzdGFjayA9IHZzdGFjay5zbGljZSgwLCAtMSAqIGxlbik7XG4gICAgICAgICAgICAgIGxzdGFjayA9IGxzdGFjay5zbGljZSgwLCAtMSAqIGxlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFjay5wdXNoKHRoaXMucHJvZHVjdGlvbnNfW2FjdGlvblsxXV1bMF0pO1xuICAgICAgICAgICAgdnN0YWNrLnB1c2goeXl2YWwuJCk7XG4gICAgICAgICAgICBsc3RhY2sucHVzaCh5eXZhbC5fJCk7XG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHRhYmxlW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDJdXVtzdGFja1tzdGFjay5sZW5ndGggLSAxXV07XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5ld1N0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIHZhciBsZXhlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZXhlcjIgPSB7XG4gICAgICBFT0Y6IDEsXG4gICAgICBwYXJzZUVycm9yOiBmdW5jdGlvbiBwYXJzZUVycm9yKHN0ciwgaGFzaCkge1xuICAgICAgICBpZiAodGhpcy55eS5wYXJzZXIpIHtcbiAgICAgICAgICB0aGlzLnl5LnBhcnNlci5wYXJzZUVycm9yKHN0ciwgaGFzaCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0cik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyByZXNldHMgdGhlIGxleGVyLCBzZXRzIG5ldyBpbnB1dFxuICAgICAgc2V0SW5wdXQ6IGZ1bmN0aW9uKGlucHV0LCB5eSkge1xuICAgICAgICB0aGlzLnl5ID0geXkgfHwgdGhpcy55eSB8fCB7fTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5fbW9yZSA9IHRoaXMuX2JhY2t0cmFjayA9IHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnl5bGluZW5vID0gdGhpcy55eWxlbmcgPSAwO1xuICAgICAgICB0aGlzLnl5dGV4dCA9IHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2ggPSBcIlwiO1xuICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrID0gW1wiSU5JVElBTFwiXTtcbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IDAsXG4gICAgICAgICAgbGFzdF9saW5lOiAxLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiAwXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbMCwgMF07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBjb25zdW1lcyBhbmQgcmV0dXJucyBvbmUgY2hhciBmcm9tIHRoZSBpbnB1dFxuICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLl9pbnB1dFswXTtcbiAgICAgICAgdGhpcy55eXRleHQgKz0gY2g7XG4gICAgICAgIHRoaXMueXlsZW5nKys7XG4gICAgICAgIHRoaXMub2Zmc2V0Kys7XG4gICAgICAgIHRoaXMubWF0Y2ggKz0gY2g7XG4gICAgICAgIHRoaXMubWF0Y2hlZCArPSBjaDtcbiAgICAgICAgdmFyIGxpbmVzID0gY2gubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO1xuICAgICAgICBpZiAobGluZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGluZW5vKys7XG4gICAgICAgICAgdGhpcy55eWxsb2MubGFzdF9saW5lKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MubGFzdF9jb2x1bW4rKztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlWzFdKys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZSgxKTtcbiAgICAgICAgcmV0dXJuIGNoO1xuICAgICAgfSxcbiAgICAgIC8vIHVuc2hpZnRzIG9uZSBjaGFyIChvciBhIHN0cmluZykgaW50byB0aGUgaW5wdXRcbiAgICAgIHVucHV0OiBmdW5jdGlvbihjaCkge1xuICAgICAgICB2YXIgbGVuID0gY2gubGVuZ3RoO1xuICAgICAgICB2YXIgbGluZXMgPSBjaC5zcGxpdCgvKD86XFxyXFxuP3xcXG4pL2cpO1xuICAgICAgICB0aGlzLl9pbnB1dCA9IGNoICsgdGhpcy5faW5wdXQ7XG4gICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy55eXRleHQuc3Vic3RyKDAsIHRoaXMueXl0ZXh0Lmxlbmd0aCAtIGxlbik7XG4gICAgICAgIHRoaXMub2Zmc2V0IC09IGxlbjtcbiAgICAgICAgdmFyIG9sZExpbmVzID0gdGhpcy5tYXRjaC5zcGxpdCgvKD86XFxyXFxuP3xcXG4pL2cpO1xuICAgICAgICB0aGlzLm1hdGNoID0gdGhpcy5tYXRjaC5zdWJzdHIoMCwgdGhpcy5tYXRjaC5sZW5ndGggLSAxKTtcbiAgICAgICAgdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gMSk7XG4gICAgICAgIGlmIChsaW5lcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy55eWxpbmVubyAtPSBsaW5lcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gdGhpcy55eWxsb2MucmFuZ2U7XG4gICAgICAgIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyAobGluZXMubGVuZ3RoID09PSBvbGRMaW5lcy5sZW5ndGggPyB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gOiAwKSArIG9sZExpbmVzW29sZExpbmVzLmxlbmd0aCAtIGxpbmVzLmxlbmd0aF0ubGVuZ3RoIC0gbGluZXNbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIC0gbGVuXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbclswXSwgclswXSArIHRoaXMueXlsZW5nIC0gbGVuXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnl5bGVuZyA9IHRoaXMueXl0ZXh0Lmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIGNhY2hlcyBtYXRjaGVkIHRleHQgYW5kIGFwcGVuZHMgaXQgb24gbmV4dCBhY3Rpb25cbiAgICAgIG1vcmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLl9tb3JlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIHNpZ25hbHMgdGhlIGxleGVyIHRoYXQgdGhpcyBydWxlIGZhaWxzIHRvIG1hdGNoIHRoZSBpbnB1dCwgc28gdGhlIG5leHQgbWF0Y2hpbmcgcnVsZSAocmVnZXgpIHNob3VsZCBiZSB0ZXN0ZWQgaW5zdGVhZC5cbiAgICAgIHJlamVjdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgdGhpcy5fYmFja3RyYWNrID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVycm9yKFwiTGV4aWNhbCBlcnJvciBvbiBsaW5lIFwiICsgKHRoaXMueXlsaW5lbm8gKyAxKSArIFwiLiBZb3UgY2FuIG9ubHkgaW52b2tlIHJlamVjdCgpIGluIHRoZSBsZXhlciB3aGVuIHRoZSBsZXhlciBpcyBvZiB0aGUgYmFja3RyYWNraW5nIHBlcnN1YXNpb24gKG9wdGlvbnMuYmFja3RyYWNrX2xleGVyID0gdHJ1ZSkuXFxuXCIgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7XG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICBsaW5lOiB0aGlzLnl5bGluZW5vXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gcmV0YWluIGZpcnN0IG4gY2hhcmFjdGVycyBvZiB0aGUgbWF0Y2hcbiAgICAgIGxlc3M6IGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgdGhpcy51bnB1dCh0aGlzLm1hdGNoLnNsaWNlKG4pKTtcbiAgICAgIH0sXG4gICAgICAvLyBkaXNwbGF5cyBhbHJlYWR5IG1hdGNoZWQgaW5wdXQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICBwYXN0SW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGFzdCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIHRoaXMubWF0Y2gubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIChwYXN0Lmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpICsgcGFzdC5zdWJzdHIoLTIwKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICB9LFxuICAgICAgLy8gZGlzcGxheXMgdXBjb21pbmcgaW5wdXQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICB1cGNvbWluZ0lucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG5leHQgPSB0aGlzLm1hdGNoO1xuICAgICAgICBpZiAobmV4dC5sZW5ndGggPCAyMCkge1xuICAgICAgICAgIG5leHQgKz0gdGhpcy5faW5wdXQuc3Vic3RyKDAsIDIwIC0gbmV4dC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobmV4dC5zdWJzdHIoMCwgMjApICsgKG5leHQubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikpLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sXG4gICAgICAvLyBkaXNwbGF5cyB0aGUgY2hhcmFjdGVyIHBvc2l0aW9uIHdoZXJlIHRoZSBsZXhpbmcgZXJyb3Igb2NjdXJyZWQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICBzaG93UG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcHJlID0gdGhpcy5wYXN0SW5wdXQoKTtcbiAgICAgICAgdmFyIGMgPSBuZXcgQXJyYXkocHJlLmxlbmd0aCArIDEpLmpvaW4oXCItXCIpO1xuICAgICAgICByZXR1cm4gcHJlICsgdGhpcy51cGNvbWluZ0lucHV0KCkgKyBcIlxcblwiICsgYyArIFwiXlwiO1xuICAgICAgfSxcbiAgICAgIC8vIHRlc3QgdGhlIGxleGVkIHRva2VuOiByZXR1cm4gRkFMU0Ugd2hlbiBub3QgYSBtYXRjaCwgb3RoZXJ3aXNlIHJldHVybiB0b2tlblxuICAgICAgdGVzdF9tYXRjaDogZnVuY3Rpb24obWF0Y2gsIGluZGV4ZWRfcnVsZSkge1xuICAgICAgICB2YXIgdG9rZW4sIGxpbmVzLCBiYWNrdXA7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgYmFja3VwID0ge1xuICAgICAgICAgICAgeXlsaW5lbm86IHRoaXMueXlsaW5lbm8sXG4gICAgICAgICAgICB5eWxsb2M6IHtcbiAgICAgICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MuZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICAgIGxhc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHl5dGV4dDogdGhpcy55eXRleHQsXG4gICAgICAgICAgICBtYXRjaDogdGhpcy5tYXRjaCxcbiAgICAgICAgICAgIG1hdGNoZXM6IHRoaXMubWF0Y2hlcyxcbiAgICAgICAgICAgIG1hdGNoZWQ6IHRoaXMubWF0Y2hlZCxcbiAgICAgICAgICAgIHl5bGVuZzogdGhpcy55eWxlbmcsXG4gICAgICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgICAgICAgX21vcmU6IHRoaXMuX21vcmUsXG4gICAgICAgICAgICBfaW5wdXQ6IHRoaXMuX2lucHV0LFxuICAgICAgICAgICAgeXk6IHRoaXMueXksXG4gICAgICAgICAgICBjb25kaXRpb25TdGFjazogdGhpcy5jb25kaXRpb25TdGFjay5zbGljZSgwKSxcbiAgICAgICAgICAgIGRvbmU6IHRoaXMuZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICAgIGJhY2t1cC55eWxsb2MucmFuZ2UgPSB0aGlzLnl5bGxvYy5yYW5nZS5zbGljZSgwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGluZXMgPSBtYXRjaFswXS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG4gICAgICAgIGlmIChsaW5lcykge1xuICAgICAgICAgIHRoaXMueXlsaW5lbm8gKz0gbGluZXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmxhc3RfbGluZSxcbiAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4sXG4gICAgICAgICAgbGFzdF9jb2x1bW46IGxpbmVzID8gbGluZXNbbGluZXMubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gbGluZXNbbGluZXMubGVuZ3RoIC0gMV0ubWF0Y2goL1xccj9cXG4/LylbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4gKyBtYXRjaFswXS5sZW5ndGhcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy55eXRleHQgKz0gbWF0Y2hbMF07XG4gICAgICAgIHRoaXMubWF0Y2ggKz0gbWF0Y2hbMF07XG4gICAgICAgIHRoaXMubWF0Y2hlcyA9IG1hdGNoO1xuICAgICAgICB0aGlzLnl5bGVuZyA9IHRoaXMueXl0ZXh0Lmxlbmd0aDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFt0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKz0gdGhpcy55eWxlbmddO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21vcmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fYmFja3RyYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UobWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5tYXRjaGVkICs9IG1hdGNoWzBdO1xuICAgICAgICB0b2tlbiA9IHRoaXMucGVyZm9ybUFjdGlvbi5jYWxsKHRoaXMsIHRoaXMueXksIHRoaXMsIGluZGV4ZWRfcnVsZSwgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgaWYgKHRoaXMuZG9uZSAmJiB0aGlzLl9pbnB1dCkge1xuICAgICAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9iYWNrdHJhY2spIHtcbiAgICAgICAgICBmb3IgKHZhciBrIGluIGJhY2t1cCkge1xuICAgICAgICAgICAgdGhpc1trXSA9IGJhY2t1cFtrXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICAvLyByZXR1cm4gbmV4dCBtYXRjaCBpbiBpbnB1dFxuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9pbnB1dCkge1xuICAgICAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRva2VuLCBtYXRjaCwgdGVtcE1hdGNoLCBpbmRleDtcbiAgICAgICAgaWYgKCF0aGlzLl9tb3JlKSB7XG4gICAgICAgICAgdGhpcy55eXRleHQgPSBcIlwiO1xuICAgICAgICAgIHRoaXMubWF0Y2ggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBydWxlcyA9IHRoaXMuX2N1cnJlbnRSdWxlcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGVtcE1hdGNoID0gdGhpcy5faW5wdXQubWF0Y2godGhpcy5ydWxlc1tydWxlc1tpXV0pO1xuICAgICAgICAgIGlmICh0ZW1wTWF0Y2ggJiYgKCFtYXRjaCB8fCB0ZW1wTWF0Y2hbMF0ubGVuZ3RoID4gbWF0Y2hbMF0ubGVuZ3RoKSkge1xuICAgICAgICAgICAgbWF0Y2ggPSB0ZW1wTWF0Y2g7XG4gICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcikge1xuICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMudGVzdF9tYXRjaCh0ZW1wTWF0Y2gsIHJ1bGVzW2ldKTtcbiAgICAgICAgICAgICAgaWYgKHRva2VuICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9iYWNrdHJhY2spIHtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vcHRpb25zLmZsZXgpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIHRva2VuID0gdGhpcy50ZXN0X21hdGNoKG1hdGNoLCBydWxlc1tpbmRleF0pO1xuICAgICAgICAgIGlmICh0b2tlbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9pbnB1dCA9PT0gXCJcIikge1xuICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVycm9yKFwiTGV4aWNhbCBlcnJvciBvbiBsaW5lIFwiICsgKHRoaXMueXlsaW5lbm8gKyAxKSArIFwiLiBVbnJlY29nbml6ZWQgdGV4dC5cXG5cIiArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgIGxpbmU6IHRoaXMueXlsaW5lbm9cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiBuZXh0IG1hdGNoIHRoYXQgaGFzIGEgdG9rZW5cbiAgICAgIGxleDogZnVuY3Rpb24gbGV4KCkge1xuICAgICAgICB2YXIgciA9IHRoaXMubmV4dCgpO1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmxleCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gYWN0aXZhdGVzIGEgbmV3IGxleGVyIGNvbmRpdGlvbiBzdGF0ZSAocHVzaGVzIHRoZSBuZXcgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIG9udG8gdGhlIGNvbmRpdGlvbiBzdGFjaylcbiAgICAgIGJlZ2luOiBmdW5jdGlvbiBiZWdpbihjb25kaXRpb24pIHtcbiAgICAgICAgdGhpcy5jb25kaXRpb25TdGFjay5wdXNoKGNvbmRpdGlvbik7XG4gICAgICB9LFxuICAgICAgLy8gcG9wIHRoZSBwcmV2aW91c2x5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGUgb2ZmIHRoZSBjb25kaXRpb24gc3RhY2tcbiAgICAgIHBvcFN0YXRlOiBmdW5jdGlvbiBwb3BTdGF0ZSgpIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgIGlmIChuID4gMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLnBvcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrWzBdO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcHJvZHVjZSB0aGUgbGV4ZXIgcnVsZSBzZXQgd2hpY2ggaXMgYWN0aXZlIGZvciB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGVcbiAgICAgIF9jdXJyZW50UnVsZXM6IGZ1bmN0aW9uIF9jdXJyZW50UnVsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAmJiB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zW3RoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXV0ucnVsZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uc1tcIklOSVRJQUxcIl0ucnVsZXM7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyByZXR1cm4gdGhlIGN1cnJlbnRseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlOyB3aGVuIGFuIGluZGV4IGFyZ3VtZW50IGlzIHByb3ZpZGVkIGl0IHByb2R1Y2VzIHRoZSBOLXRoIHByZXZpb3VzIGNvbmRpdGlvbiBzdGF0ZSwgaWYgYXZhaWxhYmxlXG4gICAgICB0b3BTdGF0ZTogZnVuY3Rpb24gdG9wU3RhdGUobikge1xuICAgICAgICBuID0gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxIC0gTWF0aC5hYnMobiB8fCAwKTtcbiAgICAgICAgaWYgKG4gPj0gMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrW25dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIklOSVRJQUxcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIGFsaWFzIGZvciBiZWdpbihjb25kaXRpb24pXG4gICAgICBwdXNoU3RhdGU6IGZ1bmN0aW9uIHB1c2hTdGF0ZShjb25kaXRpb24pIHtcbiAgICAgICAgdGhpcy5iZWdpbihjb25kaXRpb24pO1xuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiB0aGUgbnVtYmVyIG9mIHN0YXRlcyBjdXJyZW50bHkgb24gdGhlIHN0YWNrXG4gICAgICBzdGF0ZVN0YWNrU2l6ZTogZnVuY3Rpb24gc3RhdGVTdGFja1NpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aDtcbiAgICAgIH0sXG4gICAgICBvcHRpb25zOiB7IFwiY2FzZS1pbnNlbnNpdGl2ZVwiOiB0cnVlIH0sXG4gICAgICBwZXJmb3JtQWN0aW9uOiBmdW5jdGlvbiBhbm9ueW1vdXMoeXksIHl5XywgJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucywgWVlfU1RBUlQpIHtcbiAgICAgICAgc3dpdGNoICgkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIFwidGl0bGVcIjtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiYWNjX3RpdGxlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDk7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX3RpdGxlX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImFjY19kZXNjclwiKTtcbiAgICAgICAgICAgIHJldHVybiAxMTtcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfZGVzY3JfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiYWNjX2Rlc2NyX211bHRpbGluZVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHJldHVybiBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICByZXR1cm4gNTtcbiAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICByZXR1cm4gODtcbiAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgcmV0dXJuIDY7XG4gICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgIHJldHVybiAxOTtcbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgcmV0dXJuIDMwO1xuICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICByZXR1cm4gMjI7XG4gICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgIHJldHVybiAyMTtcbiAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgcmV0dXJuIDI0O1xuICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICByZXR1cm4gMjY7XG4gICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgIHJldHVybiAyODtcbiAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgcmV0dXJuIDMxO1xuICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICByZXR1cm4gMzI7XG4gICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICAgIHJldHVybiAzMztcbiAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgICAgcmV0dXJuIDM0O1xuICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICByZXR1cm4gMzU7XG4gICAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgICAgcmV0dXJuIDM3O1xuICAgICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgICByZXR1cm4gMzg7XG4gICAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICAgIHJldHVybiAzOTtcbiAgICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgICAgcmV0dXJuIDQwO1xuICAgICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgICByZXR1cm4gNDE7XG4gICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIHJldHVybiA0MjtcbiAgICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgICAgcmV0dXJuIDQzO1xuICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICByZXR1cm4gNDQ7XG4gICAgICAgICAgY2FzZSAzNTpcbiAgICAgICAgICAgIHJldHVybiA1NTtcbiAgICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgICAgcmV0dXJuIDU2O1xuICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICByZXR1cm4gNTc7XG4gICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgIHJldHVybiA1ODtcbiAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgcmV0dXJuIDU5O1xuICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICByZXR1cm4gNjA7XG4gICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgIHJldHVybiA2MTtcbiAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgcmV0dXJuIDQ3O1xuICAgICAgICAgIGNhc2UgNDM6XG4gICAgICAgICAgICByZXR1cm4gNDk7XG4gICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgIHJldHVybiA1MTtcbiAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgcmV0dXJuIDU0O1xuICAgICAgICAgIGNhc2UgNDY6XG4gICAgICAgICAgICByZXR1cm4gNTM7XG4gICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJzdHJpbmdcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ4OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OTpcbiAgICAgICAgICAgIHJldHVybiBcInFTdHJpbmdcIjtcbiAgICAgICAgICBjYXNlIDUwOlxuICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHl5Xy55eXRleHQudHJpbSgpO1xuICAgICAgICAgICAgcmV0dXJuIDYyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcnVsZXM6IFsvXig/OnRpdGxlXFxzW14jXFxuO10rKS9pLCAvXig/OmFjY1RpdGxlXFxzKjpcXHMqKS9pLCAvXig/Oig/IVxcbnx8KSpbXlxcbl0qKS9pLCAvXig/OmFjY0Rlc2NyXFxzKjpcXHMqKS9pLCAvXig/Oig/IVxcbnx8KSpbXlxcbl0qKS9pLCAvXig/OmFjY0Rlc2NyXFxzKlxce1xccyopL2ksIC9eKD86W1xcfV0pL2ksIC9eKD86W15cXH1dKikvaSwgL14oPzooXFxyP1xcbikrKS9pLCAvXig/OlxccyspL2ksIC9eKD86I1teXFxuXSopL2ksIC9eKD86JVteXFxuXSopL2ksIC9eKD86JCkvaSwgL14oPzpyZXF1aXJlbWVudERpYWdyYW1cXGIpL2ksIC9eKD86XFx7KS9pLCAvXig/OlxcfSkvaSwgL14oPzo6KS9pLCAvXig/OmlkXFxiKS9pLCAvXig/OnRleHRcXGIpL2ksIC9eKD86cmlza1xcYikvaSwgL14oPzp2ZXJpZnlNZXRob2RcXGIpL2ksIC9eKD86cmVxdWlyZW1lbnRcXGIpL2ksIC9eKD86ZnVuY3Rpb25hbFJlcXVpcmVtZW50XFxiKS9pLCAvXig/OmludGVyZmFjZVJlcXVpcmVtZW50XFxiKS9pLCAvXig/OnBlcmZvcm1hbmNlUmVxdWlyZW1lbnRcXGIpL2ksIC9eKD86cGh5c2ljYWxSZXF1aXJlbWVudFxcYikvaSwgL14oPzpkZXNpZ25Db25zdHJhaW50XFxiKS9pLCAvXig/Omxvd1xcYikvaSwgL14oPzptZWRpdW1cXGIpL2ksIC9eKD86aGlnaFxcYikvaSwgL14oPzphbmFseXNpc1xcYikvaSwgL14oPzpkZW1vbnN0cmF0aW9uXFxiKS9pLCAvXig/Omluc3BlY3Rpb25cXGIpL2ksIC9eKD86dGVzdFxcYikvaSwgL14oPzplbGVtZW50XFxiKS9pLCAvXig/OmNvbnRhaW5zXFxiKS9pLCAvXig/OmNvcGllc1xcYikvaSwgL14oPzpkZXJpdmVzXFxiKS9pLCAvXig/OnNhdGlzZmllc1xcYikvaSwgL14oPzp2ZXJpZmllc1xcYikvaSwgL14oPzpyZWZpbmVzXFxiKS9pLCAvXig/OnRyYWNlc1xcYikvaSwgL14oPzp0eXBlXFxiKS9pLCAvXig/OmRvY3JlZlxcYikvaSwgL14oPzo8LSkvaSwgL14oPzotPikvaSwgL14oPzotKS9pLCAvXig/OltcIl0pL2ksIC9eKD86W1wiXSkvaSwgL14oPzpbXlwiXSopL2ksIC9eKD86W1xcd11bXlxcclxcblxce1xcPFxcPlxcLVxcPV0qKS9pXSxcbiAgICAgIGNvbmRpdGlvbnM6IHsgXCJhY2NfZGVzY3JfbXVsdGlsaW5lXCI6IHsgXCJydWxlc1wiOiBbNiwgN10sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiYWNjX2Rlc2NyXCI6IHsgXCJydWxlc1wiOiBbNF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiYWNjX3RpdGxlXCI6IHsgXCJydWxlc1wiOiBbMl0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwidW5xU3RyaW5nXCI6IHsgXCJydWxlc1wiOiBbXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJ0b2tlblwiOiB7IFwicnVsZXNcIjogW10sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwic3RyaW5nXCI6IHsgXCJydWxlc1wiOiBbNDgsIDQ5XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJJTklUSUFMXCI6IHsgXCJydWxlc1wiOiBbMCwgMSwgMywgNSwgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwLCAyMSwgMjIsIDIzLCAyNCwgMjUsIDI2LCAyNywgMjgsIDI5LCAzMCwgMzEsIDMyLCAzMywgMzQsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDQxLCA0MiwgNDMsIDQ0LCA0NSwgNDYsIDQ3LCA1MF0sIFwiaW5jbHVzaXZlXCI6IHRydWUgfSB9XG4gICAgfTtcbiAgICByZXR1cm4gbGV4ZXIyO1xuICB9KCk7XG4gIHBhcnNlcjIubGV4ZXIgPSBsZXhlcjtcbiAgZnVuY3Rpb24gUGFyc2VyKCkge1xuICAgIHRoaXMueXkgPSB7fTtcbiAgfVxuICBQYXJzZXIucHJvdG90eXBlID0gcGFyc2VyMjtcbiAgcGFyc2VyMi5QYXJzZXIgPSBQYXJzZXI7XG4gIHJldHVybiBuZXcgUGFyc2VyKCk7XG59KCk7XG5wYXJzZXIucGFyc2VyID0gcGFyc2VyO1xuY29uc3QgcGFyc2VyJDEgPSBwYXJzZXI7XG5sZXQgcmVsYXRpb25zID0gW107XG5sZXQgbGF0ZXN0UmVxdWlyZW1lbnQgPSB7fTtcbmxldCByZXF1aXJlbWVudHMgPSB7fTtcbmxldCBsYXRlc3RFbGVtZW50ID0ge307XG5sZXQgZWxlbWVudHMgPSB7fTtcbmNvbnN0IFJlcXVpcmVtZW50VHlwZSA9IHtcbiAgUkVRVUlSRU1FTlQ6IFwiUmVxdWlyZW1lbnRcIixcbiAgRlVOQ1RJT05BTF9SRVFVSVJFTUVOVDogXCJGdW5jdGlvbmFsIFJlcXVpcmVtZW50XCIsXG4gIElOVEVSRkFDRV9SRVFVSVJFTUVOVDogXCJJbnRlcmZhY2UgUmVxdWlyZW1lbnRcIixcbiAgUEVSRk9STUFOQ0VfUkVRVUlSRU1FTlQ6IFwiUGVyZm9ybWFuY2UgUmVxdWlyZW1lbnRcIixcbiAgUEhZU0lDQUxfUkVRVUlSRU1FTlQ6IFwiUGh5c2ljYWwgUmVxdWlyZW1lbnRcIixcbiAgREVTSUdOX0NPTlNUUkFJTlQ6IFwiRGVzaWduIENvbnN0cmFpbnRcIlxufTtcbmNvbnN0IFJpc2tMZXZlbCA9IHtcbiAgTE9XX1JJU0s6IFwiTG93XCIsXG4gIE1FRF9SSVNLOiBcIk1lZGl1bVwiLFxuICBISUdIX1JJU0s6IFwiSGlnaFwiXG59O1xuY29uc3QgVmVyaWZ5VHlwZSA9IHtcbiAgVkVSSUZZX0FOQUxZU0lTOiBcIkFuYWx5c2lzXCIsXG4gIFZFUklGWV9ERU1PTlNUUkFUSU9OOiBcIkRlbW9uc3RyYXRpb25cIixcbiAgVkVSSUZZX0lOU1BFQ1RJT046IFwiSW5zcGVjdGlvblwiLFxuICBWRVJJRllfVEVTVDogXCJUZXN0XCJcbn07XG5jb25zdCBSZWxhdGlvbnNoaXBzID0ge1xuICBDT05UQUlOUzogXCJjb250YWluc1wiLFxuICBDT1BJRVM6IFwiY29waWVzXCIsXG4gIERFUklWRVM6IFwiZGVyaXZlc1wiLFxuICBTQVRJU0ZJRVM6IFwic2F0aXNmaWVzXCIsXG4gIFZFUklGSUVTOiBcInZlcmlmaWVzXCIsXG4gIFJFRklORVM6IFwicmVmaW5lc1wiLFxuICBUUkFDRVM6IFwidHJhY2VzXCJcbn07XG5jb25zdCBhZGRSZXF1aXJlbWVudCA9IChuYW1lLCB0eXBlKSA9PiB7XG4gIGlmIChyZXF1aXJlbWVudHNbbmFtZV0gPT09IHZvaWQgMCkge1xuICAgIHJlcXVpcmVtZW50c1tuYW1lXSA9IHtcbiAgICAgIG5hbWUsXG4gICAgICB0eXBlLFxuICAgICAgaWQ6IGxhdGVzdFJlcXVpcmVtZW50LmlkLFxuICAgICAgdGV4dDogbGF0ZXN0UmVxdWlyZW1lbnQudGV4dCxcbiAgICAgIHJpc2s6IGxhdGVzdFJlcXVpcmVtZW50LnJpc2ssXG4gICAgICB2ZXJpZnlNZXRob2Q6IGxhdGVzdFJlcXVpcmVtZW50LnZlcmlmeU1ldGhvZFxuICAgIH07XG4gIH1cbiAgbGF0ZXN0UmVxdWlyZW1lbnQgPSB7fTtcbiAgcmV0dXJuIHJlcXVpcmVtZW50c1tuYW1lXTtcbn07XG5jb25zdCBnZXRSZXF1aXJlbWVudHMgPSAoKSA9PiByZXF1aXJlbWVudHM7XG5jb25zdCBzZXROZXdSZXFJZCA9IChpZCkgPT4ge1xuICBpZiAobGF0ZXN0UmVxdWlyZW1lbnQgIT09IHZvaWQgMCkge1xuICAgIGxhdGVzdFJlcXVpcmVtZW50LmlkID0gaWQ7XG4gIH1cbn07XG5jb25zdCBzZXROZXdSZXFUZXh0ID0gKHRleHQpID0+IHtcbiAgaWYgKGxhdGVzdFJlcXVpcmVtZW50ICE9PSB2b2lkIDApIHtcbiAgICBsYXRlc3RSZXF1aXJlbWVudC50ZXh0ID0gdGV4dDtcbiAgfVxufTtcbmNvbnN0IHNldE5ld1JlcVJpc2sgPSAocmlzaykgPT4ge1xuICBpZiAobGF0ZXN0UmVxdWlyZW1lbnQgIT09IHZvaWQgMCkge1xuICAgIGxhdGVzdFJlcXVpcmVtZW50LnJpc2sgPSByaXNrO1xuICB9XG59O1xuY29uc3Qgc2V0TmV3UmVxVmVyaWZ5TWV0aG9kID0gKHZlcmlmeU1ldGhvZCkgPT4ge1xuICBpZiAobGF0ZXN0UmVxdWlyZW1lbnQgIT09IHZvaWQgMCkge1xuICAgIGxhdGVzdFJlcXVpcmVtZW50LnZlcmlmeU1ldGhvZCA9IHZlcmlmeU1ldGhvZDtcbiAgfVxufTtcbmNvbnN0IGFkZEVsZW1lbnQgPSAobmFtZSkgPT4ge1xuICBpZiAoZWxlbWVudHNbbmFtZV0gPT09IHZvaWQgMCkge1xuICAgIGVsZW1lbnRzW25hbWVdID0ge1xuICAgICAgbmFtZSxcbiAgICAgIHR5cGU6IGxhdGVzdEVsZW1lbnQudHlwZSxcbiAgICAgIGRvY1JlZjogbGF0ZXN0RWxlbWVudC5kb2NSZWZcbiAgICB9O1xuICAgIGxvZy5pbmZvKFwiQWRkZWQgbmV3IHJlcXVpcmVtZW50OiBcIiwgbmFtZSk7XG4gIH1cbiAgbGF0ZXN0RWxlbWVudCA9IHt9O1xuICByZXR1cm4gZWxlbWVudHNbbmFtZV07XG59O1xuY29uc3QgZ2V0RWxlbWVudHMgPSAoKSA9PiBlbGVtZW50cztcbmNvbnN0IHNldE5ld0VsZW1lbnRUeXBlID0gKHR5cGUpID0+IHtcbiAgaWYgKGxhdGVzdEVsZW1lbnQgIT09IHZvaWQgMCkge1xuICAgIGxhdGVzdEVsZW1lbnQudHlwZSA9IHR5cGU7XG4gIH1cbn07XG5jb25zdCBzZXROZXdFbGVtZW50RG9jUmVmID0gKGRvY1JlZikgPT4ge1xuICBpZiAobGF0ZXN0RWxlbWVudCAhPT0gdm9pZCAwKSB7XG4gICAgbGF0ZXN0RWxlbWVudC5kb2NSZWYgPSBkb2NSZWY7XG4gIH1cbn07XG5jb25zdCBhZGRSZWxhdGlvbnNoaXAgPSAodHlwZSwgc3JjLCBkc3QpID0+IHtcbiAgcmVsYXRpb25zLnB1c2goe1xuICAgIHR5cGUsXG4gICAgc3JjLFxuICAgIGRzdFxuICB9KTtcbn07XG5jb25zdCBnZXRSZWxhdGlvbnNoaXBzID0gKCkgPT4gcmVsYXRpb25zO1xuY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gIHJlbGF0aW9ucyA9IFtdO1xuICBsYXRlc3RSZXF1aXJlbWVudCA9IHt9O1xuICByZXF1aXJlbWVudHMgPSB7fTtcbiAgbGF0ZXN0RWxlbWVudCA9IHt9O1xuICBlbGVtZW50cyA9IHt9O1xuICBjbGVhciQxKCk7XG59O1xuY29uc3QgZGIgPSB7XG4gIFJlcXVpcmVtZW50VHlwZSxcbiAgUmlza0xldmVsLFxuICBWZXJpZnlUeXBlLFxuICBSZWxhdGlvbnNoaXBzLFxuICBnZXRDb25maWc6ICgpID0+IGdldENvbmZpZygpLnJlcSxcbiAgYWRkUmVxdWlyZW1lbnQsXG4gIGdldFJlcXVpcmVtZW50cyxcbiAgc2V0TmV3UmVxSWQsXG4gIHNldE5ld1JlcVRleHQsXG4gIHNldE5ld1JlcVJpc2ssXG4gIHNldE5ld1JlcVZlcmlmeU1ldGhvZCxcbiAgc2V0QWNjVGl0bGUsXG4gIGdldEFjY1RpdGxlLFxuICBzZXRBY2NEZXNjcmlwdGlvbixcbiAgZ2V0QWNjRGVzY3JpcHRpb24sXG4gIGFkZEVsZW1lbnQsXG4gIGdldEVsZW1lbnRzLFxuICBzZXROZXdFbGVtZW50VHlwZSxcbiAgc2V0TmV3RWxlbWVudERvY1JlZixcbiAgYWRkUmVsYXRpb25zaGlwLFxuICBnZXRSZWxhdGlvbnNoaXBzLFxuICBjbGVhclxufTtcbmNvbnN0IGdldFN0eWxlcyA9IChvcHRpb25zKSA9PiBgXG5cbiAgbWFya2VyIHtcbiAgICBmaWxsOiAke29wdGlvbnMucmVsYXRpb25Db2xvcn07XG4gICAgc3Ryb2tlOiAke29wdGlvbnMucmVsYXRpb25Db2xvcn07XG4gIH1cblxuICBtYXJrZXIuY3Jvc3Mge1xuICAgIHN0cm9rZTogJHtvcHRpb25zLmxpbmVDb2xvcn07XG4gIH1cblxuICBzdmcge1xuICAgIGZvbnQtZmFtaWx5OiAke29wdGlvbnMuZm9udEZhbWlseX07XG4gICAgZm9udC1zaXplOiAke29wdGlvbnMuZm9udFNpemV9O1xuICB9XG5cbiAgLnJlcUJveCB7XG4gICAgZmlsbDogJHtvcHRpb25zLnJlcXVpcmVtZW50QmFja2dyb3VuZH07XG4gICAgZmlsbC1vcGFjaXR5OiAxLjA7XG4gICAgc3Ryb2tlOiAke29wdGlvbnMucmVxdWlyZW1lbnRCb3JkZXJDb2xvcn07XG4gICAgc3Ryb2tlLXdpZHRoOiAke29wdGlvbnMucmVxdWlyZW1lbnRCb3JkZXJTaXplfTtcbiAgfVxuICBcbiAgLnJlcVRpdGxlLCAucmVxTGFiZWx7XG4gICAgZmlsbDogICR7b3B0aW9ucy5yZXF1aXJlbWVudFRleHRDb2xvcn07XG4gIH1cbiAgLnJlcUxhYmVsQm94IHtcbiAgICBmaWxsOiAke29wdGlvbnMucmVsYXRpb25MYWJlbEJhY2tncm91bmR9O1xuICAgIGZpbGwtb3BhY2l0eTogMS4wO1xuICB9XG5cbiAgLnJlcS10aXRsZS1saW5lIHtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy5yZXF1aXJlbWVudEJvcmRlckNvbG9yfTtcbiAgICBzdHJva2Utd2lkdGg6ICR7b3B0aW9ucy5yZXF1aXJlbWVudEJvcmRlclNpemV9O1xuICB9XG4gIC5yZWxhdGlvbnNoaXBMaW5lIHtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy5yZWxhdGlvbkNvbG9yfTtcbiAgICBzdHJva2Utd2lkdGg6IDE7XG4gIH1cbiAgLnJlbGF0aW9uc2hpcExhYmVsIHtcbiAgICBmaWxsOiAke29wdGlvbnMucmVsYXRpb25MYWJlbENvbG9yfTtcbiAgfVxuXG5gO1xuY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzO1xuY29uc3QgUmVxTWFya2VycyA9IHtcbiAgQ09OVEFJTlM6IFwiY29udGFpbnNcIixcbiAgQVJST1c6IFwiYXJyb3dcIlxufTtcbmNvbnN0IGluc2VydExpbmVFbmRpbmdzID0gKHBhcmVudE5vZGUsIGNvbmYyKSA9PiB7XG4gIGxldCBjb250YWluc05vZGUgPSBwYXJlbnROb2RlLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBSZXFNYXJrZXJzLkNPTlRBSU5TICsgXCJfbGluZV9lbmRpbmdcIikuYXR0cihcInJlZlhcIiwgMCkuYXR0cihcInJlZllcIiwgY29uZjIubGluZV9oZWlnaHQgLyAyKS5hdHRyKFwibWFya2VyV2lkdGhcIiwgY29uZjIubGluZV9oZWlnaHQpLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgY29uZjIubGluZV9oZWlnaHQpLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpLmFwcGVuZChcImdcIik7XG4gIGNvbnRhaW5zTm9kZS5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIGNvbmYyLmxpbmVfaGVpZ2h0IC8gMikuYXR0cihcImN5XCIsIGNvbmYyLmxpbmVfaGVpZ2h0IC8gMikuYXR0cihcInJcIiwgY29uZjIubGluZV9oZWlnaHQgLyAyKS5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gIGNvbnRhaW5zTm9kZS5hcHBlbmQoXCJsaW5lXCIpLmF0dHIoXCJ4MVwiLCAwKS5hdHRyKFwieDJcIiwgY29uZjIubGluZV9oZWlnaHQpLmF0dHIoXCJ5MVwiLCBjb25mMi5saW5lX2hlaWdodCAvIDIpLmF0dHIoXCJ5MlwiLCBjb25mMi5saW5lX2hlaWdodCAvIDIpLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMSk7XG4gIGNvbnRhaW5zTm9kZS5hcHBlbmQoXCJsaW5lXCIpLmF0dHIoXCJ5MVwiLCAwKS5hdHRyKFwieTJcIiwgY29uZjIubGluZV9oZWlnaHQpLmF0dHIoXCJ4MVwiLCBjb25mMi5saW5lX2hlaWdodCAvIDIpLmF0dHIoXCJ4MlwiLCBjb25mMi5saW5lX2hlaWdodCAvIDIpLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMSk7XG4gIHBhcmVudE5vZGUuYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIFJlcU1hcmtlcnMuQVJST1cgKyBcIl9saW5lX2VuZGluZ1wiKS5hdHRyKFwicmVmWFwiLCBjb25mMi5saW5lX2hlaWdodCkuYXR0cihcInJlZllcIiwgMC41ICogY29uZjIubGluZV9oZWlnaHQpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCBjb25mMi5saW5lX2hlaWdodCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCBjb25mMi5saW5lX2hlaWdodCkuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFxuICAgIFwiZFwiLFxuICAgIGBNMCwwXG4gICAgICBMJHtjb25mMi5saW5lX2hlaWdodH0sJHtjb25mMi5saW5lX2hlaWdodCAvIDJ9XG4gICAgICBNJHtjb25mMi5saW5lX2hlaWdodH0sJHtjb25mMi5saW5lX2hlaWdodCAvIDJ9XG4gICAgICBMMCwke2NvbmYyLmxpbmVfaGVpZ2h0fWBcbiAgKS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEpO1xufTtcbmNvbnN0IG1hcmtlcnMgPSB7XG4gIFJlcU1hcmtlcnMsXG4gIGluc2VydExpbmVFbmRpbmdzXG59O1xubGV0IGNvbmYgPSB7fTtcbmxldCByZWxDbnQgPSAwO1xuY29uc3QgbmV3UmVjdE5vZGUgPSAocGFyZW50Tm9kZSwgaWQpID0+IHtcbiAgcmV0dXJuIHBhcmVudE5vZGUuaW5zZXJ0KFwicmVjdFwiLCBcIiNcIiArIGlkKS5hdHRyKFwiY2xhc3NcIiwgXCJyZXEgcmVxQm94XCIpLmF0dHIoXCJ4XCIsIDApLmF0dHIoXCJ5XCIsIDApLmF0dHIoXCJ3aWR0aFwiLCBjb25mLnJlY3RfbWluX3dpZHRoICsgXCJweFwiKS5hdHRyKFwiaGVpZ2h0XCIsIGNvbmYucmVjdF9taW5faGVpZ2h0ICsgXCJweFwiKTtcbn07XG5jb25zdCBuZXdUaXRsZU5vZGUgPSAocGFyZW50Tm9kZSwgaWQsIHR4dHMpID0+IHtcbiAgbGV0IHggPSBjb25mLnJlY3RfbWluX3dpZHRoIC8gMjtcbiAgbGV0IHRpdGxlID0gcGFyZW50Tm9kZS5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJjbGFzc1wiLCBcInJlcSByZXFMYWJlbCByZXFUaXRsZVwiKS5hdHRyKFwiaWRcIiwgaWQpLmF0dHIoXCJ4XCIsIHgpLmF0dHIoXCJ5XCIsIGNvbmYucmVjdF9wYWRkaW5nKS5hdHRyKFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJoYW5naW5nXCIpO1xuICBsZXQgaSA9IDA7XG4gIHR4dHMuZm9yRWFjaCgodGV4dFN0cikgPT4ge1xuICAgIGlmIChpID09IDApIHtcbiAgICAgIHRpdGxlLmFwcGVuZChcInRzcGFuXCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKS5hdHRyKFwieFwiLCBjb25mLnJlY3RfbWluX3dpZHRoIC8gMikuYXR0cihcImR5XCIsIDApLnRleHQodGV4dFN0cik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlLmFwcGVuZChcInRzcGFuXCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKS5hdHRyKFwieFwiLCBjb25mLnJlY3RfbWluX3dpZHRoIC8gMikuYXR0cihcImR5XCIsIGNvbmYubGluZV9oZWlnaHQgKiAwLjc1KS50ZXh0KHRleHRTdHIpO1xuICAgIH1cbiAgICBpKys7XG4gIH0pO1xuICBsZXQgeVBhZGRpbmcgPSAxLjUgKiBjb25mLnJlY3RfcGFkZGluZztcbiAgbGV0IGxpbmVQYWRkaW5nID0gaSAqIGNvbmYubGluZV9oZWlnaHQgKiAwLjc1O1xuICBsZXQgdG90YWxZID0geVBhZGRpbmcgKyBsaW5lUGFkZGluZztcbiAgcGFyZW50Tm9kZS5hcHBlbmQoXCJsaW5lXCIpLmF0dHIoXCJjbGFzc1wiLCBcInJlcS10aXRsZS1saW5lXCIpLmF0dHIoXCJ4MVwiLCBcIjBcIikuYXR0cihcIngyXCIsIGNvbmYucmVjdF9taW5fd2lkdGgpLmF0dHIoXCJ5MVwiLCB0b3RhbFkpLmF0dHIoXCJ5MlwiLCB0b3RhbFkpO1xuICByZXR1cm4ge1xuICAgIHRpdGxlTm9kZTogdGl0bGUsXG4gICAgeTogdG90YWxZXG4gIH07XG59O1xuY29uc3QgbmV3Qm9keU5vZGUgPSAocGFyZW50Tm9kZSwgaWQsIHR4dHMsIHlTdGFydCkgPT4ge1xuICBsZXQgYm9keSA9IHBhcmVudE5vZGUuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJyZXEgcmVxTGFiZWxcIikuYXR0cihcImlkXCIsIGlkKS5hdHRyKFwieFwiLCBjb25mLnJlY3RfcGFkZGluZykuYXR0cihcInlcIiwgeVN0YXJ0KS5hdHRyKFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJoYW5naW5nXCIpO1xuICBsZXQgY3VycmVudFJvdyA9IDA7XG4gIGNvbnN0IGNoYXJMaW1pdCA9IDMwO1xuICBsZXQgd3JhcHBlZFR4dHMgPSBbXTtcbiAgdHh0cy5mb3JFYWNoKCh0ZXh0U3RyKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRUZXh0TGVuID0gdGV4dFN0ci5sZW5ndGg7XG4gICAgd2hpbGUgKGN1cnJlbnRUZXh0TGVuID4gY2hhckxpbWl0ICYmIGN1cnJlbnRSb3cgPCAzKSB7XG4gICAgICBsZXQgZmlyc3RQYXJ0ID0gdGV4dFN0ci5zdWJzdHJpbmcoMCwgY2hhckxpbWl0KTtcbiAgICAgIHRleHRTdHIgPSB0ZXh0U3RyLnN1YnN0cmluZyhjaGFyTGltaXQsIHRleHRTdHIubGVuZ3RoKTtcbiAgICAgIGN1cnJlbnRUZXh0TGVuID0gdGV4dFN0ci5sZW5ndGg7XG4gICAgICB3cmFwcGVkVHh0c1t3cmFwcGVkVHh0cy5sZW5ndGhdID0gZmlyc3RQYXJ0O1xuICAgICAgY3VycmVudFJvdysrO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFJvdyA9PSAzKSB7XG4gICAgICBsZXQgbGFzdFN0ciA9IHdyYXBwZWRUeHRzW3dyYXBwZWRUeHRzLmxlbmd0aCAtIDFdO1xuICAgICAgd3JhcHBlZFR4dHNbd3JhcHBlZFR4dHMubGVuZ3RoIC0gMV0gPSBsYXN0U3RyLnN1YnN0cmluZygwLCBsYXN0U3RyLmxlbmd0aCAtIDQpICsgXCIuLi5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgd3JhcHBlZFR4dHNbd3JhcHBlZFR4dHMubGVuZ3RoXSA9IHRleHRTdHI7XG4gICAgfVxuICAgIGN1cnJlbnRSb3cgPSAwO1xuICB9KTtcbiAgd3JhcHBlZFR4dHMuZm9yRWFjaCgodGV4dFN0cikgPT4ge1xuICAgIGJvZHkuYXBwZW5kKFwidHNwYW5cIikuYXR0cihcInhcIiwgY29uZi5yZWN0X3BhZGRpbmcpLmF0dHIoXCJkeVwiLCBjb25mLmxpbmVfaGVpZ2h0KS50ZXh0KHRleHRTdHIpO1xuICB9KTtcbiAgcmV0dXJuIGJvZHk7XG59O1xuY29uc3QgYWRkRWRnZUxhYmVsID0gKHBhcmVudE5vZGUsIHN2Z1BhdGgsIGNvbmYyLCB0eHQpID0+IHtcbiAgY29uc3QgbGVuID0gc3ZnUGF0aC5ub2RlKCkuZ2V0VG90YWxMZW5ndGgoKTtcbiAgY29uc3QgbGFiZWxQb2ludCA9IHN2Z1BhdGgubm9kZSgpLmdldFBvaW50QXRMZW5ndGgobGVuICogMC41KTtcbiAgY29uc3QgbGFiZWxJZCA9IFwicmVsXCIgKyByZWxDbnQ7XG4gIHJlbENudCsrO1xuICBjb25zdCBsYWJlbE5vZGUgPSBwYXJlbnROb2RlLmFwcGVuZChcInRleHRcIikuYXR0cihcImNsYXNzXCIsIFwicmVxIHJlbGF0aW9uc2hpcExhYmVsXCIpLmF0dHIoXCJpZFwiLCBsYWJlbElkKS5hdHRyKFwieFwiLCBsYWJlbFBvaW50LngpLmF0dHIoXCJ5XCIsIGxhYmVsUG9pbnQueSkuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpLmF0dHIoXCJkb21pbmFudC1iYXNlbGluZVwiLCBcIm1pZGRsZVwiKS50ZXh0KHR4dCk7XG4gIGNvbnN0IGxhYmVsQkJveCA9IGxhYmVsTm9kZS5ub2RlKCkuZ2V0QkJveCgpO1xuICBwYXJlbnROb2RlLmluc2VydChcInJlY3RcIiwgXCIjXCIgKyBsYWJlbElkKS5hdHRyKFwiY2xhc3NcIiwgXCJyZXEgcmVxTGFiZWxCb3hcIikuYXR0cihcInhcIiwgbGFiZWxQb2ludC54IC0gbGFiZWxCQm94LndpZHRoIC8gMikuYXR0cihcInlcIiwgbGFiZWxQb2ludC55IC0gbGFiZWxCQm94LmhlaWdodCAvIDIpLmF0dHIoXCJ3aWR0aFwiLCBsYWJlbEJCb3gud2lkdGgpLmF0dHIoXCJoZWlnaHRcIiwgbGFiZWxCQm94LmhlaWdodCkuYXR0cihcImZpbGxcIiwgXCJ3aGl0ZVwiKS5hdHRyKFwiZmlsbC1vcGFjaXR5XCIsIFwiODUlXCIpO1xufTtcbmNvbnN0IGRyYXdSZWxhdGlvbnNoaXBGcm9tTGF5b3V0ID0gZnVuY3Rpb24oc3ZnLCByZWwsIGcsIGluc2VydCwgZGlhZ09iaikge1xuICBjb25zdCBlZGdlID0gZy5lZGdlKGVsZW1lbnRTdHJpbmcocmVsLnNyYyksIGVsZW1lbnRTdHJpbmcocmVsLmRzdCkpO1xuICBjb25zdCBsaW5lRnVuY3Rpb24gPSBsaW5lKCkueChmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGQueDtcbiAgfSkueShmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGQueTtcbiAgfSk7XG4gIGNvbnN0IHN2Z1BhdGggPSBzdmcuaW5zZXJ0KFwicGF0aFwiLCBcIiNcIiArIGluc2VydCkuYXR0cihcImNsYXNzXCIsIFwiZXIgcmVsYXRpb25zaGlwTGluZVwiKS5hdHRyKFwiZFwiLCBsaW5lRnVuY3Rpb24oZWRnZS5wb2ludHMpKS5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gIGlmIChyZWwudHlwZSA9PSBkaWFnT2JqLmRiLlJlbGF0aW9uc2hpcHMuQ09OVEFJTlMpIHtcbiAgICBzdmdQYXRoLmF0dHIoXG4gICAgICBcIm1hcmtlci1zdGFydFwiLFxuICAgICAgXCJ1cmwoXCIgKyBjb21tb24uZ2V0VXJsKGNvbmYuYXJyb3dNYXJrZXJBYnNvbHV0ZSkgKyBcIiNcIiArIHJlbC50eXBlICsgXCJfbGluZV9lbmRpbmcpXCJcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHN2Z1BhdGguYXR0cihcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCIxMCw3XCIpO1xuICAgIHN2Z1BhdGguYXR0cihcbiAgICAgIFwibWFya2VyLWVuZFwiLFxuICAgICAgXCJ1cmwoXCIgKyBjb21tb24uZ2V0VXJsKGNvbmYuYXJyb3dNYXJrZXJBYnNvbHV0ZSkgKyBcIiNcIiArIG1hcmtlcnMuUmVxTWFya2Vycy5BUlJPVyArIFwiX2xpbmVfZW5kaW5nKVwiXG4gICAgKTtcbiAgfVxuICBhZGRFZGdlTGFiZWwoc3ZnLCBzdmdQYXRoLCBjb25mLCBgPDwke3JlbC50eXBlfT4+YCk7XG4gIHJldHVybjtcbn07XG5jb25zdCBkcmF3UmVxcyA9IChyZXFzLCBncmFwaCwgc3ZnTm9kZSkgPT4ge1xuICBPYmplY3Qua2V5cyhyZXFzKS5mb3JFYWNoKChyZXFOYW1lKSA9PiB7XG4gICAgbGV0IHJlcSA9IHJlcXNbcmVxTmFtZV07XG4gICAgcmVxTmFtZSA9IGVsZW1lbnRTdHJpbmcocmVxTmFtZSk7XG4gICAgbG9nLmluZm8oXCJBZGRlZCBuZXcgcmVxdWlyZW1lbnQ6IFwiLCByZXFOYW1lKTtcbiAgICBjb25zdCBncm91cE5vZGUgPSBzdmdOb2RlLmFwcGVuZChcImdcIikuYXR0cihcImlkXCIsIHJlcU5hbWUpO1xuICAgIGNvbnN0IHRleHRJZCA9IFwicmVxLVwiICsgcmVxTmFtZTtcbiAgICBjb25zdCByZWN0Tm9kZSA9IG5ld1JlY3ROb2RlKGdyb3VwTm9kZSwgdGV4dElkKTtcbiAgICBsZXQgdGl0bGVOb2RlSW5mbyA9IG5ld1RpdGxlTm9kZShncm91cE5vZGUsIHJlcU5hbWUgKyBcIl90aXRsZVwiLCBbXG4gICAgICBgPDwke3JlcS50eXBlfT4+YCxcbiAgICAgIGAke3JlcS5uYW1lfWBcbiAgICBdKTtcbiAgICBuZXdCb2R5Tm9kZShcbiAgICAgIGdyb3VwTm9kZSxcbiAgICAgIHJlcU5hbWUgKyBcIl9ib2R5XCIsXG4gICAgICBbXG4gICAgICAgIGBJZDogJHtyZXEuaWR9YCxcbiAgICAgICAgYFRleHQ6ICR7cmVxLnRleHR9YCxcbiAgICAgICAgYFJpc2s6ICR7cmVxLnJpc2t9YCxcbiAgICAgICAgYFZlcmlmaWNhdGlvbjogJHtyZXEudmVyaWZ5TWV0aG9kfWBcbiAgICAgIF0sXG4gICAgICB0aXRsZU5vZGVJbmZvLnlcbiAgICApO1xuICAgIGNvbnN0IHJlY3RCQm94ID0gcmVjdE5vZGUubm9kZSgpLmdldEJCb3goKTtcbiAgICBncmFwaC5zZXROb2RlKHJlcU5hbWUsIHtcbiAgICAgIHdpZHRoOiByZWN0QkJveC53aWR0aCxcbiAgICAgIGhlaWdodDogcmVjdEJCb3guaGVpZ2h0LFxuICAgICAgc2hhcGU6IFwicmVjdFwiLFxuICAgICAgaWQ6IHJlcU5hbWVcbiAgICB9KTtcbiAgfSk7XG59O1xuY29uc3QgZHJhd0VsZW1lbnRzID0gKGVscywgZ3JhcGgsIHN2Z05vZGUpID0+IHtcbiAgT2JqZWN0LmtleXMoZWxzKS5mb3JFYWNoKChlbE5hbWUpID0+IHtcbiAgICBsZXQgZWwgPSBlbHNbZWxOYW1lXTtcbiAgICBjb25zdCBpZCA9IGVsZW1lbnRTdHJpbmcoZWxOYW1lKTtcbiAgICBjb25zdCBncm91cE5vZGUgPSBzdmdOb2RlLmFwcGVuZChcImdcIikuYXR0cihcImlkXCIsIGlkKTtcbiAgICBjb25zdCB0ZXh0SWQgPSBcImVsZW1lbnQtXCIgKyBpZDtcbiAgICBjb25zdCByZWN0Tm9kZSA9IG5ld1JlY3ROb2RlKGdyb3VwTm9kZSwgdGV4dElkKTtcbiAgICBsZXQgdGl0bGVOb2RlSW5mbyA9IG5ld1RpdGxlTm9kZShncm91cE5vZGUsIHRleHRJZCArIFwiX3RpdGxlXCIsIFtgPDxFbGVtZW50Pj5gLCBgJHtlbE5hbWV9YF0pO1xuICAgIG5ld0JvZHlOb2RlKFxuICAgICAgZ3JvdXBOb2RlLFxuICAgICAgdGV4dElkICsgXCJfYm9keVwiLFxuICAgICAgW2BUeXBlOiAke2VsLnR5cGUgfHwgXCJOb3QgU3BlY2lmaWVkXCJ9YCwgYERvYyBSZWY6ICR7ZWwuZG9jUmVmIHx8IFwiTm9uZVwifWBdLFxuICAgICAgdGl0bGVOb2RlSW5mby55XG4gICAgKTtcbiAgICBjb25zdCByZWN0QkJveCA9IHJlY3ROb2RlLm5vZGUoKS5nZXRCQm94KCk7XG4gICAgZ3JhcGguc2V0Tm9kZShpZCwge1xuICAgICAgd2lkdGg6IHJlY3RCQm94LndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWN0QkJveC5oZWlnaHQsXG4gICAgICBzaGFwZTogXCJyZWN0XCIsXG4gICAgICBpZFxuICAgIH0pO1xuICB9KTtcbn07XG5jb25zdCBhZGRSZWxhdGlvbnNoaXBzID0gKHJlbGF0aW9uc2hpcHMsIGcpID0+IHtcbiAgcmVsYXRpb25zaGlwcy5mb3JFYWNoKGZ1bmN0aW9uKHIpIHtcbiAgICBsZXQgc3JjID0gZWxlbWVudFN0cmluZyhyLnNyYyk7XG4gICAgbGV0IGRzdCA9IGVsZW1lbnRTdHJpbmcoci5kc3QpO1xuICAgIGcuc2V0RWRnZShzcmMsIGRzdCwgeyByZWxhdGlvbnNoaXA6IHIgfSk7XG4gIH0pO1xuICByZXR1cm4gcmVsYXRpb25zaGlwcztcbn07XG5jb25zdCBhZGp1c3RFbnRpdGllcyA9IGZ1bmN0aW9uKHN2Z05vZGUsIGdyYXBoKSB7XG4gIGdyYXBoLm5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbih2KSB7XG4gICAgaWYgKHYgIT09IHZvaWQgMCAmJiBncmFwaC5ub2RlKHYpICE9PSB2b2lkIDApIHtcbiAgICAgIHN2Z05vZGUuc2VsZWN0KFwiI1wiICsgdik7XG4gICAgICBzdmdOb2RlLnNlbGVjdChcIiNcIiArIHYpLmF0dHIoXG4gICAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICAgIFwidHJhbnNsYXRlKFwiICsgKGdyYXBoLm5vZGUodikueCAtIGdyYXBoLm5vZGUodikud2lkdGggLyAyKSArIFwiLFwiICsgKGdyYXBoLm5vZGUodikueSAtIGdyYXBoLm5vZGUodikuaGVpZ2h0IC8gMikgKyBcIiApXCJcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuO1xufTtcbmNvbnN0IGVsZW1lbnRTdHJpbmcgPSAoc3RyKSA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csIFwiXCIpLnJlcGxhY2UoL1xcLi9nLCBcIl9cIik7XG59O1xuY29uc3QgZHJhdyA9ICh0ZXh0LCBpZCwgX3ZlcnNpb24sIGRpYWdPYmopID0+IHtcbiAgY29uZiA9IGdldENvbmZpZygpLnJlcXVpcmVtZW50O1xuICBjb25zdCBzZWN1cml0eUxldmVsID0gY29uZi5zZWN1cml0eUxldmVsO1xuICBsZXQgc2FuZGJveEVsZW1lbnQ7XG4gIGlmIChzZWN1cml0eUxldmVsID09PSBcInNhbmRib3hcIikge1xuICAgIHNhbmRib3hFbGVtZW50ID0gc2VsZWN0KFwiI2lcIiArIGlkKTtcbiAgfVxuICBjb25zdCByb290ID0gc2VjdXJpdHlMZXZlbCA9PT0gXCJzYW5kYm94XCIgPyBzZWxlY3Qoc2FuZGJveEVsZW1lbnQubm9kZXMoKVswXS5jb250ZW50RG9jdW1lbnQuYm9keSkgOiBzZWxlY3QoXCJib2R5XCIpO1xuICBjb25zdCBzdmcgPSByb290LnNlbGVjdChgW2lkPScke2lkfSddYCk7XG4gIG1hcmtlcnMuaW5zZXJ0TGluZUVuZGluZ3Moc3ZnLCBjb25mKTtcbiAgY29uc3QgZyA9IG5ldyBncmFwaGxpYi5HcmFwaCh7XG4gICAgbXVsdGlncmFwaDogZmFsc2UsXG4gICAgY29tcG91bmQ6IGZhbHNlLFxuICAgIGRpcmVjdGVkOiB0cnVlXG4gIH0pLnNldEdyYXBoKHtcbiAgICByYW5rZGlyOiBjb25mLmxheW91dERpcmVjdGlvbixcbiAgICBtYXJnaW54OiAyMCxcbiAgICBtYXJnaW55OiAyMCxcbiAgICBub2Rlc2VwOiAxMDAsXG4gICAgZWRnZXNlcDogMTAwLFxuICAgIHJhbmtzZXA6IDEwMFxuICB9KS5zZXREZWZhdWx0RWRnZUxhYmVsKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSk7XG4gIGxldCByZXF1aXJlbWVudHMyID0gZGlhZ09iai5kYi5nZXRSZXF1aXJlbWVudHMoKTtcbiAgbGV0IGVsZW1lbnRzMiA9IGRpYWdPYmouZGIuZ2V0RWxlbWVudHMoKTtcbiAgbGV0IHJlbGF0aW9uc2hpcHMgPSBkaWFnT2JqLmRiLmdldFJlbGF0aW9uc2hpcHMoKTtcbiAgZHJhd1JlcXMocmVxdWlyZW1lbnRzMiwgZywgc3ZnKTtcbiAgZHJhd0VsZW1lbnRzKGVsZW1lbnRzMiwgZywgc3ZnKTtcbiAgYWRkUmVsYXRpb25zaGlwcyhyZWxhdGlvbnNoaXBzLCBnKTtcbiAgbGF5b3V0KGcpO1xuICBhZGp1c3RFbnRpdGllcyhzdmcsIGcpO1xuICByZWxhdGlvbnNoaXBzLmZvckVhY2goZnVuY3Rpb24ocmVsKSB7XG4gICAgZHJhd1JlbGF0aW9uc2hpcEZyb21MYXlvdXQoc3ZnLCByZWwsIGcsIGlkLCBkaWFnT2JqKTtcbiAgfSk7XG4gIGNvbnN0IHBhZGRpbmcgPSBjb25mLnJlY3RfcGFkZGluZztcbiAgY29uc3Qgc3ZnQm91bmRzID0gc3ZnLm5vZGUoKS5nZXRCQm94KCk7XG4gIGNvbnN0IHdpZHRoID0gc3ZnQm91bmRzLndpZHRoICsgcGFkZGluZyAqIDI7XG4gIGNvbnN0IGhlaWdodCA9IHN2Z0JvdW5kcy5oZWlnaHQgKyBwYWRkaW5nICogMjtcbiAgY29uZmlndXJlU3ZnU2l6ZShzdmcsIGhlaWdodCwgd2lkdGgsIGNvbmYudXNlTWF4V2lkdGgpO1xuICBzdmcuYXR0cihcInZpZXdCb3hcIiwgYCR7c3ZnQm91bmRzLnggLSBwYWRkaW5nfSAke3N2Z0JvdW5kcy55IC0gcGFkZGluZ30gJHt3aWR0aH0gJHtoZWlnaHR9YCk7XG59O1xuY29uc3QgcmVuZGVyZXIgPSB7XG4gIGRyYXdcbn07XG5jb25zdCBkaWFncmFtID0ge1xuICBwYXJzZXI6IHBhcnNlciQxLFxuICBkYixcbiAgcmVuZGVyZXIsXG4gIHN0eWxlc1xufTtcbmV4cG9ydCB7XG4gIGRpYWdyYW1cbn07XG4iXSwibmFtZXMiOlsibG9nIiwiY2xlYXIkMSIsImdldENvbmZpZyIsInNldEFjY1RpdGxlIiwiZ2V0QWNjVGl0bGUiLCJzZXRBY2NEZXNjcmlwdGlvbiIsImdldEFjY0Rlc2NyaXB0aW9uIiwibGluZSIsImNvbW1vbiIsInNlbGVjdCIsImdyYXBobGliLkdyYXBoIiwibGF5b3V0IiwiY29uZmlndXJlU3ZnU2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWFBLElBQUksTUFBTSxHQUFHLFdBQVc7QUFDeEIsRUFBRSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDdkQsTUFBTSxDQUFDO0FBQ1AsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNkLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDanNCLEVBQUUsSUFBSSxPQUFPLEdBQUc7QUFDaEIsSUFBSSxLQUFLLEVBQUUsU0FBUyxLQUFLLEdBQUc7QUFDNUIsS0FBSztBQUNMLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDVixJQUFJLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSx3QkFBd0IsRUFBRSxFQUFFLEVBQUUsdUJBQXVCLEVBQUUsRUFBRSxFQUFFLHlCQUF5QixFQUFFLEVBQUUsRUFBRSxzQkFBc0IsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxzQkFBc0IsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtBQUNqb0MsSUFBSSxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLHdCQUF3QixFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxFQUFFLEVBQUUseUJBQXlCLEVBQUUsRUFBRSxFQUFFLHNCQUFzQixFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLHNCQUFzQixFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO0FBQ2x6QixJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFB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RSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzcEgsSUFBSSxjQUFjLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDclYsSUFBSSxVQUFVLEVBQUUsU0FBUyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUMvQyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUM1QixRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFD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QztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RC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QUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzFKLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN0SyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdEssRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsV0FB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
