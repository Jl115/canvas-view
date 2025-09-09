'use strict';

var index = require('./index-d3f4d11e.js');

var parser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [1, 2], $V1 = [1, 3], $V2 = [1, 4], $V3 = [2, 4], $V4 = [1, 9], $V5 = [1, 11], $V6 = [1, 15], $V7 = [1, 16], $V8 = [1, 17], $V9 = [1, 18], $Va = [1, 30], $Vb = [1, 19], $Vc = [1, 20], $Vd = [1, 21], $Ve = [1, 22], $Vf = [1, 23], $Vg = [1, 25], $Vh = [1, 26], $Vi = [1, 27], $Vj = [1, 28], $Vk = [1, 29], $Vl = [1, 32], $Vm = [1, 33], $Vn = [1, 34], $Vo = [1, 35], $Vp = [1, 31], $Vq = [1, 4, 5, 15, 16, 18, 20, 21, 23, 24, 25, 26, 27, 28, 32, 34, 36, 37, 41, 44, 45, 46, 47, 50], $Vr = [1, 4, 5, 13, 14, 15, 16, 18, 20, 21, 23, 24, 25, 26, 27, 28, 32, 34, 36, 37, 41, 44, 45, 46, 47, 50], $Vs = [4, 5, 15, 16, 18, 20, 21, 23, 24, 25, 26, 27, 28, 32, 34, 36, 37, 41, 44, 45, 46, 47, 50];
  var parser2 = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "start": 3, "SPACE": 4, "NL": 5, "SD": 6, "document": 7, "line": 8, "statement": 9, "classDefStatement": 10, "cssClassStatement": 11, "idStatement": 12, "DESCR": 13, "-->": 14, "HIDE_EMPTY": 15, "scale": 16, "WIDTH": 17, "COMPOSIT_STATE": 18, "STRUCT_START": 19, "STRUCT_STOP": 20, "STATE_DESCR": 21, "AS": 22, "ID": 23, "FORK": 24, "JOIN": 25, "CHOICE": 26, "CONCURRENT": 27, "note": 28, "notePosition": 29, "NOTE_TEXT": 30, "direction": 31, "acc_title": 32, "acc_title_value": 33, "acc_descr": 34, "acc_descr_value": 35, "acc_descr_multiline_value": 36, "classDef": 37, "CLASSDEF_ID": 38, "CLASSDEF_STYLEOPTS": 39, "DEFAULT": 40, "class": 41, "CLASSENTITY_IDS": 42, "STYLECLASS": 43, "direction_tb": 44, "direction_bt": 45, "direction_rl": 46, "direction_lr": 47, "eol": 48, ";": 49, "EDGE_STATE": 50, "STYLE_SEPARATOR": 51, "left_of": 52, "right_of": 53, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 4: "SPACE", 5: "NL", 6: "SD", 13: "DESCR", 14: "-->", 15: "HIDE_EMPTY", 16: "scale", 17: "WIDTH", 18: "COMPOSIT_STATE", 19: "STRUCT_START", 20: "STRUCT_STOP", 21: "STATE_DESCR", 22: "AS", 23: "ID", 24: "FORK", 25: "JOIN", 26: "CHOICE", 27: "CONCURRENT", 28: "note", 30: "NOTE_TEXT", 32: "acc_title", 33: "acc_title_value", 34: "acc_descr", 35: "acc_descr_value", 36: "acc_descr_multiline_value", 37: "classDef", 38: "CLASSDEF_ID", 39: "CLASSDEF_STYLEOPTS", 40: "DEFAULT", 41: "class", 42: "CLASSENTITY_IDS", 43: "STYLECLASS", 44: "direction_tb", 45: "direction_bt", 46: "direction_rl", 47: "direction_lr", 49: ";", 50: "EDGE_STATE", 51: "STYLE_SEPARATOR", 52: "left_of", 53: "right_of" },
    productions_: [0, [3, 2], [3, 2], [3, 2], [7, 0], [7, 2], [8, 2], [8, 1], [8, 1], [9, 1], [9, 1], [9, 1], [9, 2], [9, 3], [9, 4], [9, 1], [9, 2], [9, 1], [9, 4], [9, 3], [9, 6], [9, 1], [9, 1], [9, 1], [9, 1], [9, 4], [9, 4], [9, 1], [9, 2], [9, 2], [9, 1], [10, 3], [10, 3], [11, 3], [31, 1], [31, 1], [31, 1], [31, 1], [48, 1], [48, 1], [12, 1], [12, 1], [12, 3], [12, 3], [29, 1], [29, 1]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 3:
          yy.setRootDoc($$[$0]);
          return $$[$0];
        case 4:
          this.$ = [];
          break;
        case 5:
          if ($$[$0] != "nl") {
            $$[$0 - 1].push($$[$0]);
            this.$ = $$[$0 - 1];
          }
          break;
        case 6:
        case 7:
          this.$ = $$[$0];
          break;
        case 8:
          this.$ = "nl";
          break;
        case 11:
          this.$ = $$[$0];
          break;
        case 12:
          const stateStmt = $$[$0 - 1];
          stateStmt.description = yy.trimColon($$[$0]);
          this.$ = stateStmt;
          break;
        case 13:
          this.$ = { stmt: "relation", state1: $$[$0 - 2], state2: $$[$0] };
          break;
        case 14:
          const relDescription = yy.trimColon($$[$0]);
          this.$ = { stmt: "relation", state1: $$[$0 - 3], state2: $$[$0 - 1], description: relDescription };
          break;
        case 18:
          this.$ = { stmt: "state", id: $$[$0 - 3], type: "default", description: "", doc: $$[$0 - 1] };
          break;
        case 19:
          var id = $$[$0];
          var description = $$[$0 - 2].trim();
          if ($$[$0].match(":")) {
            var parts = $$[$0].split(":");
            id = parts[0];
            description = [description, parts[1]];
          }
          this.$ = { stmt: "state", id, type: "default", description };
          break;
        case 20:
          this.$ = { stmt: "state", id: $$[$0 - 3], type: "default", description: $$[$0 - 5], doc: $$[$0 - 1] };
          break;
        case 21:
          this.$ = { stmt: "state", id: $$[$0], type: "fork" };
          break;
        case 22:
          this.$ = { stmt: "state", id: $$[$0], type: "join" };
          break;
        case 23:
          this.$ = { stmt: "state", id: $$[$0], type: "choice" };
          break;
        case 24:
          this.$ = { stmt: "state", id: yy.getDividerId(), type: "divider" };
          break;
        case 25:
          this.$ = { stmt: "state", id: $$[$0 - 1].trim(), note: { position: $$[$0 - 2].trim(), text: $$[$0].trim() } };
          break;
        case 28:
          this.$ = $$[$0].trim();
          yy.setAccTitle(this.$);
          break;
        case 29:
        case 30:
          this.$ = $$[$0].trim();
          yy.setAccDescription(this.$);
          break;
        case 31:
        case 32:
          this.$ = { stmt: "classDef", id: $$[$0 - 1].trim(), classes: $$[$0].trim() };
          break;
        case 33:
          this.$ = { stmt: "applyClass", id: $$[$0 - 1].trim(), styleClass: $$[$0].trim() };
          break;
        case 34:
          yy.setDirection("TB");
          this.$ = { stmt: "dir", value: "TB" };
          break;
        case 35:
          yy.setDirection("BT");
          this.$ = { stmt: "dir", value: "BT" };
          break;
        case 36:
          yy.setDirection("RL");
          this.$ = { stmt: "dir", value: "RL" };
          break;
        case 37:
          yy.setDirection("LR");
          this.$ = { stmt: "dir", value: "LR" };
          break;
        case 40:
        case 41:
          this.$ = { stmt: "state", id: $$[$0].trim(), type: "default", description: "" };
          break;
        case 42:
          this.$ = { stmt: "state", id: $$[$0 - 2].trim(), classes: [$$[$0].trim()], type: "default", description: "" };
          break;
        case 43:
          this.$ = { stmt: "state", id: $$[$0 - 2].trim(), classes: [$$[$0].trim()], type: "default", description: "" };
          break;
      }
    },
    table: [{ 3: 1, 4: $V0, 5: $V1, 6: $V2 }, { 1: [3] }, { 3: 5, 4: $V0, 5: $V1, 6: $V2 }, { 3: 6, 4: $V0, 5: $V1, 6: $V2 }, o([1, 4, 5, 15, 16, 18, 21, 23, 24, 25, 26, 27, 28, 32, 34, 36, 37, 41, 44, 45, 46, 47, 50], $V3, { 7: 7 }), { 1: [2, 1] }, { 1: [2, 2] }, { 1: [2, 3], 4: $V4, 5: $V5, 8: 8, 9: 10, 10: 12, 11: 13, 12: 14, 15: $V6, 16: $V7, 18: $V8, 21: $V9, 23: $Va, 24: $Vb, 25: $Vc, 26: $Vd, 27: $Ve, 28: $Vf, 31: 24, 32: $Vg, 34: $Vh, 36: $Vi, 37: $Vj, 41: $Vk, 44: $Vl, 45: $Vm, 46: $Vn, 47: $Vo, 50: $Vp }, o($Vq, [2, 5]), { 9: 36, 10: 12, 11: 13, 12: 14, 15: $V6, 16: $V7, 18: $V8, 21: $V9, 23: $Va, 24: $Vb, 25: $Vc, 26: $Vd, 27: $Ve, 28: $Vf, 31: 24, 32: $Vg, 34: $Vh, 36: $Vi, 37: $Vj, 41: $Vk, 44: $Vl, 45: $Vm, 46: $Vn, 47: $Vo, 50: $Vp }, o($Vq, [2, 7]), o($Vq, [2, 8]), o($Vq, [2, 9]), o($Vq, [2, 10]), o($Vq, [2, 11], { 13: [1, 37], 14: [1, 38] }), o($Vq, [2, 15]), { 17: [1, 39] }, o($Vq, [2, 17], { 19: [1, 40] }), { 22: [1, 41] }, o($Vq, [2, 21]), o($Vq, [2, 22]), o($Vq, [2, 23]), o($Vq, [2, 24]), { 29: 42, 30: [1, 43], 52: [1, 44], 53: [1, 45] }, o($Vq, [2, 27]), { 33: [1, 46] }, { 35: [1, 47] }, o($Vq, [2, 30]), { 38: [1, 48], 40: [1, 49] }, { 42: [1, 50] }, o($Vr, [2, 40], { 51: [1, 51] }), o($Vr, [2, 41], { 51: [1, 52] }), o($Vq, [2, 34]), o($Vq, [2, 35]), o($Vq, [2, 36]), o($Vq, [2, 37]), o($Vq, [2, 6]), o($Vq, [2, 12]), { 12: 53, 23: $Va, 50: $Vp }, o($Vq, [2, 16]), o($Vs, $V3, { 7: 54 }), { 23: [1, 55] }, { 23: [1, 56] }, { 22: [1, 57] }, { 23: [2, 44] }, { 23: [2, 45] }, o($Vq, [2, 28]), o($Vq, [2, 29]), { 39: [1, 58] }, { 39: [1, 59] }, { 43: [1, 60] }, { 23: [1, 61] }, { 23: [1, 62] }, o($Vq, [2, 13], { 13: [1, 63] }), { 4: $V4, 5: $V5, 8: 8, 9: 10, 10: 12, 11: 13, 12: 14, 15: $V6, 16: $V7, 18: $V8, 20: [1, 64], 21: $V9, 23: $Va, 24: $Vb, 25: $Vc, 26: $Vd, 27: $Ve, 28: $Vf, 31: 24, 32: $Vg, 34: $Vh, 36: $Vi, 37: $Vj, 41: $Vk, 44: $Vl, 45: $Vm, 46: $Vn, 47: $Vo, 50: $Vp }, o($Vq, [2, 19], { 19: [1, 65] }), { 30: [1, 66] }, { 23: [1, 67] }, o($Vq, [2, 31]), o($Vq, [2, 32]), o($Vq, [2, 33]), o($Vr, [2, 42]), o($Vr, [2, 43]), o($Vq, [2, 14]), o($Vq, [2, 18]), o($Vs, $V3, { 7: 68 }), o($Vq, [2, 25]), o($Vq, [2, 26]), { 4: $V4, 5: $V5, 8: 8, 9: 10, 10: 12, 11: 13, 12: 14, 15: $V6, 16: $V7, 18: $V8, 20: [1, 69], 21: $V9, 23: $Va, 24: $Vb, 25: $Vc, 26: $Vd, 27: $Ve, 28: $Vf, 31: 24, 32: $Vg, 34: $Vh, 36: $Vi, 37: $Vj, 41: $Vk, 44: $Vl, 45: $Vm, 46: $Vn, 47: $Vo, 50: $Vp }, o($Vq, [2, 20])],
    defaultActions: { 5: [2, 1], 6: [2, 2], 44: [2, 44], 45: [2, 45] },
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
            return 40;
          case 1:
            return 44;
          case 2:
            return 45;
          case 3:
            return 46;
          case 4:
            return 47;
          case 5:
            break;
          case 6:
            break;
          case 7:
            return 5;
          case 8:
            break;
          case 9:
            break;
          case 10:
            break;
          case 11:
            break;
          case 12:
            this.pushState("SCALE");
            return 16;
          case 13:
            return 17;
          case 14:
            this.popState();
            break;
          case 15:
            this.begin("acc_title");
            return 32;
          case 16:
            this.popState();
            return "acc_title_value";
          case 17:
            this.begin("acc_descr");
            return 34;
          case 18:
            this.popState();
            return "acc_descr_value";
          case 19:
            this.begin("acc_descr_multiline");
            break;
          case 20:
            this.popState();
            break;
          case 21:
            return "acc_descr_multiline_value";
          case 22:
            this.pushState("CLASSDEF");
            return 37;
          case 23:
            this.popState();
            this.pushState("CLASSDEFID");
            return "DEFAULT_CLASSDEF_ID";
          case 24:
            this.popState();
            this.pushState("CLASSDEFID");
            return 38;
          case 25:
            this.popState();
            return 39;
          case 26:
            this.pushState("CLASS");
            return 41;
          case 27:
            this.popState();
            this.pushState("CLASS_STYLE");
            return 42;
          case 28:
            this.popState();
            return 43;
          case 29:
            this.pushState("SCALE");
            return 16;
          case 30:
            return 17;
          case 31:
            this.popState();
            break;
          case 32:
            this.pushState("STATE");
            break;
          case 33:
            this.popState();
            yy_.yytext = yy_.yytext.slice(0, -8).trim();
            return 24;
          case 34:
            this.popState();
            yy_.yytext = yy_.yytext.slice(0, -8).trim();
            return 25;
          case 35:
            this.popState();
            yy_.yytext = yy_.yytext.slice(0, -10).trim();
            return 26;
          case 36:
            this.popState();
            yy_.yytext = yy_.yytext.slice(0, -8).trim();
            return 24;
          case 37:
            this.popState();
            yy_.yytext = yy_.yytext.slice(0, -8).trim();
            return 25;
          case 38:
            this.popState();
            yy_.yytext = yy_.yytext.slice(0, -10).trim();
            return 26;
          case 39:
            return 44;
          case 40:
            return 45;
          case 41:
            return 46;
          case 42:
            return 47;
          case 43:
            this.pushState("STATE_STRING");
            break;
          case 44:
            this.pushState("STATE_ID");
            return "AS";
          case 45:
            this.popState();
            return "ID";
          case 46:
            this.popState();
            break;
          case 47:
            return "STATE_DESCR";
          case 48:
            return 18;
          case 49:
            this.popState();
            break;
          case 50:
            this.popState();
            this.pushState("struct");
            return 19;
          case 51:
            break;
          case 52:
            this.popState();
            return 20;
          case 53:
            break;
          case 54:
            this.begin("NOTE");
            return 28;
          case 55:
            this.popState();
            this.pushState("NOTE_ID");
            return 52;
          case 56:
            this.popState();
            this.pushState("NOTE_ID");
            return 53;
          case 57:
            this.popState();
            this.pushState("FLOATING_NOTE");
            break;
          case 58:
            this.popState();
            this.pushState("FLOATING_NOTE_ID");
            return "AS";
          case 59:
            break;
          case 60:
            return "NOTE_TEXT";
          case 61:
            this.popState();
            return "ID";
          case 62:
            this.popState();
            this.pushState("NOTE_TEXT");
            return 23;
          case 63:
            this.popState();
            yy_.yytext = yy_.yytext.substr(2).trim();
            return 30;
          case 64:
            this.popState();
            yy_.yytext = yy_.yytext.slice(0, -8).trim();
            return 30;
          case 65:
            return 6;
          case 66:
            return 6;
          case 67:
            return 15;
          case 68:
            return 50;
          case 69:
            return 23;
          case 70:
            yy_.yytext = yy_.yytext.trim();
            return 13;
          case 71:
            return 14;
          case 72:
            return 27;
          case 73:
            return 51;
          case 74:
            return 5;
          case 75:
            return "INVALID";
        }
      },
      rules: [/^(?:default\b)/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:[\s]+)/i, /^(?:((?!\n)\s)+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:scale\s+)/i, /^(?:\d+)/i, /^(?:\s+width\b)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:classDef\s+)/i, /^(?:DEFAULT\s+)/i, /^(?:\w+\s+)/i, /^(?:[^\n]*)/i, /^(?:class\s+)/i, /^(?:(\w+)+((,\s*\w+)*))/i, /^(?:[^\n]*)/i, /^(?:scale\s+)/i, /^(?:\d+)/i, /^(?:\s+width\b)/i, /^(?:state\s+)/i, /^(?:.*<<fork>>)/i, /^(?:.*<<join>>)/i, /^(?:.*<<choice>>)/i, /^(?:.*\[\[fork\]\])/i, /^(?:.*\[\[join\]\])/i, /^(?:.*\[\[choice\]\])/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:["])/i, /^(?:\s*as\s+)/i, /^(?:[^\n\{]*)/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[^\n\s\{]+)/i, /^(?:\n)/i, /^(?:\{)/i, /^(?:%%(?!\{)[^\n]*)/i, /^(?:\})/i, /^(?:[\n])/i, /^(?:note\s+)/i, /^(?:left of\b)/i, /^(?:right of\b)/i, /^(?:")/i, /^(?:\s*as\s*)/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[^\n]*)/i, /^(?:\s*[^:\n\s\-]+)/i, /^(?:\s*:[^:\n;]+)/i, /^(?:[\s\S]*?end note\b)/i, /^(?:stateDiagram\s+)/i, /^(?:stateDiagram-v2\s+)/i, /^(?:hide empty description\b)/i, /^(?:\[\*\])/i, /^(?:[^:\n\s\-\{]+)/i, /^(?:\s*:[^:\n;]+)/i, /^(?:-->)/i, /^(?:--)/i, /^(?::::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { "LINE": { "rules": [9, 10], "inclusive": false }, "struct": { "rules": [9, 10, 22, 26, 32, 39, 40, 41, 42, 51, 52, 53, 54, 68, 69, 70, 71, 72], "inclusive": false }, "FLOATING_NOTE_ID": { "rules": [61], "inclusive": false }, "FLOATING_NOTE": { "rules": [58, 59, 60], "inclusive": false }, "NOTE_TEXT": { "rules": [63, 64], "inclusive": false }, "NOTE_ID": { "rules": [62], "inclusive": false }, "NOTE": { "rules": [55, 56, 57], "inclusive": false }, "CLASS_STYLE": { "rules": [28], "inclusive": false }, "CLASS": { "rules": [27], "inclusive": false }, "CLASSDEFID": { "rules": [25], "inclusive": false }, "CLASSDEF": { "rules": [23, 24], "inclusive": false }, "acc_descr_multiline": { "rules": [20, 21], "inclusive": false }, "acc_descr": { "rules": [18], "inclusive": false }, "acc_title": { "rules": [16], "inclusive": false }, "SCALE": { "rules": [13, 14, 30, 31], "inclusive": false }, "ALIAS": { "rules": [], "inclusive": false }, "STATE_ID": { "rules": [45], "inclusive": false }, "STATE_STRING": { "rules": [46, 47], "inclusive": false }, "FORK_STATE": { "rules": [], "inclusive": false }, "STATE": { "rules": [9, 10, 33, 34, 35, 36, 37, 38, 43, 44, 48, 49, 50], "inclusive": false }, "ID": { "rules": [9, 10], "inclusive": false }, "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 15, 17, 19, 22, 26, 29, 32, 50, 54, 65, 66, 67, 68, 69, 70, 71, 73, 74, 75], "inclusive": true } }
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
const DEFAULT_DIAGRAM_DIRECTION = "LR";
const DEFAULT_NESTED_DOC_DIR = "TB";
const STMT_STATE = "state";
const STMT_RELATION = "relation";
const STMT_CLASSDEF = "classDef";
const STMT_APPLYCLASS = "applyClass";
const DEFAULT_STATE_TYPE = "default";
const DIVIDER_TYPE = "divider";
const START_NODE = "[*]";
const START_TYPE = "start";
const END_NODE = START_NODE;
const END_TYPE = "end";
const COLOR_KEYWORD = "color";
const FILL_KEYWORD = "fill";
const BG_FILL = "bgFill";
const STYLECLASS_SEP = ",";
function newClassesList() {
  return {};
}
let direction = DEFAULT_DIAGRAM_DIRECTION;
let rootDoc = [];
let classes = newClassesList();
const newDoc = () => {
  return {
    relations: [],
    states: {},
    documents: {}
  };
};
let documents = {
  root: newDoc()
};
let currentDocument = documents.root;
let startEndCount = 0;
let dividerCnt = 0;
const lineType = {
  LINE: 0,
  DOTTED_LINE: 1
};
const relationType = {
  AGGREGATION: 0,
  EXTENSION: 1,
  COMPOSITION: 2,
  DEPENDENCY: 3
};
const clone = (o) => JSON.parse(JSON.stringify(o));
const setRootDoc = (o) => {
  index.log$1.info("Setting root doc", o);
  rootDoc = o;
};
const getRootDoc = () => rootDoc;
const docTranslator = (parent, node, first) => {
  if (node.stmt === STMT_RELATION) {
    docTranslator(parent, node.state1, true);
    docTranslator(parent, node.state2, false);
  } else {
    if (node.stmt === STMT_STATE) {
      if (node.id === "[*]") {
        node.id = first ? parent.id + "_start" : parent.id + "_end";
        node.start = first;
      } else {
        node.id = node.id.trim();
      }
    }
    if (node.doc) {
      const doc = [];
      let currentDoc = [];
      let i;
      for (i = 0; i < node.doc.length; i++) {
        if (node.doc[i].type === DIVIDER_TYPE) {
          const newNode = clone(node.doc[i]);
          newNode.doc = clone(currentDoc);
          doc.push(newNode);
          currentDoc = [];
        } else {
          currentDoc.push(node.doc[i]);
        }
      }
      if (doc.length > 0 && currentDoc.length > 0) {
        const newNode = {
          stmt: STMT_STATE,
          id: index.generateId(),
          type: "divider",
          doc: clone(currentDoc)
        };
        doc.push(clone(newNode));
        node.doc = doc;
      }
      node.doc.forEach((docNode) => docTranslator(node, docNode, true));
    }
  }
};
const getRootDocV2 = () => {
  docTranslator({ id: "root" }, { id: "root", doc: rootDoc }, true);
  return { id: "root", doc: rootDoc };
};
const extract = (_doc) => {
  let doc;
  if (_doc.doc) {
    doc = _doc.doc;
  } else {
    doc = _doc;
  }
  index.log$1.info(doc);
  clear(true);
  index.log$1.info("Extract", doc);
  doc.forEach((item) => {
    switch (item.stmt) {
      case STMT_STATE:
        addState(
          item.id.trim(),
          item.type,
          item.doc,
          item.description,
          item.note,
          item.classes,
          item.styles,
          item.textStyles
        );
        break;
      case STMT_RELATION:
        addRelation(item.state1, item.state2, item.description);
        break;
      case STMT_CLASSDEF:
        addStyleClass(item.id.trim(), item.classes);
        break;
      case STMT_APPLYCLASS:
        setCssClass(item.id.trim(), item.styleClass);
        break;
    }
  });
};
const addState = function(id, type = DEFAULT_STATE_TYPE, doc = null, descr = null, note = null, classes2 = null, styles2 = null, textStyles = null) {
  const trimmedId = id == null ? void 0 : id.trim();
  if (currentDocument.states[trimmedId] === void 0) {
    index.log$1.info("Adding state ", trimmedId, descr);
    currentDocument.states[trimmedId] = {
      id: trimmedId,
      descriptions: [],
      type,
      doc,
      note,
      classes: [],
      styles: [],
      textStyles: []
    };
  } else {
    if (!currentDocument.states[trimmedId].doc) {
      currentDocument.states[trimmedId].doc = doc;
    }
    if (!currentDocument.states[trimmedId].type) {
      currentDocument.states[trimmedId].type = type;
    }
  }
  if (descr) {
    index.log$1.info("Setting state description", trimmedId, descr);
    if (typeof descr === "string") {
      addDescription(trimmedId, descr.trim());
    }
    if (typeof descr === "object") {
      descr.forEach((des) => addDescription(trimmedId, des.trim()));
    }
  }
  if (note) {
    currentDocument.states[trimmedId].note = note;
    currentDocument.states[trimmedId].note.text = index.common$1.sanitizeText(
      currentDocument.states[trimmedId].note.text,
      index.getConfig()
    );
  }
  if (classes2) {
    index.log$1.info("Setting state classes", trimmedId, classes2);
    const classesList = typeof classes2 === "string" ? [classes2] : classes2;
    classesList.forEach((cssClass) => setCssClass(trimmedId, cssClass.trim()));
  }
  if (styles2) {
    index.log$1.info("Setting state styles", trimmedId, styles2);
    const stylesList = typeof styles2 === "string" ? [styles2] : styles2;
    stylesList.forEach((style) => setStyle(trimmedId, style.trim()));
  }
  if (textStyles) {
    index.log$1.info("Setting state styles", trimmedId, styles2);
    const textStylesList = typeof textStyles === "string" ? [textStyles] : textStyles;
    textStylesList.forEach((textStyle) => setTextStyle(trimmedId, textStyle.trim()));
  }
};
const clear = function(saveCommon) {
  documents = {
    root: newDoc()
  };
  currentDocument = documents.root;
  startEndCount = 0;
  classes = newClassesList();
  if (!saveCommon) {
    index.clear();
  }
};
const getState = function(id) {
  return currentDocument.states[id];
};
const getStates = function() {
  return currentDocument.states;
};
const logDocuments = function() {
  index.log$1.info("Documents = ", documents);
};
const getRelations = function() {
  return currentDocument.relations;
};
function startIdIfNeeded(id = "") {
  let fixedId = id;
  if (id === START_NODE) {
    startEndCount++;
    fixedId = `${START_TYPE}${startEndCount}`;
  }
  return fixedId;
}
function startTypeIfNeeded(id = "", type = DEFAULT_STATE_TYPE) {
  return id === START_NODE ? START_TYPE : type;
}
function endIdIfNeeded(id = "") {
  let fixedId = id;
  if (id === END_NODE) {
    startEndCount++;
    fixedId = `${END_TYPE}${startEndCount}`;
  }
  return fixedId;
}
function endTypeIfNeeded(id = "", type = DEFAULT_STATE_TYPE) {
  return id === END_NODE ? END_TYPE : type;
}
function addRelationObjs(item1, item2, relationTitle) {
  let id1 = startIdIfNeeded(item1.id.trim());
  let type1 = startTypeIfNeeded(item1.id.trim(), item1.type);
  let id2 = startIdIfNeeded(item2.id.trim());
  let type2 = startTypeIfNeeded(item2.id.trim(), item2.type);
  addState(
    id1,
    type1,
    item1.doc,
    item1.description,
    item1.note,
    item1.classes,
    item1.styles,
    item1.textStyles
  );
  addState(
    id2,
    type2,
    item2.doc,
    item2.description,
    item2.note,
    item2.classes,
    item2.styles,
    item2.textStyles
  );
  currentDocument.relations.push({
    id1,
    id2,
    relationTitle: index.common$1.sanitizeText(relationTitle, index.getConfig())
  });
}
const addRelation = function(item1, item2, title) {
  if (typeof item1 === "object") {
    addRelationObjs(item1, item2, title);
  } else {
    const id1 = startIdIfNeeded(item1.trim());
    const type1 = startTypeIfNeeded(item1);
    const id2 = endIdIfNeeded(item2.trim());
    const type2 = endTypeIfNeeded(item2);
    addState(id1, type1);
    addState(id2, type2);
    currentDocument.relations.push({
      id1,
      id2,
      title: index.common$1.sanitizeText(title, index.getConfig())
    });
  }
};
const addDescription = function(id, descr) {
  const theState = currentDocument.states[id];
  const _descr = descr.startsWith(":") ? descr.replace(":", "").trim() : descr;
  theState.descriptions.push(index.common$1.sanitizeText(_descr, index.getConfig()));
};
const cleanupLabel = function(label) {
  if (label.substring(0, 1) === ":") {
    return label.substr(2).trim();
  } else {
    return label.trim();
  }
};
const getDividerId = () => {
  dividerCnt++;
  return "divider-id-" + dividerCnt;
};
const addStyleClass = function(id, styleAttributes = "") {
  if (classes[id] === void 0) {
    classes[id] = { id, styles: [], textStyles: [] };
  }
  const foundClass = classes[id];
  if (styleAttributes !== void 0 && styleAttributes !== null) {
    styleAttributes.split(STYLECLASS_SEP).forEach((attrib) => {
      const fixedAttrib = attrib.replace(/([^;]*);/, "$1").trim();
      if (attrib.match(COLOR_KEYWORD)) {
        const newStyle1 = fixedAttrib.replace(FILL_KEYWORD, BG_FILL);
        const newStyle2 = newStyle1.replace(COLOR_KEYWORD, FILL_KEYWORD);
        foundClass.textStyles.push(newStyle2);
      }
      foundClass.styles.push(fixedAttrib);
    });
  }
};
const getClasses = function() {
  return classes;
};
const setCssClass = function(itemIds, cssClassName) {
  itemIds.split(",").forEach(function(id) {
    let foundState = getState(id);
    if (foundState === void 0) {
      const trimmedId = id.trim();
      addState(trimmedId);
      foundState = getState(trimmedId);
    }
    foundState.classes.push(cssClassName);
  });
};
const setStyle = function(itemId, styleText) {
  const item = getState(itemId);
  if (item !== void 0) {
    item.textStyles.push(styleText);
  }
};
const setTextStyle = function(itemId, cssClassName) {
  const item = getState(itemId);
  if (item !== void 0) {
    item.textStyles.push(cssClassName);
  }
};
const getDirection = () => direction;
const setDirection = (dir) => {
  direction = dir;
};
const trimColon = (str) => str && str[0] === ":" ? str.substr(1).trim() : str.trim();
const db = {
  getConfig: () => index.getConfig().state,
  addState,
  clear,
  getState,
  getStates,
  getRelations,
  getClasses,
  getDirection,
  addRelation,
  getDividerId,
  setDirection,
  cleanupLabel,
  lineType,
  relationType,
  logDocuments,
  getRootDoc,
  setRootDoc,
  getRootDocV2,
  extract,
  trimColon,
  getAccTitle: index.getAccTitle,
  setAccTitle: index.setAccTitle,
  getAccDescription: index.getAccDescription,
  setAccDescription: index.setAccDescription,
  addStyleClass,
  setCssClass,
  addDescription,
  setDiagramTitle: index.setDiagramTitle,
  getDiagramTitle: index.getDiagramTitle
};
const getStyles = (options) => `
defs #statediagram-barbEnd {
    fill: ${options.transitionColor};
    stroke: ${options.transitionColor};
  }
g.stateGroup text {
  fill: ${options.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${options.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${options.stateLabelColor};
}

g.stateGroup rect {
  fill: ${options.mainBkg};
  stroke: ${options.nodeBorder};
}

g.stateGroup line {
  stroke: ${options.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${options.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${options.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${options.noteBorderColor};
  fill: ${options.noteBkgColor};

  text {
    fill: ${options.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${options.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${options.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel .label text {
  fill: ${options.transitionLabelColor || options.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${options.transitionLabelColor || options.tertiaryTextColor};
}

.stateLabel text {
  fill: ${options.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${options.specialStateColor};
  stroke: ${options.specialStateColor};
}

.node .fork-join {
  fill: ${options.specialStateColor};
  stroke: ${options.specialStateColor};
}

.node circle.state-end {
  fill: ${options.innerEndBackground};
  stroke: ${options.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${options.compositeBackground || options.background};
  // stroke: ${options.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${options.stateBkg || options.mainBkg};
  stroke: ${options.stateBorder || options.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${options.mainBkg};
  stroke: ${options.stateBorder || options.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${options.lineColor};
}

.statediagram-cluster rect {
  fill: ${options.compositeTitleBackground};
  stroke: ${options.stateBorder || options.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${options.stateLabelColor};
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${options.stateBorder || options.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${options.compositeBackground || options.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${options.altBackground ? options.altBackground : "#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${options.altBackground ? options.altBackground : "#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${options.noteBkgColor};
  stroke: ${options.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${options.noteBkgColor};
  stroke: ${options.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${options.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${options.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${options.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${options.lineColor};
  stroke: ${options.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${options.textColor};
}
`;
const styles = getStyles;

exports.DEFAULT_NESTED_DOC_DIR = DEFAULT_NESTED_DOC_DIR;
exports.DEFAULT_STATE_TYPE = DEFAULT_STATE_TYPE;
exports.DIVIDER_TYPE = DIVIDER_TYPE;
exports.STMT_RELATION = STMT_RELATION;
exports.STMT_STATE = STMT_STATE;
exports.db = db;
exports.parser$1 = parser$1;
exports.styles = styles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzLTZhYWYzMmNmLTUyYmYzZjRkLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvbWVybWFpZC9kaXN0L3N0eWxlcy02YWFmMzJjZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjIGFzIGdldENvbmZpZywgZyBhcyBnZXRBY2NUaXRsZSwgcyBhcyBzZXRBY2NUaXRsZSwgYSBhcyBnZXRBY2NEZXNjcmlwdGlvbiwgYiBhcyBzZXRBY2NEZXNjcmlwdGlvbiwgcSBhcyBzZXREaWFncmFtVGl0bGUsIHQgYXMgZ2V0RGlhZ3JhbVRpdGxlLCBsIGFzIGxvZywgZSBhcyBjb21tb24sIHYgYXMgY2xlYXIkMSwgSSBhcyBnZW5lcmF0ZUlkIH0gZnJvbSBcIi4vbWVybWFpZC1iNTg2MGI1NC5qc1wiO1xudmFyIHBhcnNlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbyA9IGZ1bmN0aW9uKGssIHYsIG8yLCBsKSB7XG4gICAgZm9yIChvMiA9IG8yIHx8IHt9LCBsID0gay5sZW5ndGg7IGwtLTsgbzJba1tsXV0gPSB2KVxuICAgICAgO1xuICAgIHJldHVybiBvMjtcbiAgfSwgJFYwID0gWzEsIDJdLCAkVjEgPSBbMSwgM10sICRWMiA9IFsxLCA0XSwgJFYzID0gWzIsIDRdLCAkVjQgPSBbMSwgOV0sICRWNSA9IFsxLCAxMV0sICRWNiA9IFsxLCAxNV0sICRWNyA9IFsxLCAxNl0sICRWOCA9IFsxLCAxN10sICRWOSA9IFsxLCAxOF0sICRWYSA9IFsxLCAzMF0sICRWYiA9IFsxLCAxOV0sICRWYyA9IFsxLCAyMF0sICRWZCA9IFsxLCAyMV0sICRWZSA9IFsxLCAyMl0sICRWZiA9IFsxLCAyM10sICRWZyA9IFsxLCAyNV0sICRWaCA9IFsxLCAyNl0sICRWaSA9IFsxLCAyN10sICRWaiA9IFsxLCAyOF0sICRWayA9IFsxLCAyOV0sICRWbCA9IFsxLCAzMl0sICRWbSA9IFsxLCAzM10sICRWbiA9IFsxLCAzNF0sICRWbyA9IFsxLCAzNV0sICRWcCA9IFsxLCAzMV0sICRWcSA9IFsxLCA0LCA1LCAxNSwgMTYsIDE4LCAyMCwgMjEsIDIzLCAyNCwgMjUsIDI2LCAyNywgMjgsIDMyLCAzNCwgMzYsIDM3LCA0MSwgNDQsIDQ1LCA0NiwgNDcsIDUwXSwgJFZyID0gWzEsIDQsIDUsIDEzLCAxNCwgMTUsIDE2LCAxOCwgMjAsIDIxLCAyMywgMjQsIDI1LCAyNiwgMjcsIDI4LCAzMiwgMzQsIDM2LCAzNywgNDEsIDQ0LCA0NSwgNDYsIDQ3LCA1MF0sICRWcyA9IFs0LCA1LCAxNSwgMTYsIDE4LCAyMCwgMjEsIDIzLCAyNCwgMjUsIDI2LCAyNywgMjgsIDMyLCAzNCwgMzYsIDM3LCA0MSwgNDQsIDQ1LCA0NiwgNDcsIDUwXTtcbiAgdmFyIHBhcnNlcjIgPSB7XG4gICAgdHJhY2U6IGZ1bmN0aW9uIHRyYWNlKCkge1xuICAgIH0sXG4gICAgeXk6IHt9LFxuICAgIHN5bWJvbHNfOiB7IFwiZXJyb3JcIjogMiwgXCJzdGFydFwiOiAzLCBcIlNQQUNFXCI6IDQsIFwiTkxcIjogNSwgXCJTRFwiOiA2LCBcImRvY3VtZW50XCI6IDcsIFwibGluZVwiOiA4LCBcInN0YXRlbWVudFwiOiA5LCBcImNsYXNzRGVmU3RhdGVtZW50XCI6IDEwLCBcImNzc0NsYXNzU3RhdGVtZW50XCI6IDExLCBcImlkU3RhdGVtZW50XCI6IDEyLCBcIkRFU0NSXCI6IDEzLCBcIi0tPlwiOiAxNCwgXCJISURFX0VNUFRZXCI6IDE1LCBcInNjYWxlXCI6IDE2LCBcIldJRFRIXCI6IDE3LCBcIkNPTVBPU0lUX1NUQVRFXCI6IDE4LCBcIlNUUlVDVF9TVEFSVFwiOiAxOSwgXCJTVFJVQ1RfU1RPUFwiOiAyMCwgXCJTVEFURV9ERVNDUlwiOiAyMSwgXCJBU1wiOiAyMiwgXCJJRFwiOiAyMywgXCJGT1JLXCI6IDI0LCBcIkpPSU5cIjogMjUsIFwiQ0hPSUNFXCI6IDI2LCBcIkNPTkNVUlJFTlRcIjogMjcsIFwibm90ZVwiOiAyOCwgXCJub3RlUG9zaXRpb25cIjogMjksIFwiTk9URV9URVhUXCI6IDMwLCBcImRpcmVjdGlvblwiOiAzMSwgXCJhY2NfdGl0bGVcIjogMzIsIFwiYWNjX3RpdGxlX3ZhbHVlXCI6IDMzLCBcImFjY19kZXNjclwiOiAzNCwgXCJhY2NfZGVzY3JfdmFsdWVcIjogMzUsIFwiYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZVwiOiAzNiwgXCJjbGFzc0RlZlwiOiAzNywgXCJDTEFTU0RFRl9JRFwiOiAzOCwgXCJDTEFTU0RFRl9TVFlMRU9QVFNcIjogMzksIFwiREVGQVVMVFwiOiA0MCwgXCJjbGFzc1wiOiA0MSwgXCJDTEFTU0VOVElUWV9JRFNcIjogNDIsIFwiU1RZTEVDTEFTU1wiOiA0MywgXCJkaXJlY3Rpb25fdGJcIjogNDQsIFwiZGlyZWN0aW9uX2J0XCI6IDQ1LCBcImRpcmVjdGlvbl9ybFwiOiA0NiwgXCJkaXJlY3Rpb25fbHJcIjogNDcsIFwiZW9sXCI6IDQ4LCBcIjtcIjogNDksIFwiRURHRV9TVEFURVwiOiA1MCwgXCJTVFlMRV9TRVBBUkFUT1JcIjogNTEsIFwibGVmdF9vZlwiOiA1MiwgXCJyaWdodF9vZlwiOiA1MywgXCIkYWNjZXB0XCI6IDAsIFwiJGVuZFwiOiAxIH0sXG4gICAgdGVybWluYWxzXzogeyAyOiBcImVycm9yXCIsIDQ6IFwiU1BBQ0VcIiwgNTogXCJOTFwiLCA2OiBcIlNEXCIsIDEzOiBcIkRFU0NSXCIsIDE0OiBcIi0tPlwiLCAxNTogXCJISURFX0VNUFRZXCIsIDE2OiBcInNjYWxlXCIsIDE3OiBcIldJRFRIXCIsIDE4OiBcIkNPTVBPU0lUX1NUQVRFXCIsIDE5OiBcIlNUUlVDVF9TVEFSVFwiLCAyMDogXCJTVFJVQ1RfU1RPUFwiLCAyMTogXCJTVEFURV9ERVNDUlwiLCAyMjogXCJBU1wiLCAyMzogXCJJRFwiLCAyNDogXCJGT1JLXCIsIDI1OiBcIkpPSU5cIiwgMjY6IFwiQ0hPSUNFXCIsIDI3OiBcIkNPTkNVUlJFTlRcIiwgMjg6IFwibm90ZVwiLCAzMDogXCJOT1RFX1RFWFRcIiwgMzI6IFwiYWNjX3RpdGxlXCIsIDMzOiBcImFjY190aXRsZV92YWx1ZVwiLCAzNDogXCJhY2NfZGVzY3JcIiwgMzU6IFwiYWNjX2Rlc2NyX3ZhbHVlXCIsIDM2OiBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIiwgMzc6IFwiY2xhc3NEZWZcIiwgMzg6IFwiQ0xBU1NERUZfSURcIiwgMzk6IFwiQ0xBU1NERUZfU1RZTEVPUFRTXCIsIDQwOiBcIkRFRkFVTFRcIiwgNDE6IFwiY2xhc3NcIiwgNDI6IFwiQ0xBU1NFTlRJVFlfSURTXCIsIDQzOiBcIlNUWUxFQ0xBU1NcIiwgNDQ6IFwiZGlyZWN0aW9uX3RiXCIsIDQ1OiBcImRpcmVjdGlvbl9idFwiLCA0NjogXCJkaXJlY3Rpb25fcmxcIiwgNDc6IFwiZGlyZWN0aW9uX2xyXCIsIDQ5OiBcIjtcIiwgNTA6IFwiRURHRV9TVEFURVwiLCA1MTogXCJTVFlMRV9TRVBBUkFUT1JcIiwgNTI6IFwibGVmdF9vZlwiLCA1MzogXCJyaWdodF9vZlwiIH0sXG4gICAgcHJvZHVjdGlvbnNfOiBbMCwgWzMsIDJdLCBbMywgMl0sIFszLCAyXSwgWzcsIDBdLCBbNywgMl0sIFs4LCAyXSwgWzgsIDFdLCBbOCwgMV0sIFs5LCAxXSwgWzksIDFdLCBbOSwgMV0sIFs5LCAyXSwgWzksIDNdLCBbOSwgNF0sIFs5LCAxXSwgWzksIDJdLCBbOSwgMV0sIFs5LCA0XSwgWzksIDNdLCBbOSwgNl0sIFs5LCAxXSwgWzksIDFdLCBbOSwgMV0sIFs5LCAxXSwgWzksIDRdLCBbOSwgNF0sIFs5LCAxXSwgWzksIDJdLCBbOSwgMl0sIFs5LCAxXSwgWzEwLCAzXSwgWzEwLCAzXSwgWzExLCAzXSwgWzMxLCAxXSwgWzMxLCAxXSwgWzMxLCAxXSwgWzMxLCAxXSwgWzQ4LCAxXSwgWzQ4LCAxXSwgWzEyLCAxXSwgWzEyLCAxXSwgWzEyLCAzXSwgWzEyLCAzXSwgWzI5LCAxXSwgWzI5LCAxXV0sXG4gICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24gYW5vbnltb3VzKHl5dGV4dCwgeXlsZW5nLCB5eWxpbmVubywgeXksIHl5c3RhdGUsICQkLCBfJCkge1xuICAgICAgdmFyICQwID0gJCQubGVuZ3RoIC0gMTtcbiAgICAgIHN3aXRjaCAoeXlzdGF0ZSkge1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgeXkuc2V0Um9vdERvYygkJFskMF0pO1xuICAgICAgICAgIHJldHVybiAkJFskMF07XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0aGlzLiQgPSBbXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGlmICgkJFskMF0gIT0gXCJubFwiKSB7XG4gICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcbiAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwIC0gMV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICB0aGlzLiQgPSBcIm5sXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIGNvbnN0IHN0YXRlU3RtdCA9ICQkWyQwIC0gMV07XG4gICAgICAgICAgc3RhdGVTdG10LmRlc2NyaXB0aW9uID0geXkudHJpbUNvbG9uKCQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gc3RhdGVTdG10O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIHRoaXMuJCA9IHsgc3RtdDogXCJyZWxhdGlvblwiLCBzdGF0ZTE6ICQkWyQwIC0gMl0sIHN0YXRlMjogJCRbJDBdIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgY29uc3QgcmVsRGVzY3JpcHRpb24gPSB5eS50cmltQ29sb24oJCRbJDBdKTtcbiAgICAgICAgICB0aGlzLiQgPSB7IHN0bXQ6IFwicmVsYXRpb25cIiwgc3RhdGUxOiAkJFskMCAtIDNdLCBzdGF0ZTI6ICQkWyQwIC0gMV0sIGRlc2NyaXB0aW9uOiByZWxEZXNjcmlwdGlvbiB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgIHRoaXMuJCA9IHsgc3RtdDogXCJzdGF0ZVwiLCBpZDogJCRbJDAgLSAzXSwgdHlwZTogXCJkZWZhdWx0XCIsIGRlc2NyaXB0aW9uOiBcIlwiLCBkb2M6ICQkWyQwIC0gMV0gfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICB2YXIgaWQgPSAkJFskMF07XG4gICAgICAgICAgdmFyIGRlc2NyaXB0aW9uID0gJCRbJDAgLSAyXS50cmltKCk7XG4gICAgICAgICAgaWYgKCQkWyQwXS5tYXRjaChcIjpcIikpIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9ICQkWyQwXS5zcGxpdChcIjpcIik7XG4gICAgICAgICAgICBpZCA9IHBhcnRzWzBdO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBbZGVzY3JpcHRpb24sIHBhcnRzWzFdXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy4kID0geyBzdG10OiBcInN0YXRlXCIsIGlkLCB0eXBlOiBcImRlZmF1bHRcIiwgZGVzY3JpcHRpb24gfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICB0aGlzLiQgPSB7IHN0bXQ6IFwic3RhdGVcIiwgaWQ6ICQkWyQwIC0gM10sIHR5cGU6IFwiZGVmYXVsdFwiLCBkZXNjcmlwdGlvbjogJCRbJDAgLSA1XSwgZG9jOiAkJFskMCAtIDFdIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgdGhpcy4kID0geyBzdG10OiBcInN0YXRlXCIsIGlkOiAkJFskMF0sIHR5cGU6IFwiZm9ya1wiIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgdGhpcy4kID0geyBzdG10OiBcInN0YXRlXCIsIGlkOiAkJFskMF0sIHR5cGU6IFwiam9pblwiIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgdGhpcy4kID0geyBzdG10OiBcInN0YXRlXCIsIGlkOiAkJFskMF0sIHR5cGU6IFwiY2hvaWNlXCIgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICB0aGlzLiQgPSB7IHN0bXQ6IFwic3RhdGVcIiwgaWQ6IHl5LmdldERpdmlkZXJJZCgpLCB0eXBlOiBcImRpdmlkZXJcIiB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgIHRoaXMuJCA9IHsgc3RtdDogXCJzdGF0ZVwiLCBpZDogJCRbJDAgLSAxXS50cmltKCksIG5vdGU6IHsgcG9zaXRpb246ICQkWyQwIC0gMl0udHJpbSgpLCB0ZXh0OiAkJFskMF0udHJpbSgpIH0gfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0udHJpbSgpO1xuICAgICAgICAgIHl5LnNldEFjY1RpdGxlKHRoaXMuJCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjk6XG4gICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdLnRyaW0oKTtcbiAgICAgICAgICB5eS5zZXRBY2NEZXNjcmlwdGlvbih0aGlzLiQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMxOlxuICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgIHRoaXMuJCA9IHsgc3RtdDogXCJjbGFzc0RlZlwiLCBpZDogJCRbJDAgLSAxXS50cmltKCksIGNsYXNzZXM6ICQkWyQwXS50cmltKCkgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICB0aGlzLiQgPSB7IHN0bXQ6IFwiYXBwbHlDbGFzc1wiLCBpZDogJCRbJDAgLSAxXS50cmltKCksIHN0eWxlQ2xhc3M6ICQkWyQwXS50cmltKCkgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICB5eS5zZXREaXJlY3Rpb24oXCJUQlwiKTtcbiAgICAgICAgICB0aGlzLiQgPSB7IHN0bXQ6IFwiZGlyXCIsIHZhbHVlOiBcIlRCXCIgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNTpcbiAgICAgICAgICB5eS5zZXREaXJlY3Rpb24oXCJCVFwiKTtcbiAgICAgICAgICB0aGlzLiQgPSB7IHN0bXQ6IFwiZGlyXCIsIHZhbHVlOiBcIkJUXCIgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNjpcbiAgICAgICAgICB5eS5zZXREaXJlY3Rpb24oXCJSTFwiKTtcbiAgICAgICAgICB0aGlzLiQgPSB7IHN0bXQ6IFwiZGlyXCIsIHZhbHVlOiBcIlJMXCIgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICB5eS5zZXREaXJlY3Rpb24oXCJMUlwiKTtcbiAgICAgICAgICB0aGlzLiQgPSB7IHN0bXQ6IFwiZGlyXCIsIHZhbHVlOiBcIkxSXCIgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICB0aGlzLiQgPSB7IHN0bXQ6IFwic3RhdGVcIiwgaWQ6ICQkWyQwXS50cmltKCksIHR5cGU6IFwiZGVmYXVsdFwiLCBkZXNjcmlwdGlvbjogXCJcIiB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgIHRoaXMuJCA9IHsgc3RtdDogXCJzdGF0ZVwiLCBpZDogJCRbJDAgLSAyXS50cmltKCksIGNsYXNzZXM6IFskJFskMF0udHJpbSgpXSwgdHlwZTogXCJkZWZhdWx0XCIsIGRlc2NyaXB0aW9uOiBcIlwiIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDM6XG4gICAgICAgICAgdGhpcy4kID0geyBzdG10OiBcInN0YXRlXCIsIGlkOiAkJFskMCAtIDJdLnRyaW0oKSwgY2xhc3NlczogWyQkWyQwXS50cmltKCldLCB0eXBlOiBcImRlZmF1bHRcIiwgZGVzY3JpcHRpb246IFwiXCIgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuICAgIHRhYmxlOiBbeyAzOiAxLCA0OiAkVjAsIDU6ICRWMSwgNjogJFYyIH0sIHsgMTogWzNdIH0sIHsgMzogNSwgNDogJFYwLCA1OiAkVjEsIDY6ICRWMiB9LCB7IDM6IDYsIDQ6ICRWMCwgNTogJFYxLCA2OiAkVjIgfSwgbyhbMSwgNCwgNSwgMTUsIDE2LCAxOCwgMjEsIDIzLCAyNCwgMjUsIDI2LCAyNywgMjgsIDMyLCAzNCwgMzYsIDM3LCA0MSwgNDQsIDQ1LCA0NiwgNDcsIDUwXSwgJFYzLCB7IDc6IDcgfSksIHsgMTogWzIsIDFdIH0sIHsgMTogWzIsIDJdIH0sIHsgMTogWzIsIDNdLCA0OiAkVjQsIDU6ICRWNSwgODogOCwgOTogMTAsIDEwOiAxMiwgMTE6IDEzLCAxMjogMTQsIDE1OiAkVjYsIDE2OiAkVjcsIDE4OiAkVjgsIDIxOiAkVjksIDIzOiAkVmEsIDI0OiAkVmIsIDI1OiAkVmMsIDI2OiAkVmQsIDI3OiAkVmUsIDI4OiAkVmYsIDMxOiAyNCwgMzI6ICRWZywgMzQ6ICRWaCwgMzY6ICRWaSwgMzc6ICRWaiwgNDE6ICRWaywgNDQ6ICRWbCwgNDU6ICRWbSwgNDY6ICRWbiwgNDc6ICRWbywgNTA6ICRWcCB9LCBvKCRWcSwgWzIsIDVdKSwgeyA5OiAzNiwgMTA6IDEyLCAxMTogMTMsIDEyOiAxNCwgMTU6ICRWNiwgMTY6ICRWNywgMTg6ICRWOCwgMjE6ICRWOSwgMjM6ICRWYSwgMjQ6ICRWYiwgMjU6ICRWYywgMjY6ICRWZCwgMjc6ICRWZSwgMjg6ICRWZiwgMzE6IDI0LCAzMjogJFZnLCAzNDogJFZoLCAzNjogJFZpLCAzNzogJFZqLCA0MTogJFZrLCA0NDogJFZsLCA0NTogJFZtLCA0NjogJFZuLCA0NzogJFZvLCA1MDogJFZwIH0sIG8oJFZxLCBbMiwgN10pLCBvKCRWcSwgWzIsIDhdKSwgbygkVnEsIFsyLCA5XSksIG8oJFZxLCBbMiwgMTBdKSwgbygkVnEsIFsyLCAxMV0sIHsgMTM6IFsxLCAzN10sIDE0OiBbMSwgMzhdIH0pLCBvKCRWcSwgWzIsIDE1XSksIHsgMTc6IFsxLCAzOV0gfSwgbygkVnEsIFsyLCAxN10sIHsgMTk6IFsxLCA0MF0gfSksIHsgMjI6IFsxLCA0MV0gfSwgbygkVnEsIFsyLCAyMV0pLCBvKCRWcSwgWzIsIDIyXSksIG8oJFZxLCBbMiwgMjNdKSwgbygkVnEsIFsyLCAyNF0pLCB7IDI5OiA0MiwgMzA6IFsxLCA0M10sIDUyOiBbMSwgNDRdLCA1MzogWzEsIDQ1XSB9LCBvKCRWcSwgWzIsIDI3XSksIHsgMzM6IFsxLCA0Nl0gfSwgeyAzNTogWzEsIDQ3XSB9LCBvKCRWcSwgWzIsIDMwXSksIHsgMzg6IFsxLCA0OF0sIDQwOiBbMSwgNDldIH0sIHsgNDI6IFsxLCA1MF0gfSwgbygkVnIsIFsyLCA0MF0sIHsgNTE6IFsxLCA1MV0gfSksIG8oJFZyLCBbMiwgNDFdLCB7IDUxOiBbMSwgNTJdIH0pLCBvKCRWcSwgWzIsIDM0XSksIG8oJFZxLCBbMiwgMzVdKSwgbygkVnEsIFsyLCAzNl0pLCBvKCRWcSwgWzIsIDM3XSksIG8oJFZxLCBbMiwgNl0pLCBvKCRWcSwgWzIsIDEyXSksIHsgMTI6IDUzLCAyMzogJFZhLCA1MDogJFZwIH0sIG8oJFZxLCBbMiwgMTZdKSwgbygkVnMsICRWMywgeyA3OiA1NCB9KSwgeyAyMzogWzEsIDU1XSB9LCB7IDIzOiBbMSwgNTZdIH0sIHsgMjI6IFsxLCA1N10gfSwgeyAyMzogWzIsIDQ0XSB9LCB7IDIzOiBbMiwgNDVdIH0sIG8oJFZxLCBbMiwgMjhdKSwgbygkVnEsIFsyLCAyOV0pLCB7IDM5OiBbMSwgNThdIH0sIHsgMzk6IFsxLCA1OV0gfSwgeyA0MzogWzEsIDYwXSB9LCB7IDIzOiBbMSwgNjFdIH0sIHsgMjM6IFsxLCA2Ml0gfSwgbygkVnEsIFsyLCAxM10sIHsgMTM6IFsxLCA2M10gfSksIHsgNDogJFY0LCA1OiAkVjUsIDg6IDgsIDk6IDEwLCAxMDogMTIsIDExOiAxMywgMTI6IDE0LCAxNTogJFY2LCAxNjogJFY3LCAxODogJFY4LCAyMDogWzEsIDY0XSwgMjE6ICRWOSwgMjM6ICRWYSwgMjQ6ICRWYiwgMjU6ICRWYywgMjY6ICRWZCwgMjc6ICRWZSwgMjg6ICRWZiwgMzE6IDI0LCAzMjogJFZnLCAzNDogJFZoLCAzNjogJFZpLCAzNzogJFZqLCA0MTogJFZrLCA0NDogJFZsLCA0NTogJFZtLCA0NjogJFZuLCA0NzogJFZvLCA1MDogJFZwIH0sIG8oJFZxLCBbMiwgMTldLCB7IDE5OiBbMSwgNjVdIH0pLCB7IDMwOiBbMSwgNjZdIH0sIHsgMjM6IFsxLCA2N10gfSwgbygkVnEsIFsyLCAzMV0pLCBvKCRWcSwgWzIsIDMyXSksIG8oJFZxLCBbMiwgMzNdKSwgbygkVnIsIFsyLCA0Ml0pLCBvKCRWciwgWzIsIDQzXSksIG8oJFZxLCBbMiwgMTRdKSwgbygkVnEsIFsyLCAxOF0pLCBvKCRWcywgJFYzLCB7IDc6IDY4IH0pLCBvKCRWcSwgWzIsIDI1XSksIG8oJFZxLCBbMiwgMjZdKSwgeyA0OiAkVjQsIDU6ICRWNSwgODogOCwgOTogMTAsIDEwOiAxMiwgMTE6IDEzLCAxMjogMTQsIDE1OiAkVjYsIDE2OiAkVjcsIDE4OiAkVjgsIDIwOiBbMSwgNjldLCAyMTogJFY5LCAyMzogJFZhLCAyNDogJFZiLCAyNTogJFZjLCAyNjogJFZkLCAyNzogJFZlLCAyODogJFZmLCAzMTogMjQsIDMyOiAkVmcsIDM0OiAkVmgsIDM2OiAkVmksIDM3OiAkVmosIDQxOiAkVmssIDQ0OiAkVmwsIDQ1OiAkVm0sIDQ2OiAkVm4sIDQ3OiAkVm8sIDUwOiAkVnAgfSwgbygkVnEsIFsyLCAyMF0pXSxcbiAgICBkZWZhdWx0QWN0aW9uczogeyA1OiBbMiwgMV0sIDY6IFsyLCAyXSwgNDQ6IFsyLCA0NF0sIDQ1OiBbMiwgNDVdIH0sXG4gICAgcGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcbiAgICAgIGlmIChoYXNoLnJlY292ZXJhYmxlKSB7XG4gICAgICAgIHRoaXMudHJhY2Uoc3RyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihzdHIpO1xuICAgICAgICBlcnJvci5oYXNoID0gaGFzaDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcywgc3RhY2sgPSBbMF0sIHRzdGFjayA9IFtdLCB2c3RhY2sgPSBbbnVsbF0sIGxzdGFjayA9IFtdLCB0YWJsZSA9IHRoaXMudGFibGUsIHl5dGV4dCA9IFwiXCIsIHl5bGluZW5vID0gMCwgeXlsZW5nID0gMCwgVEVSUk9SID0gMiwgRU9GID0gMTtcbiAgICAgIHZhciBhcmdzID0gbHN0YWNrLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHZhciBsZXhlcjIgPSBPYmplY3QuY3JlYXRlKHRoaXMubGV4ZXIpO1xuICAgICAgdmFyIHNoYXJlZFN0YXRlID0geyB5eToge30gfTtcbiAgICAgIGZvciAodmFyIGsgaW4gdGhpcy55eSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMueXksIGspKSB7XG4gICAgICAgICAgc2hhcmVkU3RhdGUueXlba10gPSB0aGlzLnl5W2tdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXhlcjIuc2V0SW5wdXQoaW5wdXQsIHNoYXJlZFN0YXRlLnl5KTtcbiAgICAgIHNoYXJlZFN0YXRlLnl5LmxleGVyID0gbGV4ZXIyO1xuICAgICAgc2hhcmVkU3RhdGUueXkucGFyc2VyID0gdGhpcztcbiAgICAgIGlmICh0eXBlb2YgbGV4ZXIyLnl5bGxvYyA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGxleGVyMi55eWxsb2MgPSB7fTtcbiAgICAgIH1cbiAgICAgIHZhciB5eWxvYyA9IGxleGVyMi55eWxsb2M7XG4gICAgICBsc3RhY2sucHVzaCh5eWxvYyk7XG4gICAgICB2YXIgcmFuZ2VzID0gbGV4ZXIyLm9wdGlvbnMgJiYgbGV4ZXIyLm9wdGlvbnMucmFuZ2VzO1xuICAgICAgaWYgKHR5cGVvZiBzaGFyZWRTdGF0ZS55eS5wYXJzZUVycm9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhpcy5wYXJzZUVycm9yID0gc2hhcmVkU3RhdGUueXkucGFyc2VFcnJvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFyc2VFcnJvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZUVycm9yO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gbGV4KCkge1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHRva2VuID0gdHN0YWNrLnBvcCgpIHx8IGxleGVyMi5sZXgoKSB8fCBFT0Y7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBpZiAodG9rZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgdHN0YWNrID0gdG9rZW47XG4gICAgICAgICAgICB0b2tlbiA9IHRzdGFjay5wb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG9rZW4gPSBzZWxmLnN5bWJvbHNfW3Rva2VuXSB8fCB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICB9XG4gICAgICB2YXIgc3ltYm9sLCBzdGF0ZSwgYWN0aW9uLCByLCB5eXZhbCA9IHt9LCBwLCBsZW4sIG5ld1N0YXRlLCBleHBlY3RlZDtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHN0YXRlID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlXSkge1xuICAgICAgICAgIGFjdGlvbiA9IHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzeW1ib2wgPT09IG51bGwgfHwgdHlwZW9mIHN5bWJvbCA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBzeW1ib2wgPSBsZXgoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWN0aW9uID0gdGFibGVbc3RhdGVdICYmIHRhYmxlW3N0YXRlXVtzeW1ib2xdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSBcInVuZGVmaW5lZFwiIHx8ICFhY3Rpb24ubGVuZ3RoIHx8ICFhY3Rpb25bMF0pIHtcbiAgICAgICAgICB2YXIgZXJyU3RyID0gXCJcIjtcbiAgICAgICAgICBleHBlY3RlZCA9IFtdO1xuICAgICAgICAgIGZvciAocCBpbiB0YWJsZVtzdGF0ZV0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRlcm1pbmFsc19bcF0gJiYgcCA+IFRFUlJPUikge1xuICAgICAgICAgICAgICBleHBlY3RlZC5wdXNoKFwiJ1wiICsgdGhpcy50ZXJtaW5hbHNfW3BdICsgXCInXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobGV4ZXIyLnNob3dQb3NpdGlvbikge1xuICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjpcXG5cIiArIGxleGVyMi5zaG93UG9zaXRpb24oKSArIFwiXFxuRXhwZWN0aW5nIFwiICsgZXhwZWN0ZWQuam9pbihcIiwgXCIpICsgXCIsIGdvdCAnXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJTdHIgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoeXlsaW5lbm8gKyAxKSArIFwiOiBVbmV4cGVjdGVkIFwiICsgKHN5bWJvbCA9PSBFT0YgPyBcImVuZCBvZiBpbnB1dFwiIDogXCInXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wYXJzZUVycm9yKGVyclN0ciwge1xuICAgICAgICAgICAgdGV4dDogbGV4ZXIyLm1hdGNoLFxuICAgICAgICAgICAgdG9rZW46IHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCxcbiAgICAgICAgICAgIGxpbmU6IGxleGVyMi55eWxpbmVubyxcbiAgICAgICAgICAgIGxvYzogeXlsb2MsXG4gICAgICAgICAgICBleHBlY3RlZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rpb25bMF0gaW5zdGFuY2VvZiBBcnJheSAmJiBhY3Rpb24ubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcnNlIEVycm9yOiBtdWx0aXBsZSBhY3Rpb25zIHBvc3NpYmxlIGF0IHN0YXRlOiBcIiArIHN0YXRlICsgXCIsIHRva2VuOiBcIiArIHN5bWJvbCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChhY3Rpb25bMF0pIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBzdGFjay5wdXNoKHN5bWJvbCk7XG4gICAgICAgICAgICB2c3RhY2sucHVzaChsZXhlcjIueXl0ZXh0KTtcbiAgICAgICAgICAgIGxzdGFjay5wdXNoKGxleGVyMi55eWxsb2MpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChhY3Rpb25bMV0pO1xuICAgICAgICAgICAgc3ltYm9sID0gbnVsbDtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeXlsZW5nID0gbGV4ZXIyLnl5bGVuZztcbiAgICAgICAgICAgICAgeXl0ZXh0ID0gbGV4ZXIyLnl5dGV4dDtcbiAgICAgICAgICAgICAgeXlsaW5lbm8gPSBsZXhlcjIueXlsaW5lbm87XG4gICAgICAgICAgICAgIHl5bG9jID0gbGV4ZXIyLnl5bGxvYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxlbiA9IHRoaXMucHJvZHVjdGlvbnNfW2FjdGlvblsxXV1bMV07XG4gICAgICAgICAgICB5eXZhbC4kID0gdnN0YWNrW3ZzdGFjay5sZW5ndGggLSBsZW5dO1xuICAgICAgICAgICAgeXl2YWwuXyQgPSB7XG4gICAgICAgICAgICAgIGZpcnN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgbGFzdF9saW5lOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9jb2x1bW5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocmFuZ2VzKSB7XG4gICAgICAgICAgICAgIHl5dmFsLl8kLnJhbmdlID0gW1xuICAgICAgICAgICAgICAgIGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0ucmFuZ2VbMF0sXG4gICAgICAgICAgICAgICAgbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5yYW5nZVsxXVxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgciA9IHRoaXMucGVyZm9ybUFjdGlvbi5hcHBseSh5eXZhbCwgW1xuICAgICAgICAgICAgICB5eXRleHQsXG4gICAgICAgICAgICAgIHl5bGVuZyxcbiAgICAgICAgICAgICAgeXlsaW5lbm8sXG4gICAgICAgICAgICAgIHNoYXJlZFN0YXRlLnl5LFxuICAgICAgICAgICAgICBhY3Rpb25bMV0sXG4gICAgICAgICAgICAgIHZzdGFjayxcbiAgICAgICAgICAgICAgbHN0YWNrXG4gICAgICAgICAgICBdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIHN0YWNrID0gc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4gKiAyKTtcbiAgICAgICAgICAgICAgdnN0YWNrID0gdnN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcbiAgICAgICAgICAgICAgbHN0YWNrID0gbHN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YWNrLnB1c2godGhpcy5wcm9kdWN0aW9uc19bYWN0aW9uWzFdXVswXSk7XG4gICAgICAgICAgICB2c3RhY2sucHVzaCh5eXZhbC4kKTtcbiAgICAgICAgICAgIGxzdGFjay5wdXNoKHl5dmFsLl8kKTtcbiAgICAgICAgICAgIG5ld1N0YXRlID0gdGFibGVbc3RhY2tbc3RhY2subGVuZ3RoIC0gMl1dW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDFdXTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV3U3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbiAgdmFyIGxleGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxleGVyMiA9IHtcbiAgICAgIEVPRjogMSxcbiAgICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XG4gICAgICAgIGlmICh0aGlzLnl5LnBhcnNlcikge1xuICAgICAgICAgIHRoaXMueXkucGFyc2VyLnBhcnNlRXJyb3Ioc3RyLCBoYXNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJlc2V0cyB0aGUgbGV4ZXIsIHNldHMgbmV3IGlucHV0XG4gICAgICBzZXRJbnB1dDogZnVuY3Rpb24oaW5wdXQsIHl5KSB7XG4gICAgICAgIHRoaXMueXkgPSB5eSB8fCB0aGlzLnl5IHx8IHt9O1xuICAgICAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuICAgICAgICB0aGlzLl9tb3JlID0gdGhpcy5fYmFja3RyYWNrID0gdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDA7XG4gICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbXCJJTklUSUFMXCJdO1xuICAgICAgICB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogMCxcbiAgICAgICAgICBsYXN0X2xpbmU6IDEsXG4gICAgICAgICAgbGFzdF9jb2x1bW46IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFswLCAwXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIGNvbnN1bWVzIGFuZCByZXR1cm5zIG9uZSBjaGFyIGZyb20gdGhlIGlucHV0XG4gICAgICBpbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMuX2lucHV0WzBdO1xuICAgICAgICB0aGlzLnl5dGV4dCArPSBjaDtcbiAgICAgICAgdGhpcy55eWxlbmcrKztcbiAgICAgICAgdGhpcy5vZmZzZXQrKztcbiAgICAgICAgdGhpcy5tYXRjaCArPSBjaDtcbiAgICAgICAgdGhpcy5tYXRjaGVkICs9IGNoO1xuICAgICAgICB2YXIgbGluZXMgPSBjaC5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG4gICAgICAgIGlmIChsaW5lcykge1xuICAgICAgICAgIHRoaXMueXlsaW5lbm8rKztcbiAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2VbMV0rKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKDEpO1xuICAgICAgICByZXR1cm4gY2g7XG4gICAgICB9LFxuICAgICAgLy8gdW5zaGlmdHMgb25lIGNoYXIgKG9yIGEgc3RyaW5nKSBpbnRvIHRoZSBpbnB1dFxuICAgICAgdW5wdXQ6IGZ1bmN0aW9uKGNoKSB7XG4gICAgICAgIHZhciBsZW4gPSBjaC5sZW5ndGg7XG4gICAgICAgIHZhciBsaW5lcyA9IGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gY2ggKyB0aGlzLl9pbnB1dDtcbiAgICAgICAgdGhpcy55eXRleHQgPSB0aGlzLnl5dGV4dC5zdWJzdHIoMCwgdGhpcy55eXRleHQubGVuZ3RoIC0gbGVuKTtcbiAgICAgICAgdGhpcy5vZmZzZXQgLT0gbGVuO1xuICAgICAgICB2YXIgb2xkTGluZXMgPSB0aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMubWF0Y2ggPSB0aGlzLm1hdGNoLnN1YnN0cigwLCB0aGlzLm1hdGNoLmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSAxKTtcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLnl5bGluZW5vIC09IGxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSB0aGlzLnl5bGxvYy5yYW5nZTtcbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MuZmlyc3RfbGluZSxcbiAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiBsaW5lcyA/IChsaW5lcy5sZW5ndGggPT09IG9sZExpbmVzLmxlbmd0aCA/IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiA6IDApICsgb2xkTGluZXNbb2xkTGluZXMubGVuZ3RoIC0gbGluZXMubGVuZ3RoXS5sZW5ndGggLSBsaW5lc1swXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gLSBsZW5cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFtyWzBdLCByWzBdICsgdGhpcy55eWxlbmcgLSBsZW5dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBXaGVuIGNhbGxlZCBmcm9tIGFjdGlvbiwgY2FjaGVzIG1hdGNoZWQgdGV4dCBhbmQgYXBwZW5kcyBpdCBvbiBuZXh0IGFjdGlvblxuICAgICAgbW9yZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX21vcmUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBXaGVuIGNhbGxlZCBmcm9tIGFjdGlvbiwgc2lnbmFscyB0aGUgbGV4ZXIgdGhhdCB0aGlzIHJ1bGUgZmFpbHMgdG8gbWF0Y2ggdGhlIGlucHV0LCBzbyB0aGUgbmV4dCBtYXRjaGluZyBydWxlIChyZWdleCkgc2hvdWxkIGJlIHRlc3RlZCBpbnN0ZWFkLlxuICAgICAgcmVqZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFlvdSBjYW4gb25seSBpbnZva2UgcmVqZWN0KCkgaW4gdGhlIGxleGVyIHdoZW4gdGhlIGxleGVyIGlzIG9mIHRoZSBiYWNrdHJhY2tpbmcgcGVyc3Vhc2lvbiAob3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIgPSB0cnVlKS5cXG5cIiArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgIGxpbmU6IHRoaXMueXlsaW5lbm9cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyByZXRhaW4gZmlyc3QgbiBjaGFyYWN0ZXJzIG9mIHRoZSBtYXRjaFxuICAgICAgbGVzczogZnVuY3Rpb24obikge1xuICAgICAgICB0aGlzLnVucHV0KHRoaXMubWF0Y2guc2xpY2UobikpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIGFscmVhZHkgbWF0Y2hlZCBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHBhc3RJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwYXN0ID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gdGhpcy5tYXRjaC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gKHBhc3QubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikgKyBwYXN0LnN1YnN0cigtMjApLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sXG4gICAgICAvLyBkaXNwbGF5cyB1cGNvbWluZyBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHVwY29taW5nSW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbmV4dCA9IHRoaXMubWF0Y2g7XG4gICAgICAgIGlmIChuZXh0Lmxlbmd0aCA8IDIwKSB7XG4gICAgICAgICAgbmV4dCArPSB0aGlzLl9pbnB1dC5zdWJzdHIoMCwgMjAgLSBuZXh0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChuZXh0LnN1YnN0cigwLCAyMCkgKyAobmV4dC5sZW5ndGggPiAyMCA/IFwiLi4uXCIgOiBcIlwiKSkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIHRoZSBjaGFyYWN0ZXIgcG9zaXRpb24gd2hlcmUgdGhlIGxleGluZyBlcnJvciBvY2N1cnJlZCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHNob3dQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwcmUgPSB0aGlzLnBhc3RJbnB1dCgpO1xuICAgICAgICB2YXIgYyA9IG5ldyBBcnJheShwcmUubGVuZ3RoICsgMSkuam9pbihcIi1cIik7XG4gICAgICAgIHJldHVybiBwcmUgKyB0aGlzLnVwY29taW5nSW5wdXQoKSArIFwiXFxuXCIgKyBjICsgXCJeXCI7XG4gICAgICB9LFxuICAgICAgLy8gdGVzdCB0aGUgbGV4ZWQgdG9rZW46IHJldHVybiBGQUxTRSB3aGVuIG5vdCBhIG1hdGNoLCBvdGhlcndpc2UgcmV0dXJuIHRva2VuXG4gICAgICB0ZXN0X21hdGNoOiBmdW5jdGlvbihtYXRjaCwgaW5kZXhlZF9ydWxlKSB7XG4gICAgICAgIHZhciB0b2tlbiwgbGluZXMsIGJhY2t1cDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICBiYWNrdXAgPSB7XG4gICAgICAgICAgICB5eWxpbmVubzogdGhpcy55eWxpbmVubyxcbiAgICAgICAgICAgIHl5bGxvYzoge1xuICAgICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMubGFzdF9saW5lLFxuICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeXl0ZXh0OiB0aGlzLnl5dGV4dCxcbiAgICAgICAgICAgIG1hdGNoOiB0aGlzLm1hdGNoLFxuICAgICAgICAgICAgbWF0Y2hlczogdGhpcy5tYXRjaGVzLFxuICAgICAgICAgICAgbWF0Y2hlZDogdGhpcy5tYXRjaGVkLFxuICAgICAgICAgICAgeXlsZW5nOiB0aGlzLnl5bGVuZyxcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgICBfbW9yZTogdGhpcy5fbW9yZSxcbiAgICAgICAgICAgIF9pbnB1dDogdGhpcy5faW5wdXQsXG4gICAgICAgICAgICB5eTogdGhpcy55eSxcbiAgICAgICAgICAgIGNvbmRpdGlvblN0YWNrOiB0aGlzLmNvbmRpdGlvblN0YWNrLnNsaWNlKDApLFxuICAgICAgICAgICAgZG9uZTogdGhpcy5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgICAgYmFja3VwLnl5bGxvYy5yYW5nZSA9IHRoaXMueXlsbG9jLnJhbmdlLnNsaWNlKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsaW5lcyA9IG1hdGNoWzBdLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgaWYgKGxpbmVzKSB7XG4gICAgICAgICAgdGhpcy55eWxpbmVubyArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5sZW5ndGggLSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIG1hdGNoWzBdLmxlbmd0aFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnl5dGV4dCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gbWF0Y2g7XG4gICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3RoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZ107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9yZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICB0aGlzLm1hdGNoZWQgKz0gbWF0Y2hbMF07XG4gICAgICAgIHRva2VuID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodGhpcywgdGhpcy55eSwgdGhpcywgaW5kZXhlZF9ydWxlLCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pO1xuICAgICAgICBpZiAodGhpcy5kb25lICYmIHRoaXMuX2lucHV0KSB7XG4gICAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgIGZvciAodmFyIGsgaW4gYmFja3VwKSB7XG4gICAgICAgICAgICB0aGlzW2tdID0gYmFja3VwW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiBuZXh0IG1hdGNoIGluIGlucHV0XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lucHV0KSB7XG4gICAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG9rZW4sIG1hdGNoLCB0ZW1wTWF0Y2gsIGluZGV4O1xuICAgICAgICBpZiAoIXRoaXMuX21vcmUpIHtcbiAgICAgICAgICB0aGlzLnl5dGV4dCA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5tYXRjaCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJ1bGVzID0gdGhpcy5fY3VycmVudFJ1bGVzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0ZW1wTWF0Y2ggPSB0aGlzLl9pbnB1dC5tYXRjaCh0aGlzLnJ1bGVzW3J1bGVzW2ldXSk7XG4gICAgICAgICAgaWYgKHRlbXBNYXRjaCAmJiAoIW1hdGNoIHx8IHRlbXBNYXRjaFswXS5sZW5ndGggPiBtYXRjaFswXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBtYXRjaCA9IHRlbXBNYXRjaDtcbiAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgICAgIHRva2VuID0gdGhpcy50ZXN0X21hdGNoKHRlbXBNYXRjaCwgcnVsZXNbaV0pO1xuICAgICAgICAgICAgICBpZiAodG9rZW4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuZmxleCkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdG9rZW4gPSB0aGlzLnRlc3RfbWF0Y2gobWF0Y2gsIHJ1bGVzW2luZGV4XSk7XG4gICAgICAgICAgaWYgKHRva2VuICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lucHV0ID09PSBcIlwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFVucmVjb2duaXplZCB0ZXh0LlxcblwiICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggdGhhdCBoYXMgYSB0b2tlblxuICAgICAgbGV4OiBmdW5jdGlvbiBsZXgoKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5uZXh0KCk7XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubGV4KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBhY3RpdmF0ZXMgYSBuZXcgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIChwdXNoZXMgdGhlIG5ldyBsZXhlciBjb25kaXRpb24gc3RhdGUgb250byB0aGUgY29uZGl0aW9uIHN0YWNrKVxuICAgICAgYmVnaW46IGZ1bmN0aW9uIGJlZ2luKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrLnB1c2goY29uZGl0aW9uKTtcbiAgICAgIH0sXG4gICAgICAvLyBwb3AgdGhlIHByZXZpb3VzbHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvZmYgdGhlIGNvbmRpdGlvbiBzdGFja1xuICAgICAgcG9wU3RhdGU6IGZ1bmN0aW9uIHBvcFN0YXRlKCkge1xuICAgICAgICB2YXIgbiA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKG4gPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbMF07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBwcm9kdWNlIHRoZSBsZXhlciBydWxlIHNldCB3aGljaCBpcyBhY3RpdmUgZm9yIHRoZSBjdXJyZW50bHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZVxuICAgICAgX2N1cnJlbnRSdWxlczogZnVuY3Rpb24gX2N1cnJlbnRSdWxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoICYmIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbnNbdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdXS5ydWxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zW1wiSU5JVElBTFwiXS5ydWxlcztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGU7IHdoZW4gYW4gaW5kZXggYXJndW1lbnQgaXMgcHJvdmlkZWQgaXQgcHJvZHVjZXMgdGhlIE4tdGggcHJldmlvdXMgY29uZGl0aW9uIHN0YXRlLCBpZiBhdmFpbGFibGVcbiAgICAgIHRvcFN0YXRlOiBmdW5jdGlvbiB0b3BTdGF0ZShuKSB7XG4gICAgICAgIG4gPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDEgLSBNYXRoLmFicyhuIHx8IDApO1xuICAgICAgICBpZiAobiA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbbl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiSU5JVElBTFwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gYWxpYXMgZm9yIGJlZ2luKGNvbmRpdGlvbilcbiAgICAgIHB1c2hTdGF0ZTogZnVuY3Rpb24gcHVzaFN0YXRlKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmJlZ2luKGNvbmRpdGlvbik7XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIHRoZSBudW1iZXIgb2Ygc3RhdGVzIGN1cnJlbnRseSBvbiB0aGUgc3RhY2tcbiAgICAgIHN0YXRlU3RhY2tTaXplOiBmdW5jdGlvbiBzdGF0ZVN0YWNrU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoO1xuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHsgXCJjYXNlLWluc2Vuc2l0aXZlXCI6IHRydWUgfSxcbiAgICAgIHBlcmZvcm1BY3Rpb246IGZ1bmN0aW9uIGFub255bW91cyh5eSwgeXlfLCAkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zLCBZWV9TVEFSVCkge1xuICAgICAgICBzd2l0Y2ggKCRhdm9pZGluZ19uYW1lX2NvbGxpc2lvbnMpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gNDA7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIDQ0O1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiA0NTtcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gNDY7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuIDQ3O1xuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHJldHVybiA1O1xuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiU0NBTEVcIik7XG4gICAgICAgICAgICByZXR1cm4gMTY7XG4gICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIHJldHVybiAxNztcbiAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJhY2NfdGl0bGVcIik7XG4gICAgICAgICAgICByZXR1cm4gMzI7XG4gICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiBcImFjY190aXRsZV92YWx1ZVwiO1xuICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiYWNjX2Rlc2NyXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDM0O1xuICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfZGVzY3JfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImFjY19kZXNjcl9tdWx0aWxpbmVcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgIHJldHVybiBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJDTEFTU0RFRlwiKTtcbiAgICAgICAgICAgIHJldHVybiAzNztcbiAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJDTEFTU0RFRklEXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiREVGQVVMVF9DTEFTU0RFRl9JRFwiO1xuICAgICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIkNMQVNTREVGSURcIik7XG4gICAgICAgICAgICByZXR1cm4gMzg7XG4gICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiAzOTtcbiAgICAgICAgICBjYXNlIDI2OlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJDTEFTU1wiKTtcbiAgICAgICAgICAgIHJldHVybiA0MTtcbiAgICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJDTEFTU19TVFlMRVwiKTtcbiAgICAgICAgICAgIHJldHVybiA0MjtcbiAgICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIDQzO1xuICAgICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIlNDQUxFXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDE2O1xuICAgICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgICByZXR1cm4gMTc7XG4gICAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIlNUQVRFXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5Xy55eXRleHQgPSB5eV8ueXl0ZXh0LnNsaWNlKDAsIC04KS50cmltKCk7XG4gICAgICAgICAgICByZXR1cm4gMjQ7XG4gICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5Xy55eXRleHQgPSB5eV8ueXl0ZXh0LnNsaWNlKDAsIC04KS50cmltKCk7XG4gICAgICAgICAgICByZXR1cm4gMjU7XG4gICAgICAgICAgY2FzZSAzNTpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5Xy55eXRleHQgPSB5eV8ueXl0ZXh0LnNsaWNlKDAsIC0xMCkudHJpbSgpO1xuICAgICAgICAgICAgcmV0dXJuIDI2O1xuICAgICAgICAgIGNhc2UgMzY6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5zbGljZSgwLCAtOCkudHJpbSgpO1xuICAgICAgICAgICAgcmV0dXJuIDI0O1xuICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5zbGljZSgwLCAtOCkudHJpbSgpO1xuICAgICAgICAgICAgcmV0dXJuIDI1O1xuICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5zbGljZSgwLCAtMTApLnRyaW0oKTtcbiAgICAgICAgICAgIHJldHVybiAyNjtcbiAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgcmV0dXJuIDQ0O1xuICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICByZXR1cm4gNDU7XG4gICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgIHJldHVybiA0NjtcbiAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgcmV0dXJuIDQ3O1xuICAgICAgICAgIGNhc2UgNDM6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIlNUQVRFX1NUUklOR1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIlNUQVRFX0lEXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiQVNcIjtcbiAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFwiSURcIjtcbiAgICAgICAgICBjYXNlIDQ2OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgIHJldHVybiBcIlNUQVRFX0RFU0NSXCI7XG4gICAgICAgICAgY2FzZSA0ODpcbiAgICAgICAgICAgIHJldHVybiAxODtcbiAgICAgICAgICBjYXNlIDQ5OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA1MDpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwic3RydWN0XCIpO1xuICAgICAgICAgICAgcmV0dXJuIDE5O1xuICAgICAgICAgIGNhc2UgNTE6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDUyOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIDIwO1xuICAgICAgICAgIGNhc2UgNTM6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDU0OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcIk5PVEVcIik7XG4gICAgICAgICAgICByZXR1cm4gMjg7XG4gICAgICAgICAgY2FzZSA1NTpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTk9URV9JRFwiKTtcbiAgICAgICAgICAgIHJldHVybiA1MjtcbiAgICAgICAgICBjYXNlIDU2OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJOT1RFX0lEXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDUzO1xuICAgICAgICAgIGNhc2UgNTc6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIkZMT0FUSU5HX05PVEVcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJGTE9BVElOR19OT1RFX0lEXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiQVNcIjtcbiAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA2MDpcbiAgICAgICAgICAgIHJldHVybiBcIk5PVEVfVEVYVFwiO1xuICAgICAgICAgIGNhc2UgNjE6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gXCJJRFwiO1xuICAgICAgICAgIGNhc2UgNjI6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIk5PVEVfVEVYVFwiKTtcbiAgICAgICAgICAgIHJldHVybiAyMztcbiAgICAgICAgICBjYXNlIDYzOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHl5Xy55eXRleHQuc3Vic3RyKDIpLnRyaW0oKTtcbiAgICAgICAgICAgIHJldHVybiAzMDtcbiAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHl5Xy55eXRleHQuc2xpY2UoMCwgLTgpLnRyaW0oKTtcbiAgICAgICAgICAgIHJldHVybiAzMDtcbiAgICAgICAgICBjYXNlIDY1OlxuICAgICAgICAgICAgcmV0dXJuIDY7XG4gICAgICAgICAgY2FzZSA2NjpcbiAgICAgICAgICAgIHJldHVybiA2O1xuICAgICAgICAgIGNhc2UgNjc6XG4gICAgICAgICAgICByZXR1cm4gMTU7XG4gICAgICAgICAgY2FzZSA2ODpcbiAgICAgICAgICAgIHJldHVybiA1MDtcbiAgICAgICAgICBjYXNlIDY5OlxuICAgICAgICAgICAgcmV0dXJuIDIzO1xuICAgICAgICAgIGNhc2UgNzA6XG4gICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC50cmltKCk7XG4gICAgICAgICAgICByZXR1cm4gMTM7XG4gICAgICAgICAgY2FzZSA3MTpcbiAgICAgICAgICAgIHJldHVybiAxNDtcbiAgICAgICAgICBjYXNlIDcyOlxuICAgICAgICAgICAgcmV0dXJuIDI3O1xuICAgICAgICAgIGNhc2UgNzM6XG4gICAgICAgICAgICByZXR1cm4gNTE7XG4gICAgICAgICAgY2FzZSA3NDpcbiAgICAgICAgICAgIHJldHVybiA1O1xuICAgICAgICAgIGNhc2UgNzU6XG4gICAgICAgICAgICByZXR1cm4gXCJJTlZBTElEXCI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBydWxlczogWy9eKD86ZGVmYXVsdFxcYikvaSwgL14oPzouKmRpcmVjdGlvblxccytUQlteXFxuXSopL2ksIC9eKD86LipkaXJlY3Rpb25cXHMrQlRbXlxcbl0qKS9pLCAvXig/Oi4qZGlyZWN0aW9uXFxzK1JMW15cXG5dKikvaSwgL14oPzouKmRpcmVjdGlvblxccytMUlteXFxuXSopL2ksIC9eKD86JSUoPyFcXHspW15cXG5dKikvaSwgL14oPzpbXlxcfV0lJVteXFxuXSopL2ksIC9eKD86W1xcbl0rKS9pLCAvXig/OltcXHNdKykvaSwgL14oPzooKD8hXFxuKVxccykrKS9pLCAvXig/OiNbXlxcbl0qKS9pLCAvXig/OiVbXlxcbl0qKS9pLCAvXig/OnNjYWxlXFxzKykvaSwgL14oPzpcXGQrKS9pLCAvXig/Olxccyt3aWR0aFxcYikvaSwgL14oPzphY2NUaXRsZVxccyo6XFxzKikvaSwgL14oPzooPyFcXG58fCkqW15cXG5dKikvaSwgL14oPzphY2NEZXNjclxccyo6XFxzKikvaSwgL14oPzooPyFcXG58fCkqW15cXG5dKikvaSwgL14oPzphY2NEZXNjclxccypcXHtcXHMqKS9pLCAvXig/OltcXH1dKS9pLCAvXig/OlteXFx9XSopL2ksIC9eKD86Y2xhc3NEZWZcXHMrKS9pLCAvXig/OkRFRkFVTFRcXHMrKS9pLCAvXig/OlxcdytcXHMrKS9pLCAvXig/OlteXFxuXSopL2ksIC9eKD86Y2xhc3NcXHMrKS9pLCAvXig/OihcXHcrKSsoKCxcXHMqXFx3KykqKSkvaSwgL14oPzpbXlxcbl0qKS9pLCAvXig/OnNjYWxlXFxzKykvaSwgL14oPzpcXGQrKS9pLCAvXig/Olxccyt3aWR0aFxcYikvaSwgL14oPzpzdGF0ZVxccyspL2ksIC9eKD86Lio8PGZvcms+PikvaSwgL14oPzouKjw8am9pbj4+KS9pLCAvXig/Oi4qPDxjaG9pY2U+PikvaSwgL14oPzouKlxcW1xcW2ZvcmtcXF1cXF0pL2ksIC9eKD86LipcXFtcXFtqb2luXFxdXFxdKS9pLCAvXig/Oi4qXFxbXFxbY2hvaWNlXFxdXFxdKS9pLCAvXig/Oi4qZGlyZWN0aW9uXFxzK1RCW15cXG5dKikvaSwgL14oPzouKmRpcmVjdGlvblxccytCVFteXFxuXSopL2ksIC9eKD86LipkaXJlY3Rpb25cXHMrUkxbXlxcbl0qKS9pLCAvXig/Oi4qZGlyZWN0aW9uXFxzK0xSW15cXG5dKikvaSwgL14oPzpbXCJdKS9pLCAvXig/Olxccyphc1xccyspL2ksIC9eKD86W15cXG5cXHtdKikvaSwgL14oPzpbXCJdKS9pLCAvXig/OlteXCJdKikvaSwgL14oPzpbXlxcblxcc1xce10rKS9pLCAvXig/OlxcbikvaSwgL14oPzpcXHspL2ksIC9eKD86JSUoPyFcXHspW15cXG5dKikvaSwgL14oPzpcXH0pL2ksIC9eKD86W1xcbl0pL2ksIC9eKD86bm90ZVxccyspL2ksIC9eKD86bGVmdCBvZlxcYikvaSwgL14oPzpyaWdodCBvZlxcYikvaSwgL14oPzpcIikvaSwgL14oPzpcXHMqYXNcXHMqKS9pLCAvXig/OltcIl0pL2ksIC9eKD86W15cIl0qKS9pLCAvXig/OlteXFxuXSopL2ksIC9eKD86XFxzKlteOlxcblxcc1xcLV0rKS9pLCAvXig/Olxccyo6W146XFxuO10rKS9pLCAvXig/OltcXHNcXFNdKj9lbmQgbm90ZVxcYikvaSwgL14oPzpzdGF0ZURpYWdyYW1cXHMrKS9pLCAvXig/OnN0YXRlRGlhZ3JhbS12MlxccyspL2ksIC9eKD86aGlkZSBlbXB0eSBkZXNjcmlwdGlvblxcYikvaSwgL14oPzpcXFtcXCpcXF0pL2ksIC9eKD86W146XFxuXFxzXFwtXFx7XSspL2ksIC9eKD86XFxzKjpbXjpcXG47XSspL2ksIC9eKD86LS0+KS9pLCAvXig/Oi0tKS9pLCAvXig/Ojo6OikvaSwgL14oPzokKS9pLCAvXig/Oi4pL2ldLFxuICAgICAgY29uZGl0aW9uczogeyBcIkxJTkVcIjogeyBcInJ1bGVzXCI6IFs5LCAxMF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwic3RydWN0XCI6IHsgXCJydWxlc1wiOiBbOSwgMTAsIDIyLCAyNiwgMzIsIDM5LCA0MCwgNDEsIDQyLCA1MSwgNTIsIDUzLCA1NCwgNjgsIDY5LCA3MCwgNzEsIDcyXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJGTE9BVElOR19OT1RFX0lEXCI6IHsgXCJydWxlc1wiOiBbNjFdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIkZMT0FUSU5HX05PVEVcIjogeyBcInJ1bGVzXCI6IFs1OCwgNTksIDYwXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJOT1RFX1RFWFRcIjogeyBcInJ1bGVzXCI6IFs2MywgNjRdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIk5PVEVfSURcIjogeyBcInJ1bGVzXCI6IFs2Ml0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiTk9URVwiOiB7IFwicnVsZXNcIjogWzU1LCA1NiwgNTddLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIkNMQVNTX1NUWUxFXCI6IHsgXCJydWxlc1wiOiBbMjhdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIkNMQVNTXCI6IHsgXCJydWxlc1wiOiBbMjddLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIkNMQVNTREVGSURcIjogeyBcInJ1bGVzXCI6IFsyNV0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiQ0xBU1NERUZcIjogeyBcInJ1bGVzXCI6IFsyMywgMjRdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImFjY19kZXNjcl9tdWx0aWxpbmVcIjogeyBcInJ1bGVzXCI6IFsyMCwgMjFdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImFjY19kZXNjclwiOiB7IFwicnVsZXNcIjogWzE4XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJhY2NfdGl0bGVcIjogeyBcInJ1bGVzXCI6IFsxNl0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiU0NBTEVcIjogeyBcInJ1bGVzXCI6IFsxMywgMTQsIDMwLCAzMV0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiQUxJQVNcIjogeyBcInJ1bGVzXCI6IFtdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIlNUQVRFX0lEXCI6IHsgXCJydWxlc1wiOiBbNDVdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIlNUQVRFX1NUUklOR1wiOiB7IFwicnVsZXNcIjogWzQ2LCA0N10sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiRk9SS19TVEFURVwiOiB7IFwicnVsZXNcIjogW10sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiU1RBVEVcIjogeyBcInJ1bGVzXCI6IFs5LCAxMCwgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgNDMsIDQ0LCA0OCwgNDksIDUwXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJJRFwiOiB7IFwicnVsZXNcIjogWzksIDEwXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJJTklUSUFMXCI6IHsgXCJydWxlc1wiOiBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgMTAsIDExLCAxMiwgMTUsIDE3LCAxOSwgMjIsIDI2LCAyOSwgMzIsIDUwLCA1NCwgNjUsIDY2LCA2NywgNjgsIDY5LCA3MCwgNzEsIDczLCA3NCwgNzVdLCBcImluY2x1c2l2ZVwiOiB0cnVlIH0gfVxuICAgIH07XG4gICAgcmV0dXJuIGxleGVyMjtcbiAgfSgpO1xuICBwYXJzZXIyLmxleGVyID0gbGV4ZXI7XG4gIGZ1bmN0aW9uIFBhcnNlcigpIHtcbiAgICB0aGlzLnl5ID0ge307XG4gIH1cbiAgUGFyc2VyLnByb3RvdHlwZSA9IHBhcnNlcjI7XG4gIHBhcnNlcjIuUGFyc2VyID0gUGFyc2VyO1xuICByZXR1cm4gbmV3IFBhcnNlcigpO1xufSgpO1xucGFyc2VyLnBhcnNlciA9IHBhcnNlcjtcbmNvbnN0IHBhcnNlciQxID0gcGFyc2VyO1xuY29uc3QgREVGQVVMVF9ESUFHUkFNX0RJUkVDVElPTiA9IFwiTFJcIjtcbmNvbnN0IERFRkFVTFRfTkVTVEVEX0RPQ19ESVIgPSBcIlRCXCI7XG5jb25zdCBTVE1UX1NUQVRFID0gXCJzdGF0ZVwiO1xuY29uc3QgU1RNVF9SRUxBVElPTiA9IFwicmVsYXRpb25cIjtcbmNvbnN0IFNUTVRfQ0xBU1NERUYgPSBcImNsYXNzRGVmXCI7XG5jb25zdCBTVE1UX0FQUExZQ0xBU1MgPSBcImFwcGx5Q2xhc3NcIjtcbmNvbnN0IERFRkFVTFRfU1RBVEVfVFlQRSA9IFwiZGVmYXVsdFwiO1xuY29uc3QgRElWSURFUl9UWVBFID0gXCJkaXZpZGVyXCI7XG5jb25zdCBTVEFSVF9OT0RFID0gXCJbKl1cIjtcbmNvbnN0IFNUQVJUX1RZUEUgPSBcInN0YXJ0XCI7XG5jb25zdCBFTkRfTk9ERSA9IFNUQVJUX05PREU7XG5jb25zdCBFTkRfVFlQRSA9IFwiZW5kXCI7XG5jb25zdCBDT0xPUl9LRVlXT1JEID0gXCJjb2xvclwiO1xuY29uc3QgRklMTF9LRVlXT1JEID0gXCJmaWxsXCI7XG5jb25zdCBCR19GSUxMID0gXCJiZ0ZpbGxcIjtcbmNvbnN0IFNUWUxFQ0xBU1NfU0VQID0gXCIsXCI7XG5mdW5jdGlvbiBuZXdDbGFzc2VzTGlzdCgpIHtcbiAgcmV0dXJuIHt9O1xufVxubGV0IGRpcmVjdGlvbiA9IERFRkFVTFRfRElBR1JBTV9ESVJFQ1RJT047XG5sZXQgcm9vdERvYyA9IFtdO1xubGV0IGNsYXNzZXMgPSBuZXdDbGFzc2VzTGlzdCgpO1xuY29uc3QgbmV3RG9jID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHJlbGF0aW9uczogW10sXG4gICAgc3RhdGVzOiB7fSxcbiAgICBkb2N1bWVudHM6IHt9XG4gIH07XG59O1xubGV0IGRvY3VtZW50cyA9IHtcbiAgcm9vdDogbmV3RG9jKClcbn07XG5sZXQgY3VycmVudERvY3VtZW50ID0gZG9jdW1lbnRzLnJvb3Q7XG5sZXQgc3RhcnRFbmRDb3VudCA9IDA7XG5sZXQgZGl2aWRlckNudCA9IDA7XG5jb25zdCBsaW5lVHlwZSA9IHtcbiAgTElORTogMCxcbiAgRE9UVEVEX0xJTkU6IDFcbn07XG5jb25zdCByZWxhdGlvblR5cGUgPSB7XG4gIEFHR1JFR0FUSU9OOiAwLFxuICBFWFRFTlNJT046IDEsXG4gIENPTVBPU0lUSU9OOiAyLFxuICBERVBFTkRFTkNZOiAzXG59O1xuY29uc3QgY2xvbmUgPSAobykgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvKSk7XG5jb25zdCBzZXRSb290RG9jID0gKG8pID0+IHtcbiAgbG9nLmluZm8oXCJTZXR0aW5nIHJvb3QgZG9jXCIsIG8pO1xuICByb290RG9jID0gbztcbn07XG5jb25zdCBnZXRSb290RG9jID0gKCkgPT4gcm9vdERvYztcbmNvbnN0IGRvY1RyYW5zbGF0b3IgPSAocGFyZW50LCBub2RlLCBmaXJzdCkgPT4ge1xuICBpZiAobm9kZS5zdG10ID09PSBTVE1UX1JFTEFUSU9OKSB7XG4gICAgZG9jVHJhbnNsYXRvcihwYXJlbnQsIG5vZGUuc3RhdGUxLCB0cnVlKTtcbiAgICBkb2NUcmFuc2xhdG9yKHBhcmVudCwgbm9kZS5zdGF0ZTIsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAobm9kZS5zdG10ID09PSBTVE1UX1NUQVRFKSB7XG4gICAgICBpZiAobm9kZS5pZCA9PT0gXCJbKl1cIikge1xuICAgICAgICBub2RlLmlkID0gZmlyc3QgPyBwYXJlbnQuaWQgKyBcIl9zdGFydFwiIDogcGFyZW50LmlkICsgXCJfZW5kXCI7XG4gICAgICAgIG5vZGUuc3RhcnQgPSBmaXJzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUuaWQgPSBub2RlLmlkLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5vZGUuZG9jKSB7XG4gICAgICBjb25zdCBkb2MgPSBbXTtcbiAgICAgIGxldCBjdXJyZW50RG9jID0gW107XG4gICAgICBsZXQgaTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBub2RlLmRvYy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobm9kZS5kb2NbaV0udHlwZSA9PT0gRElWSURFUl9UWVBFKSB7XG4gICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IGNsb25lKG5vZGUuZG9jW2ldKTtcbiAgICAgICAgICBuZXdOb2RlLmRvYyA9IGNsb25lKGN1cnJlbnREb2MpO1xuICAgICAgICAgIGRvYy5wdXNoKG5ld05vZGUpO1xuICAgICAgICAgIGN1cnJlbnREb2MgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50RG9jLnB1c2gobm9kZS5kb2NbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZG9jLmxlbmd0aCA+IDAgJiYgY3VycmVudERvYy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSB7XG4gICAgICAgICAgc3RtdDogU1RNVF9TVEFURSxcbiAgICAgICAgICBpZDogZ2VuZXJhdGVJZCgpLFxuICAgICAgICAgIHR5cGU6IFwiZGl2aWRlclwiLFxuICAgICAgICAgIGRvYzogY2xvbmUoY3VycmVudERvYylcbiAgICAgICAgfTtcbiAgICAgICAgZG9jLnB1c2goY2xvbmUobmV3Tm9kZSkpO1xuICAgICAgICBub2RlLmRvYyA9IGRvYztcbiAgICAgIH1cbiAgICAgIG5vZGUuZG9jLmZvckVhY2goKGRvY05vZGUpID0+IGRvY1RyYW5zbGF0b3Iobm9kZSwgZG9jTm9kZSwgdHJ1ZSkpO1xuICAgIH1cbiAgfVxufTtcbmNvbnN0IGdldFJvb3REb2NWMiA9ICgpID0+IHtcbiAgZG9jVHJhbnNsYXRvcih7IGlkOiBcInJvb3RcIiB9LCB7IGlkOiBcInJvb3RcIiwgZG9jOiByb290RG9jIH0sIHRydWUpO1xuICByZXR1cm4geyBpZDogXCJyb290XCIsIGRvYzogcm9vdERvYyB9O1xufTtcbmNvbnN0IGV4dHJhY3QgPSAoX2RvYykgPT4ge1xuICBsZXQgZG9jO1xuICBpZiAoX2RvYy5kb2MpIHtcbiAgICBkb2MgPSBfZG9jLmRvYztcbiAgfSBlbHNlIHtcbiAgICBkb2MgPSBfZG9jO1xuICB9XG4gIGxvZy5pbmZvKGRvYyk7XG4gIGNsZWFyKHRydWUpO1xuICBsb2cuaW5mbyhcIkV4dHJhY3RcIiwgZG9jKTtcbiAgZG9jLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBzd2l0Y2ggKGl0ZW0uc3RtdCkge1xuICAgICAgY2FzZSBTVE1UX1NUQVRFOlxuICAgICAgICBhZGRTdGF0ZShcbiAgICAgICAgICBpdGVtLmlkLnRyaW0oKSxcbiAgICAgICAgICBpdGVtLnR5cGUsXG4gICAgICAgICAgaXRlbS5kb2MsXG4gICAgICAgICAgaXRlbS5kZXNjcmlwdGlvbixcbiAgICAgICAgICBpdGVtLm5vdGUsXG4gICAgICAgICAgaXRlbS5jbGFzc2VzLFxuICAgICAgICAgIGl0ZW0uc3R5bGVzLFxuICAgICAgICAgIGl0ZW0udGV4dFN0eWxlc1xuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU1RNVF9SRUxBVElPTjpcbiAgICAgICAgYWRkUmVsYXRpb24oaXRlbS5zdGF0ZTEsIGl0ZW0uc3RhdGUyLCBpdGVtLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNUTVRfQ0xBU1NERUY6XG4gICAgICAgIGFkZFN0eWxlQ2xhc3MoaXRlbS5pZC50cmltKCksIGl0ZW0uY2xhc3Nlcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTVE1UX0FQUExZQ0xBU1M6XG4gICAgICAgIHNldENzc0NsYXNzKGl0ZW0uaWQudHJpbSgpLCBpdGVtLnN0eWxlQ2xhc3MpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcbmNvbnN0IGFkZFN0YXRlID0gZnVuY3Rpb24oaWQsIHR5cGUgPSBERUZBVUxUX1NUQVRFX1RZUEUsIGRvYyA9IG51bGwsIGRlc2NyID0gbnVsbCwgbm90ZSA9IG51bGwsIGNsYXNzZXMyID0gbnVsbCwgc3R5bGVzMiA9IG51bGwsIHRleHRTdHlsZXMgPSBudWxsKSB7XG4gIGNvbnN0IHRyaW1tZWRJZCA9IGlkID09IG51bGwgPyB2b2lkIDAgOiBpZC50cmltKCk7XG4gIGlmIChjdXJyZW50RG9jdW1lbnQuc3RhdGVzW3RyaW1tZWRJZF0gPT09IHZvaWQgMCkge1xuICAgIGxvZy5pbmZvKFwiQWRkaW5nIHN0YXRlIFwiLCB0cmltbWVkSWQsIGRlc2NyKTtcbiAgICBjdXJyZW50RG9jdW1lbnQuc3RhdGVzW3RyaW1tZWRJZF0gPSB7XG4gICAgICBpZDogdHJpbW1lZElkLFxuICAgICAgZGVzY3JpcHRpb25zOiBbXSxcbiAgICAgIHR5cGUsXG4gICAgICBkb2MsXG4gICAgICBub3RlLFxuICAgICAgY2xhc3NlczogW10sXG4gICAgICBzdHlsZXM6IFtdLFxuICAgICAgdGV4dFN0eWxlczogW11cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGlmICghY3VycmVudERvY3VtZW50LnN0YXRlc1t0cmltbWVkSWRdLmRvYykge1xuICAgICAgY3VycmVudERvY3VtZW50LnN0YXRlc1t0cmltbWVkSWRdLmRvYyA9IGRvYztcbiAgICB9XG4gICAgaWYgKCFjdXJyZW50RG9jdW1lbnQuc3RhdGVzW3RyaW1tZWRJZF0udHlwZSkge1xuICAgICAgY3VycmVudERvY3VtZW50LnN0YXRlc1t0cmltbWVkSWRdLnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgfVxuICBpZiAoZGVzY3IpIHtcbiAgICBsb2cuaW5mbyhcIlNldHRpbmcgc3RhdGUgZGVzY3JpcHRpb25cIiwgdHJpbW1lZElkLCBkZXNjcik7XG4gICAgaWYgKHR5cGVvZiBkZXNjciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgYWRkRGVzY3JpcHRpb24odHJpbW1lZElkLCBkZXNjci50cmltKCkpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRlc2NyID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBkZXNjci5mb3JFYWNoKChkZXMpID0+IGFkZERlc2NyaXB0aW9uKHRyaW1tZWRJZCwgZGVzLnRyaW0oKSkpO1xuICAgIH1cbiAgfVxuICBpZiAobm90ZSkge1xuICAgIGN1cnJlbnREb2N1bWVudC5zdGF0ZXNbdHJpbW1lZElkXS5ub3RlID0gbm90ZTtcbiAgICBjdXJyZW50RG9jdW1lbnQuc3RhdGVzW3RyaW1tZWRJZF0ubm90ZS50ZXh0ID0gY29tbW9uLnNhbml0aXplVGV4dChcbiAgICAgIGN1cnJlbnREb2N1bWVudC5zdGF0ZXNbdHJpbW1lZElkXS5ub3RlLnRleHQsXG4gICAgICBnZXRDb25maWcoKVxuICAgICk7XG4gIH1cbiAgaWYgKGNsYXNzZXMyKSB7XG4gICAgbG9nLmluZm8oXCJTZXR0aW5nIHN0YXRlIGNsYXNzZXNcIiwgdHJpbW1lZElkLCBjbGFzc2VzMik7XG4gICAgY29uc3QgY2xhc3Nlc0xpc3QgPSB0eXBlb2YgY2xhc3NlczIgPT09IFwic3RyaW5nXCIgPyBbY2xhc3NlczJdIDogY2xhc3NlczI7XG4gICAgY2xhc3Nlc0xpc3QuZm9yRWFjaCgoY3NzQ2xhc3MpID0+IHNldENzc0NsYXNzKHRyaW1tZWRJZCwgY3NzQ2xhc3MudHJpbSgpKSk7XG4gIH1cbiAgaWYgKHN0eWxlczIpIHtcbiAgICBsb2cuaW5mbyhcIlNldHRpbmcgc3RhdGUgc3R5bGVzXCIsIHRyaW1tZWRJZCwgc3R5bGVzMik7XG4gICAgY29uc3Qgc3R5bGVzTGlzdCA9IHR5cGVvZiBzdHlsZXMyID09PSBcInN0cmluZ1wiID8gW3N0eWxlczJdIDogc3R5bGVzMjtcbiAgICBzdHlsZXNMaXN0LmZvckVhY2goKHN0eWxlKSA9PiBzZXRTdHlsZSh0cmltbWVkSWQsIHN0eWxlLnRyaW0oKSkpO1xuICB9XG4gIGlmICh0ZXh0U3R5bGVzKSB7XG4gICAgbG9nLmluZm8oXCJTZXR0aW5nIHN0YXRlIHN0eWxlc1wiLCB0cmltbWVkSWQsIHN0eWxlczIpO1xuICAgIGNvbnN0IHRleHRTdHlsZXNMaXN0ID0gdHlwZW9mIHRleHRTdHlsZXMgPT09IFwic3RyaW5nXCIgPyBbdGV4dFN0eWxlc10gOiB0ZXh0U3R5bGVzO1xuICAgIHRleHRTdHlsZXNMaXN0LmZvckVhY2goKHRleHRTdHlsZSkgPT4gc2V0VGV4dFN0eWxlKHRyaW1tZWRJZCwgdGV4dFN0eWxlLnRyaW0oKSkpO1xuICB9XG59O1xuY29uc3QgY2xlYXIgPSBmdW5jdGlvbihzYXZlQ29tbW9uKSB7XG4gIGRvY3VtZW50cyA9IHtcbiAgICByb290OiBuZXdEb2MoKVxuICB9O1xuICBjdXJyZW50RG9jdW1lbnQgPSBkb2N1bWVudHMucm9vdDtcbiAgc3RhcnRFbmRDb3VudCA9IDA7XG4gIGNsYXNzZXMgPSBuZXdDbGFzc2VzTGlzdCgpO1xuICBpZiAoIXNhdmVDb21tb24pIHtcbiAgICBjbGVhciQxKCk7XG4gIH1cbn07XG5jb25zdCBnZXRTdGF0ZSA9IGZ1bmN0aW9uKGlkKSB7XG4gIHJldHVybiBjdXJyZW50RG9jdW1lbnQuc3RhdGVzW2lkXTtcbn07XG5jb25zdCBnZXRTdGF0ZXMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGN1cnJlbnREb2N1bWVudC5zdGF0ZXM7XG59O1xuY29uc3QgbG9nRG9jdW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gIGxvZy5pbmZvKFwiRG9jdW1lbnRzID0gXCIsIGRvY3VtZW50cyk7XG59O1xuY29uc3QgZ2V0UmVsYXRpb25zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBjdXJyZW50RG9jdW1lbnQucmVsYXRpb25zO1xufTtcbmZ1bmN0aW9uIHN0YXJ0SWRJZk5lZWRlZChpZCA9IFwiXCIpIHtcbiAgbGV0IGZpeGVkSWQgPSBpZDtcbiAgaWYgKGlkID09PSBTVEFSVF9OT0RFKSB7XG4gICAgc3RhcnRFbmRDb3VudCsrO1xuICAgIGZpeGVkSWQgPSBgJHtTVEFSVF9UWVBFfSR7c3RhcnRFbmRDb3VudH1gO1xuICB9XG4gIHJldHVybiBmaXhlZElkO1xufVxuZnVuY3Rpb24gc3RhcnRUeXBlSWZOZWVkZWQoaWQgPSBcIlwiLCB0eXBlID0gREVGQVVMVF9TVEFURV9UWVBFKSB7XG4gIHJldHVybiBpZCA9PT0gU1RBUlRfTk9ERSA/IFNUQVJUX1RZUEUgOiB0eXBlO1xufVxuZnVuY3Rpb24gZW5kSWRJZk5lZWRlZChpZCA9IFwiXCIpIHtcbiAgbGV0IGZpeGVkSWQgPSBpZDtcbiAgaWYgKGlkID09PSBFTkRfTk9ERSkge1xuICAgIHN0YXJ0RW5kQ291bnQrKztcbiAgICBmaXhlZElkID0gYCR7RU5EX1RZUEV9JHtzdGFydEVuZENvdW50fWA7XG4gIH1cbiAgcmV0dXJuIGZpeGVkSWQ7XG59XG5mdW5jdGlvbiBlbmRUeXBlSWZOZWVkZWQoaWQgPSBcIlwiLCB0eXBlID0gREVGQVVMVF9TVEFURV9UWVBFKSB7XG4gIHJldHVybiBpZCA9PT0gRU5EX05PREUgPyBFTkRfVFlQRSA6IHR5cGU7XG59XG5mdW5jdGlvbiBhZGRSZWxhdGlvbk9ianMoaXRlbTEsIGl0ZW0yLCByZWxhdGlvblRpdGxlKSB7XG4gIGxldCBpZDEgPSBzdGFydElkSWZOZWVkZWQoaXRlbTEuaWQudHJpbSgpKTtcbiAgbGV0IHR5cGUxID0gc3RhcnRUeXBlSWZOZWVkZWQoaXRlbTEuaWQudHJpbSgpLCBpdGVtMS50eXBlKTtcbiAgbGV0IGlkMiA9IHN0YXJ0SWRJZk5lZWRlZChpdGVtMi5pZC50cmltKCkpO1xuICBsZXQgdHlwZTIgPSBzdGFydFR5cGVJZk5lZWRlZChpdGVtMi5pZC50cmltKCksIGl0ZW0yLnR5cGUpO1xuICBhZGRTdGF0ZShcbiAgICBpZDEsXG4gICAgdHlwZTEsXG4gICAgaXRlbTEuZG9jLFxuICAgIGl0ZW0xLmRlc2NyaXB0aW9uLFxuICAgIGl0ZW0xLm5vdGUsXG4gICAgaXRlbTEuY2xhc3NlcyxcbiAgICBpdGVtMS5zdHlsZXMsXG4gICAgaXRlbTEudGV4dFN0eWxlc1xuICApO1xuICBhZGRTdGF0ZShcbiAgICBpZDIsXG4gICAgdHlwZTIsXG4gICAgaXRlbTIuZG9jLFxuICAgIGl0ZW0yLmRlc2NyaXB0aW9uLFxuICAgIGl0ZW0yLm5vdGUsXG4gICAgaXRlbTIuY2xhc3NlcyxcbiAgICBpdGVtMi5zdHlsZXMsXG4gICAgaXRlbTIudGV4dFN0eWxlc1xuICApO1xuICBjdXJyZW50RG9jdW1lbnQucmVsYXRpb25zLnB1c2goe1xuICAgIGlkMSxcbiAgICBpZDIsXG4gICAgcmVsYXRpb25UaXRsZTogY29tbW9uLnNhbml0aXplVGV4dChyZWxhdGlvblRpdGxlLCBnZXRDb25maWcoKSlcbiAgfSk7XG59XG5jb25zdCBhZGRSZWxhdGlvbiA9IGZ1bmN0aW9uKGl0ZW0xLCBpdGVtMiwgdGl0bGUpIHtcbiAgaWYgKHR5cGVvZiBpdGVtMSA9PT0gXCJvYmplY3RcIikge1xuICAgIGFkZFJlbGF0aW9uT2JqcyhpdGVtMSwgaXRlbTIsIHRpdGxlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBpZDEgPSBzdGFydElkSWZOZWVkZWQoaXRlbTEudHJpbSgpKTtcbiAgICBjb25zdCB0eXBlMSA9IHN0YXJ0VHlwZUlmTmVlZGVkKGl0ZW0xKTtcbiAgICBjb25zdCBpZDIgPSBlbmRJZElmTmVlZGVkKGl0ZW0yLnRyaW0oKSk7XG4gICAgY29uc3QgdHlwZTIgPSBlbmRUeXBlSWZOZWVkZWQoaXRlbTIpO1xuICAgIGFkZFN0YXRlKGlkMSwgdHlwZTEpO1xuICAgIGFkZFN0YXRlKGlkMiwgdHlwZTIpO1xuICAgIGN1cnJlbnREb2N1bWVudC5yZWxhdGlvbnMucHVzaCh7XG4gICAgICBpZDEsXG4gICAgICBpZDIsXG4gICAgICB0aXRsZTogY29tbW9uLnNhbml0aXplVGV4dCh0aXRsZSwgZ2V0Q29uZmlnKCkpXG4gICAgfSk7XG4gIH1cbn07XG5jb25zdCBhZGREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKGlkLCBkZXNjcikge1xuICBjb25zdCB0aGVTdGF0ZSA9IGN1cnJlbnREb2N1bWVudC5zdGF0ZXNbaWRdO1xuICBjb25zdCBfZGVzY3IgPSBkZXNjci5zdGFydHNXaXRoKFwiOlwiKSA/IGRlc2NyLnJlcGxhY2UoXCI6XCIsIFwiXCIpLnRyaW0oKSA6IGRlc2NyO1xuICB0aGVTdGF0ZS5kZXNjcmlwdGlvbnMucHVzaChjb21tb24uc2FuaXRpemVUZXh0KF9kZXNjciwgZ2V0Q29uZmlnKCkpKTtcbn07XG5jb25zdCBjbGVhbnVwTGFiZWwgPSBmdW5jdGlvbihsYWJlbCkge1xuICBpZiAobGFiZWwuc3Vic3RyaW5nKDAsIDEpID09PSBcIjpcIikge1xuICAgIHJldHVybiBsYWJlbC5zdWJzdHIoMikudHJpbSgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsYWJlbC50cmltKCk7XG4gIH1cbn07XG5jb25zdCBnZXREaXZpZGVySWQgPSAoKSA9PiB7XG4gIGRpdmlkZXJDbnQrKztcbiAgcmV0dXJuIFwiZGl2aWRlci1pZC1cIiArIGRpdmlkZXJDbnQ7XG59O1xuY29uc3QgYWRkU3R5bGVDbGFzcyA9IGZ1bmN0aW9uKGlkLCBzdHlsZUF0dHJpYnV0ZXMgPSBcIlwiKSB7XG4gIGlmIChjbGFzc2VzW2lkXSA9PT0gdm9pZCAwKSB7XG4gICAgY2xhc3Nlc1tpZF0gPSB7IGlkLCBzdHlsZXM6IFtdLCB0ZXh0U3R5bGVzOiBbXSB9O1xuICB9XG4gIGNvbnN0IGZvdW5kQ2xhc3MgPSBjbGFzc2VzW2lkXTtcbiAgaWYgKHN0eWxlQXR0cmlidXRlcyAhPT0gdm9pZCAwICYmIHN0eWxlQXR0cmlidXRlcyAhPT0gbnVsbCkge1xuICAgIHN0eWxlQXR0cmlidXRlcy5zcGxpdChTVFlMRUNMQVNTX1NFUCkuZm9yRWFjaCgoYXR0cmliKSA9PiB7XG4gICAgICBjb25zdCBmaXhlZEF0dHJpYiA9IGF0dHJpYi5yZXBsYWNlKC8oW147XSopOy8sIFwiJDFcIikudHJpbSgpO1xuICAgICAgaWYgKGF0dHJpYi5tYXRjaChDT0xPUl9LRVlXT1JEKSkge1xuICAgICAgICBjb25zdCBuZXdTdHlsZTEgPSBmaXhlZEF0dHJpYi5yZXBsYWNlKEZJTExfS0VZV09SRCwgQkdfRklMTCk7XG4gICAgICAgIGNvbnN0IG5ld1N0eWxlMiA9IG5ld1N0eWxlMS5yZXBsYWNlKENPTE9SX0tFWVdPUkQsIEZJTExfS0VZV09SRCk7XG4gICAgICAgIGZvdW5kQ2xhc3MudGV4dFN0eWxlcy5wdXNoKG5ld1N0eWxlMik7XG4gICAgICB9XG4gICAgICBmb3VuZENsYXNzLnN0eWxlcy5wdXNoKGZpeGVkQXR0cmliKTtcbiAgICB9KTtcbiAgfVxufTtcbmNvbnN0IGdldENsYXNzZXMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGNsYXNzZXM7XG59O1xuY29uc3Qgc2V0Q3NzQ2xhc3MgPSBmdW5jdGlvbihpdGVtSWRzLCBjc3NDbGFzc05hbWUpIHtcbiAgaXRlbUlkcy5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbihpZCkge1xuICAgIGxldCBmb3VuZFN0YXRlID0gZ2V0U3RhdGUoaWQpO1xuICAgIGlmIChmb3VuZFN0YXRlID09PSB2b2lkIDApIHtcbiAgICAgIGNvbnN0IHRyaW1tZWRJZCA9IGlkLnRyaW0oKTtcbiAgICAgIGFkZFN0YXRlKHRyaW1tZWRJZCk7XG4gICAgICBmb3VuZFN0YXRlID0gZ2V0U3RhdGUodHJpbW1lZElkKTtcbiAgICB9XG4gICAgZm91bmRTdGF0ZS5jbGFzc2VzLnB1c2goY3NzQ2xhc3NOYW1lKTtcbiAgfSk7XG59O1xuY29uc3Qgc2V0U3R5bGUgPSBmdW5jdGlvbihpdGVtSWQsIHN0eWxlVGV4dCkge1xuICBjb25zdCBpdGVtID0gZ2V0U3RhdGUoaXRlbUlkKTtcbiAgaWYgKGl0ZW0gIT09IHZvaWQgMCkge1xuICAgIGl0ZW0udGV4dFN0eWxlcy5wdXNoKHN0eWxlVGV4dCk7XG4gIH1cbn07XG5jb25zdCBzZXRUZXh0U3R5bGUgPSBmdW5jdGlvbihpdGVtSWQsIGNzc0NsYXNzTmFtZSkge1xuICBjb25zdCBpdGVtID0gZ2V0U3RhdGUoaXRlbUlkKTtcbiAgaWYgKGl0ZW0gIT09IHZvaWQgMCkge1xuICAgIGl0ZW0udGV4dFN0eWxlcy5wdXNoKGNzc0NsYXNzTmFtZSk7XG4gIH1cbn07XG5jb25zdCBnZXREaXJlY3Rpb24gPSAoKSA9PiBkaXJlY3Rpb247XG5jb25zdCBzZXREaXJlY3Rpb24gPSAoZGlyKSA9PiB7XG4gIGRpcmVjdGlvbiA9IGRpcjtcbn07XG5jb25zdCB0cmltQ29sb24gPSAoc3RyKSA9PiBzdHIgJiYgc3RyWzBdID09PSBcIjpcIiA/IHN0ci5zdWJzdHIoMSkudHJpbSgpIDogc3RyLnRyaW0oKTtcbmNvbnN0IGRiID0ge1xuICBnZXRDb25maWc6ICgpID0+IGdldENvbmZpZygpLnN0YXRlLFxuICBhZGRTdGF0ZSxcbiAgY2xlYXIsXG4gIGdldFN0YXRlLFxuICBnZXRTdGF0ZXMsXG4gIGdldFJlbGF0aW9ucyxcbiAgZ2V0Q2xhc3NlcyxcbiAgZ2V0RGlyZWN0aW9uLFxuICBhZGRSZWxhdGlvbixcbiAgZ2V0RGl2aWRlcklkLFxuICBzZXREaXJlY3Rpb24sXG4gIGNsZWFudXBMYWJlbCxcbiAgbGluZVR5cGUsXG4gIHJlbGF0aW9uVHlwZSxcbiAgbG9nRG9jdW1lbnRzLFxuICBnZXRSb290RG9jLFxuICBzZXRSb290RG9jLFxuICBnZXRSb290RG9jVjIsXG4gIGV4dHJhY3QsXG4gIHRyaW1Db2xvbixcbiAgZ2V0QWNjVGl0bGUsXG4gIHNldEFjY1RpdGxlLFxuICBnZXRBY2NEZXNjcmlwdGlvbixcbiAgc2V0QWNjRGVzY3JpcHRpb24sXG4gIGFkZFN0eWxlQ2xhc3MsXG4gIHNldENzc0NsYXNzLFxuICBhZGREZXNjcmlwdGlvbixcbiAgc2V0RGlhZ3JhbVRpdGxlLFxuICBnZXREaWFncmFtVGl0bGVcbn07XG5jb25zdCBnZXRTdHlsZXMgPSAob3B0aW9ucykgPT4gYFxuZGVmcyAjc3RhdGVkaWFncmFtLWJhcmJFbmQge1xuICAgIGZpbGw6ICR7b3B0aW9ucy50cmFuc2l0aW9uQ29sb3J9O1xuICAgIHN0cm9rZTogJHtvcHRpb25zLnRyYW5zaXRpb25Db2xvcn07XG4gIH1cbmcuc3RhdGVHcm91cCB0ZXh0IHtcbiAgZmlsbDogJHtvcHRpb25zLm5vZGVCb3JkZXJ9O1xuICBzdHJva2U6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbmcuc3RhdGVHcm91cCB0ZXh0IHtcbiAgZmlsbDogJHtvcHRpb25zLnRleHRDb2xvcn07XG4gIHN0cm9rZTogbm9uZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuXG59XG5nLnN0YXRlR3JvdXAgLnN0YXRlLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZmlsbDogJHtvcHRpb25zLnN0YXRlTGFiZWxDb2xvcn07XG59XG5cbmcuc3RhdGVHcm91cCByZWN0IHtcbiAgZmlsbDogJHtvcHRpb25zLm1haW5Ca2d9O1xuICBzdHJva2U6ICR7b3B0aW9ucy5ub2RlQm9yZGVyfTtcbn1cblxuZy5zdGF0ZUdyb3VwIGxpbmUge1xuICBzdHJva2U6ICR7b3B0aW9ucy5saW5lQ29sb3J9O1xuICBzdHJva2Utd2lkdGg6IDE7XG59XG5cbi50cmFuc2l0aW9uIHtcbiAgc3Ryb2tlOiAke29wdGlvbnMudHJhbnNpdGlvbkNvbG9yfTtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xuICBmaWxsOiBub25lO1xufVxuXG4uc3RhdGVHcm91cCAuY29tcG9zaXQge1xuICBmaWxsOiAke29wdGlvbnMuYmFja2dyb3VuZH07XG4gIGJvcmRlci1ib3R0b206IDFweFxufVxuXG4uc3RhdGVHcm91cCAuYWx0LWNvbXBvc2l0IHtcbiAgZmlsbDogI2UwZTBlMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4XG59XG5cbi5zdGF0ZS1ub3RlIHtcbiAgc3Ryb2tlOiAke29wdGlvbnMubm90ZUJvcmRlckNvbG9yfTtcbiAgZmlsbDogJHtvcHRpb25zLm5vdGVCa2dDb2xvcn07XG5cbiAgdGV4dCB7XG4gICAgZmlsbDogJHtvcHRpb25zLm5vdGVUZXh0Q29sb3J9O1xuICAgIHN0cm9rZTogbm9uZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cblxuLnN0YXRlTGFiZWwgLmJveCB7XG4gIHN0cm9rZTogbm9uZTtcbiAgc3Ryb2tlLXdpZHRoOiAwO1xuICBmaWxsOiAke29wdGlvbnMubWFpbkJrZ307XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmVkZ2VMYWJlbCAubGFiZWwgcmVjdCB7XG4gIGZpbGw6ICR7b3B0aW9ucy5sYWJlbEJhY2tncm91bmRDb2xvcn07XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5lZGdlTGFiZWwgLmxhYmVsIHRleHQge1xuICBmaWxsOiAke29wdGlvbnMudHJhbnNpdGlvbkxhYmVsQ29sb3IgfHwgb3B0aW9ucy50ZXJ0aWFyeVRleHRDb2xvcn07XG59XG4ubGFiZWwgZGl2IC5lZGdlTGFiZWwge1xuICBjb2xvcjogJHtvcHRpb25zLnRyYW5zaXRpb25MYWJlbENvbG9yIHx8IG9wdGlvbnMudGVydGlhcnlUZXh0Q29sb3J9O1xufVxuXG4uc3RhdGVMYWJlbCB0ZXh0IHtcbiAgZmlsbDogJHtvcHRpb25zLnN0YXRlTGFiZWxDb2xvcn07XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ub2RlIGNpcmNsZS5zdGF0ZS1zdGFydCB7XG4gIGZpbGw6ICR7b3B0aW9ucy5zcGVjaWFsU3RhdGVDb2xvcn07XG4gIHN0cm9rZTogJHtvcHRpb25zLnNwZWNpYWxTdGF0ZUNvbG9yfTtcbn1cblxuLm5vZGUgLmZvcmstam9pbiB7XG4gIGZpbGw6ICR7b3B0aW9ucy5zcGVjaWFsU3RhdGVDb2xvcn07XG4gIHN0cm9rZTogJHtvcHRpb25zLnNwZWNpYWxTdGF0ZUNvbG9yfTtcbn1cblxuLm5vZGUgY2lyY2xlLnN0YXRlLWVuZCB7XG4gIGZpbGw6ICR7b3B0aW9ucy5pbm5lckVuZEJhY2tncm91bmR9O1xuICBzdHJva2U6ICR7b3B0aW9ucy5iYWNrZ3JvdW5kfTtcbiAgc3Ryb2tlLXdpZHRoOiAxLjVcbn1cbi5lbmQtc3RhdGUtaW5uZXIge1xuICBmaWxsOiAke29wdGlvbnMuY29tcG9zaXRlQmFja2dyb3VuZCB8fCBvcHRpb25zLmJhY2tncm91bmR9O1xuICAvLyBzdHJva2U6ICR7b3B0aW9ucy5iYWNrZ3JvdW5kfTtcbiAgc3Ryb2tlLXdpZHRoOiAxLjVcbn1cblxuLm5vZGUgcmVjdCB7XG4gIGZpbGw6ICR7b3B0aW9ucy5zdGF0ZUJrZyB8fCBvcHRpb25zLm1haW5Ca2d9O1xuICBzdHJva2U6ICR7b3B0aW9ucy5zdGF0ZUJvcmRlciB8fCBvcHRpb25zLm5vZGVCb3JkZXJ9O1xuICBzdHJva2Utd2lkdGg6IDFweDtcbn1cbi5ub2RlIHBvbHlnb24ge1xuICBmaWxsOiAke29wdGlvbnMubWFpbkJrZ307XG4gIHN0cm9rZTogJHtvcHRpb25zLnN0YXRlQm9yZGVyIHx8IG9wdGlvbnMubm9kZUJvcmRlcn07O1xuICBzdHJva2Utd2lkdGg6IDFweDtcbn1cbiNzdGF0ZWRpYWdyYW0tYmFyYkVuZCB7XG4gIGZpbGw6ICR7b3B0aW9ucy5saW5lQ29sb3J9O1xufVxuXG4uc3RhdGVkaWFncmFtLWNsdXN0ZXIgcmVjdCB7XG4gIGZpbGw6ICR7b3B0aW9ucy5jb21wb3NpdGVUaXRsZUJhY2tncm91bmR9O1xuICBzdHJva2U6ICR7b3B0aW9ucy5zdGF0ZUJvcmRlciB8fCBvcHRpb25zLm5vZGVCb3JkZXJ9O1xuICBzdHJva2Utd2lkdGg6IDFweDtcbn1cblxuLmNsdXN0ZXItbGFiZWwsIC5ub2RlTGFiZWwge1xuICBjb2xvcjogJHtvcHRpb25zLnN0YXRlTGFiZWxDb2xvcn07XG59XG5cbi5zdGF0ZWRpYWdyYW0tY2x1c3RlciByZWN0Lm91dGVyIHtcbiAgcng6IDVweDtcbiAgcnk6IDVweDtcbn1cbi5zdGF0ZWRpYWdyYW0tc3RhdGUgLmRpdmlkZXIge1xuICBzdHJva2U6ICR7b3B0aW9ucy5zdGF0ZUJvcmRlciB8fCBvcHRpb25zLm5vZGVCb3JkZXJ9O1xufVxuXG4uc3RhdGVkaWFncmFtLXN0YXRlIC50aXRsZS1zdGF0ZSB7XG4gIHJ4OiA1cHg7XG4gIHJ5OiA1cHg7XG59XG4uc3RhdGVkaWFncmFtLWNsdXN0ZXIuc3RhdGVkaWFncmFtLWNsdXN0ZXIgLmlubmVyIHtcbiAgZmlsbDogJHtvcHRpb25zLmNvbXBvc2l0ZUJhY2tncm91bmQgfHwgb3B0aW9ucy5iYWNrZ3JvdW5kfTtcbn1cbi5zdGF0ZWRpYWdyYW0tY2x1c3Rlci5zdGF0ZWRpYWdyYW0tY2x1c3Rlci1hbHQgLmlubmVyIHtcbiAgZmlsbDogJHtvcHRpb25zLmFsdEJhY2tncm91bmQgPyBvcHRpb25zLmFsdEJhY2tncm91bmQgOiBcIiNlZmVmZWZcIn07XG59XG5cbi5zdGF0ZWRpYWdyYW0tY2x1c3RlciAuaW5uZXIge1xuICByeDowO1xuICByeTowO1xufVxuXG4uc3RhdGVkaWFncmFtLXN0YXRlIHJlY3QuYmFzaWMge1xuICByeDogNXB4O1xuICByeTogNXB4O1xufVxuLnN0YXRlZGlhZ3JhbS1zdGF0ZSByZWN0LmRpdmlkZXIge1xuICBzdHJva2UtZGFzaGFycmF5OiAxMCwxMDtcbiAgZmlsbDogJHtvcHRpb25zLmFsdEJhY2tncm91bmQgPyBvcHRpb25zLmFsdEJhY2tncm91bmQgOiBcIiNlZmVmZWZcIn07XG59XG5cbi5ub3RlLWVkZ2Uge1xuICBzdHJva2UtZGFzaGFycmF5OiA1O1xufVxuXG4uc3RhdGVkaWFncmFtLW5vdGUgcmVjdCB7XG4gIGZpbGw6ICR7b3B0aW9ucy5ub3RlQmtnQ29sb3J9O1xuICBzdHJva2U6ICR7b3B0aW9ucy5ub3RlQm9yZGVyQ29sb3J9O1xuICBzdHJva2Utd2lkdGg6IDFweDtcbiAgcng6IDA7XG4gIHJ5OiAwO1xufVxuLnN0YXRlZGlhZ3JhbS1ub3RlIHJlY3Qge1xuICBmaWxsOiAke29wdGlvbnMubm90ZUJrZ0NvbG9yfTtcbiAgc3Ryb2tlOiAke29wdGlvbnMubm90ZUJvcmRlckNvbG9yfTtcbiAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gIHJ4OiAwO1xuICByeTogMDtcbn1cblxuLnN0YXRlZGlhZ3JhbS1ub3RlIHRleHQge1xuICBmaWxsOiAke29wdGlvbnMubm90ZVRleHRDb2xvcn07XG59XG5cbi5zdGF0ZWRpYWdyYW0tbm90ZSAubm9kZUxhYmVsIHtcbiAgY29sb3I6ICR7b3B0aW9ucy5ub3RlVGV4dENvbG9yfTtcbn1cbi5zdGF0ZWRpYWdyYW0gLmVkZ2VMYWJlbCB7XG4gIGNvbG9yOiByZWQ7IC8vICR7b3B0aW9ucy5ub3RlVGV4dENvbG9yfTtcbn1cblxuI2RlcGVuZGVuY3lTdGFydCwgI2RlcGVuZGVuY3lFbmQge1xuICBmaWxsOiAke29wdGlvbnMubGluZUNvbG9yfTtcbiAgc3Ryb2tlOiAke29wdGlvbnMubGluZUNvbG9yfTtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xufVxuXG4uc3RhdGVkaWFncmFtVGl0bGVUZXh0IHtcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmaWxsOiAke29wdGlvbnMudGV4dENvbG9yfTtcbn1cbmA7XG5jb25zdCBzdHlsZXMgPSBnZXRTdHlsZXM7XG5leHBvcnQge1xuICBERUZBVUxUX1NUQVRFX1RZUEUgYXMgRCxcbiAgU1RNVF9SRUxBVElPTiBhcyBTLFxuICBESVZJREVSX1RZUEUgYXMgYSxcbiAgU1RNVF9TVEFURSBhcyBiLFxuICBERUZBVUxUX05FU1RFRF9ET0NfRElSIGFzIGMsXG4gIGRiIGFzIGQsXG4gIHBhcnNlciQxIGFzIHAsXG4gIHN0eWxlcyBhcyBzXG59O1xuIl0sIm5hbWVzIjpbImxvZyIsImdlbmVyYXRlSWQiLCJjb21tb24iLCJnZXRDb25maWciLCJjbGVhciQxIiwiZ2V0QWNjVGl0bGUiLCJzZXRBY2NUaXRsZSIsImdldEFjY0Rlc2NyaXB0aW9uIiwic2V0QWNjRGVzY3JpcHRpb24iLCJzZXREaWFncmFtVGl0bGUiLCJnZXREaWFncmFtVGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxJQUFJLE1BQU0sR0FBRyxXQUFXO0FBQ3hCLEVBQUUsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3ZELE1BQU0sQ0FBQztBQUNQLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDenJCLEVBQUUsSUFBSSxPQUFPLEdBQUc7QUFDaEIsSUFBSSxLQUFLLEVBQUUsU0FBUyxLQUFLLEdBQUc7QUFDNUIsS0FBSztBQUNMLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDVixJQUFJLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLDJCQUEyQixFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsb0JBQW9CLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO0FBQy80QixJQUFJLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLDJCQUEyQixFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsb0JBQW9CLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUU7QUFDN3NCLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzVZLElBQUksYUFBYSxFQUFFLFNBQVMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNyRixNQUFNLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLE1BQU0sUUFBUSxPQUFPO0FBQ3JCLFFBQVEsS0FBSyxDQUFDO0FBQ2QsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLFVBQVUsT0FBTyxFQUFFLENB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S0FBSztBQUNMLElBQUksS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5NEUsSUFBSSxjQUFjLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxVQUFVLEVBQUUsU0FBUyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUMvQyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUM1QixRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEIsT0FBTyxNQUFNO0FBQ2IsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQyxRQUFRLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQzFCLFFBQVEsTUFBTSxLQUFLLENB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LENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN4RCxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN4RCxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6RCxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN4RCxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN4RCxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEs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RSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLHFCQUFxQixFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUU7QUFDNTRDLEtBQUssQ0FBQztBQUNOLElBQUksT0FBTyxNQUFNLENBQUM7QUFDbEIsR0FBRyxFQUFFLENBQUM7QUFDTixFQUFFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLEVBQUUsU0FBUyxNQUFNLEdBQUc7QUFDcEIsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNqQixHQUFHO0FBQ0gsRUFBRSxNQUFNLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUM3QixFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzFCLEVBQUUsT0FBTyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ3RCLENBQUMsRUFBRSxDQUFDO0FBQ0osTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDbEIsTUFBQyxRQUFRLEdBQUcsT0FBTztBQUN4QixNQUFNLHlCQUF5QixHQUFHLElBQUksQ0FBQztBQUNsQyxNQUFDLHNCQUFzQixHQUFHLEtBQUs7QUFDL0IsTUFBQyxVQUFVLEdBQUcsUUFBUTtBQUN0QixNQUFDLGFBQWEsR0FBRyxXQUFXO0FBQ2pDLE1BQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQztBQUNqQyxNQUFNLGVBQWUsR0FBRyxZQUFZLENBQUM7QUFDaEMsTUFBQyxrQkFBa0IsR0FBRyxVQUFVO0FBQ2hDLE1BQUMsWUFBWSxHQUFHLFVBQVU7QUFDL0IsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQztBQUMzQixNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUM7QUFDNUIsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQztBQUM5QixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUM7QUFDNUIsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQztBQUMzQixTQUFTLGNBQWMsR0FBRztBQUMxQixFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQUNELElBQUksU0FBUyxHQUFHLHlCQUF5QixDQUFDO0FBQzFDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNqQixJQUFJLE9BQU8sR0FBRyxjQUFjLEVBQUUsQ0FBQztBQUMvQixNQUFNLE1BQU0sR0FBRyxNQUFNO0FBQ3JCLEVBQUUsT0FBTztBQUNULElBQUksU0FBUyxFQUFFLEVBQUU7QUFDakIsSUFBSSxNQUFNLEVBQUUsRUFBRTtBQUNkLElBQUksU0FBUyxFQUFFLEVBQUU7QUFDakIsR0FBRyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0YsSUFBSSxTQUFTLEdBQUc7QUFDaEIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0FBQ2hCLENBQUMsQ0FBQztBQUNGLElBQUksZUFBZSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFDckMsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNuQixNQUFNLFFBQVEsR0FBRztBQUNqQixFQUFFLElBQUksRUFBRSxDQUFDO0FBQ1QsRUFBRSxXQUFXLEVBQUUsQ0FBQztBQUNoQixDQUFDLENBQUM7QUFDRixNQUFNLFlBQVksR0FBRztBQUNyQixFQUFFLFdBQVcsRUFBRSxDQUFDO0FBQ2hCLEVBQUUsU0FBUyxFQUFFLENBQUM7QUFDZCxFQUFFLFdBQVcsRUFBRSxDQUFDO0FBQ2hCLEVBQUUsVUFBVSxFQUFFLENBQUM7QUFDZixDQUFDLENBQUM7QUFDRixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRCxNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBSztBQUMxQixFQUFFQSxXQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLEVBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNkLENBQUMsQ0FBQztBQUNGLE1BQU0sVUFBVSxHQUFHLE1BQU0sT0FBTyxDQUFDO0FBQ2pDLE1BQU0sYUFBYSxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEtBQUs7QUFDL0MsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssYUFBYSxFQUFFO0FBQ25DLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdDLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzlDLEdBQUcsTUFBTTtBQUNULElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtBQUNsQyxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQUU7QUFDN0IsUUFBUSxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRSxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztBQUNwRSxRQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQzNCLE9BQU8sTUFBTTtBQUNiLFFBQVEsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2pDLE9BQU87QUFDUCxLQUFLO0FBQ0wsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7QUFDbEIsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDckIsTUFBTSxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDMUIsTUFBTSxJQUFJLENBQUMsQ0FBQztBQUNaLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM1QyxRQUFRLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFO0FBQy9DLFVBQVUsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QyxVQUFVLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM1QixVQUFVLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDMUIsU0FBUyxNQUFNO0FBQ2YsVUFBVSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QyxTQUFTO0FBQ1QsT0FBTztBQUNQLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNuRCxRQUFRLE1BQU0sT0FBTyxHQUFHO0FBQ3hCLFVBQVUsSUFBSSxFQUFFLFVBQVU7QUFDMUIsVUFBVSxFQUFFLEVBQUVDLGdCQUFVLEVBQUU7QUFDMUIsVUFBVSxJQUFJLEVBQUUsU0FBUztBQUN6QixVQUFVLEdBQUcsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDO0FBQ2hDLFNBQVMsQ0FBQztBQUNWLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNqQyxRQUFRLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3ZCLE9BQU87QUFDUCxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxLQUFLLGFBQWEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDeEUsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDLENBQUM7QUFDRixNQUFNLFlBQVksR0FBRyxNQUFNO0FBQzNCLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDcEUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDdEMsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUs7QUFDMUIsRUFBRSxJQUFJLEdBQUcsQ0FBQztBQUNWLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO0FBQ2hCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDbkIsR0FBRyxNQUFNO0FBQ1QsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ2YsR0FBRztBQUNILEVBQUVELFdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEIsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDZCxFQUFFQSxXQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMzQixFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUs7QUFDeEIsSUFBSSxRQUFRLElBQUksQ0FBQyxJQUFJO0FBQ3JCLE1BQU0sS0FBSyxVQUFVO0FBQ3JCLFFBQVEsUUFBUTtBQUNoQixVQUFVLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO0FBQ3hCLFVBQVUsSUFBSSxDQUFDLElBQUk7QUFDbkIsVUFBVSxJQUFJLENBQUMsR0FBRztBQUNsQixVQUFVLElBQUksQ0FBQyxXQUFXO0FBQzFCLFVBQVUsSUFBSSxDQUFDLElBQUk7QUFDbkIsVUFBVSxJQUFJLENBQUMsT0FBTztBQUN0QixVQUFVLElBQUksQ0FBQyxNQUFNO0FBQ3JCLFVBQVUsSUFBSSxDQUFDLFVBQVU7QUFDekIsU0FBUyxDQUFDO0FBQ1YsUUFBUSxNQUFNO0FBQ2QsTUFBTSxLQUFLLGFBQWE7QUFDeEIsUUFBUSxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNoRSxRQUFRLE1BQU07QUFDZCxNQUFNLEtBQUssYUFBYTtBQUN4QixRQUFRLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwRCxRQUFRLE1BQU07QUFDZCxNQUFNLEtBQUssZUFBZTtBQUMxQixRQUFRLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNyRCxRQUFRLE1BQU07QUFDZCxLQUFLO0FBQ0wsR0FBRyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRixNQUFNLFFBQVEsR0FBRyxTQUFTLEVBQUUsRUFBRSxJQUFJLEdBQUcsa0JBQWtCLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxLQUFLLEdBQUcsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsUUFBUSxHQUFHLElBQUksRUFBRSxPQUFPLEdBQUcsSUFBSSxFQUFFLFVBQVUsR0FBRyxJQUFJLEVBQUU7QUFDcEosRUFBRSxNQUFNLFNBQVMsR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNwRCxFQUFFLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtBQUNwRCxJQUFJQSxXQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEQsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHO0FBQ3hDLE1BQU0sRUFBRSxFQUFFLFNBQVM7QUFDbkIsTUFBTSxZQUFZLEVBQUUsRUFBRTtBQUN0QixNQUFNLElBQUk7QUFDVixNQUFNLEdBQUc7QUFDVCxNQUFNLElBQUk7QUFDVixNQUFNLE9BQU8sRUFBRSxFQUFFO0FBQ2pCLE1BQU0sTUFBTSxFQUFFLEVBQUU7QUFDaEIsTUFBTSxVQUFVLEVBQUUsRUFBRTtBQUNwQixLQUFLLENBQUM7QUFDTixHQUFHLE1BQU07QUFDVCxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtBQUNoRCxNQUFNLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNsRCxLQUFLO0FBQ0wsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUU7QUFDakQsTUFBTSxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDcEQsS0FBSztBQUNMLEdBQUc7QUFDSCxFQUFFLElBQUksS0FBSyxFQUFFO0FBQ2IsSUFBSUEsV0FBRyxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUQsSUFBSSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUNuQyxNQUFNLGNBQWMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUMsS0FBSztBQUNMLElBQUksSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7QUFDbkMsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLLGNBQWMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRSxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDWixJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNsRCxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBR0UsY0FBTSxDQUFDLFlBQVk7QUFDckUsTUFBTSxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJO0FBQ2pELE1BQU1DLGVBQVMsRUFBRTtBQUNqQixLQUFLLENBQUM7QUFDTixHQUFHO0FBQ0gsRUFBRSxJQUFJLFFBQVEsRUFBRTtBQUNoQixJQUFJSCxXQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMzRCxJQUFJLE1BQU0sV0FBVyxHQUFHLE9BQU8sUUFBUSxLQUFLLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUM3RSxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9FLEdBQUc7QUFDSCxFQUFFLElBQUksT0FBTyxFQUFFO0FBQ2YsSUFBSUEsV0FBRyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekQsSUFBSSxNQUFNLFVBQVUsR0FBRyxPQUFPLE9BQU8sS0FBSyxRQUFRLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDekUsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyRSxHQUFHO0FBQ0gsRUFBRSxJQUFJLFVBQVUsRUFBRTtBQUNsQixJQUFJQSxXQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6RCxJQUFJLE1BQU0sY0FBYyxHQUFHLE9BQU8sVUFBVSxLQUFLLFFBQVEsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztBQUN0RixJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEtBQUssWUFBWSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JGLEdBQUc7QUFDSCxDQUFDLENBQUM7QUFDRixNQUFNLEtBQUssR0FBRyxTQUFTLFVBQVUsRUFBRTtBQUNuQyxFQUFFLFNBQVMsR0FBRztBQUNkLElBQUksSUFBSSxFQUFFLE1BQU0sRUFBRTtBQUNsQixHQUFHLENBQUM7QUFDSixFQUFFLGVBQWUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQ25DLEVBQUUsYUFBYSxHQUFHLENBQUMsQ0FBQztBQUNwQixFQUFFLE9BQU8sR0FBRyxjQUFjLEVBQUUsQ0FBQztBQUM3QixFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDbkIsSUFBSUksV0FBTyxFQUFFLENBQUM7QUFDZCxHQUFHO0FBQ0gsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxRQUFRLEdBQUcsU0FBUyxFQUFFLEVBQUU7QUFDOUIsRUFBRSxPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxTQUFTLEdBQUcsV0FBVztBQUM3QixFQUFFLE9BQU8sZUFBZSxDQUFDLE1BQU0sQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFDRixNQUFNLFlBQVksR0FBRyxXQUFXO0FBQ2hDLEVBQUVKLFdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQztBQUNGLE1BQU0sWUFBWSxHQUFHLFdBQVc7QUFDaEMsRUFBRSxPQUFPLGVBQWUsQ0FBQyxTQUFTLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBQ0YsU0FBUyxlQUFlLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUNsQyxFQUFFLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNuQixFQUFFLElBQUksRUFBRSxLQUFLLFVBQVUsRUFBRTtBQUN6QixJQUFJLGFBQWEsRUFBRSxDQUFDO0FBQ3BCLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRSxVQUFVLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQzlDLEdBQUc7QUFDSCxFQUFFLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFDRCxTQUFTLGlCQUFpQixDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLGtCQUFrQixFQUFFO0FBQy9ELEVBQUUsT0FBTyxFQUFFLEtBQUssVUFBVSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDL0MsQ0FBQztBQUNELFNBQVMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7QUFDaEMsRUFBRSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDbkIsRUFBRSxJQUFJLEVBQUUsS0FBSyxRQUFRLEVBQUU7QUFDdkIsSUFBSSxhQUFhLEVBQUUsQ0FBQztBQUNwQixJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUM1QyxHQUFHO0FBQ0gsRUFBRSxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBQ0QsU0FBUyxlQUFlLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsa0JBQWtCLEVBQUU7QUFDN0QsRUFBRSxPQUFPLEVBQUUsS0FBSyxRQUFRLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQztBQUMzQyxDQUFDO0FBQ0QsU0FBUyxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7QUFDdEQsRUFBRSxJQUFJLEdBQUcsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLEVBQUUsSUFBSSxLQUFLLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0QsRUFBRSxJQUFJLEdBQUcsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLEVBQUUsSUFBSSxLQUFLLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0QsRUFBRSxRQUFRO0FBQ1YsSUFBSSxHQUFHO0FBQ1AsSUFBSSxLQUFLO0FBQ1QsSUFBSSxLQUFLLENBQUMsR0FBRztBQUNiLElBQUksS0FBSyxDQUFDLFdBQVc7QUFDckIsSUFBSSxLQUFLLENBQUMsSUFBSTtBQUNkLElBQUksS0FBSyxDQUFDLE9BQU87QUFDakIsSUFBSSxLQUFLLENBQUMsTUFBTTtBQUNoQixJQUFJLEtBQUssQ0FBQyxVQUFVO0FBQ3BCLEdBQUcsQ0FBQztBQUNKLEVBQUUsUUFBUTtBQUNWLElBQUksR0FBRztBQUNQLElBQUksS0FBSztBQUNULElBQUksS0FBSyxDQUFDLEdBQUc7QUFDYixJQUFJLEtBQUssQ0FBQyxXQUFXO0FBQ3JCLElBQUksS0FBSyxDQUFDLElBQUk7QUFDZCxJQUFJLEtBQUssQ0FBQyxPQUFPO0FBQ2pCLElBQUksS0FBSyxDQUFDLE1BQU07QUFDaEIsSUFBSSxLQUFLLENBQUMsVUFBVTtBQUNwQixHQUFHLENBQUM7QUFDSixFQUFFLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQ2pDLElBQUksR0FBRztBQUNQLElBQUksR0FBRztBQUNQLElBQUksYUFBYSxFQUFFRSxjQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRUMsZUFBUyxFQUFFLENBQUM7QUFDbEUsR0FBRyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBQ0QsTUFBTSxXQUFXLEdBQUcsU0FBUyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUNsRCxFQUFFLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO0FBQ2pDLElBQUksZUFBZSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDekMsR0FBRyxNQUFNO0FBQ1QsSUFBSSxNQUFNLEdBQUcsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUMsSUFBSSxNQUFNLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzQyxJQUFJLE1BQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM1QyxJQUFJLE1BQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDekIsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFDbkMsTUFBTSxHQUFHO0FBQ1QsTUFBTSxHQUFHO0FBQ1QsTUFBTSxLQUFLLEVBQUVELGNBQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFQyxlQUFTLEVBQUUsQ0FBQztBQUNwRCxLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSCxDQUFDLENBQUM7QUFDRixNQUFNLGNBQWMsR0FBRyxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUU7QUFDM0MsRUFBRSxNQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLEVBQUUsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUM7QUFDL0UsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQ0QsY0FBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUVDLGVBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxDQUFDLENBQUM7QUFDRixNQUFNLFlBQVksR0FBRyxTQUFTLEtBQUssRUFBRTtBQUNyQyxFQUFFLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO0FBQ3JDLElBQUksT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2xDLEdBQUcsTUFBTTtBQUNULElBQUksT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDeEIsR0FBRztBQUNILENBQUMsQ0FBQztBQUNGLE1BQU0sWUFBWSxHQUFHLE1BQU07QUFDM0IsRUFBRSxVQUFVLEVBQUUsQ0FBQztBQUNmLEVBQUUsT0FBTyxhQUFhLEdBQUcsVUFBVSxDQUFDO0FBQ3BDLENBQUMsQ0FBQztBQUNGLE1BQU0sYUFBYSxHQUFHLFNBQVMsRUFBRSxFQUFFLGVBQWUsR0FBRyxFQUFFLEVBQUU7QUFDekQsRUFBRSxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtBQUM5QixJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUNyRCxHQUFHO0FBQ0gsRUFBRSxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDakMsRUFBRSxJQUFJLGVBQWUsS0FBSyxLQUFLLENBQUMsSUFBSSxlQUFlLEtBQUssSUFBSSxFQUFFO0FBQzlELElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUs7QUFDOUQsTUFBTSxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNsRSxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRTtBQUN2QyxRQUFRLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3JFLFFBQVEsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDekUsUUFBUSxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5QyxPQUFPO0FBQ1AsTUFBTSxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMxQyxLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSCxDQUFDLENBQUM7QUFDRixNQUFNLFVBQVUsR0FBRyxXQUFXO0FBQzlCLEVBQUUsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxXQUFXLEdBQUcsU0FBUyxPQUFPLEVBQUUsWUFBWSxFQUFFO0FBQ3BELEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7QUFDMUMsSUFBSSxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbEMsSUFBSSxJQUFJLFVBQVUsS0FBSyxLQUFLLENBQUMsRUFBRTtBQUMvQixNQUFNLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNsQyxNQUFNLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMxQixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkMsS0FBSztBQUNMLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUMsR0FBRyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRixNQUFNLFFBQVEsR0FBRyxTQUFTLE1BQU0sRUFBRSxTQUFTLEVBQUU7QUFDN0MsRUFBRSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEMsRUFBRSxJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtBQUN2QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLEdBQUc7QUFDSCxDQUFDLENBQUM7QUFDRixNQUFNLFlBQVksR0FBRyxTQUFTLE1BQU0sRUFBRSxZQUFZLEVBQUU7QUFDcEQsRUFBRSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEMsRUFBRSxJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtBQUN2QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3ZDLEdBQUc7QUFDSCxDQUFDLENBQUM7QUFDRixNQUFNLFlBQVksR0FBRyxNQUFNLFNBQVMsQ0FBQztBQUNyQyxNQUFNLFlBQVksR0FBRyxDQUFDLEdBQUcsS0FBSztBQUM5QixFQUFFLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxTQUFTLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDaEYsTUFBQyxFQUFFLEdBQUc7QUFDWCxFQUFFLFNBQVMsRUFBRSxNQUFNQSxlQUFTLEVBQUUsQ0FBQyxLQUFLO0FBQ3BDLEVBQUUsUUFBUTtBQUNWLEVBQUUsS0FBSztBQUNQLEVBQUUsUUFBUTtBQUNWLEVBQUUsU0FBUztBQUNYLEVBQUUsWUFBWTtBQUNkLEVBQUUsVUFBVTtBQUNaLEVBQUUsWUFBWTtBQUNkLEVBQUUsV0FBVztBQUNiLEVBQUUsWUFBWTtBQUNkLEVBQUUsWUFBWTtBQUNkLEVBQUUsWUFBWTtBQUNkLEVBQUUsUUFBUTtBQUNWLEVBQUUsWUFBWTtBQUNkLEVBQUUsWUFBWTtBQUNkLEVBQUUsVUFBVTtBQUNaLEVBQUUsVUFBVTtBQUNaLEVBQUUsWUFBWTtBQUNkLEVBQUUsT0FBTztBQUNULEVBQUUsU0FBUztBQUNYLGVBQUVFLGlCQUFXO0FBQ2IsZUFBRUMsaUJBQVc7QUFDYixxQkFBRUMsdUJBQWlCO0FBQ25CLHFCQUFFQyx1QkFBaUI7QUFDbkIsRUFBRSxhQUFhO0FBQ2YsRUFBRSxXQUFXO0FBQ2IsRUFBRSxjQUFjO0FBQ2hCLG1CQUFFQyxxQkFBZTtBQUNqQixtQkFBRUMscUJBQWU7QUFDakIsRUFBRTtBQUNGLE1BQU0sU0FBUyxHQUFHLENBQUMsT0FBTyxLQUFLLENBQUM7QUFDaEM7QUFDQSxVQUFVLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUNwQyxZQUFZLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUN0QztBQUNBO0FBQ0EsUUFBUSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUMxQixVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxVQUFVLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUNwQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUMvQjtBQUNBO0FBQ0EsVUFBVSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxFQUFFLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztBQUN2QztBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUUsT0FBTyxDQUFDLG9CQUFvQixJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUNwRTtBQUNBO0FBQ0EsU0FBUyxFQUFFLE9BQU8sQ0FBQyxvQkFBb0IsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsUUFBUSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUM7QUFDcEMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0FBQ3BDLFVBQVUsRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUM7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsUUFBUSxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztBQUNyQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDNUQsYUFBYSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQzlDLFVBQVUsRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDMUIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUN0RDtBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUUsT0FBTyxDQUFDLHdCQUF3QixDQUFDO0FBQzNDLFVBQVUsRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDNUQ7QUFDQTtBQUNBLFFBQVEsRUFBRSxPQUFPLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxFQUFFLE9BQU8sQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUMvQixVQUFVLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDL0IsVUFBVSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDakM7QUFDQTtBQUNBLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsUUFBUSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDNUIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDNUI7QUFDQSxDQUFDLENBQUM7QUFDRyxNQUFDLE1BQU0sR0FBRzs7Ozs7Ozs7Ozs7In0=
