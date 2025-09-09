'use strict';

var index = require('./index-deb671d6.js');
require('./main-5c8f274d.js');
var arc = require('./arc-3a1d4100.js');
require('obsidian');
require('./path-29c5310d.js');

var parser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [6, 8, 10, 11, 12, 14, 16, 17, 20, 21], $V1 = [1, 9], $V2 = [1, 10], $V3 = [1, 11], $V4 = [1, 12], $V5 = [1, 13], $V6 = [1, 16], $V7 = [1, 17];
  var parser2 = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "start": 3, "timeline": 4, "document": 5, "EOF": 6, "line": 7, "SPACE": 8, "statement": 9, "NEWLINE": 10, "title": 11, "acc_title": 12, "acc_title_value": 13, "acc_descr": 14, "acc_descr_value": 15, "acc_descr_multiline_value": 16, "section": 17, "period_statement": 18, "event_statement": 19, "period": 20, "event": 21, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 4: "timeline", 6: "EOF", 8: "SPACE", 10: "NEWLINE", 11: "title", 12: "acc_title", 13: "acc_title_value", 14: "acc_descr", 15: "acc_descr_value", 16: "acc_descr_multiline_value", 17: "section", 20: "period", 21: "event" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 1], [18, 1], [19, 1]],
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
          yy.getCommonDb().setDiagramTitle($$[$0].substr(6));
          this.$ = $$[$0].substr(6);
          break;
        case 9:
          this.$ = $$[$0].trim();
          yy.getCommonDb().setAccTitle(this.$);
          break;
        case 10:
        case 11:
          this.$ = $$[$0].trim();
          yy.getCommonDb().setAccDescription(this.$);
          break;
        case 12:
          yy.addSection($$[$0].substr(8));
          this.$ = $$[$0].substr(8);
          break;
        case 15:
          yy.addTask($$[$0], 0, "");
          this.$ = $$[$0];
          break;
        case 16:
          yy.addEvent($$[$0].substr(2));
          this.$ = $$[$0];
          break;
      }
    },
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, o($V0, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: $V1, 12: $V2, 14: $V3, 16: $V4, 17: $V5, 18: 14, 19: 15, 20: $V6, 21: $V7 }, o($V0, [2, 7], { 1: [2, 1] }), o($V0, [2, 3]), { 9: 18, 11: $V1, 12: $V2, 14: $V3, 16: $V4, 17: $V5, 18: 14, 19: 15, 20: $V6, 21: $V7 }, o($V0, [2, 5]), o($V0, [2, 6]), o($V0, [2, 8]), { 13: [1, 19] }, { 15: [1, 20] }, o($V0, [2, 11]), o($V0, [2, 12]), o($V0, [2, 13]), o($V0, [2, 14]), o($V0, [2, 15]), o($V0, [2, 16]), o($V0, [2, 4]), o($V0, [2, 9]), o($V0, [2, 10])],
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
            return 21;
          case 16:
            return 20;
          case 17:
            return 6;
          case 18:
            return "INVALID";
        }
      },
      rules: [/^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:timeline\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:section\s[^#:\n;]+)/i, /^(?::\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { "acc_descr_multiline": { "rules": [12, 13], "inclusive": false }, "acc_descr": { "rules": [10], "inclusive": false }, "acc_title": { "rules": [8], "inclusive": false }, "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18], "inclusive": true } }
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
let currentTaskId = 0;
const sections = [];
const tasks = [];
const rawTasks = [];
const getCommonDb = () => index.commonDb;
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
const addTask = function(period, length, event) {
  const rawTask = {
    id: currentTaskId++,
    section: currentSection,
    type: currentSection,
    task: period,
    score: length ? length : 0,
    //if event is defined, then add it the events array
    events: event ? [event] : []
  };
  rawTasks.push(rawTask);
};
const addEvent = function(event) {
  const currentTask = rawTasks.find((task) => task.id === currentTaskId - 1);
  currentTask.events.push(event);
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
const timelineDb = {
  clear,
  getCommonDb,
  addSection,
  getSections,
  getTasks,
  addTask,
  addTaskOrg,
  addEvent
};
const db = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addEvent,
  addSection,
  addTask,
  addTaskOrg,
  clear,
  default: timelineDb,
  getCommonDb,
  getSections,
  getTasks
}, Symbol.toStringTag, { value: "Module" }));
const MAX_SECTIONS = 12;
const drawRect = function(elem, rectData) {
  const rectElem = elem.append("rect");
  rectElem.attr("x", rectData.x);
  rectElem.attr("y", rectData.y);
  rectElem.attr("fill", rectData.fill);
  rectElem.attr("stroke", rectData.stroke);
  rectElem.attr("width", rectData.width);
  rectElem.attr("height", rectData.height);
  rectElem.attr("rx", rectData.rx);
  rectElem.attr("ry", rectData.ry);
  if (rectData.class !== void 0) {
    rectElem.attr("class", rectData.class);
  }
  return rectElem;
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
  const nText = textData.text.replace(/<br\s*\/?>/gi, " ");
  const textElem = elem.append("text");
  textElem.attr("x", textData.x);
  textElem.attr("y", textData.y);
  textElem.attr("class", "legend");
  textElem.style("text-anchor", textData.anchor);
  if (textData.class !== void 0) {
    textElem.attr("class", textData.class);
  }
  const span = textElem.append("tspan");
  span.attr("x", textData.x + textData.textMargin * 2);
  span.text(nText);
  return textElem;
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
const drawSection = function(elem, section, conf) {
  const g = elem.append("g");
  const rect = getNoteRect();
  rect.x = section.x;
  rect.y = section.y;
  rect.fill = section.fill;
  rect.width = conf.width;
  rect.height = conf.height;
  rect.class = "journey-section section-type-" + section.num;
  rect.rx = 3;
  rect.ry = 3;
  drawRect(g, rect);
  _drawTextCandidateFunc(conf)(
    section.text,
    g,
    rect.x,
    rect.y,
    rect.width,
    rect.height,
    { class: "journey-section section-type-" + section.num },
    conf,
    section.colour
  );
};
let taskCount = -1;
const drawTask = function(elem, task, conf) {
  const center = task.x + conf.width / 2;
  const g = elem.append("g");
  taskCount++;
  const maxHeight = 300 + 5 * 30;
  g.append("line").attr("id", "task" + taskCount).attr("x1", center).attr("y1", task.y).attr("x2", center).attr("y2", maxHeight).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666");
  drawFace(g, {
    cx: center,
    cy: 300 + (5 - task.score) * 30,
    score: task.score
  });
  const rect = getNoteRect();
  rect.x = task.x;
  rect.y = task.y;
  rect.fill = task.fill;
  rect.width = conf.width;
  rect.height = conf.height;
  rect.class = "task task-type-" + task.num;
  rect.rx = 3;
  rect.ry = 3;
  drawRect(g, rect);
  task.x + 14;
  _drawTextCandidateFunc(conf)(
    task.task,
    g,
    rect.x,
    rect.y,
    rect.width,
    rect.height,
    { class: "task" },
    conf,
    task.colour
  );
};
const drawBackgroundRect = function(elem, bounds) {
  const rectElem = drawRect(elem, {
    x: bounds.startx,
    y: bounds.starty,
    width: bounds.stopx - bounds.startx,
    height: bounds.stopy - bounds.starty,
    fill: bounds.fill,
    class: "rect"
  });
  rectElem.lower();
};
const getTextObj = function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    "text-anchor": "start",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0
  };
};
const getNoteRect = function() {
  return {
    x: 0,
    y: 0,
    width: 100,
    anchor: "start",
    height: 100,
    rx: 0,
    ry: 0
  };
};
const _drawTextCandidateFunc = function() {
  function byText(content, g, x, y, width, height, textAttrs, colour) {
    const text = g.append("text").attr("x", x + width / 2).attr("y", y + height / 2 + 5).style("font-color", colour).style("text-anchor", "middle").text(content);
    _setTextAttrs(text, textAttrs);
  }
  function byTspan(content, g, x, y, width, height, textAttrs, conf, colour) {
    const { taskFontSize, taskFontFamily } = conf;
    const lines = content.split(/<br\s*\/?>/gi);
    for (let i = 0; i < lines.length; i++) {
      const dy = i * taskFontSize - taskFontSize * (lines.length - 1) / 2;
      const text = g.append("text").attr("x", x + width / 2).attr("y", y).attr("fill", colour).style("text-anchor", "middle").style("font-size", taskFontSize).style("font-family", taskFontFamily);
      text.append("tspan").attr("x", x + width / 2).attr("dy", dy).text(lines[i]);
      text.attr("y", y + height / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central");
      _setTextAttrs(text, textAttrs);
    }
  }
  function byFo(content, g, x, y, width, height, textAttrs, conf) {
    const body = g.append("switch");
    const f = body.append("foreignObject").attr("x", x).attr("y", y).attr("width", width).attr("height", height).attr("position", "fixed");
    const text = f.append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    text.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(content);
    byTspan(content, body, x, y, width, height, textAttrs, conf);
    _setTextAttrs(text, textAttrs);
  }
  function _setTextAttrs(toText, fromTextAttrsDict) {
    for (const key in fromTextAttrsDict) {
      if (key in fromTextAttrsDict) {
        toText.attr(key, fromTextAttrsDict[key]);
      }
    }
  }
  return function(conf) {
    return conf.textPlacement === "fo" ? byFo : conf.textPlacement === "old" ? byText : byTspan;
  };
}();
const initGraphics = function(graphics) {
  graphics.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
};
function wrap(text, width) {
  text.each(function() {
    var text2 = index.select(this), words = text2.text().split(/(\s+|<br>)/).reverse(), word, line = [], lineHeight = 1.1, y = text2.attr("y"), dy = parseFloat(text2.attr("dy")), tspan = text2.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
    for (let j = 0; j < words.length; j++) {
      word = words[words.length - 1 - j];
      line.push(word);
      tspan.text(line.join(" ").trim());
      if (tspan.node().getComputedTextLength() > width || word === "<br>") {
        line.pop();
        tspan.text(line.join(" ").trim());
        if (word === "<br>") {
          line = [""];
        } else {
          line = [word];
        }
        tspan = text2.append("tspan").attr("x", 0).attr("y", y).attr("dy", lineHeight + "em").text(word);
      }
    }
  });
}
const drawNode = function(elem, node, fullSection, conf) {
  const section = fullSection % MAX_SECTIONS - 1;
  const nodeElem = elem.append("g");
  node.section = section;
  nodeElem.attr(
    "class",
    (node.class ? node.class + " " : "") + "timeline-node " + ("section-" + section)
  );
  const bkgElem = nodeElem.append("g");
  const textElem = nodeElem.append("g");
  const txt = textElem.append("text").text(node.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(wrap, node.width);
  const bbox = txt.node().getBBox();
  const fontSize = conf.fontSize && conf.fontSize.replace ? conf.fontSize.replace("px", "") : conf.fontSize;
  node.height = bbox.height + fontSize * 1.1 * 0.5 + node.padding;
  node.height = Math.max(node.height, node.maxHeight);
  node.width = node.width + 2 * node.padding;
  textElem.attr("transform", "translate(" + node.width / 2 + ", " + node.padding / 2 + ")");
  defaultBkg(bkgElem, node, section);
  return node;
};
const getVirtualNodeHeight = function(elem, node, conf) {
  const textElem = elem.append("g");
  const txt = textElem.append("text").text(node.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(wrap, node.width);
  const bbox = txt.node().getBBox();
  const fontSize = conf.fontSize && conf.fontSize.replace ? conf.fontSize.replace("px", "") : conf.fontSize;
  textElem.remove();
  return bbox.height + fontSize * 1.1 * 0.5 + node.padding;
};
const defaultBkg = function(elem, node, section) {
  const rd = 5;
  elem.append("path").attr("id", "node-" + node.id).attr("class", "node-bkg node-" + node.type).attr(
    "d",
    `M0 ${node.height - rd} v${-node.height + 2 * rd} q0,-5 5,-5 h${node.width - 2 * rd} q5,0 5,5 v${node.height - rd} H0 Z`
  );
  elem.append("line").attr("class", "node-line-" + section).attr("x1", 0).attr("y1", node.height).attr("x2", node.width).attr("y2", node.height);
};
const svgDraw = {
  drawRect,
  drawCircle,
  drawSection,
  drawText,
  drawLabel,
  drawTask,
  drawBackgroundRect,
  getTextObj,
  getNoteRect,
  initGraphics,
  drawNode,
  getVirtualNodeHeight
};
const draw = function(text, id, version, diagObj) {
  var _a, _b;
  const conf = index.getConfig();
  const LEFT_MARGIN = conf.leftMargin ?? 50;
  index.log$1.debug("timeline", diagObj.db);
  const securityLevel = conf.securityLevel;
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = index.select("#i" + id);
  }
  const root = securityLevel === "sandbox" ? index.select(sandboxElement.nodes()[0].contentDocument.body) : index.select("body");
  const svg = root.select("#" + id);
  svg.append("g");
  const tasks2 = diagObj.db.getTasks();
  const title = diagObj.db.getCommonDb().getDiagramTitle();
  index.log$1.debug("task", tasks2);
  svgDraw.initGraphics(svg);
  const sections2 = diagObj.db.getSections();
  index.log$1.debug("sections", sections2);
  let maxSectionHeight = 0;
  let maxTaskHeight = 0;
  let depthY = 0;
  let sectionBeginY = 0;
  let masterX = 50 + LEFT_MARGIN;
  let masterY = 50;
  sectionBeginY = 50;
  let sectionNumber = 0;
  let hasSections = true;
  sections2.forEach(function(section) {
    const sectionNode = {
      number: sectionNumber,
      descr: section,
      section: sectionNumber,
      width: 150,
      padding: 20,
      maxHeight: maxSectionHeight
    };
    const sectionHeight = svgDraw.getVirtualNodeHeight(svg, sectionNode, conf);
    index.log$1.debug("sectionHeight before draw", sectionHeight);
    maxSectionHeight = Math.max(maxSectionHeight, sectionHeight + 20);
  });
  let maxEventCount = 0;
  let maxEventLineLength = 0;
  index.log$1.debug("tasks.length", tasks2.length);
  for (const [i, task] of tasks2.entries()) {
    const taskNode = {
      number: i,
      descr: task,
      section: task.section,
      width: 150,
      padding: 20,
      maxHeight: maxTaskHeight
    };
    const taskHeight = svgDraw.getVirtualNodeHeight(svg, taskNode, conf);
    index.log$1.debug("taskHeight before draw", taskHeight);
    maxTaskHeight = Math.max(maxTaskHeight, taskHeight + 20);
    maxEventCount = Math.max(maxEventCount, task.events.length);
    let maxEventLineLengthTemp = 0;
    for (let j = 0; j < task.events.length; j++) {
      const event = task.events[j];
      const eventNode = {
        descr: event,
        section: task.section,
        number: task.section,
        width: 150,
        padding: 20,
        maxHeight: 50
      };
      maxEventLineLengthTemp += svgDraw.getVirtualNodeHeight(svg, eventNode, conf);
    }
    maxEventLineLength = Math.max(maxEventLineLength, maxEventLineLengthTemp);
  }
  index.log$1.debug("maxSectionHeight before draw", maxSectionHeight);
  index.log$1.debug("maxTaskHeight before draw", maxTaskHeight);
  if (sections2 && sections2.length > 0) {
    sections2.forEach((section) => {
      const tasksForSection = tasks2.filter((task) => task.section === section);
      const sectionNode = {
        number: sectionNumber,
        descr: section,
        section: sectionNumber,
        width: 200 * Math.max(tasksForSection.length, 1) - 50,
        padding: 20,
        maxHeight: maxSectionHeight
      };
      index.log$1.debug("sectionNode", sectionNode);
      const sectionNodeWrapper = svg.append("g");
      const node = svgDraw.drawNode(sectionNodeWrapper, sectionNode, sectionNumber, conf);
      index.log$1.debug("sectionNode output", node);
      sectionNodeWrapper.attr("transform", `translate(${masterX}, ${sectionBeginY})`);
      masterY += maxSectionHeight + 50;
      if (tasksForSection.length > 0) {
        drawTasks(
          svg,
          tasksForSection,
          sectionNumber,
          masterX,
          masterY,
          maxTaskHeight,
          conf,
          maxEventCount,
          maxEventLineLength,
          maxSectionHeight,
          false
        );
      }
      masterX += 200 * Math.max(tasksForSection.length, 1);
      masterY = sectionBeginY;
      sectionNumber++;
    });
  } else {
    hasSections = false;
    drawTasks(
      svg,
      tasks2,
      sectionNumber,
      masterX,
      masterY,
      maxTaskHeight,
      conf,
      maxEventCount,
      maxEventLineLength,
      maxSectionHeight,
      true
    );
  }
  const box = svg.node().getBBox();
  index.log$1.debug("bounds", box);
  if (title) {
    svg.append("text").text(title).attr("x", box.width / 2 - LEFT_MARGIN).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 20);
  }
  depthY = hasSections ? maxSectionHeight + maxTaskHeight + 150 : maxTaskHeight + 100;
  const lineWrapper = svg.append("g").attr("class", "lineWrapper");
  lineWrapper.append("line").attr("x1", LEFT_MARGIN).attr("y1", depthY).attr("x2", box.width + 3 * LEFT_MARGIN).attr("y2", depthY).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
  index.setupGraphViewbox$1(
    void 0,
    svg,
    ((_a = conf.timeline) == null ? void 0 : _a.padding) ?? 50,
    ((_b = conf.timeline) == null ? void 0 : _b.useMaxWidth) ?? false
  );
};
const drawTasks = function(diagram2, tasks2, sectionColor, masterX, masterY, maxTaskHeight, conf, maxEventCount, maxEventLineLength, maxSectionHeight, isWithoutSections) {
  var _a;
  for (const task of tasks2) {
    const taskNode = {
      descr: task.task,
      section: sectionColor,
      number: sectionColor,
      width: 150,
      padding: 20,
      maxHeight: maxTaskHeight
    };
    index.log$1.debug("taskNode", taskNode);
    const taskWrapper = diagram2.append("g").attr("class", "taskWrapper");
    const node = svgDraw.drawNode(taskWrapper, taskNode, sectionColor, conf);
    const taskHeight = node.height;
    index.log$1.debug("taskHeight after draw", taskHeight);
    taskWrapper.attr("transform", `translate(${masterX}, ${masterY})`);
    maxTaskHeight = Math.max(maxTaskHeight, taskHeight);
    if (task.events) {
      const lineWrapper = diagram2.append("g").attr("class", "lineWrapper");
      let lineLength = maxTaskHeight;
      masterY += 100;
      lineLength = lineLength + drawEvents(diagram2, task.events, sectionColor, masterX, masterY, conf);
      masterY -= 100;
      lineWrapper.append("line").attr("x1", masterX + 190 / 2).attr("y1", masterY + maxTaskHeight).attr("x2", masterX + 190 / 2).attr(
        "y2",
        masterY + maxTaskHeight + (isWithoutSections ? maxTaskHeight : maxSectionHeight) + maxEventLineLength + 120
      ).attr("stroke-width", 2).attr("stroke", "black").attr("marker-end", "url(#arrowhead)").attr("stroke-dasharray", "5,5");
    }
    masterX = masterX + 200;
    if (isWithoutSections && !((_a = conf.timeline) == null ? void 0 : _a.disableMulticolor)) {
      sectionColor++;
    }
  }
  masterY = masterY - 10;
};
const drawEvents = function(diagram2, events, sectionColor, masterX, masterY, conf) {
  let maxEventHeight = 0;
  const eventBeginY = masterY;
  masterY = masterY + 100;
  for (const event of events) {
    const eventNode = {
      descr: event,
      section: sectionColor,
      number: sectionColor,
      width: 150,
      padding: 20,
      maxHeight: 50
    };
    index.log$1.debug("eventNode", eventNode);
    const eventWrapper = diagram2.append("g").attr("class", "eventWrapper");
    const node = svgDraw.drawNode(eventWrapper, eventNode, sectionColor, conf);
    const eventHeight = node.height;
    maxEventHeight = maxEventHeight + eventHeight;
    eventWrapper.attr("transform", `translate(${masterX}, ${masterY})`);
    masterY = masterY + 10 + eventHeight;
  }
  masterY = eventBeginY;
  return maxEventHeight;
};
const renderer = {
  setConf: () => {
  },
  draw
};
const genSections = (options) => {
  let sections2 = "";
  for (let i = 0; i < options.THEME_COLOR_LIMIT; i++) {
    options["lineColor" + i] = options["lineColor" + i] || options["cScaleInv" + i];
    if (index.isDark(options["lineColor" + i])) {
      options["lineColor" + i] = index.lighten(options["lineColor" + i], 20);
    } else {
      options["lineColor" + i] = index.darken(options["lineColor" + i], 20);
    }
  }
  for (let i = 0; i < options.THEME_COLOR_LIMIT; i++) {
    const sw = "" + (17 - 3 * i);
    sections2 += `
    .section-${i - 1} rect, .section-${i - 1} path, .section-${i - 1} circle, .section-${i - 1} path  {
      fill: ${options["cScale" + i]};
    }
    .section-${i - 1} text {
     fill: ${options["cScaleLabel" + i]};
    }
    .node-icon-${i - 1} {
      font-size: 40px;
      color: ${options["cScaleLabel" + i]};
    }
    .section-edge-${i - 1}{
      stroke: ${options["cScale" + i]};
    }
    .edge-depth-${i - 1}{
      stroke-width: ${sw};
    }
    .section-${i - 1} line {
      stroke: ${options["cScaleInv" + i]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${options["cScaleLabel" + i]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
  }
  return sections2;
};
const getStyles = (options) => `
  .edge {
    stroke-width: 3;
  }
  ${genSections(options)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${options.git0};
  }
  .section-root text {
    fill: ${options.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`;
const styles = getStyles;
const diagram = {
  db,
  renderer,
  parser: parser$1,
  styles
};

exports.diagram = diagram;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtZGVmaW5pdGlvbi04NTU1NGVjMi0xZWM2MTM4Yy5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL21lcm1haWQvZGlzdC90aW1lbGluZS1kZWZpbml0aW9uLTg1NTU0ZWMyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEwgYXMgY29tbW9uRGIsIHYgYXMgY2xlYXIkMSwgYyBhcyBnZXRDb25maWcsIGwgYXMgbG9nLCBvIGFzIHNldHVwR3JhcGhWaWV3Ym94IH0gZnJvbSBcIi4vbWVybWFpZC1iNTg2MGI1NC5qc1wiO1xuaW1wb3J0IHsgc2VsZWN0LCBhcmMgfSBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IGlzRGFyaywgbGlnaHRlbiwgZGFya2VuIH0gZnJvbSBcImtocm9tYVwiO1xuaW1wb3J0IFwidHMtZGVkZW50XCI7XG5pbXBvcnQgXCJkYXlqc1wiO1xuaW1wb3J0IFwiQGJyYWludHJlZS9zYW5pdGl6ZS11cmxcIjtcbmltcG9ydCBcImRvbXB1cmlmeVwiO1xuaW1wb3J0IFwibG9kYXNoLWVzL21lbW9pemUuanNcIjtcbmltcG9ydCBcImxvZGFzaC1lcy9tZXJnZS5qc1wiO1xuaW1wb3J0IFwic3R5bGlzXCI7XG5pbXBvcnQgXCJsb2Rhc2gtZXMvaXNFbXB0eS5qc1wiO1xudmFyIHBhcnNlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbyA9IGZ1bmN0aW9uKGssIHYsIG8yLCBsKSB7XG4gICAgZm9yIChvMiA9IG8yIHx8IHt9LCBsID0gay5sZW5ndGg7IGwtLTsgbzJba1tsXV0gPSB2KVxuICAgICAgO1xuICAgIHJldHVybiBvMjtcbiAgfSwgJFYwID0gWzYsIDgsIDEwLCAxMSwgMTIsIDE0LCAxNiwgMTcsIDIwLCAyMV0sICRWMSA9IFsxLCA5XSwgJFYyID0gWzEsIDEwXSwgJFYzID0gWzEsIDExXSwgJFY0ID0gWzEsIDEyXSwgJFY1ID0gWzEsIDEzXSwgJFY2ID0gWzEsIDE2XSwgJFY3ID0gWzEsIDE3XTtcbiAgdmFyIHBhcnNlcjIgPSB7XG4gICAgdHJhY2U6IGZ1bmN0aW9uIHRyYWNlKCkge1xuICAgIH0sXG4gICAgeXk6IHt9LFxuICAgIHN5bWJvbHNfOiB7IFwiZXJyb3JcIjogMiwgXCJzdGFydFwiOiAzLCBcInRpbWVsaW5lXCI6IDQsIFwiZG9jdW1lbnRcIjogNSwgXCJFT0ZcIjogNiwgXCJsaW5lXCI6IDcsIFwiU1BBQ0VcIjogOCwgXCJzdGF0ZW1lbnRcIjogOSwgXCJORVdMSU5FXCI6IDEwLCBcInRpdGxlXCI6IDExLCBcImFjY190aXRsZVwiOiAxMiwgXCJhY2NfdGl0bGVfdmFsdWVcIjogMTMsIFwiYWNjX2Rlc2NyXCI6IDE0LCBcImFjY19kZXNjcl92YWx1ZVwiOiAxNSwgXCJhY2NfZGVzY3JfbXVsdGlsaW5lX3ZhbHVlXCI6IDE2LCBcInNlY3Rpb25cIjogMTcsIFwicGVyaW9kX3N0YXRlbWVudFwiOiAxOCwgXCJldmVudF9zdGF0ZW1lbnRcIjogMTksIFwicGVyaW9kXCI6IDIwLCBcImV2ZW50XCI6IDIxLCBcIiRhY2NlcHRcIjogMCwgXCIkZW5kXCI6IDEgfSxcbiAgICB0ZXJtaW5hbHNfOiB7IDI6IFwiZXJyb3JcIiwgNDogXCJ0aW1lbGluZVwiLCA2OiBcIkVPRlwiLCA4OiBcIlNQQUNFXCIsIDEwOiBcIk5FV0xJTkVcIiwgMTE6IFwidGl0bGVcIiwgMTI6IFwiYWNjX3RpdGxlXCIsIDEzOiBcImFjY190aXRsZV92YWx1ZVwiLCAxNDogXCJhY2NfZGVzY3JcIiwgMTU6IFwiYWNjX2Rlc2NyX3ZhbHVlXCIsIDE2OiBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIiwgMTc6IFwic2VjdGlvblwiLCAyMDogXCJwZXJpb2RcIiwgMjE6IFwiZXZlbnRcIiB9LFxuICAgIHByb2R1Y3Rpb25zXzogWzAsIFszLCAzXSwgWzUsIDBdLCBbNSwgMl0sIFs3LCAyXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzksIDFdLCBbOSwgMl0sIFs5LCAyXSwgWzksIDFdLCBbOSwgMV0sIFs5LCAxXSwgWzksIDFdLCBbMTgsIDFdLCBbMTksIDFdXSxcbiAgICBwZXJmb3JtQWN0aW9uOiBmdW5jdGlvbiBhbm9ueW1vdXMoeXl0ZXh0LCB5eWxlbmcsIHl5bGluZW5vLCB5eSwgeXlzdGF0ZSwgJCQsIF8kKSB7XG4gICAgICB2YXIgJDAgPSAkJC5sZW5ndGggLSAxO1xuICAgICAgc3dpdGNoICh5eXN0YXRlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gJCRbJDAgLSAxXTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuJCA9IFtdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDAgLSAxXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICB0aGlzLiQgPSBbXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIHl5LmdldENvbW1vbkRiKCkuc2V0RGlhZ3JhbVRpdGxlKCQkWyQwXS5zdWJzdHIoNikpO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXS5zdWJzdHIoNik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0udHJpbSgpO1xuICAgICAgICAgIHl5LmdldENvbW1vbkRiKCkuc2V0QWNjVGl0bGUodGhpcy4kKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0udHJpbSgpO1xuICAgICAgICAgIHl5LmdldENvbW1vbkRiKCkuc2V0QWNjRGVzY3JpcHRpb24odGhpcy4kKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICB5eS5hZGRTZWN0aW9uKCQkWyQwXS5zdWJzdHIoOCkpO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXS5zdWJzdHIoOCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgeXkuYWRkVGFzaygkJFskMF0sIDAsIFwiXCIpO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICB5eS5hZGRFdmVudCgkJFskMF0uc3Vic3RyKDIpKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcbiAgICB0YWJsZTogW3sgMzogMSwgNDogWzEsIDJdIH0sIHsgMTogWzNdIH0sIG8oJFYwLCBbMiwgMl0sIHsgNTogMyB9KSwgeyA2OiBbMSwgNF0sIDc6IDUsIDg6IFsxLCA2XSwgOTogNywgMTA6IFsxLCA4XSwgMTE6ICRWMSwgMTI6ICRWMiwgMTQ6ICRWMywgMTY6ICRWNCwgMTc6ICRWNSwgMTg6IDE0LCAxOTogMTUsIDIwOiAkVjYsIDIxOiAkVjcgfSwgbygkVjAsIFsyLCA3XSwgeyAxOiBbMiwgMV0gfSksIG8oJFYwLCBbMiwgM10pLCB7IDk6IDE4LCAxMTogJFYxLCAxMjogJFYyLCAxNDogJFYzLCAxNjogJFY0LCAxNzogJFY1LCAxODogMTQsIDE5OiAxNSwgMjA6ICRWNiwgMjE6ICRWNyB9LCBvKCRWMCwgWzIsIDVdKSwgbygkVjAsIFsyLCA2XSksIG8oJFYwLCBbMiwgOF0pLCB7IDEzOiBbMSwgMTldIH0sIHsgMTU6IFsxLCAyMF0gfSwgbygkVjAsIFsyLCAxMV0pLCBvKCRWMCwgWzIsIDEyXSksIG8oJFYwLCBbMiwgMTNdKSwgbygkVjAsIFsyLCAxNF0pLCBvKCRWMCwgWzIsIDE1XSksIG8oJFYwLCBbMiwgMTZdKSwgbygkVjAsIFsyLCA0XSksIG8oJFYwLCBbMiwgOV0pLCBvKCRWMCwgWzIsIDEwXSldLFxuICAgIGRlZmF1bHRBY3Rpb25zOiB7fSxcbiAgICBwYXJzZUVycm9yOiBmdW5jdGlvbiBwYXJzZUVycm9yKHN0ciwgaGFzaCkge1xuICAgICAgaWYgKGhhc2gucmVjb3ZlcmFibGUpIHtcbiAgICAgICAgdGhpcy50cmFjZShzdHIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKHN0cik7XG4gICAgICAgIGVycm9yLmhhc2ggPSBoYXNoO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShpbnB1dCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzLCBzdGFjayA9IFswXSwgdHN0YWNrID0gW10sIHZzdGFjayA9IFtudWxsXSwgbHN0YWNrID0gW10sIHRhYmxlID0gdGhpcy50YWJsZSwgeXl0ZXh0ID0gXCJcIiwgeXlsaW5lbm8gPSAwLCB5eWxlbmcgPSAwLCBURVJST1IgPSAyLCBFT0YgPSAxO1xuICAgICAgdmFyIGFyZ3MgPSBsc3RhY2suc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgdmFyIGxleGVyMiA9IE9iamVjdC5jcmVhdGUodGhpcy5sZXhlcik7XG4gICAgICB2YXIgc2hhcmVkU3RhdGUgPSB7IHl5OiB7fSB9O1xuICAgICAgZm9yICh2YXIgayBpbiB0aGlzLnl5KSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy55eSwgaykpIHtcbiAgICAgICAgICBzaGFyZWRTdGF0ZS55eVtrXSA9IHRoaXMueXlba107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxleGVyMi5zZXRJbnB1dChpbnB1dCwgc2hhcmVkU3RhdGUueXkpO1xuICAgICAgc2hhcmVkU3RhdGUueXkubGV4ZXIgPSBsZXhlcjI7XG4gICAgICBzaGFyZWRTdGF0ZS55eS5wYXJzZXIgPSB0aGlzO1xuICAgICAgaWYgKHR5cGVvZiBsZXhlcjIueXlsbG9jID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgbGV4ZXIyLnl5bGxvYyA9IHt9O1xuICAgICAgfVxuICAgICAgdmFyIHl5bG9jID0gbGV4ZXIyLnl5bGxvYztcbiAgICAgIGxzdGFjay5wdXNoKHl5bG9jKTtcbiAgICAgIHZhciByYW5nZXMgPSBsZXhlcjIub3B0aW9ucyAmJiBsZXhlcjIub3B0aW9ucy5yYW5nZXM7XG4gICAgICBpZiAodHlwZW9mIHNoYXJlZFN0YXRlLnl5LnBhcnNlRXJyb3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aGlzLnBhcnNlRXJyb3IgPSBzaGFyZWRTdGF0ZS55eS5wYXJzZUVycm9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYXJzZUVycm9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLnBhcnNlRXJyb3I7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBsZXgoKSB7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgdG9rZW4gPSB0c3RhY2sucG9wKCkgfHwgbGV4ZXIyLmxleCgpIHx8IEVPRjtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICB0c3RhY2sgPSB0b2tlbjtcbiAgICAgICAgICAgIHRva2VuID0gdHN0YWNrLnBvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0b2tlbiA9IHNlbGYuc3ltYm9sc19bdG9rZW5dIHx8IHRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgIH1cbiAgICAgIHZhciBzeW1ib2wsIHN0YXRlLCBhY3Rpb24sIHIsIHl5dmFsID0ge30sIHAsIGxlbiwgbmV3U3RhdGUsIGV4cGVjdGVkO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgc3RhdGUgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdKSB7XG4gICAgICAgICAgYWN0aW9uID0gdGhpcy5kZWZhdWx0QWN0aW9uc1tzdGF0ZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHN5bWJvbCA9PT0gbnVsbCB8fCB0eXBlb2Ygc3ltYm9sID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHN5bWJvbCA9IGxleCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhY3Rpb24gPSB0YWJsZVtzdGF0ZV0gJiYgdGFibGVbc3RhdGVdW3N5bWJvbF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09IFwidW5kZWZpbmVkXCIgfHwgIWFjdGlvbi5sZW5ndGggfHwgIWFjdGlvblswXSkge1xuICAgICAgICAgIHZhciBlcnJTdHIgPSBcIlwiO1xuICAgICAgICAgIGV4cGVjdGVkID0gW107XG4gICAgICAgICAgZm9yIChwIGluIHRhYmxlW3N0YXRlXSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGVybWluYWxzX1twXSAmJiBwID4gVEVSUk9SKSB7XG4gICAgICAgICAgICAgIGV4cGVjdGVkLnB1c2goXCInXCIgKyB0aGlzLnRlcm1pbmFsc19bcF0gKyBcIidcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChsZXhlcjIuc2hvd1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICBlcnJTdHIgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoeXlsaW5lbm8gKyAxKSArIFwiOlxcblwiICsgbGV4ZXIyLnNob3dQb3NpdGlvbigpICsgXCJcXG5FeHBlY3RpbmcgXCIgKyBleHBlY3RlZC5qb2luKFwiLCBcIikgKyBcIiwgZ290ICdcIiArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgXCInXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVyclN0ciA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArICh5eWxpbmVubyArIDEpICsgXCI6IFVuZXhwZWN0ZWQgXCIgKyAoc3ltYm9sID09IEVPRiA/IFwiZW5kIG9mIGlucHV0XCIgOiBcIidcIiArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgXCInXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnBhcnNlRXJyb3IoZXJyU3RyLCB7XG4gICAgICAgICAgICB0ZXh0OiBsZXhlcjIubWF0Y2gsXG4gICAgICAgICAgICB0b2tlbjogdGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sLFxuICAgICAgICAgICAgbGluZTogbGV4ZXIyLnl5bGluZW5vLFxuICAgICAgICAgICAgbG9jOiB5eWxvYyxcbiAgICAgICAgICAgIGV4cGVjdGVkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvblswXSBpbnN0YW5jZW9mIEFycmF5ICYmIGFjdGlvbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyc2UgRXJyb3I6IG11bHRpcGxlIGFjdGlvbnMgcG9zc2libGUgYXQgc3RhdGU6IFwiICsgc3RhdGUgKyBcIiwgdG9rZW46IFwiICsgc3ltYm9sKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGFjdGlvblswXSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHN0YWNrLnB1c2goc3ltYm9sKTtcbiAgICAgICAgICAgIHZzdGFjay5wdXNoKGxleGVyMi55eXRleHQpO1xuICAgICAgICAgICAgbHN0YWNrLnB1c2gobGV4ZXIyLnl5bGxvYyk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGFjdGlvblsxXSk7XG4gICAgICAgICAgICBzeW1ib2wgPSBudWxsO1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB5eWxlbmcgPSBsZXhlcjIueXlsZW5nO1xuICAgICAgICAgICAgICB5eXRleHQgPSBsZXhlcjIueXl0ZXh0O1xuICAgICAgICAgICAgICB5eWxpbmVubyA9IGxleGVyMi55eWxpbmVubztcbiAgICAgICAgICAgICAgeXlsb2MgPSBsZXhlcjIueXlsbG9jO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgbGVuID0gdGhpcy5wcm9kdWN0aW9uc19bYWN0aW9uWzFdXVsxXTtcbiAgICAgICAgICAgIHl5dmFsLiQgPSB2c3RhY2tbdnN0YWNrLmxlbmd0aCAtIGxlbl07XG4gICAgICAgICAgICB5eXZhbC5fJCA9IHtcbiAgICAgICAgICAgICAgZmlyc3RfbGluZTogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5maXJzdF9saW5lLFxuICAgICAgICAgICAgICBsYXN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9saW5lLFxuICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5sYXN0X2NvbHVtblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChyYW5nZXMpIHtcbiAgICAgICAgICAgICAgeXl2YWwuXyQucmFuZ2UgPSBbXG4gICAgICAgICAgICAgICAgbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5yYW5nZVswXSxcbiAgICAgICAgICAgICAgICBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLnJhbmdlWzFdXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByID0gdGhpcy5wZXJmb3JtQWN0aW9uLmFwcGx5KHl5dmFsLCBbXG4gICAgICAgICAgICAgIHl5dGV4dCxcbiAgICAgICAgICAgICAgeXlsZW5nLFxuICAgICAgICAgICAgICB5eWxpbmVubyxcbiAgICAgICAgICAgICAgc2hhcmVkU3RhdGUueXksXG4gICAgICAgICAgICAgIGFjdGlvblsxXSxcbiAgICAgICAgICAgICAgdnN0YWNrLFxuICAgICAgICAgICAgICBsc3RhY2tcbiAgICAgICAgICAgIF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5zbGljZSgwLCAtMSAqIGxlbiAqIDIpO1xuICAgICAgICAgICAgICB2c3RhY2sgPSB2c3RhY2suc2xpY2UoMCwgLTEgKiBsZW4pO1xuICAgICAgICAgICAgICBsc3RhY2sgPSBsc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhY2sucHVzaCh0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzBdKTtcbiAgICAgICAgICAgIHZzdGFjay5wdXNoKHl5dmFsLiQpO1xuICAgICAgICAgICAgbHN0YWNrLnB1c2goeXl2YWwuXyQpO1xuICAgICAgICAgICAgbmV3U3RhdGUgPSB0YWJsZVtzdGFja1tzdGFjay5sZW5ndGggLSAyXV1bc3RhY2tbc3RhY2subGVuZ3RoIC0gMV1dO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXdTdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuICB2YXIgbGV4ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGV4ZXIyID0ge1xuICAgICAgRU9GOiAxLFxuICAgICAgcGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcbiAgICAgICAgaWYgKHRoaXMueXkucGFyc2VyKSB7XG4gICAgICAgICAgdGhpcy55eS5wYXJzZXIucGFyc2VFcnJvcihzdHIsIGhhc2gpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzdHIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcmVzZXRzIHRoZSBsZXhlciwgc2V0cyBuZXcgaW5wdXRcbiAgICAgIHNldElucHV0OiBmdW5jdGlvbihpbnB1dCwgeXkpIHtcbiAgICAgICAgdGhpcy55eSA9IHl5IHx8IHRoaXMueXkgfHwge307XG4gICAgICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG4gICAgICAgIHRoaXMuX21vcmUgPSB0aGlzLl9iYWNrdHJhY2sgPSB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy55eWxpbmVubyA9IHRoaXMueXlsZW5nID0gMDtcbiAgICAgICAgdGhpcy55eXRleHQgPSB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoID0gXCJcIjtcbiAgICAgICAgdGhpcy5jb25kaXRpb25TdGFjayA9IFtcIklOSVRJQUxcIl07XG4gICAgICAgIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgIGZpcnN0X2xpbmU6IDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiAwLFxuICAgICAgICAgIGxhc3RfbGluZTogMSxcbiAgICAgICAgICBsYXN0X2NvbHVtbjogMFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gWzAsIDBdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gY29uc3VtZXMgYW5kIHJldHVybnMgb25lIGNoYXIgZnJvbSB0aGUgaW5wdXRcbiAgICAgIGlucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy5faW5wdXRbMF07XG4gICAgICAgIHRoaXMueXl0ZXh0ICs9IGNoO1xuICAgICAgICB0aGlzLnl5bGVuZysrO1xuICAgICAgICB0aGlzLm9mZnNldCsrO1xuICAgICAgICB0aGlzLm1hdGNoICs9IGNoO1xuICAgICAgICB0aGlzLm1hdGNoZWQgKz0gY2g7XG4gICAgICAgIHZhciBsaW5lcyA9IGNoLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgaWYgKGxpbmVzKSB7XG4gICAgICAgICAgdGhpcy55eWxpbmVubysrO1xuICAgICAgICAgIHRoaXMueXlsbG9jLmxhc3RfbGluZSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMueXlsbG9jLmxhc3RfY29sdW1uKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZVsxXSsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UoMSk7XG4gICAgICAgIHJldHVybiBjaDtcbiAgICAgIH0sXG4gICAgICAvLyB1bnNoaWZ0cyBvbmUgY2hhciAob3IgYSBzdHJpbmcpIGludG8gdGhlIGlucHV0XG4gICAgICB1bnB1dDogZnVuY3Rpb24oY2gpIHtcbiAgICAgICAgdmFyIGxlbiA9IGNoLmxlbmd0aDtcbiAgICAgICAgdmFyIGxpbmVzID0gY2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSBjaCArIHRoaXMuX2lucHV0O1xuICAgICAgICB0aGlzLnl5dGV4dCA9IHRoaXMueXl0ZXh0LnN1YnN0cigwLCB0aGlzLnl5dGV4dC5sZW5ndGggLSBsZW4pO1xuICAgICAgICB0aGlzLm9mZnNldCAtPSBsZW47XG4gICAgICAgIHZhciBvbGRMaW5lcyA9IHRoaXMubWF0Y2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5tYXRjaCA9IHRoaXMubWF0Y2guc3Vic3RyKDAsIHRoaXMubWF0Y2gubGVuZ3RoIC0gMSk7XG4gICAgICAgIHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIDEpO1xuICAgICAgICBpZiAobGluZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHRoaXMueXlsaW5lbm8gLT0gbGluZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgciA9IHRoaXMueXlsbG9jLnJhbmdlO1xuICAgICAgICB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgbGFzdF9jb2x1bW46IGxpbmVzID8gKGxpbmVzLmxlbmd0aCA9PT0gb2xkTGluZXMubGVuZ3RoID8gdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIDogMCkgKyBvbGRMaW5lc1tvbGRMaW5lcy5sZW5ndGggLSBsaW5lcy5sZW5ndGhdLmxlbmd0aCAtIGxpbmVzWzBdLmxlbmd0aCA6IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiAtIGxlblxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3JbMF0sIHJbMF0gKyB0aGlzLnl5bGVuZyAtIGxlbl07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gYWN0aW9uLCBjYWNoZXMgbWF0Y2hlZCB0ZXh0IGFuZCBhcHBlbmRzIGl0IG9uIG5leHQgYWN0aW9uXG4gICAgICBtb3JlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fbW9yZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gYWN0aW9uLCBzaWduYWxzIHRoZSBsZXhlciB0aGF0IHRoaXMgcnVsZSBmYWlscyB0byBtYXRjaCB0aGUgaW5wdXQsIHNvIHRoZSBuZXh0IG1hdGNoaW5nIHJ1bGUgKHJlZ2V4KSBzaG91bGQgYmUgdGVzdGVkIGluc3RlYWQuXG4gICAgICByZWplY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcikge1xuICAgICAgICAgIHRoaXMuX2JhY2t0cmFjayA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBcIi4gWW91IGNhbiBvbmx5IGludm9rZSByZWplY3QoKSBpbiB0aGUgbGV4ZXIgd2hlbiB0aGUgbGV4ZXIgaXMgb2YgdGhlIGJhY2t0cmFja2luZyBwZXJzdWFzaW9uIChvcHRpb25zLmJhY2t0cmFja19sZXhlciA9IHRydWUpLlxcblwiICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIHJldGFpbiBmaXJzdCBuIGNoYXJhY3RlcnMgb2YgdGhlIG1hdGNoXG4gICAgICBsZXNzOiBmdW5jdGlvbihuKSB7XG4gICAgICAgIHRoaXMudW5wdXQodGhpcy5tYXRjaC5zbGljZShuKSk7XG4gICAgICB9LFxuICAgICAgLy8gZGlzcGxheXMgYWxyZWFkeSBtYXRjaGVkIGlucHV0LCBpLmUuIGZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgcGFzdElucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHBhc3QgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSB0aGlzLm1hdGNoLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiAocGFzdC5sZW5ndGggPiAyMCA/IFwiLi4uXCIgOiBcIlwiKSArIHBhc3Quc3Vic3RyKC0yMCkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIHVwY29taW5nIGlucHV0LCBpLmUuIGZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgdXBjb21pbmdJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBuZXh0ID0gdGhpcy5tYXRjaDtcbiAgICAgICAgaWYgKG5leHQubGVuZ3RoIDwgMjApIHtcbiAgICAgICAgICBuZXh0ICs9IHRoaXMuX2lucHV0LnN1YnN0cigwLCAyMCAtIG5leHQubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG5leHQuc3Vic3RyKDAsIDIwKSArIChuZXh0Lmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICB9LFxuICAgICAgLy8gZGlzcGxheXMgdGhlIGNoYXJhY3RlciBwb3NpdGlvbiB3aGVyZSB0aGUgbGV4aW5nIGVycm9yIG9jY3VycmVkLCBpLmUuIGZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgc2hvd1Bvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHByZSA9IHRoaXMucGFzdElucHV0KCk7XG4gICAgICAgIHZhciBjID0gbmV3IEFycmF5KHByZS5sZW5ndGggKyAxKS5qb2luKFwiLVwiKTtcbiAgICAgICAgcmV0dXJuIHByZSArIHRoaXMudXBjb21pbmdJbnB1dCgpICsgXCJcXG5cIiArIGMgKyBcIl5cIjtcbiAgICAgIH0sXG4gICAgICAvLyB0ZXN0IHRoZSBsZXhlZCB0b2tlbjogcmV0dXJuIEZBTFNFIHdoZW4gbm90IGEgbWF0Y2gsIG90aGVyd2lzZSByZXR1cm4gdG9rZW5cbiAgICAgIHRlc3RfbWF0Y2g6IGZ1bmN0aW9uKG1hdGNoLCBpbmRleGVkX3J1bGUpIHtcbiAgICAgICAgdmFyIHRva2VuLCBsaW5lcywgYmFja3VwO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcikge1xuICAgICAgICAgIGJhY2t1cCA9IHtcbiAgICAgICAgICAgIHl5bGluZW5vOiB0aGlzLnl5bGluZW5vLFxuICAgICAgICAgICAgeXlsbG9jOiB7XG4gICAgICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICAgIGxhc3RfbGluZTogdGhpcy5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogdGhpcy55eWxsb2MubGFzdF9jb2x1bW5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5eXRleHQ6IHRoaXMueXl0ZXh0LFxuICAgICAgICAgICAgbWF0Y2g6IHRoaXMubWF0Y2gsXG4gICAgICAgICAgICBtYXRjaGVzOiB0aGlzLm1hdGNoZXMsXG4gICAgICAgICAgICBtYXRjaGVkOiB0aGlzLm1hdGNoZWQsXG4gICAgICAgICAgICB5eWxlbmc6IHRoaXMueXlsZW5nLFxuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgICAgICAgIF9tb3JlOiB0aGlzLl9tb3JlLFxuICAgICAgICAgICAgX2lucHV0OiB0aGlzLl9pbnB1dCxcbiAgICAgICAgICAgIHl5OiB0aGlzLnl5LFxuICAgICAgICAgICAgY29uZGl0aW9uU3RhY2s6IHRoaXMuY29uZGl0aW9uU3RhY2suc2xpY2UoMCksXG4gICAgICAgICAgICBkb25lOiB0aGlzLmRvbmVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgICBiYWNrdXAueXlsbG9jLnJhbmdlID0gdGhpcy55eWxsb2MucmFuZ2Uuc2xpY2UoMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxpbmVzID0gbWF0Y2hbMF0ubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO1xuICAgICAgICBpZiAobGluZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGluZW5vICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5sYXN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiBsaW5lcyA/IGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdLmxlbmd0aCAtIGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdLm1hdGNoKC9cXHI/XFxuPy8pWzBdLmxlbmd0aCA6IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uICsgbWF0Y2hbMF0ubGVuZ3RoXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMueXl0ZXh0ICs9IG1hdGNoWzBdO1xuICAgICAgICB0aGlzLm1hdGNoICs9IG1hdGNoWzBdO1xuICAgICAgICB0aGlzLm1hdGNoZXMgPSBtYXRjaDtcbiAgICAgICAgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGg7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbdGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICs9IHRoaXMueXlsZW5nXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tb3JlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2JhY2t0cmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKG1hdGNoWzBdLmxlbmd0aCk7XG4gICAgICAgIHRoaXMubWF0Y2hlZCArPSBtYXRjaFswXTtcbiAgICAgICAgdG9rZW4gPSB0aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh0aGlzLCB0aGlzLnl5LCB0aGlzLCBpbmRleGVkX3J1bGUsIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSk7XG4gICAgICAgIGlmICh0aGlzLmRvbmUgJiYgdGhpcy5faW5wdXQpIHtcbiAgICAgICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYmFja3RyYWNrKSB7XG4gICAgICAgICAgZm9yICh2YXIgayBpbiBiYWNrdXApIHtcbiAgICAgICAgICAgIHRoaXNba10gPSBiYWNrdXBba107XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggaW4gaW5wdXRcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5faW5wdXQpIHtcbiAgICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0b2tlbiwgbWF0Y2gsIHRlbXBNYXRjaCwgaW5kZXg7XG4gICAgICAgIGlmICghdGhpcy5fbW9yZSkge1xuICAgICAgICAgIHRoaXMueXl0ZXh0ID0gXCJcIjtcbiAgICAgICAgICB0aGlzLm1hdGNoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcnVsZXMgPSB0aGlzLl9jdXJyZW50UnVsZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRlbXBNYXRjaCA9IHRoaXMuX2lucHV0Lm1hdGNoKHRoaXMucnVsZXNbcnVsZXNbaV1dKTtcbiAgICAgICAgICBpZiAodGVtcE1hdGNoICYmICghbWF0Y2ggfHwgdGVtcE1hdGNoWzBdLmxlbmd0aCA+IG1hdGNoWzBdLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIG1hdGNoID0gdGVtcE1hdGNoO1xuICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnRlc3RfbWF0Y2godGVtcE1hdGNoLCBydWxlc1tpXSk7XG4gICAgICAgICAgICAgIGlmICh0b2tlbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYmFja3RyYWNrKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5mbGV4KSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICB0b2tlbiA9IHRoaXMudGVzdF9tYXRjaChtYXRjaCwgcnVsZXNbaW5kZXhdKTtcbiAgICAgICAgICBpZiAodG9rZW4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faW5wdXQgPT09IFwiXCIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBcIi4gVW5yZWNvZ25pemVkIHRleHQuXFxuXCIgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7XG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICBsaW5lOiB0aGlzLnl5bGluZW5vXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyByZXR1cm4gbmV4dCBtYXRjaCB0aGF0IGhhcyBhIHRva2VuXG4gICAgICBsZXg6IGZ1bmN0aW9uIGxleCgpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLm5leHQoKTtcbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5sZXgoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIGFjdGl2YXRlcyBhIG5ldyBsZXhlciBjb25kaXRpb24gc3RhdGUgKHB1c2hlcyB0aGUgbmV3IGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvbnRvIHRoZSBjb25kaXRpb24gc3RhY2spXG4gICAgICBiZWdpbjogZnVuY3Rpb24gYmVnaW4oY29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sucHVzaChjb25kaXRpb24pO1xuICAgICAgfSxcbiAgICAgIC8vIHBvcCB0aGUgcHJldmlvdXNseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIG9mZiB0aGUgY29uZGl0aW9uIHN0YWNrXG4gICAgICBwb3BTdGF0ZTogZnVuY3Rpb24gcG9wU3RhdGUoKSB7XG4gICAgICAgIHZhciBuID0gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxO1xuICAgICAgICBpZiAobiA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5wb3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFja1swXTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHByb2R1Y2UgdGhlIGxleGVyIHJ1bGUgc2V0IHdoaWNoIGlzIGFjdGl2ZSBmb3IgdGhlIGN1cnJlbnRseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlXG4gICAgICBfY3VycmVudFJ1bGVzOiBmdW5jdGlvbiBfY3VycmVudFJ1bGVzKCkge1xuICAgICAgICBpZiAodGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggJiYgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uc1t0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV1dLnJ1bGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbnNbXCJJTklUSUFMXCJdLnJ1bGVzO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIHRoZSBjdXJyZW50bHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZTsgd2hlbiBhbiBpbmRleCBhcmd1bWVudCBpcyBwcm92aWRlZCBpdCBwcm9kdWNlcyB0aGUgTi10aCBwcmV2aW91cyBjb25kaXRpb24gc3RhdGUsIGlmIGF2YWlsYWJsZVxuICAgICAgdG9wU3RhdGU6IGZ1bmN0aW9uIHRvcFN0YXRlKG4pIHtcbiAgICAgICAgbiA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMSAtIE1hdGguYWJzKG4gfHwgMCk7XG4gICAgICAgIGlmIChuID49IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFja1tuXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCJJTklUSUFMXCI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBhbGlhcyBmb3IgYmVnaW4oY29uZGl0aW9uKVxuICAgICAgcHVzaFN0YXRlOiBmdW5jdGlvbiBwdXNoU3RhdGUoY29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuYmVnaW4oY29uZGl0aW9uKTtcbiAgICAgIH0sXG4gICAgICAvLyByZXR1cm4gdGhlIG51bWJlciBvZiBzdGF0ZXMgY3VycmVudGx5IG9uIHRoZSBzdGFja1xuICAgICAgc3RhdGVTdGFja1NpemU6IGZ1bmN0aW9uIHN0YXRlU3RhY2tTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGg7XG4gICAgICB9LFxuICAgICAgb3B0aW9uczogeyBcImNhc2UtaW5zZW5zaXRpdmVcIjogdHJ1ZSB9LFxuICAgICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24gYW5vbnltb3VzKHl5LCB5eV8sICRhdm9pZGluZ19uYW1lX2NvbGxpc2lvbnMsIFlZX1NUQVJUKSB7XG4gICAgICAgIHN3aXRjaCAoJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucykge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiAxMDtcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICByZXR1cm4gNDtcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICByZXR1cm4gMTE7XG4gICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImFjY190aXRsZVwiKTtcbiAgICAgICAgICAgIHJldHVybiAxMjtcbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfdGl0bGVfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiYWNjX2Rlc2NyXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDE0O1xuICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfZGVzY3JfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImFjY19kZXNjcl9tdWx0aWxpbmVcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIHJldHVybiBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgcmV0dXJuIDE3O1xuICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICByZXR1cm4gMjE7XG4gICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgIHJldHVybiAyMDtcbiAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgcmV0dXJuIDY7XG4gICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgIHJldHVybiBcIklOVkFMSURcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJ1bGVzOiBbL14oPzolKD8hXFx7KVteXFxuXSopL2ksIC9eKD86W15cXH1dJSVbXlxcbl0qKS9pLCAvXig/OltcXG5dKykvaSwgL14oPzpcXHMrKS9pLCAvXig/OiNbXlxcbl0qKS9pLCAvXig/OnRpbWVsaW5lXFxiKS9pLCAvXig/OnRpdGxlXFxzW14jXFxuO10rKS9pLCAvXig/OmFjY1RpdGxlXFxzKjpcXHMqKS9pLCAvXig/Oig/IVxcbnx8KSpbXlxcbl0qKS9pLCAvXig/OmFjY0Rlc2NyXFxzKjpcXHMqKS9pLCAvXig/Oig/IVxcbnx8KSpbXlxcbl0qKS9pLCAvXig/OmFjY0Rlc2NyXFxzKlxce1xccyopL2ksIC9eKD86W1xcfV0pL2ksIC9eKD86W15cXH1dKikvaSwgL14oPzpzZWN0aW9uXFxzW14jOlxcbjtdKykvaSwgL14oPzo6XFxzW14jOlxcbjtdKykvaSwgL14oPzpbXiM6XFxuO10rKS9pLCAvXig/OiQpL2ksIC9eKD86LikvaV0sXG4gICAgICBjb25kaXRpb25zOiB7IFwiYWNjX2Rlc2NyX211bHRpbGluZVwiOiB7IFwicnVsZXNcIjogWzEyLCAxM10sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiYWNjX2Rlc2NyXCI6IHsgXCJydWxlc1wiOiBbMTBdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImFjY190aXRsZVwiOiB7IFwicnVsZXNcIjogWzhdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIklOSVRJQUxcIjogeyBcInJ1bGVzXCI6IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA5LCAxMSwgMTQsIDE1LCAxNiwgMTcsIDE4XSwgXCJpbmNsdXNpdmVcIjogdHJ1ZSB9IH1cbiAgICB9O1xuICAgIHJldHVybiBsZXhlcjI7XG4gIH0oKTtcbiAgcGFyc2VyMi5sZXhlciA9IGxleGVyO1xuICBmdW5jdGlvbiBQYXJzZXIoKSB7XG4gICAgdGhpcy55eSA9IHt9O1xuICB9XG4gIFBhcnNlci5wcm90b3R5cGUgPSBwYXJzZXIyO1xuICBwYXJzZXIyLlBhcnNlciA9IFBhcnNlcjtcbiAgcmV0dXJuIG5ldyBQYXJzZXIoKTtcbn0oKTtcbnBhcnNlci5wYXJzZXIgPSBwYXJzZXI7XG5jb25zdCBwYXJzZXIkMSA9IHBhcnNlcjtcbmxldCBjdXJyZW50U2VjdGlvbiA9IFwiXCI7XG5sZXQgY3VycmVudFRhc2tJZCA9IDA7XG5jb25zdCBzZWN0aW9ucyA9IFtdO1xuY29uc3QgdGFza3MgPSBbXTtcbmNvbnN0IHJhd1Rhc2tzID0gW107XG5jb25zdCBnZXRDb21tb25EYiA9ICgpID0+IGNvbW1vbkRiO1xuY29uc3QgY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgc2VjdGlvbnMubGVuZ3RoID0gMDtcbiAgdGFza3MubGVuZ3RoID0gMDtcbiAgY3VycmVudFNlY3Rpb24gPSBcIlwiO1xuICByYXdUYXNrcy5sZW5ndGggPSAwO1xuICBjbGVhciQxKCk7XG59O1xuY29uc3QgYWRkU2VjdGlvbiA9IGZ1bmN0aW9uKHR4dCkge1xuICBjdXJyZW50U2VjdGlvbiA9IHR4dDtcbiAgc2VjdGlvbnMucHVzaCh0eHQpO1xufTtcbmNvbnN0IGdldFNlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBzZWN0aW9ucztcbn07XG5jb25zdCBnZXRUYXNrcyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgYWxsSXRlbXNQcm9jZXNzZWQgPSBjb21waWxlVGFza3MoKTtcbiAgY29uc3QgbWF4RGVwdGggPSAxMDA7XG4gIGxldCBpdGVyYXRpb25Db3VudCA9IDA7XG4gIHdoaWxlICghYWxsSXRlbXNQcm9jZXNzZWQgJiYgaXRlcmF0aW9uQ291bnQgPCBtYXhEZXB0aCkge1xuICAgIGFsbEl0ZW1zUHJvY2Vzc2VkID0gY29tcGlsZVRhc2tzKCk7XG4gICAgaXRlcmF0aW9uQ291bnQrKztcbiAgfVxuICB0YXNrcy5wdXNoKC4uLnJhd1Rhc2tzKTtcbiAgcmV0dXJuIHRhc2tzO1xufTtcbmNvbnN0IGFkZFRhc2sgPSBmdW5jdGlvbihwZXJpb2QsIGxlbmd0aCwgZXZlbnQpIHtcbiAgY29uc3QgcmF3VGFzayA9IHtcbiAgICBpZDogY3VycmVudFRhc2tJZCsrLFxuICAgIHNlY3Rpb246IGN1cnJlbnRTZWN0aW9uLFxuICAgIHR5cGU6IGN1cnJlbnRTZWN0aW9uLFxuICAgIHRhc2s6IHBlcmlvZCxcbiAgICBzY29yZTogbGVuZ3RoID8gbGVuZ3RoIDogMCxcbiAgICAvL2lmIGV2ZW50IGlzIGRlZmluZWQsIHRoZW4gYWRkIGl0IHRoZSBldmVudHMgYXJyYXlcbiAgICBldmVudHM6IGV2ZW50ID8gW2V2ZW50XSA6IFtdXG4gIH07XG4gIHJhd1Rhc2tzLnB1c2gocmF3VGFzayk7XG59O1xuY29uc3QgYWRkRXZlbnQgPSBmdW5jdGlvbihldmVudCkge1xuICBjb25zdCBjdXJyZW50VGFzayA9IHJhd1Rhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGN1cnJlbnRUYXNrSWQgLSAxKTtcbiAgY3VycmVudFRhc2suZXZlbnRzLnB1c2goZXZlbnQpO1xufTtcbmNvbnN0IGFkZFRhc2tPcmcgPSBmdW5jdGlvbihkZXNjcikge1xuICBjb25zdCBuZXdUYXNrID0ge1xuICAgIHNlY3Rpb246IGN1cnJlbnRTZWN0aW9uLFxuICAgIHR5cGU6IGN1cnJlbnRTZWN0aW9uLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcixcbiAgICB0YXNrOiBkZXNjcixcbiAgICBjbGFzc2VzOiBbXVxuICB9O1xuICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xufTtcbmNvbnN0IGNvbXBpbGVUYXNrcyA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBjb21waWxlVGFzayA9IGZ1bmN0aW9uKHBvcykge1xuICAgIHJldHVybiByYXdUYXNrc1twb3NdLnByb2Nlc3NlZDtcbiAgfTtcbiAgbGV0IGFsbFByb2Nlc3NlZCA9IHRydWU7XG4gIGZvciAoY29uc3QgW2ksIHJhd1Rhc2tdIG9mIHJhd1Rhc2tzLmVudHJpZXMoKSkge1xuICAgIGNvbXBpbGVUYXNrKGkpO1xuICAgIGFsbFByb2Nlc3NlZCA9IGFsbFByb2Nlc3NlZCAmJiByYXdUYXNrLnByb2Nlc3NlZDtcbiAgfVxuICByZXR1cm4gYWxsUHJvY2Vzc2VkO1xufTtcbmNvbnN0IHRpbWVsaW5lRGIgPSB7XG4gIGNsZWFyLFxuICBnZXRDb21tb25EYixcbiAgYWRkU2VjdGlvbixcbiAgZ2V0U2VjdGlvbnMsXG4gIGdldFRhc2tzLFxuICBhZGRUYXNrLFxuICBhZGRUYXNrT3JnLFxuICBhZGRFdmVudFxufTtcbmNvbnN0IGRiID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgYWRkRXZlbnQsXG4gIGFkZFNlY3Rpb24sXG4gIGFkZFRhc2ssXG4gIGFkZFRhc2tPcmcsXG4gIGNsZWFyLFxuICBkZWZhdWx0OiB0aW1lbGluZURiLFxuICBnZXRDb21tb25EYixcbiAgZ2V0U2VjdGlvbnMsXG4gIGdldFRhc2tzXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xuY29uc3QgTUFYX1NFQ1RJT05TID0gMTI7XG5jb25zdCBkcmF3UmVjdCA9IGZ1bmN0aW9uKGVsZW0sIHJlY3REYXRhKSB7XG4gIGNvbnN0IHJlY3RFbGVtID0gZWxlbS5hcHBlbmQoXCJyZWN0XCIpO1xuICByZWN0RWxlbS5hdHRyKFwieFwiLCByZWN0RGF0YS54KTtcbiAgcmVjdEVsZW0uYXR0cihcInlcIiwgcmVjdERhdGEueSk7XG4gIHJlY3RFbGVtLmF0dHIoXCJmaWxsXCIsIHJlY3REYXRhLmZpbGwpO1xuICByZWN0RWxlbS5hdHRyKFwic3Ryb2tlXCIsIHJlY3REYXRhLnN0cm9rZSk7XG4gIHJlY3RFbGVtLmF0dHIoXCJ3aWR0aFwiLCByZWN0RGF0YS53aWR0aCk7XG4gIHJlY3RFbGVtLmF0dHIoXCJoZWlnaHRcIiwgcmVjdERhdGEuaGVpZ2h0KTtcbiAgcmVjdEVsZW0uYXR0cihcInJ4XCIsIHJlY3REYXRhLnJ4KTtcbiAgcmVjdEVsZW0uYXR0cihcInJ5XCIsIHJlY3REYXRhLnJ5KTtcbiAgaWYgKHJlY3REYXRhLmNsYXNzICE9PSB2b2lkIDApIHtcbiAgICByZWN0RWxlbS5hdHRyKFwiY2xhc3NcIiwgcmVjdERhdGEuY2xhc3MpO1xuICB9XG4gIHJldHVybiByZWN0RWxlbTtcbn07XG5jb25zdCBkcmF3RmFjZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIGZhY2VEYXRhKSB7XG4gIGNvbnN0IHJhZGl1cyA9IDE1O1xuICBjb25zdCBjaXJjbGVFbGVtZW50ID0gZWxlbWVudC5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIGZhY2VEYXRhLmN4KS5hdHRyKFwiY3lcIiwgZmFjZURhdGEuY3kpLmF0dHIoXCJjbGFzc1wiLCBcImZhY2VcIikuYXR0cihcInJcIiwgcmFkaXVzKS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpLmF0dHIoXCJvdmVyZmxvd1wiLCBcInZpc2libGVcIik7XG4gIGNvbnN0IGZhY2UgPSBlbGVtZW50LmFwcGVuZChcImdcIik7XG4gIGZhY2UuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJjeFwiLCBmYWNlRGF0YS5jeCAtIHJhZGl1cyAvIDMpLmF0dHIoXCJjeVwiLCBmYWNlRGF0YS5jeSAtIHJhZGl1cyAvIDMpLmF0dHIoXCJyXCIsIDEuNSkuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyKS5hdHRyKFwiZmlsbFwiLCBcIiM2NjZcIikuYXR0cihcInN0cm9rZVwiLCBcIiM2NjZcIik7XG4gIGZhY2UuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJjeFwiLCBmYWNlRGF0YS5jeCArIHJhZGl1cyAvIDMpLmF0dHIoXCJjeVwiLCBmYWNlRGF0YS5jeSAtIHJhZGl1cyAvIDMpLmF0dHIoXCJyXCIsIDEuNSkuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyKS5hdHRyKFwiZmlsbFwiLCBcIiM2NjZcIikuYXR0cihcInN0cm9rZVwiLCBcIiM2NjZcIik7XG4gIGZ1bmN0aW9uIHNtaWxlKGZhY2UyKSB7XG4gICAgY29uc3QgYXJjJDEgPSBhcmMoKS5zdGFydEFuZ2xlKE1hdGguUEkgLyAyKS5lbmRBbmdsZSgzICogKE1hdGguUEkgLyAyKSkuaW5uZXJSYWRpdXMocmFkaXVzIC8gMikub3V0ZXJSYWRpdXMocmFkaXVzIC8gMi4yKTtcbiAgICBmYWNlMi5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1vdXRoXCIpLmF0dHIoXCJkXCIsIGFyYyQxKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgZmFjZURhdGEuY3ggKyBcIixcIiArIChmYWNlRGF0YS5jeSArIDIpICsgXCIpXCIpO1xuICB9XG4gIGZ1bmN0aW9uIHNhZChmYWNlMikge1xuICAgIGNvbnN0IGFyYyQxID0gYXJjKCkuc3RhcnRBbmdsZSgzICogTWF0aC5QSSAvIDIpLmVuZEFuZ2xlKDUgKiAoTWF0aC5QSSAvIDIpKS5pbm5lclJhZGl1cyhyYWRpdXMgLyAyKS5vdXRlclJhZGl1cyhyYWRpdXMgLyAyLjIpO1xuICAgIGZhY2UyLmFwcGVuZChcInBhdGhcIikuYXR0cihcImNsYXNzXCIsIFwibW91dGhcIikuYXR0cihcImRcIiwgYXJjJDEpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBmYWNlRGF0YS5jeCArIFwiLFwiICsgKGZhY2VEYXRhLmN5ICsgNykgKyBcIilcIik7XG4gIH1cbiAgZnVuY3Rpb24gYW1iaXZhbGVudChmYWNlMikge1xuICAgIGZhY2UyLmFwcGVuZChcImxpbmVcIikuYXR0cihcImNsYXNzXCIsIFwibW91dGhcIikuYXR0cihcInN0cm9rZVwiLCAyKS5hdHRyKFwieDFcIiwgZmFjZURhdGEuY3ggLSA1KS5hdHRyKFwieTFcIiwgZmFjZURhdGEuY3kgKyA3KS5hdHRyKFwieDJcIiwgZmFjZURhdGEuY3ggKyA1KS5hdHRyKFwieTJcIiwgZmFjZURhdGEuY3kgKyA3KS5hdHRyKFwiY2xhc3NcIiwgXCJtb3V0aFwiKS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMXB4XCIpLmF0dHIoXCJzdHJva2VcIiwgXCIjNjY2XCIpO1xuICB9XG4gIGlmIChmYWNlRGF0YS5zY29yZSA+IDMpIHtcbiAgICBzbWlsZShmYWNlKTtcbiAgfSBlbHNlIGlmIChmYWNlRGF0YS5zY29yZSA8IDMpIHtcbiAgICBzYWQoZmFjZSk7XG4gIH0gZWxzZSB7XG4gICAgYW1iaXZhbGVudChmYWNlKTtcbiAgfVxuICByZXR1cm4gY2lyY2xlRWxlbWVudDtcbn07XG5jb25zdCBkcmF3Q2lyY2xlID0gZnVuY3Rpb24oZWxlbWVudCwgY2lyY2xlRGF0YSkge1xuICBjb25zdCBjaXJjbGVFbGVtZW50ID0gZWxlbWVudC5hcHBlbmQoXCJjaXJjbGVcIik7XG4gIGNpcmNsZUVsZW1lbnQuYXR0cihcImN4XCIsIGNpcmNsZURhdGEuY3gpO1xuICBjaXJjbGVFbGVtZW50LmF0dHIoXCJjeVwiLCBjaXJjbGVEYXRhLmN5KTtcbiAgY2lyY2xlRWxlbWVudC5hdHRyKFwiY2xhc3NcIiwgXCJhY3Rvci1cIiArIGNpcmNsZURhdGEucG9zKTtcbiAgY2lyY2xlRWxlbWVudC5hdHRyKFwiZmlsbFwiLCBjaXJjbGVEYXRhLmZpbGwpO1xuICBjaXJjbGVFbGVtZW50LmF0dHIoXCJzdHJva2VcIiwgY2lyY2xlRGF0YS5zdHJva2UpO1xuICBjaXJjbGVFbGVtZW50LmF0dHIoXCJyXCIsIGNpcmNsZURhdGEucik7XG4gIGlmIChjaXJjbGVFbGVtZW50LmNsYXNzICE9PSB2b2lkIDApIHtcbiAgICBjaXJjbGVFbGVtZW50LmF0dHIoXCJjbGFzc1wiLCBjaXJjbGVFbGVtZW50LmNsYXNzKTtcbiAgfVxuICBpZiAoY2lyY2xlRGF0YS50aXRsZSAhPT0gdm9pZCAwKSB7XG4gICAgY2lyY2xlRWxlbWVudC5hcHBlbmQoXCJ0aXRsZVwiKS50ZXh0KGNpcmNsZURhdGEudGl0bGUpO1xuICB9XG4gIHJldHVybiBjaXJjbGVFbGVtZW50O1xufTtcbmNvbnN0IGRyYXdUZXh0ID0gZnVuY3Rpb24oZWxlbSwgdGV4dERhdGEpIHtcbiAgY29uc3QgblRleHQgPSB0ZXh0RGF0YS50ZXh0LnJlcGxhY2UoLzxiclxccypcXC8/Pi9naSwgXCIgXCIpO1xuICBjb25zdCB0ZXh0RWxlbSA9IGVsZW0uYXBwZW5kKFwidGV4dFwiKTtcbiAgdGV4dEVsZW0uYXR0cihcInhcIiwgdGV4dERhdGEueCk7XG4gIHRleHRFbGVtLmF0dHIoXCJ5XCIsIHRleHREYXRhLnkpO1xuICB0ZXh0RWxlbS5hdHRyKFwiY2xhc3NcIiwgXCJsZWdlbmRcIik7XG4gIHRleHRFbGVtLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgdGV4dERhdGEuYW5jaG9yKTtcbiAgaWYgKHRleHREYXRhLmNsYXNzICE9PSB2b2lkIDApIHtcbiAgICB0ZXh0RWxlbS5hdHRyKFwiY2xhc3NcIiwgdGV4dERhdGEuY2xhc3MpO1xuICB9XG4gIGNvbnN0IHNwYW4gPSB0ZXh0RWxlbS5hcHBlbmQoXCJ0c3BhblwiKTtcbiAgc3Bhbi5hdHRyKFwieFwiLCB0ZXh0RGF0YS54ICsgdGV4dERhdGEudGV4dE1hcmdpbiAqIDIpO1xuICBzcGFuLnRleHQoblRleHQpO1xuICByZXR1cm4gdGV4dEVsZW07XG59O1xuY29uc3QgZHJhd0xhYmVsID0gZnVuY3Rpb24oZWxlbSwgdHh0T2JqZWN0KSB7XG4gIGZ1bmN0aW9uIGdlblBvaW50cyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjdXQpIHtcbiAgICByZXR1cm4geCArIFwiLFwiICsgeSArIFwiIFwiICsgKHggKyB3aWR0aCkgKyBcIixcIiArIHkgKyBcIiBcIiArICh4ICsgd2lkdGgpICsgXCIsXCIgKyAoeSArIGhlaWdodCAtIGN1dCkgKyBcIiBcIiArICh4ICsgd2lkdGggLSBjdXQgKiAxLjIpICsgXCIsXCIgKyAoeSArIGhlaWdodCkgKyBcIiBcIiArIHggKyBcIixcIiArICh5ICsgaGVpZ2h0KTtcbiAgfVxuICBjb25zdCBwb2x5Z29uID0gZWxlbS5hcHBlbmQoXCJwb2x5Z29uXCIpO1xuICBwb2x5Z29uLmF0dHIoXCJwb2ludHNcIiwgZ2VuUG9pbnRzKHR4dE9iamVjdC54LCB0eHRPYmplY3QueSwgNTAsIDIwLCA3KSk7XG4gIHBvbHlnb24uYXR0cihcImNsYXNzXCIsIFwibGFiZWxCb3hcIik7XG4gIHR4dE9iamVjdC55ID0gdHh0T2JqZWN0LnkgKyB0eHRPYmplY3QubGFiZWxNYXJnaW47XG4gIHR4dE9iamVjdC54ID0gdHh0T2JqZWN0LnggKyAwLjUgKiB0eHRPYmplY3QubGFiZWxNYXJnaW47XG4gIGRyYXdUZXh0KGVsZW0sIHR4dE9iamVjdCk7XG59O1xuY29uc3QgZHJhd1NlY3Rpb24gPSBmdW5jdGlvbihlbGVtLCBzZWN0aW9uLCBjb25mKSB7XG4gIGNvbnN0IGcgPSBlbGVtLmFwcGVuZChcImdcIik7XG4gIGNvbnN0IHJlY3QgPSBnZXROb3RlUmVjdCgpO1xuICByZWN0LnggPSBzZWN0aW9uLng7XG4gIHJlY3QueSA9IHNlY3Rpb24ueTtcbiAgcmVjdC5maWxsID0gc2VjdGlvbi5maWxsO1xuICByZWN0LndpZHRoID0gY29uZi53aWR0aDtcbiAgcmVjdC5oZWlnaHQgPSBjb25mLmhlaWdodDtcbiAgcmVjdC5jbGFzcyA9IFwiam91cm5leS1zZWN0aW9uIHNlY3Rpb24tdHlwZS1cIiArIHNlY3Rpb24ubnVtO1xuICByZWN0LnJ4ID0gMztcbiAgcmVjdC5yeSA9IDM7XG4gIGRyYXdSZWN0KGcsIHJlY3QpO1xuICBfZHJhd1RleHRDYW5kaWRhdGVGdW5jKGNvbmYpKFxuICAgIHNlY3Rpb24udGV4dCxcbiAgICBnLFxuICAgIHJlY3QueCxcbiAgICByZWN0LnksXG4gICAgcmVjdC53aWR0aCxcbiAgICByZWN0LmhlaWdodCxcbiAgICB7IGNsYXNzOiBcImpvdXJuZXktc2VjdGlvbiBzZWN0aW9uLXR5cGUtXCIgKyBzZWN0aW9uLm51bSB9LFxuICAgIGNvbmYsXG4gICAgc2VjdGlvbi5jb2xvdXJcbiAgKTtcbn07XG5sZXQgdGFza0NvdW50ID0gLTE7XG5jb25zdCBkcmF3VGFzayA9IGZ1bmN0aW9uKGVsZW0sIHRhc2ssIGNvbmYpIHtcbiAgY29uc3QgY2VudGVyID0gdGFzay54ICsgY29uZi53aWR0aCAvIDI7XG4gIGNvbnN0IGcgPSBlbGVtLmFwcGVuZChcImdcIik7XG4gIHRhc2tDb3VudCsrO1xuICBjb25zdCBtYXhIZWlnaHQgPSAzMDAgKyA1ICogMzA7XG4gIGcuYXBwZW5kKFwibGluZVwiKS5hdHRyKFwiaWRcIiwgXCJ0YXNrXCIgKyB0YXNrQ291bnQpLmF0dHIoXCJ4MVwiLCBjZW50ZXIpLmF0dHIoXCJ5MVwiLCB0YXNrLnkpLmF0dHIoXCJ4MlwiLCBjZW50ZXIpLmF0dHIoXCJ5MlwiLCBtYXhIZWlnaHQpLmF0dHIoXCJjbGFzc1wiLCBcInRhc2stbGluZVwiKS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMXB4XCIpLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiNCAyXCIpLmF0dHIoXCJzdHJva2VcIiwgXCIjNjY2XCIpO1xuICBkcmF3RmFjZShnLCB7XG4gICAgY3g6IGNlbnRlcixcbiAgICBjeTogMzAwICsgKDUgLSB0YXNrLnNjb3JlKSAqIDMwLFxuICAgIHNjb3JlOiB0YXNrLnNjb3JlXG4gIH0pO1xuICBjb25zdCByZWN0ID0gZ2V0Tm90ZVJlY3QoKTtcbiAgcmVjdC54ID0gdGFzay54O1xuICByZWN0LnkgPSB0YXNrLnk7XG4gIHJlY3QuZmlsbCA9IHRhc2suZmlsbDtcbiAgcmVjdC53aWR0aCA9IGNvbmYud2lkdGg7XG4gIHJlY3QuaGVpZ2h0ID0gY29uZi5oZWlnaHQ7XG4gIHJlY3QuY2xhc3MgPSBcInRhc2sgdGFzay10eXBlLVwiICsgdGFzay5udW07XG4gIHJlY3QucnggPSAzO1xuICByZWN0LnJ5ID0gMztcbiAgZHJhd1JlY3QoZywgcmVjdCk7XG4gIHRhc2sueCArIDE0O1xuICBfZHJhd1RleHRDYW5kaWRhdGVGdW5jKGNvbmYpKFxuICAgIHRhc2sudGFzayxcbiAgICBnLFxuICAgIHJlY3QueCxcbiAgICByZWN0LnksXG4gICAgcmVjdC53aWR0aCxcbiAgICByZWN0LmhlaWdodCxcbiAgICB7IGNsYXNzOiBcInRhc2tcIiB9LFxuICAgIGNvbmYsXG4gICAgdGFzay5jb2xvdXJcbiAgKTtcbn07XG5jb25zdCBkcmF3QmFja2dyb3VuZFJlY3QgPSBmdW5jdGlvbihlbGVtLCBib3VuZHMpIHtcbiAgY29uc3QgcmVjdEVsZW0gPSBkcmF3UmVjdChlbGVtLCB7XG4gICAgeDogYm91bmRzLnN0YXJ0eCxcbiAgICB5OiBib3VuZHMuc3RhcnR5LFxuICAgIHdpZHRoOiBib3VuZHMuc3RvcHggLSBib3VuZHMuc3RhcnR4LFxuICAgIGhlaWdodDogYm91bmRzLnN0b3B5IC0gYm91bmRzLnN0YXJ0eSxcbiAgICBmaWxsOiBib3VuZHMuZmlsbCxcbiAgICBjbGFzczogXCJyZWN0XCJcbiAgfSk7XG4gIHJlY3RFbGVtLmxvd2VyKCk7XG59O1xuY29uc3QgZ2V0VGV4dE9iaiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBmaWxsOiB2b2lkIDAsXG4gICAgXCJ0ZXh0LWFuY2hvclwiOiBcInN0YXJ0XCIsXG4gICAgd2lkdGg6IDEwMCxcbiAgICBoZWlnaHQ6IDEwMCxcbiAgICB0ZXh0TWFyZ2luOiAwLFxuICAgIHJ4OiAwLFxuICAgIHJ5OiAwXG4gIH07XG59O1xuY29uc3QgZ2V0Tm90ZVJlY3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgd2lkdGg6IDEwMCxcbiAgICBhbmNob3I6IFwic3RhcnRcIixcbiAgICBoZWlnaHQ6IDEwMCxcbiAgICByeDogMCxcbiAgICByeTogMFxuICB9O1xufTtcbmNvbnN0IF9kcmF3VGV4dENhbmRpZGF0ZUZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gYnlUZXh0KGNvbnRlbnQsIGcsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHRleHRBdHRycywgY29sb3VyKSB7XG4gICAgY29uc3QgdGV4dCA9IGcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCB4ICsgd2lkdGggLyAyKS5hdHRyKFwieVwiLCB5ICsgaGVpZ2h0IC8gMiArIDUpLnN0eWxlKFwiZm9udC1jb2xvclwiLCBjb2xvdXIpLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIikudGV4dChjb250ZW50KTtcbiAgICBfc2V0VGV4dEF0dHJzKHRleHQsIHRleHRBdHRycyk7XG4gIH1cbiAgZnVuY3Rpb24gYnlUc3Bhbihjb250ZW50LCBnLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0ZXh0QXR0cnMsIGNvbmYsIGNvbG91cikge1xuICAgIGNvbnN0IHsgdGFza0ZvbnRTaXplLCB0YXNrRm9udEZhbWlseSB9ID0gY29uZjtcbiAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoLzxiclxccypcXC8/Pi9naSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZHkgPSBpICogdGFza0ZvbnRTaXplIC0gdGFza0ZvbnRTaXplICogKGxpbmVzLmxlbmd0aCAtIDEpIC8gMjtcbiAgICAgIGNvbnN0IHRleHQgPSBnLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgeCArIHdpZHRoIC8gMikuYXR0cihcInlcIiwgeSkuYXR0cihcImZpbGxcIiwgY29sb3VyKS5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpLnN0eWxlKFwiZm9udC1zaXplXCIsIHRhc2tGb250U2l6ZSkuc3R5bGUoXCJmb250LWZhbWlseVwiLCB0YXNrRm9udEZhbWlseSk7XG4gICAgICB0ZXh0LmFwcGVuZChcInRzcGFuXCIpLmF0dHIoXCJ4XCIsIHggKyB3aWR0aCAvIDIpLmF0dHIoXCJkeVwiLCBkeSkudGV4dChsaW5lc1tpXSk7XG4gICAgICB0ZXh0LmF0dHIoXCJ5XCIsIHkgKyBoZWlnaHQgLyAyKS5hdHRyKFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJjZW50cmFsXCIpLmF0dHIoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJjZW50cmFsXCIpO1xuICAgICAgX3NldFRleHRBdHRycyh0ZXh0LCB0ZXh0QXR0cnMpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBieUZvKGNvbnRlbnQsIGcsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHRleHRBdHRycywgY29uZikge1xuICAgIGNvbnN0IGJvZHkgPSBnLmFwcGVuZChcInN3aXRjaFwiKTtcbiAgICBjb25zdCBmID0gYm9keS5hcHBlbmQoXCJmb3JlaWduT2JqZWN0XCIpLmF0dHIoXCJ4XCIsIHgpLmF0dHIoXCJ5XCIsIHkpLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCkuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpLmF0dHIoXCJwb3NpdGlvblwiLCBcImZpeGVkXCIpO1xuICAgIGNvbnN0IHRleHQgPSBmLmFwcGVuZChcInhodG1sOmRpdlwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJ0YWJsZVwiKS5zdHlsZShcImhlaWdodFwiLCBcIjEwMCVcIikuc3R5bGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XG4gICAgdGV4dC5hcHBlbmQoXCJkaXZcIikuYXR0cihcImNsYXNzXCIsIFwibGFiZWxcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwidGFibGUtY2VsbFwiKS5zdHlsZShcInRleHQtYWxpZ25cIiwgXCJjZW50ZXJcIikuc3R5bGUoXCJ2ZXJ0aWNhbC1hbGlnblwiLCBcIm1pZGRsZVwiKS50ZXh0KGNvbnRlbnQpO1xuICAgIGJ5VHNwYW4oY29udGVudCwgYm9keSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgdGV4dEF0dHJzLCBjb25mKTtcbiAgICBfc2V0VGV4dEF0dHJzKHRleHQsIHRleHRBdHRycyk7XG4gIH1cbiAgZnVuY3Rpb24gX3NldFRleHRBdHRycyh0b1RleHQsIGZyb21UZXh0QXR0cnNEaWN0KSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZnJvbVRleHRBdHRyc0RpY3QpIHtcbiAgICAgIGlmIChrZXkgaW4gZnJvbVRleHRBdHRyc0RpY3QpIHtcbiAgICAgICAgdG9UZXh0LmF0dHIoa2V5LCBmcm9tVGV4dEF0dHJzRGljdFtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbmYpIHtcbiAgICByZXR1cm4gY29uZi50ZXh0UGxhY2VtZW50ID09PSBcImZvXCIgPyBieUZvIDogY29uZi50ZXh0UGxhY2VtZW50ID09PSBcIm9sZFwiID8gYnlUZXh0IDogYnlUc3BhbjtcbiAgfTtcbn0oKTtcbmNvbnN0IGluaXRHcmFwaGljcyA9IGZ1bmN0aW9uKGdyYXBoaWNzKSB7XG4gIGdyYXBoaWNzLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBcImFycm93aGVhZFwiKS5hdHRyKFwicmVmWFwiLCA1KS5hdHRyKFwicmVmWVwiLCAyKS5hdHRyKFwibWFya2VyV2lkdGhcIiwgNikuYXR0cihcIm1hcmtlckhlaWdodFwiLCA0KS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSAwLDAgViA0IEw2LDIgWlwiKTtcbn07XG5mdW5jdGlvbiB3cmFwKHRleHQsIHdpZHRoKSB7XG4gIHRleHQuZWFjaChmdW5jdGlvbigpIHtcbiAgICB2YXIgdGV4dDIgPSBzZWxlY3QodGhpcyksIHdvcmRzID0gdGV4dDIudGV4dCgpLnNwbGl0KC8oXFxzK3w8YnI+KS8pLnJldmVyc2UoKSwgd29yZCwgbGluZSA9IFtdLCBsaW5lSGVpZ2h0ID0gMS4xLCB5ID0gdGV4dDIuYXR0cihcInlcIiksIGR5ID0gcGFyc2VGbG9hdCh0ZXh0Mi5hdHRyKFwiZHlcIikpLCB0c3BhbiA9IHRleHQyLnRleHQobnVsbCkuYXBwZW5kKFwidHNwYW5cIikuYXR0cihcInhcIiwgMCkuYXR0cihcInlcIiwgeSkuYXR0cihcImR5XCIsIGR5ICsgXCJlbVwiKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdvcmRzLmxlbmd0aDsgaisrKSB7XG4gICAgICB3b3JkID0gd29yZHNbd29yZHMubGVuZ3RoIC0gMSAtIGpdO1xuICAgICAgbGluZS5wdXNoKHdvcmQpO1xuICAgICAgdHNwYW4udGV4dChsaW5lLmpvaW4oXCIgXCIpLnRyaW0oKSk7XG4gICAgICBpZiAodHNwYW4ubm9kZSgpLmdldENvbXB1dGVkVGV4dExlbmd0aCgpID4gd2lkdGggfHwgd29yZCA9PT0gXCI8YnI+XCIpIHtcbiAgICAgICAgbGluZS5wb3AoKTtcbiAgICAgICAgdHNwYW4udGV4dChsaW5lLmpvaW4oXCIgXCIpLnRyaW0oKSk7XG4gICAgICAgIGlmICh3b3JkID09PSBcIjxicj5cIikge1xuICAgICAgICAgIGxpbmUgPSBbXCJcIl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGluZSA9IFt3b3JkXTtcbiAgICAgICAgfVxuICAgICAgICB0c3BhbiA9IHRleHQyLmFwcGVuZChcInRzcGFuXCIpLmF0dHIoXCJ4XCIsIDApLmF0dHIoXCJ5XCIsIHkpLmF0dHIoXCJkeVwiLCBsaW5lSGVpZ2h0ICsgXCJlbVwiKS50ZXh0KHdvcmQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5jb25zdCBkcmF3Tm9kZSA9IGZ1bmN0aW9uKGVsZW0sIG5vZGUsIGZ1bGxTZWN0aW9uLCBjb25mKSB7XG4gIGNvbnN0IHNlY3Rpb24gPSBmdWxsU2VjdGlvbiAlIE1BWF9TRUNUSU9OUyAtIDE7XG4gIGNvbnN0IG5vZGVFbGVtID0gZWxlbS5hcHBlbmQoXCJnXCIpO1xuICBub2RlLnNlY3Rpb24gPSBzZWN0aW9uO1xuICBub2RlRWxlbS5hdHRyKFxuICAgIFwiY2xhc3NcIixcbiAgICAobm9kZS5jbGFzcyA/IG5vZGUuY2xhc3MgKyBcIiBcIiA6IFwiXCIpICsgXCJ0aW1lbGluZS1ub2RlIFwiICsgKFwic2VjdGlvbi1cIiArIHNlY3Rpb24pXG4gICk7XG4gIGNvbnN0IGJrZ0VsZW0gPSBub2RlRWxlbS5hcHBlbmQoXCJnXCIpO1xuICBjb25zdCB0ZXh0RWxlbSA9IG5vZGVFbGVtLmFwcGVuZChcImdcIik7XG4gIGNvbnN0IHR4dCA9IHRleHRFbGVtLmFwcGVuZChcInRleHRcIikudGV4dChub2RlLmRlc2NyKS5hdHRyKFwiZHlcIiwgXCIxZW1cIikuYXR0cihcImFsaWdubWVudC1iYXNlbGluZVwiLCBcIm1pZGRsZVwiKS5hdHRyKFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIikuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpLmNhbGwod3JhcCwgbm9kZS53aWR0aCk7XG4gIGNvbnN0IGJib3ggPSB0eHQubm9kZSgpLmdldEJCb3goKTtcbiAgY29uc3QgZm9udFNpemUgPSBjb25mLmZvbnRTaXplICYmIGNvbmYuZm9udFNpemUucmVwbGFjZSA/IGNvbmYuZm9udFNpemUucmVwbGFjZShcInB4XCIsIFwiXCIpIDogY29uZi5mb250U2l6ZTtcbiAgbm9kZS5oZWlnaHQgPSBiYm94LmhlaWdodCArIGZvbnRTaXplICogMS4xICogMC41ICsgbm9kZS5wYWRkaW5nO1xuICBub2RlLmhlaWdodCA9IE1hdGgubWF4KG5vZGUuaGVpZ2h0LCBub2RlLm1heEhlaWdodCk7XG4gIG5vZGUud2lkdGggPSBub2RlLndpZHRoICsgMiAqIG5vZGUucGFkZGluZztcbiAgdGV4dEVsZW0uYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG5vZGUud2lkdGggLyAyICsgXCIsIFwiICsgbm9kZS5wYWRkaW5nIC8gMiArIFwiKVwiKTtcbiAgZGVmYXVsdEJrZyhia2dFbGVtLCBub2RlLCBzZWN0aW9uKTtcbiAgcmV0dXJuIG5vZGU7XG59O1xuY29uc3QgZ2V0VmlydHVhbE5vZGVIZWlnaHQgPSBmdW5jdGlvbihlbGVtLCBub2RlLCBjb25mKSB7XG4gIGNvbnN0IHRleHRFbGVtID0gZWxlbS5hcHBlbmQoXCJnXCIpO1xuICBjb25zdCB0eHQgPSB0ZXh0RWxlbS5hcHBlbmQoXCJ0ZXh0XCIpLnRleHQobm9kZS5kZXNjcikuYXR0cihcImR5XCIsIFwiMWVtXCIpLmF0dHIoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIikuYXR0cihcImRvbWluYW50LWJhc2VsaW5lXCIsIFwibWlkZGxlXCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKS5jYWxsKHdyYXAsIG5vZGUud2lkdGgpO1xuICBjb25zdCBiYm94ID0gdHh0Lm5vZGUoKS5nZXRCQm94KCk7XG4gIGNvbnN0IGZvbnRTaXplID0gY29uZi5mb250U2l6ZSAmJiBjb25mLmZvbnRTaXplLnJlcGxhY2UgPyBjb25mLmZvbnRTaXplLnJlcGxhY2UoXCJweFwiLCBcIlwiKSA6IGNvbmYuZm9udFNpemU7XG4gIHRleHRFbGVtLnJlbW92ZSgpO1xuICByZXR1cm4gYmJveC5oZWlnaHQgKyBmb250U2l6ZSAqIDEuMSAqIDAuNSArIG5vZGUucGFkZGluZztcbn07XG5jb25zdCBkZWZhdWx0QmtnID0gZnVuY3Rpb24oZWxlbSwgbm9kZSwgc2VjdGlvbikge1xuICBjb25zdCByZCA9IDU7XG4gIGVsZW0uYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiaWRcIiwgXCJub2RlLVwiICsgbm9kZS5pZCkuYXR0cihcImNsYXNzXCIsIFwibm9kZS1ia2cgbm9kZS1cIiArIG5vZGUudHlwZSkuYXR0cihcbiAgICBcImRcIixcbiAgICBgTTAgJHtub2RlLmhlaWdodCAtIHJkfSB2JHstbm9kZS5oZWlnaHQgKyAyICogcmR9IHEwLC01IDUsLTUgaCR7bm9kZS53aWR0aCAtIDIgKiByZH0gcTUsMCA1LDUgdiR7bm9kZS5oZWlnaHQgLSByZH0gSDAgWmBcbiAgKTtcbiAgZWxlbS5hcHBlbmQoXCJsaW5lXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGUtbGluZS1cIiArIHNlY3Rpb24pLmF0dHIoXCJ4MVwiLCAwKS5hdHRyKFwieTFcIiwgbm9kZS5oZWlnaHQpLmF0dHIoXCJ4MlwiLCBub2RlLndpZHRoKS5hdHRyKFwieTJcIiwgbm9kZS5oZWlnaHQpO1xufTtcbmNvbnN0IHN2Z0RyYXcgPSB7XG4gIGRyYXdSZWN0LFxuICBkcmF3Q2lyY2xlLFxuICBkcmF3U2VjdGlvbixcbiAgZHJhd1RleHQsXG4gIGRyYXdMYWJlbCxcbiAgZHJhd1Rhc2ssXG4gIGRyYXdCYWNrZ3JvdW5kUmVjdCxcbiAgZ2V0VGV4dE9iaixcbiAgZ2V0Tm90ZVJlY3QsXG4gIGluaXRHcmFwaGljcyxcbiAgZHJhd05vZGUsXG4gIGdldFZpcnR1YWxOb2RlSGVpZ2h0XG59O1xuY29uc3QgZHJhdyA9IGZ1bmN0aW9uKHRleHQsIGlkLCB2ZXJzaW9uLCBkaWFnT2JqKSB7XG4gIHZhciBfYSwgX2I7XG4gIGNvbnN0IGNvbmYgPSBnZXRDb25maWcoKTtcbiAgY29uc3QgTEVGVF9NQVJHSU4gPSBjb25mLmxlZnRNYXJnaW4gPz8gNTA7XG4gIGxvZy5kZWJ1ZyhcInRpbWVsaW5lXCIsIGRpYWdPYmouZGIpO1xuICBjb25zdCBzZWN1cml0eUxldmVsID0gY29uZi5zZWN1cml0eUxldmVsO1xuICBsZXQgc2FuZGJveEVsZW1lbnQ7XG4gIGlmIChzZWN1cml0eUxldmVsID09PSBcInNhbmRib3hcIikge1xuICAgIHNhbmRib3hFbGVtZW50ID0gc2VsZWN0KFwiI2lcIiArIGlkKTtcbiAgfVxuICBjb25zdCByb290ID0gc2VjdXJpdHlMZXZlbCA9PT0gXCJzYW5kYm94XCIgPyBzZWxlY3Qoc2FuZGJveEVsZW1lbnQubm9kZXMoKVswXS5jb250ZW50RG9jdW1lbnQuYm9keSkgOiBzZWxlY3QoXCJib2R5XCIpO1xuICBjb25zdCBzdmcgPSByb290LnNlbGVjdChcIiNcIiArIGlkKTtcbiAgc3ZnLmFwcGVuZChcImdcIik7XG4gIGNvbnN0IHRhc2tzMiA9IGRpYWdPYmouZGIuZ2V0VGFza3MoKTtcbiAgY29uc3QgdGl0bGUgPSBkaWFnT2JqLmRiLmdldENvbW1vbkRiKCkuZ2V0RGlhZ3JhbVRpdGxlKCk7XG4gIGxvZy5kZWJ1ZyhcInRhc2tcIiwgdGFza3MyKTtcbiAgc3ZnRHJhdy5pbml0R3JhcGhpY3Moc3ZnKTtcbiAgY29uc3Qgc2VjdGlvbnMyID0gZGlhZ09iai5kYi5nZXRTZWN0aW9ucygpO1xuICBsb2cuZGVidWcoXCJzZWN0aW9uc1wiLCBzZWN0aW9uczIpO1xuICBsZXQgbWF4U2VjdGlvbkhlaWdodCA9IDA7XG4gIGxldCBtYXhUYXNrSGVpZ2h0ID0gMDtcbiAgbGV0IGRlcHRoWSA9IDA7XG4gIGxldCBzZWN0aW9uQmVnaW5ZID0gMDtcbiAgbGV0IG1hc3RlclggPSA1MCArIExFRlRfTUFSR0lOO1xuICBsZXQgbWFzdGVyWSA9IDUwO1xuICBzZWN0aW9uQmVnaW5ZID0gNTA7XG4gIGxldCBzZWN0aW9uTnVtYmVyID0gMDtcbiAgbGV0IGhhc1NlY3Rpb25zID0gdHJ1ZTtcbiAgc2VjdGlvbnMyLmZvckVhY2goZnVuY3Rpb24oc2VjdGlvbikge1xuICAgIGNvbnN0IHNlY3Rpb25Ob2RlID0ge1xuICAgICAgbnVtYmVyOiBzZWN0aW9uTnVtYmVyLFxuICAgICAgZGVzY3I6IHNlY3Rpb24sXG4gICAgICBzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuICAgICAgd2lkdGg6IDE1MCxcbiAgICAgIHBhZGRpbmc6IDIwLFxuICAgICAgbWF4SGVpZ2h0OiBtYXhTZWN0aW9uSGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCBzZWN0aW9uSGVpZ2h0ID0gc3ZnRHJhdy5nZXRWaXJ0dWFsTm9kZUhlaWdodChzdmcsIHNlY3Rpb25Ob2RlLCBjb25mKTtcbiAgICBsb2cuZGVidWcoXCJzZWN0aW9uSGVpZ2h0IGJlZm9yZSBkcmF3XCIsIHNlY3Rpb25IZWlnaHQpO1xuICAgIG1heFNlY3Rpb25IZWlnaHQgPSBNYXRoLm1heChtYXhTZWN0aW9uSGVpZ2h0LCBzZWN0aW9uSGVpZ2h0ICsgMjApO1xuICB9KTtcbiAgbGV0IG1heEV2ZW50Q291bnQgPSAwO1xuICBsZXQgbWF4RXZlbnRMaW5lTGVuZ3RoID0gMDtcbiAgbG9nLmRlYnVnKFwidGFza3MubGVuZ3RoXCIsIHRhc2tzMi5sZW5ndGgpO1xuICBmb3IgKGNvbnN0IFtpLCB0YXNrXSBvZiB0YXNrczIuZW50cmllcygpKSB7XG4gICAgY29uc3QgdGFza05vZGUgPSB7XG4gICAgICBudW1iZXI6IGksXG4gICAgICBkZXNjcjogdGFzayxcbiAgICAgIHNlY3Rpb246IHRhc2suc2VjdGlvbixcbiAgICAgIHdpZHRoOiAxNTAsXG4gICAgICBwYWRkaW5nOiAyMCxcbiAgICAgIG1heEhlaWdodDogbWF4VGFza0hlaWdodFxuICAgIH07XG4gICAgY29uc3QgdGFza0hlaWdodCA9IHN2Z0RyYXcuZ2V0VmlydHVhbE5vZGVIZWlnaHQoc3ZnLCB0YXNrTm9kZSwgY29uZik7XG4gICAgbG9nLmRlYnVnKFwidGFza0hlaWdodCBiZWZvcmUgZHJhd1wiLCB0YXNrSGVpZ2h0KTtcbiAgICBtYXhUYXNrSGVpZ2h0ID0gTWF0aC5tYXgobWF4VGFza0hlaWdodCwgdGFza0hlaWdodCArIDIwKTtcbiAgICBtYXhFdmVudENvdW50ID0gTWF0aC5tYXgobWF4RXZlbnRDb3VudCwgdGFzay5ldmVudHMubGVuZ3RoKTtcbiAgICBsZXQgbWF4RXZlbnRMaW5lTGVuZ3RoVGVtcCA9IDA7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YXNrLmV2ZW50cy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgZXZlbnQgPSB0YXNrLmV2ZW50c1tqXTtcbiAgICAgIGNvbnN0IGV2ZW50Tm9kZSA9IHtcbiAgICAgICAgZGVzY3I6IGV2ZW50LFxuICAgICAgICBzZWN0aW9uOiB0YXNrLnNlY3Rpb24sXG4gICAgICAgIG51bWJlcjogdGFzay5zZWN0aW9uLFxuICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICBwYWRkaW5nOiAyMCxcbiAgICAgICAgbWF4SGVpZ2h0OiA1MFxuICAgICAgfTtcbiAgICAgIG1heEV2ZW50TGluZUxlbmd0aFRlbXAgKz0gc3ZnRHJhdy5nZXRWaXJ0dWFsTm9kZUhlaWdodChzdmcsIGV2ZW50Tm9kZSwgY29uZik7XG4gICAgfVxuICAgIG1heEV2ZW50TGluZUxlbmd0aCA9IE1hdGgubWF4KG1heEV2ZW50TGluZUxlbmd0aCwgbWF4RXZlbnRMaW5lTGVuZ3RoVGVtcCk7XG4gIH1cbiAgbG9nLmRlYnVnKFwibWF4U2VjdGlvbkhlaWdodCBiZWZvcmUgZHJhd1wiLCBtYXhTZWN0aW9uSGVpZ2h0KTtcbiAgbG9nLmRlYnVnKFwibWF4VGFza0hlaWdodCBiZWZvcmUgZHJhd1wiLCBtYXhUYXNrSGVpZ2h0KTtcbiAgaWYgKHNlY3Rpb25zMiAmJiBzZWN0aW9uczIubGVuZ3RoID4gMCkge1xuICAgIHNlY3Rpb25zMi5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCB0YXNrc0ZvclNlY3Rpb24gPSB0YXNrczIuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnNlY3Rpb24gPT09IHNlY3Rpb24pO1xuICAgICAgY29uc3Qgc2VjdGlvbk5vZGUgPSB7XG4gICAgICAgIG51bWJlcjogc2VjdGlvbk51bWJlcixcbiAgICAgICAgZGVzY3I6IHNlY3Rpb24sXG4gICAgICAgIHNlY3Rpb246IHNlY3Rpb25OdW1iZXIsXG4gICAgICAgIHdpZHRoOiAyMDAgKiBNYXRoLm1heCh0YXNrc0ZvclNlY3Rpb24ubGVuZ3RoLCAxKSAtIDUwLFxuICAgICAgICBwYWRkaW5nOiAyMCxcbiAgICAgICAgbWF4SGVpZ2h0OiBtYXhTZWN0aW9uSGVpZ2h0XG4gICAgICB9O1xuICAgICAgbG9nLmRlYnVnKFwic2VjdGlvbk5vZGVcIiwgc2VjdGlvbk5vZGUpO1xuICAgICAgY29uc3Qgc2VjdGlvbk5vZGVXcmFwcGVyID0gc3ZnLmFwcGVuZChcImdcIik7XG4gICAgICBjb25zdCBub2RlID0gc3ZnRHJhdy5kcmF3Tm9kZShzZWN0aW9uTm9kZVdyYXBwZXIsIHNlY3Rpb25Ob2RlLCBzZWN0aW9uTnVtYmVyLCBjb25mKTtcbiAgICAgIGxvZy5kZWJ1ZyhcInNlY3Rpb25Ob2RlIG91dHB1dFwiLCBub2RlKTtcbiAgICAgIHNlY3Rpb25Ob2RlV3JhcHBlci5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXN0ZXJYfSwgJHtzZWN0aW9uQmVnaW5ZfSlgKTtcbiAgICAgIG1hc3RlclkgKz0gbWF4U2VjdGlvbkhlaWdodCArIDUwO1xuICAgICAgaWYgKHRhc2tzRm9yU2VjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRyYXdUYXNrcyhcbiAgICAgICAgICBzdmcsXG4gICAgICAgICAgdGFza3NGb3JTZWN0aW9uLFxuICAgICAgICAgIHNlY3Rpb25OdW1iZXIsXG4gICAgICAgICAgbWFzdGVyWCxcbiAgICAgICAgICBtYXN0ZXJZLFxuICAgICAgICAgIG1heFRhc2tIZWlnaHQsXG4gICAgICAgICAgY29uZixcbiAgICAgICAgICBtYXhFdmVudENvdW50LFxuICAgICAgICAgIG1heEV2ZW50TGluZUxlbmd0aCxcbiAgICAgICAgICBtYXhTZWN0aW9uSGVpZ2h0LFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBtYXN0ZXJYICs9IDIwMCAqIE1hdGgubWF4KHRhc2tzRm9yU2VjdGlvbi5sZW5ndGgsIDEpO1xuICAgICAgbWFzdGVyWSA9IHNlY3Rpb25CZWdpblk7XG4gICAgICBzZWN0aW9uTnVtYmVyKys7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgaGFzU2VjdGlvbnMgPSBmYWxzZTtcbiAgICBkcmF3VGFza3MoXG4gICAgICBzdmcsXG4gICAgICB0YXNrczIsXG4gICAgICBzZWN0aW9uTnVtYmVyLFxuICAgICAgbWFzdGVyWCxcbiAgICAgIG1hc3RlclksXG4gICAgICBtYXhUYXNrSGVpZ2h0LFxuICAgICAgY29uZixcbiAgICAgIG1heEV2ZW50Q291bnQsXG4gICAgICBtYXhFdmVudExpbmVMZW5ndGgsXG4gICAgICBtYXhTZWN0aW9uSGVpZ2h0LFxuICAgICAgdHJ1ZVxuICAgICk7XG4gIH1cbiAgY29uc3QgYm94ID0gc3ZnLm5vZGUoKS5nZXRCQm94KCk7XG4gIGxvZy5kZWJ1ZyhcImJvdW5kc1wiLCBib3gpO1xuICBpZiAodGl0bGUpIHtcbiAgICBzdmcuYXBwZW5kKFwidGV4dFwiKS50ZXh0KHRpdGxlKS5hdHRyKFwieFwiLCBib3gud2lkdGggLyAyIC0gTEVGVF9NQVJHSU4pLmF0dHIoXCJmb250LXNpemVcIiwgXCI0ZXhcIikuYXR0cihcImZvbnQtd2VpZ2h0XCIsIFwiYm9sZFwiKS5hdHRyKFwieVwiLCAyMCk7XG4gIH1cbiAgZGVwdGhZID0gaGFzU2VjdGlvbnMgPyBtYXhTZWN0aW9uSGVpZ2h0ICsgbWF4VGFza0hlaWdodCArIDE1MCA6IG1heFRhc2tIZWlnaHQgKyAxMDA7XG4gIGNvbnN0IGxpbmVXcmFwcGVyID0gc3ZnLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwibGluZVdyYXBwZXJcIik7XG4gIGxpbmVXcmFwcGVyLmFwcGVuZChcImxpbmVcIikuYXR0cihcIngxXCIsIExFRlRfTUFSR0lOKS5hdHRyKFwieTFcIiwgZGVwdGhZKS5hdHRyKFwieDJcIiwgYm94LndpZHRoICsgMyAqIExFRlRfTUFSR0lOKS5hdHRyKFwieTJcIiwgZGVwdGhZKS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDQpLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKS5hdHRyKFwibWFya2VyLWVuZFwiLCBcInVybCgjYXJyb3doZWFkKVwiKTtcbiAgc2V0dXBHcmFwaFZpZXdib3goXG4gICAgdm9pZCAwLFxuICAgIHN2ZyxcbiAgICAoKF9hID0gY29uZi50aW1lbGluZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnBhZGRpbmcpID8/IDUwLFxuICAgICgoX2IgPSBjb25mLnRpbWVsaW5lKSA9PSBudWxsID8gdm9pZCAwIDogX2IudXNlTWF4V2lkdGgpID8/IGZhbHNlXG4gICk7XG59O1xuY29uc3QgZHJhd1Rhc2tzID0gZnVuY3Rpb24oZGlhZ3JhbTIsIHRhc2tzMiwgc2VjdGlvbkNvbG9yLCBtYXN0ZXJYLCBtYXN0ZXJZLCBtYXhUYXNrSGVpZ2h0LCBjb25mLCBtYXhFdmVudENvdW50LCBtYXhFdmVudExpbmVMZW5ndGgsIG1heFNlY3Rpb25IZWlnaHQsIGlzV2l0aG91dFNlY3Rpb25zKSB7XG4gIHZhciBfYTtcbiAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tzMikge1xuICAgIGNvbnN0IHRhc2tOb2RlID0ge1xuICAgICAgZGVzY3I6IHRhc2sudGFzayxcbiAgICAgIHNlY3Rpb246IHNlY3Rpb25Db2xvcixcbiAgICAgIG51bWJlcjogc2VjdGlvbkNvbG9yLFxuICAgICAgd2lkdGg6IDE1MCxcbiAgICAgIHBhZGRpbmc6IDIwLFxuICAgICAgbWF4SGVpZ2h0OiBtYXhUYXNrSGVpZ2h0XG4gICAgfTtcbiAgICBsb2cuZGVidWcoXCJ0YXNrTm9kZVwiLCB0YXNrTm9kZSk7XG4gICAgY29uc3QgdGFza1dyYXBwZXIgPSBkaWFncmFtMi5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcInRhc2tXcmFwcGVyXCIpO1xuICAgIGNvbnN0IG5vZGUgPSBzdmdEcmF3LmRyYXdOb2RlKHRhc2tXcmFwcGVyLCB0YXNrTm9kZSwgc2VjdGlvbkNvbG9yLCBjb25mKTtcbiAgICBjb25zdCB0YXNrSGVpZ2h0ID0gbm9kZS5oZWlnaHQ7XG4gICAgbG9nLmRlYnVnKFwidGFza0hlaWdodCBhZnRlciBkcmF3XCIsIHRhc2tIZWlnaHQpO1xuICAgIHRhc2tXcmFwcGVyLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hc3Rlclh9LCAke21hc3Rlcll9KWApO1xuICAgIG1heFRhc2tIZWlnaHQgPSBNYXRoLm1heChtYXhUYXNrSGVpZ2h0LCB0YXNrSGVpZ2h0KTtcbiAgICBpZiAodGFzay5ldmVudHMpIHtcbiAgICAgIGNvbnN0IGxpbmVXcmFwcGVyID0gZGlhZ3JhbTIuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lV3JhcHBlclwiKTtcbiAgICAgIGxldCBsaW5lTGVuZ3RoID0gbWF4VGFza0hlaWdodDtcbiAgICAgIG1hc3RlclkgKz0gMTAwO1xuICAgICAgbGluZUxlbmd0aCA9IGxpbmVMZW5ndGggKyBkcmF3RXZlbnRzKGRpYWdyYW0yLCB0YXNrLmV2ZW50cywgc2VjdGlvbkNvbG9yLCBtYXN0ZXJYLCBtYXN0ZXJZLCBjb25mKTtcbiAgICAgIG1hc3RlclkgLT0gMTAwO1xuICAgICAgbGluZVdyYXBwZXIuYXBwZW5kKFwibGluZVwiKS5hdHRyKFwieDFcIiwgbWFzdGVyWCArIDE5MCAvIDIpLmF0dHIoXCJ5MVwiLCBtYXN0ZXJZICsgbWF4VGFza0hlaWdodCkuYXR0cihcIngyXCIsIG1hc3RlclggKyAxOTAgLyAyKS5hdHRyKFxuICAgICAgICBcInkyXCIsXG4gICAgICAgIG1hc3RlclkgKyBtYXhUYXNrSGVpZ2h0ICsgKGlzV2l0aG91dFNlY3Rpb25zID8gbWF4VGFza0hlaWdodCA6IG1heFNlY3Rpb25IZWlnaHQpICsgbWF4RXZlbnRMaW5lTGVuZ3RoICsgMTIwXG4gICAgICApLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMikuYXR0cihcInN0cm9rZVwiLCBcImJsYWNrXCIpLmF0dHIoXCJtYXJrZXItZW5kXCIsIFwidXJsKCNhcnJvd2hlYWQpXCIpLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiNSw1XCIpO1xuICAgIH1cbiAgICBtYXN0ZXJYID0gbWFzdGVyWCArIDIwMDtcbiAgICBpZiAoaXNXaXRob3V0U2VjdGlvbnMgJiYgISgoX2EgPSBjb25mLnRpbWVsaW5lKSA9PSBudWxsID8gdm9pZCAwIDogX2EuZGlzYWJsZU11bHRpY29sb3IpKSB7XG4gICAgICBzZWN0aW9uQ29sb3IrKztcbiAgICB9XG4gIH1cbiAgbWFzdGVyWSA9IG1hc3RlclkgLSAxMDtcbn07XG5jb25zdCBkcmF3RXZlbnRzID0gZnVuY3Rpb24oZGlhZ3JhbTIsIGV2ZW50cywgc2VjdGlvbkNvbG9yLCBtYXN0ZXJYLCBtYXN0ZXJZLCBjb25mKSB7XG4gIGxldCBtYXhFdmVudEhlaWdodCA9IDA7XG4gIGNvbnN0IGV2ZW50QmVnaW5ZID0gbWFzdGVyWTtcbiAgbWFzdGVyWSA9IG1hc3RlclkgKyAxMDA7XG4gIGZvciAoY29uc3QgZXZlbnQgb2YgZXZlbnRzKSB7XG4gICAgY29uc3QgZXZlbnROb2RlID0ge1xuICAgICAgZGVzY3I6IGV2ZW50LFxuICAgICAgc2VjdGlvbjogc2VjdGlvbkNvbG9yLFxuICAgICAgbnVtYmVyOiBzZWN0aW9uQ29sb3IsXG4gICAgICB3aWR0aDogMTUwLFxuICAgICAgcGFkZGluZzogMjAsXG4gICAgICBtYXhIZWlnaHQ6IDUwXG4gICAgfTtcbiAgICBsb2cuZGVidWcoXCJldmVudE5vZGVcIiwgZXZlbnROb2RlKTtcbiAgICBjb25zdCBldmVudFdyYXBwZXIgPSBkaWFncmFtMi5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImV2ZW50V3JhcHBlclwiKTtcbiAgICBjb25zdCBub2RlID0gc3ZnRHJhdy5kcmF3Tm9kZShldmVudFdyYXBwZXIsIGV2ZW50Tm9kZSwgc2VjdGlvbkNvbG9yLCBjb25mKTtcbiAgICBjb25zdCBldmVudEhlaWdodCA9IG5vZGUuaGVpZ2h0O1xuICAgIG1heEV2ZW50SGVpZ2h0ID0gbWF4RXZlbnRIZWlnaHQgKyBldmVudEhlaWdodDtcbiAgICBldmVudFdyYXBwZXIuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFzdGVyWH0sICR7bWFzdGVyWX0pYCk7XG4gICAgbWFzdGVyWSA9IG1hc3RlclkgKyAxMCArIGV2ZW50SGVpZ2h0O1xuICB9XG4gIG1hc3RlclkgPSBldmVudEJlZ2luWTtcbiAgcmV0dXJuIG1heEV2ZW50SGVpZ2h0O1xufTtcbmNvbnN0IHJlbmRlcmVyID0ge1xuICBzZXRDb25mOiAoKSA9PiB7XG4gIH0sXG4gIGRyYXdcbn07XG5jb25zdCBnZW5TZWN0aW9ucyA9IChvcHRpb25zKSA9PiB7XG4gIGxldCBzZWN0aW9uczIgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMuVEhFTUVfQ09MT1JfTElNSVQ7IGkrKykge1xuICAgIG9wdGlvbnNbXCJsaW5lQ29sb3JcIiArIGldID0gb3B0aW9uc1tcImxpbmVDb2xvclwiICsgaV0gfHwgb3B0aW9uc1tcImNTY2FsZUludlwiICsgaV07XG4gICAgaWYgKGlzRGFyayhvcHRpb25zW1wibGluZUNvbG9yXCIgKyBpXSkpIHtcbiAgICAgIG9wdGlvbnNbXCJsaW5lQ29sb3JcIiArIGldID0gbGlnaHRlbihvcHRpb25zW1wibGluZUNvbG9yXCIgKyBpXSwgMjApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zW1wibGluZUNvbG9yXCIgKyBpXSA9IGRhcmtlbihvcHRpb25zW1wibGluZUNvbG9yXCIgKyBpXSwgMjApO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMuVEhFTUVfQ09MT1JfTElNSVQ7IGkrKykge1xuICAgIGNvbnN0IHN3ID0gXCJcIiArICgxNyAtIDMgKiBpKTtcbiAgICBzZWN0aW9uczIgKz0gYFxuICAgIC5zZWN0aW9uLSR7aSAtIDF9IHJlY3QsIC5zZWN0aW9uLSR7aSAtIDF9IHBhdGgsIC5zZWN0aW9uLSR7aSAtIDF9IGNpcmNsZSwgLnNlY3Rpb24tJHtpIC0gMX0gcGF0aCAge1xuICAgICAgZmlsbDogJHtvcHRpb25zW1wiY1NjYWxlXCIgKyBpXX07XG4gICAgfVxuICAgIC5zZWN0aW9uLSR7aSAtIDF9IHRleHQge1xuICAgICBmaWxsOiAke29wdGlvbnNbXCJjU2NhbGVMYWJlbFwiICsgaV19O1xuICAgIH1cbiAgICAubm9kZS1pY29uLSR7aSAtIDF9IHtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGNvbG9yOiAke29wdGlvbnNbXCJjU2NhbGVMYWJlbFwiICsgaV19O1xuICAgIH1cbiAgICAuc2VjdGlvbi1lZGdlLSR7aSAtIDF9e1xuICAgICAgc3Ryb2tlOiAke29wdGlvbnNbXCJjU2NhbGVcIiArIGldfTtcbiAgICB9XG4gICAgLmVkZ2UtZGVwdGgtJHtpIC0gMX17XG4gICAgICBzdHJva2Utd2lkdGg6ICR7c3d9O1xuICAgIH1cbiAgICAuc2VjdGlvbi0ke2kgLSAxfSBsaW5lIHtcbiAgICAgIHN0cm9rZTogJHtvcHRpb25zW1wiY1NjYWxlSW52XCIgKyBpXX0gO1xuICAgICAgc3Ryb2tlLXdpZHRoOiAzO1xuICAgIH1cblxuICAgIC5saW5lV3JhcHBlciBsaW5le1xuICAgICAgc3Ryb2tlOiAke29wdGlvbnNbXCJjU2NhbGVMYWJlbFwiICsgaV19IDtcbiAgICB9XG5cbiAgICAuZGlzYWJsZWQsIC5kaXNhYmxlZCBjaXJjbGUsIC5kaXNhYmxlZCB0ZXh0IHtcbiAgICAgIGZpbGw6IGxpZ2h0Z3JheTtcbiAgICB9XG4gICAgLmRpc2FibGVkIHRleHQge1xuICAgICAgZmlsbDogI2VmZWZlZjtcbiAgICB9XG4gICAgYDtcbiAgfVxuICByZXR1cm4gc2VjdGlvbnMyO1xufTtcbmNvbnN0IGdldFN0eWxlcyA9IChvcHRpb25zKSA9PiBgXG4gIC5lZGdlIHtcbiAgICBzdHJva2Utd2lkdGg6IDM7XG4gIH1cbiAgJHtnZW5TZWN0aW9ucyhvcHRpb25zKX1cbiAgLnNlY3Rpb24tcm9vdCByZWN0LCAuc2VjdGlvbi1yb290IHBhdGgsIC5zZWN0aW9uLXJvb3QgY2lyY2xlICB7XG4gICAgZmlsbDogJHtvcHRpb25zLmdpdDB9O1xuICB9XG4gIC5zZWN0aW9uLXJvb3QgdGV4dCB7XG4gICAgZmlsbDogJHtvcHRpb25zLmdpdEJyYW5jaExhYmVsMH07XG4gIH1cbiAgLmljb24tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmVkZ2Uge1xuICAgIGZpbGw6IG5vbmU7XG4gIH1cbiAgLmV2ZW50V3JhcHBlciAge1xuICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpO1xuICB9XG5gO1xuY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzO1xuY29uc3QgZGlhZ3JhbSA9IHtcbiAgZGIsXG4gIHJlbmRlcmVyLFxuICBwYXJzZXI6IHBhcnNlciQxLFxuICBzdHlsZXNcbn07XG5leHBvcnQge1xuICBkaWFncmFtXG59O1xuIl0sIm5hbWVzIjpbImNvbW1vbkRiIiwiY2xlYXIkMSIsImFyYyIsInNlbGVjdCIsImdldENvbmZpZyIsImxvZyIsInNldHVwR3JhcGhWaWV3Ym94IiwiaXNEYXJrIiwibGlnaHRlbiIsImRhcmtlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFXQSxJQUFJLE1BQU0sR0FBRyxXQUFXO0FBQ3hCLEVBQUUsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3ZELE1BQU0sQ0FBQztBQUNQLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzFKLEVBQUUsSUFBSSxPQUFPLEdBQUc7QUFDaEIsSUFBSSxLQUFLLEVBQUUsU0FBUyxLQUFLLEdBQUc7QUFDNUIsS0FBSztBQUNMLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDVixJQUFJLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO0FBQ3RYLElBQUksVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLDJCQUEyQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFO0FBQzFQLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZKLElBQUksYUFBYSxFQUFFLFNBQVMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNyRixNQUFNLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLE1BQU0sUUFBUSxPQUFPO0FBQ3JCLFFBQVEsS0FBSyxDQUFDO0FBQ2QsVUFBVSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDNUIsUUFBUSxLQUFLLENBQUM7QUFDZCxVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssQ0FBQztBQUNkLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEMsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDOUIsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxDQUFDLENBQUM7QUFDZixRQUFRLEtBQUssQ0FBQztBQUNkLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUIsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxDQUFDLENBQUM7QUFDZixRQUFRLEtBQUssQ0FBQztBQUNkLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDdEIsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxDQUFDO0FBQ2QsVUFBVSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3RCxVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQyxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLENBQUM7QUFDZCxVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2pDLFVBQVUsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0MsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFLENBQUM7QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2pDLFVBQVUsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRCxVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLEVBQUU7QUFDZixVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFDLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssRUFBRTtBQUNmLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3BDLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUIsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QyxVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFCLFVBQVUsTUFBTTtBQUNoQixPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUksS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pqQixJQUFJLGNBQWMsRUFBRSxFQUFFO0FBQ3RCLElBQUksVUFBVSxFQUFFLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDL0MsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDNUIsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLE9BQU8sTUFBTTtBQUNiLFFBQVEsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsUUFBUSxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUMxQixRQUFRLE1BQU0sS0FBSyxDQUFDO0FBQ3BCLE9BQU87QUFDUCxLQUFLO0FBQ0wsSUFBSSxLQUFLLEVBQUUsU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFO0FBQ2pDLE1BQU0sSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLEVBQUUsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEdBQUcsRUFBRSxFQUFFLFFBQVEsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDOUosTUFBTSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakQsTUFBTSxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QyxNQUFNLElBQUksV0FBVyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQ25DLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQzdCLFFBQVEsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUM5RCxVQUFVLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxTQUFTO0FBQ1QsT0FBTztBQUNQLE1BQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLE1BQU0sV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ3BDLE1BQU0sV0FBVyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25DLE1BQU0sSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLElBQUksV0FBVyxFQUFFO0FBQy9DLFFBQVEsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDM0IsT0FBTztBQUNQLE1BQU0sSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsTUFBTSxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQzNELE1BQU0sSUFBSSxPQUFPLFdBQVcsQ0FBQyxFQUFFLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtBQUMzRCxRQUFRLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFDcEQsT0FBTyxNQUFNO0FBQ2IsUUFBUSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDO0FBQ2pFLE9BQU87QUFDUCxNQUFNLFNBQVMsR0FBRyxHQUFHO0FBQ3JCLFFBQVEsSUFBSSxLQUFLLENBQUM7QUFDbEIsUUFBUSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFHLENBQUM7QUFDcEQsUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUN2QyxVQUFVLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtBQUN0QyxZQUFZLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDM0IsWUFBWSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2pDLFdBQVc7QUFDWCxVQUFVLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQztBQUNoRCxTQUFTO0FBQ1QsUUFBUSxPQUFPLEtBQUssQ0FBQztBQUNyQixPQUFPO0FBQ1AsTUFBTSxJQUFJLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztBQUMzRSxNQUFNLE9BQU8sSUFBSSxFQUFFO0FBQ25CLFFBQVEsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3hDLFVBQVUsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUMsU0FBUyxNQUFNO0FBQ2YsVUFBVSxJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksT0FBTyxNQUFNLElBQUksV0FBVyxFQUFFO0FBQy9ELFlBQVksTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQzNCLFdBQVc7QUFDWCxVQUFVLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hELFNBQVM7QUFDVCxRQUFRLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUMzRSxVQUFVLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUMxQixVQUFVLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDeEIsVUFBVSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDbEMsWUFBWSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRTtBQUNsRCxjQUFjLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDNUQsYUFBYTtBQUNiLFdBQVc7QUFDWCxVQUFVLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTtBQUNuQyxZQUFZLE1BQU0sR0FBRyxzQkFBc0IsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsR0FBRyxjQUFjLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDNUwsV0FBVyxNQUFNO0FBQ2pCLFlBQVksTUFBTSxHQUFHLHNCQUFzQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxlQUFlLElBQUksTUFBTSxJQUFJLEdBQUcsR0FBRyxjQUFjLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDcEssV0FBVztBQUNYLFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDbEMsWUFBWSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUs7QUFDOUIsWUFBWSxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNO0FBQ3BELFlBQVksSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRO0FBQ2pDLFlBQVksR0FBRyxFQUFFLEtBQUs7QUFDdEIsWUFBWSxRQUFRO0FBQ3BCLFdBQVcsQ0FBQyxDQUFDO0FBQ2IsU0FBUztBQUNULFFBQVEsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzdELFVBQVUsTUFBTSxJQUFJLEtBQUssQ0FBQyxtREFBbUQsR0FBRyxLQUFLLEdBQUcsV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQzlHLFNBQVM7QUFDVCxRQUFRLFFBQVEsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN6QixVQUFVLEtBQUssQ0FBQztBQUNoQixZQUFZLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0IsWUFBWSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2QyxZQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLFlBQVksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxZQUFZLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDMUIsWUFBWTtBQUNaLGNBQWMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDckMsY0FBYyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNyQyxjQUFjLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ3pDLGNBQWMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDcEMsYUFBYTtBQUNiLFlBQVksTUFBTTtBQUNsQixVQUFVLEtBQUssQ0FBQztBQUNoQixZQUFZLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xELFlBQVksS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNsRCxZQUFZLEtBQUssQ0FBQyxFQUFFLEdBQUc7QUFDdkIsY0FBYyxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtBQUN2RSxjQUFjLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQzVELGNBQWMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7QUFDM0UsY0FBYyxXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVztBQUNoRSxhQUFhLENBQUM7QUFDZCxZQUFZLElBQUksTUFBTSxFQUFFO0FBQ3hCLGNBQWMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUc7QUFDL0IsZ0JBQWdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDM0QsZ0JBQWdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDbEQsZUFBZSxDQUFDO0FBQ2hCLGFBQWE7QUFDYixZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7QUFDaEQsY0FBYyxNQUFNO0FBQ3BCLGNBQWMsTUFBTTtBQUNwQixjQUFjLFFBQVE7QUFDdEIsY0FBYyxXQUFXLENBQUMsRUFBRTtBQUM1QixjQUFjLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdkIsY0FBYyxNQUFNO0FBQ3BCLGNBQWMsTUFBTTtBQUNwQixhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDNUIsWUFBWSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFdBQVcsRUFBRTtBQUMxQyxjQUFjLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZCLGFBQWE7QUFDYixZQUFZLElBQUksR0FBRyxFQUFFO0FBQ3JCLGNBQWMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuRCxjQUFjLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNqRCxjQUFjLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNqRCxhQUFhO0FBQ2IsWUFBWSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RCxZQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLFlBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbEMsWUFBWSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvRSxZQUFZLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsWUFBWSxNQUFNO0FBQ2xCLFVBQVUsS0FBSyxDQUFDO0FBQ2hCLFlBQVksT0FBTyxJQUFJLENBQUM7QUFDeEIsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLEtBQUs7QUFDTCxHQUFHLENBQUM7QUFDSixFQUFFLElBQUksS0FBSyxHQUFHLFdBQVc7QUFDekIsSUFBSSxJQUFJLE1BQU0sR0FBRztBQUNqQixNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ1osTUFBTSxVQUFVLEVBQUUsU0FBUyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUNqRCxRQUFRLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7QUFDNUIsVUFBVSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9DLFNBQVMsTUFBTTtBQUNmLFVBQVUsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvQixTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsTUFBTSxRQUFRLEVBQUUsU0FBUyxLQUFLLEVBQUUsRUFBRSxFQUFFO0FBQ3BDLFFBQVEsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDdEMsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUM1QixRQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUN6RCxRQUFRLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDeEMsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDckQsUUFBUSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDMUMsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHO0FBQ3RCLFVBQVUsVUFBVSxFQUFFLENBQUM7QUFDdkIsVUFBVSxZQUFZLEVBQUUsQ0FBQztBQUN6QixVQUFVLFNBQVMsRUFBRSxDQUFDO0FBQ3RCLFVBQVUsV0FBVyxFQUFFLENBQUM7QUFDeEIsU0FBUyxDQUFDO0FBQ1YsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQ2pDLFVBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckMsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDeEIsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixPQUFPO0FBQ1A7QUFDQSxNQUFNLEtBQUssRUFBRSxXQUFXO0FBQ3hCLFFBQVEsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQyxRQUFRLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0FBQzFCLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7QUFDekIsUUFBUSxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUMzQixRQUFRLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNoRCxRQUFRLElBQUksS0FBSyxFQUFFO0FBQ25CLFVBQVUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzFCLFVBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNsQyxTQUFTLE1BQU07QUFDZixVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDcEMsU0FBUztBQUNULFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNqQyxVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDakMsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQyxRQUFRLE9BQU8sRUFBRSxDQUFDO0FBQ2xCLE9BQU87QUFDUDtBQUNBLE1BQU0sS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFO0FBQzFCLFFBQVEsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztBQUM1QixRQUFRLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDOUMsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3ZDLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDdEUsUUFBUSxJQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztBQUMzQixRQUFRLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pELFFBQVEsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakUsUUFBUSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2RSxRQUFRLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDOUIsVUFBVSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzVDLFNBQVM7QUFDVCxRQUFRLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2xDLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRztBQUN0QixVQUFVLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVU7QUFDNUMsVUFBVSxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO0FBQ3RDLFVBQVUsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWTtBQUNoRCxVQUFVLFdBQVcsRUFBRSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHO0FBQ3JNLFNBQVMsQ0FBQztBQUNWLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNqQyxVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsS0FB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QUFHO0FBQ0gsRUFBRSxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUU7QUFDdEIsSUFBSSxNQUFNLEtBQUssR0FBR0EsT0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNsSSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxHQUFHLFFBQVEsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDL0ksR0FBRztBQUNILEVBQUUsU0FBUyxVQUFVLENBQUMsS0FBSyxFQUFFO0FBQzdCLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxD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S0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxFQUFFLEVBQUUsVUFBVSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3RRLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDM0MsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QixNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMscUJBQXFCLEVBQUUsR0FBRyxLQUFLLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtBQUMzRSxRQUFRLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNuQixRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJ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
