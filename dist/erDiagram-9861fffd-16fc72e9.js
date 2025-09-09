'use strict';

var index = require('./index-deb671d6.js');
var graph = require('./graph-4ff464ab.js');
var layout = require('./layout-d88296cc.js');
require('./main-5c8f274d.js');
var line = require('./line-891b5b35.js');
require('obsidian');
require('./array-aca279a4.js');
require('./path-29c5310d.js');

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function parse(uuid) {
  if (!validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = parse(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return unsafeStringify(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

const v5 = v35('v5', 0x50, sha1);
var v5$1 = v5;

var parser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [6, 8, 10, 20, 22, 24, 26, 27, 28], $V1 = [1, 10], $V2 = [1, 11], $V3 = [1, 12], $V4 = [1, 13], $V5 = [1, 14], $V6 = [1, 15], $V7 = [1, 21], $V8 = [1, 22], $V9 = [1, 23], $Va = [1, 24], $Vb = [1, 25], $Vc = [6, 8, 10, 13, 15, 18, 19, 20, 22, 24, 26, 27, 28, 41, 42, 43, 44, 45], $Vd = [1, 34], $Ve = [27, 28, 46, 47], $Vf = [41, 42, 43, 44, 45], $Vg = [17, 34], $Vh = [1, 54], $Vi = [1, 53], $Vj = [17, 34, 36, 38];
  var parser2 = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "start": 3, "ER_DIAGRAM": 4, "document": 5, "EOF": 6, "line": 7, "SPACE": 8, "statement": 9, "NEWLINE": 10, "entityName": 11, "relSpec": 12, ":": 13, "role": 14, "BLOCK_START": 15, "attributes": 16, "BLOCK_STOP": 17, "SQS": 18, "SQE": 19, "title": 20, "title_value": 21, "acc_title": 22, "acc_title_value": 23, "acc_descr": 24, "acc_descr_value": 25, "acc_descr_multiline_value": 26, "ALPHANUM": 27, "ENTITY_NAME": 28, "attribute": 29, "attributeType": 30, "attributeName": 31, "attributeKeyTypeList": 32, "attributeComment": 33, "ATTRIBUTE_WORD": 34, "attributeKeyType": 35, "COMMA": 36, "ATTRIBUTE_KEY": 37, "COMMENT": 38, "cardinality": 39, "relType": 40, "ZERO_OR_ONE": 41, "ZERO_OR_MORE": 42, "ONE_OR_MORE": 43, "ONLY_ONE": 44, "MD_PARENT": 45, "NON_IDENTIFYING": 46, "IDENTIFYING": 47, "WORD": 48, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 4: "ER_DIAGRAM", 6: "EOF", 8: "SPACE", 10: "NEWLINE", 13: ":", 15: "BLOCK_START", 17: "BLOCK_STOP", 18: "SQS", 19: "SQE", 20: "title", 21: "title_value", 22: "acc_title", 23: "acc_title_value", 24: "acc_descr", 25: "acc_descr_value", 26: "acc_descr_multiline_value", 27: "ALPHANUM", 28: "ENTITY_NAME", 34: "ATTRIBUTE_WORD", 36: "COMMA", 37: "ATTRIBUTE_KEY", 38: "COMMENT", 41: "ZERO_OR_ONE", 42: "ZERO_OR_MORE", 43: "ONE_OR_MORE", 44: "ONLY_ONE", 45: "MD_PARENT", 46: "NON_IDENTIFYING", 47: "IDENTIFYING", 48: "WORD" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 5], [9, 4], [9, 3], [9, 1], [9, 7], [9, 6], [9, 4], [9, 2], [9, 2], [9, 2], [9, 1], [11, 1], [11, 1], [16, 1], [16, 2], [29, 2], [29, 3], [29, 3], [29, 4], [30, 1], [31, 1], [32, 1], [32, 3], [35, 1], [33, 1], [12, 3], [39, 1], [39, 1], [39, 1], [39, 1], [39, 1], [40, 1], [40, 1], [14, 1], [14, 1], [14, 1]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 1:
          break;
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
          yy.addEntity($$[$0 - 4]);
          yy.addEntity($$[$0 - 2]);
          yy.addRelationship($$[$0 - 4], $$[$0], $$[$0 - 2], $$[$0 - 3]);
          break;
        case 9:
          yy.addEntity($$[$0 - 3]);
          yy.addAttributes($$[$0 - 3], $$[$0 - 1]);
          break;
        case 10:
          yy.addEntity($$[$0 - 2]);
          break;
        case 11:
          yy.addEntity($$[$0]);
          break;
        case 12:
          yy.addEntity($$[$0 - 6], $$[$0 - 4]);
          yy.addAttributes($$[$0 - 6], $$[$0 - 1]);
          break;
        case 13:
          yy.addEntity($$[$0 - 5], $$[$0 - 3]);
          break;
        case 14:
          yy.addEntity($$[$0 - 3], $$[$0 - 1]);
          break;
        case 15:
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
        case 43:
          this.$ = $$[$0];
          break;
        case 20:
        case 41:
        case 42:
          this.$ = $$[$0].replace(/"/g, "");
          break;
        case 21:
        case 29:
          this.$ = [$$[$0]];
          break;
        case 22:
          $$[$0].push($$[$0 - 1]);
          this.$ = $$[$0];
          break;
        case 23:
          this.$ = { attributeType: $$[$0 - 1], attributeName: $$[$0] };
          break;
        case 24:
          this.$ = { attributeType: $$[$0 - 2], attributeName: $$[$0 - 1], attributeKeyTypeList: $$[$0] };
          break;
        case 25:
          this.$ = { attributeType: $$[$0 - 2], attributeName: $$[$0 - 1], attributeComment: $$[$0] };
          break;
        case 26:
          this.$ = { attributeType: $$[$0 - 3], attributeName: $$[$0 - 2], attributeKeyTypeList: $$[$0 - 1], attributeComment: $$[$0] };
          break;
        case 27:
        case 28:
        case 31:
          this.$ = $$[$0];
          break;
        case 30:
          $$[$0 - 2].push($$[$0]);
          this.$ = $$[$0 - 2];
          break;
        case 32:
          this.$ = $$[$0].replace(/"/g, "");
          break;
        case 33:
          this.$ = { cardA: $$[$0], relType: $$[$0 - 1], cardB: $$[$0 - 2] };
          break;
        case 34:
          this.$ = yy.Cardinality.ZERO_OR_ONE;
          break;
        case 35:
          this.$ = yy.Cardinality.ZERO_OR_MORE;
          break;
        case 36:
          this.$ = yy.Cardinality.ONE_OR_MORE;
          break;
        case 37:
          this.$ = yy.Cardinality.ONLY_ONE;
          break;
        case 38:
          this.$ = yy.Cardinality.MD_PARENT;
          break;
        case 39:
          this.$ = yy.Identification.NON_IDENTIFYING;
          break;
        case 40:
          this.$ = yy.Identification.IDENTIFYING;
          break;
      }
    },
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, o($V0, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: 9, 20: $V1, 22: $V2, 24: $V3, 26: $V4, 27: $V5, 28: $V6 }, o($V0, [2, 7], { 1: [2, 1] }), o($V0, [2, 3]), { 9: 16, 11: 9, 20: $V1, 22: $V2, 24: $V3, 26: $V4, 27: $V5, 28: $V6 }, o($V0, [2, 5]), o($V0, [2, 6]), o($V0, [2, 11], { 12: 17, 39: 20, 15: [1, 18], 18: [1, 19], 41: $V7, 42: $V8, 43: $V9, 44: $Va, 45: $Vb }), { 21: [1, 26] }, { 23: [1, 27] }, { 25: [1, 28] }, o($V0, [2, 18]), o($Vc, [2, 19]), o($Vc, [2, 20]), o($V0, [2, 4]), { 11: 29, 27: $V5, 28: $V6 }, { 16: 30, 17: [1, 31], 29: 32, 30: 33, 34: $Vd }, { 11: 35, 27: $V5, 28: $V6 }, { 40: 36, 46: [1, 37], 47: [1, 38] }, o($Ve, [2, 34]), o($Ve, [2, 35]), o($Ve, [2, 36]), o($Ve, [2, 37]), o($Ve, [2, 38]), o($V0, [2, 15]), o($V0, [2, 16]), o($V0, [2, 17]), { 13: [1, 39] }, { 17: [1, 40] }, o($V0, [2, 10]), { 16: 41, 17: [2, 21], 29: 32, 30: 33, 34: $Vd }, { 31: 42, 34: [1, 43] }, { 34: [2, 27] }, { 19: [1, 44] }, { 39: 45, 41: $V7, 42: $V8, 43: $V9, 44: $Va, 45: $Vb }, o($Vf, [2, 39]), o($Vf, [2, 40]), { 14: 46, 27: [1, 49], 28: [1, 48], 48: [1, 47] }, o($V0, [2, 9]), { 17: [2, 22] }, o($Vg, [2, 23], { 32: 50, 33: 51, 35: 52, 37: $Vh, 38: $Vi }), o([17, 34, 37, 38], [2, 28]), o($V0, [2, 14], { 15: [1, 55] }), o([27, 28], [2, 33]), o($V0, [2, 8]), o($V0, [2, 41]), o($V0, [2, 42]), o($V0, [2, 43]), o($Vg, [2, 24], { 33: 56, 36: [1, 57], 38: $Vi }), o($Vg, [2, 25]), o($Vj, [2, 29]), o($Vg, [2, 32]), o($Vj, [2, 31]), { 16: 58, 17: [1, 59], 29: 32, 30: 33, 34: $Vd }, o($Vg, [2, 26]), { 35: 60, 37: $Vh }, { 17: [1, 61] }, o($V0, [2, 13]), o($Vj, [2, 30]), o($V0, [2, 12])],
    defaultActions: { 34: [2, 27], 41: [2, 22] },
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
            this.begin("acc_title");
            return 22;
          case 1:
            this.popState();
            return "acc_title_value";
          case 2:
            this.begin("acc_descr");
            return 24;
          case 3:
            this.popState();
            return "acc_descr_value";
          case 4:
            this.begin("acc_descr_multiline");
            break;
          case 5:
            this.popState();
            break;
          case 6:
            return "acc_descr_multiline_value";
          case 7:
            return 10;
          case 8:
            break;
          case 9:
            return 8;
          case 10:
            return 28;
          case 11:
            return 48;
          case 12:
            return 4;
          case 13:
            this.begin("block");
            return 15;
          case 14:
            return 36;
          case 15:
            break;
          case 16:
            return 37;
          case 17:
            return 34;
          case 18:
            return 34;
          case 19:
            return 38;
          case 20:
            break;
          case 21:
            this.popState();
            return 17;
          case 22:
            return yy_.yytext[0];
          case 23:
            return 18;
          case 24:
            return 19;
          case 25:
            return 41;
          case 26:
            return 43;
          case 27:
            return 43;
          case 28:
            return 43;
          case 29:
            return 41;
          case 30:
            return 41;
          case 31:
            return 42;
          case 32:
            return 42;
          case 33:
            return 42;
          case 34:
            return 42;
          case 35:
            return 42;
          case 36:
            return 43;
          case 37:
            return 42;
          case 38:
            return 43;
          case 39:
            return 44;
          case 40:
            return 44;
          case 41:
            return 44;
          case 42:
            return 44;
          case 43:
            return 41;
          case 44:
            return 42;
          case 45:
            return 43;
          case 46:
            return 45;
          case 47:
            return 46;
          case 48:
            return 47;
          case 49:
            return 47;
          case 50:
            return 46;
          case 51:
            return 46;
          case 52:
            return 46;
          case 53:
            return 27;
          case 54:
            return yy_.yytext[0];
          case 55:
            return 6;
        }
      },
      rules: [/^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:[\s]+)/i, /^(?:"[^"%\r\n\v\b\\]+")/i, /^(?:"[^"]*")/i, /^(?:erDiagram\b)/i, /^(?:\{)/i, /^(?:,)/i, /^(?:\s+)/i, /^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i, /^(?:(.*?)[~](.*?)*[~])/i, /^(?:[\*A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i, /^(?:"[^"]*")/i, /^(?:[\n]+)/i, /^(?:\})/i, /^(?:.)/i, /^(?:\[)/i, /^(?:\])/i, /^(?:one or zero\b)/i, /^(?:one or more\b)/i, /^(?:one or many\b)/i, /^(?:1\+)/i, /^(?:\|o\b)/i, /^(?:zero or one\b)/i, /^(?:zero or more\b)/i, /^(?:zero or many\b)/i, /^(?:0\+)/i, /^(?:\}o\b)/i, /^(?:many\(0\))/i, /^(?:many\(1\))/i, /^(?:many\b)/i, /^(?:\}\|)/i, /^(?:one\b)/i, /^(?:only one\b)/i, /^(?:1\b)/i, /^(?:\|\|)/i, /^(?:o\|)/i, /^(?:o\{)/i, /^(?:\|\{)/i, /^(?:\s*u\b)/i, /^(?:\.\.)/i, /^(?:--)/i, /^(?:to\b)/i, /^(?:optionally to\b)/i, /^(?:\.-)/i, /^(?:-\.)/i, /^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i, /^(?:.)/i, /^(?:$)/i],
      conditions: { "acc_descr_multiline": { "rules": [5, 6], "inclusive": false }, "acc_descr": { "rules": [3], "inclusive": false }, "acc_title": { "rules": [1], "inclusive": false }, "block": { "rules": [14, 15, 16, 17, 18, 19, 20, 21, 22], "inclusive": false }, "INITIAL": { "rules": [0, 2, 4, 7, 8, 9, 10, 11, 12, 13, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55], "inclusive": true } }
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
const erParser = parser;
let entities = {};
let relationships = [];
const Cardinality = {
  ZERO_OR_ONE: "ZERO_OR_ONE",
  ZERO_OR_MORE: "ZERO_OR_MORE",
  ONE_OR_MORE: "ONE_OR_MORE",
  ONLY_ONE: "ONLY_ONE",
  MD_PARENT: "MD_PARENT"
};
const Identification = {
  NON_IDENTIFYING: "NON_IDENTIFYING",
  IDENTIFYING: "IDENTIFYING"
};
const addEntity = function(name, alias = void 0) {
  if (entities[name] === void 0) {
    entities[name] = { attributes: [], alias };
    index.log$1.info("Added new entity :", name);
  } else if (entities[name] && !entities[name].alias && alias) {
    entities[name].alias = alias;
    index.log$1.info(`Add alias '${alias}' to entity '${name}'`);
  }
  return entities[name];
};
const getEntities = () => entities;
const addAttributes = function(entityName, attribs) {
  let entity = addEntity(entityName);
  let i;
  for (i = attribs.length - 1; i >= 0; i--) {
    entity.attributes.push(attribs[i]);
    index.log$1.debug("Added attribute ", attribs[i].attributeName);
  }
};
const addRelationship = function(entA, rolA, entB, rSpec) {
  let rel = {
    entityA: entA,
    roleA: rolA,
    entityB: entB,
    relSpec: rSpec
  };
  relationships.push(rel);
  index.log$1.debug("Added new relationship :", rel);
};
const getRelationships = () => relationships;
const clear = function() {
  entities = {};
  relationships = [];
  index.clear();
};
const erDb = {
  Cardinality,
  Identification,
  getConfig: () => index.getConfig().er,
  addEntity,
  addAttributes,
  getEntities,
  addRelationship,
  getRelationships,
  clear,
  setAccTitle: index.setAccTitle,
  getAccTitle: index.getAccTitle,
  setAccDescription: index.setAccDescription,
  getAccDescription: index.getAccDescription,
  setDiagramTitle: index.setDiagramTitle,
  getDiagramTitle: index.getDiagramTitle
};
const ERMarkers = {
  ONLY_ONE_START: "ONLY_ONE_START",
  ONLY_ONE_END: "ONLY_ONE_END",
  ZERO_OR_ONE_START: "ZERO_OR_ONE_START",
  ZERO_OR_ONE_END: "ZERO_OR_ONE_END",
  ONE_OR_MORE_START: "ONE_OR_MORE_START",
  ONE_OR_MORE_END: "ONE_OR_MORE_END",
  ZERO_OR_MORE_START: "ZERO_OR_MORE_START",
  ZERO_OR_MORE_END: "ZERO_OR_MORE_END",
  MD_PARENT_END: "MD_PARENT_END",
  MD_PARENT_START: "MD_PARENT_START"
};
const insertMarkers = function(elem, conf2) {
  let marker;
  elem.append("defs").append("marker").attr("id", ERMarkers.MD_PARENT_START).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", ERMarkers.MD_PARENT_END).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", ERMarkers.ONLY_ONE_START).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("stroke", conf2.stroke).attr("fill", "none").attr("d", "M9,0 L9,18 M15,0 L15,18");
  elem.append("defs").append("marker").attr("id", ERMarkers.ONLY_ONE_END).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("stroke", conf2.stroke).attr("fill", "none").attr("d", "M3,0 L3,18 M9,0 L9,18");
  marker = elem.append("defs").append("marker").attr("id", ERMarkers.ZERO_OR_ONE_START).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  marker.append("circle").attr("stroke", conf2.stroke).attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6);
  marker.append("path").attr("stroke", conf2.stroke).attr("fill", "none").attr("d", "M9,0 L9,18");
  marker = elem.append("defs").append("marker").attr("id", ERMarkers.ZERO_OR_ONE_END).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  marker.append("circle").attr("stroke", conf2.stroke).attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6);
  marker.append("path").attr("stroke", conf2.stroke).attr("fill", "none").attr("d", "M21,0 L21,18");
  elem.append("defs").append("marker").attr("id", ERMarkers.ONE_OR_MORE_START).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("stroke", conf2.stroke).attr("fill", "none").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27");
  elem.append("defs").append("marker").attr("id", ERMarkers.ONE_OR_MORE_END).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("stroke", conf2.stroke).attr("fill", "none").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
  marker = elem.append("defs").append("marker").attr("id", ERMarkers.ZERO_OR_MORE_START).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  marker.append("circle").attr("stroke", conf2.stroke).attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6);
  marker.append("path").attr("stroke", conf2.stroke).attr("fill", "none").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
  marker = elem.append("defs").append("marker").attr("id", ERMarkers.ZERO_OR_MORE_END).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  marker.append("circle").attr("stroke", conf2.stroke).attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6);
  marker.append("path").attr("stroke", conf2.stroke).attr("fill", "none").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
  return;
};
const erMarkers = {
  ERMarkers,
  insertMarkers
};
const BAD_ID_CHARS_REGEXP = /[^\dA-Za-z](\W)*/g;
let conf = {};
let entityNameIds = /* @__PURE__ */ new Map();
const setConf = function(cnf) {
  const keys = Object.keys(cnf);
  for (const key of keys) {
    conf[key] = cnf[key];
  }
};
const drawAttributes = (groupNode, entityTextNode, attributes) => {
  const heightPadding = conf.entityPadding / 3;
  const widthPadding = conf.entityPadding / 3;
  const attrFontSize = conf.fontSize * 0.85;
  const labelBBox = entityTextNode.node().getBBox();
  const attributeNodes = [];
  let hasKeyType = false;
  let hasComment = false;
  let maxTypeWidth = 0;
  let maxNameWidth = 0;
  let maxKeyWidth = 0;
  let maxCommentWidth = 0;
  let cumulativeHeight = labelBBox.height + heightPadding * 2;
  let attrNum = 1;
  attributes.forEach((item) => {
    if (item.attributeKeyTypeList !== void 0 && item.attributeKeyTypeList.length > 0) {
      hasKeyType = true;
    }
    if (item.attributeComment !== void 0) {
      hasComment = true;
    }
  });
  attributes.forEach((item) => {
    const attrPrefix = `${entityTextNode.node().id}-attr-${attrNum}`;
    let nodeHeight = 0;
    const attributeType = index.parseGenericTypes(item.attributeType);
    const typeNode = groupNode.append("text").classed("er entityLabel", true).attr("id", `${attrPrefix}-type`).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "left").style("font-family", index.getConfig().fontFamily).style("font-size", attrFontSize + "px").text(attributeType);
    const nameNode = groupNode.append("text").classed("er entityLabel", true).attr("id", `${attrPrefix}-name`).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "left").style("font-family", index.getConfig().fontFamily).style("font-size", attrFontSize + "px").text(item.attributeName);
    const attributeNode = {};
    attributeNode.tn = typeNode;
    attributeNode.nn = nameNode;
    const typeBBox = typeNode.node().getBBox();
    const nameBBox = nameNode.node().getBBox();
    maxTypeWidth = Math.max(maxTypeWidth, typeBBox.width);
    maxNameWidth = Math.max(maxNameWidth, nameBBox.width);
    nodeHeight = Math.max(typeBBox.height, nameBBox.height);
    if (hasKeyType) {
      const keyTypeNodeText = item.attributeKeyTypeList !== void 0 ? item.attributeKeyTypeList.join(",") : "";
      const keyTypeNode = groupNode.append("text").classed("er entityLabel", true).attr("id", `${attrPrefix}-key`).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "left").style("font-family", index.getConfig().fontFamily).style("font-size", attrFontSize + "px").text(keyTypeNodeText);
      attributeNode.kn = keyTypeNode;
      const keyTypeBBox = keyTypeNode.node().getBBox();
      maxKeyWidth = Math.max(maxKeyWidth, keyTypeBBox.width);
      nodeHeight = Math.max(nodeHeight, keyTypeBBox.height);
    }
    if (hasComment) {
      const commentNode = groupNode.append("text").classed("er entityLabel", true).attr("id", `${attrPrefix}-comment`).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "left").style("font-family", index.getConfig().fontFamily).style("font-size", attrFontSize + "px").text(item.attributeComment || "");
      attributeNode.cn = commentNode;
      const commentNodeBBox = commentNode.node().getBBox();
      maxCommentWidth = Math.max(maxCommentWidth, commentNodeBBox.width);
      nodeHeight = Math.max(nodeHeight, commentNodeBBox.height);
    }
    attributeNode.height = nodeHeight;
    attributeNodes.push(attributeNode);
    cumulativeHeight += nodeHeight + heightPadding * 2;
    attrNum += 1;
  });
  let widthPaddingFactor = 4;
  if (hasKeyType) {
    widthPaddingFactor += 2;
  }
  if (hasComment) {
    widthPaddingFactor += 2;
  }
  const maxWidth = maxTypeWidth + maxNameWidth + maxKeyWidth + maxCommentWidth;
  const bBox = {
    width: Math.max(
      conf.minEntityWidth,
      Math.max(
        labelBBox.width + conf.entityPadding * 2,
        maxWidth + widthPadding * widthPaddingFactor
      )
    ),
    height: attributes.length > 0 ? cumulativeHeight : Math.max(conf.minEntityHeight, labelBBox.height + conf.entityPadding * 2)
  };
  if (attributes.length > 0) {
    const spareColumnWidth = Math.max(
      0,
      (bBox.width - maxWidth - widthPadding * widthPaddingFactor) / (widthPaddingFactor / 2)
    );
    entityTextNode.attr(
      "transform",
      "translate(" + bBox.width / 2 + "," + (heightPadding + labelBBox.height / 2) + ")"
    );
    let heightOffset = labelBBox.height + heightPadding * 2;
    let attribStyle = "attributeBoxOdd";
    attributeNodes.forEach((attributeNode) => {
      const alignY = heightOffset + heightPadding + attributeNode.height / 2;
      attributeNode.tn.attr("transform", "translate(" + widthPadding + "," + alignY + ")");
      const typeRect = groupNode.insert("rect", "#" + attributeNode.tn.node().id).classed(`er ${attribStyle}`, true).attr("x", 0).attr("y", heightOffset).attr("width", maxTypeWidth + widthPadding * 2 + spareColumnWidth).attr("height", attributeNode.height + heightPadding * 2);
      const nameXOffset = parseFloat(typeRect.attr("x")) + parseFloat(typeRect.attr("width"));
      attributeNode.nn.attr(
        "transform",
        "translate(" + (nameXOffset + widthPadding) + "," + alignY + ")"
      );
      const nameRect = groupNode.insert("rect", "#" + attributeNode.nn.node().id).classed(`er ${attribStyle}`, true).attr("x", nameXOffset).attr("y", heightOffset).attr("width", maxNameWidth + widthPadding * 2 + spareColumnWidth).attr("height", attributeNode.height + heightPadding * 2);
      let keyTypeAndCommentXOffset = parseFloat(nameRect.attr("x")) + parseFloat(nameRect.attr("width"));
      if (hasKeyType) {
        attributeNode.kn.attr(
          "transform",
          "translate(" + (keyTypeAndCommentXOffset + widthPadding) + "," + alignY + ")"
        );
        const keyTypeRect = groupNode.insert("rect", "#" + attributeNode.kn.node().id).classed(`er ${attribStyle}`, true).attr("x", keyTypeAndCommentXOffset).attr("y", heightOffset).attr("width", maxKeyWidth + widthPadding * 2 + spareColumnWidth).attr("height", attributeNode.height + heightPadding * 2);
        keyTypeAndCommentXOffset = parseFloat(keyTypeRect.attr("x")) + parseFloat(keyTypeRect.attr("width"));
      }
      if (hasComment) {
        attributeNode.cn.attr(
          "transform",
          "translate(" + (keyTypeAndCommentXOffset + widthPadding) + "," + alignY + ")"
        );
        groupNode.insert("rect", "#" + attributeNode.cn.node().id).classed(`er ${attribStyle}`, "true").attr("x", keyTypeAndCommentXOffset).attr("y", heightOffset).attr("width", maxCommentWidth + widthPadding * 2 + spareColumnWidth).attr("height", attributeNode.height + heightPadding * 2);
      }
      heightOffset += attributeNode.height + heightPadding * 2;
      attribStyle = attribStyle === "attributeBoxOdd" ? "attributeBoxEven" : "attributeBoxOdd";
    });
  } else {
    bBox.height = Math.max(conf.minEntityHeight, cumulativeHeight);
    entityTextNode.attr("transform", "translate(" + bBox.width / 2 + "," + bBox.height / 2 + ")");
  }
  return bBox;
};
const drawEntities = function(svgNode, entities2, graph) {
  const keys = Object.keys(entities2);
  let firstOne;
  keys.forEach(function(entityName) {
    const entityId = generateId(entityName, "entity");
    entityNameIds.set(entityName, entityId);
    const groupNode = svgNode.append("g").attr("id", entityId);
    firstOne = firstOne === void 0 ? entityId : firstOne;
    const textId = "text-" + entityId;
    const textNode = groupNode.append("text").classed("er entityLabel", true).attr("id", textId).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "middle").style("font-family", index.getConfig().fontFamily).style("font-size", conf.fontSize + "px").text(entities2[entityName].alias ?? entityName);
    const { width: entityWidth, height: entityHeight } = drawAttributes(
      groupNode,
      textNode,
      entities2[entityName].attributes
    );
    const rectNode = groupNode.insert("rect", "#" + textId).classed("er entityBox", true).attr("x", 0).attr("y", 0).attr("width", entityWidth).attr("height", entityHeight);
    const rectBBox = rectNode.node().getBBox();
    graph.setNode(entityId, {
      width: rectBBox.width,
      height: rectBBox.height,
      shape: "rect",
      id: entityId
    });
  });
  return firstOne;
};
const adjustEntities = function(svgNode, graph) {
  graph.nodes().forEach(function(v) {
    if (v !== void 0 && graph.node(v) !== void 0) {
      svgNode.select("#" + v).attr(
        "transform",
        "translate(" + (graph.node(v).x - graph.node(v).width / 2) + "," + (graph.node(v).y - graph.node(v).height / 2) + " )"
      );
    }
  });
};
const getEdgeName = function(rel) {
  return (rel.entityA + rel.roleA + rel.entityB).replace(/\s/g, "");
};
const addRelationships = function(relationships2, g) {
  relationships2.forEach(function(r) {
    g.setEdge(
      entityNameIds.get(r.entityA),
      entityNameIds.get(r.entityB),
      { relationship: r },
      getEdgeName(r)
    );
  });
  return relationships2;
};
let relCnt = 0;
const drawRelationshipFromLayout = function(svg, rel, g, insert, diagObj) {
  relCnt++;
  const edge = g.edge(
    entityNameIds.get(rel.entityA),
    entityNameIds.get(rel.entityB),
    getEdgeName(rel)
  );
  const lineFunction = line.line().x(function(d) {
    return d.x;
  }).y(function(d) {
    return d.y;
  }).curve(index.curveBasis);
  const svgPath = svg.insert("path", "#" + insert).classed("er relationshipLine", true).attr("d", lineFunction(edge.points)).style("stroke", conf.stroke).style("fill", "none");
  if (rel.relSpec.relType === diagObj.db.Identification.NON_IDENTIFYING) {
    svgPath.attr("stroke-dasharray", "8,8");
  }
  let url = "";
  if (conf.arrowMarkerAbsolute) {
    url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
    url = url.replace(/\(/g, "\\(");
    url = url.replace(/\)/g, "\\)");
  }
  switch (rel.relSpec.cardA) {
    case diagObj.db.Cardinality.ZERO_OR_ONE:
      svgPath.attr("marker-end", "url(" + url + "#" + erMarkers.ERMarkers.ZERO_OR_ONE_END + ")");
      break;
    case diagObj.db.Cardinality.ZERO_OR_MORE:
      svgPath.attr("marker-end", "url(" + url + "#" + erMarkers.ERMarkers.ZERO_OR_MORE_END + ")");
      break;
    case diagObj.db.Cardinality.ONE_OR_MORE:
      svgPath.attr("marker-end", "url(" + url + "#" + erMarkers.ERMarkers.ONE_OR_MORE_END + ")");
      break;
    case diagObj.db.Cardinality.ONLY_ONE:
      svgPath.attr("marker-end", "url(" + url + "#" + erMarkers.ERMarkers.ONLY_ONE_END + ")");
      break;
    case diagObj.db.Cardinality.MD_PARENT:
      svgPath.attr("marker-end", "url(" + url + "#" + erMarkers.ERMarkers.MD_PARENT_END + ")");
      break;
  }
  switch (rel.relSpec.cardB) {
    case diagObj.db.Cardinality.ZERO_OR_ONE:
      svgPath.attr(
        "marker-start",
        "url(" + url + "#" + erMarkers.ERMarkers.ZERO_OR_ONE_START + ")"
      );
      break;
    case diagObj.db.Cardinality.ZERO_OR_MORE:
      svgPath.attr(
        "marker-start",
        "url(" + url + "#" + erMarkers.ERMarkers.ZERO_OR_MORE_START + ")"
      );
      break;
    case diagObj.db.Cardinality.ONE_OR_MORE:
      svgPath.attr(
        "marker-start",
        "url(" + url + "#" + erMarkers.ERMarkers.ONE_OR_MORE_START + ")"
      );
      break;
    case diagObj.db.Cardinality.ONLY_ONE:
      svgPath.attr("marker-start", "url(" + url + "#" + erMarkers.ERMarkers.ONLY_ONE_START + ")");
      break;
    case diagObj.db.Cardinality.MD_PARENT:
      svgPath.attr("marker-start", "url(" + url + "#" + erMarkers.ERMarkers.MD_PARENT_START + ")");
      break;
  }
  const len = svgPath.node().getTotalLength();
  const labelPoint = svgPath.node().getPointAtLength(len * 0.5);
  const labelId = "rel" + relCnt;
  const labelNode = svg.append("text").classed("er relationshipLabel", true).attr("id", labelId).attr("x", labelPoint.x).attr("y", labelPoint.y).style("text-anchor", "middle").style("dominant-baseline", "middle").style("font-family", index.getConfig().fontFamily).style("font-size", conf.fontSize + "px").text(rel.roleA);
  const labelBBox = labelNode.node().getBBox();
  svg.insert("rect", "#" + labelId).classed("er relationshipLabelBox", true).attr("x", labelPoint.x - labelBBox.width / 2).attr("y", labelPoint.y - labelBBox.height / 2).attr("width", labelBBox.width).attr("height", labelBBox.height);
};
const draw = function(text, id, _version, diagObj) {
  conf = index.getConfig().er;
  index.log$1.info("Drawing ER diagram");
  const securityLevel = index.getConfig().securityLevel;
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = index.select("#i" + id);
  }
  const root = securityLevel === "sandbox" ? index.select(sandboxElement.nodes()[0].contentDocument.body) : index.select("body");
  const svg = root.select(`[id='${id}']`);
  erMarkers.insertMarkers(svg, conf);
  let g;
  g = new graph.Graph({
    multigraph: true,
    directed: true,
    compound: false
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
  const firstEntity = drawEntities(svg, diagObj.db.getEntities(), g);
  const relationships2 = addRelationships(diagObj.db.getRelationships(), g);
  layout.layout(g);
  adjustEntities(svg, g);
  relationships2.forEach(function(rel) {
    drawRelationshipFromLayout(svg, rel, g, firstEntity, diagObj);
  });
  const padding = conf.diagramPadding;
  index.utils.insertTitle(svg, "entityTitleText", conf.titleTopMargin, diagObj.db.getDiagramTitle());
  const svgBounds = svg.node().getBBox();
  const width = svgBounds.width + padding * 2;
  const height = svgBounds.height + padding * 2;
  index.configureSvgSize(svg, height, width, conf.useMaxWidth);
  svg.attr("viewBox", `${svgBounds.x - padding} ${svgBounds.y - padding} ${width} ${height}`);
};
const MERMAID_ERDIAGRAM_UUID = "28e9f9db-3c8d-5aa5-9faf-44286ae5937c";
function generateId(str = "", prefix = "") {
  const simplifiedStr = str.replace(BAD_ID_CHARS_REGEXP, "");
  return `${strWithHyphen(prefix)}${strWithHyphen(simplifiedStr)}${v5$1(
    str,
    MERMAID_ERDIAGRAM_UUID
  )}`;
}
function strWithHyphen(str = "") {
  return str.length > 0 ? `${str}-` : "";
}
const erRenderer = {
  setConf,
  draw
};
const getStyles = (options) => `
  .entityBox {
    fill: ${options.mainBkg};
    stroke: ${options.nodeBorder};
  }

  .attributeBoxOdd {
    fill: ${options.attributeBackgroundColorOdd};
    stroke: ${options.nodeBorder};
  }

  .attributeBoxEven {
    fill:  ${options.attributeBackgroundColorEven};
    stroke: ${options.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${options.tertiaryColor};
    opacity: 0.7;
    background-color: ${options.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

    .relationshipLine {
      stroke: ${options.lineColor};
    }

  .entityTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${options.textColor};
  }    
  #MD_PARENT_START {
    fill: #f5f5f5 !important;
    stroke: ${options.lineColor} !important;
    stroke-width: 1;
  }
  #MD_PARENT_END {
    fill: #f5f5f5 !important;
    stroke: ${options.lineColor} !important;
    stroke-width: 1;
  }
  
`;
const erStyles = getStyles;
const diagram = {
  parser: erParser,
  db: erDb,
  renderer: erRenderer,
  styles: erStyles
};

exports.diagram = diagram;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJEaWFncmFtLTk4NjFmZmZkLTE2ZmM3MmU5LmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9wYXJzZS5qcyIsIi4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjM1LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zaGExLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZXJtYWlkL2Rpc3QvZXJEaWFncmFtLTk4NjFmZmZkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiBieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5cbmZ1bmN0aW9uIHBhcnNlKHV1aWQpIHtcbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICBsZXQgdjtcbiAgY29uc3QgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlOyIsImltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmltcG9ydCBwYXJzZSBmcm9tICcuL3BhcnNlLmpzJztcblxuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpOyAvLyBVVEY4IGVzY2FwZVxuXG4gIGNvbnN0IGJ5dGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuZXhwb3J0IGNvbnN0IEROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IGNvbnN0IFVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdjM1KG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBfbmFtZXNwYWNlO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSBwYXJzZShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGlmICgoKF9uYW1lc3BhY2UgPSBuYW1lc3BhY2UpID09PSBudWxsIHx8IF9uYW1lc3BhY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9uYW1lc3BhY2UubGVuZ3RoKSAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH0gLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcblxuXG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZS5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2UpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZSwgbmFtZXNwYWNlLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoZnVuYyhieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICBjb25zdCBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICBjb25zdCBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIGNvbnN0IGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgY29uc3QgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICBjb25zdCBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgY29uc3QgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgYXJyW2pdID0gYnl0ZXNbaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuXG4gICAgTVtpXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICBjb25zdCBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgV1t0XSA9IE1baV1bdF07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgdCA9IDE2OyB0IDwgODA7ICsrdCkge1xuICAgICAgV1t0XSA9IFJPVEwoV1t0IC0gM10gXiBXW3QgLSA4XSBeIFdbdCAtIDE0XSBeIFdbdCAtIDE2XSwgMSk7XG4gICAgfVxuXG4gICAgbGV0IGEgPSBIWzBdO1xuICAgIGxldCBiID0gSFsxXTtcbiAgICBsZXQgYyA9IEhbMl07XG4gICAgbGV0IGQgPSBIWzNdO1xuICAgIGxldCBlID0gSFs0XTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgODA7ICsrdCkge1xuICAgICAgY29uc3QgcyA9IE1hdGguZmxvb3IodCAvIDIwKTtcbiAgICAgIGNvbnN0IFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1t0XSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGExOyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IHNoYTEgZnJvbSAnLi9zaGExLmpzJztcbmNvbnN0IHY1ID0gdjM1KCd2NScsIDB4NTAsIHNoYTEpO1xuZXhwb3J0IGRlZmF1bHQgdjU7IiwiaW1wb3J0IHsgYyBhcyBnZXRDb25maWcsIHMgYXMgc2V0QWNjVGl0bGUsIGcgYXMgZ2V0QWNjVGl0bGUsIGIgYXMgc2V0QWNjRGVzY3JpcHRpb24sIGEgYXMgZ2V0QWNjRGVzY3JpcHRpb24sIHEgYXMgc2V0RGlhZ3JhbVRpdGxlLCB0IGFzIGdldERpYWdyYW1UaXRsZSwgbCBhcyBsb2csIHYgYXMgY2xlYXIkMSwgdSBhcyB1dGlscywgaSBhcyBjb25maWd1cmVTdmdTaXplLCB4IGFzIHBhcnNlR2VuZXJpY1R5cGVzIH0gZnJvbSBcIi4vbWVybWFpZC1iNTg2MGI1NC5qc1wiO1xuaW1wb3J0ICogYXMgZ3JhcGhsaWIgZnJvbSBcImRhZ3JlLWQzLWVzL3NyYy9ncmFwaGxpYi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgc2VsZWN0LCBsaW5lLCBjdXJ2ZUJhc2lzIH0gZnJvbSBcImQzXCI7XG5pbXBvcnQgeyBsYXlvdXQgfSBmcm9tIFwiZGFncmUtZDMtZXMvc3JjL2RhZ3JlL2luZGV4LmpzXCI7XG5pbXBvcnQgeyB2NSB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgXCJ0cy1kZWRlbnRcIjtcbmltcG9ydCBcImRheWpzXCI7XG5pbXBvcnQgXCJAYnJhaW50cmVlL3Nhbml0aXplLXVybFwiO1xuaW1wb3J0IFwiZG9tcHVyaWZ5XCI7XG5pbXBvcnQgXCJraHJvbWFcIjtcbmltcG9ydCBcImxvZGFzaC1lcy9tZW1vaXplLmpzXCI7XG5pbXBvcnQgXCJsb2Rhc2gtZXMvbWVyZ2UuanNcIjtcbmltcG9ydCBcInN0eWxpc1wiO1xuaW1wb3J0IFwibG9kYXNoLWVzL2lzRW1wdHkuanNcIjtcbnZhciBwYXJzZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG8gPSBmdW5jdGlvbihrLCB2LCBvMiwgbCkge1xuICAgIGZvciAobzIgPSBvMiB8fCB7fSwgbCA9IGsubGVuZ3RoOyBsLS07IG8yW2tbbF1dID0gdilcbiAgICAgIDtcbiAgICByZXR1cm4gbzI7XG4gIH0sICRWMCA9IFs2LCA4LCAxMCwgMjAsIDIyLCAyNCwgMjYsIDI3LCAyOF0sICRWMSA9IFsxLCAxMF0sICRWMiA9IFsxLCAxMV0sICRWMyA9IFsxLCAxMl0sICRWNCA9IFsxLCAxM10sICRWNSA9IFsxLCAxNF0sICRWNiA9IFsxLCAxNV0sICRWNyA9IFsxLCAyMV0sICRWOCA9IFsxLCAyMl0sICRWOSA9IFsxLCAyM10sICRWYSA9IFsxLCAyNF0sICRWYiA9IFsxLCAyNV0sICRWYyA9IFs2LCA4LCAxMCwgMTMsIDE1LCAxOCwgMTksIDIwLCAyMiwgMjQsIDI2LCAyNywgMjgsIDQxLCA0MiwgNDMsIDQ0LCA0NV0sICRWZCA9IFsxLCAzNF0sICRWZSA9IFsyNywgMjgsIDQ2LCA0N10sICRWZiA9IFs0MSwgNDIsIDQzLCA0NCwgNDVdLCAkVmcgPSBbMTcsIDM0XSwgJFZoID0gWzEsIDU0XSwgJFZpID0gWzEsIDUzXSwgJFZqID0gWzE3LCAzNCwgMzYsIDM4XTtcbiAgdmFyIHBhcnNlcjIgPSB7XG4gICAgdHJhY2U6IGZ1bmN0aW9uIHRyYWNlKCkge1xuICAgIH0sXG4gICAgeXk6IHt9LFxuICAgIHN5bWJvbHNfOiB7IFwiZXJyb3JcIjogMiwgXCJzdGFydFwiOiAzLCBcIkVSX0RJQUdSQU1cIjogNCwgXCJkb2N1bWVudFwiOiA1LCBcIkVPRlwiOiA2LCBcImxpbmVcIjogNywgXCJTUEFDRVwiOiA4LCBcInN0YXRlbWVudFwiOiA5LCBcIk5FV0xJTkVcIjogMTAsIFwiZW50aXR5TmFtZVwiOiAxMSwgXCJyZWxTcGVjXCI6IDEyLCBcIjpcIjogMTMsIFwicm9sZVwiOiAxNCwgXCJCTE9DS19TVEFSVFwiOiAxNSwgXCJhdHRyaWJ1dGVzXCI6IDE2LCBcIkJMT0NLX1NUT1BcIjogMTcsIFwiU1FTXCI6IDE4LCBcIlNRRVwiOiAxOSwgXCJ0aXRsZVwiOiAyMCwgXCJ0aXRsZV92YWx1ZVwiOiAyMSwgXCJhY2NfdGl0bGVcIjogMjIsIFwiYWNjX3RpdGxlX3ZhbHVlXCI6IDIzLCBcImFjY19kZXNjclwiOiAyNCwgXCJhY2NfZGVzY3JfdmFsdWVcIjogMjUsIFwiYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZVwiOiAyNiwgXCJBTFBIQU5VTVwiOiAyNywgXCJFTlRJVFlfTkFNRVwiOiAyOCwgXCJhdHRyaWJ1dGVcIjogMjksIFwiYXR0cmlidXRlVHlwZVwiOiAzMCwgXCJhdHRyaWJ1dGVOYW1lXCI6IDMxLCBcImF0dHJpYnV0ZUtleVR5cGVMaXN0XCI6IDMyLCBcImF0dHJpYnV0ZUNvbW1lbnRcIjogMzMsIFwiQVRUUklCVVRFX1dPUkRcIjogMzQsIFwiYXR0cmlidXRlS2V5VHlwZVwiOiAzNSwgXCJDT01NQVwiOiAzNiwgXCJBVFRSSUJVVEVfS0VZXCI6IDM3LCBcIkNPTU1FTlRcIjogMzgsIFwiY2FyZGluYWxpdHlcIjogMzksIFwicmVsVHlwZVwiOiA0MCwgXCJaRVJPX09SX09ORVwiOiA0MSwgXCJaRVJPX09SX01PUkVcIjogNDIsIFwiT05FX09SX01PUkVcIjogNDMsIFwiT05MWV9PTkVcIjogNDQsIFwiTURfUEFSRU5UXCI6IDQ1LCBcIk5PTl9JREVOVElGWUlOR1wiOiA0NiwgXCJJREVOVElGWUlOR1wiOiA0NywgXCJXT1JEXCI6IDQ4LCBcIiRhY2NlcHRcIjogMCwgXCIkZW5kXCI6IDEgfSxcbiAgICB0ZXJtaW5hbHNfOiB7IDI6IFwiZXJyb3JcIiwgNDogXCJFUl9ESUFHUkFNXCIsIDY6IFwiRU9GXCIsIDg6IFwiU1BBQ0VcIiwgMTA6IFwiTkVXTElORVwiLCAxMzogXCI6XCIsIDE1OiBcIkJMT0NLX1NUQVJUXCIsIDE3OiBcIkJMT0NLX1NUT1BcIiwgMTg6IFwiU1FTXCIsIDE5OiBcIlNRRVwiLCAyMDogXCJ0aXRsZVwiLCAyMTogXCJ0aXRsZV92YWx1ZVwiLCAyMjogXCJhY2NfdGl0bGVcIiwgMjM6IFwiYWNjX3RpdGxlX3ZhbHVlXCIsIDI0OiBcImFjY19kZXNjclwiLCAyNTogXCJhY2NfZGVzY3JfdmFsdWVcIiwgMjY6IFwiYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZVwiLCAyNzogXCJBTFBIQU5VTVwiLCAyODogXCJFTlRJVFlfTkFNRVwiLCAzNDogXCJBVFRSSUJVVEVfV09SRFwiLCAzNjogXCJDT01NQVwiLCAzNzogXCJBVFRSSUJVVEVfS0VZXCIsIDM4OiBcIkNPTU1FTlRcIiwgNDE6IFwiWkVST19PUl9PTkVcIiwgNDI6IFwiWkVST19PUl9NT1JFXCIsIDQzOiBcIk9ORV9PUl9NT1JFXCIsIDQ0OiBcIk9OTFlfT05FXCIsIDQ1OiBcIk1EX1BBUkVOVFwiLCA0NjogXCJOT05fSURFTlRJRllJTkdcIiwgNDc6IFwiSURFTlRJRllJTkdcIiwgNDg6IFwiV09SRFwiIH0sXG4gICAgcHJvZHVjdGlvbnNfOiBbMCwgWzMsIDNdLCBbNSwgMF0sIFs1LCAyXSwgWzcsIDJdLCBbNywgMV0sIFs3LCAxXSwgWzcsIDFdLCBbOSwgNV0sIFs5LCA0XSwgWzksIDNdLCBbOSwgMV0sIFs5LCA3XSwgWzksIDZdLCBbOSwgNF0sIFs5LCAyXSwgWzksIDJdLCBbOSwgMl0sIFs5LCAxXSwgWzExLCAxXSwgWzExLCAxXSwgWzE2LCAxXSwgWzE2LCAyXSwgWzI5LCAyXSwgWzI5LCAzXSwgWzI5LCAzXSwgWzI5LCA0XSwgWzMwLCAxXSwgWzMxLCAxXSwgWzMyLCAxXSwgWzMyLCAzXSwgWzM1LCAxXSwgWzMzLCAxXSwgWzEyLCAzXSwgWzM5LCAxXSwgWzM5LCAxXSwgWzM5LCAxXSwgWzM5LCAxXSwgWzM5LCAxXSwgWzQwLCAxXSwgWzQwLCAxXSwgWzE0LCAxXSwgWzE0LCAxXSwgWzE0LCAxXV0sXG4gICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24gYW5vbnltb3VzKHl5dGV4dCwgeXlsZW5nLCB5eWxpbmVubywgeXksIHl5c3RhdGUsICQkLCBfJCkge1xuICAgICAgdmFyICQwID0gJCQubGVuZ3RoIC0gMTtcbiAgICAgIHN3aXRjaCAoeXlzdGF0ZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLiQgPSBbXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwIC0gMV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgdGhpcy4kID0gW107XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICB5eS5hZGRFbnRpdHkoJCRbJDAgLSA0XSk7XG4gICAgICAgICAgeXkuYWRkRW50aXR5KCQkWyQwIC0gMl0pO1xuICAgICAgICAgIHl5LmFkZFJlbGF0aW9uc2hpcCgkJFskMCAtIDRdLCAkJFskMF0sICQkWyQwIC0gMl0sICQkWyQwIC0gM10pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgeXkuYWRkRW50aXR5KCQkWyQwIC0gM10pO1xuICAgICAgICAgIHl5LmFkZEF0dHJpYnV0ZXMoJCRbJDAgLSAzXSwgJCRbJDAgLSAxXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgeXkuYWRkRW50aXR5KCQkWyQwIC0gMl0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIHl5LmFkZEVudGl0eSgkJFskMF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIHl5LmFkZEVudGl0eSgkJFskMCAtIDZdLCAkJFskMCAtIDRdKTtcbiAgICAgICAgICB5eS5hZGRBdHRyaWJ1dGVzKCQkWyQwIC0gNl0sICQkWyQwIC0gMV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIHl5LmFkZEVudGl0eSgkJFskMCAtIDVdLCAkJFskMCAtIDNdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICB5eS5hZGRFbnRpdHkoJCRbJDAgLSAzXSwgJCRbJDAgLSAxXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTU6XG4gICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdLnRyaW0oKTtcbiAgICAgICAgICB5eS5zZXRBY2NUaXRsZSh0aGlzLiQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE3OlxuICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXS50cmltKCk7XG4gICAgICAgICAgeXkuc2V0QWNjRGVzY3JpcHRpb24odGhpcy4kKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgY2FzZSA0MzpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjA6XG4gICAgICAgIGNhc2UgNDE6XG4gICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdLnJlcGxhY2UoL1wiL2csIFwiXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIxOlxuICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgIHRoaXMuJCA9IFskJFskMF1dO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICQkWyQwXS5wdXNoKCQkWyQwIC0gMV0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICB0aGlzLiQgPSB7IGF0dHJpYnV0ZVR5cGU6ICQkWyQwIC0gMV0sIGF0dHJpYnV0ZU5hbWU6ICQkWyQwXSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgIHRoaXMuJCA9IHsgYXR0cmlidXRlVHlwZTogJCRbJDAgLSAyXSwgYXR0cmlidXRlTmFtZTogJCRbJDAgLSAxXSwgYXR0cmlidXRlS2V5VHlwZUxpc3Q6ICQkWyQwXSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgIHRoaXMuJCA9IHsgYXR0cmlidXRlVHlwZTogJCRbJDAgLSAyXSwgYXR0cmlidXRlTmFtZTogJCRbJDAgLSAxXSwgYXR0cmlidXRlQ29tbWVudDogJCRbJDBdIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgdGhpcy4kID0geyBhdHRyaWJ1dGVUeXBlOiAkJFskMCAtIDNdLCBhdHRyaWJ1dGVOYW1lOiAkJFskMCAtIDJdLCBhdHRyaWJ1dGVLZXlUeXBlTGlzdDogJCRbJDAgLSAxXSwgYXR0cmlidXRlQ29tbWVudDogJCRbJDBdIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjc6XG4gICAgICAgIGNhc2UgMjg6XG4gICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgICQkWyQwIC0gMl0ucHVzaCgkJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwIC0gMl07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdLnJlcGxhY2UoL1wiL2csIFwiXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgIHRoaXMuJCA9IHsgY2FyZEE6ICQkWyQwXSwgcmVsVHlwZTogJCRbJDAgLSAxXSwgY2FyZEI6ICQkWyQwIC0gMl0gfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICB0aGlzLiQgPSB5eS5DYXJkaW5hbGl0eS5aRVJPX09SX09ORTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNTpcbiAgICAgICAgICB0aGlzLiQgPSB5eS5DYXJkaW5hbGl0eS5aRVJPX09SX01PUkU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzY6XG4gICAgICAgICAgdGhpcy4kID0geXkuQ2FyZGluYWxpdHkuT05FX09SX01PUkU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgdGhpcy4kID0geXkuQ2FyZGluYWxpdHkuT05MWV9PTkU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgdGhpcy4kID0geXkuQ2FyZGluYWxpdHkuTURfUEFSRU5UO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgIHRoaXMuJCA9IHl5LklkZW50aWZpY2F0aW9uLk5PTl9JREVOVElGWUlORztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICB0aGlzLiQgPSB5eS5JZGVudGlmaWNhdGlvbi5JREVOVElGWUlORztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuICAgIHRhYmxlOiBbeyAzOiAxLCA0OiBbMSwgMl0gfSwgeyAxOiBbM10gfSwgbygkVjAsIFsyLCAyXSwgeyA1OiAzIH0pLCB7IDY6IFsxLCA0XSwgNzogNSwgODogWzEsIDZdLCA5OiA3LCAxMDogWzEsIDhdLCAxMTogOSwgMjA6ICRWMSwgMjI6ICRWMiwgMjQ6ICRWMywgMjY6ICRWNCwgMjc6ICRWNSwgMjg6ICRWNiB9LCBvKCRWMCwgWzIsIDddLCB7IDE6IFsyLCAxXSB9KSwgbygkVjAsIFsyLCAzXSksIHsgOTogMTYsIDExOiA5LCAyMDogJFYxLCAyMjogJFYyLCAyNDogJFYzLCAyNjogJFY0LCAyNzogJFY1LCAyODogJFY2IH0sIG8oJFYwLCBbMiwgNV0pLCBvKCRWMCwgWzIsIDZdKSwgbygkVjAsIFsyLCAxMV0sIHsgMTI6IDE3LCAzOTogMjAsIDE1OiBbMSwgMThdLCAxODogWzEsIDE5XSwgNDE6ICRWNywgNDI6ICRWOCwgNDM6ICRWOSwgNDQ6ICRWYSwgNDU6ICRWYiB9KSwgeyAyMTogWzEsIDI2XSB9LCB7IDIzOiBbMSwgMjddIH0sIHsgMjU6IFsxLCAyOF0gfSwgbygkVjAsIFsyLCAxOF0pLCBvKCRWYywgWzIsIDE5XSksIG8oJFZjLCBbMiwgMjBdKSwgbygkVjAsIFsyLCA0XSksIHsgMTE6IDI5LCAyNzogJFY1LCAyODogJFY2IH0sIHsgMTY6IDMwLCAxNzogWzEsIDMxXSwgMjk6IDMyLCAzMDogMzMsIDM0OiAkVmQgfSwgeyAxMTogMzUsIDI3OiAkVjUsIDI4OiAkVjYgfSwgeyA0MDogMzYsIDQ2OiBbMSwgMzddLCA0NzogWzEsIDM4XSB9LCBvKCRWZSwgWzIsIDM0XSksIG8oJFZlLCBbMiwgMzVdKSwgbygkVmUsIFsyLCAzNl0pLCBvKCRWZSwgWzIsIDM3XSksIG8oJFZlLCBbMiwgMzhdKSwgbygkVjAsIFsyLCAxNV0pLCBvKCRWMCwgWzIsIDE2XSksIG8oJFYwLCBbMiwgMTddKSwgeyAxMzogWzEsIDM5XSB9LCB7IDE3OiBbMSwgNDBdIH0sIG8oJFYwLCBbMiwgMTBdKSwgeyAxNjogNDEsIDE3OiBbMiwgMjFdLCAyOTogMzIsIDMwOiAzMywgMzQ6ICRWZCB9LCB7IDMxOiA0MiwgMzQ6IFsxLCA0M10gfSwgeyAzNDogWzIsIDI3XSB9LCB7IDE5OiBbMSwgNDRdIH0sIHsgMzk6IDQ1LCA0MTogJFY3LCA0MjogJFY4LCA0MzogJFY5LCA0NDogJFZhLCA0NTogJFZiIH0sIG8oJFZmLCBbMiwgMzldKSwgbygkVmYsIFsyLCA0MF0pLCB7IDE0OiA0NiwgMjc6IFsxLCA0OV0sIDI4OiBbMSwgNDhdLCA0ODogWzEsIDQ3XSB9LCBvKCRWMCwgWzIsIDldKSwgeyAxNzogWzIsIDIyXSB9LCBvKCRWZywgWzIsIDIzXSwgeyAzMjogNTAsIDMzOiA1MSwgMzU6IDUyLCAzNzogJFZoLCAzODogJFZpIH0pLCBvKFsxNywgMzQsIDM3LCAzOF0sIFsyLCAyOF0pLCBvKCRWMCwgWzIsIDE0XSwgeyAxNTogWzEsIDU1XSB9KSwgbyhbMjcsIDI4XSwgWzIsIDMzXSksIG8oJFYwLCBbMiwgOF0pLCBvKCRWMCwgWzIsIDQxXSksIG8oJFYwLCBbMiwgNDJdKSwgbygkVjAsIFsyLCA0M10pLCBvKCRWZywgWzIsIDI0XSwgeyAzMzogNTYsIDM2OiBbMSwgNTddLCAzODogJFZpIH0pLCBvKCRWZywgWzIsIDI1XSksIG8oJFZqLCBbMiwgMjldKSwgbygkVmcsIFsyLCAzMl0pLCBvKCRWaiwgWzIsIDMxXSksIHsgMTY6IDU4LCAxNzogWzEsIDU5XSwgMjk6IDMyLCAzMDogMzMsIDM0OiAkVmQgfSwgbygkVmcsIFsyLCAyNl0pLCB7IDM1OiA2MCwgMzc6ICRWaCB9LCB7IDE3OiBbMSwgNjFdIH0sIG8oJFYwLCBbMiwgMTNdKSwgbygkVmosIFsyLCAzMF0pLCBvKCRWMCwgWzIsIDEyXSldLFxuICAgIGRlZmF1bHRBY3Rpb25zOiB7IDM0OiBbMiwgMjddLCA0MTogWzIsIDIyXSB9LFxuICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XG4gICAgICBpZiAoaGFzaC5yZWNvdmVyYWJsZSkge1xuICAgICAgICB0aGlzLnRyYWNlKHN0cik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3Ioc3RyKTtcbiAgICAgICAgZXJyb3IuaGFzaCA9IGhhc2g7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsIHN0YWNrID0gWzBdLCB0c3RhY2sgPSBbXSwgdnN0YWNrID0gW251bGxdLCBsc3RhY2sgPSBbXSwgdGFibGUgPSB0aGlzLnRhYmxlLCB5eXRleHQgPSBcIlwiLCB5eWxpbmVubyA9IDAsIHl5bGVuZyA9IDAsIFRFUlJPUiA9IDIsIEVPRiA9IDE7XG4gICAgICB2YXIgYXJncyA9IGxzdGFjay5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICB2YXIgbGV4ZXIyID0gT2JqZWN0LmNyZWF0ZSh0aGlzLmxleGVyKTtcbiAgICAgIHZhciBzaGFyZWRTdGF0ZSA9IHsgeXk6IHt9IH07XG4gICAgICBmb3IgKHZhciBrIGluIHRoaXMueXkpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnl5LCBrKSkge1xuICAgICAgICAgIHNoYXJlZFN0YXRlLnl5W2tdID0gdGhpcy55eVtrXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV4ZXIyLnNldElucHV0KGlucHV0LCBzaGFyZWRTdGF0ZS55eSk7XG4gICAgICBzaGFyZWRTdGF0ZS55eS5sZXhlciA9IGxleGVyMjtcbiAgICAgIHNoYXJlZFN0YXRlLnl5LnBhcnNlciA9IHRoaXM7XG4gICAgICBpZiAodHlwZW9mIGxleGVyMi55eWxsb2MgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBsZXhlcjIueXlsbG9jID0ge307XG4gICAgICB9XG4gICAgICB2YXIgeXlsb2MgPSBsZXhlcjIueXlsbG9jO1xuICAgICAgbHN0YWNrLnB1c2goeXlsb2MpO1xuICAgICAgdmFyIHJhbmdlcyA9IGxleGVyMi5vcHRpb25zICYmIGxleGVyMi5vcHRpb25zLnJhbmdlcztcbiAgICAgIGlmICh0eXBlb2Ygc2hhcmVkU3RhdGUueXkucGFyc2VFcnJvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRoaXMucGFyc2VFcnJvciA9IHNoYXJlZFN0YXRlLnl5LnBhcnNlRXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhcnNlRXJyb3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykucGFyc2VFcnJvcjtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGxleCgpIHtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB0b2tlbiA9IHRzdGFjay5wb3AoKSB8fCBsZXhlcjIubGV4KCkgfHwgRU9GO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgaWYgKHRva2VuIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHRzdGFjayA9IHRva2VuO1xuICAgICAgICAgICAgdG9rZW4gPSB0c3RhY2sucG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRva2VuID0gc2VsZi5zeW1ib2xzX1t0b2tlbl0gfHwgdG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgfVxuICAgICAgdmFyIHN5bWJvbCwgc3RhdGUsIGFjdGlvbiwgciwgeXl2YWwgPSB7fSwgcCwgbGVuLCBuZXdTdGF0ZSwgZXhwZWN0ZWQ7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBzdGF0ZSA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0QWN0aW9uc1tzdGF0ZV0pIHtcbiAgICAgICAgICBhY3Rpb24gPSB0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc3ltYm9sID09PSBudWxsIHx8IHR5cGVvZiBzeW1ib2wgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgc3ltYm9sID0gbGV4KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFjdGlvbiA9IHRhYmxlW3N0YXRlXSAmJiB0YWJsZVtzdGF0ZV1bc3ltYm9sXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhYWN0aW9uLmxlbmd0aCB8fCAhYWN0aW9uWzBdKSB7XG4gICAgICAgICAgdmFyIGVyclN0ciA9IFwiXCI7XG4gICAgICAgICAgZXhwZWN0ZWQgPSBbXTtcbiAgICAgICAgICBmb3IgKHAgaW4gdGFibGVbc3RhdGVdKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ZXJtaW5hbHNfW3BdICYmIHAgPiBURVJST1IpIHtcbiAgICAgICAgICAgICAgZXhwZWN0ZWQucHVzaChcIidcIiArIHRoaXMudGVybWluYWxzX1twXSArIFwiJ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGxleGVyMi5zaG93UG9zaXRpb24pIHtcbiAgICAgICAgICAgIGVyclN0ciA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArICh5eWxpbmVubyArIDEpICsgXCI6XFxuXCIgKyBsZXhlcjIuc2hvd1Bvc2l0aW9uKCkgKyBcIlxcbkV4cGVjdGluZyBcIiArIGV4cGVjdGVkLmpvaW4oXCIsIFwiKSArIFwiLCBnb3QgJ1wiICsgKHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCkgKyBcIidcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjogVW5leHBlY3RlZCBcIiArIChzeW1ib2wgPT0gRU9GID8gXCJlbmQgb2YgaW5wdXRcIiA6IFwiJ1wiICsgKHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCkgKyBcIidcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucGFyc2VFcnJvcihlcnJTdHIsIHtcbiAgICAgICAgICAgIHRleHQ6IGxleGVyMi5tYXRjaCxcbiAgICAgICAgICAgIHRva2VuOiB0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wsXG4gICAgICAgICAgICBsaW5lOiBsZXhlcjIueXlsaW5lbm8sXG4gICAgICAgICAgICBsb2M6IHl5bG9jLFxuICAgICAgICAgICAgZXhwZWN0ZWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uWzBdIGluc3RhbmNlb2YgQXJyYXkgJiYgYWN0aW9uLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJzZSBFcnJvcjogbXVsdGlwbGUgYWN0aW9ucyBwb3NzaWJsZSBhdCBzdGF0ZTogXCIgKyBzdGF0ZSArIFwiLCB0b2tlbjogXCIgKyBzeW1ib2wpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uWzBdKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgc3RhY2sucHVzaChzeW1ib2wpO1xuICAgICAgICAgICAgdnN0YWNrLnB1c2gobGV4ZXIyLnl5dGV4dCk7XG4gICAgICAgICAgICBsc3RhY2sucHVzaChsZXhlcjIueXlsbG9jKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2goYWN0aW9uWzFdKTtcbiAgICAgICAgICAgIHN5bWJvbCA9IG51bGw7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHl5bGVuZyA9IGxleGVyMi55eWxlbmc7XG4gICAgICAgICAgICAgIHl5dGV4dCA9IGxleGVyMi55eXRleHQ7XG4gICAgICAgICAgICAgIHl5bGluZW5vID0gbGV4ZXIyLnl5bGluZW5vO1xuICAgICAgICAgICAgICB5eWxvYyA9IGxleGVyMi55eWxsb2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBsZW4gPSB0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzFdO1xuICAgICAgICAgICAgeXl2YWwuJCA9IHZzdGFja1t2c3RhY2subGVuZ3RoIC0gbGVuXTtcbiAgICAgICAgICAgIHl5dmFsLl8kID0ge1xuICAgICAgICAgICAgICBmaXJzdF9saW5lOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICAgIGxhc3RfbGluZTogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICAgIGxhc3RfY29sdW1uOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLmxhc3RfY29sdW1uXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHJhbmdlcykge1xuICAgICAgICAgICAgICB5eXZhbC5fJC5yYW5nZSA9IFtcbiAgICAgICAgICAgICAgICBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLnJhbmdlWzBdLFxuICAgICAgICAgICAgICAgIGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ucmFuZ2VbMV1cbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHIgPSB0aGlzLnBlcmZvcm1BY3Rpb24uYXBwbHkoeXl2YWwsIFtcbiAgICAgICAgICAgICAgeXl0ZXh0LFxuICAgICAgICAgICAgICB5eWxlbmcsXG4gICAgICAgICAgICAgIHl5bGluZW5vLFxuICAgICAgICAgICAgICBzaGFyZWRTdGF0ZS55eSxcbiAgICAgICAgICAgICAgYWN0aW9uWzFdLFxuICAgICAgICAgICAgICB2c3RhY2ssXG4gICAgICAgICAgICAgIGxzdGFja1xuICAgICAgICAgICAgXS5jb25jYXQoYXJncykpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICBzdGFjayA9IHN0YWNrLnNsaWNlKDAsIC0xICogbGVuICogMik7XG4gICAgICAgICAgICAgIHZzdGFjayA9IHZzdGFjay5zbGljZSgwLCAtMSAqIGxlbik7XG4gICAgICAgICAgICAgIGxzdGFjayA9IGxzdGFjay5zbGljZSgwLCAtMSAqIGxlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFjay5wdXNoKHRoaXMucHJvZHVjdGlvbnNfW2FjdGlvblsxXV1bMF0pO1xuICAgICAgICAgICAgdnN0YWNrLnB1c2goeXl2YWwuJCk7XG4gICAgICAgICAgICBsc3RhY2sucHVzaCh5eXZhbC5fJCk7XG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHRhYmxlW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDJdXVtzdGFja1tzdGFjay5sZW5ndGggLSAxXV07XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5ld1N0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIHZhciBsZXhlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZXhlcjIgPSB7XG4gICAgICBFT0Y6IDEsXG4gICAgICBwYXJzZUVycm9yOiBmdW5jdGlvbiBwYXJzZUVycm9yKHN0ciwgaGFzaCkge1xuICAgICAgICBpZiAodGhpcy55eS5wYXJzZXIpIHtcbiAgICAgICAgICB0aGlzLnl5LnBhcnNlci5wYXJzZUVycm9yKHN0ciwgaGFzaCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0cik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyByZXNldHMgdGhlIGxleGVyLCBzZXRzIG5ldyBpbnB1dFxuICAgICAgc2V0SW5wdXQ6IGZ1bmN0aW9uKGlucHV0LCB5eSkge1xuICAgICAgICB0aGlzLnl5ID0geXkgfHwgdGhpcy55eSB8fCB7fTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5fbW9yZSA9IHRoaXMuX2JhY2t0cmFjayA9IHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnl5bGluZW5vID0gdGhpcy55eWxlbmcgPSAwO1xuICAgICAgICB0aGlzLnl5dGV4dCA9IHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2ggPSBcIlwiO1xuICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrID0gW1wiSU5JVElBTFwiXTtcbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IDAsXG4gICAgICAgICAgbGFzdF9saW5lOiAxLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiAwXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbMCwgMF07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBjb25zdW1lcyBhbmQgcmV0dXJucyBvbmUgY2hhciBmcm9tIHRoZSBpbnB1dFxuICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLl9pbnB1dFswXTtcbiAgICAgICAgdGhpcy55eXRleHQgKz0gY2g7XG4gICAgICAgIHRoaXMueXlsZW5nKys7XG4gICAgICAgIHRoaXMub2Zmc2V0Kys7XG4gICAgICAgIHRoaXMubWF0Y2ggKz0gY2g7XG4gICAgICAgIHRoaXMubWF0Y2hlZCArPSBjaDtcbiAgICAgICAgdmFyIGxpbmVzID0gY2gubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO1xuICAgICAgICBpZiAobGluZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGluZW5vKys7XG4gICAgICAgICAgdGhpcy55eWxsb2MubGFzdF9saW5lKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MubGFzdF9jb2x1bW4rKztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlWzFdKys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZSgxKTtcbiAgICAgICAgcmV0dXJuIGNoO1xuICAgICAgfSxcbiAgICAgIC8vIHVuc2hpZnRzIG9uZSBjaGFyIChvciBhIHN0cmluZykgaW50byB0aGUgaW5wdXRcbiAgICAgIHVucHV0OiBmdW5jdGlvbihjaCkge1xuICAgICAgICB2YXIgbGVuID0gY2gubGVuZ3RoO1xuICAgICAgICB2YXIgbGluZXMgPSBjaC5zcGxpdCgvKD86XFxyXFxuP3xcXG4pL2cpO1xuICAgICAgICB0aGlzLl9pbnB1dCA9IGNoICsgdGhpcy5faW5wdXQ7XG4gICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy55eXRleHQuc3Vic3RyKDAsIHRoaXMueXl0ZXh0Lmxlbmd0aCAtIGxlbik7XG4gICAgICAgIHRoaXMub2Zmc2V0IC09IGxlbjtcbiAgICAgICAgdmFyIG9sZExpbmVzID0gdGhpcy5tYXRjaC5zcGxpdCgvKD86XFxyXFxuP3xcXG4pL2cpO1xuICAgICAgICB0aGlzLm1hdGNoID0gdGhpcy5tYXRjaC5zdWJzdHIoMCwgdGhpcy5tYXRjaC5sZW5ndGggLSAxKTtcbiAgICAgICAgdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gMSk7XG4gICAgICAgIGlmIChsaW5lcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy55eWxpbmVubyAtPSBsaW5lcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gdGhpcy55eWxsb2MucmFuZ2U7XG4gICAgICAgIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyAobGluZXMubGVuZ3RoID09PSBvbGRMaW5lcy5sZW5ndGggPyB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gOiAwKSArIG9sZExpbmVzW29sZExpbmVzLmxlbmd0aCAtIGxpbmVzLmxlbmd0aF0ubGVuZ3RoIC0gbGluZXNbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIC0gbGVuXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbclswXSwgclswXSArIHRoaXMueXlsZW5nIC0gbGVuXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnl5bGVuZyA9IHRoaXMueXl0ZXh0Lmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIGNhY2hlcyBtYXRjaGVkIHRleHQgYW5kIGFwcGVuZHMgaXQgb24gbmV4dCBhY3Rpb25cbiAgICAgIG1vcmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLl9tb3JlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIHNpZ25hbHMgdGhlIGxleGVyIHRoYXQgdGhpcyBydWxlIGZhaWxzIHRvIG1hdGNoIHRoZSBpbnB1dCwgc28gdGhlIG5leHQgbWF0Y2hpbmcgcnVsZSAocmVnZXgpIHNob3VsZCBiZSB0ZXN0ZWQgaW5zdGVhZC5cbiAgICAgIHJlamVjdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgdGhpcy5fYmFja3RyYWNrID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVycm9yKFwiTGV4aWNhbCBlcnJvciBvbiBsaW5lIFwiICsgKHRoaXMueXlsaW5lbm8gKyAxKSArIFwiLiBZb3UgY2FuIG9ubHkgaW52b2tlIHJlamVjdCgpIGluIHRoZSBsZXhlciB3aGVuIHRoZSBsZXhlciBpcyBvZiB0aGUgYmFja3RyYWNraW5nIHBlcnN1YXNpb24gKG9wdGlvbnMuYmFja3RyYWNrX2xleGVyID0gdHJ1ZSkuXFxuXCIgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7XG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICBsaW5lOiB0aGlzLnl5bGluZW5vXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gcmV0YWluIGZpcnN0IG4gY2hhcmFjdGVycyBvZiB0aGUgbWF0Y2hcbiAgICAgIGxlc3M6IGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgdGhpcy51bnB1dCh0aGlzLm1hdGNoLnNsaWNlKG4pKTtcbiAgICAgIH0sXG4gICAgICAvLyBkaXNwbGF5cyBhbHJlYWR5IG1hdGNoZWQgaW5wdXQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICBwYXN0SW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGFzdCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIHRoaXMubWF0Y2gubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIChwYXN0Lmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpICsgcGFzdC5zdWJzdHIoLTIwKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICB9LFxuICAgICAgLy8gZGlzcGxheXMgdXBjb21pbmcgaW5wdXQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICB1cGNvbWluZ0lucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG5leHQgPSB0aGlzLm1hdGNoO1xuICAgICAgICBpZiAobmV4dC5sZW5ndGggPCAyMCkge1xuICAgICAgICAgIG5leHQgKz0gdGhpcy5faW5wdXQuc3Vic3RyKDAsIDIwIC0gbmV4dC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobmV4dC5zdWJzdHIoMCwgMjApICsgKG5leHQubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikpLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sXG4gICAgICAvLyBkaXNwbGF5cyB0aGUgY2hhcmFjdGVyIHBvc2l0aW9uIHdoZXJlIHRoZSBsZXhpbmcgZXJyb3Igb2NjdXJyZWQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICBzaG93UG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcHJlID0gdGhpcy5wYXN0SW5wdXQoKTtcbiAgICAgICAgdmFyIGMgPSBuZXcgQXJyYXkocHJlLmxlbmd0aCArIDEpLmpvaW4oXCItXCIpO1xuICAgICAgICByZXR1cm4gcHJlICsgdGhpcy51cGNvbWluZ0lucHV0KCkgKyBcIlxcblwiICsgYyArIFwiXlwiO1xuICAgICAgfSxcbiAgICAgIC8vIHRlc3QgdGhlIGxleGVkIHRva2VuOiByZXR1cm4gRkFMU0Ugd2hlbiBub3QgYSBtYXRjaCwgb3RoZXJ3aXNlIHJldHVybiB0b2tlblxuICAgICAgdGVzdF9tYXRjaDogZnVuY3Rpb24obWF0Y2gsIGluZGV4ZWRfcnVsZSkge1xuICAgICAgICB2YXIgdG9rZW4sIGxpbmVzLCBiYWNrdXA7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgYmFja3VwID0ge1xuICAgICAgICAgICAgeXlsaW5lbm86IHRoaXMueXlsaW5lbm8sXG4gICAgICAgICAgICB5eWxsb2M6IHtcbiAgICAgICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MuZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICAgIGxhc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHl5dGV4dDogdGhpcy55eXRleHQsXG4gICAgICAgICAgICBtYXRjaDogdGhpcy5tYXRjaCxcbiAgICAgICAgICAgIG1hdGNoZXM6IHRoaXMubWF0Y2hlcyxcbiAgICAgICAgICAgIG1hdGNoZWQ6IHRoaXMubWF0Y2hlZCxcbiAgICAgICAgICAgIHl5bGVuZzogdGhpcy55eWxlbmcsXG4gICAgICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgICAgICAgX21vcmU6IHRoaXMuX21vcmUsXG4gICAgICAgICAgICBfaW5wdXQ6IHRoaXMuX2lucHV0LFxuICAgICAgICAgICAgeXk6IHRoaXMueXksXG4gICAgICAgICAgICBjb25kaXRpb25TdGFjazogdGhpcy5jb25kaXRpb25TdGFjay5zbGljZSgwKSxcbiAgICAgICAgICAgIGRvbmU6IHRoaXMuZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICAgIGJhY2t1cC55eWxsb2MucmFuZ2UgPSB0aGlzLnl5bGxvYy5yYW5nZS5zbGljZSgwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGluZXMgPSBtYXRjaFswXS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG4gICAgICAgIGlmIChsaW5lcykge1xuICAgICAgICAgIHRoaXMueXlsaW5lbm8gKz0gbGluZXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmxhc3RfbGluZSxcbiAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4sXG4gICAgICAgICAgbGFzdF9jb2x1bW46IGxpbmVzID8gbGluZXNbbGluZXMubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gbGluZXNbbGluZXMubGVuZ3RoIC0gMV0ubWF0Y2goL1xccj9cXG4/LylbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4gKyBtYXRjaFswXS5sZW5ndGhcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy55eXRleHQgKz0gbWF0Y2hbMF07XG4gICAgICAgIHRoaXMubWF0Y2ggKz0gbWF0Y2hbMF07XG4gICAgICAgIHRoaXMubWF0Y2hlcyA9IG1hdGNoO1xuICAgICAgICB0aGlzLnl5bGVuZyA9IHRoaXMueXl0ZXh0Lmxlbmd0aDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFt0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKz0gdGhpcy55eWxlbmddO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21vcmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fYmFja3RyYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UobWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5tYXRjaGVkICs9IG1hdGNoWzBdO1xuICAgICAgICB0b2tlbiA9IHRoaXMucGVyZm9ybUFjdGlvbi5jYWxsKHRoaXMsIHRoaXMueXksIHRoaXMsIGluZGV4ZWRfcnVsZSwgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgaWYgKHRoaXMuZG9uZSAmJiB0aGlzLl9pbnB1dCkge1xuICAgICAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9iYWNrdHJhY2spIHtcbiAgICAgICAgICBmb3IgKHZhciBrIGluIGJhY2t1cCkge1xuICAgICAgICAgICAgdGhpc1trXSA9IGJhY2t1cFtrXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICAvLyByZXR1cm4gbmV4dCBtYXRjaCBpbiBpbnB1dFxuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9pbnB1dCkge1xuICAgICAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRva2VuLCBtYXRjaCwgdGVtcE1hdGNoLCBpbmRleDtcbiAgICAgICAgaWYgKCF0aGlzLl9tb3JlKSB7XG4gICAgICAgICAgdGhpcy55eXRleHQgPSBcIlwiO1xuICAgICAgICAgIHRoaXMubWF0Y2ggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBydWxlcyA9IHRoaXMuX2N1cnJlbnRSdWxlcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGVtcE1hdGNoID0gdGhpcy5faW5wdXQubWF0Y2godGhpcy5ydWxlc1tydWxlc1tpXV0pO1xuICAgICAgICAgIGlmICh0ZW1wTWF0Y2ggJiYgKCFtYXRjaCB8fCB0ZW1wTWF0Y2hbMF0ubGVuZ3RoID4gbWF0Y2hbMF0ubGVuZ3RoKSkge1xuICAgICAgICAgICAgbWF0Y2ggPSB0ZW1wTWF0Y2g7XG4gICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcikge1xuICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMudGVzdF9tYXRjaCh0ZW1wTWF0Y2gsIHJ1bGVzW2ldKTtcbiAgICAgICAgICAgICAgaWYgKHRva2VuICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9iYWNrdHJhY2spIHtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vcHRpb25zLmZsZXgpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIHRva2VuID0gdGhpcy50ZXN0X21hdGNoKG1hdGNoLCBydWxlc1tpbmRleF0pO1xuICAgICAgICAgIGlmICh0b2tlbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9pbnB1dCA9PT0gXCJcIikge1xuICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVycm9yKFwiTGV4aWNhbCBlcnJvciBvbiBsaW5lIFwiICsgKHRoaXMueXlsaW5lbm8gKyAxKSArIFwiLiBVbnJlY29nbml6ZWQgdGV4dC5cXG5cIiArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgIGxpbmU6IHRoaXMueXlsaW5lbm9cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiBuZXh0IG1hdGNoIHRoYXQgaGFzIGEgdG9rZW5cbiAgICAgIGxleDogZnVuY3Rpb24gbGV4KCkge1xuICAgICAgICB2YXIgciA9IHRoaXMubmV4dCgpO1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmxleCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gYWN0aXZhdGVzIGEgbmV3IGxleGVyIGNvbmRpdGlvbiBzdGF0ZSAocHVzaGVzIHRoZSBuZXcgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIG9udG8gdGhlIGNvbmRpdGlvbiBzdGFjaylcbiAgICAgIGJlZ2luOiBmdW5jdGlvbiBiZWdpbihjb25kaXRpb24pIHtcbiAgICAgICAgdGhpcy5jb25kaXRpb25TdGFjay5wdXNoKGNvbmRpdGlvbik7XG4gICAgICB9LFxuICAgICAgLy8gcG9wIHRoZSBwcmV2aW91c2x5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGUgb2ZmIHRoZSBjb25kaXRpb24gc3RhY2tcbiAgICAgIHBvcFN0YXRlOiBmdW5jdGlvbiBwb3BTdGF0ZSgpIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgIGlmIChuID4gMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLnBvcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrWzBdO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcHJvZHVjZSB0aGUgbGV4ZXIgcnVsZSBzZXQgd2hpY2ggaXMgYWN0aXZlIGZvciB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGVcbiAgICAgIF9jdXJyZW50UnVsZXM6IGZ1bmN0aW9uIF9jdXJyZW50UnVsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAmJiB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zW3RoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXV0ucnVsZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uc1tcIklOSVRJQUxcIl0ucnVsZXM7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyByZXR1cm4gdGhlIGN1cnJlbnRseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlOyB3aGVuIGFuIGluZGV4IGFyZ3VtZW50IGlzIHByb3ZpZGVkIGl0IHByb2R1Y2VzIHRoZSBOLXRoIHByZXZpb3VzIGNvbmRpdGlvbiBzdGF0ZSwgaWYgYXZhaWxhYmxlXG4gICAgICB0b3BTdGF0ZTogZnVuY3Rpb24gdG9wU3RhdGUobikge1xuICAgICAgICBuID0gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxIC0gTWF0aC5hYnMobiB8fCAwKTtcbiAgICAgICAgaWYgKG4gPj0gMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrW25dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIklOSVRJQUxcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIGFsaWFzIGZvciBiZWdpbihjb25kaXRpb24pXG4gICAgICBwdXNoU3RhdGU6IGZ1bmN0aW9uIHB1c2hTdGF0ZShjb25kaXRpb24pIHtcbiAgICAgICAgdGhpcy5iZWdpbihjb25kaXRpb24pO1xuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiB0aGUgbnVtYmVyIG9mIHN0YXRlcyBjdXJyZW50bHkgb24gdGhlIHN0YWNrXG4gICAgICBzdGF0ZVN0YWNrU2l6ZTogZnVuY3Rpb24gc3RhdGVTdGFja1NpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aDtcbiAgICAgIH0sXG4gICAgICBvcHRpb25zOiB7IFwiY2FzZS1pbnNlbnNpdGl2ZVwiOiB0cnVlIH0sXG4gICAgICBwZXJmb3JtQWN0aW9uOiBmdW5jdGlvbiBhbm9ueW1vdXMoeXksIHl5XywgJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucywgWVlfU1RBUlQpIHtcbiAgICAgICAgc3dpdGNoICgkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImFjY190aXRsZVwiKTtcbiAgICAgICAgICAgIHJldHVybiAyMjtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfdGl0bGVfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiYWNjX2Rlc2NyXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDI0O1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiBcImFjY19kZXNjcl92YWx1ZVwiO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJhY2NfZGVzY3JfbXVsdGlsaW5lXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZVwiO1xuICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHJldHVybiAxMDtcbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICByZXR1cm4gODtcbiAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgcmV0dXJuIDI4O1xuICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICByZXR1cm4gNDg7XG4gICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgIHJldHVybiA0O1xuICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiYmxvY2tcIik7XG4gICAgICAgICAgICByZXR1cm4gMTU7XG4gICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgIHJldHVybiAzNztcbiAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgcmV0dXJuIDM0O1xuICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICByZXR1cm4gMzQ7XG4gICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgIHJldHVybiAzODtcbiAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiAxNztcbiAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgcmV0dXJuIHl5Xy55eXRleHRbMF07XG4gICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICAgIHJldHVybiAxODtcbiAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgICAgcmV0dXJuIDE5O1xuICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICByZXR1cm4gNDE7XG4gICAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICAgIHJldHVybiA0MztcbiAgICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgICAgcmV0dXJuIDQzO1xuICAgICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgICByZXR1cm4gNDM7XG4gICAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICAgIHJldHVybiA0MTtcbiAgICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgICAgcmV0dXJuIDQxO1xuICAgICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgICByZXR1cm4gNDI7XG4gICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIHJldHVybiA0MjtcbiAgICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgICAgcmV0dXJuIDQyO1xuICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICByZXR1cm4gNDI7XG4gICAgICAgICAgY2FzZSAzNTpcbiAgICAgICAgICAgIHJldHVybiA0MjtcbiAgICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgICAgcmV0dXJuIDQzO1xuICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICByZXR1cm4gNDI7XG4gICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgIHJldHVybiA0MztcbiAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgcmV0dXJuIDQ0O1xuICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICByZXR1cm4gNDQ7XG4gICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgIHJldHVybiA0NDtcbiAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgcmV0dXJuIDQ0O1xuICAgICAgICAgIGNhc2UgNDM6XG4gICAgICAgICAgICByZXR1cm4gNDE7XG4gICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgIHJldHVybiA0MjtcbiAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgcmV0dXJuIDQzO1xuICAgICAgICAgIGNhc2UgNDY6XG4gICAgICAgICAgICByZXR1cm4gNDU7XG4gICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgIHJldHVybiA0NjtcbiAgICAgICAgICBjYXNlIDQ4OlxuICAgICAgICAgICAgcmV0dXJuIDQ3O1xuICAgICAgICAgIGNhc2UgNDk6XG4gICAgICAgICAgICByZXR1cm4gNDc7XG4gICAgICAgICAgY2FzZSA1MDpcbiAgICAgICAgICAgIHJldHVybiA0NjtcbiAgICAgICAgICBjYXNlIDUxOlxuICAgICAgICAgICAgcmV0dXJuIDQ2O1xuICAgICAgICAgIGNhc2UgNTI6XG4gICAgICAgICAgICByZXR1cm4gNDY7XG4gICAgICAgICAgY2FzZSA1MzpcbiAgICAgICAgICAgIHJldHVybiAyNztcbiAgICAgICAgICBjYXNlIDU0OlxuICAgICAgICAgICAgcmV0dXJuIHl5Xy55eXRleHRbMF07XG4gICAgICAgICAgY2FzZSA1NTpcbiAgICAgICAgICAgIHJldHVybiA2O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcnVsZXM6IFsvXig/OmFjY1RpdGxlXFxzKjpcXHMqKS9pLCAvXig/Oig/IVxcbnx8KSpbXlxcbl0qKS9pLCAvXig/OmFjY0Rlc2NyXFxzKjpcXHMqKS9pLCAvXig/Oig/IVxcbnx8KSpbXlxcbl0qKS9pLCAvXig/OmFjY0Rlc2NyXFxzKlxce1xccyopL2ksIC9eKD86W1xcfV0pL2ksIC9eKD86W15cXH1dKikvaSwgL14oPzpbXFxuXSspL2ksIC9eKD86XFxzKykvaSwgL14oPzpbXFxzXSspL2ksIC9eKD86XCJbXlwiJVxcclxcblxcdlxcYlxcXFxdK1wiKS9pLCAvXig/OlwiW15cIl0qXCIpL2ksIC9eKD86ZXJEaWFncmFtXFxiKS9pLCAvXig/OlxceykvaSwgL14oPzosKS9pLCAvXig/OlxccyspL2ksIC9eKD86XFxiKCg/OlBLKXwoPzpGSyl8KD86VUspKVxcYikvaSwgL14oPzooLio/KVt+XSguKj8pKlt+XSkvaSwgL14oPzpbXFwqQS1aYS16X11bQS1aYS16MC05XFwtX1xcW1xcXVxcKFxcKV0qKS9pLCAvXig/OlwiW15cIl0qXCIpL2ksIC9eKD86W1xcbl0rKS9pLCAvXig/OlxcfSkvaSwgL14oPzouKS9pLCAvXig/OlxcWykvaSwgL14oPzpcXF0pL2ksIC9eKD86b25lIG9yIHplcm9cXGIpL2ksIC9eKD86b25lIG9yIG1vcmVcXGIpL2ksIC9eKD86b25lIG9yIG1hbnlcXGIpL2ksIC9eKD86MVxcKykvaSwgL14oPzpcXHxvXFxiKS9pLCAvXig/Onplcm8gb3Igb25lXFxiKS9pLCAvXig/Onplcm8gb3IgbW9yZVxcYikvaSwgL14oPzp6ZXJvIG9yIG1hbnlcXGIpL2ksIC9eKD86MFxcKykvaSwgL14oPzpcXH1vXFxiKS9pLCAvXig/Om1hbnlcXCgwXFwpKS9pLCAvXig/Om1hbnlcXCgxXFwpKS9pLCAvXig/Om1hbnlcXGIpL2ksIC9eKD86XFx9XFx8KS9pLCAvXig/Om9uZVxcYikvaSwgL14oPzpvbmx5IG9uZVxcYikvaSwgL14oPzoxXFxiKS9pLCAvXig/OlxcfFxcfCkvaSwgL14oPzpvXFx8KS9pLCAvXig/Om9cXHspL2ksIC9eKD86XFx8XFx7KS9pLCAvXig/Olxccyp1XFxiKS9pLCAvXig/OlxcLlxcLikvaSwgL14oPzotLSkvaSwgL14oPzp0b1xcYikvaSwgL14oPzpvcHRpb25hbGx5IHRvXFxiKS9pLCAvXig/OlxcLi0pL2ksIC9eKD86LVxcLikvaSwgL14oPzpbQS1aYS16X11bQS1aYS16MC05XFwtX10qKS9pLCAvXig/Oi4pL2ksIC9eKD86JCkvaV0sXG4gICAgICBjb25kaXRpb25zOiB7IFwiYWNjX2Rlc2NyX211bHRpbGluZVwiOiB7IFwicnVsZXNcIjogWzUsIDZdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImFjY19kZXNjclwiOiB7IFwicnVsZXNcIjogWzNdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImFjY190aXRsZVwiOiB7IFwicnVsZXNcIjogWzFdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImJsb2NrXCI6IHsgXCJydWxlc1wiOiBbMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIxLCAyMl0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiSU5JVElBTFwiOiB7IFwicnVsZXNcIjogWzAsIDIsIDQsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAyMywgMjQsIDI1LCAyNiwgMjcsIDI4LCAyOSwgMzAsIDMxLCAzMiwgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MSwgNDIsIDQzLCA0NCwgNDUsIDQ2LCA0NywgNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1XSwgXCJpbmNsdXNpdmVcIjogdHJ1ZSB9IH1cbiAgICB9O1xuICAgIHJldHVybiBsZXhlcjI7XG4gIH0oKTtcbiAgcGFyc2VyMi5sZXhlciA9IGxleGVyO1xuICBmdW5jdGlvbiBQYXJzZXIoKSB7XG4gICAgdGhpcy55eSA9IHt9O1xuICB9XG4gIFBhcnNlci5wcm90b3R5cGUgPSBwYXJzZXIyO1xuICBwYXJzZXIyLlBhcnNlciA9IFBhcnNlcjtcbiAgcmV0dXJuIG5ldyBQYXJzZXIoKTtcbn0oKTtcbnBhcnNlci5wYXJzZXIgPSBwYXJzZXI7XG5jb25zdCBlclBhcnNlciA9IHBhcnNlcjtcbmxldCBlbnRpdGllcyA9IHt9O1xubGV0IHJlbGF0aW9uc2hpcHMgPSBbXTtcbmNvbnN0IENhcmRpbmFsaXR5ID0ge1xuICBaRVJPX09SX09ORTogXCJaRVJPX09SX09ORVwiLFxuICBaRVJPX09SX01PUkU6IFwiWkVST19PUl9NT1JFXCIsXG4gIE9ORV9PUl9NT1JFOiBcIk9ORV9PUl9NT1JFXCIsXG4gIE9OTFlfT05FOiBcIk9OTFlfT05FXCIsXG4gIE1EX1BBUkVOVDogXCJNRF9QQVJFTlRcIlxufTtcbmNvbnN0IElkZW50aWZpY2F0aW9uID0ge1xuICBOT05fSURFTlRJRllJTkc6IFwiTk9OX0lERU5USUZZSU5HXCIsXG4gIElERU5USUZZSU5HOiBcIklERU5USUZZSU5HXCJcbn07XG5jb25zdCBhZGRFbnRpdHkgPSBmdW5jdGlvbihuYW1lLCBhbGlhcyA9IHZvaWQgMCkge1xuICBpZiAoZW50aXRpZXNbbmFtZV0gPT09IHZvaWQgMCkge1xuICAgIGVudGl0aWVzW25hbWVdID0geyBhdHRyaWJ1dGVzOiBbXSwgYWxpYXMgfTtcbiAgICBsb2cuaW5mbyhcIkFkZGVkIG5ldyBlbnRpdHkgOlwiLCBuYW1lKTtcbiAgfSBlbHNlIGlmIChlbnRpdGllc1tuYW1lXSAmJiAhZW50aXRpZXNbbmFtZV0uYWxpYXMgJiYgYWxpYXMpIHtcbiAgICBlbnRpdGllc1tuYW1lXS5hbGlhcyA9IGFsaWFzO1xuICAgIGxvZy5pbmZvKGBBZGQgYWxpYXMgJyR7YWxpYXN9JyB0byBlbnRpdHkgJyR7bmFtZX0nYCk7XG4gIH1cbiAgcmV0dXJuIGVudGl0aWVzW25hbWVdO1xufTtcbmNvbnN0IGdldEVudGl0aWVzID0gKCkgPT4gZW50aXRpZXM7XG5jb25zdCBhZGRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oZW50aXR5TmFtZSwgYXR0cmlicykge1xuICBsZXQgZW50aXR5ID0gYWRkRW50aXR5KGVudGl0eU5hbWUpO1xuICBsZXQgaTtcbiAgZm9yIChpID0gYXR0cmlicy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGVudGl0eS5hdHRyaWJ1dGVzLnB1c2goYXR0cmlic1tpXSk7XG4gICAgbG9nLmRlYnVnKFwiQWRkZWQgYXR0cmlidXRlIFwiLCBhdHRyaWJzW2ldLmF0dHJpYnV0ZU5hbWUpO1xuICB9XG59O1xuY29uc3QgYWRkUmVsYXRpb25zaGlwID0gZnVuY3Rpb24oZW50QSwgcm9sQSwgZW50QiwgclNwZWMpIHtcbiAgbGV0IHJlbCA9IHtcbiAgICBlbnRpdHlBOiBlbnRBLFxuICAgIHJvbGVBOiByb2xBLFxuICAgIGVudGl0eUI6IGVudEIsXG4gICAgcmVsU3BlYzogclNwZWNcbiAgfTtcbiAgcmVsYXRpb25zaGlwcy5wdXNoKHJlbCk7XG4gIGxvZy5kZWJ1ZyhcIkFkZGVkIG5ldyByZWxhdGlvbnNoaXAgOlwiLCByZWwpO1xufTtcbmNvbnN0IGdldFJlbGF0aW9uc2hpcHMgPSAoKSA9PiByZWxhdGlvbnNoaXBzO1xuY29uc3QgY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgZW50aXRpZXMgPSB7fTtcbiAgcmVsYXRpb25zaGlwcyA9IFtdO1xuICBjbGVhciQxKCk7XG59O1xuY29uc3QgZXJEYiA9IHtcbiAgQ2FyZGluYWxpdHksXG4gIElkZW50aWZpY2F0aW9uLFxuICBnZXRDb25maWc6ICgpID0+IGdldENvbmZpZygpLmVyLFxuICBhZGRFbnRpdHksXG4gIGFkZEF0dHJpYnV0ZXMsXG4gIGdldEVudGl0aWVzLFxuICBhZGRSZWxhdGlvbnNoaXAsXG4gIGdldFJlbGF0aW9uc2hpcHMsXG4gIGNsZWFyLFxuICBzZXRBY2NUaXRsZSxcbiAgZ2V0QWNjVGl0bGUsXG4gIHNldEFjY0Rlc2NyaXB0aW9uLFxuICBnZXRBY2NEZXNjcmlwdGlvbixcbiAgc2V0RGlhZ3JhbVRpdGxlLFxuICBnZXREaWFncmFtVGl0bGVcbn07XG5jb25zdCBFUk1hcmtlcnMgPSB7XG4gIE9OTFlfT05FX1NUQVJUOiBcIk9OTFlfT05FX1NUQVJUXCIsXG4gIE9OTFlfT05FX0VORDogXCJPTkxZX09ORV9FTkRcIixcbiAgWkVST19PUl9PTkVfU1RBUlQ6IFwiWkVST19PUl9PTkVfU1RBUlRcIixcbiAgWkVST19PUl9PTkVfRU5EOiBcIlpFUk9fT1JfT05FX0VORFwiLFxuICBPTkVfT1JfTU9SRV9TVEFSVDogXCJPTkVfT1JfTU9SRV9TVEFSVFwiLFxuICBPTkVfT1JfTU9SRV9FTkQ6IFwiT05FX09SX01PUkVfRU5EXCIsXG4gIFpFUk9fT1JfTU9SRV9TVEFSVDogXCJaRVJPX09SX01PUkVfU1RBUlRcIixcbiAgWkVST19PUl9NT1JFX0VORDogXCJaRVJPX09SX01PUkVfRU5EXCIsXG4gIE1EX1BBUkVOVF9FTkQ6IFwiTURfUEFSRU5UX0VORFwiLFxuICBNRF9QQVJFTlRfU1RBUlQ6IFwiTURfUEFSRU5UX1NUQVJUXCJcbn07XG5jb25zdCBpbnNlcnRNYXJrZXJzID0gZnVuY3Rpb24oZWxlbSwgY29uZjIpIHtcbiAgbGV0IG1hcmtlcjtcbiAgZWxlbS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgRVJNYXJrZXJzLk1EX1BBUkVOVF9TVEFSVCkuYXR0cihcInJlZlhcIiwgMCkuYXR0cihcInJlZllcIiwgNykuYXR0cihcIm1hcmtlcldpZHRoXCIsIDE5MCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAyNDApLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpLmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgXCJNIDE4LDcgTDksMTMgTDEsNyBMOSwxIFpcIik7XG4gIGVsZW0uYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIEVSTWFya2Vycy5NRF9QQVJFTlRfRU5EKS5hdHRyKFwicmVmWFwiLCAxOSkuYXR0cihcInJlZllcIiwgNykuYXR0cihcIm1hcmtlcldpZHRoXCIsIDIwKS5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDI4KS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSAxOCw3IEw5LDEzIEwxLDcgTDksMSBaXCIpO1xuICBlbGVtLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBFUk1hcmtlcnMuT05MWV9PTkVfU1RBUlQpLmF0dHIoXCJyZWZYXCIsIDApLmF0dHIoXCJyZWZZXCIsIDkpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAxOCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAxOCkuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwic3Ryb2tlXCIsIGNvbmYyLnN0cm9rZSkuYXR0cihcImZpbGxcIiwgXCJub25lXCIpLmF0dHIoXCJkXCIsIFwiTTksMCBMOSwxOCBNMTUsMCBMMTUsMThcIik7XG4gIGVsZW0uYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIEVSTWFya2Vycy5PTkxZX09ORV9FTkQpLmF0dHIoXCJyZWZYXCIsIDE4KS5hdHRyKFwicmVmWVwiLCA5KS5hdHRyKFwibWFya2VyV2lkdGhcIiwgMTgpLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMTgpLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpLmFwcGVuZChcInBhdGhcIikuYXR0cihcInN0cm9rZVwiLCBjb25mMi5zdHJva2UpLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKS5hdHRyKFwiZFwiLCBcIk0zLDAgTDMsMTggTTksMCBMOSwxOFwiKTtcbiAgbWFya2VyID0gZWxlbS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgRVJNYXJrZXJzLlpFUk9fT1JfT05FX1NUQVJUKS5hdHRyKFwicmVmWFwiLCAwKS5hdHRyKFwicmVmWVwiLCA5KS5hdHRyKFwibWFya2VyV2lkdGhcIiwgMzApLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMTgpLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpO1xuICBtYXJrZXIuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJzdHJva2VcIiwgY29uZjIuc3Ryb2tlKS5hdHRyKFwiZmlsbFwiLCBcIndoaXRlXCIpLmF0dHIoXCJjeFwiLCAyMSkuYXR0cihcImN5XCIsIDkpLmF0dHIoXCJyXCIsIDYpO1xuICBtYXJrZXIuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwic3Ryb2tlXCIsIGNvbmYyLnN0cm9rZSkuYXR0cihcImZpbGxcIiwgXCJub25lXCIpLmF0dHIoXCJkXCIsIFwiTTksMCBMOSwxOFwiKTtcbiAgbWFya2VyID0gZWxlbS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgRVJNYXJrZXJzLlpFUk9fT1JfT05FX0VORCkuYXR0cihcInJlZlhcIiwgMzApLmF0dHIoXCJyZWZZXCIsIDkpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAzMCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAxOCkuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIik7XG4gIG1hcmtlci5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcInN0cm9rZVwiLCBjb25mMi5zdHJva2UpLmF0dHIoXCJmaWxsXCIsIFwid2hpdGVcIikuYXR0cihcImN4XCIsIDkpLmF0dHIoXCJjeVwiLCA5KS5hdHRyKFwiclwiLCA2KTtcbiAgbWFya2VyLmFwcGVuZChcInBhdGhcIikuYXR0cihcInN0cm9rZVwiLCBjb25mMi5zdHJva2UpLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKS5hdHRyKFwiZFwiLCBcIk0yMSwwIEwyMSwxOFwiKTtcbiAgZWxlbS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgRVJNYXJrZXJzLk9ORV9PUl9NT1JFX1NUQVJUKS5hdHRyKFwicmVmWFwiLCAxOCkuYXR0cihcInJlZllcIiwgMTgpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCA0NSkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAzNikuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwic3Ryb2tlXCIsIGNvbmYyLnN0cm9rZSkuYXR0cihcImZpbGxcIiwgXCJub25lXCIpLmF0dHIoXCJkXCIsIFwiTTAsMTggUSAxOCwwIDM2LDE4IFEgMTgsMzYgMCwxOCBNNDIsOSBMNDIsMjdcIik7XG4gIGVsZW0uYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIEVSTWFya2Vycy5PTkVfT1JfTU9SRV9FTkQpLmF0dHIoXCJyZWZYXCIsIDI3KS5hdHRyKFwicmVmWVwiLCAxOCkuYXR0cihcIm1hcmtlcldpZHRoXCIsIDQ1KS5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDM2KS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJzdHJva2VcIiwgY29uZjIuc3Ryb2tlKS5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIikuYXR0cihcImRcIiwgXCJNMyw5IEwzLDI3IE05LDE4IFEyNywwIDQ1LDE4IFEyNywzNiA5LDE4XCIpO1xuICBtYXJrZXIgPSBlbGVtLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBFUk1hcmtlcnMuWkVST19PUl9NT1JFX1NUQVJUKS5hdHRyKFwicmVmWFwiLCAxOCkuYXR0cihcInJlZllcIiwgMTgpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCA1NykuYXR0cihcIm1hcmtlckhlaWdodFwiLCAzNikuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIik7XG4gIG1hcmtlci5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcInN0cm9rZVwiLCBjb25mMi5zdHJva2UpLmF0dHIoXCJmaWxsXCIsIFwid2hpdGVcIikuYXR0cihcImN4XCIsIDQ4KS5hdHRyKFwiY3lcIiwgMTgpLmF0dHIoXCJyXCIsIDYpO1xuICBtYXJrZXIuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwic3Ryb2tlXCIsIGNvbmYyLnN0cm9rZSkuYXR0cihcImZpbGxcIiwgXCJub25lXCIpLmF0dHIoXCJkXCIsIFwiTTAsMTggUTE4LDAgMzYsMTggUTE4LDM2IDAsMThcIik7XG4gIG1hcmtlciA9IGVsZW0uYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIEVSTWFya2Vycy5aRVJPX09SX01PUkVfRU5EKS5hdHRyKFwicmVmWFwiLCAzOSkuYXR0cihcInJlZllcIiwgMTgpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCA1NykuYXR0cihcIm1hcmtlckhlaWdodFwiLCAzNikuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIik7XG4gIG1hcmtlci5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcInN0cm9rZVwiLCBjb25mMi5zdHJva2UpLmF0dHIoXCJmaWxsXCIsIFwid2hpdGVcIikuYXR0cihcImN4XCIsIDkpLmF0dHIoXCJjeVwiLCAxOCkuYXR0cihcInJcIiwgNik7XG4gIG1hcmtlci5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJzdHJva2VcIiwgY29uZjIuc3Ryb2tlKS5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIikuYXR0cihcImRcIiwgXCJNMjEsMTggUTM5LDAgNTcsMTggUTM5LDM2IDIxLDE4XCIpO1xuICByZXR1cm47XG59O1xuY29uc3QgZXJNYXJrZXJzID0ge1xuICBFUk1hcmtlcnMsXG4gIGluc2VydE1hcmtlcnNcbn07XG5jb25zdCBCQURfSURfQ0hBUlNfUkVHRVhQID0gL1teXFxkQS1aYS16XShcXFcpKi9nO1xubGV0IGNvbmYgPSB7fTtcbmxldCBlbnRpdHlOYW1lSWRzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbmNvbnN0IHNldENvbmYgPSBmdW5jdGlvbihjbmYpIHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNuZik7XG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBjb25mW2tleV0gPSBjbmZba2V5XTtcbiAgfVxufTtcbmNvbnN0IGRyYXdBdHRyaWJ1dGVzID0gKGdyb3VwTm9kZSwgZW50aXR5VGV4dE5vZGUsIGF0dHJpYnV0ZXMpID0+IHtcbiAgY29uc3QgaGVpZ2h0UGFkZGluZyA9IGNvbmYuZW50aXR5UGFkZGluZyAvIDM7XG4gIGNvbnN0IHdpZHRoUGFkZGluZyA9IGNvbmYuZW50aXR5UGFkZGluZyAvIDM7XG4gIGNvbnN0IGF0dHJGb250U2l6ZSA9IGNvbmYuZm9udFNpemUgKiAwLjg1O1xuICBjb25zdCBsYWJlbEJCb3ggPSBlbnRpdHlUZXh0Tm9kZS5ub2RlKCkuZ2V0QkJveCgpO1xuICBjb25zdCBhdHRyaWJ1dGVOb2RlcyA9IFtdO1xuICBsZXQgaGFzS2V5VHlwZSA9IGZhbHNlO1xuICBsZXQgaGFzQ29tbWVudCA9IGZhbHNlO1xuICBsZXQgbWF4VHlwZVdpZHRoID0gMDtcbiAgbGV0IG1heE5hbWVXaWR0aCA9IDA7XG4gIGxldCBtYXhLZXlXaWR0aCA9IDA7XG4gIGxldCBtYXhDb21tZW50V2lkdGggPSAwO1xuICBsZXQgY3VtdWxhdGl2ZUhlaWdodCA9IGxhYmVsQkJveC5oZWlnaHQgKyBoZWlnaHRQYWRkaW5nICogMjtcbiAgbGV0IGF0dHJOdW0gPSAxO1xuICBhdHRyaWJ1dGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5hdHRyaWJ1dGVLZXlUeXBlTGlzdCAhPT0gdm9pZCAwICYmIGl0ZW0uYXR0cmlidXRlS2V5VHlwZUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgaGFzS2V5VHlwZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChpdGVtLmF0dHJpYnV0ZUNvbW1lbnQgIT09IHZvaWQgMCkge1xuICAgICAgaGFzQ29tbWVudCA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgYXR0cmlidXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgYXR0clByZWZpeCA9IGAke2VudGl0eVRleHROb2RlLm5vZGUoKS5pZH0tYXR0ci0ke2F0dHJOdW19YDtcbiAgICBsZXQgbm9kZUhlaWdodCA9IDA7XG4gICAgY29uc3QgYXR0cmlidXRlVHlwZSA9IHBhcnNlR2VuZXJpY1R5cGVzKGl0ZW0uYXR0cmlidXRlVHlwZSk7XG4gICAgY29uc3QgdHlwZU5vZGUgPSBncm91cE5vZGUuYXBwZW5kKFwidGV4dFwiKS5jbGFzc2VkKFwiZXIgZW50aXR5TGFiZWxcIiwgdHJ1ZSkuYXR0cihcImlkXCIsIGAke2F0dHJQcmVmaXh9LXR5cGVgKS5hdHRyKFwieFwiLCAwKS5hdHRyKFwieVwiLCAwKS5zdHlsZShcImRvbWluYW50LWJhc2VsaW5lXCIsIFwibWlkZGxlXCIpLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJsZWZ0XCIpLnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgZ2V0Q29uZmlnKCkuZm9udEZhbWlseSkuc3R5bGUoXCJmb250LXNpemVcIiwgYXR0ckZvbnRTaXplICsgXCJweFwiKS50ZXh0KGF0dHJpYnV0ZVR5cGUpO1xuICAgIGNvbnN0IG5hbWVOb2RlID0gZ3JvdXBOb2RlLmFwcGVuZChcInRleHRcIikuY2xhc3NlZChcImVyIGVudGl0eUxhYmVsXCIsIHRydWUpLmF0dHIoXCJpZFwiLCBgJHthdHRyUHJlZml4fS1uYW1lYCkuYXR0cihcInhcIiwgMCkuYXR0cihcInlcIiwgMCkuc3R5bGUoXCJkb21pbmFudC1iYXNlbGluZVwiLCBcIm1pZGRsZVwiKS5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibGVmdFwiKS5zdHlsZShcImZvbnQtZmFtaWx5XCIsIGdldENvbmZpZygpLmZvbnRGYW1pbHkpLnN0eWxlKFwiZm9udC1zaXplXCIsIGF0dHJGb250U2l6ZSArIFwicHhcIikudGV4dChpdGVtLmF0dHJpYnV0ZU5hbWUpO1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5vZGUgPSB7fTtcbiAgICBhdHRyaWJ1dGVOb2RlLnRuID0gdHlwZU5vZGU7XG4gICAgYXR0cmlidXRlTm9kZS5ubiA9IG5hbWVOb2RlO1xuICAgIGNvbnN0IHR5cGVCQm94ID0gdHlwZU5vZGUubm9kZSgpLmdldEJCb3goKTtcbiAgICBjb25zdCBuYW1lQkJveCA9IG5hbWVOb2RlLm5vZGUoKS5nZXRCQm94KCk7XG4gICAgbWF4VHlwZVdpZHRoID0gTWF0aC5tYXgobWF4VHlwZVdpZHRoLCB0eXBlQkJveC53aWR0aCk7XG4gICAgbWF4TmFtZVdpZHRoID0gTWF0aC5tYXgobWF4TmFtZVdpZHRoLCBuYW1lQkJveC53aWR0aCk7XG4gICAgbm9kZUhlaWdodCA9IE1hdGgubWF4KHR5cGVCQm94LmhlaWdodCwgbmFtZUJCb3guaGVpZ2h0KTtcbiAgICBpZiAoaGFzS2V5VHlwZSkge1xuICAgICAgY29uc3Qga2V5VHlwZU5vZGVUZXh0ID0gaXRlbS5hdHRyaWJ1dGVLZXlUeXBlTGlzdCAhPT0gdm9pZCAwID8gaXRlbS5hdHRyaWJ1dGVLZXlUeXBlTGlzdC5qb2luKFwiLFwiKSA6IFwiXCI7XG4gICAgICBjb25zdCBrZXlUeXBlTm9kZSA9IGdyb3VwTm9kZS5hcHBlbmQoXCJ0ZXh0XCIpLmNsYXNzZWQoXCJlciBlbnRpdHlMYWJlbFwiLCB0cnVlKS5hdHRyKFwiaWRcIiwgYCR7YXR0clByZWZpeH0ta2V5YCkuYXR0cihcInhcIiwgMCkuYXR0cihcInlcIiwgMCkuc3R5bGUoXCJkb21pbmFudC1iYXNlbGluZVwiLCBcIm1pZGRsZVwiKS5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibGVmdFwiKS5zdHlsZShcImZvbnQtZmFtaWx5XCIsIGdldENvbmZpZygpLmZvbnRGYW1pbHkpLnN0eWxlKFwiZm9udC1zaXplXCIsIGF0dHJGb250U2l6ZSArIFwicHhcIikudGV4dChrZXlUeXBlTm9kZVRleHQpO1xuICAgICAgYXR0cmlidXRlTm9kZS5rbiA9IGtleVR5cGVOb2RlO1xuICAgICAgY29uc3Qga2V5VHlwZUJCb3ggPSBrZXlUeXBlTm9kZS5ub2RlKCkuZ2V0QkJveCgpO1xuICAgICAgbWF4S2V5V2lkdGggPSBNYXRoLm1heChtYXhLZXlXaWR0aCwga2V5VHlwZUJCb3gud2lkdGgpO1xuICAgICAgbm9kZUhlaWdodCA9IE1hdGgubWF4KG5vZGVIZWlnaHQsIGtleVR5cGVCQm94LmhlaWdodCk7XG4gICAgfVxuICAgIGlmIChoYXNDb21tZW50KSB7XG4gICAgICBjb25zdCBjb21tZW50Tm9kZSA9IGdyb3VwTm9kZS5hcHBlbmQoXCJ0ZXh0XCIpLmNsYXNzZWQoXCJlciBlbnRpdHlMYWJlbFwiLCB0cnVlKS5hdHRyKFwiaWRcIiwgYCR7YXR0clByZWZpeH0tY29tbWVudGApLmF0dHIoXCJ4XCIsIDApLmF0dHIoXCJ5XCIsIDApLnN0eWxlKFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIikuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImxlZnRcIikuc3R5bGUoXCJmb250LWZhbWlseVwiLCBnZXRDb25maWcoKS5mb250RmFtaWx5KS5zdHlsZShcImZvbnQtc2l6ZVwiLCBhdHRyRm9udFNpemUgKyBcInB4XCIpLnRleHQoaXRlbS5hdHRyaWJ1dGVDb21tZW50IHx8IFwiXCIpO1xuICAgICAgYXR0cmlidXRlTm9kZS5jbiA9IGNvbW1lbnROb2RlO1xuICAgICAgY29uc3QgY29tbWVudE5vZGVCQm94ID0gY29tbWVudE5vZGUubm9kZSgpLmdldEJCb3goKTtcbiAgICAgIG1heENvbW1lbnRXaWR0aCA9IE1hdGgubWF4KG1heENvbW1lbnRXaWR0aCwgY29tbWVudE5vZGVCQm94LndpZHRoKTtcbiAgICAgIG5vZGVIZWlnaHQgPSBNYXRoLm1heChub2RlSGVpZ2h0LCBjb21tZW50Tm9kZUJCb3guaGVpZ2h0KTtcbiAgICB9XG4gICAgYXR0cmlidXRlTm9kZS5oZWlnaHQgPSBub2RlSGVpZ2h0O1xuICAgIGF0dHJpYnV0ZU5vZGVzLnB1c2goYXR0cmlidXRlTm9kZSk7XG4gICAgY3VtdWxhdGl2ZUhlaWdodCArPSBub2RlSGVpZ2h0ICsgaGVpZ2h0UGFkZGluZyAqIDI7XG4gICAgYXR0ck51bSArPSAxO1xuICB9KTtcbiAgbGV0IHdpZHRoUGFkZGluZ0ZhY3RvciA9IDQ7XG4gIGlmIChoYXNLZXlUeXBlKSB7XG4gICAgd2lkdGhQYWRkaW5nRmFjdG9yICs9IDI7XG4gIH1cbiAgaWYgKGhhc0NvbW1lbnQpIHtcbiAgICB3aWR0aFBhZGRpbmdGYWN0b3IgKz0gMjtcbiAgfVxuICBjb25zdCBtYXhXaWR0aCA9IG1heFR5cGVXaWR0aCArIG1heE5hbWVXaWR0aCArIG1heEtleVdpZHRoICsgbWF4Q29tbWVudFdpZHRoO1xuICBjb25zdCBiQm94ID0ge1xuICAgIHdpZHRoOiBNYXRoLm1heChcbiAgICAgIGNvbmYubWluRW50aXR5V2lkdGgsXG4gICAgICBNYXRoLm1heChcbiAgICAgICAgbGFiZWxCQm94LndpZHRoICsgY29uZi5lbnRpdHlQYWRkaW5nICogMixcbiAgICAgICAgbWF4V2lkdGggKyB3aWR0aFBhZGRpbmcgKiB3aWR0aFBhZGRpbmdGYWN0b3JcbiAgICAgIClcbiAgICApLFxuICAgIGhlaWdodDogYXR0cmlidXRlcy5sZW5ndGggPiAwID8gY3VtdWxhdGl2ZUhlaWdodCA6IE1hdGgubWF4KGNvbmYubWluRW50aXR5SGVpZ2h0LCBsYWJlbEJCb3guaGVpZ2h0ICsgY29uZi5lbnRpdHlQYWRkaW5nICogMilcbiAgfTtcbiAgaWYgKGF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHNwYXJlQ29sdW1uV2lkdGggPSBNYXRoLm1heChcbiAgICAgIDAsXG4gICAgICAoYkJveC53aWR0aCAtIG1heFdpZHRoIC0gd2lkdGhQYWRkaW5nICogd2lkdGhQYWRkaW5nRmFjdG9yKSAvICh3aWR0aFBhZGRpbmdGYWN0b3IgLyAyKVxuICAgICk7XG4gICAgZW50aXR5VGV4dE5vZGUuYXR0cihcbiAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICBcInRyYW5zbGF0ZShcIiArIGJCb3gud2lkdGggLyAyICsgXCIsXCIgKyAoaGVpZ2h0UGFkZGluZyArIGxhYmVsQkJveC5oZWlnaHQgLyAyKSArIFwiKVwiXG4gICAgKTtcbiAgICBsZXQgaGVpZ2h0T2Zmc2V0ID0gbGFiZWxCQm94LmhlaWdodCArIGhlaWdodFBhZGRpbmcgKiAyO1xuICAgIGxldCBhdHRyaWJTdHlsZSA9IFwiYXR0cmlidXRlQm94T2RkXCI7XG4gICAgYXR0cmlidXRlTm9kZXMuZm9yRWFjaCgoYXR0cmlidXRlTm9kZSkgPT4ge1xuICAgICAgY29uc3QgYWxpZ25ZID0gaGVpZ2h0T2Zmc2V0ICsgaGVpZ2h0UGFkZGluZyArIGF0dHJpYnV0ZU5vZGUuaGVpZ2h0IC8gMjtcbiAgICAgIGF0dHJpYnV0ZU5vZGUudG4uYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHdpZHRoUGFkZGluZyArIFwiLFwiICsgYWxpZ25ZICsgXCIpXCIpO1xuICAgICAgY29uc3QgdHlwZVJlY3QgPSBncm91cE5vZGUuaW5zZXJ0KFwicmVjdFwiLCBcIiNcIiArIGF0dHJpYnV0ZU5vZGUudG4ubm9kZSgpLmlkKS5jbGFzc2VkKGBlciAke2F0dHJpYlN0eWxlfWAsIHRydWUpLmF0dHIoXCJ4XCIsIDApLmF0dHIoXCJ5XCIsIGhlaWdodE9mZnNldCkuYXR0cihcIndpZHRoXCIsIG1heFR5cGVXaWR0aCArIHdpZHRoUGFkZGluZyAqIDIgKyBzcGFyZUNvbHVtbldpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIGF0dHJpYnV0ZU5vZGUuaGVpZ2h0ICsgaGVpZ2h0UGFkZGluZyAqIDIpO1xuICAgICAgY29uc3QgbmFtZVhPZmZzZXQgPSBwYXJzZUZsb2F0KHR5cGVSZWN0LmF0dHIoXCJ4XCIpKSArIHBhcnNlRmxvYXQodHlwZVJlY3QuYXR0cihcIndpZHRoXCIpKTtcbiAgICAgIGF0dHJpYnV0ZU5vZGUubm4uYXR0cihcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyAobmFtZVhPZmZzZXQgKyB3aWR0aFBhZGRpbmcpICsgXCIsXCIgKyBhbGlnblkgKyBcIilcIlxuICAgICAgKTtcbiAgICAgIGNvbnN0IG5hbWVSZWN0ID0gZ3JvdXBOb2RlLmluc2VydChcInJlY3RcIiwgXCIjXCIgKyBhdHRyaWJ1dGVOb2RlLm5uLm5vZGUoKS5pZCkuY2xhc3NlZChgZXIgJHthdHRyaWJTdHlsZX1gLCB0cnVlKS5hdHRyKFwieFwiLCBuYW1lWE9mZnNldCkuYXR0cihcInlcIiwgaGVpZ2h0T2Zmc2V0KS5hdHRyKFwid2lkdGhcIiwgbWF4TmFtZVdpZHRoICsgd2lkdGhQYWRkaW5nICogMiArIHNwYXJlQ29sdW1uV2lkdGgpLmF0dHIoXCJoZWlnaHRcIiwgYXR0cmlidXRlTm9kZS5oZWlnaHQgKyBoZWlnaHRQYWRkaW5nICogMik7XG4gICAgICBsZXQga2V5VHlwZUFuZENvbW1lbnRYT2Zmc2V0ID0gcGFyc2VGbG9hdChuYW1lUmVjdC5hdHRyKFwieFwiKSkgKyBwYXJzZUZsb2F0KG5hbWVSZWN0LmF0dHIoXCJ3aWR0aFwiKSk7XG4gICAgICBpZiAoaGFzS2V5VHlwZSkge1xuICAgICAgICBhdHRyaWJ1dGVOb2RlLmtuLmF0dHIoXG4gICAgICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICBcInRyYW5zbGF0ZShcIiArIChrZXlUeXBlQW5kQ29tbWVudFhPZmZzZXQgKyB3aWR0aFBhZGRpbmcpICsgXCIsXCIgKyBhbGlnblkgKyBcIilcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBrZXlUeXBlUmVjdCA9IGdyb3VwTm9kZS5pbnNlcnQoXCJyZWN0XCIsIFwiI1wiICsgYXR0cmlidXRlTm9kZS5rbi5ub2RlKCkuaWQpLmNsYXNzZWQoYGVyICR7YXR0cmliU3R5bGV9YCwgdHJ1ZSkuYXR0cihcInhcIiwga2V5VHlwZUFuZENvbW1lbnRYT2Zmc2V0KS5hdHRyKFwieVwiLCBoZWlnaHRPZmZzZXQpLmF0dHIoXCJ3aWR0aFwiLCBtYXhLZXlXaWR0aCArIHdpZHRoUGFkZGluZyAqIDIgKyBzcGFyZUNvbHVtbldpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIGF0dHJpYnV0ZU5vZGUuaGVpZ2h0ICsgaGVpZ2h0UGFkZGluZyAqIDIpO1xuICAgICAgICBrZXlUeXBlQW5kQ29tbWVudFhPZmZzZXQgPSBwYXJzZUZsb2F0KGtleVR5cGVSZWN0LmF0dHIoXCJ4XCIpKSArIHBhcnNlRmxvYXQoa2V5VHlwZVJlY3QuYXR0cihcIndpZHRoXCIpKTtcbiAgICAgIH1cbiAgICAgIGlmIChoYXNDb21tZW50KSB7XG4gICAgICAgIGF0dHJpYnV0ZU5vZGUuY24uYXR0cihcbiAgICAgICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgICAgIFwidHJhbnNsYXRlKFwiICsgKGtleVR5cGVBbmRDb21tZW50WE9mZnNldCArIHdpZHRoUGFkZGluZykgKyBcIixcIiArIGFsaWduWSArIFwiKVwiXG4gICAgICAgICk7XG4gICAgICAgIGdyb3VwTm9kZS5pbnNlcnQoXCJyZWN0XCIsIFwiI1wiICsgYXR0cmlidXRlTm9kZS5jbi5ub2RlKCkuaWQpLmNsYXNzZWQoYGVyICR7YXR0cmliU3R5bGV9YCwgXCJ0cnVlXCIpLmF0dHIoXCJ4XCIsIGtleVR5cGVBbmRDb21tZW50WE9mZnNldCkuYXR0cihcInlcIiwgaGVpZ2h0T2Zmc2V0KS5hdHRyKFwid2lkdGhcIiwgbWF4Q29tbWVudFdpZHRoICsgd2lkdGhQYWRkaW5nICogMiArIHNwYXJlQ29sdW1uV2lkdGgpLmF0dHIoXCJoZWlnaHRcIiwgYXR0cmlidXRlTm9kZS5oZWlnaHQgKyBoZWlnaHRQYWRkaW5nICogMik7XG4gICAgICB9XG4gICAgICBoZWlnaHRPZmZzZXQgKz0gYXR0cmlidXRlTm9kZS5oZWlnaHQgKyBoZWlnaHRQYWRkaW5nICogMjtcbiAgICAgIGF0dHJpYlN0eWxlID0gYXR0cmliU3R5bGUgPT09IFwiYXR0cmlidXRlQm94T2RkXCIgPyBcImF0dHJpYnV0ZUJveEV2ZW5cIiA6IFwiYXR0cmlidXRlQm94T2RkXCI7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgYkJveC5oZWlnaHQgPSBNYXRoLm1heChjb25mLm1pbkVudGl0eUhlaWdodCwgY3VtdWxhdGl2ZUhlaWdodCk7XG4gICAgZW50aXR5VGV4dE5vZGUuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIGJCb3gud2lkdGggLyAyICsgXCIsXCIgKyBiQm94LmhlaWdodCAvIDIgKyBcIilcIik7XG4gIH1cbiAgcmV0dXJuIGJCb3g7XG59O1xuY29uc3QgZHJhd0VudGl0aWVzID0gZnVuY3Rpb24oc3ZnTm9kZSwgZW50aXRpZXMyLCBncmFwaCkge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZW50aXRpZXMyKTtcbiAgbGV0IGZpcnN0T25lO1xuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oZW50aXR5TmFtZSkge1xuICAgIGNvbnN0IGVudGl0eUlkID0gZ2VuZXJhdGVJZChlbnRpdHlOYW1lLCBcImVudGl0eVwiKTtcbiAgICBlbnRpdHlOYW1lSWRzLnNldChlbnRpdHlOYW1lLCBlbnRpdHlJZCk7XG4gICAgY29uc3QgZ3JvdXBOb2RlID0gc3ZnTm9kZS5hcHBlbmQoXCJnXCIpLmF0dHIoXCJpZFwiLCBlbnRpdHlJZCk7XG4gICAgZmlyc3RPbmUgPSBmaXJzdE9uZSA9PT0gdm9pZCAwID8gZW50aXR5SWQgOiBmaXJzdE9uZTtcbiAgICBjb25zdCB0ZXh0SWQgPSBcInRleHQtXCIgKyBlbnRpdHlJZDtcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGdyb3VwTm9kZS5hcHBlbmQoXCJ0ZXh0XCIpLmNsYXNzZWQoXCJlciBlbnRpdHlMYWJlbFwiLCB0cnVlKS5hdHRyKFwiaWRcIiwgdGV4dElkKS5hdHRyKFwieFwiLCAwKS5hdHRyKFwieVwiLCAwKS5zdHlsZShcImRvbWluYW50LWJhc2VsaW5lXCIsIFwibWlkZGxlXCIpLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIikuc3R5bGUoXCJmb250LWZhbWlseVwiLCBnZXRDb25maWcoKS5mb250RmFtaWx5KS5zdHlsZShcImZvbnQtc2l6ZVwiLCBjb25mLmZvbnRTaXplICsgXCJweFwiKS50ZXh0KGVudGl0aWVzMltlbnRpdHlOYW1lXS5hbGlhcyA/PyBlbnRpdHlOYW1lKTtcbiAgICBjb25zdCB7IHdpZHRoOiBlbnRpdHlXaWR0aCwgaGVpZ2h0OiBlbnRpdHlIZWlnaHQgfSA9IGRyYXdBdHRyaWJ1dGVzKFxuICAgICAgZ3JvdXBOb2RlLFxuICAgICAgdGV4dE5vZGUsXG4gICAgICBlbnRpdGllczJbZW50aXR5TmFtZV0uYXR0cmlidXRlc1xuICAgICk7XG4gICAgY29uc3QgcmVjdE5vZGUgPSBncm91cE5vZGUuaW5zZXJ0KFwicmVjdFwiLCBcIiNcIiArIHRleHRJZCkuY2xhc3NlZChcImVyIGVudGl0eUJveFwiLCB0cnVlKS5hdHRyKFwieFwiLCAwKS5hdHRyKFwieVwiLCAwKS5hdHRyKFwid2lkdGhcIiwgZW50aXR5V2lkdGgpLmF0dHIoXCJoZWlnaHRcIiwgZW50aXR5SGVpZ2h0KTtcbiAgICBjb25zdCByZWN0QkJveCA9IHJlY3ROb2RlLm5vZGUoKS5nZXRCQm94KCk7XG4gICAgZ3JhcGguc2V0Tm9kZShlbnRpdHlJZCwge1xuICAgICAgd2lkdGg6IHJlY3RCQm94LndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWN0QkJveC5oZWlnaHQsXG4gICAgICBzaGFwZTogXCJyZWN0XCIsXG4gICAgICBpZDogZW50aXR5SWRcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBmaXJzdE9uZTtcbn07XG5jb25zdCBhZGp1c3RFbnRpdGllcyA9IGZ1bmN0aW9uKHN2Z05vZGUsIGdyYXBoKSB7XG4gIGdyYXBoLm5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbih2KSB7XG4gICAgaWYgKHYgIT09IHZvaWQgMCAmJiBncmFwaC5ub2RlKHYpICE9PSB2b2lkIDApIHtcbiAgICAgIHN2Z05vZGUuc2VsZWN0KFwiI1wiICsgdikuYXR0cihcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyAoZ3JhcGgubm9kZSh2KS54IC0gZ3JhcGgubm9kZSh2KS53aWR0aCAvIDIpICsgXCIsXCIgKyAoZ3JhcGgubm9kZSh2KS55IC0gZ3JhcGgubm9kZSh2KS5oZWlnaHQgLyAyKSArIFwiIClcIlxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xufTtcbmNvbnN0IGdldEVkZ2VOYW1lID0gZnVuY3Rpb24ocmVsKSB7XG4gIHJldHVybiAocmVsLmVudGl0eUEgKyByZWwucm9sZUEgKyByZWwuZW50aXR5QikucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xufTtcbmNvbnN0IGFkZFJlbGF0aW9uc2hpcHMgPSBmdW5jdGlvbihyZWxhdGlvbnNoaXBzMiwgZykge1xuICByZWxhdGlvbnNoaXBzMi5mb3JFYWNoKGZ1bmN0aW9uKHIpIHtcbiAgICBnLnNldEVkZ2UoXG4gICAgICBlbnRpdHlOYW1lSWRzLmdldChyLmVudGl0eUEpLFxuICAgICAgZW50aXR5TmFtZUlkcy5nZXQoci5lbnRpdHlCKSxcbiAgICAgIHsgcmVsYXRpb25zaGlwOiByIH0sXG4gICAgICBnZXRFZGdlTmFtZShyKVxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gcmVsYXRpb25zaGlwczI7XG59O1xubGV0IHJlbENudCA9IDA7XG5jb25zdCBkcmF3UmVsYXRpb25zaGlwRnJvbUxheW91dCA9IGZ1bmN0aW9uKHN2ZywgcmVsLCBnLCBpbnNlcnQsIGRpYWdPYmopIHtcbiAgcmVsQ250Kys7XG4gIGNvbnN0IGVkZ2UgPSBnLmVkZ2UoXG4gICAgZW50aXR5TmFtZUlkcy5nZXQocmVsLmVudGl0eUEpLFxuICAgIGVudGl0eU5hbWVJZHMuZ2V0KHJlbC5lbnRpdHlCKSxcbiAgICBnZXRFZGdlTmFtZShyZWwpXG4gICk7XG4gIGNvbnN0IGxpbmVGdW5jdGlvbiA9IGxpbmUoKS54KGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gZC54O1xuICB9KS55KGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gZC55O1xuICB9KS5jdXJ2ZShjdXJ2ZUJhc2lzKTtcbiAgY29uc3Qgc3ZnUGF0aCA9IHN2Zy5pbnNlcnQoXCJwYXRoXCIsIFwiI1wiICsgaW5zZXJ0KS5jbGFzc2VkKFwiZXIgcmVsYXRpb25zaGlwTGluZVwiLCB0cnVlKS5hdHRyKFwiZFwiLCBsaW5lRnVuY3Rpb24oZWRnZS5wb2ludHMpKS5zdHlsZShcInN0cm9rZVwiLCBjb25mLnN0cm9rZSkuc3R5bGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcbiAgaWYgKHJlbC5yZWxTcGVjLnJlbFR5cGUgPT09IGRpYWdPYmouZGIuSWRlbnRpZmljYXRpb24uTk9OX0lERU5USUZZSU5HKSB7XG4gICAgc3ZnUGF0aC5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcIjgsOFwiKTtcbiAgfVxuICBsZXQgdXJsID0gXCJcIjtcbiAgaWYgKGNvbmYuYXJyb3dNYXJrZXJBYnNvbHV0ZSkge1xuICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFwoL2csIFwiXFxcXChcIik7XG4gICAgdXJsID0gdXJsLnJlcGxhY2UoL1xcKS9nLCBcIlxcXFwpXCIpO1xuICB9XG4gIHN3aXRjaCAocmVsLnJlbFNwZWMuY2FyZEEpIHtcbiAgICBjYXNlIGRpYWdPYmouZGIuQ2FyZGluYWxpdHkuWkVST19PUl9PTkU6XG4gICAgICBzdmdQYXRoLmF0dHIoXCJtYXJrZXItZW5kXCIsIFwidXJsKFwiICsgdXJsICsgXCIjXCIgKyBlck1hcmtlcnMuRVJNYXJrZXJzLlpFUk9fT1JfT05FX0VORCArIFwiKVwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGlhZ09iai5kYi5DYXJkaW5hbGl0eS5aRVJPX09SX01PUkU6XG4gICAgICBzdmdQYXRoLmF0dHIoXCJtYXJrZXItZW5kXCIsIFwidXJsKFwiICsgdXJsICsgXCIjXCIgKyBlck1hcmtlcnMuRVJNYXJrZXJzLlpFUk9fT1JfTU9SRV9FTkQgKyBcIilcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRpYWdPYmouZGIuQ2FyZGluYWxpdHkuT05FX09SX01PUkU6XG4gICAgICBzdmdQYXRoLmF0dHIoXCJtYXJrZXItZW5kXCIsIFwidXJsKFwiICsgdXJsICsgXCIjXCIgKyBlck1hcmtlcnMuRVJNYXJrZXJzLk9ORV9PUl9NT1JFX0VORCArIFwiKVwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGlhZ09iai5kYi5DYXJkaW5hbGl0eS5PTkxZX09ORTpcbiAgICAgIHN2Z1BhdGguYXR0cihcIm1hcmtlci1lbmRcIiwgXCJ1cmwoXCIgKyB1cmwgKyBcIiNcIiArIGVyTWFya2Vycy5FUk1hcmtlcnMuT05MWV9PTkVfRU5EICsgXCIpXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBkaWFnT2JqLmRiLkNhcmRpbmFsaXR5Lk1EX1BBUkVOVDpcbiAgICAgIHN2Z1BhdGguYXR0cihcIm1hcmtlci1lbmRcIiwgXCJ1cmwoXCIgKyB1cmwgKyBcIiNcIiArIGVyTWFya2Vycy5FUk1hcmtlcnMuTURfUEFSRU5UX0VORCArIFwiKVwiKTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHN3aXRjaCAocmVsLnJlbFNwZWMuY2FyZEIpIHtcbiAgICBjYXNlIGRpYWdPYmouZGIuQ2FyZGluYWxpdHkuWkVST19PUl9PTkU6XG4gICAgICBzdmdQYXRoLmF0dHIoXG4gICAgICAgIFwibWFya2VyLXN0YXJ0XCIsXG4gICAgICAgIFwidXJsKFwiICsgdXJsICsgXCIjXCIgKyBlck1hcmtlcnMuRVJNYXJrZXJzLlpFUk9fT1JfT05FX1NUQVJUICsgXCIpXCJcbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRpYWdPYmouZGIuQ2FyZGluYWxpdHkuWkVST19PUl9NT1JFOlxuICAgICAgc3ZnUGF0aC5hdHRyKFxuICAgICAgICBcIm1hcmtlci1zdGFydFwiLFxuICAgICAgICBcInVybChcIiArIHVybCArIFwiI1wiICsgZXJNYXJrZXJzLkVSTWFya2Vycy5aRVJPX09SX01PUkVfU1RBUlQgKyBcIilcIlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGlhZ09iai5kYi5DYXJkaW5hbGl0eS5PTkVfT1JfTU9SRTpcbiAgICAgIHN2Z1BhdGguYXR0cihcbiAgICAgICAgXCJtYXJrZXItc3RhcnRcIixcbiAgICAgICAgXCJ1cmwoXCIgKyB1cmwgKyBcIiNcIiArIGVyTWFya2Vycy5FUk1hcmtlcnMuT05FX09SX01PUkVfU1RBUlQgKyBcIilcIlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGlhZ09iai5kYi5DYXJkaW5hbGl0eS5PTkxZX09ORTpcbiAgICAgIHN2Z1BhdGguYXR0cihcIm1hcmtlci1zdGFydFwiLCBcInVybChcIiArIHVybCArIFwiI1wiICsgZXJNYXJrZXJzLkVSTWFya2Vycy5PTkxZX09ORV9TVEFSVCArIFwiKVwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGlhZ09iai5kYi5DYXJkaW5hbGl0eS5NRF9QQVJFTlQ6XG4gICAgICBzdmdQYXRoLmF0dHIoXCJtYXJrZXItc3RhcnRcIiwgXCJ1cmwoXCIgKyB1cmwgKyBcIiNcIiArIGVyTWFya2Vycy5FUk1hcmtlcnMuTURfUEFSRU5UX1NUQVJUICsgXCIpXCIpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgY29uc3QgbGVuID0gc3ZnUGF0aC5ub2RlKCkuZ2V0VG90YWxMZW5ndGgoKTtcbiAgY29uc3QgbGFiZWxQb2ludCA9IHN2Z1BhdGgubm9kZSgpLmdldFBvaW50QXRMZW5ndGgobGVuICogMC41KTtcbiAgY29uc3QgbGFiZWxJZCA9IFwicmVsXCIgKyByZWxDbnQ7XG4gIGNvbnN0IGxhYmVsTm9kZSA9IHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpLmNsYXNzZWQoXCJlciByZWxhdGlvbnNoaXBMYWJlbFwiLCB0cnVlKS5hdHRyKFwiaWRcIiwgbGFiZWxJZCkuYXR0cihcInhcIiwgbGFiZWxQb2ludC54KS5hdHRyKFwieVwiLCBsYWJlbFBvaW50LnkpLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIikuc3R5bGUoXCJkb21pbmFudC1iYXNlbGluZVwiLCBcIm1pZGRsZVwiKS5zdHlsZShcImZvbnQtZmFtaWx5XCIsIGdldENvbmZpZygpLmZvbnRGYW1pbHkpLnN0eWxlKFwiZm9udC1zaXplXCIsIGNvbmYuZm9udFNpemUgKyBcInB4XCIpLnRleHQocmVsLnJvbGVBKTtcbiAgY29uc3QgbGFiZWxCQm94ID0gbGFiZWxOb2RlLm5vZGUoKS5nZXRCQm94KCk7XG4gIHN2Zy5pbnNlcnQoXCJyZWN0XCIsIFwiI1wiICsgbGFiZWxJZCkuY2xhc3NlZChcImVyIHJlbGF0aW9uc2hpcExhYmVsQm94XCIsIHRydWUpLmF0dHIoXCJ4XCIsIGxhYmVsUG9pbnQueCAtIGxhYmVsQkJveC53aWR0aCAvIDIpLmF0dHIoXCJ5XCIsIGxhYmVsUG9pbnQueSAtIGxhYmVsQkJveC5oZWlnaHQgLyAyKS5hdHRyKFwid2lkdGhcIiwgbGFiZWxCQm94LndpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIGxhYmVsQkJveC5oZWlnaHQpO1xufTtcbmNvbnN0IGRyYXcgPSBmdW5jdGlvbih0ZXh0LCBpZCwgX3ZlcnNpb24sIGRpYWdPYmopIHtcbiAgY29uZiA9IGdldENvbmZpZygpLmVyO1xuICBsb2cuaW5mbyhcIkRyYXdpbmcgRVIgZGlhZ3JhbVwiKTtcbiAgY29uc3Qgc2VjdXJpdHlMZXZlbCA9IGdldENvbmZpZygpLnNlY3VyaXR5TGV2ZWw7XG4gIGxldCBzYW5kYm94RWxlbWVudDtcbiAgaWYgKHNlY3VyaXR5TGV2ZWwgPT09IFwic2FuZGJveFwiKSB7XG4gICAgc2FuZGJveEVsZW1lbnQgPSBzZWxlY3QoXCIjaVwiICsgaWQpO1xuICB9XG4gIGNvbnN0IHJvb3QgPSBzZWN1cml0eUxldmVsID09PSBcInNhbmRib3hcIiA/IHNlbGVjdChzYW5kYm94RWxlbWVudC5ub2RlcygpWzBdLmNvbnRlbnREb2N1bWVudC5ib2R5KSA6IHNlbGVjdChcImJvZHlcIik7XG4gIGNvbnN0IHN2ZyA9IHJvb3Quc2VsZWN0KGBbaWQ9JyR7aWR9J11gKTtcbiAgZXJNYXJrZXJzLmluc2VydE1hcmtlcnMoc3ZnLCBjb25mKTtcbiAgbGV0IGc7XG4gIGcgPSBuZXcgZ3JhcGhsaWIuR3JhcGgoe1xuICAgIG11bHRpZ3JhcGg6IHRydWUsXG4gICAgZGlyZWN0ZWQ6IHRydWUsXG4gICAgY29tcG91bmQ6IGZhbHNlXG4gIH0pLnNldEdyYXBoKHtcbiAgICByYW5rZGlyOiBjb25mLmxheW91dERpcmVjdGlvbixcbiAgICBtYXJnaW54OiAyMCxcbiAgICBtYXJnaW55OiAyMCxcbiAgICBub2Rlc2VwOiAxMDAsXG4gICAgZWRnZXNlcDogMTAwLFxuICAgIHJhbmtzZXA6IDEwMFxuICB9KS5zZXREZWZhdWx0RWRnZUxhYmVsKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSk7XG4gIGNvbnN0IGZpcnN0RW50aXR5ID0gZHJhd0VudGl0aWVzKHN2ZywgZGlhZ09iai5kYi5nZXRFbnRpdGllcygpLCBnKTtcbiAgY29uc3QgcmVsYXRpb25zaGlwczIgPSBhZGRSZWxhdGlvbnNoaXBzKGRpYWdPYmouZGIuZ2V0UmVsYXRpb25zaGlwcygpLCBnKTtcbiAgbGF5b3V0KGcpO1xuICBhZGp1c3RFbnRpdGllcyhzdmcsIGcpO1xuICByZWxhdGlvbnNoaXBzMi5mb3JFYWNoKGZ1bmN0aW9uKHJlbCkge1xuICAgIGRyYXdSZWxhdGlvbnNoaXBGcm9tTGF5b3V0KHN2ZywgcmVsLCBnLCBmaXJzdEVudGl0eSwgZGlhZ09iaik7XG4gIH0pO1xuICBjb25zdCBwYWRkaW5nID0gY29uZi5kaWFncmFtUGFkZGluZztcbiAgdXRpbHMuaW5zZXJ0VGl0bGUoc3ZnLCBcImVudGl0eVRpdGxlVGV4dFwiLCBjb25mLnRpdGxlVG9wTWFyZ2luLCBkaWFnT2JqLmRiLmdldERpYWdyYW1UaXRsZSgpKTtcbiAgY29uc3Qgc3ZnQm91bmRzID0gc3ZnLm5vZGUoKS5nZXRCQm94KCk7XG4gIGNvbnN0IHdpZHRoID0gc3ZnQm91bmRzLndpZHRoICsgcGFkZGluZyAqIDI7XG4gIGNvbnN0IGhlaWdodCA9IHN2Z0JvdW5kcy5oZWlnaHQgKyBwYWRkaW5nICogMjtcbiAgY29uZmlndXJlU3ZnU2l6ZShzdmcsIGhlaWdodCwgd2lkdGgsIGNvbmYudXNlTWF4V2lkdGgpO1xuICBzdmcuYXR0cihcInZpZXdCb3hcIiwgYCR7c3ZnQm91bmRzLnggLSBwYWRkaW5nfSAke3N2Z0JvdW5kcy55IC0gcGFkZGluZ30gJHt3aWR0aH0gJHtoZWlnaHR9YCk7XG59O1xuY29uc3QgTUVSTUFJRF9FUkRJQUdSQU1fVVVJRCA9IFwiMjhlOWY5ZGItM2M4ZC01YWE1LTlmYWYtNDQyODZhZTU5MzdjXCI7XG5mdW5jdGlvbiBnZW5lcmF0ZUlkKHN0ciA9IFwiXCIsIHByZWZpeCA9IFwiXCIpIHtcbiAgY29uc3Qgc2ltcGxpZmllZFN0ciA9IHN0ci5yZXBsYWNlKEJBRF9JRF9DSEFSU19SRUdFWFAsIFwiXCIpO1xuICByZXR1cm4gYCR7c3RyV2l0aEh5cGhlbihwcmVmaXgpfSR7c3RyV2l0aEh5cGhlbihzaW1wbGlmaWVkU3RyKX0ke3Y1KFxuICAgIHN0cixcbiAgICBNRVJNQUlEX0VSRElBR1JBTV9VVUlEXG4gICl9YDtcbn1cbmZ1bmN0aW9uIHN0cldpdGhIeXBoZW4oc3RyID0gXCJcIikge1xuICByZXR1cm4gc3RyLmxlbmd0aCA+IDAgPyBgJHtzdHJ9LWAgOiBcIlwiO1xufVxuY29uc3QgZXJSZW5kZXJlciA9IHtcbiAgc2V0Q29uZixcbiAgZHJhd1xufTtcbmNvbnN0IGdldFN0eWxlcyA9IChvcHRpb25zKSA9PiBgXG4gIC5lbnRpdHlCb3gge1xuICAgIGZpbGw6ICR7b3B0aW9ucy5tYWluQmtnfTtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy5ub2RlQm9yZGVyfTtcbiAgfVxuXG4gIC5hdHRyaWJ1dGVCb3hPZGQge1xuICAgIGZpbGw6ICR7b3B0aW9ucy5hdHRyaWJ1dGVCYWNrZ3JvdW5kQ29sb3JPZGR9O1xuICAgIHN0cm9rZTogJHtvcHRpb25zLm5vZGVCb3JkZXJ9O1xuICB9XG5cbiAgLmF0dHJpYnV0ZUJveEV2ZW4ge1xuICAgIGZpbGw6ICAke29wdGlvbnMuYXR0cmlidXRlQmFja2dyb3VuZENvbG9yRXZlbn07XG4gICAgc3Ryb2tlOiAke29wdGlvbnMubm9kZUJvcmRlcn07XG4gIH1cblxuICAucmVsYXRpb25zaGlwTGFiZWxCb3gge1xuICAgIGZpbGw6ICR7b3B0aW9ucy50ZXJ0aWFyeUNvbG9yfTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtvcHRpb25zLnRlcnRpYXJ5Q29sb3J9O1xuICAgICAgcmVjdCB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIH1cbiAgfVxuXG4gICAgLnJlbGF0aW9uc2hpcExpbmUge1xuICAgICAgc3Ryb2tlOiAke29wdGlvbnMubGluZUNvbG9yfTtcbiAgICB9XG5cbiAgLmVudGl0eVRpdGxlVGV4dCB7XG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZmlsbDogJHtvcHRpb25zLnRleHRDb2xvcn07XG4gIH0gICAgXG4gICNNRF9QQVJFTlRfU1RBUlQge1xuICAgIGZpbGw6ICNmNWY1ZjUgIWltcG9ydGFudDtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy5saW5lQ29sb3J9ICFpbXBvcnRhbnQ7XG4gICAgc3Ryb2tlLXdpZHRoOiAxO1xuICB9XG4gICNNRF9QQVJFTlRfRU5EIHtcbiAgICBmaWxsOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG4gICAgc3Ryb2tlOiAke29wdGlvbnMubGluZUNvbG9yfSAhaW1wb3J0YW50O1xuICAgIHN0cm9rZS13aWR0aDogMTtcbiAgfVxuICBcbmA7XG5jb25zdCBlclN0eWxlcyA9IGdldFN0eWxlcztcbmNvbnN0IGRpYWdyYW0gPSB7XG4gIHBhcnNlcjogZXJQYXJzZXIsXG4gIGRiOiBlckRiLFxuICByZW5kZXJlcjogZXJSZW5kZXJlcixcbiAgc3R5bGVzOiBlclN0eWxlc1xufTtcbmV4cG9ydCB7XG4gIGRpYWdyYW1cbn07XG4iXSwibmFtZXMiOlsibG9nIiwiY2xlYXIkMSIsImdldENvbmZpZyIsInNldEFjY1RpdGxlIiwiZ2V0QWNjVGl0bGUiLCJzZXRBY2NEZXNjcmlwdGlvbiIsImdldEFjY0Rlc2NyaXB0aW9uIiwic2V0RGlhZ3JhbVRpdGxlIiwiZ2V0RGlhZ3JhbVRpdGxlIiwicGFyc2VHZW5lcmljVHlwZXMiLCJsaW5lIiwiY3VydmVCYXNpcyIsInNlbGVjdCIsImdyYXBobGliLkdyYXBoIiwibGF5b3V0IiwidXRpbHMiLCJjb25maWd1cmVTdmdTaXplIiwidjUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsWUFBZSxxSEFBcUg7O0FDRXBJLFNBQVMsUUFBUSxDQUFDLElBQUksRUFBRTtBQUN4QixFQUFFLE9BQU8sT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEQ7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNyQjtBQUNBLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDOUIsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUNEO0FBQ08sU0FBUyxlQUFlLENBQUMsR0FBRyxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDakQ7QUFDQTtBQUNBLEVBQUUsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyZjs7QUNkQSxTQUFTLEtBQUssQ0FBQyxJQUFJLEVBQUU7QUFDckIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3ZCLElBQUksTUFBTSxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDcEMsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNSLEVBQUUsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDakM7QUFDQSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3ZELEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQzNCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQzFCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDcEI7QUFDQSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZELEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDcEI7QUFDQSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hELEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDcEI7QUFDQSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hELEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDcEI7QUFDQTtBQUNBLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJ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SyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQixFQUFFLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzlCLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekI7QUFDQSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDOUIsSUFBSSxNQUFNLEdBQUcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwQztBQUNBLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUNqQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUksS0FBSztBQUNMO0FBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ2YsR0FBRztBQUNIO0FBQ0EsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzFELEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDO0FBQ3JEO0FBQ0EsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQzlCLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbEM7QUFDQSxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDakMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLEtBQUs7QUFDTDtBQUNBLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUNsQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRSxLQUFLO0FBQ0w7QUFDQSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQjtBQUNBLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUNqQyxNQUFNLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25FLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNaLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNaLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNaLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNaLEtBQUs7QUFDTDtBQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFCLEdBQUc7QUFDSDtBQUNBLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ25XOztBQzNGQSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqQyxXQUFlLEVBQUU7O0FDV2pCLElBQUksTUFBTSxHQUFHLFdBQVc7QUFDeEIsRUFBRSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDdkQsTUFBTSxDQUFDO0FBQ1AsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNkLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FB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RUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUs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LEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwb0QsSUFBSSxjQUFjLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQ2hELElBQUksVUFBVSxFQUFFLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDL0MsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDNUIsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLE9BQU8sTUFBTTtBQUNiLFFBQVEsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsUUFBUSxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUMxQixR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S0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDOUMsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3ZDLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDdEUsUUFBUSxJQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztBQUMzQixRQUFRLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pELFFBQVEsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakUsUUFBUSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2RSxRQUFRLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDOUIsVUFBVSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzVDLFNBQVM7QUFDVCxRQUFRLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2xDLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRztBQUN0QixVQUFVLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVU7QUFDNUMsVUFBVSxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO0FBQ3RDLFVBQVUsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENB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QUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakMsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxPQUFPLENBQUMsQ0FBQztBQUNyQixTQUFTO0FBQ1QsT0FBTztBQUNQLE1BQU0sS0FBSyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsdUJBQXVCLEVBQUUsdUJBQXVCLEVBQUUsdUJBQXVCLEVBQUUsd0JBQXdCLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSwwQkFBMEIsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsa0NBQWtDLEVBQUUseUJBQXlCLEVBQUUsMENBQTBDLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsZ0NBQWdDLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztBQUNyZ0MsTUFBTSxVQUFVLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFB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LENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLHVCQUF1QixDQUFDLENBQUM7QUFDdlIsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaE0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkgsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNsRyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0wsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdEgsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUNwRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsOENBQThDLENBQUMsQ0FBQztBQUNwVCxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLDBDQUEwQyxDQUFDLENBQUM7QUFDOVMsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FB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QUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRUEsZUFBUyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzFULE1BQU0sYUFBYSxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUM7QUFDckMsTUFBTSxNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdkQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1RCxLQUFLO0FBQ0wsSUFBSSxJQUFJLFVBQVUsRUFBRTtBQUNwQixNQUFNLE1BQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFQSxlQUFTLEVBQUUsQ0FBQyxVQUFVLENB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
