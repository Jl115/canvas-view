'use strict';

var index = require('./index-d3f4d11e.js');
var clone = require('./clone-30998be0.js');
var edgesE0da2a9e = require('./edges-e0da2a9e-f889135d.js');
var graph = require('./graph-55c4c685.js');
require('./main-8c6d7706.js');
var ordinal = require('./ordinal-457f9936.js');
var Tableau10 = require('./Tableau10-2d909d9e.js');
var channel = require('./channel-b7ca254f.js');
require('./createText-2e5e7dd3-3f95780e.js');
require('./line-2db9d5e8.js');
require('./array-aca279a4.js');
require('./path-29c5310d.js');
require('obsidian');
require('@/components/modals');
require('@/views/view');
require('./init-8ddd39ad.js');

var _a, _b;
var parser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [1, 7], $V1 = [1, 13], $V2 = [1, 14], $V3 = [1, 15], $V4 = [1, 19], $V5 = [1, 16], $V6 = [1, 17], $V7 = [1, 18], $V8 = [8, 30], $V9 = [8, 21, 28, 29, 30, 31, 32, 40, 44, 47], $Va = [1, 23], $Vb = [1, 24], $Vc = [8, 15, 16, 21, 28, 29, 30, 31, 32, 40, 44, 47], $Vd = [8, 15, 16, 21, 27, 28, 29, 30, 31, 32, 40, 44, 47], $Ve = [1, 49];
  var parser2 = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "spaceLines": 3, "SPACELINE": 4, "NL": 5, "separator": 6, "SPACE": 7, "EOF": 8, "start": 9, "BLOCK_DIAGRAM_KEY": 10, "document": 11, "stop": 12, "statement": 13, "link": 14, "LINK": 15, "START_LINK": 16, "LINK_LABEL": 17, "STR": 18, "nodeStatement": 19, "columnsStatement": 20, "SPACE_BLOCK": 21, "blockStatement": 22, "classDefStatement": 23, "cssClassStatement": 24, "styleStatement": 25, "node": 26, "SIZE": 27, "COLUMNS": 28, "id-block": 29, "end": 30, "block": 31, "NODE_ID": 32, "nodeShapeNLabel": 33, "dirList": 34, "DIR": 35, "NODE_DSTART": 36, "NODE_DEND": 37, "BLOCK_ARROW_START": 38, "BLOCK_ARROW_END": 39, "classDef": 40, "CLASSDEF_ID": 41, "CLASSDEF_STYLEOPTS": 42, "DEFAULT": 43, "class": 44, "CLASSENTITY_IDS": 45, "STYLECLASS": 46, "style": 47, "STYLE_ENTITY_IDS": 48, "STYLE_DEFINITION_DATA": 49, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 4: "SPACELINE", 5: "NL", 7: "SPACE", 8: "EOF", 10: "BLOCK_DIAGRAM_KEY", 15: "LINK", 16: "START_LINK", 17: "LINK_LABEL", 18: "STR", 21: "SPACE_BLOCK", 27: "SIZE", 28: "COLUMNS", 29: "id-block", 30: "end", 31: "block", 32: "NODE_ID", 35: "DIR", 36: "NODE_DSTART", 37: "NODE_DEND", 38: "BLOCK_ARROW_START", 39: "BLOCK_ARROW_END", 40: "classDef", 41: "CLASSDEF_ID", 42: "CLASSDEF_STYLEOPTS", 43: "DEFAULT", 44: "class", 45: "CLASSENTITY_IDS", 46: "STYLECLASS", 47: "style", 48: "STYLE_ENTITY_IDS", 49: "STYLE_DEFINITION_DATA" },
    productions_: [0, [3, 1], [3, 2], [3, 2], [6, 1], [6, 1], [6, 1], [9, 3], [12, 1], [12, 1], [12, 2], [12, 2], [11, 1], [11, 2], [14, 1], [14, 4], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [19, 3], [19, 2], [19, 1], [20, 1], [22, 4], [22, 3], [26, 1], [26, 2], [34, 1], [34, 2], [33, 3], [33, 4], [23, 3], [23, 3], [24, 3], [25, 3]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 4:
          yy.getLogger().debug("Rule: separator (NL) ");
          break;
        case 5:
          yy.getLogger().debug("Rule: separator (Space) ");
          break;
        case 6:
          yy.getLogger().debug("Rule: separator (EOF) ");
          break;
        case 7:
          yy.getLogger().debug("Rule: hierarchy: ", $$[$0 - 1]);
          yy.setHierarchy($$[$0 - 1]);
          break;
        case 8:
          yy.getLogger().debug("Stop NL ");
          break;
        case 9:
          yy.getLogger().debug("Stop EOF ");
          break;
        case 10:
          yy.getLogger().debug("Stop NL2 ");
          break;
        case 11:
          yy.getLogger().debug("Stop EOF2 ");
          break;
        case 12:
          yy.getLogger().debug("Rule: statement: ", $$[$0]);
          typeof $$[$0].length === "number" ? this.$ = $$[$0] : this.$ = [$$[$0]];
          break;
        case 13:
          yy.getLogger().debug("Rule: statement #2: ", $$[$0 - 1]);
          this.$ = [$$[$0 - 1]].concat($$[$0]);
          break;
        case 14:
          yy.getLogger().debug("Rule: link: ", $$[$0], yytext);
          this.$ = { edgeTypeStr: $$[$0], label: "" };
          break;
        case 15:
          yy.getLogger().debug("Rule: LABEL link: ", $$[$0 - 3], $$[$0 - 1], $$[$0]);
          this.$ = { edgeTypeStr: $$[$0], label: $$[$0 - 1] };
          break;
        case 18:
          const num = parseInt($$[$0]);
          const spaceId = yy.generateId();
          this.$ = { id: spaceId, type: "space", label: "", width: num, children: [] };
          break;
        case 23:
          yy.getLogger().debug("Rule: (nodeStatement link node) ", $$[$0 - 2], $$[$0 - 1], $$[$0], " typestr: ", $$[$0 - 1].edgeTypeStr);
          const edgeData = yy.edgeStrToEdgeData($$[$0 - 1].edgeTypeStr);
          this.$ = [
            { id: $$[$0 - 2].id, label: $$[$0 - 2].label, type: $$[$0 - 2].type, directions: $$[$0 - 2].directions },
            { id: $$[$0 - 2].id + "-" + $$[$0].id, start: $$[$0 - 2].id, end: $$[$0].id, label: $$[$0 - 1].label, type: "edge", directions: $$[$0].directions, arrowTypeEnd: edgeData, arrowTypeStart: "arrow_open" },
            { id: $$[$0].id, label: $$[$0].label, type: yy.typeStr2Type($$[$0].typeStr), directions: $$[$0].directions }
          ];
          break;
        case 24:
          yy.getLogger().debug("Rule: nodeStatement (abc88 node size) ", $$[$0 - 1], $$[$0]);
          this.$ = { id: $$[$0 - 1].id, label: $$[$0 - 1].label, type: yy.typeStr2Type($$[$0 - 1].typeStr), directions: $$[$0 - 1].directions, widthInColumns: parseInt($$[$0], 10) };
          break;
        case 25:
          yy.getLogger().debug("Rule: nodeStatement (node) ", $$[$0]);
          this.$ = { id: $$[$0].id, label: $$[$0].label, type: yy.typeStr2Type($$[$0].typeStr), directions: $$[$0].directions, widthInColumns: 1 };
          break;
        case 26:
          yy.getLogger().debug("APA123", this ? this : "na");
          yy.getLogger().debug("COLUMNS: ", $$[$0]);
          this.$ = { type: "column-setting", columns: $$[$0] === "auto" ? -1 : parseInt($$[$0]) };
          break;
        case 27:
          yy.getLogger().debug("Rule: id-block statement : ", $$[$0 - 2], $$[$0 - 1]);
          yy.generateId();
          this.$ = { ...$$[$0 - 2], type: "composite", children: $$[$0 - 1] };
          break;
        case 28:
          yy.getLogger().debug("Rule: blockStatement : ", $$[$0 - 2], $$[$0 - 1], $$[$0]);
          const id = yy.generateId();
          this.$ = { id, type: "composite", label: "", children: $$[$0 - 1] };
          break;
        case 29:
          yy.getLogger().debug("Rule: node (NODE_ID separator): ", $$[$0]);
          this.$ = { id: $$[$0] };
          break;
        case 30:
          yy.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ", $$[$0 - 1], $$[$0]);
          this.$ = { id: $$[$0 - 1], label: $$[$0].label, typeStr: $$[$0].typeStr, directions: $$[$0].directions };
          break;
        case 31:
          yy.getLogger().debug("Rule: dirList: ", $$[$0]);
          this.$ = [$$[$0]];
          break;
        case 32:
          yy.getLogger().debug("Rule: dirList: ", $$[$0 - 1], $$[$0]);
          this.$ = [$$[$0 - 1]].concat($$[$0]);
          break;
        case 33:
          yy.getLogger().debug("Rule: nodeShapeNLabel: ", $$[$0 - 2], $$[$0 - 1], $$[$0]);
          this.$ = { typeStr: $$[$0 - 2] + $$[$0], label: $$[$0 - 1] };
          break;
        case 34:
          yy.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ", $$[$0 - 3], $$[$0 - 2], " #3:", $$[$0 - 1], $$[$0]);
          this.$ = { typeStr: $$[$0 - 3] + $$[$0], label: $$[$0 - 2], directions: $$[$0 - 1] };
          break;
        case 35:
        case 36:
          this.$ = { type: "classDef", id: $$[$0 - 1].trim(), css: $$[$0].trim() };
          break;
        case 37:
          this.$ = { type: "applyClass", id: $$[$0 - 1].trim(), styleClass: $$[$0].trim() };
          break;
        case 38:
          this.$ = { type: "applyStyles", id: $$[$0 - 1].trim(), stylesStr: $$[$0].trim() };
          break;
      }
    },
    table: [{ 9: 1, 10: [1, 2] }, { 1: [3] }, { 11: 3, 13: 4, 19: 5, 20: 6, 21: $V0, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: $V1, 29: $V2, 31: $V3, 32: $V4, 40: $V5, 44: $V6, 47: $V7 }, { 8: [1, 20] }, o($V8, [2, 12], { 13: 4, 19: 5, 20: 6, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 11: 21, 21: $V0, 28: $V1, 29: $V2, 31: $V3, 32: $V4, 40: $V5, 44: $V6, 47: $V7 }), o($V9, [2, 16], { 14: 22, 15: $Va, 16: $Vb }), o($V9, [2, 17]), o($V9, [2, 18]), o($V9, [2, 19]), o($V9, [2, 20]), o($V9, [2, 21]), o($V9, [2, 22]), o($Vc, [2, 25], { 27: [1, 25] }), o($V9, [2, 26]), { 19: 26, 26: 12, 32: $V4 }, { 11: 27, 13: 4, 19: 5, 20: 6, 21: $V0, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: $V1, 29: $V2, 31: $V3, 32: $V4, 40: $V5, 44: $V6, 47: $V7 }, { 41: [1, 28], 43: [1, 29] }, { 45: [1, 30] }, { 48: [1, 31] }, o($Vd, [2, 29], { 33: 32, 36: [1, 33], 38: [1, 34] }), { 1: [2, 7] }, o($V8, [2, 13]), { 26: 35, 32: $V4 }, { 32: [2, 14] }, { 17: [1, 36] }, o($Vc, [2, 24]), { 11: 37, 13: 4, 14: 22, 15: $Va, 16: $Vb, 19: 5, 20: 6, 21: $V0, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: $V1, 29: $V2, 31: $V3, 32: $V4, 40: $V5, 44: $V6, 47: $V7 }, { 30: [1, 38] }, { 42: [1, 39] }, { 42: [1, 40] }, { 46: [1, 41] }, { 49: [1, 42] }, o($Vd, [2, 30]), { 18: [1, 43] }, { 18: [1, 44] }, o($Vc, [2, 23]), { 18: [1, 45] }, { 30: [1, 46] }, o($V9, [2, 28]), o($V9, [2, 35]), o($V9, [2, 36]), o($V9, [2, 37]), o($V9, [2, 38]), { 37: [1, 47] }, { 34: 48, 35: $Ve }, { 15: [1, 50] }, o($V9, [2, 27]), o($Vd, [2, 33]), { 39: [1, 51] }, { 34: 52, 35: $Ve, 39: [2, 31] }, { 32: [2, 15] }, o($Vd, [2, 34]), { 39: [2, 32] }],
    defaultActions: { 20: [2, 7], 23: [2, 14], 50: [2, 15], 52: [2, 32] },
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
      options: {},
      performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
        switch ($avoiding_name_collisions) {
          case 0:
            return 10;
          case 1:
            yy.getLogger().debug("Found space-block");
            return 31;
          case 2:
            yy.getLogger().debug("Found nl-block");
            return 31;
          case 3:
            yy.getLogger().debug("Found space-block");
            return 29;
          case 4:
            yy.getLogger().debug(".", yy_.yytext);
            break;
          case 5:
            yy.getLogger().debug("_", yy_.yytext);
            break;
          case 6:
            return 5;
          case 7:
            yy_.yytext = -1;
            return 28;
          case 8:
            yy_.yytext = yy_.yytext.replace(/columns\s+/, "");
            yy.getLogger().debug("COLUMNS (LEX)", yy_.yytext);
            return 28;
          case 9:
            this.pushState("md_string");
            break;
          case 10:
            return "MD_STR";
          case 11:
            this.popState();
            break;
          case 12:
            this.pushState("string");
            break;
          case 13:
            yy.getLogger().debug("LEX: POPPING STR:", yy_.yytext);
            this.popState();
            break;
          case 14:
            yy.getLogger().debug("LEX: STR end:", yy_.yytext);
            return "STR";
          case 15:
            yy_.yytext = yy_.yytext.replace(/space\:/, "");
            yy.getLogger().debug("SPACE NUM (LEX)", yy_.yytext);
            return 21;
          case 16:
            yy_.yytext = "1";
            yy.getLogger().debug("COLUMNS (LEX)", yy_.yytext);
            return 21;
          case 17:
            return 43;
          case 18:
            return "LINKSTYLE";
          case 19:
            return "INTERPOLATE";
          case 20:
            this.pushState("CLASSDEF");
            return 40;
          case 21:
            this.popState();
            this.pushState("CLASSDEFID");
            return "DEFAULT_CLASSDEF_ID";
          case 22:
            this.popState();
            this.pushState("CLASSDEFID");
            return 41;
          case 23:
            this.popState();
            return 42;
          case 24:
            this.pushState("CLASS");
            return 44;
          case 25:
            this.popState();
            this.pushState("CLASS_STYLE");
            return 45;
          case 26:
            this.popState();
            return 46;
          case 27:
            this.pushState("STYLE_STMNT");
            return 47;
          case 28:
            this.popState();
            this.pushState("STYLE_DEFINITION");
            return 48;
          case 29:
            this.popState();
            return 49;
          case 30:
            this.pushState("acc_title");
            return "acc_title";
          case 31:
            this.popState();
            return "acc_title_value";
          case 32:
            this.pushState("acc_descr");
            return "acc_descr";
          case 33:
            this.popState();
            return "acc_descr_value";
          case 34:
            this.pushState("acc_descr_multiline");
            break;
          case 35:
            this.popState();
            break;
          case 36:
            return "acc_descr_multiline_value";
          case 37:
            return 30;
          case 38:
            this.popState();
            yy.getLogger().debug("Lex: ((");
            return "NODE_DEND";
          case 39:
            this.popState();
            yy.getLogger().debug("Lex: ((");
            return "NODE_DEND";
          case 40:
            this.popState();
            yy.getLogger().debug("Lex: ))");
            return "NODE_DEND";
          case 41:
            this.popState();
            yy.getLogger().debug("Lex: ((");
            return "NODE_DEND";
          case 42:
            this.popState();
            yy.getLogger().debug("Lex: ((");
            return "NODE_DEND";
          case 43:
            this.popState();
            yy.getLogger().debug("Lex: (-");
            return "NODE_DEND";
          case 44:
            this.popState();
            yy.getLogger().debug("Lex: -)");
            return "NODE_DEND";
          case 45:
            this.popState();
            yy.getLogger().debug("Lex: ((");
            return "NODE_DEND";
          case 46:
            this.popState();
            yy.getLogger().debug("Lex: ]]");
            return "NODE_DEND";
          case 47:
            this.popState();
            yy.getLogger().debug("Lex: (");
            return "NODE_DEND";
          case 48:
            this.popState();
            yy.getLogger().debug("Lex: ])");
            return "NODE_DEND";
          case 49:
            this.popState();
            yy.getLogger().debug("Lex: /]");
            return "NODE_DEND";
          case 50:
            this.popState();
            yy.getLogger().debug("Lex: /]");
            return "NODE_DEND";
          case 51:
            this.popState();
            yy.getLogger().debug("Lex: )]");
            return "NODE_DEND";
          case 52:
            this.popState();
            yy.getLogger().debug("Lex: )");
            return "NODE_DEND";
          case 53:
            this.popState();
            yy.getLogger().debug("Lex: ]>");
            return "NODE_DEND";
          case 54:
            this.popState();
            yy.getLogger().debug("Lex: ]");
            return "NODE_DEND";
          case 55:
            yy.getLogger().debug("Lexa: -)");
            this.pushState("NODE");
            return 36;
          case 56:
            yy.getLogger().debug("Lexa: (-");
            this.pushState("NODE");
            return 36;
          case 57:
            yy.getLogger().debug("Lexa: ))");
            this.pushState("NODE");
            return 36;
          case 58:
            yy.getLogger().debug("Lexa: )");
            this.pushState("NODE");
            return 36;
          case 59:
            yy.getLogger().debug("Lex: (((");
            this.pushState("NODE");
            return 36;
          case 60:
            yy.getLogger().debug("Lexa: )");
            this.pushState("NODE");
            return 36;
          case 61:
            yy.getLogger().debug("Lexa: )");
            this.pushState("NODE");
            return 36;
          case 62:
            yy.getLogger().debug("Lexa: )");
            this.pushState("NODE");
            return 36;
          case 63:
            yy.getLogger().debug("Lexc: >");
            this.pushState("NODE");
            return 36;
          case 64:
            yy.getLogger().debug("Lexa: ([");
            this.pushState("NODE");
            return 36;
          case 65:
            yy.getLogger().debug("Lexa: )");
            this.pushState("NODE");
            return 36;
          case 66:
            this.pushState("NODE");
            return 36;
          case 67:
            this.pushState("NODE");
            return 36;
          case 68:
            this.pushState("NODE");
            return 36;
          case 69:
            this.pushState("NODE");
            return 36;
          case 70:
            this.pushState("NODE");
            return 36;
          case 71:
            this.pushState("NODE");
            return 36;
          case 72:
            this.pushState("NODE");
            return 36;
          case 73:
            yy.getLogger().debug("Lexa: [");
            this.pushState("NODE");
            return 36;
          case 74:
            this.pushState("BLOCK_ARROW");
            yy.getLogger().debug("LEX ARR START");
            return 38;
          case 75:
            yy.getLogger().debug("Lex: NODE_ID", yy_.yytext);
            return 32;
          case 76:
            yy.getLogger().debug("Lex: EOF", yy_.yytext);
            return 8;
          case 77:
            this.pushState("md_string");
            break;
          case 78:
            this.pushState("md_string");
            break;
          case 79:
            return "NODE_DESCR";
          case 80:
            this.popState();
            break;
          case 81:
            yy.getLogger().debug("Lex: Starting string");
            this.pushState("string");
            break;
          case 82:
            yy.getLogger().debug("LEX ARR: Starting string");
            this.pushState("string");
            break;
          case 83:
            yy.getLogger().debug("LEX: NODE_DESCR:", yy_.yytext);
            return "NODE_DESCR";
          case 84:
            yy.getLogger().debug("LEX POPPING");
            this.popState();
            break;
          case 85:
            yy.getLogger().debug("Lex: =>BAE");
            this.pushState("ARROW_DIR");
            break;
          case 86:
            yy_.yytext = yy_.yytext.replace(/^,\s*/, "");
            yy.getLogger().debug("Lex (right): dir:", yy_.yytext);
            return "DIR";
          case 87:
            yy_.yytext = yy_.yytext.replace(/^,\s*/, "");
            yy.getLogger().debug("Lex (left):", yy_.yytext);
            return "DIR";
          case 88:
            yy_.yytext = yy_.yytext.replace(/^,\s*/, "");
            yy.getLogger().debug("Lex (x):", yy_.yytext);
            return "DIR";
          case 89:
            yy_.yytext = yy_.yytext.replace(/^,\s*/, "");
            yy.getLogger().debug("Lex (y):", yy_.yytext);
            return "DIR";
          case 90:
            yy_.yytext = yy_.yytext.replace(/^,\s*/, "");
            yy.getLogger().debug("Lex (up):", yy_.yytext);
            return "DIR";
          case 91:
            yy_.yytext = yy_.yytext.replace(/^,\s*/, "");
            yy.getLogger().debug("Lex (down):", yy_.yytext);
            return "DIR";
          case 92:
            yy_.yytext = "]>";
            yy.getLogger().debug("Lex (ARROW_DIR end):", yy_.yytext);
            this.popState();
            this.popState();
            return "BLOCK_ARROW_END";
          case 93:
            yy.getLogger().debug("Lex: LINK", "#" + yy_.yytext + "#");
            return 15;
          case 94:
            yy.getLogger().debug("Lex: LINK", yy_.yytext);
            return 15;
          case 95:
            yy.getLogger().debug("Lex: LINK", yy_.yytext);
            return 15;
          case 96:
            yy.getLogger().debug("Lex: LINK", yy_.yytext);
            return 15;
          case 97:
            yy.getLogger().debug("Lex: START_LINK", yy_.yytext);
            this.pushState("LLABEL");
            return 16;
          case 98:
            yy.getLogger().debug("Lex: START_LINK", yy_.yytext);
            this.pushState("LLABEL");
            return 16;
          case 99:
            yy.getLogger().debug("Lex: START_LINK", yy_.yytext);
            this.pushState("LLABEL");
            return 16;
          case 100:
            this.pushState("md_string");
            break;
          case 101:
            yy.getLogger().debug("Lex: Starting string");
            this.pushState("string");
            return "LINK_LABEL";
          case 102:
            this.popState();
            yy.getLogger().debug("Lex: LINK", "#" + yy_.yytext + "#");
            return 15;
          case 103:
            this.popState();
            yy.getLogger().debug("Lex: LINK", yy_.yytext);
            return 15;
          case 104:
            this.popState();
            yy.getLogger().debug("Lex: LINK", yy_.yytext);
            return 15;
          case 105:
            yy.getLogger().debug("Lex: COLON", yy_.yytext);
            yy_.yytext = yy_.yytext.slice(1);
            return 27;
        }
      },
      rules: [/^(?:block-beta\b)/, /^(?:block\s+)/, /^(?:block\n+)/, /^(?:block:)/, /^(?:[\s]+)/, /^(?:[\n]+)/, /^(?:((\u000D\u000A)|(\u000A)))/, /^(?:columns\s+auto\b)/, /^(?:columns\s+[\d]+)/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]*)/, /^(?:space[:]\d+)/, /^(?:space\b)/, /^(?:default\b)/, /^(?:linkStyle\b)/, /^(?:interpolate\b)/, /^(?:classDef\s+)/, /^(?:DEFAULT\s+)/, /^(?:\w+\s+)/, /^(?:[^\n]*)/, /^(?:class\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:style\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:end\b\s*)/, /^(?:\(\(\()/, /^(?:\)\)\))/, /^(?:[\)]\))/, /^(?:\}\})/, /^(?:\})/, /^(?:\(-)/, /^(?:-\))/, /^(?:\(\()/, /^(?:\]\])/, /^(?:\()/, /^(?:\]\))/, /^(?:\\\])/, /^(?:\/\])/, /^(?:\)\])/, /^(?:[\)])/, /^(?:\]>)/, /^(?:[\]])/, /^(?:-\))/, /^(?:\(-)/, /^(?:\)\))/, /^(?:\))/, /^(?:\(\(\()/, /^(?:\(\()/, /^(?:\{\{)/, /^(?:\{)/, /^(?:>)/, /^(?:\(\[)/, /^(?:\()/, /^(?:\[\[)/, /^(?:\[\|)/, /^(?:\[\()/, /^(?:\)\)\))/, /^(?:\[\\)/, /^(?:\[\/)/, /^(?:\[\\)/, /^(?:\[)/, /^(?:<\[)/, /^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/, /^(?:$)/, /^(?:["][`])/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]+)/, /^(?:["])/, /^(?:\]>\s*\()/, /^(?:,?\s*right\s*)/, /^(?:,?\s*left\s*)/, /^(?:,?\s*x\s*)/, /^(?:,?\s*y\s*)/, /^(?:,?\s*up\s*)/, /^(?:,?\s*down\s*)/, /^(?:\)\s*)/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?:\s*~~[\~]+\s*)/, /^(?:\s*[xo<]?--\s*)/, /^(?:\s*[xo<]?==\s*)/, /^(?:\s*[xo<]?-\.\s*)/, /^(?:["][`])/, /^(?:["])/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?::\d+)/],
      conditions: { "STYLE_DEFINITION": { "rules": [29], "inclusive": false }, "STYLE_STMNT": { "rules": [28], "inclusive": false }, "CLASSDEFID": { "rules": [23], "inclusive": false }, "CLASSDEF": { "rules": [21, 22], "inclusive": false }, "CLASS_STYLE": { "rules": [26], "inclusive": false }, "CLASS": { "rules": [25], "inclusive": false }, "LLABEL": { "rules": [100, 101, 102, 103, 104], "inclusive": false }, "ARROW_DIR": { "rules": [86, 87, 88, 89, 90, 91, 92], "inclusive": false }, "BLOCK_ARROW": { "rules": [77, 82, 85], "inclusive": false }, "NODE": { "rules": [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 78, 81], "inclusive": false }, "md_string": { "rules": [10, 11, 79, 80], "inclusive": false }, "space": { "rules": [], "inclusive": false }, "string": { "rules": [13, 14, 83, 84], "inclusive": false }, "acc_descr_multiline": { "rules": [35, 36], "inclusive": false }, "acc_descr": { "rules": [33], "inclusive": false }, "acc_title": { "rules": [31], "inclusive": false }, "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 17, 18, 19, 20, 24, 27, 30, 32, 34, 37, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 93, 94, 95, 96, 97, 98, 99, 105], "inclusive": true } }
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
let blockDatabase = {};
let edgeList = [];
let edgeCount = {};
const COLOR_KEYWORD = "color";
const FILL_KEYWORD = "fill";
const BG_FILL = "bgFill";
const STYLECLASS_SEP = ",";
const config = index.getConfig();
let classes = {};
const sanitizeText = (txt) => index.common$1.sanitizeText(txt, config);
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
const addStyle2Node = function(id, styles = "") {
  const foundBlock = blockDatabase[id];
  if (styles !== void 0 && styles !== null) {
    foundBlock.styles = styles.split(STYLECLASS_SEP);
  }
};
const setCssClass = function(itemIds, cssClassName) {
  itemIds.split(",").forEach(function(id) {
    let foundBlock = blockDatabase[id];
    if (foundBlock === void 0) {
      const trimmedId = id.trim();
      blockDatabase[trimmedId] = { id: trimmedId, type: "na", children: [] };
      foundBlock = blockDatabase[trimmedId];
    }
    if (!foundBlock.classes) {
      foundBlock.classes = [];
    }
    foundBlock.classes.push(cssClassName);
  });
};
const populateBlockDatabase = (_blockList, parent) => {
  const blockList = _blockList.flat();
  const children = [];
  for (const block of blockList) {
    if (block.label) {
      block.label = sanitizeText(block.label);
    }
    if (block.type === "classDef") {
      addStyleClass(block.id, block.css);
      continue;
    }
    if (block.type === "applyClass") {
      setCssClass(block.id, (block == null ? void 0 : block.styleClass) || "");
      continue;
    }
    if (block.type === "applyStyles") {
      if (block == null ? void 0 : block.stylesStr) {
        addStyle2Node(block.id, block == null ? void 0 : block.stylesStr);
      }
      continue;
    }
    if (block.type === "column-setting") {
      parent.columns = block.columns || -1;
    } else if (block.type === "edge") {
      if (edgeCount[block.id]) {
        edgeCount[block.id]++;
      } else {
        edgeCount[block.id] = 1;
      }
      block.id = edgeCount[block.id] + "-" + block.id;
      edgeList.push(block);
    } else {
      if (!block.label) {
        if (block.type === "composite") {
          block.label = "";
        } else {
          block.label = block.id;
        }
      }
      const newBlock = !blockDatabase[block.id];
      if (newBlock) {
        blockDatabase[block.id] = block;
      } else {
        if (block.type !== "na") {
          blockDatabase[block.id].type = block.type;
        }
        if (block.label !== block.id) {
          blockDatabase[block.id].label = block.label;
        }
      }
      if (block.children) {
        populateBlockDatabase(block.children, block);
      }
      if (block.type === "space") {
        const w = block.width || 1;
        for (let j = 0; j < w; j++) {
          const newBlock2 = clone.clone(block);
          newBlock2.id = newBlock2.id + "-" + j;
          blockDatabase[newBlock2.id] = newBlock2;
          children.push(newBlock2);
        }
      } else if (newBlock) {
        children.push(block);
      }
    }
  }
  parent.children = children;
};
let blocks = [];
let rootBlock = { id: "root", type: "composite", children: [], columns: -1 };
const clear = () => {
  index.log$1.debug("Clear called");
  index.clear();
  rootBlock = { id: "root", type: "composite", children: [], columns: -1 };
  blockDatabase = { root: rootBlock };
  blocks = [];
  classes = {};
  edgeList = [];
  edgeCount = {};
};
function typeStr2Type(typeStr) {
  index.log$1.debug("typeStr2Type", typeStr);
  switch (typeStr) {
    case "[]":
      return "square";
    case "()":
      index.log$1.debug("we have a round");
      return "round";
    case "(())":
      return "circle";
    case ">]":
      return "rect_left_inv_arrow";
    case "{}":
      return "diamond";
    case "{{}}":
      return "hexagon";
    case "([])":
      return "stadium";
    case "[[]]":
      return "subroutine";
    case "[()]":
      return "cylinder";
    case "((()))":
      return "doublecircle";
    case "[//]":
      return "lean_right";
    case "[\\\\]":
      return "lean_left";
    case "[/\\]":
      return "trapezoid";
    case "[\\/]":
      return "inv_trapezoid";
    case "<[]>":
      return "block_arrow";
    default:
      return "na";
  }
}
function edgeTypeStr2Type(typeStr) {
  index.log$1.debug("typeStr2Type", typeStr);
  switch (typeStr) {
    case "==":
      return "thick";
    default:
      return "normal";
  }
}
function edgeStrToEdgeData(typeStr) {
  switch (typeStr.trim()) {
    case "--x":
      return "arrow_cross";
    case "--o":
      return "arrow_circle";
    default:
      return "arrow_point";
  }
}
let cnt = 0;
const generateId = () => {
  cnt++;
  return "id-" + Math.random().toString(36).substr(2, 12) + "-" + cnt;
};
const setHierarchy = (block) => {
  rootBlock.children = block;
  populateBlockDatabase(block, rootBlock);
  blocks = rootBlock.children;
};
const getColumns = (blockId) => {
  const block = blockDatabase[blockId];
  if (!block) {
    return -1;
  }
  if (block.columns) {
    return block.columns;
  }
  if (!block.children) {
    return -1;
  }
  return block.children.length;
};
const getBlocksFlat = () => {
  return [...Object.values(blockDatabase)];
};
const getBlocks = () => {
  return blocks || [];
};
const getEdges = () => {
  return edgeList;
};
const getBlock = (id) => {
  return blockDatabase[id];
};
const setBlock = (block) => {
  blockDatabase[block.id] = block;
};
const getLogger = () => console;
const getClasses$1 = function() {
  return classes;
};
const db = {
  getConfig: () => index.getConfig$1().block,
  typeStr2Type,
  edgeTypeStr2Type,
  edgeStrToEdgeData,
  getLogger,
  getBlocksFlat,
  getBlocks,
  getEdges,
  setHierarchy,
  getBlock,
  setBlock,
  getColumns,
  getClasses: getClasses$1,
  clear,
  generateId
};
const db$1 = db;
const fade = (color, opacity) => {
  const channel$1 = channel.channel;
  const r = channel$1(color, "r");
  const g = channel$1(color, "g");
  const b = channel$1(color, "b");
  return index.rgba(r, g, b, opacity);
};
const getStyles = (options) => `.label {
    font-family: ${options.fontFamily};
    color: ${options.nodeTextColor || options.textColor};
  }
  .cluster-label text {
    fill: ${options.titleColor};
  }
  .cluster-label span,p {
    color: ${options.titleColor};
  }



  .label text,span,p {
    fill: ${options.nodeTextColor || options.textColor};
    color: ${options.nodeTextColor || options.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${options.mainBkg};
    stroke: ${options.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${options.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${options.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${options.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${options.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${options.edgeLabelBackground};
      fill: ${options.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${fade(options.edgeLabelBackground, 0.5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${fade(options.mainBkg, 0.5)};
    fill: ${fade(options.clusterBkg, 0.5)};
    stroke: ${fade(options.clusterBorder, 0.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${options.titleColor};
  }

  .cluster span,p {
    color: ${options.titleColor};
  }
  /* .cluster div {
    color: ${options.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${options.fontFamily};
    font-size: 12px;
    background: ${options.tertiaryColor};
    border: 1px solid ${options.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${options.textColor};
  }
`;
const flowStyles = getStyles;
function getNodeFromBlock(block, db2, positioned = false) {
  var _a2, _b2, _c;
  const vertex = block;
  let classStr = "default";
  if ((((_a2 = vertex == null ? void 0 : vertex.classes) == null ? void 0 : _a2.length) || 0) > 0) {
    classStr = ((vertex == null ? void 0 : vertex.classes) || []).join(" ");
  }
  classStr = classStr + " flowchart-label";
  let radius = 0;
  let shape = "";
  let padding2;
  switch (vertex.type) {
    case "round":
      radius = 5;
      shape = "rect";
      break;
    case "composite":
      radius = 0;
      shape = "composite";
      padding2 = 0;
      break;
    case "square":
      shape = "rect";
      break;
    case "diamond":
      shape = "question";
      break;
    case "hexagon":
      shape = "hexagon";
      break;
    case "block_arrow":
      shape = "block_arrow";
      break;
    case "odd":
      shape = "rect_left_inv_arrow";
      break;
    case "lean_right":
      shape = "lean_right";
      break;
    case "lean_left":
      shape = "lean_left";
      break;
    case "trapezoid":
      shape = "trapezoid";
      break;
    case "inv_trapezoid":
      shape = "inv_trapezoid";
      break;
    case "rect_left_inv_arrow":
      shape = "rect_left_inv_arrow";
      break;
    case "circle":
      shape = "circle";
      break;
    case "ellipse":
      shape = "ellipse";
      break;
    case "stadium":
      shape = "stadium";
      break;
    case "subroutine":
      shape = "subroutine";
      break;
    case "cylinder":
      shape = "cylinder";
      break;
    case "group":
      shape = "rect";
      break;
    case "doublecircle":
      shape = "doublecircle";
      break;
    default:
      shape = "rect";
  }
  const styles = index.getStylesFromArray((vertex == null ? void 0 : vertex.styles) || []);
  const vertexText = vertex.label;
  const bounds = vertex.size || { width: 0, height: 0, x: 0, y: 0 };
  const node = {
    labelStyle: styles.labelStyle,
    shape,
    labelText: vertexText,
    rx: radius,
    ry: radius,
    class: classStr,
    style: styles.style,
    id: vertex.id,
    directions: vertex.directions,
    width: bounds.width,
    height: bounds.height,
    x: bounds.x,
    y: bounds.y,
    positioned,
    intersect: void 0,
    type: vertex.type,
    padding: padding2 ?? (((_c = (_b2 = index.getConfig$1()) == null ? void 0 : _b2.block) == null ? void 0 : _c.padding) || 0)
  };
  return node;
}
async function calculateBlockSize(elem, block, db2) {
  const node = getNodeFromBlock(block, db2, false);
  if (node.type === "group") {
    return;
  }
  const nodeEl = await edgesE0da2a9e.insertNode(elem, node);
  const boundingBox = nodeEl.node().getBBox();
  const obj = db2.getBlock(node.id);
  obj.size = { width: boundingBox.width, height: boundingBox.height, x: 0, y: 0, node: nodeEl };
  db2.setBlock(obj);
  nodeEl.remove();
}
async function insertBlockPositioned(elem, block, db2) {
  const node = getNodeFromBlock(block, db2, true);
  const obj = db2.getBlock(node.id);
  if (obj.type !== "space") {
    await edgesE0da2a9e.insertNode(elem, node);
    block.intersect = node == null ? void 0 : node.intersect;
    edgesE0da2a9e.positionNode(node);
  }
}
async function performOperations(elem, blocks2, db2, operation) {
  for (const block of blocks2) {
    await operation(elem, block, db2);
    if (block.children) {
      await performOperations(elem, block.children, db2, operation);
    }
  }
}
async function calculateBlockSizes(elem, blocks2, db2) {
  await performOperations(elem, blocks2, db2, calculateBlockSize);
}
async function insertBlocks(elem, blocks2, db2) {
  await performOperations(elem, blocks2, db2, insertBlockPositioned);
}
async function insertEdges(elem, edges, blocks2, db2, id) {
  const g = new graph.Graph({
    multigraph: true,
    compound: true
  });
  g.setGraph({
    rankdir: "TB",
    nodesep: 10,
    ranksep: 10,
    marginx: 8,
    marginy: 8
  });
  for (const block of blocks2) {
    if (block.size) {
      g.setNode(block.id, {
        width: block.size.width,
        height: block.size.height,
        intersect: block.intersect
      });
    }
  }
  for (const edge of edges) {
    if (edge.start && edge.end) {
      const startBlock = db2.getBlock(edge.start);
      const endBlock = db2.getBlock(edge.end);
      if ((startBlock == null ? void 0 : startBlock.size) && (endBlock == null ? void 0 : endBlock.size)) {
        const start = startBlock.size;
        const end = endBlock.size;
        const points = [
          { x: start.x, y: start.y },
          { x: start.x + (end.x - start.x) / 2, y: start.y + (end.y - start.y) / 2 },
          { x: end.x, y: end.y }
        ];
        await edgesE0da2a9e.insertEdge(
          elem,
          { v: edge.start, w: edge.end, name: edge.id },
          {
            ...edge,
            arrowTypeEnd: edge.arrowTypeEnd,
            arrowTypeStart: edge.arrowTypeStart,
            points,
            classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
          },
          void 0,
          "block",
          g,
          id
        );
        if (edge.label) {
          await edgesE0da2a9e.insertEdgeLabel(elem, {
            ...edge,
            label: edge.label,
            labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
            arrowTypeEnd: edge.arrowTypeEnd,
            arrowTypeStart: edge.arrowTypeStart,
            points,
            classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
          });
          await edgesE0da2a9e.positionEdgeLabel(
            { ...edge, x: points[1].x, y: points[1].y },
            {
              originalPath: points
            }
          );
        }
      }
    }
  }
}
const padding = ((_b = (_a = index.getConfig()) == null ? void 0 : _a.block) == null ? void 0 : _b.padding) || 8;
function calculateBlockPosition(columns, position) {
  if (columns === 0 || !Number.isInteger(columns)) {
    throw new Error("Columns must be an integer !== 0.");
  }
  if (position < 0 || !Number.isInteger(position)) {
    throw new Error("Position must be a non-negative integer." + position);
  }
  if (columns < 0) {
    return { px: position, py: 0 };
  }
  if (columns === 1) {
    return { px: 0, py: position };
  }
  const px = position % columns;
  const py = Math.floor(position / columns);
  return { px, py };
}
const getMaxChildSize = (block) => {
  let maxWidth = 0;
  let maxHeight = 0;
  for (const child of block.children) {
    const { width, height, x, y } = child.size || { width: 0, height: 0, x: 0, y: 0 };
    index.log$1.debug(
      "getMaxChildSize abc95 child:",
      child.id,
      "width:",
      width,
      "height:",
      height,
      "x:",
      x,
      "y:",
      y,
      child.type
    );
    if (child.type === "space") {
      continue;
    }
    if (width > maxWidth) {
      maxWidth = width / (block.widthInColumns || 1);
    }
    if (height > maxHeight) {
      maxHeight = height;
    }
  }
  return { width: maxWidth, height: maxHeight };
};
function setBlockSizes(block, db2, siblingWidth = 0, siblingHeight = 0) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  index.log$1.debug(
    "setBlockSizes abc95 (start)",
    block.id,
    (_a2 = block == null ? void 0 : block.size) == null ? void 0 : _a2.x,
    "block width =",
    block == null ? void 0 : block.size,
    "sieblingWidth",
    siblingWidth
  );
  if (!((_b2 = block == null ? void 0 : block.size) == null ? void 0 : _b2.width)) {
    block.size = {
      width: siblingWidth,
      height: siblingHeight,
      x: 0,
      y: 0
    };
  }
  let maxWidth = 0;
  let maxHeight = 0;
  if (((_c = block.children) == null ? void 0 : _c.length) > 0) {
    for (const child of block.children) {
      setBlockSizes(child, db2);
    }
    const childSize = getMaxChildSize(block);
    maxWidth = childSize.width;
    maxHeight = childSize.height;
    index.log$1.debug("setBlockSizes abc95 maxWidth of", block.id, ":s children is ", maxWidth, maxHeight);
    for (const child of block.children) {
      if (child.size) {
        index.log$1.debug(
          `abc95 Setting size of children of ${block.id} id=${child.id} ${maxWidth} ${maxHeight} ${child.size}`
        );
        child.size.width = maxWidth * (child.widthInColumns || 1) + padding * ((child.widthInColumns || 1) - 1);
        child.size.height = maxHeight;
        child.size.x = 0;
        child.size.y = 0;
        index.log$1.debug(
          `abc95 updating size of ${block.id} children child:${child.id} maxWidth:${maxWidth} maxHeight:${maxHeight}`
        );
      }
    }
    for (const child of block.children) {
      setBlockSizes(child, db2, maxWidth, maxHeight);
    }
    const columns = block.columns || -1;
    let numItems = 0;
    for (const child of block.children) {
      numItems += child.widthInColumns || 1;
    }
    let xSize = block.children.length;
    if (columns > 0 && columns < numItems) {
      xSize = columns;
    }
    block.widthInColumns || 1;
    const ySize = Math.ceil(numItems / xSize);
    let width = xSize * (maxWidth + padding) + padding;
    let height = ySize * (maxHeight + padding) + padding;
    if (width < siblingWidth) {
      index.log$1.debug(
        `Detected to small siebling: abc95 ${block.id} sieblingWidth ${siblingWidth} sieblingHeight ${siblingHeight} width ${width}`
      );
      width = siblingWidth;
      height = siblingHeight;
      const childWidth = (siblingWidth - xSize * padding - padding) / xSize;
      const childHeight = (siblingHeight - ySize * padding - padding) / ySize;
      index.log$1.debug("Size indata abc88", block.id, "childWidth", childWidth, "maxWidth", maxWidth);
      index.log$1.debug("Size indata abc88", block.id, "childHeight", childHeight, "maxHeight", maxHeight);
      index.log$1.debug("Size indata abc88 xSize", xSize, "padding", padding);
      for (const child of block.children) {
        if (child.size) {
          child.size.width = childWidth;
          child.size.height = childHeight;
          child.size.x = 0;
          child.size.y = 0;
        }
      }
    }
    index.log$1.debug(
      `abc95 (finale calc) ${block.id} xSize ${xSize} ySize ${ySize} columns ${columns}${block.children.length} width=${Math.max(width, ((_d = block.size) == null ? void 0 : _d.width) || 0)}`
    );
    if (width < (((_e = block == null ? void 0 : block.size) == null ? void 0 : _e.width) || 0)) {
      width = ((_f = block == null ? void 0 : block.size) == null ? void 0 : _f.width) || 0;
      const num = columns > 0 ? Math.min(block.children.length, columns) : block.children.length;
      if (num > 0) {
        const childWidth = (width - num * padding - padding) / num;
        index.log$1.debug("abc95 (growing to fit) width", block.id, width, (_g = block.size) == null ? void 0 : _g.width, childWidth);
        for (const child of block.children) {
          if (child.size) {
            child.size.width = childWidth;
          }
        }
      }
    }
    block.size = {
      width,
      height,
      x: 0,
      y: 0
    };
  }
  index.log$1.debug(
    "setBlockSizes abc94 (done)",
    block.id,
    (_h = block == null ? void 0 : block.size) == null ? void 0 : _h.x,
    (_i = block == null ? void 0 : block.size) == null ? void 0 : _i.width,
    (_j = block == null ? void 0 : block.size) == null ? void 0 : _j.y,
    (_k = block == null ? void 0 : block.size) == null ? void 0 : _k.height
  );
}
function layoutBlocks(block, db2) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
  index.log$1.debug(
    `abc85 layout blocks (=>layoutBlocks) ${block.id} x: ${(_a2 = block == null ? void 0 : block.size) == null ? void 0 : _a2.x} y: ${(_b2 = block == null ? void 0 : block.size) == null ? void 0 : _b2.y} width: ${(_c = block == null ? void 0 : block.size) == null ? void 0 : _c.width}`
  );
  const columns = block.columns || -1;
  index.log$1.debug("layoutBlocks columns abc95", block.id, "=>", columns, block);
  if (block.children && // find max width of children
  block.children.length > 0) {
    const width = ((_e = (_d = block == null ? void 0 : block.children[0]) == null ? void 0 : _d.size) == null ? void 0 : _e.width) || 0;
    const widthOfChildren = block.children.length * width + (block.children.length - 1) * padding;
    index.log$1.debug("widthOfChildren 88", widthOfChildren, "posX");
    let columnPos = 0;
    index.log$1.debug("abc91 block?.size?.x", block.id, (_f = block == null ? void 0 : block.size) == null ? void 0 : _f.x);
    let startingPosX = ((_g = block == null ? void 0 : block.size) == null ? void 0 : _g.x) ? ((_h = block == null ? void 0 : block.size) == null ? void 0 : _h.x) + (-((_i = block == null ? void 0 : block.size) == null ? void 0 : _i.width) / 2 || 0) : -padding;
    let rowPos = 0;
    for (const child of block.children) {
      const parent = block;
      if (!child.size) {
        continue;
      }
      const { width: width2, height } = child.size;
      const { px, py } = calculateBlockPosition(columns, columnPos);
      if (py != rowPos) {
        rowPos = py;
        startingPosX = ((_j = block == null ? void 0 : block.size) == null ? void 0 : _j.x) ? ((_k = block == null ? void 0 : block.size) == null ? void 0 : _k.x) + (-((_l = block == null ? void 0 : block.size) == null ? void 0 : _l.width) / 2 || 0) : -padding;
        index.log$1.debug("New row in layout for block", block.id, " and child ", child.id, rowPos);
      }
      index.log$1.debug(
        `abc89 layout blocks (child) id: ${child.id} Pos: ${columnPos} (px, py) ${px},${py} (${(_m = parent == null ? void 0 : parent.size) == null ? void 0 : _m.x},${(_n = parent == null ? void 0 : parent.size) == null ? void 0 : _n.y}) parent: ${parent.id} width: ${width2}${padding}`
      );
      if (parent.size) {
        const halfWidth = width2 / 2;
        child.size.x = startingPosX + padding + halfWidth;
        index.log$1.debug(
          `abc91 layout blocks (calc) px, pyid:${child.id} startingPos=X${startingPosX} new startingPosX${child.size.x} ${halfWidth} padding=${padding} width=${width2} halfWidth=${halfWidth} => x:${child.size.x} y:${child.size.y} ${child.widthInColumns} (width * (child?.w || 1)) / 2 ${width2 * ((child == null ? void 0 : child.widthInColumns) || 1) / 2}`
        );
        startingPosX = child.size.x + halfWidth;
        child.size.y = parent.size.y - parent.size.height / 2 + py * (height + padding) + height / 2 + padding;
        index.log$1.debug(
          `abc88 layout blocks (calc) px, pyid:${child.id}startingPosX${startingPosX}${padding}${halfWidth}=>x:${child.size.x}y:${child.size.y}${child.widthInColumns}(width * (child?.w || 1)) / 2${width2 * ((child == null ? void 0 : child.widthInColumns) || 1) / 2}`
        );
      }
      if (child.children) {
        layoutBlocks(child);
      }
      columnPos += (child == null ? void 0 : child.widthInColumns) || 1;
      index.log$1.debug("abc88 columnsPos", child, columnPos);
    }
  }
  index.log$1.debug(
    `layout blocks (<==layoutBlocks) ${block.id} x: ${(_o = block == null ? void 0 : block.size) == null ? void 0 : _o.x} y: ${(_p = block == null ? void 0 : block.size) == null ? void 0 : _p.y} width: ${(_q = block == null ? void 0 : block.size) == null ? void 0 : _q.width}`
  );
}
function findBounds(block, { minX, minY, maxX, maxY } = { minX: 0, minY: 0, maxX: 0, maxY: 0 }) {
  if (block.size && block.id !== "root") {
    const { x, y, width, height } = block.size;
    if (x - width / 2 < minX) {
      minX = x - width / 2;
    }
    if (y - height / 2 < minY) {
      minY = y - height / 2;
    }
    if (x + width / 2 > maxX) {
      maxX = x + width / 2;
    }
    if (y + height / 2 > maxY) {
      maxY = y + height / 2;
    }
  }
  if (block.children) {
    for (const child of block.children) {
      ({ minX, minY, maxX, maxY } = findBounds(child, { minX, minY, maxX, maxY }));
    }
  }
  return { minX, minY, maxX, maxY };
}
function layout(db2) {
  const root = db2.getBlock("root");
  if (!root) {
    return;
  }
  setBlockSizes(root, db2, 0, 0);
  layoutBlocks(root);
  index.log$1.debug("getBlocks", JSON.stringify(root, null, 2));
  const { minX, minY, maxX, maxY } = findBounds(root);
  const height = maxY - minY;
  const width = maxX - minX;
  return { x: minX, y: minY, width, height };
}
const getClasses = function(text, diagObj) {
  return diagObj.db.getClasses();
};
const draw = async function(text, id, _version, diagObj) {
  const { securityLevel, block: conf } = index.getConfig$1();
  const db2 = diagObj.db;
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = index.select("#i" + id);
  }
  const root = securityLevel === "sandbox" ? index.select(sandboxElement.nodes()[0].contentDocument.body) : index.select("body");
  const svg = securityLevel === "sandbox" ? root.select(`[id="${id}"]`) : index.select(`[id="${id}"]`);
  const markers = ["point", "circle", "cross"];
  edgesE0da2a9e.insertMarkers$1(svg, markers, diagObj.type, id);
  const bl = db2.getBlocks();
  const blArr = db2.getBlocksFlat();
  const edges = db2.getEdges();
  const nodes = svg.insert("g").attr("class", "block");
  await calculateBlockSizes(nodes, bl, db2);
  const bounds = layout(db2);
  await insertBlocks(nodes, bl, db2);
  await insertEdges(nodes, edges, blArr, db2, id);
  if (bounds) {
    const bounds2 = bounds;
    const magicFactor = Math.max(1, Math.round(0.125 * (bounds2.width / bounds2.height)));
    const height = bounds2.height + magicFactor + 10;
    const width = bounds2.width + 10;
    const { useMaxWidth } = conf;
    index.configureSvgSize(svg, height, width, !!useMaxWidth);
    index.log$1.debug("Here Bounds", bounds, bounds2);
    svg.attr(
      "viewBox",
      `${bounds2.x - 5} ${bounds2.y - 5} ${bounds2.width + 10} ${bounds2.height + 10}`
    );
  }
  ordinal.ordinal(Tableau10.schemeTableau10);
};
const renderer = {
  draw,
  getClasses
};
const diagram = {
  parser: parser$1,
  db: db$1,
  renderer,
  styles: flowStyles
};

exports.diagram = diagram;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tEaWFncmFtLTM4YWI0ZmRiLTJmMmUyM2Y4LmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvbWVybWFpZC9kaXN0L2Jsb2NrRGlhZ3JhbS0zOGFiNGZkYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX2EsIF9iO1xuaW1wb3J0IHsgYyBhcyBnZXRDb25maWcsIEYgYXMgZ2V0Q29uZmlnJDEsIGwgYXMgbG9nLCB2IGFzIGNsZWFyJDEsIGUgYXMgY29tbW9uLCBrIGFzIGdldFN0eWxlc0Zyb21BcnJheSwgaSBhcyBjb25maWd1cmVTdmdTaXplIH0gZnJvbSBcIi4vbWVybWFpZC1iNTg2MGI1NC5qc1wiO1xuaW1wb3J0IGNsb25lIGZyb20gXCJsb2Rhc2gtZXMvY2xvbmUuanNcIjtcbmltcG9ydCAqIGFzIGtocm9tYSBmcm9tIFwia2hyb21hXCI7XG5pbXBvcnQgeyBoIGFzIGluc2VydEVkZ2UsIGYgYXMgaW5zZXJ0RWRnZUxhYmVsLCBqIGFzIHBvc2l0aW9uRWRnZUxhYmVsLCBlIGFzIGluc2VydE5vZGUsIHAgYXMgcG9zaXRpb25Ob2RlLCBhIGFzIGluc2VydE1hcmtlcnMgfSBmcm9tIFwiLi9lZGdlcy1lMGRhMmE5ZS5qc1wiO1xuaW1wb3J0ICogYXMgZ3JhcGhsaWIgZnJvbSBcImRhZ3JlLWQzLWVzL3NyYy9ncmFwaGxpYi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgc2VsZWN0LCBzY2FsZU9yZGluYWwsIHNjaGVtZVRhYmxlYXUxMCB9IGZyb20gXCJkM1wiO1xuaW1wb3J0IFwidHMtZGVkZW50XCI7XG5pbXBvcnQgXCJkYXlqc1wiO1xuaW1wb3J0IFwiQGJyYWludHJlZS9zYW5pdGl6ZS11cmxcIjtcbmltcG9ydCBcImRvbXB1cmlmeVwiO1xuaW1wb3J0IFwibG9kYXNoLWVzL21lbW9pemUuanNcIjtcbmltcG9ydCBcImxvZGFzaC1lcy9tZXJnZS5qc1wiO1xuaW1wb3J0IFwic3R5bGlzXCI7XG5pbXBvcnQgXCJsb2Rhc2gtZXMvaXNFbXB0eS5qc1wiO1xuaW1wb3J0IFwiLi9jcmVhdGVUZXh0LTJlNWU3ZGQzLmpzXCI7XG5pbXBvcnQgXCJtZGFzdC11dGlsLWZyb20tbWFya2Rvd25cIjtcbnZhciBwYXJzZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG8gPSBmdW5jdGlvbihrLCB2LCBvMiwgbCkge1xuICAgIGZvciAobzIgPSBvMiB8fCB7fSwgbCA9IGsubGVuZ3RoOyBsLS07IG8yW2tbbF1dID0gdilcbiAgICAgIDtcbiAgICByZXR1cm4gbzI7XG4gIH0sICRWMCA9IFsxLCA3XSwgJFYxID0gWzEsIDEzXSwgJFYyID0gWzEsIDE0XSwgJFYzID0gWzEsIDE1XSwgJFY0ID0gWzEsIDE5XSwgJFY1ID0gWzEsIDE2XSwgJFY2ID0gWzEsIDE3XSwgJFY3ID0gWzEsIDE4XSwgJFY4ID0gWzgsIDMwXSwgJFY5ID0gWzgsIDIxLCAyOCwgMjksIDMwLCAzMSwgMzIsIDQwLCA0NCwgNDddLCAkVmEgPSBbMSwgMjNdLCAkVmIgPSBbMSwgMjRdLCAkVmMgPSBbOCwgMTUsIDE2LCAyMSwgMjgsIDI5LCAzMCwgMzEsIDMyLCA0MCwgNDQsIDQ3XSwgJFZkID0gWzgsIDE1LCAxNiwgMjEsIDI3LCAyOCwgMjksIDMwLCAzMSwgMzIsIDQwLCA0NCwgNDddLCAkVmUgPSBbMSwgNDldO1xuICB2YXIgcGFyc2VyMiA9IHtcbiAgICB0cmFjZTogZnVuY3Rpb24gdHJhY2UoKSB7XG4gICAgfSxcbiAgICB5eToge30sXG4gICAgc3ltYm9sc186IHsgXCJlcnJvclwiOiAyLCBcInNwYWNlTGluZXNcIjogMywgXCJTUEFDRUxJTkVcIjogNCwgXCJOTFwiOiA1LCBcInNlcGFyYXRvclwiOiA2LCBcIlNQQUNFXCI6IDcsIFwiRU9GXCI6IDgsIFwic3RhcnRcIjogOSwgXCJCTE9DS19ESUFHUkFNX0tFWVwiOiAxMCwgXCJkb2N1bWVudFwiOiAxMSwgXCJzdG9wXCI6IDEyLCBcInN0YXRlbWVudFwiOiAxMywgXCJsaW5rXCI6IDE0LCBcIkxJTktcIjogMTUsIFwiU1RBUlRfTElOS1wiOiAxNiwgXCJMSU5LX0xBQkVMXCI6IDE3LCBcIlNUUlwiOiAxOCwgXCJub2RlU3RhdGVtZW50XCI6IDE5LCBcImNvbHVtbnNTdGF0ZW1lbnRcIjogMjAsIFwiU1BBQ0VfQkxPQ0tcIjogMjEsIFwiYmxvY2tTdGF0ZW1lbnRcIjogMjIsIFwiY2xhc3NEZWZTdGF0ZW1lbnRcIjogMjMsIFwiY3NzQ2xhc3NTdGF0ZW1lbnRcIjogMjQsIFwic3R5bGVTdGF0ZW1lbnRcIjogMjUsIFwibm9kZVwiOiAyNiwgXCJTSVpFXCI6IDI3LCBcIkNPTFVNTlNcIjogMjgsIFwiaWQtYmxvY2tcIjogMjksIFwiZW5kXCI6IDMwLCBcImJsb2NrXCI6IDMxLCBcIk5PREVfSURcIjogMzIsIFwibm9kZVNoYXBlTkxhYmVsXCI6IDMzLCBcImRpckxpc3RcIjogMzQsIFwiRElSXCI6IDM1LCBcIk5PREVfRFNUQVJUXCI6IDM2LCBcIk5PREVfREVORFwiOiAzNywgXCJCTE9DS19BUlJPV19TVEFSVFwiOiAzOCwgXCJCTE9DS19BUlJPV19FTkRcIjogMzksIFwiY2xhc3NEZWZcIjogNDAsIFwiQ0xBU1NERUZfSURcIjogNDEsIFwiQ0xBU1NERUZfU1RZTEVPUFRTXCI6IDQyLCBcIkRFRkFVTFRcIjogNDMsIFwiY2xhc3NcIjogNDQsIFwiQ0xBU1NFTlRJVFlfSURTXCI6IDQ1LCBcIlNUWUxFQ0xBU1NcIjogNDYsIFwic3R5bGVcIjogNDcsIFwiU1RZTEVfRU5USVRZX0lEU1wiOiA0OCwgXCJTVFlMRV9ERUZJTklUSU9OX0RBVEFcIjogNDksIFwiJGFjY2VwdFwiOiAwLCBcIiRlbmRcIjogMSB9LFxuICAgIHRlcm1pbmFsc186IHsgMjogXCJlcnJvclwiLCA0OiBcIlNQQUNFTElORVwiLCA1OiBcIk5MXCIsIDc6IFwiU1BBQ0VcIiwgODogXCJFT0ZcIiwgMTA6IFwiQkxPQ0tfRElBR1JBTV9LRVlcIiwgMTU6IFwiTElOS1wiLCAxNjogXCJTVEFSVF9MSU5LXCIsIDE3OiBcIkxJTktfTEFCRUxcIiwgMTg6IFwiU1RSXCIsIDIxOiBcIlNQQUNFX0JMT0NLXCIsIDI3OiBcIlNJWkVcIiwgMjg6IFwiQ09MVU1OU1wiLCAyOTogXCJpZC1ibG9ja1wiLCAzMDogXCJlbmRcIiwgMzE6IFwiYmxvY2tcIiwgMzI6IFwiTk9ERV9JRFwiLCAzNTogXCJESVJcIiwgMzY6IFwiTk9ERV9EU1RBUlRcIiwgMzc6IFwiTk9ERV9ERU5EXCIsIDM4OiBcIkJMT0NLX0FSUk9XX1NUQVJUXCIsIDM5OiBcIkJMT0NLX0FSUk9XX0VORFwiLCA0MDogXCJjbGFzc0RlZlwiLCA0MTogXCJDTEFTU0RFRl9JRFwiLCA0MjogXCJDTEFTU0RFRl9TVFlMRU9QVFNcIiwgNDM6IFwiREVGQVVMVFwiLCA0NDogXCJjbGFzc1wiLCA0NTogXCJDTEFTU0VOVElUWV9JRFNcIiwgNDY6IFwiU1RZTEVDTEFTU1wiLCA0NzogXCJzdHlsZVwiLCA0ODogXCJTVFlMRV9FTlRJVFlfSURTXCIsIDQ5OiBcIlNUWUxFX0RFRklOSVRJT05fREFUQVwiIH0sXG4gICAgcHJvZHVjdGlvbnNfOiBbMCwgWzMsIDFdLCBbMywgMl0sIFszLCAyXSwgWzYsIDFdLCBbNiwgMV0sIFs2LCAxXSwgWzksIDNdLCBbMTIsIDFdLCBbMTIsIDFdLCBbMTIsIDJdLCBbMTIsIDJdLCBbMTEsIDFdLCBbMTEsIDJdLCBbMTQsIDFdLCBbMTQsIDRdLCBbMTMsIDFdLCBbMTMsIDFdLCBbMTMsIDFdLCBbMTMsIDFdLCBbMTMsIDFdLCBbMTMsIDFdLCBbMTMsIDFdLCBbMTksIDNdLCBbMTksIDJdLCBbMTksIDFdLCBbMjAsIDFdLCBbMjIsIDRdLCBbMjIsIDNdLCBbMjYsIDFdLCBbMjYsIDJdLCBbMzQsIDFdLCBbMzQsIDJdLCBbMzMsIDNdLCBbMzMsIDRdLCBbMjMsIDNdLCBbMjMsIDNdLCBbMjQsIDNdLCBbMjUsIDNdXSxcbiAgICBwZXJmb3JtQWN0aW9uOiBmdW5jdGlvbiBhbm9ueW1vdXMoeXl0ZXh0LCB5eWxlbmcsIHl5bGluZW5vLCB5eSwgeXlzdGF0ZSwgJCQsIF8kKSB7XG4gICAgICB2YXIgJDAgPSAkJC5sZW5ndGggLSAxO1xuICAgICAgc3dpdGNoICh5eXN0YXRlKSB7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlJ1bGU6IHNlcGFyYXRvciAoTkwpIFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogc2VwYXJhdG9yIChTcGFjZSkgXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBzZXBhcmF0b3IgKEVPRikgXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBoaWVyYXJjaHk6IFwiLCAkJFskMCAtIDFdKTtcbiAgICAgICAgICB5eS5zZXRIaWVyYXJjaHkoJCRbJDAgLSAxXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlN0b3AgTkwgXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJTdG9wIEVPRiBcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJTdG9wIE5MMiBcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJTdG9wIEVPRjIgXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogc3RhdGVtZW50OiBcIiwgJCRbJDBdKTtcbiAgICAgICAgICB0eXBlb2YgJCRbJDBdLmxlbmd0aCA9PT0gXCJudW1iZXJcIiA/IHRoaXMuJCA9ICQkWyQwXSA6IHRoaXMuJCA9IFskJFskMF1dO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogc3RhdGVtZW50ICMyOiBcIiwgJCRbJDAgLSAxXSk7XG4gICAgICAgICAgdGhpcy4kID0gWyQkWyQwIC0gMV1dLmNvbmNhdCgkJFskMF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogbGluazogXCIsICQkWyQwXSwgeXl0ZXh0KTtcbiAgICAgICAgICB0aGlzLiQgPSB7IGVkZ2VUeXBlU3RyOiAkJFskMF0sIGxhYmVsOiBcIlwiIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBMQUJFTCBsaW5rOiBcIiwgJCRbJDAgLSAzXSwgJCRbJDAgLSAxXSwgJCRbJDBdKTtcbiAgICAgICAgICB0aGlzLiQgPSB7IGVkZ2VUeXBlU3RyOiAkJFskMF0sIGxhYmVsOiAkJFskMCAtIDFdIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQoJCRbJDBdKTtcbiAgICAgICAgICBjb25zdCBzcGFjZUlkID0geXkuZ2VuZXJhdGVJZCgpO1xuICAgICAgICAgIHRoaXMuJCA9IHsgaWQ6IHNwYWNlSWQsIHR5cGU6IFwic3BhY2VcIiwgbGFiZWw6IFwiXCIsIHdpZHRoOiBudW0sIGNoaWxkcmVuOiBbXSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogKG5vZGVTdGF0ZW1lbnQgbGluayBub2RlKSBcIiwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdLCBcIiB0eXBlc3RyOiBcIiwgJCRbJDAgLSAxXS5lZGdlVHlwZVN0cik7XG4gICAgICAgICAgY29uc3QgZWRnZURhdGEgPSB5eS5lZGdlU3RyVG9FZGdlRGF0YSgkJFskMCAtIDFdLmVkZ2VUeXBlU3RyKTtcbiAgICAgICAgICB0aGlzLiQgPSBbXG4gICAgICAgICAgICB7IGlkOiAkJFskMCAtIDJdLmlkLCBsYWJlbDogJCRbJDAgLSAyXS5sYWJlbCwgdHlwZTogJCRbJDAgLSAyXS50eXBlLCBkaXJlY3Rpb25zOiAkJFskMCAtIDJdLmRpcmVjdGlvbnMgfSxcbiAgICAgICAgICAgIHsgaWQ6ICQkWyQwIC0gMl0uaWQgKyBcIi1cIiArICQkWyQwXS5pZCwgc3RhcnQ6ICQkWyQwIC0gMl0uaWQsIGVuZDogJCRbJDBdLmlkLCBsYWJlbDogJCRbJDAgLSAxXS5sYWJlbCwgdHlwZTogXCJlZGdlXCIsIGRpcmVjdGlvbnM6ICQkWyQwXS5kaXJlY3Rpb25zLCBhcnJvd1R5cGVFbmQ6IGVkZ2VEYXRhLCBhcnJvd1R5cGVTdGFydDogXCJhcnJvd19vcGVuXCIgfSxcbiAgICAgICAgICAgIHsgaWQ6ICQkWyQwXS5pZCwgbGFiZWw6ICQkWyQwXS5sYWJlbCwgdHlwZTogeXkudHlwZVN0cjJUeXBlKCQkWyQwXS50eXBlU3RyKSwgZGlyZWN0aW9uczogJCRbJDBdLmRpcmVjdGlvbnMgfVxuICAgICAgICAgIF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBub2RlU3RhdGVtZW50IChhYmM4OCBub2RlIHNpemUpIFwiLCAkJFskMCAtIDFdLCAkJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9IHsgaWQ6ICQkWyQwIC0gMV0uaWQsIGxhYmVsOiAkJFskMCAtIDFdLmxhYmVsLCB0eXBlOiB5eS50eXBlU3RyMlR5cGUoJCRbJDAgLSAxXS50eXBlU3RyKSwgZGlyZWN0aW9uczogJCRbJDAgLSAxXS5kaXJlY3Rpb25zLCB3aWR0aEluQ29sdW1uczogcGFyc2VJbnQoJCRbJDBdLCAxMCkgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlJ1bGU6IG5vZGVTdGF0ZW1lbnQgKG5vZGUpIFwiLCAkJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9IHsgaWQ6ICQkWyQwXS5pZCwgbGFiZWw6ICQkWyQwXS5sYWJlbCwgdHlwZTogeXkudHlwZVN0cjJUeXBlKCQkWyQwXS50eXBlU3RyKSwgZGlyZWN0aW9uczogJCRbJDBdLmRpcmVjdGlvbnMsIHdpZHRoSW5Db2x1bW5zOiAxIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJBUEExMjNcIiwgdGhpcyA/IHRoaXMgOiBcIm5hXCIpO1xuICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiQ09MVU1OUzogXCIsICQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0geyB0eXBlOiBcImNvbHVtbi1zZXR0aW5nXCIsIGNvbHVtbnM6ICQkWyQwXSA9PT0gXCJhdXRvXCIgPyAtMSA6IHBhcnNlSW50KCQkWyQwXSkgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlJ1bGU6IGlkLWJsb2NrIHN0YXRlbWVudCA6IFwiLCAkJFskMCAtIDJdLCAkJFskMCAtIDFdKTtcbiAgICAgICAgICB5eS5nZW5lcmF0ZUlkKCk7XG4gICAgICAgICAgdGhpcy4kID0geyAuLi4kJFskMCAtIDJdLCB0eXBlOiBcImNvbXBvc2l0ZVwiLCBjaGlsZHJlbjogJCRbJDAgLSAxXSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogYmxvY2tTdGF0ZW1lbnQgOiBcIiwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdKTtcbiAgICAgICAgICBjb25zdCBpZCA9IHl5LmdlbmVyYXRlSWQoKTtcbiAgICAgICAgICB0aGlzLiQgPSB7IGlkLCB0eXBlOiBcImNvbXBvc2l0ZVwiLCBsYWJlbDogXCJcIiwgY2hpbGRyZW46ICQkWyQwIC0gMV0gfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlJ1bGU6IG5vZGUgKE5PREVfSUQgc2VwYXJhdG9yKTogXCIsICQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0geyBpZDogJCRbJDBdIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBub2RlIChOT0RFX0lEIG5vZGVTaGFwZU5MYWJlbCBzZXBhcmF0b3IpOiBcIiwgJCRbJDAgLSAxXSwgJCRbJDBdKTtcbiAgICAgICAgICB0aGlzLiQgPSB7IGlkOiAkJFskMCAtIDFdLCBsYWJlbDogJCRbJDBdLmxhYmVsLCB0eXBlU3RyOiAkJFskMF0udHlwZVN0ciwgZGlyZWN0aW9uczogJCRbJDBdLmRpcmVjdGlvbnMgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlJ1bGU6IGRpckxpc3Q6IFwiLCAkJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9IFskJFskMF1dO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogZGlyTGlzdDogXCIsICQkWyQwIC0gMV0sICQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gWyQkWyQwIC0gMV1dLmNvbmNhdCgkJFskMF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogbm9kZVNoYXBlTkxhYmVsOiBcIiwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdKTtcbiAgICAgICAgICB0aGlzLiQgPSB7IHR5cGVTdHI6ICQkWyQwIC0gMl0gKyAkJFskMF0sIGxhYmVsOiAkJFskMCAtIDFdIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBCTE9DS19BUlJPVyBub2RlU2hhcGVOTGFiZWw6IFwiLCAkJFskMCAtIDNdLCAkJFskMCAtIDJdLCBcIiAjMzpcIiwgJCRbJDAgLSAxXSwgJCRbJDBdKTtcbiAgICAgICAgICB0aGlzLiQgPSB7IHR5cGVTdHI6ICQkWyQwIC0gM10gKyAkJFskMF0sIGxhYmVsOiAkJFskMCAtIDJdLCBkaXJlY3Rpb25zOiAkJFskMCAtIDFdIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzU6XG4gICAgICAgIGNhc2UgMzY6XG4gICAgICAgICAgdGhpcy4kID0geyB0eXBlOiBcImNsYXNzRGVmXCIsIGlkOiAkJFskMCAtIDFdLnRyaW0oKSwgY3NzOiAkJFskMF0udHJpbSgpIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgdGhpcy4kID0geyB0eXBlOiBcImFwcGx5Q2xhc3NcIiwgaWQ6ICQkWyQwIC0gMV0udHJpbSgpLCBzdHlsZUNsYXNzOiAkJFskMF0udHJpbSgpIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgdGhpcy4kID0geyB0eXBlOiBcImFwcGx5U3R5bGVzXCIsIGlkOiAkJFskMCAtIDFdLnRyaW0oKSwgc3R5bGVzU3RyOiAkJFskMF0udHJpbSgpIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcbiAgICB0YWJsZTogW3sgOTogMSwgMTA6IFsxLCAyXSB9LCB7IDE6IFszXSB9LCB7IDExOiAzLCAxMzogNCwgMTk6IDUsIDIwOiA2LCAyMTogJFYwLCAyMjogOCwgMjM6IDksIDI0OiAxMCwgMjU6IDExLCAyNjogMTIsIDI4OiAkVjEsIDI5OiAkVjIsIDMxOiAkVjMsIDMyOiAkVjQsIDQwOiAkVjUsIDQ0OiAkVjYsIDQ3OiAkVjcgfSwgeyA4OiBbMSwgMjBdIH0sIG8oJFY4LCBbMiwgMTJdLCB7IDEzOiA0LCAxOTogNSwgMjA6IDYsIDIyOiA4LCAyMzogOSwgMjQ6IDEwLCAyNTogMTEsIDI2OiAxMiwgMTE6IDIxLCAyMTogJFYwLCAyODogJFYxLCAyOTogJFYyLCAzMTogJFYzLCAzMjogJFY0LCA0MDogJFY1LCA0NDogJFY2LCA0NzogJFY3IH0pLCBvKCRWOSwgWzIsIDE2XSwgeyAxNDogMjIsIDE1OiAkVmEsIDE2OiAkVmIgfSksIG8oJFY5LCBbMiwgMTddKSwgbygkVjksIFsyLCAxOF0pLCBvKCRWOSwgWzIsIDE5XSksIG8oJFY5LCBbMiwgMjBdKSwgbygkVjksIFsyLCAyMV0pLCBvKCRWOSwgWzIsIDIyXSksIG8oJFZjLCBbMiwgMjVdLCB7IDI3OiBbMSwgMjVdIH0pLCBvKCRWOSwgWzIsIDI2XSksIHsgMTk6IDI2LCAyNjogMTIsIDMyOiAkVjQgfSwgeyAxMTogMjcsIDEzOiA0LCAxOTogNSwgMjA6IDYsIDIxOiAkVjAsIDIyOiA4LCAyMzogOSwgMjQ6IDEwLCAyNTogMTEsIDI2OiAxMiwgMjg6ICRWMSwgMjk6ICRWMiwgMzE6ICRWMywgMzI6ICRWNCwgNDA6ICRWNSwgNDQ6ICRWNiwgNDc6ICRWNyB9LCB7IDQxOiBbMSwgMjhdLCA0MzogWzEsIDI5XSB9LCB7IDQ1OiBbMSwgMzBdIH0sIHsgNDg6IFsxLCAzMV0gfSwgbygkVmQsIFsyLCAyOV0sIHsgMzM6IDMyLCAzNjogWzEsIDMzXSwgMzg6IFsxLCAzNF0gfSksIHsgMTogWzIsIDddIH0sIG8oJFY4LCBbMiwgMTNdKSwgeyAyNjogMzUsIDMyOiAkVjQgfSwgeyAzMjogWzIsIDE0XSB9LCB7IDE3OiBbMSwgMzZdIH0sIG8oJFZjLCBbMiwgMjRdKSwgeyAxMTogMzcsIDEzOiA0LCAxNDogMjIsIDE1OiAkVmEsIDE2OiAkVmIsIDE5OiA1LCAyMDogNiwgMjE6ICRWMCwgMjI6IDgsIDIzOiA5LCAyNDogMTAsIDI1OiAxMSwgMjY6IDEyLCAyODogJFYxLCAyOTogJFYyLCAzMTogJFYzLCAzMjogJFY0LCA0MDogJFY1LCA0NDogJFY2LCA0NzogJFY3IH0sIHsgMzA6IFsxLCAzOF0gfSwgeyA0MjogWzEsIDM5XSB9LCB7IDQyOiBbMSwgNDBdIH0sIHsgNDY6IFsxLCA0MV0gfSwgeyA0OTogWzEsIDQyXSB9LCBvKCRWZCwgWzIsIDMwXSksIHsgMTg6IFsxLCA0M10gfSwgeyAxODogWzEsIDQ0XSB9LCBvKCRWYywgWzIsIDIzXSksIHsgMTg6IFsxLCA0NV0gfSwgeyAzMDogWzEsIDQ2XSB9LCBvKCRWOSwgWzIsIDI4XSksIG8oJFY5LCBbMiwgMzVdKSwgbygkVjksIFsyLCAzNl0pLCBvKCRWOSwgWzIsIDM3XSksIG8oJFY5LCBbMiwgMzhdKSwgeyAzNzogWzEsIDQ3XSB9LCB7IDM0OiA0OCwgMzU6ICRWZSB9LCB7IDE1OiBbMSwgNTBdIH0sIG8oJFY5LCBbMiwgMjddKSwgbygkVmQsIFsyLCAzM10pLCB7IDM5OiBbMSwgNTFdIH0sIHsgMzQ6IDUyLCAzNTogJFZlLCAzOTogWzIsIDMxXSB9LCB7IDMyOiBbMiwgMTVdIH0sIG8oJFZkLCBbMiwgMzRdKSwgeyAzOTogWzIsIDMyXSB9XSxcbiAgICBkZWZhdWx0QWN0aW9uczogeyAyMDogWzIsIDddLCAyMzogWzIsIDE0XSwgNTA6IFsyLCAxNV0sIDUyOiBbMiwgMzJdIH0sXG4gICAgcGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcbiAgICAgIGlmIChoYXNoLnJlY292ZXJhYmxlKSB7XG4gICAgICAgIHRoaXMudHJhY2Uoc3RyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihzdHIpO1xuICAgICAgICBlcnJvci5oYXNoID0gaGFzaDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcywgc3RhY2sgPSBbMF0sIHRzdGFjayA9IFtdLCB2c3RhY2sgPSBbbnVsbF0sIGxzdGFjayA9IFtdLCB0YWJsZSA9IHRoaXMudGFibGUsIHl5dGV4dCA9IFwiXCIsIHl5bGluZW5vID0gMCwgeXlsZW5nID0gMCwgVEVSUk9SID0gMiwgRU9GID0gMTtcbiAgICAgIHZhciBhcmdzID0gbHN0YWNrLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHZhciBsZXhlcjIgPSBPYmplY3QuY3JlYXRlKHRoaXMubGV4ZXIpO1xuICAgICAgdmFyIHNoYXJlZFN0YXRlID0geyB5eToge30gfTtcbiAgICAgIGZvciAodmFyIGsgaW4gdGhpcy55eSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMueXksIGspKSB7XG4gICAgICAgICAgc2hhcmVkU3RhdGUueXlba10gPSB0aGlzLnl5W2tdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXhlcjIuc2V0SW5wdXQoaW5wdXQsIHNoYXJlZFN0YXRlLnl5KTtcbiAgICAgIHNoYXJlZFN0YXRlLnl5LmxleGVyID0gbGV4ZXIyO1xuICAgICAgc2hhcmVkU3RhdGUueXkucGFyc2VyID0gdGhpcztcbiAgICAgIGlmICh0eXBlb2YgbGV4ZXIyLnl5bGxvYyA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGxleGVyMi55eWxsb2MgPSB7fTtcbiAgICAgIH1cbiAgICAgIHZhciB5eWxvYyA9IGxleGVyMi55eWxsb2M7XG4gICAgICBsc3RhY2sucHVzaCh5eWxvYyk7XG4gICAgICB2YXIgcmFuZ2VzID0gbGV4ZXIyLm9wdGlvbnMgJiYgbGV4ZXIyLm9wdGlvbnMucmFuZ2VzO1xuICAgICAgaWYgKHR5cGVvZiBzaGFyZWRTdGF0ZS55eS5wYXJzZUVycm9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhpcy5wYXJzZUVycm9yID0gc2hhcmVkU3RhdGUueXkucGFyc2VFcnJvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFyc2VFcnJvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZUVycm9yO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gbGV4KCkge1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHRva2VuID0gdHN0YWNrLnBvcCgpIHx8IGxleGVyMi5sZXgoKSB8fCBFT0Y7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBpZiAodG9rZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgdHN0YWNrID0gdG9rZW47XG4gICAgICAgICAgICB0b2tlbiA9IHRzdGFjay5wb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG9rZW4gPSBzZWxmLnN5bWJvbHNfW3Rva2VuXSB8fCB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICB9XG4gICAgICB2YXIgc3ltYm9sLCBzdGF0ZSwgYWN0aW9uLCByLCB5eXZhbCA9IHt9LCBwLCBsZW4sIG5ld1N0YXRlLCBleHBlY3RlZDtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHN0YXRlID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlXSkge1xuICAgICAgICAgIGFjdGlvbiA9IHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzeW1ib2wgPT09IG51bGwgfHwgdHlwZW9mIHN5bWJvbCA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBzeW1ib2wgPSBsZXgoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWN0aW9uID0gdGFibGVbc3RhdGVdICYmIHRhYmxlW3N0YXRlXVtzeW1ib2xdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSBcInVuZGVmaW5lZFwiIHx8ICFhY3Rpb24ubGVuZ3RoIHx8ICFhY3Rpb25bMF0pIHtcbiAgICAgICAgICB2YXIgZXJyU3RyID0gXCJcIjtcbiAgICAgICAgICBleHBlY3RlZCA9IFtdO1xuICAgICAgICAgIGZvciAocCBpbiB0YWJsZVtzdGF0ZV0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRlcm1pbmFsc19bcF0gJiYgcCA+IFRFUlJPUikge1xuICAgICAgICAgICAgICBleHBlY3RlZC5wdXNoKFwiJ1wiICsgdGhpcy50ZXJtaW5hbHNfW3BdICsgXCInXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobGV4ZXIyLnNob3dQb3NpdGlvbikge1xuICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjpcXG5cIiArIGxleGVyMi5zaG93UG9zaXRpb24oKSArIFwiXFxuRXhwZWN0aW5nIFwiICsgZXhwZWN0ZWQuam9pbihcIiwgXCIpICsgXCIsIGdvdCAnXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJTdHIgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoeXlsaW5lbm8gKyAxKSArIFwiOiBVbmV4cGVjdGVkIFwiICsgKHN5bWJvbCA9PSBFT0YgPyBcImVuZCBvZiBpbnB1dFwiIDogXCInXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wYXJzZUVycm9yKGVyclN0ciwge1xuICAgICAgICAgICAgdGV4dDogbGV4ZXIyLm1hdGNoLFxuICAgICAgICAgICAgdG9rZW46IHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCxcbiAgICAgICAgICAgIGxpbmU6IGxleGVyMi55eWxpbmVubyxcbiAgICAgICAgICAgIGxvYzogeXlsb2MsXG4gICAgICAgICAgICBleHBlY3RlZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rpb25bMF0gaW5zdGFuY2VvZiBBcnJheSAmJiBhY3Rpb24ubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcnNlIEVycm9yOiBtdWx0aXBsZSBhY3Rpb25zIHBvc3NpYmxlIGF0IHN0YXRlOiBcIiArIHN0YXRlICsgXCIsIHRva2VuOiBcIiArIHN5bWJvbCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChhY3Rpb25bMF0pIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBzdGFjay5wdXNoKHN5bWJvbCk7XG4gICAgICAgICAgICB2c3RhY2sucHVzaChsZXhlcjIueXl0ZXh0KTtcbiAgICAgICAgICAgIGxzdGFjay5wdXNoKGxleGVyMi55eWxsb2MpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChhY3Rpb25bMV0pO1xuICAgICAgICAgICAgc3ltYm9sID0gbnVsbDtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeXlsZW5nID0gbGV4ZXIyLnl5bGVuZztcbiAgICAgICAgICAgICAgeXl0ZXh0ID0gbGV4ZXIyLnl5dGV4dDtcbiAgICAgICAgICAgICAgeXlsaW5lbm8gPSBsZXhlcjIueXlsaW5lbm87XG4gICAgICAgICAgICAgIHl5bG9jID0gbGV4ZXIyLnl5bGxvYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxlbiA9IHRoaXMucHJvZHVjdGlvbnNfW2FjdGlvblsxXV1bMV07XG4gICAgICAgICAgICB5eXZhbC4kID0gdnN0YWNrW3ZzdGFjay5sZW5ndGggLSBsZW5dO1xuICAgICAgICAgICAgeXl2YWwuXyQgPSB7XG4gICAgICAgICAgICAgIGZpcnN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgbGFzdF9saW5lOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9jb2x1bW5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocmFuZ2VzKSB7XG4gICAgICAgICAgICAgIHl5dmFsLl8kLnJhbmdlID0gW1xuICAgICAgICAgICAgICAgIGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0ucmFuZ2VbMF0sXG4gICAgICAgICAgICAgICAgbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5yYW5nZVsxXVxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgciA9IHRoaXMucGVyZm9ybUFjdGlvbi5hcHBseSh5eXZhbCwgW1xuICAgICAgICAgICAgICB5eXRleHQsXG4gICAgICAgICAgICAgIHl5bGVuZyxcbiAgICAgICAgICAgICAgeXlsaW5lbm8sXG4gICAgICAgICAgICAgIHNoYXJlZFN0YXRlLnl5LFxuICAgICAgICAgICAgICBhY3Rpb25bMV0sXG4gICAgICAgICAgICAgIHZzdGFjayxcbiAgICAgICAgICAgICAgbHN0YWNrXG4gICAgICAgICAgICBdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIHN0YWNrID0gc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4gKiAyKTtcbiAgICAgICAgICAgICAgdnN0YWNrID0gdnN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcbiAgICAgICAgICAgICAgbHN0YWNrID0gbHN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YWNrLnB1c2godGhpcy5wcm9kdWN0aW9uc19bYWN0aW9uWzFdXVswXSk7XG4gICAgICAgICAgICB2c3RhY2sucHVzaCh5eXZhbC4kKTtcbiAgICAgICAgICAgIGxzdGFjay5wdXNoKHl5dmFsLl8kKTtcbiAgICAgICAgICAgIG5ld1N0YXRlID0gdGFibGVbc3RhY2tbc3RhY2subGVuZ3RoIC0gMl1dW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDFdXTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV3U3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbiAgdmFyIGxleGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxleGVyMiA9IHtcbiAgICAgIEVPRjogMSxcbiAgICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XG4gICAgICAgIGlmICh0aGlzLnl5LnBhcnNlcikge1xuICAgICAgICAgIHRoaXMueXkucGFyc2VyLnBhcnNlRXJyb3Ioc3RyLCBoYXNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJlc2V0cyB0aGUgbGV4ZXIsIHNldHMgbmV3IGlucHV0XG4gICAgICBzZXRJbnB1dDogZnVuY3Rpb24oaW5wdXQsIHl5KSB7XG4gICAgICAgIHRoaXMueXkgPSB5eSB8fCB0aGlzLnl5IHx8IHt9O1xuICAgICAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuICAgICAgICB0aGlzLl9tb3JlID0gdGhpcy5fYmFja3RyYWNrID0gdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDA7XG4gICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbXCJJTklUSUFMXCJdO1xuICAgICAgICB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogMCxcbiAgICAgICAgICBsYXN0X2xpbmU6IDEsXG4gICAgICAgICAgbGFzdF9jb2x1bW46IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFswLCAwXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIGNvbnN1bWVzIGFuZCByZXR1cm5zIG9uZSBjaGFyIGZyb20gdGhlIGlucHV0XG4gICAgICBpbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMuX2lucHV0WzBdO1xuICAgICAgICB0aGlzLnl5dGV4dCArPSBjaDtcbiAgICAgICAgdGhpcy55eWxlbmcrKztcbiAgICAgICAgdGhpcy5vZmZzZXQrKztcbiAgICAgICAgdGhpcy5tYXRjaCArPSBjaDtcbiAgICAgICAgdGhpcy5tYXRjaGVkICs9IGNoO1xuICAgICAgICB2YXIgbGluZXMgPSBjaC5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG4gICAgICAgIGlmIChsaW5lcykge1xuICAgICAgICAgIHRoaXMueXlsaW5lbm8rKztcbiAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2VbMV0rKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKDEpO1xuICAgICAgICByZXR1cm4gY2g7XG4gICAgICB9LFxuICAgICAgLy8gdW5zaGlmdHMgb25lIGNoYXIgKG9yIGEgc3RyaW5nKSBpbnRvIHRoZSBpbnB1dFxuICAgICAgdW5wdXQ6IGZ1bmN0aW9uKGNoKSB7XG4gICAgICAgIHZhciBsZW4gPSBjaC5sZW5ndGg7XG4gICAgICAgIHZhciBsaW5lcyA9IGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gY2ggKyB0aGlzLl9pbnB1dDtcbiAgICAgICAgdGhpcy55eXRleHQgPSB0aGlzLnl5dGV4dC5zdWJzdHIoMCwgdGhpcy55eXRleHQubGVuZ3RoIC0gbGVuKTtcbiAgICAgICAgdGhpcy5vZmZzZXQgLT0gbGVuO1xuICAgICAgICB2YXIgb2xkTGluZXMgPSB0aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMubWF0Y2ggPSB0aGlzLm1hdGNoLnN1YnN0cigwLCB0aGlzLm1hdGNoLmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSAxKTtcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLnl5bGluZW5vIC09IGxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSB0aGlzLnl5bGxvYy5yYW5nZTtcbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MuZmlyc3RfbGluZSxcbiAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiBsaW5lcyA/IChsaW5lcy5sZW5ndGggPT09IG9sZExpbmVzLmxlbmd0aCA/IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiA6IDApICsgb2xkTGluZXNbb2xkTGluZXMubGVuZ3RoIC0gbGluZXMubGVuZ3RoXS5sZW5ndGggLSBsaW5lc1swXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gLSBsZW5cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFtyWzBdLCByWzBdICsgdGhpcy55eWxlbmcgLSBsZW5dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBXaGVuIGNhbGxlZCBmcm9tIGFjdGlvbiwgY2FjaGVzIG1hdGNoZWQgdGV4dCBhbmQgYXBwZW5kcyBpdCBvbiBuZXh0IGFjdGlvblxuICAgICAgbW9yZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX21vcmUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBXaGVuIGNhbGxlZCBmcm9tIGFjdGlvbiwgc2lnbmFscyB0aGUgbGV4ZXIgdGhhdCB0aGlzIHJ1bGUgZmFpbHMgdG8gbWF0Y2ggdGhlIGlucHV0LCBzbyB0aGUgbmV4dCBtYXRjaGluZyBydWxlIChyZWdleCkgc2hvdWxkIGJlIHRlc3RlZCBpbnN0ZWFkLlxuICAgICAgcmVqZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFlvdSBjYW4gb25seSBpbnZva2UgcmVqZWN0KCkgaW4gdGhlIGxleGVyIHdoZW4gdGhlIGxleGVyIGlzIG9mIHRoZSBiYWNrdHJhY2tpbmcgcGVyc3Vhc2lvbiAob3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIgPSB0cnVlKS5cXG5cIiArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgIGxpbmU6IHRoaXMueXlsaW5lbm9cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyByZXRhaW4gZmlyc3QgbiBjaGFyYWN0ZXJzIG9mIHRoZSBtYXRjaFxuICAgICAgbGVzczogZnVuY3Rpb24obikge1xuICAgICAgICB0aGlzLnVucHV0KHRoaXMubWF0Y2guc2xpY2UobikpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIGFscmVhZHkgbWF0Y2hlZCBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHBhc3RJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwYXN0ID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gdGhpcy5tYXRjaC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gKHBhc3QubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikgKyBwYXN0LnN1YnN0cigtMjApLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sXG4gICAgICAvLyBkaXNwbGF5cyB1cGNvbWluZyBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHVwY29taW5nSW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbmV4dCA9IHRoaXMubWF0Y2g7XG4gICAgICAgIGlmIChuZXh0Lmxlbmd0aCA8IDIwKSB7XG4gICAgICAgICAgbmV4dCArPSB0aGlzLl9pbnB1dC5zdWJzdHIoMCwgMjAgLSBuZXh0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChuZXh0LnN1YnN0cigwLCAyMCkgKyAobmV4dC5sZW5ndGggPiAyMCA/IFwiLi4uXCIgOiBcIlwiKSkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIHRoZSBjaGFyYWN0ZXIgcG9zaXRpb24gd2hlcmUgdGhlIGxleGluZyBlcnJvciBvY2N1cnJlZCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHNob3dQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwcmUgPSB0aGlzLnBhc3RJbnB1dCgpO1xuICAgICAgICB2YXIgYyA9IG5ldyBBcnJheShwcmUubGVuZ3RoICsgMSkuam9pbihcIi1cIik7XG4gICAgICAgIHJldHVybiBwcmUgKyB0aGlzLnVwY29taW5nSW5wdXQoKSArIFwiXFxuXCIgKyBjICsgXCJeXCI7XG4gICAgICB9LFxuICAgICAgLy8gdGVzdCB0aGUgbGV4ZWQgdG9rZW46IHJldHVybiBGQUxTRSB3aGVuIG5vdCBhIG1hdGNoLCBvdGhlcndpc2UgcmV0dXJuIHRva2VuXG4gICAgICB0ZXN0X21hdGNoOiBmdW5jdGlvbihtYXRjaCwgaW5kZXhlZF9ydWxlKSB7XG4gICAgICAgIHZhciB0b2tlbiwgbGluZXMsIGJhY2t1cDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICBiYWNrdXAgPSB7XG4gICAgICAgICAgICB5eWxpbmVubzogdGhpcy55eWxpbmVubyxcbiAgICAgICAgICAgIHl5bGxvYzoge1xuICAgICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMubGFzdF9saW5lLFxuICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeXl0ZXh0OiB0aGlzLnl5dGV4dCxcbiAgICAgICAgICAgIG1hdGNoOiB0aGlzLm1hdGNoLFxuICAgICAgICAgICAgbWF0Y2hlczogdGhpcy5tYXRjaGVzLFxuICAgICAgICAgICAgbWF0Y2hlZDogdGhpcy5tYXRjaGVkLFxuICAgICAgICAgICAgeXlsZW5nOiB0aGlzLnl5bGVuZyxcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgICBfbW9yZTogdGhpcy5fbW9yZSxcbiAgICAgICAgICAgIF9pbnB1dDogdGhpcy5faW5wdXQsXG4gICAgICAgICAgICB5eTogdGhpcy55eSxcbiAgICAgICAgICAgIGNvbmRpdGlvblN0YWNrOiB0aGlzLmNvbmRpdGlvblN0YWNrLnNsaWNlKDApLFxuICAgICAgICAgICAgZG9uZTogdGhpcy5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgICAgYmFja3VwLnl5bGxvYy5yYW5nZSA9IHRoaXMueXlsbG9jLnJhbmdlLnNsaWNlKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsaW5lcyA9IG1hdGNoWzBdLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgaWYgKGxpbmVzKSB7XG4gICAgICAgICAgdGhpcy55eWxpbmVubyArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5sZW5ndGggLSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIG1hdGNoWzBdLmxlbmd0aFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnl5dGV4dCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gbWF0Y2g7XG4gICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3RoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZ107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9yZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICB0aGlzLm1hdGNoZWQgKz0gbWF0Y2hbMF07XG4gICAgICAgIHRva2VuID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodGhpcywgdGhpcy55eSwgdGhpcywgaW5kZXhlZF9ydWxlLCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pO1xuICAgICAgICBpZiAodGhpcy5kb25lICYmIHRoaXMuX2lucHV0KSB7XG4gICAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgIGZvciAodmFyIGsgaW4gYmFja3VwKSB7XG4gICAgICAgICAgICB0aGlzW2tdID0gYmFja3VwW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiBuZXh0IG1hdGNoIGluIGlucHV0XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lucHV0KSB7XG4gICAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG9rZW4sIG1hdGNoLCB0ZW1wTWF0Y2gsIGluZGV4O1xuICAgICAgICBpZiAoIXRoaXMuX21vcmUpIHtcbiAgICAgICAgICB0aGlzLnl5dGV4dCA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5tYXRjaCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJ1bGVzID0gdGhpcy5fY3VycmVudFJ1bGVzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0ZW1wTWF0Y2ggPSB0aGlzLl9pbnB1dC5tYXRjaCh0aGlzLnJ1bGVzW3J1bGVzW2ldXSk7XG4gICAgICAgICAgaWYgKHRlbXBNYXRjaCAmJiAoIW1hdGNoIHx8IHRlbXBNYXRjaFswXS5sZW5ndGggPiBtYXRjaFswXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBtYXRjaCA9IHRlbXBNYXRjaDtcbiAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgICAgIHRva2VuID0gdGhpcy50ZXN0X21hdGNoKHRlbXBNYXRjaCwgcnVsZXNbaV0pO1xuICAgICAgICAgICAgICBpZiAodG9rZW4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuZmxleCkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdG9rZW4gPSB0aGlzLnRlc3RfbWF0Y2gobWF0Y2gsIHJ1bGVzW2luZGV4XSk7XG4gICAgICAgICAgaWYgKHRva2VuICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lucHV0ID09PSBcIlwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFVucmVjb2duaXplZCB0ZXh0LlxcblwiICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggdGhhdCBoYXMgYSB0b2tlblxuICAgICAgbGV4OiBmdW5jdGlvbiBsZXgoKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5uZXh0KCk7XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubGV4KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBhY3RpdmF0ZXMgYSBuZXcgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIChwdXNoZXMgdGhlIG5ldyBsZXhlciBjb25kaXRpb24gc3RhdGUgb250byB0aGUgY29uZGl0aW9uIHN0YWNrKVxuICAgICAgYmVnaW46IGZ1bmN0aW9uIGJlZ2luKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrLnB1c2goY29uZGl0aW9uKTtcbiAgICAgIH0sXG4gICAgICAvLyBwb3AgdGhlIHByZXZpb3VzbHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvZmYgdGhlIGNvbmRpdGlvbiBzdGFja1xuICAgICAgcG9wU3RhdGU6IGZ1bmN0aW9uIHBvcFN0YXRlKCkge1xuICAgICAgICB2YXIgbiA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKG4gPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbMF07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBwcm9kdWNlIHRoZSBsZXhlciBydWxlIHNldCB3aGljaCBpcyBhY3RpdmUgZm9yIHRoZSBjdXJyZW50bHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZVxuICAgICAgX2N1cnJlbnRSdWxlczogZnVuY3Rpb24gX2N1cnJlbnRSdWxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoICYmIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbnNbdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdXS5ydWxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zW1wiSU5JVElBTFwiXS5ydWxlcztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGU7IHdoZW4gYW4gaW5kZXggYXJndW1lbnQgaXMgcHJvdmlkZWQgaXQgcHJvZHVjZXMgdGhlIE4tdGggcHJldmlvdXMgY29uZGl0aW9uIHN0YXRlLCBpZiBhdmFpbGFibGVcbiAgICAgIHRvcFN0YXRlOiBmdW5jdGlvbiB0b3BTdGF0ZShuKSB7XG4gICAgICAgIG4gPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDEgLSBNYXRoLmFicyhuIHx8IDApO1xuICAgICAgICBpZiAobiA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbbl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiSU5JVElBTFwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gYWxpYXMgZm9yIGJlZ2luKGNvbmRpdGlvbilcbiAgICAgIHB1c2hTdGF0ZTogZnVuY3Rpb24gcHVzaFN0YXRlKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmJlZ2luKGNvbmRpdGlvbik7XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIHRoZSBudW1iZXIgb2Ygc3RhdGVzIGN1cnJlbnRseSBvbiB0aGUgc3RhY2tcbiAgICAgIHN0YXRlU3RhY2tTaXplOiBmdW5jdGlvbiBzdGF0ZVN0YWNrU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoO1xuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHt9LFxuICAgICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24gYW5vbnltb3VzKHl5LCB5eV8sICRhdm9pZGluZ19uYW1lX2NvbGxpc2lvbnMsIFlZX1NUQVJUKSB7XG4gICAgICAgIHN3aXRjaCAoJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucykge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiAxMDtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkZvdW5kIHNwYWNlLWJsb2NrXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDMxO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiRm91bmQgbmwtYmxvY2tcIik7XG4gICAgICAgICAgICByZXR1cm4gMzE7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJGb3VuZCBzcGFjZS1ibG9ja1wiKTtcbiAgICAgICAgICAgIHJldHVybiAyOTtcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIi5cIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIl9cIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICByZXR1cm4gNTtcbiAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICB5eV8ueXl0ZXh0ID0gLTE7XG4gICAgICAgICAgICByZXR1cm4gMjg7XG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHl5Xy55eXRleHQucmVwbGFjZSgvY29sdW1uc1xccysvLCBcIlwiKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiQ09MVU1OUyAoTEVYKVwiLCB5eV8ueXl0ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiAyODtcbiAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIm1kX3N0cmluZ1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICByZXR1cm4gXCJNRF9TVFJcIjtcbiAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwic3RyaW5nXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTEVYOiBQT1BQSU5HIFNUUjpcIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMRVg6IFNUUiBlbmQ6XCIsIHl5Xy55eXRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIFwiU1RSXCI7XG4gICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgIHl5Xy55eXRleHQgPSB5eV8ueXl0ZXh0LnJlcGxhY2UoL3NwYWNlXFw6LywgXCJcIik7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlNQQUNFIE5VTSAoTEVYKVwiLCB5eV8ueXl0ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiAyMTtcbiAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgeXlfLnl5dGV4dCA9IFwiMVwiO1xuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJDT0xVTU5TIChMRVgpXCIsIHl5Xy55eXRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIDIxO1xuICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICByZXR1cm4gNDM7XG4gICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgIHJldHVybiBcIkxJTktTVFlMRVwiO1xuICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICByZXR1cm4gXCJJTlRFUlBPTEFURVwiO1xuICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIkNMQVNTREVGXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDQwO1xuICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIkNMQVNTREVGSURcIik7XG4gICAgICAgICAgICByZXR1cm4gXCJERUZBVUxUX0NMQVNTREVGX0lEXCI7XG4gICAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiQ0xBU1NERUZJRFwiKTtcbiAgICAgICAgICAgIHJldHVybiA0MTtcbiAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIDQyO1xuICAgICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIkNMQVNTXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDQ0O1xuICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIkNMQVNTX1NUWUxFXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDQ1O1xuICAgICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gNDY7XG4gICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiU1RZTEVfU1RNTlRcIik7XG4gICAgICAgICAgICByZXR1cm4gNDc7XG4gICAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiU1RZTEVfREVGSU5JVElPTlwiKTtcbiAgICAgICAgICAgIHJldHVybiA0ODtcbiAgICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIDQ5O1xuICAgICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcImFjY190aXRsZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBcImFjY190aXRsZVwiO1xuICAgICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfdGl0bGVfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJhY2NfZGVzY3JcIik7XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfZGVzY3JcIjtcbiAgICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX2Rlc2NyX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiYWNjX2Rlc2NyX211bHRpbGluZVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzU6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZVwiO1xuICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICByZXR1cm4gMzA7XG4gICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiAoKFwiKTtcbiAgICAgICAgICAgIHJldHVybiBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogKChcIik7XG4gICAgICAgICAgICByZXR1cm4gXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6ICkpXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiAoKFwiKTtcbiAgICAgICAgICAgIHJldHVybiBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogKChcIik7XG4gICAgICAgICAgICByZXR1cm4gXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDQzOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6ICgtXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiAtKVwiKTtcbiAgICAgICAgICAgIHJldHVybiBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogKChcIik7XG4gICAgICAgICAgICByZXR1cm4gXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDQ2OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IF1dXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiAoXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSA0ODpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBdKVwiKTtcbiAgICAgICAgICAgIHJldHVybiBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgNDk6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogL11cIik7XG4gICAgICAgICAgICByZXR1cm4gXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDUwOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IC9dXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSA1MTpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiApXVwiKTtcbiAgICAgICAgICAgIHJldHVybiBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgNTI6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogKVwiKTtcbiAgICAgICAgICAgIHJldHVybiBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgNTM6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogXT5cIik7XG4gICAgICAgICAgICByZXR1cm4gXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDU0OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IF1cIik7XG4gICAgICAgICAgICByZXR1cm4gXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDU1OlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXhhOiAtKVwiKTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKTtcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDU2OlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXhhOiAoLVwiKTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKTtcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDU3OlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXhhOiApKVwiKTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKTtcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXhhOiApXCIpO1xuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJOT0RFXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDM2O1xuICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogKCgoXCIpO1xuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJOT0RFXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDM2O1xuICAgICAgICAgIGNhc2UgNjA6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleGE6IClcIik7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIik7XG4gICAgICAgICAgICByZXR1cm4gMzY7XG4gICAgICAgICAgY2FzZSA2MTpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4YTogKVwiKTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKTtcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDYyOlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXhhOiApXCIpO1xuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJOT0RFXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDM2O1xuICAgICAgICAgIGNhc2UgNjM6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleGM6ID5cIik7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIik7XG4gICAgICAgICAgICByZXR1cm4gMzY7XG4gICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4YTogKFtcIik7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIik7XG4gICAgICAgICAgICByZXR1cm4gMzY7XG4gICAgICAgICAgY2FzZSA2NTpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4YTogKVwiKTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKTtcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDY2OlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJOT0RFXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDM2O1xuICAgICAgICAgIGNhc2UgNjc6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIik7XG4gICAgICAgICAgICByZXR1cm4gMzY7XG4gICAgICAgICAgY2FzZSA2ODpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKTtcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDY5OlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJOT0RFXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDM2O1xuICAgICAgICAgIGNhc2UgNzA6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIik7XG4gICAgICAgICAgICByZXR1cm4gMzY7XG4gICAgICAgICAgY2FzZSA3MTpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKTtcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDcyOlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJOT0RFXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDM2O1xuICAgICAgICAgIGNhc2UgNzM6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleGE6IFtcIik7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIik7XG4gICAgICAgICAgICByZXR1cm4gMzY7XG4gICAgICAgICAgY2FzZSA3NDpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiQkxPQ0tfQVJST1dcIik7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxFWCBBUlIgU1RBUlRcIik7XG4gICAgICAgICAgICByZXR1cm4gMzg7XG4gICAgICAgICAgY2FzZSA3NTpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBOT0RFX0lEXCIsIHl5Xy55eXRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIDMyO1xuICAgICAgICAgIGNhc2UgNzY6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogRU9GXCIsIHl5Xy55eXRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIDg7XG4gICAgICAgICAgY2FzZSA3NzpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwibWRfc3RyaW5nXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA3ODpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwibWRfc3RyaW5nXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA3OTpcbiAgICAgICAgICAgIHJldHVybiBcIk5PREVfREVTQ1JcIjtcbiAgICAgICAgICBjYXNlIDgwOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA4MTpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBTdGFydGluZyBzdHJpbmdcIik7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcInN0cmluZ1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgODI6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxFWCBBUlI6IFN0YXJ0aW5nIHN0cmluZ1wiKTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwic3RyaW5nXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA4MzpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTEVYOiBOT0RFX0RFU0NSOlwiLCB5eV8ueXl0ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiBcIk5PREVfREVTQ1JcIjtcbiAgICAgICAgICBjYXNlIDg0OlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMRVggUE9QUElOR1wiKTtcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgODU6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogPT5CQUVcIik7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIkFSUk9XX0RJUlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgODY6XG4gICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5yZXBsYWNlKC9eLFxccyovLCBcIlwiKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4IChyaWdodCk6IGRpcjpcIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gXCJESVJcIjtcbiAgICAgICAgICBjYXNlIDg3OlxuICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHl5Xy55eXRleHQucmVwbGFjZSgvXixcXHMqLywgXCJcIik7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleCAobGVmdCk6XCIsIHl5Xy55eXRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIFwiRElSXCI7XG4gICAgICAgICAgY2FzZSA4ODpcbiAgICAgICAgICAgIHl5Xy55eXRleHQgPSB5eV8ueXl0ZXh0LnJlcGxhY2UoL14sXFxzKi8sIFwiXCIpO1xuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXggKHgpOlwiLCB5eV8ueXl0ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiBcIkRJUlwiO1xuICAgICAgICAgIGNhc2UgODk6XG4gICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5yZXBsYWNlKC9eLFxccyovLCBcIlwiKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4ICh5KTpcIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gXCJESVJcIjtcbiAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHl5Xy55eXRleHQucmVwbGFjZSgvXixcXHMqLywgXCJcIik7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleCAodXApOlwiLCB5eV8ueXl0ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiBcIkRJUlwiO1xuICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5yZXBsYWNlKC9eLFxccyovLCBcIlwiKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4IChkb3duKTpcIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gXCJESVJcIjtcbiAgICAgICAgICBjYXNlIDkyOlxuICAgICAgICAgICAgeXlfLnl5dGV4dCA9IFwiXT5cIjtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4IChBUlJPV19ESVIgZW5kKTpcIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gXCJCTE9DS19BUlJPV19FTkRcIjtcbiAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IExJTktcIiwgXCIjXCIgKyB5eV8ueXl0ZXh0ICsgXCIjXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDE1O1xuICAgICAgICAgIGNhc2UgOTQ6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogTElOS1wiLCB5eV8ueXl0ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiAxNTtcbiAgICAgICAgICBjYXNlIDk1OlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IExJTktcIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gMTU7XG4gICAgICAgICAgY2FzZSA5NjpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBMSU5LXCIsIHl5Xy55eXRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIDE1O1xuICAgICAgICAgIGNhc2UgOTc6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogU1RBUlRfTElOS1wiLCB5eV8ueXl0ZXh0KTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTExBQkVMXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDE2O1xuICAgICAgICAgIGNhc2UgOTg6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogU1RBUlRfTElOS1wiLCB5eV8ueXl0ZXh0KTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTExBQkVMXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDE2O1xuICAgICAgICAgIGNhc2UgOTk6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogU1RBUlRfTElOS1wiLCB5eV8ueXl0ZXh0KTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTExBQkVMXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDE2O1xuICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJtZF9zdHJpbmdcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEwMTpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBTdGFydGluZyBzdHJpbmdcIik7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcInN0cmluZ1wiKTtcbiAgICAgICAgICAgIHJldHVybiBcIkxJTktfTEFCRUxcIjtcbiAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBMSU5LXCIsIFwiI1wiICsgeXlfLnl5dGV4dCArIFwiI1wiKTtcbiAgICAgICAgICAgIHJldHVybiAxNTtcbiAgICAgICAgICBjYXNlIDEwMzpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBMSU5LXCIsIHl5Xy55eXRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIDE1O1xuICAgICAgICAgIGNhc2UgMTA0OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IExJTktcIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gMTU7XG4gICAgICAgICAgY2FzZSAxMDU6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogQ09MT05cIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5zbGljZSgxKTtcbiAgICAgICAgICAgIHJldHVybiAyNztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJ1bGVzOiBbL14oPzpibG9jay1iZXRhXFxiKS8sIC9eKD86YmxvY2tcXHMrKS8sIC9eKD86YmxvY2tcXG4rKS8sIC9eKD86YmxvY2s6KS8sIC9eKD86W1xcc10rKS8sIC9eKD86W1xcbl0rKS8sIC9eKD86KChcXHUwMDBEXFx1MDAwQSl8KFxcdTAwMEEpKSkvLCAvXig/OmNvbHVtbnNcXHMrYXV0b1xcYikvLCAvXig/OmNvbHVtbnNcXHMrW1xcZF0rKS8sIC9eKD86W1wiXVtgXSkvLCAvXig/OlteYFwiXSspLywgL14oPzpbYF1bXCJdKS8sIC9eKD86W1wiXSkvLCAvXig/OltcIl0pLywgL14oPzpbXlwiXSopLywgL14oPzpzcGFjZVs6XVxcZCspLywgL14oPzpzcGFjZVxcYikvLCAvXig/OmRlZmF1bHRcXGIpLywgL14oPzpsaW5rU3R5bGVcXGIpLywgL14oPzppbnRlcnBvbGF0ZVxcYikvLCAvXig/OmNsYXNzRGVmXFxzKykvLCAvXig/OkRFRkFVTFRcXHMrKS8sIC9eKD86XFx3K1xccyspLywgL14oPzpbXlxcbl0qKS8sIC9eKD86Y2xhc3NcXHMrKS8sIC9eKD86KFxcdyspKygoLFxccypcXHcrKSopKS8sIC9eKD86W15cXG5dKikvLCAvXig/OnN0eWxlXFxzKykvLCAvXig/OihcXHcrKSsoKCxcXHMqXFx3KykqKSkvLCAvXig/OlteXFxuXSopLywgL14oPzphY2NUaXRsZVxccyo6XFxzKikvLCAvXig/Oig/IVxcbnx8KSpbXlxcbl0qKS8sIC9eKD86YWNjRGVzY3JcXHMqOlxccyopLywgL14oPzooPyFcXG58fCkqW15cXG5dKikvLCAvXig/OmFjY0Rlc2NyXFxzKlxce1xccyopLywgL14oPzpbXFx9XSkvLCAvXig/OlteXFx9XSopLywgL14oPzplbmRcXGJcXHMqKS8sIC9eKD86XFwoXFwoXFwoKS8sIC9eKD86XFwpXFwpXFwpKS8sIC9eKD86W1xcKV1cXCkpLywgL14oPzpcXH1cXH0pLywgL14oPzpcXH0pLywgL14oPzpcXCgtKS8sIC9eKD86LVxcKSkvLCAvXig/OlxcKFxcKCkvLCAvXig/OlxcXVxcXSkvLCAvXig/OlxcKCkvLCAvXig/OlxcXVxcKSkvLCAvXig/OlxcXFxcXF0pLywgL14oPzpcXC9cXF0pLywgL14oPzpcXClcXF0pLywgL14oPzpbXFwpXSkvLCAvXig/OlxcXT4pLywgL14oPzpbXFxdXSkvLCAvXig/Oi1cXCkpLywgL14oPzpcXCgtKS8sIC9eKD86XFwpXFwpKS8sIC9eKD86XFwpKS8sIC9eKD86XFwoXFwoXFwoKS8sIC9eKD86XFwoXFwoKS8sIC9eKD86XFx7XFx7KS8sIC9eKD86XFx7KS8sIC9eKD86PikvLCAvXig/OlxcKFxcWykvLCAvXig/OlxcKCkvLCAvXig/OlxcW1xcWykvLCAvXig/OlxcW1xcfCkvLCAvXig/OlxcW1xcKCkvLCAvXig/OlxcKVxcKVxcKSkvLCAvXig/OlxcW1xcXFwpLywgL14oPzpcXFtcXC8pLywgL14oPzpcXFtcXFxcKS8sIC9eKD86XFxbKS8sIC9eKD86PFxcWykvLCAvXig/OlteXFwoXFxbXFxuXFwtXFwpXFx7XFx9XFxzXFw8XFw+Ol0rKS8sIC9eKD86JCkvLCAvXig/OltcIl1bYF0pLywgL14oPzpbXCJdW2BdKS8sIC9eKD86W15gXCJdKykvLCAvXig/OltgXVtcIl0pLywgL14oPzpbXCJdKS8sIC9eKD86W1wiXSkvLCAvXig/OlteXCJdKykvLCAvXig/OltcIl0pLywgL14oPzpcXF0+XFxzKlxcKCkvLCAvXig/Oiw/XFxzKnJpZ2h0XFxzKikvLCAvXig/Oiw/XFxzKmxlZnRcXHMqKS8sIC9eKD86LD9cXHMqeFxccyopLywgL14oPzosP1xccyp5XFxzKikvLCAvXig/Oiw/XFxzKnVwXFxzKikvLCAvXig/Oiw/XFxzKmRvd25cXHMqKS8sIC9eKD86XFwpXFxzKikvLCAvXig/OlxccypbeG88XT8tLStbLXhvPl1cXHMqKS8sIC9eKD86XFxzKlt4bzxdPz09K1s9eG8+XVxccyopLywgL14oPzpcXHMqW3hvPF0/LT9cXC4rLVt4bz5dP1xccyopLywgL14oPzpcXHMqfn5bXFx+XStcXHMqKS8sIC9eKD86XFxzKlt4bzxdPy0tXFxzKikvLCAvXig/OlxccypbeG88XT89PVxccyopLywgL14oPzpcXHMqW3hvPF0/LVxcLlxccyopLywgL14oPzpbXCJdW2BdKS8sIC9eKD86W1wiXSkvLCAvXig/OlxccypbeG88XT8tLStbLXhvPl1cXHMqKS8sIC9eKD86XFxzKlt4bzxdPz09K1s9eG8+XVxccyopLywgL14oPzpcXHMqW3hvPF0/LT9cXC4rLVt4bz5dP1xccyopLywgL14oPzo6XFxkKykvXSxcbiAgICAgIGNvbmRpdGlvbnM6IHsgXCJTVFlMRV9ERUZJTklUSU9OXCI6IHsgXCJydWxlc1wiOiBbMjldLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIlNUWUxFX1NUTU5UXCI6IHsgXCJydWxlc1wiOiBbMjhdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIkNMQVNTREVGSURcIjogeyBcInJ1bGVzXCI6IFsyM10sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiQ0xBU1NERUZcIjogeyBcInJ1bGVzXCI6IFsyMSwgMjJdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIkNMQVNTX1NUWUxFXCI6IHsgXCJydWxlc1wiOiBbMjZdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIkNMQVNTXCI6IHsgXCJydWxlc1wiOiBbMjVdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIkxMQUJFTFwiOiB7IFwicnVsZXNcIjogWzEwMCwgMTAxLCAxMDIsIDEwMywgMTA0XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJBUlJPV19ESVJcIjogeyBcInJ1bGVzXCI6IFs4NiwgODcsIDg4LCA4OSwgOTAsIDkxLCA5Ml0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiQkxPQ0tfQVJST1dcIjogeyBcInJ1bGVzXCI6IFs3NywgODIsIDg1XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJOT0RFXCI6IHsgXCJydWxlc1wiOiBbMzgsIDM5LCA0MCwgNDEsIDQyLCA0MywgNDQsIDQ1LCA0NiwgNDcsIDQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA3OCwgODFdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIm1kX3N0cmluZ1wiOiB7IFwicnVsZXNcIjogWzEwLCAxMSwgNzksIDgwXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJzcGFjZVwiOiB7IFwicnVsZXNcIjogW10sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwic3RyaW5nXCI6IHsgXCJydWxlc1wiOiBbMTMsIDE0LCA4MywgODRdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImFjY19kZXNjcl9tdWx0aWxpbmVcIjogeyBcInJ1bGVzXCI6IFszNSwgMzZdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImFjY19kZXNjclwiOiB7IFwicnVsZXNcIjogWzMzXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJhY2NfdGl0bGVcIjogeyBcInJ1bGVzXCI6IFszMV0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiSU5JVElBTFwiOiB7IFwicnVsZXNcIjogWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEyLCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwLCAyNCwgMjcsIDMwLCAzMiwgMzQsIDM3LCA1NSwgNTYsIDU3LCA1OCwgNTksIDYwLCA2MSwgNjIsIDYzLCA2NCwgNjUsIDY2LCA2NywgNjgsIDY5LCA3MCwgNzEsIDcyLCA3MywgNzQsIDc1LCA3NiwgOTMsIDk0LCA5NSwgOTYsIDk3LCA5OCwgOTksIDEwNV0sIFwiaW5jbHVzaXZlXCI6IHRydWUgfSB9XG4gICAgfTtcbiAgICByZXR1cm4gbGV4ZXIyO1xuICB9KCk7XG4gIHBhcnNlcjIubGV4ZXIgPSBsZXhlcjtcbiAgZnVuY3Rpb24gUGFyc2VyKCkge1xuICAgIHRoaXMueXkgPSB7fTtcbiAgfVxuICBQYXJzZXIucHJvdG90eXBlID0gcGFyc2VyMjtcbiAgcGFyc2VyMi5QYXJzZXIgPSBQYXJzZXI7XG4gIHJldHVybiBuZXcgUGFyc2VyKCk7XG59KCk7XG5wYXJzZXIucGFyc2VyID0gcGFyc2VyO1xuY29uc3QgcGFyc2VyJDEgPSBwYXJzZXI7XG5sZXQgYmxvY2tEYXRhYmFzZSA9IHt9O1xubGV0IGVkZ2VMaXN0ID0gW107XG5sZXQgZWRnZUNvdW50ID0ge307XG5jb25zdCBDT0xPUl9LRVlXT1JEID0gXCJjb2xvclwiO1xuY29uc3QgRklMTF9LRVlXT1JEID0gXCJmaWxsXCI7XG5jb25zdCBCR19GSUxMID0gXCJiZ0ZpbGxcIjtcbmNvbnN0IFNUWUxFQ0xBU1NfU0VQID0gXCIsXCI7XG5jb25zdCBjb25maWcgPSBnZXRDb25maWcoKTtcbmxldCBjbGFzc2VzID0ge307XG5jb25zdCBzYW5pdGl6ZVRleHQgPSAodHh0KSA9PiBjb21tb24uc2FuaXRpemVUZXh0KHR4dCwgY29uZmlnKTtcbmNvbnN0IGFkZFN0eWxlQ2xhc3MgPSBmdW5jdGlvbihpZCwgc3R5bGVBdHRyaWJ1dGVzID0gXCJcIikge1xuICBpZiAoY2xhc3Nlc1tpZF0gPT09IHZvaWQgMCkge1xuICAgIGNsYXNzZXNbaWRdID0geyBpZCwgc3R5bGVzOiBbXSwgdGV4dFN0eWxlczogW10gfTtcbiAgfVxuICBjb25zdCBmb3VuZENsYXNzID0gY2xhc3Nlc1tpZF07XG4gIGlmIChzdHlsZUF0dHJpYnV0ZXMgIT09IHZvaWQgMCAmJiBzdHlsZUF0dHJpYnV0ZXMgIT09IG51bGwpIHtcbiAgICBzdHlsZUF0dHJpYnV0ZXMuc3BsaXQoU1RZTEVDTEFTU19TRVApLmZvckVhY2goKGF0dHJpYikgPT4ge1xuICAgICAgY29uc3QgZml4ZWRBdHRyaWIgPSBhdHRyaWIucmVwbGFjZSgvKFteO10qKTsvLCBcIiQxXCIpLnRyaW0oKTtcbiAgICAgIGlmIChhdHRyaWIubWF0Y2goQ09MT1JfS0VZV09SRCkpIHtcbiAgICAgICAgY29uc3QgbmV3U3R5bGUxID0gZml4ZWRBdHRyaWIucmVwbGFjZShGSUxMX0tFWVdPUkQsIEJHX0ZJTEwpO1xuICAgICAgICBjb25zdCBuZXdTdHlsZTIgPSBuZXdTdHlsZTEucmVwbGFjZShDT0xPUl9LRVlXT1JELCBGSUxMX0tFWVdPUkQpO1xuICAgICAgICBmb3VuZENsYXNzLnRleHRTdHlsZXMucHVzaChuZXdTdHlsZTIpO1xuICAgICAgfVxuICAgICAgZm91bmRDbGFzcy5zdHlsZXMucHVzaChmaXhlZEF0dHJpYik7XG4gICAgfSk7XG4gIH1cbn07XG5jb25zdCBhZGRTdHlsZTJOb2RlID0gZnVuY3Rpb24oaWQsIHN0eWxlcyA9IFwiXCIpIHtcbiAgY29uc3QgZm91bmRCbG9jayA9IGJsb2NrRGF0YWJhc2VbaWRdO1xuICBpZiAoc3R5bGVzICE9PSB2b2lkIDAgJiYgc3R5bGVzICE9PSBudWxsKSB7XG4gICAgZm91bmRCbG9jay5zdHlsZXMgPSBzdHlsZXMuc3BsaXQoU1RZTEVDTEFTU19TRVApO1xuICB9XG59O1xuY29uc3Qgc2V0Q3NzQ2xhc3MgPSBmdW5jdGlvbihpdGVtSWRzLCBjc3NDbGFzc05hbWUpIHtcbiAgaXRlbUlkcy5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbihpZCkge1xuICAgIGxldCBmb3VuZEJsb2NrID0gYmxvY2tEYXRhYmFzZVtpZF07XG4gICAgaWYgKGZvdW5kQmxvY2sgPT09IHZvaWQgMCkge1xuICAgICAgY29uc3QgdHJpbW1lZElkID0gaWQudHJpbSgpO1xuICAgICAgYmxvY2tEYXRhYmFzZVt0cmltbWVkSWRdID0geyBpZDogdHJpbW1lZElkLCB0eXBlOiBcIm5hXCIsIGNoaWxkcmVuOiBbXSB9O1xuICAgICAgZm91bmRCbG9jayA9IGJsb2NrRGF0YWJhc2VbdHJpbW1lZElkXTtcbiAgICB9XG4gICAgaWYgKCFmb3VuZEJsb2NrLmNsYXNzZXMpIHtcbiAgICAgIGZvdW5kQmxvY2suY2xhc3NlcyA9IFtdO1xuICAgIH1cbiAgICBmb3VuZEJsb2NrLmNsYXNzZXMucHVzaChjc3NDbGFzc05hbWUpO1xuICB9KTtcbn07XG5jb25zdCBwb3B1bGF0ZUJsb2NrRGF0YWJhc2UgPSAoX2Jsb2NrTGlzdCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IGJsb2NrTGlzdCA9IF9ibG9ja0xpc3QuZmxhdCgpO1xuICBjb25zdCBjaGlsZHJlbiA9IFtdO1xuICBmb3IgKGNvbnN0IGJsb2NrIG9mIGJsb2NrTGlzdCkge1xuICAgIGlmIChibG9jay5sYWJlbCkge1xuICAgICAgYmxvY2subGFiZWwgPSBzYW5pdGl6ZVRleHQoYmxvY2subGFiZWwpO1xuICAgIH1cbiAgICBpZiAoYmxvY2sudHlwZSA9PT0gXCJjbGFzc0RlZlwiKSB7XG4gICAgICBhZGRTdHlsZUNsYXNzKGJsb2NrLmlkLCBibG9jay5jc3MpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChibG9jay50eXBlID09PSBcImFwcGx5Q2xhc3NcIikge1xuICAgICAgc2V0Q3NzQ2xhc3MoYmxvY2suaWQsIChibG9jayA9PSBudWxsID8gdm9pZCAwIDogYmxvY2suc3R5bGVDbGFzcykgfHwgXCJcIik7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGJsb2NrLnR5cGUgPT09IFwiYXBwbHlTdHlsZXNcIikge1xuICAgICAgaWYgKGJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBibG9jay5zdHlsZXNTdHIpIHtcbiAgICAgICAgYWRkU3R5bGUyTm9kZShibG9jay5pZCwgYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnN0eWxlc1N0cik7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGJsb2NrLnR5cGUgPT09IFwiY29sdW1uLXNldHRpbmdcIikge1xuICAgICAgcGFyZW50LmNvbHVtbnMgPSBibG9jay5jb2x1bW5zIHx8IC0xO1xuICAgIH0gZWxzZSBpZiAoYmxvY2sudHlwZSA9PT0gXCJlZGdlXCIpIHtcbiAgICAgIGlmIChlZGdlQ291bnRbYmxvY2suaWRdKSB7XG4gICAgICAgIGVkZ2VDb3VudFtibG9jay5pZF0rKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVkZ2VDb3VudFtibG9jay5pZF0gPSAxO1xuICAgICAgfVxuICAgICAgYmxvY2suaWQgPSBlZGdlQ291bnRbYmxvY2suaWRdICsgXCItXCIgKyBibG9jay5pZDtcbiAgICAgIGVkZ2VMaXN0LnB1c2goYmxvY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWJsb2NrLmxhYmVsKSB7XG4gICAgICAgIGlmIChibG9jay50eXBlID09PSBcImNvbXBvc2l0ZVwiKSB7XG4gICAgICAgICAgYmxvY2subGFiZWwgPSBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJsb2NrLmxhYmVsID0gYmxvY2suaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IG5ld0Jsb2NrID0gIWJsb2NrRGF0YWJhc2VbYmxvY2suaWRdO1xuICAgICAgaWYgKG5ld0Jsb2NrKSB7XG4gICAgICAgIGJsb2NrRGF0YWJhc2VbYmxvY2suaWRdID0gYmxvY2s7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYmxvY2sudHlwZSAhPT0gXCJuYVwiKSB7XG4gICAgICAgICAgYmxvY2tEYXRhYmFzZVtibG9jay5pZF0udHlwZSA9IGJsb2NrLnR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJsb2NrLmxhYmVsICE9PSBibG9jay5pZCkge1xuICAgICAgICAgIGJsb2NrRGF0YWJhc2VbYmxvY2suaWRdLmxhYmVsID0gYmxvY2subGFiZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChibG9jay5jaGlsZHJlbikge1xuICAgICAgICBwb3B1bGF0ZUJsb2NrRGF0YWJhc2UoYmxvY2suY2hpbGRyZW4sIGJsb2NrKTtcbiAgICAgIH1cbiAgICAgIGlmIChibG9jay50eXBlID09PSBcInNwYWNlXCIpIHtcbiAgICAgICAgY29uc3QgdyA9IGJsb2NrLndpZHRoIHx8IDE7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdzsgaisrKSB7XG4gICAgICAgICAgY29uc3QgbmV3QmxvY2syID0gY2xvbmUoYmxvY2spO1xuICAgICAgICAgIG5ld0Jsb2NrMi5pZCA9IG5ld0Jsb2NrMi5pZCArIFwiLVwiICsgajtcbiAgICAgICAgICBibG9ja0RhdGFiYXNlW25ld0Jsb2NrMi5pZF0gPSBuZXdCbG9jazI7XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChuZXdCbG9jazIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5ld0Jsb2NrKSB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2goYmxvY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwYXJlbnQuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbn07XG5sZXQgYmxvY2tzID0gW107XG5sZXQgcm9vdEJsb2NrID0geyBpZDogXCJyb290XCIsIHR5cGU6IFwiY29tcG9zaXRlXCIsIGNoaWxkcmVuOiBbXSwgY29sdW1uczogLTEgfTtcbmNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICBsb2cuZGVidWcoXCJDbGVhciBjYWxsZWRcIik7XG4gIGNsZWFyJDEoKTtcbiAgcm9vdEJsb2NrID0geyBpZDogXCJyb290XCIsIHR5cGU6IFwiY29tcG9zaXRlXCIsIGNoaWxkcmVuOiBbXSwgY29sdW1uczogLTEgfTtcbiAgYmxvY2tEYXRhYmFzZSA9IHsgcm9vdDogcm9vdEJsb2NrIH07XG4gIGJsb2NrcyA9IFtdO1xuICBjbGFzc2VzID0ge307XG4gIGVkZ2VMaXN0ID0gW107XG4gIGVkZ2VDb3VudCA9IHt9O1xufTtcbmZ1bmN0aW9uIHR5cGVTdHIyVHlwZSh0eXBlU3RyKSB7XG4gIGxvZy5kZWJ1ZyhcInR5cGVTdHIyVHlwZVwiLCB0eXBlU3RyKTtcbiAgc3dpdGNoICh0eXBlU3RyKSB7XG4gICAgY2FzZSBcIltdXCI6XG4gICAgICByZXR1cm4gXCJzcXVhcmVcIjtcbiAgICBjYXNlIFwiKClcIjpcbiAgICAgIGxvZy5kZWJ1ZyhcIndlIGhhdmUgYSByb3VuZFwiKTtcbiAgICAgIHJldHVybiBcInJvdW5kXCI7XG4gICAgY2FzZSBcIigoKSlcIjpcbiAgICAgIHJldHVybiBcImNpcmNsZVwiO1xuICAgIGNhc2UgXCI+XVwiOlxuICAgICAgcmV0dXJuIFwicmVjdF9sZWZ0X2ludl9hcnJvd1wiO1xuICAgIGNhc2UgXCJ7fVwiOlxuICAgICAgcmV0dXJuIFwiZGlhbW9uZFwiO1xuICAgIGNhc2UgXCJ7e319XCI6XG4gICAgICByZXR1cm4gXCJoZXhhZ29uXCI7XG4gICAgY2FzZSBcIihbXSlcIjpcbiAgICAgIHJldHVybiBcInN0YWRpdW1cIjtcbiAgICBjYXNlIFwiW1tdXVwiOlxuICAgICAgcmV0dXJuIFwic3Vicm91dGluZVwiO1xuICAgIGNhc2UgXCJbKCldXCI6XG4gICAgICByZXR1cm4gXCJjeWxpbmRlclwiO1xuICAgIGNhc2UgXCIoKCgpKSlcIjpcbiAgICAgIHJldHVybiBcImRvdWJsZWNpcmNsZVwiO1xuICAgIGNhc2UgXCJbLy9dXCI6XG4gICAgICByZXR1cm4gXCJsZWFuX3JpZ2h0XCI7XG4gICAgY2FzZSBcIltcXFxcXFxcXF1cIjpcbiAgICAgIHJldHVybiBcImxlYW5fbGVmdFwiO1xuICAgIGNhc2UgXCJbL1xcXFxdXCI6XG4gICAgICByZXR1cm4gXCJ0cmFwZXpvaWRcIjtcbiAgICBjYXNlIFwiW1xcXFwvXVwiOlxuICAgICAgcmV0dXJuIFwiaW52X3RyYXBlem9pZFwiO1xuICAgIGNhc2UgXCI8W10+XCI6XG4gICAgICByZXR1cm4gXCJibG9ja19hcnJvd1wiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJuYVwiO1xuICB9XG59XG5mdW5jdGlvbiBlZGdlVHlwZVN0cjJUeXBlKHR5cGVTdHIpIHtcbiAgbG9nLmRlYnVnKFwidHlwZVN0cjJUeXBlXCIsIHR5cGVTdHIpO1xuICBzd2l0Y2ggKHR5cGVTdHIpIHtcbiAgICBjYXNlIFwiPT1cIjpcbiAgICAgIHJldHVybiBcInRoaWNrXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcIm5vcm1hbFwiO1xuICB9XG59XG5mdW5jdGlvbiBlZGdlU3RyVG9FZGdlRGF0YSh0eXBlU3RyKSB7XG4gIHN3aXRjaCAodHlwZVN0ci50cmltKCkpIHtcbiAgICBjYXNlIFwiLS14XCI6XG4gICAgICByZXR1cm4gXCJhcnJvd19jcm9zc1wiO1xuICAgIGNhc2UgXCItLW9cIjpcbiAgICAgIHJldHVybiBcImFycm93X2NpcmNsZVwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJhcnJvd19wb2ludFwiO1xuICB9XG59XG5sZXQgY250ID0gMDtcbmNvbnN0IGdlbmVyYXRlSWQgPSAoKSA9PiB7XG4gIGNudCsrO1xuICByZXR1cm4gXCJpZC1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAxMikgKyBcIi1cIiArIGNudDtcbn07XG5jb25zdCBzZXRIaWVyYXJjaHkgPSAoYmxvY2spID0+IHtcbiAgcm9vdEJsb2NrLmNoaWxkcmVuID0gYmxvY2s7XG4gIHBvcHVsYXRlQmxvY2tEYXRhYmFzZShibG9jaywgcm9vdEJsb2NrKTtcbiAgYmxvY2tzID0gcm9vdEJsb2NrLmNoaWxkcmVuO1xufTtcbmNvbnN0IGdldENvbHVtbnMgPSAoYmxvY2tJZCkgPT4ge1xuICBjb25zdCBibG9jayA9IGJsb2NrRGF0YWJhc2VbYmxvY2tJZF07XG4gIGlmICghYmxvY2spIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGJsb2NrLmNvbHVtbnMpIHtcbiAgICByZXR1cm4gYmxvY2suY29sdW1ucztcbiAgfVxuICBpZiAoIWJsb2NrLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHJldHVybiBibG9jay5jaGlsZHJlbi5sZW5ndGg7XG59O1xuY29uc3QgZ2V0QmxvY2tzRmxhdCA9ICgpID0+IHtcbiAgcmV0dXJuIFsuLi5PYmplY3QudmFsdWVzKGJsb2NrRGF0YWJhc2UpXTtcbn07XG5jb25zdCBnZXRCbG9ja3MgPSAoKSA9PiB7XG4gIHJldHVybiBibG9ja3MgfHwgW107XG59O1xuY29uc3QgZ2V0RWRnZXMgPSAoKSA9PiB7XG4gIHJldHVybiBlZGdlTGlzdDtcbn07XG5jb25zdCBnZXRCbG9jayA9IChpZCkgPT4ge1xuICByZXR1cm4gYmxvY2tEYXRhYmFzZVtpZF07XG59O1xuY29uc3Qgc2V0QmxvY2sgPSAoYmxvY2spID0+IHtcbiAgYmxvY2tEYXRhYmFzZVtibG9jay5pZF0gPSBibG9jaztcbn07XG5jb25zdCBnZXRMb2dnZXIgPSAoKSA9PiBjb25zb2xlO1xuY29uc3QgZ2V0Q2xhc3NlcyQxID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBjbGFzc2VzO1xufTtcbmNvbnN0IGRiID0ge1xuICBnZXRDb25maWc6ICgpID0+IGdldENvbmZpZyQxKCkuYmxvY2ssXG4gIHR5cGVTdHIyVHlwZSxcbiAgZWRnZVR5cGVTdHIyVHlwZSxcbiAgZWRnZVN0clRvRWRnZURhdGEsXG4gIGdldExvZ2dlcixcbiAgZ2V0QmxvY2tzRmxhdCxcbiAgZ2V0QmxvY2tzLFxuICBnZXRFZGdlcyxcbiAgc2V0SGllcmFyY2h5LFxuICBnZXRCbG9jayxcbiAgc2V0QmxvY2ssXG4gIGdldENvbHVtbnMsXG4gIGdldENsYXNzZXM6IGdldENsYXNzZXMkMSxcbiAgY2xlYXIsXG4gIGdlbmVyYXRlSWRcbn07XG5jb25zdCBkYiQxID0gZGI7XG5jb25zdCBmYWRlID0gKGNvbG9yLCBvcGFjaXR5KSA9PiB7XG4gIGNvbnN0IGNoYW5uZWwgPSBraHJvbWEuY2hhbm5lbDtcbiAgY29uc3QgciA9IGNoYW5uZWwoY29sb3IsIFwiclwiKTtcbiAgY29uc3QgZyA9IGNoYW5uZWwoY29sb3IsIFwiZ1wiKTtcbiAgY29uc3QgYiA9IGNoYW5uZWwoY29sb3IsIFwiYlwiKTtcbiAgcmV0dXJuIGtocm9tYS5yZ2JhKHIsIGcsIGIsIG9wYWNpdHkpO1xufTtcbmNvbnN0IGdldFN0eWxlcyA9IChvcHRpb25zKSA9PiBgLmxhYmVsIHtcbiAgICBmb250LWZhbWlseTogJHtvcHRpb25zLmZvbnRGYW1pbHl9O1xuICAgIGNvbG9yOiAke29wdGlvbnMubm9kZVRleHRDb2xvciB8fCBvcHRpb25zLnRleHRDb2xvcn07XG4gIH1cbiAgLmNsdXN0ZXItbGFiZWwgdGV4dCB7XG4gICAgZmlsbDogJHtvcHRpb25zLnRpdGxlQ29sb3J9O1xuICB9XG4gIC5jbHVzdGVyLWxhYmVsIHNwYW4scCB7XG4gICAgY29sb3I6ICR7b3B0aW9ucy50aXRsZUNvbG9yfTtcbiAgfVxuXG5cblxuICAubGFiZWwgdGV4dCxzcGFuLHAge1xuICAgIGZpbGw6ICR7b3B0aW9ucy5ub2RlVGV4dENvbG9yIHx8IG9wdGlvbnMudGV4dENvbG9yfTtcbiAgICBjb2xvcjogJHtvcHRpb25zLm5vZGVUZXh0Q29sb3IgfHwgb3B0aW9ucy50ZXh0Q29sb3J9O1xuICB9XG5cbiAgLm5vZGUgcmVjdCxcbiAgLm5vZGUgY2lyY2xlLFxuICAubm9kZSBlbGxpcHNlLFxuICAubm9kZSBwb2x5Z29uLFxuICAubm9kZSBwYXRoIHtcbiAgICBmaWxsOiAke29wdGlvbnMubWFpbkJrZ307XG4gICAgc3Ryb2tlOiAke29wdGlvbnMubm9kZUJvcmRlcn07XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gIH1cbiAgLmZsb3djaGFydC1sYWJlbCB0ZXh0IHtcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICB9XG4gIC8vIC5mbG93Y2hhcnQtbGFiZWwgLnRleHQtb3V0ZXItdHNwYW4ge1xuICAvLyAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gIC8vIH1cbiAgLy8gLmZsb3djaGFydC1sYWJlbCAudGV4dC1pbm5lci10c3BhbiB7XG4gIC8vICAgdGV4dC1hbmNob3I6IHN0YXJ0O1xuICAvLyB9XG5cbiAgLm5vZGUgLmxhYmVsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm5vZGUuY2xpY2thYmxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuYXJyb3doZWFkUGF0aCB7XG4gICAgZmlsbDogJHtvcHRpb25zLmFycm93aGVhZENvbG9yfTtcbiAgfVxuXG4gIC5lZGdlUGF0aCAucGF0aCB7XG4gICAgc3Ryb2tlOiAke29wdGlvbnMubGluZUNvbG9yfTtcbiAgICBzdHJva2Utd2lkdGg6IDIuMHB4O1xuICB9XG5cbiAgLmZsb3djaGFydC1saW5rIHtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy5saW5lQ29sb3J9O1xuICAgIGZpbGw6IG5vbmU7XG4gIH1cblxuICAuZWRnZUxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke29wdGlvbnMuZWRnZUxhYmVsQmFja2dyb3VuZH07XG4gICAgcmVjdCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke29wdGlvbnMuZWRnZUxhYmVsQmFja2dyb3VuZH07XG4gICAgICBmaWxsOiAke29wdGlvbnMuZWRnZUxhYmVsQmFja2dyb3VuZH07XG4gICAgfVxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC8qIEZvciBodG1sIGxhYmVscyBvbmx5ICovXG4gIC5sYWJlbEJrZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtmYWRlKG9wdGlvbnMuZWRnZUxhYmVsQmFja2dyb3VuZCwgMC41KX07XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjpcbiAgfVxuXG4gIC5ub2RlIC5jbHVzdGVyIHtcbiAgICAvLyBmaWxsOiAke2ZhZGUob3B0aW9ucy5tYWluQmtnLCAwLjUpfTtcbiAgICBmaWxsOiAke2ZhZGUob3B0aW9ucy5jbHVzdGVyQmtnLCAwLjUpfTtcbiAgICBzdHJva2U6ICR7ZmFkZShvcHRpb25zLmNsdXN0ZXJCb3JkZXIsIDAuMil9O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDEzcHggMjdweCAtNXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDhweCAxNnB4IC04cHg7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gIH1cblxuICAuY2x1c3RlciB0ZXh0IHtcbiAgICBmaWxsOiAke29wdGlvbnMudGl0bGVDb2xvcn07XG4gIH1cblxuICAuY2x1c3RlciBzcGFuLHAge1xuICAgIGNvbG9yOiAke29wdGlvbnMudGl0bGVDb2xvcn07XG4gIH1cbiAgLyogLmNsdXN0ZXIgZGl2IHtcbiAgICBjb2xvcjogJHtvcHRpb25zLnRpdGxlQ29sb3J9O1xuICB9ICovXG5cbiAgZGl2Lm1lcm1haWRUb29sdGlwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGZvbnQtZmFtaWx5OiAke29wdGlvbnMuZm9udEZhbWlseX07XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICR7b3B0aW9ucy50ZXJ0aWFyeUNvbG9yfTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke29wdGlvbnMuYm9yZGVyMn07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgfVxuXG4gIC5mbG93Y2hhcnRUaXRsZVRleHQge1xuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZpbGw6ICR7b3B0aW9ucy50ZXh0Q29sb3J9O1xuICB9XG5gO1xuY29uc3QgZmxvd1N0eWxlcyA9IGdldFN0eWxlcztcbmZ1bmN0aW9uIGdldE5vZGVGcm9tQmxvY2soYmxvY2ssIGRiMiwgcG9zaXRpb25lZCA9IGZhbHNlKSB7XG4gIHZhciBfYTIsIF9iMiwgX2M7XG4gIGNvbnN0IHZlcnRleCA9IGJsb2NrO1xuICBsZXQgY2xhc3NTdHIgPSBcImRlZmF1bHRcIjtcbiAgaWYgKCgoKF9hMiA9IHZlcnRleCA9PSBudWxsID8gdm9pZCAwIDogdmVydGV4LmNsYXNzZXMpID09IG51bGwgPyB2b2lkIDAgOiBfYTIubGVuZ3RoKSB8fCAwKSA+IDApIHtcbiAgICBjbGFzc1N0ciA9ICgodmVydGV4ID09IG51bGwgPyB2b2lkIDAgOiB2ZXJ0ZXguY2xhc3NlcykgfHwgW10pLmpvaW4oXCIgXCIpO1xuICB9XG4gIGNsYXNzU3RyID0gY2xhc3NTdHIgKyBcIiBmbG93Y2hhcnQtbGFiZWxcIjtcbiAgbGV0IHJhZGl1cyA9IDA7XG4gIGxldCBzaGFwZSA9IFwiXCI7XG4gIGxldCBwYWRkaW5nMjtcbiAgc3dpdGNoICh2ZXJ0ZXgudHlwZSkge1xuICAgIGNhc2UgXCJyb3VuZFwiOlxuICAgICAgcmFkaXVzID0gNTtcbiAgICAgIHNoYXBlID0gXCJyZWN0XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY29tcG9zaXRlXCI6XG4gICAgICByYWRpdXMgPSAwO1xuICAgICAgc2hhcGUgPSBcImNvbXBvc2l0ZVwiO1xuICAgICAgcGFkZGluZzIgPSAwO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInNxdWFyZVwiOlxuICAgICAgc2hhcGUgPSBcInJlY3RcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJkaWFtb25kXCI6XG4gICAgICBzaGFwZSA9IFwicXVlc3Rpb25cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJoZXhhZ29uXCI6XG4gICAgICBzaGFwZSA9IFwiaGV4YWdvblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImJsb2NrX2Fycm93XCI6XG4gICAgICBzaGFwZSA9IFwiYmxvY2tfYXJyb3dcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJvZGRcIjpcbiAgICAgIHNoYXBlID0gXCJyZWN0X2xlZnRfaW52X2Fycm93XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibGVhbl9yaWdodFwiOlxuICAgICAgc2hhcGUgPSBcImxlYW5fcmlnaHRcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsZWFuX2xlZnRcIjpcbiAgICAgIHNoYXBlID0gXCJsZWFuX2xlZnRcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ0cmFwZXpvaWRcIjpcbiAgICAgIHNoYXBlID0gXCJ0cmFwZXpvaWRcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJpbnZfdHJhcGV6b2lkXCI6XG4gICAgICBzaGFwZSA9IFwiaW52X3RyYXBlem9pZFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInJlY3RfbGVmdF9pbnZfYXJyb3dcIjpcbiAgICAgIHNoYXBlID0gXCJyZWN0X2xlZnRfaW52X2Fycm93XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2lyY2xlXCI6XG4gICAgICBzaGFwZSA9IFwiY2lyY2xlXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZWxsaXBzZVwiOlxuICAgICAgc2hhcGUgPSBcImVsbGlwc2VcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdGFkaXVtXCI6XG4gICAgICBzaGFwZSA9IFwic3RhZGl1bVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInN1YnJvdXRpbmVcIjpcbiAgICAgIHNoYXBlID0gXCJzdWJyb3V0aW5lXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY3lsaW5kZXJcIjpcbiAgICAgIHNoYXBlID0gXCJjeWxpbmRlclwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImdyb3VwXCI6XG4gICAgICBzaGFwZSA9IFwicmVjdFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImRvdWJsZWNpcmNsZVwiOlxuICAgICAgc2hhcGUgPSBcImRvdWJsZWNpcmNsZVwiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHNoYXBlID0gXCJyZWN0XCI7XG4gIH1cbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzRnJvbUFycmF5KCh2ZXJ0ZXggPT0gbnVsbCA/IHZvaWQgMCA6IHZlcnRleC5zdHlsZXMpIHx8IFtdKTtcbiAgY29uc3QgdmVydGV4VGV4dCA9IHZlcnRleC5sYWJlbDtcbiAgY29uc3QgYm91bmRzID0gdmVydGV4LnNpemUgfHwgeyB3aWR0aDogMCwgaGVpZ2h0OiAwLCB4OiAwLCB5OiAwIH07XG4gIGNvbnN0IG5vZGUgPSB7XG4gICAgbGFiZWxTdHlsZTogc3R5bGVzLmxhYmVsU3R5bGUsXG4gICAgc2hhcGUsXG4gICAgbGFiZWxUZXh0OiB2ZXJ0ZXhUZXh0LFxuICAgIHJ4OiByYWRpdXMsXG4gICAgcnk6IHJhZGl1cyxcbiAgICBjbGFzczogY2xhc3NTdHIsXG4gICAgc3R5bGU6IHN0eWxlcy5zdHlsZSxcbiAgICBpZDogdmVydGV4LmlkLFxuICAgIGRpcmVjdGlvbnM6IHZlcnRleC5kaXJlY3Rpb25zLFxuICAgIHdpZHRoOiBib3VuZHMud2lkdGgsXG4gICAgaGVpZ2h0OiBib3VuZHMuaGVpZ2h0LFxuICAgIHg6IGJvdW5kcy54LFxuICAgIHk6IGJvdW5kcy55LFxuICAgIHBvc2l0aW9uZWQsXG4gICAgaW50ZXJzZWN0OiB2b2lkIDAsXG4gICAgdHlwZTogdmVydGV4LnR5cGUsXG4gICAgcGFkZGluZzogcGFkZGluZzIgPz8gKCgoX2MgPSAoX2IyID0gZ2V0Q29uZmlnJDEoKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9iMi5ibG9jaykgPT0gbnVsbCA/IHZvaWQgMCA6IF9jLnBhZGRpbmcpIHx8IDApXG4gIH07XG4gIHJldHVybiBub2RlO1xufVxuYXN5bmMgZnVuY3Rpb24gY2FsY3VsYXRlQmxvY2tTaXplKGVsZW0sIGJsb2NrLCBkYjIpIHtcbiAgY29uc3Qgbm9kZSA9IGdldE5vZGVGcm9tQmxvY2soYmxvY2ssIGRiMiwgZmFsc2UpO1xuICBpZiAobm9kZS50eXBlID09PSBcImdyb3VwXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgbm9kZUVsID0gYXdhaXQgaW5zZXJ0Tm9kZShlbGVtLCBub2RlKTtcbiAgY29uc3QgYm91bmRpbmdCb3ggPSBub2RlRWwubm9kZSgpLmdldEJCb3goKTtcbiAgY29uc3Qgb2JqID0gZGIyLmdldEJsb2NrKG5vZGUuaWQpO1xuICBvYmouc2l6ZSA9IHsgd2lkdGg6IGJvdW5kaW5nQm94LndpZHRoLCBoZWlnaHQ6IGJvdW5kaW5nQm94LmhlaWdodCwgeDogMCwgeTogMCwgbm9kZTogbm9kZUVsIH07XG4gIGRiMi5zZXRCbG9jayhvYmopO1xuICBub2RlRWwucmVtb3ZlKCk7XG59XG5hc3luYyBmdW5jdGlvbiBpbnNlcnRCbG9ja1Bvc2l0aW9uZWQoZWxlbSwgYmxvY2ssIGRiMikge1xuICBjb25zdCBub2RlID0gZ2V0Tm9kZUZyb21CbG9jayhibG9jaywgZGIyLCB0cnVlKTtcbiAgY29uc3Qgb2JqID0gZGIyLmdldEJsb2NrKG5vZGUuaWQpO1xuICBpZiAob2JqLnR5cGUgIT09IFwic3BhY2VcIikge1xuICAgIGF3YWl0IGluc2VydE5vZGUoZWxlbSwgbm9kZSk7XG4gICAgYmxvY2suaW50ZXJzZWN0ID0gbm9kZSA9PSBudWxsID8gdm9pZCAwIDogbm9kZS5pbnRlcnNlY3Q7XG4gICAgcG9zaXRpb25Ob2RlKG5vZGUpO1xuICB9XG59XG5hc3luYyBmdW5jdGlvbiBwZXJmb3JtT3BlcmF0aW9ucyhlbGVtLCBibG9ja3MyLCBkYjIsIG9wZXJhdGlvbikge1xuICBmb3IgKGNvbnN0IGJsb2NrIG9mIGJsb2NrczIpIHtcbiAgICBhd2FpdCBvcGVyYXRpb24oZWxlbSwgYmxvY2ssIGRiMik7XG4gICAgaWYgKGJsb2NrLmNoaWxkcmVuKSB7XG4gICAgICBhd2FpdCBwZXJmb3JtT3BlcmF0aW9ucyhlbGVtLCBibG9jay5jaGlsZHJlbiwgZGIyLCBvcGVyYXRpb24pO1xuICAgIH1cbiAgfVxufVxuYXN5bmMgZnVuY3Rpb24gY2FsY3VsYXRlQmxvY2tTaXplcyhlbGVtLCBibG9ja3MyLCBkYjIpIHtcbiAgYXdhaXQgcGVyZm9ybU9wZXJhdGlvbnMoZWxlbSwgYmxvY2tzMiwgZGIyLCBjYWxjdWxhdGVCbG9ja1NpemUpO1xufVxuYXN5bmMgZnVuY3Rpb24gaW5zZXJ0QmxvY2tzKGVsZW0sIGJsb2NrczIsIGRiMikge1xuICBhd2FpdCBwZXJmb3JtT3BlcmF0aW9ucyhlbGVtLCBibG9ja3MyLCBkYjIsIGluc2VydEJsb2NrUG9zaXRpb25lZCk7XG59XG5hc3luYyBmdW5jdGlvbiBpbnNlcnRFZGdlcyhlbGVtLCBlZGdlcywgYmxvY2tzMiwgZGIyLCBpZCkge1xuICBjb25zdCBnID0gbmV3IGdyYXBobGliLkdyYXBoKHtcbiAgICBtdWx0aWdyYXBoOiB0cnVlLFxuICAgIGNvbXBvdW5kOiB0cnVlXG4gIH0pO1xuICBnLnNldEdyYXBoKHtcbiAgICByYW5rZGlyOiBcIlRCXCIsXG4gICAgbm9kZXNlcDogMTAsXG4gICAgcmFua3NlcDogMTAsXG4gICAgbWFyZ2lueDogOCxcbiAgICBtYXJnaW55OiA4XG4gIH0pO1xuICBmb3IgKGNvbnN0IGJsb2NrIG9mIGJsb2NrczIpIHtcbiAgICBpZiAoYmxvY2suc2l6ZSkge1xuICAgICAgZy5zZXROb2RlKGJsb2NrLmlkLCB7XG4gICAgICAgIHdpZHRoOiBibG9jay5zaXplLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGJsb2NrLnNpemUuaGVpZ2h0LFxuICAgICAgICBpbnRlcnNlY3Q6IGJsb2NrLmludGVyc2VjdFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgZWRnZSBvZiBlZGdlcykge1xuICAgIGlmIChlZGdlLnN0YXJ0ICYmIGVkZ2UuZW5kKSB7XG4gICAgICBjb25zdCBzdGFydEJsb2NrID0gZGIyLmdldEJsb2NrKGVkZ2Uuc3RhcnQpO1xuICAgICAgY29uc3QgZW5kQmxvY2sgPSBkYjIuZ2V0QmxvY2soZWRnZS5lbmQpO1xuICAgICAgaWYgKChzdGFydEJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBzdGFydEJsb2NrLnNpemUpICYmIChlbmRCbG9jayA9PSBudWxsID8gdm9pZCAwIDogZW5kQmxvY2suc2l6ZSkpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBzdGFydEJsb2NrLnNpemU7XG4gICAgICAgIGNvbnN0IGVuZCA9IGVuZEJsb2NrLnNpemU7XG4gICAgICAgIGNvbnN0IHBvaW50cyA9IFtcbiAgICAgICAgICB7IHg6IHN0YXJ0LngsIHk6IHN0YXJ0LnkgfSxcbiAgICAgICAgICB7IHg6IHN0YXJ0LnggKyAoZW5kLnggLSBzdGFydC54KSAvIDIsIHk6IHN0YXJ0LnkgKyAoZW5kLnkgLSBzdGFydC55KSAvIDIgfSxcbiAgICAgICAgICB7IHg6IGVuZC54LCB5OiBlbmQueSB9XG4gICAgICAgIF07XG4gICAgICAgIGF3YWl0IGluc2VydEVkZ2UoXG4gICAgICAgICAgZWxlbSxcbiAgICAgICAgICB7IHY6IGVkZ2Uuc3RhcnQsIHc6IGVkZ2UuZW5kLCBuYW1lOiBlZGdlLmlkIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgLi4uZWRnZSxcbiAgICAgICAgICAgIGFycm93VHlwZUVuZDogZWRnZS5hcnJvd1R5cGVFbmQsXG4gICAgICAgICAgICBhcnJvd1R5cGVTdGFydDogZWRnZS5hcnJvd1R5cGVTdGFydCxcbiAgICAgICAgICAgIHBvaW50cyxcbiAgICAgICAgICAgIGNsYXNzZXM6IFwiZWRnZS10aGlja25lc3Mtbm9ybWFsIGVkZ2UtcGF0dGVybi1zb2xpZCBmbG93Y2hhcnQtbGluayBMUy1hMSBMRS1iMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgXCJibG9ja1wiLFxuICAgICAgICAgIGcsXG4gICAgICAgICAgaWRcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGVkZ2UubGFiZWwpIHtcbiAgICAgICAgICBhd2FpdCBpbnNlcnRFZGdlTGFiZWwoZWxlbSwge1xuICAgICAgICAgICAgLi4uZWRnZSxcbiAgICAgICAgICAgIGxhYmVsOiBlZGdlLmxhYmVsLFxuICAgICAgICAgICAgbGFiZWxTdHlsZTogXCJzdHJva2U6ICMzMzM7IHN0cm9rZS13aWR0aDogMS41cHg7ZmlsbDpub25lO1wiLFxuICAgICAgICAgICAgYXJyb3dUeXBlRW5kOiBlZGdlLmFycm93VHlwZUVuZCxcbiAgICAgICAgICAgIGFycm93VHlwZVN0YXJ0OiBlZGdlLmFycm93VHlwZVN0YXJ0LFxuICAgICAgICAgICAgcG9pbnRzLFxuICAgICAgICAgICAgY2xhc3NlczogXCJlZGdlLXRoaWNrbmVzcy1ub3JtYWwgZWRnZS1wYXR0ZXJuLXNvbGlkIGZsb3djaGFydC1saW5rIExTLWExIExFLWIxXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhd2FpdCBwb3NpdGlvbkVkZ2VMYWJlbChcbiAgICAgICAgICAgIHsgLi4uZWRnZSwgeDogcG9pbnRzWzFdLngsIHk6IHBvaW50c1sxXS55IH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9yaWdpbmFsUGF0aDogcG9pbnRzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuY29uc3QgcGFkZGluZyA9ICgoX2IgPSAoX2EgPSBnZXRDb25maWcoKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmJsb2NrKSA9PSBudWxsID8gdm9pZCAwIDogX2IucGFkZGluZykgfHwgODtcbmZ1bmN0aW9uIGNhbGN1bGF0ZUJsb2NrUG9zaXRpb24oY29sdW1ucywgcG9zaXRpb24pIHtcbiAgaWYgKGNvbHVtbnMgPT09IDAgfHwgIU51bWJlci5pc0ludGVnZXIoY29sdW1ucykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb2x1bW5zIG11c3QgYmUgYW4gaW50ZWdlciAhPT0gMC5cIik7XG4gIH1cbiAgaWYgKHBvc2l0aW9uIDwgMCB8fCAhTnVtYmVyLmlzSW50ZWdlcihwb3NpdGlvbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQb3NpdGlvbiBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXIuXCIgKyBwb3NpdGlvbik7XG4gIH1cbiAgaWYgKGNvbHVtbnMgPCAwKSB7XG4gICAgcmV0dXJuIHsgcHg6IHBvc2l0aW9uLCBweTogMCB9O1xuICB9XG4gIGlmIChjb2x1bW5zID09PSAxKSB7XG4gICAgcmV0dXJuIHsgcHg6IDAsIHB5OiBwb3NpdGlvbiB9O1xuICB9XG4gIGNvbnN0IHB4ID0gcG9zaXRpb24gJSBjb2x1bW5zO1xuICBjb25zdCBweSA9IE1hdGguZmxvb3IocG9zaXRpb24gLyBjb2x1bW5zKTtcbiAgcmV0dXJuIHsgcHgsIHB5IH07XG59XG5jb25zdCBnZXRNYXhDaGlsZFNpemUgPSAoYmxvY2spID0+IHtcbiAgbGV0IG1heFdpZHRoID0gMDtcbiAgbGV0IG1heEhlaWdodCA9IDA7XG4gIGZvciAoY29uc3QgY2hpbGQgb2YgYmxvY2suY2hpbGRyZW4pIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHgsIHkgfSA9IGNoaWxkLnNpemUgfHwgeyB3aWR0aDogMCwgaGVpZ2h0OiAwLCB4OiAwLCB5OiAwIH07XG4gICAgbG9nLmRlYnVnKFxuICAgICAgXCJnZXRNYXhDaGlsZFNpemUgYWJjOTUgY2hpbGQ6XCIsXG4gICAgICBjaGlsZC5pZCxcbiAgICAgIFwid2lkdGg6XCIsXG4gICAgICB3aWR0aCxcbiAgICAgIFwiaGVpZ2h0OlwiLFxuICAgICAgaGVpZ2h0LFxuICAgICAgXCJ4OlwiLFxuICAgICAgeCxcbiAgICAgIFwieTpcIixcbiAgICAgIHksXG4gICAgICBjaGlsZC50eXBlXG4gICAgKTtcbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJzcGFjZVwiKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKHdpZHRoID4gbWF4V2lkdGgpIHtcbiAgICAgIG1heFdpZHRoID0gd2lkdGggLyAoYmxvY2sud2lkdGhJbkNvbHVtbnMgfHwgMSk7XG4gICAgfVxuICAgIGlmIChoZWlnaHQgPiBtYXhIZWlnaHQpIHtcbiAgICAgIG1heEhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgd2lkdGg6IG1heFdpZHRoLCBoZWlnaHQ6IG1heEhlaWdodCB9O1xufTtcbmZ1bmN0aW9uIHNldEJsb2NrU2l6ZXMoYmxvY2ssIGRiMiwgc2libGluZ1dpZHRoID0gMCwgc2libGluZ0hlaWdodCA9IDApIHtcbiAgdmFyIF9hMiwgX2IyLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oLCBfaSwgX2osIF9rO1xuICBsb2cuZGVidWcoXG4gICAgXCJzZXRCbG9ja1NpemVzIGFiYzk1IChzdGFydClcIixcbiAgICBibG9jay5pZCxcbiAgICAoX2EyID0gYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfYTIueCxcbiAgICBcImJsb2NrIHdpZHRoID1cIixcbiAgICBibG9jayA9PSBudWxsID8gdm9pZCAwIDogYmxvY2suc2l6ZSxcbiAgICBcInNpZWJsaW5nV2lkdGhcIixcbiAgICBzaWJsaW5nV2lkdGhcbiAgKTtcbiAgaWYgKCEoKF9iMiA9IGJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBibG9jay5zaXplKSA9PSBudWxsID8gdm9pZCAwIDogX2IyLndpZHRoKSkge1xuICAgIGJsb2NrLnNpemUgPSB7XG4gICAgICB3aWR0aDogc2libGluZ1dpZHRoLFxuICAgICAgaGVpZ2h0OiBzaWJsaW5nSGVpZ2h0LFxuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG4gIGxldCBtYXhXaWR0aCA9IDA7XG4gIGxldCBtYXhIZWlnaHQgPSAwO1xuICBpZiAoKChfYyA9IGJsb2NrLmNoaWxkcmVuKSA9PSBudWxsID8gdm9pZCAwIDogX2MubGVuZ3RoKSA+IDApIHtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGJsb2NrLmNoaWxkcmVuKSB7XG4gICAgICBzZXRCbG9ja1NpemVzKGNoaWxkLCBkYjIpO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFNpemUgPSBnZXRNYXhDaGlsZFNpemUoYmxvY2spO1xuICAgIG1heFdpZHRoID0gY2hpbGRTaXplLndpZHRoO1xuICAgIG1heEhlaWdodCA9IGNoaWxkU2l6ZS5oZWlnaHQ7XG4gICAgbG9nLmRlYnVnKFwic2V0QmxvY2tTaXplcyBhYmM5NSBtYXhXaWR0aCBvZlwiLCBibG9jay5pZCwgXCI6cyBjaGlsZHJlbiBpcyBcIiwgbWF4V2lkdGgsIG1heEhlaWdodCk7XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBibG9jay5jaGlsZHJlbikge1xuICAgICAgaWYgKGNoaWxkLnNpemUpIHtcbiAgICAgICAgbG9nLmRlYnVnKFxuICAgICAgICAgIGBhYmM5NSBTZXR0aW5nIHNpemUgb2YgY2hpbGRyZW4gb2YgJHtibG9jay5pZH0gaWQ9JHtjaGlsZC5pZH0gJHttYXhXaWR0aH0gJHttYXhIZWlnaHR9ICR7Y2hpbGQuc2l6ZX1gXG4gICAgICAgICk7XG4gICAgICAgIGNoaWxkLnNpemUud2lkdGggPSBtYXhXaWR0aCAqIChjaGlsZC53aWR0aEluQ29sdW1ucyB8fCAxKSArIHBhZGRpbmcgKiAoKGNoaWxkLndpZHRoSW5Db2x1bW5zIHx8IDEpIC0gMSk7XG4gICAgICAgIGNoaWxkLnNpemUuaGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgICAgICBjaGlsZC5zaXplLnggPSAwO1xuICAgICAgICBjaGlsZC5zaXplLnkgPSAwO1xuICAgICAgICBsb2cuZGVidWcoXG4gICAgICAgICAgYGFiYzk1IHVwZGF0aW5nIHNpemUgb2YgJHtibG9jay5pZH0gY2hpbGRyZW4gY2hpbGQ6JHtjaGlsZC5pZH0gbWF4V2lkdGg6JHttYXhXaWR0aH0gbWF4SGVpZ2h0OiR7bWF4SGVpZ2h0fWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBibG9jay5jaGlsZHJlbikge1xuICAgICAgc2V0QmxvY2tTaXplcyhjaGlsZCwgZGIyLCBtYXhXaWR0aCwgbWF4SGVpZ2h0KTtcbiAgICB9XG4gICAgY29uc3QgY29sdW1ucyA9IGJsb2NrLmNvbHVtbnMgfHwgLTE7XG4gICAgbGV0IG51bUl0ZW1zID0gMDtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGJsb2NrLmNoaWxkcmVuKSB7XG4gICAgICBudW1JdGVtcyArPSBjaGlsZC53aWR0aEluQ29sdW1ucyB8fCAxO1xuICAgIH1cbiAgICBsZXQgeFNpemUgPSBibG9jay5jaGlsZHJlbi5sZW5ndGg7XG4gICAgaWYgKGNvbHVtbnMgPiAwICYmIGNvbHVtbnMgPCBudW1JdGVtcykge1xuICAgICAgeFNpemUgPSBjb2x1bW5zO1xuICAgIH1cbiAgICBibG9jay53aWR0aEluQ29sdW1ucyB8fCAxO1xuICAgIGNvbnN0IHlTaXplID0gTWF0aC5jZWlsKG51bUl0ZW1zIC8geFNpemUpO1xuICAgIGxldCB3aWR0aCA9IHhTaXplICogKG1heFdpZHRoICsgcGFkZGluZykgKyBwYWRkaW5nO1xuICAgIGxldCBoZWlnaHQgPSB5U2l6ZSAqIChtYXhIZWlnaHQgKyBwYWRkaW5nKSArIHBhZGRpbmc7XG4gICAgaWYgKHdpZHRoIDwgc2libGluZ1dpZHRoKSB7XG4gICAgICBsb2cuZGVidWcoXG4gICAgICAgIGBEZXRlY3RlZCB0byBzbWFsbCBzaWVibGluZzogYWJjOTUgJHtibG9jay5pZH0gc2llYmxpbmdXaWR0aCAke3NpYmxpbmdXaWR0aH0gc2llYmxpbmdIZWlnaHQgJHtzaWJsaW5nSGVpZ2h0fSB3aWR0aCAke3dpZHRofWBcbiAgICAgICk7XG4gICAgICB3aWR0aCA9IHNpYmxpbmdXaWR0aDtcbiAgICAgIGhlaWdodCA9IHNpYmxpbmdIZWlnaHQ7XG4gICAgICBjb25zdCBjaGlsZFdpZHRoID0gKHNpYmxpbmdXaWR0aCAtIHhTaXplICogcGFkZGluZyAtIHBhZGRpbmcpIC8geFNpemU7XG4gICAgICBjb25zdCBjaGlsZEhlaWdodCA9IChzaWJsaW5nSGVpZ2h0IC0geVNpemUgKiBwYWRkaW5nIC0gcGFkZGluZykgLyB5U2l6ZTtcbiAgICAgIGxvZy5kZWJ1ZyhcIlNpemUgaW5kYXRhIGFiYzg4XCIsIGJsb2NrLmlkLCBcImNoaWxkV2lkdGhcIiwgY2hpbGRXaWR0aCwgXCJtYXhXaWR0aFwiLCBtYXhXaWR0aCk7XG4gICAgICBsb2cuZGVidWcoXCJTaXplIGluZGF0YSBhYmM4OFwiLCBibG9jay5pZCwgXCJjaGlsZEhlaWdodFwiLCBjaGlsZEhlaWdodCwgXCJtYXhIZWlnaHRcIiwgbWF4SGVpZ2h0KTtcbiAgICAgIGxvZy5kZWJ1ZyhcIlNpemUgaW5kYXRhIGFiYzg4IHhTaXplXCIsIHhTaXplLCBcInBhZGRpbmdcIiwgcGFkZGluZyk7XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGJsb2NrLmNoaWxkcmVuKSB7XG4gICAgICAgIGlmIChjaGlsZC5zaXplKSB7XG4gICAgICAgICAgY2hpbGQuc2l6ZS53aWR0aCA9IGNoaWxkV2lkdGg7XG4gICAgICAgICAgY2hpbGQuc2l6ZS5oZWlnaHQgPSBjaGlsZEhlaWdodDtcbiAgICAgICAgICBjaGlsZC5zaXplLnggPSAwO1xuICAgICAgICAgIGNoaWxkLnNpemUueSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbG9nLmRlYnVnKFxuICAgICAgYGFiYzk1IChmaW5hbGUgY2FsYykgJHtibG9jay5pZH0geFNpemUgJHt4U2l6ZX0geVNpemUgJHt5U2l6ZX0gY29sdW1ucyAke2NvbHVtbnN9JHtibG9jay5jaGlsZHJlbi5sZW5ndGh9IHdpZHRoPSR7TWF0aC5tYXgod2lkdGgsICgoX2QgPSBibG9jay5zaXplKSA9PSBudWxsID8gdm9pZCAwIDogX2Qud2lkdGgpIHx8IDApfWBcbiAgICApO1xuICAgIGlmICh3aWR0aCA8ICgoKF9lID0gYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfZS53aWR0aCkgfHwgMCkpIHtcbiAgICAgIHdpZHRoID0gKChfZiA9IGJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBibG9jay5zaXplKSA9PSBudWxsID8gdm9pZCAwIDogX2Yud2lkdGgpIHx8IDA7XG4gICAgICBjb25zdCBudW0gPSBjb2x1bW5zID4gMCA/IE1hdGgubWluKGJsb2NrLmNoaWxkcmVuLmxlbmd0aCwgY29sdW1ucykgOiBibG9jay5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICBpZiAobnVtID4gMCkge1xuICAgICAgICBjb25zdCBjaGlsZFdpZHRoID0gKHdpZHRoIC0gbnVtICogcGFkZGluZyAtIHBhZGRpbmcpIC8gbnVtO1xuICAgICAgICBsb2cuZGVidWcoXCJhYmM5NSAoZ3Jvd2luZyB0byBmaXQpIHdpZHRoXCIsIGJsb2NrLmlkLCB3aWR0aCwgKF9nID0gYmxvY2suc2l6ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9nLndpZHRoLCBjaGlsZFdpZHRoKTtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBibG9jay5jaGlsZHJlbikge1xuICAgICAgICAgIGlmIChjaGlsZC5zaXplKSB7XG4gICAgICAgICAgICBjaGlsZC5zaXplLndpZHRoID0gY2hpbGRXaWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYmxvY2suc2l6ZSA9IHtcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG4gIGxvZy5kZWJ1ZyhcbiAgICBcInNldEJsb2NrU2l6ZXMgYWJjOTQgKGRvbmUpXCIsXG4gICAgYmxvY2suaWQsXG4gICAgKF9oID0gYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfaC54LFxuICAgIChfaSA9IGJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBibG9jay5zaXplKSA9PSBudWxsID8gdm9pZCAwIDogX2kud2lkdGgsXG4gICAgKF9qID0gYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfai55LFxuICAgIChfayA9IGJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBibG9jay5zaXplKSA9PSBudWxsID8gdm9pZCAwIDogX2suaGVpZ2h0XG4gICk7XG59XG5mdW5jdGlvbiBsYXlvdXRCbG9ja3MoYmxvY2ssIGRiMikge1xuICB2YXIgX2EyLCBfYjIsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2gsIF9pLCBfaiwgX2ssIF9sLCBfbSwgX24sIF9vLCBfcCwgX3E7XG4gIGxvZy5kZWJ1ZyhcbiAgICBgYWJjODUgbGF5b3V0IGJsb2NrcyAoPT5sYXlvdXRCbG9ja3MpICR7YmxvY2suaWR9IHg6ICR7KF9hMiA9IGJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBibG9jay5zaXplKSA9PSBudWxsID8gdm9pZCAwIDogX2EyLnh9IHk6ICR7KF9iMiA9IGJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBibG9jay5zaXplKSA9PSBudWxsID8gdm9pZCAwIDogX2IyLnl9IHdpZHRoOiAkeyhfYyA9IGJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBibG9jay5zaXplKSA9PSBudWxsID8gdm9pZCAwIDogX2Mud2lkdGh9YFxuICApO1xuICBjb25zdCBjb2x1bW5zID0gYmxvY2suY29sdW1ucyB8fCAtMTtcbiAgbG9nLmRlYnVnKFwibGF5b3V0QmxvY2tzIGNvbHVtbnMgYWJjOTVcIiwgYmxvY2suaWQsIFwiPT5cIiwgY29sdW1ucywgYmxvY2spO1xuICBpZiAoYmxvY2suY2hpbGRyZW4gJiYgLy8gZmluZCBtYXggd2lkdGggb2YgY2hpbGRyZW5cbiAgYmxvY2suY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHdpZHRoID0gKChfZSA9IChfZCA9IGJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBibG9jay5jaGlsZHJlblswXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9kLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfZS53aWR0aCkgfHwgMDtcbiAgICBjb25zdCB3aWR0aE9mQ2hpbGRyZW4gPSBibG9jay5jaGlsZHJlbi5sZW5ndGggKiB3aWR0aCArIChibG9jay5jaGlsZHJlbi5sZW5ndGggLSAxKSAqIHBhZGRpbmc7XG4gICAgbG9nLmRlYnVnKFwid2lkdGhPZkNoaWxkcmVuIDg4XCIsIHdpZHRoT2ZDaGlsZHJlbiwgXCJwb3NYXCIpO1xuICAgIGxldCBjb2x1bW5Qb3MgPSAwO1xuICAgIGxvZy5kZWJ1ZyhcImFiYzkxIGJsb2NrPy5zaXplPy54XCIsIGJsb2NrLmlkLCAoX2YgPSBibG9jayA9PSBudWxsID8gdm9pZCAwIDogYmxvY2suc2l6ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9mLngpO1xuICAgIGxldCBzdGFydGluZ1Bvc1ggPSAoKF9nID0gYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfZy54KSA/ICgoX2ggPSBibG9jayA9PSBudWxsID8gdm9pZCAwIDogYmxvY2suc2l6ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9oLngpICsgKC0oKF9pID0gYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfaS53aWR0aCkgLyAyIHx8IDApIDogLXBhZGRpbmc7XG4gICAgbGV0IHJvd1BvcyA9IDA7XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBibG9jay5jaGlsZHJlbikge1xuICAgICAgY29uc3QgcGFyZW50ID0gYmxvY2s7XG4gICAgICBpZiAoIWNoaWxkLnNpemUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCB7IHdpZHRoOiB3aWR0aDIsIGhlaWdodCB9ID0gY2hpbGQuc2l6ZTtcbiAgICAgIGNvbnN0IHsgcHgsIHB5IH0gPSBjYWxjdWxhdGVCbG9ja1Bvc2l0aW9uKGNvbHVtbnMsIGNvbHVtblBvcyk7XG4gICAgICBpZiAocHkgIT0gcm93UG9zKSB7XG4gICAgICAgIHJvd1BvcyA9IHB5O1xuICAgICAgICBzdGFydGluZ1Bvc1ggPSAoKF9qID0gYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfai54KSA/ICgoX2sgPSBibG9jayA9PSBudWxsID8gdm9pZCAwIDogYmxvY2suc2l6ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9rLngpICsgKC0oKF9sID0gYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfbC53aWR0aCkgLyAyIHx8IDApIDogLXBhZGRpbmc7XG4gICAgICAgIGxvZy5kZWJ1ZyhcIk5ldyByb3cgaW4gbGF5b3V0IGZvciBibG9ja1wiLCBibG9jay5pZCwgXCIgYW5kIGNoaWxkIFwiLCBjaGlsZC5pZCwgcm93UG9zKTtcbiAgICAgIH1cbiAgICAgIGxvZy5kZWJ1ZyhcbiAgICAgICAgYGFiYzg5IGxheW91dCBibG9ja3MgKGNoaWxkKSBpZDogJHtjaGlsZC5pZH0gUG9zOiAke2NvbHVtblBvc30gKHB4LCBweSkgJHtweH0sJHtweX0gKCR7KF9tID0gcGFyZW50ID09IG51bGwgPyB2b2lkIDAgOiBwYXJlbnQuc2l6ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9tLnh9LCR7KF9uID0gcGFyZW50ID09IG51bGwgPyB2b2lkIDAgOiBwYXJlbnQuc2l6ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9uLnl9KSBwYXJlbnQ6ICR7cGFyZW50LmlkfSB3aWR0aDogJHt3aWR0aDJ9JHtwYWRkaW5nfWBcbiAgICAgICk7XG4gICAgICBpZiAocGFyZW50LnNpemUpIHtcbiAgICAgICAgY29uc3QgaGFsZldpZHRoID0gd2lkdGgyIC8gMjtcbiAgICAgICAgY2hpbGQuc2l6ZS54ID0gc3RhcnRpbmdQb3NYICsgcGFkZGluZyArIGhhbGZXaWR0aDtcbiAgICAgICAgbG9nLmRlYnVnKFxuICAgICAgICAgIGBhYmM5MSBsYXlvdXQgYmxvY2tzIChjYWxjKSBweCwgcHlpZDoke2NoaWxkLmlkfSBzdGFydGluZ1Bvcz1YJHtzdGFydGluZ1Bvc1h9IG5ldyBzdGFydGluZ1Bvc1gke2NoaWxkLnNpemUueH0gJHtoYWxmV2lkdGh9IHBhZGRpbmc9JHtwYWRkaW5nfSB3aWR0aD0ke3dpZHRoMn0gaGFsZldpZHRoPSR7aGFsZldpZHRofSA9PiB4OiR7Y2hpbGQuc2l6ZS54fSB5OiR7Y2hpbGQuc2l6ZS55fSAke2NoaWxkLndpZHRoSW5Db2x1bW5zfSAod2lkdGggKiAoY2hpbGQ/LncgfHwgMSkpIC8gMiAke3dpZHRoMiAqICgoY2hpbGQgPT0gbnVsbCA/IHZvaWQgMCA6IGNoaWxkLndpZHRoSW5Db2x1bW5zKSB8fCAxKSAvIDJ9YFxuICAgICAgICApO1xuICAgICAgICBzdGFydGluZ1Bvc1ggPSBjaGlsZC5zaXplLnggKyBoYWxmV2lkdGg7XG4gICAgICAgIGNoaWxkLnNpemUueSA9IHBhcmVudC5zaXplLnkgLSBwYXJlbnQuc2l6ZS5oZWlnaHQgLyAyICsgcHkgKiAoaGVpZ2h0ICsgcGFkZGluZykgKyBoZWlnaHQgLyAyICsgcGFkZGluZztcbiAgICAgICAgbG9nLmRlYnVnKFxuICAgICAgICAgIGBhYmM4OCBsYXlvdXQgYmxvY2tzIChjYWxjKSBweCwgcHlpZDoke2NoaWxkLmlkfXN0YXJ0aW5nUG9zWCR7c3RhcnRpbmdQb3NYfSR7cGFkZGluZ30ke2hhbGZXaWR0aH09Png6JHtjaGlsZC5zaXplLnh9eToke2NoaWxkLnNpemUueX0ke2NoaWxkLndpZHRoSW5Db2x1bW5zfSh3aWR0aCAqIChjaGlsZD8udyB8fCAxKSkgLyAyJHt3aWR0aDIgKiAoKGNoaWxkID09IG51bGwgPyB2b2lkIDAgOiBjaGlsZC53aWR0aEluQ29sdW1ucykgfHwgMSkgLyAyfWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZC5jaGlsZHJlbikge1xuICAgICAgICBsYXlvdXRCbG9ja3MoY2hpbGQpO1xuICAgICAgfVxuICAgICAgY29sdW1uUG9zICs9IChjaGlsZCA9PSBudWxsID8gdm9pZCAwIDogY2hpbGQud2lkdGhJbkNvbHVtbnMpIHx8IDE7XG4gICAgICBsb2cuZGVidWcoXCJhYmM4OCBjb2x1bW5zUG9zXCIsIGNoaWxkLCBjb2x1bW5Qb3MpO1xuICAgIH1cbiAgfVxuICBsb2cuZGVidWcoXG4gICAgYGxheW91dCBibG9ja3MgKDw9PWxheW91dEJsb2NrcykgJHtibG9jay5pZH0geDogJHsoX28gPSBibG9jayA9PSBudWxsID8gdm9pZCAwIDogYmxvY2suc2l6ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9vLnh9IHk6ICR7KF9wID0gYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfcC55fSB3aWR0aDogJHsoX3EgPSBibG9jayA9PSBudWxsID8gdm9pZCAwIDogYmxvY2suc2l6ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9xLndpZHRofWBcbiAgKTtcbn1cbmZ1bmN0aW9uIGZpbmRCb3VuZHMoYmxvY2ssIHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSB9ID0geyBtaW5YOiAwLCBtaW5ZOiAwLCBtYXhYOiAwLCBtYXhZOiAwIH0pIHtcbiAgaWYgKGJsb2NrLnNpemUgJiYgYmxvY2suaWQgIT09IFwicm9vdFwiKSB7XG4gICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBibG9jay5zaXplO1xuICAgIGlmICh4IC0gd2lkdGggLyAyIDwgbWluWCkge1xuICAgICAgbWluWCA9IHggLSB3aWR0aCAvIDI7XG4gICAgfVxuICAgIGlmICh5IC0gaGVpZ2h0IC8gMiA8IG1pblkpIHtcbiAgICAgIG1pblkgPSB5IC0gaGVpZ2h0IC8gMjtcbiAgICB9XG4gICAgaWYgKHggKyB3aWR0aCAvIDIgPiBtYXhYKSB7XG4gICAgICBtYXhYID0geCArIHdpZHRoIC8gMjtcbiAgICB9XG4gICAgaWYgKHkgKyBoZWlnaHQgLyAyID4gbWF4WSkge1xuICAgICAgbWF4WSA9IHkgKyBoZWlnaHQgLyAyO1xuICAgIH1cbiAgfVxuICBpZiAoYmxvY2suY2hpbGRyZW4pIHtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGJsb2NrLmNoaWxkcmVuKSB7XG4gICAgICAoeyBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZIH0gPSBmaW5kQm91bmRzKGNoaWxkLCB7IG1pblgsIG1pblksIG1heFgsIG1heFkgfSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZIH07XG59XG5mdW5jdGlvbiBsYXlvdXQoZGIyKSB7XG4gIGNvbnN0IHJvb3QgPSBkYjIuZ2V0QmxvY2soXCJyb290XCIpO1xuICBpZiAoIXJvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgc2V0QmxvY2tTaXplcyhyb290LCBkYjIsIDAsIDApO1xuICBsYXlvdXRCbG9ja3Mocm9vdCk7XG4gIGxvZy5kZWJ1ZyhcImdldEJsb2Nrc1wiLCBKU09OLnN0cmluZ2lmeShyb290LCBudWxsLCAyKSk7XG4gIGNvbnN0IHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSB9ID0gZmluZEJvdW5kcyhyb290KTtcbiAgY29uc3QgaGVpZ2h0ID0gbWF4WSAtIG1pblk7XG4gIGNvbnN0IHdpZHRoID0gbWF4WCAtIG1pblg7XG4gIHJldHVybiB7IHg6IG1pblgsIHk6IG1pblksIHdpZHRoLCBoZWlnaHQgfTtcbn1cbmNvbnN0IGdldENsYXNzZXMgPSBmdW5jdGlvbih0ZXh0LCBkaWFnT2JqKSB7XG4gIHJldHVybiBkaWFnT2JqLmRiLmdldENsYXNzZXMoKTtcbn07XG5jb25zdCBkcmF3ID0gYXN5bmMgZnVuY3Rpb24odGV4dCwgaWQsIF92ZXJzaW9uLCBkaWFnT2JqKSB7XG4gIGNvbnN0IHsgc2VjdXJpdHlMZXZlbCwgYmxvY2s6IGNvbmYgfSA9IGdldENvbmZpZyQxKCk7XG4gIGNvbnN0IGRiMiA9IGRpYWdPYmouZGI7XG4gIGxldCBzYW5kYm94RWxlbWVudDtcbiAgaWYgKHNlY3VyaXR5TGV2ZWwgPT09IFwic2FuZGJveFwiKSB7XG4gICAgc2FuZGJveEVsZW1lbnQgPSBzZWxlY3QoXCIjaVwiICsgaWQpO1xuICB9XG4gIGNvbnN0IHJvb3QgPSBzZWN1cml0eUxldmVsID09PSBcInNhbmRib3hcIiA/IHNlbGVjdChzYW5kYm94RWxlbWVudC5ub2RlcygpWzBdLmNvbnRlbnREb2N1bWVudC5ib2R5KSA6IHNlbGVjdChcImJvZHlcIik7XG4gIGNvbnN0IHN2ZyA9IHNlY3VyaXR5TGV2ZWwgPT09IFwic2FuZGJveFwiID8gcm9vdC5zZWxlY3QoYFtpZD1cIiR7aWR9XCJdYCkgOiBzZWxlY3QoYFtpZD1cIiR7aWR9XCJdYCk7XG4gIGNvbnN0IG1hcmtlcnMgPSBbXCJwb2ludFwiLCBcImNpcmNsZVwiLCBcImNyb3NzXCJdO1xuICBpbnNlcnRNYXJrZXJzKHN2ZywgbWFya2VycywgZGlhZ09iai50eXBlLCBpZCk7XG4gIGNvbnN0IGJsID0gZGIyLmdldEJsb2NrcygpO1xuICBjb25zdCBibEFyciA9IGRiMi5nZXRCbG9ja3NGbGF0KCk7XG4gIGNvbnN0IGVkZ2VzID0gZGIyLmdldEVkZ2VzKCk7XG4gIGNvbnN0IG5vZGVzID0gc3ZnLmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiYmxvY2tcIik7XG4gIGF3YWl0IGNhbGN1bGF0ZUJsb2NrU2l6ZXMobm9kZXMsIGJsLCBkYjIpO1xuICBjb25zdCBib3VuZHMgPSBsYXlvdXQoZGIyKTtcbiAgYXdhaXQgaW5zZXJ0QmxvY2tzKG5vZGVzLCBibCwgZGIyKTtcbiAgYXdhaXQgaW5zZXJ0RWRnZXMobm9kZXMsIGVkZ2VzLCBibEFyciwgZGIyLCBpZCk7XG4gIGlmIChib3VuZHMpIHtcbiAgICBjb25zdCBib3VuZHMyID0gYm91bmRzO1xuICAgIGNvbnN0IG1hZ2ljRmFjdG9yID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCgwLjEyNSAqIChib3VuZHMyLndpZHRoIC8gYm91bmRzMi5oZWlnaHQpKSk7XG4gICAgY29uc3QgaGVpZ2h0ID0gYm91bmRzMi5oZWlnaHQgKyBtYWdpY0ZhY3RvciArIDEwO1xuICAgIGNvbnN0IHdpZHRoID0gYm91bmRzMi53aWR0aCArIDEwO1xuICAgIGNvbnN0IHsgdXNlTWF4V2lkdGggfSA9IGNvbmY7XG4gICAgY29uZmlndXJlU3ZnU2l6ZShzdmcsIGhlaWdodCwgd2lkdGgsICEhdXNlTWF4V2lkdGgpO1xuICAgIGxvZy5kZWJ1ZyhcIkhlcmUgQm91bmRzXCIsIGJvdW5kcywgYm91bmRzMik7XG4gICAgc3ZnLmF0dHIoXG4gICAgICBcInZpZXdCb3hcIixcbiAgICAgIGAke2JvdW5kczIueCAtIDV9ICR7Ym91bmRzMi55IC0gNX0gJHtib3VuZHMyLndpZHRoICsgMTB9ICR7Ym91bmRzMi5oZWlnaHQgKyAxMH1gXG4gICAgKTtcbiAgfVxuICBzY2FsZU9yZGluYWwoc2NoZW1lVGFibGVhdTEwKTtcbn07XG5jb25zdCByZW5kZXJlciA9IHtcbiAgZHJhdyxcbiAgZ2V0Q2xhc3Nlc1xufTtcbmNvbnN0IGRpYWdyYW0gPSB7XG4gIHBhcnNlcjogcGFyc2VyJDEsXG4gIGRiOiBkYiQxLFxuICByZW5kZXJlcixcbiAgc3R5bGVzOiBmbG93U3R5bGVzXG59O1xuZXhwb3J0IHtcbiAgZGlhZ3JhbVxufTtcbiJdLCJuYW1lcyI6WyJnZXRDb25maWciLCJjb21tb24iLCJjbG9uZSIsImxvZyIsImNsZWFyJDEiLCJnZXRDb25maWckMSIsImNoYW5uZWwiLCJraHJvbWEuY2hhbm5lbCIsImtocm9tYS5yZ2JhIiwiZ2V0U3R5bGVzRnJvbUFycmF5IiwiaW5zZXJ0Tm9kZSIsInBvc2l0aW9uTm9kZSIsImdyYXBobGliLkdyYXBoIiwiaW5zZXJ0RWRnZSIsImluc2VydEVkZ2VMYWJlbCIsInBvc2l0aW9uRWRnZUxhYmVsIiwic2VsZWN0IiwiaW5zZXJ0TWFya2VycyIsImNvbmZpZ3VyZVN2Z1NpemUiLCJzY2FsZU9yZGluYWwiLCJzY2hlbWVUYWJsZWF1MTAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFpQlgsSUFBSSxNQUFNLEdBQUcsV0FBVztBQUN4QixFQUFFLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUN2RCxNQUFNLENBQUM7QUFDUCxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2QsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDeFYsRUFBRSxJQUFJLE9BQU8sR0FBRztBQUNoQixJQUFJLEtBQUssRUFBRSxTQUFTLEtBQUssR0FBRztBQUM1QixLQUFLO0FBQ0wsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNWLElBQUksUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7QUFDbjJCLElBQUksVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLG9CQUFvQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLEVBQUUsdUJBQXVCLEVBQUU7QUFDemlCLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FB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LEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0QsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDdEQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyRixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDOUQsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkMsVUFBVSxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDMUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDdkYsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekksVUFBVSxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN4RSxVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUc7QUFDbkIsWUFBWSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRTtBQUNwSCxZQUFZLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUU7QUFDck4sWUFBWSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsRUFB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RSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDMUgsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDL0YsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFLENBQUM7QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUNuRixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUM1RixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUM1RixVQUFVLE1BQU07QUFDaEIsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxF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QVEsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakUsUUFBUSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2RSxRQUFRLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDOUIsVUFBVSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzVDLFNBQVM7QUFDVCxRQUFRLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2xDLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRztBQUN0QixVQUFVLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVU7QUFDNUMsVUFBVSxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO0FBQ3RDLFVBQVUsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWTtBQUNoRCxVQUFVLFdBQVcsRUFBRSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHO0FBQ3JNLFNBQVMsQ0FBQztBQUNWLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNqQyxVQUFVLElBQUksQ0FBQyxN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T0FBTywyQkFBMkIsQ0FBQztBQUMvQyxVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxZQUFZLE9BQU8sV0FBVyxDQUFDO0FBQy9CLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxZQUFZLE9BQU8sV0FBVyxDQUFDO0FBQy9CLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxZQUFZLE9BQU8sV0FBVyxDQUFDO0FBQy9CLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxZQUFZLE9BQU8sV0FBVyxDQUFDO0FBQy9CLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxZQUFZLE9BQU8sV0FBVyxDQUFDO0FBQy9CLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxZQUFZLE9BQU8sV0FBVyxDQUFDO0FBQy9CLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxZQUFZLE9BQU8sV0FBVyxDQUFDO0FBQy9CLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxZQUFZLE9BQU8sV0FBVyxDQUFDO0FBQy9CLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxZQUFZLE9BQU8sV0FBVyxDQUFDO0FBQy9CLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzQyxZQUFZLE9BQU8sV0FBVyxDQUFDO0FBQy9CLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxZQUFZLE9BQU8sV0FBVyxDQUFDO0FBQy9CLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxZQUFZLE9BQU8sV0FBVyxDQUFDO0FBQy9CLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxZQUFZLE9BQU8sV0FBVyxDQUFDO0FBQy9CLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxZQUFZLE9BQU8sV0FBVyxDQUFDO0FBQy9CLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzQyxZQUFZLE9BQU8sV0FBVyxDQUFDO0FBQy9CLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxZQUFZLE9BQU8sV0FBVyxDQUFDO0FBQy9CLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzQyxZQUFZLE9BQU8sV0FBVyxDQUFDO0FBQy9CLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM3QyxZQUFZLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkMsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLEVB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LEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRTtBQUMzdUMsS0FBSyxDQUFDO0FBQ04sSUFBSSxPQUFPLE1BQU0sQ0FBQztBQUNsQixHQUFHLEVBQUUsQ0FBQztBQUNOLEVBQUUsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDeEIsRUFBRSxTQUFTLE1BQU0sR0FBRztBQUNwQixJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLEdBQUc7QUFDSCxFQUFFLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO0FBQzdCLEVBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7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LEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU07QUFDM0UsR0FBRyxDQUFDO0FBQ0osQ0FBQztBQUNELFNBQVMsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7QUFDbEMsRUFBRSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDM0UsRUFBRUEsV0FBRyxDQUFDLEtBQUs7QUFDWCxJQUFJLENBQUMscUNBQXFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdSLEdBQUcsQ0FBQztBQUNKLEVBQUUsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN0QyxFQUFFQSxXQUFHLENBQUMs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QUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BSLEdBQUcsQ0FBQztBQUNKLENBQUM7QUFDRCxTQUFTLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRyxFQUFFLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBRTtBQUN6QyxJQUFJLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQy9DLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUU7QUFDOUIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDM0IsS0FBSztBQUNMLElBQUksSUFBSSxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUU7QUFDL0IsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDNUIsS0FBSztBQUNMLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUU7QUFDOUIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDM0IsS0FBSztBQUNMLElBQUksSUFBSSxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUU7QUFDL0IsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDNUIs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
