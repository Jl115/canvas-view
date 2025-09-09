'use strict';

var index = require('./index-deb671d6.js');
var clone = require('./clone-eca71c22.js');
var edgesE0da2a9e = require('./edges-e0da2a9e-dacae5bc.js');
var graph = require('./graph-4ff464ab.js');
require('./main-5c8f274d.js');
var ordinal = require('./ordinal-457f9936.js');
var Tableau10 = require('./Tableau10-2d909d9e.js');
var channel = require('./channel-41a23379.js');
require('./createText-2e5e7dd3-781a22a4.js');
require('./line-891b5b35.js');
require('./array-aca279a4.js');
require('./path-29c5310d.js');
require('obsidian');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tEaWFncmFtLTM4YWI0ZmRiLTJkOTllNzY4LmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvbWVybWFpZC9kaXN0L2Jsb2NrRGlhZ3JhbS0zOGFiNGZkYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX2EsIF9iO1xuaW1wb3J0IHsgYyBhcyBnZXRDb25maWcsIEYgYXMgZ2V0Q29uZmlnJDEsIGwgYXMgbG9nLCB2IGFzIGNsZWFyJDEsIGUgYXMgY29tbW9uLCBrIGFzIGdldFN0eWxlc0Zyb21BcnJheSwgaSBhcyBjb25maWd1cmVTdmdTaXplIH0gZnJvbSBcIi4vbWVybWFpZC1iNTg2MGI1NC5qc1wiO1xuaW1wb3J0IGNsb25lIGZyb20gXCJsb2Rhc2gtZXMvY2xvbmUuanNcIjtcbmltcG9ydCAqIGFzIGtocm9tYSBmcm9tIFwia2hyb21hXCI7XG5pbXBvcnQgeyBoIGFzIGluc2VydEVkZ2UsIGYgYXMgaW5zZXJ0RWRnZUxhYmVsLCBqIGFzIHBvc2l0aW9uRWRnZUxhYmVsLCBlIGFzIGluc2VydE5vZGUsIHAgYXMgcG9zaXRpb25Ob2RlLCBhIGFzIGluc2VydE1hcmtlcnMgfSBmcm9tIFwiLi9lZGdlcy1lMGRhMmE5ZS5qc1wiO1xuaW1wb3J0ICogYXMgZ3JhcGhsaWIgZnJvbSBcImRhZ3JlLWQzLWVzL3NyYy9ncmFwaGxpYi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgc2VsZWN0LCBzY2FsZU9yZGluYWwsIHNjaGVtZVRhYmxlYXUxMCB9IGZyb20gXCJkM1wiO1xuaW1wb3J0IFwidHMtZGVkZW50XCI7XG5pbXBvcnQgXCJkYXlqc1wiO1xuaW1wb3J0IFwiQGJyYWludHJlZS9zYW5pdGl6ZS11cmxcIjtcbmltcG9ydCBcImRvbXB1cmlmeVwiO1xuaW1wb3J0IFwibG9kYXNoLWVzL21lbW9pemUuanNcIjtcbmltcG9ydCBcImxvZGFzaC1lcy9tZXJnZS5qc1wiO1xuaW1wb3J0IFwic3R5bGlzXCI7XG5pbXBvcnQgXCJsb2Rhc2gtZXMvaXNFbXB0eS5qc1wiO1xuaW1wb3J0IFwiLi9jcmVhdGVUZXh0LTJlNWU3ZGQzLmpzXCI7XG5pbXBvcnQgXCJtZGFzdC11dGlsLWZyb20tbWFya2Rvd25cIjtcbnZhciBwYXJzZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG8gPSBmdW5jdGlvbihrLCB2LCBvMiwgbCkge1xuICAgIGZvciAobzIgPSBvMiB8fCB7fSwgbCA9IGsubGVuZ3RoOyBsLS07IG8yW2tbbF1dID0gdilcbiAgICAgIDtcbiAgICByZXR1cm4gbzI7XG4gIH0sICRWMCA9IFsxLCA3XSwgJFYxID0gWzEsIDEzXSwgJFYyID0gWzEsIDE0XSwgJFYzID0gWzEsIDE1XSwgJFY0ID0gWzEsIDE5XSwgJFY1ID0gWzEsIDE2XSwgJFY2ID0gWzEsIDE3XSwgJFY3ID0gWzEsIDE4XSwgJFY4ID0gWzgsIDMwXSwgJFY5ID0gWzgsIDIxLCAyOCwgMjksIDMwLCAzMSwgMzIsIDQwLCA0NCwgNDddLCAkVmEgPSBbMSwgMjNdLCAkVmIgPSBbMSwgMjRdLCAkVmMgPSBbOCwgMTUsIDE2LCAyMSwgMjgsIDI5LCAzMCwgMzEsIDMyLCA0MCwgNDQsIDQ3XSwgJFZkID0gWzgsIDE1LCAxNiwgMjEsIDI3LCAyOCwgMjksIDMwLCAzMSwgMzIsIDQwLCA0NCwgNDddLCAkVmUgPSBbMSwgNDldO1xuICB2YXIgcGFyc2VyMiA9IHtcbiAgICB0cmFjZTogZnVuY3Rpb24gdHJhY2UoKSB7XG4gICAgfSxcbiAgICB5eToge30sXG4gICAgc3ltYm9sc186IHsgXCJlcnJvclwiOiAyLCBcInNwYWNlTGluZXNcIjogMywgXCJTUEFDRUxJTkVcIjogNCwgXCJOTFwiOiA1LCBcInNlcGFyYXRvclwiOiA2LCBcIlNQQUNFXCI6IDcsIFwiRU9GXCI6IDgsIFwic3RhcnRcIjogOSwgXCJCTE9DS19ESUFHUkFNX0tFWVwiOiAxMCwgXCJkb2N1bWVudFwiOiAxMSwgXCJzdG9wXCI6IDEyLCBcInN0YXRlbWVudFwiOiAxMywgXCJsaW5rXCI6IDE0LCBcIkxJTktcIjogMTUsIFwiU1RBUlRfTElOS1wiOiAxNiwgXCJMSU5LX0xBQkVMXCI6IDE3LCBcIlNUUlwiOiAxOCwgXCJub2RlU3RhdGVtZW50XCI6IDE5LCBcImNvbHVtbnNTdGF0ZW1lbnRcIjogMjAsIFwiU1BBQ0VfQkxPQ0tcIjogMjEsIFwiYmxvY2tTdGF0ZW1lbnRcIjogMjIsIFwiY2xhc3NEZWZTdGF0ZW1lbnRcIjogMjMsIFwiY3NzQ2xhc3NTdGF0ZW1lbnRcIjogMjQsIFwic3R5bGVTdGF0ZW1lbnRcIjogMjUsIFwibm9kZVwiOiAyNiwgXCJTSVpFXCI6IDI3LCBcIkNPTFVNTlNcIjogMjgsIFwiaWQtYmxvY2tcIjogMjksIFwiZW5kXCI6IDMwLCBcImJsb2NrXCI6IDMxLCBcIk5PREVfSURcIjogMzIsIFwibm9kZVNoYXBlTkxhYmVsXCI6IDMzLCBcImRpckxpc3RcIjogMzQsIFwiRElSXCI6IDM1LCBcIk5PREVfRFNUQVJUXCI6IDM2LCBcIk5PREVfREVORFwiOiAzNywgXCJCTE9DS19BUlJPV19TVEFSVFwiOiAzOCwgXCJCTE9DS19BUlJPV19FTkRcIjogMzksIFwiY2xhc3NEZWZcIjogNDAsIFwiQ0xBU1NERUZfSURcIjogNDEsIFwiQ0xBU1NERUZfU1RZTEVPUFRTXCI6IDQyLCBcIkRFRkFVTFRcIjogNDMsIFwiY2xhc3NcIjogNDQsIFwiQ0xBU1NFTlRJVFlfSURTXCI6IDQ1LCBcIlNUWUxFQ0xBU1NcIjogNDYsIFwic3R5bGVcIjogNDcsIFwiU1RZTEVfRU5USVRZX0lEU1wiOiA0OCwgXCJTVFlMRV9ERUZJTklUSU9OX0RBVEFcIjogNDksIFwiJGFjY2VwdFwiOiAwLCBcIiRlbmRcIjogMSB9LFxuICAgIHRlcm1pbmFsc186IHsgMjogXCJlcnJvclwiLCA0OiBcIlNQQUNFTElORVwiLCA1OiBcIk5MXCIsIDc6IFwiU1BBQ0VcIiwgODogXCJFT0ZcIiwgMTA6IFwiQkxPQ0tfRElBR1JBTV9LRVlcIiwgMTU6IFwiTElOS1wiLCAxNjogXCJTVEFSVF9MSU5LXCIsIDE3OiBcIkxJTktfTEFCRUxcIiwgMTg6IFwiU1RSXCIsIDIxOiBcIlNQQUNFX0JMT0NLXCIsIDI3OiBcIlNJWkVcIiwgMjg6IFwiQ09MVU1OU1wiLCAyOTogXCJpZC1ibG9ja1wiLCAzMDogXCJlbmRcIiwgMzE6IFwiYmxvY2tcIiwgMzI6IFwiTk9ERV9JRFwiLCAzNTogXCJESVJcIiwgMzY6IFwiTk9ERV9EU1RBUlRcIiwgMzc6IFwiTk9ERV9ERU5EXCIsIDM4OiBcIkJMT0NLX0FSUk9XX1NUQVJUXCIsIDM5OiBcIkJMT0NLX0FSUk9XX0VORFwiLCA0MDogXCJjbGFzc0RlZlwiLCA0MTogXCJDTEFTU0RFRl9JRFwiLCA0MjogXCJDTEFTU0RFRl9TVFlMRU9QVFNcIiwgNDM6IFwiREVGQVVMVFwiLCA0NDogXCJjbGFzc1wiLCA0NTogXCJDTEFTU0VOVElUWV9JRFNcIiwgNDY6IFwiU1RZTEVDTEFTU1wiLCA0NzogXCJzdHlsZVwiLCA0ODogXCJTVFlMRV9FTlRJVFlfSURTXCIsIDQ5OiBcIlNUWUxFX0RFRklOSVRJT05fREFUQVwiIH0sXG4gICAgcHJvZHVjdGlvbnNfOiBbMCwgWzMsIDFdLCBbMywgMl0sIFszLCAyXSwgWzYsIDFdLCBbNiwgMV0sIFs2LCAxXSwgWzksIDNdLCBbMTIsIDFdLCBbMTIsIDFdLCBbMTIsIDJdLCBbMTIsIDJdLCBbMTEsIDFdLCBbMTEsIDJdLCBbMTQsIDFdLCBbMTQsIDRdLCBbMTMsIDFdLCBbMTMsIDFdLCBbMTMsIDFdLCBbMTMsIDFdLCBbMTMsIDFdLCBbMTMsIDFdLCBbMTMsIDFdLCBbMTksIDNdLCBbMTksIDJdLCBbMTksIDFdLCBbMjAsIDFdLCBbMjIsIDRdLCBbMjIsIDNdLCBbMjYsIDFdLCBbMjYsIDJdLCBbMzQsIDFdLCBbMzQsIDJdLCBbMzMsIDNdLCBbMzMsIDRdLCBbMjMsIDNdLCBbMjMsIDNdLCBbMjQsIDNdLCBbMjUsIDNdXSxcbiAgICBwZXJmb3JtQWN0aW9uOiBmdW5jdGlvbiBhbm9ueW1vdXMoeXl0ZXh0LCB5eWxlbmcsIHl5bGluZW5vLCB5eSwgeXlzdGF0ZSwgJCQsIF8kKSB7XG4gICAgICB2YXIgJDAgPSAkJC5sZW5ndGggLSAxO1xuICAgICAgc3dpdGNoICh5eXN0YXRlKSB7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlJ1bGU6IHNlcGFyYXRvciAoTkwpIFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogc2VwYXJhdG9yIChTcGFjZSkgXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBzZXBhcmF0b3IgKEVPRikgXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBoaWVyYXJjaHk6IFwiLCAkJFskMCAtIDFdKTtcbiAgICAgICAgICB5eS5zZXRIaWVyYXJjaHkoJCRbJDAgLSAxXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlN0b3AgTkwgXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJTdG9wIEVPRiBcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJTdG9wIE5MMiBcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJTdG9wIEVPRjIgXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogc3RhdGVtZW50OiBcIiwgJCRbJDBdKTtcbiAgICAgICAgICB0eXBlb2YgJCRbJDBdLmxlbmd0aCA9PT0gXCJudW1iZXJcIiA/IHRoaXMuJCA9ICQkWyQwXSA6IHRoaXMuJCA9IFskJFskMF1dO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogc3RhdGVtZW50ICMyOiBcIiwgJCRbJDAgLSAxXSk7XG4gICAgICAgICAgdGhpcy4kID0gWyQkWyQwIC0gMV1dLmNvbmNhdCgkJFskMF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogbGluazogXCIsICQkWyQwXSwgeXl0ZXh0KTtcbiAgICAgICAgICB0aGlzLiQgPSB7IGVkZ2VUeXBlU3RyOiAkJFskMF0sIGxhYmVsOiBcIlwiIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBMQUJFTCBsaW5rOiBcIiwgJCRbJDAgLSAzXSwgJCRbJDAgLSAxXSwgJCRbJDBdKTtcbiAgICAgICAgICB0aGlzLiQgPSB7IGVkZ2VUeXBlU3RyOiAkJFskMF0sIGxhYmVsOiAkJFskMCAtIDFdIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQoJCRbJDBdKTtcbiAgICAgICAgICBjb25zdCBzcGFjZUlkID0geXkuZ2VuZXJhdGVJZCgpO1xuICAgICAgICAgIHRoaXMuJCA9IHsgaWQ6IHNwYWNlSWQsIHR5cGU6IFwic3BhY2VcIiwgbGFiZWw6IFwiXCIsIHdpZHRoOiBudW0sIGNoaWxkcmVuOiBbXSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogKG5vZGVTdGF0ZW1lbnQgbGluayBub2RlKSBcIiwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdLCBcIiB0eXBlc3RyOiBcIiwgJCRbJDAgLSAxXS5lZGdlVHlwZVN0cik7XG4gICAgICAgICAgY29uc3QgZWRnZURhdGEgPSB5eS5lZGdlU3RyVG9FZGdlRGF0YSgkJFskMCAtIDFdLmVkZ2VUeXBlU3RyKTtcbiAgICAgICAgICB0aGlzLiQgPSBbXG4gICAgICAgICAgICB7IGlkOiAkJFskMCAtIDJdLmlkLCBsYWJlbDogJCRbJDAgLSAyXS5sYWJlbCwgdHlwZTogJCRbJDAgLSAyXS50eXBlLCBkaXJlY3Rpb25zOiAkJFskMCAtIDJdLmRpcmVjdGlvbnMgfSxcbiAgICAgICAgICAgIHsgaWQ6ICQkWyQwIC0gMl0uaWQgKyBcIi1cIiArICQkWyQwXS5pZCwgc3RhcnQ6ICQkWyQwIC0gMl0uaWQsIGVuZDogJCRbJDBdLmlkLCBsYWJlbDogJCRbJDAgLSAxXS5sYWJlbCwgdHlwZTogXCJlZGdlXCIsIGRpcmVjdGlvbnM6ICQkWyQwXS5kaXJlY3Rpb25zLCBhcnJvd1R5cGVFbmQ6IGVkZ2VEYXRhLCBhcnJvd1R5cGVTdGFydDogXCJhcnJvd19vcGVuXCIgfSxcbiAgICAgICAgICAgIHsgaWQ6ICQkWyQwXS5pZCwgbGFiZWw6ICQkWyQwXS5sYWJlbCwgdHlwZTogeXkudHlwZVN0cjJUeXBlKCQkWyQwXS50eXBlU3RyKSwgZGlyZWN0aW9uczogJCRbJDBdLmRpcmVjdGlvbnMgfVxuICAgICAgICAgIF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBub2RlU3RhdGVtZW50IChhYmM4OCBub2RlIHNpemUpIFwiLCAkJFskMCAtIDFdLCAkJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9IHsgaWQ6ICQkWyQwIC0gMV0uaWQsIGxhYmVsOiAkJFskMCAtIDFdLmxhYmVsLCB0eXBlOiB5eS50eXBlU3RyMlR5cGUoJCRbJDAgLSAxXS50eXBlU3RyKSwgZGlyZWN0aW9uczogJCRbJDAgLSAxXS5kaXJlY3Rpb25zLCB3aWR0aEluQ29sdW1uczogcGFyc2VJbnQoJCRbJDBdLCAxMCkgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlJ1bGU6IG5vZGVTdGF0ZW1lbnQgKG5vZGUpIFwiLCAkJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9IHsgaWQ6ICQkWyQwXS5pZCwgbGFiZWw6ICQkWyQwXS5sYWJlbCwgdHlwZTogeXkudHlwZVN0cjJUeXBlKCQkWyQwXS50eXBlU3RyKSwgZGlyZWN0aW9uczogJCRbJDBdLmRpcmVjdGlvbnMsIHdpZHRoSW5Db2x1bW5zOiAxIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJBUEExMjNcIiwgdGhpcyA/IHRoaXMgOiBcIm5hXCIpO1xuICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiQ09MVU1OUzogXCIsICQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0geyB0eXBlOiBcImNvbHVtbi1zZXR0aW5nXCIsIGNvbHVtbnM6ICQkWyQwXSA9PT0gXCJhdXRvXCIgPyAtMSA6IHBhcnNlSW50KCQkWyQwXSkgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlJ1bGU6IGlkLWJsb2NrIHN0YXRlbWVudCA6IFwiLCAkJFskMCAtIDJdLCAkJFskMCAtIDFdKTtcbiAgICAgICAgICB5eS5nZW5lcmF0ZUlkKCk7XG4gICAgICAgICAgdGhpcy4kID0geyAuLi4kJFskMCAtIDJdLCB0eXBlOiBcImNvbXBvc2l0ZVwiLCBjaGlsZHJlbjogJCRbJDAgLSAxXSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogYmxvY2tTdGF0ZW1lbnQgOiBcIiwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdKTtcbiAgICAgICAgICBjb25zdCBpZCA9IHl5LmdlbmVyYXRlSWQoKTtcbiAgICAgICAgICB0aGlzLiQgPSB7IGlkLCB0eXBlOiBcImNvbXBvc2l0ZVwiLCBsYWJlbDogXCJcIiwgY2hpbGRyZW46ICQkWyQwIC0gMV0gfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlJ1bGU6IG5vZGUgKE5PREVfSUQgc2VwYXJhdG9yKTogXCIsICQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0geyBpZDogJCRbJDBdIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBub2RlIChOT0RFX0lEIG5vZGVTaGFwZU5MYWJlbCBzZXBhcmF0b3IpOiBcIiwgJCRbJDAgLSAxXSwgJCRbJDBdKTtcbiAgICAgICAgICB0aGlzLiQgPSB7IGlkOiAkJFskMCAtIDFdLCBsYWJlbDogJCRbJDBdLmxhYmVsLCB0eXBlU3RyOiAkJFskMF0udHlwZVN0ciwgZGlyZWN0aW9uczogJCRbJDBdLmRpcmVjdGlvbnMgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlJ1bGU6IGRpckxpc3Q6IFwiLCAkJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9IFskJFskMF1dO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogZGlyTGlzdDogXCIsICQkWyQwIC0gMV0sICQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gWyQkWyQwIC0gMV1dLmNvbmNhdCgkJFskMF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogbm9kZVNoYXBlTkxhYmVsOiBcIiwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdKTtcbiAgICAgICAgICB0aGlzLiQgPSB7IHR5cGVTdHI6ICQkWyQwIC0gMl0gKyAkJFskMF0sIGxhYmVsOiAkJFskMCAtIDFdIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBCTE9DS19BUlJPVyBub2RlU2hhcGVOTGFiZWw6IFwiLCAkJFskMCAtIDNdLCAkJFskMCAtIDJdLCBcIiAjMzpcIiwgJCRbJDAgLSAxXSwgJCRbJDBdKTtcbiAgICAgICAgICB0aGlzLiQgPSB7IHR5cGVTdHI6ICQkWyQwIC0gM10gKyAkJFskMF0sIGxhYmVsOiAkJFskMCAtIDJdLCBkaXJlY3Rpb25zOiAkJFskMCAtIDFdIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzU6XG4gICAgICAgIGNhc2UgMzY6XG4gICAgICAgICAgdGhpcy4kID0geyB0eXBlOiBcImNsYXNzRGVmXCIsIGlkOiAkJFskMCAtIDFdLnRyaW0oKSwgY3NzOiAkJFskMF0udHJpbSgpIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgdGhpcy4kID0geyB0eXBlOiBcImFwcGx5Q2xhc3NcIiwgaWQ6ICQkWyQwIC0gMV0udHJpbSgpLCBzdHlsZUNsYXNzOiAkJFskMF0udHJpbSgpIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgdGhpcy4kID0geyB0eXBlOiBcImFwcGx5U3R5bGVzXCIsIGlkOiAkJFskMCAtIDFdLnRyaW0oKSwgc3R5bGVzU3RyOiAkJFskMF0udHJpbSgpIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcbiAgICB0YWJsZTogW3sgOTogMSwgMTA6IFsxLCAyXSB9LCB7IDE6IFszXSB9LCB7IDExOiAzLCAxMzogNCwgMTk6IDUsIDIwOiA2LCAyMTogJFYwLCAyMjogOCwgMjM6IDksIDI0OiAxMCwgMjU6IDExLCAyNjogMTIsIDI4OiAkVjEsIDI5OiAkVjIsIDMxOiAkVjMsIDMyOiAkVjQsIDQwOiAkVjUsIDQ0OiAkVjYsIDQ3OiAkVjcgfSwgeyA4OiBbMSwgMjBdIH0sIG8oJFY4LCBbMiwgMTJdLCB7IDEzOiA0LCAxOTogNSwgMjA6IDYsIDIyOiA4LCAyMzogOSwgMjQ6IDEwLCAyNTogMTEsIDI2OiAxMiwgMTE6IDIxLCAyMTogJFYwLCAyODogJFYxLCAyOTogJFYyLCAzMTogJFYzLCAzMjogJFY0LCA0MDogJFY1LCA0NDogJFY2LCA0NzogJFY3IH0pLCBvKCRWOSwgWzIsIDE2XSwgeyAxNDogMjIsIDE1OiAkVmEsIDE2OiAkVmIgfSksIG8oJFY5LCBbMiwgMTddKSwgbygkVjksIFsyLCAxOF0pLCBvKCRWOSwgWzIsIDE5XSksIG8oJFY5LCBbMiwgMjBdKSwgbygkVjksIFsyLCAyMV0pLCBvKCRWOSwgWzIsIDIyXSksIG8oJFZjLCBbMiwgMjVdLCB7IDI3OiBbMSwgMjVdIH0pLCBvKCRWOSwgWzIsIDI2XSksIHsgMTk6IDI2LCAyNjogMTIsIDMyOiAkVjQgfSwgeyAxMTogMjcsIDEzOiA0LCAxOTogNSwgMjA6IDYsIDIxOiAkVjAsIDIyOiA4LCAyMzogOSwgMjQ6IDEwLCAyNTogMTEsIDI2OiAxMiwgMjg6ICRWMSwgMjk6ICRWMiwgMzE6ICRWMywgMzI6ICRWNCwgNDA6ICRWNSwgNDQ6ICRWNiwgNDc6ICRWNyB9LCB7IDQxOiBbMSwgMjhdLCA0MzogWzEsIDI5XSB9LCB7IDQ1OiBbMSwgMzBdIH0sIHsgNDg6IFsxLCAzMV0gfSwgbygkVmQsIFsyLCAyOV0sIHsgMzM6IDMyLCAzNjogWzEsIDMzXSwgMzg6IFsxLCAzNF0gfSksIHsgMTogWzIsIDddIH0sIG8oJFY4LCBbMiwgMTNdKSwgeyAyNjogMzUsIDMyOiAkVjQgfSwgeyAzMjogWzIsIDE0XSB9LCB7IDE3OiBbMSwgMzZdIH0sIG8oJFZjLCBbMiwgMjRdKSwgeyAxMTogMzcsIDEzOiA0LCAxNDogMjIsIDE1OiAkVmEsIDE2OiAkVmIsIDE5OiA1LCAyMDogNiwgMjE6ICRWMCwgMjI6IDgsIDIzOiA5LCAyNDogMTAsIDI1OiAxMSwgMjY6IDEyLCAyODogJFYxLCAyOTogJFYyLCAzMTogJFYzLCAzMjogJFY0LCA0MDogJFY1LCA0NDogJFY2LCA0NzogJFY3IH0sIHsgMzA6IFsxLCAzOF0gfSwgeyA0MjogWzEsIDM5XSB9LCB7IDQyOiBbMSwgNDBdIH0sIHsgNDY6IFsxLCA0MV0gfSwgeyA0OTogWzEsIDQyXSB9LCBvKCRWZCwgWzIsIDMwXSksIHsgMTg6IFsxLCA0M10gfSwgeyAxODogWzEsIDQ0XSB9LCBvKCRWYywgWzIsIDIzXSksIHsgMTg6IFsxLCA0NV0gfSwgeyAzMDogWzEsIDQ2XSB9LCBvKCRWOSwgWzIsIDI4XSksIG8oJFY5LCBbMiwgMzVdKSwgbygkVjksIFsyLCAzNl0pLCBvKCRWOSwgWzIsIDM3XSksIG8oJFY5LCBbMiwgMzhdKSwgeyAzNzogWzEsIDQ3XSB9LCB7IDM0OiA0OCwgMzU6ICRWZSB9LCB7IDE1OiBbMSwgNTBdIH0sIG8oJFY5LCBbMiwgMjddKSwgbygkVmQsIFsyLCAzM10pLCB7IDM5OiBbMSwgNTFdIH0sIHsgMzQ6IDUyLCAzNTogJFZlLCAzOTogWzIsIDMxXSB9LCB7IDMyOiBbMiwgMTVdIH0sIG8oJFZkLCBbMiwgMzRdKSwgeyAzOTogWzIsIDMyXSB9XSxcbiAgICBkZWZhdWx0QWN0aW9uczogeyAyMDogWzIsIDddLCAyMzogWzIsIDE0XSwgNTA6IFsyLCAxNV0sIDUyOiBbMiwgMzJdIH0sXG4gICAgcGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcbiAgICAgIGlmIChoYXNoLnJlY292ZXJhYmxlKSB7XG4gICAgICAgIHRoaXMudHJhY2Uoc3RyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihzdHIpO1xuICAgICAgICBlcnJvci5oYXNoID0gaGFzaDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcywgc3RhY2sgPSBbMF0sIHRzdGFjayA9IFtdLCB2c3RhY2sgPSBbbnVsbF0sIGxzdGFjayA9IFtdLCB0YWJsZSA9IHRoaXMudGFibGUsIHl5dGV4dCA9IFwiXCIsIHl5bGluZW5vID0gMCwgeXlsZW5nID0gMCwgVEVSUk9SID0gMiwgRU9GID0gMTtcbiAgICAgIHZhciBhcmdzID0gbHN0YWNrLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHZhciBsZXhlcjIgPSBPYmplY3QuY3JlYXRlKHRoaXMubGV4ZXIpO1xuICAgICAgdmFyIHNoYXJlZFN0YXRlID0geyB5eToge30gfTtcbiAgICAgIGZvciAodmFyIGsgaW4gdGhpcy55eSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMueXksIGspKSB7XG4gICAgICAgICAgc2hhcmVkU3RhdGUueXlba10gPSB0aGlzLnl5W2tdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXhlcjIuc2V0SW5wdXQoaW5wdXQsIHNoYXJlZFN0YXRlLnl5KTtcbiAgICAgIHNoYXJlZFN0YXRlLnl5LmxleGVyID0gbGV4ZXIyO1xuICAgICAgc2hhcmVkU3RhdGUueXkucGFyc2VyID0gdGhpcztcbiAgICAgIGlmICh0eXBlb2YgbGV4ZXIyLnl5bGxvYyA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGxleGVyMi55eWxsb2MgPSB7fTtcbiAgICAgIH1cbiAgICAgIHZhciB5eWxvYyA9IGxleGVyMi55eWxsb2M7XG4gICAgICBsc3RhY2sucHVzaCh5eWxvYyk7XG4gICAgICB2YXIgcmFuZ2VzID0gbGV4ZXIyLm9wdGlvbnMgJiYgbGV4ZXIyLm9wdGlvbnMucmFuZ2VzO1xuICAgICAgaWYgKHR5cGVvZiBzaGFyZWRTdGF0ZS55eS5wYXJzZUVycm9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhpcy5wYXJzZUVycm9yID0gc2hhcmVkU3RhdGUueXkucGFyc2VFcnJvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFyc2VFcnJvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZUVycm9yO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gbGV4KCkge1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHRva2VuID0gdHN0YWNrLnBvcCgpIHx8IGxleGVyMi5sZXgoKSB8fCBFT0Y7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBpZiAodG9rZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgdHN0YWNrID0gdG9rZW47XG4gICAgICAgICAgICB0b2tlbiA9IHRzdGFjay5wb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG9rZW4gPSBzZWxmLnN5bWJvbHNfW3Rva2VuXSB8fCB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICB9XG4gICAgICB2YXIgc3ltYm9sLCBzdGF0ZSwgYWN0aW9uLCByLCB5eXZhbCA9IHt9LCBwLCBsZW4sIG5ld1N0YXRlLCBleHBlY3RlZDtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHN0YXRlID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlXSkge1xuICAgICAgICAgIGFjdGlvbiA9IHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzeW1ib2wgPT09IG51bGwgfHwgdHlwZW9mIHN5bWJvbCA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBzeW1ib2wgPSBsZXgoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWN0aW9uID0gdGFibGVbc3RhdGVdICYmIHRhYmxlW3N0YXRlXVtzeW1ib2xdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSBcInVuZGVmaW5lZFwiIHx8ICFhY3Rpb24ubGVuZ3RoIHx8ICFhY3Rpb25bMF0pIHtcbiAgICAgICAgICB2YXIgZXJyU3RyID0gXCJcIjtcbiAgICAgICAgICBleHBlY3RlZCA9IFtdO1xuICAgICAgICAgIGZvciAocCBpbiB0YWJsZVtzdGF0ZV0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRlcm1pbmFsc19bcF0gJiYgcCA+IFRFUlJPUikge1xuICAgICAgICAgICAgICBleHBlY3RlZC5wdXNoKFwiJ1wiICsgdGhpcy50ZXJtaW5hbHNfW3BdICsgXCInXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobGV4ZXIyLnNob3dQb3NpdGlvbikge1xuICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjpcXG5cIiArIGxleGVyMi5zaG93UG9zaXRpb24oKSArIFwiXFxuRXhwZWN0aW5nIFwiICsgZXhwZWN0ZWQuam9pbihcIiwgXCIpICsgXCIsIGdvdCAnXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJTdHIgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoeXlsaW5lbm8gKyAxKSArIFwiOiBVbmV4cGVjdGVkIFwiICsgKHN5bWJvbCA9PSBFT0YgPyBcImVuZCBvZiBpbnB1dFwiIDogXCInXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wYXJzZUVycm9yKGVyclN0ciwge1xuICAgICAgICAgICAgdGV4dDogbGV4ZXIyLm1hdGNoLFxuICAgICAgICAgICAgdG9rZW46IHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCxcbiAgICAgICAgICAgIGxpbmU6IGxleGVyMi55eWxpbmVubyxcbiAgICAgICAgICAgIGxvYzogeXlsb2MsXG4gICAgICAgICAgICBleHBlY3RlZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rpb25bMF0gaW5zdGFuY2VvZiBBcnJheSAmJiBhY3Rpb24ubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcnNlIEVycm9yOiBtdWx0aXBsZSBhY3Rpb25zIHBvc3NpYmxlIGF0IHN0YXRlOiBcIiArIHN0YXRlICsgXCIsIHRva2VuOiBcIiArIHN5bWJvbCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChhY3Rpb25bMF0pIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBzdGFjay5wdXNoKHN5bWJvbCk7XG4gICAgICAgICAgICB2c3RhY2sucHVzaChsZXhlcjIueXl0ZXh0KTtcbiAgICAgICAgICAgIGxzdGFjay5wdXNoKGxleGVyMi55eWxsb2MpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChhY3Rpb25bMV0pO1xuICAgICAgICAgICAgc3ltYm9sID0gbnVsbDtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeXlsZW5nID0gbGV4ZXIyLnl5bGVuZztcbiAgICAgICAgICAgICAgeXl0ZXh0ID0gbGV4ZXIyLnl5dGV4dDtcbiAgICAgICAgICAgICAgeXlsaW5lbm8gPSBsZXhlcjIueXlsaW5lbm87XG4gICAgICAgICAgICAgIHl5bG9jID0gbGV4ZXIyLnl5bGxvYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxlbiA9IHRoaXMucHJvZHVjdGlvbnNfW2FjdGlvblsxXV1bMV07XG4gICAgICAgICAgICB5eXZhbC4kID0gdnN0YWNrW3ZzdGFjay5sZW5ndGggLSBsZW5dO1xuICAgICAgICAgICAgeXl2YWwuXyQgPSB7XG4gICAgICAgICAgICAgIGZpcnN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgbGFzdF9saW5lOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9jb2x1bW5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocmFuZ2VzKSB7XG4gICAgICAgICAgICAgIHl5dmFsLl8kLnJhbmdlID0gW1xuICAgICAgICAgICAgICAgIGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0ucmFuZ2VbMF0sXG4gICAgICAgICAgICAgICAgbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5yYW5nZVsxXVxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgciA9IHRoaXMucGVyZm9ybUFjdGlvbi5hcHBseSh5eXZhbCwgW1xuICAgICAgICAgICAgICB5eXRleHQsXG4gICAgICAgICAgICAgIHl5bGVuZyxcbiAgICAgICAgICAgICAgeXlsaW5lbm8sXG4gICAgICAgICAgICAgIHNoYXJlZFN0YXRlLnl5LFxuICAgICAgICAgICAgICBhY3Rpb25bMV0sXG4gICAgICAgICAgICAgIHZzdGFjayxcbiAgICAgICAgICAgICAgbHN0YWNrXG4gICAgICAgICAgICBdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIHN0YWNrID0gc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4gKiAyKTtcbiAgICAgICAgICAgICAgdnN0YWNrID0gdnN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcbiAgICAgICAgICAgICAgbHN0YWNrID0gbHN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YWNrLnB1c2godGhpcy5wcm9kdWN0aW9uc19bYWN0aW9uWzFdXVswXSk7XG4gICAgICAgICAgICB2c3RhY2sucHVzaCh5eXZhbC4kKTtcbiAgICAgICAgICAgIGxzdGFjay5wdXNoKHl5dmFsLl8kKTtcbiAgICAgICAgICAgIG5ld1N0YXRlID0gdGFibGVbc3RhY2tbc3RhY2subGVuZ3RoIC0gMl1dW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDFdXTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV3U3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbiAgdmFyIGxleGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxleGVyMiA9IHtcbiAgICAgIEVPRjogMSxcbiAgICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XG4gICAgICAgIGlmICh0aGlzLnl5LnBhcnNlcikge1xuICAgICAgICAgIHRoaXMueXkucGFyc2VyLnBhcnNlRXJyb3Ioc3RyLCBoYXNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJlc2V0cyB0aGUgbGV4ZXIsIHNldHMgbmV3IGlucHV0XG4gICAgICBzZXRJbnB1dDogZnVuY3Rpb24oaW5wdXQsIHl5KSB7XG4gICAgICAgIHRoaXMueXkgPSB5eSB8fCB0aGlzLnl5IHx8IHt9O1xuICAgICAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuICAgICAgICB0aGlzLl9tb3JlID0gdGhpcy5fYmFja3RyYWNrID0gdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDA7XG4gICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbXCJJTklUSUFMXCJdO1xuICAgICAgICB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogMCxcbiAgICAgICAgICBsYXN0X2xpbmU6IDEsXG4gICAgICAgICAgbGFzdF9jb2x1bW46IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFswLCAwXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIGNvbnN1bWVzIGFuZCByZXR1cm5zIG9uZSBjaGFyIGZyb20gdGhlIGlucHV0XG4gICAgICBpbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMuX2lucHV0WzBdO1xuICAgICAgICB0aGlzLnl5dGV4dCArPSBjaDtcbiAgICAgICAgdGhpcy55eWxlbmcrKztcbiAgICAgICAgdGhpcy5vZmZzZXQrKztcbiAgICAgICAgdGhpcy5tYXRjaCArPSBjaDtcbiAgICAgICAgdGhpcy5tYXRjaGVkICs9IGNoO1xuICAgICAgICB2YXIgbGluZXMgPSBjaC5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG4gICAgICAgIGlmIChsaW5lcykge1xuICAgICAgICAgIHRoaXMueXlsaW5lbm8rKztcbiAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2VbMV0rKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKDEpO1xuICAgICAgICByZXR1cm4gY2g7XG4gICAgICB9LFxuICAgICAgLy8gdW5zaGlmdHMgb25lIGNoYXIgKG9yIGEgc3RyaW5nKSBpbnRvIHRoZSBpbnB1dFxuICAgICAgdW5wdXQ6IGZ1bmN0aW9uKGNoKSB7XG4gICAgICAgIHZhciBsZW4gPSBjaC5sZW5ndGg7XG4gICAgICAgIHZhciBsaW5lcyA9IGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gY2ggKyB0aGlzLl9pbnB1dDtcbiAgICAgICAgdGhpcy55eXRleHQgPSB0aGlzLnl5dGV4dC5zdWJzdHIoMCwgdGhpcy55eXRleHQubGVuZ3RoIC0gbGVuKTtcbiAgICAgICAgdGhpcy5vZmZzZXQgLT0gbGVuO1xuICAgICAgICB2YXIgb2xkTGluZXMgPSB0aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMubWF0Y2ggPSB0aGlzLm1hdGNoLnN1YnN0cigwLCB0aGlzLm1hdGNoLmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSAxKTtcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLnl5bGluZW5vIC09IGxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSB0aGlzLnl5bGxvYy5yYW5nZTtcbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MuZmlyc3RfbGluZSxcbiAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiBsaW5lcyA/IChsaW5lcy5sZW5ndGggPT09IG9sZExpbmVzLmxlbmd0aCA/IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiA6IDApICsgb2xkTGluZXNbb2xkTGluZXMubGVuZ3RoIC0gbGluZXMubGVuZ3RoXS5sZW5ndGggLSBsaW5lc1swXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gLSBsZW5cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFtyWzBdLCByWzBdICsgdGhpcy55eWxlbmcgLSBsZW5dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBXaGVuIGNhbGxlZCBmcm9tIGFjdGlvbiwgY2FjaGVzIG1hdGNoZWQgdGV4dCBhbmQgYXBwZW5kcyBpdCBvbiBuZXh0IGFjdGlvblxuICAgICAgbW9yZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX21vcmUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBXaGVuIGNhbGxlZCBmcm9tIGFjdGlvbiwgc2lnbmFscyB0aGUgbGV4ZXIgdGhhdCB0aGlzIHJ1bGUgZmFpbHMgdG8gbWF0Y2ggdGhlIGlucHV0LCBzbyB0aGUgbmV4dCBtYXRjaGluZyBydWxlIChyZWdleCkgc2hvdWxkIGJlIHRlc3RlZCBpbnN0ZWFkLlxuICAgICAgcmVqZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFlvdSBjYW4gb25seSBpbnZva2UgcmVqZWN0KCkgaW4gdGhlIGxleGVyIHdoZW4gdGhlIGxleGVyIGlzIG9mIHRoZSBiYWNrdHJhY2tpbmcgcGVyc3Vhc2lvbiAob3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIgPSB0cnVlKS5cXG5cIiArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgIGxpbmU6IHRoaXMueXlsaW5lbm9cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyByZXRhaW4gZmlyc3QgbiBjaGFyYWN0ZXJzIG9mIHRoZSBtYXRjaFxuICAgICAgbGVzczogZnVuY3Rpb24obikge1xuICAgICAgICB0aGlzLnVucHV0KHRoaXMubWF0Y2guc2xpY2UobikpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIGFscmVhZHkgbWF0Y2hlZCBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHBhc3RJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwYXN0ID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gdGhpcy5tYXRjaC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gKHBhc3QubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikgKyBwYXN0LnN1YnN0cigtMjApLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sXG4gICAgICAvLyBkaXNwbGF5cyB1cGNvbWluZyBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHVwY29taW5nSW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbmV4dCA9IHRoaXMubWF0Y2g7XG4gICAgICAgIGlmIChuZXh0Lmxlbmd0aCA8IDIwKSB7XG4gICAgICAgICAgbmV4dCArPSB0aGlzLl9pbnB1dC5zdWJzdHIoMCwgMjAgLSBuZXh0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChuZXh0LnN1YnN0cigwLCAyMCkgKyAobmV4dC5sZW5ndGggPiAyMCA/IFwiLi4uXCIgOiBcIlwiKSkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIHRoZSBjaGFyYWN0ZXIgcG9zaXRpb24gd2hlcmUgdGhlIGxleGluZyBlcnJvciBvY2N1cnJlZCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHNob3dQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwcmUgPSB0aGlzLnBhc3RJbnB1dCgpO1xuICAgICAgICB2YXIgYyA9IG5ldyBBcnJheShwcmUubGVuZ3RoICsgMSkuam9pbihcIi1cIik7XG4gICAgICAgIHJldHVybiBwcmUgKyB0aGlzLnVwY29taW5nSW5wdXQoKSArIFwiXFxuXCIgKyBjICsgXCJeXCI7XG4gICAgICB9LFxuICAgICAgLy8gdGVzdCB0aGUgbGV4ZWQgdG9rZW46IHJldHVybiBGQUxTRSB3aGVuIG5vdCBhIG1hdGNoLCBvdGhlcndpc2UgcmV0dXJuIHRva2VuXG4gICAgICB0ZXN0X21hdGNoOiBmdW5jdGlvbihtYXRjaCwgaW5kZXhlZF9ydWxlKSB7XG4gICAgICAgIHZhciB0b2tlbiwgbGluZXMsIGJhY2t1cDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICBiYWNrdXAgPSB7XG4gICAgICAgICAgICB5eWxpbmVubzogdGhpcy55eWxpbmVubyxcbiAgICAgICAgICAgIHl5bGxvYzoge1xuICAgICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMubGFzdF9saW5lLFxuICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeXl0ZXh0OiB0aGlzLnl5dGV4dCxcbiAgICAgICAgICAgIG1hdGNoOiB0aGlzLm1hdGNoLFxuICAgICAgICAgICAgbWF0Y2hlczogdGhpcy5tYXRjaGVzLFxuICAgICAgICAgICAgbWF0Y2hlZDogdGhpcy5tYXRjaGVkLFxuICAgICAgICAgICAgeXlsZW5nOiB0aGlzLnl5bGVuZyxcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgICBfbW9yZTogdGhpcy5fbW9yZSxcbiAgICAgICAgICAgIF9pbnB1dDogdGhpcy5faW5wdXQsXG4gICAgICAgICAgICB5eTogdGhpcy55eSxcbiAgICAgICAgICAgIGNvbmRpdGlvblN0YWNrOiB0aGlzLmNvbmRpdGlvblN0YWNrLnNsaWNlKDApLFxuICAgICAgICAgICAgZG9uZTogdGhpcy5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgICAgYmFja3VwLnl5bGxvYy5yYW5nZSA9IHRoaXMueXlsbG9jLnJhbmdlLnNsaWNlKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsaW5lcyA9IG1hdGNoWzBdLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgaWYgKGxpbmVzKSB7XG4gICAgICAgICAgdGhpcy55eWxpbmVubyArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5sZW5ndGggLSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIG1hdGNoWzBdLmxlbmd0aFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnl5dGV4dCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gbWF0Y2g7XG4gICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3RoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZ107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9yZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICB0aGlzLm1hdGNoZWQgKz0gbWF0Y2hbMF07XG4gICAgICAgIHRva2VuID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodGhpcywgdGhpcy55eSwgdGhpcywgaW5kZXhlZF9ydWxlLCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pO1xuICAgICAgICBpZiAodGhpcy5kb25lICYmIHRoaXMuX2lucHV0KSB7XG4gICAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgIGZvciAodmFyIGsgaW4gYmFja3VwKSB7XG4gICAgICAgICAgICB0aGlzW2tdID0gYmFja3VwW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiBuZXh0IG1hdGNoIGluIGlucHV0XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lucHV0KSB7XG4gICAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG9rZW4sIG1hdGNoLCB0ZW1wTWF0Y2gsIGluZGV4O1xuICAgICAgICBpZiAoIXRoaXMuX21vcmUpIHtcbiAgICAgICAgICB0aGlzLnl5dGV4dCA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5tYXRjaCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJ1bGVzID0gdGhpcy5fY3VycmVudFJ1bGVzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0ZW1wTWF0Y2ggPSB0aGlzLl9pbnB1dC5tYXRjaCh0aGlzLnJ1bGVzW3J1bGVzW2ldXSk7XG4gICAgICAgICAgaWYgKHRlbXBNYXRjaCAmJiAoIW1hdGNoIHx8IHRlbXBNYXRjaFswXS5sZW5ndGggPiBtYXRjaFswXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBtYXRjaCA9IHRlbXBNYXRjaDtcbiAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgICAgIHRva2VuID0gdGhpcy50ZXN0X21hdGNoKHRlbXBNYXRjaCwgcnVsZXNbaV0pO1xuICAgICAgICAgICAgICBpZiAodG9rZW4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuZmxleCkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdG9rZW4gPSB0aGlzLnRlc3RfbWF0Y2gobWF0Y2gsIHJ1bGVzW2luZGV4XSk7XG4gICAgICAgICAgaWYgKHRva2VuICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lucHV0ID09PSBcIlwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFVucmVjb2duaXplZCB0ZXh0LlxcblwiICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggdGhhdCBoYXMgYSB0b2tlblxuICAgICAgbGV4OiBmdW5jdGlvbiBsZXgoKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5uZXh0KCk7XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubGV4KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBhY3RpdmF0ZXMgYSBuZXcgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIChwdXNoZXMgdGhlIG5ldyBsZXhlciBjb25kaXRpb24gc3RhdGUgb250byB0aGUgY29uZGl0aW9uIHN0YWNrKVxuICAgICAgYmVnaW46IGZ1bmN0aW9uIGJlZ2luKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrLnB1c2goY29uZGl0aW9uKTtcbiAgICAgIH0sXG4gICAgICAvLyBwb3AgdGhlIHByZXZpb3VzbHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvZmYgdGhlIGNvbmRpdGlvbiBzdGFja1xuICAgICAgcG9wU3RhdGU6IGZ1bmN0aW9uIHBvcFN0YXRlKCkge1xuICAgICAgICB2YXIgbiA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKG4gPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbMF07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBwcm9kdWNlIHRoZSBsZXhlciBydWxlIHNldCB3aGljaCBpcyBhY3RpdmUgZm9yIHRoZSBjdXJyZW50bHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZVxuICAgICAgX2N1cnJlbnRSdWxlczogZnVuY3Rpb24gX2N1cnJlbnRSdWxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoICYmIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbnNbdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdXS5ydWxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zW1wiSU5JVElBTFwiXS5ydWxlcztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGU7IHdoZW4gYW4gaW5kZXggYXJndW1lbnQgaXMgcHJvdmlkZWQgaXQgcHJvZHVjZXMgdGhlIE4tdGggcHJldmlvdXMgY29uZGl0aW9uIHN0YXRlLCBpZiBhdmFpbGFibGVcbiAgICAgIHRvcFN0YXRlOiBmdW5jdGlvbiB0b3BTdGF0ZShuKSB7XG4gICAgICAgIG4gPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDEgLSBNYXRoLmFicyhuIHx8IDApO1xuICAgICAgICBpZiAobiA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbbl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiSU5JVElBTFwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gYWxpYXMgZm9yIGJlZ2luKGNvbmRpdGlvbilcbiAgICAgIHB1c2hTdGF0ZTogZnVuY3Rpb24gcHVzaFN0YXRlKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmJlZ2luKGNvbmRpdGlvbik7XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIHRoZSBudW1iZXIgb2Ygc3RhdGVzIGN1cnJlbnRseSBvbiB0aGUgc3RhY2tcbiAgICAgIHN0YXRlU3RhY2tTaXplOiBmdW5jdGlvbiBzdGF0ZVN0YWNrU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoO1xuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHt9LFxuICAgICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24gYW5vbnltb3VzKHl5LCB5eV8sICRhdm9pZGluZ19uYW1lX2NvbGxpc2lvbnMsIFlZX1NUQVJUKSB7XG4gICAgICAgIHN3aXRjaCAoJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucykge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiAxMDtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkZvdW5kIHNwYWNlLWJsb2NrXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDMxO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiRm91bmQgbmwtYmxvY2tcIik7XG4gICAgICAgICAgICByZXR1cm4gMzE7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJGb3VuZCBzcGFjZS1ibG9ja1wiKTtcbiAgICAgICAgICAgIHJldHVybiAyOTtcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIi5cIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIl9cIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICByZXR1cm4gNTtcbiAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICB5eV8ueXl0ZXh0ID0gLTE7XG4gICAgICAgICAgICByZXR1cm4gMjg7XG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHl5Xy55eXRleHQucmVwbGFjZSgvY29sdW1uc1xccysvLCBcIlwiKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiQ09MVU1OUyAoTEVYKVwiLCB5eV8ueXl0ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiAyODtcbiAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIm1kX3N0cmluZ1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICByZXR1cm4gXCJNRF9TVFJcIjtcbiAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwic3RyaW5nXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTEVYOiBQT1BQSU5HIFNUUjpcIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMRVg6IFNUUiBlbmQ6XCIsIHl5Xy55eXRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIFwiU1RSXCI7XG4gICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgIHl5Xy55eXRleHQgPSB5eV8ueXl0ZXh0LnJlcGxhY2UoL3NwYWNlXFw6LywgXCJcIik7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlNQQUNFIE5VTSAoTEVYKVwiLCB5eV8ueXl0ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiAyMTtcbiAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgeXlfLnl5dGV4dCA9IFwiMVwiO1xuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJDT0xVTU5TIChMRVgpXCIsIHl5Xy55eXRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIDIxO1xuICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICByZXR1cm4gNDM7XG4gICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgIHJldHVybiBcIkxJTktTVFlMRVwiO1xuICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICByZXR1cm4gXCJJTlRFUlBPTEFURVwiO1xuICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIkNMQVNTREVGXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDQwO1xuICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIkNMQVNTREVGSURcIik7XG4gICAgICAgICAgICByZXR1cm4gXCJERUZBVUxUX0NMQVNTREVGX0lEXCI7XG4gICAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiQ0xBU1NERUZJRFwiKTtcbiAgICAgICAgICAgIHJldHVybiA0MTtcbiAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIDQyO1xuICAgICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIkNMQVNTXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDQ0O1xuICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIkNMQVNTX1NUWUxFXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDQ1O1xuICAgICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gNDY7XG4gICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiU1RZTEVfU1RNTlRcIik7XG4gICAgICAgICAgICByZXR1cm4gNDc7XG4gICAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiU1RZTEVfREVGSU5JVElPTlwiKTtcbiAgICAgICAgICAgIHJldHVybiA0ODtcbiAgICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIDQ5O1xuICAgICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcImFjY190aXRsZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBcImFjY190aXRsZVwiO1xuICAgICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfdGl0bGVfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJhY2NfZGVzY3JcIik7XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfZGVzY3JcIjtcbiAgICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX2Rlc2NyX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiYWNjX2Rlc2NyX211bHRpbGluZVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzU6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZVwiO1xuICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICByZXR1cm4gMzA7XG4gICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiAoKFwiKTtcbiAgICAgICAgICAgIHJldHVybiBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogKChcIik7XG4gICAgICAgICAgICByZXR1cm4gXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6ICkpXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiAoKFwiKTtcbiAgICAgICAgICAgIHJldHVybiBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogKChcIik7XG4gICAgICAgICAgICByZXR1cm4gXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDQzOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6ICgtXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiAtKVwiKTtcbiAgICAgICAgICAgIHJldHVybiBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogKChcIik7XG4gICAgICAgICAgICByZXR1cm4gXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDQ2OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IF1dXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiAoXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSA0ODpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBdKVwiKTtcbiAgICAgICAgICAgIHJldHVybiBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgNDk6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogL11cIik7XG4gICAgICAgICAgICByZXR1cm4gXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDUwOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IC9dXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSA1MTpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiApXVwiKTtcbiAgICAgICAgICAgIHJldHVybiBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgNTI6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogKVwiKTtcbiAgICAgICAgICAgIHJldHVybiBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgNTM6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogXT5cIik7XG4gICAgICAgICAgICByZXR1cm4gXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDU0OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IF1cIik7XG4gICAgICAgICAgICByZXR1cm4gXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDU1OlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXhhOiAtKVwiKTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKTtcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDU2OlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXhhOiAoLVwiKTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKTtcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDU3OlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXhhOiApKVwiKTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKTtcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXhhOiApXCIpO1xuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJOT0RFXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDM2O1xuICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogKCgoXCIpO1xuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJOT0RFXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDM2O1xuICAgICAgICAgIGNhc2UgNjA6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleGE6IClcIik7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIik7XG4gICAgICAgICAgICByZXR1cm4gMzY7XG4gICAgICAgICAgY2FzZSA2MTpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4YTogKVwiKTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKTtcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDYyOlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXhhOiApXCIpO1xuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJOT0RFXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDM2O1xuICAgICAgICAgIGNhc2UgNjM6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleGM6ID5cIik7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIik7XG4gICAgICAgICAgICByZXR1cm4gMzY7XG4gICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4YTogKFtcIik7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIik7XG4gICAgICAgICAgICByZXR1cm4gMzY7XG4gICAgICAgICAgY2FzZSA2NTpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4YTogKVwiKTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKTtcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDY2OlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJOT0RFXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDM2O1xuICAgICAgICAgIGNhc2UgNjc6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIik7XG4gICAgICAgICAgICByZXR1cm4gMzY7XG4gICAgICAgICAgY2FzZSA2ODpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKTtcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDY5OlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJOT0RFXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDM2O1xuICAgICAgICAgIGNhc2UgNzA6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIik7XG4gICAgICAgICAgICByZXR1cm4gMzY7XG4gICAgICAgICAgY2FzZSA3MTpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKTtcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDcyOlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJOT0RFXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDM2O1xuICAgICAgICAgIGNhc2UgNzM6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleGE6IFtcIik7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIik7XG4gICAgICAgICAgICByZXR1cm4gMzY7XG4gICAgICAgICAgY2FzZSA3NDpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiQkxPQ0tfQVJST1dcIik7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxFWCBBUlIgU1RBUlRcIik7XG4gICAgICAgICAgICByZXR1cm4gMzg7XG4gICAgICAgICAgY2FzZSA3NTpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBOT0RFX0lEXCIsIHl5Xy55eXRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIDMyO1xuICAgICAgICAgIGNhc2UgNzY6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogRU9GXCIsIHl5Xy55eXRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIDg7XG4gICAgICAgICAgY2FzZSA3NzpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwibWRfc3RyaW5nXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA3ODpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwibWRfc3RyaW5nXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA3OTpcbiAgICAgICAgICAgIHJldHVybiBcIk5PREVfREVTQ1JcIjtcbiAgICAgICAgICBjYXNlIDgwOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA4MTpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBTdGFydGluZyBzdHJpbmdcIik7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcInN0cmluZ1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgODI6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxFWCBBUlI6IFN0YXJ0aW5nIHN0cmluZ1wiKTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwic3RyaW5nXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA4MzpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTEVYOiBOT0RFX0RFU0NSOlwiLCB5eV8ueXl0ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiBcIk5PREVfREVTQ1JcIjtcbiAgICAgICAgICBjYXNlIDg0OlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMRVggUE9QUElOR1wiKTtcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgODU6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogPT5CQUVcIik7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIkFSUk9XX0RJUlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgODY6XG4gICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5yZXBsYWNlKC9eLFxccyovLCBcIlwiKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4IChyaWdodCk6IGRpcjpcIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gXCJESVJcIjtcbiAgICAgICAgICBjYXNlIDg3OlxuICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHl5Xy55eXRleHQucmVwbGFjZSgvXixcXHMqLywgXCJcIik7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleCAobGVmdCk6XCIsIHl5Xy55eXRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIFwiRElSXCI7XG4gICAgICAgICAgY2FzZSA4ODpcbiAgICAgICAgICAgIHl5Xy55eXRleHQgPSB5eV8ueXl0ZXh0LnJlcGxhY2UoL14sXFxzKi8sIFwiXCIpO1xuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXggKHgpOlwiLCB5eV8ueXl0ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiBcIkRJUlwiO1xuICAgICAgICAgIGNhc2UgODk6XG4gICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5yZXBsYWNlKC9eLFxccyovLCBcIlwiKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4ICh5KTpcIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gXCJESVJcIjtcbiAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHl5Xy55eXRleHQucmVwbGFjZSgvXixcXHMqLywgXCJcIik7XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleCAodXApOlwiLCB5eV8ueXl0ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiBcIkRJUlwiO1xuICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5yZXBsYWNlKC9eLFxccyovLCBcIlwiKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4IChkb3duKTpcIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gXCJESVJcIjtcbiAgICAgICAgICBjYXNlIDkyOlxuICAgICAgICAgICAgeXlfLnl5dGV4dCA9IFwiXT5cIjtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4IChBUlJPV19ESVIgZW5kKTpcIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gXCJCTE9DS19BUlJPV19FTkRcIjtcbiAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IExJTktcIiwgXCIjXCIgKyB5eV8ueXl0ZXh0ICsgXCIjXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDE1O1xuICAgICAgICAgIGNhc2UgOTQ6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogTElOS1wiLCB5eV8ueXl0ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiAxNTtcbiAgICAgICAgICBjYXNlIDk1OlxuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IExJTktcIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gMTU7XG4gICAgICAgICAgY2FzZSA5NjpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBMSU5LXCIsIHl5Xy55eXRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIDE1O1xuICAgICAgICAgIGNhc2UgOTc6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogU1RBUlRfTElOS1wiLCB5eV8ueXl0ZXh0KTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTExBQkVMXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDE2O1xuICAgICAgICAgIGNhc2UgOTg6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogU1RBUlRfTElOS1wiLCB5eV8ueXl0ZXh0KTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTExBQkVMXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDE2O1xuICAgICAgICAgIGNhc2UgOTk6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogU1RBUlRfTElOS1wiLCB5eV8ueXl0ZXh0KTtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiTExBQkVMXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDE2O1xuICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJtZF9zdHJpbmdcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEwMTpcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBTdGFydGluZyBzdHJpbmdcIik7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcInN0cmluZ1wiKTtcbiAgICAgICAgICAgIHJldHVybiBcIkxJTktfTEFCRUxcIjtcbiAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBMSU5LXCIsIFwiI1wiICsgeXlfLnl5dGV4dCArIFwiI1wiKTtcbiAgICAgICAgICAgIHJldHVybiAxNTtcbiAgICAgICAgICBjYXNlIDEwMzpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHl5LmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBMSU5LXCIsIHl5Xy55eXRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIDE1O1xuICAgICAgICAgIGNhc2UgMTA0OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgeXkuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IExJTktcIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gMTU7XG4gICAgICAgICAgY2FzZSAxMDU6XG4gICAgICAgICAgICB5eS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogQ09MT05cIiwgeXlfLnl5dGV4dCk7XG4gICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5zbGljZSgxKTtcbiAgICAgICAgICAgIHJldHVybiAyNztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJ1bGVzOiBbL14oPzpibG9jay1iZXRhXFxiKS8sIC9eKD86YmxvY2tcXHMrKS8sIC9eKD86YmxvY2tcXG4rKS8sIC9eKD86YmxvY2s6KS8sIC9eKD86W1xcc10rKS8sIC9eKD86W1xcbl0rKS8sIC9eKD86KChcXHUwMDBEXFx1MDAwQSl8KFxcdTAwMEEpKSkvLCAvXig/OmNvbHVtbnNcXHMrYXV0b1xcYikvLCAvXig/OmNvbHVtbnNcXHMrW1xcZF0rKS8sIC9eKD86W1wiXVtgXSkvLCAvXig/OlteYFwiXSspLywgL14oPzpbYF1bXCJdKS8sIC9eKD86W1wiXSkvLCAvXig/OltcIl0pLywgL14oPzpbXlwiXSopLywgL14oPzpzcGFjZVs6XVxcZCspLywgL14oPzpzcGFjZVxcYikvLCAvXig/OmRlZmF1bHRcXGIpLywgL14oPzpsaW5rU3R5bGVcXGIpLywgL14oPzppbnRlcnBvbGF0ZVxcYikvLCAvXig/OmNsYXNzRGVmXFxzKykvLCAvXig/OkRFRkFVTFRcXHMrKS8sIC9eKD86XFx3K1xccyspLywgL14oPzpbXlxcbl0qKS8sIC9eKD86Y2xhc3NcXHMrKS8sIC9eKD86KFxcdyspKygoLFxccypcXHcrKSopKS8sIC9eKD86W15cXG5dKikvLCAvXig/OnN0eWxlXFxzKykvLCAvXig/OihcXHcrKSsoKCxcXHMqXFx3KykqKSkvLCAvXig/OlteXFxuXSopLywgL14oPzphY2NUaXRsZVxccyo6XFxzKikvLCAvXig/Oig/IVxcbnx8KSpbXlxcbl0qKS8sIC9eKD86YWNjRGVzY3JcXHMqOlxccyopLywgL14oPzooPyFcXG58fCkqW15cXG5dKikvLCAvXig/OmFjY0Rlc2NyXFxzKlxce1xccyopLywgL14oPzpbXFx9XSkvLCAvXig/OlteXFx9XSopLywgL14oPzplbmRcXGJcXHMqKS8sIC9eKD86XFwoXFwoXFwoKS8sIC9eKD86XFwpXFwpXFwpKS8sIC9eKD86W1xcKV1cXCkpLywgL14oPzpcXH1cXH0pLywgL14oPzpcXH0pLywgL14oPzpcXCgtKS8sIC9eKD86LVxcKSkvLCAvXig/OlxcKFxcKCkvLCAvXig/OlxcXVxcXSkvLCAvXig/OlxcKCkvLCAvXig/OlxcXVxcKSkvLCAvXig/OlxcXFxcXF0pLywgL14oPzpcXC9cXF0pLywgL14oPzpcXClcXF0pLywgL14oPzpbXFwpXSkvLCAvXig/OlxcXT4pLywgL14oPzpbXFxdXSkvLCAvXig/Oi1cXCkpLywgL14oPzpcXCgtKS8sIC9eKD86XFwpXFwpKS8sIC9eKD86XFwpKS8sIC9eKD86XFwoXFwoXFwoKS8sIC9eKD86XFwoXFwoKS8sIC9eKD86XFx7XFx7KS8sIC9eKD86XFx7KS8sIC9eKD86PikvLCAvXig/OlxcKFxcWykvLCAvXig/OlxcKCkvLCAvXig/OlxcW1xcWykvLCAvXig/OlxcW1xcfCkvLCAvXig/OlxcW1xcKCkvLCAvXig/OlxcKVxcKVxcKSkvLCAvXig/OlxcW1xcXFwpLywgL14oPzpcXFtcXC8pLywgL14oPzpcXFtcXFxcKS8sIC9eKD86XFxbKS8sIC9eKD86PFxcWykvLCAvXig/OlteXFwoXFxbXFxuXFwtXFwpXFx7XFx9XFxzXFw8XFw+Ol0rKS8sIC9eKD86JCkvLCAvXig/OltcIl1bYF0pLywgL14oPzpbXCJdW2BdKS8sIC9eKD86W15gXCJdKykvLCAvXig/OltgXVtcIl0pLywgL14oPzpbXCJdKS8sIC9eKD86W1wiXSkvLCAvXig/OlteXCJdKykvLCAvXig/OltcIl0pLywgL14oPzpcXF0+XFxzKlxcKCkvLCAvXig/Oiw/XFxzKnJpZ2h0XFxzKikvLCAvXig/Oiw/XFxzKmxlZnRcXHMqKS8sIC9eKD86LD9cXHMqeFxccyopLywgL14oPzosP1xccyp5XFxzKikvLCAvXig/Oiw/XFxzKnVwXFxzKikvLCAvXig/Oiw/XFxzKmRvd25cXHMqKS8sIC9eKD86XFwpXFxzKikvLCAvXig/OlxccypbeG88XT8tLStbLXhvPl1cXHMqKS8sIC9eKD86XFxzKlt4bzxdPz09K1s9eG8+XVxccyopLywgL14oPzpcXHMqW3hvPF0/LT9cXC4rLVt4bz5dP1xccyopLywgL14oPzpcXHMqfn5bXFx+XStcXHMqKS8sIC9eKD86XFxzKlt4bzxdPy0tXFxzKikvLCAvXig/OlxccypbeG88XT89PVxccyopLywgL14oPzpcXHMqW3hvPF0/LVxcLlxccyopLywgL14oPzpbXCJdW2BdKS8sIC9eKD86W1wiXSkvLCAvXig/OlxccypbeG88XT8tLStbLXhvPl1cXHMqKS8sIC9eKD86XFxzKlt4bzxdPz09K1s9eG8+XVxccyopLywgL14oPzpcXHMqW3hvPF0/LT9cXC4rLVt4bz5dP1xccyopLywgL14oPzo6XFxkKykvXSxcbiAgICAgIGNvbmRpdGlvbnM6IHsgXCJTVFlMRV9ERUZJTklUSU9OXCI6IHsgXCJydWxlc1wiOiBbMjldLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIlNUWUxFX1NUTU5UXCI6IHsgXCJydWxlc1wiOiBbMjhdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIkNMQVNTREVGSURcIjogeyBcInJ1bGVzXCI6IFsyM10sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiQ0xBU1NERUZcIjogeyBcInJ1bGVzXCI6IFsyMSwgMjJdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIkNMQVNTX1NUWUxFXCI6IHsgXCJydWxlc1wiOiBbMjZdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIkNMQVNTXCI6IHsgXCJydWxlc1wiOiBbMjVdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIkxMQUJFTFwiOiB7IFwicnVsZXNcIjogWzEwMCwgMTAxLCAxMDIsIDEwMywgMTA0XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJBUlJPV19ESVJcIjogeyBcInJ1bGVzXCI6IFs4NiwgODcsIDg4LCA4OSwgOTAsIDkxLCA5Ml0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiQkxPQ0tfQVJST1dcIjogeyBcInJ1bGVzXCI6IFs3NywgODIsIDg1XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJOT0RFXCI6IHsgXCJydWxlc1wiOiBbMzgsIDM5LCA0MCwgNDEsIDQyLCA0MywgNDQsIDQ1LCA0NiwgNDcsIDQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA3OCwgODFdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIm1kX3N0cmluZ1wiOiB7IFwicnVsZXNcIjogWzEwLCAxMSwgNzksIDgwXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJzcGFjZVwiOiB7IFwicnVsZXNcIjogW10sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwic3RyaW5nXCI6IHsgXCJydWxlc1wiOiBbMTMsIDE0LCA4MywgODRdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImFjY19kZXNjcl9tdWx0aWxpbmVcIjogeyBcInJ1bGVzXCI6IFszNSwgMzZdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImFjY19kZXNjclwiOiB7IFwicnVsZXNcIjogWzMzXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJhY2NfdGl0bGVcIjogeyBcInJ1bGVzXCI6IFszMV0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiSU5JVElBTFwiOiB7IFwicnVsZXNcIjogWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEyLCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwLCAyNCwgMjcsIDMwLCAzMiwgMzQsIDM3LCA1NSwgNTYsIDU3LCA1OCwgNTksIDYwLCA2MSwgNjIsIDYzLCA2NCwgNjUsIDY2LCA2NywgNjgsIDY5LCA3MCwgNzEsIDcyLCA3MywgNzQsIDc1LCA3NiwgOTMsIDk0LCA5NSwgOTYsIDk3LCA5OCwgOTksIDEwNV0sIFwiaW5jbHVzaXZlXCI6IHRydWUgfSB9XG4gICAgfTtcbiAgICByZXR1cm4gbGV4ZXIyO1xuICB9KCk7XG4gIHBhcnNlcjIubGV4ZXIgPSBsZXhlcjtcbiAgZnVuY3Rpb24gUGFyc2VyKCkge1xuICAgIHRoaXMueXkgPSB7fTtcbiAgfVxuICBQYXJzZXIucHJvdG90eXBlID0gcGFyc2VyMjtcbiAgcGFyc2VyMi5QYXJzZXIgPSBQYXJzZXI7XG4gIHJldHVybiBuZXcgUGFyc2VyKCk7XG59KCk7XG5wYXJzZXIucGFyc2VyID0gcGFyc2VyO1xuY29uc3QgcGFyc2VyJDEgPSBwYXJzZXI7XG5sZXQgYmxvY2tEYXRhYmFzZSA9IHt9O1xubGV0IGVkZ2VMaXN0ID0gW107XG5sZXQgZWRnZUNvdW50ID0ge307XG5jb25zdCBDT0xPUl9LRVlXT1JEID0gXCJjb2xvclwiO1xuY29uc3QgRklMTF9LRVlXT1JEID0gXCJmaWxsXCI7XG5jb25zdCBCR19GSUxMID0gXCJiZ0ZpbGxcIjtcbmNvbnN0IFNUWUxFQ0xBU1NfU0VQID0gXCIsXCI7XG5jb25zdCBjb25maWcgPSBnZXRDb25maWcoKTtcbmxldCBjbGFzc2VzID0ge307XG5jb25zdCBzYW5pdGl6ZVRleHQgPSAodHh0KSA9PiBjb21tb24uc2FuaXRpemVUZXh0KHR4dCwgY29uZmlnKTtcbmNvbnN0IGFkZFN0eWxlQ2xhc3MgPSBmdW5jdGlvbihpZCwgc3R5bGVBdHRyaWJ1dGVzID0gXCJcIikge1xuICBpZiAoY2xhc3Nlc1tpZF0gPT09IHZvaWQgMCkge1xuICAgIGNsYXNzZXNbaWRdID0geyBpZCwgc3R5bGVzOiBbXSwgdGV4dFN0eWxlczogW10gfTtcbiAgfVxuICBjb25zdCBmb3VuZENsYXNzID0gY2xhc3Nlc1tpZF07XG4gIGlmIChzdHlsZUF0dHJpYnV0ZXMgIT09IHZvaWQgMCAmJiBzdHlsZUF0dHJpYnV0ZXMgIT09IG51bGwpIHtcbiAgICBzdHlsZUF0dHJpYnV0ZXMuc3BsaXQoU1RZTEVDTEFTU19TRVApLmZvckVhY2goKGF0dHJpYikgPT4ge1xuICAgICAgY29uc3QgZml4ZWRBdHRyaWIgPSBhdHRyaWIucmVwbGFjZSgvKFteO10qKTsvLCBcIiQxXCIpLnRyaW0oKTtcbiAgICAgIGlmIChhdHRyaWIubWF0Y2goQ09MT1JfS0VZV09SRCkpIHtcbiAgICAgICAgY29uc3QgbmV3U3R5bGUxID0gZml4ZWRBdHRyaWIucmVwbGFjZShGSUxMX0tFWVdPUkQsIEJHX0ZJTEwpO1xuICAgICAgICBjb25zdCBuZXdTdHlsZTIgPSBuZXdTdHlsZTEucmVwbGFjZShDT0xPUl9LRVlXT1JELCBGSUxMX0tFWVdPUkQpO1xuICAgICAgICBmb3VuZENsYXNzLnRleHRTdHlsZXMucHVzaChuZXdTdHlsZTIpO1xuICAgICAgfVxuICAgICAgZm91bmRDbGFzcy5zdHlsZXMucHVzaChmaXhlZEF0dHJpYik7XG4gICAgfSk7XG4gIH1cbn07XG5jb25zdCBhZGRTdHlsZTJOb2RlID0gZnVuY3Rpb24oaWQsIHN0eWxlcyA9IFwiXCIpIHtcbiAgY29uc3QgZm91bmRCbG9jayA9IGJsb2NrRGF0YWJhc2VbaWRdO1xuICBpZiAoc3R5bGVzICE9PSB2b2lkIDAgJiYgc3R5bGVzICE9PSBudWxsKSB7XG4gICAgZm91bmRCbG9jay5zdHlsZXMgPSBzdHlsZXMuc3BsaXQoU1RZTEVDTEFTU19TRVApO1xuICB9XG59O1xuY29uc3Qgc2V0Q3NzQ2xhc3MgPSBmdW5jdGlvbihpdGVtSWRzLCBjc3NDbGFzc05hbWUpIHtcbiAgaXRlbUlkcy5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbihpZCkge1xuICAgIGxldCBmb3VuZEJsb2NrID0gYmxvY2tEYXRhYmFzZVtpZF07XG4gICAgaWYgKGZvdW5kQmxvY2sgPT09IHZvaWQgMCkge1xuICAgICAgY29uc3QgdHJpbW1lZElkID0gaWQudHJpbSgpO1xuICAgICAgYmxvY2tEYXRhYmFzZVt0cmltbWVkSWRdID0geyBpZDogdHJpbW1lZElkLCB0eXBlOiBcIm5hXCIsIGNoaWxkcmVuOiBbXSB9O1xuICAgICAgZm91bmRCbG9jayA9IGJsb2NrRGF0YWJhc2VbdHJpbW1lZElkXTtcbiAgICB9XG4gICAgaWYgKCFmb3VuZEJsb2NrLmNsYXNzZXMpIHtcbiAgICAgIGZvdW5kQmxvY2suY2xhc3NlcyA9IFtdO1xuICAgIH1cbiAgICBmb3VuZEJsb2NrLmNsYXNzZXMucHVzaChjc3NDbGFzc05hbWUpO1xuICB9KTtcbn07XG5jb25zdCBwb3B1bGF0ZUJsb2NrRGF0YWJhc2UgPSAoX2Jsb2NrTGlzdCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IGJsb2NrTGlzdCA9IF9ibG9ja0xpc3QuZmxhdCgpO1xuICBjb25zdCBjaGlsZHJlbiA9IFtdO1xuICBmb3IgKGNvbnN0IGJsb2NrIG9mIGJsb2NrTGlzdCkge1xuICAgIGlmIChibG9jay5sYWJlbCkge1xuICAgICAgYmxvY2subGFiZWwgPSBzYW5pdGl6ZVRleHQoYmxvY2subGFiZWwpO1xuICAgIH1cbiAgICBpZiAoYmxvY2sudHlwZSA9PT0gXCJjbGFzc0RlZlwiKSB7XG4gICAgICBhZGRTdHlsZUNsYXNzKGJsb2NrLmlkLCBibG9jay5jc3MpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChibG9jay50eXBlID09PSBcImFwcGx5Q2xhc3NcIikge1xuICAgICAgc2V0Q3NzQ2xhc3MoYmxvY2suaWQsIChibG9jayA9PSBudWxsID8gdm9pZCAwIDogYmxvY2suc3R5bGVDbGFzcykgfHwgXCJcIik7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGJsb2NrLnR5cGUgPT09IFwiYXBwbHlTdHlsZXNcIikge1xuICAgICAgaWYgKGJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBibG9jay5zdHlsZXNTdHIpIHtcbiAgICAgICAgYWRkU3R5bGUyTm9kZShibG9jay5pZCwgYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnN0eWxlc1N0cik7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGJsb2NrLnR5cGUgPT09IFwiY29sdW1uLXNldHRpbmdcIikge1xuICAgICAgcGFyZW50LmNvbHVtbnMgPSBibG9jay5jb2x1bW5zIHx8IC0xO1xuICAgIH0gZWxzZSBpZiAoYmxvY2sudHlwZSA9PT0gXCJlZGdlXCIpIHtcbiAgICAgIGlmIChlZGdlQ291bnRbYmxvY2suaWRdKSB7XG4gICAgICAgIGVkZ2VDb3VudFtibG9jay5pZF0rKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVkZ2VDb3VudFtibG9jay5pZF0gPSAxO1xuICAgICAgfVxuICAgICAgYmxvY2suaWQgPSBlZGdlQ291bnRbYmxvY2suaWRdICsgXCItXCIgKyBibG9jay5pZDtcbiAgICAgIGVkZ2VMaXN0LnB1c2goYmxvY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWJsb2NrLmxhYmVsKSB7XG4gICAgICAgIGlmIChibG9jay50eXBlID09PSBcImNvbXBvc2l0ZVwiKSB7XG4gICAgICAgICAgYmxvY2subGFiZWwgPSBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJsb2NrLmxhYmVsID0gYmxvY2suaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IG5ld0Jsb2NrID0gIWJsb2NrRGF0YWJhc2VbYmxvY2suaWRdO1xuICAgICAgaWYgKG5ld0Jsb2NrKSB7XG4gICAgICAgIGJsb2NrRGF0YWJhc2VbYmxvY2suaWRdID0gYmxvY2s7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYmxvY2sudHlwZSAhPT0gXCJuYVwiKSB7XG4gICAgICAgICAgYmxvY2tEYXRhYmFzZVtibG9jay5pZF0udHlwZSA9IGJsb2NrLnR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJsb2NrLmxhYmVsICE9PSBibG9jay5pZCkge1xuICAgICAgICAgIGJsb2NrRGF0YWJhc2VbYmxvY2suaWRdLmxhYmVsID0gYmxvY2subGFiZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChibG9jay5jaGlsZHJlbikge1xuICAgICAgICBwb3B1bGF0ZUJsb2NrRGF0YWJhc2UoYmxvY2suY2hpbGRyZW4sIGJsb2NrKTtcbiAgICAgIH1cbiAgICAgIGlmIChibG9jay50eXBlID09PSBcInNwYWNlXCIpIHtcbiAgICAgICAgY29uc3QgdyA9IGJsb2NrLndpZHRoIHx8IDE7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdzsgaisrKSB7XG4gICAgICAgICAgY29uc3QgbmV3QmxvY2syID0gY2xvbmUoYmxvY2spO1xuICAgICAgICAgIG5ld0Jsb2NrMi5pZCA9IG5ld0Jsb2NrMi5pZCArIFwiLVwiICsgajtcbiAgICAgICAgICBibG9ja0RhdGFiYXNlW25ld0Jsb2NrMi5pZF0gPSBuZXdCbG9jazI7XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChuZXdCbG9jazIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5ld0Jsb2NrKSB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2goYmxvY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwYXJlbnQuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbn07XG5sZXQgYmxvY2tzID0gW107XG5sZXQgcm9vdEJsb2NrID0geyBpZDogXCJyb290XCIsIHR5cGU6IFwiY29tcG9zaXRlXCIsIGNoaWxkcmVuOiBbXSwgY29sdW1uczogLTEgfTtcbmNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICBsb2cuZGVidWcoXCJDbGVhciBjYWxsZWRcIik7XG4gIGNsZWFyJDEoKTtcbiAgcm9vdEJsb2NrID0geyBpZDogXCJyb290XCIsIHR5cGU6IFwiY29tcG9zaXRlXCIsIGNoaWxkcmVuOiBbXSwgY29sdW1uczogLTEgfTtcbiAgYmxvY2tEYXRhYmFzZSA9IHsgcm9vdDogcm9vdEJsb2NrIH07XG4gIGJsb2NrcyA9IFtdO1xuICBjbGFzc2VzID0ge307XG4gIGVkZ2VMaXN0ID0gW107XG4gIGVkZ2VDb3VudCA9IHt9O1xufTtcbmZ1bmN0aW9uIHR5cGVTdHIyVHlwZSh0eXBlU3RyKSB7XG4gIGxvZy5kZWJ1ZyhcInR5cGVTdHIyVHlwZVwiLCB0eXBlU3RyKTtcbiAgc3dpdGNoICh0eXBlU3RyKSB7XG4gICAgY2FzZSBcIltdXCI6XG4gICAgICByZXR1cm4gXCJzcXVhcmVcIjtcbiAgICBjYXNlIFwiKClcIjpcbiAgICAgIGxvZy5kZWJ1ZyhcIndlIGhhdmUgYSByb3VuZFwiKTtcbiAgICAgIHJldHVybiBcInJvdW5kXCI7XG4gICAgY2FzZSBcIigoKSlcIjpcbiAgICAgIHJldHVybiBcImNpcmNsZVwiO1xuICAgIGNhc2UgXCI+XVwiOlxuICAgICAgcmV0dXJuIFwicmVjdF9sZWZ0X2ludl9hcnJvd1wiO1xuICAgIGNhc2UgXCJ7fVwiOlxuICAgICAgcmV0dXJuIFwiZGlhbW9uZFwiO1xuICAgIGNhc2UgXCJ7e319XCI6XG4gICAgICByZXR1cm4gXCJoZXhhZ29uXCI7XG4gICAgY2FzZSBcIihbXSlcIjpcbiAgICAgIHJldHVybiBcInN0YWRpdW1cIjtcbiAgICBjYXNlIFwiW1tdXVwiOlxuICAgICAgcmV0dXJuIFwic3Vicm91dGluZVwiO1xuICAgIGNhc2UgXCJbKCldXCI6XG4gICAgICByZXR1cm4gXCJjeWxpbmRlclwiO1xuICAgIGNhc2UgXCIoKCgpKSlcIjpcbiAgICAgIHJldHVybiBcImRvdWJsZWNpcmNsZVwiO1xuICAgIGNhc2UgXCJbLy9dXCI6XG4gICAgICByZXR1cm4gXCJsZWFuX3JpZ2h0XCI7XG4gICAgY2FzZSBcIltcXFxcXFxcXF1cIjpcbiAgICAgIHJldHVybiBcImxlYW5fbGVmdFwiO1xuICAgIGNhc2UgXCJbL1xcXFxdXCI6XG4gICAgICByZXR1cm4gXCJ0cmFwZXpvaWRcIjtcbiAgICBjYXNlIFwiW1xcXFwvXVwiOlxuICAgICAgcmV0dXJuIFwiaW52X3RyYXBlem9pZFwiO1xuICAgIGNhc2UgXCI8W10+XCI6XG4gICAgICByZXR1cm4gXCJibG9ja19hcnJvd1wiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJuYVwiO1xuICB9XG59XG5mdW5jdGlvbiBlZGdlVHlwZVN0cjJUeXBlKHR5cGVTdHIpIHtcbiAgbG9nLmRlYnVnKFwidHlwZVN0cjJUeXBlXCIsIHR5cGVTdHIpO1xuICBzd2l0Y2ggKHR5cGVTdHIpIHtcbiAgICBjYXNlIFwiPT1cIjpcbiAgICAgIHJldHVybiBcInRoaWNrXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcIm5vcm1hbFwiO1xuICB9XG59XG5mdW5jdGlvbiBlZGdlU3RyVG9FZGdlRGF0YSh0eXBlU3RyKSB7XG4gIHN3aXRjaCAodHlwZVN0ci50cmltKCkpIHtcbiAgICBjYXNlIFwiLS14XCI6XG4gICAgICByZXR1cm4gXCJhcnJvd19jcm9zc1wiO1xuICAgIGNhc2UgXCItLW9cIjpcbiAgICAgIHJldHVybiBcImFycm93X2NpcmNsZVwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJhcnJvd19wb2ludFwiO1xuICB9XG59XG5sZXQgY250ID0gMDtcbmNvbnN0IGdlbmVyYXRlSWQgPSAoKSA9PiB7XG4gIGNudCsrO1xuICByZXR1cm4gXCJpZC1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAxMikgKyBcIi1cIiArIGNudDtcbn07XG5jb25zdCBzZXRIaWVyYXJjaHkgPSAoYmxvY2spID0+IHtcbiAgcm9vdEJsb2NrLmNoaWxkcmVuID0gYmxvY2s7XG4gIHBvcHVsYXRlQmxvY2tEYXRhYmFzZShibG9jaywgcm9vdEJsb2NrKTtcbiAgYmxvY2tzID0gcm9vdEJsb2NrLmNoaWxkcmVuO1xufTtcbmNvbnN0IGdldENvbHVtbnMgPSAoYmxvY2tJZCkgPT4ge1xuICBjb25zdCBibG9jayA9IGJsb2NrRGF0YWJhc2VbYmxvY2tJZF07XG4gIGlmICghYmxvY2spIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGJsb2NrLmNvbHVtbnMpIHtcbiAgICByZXR1cm4gYmxvY2suY29sdW1ucztcbiAgfVxuICBpZiAoIWJsb2NrLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHJldHVybiBibG9jay5jaGlsZHJlbi5sZW5ndGg7XG59O1xuY29uc3QgZ2V0QmxvY2tzRmxhdCA9ICgpID0+IHtcbiAgcmV0dXJuIFsuLi5PYmplY3QudmFsdWVzKGJsb2NrRGF0YWJhc2UpXTtcbn07XG5jb25zdCBnZXRCbG9ja3MgPSAoKSA9PiB7XG4gIHJldHVybiBibG9ja3MgfHwgW107XG59O1xuY29uc3QgZ2V0RWRnZXMgPSAoKSA9PiB7XG4gIHJldHVybiBlZGdlTGlzdDtcbn07XG5jb25zdCBnZXRCbG9jayA9IChpZCkgPT4ge1xuICByZXR1cm4gYmxvY2tEYXRhYmFzZVtpZF07XG59O1xuY29uc3Qgc2V0QmxvY2sgPSAoYmxvY2spID0+IHtcbiAgYmxvY2tEYXRhYmFzZVtibG9jay5pZF0gPSBibG9jaztcbn07XG5jb25zdCBnZXRMb2dnZXIgPSAoKSA9PiBjb25zb2xlO1xuY29uc3QgZ2V0Q2xhc3NlcyQxID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBjbGFzc2VzO1xufTtcbmNvbnN0IGRiID0ge1xuICBnZXRDb25maWc6ICgpID0+IGdldENvbmZpZyQxKCkuYmxvY2ssXG4gIHR5cGVTdHIyVHlwZSxcbiAgZWRnZVR5cGVTdHIyVHlwZSxcbiAgZWRnZVN0clRvRWRnZURhdGEsXG4gIGdldExvZ2dlcixcbiAgZ2V0QmxvY2tzRmxhdCxcbiAgZ2V0QmxvY2tzLFxuICBnZXRFZGdlcyxcbiAgc2V0SGllcmFyY2h5LFxuICBnZXRCbG9jayxcbiAgc2V0QmxvY2ssXG4gIGdldENvbHVtbnMsXG4gIGdldENsYXNzZXM6IGdldENsYXNzZXMkMSxcbiAgY2xlYXIsXG4gIGdlbmVyYXRlSWRcbn07XG5jb25zdCBkYiQxID0gZGI7XG5jb25zdCBmYWRlID0gKGNvbG9yLCBvcGFjaXR5KSA9PiB7XG4gIGNvbnN0IGNoYW5uZWwgPSBraHJvbWEuY2hhbm5lbDtcbiAgY29uc3QgciA9IGNoYW5uZWwoY29sb3IsIFwiclwiKTtcbiAgY29uc3QgZyA9IGNoYW5uZWwoY29sb3IsIFwiZ1wiKTtcbiAgY29uc3QgYiA9IGNoYW5uZWwoY29sb3IsIFwiYlwiKTtcbiAgcmV0dXJuIGtocm9tYS5yZ2JhKHIsIGcsIGIsIG9wYWNpdHkpO1xufTtcbmNvbnN0IGdldFN0eWxlcyA9IChvcHRpb25zKSA9PiBgLmxhYmVsIHtcbiAgICBmb250LWZhbWlseTogJHtvcHRpb25zLmZvbnRGYW1pbHl9O1xuICAgIGNvbG9yOiAke29wdGlvbnMubm9kZVRleHRDb2xvciB8fCBvcHRpb25zLnRleHRDb2xvcn07XG4gIH1cbiAgLmNsdXN0ZXItbGFiZWwgdGV4dCB7XG4gICAgZmlsbDogJHtvcHRpb25zLnRpdGxlQ29sb3J9O1xuICB9XG4gIC5jbHVzdGVyLWxhYmVsIHNwYW4scCB7XG4gICAgY29sb3I6ICR7b3B0aW9ucy50aXRsZUNvbG9yfTtcbiAgfVxuXG5cblxuICAubGFiZWwgdGV4dCxzcGFuLHAge1xuICAgIGZpbGw6ICR7b3B0aW9ucy5ub2RlVGV4dENvbG9yIHx8IG9wdGlvbnMudGV4dENvbG9yfTtcbiAgICBjb2xvcjogJHtvcHRpb25zLm5vZGVUZXh0Q29sb3IgfHwgb3B0aW9ucy50ZXh0Q29sb3J9O1xuICB9XG5cbiAgLm5vZGUgcmVjdCxcbiAgLm5vZGUgY2lyY2xlLFxuICAubm9kZSBlbGxpcHNlLFxuICAubm9kZSBwb2x5Z29uLFxuICAubm9kZSBwYXRoIHtcbiAgICBmaWxsOiAke29wdGlvbnMubWFpbkJrZ307XG4gICAgc3Ryb2tlOiAke29wdGlvbnMubm9kZUJvcmRlcn07XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gIH1cbiAgLmZsb3djaGFydC1sYWJlbCB0ZXh0IHtcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICB9XG4gIC8vIC5mbG93Y2hhcnQtbGFiZWwgLnRleHQtb3V0ZXItdHNwYW4ge1xuICAvLyAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gIC8vIH1cbiAgLy8gLmZsb3djaGFydC1sYWJlbCAudGV4dC1pbm5lci10c3BhbiB7XG4gIC8vICAgdGV4dC1hbmNob3I6IHN0YXJ0O1xuICAvLyB9XG5cbiAgLm5vZGUgLmxhYmVsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm5vZGUuY2xpY2thYmxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuYXJyb3doZWFkUGF0aCB7XG4gICAgZmlsbDogJHtvcHRpb25zLmFycm93aGVhZENvbG9yfTtcbiAgfVxuXG4gIC5lZGdlUGF0aCAucGF0aCB7XG4gICAgc3Ryb2tlOiAke29wdGlvbnMubGluZUNvbG9yfTtcbiAgICBzdHJva2Utd2lkdGg6IDIuMHB4O1xuICB9XG5cbiAgLmZsb3djaGFydC1saW5rIHtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy5saW5lQ29sb3J9O1xuICAgIGZpbGw6IG5vbmU7XG4gIH1cblxuICAuZWRnZUxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke29wdGlvbnMuZWRnZUxhYmVsQmFja2dyb3VuZH07XG4gICAgcmVjdCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke29wdGlvbnMuZWRnZUxhYmVsQmFja2dyb3VuZH07XG4gICAgICBmaWxsOiAke29wdGlvbnMuZWRnZUxhYmVsQmFja2dyb3VuZH07XG4gICAgfVxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC8qIEZvciBodG1sIGxhYmVscyBvbmx5ICovXG4gIC5sYWJlbEJrZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtmYWRlKG9wdGlvbnMuZWRnZUxhYmVsQmFja2dyb3VuZCwgMC41KX07XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjpcbiAgfVxuXG4gIC5ub2RlIC5jbHVzdGVyIHtcbiAgICAvLyBmaWxsOiAke2ZhZGUob3B0aW9ucy5tYWluQmtnLCAwLjUpfTtcbiAgICBmaWxsOiAke2ZhZGUob3B0aW9ucy5jbHVzdGVyQmtnLCAwLjUpfTtcbiAgICBzdHJva2U6ICR7ZmFkZShvcHRpb25zLmNsdXN0ZXJCb3JkZXIsIDAuMil9O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDEzcHggMjdweCAtNXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDhweCAxNnB4IC04cHg7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gIH1cblxuICAuY2x1c3RlciB0ZXh0IHtcbiAgICBmaWxsOiAke29wdGlvbnMudGl0bGVDb2xvcn07XG4gIH1cblxuICAuY2x1c3RlciBzcGFuLHAge1xuICAgIGNvbG9yOiAke29wdGlvbnMudGl0bGVDb2xvcn07XG4gIH1cbiAgLyogLmNsdXN0ZXIgZGl2IHtcbiAgICBjb2xvcjogJHtvcHRpb25zLnRpdGxlQ29sb3J9O1xuICB9ICovXG5cbiAgZGl2Lm1lcm1haWRUb29sdGlwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGZvbnQtZmFtaWx5OiAke29wdGlvbnMuZm9udEZhbWlseX07XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICR7b3B0aW9ucy50ZXJ0aWFyeUNvbG9yfTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke29wdGlvbnMuYm9yZGVyMn07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgfVxuXG4gIC5mbG93Y2hhcnRUaXRsZVRleHQge1xuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZpbGw6ICR7b3B0aW9ucy50ZXh0Q29sb3J9O1xuICB9XG5gO1xuY29uc3QgZmxvd1N0eWxlcyA9IGdldFN0eWxlcztcbmZ1bmN0aW9uIGdldE5vZGVGcm9tQmxvY2soYmxvY2ssIGRiMiwgcG9zaXRpb25lZCA9IGZhbHNlKSB7XG4gIHZhciBfYTIsIF9iMiwgX2M7XG4gIGNvbnN0IHZlcnRleCA9IGJsb2NrO1xuICBsZXQgY2xhc3NTdHIgPSBcImRlZmF1bHRcIjtcbiAgaWYgKCgoKF9hMiA9IHZlcnRleCA9PSBudWxsID8gdm9pZCAwIDogdmVydGV4LmNsYXNzZXMpID09IG51bGwgPyB2b2lkIDAgOiBfYTIubGVuZ3RoKSB8fCAwKSA+IDApIHtcbiAgICBjbGFzc1N0ciA9ICgodmVydGV4ID09IG51bGwgPyB2b2lkIDAgOiB2ZXJ0ZXguY2xhc3NlcykgfHwgW10pLmpvaW4oXCIgXCIpO1xuICB9XG4gIGNsYXNzU3RyID0gY2xhc3NTdHIgKyBcIiBmbG93Y2hhcnQtbGFiZWxcIjtcbiAgbGV0IHJhZGl1cyA9IDA7XG4gIGxldCBzaGFwZSA9IFwiXCI7XG4gIGxldCBwYWRkaW5nMjtcbiAgc3dpdGNoICh2ZXJ0ZXgudHlwZSkge1xuICAgIGNhc2UgXCJyb3VuZFwiOlxuICAgICAgcmFkaXVzID0gNTtcbiAgICAgIHNoYXBlID0gXCJyZWN0XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY29tcG9zaXRlXCI6XG4gICAgICByYWRpdXMgPSAwO1xuICAgICAgc2hhcGUgPSBcImNvbXBvc2l0ZVwiO1xuICAgICAgcGFkZGluZzIgPSAwO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInNxdWFyZVwiOlxuICAgICAgc2hhcGUgPSBcInJlY3RcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJkaWFtb25kXCI6XG4gICAgICBzaGFwZSA9IFwicXVlc3Rpb25cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJoZXhhZ29uXCI6XG4gICAgICBzaGFwZSA9IFwiaGV4YWdvblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImJsb2NrX2Fycm93XCI6XG4gICAgICBzaGFwZSA9IFwiYmxvY2tfYXJyb3dcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJvZGRcIjpcbiAgICAgIHNoYXBlID0gXCJyZWN0X2xlZnRfaW52X2Fycm93XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibGVhbl9yaWdodFwiOlxuICAgICAgc2hhcGUgPSBcImxlYW5fcmlnaHRcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsZWFuX2xlZnRcIjpcbiAgICAgIHNoYXBlID0gXCJsZWFuX2xlZnRcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ0cmFwZXpvaWRcIjpcbiAgICAgIHNoYXBlID0gXCJ0cmFwZXpvaWRcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJpbnZfdHJhcGV6b2lkXCI6XG4gICAgICBzaGFwZSA9IFwiaW52X3RyYXBlem9pZFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInJlY3RfbGVmdF9pbnZfYXJyb3dcIjpcbiAgICAgIHNoYXBlID0gXCJyZWN0X2xlZnRfaW52X2Fycm93XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2lyY2xlXCI6XG4gICAgICBzaGFwZSA9IFwiY2lyY2xlXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZWxsaXBzZVwiOlxuICAgICAgc2hhcGUgPSBcImVsbGlwc2VcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdGFkaXVtXCI6XG4gICAgICBzaGFwZSA9IFwic3RhZGl1bVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInN1YnJvdXRpbmVcIjpcbiAgICAgIHNoYXBlID0gXCJzdWJyb3V0aW5lXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY3lsaW5kZXJcIjpcbiAgICAgIHNoYXBlID0gXCJjeWxpbmRlclwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImdyb3VwXCI6XG4gICAgICBzaGFwZSA9IFwicmVjdFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImRvdWJsZWNpcmNsZVwiOlxuICAgICAgc2hhcGUgPSBcImRvdWJsZWNpcmNsZVwiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHNoYXBlID0gXCJyZWN0XCI7XG4gIH1cbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzRnJvbUFycmF5KCh2ZXJ0ZXggPT0gbnVsbCA/IHZvaWQgMCA6IHZlcnRleC5zdHlsZXMpIHx8IFtdKTtcbiAgY29uc3QgdmVydGV4VGV4dCA9IHZlcnRleC5sYWJlbDtcbiAgY29uc3QgYm91bmRzID0gdmVydGV4LnNpemUgfHwgeyB3aWR0aDogMCwgaGVpZ2h0OiAwLCB4OiAwLCB5OiAwIH07XG4gIGNvbnN0IG5vZGUgPSB7XG4gICAgbGFiZWxTdHlsZTogc3R5bGVzLmxhYmVsU3R5bGUsXG4gICAgc2hhcGUsXG4gICAgbGFiZWxUZXh0OiB2ZXJ0ZXhUZXh0LFxuICAgIHJ4OiByYWRpdXMsXG4gICAgcnk6IHJhZGl1cyxcbiAgICBjbGFzczogY2xhc3NTdHIsXG4gICAgc3R5bGU6IHN0eWxlcy5zdHlsZSxcbiAgICBpZDogdmVydGV4LmlkLFxuICAgIGRpcmVjdGlvbnM6IHZlcnRleC5kaXJlY3Rpb25zLFxuICAgIHdpZHRoOiBib3VuZHMud2lkdGgsXG4gICAgaGVpZ2h0OiBib3VuZHMuaGVpZ2h0LFxuICAgIHg6IGJvdW5kcy54LFxuICAgIHk6IGJvdW5kcy55LFxuICAgIHBvc2l0aW9uZWQsXG4gICAgaW50ZXJzZWN0OiB2b2lkIDAsXG4gICAgdHlwZTogdmVydGV4LnR5cGUsXG4gICAgcGFkZGluZzogcGFkZGluZzIgPz8gKCgoX2MgPSAoX2IyID0gZ2V0Q29uZmlnJDEoKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9iMi5ibG9jaykgPT0gbnVsbCA/IHZvaWQgMCA6IF9jLnBhZGRpbmcpIHx8IDApXG4gIH07XG4gIHJldHVybiBub2RlO1xufVxuYXN5bmMgZnVuY3Rpb24gY2FsY3VsYXRlQmxvY2tTaXplKGVsZW0sIGJsb2NrLCBkYjIpIHtcbiAgY29uc3Qgbm9kZSA9IGdldE5vZGVGcm9tQmxvY2soYmxvY2ssIGRiMiwgZmFsc2UpO1xuICBpZiAobm9kZS50eXBlID09PSBcImdyb3VwXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgbm9kZUVsID0gYXdhaXQgaW5zZXJ0Tm9kZShlbGVtLCBub2RlKTtcbiAgY29uc3QgYm91bmRpbmdCb3ggPSBub2RlRWwubm9kZSgpLmdldEJCb3goKTtcbiAgY29uc3Qgb2JqID0gZGIyLmdldEJsb2NrKG5vZGUuaWQpO1xuICBvYmouc2l6ZSA9IHsgd2lkdGg6IGJvdW5kaW5nQm94LndpZHRoLCBoZWlnaHQ6IGJvdW5kaW5nQm94LmhlaWdodCwgeDogMCwgeTogMCwgbm9kZTogbm9kZUVsIH07XG4gIGRiMi5zZXRCbG9jayhvYmopO1xuICBub2RlRWwucmVtb3ZlKCk7XG59XG5hc3luYyBmdW5jdGlvbiBpbnNlcnRCbG9ja1Bvc2l0aW9uZWQoZWxlbSwgYmxvY2ssIGRiMikge1xuICBjb25zdCBub2RlID0gZ2V0Tm9kZUZyb21CbG9jayhibG9jaywgZGIyLCB0cnVlKTtcbiAgY29uc3Qgb2JqID0gZGIyLmdldEJsb2NrKG5vZGUuaWQpO1xuICBpZiAob2JqLnR5cGUgIT09IFwic3BhY2VcIikge1xuICAgIGF3YWl0IGluc2VydE5vZGUoZWxlbSwgbm9kZSk7XG4gICAgYmxvY2suaW50ZXJzZWN0ID0gbm9kZSA9PSBudWxsID8gdm9pZCAwIDogbm9kZS5pbnRlcnNlY3Q7XG4gICAgcG9zaXRpb25Ob2RlKG5vZGUpO1xuICB9XG59XG5hc3luYyBmdW5jdGlvbiBwZXJmb3JtT3BlcmF0aW9ucyhlbGVtLCBibG9ja3MyLCBkYjIsIG9wZXJhdGlvbikge1xuICBmb3IgKGNvbnN0IGJsb2NrIG9mIGJsb2NrczIpIHtcbiAgICBhd2FpdCBvcGVyYXRpb24oZWxlbSwgYmxvY2ssIGRiMik7XG4gICAgaWYgKGJsb2NrLmNoaWxkcmVuKSB7XG4gICAgICBhd2FpdCBwZXJmb3JtT3BlcmF0aW9ucyhlbGVtLCBibG9jay5jaGlsZHJlbiwgZGIyLCBvcGVyYXRpb24pO1xuICAgIH1cbiAgfVxufVxuYXN5bmMgZnVuY3Rpb24gY2FsY3VsYXRlQmxvY2tTaXplcyhlbGVtLCBibG9ja3MyLCBkYjIpIHtcbiAgYXdhaXQgcGVyZm9ybU9wZXJhdGlvbnMoZWxlbSwgYmxvY2tzMiwgZGIyLCBjYWxjdWxhdGVCbG9ja1NpemUpO1xufVxuYXN5bmMgZnVuY3Rpb24gaW5zZXJ0QmxvY2tzKGVsZW0sIGJsb2NrczIsIGRiMikge1xuICBhd2FpdCBwZXJmb3JtT3BlcmF0aW9ucyhlbGVtLCBibG9ja3MyLCBkYjIsIGluc2VydEJsb2NrUG9zaXRpb25lZCk7XG59XG5hc3luYyBmdW5jdGlvbiBpbnNlcnRFZGdlcyhlbGVtLCBlZGdlcywgYmxvY2tzMiwgZGIyLCBpZCkge1xuICBjb25zdCBnID0gbmV3IGdyYXBobGliLkdyYXBoKHtcbiAgICBtdWx0aWdyYXBoOiB0cnVlLFxuICAgIGNvbXBvdW5kOiB0cnVlXG4gIH0pO1xuICBnLnNldEdyYXBoKHtcbiAgICByYW5rZGlyOiBcIlRCXCIsXG4gICAgbm9kZXNlcDogMTAsXG4gICAgcmFua3NlcDogMTAsXG4gICAgbWFyZ2lueDogOCxcbiAgICBtYXJnaW55OiA4XG4gIH0pO1xuICBmb3IgKGNvbnN0IGJsb2NrIG9mIGJsb2NrczIpIHtcbiAgICBpZiAoYmxvY2suc2l6ZSkge1xuICAgICAgZy5zZXROb2RlKGJsb2NrLmlkLCB7XG4gICAgICAgIHdpZHRoOiBibG9jay5zaXplLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGJsb2NrLnNpemUuaGVpZ2h0LFxuICAgICAgICBpbnRlcnNlY3Q6IGJsb2NrLmludGVyc2VjdFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgZWRnZSBvZiBlZGdlcykge1xuICAgIGlmIChlZGdlLnN0YXJ0ICYmIGVkZ2UuZW5kKSB7XG4gICAgICBjb25zdCBzdGFydEJsb2NrID0gZGIyLmdldEJsb2NrKGVkZ2Uuc3RhcnQpO1xuICAgICAgY29uc3QgZW5kQmxvY2sgPSBkYjIuZ2V0QmxvY2soZWRnZS5lbmQpO1xuICAgICAgaWYgKChzdGFydEJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBzdGFydEJsb2NrLnNpemUpICYmIChlbmRCbG9jayA9PSBudWxsID8gdm9pZCAwIDogZW5kQmxvY2suc2l6ZSkpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBzdGFydEJsb2NrLnNpemU7XG4gICAgICAgIGNvbnN0IGVuZCA9IGVuZEJsb2NrLnNpemU7XG4gICAgICAgIGNvbnN0IHBvaW50cyA9IFtcbiAgICAgICAgICB7IHg6IHN0YXJ0LngsIHk6IHN0YXJ0LnkgfSxcbiAgICAgICAgICB7IHg6IHN0YXJ0LnggKyAoZW5kLnggLSBzdGFydC54KSAvIDIsIHk6IHN0YXJ0LnkgKyAoZW5kLnkgLSBzdGFydC55KSAvIDIgfSxcbiAgICAgICAgICB7IHg6IGVuZC54LCB5OiBlbmQueSB9XG4gICAgICAgIF07XG4gICAgICAgIGF3YWl0IGluc2VydEVkZ2UoXG4gICAgICAgICAgZWxlbSxcbiAgICAgICAgICB7IHY6IGVkZ2Uuc3RhcnQsIHc6IGVkZ2UuZW5kLCBuYW1lOiBlZGdlLmlkIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgLi4uZWRnZSxcbiAgICAgICAgICAgIGFycm93VHlwZUVuZDogZWRnZS5hcnJvd1R5cGVFbmQsXG4gICAgICAgICAgICBhcnJvd1R5cGVTdGFydDogZWRnZS5hcnJvd1R5cGVTdGFydCxcbiAgICAgICAgICAgIHBvaW50cyxcbiAgICAgICAgICAgIGNsYXNzZXM6IFwiZWRnZS10aGlja25lc3Mtbm9ybWFsIGVkZ2UtcGF0dGVybi1zb2xpZCBmbG93Y2hhcnQtbGluayBMUy1hMSBMRS1iMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgXCJibG9ja1wiLFxuICAgICAgICAgIGcsXG4gICAgICAgICAgaWRcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGVkZ2UubGFiZWwpIHtcbiAgICAgICAgICBhd2FpdCBpbnNlcnRFZGdlTGFiZWwoZWxlbSwge1xuICAgICAgICAgICAgLi4uZWRnZSxcbiAgICAgICAgICAgIGxhYmVsOiBlZGdlLmxhYmVsLFxuICAgICAgICAgICAgbGFiZWxTdHlsZTogXCJzdHJva2U6ICMzMzM7IHN0cm9rZS13aWR0aDogMS41cHg7ZmlsbDpub25lO1wiLFxuICAgICAgICAgICAgYXJyb3dUeXBlRW5kOiBlZGdlLmFycm93VHlwZUVuZCxcbiAgICAgICAgICAgIGFycm93VHlwZVN0YXJ0OiBlZGdlLmFycm93VHlwZVN0YXJ0LFxuICAgICAgICAgICAgcG9pbnRzLFxuICAgICAgICAgICAgY2xhc3NlczogXCJlZGdlLXRoaWNrbmVzcy1ub3JtYWwgZWRnZS1wYXR0ZXJuLXNvbGlkIGZsb3djaGFydC1saW5rIExTLWExIExFLWIxXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhd2FpdCBwb3NpdGlvbkVkZ2VMYWJlbChcbiAgICAgICAgICAgIHsgLi4uZWRnZSwgeDogcG9pbnRzWzFdLngsIHk6IHBvaW50c1sxXS55IH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9yaWdpbmFsUGF0aDogcG9pbnRzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuY29uc3QgcGFkZGluZyA9ICgoX2IgPSAoX2EgPSBnZXRDb25maWcoKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmJsb2NrKSA9PSBudWxsID8gdm9pZCAwIDogX2IucGFkZGluZykgfHwgODtcbmZ1bmN0aW9uIGNhbGN1bGF0ZUJsb2NrUG9zaXRpb24oY29sdW1ucywgcG9zaXRpb24pIHtcbiAgaWYgKGNvbHVtbnMgPT09IDAgfHwgIU51bWJlci5pc0ludGVnZXIoY29sdW1ucykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb2x1bW5zIG11c3QgYmUgYW4gaW50ZWdlciAhPT0gMC5cIik7XG4gIH1cbiAgaWYgKHBvc2l0aW9uIDwgMCB8fCAhTnVtYmVyLmlzSW50ZWdlcihwb3NpdGlvbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQb3NpdGlvbiBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXIuXCIgKyBwb3NpdGlvbik7XG4gIH1cbiAgaWYgKGNvbHVtbnMgPCAwKSB7XG4gICAgcmV0dXJuIHsgcHg6IHBvc2l0aW9uLCBweTogMCB9O1xuICB9XG4gIGlmIChjb2x1bW5zID09PSAxKSB7XG4gICAgcmV0dXJuIHsgcHg6IDAsIHB5OiBwb3NpdGlvbiB9O1xuICB9XG4gIGNvbnN0IHB4ID0gcG9zaXRpb24gJSBjb2x1bW5zO1xuICBjb25zdCBweSA9IE1hdGguZmxvb3IocG9zaXRpb24gLyBjb2x1bW5zKTtcbiAgcmV0dXJuIHsgcHgsIHB5IH07XG59XG5jb25zdCBnZXRNYXhDaGlsZFNpemUgPSAoYmxvY2spID0+IHtcbiAgbGV0IG1heFdpZHRoID0gMDtcbiAgbGV0IG1heEhlaWdodCA9IDA7XG4gIGZvciAoY29uc3QgY2hpbGQgb2YgYmxvY2suY2hpbGRyZW4pIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHgsIHkgfSA9IGNoaWxkLnNpemUgfHwgeyB3aWR0aDogMCwgaGVpZ2h0OiAwLCB4OiAwLCB5OiAwIH07XG4gICAgbG9nLmRlYnVnKFxuICAgICAgXCJnZXRNYXhDaGlsZFNpemUgYWJjOTUgY2hpbGQ6XCIsXG4gICAgICBjaGlsZC5pZCxcbiAgICAgIFwid2lkdGg6XCIsXG4gICAgICB3aWR0aCxcbiAgICAgIFwiaGVpZ2h0OlwiLFxuICAgICAgaGVpZ2h0LFxuICAgICAgXCJ4OlwiLFxuICAgICAgeCxcbiAgICAgIFwieTpcIixcbiAgICAgIHksXG4gICAgICBjaGlsZC50eXBlXG4gICAgKTtcbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJzcGFjZVwiKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKHdpZHRoID4gbWF4V2lkdGgpIHtcbiAgICAgIG1heFdpZHRoID0gd2lkdGggLyAoYmxvY2sud2lkdGhJbkNvbHVtbnMgfHwgMSk7XG4gICAgfVxuICAgIGlmIChoZWlnaHQgPiBtYXhIZWlnaHQpIHtcbiAgICAgIG1heEhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgd2lkdGg6IG1heFdpZHRoLCBoZWlnaHQ6IG1heEhlaWdodCB9O1xufTtcbmZ1bmN0aW9uIHNldEJsb2NrU2l6ZXMoYmxvY2ssIGRiMiwgc2libGluZ1dpZHRoID0gMCwgc2libGluZ0hlaWdodCA9IDApIHtcbiAgdmFyIF9hMiwgX2IyLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oLCBfaSwgX2osIF9rO1xuICBsb2cuZGVidWcoXG4gICAgXCJzZXRCbG9ja1NpemVzIGFiYzk1IChzdGFydClcIixcbiAgICBibG9jay5pZCxcbiAgICAoX2EyID0gYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfYTIueCxcbiAgICBcImJsb2NrIHdpZHRoID1cIixcbiAgICBibG9jayA9PSBudWxsID8gdm9pZCAwIDogYmxvY2suc2l6ZSxcbiAgICBcInNpZWJsaW5nV2lkdGhcIixcbiAgICBzaWJsaW5nV2lkdGhcbiAgKTtcbiAgaWYgKCEoKF9iMiA9IGJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBibG9jay5zaXplKSA9PSBudWxsID8gdm9pZCAwIDogX2IyLndpZHRoKSkge1xuICAgIGJsb2NrLnNpemUgPSB7XG4gICAgICB3aWR0aDogc2libGluZ1dpZHRoLFxuICAgICAgaGVpZ2h0OiBzaWJsaW5nSGVpZ2h0LFxuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG4gIGxldCBtYXhXaWR0aCA9IDA7XG4gIGxldCBtYXhIZWlnaHQgPSAwO1xuICBpZiAoKChfYyA9IGJsb2NrLmNoaWxkcmVuKSA9PSBudWxsID8gdm9pZCAwIDogX2MubGVuZ3RoKSA+IDApIHtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGJsb2NrLmNoaWxkcmVuKSB7XG4gICAgICBzZXRCbG9ja1NpemVzKGNoaWxkLCBkYjIpO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFNpemUgPSBnZXRNYXhDaGlsZFNpemUoYmxvY2spO1xuICAgIG1heFdpZHRoID0gY2hpbGRTaXplLndpZHRoO1xuICAgIG1heEhlaWdodCA9IGNoaWxkU2l6ZS5oZWlnaHQ7XG4gICAgbG9nLmRlYnVnKFwic2V0QmxvY2tTaXplcyBhYmM5NSBtYXhXaWR0aCBvZlwiLCBibG9jay5pZCwgXCI6cyBjaGlsZHJlbiBpcyBcIiwgbWF4V2lkdGgsIG1heEhlaWdodCk7XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBibG9jay5jaGlsZHJlbikge1xuICAgICAgaWYgKGNoaWxkLnNpemUpIHtcbiAgICAgICAgbG9nLmRlYnVnKFxuICAgICAgICAgIGBhYmM5NSBTZXR0aW5nIHNpemUgb2YgY2hpbGRyZW4gb2YgJHtibG9jay5pZH0gaWQ9JHtjaGlsZC5pZH0gJHttYXhXaWR0aH0gJHttYXhIZWlnaHR9ICR7Y2hpbGQuc2l6ZX1gXG4gICAgICAgICk7XG4gICAgICAgIGNoaWxkLnNpemUud2lkdGggPSBtYXhXaWR0aCAqIChjaGlsZC53aWR0aEluQ29sdW1ucyB8fCAxKSArIHBhZGRpbmcgKiAoKGNoaWxkLndpZHRoSW5Db2x1bW5zIHx8IDEpIC0gMSk7XG4gICAgICAgIGNoaWxkLnNpemUuaGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgICAgICBjaGlsZC5zaXplLnggPSAwO1xuICAgICAgICBjaGlsZC5zaXplLnkgPSAwO1xuICAgICAgICBsb2cuZGVidWcoXG4gICAgICAgICAgYGFiYzk1IHVwZGF0aW5nIHNpemUgb2YgJHtibG9jay5pZH0gY2hpbGRyZW4gY2hpbGQ6JHtjaGlsZC5pZH0gbWF4V2lkdGg6JHttYXhXaWR0aH0gbWF4SGVpZ2h0OiR7bWF4SGVpZ2h0fWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBibG9jay5jaGlsZHJlbikge1xuICAgICAgc2V0QmxvY2tTaXplcyhjaGlsZCwgZGIyLCBtYXhXaWR0aCwgbWF4SGVpZ2h0KTtcbiAgICB9XG4gICAgY29uc3QgY29sdW1ucyA9IGJsb2NrLmNvbHVtbnMgfHwgLTE7XG4gICAgbGV0IG51bUl0ZW1zID0gMDtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGJsb2NrLmNoaWxkcmVuKSB7XG4gICAgICBudW1JdGVtcyArPSBjaGlsZC53aWR0aEluQ29sdW1ucyB8fCAxO1xuICAgIH1cbiAgICBsZXQgeFNpemUgPSBibG9jay5jaGlsZHJlbi5sZW5ndGg7XG4gICAgaWYgKGNvbHVtbnMgPiAwICYmIGNvbHVtbnMgPCBudW1JdGVtcykge1xuICAgICAgeFNpemUgPSBjb2x1bW5zO1xuICAgIH1cbiAgICBibG9jay53aWR0aEluQ29sdW1ucyB8fCAxO1xuICAgIGNvbnN0IHlTaXplID0gTWF0aC5jZWlsKG51bUl0ZW1zIC8geFNpemUpO1xuICAgIGxldCB3aWR0aCA9IHhTaXplICogKG1heFdpZHRoICsgcGFkZGluZykgKyBwYWRkaW5nO1xuICAgIGxldCBoZWlnaHQgPSB5U2l6ZSAqIChtYXhIZWlnaHQgKyBwYWRkaW5nKSArIHBhZGRpbmc7XG4gICAgaWYgKHdpZHRoIDwgc2libGluZ1dpZHRoKSB7XG4gICAgICBsb2cuZGVidWcoXG4gICAgICAgIGBEZXRlY3RlZCB0byBzbWFsbCBzaWVibGluZzogYWJjOTUgJHtibG9jay5pZH0gc2llYmxpbmdXaWR0aCAke3NpYmxpbmdXaWR0aH0gc2llYmxpbmdIZWlnaHQgJHtzaWJsaW5nSGVpZ2h0fSB3aWR0aCAke3dpZHRofWBcbiAgICAgICk7XG4gICAgICB3aWR0aCA9IHNpYmxpbmdXaWR0aDtcbiAgICAgIGhlaWdodCA9IHNpYmxpbmdIZWlnaHQ7XG4gICAgICBjb25zdCBjaGlsZFdpZHRoID0gKHNpYmxpbmdXaWR0aCAtIHhTaXplICogcGFkZGluZyAtIHBhZGRpbmcpIC8geFNpemU7XG4gICAgICBjb25zdCBjaGlsZEhlaWdodCA9IChzaWJsaW5nSGVpZ2h0IC0geVNpemUgKiBwYWRkaW5nIC0gcGFkZGluZykgLyB5U2l6ZTtcbiAgICAgIGxvZy5kZWJ1ZyhcIlNpemUgaW5kYXRhIGFiYzg4XCIsIGJsb2NrLmlkLCBcImNoaWxkV2lkdGhcIiwgY2hpbGRXaWR0aCwgXCJtYXhXaWR0aFwiLCBtYXhXaWR0aCk7XG4gICAgICBsb2cuZGVidWcoXCJTaXplIGluZGF0YSBhYmM4OFwiLCBibG9jay5pZCwgXCJjaGlsZEhlaWdodFwiLCBjaGlsZEhlaWdodCwgXCJtYXhIZWlnaHRcIiwgbWF4SGVpZ2h0KTtcbiAgICAgIGxvZy5kZWJ1ZyhcIlNpemUgaW5kYXRhIGFiYzg4IHhTaXplXCIsIHhTaXplLCBcInBhZGRpbmdcIiwgcGFkZGluZyk7XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGJsb2NrLmNoaWxkcmVuKSB7XG4gICAgICAgIGlmIChjaGlsZC5zaXplKSB7XG4gICAgICAgICAgY2hpbGQuc2l6ZS53aWR0aCA9IGNoaWxkV2lkdGg7XG4gICAgICAgICAgY2hpbGQuc2l6ZS5oZWlnaHQgPSBjaGlsZEhlaWdodDtcbiAgICAgICAgICBjaGlsZC5zaXplLnggPSAwO1xuICAgICAgICAgIGNoaWxkLnNpemUueSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbG9nLmRlYnVnKFxuICAgICAgYGFiYzk1IChmaW5hbGUgY2FsYykgJHtibG9jay5pZH0geFNpemUgJHt4U2l6ZX0geVNpemUgJHt5U2l6ZX0gY29sdW1ucyAke2NvbHVtbnN9JHtibG9jay5jaGlsZHJlbi5sZW5ndGh9IHdpZHRoPSR7TWF0aC5tYXgod2lkdGgsICgoX2QgPSBibG9jay5zaXplKSA9PSBudWxsID8gdm9pZCAwIDogX2Qud2lkdGgpIHx8IDApfWBcbiAgICApO1xuICAgIGlmICh3aWR0aCA8ICgoKF9lID0gYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfZS53aWR0aCkgfHwgMCkpIHtcbiAgICAgIHdpZHRoID0gKChfZiA9IGJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBibG9jay5zaXplKSA9PSBudWxsID8gdm9pZCAwIDogX2Yud2lkdGgpIHx8IDA7XG4gICAgICBjb25zdCBudW0gPSBjb2x1bW5zID4gMCA/IE1hdGgubWluKGJsb2NrLmNoaWxkcmVuLmxlbmd0aCwgY29sdW1ucykgOiBibG9jay5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICBpZiAobnVtID4gMCkge1xuICAgICAgICBjb25zdCBjaGlsZFdpZHRoID0gKHdpZHRoIC0gbnVtICogcGFkZGluZyAtIHBhZGRpbmcpIC8gbnVtO1xuICAgICAgICBsb2cuZGVidWcoXCJhYmM5NSAoZ3Jvd2luZyB0byBmaXQpIHdpZHRoXCIsIGJsb2NrLmlkLCB3aWR0aCwgKF9nID0gYmxvY2suc2l6ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9nLndpZHRoLCBjaGlsZFdpZHRoKTtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBibG9jay5jaGlsZHJlbikge1xuICAgICAgICAgIGlmIChjaGlsZC5zaXplKSB7XG4gICAgICAgICAgICBjaGlsZC5zaXplLndpZHRoID0gY2hpbGRXaWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYmxvY2suc2l6ZSA9IHtcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG4gIGxvZy5kZWJ1ZyhcbiAgICBcInNldEJsb2NrU2l6ZXMgYWJjOTQgKGRvbmUpXCIsXG4gICAgYmxvY2suaWQsXG4gICAgKF9oID0gYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfaC54LFxuICAgIChfaSA9IGJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBibG9jay5zaXplKSA9PSBudWxsID8gdm9pZCAwIDogX2kud2lkdGgsXG4gICAgKF9qID0gYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfai55LFxuICAgIChfayA9IGJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBibG9jay5zaXplKSA9PSBudWxsID8gdm9pZCAwIDogX2suaGVpZ2h0XG4gICk7XG59XG5mdW5jdGlvbiBsYXlvdXRCbG9ja3MoYmxvY2ssIGRiMikge1xuICB2YXIgX2EyLCBfYjIsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2gsIF9pLCBfaiwgX2ssIF9sLCBfbSwgX24sIF9vLCBfcCwgX3E7XG4gIGxvZy5kZWJ1ZyhcbiAgICBgYWJjODUgbGF5b3V0IGJsb2NrcyAoPT5sYXlvdXRCbG9ja3MpICR7YmxvY2suaWR9IHg6ICR7KF9hMiA9IGJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBibG9jay5zaXplKSA9PSBudWxsID8gdm9pZCAwIDogX2EyLnh9IHk6ICR7KF9iMiA9IGJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBibG9jay5zaXplKSA9PSBudWxsID8gdm9pZCAwIDogX2IyLnl9IHdpZHRoOiAkeyhfYyA9IGJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBibG9jay5zaXplKSA9PSBudWxsID8gdm9pZCAwIDogX2Mud2lkdGh9YFxuICApO1xuICBjb25zdCBjb2x1bW5zID0gYmxvY2suY29sdW1ucyB8fCAtMTtcbiAgbG9nLmRlYnVnKFwibGF5b3V0QmxvY2tzIGNvbHVtbnMgYWJjOTVcIiwgYmxvY2suaWQsIFwiPT5cIiwgY29sdW1ucywgYmxvY2spO1xuICBpZiAoYmxvY2suY2hpbGRyZW4gJiYgLy8gZmluZCBtYXggd2lkdGggb2YgY2hpbGRyZW5cbiAgYmxvY2suY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHdpZHRoID0gKChfZSA9IChfZCA9IGJsb2NrID09IG51bGwgPyB2b2lkIDAgOiBibG9jay5jaGlsZHJlblswXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9kLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfZS53aWR0aCkgfHwgMDtcbiAgICBjb25zdCB3aWR0aE9mQ2hpbGRyZW4gPSBibG9jay5jaGlsZHJlbi5sZW5ndGggKiB3aWR0aCArIChibG9jay5jaGlsZHJlbi5sZW5ndGggLSAxKSAqIHBhZGRpbmc7XG4gICAgbG9nLmRlYnVnKFwid2lkdGhPZkNoaWxkcmVuIDg4XCIsIHdpZHRoT2ZDaGlsZHJlbiwgXCJwb3NYXCIpO1xuICAgIGxldCBjb2x1bW5Qb3MgPSAwO1xuICAgIGxvZy5kZWJ1ZyhcImFiYzkxIGJsb2NrPy5zaXplPy54XCIsIGJsb2NrLmlkLCAoX2YgPSBibG9jayA9PSBudWxsID8gdm9pZCAwIDogYmxvY2suc2l6ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9mLngpO1xuICAgIGxldCBzdGFydGluZ1Bvc1ggPSAoKF9nID0gYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfZy54KSA/ICgoX2ggPSBibG9jayA9PSBudWxsID8gdm9pZCAwIDogYmxvY2suc2l6ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9oLngpICsgKC0oKF9pID0gYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfaS53aWR0aCkgLyAyIHx8IDApIDogLXBhZGRpbmc7XG4gICAgbGV0IHJvd1BvcyA9IDA7XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBibG9jay5jaGlsZHJlbikge1xuICAgICAgY29uc3QgcGFyZW50ID0gYmxvY2s7XG4gICAgICBpZiAoIWNoaWxkLnNpemUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCB7IHdpZHRoOiB3aWR0aDIsIGhlaWdodCB9ID0gY2hpbGQuc2l6ZTtcbiAgICAgIGNvbnN0IHsgcHgsIHB5IH0gPSBjYWxjdWxhdGVCbG9ja1Bvc2l0aW9uKGNvbHVtbnMsIGNvbHVtblBvcyk7XG4gICAgICBpZiAocHkgIT0gcm93UG9zKSB7XG4gICAgICAgIHJvd1BvcyA9IHB5O1xuICAgICAgICBzdGFydGluZ1Bvc1ggPSAoKF9qID0gYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfai54KSA/ICgoX2sgPSBibG9jayA9PSBudWxsID8gdm9pZCAwIDogYmxvY2suc2l6ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9rLngpICsgKC0oKF9sID0gYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfbC53aWR0aCkgLyAyIHx8IDApIDogLXBhZGRpbmc7XG4gICAgICAgIGxvZy5kZWJ1ZyhcIk5ldyByb3cgaW4gbGF5b3V0IGZvciBibG9ja1wiLCBibG9jay5pZCwgXCIgYW5kIGNoaWxkIFwiLCBjaGlsZC5pZCwgcm93UG9zKTtcbiAgICAgIH1cbiAgICAgIGxvZy5kZWJ1ZyhcbiAgICAgICAgYGFiYzg5IGxheW91dCBibG9ja3MgKGNoaWxkKSBpZDogJHtjaGlsZC5pZH0gUG9zOiAke2NvbHVtblBvc30gKHB4LCBweSkgJHtweH0sJHtweX0gKCR7KF9tID0gcGFyZW50ID09IG51bGwgPyB2b2lkIDAgOiBwYXJlbnQuc2l6ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9tLnh9LCR7KF9uID0gcGFyZW50ID09IG51bGwgPyB2b2lkIDAgOiBwYXJlbnQuc2l6ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9uLnl9KSBwYXJlbnQ6ICR7cGFyZW50LmlkfSB3aWR0aDogJHt3aWR0aDJ9JHtwYWRkaW5nfWBcbiAgICAgICk7XG4gICAgICBpZiAocGFyZW50LnNpemUpIHtcbiAgICAgICAgY29uc3QgaGFsZldpZHRoID0gd2lkdGgyIC8gMjtcbiAgICAgICAgY2hpbGQuc2l6ZS54ID0gc3RhcnRpbmdQb3NYICsgcGFkZGluZyArIGhhbGZXaWR0aDtcbiAgICAgICAgbG9nLmRlYnVnKFxuICAgICAgICAgIGBhYmM5MSBsYXlvdXQgYmxvY2tzIChjYWxjKSBweCwgcHlpZDoke2NoaWxkLmlkfSBzdGFydGluZ1Bvcz1YJHtzdGFydGluZ1Bvc1h9IG5ldyBzdGFydGluZ1Bvc1gke2NoaWxkLnNpemUueH0gJHtoYWxmV2lkdGh9IHBhZGRpbmc9JHtwYWRkaW5nfSB3aWR0aD0ke3dpZHRoMn0gaGFsZldpZHRoPSR7aGFsZldpZHRofSA9PiB4OiR7Y2hpbGQuc2l6ZS54fSB5OiR7Y2hpbGQuc2l6ZS55fSAke2NoaWxkLndpZHRoSW5Db2x1bW5zfSAod2lkdGggKiAoY2hpbGQ/LncgfHwgMSkpIC8gMiAke3dpZHRoMiAqICgoY2hpbGQgPT0gbnVsbCA/IHZvaWQgMCA6IGNoaWxkLndpZHRoSW5Db2x1bW5zKSB8fCAxKSAvIDJ9YFxuICAgICAgICApO1xuICAgICAgICBzdGFydGluZ1Bvc1ggPSBjaGlsZC5zaXplLnggKyBoYWxmV2lkdGg7XG4gICAgICAgIGNoaWxkLnNpemUueSA9IHBhcmVudC5zaXplLnkgLSBwYXJlbnQuc2l6ZS5oZWlnaHQgLyAyICsgcHkgKiAoaGVpZ2h0ICsgcGFkZGluZykgKyBoZWlnaHQgLyAyICsgcGFkZGluZztcbiAgICAgICAgbG9nLmRlYnVnKFxuICAgICAgICAgIGBhYmM4OCBsYXlvdXQgYmxvY2tzIChjYWxjKSBweCwgcHlpZDoke2NoaWxkLmlkfXN0YXJ0aW5nUG9zWCR7c3RhcnRpbmdQb3NYfSR7cGFkZGluZ30ke2hhbGZXaWR0aH09Png6JHtjaGlsZC5zaXplLnh9eToke2NoaWxkLnNpemUueX0ke2NoaWxkLndpZHRoSW5Db2x1bW5zfSh3aWR0aCAqIChjaGlsZD8udyB8fCAxKSkgLyAyJHt3aWR0aDIgKiAoKGNoaWxkID09IG51bGwgPyB2b2lkIDAgOiBjaGlsZC53aWR0aEluQ29sdW1ucykgfHwgMSkgLyAyfWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZC5jaGlsZHJlbikge1xuICAgICAgICBsYXlvdXRCbG9ja3MoY2hpbGQpO1xuICAgICAgfVxuICAgICAgY29sdW1uUG9zICs9IChjaGlsZCA9PSBudWxsID8gdm9pZCAwIDogY2hpbGQud2lkdGhJbkNvbHVtbnMpIHx8IDE7XG4gICAgICBsb2cuZGVidWcoXCJhYmM4OCBjb2x1bW5zUG9zXCIsIGNoaWxkLCBjb2x1bW5Qb3MpO1xuICAgIH1cbiAgfVxuICBsb2cuZGVidWcoXG4gICAgYGxheW91dCBibG9ja3MgKDw9PWxheW91dEJsb2NrcykgJHtibG9jay5pZH0geDogJHsoX28gPSBibG9jayA9PSBudWxsID8gdm9pZCAwIDogYmxvY2suc2l6ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9vLnh9IHk6ICR7KF9wID0gYmxvY2sgPT0gbnVsbCA/IHZvaWQgMCA6IGJsb2NrLnNpemUpID09IG51bGwgPyB2b2lkIDAgOiBfcC55fSB3aWR0aDogJHsoX3EgPSBibG9jayA9PSBudWxsID8gdm9pZCAwIDogYmxvY2suc2l6ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9xLndpZHRofWBcbiAgKTtcbn1cbmZ1bmN0aW9uIGZpbmRCb3VuZHMoYmxvY2ssIHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSB9ID0geyBtaW5YOiAwLCBtaW5ZOiAwLCBtYXhYOiAwLCBtYXhZOiAwIH0pIHtcbiAgaWYgKGJsb2NrLnNpemUgJiYgYmxvY2suaWQgIT09IFwicm9vdFwiKSB7XG4gICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBibG9jay5zaXplO1xuICAgIGlmICh4IC0gd2lkdGggLyAyIDwgbWluWCkge1xuICAgICAgbWluWCA9IHggLSB3aWR0aCAvIDI7XG4gICAgfVxuICAgIGlmICh5IC0gaGVpZ2h0IC8gMiA8IG1pblkpIHtcbiAgICAgIG1pblkgPSB5IC0gaGVpZ2h0IC8gMjtcbiAgICB9XG4gICAgaWYgKHggKyB3aWR0aCAvIDIgPiBtYXhYKSB7XG4gICAgICBtYXhYID0geCArIHdpZHRoIC8gMjtcbiAgICB9XG4gICAgaWYgKHkgKyBoZWlnaHQgLyAyID4gbWF4WSkge1xuICAgICAgbWF4WSA9IHkgKyBoZWlnaHQgLyAyO1xuICAgIH1cbiAgfVxuICBpZiAoYmxvY2suY2hpbGRyZW4pIHtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGJsb2NrLmNoaWxkcmVuKSB7XG4gICAgICAoeyBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZIH0gPSBmaW5kQm91bmRzKGNoaWxkLCB7IG1pblgsIG1pblksIG1heFgsIG1heFkgfSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZIH07XG59XG5mdW5jdGlvbiBsYXlvdXQoZGIyKSB7XG4gIGNvbnN0IHJvb3QgPSBkYjIuZ2V0QmxvY2soXCJyb290XCIpO1xuICBpZiAoIXJvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgc2V0QmxvY2tTaXplcyhyb290LCBkYjIsIDAsIDApO1xuICBsYXlvdXRCbG9ja3Mocm9vdCk7XG4gIGxvZy5kZWJ1ZyhcImdldEJsb2Nrc1wiLCBKU09OLnN0cmluZ2lmeShyb290LCBudWxsLCAyKSk7XG4gIGNvbnN0IHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSB9ID0gZmluZEJvdW5kcyhyb290KTtcbiAgY29uc3QgaGVpZ2h0ID0gbWF4WSAtIG1pblk7XG4gIGNvbnN0IHdpZHRoID0gbWF4WCAtIG1pblg7XG4gIHJldHVybiB7IHg6IG1pblgsIHk6IG1pblksIHdpZHRoLCBoZWlnaHQgfTtcbn1cbmNvbnN0IGdldENsYXNzZXMgPSBmdW5jdGlvbih0ZXh0LCBkaWFnT2JqKSB7XG4gIHJldHVybiBkaWFnT2JqLmRiLmdldENsYXNzZXMoKTtcbn07XG5jb25zdCBkcmF3ID0gYXN5bmMgZnVuY3Rpb24odGV4dCwgaWQsIF92ZXJzaW9uLCBkaWFnT2JqKSB7XG4gIGNvbnN0IHsgc2VjdXJpdHlMZXZlbCwgYmxvY2s6IGNvbmYgfSA9IGdldENvbmZpZyQxKCk7XG4gIGNvbnN0IGRiMiA9IGRpYWdPYmouZGI7XG4gIGxldCBzYW5kYm94RWxlbWVudDtcbiAgaWYgKHNlY3VyaXR5TGV2ZWwgPT09IFwic2FuZGJveFwiKSB7XG4gICAgc2FuZGJveEVsZW1lbnQgPSBzZWxlY3QoXCIjaVwiICsgaWQpO1xuICB9XG4gIGNvbnN0IHJvb3QgPSBzZWN1cml0eUxldmVsID09PSBcInNhbmRib3hcIiA/IHNlbGVjdChzYW5kYm94RWxlbWVudC5ub2RlcygpWzBdLmNvbnRlbnREb2N1bWVudC5ib2R5KSA6IHNlbGVjdChcImJvZHlcIik7XG4gIGNvbnN0IHN2ZyA9IHNlY3VyaXR5TGV2ZWwgPT09IFwic2FuZGJveFwiID8gcm9vdC5zZWxlY3QoYFtpZD1cIiR7aWR9XCJdYCkgOiBzZWxlY3QoYFtpZD1cIiR7aWR9XCJdYCk7XG4gIGNvbnN0IG1hcmtlcnMgPSBbXCJwb2ludFwiLCBcImNpcmNsZVwiLCBcImNyb3NzXCJdO1xuICBpbnNlcnRNYXJrZXJzKHN2ZywgbWFya2VycywgZGlhZ09iai50eXBlLCBpZCk7XG4gIGNvbnN0IGJsID0gZGIyLmdldEJsb2NrcygpO1xuICBjb25zdCBibEFyciA9IGRiMi5nZXRCbG9ja3NGbGF0KCk7XG4gIGNvbnN0IGVkZ2VzID0gZGIyLmdldEVkZ2VzKCk7XG4gIGNvbnN0IG5vZGVzID0gc3ZnLmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiYmxvY2tcIik7XG4gIGF3YWl0IGNhbGN1bGF0ZUJsb2NrU2l6ZXMobm9kZXMsIGJsLCBkYjIpO1xuICBjb25zdCBib3VuZHMgPSBsYXlvdXQoZGIyKTtcbiAgYXdhaXQgaW5zZXJ0QmxvY2tzKG5vZGVzLCBibCwgZGIyKTtcbiAgYXdhaXQgaW5zZXJ0RWRnZXMobm9kZXMsIGVkZ2VzLCBibEFyciwgZGIyLCBpZCk7XG4gIGlmIChib3VuZHMpIHtcbiAgICBjb25zdCBib3VuZHMyID0gYm91bmRzO1xuICAgIGNvbnN0IG1hZ2ljRmFjdG9yID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCgwLjEyNSAqIChib3VuZHMyLndpZHRoIC8gYm91bmRzMi5oZWlnaHQpKSk7XG4gICAgY29uc3QgaGVpZ2h0ID0gYm91bmRzMi5oZWlnaHQgKyBtYWdpY0ZhY3RvciArIDEwO1xuICAgIGNvbnN0IHdpZHRoID0gYm91bmRzMi53aWR0aCArIDEwO1xuICAgIGNvbnN0IHsgdXNlTWF4V2lkdGggfSA9IGNvbmY7XG4gICAgY29uZmlndXJlU3ZnU2l6ZShzdmcsIGhlaWdodCwgd2lkdGgsICEhdXNlTWF4V2lkdGgpO1xuICAgIGxvZy5kZWJ1ZyhcIkhlcmUgQm91bmRzXCIsIGJvdW5kcywgYm91bmRzMik7XG4gICAgc3ZnLmF0dHIoXG4gICAgICBcInZpZXdCb3hcIixcbiAgICAgIGAke2JvdW5kczIueCAtIDV9ICR7Ym91bmRzMi55IC0gNX0gJHtib3VuZHMyLndpZHRoICsgMTB9ICR7Ym91bmRzMi5oZWlnaHQgKyAxMH1gXG4gICAgKTtcbiAgfVxuICBzY2FsZU9yZGluYWwoc2NoZW1lVGFibGVhdTEwKTtcbn07XG5jb25zdCByZW5kZXJlciA9IHtcbiAgZHJhdyxcbiAgZ2V0Q2xhc3Nlc1xufTtcbmNvbnN0IGRpYWdyYW0gPSB7XG4gIHBhcnNlcjogcGFyc2VyJDEsXG4gIGRiOiBkYiQxLFxuICByZW5kZXJlcixcbiAgc3R5bGVzOiBmbG93U3R5bGVzXG59O1xuZXhwb3J0IHtcbiAgZGlhZ3JhbVxufTtcbiJdLCJuYW1lcyI6WyJnZXRDb25maWciLCJjb21tb24iLCJjbG9uZSIsImxvZyIsImNsZWFyJDEiLCJnZXRDb25maWckMSIsImNoYW5uZWwiLCJraHJvbWEuY2hhbm5lbCIsImtocm9tYS5yZ2JhIiwiZ2V0U3R5bGVzRnJvbUFycmF5IiwiaW5zZXJ0Tm9kZSIsInBvc2l0aW9uTm9kZSIsImdyYXBobGliLkdyYXBoIiwiaW5zZXJ0RWRnZSIsImluc2VydEVkZ2VMYWJlbCIsInBvc2l0aW9uRWRnZUxhYmVsIiwic2VsZWN0IiwiaW5zZXJ0TWFya2VycyIsImNvbmZpZ3VyZVN2Z1NpemUiLCJzY2FsZU9yZGluYWwiLCJzY2hlbWVUYWJsZWF1MTAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBaUJYLElBQUksTUFBTSxHQUFHLFdBQVc7QUFDeEIsRUFBRSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDdkQsTUFBTSxDQUFDO0FBQ1AsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNkLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3hWLEVBQUUsSUFBSSxPQUFPLEdBQUc7QUFDaEIsSUFBSSxLQUFLLEVBQUUsU0FBUyxLQUFLLEdBQUc7QUFDNUIsS0FBSztBQUNMLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDVixJQUFJLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsb0JBQW9CLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO0FBQ24yQixJQUFJLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFO0FBQ3ppQixJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMs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QUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pJLFVBQVUsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDeEUsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHO0FBQ25CLFlBQVksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUU7QUFDcEgsWUFBWSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFO0FBQ3JOLFlBQVksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUs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Q0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMscUNBQXFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFILFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQy9GLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRSxDQUFDO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7QUFDbkYsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7QUFDNUYsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7QUFDNUYsVUFBVSxNQUFNO0FBQ2hCLE9BQU87QUFDUCxLQUFLO0FBQ0wsSUFBSSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFB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LElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLFFBQVEsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkUsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzlCLFVBQVUsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUM1QyxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNsQyxRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUc7QUFDdEIsVUFBVSxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO0FBQzVDLFVBQVUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztBQUN0QyxVQUFVLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVk7QUFDaEQsVUFBVSxXQUFXLEVBQUUsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRztBQUNyTSxTQUFTLENBQUM7QUFDVixRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDakMsVUFBVSxJQUFJLENBQUMsTUFB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QU8sMkJBQTJCLENBQUM7QUFDL0MsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsWUFBWSxPQUFPLFdBQVcsQ0FBQztBQUMvQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsWUFBWSxPQUFPLFdBQVcsQ0FBQztBQUMvQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsWUFBWSxPQUFPLFdBQVcsQ0FBQztBQUMvQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsWUFBWSxPQUFPLFdBQVcsQ0FBQztBQUMvQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsWUFBWSxPQUFPLFdBQVcsQ0FBQztBQUMvQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsWUFBWSxPQUFPLFdBQVcsQ0FBQztBQUMvQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsWUFBWSxPQUFPLFdBQVcsQ0FBQztBQUMvQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsWUFBWSxPQUFPLFdBQVcsQ0FBQztBQUMvQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsWUFBWSxPQUFPLFdBQVcsQ0FBQztBQUMvQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0MsWUFBWSxPQUFPLFdBQVcsQ0FBQztBQUMvQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsWUFBWSxPQUFPLFdBQVcsQ0FBQztBQUMvQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsWUFBWSxPQUFPLFdBQVcsQ0FBQztBQUMvQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsWUFBWSxPQUFPLFdBQVcsQ0FBQztBQUMvQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsWUFBWSxPQUFPLFdBQVcsQ0FBQztBQUMvQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0MsWUFBWSxPQUFPLFdBQVcsQ0FBQztBQUMvQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsWUFBWSxPQUFPLFdBQVcsQ0FBQztBQUMvQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0MsWUFBWSxPQUFPLFdBQVcsQ0FBQztBQUMvQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDN0MsWUFBWSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxFQUFF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QUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLHFCQUFxQixFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUU7QUFDM3VDLEtBQUssQ0FBQztBQUNOLElBQUksT0FBTyxNQUFNLENBQUM7QUFDbEIsR0FBRyxFQUFFLENBQUM7QUFDTixFQUFFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLEVBQUUsU0FBUyxNQUFNLEdBQUc7QUFDcEIsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNqQixHQUFHO0FBQ0gsRUFBRSxNQUFNLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUM3QixFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FB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RSxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQzlILFFBQVEsS0FBSyxNQUFNLEtBQUssSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQzVDLFVBQVUsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQzFCLFlBQVksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO0FBQzFDLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUc7QUFDakIsTUFBTSxLQUFLO0FBQ1gsTUFBTSxNQUFNO0FBQ1osTUFBTSxDQUFDLEVBQUUsQ0FBQztBQUNWLE1BQU0sQ0FBQyxFQUFFLENBQUM7QUFDVixLQUFLLENBQUM7QUFDTixHQUFHO0FBQ0gsRUFBRUEsV0FBRyxDQUFDLEtBQUs7QUFDWCxJQUFJLDRCQUE0QjtBQUNoQyxJQUFJLEtBQUssQ0FBQyxFQUFFO0FBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3RFLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSztBQUMxRSxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDdEUsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNO0FBQzNFLEdBQUcsQ0FBQztBQUNKLENBQUM7QUFDRCxTQUFTLFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO0FBQ2xDLEVBQUUsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQzNFLEVBQUVBLFdBQUcsQ0FBQyxLQUFLO0FBQ1gsSUFBSSxDQUFDLHFDQUFxQyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3UixHQUFHLENBQUM7QUFDSixFQUFFLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdEMsRUFBRUEsV0FBRyxDQUFDLEtB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LEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBQ3JRLFFBQVFBLFdBQUcsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM1RixPQUFPO0FBQ1AsTUFBTUEsV0FBRyxDQUFDLEtBQUs7QUFDZixRQUFRLENBQUMsZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsTUFBTSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxNQUFNLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlSLE9BQU8sQ0FBQztBQUNSLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQ3ZC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LEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwUixHQUFHLENBQUM7QUFDSixDQUFDO0FBQ0QsU0FBUyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDaEcsRUFBRSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQUU7QUFDekMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztBQUMvQyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFO0FBQzlCLE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLEtBQUs7QUFDTCxJQUFJLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFO0FBQy9CLE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLEtBQUs7QUFDTCxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFO0FBQzlCLE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLEtBQUs7QUFDTCxJQUFJLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFO0FBQy9CLE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLEtB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
