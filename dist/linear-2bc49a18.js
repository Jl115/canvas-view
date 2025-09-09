'use strict';

var index = require('./index-d3f4d11e.js');
var init = require('./init-8ddd39ad.js');

function ascending(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function descending(a, b) {
  return a == null || b == null ? NaN
    : b < a ? -1
    : b > a ? 1
    : b >= a ? 0
    : NaN;
}

function bisector(f) {
  let compare1, compare2, delta;

  // If an accessor is specified, promote it to a comparator. In this case we
  // can test whether the search value is (self-) comparable. We can’t do this
  // for a comparator (except for specific, known comparators) because we can’t
  // tell if the comparator is symmetric, and an asymmetric comparator can’t be
  // used to test whether a single value is comparable.
  if (f.length !== 2) {
    compare1 = ascending;
    compare2 = (d, x) => ascending(f(d), x);
    delta = (d, x) => f(d) - x;
  } else {
    compare1 = f === ascending || f === descending ? f : zero;
    compare2 = f;
    delta = f;
  }

  function left(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        const mid = (lo + hi) >>> 1;
        if (compare2(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }

  function right(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        const mid = (lo + hi) >>> 1;
        if (compare2(a[mid], x) <= 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }

  function center(a, x, lo = 0, hi = a.length) {
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }

  return {left, center, right};
}

function zero() {
  return 0;
}

function number$1(x) {
  return x === null ? NaN : +x;
}

const ascendingBisect = bisector(ascending);
const bisectRight = ascendingBisect.right;
bisector(number$1).center;
var bisect = bisectRight;

const e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

function tickSpec(start, stop, count) {
  const step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log10(step)),
      error = step / Math.pow(10, power),
      factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start) ++i1;
    if (i2 / inc > stop) --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start) ++i1;
    if (i2 * inc > stop) --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);
  return [i1, i2, inc];
}

function ticks(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  if (!(count > 0)) return [];
  if (start === stop) return [start];
  const reverse = stop < start, [i1, i2, inc] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
  if (!(i2 >= i1)) return [];
  const n = i2 - i1 + 1, ticks = new Array(n);
  if (reverse) {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) / -inc;
    else for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) * inc;
  } else {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) / -inc;
    else for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) * inc;
  }
  return ticks;
}

function tickIncrement(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  return tickSpec(start, stop, count)[2];
}

function tickStep(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  const reverse = stop < start, inc = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
  return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}

function numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = interpolate(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

function date(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = interpolate(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

function interpolate(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? index.constant$1(b)
      : (t === "number" ? index.interpolateNumber
      : t === "string" ? ((c = index.color(b)) ? (b = c, index.interpolateRgb) : index.interpolateString)
      : b instanceof index.color ? index.interpolateRgb
      : b instanceof Date ? date
      : isNumberArray(b) ? numberArray
      : Array.isArray(b) ? genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : index.interpolateNumber)(a, b);
}

function interpolateRound(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

function formatDecimal(x) {
  return Math.abs(x = Math.round(x)) >= 1e21
      ? x.toLocaleString("en").replace(/,/g, "")
      : x.toString(10);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}

function exponent(x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}

function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}

function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};

// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

var prefixExponent;

function formatPrefixAuto(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

function formatRounded(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

var formatTypes = {
  "%": (x, p) => (x * 100).toFixed(p),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": formatDecimal,
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p) => formatRounded(x * 100, p),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
};

function identity$1(x) {
  return x;
}

var map = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

function formatLocale(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? identity$1 : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? identity$1 : formatNumerals(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "−" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}

var locale;
var format;
var formatPrefix;

defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}

function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}

function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}

function constants(x) {
  return function() {
    return x;
  };
}

function number(x) {
  return +x;
}

var unit = [0, 1];

function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constants(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = bisect(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate$1 = interpolate,
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate$1)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), index.interpolateNumber)))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate$1 = interpolateRound, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer()(identity, identity);
}

function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count),
      precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = continuous();

  scale.copy = function() {
    return copy(scale, linear());
  };

  init.initRange.apply(scale, arguments);

  return linearish(scale);
}

exports.bisector = bisector;
exports.continuous = continuous;
exports.copy = copy;
exports.linear = linear;
exports.tickStep = tickStep;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZWFyLTJiYzQ5YTE4LmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2FzY2VuZGluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvZGVzY2VuZGluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvYmlzZWN0b3IuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL251bWJlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvYmlzZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy90aWNrcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvbnVtYmVyQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9kYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9vYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3ZhbHVlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9yb3VuZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdERlY2ltYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9leHBvbmVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdEdyb3VwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0TnVtZXJhbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXRTcGVjaWZpZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXRUcmltLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0UHJlZml4QXV0by5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFJvdW5kZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXRUeXBlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2lkZW50aXR5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvbG9jYWxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZGVmYXVsdExvY2FsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL3ByZWNpc2lvbkZpeGVkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvcHJlY2lzaW9uUHJlZml4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvcHJlY2lzaW9uUm91bmQuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL2NvbnN0YW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9udW1iZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL2NvbnRpbnVvdXMuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL3RpY2tGb3JtYXQuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL2xpbmVhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc2NlbmRpbmcoYSwgYikge1xuICByZXR1cm4gYSA9PSBudWxsIHx8IGIgPT0gbnVsbCA/IE5hTiA6IGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiBhID49IGIgPyAwIDogTmFOO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVzY2VuZGluZyhhLCBiKSB7XG4gIHJldHVybiBhID09IG51bGwgfHwgYiA9PSBudWxsID8gTmFOXG4gICAgOiBiIDwgYSA/IC0xXG4gICAgOiBiID4gYSA/IDFcbiAgICA6IGIgPj0gYSA/IDBcbiAgICA6IE5hTjtcbn1cbiIsImltcG9ydCBhc2NlbmRpbmcgZnJvbSBcIi4vYXNjZW5kaW5nLmpzXCI7XG5pbXBvcnQgZGVzY2VuZGluZyBmcm9tIFwiLi9kZXNjZW5kaW5nLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpc2VjdG9yKGYpIHtcbiAgbGV0IGNvbXBhcmUxLCBjb21wYXJlMiwgZGVsdGE7XG5cbiAgLy8gSWYgYW4gYWNjZXNzb3IgaXMgc3BlY2lmaWVkLCBwcm9tb3RlIGl0IHRvIGEgY29tcGFyYXRvci4gSW4gdGhpcyBjYXNlIHdlXG4gIC8vIGNhbiB0ZXN0IHdoZXRoZXIgdGhlIHNlYXJjaCB2YWx1ZSBpcyAoc2VsZi0pIGNvbXBhcmFibGUuIFdlIGNhbuKAmXQgZG8gdGhpc1xuICAvLyBmb3IgYSBjb21wYXJhdG9yIChleGNlcHQgZm9yIHNwZWNpZmljLCBrbm93biBjb21wYXJhdG9ycykgYmVjYXVzZSB3ZSBjYW7igJl0XG4gIC8vIHRlbGwgaWYgdGhlIGNvbXBhcmF0b3IgaXMgc3ltbWV0cmljLCBhbmQgYW4gYXN5bW1ldHJpYyBjb21wYXJhdG9yIGNhbuKAmXQgYmVcbiAgLy8gdXNlZCB0byB0ZXN0IHdoZXRoZXIgYSBzaW5nbGUgdmFsdWUgaXMgY29tcGFyYWJsZS5cbiAgaWYgKGYubGVuZ3RoICE9PSAyKSB7XG4gICAgY29tcGFyZTEgPSBhc2NlbmRpbmc7XG4gICAgY29tcGFyZTIgPSAoZCwgeCkgPT4gYXNjZW5kaW5nKGYoZCksIHgpO1xuICAgIGRlbHRhID0gKGQsIHgpID0+IGYoZCkgLSB4O1xuICB9IGVsc2Uge1xuICAgIGNvbXBhcmUxID0gZiA9PT0gYXNjZW5kaW5nIHx8IGYgPT09IGRlc2NlbmRpbmcgPyBmIDogemVybztcbiAgICBjb21wYXJlMiA9IGY7XG4gICAgZGVsdGEgPSBmO1xuICB9XG5cbiAgZnVuY3Rpb24gbGVmdChhLCB4LCBsbyA9IDAsIGhpID0gYS5sZW5ndGgpIHtcbiAgICBpZiAobG8gPCBoaSkge1xuICAgICAgaWYgKGNvbXBhcmUxKHgsIHgpICE9PSAwKSByZXR1cm4gaGk7XG4gICAgICBkbyB7XG4gICAgICAgIGNvbnN0IG1pZCA9IChsbyArIGhpKSA+Pj4gMTtcbiAgICAgICAgaWYgKGNvbXBhcmUyKGFbbWlkXSwgeCkgPCAwKSBsbyA9IG1pZCArIDE7XG4gICAgICAgIGVsc2UgaGkgPSBtaWQ7XG4gICAgICB9IHdoaWxlIChsbyA8IGhpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvO1xuICB9XG5cbiAgZnVuY3Rpb24gcmlnaHQoYSwgeCwgbG8gPSAwLCBoaSA9IGEubGVuZ3RoKSB7XG4gICAgaWYgKGxvIDwgaGkpIHtcbiAgICAgIGlmIChjb21wYXJlMSh4LCB4KSAhPT0gMCkgcmV0dXJuIGhpO1xuICAgICAgZG8ge1xuICAgICAgICBjb25zdCBtaWQgPSAobG8gKyBoaSkgPj4+IDE7XG4gICAgICAgIGlmIChjb21wYXJlMihhW21pZF0sIHgpIDw9IDApIGxvID0gbWlkICsgMTtcbiAgICAgICAgZWxzZSBoaSA9IG1pZDtcbiAgICAgIH0gd2hpbGUgKGxvIDwgaGkpO1xuICAgIH1cbiAgICByZXR1cm4gbG87XG4gIH1cblxuICBmdW5jdGlvbiBjZW50ZXIoYSwgeCwgbG8gPSAwLCBoaSA9IGEubGVuZ3RoKSB7XG4gICAgY29uc3QgaSA9IGxlZnQoYSwgeCwgbG8sIGhpIC0gMSk7XG4gICAgcmV0dXJuIGkgPiBsbyAmJiBkZWx0YShhW2kgLSAxXSwgeCkgPiAtZGVsdGEoYVtpXSwgeCkgPyBpIC0gMSA6IGk7XG4gIH1cblxuICByZXR1cm4ge2xlZnQsIGNlbnRlciwgcmlnaHR9O1xufVxuXG5mdW5jdGlvbiB6ZXJvKCkge1xuICByZXR1cm4gMDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG51bWJlcih4KSB7XG4gIHJldHVybiB4ID09PSBudWxsID8gTmFOIDogK3g7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogbnVtYmVycyh2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgaWYgKHZhbHVlb2YgPT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgKHZhbHVlID0gK3ZhbHVlKSA+PSB2YWx1ZSkge1xuICAgICAgICB5aWVsZCB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVvZih2YWx1ZSwgKytpbmRleCwgdmFsdWVzKSkgIT0gbnVsbCAmJiAodmFsdWUgPSArdmFsdWUpID49IHZhbHVlKSB7XG4gICAgICAgIHlpZWxkIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi9hc2NlbmRpbmcuanNcIjtcbmltcG9ydCBiaXNlY3RvciBmcm9tIFwiLi9iaXNlY3Rvci5qc1wiO1xuaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXIuanNcIjtcblxuY29uc3QgYXNjZW5kaW5nQmlzZWN0ID0gYmlzZWN0b3IoYXNjZW5kaW5nKTtcbmV4cG9ydCBjb25zdCBiaXNlY3RSaWdodCA9IGFzY2VuZGluZ0Jpc2VjdC5yaWdodDtcbmV4cG9ydCBjb25zdCBiaXNlY3RMZWZ0ID0gYXNjZW5kaW5nQmlzZWN0LmxlZnQ7XG5leHBvcnQgY29uc3QgYmlzZWN0Q2VudGVyID0gYmlzZWN0b3IobnVtYmVyKS5jZW50ZXI7XG5leHBvcnQgZGVmYXVsdCBiaXNlY3RSaWdodDtcbiIsImNvbnN0IGUxMCA9IE1hdGguc3FydCg1MCksXG4gICAgZTUgPSBNYXRoLnNxcnQoMTApLFxuICAgIGUyID0gTWF0aC5zcXJ0KDIpO1xuXG5mdW5jdGlvbiB0aWNrU3BlYyhzdGFydCwgc3RvcCwgY291bnQpIHtcbiAgY29uc3Qgc3RlcCA9IChzdG9wIC0gc3RhcnQpIC8gTWF0aC5tYXgoMCwgY291bnQpLFxuICAgICAgcG93ZXIgPSBNYXRoLmZsb29yKE1hdGgubG9nMTAoc3RlcCkpLFxuICAgICAgZXJyb3IgPSBzdGVwIC8gTWF0aC5wb3coMTAsIHBvd2VyKSxcbiAgICAgIGZhY3RvciA9IGVycm9yID49IGUxMCA/IDEwIDogZXJyb3IgPj0gZTUgPyA1IDogZXJyb3IgPj0gZTIgPyAyIDogMTtcbiAgbGV0IGkxLCBpMiwgaW5jO1xuICBpZiAocG93ZXIgPCAwKSB7XG4gICAgaW5jID0gTWF0aC5wb3coMTAsIC1wb3dlcikgLyBmYWN0b3I7XG4gICAgaTEgPSBNYXRoLnJvdW5kKHN0YXJ0ICogaW5jKTtcbiAgICBpMiA9IE1hdGgucm91bmQoc3RvcCAqIGluYyk7XG4gICAgaWYgKGkxIC8gaW5jIDwgc3RhcnQpICsraTE7XG4gICAgaWYgKGkyIC8gaW5jID4gc3RvcCkgLS1pMjtcbiAgICBpbmMgPSAtaW5jO1xuICB9IGVsc2Uge1xuICAgIGluYyA9IE1hdGgucG93KDEwLCBwb3dlcikgKiBmYWN0b3I7XG4gICAgaTEgPSBNYXRoLnJvdW5kKHN0YXJ0IC8gaW5jKTtcbiAgICBpMiA9IE1hdGgucm91bmQoc3RvcCAvIGluYyk7XG4gICAgaWYgKGkxICogaW5jIDwgc3RhcnQpICsraTE7XG4gICAgaWYgKGkyICogaW5jID4gc3RvcCkgLS1pMjtcbiAgfVxuICBpZiAoaTIgPCBpMSAmJiAwLjUgPD0gY291bnQgJiYgY291bnQgPCAyKSByZXR1cm4gdGlja1NwZWMoc3RhcnQsIHN0b3AsIGNvdW50ICogMik7XG4gIHJldHVybiBbaTEsIGkyLCBpbmNdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aWNrcyhzdGFydCwgc3RvcCwgY291bnQpIHtcbiAgc3RvcCA9ICtzdG9wLCBzdGFydCA9ICtzdGFydCwgY291bnQgPSArY291bnQ7XG4gIGlmICghKGNvdW50ID4gMCkpIHJldHVybiBbXTtcbiAgaWYgKHN0YXJ0ID09PSBzdG9wKSByZXR1cm4gW3N0YXJ0XTtcbiAgY29uc3QgcmV2ZXJzZSA9IHN0b3AgPCBzdGFydCwgW2kxLCBpMiwgaW5jXSA9IHJldmVyc2UgPyB0aWNrU3BlYyhzdG9wLCBzdGFydCwgY291bnQpIDogdGlja1NwZWMoc3RhcnQsIHN0b3AsIGNvdW50KTtcbiAgaWYgKCEoaTIgPj0gaTEpKSByZXR1cm4gW107XG4gIGNvbnN0IG4gPSBpMiAtIGkxICsgMSwgdGlja3MgPSBuZXcgQXJyYXkobik7XG4gIGlmIChyZXZlcnNlKSB7XG4gICAgaWYgKGluYyA8IDApIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB0aWNrc1tpXSA9IChpMiAtIGkpIC8gLWluYztcbiAgICBlbHNlIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB0aWNrc1tpXSA9IChpMiAtIGkpICogaW5jO1xuICB9IGVsc2Uge1xuICAgIGlmIChpbmMgPCAwKSBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkgdGlja3NbaV0gPSAoaTEgKyBpKSAvIC1pbmM7XG4gICAgZWxzZSBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkgdGlja3NbaV0gPSAoaTEgKyBpKSAqIGluYztcbiAgfVxuICByZXR1cm4gdGlja3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aWNrSW5jcmVtZW50KHN0YXJ0LCBzdG9wLCBjb3VudCkge1xuICBzdG9wID0gK3N0b3AsIHN0YXJ0ID0gK3N0YXJ0LCBjb3VudCA9ICtjb3VudDtcbiAgcmV0dXJuIHRpY2tTcGVjKHN0YXJ0LCBzdG9wLCBjb3VudClbMl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aWNrU3RlcChzdGFydCwgc3RvcCwgY291bnQpIHtcbiAgc3RvcCA9ICtzdG9wLCBzdGFydCA9ICtzdGFydCwgY291bnQgPSArY291bnQ7XG4gIGNvbnN0IHJldmVyc2UgPSBzdG9wIDwgc3RhcnQsIGluYyA9IHJldmVyc2UgPyB0aWNrSW5jcmVtZW50KHN0b3AsIHN0YXJ0LCBjb3VudCkgOiB0aWNrSW5jcmVtZW50KHN0YXJ0LCBzdG9wLCBjb3VudCk7XG4gIHJldHVybiAocmV2ZXJzZSA/IC0xIDogMSkgKiAoaW5jIDwgMCA/IDEgLyAtaW5jIDogaW5jKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgaWYgKCFiKSBiID0gW107XG4gIHZhciBuID0gYSA/IE1hdGgubWluKGIubGVuZ3RoLCBhLmxlbmd0aCkgOiAwLFxuICAgICAgYyA9IGIuc2xpY2UoKSxcbiAgICAgIGk7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkgY1tpXSA9IGFbaV0gKiAoMSAtIHQpICsgYltpXSAqIHQ7XG4gICAgcmV0dXJuIGM7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlckFycmF5KHgpIHtcbiAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyh4KSAmJiAhKHggaW5zdGFuY2VvZiBEYXRhVmlldyk7XG59XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSBcIi4vdmFsdWUuanNcIjtcbmltcG9ydCBudW1iZXJBcnJheSwge2lzTnVtYmVyQXJyYXl9IGZyb20gXCIuL251bWJlckFycmF5LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIChpc051bWJlckFycmF5KGIpID8gbnVtYmVyQXJyYXkgOiBnZW5lcmljQXJyYXkpKGEsIGIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJpY0FycmF5KGEsIGIpIHtcbiAgdmFyIG5iID0gYiA/IGIubGVuZ3RoIDogMCxcbiAgICAgIG5hID0gYSA/IE1hdGgubWluKG5iLCBhLmxlbmd0aCkgOiAwLFxuICAgICAgeCA9IG5ldyBBcnJheShuYSksXG4gICAgICBjID0gbmV3IEFycmF5KG5iKSxcbiAgICAgIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IG5hOyArK2kpIHhbaV0gPSB2YWx1ZShhW2ldLCBiW2ldKTtcbiAgZm9yICg7IGkgPCBuYjsgKytpKSBjW2ldID0gYltpXTtcblxuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBuYTsgKytpKSBjW2ldID0geFtpXSh0KTtcbiAgICByZXR1cm4gYztcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZTtcbiAgcmV0dXJuIGEgPSArYSwgYiA9ICtiLCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGQuc2V0VGltZShhICogKDEgLSB0KSArIGIgKiB0KSwgZDtcbiAgfTtcbn1cbiIsImltcG9ydCB2YWx1ZSBmcm9tIFwiLi92YWx1ZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBpID0ge30sXG4gICAgICBjID0ge30sXG4gICAgICBrO1xuXG4gIGlmIChhID09PSBudWxsIHx8IHR5cGVvZiBhICE9PSBcIm9iamVjdFwiKSBhID0ge307XG4gIGlmIChiID09PSBudWxsIHx8IHR5cGVvZiBiICE9PSBcIm9iamVjdFwiKSBiID0ge307XG5cbiAgZm9yIChrIGluIGIpIHtcbiAgICBpZiAoayBpbiBhKSB7XG4gICAgICBpW2tdID0gdmFsdWUoYVtrXSwgYltrXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNba10gPSBiW2tdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgZm9yIChrIGluIGkpIGNba10gPSBpW2tdKHQpO1xuICAgIHJldHVybiBjO1xuICB9O1xufVxuIiwiaW1wb3J0IHtjb2xvcn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgcmdiIGZyb20gXCIuL3JnYi5qc1wiO1xuaW1wb3J0IHtnZW5lcmljQXJyYXl9IGZyb20gXCIuL2FycmF5LmpzXCI7XG5pbXBvcnQgZGF0ZSBmcm9tIFwiLi9kYXRlLmpzXCI7XG5pbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlci5qc1wiO1xuaW1wb3J0IG9iamVjdCBmcm9tIFwiLi9vYmplY3QuanNcIjtcbmltcG9ydCBzdHJpbmcgZnJvbSBcIi4vc3RyaW5nLmpzXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBudW1iZXJBcnJheSwge2lzTnVtYmVyQXJyYXl9IGZyb20gXCIuL251bWJlckFycmF5LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIHQgPSB0eXBlb2YgYiwgYztcbiAgcmV0dXJuIGIgPT0gbnVsbCB8fCB0ID09PSBcImJvb2xlYW5cIiA/IGNvbnN0YW50KGIpXG4gICAgICA6ICh0ID09PSBcIm51bWJlclwiID8gbnVtYmVyXG4gICAgICA6IHQgPT09IFwic3RyaW5nXCIgPyAoKGMgPSBjb2xvcihiKSkgPyAoYiA9IGMsIHJnYikgOiBzdHJpbmcpXG4gICAgICA6IGIgaW5zdGFuY2VvZiBjb2xvciA/IHJnYlxuICAgICAgOiBiIGluc3RhbmNlb2YgRGF0ZSA/IGRhdGVcbiAgICAgIDogaXNOdW1iZXJBcnJheShiKSA/IG51bWJlckFycmF5XG4gICAgICA6IEFycmF5LmlzQXJyYXkoYikgPyBnZW5lcmljQXJyYXlcbiAgICAgIDogdHlwZW9mIGIudmFsdWVPZiAhPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBiLnRvU3RyaW5nICE9PSBcImZ1bmN0aW9uXCIgfHwgaXNOYU4oYikgPyBvYmplY3RcbiAgICAgIDogbnVtYmVyKShhLCBiKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgPSArYSwgYiA9ICtiLCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoYSAqICgxIC0gdCkgKyBiICogdCk7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBNYXRoLmFicyh4ID0gTWF0aC5yb3VuZCh4KSkgPj0gMWUyMVxuICAgICAgPyB4LnRvTG9jYWxlU3RyaW5nKFwiZW5cIikucmVwbGFjZSgvLC9nLCBcIlwiKVxuICAgICAgOiB4LnRvU3RyaW5nKDEwKTtcbn1cblxuLy8gQ29tcHV0ZXMgdGhlIGRlY2ltYWwgY29lZmZpY2llbnQgYW5kIGV4cG9uZW50IG9mIHRoZSBzcGVjaWZpZWQgbnVtYmVyIHggd2l0aFxuLy8gc2lnbmlmaWNhbnQgZGlnaXRzIHAsIHdoZXJlIHggaXMgcG9zaXRpdmUgYW5kIHAgaXMgaW4gWzEsIDIxXSBvciB1bmRlZmluZWQuXG4vLyBGb3IgZXhhbXBsZSwgZm9ybWF0RGVjaW1hbFBhcnRzKDEuMjMpIHJldHVybnMgW1wiMTIzXCIsIDBdLlxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERlY2ltYWxQYXJ0cyh4LCBwKSB7XG4gIGlmICgoaSA9ICh4ID0gcCA/IHgudG9FeHBvbmVudGlhbChwIC0gMSkgOiB4LnRvRXhwb25lbnRpYWwoKSkuaW5kZXhPZihcImVcIikpIDwgMCkgcmV0dXJuIG51bGw7IC8vIE5hTiwgwrFJbmZpbml0eVxuICB2YXIgaSwgY29lZmZpY2llbnQgPSB4LnNsaWNlKDAsIGkpO1xuXG4gIC8vIFRoZSBzdHJpbmcgcmV0dXJuZWQgYnkgdG9FeHBvbmVudGlhbCBlaXRoZXIgaGFzIHRoZSBmb3JtIFxcZFxcLlxcZCtlWy0rXVxcZCtcbiAgLy8gKGUuZy4sIDEuMmUrMykgb3IgdGhlIGZvcm0gXFxkZVstK11cXGQrIChlLmcuLCAxZSszKS5cbiAgcmV0dXJuIFtcbiAgICBjb2VmZmljaWVudC5sZW5ndGggPiAxID8gY29lZmZpY2llbnRbMF0gKyBjb2VmZmljaWVudC5zbGljZSgyKSA6IGNvZWZmaWNpZW50LFxuICAgICt4LnNsaWNlKGkgKyAxKVxuICBdO1xufVxuIiwiaW1wb3J0IHtmb3JtYXREZWNpbWFsUGFydHN9IGZyb20gXCIuL2Zvcm1hdERlY2ltYWwuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4geCA9IGZvcm1hdERlY2ltYWxQYXJ0cyhNYXRoLmFicyh4KSksIHggPyB4WzFdIDogTmFOO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZ3JvdXBpbmcsIHRob3VzYW5kcykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUsIHdpZHRoKSB7XG4gICAgdmFyIGkgPSB2YWx1ZS5sZW5ndGgsXG4gICAgICAgIHQgPSBbXSxcbiAgICAgICAgaiA9IDAsXG4gICAgICAgIGcgPSBncm91cGluZ1swXSxcbiAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgIHdoaWxlIChpID4gMCAmJiBnID4gMCkge1xuICAgICAgaWYgKGxlbmd0aCArIGcgKyAxID4gd2lkdGgpIGcgPSBNYXRoLm1heCgxLCB3aWR0aCAtIGxlbmd0aCk7XG4gICAgICB0LnB1c2godmFsdWUuc3Vic3RyaW5nKGkgLT0gZywgaSArIGcpKTtcbiAgICAgIGlmICgobGVuZ3RoICs9IGcgKyAxKSA+IHdpZHRoKSBicmVhaztcbiAgICAgIGcgPSBncm91cGluZ1tqID0gKGogKyAxKSAlIGdyb3VwaW5nLmxlbmd0aF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHQucmV2ZXJzZSgpLmpvaW4odGhvdXNhbmRzKTtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG51bWVyYWxzKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bMC05XS9nLCBmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gbnVtZXJhbHNbK2ldO1xuICAgIH0pO1xuICB9O1xufVxuIiwiLy8gW1tmaWxsXWFsaWduXVtzaWduXVtzeW1ib2xdWzBdW3dpZHRoXVssXVsucHJlY2lzaW9uXVt+XVt0eXBlXVxudmFyIHJlID0gL14oPzooLik/KFs8Pj1eXSkpPyhbK1xcLSggXSk/KFskI10pPygwKT8oXFxkKyk/KCwpPyhcXC5cXGQrKT8ofik/KFthLXolXSk/JC9pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKSB7XG4gIGlmICghKG1hdGNoID0gcmUuZXhlYyhzcGVjaWZpZXIpKSkgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBmb3JtYXQ6IFwiICsgc3BlY2lmaWVyKTtcbiAgdmFyIG1hdGNoO1xuICByZXR1cm4gbmV3IEZvcm1hdFNwZWNpZmllcih7XG4gICAgZmlsbDogbWF0Y2hbMV0sXG4gICAgYWxpZ246IG1hdGNoWzJdLFxuICAgIHNpZ246IG1hdGNoWzNdLFxuICAgIHN5bWJvbDogbWF0Y2hbNF0sXG4gICAgemVybzogbWF0Y2hbNV0sXG4gICAgd2lkdGg6IG1hdGNoWzZdLFxuICAgIGNvbW1hOiBtYXRjaFs3XSxcbiAgICBwcmVjaXNpb246IG1hdGNoWzhdICYmIG1hdGNoWzhdLnNsaWNlKDEpLFxuICAgIHRyaW06IG1hdGNoWzldLFxuICAgIHR5cGU6IG1hdGNoWzEwXVxuICB9KTtcbn1cblxuZm9ybWF0U3BlY2lmaWVyLnByb3RvdHlwZSA9IEZvcm1hdFNwZWNpZmllci5wcm90b3R5cGU7IC8vIGluc3RhbmNlb2ZcblxuZXhwb3J0IGZ1bmN0aW9uIEZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpIHtcbiAgdGhpcy5maWxsID0gc3BlY2lmaWVyLmZpbGwgPT09IHVuZGVmaW5lZCA/IFwiIFwiIDogc3BlY2lmaWVyLmZpbGwgKyBcIlwiO1xuICB0aGlzLmFsaWduID0gc3BlY2lmaWVyLmFsaWduID09PSB1bmRlZmluZWQgPyBcIj5cIiA6IHNwZWNpZmllci5hbGlnbiArIFwiXCI7XG4gIHRoaXMuc2lnbiA9IHNwZWNpZmllci5zaWduID09PSB1bmRlZmluZWQgPyBcIi1cIiA6IHNwZWNpZmllci5zaWduICsgXCJcIjtcbiAgdGhpcy5zeW1ib2wgPSBzcGVjaWZpZXIuc3ltYm9sID09PSB1bmRlZmluZWQgPyBcIlwiIDogc3BlY2lmaWVyLnN5bWJvbCArIFwiXCI7XG4gIHRoaXMuemVybyA9ICEhc3BlY2lmaWVyLnplcm87XG4gIHRoaXMud2lkdGggPSBzcGVjaWZpZXIud2lkdGggPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6ICtzcGVjaWZpZXIud2lkdGg7XG4gIHRoaXMuY29tbWEgPSAhIXNwZWNpZmllci5jb21tYTtcbiAgdGhpcy5wcmVjaXNpb24gPSBzcGVjaWZpZXIucHJlY2lzaW9uID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiArc3BlY2lmaWVyLnByZWNpc2lvbjtcbiAgdGhpcy50cmltID0gISFzcGVjaWZpZXIudHJpbTtcbiAgdGhpcy50eXBlID0gc3BlY2lmaWVyLnR5cGUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBzcGVjaWZpZXIudHlwZSArIFwiXCI7XG59XG5cbkZvcm1hdFNwZWNpZmllci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZmlsbFxuICAgICAgKyB0aGlzLmFsaWduXG4gICAgICArIHRoaXMuc2lnblxuICAgICAgKyB0aGlzLnN5bWJvbFxuICAgICAgKyAodGhpcy56ZXJvID8gXCIwXCIgOiBcIlwiKVxuICAgICAgKyAodGhpcy53aWR0aCA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IE1hdGgubWF4KDEsIHRoaXMud2lkdGggfCAwKSlcbiAgICAgICsgKHRoaXMuY29tbWEgPyBcIixcIiA6IFwiXCIpXG4gICAgICArICh0aGlzLnByZWNpc2lvbiA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IFwiLlwiICsgTWF0aC5tYXgoMCwgdGhpcy5wcmVjaXNpb24gfCAwKSlcbiAgICAgICsgKHRoaXMudHJpbSA/IFwiflwiIDogXCJcIilcbiAgICAgICsgdGhpcy50eXBlO1xufTtcbiIsIi8vIFRyaW1zIGluc2lnbmlmaWNhbnQgemVyb3MsIGUuZy4sIHJlcGxhY2VzIDEuMjAwMGsgd2l0aCAxLjJrLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocykge1xuICBvdXQ6IGZvciAodmFyIG4gPSBzLmxlbmd0aCwgaSA9IDEsIGkwID0gLTEsIGkxOyBpIDwgbjsgKytpKSB7XG4gICAgc3dpdGNoIChzW2ldKSB7XG4gICAgICBjYXNlIFwiLlwiOiBpMCA9IGkxID0gaTsgYnJlYWs7XG4gICAgICBjYXNlIFwiMFwiOiBpZiAoaTAgPT09IDApIGkwID0gaTsgaTEgPSBpOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IGlmICghK3NbaV0pIGJyZWFrIG91dDsgaWYgKGkwID4gMCkgaTAgPSAwOyBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGkwID4gMCA/IHMuc2xpY2UoMCwgaTApICsgcy5zbGljZShpMSArIDEpIDogcztcbn1cbiIsImltcG9ydCB7Zm9ybWF0RGVjaW1hbFBhcnRzfSBmcm9tIFwiLi9mb3JtYXREZWNpbWFsLmpzXCI7XG5cbmV4cG9ydCB2YXIgcHJlZml4RXhwb25lbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgsIHApIHtcbiAgdmFyIGQgPSBmb3JtYXREZWNpbWFsUGFydHMoeCwgcCk7XG4gIGlmICghZCkgcmV0dXJuIHggKyBcIlwiO1xuICB2YXIgY29lZmZpY2llbnQgPSBkWzBdLFxuICAgICAgZXhwb25lbnQgPSBkWzFdLFxuICAgICAgaSA9IGV4cG9uZW50IC0gKHByZWZpeEV4cG9uZW50ID0gTWF0aC5tYXgoLTgsIE1hdGgubWluKDgsIE1hdGguZmxvb3IoZXhwb25lbnQgLyAzKSkpICogMykgKyAxLFxuICAgICAgbiA9IGNvZWZmaWNpZW50Lmxlbmd0aDtcbiAgcmV0dXJuIGkgPT09IG4gPyBjb2VmZmljaWVudFxuICAgICAgOiBpID4gbiA/IGNvZWZmaWNpZW50ICsgbmV3IEFycmF5KGkgLSBuICsgMSkuam9pbihcIjBcIilcbiAgICAgIDogaSA+IDAgPyBjb2VmZmljaWVudC5zbGljZSgwLCBpKSArIFwiLlwiICsgY29lZmZpY2llbnQuc2xpY2UoaSlcbiAgICAgIDogXCIwLlwiICsgbmV3IEFycmF5KDEgLSBpKS5qb2luKFwiMFwiKSArIGZvcm1hdERlY2ltYWxQYXJ0cyh4LCBNYXRoLm1heCgwLCBwICsgaSAtIDEpKVswXTsgLy8gbGVzcyB0aGFuIDF5IVxufVxuIiwiaW1wb3J0IHtmb3JtYXREZWNpbWFsUGFydHN9IGZyb20gXCIuL2Zvcm1hdERlY2ltYWwuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgcCkge1xuICB2YXIgZCA9IGZvcm1hdERlY2ltYWxQYXJ0cyh4LCBwKTtcbiAgaWYgKCFkKSByZXR1cm4geCArIFwiXCI7XG4gIHZhciBjb2VmZmljaWVudCA9IGRbMF0sXG4gICAgICBleHBvbmVudCA9IGRbMV07XG4gIHJldHVybiBleHBvbmVudCA8IDAgPyBcIjAuXCIgKyBuZXcgQXJyYXkoLWV4cG9uZW50KS5qb2luKFwiMFwiKSArIGNvZWZmaWNpZW50XG4gICAgICA6IGNvZWZmaWNpZW50Lmxlbmd0aCA+IGV4cG9uZW50ICsgMSA/IGNvZWZmaWNpZW50LnNsaWNlKDAsIGV4cG9uZW50ICsgMSkgKyBcIi5cIiArIGNvZWZmaWNpZW50LnNsaWNlKGV4cG9uZW50ICsgMSlcbiAgICAgIDogY29lZmZpY2llbnQgKyBuZXcgQXJyYXkoZXhwb25lbnQgLSBjb2VmZmljaWVudC5sZW5ndGggKyAyKS5qb2luKFwiMFwiKTtcbn1cbiIsImltcG9ydCBmb3JtYXREZWNpbWFsIGZyb20gXCIuL2Zvcm1hdERlY2ltYWwuanNcIjtcbmltcG9ydCBmb3JtYXRQcmVmaXhBdXRvIGZyb20gXCIuL2Zvcm1hdFByZWZpeEF1dG8uanNcIjtcbmltcG9ydCBmb3JtYXRSb3VuZGVkIGZyb20gXCIuL2Zvcm1hdFJvdW5kZWQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIiVcIjogKHgsIHApID0+ICh4ICogMTAwKS50b0ZpeGVkKHApLFxuICBcImJcIjogKHgpID0+IE1hdGgucm91bmQoeCkudG9TdHJpbmcoMiksXG4gIFwiY1wiOiAoeCkgPT4geCArIFwiXCIsXG4gIFwiZFwiOiBmb3JtYXREZWNpbWFsLFxuICBcImVcIjogKHgsIHApID0+IHgudG9FeHBvbmVudGlhbChwKSxcbiAgXCJmXCI6ICh4LCBwKSA9PiB4LnRvRml4ZWQocCksXG4gIFwiZ1wiOiAoeCwgcCkgPT4geC50b1ByZWNpc2lvbihwKSxcbiAgXCJvXCI6ICh4KSA9PiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDgpLFxuICBcInBcIjogKHgsIHApID0+IGZvcm1hdFJvdW5kZWQoeCAqIDEwMCwgcCksXG4gIFwiclwiOiBmb3JtYXRSb3VuZGVkLFxuICBcInNcIjogZm9ybWF0UHJlZml4QXV0byxcbiAgXCJYXCI6ICh4KSA9PiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpLFxuICBcInhcIjogKHgpID0+IE1hdGgucm91bmQoeCkudG9TdHJpbmcoMTYpXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4geDtcbn1cbiIsImltcG9ydCBleHBvbmVudCBmcm9tIFwiLi9leHBvbmVudC5qc1wiO1xuaW1wb3J0IGZvcm1hdEdyb3VwIGZyb20gXCIuL2Zvcm1hdEdyb3VwLmpzXCI7XG5pbXBvcnQgZm9ybWF0TnVtZXJhbHMgZnJvbSBcIi4vZm9ybWF0TnVtZXJhbHMuanNcIjtcbmltcG9ydCBmb3JtYXRTcGVjaWZpZXIgZnJvbSBcIi4vZm9ybWF0U3BlY2lmaWVyLmpzXCI7XG5pbXBvcnQgZm9ybWF0VHJpbSBmcm9tIFwiLi9mb3JtYXRUcmltLmpzXCI7XG5pbXBvcnQgZm9ybWF0VHlwZXMgZnJvbSBcIi4vZm9ybWF0VHlwZXMuanNcIjtcbmltcG9ydCB7cHJlZml4RXhwb25lbnR9IGZyb20gXCIuL2Zvcm1hdFByZWZpeEF1dG8uanNcIjtcbmltcG9ydCBpZGVudGl0eSBmcm9tIFwiLi9pZGVudGl0eS5qc1wiO1xuXG52YXIgbWFwID0gQXJyYXkucHJvdG90eXBlLm1hcCxcbiAgICBwcmVmaXhlcyA9IFtcInlcIixcInpcIixcImFcIixcImZcIixcInBcIixcIm5cIixcIsK1XCIsXCJtXCIsXCJcIixcImtcIixcIk1cIixcIkdcIixcIlRcIixcIlBcIixcIkVcIixcIlpcIixcIllcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGxvY2FsZSkge1xuICB2YXIgZ3JvdXAgPSBsb2NhbGUuZ3JvdXBpbmcgPT09IHVuZGVmaW5lZCB8fCBsb2NhbGUudGhvdXNhbmRzID09PSB1bmRlZmluZWQgPyBpZGVudGl0eSA6IGZvcm1hdEdyb3VwKG1hcC5jYWxsKGxvY2FsZS5ncm91cGluZywgTnVtYmVyKSwgbG9jYWxlLnRob3VzYW5kcyArIFwiXCIpLFxuICAgICAgY3VycmVuY3lQcmVmaXggPSBsb2NhbGUuY3VycmVuY3kgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBsb2NhbGUuY3VycmVuY3lbMF0gKyBcIlwiLFxuICAgICAgY3VycmVuY3lTdWZmaXggPSBsb2NhbGUuY3VycmVuY3kgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBsb2NhbGUuY3VycmVuY3lbMV0gKyBcIlwiLFxuICAgICAgZGVjaW1hbCA9IGxvY2FsZS5kZWNpbWFsID09PSB1bmRlZmluZWQgPyBcIi5cIiA6IGxvY2FsZS5kZWNpbWFsICsgXCJcIixcbiAgICAgIG51bWVyYWxzID0gbG9jYWxlLm51bWVyYWxzID09PSB1bmRlZmluZWQgPyBpZGVudGl0eSA6IGZvcm1hdE51bWVyYWxzKG1hcC5jYWxsKGxvY2FsZS5udW1lcmFscywgU3RyaW5nKSksXG4gICAgICBwZXJjZW50ID0gbG9jYWxlLnBlcmNlbnQgPT09IHVuZGVmaW5lZCA/IFwiJVwiIDogbG9jYWxlLnBlcmNlbnQgKyBcIlwiLFxuICAgICAgbWludXMgPSBsb2NhbGUubWludXMgPT09IHVuZGVmaW5lZCA/IFwi4oiSXCIgOiBsb2NhbGUubWludXMgKyBcIlwiLFxuICAgICAgbmFuID0gbG9jYWxlLm5hbiA9PT0gdW5kZWZpbmVkID8gXCJOYU5cIiA6IGxvY2FsZS5uYW4gKyBcIlwiO1xuXG4gIGZ1bmN0aW9uIG5ld0Zvcm1hdChzcGVjaWZpZXIpIHtcbiAgICBzcGVjaWZpZXIgPSBmb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKTtcblxuICAgIHZhciBmaWxsID0gc3BlY2lmaWVyLmZpbGwsXG4gICAgICAgIGFsaWduID0gc3BlY2lmaWVyLmFsaWduLFxuICAgICAgICBzaWduID0gc3BlY2lmaWVyLnNpZ24sXG4gICAgICAgIHN5bWJvbCA9IHNwZWNpZmllci5zeW1ib2wsXG4gICAgICAgIHplcm8gPSBzcGVjaWZpZXIuemVybyxcbiAgICAgICAgd2lkdGggPSBzcGVjaWZpZXIud2lkdGgsXG4gICAgICAgIGNvbW1hID0gc3BlY2lmaWVyLmNvbW1hLFxuICAgICAgICBwcmVjaXNpb24gPSBzcGVjaWZpZXIucHJlY2lzaW9uLFxuICAgICAgICB0cmltID0gc3BlY2lmaWVyLnRyaW0sXG4gICAgICAgIHR5cGUgPSBzcGVjaWZpZXIudHlwZTtcblxuICAgIC8vIFRoZSBcIm5cIiB0eXBlIGlzIGFuIGFsaWFzIGZvciBcIixnXCIuXG4gICAgaWYgKHR5cGUgPT09IFwiblwiKSBjb21tYSA9IHRydWUsIHR5cGUgPSBcImdcIjtcblxuICAgIC8vIFRoZSBcIlwiIHR5cGUsIGFuZCBhbnkgaW52YWxpZCB0eXBlLCBpcyBhbiBhbGlhcyBmb3IgXCIuMTJ+Z1wiLlxuICAgIGVsc2UgaWYgKCFmb3JtYXRUeXBlc1t0eXBlXSkgcHJlY2lzaW9uID09PSB1bmRlZmluZWQgJiYgKHByZWNpc2lvbiA9IDEyKSwgdHJpbSA9IHRydWUsIHR5cGUgPSBcImdcIjtcblxuICAgIC8vIElmIHplcm8gZmlsbCBpcyBzcGVjaWZpZWQsIHBhZGRpbmcgZ29lcyBhZnRlciBzaWduIGFuZCBiZWZvcmUgZGlnaXRzLlxuICAgIGlmICh6ZXJvIHx8IChmaWxsID09PSBcIjBcIiAmJiBhbGlnbiA9PT0gXCI9XCIpKSB6ZXJvID0gdHJ1ZSwgZmlsbCA9IFwiMFwiLCBhbGlnbiA9IFwiPVwiO1xuXG4gICAgLy8gQ29tcHV0ZSB0aGUgcHJlZml4IGFuZCBzdWZmaXguXG4gICAgLy8gRm9yIFNJLXByZWZpeCwgdGhlIHN1ZmZpeCBpcyBsYXppbHkgY29tcHV0ZWQuXG4gICAgdmFyIHByZWZpeCA9IHN5bWJvbCA9PT0gXCIkXCIgPyBjdXJyZW5jeVByZWZpeCA6IHN5bWJvbCA9PT0gXCIjXCIgJiYgL1tib3hYXS8udGVzdCh0eXBlKSA/IFwiMFwiICsgdHlwZS50b0xvd2VyQ2FzZSgpIDogXCJcIixcbiAgICAgICAgc3VmZml4ID0gc3ltYm9sID09PSBcIiRcIiA/IGN1cnJlbmN5U3VmZml4IDogL1slcF0vLnRlc3QodHlwZSkgPyBwZXJjZW50IDogXCJcIjtcblxuICAgIC8vIFdoYXQgZm9ybWF0IGZ1bmN0aW9uIHNob3VsZCB3ZSB1c2U/XG4gICAgLy8gSXMgdGhpcyBhbiBpbnRlZ2VyIHR5cGU/XG4gICAgLy8gQ2FuIHRoaXMgdHlwZSBnZW5lcmF0ZSBleHBvbmVudGlhbCBub3RhdGlvbj9cbiAgICB2YXIgZm9ybWF0VHlwZSA9IGZvcm1hdFR5cGVzW3R5cGVdLFxuICAgICAgICBtYXliZVN1ZmZpeCA9IC9bZGVmZ3BycyVdLy50ZXN0KHR5cGUpO1xuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHByZWNpc2lvbiBpZiBub3Qgc3BlY2lmaWVkLFxuICAgIC8vIG9yIGNsYW1wIHRoZSBzcGVjaWZpZWQgcHJlY2lzaW9uIHRvIHRoZSBzdXBwb3J0ZWQgcmFuZ2UuXG4gICAgLy8gRm9yIHNpZ25pZmljYW50IHByZWNpc2lvbiwgaXQgbXVzdCBiZSBpbiBbMSwgMjFdLlxuICAgIC8vIEZvciBmaXhlZCBwcmVjaXNpb24sIGl0IG11c3QgYmUgaW4gWzAsIDIwXS5cbiAgICBwcmVjaXNpb24gPSBwcmVjaXNpb24gPT09IHVuZGVmaW5lZCA/IDZcbiAgICAgICAgOiAvW2dwcnNdLy50ZXN0KHR5cGUpID8gTWF0aC5tYXgoMSwgTWF0aC5taW4oMjEsIHByZWNpc2lvbikpXG4gICAgICAgIDogTWF0aC5tYXgoMCwgTWF0aC5taW4oMjAsIHByZWNpc2lvbikpO1xuXG4gICAgZnVuY3Rpb24gZm9ybWF0KHZhbHVlKSB7XG4gICAgICB2YXIgdmFsdWVQcmVmaXggPSBwcmVmaXgsXG4gICAgICAgICAgdmFsdWVTdWZmaXggPSBzdWZmaXgsXG4gICAgICAgICAgaSwgbiwgYztcblxuICAgICAgaWYgKHR5cGUgPT09IFwiY1wiKSB7XG4gICAgICAgIHZhbHVlU3VmZml4ID0gZm9ybWF0VHlwZSh2YWx1ZSkgKyB2YWx1ZVN1ZmZpeDtcbiAgICAgICAgdmFsdWUgPSBcIlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSArdmFsdWU7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBzaWduLiAtMCBpcyBub3QgbGVzcyB0aGFuIDAsIGJ1dCAxIC8gLTAgaXMhXG4gICAgICAgIHZhciB2YWx1ZU5lZ2F0aXZlID0gdmFsdWUgPCAwIHx8IDEgLyB2YWx1ZSA8IDA7XG5cbiAgICAgICAgLy8gUGVyZm9ybSB0aGUgaW5pdGlhbCBmb3JtYXR0aW5nLlxuICAgICAgICB2YWx1ZSA9IGlzTmFOKHZhbHVlKSA/IG5hbiA6IGZvcm1hdFR5cGUoTWF0aC5hYnModmFsdWUpLCBwcmVjaXNpb24pO1xuXG4gICAgICAgIC8vIFRyaW0gaW5zaWduaWZpY2FudCB6ZXJvcy5cbiAgICAgICAgaWYgKHRyaW0pIHZhbHVlID0gZm9ybWF0VHJpbSh2YWx1ZSk7XG5cbiAgICAgICAgLy8gSWYgYSBuZWdhdGl2ZSB2YWx1ZSByb3VuZHMgdG8gemVybyBhZnRlciBmb3JtYXR0aW5nLCBhbmQgbm8gZXhwbGljaXQgcG9zaXRpdmUgc2lnbiBpcyByZXF1ZXN0ZWQsIGhpZGUgdGhlIHNpZ24uXG4gICAgICAgIGlmICh2YWx1ZU5lZ2F0aXZlICYmICt2YWx1ZSA9PT0gMCAmJiBzaWduICE9PSBcIitcIikgdmFsdWVOZWdhdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENvbXB1dGUgdGhlIHByZWZpeCBhbmQgc3VmZml4LlxuICAgICAgICB2YWx1ZVByZWZpeCA9ICh2YWx1ZU5lZ2F0aXZlID8gKHNpZ24gPT09IFwiKFwiID8gc2lnbiA6IG1pbnVzKSA6IHNpZ24gPT09IFwiLVwiIHx8IHNpZ24gPT09IFwiKFwiID8gXCJcIiA6IHNpZ24pICsgdmFsdWVQcmVmaXg7XG4gICAgICAgIHZhbHVlU3VmZml4ID0gKHR5cGUgPT09IFwic1wiID8gcHJlZml4ZXNbOCArIHByZWZpeEV4cG9uZW50IC8gM10gOiBcIlwiKSArIHZhbHVlU3VmZml4ICsgKHZhbHVlTmVnYXRpdmUgJiYgc2lnbiA9PT0gXCIoXCIgPyBcIilcIiA6IFwiXCIpO1xuXG4gICAgICAgIC8vIEJyZWFrIHRoZSBmb3JtYXR0ZWQgdmFsdWUgaW50byB0aGUgaW50ZWdlciDigJx2YWx1ZeKAnSBwYXJ0IHRoYXQgY2FuIGJlXG4gICAgICAgIC8vIGdyb3VwZWQsIGFuZCBmcmFjdGlvbmFsIG9yIGV4cG9uZW50aWFsIOKAnHN1ZmZpeOKAnSBwYXJ0IHRoYXQgaXMgbm90LlxuICAgICAgICBpZiAobWF5YmVTdWZmaXgpIHtcbiAgICAgICAgICBpID0gLTEsIG4gPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgICAgIGlmIChjID0gdmFsdWUuY2hhckNvZGVBdChpKSwgNDggPiBjIHx8IGMgPiA1Nykge1xuICAgICAgICAgICAgICB2YWx1ZVN1ZmZpeCA9IChjID09PSA0NiA/IGRlY2ltYWwgKyB2YWx1ZS5zbGljZShpICsgMSkgOiB2YWx1ZS5zbGljZShpKSkgKyB2YWx1ZVN1ZmZpeDtcbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBmaWxsIGNoYXJhY3RlciBpcyBub3QgXCIwXCIsIGdyb3VwaW5nIGlzIGFwcGxpZWQgYmVmb3JlIHBhZGRpbmcuXG4gICAgICBpZiAoY29tbWEgJiYgIXplcm8pIHZhbHVlID0gZ3JvdXAodmFsdWUsIEluZmluaXR5KTtcblxuICAgICAgLy8gQ29tcHV0ZSB0aGUgcGFkZGluZy5cbiAgICAgIHZhciBsZW5ndGggPSB2YWx1ZVByZWZpeC5sZW5ndGggKyB2YWx1ZS5sZW5ndGggKyB2YWx1ZVN1ZmZpeC5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IGxlbmd0aCA8IHdpZHRoID8gbmV3IEFycmF5KHdpZHRoIC0gbGVuZ3RoICsgMSkuam9pbihmaWxsKSA6IFwiXCI7XG5cbiAgICAgIC8vIElmIHRoZSBmaWxsIGNoYXJhY3RlciBpcyBcIjBcIiwgZ3JvdXBpbmcgaXMgYXBwbGllZCBhZnRlciBwYWRkaW5nLlxuICAgICAgaWYgKGNvbW1hICYmIHplcm8pIHZhbHVlID0gZ3JvdXAocGFkZGluZyArIHZhbHVlLCBwYWRkaW5nLmxlbmd0aCA/IHdpZHRoIC0gdmFsdWVTdWZmaXgubGVuZ3RoIDogSW5maW5pdHkpLCBwYWRkaW5nID0gXCJcIjtcblxuICAgICAgLy8gUmVjb25zdHJ1Y3QgdGhlIGZpbmFsIG91dHB1dCBiYXNlZCBvbiB0aGUgZGVzaXJlZCBhbGlnbm1lbnQuXG4gICAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICAgIGNhc2UgXCI8XCI6IHZhbHVlID0gdmFsdWVQcmVmaXggKyB2YWx1ZSArIHZhbHVlU3VmZml4ICsgcGFkZGluZzsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI9XCI6IHZhbHVlID0gdmFsdWVQcmVmaXggKyBwYWRkaW5nICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeDsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJeXCI6IHZhbHVlID0gcGFkZGluZy5zbGljZSgwLCBsZW5ndGggPSBwYWRkaW5nLmxlbmd0aCA+PiAxKSArIHZhbHVlUHJlZml4ICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeCArIHBhZGRpbmcuc2xpY2UobGVuZ3RoKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IHZhbHVlID0gcGFkZGluZyArIHZhbHVlUHJlZml4ICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeDsgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudW1lcmFscyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZm9ybWF0LnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3BlY2lmaWVyICsgXCJcIjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFByZWZpeChzcGVjaWZpZXIsIHZhbHVlKSB7XG4gICAgdmFyIGYgPSBuZXdGb3JtYXQoKHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpLCBzcGVjaWZpZXIudHlwZSA9IFwiZlwiLCBzcGVjaWZpZXIpKSxcbiAgICAgICAgZSA9IE1hdGgubWF4KC04LCBNYXRoLm1pbig4LCBNYXRoLmZsb29yKGV4cG9uZW50KHZhbHVlKSAvIDMpKSkgKiAzLFxuICAgICAgICBrID0gTWF0aC5wb3coMTAsIC1lKSxcbiAgICAgICAgcHJlZml4ID0gcHJlZml4ZXNbOCArIGUgLyAzXTtcbiAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBmKGsgKiB2YWx1ZSkgKyBwcmVmaXg7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZm9ybWF0OiBuZXdGb3JtYXQsXG4gICAgZm9ybWF0UHJlZml4OiBmb3JtYXRQcmVmaXhcbiAgfTtcbn1cbiIsImltcG9ydCBmb3JtYXRMb2NhbGUgZnJvbSBcIi4vbG9jYWxlLmpzXCI7XG5cbnZhciBsb2NhbGU7XG5leHBvcnQgdmFyIGZvcm1hdDtcbmV4cG9ydCB2YXIgZm9ybWF0UHJlZml4O1xuXG5kZWZhdWx0TG9jYWxlKHtcbiAgdGhvdXNhbmRzOiBcIixcIixcbiAgZ3JvdXBpbmc6IFszXSxcbiAgY3VycmVuY3k6IFtcIiRcIiwgXCJcIl1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZhdWx0TG9jYWxlKGRlZmluaXRpb24pIHtcbiAgbG9jYWxlID0gZm9ybWF0TG9jYWxlKGRlZmluaXRpb24pO1xuICBmb3JtYXQgPSBsb2NhbGUuZm9ybWF0O1xuICBmb3JtYXRQcmVmaXggPSBsb2NhbGUuZm9ybWF0UHJlZml4O1xuICByZXR1cm4gbG9jYWxlO1xufVxuIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0ZXApIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIC1leHBvbmVudChNYXRoLmFicyhzdGVwKSkpO1xufVxuIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0ZXAsIHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1heCgtOCwgTWF0aC5taW4oOCwgTWF0aC5mbG9vcihleHBvbmVudCh2YWx1ZSkgLyAzKSkpICogMyAtIGV4cG9uZW50KE1hdGguYWJzKHN0ZXApKSk7XG59XG4iLCJpbXBvcnQgZXhwb25lbnQgZnJvbSBcIi4vZXhwb25lbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RlcCwgbWF4KSB7XG4gIHN0ZXAgPSBNYXRoLmFicyhzdGVwKSwgbWF4ID0gTWF0aC5hYnMobWF4KSAtIHN0ZXA7XG4gIHJldHVybiBNYXRoLm1heCgwLCBleHBvbmVudChtYXgpIC0gZXhwb25lbnQoc3RlcCkpICsgMTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnN0YW50cyh4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG51bWJlcih4KSB7XG4gIHJldHVybiAreDtcbn1cbiIsImltcG9ydCB7YmlzZWN0fSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7aW50ZXJwb2xhdGUgYXMgaW50ZXJwb2xhdGVWYWx1ZSwgaW50ZXJwb2xhdGVOdW1iZXIsIGludGVycG9sYXRlUm91bmR9IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5pbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlci5qc1wiO1xuXG52YXIgdW5pdCA9IFswLCAxXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KHgpIHtcbiAgcmV0dXJuIHg7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZShhLCBiKSB7XG4gIHJldHVybiAoYiAtPSAoYSA9ICthKSlcbiAgICAgID8gZnVuY3Rpb24oeCkgeyByZXR1cm4gKHggLSBhKSAvIGI7IH1cbiAgICAgIDogY29uc3RhbnQoaXNOYU4oYikgPyBOYU4gOiAwLjUpO1xufVxuXG5mdW5jdGlvbiBjbGFtcGVyKGEsIGIpIHtcbiAgdmFyIHQ7XG4gIGlmIChhID4gYikgdCA9IGEsIGEgPSBiLCBiID0gdDtcbiAgcmV0dXJuIGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgubWF4KGEsIE1hdGgubWluKGIsIHgpKTsgfTtcbn1cblxuLy8gbm9ybWFsaXplKGEsIGIpKHgpIHRha2VzIGEgZG9tYWluIHZhbHVlIHggaW4gW2EsYl0gYW5kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcGFyYW1ldGVyIHQgaW4gWzAsMV0uXG4vLyBpbnRlcnBvbGF0ZShhLCBiKSh0KSB0YWtlcyBhIHBhcmFtZXRlciB0IGluIFswLDFdIGFuZCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHJhbmdlIHZhbHVlIHggaW4gW2EsYl0uXG5mdW5jdGlvbiBiaW1hcChkb21haW4sIHJhbmdlLCBpbnRlcnBvbGF0ZSkge1xuICB2YXIgZDAgPSBkb21haW5bMF0sIGQxID0gZG9tYWluWzFdLCByMCA9IHJhbmdlWzBdLCByMSA9IHJhbmdlWzFdO1xuICBpZiAoZDEgPCBkMCkgZDAgPSBub3JtYWxpemUoZDEsIGQwKSwgcjAgPSBpbnRlcnBvbGF0ZShyMSwgcjApO1xuICBlbHNlIGQwID0gbm9ybWFsaXplKGQwLCBkMSksIHIwID0gaW50ZXJwb2xhdGUocjAsIHIxKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHIwKGQwKHgpKTsgfTtcbn1cblxuZnVuY3Rpb24gcG9seW1hcChkb21haW4sIHJhbmdlLCBpbnRlcnBvbGF0ZSkge1xuICB2YXIgaiA9IE1hdGgubWluKGRvbWFpbi5sZW5ndGgsIHJhbmdlLmxlbmd0aCkgLSAxLFxuICAgICAgZCA9IG5ldyBBcnJheShqKSxcbiAgICAgIHIgPSBuZXcgQXJyYXkoaiksXG4gICAgICBpID0gLTE7XG5cbiAgLy8gUmV2ZXJzZSBkZXNjZW5kaW5nIGRvbWFpbnMuXG4gIGlmIChkb21haW5bal0gPCBkb21haW5bMF0pIHtcbiAgICBkb21haW4gPSBkb21haW4uc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgcmFuZ2UgPSByYW5nZS5zbGljZSgpLnJldmVyc2UoKTtcbiAgfVxuXG4gIHdoaWxlICgrK2kgPCBqKSB7XG4gICAgZFtpXSA9IG5vcm1hbGl6ZShkb21haW5baV0sIGRvbWFpbltpICsgMV0pO1xuICAgIHJbaV0gPSBpbnRlcnBvbGF0ZShyYW5nZVtpXSwgcmFuZ2VbaSArIDFdKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbih4KSB7XG4gICAgdmFyIGkgPSBiaXNlY3QoZG9tYWluLCB4LCAxLCBqKSAtIDE7XG4gICAgcmV0dXJuIHJbaV0oZFtpXSh4KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXRcbiAgICAgIC5kb21haW4oc291cmNlLmRvbWFpbigpKVxuICAgICAgLnJhbmdlKHNvdXJjZS5yYW5nZSgpKVxuICAgICAgLmludGVycG9sYXRlKHNvdXJjZS5pbnRlcnBvbGF0ZSgpKVxuICAgICAgLmNsYW1wKHNvdXJjZS5jbGFtcCgpKVxuICAgICAgLnVua25vd24oc291cmNlLnVua25vd24oKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1lcigpIHtcbiAgdmFyIGRvbWFpbiA9IHVuaXQsXG4gICAgICByYW5nZSA9IHVuaXQsXG4gICAgICBpbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlVmFsdWUsXG4gICAgICB0cmFuc2Zvcm0sXG4gICAgICB1bnRyYW5zZm9ybSxcbiAgICAgIHVua25vd24sXG4gICAgICBjbGFtcCA9IGlkZW50aXR5LFxuICAgICAgcGllY2V3aXNlLFxuICAgICAgb3V0cHV0LFxuICAgICAgaW5wdXQ7XG5cbiAgZnVuY3Rpb24gcmVzY2FsZSgpIHtcbiAgICB2YXIgbiA9IE1hdGgubWluKGRvbWFpbi5sZW5ndGgsIHJhbmdlLmxlbmd0aCk7XG4gICAgaWYgKGNsYW1wICE9PSBpZGVudGl0eSkgY2xhbXAgPSBjbGFtcGVyKGRvbWFpblswXSwgZG9tYWluW24gLSAxXSk7XG4gICAgcGllY2V3aXNlID0gbiA+IDIgPyBwb2x5bWFwIDogYmltYXA7XG4gICAgb3V0cHV0ID0gaW5wdXQgPSBudWxsO1xuICAgIHJldHVybiBzY2FsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICByZXR1cm4geCA9PSBudWxsIHx8IGlzTmFOKHggPSAreCkgPyB1bmtub3duIDogKG91dHB1dCB8fCAob3V0cHV0ID0gcGllY2V3aXNlKGRvbWFpbi5tYXAodHJhbnNmb3JtKSwgcmFuZ2UsIGludGVycG9sYXRlKSkpKHRyYW5zZm9ybShjbGFtcCh4KSkpO1xuICB9XG5cbiAgc2NhbGUuaW52ZXJ0ID0gZnVuY3Rpb24oeSkge1xuICAgIHJldHVybiBjbGFtcCh1bnRyYW5zZm9ybSgoaW5wdXQgfHwgKGlucHV0ID0gcGllY2V3aXNlKHJhbmdlLCBkb21haW4ubWFwKHRyYW5zZm9ybSksIGludGVycG9sYXRlTnVtYmVyKSkpKHkpKSk7XG4gIH07XG5cbiAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRvbWFpbiA9IEFycmF5LmZyb20oXywgbnVtYmVyKSwgcmVzY2FsZSgpKSA6IGRvbWFpbi5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLnJhbmdlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHJhbmdlID0gQXJyYXkuZnJvbShfKSwgcmVzY2FsZSgpKSA6IHJhbmdlLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUucmFuZ2VSb3VuZCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gcmFuZ2UgPSBBcnJheS5mcm9tKF8pLCBpbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlUm91bmQsIHJlc2NhbGUoKTtcbiAgfTtcblxuICBzY2FsZS5jbGFtcCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjbGFtcCA9IF8gPyB0cnVlIDogaWRlbnRpdHksIHJlc2NhbGUoKSkgOiBjbGFtcCAhPT0gaWRlbnRpdHk7XG4gIH07XG5cbiAgc2NhbGUuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaW50ZXJwb2xhdGUgPSBfLCByZXNjYWxlKCkpIDogaW50ZXJwb2xhdGU7XG4gIH07XG5cbiAgc2NhbGUudW5rbm93biA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh1bmtub3duID0gXywgc2NhbGUpIDogdW5rbm93bjtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24odCwgdSkge1xuICAgIHRyYW5zZm9ybSA9IHQsIHVudHJhbnNmb3JtID0gdTtcbiAgICByZXR1cm4gcmVzY2FsZSgpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250aW51b3VzKCkge1xuICByZXR1cm4gdHJhbnNmb3JtZXIoKShpZGVudGl0eSwgaWRlbnRpdHkpO1xufVxuIiwiaW1wb3J0IHt0aWNrU3RlcH0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge2Zvcm1hdCwgZm9ybWF0UHJlZml4LCBmb3JtYXRTcGVjaWZpZXIsIHByZWNpc2lvbkZpeGVkLCBwcmVjaXNpb25QcmVmaXgsIHByZWNpc2lvblJvdW5kfSBmcm9tIFwiZDMtZm9ybWF0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpY2tGb3JtYXQoc3RhcnQsIHN0b3AsIGNvdW50LCBzcGVjaWZpZXIpIHtcbiAgdmFyIHN0ZXAgPSB0aWNrU3RlcChzdGFydCwgc3RvcCwgY291bnQpLFxuICAgICAgcHJlY2lzaW9uO1xuICBzcGVjaWZpZXIgPSBmb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyID09IG51bGwgPyBcIixmXCIgOiBzcGVjaWZpZXIpO1xuICBzd2l0Y2ggKHNwZWNpZmllci50eXBlKSB7XG4gICAgY2FzZSBcInNcIjoge1xuICAgICAgdmFyIHZhbHVlID0gTWF0aC5tYXgoTWF0aC5hYnMoc3RhcnQpLCBNYXRoLmFicyhzdG9wKSk7XG4gICAgICBpZiAoc3BlY2lmaWVyLnByZWNpc2lvbiA9PSBudWxsICYmICFpc05hTihwcmVjaXNpb24gPSBwcmVjaXNpb25QcmVmaXgoc3RlcCwgdmFsdWUpKSkgc3BlY2lmaWVyLnByZWNpc2lvbiA9IHByZWNpc2lvbjtcbiAgICAgIHJldHVybiBmb3JtYXRQcmVmaXgoc3BlY2lmaWVyLCB2YWx1ZSk7XG4gICAgfVxuICAgIGNhc2UgXCJcIjpcbiAgICBjYXNlIFwiZVwiOlxuICAgIGNhc2UgXCJnXCI6XG4gICAgY2FzZSBcInBcIjpcbiAgICBjYXNlIFwiclwiOiB7XG4gICAgICBpZiAoc3BlY2lmaWVyLnByZWNpc2lvbiA9PSBudWxsICYmICFpc05hTihwcmVjaXNpb24gPSBwcmVjaXNpb25Sb3VuZChzdGVwLCBNYXRoLm1heChNYXRoLmFicyhzdGFydCksIE1hdGguYWJzKHN0b3ApKSkpKSBzcGVjaWZpZXIucHJlY2lzaW9uID0gcHJlY2lzaW9uIC0gKHNwZWNpZmllci50eXBlID09PSBcImVcIik7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBcImZcIjpcbiAgICBjYXNlIFwiJVwiOiB7XG4gICAgICBpZiAoc3BlY2lmaWVyLnByZWNpc2lvbiA9PSBudWxsICYmICFpc05hTihwcmVjaXNpb24gPSBwcmVjaXNpb25GaXhlZChzdGVwKSkpIHNwZWNpZmllci5wcmVjaXNpb24gPSBwcmVjaXNpb24gLSAoc3BlY2lmaWVyLnR5cGUgPT09IFwiJVwiKSAqIDI7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZvcm1hdChzcGVjaWZpZXIpO1xufVxuIiwiaW1wb3J0IHt0aWNrcywgdGlja0luY3JlbWVudH0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQgY29udGludW91cywge2NvcHl9IGZyb20gXCIuL2NvbnRpbnVvdXMuanNcIjtcbmltcG9ydCB7aW5pdFJhbmdlfSBmcm9tIFwiLi9pbml0LmpzXCI7XG5pbXBvcnQgdGlja0Zvcm1hdCBmcm9tIFwiLi90aWNrRm9ybWF0LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5lYXJpc2goc2NhbGUpIHtcbiAgdmFyIGRvbWFpbiA9IHNjYWxlLmRvbWFpbjtcblxuICBzY2FsZS50aWNrcyA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgdmFyIGQgPSBkb21haW4oKTtcbiAgICByZXR1cm4gdGlja3MoZFswXSwgZFtkLmxlbmd0aCAtIDFdLCBjb3VudCA9PSBudWxsID8gMTAgOiBjb3VudCk7XG4gIH07XG5cbiAgc2NhbGUudGlja0Zvcm1hdCA9IGZ1bmN0aW9uKGNvdW50LCBzcGVjaWZpZXIpIHtcbiAgICB2YXIgZCA9IGRvbWFpbigpO1xuICAgIHJldHVybiB0aWNrRm9ybWF0KGRbMF0sIGRbZC5sZW5ndGggLSAxXSwgY291bnQgPT0gbnVsbCA/IDEwIDogY291bnQsIHNwZWNpZmllcik7XG4gIH07XG5cbiAgc2NhbGUubmljZSA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgaWYgKGNvdW50ID09IG51bGwpIGNvdW50ID0gMTA7XG5cbiAgICB2YXIgZCA9IGRvbWFpbigpO1xuICAgIHZhciBpMCA9IDA7XG4gICAgdmFyIGkxID0gZC5sZW5ndGggLSAxO1xuICAgIHZhciBzdGFydCA9IGRbaTBdO1xuICAgIHZhciBzdG9wID0gZFtpMV07XG4gICAgdmFyIHByZXN0ZXA7XG4gICAgdmFyIHN0ZXA7XG4gICAgdmFyIG1heEl0ZXIgPSAxMDtcblxuICAgIGlmIChzdG9wIDwgc3RhcnQpIHtcbiAgICAgIHN0ZXAgPSBzdGFydCwgc3RhcnQgPSBzdG9wLCBzdG9wID0gc3RlcDtcbiAgICAgIHN0ZXAgPSBpMCwgaTAgPSBpMSwgaTEgPSBzdGVwO1xuICAgIH1cbiAgICBcbiAgICB3aGlsZSAobWF4SXRlci0tID4gMCkge1xuICAgICAgc3RlcCA9IHRpY2tJbmNyZW1lbnQoc3RhcnQsIHN0b3AsIGNvdW50KTtcbiAgICAgIGlmIChzdGVwID09PSBwcmVzdGVwKSB7XG4gICAgICAgIGRbaTBdID0gc3RhcnRcbiAgICAgICAgZFtpMV0gPSBzdG9wXG4gICAgICAgIHJldHVybiBkb21haW4oZCk7XG4gICAgICB9IGVsc2UgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICAgIHN0YXJ0ID0gTWF0aC5mbG9vcihzdGFydCAvIHN0ZXApICogc3RlcDtcbiAgICAgICAgc3RvcCA9IE1hdGguY2VpbChzdG9wIC8gc3RlcCkgKiBzdGVwO1xuICAgICAgfSBlbHNlIGlmIChzdGVwIDwgMCkge1xuICAgICAgICBzdGFydCA9IE1hdGguY2VpbChzdGFydCAqIHN0ZXApIC8gc3RlcDtcbiAgICAgICAgc3RvcCA9IE1hdGguZmxvb3Ioc3RvcCAqIHN0ZXApIC8gc3RlcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcHJlc3RlcCA9IHN0ZXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjYWxlO1xuICB9O1xuXG4gIHJldHVybiBzY2FsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGluZWFyKCkge1xuICB2YXIgc2NhbGUgPSBjb250aW51b3VzKCk7XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb3B5KHNjYWxlLCBsaW5lYXIoKSk7XG4gIH07XG5cbiAgaW5pdFJhbmdlLmFwcGx5KHNjYWxlLCBhcmd1bWVudHMpO1xuXG4gIHJldHVybiBsaW5lYXJpc2goc2NhbGUpO1xufVxuIl0sIm5hbWVzIjpbIm51bWJlciIsInZhbHVlIiwiY29uc3RhbnQiLCJjb2xvciIsInJnYiIsInN0cmluZyIsImlkZW50aXR5IiwiaW50ZXJwb2xhdGUiLCJpbnRlcnBvbGF0ZVZhbHVlIiwiaW50ZXJwb2xhdGVOdW1iZXIiLCJpbml0UmFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQWUsU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN4QyxFQUFFLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNsRjs7QUNGZSxTQUFTLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3pDLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsR0FBRztBQUNyQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDaEIsTUFBTSxHQUFHLENBQUM7QUFDVjs7QUNIZSxTQUFTLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDcEMsRUFBRSxJQUFJLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUN0QixJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUM7QUFDekIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0IsR0FBRyxNQUFNO0FBQ1QsSUFBSSxRQUFRLEdBQUcsQ0FBQyxLQUFLLFNBQVMsSUFBSSxDQUFDLEtBQUssVUFBVSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDOUQsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNkLEdBQUc7QUFDSDtBQUNBLEVBQUUsU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQzdDLElBQUksSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ2pCLE1BQU0sSUFBSSxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUMxQyxNQUFNLEdBQUc7QUFDVCxRQUFRLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDcEMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ2xELGFBQWEsRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUN0QixPQUFPLFFBQVEsRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUN4QixLQUFLO0FBQ0wsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNkLEdBQUc7QUFDSDtBQUNBLEVBQUUsU0FBUyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQzlDLElBQUksSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ2pCLE1BQU0sSUFBSSxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUMxQyxNQUFNLEdBQUc7QUFDVCxRQUFRLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDcEMsUUFBUSxJQUFJLFFBQVEsQ0FB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LENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQzlCLEVBQUUsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxFQUFFLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN0SCxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDN0IsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUMsRUFBRSxJQUFJLE9BQU8sRUFBRTtBQUNmLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUN4RSxTQUFTLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7QUFDL0QsR0FBRyxNQUFNO0FBQ1QsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdB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R0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyRSxTQUFTLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUMvQixTQUFTLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuRixTQUFTLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUM5QixRQUFRLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDbEIsQ0FBQzs7QUM5Q0Q7QUFDZSxtQkFBUSxDQUFDLENBQUMsRUFBRTtBQUMzQixFQUFFLEdBQUcsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDOUQsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsTUFBTSxLQUFLLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU07QUFDbkMsTUFBTSxLQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNO0FBQ3BELE1BQU0sU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU07QUFDaEUsS0FBSztBQUNMLEdBQUc7QUFDSCxF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QUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksR0FBRyxHQUFHLENBQUM7QUFDdEc7QUFDQTtBQUNBLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFFLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDdEY7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLE1BQU0sR0FBRyxNQUFNLEtBQUssR0FBRyxHQUFHLGNBQWMsR0FBRyxNQUFNLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO0FBQ3hILFFBQVEsTUFBTSxHQUFHLE1BQU0sS0FBSyxHQUFHLEdBQUcsY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztBQUN0QyxRQUFRLFdBQVcsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFNBQVMsR0FBRyxTQUFTLEtBQUssU0FBUyxHQUFHLENBQUM7QUFDM0MsVUFBVSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3BFLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUMvQztBQUNBLElBQUksU0FBUyxNQUFNLENB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LEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3hELEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMzQyxDQUFDO0FBQ0Q7QUFDQSxTQUFTLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtBQUM3QyxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNuRCxNQUFNLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDdEIsTUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2I7QUFDQTtBQUNBLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQzdCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN0QyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFF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LEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzVELE1BQU0sSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNILE1BQU0sT0FBTyxZQUFZLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzVDLEtBQUs7QUFDTCxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxLQUFLLEdBQUcsQ0FBQztBQUNiLElBQUksS0FBSyxHQUFHLENBQUM7QUFDYixJQUFJLEtBQUssR0FBRyxDQUFDO0FBQ2IsSUFBSSxLQUFLLEdBQUcsRUFBRTtBQUNkLE1BQU0sSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ3pMLE1BQU0sTUFBTTtBQUNaLEtBQUs7QUFDTCxJQUFJLEtBQUssR0FBRyxDQUFDO0FBQ2IsSUFBSSxLQUFLLEdBQUcsRUFBRTtBQUNkLE1BQU0sSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDbEosTUFBTSxNQUFNO0FBQ1osS0FBSztBQUNM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
