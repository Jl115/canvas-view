'use strict';

var index = require('./index-deb671d6.js');
require('./main-5c8f274d.js');
require('obsidian');

var parser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [6, 9, 10];
  var parser2 = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "start": 3, "info": 4, "document": 5, "EOF": 6, "line": 7, "statement": 8, "NL": 9, "showInfo": 10, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 4: "info", 6: "EOF", 9: "NL", 10: "showInfo" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 1], [7, 1], [8, 1]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      $$.length - 1;
      switch (yystate) {
        case 1:
          return yy;
        case 4:
          break;
        case 6:
          yy.setInfo(true);
          break;
      }
    },
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, o($V0, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: 6, 9: [1, 7], 10: [1, 8] }, { 1: [2, 1] }, o($V0, [2, 3]), o($V0, [2, 4]), o($V0, [2, 5]), o($V0, [2, 6])],
    defaultActions: { 4: [2, 1] },
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
            return 4;
          case 1:
            return 9;
          case 2:
            return "space";
          case 3:
            return 10;
          case 4:
            return 6;
          case 5:
            return "TXT";
        }
      },
      rules: [/^(?:info\b)/i, /^(?:[\s\n\r]+)/i, /^(?:[\s]+)/i, /^(?:showInfo\b)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { "INITIAL": { "rules": [0, 1, 2, 3, 4, 5], "inclusive": true } }
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
const DEFAULT_INFO_DB = {
  info: false
};
let info = DEFAULT_INFO_DB.info;
const setInfo = (toggle) => {
  info = toggle;
};
const getInfo = () => info;
const clear = () => {
  info = DEFAULT_INFO_DB.info;
};
const db = {
  clear,
  setInfo,
  getInfo
};
const draw = (text, id, version) => {
  index.log$1.debug("rendering info diagram\n" + text);
  const svg = index.selectSvgElement(id);
  index.configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
};
const renderer = { draw };
const diagram = {
  parser: parser$1,
  db,
  renderer
};

exports.diagram = diagram;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mb0RpYWdyYW0tZjhmNzY3OTAtNTc4YTlmMTUuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9tZXJtYWlkL2Rpc3QvaW5mb0RpYWdyYW0tZjhmNzY3OTAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbCBhcyBsb2csIEEgYXMgc2VsZWN0U3ZnRWxlbWVudCwgaSBhcyBjb25maWd1cmVTdmdTaXplIH0gZnJvbSBcIi4vbWVybWFpZC1iNTg2MGI1NC5qc1wiO1xuaW1wb3J0IFwidHMtZGVkZW50XCI7XG5pbXBvcnQgXCJkYXlqc1wiO1xuaW1wb3J0IFwiQGJyYWludHJlZS9zYW5pdGl6ZS11cmxcIjtcbmltcG9ydCBcImQzXCI7XG5pbXBvcnQgXCJkb21wdXJpZnlcIjtcbmltcG9ydCBcImtocm9tYVwiO1xuaW1wb3J0IFwibG9kYXNoLWVzL21lbW9pemUuanNcIjtcbmltcG9ydCBcImxvZGFzaC1lcy9tZXJnZS5qc1wiO1xuaW1wb3J0IFwic3R5bGlzXCI7XG5pbXBvcnQgXCJsb2Rhc2gtZXMvaXNFbXB0eS5qc1wiO1xudmFyIHBhcnNlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbyA9IGZ1bmN0aW9uKGssIHYsIG8yLCBsKSB7XG4gICAgZm9yIChvMiA9IG8yIHx8IHt9LCBsID0gay5sZW5ndGg7IGwtLTsgbzJba1tsXV0gPSB2KVxuICAgICAgO1xuICAgIHJldHVybiBvMjtcbiAgfSwgJFYwID0gWzYsIDksIDEwXTtcbiAgdmFyIHBhcnNlcjIgPSB7XG4gICAgdHJhY2U6IGZ1bmN0aW9uIHRyYWNlKCkge1xuICAgIH0sXG4gICAgeXk6IHt9LFxuICAgIHN5bWJvbHNfOiB7IFwiZXJyb3JcIjogMiwgXCJzdGFydFwiOiAzLCBcImluZm9cIjogNCwgXCJkb2N1bWVudFwiOiA1LCBcIkVPRlwiOiA2LCBcImxpbmVcIjogNywgXCJzdGF0ZW1lbnRcIjogOCwgXCJOTFwiOiA5LCBcInNob3dJbmZvXCI6IDEwLCBcIiRhY2NlcHRcIjogMCwgXCIkZW5kXCI6IDEgfSxcbiAgICB0ZXJtaW5hbHNfOiB7IDI6IFwiZXJyb3JcIiwgNDogXCJpbmZvXCIsIDY6IFwiRU9GXCIsIDk6IFwiTkxcIiwgMTA6IFwic2hvd0luZm9cIiB9LFxuICAgIHByb2R1Y3Rpb25zXzogWzAsIFszLCAzXSwgWzUsIDBdLCBbNSwgMl0sIFs3LCAxXSwgWzcsIDFdLCBbOCwgMV1dLFxuICAgIHBlcmZvcm1BY3Rpb246IGZ1bmN0aW9uIGFub255bW91cyh5eXRleHQsIHl5bGVuZywgeXlsaW5lbm8sIHl5LCB5eXN0YXRlLCAkJCwgXyQpIHtcbiAgICAgICQkLmxlbmd0aCAtIDE7XG4gICAgICBzd2l0Y2ggKHl5c3RhdGUpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHJldHVybiB5eTtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgeXkuc2V0SW5mbyh0cnVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuICAgIHRhYmxlOiBbeyAzOiAxLCA0OiBbMSwgMl0gfSwgeyAxOiBbM10gfSwgbygkVjAsIFsyLCAyXSwgeyA1OiAzIH0pLCB7IDY6IFsxLCA0XSwgNzogNSwgODogNiwgOTogWzEsIDddLCAxMDogWzEsIDhdIH0sIHsgMTogWzIsIDFdIH0sIG8oJFYwLCBbMiwgM10pLCBvKCRWMCwgWzIsIDRdKSwgbygkVjAsIFsyLCA1XSksIG8oJFYwLCBbMiwgNl0pXSxcbiAgICBkZWZhdWx0QWN0aW9uczogeyA0OiBbMiwgMV0gfSxcbiAgICBwYXJzZUVycm9yOiBmdW5jdGlvbiBwYXJzZUVycm9yKHN0ciwgaGFzaCkge1xuICAgICAgaWYgKGhhc2gucmVjb3ZlcmFibGUpIHtcbiAgICAgICAgdGhpcy50cmFjZShzdHIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKHN0cik7XG4gICAgICAgIGVycm9yLmhhc2ggPSBoYXNoO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShpbnB1dCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzLCBzdGFjayA9IFswXSwgdHN0YWNrID0gW10sIHZzdGFjayA9IFtudWxsXSwgbHN0YWNrID0gW10sIHRhYmxlID0gdGhpcy50YWJsZSwgeXl0ZXh0ID0gXCJcIiwgeXlsaW5lbm8gPSAwLCB5eWxlbmcgPSAwLCBURVJST1IgPSAyLCBFT0YgPSAxO1xuICAgICAgdmFyIGFyZ3MgPSBsc3RhY2suc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgdmFyIGxleGVyMiA9IE9iamVjdC5jcmVhdGUodGhpcy5sZXhlcik7XG4gICAgICB2YXIgc2hhcmVkU3RhdGUgPSB7IHl5OiB7fSB9O1xuICAgICAgZm9yICh2YXIgayBpbiB0aGlzLnl5KSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy55eSwgaykpIHtcbiAgICAgICAgICBzaGFyZWRTdGF0ZS55eVtrXSA9IHRoaXMueXlba107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxleGVyMi5zZXRJbnB1dChpbnB1dCwgc2hhcmVkU3RhdGUueXkpO1xuICAgICAgc2hhcmVkU3RhdGUueXkubGV4ZXIgPSBsZXhlcjI7XG4gICAgICBzaGFyZWRTdGF0ZS55eS5wYXJzZXIgPSB0aGlzO1xuICAgICAgaWYgKHR5cGVvZiBsZXhlcjIueXlsbG9jID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgbGV4ZXIyLnl5bGxvYyA9IHt9O1xuICAgICAgfVxuICAgICAgdmFyIHl5bG9jID0gbGV4ZXIyLnl5bGxvYztcbiAgICAgIGxzdGFjay5wdXNoKHl5bG9jKTtcbiAgICAgIHZhciByYW5nZXMgPSBsZXhlcjIub3B0aW9ucyAmJiBsZXhlcjIub3B0aW9ucy5yYW5nZXM7XG4gICAgICBpZiAodHlwZW9mIHNoYXJlZFN0YXRlLnl5LnBhcnNlRXJyb3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aGlzLnBhcnNlRXJyb3IgPSBzaGFyZWRTdGF0ZS55eS5wYXJzZUVycm9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYXJzZUVycm9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLnBhcnNlRXJyb3I7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBsZXgoKSB7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgdG9rZW4gPSB0c3RhY2sucG9wKCkgfHwgbGV4ZXIyLmxleCgpIHx8IEVPRjtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICB0c3RhY2sgPSB0b2tlbjtcbiAgICAgICAgICAgIHRva2VuID0gdHN0YWNrLnBvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0b2tlbiA9IHNlbGYuc3ltYm9sc19bdG9rZW5dIHx8IHRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgIH1cbiAgICAgIHZhciBzeW1ib2wsIHN0YXRlLCBhY3Rpb24sIHIsIHl5dmFsID0ge30sIHAsIGxlbiwgbmV3U3RhdGUsIGV4cGVjdGVkO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgc3RhdGUgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdKSB7XG4gICAgICAgICAgYWN0aW9uID0gdGhpcy5kZWZhdWx0QWN0aW9uc1tzdGF0ZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHN5bWJvbCA9PT0gbnVsbCB8fCB0eXBlb2Ygc3ltYm9sID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHN5bWJvbCA9IGxleCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhY3Rpb24gPSB0YWJsZVtzdGF0ZV0gJiYgdGFibGVbc3RhdGVdW3N5bWJvbF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09IFwidW5kZWZpbmVkXCIgfHwgIWFjdGlvbi5sZW5ndGggfHwgIWFjdGlvblswXSkge1xuICAgICAgICAgIHZhciBlcnJTdHIgPSBcIlwiO1xuICAgICAgICAgIGV4cGVjdGVkID0gW107XG4gICAgICAgICAgZm9yIChwIGluIHRhYmxlW3N0YXRlXSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGVybWluYWxzX1twXSAmJiBwID4gVEVSUk9SKSB7XG4gICAgICAgICAgICAgIGV4cGVjdGVkLnB1c2goXCInXCIgKyB0aGlzLnRlcm1pbmFsc19bcF0gKyBcIidcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChsZXhlcjIuc2hvd1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICBlcnJTdHIgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoeXlsaW5lbm8gKyAxKSArIFwiOlxcblwiICsgbGV4ZXIyLnNob3dQb3NpdGlvbigpICsgXCJcXG5FeHBlY3RpbmcgXCIgKyBleHBlY3RlZC5qb2luKFwiLCBcIikgKyBcIiwgZ290ICdcIiArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgXCInXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVyclN0ciA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArICh5eWxpbmVubyArIDEpICsgXCI6IFVuZXhwZWN0ZWQgXCIgKyAoc3ltYm9sID09IEVPRiA/IFwiZW5kIG9mIGlucHV0XCIgOiBcIidcIiArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgXCInXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnBhcnNlRXJyb3IoZXJyU3RyLCB7XG4gICAgICAgICAgICB0ZXh0OiBsZXhlcjIubWF0Y2gsXG4gICAgICAgICAgICB0b2tlbjogdGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sLFxuICAgICAgICAgICAgbGluZTogbGV4ZXIyLnl5bGluZW5vLFxuICAgICAgICAgICAgbG9jOiB5eWxvYyxcbiAgICAgICAgICAgIGV4cGVjdGVkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvblswXSBpbnN0YW5jZW9mIEFycmF5ICYmIGFjdGlvbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyc2UgRXJyb3I6IG11bHRpcGxlIGFjdGlvbnMgcG9zc2libGUgYXQgc3RhdGU6IFwiICsgc3RhdGUgKyBcIiwgdG9rZW46IFwiICsgc3ltYm9sKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGFjdGlvblswXSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHN0YWNrLnB1c2goc3ltYm9sKTtcbiAgICAgICAgICAgIHZzdGFjay5wdXNoKGxleGVyMi55eXRleHQpO1xuICAgICAgICAgICAgbHN0YWNrLnB1c2gobGV4ZXIyLnl5bGxvYyk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGFjdGlvblsxXSk7XG4gICAgICAgICAgICBzeW1ib2wgPSBudWxsO1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB5eWxlbmcgPSBsZXhlcjIueXlsZW5nO1xuICAgICAgICAgICAgICB5eXRleHQgPSBsZXhlcjIueXl0ZXh0O1xuICAgICAgICAgICAgICB5eWxpbmVubyA9IGxleGVyMi55eWxpbmVubztcbiAgICAgICAgICAgICAgeXlsb2MgPSBsZXhlcjIueXlsbG9jO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgbGVuID0gdGhpcy5wcm9kdWN0aW9uc19bYWN0aW9uWzFdXVsxXTtcbiAgICAgICAgICAgIHl5dmFsLiQgPSB2c3RhY2tbdnN0YWNrLmxlbmd0aCAtIGxlbl07XG4gICAgICAgICAgICB5eXZhbC5fJCA9IHtcbiAgICAgICAgICAgICAgZmlyc3RfbGluZTogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5maXJzdF9saW5lLFxuICAgICAgICAgICAgICBsYXN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9saW5lLFxuICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5sYXN0X2NvbHVtblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChyYW5nZXMpIHtcbiAgICAgICAgICAgICAgeXl2YWwuXyQucmFuZ2UgPSBbXG4gICAgICAgICAgICAgICAgbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5yYW5nZVswXSxcbiAgICAgICAgICAgICAgICBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLnJhbmdlWzFdXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByID0gdGhpcy5wZXJmb3JtQWN0aW9uLmFwcGx5KHl5dmFsLCBbXG4gICAgICAgICAgICAgIHl5dGV4dCxcbiAgICAgICAgICAgICAgeXlsZW5nLFxuICAgICAgICAgICAgICB5eWxpbmVubyxcbiAgICAgICAgICAgICAgc2hhcmVkU3RhdGUueXksXG4gICAgICAgICAgICAgIGFjdGlvblsxXSxcbiAgICAgICAgICAgICAgdnN0YWNrLFxuICAgICAgICAgICAgICBsc3RhY2tcbiAgICAgICAgICAgIF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5zbGljZSgwLCAtMSAqIGxlbiAqIDIpO1xuICAgICAgICAgICAgICB2c3RhY2sgPSB2c3RhY2suc2xpY2UoMCwgLTEgKiBsZW4pO1xuICAgICAgICAgICAgICBsc3RhY2sgPSBsc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhY2sucHVzaCh0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzBdKTtcbiAgICAgICAgICAgIHZzdGFjay5wdXNoKHl5dmFsLiQpO1xuICAgICAgICAgICAgbHN0YWNrLnB1c2goeXl2YWwuXyQpO1xuICAgICAgICAgICAgbmV3U3RhdGUgPSB0YWJsZVtzdGFja1tzdGFjay5sZW5ndGggLSAyXV1bc3RhY2tbc3RhY2subGVuZ3RoIC0gMV1dO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXdTdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuICB2YXIgbGV4ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGV4ZXIyID0ge1xuICAgICAgRU9GOiAxLFxuICAgICAgcGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcbiAgICAgICAgaWYgKHRoaXMueXkucGFyc2VyKSB7XG4gICAgICAgICAgdGhpcy55eS5wYXJzZXIucGFyc2VFcnJvcihzdHIsIGhhc2gpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzdHIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcmVzZXRzIHRoZSBsZXhlciwgc2V0cyBuZXcgaW5wdXRcbiAgICAgIHNldElucHV0OiBmdW5jdGlvbihpbnB1dCwgeXkpIHtcbiAgICAgICAgdGhpcy55eSA9IHl5IHx8IHRoaXMueXkgfHwge307XG4gICAgICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG4gICAgICAgIHRoaXMuX21vcmUgPSB0aGlzLl9iYWNrdHJhY2sgPSB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy55eWxpbmVubyA9IHRoaXMueXlsZW5nID0gMDtcbiAgICAgICAgdGhpcy55eXRleHQgPSB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoID0gXCJcIjtcbiAgICAgICAgdGhpcy5jb25kaXRpb25TdGFjayA9IFtcIklOSVRJQUxcIl07XG4gICAgICAgIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgIGZpcnN0X2xpbmU6IDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiAwLFxuICAgICAgICAgIGxhc3RfbGluZTogMSxcbiAgICAgICAgICBsYXN0X2NvbHVtbjogMFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gWzAsIDBdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gY29uc3VtZXMgYW5kIHJldHVybnMgb25lIGNoYXIgZnJvbSB0aGUgaW5wdXRcbiAgICAgIGlucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy5faW5wdXRbMF07XG4gICAgICAgIHRoaXMueXl0ZXh0ICs9IGNoO1xuICAgICAgICB0aGlzLnl5bGVuZysrO1xuICAgICAgICB0aGlzLm9mZnNldCsrO1xuICAgICAgICB0aGlzLm1hdGNoICs9IGNoO1xuICAgICAgICB0aGlzLm1hdGNoZWQgKz0gY2g7XG4gICAgICAgIHZhciBsaW5lcyA9IGNoLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgaWYgKGxpbmVzKSB7XG4gICAgICAgICAgdGhpcy55eWxpbmVubysrO1xuICAgICAgICAgIHRoaXMueXlsbG9jLmxhc3RfbGluZSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMueXlsbG9jLmxhc3RfY29sdW1uKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZVsxXSsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UoMSk7XG4gICAgICAgIHJldHVybiBjaDtcbiAgICAgIH0sXG4gICAgICAvLyB1bnNoaWZ0cyBvbmUgY2hhciAob3IgYSBzdHJpbmcpIGludG8gdGhlIGlucHV0XG4gICAgICB1bnB1dDogZnVuY3Rpb24oY2gpIHtcbiAgICAgICAgdmFyIGxlbiA9IGNoLmxlbmd0aDtcbiAgICAgICAgdmFyIGxpbmVzID0gY2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSBjaCArIHRoaXMuX2lucHV0O1xuICAgICAgICB0aGlzLnl5dGV4dCA9IHRoaXMueXl0ZXh0LnN1YnN0cigwLCB0aGlzLnl5dGV4dC5sZW5ndGggLSBsZW4pO1xuICAgICAgICB0aGlzLm9mZnNldCAtPSBsZW47XG4gICAgICAgIHZhciBvbGRMaW5lcyA9IHRoaXMubWF0Y2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5tYXRjaCA9IHRoaXMubWF0Y2guc3Vic3RyKDAsIHRoaXMubWF0Y2gubGVuZ3RoIC0gMSk7XG4gICAgICAgIHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIDEpO1xuICAgICAgICBpZiAobGluZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHRoaXMueXlsaW5lbm8gLT0gbGluZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgciA9IHRoaXMueXlsbG9jLnJhbmdlO1xuICAgICAgICB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgbGFzdF9jb2x1bW46IGxpbmVzID8gKGxpbmVzLmxlbmd0aCA9PT0gb2xkTGluZXMubGVuZ3RoID8gdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIDogMCkgKyBvbGRMaW5lc1tvbGRMaW5lcy5sZW5ndGggLSBsaW5lcy5sZW5ndGhdLmxlbmd0aCAtIGxpbmVzWzBdLmxlbmd0aCA6IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiAtIGxlblxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3JbMF0sIHJbMF0gKyB0aGlzLnl5bGVuZyAtIGxlbl07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gYWN0aW9uLCBjYWNoZXMgbWF0Y2hlZCB0ZXh0IGFuZCBhcHBlbmRzIGl0IG9uIG5leHQgYWN0aW9uXG4gICAgICBtb3JlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fbW9yZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gYWN0aW9uLCBzaWduYWxzIHRoZSBsZXhlciB0aGF0IHRoaXMgcnVsZSBmYWlscyB0byBtYXRjaCB0aGUgaW5wdXQsIHNvIHRoZSBuZXh0IG1hdGNoaW5nIHJ1bGUgKHJlZ2V4KSBzaG91bGQgYmUgdGVzdGVkIGluc3RlYWQuXG4gICAgICByZWplY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcikge1xuICAgICAgICAgIHRoaXMuX2JhY2t0cmFjayA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBcIi4gWW91IGNhbiBvbmx5IGludm9rZSByZWplY3QoKSBpbiB0aGUgbGV4ZXIgd2hlbiB0aGUgbGV4ZXIgaXMgb2YgdGhlIGJhY2t0cmFja2luZyBwZXJzdWFzaW9uIChvcHRpb25zLmJhY2t0cmFja19sZXhlciA9IHRydWUpLlxcblwiICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIHJldGFpbiBmaXJzdCBuIGNoYXJhY3RlcnMgb2YgdGhlIG1hdGNoXG4gICAgICBsZXNzOiBmdW5jdGlvbihuKSB7XG4gICAgICAgIHRoaXMudW5wdXQodGhpcy5tYXRjaC5zbGljZShuKSk7XG4gICAgICB9LFxuICAgICAgLy8gZGlzcGxheXMgYWxyZWFkeSBtYXRjaGVkIGlucHV0LCBpLmUuIGZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgcGFzdElucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHBhc3QgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSB0aGlzLm1hdGNoLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiAocGFzdC5sZW5ndGggPiAyMCA/IFwiLi4uXCIgOiBcIlwiKSArIHBhc3Quc3Vic3RyKC0yMCkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIHVwY29taW5nIGlucHV0LCBpLmUuIGZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgdXBjb21pbmdJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBuZXh0ID0gdGhpcy5tYXRjaDtcbiAgICAgICAgaWYgKG5leHQubGVuZ3RoIDwgMjApIHtcbiAgICAgICAgICBuZXh0ICs9IHRoaXMuX2lucHV0LnN1YnN0cigwLCAyMCAtIG5leHQubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG5leHQuc3Vic3RyKDAsIDIwKSArIChuZXh0Lmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICB9LFxuICAgICAgLy8gZGlzcGxheXMgdGhlIGNoYXJhY3RlciBwb3NpdGlvbiB3aGVyZSB0aGUgbGV4aW5nIGVycm9yIG9jY3VycmVkLCBpLmUuIGZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgc2hvd1Bvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHByZSA9IHRoaXMucGFzdElucHV0KCk7XG4gICAgICAgIHZhciBjID0gbmV3IEFycmF5KHByZS5sZW5ndGggKyAxKS5qb2luKFwiLVwiKTtcbiAgICAgICAgcmV0dXJuIHByZSArIHRoaXMudXBjb21pbmdJbnB1dCgpICsgXCJcXG5cIiArIGMgKyBcIl5cIjtcbiAgICAgIH0sXG4gICAgICAvLyB0ZXN0IHRoZSBsZXhlZCB0b2tlbjogcmV0dXJuIEZBTFNFIHdoZW4gbm90IGEgbWF0Y2gsIG90aGVyd2lzZSByZXR1cm4gdG9rZW5cbiAgICAgIHRlc3RfbWF0Y2g6IGZ1bmN0aW9uKG1hdGNoLCBpbmRleGVkX3J1bGUpIHtcbiAgICAgICAgdmFyIHRva2VuLCBsaW5lcywgYmFja3VwO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcikge1xuICAgICAgICAgIGJhY2t1cCA9IHtcbiAgICAgICAgICAgIHl5bGluZW5vOiB0aGlzLnl5bGluZW5vLFxuICAgICAgICAgICAgeXlsbG9jOiB7XG4gICAgICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICAgIGxhc3RfbGluZTogdGhpcy5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogdGhpcy55eWxsb2MubGFzdF9jb2x1bW5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5eXRleHQ6IHRoaXMueXl0ZXh0LFxuICAgICAgICAgICAgbWF0Y2g6IHRoaXMubWF0Y2gsXG4gICAgICAgICAgICBtYXRjaGVzOiB0aGlzLm1hdGNoZXMsXG4gICAgICAgICAgICBtYXRjaGVkOiB0aGlzLm1hdGNoZWQsXG4gICAgICAgICAgICB5eWxlbmc6IHRoaXMueXlsZW5nLFxuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgICAgICAgIF9tb3JlOiB0aGlzLl9tb3JlLFxuICAgICAgICAgICAgX2lucHV0OiB0aGlzLl9pbnB1dCxcbiAgICAgICAgICAgIHl5OiB0aGlzLnl5LFxuICAgICAgICAgICAgY29uZGl0aW9uU3RhY2s6IHRoaXMuY29uZGl0aW9uU3RhY2suc2xpY2UoMCksXG4gICAgICAgICAgICBkb25lOiB0aGlzLmRvbmVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgICBiYWNrdXAueXlsbG9jLnJhbmdlID0gdGhpcy55eWxsb2MucmFuZ2Uuc2xpY2UoMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxpbmVzID0gbWF0Y2hbMF0ubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO1xuICAgICAgICBpZiAobGluZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGluZW5vICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5sYXN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiBsaW5lcyA/IGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdLmxlbmd0aCAtIGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdLm1hdGNoKC9cXHI/XFxuPy8pWzBdLmxlbmd0aCA6IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uICsgbWF0Y2hbMF0ubGVuZ3RoXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMueXl0ZXh0ICs9IG1hdGNoWzBdO1xuICAgICAgICB0aGlzLm1hdGNoICs9IG1hdGNoWzBdO1xuICAgICAgICB0aGlzLm1hdGNoZXMgPSBtYXRjaDtcbiAgICAgICAgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGg7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbdGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICs9IHRoaXMueXlsZW5nXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tb3JlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2JhY2t0cmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKG1hdGNoWzBdLmxlbmd0aCk7XG4gICAgICAgIHRoaXMubWF0Y2hlZCArPSBtYXRjaFswXTtcbiAgICAgICAgdG9rZW4gPSB0aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh0aGlzLCB0aGlzLnl5LCB0aGlzLCBpbmRleGVkX3J1bGUsIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSk7XG4gICAgICAgIGlmICh0aGlzLmRvbmUgJiYgdGhpcy5faW5wdXQpIHtcbiAgICAgICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYmFja3RyYWNrKSB7XG4gICAgICAgICAgZm9yICh2YXIgayBpbiBiYWNrdXApIHtcbiAgICAgICAgICAgIHRoaXNba10gPSBiYWNrdXBba107XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggaW4gaW5wdXRcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5faW5wdXQpIHtcbiAgICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0b2tlbiwgbWF0Y2gsIHRlbXBNYXRjaCwgaW5kZXg7XG4gICAgICAgIGlmICghdGhpcy5fbW9yZSkge1xuICAgICAgICAgIHRoaXMueXl0ZXh0ID0gXCJcIjtcbiAgICAgICAgICB0aGlzLm1hdGNoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcnVsZXMgPSB0aGlzLl9jdXJyZW50UnVsZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRlbXBNYXRjaCA9IHRoaXMuX2lucHV0Lm1hdGNoKHRoaXMucnVsZXNbcnVsZXNbaV1dKTtcbiAgICAgICAgICBpZiAodGVtcE1hdGNoICYmICghbWF0Y2ggfHwgdGVtcE1hdGNoWzBdLmxlbmd0aCA+IG1hdGNoWzBdLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIG1hdGNoID0gdGVtcE1hdGNoO1xuICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnRlc3RfbWF0Y2godGVtcE1hdGNoLCBydWxlc1tpXSk7XG4gICAgICAgICAgICAgIGlmICh0b2tlbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYmFja3RyYWNrKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5mbGV4KSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICB0b2tlbiA9IHRoaXMudGVzdF9tYXRjaChtYXRjaCwgcnVsZXNbaW5kZXhdKTtcbiAgICAgICAgICBpZiAodG9rZW4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faW5wdXQgPT09IFwiXCIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBcIi4gVW5yZWNvZ25pemVkIHRleHQuXFxuXCIgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7XG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICBsaW5lOiB0aGlzLnl5bGluZW5vXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyByZXR1cm4gbmV4dCBtYXRjaCB0aGF0IGhhcyBhIHRva2VuXG4gICAgICBsZXg6IGZ1bmN0aW9uIGxleCgpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLm5leHQoKTtcbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5sZXgoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIGFjdGl2YXRlcyBhIG5ldyBsZXhlciBjb25kaXRpb24gc3RhdGUgKHB1c2hlcyB0aGUgbmV3IGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvbnRvIHRoZSBjb25kaXRpb24gc3RhY2spXG4gICAgICBiZWdpbjogZnVuY3Rpb24gYmVnaW4oY29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sucHVzaChjb25kaXRpb24pO1xuICAgICAgfSxcbiAgICAgIC8vIHBvcCB0aGUgcHJldmlvdXNseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIG9mZiB0aGUgY29uZGl0aW9uIHN0YWNrXG4gICAgICBwb3BTdGF0ZTogZnVuY3Rpb24gcG9wU3RhdGUoKSB7XG4gICAgICAgIHZhciBuID0gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxO1xuICAgICAgICBpZiAobiA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5wb3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFja1swXTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHByb2R1Y2UgdGhlIGxleGVyIHJ1bGUgc2V0IHdoaWNoIGlzIGFjdGl2ZSBmb3IgdGhlIGN1cnJlbnRseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlXG4gICAgICBfY3VycmVudFJ1bGVzOiBmdW5jdGlvbiBfY3VycmVudFJ1bGVzKCkge1xuICAgICAgICBpZiAodGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggJiYgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uc1t0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV1dLnJ1bGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbnNbXCJJTklUSUFMXCJdLnJ1bGVzO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIHRoZSBjdXJyZW50bHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZTsgd2hlbiBhbiBpbmRleCBhcmd1bWVudCBpcyBwcm92aWRlZCBpdCBwcm9kdWNlcyB0aGUgTi10aCBwcmV2aW91cyBjb25kaXRpb24gc3RhdGUsIGlmIGF2YWlsYWJsZVxuICAgICAgdG9wU3RhdGU6IGZ1bmN0aW9uIHRvcFN0YXRlKG4pIHtcbiAgICAgICAgbiA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMSAtIE1hdGguYWJzKG4gfHwgMCk7XG4gICAgICAgIGlmIChuID49IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFja1tuXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCJJTklUSUFMXCI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBhbGlhcyBmb3IgYmVnaW4oY29uZGl0aW9uKVxuICAgICAgcHVzaFN0YXRlOiBmdW5jdGlvbiBwdXNoU3RhdGUoY29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuYmVnaW4oY29uZGl0aW9uKTtcbiAgICAgIH0sXG4gICAgICAvLyByZXR1cm4gdGhlIG51bWJlciBvZiBzdGF0ZXMgY3VycmVudGx5IG9uIHRoZSBzdGFja1xuICAgICAgc3RhdGVTdGFja1NpemU6IGZ1bmN0aW9uIHN0YXRlU3RhY2tTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGg7XG4gICAgICB9LFxuICAgICAgb3B0aW9uczogeyBcImNhc2UtaW5zZW5zaXRpdmVcIjogdHJ1ZSB9LFxuICAgICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24gYW5vbnltb3VzKHl5LCB5eV8sICRhdm9pZGluZ19uYW1lX2NvbGxpc2lvbnMsIFlZX1NUQVJUKSB7XG4gICAgICAgIHN3aXRjaCAoJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucykge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiA0O1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiA5O1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBcInNwYWNlXCI7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIDEwO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHJldHVybiA2O1xuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIHJldHVybiBcIlRYVFwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcnVsZXM6IFsvXig/OmluZm9cXGIpL2ksIC9eKD86W1xcc1xcblxccl0rKS9pLCAvXig/OltcXHNdKykvaSwgL14oPzpzaG93SW5mb1xcYikvaSwgL14oPzokKS9pLCAvXig/Oi4pL2ldLFxuICAgICAgY29uZGl0aW9uczogeyBcIklOSVRJQUxcIjogeyBcInJ1bGVzXCI6IFswLCAxLCAyLCAzLCA0LCA1XSwgXCJpbmNsdXNpdmVcIjogdHJ1ZSB9IH1cbiAgICB9O1xuICAgIHJldHVybiBsZXhlcjI7XG4gIH0oKTtcbiAgcGFyc2VyMi5sZXhlciA9IGxleGVyO1xuICBmdW5jdGlvbiBQYXJzZXIoKSB7XG4gICAgdGhpcy55eSA9IHt9O1xuICB9XG4gIFBhcnNlci5wcm90b3R5cGUgPSBwYXJzZXIyO1xuICBwYXJzZXIyLlBhcnNlciA9IFBhcnNlcjtcbiAgcmV0dXJuIG5ldyBQYXJzZXIoKTtcbn0oKTtcbnBhcnNlci5wYXJzZXIgPSBwYXJzZXI7XG5jb25zdCBwYXJzZXIkMSA9IHBhcnNlcjtcbmNvbnN0IERFRkFVTFRfSU5GT19EQiA9IHtcbiAgaW5mbzogZmFsc2Vcbn07XG5sZXQgaW5mbyA9IERFRkFVTFRfSU5GT19EQi5pbmZvO1xuY29uc3Qgc2V0SW5mbyA9ICh0b2dnbGUpID0+IHtcbiAgaW5mbyA9IHRvZ2dsZTtcbn07XG5jb25zdCBnZXRJbmZvID0gKCkgPT4gaW5mbztcbmNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICBpbmZvID0gREVGQVVMVF9JTkZPX0RCLmluZm87XG59O1xuY29uc3QgZGIgPSB7XG4gIGNsZWFyLFxuICBzZXRJbmZvLFxuICBnZXRJbmZvXG59O1xuY29uc3QgZHJhdyA9ICh0ZXh0LCBpZCwgdmVyc2lvbikgPT4ge1xuICBsb2cuZGVidWcoXCJyZW5kZXJpbmcgaW5mbyBkaWFncmFtXFxuXCIgKyB0ZXh0KTtcbiAgY29uc3Qgc3ZnID0gc2VsZWN0U3ZnRWxlbWVudChpZCk7XG4gIGNvbmZpZ3VyZVN2Z1NpemUoc3ZnLCAxMDAsIDQwMCwgdHJ1ZSk7XG4gIGNvbnN0IGdyb3VwID0gc3ZnLmFwcGVuZChcImdcIik7XG4gIGdyb3VwLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgMTAwKS5hdHRyKFwieVwiLCA0MCkuYXR0cihcImNsYXNzXCIsIFwidmVyc2lvblwiKS5hdHRyKFwiZm9udC1zaXplXCIsIDMyKS5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpLnRleHQoYHYke3ZlcnNpb259YCk7XG59O1xuY29uc3QgcmVuZGVyZXIgPSB7IGRyYXcgfTtcbmNvbnN0IGRpYWdyYW0gPSB7XG4gIHBhcnNlcjogcGFyc2VyJDEsXG4gIGRiLFxuICByZW5kZXJlclxufTtcbmV4cG9ydCB7XG4gIGRpYWdyYW1cbn07XG4iXSwibmFtZXMiOlsibG9nIiwic2VsZWN0U3ZnRWxlbWVudCIsImNvbmZpZ3VyZVN2Z1NpemUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQVdBLElBQUksTUFBTSxHQUFHLFdBQVc7QUFDeEIsRUFBRSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDdkQsTUFBTSxDQUFDO0FBQ1AsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNkLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3RCLEVBQUUsSUFBSSxPQUFPLEdBQUc7QUFDaEIsSUFBSSxLQUFLLEVBQUUsU0FBUyxLQUFLLEdBQUc7QUFDNUIsS0FBSztBQUNMLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDVixJQUFJLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtBQUN6SixJQUFJLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFP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QUFFLEVBQUUsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEdBQUcsRUFBRSxFQUFFLFFBQVEsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDOUosTUFBTSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakQsTUFBTSxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QyxNQUFNLElBQUksV0FBVyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQ25DLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQzdCLFFBQVEsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUM5RCxVQUFVLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxTQUFTO0FBQ1QsT0FBTztBQUNQLE1BQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLE1BQU0sV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ3BDLE1BQU0sV0FBVyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25DLE1BQU0sSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLElBQUksV0FBVyxFQUFFO0FBQy9DLFFBQVEsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7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
