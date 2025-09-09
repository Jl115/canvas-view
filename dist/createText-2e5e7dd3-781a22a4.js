'use strict';

var index$1 = require('./index-deb671d6.js');

/**
 * @typedef {import('mdast').Root|import('mdast').Content} Node
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [includeImageAlt=true]
 *   Whether to use `alt` for `image`s.
 * @property {boolean | null | undefined} [includeHtml=true]
 *   Whether to use `value` of HTML.
 */

/** @type {Options} */
const emptyOptions = {};

/**
 * Get the text content of a node or list of nodes.
 *
 * Prefers the node’s plain-text fields, otherwise serializes its children,
 * and if the given value is an array, serialize the nodes in it.
 *
 * @param {unknown} value
 *   Thing to serialize, typically `Node`.
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {string}
 *   Serialized `value`.
 */
function toString(value, options) {
  const settings = options || emptyOptions;
  const includeImageAlt =
    typeof settings.includeImageAlt === 'boolean'
      ? settings.includeImageAlt
      : true;
  const includeHtml =
    typeof settings.includeHtml === 'boolean' ? settings.includeHtml : true;

  return one(value, includeImageAlt, includeHtml)
}

/**
 * One node or several nodes.
 *
 * @param {unknown} value
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized node.
 */
function one(value, includeImageAlt, includeHtml) {
  if (node(value)) {
    if ('value' in value) {
      return value.type === 'html' && !includeHtml ? '' : value.value
    }

    if (includeImageAlt && 'alt' in value && value.alt) {
      return value.alt
    }

    if ('children' in value) {
      return all(value.children, includeImageAlt, includeHtml)
    }
  }

  if (Array.isArray(value)) {
    return all(value, includeImageAlt, includeHtml)
  }

  return ''
}

/**
 * Serialize a list of nodes.
 *
 * @param {Array<unknown>} values
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized nodes.
 */
function all(values, includeImageAlt, includeHtml) {
  /** @type {Array<string>} */
  const result = [];
  let index = -1;

  while (++index < values.length) {
    result[index] = one(values[index], includeImageAlt, includeHtml);
  }

  return result.join('')
}

/**
 * Check if `value` looks like a node.
 *
 * @param {unknown} value
 *   Thing.
 * @returns {value is Node}
 *   Whether `value` is a node.
 */
function node(value) {
  return Boolean(value && typeof value === 'object')
}

/**
 * Like `Array#splice`, but smarter for giant arrays.
 *
 * `Array#splice` takes all items to be inserted as individual argument which
 * causes a stack overflow in V8 when trying to insert 100k items for instance.
 *
 * Otherwise, this does not return the removed items, and takes `items` as an
 * array instead of rest parameters.
 *
 * @template {unknown} T
 *   Item type.
 * @param {Array<T>} list
 *   List to operate on.
 * @param {number} start
 *   Index to remove/insert at (can be negative).
 * @param {number} remove
 *   Number of items to remove.
 * @param {Array<T>} items
 *   Items to inject into `list`.
 * @returns {void}
 *   Nothing.
 */
function splice(list, start, remove, items) {
  const end = list.length;
  let chunkStart = 0;
  /** @type {Array<unknown>} */
  let parameters;

  // Make start between zero and `end` (included).
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove = remove > 0 ? remove : 0;

  // No need to chunk the items if there’s only a couple (10k) items.
  if (items.length < 10000) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    // @ts-expect-error Hush, it’s fine.
    list.splice(...parameters);
  } else {
    // Delete `remove` items starting from `start`
    if (remove) list.splice(start, remove);

    // Insert the items in chunks to not cause stack overflows.
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 10000);
      parameters.unshift(start, 0);
      // @ts-expect-error Hush, it’s fine.
      list.splice(...parameters);
      chunkStart += 10000;
      start += 10000;
    }
  }
}

/**
 * Append `items` (an array) at the end of `list` (another array).
 * When `list` was empty, returns `items` instead.
 *
 * This prevents a potentially expensive operation when `list` is empty,
 * and adds items in batches to prevent V8 from hanging.
 *
 * @template {unknown} T
 *   Item type.
 * @param {Array<T>} list
 *   List to operate on.
 * @param {Array<T>} items
 *   Items to add to `list`.
 * @returns {Array<T>}
 *   Either `list` or `items`.
 */
function push(list, items) {
  if (list.length > 0) {
    splice(list, list.length, 0, items);
    return list
  }
  return items
}

/**
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').Handles} Handles
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 * @typedef {import('micromark-util-types').NormalizedExtension} NormalizedExtension
 */

const hasOwnProperty = {}.hasOwnProperty;

/**
 * Combine multiple syntax extensions into one.
 *
 * @param {Array<Extension>} extensions
 *   List of syntax extensions.
 * @returns {NormalizedExtension}
 *   A single combined extension.
 */
function combineExtensions(extensions) {
  /** @type {NormalizedExtension} */
  const all = {};
  let index = -1;

  while (++index < extensions.length) {
    syntaxExtension(all, extensions[index]);
  }

  return all
}

/**
 * Merge `extension` into `all`.
 *
 * @param {NormalizedExtension} all
 *   Extension to merge into.
 * @param {Extension} extension
 *   Extension to merge.
 * @returns {void}
 */
function syntaxExtension(all, extension) {
  /** @type {keyof Extension} */
  let hook;

  for (hook in extension) {
    const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;
    /** @type {Record<string, unknown>} */
    const left = maybe || (all[hook] = {});
    /** @type {Record<string, unknown> | undefined} */
    const right = extension[hook];
    /** @type {string} */
    let code;

    if (right) {
      for (code in right) {
        if (!hasOwnProperty.call(left, code)) left[code] = [];
        const value = right[code];
        constructs(
          // @ts-expect-error Looks like a list.
          left[code],
          Array.isArray(value) ? value : value ? [value] : []
        );
      }
    }
  }
}

/**
 * Merge `list` into `existing` (both lists of constructs).
 * Mutates `existing`.
 *
 * @param {Array<unknown>} existing
 * @param {Array<unknown>} list
 * @returns {void}
 */
function constructs(existing, list) {
  let index = -1;
  /** @type {Array<unknown>} */
  const before = [];

  while (++index < list.length) {
(list[index].add === 'after' ? existing : before).push(list[index]);
  }

  splice(existing, 0, 0, before);
}

// This module is generated by `script/`.
//
// CommonMark handles attention (emphasis, strong) markers based on what comes
// before or after them.
// One such difference is if those characters are Unicode punctuation.
// This script is generated from the Unicode data.

/**
 * Regular expression that matches a unicode punctuation character.
 */
const unicodePunctuationRegex =
  /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

/**
 * @typedef {import('micromark-util-types').Code} Code
 */

/**
 * Check whether the character code represents an ASCII alpha (`a` through `z`,
 * case insensitive).
 *
 * An **ASCII alpha** is an ASCII upper alpha or ASCII lower alpha.
 *
 * An **ASCII upper alpha** is a character in the inclusive range U+0041 (`A`)
 * to U+005A (`Z`).
 *
 * An **ASCII lower alpha** is a character in the inclusive range U+0061 (`a`)
 * to U+007A (`z`).
 *
 * @param code
 *   Code.
 * @returns
 *   Whether it matches.
 */
const asciiAlpha = regexCheck(/[A-Za-z]/);

/**
 * Check whether the character code represents an ASCII alphanumeric (`a`
 * through `z`, case insensitive, or `0` through `9`).
 *
 * An **ASCII alphanumeric** is an ASCII digit (see `asciiDigit`) or ASCII alpha
 * (see `asciiAlpha`).
 *
 * @param code
 *   Code.
 * @returns
 *   Whether it matches.
 */
const asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);

/**
 * Check whether the character code represents an ASCII atext.
 *
 * atext is an ASCII alphanumeric (see `asciiAlphanumeric`), or a character in
 * the inclusive ranges U+0023 NUMBER SIGN (`#`) to U+0027 APOSTROPHE (`'`),
 * U+002A ASTERISK (`*`), U+002B PLUS SIGN (`+`), U+002D DASH (`-`), U+002F
 * SLASH (`/`), U+003D EQUALS TO (`=`), U+003F QUESTION MARK (`?`), U+005E
 * CARET (`^`) to U+0060 GRAVE ACCENT (`` ` ``), or U+007B LEFT CURLY BRACE
 * (`{`) to U+007E TILDE (`~`).
 *
 * See:
 * **\[RFC5322]**:
 * [Internet Message Format](https://tools.ietf.org/html/rfc5322).
 * P. Resnick.
 * IETF.
 *
 * @param code
 *   Code.
 * @returns
 *   Whether it matches.
 */
const asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);

/**
 * Check whether a character code is an ASCII control character.
 *
 * An **ASCII control** is a character in the inclusive range U+0000 NULL (NUL)
 * to U+001F (US), or U+007F (DEL).
 *
 * @param {Code} code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
function asciiControl(code) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code !== null && (code < 32 || code === 127)
  )
}

/**
 * Check whether the character code represents an ASCII digit (`0` through `9`).
 *
 * An **ASCII digit** is a character in the inclusive range U+0030 (`0`) to
 * U+0039 (`9`).
 *
 * @param code
 *   Code.
 * @returns
 *   Whether it matches.
 */
const asciiDigit = regexCheck(/\d/);

/**
 * Check whether the character code represents an ASCII hex digit (`a` through
 * `f`, case insensitive, or `0` through `9`).
 *
 * An **ASCII hex digit** is an ASCII digit (see `asciiDigit`), ASCII upper hex
 * digit, or an ASCII lower hex digit.
 *
 * An **ASCII upper hex digit** is a character in the inclusive range U+0041
 * (`A`) to U+0046 (`F`).
 *
 * An **ASCII lower hex digit** is a character in the inclusive range U+0061
 * (`a`) to U+0066 (`f`).
 *
 * @param code
 *   Code.
 * @returns
 *   Whether it matches.
 */
const asciiHexDigit = regexCheck(/[\dA-Fa-f]/);

/**
 * Check whether the character code represents ASCII punctuation.
 *
 * An **ASCII punctuation** is a character in the inclusive ranges U+0021
 * EXCLAMATION MARK (`!`) to U+002F SLASH (`/`), U+003A COLON (`:`) to U+0040 AT
 * SIGN (`@`), U+005B LEFT SQUARE BRACKET (`[`) to U+0060 GRAVE ACCENT
 * (`` ` ``), or U+007B LEFT CURLY BRACE (`{`) to U+007E TILDE (`~`).
 *
 * @param code
 *   Code.
 * @returns
 *   Whether it matches.
 */
const asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);

/**
 * Check whether a character code is a markdown line ending.
 *
 * A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN
 * LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR).
 *
 * In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE
 * RETURN (CR) are replaced by these virtual characters depending on whether
 * they occurred together.
 *
 * @param {Code} code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
function markdownLineEnding(code) {
  return code !== null && code < -2
}

/**
 * Check whether a character code is a markdown line ending (see
 * `markdownLineEnding`) or markdown space (see `markdownSpace`).
 *
 * @param {Code} code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
function markdownLineEndingOrSpace(code) {
  return code !== null && (code < 0 || code === 32)
}

/**
 * Check whether a character code is a markdown space.
 *
 * A **markdown space** is the concrete character U+0020 SPACE (SP) and the
 * virtual characters M-0001 VIRTUAL SPACE (VS) and M-0002 HORIZONTAL TAB (HT).
 *
 * In micromark, the actual character U+0009 CHARACTER TABULATION (HT) is
 * replaced by one M-0002 HORIZONTAL TAB (HT) and between 0 and 3 M-0001 VIRTUAL
 * SPACE (VS) characters, depending on the column at which the tab occurred.
 *
 * @param {Code} code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
function markdownSpace(code) {
  return code === -2 || code === -1 || code === 32
}

// Size note: removing ASCII from the regex and using `asciiPunctuation` here
// In fact adds to the bundle size.
/**
 * Check whether the character code represents Unicode punctuation.
 *
 * A **Unicode punctuation** is a character in the Unicode `Pc` (Punctuation,
 * Connector), `Pd` (Punctuation, Dash), `Pe` (Punctuation, Close), `Pf`
 * (Punctuation, Final quote), `Pi` (Punctuation, Initial quote), `Po`
 * (Punctuation, Other), or `Ps` (Punctuation, Open) categories, or an ASCII
 * punctuation (see `asciiPunctuation`).
 *
 * See:
 * **\[UNICODE]**:
 * [The Unicode Standard](https://www.unicode.org/versions/).
 * Unicode Consortium.
 *
 * @param code
 *   Code.
 * @returns
 *   Whether it matches.
 */
const unicodePunctuation = regexCheck(unicodePunctuationRegex);

/**
 * Check whether the character code represents Unicode whitespace.
 *
 * Note that this does handle micromark specific markdown whitespace characters.
 * See `markdownLineEndingOrSpace` to check that.
 *
 * A **Unicode whitespace** is a character in the Unicode `Zs` (Separator,
 * Space) category, or U+0009 CHARACTER TABULATION (HT), U+000A LINE FEED (LF),
 * U+000C (FF), or U+000D CARRIAGE RETURN (CR) (**\[UNICODE]**).
 *
 * See:
 * **\[UNICODE]**:
 * [The Unicode Standard](https://www.unicode.org/versions/).
 * Unicode Consortium.
 *
 * @param code
 *   Code.
 * @returns
 *   Whether it matches.
 */
const unicodeWhitespace = regexCheck(/\s/);

/**
 * Create a code check from a regex.
 *
 * @param {RegExp} regex
 * @returns {(code: Code) => boolean}
 */
function regexCheck(regex) {
  return check

  /**
   * Check whether a code matches the bound regex.
   *
   * @param {Code} code
   *   Character code.
   * @returns {boolean}
   *   Whether the character code matches the bound regex.
   */
  function check(code) {
    return code !== null && regex.test(String.fromCharCode(code))
  }
}

/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenType} TokenType
 */

// To do: implement `spaceOrTab`, `spaceOrTabMinMax`, `spaceOrTabWithOptions`.

/**
 * Parse spaces and tabs.
 *
 * There is no `nok` parameter:
 *
 * *   spaces in markdown are often optional, in which case this factory can be
 *     used and `ok` will be switched to whether spaces were found or not
 * *   one line ending or space can be detected with `markdownSpace(code)` right
 *     before using `factorySpace`
 *
 * ###### Examples
 *
 * Where `␉` represents a tab (plus how much it expands) and `␠` represents a
 * single space.
 *
 * ```markdown
 * ␉
 * ␠␠␠␠
 * ␉␠
 * ```
 *
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @param {TokenType} type
 *   Type (`' \t'`).
 * @param {number | undefined} [max=Infinity]
 *   Max (exclusive).
 * @returns
 *   Start state.
 */
function factorySpace(effects, ok, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start

  /** @type {State} */
  function start(code) {
    if (markdownSpace(code)) {
      effects.enter(type);
      return prefix(code)
    }
    return ok(code)
  }

  /** @type {State} */
  function prefix(code) {
    if (markdownSpace(code) && size++ < limit) {
      effects.consume(code);
      return prefix
    }
    effects.exit(type);
    return ok(code)
  }
}

/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 */
/** @type {InitialConstruct} */
const content$1 = {
  tokenize: initializeContent
};

/**
 * @this {TokenizeContext}
 * @type {Initializer}
 */
function initializeContent(effects) {
  const contentStart = effects.attempt(
    this.parser.constructs.contentInitial,
    afterContentStartConstruct,
    paragraphInitial
  );
  /** @type {Token} */
  let previous;
  return contentStart

  /** @type {State} */
  function afterContentStartConstruct(code) {
    if (code === null) {
      effects.consume(code);
      return
    }
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, contentStart, 'linePrefix')
  }

  /** @type {State} */
  function paragraphInitial(code) {
    effects.enter('paragraph');
    return lineStart(code)
  }

  /** @type {State} */
  function lineStart(code) {
    const token = effects.enter('chunkText', {
      contentType: 'text',
      previous
    });
    if (previous) {
      previous.next = token;
    }
    previous = token;
    return data(code)
  }

  /** @type {State} */
  function data(code) {
    if (code === null) {
      effects.exit('chunkText');
      effects.exit('paragraph');
      effects.consume(code);
      return
    }
    if (markdownLineEnding(code)) {
      effects.consume(code);
      effects.exit('chunkText');
      return lineStart
    }

    // Data.
    effects.consume(code);
    return data
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').ContainerState} ContainerState
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/** @type {InitialConstruct} */
const document$2 = {
  tokenize: initializeDocument
};

/** @type {Construct} */
const containerConstruct = {
  tokenize: tokenizeContainer
};

/**
 * @this {TokenizeContext}
 * @type {Initializer}
 */
function initializeDocument(effects) {
  const self = this;
  /** @type {Array<StackItem>} */
  const stack = [];
  let continued = 0;
  /** @type {TokenizeContext | undefined} */
  let childFlow;
  /** @type {Token | undefined} */
  let childToken;
  /** @type {number} */
  let lineStartOffset;
  return start

  /** @type {State} */
  function start(code) {
    // First we iterate through the open blocks, starting with the root
    // document, and descending through last children down to the last open
    // block.
    // Each block imposes a condition that the line must satisfy if the block is
    // to remain open.
    // For example, a block quote requires a `>` character.
    // A paragraph requires a non-blank line.
    // In this phase we may match all or just some of the open blocks.
    // But we cannot close unmatched blocks yet, because we may have a lazy
    // continuation line.
    if (continued < stack.length) {
      const item = stack[continued];
      self.containerState = item[1];
      return effects.attempt(
        item[0].continuation,
        documentContinue,
        checkNewContainers
      )(code)
    }

    // Done.
    return checkNewContainers(code)
  }

  /** @type {State} */
  function documentContinue(code) {
    continued++;

    // Note: this field is called `_closeFlow` but it also closes containers.
    // Perhaps a good idea to rename it but it’s already used in the wild by
    // extensions.
    if (self.containerState._closeFlow) {
      self.containerState._closeFlow = undefined;
      if (childFlow) {
        closeFlow();
      }

      // Note: this algorithm for moving events around is similar to the
      // algorithm when dealing with lazy lines in `writeToChild`.
      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      /** @type {Point | undefined} */
      let point;

      // Find the flow chunk.
      while (indexBeforeFlow--) {
        if (
          self.events[indexBeforeFlow][0] === 'exit' &&
          self.events[indexBeforeFlow][1].type === 'chunkFlow'
        ) {
          point = self.events[indexBeforeFlow][1].end;
          break
        }
      }
      exitContainers(continued);

      // Fix positions.
      let index = indexBeforeExits;
      while (index < self.events.length) {
        self.events[index][1].end = Object.assign({}, point);
        index++;
      }

      // Inject the exits earlier (they’re still also at the end).
      splice(
        self.events,
        indexBeforeFlow + 1,
        0,
        self.events.slice(indexBeforeExits)
      );

      // Discard the duplicate exits.
      self.events.length = index;
      return checkNewContainers(code)
    }
    return start(code)
  }

  /** @type {State} */
  function checkNewContainers(code) {
    // Next, after consuming the continuation markers for existing blocks, we
    // look for new block starts (e.g. `>` for a block quote).
    // If we encounter a new block start, we close any blocks unmatched in
    // step 1 before creating the new block as a child of the last matched
    // block.
    if (continued === stack.length) {
      // No need to `check` whether there’s a container, of `exitContainers`
      // would be moot.
      // We can instead immediately `attempt` to parse one.
      if (!childFlow) {
        return documentContinued(code)
      }

      // If we have concrete content, such as block HTML or fenced code,
      // we can’t have containers “pierce” into them, so we can immediately
      // start.
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code)
      }

      // If we do have flow, it could still be a blank line,
      // but we’d be interrupting it w/ a new container if there’s a current
      // construct.
      // To do: next major: remove `_gfmTableDynamicInterruptHack` (no longer
      // needed in micromark-extension-gfm-table@1.0.6).
      self.interrupt = Boolean(
        childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack
      );
    }

    // Check if there is a new container.
    self.containerState = {};
    return effects.check(
      containerConstruct,
      thereIsANewContainer,
      thereIsNoNewContainer
    )(code)
  }

  /** @type {State} */
  function thereIsANewContainer(code) {
    if (childFlow) closeFlow();
    exitContainers(continued);
    return documentContinued(code)
  }

  /** @type {State} */
  function thereIsNoNewContainer(code) {
    self.parser.lazy[self.now().line] = continued !== stack.length;
    lineStartOffset = self.now().offset;
    return flowStart(code)
  }

  /** @type {State} */
  function documentContinued(code) {
    // Try new containers.
    self.containerState = {};
    return effects.attempt(
      containerConstruct,
      containerContinue,
      flowStart
    )(code)
  }

  /** @type {State} */
  function containerContinue(code) {
    continued++;
    stack.push([self.currentConstruct, self.containerState]);
    // Try another.
    return documentContinued(code)
  }

  /** @type {State} */
  function flowStart(code) {
    if (code === null) {
      if (childFlow) closeFlow();
      exitContainers(0);
      effects.consume(code);
      return
    }
    childFlow = childFlow || self.parser.flow(self.now());
    effects.enter('chunkFlow', {
      contentType: 'flow',
      previous: childToken,
      _tokenizer: childFlow
    });
    return flowContinue(code)
  }

  /** @type {State} */
  function flowContinue(code) {
    if (code === null) {
      writeToChild(effects.exit('chunkFlow'), true);
      exitContainers(0);
      effects.consume(code);
      return
    }
    if (markdownLineEnding(code)) {
      effects.consume(code);
      writeToChild(effects.exit('chunkFlow'));
      // Get ready for the next line.
      continued = 0;
      self.interrupt = undefined;
      return start
    }
    effects.consume(code);
    return flowContinue
  }

  /**
   * @param {Token} token
   * @param {boolean | undefined} [eof]
   * @returns {void}
   */
  function writeToChild(token, eof) {
    const stream = self.sliceStream(token);
    if (eof) stream.push(null);
    token.previous = childToken;
    if (childToken) childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream);

    // Alright, so we just added a lazy line:
    //
    // ```markdown
    // > a
    // b.
    //
    // Or:
    //
    // > ~~~c
    // d
    //
    // Or:
    //
    // > | e |
    // f
    // ```
    //
    // The construct in the second example (fenced code) does not accept lazy
    // lines, so it marked itself as done at the end of its first line, and
    // then the content construct parses `d`.
    // Most constructs in markdown match on the first line: if the first line
    // forms a construct, a non-lazy line can’t “unmake” it.
    //
    // The construct in the third example is potentially a GFM table, and
    // those are *weird*.
    // It *could* be a table, from the first line, if the following line
    // matches a condition.
    // In this case, that second line is lazy, which “unmakes” the first line
    // and turns the whole into one content block.
    //
    // We’ve now parsed the non-lazy and the lazy line, and can figure out
    // whether the lazy line started a new flow block.
    // If it did, we exit the current containers between the two flow blocks.
    if (self.parser.lazy[token.start.line]) {
      let index = childFlow.events.length;
      while (index--) {
        if (
          // The token starts before the line ending…
          childFlow.events[index][1].start.offset < lineStartOffset &&
          // …and either is not ended yet…
          (!childFlow.events[index][1].end ||
            // …or ends after it.
            childFlow.events[index][1].end.offset > lineStartOffset)
        ) {
          // Exit: there’s still something open, which means it’s a lazy line
          // part of something.
          return
        }
      }

      // Note: this algorithm for moving events around is similar to the
      // algorithm when closing flow in `documentContinue`.
      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      /** @type {boolean | undefined} */
      let seen;
      /** @type {Point | undefined} */
      let point;

      // Find the previous chunk (the one before the lazy line).
      while (indexBeforeFlow--) {
        if (
          self.events[indexBeforeFlow][0] === 'exit' &&
          self.events[indexBeforeFlow][1].type === 'chunkFlow'
        ) {
          if (seen) {
            point = self.events[indexBeforeFlow][1].end;
            break
          }
          seen = true;
        }
      }
      exitContainers(continued);

      // Fix positions.
      index = indexBeforeExits;
      while (index < self.events.length) {
        self.events[index][1].end = Object.assign({}, point);
        index++;
      }

      // Inject the exits earlier (they’re still also at the end).
      splice(
        self.events,
        indexBeforeFlow + 1,
        0,
        self.events.slice(indexBeforeExits)
      );

      // Discard the duplicate exits.
      self.events.length = index;
    }
  }

  /**
   * @param {number} size
   * @returns {void}
   */
  function exitContainers(size) {
    let index = stack.length;

    // Exit open containers.
    while (index-- > size) {
      const entry = stack[index];
      self.containerState = entry[1];
      entry[0].exit.call(self, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    childFlow.write([null]);
    childToken = undefined;
    childFlow = undefined;
    self.containerState._closeFlow = undefined;
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeContainer(effects, ok, nok) {
  // Always populated by defaults.

  return factorySpace(
    effects,
    effects.attempt(this.parser.constructs.document, ok, nok),
    'linePrefix',
    this.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4
  )
}

/**
 * @typedef {import('micromark-util-types').Code} Code
 */
/**
 * Classify whether a code represents whitespace, punctuation, or something
 * else.
 *
 * Used for attention (emphasis, strong), whose sequences can open or close
 * based on the class of surrounding characters.
 *
 * > 👉 **Note**: eof (`null`) is seen as whitespace.
 *
 * @param {Code} code
 *   Code.
 * @returns {typeof constants.characterGroupWhitespace | typeof constants.characterGroupPunctuation | undefined}
 *   Group.
 */
function classifyCharacter(code) {
  if (
    code === null ||
    markdownLineEndingOrSpace(code) ||
    unicodeWhitespace(code)
  ) {
    return 1
  }
  if (unicodePunctuation(code)) {
    return 2
  }
}

/**
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 */

/**
 * Call all `resolveAll`s.
 *
 * @param {Array<{resolveAll?: Resolver | undefined}>} constructs
 *   List of constructs, optionally with `resolveAll`s.
 * @param {Array<Event>} events
 *   List of events.
 * @param {TokenizeContext} context
 *   Context used by `tokenize`.
 * @returns {Array<Event>}
 *   Changed events.
 */
function resolveAll(constructs, events, context) {
  /** @type {Array<Resolver>} */
  const called = [];
  let index = -1;

  while (++index < constructs.length) {
    const resolve = constructs[index].resolveAll;

    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }

  return events
}

/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/** @type {Construct} */
const attention = {
  name: 'attention',
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
};

/**
 * Take all events and resolve attention to emphasis or strong.
 *
 * @type {Resolver}
 */
function resolveAllAttention(events, context) {
  let index = -1;
  /** @type {number} */
  let open;
  /** @type {Token} */
  let group;
  /** @type {Token} */
  let text;
  /** @type {Token} */
  let openingSequence;
  /** @type {Token} */
  let closingSequence;
  /** @type {number} */
  let use;
  /** @type {Array<Event>} */
  let nextEvents;
  /** @type {number} */
  let offset;

  // Walk through all events.
  //
  // Note: performance of this is fine on an mb of normal markdown, but it’s
  // a bottleneck for malicious stuff.
  while (++index < events.length) {
    // Find a token that can close.
    if (
      events[index][0] === 'enter' &&
      events[index][1].type === 'attentionSequence' &&
      events[index][1]._close
    ) {
      open = index;

      // Now walk back to find an opener.
      while (open--) {
        // Find a token that can open the closer.
        if (
          events[open][0] === 'exit' &&
          events[open][1].type === 'attentionSequence' &&
          events[open][1]._open &&
          // If the markers are the same:
          context.sliceSerialize(events[open][1]).charCodeAt(0) ===
            context.sliceSerialize(events[index][1]).charCodeAt(0)
        ) {
          // If the opening can close or the closing can open,
          // and the close size *is not* a multiple of three,
          // but the sum of the opening and closing size *is* multiple of three,
          // then don’t match.
          if (
            (events[open][1]._close || events[index][1]._open) &&
            (events[index][1].end.offset - events[index][1].start.offset) % 3 &&
            !(
              (events[open][1].end.offset -
                events[open][1].start.offset +
                events[index][1].end.offset -
                events[index][1].start.offset) %
              3
            )
          ) {
            continue
          }

          // Number of markers to use from the sequence.
          use =
            events[open][1].end.offset - events[open][1].start.offset > 1 &&
            events[index][1].end.offset - events[index][1].start.offset > 1
              ? 2
              : 1;
          const start = Object.assign({}, events[open][1].end);
          const end = Object.assign({}, events[index][1].start);
          movePoint(start, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start,
            end: Object.assign({}, events[open][1].end)
          };
          closingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start: Object.assign({}, events[index][1].start),
            end
          };
          text = {
            type: use > 1 ? 'strongText' : 'emphasisText',
            start: Object.assign({}, events[open][1].end),
            end: Object.assign({}, events[index][1].start)
          };
          group = {
            type: use > 1 ? 'strong' : 'emphasis',
            start: Object.assign({}, openingSequence.start),
            end: Object.assign({}, closingSequence.end)
          };
          events[open][1].end = Object.assign({}, openingSequence.start);
          events[index][1].start = Object.assign({}, closingSequence.end);
          nextEvents = [];

          // If there are more markers in the opening, add them before.
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = push(nextEvents, [
              ['enter', events[open][1], context],
              ['exit', events[open][1], context]
            ]);
          }

          // Opening.
          nextEvents = push(nextEvents, [
            ['enter', group, context],
            ['enter', openingSequence, context],
            ['exit', openingSequence, context],
            ['enter', text, context]
          ]);

          // Always populated by defaults.

          // Between.
          nextEvents = push(
            nextEvents,
            resolveAll(
              context.parser.constructs.insideSpan.null,
              events.slice(open + 1, index),
              context
            )
          );

          // Closing.
          nextEvents = push(nextEvents, [
            ['exit', text, context],
            ['enter', closingSequence, context],
            ['exit', closingSequence, context],
            ['exit', group, context]
          ]);

          // If there are more markers in the closing, add them after.
          if (events[index][1].end.offset - events[index][1].start.offset) {
            offset = 2;
            nextEvents = push(nextEvents, [
              ['enter', events[index][1], context],
              ['exit', events[index][1], context]
            ]);
          } else {
            offset = 0;
          }
          splice(events, open - 1, index - open + 3, nextEvents);
          index = open + nextEvents.length - offset - 2;
          break
        }
      }
    }
  }

  // Remove remaining sequences.
  index = -1;
  while (++index < events.length) {
    if (events[index][1].type === 'attentionSequence') {
      events[index][1].type = 'data';
    }
  }
  return events
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeAttention(effects, ok) {
  const attentionMarkers = this.parser.constructs.attentionMarkers.null;
  const previous = this.previous;
  const before = classifyCharacter(previous);

  /** @type {NonNullable<Code>} */
  let marker;
  return start

  /**
   * Before a sequence.
   *
   * ```markdown
   * > | **
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    marker = code;
    effects.enter('attentionSequence');
    return inside(code)
  }

  /**
   * In a sequence.
   *
   * ```markdown
   * > | **
   *     ^^
   * ```
   *
   * @type {State}
   */
  function inside(code) {
    if (code === marker) {
      effects.consume(code);
      return inside
    }
    const token = effects.exit('attentionSequence');

    // To do: next major: move this to resolver, just like `markdown-rs`.
    const after = classifyCharacter(code);

    // Always populated by defaults.

    const open =
      !after || (after === 2 && before) || attentionMarkers.includes(code);
    const close =
      !before || (before === 2 && after) || attentionMarkers.includes(previous);
    token._open = Boolean(marker === 42 ? open : open && (before || !close));
    token._close = Boolean(marker === 42 ? close : close && (after || !open));
    return ok(code)
  }
}

/**
 * Move a point a bit.
 *
 * Note: `move` only works inside lines! It’s not possible to move past other
 * chunks (replacement characters, tabs, or line endings).
 *
 * @param {Point} point
 * @param {number} offset
 * @returns {void}
 */
function movePoint(point, offset) {
  point.column += offset;
  point.offset += offset;
  point._bufferIndex += offset;
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/** @type {Construct} */
const autolink = {
  name: 'autolink',
  tokenize: tokenizeAutolink
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeAutolink(effects, ok, nok) {
  let size = 0;
  return start

  /**
   * Start of an autolink.
   *
   * ```markdown
   * > | a<https://example.com>b
   *      ^
   * > | a<user@example.com>b
   *      ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter('autolink');
    effects.enter('autolinkMarker');
    effects.consume(code);
    effects.exit('autolinkMarker');
    effects.enter('autolinkProtocol');
    return open
  }

  /**
   * After `<`, at protocol or atext.
   *
   * ```markdown
   * > | a<https://example.com>b
   *       ^
   * > | a<user@example.com>b
   *       ^
   * ```
   *
   * @type {State}
   */
  function open(code) {
    if (asciiAlpha(code)) {
      effects.consume(code);
      return schemeOrEmailAtext
    }
    return emailAtext(code)
  }

  /**
   * At second byte of protocol or atext.
   *
   * ```markdown
   * > | a<https://example.com>b
   *        ^
   * > | a<user@example.com>b
   *        ^
   * ```
   *
   * @type {State}
   */
  function schemeOrEmailAtext(code) {
    // ASCII alphanumeric and `+`, `-`, and `.`.
    if (code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) {
      // Count the previous alphabetical from `open` too.
      size = 1;
      return schemeInsideOrEmailAtext(code)
    }
    return emailAtext(code)
  }

  /**
   * In ambiguous protocol or atext.
   *
   * ```markdown
   * > | a<https://example.com>b
   *        ^
   * > | a<user@example.com>b
   *        ^
   * ```
   *
   * @type {State}
   */
  function schemeInsideOrEmailAtext(code) {
    if (code === 58) {
      effects.consume(code);
      size = 0;
      return urlInside
    }

    // ASCII alphanumeric and `+`, `-`, and `.`.
    if (
      (code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) &&
      size++ < 32
    ) {
      effects.consume(code);
      return schemeInsideOrEmailAtext
    }
    size = 0;
    return emailAtext(code)
  }

  /**
   * After protocol, in URL.
   *
   * ```markdown
   * > | a<https://example.com>b
   *             ^
   * ```
   *
   * @type {State}
   */
  function urlInside(code) {
    if (code === 62) {
      effects.exit('autolinkProtocol');
      effects.enter('autolinkMarker');
      effects.consume(code);
      effects.exit('autolinkMarker');
      effects.exit('autolink');
      return ok
    }

    // ASCII control, space, or `<`.
    if (code === null || code === 32 || code === 60 || asciiControl(code)) {
      return nok(code)
    }
    effects.consume(code);
    return urlInside
  }

  /**
   * In email atext.
   *
   * ```markdown
   * > | a<user.name@example.com>b
   *              ^
   * ```
   *
   * @type {State}
   */
  function emailAtext(code) {
    if (code === 64) {
      effects.consume(code);
      return emailAtSignOrDot
    }
    if (asciiAtext(code)) {
      effects.consume(code);
      return emailAtext
    }
    return nok(code)
  }

  /**
   * In label, after at-sign or dot.
   *
   * ```markdown
   * > | a<user.name@example.com>b
   *                 ^       ^
   * ```
   *
   * @type {State}
   */
  function emailAtSignOrDot(code) {
    return asciiAlphanumeric(code) ? emailLabel(code) : nok(code)
  }

  /**
   * In label, where `.` and `>` are allowed.
   *
   * ```markdown
   * > | a<user.name@example.com>b
   *                   ^
   * ```
   *
   * @type {State}
   */
  function emailLabel(code) {
    if (code === 46) {
      effects.consume(code);
      size = 0;
      return emailAtSignOrDot
    }
    if (code === 62) {
      // Exit, then change the token type.
      effects.exit('autolinkProtocol').type = 'autolinkEmail';
      effects.enter('autolinkMarker');
      effects.consume(code);
      effects.exit('autolinkMarker');
      effects.exit('autolink');
      return ok
    }
    return emailValue(code)
  }

  /**
   * In label, where `.` and `>` are *not* allowed.
   *
   * Though, this is also used in `emailLabel` to parse other values.
   *
   * ```markdown
   * > | a<user.name@ex-ample.com>b
   *                    ^
   * ```
   *
   * @type {State}
   */
  function emailValue(code) {
    // ASCII alphanumeric or `-`.
    if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
      const next = code === 45 ? emailValue : emailLabel;
      effects.consume(code);
      return next
    }
    return nok(code)
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/** @type {Construct} */
const blankLine = {
  tokenize: tokenizeBlankLine,
  partial: true
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeBlankLine(effects, ok, nok) {
  return start

  /**
   * Start of blank line.
   *
   * > 👉 **Note**: `␠` represents a space character.
   *
   * ```markdown
   * > | ␠␠␊
   *     ^
   * > | ␊
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    return markdownSpace(code)
      ? factorySpace(effects, after, 'linePrefix')(code)
      : after(code)
  }

  /**
   * At eof/eol, after optional whitespace.
   *
   * > 👉 **Note**: `␠` represents a space character.
   *
   * ```markdown
   * > | ␠␠␊
   *       ^
   * > | ␊
   *     ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    return code === null || markdownLineEnding(code) ? ok(code) : nok(code)
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/** @type {Construct} */
const blockQuote = {
  name: 'blockQuote',
  tokenize: tokenizeBlockQuoteStart,
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeBlockQuoteStart(effects, ok, nok) {
  const self = this;
  return start

  /**
   * Start of block quote.
   *
   * ```markdown
   * > | > a
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    if (code === 62) {
      const state = self.containerState;
      if (!state.open) {
        effects.enter('blockQuote', {
          _container: true
        });
        state.open = true;
      }
      effects.enter('blockQuotePrefix');
      effects.enter('blockQuoteMarker');
      effects.consume(code);
      effects.exit('blockQuoteMarker');
      return after
    }
    return nok(code)
  }

  /**
   * After `>`, before optional whitespace.
   *
   * ```markdown
   * > | > a
   *      ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    if (markdownSpace(code)) {
      effects.enter('blockQuotePrefixWhitespace');
      effects.consume(code);
      effects.exit('blockQuotePrefixWhitespace');
      effects.exit('blockQuotePrefix');
      return ok
    }
    effects.exit('blockQuotePrefix');
    return ok(code)
  }
}

/**
 * Start of block quote continuation.
 *
 * ```markdown
 *   | > a
 * > | > b
 *     ^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeBlockQuoteContinuation(effects, ok, nok) {
  const self = this;
  return contStart

  /**
   * Start of block quote continuation.
   *
   * Also used to parse the first block quote opening.
   *
   * ```markdown
   *   | > a
   * > | > b
   *     ^
   * ```
   *
   * @type {State}
   */
  function contStart(code) {
    if (markdownSpace(code)) {
      // Always populated by defaults.

      return factorySpace(
        effects,
        contBefore,
        'linePrefix',
        self.parser.constructs.disable.null.includes('codeIndented')
          ? undefined
          : 4
      )(code)
    }
    return contBefore(code)
  }

  /**
   * At `>`, after optional whitespace.
   *
   * Also used to parse the first block quote opening.
   *
   * ```markdown
   *   | > a
   * > | > b
   *     ^
   * ```
   *
   * @type {State}
   */
  function contBefore(code) {
    return effects.attempt(blockQuote, ok, nok)(code)
  }
}

/** @type {Exiter} */
function exit(effects) {
  effects.exit('blockQuote');
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/** @type {Construct} */
const characterEscape = {
  name: 'characterEscape',
  tokenize: tokenizeCharacterEscape
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeCharacterEscape(effects, ok, nok) {
  return start

  /**
   * Start of character escape.
   *
   * ```markdown
   * > | a\*b
   *      ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter('characterEscape');
    effects.enter('escapeMarker');
    effects.consume(code);
    effects.exit('escapeMarker');
    return inside
  }

  /**
   * After `\`, at punctuation.
   *
   * ```markdown
   * > | a\*b
   *       ^
   * ```
   *
   * @type {State}
   */
  function inside(code) {
    // ASCII punctuation.
    if (asciiPunctuation(code)) {
      effects.enter('characterEscapeValue');
      effects.consume(code);
      effects.exit('characterEscapeValue');
      effects.exit('characterEscape');
      return ok
    }
    return nok(code)
  }
}

/// <reference lib="dom" />

/* global document */

const element = document.createElement('i');

/**
 * @param {string} value
 * @returns {string | false}
 */
function decodeNamedCharacterReference(value) {
  const characterReference = '&' + value + ';';
  element.innerHTML = characterReference;
  const character = element.textContent;

  // Some named character references do not require the closing semicolon
  // (`&not`, for instance), which leads to situations where parsing the assumed
  // named reference of `&notit;` will result in the string `¬it;`.
  // When we encounter a trailing semicolon after parsing, and the character
  // reference to decode was not a semicolon (`&semi;`), we can assume that the
  // matching was not complete.
  if (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    character.charCodeAt(character.length - 1) === 59 /* `;` */ &&
    value !== 'semi'
  ) {
    return false
  }

  // If the decoded string is equal to the input, the character reference was
  // not valid.
  // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
  // yield `null`.
  return character === characterReference ? false : character
}

/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/** @type {Construct} */
const characterReference = {
  name: 'characterReference',
  tokenize: tokenizeCharacterReference
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeCharacterReference(effects, ok, nok) {
  const self = this;
  let size = 0;
  /** @type {number} */
  let max;
  /** @type {(code: Code) => boolean} */
  let test;
  return start

  /**
   * Start of character reference.
   *
   * ```markdown
   * > | a&amp;b
   *      ^
   * > | a&#123;b
   *      ^
   * > | a&#x9;b
   *      ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter('characterReference');
    effects.enter('characterReferenceMarker');
    effects.consume(code);
    effects.exit('characterReferenceMarker');
    return open
  }

  /**
   * After `&`, at `#` for numeric references or alphanumeric for named
   * references.
   *
   * ```markdown
   * > | a&amp;b
   *       ^
   * > | a&#123;b
   *       ^
   * > | a&#x9;b
   *       ^
   * ```
   *
   * @type {State}
   */
  function open(code) {
    if (code === 35) {
      effects.enter('characterReferenceMarkerNumeric');
      effects.consume(code);
      effects.exit('characterReferenceMarkerNumeric');
      return numeric
    }
    effects.enter('characterReferenceValue');
    max = 31;
    test = asciiAlphanumeric;
    return value(code)
  }

  /**
   * After `#`, at `x` for hexadecimals or digit for decimals.
   *
   * ```markdown
   * > | a&#123;b
   *        ^
   * > | a&#x9;b
   *        ^
   * ```
   *
   * @type {State}
   */
  function numeric(code) {
    if (code === 88 || code === 120) {
      effects.enter('characterReferenceMarkerHexadecimal');
      effects.consume(code);
      effects.exit('characterReferenceMarkerHexadecimal');
      effects.enter('characterReferenceValue');
      max = 6;
      test = asciiHexDigit;
      return value
    }
    effects.enter('characterReferenceValue');
    max = 7;
    test = asciiDigit;
    return value(code)
  }

  /**
   * After markers (`&#x`, `&#`, or `&`), in value, before `;`.
   *
   * The character reference kind defines what and how many characters are
   * allowed.
   *
   * ```markdown
   * > | a&amp;b
   *       ^^^
   * > | a&#123;b
   *        ^^^
   * > | a&#x9;b
   *         ^
   * ```
   *
   * @type {State}
   */
  function value(code) {
    if (code === 59 && size) {
      const token = effects.exit('characterReferenceValue');
      if (
        test === asciiAlphanumeric &&
        !decodeNamedCharacterReference(self.sliceSerialize(token))
      ) {
        return nok(code)
      }

      // To do: `markdown-rs` uses a different name:
      // `CharacterReferenceMarkerSemi`.
      effects.enter('characterReferenceMarker');
      effects.consume(code);
      effects.exit('characterReferenceMarker');
      effects.exit('characterReference');
      return ok
    }
    if (test(code) && size++ < max) {
      effects.consume(code);
      return value
    }
    return nok(code)
  }
}

/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/** @type {Construct} */
const nonLazyContinuation = {
  tokenize: tokenizeNonLazyContinuation,
  partial: true
};

/** @type {Construct} */
const codeFenced = {
  name: 'codeFenced',
  tokenize: tokenizeCodeFenced,
  concrete: true
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeCodeFenced(effects, ok, nok) {
  const self = this;
  /** @type {Construct} */
  const closeStart = {
    tokenize: tokenizeCloseStart,
    partial: true
  };
  let initialPrefix = 0;
  let sizeOpen = 0;
  /** @type {NonNullable<Code>} */
  let marker;
  return start

  /**
   * Start of code.
   *
   * ```markdown
   * > | ~~~js
   *     ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // To do: parse whitespace like `markdown-rs`.
    return beforeSequenceOpen(code)
  }

  /**
   * In opening fence, after prefix, at sequence.
   *
   * ```markdown
   * > | ~~~js
   *     ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function beforeSequenceOpen(code) {
    const tail = self.events[self.events.length - 1];
    initialPrefix =
      tail && tail[1].type === 'linePrefix'
        ? tail[2].sliceSerialize(tail[1], true).length
        : 0;
    marker = code;
    effects.enter('codeFenced');
    effects.enter('codeFencedFence');
    effects.enter('codeFencedFenceSequence');
    return sequenceOpen(code)
  }

  /**
   * In opening fence sequence.
   *
   * ```markdown
   * > | ~~~js
   *      ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function sequenceOpen(code) {
    if (code === marker) {
      sizeOpen++;
      effects.consume(code);
      return sequenceOpen
    }
    if (sizeOpen < 3) {
      return nok(code)
    }
    effects.exit('codeFencedFenceSequence');
    return markdownSpace(code)
      ? factorySpace(effects, infoBefore, 'whitespace')(code)
      : infoBefore(code)
  }

  /**
   * In opening fence, after the sequence (and optional whitespace), before info.
   *
   * ```markdown
   * > | ~~~js
   *        ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function infoBefore(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('codeFencedFence');
      return self.interrupt
        ? ok(code)
        : effects.check(nonLazyContinuation, atNonLazyBreak, after)(code)
    }
    effects.enter('codeFencedFenceInfo');
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return info(code)
  }

  /**
   * In info.
   *
   * ```markdown
   * > | ~~~js
   *        ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function info(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('chunkString');
      effects.exit('codeFencedFenceInfo');
      return infoBefore(code)
    }
    if (markdownSpace(code)) {
      effects.exit('chunkString');
      effects.exit('codeFencedFenceInfo');
      return factorySpace(effects, metaBefore, 'whitespace')(code)
    }
    if (code === 96 && code === marker) {
      return nok(code)
    }
    effects.consume(code);
    return info
  }

  /**
   * In opening fence, after info and whitespace, before meta.
   *
   * ```markdown
   * > | ~~~js eval
   *           ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function metaBefore(code) {
    if (code === null || markdownLineEnding(code)) {
      return infoBefore(code)
    }
    effects.enter('codeFencedFenceMeta');
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return meta(code)
  }

  /**
   * In meta.
   *
   * ```markdown
   * > | ~~~js eval
   *           ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function meta(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('chunkString');
      effects.exit('codeFencedFenceMeta');
      return infoBefore(code)
    }
    if (code === 96 && code === marker) {
      return nok(code)
    }
    effects.consume(code);
    return meta
  }

  /**
   * At eol/eof in code, before a non-lazy closing fence or content.
   *
   * ```markdown
   * > | ~~~js
   *          ^
   * > | alert(1)
   *             ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function atNonLazyBreak(code) {
    return effects.attempt(closeStart, after, contentBefore)(code)
  }

  /**
   * Before code content, not a closing fence, at eol.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *             ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function contentBefore(code) {
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return contentStart
  }

  /**
   * Before code content, not a closing fence.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *     ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function contentStart(code) {
    return initialPrefix > 0 && markdownSpace(code)
      ? factorySpace(
          effects,
          beforeContentChunk,
          'linePrefix',
          initialPrefix + 1
        )(code)
      : beforeContentChunk(code)
  }

  /**
   * Before code content, after optional prefix.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *     ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function beforeContentChunk(code) {
    if (code === null || markdownLineEnding(code)) {
      return effects.check(nonLazyContinuation, atNonLazyBreak, after)(code)
    }
    effects.enter('codeFlowValue');
    return contentChunk(code)
  }

  /**
   * In code content.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *     ^^^^^^^^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function contentChunk(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('codeFlowValue');
      return beforeContentChunk(code)
    }
    effects.consume(code);
    return contentChunk
  }

  /**
   * After code.
   *
   * ```markdown
   *   | ~~~js
   *   | alert(1)
   * > | ~~~
   *        ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    effects.exit('codeFenced');
    return ok(code)
  }

  /**
   * @this {TokenizeContext}
   * @type {Tokenizer}
   */
  function tokenizeCloseStart(effects, ok, nok) {
    let size = 0;
    return startBefore

    /**
     *
     *
     * @type {State}
     */
    function startBefore(code) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return start
    }

    /**
     * Before closing fence, at optional whitespace.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *     ^
     * ```
     *
     * @type {State}
     */
    function start(code) {
      // Always populated by defaults.

      // To do: `enter` here or in next state?
      effects.enter('codeFencedFence');
      return markdownSpace(code)
        ? factorySpace(
            effects,
            beforeSequenceClose,
            'linePrefix',
            self.parser.constructs.disable.null.includes('codeIndented')
              ? undefined
              : 4
          )(code)
        : beforeSequenceClose(code)
    }

    /**
     * In closing fence, after optional whitespace, at sequence.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *     ^
     * ```
     *
     * @type {State}
     */
    function beforeSequenceClose(code) {
      if (code === marker) {
        effects.enter('codeFencedFenceSequence');
        return sequenceClose(code)
      }
      return nok(code)
    }

    /**
     * In closing fence sequence.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *     ^
     * ```
     *
     * @type {State}
     */
    function sequenceClose(code) {
      if (code === marker) {
        size++;
        effects.consume(code);
        return sequenceClose
      }
      if (size >= sizeOpen) {
        effects.exit('codeFencedFenceSequence');
        return markdownSpace(code)
          ? factorySpace(effects, sequenceCloseAfter, 'whitespace')(code)
          : sequenceCloseAfter(code)
      }
      return nok(code)
    }

    /**
     * After closing fence sequence, after optional whitespace.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *        ^
     * ```
     *
     * @type {State}
     */
    function sequenceCloseAfter(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('codeFencedFence');
        return ok(code)
      }
      return nok(code)
    }
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeNonLazyContinuation(effects, ok, nok) {
  const self = this;
  return start

  /**
   *
   *
   * @type {State}
   */
  function start(code) {
    if (code === null) {
      return nok(code)
    }
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return lineStart
  }

  /**
   *
   *
   * @type {State}
   */
  function lineStart(code) {
    return self.parser.lazy[self.now().line] ? nok(code) : ok(code)
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/** @type {Construct} */
const codeIndented = {
  name: 'codeIndented',
  tokenize: tokenizeCodeIndented
};

/** @type {Construct} */
const furtherStart = {
  tokenize: tokenizeFurtherStart,
  partial: true
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeCodeIndented(effects, ok, nok) {
  const self = this;
  return start

  /**
   * Start of code (indented).
   *
   * > **Parsing note**: it is not needed to check if this first line is a
   * > filled line (that it has a non-whitespace character), because blank lines
   * > are parsed already, so we never run into that.
   *
   * ```markdown
   * > |     aaa
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // To do: manually check if interrupting like `markdown-rs`.

    effects.enter('codeIndented');
    // To do: use an improved `space_or_tab` function like `markdown-rs`,
    // so that we can drop the next state.
    return factorySpace(effects, afterPrefix, 'linePrefix', 4 + 1)(code)
  }

  /**
   * At start, after 1 or 4 spaces.
   *
   * ```markdown
   * > |     aaa
   *         ^
   * ```
   *
   * @type {State}
   */
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail &&
      tail[1].type === 'linePrefix' &&
      tail[2].sliceSerialize(tail[1], true).length >= 4
      ? atBreak(code)
      : nok(code)
  }

  /**
   * At a break.
   *
   * ```markdown
   * > |     aaa
   *         ^  ^
   * ```
   *
   * @type {State}
   */
  function atBreak(code) {
    if (code === null) {
      return after(code)
    }
    if (markdownLineEnding(code)) {
      return effects.attempt(furtherStart, atBreak, after)(code)
    }
    effects.enter('codeFlowValue');
    return inside(code)
  }

  /**
   * In code content.
   *
   * ```markdown
   * > |     aaa
   *         ^^^^
   * ```
   *
   * @type {State}
   */
  function inside(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('codeFlowValue');
      return atBreak(code)
    }
    effects.consume(code);
    return inside
  }

  /** @type {State} */
  function after(code) {
    effects.exit('codeIndented');
    // To do: allow interrupting like `markdown-rs`.
    // Feel free to interrupt.
    // tokenizer.interrupt = false
    return ok(code)
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeFurtherStart(effects, ok, nok) {
  const self = this;
  return furtherStart

  /**
   * At eol, trying to parse another indent.
   *
   * ```markdown
   * > |     aaa
   *            ^
   *   |     bbb
   * ```
   *
   * @type {State}
   */
  function furtherStart(code) {
    // To do: improve `lazy` / `pierce` handling.
    // If this is a lazy line, it can’t be code.
    if (self.parser.lazy[self.now().line]) {
      return nok(code)
    }
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return furtherStart
    }

    // To do: the code here in `micromark-js` is a bit different from
    // `markdown-rs` because there it can attempt spaces.
    // We can’t yet.
    //
    // To do: use an improved `space_or_tab` function like `markdown-rs`,
    // so that we can drop the next state.
    return factorySpace(effects, afterPrefix, 'linePrefix', 4 + 1)(code)
  }

  /**
   * At start, after 1 or 4 spaces.
   *
   * ```markdown
   * > |     aaa
   *         ^
   * ```
   *
   * @type {State}
   */
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail &&
      tail[1].type === 'linePrefix' &&
      tail[2].sliceSerialize(tail[1], true).length >= 4
      ? ok(code)
      : markdownLineEnding(code)
      ? furtherStart(code)
      : nok(code)
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Previous} Previous
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/** @type {Construct} */
const codeText = {
  name: 'codeText',
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous
};

// To do: next major: don’t resolve, like `markdown-rs`.
/** @type {Resolver} */
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  /** @type {number} */
  let index;
  /** @type {number | undefined} */
  let enter;

  // If we start and end with an EOL or a space.
  if (
    (events[headEnterIndex][1].type === 'lineEnding' ||
      events[headEnterIndex][1].type === 'space') &&
    (events[tailExitIndex][1].type === 'lineEnding' ||
      events[tailExitIndex][1].type === 'space')
  ) {
    index = headEnterIndex;

    // And we have data.
    while (++index < tailExitIndex) {
      if (events[index][1].type === 'codeTextData') {
        // Then we have padding.
        events[headEnterIndex][1].type = 'codeTextPadding';
        events[tailExitIndex][1].type = 'codeTextPadding';
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break
      }
    }
  }

  // Merge adjacent spaces and data.
  index = headEnterIndex - 1;
  tailExitIndex++;
  while (++index <= tailExitIndex) {
    if (enter === undefined) {
      if (index !== tailExitIndex && events[index][1].type !== 'lineEnding') {
        enter = index;
      }
    } else if (
      index === tailExitIndex ||
      events[index][1].type === 'lineEnding'
    ) {
      events[enter][1].type = 'codeTextData';
      if (index !== enter + 2) {
        events[enter][1].end = events[index - 1][1].end;
        events.splice(enter + 2, index - enter - 2);
        tailExitIndex -= index - enter - 2;
        index = enter + 2;
      }
      enter = undefined;
    }
  }
  return events
}

/**
 * @this {TokenizeContext}
 * @type {Previous}
 */
function previous(code) {
  // If there is a previous code, there will always be a tail.
  return (
    code !== 96 ||
    this.events[this.events.length - 1][1].type === 'characterEscape'
  )
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeCodeText(effects, ok, nok) {
  let sizeOpen = 0;
  /** @type {number} */
  let size;
  /** @type {Token} */
  let token;
  return start

  /**
   * Start of code (text).
   *
   * ```markdown
   * > | `a`
   *     ^
   * > | \`a`
   *      ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter('codeText');
    effects.enter('codeTextSequence');
    return sequenceOpen(code)
  }

  /**
   * In opening sequence.
   *
   * ```markdown
   * > | `a`
   *     ^
   * ```
   *
   * @type {State}
   */
  function sequenceOpen(code) {
    if (code === 96) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen
    }
    effects.exit('codeTextSequence');
    return between(code)
  }

  /**
   * Between something and something else.
   *
   * ```markdown
   * > | `a`
   *      ^^
   * ```
   *
   * @type {State}
   */
  function between(code) {
    // EOF.
    if (code === null) {
      return nok(code)
    }

    // To do: next major: don’t do spaces in resolve, but when compiling,
    // like `markdown-rs`.
    // Tabs don’t work, and virtual spaces don’t make sense.
    if (code === 32) {
      effects.enter('space');
      effects.consume(code);
      effects.exit('space');
      return between
    }

    // Closing fence? Could also be data.
    if (code === 96) {
      token = effects.enter('codeTextSequence');
      size = 0;
      return sequenceClose(code)
    }
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return between
    }

    // Data.
    effects.enter('codeTextData');
    return data(code)
  }

  /**
   * In data.
   *
   * ```markdown
   * > | `a`
   *      ^
   * ```
   *
   * @type {State}
   */
  function data(code) {
    if (
      code === null ||
      code === 32 ||
      code === 96 ||
      markdownLineEnding(code)
    ) {
      effects.exit('codeTextData');
      return between(code)
    }
    effects.consume(code);
    return data
  }

  /**
   * In closing sequence.
   *
   * ```markdown
   * > | `a`
   *       ^
   * ```
   *
   * @type {State}
   */
  function sequenceClose(code) {
    // More.
    if (code === 96) {
      effects.consume(code);
      size++;
      return sequenceClose
    }

    // Done!
    if (size === sizeOpen) {
      effects.exit('codeTextSequence');
      effects.exit('codeText');
      return ok(code)
    }

    // More or less accents: mark as data.
    token.type = 'codeTextData';
    return data(code)
  }
}

/**
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Token} Token
 */
/**
 * Tokenize subcontent.
 *
 * @param {Array<Event>} events
 *   List of events.
 * @returns {boolean}
 *   Whether subtokens were found.
 */
function subtokenize(events) {
  /** @type {Record<string, number>} */
  const jumps = {};
  let index = -1;
  /** @type {Event} */
  let event;
  /** @type {number | undefined} */
  let lineIndex;
  /** @type {number} */
  let otherIndex;
  /** @type {Event} */
  let otherEvent;
  /** @type {Array<Event>} */
  let parameters;
  /** @type {Array<Event>} */
  let subevents;
  /** @type {boolean | undefined} */
  let more;
  while (++index < events.length) {
    while (index in jumps) {
      index = jumps[index];
    }
    event = events[index];

    // Add a hook for the GFM tasklist extension, which needs to know if text
    // is in the first content of a list item.
    if (
      index &&
      event[1].type === 'chunkFlow' &&
      events[index - 1][1].type === 'listItemPrefix'
    ) {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;
      if (
        otherIndex < subevents.length &&
        subevents[otherIndex][1].type === 'lineEndingBlank'
      ) {
        otherIndex += 2;
      }
      if (
        otherIndex < subevents.length &&
        subevents[otherIndex][1].type === 'content'
      ) {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === 'content') {
            break
          }
          if (subevents[otherIndex][1].type === 'chunkText') {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    }

    // Enter.
    if (event[0] === 'enter') {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index));
        index = jumps[index];
        more = true;
      }
    }
    // Exit.
    else if (event[1]._container) {
      otherIndex = index;
      lineIndex = undefined;
      while (otherIndex--) {
        otherEvent = events[otherIndex];
        if (
          otherEvent[1].type === 'lineEnding' ||
          otherEvent[1].type === 'lineEndingBlank'
        ) {
          if (otherEvent[0] === 'enter') {
            if (lineIndex) {
              events[lineIndex][1].type = 'lineEndingBlank';
            }
            otherEvent[1].type = 'lineEnding';
            lineIndex = otherIndex;
          }
        } else {
          break
        }
      }
      if (lineIndex) {
        // Fix position.
        event[1].end = Object.assign({}, events[lineIndex][1].start);

        // Switch container exit w/ line endings.
        parameters = events.slice(lineIndex, index);
        parameters.unshift(event);
        splice(events, lineIndex, index - lineIndex + 1, parameters);
      }
    }
  }
  return !more
}

/**
 * Tokenize embedded tokens.
 *
 * @param {Array<Event>} events
 * @param {number} eventIndex
 * @returns {Record<string, number>}
 */
function subcontent(events, eventIndex) {
  const token = events[eventIndex][1];
  const context = events[eventIndex][2];
  let startPosition = eventIndex - 1;
  /** @type {Array<number>} */
  const startPositions = [];
  const tokenizer =
    token._tokenizer || context.parser[token.contentType](token.start);
  const childEvents = tokenizer.events;
  /** @type {Array<[number, number]>} */
  const jumps = [];
  /** @type {Record<string, number>} */
  const gaps = {};
  /** @type {Array<Chunk>} */
  let stream;
  /** @type {Token | undefined} */
  let previous;
  let index = -1;
  /** @type {Token | undefined} */
  let current = token;
  let adjust = 0;
  let start = 0;
  const breaks = [start];

  // Loop forward through the linked tokens to pass them in order to the
  // subtokenizer.
  while (current) {
    // Find the position of the event for this token.
    while (events[++startPosition][1] !== current) {
      // Empty.
    }
    startPositions.push(startPosition);
    if (!current._tokenizer) {
      stream = context.sliceStream(current);
      if (!current.next) {
        stream.push(null);
      }
      if (previous) {
        tokenizer.defineSkip(current.start);
      }
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }
      tokenizer.write(stream);
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = undefined;
      }
    }

    // Unravel the next token.
    previous = current;
    current = current.next;
  }

  // Now, loop back through all events (and linked tokens), to figure out which
  // parts belong where.
  current = token;
  while (++index < childEvents.length) {
    if (
      // Find a void token that includes a break.
      childEvents[index][0] === 'exit' &&
      childEvents[index - 1][0] === 'enter' &&
      childEvents[index][1].type === childEvents[index - 1][1].type &&
      childEvents[index][1].start.line !== childEvents[index][1].end.line
    ) {
      start = index + 1;
      breaks.push(start);
      // Help GC.
      current._tokenizer = undefined;
      current.previous = undefined;
      current = current.next;
    }
  }

  // Help GC.
  tokenizer.events = [];

  // If there’s one more token (which is the cases for lines that end in an
  // EOF), that’s perfect: the last point we found starts it.
  // If there isn’t then make sure any remaining content is added to it.
  if (current) {
    // Help GC.
    current._tokenizer = undefined;
    current.previous = undefined;
  } else {
    breaks.pop();
  }

  // Now splice the events from the subtokenizer into the current events,
  // moving back to front so that splice indices aren’t affected.
  index = breaks.length;
  while (index--) {
    const slice = childEvents.slice(breaks[index], breaks[index + 1]);
    const start = startPositions.pop();
    jumps.unshift([start, start + slice.length - 1]);
    splice(events, start, 2, slice);
  }
  index = -1;
  while (++index < jumps.length) {
    gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
    adjust += jumps[index][1] - jumps[index][0] - 1;
  }
  return gaps
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/**
 * No name because it must not be turned off.
 * @type {Construct}
 */
const content = {
  tokenize: tokenizeContent,
  resolve: resolveContent
};

/** @type {Construct} */
const continuationConstruct = {
  tokenize: tokenizeContinuation,
  partial: true
};

/**
 * Content is transparent: it’s parsed right now. That way, definitions are also
 * parsed right now: before text in paragraphs (specifically, media) are parsed.
 *
 * @type {Resolver}
 */
function resolveContent(events) {
  subtokenize(events);
  return events
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeContent(effects, ok) {
  /** @type {Token | undefined} */
  let previous;
  return chunkStart

  /**
   * Before a content chunk.
   *
   * ```markdown
   * > | abc
   *     ^
   * ```
   *
   * @type {State}
   */
  function chunkStart(code) {
    effects.enter('content');
    previous = effects.enter('chunkContent', {
      contentType: 'content'
    });
    return chunkInside(code)
  }

  /**
   * In a content chunk.
   *
   * ```markdown
   * > | abc
   *     ^^^
   * ```
   *
   * @type {State}
   */
  function chunkInside(code) {
    if (code === null) {
      return contentEnd(code)
    }

    // To do: in `markdown-rs`, each line is parsed on its own, and everything
    // is stitched together resolving.
    if (markdownLineEnding(code)) {
      return effects.check(
        continuationConstruct,
        contentContinue,
        contentEnd
      )(code)
    }

    // Data.
    effects.consume(code);
    return chunkInside
  }

  /**
   *
   *
   * @type {State}
   */
  function contentEnd(code) {
    effects.exit('chunkContent');
    effects.exit('content');
    return ok(code)
  }

  /**
   *
   *
   * @type {State}
   */
  function contentContinue(code) {
    effects.consume(code);
    effects.exit('chunkContent');
    previous.next = effects.enter('chunkContent', {
      contentType: 'content',
      previous
    });
    previous = previous.next;
    return chunkInside
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeContinuation(effects, ok, nok) {
  const self = this;
  return startLookahead

  /**
   *
   *
   * @type {State}
   */
  function startLookahead(code) {
    effects.exit('chunkContent');
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, prefixed, 'linePrefix')
  }

  /**
   *
   *
   * @type {State}
   */
  function prefixed(code) {
    if (code === null || markdownLineEnding(code)) {
      return nok(code)
    }

    // Always populated by defaults.

    const tail = self.events[self.events.length - 1];
    if (
      !self.parser.constructs.disable.null.includes('codeIndented') &&
      tail &&
      tail[1].type === 'linePrefix' &&
      tail[2].sliceSerialize(tail[1], true).length >= 4
    ) {
      return ok(code)
    }
    return effects.interrupt(self.parser.constructs.flow, nok, ok)(code)
  }
}

/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenType} TokenType
 */
/**
 * Parse destinations.
 *
 * ###### Examples
 *
 * ```markdown
 * <a>
 * <a\>b>
 * <a b>
 * <a)>
 * a
 * a\)b
 * a(b)c
 * a(b)
 * ```
 *
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @param {State} nok
 *   State switched to when unsuccessful.
 * @param {TokenType} type
 *   Type for whole (`<a>` or `b`).
 * @param {TokenType} literalType
 *   Type when enclosed (`<a>`).
 * @param {TokenType} literalMarkerType
 *   Type for enclosing (`<` and `>`).
 * @param {TokenType} rawType
 *   Type when not enclosed (`b`).
 * @param {TokenType} stringType
 *   Type for the value (`a` or `b`).
 * @param {number | undefined} [max=Infinity]
 *   Depth of nested parens (inclusive).
 * @returns {State}
 *   Start state.
 */ // eslint-disable-next-line max-params
function factoryDestination(
  effects,
  ok,
  nok,
  type,
  literalType,
  literalMarkerType,
  rawType,
  stringType,
  max
) {
  const limit = max || Number.POSITIVE_INFINITY;
  let balance = 0;
  return start

  /**
   * Start of destination.
   *
   * ```markdown
   * > | <aa>
   *     ^
   * > | aa
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    if (code === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      return enclosedBefore
    }

    // ASCII control, space, closing paren.
    if (code === null || code === 32 || code === 41 || asciiControl(code)) {
      return nok(code)
    }
    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return raw(code)
  }

  /**
   * After `<`, at an enclosed destination.
   *
   * ```markdown
   * > | <aa>
   *      ^
   * ```
   *
   * @type {State}
   */
  function enclosedBefore(code) {
    if (code === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok
    }
    effects.enter(stringType);
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return enclosed(code)
  }

  /**
   * In enclosed destination.
   *
   * ```markdown
   * > | <aa>
   *      ^
   * ```
   *
   * @type {State}
   */
  function enclosed(code) {
    if (code === 62) {
      effects.exit('chunkString');
      effects.exit(stringType);
      return enclosedBefore(code)
    }
    if (code === null || code === 60 || markdownLineEnding(code)) {
      return nok(code)
    }
    effects.consume(code);
    return code === 92 ? enclosedEscape : enclosed
  }

  /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | <a\*a>
   *        ^
   * ```
   *
   * @type {State}
   */
  function enclosedEscape(code) {
    if (code === 60 || code === 62 || code === 92) {
      effects.consume(code);
      return enclosed
    }
    return enclosed(code)
  }

  /**
   * In raw destination.
   *
   * ```markdown
   * > | aa
   *     ^
   * ```
   *
   * @type {State}
   */
  function raw(code) {
    if (
      !balance &&
      (code === null || code === 41 || markdownLineEndingOrSpace(code))
    ) {
      effects.exit('chunkString');
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok(code)
    }
    if (balance < limit && code === 40) {
      effects.consume(code);
      balance++;
      return raw
    }
    if (code === 41) {
      effects.consume(code);
      balance--;
      return raw
    }

    // ASCII control (but *not* `\0`) and space and `(`.
    // Note: in `markdown-rs`, `\0` exists in codes, in `micromark-js` it
    // doesn’t.
    if (code === null || code === 32 || code === 40 || asciiControl(code)) {
      return nok(code)
    }
    effects.consume(code);
    return code === 92 ? rawEscape : raw
  }

  /**
   * After `\`, at special character.
   *
   * ```markdown
   * > | a\*a
   *       ^
   * ```
   *
   * @type {State}
   */
  function rawEscape(code) {
    if (code === 40 || code === 41 || code === 92) {
      effects.consume(code);
      return raw
    }
    return raw(code)
  }
}

/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').TokenType} TokenType
 */
/**
 * Parse labels.
 *
 * > 👉 **Note**: labels in markdown are capped at 999 characters in the string.
 *
 * ###### Examples
 *
 * ```markdown
 * [a]
 * [a
 * b]
 * [a\]b]
 * ```
 *
 * @this {TokenizeContext}
 *   Tokenize context.
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @param {State} nok
 *   State switched to when unsuccessful.
 * @param {TokenType} type
 *   Type of the whole label (`[a]`).
 * @param {TokenType} markerType
 *   Type for the markers (`[` and `]`).
 * @param {TokenType} stringType
 *   Type for the identifier (`a`).
 * @returns {State}
 *   Start state.
 */ // eslint-disable-next-line max-params
function factoryLabel(effects, ok, nok, type, markerType, stringType) {
  const self = this;
  let size = 0;
  /** @type {boolean} */
  let seen;
  return start

  /**
   * Start of label.
   *
   * ```markdown
   * > | [a]
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak
  }

  /**
   * In label, at something, before something else.
   *
   * ```markdown
   * > | [a]
   *      ^
   * ```
   *
   * @type {State}
   */
  function atBreak(code) {
    if (
      size > 999 ||
      code === null ||
      code === 91 ||
      (code === 93 && !seen) ||
      // To do: remove in the future once we’ve switched from
      // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
      // which doesn’t need this.
      // Hidden footnotes hook.
      /* c8 ignore next 3 */
      (code === 94 &&
        !size &&
        '_hiddenFootnoteSupport' in self.parser.constructs)
    ) {
      return nok(code)
    }
    if (code === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok
    }

    // To do: indent? Link chunks and EOLs together?
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return atBreak
    }
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return labelInside(code)
  }

  /**
   * In label, in text.
   *
   * ```markdown
   * > | [a]
   *      ^
   * ```
   *
   * @type {State}
   */
  function labelInside(code) {
    if (
      code === null ||
      code === 91 ||
      code === 93 ||
      markdownLineEnding(code) ||
      size++ > 999
    ) {
      effects.exit('chunkString');
      return atBreak(code)
    }
    effects.consume(code);
    if (!seen) seen = !markdownSpace(code);
    return code === 92 ? labelEscape : labelInside
  }

  /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | [a\*a]
   *        ^
   * ```
   *
   * @type {State}
   */
  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return labelInside
    }
    return labelInside(code)
  }
}

/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenType} TokenType
 */
/**
 * Parse titles.
 *
 * ###### Examples
 *
 * ```markdown
 * "a"
 * 'b'
 * (c)
 * "a
 * b"
 * 'a
 *     b'
 * (a\)b)
 * ```
 *
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @param {State} nok
 *   State switched to when unsuccessful.
 * @param {TokenType} type
 *   Type of the whole title (`"a"`, `'b'`, `(c)`).
 * @param {TokenType} markerType
 *   Type for the markers (`"`, `'`, `(`, and `)`).
 * @param {TokenType} stringType
 *   Type for the value (`a`).
 * @returns {State}
 *   Start state.
 */ // eslint-disable-next-line max-params
function factoryTitle(effects, ok, nok, type, markerType, stringType) {
  /** @type {NonNullable<Code>} */
  let marker;
  return start

  /**
   * Start of title.
   *
   * ```markdown
   * > | "a"
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    if (code === 34 || code === 39 || code === 40) {
      effects.enter(type);
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      marker = code === 40 ? 41 : code;
      return begin
    }
    return nok(code)
  }

  /**
   * After opening marker.
   *
   * This is also used at the closing marker.
   *
   * ```markdown
   * > | "a"
   *      ^
   * ```
   *
   * @type {State}
   */
  function begin(code) {
    if (code === marker) {
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok
    }
    effects.enter(stringType);
    return atBreak(code)
  }

  /**
   * At something, before something else.
   *
   * ```markdown
   * > | "a"
   *      ^
   * ```
   *
   * @type {State}
   */
  function atBreak(code) {
    if (code === marker) {
      effects.exit(stringType);
      return begin(marker)
    }
    if (code === null) {
      return nok(code)
    }

    // Note: blank lines can’t exist in content.
    if (markdownLineEnding(code)) {
      // To do: use `space_or_tab_eol_with_options`, connect.
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return factorySpace(effects, atBreak, 'linePrefix')
    }
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return inside(code)
  }

  /**
   *
   *
   * @type {State}
   */
  function inside(code) {
    if (code === marker || code === null || markdownLineEnding(code)) {
      effects.exit('chunkString');
      return atBreak(code)
    }
    effects.consume(code);
    return code === 92 ? escape : inside
  }

  /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | "a\*b"
   *      ^
   * ```
   *
   * @type {State}
   */
  function escape(code) {
    if (code === marker || code === 92) {
      effects.consume(code);
      return inside
    }
    return inside(code)
  }
}

/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */
/**
 * Parse spaces and tabs.
 *
 * There is no `nok` parameter:
 *
 * *   line endings or spaces in markdown are often optional, in which case this
 *     factory can be used and `ok` will be switched to whether spaces were found
 *     or not
 * *   one line ending or space can be detected with
 *     `markdownLineEndingOrSpace(code)` right before using `factoryWhitespace`
 *
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @returns
 *   Start state.
 */
function factoryWhitespace(effects, ok) {
  /** @type {boolean} */
  let seen;
  return start

  /** @type {State} */
  function start(code) {
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      seen = true;
      return start
    }
    if (markdownSpace(code)) {
      return factorySpace(
        effects,
        start,
        seen ? 'linePrefix' : 'lineSuffix'
      )(code)
    }
    return ok(code)
  }
}

/**
 * Normalize an identifier (as found in references, definitions).
 *
 * Collapses markdown whitespace, trim, and then lower- and uppercase.
 *
 * Some characters are considered “uppercase”, such as U+03F4 (`ϴ`), but if their
 * lowercase counterpart (U+03B8 (`θ`)) is uppercased will result in a different
 * uppercase character (U+0398 (`Θ`)).
 * So, to get a canonical form, we perform both lower- and uppercase.
 *
 * Using uppercase last makes sure keys will never interact with default
 * prototypal values (such as `constructor`): nothing in the prototype of
 * `Object` is uppercase.
 *
 * @param {string} value
 *   Identifier to normalize.
 * @returns {string}
 *   Normalized identifier.
 */
function normalizeIdentifier(value) {
  return (
    value
      // Collapse markdown whitespace.
      .replace(/[\t\n\r ]+/g, ' ')
      // Trim.
      .replace(/^ | $/g, '')
      // Some characters are considered “uppercase”, but if their lowercase
      // counterpart is uppercased will result in a different uppercase
      // character.
      // Hence, to get that form, we perform both lower- and uppercase.
      // Upper case makes sure keys will not interact with default prototypal
      // methods: no method is uppercase.
      .toLowerCase()
      .toUpperCase()
  )
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/** @type {Construct} */
const definition = {
  name: 'definition',
  tokenize: tokenizeDefinition
};

/** @type {Construct} */
const titleBefore = {
  tokenize: tokenizeTitleBefore,
  partial: true
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeDefinition(effects, ok, nok) {
  const self = this;
  /** @type {string} */
  let identifier;
  return start

  /**
   * At start of a definition.
   *
   * ```markdown
   * > | [a]: b "c"
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // Do not interrupt paragraphs (but do follow definitions).
    // To do: do `interrupt` the way `markdown-rs` does.
    // To do: parse whitespace the way `markdown-rs` does.
    effects.enter('definition');
    return before(code)
  }

  /**
   * After optional whitespace, at `[`.
   *
   * ```markdown
   * > | [a]: b "c"
   *     ^
   * ```
   *
   * @type {State}
   */
  function before(code) {
    // To do: parse whitespace the way `markdown-rs` does.

    return factoryLabel.call(
      self,
      effects,
      labelAfter,
      // Note: we don’t need to reset the way `markdown-rs` does.
      nok,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString'
    )(code)
  }

  /**
   * After label.
   *
   * ```markdown
   * > | [a]: b "c"
   *        ^
   * ```
   *
   * @type {State}
   */
  function labelAfter(code) {
    identifier = normalizeIdentifier(
      self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
    );
    if (code === 58) {
      effects.enter('definitionMarker');
      effects.consume(code);
      effects.exit('definitionMarker');
      return markerAfter
    }
    return nok(code)
  }

  /**
   * After marker.
   *
   * ```markdown
   * > | [a]: b "c"
   *         ^
   * ```
   *
   * @type {State}
   */
  function markerAfter(code) {
    // Note: whitespace is optional.
    return markdownLineEndingOrSpace(code)
      ? factoryWhitespace(effects, destinationBefore)(code)
      : destinationBefore(code)
  }

  /**
   * Before destination.
   *
   * ```markdown
   * > | [a]: b "c"
   *          ^
   * ```
   *
   * @type {State}
   */
  function destinationBefore(code) {
    return factoryDestination(
      effects,
      destinationAfter,
      // Note: we don’t need to reset the way `markdown-rs` does.
      nok,
      'definitionDestination',
      'definitionDestinationLiteral',
      'definitionDestinationLiteralMarker',
      'definitionDestinationRaw',
      'definitionDestinationString'
    )(code)
  }

  /**
   * After destination.
   *
   * ```markdown
   * > | [a]: b "c"
   *           ^
   * ```
   *
   * @type {State}
   */
  function destinationAfter(code) {
    return effects.attempt(titleBefore, after, after)(code)
  }

  /**
   * After definition.
   *
   * ```markdown
   * > | [a]: b
   *           ^
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    return markdownSpace(code)
      ? factorySpace(effects, afterWhitespace, 'whitespace')(code)
      : afterWhitespace(code)
  }

  /**
   * After definition, after optional whitespace.
   *
   * ```markdown
   * > | [a]: b
   *           ^
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */
  function afterWhitespace(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('definition');

      // Note: we don’t care about uniqueness.
      // It’s likely that that doesn’t happen very frequently.
      // It is more likely that it wastes precious time.
      self.parser.defined.push(identifier);

      // To do: `markdown-rs` interrupt.
      // // You’d be interrupting.
      // tokenizer.interrupt = true
      return ok(code)
    }
    return nok(code)
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeTitleBefore(effects, ok, nok) {
  return titleBefore

  /**
   * After destination, at whitespace.
   *
   * ```markdown
   * > | [a]: b
   *           ^
   * > | [a]: b "c"
   *           ^
   * ```
   *
   * @type {State}
   */
  function titleBefore(code) {
    return markdownLineEndingOrSpace(code)
      ? factoryWhitespace(effects, beforeMarker)(code)
      : nok(code)
  }

  /**
   * At title.
   *
   * ```markdown
   *   | [a]: b
   * > | "c"
   *     ^
   * ```
   *
   * @type {State}
   */
  function beforeMarker(code) {
    return factoryTitle(
      effects,
      titleAfter,
      nok,
      'definitionTitle',
      'definitionTitleMarker',
      'definitionTitleString'
    )(code)
  }

  /**
   * After title.
   *
   * ```markdown
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */
  function titleAfter(code) {
    return markdownSpace(code)
      ? factorySpace(effects, titleAfterOptionalWhitespace, 'whitespace')(code)
      : titleAfterOptionalWhitespace(code)
  }

  /**
   * After title, after optional whitespace.
   *
   * ```markdown
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */
  function titleAfterOptionalWhitespace(code) {
    return code === null || markdownLineEnding(code) ? ok(code) : nok(code)
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/** @type {Construct} */
const hardBreakEscape = {
  name: 'hardBreakEscape',
  tokenize: tokenizeHardBreakEscape
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeHardBreakEscape(effects, ok, nok) {
  return start

  /**
   * Start of a hard break (escape).
   *
   * ```markdown
   * > | a\
   *      ^
   *   | b
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter('hardBreakEscape');
    effects.consume(code);
    return after
  }

  /**
   * After `\`, at eol.
   *
   * ```markdown
   * > | a\
   *       ^
   *   | b
   * ```
   *
   *  @type {State}
   */
  function after(code) {
    if (markdownLineEnding(code)) {
      effects.exit('hardBreakEscape');
      return ok(code)
    }
    return nok(code)
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/** @type {Construct} */
const headingAtx = {
  name: 'headingAtx',
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
};

/** @type {Resolver} */
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2;
  let contentStart = 3;
  /** @type {Token} */
  let content;
  /** @type {Token} */
  let text;

  // Prefix whitespace, part of the opening.
  if (events[contentStart][1].type === 'whitespace') {
    contentStart += 2;
  }

  // Suffix whitespace, part of the closing.
  if (
    contentEnd - 2 > contentStart &&
    events[contentEnd][1].type === 'whitespace'
  ) {
    contentEnd -= 2;
  }
  if (
    events[contentEnd][1].type === 'atxHeadingSequence' &&
    (contentStart === contentEnd - 1 ||
      (contentEnd - 4 > contentStart &&
        events[contentEnd - 2][1].type === 'whitespace'))
  ) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }
  if (contentEnd > contentStart) {
    content = {
      type: 'atxHeadingText',
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text = {
      type: 'chunkText',
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: 'text'
    };
    splice(events, contentStart, contentEnd - contentStart + 1, [
      ['enter', content, context],
      ['enter', text, context],
      ['exit', text, context],
      ['exit', content, context]
    ]);
  }
  return events
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeHeadingAtx(effects, ok, nok) {
  let size = 0;
  return start

  /**
   * Start of a heading (atx).
   *
   * ```markdown
   * > | ## aa
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // To do: parse indent like `markdown-rs`.
    effects.enter('atxHeading');
    return before(code)
  }

  /**
   * After optional whitespace, at `#`.
   *
   * ```markdown
   * > | ## aa
   *     ^
   * ```
   *
   * @type {State}
   */
  function before(code) {
    effects.enter('atxHeadingSequence');
    return sequenceOpen(code)
  }

  /**
   * In opening sequence.
   *
   * ```markdown
   * > | ## aa
   *     ^
   * ```
   *
   * @type {State}
   */
  function sequenceOpen(code) {
    if (code === 35 && size++ < 6) {
      effects.consume(code);
      return sequenceOpen
    }

    // Always at least one `#`.
    if (code === null || markdownLineEndingOrSpace(code)) {
      effects.exit('atxHeadingSequence');
      return atBreak(code)
    }
    return nok(code)
  }

  /**
   * After something, before something else.
   *
   * ```markdown
   * > | ## aa
   *       ^
   * ```
   *
   * @type {State}
   */
  function atBreak(code) {
    if (code === 35) {
      effects.enter('atxHeadingSequence');
      return sequenceFurther(code)
    }
    if (code === null || markdownLineEnding(code)) {
      effects.exit('atxHeading');
      // To do: interrupt like `markdown-rs`.
      // // Feel free to interrupt.
      // tokenizer.interrupt = false
      return ok(code)
    }
    if (markdownSpace(code)) {
      return factorySpace(effects, atBreak, 'whitespace')(code)
    }

    // To do: generate `data` tokens, add the `text` token later.
    // Needs edit map, see: `markdown.rs`.
    effects.enter('atxHeadingText');
    return data(code)
  }

  /**
   * In further sequence (after whitespace).
   *
   * Could be normal “visible” hashes in the heading or a final sequence.
   *
   * ```markdown
   * > | ## aa ##
   *           ^
   * ```
   *
   * @type {State}
   */
  function sequenceFurther(code) {
    if (code === 35) {
      effects.consume(code);
      return sequenceFurther
    }
    effects.exit('atxHeadingSequence');
    return atBreak(code)
  }

  /**
   * In text.
   *
   * ```markdown
   * > | ## aa
   *        ^
   * ```
   *
   * @type {State}
   */
  function data(code) {
    if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {
      effects.exit('atxHeadingText');
      return atBreak(code)
    }
    effects.consume(code);
    return data
  }
}

/**
 * List of lowercase HTML “block” tag names.
 *
 * The list, when parsing HTML (flow), results in more relaxed rules (condition
 * 6).
 * Because they are known blocks, the HTML-like syntax doesn’t have to be
 * strictly parsed.
 * For tag names not in this list, a more strict algorithm (condition 7) is used
 * to detect whether the HTML-like syntax is seen as HTML (flow) or not.
 *
 * This is copied from:
 * <https://spec.commonmark.org/0.30/#html-blocks>.
 *
 * > 👉 **Note**: `search` was added in `CommonMark@0.31`.
 */
const htmlBlockNames = [
  'address',
  'article',
  'aside',
  'base',
  'basefont',
  'blockquote',
  'body',
  'caption',
  'center',
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',
  'iframe',
  'legend',
  'li',
  'link',
  'main',
  'menu',
  'menuitem',
  'nav',
  'noframes',
  'ol',
  'optgroup',
  'option',
  'p',
  'param',
  'search',
  'section',
  'summary',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'title',
  'tr',
  'track',
  'ul'
];

/**
 * List of lowercase HTML “raw” tag names.
 *
 * The list, when parsing HTML (flow), results in HTML that can include lines
 * without exiting, until a closing tag also in this list is found (condition
 * 1).
 *
 * This module is copied from:
 * <https://spec.commonmark.org/0.30/#html-blocks>.
 *
 * > 👉 **Note**: `textarea` was added in `CommonMark@0.30`.
 */
const htmlRawNames = ['pre', 'script', 'style', 'textarea'];

/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */

/** @type {Construct} */
const htmlFlow = {
  name: 'htmlFlow',
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: true
};

/** @type {Construct} */
const blankLineBefore = {
  tokenize: tokenizeBlankLineBefore,
  partial: true
};
const nonLazyContinuationStart = {
  tokenize: tokenizeNonLazyContinuationStart,
  partial: true
};

/** @type {Resolver} */
function resolveToHtmlFlow(events) {
  let index = events.length;
  while (index--) {
    if (events[index][0] === 'enter' && events[index][1].type === 'htmlFlow') {
      break
    }
  }
  if (index > 1 && events[index - 2][1].type === 'linePrefix') {
    // Add the prefix start to the HTML token.
    events[index][1].start = events[index - 2][1].start;
    // Add the prefix start to the HTML line token.
    events[index + 1][1].start = events[index - 2][1].start;
    // Remove the line prefix.
    events.splice(index - 2, 2);
  }
  return events
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeHtmlFlow(effects, ok, nok) {
  const self = this;
  /** @type {number} */
  let marker;
  /** @type {boolean} */
  let closingTag;
  /** @type {string} */
  let buffer;
  /** @type {number} */
  let index;
  /** @type {Code} */
  let markerB;
  return start

  /**
   * Start of HTML (flow).
   *
   * ```markdown
   * > | <x />
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // To do: parse indent like `markdown-rs`.
    return before(code)
  }

  /**
   * At `<`, after optional whitespace.
   *
   * ```markdown
   * > | <x />
   *     ^
   * ```
   *
   * @type {State}
   */
  function before(code) {
    effects.enter('htmlFlow');
    effects.enter('htmlFlowData');
    effects.consume(code);
    return open
  }

  /**
   * After `<`, at tag name or other stuff.
   *
   * ```markdown
   * > | <x />
   *      ^
   * > | <!doctype>
   *      ^
   * > | <!--xxx-->
   *      ^
   * ```
   *
   * @type {State}
   */
  function open(code) {
    if (code === 33) {
      effects.consume(code);
      return declarationOpen
    }
    if (code === 47) {
      effects.consume(code);
      closingTag = true;
      return tagCloseStart
    }
    if (code === 63) {
      effects.consume(code);
      marker = 3;
      // To do:
      // tokenizer.concrete = true
      // To do: use `markdown-rs` style interrupt.
      // While we’re in an instruction instead of a declaration, we’re on a `?`
      // right now, so we do need to search for `>`, similar to declarations.
      return self.interrupt ? ok : continuationDeclarationInside
    }

    // ASCII alphabetical.
    if (asciiAlpha(code)) {
      effects.consume(code);
      // @ts-expect-error: not null.
      buffer = String.fromCharCode(code);
      return tagName
    }
    return nok(code)
  }

  /**
   * After `<!`, at declaration, comment, or CDATA.
   *
   * ```markdown
   * > | <!doctype>
   *       ^
   * > | <!--xxx-->
   *       ^
   * > | <![CDATA[>&<]]>
   *       ^
   * ```
   *
   * @type {State}
   */
  function declarationOpen(code) {
    if (code === 45) {
      effects.consume(code);
      marker = 2;
      return commentOpenInside
    }
    if (code === 91) {
      effects.consume(code);
      marker = 5;
      index = 0;
      return cdataOpenInside
    }

    // ASCII alphabetical.
    if (asciiAlpha(code)) {
      effects.consume(code);
      marker = 4;
      // // Do not form containers.
      // tokenizer.concrete = true
      return self.interrupt ? ok : continuationDeclarationInside
    }
    return nok(code)
  }

  /**
   * After `<!-`, inside a comment, at another `-`.
   *
   * ```markdown
   * > | <!--xxx-->
   *        ^
   * ```
   *
   * @type {State}
   */
  function commentOpenInside(code) {
    if (code === 45) {
      effects.consume(code);
      // // Do not form containers.
      // tokenizer.concrete = true
      return self.interrupt ? ok : continuationDeclarationInside
    }
    return nok(code)
  }

  /**
   * After `<![`, inside CDATA, expecting `CDATA[`.
   *
   * ```markdown
   * > | <![CDATA[>&<]]>
   *        ^^^^^^
   * ```
   *
   * @type {State}
   */
  function cdataOpenInside(code) {
    const value = 'CDATA[';
    if (code === value.charCodeAt(index++)) {
      effects.consume(code);
      if (index === value.length) {
        // // Do not form containers.
        // tokenizer.concrete = true
        return self.interrupt ? ok : continuation
      }
      return cdataOpenInside
    }
    return nok(code)
  }

  /**
   * After `</`, in closing tag, at tag name.
   *
   * ```markdown
   * > | </x>
   *       ^
   * ```
   *
   * @type {State}
   */
  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code);
      // @ts-expect-error: not null.
      buffer = String.fromCharCode(code);
      return tagName
    }
    return nok(code)
  }

  /**
   * In tag name.
   *
   * ```markdown
   * > | <ab>
   *      ^^
   * > | </ab>
   *       ^^
   * ```
   *
   * @type {State}
   */
  function tagName(code) {
    if (
      code === null ||
      code === 47 ||
      code === 62 ||
      markdownLineEndingOrSpace(code)
    ) {
      const slash = code === 47;
      const name = buffer.toLowerCase();
      if (!slash && !closingTag && htmlRawNames.includes(name)) {
        marker = 1;
        // // Do not form containers.
        // tokenizer.concrete = true
        return self.interrupt ? ok(code) : continuation(code)
      }
      if (htmlBlockNames.includes(buffer.toLowerCase())) {
        marker = 6;
        if (slash) {
          effects.consume(code);
          return basicSelfClosing
        }

        // // Do not form containers.
        // tokenizer.concrete = true
        return self.interrupt ? ok(code) : continuation(code)
      }
      marker = 7;
      // Do not support complete HTML when interrupting.
      return self.interrupt && !self.parser.lazy[self.now().line]
        ? nok(code)
        : closingTag
        ? completeClosingTagAfter(code)
        : completeAttributeNameBefore(code)
    }

    // ASCII alphanumerical and `-`.
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      buffer += String.fromCharCode(code);
      return tagName
    }
    return nok(code)
  }

  /**
   * After closing slash of a basic tag name.
   *
   * ```markdown
   * > | <div/>
   *          ^
   * ```
   *
   * @type {State}
   */
  function basicSelfClosing(code) {
    if (code === 62) {
      effects.consume(code);
      // // Do not form containers.
      // tokenizer.concrete = true
      return self.interrupt ? ok : continuation
    }
    return nok(code)
  }

  /**
   * After closing slash of a complete tag name.
   *
   * ```markdown
   * > | <x/>
   *        ^
   * ```
   *
   * @type {State}
   */
  function completeClosingTagAfter(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeClosingTagAfter
    }
    return completeEnd(code)
  }

  /**
   * At an attribute name.
   *
   * At first, this state is used after a complete tag name, after whitespace,
   * where it expects optional attributes or the end of the tag.
   * It is also reused after attributes, when expecting more optional
   * attributes.
   *
   * ```markdown
   * > | <a />
   *        ^
   * > | <a :b>
   *        ^
   * > | <a _b>
   *        ^
   * > | <a b>
   *        ^
   * > | <a >
   *        ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeNameBefore(code) {
    if (code === 47) {
      effects.consume(code);
      return completeEnd
    }

    // ASCII alphanumerical and `:` and `_`.
    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code);
      return completeAttributeName
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAttributeNameBefore
    }
    return completeEnd(code)
  }

  /**
   * In attribute name.
   *
   * ```markdown
   * > | <a :b>
   *         ^
   * > | <a _b>
   *         ^
   * > | <a b>
   *         ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeName(code) {
    // ASCII alphanumerical and `-`, `.`, `:`, and `_`.
    if (
      code === 45 ||
      code === 46 ||
      code === 58 ||
      code === 95 ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code);
      return completeAttributeName
    }
    return completeAttributeNameAfter(code)
  }

  /**
   * After attribute name, at an optional initializer, the end of the tag, or
   * whitespace.
   *
   * ```markdown
   * > | <a b>
   *         ^
   * > | <a b=c>
   *         ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return completeAttributeValueBefore
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAttributeNameAfter
    }
    return completeAttributeNameBefore(code)
  }

  /**
   * Before unquoted, double quoted, or single quoted attribute value, allowing
   * whitespace.
   *
   * ```markdown
   * > | <a b=c>
   *          ^
   * > | <a b="c">
   *          ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeValueBefore(code) {
    if (
      code === null ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96
    ) {
      return nok(code)
    }
    if (code === 34 || code === 39) {
      effects.consume(code);
      markerB = code;
      return completeAttributeValueQuoted
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAttributeValueBefore
    }
    return completeAttributeValueUnquoted(code)
  }

  /**
   * In double or single quoted attribute value.
   *
   * ```markdown
   * > | <a b="c">
   *           ^
   * > | <a b='c'>
   *           ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeValueQuoted(code) {
    if (code === markerB) {
      effects.consume(code);
      markerB = null;
      return completeAttributeValueQuotedAfter
    }
    if (code === null || markdownLineEnding(code)) {
      return nok(code)
    }
    effects.consume(code);
    return completeAttributeValueQuoted
  }

  /**
   * In unquoted attribute value.
   *
   * ```markdown
   * > | <a b=c>
   *          ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeValueUnquoted(code) {
    if (
      code === null ||
      code === 34 ||
      code === 39 ||
      code === 47 ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96 ||
      markdownLineEndingOrSpace(code)
    ) {
      return completeAttributeNameAfter(code)
    }
    effects.consume(code);
    return completeAttributeValueUnquoted
  }

  /**
   * After double or single quoted attribute value, before whitespace or the
   * end of the tag.
   *
   * ```markdown
   * > | <a b="c">
   *            ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeValueQuotedAfter(code) {
    if (code === 47 || code === 62 || markdownSpace(code)) {
      return completeAttributeNameBefore(code)
    }
    return nok(code)
  }

  /**
   * In certain circumstances of a complete tag where only an `>` is allowed.
   *
   * ```markdown
   * > | <a b="c">
   *             ^
   * ```
   *
   * @type {State}
   */
  function completeEnd(code) {
    if (code === 62) {
      effects.consume(code);
      return completeAfter
    }
    return nok(code)
  }

  /**
   * After `>` in a complete tag.
   *
   * ```markdown
   * > | <x>
   *        ^
   * ```
   *
   * @type {State}
   */
  function completeAfter(code) {
    if (code === null || markdownLineEnding(code)) {
      // // Do not form containers.
      // tokenizer.concrete = true
      return continuation(code)
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAfter
    }
    return nok(code)
  }

  /**
   * In continuation of any HTML kind.
   *
   * ```markdown
   * > | <!--xxx-->
   *          ^
   * ```
   *
   * @type {State}
   */
  function continuation(code) {
    if (code === 45 && marker === 2) {
      effects.consume(code);
      return continuationCommentInside
    }
    if (code === 60 && marker === 1) {
      effects.consume(code);
      return continuationRawTagOpen
    }
    if (code === 62 && marker === 4) {
      effects.consume(code);
      return continuationClose
    }
    if (code === 63 && marker === 3) {
      effects.consume(code);
      return continuationDeclarationInside
    }
    if (code === 93 && marker === 5) {
      effects.consume(code);
      return continuationCdataInside
    }
    if (markdownLineEnding(code) && (marker === 6 || marker === 7)) {
      effects.exit('htmlFlowData');
      return effects.check(
        blankLineBefore,
        continuationAfter,
        continuationStart
      )(code)
    }
    if (code === null || markdownLineEnding(code)) {
      effects.exit('htmlFlowData');
      return continuationStart(code)
    }
    effects.consume(code);
    return continuation
  }

  /**
   * In continuation, at eol.
   *
   * ```markdown
   * > | <x>
   *        ^
   *   | asd
   * ```
   *
   * @type {State}
   */
  function continuationStart(code) {
    return effects.check(
      nonLazyContinuationStart,
      continuationStartNonLazy,
      continuationAfter
    )(code)
  }

  /**
   * In continuation, at eol, before non-lazy content.
   *
   * ```markdown
   * > | <x>
   *        ^
   *   | asd
   * ```
   *
   * @type {State}
   */
  function continuationStartNonLazy(code) {
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return continuationBefore
  }

  /**
   * In continuation, before non-lazy content.
   *
   * ```markdown
   *   | <x>
   * > | asd
   *     ^
   * ```
   *
   * @type {State}
   */
  function continuationBefore(code) {
    if (code === null || markdownLineEnding(code)) {
      return continuationStart(code)
    }
    effects.enter('htmlFlowData');
    return continuation(code)
  }

  /**
   * In comment continuation, after one `-`, expecting another.
   *
   * ```markdown
   * > | <!--xxx-->
   *             ^
   * ```
   *
   * @type {State}
   */
  function continuationCommentInside(code) {
    if (code === 45) {
      effects.consume(code);
      return continuationDeclarationInside
    }
    return continuation(code)
  }

  /**
   * In raw continuation, after `<`, at `/`.
   *
   * ```markdown
   * > | <script>console.log(1)</script>
   *                            ^
   * ```
   *
   * @type {State}
   */
  function continuationRawTagOpen(code) {
    if (code === 47) {
      effects.consume(code);
      buffer = '';
      return continuationRawEndTag
    }
    return continuation(code)
  }

  /**
   * In raw continuation, after `</`, in a raw tag name.
   *
   * ```markdown
   * > | <script>console.log(1)</script>
   *                             ^^^^^^
   * ```
   *
   * @type {State}
   */
  function continuationRawEndTag(code) {
    if (code === 62) {
      const name = buffer.toLowerCase();
      if (htmlRawNames.includes(name)) {
        effects.consume(code);
        return continuationClose
      }
      return continuation(code)
    }
    if (asciiAlpha(code) && buffer.length < 8) {
      effects.consume(code);
      // @ts-expect-error: not null.
      buffer += String.fromCharCode(code);
      return continuationRawEndTag
    }
    return continuation(code)
  }

  /**
   * In cdata continuation, after `]`, expecting `]>`.
   *
   * ```markdown
   * > | <![CDATA[>&<]]>
   *                  ^
   * ```
   *
   * @type {State}
   */
  function continuationCdataInside(code) {
    if (code === 93) {
      effects.consume(code);
      return continuationDeclarationInside
    }
    return continuation(code)
  }

  /**
   * In declaration or instruction continuation, at `>`.
   *
   * ```markdown
   * > | <!-->
   *         ^
   * > | <?>
   *       ^
   * > | <!q>
   *        ^
   * > | <!--ab-->
   *             ^
   * > | <![CDATA[>&<]]>
   *                   ^
   * ```
   *
   * @type {State}
   */
  function continuationDeclarationInside(code) {
    if (code === 62) {
      effects.consume(code);
      return continuationClose
    }

    // More dashes.
    if (code === 45 && marker === 2) {
      effects.consume(code);
      return continuationDeclarationInside
    }
    return continuation(code)
  }

  /**
   * In closed continuation: everything we get until the eol/eof is part of it.
   *
   * ```markdown
   * > | <!doctype>
   *               ^
   * ```
   *
   * @type {State}
   */
  function continuationClose(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('htmlFlowData');
      return continuationAfter(code)
    }
    effects.consume(code);
    return continuationClose
  }

  /**
   * Done.
   *
   * ```markdown
   * > | <!doctype>
   *               ^
   * ```
   *
   * @type {State}
   */
  function continuationAfter(code) {
    effects.exit('htmlFlow');
    // // Feel free to interrupt.
    // tokenizer.interrupt = false
    // // No longer concrete.
    // tokenizer.concrete = false
    return ok(code)
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeNonLazyContinuationStart(effects, ok, nok) {
  const self = this;
  return start

  /**
   * At eol, before continuation.
   *
   * ```markdown
   * > | * ```js
   *            ^
   *   | b
   * ```
   *
   * @type {State}
   */
  function start(code) {
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return after
    }
    return nok(code)
  }

  /**
   * A continuation.
   *
   * ```markdown
   *   | * ```js
   * > | b
   *     ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    return self.parser.lazy[self.now().line] ? nok(code) : ok(code)
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeBlankLineBefore(effects, ok, nok) {
  return start

  /**
   * Before eol, expecting blank line.
   *
   * ```markdown
   * > | <div>
   *          ^
   *   |
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return effects.attempt(blankLine, ok, nok)
  }
}

/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/** @type {Construct} */
const htmlText = {
  name: 'htmlText',
  tokenize: tokenizeHtmlText
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeHtmlText(effects, ok, nok) {
  const self = this;
  /** @type {NonNullable<Code> | undefined} */
  let marker;
  /** @type {number} */
  let index;
  /** @type {State} */
  let returnState;
  return start

  /**
   * Start of HTML (text).
   *
   * ```markdown
   * > | a <b> c
   *       ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter('htmlText');
    effects.enter('htmlTextData');
    effects.consume(code);
    return open
  }

  /**
   * After `<`, at tag name or other stuff.
   *
   * ```markdown
   * > | a <b> c
   *        ^
   * > | a <!doctype> c
   *        ^
   * > | a <!--b--> c
   *        ^
   * ```
   *
   * @type {State}
   */
  function open(code) {
    if (code === 33) {
      effects.consume(code);
      return declarationOpen
    }
    if (code === 47) {
      effects.consume(code);
      return tagCloseStart
    }
    if (code === 63) {
      effects.consume(code);
      return instruction
    }

    // ASCII alphabetical.
    if (asciiAlpha(code)) {
      effects.consume(code);
      return tagOpen
    }
    return nok(code)
  }

  /**
   * After `<!`, at declaration, comment, or CDATA.
   *
   * ```markdown
   * > | a <!doctype> c
   *         ^
   * > | a <!--b--> c
   *         ^
   * > | a <![CDATA[>&<]]> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function declarationOpen(code) {
    if (code === 45) {
      effects.consume(code);
      return commentOpenInside
    }
    if (code === 91) {
      effects.consume(code);
      index = 0;
      return cdataOpenInside
    }
    if (asciiAlpha(code)) {
      effects.consume(code);
      return declaration
    }
    return nok(code)
  }

  /**
   * In a comment, after `<!-`, at another `-`.
   *
   * ```markdown
   * > | a <!--b--> c
   *          ^
   * ```
   *
   * @type {State}
   */
  function commentOpenInside(code) {
    if (code === 45) {
      effects.consume(code);
      return commentEnd
    }
    return nok(code)
  }

  /**
   * In comment.
   *
   * ```markdown
   * > | a <!--b--> c
   *           ^
   * ```
   *
   * @type {State}
   */
  function comment(code) {
    if (code === null) {
      return nok(code)
    }
    if (code === 45) {
      effects.consume(code);
      return commentClose
    }
    if (markdownLineEnding(code)) {
      returnState = comment;
      return lineEndingBefore(code)
    }
    effects.consume(code);
    return comment
  }

  /**
   * In comment, after `-`.
   *
   * ```markdown
   * > | a <!--b--> c
   *             ^
   * ```
   *
   * @type {State}
   */
  function commentClose(code) {
    if (code === 45) {
      effects.consume(code);
      return commentEnd
    }
    return comment(code)
  }

  /**
   * In comment, after `--`.
   *
   * ```markdown
   * > | a <!--b--> c
   *              ^
   * ```
   *
   * @type {State}
   */
  function commentEnd(code) {
    return code === 62
      ? end(code)
      : code === 45
      ? commentClose(code)
      : comment(code)
  }

  /**
   * After `<![`, in CDATA, expecting `CDATA[`.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *          ^^^^^^
   * ```
   *
   * @type {State}
   */
  function cdataOpenInside(code) {
    const value = 'CDATA[';
    if (code === value.charCodeAt(index++)) {
      effects.consume(code);
      return index === value.length ? cdata : cdataOpenInside
    }
    return nok(code)
  }

  /**
   * In CDATA.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *                ^^^
   * ```
   *
   * @type {State}
   */
  function cdata(code) {
    if (code === null) {
      return nok(code)
    }
    if (code === 93) {
      effects.consume(code);
      return cdataClose
    }
    if (markdownLineEnding(code)) {
      returnState = cdata;
      return lineEndingBefore(code)
    }
    effects.consume(code);
    return cdata
  }

  /**
   * In CDATA, after `]`, at another `]`.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *                    ^
   * ```
   *
   * @type {State}
   */
  function cdataClose(code) {
    if (code === 93) {
      effects.consume(code);
      return cdataEnd
    }
    return cdata(code)
  }

  /**
   * In CDATA, after `]]`, at `>`.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *                     ^
   * ```
   *
   * @type {State}
   */
  function cdataEnd(code) {
    if (code === 62) {
      return end(code)
    }
    if (code === 93) {
      effects.consume(code);
      return cdataEnd
    }
    return cdata(code)
  }

  /**
   * In declaration.
   *
   * ```markdown
   * > | a <!b> c
   *          ^
   * ```
   *
   * @type {State}
   */
  function declaration(code) {
    if (code === null || code === 62) {
      return end(code)
    }
    if (markdownLineEnding(code)) {
      returnState = declaration;
      return lineEndingBefore(code)
    }
    effects.consume(code);
    return declaration
  }

  /**
   * In instruction.
   *
   * ```markdown
   * > | a <?b?> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function instruction(code) {
    if (code === null) {
      return nok(code)
    }
    if (code === 63) {
      effects.consume(code);
      return instructionClose
    }
    if (markdownLineEnding(code)) {
      returnState = instruction;
      return lineEndingBefore(code)
    }
    effects.consume(code);
    return instruction
  }

  /**
   * In instruction, after `?`, at `>`.
   *
   * ```markdown
   * > | a <?b?> c
   *           ^
   * ```
   *
   * @type {State}
   */
  function instructionClose(code) {
    return code === 62 ? end(code) : instruction(code)
  }

  /**
   * After `</`, in closing tag, at tag name.
   *
   * ```markdown
   * > | a </b> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function tagCloseStart(code) {
    // ASCII alphabetical.
    if (asciiAlpha(code)) {
      effects.consume(code);
      return tagClose
    }
    return nok(code)
  }

  /**
   * After `</x`, in a tag name.
   *
   * ```markdown
   * > | a </b> c
   *          ^
   * ```
   *
   * @type {State}
   */
  function tagClose(code) {
    // ASCII alphanumerical and `-`.
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagClose
    }
    return tagCloseBetween(code)
  }

  /**
   * In closing tag, after tag name.
   *
   * ```markdown
   * > | a </b> c
   *          ^
   * ```
   *
   * @type {State}
   */
  function tagCloseBetween(code) {
    if (markdownLineEnding(code)) {
      returnState = tagCloseBetween;
      return lineEndingBefore(code)
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return tagCloseBetween
    }
    return end(code)
  }

  /**
   * After `<x`, in opening tag name.
   *
   * ```markdown
   * > | a <b> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function tagOpen(code) {
    // ASCII alphanumerical and `-`.
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagOpen
    }
    if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }
    return nok(code)
  }

  /**
   * In opening tag, after tag name.
   *
   * ```markdown
   * > | a <b> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function tagOpenBetween(code) {
    if (code === 47) {
      effects.consume(code);
      return end
    }

    // ASCII alphabetical and `:` and `_`.
    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code);
      return tagOpenAttributeName
    }
    if (markdownLineEnding(code)) {
      returnState = tagOpenBetween;
      return lineEndingBefore(code)
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return tagOpenBetween
    }
    return end(code)
  }

  /**
   * In attribute name.
   *
   * ```markdown
   * > | a <b c> d
   *          ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeName(code) {
    // ASCII alphabetical and `-`, `.`, `:`, and `_`.
    if (
      code === 45 ||
      code === 46 ||
      code === 58 ||
      code === 95 ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code);
      return tagOpenAttributeName
    }
    return tagOpenAttributeNameAfter(code)
  }

  /**
   * After attribute name, before initializer, the end of the tag, or
   * whitespace.
   *
   * ```markdown
   * > | a <b c> d
   *           ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return tagOpenAttributeValueBefore
    }
    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeNameAfter;
      return lineEndingBefore(code)
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return tagOpenAttributeNameAfter
    }
    return tagOpenBetween(code)
  }

  /**
   * Before unquoted, double quoted, or single quoted attribute value, allowing
   * whitespace.
   *
   * ```markdown
   * > | a <b c=d> e
   *            ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeValueBefore(code) {
    if (
      code === null ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96
    ) {
      return nok(code)
    }
    if (code === 34 || code === 39) {
      effects.consume(code);
      marker = code;
      return tagOpenAttributeValueQuoted
    }
    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueBefore;
      return lineEndingBefore(code)
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return tagOpenAttributeValueBefore
    }
    effects.consume(code);
    return tagOpenAttributeValueUnquoted
  }

  /**
   * In double or single quoted attribute value.
   *
   * ```markdown
   * > | a <b c="d"> e
   *             ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code);
      marker = undefined;
      return tagOpenAttributeValueQuotedAfter
    }
    if (code === null) {
      return nok(code)
    }
    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueQuoted;
      return lineEndingBefore(code)
    }
    effects.consume(code);
    return tagOpenAttributeValueQuoted
  }

  /**
   * In unquoted attribute value.
   *
   * ```markdown
   * > | a <b c=d> e
   *            ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeValueUnquoted(code) {
    if (
      code === null ||
      code === 34 ||
      code === 39 ||
      code === 60 ||
      code === 61 ||
      code === 96
    ) {
      return nok(code)
    }
    if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }
    effects.consume(code);
    return tagOpenAttributeValueUnquoted
  }

  /**
   * After double or single quoted attribute value, before whitespace or the end
   * of the tag.
   *
   * ```markdown
   * > | a <b c="d"> e
   *               ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeValueQuotedAfter(code) {
    if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }
    return nok(code)
  }

  /**
   * In certain circumstances of a tag where only an `>` is allowed.
   *
   * ```markdown
   * > | a <b c="d"> e
   *               ^
   * ```
   *
   * @type {State}
   */
  function end(code) {
    if (code === 62) {
      effects.consume(code);
      effects.exit('htmlTextData');
      effects.exit('htmlText');
      return ok
    }
    return nok(code)
  }

  /**
   * At eol.
   *
   * > 👉 **Note**: we can’t have blank lines in text, so no need to worry about
   * > empty tokens.
   *
   * ```markdown
   * > | a <!--a
   *            ^
   *   | b-->
   * ```
   *
   * @type {State}
   */
  function lineEndingBefore(code) {
    effects.exit('htmlTextData');
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return lineEndingAfter
  }

  /**
   * After eol, at optional whitespace.
   *
   * > 👉 **Note**: we can’t have blank lines in text, so no need to worry about
   * > empty tokens.
   *
   * ```markdown
   *   | a <!--a
   * > | b-->
   *     ^
   * ```
   *
   * @type {State}
   */
  function lineEndingAfter(code) {
    // Always populated by defaults.

    return markdownSpace(code)
      ? factorySpace(
          effects,
          lineEndingAfterPrefix,
          'linePrefix',
          self.parser.constructs.disable.null.includes('codeIndented')
            ? undefined
            : 4
        )(code)
      : lineEndingAfterPrefix(code)
  }

  /**
   * After eol, after optional whitespace.
   *
   * > 👉 **Note**: we can’t have blank lines in text, so no need to worry about
   * > empty tokens.
   *
   * ```markdown
   *   | a <!--a
   * > | b-->
   *     ^
   * ```
   *
   * @type {State}
   */
  function lineEndingAfterPrefix(code) {
    effects.enter('htmlTextData');
    return returnState(code)
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/** @type {Construct} */
const labelEnd = {
  name: 'labelEnd',
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
};

/** @type {Construct} */
const resourceConstruct = {
  tokenize: tokenizeResource
};
/** @type {Construct} */
const referenceFullConstruct = {
  tokenize: tokenizeReferenceFull
};
/** @type {Construct} */
const referenceCollapsedConstruct = {
  tokenize: tokenizeReferenceCollapsed
};

/** @type {Resolver} */
function resolveAllLabelEnd(events) {
  let index = -1;
  while (++index < events.length) {
    const token = events[index][1];
    if (
      token.type === 'labelImage' ||
      token.type === 'labelLink' ||
      token.type === 'labelEnd'
    ) {
      // Remove the marker.
      events.splice(index + 1, token.type === 'labelImage' ? 4 : 2);
      token.type = 'data';
      index++;
    }
  }
  return events
}

/** @type {Resolver} */
function resolveToLabelEnd(events, context) {
  let index = events.length;
  let offset = 0;
  /** @type {Token} */
  let token;
  /** @type {number | undefined} */
  let open;
  /** @type {number | undefined} */
  let close;
  /** @type {Array<Event>} */
  let media;

  // Find an opening.
  while (index--) {
    token = events[index][1];
    if (open) {
      // If we see another link, or inactive link label, we’ve been here before.
      if (
        token.type === 'link' ||
        (token.type === 'labelLink' && token._inactive)
      ) {
        break
      }

      // Mark other link openings as inactive, as we can’t have links in
      // links.
      if (events[index][0] === 'enter' && token.type === 'labelLink') {
        token._inactive = true;
      }
    } else if (close) {
      if (
        events[index][0] === 'enter' &&
        (token.type === 'labelImage' || token.type === 'labelLink') &&
        !token._balanced
      ) {
        open = index;
        if (token.type !== 'labelLink') {
          offset = 2;
          break
        }
      }
    } else if (token.type === 'labelEnd') {
      close = index;
    }
  }
  const group = {
    type: events[open][1].type === 'labelLink' ? 'link' : 'image',
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const label = {
    type: 'label',
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[close][1].end)
  };
  const text = {
    type: 'labelText',
    start: Object.assign({}, events[open + offset + 2][1].end),
    end: Object.assign({}, events[close - 2][1].start)
  };
  media = [
    ['enter', group, context],
    ['enter', label, context]
  ];

  // Opening marker.
  media = push(media, events.slice(open + 1, open + offset + 3));

  // Text open.
  media = push(media, [['enter', text, context]]);

  // Always populated by defaults.

  // Between.
  media = push(
    media,
    resolveAll(
      context.parser.constructs.insideSpan.null,
      events.slice(open + offset + 4, close - 3),
      context
    )
  );

  // Text close, marker close, label close.
  media = push(media, [
    ['exit', text, context],
    events[close - 2],
    events[close - 1],
    ['exit', label, context]
  ]);

  // Reference, resource, or so.
  media = push(media, events.slice(close + 1));

  // Media close.
  media = push(media, [['exit', group, context]]);
  splice(events, open, events.length, media);
  return events
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeLabelEnd(effects, ok, nok) {
  const self = this;
  let index = self.events.length;
  /** @type {Token} */
  let labelStart;
  /** @type {boolean} */
  let defined;

  // Find an opening.
  while (index--) {
    if (
      (self.events[index][1].type === 'labelImage' ||
        self.events[index][1].type === 'labelLink') &&
      !self.events[index][1]._balanced
    ) {
      labelStart = self.events[index][1];
      break
    }
  }
  return start

  /**
   * Start of label end.
   *
   * ```markdown
   * > | [a](b) c
   *       ^
   * > | [a][b] c
   *       ^
   * > | [a][] b
   *       ^
   * > | [a] b
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // If there is not an okay opening.
    if (!labelStart) {
      return nok(code)
    }

    // If the corresponding label (link) start is marked as inactive,
    // it means we’d be wrapping a link, like this:
    //
    // ```markdown
    // > | a [b [c](d) e](f) g.
    //                  ^
    // ```
    //
    // We can’t have that, so it’s just balanced brackets.
    if (labelStart._inactive) {
      return labelEndNok(code)
    }
    defined = self.parser.defined.includes(
      normalizeIdentifier(
        self.sliceSerialize({
          start: labelStart.end,
          end: self.now()
        })
      )
    );
    effects.enter('labelEnd');
    effects.enter('labelMarker');
    effects.consume(code);
    effects.exit('labelMarker');
    effects.exit('labelEnd');
    return after
  }

  /**
   * After `]`.
   *
   * ```markdown
   * > | [a](b) c
   *       ^
   * > | [a][b] c
   *       ^
   * > | [a][] b
   *       ^
   * > | [a] b
   *       ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    // Note: `markdown-rs` also parses GFM footnotes here, which for us is in
    // an extension.

    // Resource (`[asd](fgh)`)?
    if (code === 40) {
      return effects.attempt(
        resourceConstruct,
        labelEndOk,
        defined ? labelEndOk : labelEndNok
      )(code)
    }

    // Full (`[asd][fgh]`) or collapsed (`[asd][]`) reference?
    if (code === 91) {
      return effects.attempt(
        referenceFullConstruct,
        labelEndOk,
        defined ? referenceNotFull : labelEndNok
      )(code)
    }

    // Shortcut (`[asd]`) reference?
    return defined ? labelEndOk(code) : labelEndNok(code)
  }

  /**
   * After `]`, at `[`, but not at a full reference.
   *
   * > 👉 **Note**: we only get here if the label is defined.
   *
   * ```markdown
   * > | [a][] b
   *        ^
   * > | [a] b
   *        ^
   * ```
   *
   * @type {State}
   */
  function referenceNotFull(code) {
    return effects.attempt(
      referenceCollapsedConstruct,
      labelEndOk,
      labelEndNok
    )(code)
  }

  /**
   * Done, we found something.
   *
   * ```markdown
   * > | [a](b) c
   *           ^
   * > | [a][b] c
   *           ^
   * > | [a][] b
   *          ^
   * > | [a] b
   *        ^
   * ```
   *
   * @type {State}
   */
  function labelEndOk(code) {
    // Note: `markdown-rs` does a bunch of stuff here.
    return ok(code)
  }

  /**
   * Done, it’s nothing.
   *
   * There was an okay opening, but we didn’t match anything.
   *
   * ```markdown
   * > | [a](b c
   *        ^
   * > | [a][b c
   *        ^
   * > | [a] b
   *        ^
   * ```
   *
   * @type {State}
   */
  function labelEndNok(code) {
    labelStart._balanced = true;
    return nok(code)
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeResource(effects, ok, nok) {
  return resourceStart

  /**
   * At a resource.
   *
   * ```markdown
   * > | [a](b) c
   *        ^
   * ```
   *
   * @type {State}
   */
  function resourceStart(code) {
    effects.enter('resource');
    effects.enter('resourceMarker');
    effects.consume(code);
    effects.exit('resourceMarker');
    return resourceBefore
  }

  /**
   * In resource, after `(`, at optional whitespace.
   *
   * ```markdown
   * > | [a](b) c
   *         ^
   * ```
   *
   * @type {State}
   */
  function resourceBefore(code) {
    return markdownLineEndingOrSpace(code)
      ? factoryWhitespace(effects, resourceOpen)(code)
      : resourceOpen(code)
  }

  /**
   * In resource, after optional whitespace, at `)` or a destination.
   *
   * ```markdown
   * > | [a](b) c
   *         ^
   * ```
   *
   * @type {State}
   */
  function resourceOpen(code) {
    if (code === 41) {
      return resourceEnd(code)
    }
    return factoryDestination(
      effects,
      resourceDestinationAfter,
      resourceDestinationMissing,
      'resourceDestination',
      'resourceDestinationLiteral',
      'resourceDestinationLiteralMarker',
      'resourceDestinationRaw',
      'resourceDestinationString',
      32
    )(code)
  }

  /**
   * In resource, after destination, at optional whitespace.
   *
   * ```markdown
   * > | [a](b) c
   *          ^
   * ```
   *
   * @type {State}
   */
  function resourceDestinationAfter(code) {
    return markdownLineEndingOrSpace(code)
      ? factoryWhitespace(effects, resourceBetween)(code)
      : resourceEnd(code)
  }

  /**
   * At invalid destination.
   *
   * ```markdown
   * > | [a](<<) b
   *         ^
   * ```
   *
   * @type {State}
   */
  function resourceDestinationMissing(code) {
    return nok(code)
  }

  /**
   * In resource, after destination and whitespace, at `(` or title.
   *
   * ```markdown
   * > | [a](b ) c
   *           ^
   * ```
   *
   * @type {State}
   */
  function resourceBetween(code) {
    if (code === 34 || code === 39 || code === 40) {
      return factoryTitle(
        effects,
        resourceTitleAfter,
        nok,
        'resourceTitle',
        'resourceTitleMarker',
        'resourceTitleString'
      )(code)
    }
    return resourceEnd(code)
  }

  /**
   * In resource, after title, at optional whitespace.
   *
   * ```markdown
   * > | [a](b "c") d
   *              ^
   * ```
   *
   * @type {State}
   */
  function resourceTitleAfter(code) {
    return markdownLineEndingOrSpace(code)
      ? factoryWhitespace(effects, resourceEnd)(code)
      : resourceEnd(code)
  }

  /**
   * In resource, at `)`.
   *
   * ```markdown
   * > | [a](b) d
   *          ^
   * ```
   *
   * @type {State}
   */
  function resourceEnd(code) {
    if (code === 41) {
      effects.enter('resourceMarker');
      effects.consume(code);
      effects.exit('resourceMarker');
      effects.exit('resource');
      return ok
    }
    return nok(code)
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeReferenceFull(effects, ok, nok) {
  const self = this;
  return referenceFull

  /**
   * In a reference (full), at the `[`.
   *
   * ```markdown
   * > | [a][b] d
   *        ^
   * ```
   *
   * @type {State}
   */
  function referenceFull(code) {
    return factoryLabel.call(
      self,
      effects,
      referenceFullAfter,
      referenceFullMissing,
      'reference',
      'referenceMarker',
      'referenceString'
    )(code)
  }

  /**
   * In a reference (full), after `]`.
   *
   * ```markdown
   * > | [a][b] d
   *          ^
   * ```
   *
   * @type {State}
   */
  function referenceFullAfter(code) {
    return self.parser.defined.includes(
      normalizeIdentifier(
        self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
      )
    )
      ? ok(code)
      : nok(code)
  }

  /**
   * In reference (full) that was missing.
   *
   * ```markdown
   * > | [a][b d
   *        ^
   * ```
   *
   * @type {State}
   */
  function referenceFullMissing(code) {
    return nok(code)
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeReferenceCollapsed(effects, ok, nok) {
  return referenceCollapsedStart

  /**
   * In reference (collapsed), at `[`.
   *
   * > 👉 **Note**: we only get here if the label is defined.
   *
   * ```markdown
   * > | [a][] d
   *        ^
   * ```
   *
   * @type {State}
   */
  function referenceCollapsedStart(code) {
    // We only attempt a collapsed label if there’s a `[`.

    effects.enter('reference');
    effects.enter('referenceMarker');
    effects.consume(code);
    effects.exit('referenceMarker');
    return referenceCollapsedOpen
  }

  /**
   * In reference (collapsed), at `]`.
   *
   * > 👉 **Note**: we only get here if the label is defined.
   *
   * ```markdown
   * > | [a][] d
   *         ^
   * ```
   *
   *  @type {State}
   */
  function referenceCollapsedOpen(code) {
    if (code === 93) {
      effects.enter('referenceMarker');
      effects.consume(code);
      effects.exit('referenceMarker');
      effects.exit('reference');
      return ok
    }
    return nok(code)
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */

/** @type {Construct} */
const labelStartImage = {
  name: 'labelStartImage',
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeLabelStartImage(effects, ok, nok) {
  const self = this;
  return start

  /**
   * Start of label (image) start.
   *
   * ```markdown
   * > | a ![b] c
   *       ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter('labelImage');
    effects.enter('labelImageMarker');
    effects.consume(code);
    effects.exit('labelImageMarker');
    return open
  }

  /**
   * After `!`, at `[`.
   *
   * ```markdown
   * > | a ![b] c
   *        ^
   * ```
   *
   * @type {State}
   */
  function open(code) {
    if (code === 91) {
      effects.enter('labelMarker');
      effects.consume(code);
      effects.exit('labelMarker');
      effects.exit('labelImage');
      return after
    }
    return nok(code)
  }

  /**
   * After `![`.
   *
   * ```markdown
   * > | a ![b] c
   *         ^
   * ```
   *
   * This is needed in because, when GFM footnotes are enabled, images never
   * form when started with a `^`.
   * Instead, links form:
   *
   * ```markdown
   * ![^a](b)
   *
   * ![^a][b]
   *
   * [b]: c
   * ```
   *
   * ```html
   * <p>!<a href=\"b\">^a</a></p>
   * <p>!<a href=\"c\">^a</a></p>
   * ```
   *
   * @type {State}
   */
  function after(code) {
    // To do: use a new field to do this, this is still needed for
    // `micromark-extension-gfm-footnote`, but the `label-start-link`
    // behavior isn’t.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs
      ? nok(code)
      : ok(code)
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */

/** @type {Construct} */
const labelStartLink = {
  name: 'labelStartLink',
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd.resolveAll
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeLabelStartLink(effects, ok, nok) {
  const self = this;
  return start

  /**
   * Start of label (link) start.
   *
   * ```markdown
   * > | a [b] c
   *       ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter('labelLink');
    effects.enter('labelMarker');
    effects.consume(code);
    effects.exit('labelMarker');
    effects.exit('labelLink');
    return after
  }

  /** @type {State} */
  function after(code) {
    // To do: this isn’t needed in `micromark-extension-gfm-footnote`,
    // remove.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs
      ? nok(code)
      : ok(code)
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/** @type {Construct} */
const lineEnding = {
  name: 'lineEnding',
  tokenize: tokenizeLineEnding
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeLineEnding(effects, ok) {
  return start

  /** @type {State} */
  function start(code) {
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, ok, 'linePrefix')
  }
}

/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/** @type {Construct} */
const thematicBreak = {
  name: 'thematicBreak',
  tokenize: tokenizeThematicBreak
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeThematicBreak(effects, ok, nok) {
  let size = 0;
  /** @type {NonNullable<Code>} */
  let marker;
  return start

  /**
   * Start of thematic break.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter('thematicBreak');
    // To do: parse indent like `markdown-rs`.
    return before(code)
  }

  /**
   * After optional whitespace, at marker.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */
  function before(code) {
    marker = code;
    return atBreak(code)
  }

  /**
   * After something, before something else.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */
  function atBreak(code) {
    if (code === marker) {
      effects.enter('thematicBreakSequence');
      return sequence(code)
    }
    if (size >= 3 && (code === null || markdownLineEnding(code))) {
      effects.exit('thematicBreak');
      return ok(code)
    }
    return nok(code)
  }

  /**
   * In sequence.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */
  function sequence(code) {
    if (code === marker) {
      effects.consume(code);
      size++;
      return sequence
    }
    effects.exit('thematicBreakSequence');
    return markdownSpace(code)
      ? factorySpace(effects, atBreak, 'whitespace')(code)
      : atBreak(code)
  }
}

/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').ContainerState} ContainerState
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */

/** @type {Construct} */
const list = {
  name: 'list',
  tokenize: tokenizeListStart,
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd
};

/** @type {Construct} */
const listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: true
};

/** @type {Construct} */
const indentConstruct = {
  tokenize: tokenizeIndent,
  partial: true
};

// To do: `markdown-rs` parses list items on their own and later stitches them
// together.

/**
 * @type {Tokenizer}
 * @this {TokenizeContext}
 */
function tokenizeListStart(effects, ok, nok) {
  const self = this;
  const tail = self.events[self.events.length - 1];
  let initialSize =
    tail && tail[1].type === 'linePrefix'
      ? tail[2].sliceSerialize(tail[1], true).length
      : 0;
  let size = 0;
  return start

  /** @type {State} */
  function start(code) {
    const kind =
      self.containerState.type ||
      (code === 42 || code === 43 || code === 45
        ? 'listUnordered'
        : 'listOrdered');
    if (
      kind === 'listUnordered'
        ? !self.containerState.marker || code === self.containerState.marker
        : asciiDigit(code)
    ) {
      if (!self.containerState.type) {
        self.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === 'listUnordered') {
        effects.enter('listItemPrefix');
        return code === 42 || code === 45
          ? effects.check(thematicBreak, nok, atMarker)(code)
          : atMarker(code)
      }
      if (!self.interrupt || code === 49) {
        effects.enter('listItemPrefix');
        effects.enter('listItemValue');
        return inside(code)
      }
    }
    return nok(code)
  }

  /** @type {State} */
  function inside(code) {
    if (asciiDigit(code) && ++size < 10) {
      effects.consume(code);
      return inside
    }
    if (
      (!self.interrupt || size < 2) &&
      (self.containerState.marker
        ? code === self.containerState.marker
        : code === 41 || code === 46)
    ) {
      effects.exit('listItemValue');
      return atMarker(code)
    }
    return nok(code)
  }

  /**
   * @type {State}
   **/
  function atMarker(code) {
    effects.enter('listItemMarker');
    effects.consume(code);
    effects.exit('listItemMarker');
    self.containerState.marker = self.containerState.marker || code;
    return effects.check(
      blankLine,
      // Can’t be empty when interrupting.
      self.interrupt ? nok : onBlank,
      effects.attempt(
        listItemPrefixWhitespaceConstruct,
        endOfPrefix,
        otherPrefix
      )
    )
  }

  /** @type {State} */
  function onBlank(code) {
    self.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code)
  }

  /** @type {State} */
  function otherPrefix(code) {
    if (markdownSpace(code)) {
      effects.enter('listItemPrefixWhitespace');
      effects.consume(code);
      effects.exit('listItemPrefixWhitespace');
      return endOfPrefix
    }
    return nok(code)
  }

  /** @type {State} */
  function endOfPrefix(code) {
    self.containerState.size =
      initialSize +
      self.sliceSerialize(effects.exit('listItemPrefix'), true).length;
    return ok(code)
  }
}

/**
 * @type {Tokenizer}
 * @this {TokenizeContext}
 */
function tokenizeListContinuation(effects, ok, nok) {
  const self = this;
  self.containerState._closeFlow = undefined;
  return effects.check(blankLine, onBlank, notBlank)

  /** @type {State} */
  function onBlank(code) {
    self.containerState.furtherBlankLines =
      self.containerState.furtherBlankLines ||
      self.containerState.initialBlankLine;

    // We have a blank line.
    // Still, try to consume at most the items size.
    return factorySpace(
      effects,
      ok,
      'listItemIndent',
      self.containerState.size + 1
    )(code)
  }

  /** @type {State} */
  function notBlank(code) {
    if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
      self.containerState.furtherBlankLines = undefined;
      self.containerState.initialBlankLine = undefined;
      return notInCurrentItem(code)
    }
    self.containerState.furtherBlankLines = undefined;
    self.containerState.initialBlankLine = undefined;
    return effects.attempt(indentConstruct, ok, notInCurrentItem)(code)
  }

  /** @type {State} */
  function notInCurrentItem(code) {
    // While we do continue, we signal that the flow should be closed.
    self.containerState._closeFlow = true;
    // As we’re closing flow, we’re no longer interrupting.
    self.interrupt = undefined;
    // Always populated by defaults.

    return factorySpace(
      effects,
      effects.attempt(list, ok, nok),
      'linePrefix',
      self.parser.constructs.disable.null.includes('codeIndented')
        ? undefined
        : 4
    )(code)
  }
}

/**
 * @type {Tokenizer}
 * @this {TokenizeContext}
 */
function tokenizeIndent(effects, ok, nok) {
  const self = this;
  return factorySpace(
    effects,
    afterPrefix,
    'listItemIndent',
    self.containerState.size + 1
  )

  /** @type {State} */
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail &&
      tail[1].type === 'listItemIndent' &&
      tail[2].sliceSerialize(tail[1], true).length === self.containerState.size
      ? ok(code)
      : nok(code)
  }
}

/**
 * @type {Exiter}
 * @this {TokenizeContext}
 */
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}

/**
 * @type {Tokenizer}
 * @this {TokenizeContext}
 */
function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
  const self = this;

  // Always populated by defaults.

  return factorySpace(
    effects,
    afterPrefix,
    'listItemPrefixWhitespace',
    self.parser.constructs.disable.null.includes('codeIndented')
      ? undefined
      : 4 + 1
  )

  /** @type {State} */
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return !markdownSpace(code) &&
      tail &&
      tail[1].type === 'listItemPrefixWhitespace'
      ? ok(code)
      : nok(code)
  }
}

/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */
/** @type {Construct} */
const setextUnderline = {
  name: 'setextUnderline',
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
};

/** @type {Resolver} */
function resolveToSetextUnderline(events, context) {
  // To do: resolve like `markdown-rs`.
  let index = events.length;
  /** @type {number | undefined} */
  let content;
  /** @type {number | undefined} */
  let text;
  /** @type {number | undefined} */
  let definition;

  // Find the opening of the content.
  // It’ll always exist: we don’t tokenize if it isn’t there.
  while (index--) {
    if (events[index][0] === 'enter') {
      if (events[index][1].type === 'content') {
        content = index;
        break
      }
      if (events[index][1].type === 'paragraph') {
        text = index;
      }
    }
    // Exit
    else {
      if (events[index][1].type === 'content') {
        // Remove the content end (if needed we’ll add it later)
        events.splice(index, 1);
      }
      if (!definition && events[index][1].type === 'definition') {
        definition = index;
      }
    }
  }
  const heading = {
    type: 'setextHeading',
    start: Object.assign({}, events[text][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };

  // Change the paragraph to setext heading text.
  events[text][1].type = 'setextHeadingText';

  // If we have definitions in the content, we’ll keep on having content,
  // but we need move it.
  if (definition) {
    events.splice(text, 0, ['enter', heading, context]);
    events.splice(definition + 1, 0, ['exit', events[content][1], context]);
    events[content][1].end = Object.assign({}, events[definition][1].end);
  } else {
    events[content][1] = heading;
  }

  // Add the heading exit at the end.
  events.push(['exit', heading, context]);
  return events
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeSetextUnderline(effects, ok, nok) {
  const self = this;
  /** @type {NonNullable<Code>} */
  let marker;
  return start

  /**
   * At start of heading (setext) underline.
   *
   * ```markdown
   *   | aa
   * > | ==
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    let index = self.events.length;
    /** @type {boolean | undefined} */
    let paragraph;
    // Find an opening.
    while (index--) {
      // Skip enter/exit of line ending, line prefix, and content.
      // We can now either have a definition or a paragraph.
      if (
        self.events[index][1].type !== 'lineEnding' &&
        self.events[index][1].type !== 'linePrefix' &&
        self.events[index][1].type !== 'content'
      ) {
        paragraph = self.events[index][1].type === 'paragraph';
        break
      }
    }

    // To do: handle lazy/pierce like `markdown-rs`.
    // To do: parse indent like `markdown-rs`.
    if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
      effects.enter('setextHeadingLine');
      marker = code;
      return before(code)
    }
    return nok(code)
  }

  /**
   * After optional whitespace, at `-` or `=`.
   *
   * ```markdown
   *   | aa
   * > | ==
   *     ^
   * ```
   *
   * @type {State}
   */
  function before(code) {
    effects.enter('setextHeadingLineSequence');
    return inside(code)
  }

  /**
   * In sequence.
   *
   * ```markdown
   *   | aa
   * > | ==
   *     ^
   * ```
   *
   * @type {State}
   */
  function inside(code) {
    if (code === marker) {
      effects.consume(code);
      return inside
    }
    effects.exit('setextHeadingLineSequence');
    return markdownSpace(code)
      ? factorySpace(effects, after, 'lineSuffix')(code)
      : after(code)
  }

  /**
   * After sequence, after optional whitespace.
   *
   * ```markdown
   *   | aa
   * > | ==
   *       ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('setextHeadingLine');
      return ok(code)
    }
    return nok(code)
  }
}

/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 */
/** @type {InitialConstruct} */
const flow$1 = {
  tokenize: initializeFlow
};

/**
 * @this {TokenizeContext}
 * @type {Initializer}
 */
function initializeFlow(effects) {
  const self = this;
  const initial = effects.attempt(
    // Try to parse a blank line.
    blankLine,
    atBlankEnding,
    // Try to parse initial flow (essentially, only code).
    effects.attempt(
      this.parser.constructs.flowInitial,
      afterConstruct,
      factorySpace(
        effects,
        effects.attempt(
          this.parser.constructs.flow,
          afterConstruct,
          effects.attempt(content, afterConstruct)
        ),
        'linePrefix'
      )
    )
  );
  return initial

  /** @type {State} */
  function atBlankEnding(code) {
    if (code === null) {
      effects.consume(code);
      return
    }
    effects.enter('lineEndingBlank');
    effects.consume(code);
    effects.exit('lineEndingBlank');
    self.currentConstruct = undefined;
    return initial
  }

  /** @type {State} */
  function afterConstruct(code) {
    if (code === null) {
      effects.consume(code);
      return
    }
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    self.currentConstruct = undefined;
    return initial
  }
}

/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 */

const resolver = {
  resolveAll: createResolver()
};
const string$1 = initializeFactory('string');
const text$1 = initializeFactory('text');

/**
 * @param {'string' | 'text'} field
 * @returns {InitialConstruct}
 */
function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(
      field === 'text' ? resolveAllLineSuffixes : undefined
    )
  }

  /**
   * @this {TokenizeContext}
   * @type {Initializer}
   */
  function initializeText(effects) {
    const self = this;
    const constructs = this.parser.constructs[field];
    const text = effects.attempt(constructs, start, notText);
    return start

    /** @type {State} */
    function start(code) {
      return atBreak(code) ? text(code) : notText(code)
    }

    /** @type {State} */
    function notText(code) {
      if (code === null) {
        effects.consume(code);
        return
      }
      effects.enter('data');
      effects.consume(code);
      return data
    }

    /** @type {State} */
    function data(code) {
      if (atBreak(code)) {
        effects.exit('data');
        return text(code)
      }

      // Data.
      effects.consume(code);
      return data
    }

    /**
     * @param {Code} code
     * @returns {boolean}
     */
    function atBreak(code) {
      if (code === null) {
        return true
      }
      const list = constructs[code];
      let index = -1;
      if (list) {
        // Always populated by defaults.

        while (++index < list.length) {
          const item = list[index];
          if (!item.previous || item.previous.call(self, self.previous)) {
            return true
          }
        }
      }
      return false
    }
  }
}

/**
 * @param {Resolver | undefined} [extraResolver]
 * @returns {Resolver}
 */
function createResolver(extraResolver) {
  return resolveAllText

  /** @type {Resolver} */
  function resolveAllText(events, context) {
    let index = -1;
    /** @type {number | undefined} */
    let enter;

    // A rather boring computation (to merge adjacent `data` events) which
    // improves mm performance by 29%.
    while (++index <= events.length) {
      if (enter === undefined) {
        if (events[index] && events[index][1].type === 'data') {
          enter = index;
          index++;
        }
      } else if (!events[index] || events[index][1].type !== 'data') {
        // Don’t do anything if there is one data token.
        if (index !== enter + 2) {
          events[enter][1].end = events[index - 1][1].end;
          events.splice(enter + 2, index - enter - 2);
          index = enter + 2;
        }
        enter = undefined;
      }
    }
    return extraResolver ? extraResolver(events, context) : events
  }
}

/**
 * A rather ugly set of instructions which again looks at chunks in the input
 * stream.
 * The reason to do this here is that it is *much* faster to parse in reverse.
 * And that we can’t hook into `null` to split the line suffix before an EOF.
 * To do: figure out if we can make this into a clean utility, or even in core.
 * As it will be useful for GFMs literal autolink extension (and maybe even
 * tables?)
 *
 * @type {Resolver}
 */
function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0; // Skip first.

  while (++eventIndex <= events.length) {
    if (
      (eventIndex === events.length ||
        events[eventIndex][1].type === 'lineEnding') &&
      events[eventIndex - 1][1].type === 'data'
    ) {
      const data = events[eventIndex - 1][1];
      const chunks = context.sliceStream(data);
      let index = chunks.length;
      let bufferIndex = -1;
      let size = 0;
      /** @type {boolean | undefined} */
      let tabs;
      while (index--) {
        const chunk = chunks[index];
        if (typeof chunk === 'string') {
          bufferIndex = chunk.length;
          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }
          if (bufferIndex) break
          bufferIndex = -1;
        }
        // Number
        else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1) ; else {
          // Replacement character, exit.
          index++;
          break
        }
      }
      if (size) {
        const token = {
          type:
            eventIndex === events.length || tabs || size < 2
              ? 'lineSuffix'
              : 'hardBreakTrailing',
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index,
            _bufferIndex: index
              ? bufferIndex
              : data.start._bufferIndex + bufferIndex
          },
          end: Object.assign({}, data.end)
        };
        data.end = Object.assign({}, token.start);
        if (data.start.offset === data.end.offset) {
          Object.assign(data, token);
        } else {
          events.splice(
            eventIndex,
            0,
            ['enter', token, context],
            ['exit', token, context]
          );
          eventIndex += 2;
        }
      }
      eventIndex++;
    }
  }
  return events
}

/**
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenType} TokenType
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 */
/**
 * Create a tokenizer.
 * Tokenizers deal with one type of data (e.g., containers, flow, text).
 * The parser is the object dealing with it all.
 * `initialize` works like other constructs, except that only its `tokenize`
 * function is used, in which case it doesn’t receive an `ok` or `nok`.
 * `from` can be given to set the point before the first character, although
 * when further lines are indented, they must be set with `defineSkip`.
 *
 * @param {ParseContext} parser
 * @param {InitialConstruct} initialize
 * @param {Omit<Point, '_bufferIndex' | '_index'> | undefined} [from]
 * @returns {TokenizeContext}
 */
function createTokenizer(parser, initialize, from) {
  /** @type {Point} */
  let point = Object.assign(
    from
      ? Object.assign({}, from)
      : {
          line: 1,
          column: 1,
          offset: 0
        },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  /** @type {Record<string, number>} */
  const columnStart = {};
  /** @type {Array<Construct>} */
  const resolveAllConstructs = [];
  /** @type {Array<Chunk>} */
  let chunks = [];
  /** @type {Array<Token>} */
  let stack = [];

  /**
   * Tools used for tokenizing.
   *
   * @type {Effects}
   */
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };

  /**
   * State and tools for resolving and serializing.
   *
   * @type {TokenizeContext}
   */
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };

  /**
   * The state function.
   *
   * @type {State | void}
   */
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context

  /** @type {TokenizeContext['write']} */
  function write(slice) {
    chunks = push(chunks, slice);
    main();

    // Exit if we’re not done, resolve might change stuff.
    if (chunks[chunks.length - 1] !== null) {
      return []
    }
    addResult(initialize, 0);

    // Otherwise, resolve, and exit.
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events
  }

  //
  // Tools.
  //

  /** @type {TokenizeContext['sliceSerialize']} */
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs)
  }

  /** @type {TokenizeContext['sliceStream']} */
  function sliceStream(token) {
    return sliceChunks(chunks, token)
  }

  /** @type {TokenizeContext['now']} */
  function now() {
    // This is a hot path, so we clone manually instead of `Object.assign({}, point)`
    const {line, column, offset, _index, _bufferIndex} = point;
    return {
      line,
      column,
      offset,
      _index,
      _bufferIndex
    }
  }

  /** @type {TokenizeContext['defineSkip']} */
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }

  //
  // State management.
  //

  /**
   * Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
   * `consume`).
   * Here is where we walk through the chunks, which either include strings of
   * several characters, or numerical character codes.
   * The reason to do this in a loop instead of a call is so the stack can
   * drain.
   *
   * @returns {void}
   */
  function main() {
    /** @type {number} */
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];

      // If we’re in a buffer chunk, loop through it.
      if (typeof chunk === 'string') {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (
          point._index === chunkIndex &&
          point._bufferIndex < chunk.length
        ) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }

  /**
   * Deal with one code.
   *
   * @param {Code} code
   * @returns {void}
   */
  function go(code) {
    state = state(code);
  }

  /** @type {Effects['consume']} */
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }

    // Not in a string chunk.
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;

      // At end of string chunk.
      // @ts-expect-error Points w/ non-negative `_bufferIndex` reference
      // strings.
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }

    // Expose the previous character.
    context.previous = code;
  }

  /** @type {Effects['enter']} */
  function enter(type, fields) {
    /** @type {Token} */
    // @ts-expect-error Patch instead of assign required fields to help GC.
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(['enter', token, context]);
    stack.push(token);
    return token
  }

  /** @type {Effects['exit']} */
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(['exit', token, context]);
    return token
  }

  /**
   * Use results.
   *
   * @type {ReturnHandle}
   */
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }

  /**
   * Discard results.
   *
   * @type {ReturnHandle}
   */
  function onsuccessfulcheck(_, info) {
    info.restore();
  }

  /**
   * Factory to attempt/check/interrupt.
   *
   * @param {ReturnHandle} onreturn
   * @param {{interrupt?: boolean | undefined} | undefined} [fields]
   */
  function constructFactory(onreturn, fields) {
    return hook

    /**
     * Handle either an object mapping codes to constructs, a list of
     * constructs, or a single construct.
     *
     * @param {Array<Construct> | Construct | ConstructRecord} constructs
     * @param {State} returnState
     * @param {State | undefined} [bogusState]
     * @returns {State}
     */
    function hook(constructs, returnState, bogusState) {
      /** @type {Array<Construct>} */
      let listOfConstructs;
      /** @type {number} */
      let constructIndex;
      /** @type {Construct} */
      let currentConstruct;
      /** @type {Info} */
      let info;
      return Array.isArray(constructs) /* c8 ignore next 1 */
        ? handleListOfConstructs(constructs)
        : 'tokenize' in constructs
        ? // @ts-expect-error Looks like a construct.
          handleListOfConstructs([constructs])
        : handleMapOfConstructs(constructs)

      /**
       * Handle a list of construct.
       *
       * @param {ConstructRecord} map
       * @returns {State}
       */
      function handleMapOfConstructs(map) {
        return start

        /** @type {State} */
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...(Array.isArray(def) ? def : def ? [def] : []),
            ...(Array.isArray(all) ? all : all ? [all] : [])
          ];
          return handleListOfConstructs(list)(code)
        }
      }

      /**
       * Handle a list of construct.
       *
       * @param {Array<Construct>} list
       * @returns {State}
       */
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState
        }
        return handleConstruct(list[constructIndex])
      }

      /**
       * Handle a single construct.
       *
       * @param {Construct} construct
       * @returns {State}
       */
      function handleConstruct(construct) {
        return start

        /** @type {State} */
        function start(code) {
          // To do: not needed to store if there is no bogus state, probably?
          // Currently doesn’t work because `inspect` in document does a check
          // w/o a bogus, which doesn’t make sense. But it does seem to help perf
          // by not storing.
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }

          // Always populated by defaults.

          if (
            construct.name &&
            context.parser.constructs.disable.null.includes(construct.name)
          ) {
            return nok()
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code)
        }
      }

      /** @type {State} */
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState
      }

      /** @type {State} */
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex])
        }
        return bogusState
      }
    }
  }

  /**
   * @param {Construct} construct
   * @param {number} from
   * @returns {void}
   */
  function addResult(construct, from) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from,
        context.events.length - from,
        construct.resolve(context.events.slice(from), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }

  /**
   * Store state.
   *
   * @returns {Info}
   */
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    }

    /**
     * Restore state.
     *
     * @returns {void}
     */
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }

  /**
   * Move the current point a bit forward in the line when it’s on a column
   * skip.
   *
   * @returns {void}
   */
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}

/**
 * Get the chunks from a slice of chunks in the range of a token.
 *
 * @param {Array<Chunk>} chunks
 * @param {Pick<Token, 'end' | 'start'>} token
 * @returns {Array<Chunk>}
 */
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  /** @type {Array<Chunk>} */
  let view;
  if (startIndex === endIndex) {
    // @ts-expect-error `_bufferIndex` is used on string chunks.
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      const head = view[0];
      if (typeof head === 'string') {
        view[0] = head.slice(startBufferIndex);
      } else {
        view.shift();
      }
    }
    if (endBufferIndex > 0) {
      // @ts-expect-error `_bufferIndex` is used on string chunks.
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view
}

/**
 * Get the string value of a slice of chunks.
 *
 * @param {Array<Chunk>} chunks
 * @param {boolean | undefined} [expandTabs=false]
 * @returns {string}
 */
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  /** @type {Array<string>} */
  const result = [];
  /** @type {boolean | undefined} */
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    /** @type {string} */
    let value;
    if (typeof chunk === 'string') {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = '\r';
          break
        }
        case -4: {
          value = '\n';
          break
        }
        case -3: {
          value = '\r' + '\n';
          break
        }
        case -2: {
          value = expandTabs ? ' ' : '\t';
          break
        }
        case -1: {
          if (!expandTabs && atTab) continue
          value = ' ';
          break
        }
        default: {
          // Currently only replacement character.
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join('')
}

/**
 * @typedef {import('micromark-util-types').Extension} Extension
 */

/** @satisfies {Extension['document']} */
const document$1 = {
  [42]: list,
  [43]: list,
  [45]: list,
  [48]: list,
  [49]: list,
  [50]: list,
  [51]: list,
  [52]: list,
  [53]: list,
  [54]: list,
  [55]: list,
  [56]: list,
  [57]: list,
  [62]: blockQuote
};

/** @satisfies {Extension['contentInitial']} */
const contentInitial = {
  [91]: definition
};

/** @satisfies {Extension['flowInitial']} */
const flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
};

/** @satisfies {Extension['flow']} */
const flow = {
  [35]: headingAtx,
  [42]: thematicBreak,
  [45]: [setextUnderline, thematicBreak],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak,
  [96]: codeFenced,
  [126]: codeFenced
};

/** @satisfies {Extension['string']} */
const string = {
  [38]: characterReference,
  [92]: characterEscape
};

/** @satisfies {Extension['text']} */
const text = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
};

/** @satisfies {Extension['insideSpan']} */
const insideSpan = {
  null: [attention, resolver]
};

/** @satisfies {Extension['attentionMarkers']} */
const attentionMarkers = {
  null: [42, 95]
};

/** @satisfies {Extension['disable']} */
const disable = {
  null: []
};

var defaultConstructs = /*#__PURE__*/Object.freeze({
  __proto__: null,
  document: document$1,
  contentInitial: contentInitial,
  flowInitial: flowInitial,
  flow: flow,
  string: string,
  text: text,
  insideSpan: insideSpan,
  attentionMarkers: attentionMarkers,
  disable: disable
});

/**
 * @typedef {import('micromark-util-types').Create} Create
 * @typedef {import('micromark-util-types').FullNormalizedExtension} FullNormalizedExtension
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 */

/**
 * @param {ParseOptions | null | undefined} [options]
 * @returns {ParseContext}
 */
function parse(options) {
  const settings = options || {};
  const constructs =
    /** @type {FullNormalizedExtension} */
    combineExtensions([defaultConstructs, ...(settings.extensions || [])]);

  /** @type {ParseContext} */
  const parser = {
    defined: [],
    lazy: {},
    constructs,
    content: create(content$1),
    document: create(document$2),
    flow: create(flow$1),
    string: create(string$1),
    text: create(text$1)
  };
  return parser

  /**
   * @param {InitialConstruct} initial
   */
  function create(initial) {
    return creator
    /** @type {Create} */
    function creator(from) {
      return createTokenizer(parser, initial, from)
    }
  }
}

/**
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Value} Value
 */

/**
 * @callback Preprocessor
 * @param {Value} value
 * @param {Encoding | null | undefined} [encoding]
 * @param {boolean | null | undefined} [end=false]
 * @returns {Array<Chunk>}
 */

const search = /[\0\t\n\r]/g;

/**
 * @returns {Preprocessor}
 */
function preprocess() {
  let column = 1;
  let buffer = '';
  /** @type {boolean | undefined} */
  let start = true;
  /** @type {boolean | undefined} */
  let atCarriageReturn;
  return preprocessor

  /** @type {Preprocessor} */
  function preprocessor(value, encoding, end) {
    /** @type {Array<Chunk>} */
    const chunks = [];
    /** @type {RegExpMatchArray | null} */
    let match;
    /** @type {number} */
    let next;
    /** @type {number} */
    let startPosition;
    /** @type {number} */
    let endPosition;
    /** @type {Code} */
    let code;

    // @ts-expect-error `Buffer` does allow an encoding.
    value = buffer + value.toString(encoding);
    startPosition = 0;
    buffer = '';
    if (start) {
      // To do: `markdown-rs` actually parses BOMs (byte order mark).
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }
      start = undefined;
    }
    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition =
        match && match.index !== undefined ? match.index : value.length;
      code = value.charCodeAt(endPosition);
      if (!match) {
        buffer = value.slice(startPosition);
        break
      }
      if (code === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = undefined;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = undefined;
        }
        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }
        switch (code) {
          case 0: {
            chunks.push(65533);
            column++;
            break
          }
          case 9: {
            next = Math.ceil(column / 4) * 4;
            chunks.push(-2);
            while (column++ < next) chunks.push(-1);
            break
          }
          case 10: {
            chunks.push(-4);
            column = 1;
            break
          }
          default: {
            atCarriageReturn = true;
            column = 1;
          }
        }
      }
      startPosition = endPosition + 1;
    }
    if (end) {
      if (atCarriageReturn) chunks.push(-5);
      if (buffer) chunks.push(buffer);
      chunks.push(null);
    }
    return chunks
  }
}

/**
 * @typedef {import('micromark-util-types').Event} Event
 */

/**
 * @param {Array<Event>} events
 * @returns {Array<Event>}
 */
function postprocess(events) {
  while (!subtokenize(events)) {
    // Empty
  }
  return events
}

/**
 * Turn the number (in string form as either hexa- or plain decimal) coming from
 * a numeric character reference into a character.
 *
 * Sort of like `String.fromCharCode(Number.parseInt(value, base))`, but makes
 * non-characters and control characters safe.
 *
 * @param {string} value
 *   Value to decode.
 * @param {number} base
 *   Numeric base.
 * @returns {string}
 *   Character.
 */
function decodeNumericCharacterReference(value, base) {
  const code = Number.parseInt(value, base);
  if (
    // C0 except for HT, LF, FF, CR, space.
    code < 9 ||
    code === 11 ||
    (code > 13 && code < 32) ||
    // Control character (DEL) of C0, and C1 controls.
    (code > 126 && code < 160) ||
    // Lone high surrogates and low surrogates.
    (code > 55295 && code < 57344) ||
    // Noncharacters.
    (code > 64975 && code < 65008) /* eslint-disable no-bitwise */ ||
    (code & 65535) === 65535 ||
    (code & 65535) === 65534 /* eslint-enable no-bitwise */ ||
    // Out of range
    code > 1114111
  ) {
    return '\uFFFD'
  }
  return String.fromCharCode(code)
}

const characterEscapeOrReference =
  /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

/**
 * Decode markdown strings (which occur in places such as fenced code info
 * strings, destinations, labels, and titles).
 *
 * The “string” content type allows character escapes and -references.
 * This decodes those.
 *
 * @param {string} value
 *   Value to decode.
 * @returns {string}
 *   Decoded value.
 */
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode)
}

/**
 * @param {string} $0
 * @param {string} $1
 * @param {string} $2
 * @returns {string}
 */
function decode($0, $1, $2) {
  if ($1) {
    // Escape.
    return $1
  }

  // Reference.
  const head = $2.charCodeAt(0);
  if (head === 35) {
    const head = $2.charCodeAt(1);
    const hex = head === 120 || head === 88;
    return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10)
  }
  return decodeNamedCharacterReference($2) || $0
}

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */

/**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 */

/**
 * Serialize the positional info of a point, position (start and end points),
 * or node.
 *
 * @param {Node | NodeLike | Position | PositionLike | Point | PointLike | null | undefined} [value]
 *   Node, position, or point.
 * @returns {string}
 *   Pretty printed positional info of a node (`string`).
 *
 *   In the format of a range `ls:cs-le:ce` (when given `node` or `position`)
 *   or a point `l:c` (when given `point`), where `l` stands for line, `c` for
 *   column, `s` for `start`, and `e` for end.
 *   An empty string (`''`) is returned if the given value is neither `node`,
 *   `position`, nor `point`.
 */
function stringifyPosition(value) {
  // Nothing.
  if (!value || typeof value !== 'object') {
    return ''
  }

  // Node.
  if ('position' in value || 'type' in value) {
    return position(value.position)
  }

  // Position.
  if ('start' in value || 'end' in value) {
    return position(value)
  }

  // Point.
  if ('line' in value || 'column' in value) {
    return point$1(value)
  }

  // ?
  return ''
}

/**
 * @param {Point | PointLike | null | undefined} point
 * @returns {string}
 */
function point$1(point) {
  return index(point && point.line) + ':' + index(point && point.column)
}

/**
 * @param {Position | PositionLike | null | undefined} pos
 * @returns {string}
 */
function position(pos) {
  return point$1(pos && pos.start) + '-' + point$1(pos && pos.end)
}

/**
 * @param {number | null | undefined} value
 * @returns {number}
 */
function index(value) {
  return value && typeof value === 'number' ? value : 1
}

/**
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Value} Value
 *
 * @typedef {import('unist').Parent} UnistParent
 * @typedef {import('unist').Point} Point
 *
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('mdast').StaticPhrasingContent} StaticPhrasingContent
 * @typedef {import('mdast').Content} Content
 * @typedef {import('mdast').Break} Break
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('mdast').Code} Code
 * @typedef {import('mdast').Definition} Definition
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('mdast').HTML} HTML
 * @typedef {import('mdast').Image} Image
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('mdast').Link} Link
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('mdast').List} List
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('mdast').Text} Text
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 * @typedef {import('mdast').ReferenceType} ReferenceType
 * @typedef {import('../index.js').CompileData} CompileData
 */
const own = {}.hasOwnProperty;

/**
 * @param value
 *   Markdown to parse.
 * @param encoding
 *   Character encoding for when `value` is `Buffer`.
 * @param options
 *   Configuration.
 * @returns
 *   mdast tree.
 */
const fromMarkdown =
  /**
   * @type {(
   *   ((value: Value, encoding: Encoding, options?: Options | null | undefined) => Root) &
   *   ((value: Value, options?: Options | null | undefined) => Root)
   * )}
   */

  /**
   * @param {Value} value
   * @param {Encoding | Options | null | undefined} [encoding]
   * @param {Options | null | undefined} [options]
   * @returns {Root}
   */
  function (value, encoding, options) {
    if (typeof encoding !== 'string') {
      options = encoding;
      encoding = undefined;
    }
    return compiler(options)(
      postprocess(
        parse(options).document().write(preprocess()(value, encoding, true))
      )
    )
  };

/**
 * Note this compiler only understand complete buffering, not streaming.
 *
 * @param {Options | null | undefined} [options]
 */
function compiler(options) {
  /** @type {Config} */
  const config = {
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
    enter: {
      autolink: opener(link),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading),
      blockQuote: opener(blockQuote),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer,
      codeFencedFenceMeta: buffer,
      codeIndented: opener(codeFlow, buffer),
      codeText: opener(codeText, buffer),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition),
      definitionDestinationString: buffer,
      definitionLabelString: buffer,
      definitionTitleString: buffer,
      emphasis: opener(emphasis),
      hardBreakEscape: opener(hardBreak),
      hardBreakTrailing: opener(hardBreak),
      htmlFlow: opener(html, buffer),
      htmlFlowData: onenterdata,
      htmlText: opener(html, buffer),
      htmlTextData: onenterdata,
      image: opener(image),
      label: buffer,
      link: opener(link),
      listItem: opener(listItem),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list, onenterlistordered),
      listUnordered: opener(list),
      paragraph: opener(paragraph),
      reference: onenterreference,
      referenceString: buffer,
      resourceDestinationString: buffer,
      resourceTitleString: buffer,
      setextHeading: opener(heading),
      strong: opener(strong),
      thematicBreak: opener(thematicBreak)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  };
  configure(config, (options || {}).mdastExtensions || []);

  /** @type {CompileData} */
  const data = {};
  return compile

  /**
   * Turn micromark events into an mdast tree.
   *
   * @param {Array<Event>} events
   *   Events.
   * @returns {Root}
   *   mdast tree.
   */
  function compile(events) {
    /** @type {Root} */
    let tree = {
      type: 'root',
      children: []
    };
    /** @type {Omit<CompileContext, 'sliceSerialize'>} */
    const context = {
      stack: [tree],
      tokenStack: [],
      config,
      enter,
      exit,
      buffer,
      resume,
      setData,
      getData
    };
    /** @type {Array<number>} */
    const listStack = [];
    let index = -1;
    while (++index < events.length) {
      // We preprocess lists to add `listItem` tokens, and to infer whether
      // items the list itself are spread out.
      if (
        events[index][1].type === 'listOrdered' ||
        events[index][1].type === 'listUnordered'
      ) {
        if (events[index][0] === 'enter') {
          listStack.push(index);
        } else {
          const tail = listStack.pop();
          index = prepareList(events, tail, index);
        }
      }
    }
    index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }

    // Handle tokens still being open.
    if (context.tokenStack.length > 0) {
      const tail = context.tokenStack[context.tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, undefined, tail[0]);
    }

    // Figure out `root` position.
    tree.position = {
      start: point(
        events.length > 0
          ? events[0][1].start
          : {
              line: 1,
              column: 1,
              offset: 0
            }
      ),
      end: point(
        events.length > 0
          ? events[events.length - 2][1].end
          : {
              line: 1,
              column: 1,
              offset: 0
            }
      )
    };

    // Call transforms.
    index = -1;
    while (++index < config.transforms.length) {
      tree = config.transforms[index](tree) || tree;
    }
    return tree
  }

  /**
   * @param {Array<Event>} events
   * @param {number} start
   * @param {number} length
   * @returns {number}
   */
  function prepareList(events, start, length) {
    let index = start - 1;
    let containerBalance = -1;
    let listSpread = false;
    /** @type {Token | undefined} */
    let listItem;
    /** @type {number | undefined} */
    let lineIndex;
    /** @type {number | undefined} */
    let firstBlankLineIndex;
    /** @type {boolean | undefined} */
    let atMarker;
    while (++index <= length) {
      const event = events[index];
      if (
        event[1].type === 'listUnordered' ||
        event[1].type === 'listOrdered' ||
        event[1].type === 'blockQuote'
      ) {
        if (event[0] === 'enter') {
          containerBalance++;
        } else {
          containerBalance--;
        }
        atMarker = undefined;
      } else if (event[1].type === 'lineEndingBlank') {
        if (event[0] === 'enter') {
          if (
            listItem &&
            !atMarker &&
            !containerBalance &&
            !firstBlankLineIndex
          ) {
            firstBlankLineIndex = index;
          }
          atMarker = undefined;
        }
      } else if (
        event[1].type === 'linePrefix' ||
        event[1].type === 'listItemValue' ||
        event[1].type === 'listItemMarker' ||
        event[1].type === 'listItemPrefix' ||
        event[1].type === 'listItemPrefixWhitespace'
      ) ; else {
        atMarker = undefined;
      }
      if (
        (!containerBalance &&
          event[0] === 'enter' &&
          event[1].type === 'listItemPrefix') ||
        (containerBalance === -1 &&
          event[0] === 'exit' &&
          (event[1].type === 'listUnordered' ||
            event[1].type === 'listOrdered'))
      ) {
        if (listItem) {
          let tailIndex = index;
          lineIndex = undefined;
          while (tailIndex--) {
            const tailEvent = events[tailIndex];
            if (
              tailEvent[1].type === 'lineEnding' ||
              tailEvent[1].type === 'lineEndingBlank'
            ) {
              if (tailEvent[0] === 'exit') continue
              if (lineIndex) {
                events[lineIndex][1].type = 'lineEndingBlank';
                listSpread = true;
              }
              tailEvent[1].type = 'lineEnding';
              lineIndex = tailIndex;
            } else if (
              tailEvent[1].type === 'linePrefix' ||
              tailEvent[1].type === 'blockQuotePrefix' ||
              tailEvent[1].type === 'blockQuotePrefixWhitespace' ||
              tailEvent[1].type === 'blockQuoteMarker' ||
              tailEvent[1].type === 'listItemIndent'
            ) ; else {
              break
            }
          }
          if (
            firstBlankLineIndex &&
            (!lineIndex || firstBlankLineIndex < lineIndex)
          ) {
            listItem._spread = true;
          }

          // Fix position.
          listItem.end = Object.assign(
            {},
            lineIndex ? events[lineIndex][1].start : event[1].end
          );
          events.splice(lineIndex || index, 0, ['exit', listItem, event[2]]);
          index++;
          length++;
        }

        // Create a new list item.
        if (event[1].type === 'listItemPrefix') {
          listItem = {
            type: 'listItem',
            _spread: false,
            start: Object.assign({}, event[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: undefined
          };
          // @ts-expect-error: `listItem` is most definitely defined, TS...
          events.splice(index, 0, ['enter', listItem, event[2]]);
          index++;
          length++;
          firstBlankLineIndex = undefined;
          atMarker = true;
        }
      }
    }
    events[start][1]._spread = listSpread;
    return length
  }

  /**
   * Set data.
   *
   * @template {keyof CompileData} Key
   *   Field type.
   * @param {Key} key
   *   Key of field.
   * @param {CompileData[Key]} [value]
   *   New value.
   * @returns {void}
   *   Nothing.
   */
  function setData(key, value) {
    data[key] = value;
  }

  /**
   * Get data.
   *
   * @template {keyof CompileData} Key
   *   Field type.
   * @param {Key} key
   *   Key of field.
   * @returns {CompileData[Key]}
   *   Value.
   */
  function getData(key) {
    return data[key]
  }

  /**
   * Create an opener handle.
   *
   * @param {(token: Token) => Node} create
   *   Create a node.
   * @param {Handle} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */
  function opener(create, and) {
    return open

    /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */
    function open(token) {
      enter.call(this, create(token), token);
      if (and) and.call(this, token);
    }
  }

  /**
   * @this {CompileContext}
   * @returns {void}
   */
  function buffer() {
    this.stack.push({
      type: 'fragment',
      children: []
    });
  }

  /**
   * @template {Node} Kind
   *   Node type.
   * @this {CompileContext}
   *   Context.
   * @param {Kind} node
   *   Node to enter.
   * @param {Token} token
   *   Corresponding token.
   * @param {OnEnterError | undefined} [errorHandler]
   *   Handle the case where this token is open, but it is closed by something else.
   * @returns {Kind}
   *   The given node.
   */
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    // @ts-expect-error: Assume `Node` can exist as a child of `parent`.
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    // @ts-expect-error: `end` will be patched later.
    node.position = {
      start: point(token.start)
    };
    return node
  }

  /**
   * Create a closer handle.
   *
   * @param {Handle} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */
  function closer(and) {
    return close

    /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */
    function close(token) {
      if (and) and.call(this, token);
      exit.call(this, token);
    }
  }

  /**
   * @this {CompileContext}
   *   Context.
   * @param {Token} token
   *   Corresponding token.
   * @param {OnExitError | undefined} [onExitError]
   *   Handle the case where another token is open.
   * @returns {Node}
   *   The closed node.
   */
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        'Cannot close `' +
          token.type +
          '` (' +
          stringifyPosition({
            start: token.start,
            end: token.end
          }) +
          '): it’s not open'
      )
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node
  }

  /**
   * @this {CompileContext}
   * @returns {string}
   */
  function resume() {
    return toString(this.stack.pop())
  }

  //
  // Handlers.
  //

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onenterlistordered() {
    setData('expectingFirstListItemValue', true);
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onenterlistitemvalue(token) {
    if (getData('expectingFirstListItemValue')) {
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
      setData('expectingFirstListItemValue');
    }
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcodefencedfenceinfo() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.lang = data;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcodefencedfencemeta() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.meta = data;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcodefencedfence() {
    // Exit if this is the closing fence.
    if (getData('flowCodeInside')) return
    this.buffer();
    setData('flowCodeInside', true);
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcodefenced() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '');
    setData('flowCodeInside');
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcodeindented() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data.replace(/(\r?\n|\r)$/g, '');
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitdefinitionlabelstring(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase();
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitdefinitiontitlestring() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.title = data;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitdefinitiondestinationstring() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.url = data;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitatxheadingsequence(token) {
    const node = this.stack[this.stack.length - 1];
    if (!node.depth) {
      const depth = this.sliceSerialize(token).length;
      node.depth = depth;
    }
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitsetextheadingtext() {
    setData('setextHeadingSlurpLineEnding', true);
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitsetextheadinglinesequence(token) {
    const node = this.stack[this.stack.length - 1];
    node.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitsetextheading() {
    setData('setextHeadingSlurpLineEnding');
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onenterdata(token) {
    const node = this.stack[this.stack.length - 1];
    let tail = node.children[node.children.length - 1];
    if (!tail || tail.type !== 'text') {
      // Add a new text node.
      tail = text();
      // @ts-expect-error: we’ll add `end` later.
      tail.position = {
        start: point(token.start)
      };
      // @ts-expect-error: Assume `parent` accepts `text`.
      node.children.push(tail);
    }
    this.stack.push(tail);
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point(token.end);
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitlineending(token) {
    const context = this.stack[this.stack.length - 1];
    // If we’re at a hard break, include the line ending in there.
    if (getData('atHardBreak')) {
      const tail = context.children[context.children.length - 1];
      tail.position.end = point(token.end);
      setData('atHardBreak');
      return
    }
    if (
      !getData('setextHeadingSlurpLineEnding') &&
      config.canContainEols.includes(context.type)
    ) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexithardbreak() {
    setData('atHardBreak', true);
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexithtmlflow() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexithtmltext() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitcodetext() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitlink() {
    const node = this.stack[this.stack.length - 1];
    // Note: there are also `identifier` and `label` fields on this link node!
    // These are used / cleaned here.
    // To do: clean.
    if (getData('inReference')) {
      /** @type {ReferenceType} */
      const referenceType = getData('referenceType') || 'shortcut';
      node.type += 'Reference';
      // @ts-expect-error: mutate.
      node.referenceType = referenceType;
      // @ts-expect-error: mutate.
      delete node.url;
      delete node.title;
    } else {
      // @ts-expect-error: mutate.
      delete node.identifier;
      // @ts-expect-error: mutate.
      delete node.label;
    }
    setData('referenceType');
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitimage() {
    const node = this.stack[this.stack.length - 1];
    // Note: there are also `identifier` and `label` fields on this link node!
    // These are used / cleaned here.
    // To do: clean.
    if (getData('inReference')) {
      /** @type {ReferenceType} */
      const referenceType = getData('referenceType') || 'shortcut';
      node.type += 'Reference';
      // @ts-expect-error: mutate.
      node.referenceType = referenceType;
      // @ts-expect-error: mutate.
      delete node.url;
      delete node.title;
    } else {
      // @ts-expect-error: mutate.
      delete node.identifier;
      // @ts-expect-error: mutate.
      delete node.label;
    }
    setData('referenceType');
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitlabeltext(token) {
    const string = this.sliceSerialize(token);
    const ancestor = this.stack[this.stack.length - 2];
    // @ts-expect-error: stash this on the node, as it might become a reference
    // later.
    ancestor.label = decodeString(string);
    // @ts-expect-error: same as above.
    ancestor.identifier = normalizeIdentifier(string).toLowerCase();
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitlabel() {
    const fragment = this.stack[this.stack.length - 1];
    const value = this.resume();
    const node = this.stack[this.stack.length - 1];
    // Assume a reference.
    setData('inReference', true);
    if (node.type === 'link') {
      /** @type {Array<StaticPhrasingContent>} */
      // @ts-expect-error: Assume static phrasing content.
      const children = fragment.children;
      node.children = children;
    } else {
      node.alt = value;
    }
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitresourcedestinationstring() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.url = data;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitresourcetitlestring() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.title = data;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitresource() {
    setData('inReference');
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onenterreference() {
    setData('referenceType', 'collapsed');
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitreferencestring(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    // @ts-expect-error: stash this on the node, as it might become a reference
    // later.
    node.label = label;
    // @ts-expect-error: same as above.
    node.identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase();
    setData('referenceType', 'full');
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitcharacterreferencemarker(token) {
    setData('characterReferenceType', token.type);
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcharacterreferencevalue(token) {
    const data = this.sliceSerialize(token);
    const type = getData('characterReferenceType');
    /** @type {string} */
    let value;
    if (type) {
      value = decodeNumericCharacterReference(
        data,
        type === 'characterReferenceMarkerNumeric' ? 10 : 16
      );
      setData('characterReferenceType');
    } else {
      const result = decodeNamedCharacterReference(data);
      value = result;
    }
    const tail = this.stack.pop();
    tail.value += value;
    tail.position.end = point(token.end);
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    const node = this.stack[this.stack.length - 1];
    node.url = this.sliceSerialize(token);
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    const node = this.stack[this.stack.length - 1];
    node.url = 'mailto:' + this.sliceSerialize(token);
  }

  //
  // Creaters.
  //

  /** @returns {Blockquote} */
  function blockQuote() {
    return {
      type: 'blockquote',
      children: []
    }
  }

  /** @returns {Code} */
  function codeFlow() {
    return {
      type: 'code',
      lang: null,
      meta: null,
      value: ''
    }
  }

  /** @returns {InlineCode} */
  function codeText() {
    return {
      type: 'inlineCode',
      value: ''
    }
  }

  /** @returns {Definition} */
  function definition() {
    return {
      type: 'definition',
      identifier: '',
      label: null,
      title: null,
      url: ''
    }
  }

  /** @returns {Emphasis} */
  function emphasis() {
    return {
      type: 'emphasis',
      children: []
    }
  }

  /** @returns {Heading} */
  function heading() {
    // @ts-expect-error `depth` will be set later.
    return {
      type: 'heading',
      depth: undefined,
      children: []
    }
  }

  /** @returns {Break} */
  function hardBreak() {
    return {
      type: 'break'
    }
  }

  /** @returns {HTML} */
  function html() {
    return {
      type: 'html',
      value: ''
    }
  }

  /** @returns {Image} */
  function image() {
    return {
      type: 'image',
      title: null,
      url: '',
      alt: null
    }
  }

  /** @returns {Link} */
  function link() {
    return {
      type: 'link',
      title: null,
      url: '',
      children: []
    }
  }

  /**
   * @param {Token} token
   * @returns {List}
   */
  function list(token) {
    return {
      type: 'list',
      ordered: token.type === 'listOrdered',
      start: null,
      spread: token._spread,
      children: []
    }
  }

  /**
   * @param {Token} token
   * @returns {ListItem}
   */
  function listItem(token) {
    return {
      type: 'listItem',
      spread: token._spread,
      checked: null,
      children: []
    }
  }

  /** @returns {Paragraph} */
  function paragraph() {
    return {
      type: 'paragraph',
      children: []
    }
  }

  /** @returns {Strong} */
  function strong() {
    return {
      type: 'strong',
      children: []
    }
  }

  /** @returns {Text} */
  function text() {
    return {
      type: 'text',
      value: ''
    }
  }

  /** @returns {ThematicBreak} */
  function thematicBreak() {
    return {
      type: 'thematicBreak'
    }
  }
}

/**
 * Copy a point-like value.
 *
 * @param {Point} d
 *   Point-like value.
 * @returns {Point}
 *   unist point.
 */
function point(d) {
  return {
    line: d.line,
    column: d.column,
    offset: d.offset
  }
}

/**
 * @param {Config} combined
 * @param {Array<Extension | Array<Extension>>} extensions
 * @returns {void}
 */
function configure(combined, extensions) {
  let index = -1;
  while (++index < extensions.length) {
    const value = extensions[index];
    if (Array.isArray(value)) {
      configure(combined, value);
    } else {
      extension(combined, value);
    }
  }
}

/**
 * @param {Config} combined
 * @param {Extension} extension
 * @returns {void}
 */
function extension(combined, extension) {
  /** @type {keyof Extension} */
  let key;
  for (key in extension) {
    if (own.call(extension, key)) {
      if (key === 'canContainEols') {
        const right = extension[key];
        if (right) {
          combined[key].push(...right);
        }
      } else if (key === 'transforms') {
        const right = extension[key];
        if (right) {
          combined[key].push(...right);
        }
      } else if (key === 'enter' || key === 'exit') {
        const right = extension[key];
        if (right) {
          Object.assign(combined[key], right);
        }
      }
    }
  }
}

/** @type {OnEnterError} */
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      'Cannot close `' +
        left.type +
        '` (' +
        stringifyPosition({
          start: left.start,
          end: left.end
        }) +
        '): a different token (`' +
        right.type +
        '`, ' +
        stringifyPosition({
          start: right.start,
          end: right.end
        }) +
        ') is open'
    )
  } else {
    throw new Error(
      'Cannot close document, a token (`' +
        right.type +
        '`, ' +
        stringifyPosition({
          start: right.start,
          end: right.end
        }) +
        ') is still open'
    )
  }
}

function preprocessMarkdown(markdown) {
  const withoutMultipleNewlines = markdown.replace(/\n{2,}/g, "\n");
  const withoutExtraSpaces = index$1.dedent(withoutMultipleNewlines);
  return withoutExtraSpaces;
}
function markdownToLines(markdown) {
  const preprocessedMarkdown = preprocessMarkdown(markdown);
  const { children } = fromMarkdown(preprocessedMarkdown);
  const lines = [[]];
  let currentLine = 0;
  function processNode(node, parentType = "normal") {
    if (node.type === "text") {
      const textLines = node.value.split("\n");
      textLines.forEach((textLine, index) => {
        if (index !== 0) {
          currentLine++;
          lines.push([]);
        }
        textLine.split(" ").forEach((word) => {
          if (word) {
            lines[currentLine].push({ content: word, type: parentType });
          }
        });
      });
    } else if (node.type === "strong" || node.type === "emphasis") {
      node.children.forEach((contentNode) => {
        processNode(contentNode, node.type);
      });
    }
  }
  children.forEach((treeNode) => {
    if (treeNode.type === "paragraph") {
      treeNode.children.forEach((contentNode) => {
        processNode(contentNode);
      });
    }
  });
  return lines;
}
function markdownToHTML(markdown) {
  const { children } = fromMarkdown(markdown);
  function output(node) {
    if (node.type === "text") {
      return node.value.replace(/\n/g, "<br/>");
    } else if (node.type === "strong") {
      return `<strong>${node.children.map(output).join("")}</strong>`;
    } else if (node.type === "emphasis") {
      return `<em>${node.children.map(output).join("")}</em>`;
    } else if (node.type === "paragraph") {
      return `<p>${node.children.map(output).join("")}</p>`;
    }
    return `Unsupported markdown: ${node.type}`;
  }
  return children.map(output).join("");
}
function splitTextToChars(text) {
  if (Intl.Segmenter) {
    return [...new Intl.Segmenter().segment(text)].map((s) => s.segment);
  }
  return [...text];
}
function splitWordToFitWidth(checkFit, word) {
  const characters = splitTextToChars(word.content);
  return splitWordToFitWidthRecursion(checkFit, [], characters, word.type);
}
function splitWordToFitWidthRecursion(checkFit, usedChars, remainingChars, type) {
  if (remainingChars.length === 0) {
    return [
      { content: usedChars.join(""), type },
      { content: "", type }
    ];
  }
  const [nextChar, ...rest] = remainingChars;
  const newWord = [...usedChars, nextChar];
  if (checkFit([{ content: newWord.join(""), type }])) {
    return splitWordToFitWidthRecursion(checkFit, newWord, rest, type);
  }
  if (usedChars.length === 0 && nextChar) {
    usedChars.push(nextChar);
    remainingChars.shift();
  }
  return [
    { content: usedChars.join(""), type },
    { content: remainingChars.join(""), type }
  ];
}
function splitLineToFitWidth(line, checkFit) {
  if (line.some(({ content }) => content.includes("\n"))) {
    throw new Error("splitLineToFitWidth does not support newlines in the line");
  }
  return splitLineToFitWidthRecursion(line, checkFit);
}
function splitLineToFitWidthRecursion(words, checkFit, lines = [], newLine = []) {
  if (words.length === 0) {
    if (newLine.length > 0) {
      lines.push(newLine);
    }
    return lines.length > 0 ? lines : [];
  }
  let joiner = "";
  if (words[0].content === " ") {
    joiner = " ";
    words.shift();
  }
  const nextWord = words.shift() ?? { content: " ", type: "normal" };
  const lineWithNextWord = [...newLine];
  if (joiner !== "") {
    lineWithNextWord.push({ content: joiner, type: "normal" });
  }
  lineWithNextWord.push(nextWord);
  if (checkFit(lineWithNextWord)) {
    return splitLineToFitWidthRecursion(words, checkFit, lines, lineWithNextWord);
  }
  if (newLine.length > 0) {
    lines.push(newLine);
    words.unshift(nextWord);
  } else if (nextWord.content) {
    const [line, rest] = splitWordToFitWidth(checkFit, nextWord);
    lines.push([line]);
    if (rest.content) {
      words.unshift(rest);
    }
  }
  return splitLineToFitWidthRecursion(words, checkFit, lines);
}
function applyStyle(dom, styleFn) {
  if (styleFn) {
    dom.attr("style", styleFn);
  }
}
function addHtmlSpan(element, node, width, classes, addBackground = false) {
  const fo = element.append("foreignObject");
  const div = fo.append("xhtml:div");
  const label = node.label;
  const labelClass = node.isNode ? "nodeLabel" : "edgeLabel";
  div.html(
    `
    <span class="${labelClass} ${classes}" ` + (node.labelStyle ? 'style="' + node.labelStyle + '"' : "") + ">" + label + "</span>"
  );
  applyStyle(div, node.labelStyle);
  div.style("display", "table-cell");
  div.style("white-space", "nowrap");
  div.style("max-width", width + "px");
  div.attr("xmlns", "http://www.w3.org/1999/xhtml");
  if (addBackground) {
    div.attr("class", "labelBkg");
  }
  let bbox = div.node().getBoundingClientRect();
  if (bbox.width === width) {
    div.style("display", "table");
    div.style("white-space", "break-spaces");
    div.style("width", width + "px");
    bbox = div.node().getBoundingClientRect();
  }
  fo.style("width", bbox.width);
  fo.style("height", bbox.height);
  return fo.node();
}
function createTspan(textElement, lineIndex, lineHeight) {
  return textElement.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", lineIndex * lineHeight - 0.1 + "em").attr("dy", lineHeight + "em");
}
function computeWidthOfText(parentNode, lineHeight, line) {
  const testElement = parentNode.append("text");
  const testSpan = createTspan(testElement, 1, lineHeight);
  updateTextContentAndStyles(testSpan, line);
  const textLength = testSpan.node().getComputedTextLength();
  testElement.remove();
  return textLength;
}
function computeDimensionOfText(parentNode, lineHeight, text) {
  var _a;
  const testElement = parentNode.append("text");
  const testSpan = createTspan(testElement, 1, lineHeight);
  updateTextContentAndStyles(testSpan, [{ content: text, type: "normal" }]);
  const textDimension = (_a = testSpan.node()) == null ? void 0 : _a.getBoundingClientRect();
  if (textDimension) {
    testElement.remove();
  }
  return textDimension;
}
function createFormattedText(width, g, structuredText, addBackground = false) {
  const lineHeight = 1.1;
  const labelGroup = g.append("g");
  const bkg = labelGroup.insert("rect").attr("class", "background");
  const textElement = labelGroup.append("text").attr("y", "-10.1");
  let lineIndex = 0;
  for (const line of structuredText) {
    const checkWidth = (line2) => computeWidthOfText(labelGroup, lineHeight, line2) <= width;
    const linesUnderWidth = checkWidth(line) ? [line] : splitLineToFitWidth(line, checkWidth);
    for (const preparedLine of linesUnderWidth) {
      const tspan = createTspan(textElement, lineIndex, lineHeight);
      updateTextContentAndStyles(tspan, preparedLine);
      lineIndex++;
    }
  }
  if (addBackground) {
    const bbox = textElement.node().getBBox();
    const padding = 2;
    bkg.attr("x", -padding).attr("y", -padding).attr("width", bbox.width + 2 * padding).attr("height", bbox.height + 2 * padding);
    return labelGroup.node();
  } else {
    return textElement.node();
  }
}
function updateTextContentAndStyles(tspan, wrappedLine) {
  tspan.text("");
  wrappedLine.forEach((word, index) => {
    const innerTspan = tspan.append("tspan").attr("font-style", word.type === "emphasis" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", word.type === "strong" ? "bold" : "normal");
    if (index === 0) {
      innerTspan.text(word.content);
    } else {
      innerTspan.text(" " + word.content);
    }
  });
}
const createText = (el, text = "", {
  style = "",
  isTitle = false,
  classes = "",
  useHtmlLabels = true,
  isNode = true,
  width = 200,
  addSvgBackground = false
} = {}) => {
  index$1.log$1.info("createText", text, style, isTitle, classes, useHtmlLabels, isNode, addSvgBackground);
  if (useHtmlLabels) {
    const htmlText = markdownToHTML(text);
    const node = {
      isNode,
      label: index$1.decodeEntities(htmlText).replace(
        /fa[blrs]?:fa-[\w-]+/g,
        // cspell: disable-line
        (s) => `<i class='${s.replace(":", " ")}'></i>`
      ),
      labelStyle: style.replace("fill:", "color:")
    };
    const vertexNode = addHtmlSpan(el, node, width, classes, addSvgBackground);
    return vertexNode;
  } else {
    const structuredText = markdownToLines(text);
    const svgLabel = createFormattedText(width, el, structuredText, addSvgBackground);
    return svgLabel;
  }
};

exports.computeDimensionOfText = computeDimensionOfText;
exports.createText = createText;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVGV4dC0yZTVlN2RkMy03ODFhMjJhNC5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tc3RyaW5nL2xpYi9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1jaHVua2VkL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLWNvbWJpbmUtZXh0ZW5zaW9ucy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1jaGFyYWN0ZXIvbGliL3VuaWNvZGUtcHVuY3R1YXRpb24tcmVnZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LXNwYWNlL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9saWIvaW5pdGlhbGl6ZS9jb250ZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9saWIvaW5pdGlhbGl6ZS9kb2N1bWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1jbGFzc2lmeS1jaGFyYWN0ZXIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtcmVzb2x2ZS1hbGwvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWNvcmUtY29tbW9ubWFyay9saWIvYXR0ZW50aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1jb3JlLWNvbW1vbm1hcmsvbGliL2F1dG9saW5rLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1jb3JlLWNvbW1vbm1hcmsvbGliL2JsYW5rLWxpbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWNvcmUtY29tbW9ubWFyay9saWIvYmxvY2stcXVvdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWNvcmUtY29tbW9ubWFyay9saWIvY2hhcmFjdGVyLWVzY2FwZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZWNvZGUtbmFtZWQtY2hhcmFjdGVyLXJlZmVyZW5jZS9pbmRleC5kb20uanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWNvcmUtY29tbW9ubWFyay9saWIvY2hhcmFjdGVyLXJlZmVyZW5jZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstY29yZS1jb21tb25tYXJrL2xpYi9jb2RlLWZlbmNlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstY29yZS1jb21tb25tYXJrL2xpYi9jb2RlLWluZGVudGVkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1jb3JlLWNvbW1vbm1hcmsvbGliL2NvZGUtdGV4dC5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1zdWJ0b2tlbml6ZS9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstY29yZS1jb21tb25tYXJrL2xpYi9jb250ZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LWRlc3RpbmF0aW9uL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LWxhYmVsL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LXRpdGxlL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LXdoaXRlc3BhY2UvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtbm9ybWFsaXplLWlkZW50aWZpZXIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWNvcmUtY29tbW9ubWFyay9saWIvZGVmaW5pdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstY29yZS1jb21tb25tYXJrL2xpYi9oYXJkLWJyZWFrLWVzY2FwZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstY29yZS1jb21tb25tYXJrL2xpYi9oZWFkaW5nLWF0eC5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1odG1sLXRhZy1uYW1lL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1jb3JlLWNvbW1vbm1hcmsvbGliL2h0bWwtZmxvdy5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstY29yZS1jb21tb25tYXJrL2xpYi9odG1sLXRleHQuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWNvcmUtY29tbW9ubWFyay9saWIvbGFiZWwtZW5kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1jb3JlLWNvbW1vbm1hcmsvbGliL2xhYmVsLXN0YXJ0LWltYWdlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1jb3JlLWNvbW1vbm1hcmsvbGliL2xhYmVsLXN0YXJ0LWxpbmsuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWNvcmUtY29tbW9ubWFyay9saWIvbGluZS1lbmRpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWNvcmUtY29tbW9ubWFyay9saWIvdGhlbWF0aWMtYnJlYWsuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWNvcmUtY29tbW9ubWFyay9saWIvbGlzdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstY29yZS1jb21tb25tYXJrL2xpYi9zZXRleHQtdW5kZXJsaW5lLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9saWIvaW5pdGlhbGl6ZS9mbG93LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9saWIvaW5pdGlhbGl6ZS90ZXh0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9saWIvY3JlYXRlLXRva2VuaXplci5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvbGliL2NvbnN0cnVjdHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2xpYi9wYXJzZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvbGliL3ByZXByb2Nlc3MuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2xpYi9wb3N0cHJvY2Vzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1kZWNvZGUtbnVtZXJpYy1jaGFyYWN0ZXItcmVmZXJlbmNlL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLWRlY29kZS1zdHJpbmcvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1zdHJpbmdpZnktcG9zaXRpb24vbGliL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bi9saWIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbWVybWFpZC9kaXN0L2NyZWF0ZVRleHQtMmU1ZTdkZDMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlJvb3R8aW1wb3J0KCdtZGFzdCcpLkNvbnRlbnR9IE5vZGVcbiAqXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtpbmNsdWRlSW1hZ2VBbHQ9dHJ1ZV1cbiAqICAgV2hldGhlciB0byB1c2UgYGFsdGAgZm9yIGBpbWFnZWBzLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2luY2x1ZGVIdG1sPXRydWVdXG4gKiAgIFdoZXRoZXIgdG8gdXNlIGB2YWx1ZWAgb2YgSFRNTC5cbiAqL1xuXG4vKiogQHR5cGUge09wdGlvbnN9ICovXG5jb25zdCBlbXB0eU9wdGlvbnMgPSB7fVxuXG4vKipcbiAqIEdldCB0aGUgdGV4dCBjb250ZW50IG9mIGEgbm9kZSBvciBsaXN0IG9mIG5vZGVzLlxuICpcbiAqIFByZWZlcnMgdGhlIG5vZGXigJlzIHBsYWluLXRleHQgZmllbGRzLCBvdGhlcndpc2Ugc2VyaWFsaXplcyBpdHMgY2hpbGRyZW4sXG4gKiBhbmQgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGFycmF5LCBzZXJpYWxpemUgdGhlIG5vZGVzIGluIGl0LlxuICpcbiAqIEBwYXJhbSB7dW5rbm93bn0gdmFsdWVcbiAqICAgVGhpbmcgdG8gc2VyaWFsaXplLCB0eXBpY2FsbHkgYE5vZGVgLlxuICogQHBhcmFtIHtPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIFNlcmlhbGl6ZWQgYHZhbHVlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHNldHRpbmdzID0gb3B0aW9ucyB8fCBlbXB0eU9wdGlvbnNcbiAgY29uc3QgaW5jbHVkZUltYWdlQWx0ID1cbiAgICB0eXBlb2Ygc2V0dGluZ3MuaW5jbHVkZUltYWdlQWx0ID09PSAnYm9vbGVhbidcbiAgICAgID8gc2V0dGluZ3MuaW5jbHVkZUltYWdlQWx0XG4gICAgICA6IHRydWVcbiAgY29uc3QgaW5jbHVkZUh0bWwgPVxuICAgIHR5cGVvZiBzZXR0aW5ncy5pbmNsdWRlSHRtbCA9PT0gJ2Jvb2xlYW4nID8gc2V0dGluZ3MuaW5jbHVkZUh0bWwgOiB0cnVlXG5cbiAgcmV0dXJuIG9uZSh2YWx1ZSwgaW5jbHVkZUltYWdlQWx0LCBpbmNsdWRlSHRtbClcbn1cblxuLyoqXG4gKiBPbmUgbm9kZSBvciBzZXZlcmFsIG5vZGVzLlxuICpcbiAqIEBwYXJhbSB7dW5rbm93bn0gdmFsdWVcbiAqICAgVGhpbmcgdG8gc2VyaWFsaXplLlxuICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlSW1hZ2VBbHRcbiAqICAgSW5jbHVkZSBpbWFnZSBgYWx0YHMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVIdG1sXG4gKiAgIEluY2x1ZGUgSFRNTC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIFNlcmlhbGl6ZWQgbm9kZS5cbiAqL1xuZnVuY3Rpb24gb25lKHZhbHVlLCBpbmNsdWRlSW1hZ2VBbHQsIGluY2x1ZGVIdG1sKSB7XG4gIGlmIChub2RlKHZhbHVlKSkge1xuICAgIGlmICgndmFsdWUnIGluIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUudHlwZSA9PT0gJ2h0bWwnICYmICFpbmNsdWRlSHRtbCA/ICcnIDogdmFsdWUudmFsdWVcbiAgICB9XG5cbiAgICBpZiAoaW5jbHVkZUltYWdlQWx0ICYmICdhbHQnIGluIHZhbHVlICYmIHZhbHVlLmFsdCkge1xuICAgICAgcmV0dXJuIHZhbHVlLmFsdFxuICAgIH1cblxuICAgIGlmICgnY2hpbGRyZW4nIGluIHZhbHVlKSB7XG4gICAgICByZXR1cm4gYWxsKHZhbHVlLmNoaWxkcmVuLCBpbmNsdWRlSW1hZ2VBbHQsIGluY2x1ZGVIdG1sKVxuICAgIH1cbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBhbGwodmFsdWUsIGluY2x1ZGVJbWFnZUFsdCwgaW5jbHVkZUh0bWwpXG4gIH1cblxuICByZXR1cm4gJydcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgYSBsaXN0IG9mIG5vZGVzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8dW5rbm93bj59IHZhbHVlc1xuICogICBUaGluZyB0byBzZXJpYWxpemUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVJbWFnZUFsdFxuICogICBJbmNsdWRlIGltYWdlIGBhbHRgcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZUh0bWxcbiAqICAgSW5jbHVkZSBIVE1MLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgU2VyaWFsaXplZCBub2Rlcy5cbiAqL1xuZnVuY3Rpb24gYWxsKHZhbHVlcywgaW5jbHVkZUltYWdlQWx0LCBpbmNsdWRlSHRtbCkge1xuICAvKiogQHR5cGUge0FycmF5PHN0cmluZz59ICovXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IG9uZSh2YWx1ZXNbaW5kZXhdLCBpbmNsdWRlSW1hZ2VBbHQsIGluY2x1ZGVIdG1sKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGB2YWx1ZWAgbG9va3MgbGlrZSBhIG5vZGUuXG4gKlxuICogQHBhcmFtIHt1bmtub3dufSB2YWx1ZVxuICogICBUaGluZy5cbiAqIEByZXR1cm5zIHt2YWx1ZSBpcyBOb2RlfVxuICogICBXaGV0aGVyIGB2YWx1ZWAgaXMgYSBub2RlLlxuICovXG5mdW5jdGlvbiBub2RlKHZhbHVlKSB7XG4gIHJldHVybiBCb29sZWFuKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG59XG4iLCIvKipcbiAqIExpa2UgYEFycmF5I3NwbGljZWAsIGJ1dCBzbWFydGVyIGZvciBnaWFudCBhcnJheXMuXG4gKlxuICogYEFycmF5I3NwbGljZWAgdGFrZXMgYWxsIGl0ZW1zIHRvIGJlIGluc2VydGVkIGFzIGluZGl2aWR1YWwgYXJndW1lbnQgd2hpY2hcbiAqIGNhdXNlcyBhIHN0YWNrIG92ZXJmbG93IGluIFY4IHdoZW4gdHJ5aW5nIHRvIGluc2VydCAxMDBrIGl0ZW1zIGZvciBpbnN0YW5jZS5cbiAqXG4gKiBPdGhlcndpc2UsIHRoaXMgZG9lcyBub3QgcmV0dXJuIHRoZSByZW1vdmVkIGl0ZW1zLCBhbmQgdGFrZXMgYGl0ZW1zYCBhcyBhblxuICogYXJyYXkgaW5zdGVhZCBvZiByZXN0IHBhcmFtZXRlcnMuXG4gKlxuICogQHRlbXBsYXRlIHt1bmtub3dufSBUXG4gKiAgIEl0ZW0gdHlwZS5cbiAqIEBwYXJhbSB7QXJyYXk8VD59IGxpc3RcbiAqICAgTGlzdCB0byBvcGVyYXRlIG9uLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0XG4gKiAgIEluZGV4IHRvIHJlbW92ZS9pbnNlcnQgYXQgKGNhbiBiZSBuZWdhdGl2ZSkuXG4gKiBAcGFyYW0ge251bWJlcn0gcmVtb3ZlXG4gKiAgIE51bWJlciBvZiBpdGVtcyB0byByZW1vdmUuXG4gKiBAcGFyYW0ge0FycmF5PFQ+fSBpdGVtc1xuICogICBJdGVtcyB0byBpbmplY3QgaW50byBgbGlzdGAuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqICAgTm90aGluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShsaXN0LCBzdGFydCwgcmVtb3ZlLCBpdGVtcykge1xuICBjb25zdCBlbmQgPSBsaXN0Lmxlbmd0aFxuICBsZXQgY2h1bmtTdGFydCA9IDBcbiAgLyoqIEB0eXBlIHtBcnJheTx1bmtub3duPn0gKi9cbiAgbGV0IHBhcmFtZXRlcnNcblxuICAvLyBNYWtlIHN0YXJ0IGJldHdlZW4gemVybyBhbmQgYGVuZGAgKGluY2x1ZGVkKS5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gZW5kID8gMCA6IGVuZCArIHN0YXJ0XG4gIH0gZWxzZSB7XG4gICAgc3RhcnQgPSBzdGFydCA+IGVuZCA/IGVuZCA6IHN0YXJ0XG4gIH1cbiAgcmVtb3ZlID0gcmVtb3ZlID4gMCA/IHJlbW92ZSA6IDBcblxuICAvLyBObyBuZWVkIHRvIGNodW5rIHRoZSBpdGVtcyBpZiB0aGVyZeKAmXMgb25seSBhIGNvdXBsZSAoMTBrKSBpdGVtcy5cbiAgaWYgKGl0ZW1zLmxlbmd0aCA8IDEwMDAwKSB7XG4gICAgcGFyYW1ldGVycyA9IEFycmF5LmZyb20oaXRlbXMpXG4gICAgcGFyYW1ldGVycy51bnNoaWZ0KHN0YXJ0LCByZW1vdmUpXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBIdXNoLCBpdOKAmXMgZmluZS5cbiAgICBsaXN0LnNwbGljZSguLi5wYXJhbWV0ZXJzKVxuICB9IGVsc2Uge1xuICAgIC8vIERlbGV0ZSBgcmVtb3ZlYCBpdGVtcyBzdGFydGluZyBmcm9tIGBzdGFydGBcbiAgICBpZiAocmVtb3ZlKSBsaXN0LnNwbGljZShzdGFydCwgcmVtb3ZlKVxuXG4gICAgLy8gSW5zZXJ0IHRoZSBpdGVtcyBpbiBjaHVua3MgdG8gbm90IGNhdXNlIHN0YWNrIG92ZXJmbG93cy5cbiAgICB3aGlsZSAoY2h1bmtTdGFydCA8IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgcGFyYW1ldGVycyA9IGl0ZW1zLnNsaWNlKGNodW5rU3RhcnQsIGNodW5rU3RhcnQgKyAxMDAwMClcbiAgICAgIHBhcmFtZXRlcnMudW5zaGlmdChzdGFydCwgMClcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgSHVzaCwgaXTigJlzIGZpbmUuXG4gICAgICBsaXN0LnNwbGljZSguLi5wYXJhbWV0ZXJzKVxuICAgICAgY2h1bmtTdGFydCArPSAxMDAwMFxuICAgICAgc3RhcnQgKz0gMTAwMDBcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBcHBlbmQgYGl0ZW1zYCAoYW4gYXJyYXkpIGF0IHRoZSBlbmQgb2YgYGxpc3RgIChhbm90aGVyIGFycmF5KS5cbiAqIFdoZW4gYGxpc3RgIHdhcyBlbXB0eSwgcmV0dXJucyBgaXRlbXNgIGluc3RlYWQuXG4gKlxuICogVGhpcyBwcmV2ZW50cyBhIHBvdGVudGlhbGx5IGV4cGVuc2l2ZSBvcGVyYXRpb24gd2hlbiBgbGlzdGAgaXMgZW1wdHksXG4gKiBhbmQgYWRkcyBpdGVtcyBpbiBiYXRjaGVzIHRvIHByZXZlbnQgVjggZnJvbSBoYW5naW5nLlxuICpcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gVFxuICogICBJdGVtIHR5cGUuXG4gKiBAcGFyYW0ge0FycmF5PFQ+fSBsaXN0XG4gKiAgIExpc3QgdG8gb3BlcmF0ZSBvbi5cbiAqIEBwYXJhbSB7QXJyYXk8VD59IGl0ZW1zXG4gKiAgIEl0ZW1zIHRvIGFkZCB0byBgbGlzdGAuXG4gKiBAcmV0dXJucyB7QXJyYXk8VD59XG4gKiAgIEVpdGhlciBgbGlzdGAgb3IgYGl0ZW1zYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1c2gobGlzdCwgaXRlbXMpIHtcbiAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xuICAgIHNwbGljZShsaXN0LCBsaXN0Lmxlbmd0aCwgMCwgaXRlbXMpXG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuICByZXR1cm4gaXRlbXNcbn1cbiIsIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5FeHRlbnNpb259IEV4dGVuc2lvblxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5IYW5kbGVzfSBIYW5kbGVzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkh0bWxFeHRlbnNpb259IEh0bWxFeHRlbnNpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuTm9ybWFsaXplZEV4dGVuc2lvbn0gTm9ybWFsaXplZEV4dGVuc2lvblxuICovXG5cbmltcG9ydCB7c3BsaWNlfSBmcm9tICdtaWNyb21hcmstdXRpbC1jaHVua2VkJ1xuXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8qKlxuICogQ29tYmluZSBtdWx0aXBsZSBzeW50YXggZXh0ZW5zaW9ucyBpbnRvIG9uZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PEV4dGVuc2lvbj59IGV4dGVuc2lvbnNcbiAqICAgTGlzdCBvZiBzeW50YXggZXh0ZW5zaW9ucy5cbiAqIEByZXR1cm5zIHtOb3JtYWxpemVkRXh0ZW5zaW9ufVxuICogICBBIHNpbmdsZSBjb21iaW5lZCBleHRlbnNpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lRXh0ZW5zaW9ucyhleHRlbnNpb25zKSB7XG4gIC8qKiBAdHlwZSB7Tm9ybWFsaXplZEV4dGVuc2lvbn0gKi9cbiAgY29uc3QgYWxsID0ge31cbiAgbGV0IGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGV4dGVuc2lvbnMubGVuZ3RoKSB7XG4gICAgc3ludGF4RXh0ZW5zaW9uKGFsbCwgZXh0ZW5zaW9uc1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gYWxsXG59XG5cbi8qKlxuICogTWVyZ2UgYGV4dGVuc2lvbmAgaW50byBgYWxsYC5cbiAqXG4gKiBAcGFyYW0ge05vcm1hbGl6ZWRFeHRlbnNpb259IGFsbFxuICogICBFeHRlbnNpb24gdG8gbWVyZ2UgaW50by5cbiAqIEBwYXJhbSB7RXh0ZW5zaW9ufSBleHRlbnNpb25cbiAqICAgRXh0ZW5zaW9uIHRvIG1lcmdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHN5bnRheEV4dGVuc2lvbihhbGwsIGV4dGVuc2lvbikge1xuICAvKiogQHR5cGUge2tleW9mIEV4dGVuc2lvbn0gKi9cbiAgbGV0IGhvb2tcblxuICBmb3IgKGhvb2sgaW4gZXh0ZW5zaW9uKSB7XG4gICAgY29uc3QgbWF5YmUgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFsbCwgaG9vaykgPyBhbGxbaG9va10gOiB1bmRlZmluZWRcbiAgICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSAqL1xuICAgIGNvbnN0IGxlZnQgPSBtYXliZSB8fCAoYWxsW2hvb2tdID0ge30pXG4gICAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZH0gKi9cbiAgICBjb25zdCByaWdodCA9IGV4dGVuc2lvbltob29rXVxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIGxldCBjb2RlXG5cbiAgICBpZiAocmlnaHQpIHtcbiAgICAgIGZvciAoY29kZSBpbiByaWdodCkge1xuICAgICAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwobGVmdCwgY29kZSkpIGxlZnRbY29kZV0gPSBbXVxuICAgICAgICBjb25zdCB2YWx1ZSA9IHJpZ2h0W2NvZGVdXG4gICAgICAgIGNvbnN0cnVjdHMoXG4gICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBMb29rcyBsaWtlIGEgbGlzdC5cbiAgICAgICAgICBsZWZ0W2NvZGVdLFxuICAgICAgICAgIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiB2YWx1ZSA/IFt2YWx1ZV0gOiBbXVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTWVyZ2UgYGxpc3RgIGludG8gYGV4aXN0aW5nYCAoYm90aCBsaXN0cyBvZiBjb25zdHJ1Y3RzKS5cbiAqIE11dGF0ZXMgYGV4aXN0aW5nYC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PHVua25vd24+fSBleGlzdGluZ1xuICogQHBhcmFtIHtBcnJheTx1bmtub3duPn0gbGlzdFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGNvbnN0cnVjdHMoZXhpc3RpbmcsIGxpc3QpIHtcbiAgbGV0IGluZGV4ID0gLTFcbiAgLyoqIEB0eXBlIHtBcnJheTx1bmtub3duPn0gKi9cbiAgY29uc3QgYmVmb3JlID0gW11cblxuICB3aGlsZSAoKytpbmRleCA8IGxpc3QubGVuZ3RoKSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBMb29rcyBsaWtlIGFuIG9iamVjdC5cbiAgICA7KGxpc3RbaW5kZXhdLmFkZCA9PT0gJ2FmdGVyJyA/IGV4aXN0aW5nIDogYmVmb3JlKS5wdXNoKGxpc3RbaW5kZXhdKVxuICB9XG5cbiAgc3BsaWNlKGV4aXN0aW5nLCAwLCAwLCBiZWZvcmUpXG59XG5cbi8qKlxuICogQ29tYmluZSBtdWx0aXBsZSBIVE1MIGV4dGVuc2lvbnMgaW50byBvbmUuXG4gKlxuICogQHBhcmFtIHtBcnJheTxIdG1sRXh0ZW5zaW9uPn0gaHRtbEV4dGVuc2lvbnNcbiAqICAgTGlzdCBvZiBIVE1MIGV4dGVuc2lvbnMuXG4gKiBAcmV0dXJucyB7SHRtbEV4dGVuc2lvbn1cbiAqICAgQSBzaW5nbGUgY29tYmluZWQgSFRNTCBleHRlbnNpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lSHRtbEV4dGVuc2lvbnMoaHRtbEV4dGVuc2lvbnMpIHtcbiAgLyoqIEB0eXBlIHtIdG1sRXh0ZW5zaW9ufSAqL1xuICBjb25zdCBoYW5kbGVycyA9IHt9XG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBodG1sRXh0ZW5zaW9ucy5sZW5ndGgpIHtcbiAgICBodG1sRXh0ZW5zaW9uKGhhbmRsZXJzLCBodG1sRXh0ZW5zaW9uc1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gaGFuZGxlcnNcbn1cblxuLyoqXG4gKiBNZXJnZSBgZXh0ZW5zaW9uYCBpbnRvIGBhbGxgLlxuICpcbiAqIEBwYXJhbSB7SHRtbEV4dGVuc2lvbn0gYWxsXG4gKiAgIEV4dGVuc2lvbiB0byBtZXJnZSBpbnRvLlxuICogQHBhcmFtIHtIdG1sRXh0ZW5zaW9ufSBleHRlbnNpb25cbiAqICAgRXh0ZW5zaW9uIHRvIG1lcmdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGh0bWxFeHRlbnNpb24oYWxsLCBleHRlbnNpb24pIHtcbiAgLyoqIEB0eXBlIHtrZXlvZiBIdG1sRXh0ZW5zaW9ufSAqL1xuICBsZXQgaG9va1xuXG4gIGZvciAoaG9vayBpbiBleHRlbnNpb24pIHtcbiAgICBjb25zdCBtYXliZSA9IGhhc093blByb3BlcnR5LmNhbGwoYWxsLCBob29rKSA/IGFsbFtob29rXSA6IHVuZGVmaW5lZFxuICAgIGNvbnN0IGxlZnQgPSBtYXliZSB8fCAoYWxsW2hvb2tdID0ge30pXG4gICAgY29uc3QgcmlnaHQgPSBleHRlbnNpb25baG9va11cbiAgICAvKiogQHR5cGUge2tleW9mIEhhbmRsZXN9ICovXG4gICAgbGV0IHR5cGVcblxuICAgIGlmIChyaWdodCkge1xuICAgICAgZm9yICh0eXBlIGluIHJpZ2h0KSB7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgYXNzdW1lIGRvY3VtZW50IHZzIHJlZ3VsYXIgaGFuZGxlciBhcmUgbWFuYWdlZCBjb3JyZWN0bHkuXG4gICAgICAgIGxlZnRbdHlwZV0gPSByaWdodFt0eXBlXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gVGhpcyBtb2R1bGUgaXMgZ2VuZXJhdGVkIGJ5IGBzY3JpcHQvYC5cbi8vXG4vLyBDb21tb25NYXJrIGhhbmRsZXMgYXR0ZW50aW9uIChlbXBoYXNpcywgc3Ryb25nKSBtYXJrZXJzIGJhc2VkIG9uIHdoYXQgY29tZXNcbi8vIGJlZm9yZSBvciBhZnRlciB0aGVtLlxuLy8gT25lIHN1Y2ggZGlmZmVyZW5jZSBpcyBpZiB0aG9zZSBjaGFyYWN0ZXJzIGFyZSBVbmljb2RlIHB1bmN0dWF0aW9uLlxuLy8gVGhpcyBzY3JpcHQgaXMgZ2VuZXJhdGVkIGZyb20gdGhlIFVuaWNvZGUgZGF0YS5cblxuLyoqXG4gKiBSZWd1bGFyIGV4cHJlc3Npb24gdGhhdCBtYXRjaGVzIGEgdW5pY29kZSBwdW5jdHVhdGlvbiBjaGFyYWN0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCB1bmljb2RlUHVuY3R1YXRpb25SZWdleCA9XG4gIC9bIS1cXC86LUBcXFstYFxcey1+XFx4QTFcXHhBN1xceEFCXFx4QjZcXHhCN1xceEJCXFx4QkZcXHUwMzdFXFx1MDM4N1xcdTA1NUEtXFx1MDU1RlxcdTA1ODlcXHUwNThBXFx1MDVCRVxcdTA1QzBcXHUwNUMzXFx1MDVDNlxcdTA1RjNcXHUwNUY0XFx1MDYwOVxcdTA2MEFcXHUwNjBDXFx1MDYwRFxcdTA2MUJcXHUwNjFELVxcdTA2MUZcXHUwNjZBLVxcdTA2NkRcXHUwNkQ0XFx1MDcwMC1cXHUwNzBEXFx1MDdGNy1cXHUwN0Y5XFx1MDgzMC1cXHUwODNFXFx1MDg1RVxcdTA5NjRcXHUwOTY1XFx1MDk3MFxcdTA5RkRcXHUwQTc2XFx1MEFGMFxcdTBDNzdcXHUwQzg0XFx1MERGNFxcdTBFNEZcXHUwRTVBXFx1MEU1QlxcdTBGMDQtXFx1MEYxMlxcdTBGMTRcXHUwRjNBLVxcdTBGM0RcXHUwRjg1XFx1MEZEMC1cXHUwRkQ0XFx1MEZEOVxcdTBGREFcXHUxMDRBLVxcdTEwNEZcXHUxMEZCXFx1MTM2MC1cXHUxMzY4XFx1MTQwMFxcdTE2NkVcXHUxNjlCXFx1MTY5Q1xcdTE2RUItXFx1MTZFRFxcdTE3MzVcXHUxNzM2XFx1MTdENC1cXHUxN0Q2XFx1MTdEOC1cXHUxN0RBXFx1MTgwMC1cXHUxODBBXFx1MTk0NFxcdTE5NDVcXHUxQTFFXFx1MUExRlxcdTFBQTAtXFx1MUFBNlxcdTFBQTgtXFx1MUFBRFxcdTFCNUEtXFx1MUI2MFxcdTFCN0RcXHUxQjdFXFx1MUJGQy1cXHUxQkZGXFx1MUMzQi1cXHUxQzNGXFx1MUM3RVxcdTFDN0ZcXHUxQ0MwLVxcdTFDQzdcXHUxQ0QzXFx1MjAxMC1cXHUyMDI3XFx1MjAzMC1cXHUyMDQzXFx1MjA0NS1cXHUyMDUxXFx1MjA1My1cXHUyMDVFXFx1MjA3RFxcdTIwN0VcXHUyMDhEXFx1MjA4RVxcdTIzMDgtXFx1MjMwQlxcdTIzMjlcXHUyMzJBXFx1Mjc2OC1cXHUyNzc1XFx1MjdDNVxcdTI3QzZcXHUyN0U2LVxcdTI3RUZcXHUyOTgzLVxcdTI5OThcXHUyOUQ4LVxcdTI5REJcXHUyOUZDXFx1MjlGRFxcdTJDRjktXFx1MkNGQ1xcdTJDRkVcXHUyQ0ZGXFx1MkQ3MFxcdTJFMDAtXFx1MkUyRVxcdTJFMzAtXFx1MkU0RlxcdTJFNTItXFx1MkU1RFxcdTMwMDEtXFx1MzAwM1xcdTMwMDgtXFx1MzAxMVxcdTMwMTQtXFx1MzAxRlxcdTMwMzBcXHUzMDNEXFx1MzBBMFxcdTMwRkJcXHVBNEZFXFx1QTRGRlxcdUE2MEQtXFx1QTYwRlxcdUE2NzNcXHVBNjdFXFx1QTZGMi1cXHVBNkY3XFx1QTg3NC1cXHVBODc3XFx1QThDRVxcdUE4Q0ZcXHVBOEY4LVxcdUE4RkFcXHVBOEZDXFx1QTkyRVxcdUE5MkZcXHVBOTVGXFx1QTlDMS1cXHVBOUNEXFx1QTlERVxcdUE5REZcXHVBQTVDLVxcdUFBNUZcXHVBQURFXFx1QUFERlxcdUFBRjBcXHVBQUYxXFx1QUJFQlxcdUZEM0VcXHVGRDNGXFx1RkUxMC1cXHVGRTE5XFx1RkUzMC1cXHVGRTUyXFx1RkU1NC1cXHVGRTYxXFx1RkU2M1xcdUZFNjhcXHVGRTZBXFx1RkU2QlxcdUZGMDEtXFx1RkYwM1xcdUZGMDUtXFx1RkYwQVxcdUZGMEMtXFx1RkYwRlxcdUZGMUFcXHVGRjFCXFx1RkYxRlxcdUZGMjBcXHVGRjNCLVxcdUZGM0RcXHVGRjNGXFx1RkY1QlxcdUZGNURcXHVGRjVGLVxcdUZGNjVdL1xuIiwiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvZGV9IENvZGVcbiAqL1xuXG5pbXBvcnQge3VuaWNvZGVQdW5jdHVhdGlvblJlZ2V4fSBmcm9tICcuL2xpYi91bmljb2RlLXB1bmN0dWF0aW9uLXJlZ2V4LmpzJ1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBjb2RlIHJlcHJlc2VudHMgYW4gQVNDSUkgYWxwaGEgKGBhYCB0aHJvdWdoIGB6YCxcbiAqIGNhc2UgaW5zZW5zaXRpdmUpLlxuICpcbiAqIEFuICoqQVNDSUkgYWxwaGEqKiBpcyBhbiBBU0NJSSB1cHBlciBhbHBoYSBvciBBU0NJSSBsb3dlciBhbHBoYS5cbiAqXG4gKiBBbiAqKkFTQ0lJIHVwcGVyIGFscGhhKiogaXMgYSBjaGFyYWN0ZXIgaW4gdGhlIGluY2x1c2l2ZSByYW5nZSBVKzAwNDEgKGBBYClcbiAqIHRvIFUrMDA1QSAoYFpgKS5cbiAqXG4gKiBBbiAqKkFTQ0lJIGxvd2VyIGFscGhhKiogaXMgYSBjaGFyYWN0ZXIgaW4gdGhlIGluY2x1c2l2ZSByYW5nZSBVKzAwNjEgKGBhYClcbiAqIHRvIFUrMDA3QSAoYHpgKS5cbiAqXG4gKiBAcGFyYW0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnNcbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgY29uc3QgYXNjaWlBbHBoYSA9IHJlZ2V4Q2hlY2soL1tBLVphLXpdLylcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgY29kZSByZXByZXNlbnRzIGFuIEFTQ0lJIGFscGhhbnVtZXJpYyAoYGFgXG4gKiB0aHJvdWdoIGB6YCwgY2FzZSBpbnNlbnNpdGl2ZSwgb3IgYDBgIHRocm91Z2ggYDlgKS5cbiAqXG4gKiBBbiAqKkFTQ0lJIGFscGhhbnVtZXJpYyoqIGlzIGFuIEFTQ0lJIGRpZ2l0IChzZWUgYGFzY2lpRGlnaXRgKSBvciBBU0NJSSBhbHBoYVxuICogKHNlZSBgYXNjaWlBbHBoYWApLlxuICpcbiAqIEBwYXJhbSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJuc1xuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBhc2NpaUFscGhhbnVtZXJpYyA9IHJlZ2V4Q2hlY2soL1tcXGRBLVphLXpdLylcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgY29kZSByZXByZXNlbnRzIGFuIEFTQ0lJIGF0ZXh0LlxuICpcbiAqIGF0ZXh0IGlzIGFuIEFTQ0lJIGFscGhhbnVtZXJpYyAoc2VlIGBhc2NpaUFscGhhbnVtZXJpY2ApLCBvciBhIGNoYXJhY3RlciBpblxuICogdGhlIGluY2x1c2l2ZSByYW5nZXMgVSswMDIzIE5VTUJFUiBTSUdOIChgI2ApIHRvIFUrMDAyNyBBUE9TVFJPUEhFIChgJ2ApLFxuICogVSswMDJBIEFTVEVSSVNLIChgKmApLCBVKzAwMkIgUExVUyBTSUdOIChgK2ApLCBVKzAwMkQgREFTSCAoYC1gKSwgVSswMDJGXG4gKiBTTEFTSCAoYC9gKSwgVSswMDNEIEVRVUFMUyBUTyAoYD1gKSwgVSswMDNGIFFVRVNUSU9OIE1BUksgKGA/YCksIFUrMDA1RVxuICogQ0FSRVQgKGBeYCkgdG8gVSswMDYwIEdSQVZFIEFDQ0VOVCAoYGAgYCBgYCksIG9yIFUrMDA3QiBMRUZUIENVUkxZIEJSQUNFXG4gKiAoYHtgKSB0byBVKzAwN0UgVElMREUgKGB+YCkuXG4gKlxuICogU2VlOlxuICogKipcXFtSRkM1MzIyXSoqOlxuICogW0ludGVybmV0IE1lc3NhZ2UgRm9ybWF0XShodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTMyMikuXG4gKiBQLiBSZXNuaWNrLlxuICogSUVURi5cbiAqXG4gKiBAcGFyYW0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnNcbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgY29uc3QgYXNjaWlBdGV4dCA9IHJlZ2V4Q2hlY2soL1sjLScqK1xcLS05PT9BLVpeLX5dLylcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGEgY2hhcmFjdGVyIGNvZGUgaXMgYW4gQVNDSUkgY29udHJvbCBjaGFyYWN0ZXIuXG4gKlxuICogQW4gKipBU0NJSSBjb250cm9sKiogaXMgYSBjaGFyYWN0ZXIgaW4gdGhlIGluY2x1c2l2ZSByYW5nZSBVKzAwMDAgTlVMTCAoTlVMKVxuICogdG8gVSswMDFGIChVUyksIG9yIFUrMDA3RiAoREVMKS5cbiAqXG4gKiBAcGFyYW0ge0NvZGV9IGNvZGVcbiAqICAgQ29kZS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc2NpaUNvbnRyb2woY29kZSkge1xuICByZXR1cm4gKFxuICAgIC8vIFNwZWNpYWwgd2hpdGVzcGFjZSBjb2RlcyAod2hpY2ggaGF2ZSBuZWdhdGl2ZSB2YWx1ZXMpLCBDMCBhbmQgQ29udHJvbFxuICAgIC8vIGNoYXJhY3RlciBERUxcbiAgICBjb2RlICE9PSBudWxsICYmIChjb2RlIDwgMzIgfHwgY29kZSA9PT0gMTI3KVxuICApXG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgY2hhcmFjdGVyIGNvZGUgcmVwcmVzZW50cyBhbiBBU0NJSSBkaWdpdCAoYDBgIHRocm91Z2ggYDlgKS5cbiAqXG4gKiBBbiAqKkFTQ0lJIGRpZ2l0KiogaXMgYSBjaGFyYWN0ZXIgaW4gdGhlIGluY2x1c2l2ZSByYW5nZSBVKzAwMzAgKGAwYCkgdG9cbiAqIFUrMDAzOSAoYDlgKS5cbiAqXG4gKiBAcGFyYW0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnNcbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgY29uc3QgYXNjaWlEaWdpdCA9IHJlZ2V4Q2hlY2soL1xcZC8pXG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgY2hhcmFjdGVyIGNvZGUgcmVwcmVzZW50cyBhbiBBU0NJSSBoZXggZGlnaXQgKGBhYCB0aHJvdWdoXG4gKiBgZmAsIGNhc2UgaW5zZW5zaXRpdmUsIG9yIGAwYCB0aHJvdWdoIGA5YCkuXG4gKlxuICogQW4gKipBU0NJSSBoZXggZGlnaXQqKiBpcyBhbiBBU0NJSSBkaWdpdCAoc2VlIGBhc2NpaURpZ2l0YCksIEFTQ0lJIHVwcGVyIGhleFxuICogZGlnaXQsIG9yIGFuIEFTQ0lJIGxvd2VyIGhleCBkaWdpdC5cbiAqXG4gKiBBbiAqKkFTQ0lJIHVwcGVyIGhleCBkaWdpdCoqIGlzIGEgY2hhcmFjdGVyIGluIHRoZSBpbmNsdXNpdmUgcmFuZ2UgVSswMDQxXG4gKiAoYEFgKSB0byBVKzAwNDYgKGBGYCkuXG4gKlxuICogQW4gKipBU0NJSSBsb3dlciBoZXggZGlnaXQqKiBpcyBhIGNoYXJhY3RlciBpbiB0aGUgaW5jbHVzaXZlIHJhbmdlIFUrMDA2MVxuICogKGBhYCkgdG8gVSswMDY2IChgZmApLlxuICpcbiAqIEBwYXJhbSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJuc1xuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBhc2NpaUhleERpZ2l0ID0gcmVnZXhDaGVjaygvW1xcZEEtRmEtZl0vKVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBjb2RlIHJlcHJlc2VudHMgQVNDSUkgcHVuY3R1YXRpb24uXG4gKlxuICogQW4gKipBU0NJSSBwdW5jdHVhdGlvbioqIGlzIGEgY2hhcmFjdGVyIGluIHRoZSBpbmNsdXNpdmUgcmFuZ2VzIFUrMDAyMVxuICogRVhDTEFNQVRJT04gTUFSSyAoYCFgKSB0byBVKzAwMkYgU0xBU0ggKGAvYCksIFUrMDAzQSBDT0xPTiAoYDpgKSB0byBVKzAwNDAgQVRcbiAqIFNJR04gKGBAYCksIFUrMDA1QiBMRUZUIFNRVUFSRSBCUkFDS0VUIChgW2ApIHRvIFUrMDA2MCBHUkFWRSBBQ0NFTlRcbiAqIChgYCBgIGBgKSwgb3IgVSswMDdCIExFRlQgQ1VSTFkgQlJBQ0UgKGB7YCkgdG8gVSswMDdFIFRJTERFIChgfmApLlxuICpcbiAqIEBwYXJhbSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJuc1xuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBhc2NpaVB1bmN0dWF0aW9uID0gcmVnZXhDaGVjaygvWyEtLzotQFstYHstfl0vKVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSBjaGFyYWN0ZXIgY29kZSBpcyBhIG1hcmtkb3duIGxpbmUgZW5kaW5nLlxuICpcbiAqIEEgKiptYXJrZG93biBsaW5lIGVuZGluZyoqIGlzIHRoZSB2aXJ0dWFsIGNoYXJhY3RlcnMgTS0wMDAzIENBUlJJQUdFIFJFVFVSTlxuICogTElORSBGRUVEIChDUkxGKSwgTS0wMDA0IExJTkUgRkVFRCAoTEYpIGFuZCBNLTAwMDUgQ0FSUklBR0UgUkVUVVJOIChDUikuXG4gKlxuICogSW4gbWljcm9tYXJrLCB0aGUgYWN0dWFsIGNoYXJhY3RlciBVKzAwMEEgTElORSBGRUVEIChMRikgYW5kIFUrMDAwRCBDQVJSSUFHRVxuICogUkVUVVJOIChDUikgYXJlIHJlcGxhY2VkIGJ5IHRoZXNlIHZpcnR1YWwgY2hhcmFjdGVycyBkZXBlbmRpbmcgb24gd2hldGhlclxuICogdGhleSBvY2N1cnJlZCB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge0NvZGV9IGNvZGVcbiAqICAgQ29kZS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkge1xuICByZXR1cm4gY29kZSAhPT0gbnVsbCAmJiBjb2RlIDwgLTJcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGEgY2hhcmFjdGVyIGNvZGUgaXMgYSBtYXJrZG93biBsaW5lIGVuZGluZyAoc2VlXG4gKiBgbWFya2Rvd25MaW5lRW5kaW5nYCkgb3IgbWFya2Rvd24gc3BhY2UgKHNlZSBgbWFya2Rvd25TcGFjZWApLlxuICpcbiAqIEBwYXJhbSB7Q29kZX0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgaXQgbWF0Y2hlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkge1xuICByZXR1cm4gY29kZSAhPT0gbnVsbCAmJiAoY29kZSA8IDAgfHwgY29kZSA9PT0gMzIpXG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhIGNoYXJhY3RlciBjb2RlIGlzIGEgbWFya2Rvd24gc3BhY2UuXG4gKlxuICogQSAqKm1hcmtkb3duIHNwYWNlKiogaXMgdGhlIGNvbmNyZXRlIGNoYXJhY3RlciBVKzAwMjAgU1BBQ0UgKFNQKSBhbmQgdGhlXG4gKiB2aXJ0dWFsIGNoYXJhY3RlcnMgTS0wMDAxIFZJUlRVQUwgU1BBQ0UgKFZTKSBhbmQgTS0wMDAyIEhPUklaT05UQUwgVEFCIChIVCkuXG4gKlxuICogSW4gbWljcm9tYXJrLCB0aGUgYWN0dWFsIGNoYXJhY3RlciBVKzAwMDkgQ0hBUkFDVEVSIFRBQlVMQVRJT04gKEhUKSBpc1xuICogcmVwbGFjZWQgYnkgb25lIE0tMDAwMiBIT1JJWk9OVEFMIFRBQiAoSFQpIGFuZCBiZXR3ZWVuIDAgYW5kIDMgTS0wMDAxIFZJUlRVQUxcbiAqIFNQQUNFIChWUykgY2hhcmFjdGVycywgZGVwZW5kaW5nIG9uIHRoZSBjb2x1bW4gYXQgd2hpY2ggdGhlIHRhYiBvY2N1cnJlZC5cbiAqXG4gKiBAcGFyYW0ge0NvZGV9IGNvZGVcbiAqICAgQ29kZS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrZG93blNwYWNlKGNvZGUpIHtcbiAgcmV0dXJuIGNvZGUgPT09IC0yIHx8IGNvZGUgPT09IC0xIHx8IGNvZGUgPT09IDMyXG59XG5cbi8vIFNpemUgbm90ZTogcmVtb3ZpbmcgQVNDSUkgZnJvbSB0aGUgcmVnZXggYW5kIHVzaW5nIGBhc2NpaVB1bmN0dWF0aW9uYCBoZXJlXG4vLyBJbiBmYWN0IGFkZHMgdG8gdGhlIGJ1bmRsZSBzaXplLlxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgY29kZSByZXByZXNlbnRzIFVuaWNvZGUgcHVuY3R1YXRpb24uXG4gKlxuICogQSAqKlVuaWNvZGUgcHVuY3R1YXRpb24qKiBpcyBhIGNoYXJhY3RlciBpbiB0aGUgVW5pY29kZSBgUGNgIChQdW5jdHVhdGlvbixcbiAqIENvbm5lY3RvciksIGBQZGAgKFB1bmN0dWF0aW9uLCBEYXNoKSwgYFBlYCAoUHVuY3R1YXRpb24sIENsb3NlKSwgYFBmYFxuICogKFB1bmN0dWF0aW9uLCBGaW5hbCBxdW90ZSksIGBQaWAgKFB1bmN0dWF0aW9uLCBJbml0aWFsIHF1b3RlKSwgYFBvYFxuICogKFB1bmN0dWF0aW9uLCBPdGhlciksIG9yIGBQc2AgKFB1bmN0dWF0aW9uLCBPcGVuKSBjYXRlZ29yaWVzLCBvciBhbiBBU0NJSVxuICogcHVuY3R1YXRpb24gKHNlZSBgYXNjaWlQdW5jdHVhdGlvbmApLlxuICpcbiAqIFNlZTpcbiAqICoqXFxbVU5JQ09ERV0qKjpcbiAqIFtUaGUgVW5pY29kZSBTdGFuZGFyZF0oaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvdmVyc2lvbnMvKS5cbiAqIFVuaWNvZGUgQ29uc29ydGl1bS5cbiAqXG4gKiBAcGFyYW0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnNcbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgY29uc3QgdW5pY29kZVB1bmN0dWF0aW9uID0gcmVnZXhDaGVjayh1bmljb2RlUHVuY3R1YXRpb25SZWdleClcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgY29kZSByZXByZXNlbnRzIFVuaWNvZGUgd2hpdGVzcGFjZS5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBkb2VzIGhhbmRsZSBtaWNyb21hcmsgc3BlY2lmaWMgbWFya2Rvd24gd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLlxuICogU2VlIGBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlYCB0byBjaGVjayB0aGF0LlxuICpcbiAqIEEgKipVbmljb2RlIHdoaXRlc3BhY2UqKiBpcyBhIGNoYXJhY3RlciBpbiB0aGUgVW5pY29kZSBgWnNgIChTZXBhcmF0b3IsXG4gKiBTcGFjZSkgY2F0ZWdvcnksIG9yIFUrMDAwOSBDSEFSQUNURVIgVEFCVUxBVElPTiAoSFQpLCBVKzAwMEEgTElORSBGRUVEIChMRiksXG4gKiBVKzAwMEMgKEZGKSwgb3IgVSswMDBEIENBUlJJQUdFIFJFVFVSTiAoQ1IpICgqKlxcW1VOSUNPREVdKiopLlxuICpcbiAqIFNlZTpcbiAqICoqXFxbVU5JQ09ERV0qKjpcbiAqIFtUaGUgVW5pY29kZSBTdGFuZGFyZF0oaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvdmVyc2lvbnMvKS5cbiAqIFVuaWNvZGUgQ29uc29ydGl1bS5cbiAqXG4gKiBAcGFyYW0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnNcbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgY29uc3QgdW5pY29kZVdoaXRlc3BhY2UgPSByZWdleENoZWNrKC9cXHMvKVxuXG4vKipcbiAqIENyZWF0ZSBhIGNvZGUgY2hlY2sgZnJvbSBhIHJlZ2V4LlxuICpcbiAqIEBwYXJhbSB7UmVnRXhwfSByZWdleFxuICogQHJldHVybnMgeyhjb2RlOiBDb2RlKSA9PiBib29sZWFufVxuICovXG5mdW5jdGlvbiByZWdleENoZWNrKHJlZ2V4KSB7XG4gIHJldHVybiBjaGVja1xuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIGEgY29kZSBtYXRjaGVzIHRoZSBib3VuZCByZWdleC5cbiAgICpcbiAgICogQHBhcmFtIHtDb2RlfSBjb2RlXG4gICAqICAgQ2hhcmFjdGVyIGNvZGUuXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiAgIFdoZXRoZXIgdGhlIGNoYXJhY3RlciBjb2RlIG1hdGNoZXMgdGhlIGJvdW5kIHJlZ2V4LlxuICAgKi9cbiAgZnVuY3Rpb24gY2hlY2soY29kZSkge1xuICAgIHJldHVybiBjb2RlICE9PSBudWxsICYmIHJlZ2V4LnRlc3QoU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkVmZmVjdHN9IEVmZmVjdHNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuVHlwZX0gVG9rZW5UeXBlXG4gKi9cblxuaW1wb3J0IHttYXJrZG93blNwYWNlfSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG5cbi8vIFRvIGRvOiBpbXBsZW1lbnQgYHNwYWNlT3JUYWJgLCBgc3BhY2VPclRhYk1pbk1heGAsIGBzcGFjZU9yVGFiV2l0aE9wdGlvbnNgLlxuXG4vKipcbiAqIFBhcnNlIHNwYWNlcyBhbmQgdGFicy5cbiAqXG4gKiBUaGVyZSBpcyBubyBgbm9rYCBwYXJhbWV0ZXI6XG4gKlxuICogKiAgIHNwYWNlcyBpbiBtYXJrZG93biBhcmUgb2Z0ZW4gb3B0aW9uYWwsIGluIHdoaWNoIGNhc2UgdGhpcyBmYWN0b3J5IGNhbiBiZVxuICogICAgIHVzZWQgYW5kIGBva2Agd2lsbCBiZSBzd2l0Y2hlZCB0byB3aGV0aGVyIHNwYWNlcyB3ZXJlIGZvdW5kIG9yIG5vdFxuICogKiAgIG9uZSBsaW5lIGVuZGluZyBvciBzcGFjZSBjYW4gYmUgZGV0ZWN0ZWQgd2l0aCBgbWFya2Rvd25TcGFjZShjb2RlKWAgcmlnaHRcbiAqICAgICBiZWZvcmUgdXNpbmcgYGZhY3RvcnlTcGFjZWBcbiAqXG4gKiAjIyMjIyMgRXhhbXBsZXNcbiAqXG4gKiBXaGVyZSBg4pCJYCByZXByZXNlbnRzIGEgdGFiIChwbHVzIGhvdyBtdWNoIGl0IGV4cGFuZHMpIGFuZCBg4pCgYCByZXByZXNlbnRzIGFcbiAqIHNpbmdsZSBzcGFjZS5cbiAqXG4gKiBgYGBtYXJrZG93blxuICog4pCJXG4gKiDikKDikKDikKDikKBcbiAqIOKQieKQoFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtFZmZlY3RzfSBlZmZlY3RzXG4gKiAgIENvbnRleHQuXG4gKiBAcGFyYW0ge1N0YXRlfSBva1xuICogICBTdGF0ZSBzd2l0Y2hlZCB0byB3aGVuIHN1Y2Nlc3NmdWwuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gdHlwZVxuICogICBUeXBlIChgJyBcXHQnYCkuXG4gKiBAcGFyYW0ge251bWJlciB8IHVuZGVmaW5lZH0gW21heD1JbmZpbml0eV1cbiAqICAgTWF4IChleGNsdXNpdmUpLlxuICogQHJldHVybnNcbiAqICAgU3RhcnQgc3RhdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYWN0b3J5U3BhY2UoZWZmZWN0cywgb2ssIHR5cGUsIG1heCkge1xuICBjb25zdCBsaW1pdCA9IG1heCA/IG1heCAtIDEgOiBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFlcbiAgbGV0IHNpemUgPSAwXG4gIHJldHVybiBzdGFydFxuXG4gIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgICAgcmV0dXJuIHByZWZpeChjb2RlKVxuICAgIH1cbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxuXG4gIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gIGZ1bmN0aW9uIHByZWZpeChjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkgJiYgc2l6ZSsrIDwgbGltaXQpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHByZWZpeFxuICAgIH1cbiAgICBlZmZlY3RzLmV4aXQodHlwZSlcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuIiwiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkluaXRpYWxDb25zdHJ1Y3R9IEluaXRpYWxDb25zdHJ1Y3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuSW5pdGlhbGl6ZXJ9IEluaXRpYWxpemVyXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlN0YXRlfSBTdGF0ZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbn0gVG9rZW5cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVDb250ZXh0fSBUb2tlbml6ZUNvbnRleHRcbiAqL1xuXG5pbXBvcnQge2ZhY3RvcnlTcGFjZX0gZnJvbSAnbWljcm9tYXJrLWZhY3Rvcnktc3BhY2UnXG5pbXBvcnQge21hcmtkb3duTGluZUVuZGluZ30gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyJ1xuLyoqIEB0eXBlIHtJbml0aWFsQ29uc3RydWN0fSAqL1xuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSB7XG4gIHRva2VuaXplOiBpbml0aWFsaXplQ29udGVudFxufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7SW5pdGlhbGl6ZXJ9XG4gKi9cbmZ1bmN0aW9uIGluaXRpYWxpemVDb250ZW50KGVmZmVjdHMpIHtcbiAgY29uc3QgY29udGVudFN0YXJ0ID0gZWZmZWN0cy5hdHRlbXB0KFxuICAgIHRoaXMucGFyc2VyLmNvbnN0cnVjdHMuY29udGVudEluaXRpYWwsXG4gICAgYWZ0ZXJDb250ZW50U3RhcnRDb25zdHJ1Y3QsXG4gICAgcGFyYWdyYXBoSW5pdGlhbFxuICApXG4gIC8qKiBAdHlwZSB7VG9rZW59ICovXG4gIGxldCBwcmV2aW91c1xuICByZXR1cm4gY29udGVudFN0YXJ0XG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gYWZ0ZXJDb250ZW50U3RhcnRDb25zdHJ1Y3QoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgIHJldHVybiBmYWN0b3J5U3BhY2UoZWZmZWN0cywgY29udGVudFN0YXJ0LCAnbGluZVByZWZpeCcpXG4gIH1cblxuICAvKiogQHR5cGUge1N0YXRlfSAqL1xuICBmdW5jdGlvbiBwYXJhZ3JhcGhJbml0aWFsKGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdwYXJhZ3JhcGgnKVxuICAgIHJldHVybiBsaW5lU3RhcnQoY29kZSlcbiAgfVxuXG4gIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gIGZ1bmN0aW9uIGxpbmVTdGFydChjb2RlKSB7XG4gICAgY29uc3QgdG9rZW4gPSBlZmZlY3RzLmVudGVyKCdjaHVua1RleHQnLCB7XG4gICAgICBjb250ZW50VHlwZTogJ3RleHQnLFxuICAgICAgcHJldmlvdXNcbiAgICB9KVxuICAgIGlmIChwcmV2aW91cykge1xuICAgICAgcHJldmlvdXMubmV4dCA9IHRva2VuXG4gICAgfVxuICAgIHByZXZpb3VzID0gdG9rZW5cbiAgICByZXR1cm4gZGF0YShjb2RlKVxuICB9XG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gZGF0YShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2h1bmtUZXh0JylcbiAgICAgIGVmZmVjdHMuZXhpdCgncGFyYWdyYXBoJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdjaHVua1RleHQnKVxuICAgICAgcmV0dXJuIGxpbmVTdGFydFxuICAgIH1cblxuICAgIC8vIERhdGEuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxufVxuIiwiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvbnN0cnVjdH0gQ29uc3RydWN0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvbnRhaW5lclN0YXRlfSBDb250YWluZXJTdGF0ZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Jbml0aWFsQ29uc3RydWN0fSBJbml0aWFsQ29uc3RydWN0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkluaXRpYWxpemVyfSBJbml0aWFsaXplclxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Qb2ludH0gUG9pbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VufSBUb2tlblxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZUNvbnRleHR9IFRva2VuaXplQ29udGV4dFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZXJ9IFRva2VuaXplclxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1tDb25zdHJ1Y3QsIENvbnRhaW5lclN0YXRlXX0gU3RhY2tJdGVtXG4gKi9cblxuaW1wb3J0IHtmYWN0b3J5U3BhY2V9IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LXNwYWNlJ1xuaW1wb3J0IHttYXJrZG93bkxpbmVFbmRpbmd9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3RlcidcbmltcG9ydCB7c3BsaWNlfSBmcm9tICdtaWNyb21hcmstdXRpbC1jaHVua2VkJ1xuLyoqIEB0eXBlIHtJbml0aWFsQ29uc3RydWN0fSAqL1xuZXhwb3J0IGNvbnN0IGRvY3VtZW50ID0ge1xuICB0b2tlbml6ZTogaW5pdGlhbGl6ZURvY3VtZW50XG59XG5cbi8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuY29uc3QgY29udGFpbmVyQ29uc3RydWN0ID0ge1xuICB0b2tlbml6ZTogdG9rZW5pemVDb250YWluZXJcbn1cblxuLyoqXG4gKiBAdGhpcyB7VG9rZW5pemVDb250ZXh0fVxuICogQHR5cGUge0luaXRpYWxpemVyfVxuICovXG5mdW5jdGlvbiBpbml0aWFsaXplRG9jdW1lbnQoZWZmZWN0cykge1xuICBjb25zdCBzZWxmID0gdGhpc1xuICAvKiogQHR5cGUge0FycmF5PFN0YWNrSXRlbT59ICovXG4gIGNvbnN0IHN0YWNrID0gW11cbiAgbGV0IGNvbnRpbnVlZCA9IDBcbiAgLyoqIEB0eXBlIHtUb2tlbml6ZUNvbnRleHQgfCB1bmRlZmluZWR9ICovXG4gIGxldCBjaGlsZEZsb3dcbiAgLyoqIEB0eXBlIHtUb2tlbiB8IHVuZGVmaW5lZH0gKi9cbiAgbGV0IGNoaWxkVG9rZW5cbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gIGxldCBsaW5lU3RhcnRPZmZzZXRcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIC8vIEZpcnN0IHdlIGl0ZXJhdGUgdGhyb3VnaCB0aGUgb3BlbiBibG9ja3MsIHN0YXJ0aW5nIHdpdGggdGhlIHJvb3RcbiAgICAvLyBkb2N1bWVudCwgYW5kIGRlc2NlbmRpbmcgdGhyb3VnaCBsYXN0IGNoaWxkcmVuIGRvd24gdG8gdGhlIGxhc3Qgb3BlblxuICAgIC8vIGJsb2NrLlxuICAgIC8vIEVhY2ggYmxvY2sgaW1wb3NlcyBhIGNvbmRpdGlvbiB0aGF0IHRoZSBsaW5lIG11c3Qgc2F0aXNmeSBpZiB0aGUgYmxvY2sgaXNcbiAgICAvLyB0byByZW1haW4gb3Blbi5cbiAgICAvLyBGb3IgZXhhbXBsZSwgYSBibG9jayBxdW90ZSByZXF1aXJlcyBhIGA+YCBjaGFyYWN0ZXIuXG4gICAgLy8gQSBwYXJhZ3JhcGggcmVxdWlyZXMgYSBub24tYmxhbmsgbGluZS5cbiAgICAvLyBJbiB0aGlzIHBoYXNlIHdlIG1heSBtYXRjaCBhbGwgb3IganVzdCBzb21lIG9mIHRoZSBvcGVuIGJsb2Nrcy5cbiAgICAvLyBCdXQgd2UgY2Fubm90IGNsb3NlIHVubWF0Y2hlZCBibG9ja3MgeWV0LCBiZWNhdXNlIHdlIG1heSBoYXZlIGEgbGF6eVxuICAgIC8vIGNvbnRpbnVhdGlvbiBsaW5lLlxuICAgIGlmIChjb250aW51ZWQgPCBzdGFjay5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBzdGFja1tjb250aW51ZWRdXG4gICAgICBzZWxmLmNvbnRhaW5lclN0YXRlID0gaXRlbVsxXVxuICAgICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChcbiAgICAgICAgaXRlbVswXS5jb250aW51YXRpb24sXG4gICAgICAgIGRvY3VtZW50Q29udGludWUsXG4gICAgICAgIGNoZWNrTmV3Q29udGFpbmVyc1xuICAgICAgKShjb2RlKVxuICAgIH1cblxuICAgIC8vIERvbmUuXG4gICAgcmV0dXJuIGNoZWNrTmV3Q29udGFpbmVycyhjb2RlKVxuICB9XG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gZG9jdW1lbnRDb250aW51ZShjb2RlKSB7XG4gICAgY29udGludWVkKytcblxuICAgIC8vIE5vdGU6IHRoaXMgZmllbGQgaXMgY2FsbGVkIGBfY2xvc2VGbG93YCBidXQgaXQgYWxzbyBjbG9zZXMgY29udGFpbmVycy5cbiAgICAvLyBQZXJoYXBzIGEgZ29vZCBpZGVhIHRvIHJlbmFtZSBpdCBidXQgaXTigJlzIGFscmVhZHkgdXNlZCBpbiB0aGUgd2lsZCBieVxuICAgIC8vIGV4dGVuc2lvbnMuXG4gICAgaWYgKHNlbGYuY29udGFpbmVyU3RhdGUuX2Nsb3NlRmxvdykge1xuICAgICAgc2VsZi5jb250YWluZXJTdGF0ZS5fY2xvc2VGbG93ID0gdW5kZWZpbmVkXG4gICAgICBpZiAoY2hpbGRGbG93KSB7XG4gICAgICAgIGNsb3NlRmxvdygpXG4gICAgICB9XG5cbiAgICAgIC8vIE5vdGU6IHRoaXMgYWxnb3JpdGhtIGZvciBtb3ZpbmcgZXZlbnRzIGFyb3VuZCBpcyBzaW1pbGFyIHRvIHRoZVxuICAgICAgLy8gYWxnb3JpdGhtIHdoZW4gZGVhbGluZyB3aXRoIGxhenkgbGluZXMgaW4gYHdyaXRlVG9DaGlsZGAuXG4gICAgICBjb25zdCBpbmRleEJlZm9yZUV4aXRzID0gc2VsZi5ldmVudHMubGVuZ3RoXG4gICAgICBsZXQgaW5kZXhCZWZvcmVGbG93ID0gaW5kZXhCZWZvcmVFeGl0c1xuICAgICAgLyoqIEB0eXBlIHtQb2ludCB8IHVuZGVmaW5lZH0gKi9cbiAgICAgIGxldCBwb2ludFxuXG4gICAgICAvLyBGaW5kIHRoZSBmbG93IGNodW5rLlxuICAgICAgd2hpbGUgKGluZGV4QmVmb3JlRmxvdy0tKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzZWxmLmV2ZW50c1tpbmRleEJlZm9yZUZsb3ddWzBdID09PSAnZXhpdCcgJiZcbiAgICAgICAgICBzZWxmLmV2ZW50c1tpbmRleEJlZm9yZUZsb3ddWzFdLnR5cGUgPT09ICdjaHVua0Zsb3cnXG4gICAgICAgICkge1xuICAgICAgICAgIHBvaW50ID0gc2VsZi5ldmVudHNbaW5kZXhCZWZvcmVGbG93XVsxXS5lbmRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBleGl0Q29udGFpbmVycyhjb250aW51ZWQpXG5cbiAgICAgIC8vIEZpeCBwb3NpdGlvbnMuXG4gICAgICBsZXQgaW5kZXggPSBpbmRleEJlZm9yZUV4aXRzXG4gICAgICB3aGlsZSAoaW5kZXggPCBzZWxmLmV2ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5ldmVudHNbaW5kZXhdWzFdLmVuZCA9IE9iamVjdC5hc3NpZ24oe30sIHBvaW50KVxuICAgICAgICBpbmRleCsrXG4gICAgICB9XG5cbiAgICAgIC8vIEluamVjdCB0aGUgZXhpdHMgZWFybGllciAodGhleeKAmXJlIHN0aWxsIGFsc28gYXQgdGhlIGVuZCkuXG4gICAgICBzcGxpY2UoXG4gICAgICAgIHNlbGYuZXZlbnRzLFxuICAgICAgICBpbmRleEJlZm9yZUZsb3cgKyAxLFxuICAgICAgICAwLFxuICAgICAgICBzZWxmLmV2ZW50cy5zbGljZShpbmRleEJlZm9yZUV4aXRzKVxuICAgICAgKVxuXG4gICAgICAvLyBEaXNjYXJkIHRoZSBkdXBsaWNhdGUgZXhpdHMuXG4gICAgICBzZWxmLmV2ZW50cy5sZW5ndGggPSBpbmRleFxuICAgICAgcmV0dXJuIGNoZWNrTmV3Q29udGFpbmVycyhjb2RlKVxuICAgIH1cbiAgICByZXR1cm4gc3RhcnQoY29kZSlcbiAgfVxuXG4gIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gIGZ1bmN0aW9uIGNoZWNrTmV3Q29udGFpbmVycyhjb2RlKSB7XG4gICAgLy8gTmV4dCwgYWZ0ZXIgY29uc3VtaW5nIHRoZSBjb250aW51YXRpb24gbWFya2VycyBmb3IgZXhpc3RpbmcgYmxvY2tzLCB3ZVxuICAgIC8vIGxvb2sgZm9yIG5ldyBibG9jayBzdGFydHMgKGUuZy4gYD5gIGZvciBhIGJsb2NrIHF1b3RlKS5cbiAgICAvLyBJZiB3ZSBlbmNvdW50ZXIgYSBuZXcgYmxvY2sgc3RhcnQsIHdlIGNsb3NlIGFueSBibG9ja3MgdW5tYXRjaGVkIGluXG4gICAgLy8gc3RlcCAxIGJlZm9yZSBjcmVhdGluZyB0aGUgbmV3IGJsb2NrIGFzIGEgY2hpbGQgb2YgdGhlIGxhc3QgbWF0Y2hlZFxuICAgIC8vIGJsb2NrLlxuICAgIGlmIChjb250aW51ZWQgPT09IHN0YWNrLmxlbmd0aCkge1xuICAgICAgLy8gTm8gbmVlZCB0byBgY2hlY2tgIHdoZXRoZXIgdGhlcmXigJlzIGEgY29udGFpbmVyLCBvZiBgZXhpdENvbnRhaW5lcnNgXG4gICAgICAvLyB3b3VsZCBiZSBtb290LlxuICAgICAgLy8gV2UgY2FuIGluc3RlYWQgaW1tZWRpYXRlbHkgYGF0dGVtcHRgIHRvIHBhcnNlIG9uZS5cbiAgICAgIGlmICghY2hpbGRGbG93KSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudENvbnRpbnVlZChjb2RlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGNvbmNyZXRlIGNvbnRlbnQsIHN1Y2ggYXMgYmxvY2sgSFRNTCBvciBmZW5jZWQgY29kZSxcbiAgICAgIC8vIHdlIGNhbuKAmXQgaGF2ZSBjb250YWluZXJzIOKAnHBpZXJjZeKAnSBpbnRvIHRoZW0sIHNvIHdlIGNhbiBpbW1lZGlhdGVseVxuICAgICAgLy8gc3RhcnQuXG4gICAgICBpZiAoY2hpbGRGbG93LmN1cnJlbnRDb25zdHJ1Y3QgJiYgY2hpbGRGbG93LmN1cnJlbnRDb25zdHJ1Y3QuY29uY3JldGUpIHtcbiAgICAgICAgcmV0dXJuIGZsb3dTdGFydChjb2RlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB3ZSBkbyBoYXZlIGZsb3csIGl0IGNvdWxkIHN0aWxsIGJlIGEgYmxhbmsgbGluZSxcbiAgICAgIC8vIGJ1dCB3ZeKAmWQgYmUgaW50ZXJydXB0aW5nIGl0IHcvIGEgbmV3IGNvbnRhaW5lciBpZiB0aGVyZeKAmXMgYSBjdXJyZW50XG4gICAgICAvLyBjb25zdHJ1Y3QuXG4gICAgICAvLyBUbyBkbzogbmV4dCBtYWpvcjogcmVtb3ZlIGBfZ2ZtVGFibGVEeW5hbWljSW50ZXJydXB0SGFja2AgKG5vIGxvbmdlclxuICAgICAgLy8gbmVlZGVkIGluIG1pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXRhYmxlQDEuMC42KS5cbiAgICAgIHNlbGYuaW50ZXJydXB0ID0gQm9vbGVhbihcbiAgICAgICAgY2hpbGRGbG93LmN1cnJlbnRDb25zdHJ1Y3QgJiYgIWNoaWxkRmxvdy5fZ2ZtVGFibGVEeW5hbWljSW50ZXJydXB0SGFja1xuICAgICAgKVxuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgbmV3IGNvbnRhaW5lci5cbiAgICBzZWxmLmNvbnRhaW5lclN0YXRlID0ge31cbiAgICByZXR1cm4gZWZmZWN0cy5jaGVjayhcbiAgICAgIGNvbnRhaW5lckNvbnN0cnVjdCxcbiAgICAgIHRoZXJlSXNBTmV3Q29udGFpbmVyLFxuICAgICAgdGhlcmVJc05vTmV3Q29udGFpbmVyXG4gICAgKShjb2RlKVxuICB9XG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gdGhlcmVJc0FOZXdDb250YWluZXIoY29kZSkge1xuICAgIGlmIChjaGlsZEZsb3cpIGNsb3NlRmxvdygpXG4gICAgZXhpdENvbnRhaW5lcnMoY29udGludWVkKVxuICAgIHJldHVybiBkb2N1bWVudENvbnRpbnVlZChjb2RlKVxuICB9XG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gdGhlcmVJc05vTmV3Q29udGFpbmVyKGNvZGUpIHtcbiAgICBzZWxmLnBhcnNlci5sYXp5W3NlbGYubm93KCkubGluZV0gPSBjb250aW51ZWQgIT09IHN0YWNrLmxlbmd0aFxuICAgIGxpbmVTdGFydE9mZnNldCA9IHNlbGYubm93KCkub2Zmc2V0XG4gICAgcmV0dXJuIGZsb3dTdGFydChjb2RlKVxuICB9XG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gZG9jdW1lbnRDb250aW51ZWQoY29kZSkge1xuICAgIC8vIFRyeSBuZXcgY29udGFpbmVycy5cbiAgICBzZWxmLmNvbnRhaW5lclN0YXRlID0ge31cbiAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KFxuICAgICAgY29udGFpbmVyQ29uc3RydWN0LFxuICAgICAgY29udGFpbmVyQ29udGludWUsXG4gICAgICBmbG93U3RhcnRcbiAgICApKGNvZGUpXG4gIH1cblxuICAvKiogQHR5cGUge1N0YXRlfSAqL1xuICBmdW5jdGlvbiBjb250YWluZXJDb250aW51ZShjb2RlKSB7XG4gICAgY29udGludWVkKytcbiAgICBzdGFjay5wdXNoKFtzZWxmLmN1cnJlbnRDb25zdHJ1Y3QsIHNlbGYuY29udGFpbmVyU3RhdGVdKVxuICAgIC8vIFRyeSBhbm90aGVyLlxuICAgIHJldHVybiBkb2N1bWVudENvbnRpbnVlZChjb2RlKVxuICB9XG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gZmxvd1N0YXJ0KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkRmxvdykgY2xvc2VGbG93KClcbiAgICAgIGV4aXRDb250YWluZXJzKDApXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjaGlsZEZsb3cgPSBjaGlsZEZsb3cgfHwgc2VsZi5wYXJzZXIuZmxvdyhzZWxmLm5vdygpKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2NodW5rRmxvdycsIHtcbiAgICAgIGNvbnRlbnRUeXBlOiAnZmxvdycsXG4gICAgICBwcmV2aW91czogY2hpbGRUb2tlbixcbiAgICAgIF90b2tlbml6ZXI6IGNoaWxkRmxvd1xuICAgIH0pXG4gICAgcmV0dXJuIGZsb3dDb250aW51ZShjb2RlKVxuICB9XG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gZmxvd0NvbnRpbnVlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgd3JpdGVUb0NoaWxkKGVmZmVjdHMuZXhpdCgnY2h1bmtGbG93JyksIHRydWUpXG4gICAgICBleGl0Q29udGFpbmVycygwKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICB3cml0ZVRvQ2hpbGQoZWZmZWN0cy5leGl0KCdjaHVua0Zsb3cnKSlcbiAgICAgIC8vIEdldCByZWFkeSBmb3IgdGhlIG5leHQgbGluZS5cbiAgICAgIGNvbnRpbnVlZCA9IDBcbiAgICAgIHNlbGYuaW50ZXJydXB0ID0gdW5kZWZpbmVkXG4gICAgICByZXR1cm4gc3RhcnRcbiAgICB9XG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGZsb3dDb250aW51ZVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VG9rZW59IHRva2VuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbiB8IHVuZGVmaW5lZH0gW2VvZl1cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmdW5jdGlvbiB3cml0ZVRvQ2hpbGQodG9rZW4sIGVvZikge1xuICAgIGNvbnN0IHN0cmVhbSA9IHNlbGYuc2xpY2VTdHJlYW0odG9rZW4pXG4gICAgaWYgKGVvZikgc3RyZWFtLnB1c2gobnVsbClcbiAgICB0b2tlbi5wcmV2aW91cyA9IGNoaWxkVG9rZW5cbiAgICBpZiAoY2hpbGRUb2tlbikgY2hpbGRUb2tlbi5uZXh0ID0gdG9rZW5cbiAgICBjaGlsZFRva2VuID0gdG9rZW5cbiAgICBjaGlsZEZsb3cuZGVmaW5lU2tpcCh0b2tlbi5zdGFydClcbiAgICBjaGlsZEZsb3cud3JpdGUoc3RyZWFtKVxuXG4gICAgLy8gQWxyaWdodCwgc28gd2UganVzdCBhZGRlZCBhIGxhenkgbGluZTpcbiAgICAvL1xuICAgIC8vIGBgYG1hcmtkb3duXG4gICAgLy8gPiBhXG4gICAgLy8gYi5cbiAgICAvL1xuICAgIC8vIE9yOlxuICAgIC8vXG4gICAgLy8gPiB+fn5jXG4gICAgLy8gZFxuICAgIC8vXG4gICAgLy8gT3I6XG4gICAgLy9cbiAgICAvLyA+IHwgZSB8XG4gICAgLy8gZlxuICAgIC8vIGBgYFxuICAgIC8vXG4gICAgLy8gVGhlIGNvbnN0cnVjdCBpbiB0aGUgc2Vjb25kIGV4YW1wbGUgKGZlbmNlZCBjb2RlKSBkb2VzIG5vdCBhY2NlcHQgbGF6eVxuICAgIC8vIGxpbmVzLCBzbyBpdCBtYXJrZWQgaXRzZWxmIGFzIGRvbmUgYXQgdGhlIGVuZCBvZiBpdHMgZmlyc3QgbGluZSwgYW5kXG4gICAgLy8gdGhlbiB0aGUgY29udGVudCBjb25zdHJ1Y3QgcGFyc2VzIGBkYC5cbiAgICAvLyBNb3N0IGNvbnN0cnVjdHMgaW4gbWFya2Rvd24gbWF0Y2ggb24gdGhlIGZpcnN0IGxpbmU6IGlmIHRoZSBmaXJzdCBsaW5lXG4gICAgLy8gZm9ybXMgYSBjb25zdHJ1Y3QsIGEgbm9uLWxhenkgbGluZSBjYW7igJl0IOKAnHVubWFrZeKAnSBpdC5cbiAgICAvL1xuICAgIC8vIFRoZSBjb25zdHJ1Y3QgaW4gdGhlIHRoaXJkIGV4YW1wbGUgaXMgcG90ZW50aWFsbHkgYSBHRk0gdGFibGUsIGFuZFxuICAgIC8vIHRob3NlIGFyZSAqd2VpcmQqLlxuICAgIC8vIEl0ICpjb3VsZCogYmUgYSB0YWJsZSwgZnJvbSB0aGUgZmlyc3QgbGluZSwgaWYgdGhlIGZvbGxvd2luZyBsaW5lXG4gICAgLy8gbWF0Y2hlcyBhIGNvbmRpdGlvbi5cbiAgICAvLyBJbiB0aGlzIGNhc2UsIHRoYXQgc2Vjb25kIGxpbmUgaXMgbGF6eSwgd2hpY2gg4oCcdW5tYWtlc+KAnSB0aGUgZmlyc3QgbGluZVxuICAgIC8vIGFuZCB0dXJucyB0aGUgd2hvbGUgaW50byBvbmUgY29udGVudCBibG9jay5cbiAgICAvL1xuICAgIC8vIFdl4oCZdmUgbm93IHBhcnNlZCB0aGUgbm9uLWxhenkgYW5kIHRoZSBsYXp5IGxpbmUsIGFuZCBjYW4gZmlndXJlIG91dFxuICAgIC8vIHdoZXRoZXIgdGhlIGxhenkgbGluZSBzdGFydGVkIGEgbmV3IGZsb3cgYmxvY2suXG4gICAgLy8gSWYgaXQgZGlkLCB3ZSBleGl0IHRoZSBjdXJyZW50IGNvbnRhaW5lcnMgYmV0d2VlbiB0aGUgdHdvIGZsb3cgYmxvY2tzLlxuICAgIGlmIChzZWxmLnBhcnNlci5sYXp5W3Rva2VuLnN0YXJ0LmxpbmVdKSB7XG4gICAgICBsZXQgaW5kZXggPSBjaGlsZEZsb3cuZXZlbnRzLmxlbmd0aFxuICAgICAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIC8vIFRoZSB0b2tlbiBzdGFydHMgYmVmb3JlIHRoZSBsaW5lIGVuZGluZ+KAplxuICAgICAgICAgIGNoaWxkRmxvdy5ldmVudHNbaW5kZXhdWzFdLnN0YXJ0Lm9mZnNldCA8IGxpbmVTdGFydE9mZnNldCAmJlxuICAgICAgICAgIC8vIOKApmFuZCBlaXRoZXIgaXMgbm90IGVuZGVkIHlldOKAplxuICAgICAgICAgICghY2hpbGRGbG93LmV2ZW50c1tpbmRleF1bMV0uZW5kIHx8XG4gICAgICAgICAgICAvLyDigKZvciBlbmRzIGFmdGVyIGl0LlxuICAgICAgICAgICAgY2hpbGRGbG93LmV2ZW50c1tpbmRleF1bMV0uZW5kLm9mZnNldCA+IGxpbmVTdGFydE9mZnNldClcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gRXhpdDogdGhlcmXigJlzIHN0aWxsIHNvbWV0aGluZyBvcGVuLCB3aGljaCBtZWFucyBpdOKAmXMgYSBsYXp5IGxpbmVcbiAgICAgICAgICAvLyBwYXJ0IG9mIHNvbWV0aGluZy5cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBOb3RlOiB0aGlzIGFsZ29yaXRobSBmb3IgbW92aW5nIGV2ZW50cyBhcm91bmQgaXMgc2ltaWxhciB0byB0aGVcbiAgICAgIC8vIGFsZ29yaXRobSB3aGVuIGNsb3NpbmcgZmxvdyBpbiBgZG9jdW1lbnRDb250aW51ZWAuXG4gICAgICBjb25zdCBpbmRleEJlZm9yZUV4aXRzID0gc2VsZi5ldmVudHMubGVuZ3RoXG4gICAgICBsZXQgaW5kZXhCZWZvcmVGbG93ID0gaW5kZXhCZWZvcmVFeGl0c1xuICAgICAgLyoqIEB0eXBlIHtib29sZWFuIHwgdW5kZWZpbmVkfSAqL1xuICAgICAgbGV0IHNlZW5cbiAgICAgIC8qKiBAdHlwZSB7UG9pbnQgfCB1bmRlZmluZWR9ICovXG4gICAgICBsZXQgcG9pbnRcblxuICAgICAgLy8gRmluZCB0aGUgcHJldmlvdXMgY2h1bmsgKHRoZSBvbmUgYmVmb3JlIHRoZSBsYXp5IGxpbmUpLlxuICAgICAgd2hpbGUgKGluZGV4QmVmb3JlRmxvdy0tKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzZWxmLmV2ZW50c1tpbmRleEJlZm9yZUZsb3ddWzBdID09PSAnZXhpdCcgJiZcbiAgICAgICAgICBzZWxmLmV2ZW50c1tpbmRleEJlZm9yZUZsb3ddWzFdLnR5cGUgPT09ICdjaHVua0Zsb3cnXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChzZWVuKSB7XG4gICAgICAgICAgICBwb2ludCA9IHNlbGYuZXZlbnRzW2luZGV4QmVmb3JlRmxvd11bMV0uZW5kXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWVuID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBleGl0Q29udGFpbmVycyhjb250aW51ZWQpXG5cbiAgICAgIC8vIEZpeCBwb3NpdGlvbnMuXG4gICAgICBpbmRleCA9IGluZGV4QmVmb3JlRXhpdHNcbiAgICAgIHdoaWxlIChpbmRleCA8IHNlbGYuZXZlbnRzLmxlbmd0aCkge1xuICAgICAgICBzZWxmLmV2ZW50c1tpbmRleF1bMV0uZW5kID0gT2JqZWN0LmFzc2lnbih7fSwgcG9pbnQpXG4gICAgICAgIGluZGV4KytcbiAgICAgIH1cblxuICAgICAgLy8gSW5qZWN0IHRoZSBleGl0cyBlYXJsaWVyICh0aGV54oCZcmUgc3RpbGwgYWxzbyBhdCB0aGUgZW5kKS5cbiAgICAgIHNwbGljZShcbiAgICAgICAgc2VsZi5ldmVudHMsXG4gICAgICAgIGluZGV4QmVmb3JlRmxvdyArIDEsXG4gICAgICAgIDAsXG4gICAgICAgIHNlbGYuZXZlbnRzLnNsaWNlKGluZGV4QmVmb3JlRXhpdHMpXG4gICAgICApXG5cbiAgICAgIC8vIERpc2NhcmQgdGhlIGR1cGxpY2F0ZSBleGl0cy5cbiAgICAgIHNlbGYuZXZlbnRzLmxlbmd0aCA9IGluZGV4XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZnVuY3Rpb24gZXhpdENvbnRhaW5lcnMoc2l6ZSkge1xuICAgIGxldCBpbmRleCA9IHN0YWNrLmxlbmd0aFxuXG4gICAgLy8gRXhpdCBvcGVuIGNvbnRhaW5lcnMuXG4gICAgd2hpbGUgKGluZGV4LS0gPiBzaXplKSB7XG4gICAgICBjb25zdCBlbnRyeSA9IHN0YWNrW2luZGV4XVxuICAgICAgc2VsZi5jb250YWluZXJTdGF0ZSA9IGVudHJ5WzFdXG4gICAgICBlbnRyeVswXS5leGl0LmNhbGwoc2VsZiwgZWZmZWN0cylcbiAgICB9XG4gICAgc3RhY2subGVuZ3RoID0gc2l6ZVxuICB9XG4gIGZ1bmN0aW9uIGNsb3NlRmxvdygpIHtcbiAgICBjaGlsZEZsb3cud3JpdGUoW251bGxdKVxuICAgIGNoaWxkVG9rZW4gPSB1bmRlZmluZWRcbiAgICBjaGlsZEZsb3cgPSB1bmRlZmluZWRcbiAgICBzZWxmLmNvbnRhaW5lclN0YXRlLl9jbG9zZUZsb3cgPSB1bmRlZmluZWRcbiAgfVxufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZUNvbnRhaW5lcihlZmZlY3RzLCBvaywgbm9rKSB7XG4gIC8vIEFsd2F5cyBwb3B1bGF0ZWQgYnkgZGVmYXVsdHMuXG5cbiAgcmV0dXJuIGZhY3RvcnlTcGFjZShcbiAgICBlZmZlY3RzLFxuICAgIGVmZmVjdHMuYXR0ZW1wdCh0aGlzLnBhcnNlci5jb25zdHJ1Y3RzLmRvY3VtZW50LCBvaywgbm9rKSxcbiAgICAnbGluZVByZWZpeCcsXG4gICAgdGhpcy5wYXJzZXIuY29uc3RydWN0cy5kaXNhYmxlLm51bGwuaW5jbHVkZXMoJ2NvZGVJbmRlbnRlZCcpID8gdW5kZWZpbmVkIDogNFxuICApXG59XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ29kZX0gQ29kZVxuICovXG5cbmltcG9ydCB7XG4gIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UsXG4gIHVuaWNvZGVQdW5jdHVhdGlvbixcbiAgdW5pY29kZVdoaXRlc3BhY2Vcbn0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyJ1xuLyoqXG4gKiBDbGFzc2lmeSB3aGV0aGVyIGEgY29kZSByZXByZXNlbnRzIHdoaXRlc3BhY2UsIHB1bmN0dWF0aW9uLCBvciBzb21ldGhpbmdcbiAqIGVsc2UuXG4gKlxuICogVXNlZCBmb3IgYXR0ZW50aW9uIChlbXBoYXNpcywgc3Ryb25nKSwgd2hvc2Ugc2VxdWVuY2VzIGNhbiBvcGVuIG9yIGNsb3NlXG4gKiBiYXNlZCBvbiB0aGUgY2xhc3Mgb2Ygc3Vycm91bmRpbmcgY2hhcmFjdGVycy5cbiAqXG4gKiA+IPCfkYkgKipOb3RlKio6IGVvZiAoYG51bGxgKSBpcyBzZWVuIGFzIHdoaXRlc3BhY2UuXG4gKlxuICogQHBhcmFtIHtDb2RlfSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJucyB7dHlwZW9mIGNvbnN0YW50cy5jaGFyYWN0ZXJHcm91cFdoaXRlc3BhY2UgfCB0eXBlb2YgY29uc3RhbnRzLmNoYXJhY3Rlckdyb3VwUHVuY3R1YXRpb24gfCB1bmRlZmluZWR9XG4gKiAgIEdyb3VwLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlDaGFyYWN0ZXIoY29kZSkge1xuICBpZiAoXG4gICAgY29kZSA9PT0gbnVsbCB8fFxuICAgIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkgfHxcbiAgICB1bmljb2RlV2hpdGVzcGFjZShjb2RlKVxuICApIHtcbiAgICByZXR1cm4gMVxuICB9XG4gIGlmICh1bmljb2RlUHVuY3R1YXRpb24oY29kZSkpIHtcbiAgICByZXR1cm4gMlxuICB9XG59XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRXZlbnR9IEV2ZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlJlc29sdmVyfSBSZXNvbHZlclxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZUNvbnRleHR9IFRva2VuaXplQ29udGV4dFxuICovXG5cbi8qKlxuICogQ2FsbCBhbGwgYHJlc29sdmVBbGxgcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PHtyZXNvbHZlQWxsPzogUmVzb2x2ZXIgfCB1bmRlZmluZWR9Pn0gY29uc3RydWN0c1xuICogICBMaXN0IG9mIGNvbnN0cnVjdHMsIG9wdGlvbmFsbHkgd2l0aCBgcmVzb2x2ZUFsbGBzLlxuICogQHBhcmFtIHtBcnJheTxFdmVudD59IGV2ZW50c1xuICogICBMaXN0IG9mIGV2ZW50cy5cbiAqIEBwYXJhbSB7VG9rZW5pemVDb250ZXh0fSBjb250ZXh0XG4gKiAgIENvbnRleHQgdXNlZCBieSBgdG9rZW5pemVgLlxuICogQHJldHVybnMge0FycmF5PEV2ZW50Pn1cbiAqICAgQ2hhbmdlZCBldmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQWxsKGNvbnN0cnVjdHMsIGV2ZW50cywgY29udGV4dCkge1xuICAvKiogQHR5cGUge0FycmF5PFJlc29sdmVyPn0gKi9cbiAgY29uc3QgY2FsbGVkID0gW11cbiAgbGV0IGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGNvbnN0cnVjdHMubGVuZ3RoKSB7XG4gICAgY29uc3QgcmVzb2x2ZSA9IGNvbnN0cnVjdHNbaW5kZXhdLnJlc29sdmVBbGxcblxuICAgIGlmIChyZXNvbHZlICYmICFjYWxsZWQuaW5jbHVkZXMocmVzb2x2ZSkpIHtcbiAgICAgIGV2ZW50cyA9IHJlc29sdmUoZXZlbnRzLCBjb250ZXh0KVxuICAgICAgY2FsbGVkLnB1c2gocmVzb2x2ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXZlbnRzXG59XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ29kZX0gQ29kZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Db25zdHJ1Y3R9IENvbnN0cnVjdFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5FdmVudH0gRXZlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuUG9pbnR9IFBvaW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlJlc29sdmVyfSBSZXNvbHZlclxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW59IFRva2VuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplQ29udGV4dH0gVG9rZW5pemVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplcn0gVG9rZW5pemVyXG4gKi9cblxuaW1wb3J0IHtwdXNoLCBzcGxpY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNodW5rZWQnXG5pbXBvcnQge2NsYXNzaWZ5Q2hhcmFjdGVyfSBmcm9tICdtaWNyb21hcmstdXRpbC1jbGFzc2lmeS1jaGFyYWN0ZXInXG5pbXBvcnQge3Jlc29sdmVBbGx9IGZyb20gJ21pY3JvbWFyay11dGlsLXJlc29sdmUtYWxsJ1xuLyoqIEB0eXBlIHtDb25zdHJ1Y3R9ICovXG5leHBvcnQgY29uc3QgYXR0ZW50aW9uID0ge1xuICBuYW1lOiAnYXR0ZW50aW9uJyxcbiAgdG9rZW5pemU6IHRva2VuaXplQXR0ZW50aW9uLFxuICByZXNvbHZlQWxsOiByZXNvbHZlQWxsQXR0ZW50aW9uXG59XG5cbi8qKlxuICogVGFrZSBhbGwgZXZlbnRzIGFuZCByZXNvbHZlIGF0dGVudGlvbiB0byBlbXBoYXNpcyBvciBzdHJvbmcuXG4gKlxuICogQHR5cGUge1Jlc29sdmVyfVxuICovXG5mdW5jdGlvbiByZXNvbHZlQWxsQXR0ZW50aW9uKGV2ZW50cywgY29udGV4dCkge1xuICBsZXQgaW5kZXggPSAtMVxuICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgbGV0IG9wZW5cbiAgLyoqIEB0eXBlIHtUb2tlbn0gKi9cbiAgbGV0IGdyb3VwXG4gIC8qKiBAdHlwZSB7VG9rZW59ICovXG4gIGxldCB0ZXh0XG4gIC8qKiBAdHlwZSB7VG9rZW59ICovXG4gIGxldCBvcGVuaW5nU2VxdWVuY2VcbiAgLyoqIEB0eXBlIHtUb2tlbn0gKi9cbiAgbGV0IGNsb3NpbmdTZXF1ZW5jZVxuICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgbGV0IHVzZVxuICAvKiogQHR5cGUge0FycmF5PEV2ZW50Pn0gKi9cbiAgbGV0IG5leHRFdmVudHNcbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gIGxldCBvZmZzZXRcblxuICAvLyBXYWxrIHRocm91Z2ggYWxsIGV2ZW50cy5cbiAgLy9cbiAgLy8gTm90ZTogcGVyZm9ybWFuY2Ugb2YgdGhpcyBpcyBmaW5lIG9uIGFuIG1iIG9mIG5vcm1hbCBtYXJrZG93biwgYnV0IGl04oCZc1xuICAvLyBhIGJvdHRsZW5lY2sgZm9yIG1hbGljaW91cyBzdHVmZi5cbiAgd2hpbGUgKCsraW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgLy8gRmluZCBhIHRva2VuIHRoYXQgY2FuIGNsb3NlLlxuICAgIGlmIChcbiAgICAgIGV2ZW50c1tpbmRleF1bMF0gPT09ICdlbnRlcicgJiZcbiAgICAgIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2F0dGVudGlvblNlcXVlbmNlJyAmJlxuICAgICAgZXZlbnRzW2luZGV4XVsxXS5fY2xvc2VcbiAgICApIHtcbiAgICAgIG9wZW4gPSBpbmRleFxuXG4gICAgICAvLyBOb3cgd2FsayBiYWNrIHRvIGZpbmQgYW4gb3BlbmVyLlxuICAgICAgd2hpbGUgKG9wZW4tLSkge1xuICAgICAgICAvLyBGaW5kIGEgdG9rZW4gdGhhdCBjYW4gb3BlbiB0aGUgY2xvc2VyLlxuICAgICAgICBpZiAoXG4gICAgICAgICAgZXZlbnRzW29wZW5dWzBdID09PSAnZXhpdCcgJiZcbiAgICAgICAgICBldmVudHNbb3Blbl1bMV0udHlwZSA9PT0gJ2F0dGVudGlvblNlcXVlbmNlJyAmJlxuICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS5fb3BlbiAmJlxuICAgICAgICAgIC8vIElmIHRoZSBtYXJrZXJzIGFyZSB0aGUgc2FtZTpcbiAgICAgICAgICBjb250ZXh0LnNsaWNlU2VyaWFsaXplKGV2ZW50c1tvcGVuXVsxXSkuY2hhckNvZGVBdCgwKSA9PT1cbiAgICAgICAgICAgIGNvbnRleHQuc2xpY2VTZXJpYWxpemUoZXZlbnRzW2luZGV4XVsxXSkuY2hhckNvZGVBdCgwKVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBJZiB0aGUgb3BlbmluZyBjYW4gY2xvc2Ugb3IgdGhlIGNsb3NpbmcgY2FuIG9wZW4sXG4gICAgICAgICAgLy8gYW5kIHRoZSBjbG9zZSBzaXplICppcyBub3QqIGEgbXVsdGlwbGUgb2YgdGhyZWUsXG4gICAgICAgICAgLy8gYnV0IHRoZSBzdW0gb2YgdGhlIG9wZW5pbmcgYW5kIGNsb3Npbmcgc2l6ZSAqaXMqIG11bHRpcGxlIG9mIHRocmVlLFxuICAgICAgICAgIC8vIHRoZW4gZG9u4oCZdCBtYXRjaC5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAoZXZlbnRzW29wZW5dWzFdLl9jbG9zZSB8fCBldmVudHNbaW5kZXhdWzFdLl9vcGVuKSAmJlxuICAgICAgICAgICAgKGV2ZW50c1tpbmRleF1bMV0uZW5kLm9mZnNldCAtIGV2ZW50c1tpbmRleF1bMV0uc3RhcnQub2Zmc2V0KSAlIDMgJiZcbiAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgIChldmVudHNbb3Blbl1bMV0uZW5kLm9mZnNldCAtXG4gICAgICAgICAgICAgICAgZXZlbnRzW29wZW5dWzFdLnN0YXJ0Lm9mZnNldCArXG4gICAgICAgICAgICAgICAgZXZlbnRzW2luZGV4XVsxXS5lbmQub2Zmc2V0IC1cbiAgICAgICAgICAgICAgICBldmVudHNbaW5kZXhdWzFdLnN0YXJ0Lm9mZnNldCkgJVxuICAgICAgICAgICAgICAzXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIE51bWJlciBvZiBtYXJrZXJzIHRvIHVzZSBmcm9tIHRoZSBzZXF1ZW5jZS5cbiAgICAgICAgICB1c2UgPVxuICAgICAgICAgICAgZXZlbnRzW29wZW5dWzFdLmVuZC5vZmZzZXQgLSBldmVudHNbb3Blbl1bMV0uc3RhcnQub2Zmc2V0ID4gMSAmJlxuICAgICAgICAgICAgZXZlbnRzW2luZGV4XVsxXS5lbmQub2Zmc2V0IC0gZXZlbnRzW2luZGV4XVsxXS5zdGFydC5vZmZzZXQgPiAxXG4gICAgICAgICAgICAgID8gMlxuICAgICAgICAgICAgICA6IDFcbiAgICAgICAgICBjb25zdCBzdGFydCA9IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50c1tvcGVuXVsxXS5lbmQpXG4gICAgICAgICAgY29uc3QgZW5kID0gT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRzW2luZGV4XVsxXS5zdGFydClcbiAgICAgICAgICBtb3ZlUG9pbnQoc3RhcnQsIC11c2UpXG4gICAgICAgICAgbW92ZVBvaW50KGVuZCwgdXNlKVxuICAgICAgICAgIG9wZW5pbmdTZXF1ZW5jZSA9IHtcbiAgICAgICAgICAgIHR5cGU6IHVzZSA+IDEgPyAnc3Ryb25nU2VxdWVuY2UnIDogJ2VtcGhhc2lzU2VxdWVuY2UnLFxuICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50c1tvcGVuXVsxXS5lbmQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNsb3NpbmdTZXF1ZW5jZSA9IHtcbiAgICAgICAgICAgIHR5cGU6IHVzZSA+IDEgPyAnc3Ryb25nU2VxdWVuY2UnIDogJ2VtcGhhc2lzU2VxdWVuY2UnLFxuICAgICAgICAgICAgc3RhcnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50c1tpbmRleF1bMV0uc3RhcnQpLFxuICAgICAgICAgICAgZW5kXG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHQgPSB7XG4gICAgICAgICAgICB0eXBlOiB1c2UgPiAxID8gJ3N0cm9uZ1RleHQnIDogJ2VtcGhhc2lzVGV4dCcsXG4gICAgICAgICAgICBzdGFydDogT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRzW29wZW5dWzFdLmVuZCksXG4gICAgICAgICAgICBlbmQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50c1tpbmRleF1bMV0uc3RhcnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGdyb3VwID0ge1xuICAgICAgICAgICAgdHlwZTogdXNlID4gMSA/ICdzdHJvbmcnIDogJ2VtcGhhc2lzJyxcbiAgICAgICAgICAgIHN0YXJ0OiBPYmplY3QuYXNzaWduKHt9LCBvcGVuaW5nU2VxdWVuY2Uuc3RhcnQpLFxuICAgICAgICAgICAgZW5kOiBPYmplY3QuYXNzaWduKHt9LCBjbG9zaW5nU2VxdWVuY2UuZW5kKVxuICAgICAgICAgIH1cbiAgICAgICAgICBldmVudHNbb3Blbl1bMV0uZW5kID0gT2JqZWN0LmFzc2lnbih7fSwgb3BlbmluZ1NlcXVlbmNlLnN0YXJ0KVxuICAgICAgICAgIGV2ZW50c1tpbmRleF1bMV0uc3RhcnQgPSBPYmplY3QuYXNzaWduKHt9LCBjbG9zaW5nU2VxdWVuY2UuZW5kKVxuICAgICAgICAgIG5leHRFdmVudHMgPSBbXVxuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgbWFya2VycyBpbiB0aGUgb3BlbmluZywgYWRkIHRoZW0gYmVmb3JlLlxuICAgICAgICAgIGlmIChldmVudHNbb3Blbl1bMV0uZW5kLm9mZnNldCAtIGV2ZW50c1tvcGVuXVsxXS5zdGFydC5vZmZzZXQpIHtcbiAgICAgICAgICAgIG5leHRFdmVudHMgPSBwdXNoKG5leHRFdmVudHMsIFtcbiAgICAgICAgICAgICAgWydlbnRlcicsIGV2ZW50c1tvcGVuXVsxXSwgY29udGV4dF0sXG4gICAgICAgICAgICAgIFsnZXhpdCcsIGV2ZW50c1tvcGVuXVsxXSwgY29udGV4dF1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gT3BlbmluZy5cbiAgICAgICAgICBuZXh0RXZlbnRzID0gcHVzaChuZXh0RXZlbnRzLCBbXG4gICAgICAgICAgICBbJ2VudGVyJywgZ3JvdXAsIGNvbnRleHRdLFxuICAgICAgICAgICAgWydlbnRlcicsIG9wZW5pbmdTZXF1ZW5jZSwgY29udGV4dF0sXG4gICAgICAgICAgICBbJ2V4aXQnLCBvcGVuaW5nU2VxdWVuY2UsIGNvbnRleHRdLFxuICAgICAgICAgICAgWydlbnRlcicsIHRleHQsIGNvbnRleHRdXG4gICAgICAgICAgXSlcblxuICAgICAgICAgIC8vIEFsd2F5cyBwb3B1bGF0ZWQgYnkgZGVmYXVsdHMuXG5cbiAgICAgICAgICAvLyBCZXR3ZWVuLlxuICAgICAgICAgIG5leHRFdmVudHMgPSBwdXNoKFxuICAgICAgICAgICAgbmV4dEV2ZW50cyxcbiAgICAgICAgICAgIHJlc29sdmVBbGwoXG4gICAgICAgICAgICAgIGNvbnRleHQucGFyc2VyLmNvbnN0cnVjdHMuaW5zaWRlU3Bhbi5udWxsLFxuICAgICAgICAgICAgICBldmVudHMuc2xpY2Uob3BlbiArIDEsIGluZGV4KSxcbiAgICAgICAgICAgICAgY29udGV4dFxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcblxuICAgICAgICAgIC8vIENsb3NpbmcuXG4gICAgICAgICAgbmV4dEV2ZW50cyA9IHB1c2gobmV4dEV2ZW50cywgW1xuICAgICAgICAgICAgWydleGl0JywgdGV4dCwgY29udGV4dF0sXG4gICAgICAgICAgICBbJ2VudGVyJywgY2xvc2luZ1NlcXVlbmNlLCBjb250ZXh0XSxcbiAgICAgICAgICAgIFsnZXhpdCcsIGNsb3NpbmdTZXF1ZW5jZSwgY29udGV4dF0sXG4gICAgICAgICAgICBbJ2V4aXQnLCBncm91cCwgY29udGV4dF1cbiAgICAgICAgICBdKVxuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgbWFya2VycyBpbiB0aGUgY2xvc2luZywgYWRkIHRoZW0gYWZ0ZXIuXG4gICAgICAgICAgaWYgKGV2ZW50c1tpbmRleF1bMV0uZW5kLm9mZnNldCAtIGV2ZW50c1tpbmRleF1bMV0uc3RhcnQub2Zmc2V0KSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAyXG4gICAgICAgICAgICBuZXh0RXZlbnRzID0gcHVzaChuZXh0RXZlbnRzLCBbXG4gICAgICAgICAgICAgIFsnZW50ZXInLCBldmVudHNbaW5kZXhdWzFdLCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydleGl0JywgZXZlbnRzW2luZGV4XVsxXSwgY29udGV4dF1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9mZnNldCA9IDBcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BsaWNlKGV2ZW50cywgb3BlbiAtIDEsIGluZGV4IC0gb3BlbiArIDMsIG5leHRFdmVudHMpXG4gICAgICAgICAgaW5kZXggPSBvcGVuICsgbmV4dEV2ZW50cy5sZW5ndGggLSBvZmZzZXQgLSAyXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJlbW92ZSByZW1haW5pbmcgc2VxdWVuY2VzLlxuICBpbmRleCA9IC0xXG4gIHdoaWxlICgrK2luZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgIGlmIChldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdhdHRlbnRpb25TZXF1ZW5jZScpIHtcbiAgICAgIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9ICdkYXRhJ1xuICAgIH1cbiAgfVxuICByZXR1cm4gZXZlbnRzXG59XG5cbi8qKlxuICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAqIEB0eXBlIHtUb2tlbml6ZXJ9XG4gKi9cbmZ1bmN0aW9uIHRva2VuaXplQXR0ZW50aW9uKGVmZmVjdHMsIG9rKSB7XG4gIGNvbnN0IGF0dGVudGlvbk1hcmtlcnMgPSB0aGlzLnBhcnNlci5jb25zdHJ1Y3RzLmF0dGVudGlvbk1hcmtlcnMubnVsbFxuICBjb25zdCBwcmV2aW91cyA9IHRoaXMucHJldmlvdXNcbiAgY29uc3QgYmVmb3JlID0gY2xhc3NpZnlDaGFyYWN0ZXIocHJldmlvdXMpXG5cbiAgLyoqIEB0eXBlIHtOb25OdWxsYWJsZTxDb2RlPn0gKi9cbiAgbGV0IG1hcmtlclxuICByZXR1cm4gc3RhcnRcblxuICAvKipcbiAgICogQmVmb3JlIGEgc2VxdWVuY2UuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCAqKlxuICAgKiAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIG1hcmtlciA9IGNvZGVcbiAgICBlZmZlY3RzLmVudGVyKCdhdHRlbnRpb25TZXF1ZW5jZScpXG4gICAgcmV0dXJuIGluc2lkZShjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIGEgc2VxdWVuY2UuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCAqKlxuICAgKiAgICAgXl5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGluc2lkZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5zaWRlXG4gICAgfVxuICAgIGNvbnN0IHRva2VuID0gZWZmZWN0cy5leGl0KCdhdHRlbnRpb25TZXF1ZW5jZScpXG5cbiAgICAvLyBUbyBkbzogbmV4dCBtYWpvcjogbW92ZSB0aGlzIHRvIHJlc29sdmVyLCBqdXN0IGxpa2UgYG1hcmtkb3duLXJzYC5cbiAgICBjb25zdCBhZnRlciA9IGNsYXNzaWZ5Q2hhcmFjdGVyKGNvZGUpXG5cbiAgICAvLyBBbHdheXMgcG9wdWxhdGVkIGJ5IGRlZmF1bHRzLlxuXG4gICAgY29uc3Qgb3BlbiA9XG4gICAgICAhYWZ0ZXIgfHwgKGFmdGVyID09PSAyICYmIGJlZm9yZSkgfHwgYXR0ZW50aW9uTWFya2Vycy5pbmNsdWRlcyhjb2RlKVxuICAgIGNvbnN0IGNsb3NlID1cbiAgICAgICFiZWZvcmUgfHwgKGJlZm9yZSA9PT0gMiAmJiBhZnRlcikgfHwgYXR0ZW50aW9uTWFya2Vycy5pbmNsdWRlcyhwcmV2aW91cylcbiAgICB0b2tlbi5fb3BlbiA9IEJvb2xlYW4obWFya2VyID09PSA0MiA/IG9wZW4gOiBvcGVuICYmIChiZWZvcmUgfHwgIWNsb3NlKSlcbiAgICB0b2tlbi5fY2xvc2UgPSBCb29sZWFuKG1hcmtlciA9PT0gNDIgPyBjbG9zZSA6IGNsb3NlICYmIChhZnRlciB8fCAhb3BlbikpXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIGEgcG9pbnQgYSBiaXQuXG4gKlxuICogTm90ZTogYG1vdmVgIG9ubHkgd29ya3MgaW5zaWRlIGxpbmVzISBJdOKAmXMgbm90IHBvc3NpYmxlIHRvIG1vdmUgcGFzdCBvdGhlclxuICogY2h1bmtzIChyZXBsYWNlbWVudCBjaGFyYWN0ZXJzLCB0YWJzLCBvciBsaW5lIGVuZGluZ3MpLlxuICpcbiAqIEBwYXJhbSB7UG9pbnR9IHBvaW50XG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gbW92ZVBvaW50KHBvaW50LCBvZmZzZXQpIHtcbiAgcG9pbnQuY29sdW1uICs9IG9mZnNldFxuICBwb2ludC5vZmZzZXQgKz0gb2Zmc2V0XG4gIHBvaW50Ll9idWZmZXJJbmRleCArPSBvZmZzZXRcbn1cbiIsIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Db25zdHJ1Y3R9IENvbnN0cnVjdFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVDb250ZXh0fSBUb2tlbml6ZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVyfSBUb2tlbml6ZXJcbiAqL1xuXG5pbXBvcnQge1xuICBhc2NpaUFscGhhLFxuICBhc2NpaUFscGhhbnVtZXJpYyxcbiAgYXNjaWlBdGV4dCxcbiAgYXNjaWlDb250cm9sXG59IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3Rlcidcbi8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuZXhwb3J0IGNvbnN0IGF1dG9saW5rID0ge1xuICBuYW1lOiAnYXV0b2xpbmsnLFxuICB0b2tlbml6ZTogdG9rZW5pemVBdXRvbGlua1xufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZUF1dG9saW5rKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgbGV0IHNpemUgPSAwXG4gIHJldHVybiBzdGFydFxuXG4gIC8qKlxuICAgKiBTdGFydCBvZiBhbiBhdXRvbGluay5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGE8aHR0cHM6Ly9leGFtcGxlLmNvbT5iXG4gICAqICAgICAgXlxuICAgKiA+IHwgYTx1c2VyQGV4YW1wbGUuY29tPmJcbiAgICogICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignYXV0b2xpbmsnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2F1dG9saW5rTWFya2VyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2F1dG9saW5rTWFya2VyJylcbiAgICBlZmZlY3RzLmVudGVyKCdhdXRvbGlua1Byb3RvY29sJylcbiAgICByZXR1cm4gb3BlblxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGA8YCwgYXQgcHJvdG9jb2wgb3IgYXRleHQuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhPGh0dHBzOi8vZXhhbXBsZS5jb20+YlxuICAgKiAgICAgICBeXG4gICAqID4gfCBhPHVzZXJAZXhhbXBsZS5jb20+YlxuICAgKiAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBvcGVuKGNvZGUpIHtcbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gc2NoZW1lT3JFbWFpbEF0ZXh0XG4gICAgfVxuICAgIHJldHVybiBlbWFpbEF0ZXh0KGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQXQgc2Vjb25kIGJ5dGUgb2YgcHJvdG9jb2wgb3IgYXRleHQuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhPGh0dHBzOi8vZXhhbXBsZS5jb20+YlxuICAgKiAgICAgICAgXlxuICAgKiA+IHwgYTx1c2VyQGV4YW1wbGUuY29tPmJcbiAgICogICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHNjaGVtZU9yRW1haWxBdGV4dChjb2RlKSB7XG4gICAgLy8gQVNDSUkgYWxwaGFudW1lcmljIGFuZCBgK2AsIGAtYCwgYW5kIGAuYC5cbiAgICBpZiAoY29kZSA9PT0gNDMgfHwgY29kZSA9PT0gNDUgfHwgY29kZSA9PT0gNDYgfHwgYXNjaWlBbHBoYW51bWVyaWMoY29kZSkpIHtcbiAgICAgIC8vIENvdW50IHRoZSBwcmV2aW91cyBhbHBoYWJldGljYWwgZnJvbSBgb3BlbmAgdG9vLlxuICAgICAgc2l6ZSA9IDFcbiAgICAgIHJldHVybiBzY2hlbWVJbnNpZGVPckVtYWlsQXRleHQoY29kZSlcbiAgICB9XG4gICAgcmV0dXJuIGVtYWlsQXRleHQoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBhbWJpZ3VvdXMgcHJvdG9jb2wgb3IgYXRleHQuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhPGh0dHBzOi8vZXhhbXBsZS5jb20+YlxuICAgKiAgICAgICAgXlxuICAgKiA+IHwgYTx1c2VyQGV4YW1wbGUuY29tPmJcbiAgICogICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHNjaGVtZUluc2lkZU9yRW1haWxBdGV4dChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDU4KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHNpemUgPSAwXG4gICAgICByZXR1cm4gdXJsSW5zaWRlXG4gICAgfVxuXG4gICAgLy8gQVNDSUkgYWxwaGFudW1lcmljIGFuZCBgK2AsIGAtYCwgYW5kIGAuYC5cbiAgICBpZiAoXG4gICAgICAoY29kZSA9PT0gNDMgfHwgY29kZSA9PT0gNDUgfHwgY29kZSA9PT0gNDYgfHwgYXNjaWlBbHBoYW51bWVyaWMoY29kZSkpICYmXG4gICAgICBzaXplKysgPCAzMlxuICAgICkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gc2NoZW1lSW5zaWRlT3JFbWFpbEF0ZXh0XG4gICAgfVxuICAgIHNpemUgPSAwXG4gICAgcmV0dXJuIGVtYWlsQXRleHQoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBwcm90b2NvbCwgaW4gVVJMLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYTxodHRwczovL2V4YW1wbGUuY29tPmJcbiAgICogICAgICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gdXJsSW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjIpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnYXV0b2xpbmtQcm90b2NvbCcpXG4gICAgICBlZmZlY3RzLmVudGVyKCdhdXRvbGlua01hcmtlcicpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnYXV0b2xpbmtNYXJrZXInKVxuICAgICAgZWZmZWN0cy5leGl0KCdhdXRvbGluaycpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG5cbiAgICAvLyBBU0NJSSBjb250cm9sLCBzcGFjZSwgb3IgYDxgLlxuICAgIGlmIChjb2RlID09PSBudWxsIHx8IGNvZGUgPT09IDMyIHx8IGNvZGUgPT09IDYwIHx8IGFzY2lpQ29udHJvbChjb2RlKSkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gdXJsSW5zaWRlXG4gIH1cblxuICAvKipcbiAgICogSW4gZW1haWwgYXRleHQuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhPHVzZXIubmFtZUBleGFtcGxlLmNvbT5iXG4gICAqICAgICAgICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBlbWFpbEF0ZXh0KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjQpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGVtYWlsQXRTaWduT3JEb3RcbiAgICB9XG4gICAgaWYgKGFzY2lpQXRleHQoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGVtYWlsQXRleHRcbiAgICB9XG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIGxhYmVsLCBhZnRlciBhdC1zaWduIG9yIGRvdC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGE8dXNlci5uYW1lQGV4YW1wbGUuY29tPmJcbiAgICogICAgICAgICAgICAgICAgIF4gICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gZW1haWxBdFNpZ25PckRvdChjb2RlKSB7XG4gICAgcmV0dXJuIGFzY2lpQWxwaGFudW1lcmljKGNvZGUpID8gZW1haWxMYWJlbChjb2RlKSA6IG5vayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIGxhYmVsLCB3aGVyZSBgLmAgYW5kIGA+YCBhcmUgYWxsb3dlZC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGE8dXNlci5uYW1lQGV4YW1wbGUuY29tPmJcbiAgICogICAgICAgICAgICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gZW1haWxMYWJlbChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ2KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHNpemUgPSAwXG4gICAgICByZXR1cm4gZW1haWxBdFNpZ25PckRvdFxuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNjIpIHtcbiAgICAgIC8vIEV4aXQsIHRoZW4gY2hhbmdlIHRoZSB0b2tlbiB0eXBlLlxuICAgICAgZWZmZWN0cy5leGl0KCdhdXRvbGlua1Byb3RvY29sJykudHlwZSA9ICdhdXRvbGlua0VtYWlsJ1xuICAgICAgZWZmZWN0cy5lbnRlcignYXV0b2xpbmtNYXJrZXInKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2F1dG9saW5rTWFya2VyJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnYXV0b2xpbmsnKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuICAgIHJldHVybiBlbWFpbFZhbHVlKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gbGFiZWwsIHdoZXJlIGAuYCBhbmQgYD5gIGFyZSAqbm90KiBhbGxvd2VkLlxuICAgKlxuICAgKiBUaG91Z2gsIHRoaXMgaXMgYWxzbyB1c2VkIGluIGBlbWFpbExhYmVsYCB0byBwYXJzZSBvdGhlciB2YWx1ZXMuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhPHVzZXIubmFtZUBleC1hbXBsZS5jb20+YlxuICAgKiAgICAgICAgICAgICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gZW1haWxWYWx1ZShjb2RlKSB7XG4gICAgLy8gQVNDSUkgYWxwaGFudW1lcmljIG9yIGAtYC5cbiAgICBpZiAoKGNvZGUgPT09IDQ1IHx8IGFzY2lpQWxwaGFudW1lcmljKGNvZGUpKSAmJiBzaXplKysgPCA2Mykge1xuICAgICAgY29uc3QgbmV4dCA9IGNvZGUgPT09IDQ1ID8gZW1haWxWYWx1ZSA6IGVtYWlsTGFiZWxcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIG5leHRcbiAgICB9XG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ29uc3RydWN0fSBDb25zdHJ1Y3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplQ29udGV4dH0gVG9rZW5pemVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplcn0gVG9rZW5pemVyXG4gKi9cblxuaW1wb3J0IHtmYWN0b3J5U3BhY2V9IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LXNwYWNlJ1xuaW1wb3J0IHttYXJrZG93bkxpbmVFbmRpbmcsIG1hcmtkb3duU3BhY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3Rlcidcbi8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuZXhwb3J0IGNvbnN0IGJsYW5rTGluZSA9IHtcbiAgdG9rZW5pemU6IHRva2VuaXplQmxhbmtMaW5lLFxuICBwYXJ0aWFsOiB0cnVlXG59XG5cbi8qKlxuICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAqIEB0eXBlIHtUb2tlbml6ZXJ9XG4gKi9cbmZ1bmN0aW9uIHRva2VuaXplQmxhbmtMaW5lKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgLyoqXG4gICAqIFN0YXJ0IG9mIGJsYW5rIGxpbmUuXG4gICAqXG4gICAqID4g8J+RiSAqKk5vdGUqKjogYOKQoGAgcmVwcmVzZW50cyBhIHNwYWNlIGNoYXJhY3Rlci5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IOKQoOKQoOKQilxuICAgKiAgICAgXlxuICAgKiA+IHwg4pCKXG4gICAqICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgcmV0dXJuIG1hcmtkb3duU3BhY2UoY29kZSlcbiAgICAgID8gZmFjdG9yeVNwYWNlKGVmZmVjdHMsIGFmdGVyLCAnbGluZVByZWZpeCcpKGNvZGUpXG4gICAgICA6IGFmdGVyKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQXQgZW9mL2VvbCwgYWZ0ZXIgb3B0aW9uYWwgd2hpdGVzcGFjZS5cbiAgICpcbiAgICogPiDwn5GJICoqTm90ZSoqOiBg4pCgYCByZXByZXNlbnRzIGEgc3BhY2UgY2hhcmFjdGVyLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwg4pCg4pCg4pCKXG4gICAqICAgICAgIF5cbiAgICogPiB8IOKQilxuICAgKiAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gYWZ0ZXIoY29kZSkge1xuICAgIHJldHVybiBjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSA/IG9rKGNvZGUpIDogbm9rKGNvZGUpXG4gIH1cbn1cbiIsIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Db25zdHJ1Y3R9IENvbnN0cnVjdFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5FeGl0ZXJ9IEV4aXRlclxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVDb250ZXh0fSBUb2tlbml6ZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVyfSBUb2tlbml6ZXJcbiAqL1xuXG5pbXBvcnQge2ZhY3RvcnlTcGFjZX0gZnJvbSAnbWljcm9tYXJrLWZhY3Rvcnktc3BhY2UnXG5pbXBvcnQge21hcmtkb3duU3BhY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3Rlcidcbi8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuZXhwb3J0IGNvbnN0IGJsb2NrUXVvdGUgPSB7XG4gIG5hbWU6ICdibG9ja1F1b3RlJyxcbiAgdG9rZW5pemU6IHRva2VuaXplQmxvY2tRdW90ZVN0YXJ0LFxuICBjb250aW51YXRpb246IHtcbiAgICB0b2tlbml6ZTogdG9rZW5pemVCbG9ja1F1b3RlQ29udGludWF0aW9uXG4gIH0sXG4gIGV4aXRcbn1cblxuLyoqXG4gKiBAdGhpcyB7VG9rZW5pemVDb250ZXh0fVxuICogQHR5cGUge1Rva2VuaXplcn1cbiAqL1xuZnVuY3Rpb24gdG9rZW5pemVCbG9ja1F1b3RlU3RhcnQoZWZmZWN0cywgb2ssIG5vaykge1xuICBjb25zdCBzZWxmID0gdGhpc1xuICByZXR1cm4gc3RhcnRcblxuICAvKipcbiAgICogU3RhcnQgb2YgYmxvY2sgcXVvdGUuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA+IGFcbiAgICogICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjIpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gc2VsZi5jb250YWluZXJTdGF0ZVxuICAgICAgaWYgKCFzdGF0ZS5vcGVuKSB7XG4gICAgICAgIGVmZmVjdHMuZW50ZXIoJ2Jsb2NrUXVvdGUnLCB7XG4gICAgICAgICAgX2NvbnRhaW5lcjogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBzdGF0ZS5vcGVuID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWZmZWN0cy5lbnRlcignYmxvY2tRdW90ZVByZWZpeCcpXG4gICAgICBlZmZlY3RzLmVudGVyKCdibG9ja1F1b3RlTWFya2VyJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdibG9ja1F1b3RlTWFya2VyJylcbiAgICAgIHJldHVybiBhZnRlclxuICAgIH1cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgYD5gLCBiZWZvcmUgb3B0aW9uYWwgd2hpdGVzcGFjZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8ID4gYVxuICAgKiAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignYmxvY2tRdW90ZVByZWZpeFdoaXRlc3BhY2UnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2Jsb2NrUXVvdGVQcmVmaXhXaGl0ZXNwYWNlJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnYmxvY2tRdW90ZVByZWZpeCcpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG4gICAgZWZmZWN0cy5leGl0KCdibG9ja1F1b3RlUHJlZml4JylcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuXG4vKipcbiAqIFN0YXJ0IG9mIGJsb2NrIHF1b3RlIGNvbnRpbnVhdGlvbi5cbiAqXG4gKiBgYGBtYXJrZG93blxuICogICB8ID4gYVxuICogPiB8ID4gYlxuICogICAgIF5cbiAqIGBgYFxuICpcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZUJsb2NrUXVvdGVDb250aW51YXRpb24oZWZmZWN0cywgb2ssIG5vaykge1xuICBjb25zdCBzZWxmID0gdGhpc1xuICByZXR1cm4gY29udFN0YXJ0XG5cbiAgLyoqXG4gICAqIFN0YXJ0IG9mIGJsb2NrIHF1b3RlIGNvbnRpbnVhdGlvbi5cbiAgICpcbiAgICogQWxzbyB1c2VkIHRvIHBhcnNlIHRoZSBmaXJzdCBibG9jayBxdW90ZSBvcGVuaW5nLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiAgIHwgPiBhXG4gICAqID4gfCA+IGJcbiAgICogICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbnRTdGFydChjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIC8vIEFsd2F5cyBwb3B1bGF0ZWQgYnkgZGVmYXVsdHMuXG5cbiAgICAgIHJldHVybiBmYWN0b3J5U3BhY2UoXG4gICAgICAgIGVmZmVjdHMsXG4gICAgICAgIGNvbnRCZWZvcmUsXG4gICAgICAgICdsaW5lUHJlZml4JyxcbiAgICAgICAgc2VsZi5wYXJzZXIuY29uc3RydWN0cy5kaXNhYmxlLm51bGwuaW5jbHVkZXMoJ2NvZGVJbmRlbnRlZCcpXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IDRcbiAgICAgICkoY29kZSlcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRCZWZvcmUoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBdCBgPmAsIGFmdGVyIG9wdGlvbmFsIHdoaXRlc3BhY2UuXG4gICAqXG4gICAqIEFsc28gdXNlZCB0byBwYXJzZSB0aGUgZmlyc3QgYmxvY2sgcXVvdGUgb3BlbmluZy5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogICB8ID4gYVxuICAgKiA+IHwgPiBiXG4gICAqICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjb250QmVmb3JlKGNvZGUpIHtcbiAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KGJsb2NrUXVvdGUsIG9rLCBub2spKGNvZGUpXG4gIH1cbn1cblxuLyoqIEB0eXBlIHtFeGl0ZXJ9ICovXG5mdW5jdGlvbiBleGl0KGVmZmVjdHMpIHtcbiAgZWZmZWN0cy5leGl0KCdibG9ja1F1b3RlJylcbn1cbiIsIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Db25zdHJ1Y3R9IENvbnN0cnVjdFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVDb250ZXh0fSBUb2tlbml6ZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVyfSBUb2tlbml6ZXJcbiAqL1xuXG5pbXBvcnQge2FzY2lpUHVuY3R1YXRpb259IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3Rlcidcbi8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuZXhwb3J0IGNvbnN0IGNoYXJhY3RlckVzY2FwZSA9IHtcbiAgbmFtZTogJ2NoYXJhY3RlckVzY2FwZScsXG4gIHRva2VuaXplOiB0b2tlbml6ZUNoYXJhY3RlckVzY2FwZVxufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZUNoYXJhY3RlckVzY2FwZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIC8qKlxuICAgKiBTdGFydCBvZiBjaGFyYWN0ZXIgZXNjYXBlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYVxcKmJcbiAgICogICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignY2hhcmFjdGVyRXNjYXBlJylcbiAgICBlZmZlY3RzLmVudGVyKCdlc2NhcGVNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnZXNjYXBlTWFya2VyJylcbiAgICByZXR1cm4gaW5zaWRlXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgYFxcYCwgYXQgcHVuY3R1YXRpb24uXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhXFwqYlxuICAgKiAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBpbnNpZGUoY29kZSkge1xuICAgIC8vIEFTQ0lJIHB1bmN0dWF0aW9uLlxuICAgIGlmIChhc2NpaVB1bmN0dWF0aW9uKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJFc2NhcGVWYWx1ZScpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2hhcmFjdGVyRXNjYXBlVmFsdWUnKVxuICAgICAgZWZmZWN0cy5leGl0KCdjaGFyYWN0ZXJFc2NhcGUnKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuIiwiLy8vIDxyZWZlcmVuY2UgbGliPVwiZG9tXCIgLz5cblxuLyogZ2xvYmFsIGRvY3VtZW50ICovXG5cbmNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtzdHJpbmcgfCBmYWxzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZU5hbWVkQ2hhcmFjdGVyUmVmZXJlbmNlKHZhbHVlKSB7XG4gIGNvbnN0IGNoYXJhY3RlclJlZmVyZW5jZSA9ICcmJyArIHZhbHVlICsgJzsnXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gY2hhcmFjdGVyUmVmZXJlbmNlXG4gIGNvbnN0IGNoYXJhY3RlciA9IGVsZW1lbnQudGV4dENvbnRlbnRcblxuICAvLyBTb21lIG5hbWVkIGNoYXJhY3RlciByZWZlcmVuY2VzIGRvIG5vdCByZXF1aXJlIHRoZSBjbG9zaW5nIHNlbWljb2xvblxuICAvLyAoYCZub3RgLCBmb3IgaW5zdGFuY2UpLCB3aGljaCBsZWFkcyB0byBzaXR1YXRpb25zIHdoZXJlIHBhcnNpbmcgdGhlIGFzc3VtZWRcbiAgLy8gbmFtZWQgcmVmZXJlbmNlIG9mIGAmbm90aXQ7YCB3aWxsIHJlc3VsdCBpbiB0aGUgc3RyaW5nIGDCrGl0O2AuXG4gIC8vIFdoZW4gd2UgZW5jb3VudGVyIGEgdHJhaWxpbmcgc2VtaWNvbG9uIGFmdGVyIHBhcnNpbmcsIGFuZCB0aGUgY2hhcmFjdGVyXG4gIC8vIHJlZmVyZW5jZSB0byBkZWNvZGUgd2FzIG5vdCBhIHNlbWljb2xvbiAoYCZzZW1pO2ApLCB3ZSBjYW4gYXNzdW1lIHRoYXQgdGhlXG4gIC8vIG1hdGNoaW5nIHdhcyBub3QgY29tcGxldGUuXG4gIGlmIChcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBUeXBlU2NyaXB0IGlzIHdyb25nIHRoYXQgYHRleHRDb250ZW50YCBvbiBlbGVtZW50cyBjYW5cbiAgICAvLyB5aWVsZCBgbnVsbGAuXG4gICAgY2hhcmFjdGVyLmNoYXJDb2RlQXQoY2hhcmFjdGVyLmxlbmd0aCAtIDEpID09PSA1OSAvKiBgO2AgKi8gJiZcbiAgICB2YWx1ZSAhPT0gJ3NlbWknXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gSWYgdGhlIGRlY29kZWQgc3RyaW5nIGlzIGVxdWFsIHRvIHRoZSBpbnB1dCwgdGhlIGNoYXJhY3RlciByZWZlcmVuY2Ugd2FzXG4gIC8vIG5vdCB2YWxpZC5cbiAgLy8gQHRzLWV4cGVjdC1lcnJvcjogVHlwZVNjcmlwdCBpcyB3cm9uZyB0aGF0IGB0ZXh0Q29udGVudGAgb24gZWxlbWVudHMgY2FuXG4gIC8vIHlpZWxkIGBudWxsYC5cbiAgcmV0dXJuIGNoYXJhY3RlciA9PT0gY2hhcmFjdGVyUmVmZXJlbmNlID8gZmFsc2UgOiBjaGFyYWN0ZXJcbn1cbiIsIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Db2RlfSBDb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvbnN0cnVjdH0gQ29uc3RydWN0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlN0YXRlfSBTdGF0ZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZUNvbnRleHR9IFRva2VuaXplQ29udGV4dFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZXJ9IFRva2VuaXplclxuICovXG5cbmltcG9ydCB7ZGVjb2RlTmFtZWRDaGFyYWN0ZXJSZWZlcmVuY2V9IGZyb20gJ2RlY29kZS1uYW1lZC1jaGFyYWN0ZXItcmVmZXJlbmNlJ1xuaW1wb3J0IHtcbiAgYXNjaWlBbHBoYW51bWVyaWMsXG4gIGFzY2lpRGlnaXQsXG4gIGFzY2lpSGV4RGlnaXRcbn0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyJ1xuLyoqIEB0eXBlIHtDb25zdHJ1Y3R9ICovXG5leHBvcnQgY29uc3QgY2hhcmFjdGVyUmVmZXJlbmNlID0ge1xuICBuYW1lOiAnY2hhcmFjdGVyUmVmZXJlbmNlJyxcbiAgdG9rZW5pemU6IHRva2VuaXplQ2hhcmFjdGVyUmVmZXJlbmNlXG59XG5cbi8qKlxuICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAqIEB0eXBlIHtUb2tlbml6ZXJ9XG4gKi9cbmZ1bmN0aW9uIHRva2VuaXplQ2hhcmFjdGVyUmVmZXJlbmNlKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgbGV0IHNpemUgPSAwXG4gIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICBsZXQgbWF4XG4gIC8qKiBAdHlwZSB7KGNvZGU6IENvZGUpID0+IGJvb2xlYW59ICovXG4gIGxldCB0ZXN0XG4gIHJldHVybiBzdGFydFxuXG4gIC8qKlxuICAgKiBTdGFydCBvZiBjaGFyYWN0ZXIgcmVmZXJlbmNlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYSZhbXA7YlxuICAgKiAgICAgIF5cbiAgICogPiB8IGEmIzEyMztiXG4gICAqICAgICAgXlxuICAgKiA+IHwgYSYjeDk7YlxuICAgKiAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJSZWZlcmVuY2UnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2NoYXJhY3RlclJlZmVyZW5jZU1hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXInKVxuICAgIHJldHVybiBvcGVuXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgYCZgLCBhdCBgI2AgZm9yIG51bWVyaWMgcmVmZXJlbmNlcyBvciBhbHBoYW51bWVyaWMgZm9yIG5hbWVkXG4gICAqIHJlZmVyZW5jZXMuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhJmFtcDtiXG4gICAqICAgICAgIF5cbiAgICogPiB8IGEmIzEyMztiXG4gICAqICAgICAgIF5cbiAgICogPiB8IGEmI3g5O2JcbiAgICogICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDM1KSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJOdW1lcmljJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJOdW1lcmljJylcbiAgICAgIHJldHVybiBudW1lcmljXG4gICAgfVxuICAgIGVmZmVjdHMuZW50ZXIoJ2NoYXJhY3RlclJlZmVyZW5jZVZhbHVlJylcbiAgICBtYXggPSAzMVxuICAgIHRlc3QgPSBhc2NpaUFscGhhbnVtZXJpY1xuICAgIHJldHVybiB2YWx1ZShjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGAjYCwgYXQgYHhgIGZvciBoZXhhZGVjaW1hbHMgb3IgZGlnaXQgZm9yIGRlY2ltYWxzLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYSYjMTIzO2JcbiAgICogICAgICAgIF5cbiAgICogPiB8IGEmI3g5O2JcbiAgICogICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIG51bWVyaWMoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA4OCB8fCBjb2RlID09PSAxMjApIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2NoYXJhY3RlclJlZmVyZW5jZU1hcmtlckhleGFkZWNpbWFsJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJIZXhhZGVjaW1hbCcpXG4gICAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJSZWZlcmVuY2VWYWx1ZScpXG4gICAgICBtYXggPSA2XG4gICAgICB0ZXN0ID0gYXNjaWlIZXhEaWdpdFxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuICAgIGVmZmVjdHMuZW50ZXIoJ2NoYXJhY3RlclJlZmVyZW5jZVZhbHVlJylcbiAgICBtYXggPSA3XG4gICAgdGVzdCA9IGFzY2lpRGlnaXRcbiAgICByZXR1cm4gdmFsdWUoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBtYXJrZXJzIChgJiN4YCwgYCYjYCwgb3IgYCZgKSwgaW4gdmFsdWUsIGJlZm9yZSBgO2AuXG4gICAqXG4gICAqIFRoZSBjaGFyYWN0ZXIgcmVmZXJlbmNlIGtpbmQgZGVmaW5lcyB3aGF0IGFuZCBob3cgbWFueSBjaGFyYWN0ZXJzIGFyZVxuICAgKiBhbGxvd2VkLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYSZhbXA7YlxuICAgKiAgICAgICBeXl5cbiAgICogPiB8IGEmIzEyMztiXG4gICAqICAgICAgICBeXl5cbiAgICogPiB8IGEmI3g5O2JcbiAgICogICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiB2YWx1ZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDU5ICYmIHNpemUpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gZWZmZWN0cy5leGl0KCdjaGFyYWN0ZXJSZWZlcmVuY2VWYWx1ZScpXG4gICAgICBpZiAoXG4gICAgICAgIHRlc3QgPT09IGFzY2lpQWxwaGFudW1lcmljICYmXG4gICAgICAgICFkZWNvZGVOYW1lZENoYXJhY3RlclJlZmVyZW5jZShzZWxmLnNsaWNlU2VyaWFsaXplKHRva2VuKSlcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGRvOiBgbWFya2Rvd24tcnNgIHVzZXMgYSBkaWZmZXJlbnQgbmFtZTpcbiAgICAgIC8vIGBDaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJTZW1pYC5cbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2NoYXJhY3RlclJlZmVyZW5jZU1hcmtlcicpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VyJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2hhcmFjdGVyUmVmZXJlbmNlJylcbiAgICAgIHJldHVybiBva1xuICAgIH1cbiAgICBpZiAodGVzdChjb2RlKSAmJiBzaXplKysgPCBtYXgpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuIiwiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvZGV9IENvZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ29uc3RydWN0fSBDb25zdHJ1Y3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplQ29udGV4dH0gVG9rZW5pemVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplcn0gVG9rZW5pemVyXG4gKi9cblxuaW1wb3J0IHtmYWN0b3J5U3BhY2V9IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LXNwYWNlJ1xuaW1wb3J0IHttYXJrZG93bkxpbmVFbmRpbmcsIG1hcmtkb3duU3BhY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3Rlcidcbi8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuY29uc3Qgbm9uTGF6eUNvbnRpbnVhdGlvbiA9IHtcbiAgdG9rZW5pemU6IHRva2VuaXplTm9uTGF6eUNvbnRpbnVhdGlvbixcbiAgcGFydGlhbDogdHJ1ZVxufVxuXG4vKiogQHR5cGUge0NvbnN0cnVjdH0gKi9cbmV4cG9ydCBjb25zdCBjb2RlRmVuY2VkID0ge1xuICBuYW1lOiAnY29kZUZlbmNlZCcsXG4gIHRva2VuaXplOiB0b2tlbml6ZUNvZGVGZW5jZWQsXG4gIGNvbmNyZXRlOiB0cnVlXG59XG5cbi8qKlxuICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAqIEB0eXBlIHtUb2tlbml6ZXJ9XG4gKi9cbmZ1bmN0aW9uIHRva2VuaXplQ29kZUZlbmNlZChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzXG4gIC8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuICBjb25zdCBjbG9zZVN0YXJ0ID0ge1xuICAgIHRva2VuaXplOiB0b2tlbml6ZUNsb3NlU3RhcnQsXG4gICAgcGFydGlhbDogdHJ1ZVxuICB9XG4gIGxldCBpbml0aWFsUHJlZml4ID0gMFxuICBsZXQgc2l6ZU9wZW4gPSAwXG4gIC8qKiBAdHlwZSB7Tm9uTnVsbGFibGU8Q29kZT59ICovXG4gIGxldCBtYXJrZXJcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgLyoqXG4gICAqIFN0YXJ0IG9mIGNvZGUuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCB+fn5qc1xuICAgKiAgICAgXlxuICAgKiAgIHwgYWxlcnQoMSlcbiAgICogICB8IH5+flxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIC8vIFRvIGRvOiBwYXJzZSB3aGl0ZXNwYWNlIGxpa2UgYG1hcmtkb3duLXJzYC5cbiAgICByZXR1cm4gYmVmb3JlU2VxdWVuY2VPcGVuKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gb3BlbmluZyBmZW5jZSwgYWZ0ZXIgcHJlZml4LCBhdCBzZXF1ZW5jZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IH5+fmpzXG4gICAqICAgICBeXG4gICAqICAgfCBhbGVydCgxKVxuICAgKiAgIHwgfn5+XG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBiZWZvcmVTZXF1ZW5jZU9wZW4oY29kZSkge1xuICAgIGNvbnN0IHRhaWwgPSBzZWxmLmV2ZW50c1tzZWxmLmV2ZW50cy5sZW5ndGggLSAxXVxuICAgIGluaXRpYWxQcmVmaXggPVxuICAgICAgdGFpbCAmJiB0YWlsWzFdLnR5cGUgPT09ICdsaW5lUHJlZml4J1xuICAgICAgICA/IHRhaWxbMl0uc2xpY2VTZXJpYWxpemUodGFpbFsxXSwgdHJ1ZSkubGVuZ3RoXG4gICAgICAgIDogMFxuICAgIG1hcmtlciA9IGNvZGVcbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlRmVuY2VkJylcbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlRmVuY2VkRmVuY2UnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2NvZGVGZW5jZWRGZW5jZVNlcXVlbmNlJylcbiAgICByZXR1cm4gc2VxdWVuY2VPcGVuKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gb3BlbmluZyBmZW5jZSBzZXF1ZW5jZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IH5+fmpzXG4gICAqICAgICAgXlxuICAgKiAgIHwgYWxlcnQoMSlcbiAgICogICB8IH5+flxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gc2VxdWVuY2VPcGVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBzaXplT3BlbisrXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBzZXF1ZW5jZU9wZW5cbiAgICB9XG4gICAgaWYgKHNpemVPcGVuIDwgMykge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cbiAgICBlZmZlY3RzLmV4aXQoJ2NvZGVGZW5jZWRGZW5jZVNlcXVlbmNlJylcbiAgICByZXR1cm4gbWFya2Rvd25TcGFjZShjb2RlKVxuICAgICAgPyBmYWN0b3J5U3BhY2UoZWZmZWN0cywgaW5mb0JlZm9yZSwgJ3doaXRlc3BhY2UnKShjb2RlKVxuICAgICAgOiBpbmZvQmVmb3JlKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gb3BlbmluZyBmZW5jZSwgYWZ0ZXIgdGhlIHNlcXVlbmNlIChhbmQgb3B0aW9uYWwgd2hpdGVzcGFjZSksIGJlZm9yZSBpbmZvLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgfn5+anNcbiAgICogICAgICAgIF5cbiAgICogICB8IGFsZXJ0KDEpXG4gICAqICAgfCB+fn5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGluZm9CZWZvcmUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KCdjb2RlRmVuY2VkRmVuY2UnKVxuICAgICAgcmV0dXJuIHNlbGYuaW50ZXJydXB0XG4gICAgICAgID8gb2soY29kZSlcbiAgICAgICAgOiBlZmZlY3RzLmNoZWNrKG5vbkxhenlDb250aW51YXRpb24sIGF0Tm9uTGF6eUJyZWFrLCBhZnRlcikoY29kZSlcbiAgICB9XG4gICAgZWZmZWN0cy5lbnRlcignY29kZUZlbmNlZEZlbmNlSW5mbycpXG4gICAgZWZmZWN0cy5lbnRlcignY2h1bmtTdHJpbmcnLCB7XG4gICAgICBjb250ZW50VHlwZTogJ3N0cmluZydcbiAgICB9KVxuICAgIHJldHVybiBpbmZvKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gaW5mby5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IH5+fmpzXG4gICAqICAgICAgICBeXG4gICAqICAgfCBhbGVydCgxKVxuICAgKiAgIHwgfn5+XG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBpbmZvKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2h1bmtTdHJpbmcnKVxuICAgICAgZWZmZWN0cy5leGl0KCdjb2RlRmVuY2VkRmVuY2VJbmZvJylcbiAgICAgIHJldHVybiBpbmZvQmVmb3JlKGNvZGUpXG4gICAgfVxuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NodW5rU3RyaW5nJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnY29kZUZlbmNlZEZlbmNlSW5mbycpXG4gICAgICByZXR1cm4gZmFjdG9yeVNwYWNlKGVmZmVjdHMsIG1ldGFCZWZvcmUsICd3aGl0ZXNwYWNlJykoY29kZSlcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDk2ICYmIGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gaW5mb1xuICB9XG5cbiAgLyoqXG4gICAqIEluIG9wZW5pbmcgZmVuY2UsIGFmdGVyIGluZm8gYW5kIHdoaXRlc3BhY2UsIGJlZm9yZSBtZXRhLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgfn5+anMgZXZhbFxuICAgKiAgICAgICAgICAgXlxuICAgKiAgIHwgYWxlcnQoMSlcbiAgICogICB8IH5+flxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gbWV0YUJlZm9yZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm4gaW5mb0JlZm9yZShjb2RlKVxuICAgIH1cbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlRmVuY2VkRmVuY2VNZXRhJylcbiAgICBlZmZlY3RzLmVudGVyKCdjaHVua1N0cmluZycsIHtcbiAgICAgIGNvbnRlbnRUeXBlOiAnc3RyaW5nJ1xuICAgIH0pXG4gICAgcmV0dXJuIG1ldGEoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBtZXRhLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgfn5+anMgZXZhbFxuICAgKiAgICAgICAgICAgXlxuICAgKiAgIHwgYWxlcnQoMSlcbiAgICogICB8IH5+flxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gbWV0YShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NodW5rU3RyaW5nJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnY29kZUZlbmNlZEZlbmNlTWV0YScpXG4gICAgICByZXR1cm4gaW5mb0JlZm9yZShjb2RlKVxuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gOTYgJiYgY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBtZXRhXG4gIH1cblxuICAvKipcbiAgICogQXQgZW9sL2VvZiBpbiBjb2RlLCBiZWZvcmUgYSBub24tbGF6eSBjbG9zaW5nIGZlbmNlIG9yIGNvbnRlbnQuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCB+fn5qc1xuICAgKiAgICAgICAgICBeXG4gICAqID4gfCBhbGVydCgxKVxuICAgKiAgICAgICAgICAgICBeXG4gICAqICAgfCB+fn5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGF0Tm9uTGF6eUJyZWFrKGNvZGUpIHtcbiAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KGNsb3NlU3RhcnQsIGFmdGVyLCBjb250ZW50QmVmb3JlKShjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEJlZm9yZSBjb2RlIGNvbnRlbnQsIG5vdCBhIGNsb3NpbmcgZmVuY2UsIGF0IGVvbC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogICB8IH5+fmpzXG4gICAqID4gfCBhbGVydCgxKVxuICAgKiAgICAgICAgICAgICBeXG4gICAqICAgfCB+fn5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbnRlbnRCZWZvcmUoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgcmV0dXJuIGNvbnRlbnRTdGFydFxuICB9XG5cbiAgLyoqXG4gICAqIEJlZm9yZSBjb2RlIGNvbnRlbnQsIG5vdCBhIGNsb3NpbmcgZmVuY2UuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqICAgfCB+fn5qc1xuICAgKiA+IHwgYWxlcnQoMSlcbiAgICogICAgIF5cbiAgICogICB8IH5+flxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gY29udGVudFN0YXJ0KGNvZGUpIHtcbiAgICByZXR1cm4gaW5pdGlhbFByZWZpeCA+IDAgJiYgbWFya2Rvd25TcGFjZShjb2RlKVxuICAgICAgPyBmYWN0b3J5U3BhY2UoXG4gICAgICAgICAgZWZmZWN0cyxcbiAgICAgICAgICBiZWZvcmVDb250ZW50Q2h1bmssXG4gICAgICAgICAgJ2xpbmVQcmVmaXgnLFxuICAgICAgICAgIGluaXRpYWxQcmVmaXggKyAxXG4gICAgICAgICkoY29kZSlcbiAgICAgIDogYmVmb3JlQ29udGVudENodW5rKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQmVmb3JlIGNvZGUgY29udGVudCwgYWZ0ZXIgb3B0aW9uYWwgcHJlZml4LlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiAgIHwgfn5+anNcbiAgICogPiB8IGFsZXJ0KDEpXG4gICAqICAgICBeXG4gICAqICAgfCB+fn5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGJlZm9yZUNvbnRlbnRDaHVuayhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm4gZWZmZWN0cy5jaGVjayhub25MYXp5Q29udGludWF0aW9uLCBhdE5vbkxhenlCcmVhaywgYWZ0ZXIpKGNvZGUpXG4gICAgfVxuICAgIGVmZmVjdHMuZW50ZXIoJ2NvZGVGbG93VmFsdWUnKVxuICAgIHJldHVybiBjb250ZW50Q2h1bmsoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBjb2RlIGNvbnRlbnQuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqICAgfCB+fn5qc1xuICAgKiA+IHwgYWxlcnQoMSlcbiAgICogICAgIF5eXl5eXl5eXG4gICAqICAgfCB+fn5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbnRlbnRDaHVuayhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NvZGVGbG93VmFsdWUnKVxuICAgICAgcmV0dXJuIGJlZm9yZUNvbnRlbnRDaHVuayhjb2RlKVxuICAgIH1cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29udGVudENodW5rXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgY29kZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogICB8IH5+fmpzXG4gICAqICAgfCBhbGVydCgxKVxuICAgKiA+IHwgfn5+XG4gICAqICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBhZnRlcihjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdjb2RlRmVuY2VkJylcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7VG9rZW5pemVDb250ZXh0fVxuICAgKiBAdHlwZSB7VG9rZW5pemVyfVxuICAgKi9cbiAgZnVuY3Rpb24gdG9rZW5pemVDbG9zZVN0YXJ0KGVmZmVjdHMsIG9rLCBub2spIHtcbiAgICBsZXQgc2l6ZSA9IDBcbiAgICByZXR1cm4gc3RhcnRCZWZvcmVcblxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3RhdGV9XG4gICAgICovXG4gICAgZnVuY3Rpb24gc3RhcnRCZWZvcmUoY29kZSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgICByZXR1cm4gc3RhcnRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCZWZvcmUgY2xvc2luZyBmZW5jZSwgYXQgb3B0aW9uYWwgd2hpdGVzcGFjZS5cbiAgICAgKlxuICAgICAqIGBgYG1hcmtkb3duXG4gICAgICogICB8IH5+fmpzXG4gICAgICogICB8IGFsZXJ0KDEpXG4gICAgICogPiB8IH5+flxuICAgICAqICAgICBeXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3RhdGV9XG4gICAgICovXG4gICAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgICAgLy8gQWx3YXlzIHBvcHVsYXRlZCBieSBkZWZhdWx0cy5cblxuICAgICAgLy8gVG8gZG86IGBlbnRlcmAgaGVyZSBvciBpbiBuZXh0IHN0YXRlP1xuICAgICAgZWZmZWN0cy5lbnRlcignY29kZUZlbmNlZEZlbmNlJylcbiAgICAgIHJldHVybiBtYXJrZG93blNwYWNlKGNvZGUpXG4gICAgICAgID8gZmFjdG9yeVNwYWNlKFxuICAgICAgICAgICAgZWZmZWN0cyxcbiAgICAgICAgICAgIGJlZm9yZVNlcXVlbmNlQ2xvc2UsXG4gICAgICAgICAgICAnbGluZVByZWZpeCcsXG4gICAgICAgICAgICBzZWxmLnBhcnNlci5jb25zdHJ1Y3RzLmRpc2FibGUubnVsbC5pbmNsdWRlcygnY29kZUluZGVudGVkJylcbiAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgOiA0XG4gICAgICAgICAgKShjb2RlKVxuICAgICAgICA6IGJlZm9yZVNlcXVlbmNlQ2xvc2UoY29kZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbiBjbG9zaW5nIGZlbmNlLCBhZnRlciBvcHRpb25hbCB3aGl0ZXNwYWNlLCBhdCBzZXF1ZW5jZS5cbiAgICAgKlxuICAgICAqIGBgYG1hcmtkb3duXG4gICAgICogICB8IH5+fmpzXG4gICAgICogICB8IGFsZXJ0KDEpXG4gICAgICogPiB8IH5+flxuICAgICAqICAgICBeXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3RhdGV9XG4gICAgICovXG4gICAgZnVuY3Rpb24gYmVmb3JlU2VxdWVuY2VDbG9zZShjb2RlKSB7XG4gICAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICAgIGVmZmVjdHMuZW50ZXIoJ2NvZGVGZW5jZWRGZW5jZVNlcXVlbmNlJylcbiAgICAgICAgcmV0dXJuIHNlcXVlbmNlQ2xvc2UoY29kZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbiBjbG9zaW5nIGZlbmNlIHNlcXVlbmNlLlxuICAgICAqXG4gICAgICogYGBgbWFya2Rvd25cbiAgICAgKiAgIHwgfn5+anNcbiAgICAgKiAgIHwgYWxlcnQoMSlcbiAgICAgKiA+IHwgfn5+XG4gICAgICogICAgIF5cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEB0eXBlIHtTdGF0ZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXF1ZW5jZUNsb3NlKGNvZGUpIHtcbiAgICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgICAgc2l6ZSsrXG4gICAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgICByZXR1cm4gc2VxdWVuY2VDbG9zZVxuICAgICAgfVxuICAgICAgaWYgKHNpemUgPj0gc2l6ZU9wZW4pIHtcbiAgICAgICAgZWZmZWN0cy5leGl0KCdjb2RlRmVuY2VkRmVuY2VTZXF1ZW5jZScpXG4gICAgICAgIHJldHVybiBtYXJrZG93blNwYWNlKGNvZGUpXG4gICAgICAgICAgPyBmYWN0b3J5U3BhY2UoZWZmZWN0cywgc2VxdWVuY2VDbG9zZUFmdGVyLCAnd2hpdGVzcGFjZScpKGNvZGUpXG4gICAgICAgICAgOiBzZXF1ZW5jZUNsb3NlQWZ0ZXIoY29kZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZnRlciBjbG9zaW5nIGZlbmNlIHNlcXVlbmNlLCBhZnRlciBvcHRpb25hbCB3aGl0ZXNwYWNlLlxuICAgICAqXG4gICAgICogYGBgbWFya2Rvd25cbiAgICAgKiAgIHwgfn5+anNcbiAgICAgKiAgIHwgYWxlcnQoMSlcbiAgICAgKiA+IHwgfn5+XG4gICAgICogICAgICAgIF5cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEB0eXBlIHtTdGF0ZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXF1ZW5jZUNsb3NlQWZ0ZXIoY29kZSkge1xuICAgICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICAgIGVmZmVjdHMuZXhpdCgnY29kZUZlbmNlZEZlbmNlJylcbiAgICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgICB9XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAqIEB0eXBlIHtUb2tlbml6ZXJ9XG4gKi9cbmZ1bmN0aW9uIHRva2VuaXplTm9uTGF6eUNvbnRpbnVhdGlvbihlZmZlY3RzLCBvaywgbm9rKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzXG4gIHJldHVybiBzdGFydFxuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG4gICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcbiAgICByZXR1cm4gbGluZVN0YXJ0XG4gIH1cblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gbGluZVN0YXJ0KGNvZGUpIHtcbiAgICByZXR1cm4gc2VsZi5wYXJzZXIubGF6eVtzZWxmLm5vdygpLmxpbmVdID8gbm9rKGNvZGUpIDogb2soY29kZSlcbiAgfVxufVxuIiwiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvbnN0cnVjdH0gQ29uc3RydWN0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlN0YXRlfSBTdGF0ZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZUNvbnRleHR9IFRva2VuaXplQ29udGV4dFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZXJ9IFRva2VuaXplclxuICovXG5cbmltcG9ydCB7ZmFjdG9yeVNwYWNlfSBmcm9tICdtaWNyb21hcmstZmFjdG9yeS1zcGFjZSdcbmltcG9ydCB7bWFya2Rvd25MaW5lRW5kaW5nLCBtYXJrZG93blNwYWNlfSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG4vKiogQHR5cGUge0NvbnN0cnVjdH0gKi9cbmV4cG9ydCBjb25zdCBjb2RlSW5kZW50ZWQgPSB7XG4gIG5hbWU6ICdjb2RlSW5kZW50ZWQnLFxuICB0b2tlbml6ZTogdG9rZW5pemVDb2RlSW5kZW50ZWRcbn1cblxuLyoqIEB0eXBlIHtDb25zdHJ1Y3R9ICovXG5jb25zdCBmdXJ0aGVyU3RhcnQgPSB7XG4gIHRva2VuaXplOiB0b2tlbml6ZUZ1cnRoZXJTdGFydCxcbiAgcGFydGlhbDogdHJ1ZVxufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZUNvZGVJbmRlbnRlZChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzXG4gIHJldHVybiBzdGFydFxuXG4gIC8qKlxuICAgKiBTdGFydCBvZiBjb2RlIChpbmRlbnRlZCkuXG4gICAqXG4gICAqID4gKipQYXJzaW5nIG5vdGUqKjogaXQgaXMgbm90IG5lZWRlZCB0byBjaGVjayBpZiB0aGlzIGZpcnN0IGxpbmUgaXMgYVxuICAgKiA+IGZpbGxlZCBsaW5lICh0aGF0IGl0IGhhcyBhIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlciksIGJlY2F1c2UgYmxhbmsgbGluZXNcbiAgICogPiBhcmUgcGFyc2VkIGFscmVhZHksIHNvIHdlIG5ldmVyIHJ1biBpbnRvIHRoYXQuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCAgICAgYWFhXG4gICAqICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgLy8gVG8gZG86IG1hbnVhbGx5IGNoZWNrIGlmIGludGVycnVwdGluZyBsaWtlIGBtYXJrZG93bi1yc2AuXG5cbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlSW5kZW50ZWQnKVxuICAgIC8vIFRvIGRvOiB1c2UgYW4gaW1wcm92ZWQgYHNwYWNlX29yX3RhYmAgZnVuY3Rpb24gbGlrZSBgbWFya2Rvd24tcnNgLFxuICAgIC8vIHNvIHRoYXQgd2UgY2FuIGRyb3AgdGhlIG5leHQgc3RhdGUuXG4gICAgcmV0dXJuIGZhY3RvcnlTcGFjZShlZmZlY3RzLCBhZnRlclByZWZpeCwgJ2xpbmVQcmVmaXgnLCA0ICsgMSkoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBdCBzdGFydCwgYWZ0ZXIgMSBvciA0IHNwYWNlcy5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8ICAgICBhYWFcbiAgICogICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBhZnRlclByZWZpeChjb2RlKSB7XG4gICAgY29uc3QgdGFpbCA9IHNlbGYuZXZlbnRzW3NlbGYuZXZlbnRzLmxlbmd0aCAtIDFdXG4gICAgcmV0dXJuIHRhaWwgJiZcbiAgICAgIHRhaWxbMV0udHlwZSA9PT0gJ2xpbmVQcmVmaXgnICYmXG4gICAgICB0YWlsWzJdLnNsaWNlU2VyaWFsaXplKHRhaWxbMV0sIHRydWUpLmxlbmd0aCA+PSA0XG4gICAgICA/IGF0QnJlYWsoY29kZSlcbiAgICAgIDogbm9rKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQXQgYSBicmVhay5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8ICAgICBhYWFcbiAgICogICAgICAgICBeICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBhdEJyZWFrKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFmdGVyKGNvZGUpXG4gICAgfVxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVybiBlZmZlY3RzLmF0dGVtcHQoZnVydGhlclN0YXJ0LCBhdEJyZWFrLCBhZnRlcikoY29kZSlcbiAgICB9XG4gICAgZWZmZWN0cy5lbnRlcignY29kZUZsb3dWYWx1ZScpXG4gICAgcmV0dXJuIGluc2lkZShjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIGNvZGUgY29udGVudC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8ICAgICBhYWFcbiAgICogICAgICAgICBeXl5eXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBpbnNpZGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KCdjb2RlRmxvd1ZhbHVlJylcbiAgICAgIHJldHVybiBhdEJyZWFrKGNvZGUpXG4gICAgfVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBpbnNpZGVcbiAgfVxuXG4gIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICBlZmZlY3RzLmV4aXQoJ2NvZGVJbmRlbnRlZCcpXG4gICAgLy8gVG8gZG86IGFsbG93IGludGVycnVwdGluZyBsaWtlIGBtYXJrZG93bi1yc2AuXG4gICAgLy8gRmVlbCBmcmVlIHRvIGludGVycnVwdC5cbiAgICAvLyB0b2tlbml6ZXIuaW50ZXJydXB0ID0gZmFsc2VcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZUZ1cnRoZXJTdGFydChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzXG4gIHJldHVybiBmdXJ0aGVyU3RhcnRcblxuICAvKipcbiAgICogQXQgZW9sLCB0cnlpbmcgdG8gcGFyc2UgYW5vdGhlciBpbmRlbnQuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCAgICAgYWFhXG4gICAqICAgICAgICAgICAgXlxuICAgKiAgIHwgICAgIGJiYlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gZnVydGhlclN0YXJ0KGNvZGUpIHtcbiAgICAvLyBUbyBkbzogaW1wcm92ZSBgbGF6eWAgLyBgcGllcmNlYCBoYW5kbGluZy5cbiAgICAvLyBJZiB0aGlzIGlzIGEgbGF6eSBsaW5lLCBpdCBjYW7igJl0IGJlIGNvZGUuXG4gICAgaWYgKHNlbGYucGFyc2VyLmxhenlbc2VsZi5ub3coKS5saW5lXSkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcbiAgICAgIHJldHVybiBmdXJ0aGVyU3RhcnRcbiAgICB9XG5cbiAgICAvLyBUbyBkbzogdGhlIGNvZGUgaGVyZSBpbiBgbWljcm9tYXJrLWpzYCBpcyBhIGJpdCBkaWZmZXJlbnQgZnJvbVxuICAgIC8vIGBtYXJrZG93bi1yc2AgYmVjYXVzZSB0aGVyZSBpdCBjYW4gYXR0ZW1wdCBzcGFjZXMuXG4gICAgLy8gV2UgY2Fu4oCZdCB5ZXQuXG4gICAgLy9cbiAgICAvLyBUbyBkbzogdXNlIGFuIGltcHJvdmVkIGBzcGFjZV9vcl90YWJgIGZ1bmN0aW9uIGxpa2UgYG1hcmtkb3duLXJzYCxcbiAgICAvLyBzbyB0aGF0IHdlIGNhbiBkcm9wIHRoZSBuZXh0IHN0YXRlLlxuICAgIHJldHVybiBmYWN0b3J5U3BhY2UoZWZmZWN0cywgYWZ0ZXJQcmVmaXgsICdsaW5lUHJlZml4JywgNCArIDEpKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQXQgc3RhcnQsIGFmdGVyIDEgb3IgNCBzcGFjZXMuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCAgICAgYWFhXG4gICAqICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gYWZ0ZXJQcmVmaXgoY29kZSkge1xuICAgIGNvbnN0IHRhaWwgPSBzZWxmLmV2ZW50c1tzZWxmLmV2ZW50cy5sZW5ndGggLSAxXVxuICAgIHJldHVybiB0YWlsICYmXG4gICAgICB0YWlsWzFdLnR5cGUgPT09ICdsaW5lUHJlZml4JyAmJlxuICAgICAgdGFpbFsyXS5zbGljZVNlcmlhbGl6ZSh0YWlsWzFdLCB0cnVlKS5sZW5ndGggPj0gNFxuICAgICAgPyBvayhjb2RlKVxuICAgICAgOiBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSlcbiAgICAgID8gZnVydGhlclN0YXJ0KGNvZGUpXG4gICAgICA6IG5vayhjb2RlKVxuICB9XG59XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ29uc3RydWN0fSBDb25zdHJ1Y3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuUHJldmlvdXN9IFByZXZpb3VzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlJlc29sdmVyfSBSZXNvbHZlclxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW59IFRva2VuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplQ29udGV4dH0gVG9rZW5pemVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplcn0gVG9rZW5pemVyXG4gKi9cblxuaW1wb3J0IHttYXJrZG93bkxpbmVFbmRpbmd9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3Rlcidcbi8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuZXhwb3J0IGNvbnN0IGNvZGVUZXh0ID0ge1xuICBuYW1lOiAnY29kZVRleHQnLFxuICB0b2tlbml6ZTogdG9rZW5pemVDb2RlVGV4dCxcbiAgcmVzb2x2ZTogcmVzb2x2ZUNvZGVUZXh0LFxuICBwcmV2aW91c1xufVxuXG4vLyBUbyBkbzogbmV4dCBtYWpvcjogZG9u4oCZdCByZXNvbHZlLCBsaWtlIGBtYXJrZG93bi1yc2AuXG4vKiogQHR5cGUge1Jlc29sdmVyfSAqL1xuZnVuY3Rpb24gcmVzb2x2ZUNvZGVUZXh0KGV2ZW50cykge1xuICBsZXQgdGFpbEV4aXRJbmRleCA9IGV2ZW50cy5sZW5ndGggLSA0XG4gIGxldCBoZWFkRW50ZXJJbmRleCA9IDNcbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gIGxldCBpbmRleFxuICAvKiogQHR5cGUge251bWJlciB8IHVuZGVmaW5lZH0gKi9cbiAgbGV0IGVudGVyXG5cbiAgLy8gSWYgd2Ugc3RhcnQgYW5kIGVuZCB3aXRoIGFuIEVPTCBvciBhIHNwYWNlLlxuICBpZiAoXG4gICAgKGV2ZW50c1toZWFkRW50ZXJJbmRleF1bMV0udHlwZSA9PT0gJ2xpbmVFbmRpbmcnIHx8XG4gICAgICBldmVudHNbaGVhZEVudGVySW5kZXhdWzFdLnR5cGUgPT09ICdzcGFjZScpICYmXG4gICAgKGV2ZW50c1t0YWlsRXhpdEluZGV4XVsxXS50eXBlID09PSAnbGluZUVuZGluZycgfHxcbiAgICAgIGV2ZW50c1t0YWlsRXhpdEluZGV4XVsxXS50eXBlID09PSAnc3BhY2UnKVxuICApIHtcbiAgICBpbmRleCA9IGhlYWRFbnRlckluZGV4XG5cbiAgICAvLyBBbmQgd2UgaGF2ZSBkYXRhLlxuICAgIHdoaWxlICgrK2luZGV4IDwgdGFpbEV4aXRJbmRleCkge1xuICAgICAgaWYgKGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2NvZGVUZXh0RGF0YScpIHtcbiAgICAgICAgLy8gVGhlbiB3ZSBoYXZlIHBhZGRpbmcuXG4gICAgICAgIGV2ZW50c1toZWFkRW50ZXJJbmRleF1bMV0udHlwZSA9ICdjb2RlVGV4dFBhZGRpbmcnXG4gICAgICAgIGV2ZW50c1t0YWlsRXhpdEluZGV4XVsxXS50eXBlID0gJ2NvZGVUZXh0UGFkZGluZydcbiAgICAgICAgaGVhZEVudGVySW5kZXggKz0gMlxuICAgICAgICB0YWlsRXhpdEluZGV4IC09IDJcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBNZXJnZSBhZGphY2VudCBzcGFjZXMgYW5kIGRhdGEuXG4gIGluZGV4ID0gaGVhZEVudGVySW5kZXggLSAxXG4gIHRhaWxFeGl0SW5kZXgrK1xuICB3aGlsZSAoKytpbmRleCA8PSB0YWlsRXhpdEluZGV4KSB7XG4gICAgaWYgKGVudGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChpbmRleCAhPT0gdGFpbEV4aXRJbmRleCAmJiBldmVudHNbaW5kZXhdWzFdLnR5cGUgIT09ICdsaW5lRW5kaW5nJykge1xuICAgICAgICBlbnRlciA9IGluZGV4XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGluZGV4ID09PSB0YWlsRXhpdEluZGV4IHx8XG4gICAgICBldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdsaW5lRW5kaW5nJ1xuICAgICkge1xuICAgICAgZXZlbnRzW2VudGVyXVsxXS50eXBlID0gJ2NvZGVUZXh0RGF0YSdcbiAgICAgIGlmIChpbmRleCAhPT0gZW50ZXIgKyAyKSB7XG4gICAgICAgIGV2ZW50c1tlbnRlcl1bMV0uZW5kID0gZXZlbnRzW2luZGV4IC0gMV1bMV0uZW5kXG4gICAgICAgIGV2ZW50cy5zcGxpY2UoZW50ZXIgKyAyLCBpbmRleCAtIGVudGVyIC0gMilcbiAgICAgICAgdGFpbEV4aXRJbmRleCAtPSBpbmRleCAtIGVudGVyIC0gMlxuICAgICAgICBpbmRleCA9IGVudGVyICsgMlxuICAgICAgfVxuICAgICAgZW50ZXIgPSB1bmRlZmluZWRcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGV2ZW50c1xufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7UHJldmlvdXN9XG4gKi9cbmZ1bmN0aW9uIHByZXZpb3VzKGNvZGUpIHtcbiAgLy8gSWYgdGhlcmUgaXMgYSBwcmV2aW91cyBjb2RlLCB0aGVyZSB3aWxsIGFsd2F5cyBiZSBhIHRhaWwuXG4gIHJldHVybiAoXG4gICAgY29kZSAhPT0gOTYgfHxcbiAgICB0aGlzLmV2ZW50c1t0aGlzLmV2ZW50cy5sZW5ndGggLSAxXVsxXS50eXBlID09PSAnY2hhcmFjdGVyRXNjYXBlJ1xuICApXG59XG5cbi8qKlxuICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAqIEB0eXBlIHtUb2tlbml6ZXJ9XG4gKi9cbmZ1bmN0aW9uIHRva2VuaXplQ29kZVRleHQoZWZmZWN0cywgb2ssIG5vaykge1xuICBjb25zdCBzZWxmID0gdGhpc1xuICBsZXQgc2l6ZU9wZW4gPSAwXG4gIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICBsZXQgc2l6ZVxuICAvKiogQHR5cGUge1Rva2VufSAqL1xuICBsZXQgdG9rZW5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgLyoqXG4gICAqIFN0YXJ0IG9mIGNvZGUgKHRleHQpLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYGFgXG4gICAqICAgICBeXG4gICAqID4gfCBcXGBhYFxuICAgKiAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlVGV4dCcpXG4gICAgZWZmZWN0cy5lbnRlcignY29kZVRleHRTZXF1ZW5jZScpXG4gICAgcmV0dXJuIHNlcXVlbmNlT3Blbihjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIG9wZW5pbmcgc2VxdWVuY2UuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBgYWBcbiAgICogICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHNlcXVlbmNlT3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDk2KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHNpemVPcGVuKytcbiAgICAgIHJldHVybiBzZXF1ZW5jZU9wZW5cbiAgICB9XG4gICAgZWZmZWN0cy5leGl0KCdjb2RlVGV4dFNlcXVlbmNlJylcbiAgICByZXR1cm4gYmV0d2Vlbihjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEJldHdlZW4gc29tZXRoaW5nIGFuZCBzb21ldGhpbmcgZWxzZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGBhYFxuICAgKiAgICAgIF5eXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBiZXR3ZWVuKGNvZGUpIHtcbiAgICAvLyBFT0YuXG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICAvLyBUbyBkbzogbmV4dCBtYWpvcjogZG9u4oCZdCBkbyBzcGFjZXMgaW4gcmVzb2x2ZSwgYnV0IHdoZW4gY29tcGlsaW5nLFxuICAgIC8vIGxpa2UgYG1hcmtkb3duLXJzYC5cbiAgICAvLyBUYWJzIGRvbuKAmXQgd29yaywgYW5kIHZpcnR1YWwgc3BhY2VzIGRvbuKAmXQgbWFrZSBzZW5zZS5cbiAgICBpZiAoY29kZSA9PT0gMzIpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3NwYWNlJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdzcGFjZScpXG4gICAgICByZXR1cm4gYmV0d2VlblxuICAgIH1cblxuICAgIC8vIENsb3NpbmcgZmVuY2U/IENvdWxkIGFsc28gYmUgZGF0YS5cbiAgICBpZiAoY29kZSA9PT0gOTYpIHtcbiAgICAgIHRva2VuID0gZWZmZWN0cy5lbnRlcignY29kZVRleHRTZXF1ZW5jZScpXG4gICAgICBzaXplID0gMFxuICAgICAgcmV0dXJuIHNlcXVlbmNlQ2xvc2UoY29kZSlcbiAgICB9XG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgICByZXR1cm4gYmV0d2VlblxuICAgIH1cblxuICAgIC8vIERhdGEuXG4gICAgZWZmZWN0cy5lbnRlcignY29kZVRleHREYXRhJylcbiAgICByZXR1cm4gZGF0YShjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIGRhdGEuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBgYWBcbiAgICogICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBkYXRhKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBudWxsIHx8XG4gICAgICBjb2RlID09PSAzMiB8fFxuICAgICAgY29kZSA9PT0gOTYgfHxcbiAgICAgIG1hcmtkb3duTGluZUVuZGluZyhjb2RlKVxuICAgICkge1xuICAgICAgZWZmZWN0cy5leGl0KCdjb2RlVGV4dERhdGEnKVxuICAgICAgcmV0dXJuIGJldHdlZW4oY29kZSlcbiAgICB9XG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBjbG9zaW5nIHNlcXVlbmNlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYGFgXG4gICAqICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHNlcXVlbmNlQ2xvc2UoY29kZSkge1xuICAgIC8vIE1vcmUuXG4gICAgaWYgKGNvZGUgPT09IDk2KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHNpemUrK1xuICAgICAgcmV0dXJuIHNlcXVlbmNlQ2xvc2VcbiAgICB9XG5cbiAgICAvLyBEb25lIVxuICAgIGlmIChzaXplID09PSBzaXplT3Blbikge1xuICAgICAgZWZmZWN0cy5leGl0KCdjb2RlVGV4dFNlcXVlbmNlJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnY29kZVRleHQnKVxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gTW9yZSBvciBsZXNzIGFjY2VudHM6IG1hcmsgYXMgZGF0YS5cbiAgICB0b2tlbi50eXBlID0gJ2NvZGVUZXh0RGF0YSdcbiAgICByZXR1cm4gZGF0YShjb2RlKVxuICB9XG59XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ2h1bmt9IENodW5rXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkV2ZW50fSBFdmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbn0gVG9rZW5cbiAqL1xuXG5pbXBvcnQge3NwbGljZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2h1bmtlZCdcbi8qKlxuICogVG9rZW5pemUgc3ViY29udGVudC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PEV2ZW50Pn0gZXZlbnRzXG4gKiAgIExpc3Qgb2YgZXZlbnRzLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgc3VidG9rZW5zIHdlcmUgZm91bmQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0b2tlbml6ZShldmVudHMpIHtcbiAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBudW1iZXI+fSAqL1xuICBjb25zdCBqdW1wcyA9IHt9XG4gIGxldCBpbmRleCA9IC0xXG4gIC8qKiBAdHlwZSB7RXZlbnR9ICovXG4gIGxldCBldmVudFxuICAvKiogQHR5cGUge251bWJlciB8IHVuZGVmaW5lZH0gKi9cbiAgbGV0IGxpbmVJbmRleFxuICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgbGV0IG90aGVySW5kZXhcbiAgLyoqIEB0eXBlIHtFdmVudH0gKi9cbiAgbGV0IG90aGVyRXZlbnRcbiAgLyoqIEB0eXBlIHtBcnJheTxFdmVudD59ICovXG4gIGxldCBwYXJhbWV0ZXJzXG4gIC8qKiBAdHlwZSB7QXJyYXk8RXZlbnQ+fSAqL1xuICBsZXQgc3ViZXZlbnRzXG4gIC8qKiBAdHlwZSB7Ym9vbGVhbiB8IHVuZGVmaW5lZH0gKi9cbiAgbGV0IG1vcmVcbiAgd2hpbGUgKCsraW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgd2hpbGUgKGluZGV4IGluIGp1bXBzKSB7XG4gICAgICBpbmRleCA9IGp1bXBzW2luZGV4XVxuICAgIH1cbiAgICBldmVudCA9IGV2ZW50c1tpbmRleF1cblxuICAgIC8vIEFkZCBhIGhvb2sgZm9yIHRoZSBHRk0gdGFza2xpc3QgZXh0ZW5zaW9uLCB3aGljaCBuZWVkcyB0byBrbm93IGlmIHRleHRcbiAgICAvLyBpcyBpbiB0aGUgZmlyc3QgY29udGVudCBvZiBhIGxpc3QgaXRlbS5cbiAgICBpZiAoXG4gICAgICBpbmRleCAmJlxuICAgICAgZXZlbnRbMV0udHlwZSA9PT0gJ2NodW5rRmxvdycgJiZcbiAgICAgIGV2ZW50c1tpbmRleCAtIDFdWzFdLnR5cGUgPT09ICdsaXN0SXRlbVByZWZpeCdcbiAgICApIHtcbiAgICAgIHN1YmV2ZW50cyA9IGV2ZW50WzFdLl90b2tlbml6ZXIuZXZlbnRzXG4gICAgICBvdGhlckluZGV4ID0gMFxuICAgICAgaWYgKFxuICAgICAgICBvdGhlckluZGV4IDwgc3ViZXZlbnRzLmxlbmd0aCAmJlxuICAgICAgICBzdWJldmVudHNbb3RoZXJJbmRleF1bMV0udHlwZSA9PT0gJ2xpbmVFbmRpbmdCbGFuaydcbiAgICAgICkge1xuICAgICAgICBvdGhlckluZGV4ICs9IDJcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgb3RoZXJJbmRleCA8IHN1YmV2ZW50cy5sZW5ndGggJiZcbiAgICAgICAgc3ViZXZlbnRzW290aGVySW5kZXhdWzFdLnR5cGUgPT09ICdjb250ZW50J1xuICAgICAgKSB7XG4gICAgICAgIHdoaWxlICgrK290aGVySW5kZXggPCBzdWJldmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHN1YmV2ZW50c1tvdGhlckluZGV4XVsxXS50eXBlID09PSAnY29udGVudCcpIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdWJldmVudHNbb3RoZXJJbmRleF1bMV0udHlwZSA9PT0gJ2NodW5rVGV4dCcpIHtcbiAgICAgICAgICAgIHN1YmV2ZW50c1tvdGhlckluZGV4XVsxXS5faXNJbkZpcnN0Q29udGVudE9mTGlzdEl0ZW0gPSB0cnVlXG4gICAgICAgICAgICBvdGhlckluZGV4KytcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFbnRlci5cbiAgICBpZiAoZXZlbnRbMF0gPT09ICdlbnRlcicpIHtcbiAgICAgIGlmIChldmVudFsxXS5jb250ZW50VHlwZSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGp1bXBzLCBzdWJjb250ZW50KGV2ZW50cywgaW5kZXgpKVxuICAgICAgICBpbmRleCA9IGp1bXBzW2luZGV4XVxuICAgICAgICBtb3JlID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBFeGl0LlxuICAgIGVsc2UgaWYgKGV2ZW50WzFdLl9jb250YWluZXIpIHtcbiAgICAgIG90aGVySW5kZXggPSBpbmRleFxuICAgICAgbGluZUluZGV4ID0gdW5kZWZpbmVkXG4gICAgICB3aGlsZSAob3RoZXJJbmRleC0tKSB7XG4gICAgICAgIG90aGVyRXZlbnQgPSBldmVudHNbb3RoZXJJbmRleF1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIG90aGVyRXZlbnRbMV0udHlwZSA9PT0gJ2xpbmVFbmRpbmcnIHx8XG4gICAgICAgICAgb3RoZXJFdmVudFsxXS50eXBlID09PSAnbGluZUVuZGluZ0JsYW5rJ1xuICAgICAgICApIHtcbiAgICAgICAgICBpZiAob3RoZXJFdmVudFswXSA9PT0gJ2VudGVyJykge1xuICAgICAgICAgICAgaWYgKGxpbmVJbmRleCkge1xuICAgICAgICAgICAgICBldmVudHNbbGluZUluZGV4XVsxXS50eXBlID0gJ2xpbmVFbmRpbmdCbGFuaydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG90aGVyRXZlbnRbMV0udHlwZSA9ICdsaW5lRW5kaW5nJ1xuICAgICAgICAgICAgbGluZUluZGV4ID0gb3RoZXJJbmRleFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobGluZUluZGV4KSB7XG4gICAgICAgIC8vIEZpeCBwb3NpdGlvbi5cbiAgICAgICAgZXZlbnRbMV0uZW5kID0gT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRzW2xpbmVJbmRleF1bMV0uc3RhcnQpXG5cbiAgICAgICAgLy8gU3dpdGNoIGNvbnRhaW5lciBleGl0IHcvIGxpbmUgZW5kaW5ncy5cbiAgICAgICAgcGFyYW1ldGVycyA9IGV2ZW50cy5zbGljZShsaW5lSW5kZXgsIGluZGV4KVxuICAgICAgICBwYXJhbWV0ZXJzLnVuc2hpZnQoZXZlbnQpXG4gICAgICAgIHNwbGljZShldmVudHMsIGxpbmVJbmRleCwgaW5kZXggLSBsaW5lSW5kZXggKyAxLCBwYXJhbWV0ZXJzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gIW1vcmVcbn1cblxuLyoqXG4gKiBUb2tlbml6ZSBlbWJlZGRlZCB0b2tlbnMuXG4gKlxuICogQHBhcmFtIHtBcnJheTxFdmVudD59IGV2ZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50SW5kZXhcbiAqIEByZXR1cm5zIHtSZWNvcmQ8c3RyaW5nLCBudW1iZXI+fVxuICovXG5mdW5jdGlvbiBzdWJjb250ZW50KGV2ZW50cywgZXZlbnRJbmRleCkge1xuICBjb25zdCB0b2tlbiA9IGV2ZW50c1tldmVudEluZGV4XVsxXVxuICBjb25zdCBjb250ZXh0ID0gZXZlbnRzW2V2ZW50SW5kZXhdWzJdXG4gIGxldCBzdGFydFBvc2l0aW9uID0gZXZlbnRJbmRleCAtIDFcbiAgLyoqIEB0eXBlIHtBcnJheTxudW1iZXI+fSAqL1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IFtdXG4gIGNvbnN0IHRva2VuaXplciA9XG4gICAgdG9rZW4uX3Rva2VuaXplciB8fCBjb250ZXh0LnBhcnNlclt0b2tlbi5jb250ZW50VHlwZV0odG9rZW4uc3RhcnQpXG4gIGNvbnN0IGNoaWxkRXZlbnRzID0gdG9rZW5pemVyLmV2ZW50c1xuICAvKiogQHR5cGUge0FycmF5PFtudW1iZXIsIG51bWJlcl0+fSAqL1xuICBjb25zdCBqdW1wcyA9IFtdXG4gIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgbnVtYmVyPn0gKi9cbiAgY29uc3QgZ2FwcyA9IHt9XG4gIC8qKiBAdHlwZSB7QXJyYXk8Q2h1bms+fSAqL1xuICBsZXQgc3RyZWFtXG4gIC8qKiBAdHlwZSB7VG9rZW4gfCB1bmRlZmluZWR9ICovXG4gIGxldCBwcmV2aW91c1xuICBsZXQgaW5kZXggPSAtMVxuICAvKiogQHR5cGUge1Rva2VuIHwgdW5kZWZpbmVkfSAqL1xuICBsZXQgY3VycmVudCA9IHRva2VuXG4gIGxldCBhZGp1c3QgPSAwXG4gIGxldCBzdGFydCA9IDBcbiAgY29uc3QgYnJlYWtzID0gW3N0YXJ0XVxuXG4gIC8vIExvb3AgZm9yd2FyZCB0aHJvdWdoIHRoZSBsaW5rZWQgdG9rZW5zIHRvIHBhc3MgdGhlbSBpbiBvcmRlciB0byB0aGVcbiAgLy8gc3VidG9rZW5pemVyLlxuICB3aGlsZSAoY3VycmVudCkge1xuICAgIC8vIEZpbmQgdGhlIHBvc2l0aW9uIG9mIHRoZSBldmVudCBmb3IgdGhpcyB0b2tlbi5cbiAgICB3aGlsZSAoZXZlbnRzWysrc3RhcnRQb3NpdGlvbl1bMV0gIT09IGN1cnJlbnQpIHtcbiAgICAgIC8vIEVtcHR5LlxuICAgIH1cbiAgICBzdGFydFBvc2l0aW9ucy5wdXNoKHN0YXJ0UG9zaXRpb24pXG4gICAgaWYgKCFjdXJyZW50Ll90b2tlbml6ZXIpIHtcbiAgICAgIHN0cmVhbSA9IGNvbnRleHQuc2xpY2VTdHJlYW0oY3VycmVudClcbiAgICAgIGlmICghY3VycmVudC5uZXh0KSB7XG4gICAgICAgIHN0cmVhbS5wdXNoKG51bGwpXG4gICAgICB9XG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgdG9rZW5pemVyLmRlZmluZVNraXAoY3VycmVudC5zdGFydClcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50Ll9pc0luRmlyc3RDb250ZW50T2ZMaXN0SXRlbSkge1xuICAgICAgICB0b2tlbml6ZXIuX2dmbVRhc2tsaXN0Rmlyc3RDb250ZW50T2ZMaXN0SXRlbSA9IHRydWVcbiAgICAgIH1cbiAgICAgIHRva2VuaXplci53cml0ZShzdHJlYW0pXG4gICAgICBpZiAoY3VycmVudC5faXNJbkZpcnN0Q29udGVudE9mTGlzdEl0ZW0pIHtcbiAgICAgICAgdG9rZW5pemVyLl9nZm1UYXNrbGlzdEZpcnN0Q29udGVudE9mTGlzdEl0ZW0gPSB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVbnJhdmVsIHRoZSBuZXh0IHRva2VuLlxuICAgIHByZXZpb3VzID0gY3VycmVudFxuICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHRcbiAgfVxuXG4gIC8vIE5vdywgbG9vcCBiYWNrIHRocm91Z2ggYWxsIGV2ZW50cyAoYW5kIGxpbmtlZCB0b2tlbnMpLCB0byBmaWd1cmUgb3V0IHdoaWNoXG4gIC8vIHBhcnRzIGJlbG9uZyB3aGVyZS5cbiAgY3VycmVudCA9IHRva2VuXG4gIHdoaWxlICgrK2luZGV4IDwgY2hpbGRFdmVudHMubGVuZ3RoKSB7XG4gICAgaWYgKFxuICAgICAgLy8gRmluZCBhIHZvaWQgdG9rZW4gdGhhdCBpbmNsdWRlcyBhIGJyZWFrLlxuICAgICAgY2hpbGRFdmVudHNbaW5kZXhdWzBdID09PSAnZXhpdCcgJiZcbiAgICAgIGNoaWxkRXZlbnRzW2luZGV4IC0gMV1bMF0gPT09ICdlbnRlcicgJiZcbiAgICAgIGNoaWxkRXZlbnRzW2luZGV4XVsxXS50eXBlID09PSBjaGlsZEV2ZW50c1tpbmRleCAtIDFdWzFdLnR5cGUgJiZcbiAgICAgIGNoaWxkRXZlbnRzW2luZGV4XVsxXS5zdGFydC5saW5lICE9PSBjaGlsZEV2ZW50c1tpbmRleF1bMV0uZW5kLmxpbmVcbiAgICApIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXggKyAxXG4gICAgICBicmVha3MucHVzaChzdGFydClcbiAgICAgIC8vIEhlbHAgR0MuXG4gICAgICBjdXJyZW50Ll90b2tlbml6ZXIgPSB1bmRlZmluZWRcbiAgICAgIGN1cnJlbnQucHJldmlvdXMgPSB1bmRlZmluZWRcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHRcbiAgICB9XG4gIH1cblxuICAvLyBIZWxwIEdDLlxuICB0b2tlbml6ZXIuZXZlbnRzID0gW11cblxuICAvLyBJZiB0aGVyZeKAmXMgb25lIG1vcmUgdG9rZW4gKHdoaWNoIGlzIHRoZSBjYXNlcyBmb3IgbGluZXMgdGhhdCBlbmQgaW4gYW5cbiAgLy8gRU9GKSwgdGhhdOKAmXMgcGVyZmVjdDogdGhlIGxhc3QgcG9pbnQgd2UgZm91bmQgc3RhcnRzIGl0LlxuICAvLyBJZiB0aGVyZSBpc27igJl0IHRoZW4gbWFrZSBzdXJlIGFueSByZW1haW5pbmcgY29udGVudCBpcyBhZGRlZCB0byBpdC5cbiAgaWYgKGN1cnJlbnQpIHtcbiAgICAvLyBIZWxwIEdDLlxuICAgIGN1cnJlbnQuX3Rva2VuaXplciA9IHVuZGVmaW5lZFxuICAgIGN1cnJlbnQucHJldmlvdXMgPSB1bmRlZmluZWRcbiAgfSBlbHNlIHtcbiAgICBicmVha3MucG9wKClcbiAgfVxuXG4gIC8vIE5vdyBzcGxpY2UgdGhlIGV2ZW50cyBmcm9tIHRoZSBzdWJ0b2tlbml6ZXIgaW50byB0aGUgY3VycmVudCBldmVudHMsXG4gIC8vIG1vdmluZyBiYWNrIHRvIGZyb250IHNvIHRoYXQgc3BsaWNlIGluZGljZXMgYXJlbuKAmXQgYWZmZWN0ZWQuXG4gIGluZGV4ID0gYnJlYWtzLmxlbmd0aFxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIGNvbnN0IHNsaWNlID0gY2hpbGRFdmVudHMuc2xpY2UoYnJlYWtzW2luZGV4XSwgYnJlYWtzW2luZGV4ICsgMV0pXG4gICAgY29uc3Qgc3RhcnQgPSBzdGFydFBvc2l0aW9ucy5wb3AoKVxuICAgIGp1bXBzLnVuc2hpZnQoW3N0YXJ0LCBzdGFydCArIHNsaWNlLmxlbmd0aCAtIDFdKVxuICAgIHNwbGljZShldmVudHMsIHN0YXJ0LCAyLCBzbGljZSlcbiAgfVxuICBpbmRleCA9IC0xXG4gIHdoaWxlICgrK2luZGV4IDwganVtcHMubGVuZ3RoKSB7XG4gICAgZ2Fwc1thZGp1c3QgKyBqdW1wc1tpbmRleF1bMF1dID0gYWRqdXN0ICsganVtcHNbaW5kZXhdWzFdXG4gICAgYWRqdXN0ICs9IGp1bXBzW2luZGV4XVsxXSAtIGp1bXBzW2luZGV4XVswXSAtIDFcbiAgfVxuICByZXR1cm4gZ2Fwc1xufVxuIiwiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvbnN0cnVjdH0gQ29uc3RydWN0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlJlc29sdmVyfSBSZXNvbHZlclxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW59IFRva2VuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplQ29udGV4dH0gVG9rZW5pemVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplcn0gVG9rZW5pemVyXG4gKi9cblxuaW1wb3J0IHtmYWN0b3J5U3BhY2V9IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LXNwYWNlJ1xuaW1wb3J0IHttYXJrZG93bkxpbmVFbmRpbmd9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3RlcidcbmltcG9ydCB7c3VidG9rZW5pemV9IGZyb20gJ21pY3JvbWFyay11dGlsLXN1YnRva2VuaXplJ1xuLyoqXG4gKiBObyBuYW1lIGJlY2F1c2UgaXQgbXVzdCBub3QgYmUgdHVybmVkIG9mZi5cbiAqIEB0eXBlIHtDb25zdHJ1Y3R9XG4gKi9cbmV4cG9ydCBjb25zdCBjb250ZW50ID0ge1xuICB0b2tlbml6ZTogdG9rZW5pemVDb250ZW50LFxuICByZXNvbHZlOiByZXNvbHZlQ29udGVudFxufVxuXG4vKiogQHR5cGUge0NvbnN0cnVjdH0gKi9cbmNvbnN0IGNvbnRpbnVhdGlvbkNvbnN0cnVjdCA9IHtcbiAgdG9rZW5pemU6IHRva2VuaXplQ29udGludWF0aW9uLFxuICBwYXJ0aWFsOiB0cnVlXG59XG5cbi8qKlxuICogQ29udGVudCBpcyB0cmFuc3BhcmVudDogaXTigJlzIHBhcnNlZCByaWdodCBub3cuIFRoYXQgd2F5LCBkZWZpbml0aW9ucyBhcmUgYWxzb1xuICogcGFyc2VkIHJpZ2h0IG5vdzogYmVmb3JlIHRleHQgaW4gcGFyYWdyYXBocyAoc3BlY2lmaWNhbGx5LCBtZWRpYSkgYXJlIHBhcnNlZC5cbiAqXG4gKiBAdHlwZSB7UmVzb2x2ZXJ9XG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVDb250ZW50KGV2ZW50cykge1xuICBzdWJ0b2tlbml6ZShldmVudHMpXG4gIHJldHVybiBldmVudHNcbn1cblxuLyoqXG4gKiBAdGhpcyB7VG9rZW5pemVDb250ZXh0fVxuICogQHR5cGUge1Rva2VuaXplcn1cbiAqL1xuZnVuY3Rpb24gdG9rZW5pemVDb250ZW50KGVmZmVjdHMsIG9rKSB7XG4gIC8qKiBAdHlwZSB7VG9rZW4gfCB1bmRlZmluZWR9ICovXG4gIGxldCBwcmV2aW91c1xuICByZXR1cm4gY2h1bmtTdGFydFxuXG4gIC8qKlxuICAgKiBCZWZvcmUgYSBjb250ZW50IGNodW5rLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYWJjXG4gICAqICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjaHVua1N0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdjb250ZW50JylcbiAgICBwcmV2aW91cyA9IGVmZmVjdHMuZW50ZXIoJ2NodW5rQ29udGVudCcsIHtcbiAgICAgIGNvbnRlbnRUeXBlOiAnY29udGVudCdcbiAgICB9KVxuICAgIHJldHVybiBjaHVua0luc2lkZShjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIGEgY29udGVudCBjaHVuay5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGFiY1xuICAgKiAgICAgXl5eXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjaHVua0luc2lkZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb250ZW50RW5kKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gVG8gZG86IGluIGBtYXJrZG93bi1yc2AsIGVhY2ggbGluZSBpcyBwYXJzZWQgb24gaXRzIG93biwgYW5kIGV2ZXJ5dGhpbmdcbiAgICAvLyBpcyBzdGl0Y2hlZCB0b2dldGhlciByZXNvbHZpbmcuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuIGVmZmVjdHMuY2hlY2soXG4gICAgICAgIGNvbnRpbnVhdGlvbkNvbnN0cnVjdCxcbiAgICAgICAgY29udGVudENvbnRpbnVlLFxuICAgICAgICBjb250ZW50RW5kXG4gICAgICApKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gRGF0YS5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY2h1bmtJbnNpZGVcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjb250ZW50RW5kKGNvZGUpIHtcbiAgICBlZmZlY3RzLmV4aXQoJ2NodW5rQ29udGVudCcpXG4gICAgZWZmZWN0cy5leGl0KCdjb250ZW50JylcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjb250ZW50Q29udGludWUoY29kZSkge1xuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnY2h1bmtDb250ZW50JylcbiAgICBwcmV2aW91cy5uZXh0ID0gZWZmZWN0cy5lbnRlcignY2h1bmtDb250ZW50Jywge1xuICAgICAgY29udGVudFR5cGU6ICdjb250ZW50JyxcbiAgICAgIHByZXZpb3VzXG4gICAgfSlcbiAgICBwcmV2aW91cyA9IHByZXZpb3VzLm5leHRcbiAgICByZXR1cm4gY2h1bmtJbnNpZGVcbiAgfVxufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZUNvbnRpbnVhdGlvbihlZmZlY3RzLCBvaywgbm9rKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzXG4gIHJldHVybiBzdGFydExvb2thaGVhZFxuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBzdGFydExvb2thaGVhZChjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdjaHVua0NvbnRlbnQnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgcmV0dXJuIGZhY3RvcnlTcGFjZShlZmZlY3RzLCBwcmVmaXhlZCwgJ2xpbmVQcmVmaXgnKVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHByZWZpeGVkKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICAvLyBBbHdheXMgcG9wdWxhdGVkIGJ5IGRlZmF1bHRzLlxuXG4gICAgY29uc3QgdGFpbCA9IHNlbGYuZXZlbnRzW3NlbGYuZXZlbnRzLmxlbmd0aCAtIDFdXG4gICAgaWYgKFxuICAgICAgIXNlbGYucGFyc2VyLmNvbnN0cnVjdHMuZGlzYWJsZS5udWxsLmluY2x1ZGVzKCdjb2RlSW5kZW50ZWQnKSAmJlxuICAgICAgdGFpbCAmJlxuICAgICAgdGFpbFsxXS50eXBlID09PSAnbGluZVByZWZpeCcgJiZcbiAgICAgIHRhaWxbMl0uc2xpY2VTZXJpYWxpemUodGFpbFsxXSwgdHJ1ZSkubGVuZ3RoID49IDRcbiAgICApIHtcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cbiAgICByZXR1cm4gZWZmZWN0cy5pbnRlcnJ1cHQoc2VsZi5wYXJzZXIuY29uc3RydWN0cy5mbG93LCBub2ssIG9rKShjb2RlKVxuICB9XG59XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRWZmZWN0c30gRWZmZWN0c1xuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5UeXBlfSBUb2tlblR5cGVcbiAqL1xuXG5pbXBvcnQge1xuICBhc2NpaUNvbnRyb2wsXG4gIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UsXG4gIG1hcmtkb3duTGluZUVuZGluZ1xufSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG4vKipcbiAqIFBhcnNlIGRlc3RpbmF0aW9ucy5cbiAqXG4gKiAjIyMjIyMgRXhhbXBsZXNcbiAqXG4gKiBgYGBtYXJrZG93blxuICogPGE+XG4gKiA8YVxcPmI+XG4gKiA8YSBiPlxuICogPGEpPlxuICogYVxuICogYVxcKWJcbiAqIGEoYiljXG4gKiBhKGIpXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0VmZmVjdHN9IGVmZmVjdHNcbiAqICAgQ29udGV4dC5cbiAqIEBwYXJhbSB7U3RhdGV9IG9rXG4gKiAgIFN0YXRlIHN3aXRjaGVkIHRvIHdoZW4gc3VjY2Vzc2Z1bC5cbiAqIEBwYXJhbSB7U3RhdGV9IG5va1xuICogICBTdGF0ZSBzd2l0Y2hlZCB0byB3aGVuIHVuc3VjY2Vzc2Z1bC5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSB0eXBlXG4gKiAgIFR5cGUgZm9yIHdob2xlIChgPGE+YCBvciBgYmApLlxuICogQHBhcmFtIHtUb2tlblR5cGV9IGxpdGVyYWxUeXBlXG4gKiAgIFR5cGUgd2hlbiBlbmNsb3NlZCAoYDxhPmApLlxuICogQHBhcmFtIHtUb2tlblR5cGV9IGxpdGVyYWxNYXJrZXJUeXBlXG4gKiAgIFR5cGUgZm9yIGVuY2xvc2luZyAoYDxgIGFuZCBgPmApLlxuICogQHBhcmFtIHtUb2tlblR5cGV9IHJhd1R5cGVcbiAqICAgVHlwZSB3aGVuIG5vdCBlbmNsb3NlZCAoYGJgKS5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSBzdHJpbmdUeXBlXG4gKiAgIFR5cGUgZm9yIHRoZSB2YWx1ZSAoYGFgIG9yIGBiYCkuXG4gKiBAcGFyYW0ge251bWJlciB8IHVuZGVmaW5lZH0gW21heD1JbmZpbml0eV1cbiAqICAgRGVwdGggb2YgbmVzdGVkIHBhcmVucyAoaW5jbHVzaXZlKS5cbiAqIEByZXR1cm5zIHtTdGF0ZX1cbiAqICAgU3RhcnQgc3RhdGUuXG4gKi8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcbmV4cG9ydCBmdW5jdGlvbiBmYWN0b3J5RGVzdGluYXRpb24oXG4gIGVmZmVjdHMsXG4gIG9rLFxuICBub2ssXG4gIHR5cGUsXG4gIGxpdGVyYWxUeXBlLFxuICBsaXRlcmFsTWFya2VyVHlwZSxcbiAgcmF3VHlwZSxcbiAgc3RyaW5nVHlwZSxcbiAgbWF4XG4pIHtcbiAgY29uc3QgbGltaXQgPSBtYXggfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXG4gIGxldCBiYWxhbmNlID0gMFxuICByZXR1cm4gc3RhcnRcblxuICAvKipcbiAgICogU3RhcnQgb2YgZGVzdGluYXRpb24uXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA8YWE+XG4gICAqICAgICBeXG4gICAqID4gfCBhYVxuICAgKiAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2MCkge1xuICAgICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgICAgZWZmZWN0cy5lbnRlcihsaXRlcmFsVHlwZSlcbiAgICAgIGVmZmVjdHMuZW50ZXIobGl0ZXJhbE1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdChsaXRlcmFsTWFya2VyVHlwZSlcbiAgICAgIHJldHVybiBlbmNsb3NlZEJlZm9yZVxuICAgIH1cblxuICAgIC8vIEFTQ0lJIGNvbnRyb2wsIHNwYWNlLCBjbG9zaW5nIHBhcmVuLlxuICAgIGlmIChjb2RlID09PSBudWxsIHx8IGNvZGUgPT09IDMyIHx8IGNvZGUgPT09IDQxIHx8IGFzY2lpQ29udHJvbChjb2RlKSkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cbiAgICBlZmZlY3RzLmVudGVyKHR5cGUpXG4gICAgZWZmZWN0cy5lbnRlcihyYXdUeXBlKVxuICAgIGVmZmVjdHMuZW50ZXIoc3RyaW5nVHlwZSlcbiAgICBlZmZlY3RzLmVudGVyKCdjaHVua1N0cmluZycsIHtcbiAgICAgIGNvbnRlbnRUeXBlOiAnc3RyaW5nJ1xuICAgIH0pXG4gICAgcmV0dXJuIHJhdyhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGA8YCwgYXQgYW4gZW5jbG9zZWQgZGVzdGluYXRpb24uXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA8YWE+XG4gICAqICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gZW5jbG9zZWRCZWZvcmUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgZWZmZWN0cy5lbnRlcihsaXRlcmFsTWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KGxpdGVyYWxNYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KGxpdGVyYWxUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGUpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG4gICAgZWZmZWN0cy5lbnRlcihzdHJpbmdUeXBlKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2NodW5rU3RyaW5nJywge1xuICAgICAgY29udGVudFR5cGU6ICdzdHJpbmcnXG4gICAgfSlcbiAgICByZXR1cm4gZW5jbG9zZWQoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBlbmNsb3NlZCBkZXN0aW5hdGlvbi5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDxhYT5cbiAgICogICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBlbmNsb3NlZChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYyKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NodW5rU3RyaW5nJylcbiAgICAgIGVmZmVjdHMuZXhpdChzdHJpbmdUeXBlKVxuICAgICAgcmV0dXJuIGVuY2xvc2VkQmVmb3JlKGNvZGUpXG4gICAgfVxuICAgIGlmIChjb2RlID09PSBudWxsIHx8IGNvZGUgPT09IDYwIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29kZSA9PT0gOTIgPyBlbmNsb3NlZEVzY2FwZSA6IGVuY2xvc2VkXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgYFxcYCwgYXQgYSBzcGVjaWFsIGNoYXJhY3Rlci5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDxhXFwqYT5cbiAgICogICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGVuY2xvc2VkRXNjYXBlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjAgfHwgY29kZSA9PT0gNjIgfHwgY29kZSA9PT0gOTIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGVuY2xvc2VkXG4gICAgfVxuICAgIHJldHVybiBlbmNsb3NlZChjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIHJhdyBkZXN0aW5hdGlvbi5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGFhXG4gICAqICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiByYXcoY29kZSkge1xuICAgIGlmIChcbiAgICAgICFiYWxhbmNlICYmXG4gICAgICAoY29kZSA9PT0gbnVsbCB8fCBjb2RlID09PSA0MSB8fCBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpKVxuICAgICkge1xuICAgICAgZWZmZWN0cy5leGl0KCdjaHVua1N0cmluZycpXG4gICAgICBlZmZlY3RzLmV4aXQoc3RyaW5nVHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdChyYXdUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGUpXG4gICAgICByZXR1cm4gb2soY29kZSlcbiAgICB9XG4gICAgaWYgKGJhbGFuY2UgPCBsaW1pdCAmJiBjb2RlID09PSA0MCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBiYWxhbmNlKytcbiAgICAgIHJldHVybiByYXdcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQxKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGJhbGFuY2UtLVxuICAgICAgcmV0dXJuIHJhd1xuICAgIH1cblxuICAgIC8vIEFTQ0lJIGNvbnRyb2wgKGJ1dCAqbm90KiBgXFwwYCkgYW5kIHNwYWNlIGFuZCBgKGAuXG4gICAgLy8gTm90ZTogaW4gYG1hcmtkb3duLXJzYCwgYFxcMGAgZXhpc3RzIGluIGNvZGVzLCBpbiBgbWljcm9tYXJrLWpzYCBpdFxuICAgIC8vIGRvZXNu4oCZdC5cbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBjb2RlID09PSAzMiB8fCBjb2RlID09PSA0MCB8fCBhc2NpaUNvbnRyb2woY29kZSkpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvZGUgPT09IDkyID8gcmF3RXNjYXBlIDogcmF3XG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgYFxcYCwgYXQgc3BlY2lhbCBjaGFyYWN0ZXIuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhXFwqYVxuICAgKiAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiByYXdFc2NhcGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0MCB8fCBjb2RlID09PSA0MSB8fCBjb2RlID09PSA5Mikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gcmF3XG4gICAgfVxuICAgIHJldHVybiByYXcoY29kZSlcbiAgfVxufVxuIiwiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkVmZmVjdHN9IEVmZmVjdHNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplQ29udGV4dH0gVG9rZW5pemVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuVHlwZX0gVG9rZW5UeXBlXG4gKi9cblxuaW1wb3J0IHttYXJrZG93bkxpbmVFbmRpbmcsIG1hcmtkb3duU3BhY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3Rlcidcbi8qKlxuICogUGFyc2UgbGFiZWxzLlxuICpcbiAqID4g8J+RiSAqKk5vdGUqKjogbGFiZWxzIGluIG1hcmtkb3duIGFyZSBjYXBwZWQgYXQgOTk5IGNoYXJhY3RlcnMgaW4gdGhlIHN0cmluZy5cbiAqXG4gKiAjIyMjIyMgRXhhbXBsZXNcbiAqXG4gKiBgYGBtYXJrZG93blxuICogW2FdXG4gKiBbYVxuICogYl1cbiAqIFthXFxdYl1cbiAqIGBgYFxuICpcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiAgIFRva2VuaXplIGNvbnRleHQuXG4gKiBAcGFyYW0ge0VmZmVjdHN9IGVmZmVjdHNcbiAqICAgQ29udGV4dC5cbiAqIEBwYXJhbSB7U3RhdGV9IG9rXG4gKiAgIFN0YXRlIHN3aXRjaGVkIHRvIHdoZW4gc3VjY2Vzc2Z1bC5cbiAqIEBwYXJhbSB7U3RhdGV9IG5va1xuICogICBTdGF0ZSBzd2l0Y2hlZCB0byB3aGVuIHVuc3VjY2Vzc2Z1bC5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSB0eXBlXG4gKiAgIFR5cGUgb2YgdGhlIHdob2xlIGxhYmVsIChgW2FdYCkuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gbWFya2VyVHlwZVxuICogICBUeXBlIGZvciB0aGUgbWFya2VycyAoYFtgIGFuZCBgXWApLlxuICogQHBhcmFtIHtUb2tlblR5cGV9IHN0cmluZ1R5cGVcbiAqICAgVHlwZSBmb3IgdGhlIGlkZW50aWZpZXIgKGBhYCkuXG4gKiBAcmV0dXJucyB7U3RhdGV9XG4gKiAgIFN0YXJ0IHN0YXRlLlxuICovIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5leHBvcnQgZnVuY3Rpb24gZmFjdG9yeUxhYmVsKGVmZmVjdHMsIG9rLCBub2ssIHR5cGUsIG1hcmtlclR5cGUsIHN0cmluZ1R5cGUpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgbGV0IHNpemUgPSAwXG4gIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgbGV0IHNlZW5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgLyoqXG4gICAqIFN0YXJ0IG9mIGxhYmVsLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgW2FdXG4gICAqICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgIGVmZmVjdHMuZW50ZXIobWFya2VyVHlwZSlcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQobWFya2VyVHlwZSlcbiAgICBlZmZlY3RzLmVudGVyKHN0cmluZ1R5cGUpXG4gICAgcmV0dXJuIGF0QnJlYWtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBsYWJlbCwgYXQgc29tZXRoaW5nLCBiZWZvcmUgc29tZXRoaW5nIGVsc2UuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBbYV1cbiAgICogICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBhdEJyZWFrKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBzaXplID4gOTk5IHx8XG4gICAgICBjb2RlID09PSBudWxsIHx8XG4gICAgICBjb2RlID09PSA5MSB8fFxuICAgICAgKGNvZGUgPT09IDkzICYmICFzZWVuKSB8fFxuICAgICAgLy8gVG8gZG86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIG9uY2Ugd2XigJl2ZSBzd2l0Y2hlZCBmcm9tXG4gICAgICAvLyBgbWljcm9tYXJrLWV4dGVuc2lvbi1mb290bm90ZWAgdG8gYG1pY3JvbWFyay1leHRlbnNpb24tZ2ZtLWZvb3Rub3RlYCxcbiAgICAgIC8vIHdoaWNoIGRvZXNu4oCZdCBuZWVkIHRoaXMuXG4gICAgICAvLyBIaWRkZW4gZm9vdG5vdGVzIGhvb2suXG4gICAgICAvKiBjOCBpZ25vcmUgbmV4dCAzICovXG4gICAgICAoY29kZSA9PT0gOTQgJiZcbiAgICAgICAgIXNpemUgJiZcbiAgICAgICAgJ19oaWRkZW5Gb290bm90ZVN1cHBvcnQnIGluIHNlbGYucGFyc2VyLmNvbnN0cnVjdHMpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuICAgIGlmIChjb2RlID09PSA5Mykge1xuICAgICAgZWZmZWN0cy5leGl0KHN0cmluZ1R5cGUpXG4gICAgICBlZmZlY3RzLmVudGVyKG1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdChtYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGUpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG5cbiAgICAvLyBUbyBkbzogaW5kZW50PyBMaW5rIGNodW5rcyBhbmQgRU9McyB0b2dldGhlcj9cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcbiAgICAgIHJldHVybiBhdEJyZWFrXG4gICAgfVxuICAgIGVmZmVjdHMuZW50ZXIoJ2NodW5rU3RyaW5nJywge1xuICAgICAgY29udGVudFR5cGU6ICdzdHJpbmcnXG4gICAgfSlcbiAgICByZXR1cm4gbGFiZWxJbnNpZGUoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBsYWJlbCwgaW4gdGV4dC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFthXVxuICAgKiAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGxhYmVsSW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBudWxsIHx8XG4gICAgICBjb2RlID09PSA5MSB8fFxuICAgICAgY29kZSA9PT0gOTMgfHxcbiAgICAgIG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSB8fFxuICAgICAgc2l6ZSsrID4gOTk5XG4gICAgKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NodW5rU3RyaW5nJylcbiAgICAgIHJldHVybiBhdEJyZWFrKGNvZGUpXG4gICAgfVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGlmICghc2Vlbikgc2VlbiA9ICFtYXJrZG93blNwYWNlKGNvZGUpXG4gICAgcmV0dXJuIGNvZGUgPT09IDkyID8gbGFiZWxFc2NhcGUgOiBsYWJlbEluc2lkZVxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGBcXGAsIGF0IGEgc3BlY2lhbCBjaGFyYWN0ZXIuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBbYVxcKmFdXG4gICAqICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBsYWJlbEVzY2FwZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDkxIHx8IGNvZGUgPT09IDkyIHx8IGNvZGUgPT09IDkzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHNpemUrK1xuICAgICAgcmV0dXJuIGxhYmVsSW5zaWRlXG4gICAgfVxuICAgIHJldHVybiBsYWJlbEluc2lkZShjb2RlKVxuICB9XG59XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ29kZX0gQ29kZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5FZmZlY3RzfSBFZmZlY3RzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlN0YXRlfSBTdGF0ZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlblR5cGV9IFRva2VuVHlwZVxuICovXG5cbmltcG9ydCB7ZmFjdG9yeVNwYWNlfSBmcm9tICdtaWNyb21hcmstZmFjdG9yeS1zcGFjZSdcbmltcG9ydCB7bWFya2Rvd25MaW5lRW5kaW5nfSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG4vKipcbiAqIFBhcnNlIHRpdGxlcy5cbiAqXG4gKiAjIyMjIyMgRXhhbXBsZXNcbiAqXG4gKiBgYGBtYXJrZG93blxuICogXCJhXCJcbiAqICdiJ1xuICogKGMpXG4gKiBcImFcbiAqIGJcIlxuICogJ2FcbiAqICAgICBiJ1xuICogKGFcXCliKVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtFZmZlY3RzfSBlZmZlY3RzXG4gKiAgIENvbnRleHQuXG4gKiBAcGFyYW0ge1N0YXRlfSBva1xuICogICBTdGF0ZSBzd2l0Y2hlZCB0byB3aGVuIHN1Y2Nlc3NmdWwuXG4gKiBAcGFyYW0ge1N0YXRlfSBub2tcbiAqICAgU3RhdGUgc3dpdGNoZWQgdG8gd2hlbiB1bnN1Y2Nlc3NmdWwuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gdHlwZVxuICogICBUeXBlIG9mIHRoZSB3aG9sZSB0aXRsZSAoYFwiYVwiYCwgYCdiJ2AsIGAoYylgKS5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSBtYXJrZXJUeXBlXG4gKiAgIFR5cGUgZm9yIHRoZSBtYXJrZXJzIChgXCJgLCBgJ2AsIGAoYCwgYW5kIGApYCkuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gc3RyaW5nVHlwZVxuICogICBUeXBlIGZvciB0aGUgdmFsdWUgKGBhYCkuXG4gKiBAcmV0dXJucyB7U3RhdGV9XG4gKiAgIFN0YXJ0IHN0YXRlLlxuICovIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5leHBvcnQgZnVuY3Rpb24gZmFjdG9yeVRpdGxlKGVmZmVjdHMsIG9rLCBub2ssIHR5cGUsIG1hcmtlclR5cGUsIHN0cmluZ1R5cGUpIHtcbiAgLyoqIEB0eXBlIHtOb25OdWxsYWJsZTxDb2RlPn0gKi9cbiAgbGV0IG1hcmtlclxuICByZXR1cm4gc3RhcnRcblxuICAvKipcbiAgICogU3RhcnQgb2YgdGl0bGUuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBcImFcIlxuICAgKiAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSAzNCB8fCBjb2RlID09PSAzOSB8fCBjb2RlID09PSA0MCkge1xuICAgICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgICAgZWZmZWN0cy5lbnRlcihtYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQobWFya2VyVHlwZSlcbiAgICAgIG1hcmtlciA9IGNvZGUgPT09IDQwID8gNDEgOiBjb2RlXG4gICAgICByZXR1cm4gYmVnaW5cbiAgICB9XG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIG9wZW5pbmcgbWFya2VyLlxuICAgKlxuICAgKiBUaGlzIGlzIGFsc28gdXNlZCBhdCB0aGUgY2xvc2luZyBtYXJrZXIuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBcImFcIlxuICAgKiAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGJlZ2luKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKG1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdChtYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGUpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG4gICAgZWZmZWN0cy5lbnRlcihzdHJpbmdUeXBlKVxuICAgIHJldHVybiBhdEJyZWFrKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQXQgc29tZXRoaW5nLCBiZWZvcmUgc29tZXRoaW5nIGVsc2UuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBcImFcIlxuICAgKiAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGF0QnJlYWsoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgIGVmZmVjdHMuZXhpdChzdHJpbmdUeXBlKVxuICAgICAgcmV0dXJuIGJlZ2luKG1hcmtlcilcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICAvLyBOb3RlOiBibGFuayBsaW5lcyBjYW7igJl0IGV4aXN0IGluIGNvbnRlbnQuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgLy8gVG8gZG86IHVzZSBgc3BhY2Vfb3JfdGFiX2VvbF93aXRoX29wdGlvbnNgLCBjb25uZWN0LlxuICAgICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgICByZXR1cm4gZmFjdG9yeVNwYWNlKGVmZmVjdHMsIGF0QnJlYWssICdsaW5lUHJlZml4JylcbiAgICB9XG4gICAgZWZmZWN0cy5lbnRlcignY2h1bmtTdHJpbmcnLCB7XG4gICAgICBjb250ZW50VHlwZTogJ3N0cmluZydcbiAgICB9KVxuICAgIHJldHVybiBpbnNpZGUoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBpbnNpZGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIgfHwgY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2h1bmtTdHJpbmcnKVxuICAgICAgcmV0dXJuIGF0QnJlYWsoY29kZSlcbiAgICB9XG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvZGUgPT09IDkyID8gZXNjYXBlIDogaW5zaWRlXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgYFxcYCwgYXQgYSBzcGVjaWFsIGNoYXJhY3Rlci5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFwiYVxcKmJcIlxuICAgKiAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGVzY2FwZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlciB8fCBjb2RlID09PSA5Mikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5zaWRlXG4gICAgfVxuICAgIHJldHVybiBpbnNpZGUoY29kZSlcbiAgfVxufVxuIiwiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkVmZmVjdHN9IEVmZmVjdHNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKi9cblxuaW1wb3J0IHtmYWN0b3J5U3BhY2V9IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LXNwYWNlJ1xuaW1wb3J0IHttYXJrZG93bkxpbmVFbmRpbmcsIG1hcmtkb3duU3BhY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3Rlcidcbi8qKlxuICogUGFyc2Ugc3BhY2VzIGFuZCB0YWJzLlxuICpcbiAqIFRoZXJlIGlzIG5vIGBub2tgIHBhcmFtZXRlcjpcbiAqXG4gKiAqICAgbGluZSBlbmRpbmdzIG9yIHNwYWNlcyBpbiBtYXJrZG93biBhcmUgb2Z0ZW4gb3B0aW9uYWwsIGluIHdoaWNoIGNhc2UgdGhpc1xuICogICAgIGZhY3RvcnkgY2FuIGJlIHVzZWQgYW5kIGBva2Agd2lsbCBiZSBzd2l0Y2hlZCB0byB3aGV0aGVyIHNwYWNlcyB3ZXJlIGZvdW5kXG4gKiAgICAgb3Igbm90XG4gKiAqICAgb25lIGxpbmUgZW5kaW5nIG9yIHNwYWNlIGNhbiBiZSBkZXRlY3RlZCB3aXRoXG4gKiAgICAgYG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSlgIHJpZ2h0IGJlZm9yZSB1c2luZyBgZmFjdG9yeVdoaXRlc3BhY2VgXG4gKlxuICogQHBhcmFtIHtFZmZlY3RzfSBlZmZlY3RzXG4gKiAgIENvbnRleHQuXG4gKiBAcGFyYW0ge1N0YXRlfSBva1xuICogICBTdGF0ZSBzd2l0Y2hlZCB0byB3aGVuIHN1Y2Nlc3NmdWwuXG4gKiBAcmV0dXJuc1xuICogICBTdGFydCBzdGF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhY3RvcnlXaGl0ZXNwYWNlKGVmZmVjdHMsIG9rKSB7XG4gIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgbGV0IHNlZW5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgICAgc2VlbiA9IHRydWVcbiAgICAgIHJldHVybiBzdGFydFxuICAgIH1cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgcmV0dXJuIGZhY3RvcnlTcGFjZShcbiAgICAgICAgZWZmZWN0cyxcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIHNlZW4gPyAnbGluZVByZWZpeCcgOiAnbGluZVN1ZmZpeCdcbiAgICAgICkoY29kZSlcbiAgICB9XG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cbn1cbiIsIi8qKlxuICogTm9ybWFsaXplIGFuIGlkZW50aWZpZXIgKGFzIGZvdW5kIGluIHJlZmVyZW5jZXMsIGRlZmluaXRpb25zKS5cbiAqXG4gKiBDb2xsYXBzZXMgbWFya2Rvd24gd2hpdGVzcGFjZSwgdHJpbSwgYW5kIHRoZW4gbG93ZXItIGFuZCB1cHBlcmNhc2UuXG4gKlxuICogU29tZSBjaGFyYWN0ZXJzIGFyZSBjb25zaWRlcmVkIOKAnHVwcGVyY2FzZeKAnSwgc3VjaCBhcyBVKzAzRjQgKGDPtGApLCBidXQgaWYgdGhlaXJcbiAqIGxvd2VyY2FzZSBjb3VudGVycGFydCAoVSswM0I4IChgzrhgKSkgaXMgdXBwZXJjYXNlZCB3aWxsIHJlc3VsdCBpbiBhIGRpZmZlcmVudFxuICogdXBwZXJjYXNlIGNoYXJhY3RlciAoVSswMzk4IChgzphgKSkuXG4gKiBTbywgdG8gZ2V0IGEgY2Fub25pY2FsIGZvcm0sIHdlIHBlcmZvcm0gYm90aCBsb3dlci0gYW5kIHVwcGVyY2FzZS5cbiAqXG4gKiBVc2luZyB1cHBlcmNhc2UgbGFzdCBtYWtlcyBzdXJlIGtleXMgd2lsbCBuZXZlciBpbnRlcmFjdCB3aXRoIGRlZmF1bHRcbiAqIHByb3RvdHlwYWwgdmFsdWVzIChzdWNoIGFzIGBjb25zdHJ1Y3RvcmApOiBub3RoaW5nIGluIHRoZSBwcm90b3R5cGUgb2ZcbiAqIGBPYmplY3RgIGlzIHVwcGVyY2FzZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgSWRlbnRpZmllciB0byBub3JtYWxpemUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogICBOb3JtYWxpemVkIGlkZW50aWZpZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVJZGVudGlmaWVyKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWVcbiAgICAgIC8vIENvbGxhcHNlIG1hcmtkb3duIHdoaXRlc3BhY2UuXG4gICAgICAucmVwbGFjZSgvW1xcdFxcblxcciBdKy9nLCAnICcpXG4gICAgICAvLyBUcmltLlxuICAgICAgLnJlcGxhY2UoL14gfCAkL2csICcnKVxuICAgICAgLy8gU29tZSBjaGFyYWN0ZXJzIGFyZSBjb25zaWRlcmVkIOKAnHVwcGVyY2FzZeKAnSwgYnV0IGlmIHRoZWlyIGxvd2VyY2FzZVxuICAgICAgLy8gY291bnRlcnBhcnQgaXMgdXBwZXJjYXNlZCB3aWxsIHJlc3VsdCBpbiBhIGRpZmZlcmVudCB1cHBlcmNhc2VcbiAgICAgIC8vIGNoYXJhY3Rlci5cbiAgICAgIC8vIEhlbmNlLCB0byBnZXQgdGhhdCBmb3JtLCB3ZSBwZXJmb3JtIGJvdGggbG93ZXItIGFuZCB1cHBlcmNhc2UuXG4gICAgICAvLyBVcHBlciBjYXNlIG1ha2VzIHN1cmUga2V5cyB3aWxsIG5vdCBpbnRlcmFjdCB3aXRoIGRlZmF1bHQgcHJvdG90eXBhbFxuICAgICAgLy8gbWV0aG9kczogbm8gbWV0aG9kIGlzIHVwcGVyY2FzZS5cbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAudG9VcHBlckNhc2UoKVxuICApXG59XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ29uc3RydWN0fSBDb25zdHJ1Y3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplQ29udGV4dH0gVG9rZW5pemVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplcn0gVG9rZW5pemVyXG4gKi9cblxuaW1wb3J0IHtmYWN0b3J5RGVzdGluYXRpb259IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHtmYWN0b3J5TGFiZWx9IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LWxhYmVsJ1xuaW1wb3J0IHtmYWN0b3J5U3BhY2V9IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LXNwYWNlJ1xuaW1wb3J0IHtmYWN0b3J5VGl0bGV9IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LXRpdGxlJ1xuaW1wb3J0IHtmYWN0b3J5V2hpdGVzcGFjZX0gZnJvbSAnbWljcm9tYXJrLWZhY3Rvcnktd2hpdGVzcGFjZSdcbmltcG9ydCB7XG4gIG1hcmtkb3duTGluZUVuZGluZyxcbiAgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSxcbiAgbWFya2Rvd25TcGFjZVxufSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG5pbXBvcnQge25vcm1hbGl6ZUlkZW50aWZpZXJ9IGZyb20gJ21pY3JvbWFyay11dGlsLW5vcm1hbGl6ZS1pZGVudGlmaWVyJ1xuLyoqIEB0eXBlIHtDb25zdHJ1Y3R9ICovXG5leHBvcnQgY29uc3QgZGVmaW5pdGlvbiA9IHtcbiAgbmFtZTogJ2RlZmluaXRpb24nLFxuICB0b2tlbml6ZTogdG9rZW5pemVEZWZpbml0aW9uXG59XG5cbi8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuY29uc3QgdGl0bGVCZWZvcmUgPSB7XG4gIHRva2VuaXplOiB0b2tlbml6ZVRpdGxlQmVmb3JlLFxuICBwYXJ0aWFsOiB0cnVlXG59XG5cbi8qKlxuICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAqIEB0eXBlIHtUb2tlbml6ZXJ9XG4gKi9cbmZ1bmN0aW9uIHRva2VuaXplRGVmaW5pdGlvbihlZmZlY3RzLCBvaywgbm9rKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzXG4gIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICBsZXQgaWRlbnRpZmllclxuICByZXR1cm4gc3RhcnRcblxuICAvKipcbiAgICogQXQgc3RhcnQgb2YgYSBkZWZpbml0aW9uLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgW2FdOiBiIFwiY1wiXG4gICAqICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgLy8gRG8gbm90IGludGVycnVwdCBwYXJhZ3JhcGhzIChidXQgZG8gZm9sbG93IGRlZmluaXRpb25zKS5cbiAgICAvLyBUbyBkbzogZG8gYGludGVycnVwdGAgdGhlIHdheSBgbWFya2Rvd24tcnNgIGRvZXMuXG4gICAgLy8gVG8gZG86IHBhcnNlIHdoaXRlc3BhY2UgdGhlIHdheSBgbWFya2Rvd24tcnNgIGRvZXMuXG4gICAgZWZmZWN0cy5lbnRlcignZGVmaW5pdGlvbicpXG4gICAgcmV0dXJuIGJlZm9yZShjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIG9wdGlvbmFsIHdoaXRlc3BhY2UsIGF0IGBbYC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFthXTogYiBcImNcIlxuICAgKiAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gYmVmb3JlKGNvZGUpIHtcbiAgICAvLyBUbyBkbzogcGFyc2Ugd2hpdGVzcGFjZSB0aGUgd2F5IGBtYXJrZG93bi1yc2AgZG9lcy5cblxuICAgIHJldHVybiBmYWN0b3J5TGFiZWwuY2FsbChcbiAgICAgIHNlbGYsXG4gICAgICBlZmZlY3RzLFxuICAgICAgbGFiZWxBZnRlcixcbiAgICAgIC8vIE5vdGU6IHdlIGRvbuKAmXQgbmVlZCB0byByZXNldCB0aGUgd2F5IGBtYXJrZG93bi1yc2AgZG9lcy5cbiAgICAgIG5vayxcbiAgICAgICdkZWZpbml0aW9uTGFiZWwnLFxuICAgICAgJ2RlZmluaXRpb25MYWJlbE1hcmtlcicsXG4gICAgICAnZGVmaW5pdGlvbkxhYmVsU3RyaW5nJ1xuICAgICkoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBsYWJlbC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFthXTogYiBcImNcIlxuICAgKiAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gbGFiZWxBZnRlcihjb2RlKSB7XG4gICAgaWRlbnRpZmllciA9IG5vcm1hbGl6ZUlkZW50aWZpZXIoXG4gICAgICBzZWxmLnNsaWNlU2VyaWFsaXplKHNlbGYuZXZlbnRzW3NlbGYuZXZlbnRzLmxlbmd0aCAtIDFdWzFdKS5zbGljZSgxLCAtMSlcbiAgICApXG4gICAgaWYgKGNvZGUgPT09IDU4KSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdkZWZpbml0aW9uTWFya2VyJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdkZWZpbml0aW9uTWFya2VyJylcbiAgICAgIHJldHVybiBtYXJrZXJBZnRlclxuICAgIH1cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgbWFya2VyLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgW2FdOiBiIFwiY1wiXG4gICAqICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gbWFya2VyQWZ0ZXIoY29kZSkge1xuICAgIC8vIE5vdGU6IHdoaXRlc3BhY2UgaXMgb3B0aW9uYWwuXG4gICAgcmV0dXJuIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSlcbiAgICAgID8gZmFjdG9yeVdoaXRlc3BhY2UoZWZmZWN0cywgZGVzdGluYXRpb25CZWZvcmUpKGNvZGUpXG4gICAgICA6IGRlc3RpbmF0aW9uQmVmb3JlKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQmVmb3JlIGRlc3RpbmF0aW9uLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgW2FdOiBiIFwiY1wiXG4gICAqICAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGRlc3RpbmF0aW9uQmVmb3JlKGNvZGUpIHtcbiAgICByZXR1cm4gZmFjdG9yeURlc3RpbmF0aW9uKFxuICAgICAgZWZmZWN0cyxcbiAgICAgIGRlc3RpbmF0aW9uQWZ0ZXIsXG4gICAgICAvLyBOb3RlOiB3ZSBkb27igJl0IG5lZWQgdG8gcmVzZXQgdGhlIHdheSBgbWFya2Rvd24tcnNgIGRvZXMuXG4gICAgICBub2ssXG4gICAgICAnZGVmaW5pdGlvbkRlc3RpbmF0aW9uJyxcbiAgICAgICdkZWZpbml0aW9uRGVzdGluYXRpb25MaXRlcmFsJyxcbiAgICAgICdkZWZpbml0aW9uRGVzdGluYXRpb25MaXRlcmFsTWFya2VyJyxcbiAgICAgICdkZWZpbml0aW9uRGVzdGluYXRpb25SYXcnLFxuICAgICAgJ2RlZmluaXRpb25EZXN0aW5hdGlvblN0cmluZydcbiAgICApKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgZGVzdGluYXRpb24uXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBbYV06IGIgXCJjXCJcbiAgICogICAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGRlc3RpbmF0aW9uQWZ0ZXIoY29kZSkge1xuICAgIHJldHVybiBlZmZlY3RzLmF0dGVtcHQodGl0bGVCZWZvcmUsIGFmdGVyLCBhZnRlcikoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBkZWZpbml0aW9uLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgW2FdOiBiXG4gICAqICAgICAgICAgICBeXG4gICAqID4gfCBbYV06IGIgXCJjXCJcbiAgICogICAgICAgICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBhZnRlcihjb2RlKSB7XG4gICAgcmV0dXJuIG1hcmtkb3duU3BhY2UoY29kZSlcbiAgICAgID8gZmFjdG9yeVNwYWNlKGVmZmVjdHMsIGFmdGVyV2hpdGVzcGFjZSwgJ3doaXRlc3BhY2UnKShjb2RlKVxuICAgICAgOiBhZnRlcldoaXRlc3BhY2UoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBkZWZpbml0aW9uLCBhZnRlciBvcHRpb25hbCB3aGl0ZXNwYWNlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgW2FdOiBiXG4gICAqICAgICAgICAgICBeXG4gICAqID4gfCBbYV06IGIgXCJjXCJcbiAgICogICAgICAgICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBhZnRlcldoaXRlc3BhY2UoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KCdkZWZpbml0aW9uJylcblxuICAgICAgLy8gTm90ZTogd2UgZG9u4oCZdCBjYXJlIGFib3V0IHVuaXF1ZW5lc3MuXG4gICAgICAvLyBJdOKAmXMgbGlrZWx5IHRoYXQgdGhhdCBkb2VzbuKAmXQgaGFwcGVuIHZlcnkgZnJlcXVlbnRseS5cbiAgICAgIC8vIEl0IGlzIG1vcmUgbGlrZWx5IHRoYXQgaXQgd2FzdGVzIHByZWNpb3VzIHRpbWUuXG4gICAgICBzZWxmLnBhcnNlci5kZWZpbmVkLnB1c2goaWRlbnRpZmllcilcblxuICAgICAgLy8gVG8gZG86IGBtYXJrZG93bi1yc2AgaW50ZXJydXB0LlxuICAgICAgLy8gLy8gWW914oCZZCBiZSBpbnRlcnJ1cHRpbmcuXG4gICAgICAvLyB0b2tlbml6ZXIuaW50ZXJydXB0ID0gdHJ1ZVxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZVRpdGxlQmVmb3JlKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIHRpdGxlQmVmb3JlXG5cbiAgLyoqXG4gICAqIEFmdGVyIGRlc3RpbmF0aW9uLCBhdCB3aGl0ZXNwYWNlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgW2FdOiBiXG4gICAqICAgICAgICAgICBeXG4gICAqID4gfCBbYV06IGIgXCJjXCJcbiAgICogICAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHRpdGxlQmVmb3JlKGNvZGUpIHtcbiAgICByZXR1cm4gbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKVxuICAgICAgPyBmYWN0b3J5V2hpdGVzcGFjZShlZmZlY3RzLCBiZWZvcmVNYXJrZXIpKGNvZGUpXG4gICAgICA6IG5vayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEF0IHRpdGxlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiAgIHwgW2FdOiBiXG4gICAqID4gfCBcImNcIlxuICAgKiAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gYmVmb3JlTWFya2VyKGNvZGUpIHtcbiAgICByZXR1cm4gZmFjdG9yeVRpdGxlKFxuICAgICAgZWZmZWN0cyxcbiAgICAgIHRpdGxlQWZ0ZXIsXG4gICAgICBub2ssXG4gICAgICAnZGVmaW5pdGlvblRpdGxlJyxcbiAgICAgICdkZWZpbml0aW9uVGl0bGVNYXJrZXInLFxuICAgICAgJ2RlZmluaXRpb25UaXRsZVN0cmluZydcbiAgICApKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgdGl0bGUuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBbYV06IGIgXCJjXCJcbiAgICogICAgICAgICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiB0aXRsZUFmdGVyKGNvZGUpIHtcbiAgICByZXR1cm4gbWFya2Rvd25TcGFjZShjb2RlKVxuICAgICAgPyBmYWN0b3J5U3BhY2UoZWZmZWN0cywgdGl0bGVBZnRlck9wdGlvbmFsV2hpdGVzcGFjZSwgJ3doaXRlc3BhY2UnKShjb2RlKVxuICAgICAgOiB0aXRsZUFmdGVyT3B0aW9uYWxXaGl0ZXNwYWNlKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgdGl0bGUsIGFmdGVyIG9wdGlvbmFsIHdoaXRlc3BhY2UuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBbYV06IGIgXCJjXCJcbiAgICogICAgICAgICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiB0aXRsZUFmdGVyT3B0aW9uYWxXaGl0ZXNwYWNlKGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkgPyBvayhjb2RlKSA6IG5vayhjb2RlKVxuICB9XG59XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ29uc3RydWN0fSBDb25zdHJ1Y3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplQ29udGV4dH0gVG9rZW5pemVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplcn0gVG9rZW5pemVyXG4gKi9cblxuaW1wb3J0IHttYXJrZG93bkxpbmVFbmRpbmd9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3Rlcidcbi8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuZXhwb3J0IGNvbnN0IGhhcmRCcmVha0VzY2FwZSA9IHtcbiAgbmFtZTogJ2hhcmRCcmVha0VzY2FwZScsXG4gIHRva2VuaXplOiB0b2tlbml6ZUhhcmRCcmVha0VzY2FwZVxufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZUhhcmRCcmVha0VzY2FwZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIC8qKlxuICAgKiBTdGFydCBvZiBhIGhhcmQgYnJlYWsgKGVzY2FwZSkuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhXFxcbiAgICogICAgICBeXG4gICAqICAgfCBiXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignaGFyZEJyZWFrRXNjYXBlJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gYWZ0ZXJcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBgXFxgLCBhdCBlb2wuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhXFxcbiAgICogICAgICAgXlxuICAgKiAgIHwgYlxuICAgKiBgYGBcbiAgICpcbiAgICogIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2hhcmRCcmVha0VzY2FwZScpXG4gICAgICByZXR1cm4gb2soY29kZSlcbiAgICB9XG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ29uc3RydWN0fSBDb25zdHJ1Y3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuUmVzb2x2ZXJ9IFJlc29sdmVyXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlN0YXRlfSBTdGF0ZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbn0gVG9rZW5cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVDb250ZXh0fSBUb2tlbml6ZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVyfSBUb2tlbml6ZXJcbiAqL1xuXG5pbXBvcnQge2ZhY3RvcnlTcGFjZX0gZnJvbSAnbWljcm9tYXJrLWZhY3Rvcnktc3BhY2UnXG5pbXBvcnQge1xuICBtYXJrZG93bkxpbmVFbmRpbmcsXG4gIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UsXG4gIG1hcmtkb3duU3BhY2Vcbn0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyJ1xuaW1wb3J0IHtzcGxpY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNodW5rZWQnXG4vKiogQHR5cGUge0NvbnN0cnVjdH0gKi9cbmV4cG9ydCBjb25zdCBoZWFkaW5nQXR4ID0ge1xuICBuYW1lOiAnaGVhZGluZ0F0eCcsXG4gIHRva2VuaXplOiB0b2tlbml6ZUhlYWRpbmdBdHgsXG4gIHJlc29sdmU6IHJlc29sdmVIZWFkaW5nQXR4XG59XG5cbi8qKiBAdHlwZSB7UmVzb2x2ZXJ9ICovXG5mdW5jdGlvbiByZXNvbHZlSGVhZGluZ0F0eChldmVudHMsIGNvbnRleHQpIHtcbiAgbGV0IGNvbnRlbnRFbmQgPSBldmVudHMubGVuZ3RoIC0gMlxuICBsZXQgY29udGVudFN0YXJ0ID0gM1xuICAvKiogQHR5cGUge1Rva2VufSAqL1xuICBsZXQgY29udGVudFxuICAvKiogQHR5cGUge1Rva2VufSAqL1xuICBsZXQgdGV4dFxuXG4gIC8vIFByZWZpeCB3aGl0ZXNwYWNlLCBwYXJ0IG9mIHRoZSBvcGVuaW5nLlxuICBpZiAoZXZlbnRzW2NvbnRlbnRTdGFydF1bMV0udHlwZSA9PT0gJ3doaXRlc3BhY2UnKSB7XG4gICAgY29udGVudFN0YXJ0ICs9IDJcbiAgfVxuXG4gIC8vIFN1ZmZpeCB3aGl0ZXNwYWNlLCBwYXJ0IG9mIHRoZSBjbG9zaW5nLlxuICBpZiAoXG4gICAgY29udGVudEVuZCAtIDIgPiBjb250ZW50U3RhcnQgJiZcbiAgICBldmVudHNbY29udGVudEVuZF1bMV0udHlwZSA9PT0gJ3doaXRlc3BhY2UnXG4gICkge1xuICAgIGNvbnRlbnRFbmQgLT0gMlxuICB9XG4gIGlmIChcbiAgICBldmVudHNbY29udGVudEVuZF1bMV0udHlwZSA9PT0gJ2F0eEhlYWRpbmdTZXF1ZW5jZScgJiZcbiAgICAoY29udGVudFN0YXJ0ID09PSBjb250ZW50RW5kIC0gMSB8fFxuICAgICAgKGNvbnRlbnRFbmQgLSA0ID4gY29udGVudFN0YXJ0ICYmXG4gICAgICAgIGV2ZW50c1tjb250ZW50RW5kIC0gMl1bMV0udHlwZSA9PT0gJ3doaXRlc3BhY2UnKSlcbiAgKSB7XG4gICAgY29udGVudEVuZCAtPSBjb250ZW50U3RhcnQgKyAxID09PSBjb250ZW50RW5kID8gMiA6IDRcbiAgfVxuICBpZiAoY29udGVudEVuZCA+IGNvbnRlbnRTdGFydCkge1xuICAgIGNvbnRlbnQgPSB7XG4gICAgICB0eXBlOiAnYXR4SGVhZGluZ1RleHQnLFxuICAgICAgc3RhcnQ6IGV2ZW50c1tjb250ZW50U3RhcnRdWzFdLnN0YXJ0LFxuICAgICAgZW5kOiBldmVudHNbY29udGVudEVuZF1bMV0uZW5kXG4gICAgfVxuICAgIHRleHQgPSB7XG4gICAgICB0eXBlOiAnY2h1bmtUZXh0JyxcbiAgICAgIHN0YXJ0OiBldmVudHNbY29udGVudFN0YXJ0XVsxXS5zdGFydCxcbiAgICAgIGVuZDogZXZlbnRzW2NvbnRlbnRFbmRdWzFdLmVuZCxcbiAgICAgIGNvbnRlbnRUeXBlOiAndGV4dCdcbiAgICB9XG4gICAgc3BsaWNlKGV2ZW50cywgY29udGVudFN0YXJ0LCBjb250ZW50RW5kIC0gY29udGVudFN0YXJ0ICsgMSwgW1xuICAgICAgWydlbnRlcicsIGNvbnRlbnQsIGNvbnRleHRdLFxuICAgICAgWydlbnRlcicsIHRleHQsIGNvbnRleHRdLFxuICAgICAgWydleGl0JywgdGV4dCwgY29udGV4dF0sXG4gICAgICBbJ2V4aXQnLCBjb250ZW50LCBjb250ZXh0XVxuICAgIF0pXG4gIH1cbiAgcmV0dXJuIGV2ZW50c1xufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZUhlYWRpbmdBdHgoZWZmZWN0cywgb2ssIG5vaykge1xuICBsZXQgc2l6ZSA9IDBcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgLyoqXG4gICAqIFN0YXJ0IG9mIGEgaGVhZGluZyAoYXR4KS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8ICMjIGFhXG4gICAqICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgLy8gVG8gZG86IHBhcnNlIGluZGVudCBsaWtlIGBtYXJrZG93bi1yc2AuXG4gICAgZWZmZWN0cy5lbnRlcignYXR4SGVhZGluZycpXG4gICAgcmV0dXJuIGJlZm9yZShjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIG9wdGlvbmFsIHdoaXRlc3BhY2UsIGF0IGAjYC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8ICMjIGFhXG4gICAqICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBiZWZvcmUoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2F0eEhlYWRpbmdTZXF1ZW5jZScpXG4gICAgcmV0dXJuIHNlcXVlbmNlT3Blbihjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIG9wZW5pbmcgc2VxdWVuY2UuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCAjIyBhYVxuICAgKiAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gc2VxdWVuY2VPcGVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gMzUgJiYgc2l6ZSsrIDwgNikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gc2VxdWVuY2VPcGVuXG4gICAgfVxuXG4gICAgLy8gQWx3YXlzIGF0IGxlYXN0IG9uZSBgI2AuXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KCdhdHhIZWFkaW5nU2VxdWVuY2UnKVxuICAgICAgcmV0dXJuIGF0QnJlYWsoY29kZSlcbiAgICB9XG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIHNvbWV0aGluZywgYmVmb3JlIHNvbWV0aGluZyBlbHNlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgIyMgYWFcbiAgICogICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gYXRCcmVhayhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDM1KSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdhdHhIZWFkaW5nU2VxdWVuY2UnKVxuICAgICAgcmV0dXJuIHNlcXVlbmNlRnVydGhlcihjb2RlKVxuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnYXR4SGVhZGluZycpXG4gICAgICAvLyBUbyBkbzogaW50ZXJydXB0IGxpa2UgYG1hcmtkb3duLXJzYC5cbiAgICAgIC8vIC8vIEZlZWwgZnJlZSB0byBpbnRlcnJ1cHQuXG4gICAgICAvLyB0b2tlbml6ZXIuaW50ZXJydXB0ID0gZmFsc2VcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgcmV0dXJuIGZhY3RvcnlTcGFjZShlZmZlY3RzLCBhdEJyZWFrLCAnd2hpdGVzcGFjZScpKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gVG8gZG86IGdlbmVyYXRlIGBkYXRhYCB0b2tlbnMsIGFkZCB0aGUgYHRleHRgIHRva2VuIGxhdGVyLlxuICAgIC8vIE5lZWRzIGVkaXQgbWFwLCBzZWU6IGBtYXJrZG93bi5yc2AuXG4gICAgZWZmZWN0cy5lbnRlcignYXR4SGVhZGluZ1RleHQnKVxuICAgIHJldHVybiBkYXRhKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gZnVydGhlciBzZXF1ZW5jZSAoYWZ0ZXIgd2hpdGVzcGFjZSkuXG4gICAqXG4gICAqIENvdWxkIGJlIG5vcm1hbCDigJx2aXNpYmxl4oCdIGhhc2hlcyBpbiB0aGUgaGVhZGluZyBvciBhIGZpbmFsIHNlcXVlbmNlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgIyMgYWEgIyNcbiAgICogICAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHNlcXVlbmNlRnVydGhlcihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDM1KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBzZXF1ZW5jZUZ1cnRoZXJcbiAgICB9XG4gICAgZWZmZWN0cy5leGl0KCdhdHhIZWFkaW5nU2VxdWVuY2UnKVxuICAgIHJldHVybiBhdEJyZWFrKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gdGV4dC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8ICMjIGFhXG4gICAqICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBkYXRhKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBjb2RlID09PSAzNSB8fCBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2F0eEhlYWRpbmdUZXh0JylcbiAgICAgIHJldHVybiBhdEJyZWFrKGNvZGUpXG4gICAgfVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBkYXRhXG4gIH1cbn1cbiIsIi8qKlxuICogTGlzdCBvZiBsb3dlcmNhc2UgSFRNTCDigJxibG9ja+KAnSB0YWcgbmFtZXMuXG4gKlxuICogVGhlIGxpc3QsIHdoZW4gcGFyc2luZyBIVE1MIChmbG93KSwgcmVzdWx0cyBpbiBtb3JlIHJlbGF4ZWQgcnVsZXMgKGNvbmRpdGlvblxuICogNikuXG4gKiBCZWNhdXNlIHRoZXkgYXJlIGtub3duIGJsb2NrcywgdGhlIEhUTUwtbGlrZSBzeW50YXggZG9lc27igJl0IGhhdmUgdG8gYmVcbiAqIHN0cmljdGx5IHBhcnNlZC5cbiAqIEZvciB0YWcgbmFtZXMgbm90IGluIHRoaXMgbGlzdCwgYSBtb3JlIHN0cmljdCBhbGdvcml0aG0gKGNvbmRpdGlvbiA3KSBpcyB1c2VkXG4gKiB0byBkZXRlY3Qgd2hldGhlciB0aGUgSFRNTC1saWtlIHN5bnRheCBpcyBzZWVuIGFzIEhUTUwgKGZsb3cpIG9yIG5vdC5cbiAqXG4gKiBUaGlzIGlzIGNvcGllZCBmcm9tOlxuICogPGh0dHBzOi8vc3BlYy5jb21tb25tYXJrLm9yZy8wLjMwLyNodG1sLWJsb2Nrcz4uXG4gKlxuICogPiDwn5GJICoqTm90ZSoqOiBgc2VhcmNoYCB3YXMgYWRkZWQgaW4gYENvbW1vbk1hcmtAMC4zMWAuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sQmxvY2tOYW1lcyA9IFtcbiAgJ2FkZHJlc3MnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdiYXNlJyxcbiAgJ2Jhc2Vmb250JyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnYm9keScsXG4gICdjYXB0aW9uJyxcbiAgJ2NlbnRlcicsXG4gICdjb2wnLFxuICAnY29sZ3JvdXAnLFxuICAnZGQnLFxuICAnZGV0YWlscycsXG4gICdkaWFsb2cnLFxuICAnZGlyJyxcbiAgJ2RpdicsXG4gICdkbCcsXG4gICdkdCcsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmb290ZXInLFxuICAnZm9ybScsXG4gICdmcmFtZScsXG4gICdmcmFtZXNldCcsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdoNScsXG4gICdoNicsXG4gICdoZWFkJyxcbiAgJ2hlYWRlcicsXG4gICdocicsXG4gICdodG1sJyxcbiAgJ2lmcmFtZScsXG4gICdsZWdlbmQnLFxuICAnbGknLFxuICAnbGluaycsXG4gICdtYWluJyxcbiAgJ21lbnUnLFxuICAnbWVudWl0ZW0nLFxuICAnbmF2JyxcbiAgJ25vZnJhbWVzJyxcbiAgJ29sJyxcbiAgJ29wdGdyb3VwJyxcbiAgJ29wdGlvbicsXG4gICdwJyxcbiAgJ3BhcmFtJyxcbiAgJ3NlYXJjaCcsXG4gICdzZWN0aW9uJyxcbiAgJ3N1bW1hcnknLFxuICAndGFibGUnLFxuICAndGJvZHknLFxuICAndGQnLFxuICAndGZvb3QnLFxuICAndGgnLFxuICAndGhlYWQnLFxuICAndGl0bGUnLFxuICAndHInLFxuICAndHJhY2snLFxuICAndWwnXG5dXG5cbi8qKlxuICogTGlzdCBvZiBsb3dlcmNhc2UgSFRNTCDigJxyYXfigJ0gdGFnIG5hbWVzLlxuICpcbiAqIFRoZSBsaXN0LCB3aGVuIHBhcnNpbmcgSFRNTCAoZmxvdyksIHJlc3VsdHMgaW4gSFRNTCB0aGF0IGNhbiBpbmNsdWRlIGxpbmVzXG4gKiB3aXRob3V0IGV4aXRpbmcsIHVudGlsIGEgY2xvc2luZyB0YWcgYWxzbyBpbiB0aGlzIGxpc3QgaXMgZm91bmQgKGNvbmRpdGlvblxuICogMSkuXG4gKlxuICogVGhpcyBtb2R1bGUgaXMgY29waWVkIGZyb206XG4gKiA8aHR0cHM6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMzAvI2h0bWwtYmxvY2tzPi5cbiAqXG4gKiA+IPCfkYkgKipOb3RlKio6IGB0ZXh0YXJlYWAgd2FzIGFkZGVkIGluIGBDb21tb25NYXJrQDAuMzBgLlxuICovXG5leHBvcnQgY29uc3QgaHRtbFJhd05hbWVzID0gWydwcmUnLCAnc2NyaXB0JywgJ3N0eWxlJywgJ3RleHRhcmVhJ11cbiIsIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Db2RlfSBDb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvbnN0cnVjdH0gQ29uc3RydWN0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlJlc29sdmVyfSBSZXNvbHZlclxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVDb250ZXh0fSBUb2tlbml6ZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVyfSBUb2tlbml6ZXJcbiAqL1xuXG5pbXBvcnQge1xuICBhc2NpaUFscGhhLFxuICBhc2NpaUFscGhhbnVtZXJpYyxcbiAgbWFya2Rvd25MaW5lRW5kaW5nLFxuICBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlLFxuICBtYXJrZG93blNwYWNlXG59IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3RlcidcbmltcG9ydCB7aHRtbEJsb2NrTmFtZXMsIGh0bWxSYXdOYW1lc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtaHRtbC10YWctbmFtZSdcbmltcG9ydCB7YmxhbmtMaW5lfSBmcm9tICcuL2JsYW5rLWxpbmUuanMnXG5cbi8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuZXhwb3J0IGNvbnN0IGh0bWxGbG93ID0ge1xuICBuYW1lOiAnaHRtbEZsb3cnLFxuICB0b2tlbml6ZTogdG9rZW5pemVIdG1sRmxvdyxcbiAgcmVzb2x2ZVRvOiByZXNvbHZlVG9IdG1sRmxvdyxcbiAgY29uY3JldGU6IHRydWVcbn1cblxuLyoqIEB0eXBlIHtDb25zdHJ1Y3R9ICovXG5jb25zdCBibGFua0xpbmVCZWZvcmUgPSB7XG4gIHRva2VuaXplOiB0b2tlbml6ZUJsYW5rTGluZUJlZm9yZSxcbiAgcGFydGlhbDogdHJ1ZVxufVxuY29uc3Qgbm9uTGF6eUNvbnRpbnVhdGlvblN0YXJ0ID0ge1xuICB0b2tlbml6ZTogdG9rZW5pemVOb25MYXp5Q29udGludWF0aW9uU3RhcnQsXG4gIHBhcnRpYWw6IHRydWVcbn1cblxuLyoqIEB0eXBlIHtSZXNvbHZlcn0gKi9cbmZ1bmN0aW9uIHJlc29sdmVUb0h0bWxGbG93KGV2ZW50cykge1xuICBsZXQgaW5kZXggPSBldmVudHMubGVuZ3RoXG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgaWYgKGV2ZW50c1tpbmRleF1bMF0gPT09ICdlbnRlcicgJiYgZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnaHRtbEZsb3cnKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICBpZiAoaW5kZXggPiAxICYmIGV2ZW50c1tpbmRleCAtIDJdWzFdLnR5cGUgPT09ICdsaW5lUHJlZml4Jykge1xuICAgIC8vIEFkZCB0aGUgcHJlZml4IHN0YXJ0IHRvIHRoZSBIVE1MIHRva2VuLlxuICAgIGV2ZW50c1tpbmRleF1bMV0uc3RhcnQgPSBldmVudHNbaW5kZXggLSAyXVsxXS5zdGFydFxuICAgIC8vIEFkZCB0aGUgcHJlZml4IHN0YXJ0IHRvIHRoZSBIVE1MIGxpbmUgdG9rZW4uXG4gICAgZXZlbnRzW2luZGV4ICsgMV1bMV0uc3RhcnQgPSBldmVudHNbaW5kZXggLSAyXVsxXS5zdGFydFxuICAgIC8vIFJlbW92ZSB0aGUgbGluZSBwcmVmaXguXG4gICAgZXZlbnRzLnNwbGljZShpbmRleCAtIDIsIDIpXG4gIH1cbiAgcmV0dXJuIGV2ZW50c1xufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZUh0bWxGbG93KGVmZmVjdHMsIG9rLCBub2spIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gIGxldCBtYXJrZXJcbiAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICBsZXQgY2xvc2luZ1RhZ1xuICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgbGV0IGJ1ZmZlclxuICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgbGV0IGluZGV4XG4gIC8qKiBAdHlwZSB7Q29kZX0gKi9cbiAgbGV0IG1hcmtlckJcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgLyoqXG4gICAqIFN0YXJ0IG9mIEhUTUwgKGZsb3cpLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgPHggLz5cbiAgICogICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICAvLyBUbyBkbzogcGFyc2UgaW5kZW50IGxpa2UgYG1hcmtkb3duLXJzYC5cbiAgICByZXR1cm4gYmVmb3JlKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQXQgYDxgLCBhZnRlciBvcHRpb25hbCB3aGl0ZXNwYWNlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgPHggLz5cbiAgICogICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGJlZm9yZShjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignaHRtbEZsb3cnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2h0bWxGbG93RGF0YScpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIG9wZW5cbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBgPGAsIGF0IHRhZyBuYW1lIG9yIG90aGVyIHN0dWZmLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgPHggLz5cbiAgICogICAgICBeXG4gICAqID4gfCA8IWRvY3R5cGU+XG4gICAqICAgICAgXlxuICAgKiA+IHwgPCEtLXh4eC0tPlxuICAgKiAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIG9wZW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSAzMykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZGVjbGFyYXRpb25PcGVuXG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0Nykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBjbG9zaW5nVGFnID0gdHJ1ZVxuICAgICAgcmV0dXJuIHRhZ0Nsb3NlU3RhcnRcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDYzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIG1hcmtlciA9IDNcbiAgICAgIC8vIFRvIGRvOlxuICAgICAgLy8gdG9rZW5pemVyLmNvbmNyZXRlID0gdHJ1ZVxuICAgICAgLy8gVG8gZG86IHVzZSBgbWFya2Rvd24tcnNgIHN0eWxlIGludGVycnVwdC5cbiAgICAgIC8vIFdoaWxlIHdl4oCZcmUgaW4gYW4gaW5zdHJ1Y3Rpb24gaW5zdGVhZCBvZiBhIGRlY2xhcmF0aW9uLCB3ZeKAmXJlIG9uIGEgYD9gXG4gICAgICAvLyByaWdodCBub3csIHNvIHdlIGRvIG5lZWQgdG8gc2VhcmNoIGZvciBgPmAsIHNpbWlsYXIgdG8gZGVjbGFyYXRpb25zLlxuICAgICAgcmV0dXJuIHNlbGYuaW50ZXJydXB0ID8gb2sgOiBjb250aW51YXRpb25EZWNsYXJhdGlvbkluc2lkZVxuICAgIH1cblxuICAgIC8vIEFTQ0lJIGFscGhhYmV0aWNhbC5cbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBub3QgbnVsbC5cbiAgICAgIGJ1ZmZlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSlcbiAgICAgIHJldHVybiB0YWdOYW1lXG4gICAgfVxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBgPCFgLCBhdCBkZWNsYXJhdGlvbiwgY29tbWVudCwgb3IgQ0RBVEEuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA8IWRvY3R5cGU+XG4gICAqICAgICAgIF5cbiAgICogPiB8IDwhLS14eHgtLT5cbiAgICogICAgICAgXlxuICAgKiA+IHwgPCFbQ0RBVEFbPiY8XV0+XG4gICAqICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGRlY2xhcmF0aW9uT3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ1KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIG1hcmtlciA9IDJcbiAgICAgIHJldHVybiBjb21tZW50T3Blbkluc2lkZVxuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gOTEpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgbWFya2VyID0gNVxuICAgICAgaW5kZXggPSAwXG4gICAgICByZXR1cm4gY2RhdGFPcGVuSW5zaWRlXG4gICAgfVxuXG4gICAgLy8gQVNDSUkgYWxwaGFiZXRpY2FsLlxuICAgIGlmIChhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIG1hcmtlciA9IDRcbiAgICAgIC8vIC8vIERvIG5vdCBmb3JtIGNvbnRhaW5lcnMuXG4gICAgICAvLyB0b2tlbml6ZXIuY29uY3JldGUgPSB0cnVlXG4gICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBvayA6IGNvbnRpbnVhdGlvbkRlY2xhcmF0aW9uSW5zaWRlXG4gICAgfVxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBgPCEtYCwgaW5zaWRlIGEgY29tbWVudCwgYXQgYW5vdGhlciBgLWAuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA8IS0teHh4LS0+XG4gICAqICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjb21tZW50T3Blbkluc2lkZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ1KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIC8vIC8vIERvIG5vdCBmb3JtIGNvbnRhaW5lcnMuXG4gICAgICAvLyB0b2tlbml6ZXIuY29uY3JldGUgPSB0cnVlXG4gICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBvayA6IGNvbnRpbnVhdGlvbkRlY2xhcmF0aW9uSW5zaWRlXG4gICAgfVxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBgPCFbYCwgaW5zaWRlIENEQVRBLCBleHBlY3RpbmcgYENEQVRBW2AuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA8IVtDREFUQVs+JjxdXT5cbiAgICogICAgICAgIF5eXl5eXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gY2RhdGFPcGVuSW5zaWRlKGNvZGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9ICdDREFUQVsnXG4gICAgaWYgKGNvZGUgPT09IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgrKykpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgaWYgKGluZGV4ID09PSB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgLy8gLy8gRG8gbm90IGZvcm0gY29udGFpbmVycy5cbiAgICAgICAgLy8gdG9rZW5pemVyLmNvbmNyZXRlID0gdHJ1ZVxuICAgICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBvayA6IGNvbnRpbnVhdGlvblxuICAgICAgfVxuICAgICAgcmV0dXJuIGNkYXRhT3Blbkluc2lkZVxuICAgIH1cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgYDwvYCwgaW4gY2xvc2luZyB0YWcsIGF0IHRhZyBuYW1lLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgPC94PlxuICAgKiAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiB0YWdDbG9zZVN0YXJ0KGNvZGUpIHtcbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBub3QgbnVsbC5cbiAgICAgIGJ1ZmZlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSlcbiAgICAgIHJldHVybiB0YWdOYW1lXG4gICAgfVxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiB0YWcgbmFtZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDxhYj5cbiAgICogICAgICBeXlxuICAgKiA+IHwgPC9hYj5cbiAgICogICAgICAgXl5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHRhZ05hbWUoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICAgIGNvZGUgPT09IDQ3IHx8XG4gICAgICBjb2RlID09PSA2MiB8fFxuICAgICAgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKVxuICAgICkge1xuICAgICAgY29uc3Qgc2xhc2ggPSBjb2RlID09PSA0N1xuICAgICAgY29uc3QgbmFtZSA9IGJ1ZmZlci50b0xvd2VyQ2FzZSgpXG4gICAgICBpZiAoIXNsYXNoICYmICFjbG9zaW5nVGFnICYmIGh0bWxSYXdOYW1lcy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICBtYXJrZXIgPSAxXG4gICAgICAgIC8vIC8vIERvIG5vdCBmb3JtIGNvbnRhaW5lcnMuXG4gICAgICAgIC8vIHRva2VuaXplci5jb25jcmV0ZSA9IHRydWVcbiAgICAgICAgcmV0dXJuIHNlbGYuaW50ZXJydXB0ID8gb2soY29kZSkgOiBjb250aW51YXRpb24oY29kZSlcbiAgICAgIH1cbiAgICAgIGlmIChodG1sQmxvY2tOYW1lcy5pbmNsdWRlcyhidWZmZXIudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgbWFya2VyID0gNlxuICAgICAgICBpZiAoc2xhc2gpIHtcbiAgICAgICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgICAgICByZXR1cm4gYmFzaWNTZWxmQ2xvc2luZ1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLy8gRG8gbm90IGZvcm0gY29udGFpbmVycy5cbiAgICAgICAgLy8gdG9rZW5pemVyLmNvbmNyZXRlID0gdHJ1ZVxuICAgICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBvayhjb2RlKSA6IGNvbnRpbnVhdGlvbihjb2RlKVxuICAgICAgfVxuICAgICAgbWFya2VyID0gN1xuICAgICAgLy8gRG8gbm90IHN1cHBvcnQgY29tcGxldGUgSFRNTCB3aGVuIGludGVycnVwdGluZy5cbiAgICAgIHJldHVybiBzZWxmLmludGVycnVwdCAmJiAhc2VsZi5wYXJzZXIubGF6eVtzZWxmLm5vdygpLmxpbmVdXG4gICAgICAgID8gbm9rKGNvZGUpXG4gICAgICAgIDogY2xvc2luZ1RhZ1xuICAgICAgICA/IGNvbXBsZXRlQ2xvc2luZ1RhZ0FmdGVyKGNvZGUpXG4gICAgICAgIDogY29tcGxldGVBdHRyaWJ1dGVOYW1lQmVmb3JlKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gQVNDSUkgYWxwaGFudW1lcmljYWwgYW5kIGAtYC5cbiAgICBpZiAoY29kZSA9PT0gNDUgfHwgYXNjaWlBbHBoYW51bWVyaWMoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgYnVmZmVyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSlcbiAgICAgIHJldHVybiB0YWdOYW1lXG4gICAgfVxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBjbG9zaW5nIHNsYXNoIG9mIGEgYmFzaWMgdGFnIG5hbWUuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA8ZGl2Lz5cbiAgICogICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gYmFzaWNTZWxmQ2xvc2luZyhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIC8vIC8vIERvIG5vdCBmb3JtIGNvbnRhaW5lcnMuXG4gICAgICAvLyB0b2tlbml6ZXIuY29uY3JldGUgPSB0cnVlXG4gICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBvayA6IGNvbnRpbnVhdGlvblxuICAgIH1cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgY2xvc2luZyBzbGFzaCBvZiBhIGNvbXBsZXRlIHRhZyBuYW1lLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgPHgvPlxuICAgKiAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gY29tcGxldGVDbG9zaW5nVGFnQWZ0ZXIoY29kZSkge1xuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21wbGV0ZUNsb3NpbmdUYWdBZnRlclxuICAgIH1cbiAgICByZXR1cm4gY29tcGxldGVFbmQoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBdCBhbiBhdHRyaWJ1dGUgbmFtZS5cbiAgICpcbiAgICogQXQgZmlyc3QsIHRoaXMgc3RhdGUgaXMgdXNlZCBhZnRlciBhIGNvbXBsZXRlIHRhZyBuYW1lLCBhZnRlciB3aGl0ZXNwYWNlLFxuICAgKiB3aGVyZSBpdCBleHBlY3RzIG9wdGlvbmFsIGF0dHJpYnV0ZXMgb3IgdGhlIGVuZCBvZiB0aGUgdGFnLlxuICAgKiBJdCBpcyBhbHNvIHJldXNlZCBhZnRlciBhdHRyaWJ1dGVzLCB3aGVuIGV4cGVjdGluZyBtb3JlIG9wdGlvbmFsXG4gICAqIGF0dHJpYnV0ZXMuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA8YSAvPlxuICAgKiAgICAgICAgXlxuICAgKiA+IHwgPGEgOmI+XG4gICAqICAgICAgICBeXG4gICAqID4gfCA8YSBfYj5cbiAgICogICAgICAgIF5cbiAgICogPiB8IDxhIGI+XG4gICAqICAgICAgICBeXG4gICAqID4gfCA8YSA+XG4gICAqICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVCZWZvcmUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0Nykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVFbmRcbiAgICB9XG5cbiAgICAvLyBBU0NJSSBhbHBoYW51bWVyaWNhbCBhbmQgYDpgIGFuZCBgX2AuXG4gICAgaWYgKGNvZGUgPT09IDU4IHx8IGNvZGUgPT09IDk1IHx8IGFzY2lpQWxwaGEoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlTmFtZVxuICAgIH1cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVOYW1lQmVmb3JlXG4gICAgfVxuICAgIHJldHVybiBjb21wbGV0ZUVuZChjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIGF0dHJpYnV0ZSBuYW1lLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgPGEgOmI+XG4gICAqICAgICAgICAgXlxuICAgKiA+IHwgPGEgX2I+XG4gICAqICAgICAgICAgXlxuICAgKiA+IHwgPGEgYj5cbiAgICogICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWUoY29kZSkge1xuICAgIC8vIEFTQ0lJIGFscGhhbnVtZXJpY2FsIGFuZCBgLWAsIGAuYCwgYDpgLCBhbmQgYF9gLlxuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IDQ1IHx8XG4gICAgICBjb2RlID09PSA0NiB8fFxuICAgICAgY29kZSA9PT0gNTggfHxcbiAgICAgIGNvZGUgPT09IDk1IHx8XG4gICAgICBhc2NpaUFscGhhbnVtZXJpYyhjb2RlKVxuICAgICkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVOYW1lXG4gICAgfVxuICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVBZnRlcihjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGF0dHJpYnV0ZSBuYW1lLCBhdCBhbiBvcHRpb25hbCBpbml0aWFsaXplciwgdGhlIGVuZCBvZiB0aGUgdGFnLCBvclxuICAgKiB3aGl0ZXNwYWNlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgPGEgYj5cbiAgICogICAgICAgICBeXG4gICAqID4gfCA8YSBiPWM+XG4gICAqICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gY29tcGxldGVBdHRyaWJ1dGVOYW1lQWZ0ZXIoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2MSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZUJlZm9yZVxuICAgIH1cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVOYW1lQWZ0ZXJcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlTmFtZUJlZm9yZShjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEJlZm9yZSB1bnF1b3RlZCwgZG91YmxlIHF1b3RlZCwgb3Igc2luZ2xlIHF1b3RlZCBhdHRyaWJ1dGUgdmFsdWUsIGFsbG93aW5nXG4gICAqIHdoaXRlc3BhY2UuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA8YSBiPWM+XG4gICAqICAgICAgICAgIF5cbiAgICogPiB8IDxhIGI9XCJjXCI+XG4gICAqICAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQXR0cmlidXRlVmFsdWVCZWZvcmUoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICAgIGNvZGUgPT09IDYwIHx8XG4gICAgICBjb2RlID09PSA2MSB8fFxuICAgICAgY29kZSA9PT0gNjIgfHxcbiAgICAgIGNvZGUgPT09IDk2XG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuICAgIGlmIChjb2RlID09PSAzNCB8fCBjb2RlID09PSAzOSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBtYXJrZXJCID0gY29kZVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlVmFsdWVRdW90ZWRcbiAgICB9XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlVmFsdWVCZWZvcmVcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlVmFsdWVVbnF1b3RlZChjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIGRvdWJsZSBvciBzaW5nbGUgcXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDxhIGI9XCJjXCI+XG4gICAqICAgICAgICAgICBeXG4gICAqID4gfCA8YSBiPSdjJz5cbiAgICogICAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQXR0cmlidXRlVmFsdWVRdW90ZWQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXJCKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIG1hcmtlckIgPSBudWxsXG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZVF1b3RlZEFmdGVyXG4gICAgfVxuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZVF1b3RlZFxuICB9XG5cbiAgLyoqXG4gICAqIEluIHVucXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDxhIGI9Yz5cbiAgICogICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZVVucXVvdGVkKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBudWxsIHx8XG4gICAgICBjb2RlID09PSAzNCB8fFxuICAgICAgY29kZSA9PT0gMzkgfHxcbiAgICAgIGNvZGUgPT09IDQ3IHx8XG4gICAgICBjb2RlID09PSA2MCB8fFxuICAgICAgY29kZSA9PT0gNjEgfHxcbiAgICAgIGNvZGUgPT09IDYyIHx8XG4gICAgICBjb2RlID09PSA5NiB8fFxuICAgICAgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlTmFtZUFmdGVyKGNvZGUpXG4gICAgfVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlVW5xdW90ZWRcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBkb3VibGUgb3Igc2luZ2xlIHF1b3RlZCBhdHRyaWJ1dGUgdmFsdWUsIGJlZm9yZSB3aGl0ZXNwYWNlIG9yIHRoZVxuICAgKiBlbmQgb2YgdGhlIHRhZy5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDxhIGI9XCJjXCI+XG4gICAqICAgICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZVF1b3RlZEFmdGVyKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDcgfHwgY29kZSA9PT0gNjIgfHwgbWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlTmFtZUJlZm9yZShjb2RlKVxuICAgIH1cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gY2VydGFpbiBjaXJjdW1zdGFuY2VzIG9mIGEgY29tcGxldGUgdGFnIHdoZXJlIG9ubHkgYW4gYD5gIGlzIGFsbG93ZWQuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA8YSBiPVwiY1wiPlxuICAgKiAgICAgICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjb21wbGV0ZUVuZChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21wbGV0ZUFmdGVyXG4gICAgfVxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBgPmAgaW4gYSBjb21wbGV0ZSB0YWcuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA8eD5cbiAgICogICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQWZ0ZXIoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgLy8gLy8gRG8gbm90IGZvcm0gY29udGFpbmVycy5cbiAgICAgIC8vIHRva2VuaXplci5jb25jcmV0ZSA9IHRydWVcbiAgICAgIHJldHVybiBjb250aW51YXRpb24oY29kZSlcbiAgICB9XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQWZ0ZXJcbiAgICB9XG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIGNvbnRpbnVhdGlvbiBvZiBhbnkgSFRNTCBraW5kLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgPCEtLXh4eC0tPlxuICAgKiAgICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjb250aW51YXRpb24oY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0NSAmJiBtYXJrZXIgPT09IDIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkNvbW1lbnRJbnNpZGVcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDYwICYmIG1hcmtlciA9PT0gMSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29udGludWF0aW9uUmF3VGFnT3BlblxuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNjIgJiYgbWFya2VyID09PSA0KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25DbG9zZVxuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNjMgJiYgbWFya2VyID09PSAzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25EZWNsYXJhdGlvbkluc2lkZVxuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gOTMgJiYgbWFya2VyID09PSA1KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25DZGF0YUluc2lkZVxuICAgIH1cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpICYmIChtYXJrZXIgPT09IDYgfHwgbWFya2VyID09PSA3KSkge1xuICAgICAgZWZmZWN0cy5leGl0KCdodG1sRmxvd0RhdGEnKVxuICAgICAgcmV0dXJuIGVmZmVjdHMuY2hlY2soXG4gICAgICAgIGJsYW5rTGluZUJlZm9yZSxcbiAgICAgICAgY29udGludWF0aW9uQWZ0ZXIsXG4gICAgICAgIGNvbnRpbnVhdGlvblN0YXJ0XG4gICAgICApKGNvZGUpXG4gICAgfVxuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KCdodG1sRmxvd0RhdGEnKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvblN0YXJ0KGNvZGUpXG4gICAgfVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb250aW51YXRpb25cbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBjb250aW51YXRpb24sIGF0IGVvbC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDx4PlxuICAgKiAgICAgICAgXlxuICAgKiAgIHwgYXNkXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjb250aW51YXRpb25TdGFydChjb2RlKSB7XG4gICAgcmV0dXJuIGVmZmVjdHMuY2hlY2soXG4gICAgICBub25MYXp5Q29udGludWF0aW9uU3RhcnQsXG4gICAgICBjb250aW51YXRpb25TdGFydE5vbkxhenksXG4gICAgICBjb250aW51YXRpb25BZnRlclxuICAgICkoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBjb250aW51YXRpb24sIGF0IGVvbCwgYmVmb3JlIG5vbi1sYXp5IGNvbnRlbnQuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA8eD5cbiAgICogICAgICAgIF5cbiAgICogICB8IGFzZFxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gY29udGludWF0aW9uU3RhcnROb25MYXp5KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgIHJldHVybiBjb250aW51YXRpb25CZWZvcmVcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBjb250aW51YXRpb24sIGJlZm9yZSBub24tbGF6eSBjb250ZW50LlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiAgIHwgPHg+XG4gICAqID4gfCBhc2RcbiAgICogICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbnRpbnVhdGlvbkJlZm9yZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm4gY29udGludWF0aW9uU3RhcnQoY29kZSlcbiAgICB9XG4gICAgZWZmZWN0cy5lbnRlcignaHRtbEZsb3dEYXRhJylcbiAgICByZXR1cm4gY29udGludWF0aW9uKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gY29tbWVudCBjb250aW51YXRpb24sIGFmdGVyIG9uZSBgLWAsIGV4cGVjdGluZyBhbm90aGVyLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgPCEtLXh4eC0tPlxuICAgKiAgICAgICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjb250aW51YXRpb25Db21tZW50SW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkRlY2xhcmF0aW9uSW5zaWRlXG4gICAgfVxuICAgIHJldHVybiBjb250aW51YXRpb24oY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiByYXcgY29udGludWF0aW9uLCBhZnRlciBgPGAsIGF0IGAvYC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDxzY3JpcHQ+Y29uc29sZS5sb2coMSk8L3NjcmlwdD5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gY29udGludWF0aW9uUmF3VGFnT3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ3KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGJ1ZmZlciA9ICcnXG4gICAgICByZXR1cm4gY29udGludWF0aW9uUmF3RW5kVGFnXG4gICAgfVxuICAgIHJldHVybiBjb250aW51YXRpb24oY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiByYXcgY29udGludWF0aW9uLCBhZnRlciBgPC9gLCBpbiBhIHJhdyB0YWcgbmFtZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDxzY3JpcHQ+Y29uc29sZS5sb2coMSk8L3NjcmlwdD5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIF5eXl5eXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gY29udGludWF0aW9uUmF3RW5kVGFnKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjIpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBidWZmZXIudG9Mb3dlckNhc2UoKVxuICAgICAgaWYgKGh0bWxSYXdOYW1lcy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkNsb3NlXG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGludWF0aW9uKGNvZGUpXG4gICAgfVxuICAgIGlmIChhc2NpaUFscGhhKGNvZGUpICYmIGJ1ZmZlci5sZW5ndGggPCA4KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IG5vdCBudWxsLlxuICAgICAgYnVmZmVyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25SYXdFbmRUYWdcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbihjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIGNkYXRhIGNvbnRpbnVhdGlvbiwgYWZ0ZXIgYF1gLCBleHBlY3RpbmcgYF0+YC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDwhW0NEQVRBWz4mPF1dPlxuICAgKiAgICAgICAgICAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbnRpbnVhdGlvbkNkYXRhSW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gOTMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkRlY2xhcmF0aW9uSW5zaWRlXG4gICAgfVxuICAgIHJldHVybiBjb250aW51YXRpb24oY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBkZWNsYXJhdGlvbiBvciBpbnN0cnVjdGlvbiBjb250aW51YXRpb24sIGF0IGA+YC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDwhLS0+XG4gICAqICAgICAgICAgXlxuICAgKiA+IHwgPD8+XG4gICAqICAgICAgIF5cbiAgICogPiB8IDwhcT5cbiAgICogICAgICAgIF5cbiAgICogPiB8IDwhLS1hYi0tPlxuICAgKiAgICAgICAgICAgICBeXG4gICAqID4gfCA8IVtDREFUQVs+JjxdXT5cbiAgICogICAgICAgICAgICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gY29udGludWF0aW9uRGVjbGFyYXRpb25JbnNpZGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29udGludWF0aW9uQ2xvc2VcbiAgICB9XG5cbiAgICAvLyBNb3JlIGRhc2hlcy5cbiAgICBpZiAoY29kZSA9PT0gNDUgJiYgbWFya2VyID09PSAyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25EZWNsYXJhdGlvbkluc2lkZVxuICAgIH1cbiAgICByZXR1cm4gY29udGludWF0aW9uKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gY2xvc2VkIGNvbnRpbnVhdGlvbjogZXZlcnl0aGluZyB3ZSBnZXQgdW50aWwgdGhlIGVvbC9lb2YgaXMgcGFydCBvZiBpdC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDwhZG9jdHlwZT5cbiAgICogICAgICAgICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjb250aW51YXRpb25DbG9zZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2h0bWxGbG93RGF0YScpXG4gICAgICByZXR1cm4gY29udGludWF0aW9uQWZ0ZXIoY29kZSlcbiAgICB9XG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbkNsb3NlXG4gIH1cblxuICAvKipcbiAgICogRG9uZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDwhZG9jdHlwZT5cbiAgICogICAgICAgICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjb250aW51YXRpb25BZnRlcihjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdodG1sRmxvdycpXG4gICAgLy8gLy8gRmVlbCBmcmVlIHRvIGludGVycnVwdC5cbiAgICAvLyB0b2tlbml6ZXIuaW50ZXJydXB0ID0gZmFsc2VcbiAgICAvLyAvLyBObyBsb25nZXIgY29uY3JldGUuXG4gICAgLy8gdG9rZW5pemVyLmNvbmNyZXRlID0gZmFsc2VcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZU5vbkxhenlDb250aW51YXRpb25TdGFydChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzXG4gIHJldHVybiBzdGFydFxuXG4gIC8qKlxuICAgKiBBdCBlb2wsIGJlZm9yZSBjb250aW51YXRpb24uXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCAqIGBgYGpzXG4gICAqICAgICAgICAgICAgXlxuICAgKiAgIHwgYlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgICAgcmV0dXJuIGFmdGVyXG4gICAgfVxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGNvbnRpbnVhdGlvbi5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogICB8ICogYGBganNcbiAgICogPiB8IGJcbiAgICogICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICByZXR1cm4gc2VsZi5wYXJzZXIubGF6eVtzZWxmLm5vdygpLmxpbmVdID8gbm9rKGNvZGUpIDogb2soY29kZSlcbiAgfVxufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZUJsYW5rTGluZUJlZm9yZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIC8qKlxuICAgKiBCZWZvcmUgZW9sLCBleHBlY3RpbmcgYmxhbmsgbGluZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDxkaXY+XG4gICAqICAgICAgICAgIF5cbiAgICogICB8XG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcbiAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KGJsYW5rTGluZSwgb2ssIG5vaylcbiAgfVxufVxuIiwiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvZGV9IENvZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ29uc3RydWN0fSBDb25zdHJ1Y3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplQ29udGV4dH0gVG9rZW5pemVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplcn0gVG9rZW5pemVyXG4gKi9cblxuaW1wb3J0IHtmYWN0b3J5U3BhY2V9IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LXNwYWNlJ1xuaW1wb3J0IHtcbiAgYXNjaWlBbHBoYSxcbiAgYXNjaWlBbHBoYW51bWVyaWMsXG4gIG1hcmtkb3duTGluZUVuZGluZyxcbiAgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSxcbiAgbWFya2Rvd25TcGFjZVxufSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG4vKiogQHR5cGUge0NvbnN0cnVjdH0gKi9cbmV4cG9ydCBjb25zdCBodG1sVGV4dCA9IHtcbiAgbmFtZTogJ2h0bWxUZXh0JyxcbiAgdG9rZW5pemU6IHRva2VuaXplSHRtbFRleHRcbn1cblxuLyoqXG4gKiBAdGhpcyB7VG9rZW5pemVDb250ZXh0fVxuICogQHR5cGUge1Rva2VuaXplcn1cbiAqL1xuZnVuY3Rpb24gdG9rZW5pemVIdG1sVGV4dChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzXG4gIC8qKiBAdHlwZSB7Tm9uTnVsbGFibGU8Q29kZT4gfCB1bmRlZmluZWR9ICovXG4gIGxldCBtYXJrZXJcbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gIGxldCBpbmRleFxuICAvKiogQHR5cGUge1N0YXRlfSAqL1xuICBsZXQgcmV0dXJuU3RhdGVcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgLyoqXG4gICAqIFN0YXJ0IG9mIEhUTUwgKHRleHQpLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYSA8Yj4gY1xuICAgKiAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignaHRtbFRleHQnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2h0bWxUZXh0RGF0YScpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIG9wZW5cbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBgPGAsIGF0IHRhZyBuYW1lIG9yIG90aGVyIHN0dWZmLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYSA8Yj4gY1xuICAgKiAgICAgICAgXlxuICAgKiA+IHwgYSA8IWRvY3R5cGU+IGNcbiAgICogICAgICAgIF5cbiAgICogPiB8IGEgPCEtLWItLT4gY1xuICAgKiAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDMzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBkZWNsYXJhdGlvbk9wZW5cbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ3KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdDbG9zZVN0YXJ0XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA2Mykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5zdHJ1Y3Rpb25cbiAgICB9XG5cbiAgICAvLyBBU0NJSSBhbHBoYWJldGljYWwuXG4gICAgaWYgKGFzY2lpQWxwaGEoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ09wZW5cbiAgICB9XG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGA8IWAsIGF0IGRlY2xhcmF0aW9uLCBjb21tZW50LCBvciBDREFUQS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGEgPCFkb2N0eXBlPiBjXG4gICAqICAgICAgICAgXlxuICAgKiA+IHwgYSA8IS0tYi0tPiBjXG4gICAqICAgICAgICAgXlxuICAgKiA+IHwgYSA8IVtDREFUQVs+JjxdXT4gY1xuICAgKiAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGRlY2xhcmF0aW9uT3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ1KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21tZW50T3Blbkluc2lkZVxuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gOTEpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgaW5kZXggPSAwXG4gICAgICByZXR1cm4gY2RhdGFPcGVuSW5zaWRlXG4gICAgfVxuICAgIGlmIChhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBkZWNsYXJhdGlvblxuICAgIH1cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gYSBjb21tZW50LCBhZnRlciBgPCEtYCwgYXQgYW5vdGhlciBgLWAuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhIDwhLS1iLS0+IGNcbiAgICogICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gY29tbWVudE9wZW5JbnNpZGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0NSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tbWVudEVuZFxuICAgIH1cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gY29tbWVudC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGEgPCEtLWItLT4gY1xuICAgKiAgICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gY29tbWVudChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ1KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21tZW50Q2xvc2VcbiAgICB9XG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuU3RhdGUgPSBjb21tZW50XG4gICAgICByZXR1cm4gbGluZUVuZGluZ0JlZm9yZShjb2RlKVxuICAgIH1cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29tbWVudFxuICB9XG5cbiAgLyoqXG4gICAqIEluIGNvbW1lbnQsIGFmdGVyIGAtYC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGEgPCEtLWItLT4gY1xuICAgKiAgICAgICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjb21tZW50Q2xvc2UoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0NSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tbWVudEVuZFxuICAgIH1cbiAgICByZXR1cm4gY29tbWVudChjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIGNvbW1lbnQsIGFmdGVyIGAtLWAuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhIDwhLS1iLS0+IGNcbiAgICogICAgICAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbW1lbnRFbmQoY29kZSkge1xuICAgIHJldHVybiBjb2RlID09PSA2MlxuICAgICAgPyBlbmQoY29kZSlcbiAgICAgIDogY29kZSA9PT0gNDVcbiAgICAgID8gY29tbWVudENsb3NlKGNvZGUpXG4gICAgICA6IGNvbW1lbnQoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBgPCFbYCwgaW4gQ0RBVEEsIGV4cGVjdGluZyBgQ0RBVEFbYC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGEgPCFbQ0RBVEFbPiY8XV0+IGJcbiAgICogICAgICAgICAgXl5eXl5eXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjZGF0YU9wZW5JbnNpZGUoY29kZSkge1xuICAgIGNvbnN0IHZhbHVlID0gJ0NEQVRBWydcbiAgICBpZiAoY29kZSA9PT0gdmFsdWUuY2hhckNvZGVBdChpbmRleCsrKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5kZXggPT09IHZhbHVlLmxlbmd0aCA/IGNkYXRhIDogY2RhdGFPcGVuSW5zaWRlXG4gICAgfVxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBDREFUQS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGEgPCFbQ0RBVEFbPiY8XV0+IGJcbiAgICogICAgICAgICAgICAgICAgXl5eXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjZGF0YShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDkzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjZGF0YUNsb3NlXG4gICAgfVxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gY2RhdGFcbiAgICAgIHJldHVybiBsaW5lRW5kaW5nQmVmb3JlKGNvZGUpXG4gICAgfVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjZGF0YVxuICB9XG5cbiAgLyoqXG4gICAqIEluIENEQVRBLCBhZnRlciBgXWAsIGF0IGFub3RoZXIgYF1gLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYSA8IVtDREFUQVs+JjxdXT4gYlxuICAgKiAgICAgICAgICAgICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gY2RhdGFDbG9zZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDkzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjZGF0YUVuZFxuICAgIH1cbiAgICByZXR1cm4gY2RhdGEoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBDREFUQSwgYWZ0ZXIgYF1dYCwgYXQgYD5gLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYSA8IVtDREFUQVs+JjxdXT4gYlxuICAgKiAgICAgICAgICAgICAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGNkYXRhRW5kKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjIpIHtcbiAgICAgIHJldHVybiBlbmQoY29kZSlcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDkzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjZGF0YUVuZFxuICAgIH1cbiAgICByZXR1cm4gY2RhdGEoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBkZWNsYXJhdGlvbi5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGEgPCFiPiBjXG4gICAqICAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGRlY2xhcmF0aW9uKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBjb2RlID09PSA2Mikge1xuICAgICAgcmV0dXJuIGVuZChjb2RlKVxuICAgIH1cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm5TdGF0ZSA9IGRlY2xhcmF0aW9uXG4gICAgICByZXR1cm4gbGluZUVuZGluZ0JlZm9yZShjb2RlKVxuICAgIH1cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gZGVjbGFyYXRpb25cbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBpbnN0cnVjdGlvbi5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGEgPD9iPz4gY1xuICAgKiAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGluc3RydWN0aW9uKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNjMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGluc3RydWN0aW9uQ2xvc2VcbiAgICB9XG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuU3RhdGUgPSBpbnN0cnVjdGlvblxuICAgICAgcmV0dXJuIGxpbmVFbmRpbmdCZWZvcmUoY29kZSlcbiAgICB9XG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGluc3RydWN0aW9uXG4gIH1cblxuICAvKipcbiAgICogSW4gaW5zdHJ1Y3Rpb24sIGFmdGVyIGA/YCwgYXQgYD5gLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYSA8P2I/PiBjXG4gICAqICAgICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBpbnN0cnVjdGlvbkNsb3NlKGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSA9PT0gNjIgPyBlbmQoY29kZSkgOiBpbnN0cnVjdGlvbihjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGA8L2AsIGluIGNsb3NpbmcgdGFnLCBhdCB0YWcgbmFtZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGEgPC9iPiBjXG4gICAqICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gdGFnQ2xvc2VTdGFydChjb2RlKSB7XG4gICAgLy8gQVNDSUkgYWxwaGFiZXRpY2FsLlxuICAgIGlmIChhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdDbG9zZVxuICAgIH1cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgYDwveGAsIGluIGEgdGFnIG5hbWUuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhIDwvYj4gY1xuICAgKiAgICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiB0YWdDbG9zZShjb2RlKSB7XG4gICAgLy8gQVNDSUkgYWxwaGFudW1lcmljYWwgYW5kIGAtYC5cbiAgICBpZiAoY29kZSA9PT0gNDUgfHwgYXNjaWlBbHBoYW51bWVyaWMoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ0Nsb3NlXG4gICAgfVxuICAgIHJldHVybiB0YWdDbG9zZUJldHdlZW4oY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBjbG9zaW5nIHRhZywgYWZ0ZXIgdGFnIG5hbWUuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhIDwvYj4gY1xuICAgKiAgICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiB0YWdDbG9zZUJldHdlZW4oY29kZSkge1xuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gdGFnQ2xvc2VCZXR3ZWVuXG4gICAgICByZXR1cm4gbGluZUVuZGluZ0JlZm9yZShjb2RlKVxuICAgIH1cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdGFnQ2xvc2VCZXR3ZWVuXG4gICAgfVxuICAgIHJldHVybiBlbmQoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBgPHhgLCBpbiBvcGVuaW5nIHRhZyBuYW1lLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYSA8Yj4gY1xuICAgKiAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHRhZ09wZW4oY29kZSkge1xuICAgIC8vIEFTQ0lJIGFscGhhbnVtZXJpY2FsIGFuZCBgLWAuXG4gICAgaWYgKGNvZGUgPT09IDQ1IHx8IGFzY2lpQWxwaGFudW1lcmljKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuXG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NyB8fCBjb2RlID09PSA2MiB8fCBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpKSB7XG4gICAgICByZXR1cm4gdGFnT3BlbkJldHdlZW4oY29kZSlcbiAgICB9XG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIG9wZW5pbmcgdGFnLCBhZnRlciB0YWcgbmFtZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGEgPGI+IGNcbiAgICogICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiB0YWdPcGVuQmV0d2Vlbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ3KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBlbmRcbiAgICB9XG5cbiAgICAvLyBBU0NJSSBhbHBoYWJldGljYWwgYW5kIGA6YCBhbmQgYF9gLlxuICAgIGlmIChjb2RlID09PSA1OCB8fCBjb2RlID09PSA5NSB8fCBhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlTmFtZVxuICAgIH1cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm5TdGF0ZSA9IHRhZ09wZW5CZXR3ZWVuXG4gICAgICByZXR1cm4gbGluZUVuZGluZ0JlZm9yZShjb2RlKVxuICAgIH1cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdGFnT3BlbkJldHdlZW5cbiAgICB9XG4gICAgcmV0dXJuIGVuZChjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIGF0dHJpYnV0ZSBuYW1lLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYSA8YiBjPiBkXG4gICAqICAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHRhZ09wZW5BdHRyaWJ1dGVOYW1lKGNvZGUpIHtcbiAgICAvLyBBU0NJSSBhbHBoYWJldGljYWwgYW5kIGAtYCwgYC5gLCBgOmAsIGFuZCBgX2AuXG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gNDUgfHxcbiAgICAgIGNvZGUgPT09IDQ2IHx8XG4gICAgICBjb2RlID09PSA1OCB8fFxuICAgICAgY29kZSA9PT0gOTUgfHxcbiAgICAgIGFzY2lpQWxwaGFudW1lcmljKGNvZGUpXG4gICAgKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlTmFtZVxuICAgIH1cbiAgICByZXR1cm4gdGFnT3BlbkF0dHJpYnV0ZU5hbWVBZnRlcihjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGF0dHJpYnV0ZSBuYW1lLCBiZWZvcmUgaW5pdGlhbGl6ZXIsIHRoZSBlbmQgb2YgdGhlIHRhZywgb3JcbiAgICogd2hpdGVzcGFjZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGEgPGIgYz4gZFxuICAgKiAgICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gdGFnT3BlbkF0dHJpYnV0ZU5hbWVBZnRlcihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYxKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlVmFsdWVCZWZvcmVcbiAgICB9XG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuU3RhdGUgPSB0YWdPcGVuQXR0cmlidXRlTmFtZUFmdGVyXG4gICAgICByZXR1cm4gbGluZUVuZGluZ0JlZm9yZShjb2RlKVxuICAgIH1cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdGFnT3BlbkF0dHJpYnV0ZU5hbWVBZnRlclxuICAgIH1cbiAgICByZXR1cm4gdGFnT3BlbkJldHdlZW4oY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBCZWZvcmUgdW5xdW90ZWQsIGRvdWJsZSBxdW90ZWQsIG9yIHNpbmdsZSBxdW90ZWQgYXR0cmlidXRlIHZhbHVlLCBhbGxvd2luZ1xuICAgKiB3aGl0ZXNwYWNlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYSA8YiBjPWQ+IGVcbiAgICogICAgICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiB0YWdPcGVuQXR0cmlidXRlVmFsdWVCZWZvcmUoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICAgIGNvZGUgPT09IDYwIHx8XG4gICAgICBjb2RlID09PSA2MSB8fFxuICAgICAgY29kZSA9PT0gNjIgfHxcbiAgICAgIGNvZGUgPT09IDk2XG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuICAgIGlmIChjb2RlID09PSAzNCB8fCBjb2RlID09PSAzOSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBtYXJrZXIgPSBjb2RlXG4gICAgICByZXR1cm4gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlUXVvdGVkXG4gICAgfVxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlQmVmb3JlXG4gICAgICByZXR1cm4gbGluZUVuZGluZ0JlZm9yZShjb2RlKVxuICAgIH1cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlQmVmb3JlXG4gICAgfVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlVmFsdWVVbnF1b3RlZFxuICB9XG5cbiAgLyoqXG4gICAqIEluIGRvdWJsZSBvciBzaW5nbGUgcXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGEgPGIgYz1cImRcIj4gZVxuICAgKiAgICAgICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiB0YWdPcGVuQXR0cmlidXRlVmFsdWVRdW90ZWQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgbWFya2VyID0gdW5kZWZpbmVkXG4gICAgICByZXR1cm4gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlUXVvdGVkQWZ0ZXJcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuU3RhdGUgPSB0YWdPcGVuQXR0cmlidXRlVmFsdWVRdW90ZWRcbiAgICAgIHJldHVybiBsaW5lRW5kaW5nQmVmb3JlKGNvZGUpXG4gICAgfVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlVmFsdWVRdW90ZWRcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiB1bnF1b3RlZCBhdHRyaWJ1dGUgdmFsdWUuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhIDxiIGM9ZD4gZVxuICAgKiAgICAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZVVucXVvdGVkKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBudWxsIHx8XG4gICAgICBjb2RlID09PSAzNCB8fFxuICAgICAgY29kZSA9PT0gMzkgfHxcbiAgICAgIGNvZGUgPT09IDYwIHx8XG4gICAgICBjb2RlID09PSA2MSB8fFxuICAgICAgY29kZSA9PT0gOTZcbiAgICApIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ3IHx8IGNvZGUgPT09IDYyIHx8IG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiB0YWdPcGVuQmV0d2Vlbihjb2RlKVxuICAgIH1cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlVW5xdW90ZWRcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBkb3VibGUgb3Igc2luZ2xlIHF1b3RlZCBhdHRyaWJ1dGUgdmFsdWUsIGJlZm9yZSB3aGl0ZXNwYWNlIG9yIHRoZSBlbmRcbiAgICogb2YgdGhlIHRhZy5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGEgPGIgYz1cImRcIj4gZVxuICAgKiAgICAgICAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZVF1b3RlZEFmdGVyKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDcgfHwgY29kZSA9PT0gNjIgfHwgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKSkge1xuICAgICAgcmV0dXJuIHRhZ09wZW5CZXR3ZWVuKGNvZGUpXG4gICAgfVxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBjZXJ0YWluIGNpcmN1bXN0YW5jZXMgb2YgYSB0YWcgd2hlcmUgb25seSBhbiBgPmAgaXMgYWxsb3dlZC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGEgPGIgYz1cImRcIj4gZVxuICAgKiAgICAgICAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGVuZChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnaHRtbFRleHREYXRhJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnaHRtbFRleHQnKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBdCBlb2wuXG4gICAqXG4gICAqID4g8J+RiSAqKk5vdGUqKjogd2UgY2Fu4oCZdCBoYXZlIGJsYW5rIGxpbmVzIGluIHRleHQsIHNvIG5vIG5lZWQgdG8gd29ycnkgYWJvdXRcbiAgICogPiBlbXB0eSB0b2tlbnMuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhIDwhLS1hXG4gICAqICAgICAgICAgICAgXlxuICAgKiAgIHwgYi0tPlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gbGluZUVuZGluZ0JlZm9yZShjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdodG1sVGV4dERhdGEnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgcmV0dXJuIGxpbmVFbmRpbmdBZnRlclxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGVvbCwgYXQgb3B0aW9uYWwgd2hpdGVzcGFjZS5cbiAgICpcbiAgICogPiDwn5GJICoqTm90ZSoqOiB3ZSBjYW7igJl0IGhhdmUgYmxhbmsgbGluZXMgaW4gdGV4dCwgc28gbm8gbmVlZCB0byB3b3JyeSBhYm91dFxuICAgKiA+IGVtcHR5IHRva2Vucy5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogICB8IGEgPCEtLWFcbiAgICogPiB8IGItLT5cbiAgICogICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGxpbmVFbmRpbmdBZnRlcihjb2RlKSB7XG4gICAgLy8gQWx3YXlzIHBvcHVsYXRlZCBieSBkZWZhdWx0cy5cblxuICAgIHJldHVybiBtYXJrZG93blNwYWNlKGNvZGUpXG4gICAgICA/IGZhY3RvcnlTcGFjZShcbiAgICAgICAgICBlZmZlY3RzLFxuICAgICAgICAgIGxpbmVFbmRpbmdBZnRlclByZWZpeCxcbiAgICAgICAgICAnbGluZVByZWZpeCcsXG4gICAgICAgICAgc2VsZi5wYXJzZXIuY29uc3RydWN0cy5kaXNhYmxlLm51bGwuaW5jbHVkZXMoJ2NvZGVJbmRlbnRlZCcpXG4gICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgOiA0XG4gICAgICAgICkoY29kZSlcbiAgICAgIDogbGluZUVuZGluZ0FmdGVyUHJlZml4KGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgZW9sLCBhZnRlciBvcHRpb25hbCB3aGl0ZXNwYWNlLlxuICAgKlxuICAgKiA+IPCfkYkgKipOb3RlKio6IHdlIGNhbuKAmXQgaGF2ZSBibGFuayBsaW5lcyBpbiB0ZXh0LCBzbyBubyBuZWVkIHRvIHdvcnJ5IGFib3V0XG4gICAqID4gZW1wdHkgdG9rZW5zLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiAgIHwgYSA8IS0tYVxuICAgKiA+IHwgYi0tPlxuICAgKiAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gbGluZUVuZGluZ0FmdGVyUHJlZml4KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdodG1sVGV4dERhdGEnKVxuICAgIHJldHVybiByZXR1cm5TdGF0ZShjb2RlKVxuICB9XG59XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ29uc3RydWN0fSBDb25zdHJ1Y3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRXZlbnR9IEV2ZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlJlc29sdmVyfSBSZXNvbHZlclxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW59IFRva2VuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplQ29udGV4dH0gVG9rZW5pemVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplcn0gVG9rZW5pemVyXG4gKi9cblxuaW1wb3J0IHtmYWN0b3J5RGVzdGluYXRpb259IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHtmYWN0b3J5TGFiZWx9IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LWxhYmVsJ1xuaW1wb3J0IHtmYWN0b3J5VGl0bGV9IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LXRpdGxlJ1xuaW1wb3J0IHtmYWN0b3J5V2hpdGVzcGFjZX0gZnJvbSAnbWljcm9tYXJrLWZhY3Rvcnktd2hpdGVzcGFjZSdcbmltcG9ydCB7bWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyJ1xuaW1wb3J0IHtwdXNoLCBzcGxpY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNodW5rZWQnXG5pbXBvcnQge25vcm1hbGl6ZUlkZW50aWZpZXJ9IGZyb20gJ21pY3JvbWFyay11dGlsLW5vcm1hbGl6ZS1pZGVudGlmaWVyJ1xuaW1wb3J0IHtyZXNvbHZlQWxsfSBmcm9tICdtaWNyb21hcmstdXRpbC1yZXNvbHZlLWFsbCdcbi8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuZXhwb3J0IGNvbnN0IGxhYmVsRW5kID0ge1xuICBuYW1lOiAnbGFiZWxFbmQnLFxuICB0b2tlbml6ZTogdG9rZW5pemVMYWJlbEVuZCxcbiAgcmVzb2x2ZVRvOiByZXNvbHZlVG9MYWJlbEVuZCxcbiAgcmVzb2x2ZUFsbDogcmVzb2x2ZUFsbExhYmVsRW5kXG59XG5cbi8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuY29uc3QgcmVzb3VyY2VDb25zdHJ1Y3QgPSB7XG4gIHRva2VuaXplOiB0b2tlbml6ZVJlc291cmNlXG59XG4vKiogQHR5cGUge0NvbnN0cnVjdH0gKi9cbmNvbnN0IHJlZmVyZW5jZUZ1bGxDb25zdHJ1Y3QgPSB7XG4gIHRva2VuaXplOiB0b2tlbml6ZVJlZmVyZW5jZUZ1bGxcbn1cbi8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuY29uc3QgcmVmZXJlbmNlQ29sbGFwc2VkQ29uc3RydWN0ID0ge1xuICB0b2tlbml6ZTogdG9rZW5pemVSZWZlcmVuY2VDb2xsYXBzZWRcbn1cblxuLyoqIEB0eXBlIHtSZXNvbHZlcn0gKi9cbmZ1bmN0aW9uIHJlc29sdmVBbGxMYWJlbEVuZChldmVudHMpIHtcbiAgbGV0IGluZGV4ID0gLTFcbiAgd2hpbGUgKCsraW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgY29uc3QgdG9rZW4gPSBldmVudHNbaW5kZXhdWzFdXG4gICAgaWYgKFxuICAgICAgdG9rZW4udHlwZSA9PT0gJ2xhYmVsSW1hZ2UnIHx8XG4gICAgICB0b2tlbi50eXBlID09PSAnbGFiZWxMaW5rJyB8fFxuICAgICAgdG9rZW4udHlwZSA9PT0gJ2xhYmVsRW5kJ1xuICAgICkge1xuICAgICAgLy8gUmVtb3ZlIHRoZSBtYXJrZXIuXG4gICAgICBldmVudHMuc3BsaWNlKGluZGV4ICsgMSwgdG9rZW4udHlwZSA9PT0gJ2xhYmVsSW1hZ2UnID8gNCA6IDIpXG4gICAgICB0b2tlbi50eXBlID0gJ2RhdGEnXG4gICAgICBpbmRleCsrXG4gICAgfVxuICB9XG4gIHJldHVybiBldmVudHNcbn1cblxuLyoqIEB0eXBlIHtSZXNvbHZlcn0gKi9cbmZ1bmN0aW9uIHJlc29sdmVUb0xhYmVsRW5kKGV2ZW50cywgY29udGV4dCkge1xuICBsZXQgaW5kZXggPSBldmVudHMubGVuZ3RoXG4gIGxldCBvZmZzZXQgPSAwXG4gIC8qKiBAdHlwZSB7VG9rZW59ICovXG4gIGxldCB0b2tlblxuICAvKiogQHR5cGUge251bWJlciB8IHVuZGVmaW5lZH0gKi9cbiAgbGV0IG9wZW5cbiAgLyoqIEB0eXBlIHtudW1iZXIgfCB1bmRlZmluZWR9ICovXG4gIGxldCBjbG9zZVxuICAvKiogQHR5cGUge0FycmF5PEV2ZW50Pn0gKi9cbiAgbGV0IG1lZGlhXG5cbiAgLy8gRmluZCBhbiBvcGVuaW5nLlxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHRva2VuID0gZXZlbnRzW2luZGV4XVsxXVxuICAgIGlmIChvcGVuKSB7XG4gICAgICAvLyBJZiB3ZSBzZWUgYW5vdGhlciBsaW5rLCBvciBpbmFjdGl2ZSBsaW5rIGxhYmVsLCB3ZeKAmXZlIGJlZW4gaGVyZSBiZWZvcmUuXG4gICAgICBpZiAoXG4gICAgICAgIHRva2VuLnR5cGUgPT09ICdsaW5rJyB8fFxuICAgICAgICAodG9rZW4udHlwZSA9PT0gJ2xhYmVsTGluaycgJiYgdG9rZW4uX2luYWN0aXZlKVxuICAgICAgKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIC8vIE1hcmsgb3RoZXIgbGluayBvcGVuaW5ncyBhcyBpbmFjdGl2ZSwgYXMgd2UgY2Fu4oCZdCBoYXZlIGxpbmtzIGluXG4gICAgICAvLyBsaW5rcy5cbiAgICAgIGlmIChldmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInICYmIHRva2VuLnR5cGUgPT09ICdsYWJlbExpbmsnKSB7XG4gICAgICAgIHRva2VuLl9pbmFjdGl2ZSA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNsb3NlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50c1tpbmRleF1bMF0gPT09ICdlbnRlcicgJiZcbiAgICAgICAgKHRva2VuLnR5cGUgPT09ICdsYWJlbEltYWdlJyB8fCB0b2tlbi50eXBlID09PSAnbGFiZWxMaW5rJykgJiZcbiAgICAgICAgIXRva2VuLl9iYWxhbmNlZFxuICAgICAgKSB7XG4gICAgICAgIG9wZW4gPSBpbmRleFxuICAgICAgICBpZiAodG9rZW4udHlwZSAhPT0gJ2xhYmVsTGluaycpIHtcbiAgICAgICAgICBvZmZzZXQgPSAyXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gJ2xhYmVsRW5kJykge1xuICAgICAgY2xvc2UgPSBpbmRleFxuICAgIH1cbiAgfVxuICBjb25zdCBncm91cCA9IHtcbiAgICB0eXBlOiBldmVudHNbb3Blbl1bMV0udHlwZSA9PT0gJ2xhYmVsTGluaycgPyAnbGluaycgOiAnaW1hZ2UnLFxuICAgIHN0YXJ0OiBPYmplY3QuYXNzaWduKHt9LCBldmVudHNbb3Blbl1bMV0uc3RhcnQpLFxuICAgIGVuZDogT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRzW2V2ZW50cy5sZW5ndGggLSAxXVsxXS5lbmQpXG4gIH1cbiAgY29uc3QgbGFiZWwgPSB7XG4gICAgdHlwZTogJ2xhYmVsJyxcbiAgICBzdGFydDogT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRzW29wZW5dWzFdLnN0YXJ0KSxcbiAgICBlbmQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50c1tjbG9zZV1bMV0uZW5kKVxuICB9XG4gIGNvbnN0IHRleHQgPSB7XG4gICAgdHlwZTogJ2xhYmVsVGV4dCcsXG4gICAgc3RhcnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50c1tvcGVuICsgb2Zmc2V0ICsgMl1bMV0uZW5kKSxcbiAgICBlbmQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50c1tjbG9zZSAtIDJdWzFdLnN0YXJ0KVxuICB9XG4gIG1lZGlhID0gW1xuICAgIFsnZW50ZXInLCBncm91cCwgY29udGV4dF0sXG4gICAgWydlbnRlcicsIGxhYmVsLCBjb250ZXh0XVxuICBdXG5cbiAgLy8gT3BlbmluZyBtYXJrZXIuXG4gIG1lZGlhID0gcHVzaChtZWRpYSwgZXZlbnRzLnNsaWNlKG9wZW4gKyAxLCBvcGVuICsgb2Zmc2V0ICsgMykpXG5cbiAgLy8gVGV4dCBvcGVuLlxuICBtZWRpYSA9IHB1c2gobWVkaWEsIFtbJ2VudGVyJywgdGV4dCwgY29udGV4dF1dKVxuXG4gIC8vIEFsd2F5cyBwb3B1bGF0ZWQgYnkgZGVmYXVsdHMuXG5cbiAgLy8gQmV0d2Vlbi5cbiAgbWVkaWEgPSBwdXNoKFxuICAgIG1lZGlhLFxuICAgIHJlc29sdmVBbGwoXG4gICAgICBjb250ZXh0LnBhcnNlci5jb25zdHJ1Y3RzLmluc2lkZVNwYW4ubnVsbCxcbiAgICAgIGV2ZW50cy5zbGljZShvcGVuICsgb2Zmc2V0ICsgNCwgY2xvc2UgLSAzKSxcbiAgICAgIGNvbnRleHRcbiAgICApXG4gIClcblxuICAvLyBUZXh0IGNsb3NlLCBtYXJrZXIgY2xvc2UsIGxhYmVsIGNsb3NlLlxuICBtZWRpYSA9IHB1c2gobWVkaWEsIFtcbiAgICBbJ2V4aXQnLCB0ZXh0LCBjb250ZXh0XSxcbiAgICBldmVudHNbY2xvc2UgLSAyXSxcbiAgICBldmVudHNbY2xvc2UgLSAxXSxcbiAgICBbJ2V4aXQnLCBsYWJlbCwgY29udGV4dF1cbiAgXSlcblxuICAvLyBSZWZlcmVuY2UsIHJlc291cmNlLCBvciBzby5cbiAgbWVkaWEgPSBwdXNoKG1lZGlhLCBldmVudHMuc2xpY2UoY2xvc2UgKyAxKSlcblxuICAvLyBNZWRpYSBjbG9zZS5cbiAgbWVkaWEgPSBwdXNoKG1lZGlhLCBbWydleGl0JywgZ3JvdXAsIGNvbnRleHRdXSlcbiAgc3BsaWNlKGV2ZW50cywgb3BlbiwgZXZlbnRzLmxlbmd0aCwgbWVkaWEpXG4gIHJldHVybiBldmVudHNcbn1cblxuLyoqXG4gKiBAdGhpcyB7VG9rZW5pemVDb250ZXh0fVxuICogQHR5cGUge1Rva2VuaXplcn1cbiAqL1xuZnVuY3Rpb24gdG9rZW5pemVMYWJlbEVuZChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzXG4gIGxldCBpbmRleCA9IHNlbGYuZXZlbnRzLmxlbmd0aFxuICAvKiogQHR5cGUge1Rva2VufSAqL1xuICBsZXQgbGFiZWxTdGFydFxuICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gIGxldCBkZWZpbmVkXG5cbiAgLy8gRmluZCBhbiBvcGVuaW5nLlxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIGlmIChcbiAgICAgIChzZWxmLmV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2xhYmVsSW1hZ2UnIHx8XG4gICAgICAgIHNlbGYuZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnbGFiZWxMaW5rJykgJiZcbiAgICAgICFzZWxmLmV2ZW50c1tpbmRleF1bMV0uX2JhbGFuY2VkXG4gICAgKSB7XG4gICAgICBsYWJlbFN0YXJ0ID0gc2VsZi5ldmVudHNbaW5kZXhdWzFdXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhcnRcblxuICAvKipcbiAgICogU3RhcnQgb2YgbGFiZWwgZW5kLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgW2FdKGIpIGNcbiAgICogICAgICAgXlxuICAgKiA+IHwgW2FdW2JdIGNcbiAgICogICAgICAgXlxuICAgKiA+IHwgW2FdW10gYlxuICAgKiAgICAgICBeXG4gICAqID4gfCBbYV0gYlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIC8vIElmIHRoZXJlIGlzIG5vdCBhbiBva2F5IG9wZW5pbmcuXG4gICAgaWYgKCFsYWJlbFN0YXJ0KSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGNvcnJlc3BvbmRpbmcgbGFiZWwgKGxpbmspIHN0YXJ0IGlzIG1hcmtlZCBhcyBpbmFjdGl2ZSxcbiAgICAvLyBpdCBtZWFucyB3ZeKAmWQgYmUgd3JhcHBpbmcgYSBsaW5rLCBsaWtlIHRoaXM6XG4gICAgLy9cbiAgICAvLyBgYGBtYXJrZG93blxuICAgIC8vID4gfCBhIFtiIFtjXShkKSBlXShmKSBnLlxuICAgIC8vICAgICAgICAgICAgICAgICAgXlxuICAgIC8vIGBgYFxuICAgIC8vXG4gICAgLy8gV2UgY2Fu4oCZdCBoYXZlIHRoYXQsIHNvIGl04oCZcyBqdXN0IGJhbGFuY2VkIGJyYWNrZXRzLlxuICAgIGlmIChsYWJlbFN0YXJ0Ll9pbmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIGxhYmVsRW5kTm9rKGNvZGUpXG4gICAgfVxuICAgIGRlZmluZWQgPSBzZWxmLnBhcnNlci5kZWZpbmVkLmluY2x1ZGVzKFxuICAgICAgbm9ybWFsaXplSWRlbnRpZmllcihcbiAgICAgICAgc2VsZi5zbGljZVNlcmlhbGl6ZSh7XG4gICAgICAgICAgc3RhcnQ6IGxhYmVsU3RhcnQuZW5kLFxuICAgICAgICAgIGVuZDogc2VsZi5ub3coKVxuICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgICBlZmZlY3RzLmVudGVyKCdsYWJlbEVuZCcpXG4gICAgZWZmZWN0cy5lbnRlcignbGFiZWxNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnbGFiZWxNYXJrZXInKVxuICAgIGVmZmVjdHMuZXhpdCgnbGFiZWxFbmQnKVxuICAgIHJldHVybiBhZnRlclxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGBdYC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFthXShiKSBjXG4gICAqICAgICAgIF5cbiAgICogPiB8IFthXVtiXSBjXG4gICAqICAgICAgIF5cbiAgICogPiB8IFthXVtdIGJcbiAgICogICAgICAgXlxuICAgKiA+IHwgW2FdIGJcbiAgICogICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gYWZ0ZXIoY29kZSkge1xuICAgIC8vIE5vdGU6IGBtYXJrZG93bi1yc2AgYWxzbyBwYXJzZXMgR0ZNIGZvb3Rub3RlcyBoZXJlLCB3aGljaCBmb3IgdXMgaXMgaW5cbiAgICAvLyBhbiBleHRlbnNpb24uXG5cbiAgICAvLyBSZXNvdXJjZSAoYFthc2RdKGZnaClgKT9cbiAgICBpZiAoY29kZSA9PT0gNDApIHtcbiAgICAgIHJldHVybiBlZmZlY3RzLmF0dGVtcHQoXG4gICAgICAgIHJlc291cmNlQ29uc3RydWN0LFxuICAgICAgICBsYWJlbEVuZE9rLFxuICAgICAgICBkZWZpbmVkID8gbGFiZWxFbmRPayA6IGxhYmVsRW5kTm9rXG4gICAgICApKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gRnVsbCAoYFthc2RdW2ZnaF1gKSBvciBjb2xsYXBzZWQgKGBbYXNkXVtdYCkgcmVmZXJlbmNlP1xuICAgIGlmIChjb2RlID09PSA5MSkge1xuICAgICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChcbiAgICAgICAgcmVmZXJlbmNlRnVsbENvbnN0cnVjdCxcbiAgICAgICAgbGFiZWxFbmRPayxcbiAgICAgICAgZGVmaW5lZCA/IHJlZmVyZW5jZU5vdEZ1bGwgOiBsYWJlbEVuZE5va1xuICAgICAgKShjb2RlKVxuICAgIH1cblxuICAgIC8vIFNob3J0Y3V0IChgW2FzZF1gKSByZWZlcmVuY2U/XG4gICAgcmV0dXJuIGRlZmluZWQgPyBsYWJlbEVuZE9rKGNvZGUpIDogbGFiZWxFbmROb2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBgXWAsIGF0IGBbYCwgYnV0IG5vdCBhdCBhIGZ1bGwgcmVmZXJlbmNlLlxuICAgKlxuICAgKiA+IPCfkYkgKipOb3RlKio6IHdlIG9ubHkgZ2V0IGhlcmUgaWYgdGhlIGxhYmVsIGlzIGRlZmluZWQuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBbYV1bXSBiXG4gICAqICAgICAgICBeXG4gICAqID4gfCBbYV0gYlxuICAgKiAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gcmVmZXJlbmNlTm90RnVsbChjb2RlKSB7XG4gICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChcbiAgICAgIHJlZmVyZW5jZUNvbGxhcHNlZENvbnN0cnVjdCxcbiAgICAgIGxhYmVsRW5kT2ssXG4gICAgICBsYWJlbEVuZE5va1xuICAgICkoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEb25lLCB3ZSBmb3VuZCBzb21ldGhpbmcuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBbYV0oYikgY1xuICAgKiAgICAgICAgICAgXlxuICAgKiA+IHwgW2FdW2JdIGNcbiAgICogICAgICAgICAgIF5cbiAgICogPiB8IFthXVtdIGJcbiAgICogICAgICAgICAgXlxuICAgKiA+IHwgW2FdIGJcbiAgICogICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGxhYmVsRW5kT2soY29kZSkge1xuICAgIC8vIE5vdGU6IGBtYXJrZG93bi1yc2AgZG9lcyBhIGJ1bmNoIG9mIHN0dWZmIGhlcmUuXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogRG9uZSwgaXTigJlzIG5vdGhpbmcuXG4gICAqXG4gICAqIFRoZXJlIHdhcyBhbiBva2F5IG9wZW5pbmcsIGJ1dCB3ZSBkaWRu4oCZdCBtYXRjaCBhbnl0aGluZy5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFthXShiIGNcbiAgICogICAgICAgIF5cbiAgICogPiB8IFthXVtiIGNcbiAgICogICAgICAgIF5cbiAgICogPiB8IFthXSBiXG4gICAqICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBsYWJlbEVuZE5vayhjb2RlKSB7XG4gICAgbGFiZWxTdGFydC5fYmFsYW5jZWQgPSB0cnVlXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG5cbi8qKlxuICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAqIEB0eXBlIHtUb2tlbml6ZXJ9XG4gKi9cbmZ1bmN0aW9uIHRva2VuaXplUmVzb3VyY2UoZWZmZWN0cywgb2ssIG5vaykge1xuICByZXR1cm4gcmVzb3VyY2VTdGFydFxuXG4gIC8qKlxuICAgKiBBdCBhIHJlc291cmNlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgW2FdKGIpIGNcbiAgICogICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHJlc291cmNlU3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ3Jlc291cmNlJylcbiAgICBlZmZlY3RzLmVudGVyKCdyZXNvdXJjZU1hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdyZXNvdXJjZU1hcmtlcicpXG4gICAgcmV0dXJuIHJlc291cmNlQmVmb3JlXG4gIH1cblxuICAvKipcbiAgICogSW4gcmVzb3VyY2UsIGFmdGVyIGAoYCwgYXQgb3B0aW9uYWwgd2hpdGVzcGFjZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFthXShiKSBjXG4gICAqICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gcmVzb3VyY2VCZWZvcmUoY29kZSkge1xuICAgIHJldHVybiBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpXG4gICAgICA/IGZhY3RvcnlXaGl0ZXNwYWNlKGVmZmVjdHMsIHJlc291cmNlT3BlbikoY29kZSlcbiAgICAgIDogcmVzb3VyY2VPcGVuKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gcmVzb3VyY2UsIGFmdGVyIG9wdGlvbmFsIHdoaXRlc3BhY2UsIGF0IGApYCBvciBhIGRlc3RpbmF0aW9uLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgW2FdKGIpIGNcbiAgICogICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiByZXNvdXJjZU9wZW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0MSkge1xuICAgICAgcmV0dXJuIHJlc291cmNlRW5kKGNvZGUpXG4gICAgfVxuICAgIHJldHVybiBmYWN0b3J5RGVzdGluYXRpb24oXG4gICAgICBlZmZlY3RzLFxuICAgICAgcmVzb3VyY2VEZXN0aW5hdGlvbkFmdGVyLFxuICAgICAgcmVzb3VyY2VEZXN0aW5hdGlvbk1pc3NpbmcsXG4gICAgICAncmVzb3VyY2VEZXN0aW5hdGlvbicsXG4gICAgICAncmVzb3VyY2VEZXN0aW5hdGlvbkxpdGVyYWwnLFxuICAgICAgJ3Jlc291cmNlRGVzdGluYXRpb25MaXRlcmFsTWFya2VyJyxcbiAgICAgICdyZXNvdXJjZURlc3RpbmF0aW9uUmF3JyxcbiAgICAgICdyZXNvdXJjZURlc3RpbmF0aW9uU3RyaW5nJyxcbiAgICAgIDMyXG4gICAgKShjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIHJlc291cmNlLCBhZnRlciBkZXN0aW5hdGlvbiwgYXQgb3B0aW9uYWwgd2hpdGVzcGFjZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFthXShiKSBjXG4gICAqICAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHJlc291cmNlRGVzdGluYXRpb25BZnRlcihjb2RlKSB7XG4gICAgcmV0dXJuIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSlcbiAgICAgID8gZmFjdG9yeVdoaXRlc3BhY2UoZWZmZWN0cywgcmVzb3VyY2VCZXR3ZWVuKShjb2RlKVxuICAgICAgOiByZXNvdXJjZUVuZChjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEF0IGludmFsaWQgZGVzdGluYXRpb24uXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBbYV0oPDwpIGJcbiAgICogICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiByZXNvdXJjZURlc3RpbmF0aW9uTWlzc2luZyhjb2RlKSB7XG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIHJlc291cmNlLCBhZnRlciBkZXN0aW5hdGlvbiBhbmQgd2hpdGVzcGFjZSwgYXQgYChgIG9yIHRpdGxlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgW2FdKGIgKSBjXG4gICAqICAgICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiByZXNvdXJjZUJldHdlZW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSAzNCB8fCBjb2RlID09PSAzOSB8fCBjb2RlID09PSA0MCkge1xuICAgICAgcmV0dXJuIGZhY3RvcnlUaXRsZShcbiAgICAgICAgZWZmZWN0cyxcbiAgICAgICAgcmVzb3VyY2VUaXRsZUFmdGVyLFxuICAgICAgICBub2ssXG4gICAgICAgICdyZXNvdXJjZVRpdGxlJyxcbiAgICAgICAgJ3Jlc291cmNlVGl0bGVNYXJrZXInLFxuICAgICAgICAncmVzb3VyY2VUaXRsZVN0cmluZydcbiAgICAgICkoY29kZSlcbiAgICB9XG4gICAgcmV0dXJuIHJlc291cmNlRW5kKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gcmVzb3VyY2UsIGFmdGVyIHRpdGxlLCBhdCBvcHRpb25hbCB3aGl0ZXNwYWNlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgW2FdKGIgXCJjXCIpIGRcbiAgICogICAgICAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHJlc291cmNlVGl0bGVBZnRlcihjb2RlKSB7XG4gICAgcmV0dXJuIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSlcbiAgICAgID8gZmFjdG9yeVdoaXRlc3BhY2UoZWZmZWN0cywgcmVzb3VyY2VFbmQpKGNvZGUpXG4gICAgICA6IHJlc291cmNlRW5kKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gcmVzb3VyY2UsIGF0IGApYC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFthXShiKSBkXG4gICAqICAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHJlc291cmNlRW5kKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDEpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3Jlc291cmNlTWFya2VyJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdyZXNvdXJjZU1hcmtlcicpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3Jlc291cmNlJylcbiAgICAgIHJldHVybiBva1xuICAgIH1cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cbn1cblxuLyoqXG4gKiBAdGhpcyB7VG9rZW5pemVDb250ZXh0fVxuICogQHR5cGUge1Rva2VuaXplcn1cbiAqL1xuZnVuY3Rpb24gdG9rZW5pemVSZWZlcmVuY2VGdWxsKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgcmV0dXJuIHJlZmVyZW5jZUZ1bGxcblxuICAvKipcbiAgICogSW4gYSByZWZlcmVuY2UgKGZ1bGwpLCBhdCB0aGUgYFtgLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgW2FdW2JdIGRcbiAgICogICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHJlZmVyZW5jZUZ1bGwoY29kZSkge1xuICAgIHJldHVybiBmYWN0b3J5TGFiZWwuY2FsbChcbiAgICAgIHNlbGYsXG4gICAgICBlZmZlY3RzLFxuICAgICAgcmVmZXJlbmNlRnVsbEFmdGVyLFxuICAgICAgcmVmZXJlbmNlRnVsbE1pc3NpbmcsXG4gICAgICAncmVmZXJlbmNlJyxcbiAgICAgICdyZWZlcmVuY2VNYXJrZXInLFxuICAgICAgJ3JlZmVyZW5jZVN0cmluZydcbiAgICApKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gYSByZWZlcmVuY2UgKGZ1bGwpLCBhZnRlciBgXWAuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBbYV1bYl0gZFxuICAgKiAgICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiByZWZlcmVuY2VGdWxsQWZ0ZXIoY29kZSkge1xuICAgIHJldHVybiBzZWxmLnBhcnNlci5kZWZpbmVkLmluY2x1ZGVzKFxuICAgICAgbm9ybWFsaXplSWRlbnRpZmllcihcbiAgICAgICAgc2VsZi5zbGljZVNlcmlhbGl6ZShzZWxmLmV2ZW50c1tzZWxmLmV2ZW50cy5sZW5ndGggLSAxXVsxXSkuc2xpY2UoMSwgLTEpXG4gICAgICApXG4gICAgKVxuICAgICAgPyBvayhjb2RlKVxuICAgICAgOiBub2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiByZWZlcmVuY2UgKGZ1bGwpIHRoYXQgd2FzIG1pc3NpbmcuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBbYV1bYiBkXG4gICAqICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiByZWZlcmVuY2VGdWxsTWlzc2luZyhjb2RlKSB7XG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG5cbi8qKlxuICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAqIEB0eXBlIHtUb2tlbml6ZXJ9XG4gKi9cbmZ1bmN0aW9uIHRva2VuaXplUmVmZXJlbmNlQ29sbGFwc2VkKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIHJlZmVyZW5jZUNvbGxhcHNlZFN0YXJ0XG5cbiAgLyoqXG4gICAqIEluIHJlZmVyZW5jZSAoY29sbGFwc2VkKSwgYXQgYFtgLlxuICAgKlxuICAgKiA+IPCfkYkgKipOb3RlKio6IHdlIG9ubHkgZ2V0IGhlcmUgaWYgdGhlIGxhYmVsIGlzIGRlZmluZWQuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBbYV1bXSBkXG4gICAqICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiByZWZlcmVuY2VDb2xsYXBzZWRTdGFydChjb2RlKSB7XG4gICAgLy8gV2Ugb25seSBhdHRlbXB0IGEgY29sbGFwc2VkIGxhYmVsIGlmIHRoZXJl4oCZcyBhIGBbYC5cblxuICAgIGVmZmVjdHMuZW50ZXIoJ3JlZmVyZW5jZScpXG4gICAgZWZmZWN0cy5lbnRlcigncmVmZXJlbmNlTWFya2VyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ3JlZmVyZW5jZU1hcmtlcicpXG4gICAgcmV0dXJuIHJlZmVyZW5jZUNvbGxhcHNlZE9wZW5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbiByZWZlcmVuY2UgKGNvbGxhcHNlZCksIGF0IGBdYC5cbiAgICpcbiAgICogPiDwn5GJICoqTm90ZSoqOiB3ZSBvbmx5IGdldCBoZXJlIGlmIHRoZSBsYWJlbCBpcyBkZWZpbmVkLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgW2FdW10gZFxuICAgKiAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqICBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiByZWZlcmVuY2VDb2xsYXBzZWRPcGVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gOTMpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3JlZmVyZW5jZU1hcmtlcicpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgncmVmZXJlbmNlTWFya2VyJylcbiAgICAgIGVmZmVjdHMuZXhpdCgncmVmZXJlbmNlJylcbiAgICAgIHJldHVybiBva1xuICAgIH1cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cbn1cbiIsIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Db25zdHJ1Y3R9IENvbnN0cnVjdFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVDb250ZXh0fSBUb2tlbml6ZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVyfSBUb2tlbml6ZXJcbiAqL1xuXG5pbXBvcnQge2xhYmVsRW5kfSBmcm9tICcuL2xhYmVsLWVuZC5qcydcblxuLyoqIEB0eXBlIHtDb25zdHJ1Y3R9ICovXG5leHBvcnQgY29uc3QgbGFiZWxTdGFydEltYWdlID0ge1xuICBuYW1lOiAnbGFiZWxTdGFydEltYWdlJyxcbiAgdG9rZW5pemU6IHRva2VuaXplTGFiZWxTdGFydEltYWdlLFxuICByZXNvbHZlQWxsOiBsYWJlbEVuZC5yZXNvbHZlQWxsXG59XG5cbi8qKlxuICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAqIEB0eXBlIHtUb2tlbml6ZXJ9XG4gKi9cbmZ1bmN0aW9uIHRva2VuaXplTGFiZWxTdGFydEltYWdlKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgLyoqXG4gICAqIFN0YXJ0IG9mIGxhYmVsIChpbWFnZSkgc3RhcnQuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhICFbYl0gY1xuICAgKiAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignbGFiZWxJbWFnZScpXG4gICAgZWZmZWN0cy5lbnRlcignbGFiZWxJbWFnZU1hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsYWJlbEltYWdlTWFya2VyJylcbiAgICByZXR1cm4gb3BlblxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGAhYCwgYXQgYFtgLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYSAhW2JdIGNcbiAgICogICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIG9wZW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSA5MSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignbGFiZWxNYXJrZXInKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xhYmVsTWFya2VyJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGFiZWxJbWFnZScpXG4gICAgICByZXR1cm4gYWZ0ZXJcbiAgICB9XG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGAhW2AuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhICFbYl0gY1xuICAgKiAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIFRoaXMgaXMgbmVlZGVkIGluIGJlY2F1c2UsIHdoZW4gR0ZNIGZvb3Rub3RlcyBhcmUgZW5hYmxlZCwgaW1hZ2VzIG5ldmVyXG4gICAqIGZvcm0gd2hlbiBzdGFydGVkIHdpdGggYSBgXmAuXG4gICAqIEluc3RlYWQsIGxpbmtzIGZvcm06XG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqICFbXmFdKGIpXG4gICAqXG4gICAqICFbXmFdW2JdXG4gICAqXG4gICAqIFtiXTogY1xuICAgKiBgYGBcbiAgICpcbiAgICogYGBgaHRtbFxuICAgKiA8cD4hPGEgaHJlZj1cXFwiYlxcXCI+XmE8L2E+PC9wPlxuICAgKiA8cD4hPGEgaHJlZj1cXFwiY1xcXCI+XmE8L2E+PC9wPlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gYWZ0ZXIoY29kZSkge1xuICAgIC8vIFRvIGRvOiB1c2UgYSBuZXcgZmllbGQgdG8gZG8gdGhpcywgdGhpcyBpcyBzdGlsbCBuZWVkZWQgZm9yXG4gICAgLy8gYG1pY3JvbWFyay1leHRlbnNpb24tZ2ZtLWZvb3Rub3RlYCwgYnV0IHRoZSBgbGFiZWwtc3RhcnQtbGlua2BcbiAgICAvLyBiZWhhdmlvciBpc27igJl0LlxuICAgIC8vIEhpZGRlbiBmb290bm90ZXMgaG9vay5cbiAgICAvKiBjOCBpZ25vcmUgbmV4dCAzICovXG4gICAgcmV0dXJuIGNvZGUgPT09IDk0ICYmICdfaGlkZGVuRm9vdG5vdGVTdXBwb3J0JyBpbiBzZWxmLnBhcnNlci5jb25zdHJ1Y3RzXG4gICAgICA/IG5vayhjb2RlKVxuICAgICAgOiBvayhjb2RlKVxuICB9XG59XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ29uc3RydWN0fSBDb25zdHJ1Y3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplQ29udGV4dH0gVG9rZW5pemVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplcn0gVG9rZW5pemVyXG4gKi9cblxuaW1wb3J0IHtsYWJlbEVuZH0gZnJvbSAnLi9sYWJlbC1lbmQuanMnXG5cbi8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuZXhwb3J0IGNvbnN0IGxhYmVsU3RhcnRMaW5rID0ge1xuICBuYW1lOiAnbGFiZWxTdGFydExpbmsnLFxuICB0b2tlbml6ZTogdG9rZW5pemVMYWJlbFN0YXJ0TGluayxcbiAgcmVzb2x2ZUFsbDogbGFiZWxFbmQucmVzb2x2ZUFsbFxufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZUxhYmVsU3RhcnRMaW5rKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgLyoqXG4gICAqIFN0YXJ0IG9mIGxhYmVsIChsaW5rKSBzdGFydC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGEgW2JdIGNcbiAgICogICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2xhYmVsTGluaycpXG4gICAgZWZmZWN0cy5lbnRlcignbGFiZWxNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnbGFiZWxNYXJrZXInKVxuICAgIGVmZmVjdHMuZXhpdCgnbGFiZWxMaW5rJylcbiAgICByZXR1cm4gYWZ0ZXJcbiAgfVxuXG4gIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICAvLyBUbyBkbzogdGhpcyBpc27igJl0IG5lZWRlZCBpbiBgbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tZm9vdG5vdGVgLFxuICAgIC8vIHJlbW92ZS5cbiAgICAvLyBIaWRkZW4gZm9vdG5vdGVzIGhvb2suXG4gICAgLyogYzggaWdub3JlIG5leHQgMyAqL1xuICAgIHJldHVybiBjb2RlID09PSA5NCAmJiAnX2hpZGRlbkZvb3Rub3RlU3VwcG9ydCcgaW4gc2VsZi5wYXJzZXIuY29uc3RydWN0c1xuICAgICAgPyBub2soY29kZSlcbiAgICAgIDogb2soY29kZSlcbiAgfVxufVxuIiwiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvbnN0cnVjdH0gQ29uc3RydWN0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlN0YXRlfSBTdGF0ZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZUNvbnRleHR9IFRva2VuaXplQ29udGV4dFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZXJ9IFRva2VuaXplclxuICovXG5cbmltcG9ydCB7ZmFjdG9yeVNwYWNlfSBmcm9tICdtaWNyb21hcmstZmFjdG9yeS1zcGFjZSdcbmltcG9ydCB7bWFya2Rvd25MaW5lRW5kaW5nfSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG4vKiogQHR5cGUge0NvbnN0cnVjdH0gKi9cbmV4cG9ydCBjb25zdCBsaW5lRW5kaW5nID0ge1xuICBuYW1lOiAnbGluZUVuZGluZycsXG4gIHRva2VuaXplOiB0b2tlbml6ZUxpbmVFbmRpbmdcbn1cblxuLyoqXG4gKiBAdGhpcyB7VG9rZW5pemVDb250ZXh0fVxuICogQHR5cGUge1Rva2VuaXplcn1cbiAqL1xuZnVuY3Rpb24gdG9rZW5pemVMaW5lRW5kaW5nKGVmZmVjdHMsIG9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgIHJldHVybiBmYWN0b3J5U3BhY2UoZWZmZWN0cywgb2ssICdsaW5lUHJlZml4JylcbiAgfVxufVxuIiwiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvZGV9IENvZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ29uc3RydWN0fSBDb25zdHJ1Y3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplQ29udGV4dH0gVG9rZW5pemVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplcn0gVG9rZW5pemVyXG4gKi9cblxuaW1wb3J0IHtmYWN0b3J5U3BhY2V9IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LXNwYWNlJ1xuaW1wb3J0IHttYXJrZG93bkxpbmVFbmRpbmcsIG1hcmtkb3duU3BhY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3Rlcidcbi8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuZXhwb3J0IGNvbnN0IHRoZW1hdGljQnJlYWsgPSB7XG4gIG5hbWU6ICd0aGVtYXRpY0JyZWFrJyxcbiAgdG9rZW5pemU6IHRva2VuaXplVGhlbWF0aWNCcmVha1xufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZVRoZW1hdGljQnJlYWsoZWZmZWN0cywgb2ssIG5vaykge1xuICBsZXQgc2l6ZSA9IDBcbiAgLyoqIEB0eXBlIHtOb25OdWxsYWJsZTxDb2RlPn0gKi9cbiAgbGV0IG1hcmtlclxuICByZXR1cm4gc3RhcnRcblxuICAvKipcbiAgICogU3RhcnQgb2YgdGhlbWF0aWMgYnJlYWsuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCAqKipcbiAgICogICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCd0aGVtYXRpY0JyZWFrJylcbiAgICAvLyBUbyBkbzogcGFyc2UgaW5kZW50IGxpa2UgYG1hcmtkb3duLXJzYC5cbiAgICByZXR1cm4gYmVmb3JlKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgb3B0aW9uYWwgd2hpdGVzcGFjZSwgYXQgbWFya2VyLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgKioqXG4gICAqICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBiZWZvcmUoY29kZSkge1xuICAgIG1hcmtlciA9IGNvZGVcbiAgICByZXR1cm4gYXRCcmVhayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIHNvbWV0aGluZywgYmVmb3JlIHNvbWV0aGluZyBlbHNlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgKioqXG4gICAqICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBhdEJyZWFrKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCd0aGVtYXRpY0JyZWFrU2VxdWVuY2UnKVxuICAgICAgcmV0dXJuIHNlcXVlbmNlKGNvZGUpXG4gICAgfVxuICAgIGlmIChzaXplID49IDMgJiYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSkge1xuICAgICAgZWZmZWN0cy5leGl0KCd0aGVtYXRpY0JyZWFrJylcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gc2VxdWVuY2UuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCAqKipcbiAgICogICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHNlcXVlbmNlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHNpemUrK1xuICAgICAgcmV0dXJuIHNlcXVlbmNlXG4gICAgfVxuICAgIGVmZmVjdHMuZXhpdCgndGhlbWF0aWNCcmVha1NlcXVlbmNlJylcbiAgICByZXR1cm4gbWFya2Rvd25TcGFjZShjb2RlKVxuICAgICAgPyBmYWN0b3J5U3BhY2UoZWZmZWN0cywgYXRCcmVhaywgJ3doaXRlc3BhY2UnKShjb2RlKVxuICAgICAgOiBhdEJyZWFrKGNvZGUpXG4gIH1cbn1cbiIsIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Db2RlfSBDb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvbnN0cnVjdH0gQ29uc3RydWN0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvbnRhaW5lclN0YXRlfSBDb250YWluZXJTdGF0ZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5FeGl0ZXJ9IEV4aXRlclxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVDb250ZXh0fSBUb2tlbml6ZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVyfSBUb2tlbml6ZXJcbiAqL1xuXG5pbXBvcnQge2ZhY3RvcnlTcGFjZX0gZnJvbSAnbWljcm9tYXJrLWZhY3Rvcnktc3BhY2UnXG5pbXBvcnQge2FzY2lpRGlnaXQsIG1hcmtkb3duU3BhY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3RlcidcbmltcG9ydCB7YmxhbmtMaW5lfSBmcm9tICcuL2JsYW5rLWxpbmUuanMnXG5pbXBvcnQge3RoZW1hdGljQnJlYWt9IGZyb20gJy4vdGhlbWF0aWMtYnJlYWsuanMnXG5cbi8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuZXhwb3J0IGNvbnN0IGxpc3QgPSB7XG4gIG5hbWU6ICdsaXN0JyxcbiAgdG9rZW5pemU6IHRva2VuaXplTGlzdFN0YXJ0LFxuICBjb250aW51YXRpb246IHtcbiAgICB0b2tlbml6ZTogdG9rZW5pemVMaXN0Q29udGludWF0aW9uXG4gIH0sXG4gIGV4aXQ6IHRva2VuaXplTGlzdEVuZFxufVxuXG4vKiogQHR5cGUge0NvbnN0cnVjdH0gKi9cbmNvbnN0IGxpc3RJdGVtUHJlZml4V2hpdGVzcGFjZUNvbnN0cnVjdCA9IHtcbiAgdG9rZW5pemU6IHRva2VuaXplTGlzdEl0ZW1QcmVmaXhXaGl0ZXNwYWNlLFxuICBwYXJ0aWFsOiB0cnVlXG59XG5cbi8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuY29uc3QgaW5kZW50Q29uc3RydWN0ID0ge1xuICB0b2tlbml6ZTogdG9rZW5pemVJbmRlbnQsXG4gIHBhcnRpYWw6IHRydWVcbn1cblxuLy8gVG8gZG86IGBtYXJrZG93bi1yc2AgcGFyc2VzIGxpc3QgaXRlbXMgb24gdGhlaXIgb3duIGFuZCBsYXRlciBzdGl0Y2hlcyB0aGVtXG4vLyB0b2dldGhlci5cblxuLyoqXG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAqL1xuZnVuY3Rpb24gdG9rZW5pemVMaXN0U3RhcnQoZWZmZWN0cywgb2ssIG5vaykge1xuICBjb25zdCBzZWxmID0gdGhpc1xuICBjb25zdCB0YWlsID0gc2VsZi5ldmVudHNbc2VsZi5ldmVudHMubGVuZ3RoIC0gMV1cbiAgbGV0IGluaXRpYWxTaXplID1cbiAgICB0YWlsICYmIHRhaWxbMV0udHlwZSA9PT0gJ2xpbmVQcmVmaXgnXG4gICAgICA/IHRhaWxbMl0uc2xpY2VTZXJpYWxpemUodGFpbFsxXSwgdHJ1ZSkubGVuZ3RoXG4gICAgICA6IDBcbiAgbGV0IHNpemUgPSAwXG4gIHJldHVybiBzdGFydFxuXG4gIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBjb25zdCBraW5kID1cbiAgICAgIHNlbGYuY29udGFpbmVyU3RhdGUudHlwZSB8fFxuICAgICAgKGNvZGUgPT09IDQyIHx8IGNvZGUgPT09IDQzIHx8IGNvZGUgPT09IDQ1XG4gICAgICAgID8gJ2xpc3RVbm9yZGVyZWQnXG4gICAgICAgIDogJ2xpc3RPcmRlcmVkJylcbiAgICBpZiAoXG4gICAgICBraW5kID09PSAnbGlzdFVub3JkZXJlZCdcbiAgICAgICAgPyAhc2VsZi5jb250YWluZXJTdGF0ZS5tYXJrZXIgfHwgY29kZSA9PT0gc2VsZi5jb250YWluZXJTdGF0ZS5tYXJrZXJcbiAgICAgICAgOiBhc2NpaURpZ2l0KGNvZGUpXG4gICAgKSB7XG4gICAgICBpZiAoIXNlbGYuY29udGFpbmVyU3RhdGUudHlwZSkge1xuICAgICAgICBzZWxmLmNvbnRhaW5lclN0YXRlLnR5cGUgPSBraW5kXG4gICAgICAgIGVmZmVjdHMuZW50ZXIoa2luZCwge1xuICAgICAgICAgIF9jb250YWluZXI6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGlmIChraW5kID09PSAnbGlzdFVub3JkZXJlZCcpIHtcbiAgICAgICAgZWZmZWN0cy5lbnRlcignbGlzdEl0ZW1QcmVmaXgnKVxuICAgICAgICByZXR1cm4gY29kZSA9PT0gNDIgfHwgY29kZSA9PT0gNDVcbiAgICAgICAgICA/IGVmZmVjdHMuY2hlY2sodGhlbWF0aWNCcmVhaywgbm9rLCBhdE1hcmtlcikoY29kZSlcbiAgICAgICAgICA6IGF0TWFya2VyKGNvZGUpXG4gICAgICB9XG4gICAgICBpZiAoIXNlbGYuaW50ZXJydXB0IHx8IGNvZGUgPT09IDQ5KSB7XG4gICAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpc3RJdGVtUHJlZml4JylcbiAgICAgICAgZWZmZWN0cy5lbnRlcignbGlzdEl0ZW1WYWx1ZScpXG4gICAgICAgIHJldHVybiBpbnNpZGUoY29kZSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gaW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoYXNjaWlEaWdpdChjb2RlKSAmJiArK3NpemUgPCAxMCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5zaWRlXG4gICAgfVxuICAgIGlmIChcbiAgICAgICghc2VsZi5pbnRlcnJ1cHQgfHwgc2l6ZSA8IDIpICYmXG4gICAgICAoc2VsZi5jb250YWluZXJTdGF0ZS5tYXJrZXJcbiAgICAgICAgPyBjb2RlID09PSBzZWxmLmNvbnRhaW5lclN0YXRlLm1hcmtlclxuICAgICAgICA6IGNvZGUgPT09IDQxIHx8IGNvZGUgPT09IDQ2KVxuICAgICkge1xuICAgICAgZWZmZWN0cy5leGl0KCdsaXN0SXRlbVZhbHVlJylcbiAgICAgIHJldHVybiBhdE1hcmtlcihjb2RlKVxuICAgIH1cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKiovXG4gIGZ1bmN0aW9uIGF0TWFya2VyKGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdsaXN0SXRlbU1hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsaXN0SXRlbU1hcmtlcicpXG4gICAgc2VsZi5jb250YWluZXJTdGF0ZS5tYXJrZXIgPSBzZWxmLmNvbnRhaW5lclN0YXRlLm1hcmtlciB8fCBjb2RlXG4gICAgcmV0dXJuIGVmZmVjdHMuY2hlY2soXG4gICAgICBibGFua0xpbmUsXG4gICAgICAvLyBDYW7igJl0IGJlIGVtcHR5IHdoZW4gaW50ZXJydXB0aW5nLlxuICAgICAgc2VsZi5pbnRlcnJ1cHQgPyBub2sgOiBvbkJsYW5rLFxuICAgICAgZWZmZWN0cy5hdHRlbXB0KFxuICAgICAgICBsaXN0SXRlbVByZWZpeFdoaXRlc3BhY2VDb25zdHJ1Y3QsXG4gICAgICAgIGVuZE9mUHJlZml4LFxuICAgICAgICBvdGhlclByZWZpeFxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gIGZ1bmN0aW9uIG9uQmxhbmsoY29kZSkge1xuICAgIHNlbGYuY29udGFpbmVyU3RhdGUuaW5pdGlhbEJsYW5rTGluZSA9IHRydWVcbiAgICBpbml0aWFsU2l6ZSsrXG4gICAgcmV0dXJuIGVuZE9mUHJlZml4KGNvZGUpXG4gIH1cblxuICAvKiogQHR5cGUge1N0YXRlfSAqL1xuICBmdW5jdGlvbiBvdGhlclByZWZpeChjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpc3RJdGVtUHJlZml4V2hpdGVzcGFjZScpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGlzdEl0ZW1QcmVmaXhXaGl0ZXNwYWNlJylcbiAgICAgIHJldHVybiBlbmRPZlByZWZpeFxuICAgIH1cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICAvKiogQHR5cGUge1N0YXRlfSAqL1xuICBmdW5jdGlvbiBlbmRPZlByZWZpeChjb2RlKSB7XG4gICAgc2VsZi5jb250YWluZXJTdGF0ZS5zaXplID1cbiAgICAgIGluaXRpYWxTaXplICtcbiAgICAgIHNlbGYuc2xpY2VTZXJpYWxpemUoZWZmZWN0cy5leGl0KCdsaXN0SXRlbVByZWZpeCcpLCB0cnVlKS5sZW5ndGhcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuXG4vKipcbiAqIEB0eXBlIHtUb2tlbml6ZXJ9XG4gKiBAdGhpcyB7VG9rZW5pemVDb250ZXh0fVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZUxpc3RDb250aW51YXRpb24oZWZmZWN0cywgb2ssIG5vaykge1xuICBjb25zdCBzZWxmID0gdGhpc1xuICBzZWxmLmNvbnRhaW5lclN0YXRlLl9jbG9zZUZsb3cgPSB1bmRlZmluZWRcbiAgcmV0dXJuIGVmZmVjdHMuY2hlY2soYmxhbmtMaW5lLCBvbkJsYW5rLCBub3RCbGFuaylcblxuICAvKiogQHR5cGUge1N0YXRlfSAqL1xuICBmdW5jdGlvbiBvbkJsYW5rKGNvZGUpIHtcbiAgICBzZWxmLmNvbnRhaW5lclN0YXRlLmZ1cnRoZXJCbGFua0xpbmVzID1cbiAgICAgIHNlbGYuY29udGFpbmVyU3RhdGUuZnVydGhlckJsYW5rTGluZXMgfHxcbiAgICAgIHNlbGYuY29udGFpbmVyU3RhdGUuaW5pdGlhbEJsYW5rTGluZVxuXG4gICAgLy8gV2UgaGF2ZSBhIGJsYW5rIGxpbmUuXG4gICAgLy8gU3RpbGwsIHRyeSB0byBjb25zdW1lIGF0IG1vc3QgdGhlIGl0ZW1zIHNpemUuXG4gICAgcmV0dXJuIGZhY3RvcnlTcGFjZShcbiAgICAgIGVmZmVjdHMsXG4gICAgICBvayxcbiAgICAgICdsaXN0SXRlbUluZGVudCcsXG4gICAgICBzZWxmLmNvbnRhaW5lclN0YXRlLnNpemUgKyAxXG4gICAgKShjb2RlKVxuICB9XG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gbm90QmxhbmsoY29kZSkge1xuICAgIGlmIChzZWxmLmNvbnRhaW5lclN0YXRlLmZ1cnRoZXJCbGFua0xpbmVzIHx8ICFtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBzZWxmLmNvbnRhaW5lclN0YXRlLmZ1cnRoZXJCbGFua0xpbmVzID0gdW5kZWZpbmVkXG4gICAgICBzZWxmLmNvbnRhaW5lclN0YXRlLmluaXRpYWxCbGFua0xpbmUgPSB1bmRlZmluZWRcbiAgICAgIHJldHVybiBub3RJbkN1cnJlbnRJdGVtKGNvZGUpXG4gICAgfVxuICAgIHNlbGYuY29udGFpbmVyU3RhdGUuZnVydGhlckJsYW5rTGluZXMgPSB1bmRlZmluZWRcbiAgICBzZWxmLmNvbnRhaW5lclN0YXRlLmluaXRpYWxCbGFua0xpbmUgPSB1bmRlZmluZWRcbiAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KGluZGVudENvbnN0cnVjdCwgb2ssIG5vdEluQ3VycmVudEl0ZW0pKGNvZGUpXG4gIH1cblxuICAvKiogQHR5cGUge1N0YXRlfSAqL1xuICBmdW5jdGlvbiBub3RJbkN1cnJlbnRJdGVtKGNvZGUpIHtcbiAgICAvLyBXaGlsZSB3ZSBkbyBjb250aW51ZSwgd2Ugc2lnbmFsIHRoYXQgdGhlIGZsb3cgc2hvdWxkIGJlIGNsb3NlZC5cbiAgICBzZWxmLmNvbnRhaW5lclN0YXRlLl9jbG9zZUZsb3cgPSB0cnVlXG4gICAgLy8gQXMgd2XigJlyZSBjbG9zaW5nIGZsb3csIHdl4oCZcmUgbm8gbG9uZ2VyIGludGVycnVwdGluZy5cbiAgICBzZWxmLmludGVycnVwdCA9IHVuZGVmaW5lZFxuICAgIC8vIEFsd2F5cyBwb3B1bGF0ZWQgYnkgZGVmYXVsdHMuXG5cbiAgICByZXR1cm4gZmFjdG9yeVNwYWNlKFxuICAgICAgZWZmZWN0cyxcbiAgICAgIGVmZmVjdHMuYXR0ZW1wdChsaXN0LCBvaywgbm9rKSxcbiAgICAgICdsaW5lUHJlZml4JyxcbiAgICAgIHNlbGYucGFyc2VyLmNvbnN0cnVjdHMuZGlzYWJsZS5udWxsLmluY2x1ZGVzKCdjb2RlSW5kZW50ZWQnKVxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IDRcbiAgICApKGNvZGUpXG4gIH1cbn1cblxuLyoqXG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAqL1xuZnVuY3Rpb24gdG9rZW5pemVJbmRlbnQoZWZmZWN0cywgb2ssIG5vaykge1xuICBjb25zdCBzZWxmID0gdGhpc1xuICByZXR1cm4gZmFjdG9yeVNwYWNlKFxuICAgIGVmZmVjdHMsXG4gICAgYWZ0ZXJQcmVmaXgsXG4gICAgJ2xpc3RJdGVtSW5kZW50JyxcbiAgICBzZWxmLmNvbnRhaW5lclN0YXRlLnNpemUgKyAxXG4gIClcblxuICAvKiogQHR5cGUge1N0YXRlfSAqL1xuICBmdW5jdGlvbiBhZnRlclByZWZpeChjb2RlKSB7XG4gICAgY29uc3QgdGFpbCA9IHNlbGYuZXZlbnRzW3NlbGYuZXZlbnRzLmxlbmd0aCAtIDFdXG4gICAgcmV0dXJuIHRhaWwgJiZcbiAgICAgIHRhaWxbMV0udHlwZSA9PT0gJ2xpc3RJdGVtSW5kZW50JyAmJlxuICAgICAgdGFpbFsyXS5zbGljZVNlcmlhbGl6ZSh0YWlsWzFdLCB0cnVlKS5sZW5ndGggPT09IHNlbGYuY29udGFpbmVyU3RhdGUuc2l6ZVxuICAgICAgPyBvayhjb2RlKVxuICAgICAgOiBub2soY29kZSlcbiAgfVxufVxuXG4vKipcbiAqIEB0eXBlIHtFeGl0ZXJ9XG4gKiBAdGhpcyB7VG9rZW5pemVDb250ZXh0fVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZUxpc3RFbmQoZWZmZWN0cykge1xuICBlZmZlY3RzLmV4aXQodGhpcy5jb250YWluZXJTdGF0ZS50eXBlKVxufVxuXG4vKipcbiAqIEB0eXBlIHtUb2tlbml6ZXJ9XG4gKiBAdGhpcyB7VG9rZW5pemVDb250ZXh0fVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZUxpc3RJdGVtUHJlZml4V2hpdGVzcGFjZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzXG5cbiAgLy8gQWx3YXlzIHBvcHVsYXRlZCBieSBkZWZhdWx0cy5cblxuICByZXR1cm4gZmFjdG9yeVNwYWNlKFxuICAgIGVmZmVjdHMsXG4gICAgYWZ0ZXJQcmVmaXgsXG4gICAgJ2xpc3RJdGVtUHJlZml4V2hpdGVzcGFjZScsXG4gICAgc2VsZi5wYXJzZXIuY29uc3RydWN0cy5kaXNhYmxlLm51bGwuaW5jbHVkZXMoJ2NvZGVJbmRlbnRlZCcpXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiA0ICsgMVxuICApXG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gYWZ0ZXJQcmVmaXgoY29kZSkge1xuICAgIGNvbnN0IHRhaWwgPSBzZWxmLmV2ZW50c1tzZWxmLmV2ZW50cy5sZW5ndGggLSAxXVxuICAgIHJldHVybiAhbWFya2Rvd25TcGFjZShjb2RlKSAmJlxuICAgICAgdGFpbCAmJlxuICAgICAgdGFpbFsxXS50eXBlID09PSAnbGlzdEl0ZW1QcmVmaXhXaGl0ZXNwYWNlJ1xuICAgICAgPyBvayhjb2RlKVxuICAgICAgOiBub2soY29kZSlcbiAgfVxufVxuIiwiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvZGV9IENvZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ29uc3RydWN0fSBDb25zdHJ1Y3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuUmVzb2x2ZXJ9IFJlc29sdmVyXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlN0YXRlfSBTdGF0ZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZUNvbnRleHR9IFRva2VuaXplQ29udGV4dFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZXJ9IFRva2VuaXplclxuICovXG5cbmltcG9ydCB7ZmFjdG9yeVNwYWNlfSBmcm9tICdtaWNyb21hcmstZmFjdG9yeS1zcGFjZSdcbmltcG9ydCB7bWFya2Rvd25MaW5lRW5kaW5nLCBtYXJrZG93blNwYWNlfSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG4vKiogQHR5cGUge0NvbnN0cnVjdH0gKi9cbmV4cG9ydCBjb25zdCBzZXRleHRVbmRlcmxpbmUgPSB7XG4gIG5hbWU6ICdzZXRleHRVbmRlcmxpbmUnLFxuICB0b2tlbml6ZTogdG9rZW5pemVTZXRleHRVbmRlcmxpbmUsXG4gIHJlc29sdmVUbzogcmVzb2x2ZVRvU2V0ZXh0VW5kZXJsaW5lXG59XG5cbi8qKiBAdHlwZSB7UmVzb2x2ZXJ9ICovXG5mdW5jdGlvbiByZXNvbHZlVG9TZXRleHRVbmRlcmxpbmUoZXZlbnRzLCBjb250ZXh0KSB7XG4gIC8vIFRvIGRvOiByZXNvbHZlIGxpa2UgYG1hcmtkb3duLXJzYC5cbiAgbGV0IGluZGV4ID0gZXZlbnRzLmxlbmd0aFxuICAvKiogQHR5cGUge251bWJlciB8IHVuZGVmaW5lZH0gKi9cbiAgbGV0IGNvbnRlbnRcbiAgLyoqIEB0eXBlIHtudW1iZXIgfCB1bmRlZmluZWR9ICovXG4gIGxldCB0ZXh0XG4gIC8qKiBAdHlwZSB7bnVtYmVyIHwgdW5kZWZpbmVkfSAqL1xuICBsZXQgZGVmaW5pdGlvblxuXG4gIC8vIEZpbmQgdGhlIG9wZW5pbmcgb2YgdGhlIGNvbnRlbnQuXG4gIC8vIEl04oCZbGwgYWx3YXlzIGV4aXN0OiB3ZSBkb27igJl0IHRva2VuaXplIGlmIGl0IGlzbuKAmXQgdGhlcmUuXG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgaWYgKGV2ZW50c1tpbmRleF1bMF0gPT09ICdlbnRlcicpIHtcbiAgICAgIGlmIChldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdjb250ZW50Jykge1xuICAgICAgICBjb250ZW50ID0gaW5kZXhcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdwYXJhZ3JhcGgnKSB7XG4gICAgICAgIHRleHQgPSBpbmRleFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBFeGl0XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnY29udGVudCcpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjb250ZW50IGVuZCAoaWYgbmVlZGVkIHdl4oCZbGwgYWRkIGl0IGxhdGVyKVxuICAgICAgICBldmVudHMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgfVxuICAgICAgaWYgKCFkZWZpbml0aW9uICYmIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2RlZmluaXRpb24nKSB7XG4gICAgICAgIGRlZmluaXRpb24gPSBpbmRleFxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBoZWFkaW5nID0ge1xuICAgIHR5cGU6ICdzZXRleHRIZWFkaW5nJyxcbiAgICBzdGFydDogT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRzW3RleHRdWzFdLnN0YXJ0KSxcbiAgICBlbmQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50c1tldmVudHMubGVuZ3RoIC0gMV1bMV0uZW5kKVxuICB9XG5cbiAgLy8gQ2hhbmdlIHRoZSBwYXJhZ3JhcGggdG8gc2V0ZXh0IGhlYWRpbmcgdGV4dC5cbiAgZXZlbnRzW3RleHRdWzFdLnR5cGUgPSAnc2V0ZXh0SGVhZGluZ1RleHQnXG5cbiAgLy8gSWYgd2UgaGF2ZSBkZWZpbml0aW9ucyBpbiB0aGUgY29udGVudCwgd2XigJlsbCBrZWVwIG9uIGhhdmluZyBjb250ZW50LFxuICAvLyBidXQgd2UgbmVlZCBtb3ZlIGl0LlxuICBpZiAoZGVmaW5pdGlvbikge1xuICAgIGV2ZW50cy5zcGxpY2UodGV4dCwgMCwgWydlbnRlcicsIGhlYWRpbmcsIGNvbnRleHRdKVxuICAgIGV2ZW50cy5zcGxpY2UoZGVmaW5pdGlvbiArIDEsIDAsIFsnZXhpdCcsIGV2ZW50c1tjb250ZW50XVsxXSwgY29udGV4dF0pXG4gICAgZXZlbnRzW2NvbnRlbnRdWzFdLmVuZCA9IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50c1tkZWZpbml0aW9uXVsxXS5lbmQpXG4gIH0gZWxzZSB7XG4gICAgZXZlbnRzW2NvbnRlbnRdWzFdID0gaGVhZGluZ1xuICB9XG5cbiAgLy8gQWRkIHRoZSBoZWFkaW5nIGV4aXQgYXQgdGhlIGVuZC5cbiAgZXZlbnRzLnB1c2goWydleGl0JywgaGVhZGluZywgY29udGV4dF0pXG4gIHJldHVybiBldmVudHNcbn1cblxuLyoqXG4gKiBAdGhpcyB7VG9rZW5pemVDb250ZXh0fVxuICogQHR5cGUge1Rva2VuaXplcn1cbiAqL1xuZnVuY3Rpb24gdG9rZW5pemVTZXRleHRVbmRlcmxpbmUoZWZmZWN0cywgb2ssIG5vaykge1xuICBjb25zdCBzZWxmID0gdGhpc1xuICAvKiogQHR5cGUge05vbk51bGxhYmxlPENvZGU+fSAqL1xuICBsZXQgbWFya2VyXG4gIHJldHVybiBzdGFydFxuXG4gIC8qKlxuICAgKiBBdCBzdGFydCBvZiBoZWFkaW5nIChzZXRleHQpIHVuZGVybGluZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogICB8IGFhXG4gICAqID4gfCA9PVxuICAgKiAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGxldCBpbmRleCA9IHNlbGYuZXZlbnRzLmxlbmd0aFxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbiB8IHVuZGVmaW5lZH0gKi9cbiAgICBsZXQgcGFyYWdyYXBoXG4gICAgLy8gRmluZCBhbiBvcGVuaW5nLlxuICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICAvLyBTa2lwIGVudGVyL2V4aXQgb2YgbGluZSBlbmRpbmcsIGxpbmUgcHJlZml4LCBhbmQgY29udGVudC5cbiAgICAgIC8vIFdlIGNhbiBub3cgZWl0aGVyIGhhdmUgYSBkZWZpbml0aW9uIG9yIGEgcGFyYWdyYXBoLlxuICAgICAgaWYgKFxuICAgICAgICBzZWxmLmV2ZW50c1tpbmRleF1bMV0udHlwZSAhPT0gJ2xpbmVFbmRpbmcnICYmXG4gICAgICAgIHNlbGYuZXZlbnRzW2luZGV4XVsxXS50eXBlICE9PSAnbGluZVByZWZpeCcgJiZcbiAgICAgICAgc2VsZi5ldmVudHNbaW5kZXhdWzFdLnR5cGUgIT09ICdjb250ZW50J1xuICAgICAgKSB7XG4gICAgICAgIHBhcmFncmFwaCA9IHNlbGYuZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAncGFyYWdyYXBoJ1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRvIGRvOiBoYW5kbGUgbGF6eS9waWVyY2UgbGlrZSBgbWFya2Rvd24tcnNgLlxuICAgIC8vIFRvIGRvOiBwYXJzZSBpbmRlbnQgbGlrZSBgbWFya2Rvd24tcnNgLlxuICAgIGlmICghc2VsZi5wYXJzZXIubGF6eVtzZWxmLm5vdygpLmxpbmVdICYmIChzZWxmLmludGVycnVwdCB8fCBwYXJhZ3JhcGgpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdzZXRleHRIZWFkaW5nTGluZScpXG4gICAgICBtYXJrZXIgPSBjb2RlXG4gICAgICByZXR1cm4gYmVmb3JlKGNvZGUpXG4gICAgfVxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBvcHRpb25hbCB3aGl0ZXNwYWNlLCBhdCBgLWAgb3IgYD1gLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiAgIHwgYWFcbiAgICogPiB8ID09XG4gICAqICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBiZWZvcmUoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ3NldGV4dEhlYWRpbmdMaW5lU2VxdWVuY2UnKVxuICAgIHJldHVybiBpbnNpZGUoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBzZXF1ZW5jZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogICB8IGFhXG4gICAqID4gfCA9PVxuICAgKiAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gaW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbnNpZGVcbiAgICB9XG4gICAgZWZmZWN0cy5leGl0KCdzZXRleHRIZWFkaW5nTGluZVNlcXVlbmNlJylcbiAgICByZXR1cm4gbWFya2Rvd25TcGFjZShjb2RlKVxuICAgICAgPyBmYWN0b3J5U3BhY2UoZWZmZWN0cywgYWZ0ZXIsICdsaW5lU3VmZml4JykoY29kZSlcbiAgICAgIDogYWZ0ZXIoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBzZXF1ZW5jZSwgYWZ0ZXIgb3B0aW9uYWwgd2hpdGVzcGFjZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogICB8IGFhXG4gICAqID4gfCA9PVxuICAgKiAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBhZnRlcihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ3NldGV4dEhlYWRpbmdMaW5lJylcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cbn1cbiIsIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Jbml0aWFsQ29uc3RydWN0fSBJbml0aWFsQ29uc3RydWN0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkluaXRpYWxpemVyfSBJbml0aWFsaXplclxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVDb250ZXh0fSBUb2tlbml6ZUNvbnRleHRcbiAqL1xuXG5pbXBvcnQge2JsYW5rTGluZSwgY29udGVudH0gZnJvbSAnbWljcm9tYXJrLWNvcmUtY29tbW9ubWFyaydcbmltcG9ydCB7ZmFjdG9yeVNwYWNlfSBmcm9tICdtaWNyb21hcmstZmFjdG9yeS1zcGFjZSdcbmltcG9ydCB7bWFya2Rvd25MaW5lRW5kaW5nfSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG4vKiogQHR5cGUge0luaXRpYWxDb25zdHJ1Y3R9ICovXG5leHBvcnQgY29uc3QgZmxvdyA9IHtcbiAgdG9rZW5pemU6IGluaXRpYWxpemVGbG93XG59XG5cbi8qKlxuICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAqIEB0eXBlIHtJbml0aWFsaXplcn1cbiAqL1xuZnVuY3Rpb24gaW5pdGlhbGl6ZUZsb3coZWZmZWN0cykge1xuICBjb25zdCBzZWxmID0gdGhpc1xuICBjb25zdCBpbml0aWFsID0gZWZmZWN0cy5hdHRlbXB0KFxuICAgIC8vIFRyeSB0byBwYXJzZSBhIGJsYW5rIGxpbmUuXG4gICAgYmxhbmtMaW5lLFxuICAgIGF0QmxhbmtFbmRpbmcsXG4gICAgLy8gVHJ5IHRvIHBhcnNlIGluaXRpYWwgZmxvdyAoZXNzZW50aWFsbHksIG9ubHkgY29kZSkuXG4gICAgZWZmZWN0cy5hdHRlbXB0KFxuICAgICAgdGhpcy5wYXJzZXIuY29uc3RydWN0cy5mbG93SW5pdGlhbCxcbiAgICAgIGFmdGVyQ29uc3RydWN0LFxuICAgICAgZmFjdG9yeVNwYWNlKFxuICAgICAgICBlZmZlY3RzLFxuICAgICAgICBlZmZlY3RzLmF0dGVtcHQoXG4gICAgICAgICAgdGhpcy5wYXJzZXIuY29uc3RydWN0cy5mbG93LFxuICAgICAgICAgIGFmdGVyQ29uc3RydWN0LFxuICAgICAgICAgIGVmZmVjdHMuYXR0ZW1wdChjb250ZW50LCBhZnRlckNvbnN0cnVjdClcbiAgICAgICAgKSxcbiAgICAgICAgJ2xpbmVQcmVmaXgnXG4gICAgICApXG4gICAgKVxuICApXG4gIHJldHVybiBpbml0aWFsXG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gYXRCbGFua0VuZGluZyhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmdCbGFuaycpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nQmxhbmsnKVxuICAgIHNlbGYuY3VycmVudENvbnN0cnVjdCA9IHVuZGVmaW5lZFxuICAgIHJldHVybiBpbml0aWFsXG4gIH1cblxuICAvKiogQHR5cGUge1N0YXRlfSAqL1xuICBmdW5jdGlvbiBhZnRlckNvbnN0cnVjdChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgc2VsZi5jdXJyZW50Q29uc3RydWN0ID0gdW5kZWZpbmVkXG4gICAgcmV0dXJuIGluaXRpYWxcbiAgfVxufVxuIiwiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvZGV9IENvZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuSW5pdGlhbENvbnN0cnVjdH0gSW5pdGlhbENvbnN0cnVjdFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Jbml0aWFsaXplcn0gSW5pdGlhbGl6ZXJcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuUmVzb2x2ZXJ9IFJlc29sdmVyXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlN0YXRlfSBTdGF0ZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZUNvbnRleHR9IFRva2VuaXplQ29udGV4dFxuICovXG5cbmV4cG9ydCBjb25zdCByZXNvbHZlciA9IHtcbiAgcmVzb2x2ZUFsbDogY3JlYXRlUmVzb2x2ZXIoKVxufVxuZXhwb3J0IGNvbnN0IHN0cmluZyA9IGluaXRpYWxpemVGYWN0b3J5KCdzdHJpbmcnKVxuZXhwb3J0IGNvbnN0IHRleHQgPSBpbml0aWFsaXplRmFjdG9yeSgndGV4dCcpXG5cbi8qKlxuICogQHBhcmFtIHsnc3RyaW5nJyB8ICd0ZXh0J30gZmllbGRcbiAqIEByZXR1cm5zIHtJbml0aWFsQ29uc3RydWN0fVxuICovXG5mdW5jdGlvbiBpbml0aWFsaXplRmFjdG9yeShmaWVsZCkge1xuICByZXR1cm4ge1xuICAgIHRva2VuaXplOiBpbml0aWFsaXplVGV4dCxcbiAgICByZXNvbHZlQWxsOiBjcmVhdGVSZXNvbHZlcihcbiAgICAgIGZpZWxkID09PSAndGV4dCcgPyByZXNvbHZlQWxsTGluZVN1ZmZpeGVzIDogdW5kZWZpbmVkXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gICAqIEB0eXBlIHtJbml0aWFsaXplcn1cbiAgICovXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVUZXh0KGVmZmVjdHMpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IGNvbnN0cnVjdHMgPSB0aGlzLnBhcnNlci5jb25zdHJ1Y3RzW2ZpZWxkXVxuICAgIGNvbnN0IHRleHQgPSBlZmZlY3RzLmF0dGVtcHQoY29uc3RydWN0cywgc3RhcnQsIG5vdFRleHQpXG4gICAgcmV0dXJuIHN0YXJ0XG5cbiAgICAvKiogQHR5cGUge1N0YXRlfSAqL1xuICAgIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICAgIHJldHVybiBhdEJyZWFrKGNvZGUpID8gdGV4dChjb2RlKSA6IG5vdFRleHQoY29kZSlcbiAgICB9XG5cbiAgICAvKiogQHR5cGUge1N0YXRlfSAqL1xuICAgIGZ1bmN0aW9uIG5vdFRleHQoY29kZSkge1xuICAgICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZWZmZWN0cy5lbnRlcignZGF0YScpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgICBmdW5jdGlvbiBkYXRhKGNvZGUpIHtcbiAgICAgIGlmIChhdEJyZWFrKGNvZGUpKSB7XG4gICAgICAgIGVmZmVjdHMuZXhpdCgnZGF0YScpXG4gICAgICAgIHJldHVybiB0ZXh0KGNvZGUpXG4gICAgICB9XG5cbiAgICAgIC8vIERhdGEuXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtDb2RlfSBjb2RlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gYXRCcmVhayhjb2RlKSB7XG4gICAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgY29uc3QgbGlzdCA9IGNvbnN0cnVjdHNbY29kZV1cbiAgICAgIGxldCBpbmRleCA9IC0xXG4gICAgICBpZiAobGlzdCkge1xuICAgICAgICAvLyBBbHdheXMgcG9wdWxhdGVkIGJ5IGRlZmF1bHRzLlxuXG4gICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gbGlzdFtpbmRleF1cbiAgICAgICAgICBpZiAoIWl0ZW0ucHJldmlvdXMgfHwgaXRlbS5wcmV2aW91cy5jYWxsKHNlbGYsIHNlbGYucHJldmlvdXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZXNvbHZlciB8IHVuZGVmaW5lZH0gW2V4dHJhUmVzb2x2ZXJdXG4gKiBAcmV0dXJucyB7UmVzb2x2ZXJ9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJlc29sdmVyKGV4dHJhUmVzb2x2ZXIpIHtcbiAgcmV0dXJuIHJlc29sdmVBbGxUZXh0XG5cbiAgLyoqIEB0eXBlIHtSZXNvbHZlcn0gKi9cbiAgZnVuY3Rpb24gcmVzb2x2ZUFsbFRleHQoZXZlbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4ID0gLTFcbiAgICAvKiogQHR5cGUge251bWJlciB8IHVuZGVmaW5lZH0gKi9cbiAgICBsZXQgZW50ZXJcblxuICAgIC8vIEEgcmF0aGVyIGJvcmluZyBjb21wdXRhdGlvbiAodG8gbWVyZ2UgYWRqYWNlbnQgYGRhdGFgIGV2ZW50cykgd2hpY2hcbiAgICAvLyBpbXByb3ZlcyBtbSBwZXJmb3JtYW5jZSBieSAyOSUuXG4gICAgd2hpbGUgKCsraW5kZXggPD0gZXZlbnRzLmxlbmd0aCkge1xuICAgICAgaWYgKGVudGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGV2ZW50c1tpbmRleF0gJiYgZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnZGF0YScpIHtcbiAgICAgICAgICBlbnRlciA9IGluZGV4XG4gICAgICAgICAgaW5kZXgrK1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFldmVudHNbaW5kZXhdIHx8IGV2ZW50c1tpbmRleF1bMV0udHlwZSAhPT0gJ2RhdGEnKSB7XG4gICAgICAgIC8vIERvbuKAmXQgZG8gYW55dGhpbmcgaWYgdGhlcmUgaXMgb25lIGRhdGEgdG9rZW4uXG4gICAgICAgIGlmIChpbmRleCAhPT0gZW50ZXIgKyAyKSB7XG4gICAgICAgICAgZXZlbnRzW2VudGVyXVsxXS5lbmQgPSBldmVudHNbaW5kZXggLSAxXVsxXS5lbmRcbiAgICAgICAgICBldmVudHMuc3BsaWNlKGVudGVyICsgMiwgaW5kZXggLSBlbnRlciAtIDIpXG4gICAgICAgICAgaW5kZXggPSBlbnRlciArIDJcbiAgICAgICAgfVxuICAgICAgICBlbnRlciA9IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXh0cmFSZXNvbHZlciA/IGV4dHJhUmVzb2x2ZXIoZXZlbnRzLCBjb250ZXh0KSA6IGV2ZW50c1xuICB9XG59XG5cbi8qKlxuICogQSByYXRoZXIgdWdseSBzZXQgb2YgaW5zdHJ1Y3Rpb25zIHdoaWNoIGFnYWluIGxvb2tzIGF0IGNodW5rcyBpbiB0aGUgaW5wdXRcbiAqIHN0cmVhbS5cbiAqIFRoZSByZWFzb24gdG8gZG8gdGhpcyBoZXJlIGlzIHRoYXQgaXQgaXMgKm11Y2gqIGZhc3RlciB0byBwYXJzZSBpbiByZXZlcnNlLlxuICogQW5kIHRoYXQgd2UgY2Fu4oCZdCBob29rIGludG8gYG51bGxgIHRvIHNwbGl0IHRoZSBsaW5lIHN1ZmZpeCBiZWZvcmUgYW4gRU9GLlxuICogVG8gZG86IGZpZ3VyZSBvdXQgaWYgd2UgY2FuIG1ha2UgdGhpcyBpbnRvIGEgY2xlYW4gdXRpbGl0eSwgb3IgZXZlbiBpbiBjb3JlLlxuICogQXMgaXQgd2lsbCBiZSB1c2VmdWwgZm9yIEdGTXMgbGl0ZXJhbCBhdXRvbGluayBleHRlbnNpb24gKGFuZCBtYXliZSBldmVuXG4gKiB0YWJsZXM/KVxuICpcbiAqIEB0eXBlIHtSZXNvbHZlcn1cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUFsbExpbmVTdWZmaXhlcyhldmVudHMsIGNvbnRleHQpIHtcbiAgbGV0IGV2ZW50SW5kZXggPSAwIC8vIFNraXAgZmlyc3QuXG5cbiAgd2hpbGUgKCsrZXZlbnRJbmRleCA8PSBldmVudHMubGVuZ3RoKSB7XG4gICAgaWYgKFxuICAgICAgKGV2ZW50SW5kZXggPT09IGV2ZW50cy5sZW5ndGggfHxcbiAgICAgICAgZXZlbnRzW2V2ZW50SW5kZXhdWzFdLnR5cGUgPT09ICdsaW5lRW5kaW5nJykgJiZcbiAgICAgIGV2ZW50c1tldmVudEluZGV4IC0gMV1bMV0udHlwZSA9PT0gJ2RhdGEnXG4gICAgKSB7XG4gICAgICBjb25zdCBkYXRhID0gZXZlbnRzW2V2ZW50SW5kZXggLSAxXVsxXVxuICAgICAgY29uc3QgY2h1bmtzID0gY29udGV4dC5zbGljZVN0cmVhbShkYXRhKVxuICAgICAgbGV0IGluZGV4ID0gY2h1bmtzLmxlbmd0aFxuICAgICAgbGV0IGJ1ZmZlckluZGV4ID0gLTFcbiAgICAgIGxldCBzaXplID0gMFxuICAgICAgLyoqIEB0eXBlIHtib29sZWFuIHwgdW5kZWZpbmVkfSAqL1xuICAgICAgbGV0IHRhYnNcbiAgICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICAgIGNvbnN0IGNodW5rID0gY2h1bmtzW2luZGV4XVxuICAgICAgICBpZiAodHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGJ1ZmZlckluZGV4ID0gY2h1bmsubGVuZ3RoXG4gICAgICAgICAgd2hpbGUgKGNodW5rLmNoYXJDb2RlQXQoYnVmZmVySW5kZXggLSAxKSA9PT0gMzIpIHtcbiAgICAgICAgICAgIHNpemUrK1xuICAgICAgICAgICAgYnVmZmVySW5kZXgtLVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYnVmZmVySW5kZXgpIGJyZWFrXG4gICAgICAgICAgYnVmZmVySW5kZXggPSAtMVxuICAgICAgICB9XG4gICAgICAgIC8vIE51bWJlclxuICAgICAgICBlbHNlIGlmIChjaHVuayA9PT0gLTIpIHtcbiAgICAgICAgICB0YWJzID0gdHJ1ZVxuICAgICAgICAgIHNpemUrK1xuICAgICAgICB9IGVsc2UgaWYgKGNodW5rID09PSAtMSkge1xuICAgICAgICAgIC8vIEVtcHR5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUmVwbGFjZW1lbnQgY2hhcmFjdGVyLCBleGl0LlxuICAgICAgICAgIGluZGV4KytcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2l6ZSkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHtcbiAgICAgICAgICB0eXBlOlxuICAgICAgICAgICAgZXZlbnRJbmRleCA9PT0gZXZlbnRzLmxlbmd0aCB8fCB0YWJzIHx8IHNpemUgPCAyXG4gICAgICAgICAgICAgID8gJ2xpbmVTdWZmaXgnXG4gICAgICAgICAgICAgIDogJ2hhcmRCcmVha1RyYWlsaW5nJyxcbiAgICAgICAgICBzdGFydDoge1xuICAgICAgICAgICAgbGluZTogZGF0YS5lbmQubGluZSxcbiAgICAgICAgICAgIGNvbHVtbjogZGF0YS5lbmQuY29sdW1uIC0gc2l6ZSxcbiAgICAgICAgICAgIG9mZnNldDogZGF0YS5lbmQub2Zmc2V0IC0gc2l6ZSxcbiAgICAgICAgICAgIF9pbmRleDogZGF0YS5zdGFydC5faW5kZXggKyBpbmRleCxcbiAgICAgICAgICAgIF9idWZmZXJJbmRleDogaW5kZXhcbiAgICAgICAgICAgICAgPyBidWZmZXJJbmRleFxuICAgICAgICAgICAgICA6IGRhdGEuc3RhcnQuX2J1ZmZlckluZGV4ICsgYnVmZmVySW5kZXhcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVuZDogT2JqZWN0LmFzc2lnbih7fSwgZGF0YS5lbmQpXG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5lbmQgPSBPYmplY3QuYXNzaWduKHt9LCB0b2tlbi5zdGFydClcbiAgICAgICAgaWYgKGRhdGEuc3RhcnQub2Zmc2V0ID09PSBkYXRhLmVuZC5vZmZzZXQpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHRva2VuKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV2ZW50cy5zcGxpY2UoXG4gICAgICAgICAgICBldmVudEluZGV4LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIFsnZW50ZXInLCB0b2tlbiwgY29udGV4dF0sXG4gICAgICAgICAgICBbJ2V4aXQnLCB0b2tlbiwgY29udGV4dF1cbiAgICAgICAgICApXG4gICAgICAgICAgZXZlbnRJbmRleCArPSAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGV2ZW50SW5kZXgrK1xuICAgIH1cbiAgfVxuICByZXR1cm4gZXZlbnRzXG59XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ2h1bmt9IENodW5rXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvZGV9IENvZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ29uc3RydWN0fSBDb25zdHJ1Y3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ29uc3RydWN0UmVjb3JkfSBDb25zdHJ1Y3RSZWNvcmRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRWZmZWN0c30gRWZmZWN0c1xuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Jbml0aWFsQ29uc3RydWN0fSBJbml0aWFsQ29uc3RydWN0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlBhcnNlQ29udGV4dH0gUGFyc2VDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlBvaW50fSBQb2ludFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW59IFRva2VuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuVHlwZX0gVG9rZW5UeXBlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplQ29udGV4dH0gVG9rZW5pemVDb250ZXh0XG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgUmVzdG9yZVxuICogQHJldHVybnMge3ZvaWR9XG4gKlxuICogQHR5cGVkZWYgSW5mb1xuICogQHByb3BlcnR5IHtSZXN0b3JlfSByZXN0b3JlXG4gKiBAcHJvcGVydHkge251bWJlcn0gZnJvbVxuICpcbiAqIEBjYWxsYmFjayBSZXR1cm5IYW5kbGVcbiAqICAgSGFuZGxlIGEgc3VjY2Vzc2Z1bCBydW4uXG4gKiBAcGFyYW0ge0NvbnN0cnVjdH0gY29uc3RydWN0XG4gKiBAcGFyYW0ge0luZm99IGluZm9cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5cbmltcG9ydCB7bWFya2Rvd25MaW5lRW5kaW5nfSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG5pbXBvcnQge3B1c2gsIHNwbGljZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2h1bmtlZCdcbmltcG9ydCB7cmVzb2x2ZUFsbH0gZnJvbSAnbWljcm9tYXJrLXV0aWwtcmVzb2x2ZS1hbGwnXG4vKipcbiAqIENyZWF0ZSBhIHRva2VuaXplci5cbiAqIFRva2VuaXplcnMgZGVhbCB3aXRoIG9uZSB0eXBlIG9mIGRhdGEgKGUuZy4sIGNvbnRhaW5lcnMsIGZsb3csIHRleHQpLlxuICogVGhlIHBhcnNlciBpcyB0aGUgb2JqZWN0IGRlYWxpbmcgd2l0aCBpdCBhbGwuXG4gKiBgaW5pdGlhbGl6ZWAgd29ya3MgbGlrZSBvdGhlciBjb25zdHJ1Y3RzLCBleGNlcHQgdGhhdCBvbmx5IGl0cyBgdG9rZW5pemVgXG4gKiBmdW5jdGlvbiBpcyB1c2VkLCBpbiB3aGljaCBjYXNlIGl0IGRvZXNu4oCZdCByZWNlaXZlIGFuIGBva2Agb3IgYG5va2AuXG4gKiBgZnJvbWAgY2FuIGJlIGdpdmVuIHRvIHNldCB0aGUgcG9pbnQgYmVmb3JlIHRoZSBmaXJzdCBjaGFyYWN0ZXIsIGFsdGhvdWdoXG4gKiB3aGVuIGZ1cnRoZXIgbGluZXMgYXJlIGluZGVudGVkLCB0aGV5IG11c3QgYmUgc2V0IHdpdGggYGRlZmluZVNraXBgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VDb250ZXh0fSBwYXJzZXJcbiAqIEBwYXJhbSB7SW5pdGlhbENvbnN0cnVjdH0gaW5pdGlhbGl6ZVxuICogQHBhcmFtIHtPbWl0PFBvaW50LCAnX2J1ZmZlckluZGV4JyB8ICdfaW5kZXgnPiB8IHVuZGVmaW5lZH0gW2Zyb21dXG4gKiBAcmV0dXJucyB7VG9rZW5pemVDb250ZXh0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9rZW5pemVyKHBhcnNlciwgaW5pdGlhbGl6ZSwgZnJvbSkge1xuICAvKiogQHR5cGUge1BvaW50fSAqL1xuICBsZXQgcG9pbnQgPSBPYmplY3QuYXNzaWduKFxuICAgIGZyb21cbiAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgZnJvbSlcbiAgICAgIDoge1xuICAgICAgICAgIGxpbmU6IDEsXG4gICAgICAgICAgY29sdW1uOiAxLFxuICAgICAgICAgIG9mZnNldDogMFxuICAgICAgICB9LFxuICAgIHtcbiAgICAgIF9pbmRleDogMCxcbiAgICAgIF9idWZmZXJJbmRleDogLTFcbiAgICB9XG4gIClcbiAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBudW1iZXI+fSAqL1xuICBjb25zdCBjb2x1bW5TdGFydCA9IHt9XG4gIC8qKiBAdHlwZSB7QXJyYXk8Q29uc3RydWN0Pn0gKi9cbiAgY29uc3QgcmVzb2x2ZUFsbENvbnN0cnVjdHMgPSBbXVxuICAvKiogQHR5cGUge0FycmF5PENodW5rPn0gKi9cbiAgbGV0IGNodW5rcyA9IFtdXG4gIC8qKiBAdHlwZSB7QXJyYXk8VG9rZW4+fSAqL1xuICBsZXQgc3RhY2sgPSBbXVxuICAvKiogQHR5cGUge2Jvb2xlYW4gfCB1bmRlZmluZWR9ICovXG4gIGxldCBjb25zdW1lZCA9IHRydWVcblxuICAvKipcbiAgICogVG9vbHMgdXNlZCBmb3IgdG9rZW5pemluZy5cbiAgICpcbiAgICogQHR5cGUge0VmZmVjdHN9XG4gICAqL1xuICBjb25zdCBlZmZlY3RzID0ge1xuICAgIGNvbnN1bWUsXG4gICAgZW50ZXIsXG4gICAgZXhpdCxcbiAgICBhdHRlbXB0OiBjb25zdHJ1Y3RGYWN0b3J5KG9uc3VjY2Vzc2Z1bGNvbnN0cnVjdCksXG4gICAgY2hlY2s6IGNvbnN0cnVjdEZhY3Rvcnkob25zdWNjZXNzZnVsY2hlY2spLFxuICAgIGludGVycnVwdDogY29uc3RydWN0RmFjdG9yeShvbnN1Y2Nlc3NmdWxjaGVjaywge1xuICAgICAgaW50ZXJydXB0OiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGF0ZSBhbmQgdG9vbHMgZm9yIHJlc29sdmluZyBhbmQgc2VyaWFsaXppbmcuXG4gICAqXG4gICAqIEB0eXBlIHtUb2tlbml6ZUNvbnRleHR9XG4gICAqL1xuICBjb25zdCBjb250ZXh0ID0ge1xuICAgIHByZXZpb3VzOiBudWxsLFxuICAgIGNvZGU6IG51bGwsXG4gICAgY29udGFpbmVyU3RhdGU6IHt9LFxuICAgIGV2ZW50czogW10sXG4gICAgcGFyc2VyLFxuICAgIHNsaWNlU3RyZWFtLFxuICAgIHNsaWNlU2VyaWFsaXplLFxuICAgIG5vdyxcbiAgICBkZWZpbmVTa2lwLFxuICAgIHdyaXRlXG4gIH1cblxuICAvKipcbiAgICogVGhlIHN0YXRlIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGUgfCB2b2lkfVxuICAgKi9cbiAgbGV0IHN0YXRlID0gaW5pdGlhbGl6ZS50b2tlbml6ZS5jYWxsKGNvbnRleHQsIGVmZmVjdHMpXG5cbiAgLyoqXG4gICAqIFRyYWNrIHdoaWNoIGNoYXJhY3RlciB3ZSBleHBlY3QgdG8gYmUgY29uc3VtZWQsIHRvIGNhdGNoIGJ1Z3MuXG4gICAqXG4gICAqIEB0eXBlIHtDb2RlfVxuICAgKi9cbiAgbGV0IGV4cGVjdGVkQ29kZVxuICBpZiAoaW5pdGlhbGl6ZS5yZXNvbHZlQWxsKSB7XG4gICAgcmVzb2x2ZUFsbENvbnN0cnVjdHMucHVzaChpbml0aWFsaXplKVxuICB9XG4gIHJldHVybiBjb250ZXh0XG5cbiAgLyoqIEB0eXBlIHtUb2tlbml6ZUNvbnRleHRbJ3dyaXRlJ119ICovXG4gIGZ1bmN0aW9uIHdyaXRlKHNsaWNlKSB7XG4gICAgY2h1bmtzID0gcHVzaChjaHVua3MsIHNsaWNlKVxuICAgIG1haW4oKVxuXG4gICAgLy8gRXhpdCBpZiB3ZeKAmXJlIG5vdCBkb25lLCByZXNvbHZlIG1pZ2h0IGNoYW5nZSBzdHVmZi5cbiAgICBpZiAoY2h1bmtzW2NodW5rcy5sZW5ndGggLSAxXSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgIGFkZFJlc3VsdChpbml0aWFsaXplLCAwKVxuXG4gICAgLy8gT3RoZXJ3aXNlLCByZXNvbHZlLCBhbmQgZXhpdC5cbiAgICBjb250ZXh0LmV2ZW50cyA9IHJlc29sdmVBbGwocmVzb2x2ZUFsbENvbnN0cnVjdHMsIGNvbnRleHQuZXZlbnRzLCBjb250ZXh0KVxuICAgIHJldHVybiBjb250ZXh0LmV2ZW50c1xuICB9XG5cbiAgLy9cbiAgLy8gVG9vbHMuXG4gIC8vXG5cbiAgLyoqIEB0eXBlIHtUb2tlbml6ZUNvbnRleHRbJ3NsaWNlU2VyaWFsaXplJ119ICovXG4gIGZ1bmN0aW9uIHNsaWNlU2VyaWFsaXplKHRva2VuLCBleHBhbmRUYWJzKSB7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZUNodW5rcyhzbGljZVN0cmVhbSh0b2tlbiksIGV4cGFuZFRhYnMpXG4gIH1cblxuICAvKiogQHR5cGUge1Rva2VuaXplQ29udGV4dFsnc2xpY2VTdHJlYW0nXX0gKi9cbiAgZnVuY3Rpb24gc2xpY2VTdHJlYW0odG9rZW4pIHtcbiAgICByZXR1cm4gc2xpY2VDaHVua3MoY2h1bmtzLCB0b2tlbilcbiAgfVxuXG4gIC8qKiBAdHlwZSB7VG9rZW5pemVDb250ZXh0Wydub3cnXX0gKi9cbiAgZnVuY3Rpb24gbm93KCkge1xuICAgIC8vIFRoaXMgaXMgYSBob3QgcGF0aCwgc28gd2UgY2xvbmUgbWFudWFsbHkgaW5zdGVhZCBvZiBgT2JqZWN0LmFzc2lnbih7fSwgcG9pbnQpYFxuICAgIGNvbnN0IHtsaW5lLCBjb2x1bW4sIG9mZnNldCwgX2luZGV4LCBfYnVmZmVySW5kZXh9ID0gcG9pbnRcbiAgICByZXR1cm4ge1xuICAgICAgbGluZSxcbiAgICAgIGNvbHVtbixcbiAgICAgIG9mZnNldCxcbiAgICAgIF9pbmRleCxcbiAgICAgIF9idWZmZXJJbmRleFxuICAgIH1cbiAgfVxuXG4gIC8qKiBAdHlwZSB7VG9rZW5pemVDb250ZXh0WydkZWZpbmVTa2lwJ119ICovXG4gIGZ1bmN0aW9uIGRlZmluZVNraXAodmFsdWUpIHtcbiAgICBjb2x1bW5TdGFydFt2YWx1ZS5saW5lXSA9IHZhbHVlLmNvbHVtblxuICAgIGFjY291bnRGb3JQb3RlbnRpYWxTa2lwKClcbiAgfVxuXG4gIC8vXG4gIC8vIFN0YXRlIG1hbmFnZW1lbnQuXG4gIC8vXG5cbiAgLyoqXG4gICAqIE1haW4gbG9vcCAobm90ZSB0aGF0IGBfaW5kZXhgIGFuZCBgX2J1ZmZlckluZGV4YCBpbiBgcG9pbnRgIGFyZSBtb2RpZmllZCBieVxuICAgKiBgY29uc3VtZWApLlxuICAgKiBIZXJlIGlzIHdoZXJlIHdlIHdhbGsgdGhyb3VnaCB0aGUgY2h1bmtzLCB3aGljaCBlaXRoZXIgaW5jbHVkZSBzdHJpbmdzIG9mXG4gICAqIHNldmVyYWwgY2hhcmFjdGVycywgb3IgbnVtZXJpY2FsIGNoYXJhY3RlciBjb2Rlcy5cbiAgICogVGhlIHJlYXNvbiB0byBkbyB0aGlzIGluIGEgbG9vcCBpbnN0ZWFkIG9mIGEgY2FsbCBpcyBzbyB0aGUgc3RhY2sgY2FuXG4gICAqIGRyYWluLlxuICAgKlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIG1haW4oKSB7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgbGV0IGNodW5rSW5kZXhcbiAgICB3aGlsZSAocG9pbnQuX2luZGV4IDwgY2h1bmtzLmxlbmd0aCkge1xuICAgICAgY29uc3QgY2h1bmsgPSBjaHVua3NbcG9pbnQuX2luZGV4XVxuXG4gICAgICAvLyBJZiB3ZeKAmXJlIGluIGEgYnVmZmVyIGNodW5rLCBsb29wIHRocm91Z2ggaXQuXG4gICAgICBpZiAodHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaHVua0luZGV4ID0gcG9pbnQuX2luZGV4XG4gICAgICAgIGlmIChwb2ludC5fYnVmZmVySW5kZXggPCAwKSB7XG4gICAgICAgICAgcG9pbnQuX2J1ZmZlckluZGV4ID0gMFxuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChcbiAgICAgICAgICBwb2ludC5faW5kZXggPT09IGNodW5rSW5kZXggJiZcbiAgICAgICAgICBwb2ludC5fYnVmZmVySW5kZXggPCBjaHVuay5sZW5ndGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgZ28oY2h1bmsuY2hhckNvZGVBdChwb2ludC5fYnVmZmVySW5kZXgpKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnbyhjaHVuaylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVhbCB3aXRoIG9uZSBjb2RlLlxuICAgKlxuICAgKiBAcGFyYW0ge0NvZGV9IGNvZGVcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmdW5jdGlvbiBnbyhjb2RlKSB7XG4gICAgY29uc3VtZWQgPSB1bmRlZmluZWRcbiAgICBleHBlY3RlZENvZGUgPSBjb2RlXG4gICAgc3RhdGUgPSBzdGF0ZShjb2RlKVxuICB9XG5cbiAgLyoqIEB0eXBlIHtFZmZlY3RzWydjb25zdW1lJ119ICovXG4gIGZ1bmN0aW9uIGNvbnN1bWUoY29kZSkge1xuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHBvaW50LmxpbmUrK1xuICAgICAgcG9pbnQuY29sdW1uID0gMVxuICAgICAgcG9pbnQub2Zmc2V0ICs9IGNvZGUgPT09IC0zID8gMiA6IDFcbiAgICAgIGFjY291bnRGb3JQb3RlbnRpYWxTa2lwKClcbiAgICB9IGVsc2UgaWYgKGNvZGUgIT09IC0xKSB7XG4gICAgICBwb2ludC5jb2x1bW4rK1xuICAgICAgcG9pbnQub2Zmc2V0KytcbiAgICB9XG5cbiAgICAvLyBOb3QgaW4gYSBzdHJpbmcgY2h1bmsuXG4gICAgaWYgKHBvaW50Ll9idWZmZXJJbmRleCA8IDApIHtcbiAgICAgIHBvaW50Ll9pbmRleCsrXG4gICAgfSBlbHNlIHtcbiAgICAgIHBvaW50Ll9idWZmZXJJbmRleCsrXG5cbiAgICAgIC8vIEF0IGVuZCBvZiBzdHJpbmcgY2h1bmsuXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFBvaW50cyB3LyBub24tbmVnYXRpdmUgYF9idWZmZXJJbmRleGAgcmVmZXJlbmNlXG4gICAgICAvLyBzdHJpbmdzLlxuICAgICAgaWYgKHBvaW50Ll9idWZmZXJJbmRleCA9PT0gY2h1bmtzW3BvaW50Ll9pbmRleF0ubGVuZ3RoKSB7XG4gICAgICAgIHBvaW50Ll9idWZmZXJJbmRleCA9IC0xXG4gICAgICAgIHBvaW50Ll9pbmRleCsrXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRXhwb3NlIHRoZSBwcmV2aW91cyBjaGFyYWN0ZXIuXG4gICAgY29udGV4dC5wcmV2aW91cyA9IGNvZGVcblxuICAgIC8vIE1hcmsgYXMgY29uc3VtZWQuXG4gICAgY29uc3VtZWQgPSB0cnVlXG4gIH1cblxuICAvKiogQHR5cGUge0VmZmVjdHNbJ2VudGVyJ119ICovXG4gIGZ1bmN0aW9uIGVudGVyKHR5cGUsIGZpZWxkcykge1xuICAgIC8qKiBAdHlwZSB7VG9rZW59ICovXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBQYXRjaCBpbnN0ZWFkIG9mIGFzc2lnbiByZXF1aXJlZCBmaWVsZHMgdG8gaGVscCBHQy5cbiAgICBjb25zdCB0b2tlbiA9IGZpZWxkcyB8fCB7fVxuICAgIHRva2VuLnR5cGUgPSB0eXBlXG4gICAgdG9rZW4uc3RhcnQgPSBub3coKVxuICAgIGNvbnRleHQuZXZlbnRzLnB1c2goWydlbnRlcicsIHRva2VuLCBjb250ZXh0XSlcbiAgICBzdGFjay5wdXNoKHRva2VuKVxuICAgIHJldHVybiB0b2tlblxuICB9XG5cbiAgLyoqIEB0eXBlIHtFZmZlY3RzWydleGl0J119ICovXG4gIGZ1bmN0aW9uIGV4aXQodHlwZSkge1xuICAgIGNvbnN0IHRva2VuID0gc3RhY2sucG9wKClcbiAgICB0b2tlbi5lbmQgPSBub3coKVxuICAgIGNvbnRleHQuZXZlbnRzLnB1c2goWydleGl0JywgdG9rZW4sIGNvbnRleHRdKVxuICAgIHJldHVybiB0b2tlblxuICB9XG5cbiAgLyoqXG4gICAqIFVzZSByZXN1bHRzLlxuICAgKlxuICAgKiBAdHlwZSB7UmV0dXJuSGFuZGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gb25zdWNjZXNzZnVsY29uc3RydWN0KGNvbnN0cnVjdCwgaW5mbykge1xuICAgIGFkZFJlc3VsdChjb25zdHJ1Y3QsIGluZm8uZnJvbSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNjYXJkIHJlc3VsdHMuXG4gICAqXG4gICAqIEB0eXBlIHtSZXR1cm5IYW5kbGV9XG4gICAqL1xuICBmdW5jdGlvbiBvbnN1Y2Nlc3NmdWxjaGVjayhfLCBpbmZvKSB7XG4gICAgaW5mby5yZXN0b3JlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBGYWN0b3J5IHRvIGF0dGVtcHQvY2hlY2svaW50ZXJydXB0LlxuICAgKlxuICAgKiBAcGFyYW0ge1JldHVybkhhbmRsZX0gb25yZXR1cm5cbiAgICogQHBhcmFtIHt7aW50ZXJydXB0PzogYm9vbGVhbiB8IHVuZGVmaW5lZH0gfCB1bmRlZmluZWR9IFtmaWVsZHNdXG4gICAqL1xuICBmdW5jdGlvbiBjb25zdHJ1Y3RGYWN0b3J5KG9ucmV0dXJuLCBmaWVsZHMpIHtcbiAgICByZXR1cm4gaG9va1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGVpdGhlciBhbiBvYmplY3QgbWFwcGluZyBjb2RlcyB0byBjb25zdHJ1Y3RzLCBhIGxpc3Qgb2ZcbiAgICAgKiBjb25zdHJ1Y3RzLCBvciBhIHNpbmdsZSBjb25zdHJ1Y3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5PENvbnN0cnVjdD4gfCBDb25zdHJ1Y3QgfCBDb25zdHJ1Y3RSZWNvcmR9IGNvbnN0cnVjdHNcbiAgICAgKiBAcGFyYW0ge1N0YXRlfSByZXR1cm5TdGF0ZVxuICAgICAqIEBwYXJhbSB7U3RhdGUgfCB1bmRlZmluZWR9IFtib2d1c1N0YXRlXVxuICAgICAqIEByZXR1cm5zIHtTdGF0ZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBob29rKGNvbnN0cnVjdHMsIHJldHVyblN0YXRlLCBib2d1c1N0YXRlKSB7XG4gICAgICAvKiogQHR5cGUge0FycmF5PENvbnN0cnVjdD59ICovXG4gICAgICBsZXQgbGlzdE9mQ29uc3RydWN0c1xuICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICBsZXQgY29uc3RydWN0SW5kZXhcbiAgICAgIC8qKiBAdHlwZSB7Q29uc3RydWN0fSAqL1xuICAgICAgbGV0IGN1cnJlbnRDb25zdHJ1Y3RcbiAgICAgIC8qKiBAdHlwZSB7SW5mb30gKi9cbiAgICAgIGxldCBpbmZvXG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShjb25zdHJ1Y3RzKSAvKiBjOCBpZ25vcmUgbmV4dCAxICovXG4gICAgICAgID8gaGFuZGxlTGlzdE9mQ29uc3RydWN0cyhjb25zdHJ1Y3RzKVxuICAgICAgICA6ICd0b2tlbml6ZScgaW4gY29uc3RydWN0c1xuICAgICAgICA/IC8vIEB0cy1leHBlY3QtZXJyb3IgTG9va3MgbGlrZSBhIGNvbnN0cnVjdC5cbiAgICAgICAgICBoYW5kbGVMaXN0T2ZDb25zdHJ1Y3RzKFtjb25zdHJ1Y3RzXSlcbiAgICAgICAgOiBoYW5kbGVNYXBPZkNvbnN0cnVjdHMoY29uc3RydWN0cylcblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgYSBsaXN0IG9mIGNvbnN0cnVjdC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge0NvbnN0cnVjdFJlY29yZH0gbWFwXG4gICAgICAgKiBAcmV0dXJucyB7U3RhdGV9XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZU1hcE9mQ29uc3RydWN0cyhtYXApIHtcbiAgICAgICAgcmV0dXJuIHN0YXJ0XG5cbiAgICAgICAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgICAgICAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgICAgICAgIGNvbnN0IGRlZiA9IGNvZGUgIT09IG51bGwgJiYgbWFwW2NvZGVdXG4gICAgICAgICAgY29uc3QgYWxsID0gY29kZSAhPT0gbnVsbCAmJiBtYXAubnVsbFxuICAgICAgICAgIGNvbnN0IGxpc3QgPSBbXG4gICAgICAgICAgICAvLyBUbyBkbzogYWRkIG1vcmUgZXh0ZW5zaW9uIHRlc3RzLlxuICAgICAgICAgICAgLyogYzggaWdub3JlIG5leHQgMiAqL1xuICAgICAgICAgICAgLi4uKEFycmF5LmlzQXJyYXkoZGVmKSA/IGRlZiA6IGRlZiA/IFtkZWZdIDogW10pLFxuICAgICAgICAgICAgLi4uKEFycmF5LmlzQXJyYXkoYWxsKSA/IGFsbCA6IGFsbCA/IFthbGxdIDogW10pXG4gICAgICAgICAgXVxuICAgICAgICAgIHJldHVybiBoYW5kbGVMaXN0T2ZDb25zdHJ1Y3RzKGxpc3QpKGNvZGUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgYSBsaXN0IG9mIGNvbnN0cnVjdC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge0FycmF5PENvbnN0cnVjdD59IGxpc3RcbiAgICAgICAqIEByZXR1cm5zIHtTdGF0ZX1cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gaGFuZGxlTGlzdE9mQ29uc3RydWN0cyhsaXN0KSB7XG4gICAgICAgIGxpc3RPZkNvbnN0cnVjdHMgPSBsaXN0XG4gICAgICAgIGNvbnN0cnVjdEluZGV4ID0gMFxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gYm9ndXNTdGF0ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYW5kbGVDb25zdHJ1Y3QobGlzdFtjb25zdHJ1Y3RJbmRleF0pXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIGEgc2luZ2xlIGNvbnN0cnVjdC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge0NvbnN0cnVjdH0gY29uc3RydWN0XG4gICAgICAgKiBAcmV0dXJucyB7U3RhdGV9XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUNvbnN0cnVjdChjb25zdHJ1Y3QpIHtcbiAgICAgICAgcmV0dXJuIHN0YXJ0XG5cbiAgICAgICAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgICAgICAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgICAgICAgIC8vIFRvIGRvOiBub3QgbmVlZGVkIHRvIHN0b3JlIGlmIHRoZXJlIGlzIG5vIGJvZ3VzIHN0YXRlLCBwcm9iYWJseT9cbiAgICAgICAgICAvLyBDdXJyZW50bHkgZG9lc27igJl0IHdvcmsgYmVjYXVzZSBgaW5zcGVjdGAgaW4gZG9jdW1lbnQgZG9lcyBhIGNoZWNrXG4gICAgICAgICAgLy8gdy9vIGEgYm9ndXMsIHdoaWNoIGRvZXNu4oCZdCBtYWtlIHNlbnNlLiBCdXQgaXQgZG9lcyBzZWVtIHRvIGhlbHAgcGVyZlxuICAgICAgICAgIC8vIGJ5IG5vdCBzdG9yaW5nLlxuICAgICAgICAgIGluZm8gPSBzdG9yZSgpXG4gICAgICAgICAgY3VycmVudENvbnN0cnVjdCA9IGNvbnN0cnVjdFxuICAgICAgICAgIGlmICghY29uc3RydWN0LnBhcnRpYWwpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY3VycmVudENvbnN0cnVjdCA9IGNvbnN0cnVjdFxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFsd2F5cyBwb3B1bGF0ZWQgYnkgZGVmYXVsdHMuXG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb25zdHJ1Y3QubmFtZSAmJlxuICAgICAgICAgICAgY29udGV4dC5wYXJzZXIuY29uc3RydWN0cy5kaXNhYmxlLm51bGwuaW5jbHVkZXMoY29uc3RydWN0Lm5hbWUpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3QudG9rZW5pemUuY2FsbChcbiAgICAgICAgICAgIC8vIElmIHdlIGRvIGhhdmUgZmllbGRzLCBjcmVhdGUgYW4gb2JqZWN0IHcvIGBjb250ZXh0YCBhcyBpdHNcbiAgICAgICAgICAgIC8vIHByb3RvdHlwZS5cbiAgICAgICAgICAgIC8vIFRoaXMgYWxsb3dzIGEg4oCcbGl2ZSBiaW5kaW5n4oCdLCB3aGljaCBpcyBuZWVkZWQgZm9yIGBpbnRlcnJ1cHRgLlxuICAgICAgICAgICAgZmllbGRzID8gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKGNvbnRleHQpLCBmaWVsZHMpIDogY29udGV4dCxcbiAgICAgICAgICAgIGVmZmVjdHMsXG4gICAgICAgICAgICBvayxcbiAgICAgICAgICAgIG5va1xuICAgICAgICAgICkoY29kZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiogQHR5cGUge1N0YXRlfSAqL1xuICAgICAgZnVuY3Rpb24gb2soY29kZSkge1xuICAgICAgICBjb25zdW1lZCA9IHRydWVcbiAgICAgICAgb25yZXR1cm4oY3VycmVudENvbnN0cnVjdCwgaW5mbylcbiAgICAgICAgcmV0dXJuIHJldHVyblN0YXRlXG4gICAgICB9XG5cbiAgICAgIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gICAgICBmdW5jdGlvbiBub2soY29kZSkge1xuICAgICAgICBjb25zdW1lZCA9IHRydWVcbiAgICAgICAgaW5mby5yZXN0b3JlKClcbiAgICAgICAgaWYgKCsrY29uc3RydWN0SW5kZXggPCBsaXN0T2ZDb25zdHJ1Y3RzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVDb25zdHJ1Y3QobGlzdE9mQ29uc3RydWN0c1tjb25zdHJ1Y3RJbmRleF0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvZ3VzU3RhdGVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtDb25zdHJ1Y3R9IGNvbnN0cnVjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gZnJvbVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIGFkZFJlc3VsdChjb25zdHJ1Y3QsIGZyb20pIHtcbiAgICBpZiAoY29uc3RydWN0LnJlc29sdmVBbGwgJiYgIXJlc29sdmVBbGxDb25zdHJ1Y3RzLmluY2x1ZGVzKGNvbnN0cnVjdCkpIHtcbiAgICAgIHJlc29sdmVBbGxDb25zdHJ1Y3RzLnB1c2goY29uc3RydWN0KVxuICAgIH1cbiAgICBpZiAoY29uc3RydWN0LnJlc29sdmUpIHtcbiAgICAgIHNwbGljZShcbiAgICAgICAgY29udGV4dC5ldmVudHMsXG4gICAgICAgIGZyb20sXG4gICAgICAgIGNvbnRleHQuZXZlbnRzLmxlbmd0aCAtIGZyb20sXG4gICAgICAgIGNvbnN0cnVjdC5yZXNvbHZlKGNvbnRleHQuZXZlbnRzLnNsaWNlKGZyb20pLCBjb250ZXh0KVxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoY29uc3RydWN0LnJlc29sdmVUbykge1xuICAgICAgY29udGV4dC5ldmVudHMgPSBjb25zdHJ1Y3QucmVzb2x2ZVRvKGNvbnRleHQuZXZlbnRzLCBjb250ZXh0KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZSBzdGF0ZS5cbiAgICpcbiAgICogQHJldHVybnMge0luZm99XG4gICAqL1xuICBmdW5jdGlvbiBzdG9yZSgpIHtcbiAgICBjb25zdCBzdGFydFBvaW50ID0gbm93KClcbiAgICBjb25zdCBzdGFydFByZXZpb3VzID0gY29udGV4dC5wcmV2aW91c1xuICAgIGNvbnN0IHN0YXJ0Q3VycmVudENvbnN0cnVjdCA9IGNvbnRleHQuY3VycmVudENvbnN0cnVjdFxuICAgIGNvbnN0IHN0YXJ0RXZlbnRzSW5kZXggPSBjb250ZXh0LmV2ZW50cy5sZW5ndGhcbiAgICBjb25zdCBzdGFydFN0YWNrID0gQXJyYXkuZnJvbShzdGFjaylcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdG9yZSxcbiAgICAgIGZyb206IHN0YXJ0RXZlbnRzSW5kZXhcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXN0b3JlIHN0YXRlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVzdG9yZSgpIHtcbiAgICAgIHBvaW50ID0gc3RhcnRQb2ludFxuICAgICAgY29udGV4dC5wcmV2aW91cyA9IHN0YXJ0UHJldmlvdXNcbiAgICAgIGNvbnRleHQuY3VycmVudENvbnN0cnVjdCA9IHN0YXJ0Q3VycmVudENvbnN0cnVjdFxuICAgICAgY29udGV4dC5ldmVudHMubGVuZ3RoID0gc3RhcnRFdmVudHNJbmRleFxuICAgICAgc3RhY2sgPSBzdGFydFN0YWNrXG4gICAgICBhY2NvdW50Rm9yUG90ZW50aWFsU2tpcCgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhlIGN1cnJlbnQgcG9pbnQgYSBiaXQgZm9yd2FyZCBpbiB0aGUgbGluZSB3aGVuIGl04oCZcyBvbiBhIGNvbHVtblxuICAgKiBza2lwLlxuICAgKlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIGFjY291bnRGb3JQb3RlbnRpYWxTa2lwKCkge1xuICAgIGlmIChwb2ludC5saW5lIGluIGNvbHVtblN0YXJ0ICYmIHBvaW50LmNvbHVtbiA8IDIpIHtcbiAgICAgIHBvaW50LmNvbHVtbiA9IGNvbHVtblN0YXJ0W3BvaW50LmxpbmVdXG4gICAgICBwb2ludC5vZmZzZXQgKz0gY29sdW1uU3RhcnRbcG9pbnQubGluZV0gLSAxXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBjaHVua3MgZnJvbSBhIHNsaWNlIG9mIGNodW5rcyBpbiB0aGUgcmFuZ2Ugb2YgYSB0b2tlbi5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PENodW5rPn0gY2h1bmtzXG4gKiBAcGFyYW0ge1BpY2s8VG9rZW4sICdlbmQnIHwgJ3N0YXJ0Jz59IHRva2VuXG4gKiBAcmV0dXJucyB7QXJyYXk8Q2h1bms+fVxuICovXG5mdW5jdGlvbiBzbGljZUNodW5rcyhjaHVua3MsIHRva2VuKSB7XG4gIGNvbnN0IHN0YXJ0SW5kZXggPSB0b2tlbi5zdGFydC5faW5kZXhcbiAgY29uc3Qgc3RhcnRCdWZmZXJJbmRleCA9IHRva2VuLnN0YXJ0Ll9idWZmZXJJbmRleFxuICBjb25zdCBlbmRJbmRleCA9IHRva2VuLmVuZC5faW5kZXhcbiAgY29uc3QgZW5kQnVmZmVySW5kZXggPSB0b2tlbi5lbmQuX2J1ZmZlckluZGV4XG4gIC8qKiBAdHlwZSB7QXJyYXk8Q2h1bms+fSAqL1xuICBsZXQgdmlld1xuICBpZiAoc3RhcnRJbmRleCA9PT0gZW5kSW5kZXgpIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGBfYnVmZmVySW5kZXhgIGlzIHVzZWQgb24gc3RyaW5nIGNodW5rcy5cbiAgICB2aWV3ID0gW2NodW5rc1tzdGFydEluZGV4XS5zbGljZShzdGFydEJ1ZmZlckluZGV4LCBlbmRCdWZmZXJJbmRleCldXG4gIH0gZWxzZSB7XG4gICAgdmlldyA9IGNodW5rcy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleClcbiAgICBpZiAoc3RhcnRCdWZmZXJJbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBoZWFkID0gdmlld1swXVxuICAgICAgaWYgKHR5cGVvZiBoZWFkID09PSAnc3RyaW5nJykge1xuICAgICAgICB2aWV3WzBdID0gaGVhZC5zbGljZShzdGFydEJ1ZmZlckluZGV4KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlldy5zaGlmdCgpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmRCdWZmZXJJbmRleCA+IDApIHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgYF9idWZmZXJJbmRleGAgaXMgdXNlZCBvbiBzdHJpbmcgY2h1bmtzLlxuICAgICAgdmlldy5wdXNoKGNodW5rc1tlbmRJbmRleF0uc2xpY2UoMCwgZW5kQnVmZmVySW5kZXgpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmlld1xufVxuXG4vKipcbiAqIEdldCB0aGUgc3RyaW5nIHZhbHVlIG9mIGEgc2xpY2Ugb2YgY2h1bmtzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8Q2h1bms+fSBjaHVua3NcbiAqIEBwYXJhbSB7Ym9vbGVhbiB8IHVuZGVmaW5lZH0gW2V4cGFuZFRhYnM9ZmFsc2VdXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzZXJpYWxpemVDaHVua3MoY2h1bmtzLCBleHBhbmRUYWJzKSB7XG4gIGxldCBpbmRleCA9IC0xXG4gIC8qKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn0gKi9cbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgLyoqIEB0eXBlIHtib29sZWFuIHwgdW5kZWZpbmVkfSAqL1xuICBsZXQgYXRUYWJcbiAgd2hpbGUgKCsraW5kZXggPCBjaHVua3MubGVuZ3RoKSB7XG4gICAgY29uc3QgY2h1bmsgPSBjaHVua3NbaW5kZXhdXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgbGV0IHZhbHVlXG4gICAgaWYgKHR5cGVvZiBjaHVuayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gY2h1bmtcbiAgICB9IGVsc2VcbiAgICAgIHN3aXRjaCAoY2h1bmspIHtcbiAgICAgICAgY2FzZSAtNToge1xuICAgICAgICAgIHZhbHVlID0gJ1xccidcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgLTQ6IHtcbiAgICAgICAgICB2YWx1ZSA9ICdcXG4nXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIC0zOiB7XG4gICAgICAgICAgdmFsdWUgPSAnXFxyJyArICdcXG4nXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIC0yOiB7XG4gICAgICAgICAgdmFsdWUgPSBleHBhbmRUYWJzID8gJyAnIDogJ1xcdCdcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgLTE6IHtcbiAgICAgICAgICBpZiAoIWV4cGFuZFRhYnMgJiYgYXRUYWIpIGNvbnRpbnVlXG4gICAgICAgICAgdmFsdWUgPSAnICdcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAvLyBDdXJyZW50bHkgb25seSByZXBsYWNlbWVudCBjaGFyYWN0ZXIuXG4gICAgICAgICAgdmFsdWUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNodW5rKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYXRUYWIgPSBjaHVuayA9PT0gLTJcbiAgICByZXN1bHQucHVzaCh2YWx1ZSlcbiAgfVxuICByZXR1cm4gcmVzdWx0LmpvaW4oJycpXG59XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRXh0ZW5zaW9ufSBFeHRlbnNpb25cbiAqL1xuXG5pbXBvcnQge1xuICBhdHRlbnRpb24sXG4gIGF1dG9saW5rLFxuICBibG9ja1F1b3RlLFxuICBjaGFyYWN0ZXJFc2NhcGUsXG4gIGNoYXJhY3RlclJlZmVyZW5jZSxcbiAgY29kZUZlbmNlZCxcbiAgY29kZUluZGVudGVkLFxuICBjb2RlVGV4dCxcbiAgZGVmaW5pdGlvbixcbiAgaGFyZEJyZWFrRXNjYXBlLFxuICBoZWFkaW5nQXR4LFxuICBodG1sRmxvdyxcbiAgaHRtbFRleHQsXG4gIGxhYmVsRW5kLFxuICBsYWJlbFN0YXJ0SW1hZ2UsXG4gIGxhYmVsU3RhcnRMaW5rLFxuICBsaW5lRW5kaW5nLFxuICBsaXN0LFxuICBzZXRleHRVbmRlcmxpbmUsXG4gIHRoZW1hdGljQnJlYWtcbn0gZnJvbSAnbWljcm9tYXJrLWNvcmUtY29tbW9ubWFyaydcbmltcG9ydCB7cmVzb2x2ZXIgYXMgcmVzb2x2ZVRleHR9IGZyb20gJy4vaW5pdGlhbGl6ZS90ZXh0LmpzJ1xuXG4vKiogQHNhdGlzZmllcyB7RXh0ZW5zaW9uWydkb2N1bWVudCddfSAqL1xuZXhwb3J0IGNvbnN0IGRvY3VtZW50ID0ge1xuICBbNDJdOiBsaXN0LFxuICBbNDNdOiBsaXN0LFxuICBbNDVdOiBsaXN0LFxuICBbNDhdOiBsaXN0LFxuICBbNDldOiBsaXN0LFxuICBbNTBdOiBsaXN0LFxuICBbNTFdOiBsaXN0LFxuICBbNTJdOiBsaXN0LFxuICBbNTNdOiBsaXN0LFxuICBbNTRdOiBsaXN0LFxuICBbNTVdOiBsaXN0LFxuICBbNTZdOiBsaXN0LFxuICBbNTddOiBsaXN0LFxuICBbNjJdOiBibG9ja1F1b3RlXG59XG5cbi8qKiBAc2F0aXNmaWVzIHtFeHRlbnNpb25bJ2NvbnRlbnRJbml0aWFsJ119ICovXG5leHBvcnQgY29uc3QgY29udGVudEluaXRpYWwgPSB7XG4gIFs5MV06IGRlZmluaXRpb25cbn1cblxuLyoqIEBzYXRpc2ZpZXMge0V4dGVuc2lvblsnZmxvd0luaXRpYWwnXX0gKi9cbmV4cG9ydCBjb25zdCBmbG93SW5pdGlhbCA9IHtcbiAgWy0yXTogY29kZUluZGVudGVkLFxuICBbLTFdOiBjb2RlSW5kZW50ZWQsXG4gIFszMl06IGNvZGVJbmRlbnRlZFxufVxuXG4vKiogQHNhdGlzZmllcyB7RXh0ZW5zaW9uWydmbG93J119ICovXG5leHBvcnQgY29uc3QgZmxvdyA9IHtcbiAgWzM1XTogaGVhZGluZ0F0eCxcbiAgWzQyXTogdGhlbWF0aWNCcmVhayxcbiAgWzQ1XTogW3NldGV4dFVuZGVybGluZSwgdGhlbWF0aWNCcmVha10sXG4gIFs2MF06IGh0bWxGbG93LFxuICBbNjFdOiBzZXRleHRVbmRlcmxpbmUsXG4gIFs5NV06IHRoZW1hdGljQnJlYWssXG4gIFs5Nl06IGNvZGVGZW5jZWQsXG4gIFsxMjZdOiBjb2RlRmVuY2VkXG59XG5cbi8qKiBAc2F0aXNmaWVzIHtFeHRlbnNpb25bJ3N0cmluZyddfSAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZyA9IHtcbiAgWzM4XTogY2hhcmFjdGVyUmVmZXJlbmNlLFxuICBbOTJdOiBjaGFyYWN0ZXJFc2NhcGVcbn1cblxuLyoqIEBzYXRpc2ZpZXMge0V4dGVuc2lvblsndGV4dCddfSAqL1xuZXhwb3J0IGNvbnN0IHRleHQgPSB7XG4gIFstNV06IGxpbmVFbmRpbmcsXG4gIFstNF06IGxpbmVFbmRpbmcsXG4gIFstM106IGxpbmVFbmRpbmcsXG4gIFszM106IGxhYmVsU3RhcnRJbWFnZSxcbiAgWzM4XTogY2hhcmFjdGVyUmVmZXJlbmNlLFxuICBbNDJdOiBhdHRlbnRpb24sXG4gIFs2MF06IFthdXRvbGluaywgaHRtbFRleHRdLFxuICBbOTFdOiBsYWJlbFN0YXJ0TGluayxcbiAgWzkyXTogW2hhcmRCcmVha0VzY2FwZSwgY2hhcmFjdGVyRXNjYXBlXSxcbiAgWzkzXTogbGFiZWxFbmQsXG4gIFs5NV06IGF0dGVudGlvbixcbiAgWzk2XTogY29kZVRleHRcbn1cblxuLyoqIEBzYXRpc2ZpZXMge0V4dGVuc2lvblsnaW5zaWRlU3BhbiddfSAqL1xuZXhwb3J0IGNvbnN0IGluc2lkZVNwYW4gPSB7XG4gIG51bGw6IFthdHRlbnRpb24sIHJlc29sdmVUZXh0XVxufVxuXG4vKiogQHNhdGlzZmllcyB7RXh0ZW5zaW9uWydhdHRlbnRpb25NYXJrZXJzJ119ICovXG5leHBvcnQgY29uc3QgYXR0ZW50aW9uTWFya2VycyA9IHtcbiAgbnVsbDogWzQyLCA5NV1cbn1cblxuLyoqIEBzYXRpc2ZpZXMge0V4dGVuc2lvblsnZGlzYWJsZSddfSAqL1xuZXhwb3J0IGNvbnN0IGRpc2FibGUgPSB7XG4gIG51bGw6IFtdXG59XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ3JlYXRlfSBDcmVhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRnVsbE5vcm1hbGl6ZWRFeHRlbnNpb259IEZ1bGxOb3JtYWxpemVkRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkluaXRpYWxDb25zdHJ1Y3R9IEluaXRpYWxDb25zdHJ1Y3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuUGFyc2VDb250ZXh0fSBQYXJzZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuUGFyc2VPcHRpb25zfSBQYXJzZU9wdGlvbnNcbiAqL1xuXG5pbXBvcnQge2NvbWJpbmVFeHRlbnNpb25zfSBmcm9tICdtaWNyb21hcmstdXRpbC1jb21iaW5lLWV4dGVuc2lvbnMnXG5pbXBvcnQge2NvbnRlbnR9IGZyb20gJy4vaW5pdGlhbGl6ZS9jb250ZW50LmpzJ1xuaW1wb3J0IHtkb2N1bWVudH0gZnJvbSAnLi9pbml0aWFsaXplL2RvY3VtZW50LmpzJ1xuaW1wb3J0IHtmbG93fSBmcm9tICcuL2luaXRpYWxpemUvZmxvdy5qcydcbmltcG9ydCB7dGV4dCwgc3RyaW5nfSBmcm9tICcuL2luaXRpYWxpemUvdGV4dC5qcydcbmltcG9ydCB7Y3JlYXRlVG9rZW5pemVyfSBmcm9tICcuL2NyZWF0ZS10b2tlbml6ZXIuanMnXG5pbXBvcnQgKiBhcyBkZWZhdWx0Q29uc3RydWN0cyBmcm9tICcuL2NvbnN0cnVjdHMuanMnXG5cbi8qKlxuICogQHBhcmFtIHtQYXJzZU9wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtQYXJzZUNvbnRleHR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShvcHRpb25zKSB7XG4gIGNvbnN0IHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICBjb25zdCBjb25zdHJ1Y3RzID1cbiAgICAvKiogQHR5cGUge0Z1bGxOb3JtYWxpemVkRXh0ZW5zaW9ufSAqL1xuICAgIGNvbWJpbmVFeHRlbnNpb25zKFtkZWZhdWx0Q29uc3RydWN0cywgLi4uKHNldHRpbmdzLmV4dGVuc2lvbnMgfHwgW10pXSlcblxuICAvKiogQHR5cGUge1BhcnNlQ29udGV4dH0gKi9cbiAgY29uc3QgcGFyc2VyID0ge1xuICAgIGRlZmluZWQ6IFtdLFxuICAgIGxhenk6IHt9LFxuICAgIGNvbnN0cnVjdHMsXG4gICAgY29udGVudDogY3JlYXRlKGNvbnRlbnQpLFxuICAgIGRvY3VtZW50OiBjcmVhdGUoZG9jdW1lbnQpLFxuICAgIGZsb3c6IGNyZWF0ZShmbG93KSxcbiAgICBzdHJpbmc6IGNyZWF0ZShzdHJpbmcpLFxuICAgIHRleHQ6IGNyZWF0ZSh0ZXh0KVxuICB9XG4gIHJldHVybiBwYXJzZXJcblxuICAvKipcbiAgICogQHBhcmFtIHtJbml0aWFsQ29uc3RydWN0fSBpbml0aWFsXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGUoaW5pdGlhbCkge1xuICAgIHJldHVybiBjcmVhdG9yXG4gICAgLyoqIEB0eXBlIHtDcmVhdGV9ICovXG4gICAgZnVuY3Rpb24gY3JlYXRvcihmcm9tKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVG9rZW5pemVyKHBhcnNlciwgaW5pdGlhbCwgZnJvbSlcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5DaHVua30gQ2h1bmtcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ29kZX0gQ29kZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5FbmNvZGluZ30gRW5jb2RpbmdcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVmFsdWV9IFZhbHVlXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgUHJlcHJvY2Vzc29yXG4gKiBAcGFyYW0ge1ZhbHVlfSB2YWx1ZVxuICogQHBhcmFtIHtFbmNvZGluZyB8IG51bGwgfCB1bmRlZmluZWR9IFtlbmNvZGluZ11cbiAqIEBwYXJhbSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtlbmQ9ZmFsc2VdXG4gKiBAcmV0dXJucyB7QXJyYXk8Q2h1bms+fVxuICovXG5cbmNvbnN0IHNlYXJjaCA9IC9bXFwwXFx0XFxuXFxyXS9nXG5cbi8qKlxuICogQHJldHVybnMge1ByZXByb2Nlc3Nvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZXByb2Nlc3MoKSB7XG4gIGxldCBjb2x1bW4gPSAxXG4gIGxldCBidWZmZXIgPSAnJ1xuICAvKiogQHR5cGUge2Jvb2xlYW4gfCB1bmRlZmluZWR9ICovXG4gIGxldCBzdGFydCA9IHRydWVcbiAgLyoqIEB0eXBlIHtib29sZWFuIHwgdW5kZWZpbmVkfSAqL1xuICBsZXQgYXRDYXJyaWFnZVJldHVyblxuICByZXR1cm4gcHJlcHJvY2Vzc29yXG5cbiAgLyoqIEB0eXBlIHtQcmVwcm9jZXNzb3J9ICovXG4gIGZ1bmN0aW9uIHByZXByb2Nlc3Nvcih2YWx1ZSwgZW5jb2RpbmcsIGVuZCkge1xuICAgIC8qKiBAdHlwZSB7QXJyYXk8Q2h1bms+fSAqL1xuICAgIGNvbnN0IGNodW5rcyA9IFtdXG4gICAgLyoqIEB0eXBlIHtSZWdFeHBNYXRjaEFycmF5IHwgbnVsbH0gKi9cbiAgICBsZXQgbWF0Y2hcbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICBsZXQgbmV4dFxuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIGxldCBzdGFydFBvc2l0aW9uXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgbGV0IGVuZFBvc2l0aW9uXG4gICAgLyoqIEB0eXBlIHtDb2RlfSAqL1xuICAgIGxldCBjb2RlXG5cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGBCdWZmZXJgIGRvZXMgYWxsb3cgYW4gZW5jb2RpbmcuXG4gICAgdmFsdWUgPSBidWZmZXIgKyB2YWx1ZS50b1N0cmluZyhlbmNvZGluZylcbiAgICBzdGFydFBvc2l0aW9uID0gMFxuICAgIGJ1ZmZlciA9ICcnXG4gICAgaWYgKHN0YXJ0KSB7XG4gICAgICAvLyBUbyBkbzogYG1hcmtkb3duLXJzYCBhY3R1YWxseSBwYXJzZXMgQk9NcyAoYnl0ZSBvcmRlciBtYXJrKS5cbiAgICAgIGlmICh2YWx1ZS5jaGFyQ29kZUF0KDApID09PSA2NTI3OSkge1xuICAgICAgICBzdGFydFBvc2l0aW9uKytcbiAgICAgIH1cbiAgICAgIHN0YXJ0ID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIHdoaWxlIChzdGFydFBvc2l0aW9uIDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICBzZWFyY2gubGFzdEluZGV4ID0gc3RhcnRQb3NpdGlvblxuICAgICAgbWF0Y2ggPSBzZWFyY2guZXhlYyh2YWx1ZSlcbiAgICAgIGVuZFBvc2l0aW9uID1cbiAgICAgICAgbWF0Y2ggJiYgbWF0Y2guaW5kZXggIT09IHVuZGVmaW5lZCA/IG1hdGNoLmluZGV4IDogdmFsdWUubGVuZ3RoXG4gICAgICBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChlbmRQb3NpdGlvbilcbiAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgYnVmZmVyID0gdmFsdWUuc2xpY2Uoc3RhcnRQb3NpdGlvbilcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGlmIChjb2RlID09PSAxMCAmJiBzdGFydFBvc2l0aW9uID09PSBlbmRQb3NpdGlvbiAmJiBhdENhcnJpYWdlUmV0dXJuKSB7XG4gICAgICAgIGNodW5rcy5wdXNoKC0zKVxuICAgICAgICBhdENhcnJpYWdlUmV0dXJuID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYXRDYXJyaWFnZVJldHVybikge1xuICAgICAgICAgIGNodW5rcy5wdXNoKC01KVxuICAgICAgICAgIGF0Q2FycmlhZ2VSZXR1cm4gPSB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRQb3NpdGlvbiA8IGVuZFBvc2l0aW9uKSB7XG4gICAgICAgICAgY2h1bmtzLnB1c2godmFsdWUuc2xpY2Uoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pKVxuICAgICAgICAgIGNvbHVtbiArPSBlbmRQb3NpdGlvbiAtIHN0YXJ0UG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgICAgICBjYXNlIDA6IHtcbiAgICAgICAgICAgIGNodW5rcy5wdXNoKDY1NTMzKVxuICAgICAgICAgICAgY29sdW1uKytcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgOToge1xuICAgICAgICAgICAgbmV4dCA9IE1hdGguY2VpbChjb2x1bW4gLyA0KSAqIDRcbiAgICAgICAgICAgIGNodW5rcy5wdXNoKC0yKVxuICAgICAgICAgICAgd2hpbGUgKGNvbHVtbisrIDwgbmV4dCkgY2h1bmtzLnB1c2goLTEpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIDEwOiB7XG4gICAgICAgICAgICBjaHVua3MucHVzaCgtNClcbiAgICAgICAgICAgIGNvbHVtbiA9IDFcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIGF0Q2FycmlhZ2VSZXR1cm4gPSB0cnVlXG4gICAgICAgICAgICBjb2x1bW4gPSAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzdGFydFBvc2l0aW9uID0gZW5kUG9zaXRpb24gKyAxXG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgIGlmIChhdENhcnJpYWdlUmV0dXJuKSBjaHVua3MucHVzaCgtNSlcbiAgICAgIGlmIChidWZmZXIpIGNodW5rcy5wdXNoKGJ1ZmZlcilcbiAgICAgIGNodW5rcy5wdXNoKG51bGwpXG4gICAgfVxuICAgIHJldHVybiBjaHVua3NcbiAgfVxufVxuIiwiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkV2ZW50fSBFdmVudFxuICovXG5cbmltcG9ydCB7c3VidG9rZW5pemV9IGZyb20gJ21pY3JvbWFyay11dGlsLXN1YnRva2VuaXplJ1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8RXZlbnQ+fSBldmVudHNcbiAqIEByZXR1cm5zIHtBcnJheTxFdmVudD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3N0cHJvY2VzcyhldmVudHMpIHtcbiAgd2hpbGUgKCFzdWJ0b2tlbml6ZShldmVudHMpKSB7XG4gICAgLy8gRW1wdHlcbiAgfVxuICByZXR1cm4gZXZlbnRzXG59XG4iLCIvKipcbiAqIFR1cm4gdGhlIG51bWJlciAoaW4gc3RyaW5nIGZvcm0gYXMgZWl0aGVyIGhleGEtIG9yIHBsYWluIGRlY2ltYWwpIGNvbWluZyBmcm9tXG4gKiBhIG51bWVyaWMgY2hhcmFjdGVyIHJlZmVyZW5jZSBpbnRvIGEgY2hhcmFjdGVyLlxuICpcbiAqIFNvcnQgb2YgbGlrZSBgU3RyaW5nLmZyb21DaGFyQ29kZShOdW1iZXIucGFyc2VJbnQodmFsdWUsIGJhc2UpKWAsIGJ1dCBtYWtlc1xuICogbm9uLWNoYXJhY3RlcnMgYW5kIGNvbnRyb2wgY2hhcmFjdGVycyBzYWZlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBWYWx1ZSB0byBkZWNvZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gYmFzZVxuICogICBOdW1lcmljIGJhc2UuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogICBDaGFyYWN0ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVOdW1lcmljQ2hhcmFjdGVyUmVmZXJlbmNlKHZhbHVlLCBiYXNlKSB7XG4gIGNvbnN0IGNvZGUgPSBOdW1iZXIucGFyc2VJbnQodmFsdWUsIGJhc2UpXG4gIGlmIChcbiAgICAvLyBDMCBleGNlcHQgZm9yIEhULCBMRiwgRkYsIENSLCBzcGFjZS5cbiAgICBjb2RlIDwgOSB8fFxuICAgIGNvZGUgPT09IDExIHx8XG4gICAgKGNvZGUgPiAxMyAmJiBjb2RlIDwgMzIpIHx8XG4gICAgLy8gQ29udHJvbCBjaGFyYWN0ZXIgKERFTCkgb2YgQzAsIGFuZCBDMSBjb250cm9scy5cbiAgICAoY29kZSA+IDEyNiAmJiBjb2RlIDwgMTYwKSB8fFxuICAgIC8vIExvbmUgaGlnaCBzdXJyb2dhdGVzIGFuZCBsb3cgc3Vycm9nYXRlcy5cbiAgICAoY29kZSA+IDU1Mjk1ICYmIGNvZGUgPCA1NzM0NCkgfHxcbiAgICAvLyBOb25jaGFyYWN0ZXJzLlxuICAgIChjb2RlID4gNjQ5NzUgJiYgY29kZSA8IDY1MDA4KSAvKiBlc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlICovIHx8XG4gICAgKGNvZGUgJiA2NTUzNSkgPT09IDY1NTM1IHx8XG4gICAgKGNvZGUgJiA2NTUzNSkgPT09IDY1NTM0IC8qIGVzbGludC1lbmFibGUgbm8tYml0d2lzZSAqLyB8fFxuICAgIC8vIE91dCBvZiByYW5nZVxuICAgIGNvZGUgPiAxMTE0MTExXG4gICkge1xuICAgIHJldHVybiAnXFx1RkZGRCdcbiAgfVxuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKVxufVxuIiwiaW1wb3J0IHtkZWNvZGVOYW1lZENoYXJhY3RlclJlZmVyZW5jZX0gZnJvbSAnZGVjb2RlLW5hbWVkLWNoYXJhY3Rlci1yZWZlcmVuY2UnXG5pbXBvcnQge2RlY29kZU51bWVyaWNDaGFyYWN0ZXJSZWZlcmVuY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWRlY29kZS1udW1lcmljLWNoYXJhY3Rlci1yZWZlcmVuY2UnXG5jb25zdCBjaGFyYWN0ZXJFc2NhcGVPclJlZmVyZW5jZSA9XG4gIC9cXFxcKFshLS86LUBbLWB7LX5dKXwmKCMoPzpcXGR7MSw3fXx4W1xcZGEtZl17MSw2fSl8W1xcZGEtel17MSwzMX0pOy9naVxuXG4vKipcbiAqIERlY29kZSBtYXJrZG93biBzdHJpbmdzICh3aGljaCBvY2N1ciBpbiBwbGFjZXMgc3VjaCBhcyBmZW5jZWQgY29kZSBpbmZvXG4gKiBzdHJpbmdzLCBkZXN0aW5hdGlvbnMsIGxhYmVscywgYW5kIHRpdGxlcykuXG4gKlxuICogVGhlIOKAnHN0cmluZ+KAnSBjb250ZW50IHR5cGUgYWxsb3dzIGNoYXJhY3RlciBlc2NhcGVzIGFuZCAtcmVmZXJlbmNlcy5cbiAqIFRoaXMgZGVjb2RlcyB0aG9zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgVmFsdWUgdG8gZGVjb2RlLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgRGVjb2RlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVN0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZShjaGFyYWN0ZXJFc2NhcGVPclJlZmVyZW5jZSwgZGVjb2RlKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSAkMFxuICogQHBhcmFtIHtzdHJpbmd9ICQxXG4gKiBAcGFyYW0ge3N0cmluZ30gJDJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGRlY29kZSgkMCwgJDEsICQyKSB7XG4gIGlmICgkMSkge1xuICAgIC8vIEVzY2FwZS5cbiAgICByZXR1cm4gJDFcbiAgfVxuXG4gIC8vIFJlZmVyZW5jZS5cbiAgY29uc3QgaGVhZCA9ICQyLmNoYXJDb2RlQXQoMClcbiAgaWYgKGhlYWQgPT09IDM1KSB7XG4gICAgY29uc3QgaGVhZCA9ICQyLmNoYXJDb2RlQXQoMSlcbiAgICBjb25zdCBoZXggPSBoZWFkID09PSAxMjAgfHwgaGVhZCA9PT0gODhcbiAgICByZXR1cm4gZGVjb2RlTnVtZXJpY0NoYXJhY3RlclJlZmVyZW5jZSgkMi5zbGljZShoZXggPyAyIDogMSksIGhleCA/IDE2IDogMTApXG4gIH1cbiAgcmV0dXJuIGRlY29kZU5hbWVkQ2hhcmFjdGVyUmVmZXJlbmNlKCQyKSB8fCAkMFxufVxuIiwiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUG9pbnR9IFBvaW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBvc2l0aW9ufSBQb3NpdGlvblxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgTm9kZUxpa2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlXG4gKiBAcHJvcGVydHkge1Bvc2l0aW9uTGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFtwb3NpdGlvbl1cbiAqXG4gKiBAdHlwZWRlZiBQb3NpdGlvbkxpa2VcbiAqIEBwcm9wZXJ0eSB7UG9pbnRMaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3N0YXJ0XVxuICogQHByb3BlcnR5IHtQb2ludExpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBbZW5kXVxuICpcbiAqIEB0eXBlZGVmIFBvaW50TGlrZVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSBbbGluZV1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbHVtbl1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29mZnNldF1cbiAqL1xuXG4vKipcbiAqIFNlcmlhbGl6ZSB0aGUgcG9zaXRpb25hbCBpbmZvIG9mIGEgcG9pbnQsIHBvc2l0aW9uIChzdGFydCBhbmQgZW5kIHBvaW50cyksXG4gKiBvciBub2RlLlxuICpcbiAqIEBwYXJhbSB7Tm9kZSB8IE5vZGVMaWtlIHwgUG9zaXRpb24gfCBQb3NpdGlvbkxpa2UgfCBQb2ludCB8IFBvaW50TGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFt2YWx1ZV1cbiAqICAgTm9kZSwgcG9zaXRpb24sIG9yIHBvaW50LlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgUHJldHR5IHByaW50ZWQgcG9zaXRpb25hbCBpbmZvIG9mIGEgbm9kZSAoYHN0cmluZ2ApLlxuICpcbiAqICAgSW4gdGhlIGZvcm1hdCBvZiBhIHJhbmdlIGBsczpjcy1sZTpjZWAgKHdoZW4gZ2l2ZW4gYG5vZGVgIG9yIGBwb3NpdGlvbmApXG4gKiAgIG9yIGEgcG9pbnQgYGw6Y2AgKHdoZW4gZ2l2ZW4gYHBvaW50YCksIHdoZXJlIGBsYCBzdGFuZHMgZm9yIGxpbmUsIGBjYCBmb3JcbiAqICAgY29sdW1uLCBgc2AgZm9yIGBzdGFydGAsIGFuZCBgZWAgZm9yIGVuZC5cbiAqICAgQW4gZW1wdHkgc3RyaW5nIChgJydgKSBpcyByZXR1cm5lZCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgbmVpdGhlciBgbm9kZWAsXG4gKiAgIGBwb3NpdGlvbmAsIG5vciBgcG9pbnRgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5UG9zaXRpb24odmFsdWUpIHtcbiAgLy8gTm90aGluZy5cbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBOb2RlLlxuICBpZiAoJ3Bvc2l0aW9uJyBpbiB2YWx1ZSB8fCAndHlwZScgaW4gdmFsdWUpIHtcbiAgICByZXR1cm4gcG9zaXRpb24odmFsdWUucG9zaXRpb24pXG4gIH1cblxuICAvLyBQb3NpdGlvbi5cbiAgaWYgKCdzdGFydCcgaW4gdmFsdWUgfHwgJ2VuZCcgaW4gdmFsdWUpIHtcbiAgICByZXR1cm4gcG9zaXRpb24odmFsdWUpXG4gIH1cblxuICAvLyBQb2ludC5cbiAgaWYgKCdsaW5lJyBpbiB2YWx1ZSB8fCAnY29sdW1uJyBpbiB2YWx1ZSkge1xuICAgIHJldHVybiBwb2ludCh2YWx1ZSlcbiAgfVxuXG4gIC8vID9cbiAgcmV0dXJuICcnXG59XG5cbi8qKlxuICogQHBhcmFtIHtQb2ludCB8IFBvaW50TGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IHBvaW50XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBwb2ludChwb2ludCkge1xuICByZXR1cm4gaW5kZXgocG9pbnQgJiYgcG9pbnQubGluZSkgKyAnOicgKyBpbmRleChwb2ludCAmJiBwb2ludC5jb2x1bW4pXG59XG5cbi8qKlxuICogQHBhcmFtIHtQb3NpdGlvbiB8IFBvc2l0aW9uTGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IHBvc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gcG9zaXRpb24ocG9zKSB7XG4gIHJldHVybiBwb2ludChwb3MgJiYgcG9zLnN0YXJ0KSArICctJyArIHBvaW50KHBvcyAmJiBwb3MuZW5kKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gdmFsdWVcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGluZGV4KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gdmFsdWUgOiAxXG59XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRW5jb2Rpbmd9IEVuY29kaW5nXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkV2ZW50fSBFdmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5QYXJzZU9wdGlvbnN9IFBhcnNlT3B0aW9uc1xuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbn0gVG9rZW5cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVDb250ZXh0fSBUb2tlbml6ZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVmFsdWV9IFZhbHVlXG4gKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5QYXJlbnR9IFVuaXN0UGFyZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBvaW50fSBQb2ludFxuICpcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuUGhyYXNpbmdDb250ZW50fSBQaHJhc2luZ0NvbnRlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuU3RhdGljUGhyYXNpbmdDb250ZW50fSBTdGF0aWNQaHJhc2luZ0NvbnRlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuQ29udGVudH0gQ29udGVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5CcmVha30gQnJlYWtcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuQmxvY2txdW90ZX0gQmxvY2txdW90ZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5Db2RlfSBDb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLkRlZmluaXRpb259IERlZmluaXRpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuRW1waGFzaXN9IEVtcGhhc2lzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLkhlYWRpbmd9IEhlYWRpbmdcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuSFRNTH0gSFRNTFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5JbWFnZX0gSW1hZ2VcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuSW1hZ2VSZWZlcmVuY2V9IEltYWdlUmVmZXJlbmNlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLklubGluZUNvZGV9IElubGluZUNvZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuTGlua30gTGlua1xuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5MaW5rUmVmZXJlbmNlfSBMaW5rUmVmZXJlbmNlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLkxpc3R9IExpc3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuTGlzdEl0ZW19IExpc3RJdGVtXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlBhcmFncmFwaH0gUGFyYWdyYXBoXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlJvb3R9IFJvb3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuU3Ryb25nfSBTdHJvbmdcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuVGV4dH0gVGV4dFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5UaGVtYXRpY0JyZWFrfSBUaGVtYXRpY0JyZWFrXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlJlZmVyZW5jZVR5cGV9IFJlZmVyZW5jZVR5cGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2luZGV4LmpzJykuQ29tcGlsZURhdGF9IENvbXBpbGVEYXRhXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7Um9vdCB8IENvbnRlbnR9IE5vZGVcbiAqIEB0eXBlZGVmIHtFeHRyYWN0PE5vZGUsIFVuaXN0UGFyZW50Pn0gUGFyZW50XG4gKlxuICogQHR5cGVkZWYge09taXQ8VW5pc3RQYXJlbnQsICd0eXBlJyB8ICdjaGlsZHJlbic+ICYge3R5cGU6ICdmcmFnbWVudCcsIGNoaWxkcmVuOiBBcnJheTxQaHJhc2luZ0NvbnRlbnQ+fX0gRnJhZ21lbnRcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBUcmFuc2Zvcm1cbiAqICAgRXh0cmEgdHJhbnNmb3JtLCB0byBjaGFuZ2UgdGhlIEFTVCBhZnRlcndhcmRzLlxuICogQHBhcmFtIHtSb290fSB0cmVlXG4gKiAgIFRyZWUgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybnMge1Jvb3QgfCB1bmRlZmluZWQgfCBudWxsIHwgdm9pZH1cbiAqICAgTmV3IHRyZWUgb3Igbm90aGluZyAoaW4gd2hpY2ggY2FzZSB0aGUgY3VycmVudCB0cmVlIGlzIHVzZWQpLlxuICpcbiAqIEBjYWxsYmFjayBIYW5kbGVcbiAqICAgSGFuZGxlIGEgdG9rZW4uXG4gKiBAcGFyYW0ge0NvbXBpbGVDb250ZXh0fSB0aGlzXG4gKiAgIENvbnRleHQuXG4gKiBAcGFyYW0ge1Rva2VufSB0b2tlblxuICogICBDdXJyZW50IHRva2VuLlxuICogQHJldHVybnMge3ZvaWR9XG4gKiAgIE5vdGhpbmcuXG4gKlxuICogQHR5cGVkZWYge1JlY29yZDxzdHJpbmcsIEhhbmRsZT59IEhhbmRsZXNcbiAqICAgVG9rZW4gdHlwZXMgbWFwcGluZyB0byBoYW5kbGVzXG4gKlxuICogQGNhbGxiYWNrIE9uRW50ZXJFcnJvclxuICogICBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgdGhlIGByaWdodGAgdG9rZW4gaXMgb3BlbiwgYnV0IGl0IGlzIGNsb3NlZCAoYnkgdGhlXG4gKiAgIGBsZWZ0YCB0b2tlbikgb3IgYmVjYXVzZSB3ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIGRvY3VtZW50LlxuICogQHBhcmFtIHtPbWl0PENvbXBpbGVDb250ZXh0LCAnc2xpY2VTZXJpYWxpemUnPn0gdGhpc1xuICogICBDb250ZXh0LlxuICogQHBhcmFtIHtUb2tlbiB8IHVuZGVmaW5lZH0gbGVmdFxuICogICBMZWZ0IHRva2VuLlxuICogQHBhcmFtIHtUb2tlbn0gcmlnaHRcbiAqICAgUmlnaHQgdG9rZW4uXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqICAgTm90aGluZy5cbiAqXG4gKiBAY2FsbGJhY2sgT25FeGl0RXJyb3JcbiAqICAgSGFuZGxlIHRoZSBjYXNlIHdoZXJlIHRoZSBgcmlnaHRgIHRva2VuIGlzIG9wZW4gYnV0IGl0IGlzIGNsb3NlZCBieVxuICogICBleGl0aW5nIHRoZSBgbGVmdGAgdG9rZW4uXG4gKiBAcGFyYW0ge09taXQ8Q29tcGlsZUNvbnRleHQsICdzbGljZVNlcmlhbGl6ZSc+fSB0aGlzXG4gKiAgIENvbnRleHQuXG4gKiBAcGFyYW0ge1Rva2VufSBsZWZ0XG4gKiAgIExlZnQgdG9rZW4uXG4gKiBAcGFyYW0ge1Rva2VufSByaWdodFxuICogICBSaWdodCB0b2tlbi5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICogICBOb3RoaW5nLlxuICpcbiAqIEB0eXBlZGVmIHtbVG9rZW4sIE9uRW50ZXJFcnJvciB8IHVuZGVmaW5lZF19IFRva2VuVHVwbGVcbiAqICAgT3BlbiB0b2tlbiBvbiB0aGUgc3RhY2ssIHdpdGggYW4gb3B0aW9uYWwgZXJyb3IgaGFuZGxlciBmb3Igd2hlblxuICogICB0aGF0IHRva2VuIGlzbuKAmXQgY2xvc2VkIHByb3Blcmx5LlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgQ29uZmlnXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKlxuICogICBXZSBoYXZlIG91ciBkZWZhdWx0cywgYnV0IGV4dGVuc2lvbnMgd2lsbCBhZGQgbW9yZS5cbiAqIEBwcm9wZXJ0eSB7QXJyYXk8c3RyaW5nPn0gY2FuQ29udGFpbkVvbHNcbiAqICAgVG9rZW4gdHlwZXMgd2hlcmUgbGluZSBlbmRpbmdzIGFyZSB1c2VkLlxuICogQHByb3BlcnR5IHtIYW5kbGVzfSBlbnRlclxuICogICBPcGVuaW5nIGhhbmRsZXMuXG4gKiBAcHJvcGVydHkge0hhbmRsZXN9IGV4aXRcbiAqICAgQ2xvc2luZyBoYW5kbGVzLlxuICogQHByb3BlcnR5IHtBcnJheTxUcmFuc2Zvcm0+fSB0cmFuc2Zvcm1zXG4gKiAgIFRyZWUgdHJhbnNmb3Jtcy5cbiAqXG4gKiBAdHlwZWRlZiB7UGFydGlhbDxDb25maWc+fSBFeHRlbnNpb25cbiAqICAgQ2hhbmdlIGhvdyBtYXJrZG93biB0b2tlbnMgZnJvbSBtaWNyb21hcmsgYXJlIHR1cm5lZCBpbnRvIG1kYXN0LlxuICpcbiAqIEB0eXBlZGVmIENvbXBpbGVDb250ZXh0XG4gKiAgIG1kYXN0IGNvbXBpbGVyIGNvbnRleHQuXG4gKiBAcHJvcGVydHkge0FycmF5PE5vZGUgfCBGcmFnbWVudD59IHN0YWNrXG4gKiAgIFN0YWNrIG9mIG5vZGVzLlxuICogQHByb3BlcnR5IHtBcnJheTxUb2tlblR1cGxlPn0gdG9rZW5TdGFja1xuICogICBTdGFjayBvZiB0b2tlbnMuXG4gKiBAcHJvcGVydHkgezxLZXkgZXh0ZW5kcyBrZXlvZiBDb21waWxlRGF0YT4oa2V5OiBLZXkpID0+IENvbXBpbGVEYXRhW0tleV19IGdldERhdGFcbiAqICAgR2V0IGRhdGEgZnJvbSB0aGUga2V5L3ZhbHVlIHN0b3JlLlxuICogQHByb3BlcnR5IHs8S2V5IGV4dGVuZHMga2V5b2YgQ29tcGlsZURhdGE+KGtleTogS2V5LCB2YWx1ZT86IENvbXBpbGVEYXRhW0tleV0pID0+IHZvaWR9IHNldERhdGFcbiAqICAgU2V0IGRhdGEgaW50byB0aGUga2V5L3ZhbHVlIHN0b3JlLlxuICogQHByb3BlcnR5IHsodGhpczogQ29tcGlsZUNvbnRleHQpID0+IHZvaWR9IGJ1ZmZlclxuICogICBDYXB0dXJlIHNvbWUgb2YgdGhlIG91dHB1dCBkYXRhLlxuICogQHByb3BlcnR5IHsodGhpczogQ29tcGlsZUNvbnRleHQpID0+IHN0cmluZ30gcmVzdW1lXG4gKiAgIFN0b3AgY2FwdHVyaW5nIGFuZCBhY2Nlc3MgdGhlIG91dHB1dCBkYXRhLlxuICogQHByb3BlcnR5IHs8S2luZCBleHRlbmRzIE5vZGU+KHRoaXM6IENvbXBpbGVDb250ZXh0LCBub2RlOiBLaW5kLCB0b2tlbjogVG9rZW4sIG9uRXJyb3I/OiBPbkVudGVyRXJyb3IpID0+IEtpbmR9IGVudGVyXG4gKiAgIEVudGVyIGEgdG9rZW4uXG4gKiBAcHJvcGVydHkgeyh0aGlzOiBDb21waWxlQ29udGV4dCwgdG9rZW46IFRva2VuLCBvbkVycm9yPzogT25FeGl0RXJyb3IpID0+IE5vZGV9IGV4aXRcbiAqICAgRXhpdCBhIHRva2VuLlxuICogQHByb3BlcnR5IHtUb2tlbml6ZUNvbnRleHRbJ3NsaWNlU2VyaWFsaXplJ119IHNsaWNlU2VyaWFsaXplXG4gKiAgIEdldCB0aGUgc3RyaW5nIHZhbHVlIG9mIGEgdG9rZW4uXG4gKiBAcHJvcGVydHkge0NvbmZpZ30gY29uZmlnXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKlxuICogQHR5cGVkZWYgRnJvbU1hcmtkb3duT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uIGZvciBob3cgdG8gYnVpbGQgbWRhc3QuXG4gKiBAcHJvcGVydHkge0FycmF5PEV4dGVuc2lvbiB8IEFycmF5PEV4dGVuc2lvbj4+IHwgbnVsbCB8IHVuZGVmaW5lZH0gW21kYXN0RXh0ZW5zaW9uc11cbiAqICAgRXh0ZW5zaW9ucyBmb3IgdGhpcyB1dGlsaXR5IHRvIGNoYW5nZSBob3cgdG9rZW5zIGFyZSB0dXJuZWQgaW50byBhIHRyZWUuXG4gKlxuICogQHR5cGVkZWYge1BhcnNlT3B0aW9ucyAmIEZyb21NYXJrZG93bk9wdGlvbnN9IE9wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqL1xuXG4vLyBUbyBkbzogbWljcm9tYXJrOiBjcmVhdGUgYSByZWdpc3RyeSBvZiB0b2tlbnM/XG4vLyBUbyBkbzogbmV4dCBtYWpvcjogZG9u4oCZdCByZXR1cm4gZ2l2ZW4gYE5vZGVgIGZyb20gYGVudGVyYC5cbi8vIFRvIGRvOiBuZXh0IG1ham9yOiByZW1vdmUgc2V0dGVyL2dldHRlci5cblxuaW1wb3J0IHt0b1N0cmluZ30gZnJvbSAnbWRhc3QtdXRpbC10by1zdHJpbmcnXG5pbXBvcnQge3BhcnNlfSBmcm9tICdtaWNyb21hcmsvbGliL3BhcnNlLmpzJ1xuaW1wb3J0IHtwcmVwcm9jZXNzfSBmcm9tICdtaWNyb21hcmsvbGliL3ByZXByb2Nlc3MuanMnXG5pbXBvcnQge3Bvc3Rwcm9jZXNzfSBmcm9tICdtaWNyb21hcmsvbGliL3Bvc3Rwcm9jZXNzLmpzJ1xuaW1wb3J0IHtkZWNvZGVOdW1lcmljQ2hhcmFjdGVyUmVmZXJlbmNlfSBmcm9tICdtaWNyb21hcmstdXRpbC1kZWNvZGUtbnVtZXJpYy1jaGFyYWN0ZXItcmVmZXJlbmNlJ1xuaW1wb3J0IHtkZWNvZGVTdHJpbmd9IGZyb20gJ21pY3JvbWFyay11dGlsLWRlY29kZS1zdHJpbmcnXG5pbXBvcnQge25vcm1hbGl6ZUlkZW50aWZpZXJ9IGZyb20gJ21pY3JvbWFyay11dGlsLW5vcm1hbGl6ZS1pZGVudGlmaWVyJ1xuaW1wb3J0IHtkZWNvZGVOYW1lZENoYXJhY3RlclJlZmVyZW5jZX0gZnJvbSAnZGVjb2RlLW5hbWVkLWNoYXJhY3Rlci1yZWZlcmVuY2UnXG5pbXBvcnQge3N0cmluZ2lmeVBvc2l0aW9ufSBmcm9tICd1bmlzdC11dGlsLXN0cmluZ2lmeS1wb3NpdGlvbidcbmNvbnN0IG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8qKlxuICogQHBhcmFtIHZhbHVlXG4gKiAgIE1hcmtkb3duIHRvIHBhcnNlLlxuICogQHBhcmFtIGVuY29kaW5nXG4gKiAgIENoYXJhY3RlciBlbmNvZGluZyBmb3Igd2hlbiBgdmFsdWVgIGlzIGBCdWZmZXJgLlxuICogQHBhcmFtIG9wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEByZXR1cm5zXG4gKiAgIG1kYXN0IHRyZWUuXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tTWFya2Rvd24gPVxuICAvKipcbiAgICogQHR5cGUgeyhcbiAgICogICAoKHZhbHVlOiBWYWx1ZSwgZW5jb2Rpbmc6IEVuY29kaW5nLCBvcHRpb25zPzogT3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWQpID0+IFJvb3QpICZcbiAgICogICAoKHZhbHVlOiBWYWx1ZSwgb3B0aW9ucz86IE9wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiBSb290KVxuICAgKiApfVxuICAgKi9cblxuICAvKipcbiAgICogQHBhcmFtIHtWYWx1ZX0gdmFsdWVcbiAgICogQHBhcmFtIHtFbmNvZGluZyB8IE9wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkfSBbZW5jb2RpbmddXG4gICAqIEBwYXJhbSB7T3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICAgKiBAcmV0dXJucyB7Um9vdH1cbiAgICovXG4gIGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmcsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9ucyA9IGVuY29kaW5nXG4gICAgICBlbmNvZGluZyA9IHVuZGVmaW5lZFxuICAgIH1cbiAgICByZXR1cm4gY29tcGlsZXIob3B0aW9ucykoXG4gICAgICBwb3N0cHJvY2VzcyhcbiAgICAgICAgcGFyc2Uob3B0aW9ucykuZG9jdW1lbnQoKS53cml0ZShwcmVwcm9jZXNzKCkodmFsdWUsIGVuY29kaW5nLCB0cnVlKSlcbiAgICAgIClcbiAgICApXG4gIH1cblxuLyoqXG4gKiBOb3RlIHRoaXMgY29tcGlsZXIgb25seSB1bmRlcnN0YW5kIGNvbXBsZXRlIGJ1ZmZlcmluZywgbm90IHN0cmVhbWluZy5cbiAqXG4gKiBAcGFyYW0ge09wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9uc11cbiAqL1xuZnVuY3Rpb24gY29tcGlsZXIob3B0aW9ucykge1xuICAvKiogQHR5cGUge0NvbmZpZ30gKi9cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIHRyYW5zZm9ybXM6IFtdLFxuICAgIGNhbkNvbnRhaW5Fb2xzOiBbJ2VtcGhhc2lzJywgJ2ZyYWdtZW50JywgJ2hlYWRpbmcnLCAncGFyYWdyYXBoJywgJ3N0cm9uZyddLFxuICAgIGVudGVyOiB7XG4gICAgICBhdXRvbGluazogb3BlbmVyKGxpbmspLFxuICAgICAgYXV0b2xpbmtQcm90b2NvbDogb25lbnRlcmRhdGEsXG4gICAgICBhdXRvbGlua0VtYWlsOiBvbmVudGVyZGF0YSxcbiAgICAgIGF0eEhlYWRpbmc6IG9wZW5lcihoZWFkaW5nKSxcbiAgICAgIGJsb2NrUXVvdGU6IG9wZW5lcihibG9ja1F1b3RlKSxcbiAgICAgIGNoYXJhY3RlckVzY2FwZTogb25lbnRlcmRhdGEsXG4gICAgICBjaGFyYWN0ZXJSZWZlcmVuY2U6IG9uZW50ZXJkYXRhLFxuICAgICAgY29kZUZlbmNlZDogb3BlbmVyKGNvZGVGbG93KSxcbiAgICAgIGNvZGVGZW5jZWRGZW5jZUluZm86IGJ1ZmZlcixcbiAgICAgIGNvZGVGZW5jZWRGZW5jZU1ldGE6IGJ1ZmZlcixcbiAgICAgIGNvZGVJbmRlbnRlZDogb3BlbmVyKGNvZGVGbG93LCBidWZmZXIpLFxuICAgICAgY29kZVRleHQ6IG9wZW5lcihjb2RlVGV4dCwgYnVmZmVyKSxcbiAgICAgIGNvZGVUZXh0RGF0YTogb25lbnRlcmRhdGEsXG4gICAgICBkYXRhOiBvbmVudGVyZGF0YSxcbiAgICAgIGNvZGVGbG93VmFsdWU6IG9uZW50ZXJkYXRhLFxuICAgICAgZGVmaW5pdGlvbjogb3BlbmVyKGRlZmluaXRpb24pLFxuICAgICAgZGVmaW5pdGlvbkRlc3RpbmF0aW9uU3RyaW5nOiBidWZmZXIsXG4gICAgICBkZWZpbml0aW9uTGFiZWxTdHJpbmc6IGJ1ZmZlcixcbiAgICAgIGRlZmluaXRpb25UaXRsZVN0cmluZzogYnVmZmVyLFxuICAgICAgZW1waGFzaXM6IG9wZW5lcihlbXBoYXNpcyksXG4gICAgICBoYXJkQnJlYWtFc2NhcGU6IG9wZW5lcihoYXJkQnJlYWspLFxuICAgICAgaGFyZEJyZWFrVHJhaWxpbmc6IG9wZW5lcihoYXJkQnJlYWspLFxuICAgICAgaHRtbEZsb3c6IG9wZW5lcihodG1sLCBidWZmZXIpLFxuICAgICAgaHRtbEZsb3dEYXRhOiBvbmVudGVyZGF0YSxcbiAgICAgIGh0bWxUZXh0OiBvcGVuZXIoaHRtbCwgYnVmZmVyKSxcbiAgICAgIGh0bWxUZXh0RGF0YTogb25lbnRlcmRhdGEsXG4gICAgICBpbWFnZTogb3BlbmVyKGltYWdlKSxcbiAgICAgIGxhYmVsOiBidWZmZXIsXG4gICAgICBsaW5rOiBvcGVuZXIobGluayksXG4gICAgICBsaXN0SXRlbTogb3BlbmVyKGxpc3RJdGVtKSxcbiAgICAgIGxpc3RJdGVtVmFsdWU6IG9uZW50ZXJsaXN0aXRlbXZhbHVlLFxuICAgICAgbGlzdE9yZGVyZWQ6IG9wZW5lcihsaXN0LCBvbmVudGVybGlzdG9yZGVyZWQpLFxuICAgICAgbGlzdFVub3JkZXJlZDogb3BlbmVyKGxpc3QpLFxuICAgICAgcGFyYWdyYXBoOiBvcGVuZXIocGFyYWdyYXBoKSxcbiAgICAgIHJlZmVyZW5jZTogb25lbnRlcnJlZmVyZW5jZSxcbiAgICAgIHJlZmVyZW5jZVN0cmluZzogYnVmZmVyLFxuICAgICAgcmVzb3VyY2VEZXN0aW5hdGlvblN0cmluZzogYnVmZmVyLFxuICAgICAgcmVzb3VyY2VUaXRsZVN0cmluZzogYnVmZmVyLFxuICAgICAgc2V0ZXh0SGVhZGluZzogb3BlbmVyKGhlYWRpbmcpLFxuICAgICAgc3Ryb25nOiBvcGVuZXIoc3Ryb25nKSxcbiAgICAgIHRoZW1hdGljQnJlYWs6IG9wZW5lcih0aGVtYXRpY0JyZWFrKVxuICAgIH0sXG4gICAgZXhpdDoge1xuICAgICAgYXR4SGVhZGluZzogY2xvc2VyKCksXG4gICAgICBhdHhIZWFkaW5nU2VxdWVuY2U6IG9uZXhpdGF0eGhlYWRpbmdzZXF1ZW5jZSxcbiAgICAgIGF1dG9saW5rOiBjbG9zZXIoKSxcbiAgICAgIGF1dG9saW5rRW1haWw6IG9uZXhpdGF1dG9saW5rZW1haWwsXG4gICAgICBhdXRvbGlua1Byb3RvY29sOiBvbmV4aXRhdXRvbGlua3Byb3RvY29sLFxuICAgICAgYmxvY2tRdW90ZTogY2xvc2VyKCksXG4gICAgICBjaGFyYWN0ZXJFc2NhcGVWYWx1ZTogb25leGl0ZGF0YSxcbiAgICAgIGNoYXJhY3RlclJlZmVyZW5jZU1hcmtlckhleGFkZWNpbWFsOiBvbmV4aXRjaGFyYWN0ZXJyZWZlcmVuY2VtYXJrZXIsXG4gICAgICBjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJOdW1lcmljOiBvbmV4aXRjaGFyYWN0ZXJyZWZlcmVuY2VtYXJrZXIsXG4gICAgICBjaGFyYWN0ZXJSZWZlcmVuY2VWYWx1ZTogb25leGl0Y2hhcmFjdGVycmVmZXJlbmNldmFsdWUsXG4gICAgICBjb2RlRmVuY2VkOiBjbG9zZXIob25leGl0Y29kZWZlbmNlZCksXG4gICAgICBjb2RlRmVuY2VkRmVuY2U6IG9uZXhpdGNvZGVmZW5jZWRmZW5jZSxcbiAgICAgIGNvZGVGZW5jZWRGZW5jZUluZm86IG9uZXhpdGNvZGVmZW5jZWRmZW5jZWluZm8sXG4gICAgICBjb2RlRmVuY2VkRmVuY2VNZXRhOiBvbmV4aXRjb2RlZmVuY2VkZmVuY2VtZXRhLFxuICAgICAgY29kZUZsb3dWYWx1ZTogb25leGl0ZGF0YSxcbiAgICAgIGNvZGVJbmRlbnRlZDogY2xvc2VyKG9uZXhpdGNvZGVpbmRlbnRlZCksXG4gICAgICBjb2RlVGV4dDogY2xvc2VyKG9uZXhpdGNvZGV0ZXh0KSxcbiAgICAgIGNvZGVUZXh0RGF0YTogb25leGl0ZGF0YSxcbiAgICAgIGRhdGE6IG9uZXhpdGRhdGEsXG4gICAgICBkZWZpbml0aW9uOiBjbG9zZXIoKSxcbiAgICAgIGRlZmluaXRpb25EZXN0aW5hdGlvblN0cmluZzogb25leGl0ZGVmaW5pdGlvbmRlc3RpbmF0aW9uc3RyaW5nLFxuICAgICAgZGVmaW5pdGlvbkxhYmVsU3RyaW5nOiBvbmV4aXRkZWZpbml0aW9ubGFiZWxzdHJpbmcsXG4gICAgICBkZWZpbml0aW9uVGl0bGVTdHJpbmc6IG9uZXhpdGRlZmluaXRpb250aXRsZXN0cmluZyxcbiAgICAgIGVtcGhhc2lzOiBjbG9zZXIoKSxcbiAgICAgIGhhcmRCcmVha0VzY2FwZTogY2xvc2VyKG9uZXhpdGhhcmRicmVhayksXG4gICAgICBoYXJkQnJlYWtUcmFpbGluZzogY2xvc2VyKG9uZXhpdGhhcmRicmVhayksXG4gICAgICBodG1sRmxvdzogY2xvc2VyKG9uZXhpdGh0bWxmbG93KSxcbiAgICAgIGh0bWxGbG93RGF0YTogb25leGl0ZGF0YSxcbiAgICAgIGh0bWxUZXh0OiBjbG9zZXIob25leGl0aHRtbHRleHQpLFxuICAgICAgaHRtbFRleHREYXRhOiBvbmV4aXRkYXRhLFxuICAgICAgaW1hZ2U6IGNsb3NlcihvbmV4aXRpbWFnZSksXG4gICAgICBsYWJlbDogb25leGl0bGFiZWwsXG4gICAgICBsYWJlbFRleHQ6IG9uZXhpdGxhYmVsdGV4dCxcbiAgICAgIGxpbmVFbmRpbmc6IG9uZXhpdGxpbmVlbmRpbmcsXG4gICAgICBsaW5rOiBjbG9zZXIob25leGl0bGluayksXG4gICAgICBsaXN0SXRlbTogY2xvc2VyKCksXG4gICAgICBsaXN0T3JkZXJlZDogY2xvc2VyKCksXG4gICAgICBsaXN0VW5vcmRlcmVkOiBjbG9zZXIoKSxcbiAgICAgIHBhcmFncmFwaDogY2xvc2VyKCksXG4gICAgICByZWZlcmVuY2VTdHJpbmc6IG9uZXhpdHJlZmVyZW5jZXN0cmluZyxcbiAgICAgIHJlc291cmNlRGVzdGluYXRpb25TdHJpbmc6IG9uZXhpdHJlc291cmNlZGVzdGluYXRpb25zdHJpbmcsXG4gICAgICByZXNvdXJjZVRpdGxlU3RyaW5nOiBvbmV4aXRyZXNvdXJjZXRpdGxlc3RyaW5nLFxuICAgICAgcmVzb3VyY2U6IG9uZXhpdHJlc291cmNlLFxuICAgICAgc2V0ZXh0SGVhZGluZzogY2xvc2VyKG9uZXhpdHNldGV4dGhlYWRpbmcpLFxuICAgICAgc2V0ZXh0SGVhZGluZ0xpbmVTZXF1ZW5jZTogb25leGl0c2V0ZXh0aGVhZGluZ2xpbmVzZXF1ZW5jZSxcbiAgICAgIHNldGV4dEhlYWRpbmdUZXh0OiBvbmV4aXRzZXRleHRoZWFkaW5ndGV4dCxcbiAgICAgIHN0cm9uZzogY2xvc2VyKCksXG4gICAgICB0aGVtYXRpY0JyZWFrOiBjbG9zZXIoKVxuICAgIH1cbiAgfVxuICBjb25maWd1cmUoY29uZmlnLCAob3B0aW9ucyB8fCB7fSkubWRhc3RFeHRlbnNpb25zIHx8IFtdKVxuXG4gIC8qKiBAdHlwZSB7Q29tcGlsZURhdGF9ICovXG4gIGNvbnN0IGRhdGEgPSB7fVxuICByZXR1cm4gY29tcGlsZVxuXG4gIC8qKlxuICAgKiBUdXJuIG1pY3JvbWFyayBldmVudHMgaW50byBhbiBtZGFzdCB0cmVlLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PEV2ZW50Pn0gZXZlbnRzXG4gICAqICAgRXZlbnRzLlxuICAgKiBAcmV0dXJucyB7Um9vdH1cbiAgICogICBtZGFzdCB0cmVlLlxuICAgKi9cbiAgZnVuY3Rpb24gY29tcGlsZShldmVudHMpIHtcbiAgICAvKiogQHR5cGUge1Jvb3R9ICovXG4gICAgbGV0IHRyZWUgPSB7XG4gICAgICB0eXBlOiAncm9vdCcsXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9XG4gICAgLyoqIEB0eXBlIHtPbWl0PENvbXBpbGVDb250ZXh0LCAnc2xpY2VTZXJpYWxpemUnPn0gKi9cbiAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgc3RhY2s6IFt0cmVlXSxcbiAgICAgIHRva2VuU3RhY2s6IFtdLFxuICAgICAgY29uZmlnLFxuICAgICAgZW50ZXIsXG4gICAgICBleGl0LFxuICAgICAgYnVmZmVyLFxuICAgICAgcmVzdW1lLFxuICAgICAgc2V0RGF0YSxcbiAgICAgIGdldERhdGFcbiAgICB9XG4gICAgLyoqIEB0eXBlIHtBcnJheTxudW1iZXI+fSAqL1xuICAgIGNvbnN0IGxpc3RTdGFjayA9IFtdXG4gICAgbGV0IGluZGV4ID0gLTFcbiAgICB3aGlsZSAoKytpbmRleCA8IGV2ZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIFdlIHByZXByb2Nlc3MgbGlzdHMgdG8gYWRkIGBsaXN0SXRlbWAgdG9rZW5zLCBhbmQgdG8gaW5mZXIgd2hldGhlclxuICAgICAgLy8gaXRlbXMgdGhlIGxpc3QgaXRzZWxmIGFyZSBzcHJlYWQgb3V0LlxuICAgICAgaWYgKFxuICAgICAgICBldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdsaXN0T3JkZXJlZCcgfHxcbiAgICAgICAgZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnbGlzdFVub3JkZXJlZCdcbiAgICAgICkge1xuICAgICAgICBpZiAoZXZlbnRzW2luZGV4XVswXSA9PT0gJ2VudGVyJykge1xuICAgICAgICAgIGxpc3RTdGFjay5wdXNoKGluZGV4KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHRhaWwgPSBsaXN0U3RhY2sucG9wKClcbiAgICAgICAgICBpbmRleCA9IHByZXBhcmVMaXN0KGV2ZW50cywgdGFpbCwgaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaW5kZXggPSAtMVxuICAgIHdoaWxlICgrK2luZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgICAgY29uc3QgaGFuZGxlciA9IGNvbmZpZ1tldmVudHNbaW5kZXhdWzBdXVxuICAgICAgaWYgKG93bi5jYWxsKGhhbmRsZXIsIGV2ZW50c1tpbmRleF1bMV0udHlwZSkpIHtcbiAgICAgICAgaGFuZGxlcltldmVudHNbaW5kZXhdWzFdLnR5cGVdLmNhbGwoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2xpY2VTZXJpYWxpemU6IGV2ZW50c1tpbmRleF1bMl0uc2xpY2VTZXJpYWxpemVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250ZXh0XG4gICAgICAgICAgKSxcbiAgICAgICAgICBldmVudHNbaW5kZXhdWzFdXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgdG9rZW5zIHN0aWxsIGJlaW5nIG9wZW4uXG4gICAgaWYgKGNvbnRleHQudG9rZW5TdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0YWlsID0gY29udGV4dC50b2tlblN0YWNrW2NvbnRleHQudG9rZW5TdGFjay5sZW5ndGggLSAxXVxuICAgICAgY29uc3QgaGFuZGxlciA9IHRhaWxbMV0gfHwgZGVmYXVsdE9uRXJyb3JcbiAgICAgIGhhbmRsZXIuY2FsbChjb250ZXh0LCB1bmRlZmluZWQsIHRhaWxbMF0pXG4gICAgfVxuXG4gICAgLy8gRmlndXJlIG91dCBgcm9vdGAgcG9zaXRpb24uXG4gICAgdHJlZS5wb3NpdGlvbiA9IHtcbiAgICAgIHN0YXJ0OiBwb2ludChcbiAgICAgICAgZXZlbnRzLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IGV2ZW50c1swXVsxXS5zdGFydFxuICAgICAgICAgIDoge1xuICAgICAgICAgICAgICBsaW5lOiAxLFxuICAgICAgICAgICAgICBjb2x1bW46IDEsXG4gICAgICAgICAgICAgIG9mZnNldDogMFxuICAgICAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGVuZDogcG9pbnQoXG4gICAgICAgIGV2ZW50cy5sZW5ndGggPiAwXG4gICAgICAgICAgPyBldmVudHNbZXZlbnRzLmxlbmd0aCAtIDJdWzFdLmVuZFxuICAgICAgICAgIDoge1xuICAgICAgICAgICAgICBsaW5lOiAxLFxuICAgICAgICAgICAgICBjb2x1bW46IDEsXG4gICAgICAgICAgICAgIG9mZnNldDogMFxuICAgICAgICAgICAgfVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIENhbGwgdHJhbnNmb3Jtcy5cbiAgICBpbmRleCA9IC0xXG4gICAgd2hpbGUgKCsraW5kZXggPCBjb25maWcudHJhbnNmb3Jtcy5sZW5ndGgpIHtcbiAgICAgIHRyZWUgPSBjb25maWcudHJhbnNmb3Jtc1tpbmRleF0odHJlZSkgfHwgdHJlZVxuICAgIH1cbiAgICByZXR1cm4gdHJlZVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7QXJyYXk8RXZlbnQ+fSBldmVudHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGZ1bmN0aW9uIHByZXBhcmVMaXN0KGV2ZW50cywgc3RhcnQsIGxlbmd0aCkge1xuICAgIGxldCBpbmRleCA9IHN0YXJ0IC0gMVxuICAgIGxldCBjb250YWluZXJCYWxhbmNlID0gLTFcbiAgICBsZXQgbGlzdFNwcmVhZCA9IGZhbHNlXG4gICAgLyoqIEB0eXBlIHtUb2tlbiB8IHVuZGVmaW5lZH0gKi9cbiAgICBsZXQgbGlzdEl0ZW1cbiAgICAvKiogQHR5cGUge251bWJlciB8IHVuZGVmaW5lZH0gKi9cbiAgICBsZXQgbGluZUluZGV4XG4gICAgLyoqIEB0eXBlIHtudW1iZXIgfCB1bmRlZmluZWR9ICovXG4gICAgbGV0IGZpcnN0QmxhbmtMaW5lSW5kZXhcbiAgICAvKiogQHR5cGUge2Jvb2xlYW4gfCB1bmRlZmluZWR9ICovXG4gICAgbGV0IGF0TWFya2VyXG4gICAgd2hpbGUgKCsraW5kZXggPD0gbGVuZ3RoKSB7XG4gICAgICBjb25zdCBldmVudCA9IGV2ZW50c1tpbmRleF1cbiAgICAgIGlmIChcbiAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gJ2xpc3RVbm9yZGVyZWQnIHx8XG4gICAgICAgIGV2ZW50WzFdLnR5cGUgPT09ICdsaXN0T3JkZXJlZCcgfHxcbiAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gJ2Jsb2NrUXVvdGUnXG4gICAgICApIHtcbiAgICAgICAgaWYgKGV2ZW50WzBdID09PSAnZW50ZXInKSB7XG4gICAgICAgICAgY29udGFpbmVyQmFsYW5jZSsrXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyQmFsYW5jZS0tXG4gICAgICAgIH1cbiAgICAgICAgYXRNYXJrZXIgPSB1bmRlZmluZWRcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnRbMV0udHlwZSA9PT0gJ2xpbmVFbmRpbmdCbGFuaycpIHtcbiAgICAgICAgaWYgKGV2ZW50WzBdID09PSAnZW50ZXInKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbGlzdEl0ZW0gJiZcbiAgICAgICAgICAgICFhdE1hcmtlciAmJlxuICAgICAgICAgICAgIWNvbnRhaW5lckJhbGFuY2UgJiZcbiAgICAgICAgICAgICFmaXJzdEJsYW5rTGluZUluZGV4XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBmaXJzdEJsYW5rTGluZUluZGV4ID0gaW5kZXhcbiAgICAgICAgICB9XG4gICAgICAgICAgYXRNYXJrZXIgPSB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gJ2xpbmVQcmVmaXgnIHx8XG4gICAgICAgIGV2ZW50WzFdLnR5cGUgPT09ICdsaXN0SXRlbVZhbHVlJyB8fFxuICAgICAgICBldmVudFsxXS50eXBlID09PSAnbGlzdEl0ZW1NYXJrZXInIHx8XG4gICAgICAgIGV2ZW50WzFdLnR5cGUgPT09ICdsaXN0SXRlbVByZWZpeCcgfHxcbiAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gJ2xpc3RJdGVtUHJlZml4V2hpdGVzcGFjZSdcbiAgICAgICkge1xuICAgICAgICAvLyBFbXB0eS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF0TWFya2VyID0gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICghY29udGFpbmVyQmFsYW5jZSAmJlxuICAgICAgICAgIGV2ZW50WzBdID09PSAnZW50ZXInICYmXG4gICAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gJ2xpc3RJdGVtUHJlZml4JykgfHxcbiAgICAgICAgKGNvbnRhaW5lckJhbGFuY2UgPT09IC0xICYmXG4gICAgICAgICAgZXZlbnRbMF0gPT09ICdleGl0JyAmJlxuICAgICAgICAgIChldmVudFsxXS50eXBlID09PSAnbGlzdFVub3JkZXJlZCcgfHxcbiAgICAgICAgICAgIGV2ZW50WzFdLnR5cGUgPT09ICdsaXN0T3JkZXJlZCcpKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChsaXN0SXRlbSkge1xuICAgICAgICAgIGxldCB0YWlsSW5kZXggPSBpbmRleFxuICAgICAgICAgIGxpbmVJbmRleCA9IHVuZGVmaW5lZFxuICAgICAgICAgIHdoaWxlICh0YWlsSW5kZXgtLSkge1xuICAgICAgICAgICAgY29uc3QgdGFpbEV2ZW50ID0gZXZlbnRzW3RhaWxJbmRleF1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGFpbEV2ZW50WzFdLnR5cGUgPT09ICdsaW5lRW5kaW5nJyB8fFxuICAgICAgICAgICAgICB0YWlsRXZlbnRbMV0udHlwZSA9PT0gJ2xpbmVFbmRpbmdCbGFuaydcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBpZiAodGFpbEV2ZW50WzBdID09PSAnZXhpdCcpIGNvbnRpbnVlXG4gICAgICAgICAgICAgIGlmIChsaW5lSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBldmVudHNbbGluZUluZGV4XVsxXS50eXBlID0gJ2xpbmVFbmRpbmdCbGFuaydcbiAgICAgICAgICAgICAgICBsaXN0U3ByZWFkID0gdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRhaWxFdmVudFsxXS50eXBlID0gJ2xpbmVFbmRpbmcnXG4gICAgICAgICAgICAgIGxpbmVJbmRleCA9IHRhaWxJbmRleFxuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgdGFpbEV2ZW50WzFdLnR5cGUgPT09ICdsaW5lUHJlZml4JyB8fFxuICAgICAgICAgICAgICB0YWlsRXZlbnRbMV0udHlwZSA9PT0gJ2Jsb2NrUXVvdGVQcmVmaXgnIHx8XG4gICAgICAgICAgICAgIHRhaWxFdmVudFsxXS50eXBlID09PSAnYmxvY2tRdW90ZVByZWZpeFdoaXRlc3BhY2UnIHx8XG4gICAgICAgICAgICAgIHRhaWxFdmVudFsxXS50eXBlID09PSAnYmxvY2tRdW90ZU1hcmtlcicgfHxcbiAgICAgICAgICAgICAgdGFpbEV2ZW50WzFdLnR5cGUgPT09ICdsaXN0SXRlbUluZGVudCdcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAvLyBFbXB0eVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZmlyc3RCbGFua0xpbmVJbmRleCAmJlxuICAgICAgICAgICAgKCFsaW5lSW5kZXggfHwgZmlyc3RCbGFua0xpbmVJbmRleCA8IGxpbmVJbmRleClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGxpc3RJdGVtLl9zcHJlYWQgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRml4IHBvc2l0aW9uLlxuICAgICAgICAgIGxpc3RJdGVtLmVuZCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIGxpbmVJbmRleCA/IGV2ZW50c1tsaW5lSW5kZXhdWzFdLnN0YXJ0IDogZXZlbnRbMV0uZW5kXG4gICAgICAgICAgKVxuICAgICAgICAgIGV2ZW50cy5zcGxpY2UobGluZUluZGV4IHx8IGluZGV4LCAwLCBbJ2V4aXQnLCBsaXN0SXRlbSwgZXZlbnRbMl1dKVxuICAgICAgICAgIGluZGV4KytcbiAgICAgICAgICBsZW5ndGgrK1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGxpc3QgaXRlbS5cbiAgICAgICAgaWYgKGV2ZW50WzFdLnR5cGUgPT09ICdsaXN0SXRlbVByZWZpeCcpIHtcbiAgICAgICAgICBsaXN0SXRlbSA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdsaXN0SXRlbScsXG4gICAgICAgICAgICBfc3ByZWFkOiBmYWxzZSxcbiAgICAgICAgICAgIHN0YXJ0OiBPYmplY3QuYXNzaWduKHt9LCBldmVudFsxXS5zdGFydCksXG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiB3ZeKAmWxsIGFkZCBgZW5kYCBpbiBhIHNlY29uZC5cbiAgICAgICAgICAgIGVuZDogdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGBsaXN0SXRlbWAgaXMgbW9zdCBkZWZpbml0ZWx5IGRlZmluZWQsIFRTLi4uXG4gICAgICAgICAgZXZlbnRzLnNwbGljZShpbmRleCwgMCwgWydlbnRlcicsIGxpc3RJdGVtLCBldmVudFsyXV0pXG4gICAgICAgICAgaW5kZXgrK1xuICAgICAgICAgIGxlbmd0aCsrXG4gICAgICAgICAgZmlyc3RCbGFua0xpbmVJbmRleCA9IHVuZGVmaW5lZFxuICAgICAgICAgIGF0TWFya2VyID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGV2ZW50c1tzdGFydF1bMV0uX3NwcmVhZCA9IGxpc3RTcHJlYWRcbiAgICByZXR1cm4gbGVuZ3RoXG4gIH1cblxuICAvKipcbiAgICogU2V0IGRhdGEuXG4gICAqXG4gICAqIEB0ZW1wbGF0ZSB7a2V5b2YgQ29tcGlsZURhdGF9IEtleVxuICAgKiAgIEZpZWxkIHR5cGUuXG4gICAqIEBwYXJhbSB7S2V5fSBrZXlcbiAgICogICBLZXkgb2YgZmllbGQuXG4gICAqIEBwYXJhbSB7Q29tcGlsZURhdGFbS2V5XX0gW3ZhbHVlXVxuICAgKiAgIE5ldyB2YWx1ZS5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqICAgTm90aGluZy5cbiAgICovXG4gIGZ1bmN0aW9uIHNldERhdGEoa2V5LCB2YWx1ZSkge1xuICAgIGRhdGFba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogR2V0IGRhdGEuXG4gICAqXG4gICAqIEB0ZW1wbGF0ZSB7a2V5b2YgQ29tcGlsZURhdGF9IEtleVxuICAgKiAgIEZpZWxkIHR5cGUuXG4gICAqIEBwYXJhbSB7S2V5fSBrZXlcbiAgICogICBLZXkgb2YgZmllbGQuXG4gICAqIEByZXR1cm5zIHtDb21waWxlRGF0YVtLZXldfVxuICAgKiAgIFZhbHVlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0RGF0YShrZXkpIHtcbiAgICByZXR1cm4gZGF0YVtrZXldXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIG9wZW5lciBoYW5kbGUuXG4gICAqXG4gICAqIEBwYXJhbSB7KHRva2VuOiBUb2tlbikgPT4gTm9kZX0gY3JlYXRlXG4gICAqICAgQ3JlYXRlIGEgbm9kZS5cbiAgICogQHBhcmFtIHtIYW5kbGV9IFthbmRdXG4gICAqICAgT3B0aW9uYWwgZnVuY3Rpb24gdG8gYWxzbyBydW4uXG4gICAqIEByZXR1cm5zIHtIYW5kbGV9XG4gICAqICAgSGFuZGxlLlxuICAgKi9cbiAgZnVuY3Rpb24gb3BlbmVyKGNyZWF0ZSwgYW5kKSB7XG4gICAgcmV0dXJuIG9wZW5cblxuICAgIC8qKlxuICAgICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICAgKiBAcGFyYW0ge1Rva2VufSB0b2tlblxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9wZW4odG9rZW4pIHtcbiAgICAgIGVudGVyLmNhbGwodGhpcywgY3JlYXRlKHRva2VuKSwgdG9rZW4pXG4gICAgICBpZiAoYW5kKSBhbmQuY2FsbCh0aGlzLCB0b2tlbilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIGJ1ZmZlcigpIHtcbiAgICB0aGlzLnN0YWNrLnB1c2goe1xuICAgICAgdHlwZTogJ2ZyYWdtZW50JyxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQHRlbXBsYXRlIHtOb2RlfSBLaW5kXG4gICAqICAgTm9kZSB0eXBlLlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqICAgQ29udGV4dC5cbiAgICogQHBhcmFtIHtLaW5kfSBub2RlXG4gICAqICAgTm9kZSB0byBlbnRlci5cbiAgICogQHBhcmFtIHtUb2tlbn0gdG9rZW5cbiAgICogICBDb3JyZXNwb25kaW5nIHRva2VuLlxuICAgKiBAcGFyYW0ge09uRW50ZXJFcnJvciB8IHVuZGVmaW5lZH0gW2Vycm9ySGFuZGxlcl1cbiAgICogICBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgdGhpcyB0b2tlbiBpcyBvcGVuLCBidXQgaXQgaXMgY2xvc2VkIGJ5IHNvbWV0aGluZyBlbHNlLlxuICAgKiBAcmV0dXJucyB7S2luZH1cbiAgICogICBUaGUgZ2l2ZW4gbm9kZS5cbiAgICovXG4gIGZ1bmN0aW9uIGVudGVyKG5vZGUsIHRva2VuLCBlcnJvckhhbmRsZXIpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBBc3N1bWUgYE5vZGVgIGNhbiBleGlzdCBhcyBhIGNoaWxkIG9mIGBwYXJlbnRgLlxuICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKG5vZGUpXG4gICAgdGhpcy5zdGFjay5wdXNoKG5vZGUpXG4gICAgdGhpcy50b2tlblN0YWNrLnB1c2goW3Rva2VuLCBlcnJvckhhbmRsZXJdKVxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGBlbmRgIHdpbGwgYmUgcGF0Y2hlZCBsYXRlci5cbiAgICBub2RlLnBvc2l0aW9uID0ge1xuICAgICAgc3RhcnQ6IHBvaW50KHRva2VuLnN0YXJ0KVxuICAgIH1cbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGNsb3NlciBoYW5kbGUuXG4gICAqXG4gICAqIEBwYXJhbSB7SGFuZGxlfSBbYW5kXVxuICAgKiAgIE9wdGlvbmFsIGZ1bmN0aW9uIHRvIGFsc28gcnVuLlxuICAgKiBAcmV0dXJucyB7SGFuZGxlfVxuICAgKiAgIEhhbmRsZS5cbiAgICovXG4gIGZ1bmN0aW9uIGNsb3NlcihhbmQpIHtcbiAgICByZXR1cm4gY2xvc2VcblxuICAgIC8qKlxuICAgICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICAgKiBAcGFyYW0ge1Rva2VufSB0b2tlblxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNsb3NlKHRva2VuKSB7XG4gICAgICBpZiAoYW5kKSBhbmQuY2FsbCh0aGlzLCB0b2tlbilcbiAgICAgIGV4aXQuY2FsbCh0aGlzLCB0b2tlbilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiAgIENvbnRleHQuXG4gICAqIEBwYXJhbSB7VG9rZW59IHRva2VuXG4gICAqICAgQ29ycmVzcG9uZGluZyB0b2tlbi5cbiAgICogQHBhcmFtIHtPbkV4aXRFcnJvciB8IHVuZGVmaW5lZH0gW29uRXhpdEVycm9yXVxuICAgKiAgIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSBhbm90aGVyIHRva2VuIGlzIG9wZW4uXG4gICAqIEByZXR1cm5zIHtOb2RlfVxuICAgKiAgIFRoZSBjbG9zZWQgbm9kZS5cbiAgICovXG4gIGZ1bmN0aW9uIGV4aXQodG9rZW4sIG9uRXhpdEVycm9yKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhY2sucG9wKClcbiAgICBjb25zdCBvcGVuID0gdGhpcy50b2tlblN0YWNrLnBvcCgpXG4gICAgaWYgKCFvcGVuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdDYW5ub3QgY2xvc2UgYCcgK1xuICAgICAgICAgIHRva2VuLnR5cGUgK1xuICAgICAgICAgICdgICgnICtcbiAgICAgICAgICBzdHJpbmdpZnlQb3NpdGlvbih7XG4gICAgICAgICAgICBzdGFydDogdG9rZW4uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHRva2VuLmVuZFxuICAgICAgICAgIH0pICtcbiAgICAgICAgICAnKTogaXTigJlzIG5vdCBvcGVuJ1xuICAgICAgKVxuICAgIH0gZWxzZSBpZiAob3BlblswXS50eXBlICE9PSB0b2tlbi50eXBlKSB7XG4gICAgICBpZiAob25FeGl0RXJyb3IpIHtcbiAgICAgICAgb25FeGl0RXJyb3IuY2FsbCh0aGlzLCB0b2tlbiwgb3BlblswXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBvcGVuWzFdIHx8IGRlZmF1bHRPbkVycm9yXG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCB0b2tlbiwgb3BlblswXSlcbiAgICAgIH1cbiAgICB9XG4gICAgbm9kZS5wb3NpdGlvbi5lbmQgPSBwb2ludCh0b2tlbi5lbmQpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiByZXN1bWUoKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nKHRoaXMuc3RhY2sucG9wKCkpXG4gIH1cblxuICAvL1xuICAvLyBIYW5kbGVycy5cbiAgLy9cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7SGFuZGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gb25lbnRlcmxpc3RvcmRlcmVkKCkge1xuICAgIHNldERhdGEoJ2V4cGVjdGluZ0ZpcnN0TGlzdEl0ZW1WYWx1ZScsIHRydWUpXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7SGFuZGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gb25lbnRlcmxpc3RpdGVtdmFsdWUodG9rZW4pIHtcbiAgICBpZiAoZ2V0RGF0YSgnZXhwZWN0aW5nRmlyc3RMaXN0SXRlbVZhbHVlJykpIHtcbiAgICAgIGNvbnN0IGFuY2VzdG9yID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDJdXG4gICAgICBhbmNlc3Rvci5zdGFydCA9IE51bWJlci5wYXJzZUludCh0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKSwgMTApXG4gICAgICBzZXREYXRhKCdleHBlY3RpbmdGaXJzdExpc3RJdGVtVmFsdWUnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtIYW5kbGV9XG4gICAqL1xuICBmdW5jdGlvbiBvbmV4aXRjb2RlZmVuY2VkZmVuY2VpbmZvKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICAgIG5vZGUubGFuZyA9IGRhdGFcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtIYW5kbGV9XG4gICAqL1xuICBmdW5jdGlvbiBvbmV4aXRjb2RlZmVuY2VkZmVuY2VtZXRhKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICAgIG5vZGUubWV0YSA9IGRhdGFcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtIYW5kbGV9XG4gICAqL1xuICBmdW5jdGlvbiBvbmV4aXRjb2RlZmVuY2VkZmVuY2UoKSB7XG4gICAgLy8gRXhpdCBpZiB0aGlzIGlzIHRoZSBjbG9zaW5nIGZlbmNlLlxuICAgIGlmIChnZXREYXRhKCdmbG93Q29kZUluc2lkZScpKSByZXR1cm5cbiAgICB0aGlzLmJ1ZmZlcigpXG4gICAgc2V0RGF0YSgnZmxvd0NvZGVJbnNpZGUnLCB0cnVlKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0hhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIG9uZXhpdGNvZGVmZW5jZWQoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gICAgbm9kZS52YWx1ZSA9IGRhdGEucmVwbGFjZSgvXihcXHI/XFxufFxccil8KFxccj9cXG58XFxyKSQvZywgJycpXG4gICAgc2V0RGF0YSgnZmxvd0NvZGVJbnNpZGUnKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0hhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIG9uZXhpdGNvZGVpbmRlbnRlZCgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICBub2RlLnZhbHVlID0gZGF0YS5yZXBsYWNlKC8oXFxyP1xcbnxcXHIpJC9nLCAnJylcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtIYW5kbGV9XG4gICAqL1xuICBmdW5jdGlvbiBvbmV4aXRkZWZpbml0aW9ubGFiZWxzdHJpbmcodG9rZW4pIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMucmVzdW1lKClcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gICAgbm9kZS5sYWJlbCA9IGxhYmVsXG4gICAgbm9kZS5pZGVudGlmaWVyID0gbm9ybWFsaXplSWRlbnRpZmllcihcbiAgICAgIHRoaXMuc2xpY2VTZXJpYWxpemUodG9rZW4pXG4gICAgKS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7SGFuZGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gb25leGl0ZGVmaW5pdGlvbnRpdGxlc3RyaW5nKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICAgIG5vZGUudGl0bGUgPSBkYXRhXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7SGFuZGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gb25leGl0ZGVmaW5pdGlvbmRlc3RpbmF0aW9uc3RyaW5nKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICAgIG5vZGUudXJsID0gZGF0YVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0hhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIG9uZXhpdGF0eGhlYWRpbmdzZXF1ZW5jZSh0b2tlbikge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICBpZiAoIW5vZGUuZGVwdGgpIHtcbiAgICAgIGNvbnN0IGRlcHRoID0gdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbikubGVuZ3RoXG4gICAgICBub2RlLmRlcHRoID0gZGVwdGhcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7SGFuZGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gb25leGl0c2V0ZXh0aGVhZGluZ3RleHQoKSB7XG4gICAgc2V0RGF0YSgnc2V0ZXh0SGVhZGluZ1NsdXJwTGluZUVuZGluZycsIHRydWUpXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7SGFuZGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gb25leGl0c2V0ZXh0aGVhZGluZ2xpbmVzZXF1ZW5jZSh0b2tlbikge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICBub2RlLmRlcHRoID0gdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbikuY2hhckNvZGVBdCgwKSA9PT0gNjEgPyAxIDogMlxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0hhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIG9uZXhpdHNldGV4dGhlYWRpbmcoKSB7XG4gICAgc2V0RGF0YSgnc2V0ZXh0SGVhZGluZ1NsdXJwTGluZUVuZGluZycpXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7SGFuZGxlfVxuICAgKi9cblxuICBmdW5jdGlvbiBvbmVudGVyZGF0YSh0b2tlbikge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICBsZXQgdGFpbCA9IG5vZGUuY2hpbGRyZW5bbm9kZS5jaGlsZHJlbi5sZW5ndGggLSAxXVxuICAgIGlmICghdGFpbCB8fCB0YWlsLnR5cGUgIT09ICd0ZXh0Jykge1xuICAgICAgLy8gQWRkIGEgbmV3IHRleHQgbm9kZS5cbiAgICAgIHRhaWwgPSB0ZXh0KClcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHdl4oCZbGwgYWRkIGBlbmRgIGxhdGVyLlxuICAgICAgdGFpbC5wb3NpdGlvbiA9IHtcbiAgICAgICAgc3RhcnQ6IHBvaW50KHRva2VuLnN0YXJ0KVxuICAgICAgfVxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogQXNzdW1lIGBwYXJlbnRgIGFjY2VwdHMgYHRleHRgLlxuICAgICAgbm9kZS5jaGlsZHJlbi5wdXNoKHRhaWwpXG4gICAgfVxuICAgIHRoaXMuc3RhY2sucHVzaCh0YWlsKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0hhbmRsZX1cbiAgICovXG5cbiAgZnVuY3Rpb24gb25leGl0ZGF0YSh0b2tlbikge1xuICAgIGNvbnN0IHRhaWwgPSB0aGlzLnN0YWNrLnBvcCgpXG4gICAgdGFpbC52YWx1ZSArPSB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKVxuICAgIHRhaWwucG9zaXRpb24uZW5kID0gcG9pbnQodG9rZW4uZW5kKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0hhbmRsZX1cbiAgICovXG5cbiAgZnVuY3Rpb24gb25leGl0bGluZWVuZGluZyh0b2tlbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICAvLyBJZiB3ZeKAmXJlIGF0IGEgaGFyZCBicmVhaywgaW5jbHVkZSB0aGUgbGluZSBlbmRpbmcgaW4gdGhlcmUuXG4gICAgaWYgKGdldERhdGEoJ2F0SGFyZEJyZWFrJykpIHtcbiAgICAgIGNvbnN0IHRhaWwgPSBjb250ZXh0LmNoaWxkcmVuW2NvbnRleHQuY2hpbGRyZW4ubGVuZ3RoIC0gMV1cbiAgICAgIHRhaWwucG9zaXRpb24uZW5kID0gcG9pbnQodG9rZW4uZW5kKVxuICAgICAgc2V0RGF0YSgnYXRIYXJkQnJlYWsnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChcbiAgICAgICFnZXREYXRhKCdzZXRleHRIZWFkaW5nU2x1cnBMaW5lRW5kaW5nJykgJiZcbiAgICAgIGNvbmZpZy5jYW5Db250YWluRW9scy5pbmNsdWRlcyhjb250ZXh0LnR5cGUpXG4gICAgKSB7XG4gICAgICBvbmVudGVyZGF0YS5jYWxsKHRoaXMsIHRva2VuKVxuICAgICAgb25leGl0ZGF0YS5jYWxsKHRoaXMsIHRva2VuKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtIYW5kbGV9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9uZXhpdGhhcmRicmVhaygpIHtcbiAgICBzZXREYXRhKCdhdEhhcmRCcmVhaycsIHRydWUpXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7SGFuZGxlfVxuICAgKi9cblxuICBmdW5jdGlvbiBvbmV4aXRodG1sZmxvdygpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICBub2RlLnZhbHVlID0gZGF0YVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0hhbmRsZX1cbiAgICovXG5cbiAgZnVuY3Rpb24gb25leGl0aHRtbHRleHQoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gICAgbm9kZS52YWx1ZSA9IGRhdGFcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtIYW5kbGV9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9uZXhpdGNvZGV0ZXh0KCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICAgIG5vZGUudmFsdWUgPSBkYXRhXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7SGFuZGxlfVxuICAgKi9cblxuICBmdW5jdGlvbiBvbmV4aXRsaW5rKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICAvLyBOb3RlOiB0aGVyZSBhcmUgYWxzbyBgaWRlbnRpZmllcmAgYW5kIGBsYWJlbGAgZmllbGRzIG9uIHRoaXMgbGluayBub2RlIVxuICAgIC8vIFRoZXNlIGFyZSB1c2VkIC8gY2xlYW5lZCBoZXJlLlxuICAgIC8vIFRvIGRvOiBjbGVhbi5cbiAgICBpZiAoZ2V0RGF0YSgnaW5SZWZlcmVuY2UnKSkge1xuICAgICAgLyoqIEB0eXBlIHtSZWZlcmVuY2VUeXBlfSAqL1xuICAgICAgY29uc3QgcmVmZXJlbmNlVHlwZSA9IGdldERhdGEoJ3JlZmVyZW5jZVR5cGUnKSB8fCAnc2hvcnRjdXQnXG4gICAgICBub2RlLnR5cGUgKz0gJ1JlZmVyZW5jZSdcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IG11dGF0ZS5cbiAgICAgIG5vZGUucmVmZXJlbmNlVHlwZSA9IHJlZmVyZW5jZVR5cGVcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IG11dGF0ZS5cbiAgICAgIGRlbGV0ZSBub2RlLnVybFxuICAgICAgZGVsZXRlIG5vZGUudGl0bGVcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogbXV0YXRlLlxuICAgICAgZGVsZXRlIG5vZGUuaWRlbnRpZmllclxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogbXV0YXRlLlxuICAgICAgZGVsZXRlIG5vZGUubGFiZWxcbiAgICB9XG4gICAgc2V0RGF0YSgncmVmZXJlbmNlVHlwZScpXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7SGFuZGxlfVxuICAgKi9cblxuICBmdW5jdGlvbiBvbmV4aXRpbWFnZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gICAgLy8gTm90ZTogdGhlcmUgYXJlIGFsc28gYGlkZW50aWZpZXJgIGFuZCBgbGFiZWxgIGZpZWxkcyBvbiB0aGlzIGxpbmsgbm9kZSFcbiAgICAvLyBUaGVzZSBhcmUgdXNlZCAvIGNsZWFuZWQgaGVyZS5cbiAgICAvLyBUbyBkbzogY2xlYW4uXG4gICAgaWYgKGdldERhdGEoJ2luUmVmZXJlbmNlJykpIHtcbiAgICAgIC8qKiBAdHlwZSB7UmVmZXJlbmNlVHlwZX0gKi9cbiAgICAgIGNvbnN0IHJlZmVyZW5jZVR5cGUgPSBnZXREYXRhKCdyZWZlcmVuY2VUeXBlJykgfHwgJ3Nob3J0Y3V0J1xuICAgICAgbm9kZS50eXBlICs9ICdSZWZlcmVuY2UnXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBtdXRhdGUuXG4gICAgICBub2RlLnJlZmVyZW5jZVR5cGUgPSByZWZlcmVuY2VUeXBlXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBtdXRhdGUuXG4gICAgICBkZWxldGUgbm9kZS51cmxcbiAgICAgIGRlbGV0ZSBub2RlLnRpdGxlXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IG11dGF0ZS5cbiAgICAgIGRlbGV0ZSBub2RlLmlkZW50aWZpZXJcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IG11dGF0ZS5cbiAgICAgIGRlbGV0ZSBub2RlLmxhYmVsXG4gICAgfVxuICAgIHNldERhdGEoJ3JlZmVyZW5jZVR5cGUnKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0hhbmRsZX1cbiAgICovXG5cbiAgZnVuY3Rpb24gb25leGl0bGFiZWx0ZXh0KHRva2VuKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbilcbiAgICBjb25zdCBhbmNlc3RvciA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAyXVxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHN0YXNoIHRoaXMgb24gdGhlIG5vZGUsIGFzIGl0IG1pZ2h0IGJlY29tZSBhIHJlZmVyZW5jZVxuICAgIC8vIGxhdGVyLlxuICAgIGFuY2VzdG9yLmxhYmVsID0gZGVjb2RlU3RyaW5nKHN0cmluZylcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBzYW1lIGFzIGFib3ZlLlxuICAgIGFuY2VzdG9yLmlkZW50aWZpZXIgPSBub3JtYWxpemVJZGVudGlmaWVyKHN0cmluZykudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0hhbmRsZX1cbiAgICovXG5cbiAgZnVuY3Rpb24gb25leGl0bGFiZWwoKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMucmVzdW1lKClcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gICAgLy8gQXNzdW1lIGEgcmVmZXJlbmNlLlxuICAgIHNldERhdGEoJ2luUmVmZXJlbmNlJywgdHJ1ZSlcbiAgICBpZiAobm9kZS50eXBlID09PSAnbGluaycpIHtcbiAgICAgIC8qKiBAdHlwZSB7QXJyYXk8U3RhdGljUGhyYXNpbmdDb250ZW50Pn0gKi9cbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IEFzc3VtZSBzdGF0aWMgcGhyYXNpbmcgY29udGVudC5cbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gZnJhZ21lbnQuY2hpbGRyZW5cbiAgICAgIG5vZGUuY2hpbGRyZW4gPSBjaGlsZHJlblxuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLmFsdCA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0hhbmRsZX1cbiAgICovXG5cbiAgZnVuY3Rpb24gb25leGl0cmVzb3VyY2VkZXN0aW5hdGlvbnN0cmluZygpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICBub2RlLnVybCA9IGRhdGFcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtIYW5kbGV9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9uZXhpdHJlc291cmNldGl0bGVzdHJpbmcoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gICAgbm9kZS50aXRsZSA9IGRhdGFcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtIYW5kbGV9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9uZXhpdHJlc291cmNlKCkge1xuICAgIHNldERhdGEoJ2luUmVmZXJlbmNlJylcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtIYW5kbGV9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9uZW50ZXJyZWZlcmVuY2UoKSB7XG4gICAgc2V0RGF0YSgncmVmZXJlbmNlVHlwZScsICdjb2xsYXBzZWQnKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0hhbmRsZX1cbiAgICovXG5cbiAgZnVuY3Rpb24gb25leGl0cmVmZXJlbmNlc3RyaW5nKHRva2VuKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnJlc3VtZSgpXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHN0YXNoIHRoaXMgb24gdGhlIG5vZGUsIGFzIGl0IG1pZ2h0IGJlY29tZSBhIHJlZmVyZW5jZVxuICAgIC8vIGxhdGVyLlxuICAgIG5vZGUubGFiZWwgPSBsYWJlbFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHNhbWUgYXMgYWJvdmUuXG4gICAgbm9kZS5pZGVudGlmaWVyID0gbm9ybWFsaXplSWRlbnRpZmllcihcbiAgICAgIHRoaXMuc2xpY2VTZXJpYWxpemUodG9rZW4pXG4gICAgKS50b0xvd2VyQ2FzZSgpXG4gICAgc2V0RGF0YSgncmVmZXJlbmNlVHlwZScsICdmdWxsJylcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtIYW5kbGV9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9uZXhpdGNoYXJhY3RlcnJlZmVyZW5jZW1hcmtlcih0b2tlbikge1xuICAgIHNldERhdGEoJ2NoYXJhY3RlclJlZmVyZW5jZVR5cGUnLCB0b2tlbi50eXBlKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0hhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIG9uZXhpdGNoYXJhY3RlcnJlZmVyZW5jZXZhbHVlKHRva2VuKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc2xpY2VTZXJpYWxpemUodG9rZW4pXG4gICAgY29uc3QgdHlwZSA9IGdldERhdGEoJ2NoYXJhY3RlclJlZmVyZW5jZVR5cGUnKVxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIGxldCB2YWx1ZVxuICAgIGlmICh0eXBlKSB7XG4gICAgICB2YWx1ZSA9IGRlY29kZU51bWVyaWNDaGFyYWN0ZXJSZWZlcmVuY2UoXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHR5cGUgPT09ICdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJOdW1lcmljJyA/IDEwIDogMTZcbiAgICAgIClcbiAgICAgIHNldERhdGEoJ2NoYXJhY3RlclJlZmVyZW5jZVR5cGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBkZWNvZGVOYW1lZENoYXJhY3RlclJlZmVyZW5jZShkYXRhKVxuICAgICAgdmFsdWUgPSByZXN1bHRcbiAgICB9XG4gICAgY29uc3QgdGFpbCA9IHRoaXMuc3RhY2sucG9wKClcbiAgICB0YWlsLnZhbHVlICs9IHZhbHVlXG4gICAgdGFpbC5wb3NpdGlvbi5lbmQgPSBwb2ludCh0b2tlbi5lbmQpXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7SGFuZGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gb25leGl0YXV0b2xpbmtwcm90b2NvbCh0b2tlbikge1xuICAgIG9uZXhpdGRhdGEuY2FsbCh0aGlzLCB0b2tlbilcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gICAgbm9kZS51cmwgPSB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0hhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIG9uZXhpdGF1dG9saW5rZW1haWwodG9rZW4pIHtcbiAgICBvbmV4aXRkYXRhLmNhbGwodGhpcywgdG9rZW4pXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICAgIG5vZGUudXJsID0gJ21haWx0bzonICsgdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbilcbiAgfVxuXG4gIC8vXG4gIC8vIENyZWF0ZXJzLlxuICAvL1xuXG4gIC8qKiBAcmV0dXJucyB7QmxvY2txdW90ZX0gKi9cbiAgZnVuY3Rpb24gYmxvY2tRdW90ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2Jsb2NrcXVvdGUnLFxuICAgICAgY2hpbGRyZW46IFtdXG4gICAgfVxuICB9XG5cbiAgLyoqIEByZXR1cm5zIHtDb2RlfSAqL1xuICBmdW5jdGlvbiBjb2RlRmxvdygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2NvZGUnLFxuICAgICAgbGFuZzogbnVsbCxcbiAgICAgIG1ldGE6IG51bGwsXG4gICAgICB2YWx1ZTogJydcbiAgICB9XG4gIH1cblxuICAvKiogQHJldHVybnMge0lubGluZUNvZGV9ICovXG4gIGZ1bmN0aW9uIGNvZGVUZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnaW5saW5lQ29kZScsXG4gICAgICB2YWx1ZTogJydcbiAgICB9XG4gIH1cblxuICAvKiogQHJldHVybnMge0RlZmluaXRpb259ICovXG4gIGZ1bmN0aW9uIGRlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdkZWZpbml0aW9uJyxcbiAgICAgIGlkZW50aWZpZXI6ICcnLFxuICAgICAgbGFiZWw6IG51bGwsXG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIHVybDogJydcbiAgICB9XG4gIH1cblxuICAvKiogQHJldHVybnMge0VtcGhhc2lzfSAqL1xuICBmdW5jdGlvbiBlbXBoYXNpcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2VtcGhhc2lzJyxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH1cbiAgfVxuXG4gIC8qKiBAcmV0dXJucyB7SGVhZGluZ30gKi9cbiAgZnVuY3Rpb24gaGVhZGluZygpIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGBkZXB0aGAgd2lsbCBiZSBzZXQgbGF0ZXIuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdoZWFkaW5nJyxcbiAgICAgIGRlcHRoOiB1bmRlZmluZWQsXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9XG4gIH1cblxuICAvKiogQHJldHVybnMge0JyZWFrfSAqL1xuICBmdW5jdGlvbiBoYXJkQnJlYWsoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdicmVhaydcbiAgICB9XG4gIH1cblxuICAvKiogQHJldHVybnMge0hUTUx9ICovXG4gIGZ1bmN0aW9uIGh0bWwoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdodG1sJyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcmV0dXJucyB7SW1hZ2V9ICovXG4gIGZ1bmN0aW9uIGltYWdlKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgdGl0bGU6IG51bGwsXG4gICAgICB1cmw6ICcnLFxuICAgICAgYWx0OiBudWxsXG4gICAgfVxuICB9XG5cbiAgLyoqIEByZXR1cm5zIHtMaW5rfSAqL1xuICBmdW5jdGlvbiBsaW5rKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIHVybDogJycsXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUb2tlbn0gdG9rZW5cbiAgICogQHJldHVybnMge0xpc3R9XG4gICAqL1xuICBmdW5jdGlvbiBsaXN0KHRva2VuKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdsaXN0JyxcbiAgICAgIG9yZGVyZWQ6IHRva2VuLnR5cGUgPT09ICdsaXN0T3JkZXJlZCcsXG4gICAgICBzdGFydDogbnVsbCxcbiAgICAgIHNwcmVhZDogdG9rZW4uX3NwcmVhZCxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1Rva2VufSB0b2tlblxuICAgKiBAcmV0dXJucyB7TGlzdEl0ZW19XG4gICAqL1xuICBmdW5jdGlvbiBsaXN0SXRlbSh0b2tlbikge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnbGlzdEl0ZW0nLFxuICAgICAgc3ByZWFkOiB0b2tlbi5fc3ByZWFkLFxuICAgICAgY2hlY2tlZDogbnVsbCxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH1cbiAgfVxuXG4gIC8qKiBAcmV0dXJucyB7UGFyYWdyYXBofSAqL1xuICBmdW5jdGlvbiBwYXJhZ3JhcGgoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgICAgY2hpbGRyZW46IFtdXG4gICAgfVxuICB9XG5cbiAgLyoqIEByZXR1cm5zIHtTdHJvbmd9ICovXG4gIGZ1bmN0aW9uIHN0cm9uZygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3N0cm9uZycsXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9XG4gIH1cblxuICAvKiogQHJldHVybnMge1RleHR9ICovXG4gIGZ1bmN0aW9uIHRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcmV0dXJucyB7VGhlbWF0aWNCcmVha30gKi9cbiAgZnVuY3Rpb24gdGhlbWF0aWNCcmVhaygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3RoZW1hdGljQnJlYWsnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ29weSBhIHBvaW50LWxpa2UgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtQb2ludH0gZFxuICogICBQb2ludC1saWtlIHZhbHVlLlxuICogQHJldHVybnMge1BvaW50fVxuICogICB1bmlzdCBwb2ludC5cbiAqL1xuZnVuY3Rpb24gcG9pbnQoZCkge1xuICByZXR1cm4ge1xuICAgIGxpbmU6IGQubGluZSxcbiAgICBjb2x1bW46IGQuY29sdW1uLFxuICAgIG9mZnNldDogZC5vZmZzZXRcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Q29uZmlnfSBjb21iaW5lZFxuICogQHBhcmFtIHtBcnJheTxFeHRlbnNpb24gfCBBcnJheTxFeHRlbnNpb24+Pn0gZXh0ZW5zaW9uc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGNvbmZpZ3VyZShjb21iaW5lZCwgZXh0ZW5zaW9ucykge1xuICBsZXQgaW5kZXggPSAtMVxuICB3aGlsZSAoKytpbmRleCA8IGV4dGVuc2lvbnMubGVuZ3RoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBleHRlbnNpb25zW2luZGV4XVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgY29uZmlndXJlKGNvbWJpbmVkLCB2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZXh0ZW5zaW9uKGNvbWJpbmVkLCB2YWx1ZSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0NvbmZpZ30gY29tYmluZWRcbiAqIEBwYXJhbSB7RXh0ZW5zaW9ufSBleHRlbnNpb25cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBleHRlbnNpb24oY29tYmluZWQsIGV4dGVuc2lvbikge1xuICAvKiogQHR5cGUge2tleW9mIEV4dGVuc2lvbn0gKi9cbiAgbGV0IGtleVxuICBmb3IgKGtleSBpbiBleHRlbnNpb24pIHtcbiAgICBpZiAob3duLmNhbGwoZXh0ZW5zaW9uLCBrZXkpKSB7XG4gICAgICBpZiAoa2V5ID09PSAnY2FuQ29udGFpbkVvbHMnKSB7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZXh0ZW5zaW9uW2tleV1cbiAgICAgICAgaWYgKHJpZ2h0KSB7XG4gICAgICAgICAgY29tYmluZWRba2V5XS5wdXNoKC4uLnJpZ2h0KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3RyYW5zZm9ybXMnKSB7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZXh0ZW5zaW9uW2tleV1cbiAgICAgICAgaWYgKHJpZ2h0KSB7XG4gICAgICAgICAgY29tYmluZWRba2V5XS5wdXNoKC4uLnJpZ2h0KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2VudGVyJyB8fCBrZXkgPT09ICdleGl0Jykge1xuICAgICAgICBjb25zdCByaWdodCA9IGV4dGVuc2lvbltrZXldXG4gICAgICAgIGlmIChyaWdodCkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oY29tYmluZWRba2V5XSwgcmlnaHQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqIEB0eXBlIHtPbkVudGVyRXJyb3J9ICovXG5mdW5jdGlvbiBkZWZhdWx0T25FcnJvcihsZWZ0LCByaWdodCkge1xuICBpZiAobGVmdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdDYW5ub3QgY2xvc2UgYCcgK1xuICAgICAgICBsZWZ0LnR5cGUgK1xuICAgICAgICAnYCAoJyArXG4gICAgICAgIHN0cmluZ2lmeVBvc2l0aW9uKHtcbiAgICAgICAgICBzdGFydDogbGVmdC5zdGFydCxcbiAgICAgICAgICBlbmQ6IGxlZnQuZW5kXG4gICAgICAgIH0pICtcbiAgICAgICAgJyk6IGEgZGlmZmVyZW50IHRva2VuIChgJyArXG4gICAgICAgIHJpZ2h0LnR5cGUgK1xuICAgICAgICAnYCwgJyArXG4gICAgICAgIHN0cmluZ2lmeVBvc2l0aW9uKHtcbiAgICAgICAgICBzdGFydDogcmlnaHQuc3RhcnQsXG4gICAgICAgICAgZW5kOiByaWdodC5lbmRcbiAgICAgICAgfSkgK1xuICAgICAgICAnKSBpcyBvcGVuJ1xuICAgIClcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQ2Fubm90IGNsb3NlIGRvY3VtZW50LCBhIHRva2VuIChgJyArXG4gICAgICAgIHJpZ2h0LnR5cGUgK1xuICAgICAgICAnYCwgJyArXG4gICAgICAgIHN0cmluZ2lmeVBvc2l0aW9uKHtcbiAgICAgICAgICBzdGFydDogcmlnaHQuc3RhcnQsXG4gICAgICAgICAgZW5kOiByaWdodC5lbmRcbiAgICAgICAgfSkgK1xuICAgICAgICAnKSBpcyBzdGlsbCBvcGVuJ1xuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IHsgbCBhcyBsb2csIE0gYXMgZGVjb2RlRW50aXRpZXMgfSBmcm9tIFwiLi9tZXJtYWlkLWI1ODYwYjU0LmpzXCI7XG5pbXBvcnQgeyBmcm9tTWFya2Rvd24gfSBmcm9tIFwibWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duXCI7XG5pbXBvcnQgeyBkZWRlbnQgfSBmcm9tIFwidHMtZGVkZW50XCI7XG5mdW5jdGlvbiBwcmVwcm9jZXNzTWFya2Rvd24obWFya2Rvd24pIHtcbiAgY29uc3Qgd2l0aG91dE11bHRpcGxlTmV3bGluZXMgPSBtYXJrZG93bi5yZXBsYWNlKC9cXG57Mix9L2csIFwiXFxuXCIpO1xuICBjb25zdCB3aXRob3V0RXh0cmFTcGFjZXMgPSBkZWRlbnQod2l0aG91dE11bHRpcGxlTmV3bGluZXMpO1xuICByZXR1cm4gd2l0aG91dEV4dHJhU3BhY2VzO1xufVxuZnVuY3Rpb24gbWFya2Rvd25Ub0xpbmVzKG1hcmtkb3duKSB7XG4gIGNvbnN0IHByZXByb2Nlc3NlZE1hcmtkb3duID0gcHJlcHJvY2Vzc01hcmtkb3duKG1hcmtkb3duKTtcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gZnJvbU1hcmtkb3duKHByZXByb2Nlc3NlZE1hcmtkb3duKTtcbiAgY29uc3QgbGluZXMgPSBbW11dO1xuICBsZXQgY3VycmVudExpbmUgPSAwO1xuICBmdW5jdGlvbiBwcm9jZXNzTm9kZShub2RlLCBwYXJlbnRUeXBlID0gXCJub3JtYWxcIikge1xuICAgIGlmIChub2RlLnR5cGUgPT09IFwidGV4dFwiKSB7XG4gICAgICBjb25zdCB0ZXh0TGluZXMgPSBub2RlLnZhbHVlLnNwbGl0KFwiXFxuXCIpO1xuICAgICAgdGV4dExpbmVzLmZvckVhY2goKHRleHRMaW5lLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcbiAgICAgICAgICBjdXJyZW50TGluZSsrO1xuICAgICAgICAgIGxpbmVzLnB1c2goW10pO1xuICAgICAgICB9XG4gICAgICAgIHRleHRMaW5lLnNwbGl0KFwiIFwiKS5mb3JFYWNoKCh3b3JkKSA9PiB7XG4gICAgICAgICAgaWYgKHdvcmQpIHtcbiAgICAgICAgICAgIGxpbmVzW2N1cnJlbnRMaW5lXS5wdXNoKHsgY29udGVudDogd29yZCwgdHlwZTogcGFyZW50VHlwZSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09IFwic3Ryb25nXCIgfHwgbm9kZS50eXBlID09PSBcImVtcGhhc2lzXCIpIHtcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY29udGVudE5vZGUpID0+IHtcbiAgICAgICAgcHJvY2Vzc05vZGUoY29udGVudE5vZGUsIG5vZGUudHlwZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgY2hpbGRyZW4uZm9yRWFjaCgodHJlZU5vZGUpID0+IHtcbiAgICBpZiAodHJlZU5vZGUudHlwZSA9PT0gXCJwYXJhZ3JhcGhcIikge1xuICAgICAgdHJlZU5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY29udGVudE5vZGUpID0+IHtcbiAgICAgICAgcHJvY2Vzc05vZGUoY29udGVudE5vZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGxpbmVzO1xufVxuZnVuY3Rpb24gbWFya2Rvd25Ub0hUTUwobWFya2Rvd24pIHtcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gZnJvbU1hcmtkb3duKG1hcmtkb3duKTtcbiAgZnVuY3Rpb24gb3V0cHV0KG5vZGUpIHtcbiAgICBpZiAobm9kZS50eXBlID09PSBcInRleHRcIikge1xuICAgICAgcmV0dXJuIG5vZGUudmFsdWUucmVwbGFjZSgvXFxuL2csIFwiPGJyLz5cIik7XG4gICAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09IFwic3Ryb25nXCIpIHtcbiAgICAgIHJldHVybiBgPHN0cm9uZz4ke25vZGUuY2hpbGRyZW4ubWFwKG91dHB1dCkuam9pbihcIlwiKX08L3N0cm9uZz5gO1xuICAgIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSBcImVtcGhhc2lzXCIpIHtcbiAgICAgIHJldHVybiBgPGVtPiR7bm9kZS5jaGlsZHJlbi5tYXAob3V0cHV0KS5qb2luKFwiXCIpfTwvZW0+YDtcbiAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gXCJwYXJhZ3JhcGhcIikge1xuICAgICAgcmV0dXJuIGA8cD4ke25vZGUuY2hpbGRyZW4ubWFwKG91dHB1dCkuam9pbihcIlwiKX08L3A+YDtcbiAgICB9XG4gICAgcmV0dXJuIGBVbnN1cHBvcnRlZCBtYXJrZG93bjogJHtub2RlLnR5cGV9YDtcbiAgfVxuICByZXR1cm4gY2hpbGRyZW4ubWFwKG91dHB1dCkuam9pbihcIlwiKTtcbn1cbmZ1bmN0aW9uIHNwbGl0VGV4dFRvQ2hhcnModGV4dCkge1xuICBpZiAoSW50bC5TZWdtZW50ZXIpIHtcbiAgICByZXR1cm4gWy4uLm5ldyBJbnRsLlNlZ21lbnRlcigpLnNlZ21lbnQodGV4dCldLm1hcCgocykgPT4gcy5zZWdtZW50KTtcbiAgfVxuICByZXR1cm4gWy4uLnRleHRdO1xufVxuZnVuY3Rpb24gc3BsaXRXb3JkVG9GaXRXaWR0aChjaGVja0ZpdCwgd29yZCkge1xuICBjb25zdCBjaGFyYWN0ZXJzID0gc3BsaXRUZXh0VG9DaGFycyh3b3JkLmNvbnRlbnQpO1xuICByZXR1cm4gc3BsaXRXb3JkVG9GaXRXaWR0aFJlY3Vyc2lvbihjaGVja0ZpdCwgW10sIGNoYXJhY3RlcnMsIHdvcmQudHlwZSk7XG59XG5mdW5jdGlvbiBzcGxpdFdvcmRUb0ZpdFdpZHRoUmVjdXJzaW9uKGNoZWNrRml0LCB1c2VkQ2hhcnMsIHJlbWFpbmluZ0NoYXJzLCB0eXBlKSB7XG4gIGlmIChyZW1haW5pbmdDaGFycy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW1xuICAgICAgeyBjb250ZW50OiB1c2VkQ2hhcnMuam9pbihcIlwiKSwgdHlwZSB9LFxuICAgICAgeyBjb250ZW50OiBcIlwiLCB0eXBlIH1cbiAgICBdO1xuICB9XG4gIGNvbnN0IFtuZXh0Q2hhciwgLi4ucmVzdF0gPSByZW1haW5pbmdDaGFycztcbiAgY29uc3QgbmV3V29yZCA9IFsuLi51c2VkQ2hhcnMsIG5leHRDaGFyXTtcbiAgaWYgKGNoZWNrRml0KFt7IGNvbnRlbnQ6IG5ld1dvcmQuam9pbihcIlwiKSwgdHlwZSB9XSkpIHtcbiAgICByZXR1cm4gc3BsaXRXb3JkVG9GaXRXaWR0aFJlY3Vyc2lvbihjaGVja0ZpdCwgbmV3V29yZCwgcmVzdCwgdHlwZSk7XG4gIH1cbiAgaWYgKHVzZWRDaGFycy5sZW5ndGggPT09IDAgJiYgbmV4dENoYXIpIHtcbiAgICB1c2VkQ2hhcnMucHVzaChuZXh0Q2hhcik7XG4gICAgcmVtYWluaW5nQ2hhcnMuc2hpZnQoKTtcbiAgfVxuICByZXR1cm4gW1xuICAgIHsgY29udGVudDogdXNlZENoYXJzLmpvaW4oXCJcIiksIHR5cGUgfSxcbiAgICB7IGNvbnRlbnQ6IHJlbWFpbmluZ0NoYXJzLmpvaW4oXCJcIiksIHR5cGUgfVxuICBdO1xufVxuZnVuY3Rpb24gc3BsaXRMaW5lVG9GaXRXaWR0aChsaW5lLCBjaGVja0ZpdCkge1xuICBpZiAobGluZS5zb21lKCh7IGNvbnRlbnQgfSkgPT4gY29udGVudC5pbmNsdWRlcyhcIlxcblwiKSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJzcGxpdExpbmVUb0ZpdFdpZHRoIGRvZXMgbm90IHN1cHBvcnQgbmV3bGluZXMgaW4gdGhlIGxpbmVcIik7XG4gIH1cbiAgcmV0dXJuIHNwbGl0TGluZVRvRml0V2lkdGhSZWN1cnNpb24obGluZSwgY2hlY2tGaXQpO1xufVxuZnVuY3Rpb24gc3BsaXRMaW5lVG9GaXRXaWR0aFJlY3Vyc2lvbih3b3JkcywgY2hlY2tGaXQsIGxpbmVzID0gW10sIG5ld0xpbmUgPSBbXSkge1xuICBpZiAod29yZHMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKG5ld0xpbmUubGVuZ3RoID4gMCkge1xuICAgICAgbGluZXMucHVzaChuZXdMaW5lKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbmVzLmxlbmd0aCA+IDAgPyBsaW5lcyA6IFtdO1xuICB9XG4gIGxldCBqb2luZXIgPSBcIlwiO1xuICBpZiAod29yZHNbMF0uY29udGVudCA9PT0gXCIgXCIpIHtcbiAgICBqb2luZXIgPSBcIiBcIjtcbiAgICB3b3Jkcy5zaGlmdCgpO1xuICB9XG4gIGNvbnN0IG5leHRXb3JkID0gd29yZHMuc2hpZnQoKSA/PyB7IGNvbnRlbnQ6IFwiIFwiLCB0eXBlOiBcIm5vcm1hbFwiIH07XG4gIGNvbnN0IGxpbmVXaXRoTmV4dFdvcmQgPSBbLi4ubmV3TGluZV07XG4gIGlmIChqb2luZXIgIT09IFwiXCIpIHtcbiAgICBsaW5lV2l0aE5leHRXb3JkLnB1c2goeyBjb250ZW50OiBqb2luZXIsIHR5cGU6IFwibm9ybWFsXCIgfSk7XG4gIH1cbiAgbGluZVdpdGhOZXh0V29yZC5wdXNoKG5leHRXb3JkKTtcbiAgaWYgKGNoZWNrRml0KGxpbmVXaXRoTmV4dFdvcmQpKSB7XG4gICAgcmV0dXJuIHNwbGl0TGluZVRvRml0V2lkdGhSZWN1cnNpb24od29yZHMsIGNoZWNrRml0LCBsaW5lcywgbGluZVdpdGhOZXh0V29yZCk7XG4gIH1cbiAgaWYgKG5ld0xpbmUubGVuZ3RoID4gMCkge1xuICAgIGxpbmVzLnB1c2gobmV3TGluZSk7XG4gICAgd29yZHMudW5zaGlmdChuZXh0V29yZCk7XG4gIH0gZWxzZSBpZiAobmV4dFdvcmQuY29udGVudCkge1xuICAgIGNvbnN0IFtsaW5lLCByZXN0XSA9IHNwbGl0V29yZFRvRml0V2lkdGgoY2hlY2tGaXQsIG5leHRXb3JkKTtcbiAgICBsaW5lcy5wdXNoKFtsaW5lXSk7XG4gICAgaWYgKHJlc3QuY29udGVudCkge1xuICAgICAgd29yZHMudW5zaGlmdChyZXN0KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNwbGl0TGluZVRvRml0V2lkdGhSZWN1cnNpb24od29yZHMsIGNoZWNrRml0LCBsaW5lcyk7XG59XG5mdW5jdGlvbiBhcHBseVN0eWxlKGRvbSwgc3R5bGVGbikge1xuICBpZiAoc3R5bGVGbikge1xuICAgIGRvbS5hdHRyKFwic3R5bGVcIiwgc3R5bGVGbik7XG4gIH1cbn1cbmZ1bmN0aW9uIGFkZEh0bWxTcGFuKGVsZW1lbnQsIG5vZGUsIHdpZHRoLCBjbGFzc2VzLCBhZGRCYWNrZ3JvdW5kID0gZmFsc2UpIHtcbiAgY29uc3QgZm8gPSBlbGVtZW50LmFwcGVuZChcImZvcmVpZ25PYmplY3RcIik7XG4gIGNvbnN0IGRpdiA9IGZvLmFwcGVuZChcInhodG1sOmRpdlwiKTtcbiAgY29uc3QgbGFiZWwgPSBub2RlLmxhYmVsO1xuICBjb25zdCBsYWJlbENsYXNzID0gbm9kZS5pc05vZGUgPyBcIm5vZGVMYWJlbFwiIDogXCJlZGdlTGFiZWxcIjtcbiAgZGl2Lmh0bWwoXG4gICAgYFxuICAgIDxzcGFuIGNsYXNzPVwiJHtsYWJlbENsYXNzfSAke2NsYXNzZXN9XCIgYCArIChub2RlLmxhYmVsU3R5bGUgPyAnc3R5bGU9XCInICsgbm9kZS5sYWJlbFN0eWxlICsgJ1wiJyA6IFwiXCIpICsgXCI+XCIgKyBsYWJlbCArIFwiPC9zcGFuPlwiXG4gICk7XG4gIGFwcGx5U3R5bGUoZGl2LCBub2RlLmxhYmVsU3R5bGUpO1xuICBkaXYuc3R5bGUoXCJkaXNwbGF5XCIsIFwidGFibGUtY2VsbFwiKTtcbiAgZGl2LnN0eWxlKFwid2hpdGUtc3BhY2VcIiwgXCJub3dyYXBcIik7XG4gIGRpdi5zdHlsZShcIm1heC13aWR0aFwiLCB3aWR0aCArIFwicHhcIik7XG4gIGRpdi5hdHRyKFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIpO1xuICBpZiAoYWRkQmFja2dyb3VuZCkge1xuICAgIGRpdi5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbEJrZ1wiKTtcbiAgfVxuICBsZXQgYmJveCA9IGRpdi5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGlmIChiYm94LndpZHRoID09PSB3aWR0aCkge1xuICAgIGRpdi5zdHlsZShcImRpc3BsYXlcIiwgXCJ0YWJsZVwiKTtcbiAgICBkaXYuc3R5bGUoXCJ3aGl0ZS1zcGFjZVwiLCBcImJyZWFrLXNwYWNlc1wiKTtcbiAgICBkaXYuc3R5bGUoXCJ3aWR0aFwiLCB3aWR0aCArIFwicHhcIik7XG4gICAgYmJveCA9IGRpdi5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cbiAgZm8uc3R5bGUoXCJ3aWR0aFwiLCBiYm94LndpZHRoKTtcbiAgZm8uc3R5bGUoXCJoZWlnaHRcIiwgYmJveC5oZWlnaHQpO1xuICByZXR1cm4gZm8ubm9kZSgpO1xufVxuZnVuY3Rpb24gY3JlYXRlVHNwYW4odGV4dEVsZW1lbnQsIGxpbmVJbmRleCwgbGluZUhlaWdodCkge1xuICByZXR1cm4gdGV4dEVsZW1lbnQuYXBwZW5kKFwidHNwYW5cIikuYXR0cihcImNsYXNzXCIsIFwidGV4dC1vdXRlci10c3BhblwiKS5hdHRyKFwieFwiLCAwKS5hdHRyKFwieVwiLCBsaW5lSW5kZXggKiBsaW5lSGVpZ2h0IC0gMC4xICsgXCJlbVwiKS5hdHRyKFwiZHlcIiwgbGluZUhlaWdodCArIFwiZW1cIik7XG59XG5mdW5jdGlvbiBjb21wdXRlV2lkdGhPZlRleHQocGFyZW50Tm9kZSwgbGluZUhlaWdodCwgbGluZSkge1xuICBjb25zdCB0ZXN0RWxlbWVudCA9IHBhcmVudE5vZGUuYXBwZW5kKFwidGV4dFwiKTtcbiAgY29uc3QgdGVzdFNwYW4gPSBjcmVhdGVUc3Bhbih0ZXN0RWxlbWVudCwgMSwgbGluZUhlaWdodCk7XG4gIHVwZGF0ZVRleHRDb250ZW50QW5kU3R5bGVzKHRlc3RTcGFuLCBsaW5lKTtcbiAgY29uc3QgdGV4dExlbmd0aCA9IHRlc3RTcGFuLm5vZGUoKS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKTtcbiAgdGVzdEVsZW1lbnQucmVtb3ZlKCk7XG4gIHJldHVybiB0ZXh0TGVuZ3RoO1xufVxuZnVuY3Rpb24gY29tcHV0ZURpbWVuc2lvbk9mVGV4dChwYXJlbnROb2RlLCBsaW5lSGVpZ2h0LCB0ZXh0KSB7XG4gIHZhciBfYTtcbiAgY29uc3QgdGVzdEVsZW1lbnQgPSBwYXJlbnROb2RlLmFwcGVuZChcInRleHRcIik7XG4gIGNvbnN0IHRlc3RTcGFuID0gY3JlYXRlVHNwYW4odGVzdEVsZW1lbnQsIDEsIGxpbmVIZWlnaHQpO1xuICB1cGRhdGVUZXh0Q29udGVudEFuZFN0eWxlcyh0ZXN0U3BhbiwgW3sgY29udGVudDogdGV4dCwgdHlwZTogXCJub3JtYWxcIiB9XSk7XG4gIGNvbnN0IHRleHREaW1lbnNpb24gPSAoX2EgPSB0ZXN0U3Bhbi5ub2RlKCkpID09IG51bGwgPyB2b2lkIDAgOiBfYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgaWYgKHRleHREaW1lbnNpb24pIHtcbiAgICB0ZXN0RWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuICByZXR1cm4gdGV4dERpbWVuc2lvbjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZvcm1hdHRlZFRleHQod2lkdGgsIGcsIHN0cnVjdHVyZWRUZXh0LCBhZGRCYWNrZ3JvdW5kID0gZmFsc2UpIHtcbiAgY29uc3QgbGluZUhlaWdodCA9IDEuMTtcbiAgY29uc3QgbGFiZWxHcm91cCA9IGcuYXBwZW5kKFwiZ1wiKTtcbiAgY29uc3QgYmtnID0gbGFiZWxHcm91cC5pbnNlcnQoXCJyZWN0XCIpLmF0dHIoXCJjbGFzc1wiLCBcImJhY2tncm91bmRcIik7XG4gIGNvbnN0IHRleHRFbGVtZW50ID0gbGFiZWxHcm91cC5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ5XCIsIFwiLTEwLjFcIik7XG4gIGxldCBsaW5lSW5kZXggPSAwO1xuICBmb3IgKGNvbnN0IGxpbmUgb2Ygc3RydWN0dXJlZFRleHQpIHtcbiAgICBjb25zdCBjaGVja1dpZHRoID0gKGxpbmUyKSA9PiBjb21wdXRlV2lkdGhPZlRleHQobGFiZWxHcm91cCwgbGluZUhlaWdodCwgbGluZTIpIDw9IHdpZHRoO1xuICAgIGNvbnN0IGxpbmVzVW5kZXJXaWR0aCA9IGNoZWNrV2lkdGgobGluZSkgPyBbbGluZV0gOiBzcGxpdExpbmVUb0ZpdFdpZHRoKGxpbmUsIGNoZWNrV2lkdGgpO1xuICAgIGZvciAoY29uc3QgcHJlcGFyZWRMaW5lIG9mIGxpbmVzVW5kZXJXaWR0aCkge1xuICAgICAgY29uc3QgdHNwYW4gPSBjcmVhdGVUc3Bhbih0ZXh0RWxlbWVudCwgbGluZUluZGV4LCBsaW5lSGVpZ2h0KTtcbiAgICAgIHVwZGF0ZVRleHRDb250ZW50QW5kU3R5bGVzKHRzcGFuLCBwcmVwYXJlZExpbmUpO1xuICAgICAgbGluZUluZGV4Kys7XG4gICAgfVxuICB9XG4gIGlmIChhZGRCYWNrZ3JvdW5kKSB7XG4gICAgY29uc3QgYmJveCA9IHRleHRFbGVtZW50Lm5vZGUoKS5nZXRCQm94KCk7XG4gICAgY29uc3QgcGFkZGluZyA9IDI7XG4gICAgYmtnLmF0dHIoXCJ4XCIsIC1wYWRkaW5nKS5hdHRyKFwieVwiLCAtcGFkZGluZykuYXR0cihcIndpZHRoXCIsIGJib3gud2lkdGggKyAyICogcGFkZGluZykuYXR0cihcImhlaWdodFwiLCBiYm94LmhlaWdodCArIDIgKiBwYWRkaW5nKTtcbiAgICByZXR1cm4gbGFiZWxHcm91cC5ub2RlKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRleHRFbGVtZW50Lm5vZGUoKTtcbiAgfVxufVxuZnVuY3Rpb24gdXBkYXRlVGV4dENvbnRlbnRBbmRTdHlsZXModHNwYW4sIHdyYXBwZWRMaW5lKSB7XG4gIHRzcGFuLnRleHQoXCJcIik7XG4gIHdyYXBwZWRMaW5lLmZvckVhY2goKHdvcmQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaW5uZXJUc3BhbiA9IHRzcGFuLmFwcGVuZChcInRzcGFuXCIpLmF0dHIoXCJmb250LXN0eWxlXCIsIHdvcmQudHlwZSA9PT0gXCJlbXBoYXNpc1wiID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCIpLmF0dHIoXCJjbGFzc1wiLCBcInRleHQtaW5uZXItdHNwYW5cIikuYXR0cihcImZvbnQtd2VpZ2h0XCIsIHdvcmQudHlwZSA9PT0gXCJzdHJvbmdcIiA/IFwiYm9sZFwiIDogXCJub3JtYWxcIik7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICBpbm5lclRzcGFuLnRleHQod29yZC5jb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5uZXJUc3Bhbi50ZXh0KFwiIFwiICsgd29yZC5jb250ZW50KTtcbiAgICB9XG4gIH0pO1xufVxuY29uc3QgY3JlYXRlVGV4dCA9IChlbCwgdGV4dCA9IFwiXCIsIHtcbiAgc3R5bGUgPSBcIlwiLFxuICBpc1RpdGxlID0gZmFsc2UsXG4gIGNsYXNzZXMgPSBcIlwiLFxuICB1c2VIdG1sTGFiZWxzID0gdHJ1ZSxcbiAgaXNOb2RlID0gdHJ1ZSxcbiAgd2lkdGggPSAyMDAsXG4gIGFkZFN2Z0JhY2tncm91bmQgPSBmYWxzZVxufSA9IHt9KSA9PiB7XG4gIGxvZy5pbmZvKFwiY3JlYXRlVGV4dFwiLCB0ZXh0LCBzdHlsZSwgaXNUaXRsZSwgY2xhc3NlcywgdXNlSHRtbExhYmVscywgaXNOb2RlLCBhZGRTdmdCYWNrZ3JvdW5kKTtcbiAgaWYgKHVzZUh0bWxMYWJlbHMpIHtcbiAgICBjb25zdCBodG1sVGV4dCA9IG1hcmtkb3duVG9IVE1MKHRleHQpO1xuICAgIGNvbnN0IG5vZGUgPSB7XG4gICAgICBpc05vZGUsXG4gICAgICBsYWJlbDogZGVjb2RlRW50aXRpZXMoaHRtbFRleHQpLnJlcGxhY2UoXG4gICAgICAgIC9mYVtibHJzXT86ZmEtW1xcdy1dKy9nLFxuICAgICAgICAvLyBjc3BlbGw6IGRpc2FibGUtbGluZVxuICAgICAgICAocykgPT4gYDxpIGNsYXNzPScke3MucmVwbGFjZShcIjpcIiwgXCIgXCIpfSc+PC9pPmBcbiAgICAgICksXG4gICAgICBsYWJlbFN0eWxlOiBzdHlsZS5yZXBsYWNlKFwiZmlsbDpcIiwgXCJjb2xvcjpcIilcbiAgICB9O1xuICAgIGNvbnN0IHZlcnRleE5vZGUgPSBhZGRIdG1sU3BhbihlbCwgbm9kZSwgd2lkdGgsIGNsYXNzZXMsIGFkZFN2Z0JhY2tncm91bmQpO1xuICAgIHJldHVybiB2ZXJ0ZXhOb2RlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0cnVjdHVyZWRUZXh0ID0gbWFya2Rvd25Ub0xpbmVzKHRleHQpO1xuICAgIGNvbnN0IHN2Z0xhYmVsID0gY3JlYXRlRm9ybWF0dGVkVGV4dCh3aWR0aCwgZWwsIHN0cnVjdHVyZWRUZXh0LCBhZGRTdmdCYWNrZ3JvdW5kKTtcbiAgICByZXR1cm4gc3ZnTGFiZWw7XG4gIH1cbn07XG5leHBvcnQge1xuICBjcmVhdGVUZXh0IGFzIGEsXG4gIGNvbXB1dGVEaW1lbnNpb25PZlRleHQgYXMgY1xufTtcbiJdLCJuYW1lcyI6WyJjb250ZW50IiwiZG9jdW1lbnQiLCJmbG93Iiwic3RyaW5nIiwidGV4dCIsInJlc29sdmVUZXh0IiwicG9pbnQiLCJkZWRlbnQiLCJsb2ciLCJkZWNvZGVFbnRpdGllcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sWUFBWSxHQUFHLEdBQUU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUU7QUFDekMsRUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLE1BQU0sY0FBYyxHQUFHO0FBQzlCLEVBQUUsU0FBUztBQUNYLEVBQUUsU0FBUztBQUNYLEVBQUUsT0FBTztBQUNULEVBQUUsTUFBTTtBQUNSLEVBQUUsVUFBVTtBQUNaLEVBQUUsWUFBWTtBQUNkLEVBQUUsTUFBTTtBQUNSLEVBQUUsU0FBUztBQUNYLEVBQUUsUUFBUTtBQUNWLEVBQUUsS0FBSztBQUNQLEVBQUUsVUFBVTtBQUNaLEVBQUUsSUFBSTtBQUNOLEVBQUUsU0FBUztBQUNYLEVBQUUsUUFBUTtBQUNWLEVBQUUsS0FBSztBQUNQLEVBQUUsS0FBSztBQUNQLEVBQUUsSUFBSTtBQUNOLEVBQUUsSUFBSTtBQUNOLEVBQUUsVUFBVTtBQUNaLEVBQUUsWUFBWTtBQUNkLEVBQUUsUUFBUTtBQUNWLEVBQUUsUUFBUTtBQUNWLEVBQUUsTUFBTTtBQUNSLEVBQUUsT0FBTztBQUNULEVBQUUsVUFBVTtBQUNaLEVBQUUsSUFBSTtBQUNOLEVBQUUsSUFBSTtBQUNOLEVBQUUsSUFBSTtBQUNOLEVBQUUsSUFBSTtBQUNOLEVBQUUsSUFBSTtBQUNOLEVBQUUsSUFBSTtBQUNOLEVBQUUsTUFBTTtBQUNSLEVBQUUsUUFBUTtBQUNWLEVBQUUsSUFBSTtBQUNOLEVBQUUsTUFBTTtBQUNSLEVBQUUsUUFBUTtBQUNWLEVBQUUsUUFBUTtBQUNWLEVBQUUsSUFBSTtBQUNOLEVBQUUsTUFBTTtBQUNSLEVBQUUsTUFBTTtBQUNSLEVBQUUsTUFBTTtBQUNSLEVBQUUsVUFBVTtBQUNaLEVBQUUsS0FBSztBQUNQLEVBQUUsVUFBVTtBQUNaLEVBQUUsSUFBSTtBQUNOLEVBQUUsVUFBVTtBQUNaLEVBQUUsUUFBUTtBQUNWLEVBQUUsR0FBRztBQUNMLEVBQUUsT0FBTztBQUNULEVBQUUsUUFBUTtBQUNWLEVBQUUsU0FBUztBQUNYLEVBQUUsU0FBUztBQUNYLEVBQUUsT0FBTztBQUNULEVBQUUsT0FBTztBQUNULEVBQUUsSUFBSTtBQUNOLEVBQUUsT0FBTztBQUNULEVBQUUsSUFBSTtBQUNO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LEtBQUssSUFBSSxLQUFLLEVBQUU7QUFDMUMsSUFBSSxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUM7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFLElBQUksTUFBTSxJQUFJLEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxFQUFFO0FBQzVDLElBQUksT0FBT0UsT0FBSyxDQUFDLEtBQUssQ0FBQztBQUN2QixHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUUsT0FBTyxFQUFFO0FBQ1gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQSxPQUFLLENBQUMsS0FBSyxFQUFFO0FBQ3RCLEVBQUUsT0FBTyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ3hFLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxRQUFRLENBQUMsR0FBRyxFQUFFO0FBQ3ZCLEVBQUUsT0FBT0EsT0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHQSxPQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDOUQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUU7QUFDdEIsRUFBRSxPQUFPLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEdBQUcsS0FBSyxHQUFHLENBQUM7QUFDdkQ7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXdIQSxNQUFNLEdB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SSxFQUFFLFVBQVU7QUFDdEIsTUFBTSxRQUFRLEVBQUUsRUFBRTtBQUNsQixLQUFLLEVBQUM7QUFDTixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRTtBQUM1QyxJQUFJLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO0FBQ3BEO0FBQ0EsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUM7QUFDOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUM7QUFDekIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsRUFBQztBQUMvQztBQUNBLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRztBQUNwQixNQUFNLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztBQUMvQixNQUFLO0FBQ0wsSUFBSSxPQUFPLElBQUk7QUFDZixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLE1BQU0sQ0FBQyxHQUFHLEVBQUU7QUFDdkIsSUFBSSxPQUFPLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUU7QUFDMUIsTUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUM7QUFDcEMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUM7QUFDNUIsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNB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
