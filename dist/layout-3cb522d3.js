'use strict';

var graph = require('./graph-55c4c685.js');
var index = require('./index-d3f4d11e.js');

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (graph.isSymbol(value)) {
    return NAN;
  }
  if (index.isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = index.isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? graph.baseFlatten(array, 1) : [];
}

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return index.setToString(index.overRest(func, undefined, flatten), func + '');
}

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return graph.baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return index.root$1.Date.now();
};

var now$1 = now;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = index.baseRest(function(object, sources) {
  object = Object(object);

  var index$1 = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && index.isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index$1 < length) {
    var source = sources[index$1];
    var props = index.keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (index.eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

var defaults$1 = defaults;

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!index.isArrayLike(collection)) {
      var iteratee = graph.baseIteratee(predicate);
      collection = graph.keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index$1 = findIndexFunc(collection, predicate, fromIndex);
    return index$1 > -1 ? iterable[iteratee ? collection[index$1] : index$1] : undefined;
  };
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax$1(length + index, 0);
  }
  return graph.baseFindIndex(array, graph.baseIteratee(predicate), index);
}

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

var find$1 = find;

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index$1 = -1,
      result = index.isArrayLike(collection) ? Array(collection.length) : [];

  graph.baseEach(collection, function(value, key, collection) {
    result[++index$1] = iteratee(value, key, collection);
  });
  return result;
}

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = index.isArray(collection) ? graph.arrayMap : baseMap;
  return func(collection, graph.baseIteratee(iteratee));
}

/**
 * Iterates over own and inherited enumerable string keyed properties of an
 * object and invokes `iteratee` for each property. The iteratee is invoked
 * with three arguments: (value, key, object). Iteratee functions may exit
 * iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forInRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forIn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
 */
function forIn(object, iteratee) {
  return object == null
    ? object
    : index.baseFor(object, graph.castFunction(iteratee), index.keysIn);
}

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  return object && graph.baseForOwn(object, graph.castFunction(iteratee));
}

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = graph.baseIteratee(iteratee);

  graph.baseForOwn(object, function(value, key, object) {
    index.baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !graph.isSymbol(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */
function max(array) {
  return (array && array.length)
    ? baseExtremum(array, index.identity, baseGt)
    : undefined;
}

/**
 * Computes the minimum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => undefined
 */
function min(array) {
  return (array && array.length)
    ? baseExtremum(array, index.identity, baseLt)
    : undefined;
}

/**
 * This method is like `_.min` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * // The `_.property` iteratee shorthand.
 * _.minBy(objects, 'n');
 * // => { 'n': 1 }
 */
function minBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, graph.baseIteratee(iteratee), baseLt)
    : undefined;
}

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!index.isObject(object)) {
    return object;
  }
  path = graph.castPath(path, object);

  var index$1 = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index$1 < length) {
    var key = graph.toKey(path[index$1]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index$1 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = index.isObject(objValue)
          ? objValue
          : (index.isIndex(path[index$1 + 1]) ? [] : {});
      }
    }
    index.assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = graph.baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, graph.castPath(path, object), value);
    }
  }
  return result;
}

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = graph.isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = graph.isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = graph.arrayMap(iteratees, function(iteratee) {
      if (index.isArray(iteratee)) {
        return function(value) {
          return graph.baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [index.identity];
  }

  var index$1 = -1;
  iteratees = graph.arrayMap(iteratees, index.baseUnary(graph.baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = graph.arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index$1, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return graph.hasIn(object, path);
  });
}

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

var pick$1 = pick;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && index.isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

var range$1 = range;

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = index.baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && index.isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && index.isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, graph.baseFlatten(iteratees, 1), []);
});

var sortBy$1 = sortBy;

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return graph.toString(prefix) + id;
}

/**
 * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
 *
 * @private
 * @param {Array} props The property identifiers.
 * @param {Array} values The property values.
 * @param {Function} assignFunc The function to assign values.
 * @returns {Object} Returns the new object.
 */
function baseZipObject(props, values, assignFunc) {
  var index = -1,
      length = props.length,
      valsLength = values.length,
      result = {};

  while (++index < length) {
    var value = index < valsLength ? values[index] : undefined;
    assignFunc(result, props[index], value);
  }
  return result;
}

/**
 * This method is like `_.fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 0.4.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.zipObject(['a', 'b'], [1, 2]);
 * // => { 'a': 1, 'b': 2 }
 */
function zipObject(props, values) {
  return baseZipObject(props || [], values || [], index.assignValue);
}

/*
 * Simple doubly linked list implementation derived from Cormen, et al.,
 * "Introduction to Algorithms".
 */

class List {
  constructor() {
    var sentinel = {};
    sentinel._next = sentinel._prev = sentinel;
    this._sentinel = sentinel;
  }
  dequeue() {
    var sentinel = this._sentinel;
    var entry = sentinel._prev;
    if (entry !== sentinel) {
      unlink(entry);
      return entry;
    }
  }
  enqueue(entry) {
    var sentinel = this._sentinel;
    if (entry._prev && entry._next) {
      unlink(entry);
    }
    entry._next = sentinel._next;
    sentinel._next._prev = entry;
    sentinel._next = entry;
    entry._prev = sentinel;
  }
  toString() {
    var strs = [];
    var sentinel = this._sentinel;
    var curr = sentinel._prev;
    while (curr !== sentinel) {
      strs.push(JSON.stringify(curr, filterOutLinks));
      curr = curr._prev;
    }
    return '[' + strs.join(', ') + ']';
  }
}

function unlink(entry) {
  entry._prev._next = entry._next;
  entry._next._prev = entry._prev;
  delete entry._next;
  delete entry._prev;
}

function filterOutLinks(k, v) {
  if (k !== '_next' && k !== '_prev') {
    return v;
  }
}

var DEFAULT_WEIGHT_FN = index.constant(1);

function greedyFAS(g, weightFn) {
  if (g.nodeCount() <= 1) {
    return [];
  }
  var state = buildState(g, weightFn || DEFAULT_WEIGHT_FN);
  var results = doGreedyFAS(state.graph, state.buckets, state.zeroIdx);

  // Expand multi-edges
  return flatten(
    map(results, function (e) {
      return g.outEdges(e.v, e.w);
    })
  );
}

function doGreedyFAS(g, buckets, zeroIdx) {
  var results = [];
  var sources = buckets[buckets.length - 1];
  var sinks = buckets[0];

  var entry;
  while (g.nodeCount()) {
    while ((entry = sinks.dequeue())) {
      removeNode(g, buckets, zeroIdx, entry);
    }
    while ((entry = sources.dequeue())) {
      removeNode(g, buckets, zeroIdx, entry);
    }
    if (g.nodeCount()) {
      for (var i = buckets.length - 2; i > 0; --i) {
        entry = buckets[i].dequeue();
        if (entry) {
          results = results.concat(removeNode(g, buckets, zeroIdx, entry, true));
          break;
        }
      }
    }
  }

  return results;
}

function removeNode(g, buckets, zeroIdx, entry, collectPredecessors) {
  var results = collectPredecessors ? [] : undefined;

  graph.forEach(g.inEdges(entry.v), function (edge) {
    var weight = g.edge(edge);
    var uEntry = g.node(edge.v);

    if (collectPredecessors) {
      results.push({ v: edge.v, w: edge.w });
    }

    uEntry.out -= weight;
    assignBucket(buckets, zeroIdx, uEntry);
  });

  graph.forEach(g.outEdges(entry.v), function (edge) {
    var weight = g.edge(edge);
    var w = edge.w;
    var wEntry = g.node(w);
    wEntry['in'] -= weight;
    assignBucket(buckets, zeroIdx, wEntry);
  });

  g.removeNode(entry.v);

  return results;
}

function buildState(g, weightFn) {
  var fasGraph = new graph.Graph();
  var maxIn = 0;
  var maxOut = 0;

  graph.forEach(g.nodes(), function (v) {
    fasGraph.setNode(v, { v: v, in: 0, out: 0 });
  });

  // Aggregate weights on nodes, but also sum the weights across multi-edges
  // into a single edge for the fasGraph.
  graph.forEach(g.edges(), function (e) {
    var prevWeight = fasGraph.edge(e.v, e.w) || 0;
    var weight = weightFn(e);
    var edgeWeight = prevWeight + weight;
    fasGraph.setEdge(e.v, e.w, edgeWeight);
    maxOut = Math.max(maxOut, (fasGraph.node(e.v).out += weight));
    maxIn = Math.max(maxIn, (fasGraph.node(e.w)['in'] += weight));
  });

  var buckets = range$1(maxOut + maxIn + 3).map(function () {
    return new List();
  });
  var zeroIdx = maxIn + 1;

  graph.forEach(fasGraph.nodes(), function (v) {
    assignBucket(buckets, zeroIdx, fasGraph.node(v));
  });

  return { graph: fasGraph, buckets: buckets, zeroIdx: zeroIdx };
}

function assignBucket(buckets, zeroIdx, entry) {
  if (!entry.out) {
    buckets[0].enqueue(entry);
  } else if (!entry['in']) {
    buckets[buckets.length - 1].enqueue(entry);
  } else {
    buckets[entry.out - entry['in'] + zeroIdx].enqueue(entry);
  }
}

function run$2(g) {
  var fas = g.graph().acyclicer === 'greedy' ? greedyFAS(g, weightFn(g)) : dfsFAS(g);
  graph.forEach(fas, function (e) {
    var label = g.edge(e);
    g.removeEdge(e);
    label.forwardName = e.name;
    label.reversed = true;
    g.setEdge(e.w, e.v, label, uniqueId('rev'));
  });

  function weightFn(g) {
    return function (e) {
      return g.edge(e).weight;
    };
  }
}

function dfsFAS(g) {
  var fas = [];
  var stack = {};
  var visited = {};

  function dfs(v) {
    if (graph.has(visited, v)) {
      return;
    }
    visited[v] = true;
    stack[v] = true;
    graph.forEach(g.outEdges(v), function (e) {
      if (graph.has(stack, e.w)) {
        fas.push(e);
      } else {
        dfs(e.w);
      }
    });
    delete stack[v];
  }

  graph.forEach(g.nodes(), dfs);
  return fas;
}

function undo$2(g) {
  graph.forEach(g.edges(), function (e) {
    var label = g.edge(e);
    if (label.reversed) {
      g.removeEdge(e);

      var forwardName = label.forwardName;
      delete label.reversed;
      delete label.forwardName;
      g.setEdge(e.w, e.v, label, forwardName);
    }
  });
}

/*
 * Adds a dummy node to the graph and return v.
 */
function addDummyNode(g, type, attrs, name) {
  var v;
  do {
    v = uniqueId(name);
  } while (g.hasNode(v));

  attrs.dummy = type;
  g.setNode(v, attrs);
  return v;
}

/*
 * Returns a new graph with only simple edges. Handles aggregation of data
 * associated with multi-edges.
 */
function simplify(g) {
  var simplified = new graph.Graph().setGraph(g.graph());
  graph.forEach(g.nodes(), function (v) {
    simplified.setNode(v, g.node(v));
  });
  graph.forEach(g.edges(), function (e) {
    var simpleLabel = simplified.edge(e.v, e.w) || { weight: 0, minlen: 1 };
    var label = g.edge(e);
    simplified.setEdge(e.v, e.w, {
      weight: simpleLabel.weight + label.weight,
      minlen: Math.max(simpleLabel.minlen, label.minlen),
    });
  });
  return simplified;
}

function asNonCompoundGraph(g) {
  var simplified = new graph.Graph({ multigraph: g.isMultigraph() }).setGraph(g.graph());
  graph.forEach(g.nodes(), function (v) {
    if (!g.children(v).length) {
      simplified.setNode(v, g.node(v));
    }
  });
  graph.forEach(g.edges(), function (e) {
    simplified.setEdge(e, g.edge(e));
  });
  return simplified;
}

/*
 * Finds where a line starting at point ({x, y}) would intersect a rectangle
 * ({x, y, width, height}) if it were pointing at the rectangle's center.
 */
function intersectRect(rect, point) {
  var x = rect.x;
  var y = rect.y;

  // Rectangle intersection algorithm from:
  // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
  var dx = point.x - x;
  var dy = point.y - y;
  var w = rect.width / 2;
  var h = rect.height / 2;

  if (!dx && !dy) {
    throw new Error('Not possible to find intersection inside of the rectangle');
  }

  var sx, sy;
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    // Intersection is top or bottom of rect.
    if (dy < 0) {
      h = -h;
    }
    sx = (h * dx) / dy;
    sy = h;
  } else {
    // Intersection is left or right of rect.
    if (dx < 0) {
      w = -w;
    }
    sx = w;
    sy = (w * dy) / dx;
  }

  return { x: x + sx, y: y + sy };
}

/*
 * Given a DAG with each node assigned "rank" and "order" properties, this
 * function will produce a matrix with the ids of each node.
 */
function buildLayerMatrix(g) {
  var layering = map(range$1(maxRank(g) + 1), function () {
    return [];
  });
  graph.forEach(g.nodes(), function (v) {
    var node = g.node(v);
    var rank = node.rank;
    if (!graph.isUndefined(rank)) {
      layering[rank][node.order] = v;
    }
  });
  return layering;
}

/*
 * Adjusts the ranks for all nodes in the graph such that all nodes v have
 * rank(v) >= 0 and at least one node w has rank(w) = 0.
 */
function normalizeRanks(g) {
  var min$1 = min(
    map(g.nodes(), function (v) {
      return g.node(v).rank;
    })
  );
  graph.forEach(g.nodes(), function (v) {
    var node = g.node(v);
    if (graph.has(node, 'rank')) {
      node.rank -= min$1;
    }
  });
}

function removeEmptyRanks(g) {
  // Ranks may not start at 0, so we need to offset them
  var offset = min(
    map(g.nodes(), function (v) {
      return g.node(v).rank;
    })
  );

  var layers = [];
  graph.forEach(g.nodes(), function (v) {
    var rank = g.node(v).rank - offset;
    if (!layers[rank]) {
      layers[rank] = [];
    }
    layers[rank].push(v);
  });

  var delta = 0;
  var nodeRankFactor = g.graph().nodeRankFactor;
  graph.forEach(layers, function (vs, i) {
    if (graph.isUndefined(vs) && i % nodeRankFactor !== 0) {
      --delta;
    } else if (delta) {
      graph.forEach(vs, function (v) {
        g.node(v).rank += delta;
      });
    }
  });
}

function addBorderNode$1(g, prefix, rank, order) {
  var node = {
    width: 0,
    height: 0,
  };
  if (arguments.length >= 4) {
    node.rank = rank;
    node.order = order;
  }
  return addDummyNode(g, 'border', node, prefix);
}

function maxRank(g) {
  return max(
    map(g.nodes(), function (v) {
      var rank = g.node(v).rank;
      if (!graph.isUndefined(rank)) {
        return rank;
      }
    })
  );
}

/*
 * Partition a collection into two groups: `lhs` and `rhs`. If the supplied
 * function returns true for an entry it goes into `lhs`. Otherwise it goes
 * into `rhs.
 */
function partition(collection, fn) {
  var result = { lhs: [], rhs: [] };
  graph.forEach(collection, function (value) {
    if (fn(value)) {
      result.lhs.push(value);
    } else {
      result.rhs.push(value);
    }
  });
  return result;
}

/*
 * Returns a new function that wraps `fn` with a timer. The wrapper logs the
 * time it takes to execute the function.
 */
function time(name, fn) {
  var start = now$1();
  try {
    return fn();
  } finally {
    console.log(name + ' time: ' + (now$1() - start) + 'ms');
  }
}

function notime(name, fn) {
  return fn();
}

function addBorderSegments(g) {
  function dfs(v) {
    var children = g.children(v);
    var node = g.node(v);
    if (children.length) {
      graph.forEach(children, dfs);
    }

    if (graph.has(node, 'minRank')) {
      node.borderLeft = [];
      node.borderRight = [];
      for (var rank = node.minRank, maxRank = node.maxRank + 1; rank < maxRank; ++rank) {
        addBorderNode(g, 'borderLeft', '_bl', v, node, rank);
        addBorderNode(g, 'borderRight', '_br', v, node, rank);
      }
    }
  }

  graph.forEach(g.children(), dfs);
}

function addBorderNode(g, prop, prefix, sg, sgNode, rank) {
  var label = { width: 0, height: 0, rank: rank, borderType: prop };
  var prev = sgNode[prop][rank - 1];
  var curr = addDummyNode(g, 'border', label, prefix);
  sgNode[prop][rank] = curr;
  g.setParent(curr, sg);
  if (prev) {
    g.setEdge(prev, curr, { weight: 1 });
  }
}

function adjust(g) {
  var rankDir = g.graph().rankdir.toLowerCase();
  if (rankDir === 'lr' || rankDir === 'rl') {
    swapWidthHeight(g);
  }
}

function undo$1(g) {
  var rankDir = g.graph().rankdir.toLowerCase();
  if (rankDir === 'bt' || rankDir === 'rl') {
    reverseY(g);
  }

  if (rankDir === 'lr' || rankDir === 'rl') {
    swapXY(g);
    swapWidthHeight(g);
  }
}

function swapWidthHeight(g) {
  graph.forEach(g.nodes(), function (v) {
    swapWidthHeightOne(g.node(v));
  });
  graph.forEach(g.edges(), function (e) {
    swapWidthHeightOne(g.edge(e));
  });
}

function swapWidthHeightOne(attrs) {
  var w = attrs.width;
  attrs.width = attrs.height;
  attrs.height = w;
}

function reverseY(g) {
  graph.forEach(g.nodes(), function (v) {
    reverseYOne(g.node(v));
  });

  graph.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    graph.forEach(edge.points, reverseYOne);
    if (graph.has(edge, 'y')) {
      reverseYOne(edge);
    }
  });
}

function reverseYOne(attrs) {
  attrs.y = -attrs.y;
}

function swapXY(g) {
  graph.forEach(g.nodes(), function (v) {
    swapXYOne(g.node(v));
  });

  graph.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    graph.forEach(edge.points, swapXYOne);
    if (graph.has(edge, 'x')) {
      swapXYOne(edge);
    }
  });
}

function swapXYOne(attrs) {
  var x = attrs.x;
  attrs.x = attrs.y;
  attrs.y = x;
}

/*
 * Breaks any long edges in the graph into short segments that span 1 layer
 * each. This operation is undoable with the denormalize function.
 *
 * Pre-conditions:
 *
 *    1. The input graph is a DAG.
 *    2. Each node in the graph has a "rank" property.
 *
 * Post-condition:
 *
 *    1. All edges in the graph have a length of 1.
 *    2. Dummy nodes are added where edges have been split into segments.
 *    3. The graph is augmented with a "dummyChains" attribute which contains
 *       the first dummy in each chain of dummy nodes produced.
 */
function run$1(g) {
  g.graph().dummyChains = [];
  graph.forEach(g.edges(), function (edge) {
    normalizeEdge(g, edge);
  });
}

function normalizeEdge(g, e) {
  var v = e.v;
  var vRank = g.node(v).rank;
  var w = e.w;
  var wRank = g.node(w).rank;
  var name = e.name;
  var edgeLabel = g.edge(e);
  var labelRank = edgeLabel.labelRank;

  if (wRank === vRank + 1) return;

  g.removeEdge(e);

  var dummy, attrs, i;
  for (i = 0, ++vRank; vRank < wRank; ++i, ++vRank) {
    edgeLabel.points = [];
    attrs = {
      width: 0,
      height: 0,
      edgeLabel: edgeLabel,
      edgeObj: e,
      rank: vRank,
    };
    dummy = addDummyNode(g, 'edge', attrs, '_d');
    if (vRank === labelRank) {
      attrs.width = edgeLabel.width;
      attrs.height = edgeLabel.height;
      // @ts-expect-error
      attrs.dummy = 'edge-label';
      // @ts-expect-error
      attrs.labelpos = edgeLabel.labelpos;
    }
    g.setEdge(v, dummy, { weight: edgeLabel.weight }, name);
    if (i === 0) {
      g.graph().dummyChains.push(dummy);
    }
    v = dummy;
  }

  g.setEdge(v, w, { weight: edgeLabel.weight }, name);
}

function undo(g) {
  graph.forEach(g.graph().dummyChains, function (v) {
    var node = g.node(v);
    var origLabel = node.edgeLabel;
    var w;
    g.setEdge(node.edgeObj, origLabel);
    while (node.dummy) {
      w = g.successors(v)[0];
      g.removeNode(v);
      origLabel.points.push({ x: node.x, y: node.y });
      if (node.dummy === 'edge-label') {
        origLabel.x = node.x;
        origLabel.y = node.y;
        origLabel.width = node.width;
        origLabel.height = node.height;
      }
      v = w;
      node = g.node(v);
    }
  });
}

/*
 * Initializes ranks for the input graph using the longest path algorithm. This
 * algorithm scales well and is fast in practice, it yields rather poor
 * solutions. Nodes are pushed to the lowest layer possible, leaving the bottom
 * ranks wide and leaving edges longer than necessary. However, due to its
 * speed, this algorithm is good for getting an initial ranking that can be fed
 * into other algorithms.
 *
 * This algorithm does not normalize layers because it will be used by other
 * algorithms in most cases. If using this algorithm directly, be sure to
 * run normalize at the end.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG.
 *    2. Input graph node labels can be assigned properties.
 *
 * Post-conditions:
 *
 *    1. Each node will be assign an (unnormalized) "rank" property.
 */
function longestPath(g) {
  var visited = {};

  function dfs(v) {
    var label = g.node(v);
    if (graph.has(visited, v)) {
      return label.rank;
    }
    visited[v] = true;

    var rank = min(
      map(g.outEdges(v), function (e) {
        return dfs(e.w) - g.edge(e).minlen;
      })
    );

    if (
      rank === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
      rank === undefined || // return value of _.map([]) for Lodash 4
      rank === null
    ) {
      // return value of _.map([null])
      rank = 0;
    }

    return (label.rank = rank);
  }

  graph.forEach(g.sources(), dfs);
}

/*
 * Returns the amount of slack for the given edge. The slack is defined as the
 * difference between the length of the edge and its minimum length.
 */
function slack(g, e) {
  return g.node(e.w).rank - g.node(e.v).rank - g.edge(e).minlen;
}

/*
 * Constructs a spanning tree with tight edges and adjusted the input node's
 * ranks to achieve this. A tight edge is one that is has a length that matches
 * its "minlen" attribute.
 *
 * The basic structure for this function is derived from Gansner, et al., "A
 * Technique for Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a DAG.
 *    2. Graph must be connected.
 *    3. Graph must have at least one node.
 *    5. Graph nodes must have been previously assigned a "rank" property that
 *       respects the "minlen" property of incident edges.
 *    6. Graph edges must have a "minlen" property.
 *
 * Post-conditions:
 *
 *    - Graph nodes will have their rank adjusted to ensure that all edges are
 *      tight.
 *
 * Returns a tree (undirected graph) that is constructed using only "tight"
 * edges.
 */
function feasibleTree(g) {
  var t = new graph.Graph({ directed: false });

  // Choose arbitrary node from which to start our tree
  var start = g.nodes()[0];
  var size = g.nodeCount();
  t.setNode(start, {});

  var edge, delta;
  while (tightTree(t, g) < size) {
    edge = findMinSlackEdge(t, g);
    delta = t.hasNode(edge.v) ? slack(g, edge) : -slack(g, edge);
    shiftRanks(t, g, delta);
  }

  return t;
}

/*
 * Finds a maximal tree of tight edges and returns the number of nodes in the
 * tree.
 */
function tightTree(t, g) {
  function dfs(v) {
    graph.forEach(g.nodeEdges(v), function (e) {
      var edgeV = e.v,
        w = v === edgeV ? e.w : edgeV;
      if (!t.hasNode(w) && !slack(g, e)) {
        t.setNode(w, {});
        t.setEdge(v, w, {});
        dfs(w);
      }
    });
  }

  graph.forEach(t.nodes(), dfs);
  return t.nodeCount();
}

/*
 * Finds the edge with the smallest slack that is incident on tree and returns
 * it.
 */
function findMinSlackEdge(t, g) {
  return minBy(g.edges(), function (e) {
    if (t.hasNode(e.v) !== t.hasNode(e.w)) {
      return slack(g, e);
    }
  });
}

function shiftRanks(t, g, delta) {
  graph.forEach(t.nodes(), function (v) {
    g.node(v).rank += delta;
  });
}

function CycleException() {}
CycleException.prototype = new Error(); // must be an instance of Error to pass testing

/*
 * A helper that preforms a pre- or post-order traversal on the input graph
 * and returns the nodes in the order they were visited. If the graph is
 * undirected then this algorithm will navigate using neighbors. If the graph
 * is directed then this algorithm will navigate using successors.
 *
 * Order must be one of "pre" or "post".
 */
function dfs$1(g, vs, order) {
  if (!index.isArray(vs)) {
    vs = [vs];
  }

  var navigation = (g.isDirected() ? g.successors : g.neighbors).bind(g);

  var acc = [];
  var visited = {};
  graph.forEach(vs, function (v) {
    if (!g.hasNode(v)) {
      throw new Error('Graph does not have node: ' + v);
    }

    doDfs(g, v, order === 'post', visited, navigation, acc);
  });
  return acc;
}

function doDfs(g, v, postorder, visited, navigation, acc) {
  if (!graph.has(visited, v)) {
    visited[v] = true;

    if (!postorder) {
      acc.push(v);
    }
    graph.forEach(navigation(v), function (w) {
      doDfs(g, w, postorder, visited, navigation, acc);
    });
    if (postorder) {
      acc.push(v);
    }
  }
}

function postorder$1(g, vs) {
  return dfs$1(g, vs, 'post');
}

function preorder(g, vs) {
  return dfs$1(g, vs, 'pre');
}

// Expose some internals for testing purposes
networkSimplex.initLowLimValues = initLowLimValues;
networkSimplex.initCutValues = initCutValues;
networkSimplex.calcCutValue = calcCutValue;
networkSimplex.leaveEdge = leaveEdge;
networkSimplex.enterEdge = enterEdge;
networkSimplex.exchangeEdges = exchangeEdges;

/*
 * The network simplex algorithm assigns ranks to each node in the input graph
 * and iteratively improves the ranking to reduce the length of edges.
 *
 * Preconditions:
 *
 *    1. The input graph must be a DAG.
 *    2. All nodes in the graph must have an object value.
 *    3. All edges in the graph must have "minlen" and "weight" attributes.
 *
 * Postconditions:
 *
 *    1. All nodes in the graph will have an assigned "rank" attribute that has
 *       been optimized by the network simplex algorithm. Ranks start at 0.
 *
 *
 * A rough sketch of the algorithm is as follows:
 *
 *    1. Assign initial ranks to each node. We use the longest path algorithm,
 *       which assigns ranks to the lowest position possible. In general this
 *       leads to very wide bottom ranks and unnecessarily long edges.
 *    2. Construct a feasible tight tree. A tight tree is one such that all
 *       edges in the tree have no slack (difference between length of edge
 *       and minlen for the edge). This by itself greatly improves the assigned
 *       rankings by shorting edges.
 *    3. Iteratively find edges that have negative cut values. Generally a
 *       negative cut value indicates that the edge could be removed and a new
 *       tree edge could be added to produce a more compact graph.
 *
 * Much of the algorithms here are derived from Gansner, et al., "A Technique
 * for Drawing Directed Graphs." The structure of the file roughly follows the
 * structure of the overall algorithm.
 */
function networkSimplex(g) {
  g = simplify(g);
  longestPath(g);
  var t = feasibleTree(g);
  initLowLimValues(t);
  initCutValues(t, g);

  var e, f;
  while ((e = leaveEdge(t))) {
    f = enterEdge(t, g, e);
    exchangeEdges(t, g, e, f);
  }
}

/*
 * Initializes cut values for all edges in the tree.
 */
function initCutValues(t, g) {
  var vs = postorder$1(t, t.nodes());
  vs = vs.slice(0, vs.length - 1);
  graph.forEach(vs, function (v) {
    assignCutValue(t, g, v);
  });
}

function assignCutValue(t, g, child) {
  var childLab = t.node(child);
  var parent = childLab.parent;
  t.edge(child, parent).cutvalue = calcCutValue(t, g, child);
}

/*
 * Given the tight tree, its graph, and a child in the graph calculate and
 * return the cut value for the edge between the child and its parent.
 */
function calcCutValue(t, g, child) {
  var childLab = t.node(child);
  var parent = childLab.parent;
  // True if the child is on the tail end of the edge in the directed graph
  var childIsTail = true;
  // The graph's view of the tree edge we're inspecting
  var graphEdge = g.edge(child, parent);
  // The accumulated cut value for the edge between this node and its parent
  var cutValue = 0;

  if (!graphEdge) {
    childIsTail = false;
    graphEdge = g.edge(parent, child);
  }

  cutValue = graphEdge.weight;

  graph.forEach(g.nodeEdges(child), function (e) {
    var isOutEdge = e.v === child,
      other = isOutEdge ? e.w : e.v;

    if (other !== parent) {
      var pointsToHead = isOutEdge === childIsTail,
        otherWeight = g.edge(e).weight;

      cutValue += pointsToHead ? otherWeight : -otherWeight;
      if (isTreeEdge(t, child, other)) {
        var otherCutValue = t.edge(child, other).cutvalue;
        cutValue += pointsToHead ? -otherCutValue : otherCutValue;
      }
    }
  });

  return cutValue;
}

function initLowLimValues(tree, root) {
  if (arguments.length < 2) {
    root = tree.nodes()[0];
  }
  dfsAssignLowLim(tree, {}, 1, root);
}

function dfsAssignLowLim(tree, visited, nextLim, v, parent) {
  var low = nextLim;
  var label = tree.node(v);

  visited[v] = true;
  graph.forEach(tree.neighbors(v), function (w) {
    if (!graph.has(visited, w)) {
      nextLim = dfsAssignLowLim(tree, visited, nextLim, w, v);
    }
  });

  label.low = low;
  label.lim = nextLim++;
  if (parent) {
    label.parent = parent;
  } else {
    // TODO should be able to remove this when we incrementally update low lim
    delete label.parent;
  }

  return nextLim;
}

function leaveEdge(tree) {
  return find$1(tree.edges(), function (e) {
    return tree.edge(e).cutvalue < 0;
  });
}

function enterEdge(t, g, edge) {
  var v = edge.v;
  var w = edge.w;

  // For the rest of this function we assume that v is the tail and w is the
  // head, so if we don't have this edge in the graph we should flip it to
  // match the correct orientation.
  if (!g.hasEdge(v, w)) {
    v = edge.w;
    w = edge.v;
  }

  var vLabel = t.node(v);
  var wLabel = t.node(w);
  var tailLabel = vLabel;
  var flip = false;

  // If the root is in the tail of the edge then we need to flip the logic that
  // checks for the head and tail nodes in the candidates function below.
  if (vLabel.lim > wLabel.lim) {
    tailLabel = wLabel;
    flip = true;
  }

  var candidates = graph.filter(g.edges(), function (edge) {
    return (
      flip === isDescendant(t, t.node(edge.v), tailLabel) &&
      flip !== isDescendant(t, t.node(edge.w), tailLabel)
    );
  });

  return minBy(candidates, function (edge) {
    return slack(g, edge);
  });
}

function exchangeEdges(t, g, e, f) {
  var v = e.v;
  var w = e.w;
  t.removeEdge(v, w);
  t.setEdge(f.v, f.w, {});
  initLowLimValues(t);
  initCutValues(t, g);
  updateRanks(t, g);
}

function updateRanks(t, g) {
  var root = find$1(t.nodes(), function (v) {
    return !g.node(v).parent;
  });
  var vs = preorder(t, root);
  vs = vs.slice(1);
  graph.forEach(vs, function (v) {
    var parent = t.node(v).parent,
      edge = g.edge(v, parent),
      flipped = false;

    if (!edge) {
      edge = g.edge(parent, v);
      flipped = true;
    }

    g.node(v).rank = g.node(parent).rank + (flipped ? edge.minlen : -edge.minlen);
  });
}

/*
 * Returns true if the edge is in the tree.
 */
function isTreeEdge(tree, u, v) {
  return tree.hasEdge(u, v);
}

/*
 * Returns true if the specified node is descendant of the root node per the
 * assigned low and lim attributes in the tree.
 */
function isDescendant(tree, vLabel, rootLabel) {
  return rootLabel.low <= vLabel.lim && vLabel.lim <= rootLabel.lim;
}

/*
 * Assigns a rank to each node in the input graph that respects the "minlen"
 * constraint specified on edges between nodes.
 *
 * This basic structure is derived from Gansner, et al., "A Technique for
 * Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a connected DAG
 *    2. Graph nodes must be objects
 *    3. Graph edges must have "weight" and "minlen" attributes
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have a "rank" attribute based on the results of the
 *       algorithm. Ranks can start at any index (including negative), we'll
 *       fix them up later.
 */
function rank(g) {
  switch (g.graph().ranker) {
    case 'network-simplex':
      networkSimplexRanker(g);
      break;
    case 'tight-tree':
      tightTreeRanker(g);
      break;
    case 'longest-path':
      longestPathRanker(g);
      break;
    default:
      networkSimplexRanker(g);
  }
}

// A fast and simple ranker, but results are far from optimal.
var longestPathRanker = longestPath;

function tightTreeRanker(g) {
  longestPath(g);
  feasibleTree(g);
}

function networkSimplexRanker(g) {
  networkSimplex(g);
}

/*
 * A nesting graph creates dummy nodes for the tops and bottoms of subgraphs,
 * adds appropriate edges to ensure that all cluster nodes are placed between
 * these boundries, and ensures that the graph is connected.
 *
 * In addition we ensure, through the use of the minlen property, that nodes
 * and subgraph border nodes to not end up on the same rank.
 *
 * Preconditions:
 *
 *    1. Input graph is a DAG
 *    2. Nodes in the input graph has a minlen attribute
 *
 * Postconditions:
 *
 *    1. Input graph is connected.
 *    2. Dummy nodes are added for the tops and bottoms of subgraphs.
 *    3. The minlen attribute for nodes is adjusted to ensure nodes do not
 *       get placed on the same rank as subgraph border nodes.
 *
 * The nesting graph idea comes from Sander, "Layout of Compound Directed
 * Graphs."
 */
function run(g) {
  var root = addDummyNode(g, 'root', {}, '_root');
  var depths = treeDepths(g);
  var height = max(graph.values(depths)) - 1; // Note: depths is an Object not an array
  var nodeSep = 2 * height + 1;

  g.graph().nestingRoot = root;

  // Multiply minlen by nodeSep to align nodes on non-border ranks.
  graph.forEach(g.edges(), function (e) {
    g.edge(e).minlen *= nodeSep;
  });

  // Calculate a weight that is sufficient to keep subgraphs vertically compact
  var weight = sumWeights(g) + 1;

  // Create border nodes and link them up
  graph.forEach(g.children(), function (child) {
    dfs(g, root, nodeSep, weight, height, depths, child);
  });

  // Save the multiplier for node layers for later removal of empty border
  // layers.
  g.graph().nodeRankFactor = nodeSep;
}

function dfs(g, root, nodeSep, weight, height, depths, v) {
  var children = g.children(v);
  if (!children.length) {
    if (v !== root) {
      g.setEdge(root, v, { weight: 0, minlen: nodeSep });
    }
    return;
  }

  var top = addBorderNode$1(g, '_bt');
  var bottom = addBorderNode$1(g, '_bb');
  var label = g.node(v);

  g.setParent(top, v);
  label.borderTop = top;
  g.setParent(bottom, v);
  label.borderBottom = bottom;

  graph.forEach(children, function (child) {
    dfs(g, root, nodeSep, weight, height, depths, child);

    var childNode = g.node(child);
    var childTop = childNode.borderTop ? childNode.borderTop : child;
    var childBottom = childNode.borderBottom ? childNode.borderBottom : child;
    var thisWeight = childNode.borderTop ? weight : 2 * weight;
    var minlen = childTop !== childBottom ? 1 : height - depths[v] + 1;

    g.setEdge(top, childTop, {
      weight: thisWeight,
      minlen: minlen,
      nestingEdge: true,
    });

    g.setEdge(childBottom, bottom, {
      weight: thisWeight,
      minlen: minlen,
      nestingEdge: true,
    });
  });

  if (!g.parent(v)) {
    g.setEdge(root, top, { weight: 0, minlen: height + depths[v] });
  }
}

function treeDepths(g) {
  var depths = {};
  function dfs(v, depth) {
    var children = g.children(v);
    if (children && children.length) {
      graph.forEach(children, function (child) {
        dfs(child, depth + 1);
      });
    }
    depths[v] = depth;
  }
  graph.forEach(g.children(), function (v) {
    dfs(v, 1);
  });
  return depths;
}

function sumWeights(g) {
  return graph.reduce(
    g.edges(),
    function (acc, e) {
      return acc + g.edge(e).weight;
    },
    0
  );
}

function cleanup(g) {
  var graphLabel = g.graph();
  g.removeNode(graphLabel.nestingRoot);
  delete graphLabel.nestingRoot;
  graph.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    if (edge.nestingEdge) {
      g.removeEdge(e);
    }
  });
}

function addSubgraphConstraints(g, cg, vs) {
  var prev = {},
    rootPrev;

  graph.forEach(vs, function (v) {
    var child = g.parent(v),
      parent,
      prevChild;
    while (child) {
      parent = g.parent(child);
      if (parent) {
        prevChild = prev[parent];
        prev[parent] = child;
      } else {
        prevChild = rootPrev;
        rootPrev = child;
      }
      if (prevChild && prevChild !== child) {
        cg.setEdge(prevChild, child);
        return;
      }
      child = parent;
    }
  });

  /*
  function dfs(v) {
    var children = v ? g.children(v) : g.children();
    if (children.length) {
      var min = Number.POSITIVE_INFINITY,
          subgraphs = [];
      _.each(children, function(child) {
        var childMin = dfs(child);
        if (g.children(child).length) {
          subgraphs.push({ v: child, order: childMin });
        }
        min = Math.min(min, childMin);
      });
      _.reduce(_.sortBy(subgraphs, "order"), function(prev, curr) {
        cg.setEdge(prev.v, curr.v);
        return curr;
      });
      return min;
    }
    return g.node(v).order;
  }
  dfs(undefined);
  */
}

/*
 * Constructs a graph that can be used to sort a layer of nodes. The graph will
 * contain all base and subgraph nodes from the request layer in their original
 * hierarchy and any edges that are incident on these nodes and are of the type
 * requested by the "relationship" parameter.
 *
 * Nodes from the requested rank that do not have parents are assigned a root
 * node in the output graph, which is set in the root graph attribute. This
 * makes it easy to walk the hierarchy of movable nodes during ordering.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG
 *    2. Base nodes in the input graph have a rank attribute
 *    3. Subgraph nodes in the input graph has minRank and maxRank attributes
 *    4. Edges have an assigned weight
 *
 * Post-conditions:
 *
 *    1. Output graph has all nodes in the movable rank with preserved
 *       hierarchy.
 *    2. Root nodes in the movable layer are made children of the node
 *       indicated by the root attribute of the graph.
 *    3. Non-movable nodes incident on movable nodes, selected by the
 *       relationship parameter, are included in the graph (without hierarchy).
 *    4. Edges incident on movable nodes, selected by the relationship
 *       parameter, are added to the output graph.
 *    5. The weights for copied edges are aggregated as need, since the output
 *       graph is not a multi-graph.
 */
function buildLayerGraph(g, rank, relationship) {
  var root = createRootNode(g),
    result = new graph.Graph({ compound: true })
      .setGraph({ root: root })
      .setDefaultNodeLabel(function (v) {
        return g.node(v);
      });

  graph.forEach(g.nodes(), function (v) {
    var node = g.node(v),
      parent = g.parent(v);

    if (node.rank === rank || (node.minRank <= rank && rank <= node.maxRank)) {
      result.setNode(v);
      result.setParent(v, parent || root);

      // This assumes we have only short edges!
      graph.forEach(g[relationship](v), function (e) {
        var u = e.v === v ? e.w : e.v,
          edge = result.edge(u, v),
          weight = !graph.isUndefined(edge) ? edge.weight : 0;
        result.setEdge(u, v, { weight: g.edge(e).weight + weight });
      });

      if (graph.has(node, 'minRank')) {
        result.setNode(v, {
          borderLeft: node.borderLeft[rank],
          borderRight: node.borderRight[rank],
        });
      }
    }
  });

  return result;
}

function createRootNode(g) {
  var v;
  while (g.hasNode((v = uniqueId('_root'))));
  return v;
}

/*
 * A function that takes a layering (an array of layers, each with an array of
 * ordererd nodes) and a graph and returns a weighted crossing count.
 *
 * Pre-conditions:
 *
 *    1. Input graph must be simple (not a multigraph), directed, and include
 *       only simple edges.
 *    2. Edges in the input graph must have assigned weights.
 *
 * Post-conditions:
 *
 *    1. The graph and layering matrix are left unchanged.
 *
 * This algorithm is derived from Barth, et al., "Bilayer Cross Counting."
 */
function crossCount(g, layering) {
  var cc = 0;
  for (var i = 1; i < layering.length; ++i) {
    cc += twoLayerCrossCount(g, layering[i - 1], layering[i]);
  }
  return cc;
}

function twoLayerCrossCount(g, northLayer, southLayer) {
  // Sort all of the edges between the north and south layers by their position
  // in the north layer and then the south. Map these edges to the position of
  // their head in the south layer.
  var southPos = zipObject(
    southLayer,
    map(southLayer, function (v, i) {
      return i;
    })
  );
  var southEntries = flatten(
    map(northLayer, function (v) {
      return sortBy$1(
        map(g.outEdges(v), function (e) {
          return { pos: southPos[e.w], weight: g.edge(e).weight };
        }),
        'pos'
      );
    })
  );

  // Build the accumulator tree
  var firstIndex = 1;
  while (firstIndex < southLayer.length) firstIndex <<= 1;
  var treeSize = 2 * firstIndex - 1;
  firstIndex -= 1;
  var tree = map(new Array(treeSize), function () {
    return 0;
  });

  // Calculate the weighted crossings
  var cc = 0;
  graph.forEach(
    // @ts-expect-error
    southEntries.forEach(function (entry) {
      var index = entry.pos + firstIndex;
      tree[index] += entry.weight;
      var weightSum = 0;
      // @ts-expect-error
      while (index > 0) {
        // @ts-expect-error
        if (index % 2) {
          weightSum += tree[index + 1];
        }
        // @ts-expect-error
        index = (index - 1) >> 1;
        tree[index] += entry.weight;
      }
      cc += entry.weight * weightSum;
    })
  );

  return cc;
}

/*
 * Assigns an initial order value for each node by performing a DFS search
 * starting from nodes in the first rank. Nodes are assigned an order in their
 * rank as they are first visited.
 *
 * This approach comes from Gansner, et al., "A Technique for Drawing Directed
 * Graphs."
 *
 * Returns a layering matrix with an array per layer and each layer sorted by
 * the order of its nodes.
 */
function initOrder(g) {
  var visited = {};
  var simpleNodes = graph.filter(g.nodes(), function (v) {
    return !g.children(v).length;
  });
  var maxRank = max(
    map(simpleNodes, function (v) {
      return g.node(v).rank;
    })
  );
  var layers = map(range$1(maxRank + 1), function () {
    return [];
  });

  function dfs(v) {
    if (graph.has(visited, v)) return;
    visited[v] = true;
    var node = g.node(v);
    layers[node.rank].push(v);
    graph.forEach(g.successors(v), dfs);
  }

  var orderedVs = sortBy$1(simpleNodes, function (v) {
    return g.node(v).rank;
  });
  graph.forEach(orderedVs, dfs);

  return layers;
}

function barycenter(g, movable) {
  return map(movable, function (v) {
    var inV = g.inEdges(v);
    if (!inV.length) {
      return { v: v };
    } else {
      var result = graph.reduce(
        inV,
        function (acc, e) {
          var edge = g.edge(e),
            nodeU = g.node(e.v);
          return {
            sum: acc.sum + edge.weight * nodeU.order,
            weight: acc.weight + edge.weight,
          };
        },
        { sum: 0, weight: 0 }
      );

      return {
        v: v,
        barycenter: result.sum / result.weight,
        weight: result.weight,
      };
    }
  });
}

/*
 * Given a list of entries of the form {v, barycenter, weight} and a
 * constraint graph this function will resolve any conflicts between the
 * constraint graph and the barycenters for the entries. If the barycenters for
 * an entry would violate a constraint in the constraint graph then we coalesce
 * the nodes in the conflict into a new node that respects the contraint and
 * aggregates barycenter and weight information.
 *
 * This implementation is based on the description in Forster, "A Fast and
 * Simple Hueristic for Constrained Two-Level Crossing Reduction," thought it
 * differs in some specific details.
 *
 * Pre-conditions:
 *
 *    1. Each entry has the form {v, barycenter, weight}, or if the node has
 *       no barycenter, then {v}.
 *
 * Returns:
 *
 *    A new list of entries of the form {vs, i, barycenter, weight}. The list
 *    `vs` may either be a singleton or it may be an aggregation of nodes
 *    ordered such that they do not violate constraints from the constraint
 *    graph. The property `i` is the lowest original index of any of the
 *    elements in `vs`.
 */
function resolveConflicts(entries, cg) {
  var mappedEntries = {};
  graph.forEach(entries, function (entry, i) {
    var tmp = (mappedEntries[entry.v] = {
      indegree: 0,
      in: [],
      out: [],
      vs: [entry.v],
      i: i,
    });
    if (!graph.isUndefined(entry.barycenter)) {
      // @ts-expect-error
      tmp.barycenter = entry.barycenter;
      // @ts-expect-error
      tmp.weight = entry.weight;
    }
  });

  graph.forEach(cg.edges(), function (e) {
    var entryV = mappedEntries[e.v];
    var entryW = mappedEntries[e.w];
    if (!graph.isUndefined(entryV) && !graph.isUndefined(entryW)) {
      entryW.indegree++;
      entryV.out.push(mappedEntries[e.w]);
    }
  });

  var sourceSet = graph.filter(mappedEntries, function (entry) {
    // @ts-expect-error
    return !entry.indegree;
  });

  return doResolveConflicts(sourceSet);
}

function doResolveConflicts(sourceSet) {
  var entries = [];

  function handleIn(vEntry) {
    return function (uEntry) {
      if (uEntry.merged) {
        return;
      }
      if (
        graph.isUndefined(uEntry.barycenter) ||
        graph.isUndefined(vEntry.barycenter) ||
        uEntry.barycenter >= vEntry.barycenter
      ) {
        mergeEntries(vEntry, uEntry);
      }
    };
  }

  function handleOut(vEntry) {
    return function (wEntry) {
      wEntry['in'].push(vEntry);
      if (--wEntry.indegree === 0) {
        sourceSet.push(wEntry);
      }
    };
  }

  while (sourceSet.length) {
    var entry = sourceSet.pop();
    entries.push(entry);
    graph.forEach(entry['in'].reverse(), handleIn(entry));
    graph.forEach(entry.out, handleOut(entry));
  }

  return map(
    graph.filter(entries, function (entry) {
      return !entry.merged;
    }),
    function (entry) {
      return pick$1(entry, ['vs', 'i', 'barycenter', 'weight']);
    }
  );
}

function mergeEntries(target, source) {
  var sum = 0;
  var weight = 0;

  if (target.weight) {
    sum += target.barycenter * target.weight;
    weight += target.weight;
  }

  if (source.weight) {
    sum += source.barycenter * source.weight;
    weight += source.weight;
  }

  target.vs = source.vs.concat(target.vs);
  target.barycenter = sum / weight;
  target.weight = weight;
  target.i = Math.min(source.i, target.i);
  source.merged = true;
}

function sort(entries, biasRight) {
  var parts = partition(entries, function (entry) {
    return graph.has(entry, 'barycenter');
  });
  var sortable = parts.lhs,
    unsortable = sortBy$1(parts.rhs, function (entry) {
      return -entry.i;
    }),
    vs = [],
    sum = 0,
    weight = 0,
    vsIndex = 0;

  sortable.sort(compareWithBias(!!biasRight));

  vsIndex = consumeUnsortable(vs, unsortable, vsIndex);

  graph.forEach(sortable, function (entry) {
    vsIndex += entry.vs.length;
    vs.push(entry.vs);
    sum += entry.barycenter * entry.weight;
    weight += entry.weight;
    vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
  });

  var result = { vs: flatten(vs) };
  if (weight) {
    result.barycenter = sum / weight;
    result.weight = weight;
  }
  return result;
}

function consumeUnsortable(vs, unsortable, index) {
  var last$1;
  while (unsortable.length && (last$1 = last(unsortable)).i <= index) {
    unsortable.pop();
    vs.push(last$1.vs);
    index++;
  }
  return index;
}

function compareWithBias(bias) {
  return function (entryV, entryW) {
    if (entryV.barycenter < entryW.barycenter) {
      return -1;
    } else if (entryV.barycenter > entryW.barycenter) {
      return 1;
    }

    return !bias ? entryV.i - entryW.i : entryW.i - entryV.i;
  };
}

function sortSubgraph(g, v, cg, biasRight) {
  var movable = g.children(v);
  var node = g.node(v);
  var bl = node ? node.borderLeft : undefined;
  var br = node ? node.borderRight : undefined;
  var subgraphs = {};

  if (bl) {
    movable = graph.filter(movable, function (w) {
      return w !== bl && w !== br;
    });
  }

  var barycenters = barycenter(g, movable);
  graph.forEach(barycenters, function (entry) {
    if (g.children(entry.v).length) {
      var subgraphResult = sortSubgraph(g, entry.v, cg, biasRight);
      subgraphs[entry.v] = subgraphResult;
      if (graph.has(subgraphResult, 'barycenter')) {
        mergeBarycenters(entry, subgraphResult);
      }
    }
  });

  var entries = resolveConflicts(barycenters, cg);
  expandSubgraphs(entries, subgraphs);

  var result = sort(entries, biasRight);

  if (bl) {
    result.vs = flatten([bl, result.vs, br]);
    if (g.predecessors(bl).length) {
      var blPred = g.node(g.predecessors(bl)[0]),
        brPred = g.node(g.predecessors(br)[0]);
      if (!graph.has(result, 'barycenter')) {
        result.barycenter = 0;
        result.weight = 0;
      }
      result.barycenter =
        (result.barycenter * result.weight + blPred.order + brPred.order) / (result.weight + 2);
      result.weight += 2;
    }
  }

  return result;
}

function expandSubgraphs(entries, subgraphs) {
  graph.forEach(entries, function (entry) {
    entry.vs = flatten(
      entry.vs.map(function (v) {
        if (subgraphs[v]) {
          return subgraphs[v].vs;
        }
        return v;
      })
    );
  });
}

function mergeBarycenters(target, other) {
  if (!graph.isUndefined(target.barycenter)) {
    target.barycenter =
      (target.barycenter * target.weight + other.barycenter * other.weight) /
      (target.weight + other.weight);
    target.weight += other.weight;
  } else {
    target.barycenter = other.barycenter;
    target.weight = other.weight;
  }
}

/*
 * Applies heuristics to minimize edge crossings in the graph and sets the best
 * order solution as an order attribute on each node.
 *
 * Pre-conditions:
 *
 *    1. Graph must be DAG
 *    2. Graph nodes must be objects with a "rank" attribute
 *    3. Graph edges must have the "weight" attribute
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have an "order" attribute based on the results of the
 *       algorithm.
 */
function order(g) {
  var maxRank$1 = maxRank(g),
    downLayerGraphs = buildLayerGraphs(g, range$1(1, maxRank$1 + 1), 'inEdges'),
    upLayerGraphs = buildLayerGraphs(g, range$1(maxRank$1 - 1, -1, -1), 'outEdges');

  var layering = initOrder(g);
  assignOrder(g, layering);

  var bestCC = Number.POSITIVE_INFINITY,
    best;

  for (var i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest) {
    sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2);

    layering = buildLayerMatrix(g);
    var cc = crossCount(g, layering);
    if (cc < bestCC) {
      lastBest = 0;
      best = cloneDeep(layering);
      bestCC = cc;
    }
  }

  assignOrder(g, best);
}

function buildLayerGraphs(g, ranks, relationship) {
  return map(ranks, function (rank) {
    return buildLayerGraph(g, rank, relationship);
  });
}

function sweepLayerGraphs(layerGraphs, biasRight) {
  var cg = new graph.Graph();
  graph.forEach(layerGraphs, function (lg) {
    var root = lg.graph().root;
    var sorted = sortSubgraph(lg, root, cg, biasRight);
    graph.forEach(sorted.vs, function (v, i) {
      lg.node(v).order = i;
    });
    addSubgraphConstraints(lg, cg, sorted.vs);
  });
}

function assignOrder(g, layering) {
  graph.forEach(layering, function (layer) {
    graph.forEach(layer, function (v, i) {
      g.node(v).order = i;
    });
  });
}

function parentDummyChains(g) {
  var postorderNums = postorder(g);

  graph.forEach(g.graph().dummyChains, function (v) {
    var node = g.node(v);
    var edgeObj = node.edgeObj;
    var pathData = findPath(g, postorderNums, edgeObj.v, edgeObj.w);
    var path = pathData.path;
    var lca = pathData.lca;
    var pathIdx = 0;
    var pathV = path[pathIdx];
    var ascending = true;

    while (v !== edgeObj.w) {
      node = g.node(v);

      if (ascending) {
        while ((pathV = path[pathIdx]) !== lca && g.node(pathV).maxRank < node.rank) {
          pathIdx++;
        }

        if (pathV === lca) {
          ascending = false;
        }
      }

      if (!ascending) {
        while (
          pathIdx < path.length - 1 &&
          g.node((pathV = path[pathIdx + 1])).minRank <= node.rank
        ) {
          pathIdx++;
        }
        pathV = path[pathIdx];
      }

      g.setParent(v, pathV);
      v = g.successors(v)[0];
    }
  });
}

// Find a path from v to w through the lowest common ancestor (LCA). Return the
// full path and the LCA.
function findPath(g, postorderNums, v, w) {
  var vPath = [];
  var wPath = [];
  var low = Math.min(postorderNums[v].low, postorderNums[w].low);
  var lim = Math.max(postorderNums[v].lim, postorderNums[w].lim);
  var parent;
  var lca;

  // Traverse up from v to find the LCA
  parent = v;
  do {
    parent = g.parent(parent);
    vPath.push(parent);
  } while (parent && (postorderNums[parent].low > low || lim > postorderNums[parent].lim));
  lca = parent;

  // Traverse from w to LCA
  parent = w;
  while ((parent = g.parent(parent)) !== lca) {
    wPath.push(parent);
  }

  return { path: vPath.concat(wPath.reverse()), lca: lca };
}

function postorder(g) {
  var result = {};
  var lim = 0;

  function dfs(v) {
    var low = lim;
    graph.forEach(g.children(v), dfs);
    result[v] = { low: low, lim: lim++ };
  }
  graph.forEach(g.children(), dfs);

  return result;
}

/*
 * Marks all edges in the graph with a type-1 conflict with the "type1Conflict"
 * property. A type-1 conflict is one where a non-inner segment crosses an
 * inner segment. An inner segment is an edge with both incident nodes marked
 * with the "dummy" property.
 *
 * This algorithm scans layer by layer, starting with the second, for type-1
 * conflicts between the current layer and the previous layer. For each layer
 * it scans the nodes from left to right until it reaches one that is incident
 * on an inner segment. It then scans predecessors to determine if they have
 * edges that cross that inner segment. At the end a final scan is done for all
 * nodes on the current rank to see if they cross the last visited inner
 * segment.
 *
 * This algorithm (safely) assumes that a dummy node will only be incident on a
 * single node in the layers being scanned.
 */
function findType1Conflicts(g, layering) {
  var conflicts = {};

  function visitLayer(prevLayer, layer) {
    var // last visited node in the previous layer that is incident on an inner
      // segment.
      k0 = 0,
      // Tracks the last node in this layer scanned for crossings with a type-1
      // segment.
      scanPos = 0,
      prevLayerLength = prevLayer.length,
      lastNode = last(layer);

    graph.forEach(layer, function (v, i) {
      var w = findOtherInnerSegmentNode(g, v),
        k1 = w ? g.node(w).order : prevLayerLength;

      if (w || v === lastNode) {
        graph.forEach(layer.slice(scanPos, i + 1), function (scanNode) {
          graph.forEach(g.predecessors(scanNode), function (u) {
            var uLabel = g.node(u),
              uPos = uLabel.order;
            if ((uPos < k0 || k1 < uPos) && !(uLabel.dummy && g.node(scanNode).dummy)) {
              addConflict(conflicts, u, scanNode);
            }
          });
        });
        // @ts-expect-error
        scanPos = i + 1;
        k0 = k1;
      }
    });

    return layer;
  }

  graph.reduce(layering, visitLayer);
  return conflicts;
}

function findType2Conflicts(g, layering) {
  var conflicts = {};

  function scan(south, southPos, southEnd, prevNorthBorder, nextNorthBorder) {
    var v;
    graph.forEach(range$1(southPos, southEnd), function (i) {
      v = south[i];
      if (g.node(v).dummy) {
        graph.forEach(g.predecessors(v), function (u) {
          var uNode = g.node(u);
          if (uNode.dummy && (uNode.order < prevNorthBorder || uNode.order > nextNorthBorder)) {
            addConflict(conflicts, u, v);
          }
        });
      }
    });
  }

  function visitLayer(north, south) {
    var prevNorthPos = -1,
      nextNorthPos,
      southPos = 0;

    graph.forEach(south, function (v, southLookahead) {
      if (g.node(v).dummy === 'border') {
        var predecessors = g.predecessors(v);
        if (predecessors.length) {
          nextNorthPos = g.node(predecessors[0]).order;
          scan(south, southPos, southLookahead, prevNorthPos, nextNorthPos);
          // @ts-expect-error
          southPos = southLookahead;
          prevNorthPos = nextNorthPos;
        }
      }
      scan(south, southPos, south.length, nextNorthPos, north.length);
    });

    return south;
  }

  graph.reduce(layering, visitLayer);
  return conflicts;
}

function findOtherInnerSegmentNode(g, v) {
  if (g.node(v).dummy) {
    return find$1(g.predecessors(v), function (u) {
      return g.node(u).dummy;
    });
  }
}

function addConflict(conflicts, v, w) {
  if (v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }

  var conflictsV = conflicts[v];
  if (!conflictsV) {
    conflicts[v] = conflictsV = {};
  }
  conflictsV[w] = true;
}

function hasConflict(conflicts, v, w) {
  if (v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  return graph.has(conflicts[v], w);
}

/*
 * Try to align nodes into vertical "blocks" where possible. This algorithm
 * attempts to align a node with one of its median neighbors. If the edge
 * connecting a neighbor is a type-1 conflict then we ignore that possibility.
 * If a previous node has already formed a block with a node after the node
 * we're trying to form a block with, we also ignore that possibility - our
 * blocks would be split in that scenario.
 */
function verticalAlignment(g, layering, conflicts, neighborFn) {
  var root = {},
    align = {},
    pos = {};

  // We cache the position here based on the layering because the graph and
  // layering may be out of sync. The layering matrix is manipulated to
  // generate different extreme alignments.
  graph.forEach(layering, function (layer) {
    graph.forEach(layer, function (v, order) {
      root[v] = v;
      align[v] = v;
      pos[v] = order;
    });
  });

  graph.forEach(layering, function (layer) {
    var prevIdx = -1;
    graph.forEach(layer, function (v) {
      var ws = neighborFn(v);
      if (ws.length) {
        ws = sortBy$1(ws, function (w) {
          return pos[w];
        });
        var mp = (ws.length - 1) / 2;
        for (var i = Math.floor(mp), il = Math.ceil(mp); i <= il; ++i) {
          var w = ws[i];
          if (align[v] === v && prevIdx < pos[w] && !hasConflict(conflicts, v, w)) {
            align[w] = v;
            align[v] = root[v] = root[w];
            prevIdx = pos[w];
          }
        }
      }
    });
  });

  return { root: root, align: align };
}

function horizontalCompaction(g, layering, root, align, reverseSep) {
  // This portion of the algorithm differs from BK due to a number of problems.
  // Instead of their algorithm we construct a new block graph and do two
  // sweeps. The first sweep places blocks with the smallest possible
  // coordinates. The second sweep removes unused space by moving blocks to the
  // greatest coordinates without violating separation.
  var xs = {},
    blockG = buildBlockGraph(g, layering, root, reverseSep),
    borderType = reverseSep ? 'borderLeft' : 'borderRight';

  function iterate(setXsFunc, nextNodesFunc) {
    var stack = blockG.nodes();
    var elem = stack.pop();
    var visited = {};
    while (elem) {
      if (visited[elem]) {
        setXsFunc(elem);
      } else {
        visited[elem] = true;
        stack.push(elem);
        stack = stack.concat(nextNodesFunc(elem));
      }

      elem = stack.pop();
    }
  }

  // First pass, assign smallest coordinates
  function pass1(elem) {
    xs[elem] = blockG.inEdges(elem).reduce(function (acc, e) {
      return Math.max(acc, xs[e.v] + blockG.edge(e));
    }, 0);
  }

  // Second pass, assign greatest coordinates
  function pass2(elem) {
    var min = blockG.outEdges(elem).reduce(function (acc, e) {
      return Math.min(acc, xs[e.w] - blockG.edge(e));
    }, Number.POSITIVE_INFINITY);

    var node = g.node(elem);
    if (min !== Number.POSITIVE_INFINITY && node.borderType !== borderType) {
      xs[elem] = Math.max(xs[elem], min);
    }
  }

  iterate(pass1, blockG.predecessors.bind(blockG));
  iterate(pass2, blockG.successors.bind(blockG));

  // Assign x coordinates to all nodes
  graph.forEach(align, function (v) {
    xs[v] = xs[root[v]];
  });

  return xs;
}

function buildBlockGraph(g, layering, root, reverseSep) {
  var blockGraph = new graph.Graph(),
    graphLabel = g.graph(),
    sepFn = sep(graphLabel.nodesep, graphLabel.edgesep, reverseSep);

  graph.forEach(layering, function (layer) {
    var u;
    graph.forEach(layer, function (v) {
      var vRoot = root[v];
      blockGraph.setNode(vRoot);
      if (u) {
        var uRoot = root[u],
          prevMax = blockGraph.edge(uRoot, vRoot);
        blockGraph.setEdge(uRoot, vRoot, Math.max(sepFn(g, v, u), prevMax || 0));
      }
      u = v;
    });
  });

  return blockGraph;
}

/*
 * Returns the alignment that has the smallest width of the given alignments.
 */
function findSmallestWidthAlignment(g, xss) {
  return minBy(graph.values(xss), function (xs) {
    var max = Number.NEGATIVE_INFINITY;
    var min = Number.POSITIVE_INFINITY;

    forIn(xs, function (x, v) {
      var halfWidth = width(g, v) / 2;

      max = Math.max(x + halfWidth, max);
      min = Math.min(x - halfWidth, min);
    });

    return max - min;
  });
}

/*
 * Align the coordinates of each of the layout alignments such that
 * left-biased alignments have their minimum coordinate at the same point as
 * the minimum coordinate of the smallest width alignment and right-biased
 * alignments have their maximum coordinate at the same point as the maximum
 * coordinate of the smallest width alignment.
 */
function alignCoordinates(xss, alignTo) {
  var alignToVals = graph.values(alignTo),
    alignToMin = min(alignToVals),
    alignToMax = max(alignToVals);

  graph.forEach(['u', 'd'], function (vert) {
    graph.forEach(['l', 'r'], function (horiz) {
      var alignment = vert + horiz,
        xs = xss[alignment],
        delta;
      if (xs === alignTo) return;

      var xsVals = graph.values(xs);
      delta = horiz === 'l' ? alignToMin - min(xsVals) : alignToMax - max(xsVals);

      if (delta) {
        xss[alignment] = mapValues(xs, function (x) {
          return x + delta;
        });
      }
    });
  });
}

function balance(xss, align) {
  return mapValues(xss.ul, function (ignore, v) {
    if (align) {
      return xss[align.toLowerCase()][v];
    } else {
      var xs = sortBy$1(map(xss, v));
      return (xs[1] + xs[2]) / 2;
    }
  });
}

function positionX(g) {
  var layering = buildLayerMatrix(g);
  var conflicts = index.merge(findType1Conflicts(g, layering), findType2Conflicts(g, layering));

  var xss = {};
  var adjustedLayering;
  graph.forEach(['u', 'd'], function (vert) {
    adjustedLayering = vert === 'u' ? layering : graph.values(layering).reverse();
    graph.forEach(['l', 'r'], function (horiz) {
      if (horiz === 'r') {
        adjustedLayering = map(adjustedLayering, function (inner) {
          return graph.values(inner).reverse();
        });
      }

      var neighborFn = (vert === 'u' ? g.predecessors : g.successors).bind(g);
      var align = verticalAlignment(g, adjustedLayering, conflicts, neighborFn);
      var xs = horizontalCompaction(g, adjustedLayering, align.root, align.align, horiz === 'r');
      if (horiz === 'r') {
        xs = mapValues(xs, function (x) {
          return -x;
        });
      }
      xss[vert + horiz] = xs;
    });
  });

  var smallestWidth = findSmallestWidthAlignment(g, xss);
  alignCoordinates(xss, smallestWidth);
  return balance(xss, g.graph().align);
}

function sep(nodeSep, edgeSep, reverseSep) {
  return function (g, v, w) {
    var vLabel = g.node(v);
    var wLabel = g.node(w);
    var sum = 0;
    var delta;

    sum += vLabel.width / 2;
    if (graph.has(vLabel, 'labelpos')) {
      switch (vLabel.labelpos.toLowerCase()) {
        case 'l':
          delta = -vLabel.width / 2;
          break;
        case 'r':
          delta = vLabel.width / 2;
          break;
      }
    }
    if (delta) {
      sum += reverseSep ? delta : -delta;
    }
    delta = 0;

    sum += (vLabel.dummy ? edgeSep : nodeSep) / 2;
    sum += (wLabel.dummy ? edgeSep : nodeSep) / 2;

    sum += wLabel.width / 2;
    if (graph.has(wLabel, 'labelpos')) {
      switch (wLabel.labelpos.toLowerCase()) {
        case 'l':
          delta = wLabel.width / 2;
          break;
        case 'r':
          delta = -wLabel.width / 2;
          break;
      }
    }
    if (delta) {
      sum += reverseSep ? delta : -delta;
    }
    delta = 0;

    return sum;
  };
}

function width(g, v) {
  return g.node(v).width;
}

function position(g) {
  g = asNonCompoundGraph(g);

  positionY(g);
  forOwn(positionX(g), function (x, v) {
    g.node(v).x = x;
  });
}

function positionY(g) {
  var layering = buildLayerMatrix(g);
  var rankSep = g.graph().ranksep;
  var prevY = 0;
  graph.forEach(layering, function (layer) {
    var maxHeight = max(
      map(layer, function (v) {
        return g.node(v).height;
      })
    );
    graph.forEach(layer, function (v) {
      g.node(v).y = prevY + maxHeight / 2;
    });
    prevY += maxHeight + rankSep;
  });
}

function layout(g, opts) {
  var time$1 = opts && opts.debugTiming ? time : notime;
  time$1('layout', function () {
    var layoutGraph = time$1('  buildLayoutGraph', function () {
      return buildLayoutGraph(g);
    });
    time$1('  runLayout', function () {
      runLayout(layoutGraph, time$1);
    });
    time$1('  updateInputGraph', function () {
      updateInputGraph(g, layoutGraph);
    });
  });
}

function runLayout(g, time) {
  time('    makeSpaceForEdgeLabels', function () {
    makeSpaceForEdgeLabels(g);
  });
  time('    removeSelfEdges', function () {
    removeSelfEdges(g);
  });
  time('    acyclic', function () {
    run$2(g);
  });
  time('    nestingGraph.run', function () {
    run(g);
  });
  time('    rank', function () {
    rank(asNonCompoundGraph(g));
  });
  time('    injectEdgeLabelProxies', function () {
    injectEdgeLabelProxies(g);
  });
  time('    removeEmptyRanks', function () {
    removeEmptyRanks(g);
  });
  time('    nestingGraph.cleanup', function () {
    cleanup(g);
  });
  time('    normalizeRanks', function () {
    normalizeRanks(g);
  });
  time('    assignRankMinMax', function () {
    assignRankMinMax(g);
  });
  time('    removeEdgeLabelProxies', function () {
    removeEdgeLabelProxies(g);
  });
  time('    normalize.run', function () {
    run$1(g);
  });
  time('    parentDummyChains', function () {
    parentDummyChains(g);
  });
  time('    addBorderSegments', function () {
    addBorderSegments(g);
  });
  time('    order', function () {
    order(g);
  });
  time('    insertSelfEdges', function () {
    insertSelfEdges(g);
  });
  time('    adjustCoordinateSystem', function () {
    adjust(g);
  });
  time('    position', function () {
    position(g);
  });
  time('    positionSelfEdges', function () {
    positionSelfEdges(g);
  });
  time('    removeBorderNodes', function () {
    removeBorderNodes(g);
  });
  time('    normalize.undo', function () {
    undo(g);
  });
  time('    fixupEdgeLabelCoords', function () {
    fixupEdgeLabelCoords(g);
  });
  time('    undoCoordinateSystem', function () {
    undo$1(g);
  });
  time('    translateGraph', function () {
    translateGraph(g);
  });
  time('    assignNodeIntersects', function () {
    assignNodeIntersects(g);
  });
  time('    reversePoints', function () {
    reversePointsForReversedEdges(g);
  });
  time('    acyclic.undo', function () {
    undo$2(g);
  });
}

/*
 * Copies final layout information from the layout graph back to the input
 * graph. This process only copies whitelisted attributes from the layout graph
 * to the input graph, so it serves as a good place to determine what
 * attributes can influence layout.
 */
function updateInputGraph(inputGraph, layoutGraph) {
  graph.forEach(inputGraph.nodes(), function (v) {
    var inputLabel = inputGraph.node(v);
    var layoutLabel = layoutGraph.node(v);

    if (inputLabel) {
      inputLabel.x = layoutLabel.x;
      inputLabel.y = layoutLabel.y;

      if (layoutGraph.children(v).length) {
        inputLabel.width = layoutLabel.width;
        inputLabel.height = layoutLabel.height;
      }
    }
  });

  graph.forEach(inputGraph.edges(), function (e) {
    var inputLabel = inputGraph.edge(e);
    var layoutLabel = layoutGraph.edge(e);

    inputLabel.points = layoutLabel.points;
    if (graph.has(layoutLabel, 'x')) {
      inputLabel.x = layoutLabel.x;
      inputLabel.y = layoutLabel.y;
    }
  });

  inputGraph.graph().width = layoutGraph.graph().width;
  inputGraph.graph().height = layoutGraph.graph().height;
}

var graphNumAttrs = ['nodesep', 'edgesep', 'ranksep', 'marginx', 'marginy'];
var graphDefaults = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: 'tb' };
var graphAttrs = ['acyclicer', 'ranker', 'rankdir', 'align'];
var nodeNumAttrs = ['width', 'height'];
var nodeDefaults = { width: 0, height: 0 };
var edgeNumAttrs = ['minlen', 'weight', 'width', 'height', 'labeloffset'];
var edgeDefaults = {
  minlen: 1,
  weight: 1,
  width: 0,
  height: 0,
  labeloffset: 10,
  labelpos: 'r',
};
var edgeAttrs = ['labelpos'];

/*
 * Constructs a new graph from the input graph, which can be used for layout.
 * This process copies only whitelisted attributes from the input graph to the
 * layout graph. Thus this function serves as a good place to determine what
 * attributes can influence layout.
 */
function buildLayoutGraph(inputGraph) {
  var g = new graph.Graph({ multigraph: true, compound: true });
  var graph$1 = canonicalize(inputGraph.graph());

  g.setGraph(
    index.merge({}, graphDefaults, selectNumberAttrs(graph$1, graphNumAttrs), pick$1(graph$1, graphAttrs))
  );

  graph.forEach(inputGraph.nodes(), function (v) {
    var node = canonicalize(inputGraph.node(v));
    g.setNode(v, defaults$1(selectNumberAttrs(node, nodeNumAttrs), nodeDefaults));
    g.setParent(v, inputGraph.parent(v));
  });

  graph.forEach(inputGraph.edges(), function (e) {
    var edge = canonicalize(inputGraph.edge(e));
    g.setEdge(
      e,
      index.merge({}, edgeDefaults, selectNumberAttrs(edge, edgeNumAttrs), pick$1(edge, edgeAttrs))
    );
  });

  return g;
}

/*
 * This idea comes from the Gansner paper: to account for edge labels in our
 * layout we split each rank in half by doubling minlen and halving ranksep.
 * Then we can place labels at these mid-points between nodes.
 *
 * We also add some minimal padding to the width to push the label for the edge
 * away from the edge itself a bit.
 */
function makeSpaceForEdgeLabels(g) {
  var graph$1 = g.graph();
  graph$1.ranksep /= 2;
  graph.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    edge.minlen *= 2;
    if (edge.labelpos.toLowerCase() !== 'c') {
      if (graph$1.rankdir === 'TB' || graph$1.rankdir === 'BT') {
        edge.width += edge.labeloffset;
      } else {
        edge.height += edge.labeloffset;
      }
    }
  });
}

/*
 * Creates temporary dummy nodes that capture the rank in which each edge's
 * label is going to, if it has one of non-zero width and height. We do this
 * so that we can safely remove empty ranks while preserving balance for the
 * label's position.
 */
function injectEdgeLabelProxies(g) {
  graph.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    if (edge.width && edge.height) {
      var v = g.node(e.v);
      var w = g.node(e.w);
      var label = { rank: (w.rank - v.rank) / 2 + v.rank, e: e };
      addDummyNode(g, 'edge-proxy', label, '_ep');
    }
  });
}

function assignRankMinMax(g) {
  var maxRank = 0;
  graph.forEach(g.nodes(), function (v) {
    var node = g.node(v);
    if (node.borderTop) {
      node.minRank = g.node(node.borderTop).rank;
      node.maxRank = g.node(node.borderBottom).rank;
      // @ts-expect-error
      maxRank = max(maxRank, node.maxRank);
    }
  });
  g.graph().maxRank = maxRank;
}

function removeEdgeLabelProxies(g) {
  graph.forEach(g.nodes(), function (v) {
    var node = g.node(v);
    if (node.dummy === 'edge-proxy') {
      g.edge(node.e).labelRank = node.rank;
      g.removeNode(v);
    }
  });
}

function translateGraph(g) {
  var minX = Number.POSITIVE_INFINITY;
  var maxX = 0;
  var minY = Number.POSITIVE_INFINITY;
  var maxY = 0;
  var graphLabel = g.graph();
  var marginX = graphLabel.marginx || 0;
  var marginY = graphLabel.marginy || 0;

  function getExtremes(attrs) {
    var x = attrs.x;
    var y = attrs.y;
    var w = attrs.width;
    var h = attrs.height;
    minX = Math.min(minX, x - w / 2);
    maxX = Math.max(maxX, x + w / 2);
    minY = Math.min(minY, y - h / 2);
    maxY = Math.max(maxY, y + h / 2);
  }

  graph.forEach(g.nodes(), function (v) {
    getExtremes(g.node(v));
  });
  graph.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    if (graph.has(edge, 'x')) {
      getExtremes(edge);
    }
  });

  minX -= marginX;
  minY -= marginY;

  graph.forEach(g.nodes(), function (v) {
    var node = g.node(v);
    node.x -= minX;
    node.y -= minY;
  });

  graph.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    graph.forEach(edge.points, function (p) {
      p.x -= minX;
      p.y -= minY;
    });
    if (graph.has(edge, 'x')) {
      edge.x -= minX;
    }
    if (graph.has(edge, 'y')) {
      edge.y -= minY;
    }
  });

  graphLabel.width = maxX - minX + marginX;
  graphLabel.height = maxY - minY + marginY;
}

function assignNodeIntersects(g) {
  graph.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    var nodeV = g.node(e.v);
    var nodeW = g.node(e.w);
    var p1, p2;
    if (!edge.points) {
      edge.points = [];
      p1 = nodeW;
      p2 = nodeV;
    } else {
      p1 = edge.points[0];
      p2 = edge.points[edge.points.length - 1];
    }
    edge.points.unshift(intersectRect(nodeV, p1));
    edge.points.push(intersectRect(nodeW, p2));
  });
}

function fixupEdgeLabelCoords(g) {
  graph.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    if (graph.has(edge, 'x')) {
      if (edge.labelpos === 'l' || edge.labelpos === 'r') {
        edge.width -= edge.labeloffset;
      }
      switch (edge.labelpos) {
        case 'l':
          edge.x -= edge.width / 2 + edge.labeloffset;
          break;
        case 'r':
          edge.x += edge.width / 2 + edge.labeloffset;
          break;
      }
    }
  });
}

function reversePointsForReversedEdges(g) {
  graph.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    if (edge.reversed) {
      edge.points.reverse();
    }
  });
}

function removeBorderNodes(g) {
  graph.forEach(g.nodes(), function (v) {
    if (g.children(v).length) {
      var node = g.node(v);
      var t = g.node(node.borderTop);
      var b = g.node(node.borderBottom);
      var l = g.node(last(node.borderLeft));
      var r = g.node(last(node.borderRight));

      node.width = Math.abs(r.x - l.x);
      node.height = Math.abs(b.y - t.y);
      node.x = l.x + node.width / 2;
      node.y = t.y + node.height / 2;
    }
  });

  graph.forEach(g.nodes(), function (v) {
    if (g.node(v).dummy === 'border') {
      g.removeNode(v);
    }
  });
}

function removeSelfEdges(g) {
  graph.forEach(g.edges(), function (e) {
    if (e.v === e.w) {
      var node = g.node(e.v);
      if (!node.selfEdges) {
        node.selfEdges = [];
      }
      node.selfEdges.push({ e: e, label: g.edge(e) });
      g.removeEdge(e);
    }
  });
}

function insertSelfEdges(g) {
  var layers = buildLayerMatrix(g);
  graph.forEach(layers, function (layer) {
    var orderShift = 0;
    graph.forEach(layer, function (v, i) {
      var node = g.node(v);
      node.order = i + orderShift;
      graph.forEach(node.selfEdges, function (selfEdge) {
        addDummyNode(
          g,
          'selfedge',
          {
            width: selfEdge.label.width,
            height: selfEdge.label.height,
            rank: node.rank,
            order: i + ++orderShift,
            e: selfEdge.e,
            label: selfEdge.label,
          },
          '_se'
        );
      });
      delete node.selfEdges;
    });
  });
}

function positionSelfEdges(g) {
  graph.forEach(g.nodes(), function (v) {
    var node = g.node(v);
    if (node.dummy === 'selfedge') {
      var selfNode = g.node(node.e.v);
      var x = selfNode.x + selfNode.width / 2;
      var y = selfNode.y;
      var dx = node.x - x;
      var dy = selfNode.height / 2;
      g.setEdge(node.e, node.label);
      g.removeNode(v);
      node.label.points = [
        { x: x + (2 * dx) / 3, y: y - dy },
        { x: x + (5 * dx) / 6, y: y - dy },
        { x: x + dx, y: y },
        { x: x + (5 * dx) / 6, y: y + dy },
        { x: x + (2 * dx) / 3, y: y + dy },
      ];
      node.label.x = node.x;
      node.label.y = node.y;
    }
  });
}

function selectNumberAttrs(obj, attrs) {
  return mapValues(pick$1(obj, attrs), Number);
}

function canonicalize(attrs) {
  var newAttrs = {};
  graph.forEach(attrs, function (v, k) {
    newAttrs[k.toLowerCase()] = v;
  });
  return newAttrs;
}

exports.defaults = defaults$1;
exports.layout = layout;
exports.map = map;
exports.pick = pick$1;
exports.range = range$1;
exports.uniqueId = uniqueId;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LTNjYjUyMmQzLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL190cmltbWVkRW5kSW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlVHJpbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvdG9OdW1iZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL3RvRmluaXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy90b0ludGVnZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2ZsYXR0ZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19mbGF0UmVzdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvY2xvbmVEZWVwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9ub3cuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2RlZmF1bHRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9sYXN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY3JlYXRlRmluZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvZmluZEluZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9maW5kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZU1hcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvbWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9mb3JJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvZm9yT3duLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUd0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUx0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9tYXBWYWx1ZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlRXh0cmVtdW0uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL21heC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvbWluLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9taW5CeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VTZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlUGlja0J5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZVNvcnRCeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2NvbXBhcmVBc2NlbmRpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19jb21wYXJlTXVsdGlwbGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlT3JkZXJCeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VQaWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9waWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZVJhbmdlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY3JlYXRlUmFuZ2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL3JhbmdlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9zb3J0QnkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL3VuaXF1ZUlkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZVppcE9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvemlwT2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhZ3JlLWQzLWVzL3NyYy9kYWdyZS9kYXRhL2xpc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlL2dyZWVkeS1mYXMuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlL2FjeWNsaWMuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlL3V0aWwuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlL2FkZC1ib3JkZXItc2VnbWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlL2Nvb3JkaW5hdGUtc3lzdGVtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhZ3JlLWQzLWVzL3NyYy9kYWdyZS9ub3JtYWxpemUuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlL3JhbmsvdXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYWdyZS1kMy1lcy9zcmMvZGFncmUvcmFuay9mZWFzaWJsZS10cmVlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhZ3JlLWQzLWVzL3NyYy9ncmFwaGxpYi9hbGcvdG9wc29ydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYWdyZS1kMy1lcy9zcmMvZ3JhcGhsaWIvYWxnL2Rmcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYWdyZS1kMy1lcy9zcmMvZ3JhcGhsaWIvYWxnL3Bvc3RvcmRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYWdyZS1kMy1lcy9zcmMvZ3JhcGhsaWIvYWxnL3ByZW9yZGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhZ3JlLWQzLWVzL3NyYy9kYWdyZS9yYW5rL25ldHdvcmstc2ltcGxleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYWdyZS1kMy1lcy9zcmMvZGFncmUvcmFuay9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYWdyZS1kMy1lcy9zcmMvZGFncmUvbmVzdGluZy1ncmFwaC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYWdyZS1kMy1lcy9zcmMvZGFncmUvb3JkZXIvYWRkLXN1YmdyYXBoLWNvbnN0cmFpbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhZ3JlLWQzLWVzL3NyYy9kYWdyZS9vcmRlci9idWlsZC1sYXllci1ncmFwaC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYWdyZS1kMy1lcy9zcmMvZGFncmUvb3JkZXIvY3Jvc3MtY291bnQuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlL29yZGVyL2luaXQtb3JkZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlL29yZGVyL2JhcnljZW50ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlL29yZGVyL3Jlc29sdmUtY29uZmxpY3RzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhZ3JlLWQzLWVzL3NyYy9kYWdyZS9vcmRlci9zb3J0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhZ3JlLWQzLWVzL3NyYy9kYWdyZS9vcmRlci9zb3J0LXN1YmdyYXBoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhZ3JlLWQzLWVzL3NyYy9kYWdyZS9vcmRlci9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYWdyZS1kMy1lcy9zcmMvZGFncmUvcGFyZW50LWR1bW15LWNoYWlucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYWdyZS1kMy1lcy9zcmMvZGFncmUvcG9zaXRpb24vYmsuanMiLCIuLi9ub2RlX21vZHVsZXMvZGFncmUtZDMtZXMvc3JjL2RhZ3JlL3Bvc2l0aW9uL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhZ3JlLWQzLWVzL3NyYy9kYWdyZS9sYXlvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIFVzZWQgdG8gbWF0Y2ggYSBzaW5nbGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXG52YXIgcmVXaGl0ZXNwYWNlID0gL1xccy87XG5cbi8qKlxuICogVXNlZCBieSBgXy50cmltYCBhbmQgYF8udHJpbUVuZGAgdG8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZVxuICogY2hhcmFjdGVyIG9mIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3Rlci5cbiAqL1xuZnVuY3Rpb24gdHJpbW1lZEVuZEluZGV4KHN0cmluZykge1xuICB2YXIgaW5kZXggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleC0tICYmIHJlV2hpdGVzcGFjZS50ZXN0KHN0cmluZy5jaGFyQXQoaW5kZXgpKSkge31cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5leHBvcnQgZGVmYXVsdCB0cmltbWVkRW5kSW5kZXg7XG4iLCJpbXBvcnQgdHJpbW1lZEVuZEluZGV4IGZyb20gJy4vX3RyaW1tZWRFbmRJbmRleC5qcyc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW1TdGFydCA9IC9eXFxzKy87XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udHJpbWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byB0cmltLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgdHJpbW1lZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUcmltKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nXG4gICAgPyBzdHJpbmcuc2xpY2UoMCwgdHJpbW1lZEVuZEluZGV4KHN0cmluZykgKyAxKS5yZXBsYWNlKHJlVHJpbVN0YXJ0LCAnJylcbiAgICA6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZVRyaW07XG4iLCJpbXBvcnQgYmFzZVRyaW0gZnJvbSAnLi9fYmFzZVRyaW0uanMnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuaW1wb3J0IGlzU3ltYm9sIGZyb20gJy4vaXNTeW1ib2wuanMnO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gYmFzZVRyaW0odmFsdWUpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9OdW1iZXI7XG4iLCJpbXBvcnQgdG9OdW1iZXIgZnJvbSAnLi90b051bWJlci5qcyc7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDAsXG4gICAgTUFYX0lOVEVHRVIgPSAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwODtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgZmluaXRlIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTIuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvRmluaXRlKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvRmluaXRlKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b0Zpbml0ZShJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9GaW5pdGUoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvRmluaXRlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6IDA7XG4gIH1cbiAgdmFsdWUgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmICh2YWx1ZSA9PT0gSU5GSU5JVFkgfHwgdmFsdWUgPT09IC1JTkZJTklUWSkge1xuICAgIHZhciBzaWduID0gKHZhbHVlIDwgMCA/IC0xIDogMSk7XG4gICAgcmV0dXJuIHNpZ24gKiBNQVhfSU5URUdFUjtcbiAgfVxuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gdmFsdWUgOiAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b0Zpbml0ZTtcbiIsImltcG9ydCB0b0Zpbml0ZSBmcm9tICcuL3RvRmluaXRlLmpzJztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGFuIGludGVnZXIuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9JbnRlZ2VyYF0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvaW50ZWdlcikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgaW50ZWdlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b0ludGVnZXIoMy4yKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLnRvSW50ZWdlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDBcbiAqXG4gKiBfLnRvSW50ZWdlcihJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9JbnRlZ2VyKCczLjInKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gdG9JbnRlZ2VyKHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSB0b0Zpbml0ZSh2YWx1ZSksXG4gICAgICByZW1haW5kZXIgPSByZXN1bHQgJSAxO1xuXG4gIHJldHVybiByZXN1bHQgPT09IHJlc3VsdCA/IChyZW1haW5kZXIgPyByZXN1bHQgLSByZW1haW5kZXIgOiByZXN1bHQpIDogMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9JbnRlZ2VyO1xuIiwiaW1wb3J0IGJhc2VGbGF0dGVuIGZyb20gJy4vX2Jhc2VGbGF0dGVuLmpzJztcblxuLyoqXG4gKiBGbGF0dGVucyBgYXJyYXlgIGEgc2luZ2xlIGxldmVsIGRlZXAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gZmxhdHRlbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZsYXR0ZW5lZCBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5mbGF0dGVuKFsxLCBbMiwgWzMsIFs0XV0sIDVdXSk7XG4gKiAvLyA9PiBbMSwgMiwgWzMsIFs0XV0sIDVdXG4gKi9cbmZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gbGVuZ3RoID8gYmFzZUZsYXR0ZW4oYXJyYXksIDEpIDogW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZsYXR0ZW47XG4iLCJpbXBvcnQgZmxhdHRlbiBmcm9tICcuL2ZsYXR0ZW4uanMnO1xuaW1wb3J0IG92ZXJSZXN0IGZyb20gJy4vX292ZXJSZXN0LmpzJztcbmltcG9ydCBzZXRUb1N0cmluZyBmcm9tICcuL19zZXRUb1N0cmluZy5qcyc7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggZmxhdHRlbnMgdGhlIHJlc3QgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gZmxhdFJlc3QoZnVuYykge1xuICByZXR1cm4gc2V0VG9TdHJpbmcob3ZlclJlc3QoZnVuYywgdW5kZWZpbmVkLCBmbGF0dGVuKSwgZnVuYyArICcnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmxhdFJlc3Q7XG4iLCJpbXBvcnQgYmFzZUNsb25lIGZyb20gJy4vX2Jhc2VDbG9uZS5qcyc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uY2xvbmVgIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IGNsb25lcyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMS4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZWN1cnNpdmVseSBjbG9uZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBkZWVwIGNsb25lZCB2YWx1ZS5cbiAqIEBzZWUgXy5jbG9uZVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICdhJzogMSB9LCB7ICdiJzogMiB9XTtcbiAqXG4gKiB2YXIgZGVlcCA9IF8uY2xvbmVEZWVwKG9iamVjdHMpO1xuICogY29uc29sZS5sb2coZGVlcFswXSA9PT0gb2JqZWN0c1swXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBjbG9uZURlZXAodmFsdWUpIHtcbiAgcmV0dXJuIGJhc2VDbG9uZSh2YWx1ZSwgQ0xPTkVfREVFUF9GTEFHIHwgQ0xPTkVfU1lNQk9MU19GTEFHKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmVEZWVwO1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vdztcbiIsImltcG9ydCBiYXNlUmVzdCBmcm9tICcuL19iYXNlUmVzdC5qcyc7XG5pbXBvcnQgZXEgZnJvbSAnLi9lcS5qcyc7XG5pbXBvcnQgaXNJdGVyYXRlZUNhbGwgZnJvbSAnLi9faXNJdGVyYXRlZUNhbGwuanMnO1xuaW1wb3J0IGtleXNJbiBmcm9tICcuL2tleXNJbi5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0aWVzIG9mIHNvdXJjZVxuICogb2JqZWN0cyB0byB0aGUgZGVzdGluYXRpb24gb2JqZWN0IGZvciBhbGwgZGVzdGluYXRpb24gcHJvcGVydGllcyB0aGF0XG4gKiByZXNvbHZlIHRvIGB1bmRlZmluZWRgLiBTb3VyY2Ugb2JqZWN0cyBhcmUgYXBwbGllZCBmcm9tIGxlZnQgdG8gcmlnaHQuXG4gKiBPbmNlIGEgcHJvcGVydHkgaXMgc2V0LCBhZGRpdGlvbmFsIHZhbHVlcyBvZiB0aGUgc2FtZSBwcm9wZXJ0eSBhcmUgaWdub3JlZC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gW3NvdXJjZXNdIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAc2VlIF8uZGVmYXVsdHNEZWVwXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmYXVsdHMoeyAnYSc6IDEgfSwgeyAnYic6IDIgfSwgeyAnYSc6IDMgfSk7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2InOiAyIH1cbiAqL1xudmFyIGRlZmF1bHRzID0gYmFzZVJlc3QoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2VzKSB7XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xO1xuICB2YXIgbGVuZ3RoID0gc291cmNlcy5sZW5ndGg7XG4gIHZhciBndWFyZCA9IGxlbmd0aCA+IDIgPyBzb3VyY2VzWzJdIDogdW5kZWZpbmVkO1xuXG4gIGlmIChndWFyZCAmJiBpc0l0ZXJhdGVlQ2FsbChzb3VyY2VzWzBdLCBzb3VyY2VzWzFdLCBndWFyZCkpIHtcbiAgICBsZW5ndGggPSAxO1xuICB9XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgc291cmNlID0gc291cmNlc1tpbmRleF07XG4gICAgdmFyIHByb3BzID0ga2V5c0luKHNvdXJjZSk7XG4gICAgdmFyIHByb3BzSW5kZXggPSAtMTtcbiAgICB2YXIgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoKytwcm9wc0luZGV4IDwgcHJvcHNMZW5ndGgpIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1twcm9wc0luZGV4XTtcbiAgICAgIHZhciB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgIChlcSh2YWx1ZSwgb2JqZWN0UHJvdG9ba2V5XSkgJiYgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkge1xuICAgICAgICBvYmplY3Rba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdHM7XG4iLCIvKipcbiAqIEdldHMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmxhc3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gbGFzdChhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiBsZW5ndGggPyBhcnJheVtsZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGFzdDtcbiIsImltcG9ydCBiYXNlSXRlcmF0ZWUgZnJvbSAnLi9fYmFzZUl0ZXJhdGVlLmpzJztcbmltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL2lzQXJyYXlMaWtlLmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBfLmZpbmRgIG9yIGBfLmZpbmRMYXN0YCBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZmluZEluZGV4RnVuYyBUaGUgZnVuY3Rpb24gdG8gZmluZCB0aGUgY29sbGVjdGlvbiBpbmRleC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZpbmQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZpbmQoZmluZEluZGV4RnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24oY29sbGVjdGlvbiwgcHJlZGljYXRlLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgaXRlcmFibGUgPSBPYmplY3QoY29sbGVjdGlvbik7XG4gICAgaWYgKCFpc0FycmF5TGlrZShjb2xsZWN0aW9uKSkge1xuICAgICAgdmFyIGl0ZXJhdGVlID0gYmFzZUl0ZXJhdGVlKHByZWRpY2F0ZSwgMyk7XG4gICAgICBjb2xsZWN0aW9uID0ga2V5cyhjb2xsZWN0aW9uKTtcbiAgICAgIHByZWRpY2F0ZSA9IGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSk7IH07XG4gICAgfVxuICAgIHZhciBpbmRleCA9IGZpbmRJbmRleEZ1bmMoY29sbGVjdGlvbiwgcHJlZGljYXRlLCBmcm9tSW5kZXgpO1xuICAgIHJldHVybiBpbmRleCA+IC0xID8gaXRlcmFibGVbaXRlcmF0ZWUgPyBjb2xsZWN0aW9uW2luZGV4XSA6IGluZGV4XSA6IHVuZGVmaW5lZDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRmluZDtcbiIsImltcG9ydCBiYXNlRmluZEluZGV4IGZyb20gJy4vX2Jhc2VGaW5kSW5kZXguanMnO1xuaW1wb3J0IGJhc2VJdGVyYXRlZSBmcm9tICcuL19iYXNlSXRlcmF0ZWUuanMnO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tICcuL3RvSW50ZWdlci5qcyc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmZpbmRgIGV4Y2VwdCB0aGF0IGl0IHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdFxuICogZWxlbWVudCBgcHJlZGljYXRlYCByZXR1cm5zIHRydXRoeSBmb3IgaW5zdGVhZCBvZiB0aGUgZWxlbWVudCBpdHNlbGYuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjEuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcmVkaWNhdGU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZnJvbUluZGV4PTBdIFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmb3VuZCBlbGVtZW50LCBlbHNlIGAtMWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknLCAgJ2FjdGl2ZSc6IGZhbHNlIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcsICAgICdhY3RpdmUnOiBmYWxzZSB9LFxuICogICB7ICd1c2VyJzogJ3BlYmJsZXMnLCAnYWN0aXZlJzogdHJ1ZSB9XG4gKiBdO1xuICpcbiAqIF8uZmluZEluZGV4KHVzZXJzLCBmdW5jdGlvbihvKSB7IHJldHVybiBvLnVzZXIgPT0gJ2Jhcm5leSc7IH0pO1xuICogLy8gPT4gMFxuICpcbiAqIC8vIFRoZSBgXy5tYXRjaGVzYCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLmZpbmRJbmRleCh1c2VycywgeyAndXNlcic6ICdmcmVkJywgJ2FjdGl2ZSc6IGZhbHNlIH0pO1xuICogLy8gPT4gMVxuICpcbiAqIC8vIFRoZSBgXy5tYXRjaGVzUHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZEluZGV4KHVzZXJzLCBbJ2FjdGl2ZScsIGZhbHNlXSk7XG4gKiAvLyA9PiAwXG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLmZpbmRJbmRleCh1c2VycywgJ2FjdGl2ZScpO1xuICogLy8gPT4gMlxuICovXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4ID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGZyb21JbmRleCk7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBpbmRleCA9IG5hdGl2ZU1heChsZW5ndGggKyBpbmRleCwgMCk7XG4gIH1cbiAgcmV0dXJuIGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJdGVyYXRlZShwcmVkaWNhdGUsIDMpLCBpbmRleCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRJbmRleDtcbiIsImltcG9ydCBjcmVhdGVGaW5kIGZyb20gJy4vX2NyZWF0ZUZpbmQuanMnO1xuaW1wb3J0IGZpbmRJbmRleCBmcm9tICcuL2ZpbmRJbmRleC5qcyc7XG5cbi8qKlxuICogSXRlcmF0ZXMgb3ZlciBlbGVtZW50cyBvZiBgY29sbGVjdGlvbmAsIHJldHVybmluZyB0aGUgZmlyc3QgZWxlbWVudFxuICogYHByZWRpY2F0ZWAgcmV0dXJucyB0cnV0aHkgZm9yLiBUaGUgcHJlZGljYXRlIGlzIGludm9rZWQgd2l0aCB0aHJlZVxuICogYXJndW1lbnRzOiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJlZGljYXRlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2Zyb21JbmRleD0wXSBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWF0Y2hlZCBlbGVtZW50LCBlbHNlIGB1bmRlZmluZWRgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgdXNlcnMgPSBbXG4gKiAgIHsgJ3VzZXInOiAnYmFybmV5JywgICdhZ2UnOiAzNiwgJ2FjdGl2ZSc6IHRydWUgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAgJ2FnZSc6IDQwLCAnYWN0aXZlJzogZmFsc2UgfSxcbiAqICAgeyAndXNlcic6ICdwZWJibGVzJywgJ2FnZSc6IDEsICAnYWN0aXZlJzogdHJ1ZSB9XG4gKiBdO1xuICpcbiAqIF8uZmluZCh1c2VycywgZnVuY3Rpb24obykgeyByZXR1cm4gby5hZ2UgPCA0MDsgfSk7XG4gKiAvLyA9PiBvYmplY3QgZm9yICdiYXJuZXknXG4gKlxuICogLy8gVGhlIGBfLm1hdGNoZXNgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZCh1c2VycywgeyAnYWdlJzogMSwgJ2FjdGl2ZSc6IHRydWUgfSk7XG4gKiAvLyA9PiBvYmplY3QgZm9yICdwZWJibGVzJ1xuICpcbiAqIC8vIFRoZSBgXy5tYXRjaGVzUHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZCh1c2VycywgWydhY3RpdmUnLCBmYWxzZV0pO1xuICogLy8gPT4gb2JqZWN0IGZvciAnZnJlZCdcbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZCh1c2VycywgJ2FjdGl2ZScpO1xuICogLy8gPT4gb2JqZWN0IGZvciAnYmFybmV5J1xuICovXG52YXIgZmluZCA9IGNyZWF0ZUZpbmQoZmluZEluZGV4KTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZDtcbiIsImltcG9ydCBiYXNlRWFjaCBmcm9tICcuL19iYXNlRWFjaC5qcyc7XG5pbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9pc0FycmF5TGlrZS5qcyc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWFwYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXAoY29sbGVjdGlvbiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBpc0FycmF5TGlrZShjb2xsZWN0aW9uKSA/IEFycmF5KGNvbGxlY3Rpb24ubGVuZ3RoKSA6IFtdO1xuXG4gIGJhc2VFYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBpdGVyYXRlZSh2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VNYXA7XG4iLCJpbXBvcnQgYXJyYXlNYXAgZnJvbSAnLi9fYXJyYXlNYXAuanMnO1xuaW1wb3J0IGJhc2VJdGVyYXRlZSBmcm9tICcuL19iYXNlSXRlcmF0ZWUuanMnO1xuaW1wb3J0IGJhc2VNYXAgZnJvbSAnLi9fYmFzZU1hcC5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdmFsdWVzIGJ5IHJ1bm5pbmcgZWFjaCBlbGVtZW50IGluIGBjb2xsZWN0aW9uYCB0aHJ1XG4gKiBgaXRlcmF0ZWVgLiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIHRocmVlIGFyZ3VtZW50czpcbiAqICh2YWx1ZSwgaW5kZXh8a2V5LCBjb2xsZWN0aW9uKS5cbiAqXG4gKiBNYW55IGxvZGFzaCBtZXRob2RzIGFyZSBndWFyZGVkIHRvIHdvcmsgYXMgaXRlcmF0ZWVzIGZvciBtZXRob2RzIGxpa2VcbiAqIGBfLmV2ZXJ5YCwgYF8uZmlsdGVyYCwgYF8ubWFwYCwgYF8ubWFwVmFsdWVzYCwgYF8ucmVqZWN0YCwgYW5kIGBfLnNvbWVgLlxuICpcbiAqIFRoZSBndWFyZGVkIG1ldGhvZHMgYXJlOlxuICogYGFyeWAsIGBjaHVua2AsIGBjdXJyeWAsIGBjdXJyeVJpZ2h0YCwgYGRyb3BgLCBgZHJvcFJpZ2h0YCwgYGV2ZXJ5YCxcbiAqIGBmaWxsYCwgYGludmVydGAsIGBwYXJzZUludGAsIGByYW5kb21gLCBgcmFuZ2VgLCBgcmFuZ2VSaWdodGAsIGByZXBlYXRgLFxuICogYHNhbXBsZVNpemVgLCBgc2xpY2VgLCBgc29tZWAsIGBzb3J0QnlgLCBgc3BsaXRgLCBgdGFrZWAsIGB0YWtlUmlnaHRgLFxuICogYHRlbXBsYXRlYCwgYHRyaW1gLCBgdHJpbUVuZGAsIGB0cmltU3RhcnRgLCBhbmQgYHdvcmRzYFxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gc3F1YXJlKG4pIHtcbiAqICAgcmV0dXJuIG4gKiBuO1xuICogfVxuICpcbiAqIF8ubWFwKFs0LCA4XSwgc3F1YXJlKTtcbiAqIC8vID0+IFsxNiwgNjRdXG4gKlxuICogXy5tYXAoeyAnYSc6IDQsICdiJzogOCB9LCBzcXVhcmUpO1xuICogLy8gPT4gWzE2LCA2NF0gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiB2YXIgdXNlcnMgPSBbXG4gKiAgIHsgJ3VzZXInOiAnYmFybmV5JyB9LFxuICogICB7ICd1c2VyJzogJ2ZyZWQnIH1cbiAqIF07XG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLm1hcCh1c2VycywgJ3VzZXInKTtcbiAqIC8vID0+IFsnYmFybmV5JywgJ2ZyZWQnXVxuICovXG5mdW5jdGlvbiBtYXAoY29sbGVjdGlvbiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlNYXAgOiBiYXNlTWFwO1xuICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDMpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwO1xuIiwiaW1wb3J0IGJhc2VGb3IgZnJvbSAnLi9fYmFzZUZvci5qcyc7XG5pbXBvcnQgY2FzdEZ1bmN0aW9uIGZyb20gJy4vX2Nhc3RGdW5jdGlvbi5qcyc7XG5pbXBvcnQga2V5c0luIGZyb20gJy4va2V5c0luLmpzJztcblxuLyoqXG4gKiBJdGVyYXRlcyBvdmVyIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnRpZXMgb2YgYW5cbiAqIG9iamVjdCBhbmQgaW52b2tlcyBgaXRlcmF0ZWVgIGZvciBlYWNoIHByb3BlcnR5LiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZFxuICogd2l0aCB0aHJlZSBhcmd1bWVudHM6ICh2YWx1ZSwga2V5LCBvYmplY3QpLiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXRcbiAqIGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4zLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAc2VlIF8uZm9ySW5SaWdodFxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmZvckluKG5ldyBGb28sIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAqICAgY29uc29sZS5sb2coa2V5KTtcbiAqIH0pO1xuICogLy8gPT4gTG9ncyAnYScsICdiJywgdGhlbiAnYycgKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZCkuXG4gKi9cbmZ1bmN0aW9uIGZvckluKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsXG4gICAgPyBvYmplY3RcbiAgICA6IGJhc2VGb3Iob2JqZWN0LCBjYXN0RnVuY3Rpb24oaXRlcmF0ZWUpLCBrZXlzSW4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JJbjtcbiIsImltcG9ydCBiYXNlRm9yT3duIGZyb20gJy4vX2Jhc2VGb3JPd24uanMnO1xuaW1wb3J0IGNhc3RGdW5jdGlvbiBmcm9tICcuL19jYXN0RnVuY3Rpb24uanMnO1xuXG4vKipcbiAqIEl0ZXJhdGVzIG92ZXIgb3duIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnRpZXMgb2YgYW4gb2JqZWN0IGFuZFxuICogaW52b2tlcyBgaXRlcmF0ZWVgIGZvciBlYWNoIHByb3BlcnR5LiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIHRocmVlXG4gKiBhcmd1bWVudHM6ICh2YWx1ZSwga2V5LCBvYmplY3QpLiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uXG4gKiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4zLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAc2VlIF8uZm9yT3duUmlnaHRcbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5mb3JPd24obmV3IEZvbywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICogICBjb25zb2xlLmxvZyhrZXkpO1xuICogfSk7XG4gKiAvLyA9PiBMb2dzICdhJyB0aGVuICdiJyAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKS5cbiAqL1xuZnVuY3Rpb24gZm9yT3duKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBiYXNlRm9yT3duKG9iamVjdCwgY2FzdEZ1bmN0aW9uKGl0ZXJhdGVlKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvck93bjtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZ3RgIHdoaWNoIGRvZXNuJ3QgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBncmVhdGVyIHRoYW4gYG90aGVyYCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHdCh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID4gb3RoZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHdDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubHRgIHdoaWNoIGRvZXNuJ3QgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBsZXNzIHRoYW4gYG90aGVyYCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VMdCh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlIDwgb3RoZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VMdDtcbiIsImltcG9ydCBiYXNlQXNzaWduVmFsdWUgZnJvbSAnLi9fYmFzZUFzc2lnblZhbHVlLmpzJztcbmltcG9ydCBiYXNlRm9yT3duIGZyb20gJy4vX2Jhc2VGb3JPd24uanMnO1xuaW1wb3J0IGJhc2VJdGVyYXRlZSBmcm9tICcuL19iYXNlSXRlcmF0ZWUuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUga2V5cyBhcyBgb2JqZWN0YCBhbmQgdmFsdWVzIGdlbmVyYXRlZFxuICogYnkgcnVubmluZyBlYWNoIG93biBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0eSBvZiBgb2JqZWN0YCB0aHJ1XG4gKiBgaXRlcmF0ZWVgLiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIHRocmVlIGFyZ3VtZW50czpcbiAqICh2YWx1ZSwga2V5LCBvYmplY3QpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgb2JqZWN0LlxuICogQHNlZSBfLm1hcEtleXNcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVzZXJzID0ge1xuICogICAnZnJlZCc6ICAgIHsgJ3VzZXInOiAnZnJlZCcsICAgICdhZ2UnOiA0MCB9LFxuICogICAncGViYmxlcyc6IHsgJ3VzZXInOiAncGViYmxlcycsICdhZ2UnOiAxIH1cbiAqIH07XG4gKlxuICogXy5tYXBWYWx1ZXModXNlcnMsIGZ1bmN0aW9uKG8pIHsgcmV0dXJuIG8uYWdlOyB9KTtcbiAqIC8vID0+IHsgJ2ZyZWQnOiA0MCwgJ3BlYmJsZXMnOiAxIH0gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8ubWFwVmFsdWVzKHVzZXJzLCAnYWdlJyk7XG4gKiAvLyA9PiB7ICdmcmVkJzogNDAsICdwZWJibGVzJzogMSB9IChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIG1hcFZhbHVlcyhvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgaXRlcmF0ZWUgPSBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDMpO1xuXG4gIGJhc2VGb3JPd24ob2JqZWN0LCBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmplY3QpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGl0ZXJhdGVlKHZhbHVlLCBrZXksIG9iamVjdCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwVmFsdWVzO1xuIiwiaW1wb3J0IGlzU3ltYm9sIGZyb20gJy4vaXNTeW1ib2wuanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIG1ldGhvZHMgbGlrZSBgXy5tYXhgIGFuZCBgXy5taW5gIHdoaWNoIGFjY2VwdHMgYVxuICogYGNvbXBhcmF0b3JgIHRvIGRldGVybWluZSB0aGUgZXh0cmVtdW0gdmFsdWUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyYXRvciBUaGUgY29tcGFyYXRvciB1c2VkIHRvIGNvbXBhcmUgdmFsdWVzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGV4dHJlbXVtIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlRXh0cmVtdW0oYXJyYXksIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBjdXJyZW50ID0gaXRlcmF0ZWUodmFsdWUpO1xuXG4gICAgaWYgKGN1cnJlbnQgIT0gbnVsbCAmJiAoY29tcHV0ZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKGN1cnJlbnQgPT09IGN1cnJlbnQgJiYgIWlzU3ltYm9sKGN1cnJlbnQpKVxuICAgICAgICAgIDogY29tcGFyYXRvcihjdXJyZW50LCBjb21wdXRlZClcbiAgICAgICAgKSkge1xuICAgICAgdmFyIGNvbXB1dGVkID0gY3VycmVudCxcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUV4dHJlbXVtO1xuIiwiaW1wb3J0IGJhc2VFeHRyZW11bSBmcm9tICcuL19iYXNlRXh0cmVtdW0uanMnO1xuaW1wb3J0IGJhc2VHdCBmcm9tICcuL19iYXNlR3QuanMnO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gJy4vaWRlbnRpdHkuanMnO1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBtYXhpbXVtIHZhbHVlIG9mIGBhcnJheWAuIElmIGBhcnJheWAgaXMgZW1wdHkgb3IgZmFsc2V5LFxuICogYHVuZGVmaW5lZGAgaXMgcmV0dXJuZWQuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE1hdGhcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWF4aW11bSB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5tYXgoWzQsIDIsIDgsIDZdKTtcbiAqIC8vID0+IDhcbiAqXG4gKiBfLm1heChbXSk7XG4gKiAvLyA9PiB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gbWF4KGFycmF5KSB7XG4gIHJldHVybiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKVxuICAgID8gYmFzZUV4dHJlbXVtKGFycmF5LCBpZGVudGl0eSwgYmFzZUd0KVxuICAgIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYXg7XG4iLCJpbXBvcnQgYmFzZUV4dHJlbXVtIGZyb20gJy4vX2Jhc2VFeHRyZW11bS5qcyc7XG5pbXBvcnQgYmFzZUx0IGZyb20gJy4vX2Jhc2VMdC5qcyc7XG5pbXBvcnQgaWRlbnRpdHkgZnJvbSAnLi9pZGVudGl0eS5qcyc7XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIG1pbmltdW0gdmFsdWUgb2YgYGFycmF5YC4gSWYgYGFycmF5YCBpcyBlbXB0eSBvciBmYWxzZXksXG4gKiBgdW5kZWZpbmVkYCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtaW5pbXVtIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLm1pbihbNCwgMiwgOCwgNl0pO1xuICogLy8gPT4gMlxuICpcbiAqIF8ubWluKFtdKTtcbiAqIC8vID0+IHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBtaW4oYXJyYXkpIHtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpXG4gICAgPyBiYXNlRXh0cmVtdW0oYXJyYXksIGlkZW50aXR5LCBiYXNlTHQpXG4gICAgOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1pbjtcbiIsImltcG9ydCBiYXNlRXh0cmVtdW0gZnJvbSAnLi9fYmFzZUV4dHJlbXVtLmpzJztcbmltcG9ydCBiYXNlSXRlcmF0ZWUgZnJvbSAnLi9fYmFzZUl0ZXJhdGVlLmpzJztcbmltcG9ydCBiYXNlTHQgZnJvbSAnLi9fYmFzZUx0LmpzJztcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLm1pbmAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgaXRlcmF0ZWVgIHdoaWNoIGlzXG4gKiBpbnZva2VkIGZvciBlYWNoIGVsZW1lbnQgaW4gYGFycmF5YCB0byBnZW5lcmF0ZSB0aGUgY3JpdGVyaW9uIGJ5IHdoaWNoXG4gKiB0aGUgdmFsdWUgaXMgcmFua2VkLiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDogKHZhbHVlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtaW5pbXVtIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICduJzogMSB9LCB7ICduJzogMiB9XTtcbiAqXG4gKiBfLm1pbkJ5KG9iamVjdHMsIGZ1bmN0aW9uKG8pIHsgcmV0dXJuIG8ubjsgfSk7XG4gKiAvLyA9PiB7ICduJzogMSB9XG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLm1pbkJ5KG9iamVjdHMsICduJyk7XG4gKiAvLyA9PiB7ICduJzogMSB9XG4gKi9cbmZ1bmN0aW9uIG1pbkJ5KGFycmF5LCBpdGVyYXRlZSkge1xuICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aClcbiAgICA/IGJhc2VFeHRyZW11bShhcnJheSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAyKSwgYmFzZUx0KVxuICAgIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtaW5CeTtcbiIsImltcG9ydCBhc3NpZ25WYWx1ZSBmcm9tICcuL19hc3NpZ25WYWx1ZS5qcyc7XG5pbXBvcnQgY2FzdFBhdGggZnJvbSAnLi9fY2FzdFBhdGguanMnO1xuaW1wb3J0IGlzSW5kZXggZnJvbSAnLi9faXNJbmRleC5qcyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5pbXBvcnQgdG9LZXkgZnJvbSAnLi9fdG9LZXkuanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgcGF0aCBjcmVhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTZXQob2JqZWN0LCBwYXRoLCB2YWx1ZSwgY3VzdG9taXplcikge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICBsYXN0SW5kZXggPSBsZW5ndGggLSAxLFxuICAgICAgbmVzdGVkID0gb2JqZWN0O1xuXG4gIHdoaWxlIChuZXN0ZWQgIT0gbnVsbCAmJiArK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHRvS2V5KHBhdGhbaW5kZXhdKSxcbiAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmIChrZXkgPT09ICdfX3Byb3RvX18nIHx8IGtleSA9PT0gJ2NvbnN0cnVjdG9yJyB8fCBrZXkgPT09ICdwcm90b3R5cGUnKSB7XG4gICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH1cblxuICAgIGlmIChpbmRleCAhPSBsYXN0SW5kZXgpIHtcbiAgICAgIHZhciBvYmpWYWx1ZSA9IG5lc3RlZFtrZXldO1xuICAgICAgbmV3VmFsdWUgPSBjdXN0b21pemVyID8gY3VzdG9taXplcihvYmpWYWx1ZSwga2V5LCBuZXN0ZWQpIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBpc09iamVjdChvYmpWYWx1ZSlcbiAgICAgICAgICA/IG9ialZhbHVlXG4gICAgICAgICAgOiAoaXNJbmRleChwYXRoW2luZGV4ICsgMV0pID8gW10gOiB7fSk7XG4gICAgICB9XG4gICAgfVxuICAgIGFzc2lnblZhbHVlKG5lc3RlZCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgbmVzdGVkID0gbmVzdGVkW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZVNldDtcbiIsImltcG9ydCBiYXNlR2V0IGZyb20gJy4vX2Jhc2VHZXQuanMnO1xuaW1wb3J0IGJhc2VTZXQgZnJvbSAnLi9fYmFzZVNldC5qcyc7XG5pbXBvcnQgY2FzdFBhdGggZnJvbSAnLi9fY2FzdFBhdGguanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mICBgXy5waWNrQnlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nW119IHBhdGhzIFRoZSBwcm9wZXJ0eSBwYXRocyB0byBwaWNrLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBwcm9wZXJ0eS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGJhc2VQaWNrQnkob2JqZWN0LCBwYXRocywgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aHMubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0ge307XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgcGF0aCA9IHBhdGhzW2luZGV4XSxcbiAgICAgICAgdmFsdWUgPSBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG5cbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBwYXRoKSkge1xuICAgICAgYmFzZVNldChyZXN1bHQsIGNhc3RQYXRoKHBhdGgsIG9iamVjdCksIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZVBpY2tCeTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc29ydEJ5YCB3aGljaCB1c2VzIGBjb21wYXJlcmAgdG8gZGVmaW5lIHRoZVxuICogc29ydCBvcmRlciBvZiBgYXJyYXlgIGFuZCByZXBsYWNlcyBjcml0ZXJpYSBvYmplY3RzIHdpdGggdGhlaXIgY29ycmVzcG9uZGluZ1xuICogdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc29ydC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmVyIFRoZSBmdW5jdGlvbiB0byBkZWZpbmUgc29ydCBvcmRlci5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBiYXNlU29ydEJ5KGFycmF5LCBjb21wYXJlcikge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGFycmF5LnNvcnQoY29tcGFyZXIpO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBhcnJheVtsZW5ndGhdID0gYXJyYXlbbGVuZ3RoXS52YWx1ZTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VTb3J0Qnk7XG4iLCJpbXBvcnQgaXNTeW1ib2wgZnJvbSAnLi9pc1N5bWJvbC5qcyc7XG5cbi8qKlxuICogQ29tcGFyZXMgdmFsdWVzIHRvIHNvcnQgdGhlbSBpbiBhc2NlbmRpbmcgb3JkZXIuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgc29ydCBvcmRlciBpbmRpY2F0b3IgZm9yIGB2YWx1ZWAuXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVBc2NlbmRpbmcodmFsdWUsIG90aGVyKSB7XG4gIGlmICh2YWx1ZSAhPT0gb3RoZXIpIHtcbiAgICB2YXIgdmFsSXNEZWZpbmVkID0gdmFsdWUgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgdmFsSXNOdWxsID0gdmFsdWUgPT09IG51bGwsXG4gICAgICAgIHZhbElzUmVmbGV4aXZlID0gdmFsdWUgPT09IHZhbHVlLFxuICAgICAgICB2YWxJc1N5bWJvbCA9IGlzU3ltYm9sKHZhbHVlKTtcblxuICAgIHZhciBvdGhJc0RlZmluZWQgPSBvdGhlciAhPT0gdW5kZWZpbmVkLFxuICAgICAgICBvdGhJc051bGwgPSBvdGhlciA9PT0gbnVsbCxcbiAgICAgICAgb3RoSXNSZWZsZXhpdmUgPSBvdGhlciA9PT0gb3RoZXIsXG4gICAgICAgIG90aElzU3ltYm9sID0gaXNTeW1ib2wob3RoZXIpO1xuXG4gICAgaWYgKCghb3RoSXNOdWxsICYmICFvdGhJc1N5bWJvbCAmJiAhdmFsSXNTeW1ib2wgJiYgdmFsdWUgPiBvdGhlcikgfHxcbiAgICAgICAgKHZhbElzU3ltYm9sICYmIG90aElzRGVmaW5lZCAmJiBvdGhJc1JlZmxleGl2ZSAmJiAhb3RoSXNOdWxsICYmICFvdGhJc1N5bWJvbCkgfHxcbiAgICAgICAgKHZhbElzTnVsbCAmJiBvdGhJc0RlZmluZWQgJiYgb3RoSXNSZWZsZXhpdmUpIHx8XG4gICAgICAgICghdmFsSXNEZWZpbmVkICYmIG90aElzUmVmbGV4aXZlKSB8fFxuICAgICAgICAhdmFsSXNSZWZsZXhpdmUpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAoKCF2YWxJc051bGwgJiYgIXZhbElzU3ltYm9sICYmICFvdGhJc1N5bWJvbCAmJiB2YWx1ZSA8IG90aGVyKSB8fFxuICAgICAgICAob3RoSXNTeW1ib2wgJiYgdmFsSXNEZWZpbmVkICYmIHZhbElzUmVmbGV4aXZlICYmICF2YWxJc051bGwgJiYgIXZhbElzU3ltYm9sKSB8fFxuICAgICAgICAob3RoSXNOdWxsICYmIHZhbElzRGVmaW5lZCAmJiB2YWxJc1JlZmxleGl2ZSkgfHxcbiAgICAgICAgKCFvdGhJc0RlZmluZWQgJiYgdmFsSXNSZWZsZXhpdmUpIHx8XG4gICAgICAgICFvdGhJc1JlZmxleGl2ZSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcGFyZUFzY2VuZGluZztcbiIsImltcG9ydCBjb21wYXJlQXNjZW5kaW5nIGZyb20gJy4vX2NvbXBhcmVBc2NlbmRpbmcuanMnO1xuXG4vKipcbiAqIFVzZWQgYnkgYF8ub3JkZXJCeWAgdG8gY29tcGFyZSBtdWx0aXBsZSBwcm9wZXJ0aWVzIG9mIGEgdmFsdWUgdG8gYW5vdGhlclxuICogYW5kIHN0YWJsZSBzb3J0IHRoZW0uXG4gKlxuICogSWYgYG9yZGVyc2AgaXMgdW5zcGVjaWZpZWQsIGFsbCB2YWx1ZXMgYXJlIHNvcnRlZCBpbiBhc2NlbmRpbmcgb3JkZXIuIE90aGVyd2lzZSxcbiAqIHNwZWNpZnkgYW4gb3JkZXIgb2YgXCJkZXNjXCIgZm9yIGRlc2NlbmRpbmcgb3IgXCJhc2NcIiBmb3IgYXNjZW5kaW5nIHNvcnQgb3JkZXJcbiAqIG9mIGNvcnJlc3BvbmRpbmcgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW5bXXxzdHJpbmdbXX0gb3JkZXJzIFRoZSBvcmRlciB0byBzb3J0IGJ5IGZvciBlYWNoIHByb3BlcnR5LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgc29ydCBvcmRlciBpbmRpY2F0b3IgZm9yIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb21wYXJlTXVsdGlwbGUob2JqZWN0LCBvdGhlciwgb3JkZXJzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgb2JqQ3JpdGVyaWEgPSBvYmplY3QuY3JpdGVyaWEsXG4gICAgICBvdGhDcml0ZXJpYSA9IG90aGVyLmNyaXRlcmlhLFxuICAgICAgbGVuZ3RoID0gb2JqQ3JpdGVyaWEubGVuZ3RoLFxuICAgICAgb3JkZXJzTGVuZ3RoID0gb3JkZXJzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciByZXN1bHQgPSBjb21wYXJlQXNjZW5kaW5nKG9iakNyaXRlcmlhW2luZGV4XSwgb3RoQ3JpdGVyaWFbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBpZiAoaW5kZXggPj0gb3JkZXJzTGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICB2YXIgb3JkZXIgPSBvcmRlcnNbaW5kZXhdO1xuICAgICAgcmV0dXJuIHJlc3VsdCAqIChvcmRlciA9PSAnZGVzYycgPyAtMSA6IDEpO1xuICAgIH1cbiAgfVxuICAvLyBGaXhlcyBhbiBgQXJyYXkjc29ydGAgYnVnIGluIHRoZSBKUyBlbmdpbmUgZW1iZWRkZWQgaW4gQWRvYmUgYXBwbGljYXRpb25zXG4gIC8vIHRoYXQgY2F1c2VzIGl0LCB1bmRlciBjZXJ0YWluIGNpcmN1bXN0YW5jZXMsIHRvIHByb3ZpZGUgdGhlIHNhbWUgdmFsdWUgZm9yXG4gIC8vIGBvYmplY3RgIGFuZCBgb3RoZXJgLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL3B1bGwvMTI0N1xuICAvLyBmb3IgbW9yZSBkZXRhaWxzLlxuICAvL1xuICAvLyBUaGlzIGFsc28gZW5zdXJlcyBhIHN0YWJsZSBzb3J0IGluIFY4IGFuZCBvdGhlciBlbmdpbmVzLlxuICAvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9OTAgZm9yIG1vcmUgZGV0YWlscy5cbiAgcmV0dXJuIG9iamVjdC5pbmRleCAtIG90aGVyLmluZGV4O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wYXJlTXVsdGlwbGU7XG4iLCJpbXBvcnQgYXJyYXlNYXAgZnJvbSAnLi9fYXJyYXlNYXAuanMnO1xuaW1wb3J0IGJhc2VHZXQgZnJvbSAnLi9fYmFzZUdldC5qcyc7XG5pbXBvcnQgYmFzZUl0ZXJhdGVlIGZyb20gJy4vX2Jhc2VJdGVyYXRlZS5qcyc7XG5pbXBvcnQgYmFzZU1hcCBmcm9tICcuL19iYXNlTWFwLmpzJztcbmltcG9ydCBiYXNlU29ydEJ5IGZyb20gJy4vX2Jhc2VTb3J0QnkuanMnO1xuaW1wb3J0IGJhc2VVbmFyeSBmcm9tICcuL19iYXNlVW5hcnkuanMnO1xuaW1wb3J0IGNvbXBhcmVNdWx0aXBsZSBmcm9tICcuL19jb21wYXJlTXVsdGlwbGUuanMnO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gJy4vaWRlbnRpdHkuanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5vcmRlckJ5YCB3aXRob3V0IHBhcmFtIGd1YXJkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbltdfE9iamVjdFtdfHN0cmluZ1tdfSBpdGVyYXRlZXMgVGhlIGl0ZXJhdGVlcyB0byBzb3J0IGJ5LlxuICogQHBhcmFtIHtzdHJpbmdbXX0gb3JkZXJzIFRoZSBzb3J0IG9yZGVycyBvZiBgaXRlcmF0ZWVzYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IHNvcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZU9yZGVyQnkoY29sbGVjdGlvbiwgaXRlcmF0ZWVzLCBvcmRlcnMpIHtcbiAgaWYgKGl0ZXJhdGVlcy5sZW5ndGgpIHtcbiAgICBpdGVyYXRlZXMgPSBhcnJheU1hcChpdGVyYXRlZXMsIGZ1bmN0aW9uKGl0ZXJhdGVlKSB7XG4gICAgICBpZiAoaXNBcnJheShpdGVyYXRlZSkpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGJhc2VHZXQodmFsdWUsIGl0ZXJhdGVlLmxlbmd0aCA9PT0gMSA/IGl0ZXJhdGVlWzBdIDogaXRlcmF0ZWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlcmF0ZWU7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgaXRlcmF0ZWVzID0gW2lkZW50aXR5XTtcbiAgfVxuXG4gIHZhciBpbmRleCA9IC0xO1xuICBpdGVyYXRlZXMgPSBhcnJheU1hcChpdGVyYXRlZXMsIGJhc2VVbmFyeShiYXNlSXRlcmF0ZWUpKTtcblxuICB2YXIgcmVzdWx0ID0gYmFzZU1hcChjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKSB7XG4gICAgdmFyIGNyaXRlcmlhID0gYXJyYXlNYXAoaXRlcmF0ZWVzLCBmdW5jdGlvbihpdGVyYXRlZSkge1xuICAgICAgcmV0dXJuIGl0ZXJhdGVlKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4geyAnY3JpdGVyaWEnOiBjcml0ZXJpYSwgJ2luZGV4JzogKytpbmRleCwgJ3ZhbHVlJzogdmFsdWUgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIGJhc2VTb3J0QnkocmVzdWx0LCBmdW5jdGlvbihvYmplY3QsIG90aGVyKSB7XG4gICAgcmV0dXJuIGNvbXBhcmVNdWx0aXBsZShvYmplY3QsIG90aGVyLCBvcmRlcnMpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZU9yZGVyQnk7XG4iLCJpbXBvcnQgYmFzZVBpY2tCeSBmcm9tICcuL19iYXNlUGlja0J5LmpzJztcbmltcG9ydCBoYXNJbiBmcm9tICcuL2hhc0luLmpzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5waWNrYCB3aXRob3V0IHN1cHBvcnQgZm9yIGluZGl2aWR1YWxcbiAqIHByb3BlcnR5IGlkZW50aWZpZXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmdbXX0gcGF0aHMgVGhlIHByb3BlcnR5IHBhdGhzIHRvIHBpY2suXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBiYXNlUGljayhvYmplY3QsIHBhdGhzKSB7XG4gIHJldHVybiBiYXNlUGlja0J5KG9iamVjdCwgcGF0aHMsIGZ1bmN0aW9uKHZhbHVlLCBwYXRoKSB7XG4gICAgcmV0dXJuIGhhc0luKG9iamVjdCwgcGF0aCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlUGljaztcbiIsImltcG9ydCBiYXNlUGljayBmcm9tICcuL19iYXNlUGljay5qcyc7XG5pbXBvcnQgZmxhdFJlc3QgZnJvbSAnLi9fZmxhdFJlc3QuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IGNvbXBvc2VkIG9mIHRoZSBwaWNrZWQgYG9iamVjdGAgcHJvcGVydGllcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHsuLi4oc3RyaW5nfHN0cmluZ1tdKX0gW3BhdGhzXSBUaGUgcHJvcGVydHkgcGF0aHMgdG8gcGljay5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAnMicsICdjJzogMyB9O1xuICpcbiAqIF8ucGljayhvYmplY3QsIFsnYScsICdjJ10pO1xuICogLy8gPT4geyAnYSc6IDEsICdjJzogMyB9XG4gKi9cbnZhciBwaWNrID0gZmxhdFJlc3QoZnVuY3Rpb24ob2JqZWN0LCBwYXRocykge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB7fSA6IGJhc2VQaWNrKG9iamVjdCwgcGF0aHMpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBpY2s7XG4iLCIvKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlQ2VpbCA9IE1hdGguY2VpbCxcbiAgICBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yYW5nZWAgYW5kIGBfLnJhbmdlUmlnaHRgIHdoaWNoIGRvZXNuJ3RcbiAqIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgc3RhcnQgb2YgdGhlIHJhbmdlLlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBUaGUgZW5kIG9mIHRoZSByYW5nZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGVwIFRoZSB2YWx1ZSB0byBpbmNyZW1lbnQgb3IgZGVjcmVtZW50IGJ5LlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHJhbmdlIG9mIG51bWJlcnMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VSYW5nZShzdGFydCwgZW5kLCBzdGVwLCBmcm9tUmlnaHQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBuYXRpdmVNYXgobmF0aXZlQ2VpbCgoZW5kIC0gc3RhcnQpIC8gKHN0ZXAgfHwgMSkpLCAwKSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgcmVzdWx0W2Zyb21SaWdodCA/IGxlbmd0aCA6ICsraW5kZXhdID0gc3RhcnQ7XG4gICAgc3RhcnQgKz0gc3RlcDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlUmFuZ2U7XG4iLCJpbXBvcnQgYmFzZVJhbmdlIGZyb20gJy4vX2Jhc2VSYW5nZS5qcyc7XG5pbXBvcnQgaXNJdGVyYXRlZUNhbGwgZnJvbSAnLi9faXNJdGVyYXRlZUNhbGwuanMnO1xuaW1wb3J0IHRvRmluaXRlIGZyb20gJy4vdG9GaW5pdGUuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBgXy5yYW5nZWAgb3IgYF8ucmFuZ2VSaWdodGAgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgcmFuZ2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJhbmdlKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhcnQsIGVuZCwgc3RlcCkge1xuICAgIGlmIChzdGVwICYmIHR5cGVvZiBzdGVwICE9ICdudW1iZXInICYmIGlzSXRlcmF0ZWVDYWxsKHN0YXJ0LCBlbmQsIHN0ZXApKSB7XG4gICAgICBlbmQgPSBzdGVwID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBFbnN1cmUgdGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gICAgc3RhcnQgPSB0b0Zpbml0ZShzdGFydCk7XG4gICAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmQgPSBzdGFydDtcbiAgICAgIHN0YXJ0ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgZW5kID0gdG9GaW5pdGUoZW5kKTtcbiAgICB9XG4gICAgc3RlcCA9IHN0ZXAgPT09IHVuZGVmaW5lZCA/IChzdGFydCA8IGVuZCA/IDEgOiAtMSkgOiB0b0Zpbml0ZShzdGVwKTtcbiAgICByZXR1cm4gYmFzZVJhbmdlKHN0YXJ0LCBlbmQsIHN0ZXAsIGZyb21SaWdodCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJhbmdlO1xuIiwiaW1wb3J0IGNyZWF0ZVJhbmdlIGZyb20gJy4vX2NyZWF0ZVJhbmdlLmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG51bWJlcnMgKHBvc2l0aXZlIGFuZC9vciBuZWdhdGl2ZSkgcHJvZ3Jlc3NpbmcgZnJvbVxuICogYHN0YXJ0YCB1cCB0bywgYnV0IG5vdCBpbmNsdWRpbmcsIGBlbmRgLiBBIHN0ZXAgb2YgYC0xYCBpcyB1c2VkIGlmIGEgbmVnYXRpdmVcbiAqIGBzdGFydGAgaXMgc3BlY2lmaWVkIHdpdGhvdXQgYW4gYGVuZGAgb3IgYHN0ZXBgLiBJZiBgZW5kYCBpcyBub3Qgc3BlY2lmaWVkLFxuICogaXQncyBzZXQgdG8gYHN0YXJ0YCB3aXRoIGBzdGFydGAgdGhlbiBzZXQgdG8gYDBgLlxuICpcbiAqICoqTm90ZToqKiBKYXZhU2NyaXB0IGZvbGxvd3MgdGhlIElFRUUtNzU0IHN0YW5kYXJkIGZvciByZXNvbHZpbmdcbiAqIGZsb2F0aW5nLXBvaW50IHZhbHVlcyB3aGljaCBjYW4gcHJvZHVjZSB1bmV4cGVjdGVkIHJlc3VsdHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIHN0YXJ0IG9mIHRoZSByYW5nZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgVGhlIGVuZCBvZiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0ZXA9MV0gVGhlIHZhbHVlIHRvIGluY3JlbWVudCBvciBkZWNyZW1lbnQgYnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHJhbmdlIG9mIG51bWJlcnMuXG4gKiBAc2VlIF8uaW5SYW5nZSwgXy5yYW5nZVJpZ2h0XG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ucmFuZ2UoNCk7XG4gKiAvLyA9PiBbMCwgMSwgMiwgM11cbiAqXG4gKiBfLnJhbmdlKC00KTtcbiAqIC8vID0+IFswLCAtMSwgLTIsIC0zXVxuICpcbiAqIF8ucmFuZ2UoMSwgNSk7XG4gKiAvLyA9PiBbMSwgMiwgMywgNF1cbiAqXG4gKiBfLnJhbmdlKDAsIDIwLCA1KTtcbiAqIC8vID0+IFswLCA1LCAxMCwgMTVdXG4gKlxuICogXy5yYW5nZSgwLCAtNCwgLTEpO1xuICogLy8gPT4gWzAsIC0xLCAtMiwgLTNdXG4gKlxuICogXy5yYW5nZSgxLCA0LCAwKTtcbiAqIC8vID0+IFsxLCAxLCAxXVxuICpcbiAqIF8ucmFuZ2UoMCk7XG4gKiAvLyA9PiBbXVxuICovXG52YXIgcmFuZ2UgPSBjcmVhdGVSYW5nZSgpO1xuXG5leHBvcnQgZGVmYXVsdCByYW5nZTtcbiIsImltcG9ydCBiYXNlRmxhdHRlbiBmcm9tICcuL19iYXNlRmxhdHRlbi5qcyc7XG5pbXBvcnQgYmFzZU9yZGVyQnkgZnJvbSAnLi9fYmFzZU9yZGVyQnkuanMnO1xuaW1wb3J0IGJhc2VSZXN0IGZyb20gJy4vX2Jhc2VSZXN0LmpzJztcbmltcG9ydCBpc0l0ZXJhdGVlQ2FsbCBmcm9tICcuL19pc0l0ZXJhdGVlQ2FsbC5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBlbGVtZW50cywgc29ydGVkIGluIGFzY2VuZGluZyBvcmRlciBieSB0aGUgcmVzdWx0cyBvZlxuICogcnVubmluZyBlYWNoIGVsZW1lbnQgaW4gYSBjb2xsZWN0aW9uIHRocnUgZWFjaCBpdGVyYXRlZS4gVGhpcyBtZXRob2RcbiAqIHBlcmZvcm1zIGEgc3RhYmxlIHNvcnQsIHRoYXQgaXMsIGl0IHByZXNlcnZlcyB0aGUgb3JpZ2luYWwgc29ydCBvcmRlciBvZlxuICogZXF1YWwgZWxlbWVudHMuIFRoZSBpdGVyYXRlZXMgYXJlIGludm9rZWQgd2l0aCBvbmUgYXJndW1lbnQ6ICh2YWx1ZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7Li4uKEZ1bmN0aW9ufEZ1bmN0aW9uW10pfSBbaXRlcmF0ZWVzPVtfLmlkZW50aXR5XV1cbiAqICBUaGUgaXRlcmF0ZWVzIHRvIHNvcnQgYnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBzb3J0ZWQgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAnYWdlJzogNDggfSxcbiAqICAgeyAndXNlcic6ICdiYXJuZXknLCAnYWdlJzogMzYgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAnYWdlJzogMzAgfSxcbiAqICAgeyAndXNlcic6ICdiYXJuZXknLCAnYWdlJzogMzQgfVxuICogXTtcbiAqXG4gKiBfLnNvcnRCeSh1c2VycywgW2Z1bmN0aW9uKG8pIHsgcmV0dXJuIG8udXNlcjsgfV0pO1xuICogLy8gPT4gb2JqZWN0cyBmb3IgW1snYmFybmV5JywgMzZdLCBbJ2Jhcm5leScsIDM0XSwgWydmcmVkJywgNDhdLCBbJ2ZyZWQnLCAzMF1dXG4gKlxuICogXy5zb3J0QnkodXNlcnMsIFsndXNlcicsICdhZ2UnXSk7XG4gKiAvLyA9PiBvYmplY3RzIGZvciBbWydiYXJuZXknLCAzNF0sIFsnYmFybmV5JywgMzZdLCBbJ2ZyZWQnLCAzMF0sIFsnZnJlZCcsIDQ4XV1cbiAqL1xudmFyIHNvcnRCeSA9IGJhc2VSZXN0KGZ1bmN0aW9uKGNvbGxlY3Rpb24sIGl0ZXJhdGVlcykge1xuICBpZiAoY29sbGVjdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBsZW5ndGggPSBpdGVyYXRlZXMubGVuZ3RoO1xuICBpZiAobGVuZ3RoID4gMSAmJiBpc0l0ZXJhdGVlQ2FsbChjb2xsZWN0aW9uLCBpdGVyYXRlZXNbMF0sIGl0ZXJhdGVlc1sxXSkpIHtcbiAgICBpdGVyYXRlZXMgPSBbXTtcbiAgfSBlbHNlIGlmIChsZW5ndGggPiAyICYmIGlzSXRlcmF0ZWVDYWxsKGl0ZXJhdGVlc1swXSwgaXRlcmF0ZWVzWzFdLCBpdGVyYXRlZXNbMl0pKSB7XG4gICAgaXRlcmF0ZWVzID0gW2l0ZXJhdGVlc1swXV07XG4gIH1cbiAgcmV0dXJuIGJhc2VPcmRlckJ5KGNvbGxlY3Rpb24sIGJhc2VGbGF0dGVuKGl0ZXJhdGVlcywgMSksIFtdKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzb3J0Qnk7XG4iLCJpbXBvcnQgdG9TdHJpbmcgZnJvbSAnLi90b1N0cmluZy5qcyc7XG5cbi8qKiBVc2VkIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRHMuICovXG52YXIgaWRDb3VudGVyID0gMDtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSB1bmlxdWUgSUQuIElmIGBwcmVmaXhgIGlzIGdpdmVuLCB0aGUgSUQgaXMgYXBwZW5kZWQgdG8gaXQuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJlZml4PScnXSBUaGUgdmFsdWUgdG8gcHJlZml4IHRoZSBJRCB3aXRoLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgdW5pcXVlIElELlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnVuaXF1ZUlkKCdjb250YWN0XycpO1xuICogLy8gPT4gJ2NvbnRhY3RfMTA0J1xuICpcbiAqIF8udW5pcXVlSWQoKTtcbiAqIC8vID0+ICcxMDUnXG4gKi9cbmZ1bmN0aW9uIHVuaXF1ZUlkKHByZWZpeCkge1xuICB2YXIgaWQgPSArK2lkQ291bnRlcjtcbiAgcmV0dXJuIHRvU3RyaW5nKHByZWZpeCkgKyBpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdW5pcXVlSWQ7XG4iLCIvKipcbiAqIFRoaXMgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy56aXBPYmplY3RgIHdoaWNoIGFzc2lnbnMgdmFsdWVzIHVzaW5nIGBhc3NpZ25GdW5jYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzLlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSBwcm9wZXJ0eSB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhc3NpZ25GdW5jIFRoZSBmdW5jdGlvbiB0byBhc3NpZ24gdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gYmFzZVppcE9iamVjdChwcm9wcywgdmFsdWVzLCBhc3NpZ25GdW5jKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoLFxuICAgICAgdmFsc0xlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICByZXN1bHQgPSB7fTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGluZGV4IDwgdmFsc0xlbmd0aCA/IHZhbHVlc1tpbmRleF0gOiB1bmRlZmluZWQ7XG4gICAgYXNzaWduRnVuYyhyZXN1bHQsIHByb3BzW2luZGV4XSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VaaXBPYmplY3Q7XG4iLCJpbXBvcnQgYXNzaWduVmFsdWUgZnJvbSAnLi9fYXNzaWduVmFsdWUuanMnO1xuaW1wb3J0IGJhc2VaaXBPYmplY3QgZnJvbSAnLi9fYmFzZVppcE9iamVjdC5qcyc7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5mcm9tUGFpcnNgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgdHdvIGFycmF5cyxcbiAqIG9uZSBvZiBwcm9wZXJ0eSBpZGVudGlmaWVycyBhbmQgb25lIG9mIGNvcnJlc3BvbmRpbmcgdmFsdWVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC40LjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gW3Byb3BzPVtdXSBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMuXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzPVtdXSBUaGUgcHJvcGVydHkgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy56aXBPYmplY3QoWydhJywgJ2InXSwgWzEsIDJdKTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYic6IDIgfVxuICovXG5mdW5jdGlvbiB6aXBPYmplY3QocHJvcHMsIHZhbHVlcykge1xuICByZXR1cm4gYmFzZVppcE9iamVjdChwcm9wcyB8fCBbXSwgdmFsdWVzIHx8IFtdLCBhc3NpZ25WYWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHppcE9iamVjdDtcbiIsIi8qXG4gKiBTaW1wbGUgZG91Ymx5IGxpbmtlZCBsaXN0IGltcGxlbWVudGF0aW9uIGRlcml2ZWQgZnJvbSBDb3JtZW4sIGV0IGFsLixcbiAqIFwiSW50cm9kdWN0aW9uIHRvIEFsZ29yaXRobXNcIi5cbiAqL1xuXG5leHBvcnQgeyBMaXN0IH07XG5cbmNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB2YXIgc2VudGluZWwgPSB7fTtcbiAgICBzZW50aW5lbC5fbmV4dCA9IHNlbnRpbmVsLl9wcmV2ID0gc2VudGluZWw7XG4gICAgdGhpcy5fc2VudGluZWwgPSBzZW50aW5lbDtcbiAgfVxuICBkZXF1ZXVlKCkge1xuICAgIHZhciBzZW50aW5lbCA9IHRoaXMuX3NlbnRpbmVsO1xuICAgIHZhciBlbnRyeSA9IHNlbnRpbmVsLl9wcmV2O1xuICAgIGlmIChlbnRyeSAhPT0gc2VudGluZWwpIHtcbiAgICAgIHVubGluayhlbnRyeSk7XG4gICAgICByZXR1cm4gZW50cnk7XG4gICAgfVxuICB9XG4gIGVucXVldWUoZW50cnkpIHtcbiAgICB2YXIgc2VudGluZWwgPSB0aGlzLl9zZW50aW5lbDtcbiAgICBpZiAoZW50cnkuX3ByZXYgJiYgZW50cnkuX25leHQpIHtcbiAgICAgIHVubGluayhlbnRyeSk7XG4gICAgfVxuICAgIGVudHJ5Ll9uZXh0ID0gc2VudGluZWwuX25leHQ7XG4gICAgc2VudGluZWwuX25leHQuX3ByZXYgPSBlbnRyeTtcbiAgICBzZW50aW5lbC5fbmV4dCA9IGVudHJ5O1xuICAgIGVudHJ5Ll9wcmV2ID0gc2VudGluZWw7XG4gIH1cbiAgdG9TdHJpbmcoKSB7XG4gICAgdmFyIHN0cnMgPSBbXTtcbiAgICB2YXIgc2VudGluZWwgPSB0aGlzLl9zZW50aW5lbDtcbiAgICB2YXIgY3VyciA9IHNlbnRpbmVsLl9wcmV2O1xuICAgIHdoaWxlIChjdXJyICE9PSBzZW50aW5lbCkge1xuICAgICAgc3Rycy5wdXNoKEpTT04uc3RyaW5naWZ5KGN1cnIsIGZpbHRlck91dExpbmtzKSk7XG4gICAgICBjdXJyID0gY3Vyci5fcHJldjtcbiAgICB9XG4gICAgcmV0dXJuICdbJyArIHN0cnMuam9pbignLCAnKSArICddJztcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmxpbmsoZW50cnkpIHtcbiAgZW50cnkuX3ByZXYuX25leHQgPSBlbnRyeS5fbmV4dDtcbiAgZW50cnkuX25leHQuX3ByZXYgPSBlbnRyeS5fcHJldjtcbiAgZGVsZXRlIGVudHJ5Ll9uZXh0O1xuICBkZWxldGUgZW50cnkuX3ByZXY7XG59XG5cbmZ1bmN0aW9uIGZpbHRlck91dExpbmtzKGssIHYpIHtcbiAgaWYgKGsgIT09ICdfbmV4dCcgJiYgayAhPT0gJ19wcmV2Jykge1xuICAgIHJldHVybiB2O1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gJy4uL2dyYXBobGliL2luZGV4LmpzJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICcuL2RhdGEvbGlzdC5qcyc7XG5cbi8qXG4gKiBBIGdyZWVkeSBoZXVyaXN0aWMgZm9yIGZpbmRpbmcgYSBmZWVkYmFjayBhcmMgc2V0IGZvciBhIGdyYXBoLiBBIGZlZWRiYWNrXG4gKiBhcmMgc2V0IGlzIGEgc2V0IG9mIGVkZ2VzIHRoYXQgY2FuIGJlIHJlbW92ZWQgdG8gbWFrZSBhIGdyYXBoIGFjeWNsaWMuXG4gKiBUaGUgYWxnb3JpdGhtIGNvbWVzIGZyb206IFAuIEVhZGVzLCBYLiBMaW4sIGFuZCBXLiBGLiBTbXl0aCwgXCJBIGZhc3QgYW5kXG4gKiBlZmZlY3RpdmUgaGV1cmlzdGljIGZvciB0aGUgZmVlZGJhY2sgYXJjIHNldCBwcm9ibGVtLlwiIFRoaXMgaW1wbGVtZW50YXRpb25cbiAqIGFkanVzdHMgdGhhdCBmcm9tIHRoZSBwYXBlciB0byBhbGxvdyBmb3Igd2VpZ2h0ZWQgZWRnZXMuXG4gKi9cbmV4cG9ydCB7IGdyZWVkeUZBUyB9O1xuXG52YXIgREVGQVVMVF9XRUlHSFRfRk4gPSBfLmNvbnN0YW50KDEpO1xuXG5mdW5jdGlvbiBncmVlZHlGQVMoZywgd2VpZ2h0Rm4pIHtcbiAgaWYgKGcubm9kZUNvdW50KCkgPD0gMSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgc3RhdGUgPSBidWlsZFN0YXRlKGcsIHdlaWdodEZuIHx8IERFRkFVTFRfV0VJR0hUX0ZOKTtcbiAgdmFyIHJlc3VsdHMgPSBkb0dyZWVkeUZBUyhzdGF0ZS5ncmFwaCwgc3RhdGUuYnVja2V0cywgc3RhdGUuemVyb0lkeCk7XG5cbiAgLy8gRXhwYW5kIG11bHRpLWVkZ2VzXG4gIHJldHVybiBfLmZsYXR0ZW4oXG4gICAgXy5tYXAocmVzdWx0cywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBnLm91dEVkZ2VzKGUudiwgZS53KTtcbiAgICB9KVxuICApO1xufVxuXG5mdW5jdGlvbiBkb0dyZWVkeUZBUyhnLCBidWNrZXRzLCB6ZXJvSWR4KSB7XG4gIHZhciByZXN1bHRzID0gW107XG4gIHZhciBzb3VyY2VzID0gYnVja2V0c1tidWNrZXRzLmxlbmd0aCAtIDFdO1xuICB2YXIgc2lua3MgPSBidWNrZXRzWzBdO1xuXG4gIHZhciBlbnRyeTtcbiAgd2hpbGUgKGcubm9kZUNvdW50KCkpIHtcbiAgICB3aGlsZSAoKGVudHJ5ID0gc2lua3MuZGVxdWV1ZSgpKSkge1xuICAgICAgcmVtb3ZlTm9kZShnLCBidWNrZXRzLCB6ZXJvSWR4LCBlbnRyeSk7XG4gICAgfVxuICAgIHdoaWxlICgoZW50cnkgPSBzb3VyY2VzLmRlcXVldWUoKSkpIHtcbiAgICAgIHJlbW92ZU5vZGUoZywgYnVja2V0cywgemVyb0lkeCwgZW50cnkpO1xuICAgIH1cbiAgICBpZiAoZy5ub2RlQ291bnQoKSkge1xuICAgICAgZm9yICh2YXIgaSA9IGJ1Y2tldHMubGVuZ3RoIC0gMjsgaSA+IDA7IC0taSkge1xuICAgICAgICBlbnRyeSA9IGJ1Y2tldHNbaV0uZGVxdWV1ZSgpO1xuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQocmVtb3ZlTm9kZShnLCBidWNrZXRzLCB6ZXJvSWR4LCBlbnRyeSwgdHJ1ZSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGUoZywgYnVja2V0cywgemVyb0lkeCwgZW50cnksIGNvbGxlY3RQcmVkZWNlc3NvcnMpIHtcbiAgdmFyIHJlc3VsdHMgPSBjb2xsZWN0UHJlZGVjZXNzb3JzID8gW10gOiB1bmRlZmluZWQ7XG5cbiAgXy5mb3JFYWNoKGcuaW5FZGdlcyhlbnRyeS52KSwgZnVuY3Rpb24gKGVkZ2UpIHtcbiAgICB2YXIgd2VpZ2h0ID0gZy5lZGdlKGVkZ2UpO1xuICAgIHZhciB1RW50cnkgPSBnLm5vZGUoZWRnZS52KTtcblxuICAgIGlmIChjb2xsZWN0UHJlZGVjZXNzb3JzKSB7XG4gICAgICByZXN1bHRzLnB1c2goeyB2OiBlZGdlLnYsIHc6IGVkZ2UudyB9KTtcbiAgICB9XG5cbiAgICB1RW50cnkub3V0IC09IHdlaWdodDtcbiAgICBhc3NpZ25CdWNrZXQoYnVja2V0cywgemVyb0lkeCwgdUVudHJ5KTtcbiAgfSk7XG5cbiAgXy5mb3JFYWNoKGcub3V0RWRnZXMoZW50cnkudiksIGZ1bmN0aW9uIChlZGdlKSB7XG4gICAgdmFyIHdlaWdodCA9IGcuZWRnZShlZGdlKTtcbiAgICB2YXIgdyA9IGVkZ2UudztcbiAgICB2YXIgd0VudHJ5ID0gZy5ub2RlKHcpO1xuICAgIHdFbnRyeVsnaW4nXSAtPSB3ZWlnaHQ7XG4gICAgYXNzaWduQnVja2V0KGJ1Y2tldHMsIHplcm9JZHgsIHdFbnRyeSk7XG4gIH0pO1xuXG4gIGcucmVtb3ZlTm9kZShlbnRyeS52KTtcblxuICByZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gYnVpbGRTdGF0ZShnLCB3ZWlnaHRGbikge1xuICB2YXIgZmFzR3JhcGggPSBuZXcgR3JhcGgoKTtcbiAgdmFyIG1heEluID0gMDtcbiAgdmFyIG1heE91dCA9IDA7XG5cbiAgXy5mb3JFYWNoKGcubm9kZXMoKSwgZnVuY3Rpb24gKHYpIHtcbiAgICBmYXNHcmFwaC5zZXROb2RlKHYsIHsgdjogdiwgaW46IDAsIG91dDogMCB9KTtcbiAgfSk7XG5cbiAgLy8gQWdncmVnYXRlIHdlaWdodHMgb24gbm9kZXMsIGJ1dCBhbHNvIHN1bSB0aGUgd2VpZ2h0cyBhY3Jvc3MgbXVsdGktZWRnZXNcbiAgLy8gaW50byBhIHNpbmdsZSBlZGdlIGZvciB0aGUgZmFzR3JhcGguXG4gIF8uZm9yRWFjaChnLmVkZ2VzKCksIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHByZXZXZWlnaHQgPSBmYXNHcmFwaC5lZGdlKGUudiwgZS53KSB8fCAwO1xuICAgIHZhciB3ZWlnaHQgPSB3ZWlnaHRGbihlKTtcbiAgICB2YXIgZWRnZVdlaWdodCA9IHByZXZXZWlnaHQgKyB3ZWlnaHQ7XG4gICAgZmFzR3JhcGguc2V0RWRnZShlLnYsIGUudywgZWRnZVdlaWdodCk7XG4gICAgbWF4T3V0ID0gTWF0aC5tYXgobWF4T3V0LCAoZmFzR3JhcGgubm9kZShlLnYpLm91dCArPSB3ZWlnaHQpKTtcbiAgICBtYXhJbiA9IE1hdGgubWF4KG1heEluLCAoZmFzR3JhcGgubm9kZShlLncpWydpbiddICs9IHdlaWdodCkpO1xuICB9KTtcblxuICB2YXIgYnVja2V0cyA9IF8ucmFuZ2UobWF4T3V0ICsgbWF4SW4gKyAzKS5tYXAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgTGlzdCgpO1xuICB9KTtcbiAgdmFyIHplcm9JZHggPSBtYXhJbiArIDE7XG5cbiAgXy5mb3JFYWNoKGZhc0dyYXBoLm5vZGVzKCksIGZ1bmN0aW9uICh2KSB7XG4gICAgYXNzaWduQnVja2V0KGJ1Y2tldHMsIHplcm9JZHgsIGZhc0dyYXBoLm5vZGUodikpO1xuICB9KTtcblxuICByZXR1cm4geyBncmFwaDogZmFzR3JhcGgsIGJ1Y2tldHM6IGJ1Y2tldHMsIHplcm9JZHg6IHplcm9JZHggfTtcbn1cblxuZnVuY3Rpb24gYXNzaWduQnVja2V0KGJ1Y2tldHMsIHplcm9JZHgsIGVudHJ5KSB7XG4gIGlmICghZW50cnkub3V0KSB7XG4gICAgYnVja2V0c1swXS5lbnF1ZXVlKGVudHJ5KTtcbiAgfSBlbHNlIGlmICghZW50cnlbJ2luJ10pIHtcbiAgICBidWNrZXRzW2J1Y2tldHMubGVuZ3RoIC0gMV0uZW5xdWV1ZShlbnRyeSk7XG4gIH0gZWxzZSB7XG4gICAgYnVja2V0c1tlbnRyeS5vdXQgLSBlbnRyeVsnaW4nXSArIHplcm9JZHhdLmVucXVldWUoZW50cnkpO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyBncmVlZHlGQVMgfSBmcm9tICcuL2dyZWVkeS1mYXMuanMnO1xuXG5leHBvcnQgeyBydW4sIHVuZG8gfTtcblxuZnVuY3Rpb24gcnVuKGcpIHtcbiAgdmFyIGZhcyA9IGcuZ3JhcGgoKS5hY3ljbGljZXIgPT09ICdncmVlZHknID8gZ3JlZWR5RkFTKGcsIHdlaWdodEZuKGcpKSA6IGRmc0ZBUyhnKTtcbiAgXy5mb3JFYWNoKGZhcywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgbGFiZWwgPSBnLmVkZ2UoZSk7XG4gICAgZy5yZW1vdmVFZGdlKGUpO1xuICAgIGxhYmVsLmZvcndhcmROYW1lID0gZS5uYW1lO1xuICAgIGxhYmVsLnJldmVyc2VkID0gdHJ1ZTtcbiAgICBnLnNldEVkZ2UoZS53LCBlLnYsIGxhYmVsLCBfLnVuaXF1ZUlkKCdyZXYnKSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHdlaWdodEZuKGcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBnLmVkZ2UoZSkud2VpZ2h0O1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gZGZzRkFTKGcpIHtcbiAgdmFyIGZhcyA9IFtdO1xuICB2YXIgc3RhY2sgPSB7fTtcbiAgdmFyIHZpc2l0ZWQgPSB7fTtcblxuICBmdW5jdGlvbiBkZnModikge1xuICAgIGlmIChfLmhhcyh2aXNpdGVkLCB2KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2aXNpdGVkW3ZdID0gdHJ1ZTtcbiAgICBzdGFja1t2XSA9IHRydWU7XG4gICAgXy5mb3JFYWNoKGcub3V0RWRnZXModiksIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoXy5oYXMoc3RhY2ssIGUudykpIHtcbiAgICAgICAgZmFzLnB1c2goZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZnMoZS53KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkZWxldGUgc3RhY2tbdl07XG4gIH1cblxuICBfLmZvckVhY2goZy5ub2RlcygpLCBkZnMpO1xuICByZXR1cm4gZmFzO1xufVxuXG5mdW5jdGlvbiB1bmRvKGcpIHtcbiAgXy5mb3JFYWNoKGcuZWRnZXMoKSwgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgbGFiZWwgPSBnLmVkZ2UoZSk7XG4gICAgaWYgKGxhYmVsLnJldmVyc2VkKSB7XG4gICAgICBnLnJlbW92ZUVkZ2UoZSk7XG5cbiAgICAgIHZhciBmb3J3YXJkTmFtZSA9IGxhYmVsLmZvcndhcmROYW1lO1xuICAgICAgZGVsZXRlIGxhYmVsLnJldmVyc2VkO1xuICAgICAgZGVsZXRlIGxhYmVsLmZvcndhcmROYW1lO1xuICAgICAgZy5zZXRFZGdlKGUudywgZS52LCBsYWJlbCwgZm9yd2FyZE5hbWUpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gJy4uL2dyYXBobGliL2luZGV4LmpzJztcblxuZXhwb3J0IHtcbiAgYWRkRHVtbXlOb2RlLFxuICBzaW1wbGlmeSxcbiAgYXNOb25Db21wb3VuZEdyYXBoLFxuICBzdWNjZXNzb3JXZWlnaHRzLFxuICBwcmVkZWNlc3NvcldlaWdodHMsXG4gIGludGVyc2VjdFJlY3QsXG4gIGJ1aWxkTGF5ZXJNYXRyaXgsXG4gIG5vcm1hbGl6ZVJhbmtzLFxuICByZW1vdmVFbXB0eVJhbmtzLFxuICBhZGRCb3JkZXJOb2RlLFxuICBtYXhSYW5rLFxuICBwYXJ0aXRpb24sXG4gIHRpbWUsXG4gIG5vdGltZSxcbn07XG5cbi8qXG4gKiBBZGRzIGEgZHVtbXkgbm9kZSB0byB0aGUgZ3JhcGggYW5kIHJldHVybiB2LlxuICovXG5mdW5jdGlvbiBhZGREdW1teU5vZGUoZywgdHlwZSwgYXR0cnMsIG5hbWUpIHtcbiAgdmFyIHY7XG4gIGRvIHtcbiAgICB2ID0gXy51bmlxdWVJZChuYW1lKTtcbiAgfSB3aGlsZSAoZy5oYXNOb2RlKHYpKTtcblxuICBhdHRycy5kdW1teSA9IHR5cGU7XG4gIGcuc2V0Tm9kZSh2LCBhdHRycyk7XG4gIHJldHVybiB2O1xufVxuXG4vKlxuICogUmV0dXJucyBhIG5ldyBncmFwaCB3aXRoIG9ubHkgc2ltcGxlIGVkZ2VzLiBIYW5kbGVzIGFnZ3JlZ2F0aW9uIG9mIGRhdGFcbiAqIGFzc29jaWF0ZWQgd2l0aCBtdWx0aS1lZGdlcy5cbiAqL1xuZnVuY3Rpb24gc2ltcGxpZnkoZykge1xuICB2YXIgc2ltcGxpZmllZCA9IG5ldyBHcmFwaCgpLnNldEdyYXBoKGcuZ3JhcGgoKSk7XG4gIF8uZm9yRWFjaChnLm5vZGVzKCksIGZ1bmN0aW9uICh2KSB7XG4gICAgc2ltcGxpZmllZC5zZXROb2RlKHYsIGcubm9kZSh2KSk7XG4gIH0pO1xuICBfLmZvckVhY2goZy5lZGdlcygpLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBzaW1wbGVMYWJlbCA9IHNpbXBsaWZpZWQuZWRnZShlLnYsIGUudykgfHwgeyB3ZWlnaHQ6IDAsIG1pbmxlbjogMSB9O1xuICAgIHZhciBsYWJlbCA9IGcuZWRnZShlKTtcbiAgICBzaW1wbGlmaWVkLnNldEVkZ2UoZS52LCBlLncsIHtcbiAgICAgIHdlaWdodDogc2ltcGxlTGFiZWwud2VpZ2h0ICsgbGFiZWwud2VpZ2h0LFxuICAgICAgbWlubGVuOiBNYXRoLm1heChzaW1wbGVMYWJlbC5taW5sZW4sIGxhYmVsLm1pbmxlbiksXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gc2ltcGxpZmllZDtcbn1cblxuZnVuY3Rpb24gYXNOb25Db21wb3VuZEdyYXBoKGcpIHtcbiAgdmFyIHNpbXBsaWZpZWQgPSBuZXcgR3JhcGgoeyBtdWx0aWdyYXBoOiBnLmlzTXVsdGlncmFwaCgpIH0pLnNldEdyYXBoKGcuZ3JhcGgoKSk7XG4gIF8uZm9yRWFjaChnLm5vZGVzKCksIGZ1bmN0aW9uICh2KSB7XG4gICAgaWYgKCFnLmNoaWxkcmVuKHYpLmxlbmd0aCkge1xuICAgICAgc2ltcGxpZmllZC5zZXROb2RlKHYsIGcubm9kZSh2KSk7XG4gICAgfVxuICB9KTtcbiAgXy5mb3JFYWNoKGcuZWRnZXMoKSwgZnVuY3Rpb24gKGUpIHtcbiAgICBzaW1wbGlmaWVkLnNldEVkZ2UoZSwgZy5lZGdlKGUpKTtcbiAgfSk7XG4gIHJldHVybiBzaW1wbGlmaWVkO1xufVxuXG5mdW5jdGlvbiBzdWNjZXNzb3JXZWlnaHRzKGcpIHtcbiAgdmFyIHdlaWdodE1hcCA9IF8ubWFwKGcubm9kZXMoKSwgZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgc3VjcyA9IHt9O1xuICAgIF8uZm9yRWFjaChnLm91dEVkZ2VzKHYpLCBmdW5jdGlvbiAoZSkge1xuICAgICAgc3Vjc1tlLnddID0gKHN1Y3NbZS53XSB8fCAwKSArIGcuZWRnZShlKS53ZWlnaHQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN1Y3M7XG4gIH0pO1xuICByZXR1cm4gXy56aXBPYmplY3QoZy5ub2RlcygpLCB3ZWlnaHRNYXApO1xufVxuXG5mdW5jdGlvbiBwcmVkZWNlc3NvcldlaWdodHMoZykge1xuICB2YXIgd2VpZ2h0TWFwID0gXy5tYXAoZy5ub2RlcygpLCBmdW5jdGlvbiAodikge1xuICAgIHZhciBwcmVkcyA9IHt9O1xuICAgIF8uZm9yRWFjaChnLmluRWRnZXModiksIGZ1bmN0aW9uIChlKSB7XG4gICAgICBwcmVkc1tlLnZdID0gKHByZWRzW2Uudl0gfHwgMCkgKyBnLmVkZ2UoZSkud2VpZ2h0O1xuICAgIH0pO1xuICAgIHJldHVybiBwcmVkcztcbiAgfSk7XG4gIHJldHVybiBfLnppcE9iamVjdChnLm5vZGVzKCksIHdlaWdodE1hcCk7XG59XG5cbi8qXG4gKiBGaW5kcyB3aGVyZSBhIGxpbmUgc3RhcnRpbmcgYXQgcG9pbnQgKHt4LCB5fSkgd291bGQgaW50ZXJzZWN0IGEgcmVjdGFuZ2xlXG4gKiAoe3gsIHksIHdpZHRoLCBoZWlnaHR9KSBpZiBpdCB3ZXJlIHBvaW50aW5nIGF0IHRoZSByZWN0YW5nbGUncyBjZW50ZXIuXG4gKi9cbmZ1bmN0aW9uIGludGVyc2VjdFJlY3QocmVjdCwgcG9pbnQpIHtcbiAgdmFyIHggPSByZWN0Lng7XG4gIHZhciB5ID0gcmVjdC55O1xuXG4gIC8vIFJlY3RhbmdsZSBpbnRlcnNlY3Rpb24gYWxnb3JpdGhtIGZyb206XG4gIC8vIGh0dHA6Ly9tYXRoLnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy8xMDgxMTMvZmluZC1lZGdlLWJldHdlZW4tdHdvLWJveGVzXG4gIHZhciBkeCA9IHBvaW50LnggLSB4O1xuICB2YXIgZHkgPSBwb2ludC55IC0geTtcbiAgdmFyIHcgPSByZWN0LndpZHRoIC8gMjtcbiAgdmFyIGggPSByZWN0LmhlaWdodCAvIDI7XG5cbiAgaWYgKCFkeCAmJiAhZHkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBwb3NzaWJsZSB0byBmaW5kIGludGVyc2VjdGlvbiBpbnNpZGUgb2YgdGhlIHJlY3RhbmdsZScpO1xuICB9XG5cbiAgdmFyIHN4LCBzeTtcbiAgaWYgKE1hdGguYWJzKGR5KSAqIHcgPiBNYXRoLmFicyhkeCkgKiBoKSB7XG4gICAgLy8gSW50ZXJzZWN0aW9uIGlzIHRvcCBvciBib3R0b20gb2YgcmVjdC5cbiAgICBpZiAoZHkgPCAwKSB7XG4gICAgICBoID0gLWg7XG4gICAgfVxuICAgIHN4ID0gKGggKiBkeCkgLyBkeTtcbiAgICBzeSA9IGg7XG4gIH0gZWxzZSB7XG4gICAgLy8gSW50ZXJzZWN0aW9uIGlzIGxlZnQgb3IgcmlnaHQgb2YgcmVjdC5cbiAgICBpZiAoZHggPCAwKSB7XG4gICAgICB3ID0gLXc7XG4gICAgfVxuICAgIHN4ID0gdztcbiAgICBzeSA9ICh3ICogZHkpIC8gZHg7XG4gIH1cblxuICByZXR1cm4geyB4OiB4ICsgc3gsIHk6IHkgKyBzeSB9O1xufVxuXG4vKlxuICogR2l2ZW4gYSBEQUcgd2l0aCBlYWNoIG5vZGUgYXNzaWduZWQgXCJyYW5rXCIgYW5kIFwib3JkZXJcIiBwcm9wZXJ0aWVzLCB0aGlzXG4gKiBmdW5jdGlvbiB3aWxsIHByb2R1Y2UgYSBtYXRyaXggd2l0aCB0aGUgaWRzIG9mIGVhY2ggbm9kZS5cbiAqL1xuZnVuY3Rpb24gYnVpbGRMYXllck1hdHJpeChnKSB7XG4gIHZhciBsYXllcmluZyA9IF8ubWFwKF8ucmFuZ2UobWF4UmFuayhnKSArIDEpLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9KTtcbiAgXy5mb3JFYWNoKGcubm9kZXMoKSwgZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgbm9kZSA9IGcubm9kZSh2KTtcbiAgICB2YXIgcmFuayA9IG5vZGUucmFuaztcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQocmFuaykpIHtcbiAgICAgIGxheWVyaW5nW3JhbmtdW25vZGUub3JkZXJdID0gdjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbGF5ZXJpbmc7XG59XG5cbi8qXG4gKiBBZGp1c3RzIHRoZSByYW5rcyBmb3IgYWxsIG5vZGVzIGluIHRoZSBncmFwaCBzdWNoIHRoYXQgYWxsIG5vZGVzIHYgaGF2ZVxuICogcmFuayh2KSA+PSAwIGFuZCBhdCBsZWFzdCBvbmUgbm9kZSB3IGhhcyByYW5rKHcpID0gMC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplUmFua3MoZykge1xuICB2YXIgbWluID0gXy5taW4oXG4gICAgXy5tYXAoZy5ub2RlcygpLCBmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIGcubm9kZSh2KS5yYW5rO1xuICAgIH0pXG4gICk7XG4gIF8uZm9yRWFjaChnLm5vZGVzKCksIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIG5vZGUgPSBnLm5vZGUodik7XG4gICAgaWYgKF8uaGFzKG5vZGUsICdyYW5rJykpIHtcbiAgICAgIG5vZGUucmFuayAtPSBtaW47XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRW1wdHlSYW5rcyhnKSB7XG4gIC8vIFJhbmtzIG1heSBub3Qgc3RhcnQgYXQgMCwgc28gd2UgbmVlZCB0byBvZmZzZXQgdGhlbVxuICB2YXIgb2Zmc2V0ID0gXy5taW4oXG4gICAgXy5tYXAoZy5ub2RlcygpLCBmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIGcubm9kZSh2KS5yYW5rO1xuICAgIH0pXG4gICk7XG5cbiAgdmFyIGxheWVycyA9IFtdO1xuICBfLmZvckVhY2goZy5ub2RlcygpLCBmdW5jdGlvbiAodikge1xuICAgIHZhciByYW5rID0gZy5ub2RlKHYpLnJhbmsgLSBvZmZzZXQ7XG4gICAgaWYgKCFsYXllcnNbcmFua10pIHtcbiAgICAgIGxheWVyc1tyYW5rXSA9IFtdO1xuICAgIH1cbiAgICBsYXllcnNbcmFua10ucHVzaCh2KTtcbiAgfSk7XG5cbiAgdmFyIGRlbHRhID0gMDtcbiAgdmFyIG5vZGVSYW5rRmFjdG9yID0gZy5ncmFwaCgpLm5vZGVSYW5rRmFjdG9yO1xuICBfLmZvckVhY2gobGF5ZXJzLCBmdW5jdGlvbiAodnMsIGkpIHtcbiAgICBpZiAoXy5pc1VuZGVmaW5lZCh2cykgJiYgaSAlIG5vZGVSYW5rRmFjdG9yICE9PSAwKSB7XG4gICAgICAtLWRlbHRhO1xuICAgIH0gZWxzZSBpZiAoZGVsdGEpIHtcbiAgICAgIF8uZm9yRWFjaCh2cywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZy5ub2RlKHYpLnJhbmsgKz0gZGVsdGE7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRCb3JkZXJOb2RlKGcsIHByZWZpeCwgcmFuaywgb3JkZXIpIHtcbiAgdmFyIG5vZGUgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICB9O1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSB7XG4gICAgbm9kZS5yYW5rID0gcmFuaztcbiAgICBub2RlLm9yZGVyID0gb3JkZXI7XG4gIH1cbiAgcmV0dXJuIGFkZER1bW15Tm9kZShnLCAnYm9yZGVyJywgbm9kZSwgcHJlZml4KTtcbn1cblxuZnVuY3Rpb24gbWF4UmFuayhnKSB7XG4gIHJldHVybiBfLm1heChcbiAgICBfLm1hcChnLm5vZGVzKCksIGZ1bmN0aW9uICh2KSB7XG4gICAgICB2YXIgcmFuayA9IGcubm9kZSh2KS5yYW5rO1xuICAgICAgaWYgKCFfLmlzVW5kZWZpbmVkKHJhbmspKSB7XG4gICAgICAgIHJldHVybiByYW5rO1xuICAgICAgfVxuICAgIH0pXG4gICk7XG59XG5cbi8qXG4gKiBQYXJ0aXRpb24gYSBjb2xsZWN0aW9uIGludG8gdHdvIGdyb3VwczogYGxoc2AgYW5kIGByaHNgLiBJZiB0aGUgc3VwcGxpZWRcbiAqIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZSBmb3IgYW4gZW50cnkgaXQgZ29lcyBpbnRvIGBsaHNgLiBPdGhlcndpc2UgaXQgZ29lc1xuICogaW50byBgcmhzLlxuICovXG5mdW5jdGlvbiBwYXJ0aXRpb24oY29sbGVjdGlvbiwgZm4pIHtcbiAgdmFyIHJlc3VsdCA9IHsgbGhzOiBbXSwgcmhzOiBbXSB9O1xuICBfLmZvckVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKGZuKHZhbHVlKSkge1xuICAgICAgcmVzdWx0Lmxocy5wdXNoKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnJocy5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKlxuICogUmV0dXJucyBhIG5ldyBmdW5jdGlvbiB0aGF0IHdyYXBzIGBmbmAgd2l0aCBhIHRpbWVyLiBUaGUgd3JhcHBlciBsb2dzIHRoZVxuICogdGltZSBpdCB0YWtlcyB0byBleGVjdXRlIHRoZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdGltZShuYW1lLCBmbikge1xuICB2YXIgc3RhcnQgPSBfLm5vdygpO1xuICB0cnkge1xuICAgIHJldHVybiBmbigpO1xuICB9IGZpbmFsbHkge1xuICAgIGNvbnNvbGUubG9nKG5hbWUgKyAnIHRpbWU6ICcgKyAoXy5ub3coKSAtIHN0YXJ0KSArICdtcycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vdGltZShuYW1lLCBmbikge1xuICByZXR1cm4gZm4oKTtcbn1cbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsLmpzJztcblxuZXhwb3J0IHsgYWRkQm9yZGVyU2VnbWVudHMgfTtcblxuZnVuY3Rpb24gYWRkQm9yZGVyU2VnbWVudHMoZykge1xuICBmdW5jdGlvbiBkZnModikge1xuICAgIHZhciBjaGlsZHJlbiA9IGcuY2hpbGRyZW4odik7XG4gICAgdmFyIG5vZGUgPSBnLm5vZGUodik7XG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgXy5mb3JFYWNoKGNoaWxkcmVuLCBkZnMpO1xuICAgIH1cblxuICAgIGlmIChfLmhhcyhub2RlLCAnbWluUmFuaycpKSB7XG4gICAgICBub2RlLmJvcmRlckxlZnQgPSBbXTtcbiAgICAgIG5vZGUuYm9yZGVyUmlnaHQgPSBbXTtcbiAgICAgIGZvciAodmFyIHJhbmsgPSBub2RlLm1pblJhbmssIG1heFJhbmsgPSBub2RlLm1heFJhbmsgKyAxOyByYW5rIDwgbWF4UmFuazsgKytyYW5rKSB7XG4gICAgICAgIGFkZEJvcmRlck5vZGUoZywgJ2JvcmRlckxlZnQnLCAnX2JsJywgdiwgbm9kZSwgcmFuayk7XG4gICAgICAgIGFkZEJvcmRlck5vZGUoZywgJ2JvcmRlclJpZ2h0JywgJ19icicsIHYsIG5vZGUsIHJhbmspO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF8uZm9yRWFjaChnLmNoaWxkcmVuKCksIGRmcyk7XG59XG5cbmZ1bmN0aW9uIGFkZEJvcmRlck5vZGUoZywgcHJvcCwgcHJlZml4LCBzZywgc2dOb2RlLCByYW5rKSB7XG4gIHZhciBsYWJlbCA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCwgcmFuazogcmFuaywgYm9yZGVyVHlwZTogcHJvcCB9O1xuICB2YXIgcHJldiA9IHNnTm9kZVtwcm9wXVtyYW5rIC0gMV07XG4gIHZhciBjdXJyID0gdXRpbC5hZGREdW1teU5vZGUoZywgJ2JvcmRlcicsIGxhYmVsLCBwcmVmaXgpO1xuICBzZ05vZGVbcHJvcF1bcmFua10gPSBjdXJyO1xuICBnLnNldFBhcmVudChjdXJyLCBzZyk7XG4gIGlmIChwcmV2KSB7XG4gICAgZy5zZXRFZGdlKHByZXYsIGN1cnIsIHsgd2VpZ2h0OiAxIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaC1lcyc7XG5cbmV4cG9ydCB7IGFkanVzdCwgdW5kbyB9O1xuXG5mdW5jdGlvbiBhZGp1c3QoZykge1xuICB2YXIgcmFua0RpciA9IGcuZ3JhcGgoKS5yYW5rZGlyLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChyYW5rRGlyID09PSAnbHInIHx8IHJhbmtEaXIgPT09ICdybCcpIHtcbiAgICBzd2FwV2lkdGhIZWlnaHQoZyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5kbyhnKSB7XG4gIHZhciByYW5rRGlyID0gZy5ncmFwaCgpLnJhbmtkaXIudG9Mb3dlckNhc2UoKTtcbiAgaWYgKHJhbmtEaXIgPT09ICdidCcgfHwgcmFua0RpciA9PT0gJ3JsJykge1xuICAgIHJldmVyc2VZKGcpO1xuICB9XG5cbiAgaWYgKHJhbmtEaXIgPT09ICdscicgfHwgcmFua0RpciA9PT0gJ3JsJykge1xuICAgIHN3YXBYWShnKTtcbiAgICBzd2FwV2lkdGhIZWlnaHQoZyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3dhcFdpZHRoSGVpZ2h0KGcpIHtcbiAgXy5mb3JFYWNoKGcubm9kZXMoKSwgZnVuY3Rpb24gKHYpIHtcbiAgICBzd2FwV2lkdGhIZWlnaHRPbmUoZy5ub2RlKHYpKTtcbiAgfSk7XG4gIF8uZm9yRWFjaChnLmVkZ2VzKCksIGZ1bmN0aW9uIChlKSB7XG4gICAgc3dhcFdpZHRoSGVpZ2h0T25lKGcuZWRnZShlKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzd2FwV2lkdGhIZWlnaHRPbmUoYXR0cnMpIHtcbiAgdmFyIHcgPSBhdHRycy53aWR0aDtcbiAgYXR0cnMud2lkdGggPSBhdHRycy5oZWlnaHQ7XG4gIGF0dHJzLmhlaWdodCA9IHc7XG59XG5cbmZ1bmN0aW9uIHJldmVyc2VZKGcpIHtcbiAgXy5mb3JFYWNoKGcubm9kZXMoKSwgZnVuY3Rpb24gKHYpIHtcbiAgICByZXZlcnNlWU9uZShnLm5vZGUodikpO1xuICB9KTtcblxuICBfLmZvckVhY2goZy5lZGdlcygpLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBlZGdlID0gZy5lZGdlKGUpO1xuICAgIF8uZm9yRWFjaChlZGdlLnBvaW50cywgcmV2ZXJzZVlPbmUpO1xuICAgIGlmIChfLmhhcyhlZGdlLCAneScpKSB7XG4gICAgICByZXZlcnNlWU9uZShlZGdlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXZlcnNlWU9uZShhdHRycykge1xuICBhdHRycy55ID0gLWF0dHJzLnk7XG59XG5cbmZ1bmN0aW9uIHN3YXBYWShnKSB7XG4gIF8uZm9yRWFjaChnLm5vZGVzKCksIGZ1bmN0aW9uICh2KSB7XG4gICAgc3dhcFhZT25lKGcubm9kZSh2KSk7XG4gIH0pO1xuXG4gIF8uZm9yRWFjaChnLmVkZ2VzKCksIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGVkZ2UgPSBnLmVkZ2UoZSk7XG4gICAgXy5mb3JFYWNoKGVkZ2UucG9pbnRzLCBzd2FwWFlPbmUpO1xuICAgIGlmIChfLmhhcyhlZGdlLCAneCcpKSB7XG4gICAgICBzd2FwWFlPbmUoZWRnZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc3dhcFhZT25lKGF0dHJzKSB7XG4gIHZhciB4ID0gYXR0cnMueDtcbiAgYXR0cnMueCA9IGF0dHJzLnk7XG4gIGF0dHJzLnkgPSB4O1xufVxuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwuanMnO1xuXG5leHBvcnQgeyBydW4sIHVuZG8gfTtcblxuLypcbiAqIEJyZWFrcyBhbnkgbG9uZyBlZGdlcyBpbiB0aGUgZ3JhcGggaW50byBzaG9ydCBzZWdtZW50cyB0aGF0IHNwYW4gMSBsYXllclxuICogZWFjaC4gVGhpcyBvcGVyYXRpb24gaXMgdW5kb2FibGUgd2l0aCB0aGUgZGVub3JtYWxpemUgZnVuY3Rpb24uXG4gKlxuICogUHJlLWNvbmRpdGlvbnM6XG4gKlxuICogICAgMS4gVGhlIGlucHV0IGdyYXBoIGlzIGEgREFHLlxuICogICAgMi4gRWFjaCBub2RlIGluIHRoZSBncmFwaCBoYXMgYSBcInJhbmtcIiBwcm9wZXJ0eS5cbiAqXG4gKiBQb3N0LWNvbmRpdGlvbjpcbiAqXG4gKiAgICAxLiBBbGwgZWRnZXMgaW4gdGhlIGdyYXBoIGhhdmUgYSBsZW5ndGggb2YgMS5cbiAqICAgIDIuIER1bW15IG5vZGVzIGFyZSBhZGRlZCB3aGVyZSBlZGdlcyBoYXZlIGJlZW4gc3BsaXQgaW50byBzZWdtZW50cy5cbiAqICAgIDMuIFRoZSBncmFwaCBpcyBhdWdtZW50ZWQgd2l0aCBhIFwiZHVtbXlDaGFpbnNcIiBhdHRyaWJ1dGUgd2hpY2ggY29udGFpbnNcbiAqICAgICAgIHRoZSBmaXJzdCBkdW1teSBpbiBlYWNoIGNoYWluIG9mIGR1bW15IG5vZGVzIHByb2R1Y2VkLlxuICovXG5mdW5jdGlvbiBydW4oZykge1xuICBnLmdyYXBoKCkuZHVtbXlDaGFpbnMgPSBbXTtcbiAgXy5mb3JFYWNoKGcuZWRnZXMoKSwgZnVuY3Rpb24gKGVkZ2UpIHtcbiAgICBub3JtYWxpemVFZGdlKGcsIGVkZ2UpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRWRnZShnLCBlKSB7XG4gIHZhciB2ID0gZS52O1xuICB2YXIgdlJhbmsgPSBnLm5vZGUodikucmFuaztcbiAgdmFyIHcgPSBlLnc7XG4gIHZhciB3UmFuayA9IGcubm9kZSh3KS5yYW5rO1xuICB2YXIgbmFtZSA9IGUubmFtZTtcbiAgdmFyIGVkZ2VMYWJlbCA9IGcuZWRnZShlKTtcbiAgdmFyIGxhYmVsUmFuayA9IGVkZ2VMYWJlbC5sYWJlbFJhbms7XG5cbiAgaWYgKHdSYW5rID09PSB2UmFuayArIDEpIHJldHVybjtcblxuICBnLnJlbW92ZUVkZ2UoZSk7XG5cbiAgdmFyIGR1bW15LCBhdHRycywgaTtcbiAgZm9yIChpID0gMCwgKyt2UmFuazsgdlJhbmsgPCB3UmFuazsgKytpLCArK3ZSYW5rKSB7XG4gICAgZWRnZUxhYmVsLnBvaW50cyA9IFtdO1xuICAgIGF0dHJzID0ge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBlZGdlTGFiZWw6IGVkZ2VMYWJlbCxcbiAgICAgIGVkZ2VPYmo6IGUsXG4gICAgICByYW5rOiB2UmFuayxcbiAgICB9O1xuICAgIGR1bW15ID0gdXRpbC5hZGREdW1teU5vZGUoZywgJ2VkZ2UnLCBhdHRycywgJ19kJyk7XG4gICAgaWYgKHZSYW5rID09PSBsYWJlbFJhbmspIHtcbiAgICAgIGF0dHJzLndpZHRoID0gZWRnZUxhYmVsLndpZHRoO1xuICAgICAgYXR0cnMuaGVpZ2h0ID0gZWRnZUxhYmVsLmhlaWdodDtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgIGF0dHJzLmR1bW15ID0gJ2VkZ2UtbGFiZWwnO1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgYXR0cnMubGFiZWxwb3MgPSBlZGdlTGFiZWwubGFiZWxwb3M7XG4gICAgfVxuICAgIGcuc2V0RWRnZSh2LCBkdW1teSwgeyB3ZWlnaHQ6IGVkZ2VMYWJlbC53ZWlnaHQgfSwgbmFtZSk7XG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIGcuZ3JhcGgoKS5kdW1teUNoYWlucy5wdXNoKGR1bW15KTtcbiAgICB9XG4gICAgdiA9IGR1bW15O1xuICB9XG5cbiAgZy5zZXRFZGdlKHYsIHcsIHsgd2VpZ2h0OiBlZGdlTGFiZWwud2VpZ2h0IH0sIG5hbWUpO1xufVxuXG5mdW5jdGlvbiB1bmRvKGcpIHtcbiAgXy5mb3JFYWNoKGcuZ3JhcGgoKS5kdW1teUNoYWlucywgZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgbm9kZSA9IGcubm9kZSh2KTtcbiAgICB2YXIgb3JpZ0xhYmVsID0gbm9kZS5lZGdlTGFiZWw7XG4gICAgdmFyIHc7XG4gICAgZy5zZXRFZGdlKG5vZGUuZWRnZU9iaiwgb3JpZ0xhYmVsKTtcbiAgICB3aGlsZSAobm9kZS5kdW1teSkge1xuICAgICAgdyA9IGcuc3VjY2Vzc29ycyh2KVswXTtcbiAgICAgIGcucmVtb3ZlTm9kZSh2KTtcbiAgICAgIG9yaWdMYWJlbC5wb2ludHMucHVzaCh7IHg6IG5vZGUueCwgeTogbm9kZS55IH0pO1xuICAgICAgaWYgKG5vZGUuZHVtbXkgPT09ICdlZGdlLWxhYmVsJykge1xuICAgICAgICBvcmlnTGFiZWwueCA9IG5vZGUueDtcbiAgICAgICAgb3JpZ0xhYmVsLnkgPSBub2RlLnk7XG4gICAgICAgIG9yaWdMYWJlbC53aWR0aCA9IG5vZGUud2lkdGg7XG4gICAgICAgIG9yaWdMYWJlbC5oZWlnaHQgPSBub2RlLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIHYgPSB3O1xuICAgICAgbm9kZSA9IGcubm9kZSh2KTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuXG5leHBvcnQgeyBsb25nZXN0UGF0aCwgc2xhY2sgfTtcblxuLypcbiAqIEluaXRpYWxpemVzIHJhbmtzIGZvciB0aGUgaW5wdXQgZ3JhcGggdXNpbmcgdGhlIGxvbmdlc3QgcGF0aCBhbGdvcml0aG0uIFRoaXNcbiAqIGFsZ29yaXRobSBzY2FsZXMgd2VsbCBhbmQgaXMgZmFzdCBpbiBwcmFjdGljZSwgaXQgeWllbGRzIHJhdGhlciBwb29yXG4gKiBzb2x1dGlvbnMuIE5vZGVzIGFyZSBwdXNoZWQgdG8gdGhlIGxvd2VzdCBsYXllciBwb3NzaWJsZSwgbGVhdmluZyB0aGUgYm90dG9tXG4gKiByYW5rcyB3aWRlIGFuZCBsZWF2aW5nIGVkZ2VzIGxvbmdlciB0aGFuIG5lY2Vzc2FyeS4gSG93ZXZlciwgZHVlIHRvIGl0c1xuICogc3BlZWQsIHRoaXMgYWxnb3JpdGhtIGlzIGdvb2QgZm9yIGdldHRpbmcgYW4gaW5pdGlhbCByYW5raW5nIHRoYXQgY2FuIGJlIGZlZFxuICogaW50byBvdGhlciBhbGdvcml0aG1zLlxuICpcbiAqIFRoaXMgYWxnb3JpdGhtIGRvZXMgbm90IG5vcm1hbGl6ZSBsYXllcnMgYmVjYXVzZSBpdCB3aWxsIGJlIHVzZWQgYnkgb3RoZXJcbiAqIGFsZ29yaXRobXMgaW4gbW9zdCBjYXNlcy4gSWYgdXNpbmcgdGhpcyBhbGdvcml0aG0gZGlyZWN0bHksIGJlIHN1cmUgdG9cbiAqIHJ1biBub3JtYWxpemUgYXQgdGhlIGVuZC5cbiAqXG4gKiBQcmUtY29uZGl0aW9uczpcbiAqXG4gKiAgICAxLiBJbnB1dCBncmFwaCBpcyBhIERBRy5cbiAqICAgIDIuIElucHV0IGdyYXBoIG5vZGUgbGFiZWxzIGNhbiBiZSBhc3NpZ25lZCBwcm9wZXJ0aWVzLlxuICpcbiAqIFBvc3QtY29uZGl0aW9uczpcbiAqXG4gKiAgICAxLiBFYWNoIG5vZGUgd2lsbCBiZSBhc3NpZ24gYW4gKHVubm9ybWFsaXplZCkgXCJyYW5rXCIgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGxvbmdlc3RQYXRoKGcpIHtcbiAgdmFyIHZpc2l0ZWQgPSB7fTtcblxuICBmdW5jdGlvbiBkZnModikge1xuICAgIHZhciBsYWJlbCA9IGcubm9kZSh2KTtcbiAgICBpZiAoXy5oYXModmlzaXRlZCwgdikpIHtcbiAgICAgIHJldHVybiBsYWJlbC5yYW5rO1xuICAgIH1cbiAgICB2aXNpdGVkW3ZdID0gdHJ1ZTtcblxuICAgIHZhciByYW5rID0gXy5taW4oXG4gICAgICBfLm1hcChnLm91dEVkZ2VzKHYpLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZGZzKGUudykgLSBnLmVkZ2UoZSkubWlubGVuO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgaWYgKFxuICAgICAgcmFuayA9PT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZIHx8IC8vIHJldHVybiB2YWx1ZSBvZiBfLm1hcChbXSkgZm9yIExvZGFzaCAzXG4gICAgICByYW5rID09PSB1bmRlZmluZWQgfHwgLy8gcmV0dXJuIHZhbHVlIG9mIF8ubWFwKFtdKSBmb3IgTG9kYXNoIDRcbiAgICAgIHJhbmsgPT09IG51bGxcbiAgICApIHtcbiAgICAgIC8vIHJldHVybiB2YWx1ZSBvZiBfLm1hcChbbnVsbF0pXG4gICAgICByYW5rID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gKGxhYmVsLnJhbmsgPSByYW5rKTtcbiAgfVxuXG4gIF8uZm9yRWFjaChnLnNvdXJjZXMoKSwgZGZzKTtcbn1cblxuLypcbiAqIFJldHVybnMgdGhlIGFtb3VudCBvZiBzbGFjayBmb3IgdGhlIGdpdmVuIGVkZ2UuIFRoZSBzbGFjayBpcyBkZWZpbmVkIGFzIHRoZVxuICogZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBsZW5ndGggb2YgdGhlIGVkZ2UgYW5kIGl0cyBtaW5pbXVtIGxlbmd0aC5cbiAqL1xuZnVuY3Rpb24gc2xhY2soZywgZSkge1xuICByZXR1cm4gZy5ub2RlKGUudykucmFuayAtIGcubm9kZShlLnYpLnJhbmsgLSBnLmVkZ2UoZSkubWlubGVuO1xufVxuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgR3JhcGggfSBmcm9tICcuLi8uLi9ncmFwaGxpYi9pbmRleC5qcyc7XG5pbXBvcnQgeyBzbGFjayB9IGZyb20gJy4vdXRpbC5qcyc7XG5cbmV4cG9ydCB7IGZlYXNpYmxlVHJlZSB9O1xuXG4vKlxuICogQ29uc3RydWN0cyBhIHNwYW5uaW5nIHRyZWUgd2l0aCB0aWdodCBlZGdlcyBhbmQgYWRqdXN0ZWQgdGhlIGlucHV0IG5vZGUnc1xuICogcmFua3MgdG8gYWNoaWV2ZSB0aGlzLiBBIHRpZ2h0IGVkZ2UgaXMgb25lIHRoYXQgaXMgaGFzIGEgbGVuZ3RoIHRoYXQgbWF0Y2hlc1xuICogaXRzIFwibWlubGVuXCIgYXR0cmlidXRlLlxuICpcbiAqIFRoZSBiYXNpYyBzdHJ1Y3R1cmUgZm9yIHRoaXMgZnVuY3Rpb24gaXMgZGVyaXZlZCBmcm9tIEdhbnNuZXIsIGV0IGFsLiwgXCJBXG4gKiBUZWNobmlxdWUgZm9yIERyYXdpbmcgRGlyZWN0ZWQgR3JhcGhzLlwiXG4gKlxuICogUHJlLWNvbmRpdGlvbnM6XG4gKlxuICogICAgMS4gR3JhcGggbXVzdCBiZSBhIERBRy5cbiAqICAgIDIuIEdyYXBoIG11c3QgYmUgY29ubmVjdGVkLlxuICogICAgMy4gR3JhcGggbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBub2RlLlxuICogICAgNS4gR3JhcGggbm9kZXMgbXVzdCBoYXZlIGJlZW4gcHJldmlvdXNseSBhc3NpZ25lZCBhIFwicmFua1wiIHByb3BlcnR5IHRoYXRcbiAqICAgICAgIHJlc3BlY3RzIHRoZSBcIm1pbmxlblwiIHByb3BlcnR5IG9mIGluY2lkZW50IGVkZ2VzLlxuICogICAgNi4gR3JhcGggZWRnZXMgbXVzdCBoYXZlIGEgXCJtaW5sZW5cIiBwcm9wZXJ0eS5cbiAqXG4gKiBQb3N0LWNvbmRpdGlvbnM6XG4gKlxuICogICAgLSBHcmFwaCBub2RlcyB3aWxsIGhhdmUgdGhlaXIgcmFuayBhZGp1c3RlZCB0byBlbnN1cmUgdGhhdCBhbGwgZWRnZXMgYXJlXG4gKiAgICAgIHRpZ2h0LlxuICpcbiAqIFJldHVybnMgYSB0cmVlICh1bmRpcmVjdGVkIGdyYXBoKSB0aGF0IGlzIGNvbnN0cnVjdGVkIHVzaW5nIG9ubHkgXCJ0aWdodFwiXG4gKiBlZGdlcy5cbiAqL1xuZnVuY3Rpb24gZmVhc2libGVUcmVlKGcpIHtcbiAgdmFyIHQgPSBuZXcgR3JhcGgoeyBkaXJlY3RlZDogZmFsc2UgfSk7XG5cbiAgLy8gQ2hvb3NlIGFyYml0cmFyeSBub2RlIGZyb20gd2hpY2ggdG8gc3RhcnQgb3VyIHRyZWVcbiAgdmFyIHN0YXJ0ID0gZy5ub2RlcygpWzBdO1xuICB2YXIgc2l6ZSA9IGcubm9kZUNvdW50KCk7XG4gIHQuc2V0Tm9kZShzdGFydCwge30pO1xuXG4gIHZhciBlZGdlLCBkZWx0YTtcbiAgd2hpbGUgKHRpZ2h0VHJlZSh0LCBnKSA8IHNpemUpIHtcbiAgICBlZGdlID0gZmluZE1pblNsYWNrRWRnZSh0LCBnKTtcbiAgICBkZWx0YSA9IHQuaGFzTm9kZShlZGdlLnYpID8gc2xhY2soZywgZWRnZSkgOiAtc2xhY2soZywgZWRnZSk7XG4gICAgc2hpZnRSYW5rcyh0LCBnLCBkZWx0YSk7XG4gIH1cblxuICByZXR1cm4gdDtcbn1cblxuLypcbiAqIEZpbmRzIGEgbWF4aW1hbCB0cmVlIG9mIHRpZ2h0IGVkZ2VzIGFuZCByZXR1cm5zIHRoZSBudW1iZXIgb2Ygbm9kZXMgaW4gdGhlXG4gKiB0cmVlLlxuICovXG5mdW5jdGlvbiB0aWdodFRyZWUodCwgZykge1xuICBmdW5jdGlvbiBkZnModikge1xuICAgIF8uZm9yRWFjaChnLm5vZGVFZGdlcyh2KSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBlZGdlViA9IGUudixcbiAgICAgICAgdyA9IHYgPT09IGVkZ2VWID8gZS53IDogZWRnZVY7XG4gICAgICBpZiAoIXQuaGFzTm9kZSh3KSAmJiAhc2xhY2soZywgZSkpIHtcbiAgICAgICAgdC5zZXROb2RlKHcsIHt9KTtcbiAgICAgICAgdC5zZXRFZGdlKHYsIHcsIHt9KTtcbiAgICAgICAgZGZzKHcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgXy5mb3JFYWNoKHQubm9kZXMoKSwgZGZzKTtcbiAgcmV0dXJuIHQubm9kZUNvdW50KCk7XG59XG5cbi8qXG4gKiBGaW5kcyB0aGUgZWRnZSB3aXRoIHRoZSBzbWFsbGVzdCBzbGFjayB0aGF0IGlzIGluY2lkZW50IG9uIHRyZWUgYW5kIHJldHVybnNcbiAqIGl0LlxuICovXG5mdW5jdGlvbiBmaW5kTWluU2xhY2tFZGdlKHQsIGcpIHtcbiAgcmV0dXJuIF8ubWluQnkoZy5lZGdlcygpLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmICh0Lmhhc05vZGUoZS52KSAhPT0gdC5oYXNOb2RlKGUudykpIHtcbiAgICAgIHJldHVybiBzbGFjayhnLCBlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaGlmdFJhbmtzKHQsIGcsIGRlbHRhKSB7XG4gIF8uZm9yRWFjaCh0Lm5vZGVzKCksIGZ1bmN0aW9uICh2KSB7XG4gICAgZy5ub2RlKHYpLnJhbmsgKz0gZGVsdGE7XG4gIH0pO1xufVxuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuXG5leHBvcnQgeyB0b3Bzb3J0LCBDeWNsZUV4Y2VwdGlvbiB9O1xuXG50b3Bzb3J0LkN5Y2xlRXhjZXB0aW9uID0gQ3ljbGVFeGNlcHRpb247XG5cbmZ1bmN0aW9uIHRvcHNvcnQoZykge1xuICB2YXIgdmlzaXRlZCA9IHt9O1xuICB2YXIgc3RhY2sgPSB7fTtcbiAgdmFyIHJlc3VsdHMgPSBbXTtcblxuICBmdW5jdGlvbiB2aXNpdChub2RlKSB7XG4gICAgaWYgKF8uaGFzKHN0YWNrLCBub2RlKSkge1xuICAgICAgdGhyb3cgbmV3IEN5Y2xlRXhjZXB0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKCFfLmhhcyh2aXNpdGVkLCBub2RlKSkge1xuICAgICAgc3RhY2tbbm9kZV0gPSB0cnVlO1xuICAgICAgdmlzaXRlZFtub2RlXSA9IHRydWU7XG4gICAgICBfLmVhY2goZy5wcmVkZWNlc3NvcnMobm9kZSksIHZpc2l0KTtcbiAgICAgIGRlbGV0ZSBzdGFja1tub2RlXTtcbiAgICAgIHJlc3VsdHMucHVzaChub2RlKTtcbiAgICB9XG4gIH1cblxuICBfLmVhY2goZy5zaW5rcygpLCB2aXNpdCk7XG5cbiAgaWYgKF8uc2l6ZSh2aXNpdGVkKSAhPT0gZy5ub2RlQ291bnQoKSkge1xuICAgIHRocm93IG5ldyBDeWNsZUV4Y2VwdGlvbigpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIEN5Y2xlRXhjZXB0aW9uKCkge31cbkN5Y2xlRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpOyAvLyBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIEVycm9yIHRvIHBhc3MgdGVzdGluZ1xuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuXG5leHBvcnQgeyBkZnMgfTtcblxuLypcbiAqIEEgaGVscGVyIHRoYXQgcHJlZm9ybXMgYSBwcmUtIG9yIHBvc3Qtb3JkZXIgdHJhdmVyc2FsIG9uIHRoZSBpbnB1dCBncmFwaFxuICogYW5kIHJldHVybnMgdGhlIG5vZGVzIGluIHRoZSBvcmRlciB0aGV5IHdlcmUgdmlzaXRlZC4gSWYgdGhlIGdyYXBoIGlzXG4gKiB1bmRpcmVjdGVkIHRoZW4gdGhpcyBhbGdvcml0aG0gd2lsbCBuYXZpZ2F0ZSB1c2luZyBuZWlnaGJvcnMuIElmIHRoZSBncmFwaFxuICogaXMgZGlyZWN0ZWQgdGhlbiB0aGlzIGFsZ29yaXRobSB3aWxsIG5hdmlnYXRlIHVzaW5nIHN1Y2Nlc3NvcnMuXG4gKlxuICogT3JkZXIgbXVzdCBiZSBvbmUgb2YgXCJwcmVcIiBvciBcInBvc3RcIi5cbiAqL1xuZnVuY3Rpb24gZGZzKGcsIHZzLCBvcmRlcikge1xuICBpZiAoIV8uaXNBcnJheSh2cykpIHtcbiAgICB2cyA9IFt2c107XG4gIH1cblxuICB2YXIgbmF2aWdhdGlvbiA9IChnLmlzRGlyZWN0ZWQoKSA/IGcuc3VjY2Vzc29ycyA6IGcubmVpZ2hib3JzKS5iaW5kKGcpO1xuXG4gIHZhciBhY2MgPSBbXTtcbiAgdmFyIHZpc2l0ZWQgPSB7fTtcbiAgXy5lYWNoKHZzLCBmdW5jdGlvbiAodikge1xuICAgIGlmICghZy5oYXNOb2RlKHYpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dyYXBoIGRvZXMgbm90IGhhdmUgbm9kZTogJyArIHYpO1xuICAgIH1cblxuICAgIGRvRGZzKGcsIHYsIG9yZGVyID09PSAncG9zdCcsIHZpc2l0ZWQsIG5hdmlnYXRpb24sIGFjYyk7XG4gIH0pO1xuICByZXR1cm4gYWNjO1xufVxuXG5mdW5jdGlvbiBkb0RmcyhnLCB2LCBwb3N0b3JkZXIsIHZpc2l0ZWQsIG5hdmlnYXRpb24sIGFjYykge1xuICBpZiAoIV8uaGFzKHZpc2l0ZWQsIHYpKSB7XG4gICAgdmlzaXRlZFt2XSA9IHRydWU7XG5cbiAgICBpZiAoIXBvc3RvcmRlcikge1xuICAgICAgYWNjLnB1c2godik7XG4gICAgfVxuICAgIF8uZWFjaChuYXZpZ2F0aW9uKHYpLCBmdW5jdGlvbiAodykge1xuICAgICAgZG9EZnMoZywgdywgcG9zdG9yZGVyLCB2aXNpdGVkLCBuYXZpZ2F0aW9uLCBhY2MpO1xuICAgIH0pO1xuICAgIGlmIChwb3N0b3JkZXIpIHtcbiAgICAgIGFjYy5wdXNoKHYpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgZGZzIH0gZnJvbSAnLi9kZnMuanMnO1xuXG5leHBvcnQgeyBwb3N0b3JkZXIgfTtcblxuZnVuY3Rpb24gcG9zdG9yZGVyKGcsIHZzKSB7XG4gIHJldHVybiBkZnMoZywgdnMsICdwb3N0Jyk7XG59XG4iLCJpbXBvcnQgeyBkZnMgfSBmcm9tICcuL2Rmcy5qcyc7XG5cbmV4cG9ydCB7IHByZW9yZGVyIH07XG5cbmZ1bmN0aW9uIHByZW9yZGVyKGcsIHZzKSB7XG4gIHJldHVybiBkZnMoZywgdnMsICdwcmUnKTtcbn1cbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCAqIGFzIGFsZyBmcm9tICcuLi8uLi9ncmFwaGxpYi9hbGcvaW5kZXguanMnO1xuaW1wb3J0IHsgc2ltcGxpZnkgfSBmcm9tICcuLi91dGlsLmpzJztcbmltcG9ydCB7IGZlYXNpYmxlVHJlZSB9IGZyb20gJy4vZmVhc2libGUtdHJlZS5qcyc7XG5pbXBvcnQgeyBsb25nZXN0UGF0aCwgc2xhY2sgfSBmcm9tICcuL3V0aWwuanMnO1xuXG5leHBvcnQgeyBuZXR3b3JrU2ltcGxleCB9O1xuXG4vLyBFeHBvc2Ugc29tZSBpbnRlcm5hbHMgZm9yIHRlc3RpbmcgcHVycG9zZXNcbm5ldHdvcmtTaW1wbGV4LmluaXRMb3dMaW1WYWx1ZXMgPSBpbml0TG93TGltVmFsdWVzO1xubmV0d29ya1NpbXBsZXguaW5pdEN1dFZhbHVlcyA9IGluaXRDdXRWYWx1ZXM7XG5uZXR3b3JrU2ltcGxleC5jYWxjQ3V0VmFsdWUgPSBjYWxjQ3V0VmFsdWU7XG5uZXR3b3JrU2ltcGxleC5sZWF2ZUVkZ2UgPSBsZWF2ZUVkZ2U7XG5uZXR3b3JrU2ltcGxleC5lbnRlckVkZ2UgPSBlbnRlckVkZ2U7XG5uZXR3b3JrU2ltcGxleC5leGNoYW5nZUVkZ2VzID0gZXhjaGFuZ2VFZGdlcztcblxuLypcbiAqIFRoZSBuZXR3b3JrIHNpbXBsZXggYWxnb3JpdGhtIGFzc2lnbnMgcmFua3MgdG8gZWFjaCBub2RlIGluIHRoZSBpbnB1dCBncmFwaFxuICogYW5kIGl0ZXJhdGl2ZWx5IGltcHJvdmVzIHRoZSByYW5raW5nIHRvIHJlZHVjZSB0aGUgbGVuZ3RoIG9mIGVkZ2VzLlxuICpcbiAqIFByZWNvbmRpdGlvbnM6XG4gKlxuICogICAgMS4gVGhlIGlucHV0IGdyYXBoIG11c3QgYmUgYSBEQUcuXG4gKiAgICAyLiBBbGwgbm9kZXMgaW4gdGhlIGdyYXBoIG11c3QgaGF2ZSBhbiBvYmplY3QgdmFsdWUuXG4gKiAgICAzLiBBbGwgZWRnZXMgaW4gdGhlIGdyYXBoIG11c3QgaGF2ZSBcIm1pbmxlblwiIGFuZCBcIndlaWdodFwiIGF0dHJpYnV0ZXMuXG4gKlxuICogUG9zdGNvbmRpdGlvbnM6XG4gKlxuICogICAgMS4gQWxsIG5vZGVzIGluIHRoZSBncmFwaCB3aWxsIGhhdmUgYW4gYXNzaWduZWQgXCJyYW5rXCIgYXR0cmlidXRlIHRoYXQgaGFzXG4gKiAgICAgICBiZWVuIG9wdGltaXplZCBieSB0aGUgbmV0d29yayBzaW1wbGV4IGFsZ29yaXRobS4gUmFua3Mgc3RhcnQgYXQgMC5cbiAqXG4gKlxuICogQSByb3VnaCBza2V0Y2ggb2YgdGhlIGFsZ29yaXRobSBpcyBhcyBmb2xsb3dzOlxuICpcbiAqICAgIDEuIEFzc2lnbiBpbml0aWFsIHJhbmtzIHRvIGVhY2ggbm9kZS4gV2UgdXNlIHRoZSBsb25nZXN0IHBhdGggYWxnb3JpdGhtLFxuICogICAgICAgd2hpY2ggYXNzaWducyByYW5rcyB0byB0aGUgbG93ZXN0IHBvc2l0aW9uIHBvc3NpYmxlLiBJbiBnZW5lcmFsIHRoaXNcbiAqICAgICAgIGxlYWRzIHRvIHZlcnkgd2lkZSBib3R0b20gcmFua3MgYW5kIHVubmVjZXNzYXJpbHkgbG9uZyBlZGdlcy5cbiAqICAgIDIuIENvbnN0cnVjdCBhIGZlYXNpYmxlIHRpZ2h0IHRyZWUuIEEgdGlnaHQgdHJlZSBpcyBvbmUgc3VjaCB0aGF0IGFsbFxuICogICAgICAgZWRnZXMgaW4gdGhlIHRyZWUgaGF2ZSBubyBzbGFjayAoZGlmZmVyZW5jZSBiZXR3ZWVuIGxlbmd0aCBvZiBlZGdlXG4gKiAgICAgICBhbmQgbWlubGVuIGZvciB0aGUgZWRnZSkuIFRoaXMgYnkgaXRzZWxmIGdyZWF0bHkgaW1wcm92ZXMgdGhlIGFzc2lnbmVkXG4gKiAgICAgICByYW5raW5ncyBieSBzaG9ydGluZyBlZGdlcy5cbiAqICAgIDMuIEl0ZXJhdGl2ZWx5IGZpbmQgZWRnZXMgdGhhdCBoYXZlIG5lZ2F0aXZlIGN1dCB2YWx1ZXMuIEdlbmVyYWxseSBhXG4gKiAgICAgICBuZWdhdGl2ZSBjdXQgdmFsdWUgaW5kaWNhdGVzIHRoYXQgdGhlIGVkZ2UgY291bGQgYmUgcmVtb3ZlZCBhbmQgYSBuZXdcbiAqICAgICAgIHRyZWUgZWRnZSBjb3VsZCBiZSBhZGRlZCB0byBwcm9kdWNlIGEgbW9yZSBjb21wYWN0IGdyYXBoLlxuICpcbiAqIE11Y2ggb2YgdGhlIGFsZ29yaXRobXMgaGVyZSBhcmUgZGVyaXZlZCBmcm9tIEdhbnNuZXIsIGV0IGFsLiwgXCJBIFRlY2huaXF1ZVxuICogZm9yIERyYXdpbmcgRGlyZWN0ZWQgR3JhcGhzLlwiIFRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGZpbGUgcm91Z2hseSBmb2xsb3dzIHRoZVxuICogc3RydWN0dXJlIG9mIHRoZSBvdmVyYWxsIGFsZ29yaXRobS5cbiAqL1xuZnVuY3Rpb24gbmV0d29ya1NpbXBsZXgoZykge1xuICBnID0gc2ltcGxpZnkoZyk7XG4gIGxvbmdlc3RQYXRoKGcpO1xuICB2YXIgdCA9IGZlYXNpYmxlVHJlZShnKTtcbiAgaW5pdExvd0xpbVZhbHVlcyh0KTtcbiAgaW5pdEN1dFZhbHVlcyh0LCBnKTtcblxuICB2YXIgZSwgZjtcbiAgd2hpbGUgKChlID0gbGVhdmVFZGdlKHQpKSkge1xuICAgIGYgPSBlbnRlckVkZ2UodCwgZywgZSk7XG4gICAgZXhjaGFuZ2VFZGdlcyh0LCBnLCBlLCBmKTtcbiAgfVxufVxuXG4vKlxuICogSW5pdGlhbGl6ZXMgY3V0IHZhbHVlcyBmb3IgYWxsIGVkZ2VzIGluIHRoZSB0cmVlLlxuICovXG5mdW5jdGlvbiBpbml0Q3V0VmFsdWVzKHQsIGcpIHtcbiAgdmFyIHZzID0gYWxnLnBvc3RvcmRlcih0LCB0Lm5vZGVzKCkpO1xuICB2cyA9IHZzLnNsaWNlKDAsIHZzLmxlbmd0aCAtIDEpO1xuICBfLmZvckVhY2godnMsIGZ1bmN0aW9uICh2KSB7XG4gICAgYXNzaWduQ3V0VmFsdWUodCwgZywgdik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25DdXRWYWx1ZSh0LCBnLCBjaGlsZCkge1xuICB2YXIgY2hpbGRMYWIgPSB0Lm5vZGUoY2hpbGQpO1xuICB2YXIgcGFyZW50ID0gY2hpbGRMYWIucGFyZW50O1xuICB0LmVkZ2UoY2hpbGQsIHBhcmVudCkuY3V0dmFsdWUgPSBjYWxjQ3V0VmFsdWUodCwgZywgY2hpbGQpO1xufVxuXG4vKlxuICogR2l2ZW4gdGhlIHRpZ2h0IHRyZWUsIGl0cyBncmFwaCwgYW5kIGEgY2hpbGQgaW4gdGhlIGdyYXBoIGNhbGN1bGF0ZSBhbmRcbiAqIHJldHVybiB0aGUgY3V0IHZhbHVlIGZvciB0aGUgZWRnZSBiZXR3ZWVuIHRoZSBjaGlsZCBhbmQgaXRzIHBhcmVudC5cbiAqL1xuZnVuY3Rpb24gY2FsY0N1dFZhbHVlKHQsIGcsIGNoaWxkKSB7XG4gIHZhciBjaGlsZExhYiA9IHQubm9kZShjaGlsZCk7XG4gIHZhciBwYXJlbnQgPSBjaGlsZExhYi5wYXJlbnQ7XG4gIC8vIFRydWUgaWYgdGhlIGNoaWxkIGlzIG9uIHRoZSB0YWlsIGVuZCBvZiB0aGUgZWRnZSBpbiB0aGUgZGlyZWN0ZWQgZ3JhcGhcbiAgdmFyIGNoaWxkSXNUYWlsID0gdHJ1ZTtcbiAgLy8gVGhlIGdyYXBoJ3MgdmlldyBvZiB0aGUgdHJlZSBlZGdlIHdlJ3JlIGluc3BlY3RpbmdcbiAgdmFyIGdyYXBoRWRnZSA9IGcuZWRnZShjaGlsZCwgcGFyZW50KTtcbiAgLy8gVGhlIGFjY3VtdWxhdGVkIGN1dCB2YWx1ZSBmb3IgdGhlIGVkZ2UgYmV0d2VlbiB0aGlzIG5vZGUgYW5kIGl0cyBwYXJlbnRcbiAgdmFyIGN1dFZhbHVlID0gMDtcblxuICBpZiAoIWdyYXBoRWRnZSkge1xuICAgIGNoaWxkSXNUYWlsID0gZmFsc2U7XG4gICAgZ3JhcGhFZGdlID0gZy5lZGdlKHBhcmVudCwgY2hpbGQpO1xuICB9XG5cbiAgY3V0VmFsdWUgPSBncmFwaEVkZ2Uud2VpZ2h0O1xuXG4gIF8uZm9yRWFjaChnLm5vZGVFZGdlcyhjaGlsZCksIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGlzT3V0RWRnZSA9IGUudiA9PT0gY2hpbGQsXG4gICAgICBvdGhlciA9IGlzT3V0RWRnZSA/IGUudyA6IGUudjtcblxuICAgIGlmIChvdGhlciAhPT0gcGFyZW50KSB7XG4gICAgICB2YXIgcG9pbnRzVG9IZWFkID0gaXNPdXRFZGdlID09PSBjaGlsZElzVGFpbCxcbiAgICAgICAgb3RoZXJXZWlnaHQgPSBnLmVkZ2UoZSkud2VpZ2h0O1xuXG4gICAgICBjdXRWYWx1ZSArPSBwb2ludHNUb0hlYWQgPyBvdGhlcldlaWdodCA6IC1vdGhlcldlaWdodDtcbiAgICAgIGlmIChpc1RyZWVFZGdlKHQsIGNoaWxkLCBvdGhlcikpIHtcbiAgICAgICAgdmFyIG90aGVyQ3V0VmFsdWUgPSB0LmVkZ2UoY2hpbGQsIG90aGVyKS5jdXR2YWx1ZTtcbiAgICAgICAgY3V0VmFsdWUgKz0gcG9pbnRzVG9IZWFkID8gLW90aGVyQ3V0VmFsdWUgOiBvdGhlckN1dFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGN1dFZhbHVlO1xufVxuXG5mdW5jdGlvbiBpbml0TG93TGltVmFsdWVzKHRyZWUsIHJvb3QpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgcm9vdCA9IHRyZWUubm9kZXMoKVswXTtcbiAgfVxuICBkZnNBc3NpZ25Mb3dMaW0odHJlZSwge30sIDEsIHJvb3QpO1xufVxuXG5mdW5jdGlvbiBkZnNBc3NpZ25Mb3dMaW0odHJlZSwgdmlzaXRlZCwgbmV4dExpbSwgdiwgcGFyZW50KSB7XG4gIHZhciBsb3cgPSBuZXh0TGltO1xuICB2YXIgbGFiZWwgPSB0cmVlLm5vZGUodik7XG5cbiAgdmlzaXRlZFt2XSA9IHRydWU7XG4gIF8uZm9yRWFjaCh0cmVlLm5laWdoYm9ycyh2KSwgZnVuY3Rpb24gKHcpIHtcbiAgICBpZiAoIV8uaGFzKHZpc2l0ZWQsIHcpKSB7XG4gICAgICBuZXh0TGltID0gZGZzQXNzaWduTG93TGltKHRyZWUsIHZpc2l0ZWQsIG5leHRMaW0sIHcsIHYpO1xuICAgIH1cbiAgfSk7XG5cbiAgbGFiZWwubG93ID0gbG93O1xuICBsYWJlbC5saW0gPSBuZXh0TGltKys7XG4gIGlmIChwYXJlbnQpIHtcbiAgICBsYWJlbC5wYXJlbnQgPSBwYXJlbnQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETyBzaG91bGQgYmUgYWJsZSB0byByZW1vdmUgdGhpcyB3aGVuIHdlIGluY3JlbWVudGFsbHkgdXBkYXRlIGxvdyBsaW1cbiAgICBkZWxldGUgbGFiZWwucGFyZW50O1xuICB9XG5cbiAgcmV0dXJuIG5leHRMaW07XG59XG5cbmZ1bmN0aW9uIGxlYXZlRWRnZSh0cmVlKSB7XG4gIHJldHVybiBfLmZpbmQodHJlZS5lZGdlcygpLCBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiB0cmVlLmVkZ2UoZSkuY3V0dmFsdWUgPCAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZW50ZXJFZGdlKHQsIGcsIGVkZ2UpIHtcbiAgdmFyIHYgPSBlZGdlLnY7XG4gIHZhciB3ID0gZWRnZS53O1xuXG4gIC8vIEZvciB0aGUgcmVzdCBvZiB0aGlzIGZ1bmN0aW9uIHdlIGFzc3VtZSB0aGF0IHYgaXMgdGhlIHRhaWwgYW5kIHcgaXMgdGhlXG4gIC8vIGhlYWQsIHNvIGlmIHdlIGRvbid0IGhhdmUgdGhpcyBlZGdlIGluIHRoZSBncmFwaCB3ZSBzaG91bGQgZmxpcCBpdCB0b1xuICAvLyBtYXRjaCB0aGUgY29ycmVjdCBvcmllbnRhdGlvbi5cbiAgaWYgKCFnLmhhc0VkZ2UodiwgdykpIHtcbiAgICB2ID0gZWRnZS53O1xuICAgIHcgPSBlZGdlLnY7XG4gIH1cblxuICB2YXIgdkxhYmVsID0gdC5ub2RlKHYpO1xuICB2YXIgd0xhYmVsID0gdC5ub2RlKHcpO1xuICB2YXIgdGFpbExhYmVsID0gdkxhYmVsO1xuICB2YXIgZmxpcCA9IGZhbHNlO1xuXG4gIC8vIElmIHRoZSByb290IGlzIGluIHRoZSB0YWlsIG9mIHRoZSBlZGdlIHRoZW4gd2UgbmVlZCB0byBmbGlwIHRoZSBsb2dpYyB0aGF0XG4gIC8vIGNoZWNrcyBmb3IgdGhlIGhlYWQgYW5kIHRhaWwgbm9kZXMgaW4gdGhlIGNhbmRpZGF0ZXMgZnVuY3Rpb24gYmVsb3cuXG4gIGlmICh2TGFiZWwubGltID4gd0xhYmVsLmxpbSkge1xuICAgIHRhaWxMYWJlbCA9IHdMYWJlbDtcbiAgICBmbGlwID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBjYW5kaWRhdGVzID0gXy5maWx0ZXIoZy5lZGdlcygpLCBmdW5jdGlvbiAoZWRnZSkge1xuICAgIHJldHVybiAoXG4gICAgICBmbGlwID09PSBpc0Rlc2NlbmRhbnQodCwgdC5ub2RlKGVkZ2UudiksIHRhaWxMYWJlbCkgJiZcbiAgICAgIGZsaXAgIT09IGlzRGVzY2VuZGFudCh0LCB0Lm5vZGUoZWRnZS53KSwgdGFpbExhYmVsKVxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiBfLm1pbkJ5KGNhbmRpZGF0ZXMsIGZ1bmN0aW9uIChlZGdlKSB7XG4gICAgcmV0dXJuIHNsYWNrKGcsIGVkZ2UpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZXhjaGFuZ2VFZGdlcyh0LCBnLCBlLCBmKSB7XG4gIHZhciB2ID0gZS52O1xuICB2YXIgdyA9IGUudztcbiAgdC5yZW1vdmVFZGdlKHYsIHcpO1xuICB0LnNldEVkZ2UoZi52LCBmLncsIHt9KTtcbiAgaW5pdExvd0xpbVZhbHVlcyh0KTtcbiAgaW5pdEN1dFZhbHVlcyh0LCBnKTtcbiAgdXBkYXRlUmFua3ModCwgZyk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVJhbmtzKHQsIGcpIHtcbiAgdmFyIHJvb3QgPSBfLmZpbmQodC5ub2RlcygpLCBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiAhZy5ub2RlKHYpLnBhcmVudDtcbiAgfSk7XG4gIHZhciB2cyA9IGFsZy5wcmVvcmRlcih0LCByb290KTtcbiAgdnMgPSB2cy5zbGljZSgxKTtcbiAgXy5mb3JFYWNoKHZzLCBmdW5jdGlvbiAodikge1xuICAgIHZhciBwYXJlbnQgPSB0Lm5vZGUodikucGFyZW50LFxuICAgICAgZWRnZSA9IGcuZWRnZSh2LCBwYXJlbnQpLFxuICAgICAgZmxpcHBlZCA9IGZhbHNlO1xuXG4gICAgaWYgKCFlZGdlKSB7XG4gICAgICBlZGdlID0gZy5lZGdlKHBhcmVudCwgdik7XG4gICAgICBmbGlwcGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnLm5vZGUodikucmFuayA9IGcubm9kZShwYXJlbnQpLnJhbmsgKyAoZmxpcHBlZCA/IGVkZ2UubWlubGVuIDogLWVkZ2UubWlubGVuKTtcbiAgfSk7XG59XG5cbi8qXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGVkZ2UgaXMgaW4gdGhlIHRyZWUuXG4gKi9cbmZ1bmN0aW9uIGlzVHJlZUVkZ2UodHJlZSwgdSwgdikge1xuICByZXR1cm4gdHJlZS5oYXNFZGdlKHUsIHYpO1xufVxuXG4vKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBzcGVjaWZpZWQgbm9kZSBpcyBkZXNjZW5kYW50IG9mIHRoZSByb290IG5vZGUgcGVyIHRoZVxuICogYXNzaWduZWQgbG93IGFuZCBsaW0gYXR0cmlidXRlcyBpbiB0aGUgdHJlZS5cbiAqL1xuZnVuY3Rpb24gaXNEZXNjZW5kYW50KHRyZWUsIHZMYWJlbCwgcm9vdExhYmVsKSB7XG4gIHJldHVybiByb290TGFiZWwubG93IDw9IHZMYWJlbC5saW0gJiYgdkxhYmVsLmxpbSA8PSByb290TGFiZWwubGltO1xufVxuIiwiaW1wb3J0IHsgZmVhc2libGVUcmVlIH0gZnJvbSAnLi9mZWFzaWJsZS10cmVlLmpzJztcbmltcG9ydCB7IG5ldHdvcmtTaW1wbGV4IH0gZnJvbSAnLi9uZXR3b3JrLXNpbXBsZXguanMnO1xuaW1wb3J0IHsgbG9uZ2VzdFBhdGggfSBmcm9tICcuL3V0aWwuanMnO1xuXG5leHBvcnQgeyByYW5rIH07XG5cbi8qXG4gKiBBc3NpZ25zIGEgcmFuayB0byBlYWNoIG5vZGUgaW4gdGhlIGlucHV0IGdyYXBoIHRoYXQgcmVzcGVjdHMgdGhlIFwibWlubGVuXCJcbiAqIGNvbnN0cmFpbnQgc3BlY2lmaWVkIG9uIGVkZ2VzIGJldHdlZW4gbm9kZXMuXG4gKlxuICogVGhpcyBiYXNpYyBzdHJ1Y3R1cmUgaXMgZGVyaXZlZCBmcm9tIEdhbnNuZXIsIGV0IGFsLiwgXCJBIFRlY2huaXF1ZSBmb3JcbiAqIERyYXdpbmcgRGlyZWN0ZWQgR3JhcGhzLlwiXG4gKlxuICogUHJlLWNvbmRpdGlvbnM6XG4gKlxuICogICAgMS4gR3JhcGggbXVzdCBiZSBhIGNvbm5lY3RlZCBEQUdcbiAqICAgIDIuIEdyYXBoIG5vZGVzIG11c3QgYmUgb2JqZWN0c1xuICogICAgMy4gR3JhcGggZWRnZXMgbXVzdCBoYXZlIFwid2VpZ2h0XCIgYW5kIFwibWlubGVuXCIgYXR0cmlidXRlc1xuICpcbiAqIFBvc3QtY29uZGl0aW9uczpcbiAqXG4gKiAgICAxLiBHcmFwaCBub2RlcyB3aWxsIGhhdmUgYSBcInJhbmtcIiBhdHRyaWJ1dGUgYmFzZWQgb24gdGhlIHJlc3VsdHMgb2YgdGhlXG4gKiAgICAgICBhbGdvcml0aG0uIFJhbmtzIGNhbiBzdGFydCBhdCBhbnkgaW5kZXggKGluY2x1ZGluZyBuZWdhdGl2ZSksIHdlJ2xsXG4gKiAgICAgICBmaXggdGhlbSB1cCBsYXRlci5cbiAqL1xuZnVuY3Rpb24gcmFuayhnKSB7XG4gIHN3aXRjaCAoZy5ncmFwaCgpLnJhbmtlcikge1xuICAgIGNhc2UgJ25ldHdvcmstc2ltcGxleCc6XG4gICAgICBuZXR3b3JrU2ltcGxleFJhbmtlcihnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RpZ2h0LXRyZWUnOlxuICAgICAgdGlnaHRUcmVlUmFua2VyKGcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbG9uZ2VzdC1wYXRoJzpcbiAgICAgIGxvbmdlc3RQYXRoUmFua2VyKGcpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIG5ldHdvcmtTaW1wbGV4UmFua2VyKGcpO1xuICB9XG59XG5cbi8vIEEgZmFzdCBhbmQgc2ltcGxlIHJhbmtlciwgYnV0IHJlc3VsdHMgYXJlIGZhciBmcm9tIG9wdGltYWwuXG52YXIgbG9uZ2VzdFBhdGhSYW5rZXIgPSBsb25nZXN0UGF0aDtcblxuZnVuY3Rpb24gdGlnaHRUcmVlUmFua2VyKGcpIHtcbiAgbG9uZ2VzdFBhdGgoZyk7XG4gIGZlYXNpYmxlVHJlZShnKTtcbn1cblxuZnVuY3Rpb24gbmV0d29ya1NpbXBsZXhSYW5rZXIoZykge1xuICBuZXR3b3JrU2ltcGxleChnKTtcbn1cbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsLmpzJztcblxuZXhwb3J0IHsgcnVuLCBjbGVhbnVwIH07XG5cbi8qXG4gKiBBIG5lc3RpbmcgZ3JhcGggY3JlYXRlcyBkdW1teSBub2RlcyBmb3IgdGhlIHRvcHMgYW5kIGJvdHRvbXMgb2Ygc3ViZ3JhcGhzLFxuICogYWRkcyBhcHByb3ByaWF0ZSBlZGdlcyB0byBlbnN1cmUgdGhhdCBhbGwgY2x1c3RlciBub2RlcyBhcmUgcGxhY2VkIGJldHdlZW5cbiAqIHRoZXNlIGJvdW5kcmllcywgYW5kIGVuc3VyZXMgdGhhdCB0aGUgZ3JhcGggaXMgY29ubmVjdGVkLlxuICpcbiAqIEluIGFkZGl0aW9uIHdlIGVuc3VyZSwgdGhyb3VnaCB0aGUgdXNlIG9mIHRoZSBtaW5sZW4gcHJvcGVydHksIHRoYXQgbm9kZXNcbiAqIGFuZCBzdWJncmFwaCBib3JkZXIgbm9kZXMgdG8gbm90IGVuZCB1cCBvbiB0aGUgc2FtZSByYW5rLlxuICpcbiAqIFByZWNvbmRpdGlvbnM6XG4gKlxuICogICAgMS4gSW5wdXQgZ3JhcGggaXMgYSBEQUdcbiAqICAgIDIuIE5vZGVzIGluIHRoZSBpbnB1dCBncmFwaCBoYXMgYSBtaW5sZW4gYXR0cmlidXRlXG4gKlxuICogUG9zdGNvbmRpdGlvbnM6XG4gKlxuICogICAgMS4gSW5wdXQgZ3JhcGggaXMgY29ubmVjdGVkLlxuICogICAgMi4gRHVtbXkgbm9kZXMgYXJlIGFkZGVkIGZvciB0aGUgdG9wcyBhbmQgYm90dG9tcyBvZiBzdWJncmFwaHMuXG4gKiAgICAzLiBUaGUgbWlubGVuIGF0dHJpYnV0ZSBmb3Igbm9kZXMgaXMgYWRqdXN0ZWQgdG8gZW5zdXJlIG5vZGVzIGRvIG5vdFxuICogICAgICAgZ2V0IHBsYWNlZCBvbiB0aGUgc2FtZSByYW5rIGFzIHN1YmdyYXBoIGJvcmRlciBub2Rlcy5cbiAqXG4gKiBUaGUgbmVzdGluZyBncmFwaCBpZGVhIGNvbWVzIGZyb20gU2FuZGVyLCBcIkxheW91dCBvZiBDb21wb3VuZCBEaXJlY3RlZFxuICogR3JhcGhzLlwiXG4gKi9cbmZ1bmN0aW9uIHJ1bihnKSB7XG4gIHZhciByb290ID0gdXRpbC5hZGREdW1teU5vZGUoZywgJ3Jvb3QnLCB7fSwgJ19yb290Jyk7XG4gIHZhciBkZXB0aHMgPSB0cmVlRGVwdGhzKGcpO1xuICB2YXIgaGVpZ2h0ID0gXy5tYXgoXy52YWx1ZXMoZGVwdGhzKSkgLSAxOyAvLyBOb3RlOiBkZXB0aHMgaXMgYW4gT2JqZWN0IG5vdCBhbiBhcnJheVxuICB2YXIgbm9kZVNlcCA9IDIgKiBoZWlnaHQgKyAxO1xuXG4gIGcuZ3JhcGgoKS5uZXN0aW5nUm9vdCA9IHJvb3Q7XG5cbiAgLy8gTXVsdGlwbHkgbWlubGVuIGJ5IG5vZGVTZXAgdG8gYWxpZ24gbm9kZXMgb24gbm9uLWJvcmRlciByYW5rcy5cbiAgXy5mb3JFYWNoKGcuZWRnZXMoKSwgZnVuY3Rpb24gKGUpIHtcbiAgICBnLmVkZ2UoZSkubWlubGVuICo9IG5vZGVTZXA7XG4gIH0pO1xuXG4gIC8vIENhbGN1bGF0ZSBhIHdlaWdodCB0aGF0IGlzIHN1ZmZpY2llbnQgdG8ga2VlcCBzdWJncmFwaHMgdmVydGljYWxseSBjb21wYWN0XG4gIHZhciB3ZWlnaHQgPSBzdW1XZWlnaHRzKGcpICsgMTtcblxuICAvLyBDcmVhdGUgYm9yZGVyIG5vZGVzIGFuZCBsaW5rIHRoZW0gdXBcbiAgXy5mb3JFYWNoKGcuY2hpbGRyZW4oKSwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgZGZzKGcsIHJvb3QsIG5vZGVTZXAsIHdlaWdodCwgaGVpZ2h0LCBkZXB0aHMsIGNoaWxkKTtcbiAgfSk7XG5cbiAgLy8gU2F2ZSB0aGUgbXVsdGlwbGllciBmb3Igbm9kZSBsYXllcnMgZm9yIGxhdGVyIHJlbW92YWwgb2YgZW1wdHkgYm9yZGVyXG4gIC8vIGxheWVycy5cbiAgZy5ncmFwaCgpLm5vZGVSYW5rRmFjdG9yID0gbm9kZVNlcDtcbn1cblxuZnVuY3Rpb24gZGZzKGcsIHJvb3QsIG5vZGVTZXAsIHdlaWdodCwgaGVpZ2h0LCBkZXB0aHMsIHYpIHtcbiAgdmFyIGNoaWxkcmVuID0gZy5jaGlsZHJlbih2KTtcbiAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICBpZiAodiAhPT0gcm9vdCkge1xuICAgICAgZy5zZXRFZGdlKHJvb3QsIHYsIHsgd2VpZ2h0OiAwLCBtaW5sZW46IG5vZGVTZXAgfSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0b3AgPSB1dGlsLmFkZEJvcmRlck5vZGUoZywgJ19idCcpO1xuICB2YXIgYm90dG9tID0gdXRpbC5hZGRCb3JkZXJOb2RlKGcsICdfYmInKTtcbiAgdmFyIGxhYmVsID0gZy5ub2RlKHYpO1xuXG4gIGcuc2V0UGFyZW50KHRvcCwgdik7XG4gIGxhYmVsLmJvcmRlclRvcCA9IHRvcDtcbiAgZy5zZXRQYXJlbnQoYm90dG9tLCB2KTtcbiAgbGFiZWwuYm9yZGVyQm90dG9tID0gYm90dG9tO1xuXG4gIF8uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgZGZzKGcsIHJvb3QsIG5vZGVTZXAsIHdlaWdodCwgaGVpZ2h0LCBkZXB0aHMsIGNoaWxkKTtcblxuICAgIHZhciBjaGlsZE5vZGUgPSBnLm5vZGUoY2hpbGQpO1xuICAgIHZhciBjaGlsZFRvcCA9IGNoaWxkTm9kZS5ib3JkZXJUb3AgPyBjaGlsZE5vZGUuYm9yZGVyVG9wIDogY2hpbGQ7XG4gICAgdmFyIGNoaWxkQm90dG9tID0gY2hpbGROb2RlLmJvcmRlckJvdHRvbSA/IGNoaWxkTm9kZS5ib3JkZXJCb3R0b20gOiBjaGlsZDtcbiAgICB2YXIgdGhpc1dlaWdodCA9IGNoaWxkTm9kZS5ib3JkZXJUb3AgPyB3ZWlnaHQgOiAyICogd2VpZ2h0O1xuICAgIHZhciBtaW5sZW4gPSBjaGlsZFRvcCAhPT0gY2hpbGRCb3R0b20gPyAxIDogaGVpZ2h0IC0gZGVwdGhzW3ZdICsgMTtcblxuICAgIGcuc2V0RWRnZSh0b3AsIGNoaWxkVG9wLCB7XG4gICAgICB3ZWlnaHQ6IHRoaXNXZWlnaHQsXG4gICAgICBtaW5sZW46IG1pbmxlbixcbiAgICAgIG5lc3RpbmdFZGdlOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgZy5zZXRFZGdlKGNoaWxkQm90dG9tLCBib3R0b20sIHtcbiAgICAgIHdlaWdodDogdGhpc1dlaWdodCxcbiAgICAgIG1pbmxlbjogbWlubGVuLFxuICAgICAgbmVzdGluZ0VkZ2U6IHRydWUsXG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmICghZy5wYXJlbnQodikpIHtcbiAgICBnLnNldEVkZ2Uocm9vdCwgdG9wLCB7IHdlaWdodDogMCwgbWlubGVuOiBoZWlnaHQgKyBkZXB0aHNbdl0gfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJlZURlcHRocyhnKSB7XG4gIHZhciBkZXB0aHMgPSB7fTtcbiAgZnVuY3Rpb24gZGZzKHYsIGRlcHRoKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gZy5jaGlsZHJlbih2KTtcbiAgICBpZiAoY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICBfLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBkZnMoY2hpbGQsIGRlcHRoICsgMSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZGVwdGhzW3ZdID0gZGVwdGg7XG4gIH1cbiAgXy5mb3JFYWNoKGcuY2hpbGRyZW4oKSwgZnVuY3Rpb24gKHYpIHtcbiAgICBkZnModiwgMSk7XG4gIH0pO1xuICByZXR1cm4gZGVwdGhzO1xufVxuXG5mdW5jdGlvbiBzdW1XZWlnaHRzKGcpIHtcbiAgcmV0dXJuIF8ucmVkdWNlKFxuICAgIGcuZWRnZXMoKSxcbiAgICBmdW5jdGlvbiAoYWNjLCBlKSB7XG4gICAgICByZXR1cm4gYWNjICsgZy5lZGdlKGUpLndlaWdodDtcbiAgICB9LFxuICAgIDBcbiAgKTtcbn1cblxuZnVuY3Rpb24gY2xlYW51cChnKSB7XG4gIHZhciBncmFwaExhYmVsID0gZy5ncmFwaCgpO1xuICBnLnJlbW92ZU5vZGUoZ3JhcGhMYWJlbC5uZXN0aW5nUm9vdCk7XG4gIGRlbGV0ZSBncmFwaExhYmVsLm5lc3RpbmdSb290O1xuICBfLmZvckVhY2goZy5lZGdlcygpLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBlZGdlID0gZy5lZGdlKGUpO1xuICAgIGlmIChlZGdlLm5lc3RpbmdFZGdlKSB7XG4gICAgICBnLnJlbW92ZUVkZ2UoZSk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcblxuZXhwb3J0IHsgYWRkU3ViZ3JhcGhDb25zdHJhaW50cyB9O1xuXG5mdW5jdGlvbiBhZGRTdWJncmFwaENvbnN0cmFpbnRzKGcsIGNnLCB2cykge1xuICB2YXIgcHJldiA9IHt9LFxuICAgIHJvb3RQcmV2O1xuXG4gIF8uZm9yRWFjaCh2cywgZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgY2hpbGQgPSBnLnBhcmVudCh2KSxcbiAgICAgIHBhcmVudCxcbiAgICAgIHByZXZDaGlsZDtcbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIHBhcmVudCA9IGcucGFyZW50KGNoaWxkKTtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgcHJldkNoaWxkID0gcHJldltwYXJlbnRdO1xuICAgICAgICBwcmV2W3BhcmVudF0gPSBjaGlsZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXZDaGlsZCA9IHJvb3RQcmV2O1xuICAgICAgICByb290UHJldiA9IGNoaWxkO1xuICAgICAgfVxuICAgICAgaWYgKHByZXZDaGlsZCAmJiBwcmV2Q2hpbGQgIT09IGNoaWxkKSB7XG4gICAgICAgIGNnLnNldEVkZ2UocHJldkNoaWxkLCBjaGlsZCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNoaWxkID0gcGFyZW50O1xuICAgIH1cbiAgfSk7XG5cbiAgLypcbiAgZnVuY3Rpb24gZGZzKHYpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSB2ID8gZy5jaGlsZHJlbih2KSA6IGcuY2hpbGRyZW4oKTtcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICB2YXIgbWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgICAgICAgIHN1YmdyYXBocyA9IFtdO1xuICAgICAgXy5lYWNoKGNoaWxkcmVuLCBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICB2YXIgY2hpbGRNaW4gPSBkZnMoY2hpbGQpO1xuICAgICAgICBpZiAoZy5jaGlsZHJlbihjaGlsZCkubGVuZ3RoKSB7XG4gICAgICAgICAgc3ViZ3JhcGhzLnB1c2goeyB2OiBjaGlsZCwgb3JkZXI6IGNoaWxkTWluIH0pO1xuICAgICAgICB9XG4gICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwgY2hpbGRNaW4pO1xuICAgICAgfSk7XG4gICAgICBfLnJlZHVjZShfLnNvcnRCeShzdWJncmFwaHMsIFwib3JkZXJcIiksIGZ1bmN0aW9uKHByZXYsIGN1cnIpIHtcbiAgICAgICAgY2cuc2V0RWRnZShwcmV2LnYsIGN1cnIudik7XG4gICAgICAgIHJldHVybiBjdXJyO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICByZXR1cm4gZy5ub2RlKHYpLm9yZGVyO1xuICB9XG4gIGRmcyh1bmRlZmluZWQpO1xuICAqL1xufVxuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgR3JhcGggfSBmcm9tICcuLi8uLi9ncmFwaGxpYi9pbmRleC5qcyc7XG5cbmV4cG9ydCB7IGJ1aWxkTGF5ZXJHcmFwaCB9O1xuXG4vKlxuICogQ29uc3RydWN0cyBhIGdyYXBoIHRoYXQgY2FuIGJlIHVzZWQgdG8gc29ydCBhIGxheWVyIG9mIG5vZGVzLiBUaGUgZ3JhcGggd2lsbFxuICogY29udGFpbiBhbGwgYmFzZSBhbmQgc3ViZ3JhcGggbm9kZXMgZnJvbSB0aGUgcmVxdWVzdCBsYXllciBpbiB0aGVpciBvcmlnaW5hbFxuICogaGllcmFyY2h5IGFuZCBhbnkgZWRnZXMgdGhhdCBhcmUgaW5jaWRlbnQgb24gdGhlc2Ugbm9kZXMgYW5kIGFyZSBvZiB0aGUgdHlwZVxuICogcmVxdWVzdGVkIGJ5IHRoZSBcInJlbGF0aW9uc2hpcFwiIHBhcmFtZXRlci5cbiAqXG4gKiBOb2RlcyBmcm9tIHRoZSByZXF1ZXN0ZWQgcmFuayB0aGF0IGRvIG5vdCBoYXZlIHBhcmVudHMgYXJlIGFzc2lnbmVkIGEgcm9vdFxuICogbm9kZSBpbiB0aGUgb3V0cHV0IGdyYXBoLCB3aGljaCBpcyBzZXQgaW4gdGhlIHJvb3QgZ3JhcGggYXR0cmlidXRlLiBUaGlzXG4gKiBtYWtlcyBpdCBlYXN5IHRvIHdhbGsgdGhlIGhpZXJhcmNoeSBvZiBtb3ZhYmxlIG5vZGVzIGR1cmluZyBvcmRlcmluZy5cbiAqXG4gKiBQcmUtY29uZGl0aW9uczpcbiAqXG4gKiAgICAxLiBJbnB1dCBncmFwaCBpcyBhIERBR1xuICogICAgMi4gQmFzZSBub2RlcyBpbiB0aGUgaW5wdXQgZ3JhcGggaGF2ZSBhIHJhbmsgYXR0cmlidXRlXG4gKiAgICAzLiBTdWJncmFwaCBub2RlcyBpbiB0aGUgaW5wdXQgZ3JhcGggaGFzIG1pblJhbmsgYW5kIG1heFJhbmsgYXR0cmlidXRlc1xuICogICAgNC4gRWRnZXMgaGF2ZSBhbiBhc3NpZ25lZCB3ZWlnaHRcbiAqXG4gKiBQb3N0LWNvbmRpdGlvbnM6XG4gKlxuICogICAgMS4gT3V0cHV0IGdyYXBoIGhhcyBhbGwgbm9kZXMgaW4gdGhlIG1vdmFibGUgcmFuayB3aXRoIHByZXNlcnZlZFxuICogICAgICAgaGllcmFyY2h5LlxuICogICAgMi4gUm9vdCBub2RlcyBpbiB0aGUgbW92YWJsZSBsYXllciBhcmUgbWFkZSBjaGlsZHJlbiBvZiB0aGUgbm9kZVxuICogICAgICAgaW5kaWNhdGVkIGJ5IHRoZSByb290IGF0dHJpYnV0ZSBvZiB0aGUgZ3JhcGguXG4gKiAgICAzLiBOb24tbW92YWJsZSBub2RlcyBpbmNpZGVudCBvbiBtb3ZhYmxlIG5vZGVzLCBzZWxlY3RlZCBieSB0aGVcbiAqICAgICAgIHJlbGF0aW9uc2hpcCBwYXJhbWV0ZXIsIGFyZSBpbmNsdWRlZCBpbiB0aGUgZ3JhcGggKHdpdGhvdXQgaGllcmFyY2h5KS5cbiAqICAgIDQuIEVkZ2VzIGluY2lkZW50IG9uIG1vdmFibGUgbm9kZXMsIHNlbGVjdGVkIGJ5IHRoZSByZWxhdGlvbnNoaXBcbiAqICAgICAgIHBhcmFtZXRlciwgYXJlIGFkZGVkIHRvIHRoZSBvdXRwdXQgZ3JhcGguXG4gKiAgICA1LiBUaGUgd2VpZ2h0cyBmb3IgY29waWVkIGVkZ2VzIGFyZSBhZ2dyZWdhdGVkIGFzIG5lZWQsIHNpbmNlIHRoZSBvdXRwdXRcbiAqICAgICAgIGdyYXBoIGlzIG5vdCBhIG11bHRpLWdyYXBoLlxuICovXG5mdW5jdGlvbiBidWlsZExheWVyR3JhcGgoZywgcmFuaywgcmVsYXRpb25zaGlwKSB7XG4gIHZhciByb290ID0gY3JlYXRlUm9vdE5vZGUoZyksXG4gICAgcmVzdWx0ID0gbmV3IEdyYXBoKHsgY29tcG91bmQ6IHRydWUgfSlcbiAgICAgIC5zZXRHcmFwaCh7IHJvb3Q6IHJvb3QgfSlcbiAgICAgIC5zZXREZWZhdWx0Tm9kZUxhYmVsKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBnLm5vZGUodik7XG4gICAgICB9KTtcblxuICBfLmZvckVhY2goZy5ub2RlcygpLCBmdW5jdGlvbiAodikge1xuICAgIHZhciBub2RlID0gZy5ub2RlKHYpLFxuICAgICAgcGFyZW50ID0gZy5wYXJlbnQodik7XG5cbiAgICBpZiAobm9kZS5yYW5rID09PSByYW5rIHx8IChub2RlLm1pblJhbmsgPD0gcmFuayAmJiByYW5rIDw9IG5vZGUubWF4UmFuaykpIHtcbiAgICAgIHJlc3VsdC5zZXROb2RlKHYpO1xuICAgICAgcmVzdWx0LnNldFBhcmVudCh2LCBwYXJlbnQgfHwgcm9vdCk7XG5cbiAgICAgIC8vIFRoaXMgYXNzdW1lcyB3ZSBoYXZlIG9ubHkgc2hvcnQgZWRnZXMhXG4gICAgICBfLmZvckVhY2goZ1tyZWxhdGlvbnNoaXBdKHYpLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdSA9IGUudiA9PT0gdiA/IGUudyA6IGUudixcbiAgICAgICAgICBlZGdlID0gcmVzdWx0LmVkZ2UodSwgdiksXG4gICAgICAgICAgd2VpZ2h0ID0gIV8uaXNVbmRlZmluZWQoZWRnZSkgPyBlZGdlLndlaWdodCA6IDA7XG4gICAgICAgIHJlc3VsdC5zZXRFZGdlKHUsIHYsIHsgd2VpZ2h0OiBnLmVkZ2UoZSkud2VpZ2h0ICsgd2VpZ2h0IH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChfLmhhcyhub2RlLCAnbWluUmFuaycpKSB7XG4gICAgICAgIHJlc3VsdC5zZXROb2RlKHYsIHtcbiAgICAgICAgICBib3JkZXJMZWZ0OiBub2RlLmJvcmRlckxlZnRbcmFua10sXG4gICAgICAgICAgYm9yZGVyUmlnaHQ6IG5vZGUuYm9yZGVyUmlnaHRbcmFua10sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm9vdE5vZGUoZykge1xuICB2YXIgdjtcbiAgd2hpbGUgKGcuaGFzTm9kZSgodiA9IF8udW5pcXVlSWQoJ19yb290JykpKSk7XG4gIHJldHVybiB2O1xufVxuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuXG5leHBvcnQgeyBjcm9zc0NvdW50IH07XG5cbi8qXG4gKiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBsYXllcmluZyAoYW4gYXJyYXkgb2YgbGF5ZXJzLCBlYWNoIHdpdGggYW4gYXJyYXkgb2ZcbiAqIG9yZGVyZXJkIG5vZGVzKSBhbmQgYSBncmFwaCBhbmQgcmV0dXJucyBhIHdlaWdodGVkIGNyb3NzaW5nIGNvdW50LlxuICpcbiAqIFByZS1jb25kaXRpb25zOlxuICpcbiAqICAgIDEuIElucHV0IGdyYXBoIG11c3QgYmUgc2ltcGxlIChub3QgYSBtdWx0aWdyYXBoKSwgZGlyZWN0ZWQsIGFuZCBpbmNsdWRlXG4gKiAgICAgICBvbmx5IHNpbXBsZSBlZGdlcy5cbiAqICAgIDIuIEVkZ2VzIGluIHRoZSBpbnB1dCBncmFwaCBtdXN0IGhhdmUgYXNzaWduZWQgd2VpZ2h0cy5cbiAqXG4gKiBQb3N0LWNvbmRpdGlvbnM6XG4gKlxuICogICAgMS4gVGhlIGdyYXBoIGFuZCBsYXllcmluZyBtYXRyaXggYXJlIGxlZnQgdW5jaGFuZ2VkLlxuICpcbiAqIFRoaXMgYWxnb3JpdGhtIGlzIGRlcml2ZWQgZnJvbSBCYXJ0aCwgZXQgYWwuLCBcIkJpbGF5ZXIgQ3Jvc3MgQ291bnRpbmcuXCJcbiAqL1xuZnVuY3Rpb24gY3Jvc3NDb3VudChnLCBsYXllcmluZykge1xuICB2YXIgY2MgPSAwO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGxheWVyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgY2MgKz0gdHdvTGF5ZXJDcm9zc0NvdW50KGcsIGxheWVyaW5nW2kgLSAxXSwgbGF5ZXJpbmdbaV0pO1xuICB9XG4gIHJldHVybiBjYztcbn1cblxuZnVuY3Rpb24gdHdvTGF5ZXJDcm9zc0NvdW50KGcsIG5vcnRoTGF5ZXIsIHNvdXRoTGF5ZXIpIHtcbiAgLy8gU29ydCBhbGwgb2YgdGhlIGVkZ2VzIGJldHdlZW4gdGhlIG5vcnRoIGFuZCBzb3V0aCBsYXllcnMgYnkgdGhlaXIgcG9zaXRpb25cbiAgLy8gaW4gdGhlIG5vcnRoIGxheWVyIGFuZCB0aGVuIHRoZSBzb3V0aC4gTWFwIHRoZXNlIGVkZ2VzIHRvIHRoZSBwb3NpdGlvbiBvZlxuICAvLyB0aGVpciBoZWFkIGluIHRoZSBzb3V0aCBsYXllci5cbiAgdmFyIHNvdXRoUG9zID0gXy56aXBPYmplY3QoXG4gICAgc291dGhMYXllcixcbiAgICBfLm1hcChzb3V0aExheWVyLCBmdW5jdGlvbiAodiwgaSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfSlcbiAgKTtcbiAgdmFyIHNvdXRoRW50cmllcyA9IF8uZmxhdHRlbihcbiAgICBfLm1hcChub3J0aExheWVyLCBmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIF8uc29ydEJ5KFxuICAgICAgICBfLm1hcChnLm91dEVkZ2VzKHYpLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiB7IHBvczogc291dGhQb3NbZS53XSwgd2VpZ2h0OiBnLmVkZ2UoZSkud2VpZ2h0IH07XG4gICAgICAgIH0pLFxuICAgICAgICAncG9zJ1xuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIC8vIEJ1aWxkIHRoZSBhY2N1bXVsYXRvciB0cmVlXG4gIHZhciBmaXJzdEluZGV4ID0gMTtcbiAgd2hpbGUgKGZpcnN0SW5kZXggPCBzb3V0aExheWVyLmxlbmd0aCkgZmlyc3RJbmRleCA8PD0gMTtcbiAgdmFyIHRyZWVTaXplID0gMiAqIGZpcnN0SW5kZXggLSAxO1xuICBmaXJzdEluZGV4IC09IDE7XG4gIHZhciB0cmVlID0gXy5tYXAobmV3IEFycmF5KHRyZWVTaXplKSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAwO1xuICB9KTtcblxuICAvLyBDYWxjdWxhdGUgdGhlIHdlaWdodGVkIGNyb3NzaW5nc1xuICB2YXIgY2MgPSAwO1xuICBfLmZvckVhY2goXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIHNvdXRoRW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgdmFyIGluZGV4ID0gZW50cnkucG9zICsgZmlyc3RJbmRleDtcbiAgICAgIHRyZWVbaW5kZXhdICs9IGVudHJ5LndlaWdodDtcbiAgICAgIHZhciB3ZWlnaHRTdW0gPSAwO1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgd2hpbGUgKGluZGV4ID4gMCkge1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIGlmIChpbmRleCAlIDIpIHtcbiAgICAgICAgICB3ZWlnaHRTdW0gKz0gdHJlZVtpbmRleCArIDFdO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgaW5kZXggPSAoaW5kZXggLSAxKSA+PiAxO1xuICAgICAgICB0cmVlW2luZGV4XSArPSBlbnRyeS53ZWlnaHQ7XG4gICAgICB9XG4gICAgICBjYyArPSBlbnRyeS53ZWlnaHQgKiB3ZWlnaHRTdW07XG4gICAgfSlcbiAgKTtcblxuICByZXR1cm4gY2M7XG59XG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaC1lcyc7XG5cbmV4cG9ydCB7IGluaXRPcmRlciB9O1xuXG4vKlxuICogQXNzaWducyBhbiBpbml0aWFsIG9yZGVyIHZhbHVlIGZvciBlYWNoIG5vZGUgYnkgcGVyZm9ybWluZyBhIERGUyBzZWFyY2hcbiAqIHN0YXJ0aW5nIGZyb20gbm9kZXMgaW4gdGhlIGZpcnN0IHJhbmsuIE5vZGVzIGFyZSBhc3NpZ25lZCBhbiBvcmRlciBpbiB0aGVpclxuICogcmFuayBhcyB0aGV5IGFyZSBmaXJzdCB2aXNpdGVkLlxuICpcbiAqIFRoaXMgYXBwcm9hY2ggY29tZXMgZnJvbSBHYW5zbmVyLCBldCBhbC4sIFwiQSBUZWNobmlxdWUgZm9yIERyYXdpbmcgRGlyZWN0ZWRcbiAqIEdyYXBocy5cIlxuICpcbiAqIFJldHVybnMgYSBsYXllcmluZyBtYXRyaXggd2l0aCBhbiBhcnJheSBwZXIgbGF5ZXIgYW5kIGVhY2ggbGF5ZXIgc29ydGVkIGJ5XG4gKiB0aGUgb3JkZXIgb2YgaXRzIG5vZGVzLlxuICovXG5mdW5jdGlvbiBpbml0T3JkZXIoZykge1xuICB2YXIgdmlzaXRlZCA9IHt9O1xuICB2YXIgc2ltcGxlTm9kZXMgPSBfLmZpbHRlcihnLm5vZGVzKCksIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuICFnLmNoaWxkcmVuKHYpLmxlbmd0aDtcbiAgfSk7XG4gIHZhciBtYXhSYW5rID0gXy5tYXgoXG4gICAgXy5tYXAoc2ltcGxlTm9kZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gZy5ub2RlKHYpLnJhbms7XG4gICAgfSlcbiAgKTtcbiAgdmFyIGxheWVycyA9IF8ubWFwKF8ucmFuZ2UobWF4UmFuayArIDEpLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9KTtcblxuICBmdW5jdGlvbiBkZnModikge1xuICAgIGlmIChfLmhhcyh2aXNpdGVkLCB2KSkgcmV0dXJuO1xuICAgIHZpc2l0ZWRbdl0gPSB0cnVlO1xuICAgIHZhciBub2RlID0gZy5ub2RlKHYpO1xuICAgIGxheWVyc1tub2RlLnJhbmtdLnB1c2godik7XG4gICAgXy5mb3JFYWNoKGcuc3VjY2Vzc29ycyh2KSwgZGZzKTtcbiAgfVxuXG4gIHZhciBvcmRlcmVkVnMgPSBfLnNvcnRCeShzaW1wbGVOb2RlcywgZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gZy5ub2RlKHYpLnJhbms7XG4gIH0pO1xuICBfLmZvckVhY2gob3JkZXJlZFZzLCBkZnMpO1xuXG4gIHJldHVybiBsYXllcnM7XG59XG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaC1lcyc7XG5cbmV4cG9ydCB7IGJhcnljZW50ZXIgfTtcblxuZnVuY3Rpb24gYmFyeWNlbnRlcihnLCBtb3ZhYmxlKSB7XG4gIHJldHVybiBfLm1hcChtb3ZhYmxlLCBmdW5jdGlvbiAodikge1xuICAgIHZhciBpblYgPSBnLmluRWRnZXModik7XG4gICAgaWYgKCFpblYubGVuZ3RoKSB7XG4gICAgICByZXR1cm4geyB2OiB2IH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXN1bHQgPSBfLnJlZHVjZShcbiAgICAgICAgaW5WLFxuICAgICAgICBmdW5jdGlvbiAoYWNjLCBlKSB7XG4gICAgICAgICAgdmFyIGVkZ2UgPSBnLmVkZ2UoZSksXG4gICAgICAgICAgICBub2RlVSA9IGcubm9kZShlLnYpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdW06IGFjYy5zdW0gKyBlZGdlLndlaWdodCAqIG5vZGVVLm9yZGVyLFxuICAgICAgICAgICAgd2VpZ2h0OiBhY2Mud2VpZ2h0ICsgZWRnZS53ZWlnaHQsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgeyBzdW06IDAsIHdlaWdodDogMCB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2OiB2LFxuICAgICAgICBiYXJ5Y2VudGVyOiByZXN1bHQuc3VtIC8gcmVzdWx0LndlaWdodCxcbiAgICAgICAgd2VpZ2h0OiByZXN1bHQud2VpZ2h0LFxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuXG5leHBvcnQgeyByZXNvbHZlQ29uZmxpY3RzIH07XG5cbi8qXG4gKiBHaXZlbiBhIGxpc3Qgb2YgZW50cmllcyBvZiB0aGUgZm9ybSB7diwgYmFyeWNlbnRlciwgd2VpZ2h0fSBhbmQgYVxuICogY29uc3RyYWludCBncmFwaCB0aGlzIGZ1bmN0aW9uIHdpbGwgcmVzb2x2ZSBhbnkgY29uZmxpY3RzIGJldHdlZW4gdGhlXG4gKiBjb25zdHJhaW50IGdyYXBoIGFuZCB0aGUgYmFyeWNlbnRlcnMgZm9yIHRoZSBlbnRyaWVzLiBJZiB0aGUgYmFyeWNlbnRlcnMgZm9yXG4gKiBhbiBlbnRyeSB3b3VsZCB2aW9sYXRlIGEgY29uc3RyYWludCBpbiB0aGUgY29uc3RyYWludCBncmFwaCB0aGVuIHdlIGNvYWxlc2NlXG4gKiB0aGUgbm9kZXMgaW4gdGhlIGNvbmZsaWN0IGludG8gYSBuZXcgbm9kZSB0aGF0IHJlc3BlY3RzIHRoZSBjb250cmFpbnQgYW5kXG4gKiBhZ2dyZWdhdGVzIGJhcnljZW50ZXIgYW5kIHdlaWdodCBpbmZvcm1hdGlvbi5cbiAqXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIG9uIHRoZSBkZXNjcmlwdGlvbiBpbiBGb3JzdGVyLCBcIkEgRmFzdCBhbmRcbiAqIFNpbXBsZSBIdWVyaXN0aWMgZm9yIENvbnN0cmFpbmVkIFR3by1MZXZlbCBDcm9zc2luZyBSZWR1Y3Rpb24sXCIgdGhvdWdodCBpdFxuICogZGlmZmVycyBpbiBzb21lIHNwZWNpZmljIGRldGFpbHMuXG4gKlxuICogUHJlLWNvbmRpdGlvbnM6XG4gKlxuICogICAgMS4gRWFjaCBlbnRyeSBoYXMgdGhlIGZvcm0ge3YsIGJhcnljZW50ZXIsIHdlaWdodH0sIG9yIGlmIHRoZSBub2RlIGhhc1xuICogICAgICAgbm8gYmFyeWNlbnRlciwgdGhlbiB7dn0uXG4gKlxuICogUmV0dXJuczpcbiAqXG4gKiAgICBBIG5ldyBsaXN0IG9mIGVudHJpZXMgb2YgdGhlIGZvcm0ge3ZzLCBpLCBiYXJ5Y2VudGVyLCB3ZWlnaHR9LiBUaGUgbGlzdFxuICogICAgYHZzYCBtYXkgZWl0aGVyIGJlIGEgc2luZ2xldG9uIG9yIGl0IG1heSBiZSBhbiBhZ2dyZWdhdGlvbiBvZiBub2Rlc1xuICogICAgb3JkZXJlZCBzdWNoIHRoYXQgdGhleSBkbyBub3QgdmlvbGF0ZSBjb25zdHJhaW50cyBmcm9tIHRoZSBjb25zdHJhaW50XG4gKiAgICBncmFwaC4gVGhlIHByb3BlcnR5IGBpYCBpcyB0aGUgbG93ZXN0IG9yaWdpbmFsIGluZGV4IG9mIGFueSBvZiB0aGVcbiAqICAgIGVsZW1lbnRzIGluIGB2c2AuXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVDb25mbGljdHMoZW50cmllcywgY2cpIHtcbiAgdmFyIG1hcHBlZEVudHJpZXMgPSB7fTtcbiAgXy5mb3JFYWNoKGVudHJpZXMsIGZ1bmN0aW9uIChlbnRyeSwgaSkge1xuICAgIHZhciB0bXAgPSAobWFwcGVkRW50cmllc1tlbnRyeS52XSA9IHtcbiAgICAgIGluZGVncmVlOiAwLFxuICAgICAgaW46IFtdLFxuICAgICAgb3V0OiBbXSxcbiAgICAgIHZzOiBbZW50cnkudl0sXG4gICAgICBpOiBpLFxuICAgIH0pO1xuICAgIGlmICghXy5pc1VuZGVmaW5lZChlbnRyeS5iYXJ5Y2VudGVyKSkge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgdG1wLmJhcnljZW50ZXIgPSBlbnRyeS5iYXJ5Y2VudGVyO1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgdG1wLndlaWdodCA9IGVudHJ5LndlaWdodDtcbiAgICB9XG4gIH0pO1xuXG4gIF8uZm9yRWFjaChjZy5lZGdlcygpLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBlbnRyeVYgPSBtYXBwZWRFbnRyaWVzW2Uudl07XG4gICAgdmFyIGVudHJ5VyA9IG1hcHBlZEVudHJpZXNbZS53XTtcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoZW50cnlWKSAmJiAhXy5pc1VuZGVmaW5lZChlbnRyeVcpKSB7XG4gICAgICBlbnRyeVcuaW5kZWdyZWUrKztcbiAgICAgIGVudHJ5Vi5vdXQucHVzaChtYXBwZWRFbnRyaWVzW2Uud10pO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIHNvdXJjZVNldCA9IF8uZmlsdGVyKG1hcHBlZEVudHJpZXMsIGZ1bmN0aW9uIChlbnRyeSkge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICByZXR1cm4gIWVudHJ5LmluZGVncmVlO1xuICB9KTtcblxuICByZXR1cm4gZG9SZXNvbHZlQ29uZmxpY3RzKHNvdXJjZVNldCk7XG59XG5cbmZ1bmN0aW9uIGRvUmVzb2x2ZUNvbmZsaWN0cyhzb3VyY2VTZXQpIHtcbiAgdmFyIGVudHJpZXMgPSBbXTtcblxuICBmdW5jdGlvbiBoYW5kbGVJbih2RW50cnkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHVFbnRyeSkge1xuICAgICAgaWYgKHVFbnRyeS5tZXJnZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBfLmlzVW5kZWZpbmVkKHVFbnRyeS5iYXJ5Y2VudGVyKSB8fFxuICAgICAgICBfLmlzVW5kZWZpbmVkKHZFbnRyeS5iYXJ5Y2VudGVyKSB8fFxuICAgICAgICB1RW50cnkuYmFyeWNlbnRlciA+PSB2RW50cnkuYmFyeWNlbnRlclxuICAgICAgKSB7XG4gICAgICAgIG1lcmdlRW50cmllcyh2RW50cnksIHVFbnRyeSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU91dCh2RW50cnkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHdFbnRyeSkge1xuICAgICAgd0VudHJ5WydpbiddLnB1c2godkVudHJ5KTtcbiAgICAgIGlmICgtLXdFbnRyeS5pbmRlZ3JlZSA9PT0gMCkge1xuICAgICAgICBzb3VyY2VTZXQucHVzaCh3RW50cnkpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB3aGlsZSAoc291cmNlU2V0Lmxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IHNvdXJjZVNldC5wb3AoKTtcbiAgICBlbnRyaWVzLnB1c2goZW50cnkpO1xuICAgIF8uZm9yRWFjaChlbnRyeVsnaW4nXS5yZXZlcnNlKCksIGhhbmRsZUluKGVudHJ5KSk7XG4gICAgXy5mb3JFYWNoKGVudHJ5Lm91dCwgaGFuZGxlT3V0KGVudHJ5KSk7XG4gIH1cblxuICByZXR1cm4gXy5tYXAoXG4gICAgXy5maWx0ZXIoZW50cmllcywgZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICByZXR1cm4gIWVudHJ5Lm1lcmdlZDtcbiAgICB9KSxcbiAgICBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgIHJldHVybiBfLnBpY2soZW50cnksIFsndnMnLCAnaScsICdiYXJ5Y2VudGVyJywgJ3dlaWdodCddKTtcbiAgICB9XG4gICk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlRW50cmllcyh0YXJnZXQsIHNvdXJjZSkge1xuICB2YXIgc3VtID0gMDtcbiAgdmFyIHdlaWdodCA9IDA7XG5cbiAgaWYgKHRhcmdldC53ZWlnaHQpIHtcbiAgICBzdW0gKz0gdGFyZ2V0LmJhcnljZW50ZXIgKiB0YXJnZXQud2VpZ2h0O1xuICAgIHdlaWdodCArPSB0YXJnZXQud2VpZ2h0O1xuICB9XG5cbiAgaWYgKHNvdXJjZS53ZWlnaHQpIHtcbiAgICBzdW0gKz0gc291cmNlLmJhcnljZW50ZXIgKiBzb3VyY2Uud2VpZ2h0O1xuICAgIHdlaWdodCArPSBzb3VyY2Uud2VpZ2h0O1xuICB9XG5cbiAgdGFyZ2V0LnZzID0gc291cmNlLnZzLmNvbmNhdCh0YXJnZXQudnMpO1xuICB0YXJnZXQuYmFyeWNlbnRlciA9IHN1bSAvIHdlaWdodDtcbiAgdGFyZ2V0LndlaWdodCA9IHdlaWdodDtcbiAgdGFyZ2V0LmkgPSBNYXRoLm1pbihzb3VyY2UuaSwgdGFyZ2V0LmkpO1xuICBzb3VyY2UubWVyZ2VkID0gdHJ1ZTtcbn1cbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vdXRpbC5qcyc7XG5cbmV4cG9ydCB7IHNvcnQgfTtcblxuZnVuY3Rpb24gc29ydChlbnRyaWVzLCBiaWFzUmlnaHQpIHtcbiAgdmFyIHBhcnRzID0gdXRpbC5wYXJ0aXRpb24oZW50cmllcywgZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgcmV0dXJuIF8uaGFzKGVudHJ5LCAnYmFyeWNlbnRlcicpO1xuICB9KTtcbiAgdmFyIHNvcnRhYmxlID0gcGFydHMubGhzLFxuICAgIHVuc29ydGFibGUgPSBfLnNvcnRCeShwYXJ0cy5yaHMsIGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgcmV0dXJuIC1lbnRyeS5pO1xuICAgIH0pLFxuICAgIHZzID0gW10sXG4gICAgc3VtID0gMCxcbiAgICB3ZWlnaHQgPSAwLFxuICAgIHZzSW5kZXggPSAwO1xuXG4gIHNvcnRhYmxlLnNvcnQoY29tcGFyZVdpdGhCaWFzKCEhYmlhc1JpZ2h0KSk7XG5cbiAgdnNJbmRleCA9IGNvbnN1bWVVbnNvcnRhYmxlKHZzLCB1bnNvcnRhYmxlLCB2c0luZGV4KTtcblxuICBfLmZvckVhY2goc29ydGFibGUsIGZ1bmN0aW9uIChlbnRyeSkge1xuICAgIHZzSW5kZXggKz0gZW50cnkudnMubGVuZ3RoO1xuICAgIHZzLnB1c2goZW50cnkudnMpO1xuICAgIHN1bSArPSBlbnRyeS5iYXJ5Y2VudGVyICogZW50cnkud2VpZ2h0O1xuICAgIHdlaWdodCArPSBlbnRyeS53ZWlnaHQ7XG4gICAgdnNJbmRleCA9IGNvbnN1bWVVbnNvcnRhYmxlKHZzLCB1bnNvcnRhYmxlLCB2c0luZGV4KTtcbiAgfSk7XG5cbiAgdmFyIHJlc3VsdCA9IHsgdnM6IF8uZmxhdHRlbih2cykgfTtcbiAgaWYgKHdlaWdodCkge1xuICAgIHJlc3VsdC5iYXJ5Y2VudGVyID0gc3VtIC8gd2VpZ2h0O1xuICAgIHJlc3VsdC53ZWlnaHQgPSB3ZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY29uc3VtZVVuc29ydGFibGUodnMsIHVuc29ydGFibGUsIGluZGV4KSB7XG4gIHZhciBsYXN0O1xuICB3aGlsZSAodW5zb3J0YWJsZS5sZW5ndGggJiYgKGxhc3QgPSBfLmxhc3QodW5zb3J0YWJsZSkpLmkgPD0gaW5kZXgpIHtcbiAgICB1bnNvcnRhYmxlLnBvcCgpO1xuICAgIHZzLnB1c2gobGFzdC52cyk7XG4gICAgaW5kZXgrKztcbiAgfVxuICByZXR1cm4gaW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVXaXRoQmlhcyhiaWFzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZW50cnlWLCBlbnRyeVcpIHtcbiAgICBpZiAoZW50cnlWLmJhcnljZW50ZXIgPCBlbnRyeVcuYmFyeWNlbnRlcikge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSBpZiAoZW50cnlWLmJhcnljZW50ZXIgPiBlbnRyeVcuYmFyeWNlbnRlcikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuICFiaWFzID8gZW50cnlWLmkgLSBlbnRyeVcuaSA6IGVudHJ5Vy5pIC0gZW50cnlWLmk7XG4gIH07XG59XG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyBiYXJ5Y2VudGVyIH0gZnJvbSAnLi9iYXJ5Y2VudGVyLmpzJztcbmltcG9ydCB7IHJlc29sdmVDb25mbGljdHMgfSBmcm9tICcuL3Jlc29sdmUtY29uZmxpY3RzLmpzJztcbmltcG9ydCB7IHNvcnQgfSBmcm9tICcuL3NvcnQuanMnO1xuXG5leHBvcnQgeyBzb3J0U3ViZ3JhcGggfTtcblxuZnVuY3Rpb24gc29ydFN1YmdyYXBoKGcsIHYsIGNnLCBiaWFzUmlnaHQpIHtcbiAgdmFyIG1vdmFibGUgPSBnLmNoaWxkcmVuKHYpO1xuICB2YXIgbm9kZSA9IGcubm9kZSh2KTtcbiAgdmFyIGJsID0gbm9kZSA/IG5vZGUuYm9yZGVyTGVmdCA6IHVuZGVmaW5lZDtcbiAgdmFyIGJyID0gbm9kZSA/IG5vZGUuYm9yZGVyUmlnaHQgOiB1bmRlZmluZWQ7XG4gIHZhciBzdWJncmFwaHMgPSB7fTtcblxuICBpZiAoYmwpIHtcbiAgICBtb3ZhYmxlID0gXy5maWx0ZXIobW92YWJsZSwgZnVuY3Rpb24gKHcpIHtcbiAgICAgIHJldHVybiB3ICE9PSBibCAmJiB3ICE9PSBicjtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBiYXJ5Y2VudGVycyA9IGJhcnljZW50ZXIoZywgbW92YWJsZSk7XG4gIF8uZm9yRWFjaChiYXJ5Y2VudGVycywgZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgaWYgKGcuY2hpbGRyZW4oZW50cnkudikubGVuZ3RoKSB7XG4gICAgICB2YXIgc3ViZ3JhcGhSZXN1bHQgPSBzb3J0U3ViZ3JhcGgoZywgZW50cnkudiwgY2csIGJpYXNSaWdodCk7XG4gICAgICBzdWJncmFwaHNbZW50cnkudl0gPSBzdWJncmFwaFJlc3VsdDtcbiAgICAgIGlmIChfLmhhcyhzdWJncmFwaFJlc3VsdCwgJ2JhcnljZW50ZXInKSkge1xuICAgICAgICBtZXJnZUJhcnljZW50ZXJzKGVudHJ5LCBzdWJncmFwaFJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB2YXIgZW50cmllcyA9IHJlc29sdmVDb25mbGljdHMoYmFyeWNlbnRlcnMsIGNnKTtcbiAgZXhwYW5kU3ViZ3JhcGhzKGVudHJpZXMsIHN1YmdyYXBocyk7XG5cbiAgdmFyIHJlc3VsdCA9IHNvcnQoZW50cmllcywgYmlhc1JpZ2h0KTtcblxuICBpZiAoYmwpIHtcbiAgICByZXN1bHQudnMgPSBfLmZsYXR0ZW4oW2JsLCByZXN1bHQudnMsIGJyXSk7XG4gICAgaWYgKGcucHJlZGVjZXNzb3JzKGJsKS5sZW5ndGgpIHtcbiAgICAgIHZhciBibFByZWQgPSBnLm5vZGUoZy5wcmVkZWNlc3NvcnMoYmwpWzBdKSxcbiAgICAgICAgYnJQcmVkID0gZy5ub2RlKGcucHJlZGVjZXNzb3JzKGJyKVswXSk7XG4gICAgICBpZiAoIV8uaGFzKHJlc3VsdCwgJ2JhcnljZW50ZXInKSkge1xuICAgICAgICByZXN1bHQuYmFyeWNlbnRlciA9IDA7XG4gICAgICAgIHJlc3VsdC53ZWlnaHQgPSAwO1xuICAgICAgfVxuICAgICAgcmVzdWx0LmJhcnljZW50ZXIgPVxuICAgICAgICAocmVzdWx0LmJhcnljZW50ZXIgKiByZXN1bHQud2VpZ2h0ICsgYmxQcmVkLm9yZGVyICsgYnJQcmVkLm9yZGVyKSAvIChyZXN1bHQud2VpZ2h0ICsgMik7XG4gICAgICByZXN1bHQud2VpZ2h0ICs9IDI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZXhwYW5kU3ViZ3JhcGhzKGVudHJpZXMsIHN1YmdyYXBocykge1xuICBfLmZvckVhY2goZW50cmllcywgZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgZW50cnkudnMgPSBfLmZsYXR0ZW4oXG4gICAgICBlbnRyeS52cy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHN1YmdyYXBoc1t2XSkge1xuICAgICAgICAgIHJldHVybiBzdWJncmFwaHNbdl0udnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgICB9KVxuICAgICk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtZXJnZUJhcnljZW50ZXJzKHRhcmdldCwgb3RoZXIpIHtcbiAgaWYgKCFfLmlzVW5kZWZpbmVkKHRhcmdldC5iYXJ5Y2VudGVyKSkge1xuICAgIHRhcmdldC5iYXJ5Y2VudGVyID1cbiAgICAgICh0YXJnZXQuYmFyeWNlbnRlciAqIHRhcmdldC53ZWlnaHQgKyBvdGhlci5iYXJ5Y2VudGVyICogb3RoZXIud2VpZ2h0KSAvXG4gICAgICAodGFyZ2V0LndlaWdodCArIG90aGVyLndlaWdodCk7XG4gICAgdGFyZ2V0LndlaWdodCArPSBvdGhlci53ZWlnaHQ7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0LmJhcnljZW50ZXIgPSBvdGhlci5iYXJ5Y2VudGVyO1xuICAgIHRhcmdldC53ZWlnaHQgPSBvdGhlci53ZWlnaHQ7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IEdyYXBoIH0gZnJvbSAnLi4vLi4vZ3JhcGhsaWIvaW5kZXguanMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi91dGlsLmpzJztcbmltcG9ydCB7IGFkZFN1YmdyYXBoQ29uc3RyYWludHMgfSBmcm9tICcuL2FkZC1zdWJncmFwaC1jb25zdHJhaW50cy5qcyc7XG5pbXBvcnQgeyBidWlsZExheWVyR3JhcGggfSBmcm9tICcuL2J1aWxkLWxheWVyLWdyYXBoLmpzJztcbmltcG9ydCB7IGNyb3NzQ291bnQgfSBmcm9tICcuL2Nyb3NzLWNvdW50LmpzJztcbmltcG9ydCB7IGluaXRPcmRlciB9IGZyb20gJy4vaW5pdC1vcmRlci5qcyc7XG5pbXBvcnQgeyBzb3J0U3ViZ3JhcGggfSBmcm9tICcuL3NvcnQtc3ViZ3JhcGguanMnO1xuXG5leHBvcnQgeyBvcmRlciB9O1xuXG4vKlxuICogQXBwbGllcyBoZXVyaXN0aWNzIHRvIG1pbmltaXplIGVkZ2UgY3Jvc3NpbmdzIGluIHRoZSBncmFwaCBhbmQgc2V0cyB0aGUgYmVzdFxuICogb3JkZXIgc29sdXRpb24gYXMgYW4gb3JkZXIgYXR0cmlidXRlIG9uIGVhY2ggbm9kZS5cbiAqXG4gKiBQcmUtY29uZGl0aW9uczpcbiAqXG4gKiAgICAxLiBHcmFwaCBtdXN0IGJlIERBR1xuICogICAgMi4gR3JhcGggbm9kZXMgbXVzdCBiZSBvYmplY3RzIHdpdGggYSBcInJhbmtcIiBhdHRyaWJ1dGVcbiAqICAgIDMuIEdyYXBoIGVkZ2VzIG11c3QgaGF2ZSB0aGUgXCJ3ZWlnaHRcIiBhdHRyaWJ1dGVcbiAqXG4gKiBQb3N0LWNvbmRpdGlvbnM6XG4gKlxuICogICAgMS4gR3JhcGggbm9kZXMgd2lsbCBoYXZlIGFuIFwib3JkZXJcIiBhdHRyaWJ1dGUgYmFzZWQgb24gdGhlIHJlc3VsdHMgb2YgdGhlXG4gKiAgICAgICBhbGdvcml0aG0uXG4gKi9cbmZ1bmN0aW9uIG9yZGVyKGcpIHtcbiAgdmFyIG1heFJhbmsgPSB1dGlsLm1heFJhbmsoZyksXG4gICAgZG93bkxheWVyR3JhcGhzID0gYnVpbGRMYXllckdyYXBocyhnLCBfLnJhbmdlKDEsIG1heFJhbmsgKyAxKSwgJ2luRWRnZXMnKSxcbiAgICB1cExheWVyR3JhcGhzID0gYnVpbGRMYXllckdyYXBocyhnLCBfLnJhbmdlKG1heFJhbmsgLSAxLCAtMSwgLTEpLCAnb3V0RWRnZXMnKTtcblxuICB2YXIgbGF5ZXJpbmcgPSBpbml0T3JkZXIoZyk7XG4gIGFzc2lnbk9yZGVyKGcsIGxheWVyaW5nKTtcblxuICB2YXIgYmVzdENDID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgIGJlc3Q7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxhc3RCZXN0ID0gMDsgbGFzdEJlc3QgPCA0OyArK2ksICsrbGFzdEJlc3QpIHtcbiAgICBzd2VlcExheWVyR3JhcGhzKGkgJSAyID8gZG93bkxheWVyR3JhcGhzIDogdXBMYXllckdyYXBocywgaSAlIDQgPj0gMik7XG5cbiAgICBsYXllcmluZyA9IHV0aWwuYnVpbGRMYXllck1hdHJpeChnKTtcbiAgICB2YXIgY2MgPSBjcm9zc0NvdW50KGcsIGxheWVyaW5nKTtcbiAgICBpZiAoY2MgPCBiZXN0Q0MpIHtcbiAgICAgIGxhc3RCZXN0ID0gMDtcbiAgICAgIGJlc3QgPSBfLmNsb25lRGVlcChsYXllcmluZyk7XG4gICAgICBiZXN0Q0MgPSBjYztcbiAgICB9XG4gIH1cblxuICBhc3NpZ25PcmRlcihnLCBiZXN0KTtcbn1cblxuZnVuY3Rpb24gYnVpbGRMYXllckdyYXBocyhnLCByYW5rcywgcmVsYXRpb25zaGlwKSB7XG4gIHJldHVybiBfLm1hcChyYW5rcywgZnVuY3Rpb24gKHJhbmspIHtcbiAgICByZXR1cm4gYnVpbGRMYXllckdyYXBoKGcsIHJhbmssIHJlbGF0aW9uc2hpcCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzd2VlcExheWVyR3JhcGhzKGxheWVyR3JhcGhzLCBiaWFzUmlnaHQpIHtcbiAgdmFyIGNnID0gbmV3IEdyYXBoKCk7XG4gIF8uZm9yRWFjaChsYXllckdyYXBocywgZnVuY3Rpb24gKGxnKSB7XG4gICAgdmFyIHJvb3QgPSBsZy5ncmFwaCgpLnJvb3Q7XG4gICAgdmFyIHNvcnRlZCA9IHNvcnRTdWJncmFwaChsZywgcm9vdCwgY2csIGJpYXNSaWdodCk7XG4gICAgXy5mb3JFYWNoKHNvcnRlZC52cywgZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgIGxnLm5vZGUodikub3JkZXIgPSBpO1xuICAgIH0pO1xuICAgIGFkZFN1YmdyYXBoQ29uc3RyYWludHMobGcsIGNnLCBzb3J0ZWQudnMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduT3JkZXIoZywgbGF5ZXJpbmcpIHtcbiAgXy5mb3JFYWNoKGxheWVyaW5nLCBmdW5jdGlvbiAobGF5ZXIpIHtcbiAgICBfLmZvckVhY2gobGF5ZXIsIGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICBnLm5vZGUodikub3JkZXIgPSBpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcblxuZXhwb3J0IHsgcGFyZW50RHVtbXlDaGFpbnMgfTtcblxuZnVuY3Rpb24gcGFyZW50RHVtbXlDaGFpbnMoZykge1xuICB2YXIgcG9zdG9yZGVyTnVtcyA9IHBvc3RvcmRlcihnKTtcblxuICBfLmZvckVhY2goZy5ncmFwaCgpLmR1bW15Q2hhaW5zLCBmdW5jdGlvbiAodikge1xuICAgIHZhciBub2RlID0gZy5ub2RlKHYpO1xuICAgIHZhciBlZGdlT2JqID0gbm9kZS5lZGdlT2JqO1xuICAgIHZhciBwYXRoRGF0YSA9IGZpbmRQYXRoKGcsIHBvc3RvcmRlck51bXMsIGVkZ2VPYmoudiwgZWRnZU9iai53KTtcbiAgICB2YXIgcGF0aCA9IHBhdGhEYXRhLnBhdGg7XG4gICAgdmFyIGxjYSA9IHBhdGhEYXRhLmxjYTtcbiAgICB2YXIgcGF0aElkeCA9IDA7XG4gICAgdmFyIHBhdGhWID0gcGF0aFtwYXRoSWR4XTtcbiAgICB2YXIgYXNjZW5kaW5nID0gdHJ1ZTtcblxuICAgIHdoaWxlICh2ICE9PSBlZGdlT2JqLncpIHtcbiAgICAgIG5vZGUgPSBnLm5vZGUodik7XG5cbiAgICAgIGlmIChhc2NlbmRpbmcpIHtcbiAgICAgICAgd2hpbGUgKChwYXRoViA9IHBhdGhbcGF0aElkeF0pICE9PSBsY2EgJiYgZy5ub2RlKHBhdGhWKS5tYXhSYW5rIDwgbm9kZS5yYW5rKSB7XG4gICAgICAgICAgcGF0aElkeCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhdGhWID09PSBsY2EpIHtcbiAgICAgICAgICBhc2NlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFzY2VuZGluZykge1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgcGF0aElkeCA8IHBhdGgubGVuZ3RoIC0gMSAmJlxuICAgICAgICAgIGcubm9kZSgocGF0aFYgPSBwYXRoW3BhdGhJZHggKyAxXSkpLm1pblJhbmsgPD0gbm9kZS5yYW5rXG4gICAgICAgICkge1xuICAgICAgICAgIHBhdGhJZHgrKztcbiAgICAgICAgfVxuICAgICAgICBwYXRoViA9IHBhdGhbcGF0aElkeF07XG4gICAgICB9XG5cbiAgICAgIGcuc2V0UGFyZW50KHYsIHBhdGhWKTtcbiAgICAgIHYgPSBnLnN1Y2Nlc3NvcnModilbMF07XG4gICAgfVxuICB9KTtcbn1cblxuLy8gRmluZCBhIHBhdGggZnJvbSB2IHRvIHcgdGhyb3VnaCB0aGUgbG93ZXN0IGNvbW1vbiBhbmNlc3RvciAoTENBKS4gUmV0dXJuIHRoZVxuLy8gZnVsbCBwYXRoIGFuZCB0aGUgTENBLlxuZnVuY3Rpb24gZmluZFBhdGgoZywgcG9zdG9yZGVyTnVtcywgdiwgdykge1xuICB2YXIgdlBhdGggPSBbXTtcbiAgdmFyIHdQYXRoID0gW107XG4gIHZhciBsb3cgPSBNYXRoLm1pbihwb3N0b3JkZXJOdW1zW3ZdLmxvdywgcG9zdG9yZGVyTnVtc1t3XS5sb3cpO1xuICB2YXIgbGltID0gTWF0aC5tYXgocG9zdG9yZGVyTnVtc1t2XS5saW0sIHBvc3RvcmRlck51bXNbd10ubGltKTtcbiAgdmFyIHBhcmVudDtcbiAgdmFyIGxjYTtcblxuICAvLyBUcmF2ZXJzZSB1cCBmcm9tIHYgdG8gZmluZCB0aGUgTENBXG4gIHBhcmVudCA9IHY7XG4gIGRvIHtcbiAgICBwYXJlbnQgPSBnLnBhcmVudChwYXJlbnQpO1xuICAgIHZQYXRoLnB1c2gocGFyZW50KTtcbiAgfSB3aGlsZSAocGFyZW50ICYmIChwb3N0b3JkZXJOdW1zW3BhcmVudF0ubG93ID4gbG93IHx8IGxpbSA+IHBvc3RvcmRlck51bXNbcGFyZW50XS5saW0pKTtcbiAgbGNhID0gcGFyZW50O1xuXG4gIC8vIFRyYXZlcnNlIGZyb20gdyB0byBMQ0FcbiAgcGFyZW50ID0gdztcbiAgd2hpbGUgKChwYXJlbnQgPSBnLnBhcmVudChwYXJlbnQpKSAhPT0gbGNhKSB7XG4gICAgd1BhdGgucHVzaChwYXJlbnQpO1xuICB9XG5cbiAgcmV0dXJuIHsgcGF0aDogdlBhdGguY29uY2F0KHdQYXRoLnJldmVyc2UoKSksIGxjYTogbGNhIH07XG59XG5cbmZ1bmN0aW9uIHBvc3RvcmRlcihnKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdmFyIGxpbSA9IDA7XG5cbiAgZnVuY3Rpb24gZGZzKHYpIHtcbiAgICB2YXIgbG93ID0gbGltO1xuICAgIF8uZm9yRWFjaChnLmNoaWxkcmVuKHYpLCBkZnMpO1xuICAgIHJlc3VsdFt2XSA9IHsgbG93OiBsb3csIGxpbTogbGltKysgfTtcbiAgfVxuICBfLmZvckVhY2goZy5jaGlsZHJlbigpLCBkZnMpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gJy4uLy4uL2dyYXBobGliL2luZGV4LmpzJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vdXRpbC5qcyc7XG5cbi8qXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBjb29yZGluYXRlIGFzc2lnbm1lbnQgYmFzZWQgb24gQnJhbmRlcyBhbmQgS8O2cGYsIFwiRmFzdFxuICogYW5kIFNpbXBsZSBIb3Jpem9udGFsIENvb3JkaW5hdGUgQXNzaWdubWVudC5cIlxuICovXG5cbmV4cG9ydCB7XG4gIHBvc2l0aW9uWCxcbiAgZmluZFR5cGUxQ29uZmxpY3RzLFxuICBmaW5kVHlwZTJDb25mbGljdHMsXG4gIGFkZENvbmZsaWN0LFxuICBoYXNDb25mbGljdCxcbiAgdmVydGljYWxBbGlnbm1lbnQsXG4gIGhvcml6b250YWxDb21wYWN0aW9uLFxuICBhbGlnbkNvb3JkaW5hdGVzLFxuICBmaW5kU21hbGxlc3RXaWR0aEFsaWdubWVudCxcbiAgYmFsYW5jZSxcbn07XG5cbi8qXG4gKiBNYXJrcyBhbGwgZWRnZXMgaW4gdGhlIGdyYXBoIHdpdGggYSB0eXBlLTEgY29uZmxpY3Qgd2l0aCB0aGUgXCJ0eXBlMUNvbmZsaWN0XCJcbiAqIHByb3BlcnR5LiBBIHR5cGUtMSBjb25mbGljdCBpcyBvbmUgd2hlcmUgYSBub24taW5uZXIgc2VnbWVudCBjcm9zc2VzIGFuXG4gKiBpbm5lciBzZWdtZW50LiBBbiBpbm5lciBzZWdtZW50IGlzIGFuIGVkZ2Ugd2l0aCBib3RoIGluY2lkZW50IG5vZGVzIG1hcmtlZFxuICogd2l0aCB0aGUgXCJkdW1teVwiIHByb3BlcnR5LlxuICpcbiAqIFRoaXMgYWxnb3JpdGhtIHNjYW5zIGxheWVyIGJ5IGxheWVyLCBzdGFydGluZyB3aXRoIHRoZSBzZWNvbmQsIGZvciB0eXBlLTFcbiAqIGNvbmZsaWN0cyBiZXR3ZWVuIHRoZSBjdXJyZW50IGxheWVyIGFuZCB0aGUgcHJldmlvdXMgbGF5ZXIuIEZvciBlYWNoIGxheWVyXG4gKiBpdCBzY2FucyB0aGUgbm9kZXMgZnJvbSBsZWZ0IHRvIHJpZ2h0IHVudGlsIGl0IHJlYWNoZXMgb25lIHRoYXQgaXMgaW5jaWRlbnRcbiAqIG9uIGFuIGlubmVyIHNlZ21lbnQuIEl0IHRoZW4gc2NhbnMgcHJlZGVjZXNzb3JzIHRvIGRldGVybWluZSBpZiB0aGV5IGhhdmVcbiAqIGVkZ2VzIHRoYXQgY3Jvc3MgdGhhdCBpbm5lciBzZWdtZW50LiBBdCB0aGUgZW5kIGEgZmluYWwgc2NhbiBpcyBkb25lIGZvciBhbGxcbiAqIG5vZGVzIG9uIHRoZSBjdXJyZW50IHJhbmsgdG8gc2VlIGlmIHRoZXkgY3Jvc3MgdGhlIGxhc3QgdmlzaXRlZCBpbm5lclxuICogc2VnbWVudC5cbiAqXG4gKiBUaGlzIGFsZ29yaXRobSAoc2FmZWx5KSBhc3N1bWVzIHRoYXQgYSBkdW1teSBub2RlIHdpbGwgb25seSBiZSBpbmNpZGVudCBvbiBhXG4gKiBzaW5nbGUgbm9kZSBpbiB0aGUgbGF5ZXJzIGJlaW5nIHNjYW5uZWQuXG4gKi9cbmZ1bmN0aW9uIGZpbmRUeXBlMUNvbmZsaWN0cyhnLCBsYXllcmluZykge1xuICB2YXIgY29uZmxpY3RzID0ge307XG5cbiAgZnVuY3Rpb24gdmlzaXRMYXllcihwcmV2TGF5ZXIsIGxheWVyKSB7XG4gICAgdmFyIC8vIGxhc3QgdmlzaXRlZCBub2RlIGluIHRoZSBwcmV2aW91cyBsYXllciB0aGF0IGlzIGluY2lkZW50IG9uIGFuIGlubmVyXG4gICAgICAvLyBzZWdtZW50LlxuICAgICAgazAgPSAwLFxuICAgICAgLy8gVHJhY2tzIHRoZSBsYXN0IG5vZGUgaW4gdGhpcyBsYXllciBzY2FubmVkIGZvciBjcm9zc2luZ3Mgd2l0aCBhIHR5cGUtMVxuICAgICAgLy8gc2VnbWVudC5cbiAgICAgIHNjYW5Qb3MgPSAwLFxuICAgICAgcHJldkxheWVyTGVuZ3RoID0gcHJldkxheWVyLmxlbmd0aCxcbiAgICAgIGxhc3ROb2RlID0gXy5sYXN0KGxheWVyKTtcblxuICAgIF8uZm9yRWFjaChsYXllciwgZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgIHZhciB3ID0gZmluZE90aGVySW5uZXJTZWdtZW50Tm9kZShnLCB2KSxcbiAgICAgICAgazEgPSB3ID8gZy5ub2RlKHcpLm9yZGVyIDogcHJldkxheWVyTGVuZ3RoO1xuXG4gICAgICBpZiAodyB8fCB2ID09PSBsYXN0Tm9kZSkge1xuICAgICAgICBfLmZvckVhY2gobGF5ZXIuc2xpY2Uoc2NhblBvcywgaSArIDEpLCBmdW5jdGlvbiAoc2Nhbk5vZGUpIHtcbiAgICAgICAgICBfLmZvckVhY2goZy5wcmVkZWNlc3NvcnMoc2Nhbk5vZGUpLCBmdW5jdGlvbiAodSkge1xuICAgICAgICAgICAgdmFyIHVMYWJlbCA9IGcubm9kZSh1KSxcbiAgICAgICAgICAgICAgdVBvcyA9IHVMYWJlbC5vcmRlcjtcbiAgICAgICAgICAgIGlmICgodVBvcyA8IGswIHx8IGsxIDwgdVBvcykgJiYgISh1TGFiZWwuZHVtbXkgJiYgZy5ub2RlKHNjYW5Ob2RlKS5kdW1teSkpIHtcbiAgICAgICAgICAgICAgYWRkQ29uZmxpY3QoY29uZmxpY3RzLCB1LCBzY2FuTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIHNjYW5Qb3MgPSBpICsgMTtcbiAgICAgICAgazAgPSBrMTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYXllcjtcbiAgfVxuXG4gIF8ucmVkdWNlKGxheWVyaW5nLCB2aXNpdExheWVyKTtcbiAgcmV0dXJuIGNvbmZsaWN0cztcbn1cblxuZnVuY3Rpb24gZmluZFR5cGUyQ29uZmxpY3RzKGcsIGxheWVyaW5nKSB7XG4gIHZhciBjb25mbGljdHMgPSB7fTtcblxuICBmdW5jdGlvbiBzY2FuKHNvdXRoLCBzb3V0aFBvcywgc291dGhFbmQsIHByZXZOb3J0aEJvcmRlciwgbmV4dE5vcnRoQm9yZGVyKSB7XG4gICAgdmFyIHY7XG4gICAgXy5mb3JFYWNoKF8ucmFuZ2Uoc291dGhQb3MsIHNvdXRoRW5kKSwgZnVuY3Rpb24gKGkpIHtcbiAgICAgIHYgPSBzb3V0aFtpXTtcbiAgICAgIGlmIChnLm5vZGUodikuZHVtbXkpIHtcbiAgICAgICAgXy5mb3JFYWNoKGcucHJlZGVjZXNzb3JzKHYpLCBmdW5jdGlvbiAodSkge1xuICAgICAgICAgIHZhciB1Tm9kZSA9IGcubm9kZSh1KTtcbiAgICAgICAgICBpZiAodU5vZGUuZHVtbXkgJiYgKHVOb2RlLm9yZGVyIDwgcHJldk5vcnRoQm9yZGVyIHx8IHVOb2RlLm9yZGVyID4gbmV4dE5vcnRoQm9yZGVyKSkge1xuICAgICAgICAgICAgYWRkQ29uZmxpY3QoY29uZmxpY3RzLCB1LCB2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdmlzaXRMYXllcihub3J0aCwgc291dGgpIHtcbiAgICB2YXIgcHJldk5vcnRoUG9zID0gLTEsXG4gICAgICBuZXh0Tm9ydGhQb3MsXG4gICAgICBzb3V0aFBvcyA9IDA7XG5cbiAgICBfLmZvckVhY2goc291dGgsIGZ1bmN0aW9uICh2LCBzb3V0aExvb2thaGVhZCkge1xuICAgICAgaWYgKGcubm9kZSh2KS5kdW1teSA9PT0gJ2JvcmRlcicpIHtcbiAgICAgICAgdmFyIHByZWRlY2Vzc29ycyA9IGcucHJlZGVjZXNzb3JzKHYpO1xuICAgICAgICBpZiAocHJlZGVjZXNzb3JzLmxlbmd0aCkge1xuICAgICAgICAgIG5leHROb3J0aFBvcyA9IGcubm9kZShwcmVkZWNlc3NvcnNbMF0pLm9yZGVyO1xuICAgICAgICAgIHNjYW4oc291dGgsIHNvdXRoUG9zLCBzb3V0aExvb2thaGVhZCwgcHJldk5vcnRoUG9zLCBuZXh0Tm9ydGhQb3MpO1xuICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICBzb3V0aFBvcyA9IHNvdXRoTG9va2FoZWFkO1xuICAgICAgICAgIHByZXZOb3J0aFBvcyA9IG5leHROb3J0aFBvcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2Nhbihzb3V0aCwgc291dGhQb3MsIHNvdXRoLmxlbmd0aCwgbmV4dE5vcnRoUG9zLCBub3J0aC5sZW5ndGgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNvdXRoO1xuICB9XG5cbiAgXy5yZWR1Y2UobGF5ZXJpbmcsIHZpc2l0TGF5ZXIpO1xuICByZXR1cm4gY29uZmxpY3RzO1xufVxuXG5mdW5jdGlvbiBmaW5kT3RoZXJJbm5lclNlZ21lbnROb2RlKGcsIHYpIHtcbiAgaWYgKGcubm9kZSh2KS5kdW1teSkge1xuICAgIHJldHVybiBfLmZpbmQoZy5wcmVkZWNlc3NvcnModiksIGZ1bmN0aW9uICh1KSB7XG4gICAgICByZXR1cm4gZy5ub2RlKHUpLmR1bW15O1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZENvbmZsaWN0KGNvbmZsaWN0cywgdiwgdykge1xuICBpZiAodiA+IHcpIHtcbiAgICB2YXIgdG1wID0gdjtcbiAgICB2ID0gdztcbiAgICB3ID0gdG1wO1xuICB9XG5cbiAgdmFyIGNvbmZsaWN0c1YgPSBjb25mbGljdHNbdl07XG4gIGlmICghY29uZmxpY3RzVikge1xuICAgIGNvbmZsaWN0c1t2XSA9IGNvbmZsaWN0c1YgPSB7fTtcbiAgfVxuICBjb25mbGljdHNWW3ddID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGFzQ29uZmxpY3QoY29uZmxpY3RzLCB2LCB3KSB7XG4gIGlmICh2ID4gdykge1xuICAgIHZhciB0bXAgPSB2O1xuICAgIHYgPSB3O1xuICAgIHcgPSB0bXA7XG4gIH1cbiAgcmV0dXJuIF8uaGFzKGNvbmZsaWN0c1t2XSwgdyk7XG59XG5cbi8qXG4gKiBUcnkgdG8gYWxpZ24gbm9kZXMgaW50byB2ZXJ0aWNhbCBcImJsb2Nrc1wiIHdoZXJlIHBvc3NpYmxlLiBUaGlzIGFsZ29yaXRobVxuICogYXR0ZW1wdHMgdG8gYWxpZ24gYSBub2RlIHdpdGggb25lIG9mIGl0cyBtZWRpYW4gbmVpZ2hib3JzLiBJZiB0aGUgZWRnZVxuICogY29ubmVjdGluZyBhIG5laWdoYm9yIGlzIGEgdHlwZS0xIGNvbmZsaWN0IHRoZW4gd2UgaWdub3JlIHRoYXQgcG9zc2liaWxpdHkuXG4gKiBJZiBhIHByZXZpb3VzIG5vZGUgaGFzIGFscmVhZHkgZm9ybWVkIGEgYmxvY2sgd2l0aCBhIG5vZGUgYWZ0ZXIgdGhlIG5vZGVcbiAqIHdlJ3JlIHRyeWluZyB0byBmb3JtIGEgYmxvY2sgd2l0aCwgd2UgYWxzbyBpZ25vcmUgdGhhdCBwb3NzaWJpbGl0eSAtIG91clxuICogYmxvY2tzIHdvdWxkIGJlIHNwbGl0IGluIHRoYXQgc2NlbmFyaW8uXG4gKi9cbmZ1bmN0aW9uIHZlcnRpY2FsQWxpZ25tZW50KGcsIGxheWVyaW5nLCBjb25mbGljdHMsIG5laWdoYm9yRm4pIHtcbiAgdmFyIHJvb3QgPSB7fSxcbiAgICBhbGlnbiA9IHt9LFxuICAgIHBvcyA9IHt9O1xuXG4gIC8vIFdlIGNhY2hlIHRoZSBwb3NpdGlvbiBoZXJlIGJhc2VkIG9uIHRoZSBsYXllcmluZyBiZWNhdXNlIHRoZSBncmFwaCBhbmRcbiAgLy8gbGF5ZXJpbmcgbWF5IGJlIG91dCBvZiBzeW5jLiBUaGUgbGF5ZXJpbmcgbWF0cml4IGlzIG1hbmlwdWxhdGVkIHRvXG4gIC8vIGdlbmVyYXRlIGRpZmZlcmVudCBleHRyZW1lIGFsaWdubWVudHMuXG4gIF8uZm9yRWFjaChsYXllcmluZywgZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgXy5mb3JFYWNoKGxheWVyLCBmdW5jdGlvbiAodiwgb3JkZXIpIHtcbiAgICAgIHJvb3Rbdl0gPSB2O1xuICAgICAgYWxpZ25bdl0gPSB2O1xuICAgICAgcG9zW3ZdID0gb3JkZXI7XG4gICAgfSk7XG4gIH0pO1xuXG4gIF8uZm9yRWFjaChsYXllcmluZywgZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgdmFyIHByZXZJZHggPSAtMTtcbiAgICBfLmZvckVhY2gobGF5ZXIsIGZ1bmN0aW9uICh2KSB7XG4gICAgICB2YXIgd3MgPSBuZWlnaGJvckZuKHYpO1xuICAgICAgaWYgKHdzLmxlbmd0aCkge1xuICAgICAgICB3cyA9IF8uc29ydEJ5KHdzLCBmdW5jdGlvbiAodykge1xuICAgICAgICAgIHJldHVybiBwb3Nbd107XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbXAgPSAod3MubGVuZ3RoIC0gMSkgLyAyO1xuICAgICAgICBmb3IgKHZhciBpID0gTWF0aC5mbG9vcihtcCksIGlsID0gTWF0aC5jZWlsKG1wKTsgaSA8PSBpbDsgKytpKSB7XG4gICAgICAgICAgdmFyIHcgPSB3c1tpXTtcbiAgICAgICAgICBpZiAoYWxpZ25bdl0gPT09IHYgJiYgcHJldklkeCA8IHBvc1t3XSAmJiAhaGFzQ29uZmxpY3QoY29uZmxpY3RzLCB2LCB3KSkge1xuICAgICAgICAgICAgYWxpZ25bd10gPSB2O1xuICAgICAgICAgICAgYWxpZ25bdl0gPSByb290W3ZdID0gcm9vdFt3XTtcbiAgICAgICAgICAgIHByZXZJZHggPSBwb3Nbd107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiB7IHJvb3Q6IHJvb3QsIGFsaWduOiBhbGlnbiB9O1xufVxuXG5mdW5jdGlvbiBob3Jpem9udGFsQ29tcGFjdGlvbihnLCBsYXllcmluZywgcm9vdCwgYWxpZ24sIHJldmVyc2VTZXApIHtcbiAgLy8gVGhpcyBwb3J0aW9uIG9mIHRoZSBhbGdvcml0aG0gZGlmZmVycyBmcm9tIEJLIGR1ZSB0byBhIG51bWJlciBvZiBwcm9ibGVtcy5cbiAgLy8gSW5zdGVhZCBvZiB0aGVpciBhbGdvcml0aG0gd2UgY29uc3RydWN0IGEgbmV3IGJsb2NrIGdyYXBoIGFuZCBkbyB0d29cbiAgLy8gc3dlZXBzLiBUaGUgZmlyc3Qgc3dlZXAgcGxhY2VzIGJsb2NrcyB3aXRoIHRoZSBzbWFsbGVzdCBwb3NzaWJsZVxuICAvLyBjb29yZGluYXRlcy4gVGhlIHNlY29uZCBzd2VlcCByZW1vdmVzIHVudXNlZCBzcGFjZSBieSBtb3ZpbmcgYmxvY2tzIHRvIHRoZVxuICAvLyBncmVhdGVzdCBjb29yZGluYXRlcyB3aXRob3V0IHZpb2xhdGluZyBzZXBhcmF0aW9uLlxuICB2YXIgeHMgPSB7fSxcbiAgICBibG9ja0cgPSBidWlsZEJsb2NrR3JhcGgoZywgbGF5ZXJpbmcsIHJvb3QsIHJldmVyc2VTZXApLFxuICAgIGJvcmRlclR5cGUgPSByZXZlcnNlU2VwID8gJ2JvcmRlckxlZnQnIDogJ2JvcmRlclJpZ2h0JztcblxuICBmdW5jdGlvbiBpdGVyYXRlKHNldFhzRnVuYywgbmV4dE5vZGVzRnVuYykge1xuICAgIHZhciBzdGFjayA9IGJsb2NrRy5ub2RlcygpO1xuICAgIHZhciBlbGVtID0gc3RhY2sucG9wKCk7XG4gICAgdmFyIHZpc2l0ZWQgPSB7fTtcbiAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgaWYgKHZpc2l0ZWRbZWxlbV0pIHtcbiAgICAgICAgc2V0WHNGdW5jKGVsZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlzaXRlZFtlbGVtXSA9IHRydWU7XG4gICAgICAgIHN0YWNrLnB1c2goZWxlbSk7XG4gICAgICAgIHN0YWNrID0gc3RhY2suY29uY2F0KG5leHROb2Rlc0Z1bmMoZWxlbSkpO1xuICAgICAgfVxuXG4gICAgICBlbGVtID0gc3RhY2sucG9wKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmlyc3QgcGFzcywgYXNzaWduIHNtYWxsZXN0IGNvb3JkaW5hdGVzXG4gIGZ1bmN0aW9uIHBhc3MxKGVsZW0pIHtcbiAgICB4c1tlbGVtXSA9IGJsb2NrRy5pbkVkZ2VzKGVsZW0pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBlKSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXgoYWNjLCB4c1tlLnZdICsgYmxvY2tHLmVkZ2UoZSkpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgLy8gU2Vjb25kIHBhc3MsIGFzc2lnbiBncmVhdGVzdCBjb29yZGluYXRlc1xuICBmdW5jdGlvbiBwYXNzMihlbGVtKSB7XG4gICAgdmFyIG1pbiA9IGJsb2NrRy5vdXRFZGdlcyhlbGVtKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZSkge1xuICAgICAgcmV0dXJuIE1hdGgubWluKGFjYywgeHNbZS53XSAtIGJsb2NrRy5lZGdlKGUpKTtcbiAgICB9LCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpO1xuXG4gICAgdmFyIG5vZGUgPSBnLm5vZGUoZWxlbSk7XG4gICAgaWYgKG1pbiAhPT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZICYmIG5vZGUuYm9yZGVyVHlwZSAhPT0gYm9yZGVyVHlwZSkge1xuICAgICAgeHNbZWxlbV0gPSBNYXRoLm1heCh4c1tlbGVtXSwgbWluKTtcbiAgICB9XG4gIH1cblxuICBpdGVyYXRlKHBhc3MxLCBibG9ja0cucHJlZGVjZXNzb3JzLmJpbmQoYmxvY2tHKSk7XG4gIGl0ZXJhdGUocGFzczIsIGJsb2NrRy5zdWNjZXNzb3JzLmJpbmQoYmxvY2tHKSk7XG5cbiAgLy8gQXNzaWduIHggY29vcmRpbmF0ZXMgdG8gYWxsIG5vZGVzXG4gIF8uZm9yRWFjaChhbGlnbiwgZnVuY3Rpb24gKHYpIHtcbiAgICB4c1t2XSA9IHhzW3Jvb3Rbdl1dO1xuICB9KTtcblxuICByZXR1cm4geHM7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQmxvY2tHcmFwaChnLCBsYXllcmluZywgcm9vdCwgcmV2ZXJzZVNlcCkge1xuICB2YXIgYmxvY2tHcmFwaCA9IG5ldyBHcmFwaCgpLFxuICAgIGdyYXBoTGFiZWwgPSBnLmdyYXBoKCksXG4gICAgc2VwRm4gPSBzZXAoZ3JhcGhMYWJlbC5ub2Rlc2VwLCBncmFwaExhYmVsLmVkZ2VzZXAsIHJldmVyc2VTZXApO1xuXG4gIF8uZm9yRWFjaChsYXllcmluZywgZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgdmFyIHU7XG4gICAgXy5mb3JFYWNoKGxheWVyLCBmdW5jdGlvbiAodikge1xuICAgICAgdmFyIHZSb290ID0gcm9vdFt2XTtcbiAgICAgIGJsb2NrR3JhcGguc2V0Tm9kZSh2Um9vdCk7XG4gICAgICBpZiAodSkge1xuICAgICAgICB2YXIgdVJvb3QgPSByb290W3VdLFxuICAgICAgICAgIHByZXZNYXggPSBibG9ja0dyYXBoLmVkZ2UodVJvb3QsIHZSb290KTtcbiAgICAgICAgYmxvY2tHcmFwaC5zZXRFZGdlKHVSb290LCB2Um9vdCwgTWF0aC5tYXgoc2VwRm4oZywgdiwgdSksIHByZXZNYXggfHwgMCkpO1xuICAgICAgfVxuICAgICAgdSA9IHY7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBibG9ja0dyYXBoO1xufVxuXG4vKlxuICogUmV0dXJucyB0aGUgYWxpZ25tZW50IHRoYXQgaGFzIHRoZSBzbWFsbGVzdCB3aWR0aCBvZiB0aGUgZ2l2ZW4gYWxpZ25tZW50cy5cbiAqL1xuZnVuY3Rpb24gZmluZFNtYWxsZXN0V2lkdGhBbGlnbm1lbnQoZywgeHNzKSB7XG4gIHJldHVybiBfLm1pbkJ5KF8udmFsdWVzKHhzcyksIGZ1bmN0aW9uICh4cykge1xuICAgIHZhciBtYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgdmFyIG1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcblxuICAgIF8uZm9ySW4oeHMsIGZ1bmN0aW9uICh4LCB2KSB7XG4gICAgICB2YXIgaGFsZldpZHRoID0gd2lkdGgoZywgdikgLyAyO1xuXG4gICAgICBtYXggPSBNYXRoLm1heCh4ICsgaGFsZldpZHRoLCBtYXgpO1xuICAgICAgbWluID0gTWF0aC5taW4oeCAtIGhhbGZXaWR0aCwgbWluKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtYXggLSBtaW47XG4gIH0pO1xufVxuXG4vKlxuICogQWxpZ24gdGhlIGNvb3JkaW5hdGVzIG9mIGVhY2ggb2YgdGhlIGxheW91dCBhbGlnbm1lbnRzIHN1Y2ggdGhhdFxuICogbGVmdC1iaWFzZWQgYWxpZ25tZW50cyBoYXZlIHRoZWlyIG1pbmltdW0gY29vcmRpbmF0ZSBhdCB0aGUgc2FtZSBwb2ludCBhc1xuICogdGhlIG1pbmltdW0gY29vcmRpbmF0ZSBvZiB0aGUgc21hbGxlc3Qgd2lkdGggYWxpZ25tZW50IGFuZCByaWdodC1iaWFzZWRcbiAqIGFsaWdubWVudHMgaGF2ZSB0aGVpciBtYXhpbXVtIGNvb3JkaW5hdGUgYXQgdGhlIHNhbWUgcG9pbnQgYXMgdGhlIG1heGltdW1cbiAqIGNvb3JkaW5hdGUgb2YgdGhlIHNtYWxsZXN0IHdpZHRoIGFsaWdubWVudC5cbiAqL1xuZnVuY3Rpb24gYWxpZ25Db29yZGluYXRlcyh4c3MsIGFsaWduVG8pIHtcbiAgdmFyIGFsaWduVG9WYWxzID0gXy52YWx1ZXMoYWxpZ25UbyksXG4gICAgYWxpZ25Ub01pbiA9IF8ubWluKGFsaWduVG9WYWxzKSxcbiAgICBhbGlnblRvTWF4ID0gXy5tYXgoYWxpZ25Ub1ZhbHMpO1xuXG4gIF8uZm9yRWFjaChbJ3UnLCAnZCddLCBmdW5jdGlvbiAodmVydCkge1xuICAgIF8uZm9yRWFjaChbJ2wnLCAnciddLCBmdW5jdGlvbiAoaG9yaXopIHtcbiAgICAgIHZhciBhbGlnbm1lbnQgPSB2ZXJ0ICsgaG9yaXosXG4gICAgICAgIHhzID0geHNzW2FsaWdubWVudF0sXG4gICAgICAgIGRlbHRhO1xuICAgICAgaWYgKHhzID09PSBhbGlnblRvKSByZXR1cm47XG5cbiAgICAgIHZhciB4c1ZhbHMgPSBfLnZhbHVlcyh4cyk7XG4gICAgICBkZWx0YSA9IGhvcml6ID09PSAnbCcgPyBhbGlnblRvTWluIC0gXy5taW4oeHNWYWxzKSA6IGFsaWduVG9NYXggLSBfLm1heCh4c1ZhbHMpO1xuXG4gICAgICBpZiAoZGVsdGEpIHtcbiAgICAgICAgeHNzW2FsaWdubWVudF0gPSBfLm1hcFZhbHVlcyh4cywgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICByZXR1cm4geCArIGRlbHRhO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGJhbGFuY2UoeHNzLCBhbGlnbikge1xuICByZXR1cm4gXy5tYXBWYWx1ZXMoeHNzLnVsLCBmdW5jdGlvbiAoaWdub3JlLCB2KSB7XG4gICAgaWYgKGFsaWduKSB7XG4gICAgICByZXR1cm4geHNzW2FsaWduLnRvTG93ZXJDYXNlKCldW3ZdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgeHMgPSBfLnNvcnRCeShfLm1hcCh4c3MsIHYpKTtcbiAgICAgIHJldHVybiAoeHNbMV0gKyB4c1syXSkgLyAyO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uWChnKSB7XG4gIHZhciBsYXllcmluZyA9IHV0aWwuYnVpbGRMYXllck1hdHJpeChnKTtcbiAgdmFyIGNvbmZsaWN0cyA9IF8ubWVyZ2UoZmluZFR5cGUxQ29uZmxpY3RzKGcsIGxheWVyaW5nKSwgZmluZFR5cGUyQ29uZmxpY3RzKGcsIGxheWVyaW5nKSk7XG5cbiAgdmFyIHhzcyA9IHt9O1xuICB2YXIgYWRqdXN0ZWRMYXllcmluZztcbiAgXy5mb3JFYWNoKFsndScsICdkJ10sIGZ1bmN0aW9uICh2ZXJ0KSB7XG4gICAgYWRqdXN0ZWRMYXllcmluZyA9IHZlcnQgPT09ICd1JyA/IGxheWVyaW5nIDogXy52YWx1ZXMobGF5ZXJpbmcpLnJldmVyc2UoKTtcbiAgICBfLmZvckVhY2goWydsJywgJ3InXSwgZnVuY3Rpb24gKGhvcml6KSB7XG4gICAgICBpZiAoaG9yaXogPT09ICdyJykge1xuICAgICAgICBhZGp1c3RlZExheWVyaW5nID0gXy5tYXAoYWRqdXN0ZWRMYXllcmluZywgZnVuY3Rpb24gKGlubmVyKSB7XG4gICAgICAgICAgcmV0dXJuIF8udmFsdWVzKGlubmVyKS5yZXZlcnNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmVpZ2hib3JGbiA9ICh2ZXJ0ID09PSAndScgPyBnLnByZWRlY2Vzc29ycyA6IGcuc3VjY2Vzc29ycykuYmluZChnKTtcbiAgICAgIHZhciBhbGlnbiA9IHZlcnRpY2FsQWxpZ25tZW50KGcsIGFkanVzdGVkTGF5ZXJpbmcsIGNvbmZsaWN0cywgbmVpZ2hib3JGbik7XG4gICAgICB2YXIgeHMgPSBob3Jpem9udGFsQ29tcGFjdGlvbihnLCBhZGp1c3RlZExheWVyaW5nLCBhbGlnbi5yb290LCBhbGlnbi5hbGlnbiwgaG9yaXogPT09ICdyJyk7XG4gICAgICBpZiAoaG9yaXogPT09ICdyJykge1xuICAgICAgICB4cyA9IF8ubWFwVmFsdWVzKHhzLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgIHJldHVybiAteDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB4c3NbdmVydCArIGhvcml6XSA9IHhzO1xuICAgIH0pO1xuICB9KTtcblxuICB2YXIgc21hbGxlc3RXaWR0aCA9IGZpbmRTbWFsbGVzdFdpZHRoQWxpZ25tZW50KGcsIHhzcyk7XG4gIGFsaWduQ29vcmRpbmF0ZXMoeHNzLCBzbWFsbGVzdFdpZHRoKTtcbiAgcmV0dXJuIGJhbGFuY2UoeHNzLCBnLmdyYXBoKCkuYWxpZ24pO1xufVxuXG5mdW5jdGlvbiBzZXAobm9kZVNlcCwgZWRnZVNlcCwgcmV2ZXJzZVNlcCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGcsIHYsIHcpIHtcbiAgICB2YXIgdkxhYmVsID0gZy5ub2RlKHYpO1xuICAgIHZhciB3TGFiZWwgPSBnLm5vZGUodyk7XG4gICAgdmFyIHN1bSA9IDA7XG4gICAgdmFyIGRlbHRhO1xuXG4gICAgc3VtICs9IHZMYWJlbC53aWR0aCAvIDI7XG4gICAgaWYgKF8uaGFzKHZMYWJlbCwgJ2xhYmVscG9zJykpIHtcbiAgICAgIHN3aXRjaCAodkxhYmVsLmxhYmVscG9zLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgZGVsdGEgPSAtdkxhYmVsLndpZHRoIC8gMjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncic6XG4gICAgICAgICAgZGVsdGEgPSB2TGFiZWwud2lkdGggLyAyO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGVsdGEpIHtcbiAgICAgIHN1bSArPSByZXZlcnNlU2VwID8gZGVsdGEgOiAtZGVsdGE7XG4gICAgfVxuICAgIGRlbHRhID0gMDtcblxuICAgIHN1bSArPSAodkxhYmVsLmR1bW15ID8gZWRnZVNlcCA6IG5vZGVTZXApIC8gMjtcbiAgICBzdW0gKz0gKHdMYWJlbC5kdW1teSA/IGVkZ2VTZXAgOiBub2RlU2VwKSAvIDI7XG5cbiAgICBzdW0gKz0gd0xhYmVsLndpZHRoIC8gMjtcbiAgICBpZiAoXy5oYXMod0xhYmVsLCAnbGFiZWxwb3MnKSkge1xuICAgICAgc3dpdGNoICh3TGFiZWwubGFiZWxwb3MudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICBkZWx0YSA9IHdMYWJlbC53aWR0aCAvIDI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3InOlxuICAgICAgICAgIGRlbHRhID0gLXdMYWJlbC53aWR0aCAvIDI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkZWx0YSkge1xuICAgICAgc3VtICs9IHJldmVyc2VTZXAgPyBkZWx0YSA6IC1kZWx0YTtcbiAgICB9XG4gICAgZGVsdGEgPSAwO1xuXG4gICAgcmV0dXJuIHN1bTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gd2lkdGgoZywgdikge1xuICByZXR1cm4gZy5ub2RlKHYpLndpZHRoO1xufVxuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi91dGlsLmpzJztcbmltcG9ydCB7IHBvc2l0aW9uWCB9IGZyb20gJy4vYmsuanMnO1xuXG5leHBvcnQgeyBwb3NpdGlvbiB9O1xuXG5mdW5jdGlvbiBwb3NpdGlvbihnKSB7XG4gIGcgPSB1dGlsLmFzTm9uQ29tcG91bmRHcmFwaChnKTtcblxuICBwb3NpdGlvblkoZyk7XG4gIF8uZm9yT3duKHBvc2l0aW9uWChnKSwgZnVuY3Rpb24gKHgsIHYpIHtcbiAgICBnLm5vZGUodikueCA9IHg7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvblkoZykge1xuICB2YXIgbGF5ZXJpbmcgPSB1dGlsLmJ1aWxkTGF5ZXJNYXRyaXgoZyk7XG4gIHZhciByYW5rU2VwID0gZy5ncmFwaCgpLnJhbmtzZXA7XG4gIHZhciBwcmV2WSA9IDA7XG4gIF8uZm9yRWFjaChsYXllcmluZywgZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgdmFyIG1heEhlaWdodCA9IF8ubWF4KFxuICAgICAgXy5tYXAobGF5ZXIsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBnLm5vZGUodikuaGVpZ2h0O1xuICAgICAgfSlcbiAgICApO1xuICAgIF8uZm9yRWFjaChsYXllciwgZnVuY3Rpb24gKHYpIHtcbiAgICAgIGcubm9kZSh2KS55ID0gcHJldlkgKyBtYXhIZWlnaHQgLyAyO1xuICAgIH0pO1xuICAgIHByZXZZICs9IG1heEhlaWdodCArIHJhbmtTZXA7XG4gIH0pO1xufVxuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgR3JhcGggfSBmcm9tICcuLi9ncmFwaGxpYi9pbmRleC5qcyc7XG5pbXBvcnQgeyBhZGRCb3JkZXJTZWdtZW50cyB9IGZyb20gJy4vYWRkLWJvcmRlci1zZWdtZW50cy5qcyc7XG5pbXBvcnQgKiBhcyBjb29yZGluYXRlU3lzdGVtIGZyb20gJy4vY29vcmRpbmF0ZS1zeXN0ZW0uanMnO1xuaW1wb3J0ICogYXMgYWN5Y2xpYyBmcm9tICcuL2FjeWNsaWMuanMnO1xuaW1wb3J0ICogYXMgbm9ybWFsaXplIGZyb20gJy4vbm9ybWFsaXplLmpzJztcbmltcG9ydCB7IHJhbmsgfSBmcm9tICcuL3JhbmsvaW5kZXguanMnO1xuaW1wb3J0ICogYXMgbmVzdGluZ0dyYXBoIGZyb20gJy4vbmVzdGluZy1ncmFwaC5qcyc7XG5pbXBvcnQgeyBvcmRlciB9IGZyb20gJy4vb3JkZXIvaW5kZXguanMnO1xuaW1wb3J0IHsgcGFyZW50RHVtbXlDaGFpbnMgfSBmcm9tICcuL3BhcmVudC1kdW1teS1jaGFpbnMuanMnO1xuaW1wb3J0IHsgcG9zaXRpb24gfSBmcm9tICcuL3Bvc2l0aW9uL2luZGV4LmpzJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsLmpzJztcblxuZXhwb3J0IHsgbGF5b3V0IH07XG5cbmZ1bmN0aW9uIGxheW91dChnLCBvcHRzKSB7XG4gIHZhciB0aW1lID0gb3B0cyAmJiBvcHRzLmRlYnVnVGltaW5nID8gdXRpbC50aW1lIDogdXRpbC5ub3RpbWU7XG4gIHRpbWUoJ2xheW91dCcsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGF5b3V0R3JhcGggPSB0aW1lKCcgIGJ1aWxkTGF5b3V0R3JhcGgnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYnVpbGRMYXlvdXRHcmFwaChnKTtcbiAgICB9KTtcbiAgICB0aW1lKCcgIHJ1bkxheW91dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJ1bkxheW91dChsYXlvdXRHcmFwaCwgdGltZSk7XG4gICAgfSk7XG4gICAgdGltZSgnICB1cGRhdGVJbnB1dEdyYXBoJywgZnVuY3Rpb24gKCkge1xuICAgICAgdXBkYXRlSW5wdXRHcmFwaChnLCBsYXlvdXRHcmFwaCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBydW5MYXlvdXQoZywgdGltZSkge1xuICB0aW1lKCcgICAgbWFrZVNwYWNlRm9yRWRnZUxhYmVscycsIGZ1bmN0aW9uICgpIHtcbiAgICBtYWtlU3BhY2VGb3JFZGdlTGFiZWxzKGcpO1xuICB9KTtcbiAgdGltZSgnICAgIHJlbW92ZVNlbGZFZGdlcycsIGZ1bmN0aW9uICgpIHtcbiAgICByZW1vdmVTZWxmRWRnZXMoZyk7XG4gIH0pO1xuICB0aW1lKCcgICAgYWN5Y2xpYycsIGZ1bmN0aW9uICgpIHtcbiAgICBhY3ljbGljLnJ1bihnKTtcbiAgfSk7XG4gIHRpbWUoJyAgICBuZXN0aW5nR3JhcGgucnVuJywgZnVuY3Rpb24gKCkge1xuICAgIG5lc3RpbmdHcmFwaC5ydW4oZyk7XG4gIH0pO1xuICB0aW1lKCcgICAgcmFuaycsIGZ1bmN0aW9uICgpIHtcbiAgICByYW5rKHV0aWwuYXNOb25Db21wb3VuZEdyYXBoKGcpKTtcbiAgfSk7XG4gIHRpbWUoJyAgICBpbmplY3RFZGdlTGFiZWxQcm94aWVzJywgZnVuY3Rpb24gKCkge1xuICAgIGluamVjdEVkZ2VMYWJlbFByb3hpZXMoZyk7XG4gIH0pO1xuICB0aW1lKCcgICAgcmVtb3ZlRW1wdHlSYW5rcycsIGZ1bmN0aW9uICgpIHtcbiAgICB1dGlsLnJlbW92ZUVtcHR5UmFua3MoZyk7XG4gIH0pO1xuICB0aW1lKCcgICAgbmVzdGluZ0dyYXBoLmNsZWFudXAnLCBmdW5jdGlvbiAoKSB7XG4gICAgbmVzdGluZ0dyYXBoLmNsZWFudXAoZyk7XG4gIH0pO1xuICB0aW1lKCcgICAgbm9ybWFsaXplUmFua3MnLCBmdW5jdGlvbiAoKSB7XG4gICAgdXRpbC5ub3JtYWxpemVSYW5rcyhnKTtcbiAgfSk7XG4gIHRpbWUoJyAgICBhc3NpZ25SYW5rTWluTWF4JywgZnVuY3Rpb24gKCkge1xuICAgIGFzc2lnblJhbmtNaW5NYXgoZyk7XG4gIH0pO1xuICB0aW1lKCcgICAgcmVtb3ZlRWRnZUxhYmVsUHJveGllcycsIGZ1bmN0aW9uICgpIHtcbiAgICByZW1vdmVFZGdlTGFiZWxQcm94aWVzKGcpO1xuICB9KTtcbiAgdGltZSgnICAgIG5vcm1hbGl6ZS5ydW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgbm9ybWFsaXplLnJ1bihnKTtcbiAgfSk7XG4gIHRpbWUoJyAgICBwYXJlbnREdW1teUNoYWlucycsIGZ1bmN0aW9uICgpIHtcbiAgICBwYXJlbnREdW1teUNoYWlucyhnKTtcbiAgfSk7XG4gIHRpbWUoJyAgICBhZGRCb3JkZXJTZWdtZW50cycsIGZ1bmN0aW9uICgpIHtcbiAgICBhZGRCb3JkZXJTZWdtZW50cyhnKTtcbiAgfSk7XG4gIHRpbWUoJyAgICBvcmRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICBvcmRlcihnKTtcbiAgfSk7XG4gIHRpbWUoJyAgICBpbnNlcnRTZWxmRWRnZXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgaW5zZXJ0U2VsZkVkZ2VzKGcpO1xuICB9KTtcbiAgdGltZSgnICAgIGFkanVzdENvb3JkaW5hdGVTeXN0ZW0nLCBmdW5jdGlvbiAoKSB7XG4gICAgY29vcmRpbmF0ZVN5c3RlbS5hZGp1c3QoZyk7XG4gIH0pO1xuICB0aW1lKCcgICAgcG9zaXRpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgcG9zaXRpb24oZyk7XG4gIH0pO1xuICB0aW1lKCcgICAgcG9zaXRpb25TZWxmRWRnZXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgcG9zaXRpb25TZWxmRWRnZXMoZyk7XG4gIH0pO1xuICB0aW1lKCcgICAgcmVtb3ZlQm9yZGVyTm9kZXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmVtb3ZlQm9yZGVyTm9kZXMoZyk7XG4gIH0pO1xuICB0aW1lKCcgICAgbm9ybWFsaXplLnVuZG8nLCBmdW5jdGlvbiAoKSB7XG4gICAgbm9ybWFsaXplLnVuZG8oZyk7XG4gIH0pO1xuICB0aW1lKCcgICAgZml4dXBFZGdlTGFiZWxDb29yZHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgZml4dXBFZGdlTGFiZWxDb29yZHMoZyk7XG4gIH0pO1xuICB0aW1lKCcgICAgdW5kb0Nvb3JkaW5hdGVTeXN0ZW0nLCBmdW5jdGlvbiAoKSB7XG4gICAgY29vcmRpbmF0ZVN5c3RlbS51bmRvKGcpO1xuICB9KTtcbiAgdGltZSgnICAgIHRyYW5zbGF0ZUdyYXBoJywgZnVuY3Rpb24gKCkge1xuICAgIHRyYW5zbGF0ZUdyYXBoKGcpO1xuICB9KTtcbiAgdGltZSgnICAgIGFzc2lnbk5vZGVJbnRlcnNlY3RzJywgZnVuY3Rpb24gKCkge1xuICAgIGFzc2lnbk5vZGVJbnRlcnNlY3RzKGcpO1xuICB9KTtcbiAgdGltZSgnICAgIHJldmVyc2VQb2ludHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV2ZXJzZVBvaW50c0ZvclJldmVyc2VkRWRnZXMoZyk7XG4gIH0pO1xuICB0aW1lKCcgICAgYWN5Y2xpYy51bmRvJywgZnVuY3Rpb24gKCkge1xuICAgIGFjeWNsaWMudW5kbyhnKTtcbiAgfSk7XG59XG5cbi8qXG4gKiBDb3BpZXMgZmluYWwgbGF5b3V0IGluZm9ybWF0aW9uIGZyb20gdGhlIGxheW91dCBncmFwaCBiYWNrIHRvIHRoZSBpbnB1dFxuICogZ3JhcGguIFRoaXMgcHJvY2VzcyBvbmx5IGNvcGllcyB3aGl0ZWxpc3RlZCBhdHRyaWJ1dGVzIGZyb20gdGhlIGxheW91dCBncmFwaFxuICogdG8gdGhlIGlucHV0IGdyYXBoLCBzbyBpdCBzZXJ2ZXMgYXMgYSBnb29kIHBsYWNlIHRvIGRldGVybWluZSB3aGF0XG4gKiBhdHRyaWJ1dGVzIGNhbiBpbmZsdWVuY2UgbGF5b3V0LlxuICovXG5mdW5jdGlvbiB1cGRhdGVJbnB1dEdyYXBoKGlucHV0R3JhcGgsIGxheW91dEdyYXBoKSB7XG4gIF8uZm9yRWFjaChpbnB1dEdyYXBoLm5vZGVzKCksIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIGlucHV0TGFiZWwgPSBpbnB1dEdyYXBoLm5vZGUodik7XG4gICAgdmFyIGxheW91dExhYmVsID0gbGF5b3V0R3JhcGgubm9kZSh2KTtcblxuICAgIGlmIChpbnB1dExhYmVsKSB7XG4gICAgICBpbnB1dExhYmVsLnggPSBsYXlvdXRMYWJlbC54O1xuICAgICAgaW5wdXRMYWJlbC55ID0gbGF5b3V0TGFiZWwueTtcblxuICAgICAgaWYgKGxheW91dEdyYXBoLmNoaWxkcmVuKHYpLmxlbmd0aCkge1xuICAgICAgICBpbnB1dExhYmVsLndpZHRoID0gbGF5b3V0TGFiZWwud2lkdGg7XG4gICAgICAgIGlucHV0TGFiZWwuaGVpZ2h0ID0gbGF5b3V0TGFiZWwuaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgXy5mb3JFYWNoKGlucHV0R3JhcGguZWRnZXMoKSwgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgaW5wdXRMYWJlbCA9IGlucHV0R3JhcGguZWRnZShlKTtcbiAgICB2YXIgbGF5b3V0TGFiZWwgPSBsYXlvdXRHcmFwaC5lZGdlKGUpO1xuXG4gICAgaW5wdXRMYWJlbC5wb2ludHMgPSBsYXlvdXRMYWJlbC5wb2ludHM7XG4gICAgaWYgKF8uaGFzKGxheW91dExhYmVsLCAneCcpKSB7XG4gICAgICBpbnB1dExhYmVsLnggPSBsYXlvdXRMYWJlbC54O1xuICAgICAgaW5wdXRMYWJlbC55ID0gbGF5b3V0TGFiZWwueTtcbiAgICB9XG4gIH0pO1xuXG4gIGlucHV0R3JhcGguZ3JhcGgoKS53aWR0aCA9IGxheW91dEdyYXBoLmdyYXBoKCkud2lkdGg7XG4gIGlucHV0R3JhcGguZ3JhcGgoKS5oZWlnaHQgPSBsYXlvdXRHcmFwaC5ncmFwaCgpLmhlaWdodDtcbn1cblxudmFyIGdyYXBoTnVtQXR0cnMgPSBbJ25vZGVzZXAnLCAnZWRnZXNlcCcsICdyYW5rc2VwJywgJ21hcmdpbngnLCAnbWFyZ2lueSddO1xudmFyIGdyYXBoRGVmYXVsdHMgPSB7IHJhbmtzZXA6IDUwLCBlZGdlc2VwOiAyMCwgbm9kZXNlcDogNTAsIHJhbmtkaXI6ICd0YicgfTtcbnZhciBncmFwaEF0dHJzID0gWydhY3ljbGljZXInLCAncmFua2VyJywgJ3JhbmtkaXInLCAnYWxpZ24nXTtcbnZhciBub2RlTnVtQXR0cnMgPSBbJ3dpZHRoJywgJ2hlaWdodCddO1xudmFyIG5vZGVEZWZhdWx0cyA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xudmFyIGVkZ2VOdW1BdHRycyA9IFsnbWlubGVuJywgJ3dlaWdodCcsICd3aWR0aCcsICdoZWlnaHQnLCAnbGFiZWxvZmZzZXQnXTtcbnZhciBlZGdlRGVmYXVsdHMgPSB7XG4gIG1pbmxlbjogMSxcbiAgd2VpZ2h0OiAxLFxuICB3aWR0aDogMCxcbiAgaGVpZ2h0OiAwLFxuICBsYWJlbG9mZnNldDogMTAsXG4gIGxhYmVscG9zOiAncicsXG59O1xudmFyIGVkZ2VBdHRycyA9IFsnbGFiZWxwb3MnXTtcblxuLypcbiAqIENvbnN0cnVjdHMgYSBuZXcgZ3JhcGggZnJvbSB0aGUgaW5wdXQgZ3JhcGgsIHdoaWNoIGNhbiBiZSB1c2VkIGZvciBsYXlvdXQuXG4gKiBUaGlzIHByb2Nlc3MgY29waWVzIG9ubHkgd2hpdGVsaXN0ZWQgYXR0cmlidXRlcyBmcm9tIHRoZSBpbnB1dCBncmFwaCB0byB0aGVcbiAqIGxheW91dCBncmFwaC4gVGh1cyB0aGlzIGZ1bmN0aW9uIHNlcnZlcyBhcyBhIGdvb2QgcGxhY2UgdG8gZGV0ZXJtaW5lIHdoYXRcbiAqIGF0dHJpYnV0ZXMgY2FuIGluZmx1ZW5jZSBsYXlvdXQuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTGF5b3V0R3JhcGgoaW5wdXRHcmFwaCkge1xuICB2YXIgZyA9IG5ldyBHcmFwaCh7IG11bHRpZ3JhcGg6IHRydWUsIGNvbXBvdW5kOiB0cnVlIH0pO1xuICB2YXIgZ3JhcGggPSBjYW5vbmljYWxpemUoaW5wdXRHcmFwaC5ncmFwaCgpKTtcblxuICBnLnNldEdyYXBoKFxuICAgIF8ubWVyZ2Uoe30sIGdyYXBoRGVmYXVsdHMsIHNlbGVjdE51bWJlckF0dHJzKGdyYXBoLCBncmFwaE51bUF0dHJzKSwgXy5waWNrKGdyYXBoLCBncmFwaEF0dHJzKSlcbiAgKTtcblxuICBfLmZvckVhY2goaW5wdXRHcmFwaC5ub2RlcygpLCBmdW5jdGlvbiAodikge1xuICAgIHZhciBub2RlID0gY2Fub25pY2FsaXplKGlucHV0R3JhcGgubm9kZSh2KSk7XG4gICAgZy5zZXROb2RlKHYsIF8uZGVmYXVsdHMoc2VsZWN0TnVtYmVyQXR0cnMobm9kZSwgbm9kZU51bUF0dHJzKSwgbm9kZURlZmF1bHRzKSk7XG4gICAgZy5zZXRQYXJlbnQodiwgaW5wdXRHcmFwaC5wYXJlbnQodikpO1xuICB9KTtcblxuICBfLmZvckVhY2goaW5wdXRHcmFwaC5lZGdlcygpLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBlZGdlID0gY2Fub25pY2FsaXplKGlucHV0R3JhcGguZWRnZShlKSk7XG4gICAgZy5zZXRFZGdlKFxuICAgICAgZSxcbiAgICAgIF8ubWVyZ2Uoe30sIGVkZ2VEZWZhdWx0cywgc2VsZWN0TnVtYmVyQXR0cnMoZWRnZSwgZWRnZU51bUF0dHJzKSwgXy5waWNrKGVkZ2UsIGVkZ2VBdHRycykpXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGc7XG59XG5cbi8qXG4gKiBUaGlzIGlkZWEgY29tZXMgZnJvbSB0aGUgR2Fuc25lciBwYXBlcjogdG8gYWNjb3VudCBmb3IgZWRnZSBsYWJlbHMgaW4gb3VyXG4gKiBsYXlvdXQgd2Ugc3BsaXQgZWFjaCByYW5rIGluIGhhbGYgYnkgZG91YmxpbmcgbWlubGVuIGFuZCBoYWx2aW5nIHJhbmtzZXAuXG4gKiBUaGVuIHdlIGNhbiBwbGFjZSBsYWJlbHMgYXQgdGhlc2UgbWlkLXBvaW50cyBiZXR3ZWVuIG5vZGVzLlxuICpcbiAqIFdlIGFsc28gYWRkIHNvbWUgbWluaW1hbCBwYWRkaW5nIHRvIHRoZSB3aWR0aCB0byBwdXNoIHRoZSBsYWJlbCBmb3IgdGhlIGVkZ2VcbiAqIGF3YXkgZnJvbSB0aGUgZWRnZSBpdHNlbGYgYSBiaXQuXG4gKi9cbmZ1bmN0aW9uIG1ha2VTcGFjZUZvckVkZ2VMYWJlbHMoZykge1xuICB2YXIgZ3JhcGggPSBnLmdyYXBoKCk7XG4gIGdyYXBoLnJhbmtzZXAgLz0gMjtcbiAgXy5mb3JFYWNoKGcuZWRnZXMoKSwgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgZWRnZSA9IGcuZWRnZShlKTtcbiAgICBlZGdlLm1pbmxlbiAqPSAyO1xuICAgIGlmIChlZGdlLmxhYmVscG9zLnRvTG93ZXJDYXNlKCkgIT09ICdjJykge1xuICAgICAgaWYgKGdyYXBoLnJhbmtkaXIgPT09ICdUQicgfHwgZ3JhcGgucmFua2RpciA9PT0gJ0JUJykge1xuICAgICAgICBlZGdlLndpZHRoICs9IGVkZ2UubGFiZWxvZmZzZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlZGdlLmhlaWdodCArPSBlZGdlLmxhYmVsb2Zmc2V0O1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qXG4gKiBDcmVhdGVzIHRlbXBvcmFyeSBkdW1teSBub2RlcyB0aGF0IGNhcHR1cmUgdGhlIHJhbmsgaW4gd2hpY2ggZWFjaCBlZGdlJ3NcbiAqIGxhYmVsIGlzIGdvaW5nIHRvLCBpZiBpdCBoYXMgb25lIG9mIG5vbi16ZXJvIHdpZHRoIGFuZCBoZWlnaHQuIFdlIGRvIHRoaXNcbiAqIHNvIHRoYXQgd2UgY2FuIHNhZmVseSByZW1vdmUgZW1wdHkgcmFua3Mgd2hpbGUgcHJlc2VydmluZyBiYWxhbmNlIGZvciB0aGVcbiAqIGxhYmVsJ3MgcG9zaXRpb24uXG4gKi9cbmZ1bmN0aW9uIGluamVjdEVkZ2VMYWJlbFByb3hpZXMoZykge1xuICBfLmZvckVhY2goZy5lZGdlcygpLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBlZGdlID0gZy5lZGdlKGUpO1xuICAgIGlmIChlZGdlLndpZHRoICYmIGVkZ2UuaGVpZ2h0KSB7XG4gICAgICB2YXIgdiA9IGcubm9kZShlLnYpO1xuICAgICAgdmFyIHcgPSBnLm5vZGUoZS53KTtcbiAgICAgIHZhciBsYWJlbCA9IHsgcmFuazogKHcucmFuayAtIHYucmFuaykgLyAyICsgdi5yYW5rLCBlOiBlIH07XG4gICAgICB1dGlsLmFkZER1bW15Tm9kZShnLCAnZWRnZS1wcm94eScsIGxhYmVsLCAnX2VwJyk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduUmFua01pbk1heChnKSB7XG4gIHZhciBtYXhSYW5rID0gMDtcbiAgXy5mb3JFYWNoKGcubm9kZXMoKSwgZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgbm9kZSA9IGcubm9kZSh2KTtcbiAgICBpZiAobm9kZS5ib3JkZXJUb3ApIHtcbiAgICAgIG5vZGUubWluUmFuayA9IGcubm9kZShub2RlLmJvcmRlclRvcCkucmFuaztcbiAgICAgIG5vZGUubWF4UmFuayA9IGcubm9kZShub2RlLmJvcmRlckJvdHRvbSkucmFuaztcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgIG1heFJhbmsgPSBfLm1heChtYXhSYW5rLCBub2RlLm1heFJhbmspO1xuICAgIH1cbiAgfSk7XG4gIGcuZ3JhcGgoKS5tYXhSYW5rID0gbWF4UmFuaztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRWRnZUxhYmVsUHJveGllcyhnKSB7XG4gIF8uZm9yRWFjaChnLm5vZGVzKCksIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIG5vZGUgPSBnLm5vZGUodik7XG4gICAgaWYgKG5vZGUuZHVtbXkgPT09ICdlZGdlLXByb3h5Jykge1xuICAgICAgZy5lZGdlKG5vZGUuZSkubGFiZWxSYW5rID0gbm9kZS5yYW5rO1xuICAgICAgZy5yZW1vdmVOb2RlKHYpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZUdyYXBoKGcpIHtcbiAgdmFyIG1pblggPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gIHZhciBtYXhYID0gMDtcbiAgdmFyIG1pblkgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gIHZhciBtYXhZID0gMDtcbiAgdmFyIGdyYXBoTGFiZWwgPSBnLmdyYXBoKCk7XG4gIHZhciBtYXJnaW5YID0gZ3JhcGhMYWJlbC5tYXJnaW54IHx8IDA7XG4gIHZhciBtYXJnaW5ZID0gZ3JhcGhMYWJlbC5tYXJnaW55IHx8IDA7XG5cbiAgZnVuY3Rpb24gZ2V0RXh0cmVtZXMoYXR0cnMpIHtcbiAgICB2YXIgeCA9IGF0dHJzLng7XG4gICAgdmFyIHkgPSBhdHRycy55O1xuICAgIHZhciB3ID0gYXR0cnMud2lkdGg7XG4gICAgdmFyIGggPSBhdHRycy5oZWlnaHQ7XG4gICAgbWluWCA9IE1hdGgubWluKG1pblgsIHggLSB3IC8gMik7XG4gICAgbWF4WCA9IE1hdGgubWF4KG1heFgsIHggKyB3IC8gMik7XG4gICAgbWluWSA9IE1hdGgubWluKG1pblksIHkgLSBoIC8gMik7XG4gICAgbWF4WSA9IE1hdGgubWF4KG1heFksIHkgKyBoIC8gMik7XG4gIH1cblxuICBfLmZvckVhY2goZy5ub2RlcygpLCBmdW5jdGlvbiAodikge1xuICAgIGdldEV4dHJlbWVzKGcubm9kZSh2KSk7XG4gIH0pO1xuICBfLmZvckVhY2goZy5lZGdlcygpLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBlZGdlID0gZy5lZGdlKGUpO1xuICAgIGlmIChfLmhhcyhlZGdlLCAneCcpKSB7XG4gICAgICBnZXRFeHRyZW1lcyhlZGdlKTtcbiAgICB9XG4gIH0pO1xuXG4gIG1pblggLT0gbWFyZ2luWDtcbiAgbWluWSAtPSBtYXJnaW5ZO1xuXG4gIF8uZm9yRWFjaChnLm5vZGVzKCksIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIG5vZGUgPSBnLm5vZGUodik7XG4gICAgbm9kZS54IC09IG1pblg7XG4gICAgbm9kZS55IC09IG1pblk7XG4gIH0pO1xuXG4gIF8uZm9yRWFjaChnLmVkZ2VzKCksIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGVkZ2UgPSBnLmVkZ2UoZSk7XG4gICAgXy5mb3JFYWNoKGVkZ2UucG9pbnRzLCBmdW5jdGlvbiAocCkge1xuICAgICAgcC54IC09IG1pblg7XG4gICAgICBwLnkgLT0gbWluWTtcbiAgICB9KTtcbiAgICBpZiAoXy5oYXMoZWRnZSwgJ3gnKSkge1xuICAgICAgZWRnZS54IC09IG1pblg7XG4gICAgfVxuICAgIGlmIChfLmhhcyhlZGdlLCAneScpKSB7XG4gICAgICBlZGdlLnkgLT0gbWluWTtcbiAgICB9XG4gIH0pO1xuXG4gIGdyYXBoTGFiZWwud2lkdGggPSBtYXhYIC0gbWluWCArIG1hcmdpblg7XG4gIGdyYXBoTGFiZWwuaGVpZ2h0ID0gbWF4WSAtIG1pblkgKyBtYXJnaW5ZO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25Ob2RlSW50ZXJzZWN0cyhnKSB7XG4gIF8uZm9yRWFjaChnLmVkZ2VzKCksIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGVkZ2UgPSBnLmVkZ2UoZSk7XG4gICAgdmFyIG5vZGVWID0gZy5ub2RlKGUudik7XG4gICAgdmFyIG5vZGVXID0gZy5ub2RlKGUudyk7XG4gICAgdmFyIHAxLCBwMjtcbiAgICBpZiAoIWVkZ2UucG9pbnRzKSB7XG4gICAgICBlZGdlLnBvaW50cyA9IFtdO1xuICAgICAgcDEgPSBub2RlVztcbiAgICAgIHAyID0gbm9kZVY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHAxID0gZWRnZS5wb2ludHNbMF07XG4gICAgICBwMiA9IGVkZ2UucG9pbnRzW2VkZ2UucG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgICBlZGdlLnBvaW50cy51bnNoaWZ0KHV0aWwuaW50ZXJzZWN0UmVjdChub2RlViwgcDEpKTtcbiAgICBlZGdlLnBvaW50cy5wdXNoKHV0aWwuaW50ZXJzZWN0UmVjdChub2RlVywgcDIpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpeHVwRWRnZUxhYmVsQ29vcmRzKGcpIHtcbiAgXy5mb3JFYWNoKGcuZWRnZXMoKSwgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgZWRnZSA9IGcuZWRnZShlKTtcbiAgICBpZiAoXy5oYXMoZWRnZSwgJ3gnKSkge1xuICAgICAgaWYgKGVkZ2UubGFiZWxwb3MgPT09ICdsJyB8fCBlZGdlLmxhYmVscG9zID09PSAncicpIHtcbiAgICAgICAgZWRnZS53aWR0aCAtPSBlZGdlLmxhYmVsb2Zmc2V0O1xuICAgICAgfVxuICAgICAgc3dpdGNoIChlZGdlLmxhYmVscG9zKSB7XG4gICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgIGVkZ2UueCAtPSBlZGdlLndpZHRoIC8gMiArIGVkZ2UubGFiZWxvZmZzZXQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3InOlxuICAgICAgICAgIGVkZ2UueCArPSBlZGdlLndpZHRoIC8gMiArIGVkZ2UubGFiZWxvZmZzZXQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmV2ZXJzZVBvaW50c0ZvclJldmVyc2VkRWRnZXMoZykge1xuICBfLmZvckVhY2goZy5lZGdlcygpLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBlZGdlID0gZy5lZGdlKGUpO1xuICAgIGlmIChlZGdlLnJldmVyc2VkKSB7XG4gICAgICBlZGdlLnBvaW50cy5yZXZlcnNlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQm9yZGVyTm9kZXMoZykge1xuICBfLmZvckVhY2goZy5ub2RlcygpLCBmdW5jdGlvbiAodikge1xuICAgIGlmIChnLmNoaWxkcmVuKHYpLmxlbmd0aCkge1xuICAgICAgdmFyIG5vZGUgPSBnLm5vZGUodik7XG4gICAgICB2YXIgdCA9IGcubm9kZShub2RlLmJvcmRlclRvcCk7XG4gICAgICB2YXIgYiA9IGcubm9kZShub2RlLmJvcmRlckJvdHRvbSk7XG4gICAgICB2YXIgbCA9IGcubm9kZShfLmxhc3Qobm9kZS5ib3JkZXJMZWZ0KSk7XG4gICAgICB2YXIgciA9IGcubm9kZShfLmxhc3Qobm9kZS5ib3JkZXJSaWdodCkpO1xuXG4gICAgICBub2RlLndpZHRoID0gTWF0aC5hYnMoci54IC0gbC54KTtcbiAgICAgIG5vZGUuaGVpZ2h0ID0gTWF0aC5hYnMoYi55IC0gdC55KTtcbiAgICAgIG5vZGUueCA9IGwueCArIG5vZGUud2lkdGggLyAyO1xuICAgICAgbm9kZS55ID0gdC55ICsgbm9kZS5oZWlnaHQgLyAyO1xuICAgIH1cbiAgfSk7XG5cbiAgXy5mb3JFYWNoKGcubm9kZXMoKSwgZnVuY3Rpb24gKHYpIHtcbiAgICBpZiAoZy5ub2RlKHYpLmR1bW15ID09PSAnYm9yZGVyJykge1xuICAgICAgZy5yZW1vdmVOb2RlKHYpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNlbGZFZGdlcyhnKSB7XG4gIF8uZm9yRWFjaChnLmVkZ2VzKCksIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudiA9PT0gZS53KSB7XG4gICAgICB2YXIgbm9kZSA9IGcubm9kZShlLnYpO1xuICAgICAgaWYgKCFub2RlLnNlbGZFZGdlcykge1xuICAgICAgICBub2RlLnNlbGZFZGdlcyA9IFtdO1xuICAgICAgfVxuICAgICAgbm9kZS5zZWxmRWRnZXMucHVzaCh7IGU6IGUsIGxhYmVsOiBnLmVkZ2UoZSkgfSk7XG4gICAgICBnLnJlbW92ZUVkZ2UoZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U2VsZkVkZ2VzKGcpIHtcbiAgdmFyIGxheWVycyA9IHV0aWwuYnVpbGRMYXllck1hdHJpeChnKTtcbiAgXy5mb3JFYWNoKGxheWVycywgZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgdmFyIG9yZGVyU2hpZnQgPSAwO1xuICAgIF8uZm9yRWFjaChsYXllciwgZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgIHZhciBub2RlID0gZy5ub2RlKHYpO1xuICAgICAgbm9kZS5vcmRlciA9IGkgKyBvcmRlclNoaWZ0O1xuICAgICAgXy5mb3JFYWNoKG5vZGUuc2VsZkVkZ2VzLCBmdW5jdGlvbiAoc2VsZkVkZ2UpIHtcbiAgICAgICAgdXRpbC5hZGREdW1teU5vZGUoXG4gICAgICAgICAgZyxcbiAgICAgICAgICAnc2VsZmVkZ2UnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHdpZHRoOiBzZWxmRWRnZS5sYWJlbC53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogc2VsZkVkZ2UubGFiZWwuaGVpZ2h0LFxuICAgICAgICAgICAgcmFuazogbm9kZS5yYW5rLFxuICAgICAgICAgICAgb3JkZXI6IGkgKyArK29yZGVyU2hpZnQsXG4gICAgICAgICAgICBlOiBzZWxmRWRnZS5lLFxuICAgICAgICAgICAgbGFiZWw6IHNlbGZFZGdlLmxhYmVsLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ19zZSdcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgZGVsZXRlIG5vZGUuc2VsZkVkZ2VzO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25TZWxmRWRnZXMoZykge1xuICBfLmZvckVhY2goZy5ub2RlcygpLCBmdW5jdGlvbiAodikge1xuICAgIHZhciBub2RlID0gZy5ub2RlKHYpO1xuICAgIGlmIChub2RlLmR1bW15ID09PSAnc2VsZmVkZ2UnKSB7XG4gICAgICB2YXIgc2VsZk5vZGUgPSBnLm5vZGUobm9kZS5lLnYpO1xuICAgICAgdmFyIHggPSBzZWxmTm9kZS54ICsgc2VsZk5vZGUud2lkdGggLyAyO1xuICAgICAgdmFyIHkgPSBzZWxmTm9kZS55O1xuICAgICAgdmFyIGR4ID0gbm9kZS54IC0geDtcbiAgICAgIHZhciBkeSA9IHNlbGZOb2RlLmhlaWdodCAvIDI7XG4gICAgICBnLnNldEVkZ2Uobm9kZS5lLCBub2RlLmxhYmVsKTtcbiAgICAgIGcucmVtb3ZlTm9kZSh2KTtcbiAgICAgIG5vZGUubGFiZWwucG9pbnRzID0gW1xuICAgICAgICB7IHg6IHggKyAoMiAqIGR4KSAvIDMsIHk6IHkgLSBkeSB9LFxuICAgICAgICB7IHg6IHggKyAoNSAqIGR4KSAvIDYsIHk6IHkgLSBkeSB9LFxuICAgICAgICB7IHg6IHggKyBkeCwgeTogeSB9LFxuICAgICAgICB7IHg6IHggKyAoNSAqIGR4KSAvIDYsIHk6IHkgKyBkeSB9LFxuICAgICAgICB7IHg6IHggKyAoMiAqIGR4KSAvIDMsIHk6IHkgKyBkeSB9LFxuICAgICAgXTtcbiAgICAgIG5vZGUubGFiZWwueCA9IG5vZGUueDtcbiAgICAgIG5vZGUubGFiZWwueSA9IG5vZGUueTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZWxlY3ROdW1iZXJBdHRycyhvYmosIGF0dHJzKSB7XG4gIHJldHVybiBfLm1hcFZhbHVlcyhfLnBpY2sob2JqLCBhdHRycyksIE51bWJlcik7XG59XG5cbmZ1bmN0aW9uIGNhbm9uaWNhbGl6ZShhdHRycykge1xuICB2YXIgbmV3QXR0cnMgPSB7fTtcbiAgXy5mb3JFYWNoKGF0dHJzLCBmdW5jdGlvbiAodiwgaykge1xuICAgIG5ld0F0dHJzW2sudG9Mb3dlckNhc2UoKV0gPSB2O1xuICB9KTtcbiAgcmV0dXJuIG5ld0F0dHJzO1xufVxuIl0sIm5hbWVzIjpbImlzU3ltYm9sIiwiaXNPYmplY3QiLCJiYXNlRmxhdHRlbiIsInNldFRvU3RyaW5nIiwib3ZlclJlc3QiLCJiYXNlQ2xvbmUiLCJyb290IiwiYmFzZVJlc3QiLCJpbmRleCIsImlzSXRlcmF0ZWVDYWxsIiwia2V5c0luIiwiZXEiLCJpc0FycmF5TGlrZSIsImJhc2VJdGVyYXRlZSIsImtleXMiLCJuYXRpdmVNYXgiLCJiYXNlRmluZEluZGV4IiwiYmFzZUVhY2giLCJpc0FycmF5IiwiYXJyYXlNYXAiLCJiYXNlRm9yIiwiY2FzdEZ1bmN0aW9uIiwiYmFzZUZvck93biIsImJhc2VBc3NpZ25WYWx1ZSIsImlkZW50aXR5IiwiY2FzdFBhdGgiLCJ0b0tleSIsImlzSW5kZXgiLCJhc3NpZ25WYWx1ZSIsImJhc2VHZXQiLCJiYXNlVW5hcnkiLCJoYXNJbiIsInRvU3RyaW5nIiwiXy5jb25zdGFudCIsIl8uZmxhdHRlbiIsIl8ubWFwIiwiXy5mb3JFYWNoIiwiR3JhcGgiLCJfLnJhbmdlIiwicnVuIiwiXy51bmlxdWVJZCIsIl8uaGFzIiwidW5kbyIsIl8uaXNVbmRlZmluZWQiLCJtaW4iLCJfLm1pbiIsImFkZEJvcmRlck5vZGUiLCJfLm1heCIsIl8ubm93IiwidXRpbC5hZGREdW1teU5vZGUiLCJfLm1pbkJ5IiwiZGZzIiwiXy5pc0FycmF5IiwiXy5lYWNoIiwicG9zdG9yZGVyIiwiYWxnLnBvc3RvcmRlciIsIl8uZmluZCIsIl8uZmlsdGVyIiwiYWxnLnByZW9yZGVyIiwiXy52YWx1ZXMiLCJ1dGlsLmFkZEJvcmRlck5vZGUiLCJfLnJlZHVjZSIsIl8uemlwT2JqZWN0IiwiXy5zb3J0QnkiLCJfLnBpY2siLCJ1dGlsLnBhcnRpdGlvbiIsImxhc3QiLCJfLmxhc3QiLCJtYXhSYW5rIiwidXRpbC5tYXhSYW5rIiwidXRpbC5idWlsZExheWVyTWF0cml4IiwiXy5jbG9uZURlZXAiLCJfLmZvckluIiwiXy5tYXBWYWx1ZXMiLCJfLm1lcmdlIiwidXRpbC5hc05vbkNvbXBvdW5kR3JhcGgiLCJfLmZvck93biIsInRpbWUiLCJ1dGlsLnRpbWUiLCJ1dGlsLm5vdGltZSIsImFjeWNsaWMucnVuIiwibmVzdGluZ0dyYXBoLnJ1biIsInV0aWwucmVtb3ZlRW1wdHlSYW5rcyIsIm5lc3RpbmdHcmFwaC5jbGVhbnVwIiwidXRpbC5ub3JtYWxpemVSYW5rcyIsIm5vcm1hbGl6ZS5ydW4iLCJjb29yZGluYXRlU3lzdGVtLmFkanVzdCIsIm5vcm1hbGl6ZS51bmRvIiwiY29vcmRpbmF0ZVN5c3RlbS51bmRvIiwiYWN5Y2xpYy51bmRvIiwiZ3JhcGgiLCJfLmRlZmF1bHRzIiwidXRpbC5pbnRlcnNlY3RSZWN0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7QUFDekIsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2QsSUFBSSxPQUFPLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNuQyxHQUFHO0FBQ0gsRUFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFCLEVBQUUsSUFBSSxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRTtBQUNqRCxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDcEMsSUFBSSxPQUFPLElBQUksR0FBRyxXQUFXLENBQUM7QUFDOUIsR0FBRztBQUNILEVBQUUsT0FBTyxLQUFLLEtBQUssS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDckM7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUU7QUFDMUIsRUFBRSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQzlCLE1BQU0sU0FBUyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDN0I7QUFDQSxFQUFFLE9BQU8sTUFBTSxLQUFLLE1BQU0sSUFBSSxTQUFTLEdBQUcsTUFBTSxHQUFHLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFDO0FBQzNFOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRTtBQUNuQyxFQUFFLElBQUksSUFBSSxHQUFHVSxhQUFPLENBQUMsVUFBVSxDQUFDLEdBQUdDLGNBQVEsR0FBRyxPQUFPLENBQUM7QUFDdEQsRUFBRSxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUVOLGtCQUFZLENBQUMsUUFBVyxDQUFDLENBQUMsQ0FBQztBQUNyRDs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFO0FBQ2pDLEVBQUUsT0FBTyxNQUFNLElBQUksSUFBSTtBQUN2QixNQUFNLE1BQU07QUFDWixNQUFNTyxhQUFPLENBQUMsTUFBTSxFQUFFQyxrQkFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFWCxZQUFNLENBQUMsQ0FBQztBQUN0RDs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFO0FBQ2xDLEVBQUUsT0FBTyxNQUFNLElBQUlZLGdCQUFVLENBQUMsTUFB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R0FBRyxJQUFJQyxXQUFLLEVBQUUsQ0FBQztBQUM3QixFQUFFLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNoQixFQUFFLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNqQjtBQUNBLEVBQUVELGFBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUU7QUFDcEMsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqRCxHQUFHLENBQUMsQ0FBQztBQUNMO0FBQ0E7QUFDQTtBQUNBLEVBQUVBLGFBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUU7QUFDcEMsSUFBSSxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsRCxJQUFJLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixJQUFJLElBQUksVUFBVSxHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUM7QUFDekMsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMzQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFDbEUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxF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QU0sRUFBRTtBQUM5QixNQUFNLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0IsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQytCLElBQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUM5QyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUNBLElBQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUMvQztBQUNBLE1BQU0sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLE1BQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLEtBQUs7QUFDTCxHQUFHLENBQUMsQ0FBQztBQUNMO0FBQ0EsRUFBRS9CLGFBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUU7QUFDcEMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxL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R0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUM5QyxNQUFNLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDekIsTUFBTSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQixNQUFNLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEIsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRztBQUMxQixRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO0FBQzFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7QUFDMUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDM0IsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtBQUMxQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO0FBQzFDLE9BQU8sQ0FBQztBQUNSLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM1QixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDNUIsS0FBSztBQUNMLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUNEO0FBQ0EsU0FBUyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3ZDLEVBQUUsT0FBT3FDLFNBQVcsQ0FBQ1QsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLFlBQVksQ0FBQyxLQUFLLEVBQUU7QUFDN0IsRUFBRSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDcEIsRUFBRTVCLGFBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsQyxHQUFHLENBQUMsQ0FBQztBQUNMLEVBQUUsT0FBTyxRQUFRLENBQUM7QUFDbEI7Ozs7Ozs7OzsifQ==
