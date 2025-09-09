'use strict';

var index = require('./index-deb671d6.js');
var svgDrawCommon08f97a94 = require('./svgDrawCommon-08f97a94-4d2ac00a.js');
require('./main-5c8f274d.js');
var arc = require('./arc-3a1d4100.js');
require('obsidian');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam91cm5leURpYWdyYW0tNDkzOTdiMDItZjIxODc3N2QuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9tZXJtYWlkL2Rpc3Qvam91cm5leURpYWdyYW0tNDkzOTdiMDIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYyBhcyBnZXRDb25maWcsIHEgYXMgc2V0RGlhZ3JhbVRpdGxlLCB0IGFzIGdldERpYWdyYW1UaXRsZSwgcyBhcyBzZXRBY2NUaXRsZSwgZyBhcyBnZXRBY2NUaXRsZSwgYiBhcyBzZXRBY2NEZXNjcmlwdGlvbiwgYSBhcyBnZXRBY2NEZXNjcmlwdGlvbiwgdiBhcyBjbGVhciQxLCBpIGFzIGNvbmZpZ3VyZVN2Z1NpemUgfSBmcm9tIFwiLi9tZXJtYWlkLWI1ODYwYjU0LmpzXCI7XG5pbXBvcnQgeyBhcmMsIHNlbGVjdCB9IGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgZCBhcyBkcmF3UmVjdCQxLCBmIGFzIGRyYXdUZXh0JDEsIGEgYXMgZHJhd0JhY2tncm91bmRSZWN0JDEsIGcgYXMgZ2V0Tm90ZVJlY3QgfSBmcm9tIFwiLi9zdmdEcmF3Q29tbW9uLTA4Zjk3YTk0LmpzXCI7XG5pbXBvcnQgXCJ0cy1kZWRlbnRcIjtcbmltcG9ydCBcImRheWpzXCI7XG5pbXBvcnQgXCJAYnJhaW50cmVlL3Nhbml0aXplLXVybFwiO1xuaW1wb3J0IFwiZG9tcHVyaWZ5XCI7XG5pbXBvcnQgXCJraHJvbWFcIjtcbmltcG9ydCBcImxvZGFzaC1lcy9tZW1vaXplLmpzXCI7XG5pbXBvcnQgXCJsb2Rhc2gtZXMvbWVyZ2UuanNcIjtcbmltcG9ydCBcInN0eWxpc1wiO1xuaW1wb3J0IFwibG9kYXNoLWVzL2lzRW1wdHkuanNcIjtcbnZhciBwYXJzZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG8gPSBmdW5jdGlvbihrLCB2LCBvMiwgbCkge1xuICAgIGZvciAobzIgPSBvMiB8fCB7fSwgbCA9IGsubGVuZ3RoOyBsLS07IG8yW2tbbF1dID0gdilcbiAgICAgIDtcbiAgICByZXR1cm4gbzI7XG4gIH0sICRWMCA9IFs2LCA4LCAxMCwgMTEsIDEyLCAxNCwgMTYsIDE3LCAxOF0sICRWMSA9IFsxLCA5XSwgJFYyID0gWzEsIDEwXSwgJFYzID0gWzEsIDExXSwgJFY0ID0gWzEsIDEyXSwgJFY1ID0gWzEsIDEzXSwgJFY2ID0gWzEsIDE0XTtcbiAgdmFyIHBhcnNlcjIgPSB7XG4gICAgdHJhY2U6IGZ1bmN0aW9uIHRyYWNlKCkge1xuICAgIH0sXG4gICAgeXk6IHt9LFxuICAgIHN5bWJvbHNfOiB7IFwiZXJyb3JcIjogMiwgXCJzdGFydFwiOiAzLCBcImpvdXJuZXlcIjogNCwgXCJkb2N1bWVudFwiOiA1LCBcIkVPRlwiOiA2LCBcImxpbmVcIjogNywgXCJTUEFDRVwiOiA4LCBcInN0YXRlbWVudFwiOiA5LCBcIk5FV0xJTkVcIjogMTAsIFwidGl0bGVcIjogMTEsIFwiYWNjX3RpdGxlXCI6IDEyLCBcImFjY190aXRsZV92YWx1ZVwiOiAxMywgXCJhY2NfZGVzY3JcIjogMTQsIFwiYWNjX2Rlc2NyX3ZhbHVlXCI6IDE1LCBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIjogMTYsIFwic2VjdGlvblwiOiAxNywgXCJ0YXNrTmFtZVwiOiAxOCwgXCJ0YXNrRGF0YVwiOiAxOSwgXCIkYWNjZXB0XCI6IDAsIFwiJGVuZFwiOiAxIH0sXG4gICAgdGVybWluYWxzXzogeyAyOiBcImVycm9yXCIsIDQ6IFwiam91cm5leVwiLCA2OiBcIkVPRlwiLCA4OiBcIlNQQUNFXCIsIDEwOiBcIk5FV0xJTkVcIiwgMTE6IFwidGl0bGVcIiwgMTI6IFwiYWNjX3RpdGxlXCIsIDEzOiBcImFjY190aXRsZV92YWx1ZVwiLCAxNDogXCJhY2NfZGVzY3JcIiwgMTU6IFwiYWNjX2Rlc2NyX3ZhbHVlXCIsIDE2OiBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIiwgMTc6IFwic2VjdGlvblwiLCAxODogXCJ0YXNrTmFtZVwiLCAxOTogXCJ0YXNrRGF0YVwiIH0sXG4gICAgcHJvZHVjdGlvbnNfOiBbMCwgWzMsIDNdLCBbNSwgMF0sIFs1LCAyXSwgWzcsIDJdLCBbNywgMV0sIFs3LCAxXSwgWzcsIDFdLCBbOSwgMV0sIFs5LCAyXSwgWzksIDJdLCBbOSwgMV0sIFs5LCAxXSwgWzksIDJdXSxcbiAgICBwZXJmb3JtQWN0aW9uOiBmdW5jdGlvbiBhbm9ueW1vdXMoeXl0ZXh0LCB5eWxlbmcsIHl5bGluZW5vLCB5eSwgeXlzdGF0ZSwgJCQsIF8kKSB7XG4gICAgICB2YXIgJDAgPSAkJC5sZW5ndGggLSAxO1xuICAgICAgc3dpdGNoICh5eXN0YXRlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gJCRbJDAgLSAxXTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuJCA9IFtdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDAgLSAxXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICB0aGlzLiQgPSBbXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIHl5LnNldERpYWdyYW1UaXRsZSgkJFskMF0uc3Vic3RyKDYpKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0uc3Vic3RyKDYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdLnRyaW0oKTtcbiAgICAgICAgICB5eS5zZXRBY2NUaXRsZSh0aGlzLiQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXS50cmltKCk7XG4gICAgICAgICAgeXkuc2V0QWNjRGVzY3JpcHRpb24odGhpcy4kKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICB5eS5hZGRTZWN0aW9uKCQkWyQwXS5zdWJzdHIoOCkpO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXS5zdWJzdHIoOCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgeXkuYWRkVGFzaygkJFskMCAtIDFdLCAkJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9IFwidGFza1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gICAgdGFibGU6IFt7IDM6IDEsIDQ6IFsxLCAyXSB9LCB7IDE6IFszXSB9LCBvKCRWMCwgWzIsIDJdLCB7IDU6IDMgfSksIHsgNjogWzEsIDRdLCA3OiA1LCA4OiBbMSwgNl0sIDk6IDcsIDEwOiBbMSwgOF0sIDExOiAkVjEsIDEyOiAkVjIsIDE0OiAkVjMsIDE2OiAkVjQsIDE3OiAkVjUsIDE4OiAkVjYgfSwgbygkVjAsIFsyLCA3XSwgeyAxOiBbMiwgMV0gfSksIG8oJFYwLCBbMiwgM10pLCB7IDk6IDE1LCAxMTogJFYxLCAxMjogJFYyLCAxNDogJFYzLCAxNjogJFY0LCAxNzogJFY1LCAxODogJFY2IH0sIG8oJFYwLCBbMiwgNV0pLCBvKCRWMCwgWzIsIDZdKSwgbygkVjAsIFsyLCA4XSksIHsgMTM6IFsxLCAxNl0gfSwgeyAxNTogWzEsIDE3XSB9LCBvKCRWMCwgWzIsIDExXSksIG8oJFYwLCBbMiwgMTJdKSwgeyAxOTogWzEsIDE4XSB9LCBvKCRWMCwgWzIsIDRdKSwgbygkVjAsIFsyLCA5XSksIG8oJFYwLCBbMiwgMTBdKSwgbygkVjAsIFsyLCAxM10pXSxcbiAgICBkZWZhdWx0QWN0aW9uczoge30sXG4gICAgcGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcbiAgICAgIGlmIChoYXNoLnJlY292ZXJhYmxlKSB7XG4gICAgICAgIHRoaXMudHJhY2Uoc3RyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihzdHIpO1xuICAgICAgICBlcnJvci5oYXNoID0gaGFzaDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcywgc3RhY2sgPSBbMF0sIHRzdGFjayA9IFtdLCB2c3RhY2sgPSBbbnVsbF0sIGxzdGFjayA9IFtdLCB0YWJsZSA9IHRoaXMudGFibGUsIHl5dGV4dCA9IFwiXCIsIHl5bGluZW5vID0gMCwgeXlsZW5nID0gMCwgVEVSUk9SID0gMiwgRU9GID0gMTtcbiAgICAgIHZhciBhcmdzID0gbHN0YWNrLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHZhciBsZXhlcjIgPSBPYmplY3QuY3JlYXRlKHRoaXMubGV4ZXIpO1xuICAgICAgdmFyIHNoYXJlZFN0YXRlID0geyB5eToge30gfTtcbiAgICAgIGZvciAodmFyIGsgaW4gdGhpcy55eSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMueXksIGspKSB7XG4gICAgICAgICAgc2hhcmVkU3RhdGUueXlba10gPSB0aGlzLnl5W2tdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXhlcjIuc2V0SW5wdXQoaW5wdXQsIHNoYXJlZFN0YXRlLnl5KTtcbiAgICAgIHNoYXJlZFN0YXRlLnl5LmxleGVyID0gbGV4ZXIyO1xuICAgICAgc2hhcmVkU3RhdGUueXkucGFyc2VyID0gdGhpcztcbiAgICAgIGlmICh0eXBlb2YgbGV4ZXIyLnl5bGxvYyA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGxleGVyMi55eWxsb2MgPSB7fTtcbiAgICAgIH1cbiAgICAgIHZhciB5eWxvYyA9IGxleGVyMi55eWxsb2M7XG4gICAgICBsc3RhY2sucHVzaCh5eWxvYyk7XG4gICAgICB2YXIgcmFuZ2VzID0gbGV4ZXIyLm9wdGlvbnMgJiYgbGV4ZXIyLm9wdGlvbnMucmFuZ2VzO1xuICAgICAgaWYgKHR5cGVvZiBzaGFyZWRTdGF0ZS55eS5wYXJzZUVycm9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhpcy5wYXJzZUVycm9yID0gc2hhcmVkU3RhdGUueXkucGFyc2VFcnJvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFyc2VFcnJvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZUVycm9yO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gbGV4KCkge1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHRva2VuID0gdHN0YWNrLnBvcCgpIHx8IGxleGVyMi5sZXgoKSB8fCBFT0Y7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBpZiAodG9rZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgdHN0YWNrID0gdG9rZW47XG4gICAgICAgICAgICB0b2tlbiA9IHRzdGFjay5wb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG9rZW4gPSBzZWxmLnN5bWJvbHNfW3Rva2VuXSB8fCB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICB9XG4gICAgICB2YXIgc3ltYm9sLCBzdGF0ZSwgYWN0aW9uLCByLCB5eXZhbCA9IHt9LCBwLCBsZW4sIG5ld1N0YXRlLCBleHBlY3RlZDtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHN0YXRlID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlXSkge1xuICAgICAgICAgIGFjdGlvbiA9IHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzeW1ib2wgPT09IG51bGwgfHwgdHlwZW9mIHN5bWJvbCA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBzeW1ib2wgPSBsZXgoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWN0aW9uID0gdGFibGVbc3RhdGVdICYmIHRhYmxlW3N0YXRlXVtzeW1ib2xdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSBcInVuZGVmaW5lZFwiIHx8ICFhY3Rpb24ubGVuZ3RoIHx8ICFhY3Rpb25bMF0pIHtcbiAgICAgICAgICB2YXIgZXJyU3RyID0gXCJcIjtcbiAgICAgICAgICBleHBlY3RlZCA9IFtdO1xuICAgICAgICAgIGZvciAocCBpbiB0YWJsZVtzdGF0ZV0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRlcm1pbmFsc19bcF0gJiYgcCA+IFRFUlJPUikge1xuICAgICAgICAgICAgICBleHBlY3RlZC5wdXNoKFwiJ1wiICsgdGhpcy50ZXJtaW5hbHNfW3BdICsgXCInXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobGV4ZXIyLnNob3dQb3NpdGlvbikge1xuICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjpcXG5cIiArIGxleGVyMi5zaG93UG9zaXRpb24oKSArIFwiXFxuRXhwZWN0aW5nIFwiICsgZXhwZWN0ZWQuam9pbihcIiwgXCIpICsgXCIsIGdvdCAnXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJTdHIgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoeXlsaW5lbm8gKyAxKSArIFwiOiBVbmV4cGVjdGVkIFwiICsgKHN5bWJvbCA9PSBFT0YgPyBcImVuZCBvZiBpbnB1dFwiIDogXCInXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wYXJzZUVycm9yKGVyclN0ciwge1xuICAgICAgICAgICAgdGV4dDogbGV4ZXIyLm1hdGNoLFxuICAgICAgICAgICAgdG9rZW46IHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCxcbiAgICAgICAgICAgIGxpbmU6IGxleGVyMi55eWxpbmVubyxcbiAgICAgICAgICAgIGxvYzogeXlsb2MsXG4gICAgICAgICAgICBleHBlY3RlZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rpb25bMF0gaW5zdGFuY2VvZiBBcnJheSAmJiBhY3Rpb24ubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcnNlIEVycm9yOiBtdWx0aXBsZSBhY3Rpb25zIHBvc3NpYmxlIGF0IHN0YXRlOiBcIiArIHN0YXRlICsgXCIsIHRva2VuOiBcIiArIHN5bWJvbCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChhY3Rpb25bMF0pIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBzdGFjay5wdXNoKHN5bWJvbCk7XG4gICAgICAgICAgICB2c3RhY2sucHVzaChsZXhlcjIueXl0ZXh0KTtcbiAgICAgICAgICAgIGxzdGFjay5wdXNoKGxleGVyMi55eWxsb2MpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChhY3Rpb25bMV0pO1xuICAgICAgICAgICAgc3ltYm9sID0gbnVsbDtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeXlsZW5nID0gbGV4ZXIyLnl5bGVuZztcbiAgICAgICAgICAgICAgeXl0ZXh0ID0gbGV4ZXIyLnl5dGV4dDtcbiAgICAgICAgICAgICAgeXlsaW5lbm8gPSBsZXhlcjIueXlsaW5lbm87XG4gICAgICAgICAgICAgIHl5bG9jID0gbGV4ZXIyLnl5bGxvYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxlbiA9IHRoaXMucHJvZHVjdGlvbnNfW2FjdGlvblsxXV1bMV07XG4gICAgICAgICAgICB5eXZhbC4kID0gdnN0YWNrW3ZzdGFjay5sZW5ndGggLSBsZW5dO1xuICAgICAgICAgICAgeXl2YWwuXyQgPSB7XG4gICAgICAgICAgICAgIGZpcnN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgbGFzdF9saW5lOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9jb2x1bW5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocmFuZ2VzKSB7XG4gICAgICAgICAgICAgIHl5dmFsLl8kLnJhbmdlID0gW1xuICAgICAgICAgICAgICAgIGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0ucmFuZ2VbMF0sXG4gICAgICAgICAgICAgICAgbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5yYW5nZVsxXVxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgciA9IHRoaXMucGVyZm9ybUFjdGlvbi5hcHBseSh5eXZhbCwgW1xuICAgICAgICAgICAgICB5eXRleHQsXG4gICAgICAgICAgICAgIHl5bGVuZyxcbiAgICAgICAgICAgICAgeXlsaW5lbm8sXG4gICAgICAgICAgICAgIHNoYXJlZFN0YXRlLnl5LFxuICAgICAgICAgICAgICBhY3Rpb25bMV0sXG4gICAgICAgICAgICAgIHZzdGFjayxcbiAgICAgICAgICAgICAgbHN0YWNrXG4gICAgICAgICAgICBdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIHN0YWNrID0gc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4gKiAyKTtcbiAgICAgICAgICAgICAgdnN0YWNrID0gdnN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcbiAgICAgICAgICAgICAgbHN0YWNrID0gbHN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YWNrLnB1c2godGhpcy5wcm9kdWN0aW9uc19bYWN0aW9uWzFdXVswXSk7XG4gICAgICAgICAgICB2c3RhY2sucHVzaCh5eXZhbC4kKTtcbiAgICAgICAgICAgIGxzdGFjay5wdXNoKHl5dmFsLl8kKTtcbiAgICAgICAgICAgIG5ld1N0YXRlID0gdGFibGVbc3RhY2tbc3RhY2subGVuZ3RoIC0gMl1dW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDFdXTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV3U3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbiAgdmFyIGxleGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxleGVyMiA9IHtcbiAgICAgIEVPRjogMSxcbiAgICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XG4gICAgICAgIGlmICh0aGlzLnl5LnBhcnNlcikge1xuICAgICAgICAgIHRoaXMueXkucGFyc2VyLnBhcnNlRXJyb3Ioc3RyLCBoYXNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJlc2V0cyB0aGUgbGV4ZXIsIHNldHMgbmV3IGlucHV0XG4gICAgICBzZXRJbnB1dDogZnVuY3Rpb24oaW5wdXQsIHl5KSB7XG4gICAgICAgIHRoaXMueXkgPSB5eSB8fCB0aGlzLnl5IHx8IHt9O1xuICAgICAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuICAgICAgICB0aGlzLl9tb3JlID0gdGhpcy5fYmFja3RyYWNrID0gdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDA7XG4gICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbXCJJTklUSUFMXCJdO1xuICAgICAgICB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogMCxcbiAgICAgICAgICBsYXN0X2xpbmU6IDEsXG4gICAgICAgICAgbGFzdF9jb2x1bW46IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFswLCAwXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIGNvbnN1bWVzIGFuZCByZXR1cm5zIG9uZSBjaGFyIGZyb20gdGhlIGlucHV0XG4gICAgICBpbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMuX2lucHV0WzBdO1xuICAgICAgICB0aGlzLnl5dGV4dCArPSBjaDtcbiAgICAgICAgdGhpcy55eWxlbmcrKztcbiAgICAgICAgdGhpcy5vZmZzZXQrKztcbiAgICAgICAgdGhpcy5tYXRjaCArPSBjaDtcbiAgICAgICAgdGhpcy5tYXRjaGVkICs9IGNoO1xuICAgICAgICB2YXIgbGluZXMgPSBjaC5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG4gICAgICAgIGlmIChsaW5lcykge1xuICAgICAgICAgIHRoaXMueXlsaW5lbm8rKztcbiAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2VbMV0rKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKDEpO1xuICAgICAgICByZXR1cm4gY2g7XG4gICAgICB9LFxuICAgICAgLy8gdW5zaGlmdHMgb25lIGNoYXIgKG9yIGEgc3RyaW5nKSBpbnRvIHRoZSBpbnB1dFxuICAgICAgdW5wdXQ6IGZ1bmN0aW9uKGNoKSB7XG4gICAgICAgIHZhciBsZW4gPSBjaC5sZW5ndGg7XG4gICAgICAgIHZhciBsaW5lcyA9IGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gY2ggKyB0aGlzLl9pbnB1dDtcbiAgICAgICAgdGhpcy55eXRleHQgPSB0aGlzLnl5dGV4dC5zdWJzdHIoMCwgdGhpcy55eXRleHQubGVuZ3RoIC0gbGVuKTtcbiAgICAgICAgdGhpcy5vZmZzZXQgLT0gbGVuO1xuICAgICAgICB2YXIgb2xkTGluZXMgPSB0aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMubWF0Y2ggPSB0aGlzLm1hdGNoLnN1YnN0cigwLCB0aGlzLm1hdGNoLmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSAxKTtcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLnl5bGluZW5vIC09IGxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSB0aGlzLnl5bGxvYy5yYW5nZTtcbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MuZmlyc3RfbGluZSxcbiAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiBsaW5lcyA/IChsaW5lcy5sZW5ndGggPT09IG9sZExpbmVzLmxlbmd0aCA/IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiA6IDApICsgb2xkTGluZXNbb2xkTGluZXMubGVuZ3RoIC0gbGluZXMubGVuZ3RoXS5sZW5ndGggLSBsaW5lc1swXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gLSBsZW5cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFtyWzBdLCByWzBdICsgdGhpcy55eWxlbmcgLSBsZW5dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBXaGVuIGNhbGxlZCBmcm9tIGFjdGlvbiwgY2FjaGVzIG1hdGNoZWQgdGV4dCBhbmQgYXBwZW5kcyBpdCBvbiBuZXh0IGFjdGlvblxuICAgICAgbW9yZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX21vcmUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBXaGVuIGNhbGxlZCBmcm9tIGFjdGlvbiwgc2lnbmFscyB0aGUgbGV4ZXIgdGhhdCB0aGlzIHJ1bGUgZmFpbHMgdG8gbWF0Y2ggdGhlIGlucHV0LCBzbyB0aGUgbmV4dCBtYXRjaGluZyBydWxlIChyZWdleCkgc2hvdWxkIGJlIHRlc3RlZCBpbnN0ZWFkLlxuICAgICAgcmVqZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFlvdSBjYW4gb25seSBpbnZva2UgcmVqZWN0KCkgaW4gdGhlIGxleGVyIHdoZW4gdGhlIGxleGVyIGlzIG9mIHRoZSBiYWNrdHJhY2tpbmcgcGVyc3Vhc2lvbiAob3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIgPSB0cnVlKS5cXG5cIiArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgIGxpbmU6IHRoaXMueXlsaW5lbm9cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyByZXRhaW4gZmlyc3QgbiBjaGFyYWN0ZXJzIG9mIHRoZSBtYXRjaFxuICAgICAgbGVzczogZnVuY3Rpb24obikge1xuICAgICAgICB0aGlzLnVucHV0KHRoaXMubWF0Y2guc2xpY2UobikpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIGFscmVhZHkgbWF0Y2hlZCBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHBhc3RJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwYXN0ID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gdGhpcy5tYXRjaC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gKHBhc3QubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikgKyBwYXN0LnN1YnN0cigtMjApLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sXG4gICAgICAvLyBkaXNwbGF5cyB1cGNvbWluZyBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHVwY29taW5nSW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbmV4dCA9IHRoaXMubWF0Y2g7XG4gICAgICAgIGlmIChuZXh0Lmxlbmd0aCA8IDIwKSB7XG4gICAgICAgICAgbmV4dCArPSB0aGlzLl9pbnB1dC5zdWJzdHIoMCwgMjAgLSBuZXh0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChuZXh0LnN1YnN0cigwLCAyMCkgKyAobmV4dC5sZW5ndGggPiAyMCA/IFwiLi4uXCIgOiBcIlwiKSkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIHRoZSBjaGFyYWN0ZXIgcG9zaXRpb24gd2hlcmUgdGhlIGxleGluZyBlcnJvciBvY2N1cnJlZCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHNob3dQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwcmUgPSB0aGlzLnBhc3RJbnB1dCgpO1xuICAgICAgICB2YXIgYyA9IG5ldyBBcnJheShwcmUubGVuZ3RoICsgMSkuam9pbihcIi1cIik7XG4gICAgICAgIHJldHVybiBwcmUgKyB0aGlzLnVwY29taW5nSW5wdXQoKSArIFwiXFxuXCIgKyBjICsgXCJeXCI7XG4gICAgICB9LFxuICAgICAgLy8gdGVzdCB0aGUgbGV4ZWQgdG9rZW46IHJldHVybiBGQUxTRSB3aGVuIG5vdCBhIG1hdGNoLCBvdGhlcndpc2UgcmV0dXJuIHRva2VuXG4gICAgICB0ZXN0X21hdGNoOiBmdW5jdGlvbihtYXRjaCwgaW5kZXhlZF9ydWxlKSB7XG4gICAgICAgIHZhciB0b2tlbiwgbGluZXMsIGJhY2t1cDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICBiYWNrdXAgPSB7XG4gICAgICAgICAgICB5eWxpbmVubzogdGhpcy55eWxpbmVubyxcbiAgICAgICAgICAgIHl5bGxvYzoge1xuICAgICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMubGFzdF9saW5lLFxuICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeXl0ZXh0OiB0aGlzLnl5dGV4dCxcbiAgICAgICAgICAgIG1hdGNoOiB0aGlzLm1hdGNoLFxuICAgICAgICAgICAgbWF0Y2hlczogdGhpcy5tYXRjaGVzLFxuICAgICAgICAgICAgbWF0Y2hlZDogdGhpcy5tYXRjaGVkLFxuICAgICAgICAgICAgeXlsZW5nOiB0aGlzLnl5bGVuZyxcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgICBfbW9yZTogdGhpcy5fbW9yZSxcbiAgICAgICAgICAgIF9pbnB1dDogdGhpcy5faW5wdXQsXG4gICAgICAgICAgICB5eTogdGhpcy55eSxcbiAgICAgICAgICAgIGNvbmRpdGlvblN0YWNrOiB0aGlzLmNvbmRpdGlvblN0YWNrLnNsaWNlKDApLFxuICAgICAgICAgICAgZG9uZTogdGhpcy5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgICAgYmFja3VwLnl5bGxvYy5yYW5nZSA9IHRoaXMueXlsbG9jLnJhbmdlLnNsaWNlKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsaW5lcyA9IG1hdGNoWzBdLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgaWYgKGxpbmVzKSB7XG4gICAgICAgICAgdGhpcy55eWxpbmVubyArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5sZW5ndGggLSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIG1hdGNoWzBdLmxlbmd0aFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnl5dGV4dCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gbWF0Y2g7XG4gICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3RoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZ107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9yZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICB0aGlzLm1hdGNoZWQgKz0gbWF0Y2hbMF07XG4gICAgICAgIHRva2VuID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodGhpcywgdGhpcy55eSwgdGhpcywgaW5kZXhlZF9ydWxlLCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pO1xuICAgICAgICBpZiAodGhpcy5kb25lICYmIHRoaXMuX2lucHV0KSB7XG4gICAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgIGZvciAodmFyIGsgaW4gYmFja3VwKSB7XG4gICAgICAgICAgICB0aGlzW2tdID0gYmFja3VwW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiBuZXh0IG1hdGNoIGluIGlucHV0XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lucHV0KSB7XG4gICAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG9rZW4sIG1hdGNoLCB0ZW1wTWF0Y2gsIGluZGV4O1xuICAgICAgICBpZiAoIXRoaXMuX21vcmUpIHtcbiAgICAgICAgICB0aGlzLnl5dGV4dCA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5tYXRjaCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJ1bGVzID0gdGhpcy5fY3VycmVudFJ1bGVzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0ZW1wTWF0Y2ggPSB0aGlzLl9pbnB1dC5tYXRjaCh0aGlzLnJ1bGVzW3J1bGVzW2ldXSk7XG4gICAgICAgICAgaWYgKHRlbXBNYXRjaCAmJiAoIW1hdGNoIHx8IHRlbXBNYXRjaFswXS5sZW5ndGggPiBtYXRjaFswXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBtYXRjaCA9IHRlbXBNYXRjaDtcbiAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgICAgIHRva2VuID0gdGhpcy50ZXN0X21hdGNoKHRlbXBNYXRjaCwgcnVsZXNbaV0pO1xuICAgICAgICAgICAgICBpZiAodG9rZW4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuZmxleCkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdG9rZW4gPSB0aGlzLnRlc3RfbWF0Y2gobWF0Y2gsIHJ1bGVzW2luZGV4XSk7XG4gICAgICAgICAgaWYgKHRva2VuICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lucHV0ID09PSBcIlwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFVucmVjb2duaXplZCB0ZXh0LlxcblwiICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggdGhhdCBoYXMgYSB0b2tlblxuICAgICAgbGV4OiBmdW5jdGlvbiBsZXgoKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5uZXh0KCk7XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubGV4KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBhY3RpdmF0ZXMgYSBuZXcgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIChwdXNoZXMgdGhlIG5ldyBsZXhlciBjb25kaXRpb24gc3RhdGUgb250byB0aGUgY29uZGl0aW9uIHN0YWNrKVxuICAgICAgYmVnaW46IGZ1bmN0aW9uIGJlZ2luKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrLnB1c2goY29uZGl0aW9uKTtcbiAgICAgIH0sXG4gICAgICAvLyBwb3AgdGhlIHByZXZpb3VzbHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvZmYgdGhlIGNvbmRpdGlvbiBzdGFja1xuICAgICAgcG9wU3RhdGU6IGZ1bmN0aW9uIHBvcFN0YXRlKCkge1xuICAgICAgICB2YXIgbiA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKG4gPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbMF07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBwcm9kdWNlIHRoZSBsZXhlciBydWxlIHNldCB3aGljaCBpcyBhY3RpdmUgZm9yIHRoZSBjdXJyZW50bHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZVxuICAgICAgX2N1cnJlbnRSdWxlczogZnVuY3Rpb24gX2N1cnJlbnRSdWxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoICYmIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbnNbdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdXS5ydWxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zW1wiSU5JVElBTFwiXS5ydWxlcztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGU7IHdoZW4gYW4gaW5kZXggYXJndW1lbnQgaXMgcHJvdmlkZWQgaXQgcHJvZHVjZXMgdGhlIE4tdGggcHJldmlvdXMgY29uZGl0aW9uIHN0YXRlLCBpZiBhdmFpbGFibGVcbiAgICAgIHRvcFN0YXRlOiBmdW5jdGlvbiB0b3BTdGF0ZShuKSB7XG4gICAgICAgIG4gPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDEgLSBNYXRoLmFicyhuIHx8IDApO1xuICAgICAgICBpZiAobiA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbbl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiSU5JVElBTFwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gYWxpYXMgZm9yIGJlZ2luKGNvbmRpdGlvbilcbiAgICAgIHB1c2hTdGF0ZTogZnVuY3Rpb24gcHVzaFN0YXRlKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmJlZ2luKGNvbmRpdGlvbik7XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIHRoZSBudW1iZXIgb2Ygc3RhdGVzIGN1cnJlbnRseSBvbiB0aGUgc3RhY2tcbiAgICAgIHN0YXRlU3RhY2tTaXplOiBmdW5jdGlvbiBzdGF0ZVN0YWNrU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoO1xuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHsgXCJjYXNlLWluc2Vuc2l0aXZlXCI6IHRydWUgfSxcbiAgICAgIHBlcmZvcm1BY3Rpb246IGZ1bmN0aW9uIGFub255bW91cyh5eSwgeXlfLCAkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zLCBZWV9TVEFSVCkge1xuICAgICAgICBzd2l0Y2ggKCRhdm9pZGluZ19uYW1lX2NvbGxpc2lvbnMpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gMTA7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgcmV0dXJuIDQ7XG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgcmV0dXJuIDExO1xuICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJhY2NfdGl0bGVcIik7XG4gICAgICAgICAgICByZXR1cm4gMTI7XG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX3RpdGxlX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImFjY19kZXNjclwiKTtcbiAgICAgICAgICAgIHJldHVybiAxNDtcbiAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX2Rlc2NyX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJhY2NfZGVzY3JfbXVsdGlsaW5lXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfZGVzY3JfbXVsdGlsaW5lX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgIHJldHVybiAxNztcbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgcmV0dXJuIDE4O1xuICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICByZXR1cm4gMTk7XG4gICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgIHJldHVybiBcIjpcIjtcbiAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgcmV0dXJuIDY7XG4gICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgIHJldHVybiBcIklOVkFMSURcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJ1bGVzOiBbL14oPzolKD8hXFx7KVteXFxuXSopL2ksIC9eKD86W15cXH1dJSVbXlxcbl0qKS9pLCAvXig/OltcXG5dKykvaSwgL14oPzpcXHMrKS9pLCAvXig/OiNbXlxcbl0qKS9pLCAvXig/OmpvdXJuZXlcXGIpL2ksIC9eKD86dGl0bGVcXHNbXiNcXG47XSspL2ksIC9eKD86YWNjVGl0bGVcXHMqOlxccyopL2ksIC9eKD86KD8hXFxufHwpKlteXFxuXSopL2ksIC9eKD86YWNjRGVzY3JcXHMqOlxccyopL2ksIC9eKD86KD8hXFxufHwpKlteXFxuXSopL2ksIC9eKD86YWNjRGVzY3JcXHMqXFx7XFxzKikvaSwgL14oPzpbXFx9XSkvaSwgL14oPzpbXlxcfV0qKS9pLCAvXig/OnNlY3Rpb25cXHNbXiM6XFxuO10rKS9pLCAvXig/OlteIzpcXG47XSspL2ksIC9eKD86OlteI1xcbjtdKykvaSwgL14oPzo6KS9pLCAvXig/OiQpL2ksIC9eKD86LikvaV0sXG4gICAgICBjb25kaXRpb25zOiB7IFwiYWNjX2Rlc2NyX211bHRpbGluZVwiOiB7IFwicnVsZXNcIjogWzEyLCAxM10sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiYWNjX2Rlc2NyXCI6IHsgXCJydWxlc1wiOiBbMTBdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImFjY190aXRsZVwiOiB7IFwicnVsZXNcIjogWzhdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIklOSVRJQUxcIjogeyBcInJ1bGVzXCI6IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA5LCAxMSwgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOV0sIFwiaW5jbHVzaXZlXCI6IHRydWUgfSB9XG4gICAgfTtcbiAgICByZXR1cm4gbGV4ZXIyO1xuICB9KCk7XG4gIHBhcnNlcjIubGV4ZXIgPSBsZXhlcjtcbiAgZnVuY3Rpb24gUGFyc2VyKCkge1xuICAgIHRoaXMueXkgPSB7fTtcbiAgfVxuICBQYXJzZXIucHJvdG90eXBlID0gcGFyc2VyMjtcbiAgcGFyc2VyMi5QYXJzZXIgPSBQYXJzZXI7XG4gIHJldHVybiBuZXcgUGFyc2VyKCk7XG59KCk7XG5wYXJzZXIucGFyc2VyID0gcGFyc2VyO1xuY29uc3QgcGFyc2VyJDEgPSBwYXJzZXI7XG5sZXQgY3VycmVudFNlY3Rpb24gPSBcIlwiO1xuY29uc3Qgc2VjdGlvbnMgPSBbXTtcbmNvbnN0IHRhc2tzID0gW107XG5jb25zdCByYXdUYXNrcyA9IFtdO1xuY29uc3QgY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgc2VjdGlvbnMubGVuZ3RoID0gMDtcbiAgdGFza3MubGVuZ3RoID0gMDtcbiAgY3VycmVudFNlY3Rpb24gPSBcIlwiO1xuICByYXdUYXNrcy5sZW5ndGggPSAwO1xuICBjbGVhciQxKCk7XG59O1xuY29uc3QgYWRkU2VjdGlvbiA9IGZ1bmN0aW9uKHR4dCkge1xuICBjdXJyZW50U2VjdGlvbiA9IHR4dDtcbiAgc2VjdGlvbnMucHVzaCh0eHQpO1xufTtcbmNvbnN0IGdldFNlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBzZWN0aW9ucztcbn07XG5jb25zdCBnZXRUYXNrcyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgYWxsSXRlbXNQcm9jZXNzZWQgPSBjb21waWxlVGFza3MoKTtcbiAgY29uc3QgbWF4RGVwdGggPSAxMDA7XG4gIGxldCBpdGVyYXRpb25Db3VudCA9IDA7XG4gIHdoaWxlICghYWxsSXRlbXNQcm9jZXNzZWQgJiYgaXRlcmF0aW9uQ291bnQgPCBtYXhEZXB0aCkge1xuICAgIGFsbEl0ZW1zUHJvY2Vzc2VkID0gY29tcGlsZVRhc2tzKCk7XG4gICAgaXRlcmF0aW9uQ291bnQrKztcbiAgfVxuICB0YXNrcy5wdXNoKC4uLnJhd1Rhc2tzKTtcbiAgcmV0dXJuIHRhc2tzO1xufTtcbmNvbnN0IHVwZGF0ZUFjdG9ycyA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCB0ZW1wQWN0b3JzID0gW107XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5wZW9wbGUpIHtcbiAgICAgIHRlbXBBY3RvcnMucHVzaCguLi50YXNrLnBlb3BsZSk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgdW5pcXVlID0gbmV3IFNldCh0ZW1wQWN0b3JzKTtcbiAgcmV0dXJuIFsuLi51bmlxdWVdLnNvcnQoKTtcbn07XG5jb25zdCBhZGRUYXNrID0gZnVuY3Rpb24oZGVzY3IsIHRhc2tEYXRhKSB7XG4gIGNvbnN0IHBpZWNlcyA9IHRhc2tEYXRhLnN1YnN0cigxKS5zcGxpdChcIjpcIik7XG4gIGxldCBzY29yZSA9IDA7XG4gIGxldCBwZWVwcyA9IFtdO1xuICBpZiAocGllY2VzLmxlbmd0aCA9PT0gMSkge1xuICAgIHNjb3JlID0gTnVtYmVyKHBpZWNlc1swXSk7XG4gICAgcGVlcHMgPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBzY29yZSA9IE51bWJlcihwaWVjZXNbMF0pO1xuICAgIHBlZXBzID0gcGllY2VzWzFdLnNwbGl0KFwiLFwiKTtcbiAgfVxuICBjb25zdCBwZW9wbGVMaXN0ID0gcGVlcHMubWFwKChzKSA9PiBzLnRyaW0oKSk7XG4gIGNvbnN0IHJhd1Rhc2sgPSB7XG4gICAgc2VjdGlvbjogY3VycmVudFNlY3Rpb24sXG4gICAgdHlwZTogY3VycmVudFNlY3Rpb24sXG4gICAgcGVvcGxlOiBwZW9wbGVMaXN0LFxuICAgIHRhc2s6IGRlc2NyLFxuICAgIHNjb3JlXG4gIH07XG4gIHJhd1Rhc2tzLnB1c2gocmF3VGFzayk7XG59O1xuY29uc3QgYWRkVGFza09yZyA9IGZ1bmN0aW9uKGRlc2NyKSB7XG4gIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgc2VjdGlvbjogY3VycmVudFNlY3Rpb24sXG4gICAgdHlwZTogY3VycmVudFNlY3Rpb24sXG4gICAgZGVzY3JpcHRpb246IGRlc2NyLFxuICAgIHRhc2s6IGRlc2NyLFxuICAgIGNsYXNzZXM6IFtdXG4gIH07XG4gIHRhc2tzLnB1c2gobmV3VGFzayk7XG59O1xuY29uc3QgY29tcGlsZVRhc2tzID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNvbXBpbGVUYXNrID0gZnVuY3Rpb24ocG9zKSB7XG4gICAgcmV0dXJuIHJhd1Rhc2tzW3Bvc10ucHJvY2Vzc2VkO1xuICB9O1xuICBsZXQgYWxsUHJvY2Vzc2VkID0gdHJ1ZTtcbiAgZm9yIChjb25zdCBbaSwgcmF3VGFza10gb2YgcmF3VGFza3MuZW50cmllcygpKSB7XG4gICAgY29tcGlsZVRhc2soaSk7XG4gICAgYWxsUHJvY2Vzc2VkID0gYWxsUHJvY2Vzc2VkICYmIHJhd1Rhc2sucHJvY2Vzc2VkO1xuICB9XG4gIHJldHVybiBhbGxQcm9jZXNzZWQ7XG59O1xuY29uc3QgZ2V0QWN0b3JzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB1cGRhdGVBY3RvcnMoKTtcbn07XG5jb25zdCBkYiA9IHtcbiAgZ2V0Q29uZmlnOiAoKSA9PiBnZXRDb25maWcoKS5qb3VybmV5LFxuICBjbGVhcixcbiAgc2V0RGlhZ3JhbVRpdGxlLFxuICBnZXREaWFncmFtVGl0bGUsXG4gIHNldEFjY1RpdGxlLFxuICBnZXRBY2NUaXRsZSxcbiAgc2V0QWNjRGVzY3JpcHRpb24sXG4gIGdldEFjY0Rlc2NyaXB0aW9uLFxuICBhZGRTZWN0aW9uLFxuICBnZXRTZWN0aW9ucyxcbiAgZ2V0VGFza3MsXG4gIGFkZFRhc2ssXG4gIGFkZFRhc2tPcmcsXG4gIGdldEFjdG9yc1xufTtcbmNvbnN0IGdldFN0eWxlcyA9IChvcHRpb25zKSA9PiBgLmxhYmVsIHtcbiAgICBmb250LWZhbWlseTogJ3RyZWJ1Y2hldCBtcycsIHZlcmRhbmEsIGFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tZXJtYWlkLWZvbnQtZmFtaWx5KTtcbiAgICBjb2xvcjogJHtvcHRpb25zLnRleHRDb2xvcn07XG4gIH1cbiAgLm1vdXRoIHtcbiAgICBzdHJva2U6ICM2NjY7XG4gIH1cblxuICBsaW5lIHtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy50ZXh0Q29sb3J9XG4gIH1cblxuICAubGVnZW5kIHtcbiAgICBmaWxsOiAke29wdGlvbnMudGV4dENvbG9yfTtcbiAgfVxuXG4gIC5sYWJlbCB0ZXh0IHtcbiAgICBmaWxsOiAjMzMzO1xuICB9XG4gIC5sYWJlbCB7XG4gICAgY29sb3I6ICR7b3B0aW9ucy50ZXh0Q29sb3J9XG4gIH1cblxuICAuZmFjZSB7XG4gICAgJHtvcHRpb25zLmZhY2VDb2xvciA/IGBmaWxsOiAke29wdGlvbnMuZmFjZUNvbG9yfWAgOiBcImZpbGw6ICNGRkY4RENcIn07XG4gICAgc3Ryb2tlOiAjOTk5O1xuICB9XG5cbiAgLm5vZGUgcmVjdCxcbiAgLm5vZGUgY2lyY2xlLFxuICAubm9kZSBlbGxpcHNlLFxuICAubm9kZSBwb2x5Z29uLFxuICAubm9kZSBwYXRoIHtcbiAgICBmaWxsOiAke29wdGlvbnMubWFpbkJrZ307XG4gICAgc3Ryb2tlOiAke29wdGlvbnMubm9kZUJvcmRlcn07XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gIH1cblxuICAubm9kZSAubGFiZWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubm9kZS5jbGlja2FibGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5hcnJvd2hlYWRQYXRoIHtcbiAgICBmaWxsOiAke29wdGlvbnMuYXJyb3doZWFkQ29sb3J9O1xuICB9XG5cbiAgLmVkZ2VQYXRoIC5wYXRoIHtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy5saW5lQ29sb3J9O1xuICAgIHN0cm9rZS13aWR0aDogMS41cHg7XG4gIH1cblxuICAuZmxvd2NoYXJ0LWxpbmsge1xuICAgIHN0cm9rZTogJHtvcHRpb25zLmxpbmVDb2xvcn07XG4gICAgZmlsbDogbm9uZTtcbiAgfVxuXG4gIC5lZGdlTGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7b3B0aW9ucy5lZGdlTGFiZWxCYWNrZ3JvdW5kfTtcbiAgICByZWN0IHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNsdXN0ZXIgcmVjdCB7XG4gIH1cblxuICAuY2x1c3RlciB0ZXh0IHtcbiAgICBmaWxsOiAke29wdGlvbnMudGl0bGVDb2xvcn07XG4gIH1cblxuICBkaXYubWVybWFpZFRvb2x0aXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgZm9udC1mYW1pbHk6ICd0cmVidWNoZXQgbXMnLCB2ZXJkYW5hLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWVybWFpZC1mb250LWZhbWlseSk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICR7b3B0aW9ucy50ZXJ0aWFyeUNvbG9yfTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke29wdGlvbnMuYm9yZGVyMn07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgfVxuXG4gIC50YXNrLXR5cGUtMCwgLnNlY3Rpb24tdHlwZS0wICB7XG4gICAgJHtvcHRpb25zLmZpbGxUeXBlMCA/IGBmaWxsOiAke29wdGlvbnMuZmlsbFR5cGUwfWAgOiBcIlwifTtcbiAgfVxuICAudGFzay10eXBlLTEsIC5zZWN0aW9uLXR5cGUtMSAge1xuICAgICR7b3B0aW9ucy5maWxsVHlwZTAgPyBgZmlsbDogJHtvcHRpb25zLmZpbGxUeXBlMX1gIDogXCJcIn07XG4gIH1cbiAgLnRhc2stdHlwZS0yLCAuc2VjdGlvbi10eXBlLTIgIHtcbiAgICAke29wdGlvbnMuZmlsbFR5cGUwID8gYGZpbGw6ICR7b3B0aW9ucy5maWxsVHlwZTJ9YCA6IFwiXCJ9O1xuICB9XG4gIC50YXNrLXR5cGUtMywgLnNlY3Rpb24tdHlwZS0zICB7XG4gICAgJHtvcHRpb25zLmZpbGxUeXBlMCA/IGBmaWxsOiAke29wdGlvbnMuZmlsbFR5cGUzfWAgOiBcIlwifTtcbiAgfVxuICAudGFzay10eXBlLTQsIC5zZWN0aW9uLXR5cGUtNCAge1xuICAgICR7b3B0aW9ucy5maWxsVHlwZTAgPyBgZmlsbDogJHtvcHRpb25zLmZpbGxUeXBlNH1gIDogXCJcIn07XG4gIH1cbiAgLnRhc2stdHlwZS01LCAuc2VjdGlvbi10eXBlLTUgIHtcbiAgICAke29wdGlvbnMuZmlsbFR5cGUwID8gYGZpbGw6ICR7b3B0aW9ucy5maWxsVHlwZTV9YCA6IFwiXCJ9O1xuICB9XG4gIC50YXNrLXR5cGUtNiwgLnNlY3Rpb24tdHlwZS02ICB7XG4gICAgJHtvcHRpb25zLmZpbGxUeXBlMCA/IGBmaWxsOiAke29wdGlvbnMuZmlsbFR5cGU2fWAgOiBcIlwifTtcbiAgfVxuICAudGFzay10eXBlLTcsIC5zZWN0aW9uLXR5cGUtNyAge1xuICAgICR7b3B0aW9ucy5maWxsVHlwZTAgPyBgZmlsbDogJHtvcHRpb25zLmZpbGxUeXBlN31gIDogXCJcIn07XG4gIH1cblxuICAuYWN0b3ItMCB7XG4gICAgJHtvcHRpb25zLmFjdG9yMCA/IGBmaWxsOiAke29wdGlvbnMuYWN0b3IwfWAgOiBcIlwifTtcbiAgfVxuICAuYWN0b3ItMSB7XG4gICAgJHtvcHRpb25zLmFjdG9yMSA/IGBmaWxsOiAke29wdGlvbnMuYWN0b3IxfWAgOiBcIlwifTtcbiAgfVxuICAuYWN0b3ItMiB7XG4gICAgJHtvcHRpb25zLmFjdG9yMiA/IGBmaWxsOiAke29wdGlvbnMuYWN0b3IyfWAgOiBcIlwifTtcbiAgfVxuICAuYWN0b3ItMyB7XG4gICAgJHtvcHRpb25zLmFjdG9yMyA/IGBmaWxsOiAke29wdGlvbnMuYWN0b3IzfWAgOiBcIlwifTtcbiAgfVxuICAuYWN0b3ItNCB7XG4gICAgJHtvcHRpb25zLmFjdG9yNCA/IGBmaWxsOiAke29wdGlvbnMuYWN0b3I0fWAgOiBcIlwifTtcbiAgfVxuICAuYWN0b3ItNSB7XG4gICAgJHtvcHRpb25zLmFjdG9yNSA/IGBmaWxsOiAke29wdGlvbnMuYWN0b3I1fWAgOiBcIlwifTtcbiAgfVxuYDtcbmNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcztcbmNvbnN0IGRyYXdSZWN0ID0gZnVuY3Rpb24oZWxlbSwgcmVjdERhdGEpIHtcbiAgcmV0dXJuIGRyYXdSZWN0JDEoZWxlbSwgcmVjdERhdGEpO1xufTtcbmNvbnN0IGRyYXdGYWNlID0gZnVuY3Rpb24oZWxlbWVudCwgZmFjZURhdGEpIHtcbiAgY29uc3QgcmFkaXVzID0gMTU7XG4gIGNvbnN0IGNpcmNsZUVsZW1lbnQgPSBlbGVtZW50LmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgZmFjZURhdGEuY3gpLmF0dHIoXCJjeVwiLCBmYWNlRGF0YS5jeSkuYXR0cihcImNsYXNzXCIsIFwiZmFjZVwiKS5hdHRyKFwiclwiLCByYWRpdXMpLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMikuYXR0cihcIm92ZXJmbG93XCIsIFwidmlzaWJsZVwiKTtcbiAgY29uc3QgZmFjZSA9IGVsZW1lbnQuYXBwZW5kKFwiZ1wiKTtcbiAgZmFjZS5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIGZhY2VEYXRhLmN4IC0gcmFkaXVzIC8gMykuYXR0cihcImN5XCIsIGZhY2VEYXRhLmN5IC0gcmFkaXVzIC8gMykuYXR0cihcInJcIiwgMS41KS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpLmF0dHIoXCJmaWxsXCIsIFwiIzY2NlwiKS5hdHRyKFwic3Ryb2tlXCIsIFwiIzY2NlwiKTtcbiAgZmFjZS5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIGZhY2VEYXRhLmN4ICsgcmFkaXVzIC8gMykuYXR0cihcImN5XCIsIGZhY2VEYXRhLmN5IC0gcmFkaXVzIC8gMykuYXR0cihcInJcIiwgMS41KS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpLmF0dHIoXCJmaWxsXCIsIFwiIzY2NlwiKS5hdHRyKFwic3Ryb2tlXCIsIFwiIzY2NlwiKTtcbiAgZnVuY3Rpb24gc21pbGUoZmFjZTIpIHtcbiAgICBjb25zdCBhcmMkMSA9IGFyYygpLnN0YXJ0QW5nbGUoTWF0aC5QSSAvIDIpLmVuZEFuZ2xlKDMgKiAoTWF0aC5QSSAvIDIpKS5pbm5lclJhZGl1cyhyYWRpdXMgLyAyKS5vdXRlclJhZGl1cyhyYWRpdXMgLyAyLjIpO1xuICAgIGZhY2UyLmFwcGVuZChcInBhdGhcIikuYXR0cihcImNsYXNzXCIsIFwibW91dGhcIikuYXR0cihcImRcIiwgYXJjJDEpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBmYWNlRGF0YS5jeCArIFwiLFwiICsgKGZhY2VEYXRhLmN5ICsgMikgKyBcIilcIik7XG4gIH1cbiAgZnVuY3Rpb24gc2FkKGZhY2UyKSB7XG4gICAgY29uc3QgYXJjJDEgPSBhcmMoKS5zdGFydEFuZ2xlKDMgKiBNYXRoLlBJIC8gMikuZW5kQW5nbGUoNSAqIChNYXRoLlBJIC8gMikpLmlubmVyUmFkaXVzKHJhZGl1cyAvIDIpLm91dGVyUmFkaXVzKHJhZGl1cyAvIDIuMik7XG4gICAgZmFjZTIuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJtb3V0aFwiKS5hdHRyKFwiZFwiLCBhcmMkMSkuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIGZhY2VEYXRhLmN4ICsgXCIsXCIgKyAoZmFjZURhdGEuY3kgKyA3KSArIFwiKVwiKTtcbiAgfVxuICBmdW5jdGlvbiBhbWJpdmFsZW50KGZhY2UyKSB7XG4gICAgZmFjZTIuYXBwZW5kKFwibGluZVwiKS5hdHRyKFwiY2xhc3NcIiwgXCJtb3V0aFwiKS5hdHRyKFwic3Ryb2tlXCIsIDIpLmF0dHIoXCJ4MVwiLCBmYWNlRGF0YS5jeCAtIDUpLmF0dHIoXCJ5MVwiLCBmYWNlRGF0YS5jeSArIDcpLmF0dHIoXCJ4MlwiLCBmYWNlRGF0YS5jeCArIDUpLmF0dHIoXCJ5MlwiLCBmYWNlRGF0YS5jeSArIDcpLmF0dHIoXCJjbGFzc1wiLCBcIm1vdXRoXCIpLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIxcHhcIikuYXR0cihcInN0cm9rZVwiLCBcIiM2NjZcIik7XG4gIH1cbiAgaWYgKGZhY2VEYXRhLnNjb3JlID4gMykge1xuICAgIHNtaWxlKGZhY2UpO1xuICB9IGVsc2UgaWYgKGZhY2VEYXRhLnNjb3JlIDwgMykge1xuICAgIHNhZChmYWNlKTtcbiAgfSBlbHNlIHtcbiAgICBhbWJpdmFsZW50KGZhY2UpO1xuICB9XG4gIHJldHVybiBjaXJjbGVFbGVtZW50O1xufTtcbmNvbnN0IGRyYXdDaXJjbGUgPSBmdW5jdGlvbihlbGVtZW50LCBjaXJjbGVEYXRhKSB7XG4gIGNvbnN0IGNpcmNsZUVsZW1lbnQgPSBlbGVtZW50LmFwcGVuZChcImNpcmNsZVwiKTtcbiAgY2lyY2xlRWxlbWVudC5hdHRyKFwiY3hcIiwgY2lyY2xlRGF0YS5jeCk7XG4gIGNpcmNsZUVsZW1lbnQuYXR0cihcImN5XCIsIGNpcmNsZURhdGEuY3kpO1xuICBjaXJjbGVFbGVtZW50LmF0dHIoXCJjbGFzc1wiLCBcImFjdG9yLVwiICsgY2lyY2xlRGF0YS5wb3MpO1xuICBjaXJjbGVFbGVtZW50LmF0dHIoXCJmaWxsXCIsIGNpcmNsZURhdGEuZmlsbCk7XG4gIGNpcmNsZUVsZW1lbnQuYXR0cihcInN0cm9rZVwiLCBjaXJjbGVEYXRhLnN0cm9rZSk7XG4gIGNpcmNsZUVsZW1lbnQuYXR0cihcInJcIiwgY2lyY2xlRGF0YS5yKTtcbiAgaWYgKGNpcmNsZUVsZW1lbnQuY2xhc3MgIT09IHZvaWQgMCkge1xuICAgIGNpcmNsZUVsZW1lbnQuYXR0cihcImNsYXNzXCIsIGNpcmNsZUVsZW1lbnQuY2xhc3MpO1xuICB9XG4gIGlmIChjaXJjbGVEYXRhLnRpdGxlICE9PSB2b2lkIDApIHtcbiAgICBjaXJjbGVFbGVtZW50LmFwcGVuZChcInRpdGxlXCIpLnRleHQoY2lyY2xlRGF0YS50aXRsZSk7XG4gIH1cbiAgcmV0dXJuIGNpcmNsZUVsZW1lbnQ7XG59O1xuY29uc3QgZHJhd1RleHQgPSBmdW5jdGlvbihlbGVtLCB0ZXh0RGF0YSkge1xuICByZXR1cm4gZHJhd1RleHQkMShlbGVtLCB0ZXh0RGF0YSk7XG59O1xuY29uc3QgZHJhd0xhYmVsID0gZnVuY3Rpb24oZWxlbSwgdHh0T2JqZWN0KSB7XG4gIGZ1bmN0aW9uIGdlblBvaW50cyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjdXQpIHtcbiAgICByZXR1cm4geCArIFwiLFwiICsgeSArIFwiIFwiICsgKHggKyB3aWR0aCkgKyBcIixcIiArIHkgKyBcIiBcIiArICh4ICsgd2lkdGgpICsgXCIsXCIgKyAoeSArIGhlaWdodCAtIGN1dCkgKyBcIiBcIiArICh4ICsgd2lkdGggLSBjdXQgKiAxLjIpICsgXCIsXCIgKyAoeSArIGhlaWdodCkgKyBcIiBcIiArIHggKyBcIixcIiArICh5ICsgaGVpZ2h0KTtcbiAgfVxuICBjb25zdCBwb2x5Z29uID0gZWxlbS5hcHBlbmQoXCJwb2x5Z29uXCIpO1xuICBwb2x5Z29uLmF0dHIoXCJwb2ludHNcIiwgZ2VuUG9pbnRzKHR4dE9iamVjdC54LCB0eHRPYmplY3QueSwgNTAsIDIwLCA3KSk7XG4gIHBvbHlnb24uYXR0cihcImNsYXNzXCIsIFwibGFiZWxCb3hcIik7XG4gIHR4dE9iamVjdC55ID0gdHh0T2JqZWN0LnkgKyB0eHRPYmplY3QubGFiZWxNYXJnaW47XG4gIHR4dE9iamVjdC54ID0gdHh0T2JqZWN0LnggKyAwLjUgKiB0eHRPYmplY3QubGFiZWxNYXJnaW47XG4gIGRyYXdUZXh0KGVsZW0sIHR4dE9iamVjdCk7XG59O1xuY29uc3QgZHJhd1NlY3Rpb24gPSBmdW5jdGlvbihlbGVtLCBzZWN0aW9uLCBjb25mMikge1xuICBjb25zdCBnID0gZWxlbS5hcHBlbmQoXCJnXCIpO1xuICBjb25zdCByZWN0ID0gZ2V0Tm90ZVJlY3QoKTtcbiAgcmVjdC54ID0gc2VjdGlvbi54O1xuICByZWN0LnkgPSBzZWN0aW9uLnk7XG4gIHJlY3QuZmlsbCA9IHNlY3Rpb24uZmlsbDtcbiAgcmVjdC53aWR0aCA9IGNvbmYyLndpZHRoICogc2VjdGlvbi50YXNrQ291bnQgKyAvLyB3aWR0aCBvZiB0aGUgdGFza3NcbiAgY29uZjIuZGlhZ3JhbU1hcmdpblggKiAoc2VjdGlvbi50YXNrQ291bnQgLSAxKTtcbiAgcmVjdC5oZWlnaHQgPSBjb25mMi5oZWlnaHQ7XG4gIHJlY3QuY2xhc3MgPSBcImpvdXJuZXktc2VjdGlvbiBzZWN0aW9uLXR5cGUtXCIgKyBzZWN0aW9uLm51bTtcbiAgcmVjdC5yeCA9IDM7XG4gIHJlY3QucnkgPSAzO1xuICBkcmF3UmVjdChnLCByZWN0KTtcbiAgX2RyYXdUZXh0Q2FuZGlkYXRlRnVuYyhjb25mMikoXG4gICAgc2VjdGlvbi50ZXh0LFxuICAgIGcsXG4gICAgcmVjdC54LFxuICAgIHJlY3QueSxcbiAgICByZWN0LndpZHRoLFxuICAgIHJlY3QuaGVpZ2h0LFxuICAgIHsgY2xhc3M6IFwiam91cm5leS1zZWN0aW9uIHNlY3Rpb24tdHlwZS1cIiArIHNlY3Rpb24ubnVtIH0sXG4gICAgY29uZjIsXG4gICAgc2VjdGlvbi5jb2xvdXJcbiAgKTtcbn07XG5sZXQgdGFza0NvdW50ID0gLTE7XG5jb25zdCBkcmF3VGFzayA9IGZ1bmN0aW9uKGVsZW0sIHRhc2ssIGNvbmYyKSB7XG4gIGNvbnN0IGNlbnRlciA9IHRhc2sueCArIGNvbmYyLndpZHRoIC8gMjtcbiAgY29uc3QgZyA9IGVsZW0uYXBwZW5kKFwiZ1wiKTtcbiAgdGFza0NvdW50Kys7XG4gIGNvbnN0IG1heEhlaWdodCA9IDMwMCArIDUgKiAzMDtcbiAgZy5hcHBlbmQoXCJsaW5lXCIpLmF0dHIoXCJpZFwiLCBcInRhc2tcIiArIHRhc2tDb3VudCkuYXR0cihcIngxXCIsIGNlbnRlcikuYXR0cihcInkxXCIsIHRhc2sueSkuYXR0cihcIngyXCIsIGNlbnRlcikuYXR0cihcInkyXCIsIG1heEhlaWdodCkuYXR0cihcImNsYXNzXCIsIFwidGFzay1saW5lXCIpLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIxcHhcIikuYXR0cihcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCI0IDJcIikuYXR0cihcInN0cm9rZVwiLCBcIiM2NjZcIik7XG4gIGRyYXdGYWNlKGcsIHtcbiAgICBjeDogY2VudGVyLFxuICAgIGN5OiAzMDAgKyAoNSAtIHRhc2suc2NvcmUpICogMzAsXG4gICAgc2NvcmU6IHRhc2suc2NvcmVcbiAgfSk7XG4gIGNvbnN0IHJlY3QgPSBnZXROb3RlUmVjdCgpO1xuICByZWN0LnggPSB0YXNrLng7XG4gIHJlY3QueSA9IHRhc2sueTtcbiAgcmVjdC5maWxsID0gdGFzay5maWxsO1xuICByZWN0LndpZHRoID0gY29uZjIud2lkdGg7XG4gIHJlY3QuaGVpZ2h0ID0gY29uZjIuaGVpZ2h0O1xuICByZWN0LmNsYXNzID0gXCJ0YXNrIHRhc2stdHlwZS1cIiArIHRhc2subnVtO1xuICByZWN0LnJ4ID0gMztcbiAgcmVjdC5yeSA9IDM7XG4gIGRyYXdSZWN0KGcsIHJlY3QpO1xuICBsZXQgeFBvcyA9IHRhc2sueCArIDE0O1xuICB0YXNrLnBlb3BsZS5mb3JFYWNoKChwZXJzb24pID0+IHtcbiAgICBjb25zdCBjb2xvdXIgPSB0YXNrLmFjdG9yc1twZXJzb25dLmNvbG9yO1xuICAgIGNvbnN0IGNpcmNsZSA9IHtcbiAgICAgIGN4OiB4UG9zLFxuICAgICAgY3k6IHRhc2sueSxcbiAgICAgIHI6IDcsXG4gICAgICBmaWxsOiBjb2xvdXIsXG4gICAgICBzdHJva2U6IFwiIzAwMFwiLFxuICAgICAgdGl0bGU6IHBlcnNvbixcbiAgICAgIHBvczogdGFzay5hY3RvcnNbcGVyc29uXS5wb3NpdGlvblxuICAgIH07XG4gICAgZHJhd0NpcmNsZShnLCBjaXJjbGUpO1xuICAgIHhQb3MgKz0gMTA7XG4gIH0pO1xuICBfZHJhd1RleHRDYW5kaWRhdGVGdW5jKGNvbmYyKShcbiAgICB0YXNrLnRhc2ssXG4gICAgZyxcbiAgICByZWN0LngsXG4gICAgcmVjdC55LFxuICAgIHJlY3Qud2lkdGgsXG4gICAgcmVjdC5oZWlnaHQsXG4gICAgeyBjbGFzczogXCJ0YXNrXCIgfSxcbiAgICBjb25mMixcbiAgICB0YXNrLmNvbG91clxuICApO1xufTtcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kUmVjdCA9IGZ1bmN0aW9uKGVsZW0sIGJvdW5kczIpIHtcbiAgZHJhd0JhY2tncm91bmRSZWN0JDEoZWxlbSwgYm91bmRzMik7XG59O1xuY29uc3QgX2RyYXdUZXh0Q2FuZGlkYXRlRnVuYyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBieVRleHQoY29udGVudCwgZywgeCwgeSwgd2lkdGgsIGhlaWdodCwgdGV4dEF0dHJzLCBjb2xvdXIpIHtcbiAgICBjb25zdCB0ZXh0ID0gZy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIHggKyB3aWR0aCAvIDIpLmF0dHIoXCJ5XCIsIHkgKyBoZWlnaHQgLyAyICsgNSkuc3R5bGUoXCJmb250LWNvbG9yXCIsIGNvbG91cikuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKS50ZXh0KGNvbnRlbnQpO1xuICAgIF9zZXRUZXh0QXR0cnModGV4dCwgdGV4dEF0dHJzKTtcbiAgfVxuICBmdW5jdGlvbiBieVRzcGFuKGNvbnRlbnQsIGcsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHRleHRBdHRycywgY29uZjIsIGNvbG91cikge1xuICAgIGNvbnN0IHsgdGFza0ZvbnRTaXplLCB0YXNrRm9udEZhbWlseSB9ID0gY29uZjI7XG4gICAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KC88YnJcXHMqXFwvPz4vZ2kpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGR5ID0gaSAqIHRhc2tGb250U2l6ZSAtIHRhc2tGb250U2l6ZSAqIChsaW5lcy5sZW5ndGggLSAxKSAvIDI7XG4gICAgICBjb25zdCB0ZXh0ID0gZy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIHggKyB3aWR0aCAvIDIpLmF0dHIoXCJ5XCIsIHkpLmF0dHIoXCJmaWxsXCIsIGNvbG91cikuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKS5zdHlsZShcImZvbnQtc2l6ZVwiLCB0YXNrRm9udFNpemUpLnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgdGFza0ZvbnRGYW1pbHkpO1xuICAgICAgdGV4dC5hcHBlbmQoXCJ0c3BhblwiKS5hdHRyKFwieFwiLCB4ICsgd2lkdGggLyAyKS5hdHRyKFwiZHlcIiwgZHkpLnRleHQobGluZXNbaV0pO1xuICAgICAgdGV4dC5hdHRyKFwieVwiLCB5ICsgaGVpZ2h0IC8gMikuYXR0cihcImRvbWluYW50LWJhc2VsaW5lXCIsIFwiY2VudHJhbFwiKS5hdHRyKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsIFwiY2VudHJhbFwiKTtcbiAgICAgIF9zZXRUZXh0QXR0cnModGV4dCwgdGV4dEF0dHJzKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gYnlGbyhjb250ZW50LCBnLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0ZXh0QXR0cnMsIGNvbmYyKSB7XG4gICAgY29uc3QgYm9keSA9IGcuYXBwZW5kKFwic3dpdGNoXCIpO1xuICAgIGNvbnN0IGYgPSBib2R5LmFwcGVuZChcImZvcmVpZ25PYmplY3RcIikuYXR0cihcInhcIiwgeCkuYXR0cihcInlcIiwgeSkuYXR0cihcIndpZHRoXCIsIHdpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCkuYXR0cihcInBvc2l0aW9uXCIsIFwiZml4ZWRcIik7XG4gICAgY29uc3QgdGV4dCA9IGYuYXBwZW5kKFwieGh0bWw6ZGl2XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcInRhYmxlXCIpLnN0eWxlKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKS5zdHlsZShcIndpZHRoXCIsIFwiMTAwJVwiKTtcbiAgICB0ZXh0LmFwcGVuZChcImRpdlwiKS5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbFwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJ0YWJsZS1jZWxsXCIpLnN0eWxlKFwidGV4dC1hbGlnblwiLCBcImNlbnRlclwiKS5zdHlsZShcInZlcnRpY2FsLWFsaWduXCIsIFwibWlkZGxlXCIpLnRleHQoY29udGVudCk7XG4gICAgYnlUc3Bhbihjb250ZW50LCBib2R5LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0ZXh0QXR0cnMsIGNvbmYyKTtcbiAgICBfc2V0VGV4dEF0dHJzKHRleHQsIHRleHRBdHRycyk7XG4gIH1cbiAgZnVuY3Rpb24gX3NldFRleHRBdHRycyh0b1RleHQsIGZyb21UZXh0QXR0cnNEaWN0KSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZnJvbVRleHRBdHRyc0RpY3QpIHtcbiAgICAgIGlmIChrZXkgaW4gZnJvbVRleHRBdHRyc0RpY3QpIHtcbiAgICAgICAgdG9UZXh0LmF0dHIoa2V5LCBmcm9tVGV4dEF0dHJzRGljdFtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbmYyKSB7XG4gICAgcmV0dXJuIGNvbmYyLnRleHRQbGFjZW1lbnQgPT09IFwiZm9cIiA/IGJ5Rm8gOiBjb25mMi50ZXh0UGxhY2VtZW50ID09PSBcIm9sZFwiID8gYnlUZXh0IDogYnlUc3BhbjtcbiAgfTtcbn0oKTtcbmNvbnN0IGluaXRHcmFwaGljcyA9IGZ1bmN0aW9uKGdyYXBoaWNzKSB7XG4gIGdyYXBoaWNzLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBcImFycm93aGVhZFwiKS5hdHRyKFwicmVmWFwiLCA1KS5hdHRyKFwicmVmWVwiLCAyKS5hdHRyKFwibWFya2VyV2lkdGhcIiwgNikuYXR0cihcIm1hcmtlckhlaWdodFwiLCA0KS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSAwLDAgViA0IEw2LDIgWlwiKTtcbn07XG5jb25zdCBzdmdEcmF3ID0ge1xuICBkcmF3UmVjdCxcbiAgZHJhd0NpcmNsZSxcbiAgZHJhd1NlY3Rpb24sXG4gIGRyYXdUZXh0LFxuICBkcmF3TGFiZWwsXG4gIGRyYXdUYXNrLFxuICBkcmF3QmFja2dyb3VuZFJlY3QsXG4gIGluaXRHcmFwaGljc1xufTtcbmNvbnN0IHNldENvbmYgPSBmdW5jdGlvbihjbmYpIHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNuZik7XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBjb25mW2tleV0gPSBjbmZba2V5XTtcbiAgfSk7XG59O1xuY29uc3QgYWN0b3JzID0ge307XG5mdW5jdGlvbiBkcmF3QWN0b3JMZWdlbmQoZGlhZ3JhbTIpIHtcbiAgY29uc3QgY29uZjIgPSBnZXRDb25maWcoKS5qb3VybmV5O1xuICBsZXQgeVBvcyA9IDYwO1xuICBPYmplY3Qua2V5cyhhY3RvcnMpLmZvckVhY2goKHBlcnNvbikgPT4ge1xuICAgIGNvbnN0IGNvbG91ciA9IGFjdG9yc1twZXJzb25dLmNvbG9yO1xuICAgIGNvbnN0IGNpcmNsZURhdGEgPSB7XG4gICAgICBjeDogMjAsXG4gICAgICBjeTogeVBvcyxcbiAgICAgIHI6IDcsXG4gICAgICBmaWxsOiBjb2xvdXIsXG4gICAgICBzdHJva2U6IFwiIzAwMFwiLFxuICAgICAgcG9zOiBhY3RvcnNbcGVyc29uXS5wb3NpdGlvblxuICAgIH07XG4gICAgc3ZnRHJhdy5kcmF3Q2lyY2xlKGRpYWdyYW0yLCBjaXJjbGVEYXRhKTtcbiAgICBjb25zdCBsYWJlbERhdGEgPSB7XG4gICAgICB4OiA0MCxcbiAgICAgIHk6IHlQb3MgKyA3LFxuICAgICAgZmlsbDogXCIjNjY2XCIsXG4gICAgICB0ZXh0OiBwZXJzb24sXG4gICAgICB0ZXh0TWFyZ2luOiBjb25mMi5ib3hUZXh0TWFyZ2luIHwgNVxuICAgIH07XG4gICAgc3ZnRHJhdy5kcmF3VGV4dChkaWFncmFtMiwgbGFiZWxEYXRhKTtcbiAgICB5UG9zICs9IDIwO1xuICB9KTtcbn1cbmNvbnN0IGNvbmYgPSBnZXRDb25maWcoKS5qb3VybmV5O1xuY29uc3QgTEVGVF9NQVJHSU4gPSBjb25mLmxlZnRNYXJnaW47XG5jb25zdCBkcmF3ID0gZnVuY3Rpb24odGV4dCwgaWQsIHZlcnNpb24sIGRpYWdPYmopIHtcbiAgY29uc3QgY29uZjIgPSBnZXRDb25maWcoKS5qb3VybmV5O1xuICBjb25zdCBzZWN1cml0eUxldmVsID0gZ2V0Q29uZmlnKCkuc2VjdXJpdHlMZXZlbDtcbiAgbGV0IHNhbmRib3hFbGVtZW50O1xuICBpZiAoc2VjdXJpdHlMZXZlbCA9PT0gXCJzYW5kYm94XCIpIHtcbiAgICBzYW5kYm94RWxlbWVudCA9IHNlbGVjdChcIiNpXCIgKyBpZCk7XG4gIH1cbiAgY29uc3Qgcm9vdCA9IHNlY3VyaXR5TGV2ZWwgPT09IFwic2FuZGJveFwiID8gc2VsZWN0KHNhbmRib3hFbGVtZW50Lm5vZGVzKClbMF0uY29udGVudERvY3VtZW50LmJvZHkpIDogc2VsZWN0KFwiYm9keVwiKTtcbiAgYm91bmRzLmluaXQoKTtcbiAgY29uc3QgZGlhZ3JhbTIgPSByb290LnNlbGVjdChcIiNcIiArIGlkKTtcbiAgc3ZnRHJhdy5pbml0R3JhcGhpY3MoZGlhZ3JhbTIpO1xuICBjb25zdCB0YXNrczIgPSBkaWFnT2JqLmRiLmdldFRhc2tzKCk7XG4gIGNvbnN0IHRpdGxlID0gZGlhZ09iai5kYi5nZXREaWFncmFtVGl0bGUoKTtcbiAgY29uc3QgYWN0b3JOYW1lcyA9IGRpYWdPYmouZGIuZ2V0QWN0b3JzKCk7XG4gIGZvciAoY29uc3QgbWVtYmVyIGluIGFjdG9ycykge1xuICAgIGRlbGV0ZSBhY3RvcnNbbWVtYmVyXTtcbiAgfVxuICBsZXQgYWN0b3JQb3MgPSAwO1xuICBhY3Rvck5hbWVzLmZvckVhY2goKGFjdG9yTmFtZSkgPT4ge1xuICAgIGFjdG9yc1thY3Rvck5hbWVdID0ge1xuICAgICAgY29sb3I6IGNvbmYyLmFjdG9yQ29sb3Vyc1thY3RvclBvcyAlIGNvbmYyLmFjdG9yQ29sb3Vycy5sZW5ndGhdLFxuICAgICAgcG9zaXRpb246IGFjdG9yUG9zXG4gICAgfTtcbiAgICBhY3RvclBvcysrO1xuICB9KTtcbiAgZHJhd0FjdG9yTGVnZW5kKGRpYWdyYW0yKTtcbiAgYm91bmRzLmluc2VydCgwLCAwLCBMRUZUX01BUkdJTiwgT2JqZWN0LmtleXMoYWN0b3JzKS5sZW5ndGggKiA1MCk7XG4gIGRyYXdUYXNrcyhkaWFncmFtMiwgdGFza3MyLCAwKTtcbiAgY29uc3QgYm94ID0gYm91bmRzLmdldEJvdW5kcygpO1xuICBpZiAodGl0bGUpIHtcbiAgICBkaWFncmFtMi5hcHBlbmQoXCJ0ZXh0XCIpLnRleHQodGl0bGUpLmF0dHIoXCJ4XCIsIExFRlRfTUFSR0lOKS5hdHRyKFwiZm9udC1zaXplXCIsIFwiNGV4XCIpLmF0dHIoXCJmb250LXdlaWdodFwiLCBcImJvbGRcIikuYXR0cihcInlcIiwgMjUpO1xuICB9XG4gIGNvbnN0IGhlaWdodCA9IGJveC5zdG9weSAtIGJveC5zdGFydHkgKyAyICogY29uZjIuZGlhZ3JhbU1hcmdpblk7XG4gIGNvbnN0IHdpZHRoID0gTEVGVF9NQVJHSU4gKyBib3guc3RvcHggKyAyICogY29uZjIuZGlhZ3JhbU1hcmdpblg7XG4gIGNvbmZpZ3VyZVN2Z1NpemUoZGlhZ3JhbTIsIGhlaWdodCwgd2lkdGgsIGNvbmYyLnVzZU1heFdpZHRoKTtcbiAgZGlhZ3JhbTIuYXBwZW5kKFwibGluZVwiKS5hdHRyKFwieDFcIiwgTEVGVF9NQVJHSU4pLmF0dHIoXCJ5MVwiLCBjb25mMi5oZWlnaHQgKiA0KS5hdHRyKFwieDJcIiwgd2lkdGggLSBMRUZUX01BUkdJTiAtIDQpLmF0dHIoXCJ5MlwiLCBjb25mMi5oZWlnaHQgKiA0KS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDQpLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKS5hdHRyKFwibWFya2VyLWVuZFwiLCBcInVybCgjYXJyb3doZWFkKVwiKTtcbiAgY29uc3QgZXh0cmFWZXJ0Rm9yVGl0bGUgPSB0aXRsZSA/IDcwIDogMDtcbiAgZGlhZ3JhbTIuYXR0cihcInZpZXdCb3hcIiwgYCR7Ym94LnN0YXJ0eH0gLTI1ICR7d2lkdGh9ICR7aGVpZ2h0ICsgZXh0cmFWZXJ0Rm9yVGl0bGV9YCk7XG4gIGRpYWdyYW0yLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKTtcbiAgZGlhZ3JhbTIuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBleHRyYVZlcnRGb3JUaXRsZSArIDI1KTtcbn07XG5jb25zdCBib3VuZHMgPSB7XG4gIGRhdGE6IHtcbiAgICBzdGFydHg6IHZvaWQgMCxcbiAgICBzdG9weDogdm9pZCAwLFxuICAgIHN0YXJ0eTogdm9pZCAwLFxuICAgIHN0b3B5OiB2b2lkIDBcbiAgfSxcbiAgdmVydGljYWxQb3M6IDAsXG4gIHNlcXVlbmNlSXRlbXM6IFtdLFxuICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNlcXVlbmNlSXRlbXMgPSBbXTtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICBzdGFydHg6IHZvaWQgMCxcbiAgICAgIHN0b3B4OiB2b2lkIDAsXG4gICAgICBzdGFydHk6IHZvaWQgMCxcbiAgICAgIHN0b3B5OiB2b2lkIDBcbiAgICB9O1xuICAgIHRoaXMudmVydGljYWxQb3MgPSAwO1xuICB9LFxuICB1cGRhdGVWYWw6IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWwsIGZ1bikge1xuICAgIGlmIChvYmpba2V5XSA9PT0gdm9pZCAwKSB7XG4gICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSBmdW4odmFsLCBvYmpba2V5XSk7XG4gICAgfVxuICB9LFxuICB1cGRhdGVCb3VuZHM6IGZ1bmN0aW9uKHN0YXJ0eCwgc3RhcnR5LCBzdG9weCwgc3RvcHkpIHtcbiAgICBjb25zdCBjb25mMiA9IGdldENvbmZpZygpLmpvdXJuZXk7XG4gICAgY29uc3QgX3NlbGYgPSB0aGlzO1xuICAgIGxldCBjbnQgPSAwO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUZuKHR5cGUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiB1cGRhdGVJdGVtQm91bmRzKGl0ZW0pIHtcbiAgICAgICAgY250Kys7XG4gICAgICAgIGNvbnN0IG4gPSBfc2VsZi5zZXF1ZW5jZUl0ZW1zLmxlbmd0aCAtIGNudCArIDE7XG4gICAgICAgIF9zZWxmLnVwZGF0ZVZhbChpdGVtLCBcInN0YXJ0eVwiLCBzdGFydHkgLSBuICogY29uZjIuYm94TWFyZ2luLCBNYXRoLm1pbik7XG4gICAgICAgIF9zZWxmLnVwZGF0ZVZhbChpdGVtLCBcInN0b3B5XCIsIHN0b3B5ICsgbiAqIGNvbmYyLmJveE1hcmdpbiwgTWF0aC5tYXgpO1xuICAgICAgICBfc2VsZi51cGRhdGVWYWwoYm91bmRzLmRhdGEsIFwic3RhcnR4XCIsIHN0YXJ0eCAtIG4gKiBjb25mMi5ib3hNYXJnaW4sIE1hdGgubWluKTtcbiAgICAgICAgX3NlbGYudXBkYXRlVmFsKGJvdW5kcy5kYXRhLCBcInN0b3B4XCIsIHN0b3B4ICsgbiAqIGNvbmYyLmJveE1hcmdpbiwgTWF0aC5tYXgpO1xuICAgICAgICBpZiAoISh0eXBlID09PSBcImFjdGl2YXRpb25cIikpIHtcbiAgICAgICAgICBfc2VsZi51cGRhdGVWYWwoaXRlbSwgXCJzdGFydHhcIiwgc3RhcnR4IC0gbiAqIGNvbmYyLmJveE1hcmdpbiwgTWF0aC5taW4pO1xuICAgICAgICAgIF9zZWxmLnVwZGF0ZVZhbChpdGVtLCBcInN0b3B4XCIsIHN0b3B4ICsgbiAqIGNvbmYyLmJveE1hcmdpbiwgTWF0aC5tYXgpO1xuICAgICAgICAgIF9zZWxmLnVwZGF0ZVZhbChib3VuZHMuZGF0YSwgXCJzdGFydHlcIiwgc3RhcnR5IC0gbiAqIGNvbmYyLmJveE1hcmdpbiwgTWF0aC5taW4pO1xuICAgICAgICAgIF9zZWxmLnVwZGF0ZVZhbChib3VuZHMuZGF0YSwgXCJzdG9weVwiLCBzdG9weSArIG4gKiBjb25mMi5ib3hNYXJnaW4sIE1hdGgubWF4KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5zZXF1ZW5jZUl0ZW1zLmZvckVhY2godXBkYXRlRm4oKSk7XG4gIH0sXG4gIGluc2VydDogZnVuY3Rpb24oc3RhcnR4LCBzdGFydHksIHN0b3B4LCBzdG9weSkge1xuICAgIGNvbnN0IF9zdGFydHggPSBNYXRoLm1pbihzdGFydHgsIHN0b3B4KTtcbiAgICBjb25zdCBfc3RvcHggPSBNYXRoLm1heChzdGFydHgsIHN0b3B4KTtcbiAgICBjb25zdCBfc3RhcnR5ID0gTWF0aC5taW4oc3RhcnR5LCBzdG9weSk7XG4gICAgY29uc3QgX3N0b3B5ID0gTWF0aC5tYXgoc3RhcnR5LCBzdG9weSk7XG4gICAgdGhpcy51cGRhdGVWYWwoYm91bmRzLmRhdGEsIFwic3RhcnR4XCIsIF9zdGFydHgsIE1hdGgubWluKTtcbiAgICB0aGlzLnVwZGF0ZVZhbChib3VuZHMuZGF0YSwgXCJzdGFydHlcIiwgX3N0YXJ0eSwgTWF0aC5taW4pO1xuICAgIHRoaXMudXBkYXRlVmFsKGJvdW5kcy5kYXRhLCBcInN0b3B4XCIsIF9zdG9weCwgTWF0aC5tYXgpO1xuICAgIHRoaXMudXBkYXRlVmFsKGJvdW5kcy5kYXRhLCBcInN0b3B5XCIsIF9zdG9weSwgTWF0aC5tYXgpO1xuICAgIHRoaXMudXBkYXRlQm91bmRzKF9zdGFydHgsIF9zdGFydHksIF9zdG9weCwgX3N0b3B5KTtcbiAgfSxcbiAgYnVtcFZlcnRpY2FsUG9zOiBmdW5jdGlvbihidW1wKSB7XG4gICAgdGhpcy52ZXJ0aWNhbFBvcyA9IHRoaXMudmVydGljYWxQb3MgKyBidW1wO1xuICAgIHRoaXMuZGF0YS5zdG9weSA9IHRoaXMudmVydGljYWxQb3M7XG4gIH0sXG4gIGdldFZlcnRpY2FsUG9zOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbFBvcztcbiAgfSxcbiAgZ2V0Qm91bmRzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG59O1xuY29uc3QgZmlsbHMgPSBjb25mLnNlY3Rpb25GaWxscztcbmNvbnN0IHRleHRDb2xvdXJzID0gY29uZi5zZWN0aW9uQ29sb3VycztcbmNvbnN0IGRyYXdUYXNrcyA9IGZ1bmN0aW9uKGRpYWdyYW0yLCB0YXNrczIsIHZlcnRpY2FsUG9zKSB7XG4gIGNvbnN0IGNvbmYyID0gZ2V0Q29uZmlnKCkuam91cm5leTtcbiAgbGV0IGxhc3RTZWN0aW9uID0gXCJcIjtcbiAgY29uc3Qgc2VjdGlvblZIZWlnaHQgPSBjb25mMi5oZWlnaHQgKiAyICsgY29uZjIuZGlhZ3JhbU1hcmdpblk7XG4gIGNvbnN0IHRhc2tQb3MgPSB2ZXJ0aWNhbFBvcyArIHNlY3Rpb25WSGVpZ2h0O1xuICBsZXQgc2VjdGlvbk51bWJlciA9IDA7XG4gIGxldCBmaWxsID0gXCIjQ0NDXCI7XG4gIGxldCBjb2xvdXIgPSBcImJsYWNrXCI7XG4gIGxldCBudW0gPSAwO1xuICBmb3IgKGNvbnN0IFtpLCB0YXNrXSBvZiB0YXNrczIuZW50cmllcygpKSB7XG4gICAgaWYgKGxhc3RTZWN0aW9uICE9PSB0YXNrLnNlY3Rpb24pIHtcbiAgICAgIGZpbGwgPSBmaWxsc1tzZWN0aW9uTnVtYmVyICUgZmlsbHMubGVuZ3RoXTtcbiAgICAgIG51bSA9IHNlY3Rpb25OdW1iZXIgJSBmaWxscy5sZW5ndGg7XG4gICAgICBjb2xvdXIgPSB0ZXh0Q29sb3Vyc1tzZWN0aW9uTnVtYmVyICUgdGV4dENvbG91cnMubGVuZ3RoXTtcbiAgICAgIGxldCB0YXNrSW5TZWN0aW9uQ291bnQgPSAwO1xuICAgICAgY29uc3QgY3VycmVudFNlY3Rpb24yID0gdGFzay5zZWN0aW9uO1xuICAgICAgZm9yIChsZXQgdGFza0luZGV4ID0gaTsgdGFza0luZGV4IDwgdGFza3MyLmxlbmd0aDsgdGFza0luZGV4KyspIHtcbiAgICAgICAgaWYgKHRhc2tzMlt0YXNrSW5kZXhdLnNlY3Rpb24gPT0gY3VycmVudFNlY3Rpb24yKSB7XG4gICAgICAgICAgdGFza0luU2VjdGlvbkNvdW50ID0gdGFza0luU2VjdGlvbkNvdW50ICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qgc2VjdGlvbiA9IHtcbiAgICAgICAgeDogaSAqIGNvbmYyLnRhc2tNYXJnaW4gKyBpICogY29uZjIud2lkdGggKyBMRUZUX01BUkdJTixcbiAgICAgICAgeTogNTAsXG4gICAgICAgIHRleHQ6IHRhc2suc2VjdGlvbixcbiAgICAgICAgZmlsbCxcbiAgICAgICAgbnVtLFxuICAgICAgICBjb2xvdXIsXG4gICAgICAgIHRhc2tDb3VudDogdGFza0luU2VjdGlvbkNvdW50XG4gICAgICB9O1xuICAgICAgc3ZnRHJhdy5kcmF3U2VjdGlvbihkaWFncmFtMiwgc2VjdGlvbiwgY29uZjIpO1xuICAgICAgbGFzdFNlY3Rpb24gPSB0YXNrLnNlY3Rpb247XG4gICAgICBzZWN0aW9uTnVtYmVyKys7XG4gICAgfVxuICAgIGNvbnN0IHRhc2tBY3RvcnMgPSB0YXNrLnBlb3BsZS5yZWR1Y2UoKGFjYywgYWN0b3JOYW1lKSA9PiB7XG4gICAgICBpZiAoYWN0b3JzW2FjdG9yTmFtZV0pIHtcbiAgICAgICAgYWNjW2FjdG9yTmFtZV0gPSBhY3RvcnNbYWN0b3JOYW1lXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIHRhc2sueCA9IGkgKiBjb25mMi50YXNrTWFyZ2luICsgaSAqIGNvbmYyLndpZHRoICsgTEVGVF9NQVJHSU47XG4gICAgdGFzay55ID0gdGFza1BvcztcbiAgICB0YXNrLndpZHRoID0gY29uZjIuZGlhZ3JhbU1hcmdpblg7XG4gICAgdGFzay5oZWlnaHQgPSBjb25mMi5kaWFncmFtTWFyZ2luWTtcbiAgICB0YXNrLmNvbG91ciA9IGNvbG91cjtcbiAgICB0YXNrLmZpbGwgPSBmaWxsO1xuICAgIHRhc2subnVtID0gbnVtO1xuICAgIHRhc2suYWN0b3JzID0gdGFza0FjdG9ycztcbiAgICBzdmdEcmF3LmRyYXdUYXNrKGRpYWdyYW0yLCB0YXNrLCBjb25mMik7XG4gICAgYm91bmRzLmluc2VydCh0YXNrLngsIHRhc2sueSwgdGFzay54ICsgdGFzay53aWR0aCArIGNvbmYyLnRhc2tNYXJnaW4sIDMwMCArIDUgKiAzMCk7XG4gIH1cbn07XG5jb25zdCByZW5kZXJlciA9IHtcbiAgc2V0Q29uZixcbiAgZHJhd1xufTtcbmNvbnN0IGRpYWdyYW0gPSB7XG4gIHBhcnNlcjogcGFyc2VyJDEsXG4gIGRiLFxuICByZW5kZXJlcixcbiAgc3R5bGVzLFxuICBpbml0OiAoY25mKSA9PiB7XG4gICAgcmVuZGVyZXIuc2V0Q29uZihjbmYuam91cm5leSk7XG4gICAgZGIuY2xlYXIoKTtcbiAgfVxufTtcbmV4cG9ydCB7XG4gIGRpYWdyYW1cbn07XG4iXSwibmFtZXMiOlsiY2xlYXIkMSIsImdldENvbmZpZyIsInNldERpYWdyYW1UaXRsZSIsImdldERpYWdyYW1UaXRsZSIsInNldEFjY1RpdGxlIiwiZ2V0QWNjVGl0bGUiLCJzZXRBY2NEZXNjcmlwdGlvbiIsImdldEFjY0Rlc2NyaXB0aW9uIiwiZHJhd1JlY3QkMSIsImFyYyIsImRyYXdUZXh0JDEiLCJnZXROb3RlUmVjdCIsImRyYXdCYWNrZ3JvdW5kUmVjdCQxIiwic2VsZWN0IiwiY29uZmlndXJlU3ZnU2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBWUEsSUFBSSxNQUFNLEdBQUcsV0FBVztBQUN4QixFQUFFLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUN2RCxNQUFNLENBQUM7QUFDUCxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2QsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdkksRUFBRSxJQUFJLE9BQU8sR0FBRztBQUNoQixJQUFJLEtBQUssRUFBRSxTQUFTLEtBQUssR0FBRztBQUM1QixLQUFLO0FBQ0wsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNWLElBQUksUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO0FBQzNVLElBQUksVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLDJCQUEyQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFO0FBQzlQLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdILElBQUksYUFBYSxFQUFFLFNBQVMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNyRixNQUFNLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLE1BQU0sUUFBUSxPQUFPO0FBQ3JCLFFBQVEsS0FBSyxDQUFDO0FBQ2QsVUFBVSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDNUIsUUFBUSxLQUFLLENBQUM7QUFDZCxVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssQ0FBQztBQUNkLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEMsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDOUIsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxDQUFDLENBQUM7QUFDZixRQUFRLEtBQUssQ0FBQztBQUNkLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUIsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxDQUFDLENBQUM7QUFDZixRQUFRLEtBQUssQ0FBQztBQUNkLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDdEIsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxDQUFDO0FBQ2QsVUFBVSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQyxVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQyxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLENBQUM7QUFDZCxVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2pDLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakMsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFLENBQUM7QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2pDLFVBQVUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QyxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFDLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDMUIsVUFBVSxNQUFNO0FBQ2hCLE9BQU87QUFDUCxLQUFLO0FBQ0wsSUFBSSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyZSxJQUFJLGNBQWMsRUFBRSxFQUFFO0FB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QUFDQSxJQUFJLEVBQUUsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDNUQ7QUFDQTtBQUNBLElBQUksRUFBRSxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUM1RDtBQUNBO0FBQ0EsSUFBSSxFQUFFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzVEO0FBQ0E7QUFDQSxJQUFJLEVBQUUsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDNUQ7QUFDQTtBQUNBLElBQUksRUFBRSxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDdEQ7QUFDQTtBQUNBLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN0RDtBQUNBO0FBQ0EsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3REO0FBQ0E7QUFDQSxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDdEQ7QUFDQTtBQUNBLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN0RDtBQUNBO0FBQ0EsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3REO0FBQ0EsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLE1BQU0sUUFBUSxHQUFHLFNBQVMsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUMxQyxFQUFFLE9BQU9DLDhCQUFVLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQztBQUNGLE1BQU0sUUFBUSxHQUFHLFNBQVMsT0FBTyxFQUFFLFFBQVEsRUFBRTtBQUM3QyxFQUFFLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNwQixFQUFFLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUM3TCxFQUFFLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3JMLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNyTCxFQUFFLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRTtBQUN4QixJQUFJLE1BQU0sS0FBSyxHQUFHQyxPQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDOUgsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksR0FBRyxRQUFRLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQy9JLEdBQUc7QUFDSCxFQUFFLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRTtBQUN0QixJQUFJLE1BQU0sS0FBSyxHQUFHQSxPQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ2xJLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxZQUFZLEdBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUMvSSxHQUFHO0FBQ0gsRUFBRSxTQUFTLFVBQVUsQ0FBQyxLQUFLLEVBQUU7QUFDN0IsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJ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QUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUMsSUFBSSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMzQyxJQUFJLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzVDLElBQUksTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDM0MsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0QsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3hELEdBQUc7QUFDSCxFQUFFLGVBQWUsRUFBRSxTQUFTLElBQUksRUFBRTtBQUNsQyxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDL0MsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ3ZD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
