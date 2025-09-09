'use strict';

var index = require('./index-deb671d6.js');
var createText2e5e7dd3 = require('./createText-2e5e7dd3-781a22a4.js');
require('./main-5c8f274d.js');
var init = require('./init-8ddd39ad.js');
var ordinal = require('./ordinal-457f9936.js');
var linear = require('./linear-6dcd69c1.js');
var line = require('./line-891b5b35.js');
require('obsidian');
require('./array-aca279a4.js');
require('./path-29c5310d.js');

function range(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
}

function band() {
  var scale = ordinal.ordinal().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      r0 = 0,
      r1 = 1,
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = r1 < r0,
        start = reverse ? r1 : r0,
        stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = range(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };

  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), [r0, r1])
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return init.initRange.apply(rescale(), arguments);
}

var parser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [1, 10, 12, 14, 16, 18, 19, 21, 23], $V1 = [2, 6], $V2 = [1, 3], $V3 = [1, 5], $V4 = [1, 6], $V5 = [1, 7], $V6 = [1, 5, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36], $V7 = [1, 25], $V8 = [1, 26], $V9 = [1, 28], $Va = [1, 29], $Vb = [1, 30], $Vc = [1, 31], $Vd = [1, 32], $Ve = [1, 33], $Vf = [1, 34], $Vg = [1, 35], $Vh = [1, 36], $Vi = [1, 37], $Vj = [1, 43], $Vk = [1, 42], $Vl = [1, 47], $Vm = [1, 50], $Vn = [1, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36], $Vo = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36], $Vp = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], $Vq = [1, 64];
  var parser2 = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "start": 3, "eol": 4, "XYCHART": 5, "chartConfig": 6, "document": 7, "CHART_ORIENTATION": 8, "statement": 9, "title": 10, "text": 11, "X_AXIS": 12, "parseXAxis": 13, "Y_AXIS": 14, "parseYAxis": 15, "LINE": 16, "plotData": 17, "BAR": 18, "acc_title": 19, "acc_title_value": 20, "acc_descr": 21, "acc_descr_value": 22, "acc_descr_multiline_value": 23, "SQUARE_BRACES_START": 24, "commaSeparatedNumbers": 25, "SQUARE_BRACES_END": 26, "NUMBER_WITH_DECIMAL": 27, "COMMA": 28, "xAxisData": 29, "bandData": 30, "ARROW_DELIMITER": 31, "commaSeparatedTexts": 32, "yAxisData": 33, "NEWLINE": 34, "SEMI": 35, "EOF": 36, "alphaNum": 37, "STR": 38, "MD_STR": 39, "alphaNumToken": 40, "AMP": 41, "NUM": 42, "ALPHA": 43, "PLUS": 44, "EQUALS": 45, "MULT": 46, "DOT": 47, "BRKT": 48, "MINUS": 49, "UNDERSCORE": 50, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 5: "XYCHART", 8: "CHART_ORIENTATION", 10: "title", 12: "X_AXIS", 14: "Y_AXIS", 16: "LINE", 18: "BAR", 19: "acc_title", 20: "acc_title_value", 21: "acc_descr", 22: "acc_descr_value", 23: "acc_descr_multiline_value", 24: "SQUARE_BRACES_START", 26: "SQUARE_BRACES_END", 27: "NUMBER_WITH_DECIMAL", 28: "COMMA", 31: "ARROW_DELIMITER", 34: "NEWLINE", 35: "SEMI", 36: "EOF", 38: "STR", 39: "MD_STR", 41: "AMP", 42: "NUM", 43: "ALPHA", 44: "PLUS", 45: "EQUALS", 46: "MULT", 47: "DOT", 48: "BRKT", 49: "MINUS", 50: "UNDERSCORE" },
    productions_: [0, [3, 2], [3, 3], [3, 2], [3, 1], [6, 1], [7, 0], [7, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 3], [9, 2], [9, 3], [9, 2], [9, 2], [9, 1], [17, 3], [25, 3], [25, 1], [13, 1], [13, 2], [13, 1], [29, 1], [29, 3], [30, 3], [32, 3], [32, 1], [15, 1], [15, 2], [15, 1], [33, 3], [4, 1], [4, 1], [4, 1], [11, 1], [11, 1], [11, 1], [37, 1], [37, 2], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 5:
          yy.setOrientation($$[$0]);
          break;
        case 9:
          yy.setDiagramTitle($$[$0].text.trim());
          break;
        case 12:
          yy.setLineData({ text: "", type: "text" }, $$[$0]);
          break;
        case 13:
          yy.setLineData($$[$0 - 1], $$[$0]);
          break;
        case 14:
          yy.setBarData({ text: "", type: "text" }, $$[$0]);
          break;
        case 15:
          yy.setBarData($$[$0 - 1], $$[$0]);
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
          this.$ = $$[$0 - 1];
          break;
        case 20:
          this.$ = [Number($$[$0 - 2]), ...$$[$0]];
          break;
        case 21:
          this.$ = [Number($$[$0])];
          break;
        case 22:
          yy.setXAxisTitle($$[$0]);
          break;
        case 23:
          yy.setXAxisTitle($$[$0 - 1]);
          break;
        case 24:
          yy.setXAxisTitle({ type: "text", text: "" });
          break;
        case 25:
          yy.setXAxisBand($$[$0]);
          break;
        case 26:
          yy.setXAxisRangeData(Number($$[$0 - 2]), Number($$[$0]));
          break;
        case 27:
          this.$ = $$[$0 - 1];
          break;
        case 28:
          this.$ = [$$[$0 - 2], ...$$[$0]];
          break;
        case 29:
          this.$ = [$$[$0]];
          break;
        case 30:
          yy.setYAxisTitle($$[$0]);
          break;
        case 31:
          yy.setYAxisTitle($$[$0 - 1]);
          break;
        case 32:
          yy.setYAxisTitle({ type: "text", text: "" });
          break;
        case 33:
          yy.setYAxisRangeData(Number($$[$0 - 2]), Number($$[$0]));
          break;
        case 37:
          this.$ = { text: $$[$0], type: "text" };
          break;
        case 38:
          this.$ = { text: $$[$0], type: "text" };
          break;
        case 39:
          this.$ = { text: $$[$0], type: "markdown" };
          break;
        case 40:
          this.$ = $$[$0];
          break;
        case 41:
          this.$ = $$[$0 - 1] + "" + $$[$0];
          break;
      }
    },
    table: [o($V0, $V1, { 3: 1, 4: 2, 7: 4, 5: $V2, 34: $V3, 35: $V4, 36: $V5 }), { 1: [3] }, o($V0, $V1, { 4: 2, 7: 4, 3: 8, 5: $V2, 34: $V3, 35: $V4, 36: $V5 }), o($V0, $V1, { 4: 2, 7: 4, 6: 9, 3: 10, 5: $V2, 8: [1, 11], 34: $V3, 35: $V4, 36: $V5 }), { 1: [2, 4], 9: 12, 10: [1, 13], 12: [1, 14], 14: [1, 15], 16: [1, 16], 18: [1, 17], 19: [1, 18], 21: [1, 19], 23: [1, 20] }, o($V6, [2, 34]), o($V6, [2, 35]), o($V6, [2, 36]), { 1: [2, 1] }, o($V0, $V1, { 4: 2, 7: 4, 3: 21, 5: $V2, 34: $V3, 35: $V4, 36: $V5 }), { 1: [2, 3] }, o($V6, [2, 5]), o($V0, [2, 7], { 4: 22, 34: $V3, 35: $V4, 36: $V5 }), { 11: 23, 37: 24, 38: $V7, 39: $V8, 40: 27, 41: $V9, 42: $Va, 43: $Vb, 44: $Vc, 45: $Vd, 46: $Ve, 47: $Vf, 48: $Vg, 49: $Vh, 50: $Vi }, { 11: 39, 13: 38, 24: $Vj, 27: $Vk, 29: 40, 30: 41, 37: 24, 38: $V7, 39: $V8, 40: 27, 41: $V9, 42: $Va, 43: $Vb, 44: $Vc, 45: $Vd, 46: $Ve, 47: $Vf, 48: $Vg, 49: $Vh, 50: $Vi }, { 11: 45, 15: 44, 27: $Vl, 33: 46, 37: 24, 38: $V7, 39: $V8, 40: 27, 41: $V9, 42: $Va, 43: $Vb, 44: $Vc, 45: $Vd, 46: $Ve, 47: $Vf, 48: $Vg, 49: $Vh, 50: $Vi }, { 11: 49, 17: 48, 24: $Vm, 37: 24, 38: $V7, 39: $V8, 40: 27, 41: $V9, 42: $Va, 43: $Vb, 44: $Vc, 45: $Vd, 46: $Ve, 47: $Vf, 48: $Vg, 49: $Vh, 50: $Vi }, { 11: 52, 17: 51, 24: $Vm, 37: 24, 38: $V7, 39: $V8, 40: 27, 41: $V9, 42: $Va, 43: $Vb, 44: $Vc, 45: $Vd, 46: $Ve, 47: $Vf, 48: $Vg, 49: $Vh, 50: $Vi }, { 20: [1, 53] }, { 22: [1, 54] }, o($Vn, [2, 18]), { 1: [2, 2] }, o($Vn, [2, 8]), o($Vn, [2, 9]), o($Vo, [2, 37], { 40: 55, 41: $V9, 42: $Va, 43: $Vb, 44: $Vc, 45: $Vd, 46: $Ve, 47: $Vf, 48: $Vg, 49: $Vh, 50: $Vi }), o($Vo, [2, 38]), o($Vo, [2, 39]), o($Vp, [2, 40]), o($Vp, [2, 42]), o($Vp, [2, 43]), o($Vp, [2, 44]), o($Vp, [2, 45]), o($Vp, [2, 46]), o($Vp, [2, 47]), o($Vp, [2, 48]), o($Vp, [2, 49]), o($Vp, [2, 50]), o($Vp, [2, 51]), o($Vn, [2, 10]), o($Vn, [2, 22], { 30: 41, 29: 56, 24: $Vj, 27: $Vk }), o($Vn, [2, 24]), o($Vn, [2, 25]), { 31: [1, 57] }, { 11: 59, 32: 58, 37: 24, 38: $V7, 39: $V8, 40: 27, 41: $V9, 42: $Va, 43: $Vb, 44: $Vc, 45: $Vd, 46: $Ve, 47: $Vf, 48: $Vg, 49: $Vh, 50: $Vi }, o($Vn, [2, 11]), o($Vn, [2, 30], { 33: 60, 27: $Vl }), o($Vn, [2, 32]), { 31: [1, 61] }, o($Vn, [2, 12]), { 17: 62, 24: $Vm }, { 25: 63, 27: $Vq }, o($Vn, [2, 14]), { 17: 65, 24: $Vm }, o($Vn, [2, 16]), o($Vn, [2, 17]), o($Vp, [2, 41]), o($Vn, [2, 23]), { 27: [1, 66] }, { 26: [1, 67] }, { 26: [2, 29], 28: [1, 68] }, o($Vn, [2, 31]), { 27: [1, 69] }, o($Vn, [2, 13]), { 26: [1, 70] }, { 26: [2, 21], 28: [1, 71] }, o($Vn, [2, 15]), o($Vn, [2, 26]), o($Vn, [2, 27]), { 11: 59, 32: 72, 37: 24, 38: $V7, 39: $V8, 40: 27, 41: $V9, 42: $Va, 43: $Vb, 44: $Vc, 45: $Vd, 46: $Ve, 47: $Vf, 48: $Vg, 49: $Vh, 50: $Vi }, o($Vn, [2, 33]), o($Vn, [2, 19]), { 25: 73, 27: $Vq }, { 26: [2, 28] }, { 26: [2, 20] }],
    defaultActions: { 8: [2, 1], 10: [2, 3], 21: [2, 2], 72: [2, 28], 73: [2, 20] },
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
            this.popState();
            return 34;
          case 3:
            this.popState();
            return 34;
          case 4:
            return 34;
          case 5:
            break;
          case 6:
            return 10;
          case 7:
            this.pushState("acc_title");
            return 19;
          case 8:
            this.popState();
            return "acc_title_value";
          case 9:
            this.pushState("acc_descr");
            return 21;
          case 10:
            this.popState();
            return "acc_descr_value";
          case 11:
            this.pushState("acc_descr_multiline");
            break;
          case 12:
            this.popState();
            break;
          case 13:
            return "acc_descr_multiline_value";
          case 14:
            return 5;
          case 15:
            return 8;
          case 16:
            this.pushState("axis_data");
            return "X_AXIS";
          case 17:
            this.pushState("axis_data");
            return "Y_AXIS";
          case 18:
            this.pushState("axis_band_data");
            return 24;
          case 19:
            return 31;
          case 20:
            this.pushState("data");
            return 16;
          case 21:
            this.pushState("data");
            return 18;
          case 22:
            this.pushState("data_inner");
            return 24;
          case 23:
            return 27;
          case 24:
            this.popState();
            return 26;
          case 25:
            this.popState();
            break;
          case 26:
            this.pushState("string");
            break;
          case 27:
            this.popState();
            break;
          case 28:
            return "STR";
          case 29:
            return 24;
          case 30:
            return 26;
          case 31:
            return 43;
          case 32:
            return "COLON";
          case 33:
            return 44;
          case 34:
            return 28;
          case 35:
            return 45;
          case 36:
            return 46;
          case 37:
            return 48;
          case 38:
            return 50;
          case 39:
            return 47;
          case 40:
            return 41;
          case 41:
            return 49;
          case 42:
            return 42;
          case 43:
            break;
          case 44:
            return 35;
          case 45:
            return 36;
        }
      },
      rules: [/^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:(\r?\n))/i, /^(?:(\r?\n))/i, /^(?:[\n\r]+)/i, /^(?:%%[^\n]*)/i, /^(?:title\b)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:\{)/i, /^(?:[^\}]*)/i, /^(?:xychart-beta\b)/i, /^(?:(?:vertical|horizontal))/i, /^(?:x-axis\b)/i, /^(?:y-axis\b)/i, /^(?:\[)/i, /^(?:-->)/i, /^(?:line\b)/i, /^(?:bar\b)/i, /^(?:\[)/i, /^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i, /^(?:\])/i, /^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:\[)/i, /^(?:\])/i, /^(?:[A-Za-z]+)/i, /^(?::)/i, /^(?:\+)/i, /^(?:,)/i, /^(?:=)/i, /^(?:\*)/i, /^(?:#)/i, /^(?:[\_])/i, /^(?:\.)/i, /^(?:&)/i, /^(?:-)/i, /^(?:[0-9]+)/i, /^(?:\s+)/i, /^(?:;)/i, /^(?:$)/i],
      conditions: { "data_inner": { "rules": [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 23, 24, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], "inclusive": true }, "data": { "rules": [0, 1, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 22, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], "inclusive": true }, "axis_band_data": { "rules": [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 24, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], "inclusive": true }, "axis_data": { "rules": [0, 1, 2, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], "inclusive": true }, "acc_descr_multiline": { "rules": [12, 13], "inclusive": false }, "acc_descr": { "rules": [10], "inclusive": false }, "acc_title": { "rules": [8], "inclusive": false }, "title": { "rules": [], "inclusive": false }, "md_string": { "rules": [], "inclusive": false }, "string": { "rules": [27, 28], "inclusive": false }, "INITIAL": { "rules": [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], "inclusive": true } }
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
function isBarPlot(data) {
  return data.type === "bar";
}
function isBandAxisData(data) {
  return data.type === "band";
}
function isLinearAxisData(data) {
  return data.type === "linear";
}
class TextDimensionCalculatorWithFont {
  constructor(parentGroup) {
    this.parentGroup = parentGroup;
  }
  getMaxDimension(texts, fontSize) {
    if (!this.parentGroup) {
      return {
        width: texts.reduce((acc, cur) => Math.max(cur.length, acc), 0) * fontSize,
        height: fontSize
      };
    }
    const dimension = {
      width: 0,
      height: 0
    };
    const elem = this.parentGroup.append("g").attr("visibility", "hidden").attr("font-size", fontSize);
    for (const t of texts) {
      const bbox = createText2e5e7dd3.computeDimensionOfText(elem, 1, t);
      const width = bbox ? bbox.width : t.length * fontSize;
      const height = bbox ? bbox.height : fontSize;
      dimension.width = Math.max(dimension.width, width);
      dimension.height = Math.max(dimension.height, height);
    }
    elem.remove();
    return dimension;
  }
}
const BAR_WIDTH_TO_TICK_WIDTH_RATIO = 0.7;
const MAX_OUTER_PADDING_PERCENT_FOR_WRT_LABEL = 0.2;
class BaseAxis {
  constructor(axisConfig, title, textDimensionCalculator, axisThemeConfig) {
    this.axisConfig = axisConfig;
    this.title = title;
    this.textDimensionCalculator = textDimensionCalculator;
    this.axisThemeConfig = axisThemeConfig;
    this.boundingRect = { x: 0, y: 0, width: 0, height: 0 };
    this.axisPosition = "left";
    this.showTitle = false;
    this.showLabel = false;
    this.showTick = false;
    this.showAxisLine = false;
    this.outerPadding = 0;
    this.titleTextHeight = 0;
    this.labelTextHeight = 0;
    this.range = [0, 10];
    this.boundingRect = { x: 0, y: 0, width: 0, height: 0 };
    this.axisPosition = "left";
  }
  setRange(range) {
    this.range = range;
    if (this.axisPosition === "left" || this.axisPosition === "right") {
      this.boundingRect.height = range[1] - range[0];
    } else {
      this.boundingRect.width = range[1] - range[0];
    }
    this.recalculateScale();
  }
  getRange() {
    return [this.range[0] + this.outerPadding, this.range[1] - this.outerPadding];
  }
  setAxisPosition(axisPosition) {
    this.axisPosition = axisPosition;
    this.setRange(this.range);
  }
  getTickDistance() {
    const range = this.getRange();
    return Math.abs(range[0] - range[1]) / this.getTickValues().length;
  }
  getAxisOuterPadding() {
    return this.outerPadding;
  }
  getLabelDimension() {
    return this.textDimensionCalculator.getMaxDimension(
      this.getTickValues().map((tick) => tick.toString()),
      this.axisConfig.labelFontSize
    );
  }
  recalculateOuterPaddingToDrawBar() {
    if (BAR_WIDTH_TO_TICK_WIDTH_RATIO * this.getTickDistance() > this.outerPadding * 2) {
      this.outerPadding = Math.floor(BAR_WIDTH_TO_TICK_WIDTH_RATIO * this.getTickDistance() / 2);
    }
    this.recalculateScale();
  }
  calculateSpaceIfDrawnHorizontally(availableSpace) {
    let availableHeight = availableSpace.height;
    if (this.axisConfig.showAxisLine && availableHeight > this.axisConfig.axisLineWidth) {
      availableHeight -= this.axisConfig.axisLineWidth;
      this.showAxisLine = true;
    }
    if (this.axisConfig.showLabel) {
      const spaceRequired = this.getLabelDimension();
      const maxPadding = MAX_OUTER_PADDING_PERCENT_FOR_WRT_LABEL * availableSpace.width;
      this.outerPadding = Math.min(spaceRequired.width / 2, maxPadding);
      const heightRequired = spaceRequired.height + this.axisConfig.labelPadding * 2;
      this.labelTextHeight = spaceRequired.height;
      if (heightRequired <= availableHeight) {
        availableHeight -= heightRequired;
        this.showLabel = true;
      }
    }
    if (this.axisConfig.showTick && availableHeight >= this.axisConfig.tickLength) {
      this.showTick = true;
      availableHeight -= this.axisConfig.tickLength;
    }
    if (this.axisConfig.showTitle && this.title) {
      const spaceRequired = this.textDimensionCalculator.getMaxDimension(
        [this.title],
        this.axisConfig.titleFontSize
      );
      const heightRequired = spaceRequired.height + this.axisConfig.titlePadding * 2;
      this.titleTextHeight = spaceRequired.height;
      if (heightRequired <= availableHeight) {
        availableHeight -= heightRequired;
        this.showTitle = true;
      }
    }
    this.boundingRect.width = availableSpace.width;
    this.boundingRect.height = availableSpace.height - availableHeight;
  }
  calculateSpaceIfDrawnVertical(availableSpace) {
    let availableWidth = availableSpace.width;
    if (this.axisConfig.showAxisLine && availableWidth > this.axisConfig.axisLineWidth) {
      availableWidth -= this.axisConfig.axisLineWidth;
      this.showAxisLine = true;
    }
    if (this.axisConfig.showLabel) {
      const spaceRequired = this.getLabelDimension();
      const maxPadding = MAX_OUTER_PADDING_PERCENT_FOR_WRT_LABEL * availableSpace.height;
      this.outerPadding = Math.min(spaceRequired.height / 2, maxPadding);
      const widthRequired = spaceRequired.width + this.axisConfig.labelPadding * 2;
      if (widthRequired <= availableWidth) {
        availableWidth -= widthRequired;
        this.showLabel = true;
      }
    }
    if (this.axisConfig.showTick && availableWidth >= this.axisConfig.tickLength) {
      this.showTick = true;
      availableWidth -= this.axisConfig.tickLength;
    }
    if (this.axisConfig.showTitle && this.title) {
      const spaceRequired = this.textDimensionCalculator.getMaxDimension(
        [this.title],
        this.axisConfig.titleFontSize
      );
      const widthRequired = spaceRequired.height + this.axisConfig.titlePadding * 2;
      this.titleTextHeight = spaceRequired.height;
      if (widthRequired <= availableWidth) {
        availableWidth -= widthRequired;
        this.showTitle = true;
      }
    }
    this.boundingRect.width = availableSpace.width - availableWidth;
    this.boundingRect.height = availableSpace.height;
  }
  calculateSpace(availableSpace) {
    if (this.axisPosition === "left" || this.axisPosition === "right") {
      this.calculateSpaceIfDrawnVertical(availableSpace);
    } else {
      this.calculateSpaceIfDrawnHorizontally(availableSpace);
    }
    this.recalculateScale();
    return {
      width: this.boundingRect.width,
      height: this.boundingRect.height
    };
  }
  setBoundingBoxXY(point) {
    this.boundingRect.x = point.x;
    this.boundingRect.y = point.y;
  }
  getDrawableElementsForLeftAxis() {
    const drawableElement = [];
    if (this.showAxisLine) {
      const x = this.boundingRect.x + this.boundingRect.width - this.axisConfig.axisLineWidth / 2;
      drawableElement.push({
        type: "path",
        groupTexts: ["left-axis", "axisl-line"],
        data: [
          {
            path: `M ${x},${this.boundingRect.y} L ${x},${this.boundingRect.y + this.boundingRect.height} `,
            strokeFill: this.axisThemeConfig.axisLineColor,
            strokeWidth: this.axisConfig.axisLineWidth
          }
        ]
      });
    }
    if (this.showLabel) {
      drawableElement.push({
        type: "text",
        groupTexts: ["left-axis", "label"],
        data: this.getTickValues().map((tick) => ({
          text: tick.toString(),
          x: this.boundingRect.x + this.boundingRect.width - (this.showLabel ? this.axisConfig.labelPadding : 0) - (this.showTick ? this.axisConfig.tickLength : 0) - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
          y: this.getScaleValue(tick),
          fill: this.axisThemeConfig.labelColor,
          fontSize: this.axisConfig.labelFontSize,
          rotation: 0,
          verticalPos: "middle",
          horizontalPos: "right"
        }))
      });
    }
    if (this.showTick) {
      const x = this.boundingRect.x + this.boundingRect.width - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
      drawableElement.push({
        type: "path",
        groupTexts: ["left-axis", "ticks"],
        data: this.getTickValues().map((tick) => ({
          path: `M ${x},${this.getScaleValue(tick)} L ${x - this.axisConfig.tickLength},${this.getScaleValue(tick)}`,
          strokeFill: this.axisThemeConfig.tickColor,
          strokeWidth: this.axisConfig.tickWidth
        }))
      });
    }
    if (this.showTitle) {
      drawableElement.push({
        type: "text",
        groupTexts: ["left-axis", "title"],
        data: [
          {
            text: this.title,
            x: this.boundingRect.x + this.axisConfig.titlePadding,
            y: this.boundingRect.y + this.boundingRect.height / 2,
            fill: this.axisThemeConfig.titleColor,
            fontSize: this.axisConfig.titleFontSize,
            rotation: 270,
            verticalPos: "top",
            horizontalPos: "center"
          }
        ]
      });
    }
    return drawableElement;
  }
  getDrawableElementsForBottomAxis() {
    const drawableElement = [];
    if (this.showAxisLine) {
      const y = this.boundingRect.y + this.axisConfig.axisLineWidth / 2;
      drawableElement.push({
        type: "path",
        groupTexts: ["bottom-axis", "axis-line"],
        data: [
          {
            path: `M ${this.boundingRect.x},${y} L ${this.boundingRect.x + this.boundingRect.width},${y}`,
            strokeFill: this.axisThemeConfig.axisLineColor,
            strokeWidth: this.axisConfig.axisLineWidth
          }
        ]
      });
    }
    if (this.showLabel) {
      drawableElement.push({
        type: "text",
        groupTexts: ["bottom-axis", "label"],
        data: this.getTickValues().map((tick) => ({
          text: tick.toString(),
          x: this.getScaleValue(tick),
          y: this.boundingRect.y + this.axisConfig.labelPadding + (this.showTick ? this.axisConfig.tickLength : 0) + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
          fill: this.axisThemeConfig.labelColor,
          fontSize: this.axisConfig.labelFontSize,
          rotation: 0,
          verticalPos: "top",
          horizontalPos: "center"
        }))
      });
    }
    if (this.showTick) {
      const y = this.boundingRect.y + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
      drawableElement.push({
        type: "path",
        groupTexts: ["bottom-axis", "ticks"],
        data: this.getTickValues().map((tick) => ({
          path: `M ${this.getScaleValue(tick)},${y} L ${this.getScaleValue(tick)},${y + this.axisConfig.tickLength}`,
          strokeFill: this.axisThemeConfig.tickColor,
          strokeWidth: this.axisConfig.tickWidth
        }))
      });
    }
    if (this.showTitle) {
      drawableElement.push({
        type: "text",
        groupTexts: ["bottom-axis", "title"],
        data: [
          {
            text: this.title,
            x: this.range[0] + (this.range[1] - this.range[0]) / 2,
            y: this.boundingRect.y + this.boundingRect.height - this.axisConfig.titlePadding - this.titleTextHeight,
            fill: this.axisThemeConfig.titleColor,
            fontSize: this.axisConfig.titleFontSize,
            rotation: 0,
            verticalPos: "top",
            horizontalPos: "center"
          }
        ]
      });
    }
    return drawableElement;
  }
  getDrawableElementsForTopAxis() {
    const drawableElement = [];
    if (this.showAxisLine) {
      const y = this.boundingRect.y + this.boundingRect.height - this.axisConfig.axisLineWidth / 2;
      drawableElement.push({
        type: "path",
        groupTexts: ["top-axis", "axis-line"],
        data: [
          {
            path: `M ${this.boundingRect.x},${y} L ${this.boundingRect.x + this.boundingRect.width},${y}`,
            strokeFill: this.axisThemeConfig.axisLineColor,
            strokeWidth: this.axisConfig.axisLineWidth
          }
        ]
      });
    }
    if (this.showLabel) {
      drawableElement.push({
        type: "text",
        groupTexts: ["top-axis", "label"],
        data: this.getTickValues().map((tick) => ({
          text: tick.toString(),
          x: this.getScaleValue(tick),
          y: this.boundingRect.y + (this.showTitle ? this.titleTextHeight + this.axisConfig.titlePadding * 2 : 0) + this.axisConfig.labelPadding,
          fill: this.axisThemeConfig.labelColor,
          fontSize: this.axisConfig.labelFontSize,
          rotation: 0,
          verticalPos: "top",
          horizontalPos: "center"
        }))
      });
    }
    if (this.showTick) {
      const y = this.boundingRect.y;
      drawableElement.push({
        type: "path",
        groupTexts: ["top-axis", "ticks"],
        data: this.getTickValues().map((tick) => ({
          path: `M ${this.getScaleValue(tick)},${y + this.boundingRect.height - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)} L ${this.getScaleValue(tick)},${y + this.boundingRect.height - this.axisConfig.tickLength - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)}`,
          strokeFill: this.axisThemeConfig.tickColor,
          strokeWidth: this.axisConfig.tickWidth
        }))
      });
    }
    if (this.showTitle) {
      drawableElement.push({
        type: "text",
        groupTexts: ["top-axis", "title"],
        data: [
          {
            text: this.title,
            x: this.boundingRect.x + this.boundingRect.width / 2,
            y: this.boundingRect.y + this.axisConfig.titlePadding,
            fill: this.axisThemeConfig.titleColor,
            fontSize: this.axisConfig.titleFontSize,
            rotation: 0,
            verticalPos: "top",
            horizontalPos: "center"
          }
        ]
      });
    }
    return drawableElement;
  }
  getDrawableElements() {
    if (this.axisPosition === "left") {
      return this.getDrawableElementsForLeftAxis();
    }
    if (this.axisPosition === "right") {
      throw Error("Drawing of right axis is not implemented");
    }
    if (this.axisPosition === "bottom") {
      return this.getDrawableElementsForBottomAxis();
    }
    if (this.axisPosition === "top") {
      return this.getDrawableElementsForTopAxis();
    }
    return [];
  }
}
class BandAxis extends BaseAxis {
  constructor(axisConfig, axisThemeConfig, categories, title, textDimensionCalculator) {
    super(axisConfig, title, textDimensionCalculator, axisThemeConfig);
    this.categories = categories;
    this.scale = band().domain(this.categories).range(this.getRange());
  }
  setRange(range) {
    super.setRange(range);
  }
  recalculateScale() {
    this.scale = band().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(0.5);
    index.log$1.trace("BandAxis axis final categories, range: ", this.categories, this.getRange());
  }
  getTickValues() {
    return this.categories;
  }
  getScaleValue(value) {
    return this.scale(value) || this.getRange()[0];
  }
}
class LinearAxis extends BaseAxis {
  constructor(axisConfig, axisThemeConfig, domain, title, textDimensionCalculator) {
    super(axisConfig, title, textDimensionCalculator, axisThemeConfig);
    this.domain = domain;
    this.scale = linear.linear().domain(this.domain).range(this.getRange());
  }
  getTickValues() {
    return this.scale.ticks();
  }
  recalculateScale() {
    const domain = [...this.domain];
    if (this.axisPosition === "left") {
      domain.reverse();
    }
    this.scale = linear.linear().domain(domain).range(this.getRange());
  }
  getScaleValue(value) {
    return this.scale(value);
  }
}
function getAxis(data, axisConfig, axisThemeConfig, tmpSVGGroup2) {
  const textDimensionCalculator = new TextDimensionCalculatorWithFont(tmpSVGGroup2);
  if (isBandAxisData(data)) {
    return new BandAxis(
      axisConfig,
      axisThemeConfig,
      data.categories,
      data.title,
      textDimensionCalculator
    );
  }
  return new LinearAxis(
    axisConfig,
    axisThemeConfig,
    [data.min, data.max],
    data.title,
    textDimensionCalculator
  );
}
class ChartTitle {
  constructor(textDimensionCalculator, chartConfig, chartData, chartThemeConfig) {
    this.textDimensionCalculator = textDimensionCalculator;
    this.chartConfig = chartConfig;
    this.chartData = chartData;
    this.chartThemeConfig = chartThemeConfig;
    this.boundingRect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    this.showChartTitle = false;
  }
  setBoundingBoxXY(point) {
    this.boundingRect.x = point.x;
    this.boundingRect.y = point.y;
  }
  calculateSpace(availableSpace) {
    const titleDimension = this.textDimensionCalculator.getMaxDimension(
      [this.chartData.title],
      this.chartConfig.titleFontSize
    );
    const widthRequired = Math.max(titleDimension.width, availableSpace.width);
    const heightRequired = titleDimension.height + 2 * this.chartConfig.titlePadding;
    if (titleDimension.width <= widthRequired && titleDimension.height <= heightRequired && this.chartConfig.showTitle && this.chartData.title) {
      this.boundingRect.width = widthRequired;
      this.boundingRect.height = heightRequired;
      this.showChartTitle = true;
    }
    return {
      width: this.boundingRect.width,
      height: this.boundingRect.height
    };
  }
  getDrawableElements() {
    const drawableElem = [];
    if (this.showChartTitle) {
      drawableElem.push({
        groupTexts: ["chart-title"],
        type: "text",
        data: [
          {
            fontSize: this.chartConfig.titleFontSize,
            text: this.chartData.title,
            verticalPos: "middle",
            horizontalPos: "center",
            x: this.boundingRect.x + this.boundingRect.width / 2,
            y: this.boundingRect.y + this.boundingRect.height / 2,
            fill: this.chartThemeConfig.titleColor,
            rotation: 0
          }
        ]
      });
    }
    return drawableElem;
  }
}
function getChartTitleComponent(chartConfig, chartData, chartThemeConfig, tmpSVGGroup2) {
  const textDimensionCalculator = new TextDimensionCalculatorWithFont(tmpSVGGroup2);
  return new ChartTitle(textDimensionCalculator, chartConfig, chartData, chartThemeConfig);
}
class LinePlot {
  constructor(plotData, xAxis, yAxis, orientation, plotIndex2) {
    this.plotData = plotData;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.orientation = orientation;
    this.plotIndex = plotIndex2;
  }
  getDrawableElement() {
    const finalData = this.plotData.data.map((d) => [
      this.xAxis.getScaleValue(d[0]),
      this.yAxis.getScaleValue(d[1])
    ]);
    let path;
    if (this.orientation === "horizontal") {
      path = line.line().y((d) => d[0]).x((d) => d[1])(finalData);
    } else {
      path = line.line().x((d) => d[0]).y((d) => d[1])(finalData);
    }
    if (!path) {
      return [];
    }
    return [
      {
        groupTexts: ["plot", `line-plot-${this.plotIndex}`],
        type: "path",
        data: [
          {
            path,
            strokeFill: this.plotData.strokeFill,
            strokeWidth: this.plotData.strokeWidth
          }
        ]
      }
    ];
  }
}
class BarPlot {
  constructor(barData, boundingRect, xAxis, yAxis, orientation, plotIndex2) {
    this.barData = barData;
    this.boundingRect = boundingRect;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.orientation = orientation;
    this.plotIndex = plotIndex2;
  }
  getDrawableElement() {
    const finalData = this.barData.data.map((d) => [
      this.xAxis.getScaleValue(d[0]),
      this.yAxis.getScaleValue(d[1])
    ]);
    const barPaddingPercent = 0.05;
    const barWidth = Math.min(this.xAxis.getAxisOuterPadding() * 2, this.xAxis.getTickDistance()) * (1 - barPaddingPercent);
    const barWidthHalf = barWidth / 2;
    if (this.orientation === "horizontal") {
      return [
        {
          groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
          type: "rect",
          data: finalData.map((data) => ({
            x: this.boundingRect.x,
            y: data[0] - barWidthHalf,
            height: barWidth,
            width: data[1] - this.boundingRect.x,
            fill: this.barData.fill,
            strokeWidth: 0,
            strokeFill: this.barData.fill
          }))
        }
      ];
    }
    return [
      {
        groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
        type: "rect",
        data: finalData.map((data) => ({
          x: data[0] - barWidthHalf,
          y: data[1],
          width: barWidth,
          height: this.boundingRect.y + this.boundingRect.height - data[1],
          fill: this.barData.fill,
          strokeWidth: 0,
          strokeFill: this.barData.fill
        }))
      }
    ];
  }
}
class BasePlot {
  constructor(chartConfig, chartData, chartThemeConfig) {
    this.chartConfig = chartConfig;
    this.chartData = chartData;
    this.chartThemeConfig = chartThemeConfig;
    this.boundingRect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
  setAxes(xAxis, yAxis) {
    this.xAxis = xAxis;
    this.yAxis = yAxis;
  }
  setBoundingBoxXY(point) {
    this.boundingRect.x = point.x;
    this.boundingRect.y = point.y;
  }
  calculateSpace(availableSpace) {
    this.boundingRect.width = availableSpace.width;
    this.boundingRect.height = availableSpace.height;
    return {
      width: this.boundingRect.width,
      height: this.boundingRect.height
    };
  }
  getDrawableElements() {
    if (!(this.xAxis && this.yAxis)) {
      throw Error("Axes must be passed to render Plots");
    }
    const drawableElem = [];
    for (const [i, plot] of this.chartData.plots.entries()) {
      switch (plot.type) {
        case "line":
          {
            const linePlot = new LinePlot(
              plot,
              this.xAxis,
              this.yAxis,
              this.chartConfig.chartOrientation,
              i
            );
            drawableElem.push(...linePlot.getDrawableElement());
          }
          break;
        case "bar":
          {
            const barPlot = new BarPlot(
              plot,
              this.boundingRect,
              this.xAxis,
              this.yAxis,
              this.chartConfig.chartOrientation,
              i
            );
            drawableElem.push(...barPlot.getDrawableElement());
          }
          break;
      }
    }
    return drawableElem;
  }
}
function getPlotComponent(chartConfig, chartData, chartThemeConfig) {
  return new BasePlot(chartConfig, chartData, chartThemeConfig);
}
class Orchestrator {
  constructor(chartConfig, chartData, chartThemeConfig, tmpSVGGroup2) {
    this.chartConfig = chartConfig;
    this.chartData = chartData;
    this.componentStore = {
      title: getChartTitleComponent(chartConfig, chartData, chartThemeConfig, tmpSVGGroup2),
      plot: getPlotComponent(chartConfig, chartData, chartThemeConfig),
      xAxis: getAxis(
        chartData.xAxis,
        chartConfig.xAxis,
        {
          titleColor: chartThemeConfig.xAxisTitleColor,
          labelColor: chartThemeConfig.xAxisLabelColor,
          tickColor: chartThemeConfig.xAxisTickColor,
          axisLineColor: chartThemeConfig.xAxisLineColor
        },
        tmpSVGGroup2
      ),
      yAxis: getAxis(
        chartData.yAxis,
        chartConfig.yAxis,
        {
          titleColor: chartThemeConfig.yAxisTitleColor,
          labelColor: chartThemeConfig.yAxisLabelColor,
          tickColor: chartThemeConfig.yAxisTickColor,
          axisLineColor: chartThemeConfig.yAxisLineColor
        },
        tmpSVGGroup2
      )
    };
  }
  calculateVerticalSpace() {
    let availableWidth = this.chartConfig.width;
    let availableHeight = this.chartConfig.height;
    let plotX = 0;
    let plotY = 0;
    let chartWidth = Math.floor(availableWidth * this.chartConfig.plotReservedSpacePercent / 100);
    let chartHeight = Math.floor(
      availableHeight * this.chartConfig.plotReservedSpacePercent / 100
    );
    let spaceUsed = this.componentStore.plot.calculateSpace({
      width: chartWidth,
      height: chartHeight
    });
    availableWidth -= spaceUsed.width;
    availableHeight -= spaceUsed.height;
    spaceUsed = this.componentStore.title.calculateSpace({
      width: this.chartConfig.width,
      height: availableHeight
    });
    plotY = spaceUsed.height;
    availableHeight -= spaceUsed.height;
    this.componentStore.xAxis.setAxisPosition("bottom");
    spaceUsed = this.componentStore.xAxis.calculateSpace({
      width: availableWidth,
      height: availableHeight
    });
    availableHeight -= spaceUsed.height;
    this.componentStore.yAxis.setAxisPosition("left");
    spaceUsed = this.componentStore.yAxis.calculateSpace({
      width: availableWidth,
      height: availableHeight
    });
    plotX = spaceUsed.width;
    availableWidth -= spaceUsed.width;
    if (availableWidth > 0) {
      chartWidth += availableWidth;
      availableWidth = 0;
    }
    if (availableHeight > 0) {
      chartHeight += availableHeight;
      availableHeight = 0;
    }
    this.componentStore.plot.calculateSpace({
      width: chartWidth,
      height: chartHeight
    });
    this.componentStore.plot.setBoundingBoxXY({ x: plotX, y: plotY });
    this.componentStore.xAxis.setRange([plotX, plotX + chartWidth]);
    this.componentStore.xAxis.setBoundingBoxXY({ x: plotX, y: plotY + chartHeight });
    this.componentStore.yAxis.setRange([plotY, plotY + chartHeight]);
    this.componentStore.yAxis.setBoundingBoxXY({ x: 0, y: plotY });
    if (this.chartData.plots.some((p) => isBarPlot(p))) {
      this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
    }
  }
  calculateHorizontalSpace() {
    let availableWidth = this.chartConfig.width;
    let availableHeight = this.chartConfig.height;
    let titleYEnd = 0;
    let plotX = 0;
    let plotY = 0;
    let chartWidth = Math.floor(availableWidth * this.chartConfig.plotReservedSpacePercent / 100);
    let chartHeight = Math.floor(
      availableHeight * this.chartConfig.plotReservedSpacePercent / 100
    );
    let spaceUsed = this.componentStore.plot.calculateSpace({
      width: chartWidth,
      height: chartHeight
    });
    availableWidth -= spaceUsed.width;
    availableHeight -= spaceUsed.height;
    spaceUsed = this.componentStore.title.calculateSpace({
      width: this.chartConfig.width,
      height: availableHeight
    });
    titleYEnd = spaceUsed.height;
    availableHeight -= spaceUsed.height;
    this.componentStore.xAxis.setAxisPosition("left");
    spaceUsed = this.componentStore.xAxis.calculateSpace({
      width: availableWidth,
      height: availableHeight
    });
    availableWidth -= spaceUsed.width;
    plotX = spaceUsed.width;
    this.componentStore.yAxis.setAxisPosition("top");
    spaceUsed = this.componentStore.yAxis.calculateSpace({
      width: availableWidth,
      height: availableHeight
    });
    availableHeight -= spaceUsed.height;
    plotY = titleYEnd + spaceUsed.height;
    if (availableWidth > 0) {
      chartWidth += availableWidth;
      availableWidth = 0;
    }
    if (availableHeight > 0) {
      chartHeight += availableHeight;
      availableHeight = 0;
    }
    this.componentStore.plot.calculateSpace({
      width: chartWidth,
      height: chartHeight
    });
    this.componentStore.plot.setBoundingBoxXY({ x: plotX, y: plotY });
    this.componentStore.yAxis.setRange([plotX, plotX + chartWidth]);
    this.componentStore.yAxis.setBoundingBoxXY({ x: plotX, y: titleYEnd });
    this.componentStore.xAxis.setRange([plotY, plotY + chartHeight]);
    this.componentStore.xAxis.setBoundingBoxXY({ x: 0, y: plotY });
    if (this.chartData.plots.some((p) => isBarPlot(p))) {
      this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
    }
  }
  calculateSpace() {
    if (this.chartConfig.chartOrientation === "horizontal") {
      this.calculateHorizontalSpace();
    } else {
      this.calculateVerticalSpace();
    }
  }
  getDrawableElement() {
    this.calculateSpace();
    const drawableElem = [];
    this.componentStore.plot.setAxes(this.componentStore.xAxis, this.componentStore.yAxis);
    for (const component of Object.values(this.componentStore)) {
      drawableElem.push(...component.getDrawableElements());
    }
    return drawableElem;
  }
}
class XYChartBuilder {
  static build(config, chartData, chartThemeConfig, tmpSVGGroup2) {
    const orchestrator = new Orchestrator(config, chartData, chartThemeConfig, tmpSVGGroup2);
    return orchestrator.getDrawableElement();
  }
}
let plotIndex = 0;
let tmpSVGGroup;
let xyChartConfig = getChartDefaultConfig();
let xyChartThemeConfig = getChartDefaultThemeConfig();
let xyChartData = getChartDefaultData();
let plotColorPalette = xyChartThemeConfig.plotColorPalette.split(",").map((color) => color.trim());
let hasSetXAxis = false;
let hasSetYAxis = false;
function getChartDefaultThemeConfig() {
  const defaultThemeVariables = index.getThemeVariables$2();
  const config = index.getConfig$1();
  return index.cleanAndMerge(defaultThemeVariables.xyChart, config.themeVariables.xyChart);
}
function getChartDefaultConfig() {
  const config = index.getConfig$1();
  return index.cleanAndMerge(
    index.defaultConfig$2.xyChart,
    config.xyChart
  );
}
function getChartDefaultData() {
  return {
    yAxis: {
      type: "linear",
      title: "",
      min: Infinity,
      max: -Infinity
    },
    xAxis: {
      type: "band",
      title: "",
      categories: []
    },
    title: "",
    plots: []
  };
}
function textSanitizer(text) {
  const config = index.getConfig$1();
  return index.sanitizeText$2(text.trim(), config);
}
function setTmpSVGG(SVGG) {
  tmpSVGGroup = SVGG;
}
function setOrientation(orientation) {
  if (orientation === "horizontal") {
    xyChartConfig.chartOrientation = "horizontal";
  } else {
    xyChartConfig.chartOrientation = "vertical";
  }
}
function setXAxisTitle(title) {
  xyChartData.xAxis.title = textSanitizer(title.text);
}
function setXAxisRangeData(min, max) {
  xyChartData.xAxis = { type: "linear", title: xyChartData.xAxis.title, min, max };
  hasSetXAxis = true;
}
function setXAxisBand(categories) {
  xyChartData.xAxis = {
    type: "band",
    title: xyChartData.xAxis.title,
    categories: categories.map((c) => textSanitizer(c.text))
  };
  hasSetXAxis = true;
}
function setYAxisTitle(title) {
  xyChartData.yAxis.title = textSanitizer(title.text);
}
function setYAxisRangeData(min, max) {
  xyChartData.yAxis = { type: "linear", title: xyChartData.yAxis.title, min, max };
  hasSetYAxis = true;
}
function setYAxisRangeFromPlotData(data) {
  const minValue = Math.min(...data);
  const maxValue = Math.max(...data);
  const prevMinValue = isLinearAxisData(xyChartData.yAxis) ? xyChartData.yAxis.min : Infinity;
  const prevMaxValue = isLinearAxisData(xyChartData.yAxis) ? xyChartData.yAxis.max : -Infinity;
  xyChartData.yAxis = {
    type: "linear",
    title: xyChartData.yAxis.title,
    min: Math.min(prevMinValue, minValue),
    max: Math.max(prevMaxValue, maxValue)
  };
}
function transformDataWithoutCategory(data) {
  let retData = [];
  if (data.length === 0) {
    return retData;
  }
  if (!hasSetXAxis) {
    const prevMinValue = isLinearAxisData(xyChartData.xAxis) ? xyChartData.xAxis.min : Infinity;
    const prevMaxValue = isLinearAxisData(xyChartData.xAxis) ? xyChartData.xAxis.max : -Infinity;
    setXAxisRangeData(Math.min(prevMinValue, 1), Math.max(prevMaxValue, data.length));
  }
  if (!hasSetYAxis) {
    setYAxisRangeFromPlotData(data);
  }
  if (isBandAxisData(xyChartData.xAxis)) {
    retData = xyChartData.xAxis.categories.map((c, i) => [c, data[i]]);
  }
  if (isLinearAxisData(xyChartData.xAxis)) {
    const min = xyChartData.xAxis.min;
    const max = xyChartData.xAxis.max;
    const step = (max - min + 1) / data.length;
    const categories = [];
    for (let i = min; i <= max; i += step) {
      categories.push(`${i}`);
    }
    retData = categories.map((c, i) => [c, data[i]]);
  }
  return retData;
}
function getPlotColorFromPalette(plotIndex2) {
  return plotColorPalette[plotIndex2 === 0 ? 0 : plotIndex2 % plotColorPalette.length];
}
function setLineData(title, data) {
  const plotData = transformDataWithoutCategory(data);
  xyChartData.plots.push({
    type: "line",
    strokeFill: getPlotColorFromPalette(plotIndex),
    strokeWidth: 2,
    data: plotData
  });
  plotIndex++;
}
function setBarData(title, data) {
  const plotData = transformDataWithoutCategory(data);
  xyChartData.plots.push({
    type: "bar",
    fill: getPlotColorFromPalette(plotIndex),
    data: plotData
  });
  plotIndex++;
}
function getDrawableElem() {
  if (xyChartData.plots.length === 0) {
    throw Error("No Plot to render, please provide a plot with some data");
  }
  xyChartData.title = index.getDiagramTitle();
  return XYChartBuilder.build(xyChartConfig, xyChartData, xyChartThemeConfig, tmpSVGGroup);
}
function getChartThemeConfig() {
  return xyChartThemeConfig;
}
function getChartConfig() {
  return xyChartConfig;
}
const clear = function() {
  index.clear();
  plotIndex = 0;
  xyChartConfig = getChartDefaultConfig();
  xyChartData = getChartDefaultData();
  xyChartThemeConfig = getChartDefaultThemeConfig();
  plotColorPalette = xyChartThemeConfig.plotColorPalette.split(",").map((color) => color.trim());
  hasSetXAxis = false;
  hasSetYAxis = false;
};
const db = {
  getDrawableElem,
  clear,
  setAccTitle: index.setAccTitle,
  getAccTitle: index.getAccTitle,
  setDiagramTitle: index.setDiagramTitle,
  getDiagramTitle: index.getDiagramTitle,
  getAccDescription: index.getAccDescription,
  setAccDescription: index.setAccDescription,
  setOrientation,
  setXAxisTitle,
  setXAxisRangeData,
  setXAxisBand,
  setYAxisTitle,
  setYAxisRangeData,
  setLineData,
  setBarData,
  setTmpSVGG,
  getChartThemeConfig,
  getChartConfig
};
const draw = (txt, id, _version, diagObj) => {
  const db2 = diagObj.db;
  const themeConfig = db2.getChartThemeConfig();
  const chartConfig = db2.getChartConfig();
  function getDominantBaseLine(horizontalPos) {
    return horizontalPos === "top" ? "text-before-edge" : "middle";
  }
  function getTextAnchor(verticalPos) {
    return verticalPos === "left" ? "start" : verticalPos === "right" ? "end" : "middle";
  }
  function getTextTransformation(data) {
    return `translate(${data.x}, ${data.y}) rotate(${data.rotation || 0})`;
  }
  index.log$1.debug("Rendering xychart chart\n" + txt);
  const svg = index.selectSvgElement(id);
  const group = svg.append("g").attr("class", "main");
  const background = group.append("rect").attr("width", chartConfig.width).attr("height", chartConfig.height).attr("class", "background");
  index.configureSvgSize(svg, chartConfig.height, chartConfig.width, true);
  svg.attr("viewBox", `0 0 ${chartConfig.width} ${chartConfig.height}`);
  background.attr("fill", themeConfig.backgroundColor);
  db2.setTmpSVGG(svg.append("g").attr("class", "mermaid-tmp-group"));
  const shapes = db2.getDrawableElem();
  const groups = {};
  function getGroup(gList) {
    let elem = group;
    let prefix = "";
    for (const [i] of gList.entries()) {
      let parent = group;
      if (i > 0 && groups[prefix]) {
        parent = groups[prefix];
      }
      prefix += gList[i];
      elem = groups[prefix];
      if (!elem) {
        elem = groups[prefix] = parent.append("g").attr("class", gList[i]);
      }
    }
    return elem;
  }
  for (const shape of shapes) {
    if (shape.data.length === 0) {
      continue;
    }
    const shapeGroup = getGroup(shape.groupTexts);
    switch (shape.type) {
      case "rect":
        shapeGroup.selectAll("rect").data(shape.data).enter().append("rect").attr("x", (data) => data.x).attr("y", (data) => data.y).attr("width", (data) => data.width).attr("height", (data) => data.height).attr("fill", (data) => data.fill).attr("stroke", (data) => data.strokeFill).attr("stroke-width", (data) => data.strokeWidth);
        break;
      case "text":
        shapeGroup.selectAll("text").data(shape.data).enter().append("text").attr("x", 0).attr("y", 0).attr("fill", (data) => data.fill).attr("font-size", (data) => data.fontSize).attr("dominant-baseline", (data) => getDominantBaseLine(data.verticalPos)).attr("text-anchor", (data) => getTextAnchor(data.horizontalPos)).attr("transform", (data) => getTextTransformation(data)).text((data) => data.text);
        break;
      case "path":
        shapeGroup.selectAll("path").data(shape.data).enter().append("path").attr("d", (data) => data.path).attr("fill", (data) => data.fill ? data.fill : "none").attr("stroke", (data) => data.strokeFill).attr("stroke-width", (data) => data.strokeWidth);
        break;
    }
  }
};
const renderer = {
  draw
};
const diagram = {
  parser: parser$1,
  db,
  renderer
};

exports.diagram = diagram;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHljaGFydERpYWdyYW0tZTkzM2Y5NGMtYWU3Njc4MzkuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvcmFuZ2UuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL2JhbmQuanMiLCIuLi9ub2RlX21vZHVsZXMvbWVybWFpZC9kaXN0L3h5Y2hhcnREaWFncmFtLWU5MzNmOTRjLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIHN0YXJ0ID0gK3N0YXJ0LCBzdG9wID0gK3N0b3AsIHN0ZXAgPSAobiA9IGFyZ3VtZW50cy5sZW5ndGgpIDwgMiA/IChzdG9wID0gc3RhcnQsIHN0YXJ0ID0gMCwgMSkgOiBuIDwgMyA/IDEgOiArc3RlcDtcblxuICB2YXIgaSA9IC0xLFxuICAgICAgbiA9IE1hdGgubWF4KDAsIE1hdGguY2VpbCgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXApKSB8IDAsXG4gICAgICByYW5nZSA9IG5ldyBBcnJheShuKTtcblxuICB3aGlsZSAoKytpIDwgbikge1xuICAgIHJhbmdlW2ldID0gc3RhcnQgKyBpICogc3RlcDtcbiAgfVxuXG4gIHJldHVybiByYW5nZTtcbn1cbiIsImltcG9ydCB7cmFuZ2UgYXMgc2VxdWVuY2V9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHtpbml0UmFuZ2V9IGZyb20gXCIuL2luaXQuanNcIjtcbmltcG9ydCBvcmRpbmFsIGZyb20gXCIuL29yZGluYWwuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFuZCgpIHtcbiAgdmFyIHNjYWxlID0gb3JkaW5hbCgpLnVua25vd24odW5kZWZpbmVkKSxcbiAgICAgIGRvbWFpbiA9IHNjYWxlLmRvbWFpbixcbiAgICAgIG9yZGluYWxSYW5nZSA9IHNjYWxlLnJhbmdlLFxuICAgICAgcjAgPSAwLFxuICAgICAgcjEgPSAxLFxuICAgICAgc3RlcCxcbiAgICAgIGJhbmR3aWR0aCxcbiAgICAgIHJvdW5kID0gZmFsc2UsXG4gICAgICBwYWRkaW5nSW5uZXIgPSAwLFxuICAgICAgcGFkZGluZ091dGVyID0gMCxcbiAgICAgIGFsaWduID0gMC41O1xuXG4gIGRlbGV0ZSBzY2FsZS51bmtub3duO1xuXG4gIGZ1bmN0aW9uIHJlc2NhbGUoKSB7XG4gICAgdmFyIG4gPSBkb21haW4oKS5sZW5ndGgsXG4gICAgICAgIHJldmVyc2UgPSByMSA8IHIwLFxuICAgICAgICBzdGFydCA9IHJldmVyc2UgPyByMSA6IHIwLFxuICAgICAgICBzdG9wID0gcmV2ZXJzZSA/IHIwIDogcjE7XG4gICAgc3RlcCA9IChzdG9wIC0gc3RhcnQpIC8gTWF0aC5tYXgoMSwgbiAtIHBhZGRpbmdJbm5lciArIHBhZGRpbmdPdXRlciAqIDIpO1xuICAgIGlmIChyb3VuZCkgc3RlcCA9IE1hdGguZmxvb3Ioc3RlcCk7XG4gICAgc3RhcnQgKz0gKHN0b3AgLSBzdGFydCAtIHN0ZXAgKiAobiAtIHBhZGRpbmdJbm5lcikpICogYWxpZ247XG4gICAgYmFuZHdpZHRoID0gc3RlcCAqICgxIC0gcGFkZGluZ0lubmVyKTtcbiAgICBpZiAocm91bmQpIHN0YXJ0ID0gTWF0aC5yb3VuZChzdGFydCksIGJhbmR3aWR0aCA9IE1hdGgucm91bmQoYmFuZHdpZHRoKTtcbiAgICB2YXIgdmFsdWVzID0gc2VxdWVuY2UobikubWFwKGZ1bmN0aW9uKGkpIHsgcmV0dXJuIHN0YXJ0ICsgc3RlcCAqIGk7IH0pO1xuICAgIHJldHVybiBvcmRpbmFsUmFuZ2UocmV2ZXJzZSA/IHZhbHVlcy5yZXZlcnNlKCkgOiB2YWx1ZXMpO1xuICB9XG5cbiAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRvbWFpbihfKSwgcmVzY2FsZSgpKSA6IGRvbWFpbigpO1xuICB9O1xuXG4gIHNjYWxlLnJhbmdlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKFtyMCwgcjFdID0gXywgcjAgPSArcjAsIHIxID0gK3IxLCByZXNjYWxlKCkpIDogW3IwLCByMV07XG4gIH07XG5cbiAgc2NhbGUucmFuZ2VSb3VuZCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gW3IwLCByMV0gPSBfLCByMCA9ICtyMCwgcjEgPSArcjEsIHJvdW5kID0gdHJ1ZSwgcmVzY2FsZSgpO1xuICB9O1xuXG4gIHNjYWxlLmJhbmR3aWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBiYW5kd2lkdGg7XG4gIH07XG5cbiAgc2NhbGUuc3RlcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzdGVwO1xuICB9O1xuXG4gIHNjYWxlLnJvdW5kID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHJvdW5kID0gISFfLCByZXNjYWxlKCkpIDogcm91bmQ7XG4gIH07XG5cbiAgc2NhbGUucGFkZGluZyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwYWRkaW5nSW5uZXIgPSBNYXRoLm1pbigxLCBwYWRkaW5nT3V0ZXIgPSArXyksIHJlc2NhbGUoKSkgOiBwYWRkaW5nSW5uZXI7XG4gIH07XG5cbiAgc2NhbGUucGFkZGluZ0lubmVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBhZGRpbmdJbm5lciA9IE1hdGgubWluKDEsIF8pLCByZXNjYWxlKCkpIDogcGFkZGluZ0lubmVyO1xuICB9O1xuXG4gIHNjYWxlLnBhZGRpbmdPdXRlciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwYWRkaW5nT3V0ZXIgPSArXywgcmVzY2FsZSgpKSA6IHBhZGRpbmdPdXRlcjtcbiAgfTtcblxuICBzY2FsZS5hbGlnbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChhbGlnbiA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIF8pKSwgcmVzY2FsZSgpKSA6IGFsaWduO1xuICB9O1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYmFuZChkb21haW4oKSwgW3IwLCByMV0pXG4gICAgICAgIC5yb3VuZChyb3VuZClcbiAgICAgICAgLnBhZGRpbmdJbm5lcihwYWRkaW5nSW5uZXIpXG4gICAgICAgIC5wYWRkaW5nT3V0ZXIocGFkZGluZ091dGVyKVxuICAgICAgICAuYWxpZ24oYWxpZ24pO1xuICB9O1xuXG4gIHJldHVybiBpbml0UmFuZ2UuYXBwbHkocmVzY2FsZSgpLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBwb2ludGlzaChzY2FsZSkge1xuICB2YXIgY29weSA9IHNjYWxlLmNvcHk7XG5cbiAgc2NhbGUucGFkZGluZyA9IHNjYWxlLnBhZGRpbmdPdXRlcjtcbiAgZGVsZXRlIHNjYWxlLnBhZGRpbmdJbm5lcjtcbiAgZGVsZXRlIHNjYWxlLnBhZGRpbmdPdXRlcjtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHBvaW50aXNoKGNvcHkoKSk7XG4gIH07XG5cbiAgcmV0dXJuIHNjYWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9pbnQoKSB7XG4gIHJldHVybiBwb2ludGlzaChiYW5kLmFwcGx5KG51bGwsIGFyZ3VtZW50cykucGFkZGluZ0lubmVyKDEpKTtcbn1cbiIsImltcG9ydCB7IGwgYXMgbG9nLCBzIGFzIHNldEFjY1RpdGxlLCBnIGFzIGdldEFjY1RpdGxlLCBxIGFzIHNldERpYWdyYW1UaXRsZSwgdCBhcyBnZXREaWFncmFtVGl0bGUsIGEgYXMgZ2V0QWNjRGVzY3JpcHRpb24sIGIgYXMgc2V0QWNjRGVzY3JpcHRpb24sIEUgYXMgZ2V0VGhlbWVWYXJpYWJsZXMsIEYgYXMgZ2V0Q29uZmlnLCBDIGFzIGNsZWFuQW5kTWVyZ2UsIEIgYXMgZGVmYXVsdENvbmZpZywgdiBhcyBjbGVhciQxLCBkIGFzIHNhbml0aXplVGV4dCwgQSBhcyBzZWxlY3RTdmdFbGVtZW50LCBpIGFzIGNvbmZpZ3VyZVN2Z1NpemUgfSBmcm9tIFwiLi9tZXJtYWlkLWI1ODYwYjU0LmpzXCI7XG5pbXBvcnQgeyBjIGFzIGNvbXB1dGVEaW1lbnNpb25PZlRleHQgfSBmcm9tIFwiLi9jcmVhdGVUZXh0LTJlNWU3ZGQzLmpzXCI7XG5pbXBvcnQgeyBzY2FsZUJhbmQsIHNjYWxlTGluZWFyLCBsaW5lIH0gZnJvbSBcImQzXCI7XG5pbXBvcnQgXCJ0cy1kZWRlbnRcIjtcbmltcG9ydCBcImRheWpzXCI7XG5pbXBvcnQgXCJAYnJhaW50cmVlL3Nhbml0aXplLXVybFwiO1xuaW1wb3J0IFwiZG9tcHVyaWZ5XCI7XG5pbXBvcnQgXCJraHJvbWFcIjtcbmltcG9ydCBcImxvZGFzaC1lcy9tZW1vaXplLmpzXCI7XG5pbXBvcnQgXCJsb2Rhc2gtZXMvbWVyZ2UuanNcIjtcbmltcG9ydCBcInN0eWxpc1wiO1xuaW1wb3J0IFwibG9kYXNoLWVzL2lzRW1wdHkuanNcIjtcbmltcG9ydCBcIm1kYXN0LXV0aWwtZnJvbS1tYXJrZG93blwiO1xudmFyIHBhcnNlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbyA9IGZ1bmN0aW9uKGssIHYsIG8yLCBsKSB7XG4gICAgZm9yIChvMiA9IG8yIHx8IHt9LCBsID0gay5sZW5ndGg7IGwtLTsgbzJba1tsXV0gPSB2KVxuICAgICAgO1xuICAgIHJldHVybiBvMjtcbiAgfSwgJFYwID0gWzEsIDEwLCAxMiwgMTQsIDE2LCAxOCwgMTksIDIxLCAyM10sICRWMSA9IFsyLCA2XSwgJFYyID0gWzEsIDNdLCAkVjMgPSBbMSwgNV0sICRWNCA9IFsxLCA2XSwgJFY1ID0gWzEsIDddLCAkVjYgPSBbMSwgNSwgMTAsIDEyLCAxNCwgMTYsIDE4LCAxOSwgMjEsIDIzLCAzNCwgMzUsIDM2XSwgJFY3ID0gWzEsIDI1XSwgJFY4ID0gWzEsIDI2XSwgJFY5ID0gWzEsIDI4XSwgJFZhID0gWzEsIDI5XSwgJFZiID0gWzEsIDMwXSwgJFZjID0gWzEsIDMxXSwgJFZkID0gWzEsIDMyXSwgJFZlID0gWzEsIDMzXSwgJFZmID0gWzEsIDM0XSwgJFZnID0gWzEsIDM1XSwgJFZoID0gWzEsIDM2XSwgJFZpID0gWzEsIDM3XSwgJFZqID0gWzEsIDQzXSwgJFZrID0gWzEsIDQyXSwgJFZsID0gWzEsIDQ3XSwgJFZtID0gWzEsIDUwXSwgJFZuID0gWzEsIDEwLCAxMiwgMTQsIDE2LCAxOCwgMTksIDIxLCAyMywgMzQsIDM1LCAzNl0sICRWbyA9IFsxLCAxMCwgMTIsIDE0LCAxNiwgMTgsIDE5LCAyMSwgMjMsIDI0LCAyNiwgMjcsIDI4LCAzNCwgMzUsIDM2XSwgJFZwID0gWzEsIDEwLCAxMiwgMTQsIDE2LCAxOCwgMTksIDIxLCAyMywgMjQsIDI2LCAyNywgMjgsIDM0LCAzNSwgMzYsIDQxLCA0MiwgNDMsIDQ0LCA0NSwgNDYsIDQ3LCA0OCwgNDksIDUwXSwgJFZxID0gWzEsIDY0XTtcbiAgdmFyIHBhcnNlcjIgPSB7XG4gICAgdHJhY2U6IGZ1bmN0aW9uIHRyYWNlKCkge1xuICAgIH0sXG4gICAgeXk6IHt9LFxuICAgIHN5bWJvbHNfOiB7IFwiZXJyb3JcIjogMiwgXCJzdGFydFwiOiAzLCBcImVvbFwiOiA0LCBcIlhZQ0hBUlRcIjogNSwgXCJjaGFydENvbmZpZ1wiOiA2LCBcImRvY3VtZW50XCI6IDcsIFwiQ0hBUlRfT1JJRU5UQVRJT05cIjogOCwgXCJzdGF0ZW1lbnRcIjogOSwgXCJ0aXRsZVwiOiAxMCwgXCJ0ZXh0XCI6IDExLCBcIlhfQVhJU1wiOiAxMiwgXCJwYXJzZVhBeGlzXCI6IDEzLCBcIllfQVhJU1wiOiAxNCwgXCJwYXJzZVlBeGlzXCI6IDE1LCBcIkxJTkVcIjogMTYsIFwicGxvdERhdGFcIjogMTcsIFwiQkFSXCI6IDE4LCBcImFjY190aXRsZVwiOiAxOSwgXCJhY2NfdGl0bGVfdmFsdWVcIjogMjAsIFwiYWNjX2Rlc2NyXCI6IDIxLCBcImFjY19kZXNjcl92YWx1ZVwiOiAyMiwgXCJhY2NfZGVzY3JfbXVsdGlsaW5lX3ZhbHVlXCI6IDIzLCBcIlNRVUFSRV9CUkFDRVNfU1RBUlRcIjogMjQsIFwiY29tbWFTZXBhcmF0ZWROdW1iZXJzXCI6IDI1LCBcIlNRVUFSRV9CUkFDRVNfRU5EXCI6IDI2LCBcIk5VTUJFUl9XSVRIX0RFQ0lNQUxcIjogMjcsIFwiQ09NTUFcIjogMjgsIFwieEF4aXNEYXRhXCI6IDI5LCBcImJhbmREYXRhXCI6IDMwLCBcIkFSUk9XX0RFTElNSVRFUlwiOiAzMSwgXCJjb21tYVNlcGFyYXRlZFRleHRzXCI6IDMyLCBcInlBeGlzRGF0YVwiOiAzMywgXCJORVdMSU5FXCI6IDM0LCBcIlNFTUlcIjogMzUsIFwiRU9GXCI6IDM2LCBcImFscGhhTnVtXCI6IDM3LCBcIlNUUlwiOiAzOCwgXCJNRF9TVFJcIjogMzksIFwiYWxwaGFOdW1Ub2tlblwiOiA0MCwgXCJBTVBcIjogNDEsIFwiTlVNXCI6IDQyLCBcIkFMUEhBXCI6IDQzLCBcIlBMVVNcIjogNDQsIFwiRVFVQUxTXCI6IDQ1LCBcIk1VTFRcIjogNDYsIFwiRE9UXCI6IDQ3LCBcIkJSS1RcIjogNDgsIFwiTUlOVVNcIjogNDksIFwiVU5ERVJTQ09SRVwiOiA1MCwgXCIkYWNjZXB0XCI6IDAsIFwiJGVuZFwiOiAxIH0sXG4gICAgdGVybWluYWxzXzogeyAyOiBcImVycm9yXCIsIDU6IFwiWFlDSEFSVFwiLCA4OiBcIkNIQVJUX09SSUVOVEFUSU9OXCIsIDEwOiBcInRpdGxlXCIsIDEyOiBcIlhfQVhJU1wiLCAxNDogXCJZX0FYSVNcIiwgMTY6IFwiTElORVwiLCAxODogXCJCQVJcIiwgMTk6IFwiYWNjX3RpdGxlXCIsIDIwOiBcImFjY190aXRsZV92YWx1ZVwiLCAyMTogXCJhY2NfZGVzY3JcIiwgMjI6IFwiYWNjX2Rlc2NyX3ZhbHVlXCIsIDIzOiBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIiwgMjQ6IFwiU1FVQVJFX0JSQUNFU19TVEFSVFwiLCAyNjogXCJTUVVBUkVfQlJBQ0VTX0VORFwiLCAyNzogXCJOVU1CRVJfV0lUSF9ERUNJTUFMXCIsIDI4OiBcIkNPTU1BXCIsIDMxOiBcIkFSUk9XX0RFTElNSVRFUlwiLCAzNDogXCJORVdMSU5FXCIsIDM1OiBcIlNFTUlcIiwgMzY6IFwiRU9GXCIsIDM4OiBcIlNUUlwiLCAzOTogXCJNRF9TVFJcIiwgNDE6IFwiQU1QXCIsIDQyOiBcIk5VTVwiLCA0MzogXCJBTFBIQVwiLCA0NDogXCJQTFVTXCIsIDQ1OiBcIkVRVUFMU1wiLCA0NjogXCJNVUxUXCIsIDQ3OiBcIkRPVFwiLCA0ODogXCJCUktUXCIsIDQ5OiBcIk1JTlVTXCIsIDUwOiBcIlVOREVSU0NPUkVcIiB9LFxuICAgIHByb2R1Y3Rpb25zXzogWzAsIFszLCAyXSwgWzMsIDNdLCBbMywgMl0sIFszLCAxXSwgWzYsIDFdLCBbNywgMF0sIFs3LCAyXSwgWzksIDJdLCBbOSwgMl0sIFs5LCAyXSwgWzksIDJdLCBbOSwgMl0sIFs5LCAzXSwgWzksIDJdLCBbOSwgM10sIFs5LCAyXSwgWzksIDJdLCBbOSwgMV0sIFsxNywgM10sIFsyNSwgM10sIFsyNSwgMV0sIFsxMywgMV0sIFsxMywgMl0sIFsxMywgMV0sIFsyOSwgMV0sIFsyOSwgM10sIFszMCwgM10sIFszMiwgM10sIFszMiwgMV0sIFsxNSwgMV0sIFsxNSwgMl0sIFsxNSwgMV0sIFszMywgM10sIFs0LCAxXSwgWzQsIDFdLCBbNCwgMV0sIFsxMSwgMV0sIFsxMSwgMV0sIFsxMSwgMV0sIFszNywgMV0sIFszNywgMl0sIFs0MCwgMV0sIFs0MCwgMV0sIFs0MCwgMV0sIFs0MCwgMV0sIFs0MCwgMV0sIFs0MCwgMV0sIFs0MCwgMV0sIFs0MCwgMV0sIFs0MCwgMV0sIFs0MCwgMV1dLFxuICAgIHBlcmZvcm1BY3Rpb246IGZ1bmN0aW9uIGFub255bW91cyh5eXRleHQsIHl5bGVuZywgeXlsaW5lbm8sIHl5LCB5eXN0YXRlLCAkJCwgXyQpIHtcbiAgICAgIHZhciAkMCA9ICQkLmxlbmd0aCAtIDE7XG4gICAgICBzd2l0Y2ggKHl5c3RhdGUpIHtcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHl5LnNldE9yaWVudGF0aW9uKCQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICB5eS5zZXREaWFncmFtVGl0bGUoJCRbJDBdLnRleHQudHJpbSgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICB5eS5zZXRMaW5lRGF0YSh7IHRleHQ6IFwiXCIsIHR5cGU6IFwidGV4dFwiIH0sICQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgeXkuc2V0TGluZURhdGEoJCRbJDAgLSAxXSwgJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICB5eS5zZXRCYXJEYXRhKHsgdGV4dDogXCJcIiwgdHlwZTogXCJ0ZXh0XCIgfSwgJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICB5eS5zZXRCYXJEYXRhKCQkWyQwIC0gMV0sICQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdLnRyaW0oKTtcbiAgICAgICAgICB5eS5zZXRBY2NUaXRsZSh0aGlzLiQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE3OlxuICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXS50cmltKCk7XG4gICAgICAgICAgeXkuc2V0QWNjRGVzY3JpcHRpb24odGhpcy4kKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMCAtIDFdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgIHRoaXMuJCA9IFtOdW1iZXIoJCRbJDAgLSAyXSksIC4uLiQkWyQwXV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgdGhpcy4kID0gW051bWJlcigkJFskMF0pXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICB5eS5zZXRYQXhpc1RpdGxlKCQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgeXkuc2V0WEF4aXNUaXRsZSgkJFskMCAtIDFdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICB5eS5zZXRYQXhpc1RpdGxlKHsgdHlwZTogXCJ0ZXh0XCIsIHRleHQ6IFwiXCIgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgeXkuc2V0WEF4aXNCYW5kKCQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgeXkuc2V0WEF4aXNSYW5nZURhdGEoTnVtYmVyKCQkWyQwIC0gMl0pLCBOdW1iZXIoJCRbJDBdKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDAgLSAxXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICB0aGlzLiQgPSBbJCRbJDAgLSAyXSwgLi4uJCRbJDBdXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICB0aGlzLiQgPSBbJCRbJDBdXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMDpcbiAgICAgICAgICB5eS5zZXRZQXhpc1RpdGxlKCQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgeXkuc2V0WUF4aXNUaXRsZSgkJFskMCAtIDFdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICB5eS5zZXRZQXhpc1RpdGxlKHsgdHlwZTogXCJ0ZXh0XCIsIHRleHQ6IFwiXCIgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgeXkuc2V0WUF4aXNSYW5nZURhdGEoTnVtYmVyKCQkWyQwIC0gMl0pLCBOdW1iZXIoJCRbJDBdKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgdGhpcy4kID0geyB0ZXh0OiAkJFskMF0sIHR5cGU6IFwidGV4dFwiIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgdGhpcy4kID0geyB0ZXh0OiAkJFskMF0sIHR5cGU6IFwidGV4dFwiIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgdGhpcy4kID0geyB0ZXh0OiAkJFskMF0sIHR5cGU6IFwibWFya2Rvd25cIiB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMCAtIDFdICsgXCJcIiArICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuICAgIHRhYmxlOiBbbygkVjAsICRWMSwgeyAzOiAxLCA0OiAyLCA3OiA0LCA1OiAkVjIsIDM0OiAkVjMsIDM1OiAkVjQsIDM2OiAkVjUgfSksIHsgMTogWzNdIH0sIG8oJFYwLCAkVjEsIHsgNDogMiwgNzogNCwgMzogOCwgNTogJFYyLCAzNDogJFYzLCAzNTogJFY0LCAzNjogJFY1IH0pLCBvKCRWMCwgJFYxLCB7IDQ6IDIsIDc6IDQsIDY6IDksIDM6IDEwLCA1OiAkVjIsIDg6IFsxLCAxMV0sIDM0OiAkVjMsIDM1OiAkVjQsIDM2OiAkVjUgfSksIHsgMTogWzIsIDRdLCA5OiAxMiwgMTA6IFsxLCAxM10sIDEyOiBbMSwgMTRdLCAxNDogWzEsIDE1XSwgMTY6IFsxLCAxNl0sIDE4OiBbMSwgMTddLCAxOTogWzEsIDE4XSwgMjE6IFsxLCAxOV0sIDIzOiBbMSwgMjBdIH0sIG8oJFY2LCBbMiwgMzRdKSwgbygkVjYsIFsyLCAzNV0pLCBvKCRWNiwgWzIsIDM2XSksIHsgMTogWzIsIDFdIH0sIG8oJFYwLCAkVjEsIHsgNDogMiwgNzogNCwgMzogMjEsIDU6ICRWMiwgMzQ6ICRWMywgMzU6ICRWNCwgMzY6ICRWNSB9KSwgeyAxOiBbMiwgM10gfSwgbygkVjYsIFsyLCA1XSksIG8oJFYwLCBbMiwgN10sIHsgNDogMjIsIDM0OiAkVjMsIDM1OiAkVjQsIDM2OiAkVjUgfSksIHsgMTE6IDIzLCAzNzogMjQsIDM4OiAkVjcsIDM5OiAkVjgsIDQwOiAyNywgNDE6ICRWOSwgNDI6ICRWYSwgNDM6ICRWYiwgNDQ6ICRWYywgNDU6ICRWZCwgNDY6ICRWZSwgNDc6ICRWZiwgNDg6ICRWZywgNDk6ICRWaCwgNTA6ICRWaSB9LCB7IDExOiAzOSwgMTM6IDM4LCAyNDogJFZqLCAyNzogJFZrLCAyOTogNDAsIDMwOiA0MSwgMzc6IDI0LCAzODogJFY3LCAzOTogJFY4LCA0MDogMjcsIDQxOiAkVjksIDQyOiAkVmEsIDQzOiAkVmIsIDQ0OiAkVmMsIDQ1OiAkVmQsIDQ2OiAkVmUsIDQ3OiAkVmYsIDQ4OiAkVmcsIDQ5OiAkVmgsIDUwOiAkVmkgfSwgeyAxMTogNDUsIDE1OiA0NCwgMjc6ICRWbCwgMzM6IDQ2LCAzNzogMjQsIDM4OiAkVjcsIDM5OiAkVjgsIDQwOiAyNywgNDE6ICRWOSwgNDI6ICRWYSwgNDM6ICRWYiwgNDQ6ICRWYywgNDU6ICRWZCwgNDY6ICRWZSwgNDc6ICRWZiwgNDg6ICRWZywgNDk6ICRWaCwgNTA6ICRWaSB9LCB7IDExOiA0OSwgMTc6IDQ4LCAyNDogJFZtLCAzNzogMjQsIDM4OiAkVjcsIDM5OiAkVjgsIDQwOiAyNywgNDE6ICRWOSwgNDI6ICRWYSwgNDM6ICRWYiwgNDQ6ICRWYywgNDU6ICRWZCwgNDY6ICRWZSwgNDc6ICRWZiwgNDg6ICRWZywgNDk6ICRWaCwgNTA6ICRWaSB9LCB7IDExOiA1MiwgMTc6IDUxLCAyNDogJFZtLCAzNzogMjQsIDM4OiAkVjcsIDM5OiAkVjgsIDQwOiAyNywgNDE6ICRWOSwgNDI6ICRWYSwgNDM6ICRWYiwgNDQ6ICRWYywgNDU6ICRWZCwgNDY6ICRWZSwgNDc6ICRWZiwgNDg6ICRWZywgNDk6ICRWaCwgNTA6ICRWaSB9LCB7IDIwOiBbMSwgNTNdIH0sIHsgMjI6IFsxLCA1NF0gfSwgbygkVm4sIFsyLCAxOF0pLCB7IDE6IFsyLCAyXSB9LCBvKCRWbiwgWzIsIDhdKSwgbygkVm4sIFsyLCA5XSksIG8oJFZvLCBbMiwgMzddLCB7IDQwOiA1NSwgNDE6ICRWOSwgNDI6ICRWYSwgNDM6ICRWYiwgNDQ6ICRWYywgNDU6ICRWZCwgNDY6ICRWZSwgNDc6ICRWZiwgNDg6ICRWZywgNDk6ICRWaCwgNTA6ICRWaSB9KSwgbygkVm8sIFsyLCAzOF0pLCBvKCRWbywgWzIsIDM5XSksIG8oJFZwLCBbMiwgNDBdKSwgbygkVnAsIFsyLCA0Ml0pLCBvKCRWcCwgWzIsIDQzXSksIG8oJFZwLCBbMiwgNDRdKSwgbygkVnAsIFsyLCA0NV0pLCBvKCRWcCwgWzIsIDQ2XSksIG8oJFZwLCBbMiwgNDddKSwgbygkVnAsIFsyLCA0OF0pLCBvKCRWcCwgWzIsIDQ5XSksIG8oJFZwLCBbMiwgNTBdKSwgbygkVnAsIFsyLCA1MV0pLCBvKCRWbiwgWzIsIDEwXSksIG8oJFZuLCBbMiwgMjJdLCB7IDMwOiA0MSwgMjk6IDU2LCAyNDogJFZqLCAyNzogJFZrIH0pLCBvKCRWbiwgWzIsIDI0XSksIG8oJFZuLCBbMiwgMjVdKSwgeyAzMTogWzEsIDU3XSB9LCB7IDExOiA1OSwgMzI6IDU4LCAzNzogMjQsIDM4OiAkVjcsIDM5OiAkVjgsIDQwOiAyNywgNDE6ICRWOSwgNDI6ICRWYSwgNDM6ICRWYiwgNDQ6ICRWYywgNDU6ICRWZCwgNDY6ICRWZSwgNDc6ICRWZiwgNDg6ICRWZywgNDk6ICRWaCwgNTA6ICRWaSB9LCBvKCRWbiwgWzIsIDExXSksIG8oJFZuLCBbMiwgMzBdLCB7IDMzOiA2MCwgMjc6ICRWbCB9KSwgbygkVm4sIFsyLCAzMl0pLCB7IDMxOiBbMSwgNjFdIH0sIG8oJFZuLCBbMiwgMTJdKSwgeyAxNzogNjIsIDI0OiAkVm0gfSwgeyAyNTogNjMsIDI3OiAkVnEgfSwgbygkVm4sIFsyLCAxNF0pLCB7IDE3OiA2NSwgMjQ6ICRWbSB9LCBvKCRWbiwgWzIsIDE2XSksIG8oJFZuLCBbMiwgMTddKSwgbygkVnAsIFsyLCA0MV0pLCBvKCRWbiwgWzIsIDIzXSksIHsgMjc6IFsxLCA2Nl0gfSwgeyAyNjogWzEsIDY3XSB9LCB7IDI2OiBbMiwgMjldLCAyODogWzEsIDY4XSB9LCBvKCRWbiwgWzIsIDMxXSksIHsgMjc6IFsxLCA2OV0gfSwgbygkVm4sIFsyLCAxM10pLCB7IDI2OiBbMSwgNzBdIH0sIHsgMjY6IFsyLCAyMV0sIDI4OiBbMSwgNzFdIH0sIG8oJFZuLCBbMiwgMTVdKSwgbygkVm4sIFsyLCAyNl0pLCBvKCRWbiwgWzIsIDI3XSksIHsgMTE6IDU5LCAzMjogNzIsIDM3OiAyNCwgMzg6ICRWNywgMzk6ICRWOCwgNDA6IDI3LCA0MTogJFY5LCA0MjogJFZhLCA0MzogJFZiLCA0NDogJFZjLCA0NTogJFZkLCA0NjogJFZlLCA0NzogJFZmLCA0ODogJFZnLCA0OTogJFZoLCA1MDogJFZpIH0sIG8oJFZuLCBbMiwgMzNdKSwgbygkVm4sIFsyLCAxOV0pLCB7IDI1OiA3MywgMjc6ICRWcSB9LCB7IDI2OiBbMiwgMjhdIH0sIHsgMjY6IFsyLCAyMF0gfV0sXG4gICAgZGVmYXVsdEFjdGlvbnM6IHsgODogWzIsIDFdLCAxMDogWzIsIDNdLCAyMTogWzIsIDJdLCA3MjogWzIsIDI4XSwgNzM6IFsyLCAyMF0gfSxcbiAgICBwYXJzZUVycm9yOiBmdW5jdGlvbiBwYXJzZUVycm9yKHN0ciwgaGFzaCkge1xuICAgICAgaWYgKGhhc2gucmVjb3ZlcmFibGUpIHtcbiAgICAgICAgdGhpcy50cmFjZShzdHIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKHN0cik7XG4gICAgICAgIGVycm9yLmhhc2ggPSBoYXNoO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShpbnB1dCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzLCBzdGFjayA9IFswXSwgdHN0YWNrID0gW10sIHZzdGFjayA9IFtudWxsXSwgbHN0YWNrID0gW10sIHRhYmxlID0gdGhpcy50YWJsZSwgeXl0ZXh0ID0gXCJcIiwgeXlsaW5lbm8gPSAwLCB5eWxlbmcgPSAwLCBURVJST1IgPSAyLCBFT0YgPSAxO1xuICAgICAgdmFyIGFyZ3MgPSBsc3RhY2suc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgdmFyIGxleGVyMiA9IE9iamVjdC5jcmVhdGUodGhpcy5sZXhlcik7XG4gICAgICB2YXIgc2hhcmVkU3RhdGUgPSB7IHl5OiB7fSB9O1xuICAgICAgZm9yICh2YXIgayBpbiB0aGlzLnl5KSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy55eSwgaykpIHtcbiAgICAgICAgICBzaGFyZWRTdGF0ZS55eVtrXSA9IHRoaXMueXlba107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxleGVyMi5zZXRJbnB1dChpbnB1dCwgc2hhcmVkU3RhdGUueXkpO1xuICAgICAgc2hhcmVkU3RhdGUueXkubGV4ZXIgPSBsZXhlcjI7XG4gICAgICBzaGFyZWRTdGF0ZS55eS5wYXJzZXIgPSB0aGlzO1xuICAgICAgaWYgKHR5cGVvZiBsZXhlcjIueXlsbG9jID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgbGV4ZXIyLnl5bGxvYyA9IHt9O1xuICAgICAgfVxuICAgICAgdmFyIHl5bG9jID0gbGV4ZXIyLnl5bGxvYztcbiAgICAgIGxzdGFjay5wdXNoKHl5bG9jKTtcbiAgICAgIHZhciByYW5nZXMgPSBsZXhlcjIub3B0aW9ucyAmJiBsZXhlcjIub3B0aW9ucy5yYW5nZXM7XG4gICAgICBpZiAodHlwZW9mIHNoYXJlZFN0YXRlLnl5LnBhcnNlRXJyb3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aGlzLnBhcnNlRXJyb3IgPSBzaGFyZWRTdGF0ZS55eS5wYXJzZUVycm9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYXJzZUVycm9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLnBhcnNlRXJyb3I7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBsZXgoKSB7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgdG9rZW4gPSB0c3RhY2sucG9wKCkgfHwgbGV4ZXIyLmxleCgpIHx8IEVPRjtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICB0c3RhY2sgPSB0b2tlbjtcbiAgICAgICAgICAgIHRva2VuID0gdHN0YWNrLnBvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0b2tlbiA9IHNlbGYuc3ltYm9sc19bdG9rZW5dIHx8IHRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgIH1cbiAgICAgIHZhciBzeW1ib2wsIHN0YXRlLCBhY3Rpb24sIHIsIHl5dmFsID0ge30sIHAsIGxlbiwgbmV3U3RhdGUsIGV4cGVjdGVkO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgc3RhdGUgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdKSB7XG4gICAgICAgICAgYWN0aW9uID0gdGhpcy5kZWZhdWx0QWN0aW9uc1tzdGF0ZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHN5bWJvbCA9PT0gbnVsbCB8fCB0eXBlb2Ygc3ltYm9sID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHN5bWJvbCA9IGxleCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhY3Rpb24gPSB0YWJsZVtzdGF0ZV0gJiYgdGFibGVbc3RhdGVdW3N5bWJvbF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09IFwidW5kZWZpbmVkXCIgfHwgIWFjdGlvbi5sZW5ndGggfHwgIWFjdGlvblswXSkge1xuICAgICAgICAgIHZhciBlcnJTdHIgPSBcIlwiO1xuICAgICAgICAgIGV4cGVjdGVkID0gW107XG4gICAgICAgICAgZm9yIChwIGluIHRhYmxlW3N0YXRlXSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGVybWluYWxzX1twXSAmJiBwID4gVEVSUk9SKSB7XG4gICAgICAgICAgICAgIGV4cGVjdGVkLnB1c2goXCInXCIgKyB0aGlzLnRlcm1pbmFsc19bcF0gKyBcIidcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChsZXhlcjIuc2hvd1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICBlcnJTdHIgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoeXlsaW5lbm8gKyAxKSArIFwiOlxcblwiICsgbGV4ZXIyLnNob3dQb3NpdGlvbigpICsgXCJcXG5FeHBlY3RpbmcgXCIgKyBleHBlY3RlZC5qb2luKFwiLCBcIikgKyBcIiwgZ290ICdcIiArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgXCInXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVyclN0ciA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArICh5eWxpbmVubyArIDEpICsgXCI6IFVuZXhwZWN0ZWQgXCIgKyAoc3ltYm9sID09IEVPRiA/IFwiZW5kIG9mIGlucHV0XCIgOiBcIidcIiArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgXCInXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnBhcnNlRXJyb3IoZXJyU3RyLCB7XG4gICAgICAgICAgICB0ZXh0OiBsZXhlcjIubWF0Y2gsXG4gICAgICAgICAgICB0b2tlbjogdGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sLFxuICAgICAgICAgICAgbGluZTogbGV4ZXIyLnl5bGluZW5vLFxuICAgICAgICAgICAgbG9jOiB5eWxvYyxcbiAgICAgICAgICAgIGV4cGVjdGVkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvblswXSBpbnN0YW5jZW9mIEFycmF5ICYmIGFjdGlvbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyc2UgRXJyb3I6IG11bHRpcGxlIGFjdGlvbnMgcG9zc2libGUgYXQgc3RhdGU6IFwiICsgc3RhdGUgKyBcIiwgdG9rZW46IFwiICsgc3ltYm9sKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGFjdGlvblswXSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHN0YWNrLnB1c2goc3ltYm9sKTtcbiAgICAgICAgICAgIHZzdGFjay5wdXNoKGxleGVyMi55eXRleHQpO1xuICAgICAgICAgICAgbHN0YWNrLnB1c2gobGV4ZXIyLnl5bGxvYyk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGFjdGlvblsxXSk7XG4gICAgICAgICAgICBzeW1ib2wgPSBudWxsO1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB5eWxlbmcgPSBsZXhlcjIueXlsZW5nO1xuICAgICAgICAgICAgICB5eXRleHQgPSBsZXhlcjIueXl0ZXh0O1xuICAgICAgICAgICAgICB5eWxpbmVubyA9IGxleGVyMi55eWxpbmVubztcbiAgICAgICAgICAgICAgeXlsb2MgPSBsZXhlcjIueXlsbG9jO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgbGVuID0gdGhpcy5wcm9kdWN0aW9uc19bYWN0aW9uWzFdXVsxXTtcbiAgICAgICAgICAgIHl5dmFsLiQgPSB2c3RhY2tbdnN0YWNrLmxlbmd0aCAtIGxlbl07XG4gICAgICAgICAgICB5eXZhbC5fJCA9IHtcbiAgICAgICAgICAgICAgZmlyc3RfbGluZTogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5maXJzdF9saW5lLFxuICAgICAgICAgICAgICBsYXN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9saW5lLFxuICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5sYXN0X2NvbHVtblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChyYW5nZXMpIHtcbiAgICAgICAgICAgICAgeXl2YWwuXyQucmFuZ2UgPSBbXG4gICAgICAgICAgICAgICAgbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5yYW5nZVswXSxcbiAgICAgICAgICAgICAgICBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLnJhbmdlWzFdXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByID0gdGhpcy5wZXJmb3JtQWN0aW9uLmFwcGx5KHl5dmFsLCBbXG4gICAgICAgICAgICAgIHl5dGV4dCxcbiAgICAgICAgICAgICAgeXlsZW5nLFxuICAgICAgICAgICAgICB5eWxpbmVubyxcbiAgICAgICAgICAgICAgc2hhcmVkU3RhdGUueXksXG4gICAgICAgICAgICAgIGFjdGlvblsxXSxcbiAgICAgICAgICAgICAgdnN0YWNrLFxuICAgICAgICAgICAgICBsc3RhY2tcbiAgICAgICAgICAgIF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5zbGljZSgwLCAtMSAqIGxlbiAqIDIpO1xuICAgICAgICAgICAgICB2c3RhY2sgPSB2c3RhY2suc2xpY2UoMCwgLTEgKiBsZW4pO1xuICAgICAgICAgICAgICBsc3RhY2sgPSBsc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhY2sucHVzaCh0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzBdKTtcbiAgICAgICAgICAgIHZzdGFjay5wdXNoKHl5dmFsLiQpO1xuICAgICAgICAgICAgbHN0YWNrLnB1c2goeXl2YWwuXyQpO1xuICAgICAgICAgICAgbmV3U3RhdGUgPSB0YWJsZVtzdGFja1tzdGFjay5sZW5ndGggLSAyXV1bc3RhY2tbc3RhY2subGVuZ3RoIC0gMV1dO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXdTdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuICB2YXIgbGV4ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGV4ZXIyID0ge1xuICAgICAgRU9GOiAxLFxuICAgICAgcGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcbiAgICAgICAgaWYgKHRoaXMueXkucGFyc2VyKSB7XG4gICAgICAgICAgdGhpcy55eS5wYXJzZXIucGFyc2VFcnJvcihzdHIsIGhhc2gpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzdHIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcmVzZXRzIHRoZSBsZXhlciwgc2V0cyBuZXcgaW5wdXRcbiAgICAgIHNldElucHV0OiBmdW5jdGlvbihpbnB1dCwgeXkpIHtcbiAgICAgICAgdGhpcy55eSA9IHl5IHx8IHRoaXMueXkgfHwge307XG4gICAgICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG4gICAgICAgIHRoaXMuX21vcmUgPSB0aGlzLl9iYWNrdHJhY2sgPSB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy55eWxpbmVubyA9IHRoaXMueXlsZW5nID0gMDtcbiAgICAgICAgdGhpcy55eXRleHQgPSB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoID0gXCJcIjtcbiAgICAgICAgdGhpcy5jb25kaXRpb25TdGFjayA9IFtcIklOSVRJQUxcIl07XG4gICAgICAgIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgIGZpcnN0X2xpbmU6IDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiAwLFxuICAgICAgICAgIGxhc3RfbGluZTogMSxcbiAgICAgICAgICBsYXN0X2NvbHVtbjogMFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gWzAsIDBdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gY29uc3VtZXMgYW5kIHJldHVybnMgb25lIGNoYXIgZnJvbSB0aGUgaW5wdXRcbiAgICAgIGlucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy5faW5wdXRbMF07XG4gICAgICAgIHRoaXMueXl0ZXh0ICs9IGNoO1xuICAgICAgICB0aGlzLnl5bGVuZysrO1xuICAgICAgICB0aGlzLm9mZnNldCsrO1xuICAgICAgICB0aGlzLm1hdGNoICs9IGNoO1xuICAgICAgICB0aGlzLm1hdGNoZWQgKz0gY2g7XG4gICAgICAgIHZhciBsaW5lcyA9IGNoLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgaWYgKGxpbmVzKSB7XG4gICAgICAgICAgdGhpcy55eWxpbmVubysrO1xuICAgICAgICAgIHRoaXMueXlsbG9jLmxhc3RfbGluZSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMueXlsbG9jLmxhc3RfY29sdW1uKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZVsxXSsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UoMSk7XG4gICAgICAgIHJldHVybiBjaDtcbiAgICAgIH0sXG4gICAgICAvLyB1bnNoaWZ0cyBvbmUgY2hhciAob3IgYSBzdHJpbmcpIGludG8gdGhlIGlucHV0XG4gICAgICB1bnB1dDogZnVuY3Rpb24oY2gpIHtcbiAgICAgICAgdmFyIGxlbiA9IGNoLmxlbmd0aDtcbiAgICAgICAgdmFyIGxpbmVzID0gY2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSBjaCArIHRoaXMuX2lucHV0O1xuICAgICAgICB0aGlzLnl5dGV4dCA9IHRoaXMueXl0ZXh0LnN1YnN0cigwLCB0aGlzLnl5dGV4dC5sZW5ndGggLSBsZW4pO1xuICAgICAgICB0aGlzLm9mZnNldCAtPSBsZW47XG4gICAgICAgIHZhciBvbGRMaW5lcyA9IHRoaXMubWF0Y2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5tYXRjaCA9IHRoaXMubWF0Y2guc3Vic3RyKDAsIHRoaXMubWF0Y2gubGVuZ3RoIC0gMSk7XG4gICAgICAgIHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIDEpO1xuICAgICAgICBpZiAobGluZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHRoaXMueXlsaW5lbm8gLT0gbGluZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgciA9IHRoaXMueXlsbG9jLnJhbmdlO1xuICAgICAgICB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgbGFzdF9jb2x1bW46IGxpbmVzID8gKGxpbmVzLmxlbmd0aCA9PT0gb2xkTGluZXMubGVuZ3RoID8gdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIDogMCkgKyBvbGRMaW5lc1tvbGRMaW5lcy5sZW5ndGggLSBsaW5lcy5sZW5ndGhdLmxlbmd0aCAtIGxpbmVzWzBdLmxlbmd0aCA6IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiAtIGxlblxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3JbMF0sIHJbMF0gKyB0aGlzLnl5bGVuZyAtIGxlbl07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gYWN0aW9uLCBjYWNoZXMgbWF0Y2hlZCB0ZXh0IGFuZCBhcHBlbmRzIGl0IG9uIG5leHQgYWN0aW9uXG4gICAgICBtb3JlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fbW9yZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gYWN0aW9uLCBzaWduYWxzIHRoZSBsZXhlciB0aGF0IHRoaXMgcnVsZSBmYWlscyB0byBtYXRjaCB0aGUgaW5wdXQsIHNvIHRoZSBuZXh0IG1hdGNoaW5nIHJ1bGUgKHJlZ2V4KSBzaG91bGQgYmUgdGVzdGVkIGluc3RlYWQuXG4gICAgICByZWplY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcikge1xuICAgICAgICAgIHRoaXMuX2JhY2t0cmFjayA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBcIi4gWW91IGNhbiBvbmx5IGludm9rZSByZWplY3QoKSBpbiB0aGUgbGV4ZXIgd2hlbiB0aGUgbGV4ZXIgaXMgb2YgdGhlIGJhY2t0cmFja2luZyBwZXJzdWFzaW9uIChvcHRpb25zLmJhY2t0cmFja19sZXhlciA9IHRydWUpLlxcblwiICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIHJldGFpbiBmaXJzdCBuIGNoYXJhY3RlcnMgb2YgdGhlIG1hdGNoXG4gICAgICBsZXNzOiBmdW5jdGlvbihuKSB7XG4gICAgICAgIHRoaXMudW5wdXQodGhpcy5tYXRjaC5zbGljZShuKSk7XG4gICAgICB9LFxuICAgICAgLy8gZGlzcGxheXMgYWxyZWFkeSBtYXRjaGVkIGlucHV0LCBpLmUuIGZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgcGFzdElucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHBhc3QgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSB0aGlzLm1hdGNoLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiAocGFzdC5sZW5ndGggPiAyMCA/IFwiLi4uXCIgOiBcIlwiKSArIHBhc3Quc3Vic3RyKC0yMCkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIHVwY29taW5nIGlucHV0LCBpLmUuIGZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgdXBjb21pbmdJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBuZXh0ID0gdGhpcy5tYXRjaDtcbiAgICAgICAgaWYgKG5leHQubGVuZ3RoIDwgMjApIHtcbiAgICAgICAgICBuZXh0ICs9IHRoaXMuX2lucHV0LnN1YnN0cigwLCAyMCAtIG5leHQubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG5leHQuc3Vic3RyKDAsIDIwKSArIChuZXh0Lmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICB9LFxuICAgICAgLy8gZGlzcGxheXMgdGhlIGNoYXJhY3RlciBwb3NpdGlvbiB3aGVyZSB0aGUgbGV4aW5nIGVycm9yIG9jY3VycmVkLCBpLmUuIGZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgc2hvd1Bvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHByZSA9IHRoaXMucGFzdElucHV0KCk7XG4gICAgICAgIHZhciBjID0gbmV3IEFycmF5KHByZS5sZW5ndGggKyAxKS5qb2luKFwiLVwiKTtcbiAgICAgICAgcmV0dXJuIHByZSArIHRoaXMudXBjb21pbmdJbnB1dCgpICsgXCJcXG5cIiArIGMgKyBcIl5cIjtcbiAgICAgIH0sXG4gICAgICAvLyB0ZXN0IHRoZSBsZXhlZCB0b2tlbjogcmV0dXJuIEZBTFNFIHdoZW4gbm90IGEgbWF0Y2gsIG90aGVyd2lzZSByZXR1cm4gdG9rZW5cbiAgICAgIHRlc3RfbWF0Y2g6IGZ1bmN0aW9uKG1hdGNoLCBpbmRleGVkX3J1bGUpIHtcbiAgICAgICAgdmFyIHRva2VuLCBsaW5lcywgYmFja3VwO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcikge1xuICAgICAgICAgIGJhY2t1cCA9IHtcbiAgICAgICAgICAgIHl5bGluZW5vOiB0aGlzLnl5bGluZW5vLFxuICAgICAgICAgICAgeXlsbG9jOiB7XG4gICAgICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICAgIGxhc3RfbGluZTogdGhpcy5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogdGhpcy55eWxsb2MubGFzdF9jb2x1bW5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5eXRleHQ6IHRoaXMueXl0ZXh0LFxuICAgICAgICAgICAgbWF0Y2g6IHRoaXMubWF0Y2gsXG4gICAgICAgICAgICBtYXRjaGVzOiB0aGlzLm1hdGNoZXMsXG4gICAgICAgICAgICBtYXRjaGVkOiB0aGlzLm1hdGNoZWQsXG4gICAgICAgICAgICB5eWxlbmc6IHRoaXMueXlsZW5nLFxuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgICAgICAgIF9tb3JlOiB0aGlzLl9tb3JlLFxuICAgICAgICAgICAgX2lucHV0OiB0aGlzLl9pbnB1dCxcbiAgICAgICAgICAgIHl5OiB0aGlzLnl5LFxuICAgICAgICAgICAgY29uZGl0aW9uU3RhY2s6IHRoaXMuY29uZGl0aW9uU3RhY2suc2xpY2UoMCksXG4gICAgICAgICAgICBkb25lOiB0aGlzLmRvbmVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgICBiYWNrdXAueXlsbG9jLnJhbmdlID0gdGhpcy55eWxsb2MucmFuZ2Uuc2xpY2UoMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxpbmVzID0gbWF0Y2hbMF0ubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO1xuICAgICAgICBpZiAobGluZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGluZW5vICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5sYXN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiBsaW5lcyA/IGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdLmxlbmd0aCAtIGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdLm1hdGNoKC9cXHI/XFxuPy8pWzBdLmxlbmd0aCA6IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uICsgbWF0Y2hbMF0ubGVuZ3RoXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMueXl0ZXh0ICs9IG1hdGNoWzBdO1xuICAgICAgICB0aGlzLm1hdGNoICs9IG1hdGNoWzBdO1xuICAgICAgICB0aGlzLm1hdGNoZXMgPSBtYXRjaDtcbiAgICAgICAgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGg7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbdGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICs9IHRoaXMueXlsZW5nXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tb3JlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2JhY2t0cmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKG1hdGNoWzBdLmxlbmd0aCk7XG4gICAgICAgIHRoaXMubWF0Y2hlZCArPSBtYXRjaFswXTtcbiAgICAgICAgdG9rZW4gPSB0aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh0aGlzLCB0aGlzLnl5LCB0aGlzLCBpbmRleGVkX3J1bGUsIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSk7XG4gICAgICAgIGlmICh0aGlzLmRvbmUgJiYgdGhpcy5faW5wdXQpIHtcbiAgICAgICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYmFja3RyYWNrKSB7XG4gICAgICAgICAgZm9yICh2YXIgayBpbiBiYWNrdXApIHtcbiAgICAgICAgICAgIHRoaXNba10gPSBiYWNrdXBba107XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggaW4gaW5wdXRcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5faW5wdXQpIHtcbiAgICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0b2tlbiwgbWF0Y2gsIHRlbXBNYXRjaCwgaW5kZXg7XG4gICAgICAgIGlmICghdGhpcy5fbW9yZSkge1xuICAgICAgICAgIHRoaXMueXl0ZXh0ID0gXCJcIjtcbiAgICAgICAgICB0aGlzLm1hdGNoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcnVsZXMgPSB0aGlzLl9jdXJyZW50UnVsZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRlbXBNYXRjaCA9IHRoaXMuX2lucHV0Lm1hdGNoKHRoaXMucnVsZXNbcnVsZXNbaV1dKTtcbiAgICAgICAgICBpZiAodGVtcE1hdGNoICYmICghbWF0Y2ggfHwgdGVtcE1hdGNoWzBdLmxlbmd0aCA+IG1hdGNoWzBdLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIG1hdGNoID0gdGVtcE1hdGNoO1xuICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnRlc3RfbWF0Y2godGVtcE1hdGNoLCBydWxlc1tpXSk7XG4gICAgICAgICAgICAgIGlmICh0b2tlbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYmFja3RyYWNrKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5mbGV4KSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICB0b2tlbiA9IHRoaXMudGVzdF9tYXRjaChtYXRjaCwgcnVsZXNbaW5kZXhdKTtcbiAgICAgICAgICBpZiAodG9rZW4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faW5wdXQgPT09IFwiXCIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBcIi4gVW5yZWNvZ25pemVkIHRleHQuXFxuXCIgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7XG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICBsaW5lOiB0aGlzLnl5bGluZW5vXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyByZXR1cm4gbmV4dCBtYXRjaCB0aGF0IGhhcyBhIHRva2VuXG4gICAgICBsZXg6IGZ1bmN0aW9uIGxleCgpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLm5leHQoKTtcbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5sZXgoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIGFjdGl2YXRlcyBhIG5ldyBsZXhlciBjb25kaXRpb24gc3RhdGUgKHB1c2hlcyB0aGUgbmV3IGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvbnRvIHRoZSBjb25kaXRpb24gc3RhY2spXG4gICAgICBiZWdpbjogZnVuY3Rpb24gYmVnaW4oY29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sucHVzaChjb25kaXRpb24pO1xuICAgICAgfSxcbiAgICAgIC8vIHBvcCB0aGUgcHJldmlvdXNseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIG9mZiB0aGUgY29uZGl0aW9uIHN0YWNrXG4gICAgICBwb3BTdGF0ZTogZnVuY3Rpb24gcG9wU3RhdGUoKSB7XG4gICAgICAgIHZhciBuID0gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxO1xuICAgICAgICBpZiAobiA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5wb3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFja1swXTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHByb2R1Y2UgdGhlIGxleGVyIHJ1bGUgc2V0IHdoaWNoIGlzIGFjdGl2ZSBmb3IgdGhlIGN1cnJlbnRseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlXG4gICAgICBfY3VycmVudFJ1bGVzOiBmdW5jdGlvbiBfY3VycmVudFJ1bGVzKCkge1xuICAgICAgICBpZiAodGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggJiYgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uc1t0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV1dLnJ1bGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbnNbXCJJTklUSUFMXCJdLnJ1bGVzO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIHRoZSBjdXJyZW50bHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZTsgd2hlbiBhbiBpbmRleCBhcmd1bWVudCBpcyBwcm92aWRlZCBpdCBwcm9kdWNlcyB0aGUgTi10aCBwcmV2aW91cyBjb25kaXRpb24gc3RhdGUsIGlmIGF2YWlsYWJsZVxuICAgICAgdG9wU3RhdGU6IGZ1bmN0aW9uIHRvcFN0YXRlKG4pIHtcbiAgICAgICAgbiA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMSAtIE1hdGguYWJzKG4gfHwgMCk7XG4gICAgICAgIGlmIChuID49IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFja1tuXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCJJTklUSUFMXCI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBhbGlhcyBmb3IgYmVnaW4oY29uZGl0aW9uKVxuICAgICAgcHVzaFN0YXRlOiBmdW5jdGlvbiBwdXNoU3RhdGUoY29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuYmVnaW4oY29uZGl0aW9uKTtcbiAgICAgIH0sXG4gICAgICAvLyByZXR1cm4gdGhlIG51bWJlciBvZiBzdGF0ZXMgY3VycmVudGx5IG9uIHRoZSBzdGFja1xuICAgICAgc3RhdGVTdGFja1NpemU6IGZ1bmN0aW9uIHN0YXRlU3RhY2tTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGg7XG4gICAgICB9LFxuICAgICAgb3B0aW9uczogeyBcImNhc2UtaW5zZW5zaXRpdmVcIjogdHJ1ZSB9LFxuICAgICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24gYW5vbnltb3VzKHl5LCB5eV8sICRhdm9pZGluZ19uYW1lX2NvbGxpc2lvbnMsIFlZX1NUQVJUKSB7XG4gICAgICAgIHN3aXRjaCAoJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucykge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiAzNDtcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gMzQ7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuIDM0O1xuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHJldHVybiAxMDtcbiAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcImFjY190aXRsZVwiKTtcbiAgICAgICAgICAgIHJldHVybiAxOTtcbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfdGl0bGVfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcImFjY19kZXNjclwiKTtcbiAgICAgICAgICAgIHJldHVybiAyMTtcbiAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX2Rlc2NyX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiYWNjX2Rlc2NyX211bHRpbGluZVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZVwiO1xuICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICByZXR1cm4gNTtcbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgcmV0dXJuIDg7XG4gICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiYXhpc19kYXRhXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiWF9BWElTXCI7XG4gICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiYXhpc19kYXRhXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiWV9BWElTXCI7XG4gICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiYXhpc19iYW5kX2RhdGFcIik7XG4gICAgICAgICAgICByZXR1cm4gMjQ7XG4gICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgIHJldHVybiAzMTtcbiAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJkYXRhXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDE2O1xuICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcImRhdGFcIik7XG4gICAgICAgICAgICByZXR1cm4gMTg7XG4gICAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiZGF0YV9pbm5lclwiKTtcbiAgICAgICAgICAgIHJldHVybiAyNDtcbiAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgcmV0dXJuIDI3O1xuICAgICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gMjY7XG4gICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcInN0cmluZ1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgICAgcmV0dXJuIFwiU1RSXCI7XG4gICAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICAgIHJldHVybiAyNDtcbiAgICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgICAgcmV0dXJuIDI2O1xuICAgICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgICByZXR1cm4gNDM7XG4gICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIHJldHVybiBcIkNPTE9OXCI7XG4gICAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICAgIHJldHVybiA0NDtcbiAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgcmV0dXJuIDI4O1xuICAgICAgICAgIGNhc2UgMzU6XG4gICAgICAgICAgICByZXR1cm4gNDU7XG4gICAgICAgICAgY2FzZSAzNjpcbiAgICAgICAgICAgIHJldHVybiA0NjtcbiAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgcmV0dXJuIDQ4O1xuICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICByZXR1cm4gNTA7XG4gICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgIHJldHVybiA0NztcbiAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgcmV0dXJuIDQxO1xuICAgICAgICAgIGNhc2UgNDE6XG4gICAgICAgICAgICByZXR1cm4gNDk7XG4gICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgIHJldHVybiA0MjtcbiAgICAgICAgICBjYXNlIDQzOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgIHJldHVybiAzNTtcbiAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgcmV0dXJuIDM2O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcnVsZXM6IFsvXig/OiUlKD8hXFx7KVteXFxuXSopL2ksIC9eKD86W15cXH1dJSVbXlxcbl0qKS9pLCAvXig/OihcXHI/XFxuKSkvaSwgL14oPzooXFxyP1xcbikpL2ksIC9eKD86W1xcblxccl0rKS9pLCAvXig/OiUlW15cXG5dKikvaSwgL14oPzp0aXRsZVxcYikvaSwgL14oPzphY2NUaXRsZVxccyo6XFxzKikvaSwgL14oPzooPyFcXG58fCkqW15cXG5dKikvaSwgL14oPzphY2NEZXNjclxccyo6XFxzKikvaSwgL14oPzooPyFcXG58fCkqW15cXG5dKikvaSwgL14oPzphY2NEZXNjclxccypcXHtcXHMqKS9pLCAvXig/OlxceykvaSwgL14oPzpbXlxcfV0qKS9pLCAvXig/Onh5Y2hhcnQtYmV0YVxcYikvaSwgL14oPzooPzp2ZXJ0aWNhbHxob3Jpem9udGFsKSkvaSwgL14oPzp4LWF4aXNcXGIpL2ksIC9eKD86eS1heGlzXFxiKS9pLCAvXig/OlxcWykvaSwgL14oPzotLT4pL2ksIC9eKD86bGluZVxcYikvaSwgL14oPzpiYXJcXGIpL2ksIC9eKD86XFxbKS9pLCAvXig/OlsrLV0/KD86XFxkKyg/OlxcLlxcZCspP3xcXC5cXGQrKSkvaSwgL14oPzpcXF0pL2ksIC9eKD86KD86YFxcKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxceyB0aGlzXFwucHVzaFN0YXRlXFwobWRfc3RyaW5nXFwpOyBcXH1cXG48bWRfc3RyaW5nPlxcKFxcPzpcXChcXD8hYFwiXFwpXFwuXFwpXFwrICAgICAgICAgICAgICAgICAgXFx7IHJldHVybiBNRF9TVFI7IFxcfVxcbjxtZF9zdHJpbmc+XFwoXFw/OmApKS9pLCAvXig/OltcIl0pL2ksIC9eKD86W1wiXSkvaSwgL14oPzpbXlwiXSopL2ksIC9eKD86XFxbKS9pLCAvXig/OlxcXSkvaSwgL14oPzpbQS1aYS16XSspL2ksIC9eKD86OikvaSwgL14oPzpcXCspL2ksIC9eKD86LCkvaSwgL14oPzo9KS9pLCAvXig/OlxcKikvaSwgL14oPzojKS9pLCAvXig/OltcXF9dKS9pLCAvXig/OlxcLikvaSwgL14oPzomKS9pLCAvXig/Oi0pL2ksIC9eKD86WzAtOV0rKS9pLCAvXig/OlxccyspL2ksIC9eKD86OykvaSwgL14oPzokKS9pXSxcbiAgICAgIGNvbmRpdGlvbnM6IHsgXCJkYXRhX2lubmVyXCI6IHsgXCJydWxlc1wiOiBbMCwgMSwgNCwgNSwgNiwgNywgOSwgMTEsIDE0LCAxNSwgMTYsIDE3LCAyMCwgMjEsIDIzLCAyNCwgMjUsIDI2LCAyOSwgMzAsIDMxLCAzMiwgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MSwgNDIsIDQzLCA0NCwgNDVdLCBcImluY2x1c2l2ZVwiOiB0cnVlIH0sIFwiZGF0YVwiOiB7IFwicnVsZXNcIjogWzAsIDEsIDMsIDQsIDUsIDYsIDcsIDksIDExLCAxNCwgMTUsIDE2LCAxNywgMjAsIDIxLCAyMiwgMjUsIDI2LCAyOSwgMzAsIDMxLCAzMiwgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MSwgNDIsIDQzLCA0NCwgNDVdLCBcImluY2x1c2l2ZVwiOiB0cnVlIH0sIFwiYXhpc19iYW5kX2RhdGFcIjogeyBcInJ1bGVzXCI6IFswLCAxLCA0LCA1LCA2LCA3LCA5LCAxMSwgMTQsIDE1LCAxNiwgMTcsIDIwLCAyMSwgMjQsIDI1LCAyNiwgMjksIDMwLCAzMSwgMzIsIDMzLCAzNCwgMzUsIDM2LCAzNywgMzgsIDM5LCA0MCwgNDEsIDQyLCA0MywgNDQsIDQ1XSwgXCJpbmNsdXNpdmVcIjogdHJ1ZSB9LCBcImF4aXNfZGF0YVwiOiB7IFwicnVsZXNcIjogWzAsIDEsIDIsIDQsIDUsIDYsIDcsIDksIDExLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMCwgMjEsIDIzLCAyNSwgMjYsIDI5LCAzMCwgMzEsIDMyLCAzMywgMzQsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDQxLCA0MiwgNDMsIDQ0LCA0NV0sIFwiaW5jbHVzaXZlXCI6IHRydWUgfSwgXCJhY2NfZGVzY3JfbXVsdGlsaW5lXCI6IHsgXCJydWxlc1wiOiBbMTIsIDEzXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJhY2NfZGVzY3JcIjogeyBcInJ1bGVzXCI6IFsxMF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiYWNjX3RpdGxlXCI6IHsgXCJydWxlc1wiOiBbOF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwidGl0bGVcIjogeyBcInJ1bGVzXCI6IFtdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIm1kX3N0cmluZ1wiOiB7IFwicnVsZXNcIjogW10sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwic3RyaW5nXCI6IHsgXCJydWxlc1wiOiBbMjcsIDI4XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJJTklUSUFMXCI6IHsgXCJydWxlc1wiOiBbMCwgMSwgNCwgNSwgNiwgNywgOSwgMTEsIDE0LCAxNSwgMTYsIDE3LCAyMCwgMjEsIDI1LCAyNiwgMjksIDMwLCAzMSwgMzIsIDMzLCAzNCwgMzUsIDM2LCAzNywgMzgsIDM5LCA0MCwgNDEsIDQyLCA0MywgNDQsIDQ1XSwgXCJpbmNsdXNpdmVcIjogdHJ1ZSB9IH1cbiAgICB9O1xuICAgIHJldHVybiBsZXhlcjI7XG4gIH0oKTtcbiAgcGFyc2VyMi5sZXhlciA9IGxleGVyO1xuICBmdW5jdGlvbiBQYXJzZXIoKSB7XG4gICAgdGhpcy55eSA9IHt9O1xuICB9XG4gIFBhcnNlci5wcm90b3R5cGUgPSBwYXJzZXIyO1xuICBwYXJzZXIyLlBhcnNlciA9IFBhcnNlcjtcbiAgcmV0dXJuIG5ldyBQYXJzZXIoKTtcbn0oKTtcbnBhcnNlci5wYXJzZXIgPSBwYXJzZXI7XG5jb25zdCBwYXJzZXIkMSA9IHBhcnNlcjtcbmZ1bmN0aW9uIGlzQmFyUGxvdChkYXRhKSB7XG4gIHJldHVybiBkYXRhLnR5cGUgPT09IFwiYmFyXCI7XG59XG5mdW5jdGlvbiBpc0JhbmRBeGlzRGF0YShkYXRhKSB7XG4gIHJldHVybiBkYXRhLnR5cGUgPT09IFwiYmFuZFwiO1xufVxuZnVuY3Rpb24gaXNMaW5lYXJBeGlzRGF0YShkYXRhKSB7XG4gIHJldHVybiBkYXRhLnR5cGUgPT09IFwibGluZWFyXCI7XG59XG5jbGFzcyBUZXh0RGltZW5zaW9uQ2FsY3VsYXRvcldpdGhGb250IHtcbiAgY29uc3RydWN0b3IocGFyZW50R3JvdXApIHtcbiAgICB0aGlzLnBhcmVudEdyb3VwID0gcGFyZW50R3JvdXA7XG4gIH1cbiAgZ2V0TWF4RGltZW5zaW9uKHRleHRzLCBmb250U2l6ZSkge1xuICAgIGlmICghdGhpcy5wYXJlbnRHcm91cCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHRleHRzLnJlZHVjZSgoYWNjLCBjdXIpID0+IE1hdGgubWF4KGN1ci5sZW5ndGgsIGFjYyksIDApICogZm9udFNpemUsXG4gICAgICAgIGhlaWdodDogZm9udFNpemVcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICBjb25zdCBlbGVtID0gdGhpcy5wYXJlbnRHcm91cC5hcHBlbmQoXCJnXCIpLmF0dHIoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpLmF0dHIoXCJmb250LXNpemVcIiwgZm9udFNpemUpO1xuICAgIGZvciAoY29uc3QgdCBvZiB0ZXh0cykge1xuICAgICAgY29uc3QgYmJveCA9IGNvbXB1dGVEaW1lbnNpb25PZlRleHQoZWxlbSwgMSwgdCk7XG4gICAgICBjb25zdCB3aWR0aCA9IGJib3ggPyBiYm94LndpZHRoIDogdC5sZW5ndGggKiBmb250U2l6ZTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGJib3ggPyBiYm94LmhlaWdodCA6IGZvbnRTaXplO1xuICAgICAgZGltZW5zaW9uLndpZHRoID0gTWF0aC5tYXgoZGltZW5zaW9uLndpZHRoLCB3aWR0aCk7XG4gICAgICBkaW1lbnNpb24uaGVpZ2h0ID0gTWF0aC5tYXgoZGltZW5zaW9uLmhlaWdodCwgaGVpZ2h0KTtcbiAgICB9XG4gICAgZWxlbS5yZW1vdmUoKTtcbiAgICByZXR1cm4gZGltZW5zaW9uO1xuICB9XG59XG5jb25zdCBCQVJfV0lEVEhfVE9fVElDS19XSURUSF9SQVRJTyA9IDAuNztcbmNvbnN0IE1BWF9PVVRFUl9QQURESU5HX1BFUkNFTlRfRk9SX1dSVF9MQUJFTCA9IDAuMjtcbmNsYXNzIEJhc2VBeGlzIHtcbiAgY29uc3RydWN0b3IoYXhpc0NvbmZpZywgdGl0bGUsIHRleHREaW1lbnNpb25DYWxjdWxhdG9yLCBheGlzVGhlbWVDb25maWcpIHtcbiAgICB0aGlzLmF4aXNDb25maWcgPSBheGlzQ29uZmlnO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRleHREaW1lbnNpb25DYWxjdWxhdG9yID0gdGV4dERpbWVuc2lvbkNhbGN1bGF0b3I7XG4gICAgdGhpcy5heGlzVGhlbWVDb25maWcgPSBheGlzVGhlbWVDb25maWc7XG4gICAgdGhpcy5ib3VuZGluZ1JlY3QgPSB7IHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgICB0aGlzLmF4aXNQb3NpdGlvbiA9IFwibGVmdFwiO1xuICAgIHRoaXMuc2hvd1RpdGxlID0gZmFsc2U7XG4gICAgdGhpcy5zaG93TGFiZWwgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dUaWNrID0gZmFsc2U7XG4gICAgdGhpcy5zaG93QXhpc0xpbmUgPSBmYWxzZTtcbiAgICB0aGlzLm91dGVyUGFkZGluZyA9IDA7XG4gICAgdGhpcy50aXRsZVRleHRIZWlnaHQgPSAwO1xuICAgIHRoaXMubGFiZWxUZXh0SGVpZ2h0ID0gMDtcbiAgICB0aGlzLnJhbmdlID0gWzAsIDEwXTtcbiAgICB0aGlzLmJvdW5kaW5nUmVjdCA9IHsgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuICAgIHRoaXMuYXhpc1Bvc2l0aW9uID0gXCJsZWZ0XCI7XG4gIH1cbiAgc2V0UmFuZ2UocmFuZ2UpIHtcbiAgICB0aGlzLnJhbmdlID0gcmFuZ2U7XG4gICAgaWYgKHRoaXMuYXhpc1Bvc2l0aW9uID09PSBcImxlZnRcIiB8fCB0aGlzLmF4aXNQb3NpdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nUmVjdC5oZWlnaHQgPSByYW5nZVsxXSAtIHJhbmdlWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJvdW5kaW5nUmVjdC53aWR0aCA9IHJhbmdlWzFdIC0gcmFuZ2VbMF07XG4gICAgfVxuICAgIHRoaXMucmVjYWxjdWxhdGVTY2FsZSgpO1xuICB9XG4gIGdldFJhbmdlKCkge1xuICAgIHJldHVybiBbdGhpcy5yYW5nZVswXSArIHRoaXMub3V0ZXJQYWRkaW5nLCB0aGlzLnJhbmdlWzFdIC0gdGhpcy5vdXRlclBhZGRpbmddO1xuICB9XG4gIHNldEF4aXNQb3NpdGlvbihheGlzUG9zaXRpb24pIHtcbiAgICB0aGlzLmF4aXNQb3NpdGlvbiA9IGF4aXNQb3NpdGlvbjtcbiAgICB0aGlzLnNldFJhbmdlKHRoaXMucmFuZ2UpO1xuICB9XG4gIGdldFRpY2tEaXN0YW5jZSgpIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMuZ2V0UmFuZ2UoKTtcbiAgICByZXR1cm4gTWF0aC5hYnMocmFuZ2VbMF0gLSByYW5nZVsxXSkgLyB0aGlzLmdldFRpY2tWYWx1ZXMoKS5sZW5ndGg7XG4gIH1cbiAgZ2V0QXhpc091dGVyUGFkZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5vdXRlclBhZGRpbmc7XG4gIH1cbiAgZ2V0TGFiZWxEaW1lbnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dERpbWVuc2lvbkNhbGN1bGF0b3IuZ2V0TWF4RGltZW5zaW9uKFxuICAgICAgdGhpcy5nZXRUaWNrVmFsdWVzKCkubWFwKCh0aWNrKSA9PiB0aWNrLnRvU3RyaW5nKCkpLFxuICAgICAgdGhpcy5heGlzQ29uZmlnLmxhYmVsRm9udFNpemVcbiAgICApO1xuICB9XG4gIHJlY2FsY3VsYXRlT3V0ZXJQYWRkaW5nVG9EcmF3QmFyKCkge1xuICAgIGlmIChCQVJfV0lEVEhfVE9fVElDS19XSURUSF9SQVRJTyAqIHRoaXMuZ2V0VGlja0Rpc3RhbmNlKCkgPiB0aGlzLm91dGVyUGFkZGluZyAqIDIpIHtcbiAgICAgIHRoaXMub3V0ZXJQYWRkaW5nID0gTWF0aC5mbG9vcihCQVJfV0lEVEhfVE9fVElDS19XSURUSF9SQVRJTyAqIHRoaXMuZ2V0VGlja0Rpc3RhbmNlKCkgLyAyKTtcbiAgICB9XG4gICAgdGhpcy5yZWNhbGN1bGF0ZVNjYWxlKCk7XG4gIH1cbiAgY2FsY3VsYXRlU3BhY2VJZkRyYXduSG9yaXpvbnRhbGx5KGF2YWlsYWJsZVNwYWNlKSB7XG4gICAgbGV0IGF2YWlsYWJsZUhlaWdodCA9IGF2YWlsYWJsZVNwYWNlLmhlaWdodDtcbiAgICBpZiAodGhpcy5heGlzQ29uZmlnLnNob3dBeGlzTGluZSAmJiBhdmFpbGFibGVIZWlnaHQgPiB0aGlzLmF4aXNDb25maWcuYXhpc0xpbmVXaWR0aCkge1xuICAgICAgYXZhaWxhYmxlSGVpZ2h0IC09IHRoaXMuYXhpc0NvbmZpZy5heGlzTGluZVdpZHRoO1xuICAgICAgdGhpcy5zaG93QXhpc0xpbmUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5heGlzQ29uZmlnLnNob3dMYWJlbCkge1xuICAgICAgY29uc3Qgc3BhY2VSZXF1aXJlZCA9IHRoaXMuZ2V0TGFiZWxEaW1lbnNpb24oKTtcbiAgICAgIGNvbnN0IG1heFBhZGRpbmcgPSBNQVhfT1VURVJfUEFERElOR19QRVJDRU5UX0ZPUl9XUlRfTEFCRUwgKiBhdmFpbGFibGVTcGFjZS53aWR0aDtcbiAgICAgIHRoaXMub3V0ZXJQYWRkaW5nID0gTWF0aC5taW4oc3BhY2VSZXF1aXJlZC53aWR0aCAvIDIsIG1heFBhZGRpbmcpO1xuICAgICAgY29uc3QgaGVpZ2h0UmVxdWlyZWQgPSBzcGFjZVJlcXVpcmVkLmhlaWdodCArIHRoaXMuYXhpc0NvbmZpZy5sYWJlbFBhZGRpbmcgKiAyO1xuICAgICAgdGhpcy5sYWJlbFRleHRIZWlnaHQgPSBzcGFjZVJlcXVpcmVkLmhlaWdodDtcbiAgICAgIGlmIChoZWlnaHRSZXF1aXJlZCA8PSBhdmFpbGFibGVIZWlnaHQpIHtcbiAgICAgICAgYXZhaWxhYmxlSGVpZ2h0IC09IGhlaWdodFJlcXVpcmVkO1xuICAgICAgICB0aGlzLnNob3dMYWJlbCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmF4aXNDb25maWcuc2hvd1RpY2sgJiYgYXZhaWxhYmxlSGVpZ2h0ID49IHRoaXMuYXhpc0NvbmZpZy50aWNrTGVuZ3RoKSB7XG4gICAgICB0aGlzLnNob3dUaWNrID0gdHJ1ZTtcbiAgICAgIGF2YWlsYWJsZUhlaWdodCAtPSB0aGlzLmF4aXNDb25maWcudGlja0xlbmd0aDtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXhpc0NvbmZpZy5zaG93VGl0bGUgJiYgdGhpcy50aXRsZSkge1xuICAgICAgY29uc3Qgc3BhY2VSZXF1aXJlZCA9IHRoaXMudGV4dERpbWVuc2lvbkNhbGN1bGF0b3IuZ2V0TWF4RGltZW5zaW9uKFxuICAgICAgICBbdGhpcy50aXRsZV0sXG4gICAgICAgIHRoaXMuYXhpc0NvbmZpZy50aXRsZUZvbnRTaXplXG4gICAgICApO1xuICAgICAgY29uc3QgaGVpZ2h0UmVxdWlyZWQgPSBzcGFjZVJlcXVpcmVkLmhlaWdodCArIHRoaXMuYXhpc0NvbmZpZy50aXRsZVBhZGRpbmcgKiAyO1xuICAgICAgdGhpcy50aXRsZVRleHRIZWlnaHQgPSBzcGFjZVJlcXVpcmVkLmhlaWdodDtcbiAgICAgIGlmIChoZWlnaHRSZXF1aXJlZCA8PSBhdmFpbGFibGVIZWlnaHQpIHtcbiAgICAgICAgYXZhaWxhYmxlSGVpZ2h0IC09IGhlaWdodFJlcXVpcmVkO1xuICAgICAgICB0aGlzLnNob3dUaXRsZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYm91bmRpbmdSZWN0LndpZHRoID0gYXZhaWxhYmxlU3BhY2Uud2lkdGg7XG4gICAgdGhpcy5ib3VuZGluZ1JlY3QuaGVpZ2h0ID0gYXZhaWxhYmxlU3BhY2UuaGVpZ2h0IC0gYXZhaWxhYmxlSGVpZ2h0O1xuICB9XG4gIGNhbGN1bGF0ZVNwYWNlSWZEcmF3blZlcnRpY2FsKGF2YWlsYWJsZVNwYWNlKSB7XG4gICAgbGV0IGF2YWlsYWJsZVdpZHRoID0gYXZhaWxhYmxlU3BhY2Uud2lkdGg7XG4gICAgaWYgKHRoaXMuYXhpc0NvbmZpZy5zaG93QXhpc0xpbmUgJiYgYXZhaWxhYmxlV2lkdGggPiB0aGlzLmF4aXNDb25maWcuYXhpc0xpbmVXaWR0aCkge1xuICAgICAgYXZhaWxhYmxlV2lkdGggLT0gdGhpcy5heGlzQ29uZmlnLmF4aXNMaW5lV2lkdGg7XG4gICAgICB0aGlzLnNob3dBeGlzTGluZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmF4aXNDb25maWcuc2hvd0xhYmVsKSB7XG4gICAgICBjb25zdCBzcGFjZVJlcXVpcmVkID0gdGhpcy5nZXRMYWJlbERpbWVuc2lvbigpO1xuICAgICAgY29uc3QgbWF4UGFkZGluZyA9IE1BWF9PVVRFUl9QQURESU5HX1BFUkNFTlRfRk9SX1dSVF9MQUJFTCAqIGF2YWlsYWJsZVNwYWNlLmhlaWdodDtcbiAgICAgIHRoaXMub3V0ZXJQYWRkaW5nID0gTWF0aC5taW4oc3BhY2VSZXF1aXJlZC5oZWlnaHQgLyAyLCBtYXhQYWRkaW5nKTtcbiAgICAgIGNvbnN0IHdpZHRoUmVxdWlyZWQgPSBzcGFjZVJlcXVpcmVkLndpZHRoICsgdGhpcy5heGlzQ29uZmlnLmxhYmVsUGFkZGluZyAqIDI7XG4gICAgICBpZiAod2lkdGhSZXF1aXJlZCA8PSBhdmFpbGFibGVXaWR0aCkge1xuICAgICAgICBhdmFpbGFibGVXaWR0aCAtPSB3aWR0aFJlcXVpcmVkO1xuICAgICAgICB0aGlzLnNob3dMYWJlbCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmF4aXNDb25maWcuc2hvd1RpY2sgJiYgYXZhaWxhYmxlV2lkdGggPj0gdGhpcy5heGlzQ29uZmlnLnRpY2tMZW5ndGgpIHtcbiAgICAgIHRoaXMuc2hvd1RpY2sgPSB0cnVlO1xuICAgICAgYXZhaWxhYmxlV2lkdGggLT0gdGhpcy5heGlzQ29uZmlnLnRpY2tMZW5ndGg7XG4gICAgfVxuICAgIGlmICh0aGlzLmF4aXNDb25maWcuc2hvd1RpdGxlICYmIHRoaXMudGl0bGUpIHtcbiAgICAgIGNvbnN0IHNwYWNlUmVxdWlyZWQgPSB0aGlzLnRleHREaW1lbnNpb25DYWxjdWxhdG9yLmdldE1heERpbWVuc2lvbihcbiAgICAgICAgW3RoaXMudGl0bGVdLFxuICAgICAgICB0aGlzLmF4aXNDb25maWcudGl0bGVGb250U2l6ZVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHdpZHRoUmVxdWlyZWQgPSBzcGFjZVJlcXVpcmVkLmhlaWdodCArIHRoaXMuYXhpc0NvbmZpZy50aXRsZVBhZGRpbmcgKiAyO1xuICAgICAgdGhpcy50aXRsZVRleHRIZWlnaHQgPSBzcGFjZVJlcXVpcmVkLmhlaWdodDtcbiAgICAgIGlmICh3aWR0aFJlcXVpcmVkIDw9IGF2YWlsYWJsZVdpZHRoKSB7XG4gICAgICAgIGF2YWlsYWJsZVdpZHRoIC09IHdpZHRoUmVxdWlyZWQ7XG4gICAgICAgIHRoaXMuc2hvd1RpdGxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5ib3VuZGluZ1JlY3Qud2lkdGggPSBhdmFpbGFibGVTcGFjZS53aWR0aCAtIGF2YWlsYWJsZVdpZHRoO1xuICAgIHRoaXMuYm91bmRpbmdSZWN0LmhlaWdodCA9IGF2YWlsYWJsZVNwYWNlLmhlaWdodDtcbiAgfVxuICBjYWxjdWxhdGVTcGFjZShhdmFpbGFibGVTcGFjZSkge1xuICAgIGlmICh0aGlzLmF4aXNQb3NpdGlvbiA9PT0gXCJsZWZ0XCIgfHwgdGhpcy5heGlzUG9zaXRpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgdGhpcy5jYWxjdWxhdGVTcGFjZUlmRHJhd25WZXJ0aWNhbChhdmFpbGFibGVTcGFjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlU3BhY2VJZkRyYXduSG9yaXpvbnRhbGx5KGF2YWlsYWJsZVNwYWNlKTtcbiAgICB9XG4gICAgdGhpcy5yZWNhbGN1bGF0ZVNjYWxlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB0aGlzLmJvdW5kaW5nUmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5ib3VuZGluZ1JlY3QuaGVpZ2h0XG4gICAgfTtcbiAgfVxuICBzZXRCb3VuZGluZ0JveFhZKHBvaW50KSB7XG4gICAgdGhpcy5ib3VuZGluZ1JlY3QueCA9IHBvaW50Lng7XG4gICAgdGhpcy5ib3VuZGluZ1JlY3QueSA9IHBvaW50Lnk7XG4gIH1cbiAgZ2V0RHJhd2FibGVFbGVtZW50c0ZvckxlZnRBeGlzKCkge1xuICAgIGNvbnN0IGRyYXdhYmxlRWxlbWVudCA9IFtdO1xuICAgIGlmICh0aGlzLnNob3dBeGlzTGluZSkge1xuICAgICAgY29uc3QgeCA9IHRoaXMuYm91bmRpbmdSZWN0LnggKyB0aGlzLmJvdW5kaW5nUmVjdC53aWR0aCAtIHRoaXMuYXhpc0NvbmZpZy5heGlzTGluZVdpZHRoIC8gMjtcbiAgICAgIGRyYXdhYmxlRWxlbWVudC5wdXNoKHtcbiAgICAgICAgdHlwZTogXCJwYXRoXCIsXG4gICAgICAgIGdyb3VwVGV4dHM6IFtcImxlZnQtYXhpc1wiLCBcImF4aXNsLWxpbmVcIl0sXG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBgTSAke3h9LCR7dGhpcy5ib3VuZGluZ1JlY3QueX0gTCAke3h9LCR7dGhpcy5ib3VuZGluZ1JlY3QueSArIHRoaXMuYm91bmRpbmdSZWN0LmhlaWdodH0gYCxcbiAgICAgICAgICAgIHN0cm9rZUZpbGw6IHRoaXMuYXhpc1RoZW1lQ29uZmlnLmF4aXNMaW5lQ29sb3IsXG4gICAgICAgICAgICBzdHJva2VXaWR0aDogdGhpcy5heGlzQ29uZmlnLmF4aXNMaW5lV2lkdGhcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaG93TGFiZWwpIHtcbiAgICAgIGRyYXdhYmxlRWxlbWVudC5wdXNoKHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIGdyb3VwVGV4dHM6IFtcImxlZnQtYXhpc1wiLCBcImxhYmVsXCJdLFxuICAgICAgICBkYXRhOiB0aGlzLmdldFRpY2tWYWx1ZXMoKS5tYXAoKHRpY2spID0+ICh7XG4gICAgICAgICAgdGV4dDogdGljay50b1N0cmluZygpLFxuICAgICAgICAgIHg6IHRoaXMuYm91bmRpbmdSZWN0LnggKyB0aGlzLmJvdW5kaW5nUmVjdC53aWR0aCAtICh0aGlzLnNob3dMYWJlbCA/IHRoaXMuYXhpc0NvbmZpZy5sYWJlbFBhZGRpbmcgOiAwKSAtICh0aGlzLnNob3dUaWNrID8gdGhpcy5heGlzQ29uZmlnLnRpY2tMZW5ndGggOiAwKSAtICh0aGlzLnNob3dBeGlzTGluZSA/IHRoaXMuYXhpc0NvbmZpZy5heGlzTGluZVdpZHRoIDogMCksXG4gICAgICAgICAgeTogdGhpcy5nZXRTY2FsZVZhbHVlKHRpY2spLFxuICAgICAgICAgIGZpbGw6IHRoaXMuYXhpc1RoZW1lQ29uZmlnLmxhYmVsQ29sb3IsXG4gICAgICAgICAgZm9udFNpemU6IHRoaXMuYXhpc0NvbmZpZy5sYWJlbEZvbnRTaXplLFxuICAgICAgICAgIHJvdGF0aW9uOiAwLFxuICAgICAgICAgIHZlcnRpY2FsUG9zOiBcIm1pZGRsZVwiLFxuICAgICAgICAgIGhvcml6b250YWxQb3M6IFwicmlnaHRcIlxuICAgICAgICB9KSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaG93VGljaykge1xuICAgICAgY29uc3QgeCA9IHRoaXMuYm91bmRpbmdSZWN0LnggKyB0aGlzLmJvdW5kaW5nUmVjdC53aWR0aCAtICh0aGlzLnNob3dBeGlzTGluZSA/IHRoaXMuYXhpc0NvbmZpZy5heGlzTGluZVdpZHRoIDogMCk7XG4gICAgICBkcmF3YWJsZUVsZW1lbnQucHVzaCh7XG4gICAgICAgIHR5cGU6IFwicGF0aFwiLFxuICAgICAgICBncm91cFRleHRzOiBbXCJsZWZ0LWF4aXNcIiwgXCJ0aWNrc1wiXSxcbiAgICAgICAgZGF0YTogdGhpcy5nZXRUaWNrVmFsdWVzKCkubWFwKCh0aWNrKSA9PiAoe1xuICAgICAgICAgIHBhdGg6IGBNICR7eH0sJHt0aGlzLmdldFNjYWxlVmFsdWUodGljayl9IEwgJHt4IC0gdGhpcy5heGlzQ29uZmlnLnRpY2tMZW5ndGh9LCR7dGhpcy5nZXRTY2FsZVZhbHVlKHRpY2spfWAsXG4gICAgICAgICAgc3Ryb2tlRmlsbDogdGhpcy5heGlzVGhlbWVDb25maWcudGlja0NvbG9yLFxuICAgICAgICAgIHN0cm9rZVdpZHRoOiB0aGlzLmF4aXNDb25maWcudGlja1dpZHRoXG4gICAgICAgIH0pKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNob3dUaXRsZSkge1xuICAgICAgZHJhd2FibGVFbGVtZW50LnB1c2goe1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgZ3JvdXBUZXh0czogW1wibGVmdC1heGlzXCIsIFwidGl0bGVcIl0sXG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgeDogdGhpcy5ib3VuZGluZ1JlY3QueCArIHRoaXMuYXhpc0NvbmZpZy50aXRsZVBhZGRpbmcsXG4gICAgICAgICAgICB5OiB0aGlzLmJvdW5kaW5nUmVjdC55ICsgdGhpcy5ib3VuZGluZ1JlY3QuaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIGZpbGw6IHRoaXMuYXhpc1RoZW1lQ29uZmlnLnRpdGxlQ29sb3IsXG4gICAgICAgICAgICBmb250U2l6ZTogdGhpcy5heGlzQ29uZmlnLnRpdGxlRm9udFNpemUsXG4gICAgICAgICAgICByb3RhdGlvbjogMjcwLFxuICAgICAgICAgICAgdmVydGljYWxQb3M6IFwidG9wXCIsXG4gICAgICAgICAgICBob3Jpem9udGFsUG9zOiBcImNlbnRlclwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRyYXdhYmxlRWxlbWVudDtcbiAgfVxuICBnZXREcmF3YWJsZUVsZW1lbnRzRm9yQm90dG9tQXhpcygpIHtcbiAgICBjb25zdCBkcmF3YWJsZUVsZW1lbnQgPSBbXTtcbiAgICBpZiAodGhpcy5zaG93QXhpc0xpbmUpIHtcbiAgICAgIGNvbnN0IHkgPSB0aGlzLmJvdW5kaW5nUmVjdC55ICsgdGhpcy5heGlzQ29uZmlnLmF4aXNMaW5lV2lkdGggLyAyO1xuICAgICAgZHJhd2FibGVFbGVtZW50LnB1c2goe1xuICAgICAgICB0eXBlOiBcInBhdGhcIixcbiAgICAgICAgZ3JvdXBUZXh0czogW1wiYm90dG9tLWF4aXNcIiwgXCJheGlzLWxpbmVcIl0sXG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBgTSAke3RoaXMuYm91bmRpbmdSZWN0Lnh9LCR7eX0gTCAke3RoaXMuYm91bmRpbmdSZWN0LnggKyB0aGlzLmJvdW5kaW5nUmVjdC53aWR0aH0sJHt5fWAsXG4gICAgICAgICAgICBzdHJva2VGaWxsOiB0aGlzLmF4aXNUaGVtZUNvbmZpZy5heGlzTGluZUNvbG9yLFxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IHRoaXMuYXhpc0NvbmZpZy5heGlzTGluZVdpZHRoXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2hvd0xhYmVsKSB7XG4gICAgICBkcmF3YWJsZUVsZW1lbnQucHVzaCh7XG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBncm91cFRleHRzOiBbXCJib3R0b20tYXhpc1wiLCBcImxhYmVsXCJdLFxuICAgICAgICBkYXRhOiB0aGlzLmdldFRpY2tWYWx1ZXMoKS5tYXAoKHRpY2spID0+ICh7XG4gICAgICAgICAgdGV4dDogdGljay50b1N0cmluZygpLFxuICAgICAgICAgIHg6IHRoaXMuZ2V0U2NhbGVWYWx1ZSh0aWNrKSxcbiAgICAgICAgICB5OiB0aGlzLmJvdW5kaW5nUmVjdC55ICsgdGhpcy5heGlzQ29uZmlnLmxhYmVsUGFkZGluZyArICh0aGlzLnNob3dUaWNrID8gdGhpcy5heGlzQ29uZmlnLnRpY2tMZW5ndGggOiAwKSArICh0aGlzLnNob3dBeGlzTGluZSA/IHRoaXMuYXhpc0NvbmZpZy5heGlzTGluZVdpZHRoIDogMCksXG4gICAgICAgICAgZmlsbDogdGhpcy5heGlzVGhlbWVDb25maWcubGFiZWxDb2xvcixcbiAgICAgICAgICBmb250U2l6ZTogdGhpcy5heGlzQ29uZmlnLmxhYmVsRm9udFNpemUsXG4gICAgICAgICAgcm90YXRpb246IDAsXG4gICAgICAgICAgdmVydGljYWxQb3M6IFwidG9wXCIsXG4gICAgICAgICAgaG9yaXpvbnRhbFBvczogXCJjZW50ZXJcIlxuICAgICAgICB9KSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaG93VGljaykge1xuICAgICAgY29uc3QgeSA9IHRoaXMuYm91bmRpbmdSZWN0LnkgKyAodGhpcy5zaG93QXhpc0xpbmUgPyB0aGlzLmF4aXNDb25maWcuYXhpc0xpbmVXaWR0aCA6IDApO1xuICAgICAgZHJhd2FibGVFbGVtZW50LnB1c2goe1xuICAgICAgICB0eXBlOiBcInBhdGhcIixcbiAgICAgICAgZ3JvdXBUZXh0czogW1wiYm90dG9tLWF4aXNcIiwgXCJ0aWNrc1wiXSxcbiAgICAgICAgZGF0YTogdGhpcy5nZXRUaWNrVmFsdWVzKCkubWFwKCh0aWNrKSA9PiAoe1xuICAgICAgICAgIHBhdGg6IGBNICR7dGhpcy5nZXRTY2FsZVZhbHVlKHRpY2spfSwke3l9IEwgJHt0aGlzLmdldFNjYWxlVmFsdWUodGljayl9LCR7eSArIHRoaXMuYXhpc0NvbmZpZy50aWNrTGVuZ3RofWAsXG4gICAgICAgICAgc3Ryb2tlRmlsbDogdGhpcy5heGlzVGhlbWVDb25maWcudGlja0NvbG9yLFxuICAgICAgICAgIHN0cm9rZVdpZHRoOiB0aGlzLmF4aXNDb25maWcudGlja1dpZHRoXG4gICAgICAgIH0pKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNob3dUaXRsZSkge1xuICAgICAgZHJhd2FibGVFbGVtZW50LnB1c2goe1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgZ3JvdXBUZXh0czogW1wiYm90dG9tLWF4aXNcIiwgXCJ0aXRsZVwiXSxcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICB4OiB0aGlzLnJhbmdlWzBdICsgKHRoaXMucmFuZ2VbMV0gLSB0aGlzLnJhbmdlWzBdKSAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLmJvdW5kaW5nUmVjdC55ICsgdGhpcy5ib3VuZGluZ1JlY3QuaGVpZ2h0IC0gdGhpcy5heGlzQ29uZmlnLnRpdGxlUGFkZGluZyAtIHRoaXMudGl0bGVUZXh0SGVpZ2h0LFxuICAgICAgICAgICAgZmlsbDogdGhpcy5heGlzVGhlbWVDb25maWcudGl0bGVDb2xvcixcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLmF4aXNDb25maWcudGl0bGVGb250U2l6ZSxcbiAgICAgICAgICAgIHJvdGF0aW9uOiAwLFxuICAgICAgICAgICAgdmVydGljYWxQb3M6IFwidG9wXCIsXG4gICAgICAgICAgICBob3Jpem9udGFsUG9zOiBcImNlbnRlclwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRyYXdhYmxlRWxlbWVudDtcbiAgfVxuICBnZXREcmF3YWJsZUVsZW1lbnRzRm9yVG9wQXhpcygpIHtcbiAgICBjb25zdCBkcmF3YWJsZUVsZW1lbnQgPSBbXTtcbiAgICBpZiAodGhpcy5zaG93QXhpc0xpbmUpIHtcbiAgICAgIGNvbnN0IHkgPSB0aGlzLmJvdW5kaW5nUmVjdC55ICsgdGhpcy5ib3VuZGluZ1JlY3QuaGVpZ2h0IC0gdGhpcy5heGlzQ29uZmlnLmF4aXNMaW5lV2lkdGggLyAyO1xuICAgICAgZHJhd2FibGVFbGVtZW50LnB1c2goe1xuICAgICAgICB0eXBlOiBcInBhdGhcIixcbiAgICAgICAgZ3JvdXBUZXh0czogW1widG9wLWF4aXNcIiwgXCJheGlzLWxpbmVcIl0sXG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBgTSAke3RoaXMuYm91bmRpbmdSZWN0Lnh9LCR7eX0gTCAke3RoaXMuYm91bmRpbmdSZWN0LnggKyB0aGlzLmJvdW5kaW5nUmVjdC53aWR0aH0sJHt5fWAsXG4gICAgICAgICAgICBzdHJva2VGaWxsOiB0aGlzLmF4aXNUaGVtZUNvbmZpZy5heGlzTGluZUNvbG9yLFxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IHRoaXMuYXhpc0NvbmZpZy5heGlzTGluZVdpZHRoXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2hvd0xhYmVsKSB7XG4gICAgICBkcmF3YWJsZUVsZW1lbnQucHVzaCh7XG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBncm91cFRleHRzOiBbXCJ0b3AtYXhpc1wiLCBcImxhYmVsXCJdLFxuICAgICAgICBkYXRhOiB0aGlzLmdldFRpY2tWYWx1ZXMoKS5tYXAoKHRpY2spID0+ICh7XG4gICAgICAgICAgdGV4dDogdGljay50b1N0cmluZygpLFxuICAgICAgICAgIHg6IHRoaXMuZ2V0U2NhbGVWYWx1ZSh0aWNrKSxcbiAgICAgICAgICB5OiB0aGlzLmJvdW5kaW5nUmVjdC55ICsgKHRoaXMuc2hvd1RpdGxlID8gdGhpcy50aXRsZVRleHRIZWlnaHQgKyB0aGlzLmF4aXNDb25maWcudGl0bGVQYWRkaW5nICogMiA6IDApICsgdGhpcy5heGlzQ29uZmlnLmxhYmVsUGFkZGluZyxcbiAgICAgICAgICBmaWxsOiB0aGlzLmF4aXNUaGVtZUNvbmZpZy5sYWJlbENvbG9yLFxuICAgICAgICAgIGZvbnRTaXplOiB0aGlzLmF4aXNDb25maWcubGFiZWxGb250U2l6ZSxcbiAgICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgICB2ZXJ0aWNhbFBvczogXCJ0b3BcIixcbiAgICAgICAgICBob3Jpem9udGFsUG9zOiBcImNlbnRlclwiXG4gICAgICAgIH0pKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNob3dUaWNrKSB7XG4gICAgICBjb25zdCB5ID0gdGhpcy5ib3VuZGluZ1JlY3QueTtcbiAgICAgIGRyYXdhYmxlRWxlbWVudC5wdXNoKHtcbiAgICAgICAgdHlwZTogXCJwYXRoXCIsXG4gICAgICAgIGdyb3VwVGV4dHM6IFtcInRvcC1heGlzXCIsIFwidGlja3NcIl0sXG4gICAgICAgIGRhdGE6IHRoaXMuZ2V0VGlja1ZhbHVlcygpLm1hcCgodGljaykgPT4gKHtcbiAgICAgICAgICBwYXRoOiBgTSAke3RoaXMuZ2V0U2NhbGVWYWx1ZSh0aWNrKX0sJHt5ICsgdGhpcy5ib3VuZGluZ1JlY3QuaGVpZ2h0IC0gKHRoaXMuc2hvd0F4aXNMaW5lID8gdGhpcy5heGlzQ29uZmlnLmF4aXNMaW5lV2lkdGggOiAwKX0gTCAke3RoaXMuZ2V0U2NhbGVWYWx1ZSh0aWNrKX0sJHt5ICsgdGhpcy5ib3VuZGluZ1JlY3QuaGVpZ2h0IC0gdGhpcy5heGlzQ29uZmlnLnRpY2tMZW5ndGggLSAodGhpcy5zaG93QXhpc0xpbmUgPyB0aGlzLmF4aXNDb25maWcuYXhpc0xpbmVXaWR0aCA6IDApfWAsXG4gICAgICAgICAgc3Ryb2tlRmlsbDogdGhpcy5heGlzVGhlbWVDb25maWcudGlja0NvbG9yLFxuICAgICAgICAgIHN0cm9rZVdpZHRoOiB0aGlzLmF4aXNDb25maWcudGlja1dpZHRoXG4gICAgICAgIH0pKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNob3dUaXRsZSkge1xuICAgICAgZHJhd2FibGVFbGVtZW50LnB1c2goe1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgZ3JvdXBUZXh0czogW1widG9wLWF4aXNcIiwgXCJ0aXRsZVwiXSxcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICB4OiB0aGlzLmJvdW5kaW5nUmVjdC54ICsgdGhpcy5ib3VuZGluZ1JlY3Qud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5ib3VuZGluZ1JlY3QueSArIHRoaXMuYXhpc0NvbmZpZy50aXRsZVBhZGRpbmcsXG4gICAgICAgICAgICBmaWxsOiB0aGlzLmF4aXNUaGVtZUNvbmZpZy50aXRsZUNvbG9yLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoaXMuYXhpc0NvbmZpZy50aXRsZUZvbnRTaXplLFxuICAgICAgICAgICAgcm90YXRpb246IDAsXG4gICAgICAgICAgICB2ZXJ0aWNhbFBvczogXCJ0b3BcIixcbiAgICAgICAgICAgIGhvcml6b250YWxQb3M6IFwiY2VudGVyXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZHJhd2FibGVFbGVtZW50O1xuICB9XG4gIGdldERyYXdhYmxlRWxlbWVudHMoKSB7XG4gICAgaWYgKHRoaXMuYXhpc1Bvc2l0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RHJhd2FibGVFbGVtZW50c0ZvckxlZnRBeGlzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmF4aXNQb3NpdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICB0aHJvdyBFcnJvcihcIkRyYXdpbmcgb2YgcmlnaHQgYXhpcyBpcyBub3QgaW1wbGVtZW50ZWRcIik7XG4gICAgfVxuICAgIGlmICh0aGlzLmF4aXNQb3NpdGlvbiA9PT0gXCJib3R0b21cIikge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RHJhd2FibGVFbGVtZW50c0ZvckJvdHRvbUF4aXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXhpc1Bvc2l0aW9uID09PSBcInRvcFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXREcmF3YWJsZUVsZW1lbnRzRm9yVG9wQXhpcygpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cbn1cbmNsYXNzIEJhbmRBeGlzIGV4dGVuZHMgQmFzZUF4aXMge1xuICBjb25zdHJ1Y3RvcihheGlzQ29uZmlnLCBheGlzVGhlbWVDb25maWcsIGNhdGVnb3JpZXMsIHRpdGxlLCB0ZXh0RGltZW5zaW9uQ2FsY3VsYXRvcikge1xuICAgIHN1cGVyKGF4aXNDb25maWcsIHRpdGxlLCB0ZXh0RGltZW5zaW9uQ2FsY3VsYXRvciwgYXhpc1RoZW1lQ29uZmlnKTtcbiAgICB0aGlzLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xuICAgIHRoaXMuc2NhbGUgPSBzY2FsZUJhbmQoKS5kb21haW4odGhpcy5jYXRlZ29yaWVzKS5yYW5nZSh0aGlzLmdldFJhbmdlKCkpO1xuICB9XG4gIHNldFJhbmdlKHJhbmdlKSB7XG4gICAgc3VwZXIuc2V0UmFuZ2UocmFuZ2UpO1xuICB9XG4gIHJlY2FsY3VsYXRlU2NhbGUoKSB7XG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlQmFuZCgpLmRvbWFpbih0aGlzLmNhdGVnb3JpZXMpLnJhbmdlKHRoaXMuZ2V0UmFuZ2UoKSkucGFkZGluZ0lubmVyKDEpLnBhZGRpbmdPdXRlcigwKS5hbGlnbigwLjUpO1xuICAgIGxvZy50cmFjZShcIkJhbmRBeGlzIGF4aXMgZmluYWwgY2F0ZWdvcmllcywgcmFuZ2U6IFwiLCB0aGlzLmNhdGVnb3JpZXMsIHRoaXMuZ2V0UmFuZ2UoKSk7XG4gIH1cbiAgZ2V0VGlja1ZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzO1xuICB9XG4gIGdldFNjYWxlVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5zY2FsZSh2YWx1ZSkgfHwgdGhpcy5nZXRSYW5nZSgpWzBdO1xuICB9XG59XG5jbGFzcyBMaW5lYXJBeGlzIGV4dGVuZHMgQmFzZUF4aXMge1xuICBjb25zdHJ1Y3RvcihheGlzQ29uZmlnLCBheGlzVGhlbWVDb25maWcsIGRvbWFpbiwgdGl0bGUsIHRleHREaW1lbnNpb25DYWxjdWxhdG9yKSB7XG4gICAgc3VwZXIoYXhpc0NvbmZpZywgdGl0bGUsIHRleHREaW1lbnNpb25DYWxjdWxhdG9yLCBheGlzVGhlbWVDb25maWcpO1xuICAgIHRoaXMuZG9tYWluID0gZG9tYWluO1xuICAgIHRoaXMuc2NhbGUgPSBzY2FsZUxpbmVhcigpLmRvbWFpbih0aGlzLmRvbWFpbikucmFuZ2UodGhpcy5nZXRSYW5nZSgpKTtcbiAgfVxuICBnZXRUaWNrVmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLnNjYWxlLnRpY2tzKCk7XG4gIH1cbiAgcmVjYWxjdWxhdGVTY2FsZSgpIHtcbiAgICBjb25zdCBkb21haW4gPSBbLi4udGhpcy5kb21haW5dO1xuICAgIGlmICh0aGlzLmF4aXNQb3NpdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgIGRvbWFpbi5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHRoaXMuc2NhbGUgPSBzY2FsZUxpbmVhcigpLmRvbWFpbihkb21haW4pLnJhbmdlKHRoaXMuZ2V0UmFuZ2UoKSk7XG4gIH1cbiAgZ2V0U2NhbGVWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnNjYWxlKHZhbHVlKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0QXhpcyhkYXRhLCBheGlzQ29uZmlnLCBheGlzVGhlbWVDb25maWcsIHRtcFNWR0dyb3VwMikge1xuICBjb25zdCB0ZXh0RGltZW5zaW9uQ2FsY3VsYXRvciA9IG5ldyBUZXh0RGltZW5zaW9uQ2FsY3VsYXRvcldpdGhGb250KHRtcFNWR0dyb3VwMik7XG4gIGlmIChpc0JhbmRBeGlzRGF0YShkYXRhKSkge1xuICAgIHJldHVybiBuZXcgQmFuZEF4aXMoXG4gICAgICBheGlzQ29uZmlnLFxuICAgICAgYXhpc1RoZW1lQ29uZmlnLFxuICAgICAgZGF0YS5jYXRlZ29yaWVzLFxuICAgICAgZGF0YS50aXRsZSxcbiAgICAgIHRleHREaW1lbnNpb25DYWxjdWxhdG9yXG4gICAgKTtcbiAgfVxuICByZXR1cm4gbmV3IExpbmVhckF4aXMoXG4gICAgYXhpc0NvbmZpZyxcbiAgICBheGlzVGhlbWVDb25maWcsXG4gICAgW2RhdGEubWluLCBkYXRhLm1heF0sXG4gICAgZGF0YS50aXRsZSxcbiAgICB0ZXh0RGltZW5zaW9uQ2FsY3VsYXRvclxuICApO1xufVxuY2xhc3MgQ2hhcnRUaXRsZSB7XG4gIGNvbnN0cnVjdG9yKHRleHREaW1lbnNpb25DYWxjdWxhdG9yLCBjaGFydENvbmZpZywgY2hhcnREYXRhLCBjaGFydFRoZW1lQ29uZmlnKSB7XG4gICAgdGhpcy50ZXh0RGltZW5zaW9uQ2FsY3VsYXRvciA9IHRleHREaW1lbnNpb25DYWxjdWxhdG9yO1xuICAgIHRoaXMuY2hhcnRDb25maWcgPSBjaGFydENvbmZpZztcbiAgICB0aGlzLmNoYXJ0RGF0YSA9IGNoYXJ0RGF0YTtcbiAgICB0aGlzLmNoYXJ0VGhlbWVDb25maWcgPSBjaGFydFRoZW1lQ29uZmlnO1xuICAgIHRoaXMuYm91bmRpbmdSZWN0ID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMFxuICAgIH07XG4gICAgdGhpcy5zaG93Q2hhcnRUaXRsZSA9IGZhbHNlO1xuICB9XG4gIHNldEJvdW5kaW5nQm94WFkocG9pbnQpIHtcbiAgICB0aGlzLmJvdW5kaW5nUmVjdC54ID0gcG9pbnQueDtcbiAgICB0aGlzLmJvdW5kaW5nUmVjdC55ID0gcG9pbnQueTtcbiAgfVxuICBjYWxjdWxhdGVTcGFjZShhdmFpbGFibGVTcGFjZSkge1xuICAgIGNvbnN0IHRpdGxlRGltZW5zaW9uID0gdGhpcy50ZXh0RGltZW5zaW9uQ2FsY3VsYXRvci5nZXRNYXhEaW1lbnNpb24oXG4gICAgICBbdGhpcy5jaGFydERhdGEudGl0bGVdLFxuICAgICAgdGhpcy5jaGFydENvbmZpZy50aXRsZUZvbnRTaXplXG4gICAgKTtcbiAgICBjb25zdCB3aWR0aFJlcXVpcmVkID0gTWF0aC5tYXgodGl0bGVEaW1lbnNpb24ud2lkdGgsIGF2YWlsYWJsZVNwYWNlLndpZHRoKTtcbiAgICBjb25zdCBoZWlnaHRSZXF1aXJlZCA9IHRpdGxlRGltZW5zaW9uLmhlaWdodCArIDIgKiB0aGlzLmNoYXJ0Q29uZmlnLnRpdGxlUGFkZGluZztcbiAgICBpZiAodGl0bGVEaW1lbnNpb24ud2lkdGggPD0gd2lkdGhSZXF1aXJlZCAmJiB0aXRsZURpbWVuc2lvbi5oZWlnaHQgPD0gaGVpZ2h0UmVxdWlyZWQgJiYgdGhpcy5jaGFydENvbmZpZy5zaG93VGl0bGUgJiYgdGhpcy5jaGFydERhdGEudGl0bGUpIHtcbiAgICAgIHRoaXMuYm91bmRpbmdSZWN0LndpZHRoID0gd2lkdGhSZXF1aXJlZDtcbiAgICAgIHRoaXMuYm91bmRpbmdSZWN0LmhlaWdodCA9IGhlaWdodFJlcXVpcmVkO1xuICAgICAgdGhpcy5zaG93Q2hhcnRUaXRsZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogdGhpcy5ib3VuZGluZ1JlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuYm91bmRpbmdSZWN0LmhlaWdodFxuICAgIH07XG4gIH1cbiAgZ2V0RHJhd2FibGVFbGVtZW50cygpIHtcbiAgICBjb25zdCBkcmF3YWJsZUVsZW0gPSBbXTtcbiAgICBpZiAodGhpcy5zaG93Q2hhcnRUaXRsZSkge1xuICAgICAgZHJhd2FibGVFbGVtLnB1c2goe1xuICAgICAgICBncm91cFRleHRzOiBbXCJjaGFydC10aXRsZVwiXSxcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmb250U2l6ZTogdGhpcy5jaGFydENvbmZpZy50aXRsZUZvbnRTaXplLFxuICAgICAgICAgICAgdGV4dDogdGhpcy5jaGFydERhdGEudGl0bGUsXG4gICAgICAgICAgICB2ZXJ0aWNhbFBvczogXCJtaWRkbGVcIixcbiAgICAgICAgICAgIGhvcml6b250YWxQb3M6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB4OiB0aGlzLmJvdW5kaW5nUmVjdC54ICsgdGhpcy5ib3VuZGluZ1JlY3Qud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5ib3VuZGluZ1JlY3QueSArIHRoaXMuYm91bmRpbmdSZWN0LmhlaWdodCAvIDIsXG4gICAgICAgICAgICBmaWxsOiB0aGlzLmNoYXJ0VGhlbWVDb25maWcudGl0bGVDb2xvcixcbiAgICAgICAgICAgIHJvdGF0aW9uOiAwXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRyYXdhYmxlRWxlbTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0Q2hhcnRUaXRsZUNvbXBvbmVudChjaGFydENvbmZpZywgY2hhcnREYXRhLCBjaGFydFRoZW1lQ29uZmlnLCB0bXBTVkdHcm91cDIpIHtcbiAgY29uc3QgdGV4dERpbWVuc2lvbkNhbGN1bGF0b3IgPSBuZXcgVGV4dERpbWVuc2lvbkNhbGN1bGF0b3JXaXRoRm9udCh0bXBTVkdHcm91cDIpO1xuICByZXR1cm4gbmV3IENoYXJ0VGl0bGUodGV4dERpbWVuc2lvbkNhbGN1bGF0b3IsIGNoYXJ0Q29uZmlnLCBjaGFydERhdGEsIGNoYXJ0VGhlbWVDb25maWcpO1xufVxuY2xhc3MgTGluZVBsb3Qge1xuICBjb25zdHJ1Y3RvcihwbG90RGF0YSwgeEF4aXMsIHlBeGlzLCBvcmllbnRhdGlvbiwgcGxvdEluZGV4Mikge1xuICAgIHRoaXMucGxvdERhdGEgPSBwbG90RGF0YTtcbiAgICB0aGlzLnhBeGlzID0geEF4aXM7XG4gICAgdGhpcy55QXhpcyA9IHlBeGlzO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICB0aGlzLnBsb3RJbmRleCA9IHBsb3RJbmRleDI7XG4gIH1cbiAgZ2V0RHJhd2FibGVFbGVtZW50KCkge1xuICAgIGNvbnN0IGZpbmFsRGF0YSA9IHRoaXMucGxvdERhdGEuZGF0YS5tYXAoKGQpID0+IFtcbiAgICAgIHRoaXMueEF4aXMuZ2V0U2NhbGVWYWx1ZShkWzBdKSxcbiAgICAgIHRoaXMueUF4aXMuZ2V0U2NhbGVWYWx1ZShkWzFdKVxuICAgIF0pO1xuICAgIGxldCBwYXRoO1xuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgcGF0aCA9IGxpbmUoKS55KChkKSA9PiBkWzBdKS54KChkKSA9PiBkWzFdKShmaW5hbERhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoID0gbGluZSgpLngoKGQpID0+IGRbMF0pLnkoKGQpID0+IGRbMV0pKGZpbmFsRGF0YSk7XG4gICAgfVxuICAgIGlmICghcGF0aCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBncm91cFRleHRzOiBbXCJwbG90XCIsIGBsaW5lLXBsb3QtJHt0aGlzLnBsb3RJbmRleH1gXSxcbiAgICAgICAgdHlwZTogXCJwYXRoXCIsXG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgc3Ryb2tlRmlsbDogdGhpcy5wbG90RGF0YS5zdHJva2VGaWxsLFxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IHRoaXMucGxvdERhdGEuc3Ryb2tlV2lkdGhcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdO1xuICB9XG59XG5jbGFzcyBCYXJQbG90IHtcbiAgY29uc3RydWN0b3IoYmFyRGF0YSwgYm91bmRpbmdSZWN0LCB4QXhpcywgeUF4aXMsIG9yaWVudGF0aW9uLCBwbG90SW5kZXgyKSB7XG4gICAgdGhpcy5iYXJEYXRhID0gYmFyRGF0YTtcbiAgICB0aGlzLmJvdW5kaW5nUmVjdCA9IGJvdW5kaW5nUmVjdDtcbiAgICB0aGlzLnhBeGlzID0geEF4aXM7XG4gICAgdGhpcy55QXhpcyA9IHlBeGlzO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICB0aGlzLnBsb3RJbmRleCA9IHBsb3RJbmRleDI7XG4gIH1cbiAgZ2V0RHJhd2FibGVFbGVtZW50KCkge1xuICAgIGNvbnN0IGZpbmFsRGF0YSA9IHRoaXMuYmFyRGF0YS5kYXRhLm1hcCgoZCkgPT4gW1xuICAgICAgdGhpcy54QXhpcy5nZXRTY2FsZVZhbHVlKGRbMF0pLFxuICAgICAgdGhpcy55QXhpcy5nZXRTY2FsZVZhbHVlKGRbMV0pXG4gICAgXSk7XG4gICAgY29uc3QgYmFyUGFkZGluZ1BlcmNlbnQgPSAwLjA1O1xuICAgIGNvbnN0IGJhcldpZHRoID0gTWF0aC5taW4odGhpcy54QXhpcy5nZXRBeGlzT3V0ZXJQYWRkaW5nKCkgKiAyLCB0aGlzLnhBeGlzLmdldFRpY2tEaXN0YW5jZSgpKSAqICgxIC0gYmFyUGFkZGluZ1BlcmNlbnQpO1xuICAgIGNvbnN0IGJhcldpZHRoSGFsZiA9IGJhcldpZHRoIC8gMjtcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICBncm91cFRleHRzOiBbXCJwbG90XCIsIGBiYXItcGxvdC0ke3RoaXMucGxvdEluZGV4fWBdLFxuICAgICAgICAgIHR5cGU6IFwicmVjdFwiLFxuICAgICAgICAgIGRhdGE6IGZpbmFsRGF0YS5tYXAoKGRhdGEpID0+ICh7XG4gICAgICAgICAgICB4OiB0aGlzLmJvdW5kaW5nUmVjdC54LFxuICAgICAgICAgICAgeTogZGF0YVswXSAtIGJhcldpZHRoSGFsZixcbiAgICAgICAgICAgIGhlaWdodDogYmFyV2lkdGgsXG4gICAgICAgICAgICB3aWR0aDogZGF0YVsxXSAtIHRoaXMuYm91bmRpbmdSZWN0LngsXG4gICAgICAgICAgICBmaWxsOiB0aGlzLmJhckRhdGEuZmlsbCxcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgICAgICAgICAgc3Ryb2tlRmlsbDogdGhpcy5iYXJEYXRhLmZpbGxcbiAgICAgICAgICB9KSlcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgZ3JvdXBUZXh0czogW1wicGxvdFwiLCBgYmFyLXBsb3QtJHt0aGlzLnBsb3RJbmRleH1gXSxcbiAgICAgICAgdHlwZTogXCJyZWN0XCIsXG4gICAgICAgIGRhdGE6IGZpbmFsRGF0YS5tYXAoKGRhdGEpID0+ICh7XG4gICAgICAgICAgeDogZGF0YVswXSAtIGJhcldpZHRoSGFsZixcbiAgICAgICAgICB5OiBkYXRhWzFdLFxuICAgICAgICAgIHdpZHRoOiBiYXJXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuYm91bmRpbmdSZWN0LnkgKyB0aGlzLmJvdW5kaW5nUmVjdC5oZWlnaHQgLSBkYXRhWzFdLFxuICAgICAgICAgIGZpbGw6IHRoaXMuYmFyRGF0YS5maWxsLFxuICAgICAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgICAgICAgIHN0cm9rZUZpbGw6IHRoaXMuYmFyRGF0YS5maWxsXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgIF07XG4gIH1cbn1cbmNsYXNzIEJhc2VQbG90IHtcbiAgY29uc3RydWN0b3IoY2hhcnRDb25maWcsIGNoYXJ0RGF0YSwgY2hhcnRUaGVtZUNvbmZpZykge1xuICAgIHRoaXMuY2hhcnRDb25maWcgPSBjaGFydENvbmZpZztcbiAgICB0aGlzLmNoYXJ0RGF0YSA9IGNoYXJ0RGF0YTtcbiAgICB0aGlzLmNoYXJ0VGhlbWVDb25maWcgPSBjaGFydFRoZW1lQ29uZmlnO1xuICAgIHRoaXMuYm91bmRpbmdSZWN0ID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMFxuICAgIH07XG4gIH1cbiAgc2V0QXhlcyh4QXhpcywgeUF4aXMpIHtcbiAgICB0aGlzLnhBeGlzID0geEF4aXM7XG4gICAgdGhpcy55QXhpcyA9IHlBeGlzO1xuICB9XG4gIHNldEJvdW5kaW5nQm94WFkocG9pbnQpIHtcbiAgICB0aGlzLmJvdW5kaW5nUmVjdC54ID0gcG9pbnQueDtcbiAgICB0aGlzLmJvdW5kaW5nUmVjdC55ID0gcG9pbnQueTtcbiAgfVxuICBjYWxjdWxhdGVTcGFjZShhdmFpbGFibGVTcGFjZSkge1xuICAgIHRoaXMuYm91bmRpbmdSZWN0LndpZHRoID0gYXZhaWxhYmxlU3BhY2Uud2lkdGg7XG4gICAgdGhpcy5ib3VuZGluZ1JlY3QuaGVpZ2h0ID0gYXZhaWxhYmxlU3BhY2UuaGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogdGhpcy5ib3VuZGluZ1JlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuYm91bmRpbmdSZWN0LmhlaWdodFxuICAgIH07XG4gIH1cbiAgZ2V0RHJhd2FibGVFbGVtZW50cygpIHtcbiAgICBpZiAoISh0aGlzLnhBeGlzICYmIHRoaXMueUF4aXMpKSB7XG4gICAgICB0aHJvdyBFcnJvcihcIkF4ZXMgbXVzdCBiZSBwYXNzZWQgdG8gcmVuZGVyIFBsb3RzXCIpO1xuICAgIH1cbiAgICBjb25zdCBkcmF3YWJsZUVsZW0gPSBbXTtcbiAgICBmb3IgKGNvbnN0IFtpLCBwbG90XSBvZiB0aGlzLmNoYXJ0RGF0YS5wbG90cy5lbnRyaWVzKCkpIHtcbiAgICAgIHN3aXRjaCAocGxvdC50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJsaW5lXCI6XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGluZVBsb3QgPSBuZXcgTGluZVBsb3QoXG4gICAgICAgICAgICAgIHBsb3QsXG4gICAgICAgICAgICAgIHRoaXMueEF4aXMsXG4gICAgICAgICAgICAgIHRoaXMueUF4aXMsXG4gICAgICAgICAgICAgIHRoaXMuY2hhcnRDb25maWcuY2hhcnRPcmllbnRhdGlvbixcbiAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRyYXdhYmxlRWxlbS5wdXNoKC4uLmxpbmVQbG90LmdldERyYXdhYmxlRWxlbWVudCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJiYXJcIjpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBiYXJQbG90ID0gbmV3IEJhclBsb3QoXG4gICAgICAgICAgICAgIHBsb3QsXG4gICAgICAgICAgICAgIHRoaXMuYm91bmRpbmdSZWN0LFxuICAgICAgICAgICAgICB0aGlzLnhBeGlzLFxuICAgICAgICAgICAgICB0aGlzLnlBeGlzLFxuICAgICAgICAgICAgICB0aGlzLmNoYXJ0Q29uZmlnLmNoYXJ0T3JpZW50YXRpb24sXG4gICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkcmF3YWJsZUVsZW0ucHVzaCguLi5iYXJQbG90LmdldERyYXdhYmxlRWxlbWVudCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkcmF3YWJsZUVsZW07XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFBsb3RDb21wb25lbnQoY2hhcnRDb25maWcsIGNoYXJ0RGF0YSwgY2hhcnRUaGVtZUNvbmZpZykge1xuICByZXR1cm4gbmV3IEJhc2VQbG90KGNoYXJ0Q29uZmlnLCBjaGFydERhdGEsIGNoYXJ0VGhlbWVDb25maWcpO1xufVxuY2xhc3MgT3JjaGVzdHJhdG9yIHtcbiAgY29uc3RydWN0b3IoY2hhcnRDb25maWcsIGNoYXJ0RGF0YSwgY2hhcnRUaGVtZUNvbmZpZywgdG1wU1ZHR3JvdXAyKSB7XG4gICAgdGhpcy5jaGFydENvbmZpZyA9IGNoYXJ0Q29uZmlnO1xuICAgIHRoaXMuY2hhcnREYXRhID0gY2hhcnREYXRhO1xuICAgIHRoaXMuY29tcG9uZW50U3RvcmUgPSB7XG4gICAgICB0aXRsZTogZ2V0Q2hhcnRUaXRsZUNvbXBvbmVudChjaGFydENvbmZpZywgY2hhcnREYXRhLCBjaGFydFRoZW1lQ29uZmlnLCB0bXBTVkdHcm91cDIpLFxuICAgICAgcGxvdDogZ2V0UGxvdENvbXBvbmVudChjaGFydENvbmZpZywgY2hhcnREYXRhLCBjaGFydFRoZW1lQ29uZmlnKSxcbiAgICAgIHhBeGlzOiBnZXRBeGlzKFxuICAgICAgICBjaGFydERhdGEueEF4aXMsXG4gICAgICAgIGNoYXJ0Q29uZmlnLnhBeGlzLFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGVDb2xvcjogY2hhcnRUaGVtZUNvbmZpZy54QXhpc1RpdGxlQ29sb3IsXG4gICAgICAgICAgbGFiZWxDb2xvcjogY2hhcnRUaGVtZUNvbmZpZy54QXhpc0xhYmVsQ29sb3IsXG4gICAgICAgICAgdGlja0NvbG9yOiBjaGFydFRoZW1lQ29uZmlnLnhBeGlzVGlja0NvbG9yLFxuICAgICAgICAgIGF4aXNMaW5lQ29sb3I6IGNoYXJ0VGhlbWVDb25maWcueEF4aXNMaW5lQ29sb3JcbiAgICAgICAgfSxcbiAgICAgICAgdG1wU1ZHR3JvdXAyXG4gICAgICApLFxuICAgICAgeUF4aXM6IGdldEF4aXMoXG4gICAgICAgIGNoYXJ0RGF0YS55QXhpcyxcbiAgICAgICAgY2hhcnRDb25maWcueUF4aXMsXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZUNvbG9yOiBjaGFydFRoZW1lQ29uZmlnLnlBeGlzVGl0bGVDb2xvcixcbiAgICAgICAgICBsYWJlbENvbG9yOiBjaGFydFRoZW1lQ29uZmlnLnlBeGlzTGFiZWxDb2xvcixcbiAgICAgICAgICB0aWNrQ29sb3I6IGNoYXJ0VGhlbWVDb25maWcueUF4aXNUaWNrQ29sb3IsXG4gICAgICAgICAgYXhpc0xpbmVDb2xvcjogY2hhcnRUaGVtZUNvbmZpZy55QXhpc0xpbmVDb2xvclxuICAgICAgICB9LFxuICAgICAgICB0bXBTVkdHcm91cDJcbiAgICAgIClcbiAgICB9O1xuICB9XG4gIGNhbGN1bGF0ZVZlcnRpY2FsU3BhY2UoKSB7XG4gICAgbGV0IGF2YWlsYWJsZVdpZHRoID0gdGhpcy5jaGFydENvbmZpZy53aWR0aDtcbiAgICBsZXQgYXZhaWxhYmxlSGVpZ2h0ID0gdGhpcy5jaGFydENvbmZpZy5oZWlnaHQ7XG4gICAgbGV0IHBsb3RYID0gMDtcbiAgICBsZXQgcGxvdFkgPSAwO1xuICAgIGxldCBjaGFydFdpZHRoID0gTWF0aC5mbG9vcihhdmFpbGFibGVXaWR0aCAqIHRoaXMuY2hhcnRDb25maWcucGxvdFJlc2VydmVkU3BhY2VQZXJjZW50IC8gMTAwKTtcbiAgICBsZXQgY2hhcnRIZWlnaHQgPSBNYXRoLmZsb29yKFxuICAgICAgYXZhaWxhYmxlSGVpZ2h0ICogdGhpcy5jaGFydENvbmZpZy5wbG90UmVzZXJ2ZWRTcGFjZVBlcmNlbnQgLyAxMDBcbiAgICApO1xuICAgIGxldCBzcGFjZVVzZWQgPSB0aGlzLmNvbXBvbmVudFN0b3JlLnBsb3QuY2FsY3VsYXRlU3BhY2Uoe1xuICAgICAgd2lkdGg6IGNoYXJ0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGNoYXJ0SGVpZ2h0XG4gICAgfSk7XG4gICAgYXZhaWxhYmxlV2lkdGggLT0gc3BhY2VVc2VkLndpZHRoO1xuICAgIGF2YWlsYWJsZUhlaWdodCAtPSBzcGFjZVVzZWQuaGVpZ2h0O1xuICAgIHNwYWNlVXNlZCA9IHRoaXMuY29tcG9uZW50U3RvcmUudGl0bGUuY2FsY3VsYXRlU3BhY2Uoe1xuICAgICAgd2lkdGg6IHRoaXMuY2hhcnRDb25maWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IGF2YWlsYWJsZUhlaWdodFxuICAgIH0pO1xuICAgIHBsb3RZID0gc3BhY2VVc2VkLmhlaWdodDtcbiAgICBhdmFpbGFibGVIZWlnaHQgLT0gc3BhY2VVc2VkLmhlaWdodDtcbiAgICB0aGlzLmNvbXBvbmVudFN0b3JlLnhBeGlzLnNldEF4aXNQb3NpdGlvbihcImJvdHRvbVwiKTtcbiAgICBzcGFjZVVzZWQgPSB0aGlzLmNvbXBvbmVudFN0b3JlLnhBeGlzLmNhbGN1bGF0ZVNwYWNlKHtcbiAgICAgIHdpZHRoOiBhdmFpbGFibGVXaWR0aCxcbiAgICAgIGhlaWdodDogYXZhaWxhYmxlSGVpZ2h0XG4gICAgfSk7XG4gICAgYXZhaWxhYmxlSGVpZ2h0IC09IHNwYWNlVXNlZC5oZWlnaHQ7XG4gICAgdGhpcy5jb21wb25lbnRTdG9yZS55QXhpcy5zZXRBeGlzUG9zaXRpb24oXCJsZWZ0XCIpO1xuICAgIHNwYWNlVXNlZCA9IHRoaXMuY29tcG9uZW50U3RvcmUueUF4aXMuY2FsY3VsYXRlU3BhY2Uoe1xuICAgICAgd2lkdGg6IGF2YWlsYWJsZVdpZHRoLFxuICAgICAgaGVpZ2h0OiBhdmFpbGFibGVIZWlnaHRcbiAgICB9KTtcbiAgICBwbG90WCA9IHNwYWNlVXNlZC53aWR0aDtcbiAgICBhdmFpbGFibGVXaWR0aCAtPSBzcGFjZVVzZWQud2lkdGg7XG4gICAgaWYgKGF2YWlsYWJsZVdpZHRoID4gMCkge1xuICAgICAgY2hhcnRXaWR0aCArPSBhdmFpbGFibGVXaWR0aDtcbiAgICAgIGF2YWlsYWJsZVdpZHRoID0gMDtcbiAgICB9XG4gICAgaWYgKGF2YWlsYWJsZUhlaWdodCA+IDApIHtcbiAgICAgIGNoYXJ0SGVpZ2h0ICs9IGF2YWlsYWJsZUhlaWdodDtcbiAgICAgIGF2YWlsYWJsZUhlaWdodCA9IDA7XG4gICAgfVxuICAgIHRoaXMuY29tcG9uZW50U3RvcmUucGxvdC5jYWxjdWxhdGVTcGFjZSh7XG4gICAgICB3aWR0aDogY2hhcnRXaWR0aCxcbiAgICAgIGhlaWdodDogY2hhcnRIZWlnaHRcbiAgICB9KTtcbiAgICB0aGlzLmNvbXBvbmVudFN0b3JlLnBsb3Quc2V0Qm91bmRpbmdCb3hYWSh7IHg6IHBsb3RYLCB5OiBwbG90WSB9KTtcbiAgICB0aGlzLmNvbXBvbmVudFN0b3JlLnhBeGlzLnNldFJhbmdlKFtwbG90WCwgcGxvdFggKyBjaGFydFdpZHRoXSk7XG4gICAgdGhpcy5jb21wb25lbnRTdG9yZS54QXhpcy5zZXRCb3VuZGluZ0JveFhZKHsgeDogcGxvdFgsIHk6IHBsb3RZICsgY2hhcnRIZWlnaHQgfSk7XG4gICAgdGhpcy5jb21wb25lbnRTdG9yZS55QXhpcy5zZXRSYW5nZShbcGxvdFksIHBsb3RZICsgY2hhcnRIZWlnaHRdKTtcbiAgICB0aGlzLmNvbXBvbmVudFN0b3JlLnlBeGlzLnNldEJvdW5kaW5nQm94WFkoeyB4OiAwLCB5OiBwbG90WSB9KTtcbiAgICBpZiAodGhpcy5jaGFydERhdGEucGxvdHMuc29tZSgocCkgPT4gaXNCYXJQbG90KHApKSkge1xuICAgICAgdGhpcy5jb21wb25lbnRTdG9yZS54QXhpcy5yZWNhbGN1bGF0ZU91dGVyUGFkZGluZ1RvRHJhd0JhcigpO1xuICAgIH1cbiAgfVxuICBjYWxjdWxhdGVIb3Jpem9udGFsU3BhY2UoKSB7XG4gICAgbGV0IGF2YWlsYWJsZVdpZHRoID0gdGhpcy5jaGFydENvbmZpZy53aWR0aDtcbiAgICBsZXQgYXZhaWxhYmxlSGVpZ2h0ID0gdGhpcy5jaGFydENvbmZpZy5oZWlnaHQ7XG4gICAgbGV0IHRpdGxlWUVuZCA9IDA7XG4gICAgbGV0IHBsb3RYID0gMDtcbiAgICBsZXQgcGxvdFkgPSAwO1xuICAgIGxldCBjaGFydFdpZHRoID0gTWF0aC5mbG9vcihhdmFpbGFibGVXaWR0aCAqIHRoaXMuY2hhcnRDb25maWcucGxvdFJlc2VydmVkU3BhY2VQZXJjZW50IC8gMTAwKTtcbiAgICBsZXQgY2hhcnRIZWlnaHQgPSBNYXRoLmZsb29yKFxuICAgICAgYXZhaWxhYmxlSGVpZ2h0ICogdGhpcy5jaGFydENvbmZpZy5wbG90UmVzZXJ2ZWRTcGFjZVBlcmNlbnQgLyAxMDBcbiAgICApO1xuICAgIGxldCBzcGFjZVVzZWQgPSB0aGlzLmNvbXBvbmVudFN0b3JlLnBsb3QuY2FsY3VsYXRlU3BhY2Uoe1xuICAgICAgd2lkdGg6IGNoYXJ0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGNoYXJ0SGVpZ2h0XG4gICAgfSk7XG4gICAgYXZhaWxhYmxlV2lkdGggLT0gc3BhY2VVc2VkLndpZHRoO1xuICAgIGF2YWlsYWJsZUhlaWdodCAtPSBzcGFjZVVzZWQuaGVpZ2h0O1xuICAgIHNwYWNlVXNlZCA9IHRoaXMuY29tcG9uZW50U3RvcmUudGl0bGUuY2FsY3VsYXRlU3BhY2Uoe1xuICAgICAgd2lkdGg6IHRoaXMuY2hhcnRDb25maWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IGF2YWlsYWJsZUhlaWdodFxuICAgIH0pO1xuICAgIHRpdGxlWUVuZCA9IHNwYWNlVXNlZC5oZWlnaHQ7XG4gICAgYXZhaWxhYmxlSGVpZ2h0IC09IHNwYWNlVXNlZC5oZWlnaHQ7XG4gICAgdGhpcy5jb21wb25lbnRTdG9yZS54QXhpcy5zZXRBeGlzUG9zaXRpb24oXCJsZWZ0XCIpO1xuICAgIHNwYWNlVXNlZCA9IHRoaXMuY29tcG9uZW50U3RvcmUueEF4aXMuY2FsY3VsYXRlU3BhY2Uoe1xuICAgICAgd2lkdGg6IGF2YWlsYWJsZVdpZHRoLFxuICAgICAgaGVpZ2h0OiBhdmFpbGFibGVIZWlnaHRcbiAgICB9KTtcbiAgICBhdmFpbGFibGVXaWR0aCAtPSBzcGFjZVVzZWQud2lkdGg7XG4gICAgcGxvdFggPSBzcGFjZVVzZWQud2lkdGg7XG4gICAgdGhpcy5jb21wb25lbnRTdG9yZS55QXhpcy5zZXRBeGlzUG9zaXRpb24oXCJ0b3BcIik7XG4gICAgc3BhY2VVc2VkID0gdGhpcy5jb21wb25lbnRTdG9yZS55QXhpcy5jYWxjdWxhdGVTcGFjZSh7XG4gICAgICB3aWR0aDogYXZhaWxhYmxlV2lkdGgsXG4gICAgICBoZWlnaHQ6IGF2YWlsYWJsZUhlaWdodFxuICAgIH0pO1xuICAgIGF2YWlsYWJsZUhlaWdodCAtPSBzcGFjZVVzZWQuaGVpZ2h0O1xuICAgIHBsb3RZID0gdGl0bGVZRW5kICsgc3BhY2VVc2VkLmhlaWdodDtcbiAgICBpZiAoYXZhaWxhYmxlV2lkdGggPiAwKSB7XG4gICAgICBjaGFydFdpZHRoICs9IGF2YWlsYWJsZVdpZHRoO1xuICAgICAgYXZhaWxhYmxlV2lkdGggPSAwO1xuICAgIH1cbiAgICBpZiAoYXZhaWxhYmxlSGVpZ2h0ID4gMCkge1xuICAgICAgY2hhcnRIZWlnaHQgKz0gYXZhaWxhYmxlSGVpZ2h0O1xuICAgICAgYXZhaWxhYmxlSGVpZ2h0ID0gMDtcbiAgICB9XG4gICAgdGhpcy5jb21wb25lbnRTdG9yZS5wbG90LmNhbGN1bGF0ZVNwYWNlKHtcbiAgICAgIHdpZHRoOiBjaGFydFdpZHRoLFxuICAgICAgaGVpZ2h0OiBjaGFydEhlaWdodFxuICAgIH0pO1xuICAgIHRoaXMuY29tcG9uZW50U3RvcmUucGxvdC5zZXRCb3VuZGluZ0JveFhZKHsgeDogcGxvdFgsIHk6IHBsb3RZIH0pO1xuICAgIHRoaXMuY29tcG9uZW50U3RvcmUueUF4aXMuc2V0UmFuZ2UoW3Bsb3RYLCBwbG90WCArIGNoYXJ0V2lkdGhdKTtcbiAgICB0aGlzLmNvbXBvbmVudFN0b3JlLnlBeGlzLnNldEJvdW5kaW5nQm94WFkoeyB4OiBwbG90WCwgeTogdGl0bGVZRW5kIH0pO1xuICAgIHRoaXMuY29tcG9uZW50U3RvcmUueEF4aXMuc2V0UmFuZ2UoW3Bsb3RZLCBwbG90WSArIGNoYXJ0SGVpZ2h0XSk7XG4gICAgdGhpcy5jb21wb25lbnRTdG9yZS54QXhpcy5zZXRCb3VuZGluZ0JveFhZKHsgeDogMCwgeTogcGxvdFkgfSk7XG4gICAgaWYgKHRoaXMuY2hhcnREYXRhLnBsb3RzLnNvbWUoKHApID0+IGlzQmFyUGxvdChwKSkpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50U3RvcmUueEF4aXMucmVjYWxjdWxhdGVPdXRlclBhZGRpbmdUb0RyYXdCYXIoKTtcbiAgICB9XG4gIH1cbiAgY2FsY3VsYXRlU3BhY2UoKSB7XG4gICAgaWYgKHRoaXMuY2hhcnRDb25maWcuY2hhcnRPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlSG9yaXpvbnRhbFNwYWNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlVmVydGljYWxTcGFjZSgpO1xuICAgIH1cbiAgfVxuICBnZXREcmF3YWJsZUVsZW1lbnQoKSB7XG4gICAgdGhpcy5jYWxjdWxhdGVTcGFjZSgpO1xuICAgIGNvbnN0IGRyYXdhYmxlRWxlbSA9IFtdO1xuICAgIHRoaXMuY29tcG9uZW50U3RvcmUucGxvdC5zZXRBeGVzKHRoaXMuY29tcG9uZW50U3RvcmUueEF4aXMsIHRoaXMuY29tcG9uZW50U3RvcmUueUF4aXMpO1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIE9iamVjdC52YWx1ZXModGhpcy5jb21wb25lbnRTdG9yZSkpIHtcbiAgICAgIGRyYXdhYmxlRWxlbS5wdXNoKC4uLmNvbXBvbmVudC5nZXREcmF3YWJsZUVsZW1lbnRzKCkpO1xuICAgIH1cbiAgICByZXR1cm4gZHJhd2FibGVFbGVtO1xuICB9XG59XG5jbGFzcyBYWUNoYXJ0QnVpbGRlciB7XG4gIHN0YXRpYyBidWlsZChjb25maWcsIGNoYXJ0RGF0YSwgY2hhcnRUaGVtZUNvbmZpZywgdG1wU1ZHR3JvdXAyKSB7XG4gICAgY29uc3Qgb3JjaGVzdHJhdG9yID0gbmV3IE9yY2hlc3RyYXRvcihjb25maWcsIGNoYXJ0RGF0YSwgY2hhcnRUaGVtZUNvbmZpZywgdG1wU1ZHR3JvdXAyKTtcbiAgICByZXR1cm4gb3JjaGVzdHJhdG9yLmdldERyYXdhYmxlRWxlbWVudCgpO1xuICB9XG59XG5sZXQgcGxvdEluZGV4ID0gMDtcbmxldCB0bXBTVkdHcm91cDtcbmxldCB4eUNoYXJ0Q29uZmlnID0gZ2V0Q2hhcnREZWZhdWx0Q29uZmlnKCk7XG5sZXQgeHlDaGFydFRoZW1lQ29uZmlnID0gZ2V0Q2hhcnREZWZhdWx0VGhlbWVDb25maWcoKTtcbmxldCB4eUNoYXJ0RGF0YSA9IGdldENoYXJ0RGVmYXVsdERhdGEoKTtcbmxldCBwbG90Q29sb3JQYWxldHRlID0geHlDaGFydFRoZW1lQ29uZmlnLnBsb3RDb2xvclBhbGV0dGUuc3BsaXQoXCIsXCIpLm1hcCgoY29sb3IpID0+IGNvbG9yLnRyaW0oKSk7XG5sZXQgaGFzU2V0WEF4aXMgPSBmYWxzZTtcbmxldCBoYXNTZXRZQXhpcyA9IGZhbHNlO1xuZnVuY3Rpb24gZ2V0Q2hhcnREZWZhdWx0VGhlbWVDb25maWcoKSB7XG4gIGNvbnN0IGRlZmF1bHRUaGVtZVZhcmlhYmxlcyA9IGdldFRoZW1lVmFyaWFibGVzKCk7XG4gIGNvbnN0IGNvbmZpZyA9IGdldENvbmZpZygpO1xuICByZXR1cm4gY2xlYW5BbmRNZXJnZShkZWZhdWx0VGhlbWVWYXJpYWJsZXMueHlDaGFydCwgY29uZmlnLnRoZW1lVmFyaWFibGVzLnh5Q2hhcnQpO1xufVxuZnVuY3Rpb24gZ2V0Q2hhcnREZWZhdWx0Q29uZmlnKCkge1xuICBjb25zdCBjb25maWcgPSBnZXRDb25maWcoKTtcbiAgcmV0dXJuIGNsZWFuQW5kTWVyZ2UoXG4gICAgZGVmYXVsdENvbmZpZy54eUNoYXJ0LFxuICAgIGNvbmZpZy54eUNoYXJ0XG4gICk7XG59XG5mdW5jdGlvbiBnZXRDaGFydERlZmF1bHREYXRhKCkge1xuICByZXR1cm4ge1xuICAgIHlBeGlzOiB7XG4gICAgICB0eXBlOiBcImxpbmVhclwiLFxuICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICBtaW46IEluZmluaXR5LFxuICAgICAgbWF4OiAtSW5maW5pdHlcbiAgICB9LFxuICAgIHhBeGlzOiB7XG4gICAgICB0eXBlOiBcImJhbmRcIixcbiAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgY2F0ZWdvcmllczogW11cbiAgICB9LFxuICAgIHRpdGxlOiBcIlwiLFxuICAgIHBsb3RzOiBbXVxuICB9O1xufVxuZnVuY3Rpb24gdGV4dFNhbml0aXplcih0ZXh0KSB7XG4gIGNvbnN0IGNvbmZpZyA9IGdldENvbmZpZygpO1xuICByZXR1cm4gc2FuaXRpemVUZXh0KHRleHQudHJpbSgpLCBjb25maWcpO1xufVxuZnVuY3Rpb24gc2V0VG1wU1ZHRyhTVkdHKSB7XG4gIHRtcFNWR0dyb3VwID0gU1ZHRztcbn1cbmZ1bmN0aW9uIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICB4eUNoYXJ0Q29uZmlnLmNoYXJ0T3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcbiAgfSBlbHNlIHtcbiAgICB4eUNoYXJ0Q29uZmlnLmNoYXJ0T3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCI7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldFhBeGlzVGl0bGUodGl0bGUpIHtcbiAgeHlDaGFydERhdGEueEF4aXMudGl0bGUgPSB0ZXh0U2FuaXRpemVyKHRpdGxlLnRleHQpO1xufVxuZnVuY3Rpb24gc2V0WEF4aXNSYW5nZURhdGEobWluLCBtYXgpIHtcbiAgeHlDaGFydERhdGEueEF4aXMgPSB7IHR5cGU6IFwibGluZWFyXCIsIHRpdGxlOiB4eUNoYXJ0RGF0YS54QXhpcy50aXRsZSwgbWluLCBtYXggfTtcbiAgaGFzU2V0WEF4aXMgPSB0cnVlO1xufVxuZnVuY3Rpb24gc2V0WEF4aXNCYW5kKGNhdGVnb3JpZXMpIHtcbiAgeHlDaGFydERhdGEueEF4aXMgPSB7XG4gICAgdHlwZTogXCJiYW5kXCIsXG4gICAgdGl0bGU6IHh5Q2hhcnREYXRhLnhBeGlzLnRpdGxlLFxuICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXMubWFwKChjKSA9PiB0ZXh0U2FuaXRpemVyKGMudGV4dCkpXG4gIH07XG4gIGhhc1NldFhBeGlzID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHNldFlBeGlzVGl0bGUodGl0bGUpIHtcbiAgeHlDaGFydERhdGEueUF4aXMudGl0bGUgPSB0ZXh0U2FuaXRpemVyKHRpdGxlLnRleHQpO1xufVxuZnVuY3Rpb24gc2V0WUF4aXNSYW5nZURhdGEobWluLCBtYXgpIHtcbiAgeHlDaGFydERhdGEueUF4aXMgPSB7IHR5cGU6IFwibGluZWFyXCIsIHRpdGxlOiB4eUNoYXJ0RGF0YS55QXhpcy50aXRsZSwgbWluLCBtYXggfTtcbiAgaGFzU2V0WUF4aXMgPSB0cnVlO1xufVxuZnVuY3Rpb24gc2V0WUF4aXNSYW5nZUZyb21QbG90RGF0YShkYXRhKSB7XG4gIGNvbnN0IG1pblZhbHVlID0gTWF0aC5taW4oLi4uZGF0YSk7XG4gIGNvbnN0IG1heFZhbHVlID0gTWF0aC5tYXgoLi4uZGF0YSk7XG4gIGNvbnN0IHByZXZNaW5WYWx1ZSA9IGlzTGluZWFyQXhpc0RhdGEoeHlDaGFydERhdGEueUF4aXMpID8geHlDaGFydERhdGEueUF4aXMubWluIDogSW5maW5pdHk7XG4gIGNvbnN0IHByZXZNYXhWYWx1ZSA9IGlzTGluZWFyQXhpc0RhdGEoeHlDaGFydERhdGEueUF4aXMpID8geHlDaGFydERhdGEueUF4aXMubWF4IDogLUluZmluaXR5O1xuICB4eUNoYXJ0RGF0YS55QXhpcyA9IHtcbiAgICB0eXBlOiBcImxpbmVhclwiLFxuICAgIHRpdGxlOiB4eUNoYXJ0RGF0YS55QXhpcy50aXRsZSxcbiAgICBtaW46IE1hdGgubWluKHByZXZNaW5WYWx1ZSwgbWluVmFsdWUpLFxuICAgIG1heDogTWF0aC5tYXgocHJldk1heFZhbHVlLCBtYXhWYWx1ZSlcbiAgfTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybURhdGFXaXRob3V0Q2F0ZWdvcnkoZGF0YSkge1xuICBsZXQgcmV0RGF0YSA9IFtdO1xuICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gcmV0RGF0YTtcbiAgfVxuICBpZiAoIWhhc1NldFhBeGlzKSB7XG4gICAgY29uc3QgcHJldk1pblZhbHVlID0gaXNMaW5lYXJBeGlzRGF0YSh4eUNoYXJ0RGF0YS54QXhpcykgPyB4eUNoYXJ0RGF0YS54QXhpcy5taW4gOiBJbmZpbml0eTtcbiAgICBjb25zdCBwcmV2TWF4VmFsdWUgPSBpc0xpbmVhckF4aXNEYXRhKHh5Q2hhcnREYXRhLnhBeGlzKSA/IHh5Q2hhcnREYXRhLnhBeGlzLm1heCA6IC1JbmZpbml0eTtcbiAgICBzZXRYQXhpc1JhbmdlRGF0YShNYXRoLm1pbihwcmV2TWluVmFsdWUsIDEpLCBNYXRoLm1heChwcmV2TWF4VmFsdWUsIGRhdGEubGVuZ3RoKSk7XG4gIH1cbiAgaWYgKCFoYXNTZXRZQXhpcykge1xuICAgIHNldFlBeGlzUmFuZ2VGcm9tUGxvdERhdGEoZGF0YSk7XG4gIH1cbiAgaWYgKGlzQmFuZEF4aXNEYXRhKHh5Q2hhcnREYXRhLnhBeGlzKSkge1xuICAgIHJldERhdGEgPSB4eUNoYXJ0RGF0YS54QXhpcy5jYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4gW2MsIGRhdGFbaV1dKTtcbiAgfVxuICBpZiAoaXNMaW5lYXJBeGlzRGF0YSh4eUNoYXJ0RGF0YS54QXhpcykpIHtcbiAgICBjb25zdCBtaW4gPSB4eUNoYXJ0RGF0YS54QXhpcy5taW47XG4gICAgY29uc3QgbWF4ID0geHlDaGFydERhdGEueEF4aXMubWF4O1xuICAgIGNvbnN0IHN0ZXAgPSAobWF4IC0gbWluICsgMSkgLyBkYXRhLmxlbmd0aDtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IG1pbjsgaSA8PSBtYXg7IGkgKz0gc3RlcCkge1xuICAgICAgY2F0ZWdvcmllcy5wdXNoKGAke2l9YCk7XG4gICAgfVxuICAgIHJldERhdGEgPSBjYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4gW2MsIGRhdGFbaV1dKTtcbiAgfVxuICByZXR1cm4gcmV0RGF0YTtcbn1cbmZ1bmN0aW9uIGdldFBsb3RDb2xvckZyb21QYWxldHRlKHBsb3RJbmRleDIpIHtcbiAgcmV0dXJuIHBsb3RDb2xvclBhbGV0dGVbcGxvdEluZGV4MiA9PT0gMCA/IDAgOiBwbG90SW5kZXgyICUgcGxvdENvbG9yUGFsZXR0ZS5sZW5ndGhdO1xufVxuZnVuY3Rpb24gc2V0TGluZURhdGEodGl0bGUsIGRhdGEpIHtcbiAgY29uc3QgcGxvdERhdGEgPSB0cmFuc2Zvcm1EYXRhV2l0aG91dENhdGVnb3J5KGRhdGEpO1xuICB4eUNoYXJ0RGF0YS5wbG90cy5wdXNoKHtcbiAgICB0eXBlOiBcImxpbmVcIixcbiAgICBzdHJva2VGaWxsOiBnZXRQbG90Q29sb3JGcm9tUGFsZXR0ZShwbG90SW5kZXgpLFxuICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgIGRhdGE6IHBsb3REYXRhXG4gIH0pO1xuICBwbG90SW5kZXgrKztcbn1cbmZ1bmN0aW9uIHNldEJhckRhdGEodGl0bGUsIGRhdGEpIHtcbiAgY29uc3QgcGxvdERhdGEgPSB0cmFuc2Zvcm1EYXRhV2l0aG91dENhdGVnb3J5KGRhdGEpO1xuICB4eUNoYXJ0RGF0YS5wbG90cy5wdXNoKHtcbiAgICB0eXBlOiBcImJhclwiLFxuICAgIGZpbGw6IGdldFBsb3RDb2xvckZyb21QYWxldHRlKHBsb3RJbmRleCksXG4gICAgZGF0YTogcGxvdERhdGFcbiAgfSk7XG4gIHBsb3RJbmRleCsrO1xufVxuZnVuY3Rpb24gZ2V0RHJhd2FibGVFbGVtKCkge1xuICBpZiAoeHlDaGFydERhdGEucGxvdHMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJObyBQbG90IHRvIHJlbmRlciwgcGxlYXNlIHByb3ZpZGUgYSBwbG90IHdpdGggc29tZSBkYXRhXCIpO1xuICB9XG4gIHh5Q2hhcnREYXRhLnRpdGxlID0gZ2V0RGlhZ3JhbVRpdGxlKCk7XG4gIHJldHVybiBYWUNoYXJ0QnVpbGRlci5idWlsZCh4eUNoYXJ0Q29uZmlnLCB4eUNoYXJ0RGF0YSwgeHlDaGFydFRoZW1lQ29uZmlnLCB0bXBTVkdHcm91cCk7XG59XG5mdW5jdGlvbiBnZXRDaGFydFRoZW1lQ29uZmlnKCkge1xuICByZXR1cm4geHlDaGFydFRoZW1lQ29uZmlnO1xufVxuZnVuY3Rpb24gZ2V0Q2hhcnRDb25maWcoKSB7XG4gIHJldHVybiB4eUNoYXJ0Q29uZmlnO1xufVxuY29uc3QgY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgY2xlYXIkMSgpO1xuICBwbG90SW5kZXggPSAwO1xuICB4eUNoYXJ0Q29uZmlnID0gZ2V0Q2hhcnREZWZhdWx0Q29uZmlnKCk7XG4gIHh5Q2hhcnREYXRhID0gZ2V0Q2hhcnREZWZhdWx0RGF0YSgpO1xuICB4eUNoYXJ0VGhlbWVDb25maWcgPSBnZXRDaGFydERlZmF1bHRUaGVtZUNvbmZpZygpO1xuICBwbG90Q29sb3JQYWxldHRlID0geHlDaGFydFRoZW1lQ29uZmlnLnBsb3RDb2xvclBhbGV0dGUuc3BsaXQoXCIsXCIpLm1hcCgoY29sb3IpID0+IGNvbG9yLnRyaW0oKSk7XG4gIGhhc1NldFhBeGlzID0gZmFsc2U7XG4gIGhhc1NldFlBeGlzID0gZmFsc2U7XG59O1xuY29uc3QgZGIgPSB7XG4gIGdldERyYXdhYmxlRWxlbSxcbiAgY2xlYXIsXG4gIHNldEFjY1RpdGxlLFxuICBnZXRBY2NUaXRsZSxcbiAgc2V0RGlhZ3JhbVRpdGxlLFxuICBnZXREaWFncmFtVGl0bGUsXG4gIGdldEFjY0Rlc2NyaXB0aW9uLFxuICBzZXRBY2NEZXNjcmlwdGlvbixcbiAgc2V0T3JpZW50YXRpb24sXG4gIHNldFhBeGlzVGl0bGUsXG4gIHNldFhBeGlzUmFuZ2VEYXRhLFxuICBzZXRYQXhpc0JhbmQsXG4gIHNldFlBeGlzVGl0bGUsXG4gIHNldFlBeGlzUmFuZ2VEYXRhLFxuICBzZXRMaW5lRGF0YSxcbiAgc2V0QmFyRGF0YSxcbiAgc2V0VG1wU1ZHRyxcbiAgZ2V0Q2hhcnRUaGVtZUNvbmZpZyxcbiAgZ2V0Q2hhcnRDb25maWdcbn07XG5jb25zdCBkcmF3ID0gKHR4dCwgaWQsIF92ZXJzaW9uLCBkaWFnT2JqKSA9PiB7XG4gIGNvbnN0IGRiMiA9IGRpYWdPYmouZGI7XG4gIGNvbnN0IHRoZW1lQ29uZmlnID0gZGIyLmdldENoYXJ0VGhlbWVDb25maWcoKTtcbiAgY29uc3QgY2hhcnRDb25maWcgPSBkYjIuZ2V0Q2hhcnRDb25maWcoKTtcbiAgZnVuY3Rpb24gZ2V0RG9taW5hbnRCYXNlTGluZShob3Jpem9udGFsUG9zKSB7XG4gICAgcmV0dXJuIGhvcml6b250YWxQb3MgPT09IFwidG9wXCIgPyBcInRleHQtYmVmb3JlLWVkZ2VcIiA6IFwibWlkZGxlXCI7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0VGV4dEFuY2hvcih2ZXJ0aWNhbFBvcykge1xuICAgIHJldHVybiB2ZXJ0aWNhbFBvcyA9PT0gXCJsZWZ0XCIgPyBcInN0YXJ0XCIgOiB2ZXJ0aWNhbFBvcyA9PT0gXCJyaWdodFwiID8gXCJlbmRcIiA6IFwibWlkZGxlXCI7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0VGV4dFRyYW5zZm9ybWF0aW9uKGRhdGEpIHtcbiAgICByZXR1cm4gYHRyYW5zbGF0ZSgke2RhdGEueH0sICR7ZGF0YS55fSkgcm90YXRlKCR7ZGF0YS5yb3RhdGlvbiB8fCAwfSlgO1xuICB9XG4gIGxvZy5kZWJ1ZyhcIlJlbmRlcmluZyB4eWNoYXJ0IGNoYXJ0XFxuXCIgKyB0eHQpO1xuICBjb25zdCBzdmcgPSBzZWxlY3RTdmdFbGVtZW50KGlkKTtcbiAgY29uc3QgZ3JvdXAgPSBzdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJtYWluXCIpO1xuICBjb25zdCBiYWNrZ3JvdW5kID0gZ3JvdXAuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwid2lkdGhcIiwgY2hhcnRDb25maWcud2lkdGgpLmF0dHIoXCJoZWlnaHRcIiwgY2hhcnRDb25maWcuaGVpZ2h0KS5hdHRyKFwiY2xhc3NcIiwgXCJiYWNrZ3JvdW5kXCIpO1xuICBjb25maWd1cmVTdmdTaXplKHN2ZywgY2hhcnRDb25maWcuaGVpZ2h0LCBjaGFydENvbmZpZy53aWR0aCwgdHJ1ZSk7XG4gIHN2Zy5hdHRyKFwidmlld0JveFwiLCBgMCAwICR7Y2hhcnRDb25maWcud2lkdGh9ICR7Y2hhcnRDb25maWcuaGVpZ2h0fWApO1xuICBiYWNrZ3JvdW5kLmF0dHIoXCJmaWxsXCIsIHRoZW1lQ29uZmlnLmJhY2tncm91bmRDb2xvcik7XG4gIGRiMi5zZXRUbXBTVkdHKHN2Zy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1lcm1haWQtdG1wLWdyb3VwXCIpKTtcbiAgY29uc3Qgc2hhcGVzID0gZGIyLmdldERyYXdhYmxlRWxlbSgpO1xuICBjb25zdCBncm91cHMgPSB7fTtcbiAgZnVuY3Rpb24gZ2V0R3JvdXAoZ0xpc3QpIHtcbiAgICBsZXQgZWxlbSA9IGdyb3VwO1xuICAgIGxldCBwcmVmaXggPSBcIlwiO1xuICAgIGZvciAoY29uc3QgW2ldIG9mIGdMaXN0LmVudHJpZXMoKSkge1xuICAgICAgbGV0IHBhcmVudCA9IGdyb3VwO1xuICAgICAgaWYgKGkgPiAwICYmIGdyb3Vwc1twcmVmaXhdKSB7XG4gICAgICAgIHBhcmVudCA9IGdyb3Vwc1twcmVmaXhdO1xuICAgICAgfVxuICAgICAgcHJlZml4ICs9IGdMaXN0W2ldO1xuICAgICAgZWxlbSA9IGdyb3Vwc1twcmVmaXhdO1xuICAgICAgaWYgKCFlbGVtKSB7XG4gICAgICAgIGVsZW0gPSBncm91cHNbcHJlZml4XSA9IHBhcmVudC5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBnTGlzdFtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xuICB9XG4gIGZvciAoY29uc3Qgc2hhcGUgb2Ygc2hhcGVzKSB7XG4gICAgaWYgKHNoYXBlLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3Qgc2hhcGVHcm91cCA9IGdldEdyb3VwKHNoYXBlLmdyb3VwVGV4dHMpO1xuICAgIHN3aXRjaCAoc2hhcGUudHlwZSkge1xuICAgICAgY2FzZSBcInJlY3RcIjpcbiAgICAgICAgc2hhcGVHcm91cC5zZWxlY3RBbGwoXCJyZWN0XCIpLmRhdGEoc2hhcGUuZGF0YSkuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpLmF0dHIoXCJ4XCIsIChkYXRhKSA9PiBkYXRhLngpLmF0dHIoXCJ5XCIsIChkYXRhKSA9PiBkYXRhLnkpLmF0dHIoXCJ3aWR0aFwiLCAoZGF0YSkgPT4gZGF0YS53aWR0aCkuYXR0cihcImhlaWdodFwiLCAoZGF0YSkgPT4gZGF0YS5oZWlnaHQpLmF0dHIoXCJmaWxsXCIsIChkYXRhKSA9PiBkYXRhLmZpbGwpLmF0dHIoXCJzdHJva2VcIiwgKGRhdGEpID0+IGRhdGEuc3Ryb2tlRmlsbCkuYXR0cihcInN0cm9rZS13aWR0aFwiLCAoZGF0YSkgPT4gZGF0YS5zdHJva2VXaWR0aCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInRleHRcIjpcbiAgICAgICAgc2hhcGVHcm91cC5zZWxlY3RBbGwoXCJ0ZXh0XCIpLmRhdGEoc2hhcGUuZGF0YSkuZW50ZXIoKS5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIDApLmF0dHIoXCJ5XCIsIDApLmF0dHIoXCJmaWxsXCIsIChkYXRhKSA9PiBkYXRhLmZpbGwpLmF0dHIoXCJmb250LXNpemVcIiwgKGRhdGEpID0+IGRhdGEuZm9udFNpemUpLmF0dHIoXCJkb21pbmFudC1iYXNlbGluZVwiLCAoZGF0YSkgPT4gZ2V0RG9taW5hbnRCYXNlTGluZShkYXRhLnZlcnRpY2FsUG9zKSkuYXR0cihcInRleHQtYW5jaG9yXCIsIChkYXRhKSA9PiBnZXRUZXh0QW5jaG9yKGRhdGEuaG9yaXpvbnRhbFBvcykpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKGRhdGEpID0+IGdldFRleHRUcmFuc2Zvcm1hdGlvbihkYXRhKSkudGV4dCgoZGF0YSkgPT4gZGF0YS50ZXh0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicGF0aFwiOlxuICAgICAgICBzaGFwZUdyb3VwLnNlbGVjdEFsbChcInBhdGhcIikuZGF0YShzaGFwZS5kYXRhKS5lbnRlcigpLmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgKGRhdGEpID0+IGRhdGEucGF0aCkuYXR0cihcImZpbGxcIiwgKGRhdGEpID0+IGRhdGEuZmlsbCA/IGRhdGEuZmlsbCA6IFwibm9uZVwiKS5hdHRyKFwic3Ryb2tlXCIsIChkYXRhKSA9PiBkYXRhLnN0cm9rZUZpbGwpLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgKGRhdGEpID0+IGRhdGEuc3Ryb2tlV2lkdGgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG5jb25zdCByZW5kZXJlciA9IHtcbiAgZHJhd1xufTtcbmNvbnN0IGRpYWdyYW0gPSB7XG4gIHBhcnNlcjogcGFyc2VyJDEsXG4gIGRiLFxuICByZW5kZXJlclxufTtcbmV4cG9ydCB7XG4gIGRpYWdyYW1cbn07XG4iXSwibmFtZXMiOlsib3JkaW5hbCIsInNlcXVlbmNlIiwiaW5pdFJhbmdlIiwiY29tcHV0ZURpbWVuc2lvbk9mVGV4dCIsInNjYWxlQmFuZCIsImxvZyIsInNjYWxlTGluZWFyIiwibGluZSIsImdldFRoZW1lVmFyaWFibGVzIiwiZ2V0Q29uZmlnIiwiY2xlYW5BbmRNZXJnZSIsImRlZmF1bHRDb25maWciLCJzYW5pdGl6ZVRleHQiLCJnZXREaWFncmFtVGl0bGUiLCJjbGVhciQxIiwic2V0QWNjVGl0bGUiLCJnZXRBY2NUaXRsZSIsInNldERpYWdyYW1UaXRsZSIsImdldEFjY0Rlc2NyaXB0aW9uIiwic2V0QWNjRGVzY3JpcHRpb24iLCJzZWxlY3RTdmdFbGVtZW50IiwiY29uZmlndXJlU3ZnU2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ2pELEVBQUUsS0FBSyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJ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QUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzNwQixFQUFFLElBQUksT0FBTyxHQUFHO0FBQ2hCLElBQUksS0FBSyxFQUFFLFNBQVMsS0FBSyxHQUFHO0FBQzVCLEtBQUs7QUFDTCxJQUFJLEVBQUUsRUFBRSxFQUFFO0FBQ1YsSUFBSSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSwyQkFBMkIsRUFBRSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO0FBQ24xQixJQUFJLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSwyQkFBMkIsRUFBRSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRTtBQUN0aUIsSUFBSSxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM2MsSUFBSSxhQUFhLEVBQUUsU0FBUyxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQ3JGLE1BQU0sSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDN0IsTUFBTSxRQUFRLE9BQU87QUFDckIsUUFBUSxLQUFLLENBQUM7QUFDZCxVQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEMsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxDQUFDO0FBQ2QsVUFBVSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNqRCxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3RCxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3QyxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1RCxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QyxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2pDLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakMsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFLENBQUM7QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2pDLFVBQVUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QyxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25DLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkMsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN2RCxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEMsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRSxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM0MsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUIsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25DLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkMsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN2RCxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25FLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO0FBQ2xELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO0FBQ2xELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO0FBQ3RELFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUIsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM1QyxVQUFVLE1BQU07QUFDaEIsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUNsdUYsSUFBSSxjQUFjLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQ25GLElBQUksVUFBVSxFQUFFLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDL0MsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDNUIsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLE9BQU8sTUFBTTtBQUNiLFFBQVEsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsUUFBUSxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUMxQixRQUFRLE1BQU0sS0FBSyxDQUFDO0FBQ3BCLE9BQU87QUFDUCxLQUFLO0FBQ0wsSUFBSSxLQUFLLEVBQUUsU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFO0FBQ2pDLE1BQU0sSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLEVBQUUsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEdBQUcsRUFBRSxFQUFFLFFBQVEsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDOUosTUFBTSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakQsTUFBTSxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QyxNQUFNLElBQUksV0FBVyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQ25DLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQzdCLFFBQVEsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUM5RCxVQUFVLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxTQUFTO0FBQ1QsT0FBTztBQUNQLE1BQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLE1BQU0sV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ3BDLE1BQU0sV0FBVyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25DLE1BQU0sSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLElBQUksV0FBVyxFQUFFO0FBQy9DLFFBQVEsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDM0IsT0FBTztBQUNQLE1BQU0sSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsTUFBTSxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQzNELE1BQU0sSUFBSSxPQUFPLFdBQVcsQ0FBQyxFQUFFLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtBQUMzRCxRQUFRLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFDcEQsT0FBTyxNQUFNO0FBQ2IsUUFBUSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDO0FBQ2pFLE9BQU87QUFDUCxNQUFNLFNBQVMsR0FBRyxHQUFHO0FBQ3JCLFFBQVEsSUFBSSxLQUFLLENBQUM7QUFDbEIsUUFBUSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFHLENBQUM7QUFDcEQsUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUN2QyxVQUFVLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtBQUN0QyxZQUFZLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDM0IsWUFBWSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2pDLFdBQVc7QUFDWCxVQUFVLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQztBQUNoRCxTQUFTO0FBQ1QsUUFBUSxPQUFPLEtBQUssQ0FBQztBQUNyQixPQUFPO0FBQ1AsTUFBTSxJQUFJLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztBQUMzRSxNQUFNLE9BQU8sSUFBSSxFQUFFO0FBQ25CLFFBQVEsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3hDLFVBQVUsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUMsU0FBUyxNQUFNO0FBQ2YsVUFBVSxJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksT0FBTyxNQUFNLElBQUksV0FBVyxFQUFFO0FBQy9ELFlBQVksTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQzNCLFdBQVc7QUFDWCxVQUFVLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hELFNBQVM7QUFDVCxRQUFRLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUMzRSxVQUFVLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUMxQixVQUFVLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDeEIsVUFBVSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDbEMsWUFBWSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRTtBQUNsRCxjQUFjLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDNUQsYUFBYTtBQUNiLFdBQVc7QUFDWCxVQUFVLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTtBQUNuQyxZQUFZLE1BQU0sR0FBRyxzQkFBc0IsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsR0FBRyxjQUFjLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDNUwsV0FBVyxNQUFNO0FBQ2pCLFlBQVksTUFBTSxHQUFHLHNCQUFzQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxlQUFlLElBQUksTUFBTSxJQUFJLEdBQUcsR0FBRyxjQUFjLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDcEssV0FBVztBQUNYLFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDbEMsWUFBWSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUs7QUFDOUIsWUFBWSxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNO0FBQ3BELFlBQVksSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRO0FBQ2pDLFlBQVksR0FBRyxFQUFFLEtBQUs7QUFDdEIsWUFBWSxRQUFRO0FBQ3BCLFdBQVcsQ0FBQyxDQUFDO0FBQ2IsU0FBUztBQUNULFFBQVEsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzdELFVBQVUsTUFBTSxJQUFJLEtBQUssQ0FBQyxtREFBbUQsR0FBRyxLQUFLLEdBQUcsV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQzlHLFNBQVM7QUFDVCxRQUFRLFFBQVEsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN6QixVQUFVLEtBQUssQ0FBQztBQUNoQixZQUFZLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0IsWUFBWSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2QyxZQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLFlBQVksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxZQUFZLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDMUIsWUFBWTtBQUNaLGNBQWMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDckMsY0FBYyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNyQyxjQUFjLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ3pDLGNBQWMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDcEMsYUFBYTtBQUNiLFlBQVksTUFBTTtBQUNsQixVQUFVLEtBQUssQ0FBQztBQUNoQixZQUFZLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xELFlBQVksS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNsRCxZQUFZLEtBQUssQ0FBQyxFQUFFLEdBQUc7QUFDdkIsY0FBYyxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtBQUN2RSxjQUFjLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQzVELGNBQWMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7QUFDM0UsY0FBYyxXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVztBQUNoRSxhQUFhLENBQUM7QUFDZCxZQUFZLElBQUksTUFBTSxFQUFFO0FBQ3hCLGNBQWMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUc7QUFDL0IsZ0JBQWdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDM0QsZ0JBQWdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDbEQsZUFBZSxDQUFDO0FBQ2hCLGFBQWE7QUFDYixZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7QUFDaEQsY0FBYyxNQUFNO0FBQ3BCLGNBQWMsTUFBTTtBQUNwQixjQUFjLFFBQVE7QUFDdEIsY0FBYyxXQUFXLENBQUMsRUFBRTtBQUM1QixjQUFjLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdkIsY0FBYyxNQUFNO0FBQ3BCLGNBQWMsTUFBTTtBQUNwQixhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDNUIsWUFBWSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFdBQVcsRUFBRTtBQUMxQyxjQUFjLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZCLGFBQWE7QUFDYixZQUFZLElBQUksR0FBRyxFQUFFO0FBQ3JCLGNBQWMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuRCxjQUFjLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNqRCxjQUFjLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNqRCxhQUFhO0FBQ2IsWUFBWSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RCxZQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLFlBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbEMsWUFBWSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvRSxZQUFZLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsWUFBWSxNQUFNO0FBQ2xCLFVBQVUsS0FBSyxDQUFDO0FBQ2hCLFlBQVksT0FBTyxJQUFJLENBQUM7QUFDeEIsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLEtBQUs7QUFDTCxHQUFHLENBQUM7QUFDSixFQUFFLElBQUksS0FBSyxHQUFHLFdBQVc7QUFDekIsSUFBSSxJQUFJLE1BQU0sR0FBRztBQUNqQixNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ1osTUFBTSxVQUFVLEVBQUUsU0FBUyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUNqRCxRQUFRLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7QUFDNUIsVUFBVSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9DLFNBQVMsTUFBTTtBQUNmLFVBQVUsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvQixTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsTUFBTSxRQUFRLEVBQUUsU0FBUyxLQUFLLEVBQUUsRUFBRSxFQUFFO0FBQ3BDLFFBQVEsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDdEMsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUM1QixRQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUN6RCxRQUFRLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDeEMsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDckQsUUFBUSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDMUMsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHO0FBQ3RCLFVBQVUsVUFBVSxFQUFFLENBQUM7QUFDdkIsVUFBVSxZQUFZLEVBQUUsQ0FBQztBQUN6QixVQUFVLFNBQVMsRUFBRSxDQUFDO0FBQ3RCLFVBQVUsV0FBVyxFQUFFLENBQUM7QUFDeEIsU0FBUyxDQUFDO0FBQ1YsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQ2pDLFVBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckMsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDeEIsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixPQUFPO0FBQ1A7QUFDQSxNQUFNLEtBQUssRUFBRSxXQUFXO0FBQ3hCLFFBQVEsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQyxRQUFRLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0FBQzFCLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7QUFDekIsUUFBUSxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUMzQixRQUFRLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNoRCxRQUFRLElBQUksS0FBSyxFQUFFO0FBQ25CLFVBQVUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzFCLFVBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNsQyxTQUFTLE1BQU07QUFDZixVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDcEMsU0FBUztBQUNULFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNqQyxVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDakMsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQyxRQUFRLE9BQU8sRUFBRSxDQUFDO0FBQ2xCLE9BQU87QUFDUDtBQUNBLE1BQU0sS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFO0FBQzFCLFFBQVEsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztBQUM1QixRQUFRLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDOUMsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3ZDLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDdEUsUUFBUSxJQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztBQUMzQixRQUFRLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pELFFBQVEsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakUsUUFBUSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2RSxRQUFRLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDOUIsVUFBVSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzVDLFNBQVM7QUFDVCxRQUFRLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2xDLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRztBQUN0QixVQUFVLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVU7QUFDNUMsVUFBVSxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO0FBQ3RDLFVBQVUsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWTtBQUNoRCxVQUFVLFdBQVcsRUFBRSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHO0FBQ3JNLFNBQVMsQ0FBQztBQUNWLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNqQyxVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQy9ELFNBQVM7QUFDVCxRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDekMsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixPQUFPO0FBQ1A7QUFDQSxNQUFNLElBQUksRUFBRSxXQUFXO0FBQ3ZCLFFBQVEsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDMUIsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixPQUFPO0FBQ1A7QUFDQSxNQUFNLE1BQU0sRUFBRSxXQUFXO0FBQ3pCLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRTtBQUMxQyxVQUFVLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ2pDLFNBQVMsTUFBTTtBQUNmLFVBQVUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsa0lBQWtJLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO0FBQzVPLFlBQVksSUFBSSxFQUFFLEVBQUU7QUFDcEIsWUFBWSxLQUFLLEVBQUUsSUFBSTtBQUN2QixZQUFZLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtBQUMvQixXQUFXLENBQUMsQ0FBQztBQUNiLFNBQVM7QUFDVCxRQUFRLE9BQU8sSUFBSSxDQUFDO0FBQ3BCLE9BQU87QUFDUDtBQUNBLE1BQU0sSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFO0FBQ3hCLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLE9BQU87QUFDUDtBQUNBLE1BQU0sU0FBUyxFQUFFLFdBQVc7QUFDNUIsUUFBUSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuRixRQUFRLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxLQUFLLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3JGLE9BQU87QUFDUDtBQUNBLE1BQU0sYUFBYSxFQUFFLFdBQVc7QUFDaEMsUUFBUSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQzlCLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtBQUM5QixVQUFVLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMxRCxTQUFTO0FBQ1QsUUFBUSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsT0FBTztBQUNQO0FBQ0EsTUFBTSxZQUFZLEVBQUUsV0FBVztBQUMvQixRQUFRLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNuQyxRQUFRLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BELFFBQVEsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzNELE9BQU87QUFDUDtBQUNBLE1BQU0sVUFBVSxFQUFFLFNBQVMsS0FBSyxFQUFFLFlBQVksRUFBRTtBQUNoRCxRQUFRLElBQUksS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUM7QUFDakMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFO0FBQzFDLFVBQVUsTUFBTSxHQUFHO0FBQ25CLFlBQVksUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQ25DLFlBQVksTUFBTSxFQUFFO0FBQ3BCLGNBQWMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtBQUNoRCxjQUFjLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztBQUN2QyxjQUFjLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVk7QUFDcEQsY0FBYyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXO0FBQ2xELGFBQWE7QUFDYixZQUFZLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtBQUMvQixZQUFZLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztBQUM3QixZQUFZLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztBQUNqQyxZQUFZLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztBQUNqQyxZQUFZLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtBQUMvQixZQUFZLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtBQUMvQixZQUFZLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztBQUM3QixZQUFZLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtBQUMvQixZQUFZLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtBQUN2QixZQUFZLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDeEQsWUFBWSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7QUFDM0IsV0FBVyxDQUFDO0FBQ1osVUFBVSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQ25DLFlBQVksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdELFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2xELFFBQVEsSUFBSSxLQUFLLEVBQUU7QUFDbkIsVUFBVSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDeEMsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRztBQUN0QixVQUFVLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7QUFDM0MsVUFBVSxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO0FBQ3RDLFVBQVUsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztBQUMvQyxVQUFVLFdBQVcsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07QUFDN0osU0FBUyxDQUFDO0FBQ1YsUUFBUSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQyxRQUFRLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9CLFFBQVEsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDN0IsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ3pDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNqQyxVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4RSxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUMzQixRQUFRLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQ2hDLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekQsUUFBUSxJQUFJLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQyxRQUFRLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoSSxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3RDLFVBQVUsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7QUFDNUIsU0FBUztBQUNULFFBQVEsSUFBSSxLQUFLLEVBQUU7QUFDbkIsVUFBVSxPQUFPLEtBQUssQ0FBQztBQUN2QixTQUFTLE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ3BDLFVBQVUsS0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUU7QUFDaEMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLFdBQVc7QUFDWCxVQUFVLE9BQU8sS0FBSyxDQUFDO0FBQ3ZCLFNBQVM7QUFDVCxRQUFRLE9BQU8sS0FBSyxDQUFDO0FBQ3JCLE9BQU87QUFDUDtBQUNBLE1BQU0sSUFBSSxFQUFFLFdBQVc7QUFDdkIsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDdkIsVUFBVSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDMUIsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDMUIsVUFBVSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUMzQixTQUFTO0FBQ1QsUUFBUSxJQUFJLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQztBQUMzQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3pCLFVBQVUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDM0IsVUFBVSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUMxQixTQUFTO0FBQ1QsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDekMsUUFBUSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMvQyxVQUFVLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUQsVUFBVSxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUM5RSxZQUFZLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDOUIsWUFBWSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLFlBQVksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRTtBQUM5QyxjQUFjLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzRCxjQUFjLElBQUksS0FBSyxLQUFLLEtBQUssRUFBRTtBQUNuQyxnQkFBZ0IsT0FBTyxLQUFLLENBQUM7QUFDN0IsZUFBZSxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUMxQyxnQkFBZ0IsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUM5QixnQkFBZ0IsU0FBUztBQUN6QixlQUFlLE1BQU07QUFDckIsZ0JBQWdCLE9BQU8sS0FBSyxDQUFDO0FBQzdCLGVBQWU7QUFDZixhQUFhLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQzNDLGNBQWMsTUFBTTtBQUNwQixhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVCxRQUFRLElBQUksS0FBSyxFQUFFO0FBQ25CLFVBQVUsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELFVBQVUsSUFBSSxLQUFLLEtBQUssS0FBSyxFQUFFO0FBQy9CLFlBQVksT0FBTyxLQUFLLENBQUM7QUFDekIsV0FBVztBQUNYLFVBQVUsT0FBTyxLQUFLLENBQUM7QUFDdkIsU0FBUztBQUNULFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtBQUNoQyxVQUFVLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUMxQixTQUFTLE1BQU07QUFDZixVQUFVLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLHdCQUF3QixHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtBQUNsSSxZQUFZLElBQUksRUFBRSxFQUFFO0FBQ3BCLFlBQVksS0FBSyxFQUFFLElBQUk7QUFDdkIsWUFBWSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7QUFDL0IsV0FBVyxDQUFDLENBQUM7QUFDYixTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsTUFBTSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDMUIsUUFBUSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDNUIsUUFBUSxJQUFJLENBQUMsRUFBRTtBQUNmLFVBQVUsT0FBTyxDQUFDLENBQUM7QUFDbkIsU0FBUyxNQUFNO0FBQ2YsVUFBVSxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUM1QixTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsTUFBTSxLQUFLLEVBQUUsU0FBUyxLQUFLLENBQUMsU0FBUyxFQUFFO0FBQ3ZDLFFBQVEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsT0FBTztBQUNQO0FBQ0EsTUFBTSxRQUFRLEVBQUUsU0FBUyxRQUFRLEdBQUc7QUFDcEMsUUFBUSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDL0MsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDbkIsVUFBVSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDM0MsU0FBUyxNQUFNO0FBQ2YsVUFBVSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEMsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE1BQU0sYUFBYSxFQUFFLFNBQVMsYUFBYSxHQUFHO0FBQzlDLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQy9GLFVBQVUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDNUYsU0FBUyxNQUFNO0FBQ2YsVUFBVSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ2xELFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxNQUFNLFFBQVEsRUFBRSxTQUFTLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDckMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzlELFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3BCLFVBQVUsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLFNBQVMsTUFBTTtBQUNmLFVBQVUsT0FBTyxTQUFTLENBQUM7QUFDM0IsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE1BQU0sU0FBUyxFQUFFLFNBQVMsU0FBUyxDQUFDLFNBQVMsRUFBRTtBQUMvQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUIsT0FBTztBQUNQO0FBQ0EsTUFBTSxjQUFjLEVBQUUsU0FBUyxjQUFjLEdBQUc7QUFDaEQsUUFBUSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO0FBQzFDLE9BQU87QUFDUCxNQUFNLE9BQU8sRUFBRSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRTtBQUMzQyxNQUFNLGFBQWEsRUFBRSxTQUFTLFNBQVMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLHlCQUF5QixFQUFFLFFBQVEsRUFBRTtBQUN0RixRQUFRLFFBQVEseUJBQXlCO0FBQ3pDLFVBQVUsS0FBSyxDQUFDO0FBQ2hCLFlBQVksTUFBTTtBQUNsQixVQUFVLEtBQUssQ0FBQztBQUNoQixZQUFZLE1BQU07QUFDbEIsVUFBVSxLQUFLLENBQUM7QUFDaEIsWUFBWSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDNUIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssQ0FBQztBQUNoQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxDQUFDO0FBQ2hCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLENBQUM7QUFDaEIsWUFBWSxNQUFNO0FBQ2xCLFVBQVUsS0FBSyxDQUFDO0FBQ2hCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLENBQUM7QUFDaEIsWUFBWSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3hDLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLENBQUM7QUFDaEIsWUFBWSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDNUIsWUFBWSxPQUFPLGlCQUFpQixDQUFDO0FBQ3JDLFVBQVUsS0FBSyxDQUFDO0FBQ2hCLFlBQVksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN4QyxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksT0FBTyxpQkFBaUIsQ0FBQztBQUNyQyxVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNsRCxZQUFZLE1BQU07QUFDbEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDNUIsWUFBWSxNQUFNO0FBQ2xCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTywyQkFBMkIsQ0FBQztBQUMvQyxVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxDQUFDLENBQUM7QUFDckIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3hDLFlBQVksT0FBTyxRQUFRLENBQUM7QUFDNUIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3hDLFlBQVksT0FBTyxRQUFRLENBQUM7QUFDNUIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDN0MsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQyxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQyxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN6QyxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDNUIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLE1BQU07QUFDbEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JDLFlBQVksTUFBTTtBQUNsQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLE1BQU07QUFDbEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEtBQUssQ0FBQztBQUN6QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sT0FBTyxDQUFDO0FBQzNCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxNQUFNO0FBQ2xCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixTQUFTO0FBQ1QsT0FBTztBQUNQLE1BQU0sS0FBSyxFQUFFLENBQUMsc0JBQXNCLEVBQUUscUJBQXFCLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsc0JBQXNCLEVBQUUsK0JBQStCLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxvQ0FBb0MsRUFBRSxVQUFVLEVBQUUsZ0xBQWdMLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO0FBQzU2QixNQUFNLFVBQVUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxF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QUFLLENBQUMsRUFBRTtBQUNqQyxNQUFNLFNBQVM7QUFDZixLQUFLO0FBQ0wsSUFBSSxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2xELElBQUksUUFBUSxLQUFLLENBQUMsSUFBSTtBQUN0QixNQUFNLEtBQUssTUFBTTtBQUNqQixRQUFRLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDNVUsUUFBUSxNQUFNO0FBQ2QsTUFBTSxLQUFLLE1BQU07QUFDakIsUUFBUSxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLEtBQUssbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksS0FBSyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDblosUUFBUSxNQUFNO0FBQ2QsTUFBTSxLQUFLLE1BQU07QUFDakIsUUFBUSxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzlQLFFBQVEsTUFBTTtBQUNkLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxRQUFRLEdBQUc7QUFDakIsRUFBRSxJQUFJO0FBQ04sQ0FBQyxDQUFDO0FBQ0csTUFBQyxPQUFPLEdBQUc7QUFDaEIsRUFBRSxNQUFNLEVBQUUsUUFBUTtBQUNsQixFQUFFLEVBQUU7QUFDSixFQUFFLFFBQVE7QUFDVjs7OzsifQ==
