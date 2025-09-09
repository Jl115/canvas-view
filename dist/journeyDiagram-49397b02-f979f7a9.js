'use strict';

var index = require('./index-d3f4d11e.js');
var svgDrawCommon08f97a94 = require('./svgDrawCommon-08f97a94-cc11eeba.js');
require('./main-8c6d7706.js');
var arc = require('./arc-25a043c5.js');
require('obsidian');
require('@/components/modals');
require('@/views/view');
require('./path-29c5310d.js');

var parser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [6, 8, 10, 11, 12, 14, 16, 17, 18], $V1 = [1, 9], $V2 = [1, 10], $V3 = [1, 11], $V4 = [1, 12], $V5 = [1, 13], $V6 = [1, 14];
  var parser2 = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "start": 3, "journey": 4, "document": 5, "EOF": 6, "line": 7, "SPACE": 8, "statement": 9, "NEWLINE": 10, "title": 11, "acc_title": 12, "acc_title_value": 13, "acc_descr": 14, "acc_descr_value": 15, "acc_descr_multiline_value": 16, "section": 17, "taskName": 18, "taskData": 19, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 4: "journey", 6: "EOF", 8: "SPACE", 10: "NEWLINE", 11: "title", 12: "acc_title", 13: "acc_title_value", 14: "acc_descr", 15: "acc_descr_value", 16: "acc_descr_multiline_value", 17: "section", 18: "taskName", 19: "taskData" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 2]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 1:
          return $$[$0 - 1];
        case 2:
          this.$ = [];
          break;
        case 3:
          $$[$0 - 1].push($$[$0]);
          this.$ = $$[$0 - 1];
          break;
        case 4:
        case 5:
          this.$ = $$[$0];
          break;
        case 6:
        case 7:
          this.$ = [];
          break;
        case 8:
          yy.setDiagramTitle($$[$0].substr(6));
          this.$ = $$[$0].substr(6);
          break;
        case 9:
          this.$ = $$[$0].trim();
          yy.setAccTitle(this.$);
          break;
        case 10:
        case 11:
          this.$ = $$[$0].trim();
          yy.setAccDescription(this.$);
          break;
        case 12:
          yy.addSection($$[$0].substr(8));
          this.$ = $$[$0].substr(8);
          break;
        case 13:
          yy.addTask($$[$0 - 1], $$[$0]);
          this.$ = "task";
          break;
      }
    },
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, o($V0, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: $V1, 12: $V2, 14: $V3, 16: $V4, 17: $V5, 18: $V6 }, o($V0, [2, 7], { 1: [2, 1] }), o($V0, [2, 3]), { 9: 15, 11: $V1, 12: $V2, 14: $V3, 16: $V4, 17: $V5, 18: $V6 }, o($V0, [2, 5]), o($V0, [2, 6]), o($V0, [2, 8]), { 13: [1, 16] }, { 15: [1, 17] }, o($V0, [2, 11]), o($V0, [2, 12]), { 19: [1, 18] }, o($V0, [2, 4]), o($V0, [2, 9]), o($V0, [2, 10]), o($V0, [2, 13])],
    defaultActions: {},
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
            return 10;
          case 3:
            break;
          case 4:
            break;
          case 5:
            return 4;
          case 6:
            return 11;
          case 7:
            this.begin("acc_title");
            return 12;
          case 8:
            this.popState();
            return "acc_title_value";
          case 9:
            this.begin("acc_descr");
            return 14;
          case 10:
            this.popState();
            return "acc_descr_value";
          case 11:
            this.begin("acc_descr_multiline");
            break;
          case 12:
            this.popState();
            break;
          case 13:
            return "acc_descr_multiline_value";
          case 14:
            return 17;
          case 15:
            return 18;
          case 16:
            return 19;
          case 17:
            return ":";
          case 18:
            return 6;
          case 19:
            return "INVALID";
        }
      },
      rules: [/^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:journey\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:section\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { "acc_descr_multiline": { "rules": [12, 13], "inclusive": false }, "acc_descr": { "rules": [10], "inclusive": false }, "acc_title": { "rules": [8], "inclusive": false }, "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19], "inclusive": true } }
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
let currentSection = "";
const sections = [];
const tasks = [];
const rawTasks = [];
const clear = function() {
  sections.length = 0;
  tasks.length = 0;
  currentSection = "";
  rawTasks.length = 0;
  index.clear();
};
const addSection = function(txt) {
  currentSection = txt;
  sections.push(txt);
};
const getSections = function() {
  return sections;
};
const getTasks = function() {
  let allItemsProcessed = compileTasks();
  const maxDepth = 100;
  let iterationCount = 0;
  while (!allItemsProcessed && iterationCount < maxDepth) {
    allItemsProcessed = compileTasks();
    iterationCount++;
  }
  tasks.push(...rawTasks);
  return tasks;
};
const updateActors = function() {
  const tempActors = [];
  tasks.forEach((task) => {
    if (task.people) {
      tempActors.push(...task.people);
    }
  });
  const unique = new Set(tempActors);
  return [...unique].sort();
};
const addTask = function(descr, taskData) {
  const pieces = taskData.substr(1).split(":");
  let score = 0;
  let peeps = [];
  if (pieces.length === 1) {
    score = Number(pieces[0]);
    peeps = [];
  } else {
    score = Number(pieces[0]);
    peeps = pieces[1].split(",");
  }
  const peopleList = peeps.map((s) => s.trim());
  const rawTask = {
    section: currentSection,
    type: currentSection,
    people: peopleList,
    task: descr,
    score
  };
  rawTasks.push(rawTask);
};
const addTaskOrg = function(descr) {
  const newTask = {
    section: currentSection,
    type: currentSection,
    description: descr,
    task: descr,
    classes: []
  };
  tasks.push(newTask);
};
const compileTasks = function() {
  const compileTask = function(pos) {
    return rawTasks[pos].processed;
  };
  let allProcessed = true;
  for (const [i, rawTask] of rawTasks.entries()) {
    compileTask(i);
    allProcessed = allProcessed && rawTask.processed;
  }
  return allProcessed;
};
const getActors = function() {
  return updateActors();
};
const db = {
  getConfig: () => index.getConfig().journey,
  clear,
  setDiagramTitle: index.setDiagramTitle,
  getDiagramTitle: index.getDiagramTitle,
  setAccTitle: index.setAccTitle,
  getAccTitle: index.getAccTitle,
  setAccDescription: index.setAccDescription,
  getAccDescription: index.getAccDescription,
  addSection,
  getSections,
  getTasks,
  addTask,
  addTaskOrg,
  getActors
};
const getStyles = (options) => `.label {
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    color: ${options.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${options.textColor}
  }

  .legend {
    fill: ${options.textColor};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${options.textColor}
  }

  .face {
    ${options.faceColor ? `fill: ${options.faceColor}` : "fill: #FFF8DC"};
    stroke: #999;
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
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${options.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${options.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${options.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    font-size: 12px;
    background: ${options.tertiaryColor};
    border: 1px solid ${options.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${options.fillType0 ? `fill: ${options.fillType0}` : ""};
  }
  .task-type-1, .section-type-1  {
    ${options.fillType0 ? `fill: ${options.fillType1}` : ""};
  }
  .task-type-2, .section-type-2  {
    ${options.fillType0 ? `fill: ${options.fillType2}` : ""};
  }
  .task-type-3, .section-type-3  {
    ${options.fillType0 ? `fill: ${options.fillType3}` : ""};
  }
  .task-type-4, .section-type-4  {
    ${options.fillType0 ? `fill: ${options.fillType4}` : ""};
  }
  .task-type-5, .section-type-5  {
    ${options.fillType0 ? `fill: ${options.fillType5}` : ""};
  }
  .task-type-6, .section-type-6  {
    ${options.fillType0 ? `fill: ${options.fillType6}` : ""};
  }
  .task-type-7, .section-type-7  {
    ${options.fillType0 ? `fill: ${options.fillType7}` : ""};
  }

  .actor-0 {
    ${options.actor0 ? `fill: ${options.actor0}` : ""};
  }
  .actor-1 {
    ${options.actor1 ? `fill: ${options.actor1}` : ""};
  }
  .actor-2 {
    ${options.actor2 ? `fill: ${options.actor2}` : ""};
  }
  .actor-3 {
    ${options.actor3 ? `fill: ${options.actor3}` : ""};
  }
  .actor-4 {
    ${options.actor4 ? `fill: ${options.actor4}` : ""};
  }
  .actor-5 {
    ${options.actor5 ? `fill: ${options.actor5}` : ""};
  }
`;
const styles = getStyles;
const drawRect = function(elem, rectData) {
  return svgDrawCommon08f97a94.drawRect(elem, rectData);
};
const drawFace = function(element, faceData) {
  const radius = 15;
  const circleElement = element.append("circle").attr("cx", faceData.cx).attr("cy", faceData.cy).attr("class", "face").attr("r", radius).attr("stroke-width", 2).attr("overflow", "visible");
  const face = element.append("g");
  face.append("circle").attr("cx", faceData.cx - radius / 3).attr("cy", faceData.cy - radius / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
  face.append("circle").attr("cx", faceData.cx + radius / 3).attr("cy", faceData.cy - radius / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
  function smile(face2) {
    const arc$1 = arc.arc().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(radius / 2).outerRadius(radius / 2.2);
    face2.append("path").attr("class", "mouth").attr("d", arc$1).attr("transform", "translate(" + faceData.cx + "," + (faceData.cy + 2) + ")");
  }
  function sad(face2) {
    const arc$1 = arc.arc().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(radius / 2).outerRadius(radius / 2.2);
    face2.append("path").attr("class", "mouth").attr("d", arc$1).attr("transform", "translate(" + faceData.cx + "," + (faceData.cy + 7) + ")");
  }
  function ambivalent(face2) {
    face2.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", faceData.cx - 5).attr("y1", faceData.cy + 7).attr("x2", faceData.cx + 5).attr("y2", faceData.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
  }
  if (faceData.score > 3) {
    smile(face);
  } else if (faceData.score < 3) {
    sad(face);
  } else {
    ambivalent(face);
  }
  return circleElement;
};
const drawCircle = function(element, circleData) {
  const circleElement = element.append("circle");
  circleElement.attr("cx", circleData.cx);
  circleElement.attr("cy", circleData.cy);
  circleElement.attr("class", "actor-" + circleData.pos);
  circleElement.attr("fill", circleData.fill);
  circleElement.attr("stroke", circleData.stroke);
  circleElement.attr("r", circleData.r);
  if (circleElement.class !== void 0) {
    circleElement.attr("class", circleElement.class);
  }
  if (circleData.title !== void 0) {
    circleElement.append("title").text(circleData.title);
  }
  return circleElement;
};
const drawText = function(elem, textData) {
  return svgDrawCommon08f97a94.drawText(elem, textData);
};
const drawLabel = function(elem, txtObject) {
  function genPoints(x, y, width, height, cut) {
    return x + "," + y + " " + (x + width) + "," + y + " " + (x + width) + "," + (y + height - cut) + " " + (x + width - cut * 1.2) + "," + (y + height) + " " + x + "," + (y + height);
  }
  const polygon = elem.append("polygon");
  polygon.attr("points", genPoints(txtObject.x, txtObject.y, 50, 20, 7));
  polygon.attr("class", "labelBox");
  txtObject.y = txtObject.y + txtObject.labelMargin;
  txtObject.x = txtObject.x + 0.5 * txtObject.labelMargin;
  drawText(elem, txtObject);
};
const drawSection = function(elem, section, conf2) {
  const g = elem.append("g");
  const rect = svgDrawCommon08f97a94.getNoteRect();
  rect.x = section.x;
  rect.y = section.y;
  rect.fill = section.fill;
  rect.width = conf2.width * section.taskCount + // width of the tasks
  conf2.diagramMarginX * (section.taskCount - 1);
  rect.height = conf2.height;
  rect.class = "journey-section section-type-" + section.num;
  rect.rx = 3;
  rect.ry = 3;
  drawRect(g, rect);
  _drawTextCandidateFunc(conf2)(
    section.text,
    g,
    rect.x,
    rect.y,
    rect.width,
    rect.height,
    { class: "journey-section section-type-" + section.num },
    conf2,
    section.colour
  );
};
let taskCount = -1;
const drawTask = function(elem, task, conf2) {
  const center = task.x + conf2.width / 2;
  const g = elem.append("g");
  taskCount++;
  const maxHeight = 300 + 5 * 30;
  g.append("line").attr("id", "task" + taskCount).attr("x1", center).attr("y1", task.y).attr("x2", center).attr("y2", maxHeight).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666");
  drawFace(g, {
    cx: center,
    cy: 300 + (5 - task.score) * 30,
    score: task.score
  });
  const rect = svgDrawCommon08f97a94.getNoteRect();
  rect.x = task.x;
  rect.y = task.y;
  rect.fill = task.fill;
  rect.width = conf2.width;
  rect.height = conf2.height;
  rect.class = "task task-type-" + task.num;
  rect.rx = 3;
  rect.ry = 3;
  drawRect(g, rect);
  let xPos = task.x + 14;
  task.people.forEach((person) => {
    const colour = task.actors[person].color;
    const circle = {
      cx: xPos,
      cy: task.y,
      r: 7,
      fill: colour,
      stroke: "#000",
      title: person,
      pos: task.actors[person].position
    };
    drawCircle(g, circle);
    xPos += 10;
  });
  _drawTextCandidateFunc(conf2)(
    task.task,
    g,
    rect.x,
    rect.y,
    rect.width,
    rect.height,
    { class: "task" },
    conf2,
    task.colour
  );
};
const drawBackgroundRect = function(elem, bounds2) {
  svgDrawCommon08f97a94.drawBackgroundRect(elem, bounds2);
};
const _drawTextCandidateFunc = function() {
  function byText(content, g, x, y, width, height, textAttrs, colour) {
    const text = g.append("text").attr("x", x + width / 2).attr("y", y + height / 2 + 5).style("font-color", colour).style("text-anchor", "middle").text(content);
    _setTextAttrs(text, textAttrs);
  }
  function byTspan(content, g, x, y, width, height, textAttrs, conf2, colour) {
    const { taskFontSize, taskFontFamily } = conf2;
    const lines = content.split(/<br\s*\/?>/gi);
    for (let i = 0; i < lines.length; i++) {
      const dy = i * taskFontSize - taskFontSize * (lines.length - 1) / 2;
      const text = g.append("text").attr("x", x + width / 2).attr("y", y).attr("fill", colour).style("text-anchor", "middle").style("font-size", taskFontSize).style("font-family", taskFontFamily);
      text.append("tspan").attr("x", x + width / 2).attr("dy", dy).text(lines[i]);
      text.attr("y", y + height / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central");
      _setTextAttrs(text, textAttrs);
    }
  }
  function byFo(content, g, x, y, width, height, textAttrs, conf2) {
    const body = g.append("switch");
    const f = body.append("foreignObject").attr("x", x).attr("y", y).attr("width", width).attr("height", height).attr("position", "fixed");
    const text = f.append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    text.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(content);
    byTspan(content, body, x, y, width, height, textAttrs, conf2);
    _setTextAttrs(text, textAttrs);
  }
  function _setTextAttrs(toText, fromTextAttrsDict) {
    for (const key in fromTextAttrsDict) {
      if (key in fromTextAttrsDict) {
        toText.attr(key, fromTextAttrsDict[key]);
      }
    }
  }
  return function(conf2) {
    return conf2.textPlacement === "fo" ? byFo : conf2.textPlacement === "old" ? byText : byTspan;
  };
}();
const initGraphics = function(graphics) {
  graphics.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
};
const svgDraw = {
  drawRect,
  drawCircle,
  drawSection,
  drawText,
  drawLabel,
  drawTask,
  drawBackgroundRect,
  initGraphics
};
const setConf = function(cnf) {
  const keys = Object.keys(cnf);
  keys.forEach(function(key) {
    conf[key] = cnf[key];
  });
};
const actors = {};
function drawActorLegend(diagram2) {
  const conf2 = index.getConfig().journey;
  let yPos = 60;
  Object.keys(actors).forEach((person) => {
    const colour = actors[person].color;
    const circleData = {
      cx: 20,
      cy: yPos,
      r: 7,
      fill: colour,
      stroke: "#000",
      pos: actors[person].position
    };
    svgDraw.drawCircle(diagram2, circleData);
    const labelData = {
      x: 40,
      y: yPos + 7,
      fill: "#666",
      text: person,
      textMargin: conf2.boxTextMargin | 5
    };
    svgDraw.drawText(diagram2, labelData);
    yPos += 20;
  });
}
const conf = index.getConfig().journey;
const LEFT_MARGIN = conf.leftMargin;
const draw = function(text, id, version, diagObj) {
  const conf2 = index.getConfig().journey;
  const securityLevel = index.getConfig().securityLevel;
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = index.select("#i" + id);
  }
  const root = securityLevel === "sandbox" ? index.select(sandboxElement.nodes()[0].contentDocument.body) : index.select("body");
  bounds.init();
  const diagram2 = root.select("#" + id);
  svgDraw.initGraphics(diagram2);
  const tasks2 = diagObj.db.getTasks();
  const title = diagObj.db.getDiagramTitle();
  const actorNames = diagObj.db.getActors();
  for (const member in actors) {
    delete actors[member];
  }
  let actorPos = 0;
  actorNames.forEach((actorName) => {
    actors[actorName] = {
      color: conf2.actorColours[actorPos % conf2.actorColours.length],
      position: actorPos
    };
    actorPos++;
  });
  drawActorLegend(diagram2);
  bounds.insert(0, 0, LEFT_MARGIN, Object.keys(actors).length * 50);
  drawTasks(diagram2, tasks2, 0);
  const box = bounds.getBounds();
  if (title) {
    diagram2.append("text").text(title).attr("x", LEFT_MARGIN).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 25);
  }
  const height = box.stopy - box.starty + 2 * conf2.diagramMarginY;
  const width = LEFT_MARGIN + box.stopx + 2 * conf2.diagramMarginX;
  index.configureSvgSize(diagram2, height, width, conf2.useMaxWidth);
  diagram2.append("line").attr("x1", LEFT_MARGIN).attr("y1", conf2.height * 4).attr("x2", width - LEFT_MARGIN - 4).attr("y2", conf2.height * 4).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
  const extraVertForTitle = title ? 70 : 0;
  diagram2.attr("viewBox", `${box.startx} -25 ${width} ${height + extraVertForTitle}`);
  diagram2.attr("preserveAspectRatio", "xMinYMin meet");
  diagram2.attr("height", height + extraVertForTitle + 25);
};
const bounds = {
  data: {
    startx: void 0,
    stopx: void 0,
    starty: void 0,
    stopy: void 0
  },
  verticalPos: 0,
  sequenceItems: [],
  init: function() {
    this.sequenceItems = [];
    this.data = {
      startx: void 0,
      stopx: void 0,
      starty: void 0,
      stopy: void 0
    };
    this.verticalPos = 0;
  },
  updateVal: function(obj, key, val, fun) {
    if (obj[key] === void 0) {
      obj[key] = val;
    } else {
      obj[key] = fun(val, obj[key]);
    }
  },
  updateBounds: function(startx, starty, stopx, stopy) {
    const conf2 = index.getConfig().journey;
    const _self = this;
    let cnt = 0;
    function updateFn(type) {
      return function updateItemBounds(item) {
        cnt++;
        const n = _self.sequenceItems.length - cnt + 1;
        _self.updateVal(item, "starty", starty - n * conf2.boxMargin, Math.min);
        _self.updateVal(item, "stopy", stopy + n * conf2.boxMargin, Math.max);
        _self.updateVal(bounds.data, "startx", startx - n * conf2.boxMargin, Math.min);
        _self.updateVal(bounds.data, "stopx", stopx + n * conf2.boxMargin, Math.max);
        if (!(type === "activation")) {
          _self.updateVal(item, "startx", startx - n * conf2.boxMargin, Math.min);
          _self.updateVal(item, "stopx", stopx + n * conf2.boxMargin, Math.max);
          _self.updateVal(bounds.data, "starty", starty - n * conf2.boxMargin, Math.min);
          _self.updateVal(bounds.data, "stopy", stopy + n * conf2.boxMargin, Math.max);
        }
      };
    }
    this.sequenceItems.forEach(updateFn());
  },
  insert: function(startx, starty, stopx, stopy) {
    const _startx = Math.min(startx, stopx);
    const _stopx = Math.max(startx, stopx);
    const _starty = Math.min(starty, stopy);
    const _stopy = Math.max(starty, stopy);
    this.updateVal(bounds.data, "startx", _startx, Math.min);
    this.updateVal(bounds.data, "starty", _starty, Math.min);
    this.updateVal(bounds.data, "stopx", _stopx, Math.max);
    this.updateVal(bounds.data, "stopy", _stopy, Math.max);
    this.updateBounds(_startx, _starty, _stopx, _stopy);
  },
  bumpVerticalPos: function(bump) {
    this.verticalPos = this.verticalPos + bump;
    this.data.stopy = this.verticalPos;
  },
  getVerticalPos: function() {
    return this.verticalPos;
  },
  getBounds: function() {
    return this.data;
  }
};
const fills = conf.sectionFills;
const textColours = conf.sectionColours;
const drawTasks = function(diagram2, tasks2, verticalPos) {
  const conf2 = index.getConfig().journey;
  let lastSection = "";
  const sectionVHeight = conf2.height * 2 + conf2.diagramMarginY;
  const taskPos = verticalPos + sectionVHeight;
  let sectionNumber = 0;
  let fill = "#CCC";
  let colour = "black";
  let num = 0;
  for (const [i, task] of tasks2.entries()) {
    if (lastSection !== task.section) {
      fill = fills[sectionNumber % fills.length];
      num = sectionNumber % fills.length;
      colour = textColours[sectionNumber % textColours.length];
      let taskInSectionCount = 0;
      const currentSection2 = task.section;
      for (let taskIndex = i; taskIndex < tasks2.length; taskIndex++) {
        if (tasks2[taskIndex].section == currentSection2) {
          taskInSectionCount = taskInSectionCount + 1;
        } else {
          break;
        }
      }
      const section = {
        x: i * conf2.taskMargin + i * conf2.width + LEFT_MARGIN,
        y: 50,
        text: task.section,
        fill,
        num,
        colour,
        taskCount: taskInSectionCount
      };
      svgDraw.drawSection(diagram2, section, conf2);
      lastSection = task.section;
      sectionNumber++;
    }
    const taskActors = task.people.reduce((acc, actorName) => {
      if (actors[actorName]) {
        acc[actorName] = actors[actorName];
      }
      return acc;
    }, {});
    task.x = i * conf2.taskMargin + i * conf2.width + LEFT_MARGIN;
    task.y = taskPos;
    task.width = conf2.diagramMarginX;
    task.height = conf2.diagramMarginY;
    task.colour = colour;
    task.fill = fill;
    task.num = num;
    task.actors = taskActors;
    svgDraw.drawTask(diagram2, task, conf2);
    bounds.insert(task.x, task.y, task.x + task.width + conf2.taskMargin, 300 + 5 * 30);
  }
};
const renderer = {
  setConf,
  draw
};
const diagram = {
  parser: parser$1,
  db,
  renderer,
  styles,
  init: (cnf) => {
    renderer.setConf(cnf.journey);
    db.clear();
  }
};

exports.diagram = diagram;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam91cm5leURpYWdyYW0tNDkzOTdiMDItZjk3OWY3YTkuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9tZXJtYWlkL2Rpc3Qvam91cm5leURpYWdyYW0tNDkzOTdiMDIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYyBhcyBnZXRDb25maWcsIHEgYXMgc2V0RGlhZ3JhbVRpdGxlLCB0IGFzIGdldERpYWdyYW1UaXRsZSwgcyBhcyBzZXRBY2NUaXRsZSwgZyBhcyBnZXRBY2NUaXRsZSwgYiBhcyBzZXRBY2NEZXNjcmlwdGlvbiwgYSBhcyBnZXRBY2NEZXNjcmlwdGlvbiwgdiBhcyBjbGVhciQxLCBpIGFzIGNvbmZpZ3VyZVN2Z1NpemUgfSBmcm9tIFwiLi9tZXJtYWlkLWI1ODYwYjU0LmpzXCI7XG5pbXBvcnQgeyBhcmMsIHNlbGVjdCB9IGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgZCBhcyBkcmF3UmVjdCQxLCBmIGFzIGRyYXdUZXh0JDEsIGEgYXMgZHJhd0JhY2tncm91bmRSZWN0JDEsIGcgYXMgZ2V0Tm90ZVJlY3QgfSBmcm9tIFwiLi9zdmdEcmF3Q29tbW9uLTA4Zjk3YTk0LmpzXCI7XG5pbXBvcnQgXCJ0cy1kZWRlbnRcIjtcbmltcG9ydCBcImRheWpzXCI7XG5pbXBvcnQgXCJAYnJhaW50cmVlL3Nhbml0aXplLXVybFwiO1xuaW1wb3J0IFwiZG9tcHVyaWZ5XCI7XG5pbXBvcnQgXCJraHJvbWFcIjtcbmltcG9ydCBcImxvZGFzaC1lcy9tZW1vaXplLmpzXCI7XG5pbXBvcnQgXCJsb2Rhc2gtZXMvbWVyZ2UuanNcIjtcbmltcG9ydCBcInN0eWxpc1wiO1xuaW1wb3J0IFwibG9kYXNoLWVzL2lzRW1wdHkuanNcIjtcbnZhciBwYXJzZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG8gPSBmdW5jdGlvbihrLCB2LCBvMiwgbCkge1xuICAgIGZvciAobzIgPSBvMiB8fCB7fSwgbCA9IGsubGVuZ3RoOyBsLS07IG8yW2tbbF1dID0gdilcbiAgICAgIDtcbiAgICByZXR1cm4gbzI7XG4gIH0sICRWMCA9IFs2LCA4LCAxMCwgMTEsIDEyLCAxNCwgMTYsIDE3LCAxOF0sICRWMSA9IFsxLCA5XSwgJFYyID0gWzEsIDEwXSwgJFYzID0gWzEsIDExXSwgJFY0ID0gWzEsIDEyXSwgJFY1ID0gWzEsIDEzXSwgJFY2ID0gWzEsIDE0XTtcbiAgdmFyIHBhcnNlcjIgPSB7XG4gICAgdHJhY2U6IGZ1bmN0aW9uIHRyYWNlKCkge1xuICAgIH0sXG4gICAgeXk6IHt9LFxuICAgIHN5bWJvbHNfOiB7IFwiZXJyb3JcIjogMiwgXCJzdGFydFwiOiAzLCBcImpvdXJuZXlcIjogNCwgXCJkb2N1bWVudFwiOiA1LCBcIkVPRlwiOiA2LCBcImxpbmVcIjogNywgXCJTUEFDRVwiOiA4LCBcInN0YXRlbWVudFwiOiA5LCBcIk5FV0xJTkVcIjogMTAsIFwidGl0bGVcIjogMTEsIFwiYWNjX3RpdGxlXCI6IDEyLCBcImFjY190aXRsZV92YWx1ZVwiOiAxMywgXCJhY2NfZGVzY3JcIjogMTQsIFwiYWNjX2Rlc2NyX3ZhbHVlXCI6IDE1LCBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIjogMTYsIFwic2VjdGlvblwiOiAxNywgXCJ0YXNrTmFtZVwiOiAxOCwgXCJ0YXNrRGF0YVwiOiAxOSwgXCIkYWNjZXB0XCI6IDAsIFwiJGVuZFwiOiAxIH0sXG4gICAgdGVybWluYWxzXzogeyAyOiBcImVycm9yXCIsIDQ6IFwiam91cm5leVwiLCA2OiBcIkVPRlwiLCA4OiBcIlNQQUNFXCIsIDEwOiBcIk5FV0xJTkVcIiwgMTE6IFwidGl0bGVcIiwgMTI6IFwiYWNjX3RpdGxlXCIsIDEzOiBcImFjY190aXRsZV92YWx1ZVwiLCAxNDogXCJhY2NfZGVzY3JcIiwgMTU6IFwiYWNjX2Rlc2NyX3ZhbHVlXCIsIDE2OiBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIiwgMTc6IFwic2VjdGlvblwiLCAxODogXCJ0YXNrTmFtZVwiLCAxOTogXCJ0YXNrRGF0YVwiIH0sXG4gICAgcHJvZHVjdGlvbnNfOiBbMCwgWzMsIDNdLCBbNSwgMF0sIFs1LCAyXSwgWzcsIDJdLCBbNywgMV0sIFs3LCAxXSwgWzcsIDFdLCBbOSwgMV0sIFs5LCAyXSwgWzksIDJdLCBbOSwgMV0sIFs5LCAxXSwgWzksIDJdXSxcbiAgICBwZXJmb3JtQWN0aW9uOiBmdW5jdGlvbiBhbm9ueW1vdXMoeXl0ZXh0LCB5eWxlbmcsIHl5bGluZW5vLCB5eSwgeXlzdGF0ZSwgJCQsIF8kKSB7XG4gICAgICB2YXIgJDAgPSAkJC5sZW5ndGggLSAxO1xuICAgICAgc3dpdGNoICh5eXN0YXRlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gJCRbJDAgLSAxXTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuJCA9IFtdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDAgLSAxXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICB0aGlzLiQgPSBbXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIHl5LnNldERpYWdyYW1UaXRsZSgkJFskMF0uc3Vic3RyKDYpKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0uc3Vic3RyKDYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdLnRyaW0oKTtcbiAgICAgICAgICB5eS5zZXRBY2NUaXRsZSh0aGlzLiQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXS50cmltKCk7XG4gICAgICAgICAgeXkuc2V0QWNjRGVzY3JpcHRpb24odGhpcy4kKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICB5eS5hZGRTZWN0aW9uKCQkWyQwXS5zdWJzdHIoOCkpO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXS5zdWJzdHIoOCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgeXkuYWRkVGFzaygkJFskMCAtIDFdLCAkJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9IFwidGFza1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gICAgdGFibGU6IFt7IDM6IDEsIDQ6IFsxLCAyXSB9LCB7IDE6IFszXSB9LCBvKCRWMCwgWzIsIDJdLCB7IDU6IDMgfSksIHsgNjogWzEsIDRdLCA3OiA1LCA4OiBbMSwgNl0sIDk6IDcsIDEwOiBbMSwgOF0sIDExOiAkVjEsIDEyOiAkVjIsIDE0OiAkVjMsIDE2OiAkVjQsIDE3OiAkVjUsIDE4OiAkVjYgfSwgbygkVjAsIFsyLCA3XSwgeyAxOiBbMiwgMV0gfSksIG8oJFYwLCBbMiwgM10pLCB7IDk6IDE1LCAxMTogJFYxLCAxMjogJFYyLCAxNDogJFYzLCAxNjogJFY0LCAxNzogJFY1LCAxODogJFY2IH0sIG8oJFYwLCBbMiwgNV0pLCBvKCRWMCwgWzIsIDZdKSwgbygkVjAsIFsyLCA4XSksIHsgMTM6IFsxLCAxNl0gfSwgeyAxNTogWzEsIDE3XSB9LCBvKCRWMCwgWzIsIDExXSksIG8oJFYwLCBbMiwgMTJdKSwgeyAxOTogWzEsIDE4XSB9LCBvKCRWMCwgWzIsIDRdKSwgbygkVjAsIFsyLCA5XSksIG8oJFYwLCBbMiwgMTBdKSwgbygkVjAsIFsyLCAxM10pXSxcbiAgICBkZWZhdWx0QWN0aW9uczoge30sXG4gICAgcGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcbiAgICAgIGlmIChoYXNoLnJlY292ZXJhYmxlKSB7XG4gICAgICAgIHRoaXMudHJhY2Uoc3RyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihzdHIpO1xuICAgICAgICBlcnJvci5oYXNoID0gaGFzaDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcywgc3RhY2sgPSBbMF0sIHRzdGFjayA9IFtdLCB2c3RhY2sgPSBbbnVsbF0sIGxzdGFjayA9IFtdLCB0YWJsZSA9IHRoaXMudGFibGUsIHl5dGV4dCA9IFwiXCIsIHl5bGluZW5vID0gMCwgeXlsZW5nID0gMCwgVEVSUk9SID0gMiwgRU9GID0gMTtcbiAgICAgIHZhciBhcmdzID0gbHN0YWNrLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHZhciBsZXhlcjIgPSBPYmplY3QuY3JlYXRlKHRoaXMubGV4ZXIpO1xuICAgICAgdmFyIHNoYXJlZFN0YXRlID0geyB5eToge30gfTtcbiAgICAgIGZvciAodmFyIGsgaW4gdGhpcy55eSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMueXksIGspKSB7XG4gICAgICAgICAgc2hhcmVkU3RhdGUueXlba10gPSB0aGlzLnl5W2tdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXhlcjIuc2V0SW5wdXQoaW5wdXQsIHNoYXJlZFN0YXRlLnl5KTtcbiAgICAgIHNoYXJlZFN0YXRlLnl5LmxleGVyID0gbGV4ZXIyO1xuICAgICAgc2hhcmVkU3RhdGUueXkucGFyc2VyID0gdGhpcztcbiAgICAgIGlmICh0eXBlb2YgbGV4ZXIyLnl5bGxvYyA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGxleGVyMi55eWxsb2MgPSB7fTtcbiAgICAgIH1cbiAgICAgIHZhciB5eWxvYyA9IGxleGVyMi55eWxsb2M7XG4gICAgICBsc3RhY2sucHVzaCh5eWxvYyk7XG4gICAgICB2YXIgcmFuZ2VzID0gbGV4ZXIyLm9wdGlvbnMgJiYgbGV4ZXIyLm9wdGlvbnMucmFuZ2VzO1xuICAgICAgaWYgKHR5cGVvZiBzaGFyZWRTdGF0ZS55eS5wYXJzZUVycm9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhpcy5wYXJzZUVycm9yID0gc2hhcmVkU3RhdGUueXkucGFyc2VFcnJvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFyc2VFcnJvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZUVycm9yO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gbGV4KCkge1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHRva2VuID0gdHN0YWNrLnBvcCgpIHx8IGxleGVyMi5sZXgoKSB8fCBFT0Y7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBpZiAodG9rZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgdHN0YWNrID0gdG9rZW47XG4gICAgICAgICAgICB0b2tlbiA9IHRzdGFjay5wb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG9rZW4gPSBzZWxmLnN5bWJvbHNfW3Rva2VuXSB8fCB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICB9XG4gICAgICB2YXIgc3ltYm9sLCBzdGF0ZSwgYWN0aW9uLCByLCB5eXZhbCA9IHt9LCBwLCBsZW4sIG5ld1N0YXRlLCBleHBlY3RlZDtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHN0YXRlID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlXSkge1xuICAgICAgICAgIGFjdGlvbiA9IHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzeW1ib2wgPT09IG51bGwgfHwgdHlwZW9mIHN5bWJvbCA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBzeW1ib2wgPSBsZXgoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWN0aW9uID0gdGFibGVbc3RhdGVdICYmIHRhYmxlW3N0YXRlXVtzeW1ib2xdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSBcInVuZGVmaW5lZFwiIHx8ICFhY3Rpb24ubGVuZ3RoIHx8ICFhY3Rpb25bMF0pIHtcbiAgICAgICAgICB2YXIgZXJyU3RyID0gXCJcIjtcbiAgICAgICAgICBleHBlY3RlZCA9IFtdO1xuICAgICAgICAgIGZvciAocCBpbiB0YWJsZVtzdGF0ZV0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRlcm1pbmFsc19bcF0gJiYgcCA+IFRFUlJPUikge1xuICAgICAgICAgICAgICBleHBlY3RlZC5wdXNoKFwiJ1wiICsgdGhpcy50ZXJtaW5hbHNfW3BdICsgXCInXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobGV4ZXIyLnNob3dQb3NpdGlvbikge1xuICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjpcXG5cIiArIGxleGVyMi5zaG93UG9zaXRpb24oKSArIFwiXFxuRXhwZWN0aW5nIFwiICsgZXhwZWN0ZWQuam9pbihcIiwgXCIpICsgXCIsIGdvdCAnXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJTdHIgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoeXlsaW5lbm8gKyAxKSArIFwiOiBVbmV4cGVjdGVkIFwiICsgKHN5bWJvbCA9PSBFT0YgPyBcImVuZCBvZiBpbnB1dFwiIDogXCInXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wYXJzZUVycm9yKGVyclN0ciwge1xuICAgICAgICAgICAgdGV4dDogbGV4ZXIyLm1hdGNoLFxuICAgICAgICAgICAgdG9rZW46IHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCxcbiAgICAgICAgICAgIGxpbmU6IGxleGVyMi55eWxpbmVubyxcbiAgICAgICAgICAgIGxvYzogeXlsb2MsXG4gICAgICAgICAgICBleHBlY3RlZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rpb25bMF0gaW5zdGFuY2VvZiBBcnJheSAmJiBhY3Rpb24ubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcnNlIEVycm9yOiBtdWx0aXBsZSBhY3Rpb25zIHBvc3NpYmxlIGF0IHN0YXRlOiBcIiArIHN0YXRlICsgXCIsIHRva2VuOiBcIiArIHN5bWJvbCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChhY3Rpb25bMF0pIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBzdGFjay5wdXNoKHN5bWJvbCk7XG4gICAgICAgICAgICB2c3RhY2sucHVzaChsZXhlcjIueXl0ZXh0KTtcbiAgICAgICAgICAgIGxzdGFjay5wdXNoKGxleGVyMi55eWxsb2MpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChhY3Rpb25bMV0pO1xuICAgICAgICAgICAgc3ltYm9sID0gbnVsbDtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeXlsZW5nID0gbGV4ZXIyLnl5bGVuZztcbiAgICAgICAgICAgICAgeXl0ZXh0ID0gbGV4ZXIyLnl5dGV4dDtcbiAgICAgICAgICAgICAgeXlsaW5lbm8gPSBsZXhlcjIueXlsaW5lbm87XG4gICAgICAgICAgICAgIHl5bG9jID0gbGV4ZXIyLnl5bGxvYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxlbiA9IHRoaXMucHJvZHVjdGlvbnNfW2FjdGlvblsxXV1bMV07XG4gICAgICAgICAgICB5eXZhbC4kID0gdnN0YWNrW3ZzdGFjay5sZW5ndGggLSBsZW5dO1xuICAgICAgICAgICAgeXl2YWwuXyQgPSB7XG4gICAgICAgICAgICAgIGZpcnN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgbGFzdF9saW5lOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9jb2x1bW5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocmFuZ2VzKSB7XG4gICAgICAgICAgICAgIHl5dmFsLl8kLnJhbmdlID0gW1xuICAgICAgICAgICAgICAgIGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0ucmFuZ2VbMF0sXG4gICAgICAgICAgICAgICAgbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5yYW5nZVsxXVxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgciA9IHRoaXMucGVyZm9ybUFjdGlvbi5hcHBseSh5eXZhbCwgW1xuICAgICAgICAgICAgICB5eXRleHQsXG4gICAgICAgICAgICAgIHl5bGVuZyxcbiAgICAgICAgICAgICAgeXlsaW5lbm8sXG4gICAgICAgICAgICAgIHNoYXJlZFN0YXRlLnl5LFxuICAgICAgICAgICAgICBhY3Rpb25bMV0sXG4gICAgICAgICAgICAgIHZzdGFjayxcbiAgICAgICAgICAgICAgbHN0YWNrXG4gICAgICAgICAgICBdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIHN0YWNrID0gc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4gKiAyKTtcbiAgICAgICAgICAgICAgdnN0YWNrID0gdnN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcbiAgICAgICAgICAgICAgbHN0YWNrID0gbHN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YWNrLnB1c2godGhpcy5wcm9kdWN0aW9uc19bYWN0aW9uWzFdXVswXSk7XG4gICAgICAgICAgICB2c3RhY2sucHVzaCh5eXZhbC4kKTtcbiAgICAgICAgICAgIGxzdGFjay5wdXNoKHl5dmFsLl8kKTtcbiAgICAgICAgICAgIG5ld1N0YXRlID0gdGFibGVbc3RhY2tbc3RhY2subGVuZ3RoIC0gMl1dW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDFdXTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV3U3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbiAgdmFyIGxleGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxleGVyMiA9IHtcbiAgICAgIEVPRjogMSxcbiAgICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XG4gICAgICAgIGlmICh0aGlzLnl5LnBhcnNlcikge1xuICAgICAgICAgIHRoaXMueXkucGFyc2VyLnBhcnNlRXJyb3Ioc3RyLCBoYXNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJlc2V0cyB0aGUgbGV4ZXIsIHNldHMgbmV3IGlucHV0XG4gICAgICBzZXRJbnB1dDogZnVuY3Rpb24oaW5wdXQsIHl5KSB7XG4gICAgICAgIHRoaXMueXkgPSB5eSB8fCB0aGlzLnl5IHx8IHt9O1xuICAgICAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuICAgICAgICB0aGlzLl9tb3JlID0gdGhpcy5fYmFja3RyYWNrID0gdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDA7XG4gICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbXCJJTklUSUFMXCJdO1xuICAgICAgICB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogMCxcbiAgICAgICAgICBsYXN0X2xpbmU6IDEsXG4gICAgICAgICAgbGFzdF9jb2x1bW46IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFswLCAwXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIGNvbnN1bWVzIGFuZCByZXR1cm5zIG9uZSBjaGFyIGZyb20gdGhlIGlucHV0XG4gICAgICBpbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMuX2lucHV0WzBdO1xuICAgICAgICB0aGlzLnl5dGV4dCArPSBjaDtcbiAgICAgICAgdGhpcy55eWxlbmcrKztcbiAgICAgICAgdGhpcy5vZmZzZXQrKztcbiAgICAgICAgdGhpcy5tYXRjaCArPSBjaDtcbiAgICAgICAgdGhpcy5tYXRjaGVkICs9IGNoO1xuICAgICAgICB2YXIgbGluZXMgPSBjaC5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG4gICAgICAgIGlmIChsaW5lcykge1xuICAgICAgICAgIHRoaXMueXlsaW5lbm8rKztcbiAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2VbMV0rKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKDEpO1xuICAgICAgICByZXR1cm4gY2g7XG4gICAgICB9LFxuICAgICAgLy8gdW5zaGlmdHMgb25lIGNoYXIgKG9yIGEgc3RyaW5nKSBpbnRvIHRoZSBpbnB1dFxuICAgICAgdW5wdXQ6IGZ1bmN0aW9uKGNoKSB7XG4gICAgICAgIHZhciBsZW4gPSBjaC5sZW5ndGg7XG4gICAgICAgIHZhciBsaW5lcyA9IGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gY2ggKyB0aGlzLl9pbnB1dDtcbiAgICAgICAgdGhpcy55eXRleHQgPSB0aGlzLnl5dGV4dC5zdWJzdHIoMCwgdGhpcy55eXRleHQubGVuZ3RoIC0gbGVuKTtcbiAgICAgICAgdGhpcy5vZmZzZXQgLT0gbGVuO1xuICAgICAgICB2YXIgb2xkTGluZXMgPSB0aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMubWF0Y2ggPSB0aGlzLm1hdGNoLnN1YnN0cigwLCB0aGlzLm1hdGNoLmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSAxKTtcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLnl5bGluZW5vIC09IGxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSB0aGlzLnl5bGxvYy5yYW5nZTtcbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MuZmlyc3RfbGluZSxcbiAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiBsaW5lcyA/IChsaW5lcy5sZW5ndGggPT09IG9sZExpbmVzLmxlbmd0aCA/IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiA6IDApICsgb2xkTGluZXNbb2xkTGluZXMubGVuZ3RoIC0gbGluZXMubGVuZ3RoXS5sZW5ndGggLSBsaW5lc1swXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gLSBsZW5cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFtyWzBdLCByWzBdICsgdGhpcy55eWxlbmcgLSBsZW5dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBXaGVuIGNhbGxlZCBmcm9tIGFjdGlvbiwgY2FjaGVzIG1hdGNoZWQgdGV4dCBhbmQgYXBwZW5kcyBpdCBvbiBuZXh0IGFjdGlvblxuICAgICAgbW9yZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX21vcmUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBXaGVuIGNhbGxlZCBmcm9tIGFjdGlvbiwgc2lnbmFscyB0aGUgbGV4ZXIgdGhhdCB0aGlzIHJ1bGUgZmFpbHMgdG8gbWF0Y2ggdGhlIGlucHV0LCBzbyB0aGUgbmV4dCBtYXRjaGluZyBydWxlIChyZWdleCkgc2hvdWxkIGJlIHRlc3RlZCBpbnN0ZWFkLlxuICAgICAgcmVqZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFlvdSBjYW4gb25seSBpbnZva2UgcmVqZWN0KCkgaW4gdGhlIGxleGVyIHdoZW4gdGhlIGxleGVyIGlzIG9mIHRoZSBiYWNrdHJhY2tpbmcgcGVyc3Vhc2lvbiAob3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIgPSB0cnVlKS5cXG5cIiArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgIGxpbmU6IHRoaXMueXlsaW5lbm9cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyByZXRhaW4gZmlyc3QgbiBjaGFyYWN0ZXJzIG9mIHRoZSBtYXRjaFxuICAgICAgbGVzczogZnVuY3Rpb24obikge1xuICAgICAgICB0aGlzLnVucHV0KHRoaXMubWF0Y2guc2xpY2UobikpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIGFscmVhZHkgbWF0Y2hlZCBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHBhc3RJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwYXN0ID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gdGhpcy5tYXRjaC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gKHBhc3QubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikgKyBwYXN0LnN1YnN0cigtMjApLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sXG4gICAgICAvLyBkaXNwbGF5cyB1cGNvbWluZyBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHVwY29taW5nSW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbmV4dCA9IHRoaXMubWF0Y2g7XG4gICAgICAgIGlmIChuZXh0Lmxlbmd0aCA8IDIwKSB7XG4gICAgICAgICAgbmV4dCArPSB0aGlzLl9pbnB1dC5zdWJzdHIoMCwgMjAgLSBuZXh0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChuZXh0LnN1YnN0cigwLCAyMCkgKyAobmV4dC5sZW5ndGggPiAyMCA/IFwiLi4uXCIgOiBcIlwiKSkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIHRoZSBjaGFyYWN0ZXIgcG9zaXRpb24gd2hlcmUgdGhlIGxleGluZyBlcnJvciBvY2N1cnJlZCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHNob3dQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwcmUgPSB0aGlzLnBhc3RJbnB1dCgpO1xuICAgICAgICB2YXIgYyA9IG5ldyBBcnJheShwcmUubGVuZ3RoICsgMSkuam9pbihcIi1cIik7XG4gICAgICAgIHJldHVybiBwcmUgKyB0aGlzLnVwY29taW5nSW5wdXQoKSArIFwiXFxuXCIgKyBjICsgXCJeXCI7XG4gICAgICB9LFxuICAgICAgLy8gdGVzdCB0aGUgbGV4ZWQgdG9rZW46IHJldHVybiBGQUxTRSB3aGVuIG5vdCBhIG1hdGNoLCBvdGhlcndpc2UgcmV0dXJuIHRva2VuXG4gICAgICB0ZXN0X21hdGNoOiBmdW5jdGlvbihtYXRjaCwgaW5kZXhlZF9ydWxlKSB7XG4gICAgICAgIHZhciB0b2tlbiwgbGluZXMsIGJhY2t1cDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICBiYWNrdXAgPSB7XG4gICAgICAgICAgICB5eWxpbmVubzogdGhpcy55eWxpbmVubyxcbiAgICAgICAgICAgIHl5bGxvYzoge1xuICAgICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMubGFzdF9saW5lLFxuICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeXl0ZXh0OiB0aGlzLnl5dGV4dCxcbiAgICAgICAgICAgIG1hdGNoOiB0aGlzLm1hdGNoLFxuICAgICAgICAgICAgbWF0Y2hlczogdGhpcy5tYXRjaGVzLFxuICAgICAgICAgICAgbWF0Y2hlZDogdGhpcy5tYXRjaGVkLFxuICAgICAgICAgICAgeXlsZW5nOiB0aGlzLnl5bGVuZyxcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgICBfbW9yZTogdGhpcy5fbW9yZSxcbiAgICAgICAgICAgIF9pbnB1dDogdGhpcy5faW5wdXQsXG4gICAgICAgICAgICB5eTogdGhpcy55eSxcbiAgICAgICAgICAgIGNvbmRpdGlvblN0YWNrOiB0aGlzLmNvbmRpdGlvblN0YWNrLnNsaWNlKDApLFxuICAgICAgICAgICAgZG9uZTogdGhpcy5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgICAgYmFja3VwLnl5bGxvYy5yYW5nZSA9IHRoaXMueXlsbG9jLnJhbmdlLnNsaWNlKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsaW5lcyA9IG1hdGNoWzBdLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgaWYgKGxpbmVzKSB7XG4gICAgICAgICAgdGhpcy55eWxpbmVubyArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5sZW5ndGggLSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIG1hdGNoWzBdLmxlbmd0aFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnl5dGV4dCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gbWF0Y2g7XG4gICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3RoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZ107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9yZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICB0aGlzLm1hdGNoZWQgKz0gbWF0Y2hbMF07XG4gICAgICAgIHRva2VuID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodGhpcywgdGhpcy55eSwgdGhpcywgaW5kZXhlZF9ydWxlLCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pO1xuICAgICAgICBpZiAodGhpcy5kb25lICYmIHRoaXMuX2lucHV0KSB7XG4gICAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgIGZvciAodmFyIGsgaW4gYmFja3VwKSB7XG4gICAgICAgICAgICB0aGlzW2tdID0gYmFja3VwW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiBuZXh0IG1hdGNoIGluIGlucHV0XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lucHV0KSB7XG4gICAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG9rZW4sIG1hdGNoLCB0ZW1wTWF0Y2gsIGluZGV4O1xuICAgICAgICBpZiAoIXRoaXMuX21vcmUpIHtcbiAgICAgICAgICB0aGlzLnl5dGV4dCA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5tYXRjaCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJ1bGVzID0gdGhpcy5fY3VycmVudFJ1bGVzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0ZW1wTWF0Y2ggPSB0aGlzLl9pbnB1dC5tYXRjaCh0aGlzLnJ1bGVzW3J1bGVzW2ldXSk7XG4gICAgICAgICAgaWYgKHRlbXBNYXRjaCAmJiAoIW1hdGNoIHx8IHRlbXBNYXRjaFswXS5sZW5ndGggPiBtYXRjaFswXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBtYXRjaCA9IHRlbXBNYXRjaDtcbiAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgICAgIHRva2VuID0gdGhpcy50ZXN0X21hdGNoKHRlbXBNYXRjaCwgcnVsZXNbaV0pO1xuICAgICAgICAgICAgICBpZiAodG9rZW4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuZmxleCkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdG9rZW4gPSB0aGlzLnRlc3RfbWF0Y2gobWF0Y2gsIHJ1bGVzW2luZGV4XSk7XG4gICAgICAgICAgaWYgKHRva2VuICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lucHV0ID09PSBcIlwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFVucmVjb2duaXplZCB0ZXh0LlxcblwiICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggdGhhdCBoYXMgYSB0b2tlblxuICAgICAgbGV4OiBmdW5jdGlvbiBsZXgoKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5uZXh0KCk7XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubGV4KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBhY3RpdmF0ZXMgYSBuZXcgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIChwdXNoZXMgdGhlIG5ldyBsZXhlciBjb25kaXRpb24gc3RhdGUgb250byB0aGUgY29uZGl0aW9uIHN0YWNrKVxuICAgICAgYmVnaW46IGZ1bmN0aW9uIGJlZ2luKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrLnB1c2goY29uZGl0aW9uKTtcbiAgICAgIH0sXG4gICAgICAvLyBwb3AgdGhlIHByZXZpb3VzbHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvZmYgdGhlIGNvbmRpdGlvbiBzdGFja1xuICAgICAgcG9wU3RhdGU6IGZ1bmN0aW9uIHBvcFN0YXRlKCkge1xuICAgICAgICB2YXIgbiA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKG4gPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbMF07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBwcm9kdWNlIHRoZSBsZXhlciBydWxlIHNldCB3aGljaCBpcyBhY3RpdmUgZm9yIHRoZSBjdXJyZW50bHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZVxuICAgICAgX2N1cnJlbnRSdWxlczogZnVuY3Rpb24gX2N1cnJlbnRSdWxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoICYmIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbnNbdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdXS5ydWxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zW1wiSU5JVElBTFwiXS5ydWxlcztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGU7IHdoZW4gYW4gaW5kZXggYXJndW1lbnQgaXMgcHJvdmlkZWQgaXQgcHJvZHVjZXMgdGhlIE4tdGggcHJldmlvdXMgY29uZGl0aW9uIHN0YXRlLCBpZiBhdmFpbGFibGVcbiAgICAgIHRvcFN0YXRlOiBmdW5jdGlvbiB0b3BTdGF0ZShuKSB7XG4gICAgICAgIG4gPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDEgLSBNYXRoLmFicyhuIHx8IDApO1xuICAgICAgICBpZiAobiA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbbl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiSU5JVElBTFwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gYWxpYXMgZm9yIGJlZ2luKGNvbmRpdGlvbilcbiAgICAgIHB1c2hTdGF0ZTogZnVuY3Rpb24gcHVzaFN0YXRlKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmJlZ2luKGNvbmRpdGlvbik7XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIHRoZSBudW1iZXIgb2Ygc3RhdGVzIGN1cnJlbnRseSBvbiB0aGUgc3RhY2tcbiAgICAgIHN0YXRlU3RhY2tTaXplOiBmdW5jdGlvbiBzdGF0ZVN0YWNrU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoO1xuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHsgXCJjYXNlLWluc2Vuc2l0aXZlXCI6IHRydWUgfSxcbiAgICAgIHBlcmZvcm1BY3Rpb246IGZ1bmN0aW9uIGFub255bW91cyh5eSwgeXlfLCAkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zLCBZWV9TVEFSVCkge1xuICAgICAgICBzd2l0Y2ggKCRhdm9pZGluZ19uYW1lX2NvbGxpc2lvbnMpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gMTA7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgcmV0dXJuIDQ7XG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgcmV0dXJuIDExO1xuICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJhY2NfdGl0bGVcIik7XG4gICAgICAgICAgICByZXR1cm4gMTI7XG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX3RpdGxlX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImFjY19kZXNjclwiKTtcbiAgICAgICAgICAgIHJldHVybiAxNDtcbiAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX2Rlc2NyX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJhY2NfZGVzY3JfbXVsdGlsaW5lXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfZGVzY3JfbXVsdGlsaW5lX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgIHJldHVybiAxNztcbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgcmV0dXJuIDE4O1xuICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICByZXR1cm4gMTk7XG4gICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgIHJldHVybiBcIjpcIjtcbiAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgcmV0dXJuIDY7XG4gICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgIHJldHVybiBcIklOVkFMSURcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJ1bGVzOiBbL14oPzolKD8hXFx7KVteXFxuXSopL2ksIC9eKD86W15cXH1dJSVbXlxcbl0qKS9pLCAvXig/OltcXG5dKykvaSwgL14oPzpcXHMrKS9pLCAvXig/OiNbXlxcbl0qKS9pLCAvXig/OmpvdXJuZXlcXGIpL2ksIC9eKD86dGl0bGVcXHNbXiNcXG47XSspL2ksIC9eKD86YWNjVGl0bGVcXHMqOlxccyopL2ksIC9eKD86KD8hXFxufHwpKlteXFxuXSopL2ksIC9eKD86YWNjRGVzY3JcXHMqOlxccyopL2ksIC9eKD86KD8hXFxufHwpKlteXFxuXSopL2ksIC9eKD86YWNjRGVzY3JcXHMqXFx7XFxzKikvaSwgL14oPzpbXFx9XSkvaSwgL14oPzpbXlxcfV0qKS9pLCAvXig/OnNlY3Rpb25cXHNbXiM6XFxuO10rKS9pLCAvXig/OlteIzpcXG47XSspL2ksIC9eKD86OlteI1xcbjtdKykvaSwgL14oPzo6KS9pLCAvXig/OiQpL2ksIC9eKD86LikvaV0sXG4gICAgICBjb25kaXRpb25zOiB7IFwiYWNjX2Rlc2NyX211bHRpbGluZVwiOiB7IFwicnVsZXNcIjogWzEyLCAxM10sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiYWNjX2Rlc2NyXCI6IHsgXCJydWxlc1wiOiBbMTBdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImFjY190aXRsZVwiOiB7IFwicnVsZXNcIjogWzhdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIklOSVRJQUxcIjogeyBcInJ1bGVzXCI6IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA5LCAxMSwgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOV0sIFwiaW5jbHVzaXZlXCI6IHRydWUgfSB9XG4gICAgfTtcbiAgICByZXR1cm4gbGV4ZXIyO1xuICB9KCk7XG4gIHBhcnNlcjIubGV4ZXIgPSBsZXhlcjtcbiAgZnVuY3Rpb24gUGFyc2VyKCkge1xuICAgIHRoaXMueXkgPSB7fTtcbiAgfVxuICBQYXJzZXIucHJvdG90eXBlID0gcGFyc2VyMjtcbiAgcGFyc2VyMi5QYXJzZXIgPSBQYXJzZXI7XG4gIHJldHVybiBuZXcgUGFyc2VyKCk7XG59KCk7XG5wYXJzZXIucGFyc2VyID0gcGFyc2VyO1xuY29uc3QgcGFyc2VyJDEgPSBwYXJzZXI7XG5sZXQgY3VycmVudFNlY3Rpb24gPSBcIlwiO1xuY29uc3Qgc2VjdGlvbnMgPSBbXTtcbmNvbnN0IHRhc2tzID0gW107XG5jb25zdCByYXdUYXNrcyA9IFtdO1xuY29uc3QgY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgc2VjdGlvbnMubGVuZ3RoID0gMDtcbiAgdGFza3MubGVuZ3RoID0gMDtcbiAgY3VycmVudFNlY3Rpb24gPSBcIlwiO1xuICByYXdUYXNrcy5sZW5ndGggPSAwO1xuICBjbGVhciQxKCk7XG59O1xuY29uc3QgYWRkU2VjdGlvbiA9IGZ1bmN0aW9uKHR4dCkge1xuICBjdXJyZW50U2VjdGlvbiA9IHR4dDtcbiAgc2VjdGlvbnMucHVzaCh0eHQpO1xufTtcbmNvbnN0IGdldFNlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBzZWN0aW9ucztcbn07XG5jb25zdCBnZXRUYXNrcyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgYWxsSXRlbXNQcm9jZXNzZWQgPSBjb21waWxlVGFza3MoKTtcbiAgY29uc3QgbWF4RGVwdGggPSAxMDA7XG4gIGxldCBpdGVyYXRpb25Db3VudCA9IDA7XG4gIHdoaWxlICghYWxsSXRlbXNQcm9jZXNzZWQgJiYgaXRlcmF0aW9uQ291bnQgPCBtYXhEZXB0aCkge1xuICAgIGFsbEl0ZW1zUHJvY2Vzc2VkID0gY29tcGlsZVRhc2tzKCk7XG4gICAgaXRlcmF0aW9uQ291bnQrKztcbiAgfVxuICB0YXNrcy5wdXNoKC4uLnJhd1Rhc2tzKTtcbiAgcmV0dXJuIHRhc2tzO1xufTtcbmNvbnN0IHVwZGF0ZUFjdG9ycyA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCB0ZW1wQWN0b3JzID0gW107XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5wZW9wbGUpIHtcbiAgICAgIHRlbXBBY3RvcnMucHVzaCguLi50YXNrLnBlb3BsZSk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgdW5pcXVlID0gbmV3IFNldCh0ZW1wQWN0b3JzKTtcbiAgcmV0dXJuIFsuLi51bmlxdWVdLnNvcnQoKTtcbn07XG5jb25zdCBhZGRUYXNrID0gZnVuY3Rpb24oZGVzY3IsIHRhc2tEYXRhKSB7XG4gIGNvbnN0IHBpZWNlcyA9IHRhc2tEYXRhLnN1YnN0cigxKS5zcGxpdChcIjpcIik7XG4gIGxldCBzY29yZSA9IDA7XG4gIGxldCBwZWVwcyA9IFtdO1xuICBpZiAocGllY2VzLmxlbmd0aCA9PT0gMSkge1xuICAgIHNjb3JlID0gTnVtYmVyKHBpZWNlc1swXSk7XG4gICAgcGVlcHMgPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBzY29yZSA9IE51bWJlcihwaWVjZXNbMF0pO1xuICAgIHBlZXBzID0gcGllY2VzWzFdLnNwbGl0KFwiLFwiKTtcbiAgfVxuICBjb25zdCBwZW9wbGVMaXN0ID0gcGVlcHMubWFwKChzKSA9PiBzLnRyaW0oKSk7XG4gIGNvbnN0IHJhd1Rhc2sgPSB7XG4gICAgc2VjdGlvbjogY3VycmVudFNlY3Rpb24sXG4gICAgdHlwZTogY3VycmVudFNlY3Rpb24sXG4gICAgcGVvcGxlOiBwZW9wbGVMaXN0LFxuICAgIHRhc2s6IGRlc2NyLFxuICAgIHNjb3JlXG4gIH07XG4gIHJhd1Rhc2tzLnB1c2gocmF3VGFzayk7XG59O1xuY29uc3QgYWRkVGFza09yZyA9IGZ1bmN0aW9uKGRlc2NyKSB7XG4gIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgc2VjdGlvbjogY3VycmVudFNlY3Rpb24sXG4gICAgdHlwZTogY3VycmVudFNlY3Rpb24sXG4gICAgZGVzY3JpcHRpb246IGRlc2NyLFxuICAgIHRhc2s6IGRlc2NyLFxuICAgIGNsYXNzZXM6IFtdXG4gIH07XG4gIHRhc2tzLnB1c2gobmV3VGFzayk7XG59O1xuY29uc3QgY29tcGlsZVRhc2tzID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNvbXBpbGVUYXNrID0gZnVuY3Rpb24ocG9zKSB7XG4gICAgcmV0dXJuIHJhd1Rhc2tzW3Bvc10ucHJvY2Vzc2VkO1xuICB9O1xuICBsZXQgYWxsUHJvY2Vzc2VkID0gdHJ1ZTtcbiAgZm9yIChjb25zdCBbaSwgcmF3VGFza10gb2YgcmF3VGFza3MuZW50cmllcygpKSB7XG4gICAgY29tcGlsZVRhc2soaSk7XG4gICAgYWxsUHJvY2Vzc2VkID0gYWxsUHJvY2Vzc2VkICYmIHJhd1Rhc2sucHJvY2Vzc2VkO1xuICB9XG4gIHJldHVybiBhbGxQcm9jZXNzZWQ7XG59O1xuY29uc3QgZ2V0QWN0b3JzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB1cGRhdGVBY3RvcnMoKTtcbn07XG5jb25zdCBkYiA9IHtcbiAgZ2V0Q29uZmlnOiAoKSA9PiBnZXRDb25maWcoKS5qb3VybmV5LFxuICBjbGVhcixcbiAgc2V0RGlhZ3JhbVRpdGxlLFxuICBnZXREaWFncmFtVGl0bGUsXG4gIHNldEFjY1RpdGxlLFxuICBnZXRBY2NUaXRsZSxcbiAgc2V0QWNjRGVzY3JpcHRpb24sXG4gIGdldEFjY0Rlc2NyaXB0aW9uLFxuICBhZGRTZWN0aW9uLFxuICBnZXRTZWN0aW9ucyxcbiAgZ2V0VGFza3MsXG4gIGFkZFRhc2ssXG4gIGFkZFRhc2tPcmcsXG4gIGdldEFjdG9yc1xufTtcbmNvbnN0IGdldFN0eWxlcyA9IChvcHRpb25zKSA9PiBgLmxhYmVsIHtcbiAgICBmb250LWZhbWlseTogJ3RyZWJ1Y2hldCBtcycsIHZlcmRhbmEsIGFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tZXJtYWlkLWZvbnQtZmFtaWx5KTtcbiAgICBjb2xvcjogJHtvcHRpb25zLnRleHRDb2xvcn07XG4gIH1cbiAgLm1vdXRoIHtcbiAgICBzdHJva2U6ICM2NjY7XG4gIH1cblxuICBsaW5lIHtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy50ZXh0Q29sb3J9XG4gIH1cblxuICAubGVnZW5kIHtcbiAgICBmaWxsOiAke29wdGlvbnMudGV4dENvbG9yfTtcbiAgfVxuXG4gIC5sYWJlbCB0ZXh0IHtcbiAgICBmaWxsOiAjMzMzO1xuICB9XG4gIC5sYWJlbCB7XG4gICAgY29sb3I6ICR7b3B0aW9ucy50ZXh0Q29sb3J9XG4gIH1cblxuICAuZmFjZSB7XG4gICAgJHtvcHRpb25zLmZhY2VDb2xvciA/IGBmaWxsOiAke29wdGlvbnMuZmFjZUNvbG9yfWAgOiBcImZpbGw6ICNGRkY4RENcIn07XG4gICAgc3Ryb2tlOiAjOTk5O1xuICB9XG5cbiAgLm5vZGUgcmVjdCxcbiAgLm5vZGUgY2lyY2xlLFxuICAubm9kZSBlbGxpcHNlLFxuICAubm9kZSBwb2x5Z29uLFxuICAubm9kZSBwYXRoIHtcbiAgICBmaWxsOiAke29wdGlvbnMubWFpbkJrZ307XG4gICAgc3Ryb2tlOiAke29wdGlvbnMubm9kZUJvcmRlcn07XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gIH1cblxuICAubm9kZSAubGFiZWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubm9kZS5jbGlja2FibGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5hcnJvd2hlYWRQYXRoIHtcbiAgICBmaWxsOiAke29wdGlvbnMuYXJyb3doZWFkQ29sb3J9O1xuICB9XG5cbiAgLmVkZ2VQYXRoIC5wYXRoIHtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy5saW5lQ29sb3J9O1xuICAgIHN0cm9rZS13aWR0aDogMS41cHg7XG4gIH1cblxuICAuZmxvd2NoYXJ0LWxpbmsge1xuICAgIHN0cm9rZTogJHtvcHRpb25zLmxpbmVDb2xvcn07XG4gICAgZmlsbDogbm9uZTtcbiAgfVxuXG4gIC5lZGdlTGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7b3B0aW9ucy5lZGdlTGFiZWxCYWNrZ3JvdW5kfTtcbiAgICByZWN0IHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNsdXN0ZXIgcmVjdCB7XG4gIH1cblxuICAuY2x1c3RlciB0ZXh0IHtcbiAgICBmaWxsOiAke29wdGlvbnMudGl0bGVDb2xvcn07XG4gIH1cblxuICBkaXYubWVybWFpZFRvb2x0aXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgZm9udC1mYW1pbHk6ICd0cmVidWNoZXQgbXMnLCB2ZXJkYW5hLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWVybWFpZC1mb250LWZhbWlseSk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICR7b3B0aW9ucy50ZXJ0aWFyeUNvbG9yfTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke29wdGlvbnMuYm9yZGVyMn07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgfVxuXG4gIC50YXNrLXR5cGUtMCwgLnNlY3Rpb24tdHlwZS0wICB7XG4gICAgJHtvcHRpb25zLmZpbGxUeXBlMCA/IGBmaWxsOiAke29wdGlvbnMuZmlsbFR5cGUwfWAgOiBcIlwifTtcbiAgfVxuICAudGFzay10eXBlLTEsIC5zZWN0aW9uLXR5cGUtMSAge1xuICAgICR7b3B0aW9ucy5maWxsVHlwZTAgPyBgZmlsbDogJHtvcHRpb25zLmZpbGxUeXBlMX1gIDogXCJcIn07XG4gIH1cbiAgLnRhc2stdHlwZS0yLCAuc2VjdGlvbi10eXBlLTIgIHtcbiAgICAke29wdGlvbnMuZmlsbFR5cGUwID8gYGZpbGw6ICR7b3B0aW9ucy5maWxsVHlwZTJ9YCA6IFwiXCJ9O1xuICB9XG4gIC50YXNrLXR5cGUtMywgLnNlY3Rpb24tdHlwZS0zICB7XG4gICAgJHtvcHRpb25zLmZpbGxUeXBlMCA/IGBmaWxsOiAke29wdGlvbnMuZmlsbFR5cGUzfWAgOiBcIlwifTtcbiAgfVxuICAudGFzay10eXBlLTQsIC5zZWN0aW9uLXR5cGUtNCAge1xuICAgICR7b3B0aW9ucy5maWxsVHlwZTAgPyBgZmlsbDogJHtvcHRpb25zLmZpbGxUeXBlNH1gIDogXCJcIn07XG4gIH1cbiAgLnRhc2stdHlwZS01LCAuc2VjdGlvbi10eXBlLTUgIHtcbiAgICAke29wdGlvbnMuZmlsbFR5cGUwID8gYGZpbGw6ICR7b3B0aW9ucy5maWxsVHlwZTV9YCA6IFwiXCJ9O1xuICB9XG4gIC50YXNrLXR5cGUtNiwgLnNlY3Rpb24tdHlwZS02ICB7XG4gICAgJHtvcHRpb25zLmZpbGxUeXBlMCA/IGBmaWxsOiAke29wdGlvbnMuZmlsbFR5cGU2fWAgOiBcIlwifTtcbiAgfVxuICAudGFzay10eXBlLTcsIC5zZWN0aW9uLXR5cGUtNyAge1xuICAgICR7b3B0aW9ucy5maWxsVHlwZTAgPyBgZmlsbDogJHtvcHRpb25zLmZpbGxUeXBlN31gIDogXCJcIn07XG4gIH1cblxuICAuYWN0b3ItMCB7XG4gICAgJHtvcHRpb25zLmFjdG9yMCA/IGBmaWxsOiAke29wdGlvbnMuYWN0b3IwfWAgOiBcIlwifTtcbiAgfVxuICAuYWN0b3ItMSB7XG4gICAgJHtvcHRpb25zLmFjdG9yMSA/IGBmaWxsOiAke29wdGlvbnMuYWN0b3IxfWAgOiBcIlwifTtcbiAgfVxuICAuYWN0b3ItMiB7XG4gICAgJHtvcHRpb25zLmFjdG9yMiA/IGBmaWxsOiAke29wdGlvbnMuYWN0b3IyfWAgOiBcIlwifTtcbiAgfVxuICAuYWN0b3ItMyB7XG4gICAgJHtvcHRpb25zLmFjdG9yMyA/IGBmaWxsOiAke29wdGlvbnMuYWN0b3IzfWAgOiBcIlwifTtcbiAgfVxuICAuYWN0b3ItNCB7XG4gICAgJHtvcHRpb25zLmFjdG9yNCA/IGBmaWxsOiAke29wdGlvbnMuYWN0b3I0fWAgOiBcIlwifTtcbiAgfVxuICAuYWN0b3ItNSB7XG4gICAgJHtvcHRpb25zLmFjdG9yNSA/IGBmaWxsOiAke29wdGlvbnMuYWN0b3I1fWAgOiBcIlwifTtcbiAgfVxuYDtcbmNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcztcbmNvbnN0IGRyYXdSZWN0ID0gZnVuY3Rpb24oZWxlbSwgcmVjdERhdGEpIHtcbiAgcmV0dXJuIGRyYXdSZWN0JDEoZWxlbSwgcmVjdERhdGEpO1xufTtcbmNvbnN0IGRyYXdGYWNlID0gZnVuY3Rpb24oZWxlbWVudCwgZmFjZURhdGEpIHtcbiAgY29uc3QgcmFkaXVzID0gMTU7XG4gIGNvbnN0IGNpcmNsZUVsZW1lbnQgPSBlbGVtZW50LmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgZmFjZURhdGEuY3gpLmF0dHIoXCJjeVwiLCBmYWNlRGF0YS5jeSkuYXR0cihcImNsYXNzXCIsIFwiZmFjZVwiKS5hdHRyKFwiclwiLCByYWRpdXMpLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMikuYXR0cihcIm92ZXJmbG93XCIsIFwidmlzaWJsZVwiKTtcbiAgY29uc3QgZmFjZSA9IGVsZW1lbnQuYXBwZW5kKFwiZ1wiKTtcbiAgZmFjZS5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIGZhY2VEYXRhLmN4IC0gcmFkaXVzIC8gMykuYXR0cihcImN5XCIsIGZhY2VEYXRhLmN5IC0gcmFkaXVzIC8gMykuYXR0cihcInJcIiwgMS41KS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpLmF0dHIoXCJmaWxsXCIsIFwiIzY2NlwiKS5hdHRyKFwic3Ryb2tlXCIsIFwiIzY2NlwiKTtcbiAgZmFjZS5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIGZhY2VEYXRhLmN4ICsgcmFkaXVzIC8gMykuYXR0cihcImN5XCIsIGZhY2VEYXRhLmN5IC0gcmFkaXVzIC8gMykuYXR0cihcInJcIiwgMS41KS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpLmF0dHIoXCJmaWxsXCIsIFwiIzY2NlwiKS5hdHRyKFwic3Ryb2tlXCIsIFwiIzY2NlwiKTtcbiAgZnVuY3Rpb24gc21pbGUoZmFjZTIpIHtcbiAgICBjb25zdCBhcmMkMSA9IGFyYygpLnN0YXJ0QW5nbGUoTWF0aC5QSSAvIDIpLmVuZEFuZ2xlKDMgKiAoTWF0aC5QSSAvIDIpKS5pbm5lclJhZGl1cyhyYWRpdXMgLyAyKS5vdXRlclJhZGl1cyhyYWRpdXMgLyAyLjIpO1xuICAgIGZhY2UyLmFwcGVuZChcInBhdGhcIikuYXR0cihcImNsYXNzXCIsIFwibW91dGhcIikuYXR0cihcImRcIiwgYXJjJDEpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBmYWNlRGF0YS5jeCArIFwiLFwiICsgKGZhY2VEYXRhLmN5ICsgMikgKyBcIilcIik7XG4gIH1cbiAgZnVuY3Rpb24gc2FkKGZhY2UyKSB7XG4gICAgY29uc3QgYXJjJDEgPSBhcmMoKS5zdGFydEFuZ2xlKDMgKiBNYXRoLlBJIC8gMikuZW5kQW5nbGUoNSAqIChNYXRoLlBJIC8gMikpLmlubmVyUmFkaXVzKHJhZGl1cyAvIDIpLm91dGVyUmFkaXVzKHJhZGl1cyAvIDIuMik7XG4gICAgZmFjZTIuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJtb3V0aFwiKS5hdHRyKFwiZFwiLCBhcmMkMSkuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIGZhY2VEYXRhLmN4ICsgXCIsXCIgKyAoZmFjZURhdGEuY3kgKyA3KSArIFwiKVwiKTtcbiAgfVxuICBmdW5jdGlvbiBhbWJpdmFsZW50KGZhY2UyKSB7XG4gICAgZmFjZTIuYXBwZW5kKFwibGluZVwiKS5hdHRyKFwiY2xhc3NcIiwgXCJtb3V0aFwiKS5hdHRyKFwic3Ryb2tlXCIsIDIpLmF0dHIoXCJ4MVwiLCBmYWNlRGF0YS5jeCAtIDUpLmF0dHIoXCJ5MVwiLCBmYWNlRGF0YS5jeSArIDcpLmF0dHIoXCJ4MlwiLCBmYWNlRGF0YS5jeCArIDUpLmF0dHIoXCJ5MlwiLCBmYWNlRGF0YS5jeSArIDcpLmF0dHIoXCJjbGFzc1wiLCBcIm1vdXRoXCIpLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIxcHhcIikuYXR0cihcInN0cm9rZVwiLCBcIiM2NjZcIik7XG4gIH1cbiAgaWYgKGZhY2VEYXRhLnNjb3JlID4gMykge1xuICAgIHNtaWxlKGZhY2UpO1xuICB9IGVsc2UgaWYgKGZhY2VEYXRhLnNjb3JlIDwgMykge1xuICAgIHNhZChmYWNlKTtcbiAgfSBlbHNlIHtcbiAgICBhbWJpdmFsZW50KGZhY2UpO1xuICB9XG4gIHJldHVybiBjaXJjbGVFbGVtZW50O1xufTtcbmNvbnN0IGRyYXdDaXJjbGUgPSBmdW5jdGlvbihlbGVtZW50LCBjaXJjbGVEYXRhKSB7XG4gIGNvbnN0IGNpcmNsZUVsZW1lbnQgPSBlbGVtZW50LmFwcGVuZChcImNpcmNsZVwiKTtcbiAgY2lyY2xlRWxlbWVudC5hdHRyKFwiY3hcIiwgY2lyY2xlRGF0YS5jeCk7XG4gIGNpcmNsZUVsZW1lbnQuYXR0cihcImN5XCIsIGNpcmNsZURhdGEuY3kpO1xuICBjaXJjbGVFbGVtZW50LmF0dHIoXCJjbGFzc1wiLCBcImFjdG9yLVwiICsgY2lyY2xlRGF0YS5wb3MpO1xuICBjaXJjbGVFbGVtZW50LmF0dHIoXCJmaWxsXCIsIGNpcmNsZURhdGEuZmlsbCk7XG4gIGNpcmNsZUVsZW1lbnQuYXR0cihcInN0cm9rZVwiLCBjaXJjbGVEYXRhLnN0cm9rZSk7XG4gIGNpcmNsZUVsZW1lbnQuYXR0cihcInJcIiwgY2lyY2xlRGF0YS5yKTtcbiAgaWYgKGNpcmNsZUVsZW1lbnQuY2xhc3MgIT09IHZvaWQgMCkge1xuICAgIGNpcmNsZUVsZW1lbnQuYXR0cihcImNsYXNzXCIsIGNpcmNsZUVsZW1lbnQuY2xhc3MpO1xuICB9XG4gIGlmIChjaXJjbGVEYXRhLnRpdGxlICE9PSB2b2lkIDApIHtcbiAgICBjaXJjbGVFbGVtZW50LmFwcGVuZChcInRpdGxlXCIpLnRleHQoY2lyY2xlRGF0YS50aXRsZSk7XG4gIH1cbiAgcmV0dXJuIGNpcmNsZUVsZW1lbnQ7XG59O1xuY29uc3QgZHJhd1RleHQgPSBmdW5jdGlvbihlbGVtLCB0ZXh0RGF0YSkge1xuICByZXR1cm4gZHJhd1RleHQkMShlbGVtLCB0ZXh0RGF0YSk7XG59O1xuY29uc3QgZHJhd0xhYmVsID0gZnVuY3Rpb24oZWxlbSwgdHh0T2JqZWN0KSB7XG4gIGZ1bmN0aW9uIGdlblBvaW50cyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjdXQpIHtcbiAgICByZXR1cm4geCArIFwiLFwiICsgeSArIFwiIFwiICsgKHggKyB3aWR0aCkgKyBcIixcIiArIHkgKyBcIiBcIiArICh4ICsgd2lkdGgpICsgXCIsXCIgKyAoeSArIGhlaWdodCAtIGN1dCkgKyBcIiBcIiArICh4ICsgd2lkdGggLSBjdXQgKiAxLjIpICsgXCIsXCIgKyAoeSArIGhlaWdodCkgKyBcIiBcIiArIHggKyBcIixcIiArICh5ICsgaGVpZ2h0KTtcbiAgfVxuICBjb25zdCBwb2x5Z29uID0gZWxlbS5hcHBlbmQoXCJwb2x5Z29uXCIpO1xuICBwb2x5Z29uLmF0dHIoXCJwb2ludHNcIiwgZ2VuUG9pbnRzKHR4dE9iamVjdC54LCB0eHRPYmplY3QueSwgNTAsIDIwLCA3KSk7XG4gIHBvbHlnb24uYXR0cihcImNsYXNzXCIsIFwibGFiZWxCb3hcIik7XG4gIHR4dE9iamVjdC55ID0gdHh0T2JqZWN0LnkgKyB0eHRPYmplY3QubGFiZWxNYXJnaW47XG4gIHR4dE9iamVjdC54ID0gdHh0T2JqZWN0LnggKyAwLjUgKiB0eHRPYmplY3QubGFiZWxNYXJnaW47XG4gIGRyYXdUZXh0KGVsZW0sIHR4dE9iamVjdCk7XG59O1xuY29uc3QgZHJhd1NlY3Rpb24gPSBmdW5jdGlvbihlbGVtLCBzZWN0aW9uLCBjb25mMikge1xuICBjb25zdCBnID0gZWxlbS5hcHBlbmQoXCJnXCIpO1xuICBjb25zdCByZWN0ID0gZ2V0Tm90ZVJlY3QoKTtcbiAgcmVjdC54ID0gc2VjdGlvbi54O1xuICByZWN0LnkgPSBzZWN0aW9uLnk7XG4gIHJlY3QuZmlsbCA9IHNlY3Rpb24uZmlsbDtcbiAgcmVjdC53aWR0aCA9IGNvbmYyLndpZHRoICogc2VjdGlvbi50YXNrQ291bnQgKyAvLyB3aWR0aCBvZiB0aGUgdGFza3NcbiAgY29uZjIuZGlhZ3JhbU1hcmdpblggKiAoc2VjdGlvbi50YXNrQ291bnQgLSAxKTtcbiAgcmVjdC5oZWlnaHQgPSBjb25mMi5oZWlnaHQ7XG4gIHJlY3QuY2xhc3MgPSBcImpvdXJuZXktc2VjdGlvbiBzZWN0aW9uLXR5cGUtXCIgKyBzZWN0aW9uLm51bTtcbiAgcmVjdC5yeCA9IDM7XG4gIHJlY3QucnkgPSAzO1xuICBkcmF3UmVjdChnLCByZWN0KTtcbiAgX2RyYXdUZXh0Q2FuZGlkYXRlRnVuYyhjb25mMikoXG4gICAgc2VjdGlvbi50ZXh0LFxuICAgIGcsXG4gICAgcmVjdC54LFxuICAgIHJlY3QueSxcbiAgICByZWN0LndpZHRoLFxuICAgIHJlY3QuaGVpZ2h0LFxuICAgIHsgY2xhc3M6IFwiam91cm5leS1zZWN0aW9uIHNlY3Rpb24tdHlwZS1cIiArIHNlY3Rpb24ubnVtIH0sXG4gICAgY29uZjIsXG4gICAgc2VjdGlvbi5jb2xvdXJcbiAgKTtcbn07XG5sZXQgdGFza0NvdW50ID0gLTE7XG5jb25zdCBkcmF3VGFzayA9IGZ1bmN0aW9uKGVsZW0sIHRhc2ssIGNvbmYyKSB7XG4gIGNvbnN0IGNlbnRlciA9IHRhc2sueCArIGNvbmYyLndpZHRoIC8gMjtcbiAgY29uc3QgZyA9IGVsZW0uYXBwZW5kKFwiZ1wiKTtcbiAgdGFza0NvdW50Kys7XG4gIGNvbnN0IG1heEhlaWdodCA9IDMwMCArIDUgKiAzMDtcbiAgZy5hcHBlbmQoXCJsaW5lXCIpLmF0dHIoXCJpZFwiLCBcInRhc2tcIiArIHRhc2tDb3VudCkuYXR0cihcIngxXCIsIGNlbnRlcikuYXR0cihcInkxXCIsIHRhc2sueSkuYXR0cihcIngyXCIsIGNlbnRlcikuYXR0cihcInkyXCIsIG1heEhlaWdodCkuYXR0cihcImNsYXNzXCIsIFwidGFzay1saW5lXCIpLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIxcHhcIikuYXR0cihcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCI0IDJcIikuYXR0cihcInN0cm9rZVwiLCBcIiM2NjZcIik7XG4gIGRyYXdGYWNlKGcsIHtcbiAgICBjeDogY2VudGVyLFxuICAgIGN5OiAzMDAgKyAoNSAtIHRhc2suc2NvcmUpICogMzAsXG4gICAgc2NvcmU6IHRhc2suc2NvcmVcbiAgfSk7XG4gIGNvbnN0IHJlY3QgPSBnZXROb3RlUmVjdCgpO1xuICByZWN0LnggPSB0YXNrLng7XG4gIHJlY3QueSA9IHRhc2sueTtcbiAgcmVjdC5maWxsID0gdGFzay5maWxsO1xuICByZWN0LndpZHRoID0gY29uZjIud2lkdGg7XG4gIHJlY3QuaGVpZ2h0ID0gY29uZjIuaGVpZ2h0O1xuICByZWN0LmNsYXNzID0gXCJ0YXNrIHRhc2stdHlwZS1cIiArIHRhc2subnVtO1xuICByZWN0LnJ4ID0gMztcbiAgcmVjdC5yeSA9IDM7XG4gIGRyYXdSZWN0KGcsIHJlY3QpO1xuICBsZXQgeFBvcyA9IHRhc2sueCArIDE0O1xuICB0YXNrLnBlb3BsZS5mb3JFYWNoKChwZXJzb24pID0+IHtcbiAgICBjb25zdCBjb2xvdXIgPSB0YXNrLmFjdG9yc1twZXJzb25dLmNvbG9yO1xuICAgIGNvbnN0IGNpcmNsZSA9IHtcbiAgICAgIGN4OiB4UG9zLFxuICAgICAgY3k6IHRhc2sueSxcbiAgICAgIHI6IDcsXG4gICAgICBmaWxsOiBjb2xvdXIsXG4gICAgICBzdHJva2U6IFwiIzAwMFwiLFxuICAgICAgdGl0bGU6IHBlcnNvbixcbiAgICAgIHBvczogdGFzay5hY3RvcnNbcGVyc29uXS5wb3NpdGlvblxuICAgIH07XG4gICAgZHJhd0NpcmNsZShnLCBjaXJjbGUpO1xuICAgIHhQb3MgKz0gMTA7XG4gIH0pO1xuICBfZHJhd1RleHRDYW5kaWRhdGVGdW5jKGNvbmYyKShcbiAgICB0YXNrLnRhc2ssXG4gICAgZyxcbiAgICByZWN0LngsXG4gICAgcmVjdC55LFxuICAgIHJlY3Qud2lkdGgsXG4gICAgcmVjdC5oZWlnaHQsXG4gICAgeyBjbGFzczogXCJ0YXNrXCIgfSxcbiAgICBjb25mMixcbiAgICB0YXNrLmNvbG91clxuICApO1xufTtcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kUmVjdCA9IGZ1bmN0aW9uKGVsZW0sIGJvdW5kczIpIHtcbiAgZHJhd0JhY2tncm91bmRSZWN0JDEoZWxlbSwgYm91bmRzMik7XG59O1xuY29uc3QgX2RyYXdUZXh0Q2FuZGlkYXRlRnVuYyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBieVRleHQoY29udGVudCwgZywgeCwgeSwgd2lkdGgsIGhlaWdodCwgdGV4dEF0dHJzLCBjb2xvdXIpIHtcbiAgICBjb25zdCB0ZXh0ID0gZy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIHggKyB3aWR0aCAvIDIpLmF0dHIoXCJ5XCIsIHkgKyBoZWlnaHQgLyAyICsgNSkuc3R5bGUoXCJmb250LWNvbG9yXCIsIGNvbG91cikuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKS50ZXh0KGNvbnRlbnQpO1xuICAgIF9zZXRUZXh0QXR0cnModGV4dCwgdGV4dEF0dHJzKTtcbiAgfVxuICBmdW5jdGlvbiBieVRzcGFuKGNvbnRlbnQsIGcsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHRleHRBdHRycywgY29uZjIsIGNvbG91cikge1xuICAgIGNvbnN0IHsgdGFza0ZvbnRTaXplLCB0YXNrRm9udEZhbWlseSB9ID0gY29uZjI7XG4gICAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KC88YnJcXHMqXFwvPz4vZ2kpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGR5ID0gaSAqIHRhc2tGb250U2l6ZSAtIHRhc2tGb250U2l6ZSAqIChsaW5lcy5sZW5ndGggLSAxKSAvIDI7XG4gICAgICBjb25zdCB0ZXh0ID0gZy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIHggKyB3aWR0aCAvIDIpLmF0dHIoXCJ5XCIsIHkpLmF0dHIoXCJmaWxsXCIsIGNvbG91cikuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKS5zdHlsZShcImZvbnQtc2l6ZVwiLCB0YXNrRm9udFNpemUpLnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgdGFza0ZvbnRGYW1pbHkpO1xuICAgICAgdGV4dC5hcHBlbmQoXCJ0c3BhblwiKS5hdHRyKFwieFwiLCB4ICsgd2lkdGggLyAyKS5hdHRyKFwiZHlcIiwgZHkpLnRleHQobGluZXNbaV0pO1xuICAgICAgdGV4dC5hdHRyKFwieVwiLCB5ICsgaGVpZ2h0IC8gMikuYXR0cihcImRvbWluYW50LWJhc2VsaW5lXCIsIFwiY2VudHJhbFwiKS5hdHRyKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsIFwiY2VudHJhbFwiKTtcbiAgICAgIF9zZXRUZXh0QXR0cnModGV4dCwgdGV4dEF0dHJzKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gYnlGbyhjb250ZW50LCBnLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0ZXh0QXR0cnMsIGNvbmYyKSB7XG4gICAgY29uc3QgYm9keSA9IGcuYXBwZW5kKFwic3dpdGNoXCIpO1xuICAgIGNvbnN0IGYgPSBib2R5LmFwcGVuZChcImZvcmVpZ25PYmplY3RcIikuYXR0cihcInhcIiwgeCkuYXR0cihcInlcIiwgeSkuYXR0cihcIndpZHRoXCIsIHdpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCkuYXR0cihcInBvc2l0aW9uXCIsIFwiZml4ZWRcIik7XG4gICAgY29uc3QgdGV4dCA9IGYuYXBwZW5kKFwieGh0bWw6ZGl2XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcInRhYmxlXCIpLnN0eWxlKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKS5zdHlsZShcIndpZHRoXCIsIFwiMTAwJVwiKTtcbiAgICB0ZXh0LmFwcGVuZChcImRpdlwiKS5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbFwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJ0YWJsZS1jZWxsXCIpLnN0eWxlKFwidGV4dC1hbGlnblwiLCBcImNlbnRlclwiKS5zdHlsZShcInZlcnRpY2FsLWFsaWduXCIsIFwibWlkZGxlXCIpLnRleHQoY29udGVudCk7XG4gICAgYnlUc3Bhbihjb250ZW50LCBib2R5LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0ZXh0QXR0cnMsIGNvbmYyKTtcbiAgICBfc2V0VGV4dEF0dHJzKHRleHQsIHRleHRBdHRycyk7XG4gIH1cbiAgZnVuY3Rpb24gX3NldFRleHRBdHRycyh0b1RleHQsIGZyb21UZXh0QXR0cnNEaWN0KSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZnJvbVRleHRBdHRyc0RpY3QpIHtcbiAgICAgIGlmIChrZXkgaW4gZnJvbVRleHRBdHRyc0RpY3QpIHtcbiAgICAgICAgdG9UZXh0LmF0dHIoa2V5LCBmcm9tVGV4dEF0dHJzRGljdFtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbmYyKSB7XG4gICAgcmV0dXJuIGNvbmYyLnRleHRQbGFjZW1lbnQgPT09IFwiZm9cIiA/IGJ5Rm8gOiBjb25mMi50ZXh0UGxhY2VtZW50ID09PSBcIm9sZFwiID8gYnlUZXh0IDogYnlUc3BhbjtcbiAgfTtcbn0oKTtcbmNvbnN0IGluaXRHcmFwaGljcyA9IGZ1bmN0aW9uKGdyYXBoaWNzKSB7XG4gIGdyYXBoaWNzLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBcImFycm93aGVhZFwiKS5hdHRyKFwicmVmWFwiLCA1KS5hdHRyKFwicmVmWVwiLCAyKS5hdHRyKFwibWFya2VyV2lkdGhcIiwgNikuYXR0cihcIm1hcmtlckhlaWdodFwiLCA0KS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSAwLDAgViA0IEw2LDIgWlwiKTtcbn07XG5jb25zdCBzdmdEcmF3ID0ge1xuICBkcmF3UmVjdCxcbiAgZHJhd0NpcmNsZSxcbiAgZHJhd1NlY3Rpb24sXG4gIGRyYXdUZXh0LFxuICBkcmF3TGFiZWwsXG4gIGRyYXdUYXNrLFxuICBkcmF3QmFja2dyb3VuZFJlY3QsXG4gIGluaXRHcmFwaGljc1xufTtcbmNvbnN0IHNldENvbmYgPSBmdW5jdGlvbihjbmYpIHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNuZik7XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBjb25mW2tleV0gPSBjbmZba2V5XTtcbiAgfSk7XG59O1xuY29uc3QgYWN0b3JzID0ge307XG5mdW5jdGlvbiBkcmF3QWN0b3JMZWdlbmQoZGlhZ3JhbTIpIHtcbiAgY29uc3QgY29uZjIgPSBnZXRDb25maWcoKS5qb3VybmV5O1xuICBsZXQgeVBvcyA9IDYwO1xuICBPYmplY3Qua2V5cyhhY3RvcnMpLmZvckVhY2goKHBlcnNvbikgPT4ge1xuICAgIGNvbnN0IGNvbG91ciA9IGFjdG9yc1twZXJzb25dLmNvbG9yO1xuICAgIGNvbnN0IGNpcmNsZURhdGEgPSB7XG4gICAgICBjeDogMjAsXG4gICAgICBjeTogeVBvcyxcbiAgICAgIHI6IDcsXG4gICAgICBmaWxsOiBjb2xvdXIsXG4gICAgICBzdHJva2U6IFwiIzAwMFwiLFxuICAgICAgcG9zOiBhY3RvcnNbcGVyc29uXS5wb3NpdGlvblxuICAgIH07XG4gICAgc3ZnRHJhdy5kcmF3Q2lyY2xlKGRpYWdyYW0yLCBjaXJjbGVEYXRhKTtcbiAgICBjb25zdCBsYWJlbERhdGEgPSB7XG4gICAgICB4OiA0MCxcbiAgICAgIHk6IHlQb3MgKyA3LFxuICAgICAgZmlsbDogXCIjNjY2XCIsXG4gICAgICB0ZXh0OiBwZXJzb24sXG4gICAgICB0ZXh0TWFyZ2luOiBjb25mMi5ib3hUZXh0TWFyZ2luIHwgNVxuICAgIH07XG4gICAgc3ZnRHJhdy5kcmF3VGV4dChkaWFncmFtMiwgbGFiZWxEYXRhKTtcbiAgICB5UG9zICs9IDIwO1xuICB9KTtcbn1cbmNvbnN0IGNvbmYgPSBnZXRDb25maWcoKS5qb3VybmV5O1xuY29uc3QgTEVGVF9NQVJHSU4gPSBjb25mLmxlZnRNYXJnaW47XG5jb25zdCBkcmF3ID0gZnVuY3Rpb24odGV4dCwgaWQsIHZlcnNpb24sIGRpYWdPYmopIHtcbiAgY29uc3QgY29uZjIgPSBnZXRDb25maWcoKS5qb3VybmV5O1xuICBjb25zdCBzZWN1cml0eUxldmVsID0gZ2V0Q29uZmlnKCkuc2VjdXJpdHlMZXZlbDtcbiAgbGV0IHNhbmRib3hFbGVtZW50O1xuICBpZiAoc2VjdXJpdHlMZXZlbCA9PT0gXCJzYW5kYm94XCIpIHtcbiAgICBzYW5kYm94RWxlbWVudCA9IHNlbGVjdChcIiNpXCIgKyBpZCk7XG4gIH1cbiAgY29uc3Qgcm9vdCA9IHNlY3VyaXR5TGV2ZWwgPT09IFwic2FuZGJveFwiID8gc2VsZWN0KHNhbmRib3hFbGVtZW50Lm5vZGVzKClbMF0uY29udGVudERvY3VtZW50LmJvZHkpIDogc2VsZWN0KFwiYm9keVwiKTtcbiAgYm91bmRzLmluaXQoKTtcbiAgY29uc3QgZGlhZ3JhbTIgPSByb290LnNlbGVjdChcIiNcIiArIGlkKTtcbiAgc3ZnRHJhdy5pbml0R3JhcGhpY3MoZGlhZ3JhbTIpO1xuICBjb25zdCB0YXNrczIgPSBkaWFnT2JqLmRiLmdldFRhc2tzKCk7XG4gIGNvbnN0IHRpdGxlID0gZGlhZ09iai5kYi5nZXREaWFncmFtVGl0bGUoKTtcbiAgY29uc3QgYWN0b3JOYW1lcyA9IGRpYWdPYmouZGIuZ2V0QWN0b3JzKCk7XG4gIGZvciAoY29uc3QgbWVtYmVyIGluIGFjdG9ycykge1xuICAgIGRlbGV0ZSBhY3RvcnNbbWVtYmVyXTtcbiAgfVxuICBsZXQgYWN0b3JQb3MgPSAwO1xuICBhY3Rvck5hbWVzLmZvckVhY2goKGFjdG9yTmFtZSkgPT4ge1xuICAgIGFjdG9yc1thY3Rvck5hbWVdID0ge1xuICAgICAgY29sb3I6IGNvbmYyLmFjdG9yQ29sb3Vyc1thY3RvclBvcyAlIGNvbmYyLmFjdG9yQ29sb3Vycy5sZW5ndGhdLFxuICAgICAgcG9zaXRpb246IGFjdG9yUG9zXG4gICAgfTtcbiAgICBhY3RvclBvcysrO1xuICB9KTtcbiAgZHJhd0FjdG9yTGVnZW5kKGRpYWdyYW0yKTtcbiAgYm91bmRzLmluc2VydCgwLCAwLCBMRUZUX01BUkdJTiwgT2JqZWN0LmtleXMoYWN0b3JzKS5sZW5ndGggKiA1MCk7XG4gIGRyYXdUYXNrcyhkaWFncmFtMiwgdGFza3MyLCAwKTtcbiAgY29uc3QgYm94ID0gYm91bmRzLmdldEJvdW5kcygpO1xuICBpZiAodGl0bGUpIHtcbiAgICBkaWFncmFtMi5hcHBlbmQoXCJ0ZXh0XCIpLnRleHQodGl0bGUpLmF0dHIoXCJ4XCIsIExFRlRfTUFSR0lOKS5hdHRyKFwiZm9udC1zaXplXCIsIFwiNGV4XCIpLmF0dHIoXCJmb250LXdlaWdodFwiLCBcImJvbGRcIikuYXR0cihcInlcIiwgMjUpO1xuICB9XG4gIGNvbnN0IGhlaWdodCA9IGJveC5zdG9weSAtIGJveC5zdGFydHkgKyAyICogY29uZjIuZGlhZ3JhbU1hcmdpblk7XG4gIGNvbnN0IHdpZHRoID0gTEVGVF9NQVJHSU4gKyBib3guc3RvcHggKyAyICogY29uZjIuZGlhZ3JhbU1hcmdpblg7XG4gIGNvbmZpZ3VyZVN2Z1NpemUoZGlhZ3JhbTIsIGhlaWdodCwgd2lkdGgsIGNvbmYyLnVzZU1heFdpZHRoKTtcbiAgZGlhZ3JhbTIuYXBwZW5kKFwibGluZVwiKS5hdHRyKFwieDFcIiwgTEVGVF9NQVJHSU4pLmF0dHIoXCJ5MVwiLCBjb25mMi5oZWlnaHQgKiA0KS5hdHRyKFwieDJcIiwgd2lkdGggLSBMRUZUX01BUkdJTiAtIDQpLmF0dHIoXCJ5MlwiLCBjb25mMi5oZWlnaHQgKiA0KS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDQpLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKS5hdHRyKFwibWFya2VyLWVuZFwiLCBcInVybCgjYXJyb3doZWFkKVwiKTtcbiAgY29uc3QgZXh0cmFWZXJ0Rm9yVGl0bGUgPSB0aXRsZSA/IDcwIDogMDtcbiAgZGlhZ3JhbTIuYXR0cihcInZpZXdCb3hcIiwgYCR7Ym94LnN0YXJ0eH0gLTI1ICR7d2lkdGh9ICR7aGVpZ2h0ICsgZXh0cmFWZXJ0Rm9yVGl0bGV9YCk7XG4gIGRpYWdyYW0yLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKTtcbiAgZGlhZ3JhbTIuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBleHRyYVZlcnRGb3JUaXRsZSArIDI1KTtcbn07XG5jb25zdCBib3VuZHMgPSB7XG4gIGRhdGE6IHtcbiAgICBzdGFydHg6IHZvaWQgMCxcbiAgICBzdG9weDogdm9pZCAwLFxuICAgIHN0YXJ0eTogdm9pZCAwLFxuICAgIHN0b3B5OiB2b2lkIDBcbiAgfSxcbiAgdmVydGljYWxQb3M6IDAsXG4gIHNlcXVlbmNlSXRlbXM6IFtdLFxuICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNlcXVlbmNlSXRlbXMgPSBbXTtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICBzdGFydHg6IHZvaWQgMCxcbiAgICAgIHN0b3B4OiB2b2lkIDAsXG4gICAgICBzdGFydHk6IHZvaWQgMCxcbiAgICAgIHN0b3B5OiB2b2lkIDBcbiAgICB9O1xuICAgIHRoaXMudmVydGljYWxQb3MgPSAwO1xuICB9LFxuICB1cGRhdGVWYWw6IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWwsIGZ1bikge1xuICAgIGlmIChvYmpba2V5XSA9PT0gdm9pZCAwKSB7XG4gICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSBmdW4odmFsLCBvYmpba2V5XSk7XG4gICAgfVxuICB9LFxuICB1cGRhdGVCb3VuZHM6IGZ1bmN0aW9uKHN0YXJ0eCwgc3RhcnR5LCBzdG9weCwgc3RvcHkpIHtcbiAgICBjb25zdCBjb25mMiA9IGdldENvbmZpZygpLmpvdXJuZXk7XG4gICAgY29uc3QgX3NlbGYgPSB0aGlzO1xuICAgIGxldCBjbnQgPSAwO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUZuKHR5cGUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiB1cGRhdGVJdGVtQm91bmRzKGl0ZW0pIHtcbiAgICAgICAgY250Kys7XG4gICAgICAgIGNvbnN0IG4gPSBfc2VsZi5zZXF1ZW5jZUl0ZW1zLmxlbmd0aCAtIGNudCArIDE7XG4gICAgICAgIF9zZWxmLnVwZGF0ZVZhbChpdGVtLCBcInN0YXJ0eVwiLCBzdGFydHkgLSBuICogY29uZjIuYm94TWFyZ2luLCBNYXRoLm1pbik7XG4gICAgICAgIF9zZWxmLnVwZGF0ZVZhbChpdGVtLCBcInN0b3B5XCIsIHN0b3B5ICsgbiAqIGNvbmYyLmJveE1hcmdpbiwgTWF0aC5tYXgpO1xuICAgICAgICBfc2VsZi51cGRhdGVWYWwoYm91bmRzLmRhdGEsIFwic3RhcnR4XCIsIHN0YXJ0eCAtIG4gKiBjb25mMi5ib3hNYXJnaW4sIE1hdGgubWluKTtcbiAgICAgICAgX3NlbGYudXBkYXRlVmFsKGJvdW5kcy5kYXRhLCBcInN0b3B4XCIsIHN0b3B4ICsgbiAqIGNvbmYyLmJveE1hcmdpbiwgTWF0aC5tYXgpO1xuICAgICAgICBpZiAoISh0eXBlID09PSBcImFjdGl2YXRpb25cIikpIHtcbiAgICAgICAgICBfc2VsZi51cGRhdGVWYWwoaXRlbSwgXCJzdGFydHhcIiwgc3RhcnR4IC0gbiAqIGNvbmYyLmJveE1hcmdpbiwgTWF0aC5taW4pO1xuICAgICAgICAgIF9zZWxmLnVwZGF0ZVZhbChpdGVtLCBcInN0b3B4XCIsIHN0b3B4ICsgbiAqIGNvbmYyLmJveE1hcmdpbiwgTWF0aC5tYXgpO1xuICAgICAgICAgIF9zZWxmLnVwZGF0ZVZhbChib3VuZHMuZGF0YSwgXCJzdGFydHlcIiwgc3RhcnR5IC0gbiAqIGNvbmYyLmJveE1hcmdpbiwgTWF0aC5taW4pO1xuICAgICAgICAgIF9zZWxmLnVwZGF0ZVZhbChib3VuZHMuZGF0YSwgXCJzdG9weVwiLCBzdG9weSArIG4gKiBjb25mMi5ib3hNYXJnaW4sIE1hdGgubWF4KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5zZXF1ZW5jZUl0ZW1zLmZvckVhY2godXBkYXRlRm4oKSk7XG4gIH0sXG4gIGluc2VydDogZnVuY3Rpb24oc3RhcnR4LCBzdGFydHksIHN0b3B4LCBzdG9weSkge1xuICAgIGNvbnN0IF9zdGFydHggPSBNYXRoLm1pbihzdGFydHgsIHN0b3B4KTtcbiAgICBjb25zdCBfc3RvcHggPSBNYXRoLm1heChzdGFydHgsIHN0b3B4KTtcbiAgICBjb25zdCBfc3RhcnR5ID0gTWF0aC5taW4oc3RhcnR5LCBzdG9weSk7XG4gICAgY29uc3QgX3N0b3B5ID0gTWF0aC5tYXgoc3RhcnR5LCBzdG9weSk7XG4gICAgdGhpcy51cGRhdGVWYWwoYm91bmRzLmRhdGEsIFwic3RhcnR4XCIsIF9zdGFydHgsIE1hdGgubWluKTtcbiAgICB0aGlzLnVwZGF0ZVZhbChib3VuZHMuZGF0YSwgXCJzdGFydHlcIiwgX3N0YXJ0eSwgTWF0aC5taW4pO1xuICAgIHRoaXMudXBkYXRlVmFsKGJvdW5kcy5kYXRhLCBcInN0b3B4XCIsIF9zdG9weCwgTWF0aC5tYXgpO1xuICAgIHRoaXMudXBkYXRlVmFsKGJvdW5kcy5kYXRhLCBcInN0b3B5XCIsIF9zdG9weSwgTWF0aC5tYXgpO1xuICAgIHRoaXMudXBkYXRlQm91bmRzKF9zdGFydHgsIF9zdGFydHksIF9zdG9weCwgX3N0b3B5KTtcbiAgfSxcbiAgYnVtcFZlcnRpY2FsUG9zOiBmdW5jdGlvbihidW1wKSB7XG4gICAgdGhpcy52ZXJ0aWNhbFBvcyA9IHRoaXMudmVydGljYWxQb3MgKyBidW1wO1xuICAgIHRoaXMuZGF0YS5zdG9weSA9IHRoaXMudmVydGljYWxQb3M7XG4gIH0sXG4gIGdldFZlcnRpY2FsUG9zOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbFBvcztcbiAgfSxcbiAgZ2V0Qm91bmRzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG59O1xuY29uc3QgZmlsbHMgPSBjb25mLnNlY3Rpb25GaWxscztcbmNvbnN0IHRleHRDb2xvdXJzID0gY29uZi5zZWN0aW9uQ29sb3VycztcbmNvbnN0IGRyYXdUYXNrcyA9IGZ1bmN0aW9uKGRpYWdyYW0yLCB0YXNrczIsIHZlcnRpY2FsUG9zKSB7XG4gIGNvbnN0IGNvbmYyID0gZ2V0Q29uZmlnKCkuam91cm5leTtcbiAgbGV0IGxhc3RTZWN0aW9uID0gXCJcIjtcbiAgY29uc3Qgc2VjdGlvblZIZWlnaHQgPSBjb25mMi5oZWlnaHQgKiAyICsgY29uZjIuZGlhZ3JhbU1hcmdpblk7XG4gIGNvbnN0IHRhc2tQb3MgPSB2ZXJ0aWNhbFBvcyArIHNlY3Rpb25WSGVpZ2h0O1xuICBsZXQgc2VjdGlvbk51bWJlciA9IDA7XG4gIGxldCBmaWxsID0gXCIjQ0NDXCI7XG4gIGxldCBjb2xvdXIgPSBcImJsYWNrXCI7XG4gIGxldCBudW0gPSAwO1xuICBmb3IgKGNvbnN0IFtpLCB0YXNrXSBvZiB0YXNrczIuZW50cmllcygpKSB7XG4gICAgaWYgKGxhc3RTZWN0aW9uICE9PSB0YXNrLnNlY3Rpb24pIHtcbiAgICAgIGZpbGwgPSBmaWxsc1tzZWN0aW9uTnVtYmVyICUgZmlsbHMubGVuZ3RoXTtcbiAgICAgIG51bSA9IHNlY3Rpb25OdW1iZXIgJSBmaWxscy5sZW5ndGg7XG4gICAgICBjb2xvdXIgPSB0ZXh0Q29sb3Vyc1tzZWN0aW9uTnVtYmVyICUgdGV4dENvbG91cnMubGVuZ3RoXTtcbiAgICAgIGxldCB0YXNrSW5TZWN0aW9uQ291bnQgPSAwO1xuICAgICAgY29uc3QgY3VycmVudFNlY3Rpb24yID0gdGFzay5zZWN0aW9uO1xuICAgICAgZm9yIChsZXQgdGFza0luZGV4ID0gaTsgdGFza0luZGV4IDwgdGFza3MyLmxlbmd0aDsgdGFza0luZGV4KyspIHtcbiAgICAgICAgaWYgKHRhc2tzMlt0YXNrSW5kZXhdLnNlY3Rpb24gPT0gY3VycmVudFNlY3Rpb24yKSB7XG4gICAgICAgICAgdGFza0luU2VjdGlvbkNvdW50ID0gdGFza0luU2VjdGlvbkNvdW50ICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qgc2VjdGlvbiA9IHtcbiAgICAgICAgeDogaSAqIGNvbmYyLnRhc2tNYXJnaW4gKyBpICogY29uZjIud2lkdGggKyBMRUZUX01BUkdJTixcbiAgICAgICAgeTogNTAsXG4gICAgICAgIHRleHQ6IHRhc2suc2VjdGlvbixcbiAgICAgICAgZmlsbCxcbiAgICAgICAgbnVtLFxuICAgICAgICBjb2xvdXIsXG4gICAgICAgIHRhc2tDb3VudDogdGFza0luU2VjdGlvbkNvdW50XG4gICAgICB9O1xuICAgICAgc3ZnRHJhdy5kcmF3U2VjdGlvbihkaWFncmFtMiwgc2VjdGlvbiwgY29uZjIpO1xuICAgICAgbGFzdFNlY3Rpb24gPSB0YXNrLnNlY3Rpb247XG4gICAgICBzZWN0aW9uTnVtYmVyKys7XG4gICAgfVxuICAgIGNvbnN0IHRhc2tBY3RvcnMgPSB0YXNrLnBlb3BsZS5yZWR1Y2UoKGFjYywgYWN0b3JOYW1lKSA9PiB7XG4gICAgICBpZiAoYWN0b3JzW2FjdG9yTmFtZV0pIHtcbiAgICAgICAgYWNjW2FjdG9yTmFtZV0gPSBhY3RvcnNbYWN0b3JOYW1lXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIHRhc2sueCA9IGkgKiBjb25mMi50YXNrTWFyZ2luICsgaSAqIGNvbmYyLndpZHRoICsgTEVGVF9NQVJHSU47XG4gICAgdGFzay55ID0gdGFza1BvcztcbiAgICB0YXNrLndpZHRoID0gY29uZjIuZGlhZ3JhbU1hcmdpblg7XG4gICAgdGFzay5oZWlnaHQgPSBjb25mMi5kaWFncmFtTWFyZ2luWTtcbiAgICB0YXNrLmNvbG91ciA9IGNvbG91cjtcbiAgICB0YXNrLmZpbGwgPSBmaWxsO1xuICAgIHRhc2subnVtID0gbnVtO1xuICAgIHRhc2suYWN0b3JzID0gdGFza0FjdG9ycztcbiAgICBzdmdEcmF3LmRyYXdUYXNrKGRpYWdyYW0yLCB0YXNrLCBjb25mMik7XG4gICAgYm91bmRzLmluc2VydCh0YXNrLngsIHRhc2sueSwgdGFzay54ICsgdGFzay53aWR0aCArIGNvbmYyLnRhc2tNYXJnaW4sIDMwMCArIDUgKiAzMCk7XG4gIH1cbn07XG5jb25zdCByZW5kZXJlciA9IHtcbiAgc2V0Q29uZixcbiAgZHJhd1xufTtcbmNvbnN0IGRpYWdyYW0gPSB7XG4gIHBhcnNlcjogcGFyc2VyJDEsXG4gIGRiLFxuICByZW5kZXJlcixcbiAgc3R5bGVzLFxuICBpbml0OiAoY25mKSA9PiB7XG4gICAgcmVuZGVyZXIuc2V0Q29uZihjbmYuam91cm5leSk7XG4gICAgZGIuY2xlYXIoKTtcbiAgfVxufTtcbmV4cG9ydCB7XG4gIGRpYWdyYW1cbn07XG4iXSwibmFtZXMiOlsiY2xlYXIkMSIsImdldENvbmZpZyIsInNldERpYWdyYW1UaXRsZSIsImdldERpYWdyYW1UaXRsZSIsInNldEFjY1RpdGxlIiwiZ2V0QWNjVGl0bGUiLCJzZXRBY2NEZXNjcmlwdGlvbiIsImdldEFjY0Rlc2NyaXB0aW9uIiwiZHJhd1JlY3QkMSIsImFyYyIsImRyYXdUZXh0JDEiLCJnZXROb3RlUmVjdCIsImRyYXdCYWNrZ3JvdW5kUmVjdCQxIiwic2VsZWN0IiwiY29uZmlndXJlU3ZnU2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFZQSxJQUFJLE1BQU0sR0FBRyxXQUFXO0FBQ3hCLEVBQUUsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3ZELE1BQU0sQ0FBQztBQUNQLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN2SSxFQUFFLElBQUksT0FBTyxHQUFHO0FBQ2hCLElBQUksS0FBSyxFQUFFLFNBQVMsS0FBSyxHQUFHO0FBQzVCLEtBQUs7QUFDTCxJQUFJLEVBQUUsRUFBRSxFQUFFO0FBQ1YsSUFBSSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLDJCQUEyQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7QUFDM1UsSUFBSSxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUU7QUFDOVAsSUFBSSxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0gsSUFBSSxhQUFhLEVBQUUsU0FBUyxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQ3JGLE1BQU0sSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDN0IsTUFBTSxRQUFRLE9BQU87QUFDckIsUUFBUSxLQUFLLENBQUM7QUFDZCxVQUFVLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1QixRQUFRLEtBQUssQ0FBQztBQUNkLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDdEIsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxDQUFDO0FBQ2QsVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsQyxVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLENBQUMsQ0FBQztBQUNmLFFBQVEsS0FBSyxDQUFDO0FBQ2QsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLENBQUMsQ0FBQztBQUNmLFFBQVEsS0FBSyxDQUFDO0FBQ2QsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN0QixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLENBQUM7QUFDZCxVQUFVLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9DLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssQ0FBQztBQUNkLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDakMsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQyxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUUsQ0FBQztBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDakMsVUFBVSxFQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekMsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUMxQixVQUFVLE1BQU07QUFDaEIsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JlLElBQUksY0FBYyxFQUFFLEVBQUU7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QTtBQUNBLElBQUksRUFBRSxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUM1RDtBQUNBO0FBQ0EsSUFBSSxFQUFFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzVEO0FBQ0E7QUFDQSxJQUFJLEVBQUUsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDNUQ7QUFDQTtBQUNBLElBQUksRUFBRSxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUM1RDtBQUNBO0FBQ0EsSUFBSSxFQUFFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN0RDtBQUNBO0FBQ0EsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3REO0FBQ0E7QUFDQSxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDdEQ7QUFDQTtBQUNBLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN0RDtBQUNBO0FBQ0EsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3REO0FBQ0E7QUFDQSxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDdEQ7QUFDQSxDQUFDLENBQUM7QUFDRixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUM7QUFDekIsTUFBTSxRQUFRLEdBQUcsU0FBUyxJQUFJLEVBQUUsUUFBUSxFQUFFO0FBQzFDLEVBQUUsT0FBT0MsOEJBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxRQUFRLEdBQUcsU0FBUyxPQUFPLEVBQUUsUUFBUSxFQUFFO0FBQzdDLEVBQUUsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLEVBQUUsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzdMLEVBQUUsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDckwsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3JMLEVBQUUsU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFO0FBQ3hCLElBQUksTUFBTSxLQUFLLEdBQUdDLE9BQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztBQUM5SCxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxHQUFHLFFBQVEsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDL0ksR0FBRztBQUNILEVBQUUsU0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFO0FBQ3RCLElBQUksTUFBTSxLQUFLLEdBQUdBLE9BQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDbEksSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksR0FBRyxRQUFRLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQy9JLEdBQUc7QUFDSCxFQUFFLFNBQVMsVUFBVSxDQUFDLEtBQUssRUFBRTtBQUM3QixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElB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UyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2pDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL08sRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ2QsSUFBSSxFQUFFLEVBQUUsTUFBTTtBQUNkLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7QUFDbkMsSUFBSSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7QUFDckIsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLE1BQU0sSUFBSSxHQUFHQSxpQ0FBVyxFQUFFLENBQUM7QUFDN0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbEIsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbEIsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDeEIsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDM0IsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7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LE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM1QyxJQUFJLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzNDLElBQUksTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUMsSUFBSSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMzQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMzRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMzRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEQsR0FBRztBQUNILEVBQUUsZUFBZSxFQUFFLFNBQVMsSUFBSSxFQUFFO0FBQ2xDLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztBQUMvQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7QUFD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
