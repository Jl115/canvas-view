'use strict';

var index = require('./index-deb671d6.js');
require('./main-5c8f274d.js');
var linear = require('./linear-6dcd69c1.js');
require('obsidian');
require('./init-8ddd39ad.js');

var parser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [1, 3], $V1 = [1, 4], $V2 = [1, 5], $V3 = [1, 6], $V4 = [1, 7], $V5 = [1, 5, 13, 15, 17, 19, 20, 25, 27, 28, 29, 30, 31, 32, 33, 34, 37, 38, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], $V6 = [1, 5, 6, 13, 15, 17, 19, 20, 25, 27, 28, 29, 30, 31, 32, 33, 34, 37, 38, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], $V7 = [32, 33, 34], $V8 = [2, 7], $V9 = [1, 13], $Va = [1, 17], $Vb = [1, 18], $Vc = [1, 19], $Vd = [1, 20], $Ve = [1, 21], $Vf = [1, 22], $Vg = [1, 23], $Vh = [1, 24], $Vi = [1, 25], $Vj = [1, 26], $Vk = [1, 27], $Vl = [1, 30], $Vm = [1, 31], $Vn = [1, 32], $Vo = [1, 33], $Vp = [1, 34], $Vq = [1, 35], $Vr = [1, 36], $Vs = [1, 37], $Vt = [1, 38], $Vu = [1, 39], $Vv = [1, 40], $Vw = [1, 41], $Vx = [1, 42], $Vy = [1, 57], $Vz = [1, 58], $VA = [5, 22, 26, 32, 33, 34, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
  var parser2 = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "start": 3, "eol": 4, "SPACE": 5, "QUADRANT": 6, "document": 7, "line": 8, "statement": 9, "axisDetails": 10, "quadrantDetails": 11, "points": 12, "title": 13, "title_value": 14, "acc_title": 15, "acc_title_value": 16, "acc_descr": 17, "acc_descr_value": 18, "acc_descr_multiline_value": 19, "section": 20, "text": 21, "point_start": 22, "point_x": 23, "point_y": 24, "X-AXIS": 25, "AXIS-TEXT-DELIMITER": 26, "Y-AXIS": 27, "QUADRANT_1": 28, "QUADRANT_2": 29, "QUADRANT_3": 30, "QUADRANT_4": 31, "NEWLINE": 32, "SEMI": 33, "EOF": 34, "alphaNumToken": 35, "textNoTagsToken": 36, "STR": 37, "MD_STR": 38, "alphaNum": 39, "PUNCTUATION": 40, "AMP": 41, "NUM": 42, "ALPHA": 43, "COMMA": 44, "PLUS": 45, "EQUALS": 46, "MULT": 47, "DOT": 48, "BRKT": 49, "UNDERSCORE": 50, "MINUS": 51, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 5: "SPACE", 6: "QUADRANT", 13: "title", 14: "title_value", 15: "acc_title", 16: "acc_title_value", 17: "acc_descr", 18: "acc_descr_value", 19: "acc_descr_multiline_value", 20: "section", 22: "point_start", 23: "point_x", 24: "point_y", 25: "X-AXIS", 26: "AXIS-TEXT-DELIMITER", 27: "Y-AXIS", 28: "QUADRANT_1", 29: "QUADRANT_2", 30: "QUADRANT_3", 31: "QUADRANT_4", 32: "NEWLINE", 33: "SEMI", 34: "EOF", 37: "STR", 38: "MD_STR", 40: "PUNCTUATION", 41: "AMP", 42: "NUM", 43: "ALPHA", 44: "COMMA", 45: "PLUS", 46: "EQUALS", 47: "MULT", 48: "DOT", 49: "BRKT", 50: "UNDERSCORE", 51: "MINUS" },
    productions_: [0, [3, 2], [3, 2], [3, 2], [7, 0], [7, 2], [8, 2], [9, 0], [9, 2], [9, 1], [9, 1], [9, 1], [9, 2], [9, 2], [9, 2], [9, 1], [9, 1], [12, 4], [10, 4], [10, 3], [10, 2], [10, 4], [10, 3], [10, 2], [11, 2], [11, 2], [11, 2], [11, 2], [4, 1], [4, 1], [4, 1], [21, 1], [21, 2], [21, 1], [21, 1], [39, 1], [39, 2], [35, 1], [35, 1], [35, 1], [35, 1], [35, 1], [35, 1], [35, 1], [35, 1], [35, 1], [35, 1], [35, 1], [36, 1], [36, 1], [36, 1]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 12:
          this.$ = $$[$0].trim();
          yy.setDiagramTitle(this.$);
          break;
        case 13:
          this.$ = $$[$0].trim();
          yy.setAccTitle(this.$);
          break;
        case 14:
        case 15:
          this.$ = $$[$0].trim();
          yy.setAccDescription(this.$);
          break;
        case 16:
          yy.addSection($$[$0].substr(8));
          this.$ = $$[$0].substr(8);
          break;
        case 17:
          yy.addPoint($$[$0 - 3], $$[$0 - 1], $$[$0]);
          break;
        case 18:
          yy.setXAxisLeftText($$[$0 - 2]);
          yy.setXAxisRightText($$[$0]);
          break;
        case 19:
          $$[$0 - 1].text += " ⟶ ";
          yy.setXAxisLeftText($$[$0 - 1]);
          break;
        case 20:
          yy.setXAxisLeftText($$[$0]);
          break;
        case 21:
          yy.setYAxisBottomText($$[$0 - 2]);
          yy.setYAxisTopText($$[$0]);
          break;
        case 22:
          $$[$0 - 1].text += " ⟶ ";
          yy.setYAxisBottomText($$[$0 - 1]);
          break;
        case 23:
          yy.setYAxisBottomText($$[$0]);
          break;
        case 24:
          yy.setQuadrant1Text($$[$0]);
          break;
        case 25:
          yy.setQuadrant2Text($$[$0]);
          break;
        case 26:
          yy.setQuadrant3Text($$[$0]);
          break;
        case 27:
          yy.setQuadrant4Text($$[$0]);
          break;
        case 31:
          this.$ = { text: $$[$0], type: "text" };
          break;
        case 32:
          this.$ = { text: $$[$0 - 1].text + "" + $$[$0], type: $$[$0 - 1].type };
          break;
        case 33:
          this.$ = { text: $$[$0], type: "text" };
          break;
        case 34:
          this.$ = { text: $$[$0], type: "markdown" };
          break;
        case 35:
          this.$ = $$[$0];
          break;
        case 36:
          this.$ = $$[$0 - 1] + "" + $$[$0];
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: $V0, 6: $V1, 32: $V2, 33: $V3, 34: $V4 }, { 1: [3] }, { 3: 8, 4: 2, 5: $V0, 6: $V1, 32: $V2, 33: $V3, 34: $V4 }, { 3: 9, 4: 2, 5: $V0, 6: $V1, 32: $V2, 33: $V3, 34: $V4 }, o($V5, [2, 4], { 7: 10 }), o($V6, [2, 28]), o($V6, [2, 29]), o($V6, [2, 30]), { 1: [2, 1] }, { 1: [2, 2] }, o($V7, $V8, { 8: 11, 9: 12, 10: 14, 11: 15, 12: 16, 21: 28, 35: 29, 1: [2, 3], 5: $V9, 13: $Va, 15: $Vb, 17: $Vc, 19: $Vd, 20: $Ve, 25: $Vf, 27: $Vg, 28: $Vh, 29: $Vi, 30: $Vj, 31: $Vk, 37: $Vl, 38: $Vm, 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx }), o($V5, [2, 5]), { 4: 43, 32: $V2, 33: $V3, 34: $V4 }, o($V7, $V8, { 10: 14, 11: 15, 12: 16, 21: 28, 35: 29, 9: 44, 5: $V9, 13: $Va, 15: $Vb, 17: $Vc, 19: $Vd, 20: $Ve, 25: $Vf, 27: $Vg, 28: $Vh, 29: $Vi, 30: $Vj, 31: $Vk, 37: $Vl, 38: $Vm, 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx }), o($V7, [2, 9]), o($V7, [2, 10]), o($V7, [2, 11]), { 14: [1, 45] }, { 16: [1, 46] }, { 18: [1, 47] }, o($V7, [2, 15]), o($V7, [2, 16]), { 21: 48, 35: 29, 37: $Vl, 38: $Vm, 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx }, { 21: 49, 35: 29, 37: $Vl, 38: $Vm, 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx }, { 21: 50, 35: 29, 37: $Vl, 38: $Vm, 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx }, { 21: 51, 35: 29, 37: $Vl, 38: $Vm, 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx }, { 21: 52, 35: 29, 37: $Vl, 38: $Vm, 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx }, { 21: 53, 35: 29, 37: $Vl, 38: $Vm, 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx }, { 5: $Vy, 22: [1, 54], 35: 56, 36: 55, 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx, 51: $Vz }, o($VA, [2, 31]), o($VA, [2, 33]), o($VA, [2, 34]), o($VA, [2, 37]), o($VA, [2, 38]), o($VA, [2, 39]), o($VA, [2, 40]), o($VA, [2, 41]), o($VA, [2, 42]), o($VA, [2, 43]), o($VA, [2, 44]), o($VA, [2, 45]), o($VA, [2, 46]), o($VA, [2, 47]), o($V5, [2, 6]), o($V7, [2, 8]), o($V7, [2, 12]), o($V7, [2, 13]), o($V7, [2, 14]), o($V7, [2, 20], { 36: 55, 35: 56, 5: $Vy, 26: [1, 59], 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx, 51: $Vz }), o($V7, [2, 23], { 36: 55, 35: 56, 5: $Vy, 26: [1, 60], 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx, 51: $Vz }), o($V7, [2, 24], { 36: 55, 35: 56, 5: $Vy, 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx, 51: $Vz }), o($V7, [2, 25], { 36: 55, 35: 56, 5: $Vy, 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx, 51: $Vz }), o($V7, [2, 26], { 36: 55, 35: 56, 5: $Vy, 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx, 51: $Vz }), o($V7, [2, 27], { 36: 55, 35: 56, 5: $Vy, 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx, 51: $Vz }), { 23: [1, 61] }, o($VA, [2, 32]), o($VA, [2, 48]), o($VA, [2, 49]), o($VA, [2, 50]), o($V7, [2, 19], { 35: 29, 21: 62, 37: $Vl, 38: $Vm, 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx }), o($V7, [2, 22], { 35: 29, 21: 63, 37: $Vl, 38: $Vm, 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx }), { 24: [1, 64] }, o($V7, [2, 18], { 36: 55, 35: 56, 5: $Vy, 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx, 51: $Vz }), o($V7, [2, 21], { 36: 55, 35: 56, 5: $Vy, 40: $Vn, 41: $Vo, 42: $Vp, 43: $Vq, 44: $Vr, 45: $Vs, 46: $Vt, 47: $Vu, 48: $Vv, 49: $Vw, 50: $Vx, 51: $Vz }), o($V7, [2, 17])],
    defaultActions: { 8: [2, 1], 9: [2, 2] },
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
            break;
          case 1:
            break;
          case 2:
            return 32;
          case 3:
            break;
          case 4:
            this.begin("title");
            return 13;
          case 5:
            this.popState();
            return "title_value";
          case 6:
            this.begin("acc_title");
            return 15;
          case 7:
            this.popState();
            return "acc_title_value";
          case 8:
            this.begin("acc_descr");
            return 17;
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
            return 25;
          case 14:
            return 27;
          case 15:
            return 26;
          case 16:
            return 28;
          case 17:
            return 29;
          case 18:
            return 30;
          case 19:
            return 31;
          case 20:
            this.begin("md_string");
            break;
          case 21:
            return "MD_STR";
          case 22:
            this.popState();
            break;
          case 23:
            this.begin("string");
            break;
          case 24:
            this.popState();
            break;
          case 25:
            return "STR";
          case 26:
            this.begin("point_start");
            return 22;
          case 27:
            this.begin("point_x");
            return 23;
          case 28:
            this.popState();
            break;
          case 29:
            this.popState();
            this.begin("point_y");
            break;
          case 30:
            this.popState();
            return 24;
          case 31:
            return 6;
          case 32:
            return 43;
          case 33:
            return "COLON";
          case 34:
            return 45;
          case 35:
            return 44;
          case 36:
            return 46;
          case 37:
            return 46;
          case 38:
            return 47;
          case 39:
            return 49;
          case 40:
            return 50;
          case 41:
            return 48;
          case 42:
            return 41;
          case 43:
            return 51;
          case 44:
            return 42;
          case 45:
            return 5;
          case 46:
            return 33;
          case 47:
            return 40;
          case 48:
            return 34;
        }
      },
      rules: [/^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n\r]+)/i, /^(?:%%[^\n]*)/i, /^(?:title\b)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?: *x-axis *)/i, /^(?: *y-axis *)/i, /^(?: *--+> *)/i, /^(?: *quadrant-1 *)/i, /^(?: *quadrant-2 *)/i, /^(?: *quadrant-3 *)/i, /^(?: *quadrant-4 *)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:\s*:\s*\[\s*)/i, /^(?:(1)|(0(.\d+)?))/i, /^(?:\s*\] *)/i, /^(?:\s*,\s*)/i, /^(?:(1)|(0(.\d+)?))/i, /^(?: *quadrantChart *)/i, /^(?:[A-Za-z]+)/i, /^(?::)/i, /^(?:\+)/i, /^(?:,)/i, /^(?:=)/i, /^(?:=)/i, /^(?:\*)/i, /^(?:#)/i, /^(?:[\_])/i, /^(?:\.)/i, /^(?:&)/i, /^(?:-)/i, /^(?:[0-9]+)/i, /^(?:\s)/i, /^(?:;)/i, /^(?:[!"#$%&'*+,-.`?\\_/])/i, /^(?:$)/i],
      conditions: { "point_y": { "rules": [30], "inclusive": false }, "point_x": { "rules": [29], "inclusive": false }, "point_start": { "rules": [27, 28], "inclusive": false }, "acc_descr_multiline": { "rules": [11, 12], "inclusive": false }, "acc_descr": { "rules": [9], "inclusive": false }, "acc_title": { "rules": [7], "inclusive": false }, "title": { "rules": [5], "inclusive": false }, "md_string": { "rules": [21, 22], "inclusive": false }, "string": { "rules": [24, 25], "inclusive": false }, "INITIAL": { "rules": [0, 1, 2, 3, 4, 6, 8, 10, 13, 14, 15, 16, 17, 18, 19, 20, 23, 26, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48], "inclusive": true } }
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
const defaultThemeVariables = index.getThemeVariables$2();
class QuadrantBuilder {
  constructor() {
    this.config = this.getDefaultConfig();
    this.themeConfig = this.getDefaultThemeConfig();
    this.data = this.getDefaultData();
  }
  getDefaultData() {
    return {
      titleText: "",
      quadrant1Text: "",
      quadrant2Text: "",
      quadrant3Text: "",
      quadrant4Text: "",
      xAxisLeftText: "",
      xAxisRightText: "",
      yAxisBottomText: "",
      yAxisTopText: "",
      points: []
    };
  }
  getDefaultConfig() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
    return {
      showXAxis: true,
      showYAxis: true,
      showTitle: true,
      chartHeight: ((_a = index.defaultConfig$2.quadrantChart) == null ? void 0 : _a.chartWidth) || 500,
      chartWidth: ((_b = index.defaultConfig$2.quadrantChart) == null ? void 0 : _b.chartHeight) || 500,
      titlePadding: ((_c = index.defaultConfig$2.quadrantChart) == null ? void 0 : _c.titlePadding) || 10,
      titleFontSize: ((_d = index.defaultConfig$2.quadrantChart) == null ? void 0 : _d.titleFontSize) || 20,
      quadrantPadding: ((_e = index.defaultConfig$2.quadrantChart) == null ? void 0 : _e.quadrantPadding) || 5,
      xAxisLabelPadding: ((_f = index.defaultConfig$2.quadrantChart) == null ? void 0 : _f.xAxisLabelPadding) || 5,
      yAxisLabelPadding: ((_g = index.defaultConfig$2.quadrantChart) == null ? void 0 : _g.yAxisLabelPadding) || 5,
      xAxisLabelFontSize: ((_h = index.defaultConfig$2.quadrantChart) == null ? void 0 : _h.xAxisLabelFontSize) || 16,
      yAxisLabelFontSize: ((_i = index.defaultConfig$2.quadrantChart) == null ? void 0 : _i.yAxisLabelFontSize) || 16,
      quadrantLabelFontSize: ((_j = index.defaultConfig$2.quadrantChart) == null ? void 0 : _j.quadrantLabelFontSize) || 16,
      quadrantTextTopPadding: ((_k = index.defaultConfig$2.quadrantChart) == null ? void 0 : _k.quadrantTextTopPadding) || 5,
      pointTextPadding: ((_l = index.defaultConfig$2.quadrantChart) == null ? void 0 : _l.pointTextPadding) || 5,
      pointLabelFontSize: ((_m = index.defaultConfig$2.quadrantChart) == null ? void 0 : _m.pointLabelFontSize) || 12,
      pointRadius: ((_n = index.defaultConfig$2.quadrantChart) == null ? void 0 : _n.pointRadius) || 5,
      xAxisPosition: ((_o = index.defaultConfig$2.quadrantChart) == null ? void 0 : _o.xAxisPosition) || "top",
      yAxisPosition: ((_p = index.defaultConfig$2.quadrantChart) == null ? void 0 : _p.yAxisPosition) || "left",
      quadrantInternalBorderStrokeWidth: ((_q = index.defaultConfig$2.quadrantChart) == null ? void 0 : _q.quadrantInternalBorderStrokeWidth) || 1,
      quadrantExternalBorderStrokeWidth: ((_r = index.defaultConfig$2.quadrantChart) == null ? void 0 : _r.quadrantExternalBorderStrokeWidth) || 2
    };
  }
  getDefaultThemeConfig() {
    return {
      quadrant1Fill: defaultThemeVariables.quadrant1Fill,
      quadrant2Fill: defaultThemeVariables.quadrant2Fill,
      quadrant3Fill: defaultThemeVariables.quadrant3Fill,
      quadrant4Fill: defaultThemeVariables.quadrant4Fill,
      quadrant1TextFill: defaultThemeVariables.quadrant1TextFill,
      quadrant2TextFill: defaultThemeVariables.quadrant2TextFill,
      quadrant3TextFill: defaultThemeVariables.quadrant3TextFill,
      quadrant4TextFill: defaultThemeVariables.quadrant4TextFill,
      quadrantPointFill: defaultThemeVariables.quadrantPointFill,
      quadrantPointTextFill: defaultThemeVariables.quadrantPointTextFill,
      quadrantXAxisTextFill: defaultThemeVariables.quadrantXAxisTextFill,
      quadrantYAxisTextFill: defaultThemeVariables.quadrantYAxisTextFill,
      quadrantTitleFill: defaultThemeVariables.quadrantTitleFill,
      quadrantInternalBorderStrokeFill: defaultThemeVariables.quadrantInternalBorderStrokeFill,
      quadrantExternalBorderStrokeFill: defaultThemeVariables.quadrantExternalBorderStrokeFill
    };
  }
  clear() {
    this.config = this.getDefaultConfig();
    this.themeConfig = this.getDefaultThemeConfig();
    this.data = this.getDefaultData();
    index.log$1.info("clear called");
  }
  setData(data) {
    this.data = { ...this.data, ...data };
  }
  addPoints(points) {
    this.data.points = [...points, ...this.data.points];
  }
  setConfig(config2) {
    index.log$1.trace("setConfig called with: ", config2);
    this.config = { ...this.config, ...config2 };
  }
  setThemeConfig(themeConfig) {
    index.log$1.trace("setThemeConfig called with: ", themeConfig);
    this.themeConfig = { ...this.themeConfig, ...themeConfig };
  }
  calculateSpace(xAxisPosition, showXAxis, showYAxis, showTitle) {
    const xAxisSpaceCalculation = this.config.xAxisLabelPadding * 2 + this.config.xAxisLabelFontSize;
    const xAxisSpace = {
      top: xAxisPosition === "top" && showXAxis ? xAxisSpaceCalculation : 0,
      bottom: xAxisPosition === "bottom" && showXAxis ? xAxisSpaceCalculation : 0
    };
    const yAxisSpaceCalculation = this.config.yAxisLabelPadding * 2 + this.config.yAxisLabelFontSize;
    const yAxisSpace = {
      left: this.config.yAxisPosition === "left" && showYAxis ? yAxisSpaceCalculation : 0,
      right: this.config.yAxisPosition === "right" && showYAxis ? yAxisSpaceCalculation : 0
    };
    const titleSpaceCalculation = this.config.titleFontSize + this.config.titlePadding * 2;
    const titleSpace = {
      top: showTitle ? titleSpaceCalculation : 0
    };
    const quadrantLeft = this.config.quadrantPadding + yAxisSpace.left;
    const quadrantTop = this.config.quadrantPadding + xAxisSpace.top + titleSpace.top;
    const quadrantWidth = this.config.chartWidth - this.config.quadrantPadding * 2 - yAxisSpace.left - yAxisSpace.right;
    const quadrantHeight = this.config.chartHeight - this.config.quadrantPadding * 2 - xAxisSpace.top - xAxisSpace.bottom - titleSpace.top;
    const quadrantHalfWidth = quadrantWidth / 2;
    const quadrantHalfHeight = quadrantHeight / 2;
    const quadrantSpace = {
      quadrantLeft,
      quadrantTop,
      quadrantWidth,
      quadrantHalfWidth,
      quadrantHeight,
      quadrantHalfHeight
    };
    return {
      xAxisSpace,
      yAxisSpace,
      titleSpace,
      quadrantSpace
    };
  }
  getAxisLabels(xAxisPosition, showXAxis, showYAxis, spaceData) {
    const { quadrantSpace, titleSpace } = spaceData;
    const {
      quadrantHalfHeight,
      quadrantHeight,
      quadrantLeft,
      quadrantHalfWidth,
      quadrantTop,
      quadrantWidth
    } = quadrantSpace;
    const drawXAxisLabelsInMiddle = Boolean(this.data.xAxisRightText);
    const drawYAxisLabelsInMiddle = Boolean(this.data.yAxisTopText);
    const axisLabels = [];
    if (this.data.xAxisLeftText && showXAxis) {
      axisLabels.push({
        text: this.data.xAxisLeftText,
        fill: this.themeConfig.quadrantXAxisTextFill,
        x: quadrantLeft + (drawXAxisLabelsInMiddle ? quadrantHalfWidth / 2 : 0),
        y: xAxisPosition === "top" ? this.config.xAxisLabelPadding + titleSpace.top : this.config.xAxisLabelPadding + quadrantTop + quadrantHeight + this.config.quadrantPadding,
        fontSize: this.config.xAxisLabelFontSize,
        verticalPos: drawXAxisLabelsInMiddle ? "center" : "left",
        horizontalPos: "top",
        rotation: 0
      });
    }
    if (this.data.xAxisRightText && showXAxis) {
      axisLabels.push({
        text: this.data.xAxisRightText,
        fill: this.themeConfig.quadrantXAxisTextFill,
        x: quadrantLeft + quadrantHalfWidth + (drawXAxisLabelsInMiddle ? quadrantHalfWidth / 2 : 0),
        y: xAxisPosition === "top" ? this.config.xAxisLabelPadding + titleSpace.top : this.config.xAxisLabelPadding + quadrantTop + quadrantHeight + this.config.quadrantPadding,
        fontSize: this.config.xAxisLabelFontSize,
        verticalPos: drawXAxisLabelsInMiddle ? "center" : "left",
        horizontalPos: "top",
        rotation: 0
      });
    }
    if (this.data.yAxisBottomText && showYAxis) {
      axisLabels.push({
        text: this.data.yAxisBottomText,
        fill: this.themeConfig.quadrantYAxisTextFill,
        x: this.config.yAxisPosition === "left" ? this.config.yAxisLabelPadding : this.config.yAxisLabelPadding + quadrantLeft + quadrantWidth + this.config.quadrantPadding,
        y: quadrantTop + quadrantHeight - (drawYAxisLabelsInMiddle ? quadrantHalfHeight / 2 : 0),
        fontSize: this.config.yAxisLabelFontSize,
        verticalPos: drawYAxisLabelsInMiddle ? "center" : "left",
        horizontalPos: "top",
        rotation: -90
      });
    }
    if (this.data.yAxisTopText && showYAxis) {
      axisLabels.push({
        text: this.data.yAxisTopText,
        fill: this.themeConfig.quadrantYAxisTextFill,
        x: this.config.yAxisPosition === "left" ? this.config.yAxisLabelPadding : this.config.yAxisLabelPadding + quadrantLeft + quadrantWidth + this.config.quadrantPadding,
        y: quadrantTop + quadrantHalfHeight - (drawYAxisLabelsInMiddle ? quadrantHalfHeight / 2 : 0),
        fontSize: this.config.yAxisLabelFontSize,
        verticalPos: drawYAxisLabelsInMiddle ? "center" : "left",
        horizontalPos: "top",
        rotation: -90
      });
    }
    return axisLabels;
  }
  getQuadrants(spaceData) {
    const { quadrantSpace } = spaceData;
    const { quadrantHalfHeight, quadrantLeft, quadrantHalfWidth, quadrantTop } = quadrantSpace;
    const quadrants = [
      {
        text: {
          text: this.data.quadrant1Text,
          fill: this.themeConfig.quadrant1TextFill,
          x: 0,
          y: 0,
          fontSize: this.config.quadrantLabelFontSize,
          verticalPos: "center",
          horizontalPos: "middle",
          rotation: 0
        },
        x: quadrantLeft + quadrantHalfWidth,
        y: quadrantTop,
        width: quadrantHalfWidth,
        height: quadrantHalfHeight,
        fill: this.themeConfig.quadrant1Fill
      },
      {
        text: {
          text: this.data.quadrant2Text,
          fill: this.themeConfig.quadrant2TextFill,
          x: 0,
          y: 0,
          fontSize: this.config.quadrantLabelFontSize,
          verticalPos: "center",
          horizontalPos: "middle",
          rotation: 0
        },
        x: quadrantLeft,
        y: quadrantTop,
        width: quadrantHalfWidth,
        height: quadrantHalfHeight,
        fill: this.themeConfig.quadrant2Fill
      },
      {
        text: {
          text: this.data.quadrant3Text,
          fill: this.themeConfig.quadrant3TextFill,
          x: 0,
          y: 0,
          fontSize: this.config.quadrantLabelFontSize,
          verticalPos: "center",
          horizontalPos: "middle",
          rotation: 0
        },
        x: quadrantLeft,
        y: quadrantTop + quadrantHalfHeight,
        width: quadrantHalfWidth,
        height: quadrantHalfHeight,
        fill: this.themeConfig.quadrant3Fill
      },
      {
        text: {
          text: this.data.quadrant4Text,
          fill: this.themeConfig.quadrant4TextFill,
          x: 0,
          y: 0,
          fontSize: this.config.quadrantLabelFontSize,
          verticalPos: "center",
          horizontalPos: "middle",
          rotation: 0
        },
        x: quadrantLeft + quadrantHalfWidth,
        y: quadrantTop + quadrantHalfHeight,
        width: quadrantHalfWidth,
        height: quadrantHalfHeight,
        fill: this.themeConfig.quadrant4Fill
      }
    ];
    for (const quadrant of quadrants) {
      quadrant.text.x = quadrant.x + quadrant.width / 2;
      if (this.data.points.length === 0) {
        quadrant.text.y = quadrant.y + quadrant.height / 2;
        quadrant.text.horizontalPos = "middle";
      } else {
        quadrant.text.y = quadrant.y + this.config.quadrantTextTopPadding;
        quadrant.text.horizontalPos = "top";
      }
    }
    return quadrants;
  }
  getQuadrantPoints(spaceData) {
    const { quadrantSpace } = spaceData;
    const { quadrantHeight, quadrantLeft, quadrantTop, quadrantWidth } = quadrantSpace;
    const xAxis = linear.linear().domain([0, 1]).range([quadrantLeft, quadrantWidth + quadrantLeft]);
    const yAxis = linear.linear().domain([0, 1]).range([quadrantHeight + quadrantTop, quadrantTop]);
    const points = this.data.points.map((point) => {
      const props = {
        x: xAxis(point.x),
        y: yAxis(point.y),
        fill: this.themeConfig.quadrantPointFill,
        radius: this.config.pointRadius,
        text: {
          text: point.text,
          fill: this.themeConfig.quadrantPointTextFill,
          x: xAxis(point.x),
          y: yAxis(point.y) + this.config.pointTextPadding,
          verticalPos: "center",
          horizontalPos: "top",
          fontSize: this.config.pointLabelFontSize,
          rotation: 0
        }
      };
      return props;
    });
    return points;
  }
  getBorders(spaceData) {
    const halfExternalBorderWidth = this.config.quadrantExternalBorderStrokeWidth / 2;
    const { quadrantSpace } = spaceData;
    const {
      quadrantHalfHeight,
      quadrantHeight,
      quadrantLeft,
      quadrantHalfWidth,
      quadrantTop,
      quadrantWidth
    } = quadrantSpace;
    const borderLines = [
      // top border
      {
        strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
        strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
        x1: quadrantLeft - halfExternalBorderWidth,
        y1: quadrantTop,
        x2: quadrantLeft + quadrantWidth + halfExternalBorderWidth,
        y2: quadrantTop
      },
      // right border
      {
        strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
        strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
        x1: quadrantLeft + quadrantWidth,
        y1: quadrantTop + halfExternalBorderWidth,
        x2: quadrantLeft + quadrantWidth,
        y2: quadrantTop + quadrantHeight - halfExternalBorderWidth
      },
      // bottom border
      {
        strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
        strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
        x1: quadrantLeft - halfExternalBorderWidth,
        y1: quadrantTop + quadrantHeight,
        x2: quadrantLeft + quadrantWidth + halfExternalBorderWidth,
        y2: quadrantTop + quadrantHeight
      },
      // left border
      {
        strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
        strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
        x1: quadrantLeft,
        y1: quadrantTop + halfExternalBorderWidth,
        x2: quadrantLeft,
        y2: quadrantTop + quadrantHeight - halfExternalBorderWidth
      },
      // vertical inner border
      {
        strokeFill: this.themeConfig.quadrantInternalBorderStrokeFill,
        strokeWidth: this.config.quadrantInternalBorderStrokeWidth,
        x1: quadrantLeft + quadrantHalfWidth,
        y1: quadrantTop + halfExternalBorderWidth,
        x2: quadrantLeft + quadrantHalfWidth,
        y2: quadrantTop + quadrantHeight - halfExternalBorderWidth
      },
      // horizontal inner border
      {
        strokeFill: this.themeConfig.quadrantInternalBorderStrokeFill,
        strokeWidth: this.config.quadrantInternalBorderStrokeWidth,
        x1: quadrantLeft + halfExternalBorderWidth,
        y1: quadrantTop + quadrantHalfHeight,
        x2: quadrantLeft + quadrantWidth - halfExternalBorderWidth,
        y2: quadrantTop + quadrantHalfHeight
      }
    ];
    return borderLines;
  }
  getTitle(showTitle) {
    if (showTitle) {
      return {
        text: this.data.titleText,
        fill: this.themeConfig.quadrantTitleFill,
        fontSize: this.config.titleFontSize,
        horizontalPos: "top",
        verticalPos: "center",
        rotation: 0,
        y: this.config.titlePadding,
        x: this.config.chartWidth / 2
      };
    }
    return;
  }
  build() {
    const showXAxis = this.config.showXAxis && !!(this.data.xAxisLeftText || this.data.xAxisRightText);
    const showYAxis = this.config.showYAxis && !!(this.data.yAxisTopText || this.data.yAxisBottomText);
    const showTitle = this.config.showTitle && !!this.data.titleText;
    const xAxisPosition = this.data.points.length > 0 ? "bottom" : this.config.xAxisPosition;
    const calculatedSpace = this.calculateSpace(xAxisPosition, showXAxis, showYAxis, showTitle);
    return {
      points: this.getQuadrantPoints(calculatedSpace),
      quadrants: this.getQuadrants(calculatedSpace),
      axisLabels: this.getAxisLabels(xAxisPosition, showXAxis, showYAxis, calculatedSpace),
      borderLines: this.getBorders(calculatedSpace),
      title: this.getTitle(showTitle)
    };
  }
}
const config = index.getConfig();
function textSanitizer(text) {
  return index.sanitizeText$2(text.trim(), config);
}
const quadrantBuilder = new QuadrantBuilder();
function setQuadrant1Text(textObj) {
  quadrantBuilder.setData({ quadrant1Text: textSanitizer(textObj.text) });
}
function setQuadrant2Text(textObj) {
  quadrantBuilder.setData({ quadrant2Text: textSanitizer(textObj.text) });
}
function setQuadrant3Text(textObj) {
  quadrantBuilder.setData({ quadrant3Text: textSanitizer(textObj.text) });
}
function setQuadrant4Text(textObj) {
  quadrantBuilder.setData({ quadrant4Text: textSanitizer(textObj.text) });
}
function setXAxisLeftText(textObj) {
  quadrantBuilder.setData({ xAxisLeftText: textSanitizer(textObj.text) });
}
function setXAxisRightText(textObj) {
  quadrantBuilder.setData({ xAxisRightText: textSanitizer(textObj.text) });
}
function setYAxisTopText(textObj) {
  quadrantBuilder.setData({ yAxisTopText: textSanitizer(textObj.text) });
}
function setYAxisBottomText(textObj) {
  quadrantBuilder.setData({ yAxisBottomText: textSanitizer(textObj.text) });
}
function addPoint(textObj, x, y) {
  quadrantBuilder.addPoints([{ x, y, text: textSanitizer(textObj.text) }]);
}
function setWidth(width) {
  quadrantBuilder.setConfig({ chartWidth: width });
}
function setHeight(height) {
  quadrantBuilder.setConfig({ chartHeight: height });
}
function getQuadrantData() {
  const config2 = index.getConfig();
  const { themeVariables, quadrantChart: quadrantChartConfig } = config2;
  if (quadrantChartConfig) {
    quadrantBuilder.setConfig(quadrantChartConfig);
  }
  quadrantBuilder.setThemeConfig({
    quadrant1Fill: themeVariables.quadrant1Fill,
    quadrant2Fill: themeVariables.quadrant2Fill,
    quadrant3Fill: themeVariables.quadrant3Fill,
    quadrant4Fill: themeVariables.quadrant4Fill,
    quadrant1TextFill: themeVariables.quadrant1TextFill,
    quadrant2TextFill: themeVariables.quadrant2TextFill,
    quadrant3TextFill: themeVariables.quadrant3TextFill,
    quadrant4TextFill: themeVariables.quadrant4TextFill,
    quadrantPointFill: themeVariables.quadrantPointFill,
    quadrantPointTextFill: themeVariables.quadrantPointTextFill,
    quadrantXAxisTextFill: themeVariables.quadrantXAxisTextFill,
    quadrantYAxisTextFill: themeVariables.quadrantYAxisTextFill,
    quadrantExternalBorderStrokeFill: themeVariables.quadrantExternalBorderStrokeFill,
    quadrantInternalBorderStrokeFill: themeVariables.quadrantInternalBorderStrokeFill,
    quadrantTitleFill: themeVariables.quadrantTitleFill
  });
  quadrantBuilder.setData({ titleText: index.getDiagramTitle() });
  return quadrantBuilder.build();
}
const clear = function() {
  quadrantBuilder.clear();
  index.clear();
};
const db = {
  setWidth,
  setHeight,
  setQuadrant1Text,
  setQuadrant2Text,
  setQuadrant3Text,
  setQuadrant4Text,
  setXAxisLeftText,
  setXAxisRightText,
  setYAxisTopText,
  setYAxisBottomText,
  addPoint,
  getQuadrantData,
  clear,
  setAccTitle: index.setAccTitle,
  getAccTitle: index.getAccTitle,
  setDiagramTitle: index.setDiagramTitle,
  getDiagramTitle: index.getDiagramTitle,
  getAccDescription: index.getAccDescription,
  setAccDescription: index.setAccDescription
};
const draw = (txt, id, _version, diagObj) => {
  var _a, _b, _c;
  function getDominantBaseLine(horizontalPos) {
    return horizontalPos === "top" ? "hanging" : "middle";
  }
  function getTextAnchor(verticalPos) {
    return verticalPos === "left" ? "start" : "middle";
  }
  function getTransformation(data) {
    return `translate(${data.x}, ${data.y}) rotate(${data.rotation || 0})`;
  }
  const conf = index.getConfig();
  index.log$1.debug("Rendering quadrant chart\n" + txt);
  const securityLevel = conf.securityLevel;
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = index.select("#i" + id);
  }
  const root = securityLevel === "sandbox" ? index.select(sandboxElement.nodes()[0].contentDocument.body) : index.select("body");
  const svg = root.select(`[id="${id}"]`);
  const group = svg.append("g").attr("class", "main");
  const width = ((_a = conf.quadrantChart) == null ? void 0 : _a.chartWidth) || 500;
  const height = ((_b = conf.quadrantChart) == null ? void 0 : _b.chartHeight) || 500;
  index.configureSvgSize(svg, height, width, ((_c = conf.quadrantChart) == null ? void 0 : _c.useMaxWidth) || true);
  svg.attr("viewBox", "0 0 " + width + " " + height);
  diagObj.db.setHeight(height);
  diagObj.db.setWidth(width);
  const quadrantData = diagObj.db.getQuadrantData();
  const quadrantsGroup = group.append("g").attr("class", "quadrants");
  const borderGroup = group.append("g").attr("class", "border");
  const dataPointGroup = group.append("g").attr("class", "data-points");
  const labelGroup = group.append("g").attr("class", "labels");
  const titleGroup = group.append("g").attr("class", "title");
  if (quadrantData.title) {
    titleGroup.append("text").attr("x", 0).attr("y", 0).attr("fill", quadrantData.title.fill).attr("font-size", quadrantData.title.fontSize).attr("dominant-baseline", getDominantBaseLine(quadrantData.title.horizontalPos)).attr("text-anchor", getTextAnchor(quadrantData.title.verticalPos)).attr("transform", getTransformation(quadrantData.title)).text(quadrantData.title.text);
  }
  if (quadrantData.borderLines) {
    borderGroup.selectAll("line").data(quadrantData.borderLines).enter().append("line").attr("x1", (data) => data.x1).attr("y1", (data) => data.y1).attr("x2", (data) => data.x2).attr("y2", (data) => data.y2).style("stroke", (data) => data.strokeFill).style("stroke-width", (data) => data.strokeWidth);
  }
  const quadrants = quadrantsGroup.selectAll("g.quadrant").data(quadrantData.quadrants).enter().append("g").attr("class", "quadrant");
  quadrants.append("rect").attr("x", (data) => data.x).attr("y", (data) => data.y).attr("width", (data) => data.width).attr("height", (data) => data.height).attr("fill", (data) => data.fill);
  quadrants.append("text").attr("x", 0).attr("y", 0).attr("fill", (data) => data.text.fill).attr("font-size", (data) => data.text.fontSize).attr(
    "dominant-baseline",
    (data) => getDominantBaseLine(data.text.horizontalPos)
  ).attr("text-anchor", (data) => getTextAnchor(data.text.verticalPos)).attr("transform", (data) => getTransformation(data.text)).text((data) => data.text.text);
  const labels = labelGroup.selectAll("g.label").data(quadrantData.axisLabels).enter().append("g").attr("class", "label");
  labels.append("text").attr("x", 0).attr("y", 0).text((data) => data.text).attr("fill", (data) => data.fill).attr("font-size", (data) => data.fontSize).attr("dominant-baseline", (data) => getDominantBaseLine(data.horizontalPos)).attr("text-anchor", (data) => getTextAnchor(data.verticalPos)).attr("transform", (data) => getTransformation(data));
  const dataPoints = dataPointGroup.selectAll("g.data-point").data(quadrantData.points).enter().append("g").attr("class", "data-point");
  dataPoints.append("circle").attr("cx", (data) => data.x).attr("cy", (data) => data.y).attr("r", (data) => data.radius).attr("fill", (data) => data.fill);
  dataPoints.append("text").attr("x", 0).attr("y", 0).text((data) => data.text.text).attr("fill", (data) => data.text.fill).attr("font-size", (data) => data.text.fontSize).attr(
    "dominant-baseline",
    (data) => getDominantBaseLine(data.text.horizontalPos)
  ).attr("text-anchor", (data) => getTextAnchor(data.text.verticalPos)).attr("transform", (data) => getTransformation(data.text));
};
const renderer = {
  draw
};
const diagram = {
  parser: parser$1,
  db,
  renderer,
  styles: () => ""
};

exports.diagram = diagram;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhZHJhbnREaWFncmFtLTEyMGUyZjE5LWExZGQ5ZTA0LmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvbWVybWFpZC9kaXN0L3F1YWRyYW50RGlhZ3JhbS0xMjBlMmYxOS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFIGFzIGdldFRoZW1lVmFyaWFibGVzLCBCIGFzIGRlZmF1bHRDb25maWcsIGwgYXMgbG9nLCBzIGFzIHNldEFjY1RpdGxlLCBnIGFzIGdldEFjY1RpdGxlLCBxIGFzIHNldERpYWdyYW1UaXRsZSwgdCBhcyBnZXREaWFncmFtVGl0bGUsIGEgYXMgZ2V0QWNjRGVzY3JpcHRpb24sIGIgYXMgc2V0QWNjRGVzY3JpcHRpb24sIGMgYXMgZ2V0Q29uZmlnLCB2IGFzIGNsZWFyJDEsIGQgYXMgc2FuaXRpemVUZXh0LCBpIGFzIGNvbmZpZ3VyZVN2Z1NpemUgfSBmcm9tIFwiLi9tZXJtYWlkLWI1ODYwYjU0LmpzXCI7XG5pbXBvcnQgeyBzY2FsZUxpbmVhciwgc2VsZWN0IH0gZnJvbSBcImQzXCI7XG5pbXBvcnQgXCJ0cy1kZWRlbnRcIjtcbmltcG9ydCBcImRheWpzXCI7XG5pbXBvcnQgXCJAYnJhaW50cmVlL3Nhbml0aXplLXVybFwiO1xuaW1wb3J0IFwiZG9tcHVyaWZ5XCI7XG5pbXBvcnQgXCJraHJvbWFcIjtcbmltcG9ydCBcImxvZGFzaC1lcy9tZW1vaXplLmpzXCI7XG5pbXBvcnQgXCJsb2Rhc2gtZXMvbWVyZ2UuanNcIjtcbmltcG9ydCBcInN0eWxpc1wiO1xuaW1wb3J0IFwibG9kYXNoLWVzL2lzRW1wdHkuanNcIjtcbnZhciBwYXJzZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG8gPSBmdW5jdGlvbihrLCB2LCBvMiwgbCkge1xuICAgIGZvciAobzIgPSBvMiB8fCB7fSwgbCA9IGsubGVuZ3RoOyBsLS07IG8yW2tbbF1dID0gdilcbiAgICAgIDtcbiAgICByZXR1cm4gbzI7XG4gIH0sICRWMCA9IFsxLCAzXSwgJFYxID0gWzEsIDRdLCAkVjIgPSBbMSwgNV0sICRWMyA9IFsxLCA2XSwgJFY0ID0gWzEsIDddLCAkVjUgPSBbMSwgNSwgMTMsIDE1LCAxNywgMTksIDIwLCAyNSwgMjcsIDI4LCAyOSwgMzAsIDMxLCAzMiwgMzMsIDM0LCAzNywgMzgsIDQwLCA0MSwgNDIsIDQzLCA0NCwgNDUsIDQ2LCA0NywgNDgsIDQ5LCA1MF0sICRWNiA9IFsxLCA1LCA2LCAxMywgMTUsIDE3LCAxOSwgMjAsIDI1LCAyNywgMjgsIDI5LCAzMCwgMzEsIDMyLCAzMywgMzQsIDM3LCAzOCwgNDAsIDQxLCA0MiwgNDMsIDQ0LCA0NSwgNDYsIDQ3LCA0OCwgNDksIDUwXSwgJFY3ID0gWzMyLCAzMywgMzRdLCAkVjggPSBbMiwgN10sICRWOSA9IFsxLCAxM10sICRWYSA9IFsxLCAxN10sICRWYiA9IFsxLCAxOF0sICRWYyA9IFsxLCAxOV0sICRWZCA9IFsxLCAyMF0sICRWZSA9IFsxLCAyMV0sICRWZiA9IFsxLCAyMl0sICRWZyA9IFsxLCAyM10sICRWaCA9IFsxLCAyNF0sICRWaSA9IFsxLCAyNV0sICRWaiA9IFsxLCAyNl0sICRWayA9IFsxLCAyN10sICRWbCA9IFsxLCAzMF0sICRWbSA9IFsxLCAzMV0sICRWbiA9IFsxLCAzMl0sICRWbyA9IFsxLCAzM10sICRWcCA9IFsxLCAzNF0sICRWcSA9IFsxLCAzNV0sICRWciA9IFsxLCAzNl0sICRWcyA9IFsxLCAzN10sICRWdCA9IFsxLCAzOF0sICRWdSA9IFsxLCAzOV0sICRWdiA9IFsxLCA0MF0sICRWdyA9IFsxLCA0MV0sICRWeCA9IFsxLCA0Ml0sICRWeSA9IFsxLCA1N10sICRWeiA9IFsxLCA1OF0sICRWQSA9IFs1LCAyMiwgMjYsIDMyLCAzMywgMzQsIDQwLCA0MSwgNDIsIDQzLCA0NCwgNDUsIDQ2LCA0NywgNDgsIDQ5LCA1MCwgNTFdO1xuICB2YXIgcGFyc2VyMiA9IHtcbiAgICB0cmFjZTogZnVuY3Rpb24gdHJhY2UoKSB7XG4gICAgfSxcbiAgICB5eToge30sXG4gICAgc3ltYm9sc186IHsgXCJlcnJvclwiOiAyLCBcInN0YXJ0XCI6IDMsIFwiZW9sXCI6IDQsIFwiU1BBQ0VcIjogNSwgXCJRVUFEUkFOVFwiOiA2LCBcImRvY3VtZW50XCI6IDcsIFwibGluZVwiOiA4LCBcInN0YXRlbWVudFwiOiA5LCBcImF4aXNEZXRhaWxzXCI6IDEwLCBcInF1YWRyYW50RGV0YWlsc1wiOiAxMSwgXCJwb2ludHNcIjogMTIsIFwidGl0bGVcIjogMTMsIFwidGl0bGVfdmFsdWVcIjogMTQsIFwiYWNjX3RpdGxlXCI6IDE1LCBcImFjY190aXRsZV92YWx1ZVwiOiAxNiwgXCJhY2NfZGVzY3JcIjogMTcsIFwiYWNjX2Rlc2NyX3ZhbHVlXCI6IDE4LCBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIjogMTksIFwic2VjdGlvblwiOiAyMCwgXCJ0ZXh0XCI6IDIxLCBcInBvaW50X3N0YXJ0XCI6IDIyLCBcInBvaW50X3hcIjogMjMsIFwicG9pbnRfeVwiOiAyNCwgXCJYLUFYSVNcIjogMjUsIFwiQVhJUy1URVhULURFTElNSVRFUlwiOiAyNiwgXCJZLUFYSVNcIjogMjcsIFwiUVVBRFJBTlRfMVwiOiAyOCwgXCJRVUFEUkFOVF8yXCI6IDI5LCBcIlFVQURSQU5UXzNcIjogMzAsIFwiUVVBRFJBTlRfNFwiOiAzMSwgXCJORVdMSU5FXCI6IDMyLCBcIlNFTUlcIjogMzMsIFwiRU9GXCI6IDM0LCBcImFscGhhTnVtVG9rZW5cIjogMzUsIFwidGV4dE5vVGFnc1Rva2VuXCI6IDM2LCBcIlNUUlwiOiAzNywgXCJNRF9TVFJcIjogMzgsIFwiYWxwaGFOdW1cIjogMzksIFwiUFVOQ1RVQVRJT05cIjogNDAsIFwiQU1QXCI6IDQxLCBcIk5VTVwiOiA0MiwgXCJBTFBIQVwiOiA0MywgXCJDT01NQVwiOiA0NCwgXCJQTFVTXCI6IDQ1LCBcIkVRVUFMU1wiOiA0NiwgXCJNVUxUXCI6IDQ3LCBcIkRPVFwiOiA0OCwgXCJCUktUXCI6IDQ5LCBcIlVOREVSU0NPUkVcIjogNTAsIFwiTUlOVVNcIjogNTEsIFwiJGFjY2VwdFwiOiAwLCBcIiRlbmRcIjogMSB9LFxuICAgIHRlcm1pbmFsc186IHsgMjogXCJlcnJvclwiLCA1OiBcIlNQQUNFXCIsIDY6IFwiUVVBRFJBTlRcIiwgMTM6IFwidGl0bGVcIiwgMTQ6IFwidGl0bGVfdmFsdWVcIiwgMTU6IFwiYWNjX3RpdGxlXCIsIDE2OiBcImFjY190aXRsZV92YWx1ZVwiLCAxNzogXCJhY2NfZGVzY3JcIiwgMTg6IFwiYWNjX2Rlc2NyX3ZhbHVlXCIsIDE5OiBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIiwgMjA6IFwic2VjdGlvblwiLCAyMjogXCJwb2ludF9zdGFydFwiLCAyMzogXCJwb2ludF94XCIsIDI0OiBcInBvaW50X3lcIiwgMjU6IFwiWC1BWElTXCIsIDI2OiBcIkFYSVMtVEVYVC1ERUxJTUlURVJcIiwgMjc6IFwiWS1BWElTXCIsIDI4OiBcIlFVQURSQU5UXzFcIiwgMjk6IFwiUVVBRFJBTlRfMlwiLCAzMDogXCJRVUFEUkFOVF8zXCIsIDMxOiBcIlFVQURSQU5UXzRcIiwgMzI6IFwiTkVXTElORVwiLCAzMzogXCJTRU1JXCIsIDM0OiBcIkVPRlwiLCAzNzogXCJTVFJcIiwgMzg6IFwiTURfU1RSXCIsIDQwOiBcIlBVTkNUVUFUSU9OXCIsIDQxOiBcIkFNUFwiLCA0MjogXCJOVU1cIiwgNDM6IFwiQUxQSEFcIiwgNDQ6IFwiQ09NTUFcIiwgNDU6IFwiUExVU1wiLCA0NjogXCJFUVVBTFNcIiwgNDc6IFwiTVVMVFwiLCA0ODogXCJET1RcIiwgNDk6IFwiQlJLVFwiLCA1MDogXCJVTkRFUlNDT1JFXCIsIDUxOiBcIk1JTlVTXCIgfSxcbiAgICBwcm9kdWN0aW9uc186IFswLCBbMywgMl0sIFszLCAyXSwgWzMsIDJdLCBbNywgMF0sIFs3LCAyXSwgWzgsIDJdLCBbOSwgMF0sIFs5LCAyXSwgWzksIDFdLCBbOSwgMV0sIFs5LCAxXSwgWzksIDJdLCBbOSwgMl0sIFs5LCAyXSwgWzksIDFdLCBbOSwgMV0sIFsxMiwgNF0sIFsxMCwgNF0sIFsxMCwgM10sIFsxMCwgMl0sIFsxMCwgNF0sIFsxMCwgM10sIFsxMCwgMl0sIFsxMSwgMl0sIFsxMSwgMl0sIFsxMSwgMl0sIFsxMSwgMl0sIFs0LCAxXSwgWzQsIDFdLCBbNCwgMV0sIFsyMSwgMV0sIFsyMSwgMl0sIFsyMSwgMV0sIFsyMSwgMV0sIFszOSwgMV0sIFszOSwgMl0sIFszNSwgMV0sIFszNSwgMV0sIFszNSwgMV0sIFszNSwgMV0sIFszNSwgMV0sIFszNSwgMV0sIFszNSwgMV0sIFszNSwgMV0sIFszNSwgMV0sIFszNSwgMV0sIFszNSwgMV0sIFszNiwgMV0sIFszNiwgMV0sIFszNiwgMV1dLFxuICAgIHBlcmZvcm1BY3Rpb246IGZ1bmN0aW9uIGFub255bW91cyh5eXRleHQsIHl5bGVuZywgeXlsaW5lbm8sIHl5LCB5eXN0YXRlLCAkJCwgXyQpIHtcbiAgICAgIHZhciAkMCA9ICQkLmxlbmd0aCAtIDE7XG4gICAgICBzd2l0Y2ggKHl5c3RhdGUpIHtcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0udHJpbSgpO1xuICAgICAgICAgIHl5LnNldERpYWdyYW1UaXRsZSh0aGlzLiQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXS50cmltKCk7XG4gICAgICAgICAgeXkuc2V0QWNjVGl0bGUodGhpcy4kKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0udHJpbSgpO1xuICAgICAgICAgIHl5LnNldEFjY0Rlc2NyaXB0aW9uKHRoaXMuJCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgeXkuYWRkU2VjdGlvbigkJFskMF0uc3Vic3RyKDgpKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0uc3Vic3RyKDgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgIHl5LmFkZFBvaW50KCQkWyQwIC0gM10sICQkWyQwIC0gMV0sICQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgeXkuc2V0WEF4aXNMZWZ0VGV4dCgkJFskMCAtIDJdKTtcbiAgICAgICAgICB5eS5zZXRYQXhpc1JpZ2h0VGV4dCgkJFskMF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICQkWyQwIC0gMV0udGV4dCArPSBcIiDin7YgXCI7XG4gICAgICAgICAgeXkuc2V0WEF4aXNMZWZ0VGV4dCgkJFskMCAtIDFdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICB5eS5zZXRYQXhpc0xlZnRUZXh0KCQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgeXkuc2V0WUF4aXNCb3R0b21UZXh0KCQkWyQwIC0gMl0pO1xuICAgICAgICAgIHl5LnNldFlBeGlzVG9wVGV4dCgkJFskMF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICQkWyQwIC0gMV0udGV4dCArPSBcIiDin7YgXCI7XG4gICAgICAgICAgeXkuc2V0WUF4aXNCb3R0b21UZXh0KCQkWyQwIC0gMV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgIHl5LnNldFlBeGlzQm90dG9tVGV4dCgkJFskMF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgIHl5LnNldFF1YWRyYW50MVRleHQoJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICB5eS5zZXRRdWFkcmFudDJUZXh0KCQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgeXkuc2V0UXVhZHJhbnQzVGV4dCgkJFskMF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgIHl5LnNldFF1YWRyYW50NFRleHQoJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICB0aGlzLiQgPSB7IHRleHQ6ICQkWyQwXSwgdHlwZTogXCJ0ZXh0XCIgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICB0aGlzLiQgPSB7IHRleHQ6ICQkWyQwIC0gMV0udGV4dCArIFwiXCIgKyAkJFskMF0sIHR5cGU6ICQkWyQwIC0gMV0udHlwZSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgIHRoaXMuJCA9IHsgdGV4dDogJCRbJDBdLCB0eXBlOiBcInRleHRcIiB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgIHRoaXMuJCA9IHsgdGV4dDogJCRbJDBdLCB0eXBlOiBcIm1hcmtkb3duXCIgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNTpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzY6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDAgLSAxXSArIFwiXCIgKyAkJFskMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcbiAgICB0YWJsZTogW3sgMzogMSwgNDogMiwgNTogJFYwLCA2OiAkVjEsIDMyOiAkVjIsIDMzOiAkVjMsIDM0OiAkVjQgfSwgeyAxOiBbM10gfSwgeyAzOiA4LCA0OiAyLCA1OiAkVjAsIDY6ICRWMSwgMzI6ICRWMiwgMzM6ICRWMywgMzQ6ICRWNCB9LCB7IDM6IDksIDQ6IDIsIDU6ICRWMCwgNjogJFYxLCAzMjogJFYyLCAzMzogJFYzLCAzNDogJFY0IH0sIG8oJFY1LCBbMiwgNF0sIHsgNzogMTAgfSksIG8oJFY2LCBbMiwgMjhdKSwgbygkVjYsIFsyLCAyOV0pLCBvKCRWNiwgWzIsIDMwXSksIHsgMTogWzIsIDFdIH0sIHsgMTogWzIsIDJdIH0sIG8oJFY3LCAkVjgsIHsgODogMTEsIDk6IDEyLCAxMDogMTQsIDExOiAxNSwgMTI6IDE2LCAyMTogMjgsIDM1OiAyOSwgMTogWzIsIDNdLCA1OiAkVjksIDEzOiAkVmEsIDE1OiAkVmIsIDE3OiAkVmMsIDE5OiAkVmQsIDIwOiAkVmUsIDI1OiAkVmYsIDI3OiAkVmcsIDI4OiAkVmgsIDI5OiAkVmksIDMwOiAkVmosIDMxOiAkVmssIDM3OiAkVmwsIDM4OiAkVm0sIDQwOiAkVm4sIDQxOiAkVm8sIDQyOiAkVnAsIDQzOiAkVnEsIDQ0OiAkVnIsIDQ1OiAkVnMsIDQ2OiAkVnQsIDQ3OiAkVnUsIDQ4OiAkVnYsIDQ5OiAkVncsIDUwOiAkVnggfSksIG8oJFY1LCBbMiwgNV0pLCB7IDQ6IDQzLCAzMjogJFYyLCAzMzogJFYzLCAzNDogJFY0IH0sIG8oJFY3LCAkVjgsIHsgMTA6IDE0LCAxMTogMTUsIDEyOiAxNiwgMjE6IDI4LCAzNTogMjksIDk6IDQ0LCA1OiAkVjksIDEzOiAkVmEsIDE1OiAkVmIsIDE3OiAkVmMsIDE5OiAkVmQsIDIwOiAkVmUsIDI1OiAkVmYsIDI3OiAkVmcsIDI4OiAkVmgsIDI5OiAkVmksIDMwOiAkVmosIDMxOiAkVmssIDM3OiAkVmwsIDM4OiAkVm0sIDQwOiAkVm4sIDQxOiAkVm8sIDQyOiAkVnAsIDQzOiAkVnEsIDQ0OiAkVnIsIDQ1OiAkVnMsIDQ2OiAkVnQsIDQ3OiAkVnUsIDQ4OiAkVnYsIDQ5OiAkVncsIDUwOiAkVnggfSksIG8oJFY3LCBbMiwgOV0pLCBvKCRWNywgWzIsIDEwXSksIG8oJFY3LCBbMiwgMTFdKSwgeyAxNDogWzEsIDQ1XSB9LCB7IDE2OiBbMSwgNDZdIH0sIHsgMTg6IFsxLCA0N10gfSwgbygkVjcsIFsyLCAxNV0pLCBvKCRWNywgWzIsIDE2XSksIHsgMjE6IDQ4LCAzNTogMjksIDM3OiAkVmwsIDM4OiAkVm0sIDQwOiAkVm4sIDQxOiAkVm8sIDQyOiAkVnAsIDQzOiAkVnEsIDQ0OiAkVnIsIDQ1OiAkVnMsIDQ2OiAkVnQsIDQ3OiAkVnUsIDQ4OiAkVnYsIDQ5OiAkVncsIDUwOiAkVnggfSwgeyAyMTogNDksIDM1OiAyOSwgMzc6ICRWbCwgMzg6ICRWbSwgNDA6ICRWbiwgNDE6ICRWbywgNDI6ICRWcCwgNDM6ICRWcSwgNDQ6ICRWciwgNDU6ICRWcywgNDY6ICRWdCwgNDc6ICRWdSwgNDg6ICRWdiwgNDk6ICRWdywgNTA6ICRWeCB9LCB7IDIxOiA1MCwgMzU6IDI5LCAzNzogJFZsLCAzODogJFZtLCA0MDogJFZuLCA0MTogJFZvLCA0MjogJFZwLCA0MzogJFZxLCA0NDogJFZyLCA0NTogJFZzLCA0NjogJFZ0LCA0NzogJFZ1LCA0ODogJFZ2LCA0OTogJFZ3LCA1MDogJFZ4IH0sIHsgMjE6IDUxLCAzNTogMjksIDM3OiAkVmwsIDM4OiAkVm0sIDQwOiAkVm4sIDQxOiAkVm8sIDQyOiAkVnAsIDQzOiAkVnEsIDQ0OiAkVnIsIDQ1OiAkVnMsIDQ2OiAkVnQsIDQ3OiAkVnUsIDQ4OiAkVnYsIDQ5OiAkVncsIDUwOiAkVnggfSwgeyAyMTogNTIsIDM1OiAyOSwgMzc6ICRWbCwgMzg6ICRWbSwgNDA6ICRWbiwgNDE6ICRWbywgNDI6ICRWcCwgNDM6ICRWcSwgNDQ6ICRWciwgNDU6ICRWcywgNDY6ICRWdCwgNDc6ICRWdSwgNDg6ICRWdiwgNDk6ICRWdywgNTA6ICRWeCB9LCB7IDIxOiA1MywgMzU6IDI5LCAzNzogJFZsLCAzODogJFZtLCA0MDogJFZuLCA0MTogJFZvLCA0MjogJFZwLCA0MzogJFZxLCA0NDogJFZyLCA0NTogJFZzLCA0NjogJFZ0LCA0NzogJFZ1LCA0ODogJFZ2LCA0OTogJFZ3LCA1MDogJFZ4IH0sIHsgNTogJFZ5LCAyMjogWzEsIDU0XSwgMzU6IDU2LCAzNjogNTUsIDQwOiAkVm4sIDQxOiAkVm8sIDQyOiAkVnAsIDQzOiAkVnEsIDQ0OiAkVnIsIDQ1OiAkVnMsIDQ2OiAkVnQsIDQ3OiAkVnUsIDQ4OiAkVnYsIDQ5OiAkVncsIDUwOiAkVngsIDUxOiAkVnogfSwgbygkVkEsIFsyLCAzMV0pLCBvKCRWQSwgWzIsIDMzXSksIG8oJFZBLCBbMiwgMzRdKSwgbygkVkEsIFsyLCAzN10pLCBvKCRWQSwgWzIsIDM4XSksIG8oJFZBLCBbMiwgMzldKSwgbygkVkEsIFsyLCA0MF0pLCBvKCRWQSwgWzIsIDQxXSksIG8oJFZBLCBbMiwgNDJdKSwgbygkVkEsIFsyLCA0M10pLCBvKCRWQSwgWzIsIDQ0XSksIG8oJFZBLCBbMiwgNDVdKSwgbygkVkEsIFsyLCA0Nl0pLCBvKCRWQSwgWzIsIDQ3XSksIG8oJFY1LCBbMiwgNl0pLCBvKCRWNywgWzIsIDhdKSwgbygkVjcsIFsyLCAxMl0pLCBvKCRWNywgWzIsIDEzXSksIG8oJFY3LCBbMiwgMTRdKSwgbygkVjcsIFsyLCAyMF0sIHsgMzY6IDU1LCAzNTogNTYsIDU6ICRWeSwgMjY6IFsxLCA1OV0sIDQwOiAkVm4sIDQxOiAkVm8sIDQyOiAkVnAsIDQzOiAkVnEsIDQ0OiAkVnIsIDQ1OiAkVnMsIDQ2OiAkVnQsIDQ3OiAkVnUsIDQ4OiAkVnYsIDQ5OiAkVncsIDUwOiAkVngsIDUxOiAkVnogfSksIG8oJFY3LCBbMiwgMjNdLCB7IDM2OiA1NSwgMzU6IDU2LCA1OiAkVnksIDI2OiBbMSwgNjBdLCA0MDogJFZuLCA0MTogJFZvLCA0MjogJFZwLCA0MzogJFZxLCA0NDogJFZyLCA0NTogJFZzLCA0NjogJFZ0LCA0NzogJFZ1LCA0ODogJFZ2LCA0OTogJFZ3LCA1MDogJFZ4LCA1MTogJFZ6IH0pLCBvKCRWNywgWzIsIDI0XSwgeyAzNjogNTUsIDM1OiA1NiwgNTogJFZ5LCA0MDogJFZuLCA0MTogJFZvLCA0MjogJFZwLCA0MzogJFZxLCA0NDogJFZyLCA0NTogJFZzLCA0NjogJFZ0LCA0NzogJFZ1LCA0ODogJFZ2LCA0OTogJFZ3LCA1MDogJFZ4LCA1MTogJFZ6IH0pLCBvKCRWNywgWzIsIDI1XSwgeyAzNjogNTUsIDM1OiA1NiwgNTogJFZ5LCA0MDogJFZuLCA0MTogJFZvLCA0MjogJFZwLCA0MzogJFZxLCA0NDogJFZyLCA0NTogJFZzLCA0NjogJFZ0LCA0NzogJFZ1LCA0ODogJFZ2LCA0OTogJFZ3LCA1MDogJFZ4LCA1MTogJFZ6IH0pLCBvKCRWNywgWzIsIDI2XSwgeyAzNjogNTUsIDM1OiA1NiwgNTogJFZ5LCA0MDogJFZuLCA0MTogJFZvLCA0MjogJFZwLCA0MzogJFZxLCA0NDogJFZyLCA0NTogJFZzLCA0NjogJFZ0LCA0NzogJFZ1LCA0ODogJFZ2LCA0OTogJFZ3LCA1MDogJFZ4LCA1MTogJFZ6IH0pLCBvKCRWNywgWzIsIDI3XSwgeyAzNjogNTUsIDM1OiA1NiwgNTogJFZ5LCA0MDogJFZuLCA0MTogJFZvLCA0MjogJFZwLCA0MzogJFZxLCA0NDogJFZyLCA0NTogJFZzLCA0NjogJFZ0LCA0NzogJFZ1LCA0ODogJFZ2LCA0OTogJFZ3LCA1MDogJFZ4LCA1MTogJFZ6IH0pLCB7IDIzOiBbMSwgNjFdIH0sIG8oJFZBLCBbMiwgMzJdKSwgbygkVkEsIFsyLCA0OF0pLCBvKCRWQSwgWzIsIDQ5XSksIG8oJFZBLCBbMiwgNTBdKSwgbygkVjcsIFsyLCAxOV0sIHsgMzU6IDI5LCAyMTogNjIsIDM3OiAkVmwsIDM4OiAkVm0sIDQwOiAkVm4sIDQxOiAkVm8sIDQyOiAkVnAsIDQzOiAkVnEsIDQ0OiAkVnIsIDQ1OiAkVnMsIDQ2OiAkVnQsIDQ3OiAkVnUsIDQ4OiAkVnYsIDQ5OiAkVncsIDUwOiAkVnggfSksIG8oJFY3LCBbMiwgMjJdLCB7IDM1OiAyOSwgMjE6IDYzLCAzNzogJFZsLCAzODogJFZtLCA0MDogJFZuLCA0MTogJFZvLCA0MjogJFZwLCA0MzogJFZxLCA0NDogJFZyLCA0NTogJFZzLCA0NjogJFZ0LCA0NzogJFZ1LCA0ODogJFZ2LCA0OTogJFZ3LCA1MDogJFZ4IH0pLCB7IDI0OiBbMSwgNjRdIH0sIG8oJFY3LCBbMiwgMThdLCB7IDM2OiA1NSwgMzU6IDU2LCA1OiAkVnksIDQwOiAkVm4sIDQxOiAkVm8sIDQyOiAkVnAsIDQzOiAkVnEsIDQ0OiAkVnIsIDQ1OiAkVnMsIDQ2OiAkVnQsIDQ3OiAkVnUsIDQ4OiAkVnYsIDQ5OiAkVncsIDUwOiAkVngsIDUxOiAkVnogfSksIG8oJFY3LCBbMiwgMjFdLCB7IDM2OiA1NSwgMzU6IDU2LCA1OiAkVnksIDQwOiAkVm4sIDQxOiAkVm8sIDQyOiAkVnAsIDQzOiAkVnEsIDQ0OiAkVnIsIDQ1OiAkVnMsIDQ2OiAkVnQsIDQ3OiAkVnUsIDQ4OiAkVnYsIDQ5OiAkVncsIDUwOiAkVngsIDUxOiAkVnogfSksIG8oJFY3LCBbMiwgMTddKV0sXG4gICAgZGVmYXVsdEFjdGlvbnM6IHsgODogWzIsIDFdLCA5OiBbMiwgMl0gfSxcbiAgICBwYXJzZUVycm9yOiBmdW5jdGlvbiBwYXJzZUVycm9yKHN0ciwgaGFzaCkge1xuICAgICAgaWYgKGhhc2gucmVjb3ZlcmFibGUpIHtcbiAgICAgICAgdGhpcy50cmFjZShzdHIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKHN0cik7XG4gICAgICAgIGVycm9yLmhhc2ggPSBoYXNoO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShpbnB1dCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzLCBzdGFjayA9IFswXSwgdHN0YWNrID0gW10sIHZzdGFjayA9IFtudWxsXSwgbHN0YWNrID0gW10sIHRhYmxlID0gdGhpcy50YWJsZSwgeXl0ZXh0ID0gXCJcIiwgeXlsaW5lbm8gPSAwLCB5eWxlbmcgPSAwLCBURVJST1IgPSAyLCBFT0YgPSAxO1xuICAgICAgdmFyIGFyZ3MgPSBsc3RhY2suc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgdmFyIGxleGVyMiA9IE9iamVjdC5jcmVhdGUodGhpcy5sZXhlcik7XG4gICAgICB2YXIgc2hhcmVkU3RhdGUgPSB7IHl5OiB7fSB9O1xuICAgICAgZm9yICh2YXIgayBpbiB0aGlzLnl5KSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy55eSwgaykpIHtcbiAgICAgICAgICBzaGFyZWRTdGF0ZS55eVtrXSA9IHRoaXMueXlba107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxleGVyMi5zZXRJbnB1dChpbnB1dCwgc2hhcmVkU3RhdGUueXkpO1xuICAgICAgc2hhcmVkU3RhdGUueXkubGV4ZXIgPSBsZXhlcjI7XG4gICAgICBzaGFyZWRTdGF0ZS55eS5wYXJzZXIgPSB0aGlzO1xuICAgICAgaWYgKHR5cGVvZiBsZXhlcjIueXlsbG9jID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgbGV4ZXIyLnl5bGxvYyA9IHt9O1xuICAgICAgfVxuICAgICAgdmFyIHl5bG9jID0gbGV4ZXIyLnl5bGxvYztcbiAgICAgIGxzdGFjay5wdXNoKHl5bG9jKTtcbiAgICAgIHZhciByYW5nZXMgPSBsZXhlcjIub3B0aW9ucyAmJiBsZXhlcjIub3B0aW9ucy5yYW5nZXM7XG4gICAgICBpZiAodHlwZW9mIHNoYXJlZFN0YXRlLnl5LnBhcnNlRXJyb3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aGlzLnBhcnNlRXJyb3IgPSBzaGFyZWRTdGF0ZS55eS5wYXJzZUVycm9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYXJzZUVycm9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLnBhcnNlRXJyb3I7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBsZXgoKSB7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgdG9rZW4gPSB0c3RhY2sucG9wKCkgfHwgbGV4ZXIyLmxleCgpIHx8IEVPRjtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICB0c3RhY2sgPSB0b2tlbjtcbiAgICAgICAgICAgIHRva2VuID0gdHN0YWNrLnBvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0b2tlbiA9IHNlbGYuc3ltYm9sc19bdG9rZW5dIHx8IHRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgIH1cbiAgICAgIHZhciBzeW1ib2wsIHN0YXRlLCBhY3Rpb24sIHIsIHl5dmFsID0ge30sIHAsIGxlbiwgbmV3U3RhdGUsIGV4cGVjdGVkO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgc3RhdGUgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdKSB7XG4gICAgICAgICAgYWN0aW9uID0gdGhpcy5kZWZhdWx0QWN0aW9uc1tzdGF0ZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHN5bWJvbCA9PT0gbnVsbCB8fCB0eXBlb2Ygc3ltYm9sID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHN5bWJvbCA9IGxleCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhY3Rpb24gPSB0YWJsZVtzdGF0ZV0gJiYgdGFibGVbc3RhdGVdW3N5bWJvbF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09IFwidW5kZWZpbmVkXCIgfHwgIWFjdGlvbi5sZW5ndGggfHwgIWFjdGlvblswXSkge1xuICAgICAgICAgIHZhciBlcnJTdHIgPSBcIlwiO1xuICAgICAgICAgIGV4cGVjdGVkID0gW107XG4gICAgICAgICAgZm9yIChwIGluIHRhYmxlW3N0YXRlXSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGVybWluYWxzX1twXSAmJiBwID4gVEVSUk9SKSB7XG4gICAgICAgICAgICAgIGV4cGVjdGVkLnB1c2goXCInXCIgKyB0aGlzLnRlcm1pbmFsc19bcF0gKyBcIidcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChsZXhlcjIuc2hvd1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICBlcnJTdHIgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoeXlsaW5lbm8gKyAxKSArIFwiOlxcblwiICsgbGV4ZXIyLnNob3dQb3NpdGlvbigpICsgXCJcXG5FeHBlY3RpbmcgXCIgKyBleHBlY3RlZC5qb2luKFwiLCBcIikgKyBcIiwgZ290ICdcIiArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgXCInXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVyclN0ciA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArICh5eWxpbmVubyArIDEpICsgXCI6IFVuZXhwZWN0ZWQgXCIgKyAoc3ltYm9sID09IEVPRiA/IFwiZW5kIG9mIGlucHV0XCIgOiBcIidcIiArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgXCInXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnBhcnNlRXJyb3IoZXJyU3RyLCB7XG4gICAgICAgICAgICB0ZXh0OiBsZXhlcjIubWF0Y2gsXG4gICAgICAgICAgICB0b2tlbjogdGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sLFxuICAgICAgICAgICAgbGluZTogbGV4ZXIyLnl5bGluZW5vLFxuICAgICAgICAgICAgbG9jOiB5eWxvYyxcbiAgICAgICAgICAgIGV4cGVjdGVkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvblswXSBpbnN0YW5jZW9mIEFycmF5ICYmIGFjdGlvbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyc2UgRXJyb3I6IG11bHRpcGxlIGFjdGlvbnMgcG9zc2libGUgYXQgc3RhdGU6IFwiICsgc3RhdGUgKyBcIiwgdG9rZW46IFwiICsgc3ltYm9sKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGFjdGlvblswXSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHN0YWNrLnB1c2goc3ltYm9sKTtcbiAgICAgICAgICAgIHZzdGFjay5wdXNoKGxleGVyMi55eXRleHQpO1xuICAgICAgICAgICAgbHN0YWNrLnB1c2gobGV4ZXIyLnl5bGxvYyk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGFjdGlvblsxXSk7XG4gICAgICAgICAgICBzeW1ib2wgPSBudWxsO1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB5eWxlbmcgPSBsZXhlcjIueXlsZW5nO1xuICAgICAgICAgICAgICB5eXRleHQgPSBsZXhlcjIueXl0ZXh0O1xuICAgICAgICAgICAgICB5eWxpbmVubyA9IGxleGVyMi55eWxpbmVubztcbiAgICAgICAgICAgICAgeXlsb2MgPSBsZXhlcjIueXlsbG9jO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgbGVuID0gdGhpcy5wcm9kdWN0aW9uc19bYWN0aW9uWzFdXVsxXTtcbiAgICAgICAgICAgIHl5dmFsLiQgPSB2c3RhY2tbdnN0YWNrLmxlbmd0aCAtIGxlbl07XG4gICAgICAgICAgICB5eXZhbC5fJCA9IHtcbiAgICAgICAgICAgICAgZmlyc3RfbGluZTogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5maXJzdF9saW5lLFxuICAgICAgICAgICAgICBsYXN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9saW5lLFxuICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5sYXN0X2NvbHVtblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChyYW5nZXMpIHtcbiAgICAgICAgICAgICAgeXl2YWwuXyQucmFuZ2UgPSBbXG4gICAgICAgICAgICAgICAgbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5yYW5nZVswXSxcbiAgICAgICAgICAgICAgICBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLnJhbmdlWzFdXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByID0gdGhpcy5wZXJmb3JtQWN0aW9uLmFwcGx5KHl5dmFsLCBbXG4gICAgICAgICAgICAgIHl5dGV4dCxcbiAgICAgICAgICAgICAgeXlsZW5nLFxuICAgICAgICAgICAgICB5eWxpbmVubyxcbiAgICAgICAgICAgICAgc2hhcmVkU3RhdGUueXksXG4gICAgICAgICAgICAgIGFjdGlvblsxXSxcbiAgICAgICAgICAgICAgdnN0YWNrLFxuICAgICAgICAgICAgICBsc3RhY2tcbiAgICAgICAgICAgIF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5zbGljZSgwLCAtMSAqIGxlbiAqIDIpO1xuICAgICAgICAgICAgICB2c3RhY2sgPSB2c3RhY2suc2xpY2UoMCwgLTEgKiBsZW4pO1xuICAgICAgICAgICAgICBsc3RhY2sgPSBsc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhY2sucHVzaCh0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzBdKTtcbiAgICAgICAgICAgIHZzdGFjay5wdXNoKHl5dmFsLiQpO1xuICAgICAgICAgICAgbHN0YWNrLnB1c2goeXl2YWwuXyQpO1xuICAgICAgICAgICAgbmV3U3RhdGUgPSB0YWJsZVtzdGFja1tzdGFjay5sZW5ndGggLSAyXV1bc3RhY2tbc3RhY2subGVuZ3RoIC0gMV1dO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXdTdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuICB2YXIgbGV4ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGV4ZXIyID0ge1xuICAgICAgRU9GOiAxLFxuICAgICAgcGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcbiAgICAgICAgaWYgKHRoaXMueXkucGFyc2VyKSB7XG4gICAgICAgICAgdGhpcy55eS5wYXJzZXIucGFyc2VFcnJvcihzdHIsIGhhc2gpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzdHIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcmVzZXRzIHRoZSBsZXhlciwgc2V0cyBuZXcgaW5wdXRcbiAgICAgIHNldElucHV0OiBmdW5jdGlvbihpbnB1dCwgeXkpIHtcbiAgICAgICAgdGhpcy55eSA9IHl5IHx8IHRoaXMueXkgfHwge307XG4gICAgICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG4gICAgICAgIHRoaXMuX21vcmUgPSB0aGlzLl9iYWNrdHJhY2sgPSB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy55eWxpbmVubyA9IHRoaXMueXlsZW5nID0gMDtcbiAgICAgICAgdGhpcy55eXRleHQgPSB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoID0gXCJcIjtcbiAgICAgICAgdGhpcy5jb25kaXRpb25TdGFjayA9IFtcIklOSVRJQUxcIl07XG4gICAgICAgIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgIGZpcnN0X2xpbmU6IDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiAwLFxuICAgICAgICAgIGxhc3RfbGluZTogMSxcbiAgICAgICAgICBsYXN0X2NvbHVtbjogMFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gWzAsIDBdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gY29uc3VtZXMgYW5kIHJldHVybnMgb25lIGNoYXIgZnJvbSB0aGUgaW5wdXRcbiAgICAgIGlucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy5faW5wdXRbMF07XG4gICAgICAgIHRoaXMueXl0ZXh0ICs9IGNoO1xuICAgICAgICB0aGlzLnl5bGVuZysrO1xuICAgICAgICB0aGlzLm9mZnNldCsrO1xuICAgICAgICB0aGlzLm1hdGNoICs9IGNoO1xuICAgICAgICB0aGlzLm1hdGNoZWQgKz0gY2g7XG4gICAgICAgIHZhciBsaW5lcyA9IGNoLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgaWYgKGxpbmVzKSB7XG4gICAgICAgICAgdGhpcy55eWxpbmVubysrO1xuICAgICAgICAgIHRoaXMueXlsbG9jLmxhc3RfbGluZSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMueXlsbG9jLmxhc3RfY29sdW1uKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZVsxXSsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UoMSk7XG4gICAgICAgIHJldHVybiBjaDtcbiAgICAgIH0sXG4gICAgICAvLyB1bnNoaWZ0cyBvbmUgY2hhciAob3IgYSBzdHJpbmcpIGludG8gdGhlIGlucHV0XG4gICAgICB1bnB1dDogZnVuY3Rpb24oY2gpIHtcbiAgICAgICAgdmFyIGxlbiA9IGNoLmxlbmd0aDtcbiAgICAgICAgdmFyIGxpbmVzID0gY2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSBjaCArIHRoaXMuX2lucHV0O1xuICAgICAgICB0aGlzLnl5dGV4dCA9IHRoaXMueXl0ZXh0LnN1YnN0cigwLCB0aGlzLnl5dGV4dC5sZW5ndGggLSBsZW4pO1xuICAgICAgICB0aGlzLm9mZnNldCAtPSBsZW47XG4gICAgICAgIHZhciBvbGRMaW5lcyA9IHRoaXMubWF0Y2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5tYXRjaCA9IHRoaXMubWF0Y2guc3Vic3RyKDAsIHRoaXMubWF0Y2gubGVuZ3RoIC0gMSk7XG4gICAgICAgIHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIDEpO1xuICAgICAgICBpZiAobGluZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHRoaXMueXlsaW5lbm8gLT0gbGluZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgciA9IHRoaXMueXlsbG9jLnJhbmdlO1xuICAgICAgICB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgbGFzdF9jb2x1bW46IGxpbmVzID8gKGxpbmVzLmxlbmd0aCA9PT0gb2xkTGluZXMubGVuZ3RoID8gdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIDogMCkgKyBvbGRMaW5lc1tvbGRMaW5lcy5sZW5ndGggLSBsaW5lcy5sZW5ndGhdLmxlbmd0aCAtIGxpbmVzWzBdLmxlbmd0aCA6IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiAtIGxlblxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3JbMF0sIHJbMF0gKyB0aGlzLnl5bGVuZyAtIGxlbl07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gYWN0aW9uLCBjYWNoZXMgbWF0Y2hlZCB0ZXh0IGFuZCBhcHBlbmRzIGl0IG9uIG5leHQgYWN0aW9uXG4gICAgICBtb3JlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fbW9yZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gYWN0aW9uLCBzaWduYWxzIHRoZSBsZXhlciB0aGF0IHRoaXMgcnVsZSBmYWlscyB0byBtYXRjaCB0aGUgaW5wdXQsIHNvIHRoZSBuZXh0IG1hdGNoaW5nIHJ1bGUgKHJlZ2V4KSBzaG91bGQgYmUgdGVzdGVkIGluc3RlYWQuXG4gICAgICByZWplY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcikge1xuICAgICAgICAgIHRoaXMuX2JhY2t0cmFjayA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBcIi4gWW91IGNhbiBvbmx5IGludm9rZSByZWplY3QoKSBpbiB0aGUgbGV4ZXIgd2hlbiB0aGUgbGV4ZXIgaXMgb2YgdGhlIGJhY2t0cmFja2luZyBwZXJzdWFzaW9uIChvcHRpb25zLmJhY2t0cmFja19sZXhlciA9IHRydWUpLlxcblwiICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIHJldGFpbiBmaXJzdCBuIGNoYXJhY3RlcnMgb2YgdGhlIG1hdGNoXG4gICAgICBsZXNzOiBmdW5jdGlvbihuKSB7XG4gICAgICAgIHRoaXMudW5wdXQodGhpcy5tYXRjaC5zbGljZShuKSk7XG4gICAgICB9LFxuICAgICAgLy8gZGlzcGxheXMgYWxyZWFkeSBtYXRjaGVkIGlucHV0LCBpLmUuIGZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgcGFzdElucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHBhc3QgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSB0aGlzLm1hdGNoLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiAocGFzdC5sZW5ndGggPiAyMCA/IFwiLi4uXCIgOiBcIlwiKSArIHBhc3Quc3Vic3RyKC0yMCkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIHVwY29taW5nIGlucHV0LCBpLmUuIGZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgdXBjb21pbmdJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBuZXh0ID0gdGhpcy5tYXRjaDtcbiAgICAgICAgaWYgKG5leHQubGVuZ3RoIDwgMjApIHtcbiAgICAgICAgICBuZXh0ICs9IHRoaXMuX2lucHV0LnN1YnN0cigwLCAyMCAtIG5leHQubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG5leHQuc3Vic3RyKDAsIDIwKSArIChuZXh0Lmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICB9LFxuICAgICAgLy8gZGlzcGxheXMgdGhlIGNoYXJhY3RlciBwb3NpdGlvbiB3aGVyZSB0aGUgbGV4aW5nIGVycm9yIG9jY3VycmVkLCBpLmUuIGZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgc2hvd1Bvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHByZSA9IHRoaXMucGFzdElucHV0KCk7XG4gICAgICAgIHZhciBjID0gbmV3IEFycmF5KHByZS5sZW5ndGggKyAxKS5qb2luKFwiLVwiKTtcbiAgICAgICAgcmV0dXJuIHByZSArIHRoaXMudXBjb21pbmdJbnB1dCgpICsgXCJcXG5cIiArIGMgKyBcIl5cIjtcbiAgICAgIH0sXG4gICAgICAvLyB0ZXN0IHRoZSBsZXhlZCB0b2tlbjogcmV0dXJuIEZBTFNFIHdoZW4gbm90IGEgbWF0Y2gsIG90aGVyd2lzZSByZXR1cm4gdG9rZW5cbiAgICAgIHRlc3RfbWF0Y2g6IGZ1bmN0aW9uKG1hdGNoLCBpbmRleGVkX3J1bGUpIHtcbiAgICAgICAgdmFyIHRva2VuLCBsaW5lcywgYmFja3VwO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcikge1xuICAgICAgICAgIGJhY2t1cCA9IHtcbiAgICAgICAgICAgIHl5bGluZW5vOiB0aGlzLnl5bGluZW5vLFxuICAgICAgICAgICAgeXlsbG9jOiB7XG4gICAgICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICAgIGxhc3RfbGluZTogdGhpcy5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogdGhpcy55eWxsb2MubGFzdF9jb2x1bW5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5eXRleHQ6IHRoaXMueXl0ZXh0LFxuICAgICAgICAgICAgbWF0Y2g6IHRoaXMubWF0Y2gsXG4gICAgICAgICAgICBtYXRjaGVzOiB0aGlzLm1hdGNoZXMsXG4gICAgICAgICAgICBtYXRjaGVkOiB0aGlzLm1hdGNoZWQsXG4gICAgICAgICAgICB5eWxlbmc6IHRoaXMueXlsZW5nLFxuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgICAgICAgIF9tb3JlOiB0aGlzLl9tb3JlLFxuICAgICAgICAgICAgX2lucHV0OiB0aGlzLl9pbnB1dCxcbiAgICAgICAgICAgIHl5OiB0aGlzLnl5LFxuICAgICAgICAgICAgY29uZGl0aW9uU3RhY2s6IHRoaXMuY29uZGl0aW9uU3RhY2suc2xpY2UoMCksXG4gICAgICAgICAgICBkb25lOiB0aGlzLmRvbmVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgICBiYWNrdXAueXlsbG9jLnJhbmdlID0gdGhpcy55eWxsb2MucmFuZ2Uuc2xpY2UoMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxpbmVzID0gbWF0Y2hbMF0ubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO1xuICAgICAgICBpZiAobGluZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGluZW5vICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5sYXN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiBsaW5lcyA/IGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdLmxlbmd0aCAtIGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdLm1hdGNoKC9cXHI/XFxuPy8pWzBdLmxlbmd0aCA6IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uICsgbWF0Y2hbMF0ubGVuZ3RoXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMueXl0ZXh0ICs9IG1hdGNoWzBdO1xuICAgICAgICB0aGlzLm1hdGNoICs9IG1hdGNoWzBdO1xuICAgICAgICB0aGlzLm1hdGNoZXMgPSBtYXRjaDtcbiAgICAgICAgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGg7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbdGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICs9IHRoaXMueXlsZW5nXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tb3JlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2JhY2t0cmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKG1hdGNoWzBdLmxlbmd0aCk7XG4gICAgICAgIHRoaXMubWF0Y2hlZCArPSBtYXRjaFswXTtcbiAgICAgICAgdG9rZW4gPSB0aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh0aGlzLCB0aGlzLnl5LCB0aGlzLCBpbmRleGVkX3J1bGUsIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSk7XG4gICAgICAgIGlmICh0aGlzLmRvbmUgJiYgdGhpcy5faW5wdXQpIHtcbiAgICAgICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYmFja3RyYWNrKSB7XG4gICAgICAgICAgZm9yICh2YXIgayBpbiBiYWNrdXApIHtcbiAgICAgICAgICAgIHRoaXNba10gPSBiYWNrdXBba107XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggaW4gaW5wdXRcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5faW5wdXQpIHtcbiAgICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0b2tlbiwgbWF0Y2gsIHRlbXBNYXRjaCwgaW5kZXg7XG4gICAgICAgIGlmICghdGhpcy5fbW9yZSkge1xuICAgICAgICAgIHRoaXMueXl0ZXh0ID0gXCJcIjtcbiAgICAgICAgICB0aGlzLm1hdGNoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcnVsZXMgPSB0aGlzLl9jdXJyZW50UnVsZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRlbXBNYXRjaCA9IHRoaXMuX2lucHV0Lm1hdGNoKHRoaXMucnVsZXNbcnVsZXNbaV1dKTtcbiAgICAgICAgICBpZiAodGVtcE1hdGNoICYmICghbWF0Y2ggfHwgdGVtcE1hdGNoWzBdLmxlbmd0aCA+IG1hdGNoWzBdLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIG1hdGNoID0gdGVtcE1hdGNoO1xuICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnRlc3RfbWF0Y2godGVtcE1hdGNoLCBydWxlc1tpXSk7XG4gICAgICAgICAgICAgIGlmICh0b2tlbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYmFja3RyYWNrKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5mbGV4KSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICB0b2tlbiA9IHRoaXMudGVzdF9tYXRjaChtYXRjaCwgcnVsZXNbaW5kZXhdKTtcbiAgICAgICAgICBpZiAodG9rZW4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faW5wdXQgPT09IFwiXCIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBcIi4gVW5yZWNvZ25pemVkIHRleHQuXFxuXCIgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7XG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICBsaW5lOiB0aGlzLnl5bGluZW5vXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyByZXR1cm4gbmV4dCBtYXRjaCB0aGF0IGhhcyBhIHRva2VuXG4gICAgICBsZXg6IGZ1bmN0aW9uIGxleCgpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLm5leHQoKTtcbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5sZXgoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIGFjdGl2YXRlcyBhIG5ldyBsZXhlciBjb25kaXRpb24gc3RhdGUgKHB1c2hlcyB0aGUgbmV3IGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvbnRvIHRoZSBjb25kaXRpb24gc3RhY2spXG4gICAgICBiZWdpbjogZnVuY3Rpb24gYmVnaW4oY29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sucHVzaChjb25kaXRpb24pO1xuICAgICAgfSxcbiAgICAgIC8vIHBvcCB0aGUgcHJldmlvdXNseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIG9mZiB0aGUgY29uZGl0aW9uIHN0YWNrXG4gICAgICBwb3BTdGF0ZTogZnVuY3Rpb24gcG9wU3RhdGUoKSB7XG4gICAgICAgIHZhciBuID0gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxO1xuICAgICAgICBpZiAobiA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5wb3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFja1swXTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHByb2R1Y2UgdGhlIGxleGVyIHJ1bGUgc2V0IHdoaWNoIGlzIGFjdGl2ZSBmb3IgdGhlIGN1cnJlbnRseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlXG4gICAgICBfY3VycmVudFJ1bGVzOiBmdW5jdGlvbiBfY3VycmVudFJ1bGVzKCkge1xuICAgICAgICBpZiAodGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggJiYgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uc1t0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV1dLnJ1bGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbnNbXCJJTklUSUFMXCJdLnJ1bGVzO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIHRoZSBjdXJyZW50bHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZTsgd2hlbiBhbiBpbmRleCBhcmd1bWVudCBpcyBwcm92aWRlZCBpdCBwcm9kdWNlcyB0aGUgTi10aCBwcmV2aW91cyBjb25kaXRpb24gc3RhdGUsIGlmIGF2YWlsYWJsZVxuICAgICAgdG9wU3RhdGU6IGZ1bmN0aW9uIHRvcFN0YXRlKG4pIHtcbiAgICAgICAgbiA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMSAtIE1hdGguYWJzKG4gfHwgMCk7XG4gICAgICAgIGlmIChuID49IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFja1tuXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCJJTklUSUFMXCI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBhbGlhcyBmb3IgYmVnaW4oY29uZGl0aW9uKVxuICAgICAgcHVzaFN0YXRlOiBmdW5jdGlvbiBwdXNoU3RhdGUoY29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuYmVnaW4oY29uZGl0aW9uKTtcbiAgICAgIH0sXG4gICAgICAvLyByZXR1cm4gdGhlIG51bWJlciBvZiBzdGF0ZXMgY3VycmVudGx5IG9uIHRoZSBzdGFja1xuICAgICAgc3RhdGVTdGFja1NpemU6IGZ1bmN0aW9uIHN0YXRlU3RhY2tTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGg7XG4gICAgICB9LFxuICAgICAgb3B0aW9uczogeyBcImNhc2UtaW5zZW5zaXRpdmVcIjogdHJ1ZSB9LFxuICAgICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24gYW5vbnltb3VzKHl5LCB5eV8sICRhdm9pZGluZ19uYW1lX2NvbGxpc2lvbnMsIFlZX1NUQVJUKSB7XG4gICAgICAgIHN3aXRjaCAoJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucykge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiAzMjtcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwidGl0bGVcIik7XG4gICAgICAgICAgICByZXR1cm4gMTM7XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFwidGl0bGVfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiYWNjX3RpdGxlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDE1O1xuICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiBcImFjY190aXRsZV92YWx1ZVwiO1xuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJhY2NfZGVzY3JcIik7XG4gICAgICAgICAgICByZXR1cm4gMTc7XG4gICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX2Rlc2NyX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJhY2NfZGVzY3JfbXVsdGlsaW5lXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfZGVzY3JfbXVsdGlsaW5lX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIHJldHVybiAyNTtcbiAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgcmV0dXJuIDI3O1xuICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICByZXR1cm4gMjY7XG4gICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgIHJldHVybiAyODtcbiAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgcmV0dXJuIDI5O1xuICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICByZXR1cm4gMzA7XG4gICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgIHJldHVybiAzMTtcbiAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcIm1kX3N0cmluZ1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICByZXR1cm4gXCJNRF9TVFJcIjtcbiAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJzdHJpbmdcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgIHJldHVybiBcIlNUUlwiO1xuICAgICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwicG9pbnRfc3RhcnRcIik7XG4gICAgICAgICAgICByZXR1cm4gMjI7XG4gICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJwb2ludF94XCIpO1xuICAgICAgICAgICAgcmV0dXJuIDIzO1xuICAgICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5iZWdpbihcInBvaW50X3lcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIDI0O1xuICAgICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgICByZXR1cm4gNjtcbiAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgcmV0dXJuIDQzO1xuICAgICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgICByZXR1cm4gXCJDT0xPTlwiO1xuICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICByZXR1cm4gNDU7XG4gICAgICAgICAgY2FzZSAzNTpcbiAgICAgICAgICAgIHJldHVybiA0NDtcbiAgICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgICAgcmV0dXJuIDQ2O1xuICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICByZXR1cm4gNDY7XG4gICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgIHJldHVybiA0NztcbiAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgcmV0dXJuIDQ5O1xuICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICByZXR1cm4gNTA7XG4gICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgIHJldHVybiA0ODtcbiAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgcmV0dXJuIDQxO1xuICAgICAgICAgIGNhc2UgNDM6XG4gICAgICAgICAgICByZXR1cm4gNTE7XG4gICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgIHJldHVybiA0MjtcbiAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgcmV0dXJuIDU7XG4gICAgICAgICAgY2FzZSA0NjpcbiAgICAgICAgICAgIHJldHVybiAzMztcbiAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgcmV0dXJuIDQwO1xuICAgICAgICAgIGNhc2UgNDg6XG4gICAgICAgICAgICByZXR1cm4gMzQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBydWxlczogWy9eKD86JSUoPyFcXHspW15cXG5dKikvaSwgL14oPzpbXlxcfV0lJVteXFxuXSopL2ksIC9eKD86W1xcblxccl0rKS9pLCAvXig/OiUlW15cXG5dKikvaSwgL14oPzp0aXRsZVxcYikvaSwgL14oPzooPyFcXG58fCkqW15cXG5dKikvaSwgL14oPzphY2NUaXRsZVxccyo6XFxzKikvaSwgL14oPzooPyFcXG58fCkqW15cXG5dKikvaSwgL14oPzphY2NEZXNjclxccyo6XFxzKikvaSwgL14oPzooPyFcXG58fCkqW15cXG5dKikvaSwgL14oPzphY2NEZXNjclxccypcXHtcXHMqKS9pLCAvXig/OltcXH1dKS9pLCAvXig/OlteXFx9XSopL2ksIC9eKD86ICp4LWF4aXMgKikvaSwgL14oPzogKnktYXhpcyAqKS9pLCAvXig/OiAqLS0rPiAqKS9pLCAvXig/OiAqcXVhZHJhbnQtMSAqKS9pLCAvXig/OiAqcXVhZHJhbnQtMiAqKS9pLCAvXig/OiAqcXVhZHJhbnQtMyAqKS9pLCAvXig/OiAqcXVhZHJhbnQtNCAqKS9pLCAvXig/OltcIl1bYF0pL2ksIC9eKD86W15gXCJdKykvaSwgL14oPzpbYF1bXCJdKS9pLCAvXig/OltcIl0pL2ksIC9eKD86W1wiXSkvaSwgL14oPzpbXlwiXSopL2ksIC9eKD86XFxzKjpcXHMqXFxbXFxzKikvaSwgL14oPzooMSl8KDAoLlxcZCspPykpL2ksIC9eKD86XFxzKlxcXSAqKS9pLCAvXig/OlxccyosXFxzKikvaSwgL14oPzooMSl8KDAoLlxcZCspPykpL2ksIC9eKD86ICpxdWFkcmFudENoYXJ0ICopL2ksIC9eKD86W0EtWmEtel0rKS9pLCAvXig/OjopL2ksIC9eKD86XFwrKS9pLCAvXig/OiwpL2ksIC9eKD86PSkvaSwgL14oPzo9KS9pLCAvXig/OlxcKikvaSwgL14oPzojKS9pLCAvXig/OltcXF9dKS9pLCAvXig/OlxcLikvaSwgL14oPzomKS9pLCAvXig/Oi0pL2ksIC9eKD86WzAtOV0rKS9pLCAvXig/OlxccykvaSwgL14oPzo7KS9pLCAvXig/OlshXCIjJCUmJyorLC0uYD9cXFxcXy9dKS9pLCAvXig/OiQpL2ldLFxuICAgICAgY29uZGl0aW9uczogeyBcInBvaW50X3lcIjogeyBcInJ1bGVzXCI6IFszMF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwicG9pbnRfeFwiOiB7IFwicnVsZXNcIjogWzI5XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJwb2ludF9zdGFydFwiOiB7IFwicnVsZXNcIjogWzI3LCAyOF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiYWNjX2Rlc2NyX211bHRpbGluZVwiOiB7IFwicnVsZXNcIjogWzExLCAxMl0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiYWNjX2Rlc2NyXCI6IHsgXCJydWxlc1wiOiBbOV0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiYWNjX3RpdGxlXCI6IHsgXCJydWxlc1wiOiBbN10sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwidGl0bGVcIjogeyBcInJ1bGVzXCI6IFs1XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJtZF9zdHJpbmdcIjogeyBcInJ1bGVzXCI6IFsyMSwgMjJdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcInN0cmluZ1wiOiB7IFwicnVsZXNcIjogWzI0LCAyNV0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiSU5JVElBTFwiOiB7IFwicnVsZXNcIjogWzAsIDEsIDIsIDMsIDQsIDYsIDgsIDEwLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIzLCAyNiwgMzEsIDMyLCAzMywgMzQsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDQxLCA0MiwgNDMsIDQ0LCA0NSwgNDYsIDQ3LCA0OF0sIFwiaW5jbHVzaXZlXCI6IHRydWUgfSB9XG4gICAgfTtcbiAgICByZXR1cm4gbGV4ZXIyO1xuICB9KCk7XG4gIHBhcnNlcjIubGV4ZXIgPSBsZXhlcjtcbiAgZnVuY3Rpb24gUGFyc2VyKCkge1xuICAgIHRoaXMueXkgPSB7fTtcbiAgfVxuICBQYXJzZXIucHJvdG90eXBlID0gcGFyc2VyMjtcbiAgcGFyc2VyMi5QYXJzZXIgPSBQYXJzZXI7XG4gIHJldHVybiBuZXcgUGFyc2VyKCk7XG59KCk7XG5wYXJzZXIucGFyc2VyID0gcGFyc2VyO1xuY29uc3QgcGFyc2VyJDEgPSBwYXJzZXI7XG5jb25zdCBkZWZhdWx0VGhlbWVWYXJpYWJsZXMgPSBnZXRUaGVtZVZhcmlhYmxlcygpO1xuY2xhc3MgUXVhZHJhbnRCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmdldERlZmF1bHRDb25maWcoKTtcbiAgICB0aGlzLnRoZW1lQ29uZmlnID0gdGhpcy5nZXREZWZhdWx0VGhlbWVDb25maWcoKTtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmdldERlZmF1bHREYXRhKCk7XG4gIH1cbiAgZ2V0RGVmYXVsdERhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlVGV4dDogXCJcIixcbiAgICAgIHF1YWRyYW50MVRleHQ6IFwiXCIsXG4gICAgICBxdWFkcmFudDJUZXh0OiBcIlwiLFxuICAgICAgcXVhZHJhbnQzVGV4dDogXCJcIixcbiAgICAgIHF1YWRyYW50NFRleHQ6IFwiXCIsXG4gICAgICB4QXhpc0xlZnRUZXh0OiBcIlwiLFxuICAgICAgeEF4aXNSaWdodFRleHQ6IFwiXCIsXG4gICAgICB5QXhpc0JvdHRvbVRleHQ6IFwiXCIsXG4gICAgICB5QXhpc1RvcFRleHQ6IFwiXCIsXG4gICAgICBwb2ludHM6IFtdXG4gICAgfTtcbiAgfVxuICBnZXREZWZhdWx0Q29uZmlnKCkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2gsIF9pLCBfaiwgX2ssIF9sLCBfbSwgX24sIF9vLCBfcCwgX3EsIF9yO1xuICAgIHJldHVybiB7XG4gICAgICBzaG93WEF4aXM6IHRydWUsXG4gICAgICBzaG93WUF4aXM6IHRydWUsXG4gICAgICBzaG93VGl0bGU6IHRydWUsXG4gICAgICBjaGFydEhlaWdodDogKChfYSA9IGRlZmF1bHRDb25maWcucXVhZHJhbnRDaGFydCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNoYXJ0V2lkdGgpIHx8IDUwMCxcbiAgICAgIGNoYXJ0V2lkdGg6ICgoX2IgPSBkZWZhdWx0Q29uZmlnLnF1YWRyYW50Q2hhcnQpID09IG51bGwgPyB2b2lkIDAgOiBfYi5jaGFydEhlaWdodCkgfHwgNTAwLFxuICAgICAgdGl0bGVQYWRkaW5nOiAoKF9jID0gZGVmYXVsdENvbmZpZy5xdWFkcmFudENoYXJ0KSA9PSBudWxsID8gdm9pZCAwIDogX2MudGl0bGVQYWRkaW5nKSB8fCAxMCxcbiAgICAgIHRpdGxlRm9udFNpemU6ICgoX2QgPSBkZWZhdWx0Q29uZmlnLnF1YWRyYW50Q2hhcnQpID09IG51bGwgPyB2b2lkIDAgOiBfZC50aXRsZUZvbnRTaXplKSB8fCAyMCxcbiAgICAgIHF1YWRyYW50UGFkZGluZzogKChfZSA9IGRlZmF1bHRDb25maWcucXVhZHJhbnRDaGFydCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lLnF1YWRyYW50UGFkZGluZykgfHwgNSxcbiAgICAgIHhBeGlzTGFiZWxQYWRkaW5nOiAoKF9mID0gZGVmYXVsdENvbmZpZy5xdWFkcmFudENoYXJ0KSA9PSBudWxsID8gdm9pZCAwIDogX2YueEF4aXNMYWJlbFBhZGRpbmcpIHx8IDUsXG4gICAgICB5QXhpc0xhYmVsUGFkZGluZzogKChfZyA9IGRlZmF1bHRDb25maWcucXVhZHJhbnRDaGFydCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9nLnlBeGlzTGFiZWxQYWRkaW5nKSB8fCA1LFxuICAgICAgeEF4aXNMYWJlbEZvbnRTaXplOiAoKF9oID0gZGVmYXVsdENvbmZpZy5xdWFkcmFudENoYXJ0KSA9PSBudWxsID8gdm9pZCAwIDogX2gueEF4aXNMYWJlbEZvbnRTaXplKSB8fCAxNixcbiAgICAgIHlBeGlzTGFiZWxGb250U2l6ZTogKChfaSA9IGRlZmF1bHRDb25maWcucXVhZHJhbnRDaGFydCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9pLnlBeGlzTGFiZWxGb250U2l6ZSkgfHwgMTYsXG4gICAgICBxdWFkcmFudExhYmVsRm9udFNpemU6ICgoX2ogPSBkZWZhdWx0Q29uZmlnLnF1YWRyYW50Q2hhcnQpID09IG51bGwgPyB2b2lkIDAgOiBfai5xdWFkcmFudExhYmVsRm9udFNpemUpIHx8IDE2LFxuICAgICAgcXVhZHJhbnRUZXh0VG9wUGFkZGluZzogKChfayA9IGRlZmF1bHRDb25maWcucXVhZHJhbnRDaGFydCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9rLnF1YWRyYW50VGV4dFRvcFBhZGRpbmcpIHx8IDUsXG4gICAgICBwb2ludFRleHRQYWRkaW5nOiAoKF9sID0gZGVmYXVsdENvbmZpZy5xdWFkcmFudENoYXJ0KSA9PSBudWxsID8gdm9pZCAwIDogX2wucG9pbnRUZXh0UGFkZGluZykgfHwgNSxcbiAgICAgIHBvaW50TGFiZWxGb250U2l6ZTogKChfbSA9IGRlZmF1bHRDb25maWcucXVhZHJhbnRDaGFydCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9tLnBvaW50TGFiZWxGb250U2l6ZSkgfHwgMTIsXG4gICAgICBwb2ludFJhZGl1czogKChfbiA9IGRlZmF1bHRDb25maWcucXVhZHJhbnRDaGFydCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9uLnBvaW50UmFkaXVzKSB8fCA1LFxuICAgICAgeEF4aXNQb3NpdGlvbjogKChfbyA9IGRlZmF1bHRDb25maWcucXVhZHJhbnRDaGFydCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9vLnhBeGlzUG9zaXRpb24pIHx8IFwidG9wXCIsXG4gICAgICB5QXhpc1Bvc2l0aW9uOiAoKF9wID0gZGVmYXVsdENvbmZpZy5xdWFkcmFudENoYXJ0KSA9PSBudWxsID8gdm9pZCAwIDogX3AueUF4aXNQb3NpdGlvbikgfHwgXCJsZWZ0XCIsXG4gICAgICBxdWFkcmFudEludGVybmFsQm9yZGVyU3Ryb2tlV2lkdGg6ICgoX3EgPSBkZWZhdWx0Q29uZmlnLnF1YWRyYW50Q2hhcnQpID09IG51bGwgPyB2b2lkIDAgOiBfcS5xdWFkcmFudEludGVybmFsQm9yZGVyU3Ryb2tlV2lkdGgpIHx8IDEsXG4gICAgICBxdWFkcmFudEV4dGVybmFsQm9yZGVyU3Ryb2tlV2lkdGg6ICgoX3IgPSBkZWZhdWx0Q29uZmlnLnF1YWRyYW50Q2hhcnQpID09IG51bGwgPyB2b2lkIDAgOiBfci5xdWFkcmFudEV4dGVybmFsQm9yZGVyU3Ryb2tlV2lkdGgpIHx8IDJcbiAgICB9O1xuICB9XG4gIGdldERlZmF1bHRUaGVtZUNvbmZpZygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVhZHJhbnQxRmlsbDogZGVmYXVsdFRoZW1lVmFyaWFibGVzLnF1YWRyYW50MUZpbGwsXG4gICAgICBxdWFkcmFudDJGaWxsOiBkZWZhdWx0VGhlbWVWYXJpYWJsZXMucXVhZHJhbnQyRmlsbCxcbiAgICAgIHF1YWRyYW50M0ZpbGw6IGRlZmF1bHRUaGVtZVZhcmlhYmxlcy5xdWFkcmFudDNGaWxsLFxuICAgICAgcXVhZHJhbnQ0RmlsbDogZGVmYXVsdFRoZW1lVmFyaWFibGVzLnF1YWRyYW50NEZpbGwsXG4gICAgICBxdWFkcmFudDFUZXh0RmlsbDogZGVmYXVsdFRoZW1lVmFyaWFibGVzLnF1YWRyYW50MVRleHRGaWxsLFxuICAgICAgcXVhZHJhbnQyVGV4dEZpbGw6IGRlZmF1bHRUaGVtZVZhcmlhYmxlcy5xdWFkcmFudDJUZXh0RmlsbCxcbiAgICAgIHF1YWRyYW50M1RleHRGaWxsOiBkZWZhdWx0VGhlbWVWYXJpYWJsZXMucXVhZHJhbnQzVGV4dEZpbGwsXG4gICAgICBxdWFkcmFudDRUZXh0RmlsbDogZGVmYXVsdFRoZW1lVmFyaWFibGVzLnF1YWRyYW50NFRleHRGaWxsLFxuICAgICAgcXVhZHJhbnRQb2ludEZpbGw6IGRlZmF1bHRUaGVtZVZhcmlhYmxlcy5xdWFkcmFudFBvaW50RmlsbCxcbiAgICAgIHF1YWRyYW50UG9pbnRUZXh0RmlsbDogZGVmYXVsdFRoZW1lVmFyaWFibGVzLnF1YWRyYW50UG9pbnRUZXh0RmlsbCxcbiAgICAgIHF1YWRyYW50WEF4aXNUZXh0RmlsbDogZGVmYXVsdFRoZW1lVmFyaWFibGVzLnF1YWRyYW50WEF4aXNUZXh0RmlsbCxcbiAgICAgIHF1YWRyYW50WUF4aXNUZXh0RmlsbDogZGVmYXVsdFRoZW1lVmFyaWFibGVzLnF1YWRyYW50WUF4aXNUZXh0RmlsbCxcbiAgICAgIHF1YWRyYW50VGl0bGVGaWxsOiBkZWZhdWx0VGhlbWVWYXJpYWJsZXMucXVhZHJhbnRUaXRsZUZpbGwsXG4gICAgICBxdWFkcmFudEludGVybmFsQm9yZGVyU3Ryb2tlRmlsbDogZGVmYXVsdFRoZW1lVmFyaWFibGVzLnF1YWRyYW50SW50ZXJuYWxCb3JkZXJTdHJva2VGaWxsLFxuICAgICAgcXVhZHJhbnRFeHRlcm5hbEJvcmRlclN0cm9rZUZpbGw6IGRlZmF1bHRUaGVtZVZhcmlhYmxlcy5xdWFkcmFudEV4dGVybmFsQm9yZGVyU3Ryb2tlRmlsbFxuICAgIH07XG4gIH1cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmdldERlZmF1bHRDb25maWcoKTtcbiAgICB0aGlzLnRoZW1lQ29uZmlnID0gdGhpcy5nZXREZWZhdWx0VGhlbWVDb25maWcoKTtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmdldERlZmF1bHREYXRhKCk7XG4gICAgbG9nLmluZm8oXCJjbGVhciBjYWxsZWRcIik7XG4gIH1cbiAgc2V0RGF0YShkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0geyAuLi50aGlzLmRhdGEsIC4uLmRhdGEgfTtcbiAgfVxuICBhZGRQb2ludHMocG9pbnRzKSB7XG4gICAgdGhpcy5kYXRhLnBvaW50cyA9IFsuLi5wb2ludHMsIC4uLnRoaXMuZGF0YS5wb2ludHNdO1xuICB9XG4gIHNldENvbmZpZyhjb25maWcyKSB7XG4gICAgbG9nLnRyYWNlKFwic2V0Q29uZmlnIGNhbGxlZCB3aXRoOiBcIiwgY29uZmlnMik7XG4gICAgdGhpcy5jb25maWcgPSB7IC4uLnRoaXMuY29uZmlnLCAuLi5jb25maWcyIH07XG4gIH1cbiAgc2V0VGhlbWVDb25maWcodGhlbWVDb25maWcpIHtcbiAgICBsb2cudHJhY2UoXCJzZXRUaGVtZUNvbmZpZyBjYWxsZWQgd2l0aDogXCIsIHRoZW1lQ29uZmlnKTtcbiAgICB0aGlzLnRoZW1lQ29uZmlnID0geyAuLi50aGlzLnRoZW1lQ29uZmlnLCAuLi50aGVtZUNvbmZpZyB9O1xuICB9XG4gIGNhbGN1bGF0ZVNwYWNlKHhBeGlzUG9zaXRpb24sIHNob3dYQXhpcywgc2hvd1lBeGlzLCBzaG93VGl0bGUpIHtcbiAgICBjb25zdCB4QXhpc1NwYWNlQ2FsY3VsYXRpb24gPSB0aGlzLmNvbmZpZy54QXhpc0xhYmVsUGFkZGluZyAqIDIgKyB0aGlzLmNvbmZpZy54QXhpc0xhYmVsRm9udFNpemU7XG4gICAgY29uc3QgeEF4aXNTcGFjZSA9IHtcbiAgICAgIHRvcDogeEF4aXNQb3NpdGlvbiA9PT0gXCJ0b3BcIiAmJiBzaG93WEF4aXMgPyB4QXhpc1NwYWNlQ2FsY3VsYXRpb24gOiAwLFxuICAgICAgYm90dG9tOiB4QXhpc1Bvc2l0aW9uID09PSBcImJvdHRvbVwiICYmIHNob3dYQXhpcyA/IHhBeGlzU3BhY2VDYWxjdWxhdGlvbiA6IDBcbiAgICB9O1xuICAgIGNvbnN0IHlBeGlzU3BhY2VDYWxjdWxhdGlvbiA9IHRoaXMuY29uZmlnLnlBeGlzTGFiZWxQYWRkaW5nICogMiArIHRoaXMuY29uZmlnLnlBeGlzTGFiZWxGb250U2l6ZTtcbiAgICBjb25zdCB5QXhpc1NwYWNlID0ge1xuICAgICAgbGVmdDogdGhpcy5jb25maWcueUF4aXNQb3NpdGlvbiA9PT0gXCJsZWZ0XCIgJiYgc2hvd1lBeGlzID8geUF4aXNTcGFjZUNhbGN1bGF0aW9uIDogMCxcbiAgICAgIHJpZ2h0OiB0aGlzLmNvbmZpZy55QXhpc1Bvc2l0aW9uID09PSBcInJpZ2h0XCIgJiYgc2hvd1lBeGlzID8geUF4aXNTcGFjZUNhbGN1bGF0aW9uIDogMFxuICAgIH07XG4gICAgY29uc3QgdGl0bGVTcGFjZUNhbGN1bGF0aW9uID0gdGhpcy5jb25maWcudGl0bGVGb250U2l6ZSArIHRoaXMuY29uZmlnLnRpdGxlUGFkZGluZyAqIDI7XG4gICAgY29uc3QgdGl0bGVTcGFjZSA9IHtcbiAgICAgIHRvcDogc2hvd1RpdGxlID8gdGl0bGVTcGFjZUNhbGN1bGF0aW9uIDogMFxuICAgIH07XG4gICAgY29uc3QgcXVhZHJhbnRMZWZ0ID0gdGhpcy5jb25maWcucXVhZHJhbnRQYWRkaW5nICsgeUF4aXNTcGFjZS5sZWZ0O1xuICAgIGNvbnN0IHF1YWRyYW50VG9wID0gdGhpcy5jb25maWcucXVhZHJhbnRQYWRkaW5nICsgeEF4aXNTcGFjZS50b3AgKyB0aXRsZVNwYWNlLnRvcDtcbiAgICBjb25zdCBxdWFkcmFudFdpZHRoID0gdGhpcy5jb25maWcuY2hhcnRXaWR0aCAtIHRoaXMuY29uZmlnLnF1YWRyYW50UGFkZGluZyAqIDIgLSB5QXhpc1NwYWNlLmxlZnQgLSB5QXhpc1NwYWNlLnJpZ2h0O1xuICAgIGNvbnN0IHF1YWRyYW50SGVpZ2h0ID0gdGhpcy5jb25maWcuY2hhcnRIZWlnaHQgLSB0aGlzLmNvbmZpZy5xdWFkcmFudFBhZGRpbmcgKiAyIC0geEF4aXNTcGFjZS50b3AgLSB4QXhpc1NwYWNlLmJvdHRvbSAtIHRpdGxlU3BhY2UudG9wO1xuICAgIGNvbnN0IHF1YWRyYW50SGFsZldpZHRoID0gcXVhZHJhbnRXaWR0aCAvIDI7XG4gICAgY29uc3QgcXVhZHJhbnRIYWxmSGVpZ2h0ID0gcXVhZHJhbnRIZWlnaHQgLyAyO1xuICAgIGNvbnN0IHF1YWRyYW50U3BhY2UgPSB7XG4gICAgICBxdWFkcmFudExlZnQsXG4gICAgICBxdWFkcmFudFRvcCxcbiAgICAgIHF1YWRyYW50V2lkdGgsXG4gICAgICBxdWFkcmFudEhhbGZXaWR0aCxcbiAgICAgIHF1YWRyYW50SGVpZ2h0LFxuICAgICAgcXVhZHJhbnRIYWxmSGVpZ2h0XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgeEF4aXNTcGFjZSxcbiAgICAgIHlBeGlzU3BhY2UsXG4gICAgICB0aXRsZVNwYWNlLFxuICAgICAgcXVhZHJhbnRTcGFjZVxuICAgIH07XG4gIH1cbiAgZ2V0QXhpc0xhYmVscyh4QXhpc1Bvc2l0aW9uLCBzaG93WEF4aXMsIHNob3dZQXhpcywgc3BhY2VEYXRhKSB7XG4gICAgY29uc3QgeyBxdWFkcmFudFNwYWNlLCB0aXRsZVNwYWNlIH0gPSBzcGFjZURhdGE7XG4gICAgY29uc3Qge1xuICAgICAgcXVhZHJhbnRIYWxmSGVpZ2h0LFxuICAgICAgcXVhZHJhbnRIZWlnaHQsXG4gICAgICBxdWFkcmFudExlZnQsXG4gICAgICBxdWFkcmFudEhhbGZXaWR0aCxcbiAgICAgIHF1YWRyYW50VG9wLFxuICAgICAgcXVhZHJhbnRXaWR0aFxuICAgIH0gPSBxdWFkcmFudFNwYWNlO1xuICAgIGNvbnN0IGRyYXdYQXhpc0xhYmVsc0luTWlkZGxlID0gQm9vbGVhbih0aGlzLmRhdGEueEF4aXNSaWdodFRleHQpO1xuICAgIGNvbnN0IGRyYXdZQXhpc0xhYmVsc0luTWlkZGxlID0gQm9vbGVhbih0aGlzLmRhdGEueUF4aXNUb3BUZXh0KTtcbiAgICBjb25zdCBheGlzTGFiZWxzID0gW107XG4gICAgaWYgKHRoaXMuZGF0YS54QXhpc0xlZnRUZXh0ICYmIHNob3dYQXhpcykge1xuICAgICAgYXhpc0xhYmVscy5wdXNoKHtcbiAgICAgICAgdGV4dDogdGhpcy5kYXRhLnhBeGlzTGVmdFRleHQsXG4gICAgICAgIGZpbGw6IHRoaXMudGhlbWVDb25maWcucXVhZHJhbnRYQXhpc1RleHRGaWxsLFxuICAgICAgICB4OiBxdWFkcmFudExlZnQgKyAoZHJhd1hBeGlzTGFiZWxzSW5NaWRkbGUgPyBxdWFkcmFudEhhbGZXaWR0aCAvIDIgOiAwKSxcbiAgICAgICAgeTogeEF4aXNQb3NpdGlvbiA9PT0gXCJ0b3BcIiA/IHRoaXMuY29uZmlnLnhBeGlzTGFiZWxQYWRkaW5nICsgdGl0bGVTcGFjZS50b3AgOiB0aGlzLmNvbmZpZy54QXhpc0xhYmVsUGFkZGluZyArIHF1YWRyYW50VG9wICsgcXVhZHJhbnRIZWlnaHQgKyB0aGlzLmNvbmZpZy5xdWFkcmFudFBhZGRpbmcsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLmNvbmZpZy54QXhpc0xhYmVsRm9udFNpemUsXG4gICAgICAgIHZlcnRpY2FsUG9zOiBkcmF3WEF4aXNMYWJlbHNJbk1pZGRsZSA/IFwiY2VudGVyXCIgOiBcImxlZnRcIixcbiAgICAgICAgaG9yaXpvbnRhbFBvczogXCJ0b3BcIixcbiAgICAgICAgcm90YXRpb246IDBcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLnhBeGlzUmlnaHRUZXh0ICYmIHNob3dYQXhpcykge1xuICAgICAgYXhpc0xhYmVscy5wdXNoKHtcbiAgICAgICAgdGV4dDogdGhpcy5kYXRhLnhBeGlzUmlnaHRUZXh0LFxuICAgICAgICBmaWxsOiB0aGlzLnRoZW1lQ29uZmlnLnF1YWRyYW50WEF4aXNUZXh0RmlsbCxcbiAgICAgICAgeDogcXVhZHJhbnRMZWZ0ICsgcXVhZHJhbnRIYWxmV2lkdGggKyAoZHJhd1hBeGlzTGFiZWxzSW5NaWRkbGUgPyBxdWFkcmFudEhhbGZXaWR0aCAvIDIgOiAwKSxcbiAgICAgICAgeTogeEF4aXNQb3NpdGlvbiA9PT0gXCJ0b3BcIiA/IHRoaXMuY29uZmlnLnhBeGlzTGFiZWxQYWRkaW5nICsgdGl0bGVTcGFjZS50b3AgOiB0aGlzLmNvbmZpZy54QXhpc0xhYmVsUGFkZGluZyArIHF1YWRyYW50VG9wICsgcXVhZHJhbnRIZWlnaHQgKyB0aGlzLmNvbmZpZy5xdWFkcmFudFBhZGRpbmcsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLmNvbmZpZy54QXhpc0xhYmVsRm9udFNpemUsXG4gICAgICAgIHZlcnRpY2FsUG9zOiBkcmF3WEF4aXNMYWJlbHNJbk1pZGRsZSA/IFwiY2VudGVyXCIgOiBcImxlZnRcIixcbiAgICAgICAgaG9yaXpvbnRhbFBvczogXCJ0b3BcIixcbiAgICAgICAgcm90YXRpb246IDBcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLnlBeGlzQm90dG9tVGV4dCAmJiBzaG93WUF4aXMpIHtcbiAgICAgIGF4aXNMYWJlbHMucHVzaCh7XG4gICAgICAgIHRleHQ6IHRoaXMuZGF0YS55QXhpc0JvdHRvbVRleHQsXG4gICAgICAgIGZpbGw6IHRoaXMudGhlbWVDb25maWcucXVhZHJhbnRZQXhpc1RleHRGaWxsLFxuICAgICAgICB4OiB0aGlzLmNvbmZpZy55QXhpc1Bvc2l0aW9uID09PSBcImxlZnRcIiA/IHRoaXMuY29uZmlnLnlBeGlzTGFiZWxQYWRkaW5nIDogdGhpcy5jb25maWcueUF4aXNMYWJlbFBhZGRpbmcgKyBxdWFkcmFudExlZnQgKyBxdWFkcmFudFdpZHRoICsgdGhpcy5jb25maWcucXVhZHJhbnRQYWRkaW5nLFxuICAgICAgICB5OiBxdWFkcmFudFRvcCArIHF1YWRyYW50SGVpZ2h0IC0gKGRyYXdZQXhpc0xhYmVsc0luTWlkZGxlID8gcXVhZHJhbnRIYWxmSGVpZ2h0IC8gMiA6IDApLFxuICAgICAgICBmb250U2l6ZTogdGhpcy5jb25maWcueUF4aXNMYWJlbEZvbnRTaXplLFxuICAgICAgICB2ZXJ0aWNhbFBvczogZHJhd1lBeGlzTGFiZWxzSW5NaWRkbGUgPyBcImNlbnRlclwiIDogXCJsZWZ0XCIsXG4gICAgICAgIGhvcml6b250YWxQb3M6IFwidG9wXCIsXG4gICAgICAgIHJvdGF0aW9uOiAtOTBcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLnlBeGlzVG9wVGV4dCAmJiBzaG93WUF4aXMpIHtcbiAgICAgIGF4aXNMYWJlbHMucHVzaCh7XG4gICAgICAgIHRleHQ6IHRoaXMuZGF0YS55QXhpc1RvcFRleHQsXG4gICAgICAgIGZpbGw6IHRoaXMudGhlbWVDb25maWcucXVhZHJhbnRZQXhpc1RleHRGaWxsLFxuICAgICAgICB4OiB0aGlzLmNvbmZpZy55QXhpc1Bvc2l0aW9uID09PSBcImxlZnRcIiA/IHRoaXMuY29uZmlnLnlBeGlzTGFiZWxQYWRkaW5nIDogdGhpcy5jb25maWcueUF4aXNMYWJlbFBhZGRpbmcgKyBxdWFkcmFudExlZnQgKyBxdWFkcmFudFdpZHRoICsgdGhpcy5jb25maWcucXVhZHJhbnRQYWRkaW5nLFxuICAgICAgICB5OiBxdWFkcmFudFRvcCArIHF1YWRyYW50SGFsZkhlaWdodCAtIChkcmF3WUF4aXNMYWJlbHNJbk1pZGRsZSA/IHF1YWRyYW50SGFsZkhlaWdodCAvIDIgOiAwKSxcbiAgICAgICAgZm9udFNpemU6IHRoaXMuY29uZmlnLnlBeGlzTGFiZWxGb250U2l6ZSxcbiAgICAgICAgdmVydGljYWxQb3M6IGRyYXdZQXhpc0xhYmVsc0luTWlkZGxlID8gXCJjZW50ZXJcIiA6IFwibGVmdFwiLFxuICAgICAgICBob3Jpem9udGFsUG9zOiBcInRvcFwiLFxuICAgICAgICByb3RhdGlvbjogLTkwXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGF4aXNMYWJlbHM7XG4gIH1cbiAgZ2V0UXVhZHJhbnRzKHNwYWNlRGF0YSkge1xuICAgIGNvbnN0IHsgcXVhZHJhbnRTcGFjZSB9ID0gc3BhY2VEYXRhO1xuICAgIGNvbnN0IHsgcXVhZHJhbnRIYWxmSGVpZ2h0LCBxdWFkcmFudExlZnQsIHF1YWRyYW50SGFsZldpZHRoLCBxdWFkcmFudFRvcCB9ID0gcXVhZHJhbnRTcGFjZTtcbiAgICBjb25zdCBxdWFkcmFudHMgPSBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICB0ZXh0OiB0aGlzLmRhdGEucXVhZHJhbnQxVGV4dCxcbiAgICAgICAgICBmaWxsOiB0aGlzLnRoZW1lQ29uZmlnLnF1YWRyYW50MVRleHRGaWxsLFxuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMCxcbiAgICAgICAgICBmb250U2l6ZTogdGhpcy5jb25maWcucXVhZHJhbnRMYWJlbEZvbnRTaXplLFxuICAgICAgICAgIHZlcnRpY2FsUG9zOiBcImNlbnRlclwiLFxuICAgICAgICAgIGhvcml6b250YWxQb3M6IFwibWlkZGxlXCIsXG4gICAgICAgICAgcm90YXRpb246IDBcbiAgICAgICAgfSxcbiAgICAgICAgeDogcXVhZHJhbnRMZWZ0ICsgcXVhZHJhbnRIYWxmV2lkdGgsXG4gICAgICAgIHk6IHF1YWRyYW50VG9wLFxuICAgICAgICB3aWR0aDogcXVhZHJhbnRIYWxmV2lkdGgsXG4gICAgICAgIGhlaWdodDogcXVhZHJhbnRIYWxmSGVpZ2h0LFxuICAgICAgICBmaWxsOiB0aGlzLnRoZW1lQ29uZmlnLnF1YWRyYW50MUZpbGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICB0ZXh0OiB0aGlzLmRhdGEucXVhZHJhbnQyVGV4dCxcbiAgICAgICAgICBmaWxsOiB0aGlzLnRoZW1lQ29uZmlnLnF1YWRyYW50MlRleHRGaWxsLFxuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMCxcbiAgICAgICAgICBmb250U2l6ZTogdGhpcy5jb25maWcucXVhZHJhbnRMYWJlbEZvbnRTaXplLFxuICAgICAgICAgIHZlcnRpY2FsUG9zOiBcImNlbnRlclwiLFxuICAgICAgICAgIGhvcml6b250YWxQb3M6IFwibWlkZGxlXCIsXG4gICAgICAgICAgcm90YXRpb246IDBcbiAgICAgICAgfSxcbiAgICAgICAgeDogcXVhZHJhbnRMZWZ0LFxuICAgICAgICB5OiBxdWFkcmFudFRvcCxcbiAgICAgICAgd2lkdGg6IHF1YWRyYW50SGFsZldpZHRoLFxuICAgICAgICBoZWlnaHQ6IHF1YWRyYW50SGFsZkhlaWdodCxcbiAgICAgICAgZmlsbDogdGhpcy50aGVtZUNvbmZpZy5xdWFkcmFudDJGaWxsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgdGV4dDogdGhpcy5kYXRhLnF1YWRyYW50M1RleHQsXG4gICAgICAgICAgZmlsbDogdGhpcy50aGVtZUNvbmZpZy5xdWFkcmFudDNUZXh0RmlsbCxcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgZm9udFNpemU6IHRoaXMuY29uZmlnLnF1YWRyYW50TGFiZWxGb250U2l6ZSxcbiAgICAgICAgICB2ZXJ0aWNhbFBvczogXCJjZW50ZXJcIixcbiAgICAgICAgICBob3Jpem9udGFsUG9zOiBcIm1pZGRsZVwiLFxuICAgICAgICAgIHJvdGF0aW9uOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHg6IHF1YWRyYW50TGVmdCxcbiAgICAgICAgeTogcXVhZHJhbnRUb3AgKyBxdWFkcmFudEhhbGZIZWlnaHQsXG4gICAgICAgIHdpZHRoOiBxdWFkcmFudEhhbGZXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBxdWFkcmFudEhhbGZIZWlnaHQsXG4gICAgICAgIGZpbGw6IHRoaXMudGhlbWVDb25maWcucXVhZHJhbnQzRmlsbFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgIHRleHQ6IHRoaXMuZGF0YS5xdWFkcmFudDRUZXh0LFxuICAgICAgICAgIGZpbGw6IHRoaXMudGhlbWVDb25maWcucXVhZHJhbnQ0VGV4dEZpbGwsXG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIGZvbnRTaXplOiB0aGlzLmNvbmZpZy5xdWFkcmFudExhYmVsRm9udFNpemUsXG4gICAgICAgICAgdmVydGljYWxQb3M6IFwiY2VudGVyXCIsXG4gICAgICAgICAgaG9yaXpvbnRhbFBvczogXCJtaWRkbGVcIixcbiAgICAgICAgICByb3RhdGlvbjogMFxuICAgICAgICB9LFxuICAgICAgICB4OiBxdWFkcmFudExlZnQgKyBxdWFkcmFudEhhbGZXaWR0aCxcbiAgICAgICAgeTogcXVhZHJhbnRUb3AgKyBxdWFkcmFudEhhbGZIZWlnaHQsXG4gICAgICAgIHdpZHRoOiBxdWFkcmFudEhhbGZXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBxdWFkcmFudEhhbGZIZWlnaHQsXG4gICAgICAgIGZpbGw6IHRoaXMudGhlbWVDb25maWcucXVhZHJhbnQ0RmlsbFxuICAgICAgfVxuICAgIF07XG4gICAgZm9yIChjb25zdCBxdWFkcmFudCBvZiBxdWFkcmFudHMpIHtcbiAgICAgIHF1YWRyYW50LnRleHQueCA9IHF1YWRyYW50LnggKyBxdWFkcmFudC53aWR0aCAvIDI7XG4gICAgICBpZiAodGhpcy5kYXRhLnBvaW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcXVhZHJhbnQudGV4dC55ID0gcXVhZHJhbnQueSArIHF1YWRyYW50LmhlaWdodCAvIDI7XG4gICAgICAgIHF1YWRyYW50LnRleHQuaG9yaXpvbnRhbFBvcyA9IFwibWlkZGxlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWFkcmFudC50ZXh0LnkgPSBxdWFkcmFudC55ICsgdGhpcy5jb25maWcucXVhZHJhbnRUZXh0VG9wUGFkZGluZztcbiAgICAgICAgcXVhZHJhbnQudGV4dC5ob3Jpem9udGFsUG9zID0gXCJ0b3BcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHF1YWRyYW50cztcbiAgfVxuICBnZXRRdWFkcmFudFBvaW50cyhzcGFjZURhdGEpIHtcbiAgICBjb25zdCB7IHF1YWRyYW50U3BhY2UgfSA9IHNwYWNlRGF0YTtcbiAgICBjb25zdCB7IHF1YWRyYW50SGVpZ2h0LCBxdWFkcmFudExlZnQsIHF1YWRyYW50VG9wLCBxdWFkcmFudFdpZHRoIH0gPSBxdWFkcmFudFNwYWNlO1xuICAgIGNvbnN0IHhBeGlzID0gc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDFdKS5yYW5nZShbcXVhZHJhbnRMZWZ0LCBxdWFkcmFudFdpZHRoICsgcXVhZHJhbnRMZWZ0XSk7XG4gICAgY29uc3QgeUF4aXMgPSBzY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgMV0pLnJhbmdlKFtxdWFkcmFudEhlaWdodCArIHF1YWRyYW50VG9wLCBxdWFkcmFudFRvcF0pO1xuICAgIGNvbnN0IHBvaW50cyA9IHRoaXMuZGF0YS5wb2ludHMubWFwKChwb2ludCkgPT4ge1xuICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIHg6IHhBeGlzKHBvaW50LngpLFxuICAgICAgICB5OiB5QXhpcyhwb2ludC55KSxcbiAgICAgICAgZmlsbDogdGhpcy50aGVtZUNvbmZpZy5xdWFkcmFudFBvaW50RmlsbCxcbiAgICAgICAgcmFkaXVzOiB0aGlzLmNvbmZpZy5wb2ludFJhZGl1cyxcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgIHRleHQ6IHBvaW50LnRleHQsXG4gICAgICAgICAgZmlsbDogdGhpcy50aGVtZUNvbmZpZy5xdWFkcmFudFBvaW50VGV4dEZpbGwsXG4gICAgICAgICAgeDogeEF4aXMocG9pbnQueCksXG4gICAgICAgICAgeTogeUF4aXMocG9pbnQueSkgKyB0aGlzLmNvbmZpZy5wb2ludFRleHRQYWRkaW5nLFxuICAgICAgICAgIHZlcnRpY2FsUG9zOiBcImNlbnRlclwiLFxuICAgICAgICAgIGhvcml6b250YWxQb3M6IFwidG9wXCIsXG4gICAgICAgICAgZm9udFNpemU6IHRoaXMuY29uZmlnLnBvaW50TGFiZWxGb250U2l6ZSxcbiAgICAgICAgICByb3RhdGlvbjogMFxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH0pO1xuICAgIHJldHVybiBwb2ludHM7XG4gIH1cbiAgZ2V0Qm9yZGVycyhzcGFjZURhdGEpIHtcbiAgICBjb25zdCBoYWxmRXh0ZXJuYWxCb3JkZXJXaWR0aCA9IHRoaXMuY29uZmlnLnF1YWRyYW50RXh0ZXJuYWxCb3JkZXJTdHJva2VXaWR0aCAvIDI7XG4gICAgY29uc3QgeyBxdWFkcmFudFNwYWNlIH0gPSBzcGFjZURhdGE7XG4gICAgY29uc3Qge1xuICAgICAgcXVhZHJhbnRIYWxmSGVpZ2h0LFxuICAgICAgcXVhZHJhbnRIZWlnaHQsXG4gICAgICBxdWFkcmFudExlZnQsXG4gICAgICBxdWFkcmFudEhhbGZXaWR0aCxcbiAgICAgIHF1YWRyYW50VG9wLFxuICAgICAgcXVhZHJhbnRXaWR0aFxuICAgIH0gPSBxdWFkcmFudFNwYWNlO1xuICAgIGNvbnN0IGJvcmRlckxpbmVzID0gW1xuICAgICAgLy8gdG9wIGJvcmRlclxuICAgICAge1xuICAgICAgICBzdHJva2VGaWxsOiB0aGlzLnRoZW1lQ29uZmlnLnF1YWRyYW50RXh0ZXJuYWxCb3JkZXJTdHJva2VGaWxsLFxuICAgICAgICBzdHJva2VXaWR0aDogdGhpcy5jb25maWcucXVhZHJhbnRFeHRlcm5hbEJvcmRlclN0cm9rZVdpZHRoLFxuICAgICAgICB4MTogcXVhZHJhbnRMZWZ0IC0gaGFsZkV4dGVybmFsQm9yZGVyV2lkdGgsXG4gICAgICAgIHkxOiBxdWFkcmFudFRvcCxcbiAgICAgICAgeDI6IHF1YWRyYW50TGVmdCArIHF1YWRyYW50V2lkdGggKyBoYWxmRXh0ZXJuYWxCb3JkZXJXaWR0aCxcbiAgICAgICAgeTI6IHF1YWRyYW50VG9wXG4gICAgICB9LFxuICAgICAgLy8gcmlnaHQgYm9yZGVyXG4gICAgICB7XG4gICAgICAgIHN0cm9rZUZpbGw6IHRoaXMudGhlbWVDb25maWcucXVhZHJhbnRFeHRlcm5hbEJvcmRlclN0cm9rZUZpbGwsXG4gICAgICAgIHN0cm9rZVdpZHRoOiB0aGlzLmNvbmZpZy5xdWFkcmFudEV4dGVybmFsQm9yZGVyU3Ryb2tlV2lkdGgsXG4gICAgICAgIHgxOiBxdWFkcmFudExlZnQgKyBxdWFkcmFudFdpZHRoLFxuICAgICAgICB5MTogcXVhZHJhbnRUb3AgKyBoYWxmRXh0ZXJuYWxCb3JkZXJXaWR0aCxcbiAgICAgICAgeDI6IHF1YWRyYW50TGVmdCArIHF1YWRyYW50V2lkdGgsXG4gICAgICAgIHkyOiBxdWFkcmFudFRvcCArIHF1YWRyYW50SGVpZ2h0IC0gaGFsZkV4dGVybmFsQm9yZGVyV2lkdGhcbiAgICAgIH0sXG4gICAgICAvLyBib3R0b20gYm9yZGVyXG4gICAgICB7XG4gICAgICAgIHN0cm9rZUZpbGw6IHRoaXMudGhlbWVDb25maWcucXVhZHJhbnRFeHRlcm5hbEJvcmRlclN0cm9rZUZpbGwsXG4gICAgICAgIHN0cm9rZVdpZHRoOiB0aGlzLmNvbmZpZy5xdWFkcmFudEV4dGVybmFsQm9yZGVyU3Ryb2tlV2lkdGgsXG4gICAgICAgIHgxOiBxdWFkcmFudExlZnQgLSBoYWxmRXh0ZXJuYWxCb3JkZXJXaWR0aCxcbiAgICAgICAgeTE6IHF1YWRyYW50VG9wICsgcXVhZHJhbnRIZWlnaHQsXG4gICAgICAgIHgyOiBxdWFkcmFudExlZnQgKyBxdWFkcmFudFdpZHRoICsgaGFsZkV4dGVybmFsQm9yZGVyV2lkdGgsXG4gICAgICAgIHkyOiBxdWFkcmFudFRvcCArIHF1YWRyYW50SGVpZ2h0XG4gICAgICB9LFxuICAgICAgLy8gbGVmdCBib3JkZXJcbiAgICAgIHtcbiAgICAgICAgc3Ryb2tlRmlsbDogdGhpcy50aGVtZUNvbmZpZy5xdWFkcmFudEV4dGVybmFsQm9yZGVyU3Ryb2tlRmlsbCxcbiAgICAgICAgc3Ryb2tlV2lkdGg6IHRoaXMuY29uZmlnLnF1YWRyYW50RXh0ZXJuYWxCb3JkZXJTdHJva2VXaWR0aCxcbiAgICAgICAgeDE6IHF1YWRyYW50TGVmdCxcbiAgICAgICAgeTE6IHF1YWRyYW50VG9wICsgaGFsZkV4dGVybmFsQm9yZGVyV2lkdGgsXG4gICAgICAgIHgyOiBxdWFkcmFudExlZnQsXG4gICAgICAgIHkyOiBxdWFkcmFudFRvcCArIHF1YWRyYW50SGVpZ2h0IC0gaGFsZkV4dGVybmFsQm9yZGVyV2lkdGhcbiAgICAgIH0sXG4gICAgICAvLyB2ZXJ0aWNhbCBpbm5lciBib3JkZXJcbiAgICAgIHtcbiAgICAgICAgc3Ryb2tlRmlsbDogdGhpcy50aGVtZUNvbmZpZy5xdWFkcmFudEludGVybmFsQm9yZGVyU3Ryb2tlRmlsbCxcbiAgICAgICAgc3Ryb2tlV2lkdGg6IHRoaXMuY29uZmlnLnF1YWRyYW50SW50ZXJuYWxCb3JkZXJTdHJva2VXaWR0aCxcbiAgICAgICAgeDE6IHF1YWRyYW50TGVmdCArIHF1YWRyYW50SGFsZldpZHRoLFxuICAgICAgICB5MTogcXVhZHJhbnRUb3AgKyBoYWxmRXh0ZXJuYWxCb3JkZXJXaWR0aCxcbiAgICAgICAgeDI6IHF1YWRyYW50TGVmdCArIHF1YWRyYW50SGFsZldpZHRoLFxuICAgICAgICB5MjogcXVhZHJhbnRUb3AgKyBxdWFkcmFudEhlaWdodCAtIGhhbGZFeHRlcm5hbEJvcmRlcldpZHRoXG4gICAgICB9LFxuICAgICAgLy8gaG9yaXpvbnRhbCBpbm5lciBib3JkZXJcbiAgICAgIHtcbiAgICAgICAgc3Ryb2tlRmlsbDogdGhpcy50aGVtZUNvbmZpZy5xdWFkcmFudEludGVybmFsQm9yZGVyU3Ryb2tlRmlsbCxcbiAgICAgICAgc3Ryb2tlV2lkdGg6IHRoaXMuY29uZmlnLnF1YWRyYW50SW50ZXJuYWxCb3JkZXJTdHJva2VXaWR0aCxcbiAgICAgICAgeDE6IHF1YWRyYW50TGVmdCArIGhhbGZFeHRlcm5hbEJvcmRlcldpZHRoLFxuICAgICAgICB5MTogcXVhZHJhbnRUb3AgKyBxdWFkcmFudEhhbGZIZWlnaHQsXG4gICAgICAgIHgyOiBxdWFkcmFudExlZnQgKyBxdWFkcmFudFdpZHRoIC0gaGFsZkV4dGVybmFsQm9yZGVyV2lkdGgsXG4gICAgICAgIHkyOiBxdWFkcmFudFRvcCArIHF1YWRyYW50SGFsZkhlaWdodFxuICAgICAgfVxuICAgIF07XG4gICAgcmV0dXJuIGJvcmRlckxpbmVzO1xuICB9XG4gIGdldFRpdGxlKHNob3dUaXRsZSkge1xuICAgIGlmIChzaG93VGl0bGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IHRoaXMuZGF0YS50aXRsZVRleHQsXG4gICAgICAgIGZpbGw6IHRoaXMudGhlbWVDb25maWcucXVhZHJhbnRUaXRsZUZpbGwsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLmNvbmZpZy50aXRsZUZvbnRTaXplLFxuICAgICAgICBob3Jpem9udGFsUG9zOiBcInRvcFwiLFxuICAgICAgICB2ZXJ0aWNhbFBvczogXCJjZW50ZXJcIixcbiAgICAgICAgcm90YXRpb246IDAsXG4gICAgICAgIHk6IHRoaXMuY29uZmlnLnRpdGxlUGFkZGluZyxcbiAgICAgICAgeDogdGhpcy5jb25maWcuY2hhcnRXaWR0aCAvIDJcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBidWlsZCgpIHtcbiAgICBjb25zdCBzaG93WEF4aXMgPSB0aGlzLmNvbmZpZy5zaG93WEF4aXMgJiYgISEodGhpcy5kYXRhLnhBeGlzTGVmdFRleHQgfHwgdGhpcy5kYXRhLnhBeGlzUmlnaHRUZXh0KTtcbiAgICBjb25zdCBzaG93WUF4aXMgPSB0aGlzLmNvbmZpZy5zaG93WUF4aXMgJiYgISEodGhpcy5kYXRhLnlBeGlzVG9wVGV4dCB8fCB0aGlzLmRhdGEueUF4aXNCb3R0b21UZXh0KTtcbiAgICBjb25zdCBzaG93VGl0bGUgPSB0aGlzLmNvbmZpZy5zaG93VGl0bGUgJiYgISF0aGlzLmRhdGEudGl0bGVUZXh0O1xuICAgIGNvbnN0IHhBeGlzUG9zaXRpb24gPSB0aGlzLmRhdGEucG9pbnRzLmxlbmd0aCA+IDAgPyBcImJvdHRvbVwiIDogdGhpcy5jb25maWcueEF4aXNQb3NpdGlvbjtcbiAgICBjb25zdCBjYWxjdWxhdGVkU3BhY2UgPSB0aGlzLmNhbGN1bGF0ZVNwYWNlKHhBeGlzUG9zaXRpb24sIHNob3dYQXhpcywgc2hvd1lBeGlzLCBzaG93VGl0bGUpO1xuICAgIHJldHVybiB7XG4gICAgICBwb2ludHM6IHRoaXMuZ2V0UXVhZHJhbnRQb2ludHMoY2FsY3VsYXRlZFNwYWNlKSxcbiAgICAgIHF1YWRyYW50czogdGhpcy5nZXRRdWFkcmFudHMoY2FsY3VsYXRlZFNwYWNlKSxcbiAgICAgIGF4aXNMYWJlbHM6IHRoaXMuZ2V0QXhpc0xhYmVscyh4QXhpc1Bvc2l0aW9uLCBzaG93WEF4aXMsIHNob3dZQXhpcywgY2FsY3VsYXRlZFNwYWNlKSxcbiAgICAgIGJvcmRlckxpbmVzOiB0aGlzLmdldEJvcmRlcnMoY2FsY3VsYXRlZFNwYWNlKSxcbiAgICAgIHRpdGxlOiB0aGlzLmdldFRpdGxlKHNob3dUaXRsZSlcbiAgICB9O1xuICB9XG59XG5jb25zdCBjb25maWcgPSBnZXRDb25maWcoKTtcbmZ1bmN0aW9uIHRleHRTYW5pdGl6ZXIodGV4dCkge1xuICByZXR1cm4gc2FuaXRpemVUZXh0KHRleHQudHJpbSgpLCBjb25maWcpO1xufVxuY29uc3QgcXVhZHJhbnRCdWlsZGVyID0gbmV3IFF1YWRyYW50QnVpbGRlcigpO1xuZnVuY3Rpb24gc2V0UXVhZHJhbnQxVGV4dCh0ZXh0T2JqKSB7XG4gIHF1YWRyYW50QnVpbGRlci5zZXREYXRhKHsgcXVhZHJhbnQxVGV4dDogdGV4dFNhbml0aXplcih0ZXh0T2JqLnRleHQpIH0pO1xufVxuZnVuY3Rpb24gc2V0UXVhZHJhbnQyVGV4dCh0ZXh0T2JqKSB7XG4gIHF1YWRyYW50QnVpbGRlci5zZXREYXRhKHsgcXVhZHJhbnQyVGV4dDogdGV4dFNhbml0aXplcih0ZXh0T2JqLnRleHQpIH0pO1xufVxuZnVuY3Rpb24gc2V0UXVhZHJhbnQzVGV4dCh0ZXh0T2JqKSB7XG4gIHF1YWRyYW50QnVpbGRlci5zZXREYXRhKHsgcXVhZHJhbnQzVGV4dDogdGV4dFNhbml0aXplcih0ZXh0T2JqLnRleHQpIH0pO1xufVxuZnVuY3Rpb24gc2V0UXVhZHJhbnQ0VGV4dCh0ZXh0T2JqKSB7XG4gIHF1YWRyYW50QnVpbGRlci5zZXREYXRhKHsgcXVhZHJhbnQ0VGV4dDogdGV4dFNhbml0aXplcih0ZXh0T2JqLnRleHQpIH0pO1xufVxuZnVuY3Rpb24gc2V0WEF4aXNMZWZ0VGV4dCh0ZXh0T2JqKSB7XG4gIHF1YWRyYW50QnVpbGRlci5zZXREYXRhKHsgeEF4aXNMZWZ0VGV4dDogdGV4dFNhbml0aXplcih0ZXh0T2JqLnRleHQpIH0pO1xufVxuZnVuY3Rpb24gc2V0WEF4aXNSaWdodFRleHQodGV4dE9iaikge1xuICBxdWFkcmFudEJ1aWxkZXIuc2V0RGF0YSh7IHhBeGlzUmlnaHRUZXh0OiB0ZXh0U2FuaXRpemVyKHRleHRPYmoudGV4dCkgfSk7XG59XG5mdW5jdGlvbiBzZXRZQXhpc1RvcFRleHQodGV4dE9iaikge1xuICBxdWFkcmFudEJ1aWxkZXIuc2V0RGF0YSh7IHlBeGlzVG9wVGV4dDogdGV4dFNhbml0aXplcih0ZXh0T2JqLnRleHQpIH0pO1xufVxuZnVuY3Rpb24gc2V0WUF4aXNCb3R0b21UZXh0KHRleHRPYmopIHtcbiAgcXVhZHJhbnRCdWlsZGVyLnNldERhdGEoeyB5QXhpc0JvdHRvbVRleHQ6IHRleHRTYW5pdGl6ZXIodGV4dE9iai50ZXh0KSB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBvaW50KHRleHRPYmosIHgsIHkpIHtcbiAgcXVhZHJhbnRCdWlsZGVyLmFkZFBvaW50cyhbeyB4LCB5LCB0ZXh0OiB0ZXh0U2FuaXRpemVyKHRleHRPYmoudGV4dCkgfV0pO1xufVxuZnVuY3Rpb24gc2V0V2lkdGgod2lkdGgpIHtcbiAgcXVhZHJhbnRCdWlsZGVyLnNldENvbmZpZyh7IGNoYXJ0V2lkdGg6IHdpZHRoIH0pO1xufVxuZnVuY3Rpb24gc2V0SGVpZ2h0KGhlaWdodCkge1xuICBxdWFkcmFudEJ1aWxkZXIuc2V0Q29uZmlnKHsgY2hhcnRIZWlnaHQ6IGhlaWdodCB9KTtcbn1cbmZ1bmN0aW9uIGdldFF1YWRyYW50RGF0YSgpIHtcbiAgY29uc3QgY29uZmlnMiA9IGdldENvbmZpZygpO1xuICBjb25zdCB7IHRoZW1lVmFyaWFibGVzLCBxdWFkcmFudENoYXJ0OiBxdWFkcmFudENoYXJ0Q29uZmlnIH0gPSBjb25maWcyO1xuICBpZiAocXVhZHJhbnRDaGFydENvbmZpZykge1xuICAgIHF1YWRyYW50QnVpbGRlci5zZXRDb25maWcocXVhZHJhbnRDaGFydENvbmZpZyk7XG4gIH1cbiAgcXVhZHJhbnRCdWlsZGVyLnNldFRoZW1lQ29uZmlnKHtcbiAgICBxdWFkcmFudDFGaWxsOiB0aGVtZVZhcmlhYmxlcy5xdWFkcmFudDFGaWxsLFxuICAgIHF1YWRyYW50MkZpbGw6IHRoZW1lVmFyaWFibGVzLnF1YWRyYW50MkZpbGwsXG4gICAgcXVhZHJhbnQzRmlsbDogdGhlbWVWYXJpYWJsZXMucXVhZHJhbnQzRmlsbCxcbiAgICBxdWFkcmFudDRGaWxsOiB0aGVtZVZhcmlhYmxlcy5xdWFkcmFudDRGaWxsLFxuICAgIHF1YWRyYW50MVRleHRGaWxsOiB0aGVtZVZhcmlhYmxlcy5xdWFkcmFudDFUZXh0RmlsbCxcbiAgICBxdWFkcmFudDJUZXh0RmlsbDogdGhlbWVWYXJpYWJsZXMucXVhZHJhbnQyVGV4dEZpbGwsXG4gICAgcXVhZHJhbnQzVGV4dEZpbGw6IHRoZW1lVmFyaWFibGVzLnF1YWRyYW50M1RleHRGaWxsLFxuICAgIHF1YWRyYW50NFRleHRGaWxsOiB0aGVtZVZhcmlhYmxlcy5xdWFkcmFudDRUZXh0RmlsbCxcbiAgICBxdWFkcmFudFBvaW50RmlsbDogdGhlbWVWYXJpYWJsZXMucXVhZHJhbnRQb2ludEZpbGwsXG4gICAgcXVhZHJhbnRQb2ludFRleHRGaWxsOiB0aGVtZVZhcmlhYmxlcy5xdWFkcmFudFBvaW50VGV4dEZpbGwsXG4gICAgcXVhZHJhbnRYQXhpc1RleHRGaWxsOiB0aGVtZVZhcmlhYmxlcy5xdWFkcmFudFhBeGlzVGV4dEZpbGwsXG4gICAgcXVhZHJhbnRZQXhpc1RleHRGaWxsOiB0aGVtZVZhcmlhYmxlcy5xdWFkcmFudFlBeGlzVGV4dEZpbGwsXG4gICAgcXVhZHJhbnRFeHRlcm5hbEJvcmRlclN0cm9rZUZpbGw6IHRoZW1lVmFyaWFibGVzLnF1YWRyYW50RXh0ZXJuYWxCb3JkZXJTdHJva2VGaWxsLFxuICAgIHF1YWRyYW50SW50ZXJuYWxCb3JkZXJTdHJva2VGaWxsOiB0aGVtZVZhcmlhYmxlcy5xdWFkcmFudEludGVybmFsQm9yZGVyU3Ryb2tlRmlsbCxcbiAgICBxdWFkcmFudFRpdGxlRmlsbDogdGhlbWVWYXJpYWJsZXMucXVhZHJhbnRUaXRsZUZpbGxcbiAgfSk7XG4gIHF1YWRyYW50QnVpbGRlci5zZXREYXRhKHsgdGl0bGVUZXh0OiBnZXREaWFncmFtVGl0bGUoKSB9KTtcbiAgcmV0dXJuIHF1YWRyYW50QnVpbGRlci5idWlsZCgpO1xufVxuY29uc3QgY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgcXVhZHJhbnRCdWlsZGVyLmNsZWFyKCk7XG4gIGNsZWFyJDEoKTtcbn07XG5jb25zdCBkYiA9IHtcbiAgc2V0V2lkdGgsXG4gIHNldEhlaWdodCxcbiAgc2V0UXVhZHJhbnQxVGV4dCxcbiAgc2V0UXVhZHJhbnQyVGV4dCxcbiAgc2V0UXVhZHJhbnQzVGV4dCxcbiAgc2V0UXVhZHJhbnQ0VGV4dCxcbiAgc2V0WEF4aXNMZWZ0VGV4dCxcbiAgc2V0WEF4aXNSaWdodFRleHQsXG4gIHNldFlBeGlzVG9wVGV4dCxcbiAgc2V0WUF4aXNCb3R0b21UZXh0LFxuICBhZGRQb2ludCxcbiAgZ2V0UXVhZHJhbnREYXRhLFxuICBjbGVhcixcbiAgc2V0QWNjVGl0bGUsXG4gIGdldEFjY1RpdGxlLFxuICBzZXREaWFncmFtVGl0bGUsXG4gIGdldERpYWdyYW1UaXRsZSxcbiAgZ2V0QWNjRGVzY3JpcHRpb24sXG4gIHNldEFjY0Rlc2NyaXB0aW9uXG59O1xuY29uc3QgZHJhdyA9ICh0eHQsIGlkLCBfdmVyc2lvbiwgZGlhZ09iaikgPT4ge1xuICB2YXIgX2EsIF9iLCBfYztcbiAgZnVuY3Rpb24gZ2V0RG9taW5hbnRCYXNlTGluZShob3Jpem9udGFsUG9zKSB7XG4gICAgcmV0dXJuIGhvcml6b250YWxQb3MgPT09IFwidG9wXCIgPyBcImhhbmdpbmdcIiA6IFwibWlkZGxlXCI7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0VGV4dEFuY2hvcih2ZXJ0aWNhbFBvcykge1xuICAgIHJldHVybiB2ZXJ0aWNhbFBvcyA9PT0gXCJsZWZ0XCIgPyBcInN0YXJ0XCIgOiBcIm1pZGRsZVwiO1xuICB9XG4gIGZ1bmN0aW9uIGdldFRyYW5zZm9ybWF0aW9uKGRhdGEpIHtcbiAgICByZXR1cm4gYHRyYW5zbGF0ZSgke2RhdGEueH0sICR7ZGF0YS55fSkgcm90YXRlKCR7ZGF0YS5yb3RhdGlvbiB8fCAwfSlgO1xuICB9XG4gIGNvbnN0IGNvbmYgPSBnZXRDb25maWcoKTtcbiAgbG9nLmRlYnVnKFwiUmVuZGVyaW5nIHF1YWRyYW50IGNoYXJ0XFxuXCIgKyB0eHQpO1xuICBjb25zdCBzZWN1cml0eUxldmVsID0gY29uZi5zZWN1cml0eUxldmVsO1xuICBsZXQgc2FuZGJveEVsZW1lbnQ7XG4gIGlmIChzZWN1cml0eUxldmVsID09PSBcInNhbmRib3hcIikge1xuICAgIHNhbmRib3hFbGVtZW50ID0gc2VsZWN0KFwiI2lcIiArIGlkKTtcbiAgfVxuICBjb25zdCByb290ID0gc2VjdXJpdHlMZXZlbCA9PT0gXCJzYW5kYm94XCIgPyBzZWxlY3Qoc2FuZGJveEVsZW1lbnQubm9kZXMoKVswXS5jb250ZW50RG9jdW1lbnQuYm9keSkgOiBzZWxlY3QoXCJib2R5XCIpO1xuICBjb25zdCBzdmcgPSByb290LnNlbGVjdChgW2lkPVwiJHtpZH1cIl1gKTtcbiAgY29uc3QgZ3JvdXAgPSBzdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJtYWluXCIpO1xuICBjb25zdCB3aWR0aCA9ICgoX2EgPSBjb25mLnF1YWRyYW50Q2hhcnQpID09IG51bGwgPyB2b2lkIDAgOiBfYS5jaGFydFdpZHRoKSB8fCA1MDA7XG4gIGNvbnN0IGhlaWdodCA9ICgoX2IgPSBjb25mLnF1YWRyYW50Q2hhcnQpID09IG51bGwgPyB2b2lkIDAgOiBfYi5jaGFydEhlaWdodCkgfHwgNTAwO1xuICBjb25maWd1cmVTdmdTaXplKHN2ZywgaGVpZ2h0LCB3aWR0aCwgKChfYyA9IGNvbmYucXVhZHJhbnRDaGFydCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jLnVzZU1heFdpZHRoKSB8fCB0cnVlKTtcbiAgc3ZnLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIFwiICsgd2lkdGggKyBcIiBcIiArIGhlaWdodCk7XG4gIGRpYWdPYmouZGIuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIGRpYWdPYmouZGIuc2V0V2lkdGgod2lkdGgpO1xuICBjb25zdCBxdWFkcmFudERhdGEgPSBkaWFnT2JqLmRiLmdldFF1YWRyYW50RGF0YSgpO1xuICBjb25zdCBxdWFkcmFudHNHcm91cCA9IGdyb3VwLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwicXVhZHJhbnRzXCIpO1xuICBjb25zdCBib3JkZXJHcm91cCA9IGdyb3VwLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiYm9yZGVyXCIpO1xuICBjb25zdCBkYXRhUG9pbnRHcm91cCA9IGdyb3VwLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiZGF0YS1wb2ludHNcIik7XG4gIGNvbnN0IGxhYmVsR3JvdXAgPSBncm91cC5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsc1wiKTtcbiAgY29uc3QgdGl0bGVHcm91cCA9IGdyb3VwLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwidGl0bGVcIik7XG4gIGlmIChxdWFkcmFudERhdGEudGl0bGUpIHtcbiAgICB0aXRsZUdyb3VwLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgMCkuYXR0cihcInlcIiwgMCkuYXR0cihcImZpbGxcIiwgcXVhZHJhbnREYXRhLnRpdGxlLmZpbGwpLmF0dHIoXCJmb250LXNpemVcIiwgcXVhZHJhbnREYXRhLnRpdGxlLmZvbnRTaXplKS5hdHRyKFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgZ2V0RG9taW5hbnRCYXNlTGluZShxdWFkcmFudERhdGEudGl0bGUuaG9yaXpvbnRhbFBvcykpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBnZXRUZXh0QW5jaG9yKHF1YWRyYW50RGF0YS50aXRsZS52ZXJ0aWNhbFBvcykpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZ2V0VHJhbnNmb3JtYXRpb24ocXVhZHJhbnREYXRhLnRpdGxlKSkudGV4dChxdWFkcmFudERhdGEudGl0bGUudGV4dCk7XG4gIH1cbiAgaWYgKHF1YWRyYW50RGF0YS5ib3JkZXJMaW5lcykge1xuICAgIGJvcmRlckdyb3VwLnNlbGVjdEFsbChcImxpbmVcIikuZGF0YShxdWFkcmFudERhdGEuYm9yZGVyTGluZXMpLmVudGVyKCkuYXBwZW5kKFwibGluZVwiKS5hdHRyKFwieDFcIiwgKGRhdGEpID0+IGRhdGEueDEpLmF0dHIoXCJ5MVwiLCAoZGF0YSkgPT4gZGF0YS55MSkuYXR0cihcIngyXCIsIChkYXRhKSA9PiBkYXRhLngyKS5hdHRyKFwieTJcIiwgKGRhdGEpID0+IGRhdGEueTIpLnN0eWxlKFwic3Ryb2tlXCIsIChkYXRhKSA9PiBkYXRhLnN0cm9rZUZpbGwpLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIChkYXRhKSA9PiBkYXRhLnN0cm9rZVdpZHRoKTtcbiAgfVxuICBjb25zdCBxdWFkcmFudHMgPSBxdWFkcmFudHNHcm91cC5zZWxlY3RBbGwoXCJnLnF1YWRyYW50XCIpLmRhdGEocXVhZHJhbnREYXRhLnF1YWRyYW50cykuZW50ZXIoKS5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcInF1YWRyYW50XCIpO1xuICBxdWFkcmFudHMuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwieFwiLCAoZGF0YSkgPT4gZGF0YS54KS5hdHRyKFwieVwiLCAoZGF0YSkgPT4gZGF0YS55KS5hdHRyKFwid2lkdGhcIiwgKGRhdGEpID0+IGRhdGEud2lkdGgpLmF0dHIoXCJoZWlnaHRcIiwgKGRhdGEpID0+IGRhdGEuaGVpZ2h0KS5hdHRyKFwiZmlsbFwiLCAoZGF0YSkgPT4gZGF0YS5maWxsKTtcbiAgcXVhZHJhbnRzLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgMCkuYXR0cihcInlcIiwgMCkuYXR0cihcImZpbGxcIiwgKGRhdGEpID0+IGRhdGEudGV4dC5maWxsKS5hdHRyKFwiZm9udC1zaXplXCIsIChkYXRhKSA9PiBkYXRhLnRleHQuZm9udFNpemUpLmF0dHIoXG4gICAgXCJkb21pbmFudC1iYXNlbGluZVwiLFxuICAgIChkYXRhKSA9PiBnZXREb21pbmFudEJhc2VMaW5lKGRhdGEudGV4dC5ob3Jpem9udGFsUG9zKVxuICApLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCAoZGF0YSkgPT4gZ2V0VGV4dEFuY2hvcihkYXRhLnRleHQudmVydGljYWxQb3MpKS5hdHRyKFwidHJhbnNmb3JtXCIsIChkYXRhKSA9PiBnZXRUcmFuc2Zvcm1hdGlvbihkYXRhLnRleHQpKS50ZXh0KChkYXRhKSA9PiBkYXRhLnRleHQudGV4dCk7XG4gIGNvbnN0IGxhYmVscyA9IGxhYmVsR3JvdXAuc2VsZWN0QWxsKFwiZy5sYWJlbFwiKS5kYXRhKHF1YWRyYW50RGF0YS5heGlzTGFiZWxzKS5lbnRlcigpLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwibGFiZWxcIik7XG4gIGxhYmVscy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIDApLmF0dHIoXCJ5XCIsIDApLnRleHQoKGRhdGEpID0+IGRhdGEudGV4dCkuYXR0cihcImZpbGxcIiwgKGRhdGEpID0+IGRhdGEuZmlsbCkuYXR0cihcImZvbnQtc2l6ZVwiLCAoZGF0YSkgPT4gZGF0YS5mb250U2l6ZSkuYXR0cihcImRvbWluYW50LWJhc2VsaW5lXCIsIChkYXRhKSA9PiBnZXREb21pbmFudEJhc2VMaW5lKGRhdGEuaG9yaXpvbnRhbFBvcykpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCAoZGF0YSkgPT4gZ2V0VGV4dEFuY2hvcihkYXRhLnZlcnRpY2FsUG9zKSkuYXR0cihcInRyYW5zZm9ybVwiLCAoZGF0YSkgPT4gZ2V0VHJhbnNmb3JtYXRpb24oZGF0YSkpO1xuICBjb25zdCBkYXRhUG9pbnRzID0gZGF0YVBvaW50R3JvdXAuc2VsZWN0QWxsKFwiZy5kYXRhLXBvaW50XCIpLmRhdGEocXVhZHJhbnREYXRhLnBvaW50cykuZW50ZXIoKS5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImRhdGEtcG9pbnRcIik7XG4gIGRhdGFQb2ludHMuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJjeFwiLCAoZGF0YSkgPT4gZGF0YS54KS5hdHRyKFwiY3lcIiwgKGRhdGEpID0+IGRhdGEueSkuYXR0cihcInJcIiwgKGRhdGEpID0+IGRhdGEucmFkaXVzKS5hdHRyKFwiZmlsbFwiLCAoZGF0YSkgPT4gZGF0YS5maWxsKTtcbiAgZGF0YVBvaW50cy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIDApLmF0dHIoXCJ5XCIsIDApLnRleHQoKGRhdGEpID0+IGRhdGEudGV4dC50ZXh0KS5hdHRyKFwiZmlsbFwiLCAoZGF0YSkgPT4gZGF0YS50ZXh0LmZpbGwpLmF0dHIoXCJmb250LXNpemVcIiwgKGRhdGEpID0+IGRhdGEudGV4dC5mb250U2l6ZSkuYXR0cihcbiAgICBcImRvbWluYW50LWJhc2VsaW5lXCIsXG4gICAgKGRhdGEpID0+IGdldERvbWluYW50QmFzZUxpbmUoZGF0YS50ZXh0Lmhvcml6b250YWxQb3MpXG4gICkuYXR0cihcInRleHQtYW5jaG9yXCIsIChkYXRhKSA9PiBnZXRUZXh0QW5jaG9yKGRhdGEudGV4dC52ZXJ0aWNhbFBvcykpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKGRhdGEpID0+IGdldFRyYW5zZm9ybWF0aW9uKGRhdGEudGV4dCkpO1xufTtcbmNvbnN0IHJlbmRlcmVyID0ge1xuICBkcmF3XG59O1xuY29uc3QgZGlhZ3JhbSA9IHtcbiAgcGFyc2VyOiBwYXJzZXIkMSxcbiAgZGIsXG4gIHJlbmRlcmVyLFxuICBzdHlsZXM6ICgpID0+IFwiXCJcbn07XG5leHBvcnQge1xuICBkaWFncmFtXG59O1xuIl0sIm5hbWVzIjpbImdldFRoZW1lVmFyaWFibGVzIiwiZGVmYXVsdENvbmZpZyIsImxvZyIsInNjYWxlTGluZWFyIiwiZ2V0Q29uZmlnIiwic2FuaXRpemVUZXh0IiwiZ2V0RGlhZ3JhbVRpdGxlIiwiY2xlYXIkMSIsInNldEFjY1RpdGxlIiwiZ2V0QWNjVGl0bGUiLCJzZXREaWFncmFtVGl0bGUiLCJnZXRBY2NEZXNjcmlwdGlvbiIsInNldEFjY0Rlc2NyaXB0aW9uIiwic2VsZWN0IiwiY29uZmlndXJlU3ZnU2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFXQSxJQUFJLE1BQU0sR0FBRyxXQUFXO0FBQ3hCLEVBQUUsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3ZELE1BQU0sQ0FBQztBQUNQLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3YwQixFQUFFLElBQUksT0FBTyxHQUFHO0FBQ2hCLElBQUksS0FBSyxFQUFFLFNBQVMsS0FBSyxHQUFHO0FBQzVCLEtBQUs7QUFDTCxJQUFJLEVBQUUsRUFBRSxFQUFFO0FBQ1YsSUFBSSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLHFCQUFxQixFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO0FBQzl6QixJQUFJLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFO0FBQ3ZtQixJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwYyxJQUFJLGFBQWEsRUFBRSxTQUFTLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDckYsTUFBTSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUM3QixNQUFNLFFBQVEsT0FBTztBQUNyQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDakMsVUFBVSxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyxV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Q0FBQztBQUN0QyxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN0QyxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN0QyxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztBQUNsRCxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNsRixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztBQUNsRCxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztBQUN0RCxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFCLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDNUMsVUFBVSxNQUFNO0FBQ2hCLE9BQU87QUFDUCxLQUFLO0FBQ0wsSUFBSSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzU5SCxJQUFJLGNBQWMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDNUMsSUFBSSxVQUFVLEVBQUUsU0FBUyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUMvQyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUM1QixRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEIsT0FBTyxNQUFNO0FBQ2IsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQyxRQUFRLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQzFCLFFBQVEsTUFBTSxLQUFLLENBQUM7QUFDcEIsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLEtBQUssRUFBRSxTQUFT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U0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSw0QkFBNEIsRUFBRSxTQUFTLENBQUM7QUFDNzNCLE1BQU0sVUFBVSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLHFCQUFxQixFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFF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QUksRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN1MsR0FBRztBQUNILEVBQUUsTUFBTSxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3RJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvTCxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFF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
