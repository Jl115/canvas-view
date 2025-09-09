'use strict';

/*! image-blob-reduce 3.0.1 https://github.com/nodeca/image-blob-reduce @license MIT */
var assign$1 = function assign(to) {
  var from;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (Object.prototype.hasOwnProperty.call(from, key)) to[key] = from[key];
    }
  }

  return to;
};


function pick(from, props) {
  var to = {};

  props.forEach(function (key) {
    if (Object.prototype.hasOwnProperty.call(from, key)) to[key] = from[key];
  });

  return to;
}


function pick_pica_resize_options(from) {
  return pick(from, [
    'alpha',
    'unsharpAmount',
    'unsharpRadius',
    'unsharpThreshold',
    'cancelToken'
  ]);
}


var pick_1 = pick;
var pick_pica_resize_options_1 = pick_pica_resize_options;

var utils = {
	assign: assign$1,
	pick: pick_1,
	pick_pica_resize_options: pick_pica_resize_options_1
};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

function commonjsRequire (target) {
	throw new Error('Could not dynamically require "' + target + '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.');
}

/*!

pica
https://github.com/nodeca/pica

*/

var pica = createCommonjsModule(function (module, exports) {
(function(f){{module.exports=f();}})(function(){return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof commonjsRequire&&commonjsRequire;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t);}return n[i].exports}for(var u="function"==typeof commonjsRequire&&commonjsRequire,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){

var inherits = _dereq_('inherits');

var Multimath = _dereq_('multimath');

var mm_unsharp_mask = _dereq_('./mm_unsharp_mask');

var mm_resize = _dereq_('./mm_resize');

function MathLib(requested_features) {
  var __requested_features = requested_features || [];

  var features = {
    js: __requested_features.indexOf('js') >= 0,
    wasm: __requested_features.indexOf('wasm') >= 0
  };
  Multimath.call(this, features);
  this.features = {
    js: features.js,
    wasm: features.wasm && this.has_wasm()
  };
  this.use(mm_unsharp_mask);
  this.use(mm_resize);
}

inherits(MathLib, Multimath);

MathLib.prototype.resizeAndUnsharp = function resizeAndUnsharp(options, cache) {
  var result = this.resize(options, cache);

  if (options.unsharpAmount) {
    this.unsharp_mask(result, options.toWidth, options.toHeight, options.unsharpAmount, options.unsharpRadius, options.unsharpThreshold);
  }

  return result;
};

module.exports = MathLib;

},{"./mm_resize":4,"./mm_unsharp_mask":9,"inherits":19,"multimath":20}],2:[function(_dereq_,module,exports){
//var FIXED_FRAC_BITS = 14;

function clampTo8(i) {
  return i < 0 ? 0 : i > 255 ? 255 : i;
} // Convolve image in horizontal directions and transpose output. In theory,
// transpose allow:
//
// - use the same convolver for both passes (this fails due different
//   types of input array and temporary buffer)
// - making vertical pass by horisonltal lines inprove CPU cache use.
//
// But in real life this doesn't work :)
//


function convolveHorizontally(src, dest, srcW, srcH, destW, filters) {
  var r, g, b, a;
  var filterPtr, filterShift, filterSize;
  var srcPtr, srcY, destX, filterVal;
  var srcOffset = 0,
      destOffset = 0; // For each row

  for (srcY = 0; srcY < srcH; srcY++) {
    filterPtr = 0; // Apply precomputed filters to each destination row point

    for (destX = 0; destX < destW; destX++) {
      // Get the filter that determines the current output pixel.
      filterShift = filters[filterPtr++];
      filterSize = filters[filterPtr++];
      srcPtr = srcOffset + filterShift * 4 | 0;
      r = g = b = a = 0; // Apply the filter to the row to get the destination pixel r, g, b, a

      for (; filterSize > 0; filterSize--) {
        filterVal = filters[filterPtr++]; // Use reverse order to workaround deopts in old v8 (node v.10)
        // Big thanks to @mraleph (Vyacheslav Egorov) for the tip.

        a = a + filterVal * src[srcPtr + 3] | 0;
        b = b + filterVal * src[srcPtr + 2] | 0;
        g = g + filterVal * src[srcPtr + 1] | 0;
        r = r + filterVal * src[srcPtr] | 0;
        srcPtr = srcPtr + 4 | 0;
      } // Bring this value back in range. All of the filter scaling factors
      // are in fixed point with FIXED_FRAC_BITS bits of fractional part.
      //
      // (!) Add 1/2 of value before clamping to get proper rounding. In other
      // case brightness loss will be noticeable if you resize image with white
      // border and place it on white background.
      //


      dest[destOffset + 3] = clampTo8(a + (1 << 13) >> 14
      /*FIXED_FRAC_BITS*/
      );
      dest[destOffset + 2] = clampTo8(b + (1 << 13) >> 14
      /*FIXED_FRAC_BITS*/
      );
      dest[destOffset + 1] = clampTo8(g + (1 << 13) >> 14
      /*FIXED_FRAC_BITS*/
      );
      dest[destOffset] = clampTo8(r + (1 << 13) >> 14
      /*FIXED_FRAC_BITS*/
      );
      destOffset = destOffset + srcH * 4 | 0;
    }

    destOffset = (srcY + 1) * 4 | 0;
    srcOffset = (srcY + 1) * srcW * 4 | 0;
  }
} // Technically, convolvers are the same. But input array and temporary
// buffer can be of different type (especially, in old browsers). So,
// keep code in separate functions to avoid deoptimizations & speed loss.


function convolveVertically(src, dest, srcW, srcH, destW, filters) {
  var r, g, b, a;
  var filterPtr, filterShift, filterSize;
  var srcPtr, srcY, destX, filterVal;
  var srcOffset = 0,
      destOffset = 0; // For each row

  for (srcY = 0; srcY < srcH; srcY++) {
    filterPtr = 0; // Apply precomputed filters to each destination row point

    for (destX = 0; destX < destW; destX++) {
      // Get the filter that determines the current output pixel.
      filterShift = filters[filterPtr++];
      filterSize = filters[filterPtr++];
      srcPtr = srcOffset + filterShift * 4 | 0;
      r = g = b = a = 0; // Apply the filter to the row to get the destination pixel r, g, b, a

      for (; filterSize > 0; filterSize--) {
        filterVal = filters[filterPtr++]; // Use reverse order to workaround deopts in old v8 (node v.10)
        // Big thanks to @mraleph (Vyacheslav Egorov) for the tip.

        a = a + filterVal * src[srcPtr + 3] | 0;
        b = b + filterVal * src[srcPtr + 2] | 0;
        g = g + filterVal * src[srcPtr + 1] | 0;
        r = r + filterVal * src[srcPtr] | 0;
        srcPtr = srcPtr + 4 | 0;
      } // Bring this value back in range. All of the filter scaling factors
      // are in fixed point with FIXED_FRAC_BITS bits of fractional part.
      //
      // (!) Add 1/2 of value before clamping to get proper rounding. In other
      // case brightness loss will be noticeable if you resize image with white
      // border and place it on white background.
      //


      dest[destOffset + 3] = clampTo8(a + (1 << 13) >> 14
      /*FIXED_FRAC_BITS*/
      );
      dest[destOffset + 2] = clampTo8(b + (1 << 13) >> 14
      /*FIXED_FRAC_BITS*/
      );
      dest[destOffset + 1] = clampTo8(g + (1 << 13) >> 14
      /*FIXED_FRAC_BITS*/
      );
      dest[destOffset] = clampTo8(r + (1 << 13) >> 14
      /*FIXED_FRAC_BITS*/
      );
      destOffset = destOffset + srcH * 4 | 0;
    }

    destOffset = (srcY + 1) * 4 | 0;
    srcOffset = (srcY + 1) * srcW * 4 | 0;
  }
}

module.exports = {
  convolveHorizontally: convolveHorizontally,
  convolveVertically: convolveVertically
};

},{}],3:[function(_dereq_,module,exports){
/* eslint-disable max-len */

module.exports = 'AGFzbQEAAAAADAZkeWxpbmsAAAAAAAEXA2AAAGAGf39/f39/AGAHf39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMEAwABAgYGAX8AQQALB1cFEV9fd2FzbV9jYWxsX2N0b3JzAAAIY29udm9sdmUAAQpjb252b2x2ZUhWAAIMX19kc29faGFuZGxlAwAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAAK7AMDAwABC8YDAQ9/AkAgA0UNACAERQ0AA0AgDCENQQAhE0EAIQcDQCAHQQJqIQYCfyAHQQF0IAVqIgcuAQIiFEUEQEGAwAAhCEGAwAAhCUGAwAAhCkGAwAAhCyAGDAELIBIgBy4BAGohCEEAIQsgFCEHQQAhDiAGIQlBACEPQQAhEANAIAUgCUEBdGouAQAiESAAIAhBAnRqKAIAIgpBGHZsIBBqIRAgCkH/AXEgEWwgC2ohCyAKQRB2Qf8BcSARbCAPaiEPIApBCHZB/wFxIBFsIA5qIQ4gCEEBaiEIIAlBAWohCSAHQQFrIgcNAAsgC0GAQGshCCAOQYBAayEJIA9BgEBrIQogEEGAQGshCyAGIBRqCyEHIAEgDUECdGogCUEOdSIGQf8BIAZB/wFIGyIGQQAgBkEAShtBCHRBgP4DcSAKQQ51IgZB/wEgBkH/AUgbIgZBACAGQQBKG0EQdEGAgPwHcSALQQ51IgZB/wEgBkH/AUgbIgZBACAGQQBKG0EYdHJyIAhBDnUiBkH/ASAGQf8BSBsiBkEAIAZBAEobcjYCACADIA1qIQ0gE0EBaiITIARHDQALIAxBAWoiDCACbCESIAMgDEcNAAsLCx4AQQAgAiADIAQgBSAAEAEgAkEAIAQgBSAGIAEQAQs=';

},{}],4:[function(_dereq_,module,exports){

module.exports = {
  name: 'resize',
  fn: _dereq_('./resize'),
  wasm_fn: _dereq_('./resize_wasm'),
  wasm_src: _dereq_('./convolve_wasm_base64')
};

},{"./convolve_wasm_base64":3,"./resize":5,"./resize_wasm":8}],5:[function(_dereq_,module,exports){

var createFilters = _dereq_('./resize_filter_gen');

var convolveHorizontally = _dereq_('./convolve').convolveHorizontally;

var convolveVertically = _dereq_('./convolve').convolveVertically;

function resetAlpha(dst, width, height) {
  var ptr = 3,
      len = width * height * 4 | 0;

  while (ptr < len) {
    dst[ptr] = 0xFF;
    ptr = ptr + 4 | 0;
  }
}

module.exports = function resize(options) {
  var src = options.src;
  var srcW = options.width;
  var srcH = options.height;
  var destW = options.toWidth;
  var destH = options.toHeight;
  var scaleX = options.scaleX || options.toWidth / options.width;
  var scaleY = options.scaleY || options.toHeight / options.height;
  var offsetX = options.offsetX || 0;
  var offsetY = options.offsetY || 0;
  var dest = options.dest || new Uint8Array(destW * destH * 4);
  var quality = typeof options.quality === 'undefined' ? 3 : options.quality;
  var alpha = options.alpha || false;
  var filtersX = createFilters(quality, srcW, destW, scaleX, offsetX),
      filtersY = createFilters(quality, srcH, destH, scaleY, offsetY);
  var tmp = new Uint8Array(destW * srcH * 4); // To use single function we need src & tmp of the same type.
  // But src can be CanvasPixelArray, and tmp - Uint8Array. So, keep
  // vertical and horizontal passes separately to avoid deoptimization.

  convolveHorizontally(src, tmp, srcW, srcH, destW, filtersX);
  convolveVertically(tmp, dest, srcH, destW, destH, filtersY); // That's faster than doing checks in convolver.
  // !!! Note, canvas data is not premultipled. We don't need other
  // alpha corrections.

  if (!alpha) resetAlpha(dest, destW, destH);
  return dest;
};

},{"./convolve":2,"./resize_filter_gen":6}],6:[function(_dereq_,module,exports){

var FILTER_INFO = _dereq_('./resize_filter_info'); // Precision of fixed FP values


var FIXED_FRAC_BITS = 14;

function toFixedPoint(num) {
  return Math.round(num * ((1 << FIXED_FRAC_BITS) - 1));
}

module.exports = function resizeFilterGen(quality, srcSize, destSize, scale, offset) {
  var filterFunction = FILTER_INFO[quality].filter;
  var scaleInverted = 1.0 / scale;
  var scaleClamped = Math.min(1.0, scale); // For upscale
  // Filter window (averaging interval), scaled to src image

  var srcWindow = FILTER_INFO[quality].win / scaleClamped;
  var destPixel, srcPixel, srcFirst, srcLast, filterElementSize, floatFilter, fxpFilter, total, pxl, idx, floatVal, filterTotal, filterVal;
  var leftNotEmpty, rightNotEmpty, filterShift, filterSize;
  var maxFilterElementSize = Math.floor((srcWindow + 1) * 2);
  var packedFilter = new Int16Array((maxFilterElementSize + 2) * destSize);
  var packedFilterPtr = 0;
  var slowCopy = !packedFilter.subarray || !packedFilter.set; // For each destination pixel calculate source range and built filter values

  for (destPixel = 0; destPixel < destSize; destPixel++) {
    // Scaling should be done relative to central pixel point
    srcPixel = (destPixel + 0.5) * scaleInverted + offset;
    srcFirst = Math.max(0, Math.floor(srcPixel - srcWindow));
    srcLast = Math.min(srcSize - 1, Math.ceil(srcPixel + srcWindow));
    filterElementSize = srcLast - srcFirst + 1;
    floatFilter = new Float32Array(filterElementSize);
    fxpFilter = new Int16Array(filterElementSize);
    total = 0.0; // Fill filter values for calculated range

    for (pxl = srcFirst, idx = 0; pxl <= srcLast; pxl++, idx++) {
      floatVal = filterFunction((pxl + 0.5 - srcPixel) * scaleClamped);
      total += floatVal;
      floatFilter[idx] = floatVal;
    } // Normalize filter, convert to fixed point and accumulate conversion error


    filterTotal = 0;

    for (idx = 0; idx < floatFilter.length; idx++) {
      filterVal = floatFilter[idx] / total;
      filterTotal += filterVal;
      fxpFilter[idx] = toFixedPoint(filterVal);
    } // Compensate normalization error, to minimize brightness drift


    fxpFilter[destSize >> 1] += toFixedPoint(1.0 - filterTotal); //
    // Now pack filter to useable form
    //
    // 1. Trim heading and tailing zero values, and compensate shitf/length
    // 2. Put all to single array in this format:
    //
    //    [ pos shift, data length, value1, value2, value3, ... ]
    //

    leftNotEmpty = 0;

    while (leftNotEmpty < fxpFilter.length && fxpFilter[leftNotEmpty] === 0) {
      leftNotEmpty++;
    }

    if (leftNotEmpty < fxpFilter.length) {
      rightNotEmpty = fxpFilter.length - 1;

      while (rightNotEmpty > 0 && fxpFilter[rightNotEmpty] === 0) {
        rightNotEmpty--;
      }

      filterShift = srcFirst + leftNotEmpty;
      filterSize = rightNotEmpty - leftNotEmpty + 1;
      packedFilter[packedFilterPtr++] = filterShift; // shift

      packedFilter[packedFilterPtr++] = filterSize; // size

      if (!slowCopy) {
        packedFilter.set(fxpFilter.subarray(leftNotEmpty, rightNotEmpty + 1), packedFilterPtr);
        packedFilterPtr += filterSize;
      } else {
        // fallback for old IE < 11, without subarray/set methods
        for (idx = leftNotEmpty; idx <= rightNotEmpty; idx++) {
          packedFilter[packedFilterPtr++] = fxpFilter[idx];
        }
      }
    } else {
      // zero data, write header only
      packedFilter[packedFilterPtr++] = 0; // shift

      packedFilter[packedFilterPtr++] = 0; // size
    }
  }

  return packedFilter;
};

},{"./resize_filter_info":7}],7:[function(_dereq_,module,exports){

module.exports = [{
  // Nearest neibor (Box)
  win: 0.5,
  filter: function filter(x) {
    return x >= -0.5 && x < 0.5 ? 1.0 : 0.0;
  }
}, {
  // Hamming
  win: 1.0,
  filter: function filter(x) {
    if (x <= -1.0 || x >= 1.0) {
      return 0.0;
    }

    if (x > -1.19209290E-07 && x < 1.19209290E-07) {
      return 1.0;
    }

    var xpi = x * Math.PI;
    return Math.sin(xpi) / xpi * (0.54 + 0.46 * Math.cos(xpi / 1.0));
  }
}, {
  // Lanczos, win = 2
  win: 2.0,
  filter: function filter(x) {
    if (x <= -2.0 || x >= 2.0) {
      return 0.0;
    }

    if (x > -1.19209290E-07 && x < 1.19209290E-07) {
      return 1.0;
    }

    var xpi = x * Math.PI;
    return Math.sin(xpi) / xpi * Math.sin(xpi / 2.0) / (xpi / 2.0);
  }
}, {
  // Lanczos, win = 3
  win: 3.0,
  filter: function filter(x) {
    if (x <= -3.0 || x >= 3.0) {
      return 0.0;
    }

    if (x > -1.19209290E-07 && x < 1.19209290E-07) {
      return 1.0;
    }

    var xpi = x * Math.PI;
    return Math.sin(xpi) / xpi * Math.sin(xpi / 3.0) / (xpi / 3.0);
  }
}];

},{}],8:[function(_dereq_,module,exports){

var createFilters = _dereq_('./resize_filter_gen');

function resetAlpha(dst, width, height) {
  var ptr = 3,
      len = width * height * 4 | 0;

  while (ptr < len) {
    dst[ptr] = 0xFF;
    ptr = ptr + 4 | 0;
  }
}

function asUint8Array(src) {
  return new Uint8Array(src.buffer, 0, src.byteLength);
}

var IS_LE = true; // should not crash everything on module load in old browsers

try {
  IS_LE = new Uint32Array(new Uint8Array([1, 0, 0, 0]).buffer)[0] === 1;
} catch (__) {}

function copyInt16asLE(src, target, target_offset) {
  if (IS_LE) {
    target.set(asUint8Array(src), target_offset);
    return;
  }

  for (var ptr = target_offset, i = 0; i < src.length; i++) {
    var data = src[i];
    target[ptr++] = data & 0xFF;
    target[ptr++] = data >> 8 & 0xFF;
  }
}

module.exports = function resize_wasm(options) {
  var src = options.src;
  var srcW = options.width;
  var srcH = options.height;
  var destW = options.toWidth;
  var destH = options.toHeight;
  var scaleX = options.scaleX || options.toWidth / options.width;
  var scaleY = options.scaleY || options.toHeight / options.height;
  var offsetX = options.offsetX || 0.0;
  var offsetY = options.offsetY || 0.0;
  var dest = options.dest || new Uint8Array(destW * destH * 4);
  var quality = typeof options.quality === 'undefined' ? 3 : options.quality;
  var alpha = options.alpha || false;
  var filtersX = createFilters(quality, srcW, destW, scaleX, offsetX),
      filtersY = createFilters(quality, srcH, destH, scaleY, offsetY); // destination is 0 too.

  var src_offset = 0; // buffer between convolve passes

  var tmp_offset = this.__align(src_offset + Math.max(src.byteLength, dest.byteLength));

  var filtersX_offset = this.__align(tmp_offset + srcH * destW * 4);

  var filtersY_offset = this.__align(filtersX_offset + filtersX.byteLength);

  var alloc_bytes = filtersY_offset + filtersY.byteLength;

  var instance = this.__instance('resize', alloc_bytes); //
  // Fill memory block with data to process
  //


  var mem = new Uint8Array(this.__memory.buffer);
  var mem32 = new Uint32Array(this.__memory.buffer); // 32-bit copy is much faster in chrome

  var src32 = new Uint32Array(src.buffer);
  mem32.set(src32); // We should guarantee LE bytes order. Filters are not big, so
  // speed difference is not significant vs direct .set()

  copyInt16asLE(filtersX, mem, filtersX_offset);
  copyInt16asLE(filtersY, mem, filtersY_offset); //
  // Now call webassembly method
  // emsdk does method names with '_'

  var fn = instance.exports.convolveHV || instance.exports._convolveHV;
  fn(filtersX_offset, filtersY_offset, tmp_offset, srcW, srcH, destW, destH); //
  // Copy data back to typed array
  //
  // 32-bit copy is much faster in chrome

  var dest32 = new Uint32Array(dest.buffer);
  dest32.set(new Uint32Array(this.__memory.buffer, 0, destH * destW)); // That's faster than doing checks in convolver.
  // !!! Note, canvas data is not premultipled. We don't need other
  // alpha corrections.

  if (!alpha) resetAlpha(dest, destW, destH);
  return dest;
};

},{"./resize_filter_gen":6}],9:[function(_dereq_,module,exports){

module.exports = {
  name: 'unsharp_mask',
  fn: _dereq_('./unsharp_mask'),
  wasm_fn: _dereq_('./unsharp_mask_wasm'),
  wasm_src: _dereq_('./unsharp_mask_wasm_base64')
};

},{"./unsharp_mask":10,"./unsharp_mask_wasm":11,"./unsharp_mask_wasm_base64":12}],10:[function(_dereq_,module,exports){

var glur_mono16 = _dereq_('glur/mono16');

function hsv_v16(img, width, height) {
  var size = width * height;
  var out = new Uint16Array(size);
  var r, g, b, max;

  for (var i = 0; i < size; i++) {
    r = img[4 * i];
    g = img[4 * i + 1];
    b = img[4 * i + 2];
    max = r >= g && r >= b ? r : g >= b && g >= r ? g : b;
    out[i] = max << 8;
  }

  return out;
}

module.exports = function unsharp(img, width, height, amount, radius, threshold) {
  var v1, v2, vmul;
  var diff, iTimes4;

  if (amount === 0 || radius < 0.5) {
    return;
  }

  if (radius > 2.0) {
    radius = 2.0;
  }

  var brightness = hsv_v16(img, width, height);
  var blured = new Uint16Array(brightness); // copy, because blur modify src

  glur_mono16(blured, width, height, radius);
  var amountFp = amount / 100 * 0x1000 + 0.5 | 0;
  var thresholdFp = threshold << 8;
  var size = width * height;
  /* eslint-disable indent */

  for (var i = 0; i < size; i++) {
    v1 = brightness[i];
    diff = v1 - blured[i];

    if (Math.abs(diff) >= thresholdFp) {
      // add unsharp mask to the brightness channel
      v2 = v1 + (amountFp * diff + 0x800 >> 12); // Both v1 and v2 are within [0.0 .. 255.0] (0000-FF00) range, never going into
      // [255.003 .. 255.996] (FF01-FFFF). This allows to round this value as (x+.5)|0
      // later without overflowing.

      v2 = v2 > 0xff00 ? 0xff00 : v2;
      v2 = v2 < 0x0000 ? 0x0000 : v2; // Avoid division by 0. V=0 means rgb(0,0,0), unsharp with unsharpAmount>0 cannot
      // change this value (because diff between colors gets inflated), so no need to verify correctness.

      v1 = v1 !== 0 ? v1 : 1; // Multiplying V in HSV model by a constant is equivalent to multiplying each component
      // in RGB by the same constant (same for HSL), see also:
      // https://beesbuzz.biz/code/16-hsv-color-transforms

      vmul = (v2 << 12) / v1 | 0; // Result will be in [0..255] range because:
      //  - all numbers are positive
      //  - r,g,b <= (v1/256)
      //  - r,g,b,(v1/256),(v2/256) <= 255
      // So highest this number can get is X*255/X+0.5=255.5 which is < 256 and rounds down.

      iTimes4 = i * 4;
      img[iTimes4] = img[iTimes4] * vmul + 0x800 >> 12; // R

      img[iTimes4 + 1] = img[iTimes4 + 1] * vmul + 0x800 >> 12; // G

      img[iTimes4 + 2] = img[iTimes4 + 2] * vmul + 0x800 >> 12; // B
    }
  }
};

},{"glur/mono16":18}],11:[function(_dereq_,module,exports){

module.exports = function unsharp(img, width, height, amount, radius, threshold) {
  if (amount === 0 || radius < 0.5) {
    return;
  }

  if (radius > 2.0) {
    radius = 2.0;
  }

  var pixels = width * height;
  var img_bytes_cnt = pixels * 4;
  var hsv_bytes_cnt = pixels * 2;
  var blur_bytes_cnt = pixels * 2;
  var blur_line_byte_cnt = Math.max(width, height) * 4; // float32 array

  var blur_coeffs_byte_cnt = 8 * 4; // float32 array

  var img_offset = 0;
  var hsv_offset = img_bytes_cnt;
  var blur_offset = hsv_offset + hsv_bytes_cnt;
  var blur_tmp_offset = blur_offset + blur_bytes_cnt;
  var blur_line_offset = blur_tmp_offset + blur_bytes_cnt;
  var blur_coeffs_offset = blur_line_offset + blur_line_byte_cnt;

  var instance = this.__instance('unsharp_mask', img_bytes_cnt + hsv_bytes_cnt + blur_bytes_cnt * 2 + blur_line_byte_cnt + blur_coeffs_byte_cnt, {
    exp: Math.exp
  }); // 32-bit copy is much faster in chrome


  var img32 = new Uint32Array(img.buffer);
  var mem32 = new Uint32Array(this.__memory.buffer);
  mem32.set(img32); // HSL

  var fn = instance.exports.hsv_v16 || instance.exports._hsv_v16;
  fn(img_offset, hsv_offset, width, height); // BLUR

  fn = instance.exports.blurMono16 || instance.exports._blurMono16;
  fn(hsv_offset, blur_offset, blur_tmp_offset, blur_line_offset, blur_coeffs_offset, width, height, radius); // UNSHARP

  fn = instance.exports.unsharp || instance.exports._unsharp;
  fn(img_offset, img_offset, hsv_offset, blur_offset, width, height, amount, threshold); // 32-bit copy is much faster in chrome

  img32.set(new Uint32Array(this.__memory.buffer, 0, pixels));
};

},{}],12:[function(_dereq_,module,exports){
/* eslint-disable max-len */

module.exports = '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';

},{}],13:[function(_dereq_,module,exports){

var GC_INTERVAL = 100;

function Pool(create, idle) {
  this.create = create;
  this.available = [];
  this.acquired = {};
  this.lastId = 1;
  this.timeoutId = 0;
  this.idle = idle || 2000;
}

Pool.prototype.acquire = function () {
  var _this = this;

  var resource;

  if (this.available.length !== 0) {
    resource = this.available.pop();
  } else {
    resource = this.create();
    resource.id = this.lastId++;

    resource.release = function () {
      return _this.release(resource);
    };
  }

  this.acquired[resource.id] = resource;
  return resource;
};

Pool.prototype.release = function (resource) {
  var _this2 = this;

  delete this.acquired[resource.id];
  resource.lastUsed = Date.now();
  this.available.push(resource);

  if (this.timeoutId === 0) {
    this.timeoutId = setTimeout(function () {
      return _this2.gc();
    }, GC_INTERVAL);
  }
};

Pool.prototype.gc = function () {
  var _this3 = this;

  var now = Date.now();
  this.available = this.available.filter(function (resource) {
    if (now - resource.lastUsed > _this3.idle) {
      resource.destroy();
      return false;
    }

    return true;
  });

  if (this.available.length !== 0) {
    this.timeoutId = setTimeout(function () {
      return _this3.gc();
    }, GC_INTERVAL);
  } else {
    this.timeoutId = 0;
  }
};

module.exports = Pool;

},{}],14:[function(_dereq_,module,exports){
// min size = 1 can consume large amount of memory

var MIN_INNER_TILE_SIZE = 2;

module.exports = function createStages(fromWidth, fromHeight, toWidth, toHeight, srcTileSize, destTileBorder) {
  var scaleX = toWidth / fromWidth;
  var scaleY = toHeight / fromHeight; // derived from createRegions equation:
  // innerTileWidth = pixelFloor(srcTileSize * scaleX) - 2 * destTileBorder;

  var minScale = (2 * destTileBorder + MIN_INNER_TILE_SIZE + 1) / srcTileSize; // refuse to scale image multiple times by less than twice each time,
  // it could only happen because of invalid options

  if (minScale > 0.5) return [[toWidth, toHeight]];
  var stageCount = Math.ceil(Math.log(Math.min(scaleX, scaleY)) / Math.log(minScale)); // no additional resizes are necessary,
  // stageCount can be zero or be negative when enlarging the image

  if (stageCount <= 1) return [[toWidth, toHeight]];
  var result = [];

  for (var i = 0; i < stageCount; i++) {
    var width = Math.round(Math.pow(Math.pow(fromWidth, stageCount - i - 1) * Math.pow(toWidth, i + 1), 1 / stageCount));
    var height = Math.round(Math.pow(Math.pow(fromHeight, stageCount - i - 1) * Math.pow(toHeight, i + 1), 1 / stageCount));
    result.push([width, height]);
  }

  return result;
};

},{}],15:[function(_dereq_,module,exports){
/*
 * pixelFloor and pixelCeil are modified versions of Math.floor and Math.ceil
 * functions which take into account floating point arithmetic errors.
 * Those errors can cause undesired increments/decrements of sizes and offsets:
 * Math.ceil(36 / (36 / 500)) = 501
 * pixelCeil(36 / (36 / 500)) = 500
 */

var PIXEL_EPSILON = 1e-5;

function pixelFloor(x) {
  var nearest = Math.round(x);

  if (Math.abs(x - nearest) < PIXEL_EPSILON) {
    return nearest;
  }

  return Math.floor(x);
}

function pixelCeil(x) {
  var nearest = Math.round(x);

  if (Math.abs(x - nearest) < PIXEL_EPSILON) {
    return nearest;
  }

  return Math.ceil(x);
}

module.exports = function createRegions(options) {
  var scaleX = options.toWidth / options.width;
  var scaleY = options.toHeight / options.height;
  var innerTileWidth = pixelFloor(options.srcTileSize * scaleX) - 2 * options.destTileBorder;
  var innerTileHeight = pixelFloor(options.srcTileSize * scaleY) - 2 * options.destTileBorder; // prevent infinite loop, this should never happen

  if (innerTileWidth < 1 || innerTileHeight < 1) {
    throw new Error('Internal error in pica: target tile width/height is too small.');
  }

  var x, y;
  var innerX, innerY, toTileWidth, toTileHeight;
  var tiles = [];
  var tile; // we go top-to-down instead of left-to-right to make image displayed from top to
  // doesn in the browser

  for (innerY = 0; innerY < options.toHeight; innerY += innerTileHeight) {
    for (innerX = 0; innerX < options.toWidth; innerX += innerTileWidth) {
      x = innerX - options.destTileBorder;

      if (x < 0) {
        x = 0;
      }

      toTileWidth = innerX + innerTileWidth + options.destTileBorder - x;

      if (x + toTileWidth >= options.toWidth) {
        toTileWidth = options.toWidth - x;
      }

      y = innerY - options.destTileBorder;

      if (y < 0) {
        y = 0;
      }

      toTileHeight = innerY + innerTileHeight + options.destTileBorder - y;

      if (y + toTileHeight >= options.toHeight) {
        toTileHeight = options.toHeight - y;
      }

      tile = {
        toX: x,
        toY: y,
        toWidth: toTileWidth,
        toHeight: toTileHeight,
        toInnerX: innerX,
        toInnerY: innerY,
        toInnerWidth: innerTileWidth,
        toInnerHeight: innerTileHeight,
        offsetX: x / scaleX - pixelFloor(x / scaleX),
        offsetY: y / scaleY - pixelFloor(y / scaleY),
        scaleX: scaleX,
        scaleY: scaleY,
        x: pixelFloor(x / scaleX),
        y: pixelFloor(y / scaleY),
        width: pixelCeil(toTileWidth / scaleX),
        height: pixelCeil(toTileHeight / scaleY)
      };
      tiles.push(tile);
    }
  }

  return tiles;
};

},{}],16:[function(_dereq_,module,exports){

function objClass(obj) {
  return Object.prototype.toString.call(obj);
}

module.exports.isCanvas = function isCanvas(element) {
  var cname = objClass(element);
  return cname === '[object HTMLCanvasElement]'
  /* browser */
  || cname === '[object OffscreenCanvas]' || cname === '[object Canvas]'
  /* node-canvas */
  ;
};

module.exports.isImage = function isImage(element) {
  return objClass(element) === '[object HTMLImageElement]';
};

module.exports.isImageBitmap = function isImageBitmap(element) {
  return objClass(element) === '[object ImageBitmap]';
};

module.exports.limiter = function limiter(concurrency) {
  var active = 0,
      queue = [];

  function roll() {
    if (active < concurrency && queue.length) {
      active++;
      queue.shift()();
    }
  }

  return function limit(fn) {
    return new Promise(function (resolve, reject) {
      queue.push(function () {
        fn().then(function (result) {
          resolve(result);
          active--;
          roll();
        }, function (err) {
          reject(err);
          active--;
          roll();
        });
      });
      roll();
    });
  };
};

module.exports.cib_quality_name = function cib_quality_name(num) {
  switch (num) {
    case 0:
      return 'pixelated';

    case 1:
      return 'low';

    case 2:
      return 'medium';
  }

  return 'high';
};

module.exports.cib_support = function cib_support(createCanvas) {
  return Promise.resolve().then(function () {
    if (typeof createImageBitmap === 'undefined') {
      return false;
    }

    var c = createCanvas(100, 100);
    return createImageBitmap(c, 0, 0, 100, 100, {
      resizeWidth: 10,
      resizeHeight: 10,
      resizeQuality: 'high'
    }).then(function (bitmap) {
      var status = bitmap.width === 10; // Branch below is filtered on upper level. We do not call resize
      // detection for basic ImageBitmap.
      //
      // https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap
      // old Crome 51 has ImageBitmap without .close(). Then this code
      // will throw and return 'false' as expected.
      //

      bitmap.close();
      c = null;
      return status;
    });
  })["catch"](function () {
    return false;
  });
};

module.exports.worker_offscreen_canvas_support = function worker_offscreen_canvas_support() {
  return new Promise(function (resolve, reject) {
    if (typeof OffscreenCanvas === 'undefined') {
      // if OffscreenCanvas is present, we assume browser supports Worker and built-in Promise as well
      resolve(false);
      return;
    }

    function workerPayload(self) {
      if (typeof createImageBitmap === 'undefined') {
        self.postMessage(false);
        return;
      }

      Promise.resolve().then(function () {
        var canvas = new OffscreenCanvas(10, 10); // test that 2d context can be used in worker

        var ctx = canvas.getContext('2d');
        ctx.rect(0, 0, 1, 1); // test that cib can be used to return image bitmap from worker

        return createImageBitmap(canvas, 0, 0, 1, 1);
      }).then(function () {
        return self.postMessage(true);
      }, function () {
        return self.postMessage(false);
      });
    }

    var code = btoa("(".concat(workerPayload.toString(), ")(self);"));
    var w = new Worker("data:text/javascript;base64,".concat(code));

    w.onmessage = function (ev) {
      return resolve(ev.data);
    };

    w.onerror = reject;
  }).then(function (result) {
    return result;
  }, function () {
    return false;
  });
}; // Check if canvas.getContext('2d').getImageData can be used,
// FireFox randomizes the output of that function in `privacy.resistFingerprinting` mode


module.exports.can_use_canvas = function can_use_canvas(createCanvas) {
  var usable = false;

  try {
    var canvas = createCanvas(2, 1);
    var ctx = canvas.getContext('2d');
    var d = ctx.createImageData(2, 1);
    d.data[0] = 12;
    d.data[1] = 23;
    d.data[2] = 34;
    d.data[3] = 255;
    d.data[4] = 45;
    d.data[5] = 56;
    d.data[6] = 67;
    d.data[7] = 255;
    ctx.putImageData(d, 0, 0);
    d = null;
    d = ctx.getImageData(0, 0, 2, 1);

    if (d.data[0] === 12 && d.data[1] === 23 && d.data[2] === 34 && d.data[3] === 255 && d.data[4] === 45 && d.data[5] === 56 && d.data[6] === 67 && d.data[7] === 255) {
      usable = true;
    }
  } catch (err) {}

  return usable;
}; // Check if createImageBitmap(img, sx, sy, sw, sh) signature works correctly
// with JPEG images oriented with Exif;
// https://bugs.chromium.org/p/chromium/issues/detail?id=1220671
// TODO: remove after it's fixed in chrome for at least 2 releases


module.exports.cib_can_use_region = function cib_can_use_region() {
  return new Promise(function (resolve) {
    if (typeof createImageBitmap === 'undefined') {
      resolve(false);
      return;
    }

    var image = new Image();
    image.src = 'data:image/jpeg;base64,' + '/9j/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAYAAAEaAAUAAAABAAAASgEbAAUAA' + 'AABAAAAUgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAABIAAAAAQAAAEgAAAAB/9' + 'sAQwAEAwMEAwMEBAMEBQQEBQYKBwYGBgYNCQoICg8NEBAPDQ8OERMYFBESFxIODxUcFRc' + 'ZGRsbGxAUHR8dGh8YGhsa/9sAQwEEBQUGBQYMBwcMGhEPERoaGhoaGhoaGhoaGhoaGhoa' + 'GhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoa/8IAEQgAAQACAwERAAIRAQMRA' + 'f/EABQAAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAA' + 'IQAxAAAAF/P//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAA' + 'AAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIB' + 'AT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAA' + 'AAAAAAAAAD/2gAIAQEAAT8hf//aAAwDAQACAAMAAAAQH//EABQRAQAAAAAAAAAAAAAAAA' + 'AAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABQ' + 'QAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Qf//Z';

    image.onload = function () {
      createImageBitmap(image, 0, 0, image.width, image.height).then(function (bitmap) {
        if (bitmap.width === image.width && bitmap.height === image.height) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, function () {
        return resolve(false);
      });
    };

    image.onerror = function () {
      return resolve(false);
    };
  });
};

},{}],17:[function(_dereq_,module,exports){

module.exports = function () {
  var MathLib = _dereq_('./mathlib');

  var mathLib;
  /* eslint-disable no-undef */

  onmessage = function onmessage(ev) {
    var tileOpts = ev.data.opts;
    var returnBitmap = false;

    if (!tileOpts.src && tileOpts.srcBitmap) {
      var canvas = new OffscreenCanvas(tileOpts.width, tileOpts.height);
      var ctx = canvas.getContext('2d', {
        alpha: Boolean(tileOpts.alpha)
      });
      ctx.drawImage(tileOpts.srcBitmap, 0, 0);
      tileOpts.src = ctx.getImageData(0, 0, tileOpts.width, tileOpts.height).data;
      canvas.width = canvas.height = 0;
      canvas = null;
      tileOpts.srcBitmap.close();
      tileOpts.srcBitmap = null;
      returnBitmap = true;
    }

    if (!mathLib) mathLib = new MathLib(ev.data.features); // Use multimath's sync auto-init. Avoid Promise use in old browsers,
    // because polyfills are not propagated to webworker.

    var data = mathLib.resizeAndUnsharp(tileOpts);

    if (returnBitmap) {
      var toImageData = new ImageData(new Uint8ClampedArray(data), tileOpts.toWidth, tileOpts.toHeight);

      var _canvas = new OffscreenCanvas(tileOpts.toWidth, tileOpts.toHeight);

      var _ctx = _canvas.getContext('2d', {
        alpha: Boolean(tileOpts.alpha)
      });

      _ctx.putImageData(toImageData, 0, 0);

      createImageBitmap(_canvas).then(function (bitmap) {
        postMessage({
          bitmap: bitmap
        }, [bitmap]);
      });
    } else {
      postMessage({
        data: data
      }, [data.buffer]);
    }
  };
};

},{"./mathlib":1}],18:[function(_dereq_,module,exports){
// Calculate Gaussian blur of an image using IIR filter
// The method is taken from Intel's white paper and code example attached to it:
// https://software.intel.com/en-us/articles/iir-gaussian-blur-filter
// -implementation-using-intel-advanced-vector-extensions

var a0, a1, a2, a3, b1, b2, left_corner, right_corner;

function gaussCoef(sigma) {
  if (sigma < 0.5) {
    sigma = 0.5;
  }

  var a = Math.exp(0.726 * 0.726) / sigma,
      g1 = Math.exp(-a),
      g2 = Math.exp(-2 * a),
      k = (1 - g1) * (1 - g1) / (1 + 2 * a * g1 - g2);

  a0 = k;
  a1 = k * (a - 1) * g1;
  a2 = k * (a + 1) * g1;
  a3 = -k * g2;
  b1 = 2 * g1;
  b2 = -g2;
  left_corner = (a0 + a1) / (1 - b1 - b2);
  right_corner = (a2 + a3) / (1 - b1 - b2);

  // Attempt to force type to FP32.
  return new Float32Array([ a0, a1, a2, a3, b1, b2, left_corner, right_corner ]);
}

function convolveMono16(src, out, line, coeff, width, height) {
  // takes src image and writes the blurred and transposed result into out

  var prev_src, curr_src, curr_out, prev_out, prev_prev_out;
  var src_index, out_index, line_index;
  var i, j;
  var coeff_a0, coeff_a1, coeff_b1, coeff_b2;

  for (i = 0; i < height; i++) {
    src_index = i * width;
    out_index = i;
    line_index = 0;

    // left to right
    prev_src = src[src_index];
    prev_prev_out = prev_src * coeff[6];
    prev_out = prev_prev_out;

    coeff_a0 = coeff[0];
    coeff_a1 = coeff[1];
    coeff_b1 = coeff[4];
    coeff_b2 = coeff[5];

    for (j = 0; j < width; j++) {
      curr_src = src[src_index];

      curr_out = curr_src * coeff_a0 +
                 prev_src * coeff_a1 +
                 prev_out * coeff_b1 +
                 prev_prev_out * coeff_b2;

      prev_prev_out = prev_out;
      prev_out = curr_out;
      prev_src = curr_src;

      line[line_index] = prev_out;
      line_index++;
      src_index++;
    }

    src_index--;
    line_index--;
    out_index += height * (width - 1);

    // right to left
    prev_src = src[src_index];
    prev_prev_out = prev_src * coeff[7];
    prev_out = prev_prev_out;
    curr_src = prev_src;

    coeff_a0 = coeff[2];
    coeff_a1 = coeff[3];

    for (j = width - 1; j >= 0; j--) {
      curr_out = curr_src * coeff_a0 +
                 prev_src * coeff_a1 +
                 prev_out * coeff_b1 +
                 prev_prev_out * coeff_b2;

      prev_prev_out = prev_out;
      prev_out = curr_out;

      prev_src = curr_src;
      curr_src = src[src_index];

      out[out_index] = line[line_index] + prev_out;

      src_index--;
      line_index--;
      out_index -= height;
    }
  }
}


function blurMono16(src, width, height, radius) {
  // Quick exit on zero radius
  if (!radius) { return; }

  var out      = new Uint16Array(src.length),
      tmp_line = new Float32Array(Math.max(width, height));

  var coeff = gaussCoef(radius);

  convolveMono16(src, out, tmp_line, coeff, width, height);
  convolveMono16(out, src, tmp_line, coeff, height, width);
}

module.exports = blurMono16;

},{}],19:[function(_dereq_,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function () {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}

},{}],20:[function(_dereq_,module,exports){


var assign         = _dereq_('object-assign');
var base64decode   = _dereq_('./lib/base64decode');
var hasWebAssembly = _dereq_('./lib/wa_detect');


var DEFAULT_OPTIONS = {
  js: true,
  wasm: true
};


function MultiMath(options) {
  if (!(this instanceof MultiMath)) return new MultiMath(options);

  var opts = assign({}, DEFAULT_OPTIONS, options || {});

  this.options         = opts;

  this.__cache         = {};

  this.__init_promise  = null;
  this.__modules       = opts.modules || {};
  this.__memory        = null;
  this.__wasm          = {};

  this.__isLE = ((new Uint32Array((new Uint8Array([ 1, 0, 0, 0 ])).buffer))[0] === 1);

  if (!this.options.js && !this.options.wasm) {
    throw new Error('mathlib: at least "js" or "wasm" should be enabled');
  }
}


MultiMath.prototype.has_wasm = hasWebAssembly;


MultiMath.prototype.use = function (module) {
  this.__modules[module.name] = module;

  // Pin the best possible implementation
  if (this.options.wasm && this.has_wasm() && module.wasm_fn) {
    this[module.name] = module.wasm_fn;
  } else {
    this[module.name] = module.fn;
  }

  return this;
};


MultiMath.prototype.init = function () {
  if (this.__init_promise) return this.__init_promise;

  if (!this.options.js && this.options.wasm && !this.has_wasm()) {
    return Promise.reject(new Error('mathlib: only "wasm" was enabled, but it\'s not supported'));
  }

  var self = this;

  this.__init_promise = Promise.all(Object.keys(self.__modules).map(function (name) {
    var module = self.__modules[name];

    if (!self.options.wasm || !self.has_wasm() || !module.wasm_fn) return null;

    // If already compiled - exit
    if (self.__wasm[name]) return null;

    // Compile wasm source
    return WebAssembly.compile(self.__base64decode(module.wasm_src))
      .then(function (m) { self.__wasm[name] = m; });
  }))
    .then(function () { return self; });

  return this.__init_promise;
};


////////////////////////////////////////////////////////////////////////////////
// Methods below are for internal use from plugins


// Simple decode base64 to typed array. Useful to load embedded webassembly
// code. You probably don't need to call this method directly.
//
MultiMath.prototype.__base64decode = base64decode;


// Increase current memory to include specified number of bytes. Do nothing if
// size is already ok. You probably don't need to call this method directly,
// because it will be invoked from `.__instance()`.
//
MultiMath.prototype.__reallocate = function mem_grow_to(bytes) {
  if (!this.__memory) {
    this.__memory = new WebAssembly.Memory({
      initial: Math.ceil(bytes / (64 * 1024))
    });
    return this.__memory;
  }

  var mem_size = this.__memory.buffer.byteLength;

  if (mem_size < bytes) {
    this.__memory.grow(Math.ceil((bytes - mem_size) / (64 * 1024)));
  }

  return this.__memory;
};


// Returns instantinated webassembly item by name, with specified memory size
// and environment.
// - use cache if available
// - do sync module init, if async init was not called earlier
// - allocate memory if not enougth
// - can export functions to webassembly via "env_extra",
//   for example, { exp: Math.exp }
//
MultiMath.prototype.__instance = function instance(name, memsize, env_extra) {
  if (memsize) this.__reallocate(memsize);

  // If .init() was not called, do sync compile
  if (!this.__wasm[name]) {
    var module = this.__modules[name];
    this.__wasm[name] = new WebAssembly.Module(this.__base64decode(module.wasm_src));
  }

  if (!this.__cache[name]) {
    var env_base = {
      memoryBase: 0,
      memory: this.__memory,
      tableBase: 0,
      table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    };

    this.__cache[name] = new WebAssembly.Instance(this.__wasm[name], {
      env: assign(env_base, env_extra || {})
    });
  }

  return this.__cache[name];
};


// Helper to calculate memory aligh for pointers. Webassembly does not require
// this, but you may wish to experiment. Default base = 8;
//
MultiMath.prototype.__align = function align(number, base) {
  base = base || 8;
  var reminder = number % base;
  return number + (reminder ? base - reminder : 0);
};


module.exports = MultiMath;

},{"./lib/base64decode":21,"./lib/wa_detect":22,"object-assign":23}],21:[function(_dereq_,module,exports){


var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';


module.exports = function base64decode(str) {
  var input = str.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max   = input.length;

  var out = new Uint8Array((max * 3) >> 2);

  // Collect by 6*4 bits (3 bytes)

  var bits = 0;
  var ptr  = 0;

  for (var idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      out[ptr++] = (bits >> 16) & 0xFF;
      out[ptr++] = (bits >> 8) & 0xFF;
      out[ptr++] = bits & 0xFF;
    }

    bits = (bits << 6) | BASE64_MAP.indexOf(input.charAt(idx));
  }

  // Dump tail

  var tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    out[ptr++] = (bits >> 16) & 0xFF;
    out[ptr++] = (bits >> 8) & 0xFF;
    out[ptr++] = bits & 0xFF;
  } else if (tailbits === 18) {
    out[ptr++] = (bits >> 10) & 0xFF;
    out[ptr++] = (bits >> 2) & 0xFF;
  } else if (tailbits === 12) {
    out[ptr++] = (bits >> 4) & 0xFF;
  }

  return out;
};

},{}],22:[function(_dereq_,module,exports){


var wa;


module.exports = function hasWebAssembly() {
  // use cache if called before;
  if (typeof wa !== 'undefined') return wa;

  wa = false;

  if (typeof WebAssembly === 'undefined') return wa;

  // If WebAssenbly is disabled, code can throw on compile
  try {
    // https://github.com/brion/min-wasm-fail/blob/master/min-wasm-fail.in.js
    // Additional check that WA internals are correct

    /* eslint-disable comma-spacing, max-len */
    var bin      = new Uint8Array([ 0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11 ]);
    var module   = new WebAssembly.Module(bin);
    var instance = new WebAssembly.Instance(module, {});

    // test storing to and loading from a non-zero location via a parameter.
    // Safari on iOS 11.2.5 returns 0 unexpectedly at non-zero locations
    if (instance.exports.test(4) !== 0) wa = true;

    return wa;
  } catch (__) {}

  return wa;
};

},{}],23:[function(_dereq_,module,exports){
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],24:[function(_dereq_,module,exports){
var bundleFn = arguments[3];
var sources = arguments[4];
var cache = arguments[5];

var stringify = JSON.stringify;

module.exports = function (fn, options) {
    var wkey;
    var cacheKeys = Object.keys(cache);

    for (var i = 0, l = cacheKeys.length; i < l; i++) {
        var key = cacheKeys[i];
        var exp = cache[key].exports;
        // Using babel as a transpiler to use esmodule, the export will always
        // be an object with the default export as a property of it. To ensure
        // the existing api and babel esmodule exports are both supported we
        // check for both
        if (exp === fn || exp && exp.default === fn) {
            wkey = key;
            break;
        }
    }

    if (!wkey) {
        wkey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
        var wcache = {};
        for (var i = 0, l = cacheKeys.length; i < l; i++) {
            var key = cacheKeys[i];
            wcache[key] = key;
        }
        sources[wkey] = [
            'function(require,module,exports){' + fn + '(self); }',
            wcache
        ];
    }
    var skey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);

    var scache = {}; scache[wkey] = wkey;
    sources[skey] = [
        'function(require,module,exports){' +
            // try to call default if defined to also support babel esmodule exports
            'var f = require(' + stringify(wkey) + ');' +
            '(f.default ? f.default : f)(self);' +
        '}',
        scache
    ];

    var workerSources = {};
    resolveSources(skey);

    function resolveSources(key) {
        workerSources[key] = true;

        for (var depPath in sources[key][1]) {
            var depKey = sources[key][1][depPath];
            if (!workerSources[depKey]) {
                resolveSources(depKey);
            }
        }
    }

    var src = '(' + bundleFn + ')({'
        + Object.keys(workerSources).map(function (key) {
            return stringify(key) + ':['
                + sources[key][0]
                + ',' + stringify(sources[key][1]) + ']'
            ;
        }).join(',')
        + '},{},[' + stringify(skey) + '])'
    ;

    var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

    var blob = new Blob([src], { type: 'text/javascript' });
    if (options && options.bare) { return blob; }
    var workerUrl = URL.createObjectURL(blob);
    var worker = new Worker(workerUrl);
    worker.objectURL = workerUrl;
    return worker;
};

},{}],"/index.js":[function(_dereq_,module,exports){

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var assign = _dereq_('object-assign');

var webworkify = _dereq_('webworkify');

var MathLib = _dereq_('./lib/mathlib');

var Pool = _dereq_('./lib/pool');

var utils = _dereq_('./lib/utils');

var worker = _dereq_('./lib/worker');

var createStages = _dereq_('./lib/stepper');

var createRegions = _dereq_('./lib/tiler'); // Deduplicate pools & limiters with the same configs
// when user creates multiple pica instances.


var singletones = {};
var NEED_SAFARI_FIX = false;

try {
  if (typeof navigator !== 'undefined' && navigator.userAgent) {
    NEED_SAFARI_FIX = navigator.userAgent.indexOf('Safari') >= 0;
  }
} catch (e) {}

var concurrency = 1;

if (typeof navigator !== 'undefined') {
  concurrency = Math.min(navigator.hardwareConcurrency || 1, 4);
}

var DEFAULT_PICA_OPTS = {
  tile: 1024,
  concurrency: concurrency,
  features: ['js', 'wasm', 'ww'],
  idle: 2000,
  createCanvas: function createCanvas(width, height) {
    var tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = width;
    tmpCanvas.height = height;
    return tmpCanvas;
  }
};
var DEFAULT_RESIZE_OPTS = {
  quality: 3,
  alpha: false,
  unsharpAmount: 0,
  unsharpRadius: 0.0,
  unsharpThreshold: 0
};
var CAN_NEW_IMAGE_DATA = false;
var CAN_CREATE_IMAGE_BITMAP = false;
var CAN_USE_CANVAS_GET_IMAGE_DATA = false;
var CAN_USE_OFFSCREEN_CANVAS = false;
var CAN_USE_CIB_REGION_FOR_IMAGE = false;

function workerFabric() {
  return {
    value: webworkify(worker),
    destroy: function destroy() {
      this.value.terminate();

      if (typeof window !== 'undefined') {
        var url = window.URL || window.webkitURL || window.mozURL || window.msURL;

        if (url && url.revokeObjectURL && this.value.objectURL) {
          url.revokeObjectURL(this.value.objectURL);
        }
      }
    }
  };
} ////////////////////////////////////////////////////////////////////////////////
// API methods


function Pica(options) {
  if (!(this instanceof Pica)) return new Pica(options);
  this.options = assign({}, DEFAULT_PICA_OPTS, options || {});
  var limiter_key = "lk_".concat(this.options.concurrency); // Share limiters to avoid multiple parallel workers when user creates
  // multiple pica instances.

  this.__limit = singletones[limiter_key] || utils.limiter(this.options.concurrency);
  if (!singletones[limiter_key]) singletones[limiter_key] = this.__limit; // List of supported features, according to options & browser/node.js

  this.features = {
    js: false,
    // pure JS implementation, can be disabled for testing
    wasm: false,
    // webassembly implementation for heavy functions
    cib: false,
    // resize via createImageBitmap (only FF at this moment)
    ww: false // webworkers

  };
  this.__workersPool = null; // Store requested features for webworkers

  this.__requested_features = [];
  this.__mathlib = null;
}

Pica.prototype.init = function () {
  var _this = this;

  if (this.__initPromise) return this.__initPromise; // Test if we can create ImageData without canvas and memory copy

  if (typeof ImageData !== 'undefined' && typeof Uint8ClampedArray !== 'undefined') {
    try {
      /* eslint-disable no-new */
      new ImageData(new Uint8ClampedArray(400), 10, 10);
      CAN_NEW_IMAGE_DATA = true;
    } catch (__) {}
  } // ImageBitmap can be effective in 2 places:
  //
  // 1. Threaded jpeg unpack (basic)
  // 2. Built-in resize (blocked due problem in chrome, see issue #89)
  //
  // For basic use we also need ImageBitmap wo support .close() method,
  // see https://developer.mozilla.org/ru/docs/Web/API/ImageBitmap


  if (typeof ImageBitmap !== 'undefined') {
    if (ImageBitmap.prototype && ImageBitmap.prototype.close) {
      CAN_CREATE_IMAGE_BITMAP = true;
    } else {
      this.debug('ImageBitmap does not support .close(), disabled');
    }
  }

  var features = this.options.features.slice();

  if (features.indexOf('all') >= 0) {
    features = ['cib', 'wasm', 'js', 'ww'];
  }

  this.__requested_features = features;
  this.__mathlib = new MathLib(features); // Check WebWorker support if requested

  if (features.indexOf('ww') >= 0) {
    if (typeof window !== 'undefined' && 'Worker' in window) {
      // IE <= 11 don't allow to create webworkers from string. We should check it.
      // https://connect.microsoft.com/IE/feedback/details/801810/web-workers-from-blob-urls-in-ie-10-and-11
      try {
        var wkr = _dereq_('webworkify')(function () {});

        wkr.terminate();
        this.features.ww = true; // pool uniqueness depends on pool config + webworker config

        var wpool_key = "wp_".concat(JSON.stringify(this.options));

        if (singletones[wpool_key]) {
          this.__workersPool = singletones[wpool_key];
        } else {
          this.__workersPool = new Pool(workerFabric, this.options.idle);
          singletones[wpool_key] = this.__workersPool;
        }
      } catch (__) {}
    }
  }

  var initMath = this.__mathlib.init().then(function (mathlib) {
    // Copy detected features
    assign(_this.features, mathlib.features);
  });

  var checkCibResize;

  if (!CAN_CREATE_IMAGE_BITMAP) {
    checkCibResize = Promise.resolve(false);
  } else {
    checkCibResize = utils.cib_support(this.options.createCanvas).then(function (status) {
      if (_this.features.cib && features.indexOf('cib') < 0) {
        _this.debug('createImageBitmap() resize supported, but disabled by config');

        return;
      }

      if (features.indexOf('cib') >= 0) _this.features.cib = status;
    });
  }

  CAN_USE_CANVAS_GET_IMAGE_DATA = utils.can_use_canvas(this.options.createCanvas);
  var checkOffscreenCanvas;

  if (CAN_CREATE_IMAGE_BITMAP && CAN_NEW_IMAGE_DATA && features.indexOf('ww') !== -1) {
    checkOffscreenCanvas = utils.worker_offscreen_canvas_support();
  } else {
    checkOffscreenCanvas = Promise.resolve(false);
  }

  checkOffscreenCanvas = checkOffscreenCanvas.then(function (result) {
    CAN_USE_OFFSCREEN_CANVAS = result;
  }); // we use createImageBitmap to crop image data and pass it to workers,
  // so need to check whether function works correctly;
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1220671

  var checkCibRegion = utils.cib_can_use_region().then(function (result) {
    CAN_USE_CIB_REGION_FOR_IMAGE = result;
  }); // Init math lib. That's async because can load some

  this.__initPromise = Promise.all([initMath, checkCibResize, checkOffscreenCanvas, checkCibRegion]).then(function () {
    return _this;
  });
  return this.__initPromise;
}; // Call resizer in webworker or locally, depending on config


Pica.prototype.__invokeResize = function (tileOpts, opts) {
  var _this2 = this;

  // Share cache between calls:
  //
  // - wasm instance
  // - wasm memory object
  //
  opts.__mathCache = opts.__mathCache || {};
  return Promise.resolve().then(function () {
    if (!_this2.features.ww) {
      // not possible to have ImageBitmap here if user disabled WW
      return {
        data: _this2.__mathlib.resizeAndUnsharp(tileOpts, opts.__mathCache)
      };
    }

    return new Promise(function (resolve, reject) {
      var w = _this2.__workersPool.acquire();

      if (opts.cancelToken) opts.cancelToken["catch"](function (err) {
        return reject(err);
      });

      w.value.onmessage = function (ev) {
        w.release();
        if (ev.data.err) reject(ev.data.err);else resolve(ev.data);
      };

      var transfer = [];
      if (tileOpts.src) transfer.push(tileOpts.src.buffer);
      if (tileOpts.srcBitmap) transfer.push(tileOpts.srcBitmap);
      w.value.postMessage({
        opts: tileOpts,
        features: _this2.__requested_features,
        preload: {
          wasm_nodule: _this2.__mathlib.__
        }
      }, transfer);
    });
  });
}; // this function can return promise if createImageBitmap is used


Pica.prototype.__extractTileData = function (tile, from, opts, stageEnv, extractTo) {
  if (this.features.ww && CAN_USE_OFFSCREEN_CANVAS && ( // createImageBitmap doesn't work for images (Image, ImageBitmap) with Exif orientation in Chrome,
  // can use canvas because canvas doesn't have orientation;
  // see https://bugs.chromium.org/p/chromium/issues/detail?id=1220671
  utils.isCanvas(from) || CAN_USE_CIB_REGION_FOR_IMAGE)) {
    this.debug('Create tile for OffscreenCanvas');
    return createImageBitmap(stageEnv.srcImageBitmap || from, tile.x, tile.y, tile.width, tile.height).then(function (bitmap) {
      extractTo.srcBitmap = bitmap;
      return extractTo;
    });
  } // Extract tile RGBA buffer, depending on input type


  if (utils.isCanvas(from)) {
    if (!stageEnv.srcCtx) stageEnv.srcCtx = from.getContext('2d', {
      alpha: Boolean(opts.alpha)
    }); // If input is Canvas - extract region data directly

    this.debug('Get tile pixel data');
    extractTo.src = stageEnv.srcCtx.getImageData(tile.x, tile.y, tile.width, tile.height).data;
    return extractTo;
  } // If input is Image or decoded to ImageBitmap,
  // draw region to temporary canvas and extract data from it
  //
  // Note! Attempt to reuse this canvas causes significant slowdown in chrome
  //


  this.debug('Draw tile imageBitmap/image to temporary canvas');
  var tmpCanvas = this.options.createCanvas(tile.width, tile.height);
  var tmpCtx = tmpCanvas.getContext('2d', {
    alpha: Boolean(opts.alpha)
  });
  tmpCtx.globalCompositeOperation = 'copy';
  tmpCtx.drawImage(stageEnv.srcImageBitmap || from, tile.x, tile.y, tile.width, tile.height, 0, 0, tile.width, tile.height);
  this.debug('Get tile pixel data');
  extractTo.src = tmpCtx.getImageData(0, 0, tile.width, tile.height).data; // Safari 12 workaround
  // https://github.com/nodeca/pica/issues/199

  tmpCanvas.width = tmpCanvas.height = 0;
  return extractTo;
};

Pica.prototype.__landTileData = function (tile, result, stageEnv) {
  var toImageData;
  this.debug('Convert raw rgba tile result to ImageData');

  if (result.bitmap) {
    stageEnv.toCtx.drawImage(result.bitmap, tile.toX, tile.toY);
    return null;
  }

  if (CAN_NEW_IMAGE_DATA) {
    // this branch is for modern browsers
    // If `new ImageData()` & Uint8ClampedArray suported
    toImageData = new ImageData(new Uint8ClampedArray(result.data), tile.toWidth, tile.toHeight);
  } else {
    // fallback for `node-canvas` and old browsers
    // (IE11 has ImageData but does not support `new ImageData()`)
    toImageData = stageEnv.toCtx.createImageData(tile.toWidth, tile.toHeight);

    if (toImageData.data.set) {
      toImageData.data.set(result.data);
    } else {
      // IE9 don't have `.set()`
      for (var i = toImageData.data.length - 1; i >= 0; i--) {
        toImageData.data[i] = result.data[i];
      }
    }
  }

  this.debug('Draw tile');

  if (NEED_SAFARI_FIX) {
    // Safari draws thin white stripes between tiles without this fix
    stageEnv.toCtx.putImageData(toImageData, tile.toX, tile.toY, tile.toInnerX - tile.toX, tile.toInnerY - tile.toY, tile.toInnerWidth + 1e-5, tile.toInnerHeight + 1e-5);
  } else {
    stageEnv.toCtx.putImageData(toImageData, tile.toX, tile.toY, tile.toInnerX - tile.toX, tile.toInnerY - tile.toY, tile.toInnerWidth, tile.toInnerHeight);
  }

  return null;
};

Pica.prototype.__tileAndResize = function (from, to, opts) {
  var _this3 = this;

  var stageEnv = {
    srcCtx: null,
    srcImageBitmap: null,
    isImageBitmapReused: false,
    toCtx: null
  };

  var processTile = function processTile(tile) {
    return _this3.__limit(function () {
      if (opts.canceled) return opts.cancelToken;
      var tileOpts = {
        width: tile.width,
        height: tile.height,
        toWidth: tile.toWidth,
        toHeight: tile.toHeight,
        scaleX: tile.scaleX,
        scaleY: tile.scaleY,
        offsetX: tile.offsetX,
        offsetY: tile.offsetY,
        quality: opts.quality,
        alpha: opts.alpha,
        unsharpAmount: opts.unsharpAmount,
        unsharpRadius: opts.unsharpRadius,
        unsharpThreshold: opts.unsharpThreshold
      };

      _this3.debug('Invoke resize math');

      return Promise.resolve(tileOpts).then(function (tileOpts) {
        return _this3.__extractTileData(tile, from, opts, stageEnv, tileOpts);
      }).then(function (tileOpts) {
        _this3.debug('Invoke resize math');

        return _this3.__invokeResize(tileOpts, opts);
      }).then(function (result) {
        if (opts.canceled) return opts.cancelToken;
        stageEnv.srcImageData = null;
        return _this3.__landTileData(tile, result, stageEnv);
      });
    });
  }; // Need to normalize data source first. It can be canvas or image.
  // If image - try to decode in background if possible


  return Promise.resolve().then(function () {
    stageEnv.toCtx = to.getContext('2d', {
      alpha: Boolean(opts.alpha)
    });
    if (utils.isCanvas(from)) return null;

    if (utils.isImageBitmap(from)) {
      stageEnv.srcImageBitmap = from;
      stageEnv.isImageBitmapReused = true;
      return null;
    }

    if (utils.isImage(from)) {
      // try do decode image in background for faster next operations;
      // if we're using offscreen canvas, cib is called per tile, so not needed here
      if (!CAN_CREATE_IMAGE_BITMAP) return null;

      _this3.debug('Decode image via createImageBitmap');

      return createImageBitmap(from).then(function (imageBitmap) {
        stageEnv.srcImageBitmap = imageBitmap;
      }) // Suppress error to use fallback, if method fails
      // https://github.com/nodeca/pica/issues/190

      /* eslint-disable no-unused-vars */
      ["catch"](function (e) {
        return null;
      });
    }

    throw new Error('Pica: ".from" should be Image, Canvas or ImageBitmap');
  }).then(function () {
    if (opts.canceled) return opts.cancelToken;

    _this3.debug('Calculate tiles'); //
    // Here we are with "normalized" source,
    // follow to tiling
    //


    var regions = createRegions({
      width: opts.width,
      height: opts.height,
      srcTileSize: _this3.options.tile,
      toWidth: opts.toWidth,
      toHeight: opts.toHeight,
      destTileBorder: opts.__destTileBorder
    });
    var jobs = regions.map(function (tile) {
      return processTile(tile);
    });

    function cleanup(stageEnv) {
      if (stageEnv.srcImageBitmap) {
        if (!stageEnv.isImageBitmapReused) stageEnv.srcImageBitmap.close();
        stageEnv.srcImageBitmap = null;
      }
    }

    _this3.debug('Process tiles');

    return Promise.all(jobs).then(function () {
      _this3.debug('Finished!');

      cleanup(stageEnv);
      return to;
    }, function (err) {
      cleanup(stageEnv);
      throw err;
    });
  });
};

Pica.prototype.__processStages = function (stages, from, to, opts) {
  var _this4 = this;

  if (opts.canceled) return opts.cancelToken;

  var _stages$shift = stages.shift(),
      _stages$shift2 = _slicedToArray(_stages$shift, 2),
      toWidth = _stages$shift2[0],
      toHeight = _stages$shift2[1];

  var isLastStage = stages.length === 0;
  opts = assign({}, opts, {
    toWidth: toWidth,
    toHeight: toHeight,
    // only use user-defined quality for the last stage,
    // use simpler (Hamming) filter for the first stages where
    // scale factor is large enough (more than 2-3)
    quality: isLastStage ? opts.quality : Math.min(1, opts.quality)
  });
  var tmpCanvas;

  if (!isLastStage) {
    // create temporary canvas
    tmpCanvas = this.options.createCanvas(toWidth, toHeight);
  }

  return this.__tileAndResize(from, isLastStage ? to : tmpCanvas, opts).then(function () {
    if (isLastStage) return to;
    opts.width = toWidth;
    opts.height = toHeight;
    return _this4.__processStages(stages, tmpCanvas, to, opts);
  }).then(function (res) {
    if (tmpCanvas) {
      // Safari 12 workaround
      // https://github.com/nodeca/pica/issues/199
      tmpCanvas.width = tmpCanvas.height = 0;
    }

    return res;
  });
};

Pica.prototype.__resizeViaCreateImageBitmap = function (from, to, opts) {
  var _this5 = this;

  var toCtx = to.getContext('2d', {
    alpha: Boolean(opts.alpha)
  });
  this.debug('Resize via createImageBitmap()');
  return createImageBitmap(from, {
    resizeWidth: opts.toWidth,
    resizeHeight: opts.toHeight,
    resizeQuality: utils.cib_quality_name(opts.quality)
  }).then(function (imageBitmap) {
    if (opts.canceled) return opts.cancelToken; // if no unsharp - draw directly to output canvas

    if (!opts.unsharpAmount) {
      toCtx.drawImage(imageBitmap, 0, 0);
      imageBitmap.close();
      toCtx = null;

      _this5.debug('Finished!');

      return to;
    }

    _this5.debug('Unsharp result');

    var tmpCanvas = _this5.options.createCanvas(opts.toWidth, opts.toHeight);

    var tmpCtx = tmpCanvas.getContext('2d', {
      alpha: Boolean(opts.alpha)
    });
    tmpCtx.drawImage(imageBitmap, 0, 0);
    imageBitmap.close();
    var iData = tmpCtx.getImageData(0, 0, opts.toWidth, opts.toHeight);

    _this5.__mathlib.unsharp_mask(iData.data, opts.toWidth, opts.toHeight, opts.unsharpAmount, opts.unsharpRadius, opts.unsharpThreshold);

    toCtx.putImageData(iData, 0, 0); // Safari 12 workaround
    // https://github.com/nodeca/pica/issues/199

    tmpCanvas.width = tmpCanvas.height = 0;
    iData = tmpCtx = tmpCanvas = toCtx = null;

    _this5.debug('Finished!');

    return to;
  });
};

Pica.prototype.resize = function (from, to, options) {
  var _this6 = this;

  this.debug('Start resize...');
  var opts = assign({}, DEFAULT_RESIZE_OPTS);

  if (!isNaN(options)) {
    opts = assign(opts, {
      quality: options
    });
  } else if (options) {
    opts = assign(opts, options);
  }

  opts.toWidth = to.width;
  opts.toHeight = to.height;
  opts.width = from.naturalWidth || from.width;
  opts.height = from.naturalHeight || from.height; // Prevent stepper from infinite loop

  if (to.width === 0 || to.height === 0) {
    return Promise.reject(new Error("Invalid output size: ".concat(to.width, "x").concat(to.height)));
  }

  if (opts.unsharpRadius > 2) opts.unsharpRadius = 2;
  opts.canceled = false;

  if (opts.cancelToken) {
    // Wrap cancelToken to avoid successive resolve & set flag
    opts.cancelToken = opts.cancelToken.then(function (data) {
      opts.canceled = true;
      throw data;
    }, function (err) {
      opts.canceled = true;
      throw err;
    });
  }

  var DEST_TILE_BORDER = 3; // Max possible filter window size

  opts.__destTileBorder = Math.ceil(Math.max(DEST_TILE_BORDER, 2.5 * opts.unsharpRadius | 0));
  return this.init().then(function () {
    if (opts.canceled) return opts.cancelToken; // if createImageBitmap supports resize, just do it and return

    if (_this6.features.cib) {
      return _this6.__resizeViaCreateImageBitmap(from, to, opts);
    }

    if (!CAN_USE_CANVAS_GET_IMAGE_DATA) {
      var err = new Error('Pica: cannot use getImageData on canvas, ' + "make sure fingerprinting protection isn't enabled");
      err.code = 'ERR_GET_IMAGE_DATA';
      throw err;
    } //
    // No easy way, let's resize manually via arrays
    //


    var stages = createStages(opts.width, opts.height, opts.toWidth, opts.toHeight, _this6.options.tile, opts.__destTileBorder);
    return _this6.__processStages(stages, from, to, opts);
  });
}; // RGBA buffer resize
//


Pica.prototype.resizeBuffer = function (options) {
  var _this7 = this;

  var opts = assign({}, DEFAULT_RESIZE_OPTS, options);
  return this.init().then(function () {
    return _this7.__mathlib.resizeAndUnsharp(opts);
  });
};

Pica.prototype.toBlob = function (canvas, mimeType, quality) {
  mimeType = mimeType || 'image/png';
  return new Promise(function (resolve) {
    if (canvas.toBlob) {
      canvas.toBlob(function (blob) {
        return resolve(blob);
      }, mimeType, quality);
      return;
    }

    if (canvas.convertToBlob) {
      resolve(canvas.convertToBlob({
        type: mimeType,
        quality: quality
      }));
      return;
    } // Fallback for old browsers


    var asString = atob(canvas.toDataURL(mimeType, quality).split(',')[1]);
    var len = asString.length;
    var asBuffer = new Uint8Array(len);

    for (var i = 0; i < len; i++) {
      asBuffer[i] = asString.charCodeAt(i);
    }

    resolve(new Blob([asBuffer], {
      type: mimeType
    }));
  });
};

Pica.prototype.debug = function () {};

module.exports = Pica;

},{"./lib/mathlib":1,"./lib/pool":13,"./lib/stepper":14,"./lib/tiler":15,"./lib/utils":16,"./lib/worker":17,"object-assign":23,"webworkify":24}]},{},[])("/index.js")
});
});

var image_traverse = createCommonjsModule(function (module) {

//////////////////////////////////////////////////////////////////////////
// Helpers
//
function error(message, code) {
  var err = new Error(message);
  err.code = code;
  return err;
}


// Convert number to 0xHH string
//
function to_hex(number) {
  var n = number.toString(16).toUpperCase();
  for (var i = 2 - n.length; i > 0; i--) n = '0' + n;
  return '0x' + n;
}


function utf8_encode(str) {
  try {
    return unescape(encodeURIComponent(str));
  } catch (_) {
    return str;
  }
}


function utf8_decode(str) {
  try {
    return decodeURIComponent(escape(str));
  } catch (_) {
    return str;
  }
}


// Check if input is a Uint8Array
//
function is_uint8array(bin) {
  return Object.prototype.toString.call(bin) === '[object Uint8Array]';
}


//////////////////////////////////////////////////////////////////////////
// Exif parser
//
// Input:
//  - jpeg_bin:   Uint8Array - jpeg file
//  - exif_start: Number     - start of TIFF header (after Exif\0\0)
//  - exif_end:   Number     - end of Exif segment
//  - on_entry:   Number     - callback
//
function ExifParser(jpeg_bin, exif_start, exif_end) {
  // Uint8Array, exif without signature (which isn't included in offsets)
  this.input      = jpeg_bin.subarray(exif_start, exif_end);

  // offset correction for `on_entry` callback
  this.start      = exif_start;

  // Check TIFF header (includes byte alignment and first IFD offset)
  var sig = String.fromCharCode.apply(null, this.input.subarray(0, 4));

  if (sig !== 'II\x2A\0' && sig !== 'MM\0\x2A') {
    throw error('invalid TIFF signature', 'EBADDATA');
  }

  // true if motorola (big endian) byte alignment, false if intel
  this.big_endian = sig[0] === 'M';
}


ExifParser.prototype.each = function (on_entry) {
  // allow premature exit
  this.aborted = false;

  var offset = this.read_uint32(4);

  this.ifds_to_read = [ {
    id:     0,
    offset: offset
  } ];

  while (this.ifds_to_read.length > 0 && !this.aborted) {
    var i = this.ifds_to_read.shift();
    if (!i.offset) continue;
    this.scan_ifd(i.id, i.offset, on_entry);
  }
};


ExifParser.prototype.filter = function (on_entry) {
  var ifds = {};

  // make sure IFD0 always exists
  ifds.ifd0 = { id: 0, entries: [] };

  this.each(function (entry) {
    if (on_entry(entry) === false && !entry.is_subifd_link) return;
    if (entry.is_subifd_link && entry.count !== 1 && entry.format !== 4) return; // filter out bogus links

    if (!ifds['ifd' + entry.ifd]) {
      ifds['ifd' + entry.ifd] = { id: entry.ifd, entries: [] };
    }

    ifds['ifd' + entry.ifd].entries.push(entry);
  });

  // thumbnails are not supported just yet, so delete all information related to it
  delete ifds.ifd1;

  // Calculate output size
  var length = 8;
  Object.keys(ifds).forEach(function (ifd_no) {
    length += 2;

    ifds[ifd_no].entries.forEach(function (entry) {
      length += 12 + (entry.data_length > 4 ? Math.ceil(entry.data_length / 2) * 2 : 0);
    });

    length += 4;
  });

  this.output = new Uint8Array(length);
  this.output[0] = this.output[1] = (this.big_endian ? 'M' : 'I').charCodeAt(0);
  this.write_uint16(2, 0x2A);

  var offset = 8;
  var self = this;
  this.write_uint32(4, offset);

  Object.keys(ifds).forEach(function (ifd_no) {
    ifds[ifd_no].written_offset = offset;

    var ifd_start = offset;
    var ifd_end   = ifd_start + 2 + ifds[ifd_no].entries.length * 12 + 4;
    offset = ifd_end;

    self.write_uint16(ifd_start, ifds[ifd_no].entries.length);

    ifds[ifd_no].entries.sort(function (a, b) {
      // IFD entries must be in order of increasing tag IDs
      return a.tag - b.tag;
    }).forEach(function (entry, idx) {
      var entry_offset = ifd_start + 2 + idx * 12;

      self.write_uint16(entry_offset, entry.tag);
      self.write_uint16(entry_offset + 2, entry.format);
      self.write_uint32(entry_offset + 4, entry.count);

      if (entry.is_subifd_link) {
        // filled in later
        if (ifds['ifd' + entry.tag]) ifds['ifd' + entry.tag].link_offset = entry_offset + 8;
      } else if (entry.data_length <= 4) {
        self.output.set(
          self.input.subarray(entry.data_offset - self.start, entry.data_offset - self.start + 4),
          entry_offset + 8
        );
      } else {
        self.write_uint32(entry_offset + 8, offset);
        self.output.set(
          self.input.subarray(entry.data_offset - self.start, entry.data_offset - self.start + entry.data_length),
          offset
        );
        offset += Math.ceil(entry.data_length / 2) * 2;
      }
    });

    var next_ifd = ifds['ifd' + (ifds[ifd_no].id + 1)];
    if (next_ifd) next_ifd.link_offset = ifd_end - 4;
  });

  Object.keys(ifds).forEach(function (ifd_no) {
    if (ifds[ifd_no].written_offset && ifds[ifd_no].link_offset) {
      self.write_uint32(ifds[ifd_no].link_offset, ifds[ifd_no].written_offset);
    }
  });

  if (this.output.length !== offset) throw error('internal error: incorrect buffer size allocated');

  return this.output;
};


ExifParser.prototype.read_uint16 = function (offset) {
  var d = this.input;
  if (offset + 2 > d.length) throw error('unexpected EOF', 'EBADDATA');

  return this.big_endian ?
    d[offset] * 0x100 + d[offset + 1] :
    d[offset] + d[offset + 1] * 0x100;
};


ExifParser.prototype.read_uint32 = function (offset) {
  var d = this.input;
  if (offset + 4 > d.length) throw error('unexpected EOF', 'EBADDATA');

  return this.big_endian ?
    d[offset] * 0x1000000 + d[offset + 1] * 0x10000 + d[offset + 2] * 0x100 + d[offset + 3] :
    d[offset] + d[offset + 1] * 0x100 + d[offset + 2] * 0x10000 + d[offset + 3] * 0x1000000;
};


ExifParser.prototype.write_uint16 = function (offset, value) {
  var d = this.output;

  if (this.big_endian) {
    d[offset]     = (value >>> 8) & 0xFF;
    d[offset + 1] = value & 0xFF;
  } else {
    d[offset]     = value & 0xFF;
    d[offset + 1] = (value >>> 8) & 0xFF;
  }
};


ExifParser.prototype.write_uint32 = function (offset, value) {
  var d = this.output;

  if (this.big_endian) {
    d[offset]     = (value >>> 24) & 0xFF;
    d[offset + 1] = (value >>> 16) & 0xFF;
    d[offset + 2] = (value >>> 8) & 0xFF;
    d[offset + 3] = value & 0xFF;
  } else {
    d[offset]     = value & 0xFF;
    d[offset + 1] = (value >>> 8) & 0xFF;
    d[offset + 2] = (value >>> 16) & 0xFF;
    d[offset + 3] = (value >>> 24) & 0xFF;
  }
};


ExifParser.prototype.is_subifd_link = function (ifd, tag) {
  return (ifd === 0 && tag === 0x8769) || // SubIFD
         (ifd === 0 && tag === 0x8825) || // GPS Info
         (ifd === 0x8769 && tag === 0xA005); // Interop IFD
};


// Returns byte length of a single component of a given format
//
ExifParser.prototype.exif_format_length = function (format) {
  switch (format) {
    case 1: // byte
    case 2: // ascii
    case 6: // sbyte
    case 7: // undefined
      return 1;

    case 3: // short
    case 8: // sshort
      return 2;

    case 4:  // long
    case 9:  // slong
    case 11: // float
      return 4;

    case 5:  // rational
    case 10: // srational
    case 12: // double
      return 8;

    default:
      // unknown type
      return 0;
  }
};


// Reads Exif data
//
ExifParser.prototype.exif_format_read = function (format, offset) {
  var v;

  switch (format) {
    case 1: // byte
    case 2: // ascii
      v = this.input[offset];
      return v;

    case 6: // sbyte
      v = this.input[offset];
      return v | (v & 0x80) * 0x1fffffe;

    case 3: // short
      v = this.read_uint16(offset);
      return v;

    case 8: // sshort
      v = this.read_uint16(offset);
      return v | (v & 0x8000) * 0x1fffe;

    case 4: // long
      v = this.read_uint32(offset);
      return v;

    case 9: // slong
      v = this.read_uint32(offset);
      return v | 0;

    case 5:  // rational
    case 10: // srational
    case 11: // float
    case 12: // double
      return null; // not implemented

    case 7: // undefined
      return null; // blob

    default:
      // unknown type
      return null;
  }
};


ExifParser.prototype.scan_ifd = function (ifd_no, offset, on_entry) {
  var entry_count = this.read_uint16(offset);

  offset += 2;

  for (var i = 0; i < entry_count; i++) {
    var tag    = this.read_uint16(offset);
    var format = this.read_uint16(offset + 2);
    var count  = this.read_uint32(offset + 4);

    var comp_length    = this.exif_format_length(format);
    var data_length    = count * comp_length;
    var data_offset    = data_length <= 4 ? offset + 8 : this.read_uint32(offset + 8);
    var is_subifd_link = false;

    if (data_offset + data_length > this.input.length) {
      throw error('unexpected EOF', 'EBADDATA');
    }

    var value = [];
    var comp_offset = data_offset;

    for (var j = 0; j < count; j++, comp_offset += comp_length) {
      var item = this.exif_format_read(format, comp_offset);
      if (item === null) {
        value = null;
        break;
      }
      value.push(item);
    }

    if (Array.isArray(value) && format === 2) {
      try {
        value = utf8_decode(String.fromCharCode.apply(null, value));
      } catch (_) {
        value = null;
      }

      if (value && value[value.length - 1] === '\0') value = value.slice(0, -1);
    }

    if (this.is_subifd_link(ifd_no, tag)) {
      if (Array.isArray(value) && Number.isInteger(value[0]) && value[0] > 0) {
        this.ifds_to_read.push({
          id:     tag,
          offset: value[0]
        });
        is_subifd_link = true;
      }
    }

    var entry = {
      is_big_endian:  this.big_endian,
      ifd:            ifd_no,
      tag:            tag,
      format:         format,
      count:          count,
      entry_offset:   offset + this.start,
      data_length:    data_length,
      data_offset:    data_offset + this.start,
      value:          value,
      is_subifd_link: is_subifd_link
    };

    if (on_entry(entry) === false) {
      this.aborted = true;
      return;
    }

    offset += 12;
  }

  if (ifd_no === 0) {
    this.ifds_to_read.push({
      id:     1,
      offset: this.read_uint32(offset)
    });
  }
};


// Check whether input is a JPEG image
//
// Input:
//  - jpeg_bin: Uint8Array - jpeg file
//
// Returns true if it is and false otherwise
//
module.exports.is_jpeg = function (jpeg_bin) {
  return jpeg_bin.length >= 4 && jpeg_bin[0] === 0xFF && jpeg_bin[1] === 0xD8 && jpeg_bin[2] === 0xFF;
};


// Call an iterator on each segment in the given JPEG image
//
// Input:
//  - jpeg_bin:   Uint8Array - jpeg file
//  - on_segment: Function - callback executed on each JPEG marker segment
//    - segment:  Object
//      - code:   Number - marker type (2nd byte, e.g. 0xE0 for APP0)
//      - offset: Number - offset of the first byte (0xFF) relative to `jpeg_bin` start
//      - length: Number - length of the entire marker segment including first two bytes and length
//        - 2 for standalone markers
//        - 4+length for markers with data
//
// Iteration stops when `EOI` (0xFFD9) marker is reached or if `on_segment`
// function returns `false`.
//
module.exports.jpeg_segments_each = function (jpeg_bin, on_segment) {
  if (!is_uint8array(jpeg_bin)) {
    throw error('Invalid argument (jpeg_bin), Uint8Array expected', 'EINVAL');
  }

  if (typeof on_segment !== 'function') {
    throw error('Invalid argument (on_segment), Function expected', 'EINVAL');
  }

  if (!module.exports.is_jpeg(jpeg_bin)) {
    throw error('Unknown file format', 'ENOTJPEG');
  }

  var offset = 0, length = jpeg_bin.length, inside_scan = false;

  for (;;) {
    var segment_code, segment_length;

    if (offset + 1 >= length) throw error('Unexpected EOF', 'EBADDATA');
    var byte1 = jpeg_bin[offset];
    var byte2 = jpeg_bin[offset + 1];

    if (byte1 === 0xFF && byte2 === 0xFF) {
      // padding
      segment_code = 0xFF;
      segment_length = 1;

    } else if (byte1 === 0xFF && byte2 !== 0) {
      // marker
      segment_code = byte2;
      segment_length = 2;

      if ((0xD0 <= segment_code && segment_code <= 0xD9) || segment_code === 0x01) ; else {
        if (offset + 3 >= length) throw error('Unexpected EOF', 'EBADDATA');
        segment_length += jpeg_bin[offset + 2] * 0x100 + jpeg_bin[offset + 3];
        if (segment_length < 2) throw error('Invalid segment length', 'EBADDATA');
        if (offset + segment_length - 1 >= length) throw error('Unexpected EOF', 'EBADDATA');
      }

      if (inside_scan) {
        if (segment_code >= 0xD0 && segment_code <= 0xD7) ; else {
          inside_scan = false;
        }
      }

      if (segment_code === 0xDA /* SOS */) inside_scan = true;
    } else if (inside_scan) {
      // entropy-encoded segment
      for (var pos = offset + 1; ; pos++) {
        // scan until we find FF
        if (pos >= length) throw error('Unexpected EOF', 'EBADDATA');
        if (jpeg_bin[pos] === 0xFF) {
          if (pos + 1 >= length) throw error('Unexpected EOF', 'EBADDATA');
          if (jpeg_bin[pos + 1] !== 0) {
            segment_code = 0;
            segment_length = pos - offset;
            break;
          }
        }
      }
    } else {
      throw error('Unexpected byte at segment start: ' + to_hex(byte1) +
        ' (offset ' + to_hex(offset) + ')', 'EBADDATA');
    }

    if (on_segment({ code: segment_code, offset: offset, length: segment_length }) === false) break;
    if (segment_code === 0xD9 /* EOI */) break;
    offset += segment_length;
  }
};


// Replace or remove segments in the given JPEG image
//
// Input:
//  - jpeg_bin:   Uint8Array - jpeg file
//  - on_segment: Function - callback executed on each JPEG marker segment
//    - segment:  Object
//      - code:   Number - marker type (2nd byte, e.g. 0xE0 for APP0)
//      - offset: Number - offset of the first byte (0xFF) relative to `jpeg_bin` start
//      - length: Number - length of the entire marker segment including first two bytes and length
//        - 2 for standalone markers
//        - 4+length for markers with data
//
// `on_segment` function should return one of the following:
//  - `false`        - segment is removed from the output
//  - Uint8Array     - segment is replaced with the new data
//  - [ Uint8Array ] - segment is replaced with the new data
//  - anything else  - segment is copied to the output as is
//
// Any data after `EOI` (0xFFD9) marker is removed.
//
module.exports.jpeg_segments_filter = function (jpeg_bin, on_segment) {
  if (!is_uint8array(jpeg_bin)) {
    throw error('Invalid argument (jpeg_bin), Uint8Array expected', 'EINVAL');
  }

  if (typeof on_segment !== 'function') {
    throw error('Invalid argument (on_segment), Function expected', 'EINVAL');
  }

  var ranges = [];
  var out_length = 0;

  module.exports.jpeg_segments_each(jpeg_bin, function (segment) {
    var new_segment = on_segment(segment);

    if (is_uint8array(new_segment)) {
      ranges.push({ data: new_segment });
      out_length += new_segment.length;
    } else if (Array.isArray(new_segment)) {
      new_segment.filter(is_uint8array).forEach(function (s) {
        ranges.push({ data: s });
        out_length += s.length;
      });
    } else if (new_segment !== false) {
      var new_range = { start: segment.offset, end: segment.offset + segment.length };

      if (ranges.length > 0 && ranges[ranges.length - 1].end === new_range.start) {
        ranges[ranges.length - 1].end = new_range.end;
      } else {
        ranges.push(new_range);
      }

      out_length += segment.length;
    }
  });

  var result = new Uint8Array(out_length);
  var offset = 0;

  ranges.forEach(function (range) {
    var data = range.data || jpeg_bin.subarray(range.start, range.end);
    result.set(data, offset);
    offset += data.length;
  });

  return result;
};


// Call an iterator on each Exif entry in the given JPEG image
//
// Input:
//  - jpeg_bin: Uint8Array - jpeg file
//  - on_entry: Function - callback executed on each Exif entry
//    - entry:  Object
//      - is_big_endian:  Boolean - whether Exif uses big or little endian byte alignment
//      - ifd:            Number  - IFD identifier (0 for IFD0, 1 for IFD1, 0x8769 for SubIFD,
//                                 0x8825 for GPS Info, 0xA005 for Interop IFD)
//      - tag:            Number  - exif entry tag (0x0110 - camera name, 0x0112 - orientation, etc. - see Exif spec)
//      - format:         Number  - exif entry format (1 - byte, 2 - ascii, 3 - short, etc. - see Exif spec)
//      - count:          Number  - number of components of the given format inside data
//                                 (usually 1, or string length for ascii format)
//      - entry_offset:   Number  - start of Exif entry (entry length is always 12, so not included)
//      - data_offset:    Number  - start of data attached to Exif entry (will overlap with entry if length <= 4)
//      - data_length:    Number  - length of data attached to Exif entry
//      - value:          Array|String|Null - our best attempt at parsing data (not all formats supported right now)
//      - is_subifd_link: Boolean - whether this entry is recognized to be a link to subifd (can't filter these out)
//
// Iteration stops early if iterator returns `false`.
//
// If Exif wasn't found anywhere (before start of the image data, SOS),
// iterator is never executed.
//
module.exports.jpeg_exif_tags_each = function (jpeg_bin, on_exif_entry) {
  if (!is_uint8array(jpeg_bin)) {
    throw error('Invalid argument (jpeg_bin), Uint8Array expected', 'EINVAL');
  }

  if (typeof on_exif_entry !== 'function') {
    throw error('Invalid argument (on_exif_entry), Function expected', 'EINVAL');
  }

  /* eslint-disable consistent-return */
  module.exports.jpeg_segments_each(jpeg_bin, function (segment) {
    if (segment.code === 0xDA /* SOS */) return false;

    // look for APP1 segment and compare header with 'Exif\0\0'
    if (segment.code === 0xE1 && segment.length >= 10 &&
        jpeg_bin[segment.offset + 4] === 0x45 && jpeg_bin[segment.offset + 5] === 0x78 &&
        jpeg_bin[segment.offset + 6] === 0x69 && jpeg_bin[segment.offset + 7] === 0x66 &&
        jpeg_bin[segment.offset + 8] === 0x00 && jpeg_bin[segment.offset + 9] === 0x00) {

      new ExifParser(jpeg_bin, segment.offset + 10, segment.offset + segment.length).each(on_exif_entry);
      return false;
    }
  });
};


// Remove Exif entries in the given JPEG image
//
// Input:
//  - jpeg_bin: Uint8Array - jpeg file
//  - on_entry: Function - callback executed on each Exif entry
//    - entry:  Object
//      - is_big_endian:  Boolean - whether Exif uses big or little endian byte alignment
//      - ifd:            Number  - IFD identifier (0 for IFD0, 1 for IFD1, 0x8769 for SubIFD,
//                                  0x8825 for GPS Info, 0xA005 for Interop IFD)
//      - tag:            Number  - exif entry tag (0x0110 - camera name, 0x0112 - orientation, etc. - see Exif spec)
//      - format:         Number  - exif entry format (1 - byte, 2 - ascii, 3 - short, etc. - see Exif spec)
//      - count:          Number  - number of components of the given format inside data
//                                  (usually 1, or string length for ascii format)
//      - entry_offset:   Number  - start of Exif entry (entry length is always 12, so not included)
//      - data_offset:    Number  - start of data attached to Exif entry (will overlap with entry if length <= 4)
//      - data_length:    Number  - length of data attached to Exif entry
//      - value:          Array|String|Null - our best attempt at parsing data (not all formats supported right now)
//      - is_subifd_link: Boolean - whether this entry is recognized to be a link to subifd (can't filter these out)
//
// This function removes following from Exif:
//  - all entries where iterator returned false (except subifd links which are mandatory)
//  - IFD1 and thumbnail image (the purpose of this function is to reduce file size,
//    so thumbnail is usually the first thing to go)
//  - all other data that isn't in IFD0, SubIFD, GPSIFD, InteropIFD
//    (theoretically possible proprietary extensions, I haven't seen any of these yet)
//
// Changing data inside Exif entries is NOT supported yet (modifying `entry` object inside callback may break stuff).
//
// If Exif wasn't found anywhere (before start of the image data, SOS),
// iterator is never executed, and original JPEG is returned as is.
//
module.exports.jpeg_exif_tags_filter = function (jpeg_bin, on_exif_entry) {
  if (!is_uint8array(jpeg_bin)) {
    throw error('Invalid argument (jpeg_bin), Uint8Array expected', 'EINVAL');
  }

  if (typeof on_exif_entry !== 'function') {
    throw error('Invalid argument (on_exif_entry), Function expected', 'EINVAL');
  }

  var stop_search = false;

  return module.exports.jpeg_segments_filter(jpeg_bin, function (segment) {
    if (stop_search) return;
    if (segment.code === 0xDA /* SOS */) stop_search = true;

    // look for APP1 segment and compare header with 'Exif\0\0'
    if (segment.code === 0xE1 && segment.length >= 10 &&
        jpeg_bin[segment.offset + 4] === 0x45 && jpeg_bin[segment.offset + 5] === 0x78 &&
        jpeg_bin[segment.offset + 6] === 0x69 && jpeg_bin[segment.offset + 7] === 0x66 &&
        jpeg_bin[segment.offset + 8] === 0x00 && jpeg_bin[segment.offset + 9] === 0x00) {

      var new_exif = new ExifParser(jpeg_bin, segment.offset + 10, segment.offset + segment.length)
        .filter(on_exif_entry);
      if (!new_exif) return false;

      var header = new Uint8Array(10);

      header.set(jpeg_bin.slice(segment.offset, segment.offset + 10));
      header[2] = ((new_exif.length + 8) >>> 8) & 0xFF;
      header[3] = (new_exif.length + 8) & 0xFF;

      stop_search = true;
      return [ header, new_exif ];
    }
  });
};


// Inserts a custom comment marker segment into JPEG file.
//
// Input:
//  - jpeg_bin: Uint8Array - jpeg file
//  - comment:  String
//
// Comment is inserted after first two bytes (FFD8, SOI).
//
// If JFIF (APP0) marker exists immediately after SOI (as mandated by the JFIF
// spec), we insert comment after it instead.
//
module.exports.jpeg_add_comment = function (jpeg_bin, comment) {
  var comment_inserted = false, segment_count = 0;

  return module.exports.jpeg_segments_filter(jpeg_bin, function (segment) {
    segment_count++;
    if (segment_count === 1 && segment.code === 0xD8 /* SOI  */) return;
    if (segment_count === 2 && segment.code === 0xE0 /* APP0 */) return;

    if (comment_inserted) return;
    comment = utf8_encode(comment);

    // comment segment
    var csegment = new Uint8Array(5 + comment.length);
    var offset = 0;

    csegment[offset++] = 0xFF;
    csegment[offset++] = 0xFE;
    csegment[offset++] = ((comment.length + 3) >>> 8) & 0xFF;
    csegment[offset++] = (comment.length + 3) & 0xFF;

    comment.split('').forEach(function (c) {
      csegment[offset++] = c.charCodeAt(0) & 0xFF;
    });

    csegment[offset++] = 0;
    comment_inserted = true;

    return [ csegment, jpeg_bin.subarray(segment.offset, segment.offset + segment.length) ];
  });
};
});

function jpeg_patch_exif(env) {
  return this._getUint8Array(env.blob).then(function (data) {
    env.is_jpeg = image_traverse.is_jpeg(data);

    if (!env.is_jpeg) return Promise.resolve(env);

    env.orig_blob = env.blob;

    try {
      var exif_is_big_endian, orientation_offset;

      /* eslint-disable consistent-return */
      image_traverse.jpeg_exif_tags_each(data, function (entry) {
        if (entry.ifd === 0 && entry.tag === 0x112 && Array.isArray(entry.value)) {
          env.orientation    = entry.value[0] || 1;
          exif_is_big_endian = entry.is_big_endian;
          orientation_offset = entry.data_offset;
          return false;
        }
      });

      if (orientation_offset) {
        var orientation_patch = exif_is_big_endian ?
          new Uint8Array([ 0, 1 ]) :
          new Uint8Array([ 1, 0 ]);

        env.blob = new Blob([
          data.slice(0, orientation_offset),
          orientation_patch,
          data.slice(orientation_offset + 2)
        ], { type: 'image/jpeg' });
      }
    } catch (_) {}

    return env;
  });
}


function jpeg_rotate_canvas(env) {
  if (!env.is_jpeg) return Promise.resolve(env);

  var orientation = env.orientation - 1;
  if (!orientation) return Promise.resolve(env);

  var canvas;

  if (orientation & 4) {
    canvas = this.pica.options.createCanvas(env.out_canvas.height, env.out_canvas.width);
  } else {
    canvas = this.pica.options.createCanvas(env.out_canvas.width, env.out_canvas.height);
  }

  var ctx = canvas.getContext('2d');

  ctx.save();

  if (orientation & 1) ctx.transform(-1, 0, 0, 1, canvas.width, 0);
  if (orientation & 2) ctx.transform(-1, 0, 0, -1, canvas.width, canvas.height);
  if (orientation & 4) ctx.transform(0, 1, 1, 0, 0, 0);

  ctx.drawImage(env.out_canvas, 0, 0);
  ctx.restore();

  // Safari 12 workaround
  // https://github.com/nodeca/pica/issues/199
  env.out_canvas.width = env.out_canvas.height = 0;

  env.out_canvas = canvas;

  return Promise.resolve(env);
}


function jpeg_attach_orig_segments(env) {
  if (!env.is_jpeg) return Promise.resolve(env);

  return Promise.all([
    this._getUint8Array(env.blob),
    this._getUint8Array(env.out_blob)
  ]).then(function (res) {
    var data = res[0];
    var data_out = res[1];

    if (!image_traverse.is_jpeg(data)) return Promise.resolve(env);

    var segments = [];

    image_traverse.jpeg_segments_each(data, function (segment) {
      if (segment.code === 0xDA /* SOS */) return false;
      segments.push(segment);
    });

    segments = segments
      .filter(function (segment) {
        // Drop ICC_PROFILE
        //
        if (segment.code === 0xE2) return false;

        // Keep all APPn segments excluding APP2 (ICC_PROFILE),
        // remove others because most of them depend on image data (DCT and such).
        //
        // APP0 - JFIF, APP1 - Exif, the rest are photoshop metadata and such
        //
        // See full list at https://www.w3.org/Graphics/JPEG/itu-t81.pdf (table B.1 on page 32)
        //
        if (segment.code >= 0xE0 && segment.code < 0xF0) return true;

        // Keep comments
        //
        if (segment.code === 0xFE) return true;

        return false;
      })
      .map(function (segment) {
        return data.slice(segment.offset, segment.offset + segment.length);
      });

    env.out_blob = new Blob(
      // intentionally omitting expected JFIF segment (offset 2 to 20)
      [ data_out.slice(0, 2) ].concat(segments).concat([ data_out.slice(20) ]),
      { type: 'image/jpeg' }
    );

    return env;
  });
}


function assign(reducer) {
  reducer.before('_blob_to_image', jpeg_patch_exif);
  reducer.after('_transform',      jpeg_rotate_canvas);
  reducer.after('_create_blob',    jpeg_attach_orig_segments);
}


var jpeg_patch_exif_1 = jpeg_patch_exif;
var jpeg_rotate_canvas_1 = jpeg_rotate_canvas;
var jpeg_attach_orig_segments_1 = jpeg_attach_orig_segments;
var assign_1 = assign;

var jpeg_plugins = {
	jpeg_patch_exif: jpeg_patch_exif_1,
	jpeg_rotate_canvas: jpeg_rotate_canvas_1,
	jpeg_attach_orig_segments: jpeg_attach_orig_segments_1,
	assign: assign_1
};

function ImageBlobReduce(options) {
  if (!(this instanceof ImageBlobReduce)) return new ImageBlobReduce(options);

  options = options || {};

  this.pica = options.pica || pica({});
  this.initialized = false;

  this.utils = utils;
}


ImageBlobReduce.prototype.use = function (plugin /*, params, ... */) {
  var args = [ this ].concat(Array.prototype.slice.call(arguments, 1));
  plugin.apply(plugin, args);
  return this;
};


ImageBlobReduce.prototype.init = function () {
  this.use(jpeg_plugins.assign);
};


ImageBlobReduce.prototype.toBlob = function (blob, options) {
  var opts = utils.assign({ max: Infinity }, options);
  var env = {
    blob: blob,
    opts: opts
  };

  if (!this.initialized) {
    this.init();
    this.initialized = true;
  }

  return Promise.resolve(env)
    .then(this._blob_to_image)
    .then(this._calculate_size)
    .then(this._transform)
    .then(this._cleanup)
    .then(this._create_blob)
    .then(function (_env) {
      // Safari 12 workaround
      // https://github.com/nodeca/pica/issues/199
      _env.out_canvas.width = _env.out_canvas.height = 0;

      return _env.out_blob;
    });
};


ImageBlobReduce.prototype.toCanvas = function (blob, options) {
  var opts = utils.assign({ max: Infinity }, options);
  var env = {
    blob: blob,
    opts: opts
  };

  if (!this.initialized) {
    this.init();
    this.initialized = true;
  }

  return Promise.resolve(env)
    .then(this._blob_to_image)
    .then(this._calculate_size)
    .then(this._transform)
    .then(this._cleanup)
    .then(function (_env) { return _env.out_canvas; });
};


ImageBlobReduce.prototype.before = function (method_name, fn) {
  if (!this[method_name]) throw new Error('Method "' + method_name + '" does not exist');
  if (typeof fn !== 'function') throw new Error('Invalid argument "fn", function expected');

  var old_fn = this[method_name];
  var self = this;

  this[method_name] = function (env) {
    return fn.call(self, env).then(function (_env) {
      return old_fn.call(self, _env);
    });
  };

  return this;
};


ImageBlobReduce.prototype.after = function (method_name, fn) {
  if (!this[method_name]) throw new Error('Method "' + method_name + '" does not exist');
  if (typeof fn !== 'function') throw new Error('Invalid argument "fn", function expected');

  var old_fn = this[method_name];
  var self = this;

  this[method_name] = function (env) {
    return old_fn.call(self, env).then(function (_env) {
      return fn.call(self, _env);
    });
  };

  return this;
};


ImageBlobReduce.prototype._blob_to_image = function (env) {
  var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

  env.image = document.createElement('img');
  env.image_url = URL.createObjectURL(env.blob);
  env.image.src = env.image_url;

  return new Promise(function (resolve, reject) {
    env.image.onerror = function () { reject(new Error('ImageBlobReduce: failed to create Image() from blob')); };
    env.image.onload = function () { resolve(env); };
  });
};


ImageBlobReduce.prototype._calculate_size = function (env) {
  //
  // Note, if your need not "symmetric" resize logic, you MUST check
  // `env.orientation` (set by plugins) and swap width/height appropriately.
  //
  var scale_factor = env.opts.max / Math.max(env.image.width, env.image.height);

  if (scale_factor > 1) scale_factor = 1;

  env.transform_width = Math.max(Math.round(env.image.width * scale_factor), 1);
  env.transform_height = Math.max(Math.round(env.image.height * scale_factor), 1);

  // Info for user plugins, to check if scaling applied
  env.scale_factor = scale_factor;

  return Promise.resolve(env);
};


ImageBlobReduce.prototype._transform = function (env) {
  env.out_canvas = this.pica.options.createCanvas(env.transform_width, env.transform_height);

  // Dim env temporary vars to prohibit use and avoid confusion when orientation
  // changed. You should take real size from canvas.
  env.transform_width = null;
  env.transform_height = null;

  // By default use alpha for png only
  var pica_opts = { alpha: env.blob.type === 'image/png' };

  // Extract pica options if been passed
  this.utils.assign(pica_opts, this.utils.pick_pica_resize_options(env.opts));

  return this.pica
    .resize(env.image, env.out_canvas, pica_opts)
    .then(function () { return env; });
};


ImageBlobReduce.prototype._cleanup = function (env) {
  env.image.src = '';
  env.image = null;

  var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
  if (URL.revokeObjectURL) URL.revokeObjectURL(env.image_url);

  env.image_url = null;

  return Promise.resolve(env);
};


ImageBlobReduce.prototype._create_blob = function (env) {
  return this.pica.toBlob(env.out_canvas, env.blob.type)
    .then(function (blob) {
      env.out_blob = blob;
      return env;
    });
};


ImageBlobReduce.prototype._getUint8Array = function (blob) {
  if (blob.arrayBuffer) {
    return blob.arrayBuffer().then(function (buf) {
      return new Uint8Array(buf);
    });
  }

  return new Promise(function (resolve, reject) {
    var fr = new FileReader();

    fr.readAsArrayBuffer(blob);

    fr.onload = function () { resolve(new Uint8Array(fr.result)); };
    fr.onerror = function () {
      reject(new Error('ImageBlobReduce: failed to load data from input blob'));
      fr.abort();
    };
    fr.onabort = function () {
      reject(new Error('ImageBlobReduce: failed to load data from input blob (aborted)'));
    };
  });
};


ImageBlobReduce.pica = pica;

var imageBlobReduce = ImageBlobReduce;

exports["default"] = imageBlobReduce;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtYmxvYi1yZWR1Y2UuZXNtLTRjMmE5NWQzLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvaW1hZ2UtYmxvYi1yZWR1Y2UvZGlzdC9pbWFnZS1ibG9iLXJlZHVjZS5lc20ubWpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLyohIGltYWdlLWJsb2ItcmVkdWNlIDMuMC4xIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlY2EvaW1hZ2UtYmxvYi1yZWR1Y2UgQGxpY2Vuc2UgTUlUICovXG52YXIgYXNzaWduJDEgPSBmdW5jdGlvbiBhc3NpZ24odG8pIHtcbiAgdmFyIGZyb207XG5cbiAgZm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcbiAgICBmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB0b1trZXldID0gZnJvbVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn07XG5cblxuZnVuY3Rpb24gcGljayhmcm9tLCBwcm9wcykge1xuICB2YXIgdG8gPSB7fTtcblxuICBwcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHRvW2tleV0gPSBmcm9tW2tleV07XG4gIH0pO1xuXG4gIHJldHVybiB0bztcbn1cblxuXG5mdW5jdGlvbiBwaWNrX3BpY2FfcmVzaXplX29wdGlvbnMoZnJvbSkge1xuICByZXR1cm4gcGljayhmcm9tLCBbXG4gICAgJ2FscGhhJyxcbiAgICAndW5zaGFycEFtb3VudCcsXG4gICAgJ3Vuc2hhcnBSYWRpdXMnLFxuICAgICd1bnNoYXJwVGhyZXNob2xkJyxcbiAgICAnY2FuY2VsVG9rZW4nXG4gIF0pO1xufVxuXG5cbnZhciBwaWNrXzEgPSBwaWNrO1xudmFyIHBpY2tfcGljYV9yZXNpemVfb3B0aW9uc18xID0gcGlja19waWNhX3Jlc2l6ZV9vcHRpb25zO1xuXG52YXIgdXRpbHMgPSB7XG5cdGFzc2lnbjogYXNzaWduJDEsXG5cdHBpY2s6IHBpY2tfMSxcblx0cGlja19waWNhX3Jlc2l6ZV9vcHRpb25zOiBwaWNrX3BpY2FfcmVzaXplX29wdGlvbnNfMVxufTtcblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4pIHtcbiAgdmFyIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfTtcblx0cmV0dXJuIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxuZnVuY3Rpb24gY29tbW9uanNSZXF1aXJlICh0YXJnZXQpIHtcblx0dGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZHluYW1pY2FsbHkgcmVxdWlyZSBcIicgKyB0YXJnZXQgKyAnXCIuIFBsZWFzZSBjb25maWd1cmUgdGhlIGR5bmFtaWNSZXF1aXJlVGFyZ2V0cyBvcHRpb24gb2YgQHJvbGx1cC9wbHVnaW4tY29tbW9uanMgYXBwcm9wcmlhdGVseSBmb3IgdGhpcyByZXF1aXJlIGNhbGwgdG8gYmVoYXZlIHByb3Blcmx5LicpO1xufVxuXG4vKiFcblxucGljYVxuaHR0cHM6Ly9naXRodWIuY29tL25vZGVjYS9waWNhXG5cbiovXG5cbnZhciBwaWNhID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuKGZ1bmN0aW9uKGYpe3ttb2R1bGUuZXhwb3J0cz1mKCk7fX0pKGZ1bmN0aW9uKCl7cmV0dXJuIChmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIGNvbW1vbmpzUmVxdWlyZSYmY29tbW9uanNSZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpO31yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBjb21tb25qc1JlcXVpcmUmJmNvbW1vbmpzUmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkoezE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXG52YXIgaW5oZXJpdHMgPSBfZGVyZXFfKCdpbmhlcml0cycpO1xuXG52YXIgTXVsdGltYXRoID0gX2RlcmVxXygnbXVsdGltYXRoJyk7XG5cbnZhciBtbV91bnNoYXJwX21hc2sgPSBfZGVyZXFfKCcuL21tX3Vuc2hhcnBfbWFzaycpO1xuXG52YXIgbW1fcmVzaXplID0gX2RlcmVxXygnLi9tbV9yZXNpemUnKTtcblxuZnVuY3Rpb24gTWF0aExpYihyZXF1ZXN0ZWRfZmVhdHVyZXMpIHtcbiAgdmFyIF9fcmVxdWVzdGVkX2ZlYXR1cmVzID0gcmVxdWVzdGVkX2ZlYXR1cmVzIHx8IFtdO1xuXG4gIHZhciBmZWF0dXJlcyA9IHtcbiAgICBqczogX19yZXF1ZXN0ZWRfZmVhdHVyZXMuaW5kZXhPZignanMnKSA+PSAwLFxuICAgIHdhc206IF9fcmVxdWVzdGVkX2ZlYXR1cmVzLmluZGV4T2YoJ3dhc20nKSA+PSAwXG4gIH07XG4gIE11bHRpbWF0aC5jYWxsKHRoaXMsIGZlYXR1cmVzKTtcbiAgdGhpcy5mZWF0dXJlcyA9IHtcbiAgICBqczogZmVhdHVyZXMuanMsXG4gICAgd2FzbTogZmVhdHVyZXMud2FzbSAmJiB0aGlzLmhhc193YXNtKClcbiAgfTtcbiAgdGhpcy51c2UobW1fdW5zaGFycF9tYXNrKTtcbiAgdGhpcy51c2UobW1fcmVzaXplKTtcbn1cblxuaW5oZXJpdHMoTWF0aExpYiwgTXVsdGltYXRoKTtcblxuTWF0aExpYi5wcm90b3R5cGUucmVzaXplQW5kVW5zaGFycCA9IGZ1bmN0aW9uIHJlc2l6ZUFuZFVuc2hhcnAob3B0aW9ucywgY2FjaGUpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMucmVzaXplKG9wdGlvbnMsIGNhY2hlKTtcblxuICBpZiAob3B0aW9ucy51bnNoYXJwQW1vdW50KSB7XG4gICAgdGhpcy51bnNoYXJwX21hc2socmVzdWx0LCBvcHRpb25zLnRvV2lkdGgsIG9wdGlvbnMudG9IZWlnaHQsIG9wdGlvbnMudW5zaGFycEFtb3VudCwgb3B0aW9ucy51bnNoYXJwUmFkaXVzLCBvcHRpb25zLnVuc2hhcnBUaHJlc2hvbGQpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWF0aExpYjtcblxufSx7XCIuL21tX3Jlc2l6ZVwiOjQsXCIuL21tX3Vuc2hhcnBfbWFza1wiOjksXCJpbmhlcml0c1wiOjE5LFwibXVsdGltYXRoXCI6MjB9XSwyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vdmFyIEZJWEVEX0ZSQUNfQklUUyA9IDE0O1xuXG5mdW5jdGlvbiBjbGFtcFRvOChpKSB7XG4gIHJldHVybiBpIDwgMCA/IDAgOiBpID4gMjU1ID8gMjU1IDogaTtcbn0gLy8gQ29udm9sdmUgaW1hZ2UgaW4gaG9yaXpvbnRhbCBkaXJlY3Rpb25zIGFuZCB0cmFuc3Bvc2Ugb3V0cHV0LiBJbiB0aGVvcnksXG4vLyB0cmFuc3Bvc2UgYWxsb3c6XG4vL1xuLy8gLSB1c2UgdGhlIHNhbWUgY29udm9sdmVyIGZvciBib3RoIHBhc3NlcyAodGhpcyBmYWlscyBkdWUgZGlmZmVyZW50XG4vLyAgIHR5cGVzIG9mIGlucHV0IGFycmF5IGFuZCB0ZW1wb3JhcnkgYnVmZmVyKVxuLy8gLSBtYWtpbmcgdmVydGljYWwgcGFzcyBieSBob3Jpc29ubHRhbCBsaW5lcyBpbnByb3ZlIENQVSBjYWNoZSB1c2UuXG4vL1xuLy8gQnV0IGluIHJlYWwgbGlmZSB0aGlzIGRvZXNuJ3Qgd29yayA6KVxuLy9cblxuXG5mdW5jdGlvbiBjb252b2x2ZUhvcml6b250YWxseShzcmMsIGRlc3QsIHNyY1csIHNyY0gsIGRlc3RXLCBmaWx0ZXJzKSB7XG4gIHZhciByLCBnLCBiLCBhO1xuICB2YXIgZmlsdGVyUHRyLCBmaWx0ZXJTaGlmdCwgZmlsdGVyU2l6ZTtcbiAgdmFyIHNyY1B0ciwgc3JjWSwgZGVzdFgsIGZpbHRlclZhbDtcbiAgdmFyIHNyY09mZnNldCA9IDAsXG4gICAgICBkZXN0T2Zmc2V0ID0gMDsgLy8gRm9yIGVhY2ggcm93XG5cbiAgZm9yIChzcmNZID0gMDsgc3JjWSA8IHNyY0g7IHNyY1krKykge1xuICAgIGZpbHRlclB0ciA9IDA7IC8vIEFwcGx5IHByZWNvbXB1dGVkIGZpbHRlcnMgdG8gZWFjaCBkZXN0aW5hdGlvbiByb3cgcG9pbnRcblxuICAgIGZvciAoZGVzdFggPSAwOyBkZXN0WCA8IGRlc3RXOyBkZXN0WCsrKSB7XG4gICAgICAvLyBHZXQgdGhlIGZpbHRlciB0aGF0IGRldGVybWluZXMgdGhlIGN1cnJlbnQgb3V0cHV0IHBpeGVsLlxuICAgICAgZmlsdGVyU2hpZnQgPSBmaWx0ZXJzW2ZpbHRlclB0cisrXTtcbiAgICAgIGZpbHRlclNpemUgPSBmaWx0ZXJzW2ZpbHRlclB0cisrXTtcbiAgICAgIHNyY1B0ciA9IHNyY09mZnNldCArIGZpbHRlclNoaWZ0ICogNCB8IDA7XG4gICAgICByID0gZyA9IGIgPSBhID0gMDsgLy8gQXBwbHkgdGhlIGZpbHRlciB0byB0aGUgcm93IHRvIGdldCB0aGUgZGVzdGluYXRpb24gcGl4ZWwgciwgZywgYiwgYVxuXG4gICAgICBmb3IgKDsgZmlsdGVyU2l6ZSA+IDA7IGZpbHRlclNpemUtLSkge1xuICAgICAgICBmaWx0ZXJWYWwgPSBmaWx0ZXJzW2ZpbHRlclB0cisrXTsgLy8gVXNlIHJldmVyc2Ugb3JkZXIgdG8gd29ya2Fyb3VuZCBkZW9wdHMgaW4gb2xkIHY4IChub2RlIHYuMTApXG4gICAgICAgIC8vIEJpZyB0aGFua3MgdG8gQG1yYWxlcGggKFZ5YWNoZXNsYXYgRWdvcm92KSBmb3IgdGhlIHRpcC5cblxuICAgICAgICBhID0gYSArIGZpbHRlclZhbCAqIHNyY1tzcmNQdHIgKyAzXSB8IDA7XG4gICAgICAgIGIgPSBiICsgZmlsdGVyVmFsICogc3JjW3NyY1B0ciArIDJdIHwgMDtcbiAgICAgICAgZyA9IGcgKyBmaWx0ZXJWYWwgKiBzcmNbc3JjUHRyICsgMV0gfCAwO1xuICAgICAgICByID0gciArIGZpbHRlclZhbCAqIHNyY1tzcmNQdHJdIHwgMDtcbiAgICAgICAgc3JjUHRyID0gc3JjUHRyICsgNCB8IDA7XG4gICAgICB9IC8vIEJyaW5nIHRoaXMgdmFsdWUgYmFjayBpbiByYW5nZS4gQWxsIG9mIHRoZSBmaWx0ZXIgc2NhbGluZyBmYWN0b3JzXG4gICAgICAvLyBhcmUgaW4gZml4ZWQgcG9pbnQgd2l0aCBGSVhFRF9GUkFDX0JJVFMgYml0cyBvZiBmcmFjdGlvbmFsIHBhcnQuXG4gICAgICAvL1xuICAgICAgLy8gKCEpIEFkZCAxLzIgb2YgdmFsdWUgYmVmb3JlIGNsYW1waW5nIHRvIGdldCBwcm9wZXIgcm91bmRpbmcuIEluIG90aGVyXG4gICAgICAvLyBjYXNlIGJyaWdodG5lc3MgbG9zcyB3aWxsIGJlIG5vdGljZWFibGUgaWYgeW91IHJlc2l6ZSBpbWFnZSB3aXRoIHdoaXRlXG4gICAgICAvLyBib3JkZXIgYW5kIHBsYWNlIGl0IG9uIHdoaXRlIGJhY2tncm91bmQuXG4gICAgICAvL1xuXG5cbiAgICAgIGRlc3RbZGVzdE9mZnNldCArIDNdID0gY2xhbXBUbzgoYSArICgxIDw8IDEzKSA+PiAxNFxuICAgICAgLypGSVhFRF9GUkFDX0JJVFMqL1xuICAgICAgKTtcbiAgICAgIGRlc3RbZGVzdE9mZnNldCArIDJdID0gY2xhbXBUbzgoYiArICgxIDw8IDEzKSA+PiAxNFxuICAgICAgLypGSVhFRF9GUkFDX0JJVFMqL1xuICAgICAgKTtcbiAgICAgIGRlc3RbZGVzdE9mZnNldCArIDFdID0gY2xhbXBUbzgoZyArICgxIDw8IDEzKSA+PiAxNFxuICAgICAgLypGSVhFRF9GUkFDX0JJVFMqL1xuICAgICAgKTtcbiAgICAgIGRlc3RbZGVzdE9mZnNldF0gPSBjbGFtcFRvOChyICsgKDEgPDwgMTMpID4+IDE0XG4gICAgICAvKkZJWEVEX0ZSQUNfQklUUyovXG4gICAgICApO1xuICAgICAgZGVzdE9mZnNldCA9IGRlc3RPZmZzZXQgKyBzcmNIICogNCB8IDA7XG4gICAgfVxuXG4gICAgZGVzdE9mZnNldCA9IChzcmNZICsgMSkgKiA0IHwgMDtcbiAgICBzcmNPZmZzZXQgPSAoc3JjWSArIDEpICogc3JjVyAqIDQgfCAwO1xuICB9XG59IC8vIFRlY2huaWNhbGx5LCBjb252b2x2ZXJzIGFyZSB0aGUgc2FtZS4gQnV0IGlucHV0IGFycmF5IGFuZCB0ZW1wb3Jhcnlcbi8vIGJ1ZmZlciBjYW4gYmUgb2YgZGlmZmVyZW50IHR5cGUgKGVzcGVjaWFsbHksIGluIG9sZCBicm93c2VycykuIFNvLFxuLy8ga2VlcCBjb2RlIGluIHNlcGFyYXRlIGZ1bmN0aW9ucyB0byBhdm9pZCBkZW9wdGltaXphdGlvbnMgJiBzcGVlZCBsb3NzLlxuXG5cbmZ1bmN0aW9uIGNvbnZvbHZlVmVydGljYWxseShzcmMsIGRlc3QsIHNyY1csIHNyY0gsIGRlc3RXLCBmaWx0ZXJzKSB7XG4gIHZhciByLCBnLCBiLCBhO1xuICB2YXIgZmlsdGVyUHRyLCBmaWx0ZXJTaGlmdCwgZmlsdGVyU2l6ZTtcbiAgdmFyIHNyY1B0ciwgc3JjWSwgZGVzdFgsIGZpbHRlclZhbDtcbiAgdmFyIHNyY09mZnNldCA9IDAsXG4gICAgICBkZXN0T2Zmc2V0ID0gMDsgLy8gRm9yIGVhY2ggcm93XG5cbiAgZm9yIChzcmNZID0gMDsgc3JjWSA8IHNyY0g7IHNyY1krKykge1xuICAgIGZpbHRlclB0ciA9IDA7IC8vIEFwcGx5IHByZWNvbXB1dGVkIGZpbHRlcnMgdG8gZWFjaCBkZXN0aW5hdGlvbiByb3cgcG9pbnRcblxuICAgIGZvciAoZGVzdFggPSAwOyBkZXN0WCA8IGRlc3RXOyBkZXN0WCsrKSB7XG4gICAgICAvLyBHZXQgdGhlIGZpbHRlciB0aGF0IGRldGVybWluZXMgdGhlIGN1cnJlbnQgb3V0cHV0IHBpeGVsLlxuICAgICAgZmlsdGVyU2hpZnQgPSBmaWx0ZXJzW2ZpbHRlclB0cisrXTtcbiAgICAgIGZpbHRlclNpemUgPSBmaWx0ZXJzW2ZpbHRlclB0cisrXTtcbiAgICAgIHNyY1B0ciA9IHNyY09mZnNldCArIGZpbHRlclNoaWZ0ICogNCB8IDA7XG4gICAgICByID0gZyA9IGIgPSBhID0gMDsgLy8gQXBwbHkgdGhlIGZpbHRlciB0byB0aGUgcm93IHRvIGdldCB0aGUgZGVzdGluYXRpb24gcGl4ZWwgciwgZywgYiwgYVxuXG4gICAgICBmb3IgKDsgZmlsdGVyU2l6ZSA+IDA7IGZpbHRlclNpemUtLSkge1xuICAgICAgICBmaWx0ZXJWYWwgPSBmaWx0ZXJzW2ZpbHRlclB0cisrXTsgLy8gVXNlIHJldmVyc2Ugb3JkZXIgdG8gd29ya2Fyb3VuZCBkZW9wdHMgaW4gb2xkIHY4IChub2RlIHYuMTApXG4gICAgICAgIC8vIEJpZyB0aGFua3MgdG8gQG1yYWxlcGggKFZ5YWNoZXNsYXYgRWdvcm92KSBmb3IgdGhlIHRpcC5cblxuICAgICAgICBhID0gYSArIGZpbHRlclZhbCAqIHNyY1tzcmNQdHIgKyAzXSB8IDA7XG4gICAgICAgIGIgPSBiICsgZmlsdGVyVmFsICogc3JjW3NyY1B0ciArIDJdIHwgMDtcbiAgICAgICAgZyA9IGcgKyBmaWx0ZXJWYWwgKiBzcmNbc3JjUHRyICsgMV0gfCAwO1xuICAgICAgICByID0gciArIGZpbHRlclZhbCAqIHNyY1tzcmNQdHJdIHwgMDtcbiAgICAgICAgc3JjUHRyID0gc3JjUHRyICsgNCB8IDA7XG4gICAgICB9IC8vIEJyaW5nIHRoaXMgdmFsdWUgYmFjayBpbiByYW5nZS4gQWxsIG9mIHRoZSBmaWx0ZXIgc2NhbGluZyBmYWN0b3JzXG4gICAgICAvLyBhcmUgaW4gZml4ZWQgcG9pbnQgd2l0aCBGSVhFRF9GUkFDX0JJVFMgYml0cyBvZiBmcmFjdGlvbmFsIHBhcnQuXG4gICAgICAvL1xuICAgICAgLy8gKCEpIEFkZCAxLzIgb2YgdmFsdWUgYmVmb3JlIGNsYW1waW5nIHRvIGdldCBwcm9wZXIgcm91bmRpbmcuIEluIG90aGVyXG4gICAgICAvLyBjYXNlIGJyaWdodG5lc3MgbG9zcyB3aWxsIGJlIG5vdGljZWFibGUgaWYgeW91IHJlc2l6ZSBpbWFnZSB3aXRoIHdoaXRlXG4gICAgICAvLyBib3JkZXIgYW5kIHBsYWNlIGl0IG9uIHdoaXRlIGJhY2tncm91bmQuXG4gICAgICAvL1xuXG5cbiAgICAgIGRlc3RbZGVzdE9mZnNldCArIDNdID0gY2xhbXBUbzgoYSArICgxIDw8IDEzKSA+PiAxNFxuICAgICAgLypGSVhFRF9GUkFDX0JJVFMqL1xuICAgICAgKTtcbiAgICAgIGRlc3RbZGVzdE9mZnNldCArIDJdID0gY2xhbXBUbzgoYiArICgxIDw8IDEzKSA+PiAxNFxuICAgICAgLypGSVhFRF9GUkFDX0JJVFMqL1xuICAgICAgKTtcbiAgICAgIGRlc3RbZGVzdE9mZnNldCArIDFdID0gY2xhbXBUbzgoZyArICgxIDw8IDEzKSA+PiAxNFxuICAgICAgLypGSVhFRF9GUkFDX0JJVFMqL1xuICAgICAgKTtcbiAgICAgIGRlc3RbZGVzdE9mZnNldF0gPSBjbGFtcFRvOChyICsgKDEgPDwgMTMpID4+IDE0XG4gICAgICAvKkZJWEVEX0ZSQUNfQklUUyovXG4gICAgICApO1xuICAgICAgZGVzdE9mZnNldCA9IGRlc3RPZmZzZXQgKyBzcmNIICogNCB8IDA7XG4gICAgfVxuXG4gICAgZGVzdE9mZnNldCA9IChzcmNZICsgMSkgKiA0IHwgMDtcbiAgICBzcmNPZmZzZXQgPSAoc3JjWSArIDEpICogc3JjVyAqIDQgfCAwO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb252b2x2ZUhvcml6b250YWxseTogY29udm9sdmVIb3Jpem9udGFsbHksXG4gIGNvbnZvbHZlVmVydGljYWxseTogY29udm9sdmVWZXJ0aWNhbGx5XG59O1xuXG59LHt9XSwzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSAnQUdGemJRRUFBQUFBREFaa2VXeHBibXNBQUFBQUFBRVhBMkFBQUdBR2YzOS9mMzkvQUdBSGYzOS9mMzkvZndBQ0R3RURaVzUyQm0xbGJXOXllUUlBQUFNRUF3QUJBZ1lHQVg4QVFRQUxCMWNGRVY5ZmQyRnpiVjlqWVd4c1gyTjBiM0p6QUFBSVkyOXVkbTlzZG1VQUFRcGpiMjUyYjJ4MlpVaFdBQUlNWDE5a2MyOWZhR0Z1Wkd4bEF3QVlYMTkzWVhOdFgyRndjR3g1WDJSaGRHRmZjbVZzYjJOekFBQUs3QU1EQXdBQkM4WURBUTkvQWtBZ0EwVU5BQ0FFUlEwQUEwQWdEQ0VOUVFBaEUwRUFJUWNEUUNBSFFRSnFJUVlDZnlBSFFRRjBJQVZxSWdjdUFRSWlGRVVFUUVHQXdBQWhDRUdBd0FBaENVR0F3QUFoQ2tHQXdBQWhDeUFHREFFTElCSWdCeTRCQUdvaENFRUFJUXNnRkNFSFFRQWhEaUFHSVFsQkFDRVBRUUFoRUFOQUlBVWdDVUVCZEdvdUFRQWlFU0FBSUFoQkFuUnFLQUlBSWdwQkdIWnNJQkJxSVJBZ0NrSC9BWEVnRVd3Z0Myb2hDeUFLUVJCMlFmOEJjU0FSYkNBUGFpRVBJQXBCQ0haQi93RnhJQkZzSUE1cUlRNGdDRUVCYWlFSUlBbEJBV29oQ1NBSFFRRnJJZ2NOQUFzZ0MwR0FRR3NoQ0NBT1FZQkFheUVKSUE5QmdFQnJJUW9nRUVHQVFHc2hDeUFHSUJScUN5RUhJQUVnRFVFQ2RHb2dDVUVPZFNJR1FmOEJJQVpCL3dGSUd5SUdRUUFnQmtFQVNodEJDSFJCZ1A0RGNTQUtRUTUxSWdaQi93RWdCa0gvQVVnYklnWkJBQ0FHUVFCS0cwRVFkRUdBZ1B3SGNTQUxRUTUxSWdaQi93RWdCa0gvQVVnYklnWkJBQ0FHUVFCS0cwRVlkSEp5SUFoQkRuVWlCa0gvQVNBR1FmOEJTQnNpQmtFQUlBWkJBRW9iY2pZQ0FDQURJQTFxSVEwZ0UwRUJhaUlUSUFSSERRQUxJQXhCQVdvaURDQUNiQ0VTSUFNZ0RFY05BQXNMQ3g0QVFRQWdBaUFESUFRZ0JTQUFFQUVnQWtFQUlBUWdCU0FHSUFFUUFRcz0nO1xuXG59LHt9XSw0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6ICdyZXNpemUnLFxuICBmbjogX2RlcmVxXygnLi9yZXNpemUnKSxcbiAgd2FzbV9mbjogX2RlcmVxXygnLi9yZXNpemVfd2FzbScpLFxuICB3YXNtX3NyYzogX2RlcmVxXygnLi9jb252b2x2ZV93YXNtX2Jhc2U2NCcpXG59O1xuXG59LHtcIi4vY29udm9sdmVfd2FzbV9iYXNlNjRcIjozLFwiLi9yZXNpemVcIjo1LFwiLi9yZXNpemVfd2FzbVwiOjh9XSw1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblxudmFyIGNyZWF0ZUZpbHRlcnMgPSBfZGVyZXFfKCcuL3Jlc2l6ZV9maWx0ZXJfZ2VuJyk7XG5cbnZhciBjb252b2x2ZUhvcml6b250YWxseSA9IF9kZXJlcV8oJy4vY29udm9sdmUnKS5jb252b2x2ZUhvcml6b250YWxseTtcblxudmFyIGNvbnZvbHZlVmVydGljYWxseSA9IF9kZXJlcV8oJy4vY29udm9sdmUnKS5jb252b2x2ZVZlcnRpY2FsbHk7XG5cbmZ1bmN0aW9uIHJlc2V0QWxwaGEoZHN0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHZhciBwdHIgPSAzLFxuICAgICAgbGVuID0gd2lkdGggKiBoZWlnaHQgKiA0IHwgMDtcblxuICB3aGlsZSAocHRyIDwgbGVuKSB7XG4gICAgZHN0W3B0cl0gPSAweEZGO1xuICAgIHB0ciA9IHB0ciArIDQgfCAwO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVzaXplKG9wdGlvbnMpIHtcbiAgdmFyIHNyYyA9IG9wdGlvbnMuc3JjO1xuICB2YXIgc3JjVyA9IG9wdGlvbnMud2lkdGg7XG4gIHZhciBzcmNIID0gb3B0aW9ucy5oZWlnaHQ7XG4gIHZhciBkZXN0VyA9IG9wdGlvbnMudG9XaWR0aDtcbiAgdmFyIGRlc3RIID0gb3B0aW9ucy50b0hlaWdodDtcbiAgdmFyIHNjYWxlWCA9IG9wdGlvbnMuc2NhbGVYIHx8IG9wdGlvbnMudG9XaWR0aCAvIG9wdGlvbnMud2lkdGg7XG4gIHZhciBzY2FsZVkgPSBvcHRpb25zLnNjYWxlWSB8fCBvcHRpb25zLnRvSGVpZ2h0IC8gb3B0aW9ucy5oZWlnaHQ7XG4gIHZhciBvZmZzZXRYID0gb3B0aW9ucy5vZmZzZXRYIHx8IDA7XG4gIHZhciBvZmZzZXRZID0gb3B0aW9ucy5vZmZzZXRZIHx8IDA7XG4gIHZhciBkZXN0ID0gb3B0aW9ucy5kZXN0IHx8IG5ldyBVaW50OEFycmF5KGRlc3RXICogZGVzdEggKiA0KTtcbiAgdmFyIHF1YWxpdHkgPSB0eXBlb2Ygb3B0aW9ucy5xdWFsaXR5ID09PSAndW5kZWZpbmVkJyA/IDMgOiBvcHRpb25zLnF1YWxpdHk7XG4gIHZhciBhbHBoYSA9IG9wdGlvbnMuYWxwaGEgfHwgZmFsc2U7XG4gIHZhciBmaWx0ZXJzWCA9IGNyZWF0ZUZpbHRlcnMocXVhbGl0eSwgc3JjVywgZGVzdFcsIHNjYWxlWCwgb2Zmc2V0WCksXG4gICAgICBmaWx0ZXJzWSA9IGNyZWF0ZUZpbHRlcnMocXVhbGl0eSwgc3JjSCwgZGVzdEgsIHNjYWxlWSwgb2Zmc2V0WSk7XG4gIHZhciB0bXAgPSBuZXcgVWludDhBcnJheShkZXN0VyAqIHNyY0ggKiA0KTsgLy8gVG8gdXNlIHNpbmdsZSBmdW5jdGlvbiB3ZSBuZWVkIHNyYyAmIHRtcCBvZiB0aGUgc2FtZSB0eXBlLlxuICAvLyBCdXQgc3JjIGNhbiBiZSBDYW52YXNQaXhlbEFycmF5LCBhbmQgdG1wIC0gVWludDhBcnJheS4gU28sIGtlZXBcbiAgLy8gdmVydGljYWwgYW5kIGhvcml6b250YWwgcGFzc2VzIHNlcGFyYXRlbHkgdG8gYXZvaWQgZGVvcHRpbWl6YXRpb24uXG5cbiAgY29udm9sdmVIb3Jpem9udGFsbHkoc3JjLCB0bXAsIHNyY1csIHNyY0gsIGRlc3RXLCBmaWx0ZXJzWCk7XG4gIGNvbnZvbHZlVmVydGljYWxseSh0bXAsIGRlc3QsIHNyY0gsIGRlc3RXLCBkZXN0SCwgZmlsdGVyc1kpOyAvLyBUaGF0J3MgZmFzdGVyIHRoYW4gZG9pbmcgY2hlY2tzIGluIGNvbnZvbHZlci5cbiAgLy8gISEhIE5vdGUsIGNhbnZhcyBkYXRhIGlzIG5vdCBwcmVtdWx0aXBsZWQuIFdlIGRvbid0IG5lZWQgb3RoZXJcbiAgLy8gYWxwaGEgY29ycmVjdGlvbnMuXG5cbiAgaWYgKCFhbHBoYSkgcmVzZXRBbHBoYShkZXN0LCBkZXN0VywgZGVzdEgpO1xuICByZXR1cm4gZGVzdDtcbn07XG5cbn0se1wiLi9jb252b2x2ZVwiOjIsXCIuL3Jlc2l6ZV9maWx0ZXJfZ2VuXCI6Nn1dLDY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXG52YXIgRklMVEVSX0lORk8gPSBfZGVyZXFfKCcuL3Jlc2l6ZV9maWx0ZXJfaW5mbycpOyAvLyBQcmVjaXNpb24gb2YgZml4ZWQgRlAgdmFsdWVzXG5cblxudmFyIEZJWEVEX0ZSQUNfQklUUyA9IDE0O1xuXG5mdW5jdGlvbiB0b0ZpeGVkUG9pbnQobnVtKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bSAqICgoMSA8PCBGSVhFRF9GUkFDX0JJVFMpIC0gMSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlc2l6ZUZpbHRlckdlbihxdWFsaXR5LCBzcmNTaXplLCBkZXN0U2l6ZSwgc2NhbGUsIG9mZnNldCkge1xuICB2YXIgZmlsdGVyRnVuY3Rpb24gPSBGSUxURVJfSU5GT1txdWFsaXR5XS5maWx0ZXI7XG4gIHZhciBzY2FsZUludmVydGVkID0gMS4wIC8gc2NhbGU7XG4gIHZhciBzY2FsZUNsYW1wZWQgPSBNYXRoLm1pbigxLjAsIHNjYWxlKTsgLy8gRm9yIHVwc2NhbGVcbiAgLy8gRmlsdGVyIHdpbmRvdyAoYXZlcmFnaW5nIGludGVydmFsKSwgc2NhbGVkIHRvIHNyYyBpbWFnZVxuXG4gIHZhciBzcmNXaW5kb3cgPSBGSUxURVJfSU5GT1txdWFsaXR5XS53aW4gLyBzY2FsZUNsYW1wZWQ7XG4gIHZhciBkZXN0UGl4ZWwsIHNyY1BpeGVsLCBzcmNGaXJzdCwgc3JjTGFzdCwgZmlsdGVyRWxlbWVudFNpemUsIGZsb2F0RmlsdGVyLCBmeHBGaWx0ZXIsIHRvdGFsLCBweGwsIGlkeCwgZmxvYXRWYWwsIGZpbHRlclRvdGFsLCBmaWx0ZXJWYWw7XG4gIHZhciBsZWZ0Tm90RW1wdHksIHJpZ2h0Tm90RW1wdHksIGZpbHRlclNoaWZ0LCBmaWx0ZXJTaXplO1xuICB2YXIgbWF4RmlsdGVyRWxlbWVudFNpemUgPSBNYXRoLmZsb29yKChzcmNXaW5kb3cgKyAxKSAqIDIpO1xuICB2YXIgcGFja2VkRmlsdGVyID0gbmV3IEludDE2QXJyYXkoKG1heEZpbHRlckVsZW1lbnRTaXplICsgMikgKiBkZXN0U2l6ZSk7XG4gIHZhciBwYWNrZWRGaWx0ZXJQdHIgPSAwO1xuICB2YXIgc2xvd0NvcHkgPSAhcGFja2VkRmlsdGVyLnN1YmFycmF5IHx8ICFwYWNrZWRGaWx0ZXIuc2V0OyAvLyBGb3IgZWFjaCBkZXN0aW5hdGlvbiBwaXhlbCBjYWxjdWxhdGUgc291cmNlIHJhbmdlIGFuZCBidWlsdCBmaWx0ZXIgdmFsdWVzXG5cbiAgZm9yIChkZXN0UGl4ZWwgPSAwOyBkZXN0UGl4ZWwgPCBkZXN0U2l6ZTsgZGVzdFBpeGVsKyspIHtcbiAgICAvLyBTY2FsaW5nIHNob3VsZCBiZSBkb25lIHJlbGF0aXZlIHRvIGNlbnRyYWwgcGl4ZWwgcG9pbnRcbiAgICBzcmNQaXhlbCA9IChkZXN0UGl4ZWwgKyAwLjUpICogc2NhbGVJbnZlcnRlZCArIG9mZnNldDtcbiAgICBzcmNGaXJzdCA9IE1hdGgubWF4KDAsIE1hdGguZmxvb3Ioc3JjUGl4ZWwgLSBzcmNXaW5kb3cpKTtcbiAgICBzcmNMYXN0ID0gTWF0aC5taW4oc3JjU2l6ZSAtIDEsIE1hdGguY2VpbChzcmNQaXhlbCArIHNyY1dpbmRvdykpO1xuICAgIGZpbHRlckVsZW1lbnRTaXplID0gc3JjTGFzdCAtIHNyY0ZpcnN0ICsgMTtcbiAgICBmbG9hdEZpbHRlciA9IG5ldyBGbG9hdDMyQXJyYXkoZmlsdGVyRWxlbWVudFNpemUpO1xuICAgIGZ4cEZpbHRlciA9IG5ldyBJbnQxNkFycmF5KGZpbHRlckVsZW1lbnRTaXplKTtcbiAgICB0b3RhbCA9IDAuMDsgLy8gRmlsbCBmaWx0ZXIgdmFsdWVzIGZvciBjYWxjdWxhdGVkIHJhbmdlXG5cbiAgICBmb3IgKHB4bCA9IHNyY0ZpcnN0LCBpZHggPSAwOyBweGwgPD0gc3JjTGFzdDsgcHhsKyssIGlkeCsrKSB7XG4gICAgICBmbG9hdFZhbCA9IGZpbHRlckZ1bmN0aW9uKChweGwgKyAwLjUgLSBzcmNQaXhlbCkgKiBzY2FsZUNsYW1wZWQpO1xuICAgICAgdG90YWwgKz0gZmxvYXRWYWw7XG4gICAgICBmbG9hdEZpbHRlcltpZHhdID0gZmxvYXRWYWw7XG4gICAgfSAvLyBOb3JtYWxpemUgZmlsdGVyLCBjb252ZXJ0IHRvIGZpeGVkIHBvaW50IGFuZCBhY2N1bXVsYXRlIGNvbnZlcnNpb24gZXJyb3JcblxuXG4gICAgZmlsdGVyVG90YWwgPSAwO1xuXG4gICAgZm9yIChpZHggPSAwOyBpZHggPCBmbG9hdEZpbHRlci5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICBmaWx0ZXJWYWwgPSBmbG9hdEZpbHRlcltpZHhdIC8gdG90YWw7XG4gICAgICBmaWx0ZXJUb3RhbCArPSBmaWx0ZXJWYWw7XG4gICAgICBmeHBGaWx0ZXJbaWR4XSA9IHRvRml4ZWRQb2ludChmaWx0ZXJWYWwpO1xuICAgIH0gLy8gQ29tcGVuc2F0ZSBub3JtYWxpemF0aW9uIGVycm9yLCB0byBtaW5pbWl6ZSBicmlnaHRuZXNzIGRyaWZ0XG5cblxuICAgIGZ4cEZpbHRlcltkZXN0U2l6ZSA+PiAxXSArPSB0b0ZpeGVkUG9pbnQoMS4wIC0gZmlsdGVyVG90YWwpOyAvL1xuICAgIC8vIE5vdyBwYWNrIGZpbHRlciB0byB1c2VhYmxlIGZvcm1cbiAgICAvL1xuICAgIC8vIDEuIFRyaW0gaGVhZGluZyBhbmQgdGFpbGluZyB6ZXJvIHZhbHVlcywgYW5kIGNvbXBlbnNhdGUgc2hpdGYvbGVuZ3RoXG4gICAgLy8gMi4gUHV0IGFsbCB0byBzaW5nbGUgYXJyYXkgaW4gdGhpcyBmb3JtYXQ6XG4gICAgLy9cbiAgICAvLyAgICBbIHBvcyBzaGlmdCwgZGF0YSBsZW5ndGgsIHZhbHVlMSwgdmFsdWUyLCB2YWx1ZTMsIC4uLiBdXG4gICAgLy9cblxuICAgIGxlZnROb3RFbXB0eSA9IDA7XG5cbiAgICB3aGlsZSAobGVmdE5vdEVtcHR5IDwgZnhwRmlsdGVyLmxlbmd0aCAmJiBmeHBGaWx0ZXJbbGVmdE5vdEVtcHR5XSA9PT0gMCkge1xuICAgICAgbGVmdE5vdEVtcHR5Kys7XG4gICAgfVxuXG4gICAgaWYgKGxlZnROb3RFbXB0eSA8IGZ4cEZpbHRlci5sZW5ndGgpIHtcbiAgICAgIHJpZ2h0Tm90RW1wdHkgPSBmeHBGaWx0ZXIubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHJpZ2h0Tm90RW1wdHkgPiAwICYmIGZ4cEZpbHRlcltyaWdodE5vdEVtcHR5XSA9PT0gMCkge1xuICAgICAgICByaWdodE5vdEVtcHR5LS07XG4gICAgICB9XG5cbiAgICAgIGZpbHRlclNoaWZ0ID0gc3JjRmlyc3QgKyBsZWZ0Tm90RW1wdHk7XG4gICAgICBmaWx0ZXJTaXplID0gcmlnaHROb3RFbXB0eSAtIGxlZnROb3RFbXB0eSArIDE7XG4gICAgICBwYWNrZWRGaWx0ZXJbcGFja2VkRmlsdGVyUHRyKytdID0gZmlsdGVyU2hpZnQ7IC8vIHNoaWZ0XG5cbiAgICAgIHBhY2tlZEZpbHRlcltwYWNrZWRGaWx0ZXJQdHIrK10gPSBmaWx0ZXJTaXplOyAvLyBzaXplXG5cbiAgICAgIGlmICghc2xvd0NvcHkpIHtcbiAgICAgICAgcGFja2VkRmlsdGVyLnNldChmeHBGaWx0ZXIuc3ViYXJyYXkobGVmdE5vdEVtcHR5LCByaWdodE5vdEVtcHR5ICsgMSksIHBhY2tlZEZpbHRlclB0cik7XG4gICAgICAgIHBhY2tlZEZpbHRlclB0ciArPSBmaWx0ZXJTaXplO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgZm9yIG9sZCBJRSA8IDExLCB3aXRob3V0IHN1YmFycmF5L3NldCBtZXRob2RzXG4gICAgICAgIGZvciAoaWR4ID0gbGVmdE5vdEVtcHR5OyBpZHggPD0gcmlnaHROb3RFbXB0eTsgaWR4KyspIHtcbiAgICAgICAgICBwYWNrZWRGaWx0ZXJbcGFja2VkRmlsdGVyUHRyKytdID0gZnhwRmlsdGVyW2lkeF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gemVybyBkYXRhLCB3cml0ZSBoZWFkZXIgb25seVxuICAgICAgcGFja2VkRmlsdGVyW3BhY2tlZEZpbHRlclB0cisrXSA9IDA7IC8vIHNoaWZ0XG5cbiAgICAgIHBhY2tlZEZpbHRlcltwYWNrZWRGaWx0ZXJQdHIrK10gPSAwOyAvLyBzaXplXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhY2tlZEZpbHRlcjtcbn07XG5cbn0se1wiLi9yZXNpemVfZmlsdGVyX2luZm9cIjo3fV0sNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cbm1vZHVsZS5leHBvcnRzID0gW3tcbiAgLy8gTmVhcmVzdCBuZWlib3IgKEJveClcbiAgd2luOiAwLjUsXG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKHgpIHtcbiAgICByZXR1cm4geCA+PSAtMC41ICYmIHggPCAwLjUgPyAxLjAgOiAwLjA7XG4gIH1cbn0sIHtcbiAgLy8gSGFtbWluZ1xuICB3aW46IDEuMCxcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoeCkge1xuICAgIGlmICh4IDw9IC0xLjAgfHwgeCA+PSAxLjApIHtcbiAgICAgIHJldHVybiAwLjA7XG4gICAgfVxuXG4gICAgaWYgKHggPiAtMS4xOTIwOTI5MEUtMDcgJiYgeCA8IDEuMTkyMDkyOTBFLTA3KSB7XG4gICAgICByZXR1cm4gMS4wO1xuICAgIH1cblxuICAgIHZhciB4cGkgPSB4ICogTWF0aC5QSTtcbiAgICByZXR1cm4gTWF0aC5zaW4oeHBpKSAvIHhwaSAqICgwLjU0ICsgMC40NiAqIE1hdGguY29zKHhwaSAvIDEuMCkpO1xuICB9XG59LCB7XG4gIC8vIExhbmN6b3MsIHdpbiA9IDJcbiAgd2luOiAyLjAsXG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKHgpIHtcbiAgICBpZiAoeCA8PSAtMi4wIHx8IHggPj0gMi4wKSB7XG4gICAgICByZXR1cm4gMC4wO1xuICAgIH1cblxuICAgIGlmICh4ID4gLTEuMTkyMDkyOTBFLTA3ICYmIHggPCAxLjE5MjA5MjkwRS0wNykge1xuICAgICAgcmV0dXJuIDEuMDtcbiAgICB9XG5cbiAgICB2YXIgeHBpID0geCAqIE1hdGguUEk7XG4gICAgcmV0dXJuIE1hdGguc2luKHhwaSkgLyB4cGkgKiBNYXRoLnNpbih4cGkgLyAyLjApIC8gKHhwaSAvIDIuMCk7XG4gIH1cbn0sIHtcbiAgLy8gTGFuY3pvcywgd2luID0gM1xuICB3aW46IDMuMCxcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoeCkge1xuICAgIGlmICh4IDw9IC0zLjAgfHwgeCA+PSAzLjApIHtcbiAgICAgIHJldHVybiAwLjA7XG4gICAgfVxuXG4gICAgaWYgKHggPiAtMS4xOTIwOTI5MEUtMDcgJiYgeCA8IDEuMTkyMDkyOTBFLTA3KSB7XG4gICAgICByZXR1cm4gMS4wO1xuICAgIH1cblxuICAgIHZhciB4cGkgPSB4ICogTWF0aC5QSTtcbiAgICByZXR1cm4gTWF0aC5zaW4oeHBpKSAvIHhwaSAqIE1hdGguc2luKHhwaSAvIDMuMCkgLyAoeHBpIC8gMy4wKTtcbiAgfVxufV07XG5cbn0se31dLDg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXG52YXIgY3JlYXRlRmlsdGVycyA9IF9kZXJlcV8oJy4vcmVzaXplX2ZpbHRlcl9nZW4nKTtcblxuZnVuY3Rpb24gcmVzZXRBbHBoYShkc3QsIHdpZHRoLCBoZWlnaHQpIHtcbiAgdmFyIHB0ciA9IDMsXG4gICAgICBsZW4gPSB3aWR0aCAqIGhlaWdodCAqIDQgfCAwO1xuXG4gIHdoaWxlIChwdHIgPCBsZW4pIHtcbiAgICBkc3RbcHRyXSA9IDB4RkY7XG4gICAgcHRyID0gcHRyICsgNCB8IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNVaW50OEFycmF5KHNyYykge1xuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoc3JjLmJ1ZmZlciwgMCwgc3JjLmJ5dGVMZW5ndGgpO1xufVxuXG52YXIgSVNfTEUgPSB0cnVlOyAvLyBzaG91bGQgbm90IGNyYXNoIGV2ZXJ5dGhpbmcgb24gbW9kdWxlIGxvYWQgaW4gb2xkIGJyb3dzZXJzXG5cbnRyeSB7XG4gIElTX0xFID0gbmV3IFVpbnQzMkFycmF5KG5ldyBVaW50OEFycmF5KFsxLCAwLCAwLCAwXSkuYnVmZmVyKVswXSA9PT0gMTtcbn0gY2F0Y2ggKF9fKSB7fVxuXG5mdW5jdGlvbiBjb3B5SW50MTZhc0xFKHNyYywgdGFyZ2V0LCB0YXJnZXRfb2Zmc2V0KSB7XG4gIGlmIChJU19MRSkge1xuICAgIHRhcmdldC5zZXQoYXNVaW50OEFycmF5KHNyYyksIHRhcmdldF9vZmZzZXQpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAodmFyIHB0ciA9IHRhcmdldF9vZmZzZXQsIGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRhdGEgPSBzcmNbaV07XG4gICAgdGFyZ2V0W3B0cisrXSA9IGRhdGEgJiAweEZGO1xuICAgIHRhcmdldFtwdHIrK10gPSBkYXRhID4+IDggJiAweEZGO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVzaXplX3dhc20ob3B0aW9ucykge1xuICB2YXIgc3JjID0gb3B0aW9ucy5zcmM7XG4gIHZhciBzcmNXID0gb3B0aW9ucy53aWR0aDtcbiAgdmFyIHNyY0ggPSBvcHRpb25zLmhlaWdodDtcbiAgdmFyIGRlc3RXID0gb3B0aW9ucy50b1dpZHRoO1xuICB2YXIgZGVzdEggPSBvcHRpb25zLnRvSGVpZ2h0O1xuICB2YXIgc2NhbGVYID0gb3B0aW9ucy5zY2FsZVggfHwgb3B0aW9ucy50b1dpZHRoIC8gb3B0aW9ucy53aWR0aDtcbiAgdmFyIHNjYWxlWSA9IG9wdGlvbnMuc2NhbGVZIHx8IG9wdGlvbnMudG9IZWlnaHQgLyBvcHRpb25zLmhlaWdodDtcbiAgdmFyIG9mZnNldFggPSBvcHRpb25zLm9mZnNldFggfHwgMC4wO1xuICB2YXIgb2Zmc2V0WSA9IG9wdGlvbnMub2Zmc2V0WSB8fCAwLjA7XG4gIHZhciBkZXN0ID0gb3B0aW9ucy5kZXN0IHx8IG5ldyBVaW50OEFycmF5KGRlc3RXICogZGVzdEggKiA0KTtcbiAgdmFyIHF1YWxpdHkgPSB0eXBlb2Ygb3B0aW9ucy5xdWFsaXR5ID09PSAndW5kZWZpbmVkJyA/IDMgOiBvcHRpb25zLnF1YWxpdHk7XG4gIHZhciBhbHBoYSA9IG9wdGlvbnMuYWxwaGEgfHwgZmFsc2U7XG4gIHZhciBmaWx0ZXJzWCA9IGNyZWF0ZUZpbHRlcnMocXVhbGl0eSwgc3JjVywgZGVzdFcsIHNjYWxlWCwgb2Zmc2V0WCksXG4gICAgICBmaWx0ZXJzWSA9IGNyZWF0ZUZpbHRlcnMocXVhbGl0eSwgc3JjSCwgZGVzdEgsIHNjYWxlWSwgb2Zmc2V0WSk7IC8vIGRlc3RpbmF0aW9uIGlzIDAgdG9vLlxuXG4gIHZhciBzcmNfb2Zmc2V0ID0gMDsgLy8gYnVmZmVyIGJldHdlZW4gY29udm9sdmUgcGFzc2VzXG5cbiAgdmFyIHRtcF9vZmZzZXQgPSB0aGlzLl9fYWxpZ24oc3JjX29mZnNldCArIE1hdGgubWF4KHNyYy5ieXRlTGVuZ3RoLCBkZXN0LmJ5dGVMZW5ndGgpKTtcblxuICB2YXIgZmlsdGVyc1hfb2Zmc2V0ID0gdGhpcy5fX2FsaWduKHRtcF9vZmZzZXQgKyBzcmNIICogZGVzdFcgKiA0KTtcblxuICB2YXIgZmlsdGVyc1lfb2Zmc2V0ID0gdGhpcy5fX2FsaWduKGZpbHRlcnNYX29mZnNldCArIGZpbHRlcnNYLmJ5dGVMZW5ndGgpO1xuXG4gIHZhciBhbGxvY19ieXRlcyA9IGZpbHRlcnNZX29mZnNldCArIGZpbHRlcnNZLmJ5dGVMZW5ndGg7XG5cbiAgdmFyIGluc3RhbmNlID0gdGhpcy5fX2luc3RhbmNlKCdyZXNpemUnLCBhbGxvY19ieXRlcyk7IC8vXG4gIC8vIEZpbGwgbWVtb3J5IGJsb2NrIHdpdGggZGF0YSB0byBwcm9jZXNzXG4gIC8vXG5cblxuICB2YXIgbWVtID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fX21lbW9yeS5idWZmZXIpO1xuICB2YXIgbWVtMzIgPSBuZXcgVWludDMyQXJyYXkodGhpcy5fX21lbW9yeS5idWZmZXIpOyAvLyAzMi1iaXQgY29weSBpcyBtdWNoIGZhc3RlciBpbiBjaHJvbWVcblxuICB2YXIgc3JjMzIgPSBuZXcgVWludDMyQXJyYXkoc3JjLmJ1ZmZlcik7XG4gIG1lbTMyLnNldChzcmMzMik7IC8vIFdlIHNob3VsZCBndWFyYW50ZWUgTEUgYnl0ZXMgb3JkZXIuIEZpbHRlcnMgYXJlIG5vdCBiaWcsIHNvXG4gIC8vIHNwZWVkIGRpZmZlcmVuY2UgaXMgbm90IHNpZ25pZmljYW50IHZzIGRpcmVjdCAuc2V0KClcblxuICBjb3B5SW50MTZhc0xFKGZpbHRlcnNYLCBtZW0sIGZpbHRlcnNYX29mZnNldCk7XG4gIGNvcHlJbnQxNmFzTEUoZmlsdGVyc1ksIG1lbSwgZmlsdGVyc1lfb2Zmc2V0KTsgLy9cbiAgLy8gTm93IGNhbGwgd2ViYXNzZW1ibHkgbWV0aG9kXG4gIC8vIGVtc2RrIGRvZXMgbWV0aG9kIG5hbWVzIHdpdGggJ18nXG5cbiAgdmFyIGZuID0gaW5zdGFuY2UuZXhwb3J0cy5jb252b2x2ZUhWIHx8IGluc3RhbmNlLmV4cG9ydHMuX2NvbnZvbHZlSFY7XG4gIGZuKGZpbHRlcnNYX29mZnNldCwgZmlsdGVyc1lfb2Zmc2V0LCB0bXBfb2Zmc2V0LCBzcmNXLCBzcmNILCBkZXN0VywgZGVzdEgpOyAvL1xuICAvLyBDb3B5IGRhdGEgYmFjayB0byB0eXBlZCBhcnJheVxuICAvL1xuICAvLyAzMi1iaXQgY29weSBpcyBtdWNoIGZhc3RlciBpbiBjaHJvbWVcblxuICB2YXIgZGVzdDMyID0gbmV3IFVpbnQzMkFycmF5KGRlc3QuYnVmZmVyKTtcbiAgZGVzdDMyLnNldChuZXcgVWludDMyQXJyYXkodGhpcy5fX21lbW9yeS5idWZmZXIsIDAsIGRlc3RIICogZGVzdFcpKTsgLy8gVGhhdCdzIGZhc3RlciB0aGFuIGRvaW5nIGNoZWNrcyBpbiBjb252b2x2ZXIuXG4gIC8vICEhISBOb3RlLCBjYW52YXMgZGF0YSBpcyBub3QgcHJlbXVsdGlwbGVkLiBXZSBkb24ndCBuZWVkIG90aGVyXG4gIC8vIGFscGhhIGNvcnJlY3Rpb25zLlxuXG4gIGlmICghYWxwaGEpIHJlc2V0QWxwaGEoZGVzdCwgZGVzdFcsIGRlc3RIKTtcbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG59LHtcIi4vcmVzaXplX2ZpbHRlcl9nZW5cIjo2fV0sOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiAndW5zaGFycF9tYXNrJyxcbiAgZm46IF9kZXJlcV8oJy4vdW5zaGFycF9tYXNrJyksXG4gIHdhc21fZm46IF9kZXJlcV8oJy4vdW5zaGFycF9tYXNrX3dhc20nKSxcbiAgd2FzbV9zcmM6IF9kZXJlcV8oJy4vdW5zaGFycF9tYXNrX3dhc21fYmFzZTY0Jylcbn07XG5cbn0se1wiLi91bnNoYXJwX21hc2tcIjoxMCxcIi4vdW5zaGFycF9tYXNrX3dhc21cIjoxMSxcIi4vdW5zaGFycF9tYXNrX3dhc21fYmFzZTY0XCI6MTJ9XSwxMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cbnZhciBnbHVyX21vbm8xNiA9IF9kZXJlcV8oJ2dsdXIvbW9ubzE2Jyk7XG5cbmZ1bmN0aW9uIGhzdl92MTYoaW1nLCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHZhciBzaXplID0gd2lkdGggKiBoZWlnaHQ7XG4gIHZhciBvdXQgPSBuZXcgVWludDE2QXJyYXkoc2l6ZSk7XG4gIHZhciByLCBnLCBiLCBtYXg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICByID0gaW1nWzQgKiBpXTtcbiAgICBnID0gaW1nWzQgKiBpICsgMV07XG4gICAgYiA9IGltZ1s0ICogaSArIDJdO1xuICAgIG1heCA9IHIgPj0gZyAmJiByID49IGIgPyByIDogZyA+PSBiICYmIGcgPj0gciA/IGcgOiBiO1xuICAgIG91dFtpXSA9IG1heCA8PCA4O1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1bnNoYXJwKGltZywgd2lkdGgsIGhlaWdodCwgYW1vdW50LCByYWRpdXMsIHRocmVzaG9sZCkge1xuICB2YXIgdjEsIHYyLCB2bXVsO1xuICB2YXIgZGlmZiwgaVRpbWVzNDtcblxuICBpZiAoYW1vdW50ID09PSAwIHx8IHJhZGl1cyA8IDAuNSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChyYWRpdXMgPiAyLjApIHtcbiAgICByYWRpdXMgPSAyLjA7XG4gIH1cblxuICB2YXIgYnJpZ2h0bmVzcyA9IGhzdl92MTYoaW1nLCB3aWR0aCwgaGVpZ2h0KTtcbiAgdmFyIGJsdXJlZCA9IG5ldyBVaW50MTZBcnJheShicmlnaHRuZXNzKTsgLy8gY29weSwgYmVjYXVzZSBibHVyIG1vZGlmeSBzcmNcblxuICBnbHVyX21vbm8xNihibHVyZWQsIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyk7XG4gIHZhciBhbW91bnRGcCA9IGFtb3VudCAvIDEwMCAqIDB4MTAwMCArIDAuNSB8IDA7XG4gIHZhciB0aHJlc2hvbGRGcCA9IHRocmVzaG9sZCA8PCA4O1xuICB2YXIgc2l6ZSA9IHdpZHRoICogaGVpZ2h0O1xuICAvKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgIHYxID0gYnJpZ2h0bmVzc1tpXTtcbiAgICBkaWZmID0gdjEgLSBibHVyZWRbaV07XG5cbiAgICBpZiAoTWF0aC5hYnMoZGlmZikgPj0gdGhyZXNob2xkRnApIHtcbiAgICAgIC8vIGFkZCB1bnNoYXJwIG1hc2sgdG8gdGhlIGJyaWdodG5lc3MgY2hhbm5lbFxuICAgICAgdjIgPSB2MSArIChhbW91bnRGcCAqIGRpZmYgKyAweDgwMCA+PiAxMik7IC8vIEJvdGggdjEgYW5kIHYyIGFyZSB3aXRoaW4gWzAuMCAuLiAyNTUuMF0gKDAwMDAtRkYwMCkgcmFuZ2UsIG5ldmVyIGdvaW5nIGludG9cbiAgICAgIC8vIFsyNTUuMDAzIC4uIDI1NS45OTZdIChGRjAxLUZGRkYpLiBUaGlzIGFsbG93cyB0byByb3VuZCB0aGlzIHZhbHVlIGFzICh4Ky41KXwwXG4gICAgICAvLyBsYXRlciB3aXRob3V0IG92ZXJmbG93aW5nLlxuXG4gICAgICB2MiA9IHYyID4gMHhmZjAwID8gMHhmZjAwIDogdjI7XG4gICAgICB2MiA9IHYyIDwgMHgwMDAwID8gMHgwMDAwIDogdjI7IC8vIEF2b2lkIGRpdmlzaW9uIGJ5IDAuIFY9MCBtZWFucyByZ2IoMCwwLDApLCB1bnNoYXJwIHdpdGggdW5zaGFycEFtb3VudD4wIGNhbm5vdFxuICAgICAgLy8gY2hhbmdlIHRoaXMgdmFsdWUgKGJlY2F1c2UgZGlmZiBiZXR3ZWVuIGNvbG9ycyBnZXRzIGluZmxhdGVkKSwgc28gbm8gbmVlZCB0byB2ZXJpZnkgY29ycmVjdG5lc3MuXG5cbiAgICAgIHYxID0gdjEgIT09IDAgPyB2MSA6IDE7IC8vIE11bHRpcGx5aW5nIFYgaW4gSFNWIG1vZGVsIGJ5IGEgY29uc3RhbnQgaXMgZXF1aXZhbGVudCB0byBtdWx0aXBseWluZyBlYWNoIGNvbXBvbmVudFxuICAgICAgLy8gaW4gUkdCIGJ5IHRoZSBzYW1lIGNvbnN0YW50IChzYW1lIGZvciBIU0wpLCBzZWUgYWxzbzpcbiAgICAgIC8vIGh0dHBzOi8vYmVlc2J1enouYml6L2NvZGUvMTYtaHN2LWNvbG9yLXRyYW5zZm9ybXNcblxuICAgICAgdm11bCA9ICh2MiA8PCAxMikgLyB2MSB8IDA7IC8vIFJlc3VsdCB3aWxsIGJlIGluIFswLi4yNTVdIHJhbmdlIGJlY2F1c2U6XG4gICAgICAvLyAgLSBhbGwgbnVtYmVycyBhcmUgcG9zaXRpdmVcbiAgICAgIC8vICAtIHIsZyxiIDw9ICh2MS8yNTYpXG4gICAgICAvLyAgLSByLGcsYiwodjEvMjU2KSwodjIvMjU2KSA8PSAyNTVcbiAgICAgIC8vIFNvIGhpZ2hlc3QgdGhpcyBudW1iZXIgY2FuIGdldCBpcyBYKjI1NS9YKzAuNT0yNTUuNSB3aGljaCBpcyA8IDI1NiBhbmQgcm91bmRzIGRvd24uXG5cbiAgICAgIGlUaW1lczQgPSBpICogNDtcbiAgICAgIGltZ1tpVGltZXM0XSA9IGltZ1tpVGltZXM0XSAqIHZtdWwgKyAweDgwMCA+PiAxMjsgLy8gUlxuXG4gICAgICBpbWdbaVRpbWVzNCArIDFdID0gaW1nW2lUaW1lczQgKyAxXSAqIHZtdWwgKyAweDgwMCA+PiAxMjsgLy8gR1xuXG4gICAgICBpbWdbaVRpbWVzNCArIDJdID0gaW1nW2lUaW1lczQgKyAyXSAqIHZtdWwgKyAweDgwMCA+PiAxMjsgLy8gQlxuICAgIH1cbiAgfVxufTtcblxufSx7XCJnbHVyL21vbm8xNlwiOjE4fV0sMTE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHVuc2hhcnAoaW1nLCB3aWR0aCwgaGVpZ2h0LCBhbW91bnQsIHJhZGl1cywgdGhyZXNob2xkKSB7XG4gIGlmIChhbW91bnQgPT09IDAgfHwgcmFkaXVzIDwgMC41KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHJhZGl1cyA+IDIuMCkge1xuICAgIHJhZGl1cyA9IDIuMDtcbiAgfVxuXG4gIHZhciBwaXhlbHMgPSB3aWR0aCAqIGhlaWdodDtcbiAgdmFyIGltZ19ieXRlc19jbnQgPSBwaXhlbHMgKiA0O1xuICB2YXIgaHN2X2J5dGVzX2NudCA9IHBpeGVscyAqIDI7XG4gIHZhciBibHVyX2J5dGVzX2NudCA9IHBpeGVscyAqIDI7XG4gIHZhciBibHVyX2xpbmVfYnl0ZV9jbnQgPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAqIDQ7IC8vIGZsb2F0MzIgYXJyYXlcblxuICB2YXIgYmx1cl9jb2VmZnNfYnl0ZV9jbnQgPSA4ICogNDsgLy8gZmxvYXQzMiBhcnJheVxuXG4gIHZhciBpbWdfb2Zmc2V0ID0gMDtcbiAgdmFyIGhzdl9vZmZzZXQgPSBpbWdfYnl0ZXNfY250O1xuICB2YXIgYmx1cl9vZmZzZXQgPSBoc3Zfb2Zmc2V0ICsgaHN2X2J5dGVzX2NudDtcbiAgdmFyIGJsdXJfdG1wX29mZnNldCA9IGJsdXJfb2Zmc2V0ICsgYmx1cl9ieXRlc19jbnQ7XG4gIHZhciBibHVyX2xpbmVfb2Zmc2V0ID0gYmx1cl90bXBfb2Zmc2V0ICsgYmx1cl9ieXRlc19jbnQ7XG4gIHZhciBibHVyX2NvZWZmc19vZmZzZXQgPSBibHVyX2xpbmVfb2Zmc2V0ICsgYmx1cl9saW5lX2J5dGVfY250O1xuXG4gIHZhciBpbnN0YW5jZSA9IHRoaXMuX19pbnN0YW5jZSgndW5zaGFycF9tYXNrJywgaW1nX2J5dGVzX2NudCArIGhzdl9ieXRlc19jbnQgKyBibHVyX2J5dGVzX2NudCAqIDIgKyBibHVyX2xpbmVfYnl0ZV9jbnQgKyBibHVyX2NvZWZmc19ieXRlX2NudCwge1xuICAgIGV4cDogTWF0aC5leHBcbiAgfSk7IC8vIDMyLWJpdCBjb3B5IGlzIG11Y2ggZmFzdGVyIGluIGNocm9tZVxuXG5cbiAgdmFyIGltZzMyID0gbmV3IFVpbnQzMkFycmF5KGltZy5idWZmZXIpO1xuICB2YXIgbWVtMzIgPSBuZXcgVWludDMyQXJyYXkodGhpcy5fX21lbW9yeS5idWZmZXIpO1xuICBtZW0zMi5zZXQoaW1nMzIpOyAvLyBIU0xcblxuICB2YXIgZm4gPSBpbnN0YW5jZS5leHBvcnRzLmhzdl92MTYgfHwgaW5zdGFuY2UuZXhwb3J0cy5faHN2X3YxNjtcbiAgZm4oaW1nX29mZnNldCwgaHN2X29mZnNldCwgd2lkdGgsIGhlaWdodCk7IC8vIEJMVVJcblxuICBmbiA9IGluc3RhbmNlLmV4cG9ydHMuYmx1ck1vbm8xNiB8fCBpbnN0YW5jZS5leHBvcnRzLl9ibHVyTW9ubzE2O1xuICBmbihoc3Zfb2Zmc2V0LCBibHVyX29mZnNldCwgYmx1cl90bXBfb2Zmc2V0LCBibHVyX2xpbmVfb2Zmc2V0LCBibHVyX2NvZWZmc19vZmZzZXQsIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyk7IC8vIFVOU0hBUlBcblxuICBmbiA9IGluc3RhbmNlLmV4cG9ydHMudW5zaGFycCB8fCBpbnN0YW5jZS5leHBvcnRzLl91bnNoYXJwO1xuICBmbihpbWdfb2Zmc2V0LCBpbWdfb2Zmc2V0LCBoc3Zfb2Zmc2V0LCBibHVyX29mZnNldCwgd2lkdGgsIGhlaWdodCwgYW1vdW50LCB0aHJlc2hvbGQpOyAvLyAzMi1iaXQgY29weSBpcyBtdWNoIGZhc3RlciBpbiBjaHJvbWVcblxuICBpbWczMi5zZXQobmV3IFVpbnQzMkFycmF5KHRoaXMuX19tZW1vcnkuYnVmZmVyLCAwLCBwaXhlbHMpKTtcbn07XG5cbn0se31dLDEyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSAnQUdGemJRRUFBQUFBREFaa2VXeHBibXNBQUFBQUFBRTBCMkFBQUdBRWYzOS9md0JnQm45L2YzOS9md0JnQ0g5L2YzOS9mMzkvQUdBSWYzOS9mMzkvZjMwQVlBSjlmd0JnQVh3QmZBSVpBZ05sYm5ZRFpYaHdBQVlEWlc1MkJtMWxiVzl5ZVFJQUFBTUhCZ0FGQWdRQkF3WUdBWDhBUVFBTEI0b0JDQkZmWDNkaGMyMWZZMkZzYkY5amRHOXljd0FCRmw5ZlluVnBiR1JmWjJGMWMzTnBZVzVmWTI5bFpuTUFBZzVmWDJkaGRYTnpNVFpmYkdsdVpRQURDbUpzZFhKTmIyNXZNVFlBQkFkb2MzWmZkakUyQUFVSGRXNXphR0Z5Y0FBR0RGOWZaSE52WDJoaGJtUnNaUU1BR0Y5ZmQyRnpiVjloY0hCc2VWOWtZWFJoWDNKbGJHOWpjd0FCQ3NVTUJnTUFBUXZXQVFFSGZDQUJSTnVHdWtPQ0d2cy9JQUM3b3lJQ1JBQUFBQUFBQUFEQW9oQUFJZ1cyakRnQ0ZDQUJJQUthRUFBaUF5QURvQ0lHdGpnQ0VDQUJSQUFBQUFBQUFQQS9JQU9oSWdRZ0JLSWdBeUFDSUFLZ29rUUFBQUFBQUFEd1A2QWdCYUdqSWdTMk9BSUFJQUVnQlNBRW1xSWlCN1k0QWd3Z0FTQURJQUpFQUFBQUFBQUE4RCtnSUFTaW9pSUl0amdDQ0NBQklBTWdBa1FBQUFBQUFBRHd2NkFnQktLaUlnSzJPQUlFSUFFZ0J5QUlvQ0FGUkFBQUFBQUFBUEEvSUFhaG9DSURvN1k0QWh3Z0FTQUVJQUtnSUFPanRqZ0NHQXVHQlFNR2Z3bDhBbjBnQXlvQ0RDRVZJQU1xQWdnaEZpQURLZ0lVdXlFUklBTXFBaEM3SVJBQ1FDQUVRUUZySWdoQkFFZ2lDUVJBSUFJaEJ5QUFJUVlNQVFzZ0FpQUFMd0VBdUNJUElBTXFBaGk3b2lJTUlCR2lJZzBnRENBUW9pQVBJQU1xQWdTN0loT2lJaFFnQXlvQ0FMc2lFaUFQb3FDZ29DSU90amdDQUNBQ1FRUnFJUWNnQUVFQ2FpRUdJQWhGRFFBZ0NFRUJJQWhCQVVnYklncEJmM01oQ3dKL0lBUWdDbXRCQVhGRkJFQWdEaUVOSUFnTUFRc2dBaUFOSUE0Z0VLSWdGQ0FTSUFBdkFRSzRJZytpb0tDZ0lnMjJPQUlFSUFKQkNHb2hCeUFBUVFScUlRWWdEaUVNSUFSQkFtc0xJUUlnQzBFQUlBUnJSZzBBQTBBZ0J5QU1JQkdpSUEwZ0VLSWdEeUFUb2lBU0lBWXZBUUM0SWc2aW9LQ2dJZ3kyT0FJQUlBY2dEU0FSb2lBTUlCQ2lJQTRnRTZJZ0VpQUdMd0VDdUNJUG9xQ2dvQ0lOdGpnQ0JDQUhRUWhxSVFjZ0JrRUVhaUVHSUFKQkFrb2hBQ0FDUVFKcklRSWdBQTBBQ3dzQ1FDQUpEUUFnQVNBRklBaHNRUUYwYWlJQUFuOGdCa0VDYXk4QkFDSUN1Q0lOSUJXN0loS2lJQTBnRnJzaUU2S2dJQTBnQXlvQ0hMdWlJZ3dnRUtLZ0lBd2dFYUtnSWc4Z0IwRUVheUlIS2dJQXU2QWlEa1FBQUFBQUFBRHdRV01nRGtRQUFBQUFBQUFBQUdaeEJFQWdEcXNNQVF0QkFBczdBUUFnQ0VVTkFDQUdRUVJySVFaQkFDQUZhMEVCZENFQkEwQUNmeUFOSUJLaUlBSkIvLzhEY2JnaURTQVRvcUFnRHlJT0lCQ2lvQ0FNSUJHaW9DSVBJQWRCQkdzaUJ5b0NBTHVnSWd4RUFBQUFBQUFBOEVGaklBeEVBQUFBQUFBQUFBQm1jUVJBSUF5ckRBRUxRUUFMSVFNZ0JpOEJBQ0VDSUFBZ0FXb2lBQ0FET3dFQUlBWkJBbXNoQmlBSVFRRktJUU1nRGlFTUlBaEJBV3NoQ0NBRERRQUxDd3ZSQWdJQmZ3ZDhBa0FnQjBNQUFBQUFXdzBBSUFSRTI0YTZRNElhK3o4Z0IwTUFBQUEvbDd1aklnbEVBQUFBQUFBQUFNQ2lFQUFpRExhTU9BSVVJQVFnQ1pvUUFDSUtJQXFnSWcyMk9BSVFJQVJFQUFBQUFBQUE4RDhnQ3FFaUN5QUxvaUFLSUFrZ0NhQ2lSQUFBQUFBQUFQQS9vQ0FNb2FNaUM3WTRBZ0FnQkNBTUlBdWFvaUlPdGpnQ0RDQUVJQW9nQ1VRQUFBQUFBQUR3UDZBZ0M2S2lJZysyT0FJSUlBUWdDaUFKUkFBQUFBQUFBUEMvb0NBTG9xSWlDYlk0QWdRZ0JDQU9JQStnSUF4RUFBQUFBQUFBOEQ4Z0RhR2dJZ3FqdGpnQ0hDQUVJQXNnQ2FBZ0NxTzJPQUlZSUFZRVFBTkFJQUFnQlNBSWJFRUJkR29nQWlBSVFRRjBhaUFESUFRZ0JTQUdFQU1nQ0VFQmFpSUlJQVpIRFFBTEN5QUZSUTBBUVFBaENBTkFJQUlnQmlBSWJFRUJkR29nQVNBSVFRRjBhaUFESUFRZ0JpQUZFQU1nQ0VFQmFpSUlJQVZIRFFBTEN3dHhBUU4vSUFJZ0Eyd2lCUVJBQTBBZ0FTQUFLQUlBSWdSQkVIWkIvd0Z4SWdJZ0FpQUVRUWgyUWY4QmNTSURJQU1nQkVIL0FYRWlCRWtiSUFJZ0Ewc2JJZ1lnQmlBRUlBSWdCRXNiSUFNZ0JFc2JRUWgwT3dFQUlBRkJBbW9oQVNBQVFRUnFJUUFnQlVFQmF5SUZEUUFMQ3d1WkFnSURmd0Y4SUFRZ0JXd2hCQUovSUFhelF3QUFnRVdVUXdBQXlFS1Z1MFFBQUFBQUFBRGdQNkFpQzVsRUFBQUFBQUFBNEVGakJFQWdDNm9NQVF0QmdJQ0FnSGdMSVFVZ0JBUkFJQWRCQ0hRaENVRUFJUVlEUUNBSklBSWdCa0VCZENJSGFpOEJBQ0lCSUFNZ0Iyb3ZBUUJySWdjZ0IwRWZkU0lJYWlBSWMwMEVRQ0FBSUFaQkFuUWlDR29pQ2lBRklBZHNRWUFRYWtFTWRTQUJhaUlIUVlEK0F5QUhRWUQrQTBnYklnZEJBQ0FIUVFCS0cwRU1kQ0FCUVFFZ0FSdHVJZ0VnQ2kwQUFHeEJnQkJxUVF4Mk9nQUFJQUFnQ0VFQmNtb2lCeUFCSUFjdEFBQnNRWUFRYWtFTWRqb0FBQ0FBSUFoQkFuSnFJZ2NnQVNBSExRQUFiRUdBRUdwQkRIWTZBQUFMSUFaQkFXb2lCaUFFUncwQUN3c0wnO1xuXG59LHt9XSwxMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cbnZhciBHQ19JTlRFUlZBTCA9IDEwMDtcblxuZnVuY3Rpb24gUG9vbChjcmVhdGUsIGlkbGUpIHtcbiAgdGhpcy5jcmVhdGUgPSBjcmVhdGU7XG4gIHRoaXMuYXZhaWxhYmxlID0gW107XG4gIHRoaXMuYWNxdWlyZWQgPSB7fTtcbiAgdGhpcy5sYXN0SWQgPSAxO1xuICB0aGlzLnRpbWVvdXRJZCA9IDA7XG4gIHRoaXMuaWRsZSA9IGlkbGUgfHwgMjAwMDtcbn1cblxuUG9vbC5wcm90b3R5cGUuYWNxdWlyZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgcmVzb3VyY2U7XG5cbiAgaWYgKHRoaXMuYXZhaWxhYmxlLmxlbmd0aCAhPT0gMCkge1xuICAgIHJlc291cmNlID0gdGhpcy5hdmFpbGFibGUucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzb3VyY2UgPSB0aGlzLmNyZWF0ZSgpO1xuICAgIHJlc291cmNlLmlkID0gdGhpcy5sYXN0SWQrKztcblxuICAgIHJlc291cmNlLnJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucmVsZWFzZShyZXNvdXJjZSk7XG4gICAgfTtcbiAgfVxuXG4gIHRoaXMuYWNxdWlyZWRbcmVzb3VyY2UuaWRdID0gcmVzb3VyY2U7XG4gIHJldHVybiByZXNvdXJjZTtcbn07XG5cblBvb2wucHJvdG90eXBlLnJlbGVhc2UgPSBmdW5jdGlvbiAocmVzb3VyY2UpIHtcbiAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgZGVsZXRlIHRoaXMuYWNxdWlyZWRbcmVzb3VyY2UuaWRdO1xuICByZXNvdXJjZS5sYXN0VXNlZCA9IERhdGUubm93KCk7XG4gIHRoaXMuYXZhaWxhYmxlLnB1c2gocmVzb3VyY2UpO1xuXG4gIGlmICh0aGlzLnRpbWVvdXRJZCA9PT0gMCkge1xuICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLmdjKCk7XG4gICAgfSwgR0NfSU5URVJWQUwpO1xuICB9XG59O1xuXG5Qb29sLnByb3RvdHlwZS5nYyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gIHRoaXMuYXZhaWxhYmxlID0gdGhpcy5hdmFpbGFibGUuZmlsdGVyKGZ1bmN0aW9uIChyZXNvdXJjZSkge1xuICAgIGlmIChub3cgLSByZXNvdXJjZS5sYXN0VXNlZCA+IF90aGlzMy5pZGxlKSB7XG4gICAgICByZXNvdXJjZS5kZXN0cm95KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuXG4gIGlmICh0aGlzLmF2YWlsYWJsZS5sZW5ndGggIT09IDApIHtcbiAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzMy5nYygpO1xuICAgIH0sIEdDX0lOVEVSVkFMKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnRpbWVvdXRJZCA9IDA7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9vbDtcblxufSx7fV0sMTQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gbWluIHNpemUgPSAxIGNhbiBjb25zdW1lIGxhcmdlIGFtb3VudCBvZiBtZW1vcnlcblxudmFyIE1JTl9JTk5FUl9USUxFX1NJWkUgPSAyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZVN0YWdlcyhmcm9tV2lkdGgsIGZyb21IZWlnaHQsIHRvV2lkdGgsIHRvSGVpZ2h0LCBzcmNUaWxlU2l6ZSwgZGVzdFRpbGVCb3JkZXIpIHtcbiAgdmFyIHNjYWxlWCA9IHRvV2lkdGggLyBmcm9tV2lkdGg7XG4gIHZhciBzY2FsZVkgPSB0b0hlaWdodCAvIGZyb21IZWlnaHQ7IC8vIGRlcml2ZWQgZnJvbSBjcmVhdGVSZWdpb25zIGVxdWF0aW9uOlxuICAvLyBpbm5lclRpbGVXaWR0aCA9IHBpeGVsRmxvb3Ioc3JjVGlsZVNpemUgKiBzY2FsZVgpIC0gMiAqIGRlc3RUaWxlQm9yZGVyO1xuXG4gIHZhciBtaW5TY2FsZSA9ICgyICogZGVzdFRpbGVCb3JkZXIgKyBNSU5fSU5ORVJfVElMRV9TSVpFICsgMSkgLyBzcmNUaWxlU2l6ZTsgLy8gcmVmdXNlIHRvIHNjYWxlIGltYWdlIG11bHRpcGxlIHRpbWVzIGJ5IGxlc3MgdGhhbiB0d2ljZSBlYWNoIHRpbWUsXG4gIC8vIGl0IGNvdWxkIG9ubHkgaGFwcGVuIGJlY2F1c2Ugb2YgaW52YWxpZCBvcHRpb25zXG5cbiAgaWYgKG1pblNjYWxlID4gMC41KSByZXR1cm4gW1t0b1dpZHRoLCB0b0hlaWdodF1dO1xuICB2YXIgc3RhZ2VDb3VudCA9IE1hdGguY2VpbChNYXRoLmxvZyhNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSkpIC8gTWF0aC5sb2cobWluU2NhbGUpKTsgLy8gbm8gYWRkaXRpb25hbCByZXNpemVzIGFyZSBuZWNlc3NhcnksXG4gIC8vIHN0YWdlQ291bnQgY2FuIGJlIHplcm8gb3IgYmUgbmVnYXRpdmUgd2hlbiBlbmxhcmdpbmcgdGhlIGltYWdlXG5cbiAgaWYgKHN0YWdlQ291bnQgPD0gMSkgcmV0dXJuIFtbdG9XaWR0aCwgdG9IZWlnaHRdXTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhZ2VDb3VudDsgaSsrKSB7XG4gICAgdmFyIHdpZHRoID0gTWF0aC5yb3VuZChNYXRoLnBvdyhNYXRoLnBvdyhmcm9tV2lkdGgsIHN0YWdlQ291bnQgLSBpIC0gMSkgKiBNYXRoLnBvdyh0b1dpZHRoLCBpICsgMSksIDEgLyBzdGFnZUNvdW50KSk7XG4gICAgdmFyIGhlaWdodCA9IE1hdGgucm91bmQoTWF0aC5wb3coTWF0aC5wb3coZnJvbUhlaWdodCwgc3RhZ2VDb3VudCAtIGkgLSAxKSAqIE1hdGgucG93KHRvSGVpZ2h0LCBpICsgMSksIDEgLyBzdGFnZUNvdW50KSk7XG4gICAgcmVzdWx0LnB1c2goW3dpZHRoLCBoZWlnaHRdKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG59LHt9XSwxNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKlxuICogcGl4ZWxGbG9vciBhbmQgcGl4ZWxDZWlsIGFyZSBtb2RpZmllZCB2ZXJzaW9ucyBvZiBNYXRoLmZsb29yIGFuZCBNYXRoLmNlaWxcbiAqIGZ1bmN0aW9ucyB3aGljaCB0YWtlIGludG8gYWNjb3VudCBmbG9hdGluZyBwb2ludCBhcml0aG1ldGljIGVycm9ycy5cbiAqIFRob3NlIGVycm9ycyBjYW4gY2F1c2UgdW5kZXNpcmVkIGluY3JlbWVudHMvZGVjcmVtZW50cyBvZiBzaXplcyBhbmQgb2Zmc2V0czpcbiAqIE1hdGguY2VpbCgzNiAvICgzNiAvIDUwMCkpID0gNTAxXG4gKiBwaXhlbENlaWwoMzYgLyAoMzYgLyA1MDApKSA9IDUwMFxuICovXG5cbnZhciBQSVhFTF9FUFNJTE9OID0gMWUtNTtcblxuZnVuY3Rpb24gcGl4ZWxGbG9vcih4KSB7XG4gIHZhciBuZWFyZXN0ID0gTWF0aC5yb3VuZCh4KTtcblxuICBpZiAoTWF0aC5hYnMoeCAtIG5lYXJlc3QpIDwgUElYRUxfRVBTSUxPTikge1xuICAgIHJldHVybiBuZWFyZXN0O1xuICB9XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IoeCk7XG59XG5cbmZ1bmN0aW9uIHBpeGVsQ2VpbCh4KSB7XG4gIHZhciBuZWFyZXN0ID0gTWF0aC5yb3VuZCh4KTtcblxuICBpZiAoTWF0aC5hYnMoeCAtIG5lYXJlc3QpIDwgUElYRUxfRVBTSUxPTikge1xuICAgIHJldHVybiBuZWFyZXN0O1xuICB9XG5cbiAgcmV0dXJuIE1hdGguY2VpbCh4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVSZWdpb25zKG9wdGlvbnMpIHtcbiAgdmFyIHNjYWxlWCA9IG9wdGlvbnMudG9XaWR0aCAvIG9wdGlvbnMud2lkdGg7XG4gIHZhciBzY2FsZVkgPSBvcHRpb25zLnRvSGVpZ2h0IC8gb3B0aW9ucy5oZWlnaHQ7XG4gIHZhciBpbm5lclRpbGVXaWR0aCA9IHBpeGVsRmxvb3Iob3B0aW9ucy5zcmNUaWxlU2l6ZSAqIHNjYWxlWCkgLSAyICogb3B0aW9ucy5kZXN0VGlsZUJvcmRlcjtcbiAgdmFyIGlubmVyVGlsZUhlaWdodCA9IHBpeGVsRmxvb3Iob3B0aW9ucy5zcmNUaWxlU2l6ZSAqIHNjYWxlWSkgLSAyICogb3B0aW9ucy5kZXN0VGlsZUJvcmRlcjsgLy8gcHJldmVudCBpbmZpbml0ZSBsb29wLCB0aGlzIHNob3VsZCBuZXZlciBoYXBwZW5cblxuICBpZiAoaW5uZXJUaWxlV2lkdGggPCAxIHx8IGlubmVyVGlsZUhlaWdodCA8IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludGVybmFsIGVycm9yIGluIHBpY2E6IHRhcmdldCB0aWxlIHdpZHRoL2hlaWdodCBpcyB0b28gc21hbGwuJyk7XG4gIH1cblxuICB2YXIgeCwgeTtcbiAgdmFyIGlubmVyWCwgaW5uZXJZLCB0b1RpbGVXaWR0aCwgdG9UaWxlSGVpZ2h0O1xuICB2YXIgdGlsZXMgPSBbXTtcbiAgdmFyIHRpbGU7IC8vIHdlIGdvIHRvcC10by1kb3duIGluc3RlYWQgb2YgbGVmdC10by1yaWdodCB0byBtYWtlIGltYWdlIGRpc3BsYXllZCBmcm9tIHRvcCB0b1xuICAvLyBkb2VzbiBpbiB0aGUgYnJvd3NlclxuXG4gIGZvciAoaW5uZXJZID0gMDsgaW5uZXJZIDwgb3B0aW9ucy50b0hlaWdodDsgaW5uZXJZICs9IGlubmVyVGlsZUhlaWdodCkge1xuICAgIGZvciAoaW5uZXJYID0gMDsgaW5uZXJYIDwgb3B0aW9ucy50b1dpZHRoOyBpbm5lclggKz0gaW5uZXJUaWxlV2lkdGgpIHtcbiAgICAgIHggPSBpbm5lclggLSBvcHRpb25zLmRlc3RUaWxlQm9yZGVyO1xuXG4gICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgeCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHRvVGlsZVdpZHRoID0gaW5uZXJYICsgaW5uZXJUaWxlV2lkdGggKyBvcHRpb25zLmRlc3RUaWxlQm9yZGVyIC0geDtcblxuICAgICAgaWYgKHggKyB0b1RpbGVXaWR0aCA+PSBvcHRpb25zLnRvV2lkdGgpIHtcbiAgICAgICAgdG9UaWxlV2lkdGggPSBvcHRpb25zLnRvV2lkdGggLSB4O1xuICAgICAgfVxuXG4gICAgICB5ID0gaW5uZXJZIC0gb3B0aW9ucy5kZXN0VGlsZUJvcmRlcjtcblxuICAgICAgaWYgKHkgPCAwKSB7XG4gICAgICAgIHkgPSAwO1xuICAgICAgfVxuXG4gICAgICB0b1RpbGVIZWlnaHQgPSBpbm5lclkgKyBpbm5lclRpbGVIZWlnaHQgKyBvcHRpb25zLmRlc3RUaWxlQm9yZGVyIC0geTtcblxuICAgICAgaWYgKHkgKyB0b1RpbGVIZWlnaHQgPj0gb3B0aW9ucy50b0hlaWdodCkge1xuICAgICAgICB0b1RpbGVIZWlnaHQgPSBvcHRpb25zLnRvSGVpZ2h0IC0geTtcbiAgICAgIH1cblxuICAgICAgdGlsZSA9IHtcbiAgICAgICAgdG9YOiB4LFxuICAgICAgICB0b1k6IHksXG4gICAgICAgIHRvV2lkdGg6IHRvVGlsZVdpZHRoLFxuICAgICAgICB0b0hlaWdodDogdG9UaWxlSGVpZ2h0LFxuICAgICAgICB0b0lubmVyWDogaW5uZXJYLFxuICAgICAgICB0b0lubmVyWTogaW5uZXJZLFxuICAgICAgICB0b0lubmVyV2lkdGg6IGlubmVyVGlsZVdpZHRoLFxuICAgICAgICB0b0lubmVySGVpZ2h0OiBpbm5lclRpbGVIZWlnaHQsXG4gICAgICAgIG9mZnNldFg6IHggLyBzY2FsZVggLSBwaXhlbEZsb29yKHggLyBzY2FsZVgpLFxuICAgICAgICBvZmZzZXRZOiB5IC8gc2NhbGVZIC0gcGl4ZWxGbG9vcih5IC8gc2NhbGVZKSxcbiAgICAgICAgc2NhbGVYOiBzY2FsZVgsXG4gICAgICAgIHNjYWxlWTogc2NhbGVZLFxuICAgICAgICB4OiBwaXhlbEZsb29yKHggLyBzY2FsZVgpLFxuICAgICAgICB5OiBwaXhlbEZsb29yKHkgLyBzY2FsZVkpLFxuICAgICAgICB3aWR0aDogcGl4ZWxDZWlsKHRvVGlsZVdpZHRoIC8gc2NhbGVYKSxcbiAgICAgICAgaGVpZ2h0OiBwaXhlbENlaWwodG9UaWxlSGVpZ2h0IC8gc2NhbGVZKVxuICAgICAgfTtcbiAgICAgIHRpbGVzLnB1c2godGlsZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRpbGVzO1xufTtcblxufSx7fV0sMTY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXG5mdW5jdGlvbiBvYmpDbGFzcyhvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5pc0NhbnZhcyA9IGZ1bmN0aW9uIGlzQ2FudmFzKGVsZW1lbnQpIHtcbiAgdmFyIGNuYW1lID0gb2JqQ2xhc3MoZWxlbWVudCk7XG4gIHJldHVybiBjbmFtZSA9PT0gJ1tvYmplY3QgSFRNTENhbnZhc0VsZW1lbnRdJ1xuICAvKiBicm93c2VyICovXG4gIHx8IGNuYW1lID09PSAnW29iamVjdCBPZmZzY3JlZW5DYW52YXNdJyB8fCBjbmFtZSA9PT0gJ1tvYmplY3QgQ2FudmFzXSdcbiAgLyogbm9kZS1jYW52YXMgKi9cbiAgO1xufTtcblxubW9kdWxlLmV4cG9ydHMuaXNJbWFnZSA9IGZ1bmN0aW9uIGlzSW1hZ2UoZWxlbWVudCkge1xuICByZXR1cm4gb2JqQ2xhc3MoZWxlbWVudCkgPT09ICdbb2JqZWN0IEhUTUxJbWFnZUVsZW1lbnRdJztcbn07XG5cbm1vZHVsZS5leHBvcnRzLmlzSW1hZ2VCaXRtYXAgPSBmdW5jdGlvbiBpc0ltYWdlQml0bWFwKGVsZW1lbnQpIHtcbiAgcmV0dXJuIG9iakNsYXNzKGVsZW1lbnQpID09PSAnW29iamVjdCBJbWFnZUJpdG1hcF0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMubGltaXRlciA9IGZ1bmN0aW9uIGxpbWl0ZXIoY29uY3VycmVuY3kpIHtcbiAgdmFyIGFjdGl2ZSA9IDAsXG4gICAgICBxdWV1ZSA9IFtdO1xuXG4gIGZ1bmN0aW9uIHJvbGwoKSB7XG4gICAgaWYgKGFjdGl2ZSA8IGNvbmN1cnJlbmN5ICYmIHF1ZXVlLmxlbmd0aCkge1xuICAgICAgYWN0aXZlKys7XG4gICAgICBxdWV1ZS5zaGlmdCgpKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGxpbWl0KGZuKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHF1ZXVlLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICBmbigpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICBhY3RpdmUtLTtcbiAgICAgICAgICByb2xsKCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICBhY3RpdmUtLTtcbiAgICAgICAgICByb2xsKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByb2xsKCk7XG4gICAgfSk7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5jaWJfcXVhbGl0eV9uYW1lID0gZnVuY3Rpb24gY2liX3F1YWxpdHlfbmFtZShudW0pIHtcbiAgc3dpdGNoIChudW0pIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gJ3BpeGVsYXRlZCc7XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gJ2xvdyc7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gJ21lZGl1bSc7XG4gIH1cblxuICByZXR1cm4gJ2hpZ2gnO1xufTtcblxubW9kdWxlLmV4cG9ydHMuY2liX3N1cHBvcnQgPSBmdW5jdGlvbiBjaWJfc3VwcG9ydChjcmVhdGVDYW52YXMpIHtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgY3JlYXRlSW1hZ2VCaXRtYXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGMgPSBjcmVhdGVDYW52YXMoMTAwLCAxMDApO1xuICAgIHJldHVybiBjcmVhdGVJbWFnZUJpdG1hcChjLCAwLCAwLCAxMDAsIDEwMCwge1xuICAgICAgcmVzaXplV2lkdGg6IDEwLFxuICAgICAgcmVzaXplSGVpZ2h0OiAxMCxcbiAgICAgIHJlc2l6ZVF1YWxpdHk6ICdoaWdoJ1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGJpdG1hcCkge1xuICAgICAgdmFyIHN0YXR1cyA9IGJpdG1hcC53aWR0aCA9PT0gMTA7IC8vIEJyYW5jaCBiZWxvdyBpcyBmaWx0ZXJlZCBvbiB1cHBlciBsZXZlbC4gV2UgZG8gbm90IGNhbGwgcmVzaXplXG4gICAgICAvLyBkZXRlY3Rpb24gZm9yIGJhc2ljIEltYWdlQml0bWFwLlxuICAgICAgLy9cbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9JbWFnZUJpdG1hcFxuICAgICAgLy8gb2xkIENyb21lIDUxIGhhcyBJbWFnZUJpdG1hcCB3aXRob3V0IC5jbG9zZSgpLiBUaGVuIHRoaXMgY29kZVxuICAgICAgLy8gd2lsbCB0aHJvdyBhbmQgcmV0dXJuICdmYWxzZScgYXMgZXhwZWN0ZWQuXG4gICAgICAvL1xuXG4gICAgICBiaXRtYXAuY2xvc2UoKTtcbiAgICAgIGMgPSBudWxsO1xuICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICB9KTtcbiAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzLndvcmtlcl9vZmZzY3JlZW5fY2FudmFzX3N1cHBvcnQgPSBmdW5jdGlvbiB3b3JrZXJfb2Zmc2NyZWVuX2NhbnZhc19zdXBwb3J0KCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICh0eXBlb2YgT2Zmc2NyZWVuQ2FudmFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gaWYgT2Zmc2NyZWVuQ2FudmFzIGlzIHByZXNlbnQsIHdlIGFzc3VtZSBicm93c2VyIHN1cHBvcnRzIFdvcmtlciBhbmQgYnVpbHQtaW4gUHJvbWlzZSBhcyB3ZWxsXG4gICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3b3JrZXJQYXlsb2FkKHNlbGYpIHtcbiAgICAgIGlmICh0eXBlb2YgY3JlYXRlSW1hZ2VCaXRtYXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2UoZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2FudmFzID0gbmV3IE9mZnNjcmVlbkNhbnZhcygxMCwgMTApOyAvLyB0ZXN0IHRoYXQgMmQgY29udGV4dCBjYW4gYmUgdXNlZCBpbiB3b3JrZXJcblxuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGN0eC5yZWN0KDAsIDAsIDEsIDEpOyAvLyB0ZXN0IHRoYXQgY2liIGNhbiBiZSB1c2VkIHRvIHJldHVybiBpbWFnZSBiaXRtYXAgZnJvbSB3b3JrZXJcblxuICAgICAgICByZXR1cm4gY3JlYXRlSW1hZ2VCaXRtYXAoY2FudmFzLCAwLCAwLCAxLCAxKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2VsZi5wb3N0TWVzc2FnZSh0cnVlKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYucG9zdE1lc3NhZ2UoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGNvZGUgPSBidG9hKFwiKFwiLmNvbmNhdCh3b3JrZXJQYXlsb2FkLnRvU3RyaW5nKCksIFwiKShzZWxmKTtcIikpO1xuICAgIHZhciB3ID0gbmV3IFdvcmtlcihcImRhdGE6dGV4dC9qYXZhc2NyaXB0O2Jhc2U2NCxcIi5jb25jYXQoY29kZSkpO1xuXG4gICAgdy5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgIHJldHVybiByZXNvbHZlKGV2LmRhdGEpO1xuICAgIH07XG5cbiAgICB3Lm9uZXJyb3IgPSByZWplY3Q7XG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufTsgLy8gQ2hlY2sgaWYgY2FudmFzLmdldENvbnRleHQoJzJkJykuZ2V0SW1hZ2VEYXRhIGNhbiBiZSB1c2VkLFxuLy8gRmlyZUZveCByYW5kb21pemVzIHRoZSBvdXRwdXQgb2YgdGhhdCBmdW5jdGlvbiBpbiBgcHJpdmFjeS5yZXNpc3RGaW5nZXJwcmludGluZ2AgbW9kZVxuXG5cbm1vZHVsZS5leHBvcnRzLmNhbl91c2VfY2FudmFzID0gZnVuY3Rpb24gY2FuX3VzZV9jYW52YXMoY3JlYXRlQ2FudmFzKSB7XG4gIHZhciB1c2FibGUgPSBmYWxzZTtcblxuICB0cnkge1xuICAgIHZhciBjYW52YXMgPSBjcmVhdGVDYW52YXMoMiwgMSk7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHZhciBkID0gY3R4LmNyZWF0ZUltYWdlRGF0YSgyLCAxKTtcbiAgICBkLmRhdGFbMF0gPSAxMjtcbiAgICBkLmRhdGFbMV0gPSAyMztcbiAgICBkLmRhdGFbMl0gPSAzNDtcbiAgICBkLmRhdGFbM10gPSAyNTU7XG4gICAgZC5kYXRhWzRdID0gNDU7XG4gICAgZC5kYXRhWzVdID0gNTY7XG4gICAgZC5kYXRhWzZdID0gNjc7XG4gICAgZC5kYXRhWzddID0gMjU1O1xuICAgIGN0eC5wdXRJbWFnZURhdGEoZCwgMCwgMCk7XG4gICAgZCA9IG51bGw7XG4gICAgZCA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgMiwgMSk7XG5cbiAgICBpZiAoZC5kYXRhWzBdID09PSAxMiAmJiBkLmRhdGFbMV0gPT09IDIzICYmIGQuZGF0YVsyXSA9PT0gMzQgJiYgZC5kYXRhWzNdID09PSAyNTUgJiYgZC5kYXRhWzRdID09PSA0NSAmJiBkLmRhdGFbNV0gPT09IDU2ICYmIGQuZGF0YVs2XSA9PT0gNjcgJiYgZC5kYXRhWzddID09PSAyNTUpIHtcbiAgICAgIHVzYWJsZSA9IHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgcmV0dXJuIHVzYWJsZTtcbn07IC8vIENoZWNrIGlmIGNyZWF0ZUltYWdlQml0bWFwKGltZywgc3gsIHN5LCBzdywgc2gpIHNpZ25hdHVyZSB3b3JrcyBjb3JyZWN0bHlcbi8vIHdpdGggSlBFRyBpbWFnZXMgb3JpZW50ZWQgd2l0aCBFeGlmO1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTIyMDY3MVxuLy8gVE9ETzogcmVtb3ZlIGFmdGVyIGl0J3MgZml4ZWQgaW4gY2hyb21lIGZvciBhdCBsZWFzdCAyIHJlbGVhc2VzXG5cblxubW9kdWxlLmV4cG9ydHMuY2liX2Nhbl91c2VfcmVnaW9uID0gZnVuY3Rpb24gY2liX2Nhbl91c2VfcmVnaW9uKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBpZiAodHlwZW9mIGNyZWF0ZUltYWdlQml0bWFwID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsJyArICcvOWovNFFCaVJYaHBaZ0FBVFUwQUtnQUFBQWdBQlFFU0FBTUFBQUFCQUFZQUFBRWFBQVVBQUFBQkFBQUFTZ0ViQUFVQUEnICsgJ0FBQkFBQUFVZ0VvQUFNQUFBQUJBQUlBQUFJVEFBTUFBQUFCQUFFQUFBQUFBQUFBQUFCSUFBQUFBUUFBQUVnQUFBQUIvOScgKyAnc0FRd0FFQXdNRUF3TUVCQU1FQlFRRUJRWUtCd1lHQmdZTkNRb0lDZzhORUJBUERROE9FUk1ZRkJFU0Z4SU9EeFVjRlJjJyArICdaR1JzYkd4QVVIUjhkR2g4WUdoc2EvOXNBUXdFRUJRVUdCUVlNQndjTUdoRVBFUm9hR2hvYUdob2FHaG9hR2hvYUdob2EnICsgJ0dob2FHaG9hR2hvYUdob2FHaG9hR2hvYUdob2FHaG9hR2hvYUdob2FHaG9hLzhJQUVRZ0FBUUFDQXdFUkFBSVJBUU1SQScgKyAnZi9FQUJRQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFmL3hBQVVBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOW9BREFNQkFBJyArICdJUUF4QUFBQUYvUC8vRUFCUVFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBRC8yZ0FJQVFFQUFRVUNmLy9FQUJRUkFRQUFBQUEnICsgJ0FBQUFBQUFBQUFBQUFBQUQvMmdBSUFRTUJBVDhCZi8vRUFCUVJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBRC8yZ0FJQVFJQicgKyAnQVQ4QmYvL0VBQlFRQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUQvMmdBSUFRRUFCajhDZi8vRUFCUVFBUUFBQUFBQUFBQUFBJyArICdBQUFBQUFBQUFELzJnQUlBUUVBQVQ4aGYvL2FBQXdEQVFBQ0FBTUFBQUFRSC8vRUFCUVJBUUFBQUFBQUFBQUFBQUFBQUEnICsgJ0FBQUFELzJnQUlBUU1CQVQ4UWYvL0VBQlFSQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUQvMmdBSUFRSUJBVDhRZi8vRUFCUScgKyAnUUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFELzJnQUlBUUVBQVQ4UWYvL1onO1xuXG4gICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgY3JlYXRlSW1hZ2VCaXRtYXAoaW1hZ2UsIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpLnRoZW4oZnVuY3Rpb24gKGJpdG1hcCkge1xuICAgICAgICBpZiAoYml0bWFwLndpZHRoID09PSBpbWFnZS53aWR0aCAmJiBiaXRtYXAuaGVpZ2h0ID09PSBpbWFnZS5oZWlnaHQpIHtcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgIH07XG4gIH0pO1xufTtcblxufSx7fV0sMTc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIE1hdGhMaWIgPSBfZGVyZXFfKCcuL21hdGhsaWInKTtcblxuICB2YXIgbWF0aExpYjtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cblxuICBvbm1lc3NhZ2UgPSBmdW5jdGlvbiBvbm1lc3NhZ2UoZXYpIHtcbiAgICB2YXIgdGlsZU9wdHMgPSBldi5kYXRhLm9wdHM7XG4gICAgdmFyIHJldHVybkJpdG1hcCA9IGZhbHNlO1xuXG4gICAgaWYgKCF0aWxlT3B0cy5zcmMgJiYgdGlsZU9wdHMuc3JjQml0bWFwKSB7XG4gICAgICB2YXIgY2FudmFzID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh0aWxlT3B0cy53aWR0aCwgdGlsZU9wdHMuaGVpZ2h0KTtcbiAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgICAgIGFscGhhOiBCb29sZWFuKHRpbGVPcHRzLmFscGhhKVxuICAgICAgfSk7XG4gICAgICBjdHguZHJhd0ltYWdlKHRpbGVPcHRzLnNyY0JpdG1hcCwgMCwgMCk7XG4gICAgICB0aWxlT3B0cy5zcmMgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHRpbGVPcHRzLndpZHRoLCB0aWxlT3B0cy5oZWlnaHQpLmRhdGE7XG4gICAgICBjYW52YXMud2lkdGggPSBjYW52YXMuaGVpZ2h0ID0gMDtcbiAgICAgIGNhbnZhcyA9IG51bGw7XG4gICAgICB0aWxlT3B0cy5zcmNCaXRtYXAuY2xvc2UoKTtcbiAgICAgIHRpbGVPcHRzLnNyY0JpdG1hcCA9IG51bGw7XG4gICAgICByZXR1cm5CaXRtYXAgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghbWF0aExpYikgbWF0aExpYiA9IG5ldyBNYXRoTGliKGV2LmRhdGEuZmVhdHVyZXMpOyAvLyBVc2UgbXVsdGltYXRoJ3Mgc3luYyBhdXRvLWluaXQuIEF2b2lkIFByb21pc2UgdXNlIGluIG9sZCBicm93c2VycyxcbiAgICAvLyBiZWNhdXNlIHBvbHlmaWxscyBhcmUgbm90IHByb3BhZ2F0ZWQgdG8gd2Vid29ya2VyLlxuXG4gICAgdmFyIGRhdGEgPSBtYXRoTGliLnJlc2l6ZUFuZFVuc2hhcnAodGlsZU9wdHMpO1xuXG4gICAgaWYgKHJldHVybkJpdG1hcCkge1xuICAgICAgdmFyIHRvSW1hZ2VEYXRhID0gbmV3IEltYWdlRGF0YShuZXcgVWludDhDbGFtcGVkQXJyYXkoZGF0YSksIHRpbGVPcHRzLnRvV2lkdGgsIHRpbGVPcHRzLnRvSGVpZ2h0KTtcblxuICAgICAgdmFyIF9jYW52YXMgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHRpbGVPcHRzLnRvV2lkdGgsIHRpbGVPcHRzLnRvSGVpZ2h0KTtcblxuICAgICAgdmFyIF9jdHggPSBfY2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgICAgICBhbHBoYTogQm9vbGVhbih0aWxlT3B0cy5hbHBoYSlcbiAgICAgIH0pO1xuXG4gICAgICBfY3R4LnB1dEltYWdlRGF0YSh0b0ltYWdlRGF0YSwgMCwgMCk7XG5cbiAgICAgIGNyZWF0ZUltYWdlQml0bWFwKF9jYW52YXMpLnRoZW4oZnVuY3Rpb24gKGJpdG1hcCkge1xuICAgICAgICBwb3N0TWVzc2FnZSh7XG4gICAgICAgICAgYml0bWFwOiBiaXRtYXBcbiAgICAgICAgfSwgW2JpdG1hcF0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvc3RNZXNzYWdlKHtcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSwgW2RhdGEuYnVmZmVyXSk7XG4gICAgfVxuICB9O1xufTtcblxufSx7XCIuL21hdGhsaWJcIjoxfV0sMTg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gQ2FsY3VsYXRlIEdhdXNzaWFuIGJsdXIgb2YgYW4gaW1hZ2UgdXNpbmcgSUlSIGZpbHRlclxuLy8gVGhlIG1ldGhvZCBpcyB0YWtlbiBmcm9tIEludGVsJ3Mgd2hpdGUgcGFwZXIgYW5kIGNvZGUgZXhhbXBsZSBhdHRhY2hlZCB0byBpdDpcbi8vIGh0dHBzOi8vc29mdHdhcmUuaW50ZWwuY29tL2VuLXVzL2FydGljbGVzL2lpci1nYXVzc2lhbi1ibHVyLWZpbHRlclxuLy8gLWltcGxlbWVudGF0aW9uLXVzaW5nLWludGVsLWFkdmFuY2VkLXZlY3Rvci1leHRlbnNpb25zXG5cbnZhciBhMCwgYTEsIGEyLCBhMywgYjEsIGIyLCBsZWZ0X2Nvcm5lciwgcmlnaHRfY29ybmVyO1xuXG5mdW5jdGlvbiBnYXVzc0NvZWYoc2lnbWEpIHtcbiAgaWYgKHNpZ21hIDwgMC41KSB7XG4gICAgc2lnbWEgPSAwLjU7XG4gIH1cblxuICB2YXIgYSA9IE1hdGguZXhwKDAuNzI2ICogMC43MjYpIC8gc2lnbWEsXG4gICAgICBnMSA9IE1hdGguZXhwKC1hKSxcbiAgICAgIGcyID0gTWF0aC5leHAoLTIgKiBhKSxcbiAgICAgIGsgPSAoMSAtIGcxKSAqICgxIC0gZzEpIC8gKDEgKyAyICogYSAqIGcxIC0gZzIpO1xuXG4gIGEwID0gaztcbiAgYTEgPSBrICogKGEgLSAxKSAqIGcxO1xuICBhMiA9IGsgKiAoYSArIDEpICogZzE7XG4gIGEzID0gLWsgKiBnMjtcbiAgYjEgPSAyICogZzE7XG4gIGIyID0gLWcyO1xuICBsZWZ0X2Nvcm5lciA9IChhMCArIGExKSAvICgxIC0gYjEgLSBiMik7XG4gIHJpZ2h0X2Nvcm5lciA9IChhMiArIGEzKSAvICgxIC0gYjEgLSBiMik7XG5cbiAgLy8gQXR0ZW1wdCB0byBmb3JjZSB0eXBlIHRvIEZQMzIuXG4gIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFsgYTAsIGExLCBhMiwgYTMsIGIxLCBiMiwgbGVmdF9jb3JuZXIsIHJpZ2h0X2Nvcm5lciBdKTtcbn1cblxuZnVuY3Rpb24gY29udm9sdmVNb25vMTYoc3JjLCBvdXQsIGxpbmUsIGNvZWZmLCB3aWR0aCwgaGVpZ2h0KSB7XG4gIC8vIHRha2VzIHNyYyBpbWFnZSBhbmQgd3JpdGVzIHRoZSBibHVycmVkIGFuZCB0cmFuc3Bvc2VkIHJlc3VsdCBpbnRvIG91dFxuXG4gIHZhciBwcmV2X3NyYywgY3Vycl9zcmMsIGN1cnJfb3V0LCBwcmV2X291dCwgcHJldl9wcmV2X291dDtcbiAgdmFyIHNyY19pbmRleCwgb3V0X2luZGV4LCBsaW5lX2luZGV4O1xuICB2YXIgaSwgajtcbiAgdmFyIGNvZWZmX2EwLCBjb2VmZl9hMSwgY29lZmZfYjEsIGNvZWZmX2IyO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgIHNyY19pbmRleCA9IGkgKiB3aWR0aDtcbiAgICBvdXRfaW5kZXggPSBpO1xuICAgIGxpbmVfaW5kZXggPSAwO1xuXG4gICAgLy8gbGVmdCB0byByaWdodFxuICAgIHByZXZfc3JjID0gc3JjW3NyY19pbmRleF07XG4gICAgcHJldl9wcmV2X291dCA9IHByZXZfc3JjICogY29lZmZbNl07XG4gICAgcHJldl9vdXQgPSBwcmV2X3ByZXZfb3V0O1xuXG4gICAgY29lZmZfYTAgPSBjb2VmZlswXTtcbiAgICBjb2VmZl9hMSA9IGNvZWZmWzFdO1xuICAgIGNvZWZmX2IxID0gY29lZmZbNF07XG4gICAgY29lZmZfYjIgPSBjb2VmZls1XTtcblxuICAgIGZvciAoaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICBjdXJyX3NyYyA9IHNyY1tzcmNfaW5kZXhdO1xuXG4gICAgICBjdXJyX291dCA9IGN1cnJfc3JjICogY29lZmZfYTAgK1xuICAgICAgICAgICAgICAgICBwcmV2X3NyYyAqIGNvZWZmX2ExICtcbiAgICAgICAgICAgICAgICAgcHJldl9vdXQgKiBjb2VmZl9iMSArXG4gICAgICAgICAgICAgICAgIHByZXZfcHJldl9vdXQgKiBjb2VmZl9iMjtcblxuICAgICAgcHJldl9wcmV2X291dCA9IHByZXZfb3V0O1xuICAgICAgcHJldl9vdXQgPSBjdXJyX291dDtcbiAgICAgIHByZXZfc3JjID0gY3Vycl9zcmM7XG5cbiAgICAgIGxpbmVbbGluZV9pbmRleF0gPSBwcmV2X291dDtcbiAgICAgIGxpbmVfaW5kZXgrKztcbiAgICAgIHNyY19pbmRleCsrO1xuICAgIH1cblxuICAgIHNyY19pbmRleC0tO1xuICAgIGxpbmVfaW5kZXgtLTtcbiAgICBvdXRfaW5kZXggKz0gaGVpZ2h0ICogKHdpZHRoIC0gMSk7XG5cbiAgICAvLyByaWdodCB0byBsZWZ0XG4gICAgcHJldl9zcmMgPSBzcmNbc3JjX2luZGV4XTtcbiAgICBwcmV2X3ByZXZfb3V0ID0gcHJldl9zcmMgKiBjb2VmZls3XTtcbiAgICBwcmV2X291dCA9IHByZXZfcHJldl9vdXQ7XG4gICAgY3Vycl9zcmMgPSBwcmV2X3NyYztcblxuICAgIGNvZWZmX2EwID0gY29lZmZbMl07XG4gICAgY29lZmZfYTEgPSBjb2VmZlszXTtcblxuICAgIGZvciAoaiA9IHdpZHRoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgIGN1cnJfb3V0ID0gY3Vycl9zcmMgKiBjb2VmZl9hMCArXG4gICAgICAgICAgICAgICAgIHByZXZfc3JjICogY29lZmZfYTEgK1xuICAgICAgICAgICAgICAgICBwcmV2X291dCAqIGNvZWZmX2IxICtcbiAgICAgICAgICAgICAgICAgcHJldl9wcmV2X291dCAqIGNvZWZmX2IyO1xuXG4gICAgICBwcmV2X3ByZXZfb3V0ID0gcHJldl9vdXQ7XG4gICAgICBwcmV2X291dCA9IGN1cnJfb3V0O1xuXG4gICAgICBwcmV2X3NyYyA9IGN1cnJfc3JjO1xuICAgICAgY3Vycl9zcmMgPSBzcmNbc3JjX2luZGV4XTtcblxuICAgICAgb3V0W291dF9pbmRleF0gPSBsaW5lW2xpbmVfaW5kZXhdICsgcHJldl9vdXQ7XG5cbiAgICAgIHNyY19pbmRleC0tO1xuICAgICAgbGluZV9pbmRleC0tO1xuICAgICAgb3V0X2luZGV4IC09IGhlaWdodDtcbiAgICB9XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBibHVyTW9ubzE2KHNyYywgd2lkdGgsIGhlaWdodCwgcmFkaXVzKSB7XG4gIC8vIFF1aWNrIGV4aXQgb24gemVybyByYWRpdXNcbiAgaWYgKCFyYWRpdXMpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIG91dCAgICAgID0gbmV3IFVpbnQxNkFycmF5KHNyYy5sZW5ndGgpLFxuICAgICAgdG1wX2xpbmUgPSBuZXcgRmxvYXQzMkFycmF5KE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpKTtcblxuICB2YXIgY29lZmYgPSBnYXVzc0NvZWYocmFkaXVzKTtcblxuICBjb252b2x2ZU1vbm8xNihzcmMsIG91dCwgdG1wX2xpbmUsIGNvZWZmLCB3aWR0aCwgaGVpZ2h0KTtcbiAgY29udm9sdmVNb25vMTYob3V0LCBzcmMsIHRtcF9saW5lLCBjb2VmZiwgaGVpZ2h0LCB3aWR0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmx1ck1vbm8xNjtcblxufSx7fV0sMTk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgaWYgKHN1cGVyQ3Rvcikge1xuICAgICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3I7XG4gICAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGlmIChzdXBlckN0b3IpIHtcbiAgICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yO1xuICAgICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge307XG4gICAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlO1xuICAgICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKTtcbiAgICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvcjtcbiAgICB9XG4gIH07XG59XG5cbn0se31dLDIwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblxuXG52YXIgYXNzaWduICAgICAgICAgPSBfZGVyZXFfKCdvYmplY3QtYXNzaWduJyk7XG52YXIgYmFzZTY0ZGVjb2RlICAgPSBfZGVyZXFfKCcuL2xpYi9iYXNlNjRkZWNvZGUnKTtcbnZhciBoYXNXZWJBc3NlbWJseSA9IF9kZXJlcV8oJy4vbGliL3dhX2RldGVjdCcpO1xuXG5cbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIGpzOiB0cnVlLFxuICB3YXNtOiB0cnVlXG59O1xuXG5cbmZ1bmN0aW9uIE11bHRpTWF0aChvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNdWx0aU1hdGgpKSByZXR1cm4gbmV3IE11bHRpTWF0aChvcHRpb25zKTtcblxuICB2YXIgb3B0cyA9IGFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRpb25zIHx8IHt9KTtcblxuICB0aGlzLm9wdGlvbnMgICAgICAgICA9IG9wdHM7XG5cbiAgdGhpcy5fX2NhY2hlICAgICAgICAgPSB7fTtcblxuICB0aGlzLl9faW5pdF9wcm9taXNlICA9IG51bGw7XG4gIHRoaXMuX19tb2R1bGVzICAgICAgID0gb3B0cy5tb2R1bGVzIHx8IHt9O1xuICB0aGlzLl9fbWVtb3J5ICAgICAgICA9IG51bGw7XG4gIHRoaXMuX193YXNtICAgICAgICAgID0ge307XG5cbiAgdGhpcy5fX2lzTEUgPSAoKG5ldyBVaW50MzJBcnJheSgobmV3IFVpbnQ4QXJyYXkoWyAxLCAwLCAwLCAwIF0pKS5idWZmZXIpKVswXSA9PT0gMSk7XG5cbiAgaWYgKCF0aGlzLm9wdGlvbnMuanMgJiYgIXRoaXMub3B0aW9ucy53YXNtKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtYXRobGliOiBhdCBsZWFzdCBcImpzXCIgb3IgXCJ3YXNtXCIgc2hvdWxkIGJlIGVuYWJsZWQnKTtcbiAgfVxufVxuXG5cbk11bHRpTWF0aC5wcm90b3R5cGUuaGFzX3dhc20gPSBoYXNXZWJBc3NlbWJseTtcblxuXG5NdWx0aU1hdGgucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgdGhpcy5fX21vZHVsZXNbbW9kdWxlLm5hbWVdID0gbW9kdWxlO1xuXG4gIC8vIFBpbiB0aGUgYmVzdCBwb3NzaWJsZSBpbXBsZW1lbnRhdGlvblxuICBpZiAodGhpcy5vcHRpb25zLndhc20gJiYgdGhpcy5oYXNfd2FzbSgpICYmIG1vZHVsZS53YXNtX2ZuKSB7XG4gICAgdGhpc1ttb2R1bGUubmFtZV0gPSBtb2R1bGUud2FzbV9mbjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzW21vZHVsZS5uYW1lXSA9IG1vZHVsZS5mbjtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuXG5NdWx0aU1hdGgucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLl9faW5pdF9wcm9taXNlKSByZXR1cm4gdGhpcy5fX2luaXRfcHJvbWlzZTtcblxuICBpZiAoIXRoaXMub3B0aW9ucy5qcyAmJiB0aGlzLm9wdGlvbnMud2FzbSAmJiAhdGhpcy5oYXNfd2FzbSgpKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignbWF0aGxpYjogb25seSBcIndhc21cIiB3YXMgZW5hYmxlZCwgYnV0IGl0XFwncyBub3Qgc3VwcG9ydGVkJykpO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHRoaXMuX19pbml0X3Byb21pc2UgPSBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhzZWxmLl9fbW9kdWxlcykubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIG1vZHVsZSA9IHNlbGYuX19tb2R1bGVzW25hbWVdO1xuXG4gICAgaWYgKCFzZWxmLm9wdGlvbnMud2FzbSB8fCAhc2VsZi5oYXNfd2FzbSgpIHx8ICFtb2R1bGUud2FzbV9mbikgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBJZiBhbHJlYWR5IGNvbXBpbGVkIC0gZXhpdFxuICAgIGlmIChzZWxmLl9fd2FzbVtuYW1lXSkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBDb21waWxlIHdhc20gc291cmNlXG4gICAgcmV0dXJuIFdlYkFzc2VtYmx5LmNvbXBpbGUoc2VsZi5fX2Jhc2U2NGRlY29kZShtb2R1bGUud2FzbV9zcmMpKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKG0pIHsgc2VsZi5fX3dhc21bbmFtZV0gPSBtOyB9KTtcbiAgfSkpXG4gICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZjsgfSk7XG5cbiAgcmV0dXJuIHRoaXMuX19pbml0X3Byb21pc2U7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBNZXRob2RzIGJlbG93IGFyZSBmb3IgaW50ZXJuYWwgdXNlIGZyb20gcGx1Z2luc1xuXG5cbi8vIFNpbXBsZSBkZWNvZGUgYmFzZTY0IHRvIHR5cGVkIGFycmF5LiBVc2VmdWwgdG8gbG9hZCBlbWJlZGRlZCB3ZWJhc3NlbWJseVxuLy8gY29kZS4gWW91IHByb2JhYmx5IGRvbid0IG5lZWQgdG8gY2FsbCB0aGlzIG1ldGhvZCBkaXJlY3RseS5cbi8vXG5NdWx0aU1hdGgucHJvdG90eXBlLl9fYmFzZTY0ZGVjb2RlID0gYmFzZTY0ZGVjb2RlO1xuXG5cbi8vIEluY3JlYXNlIGN1cnJlbnQgbWVtb3J5IHRvIGluY2x1ZGUgc3BlY2lmaWVkIG51bWJlciBvZiBieXRlcy4gRG8gbm90aGluZyBpZlxuLy8gc2l6ZSBpcyBhbHJlYWR5IG9rLiBZb3UgcHJvYmFibHkgZG9uJ3QgbmVlZCB0byBjYWxsIHRoaXMgbWV0aG9kIGRpcmVjdGx5LFxuLy8gYmVjYXVzZSBpdCB3aWxsIGJlIGludm9rZWQgZnJvbSBgLl9faW5zdGFuY2UoKWAuXG4vL1xuTXVsdGlNYXRoLnByb3RvdHlwZS5fX3JlYWxsb2NhdGUgPSBmdW5jdGlvbiBtZW1fZ3Jvd190byhieXRlcykge1xuICBpZiAoIXRoaXMuX19tZW1vcnkpIHtcbiAgICB0aGlzLl9fbWVtb3J5ID0gbmV3IFdlYkFzc2VtYmx5Lk1lbW9yeSh7XG4gICAgICBpbml0aWFsOiBNYXRoLmNlaWwoYnl0ZXMgLyAoNjQgKiAxMDI0KSlcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fX21lbW9yeTtcbiAgfVxuXG4gIHZhciBtZW1fc2l6ZSA9IHRoaXMuX19tZW1vcnkuYnVmZmVyLmJ5dGVMZW5ndGg7XG5cbiAgaWYgKG1lbV9zaXplIDwgYnl0ZXMpIHtcbiAgICB0aGlzLl9fbWVtb3J5Lmdyb3coTWF0aC5jZWlsKChieXRlcyAtIG1lbV9zaXplKSAvICg2NCAqIDEwMjQpKSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fX21lbW9yeTtcbn07XG5cblxuLy8gUmV0dXJucyBpbnN0YW50aW5hdGVkIHdlYmFzc2VtYmx5IGl0ZW0gYnkgbmFtZSwgd2l0aCBzcGVjaWZpZWQgbWVtb3J5IHNpemVcbi8vIGFuZCBlbnZpcm9ubWVudC5cbi8vIC0gdXNlIGNhY2hlIGlmIGF2YWlsYWJsZVxuLy8gLSBkbyBzeW5jIG1vZHVsZSBpbml0LCBpZiBhc3luYyBpbml0IHdhcyBub3QgY2FsbGVkIGVhcmxpZXJcbi8vIC0gYWxsb2NhdGUgbWVtb3J5IGlmIG5vdCBlbm91Z3RoXG4vLyAtIGNhbiBleHBvcnQgZnVuY3Rpb25zIHRvIHdlYmFzc2VtYmx5IHZpYSBcImVudl9leHRyYVwiLFxuLy8gICBmb3IgZXhhbXBsZSwgeyBleHA6IE1hdGguZXhwIH1cbi8vXG5NdWx0aU1hdGgucHJvdG90eXBlLl9faW5zdGFuY2UgPSBmdW5jdGlvbiBpbnN0YW5jZShuYW1lLCBtZW1zaXplLCBlbnZfZXh0cmEpIHtcbiAgaWYgKG1lbXNpemUpIHRoaXMuX19yZWFsbG9jYXRlKG1lbXNpemUpO1xuXG4gIC8vIElmIC5pbml0KCkgd2FzIG5vdCBjYWxsZWQsIGRvIHN5bmMgY29tcGlsZVxuICBpZiAoIXRoaXMuX193YXNtW25hbWVdKSB7XG4gICAgdmFyIG1vZHVsZSA9IHRoaXMuX19tb2R1bGVzW25hbWVdO1xuICAgIHRoaXMuX193YXNtW25hbWVdID0gbmV3IFdlYkFzc2VtYmx5Lk1vZHVsZSh0aGlzLl9fYmFzZTY0ZGVjb2RlKG1vZHVsZS53YXNtX3NyYykpO1xuICB9XG5cbiAgaWYgKCF0aGlzLl9fY2FjaGVbbmFtZV0pIHtcbiAgICB2YXIgZW52X2Jhc2UgPSB7XG4gICAgICBtZW1vcnlCYXNlOiAwLFxuICAgICAgbWVtb3J5OiB0aGlzLl9fbWVtb3J5LFxuICAgICAgdGFibGVCYXNlOiAwLFxuICAgICAgdGFibGU6IG5ldyBXZWJBc3NlbWJseS5UYWJsZSh7IGluaXRpYWw6IDAsIGVsZW1lbnQ6ICdhbnlmdW5jJyB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9fY2FjaGVbbmFtZV0gPSBuZXcgV2ViQXNzZW1ibHkuSW5zdGFuY2UodGhpcy5fX3dhc21bbmFtZV0sIHtcbiAgICAgIGVudjogYXNzaWduKGVudl9iYXNlLCBlbnZfZXh0cmEgfHwge30pXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fX2NhY2hlW25hbWVdO1xufTtcblxuXG4vLyBIZWxwZXIgdG8gY2FsY3VsYXRlIG1lbW9yeSBhbGlnaCBmb3IgcG9pbnRlcnMuIFdlYmFzc2VtYmx5IGRvZXMgbm90IHJlcXVpcmVcbi8vIHRoaXMsIGJ1dCB5b3UgbWF5IHdpc2ggdG8gZXhwZXJpbWVudC4gRGVmYXVsdCBiYXNlID0gODtcbi8vXG5NdWx0aU1hdGgucHJvdG90eXBlLl9fYWxpZ24gPSBmdW5jdGlvbiBhbGlnbihudW1iZXIsIGJhc2UpIHtcbiAgYmFzZSA9IGJhc2UgfHwgODtcbiAgdmFyIHJlbWluZGVyID0gbnVtYmVyICUgYmFzZTtcbiAgcmV0dXJuIG51bWJlciArIChyZW1pbmRlciA/IGJhc2UgLSByZW1pbmRlciA6IDApO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IE11bHRpTWF0aDtcblxufSx7XCIuL2xpYi9iYXNlNjRkZWNvZGVcIjoyMSxcIi4vbGliL3dhX2RldGVjdFwiOjIyLFwib2JqZWN0LWFzc2lnblwiOjIzfV0sMjE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXG5cbnZhciBCQVNFNjRfTUFQID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmFzZTY0ZGVjb2RlKHN0cikge1xuICB2YXIgaW5wdXQgPSBzdHIucmVwbGFjZSgvW1xcclxcbj1dL2csICcnKSwgLy8gcmVtb3ZlIENSL0xGICYgcGFkZGluZyB0byBzaW1wbGlmeSBzY2FuXG4gICAgICBtYXggICA9IGlucHV0Lmxlbmd0aDtcblxuICB2YXIgb3V0ID0gbmV3IFVpbnQ4QXJyYXkoKG1heCAqIDMpID4+IDIpO1xuXG4gIC8vIENvbGxlY3QgYnkgNio0IGJpdHMgKDMgYnl0ZXMpXG5cbiAgdmFyIGJpdHMgPSAwO1xuICB2YXIgcHRyICA9IDA7XG5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgbWF4OyBpZHgrKykge1xuICAgIGlmICgoaWR4ICUgNCA9PT0gMCkgJiYgaWR4KSB7XG4gICAgICBvdXRbcHRyKytdID0gKGJpdHMgPj4gMTYpICYgMHhGRjtcbiAgICAgIG91dFtwdHIrK10gPSAoYml0cyA+PiA4KSAmIDB4RkY7XG4gICAgICBvdXRbcHRyKytdID0gYml0cyAmIDB4RkY7XG4gICAgfVxuXG4gICAgYml0cyA9IChiaXRzIDw8IDYpIHwgQkFTRTY0X01BUC5pbmRleE9mKGlucHV0LmNoYXJBdChpZHgpKTtcbiAgfVxuXG4gIC8vIER1bXAgdGFpbFxuXG4gIHZhciB0YWlsYml0cyA9IChtYXggJSA0KSAqIDY7XG5cbiAgaWYgKHRhaWxiaXRzID09PSAwKSB7XG4gICAgb3V0W3B0cisrXSA9IChiaXRzID4+IDE2KSAmIDB4RkY7XG4gICAgb3V0W3B0cisrXSA9IChiaXRzID4+IDgpICYgMHhGRjtcbiAgICBvdXRbcHRyKytdID0gYml0cyAmIDB4RkY7XG4gIH0gZWxzZSBpZiAodGFpbGJpdHMgPT09IDE4KSB7XG4gICAgb3V0W3B0cisrXSA9IChiaXRzID4+IDEwKSAmIDB4RkY7XG4gICAgb3V0W3B0cisrXSA9IChiaXRzID4+IDIpICYgMHhGRjtcbiAgfSBlbHNlIGlmICh0YWlsYml0cyA9PT0gMTIpIHtcbiAgICBvdXRbcHRyKytdID0gKGJpdHMgPj4gNCkgJiAweEZGO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn07XG5cbn0se31dLDIyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblxuXG52YXIgd2E7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNXZWJBc3NlbWJseSgpIHtcbiAgLy8gdXNlIGNhY2hlIGlmIGNhbGxlZCBiZWZvcmU7XG4gIGlmICh0eXBlb2Ygd2EgIT09ICd1bmRlZmluZWQnKSByZXR1cm4gd2E7XG5cbiAgd2EgPSBmYWxzZTtcblxuICBpZiAodHlwZW9mIFdlYkFzc2VtYmx5ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHdhO1xuXG4gIC8vIElmIFdlYkFzc2VuYmx5IGlzIGRpc2FibGVkLCBjb2RlIGNhbiB0aHJvdyBvbiBjb21waWxlXG4gIHRyeSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2JyaW9uL21pbi13YXNtLWZhaWwvYmxvYi9tYXN0ZXIvbWluLXdhc20tZmFpbC5pbi5qc1xuICAgIC8vIEFkZGl0aW9uYWwgY2hlY2sgdGhhdCBXQSBpbnRlcm5hbHMgYXJlIGNvcnJlY3RcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIGNvbW1hLXNwYWNpbmcsIG1heC1sZW4gKi9cbiAgICB2YXIgYmluICAgICAgPSBuZXcgVWludDhBcnJheShbIDAsOTcsMTE1LDEwOSwxLDAsMCwwLDEsNiwxLDk2LDEsMTI3LDEsMTI3LDMsMiwxLDAsNSwzLDEsMCwxLDcsOCwxLDQsMTE2LDEwMSwxMTUsMTE2LDAsMCwxMCwxNiwxLDE0LDAsMzIsMCw2NSwxLDU0LDIsMCwzMiwwLDQwLDIsMCwxMSBdKTtcbiAgICB2YXIgbW9kdWxlICAgPSBuZXcgV2ViQXNzZW1ibHkuTW9kdWxlKGJpbik7XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IFdlYkFzc2VtYmx5Lkluc3RhbmNlKG1vZHVsZSwge30pO1xuXG4gICAgLy8gdGVzdCBzdG9yaW5nIHRvIGFuZCBsb2FkaW5nIGZyb20gYSBub24temVybyBsb2NhdGlvbiB2aWEgYSBwYXJhbWV0ZXIuXG4gICAgLy8gU2FmYXJpIG9uIGlPUyAxMS4yLjUgcmV0dXJucyAwIHVuZXhwZWN0ZWRseSBhdCBub24temVybyBsb2NhdGlvbnNcbiAgICBpZiAoaW5zdGFuY2UuZXhwb3J0cy50ZXN0KDQpICE9PSAwKSB3YSA9IHRydWU7XG5cbiAgICByZXR1cm4gd2E7XG4gIH0gY2F0Y2ggKF9fKSB7fVxuXG4gIHJldHVybiB3YTtcbn07XG5cbn0se31dLDIzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxufSx7fV0sMjQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGJ1bmRsZUZuID0gYXJndW1lbnRzWzNdO1xudmFyIHNvdXJjZXMgPSBhcmd1bWVudHNbNF07XG52YXIgY2FjaGUgPSBhcmd1bWVudHNbNV07XG5cbnZhciBzdHJpbmdpZnkgPSBKU09OLnN0cmluZ2lmeTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIG9wdGlvbnMpIHtcbiAgICB2YXIgd2tleTtcbiAgICB2YXIgY2FjaGVLZXlzID0gT2JqZWN0LmtleXMoY2FjaGUpO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjYWNoZUtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBjYWNoZUtleXNbaV07XG4gICAgICAgIHZhciBleHAgPSBjYWNoZVtrZXldLmV4cG9ydHM7XG4gICAgICAgIC8vIFVzaW5nIGJhYmVsIGFzIGEgdHJhbnNwaWxlciB0byB1c2UgZXNtb2R1bGUsIHRoZSBleHBvcnQgd2lsbCBhbHdheXNcbiAgICAgICAgLy8gYmUgYW4gb2JqZWN0IHdpdGggdGhlIGRlZmF1bHQgZXhwb3J0IGFzIGEgcHJvcGVydHkgb2YgaXQuIFRvIGVuc3VyZVxuICAgICAgICAvLyB0aGUgZXhpc3RpbmcgYXBpIGFuZCBiYWJlbCBlc21vZHVsZSBleHBvcnRzIGFyZSBib3RoIHN1cHBvcnRlZCB3ZVxuICAgICAgICAvLyBjaGVjayBmb3IgYm90aFxuICAgICAgICBpZiAoZXhwID09PSBmbiB8fCBleHAgJiYgZXhwLmRlZmF1bHQgPT09IGZuKSB7XG4gICAgICAgICAgICB3a2V5ID0ga2V5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXdrZXkpIHtcbiAgICAgICAgd2tleSA9IE1hdGguZmxvb3IoTWF0aC5wb3coMTYsIDgpICogTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB2YXIgd2NhY2hlID0ge307XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2FjaGVLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGNhY2hlS2V5c1tpXTtcbiAgICAgICAgICAgIHdjYWNoZVtrZXldID0ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHNvdXJjZXNbd2tleV0gPSBbXG4gICAgICAgICAgICAnZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7JyArIGZuICsgJyhzZWxmKTsgfScsXG4gICAgICAgICAgICB3Y2FjaGVcbiAgICAgICAgXTtcbiAgICB9XG4gICAgdmFyIHNrZXkgPSBNYXRoLmZsb29yKE1hdGgucG93KDE2LCA4KSAqIE1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKDE2KTtcblxuICAgIHZhciBzY2FjaGUgPSB7fTsgc2NhY2hlW3drZXldID0gd2tleTtcbiAgICBzb3VyY2VzW3NrZXldID0gW1xuICAgICAgICAnZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7JyArXG4gICAgICAgICAgICAvLyB0cnkgdG8gY2FsbCBkZWZhdWx0IGlmIGRlZmluZWQgdG8gYWxzbyBzdXBwb3J0IGJhYmVsIGVzbW9kdWxlIGV4cG9ydHNcbiAgICAgICAgICAgICd2YXIgZiA9IHJlcXVpcmUoJyArIHN0cmluZ2lmeSh3a2V5KSArICcpOycgK1xuICAgICAgICAgICAgJyhmLmRlZmF1bHQgPyBmLmRlZmF1bHQgOiBmKShzZWxmKTsnICtcbiAgICAgICAgJ30nLFxuICAgICAgICBzY2FjaGVcbiAgICBdO1xuXG4gICAgdmFyIHdvcmtlclNvdXJjZXMgPSB7fTtcbiAgICByZXNvbHZlU291cmNlcyhza2V5KTtcblxuICAgIGZ1bmN0aW9uIHJlc29sdmVTb3VyY2VzKGtleSkge1xuICAgICAgICB3b3JrZXJTb3VyY2VzW2tleV0gPSB0cnVlO1xuXG4gICAgICAgIGZvciAodmFyIGRlcFBhdGggaW4gc291cmNlc1trZXldWzFdKSB7XG4gICAgICAgICAgICB2YXIgZGVwS2V5ID0gc291cmNlc1trZXldWzFdW2RlcFBhdGhdO1xuICAgICAgICAgICAgaWYgKCF3b3JrZXJTb3VyY2VzW2RlcEtleV0pIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlU291cmNlcyhkZXBLZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNyYyA9ICcoJyArIGJ1bmRsZUZuICsgJykoeydcbiAgICAgICAgKyBPYmplY3Qua2V5cyh3b3JrZXJTb3VyY2VzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ2lmeShrZXkpICsgJzpbJ1xuICAgICAgICAgICAgICAgICsgc291cmNlc1trZXldWzBdXG4gICAgICAgICAgICAgICAgKyAnLCcgKyBzdHJpbmdpZnkoc291cmNlc1trZXldWzFdKSArICddJ1xuICAgICAgICAgICAgO1xuICAgICAgICB9KS5qb2luKCcsJylcbiAgICAgICAgKyAnfSx7fSxbJyArIHN0cmluZ2lmeShza2V5KSArICddKSdcbiAgICA7XG5cbiAgICB2YXIgVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMIHx8IHdpbmRvdy5tb3pVUkwgfHwgd2luZG93Lm1zVVJMO1xuXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbc3JjXSwgeyB0eXBlOiAndGV4dC9qYXZhc2NyaXB0JyB9KTtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmJhcmUpIHsgcmV0dXJuIGJsb2I7IH1cbiAgICB2YXIgd29ya2VyVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcih3b3JrZXJVcmwpO1xuICAgIHdvcmtlci5vYmplY3RVUkwgPSB3b3JrZXJVcmw7XG4gICAgcmV0dXJuIHdvcmtlcjtcbn07XG5cbn0se31dLFwiL2luZGV4LmpzXCI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbnZhciBhc3NpZ24gPSBfZGVyZXFfKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciB3ZWJ3b3JraWZ5ID0gX2RlcmVxXygnd2Vid29ya2lmeScpO1xuXG52YXIgTWF0aExpYiA9IF9kZXJlcV8oJy4vbGliL21hdGhsaWInKTtcblxudmFyIFBvb2wgPSBfZGVyZXFfKCcuL2xpYi9wb29sJyk7XG5cbnZhciB1dGlscyA9IF9kZXJlcV8oJy4vbGliL3V0aWxzJyk7XG5cbnZhciB3b3JrZXIgPSBfZGVyZXFfKCcuL2xpYi93b3JrZXInKTtcblxudmFyIGNyZWF0ZVN0YWdlcyA9IF9kZXJlcV8oJy4vbGliL3N0ZXBwZXInKTtcblxudmFyIGNyZWF0ZVJlZ2lvbnMgPSBfZGVyZXFfKCcuL2xpYi90aWxlcicpOyAvLyBEZWR1cGxpY2F0ZSBwb29scyAmIGxpbWl0ZXJzIHdpdGggdGhlIHNhbWUgY29uZmlnc1xuLy8gd2hlbiB1c2VyIGNyZWF0ZXMgbXVsdGlwbGUgcGljYSBpbnN0YW5jZXMuXG5cblxudmFyIHNpbmdsZXRvbmVzID0ge307XG52YXIgTkVFRF9TQUZBUklfRklYID0gZmFsc2U7XG5cbnRyeSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50KSB7XG4gICAgTkVFRF9TQUZBUklfRklYID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdTYWZhcmknKSA+PSAwO1xuICB9XG59IGNhdGNoIChlKSB7fVxuXG52YXIgY29uY3VycmVuY3kgPSAxO1xuXG5pZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29uY3VycmVuY3kgPSBNYXRoLm1pbihuYXZpZ2F0b3IuaGFyZHdhcmVDb25jdXJyZW5jeSB8fCAxLCA0KTtcbn1cblxudmFyIERFRkFVTFRfUElDQV9PUFRTID0ge1xuICB0aWxlOiAxMDI0LFxuICBjb25jdXJyZW5jeTogY29uY3VycmVuY3ksXG4gIGZlYXR1cmVzOiBbJ2pzJywgJ3dhc20nLCAnd3cnXSxcbiAgaWRsZTogMjAwMCxcbiAgY3JlYXRlQ2FudmFzOiBmdW5jdGlvbiBjcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCkge1xuICAgIHZhciB0bXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0bXBDYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0bXBDYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiB0bXBDYW52YXM7XG4gIH1cbn07XG52YXIgREVGQVVMVF9SRVNJWkVfT1BUUyA9IHtcbiAgcXVhbGl0eTogMyxcbiAgYWxwaGE6IGZhbHNlLFxuICB1bnNoYXJwQW1vdW50OiAwLFxuICB1bnNoYXJwUmFkaXVzOiAwLjAsXG4gIHVuc2hhcnBUaHJlc2hvbGQ6IDBcbn07XG52YXIgQ0FOX05FV19JTUFHRV9EQVRBID0gZmFsc2U7XG52YXIgQ0FOX0NSRUFURV9JTUFHRV9CSVRNQVAgPSBmYWxzZTtcbnZhciBDQU5fVVNFX0NBTlZBU19HRVRfSU1BR0VfREFUQSA9IGZhbHNlO1xudmFyIENBTl9VU0VfT0ZGU0NSRUVOX0NBTlZBUyA9IGZhbHNlO1xudmFyIENBTl9VU0VfQ0lCX1JFR0lPTl9GT1JfSU1BR0UgPSBmYWxzZTtcblxuZnVuY3Rpb24gd29ya2VyRmFicmljKCkge1xuICByZXR1cm4ge1xuICAgIHZhbHVlOiB3ZWJ3b3JraWZ5KHdvcmtlciksXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHRoaXMudmFsdWUudGVybWluYXRlKCk7XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgdXJsID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMIHx8IHdpbmRvdy5tb3pVUkwgfHwgd2luZG93Lm1zVVJMO1xuXG4gICAgICAgIGlmICh1cmwgJiYgdXJsLnJldm9rZU9iamVjdFVSTCAmJiB0aGlzLnZhbHVlLm9iamVjdFVSTCkge1xuICAgICAgICAgIHVybC5yZXZva2VPYmplY3RVUkwodGhpcy52YWx1ZS5vYmplY3RVUkwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQVBJIG1ldGhvZHNcblxuXG5mdW5jdGlvbiBQaWNhKG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFBpY2EpKSByZXR1cm4gbmV3IFBpY2Eob3B0aW9ucyk7XG4gIHRoaXMub3B0aW9ucyA9IGFzc2lnbih7fSwgREVGQVVMVF9QSUNBX09QVFMsIG9wdGlvbnMgfHwge30pO1xuICB2YXIgbGltaXRlcl9rZXkgPSBcImxrX1wiLmNvbmNhdCh0aGlzLm9wdGlvbnMuY29uY3VycmVuY3kpOyAvLyBTaGFyZSBsaW1pdGVycyB0byBhdm9pZCBtdWx0aXBsZSBwYXJhbGxlbCB3b3JrZXJzIHdoZW4gdXNlciBjcmVhdGVzXG4gIC8vIG11bHRpcGxlIHBpY2EgaW5zdGFuY2VzLlxuXG4gIHRoaXMuX19saW1pdCA9IHNpbmdsZXRvbmVzW2xpbWl0ZXJfa2V5XSB8fCB1dGlscy5saW1pdGVyKHRoaXMub3B0aW9ucy5jb25jdXJyZW5jeSk7XG4gIGlmICghc2luZ2xldG9uZXNbbGltaXRlcl9rZXldKSBzaW5nbGV0b25lc1tsaW1pdGVyX2tleV0gPSB0aGlzLl9fbGltaXQ7IC8vIExpc3Qgb2Ygc3VwcG9ydGVkIGZlYXR1cmVzLCBhY2NvcmRpbmcgdG8gb3B0aW9ucyAmIGJyb3dzZXIvbm9kZS5qc1xuXG4gIHRoaXMuZmVhdHVyZXMgPSB7XG4gICAganM6IGZhbHNlLFxuICAgIC8vIHB1cmUgSlMgaW1wbGVtZW50YXRpb24sIGNhbiBiZSBkaXNhYmxlZCBmb3IgdGVzdGluZ1xuICAgIHdhc206IGZhbHNlLFxuICAgIC8vIHdlYmFzc2VtYmx5IGltcGxlbWVudGF0aW9uIGZvciBoZWF2eSBmdW5jdGlvbnNcbiAgICBjaWI6IGZhbHNlLFxuICAgIC8vIHJlc2l6ZSB2aWEgY3JlYXRlSW1hZ2VCaXRtYXAgKG9ubHkgRkYgYXQgdGhpcyBtb21lbnQpXG4gICAgd3c6IGZhbHNlIC8vIHdlYndvcmtlcnNcblxuICB9O1xuICB0aGlzLl9fd29ya2Vyc1Bvb2wgPSBudWxsOyAvLyBTdG9yZSByZXF1ZXN0ZWQgZmVhdHVyZXMgZm9yIHdlYndvcmtlcnNcblxuICB0aGlzLl9fcmVxdWVzdGVkX2ZlYXR1cmVzID0gW107XG4gIHRoaXMuX19tYXRobGliID0gbnVsbDtcbn1cblxuUGljYS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBpZiAodGhpcy5fX2luaXRQcm9taXNlKSByZXR1cm4gdGhpcy5fX2luaXRQcm9taXNlOyAvLyBUZXN0IGlmIHdlIGNhbiBjcmVhdGUgSW1hZ2VEYXRhIHdpdGhvdXQgY2FudmFzIGFuZCBtZW1vcnkgY29weVxuXG4gIGlmICh0eXBlb2YgSW1hZ2VEYXRhICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuICAgICAgbmV3IEltYWdlRGF0YShuZXcgVWludDhDbGFtcGVkQXJyYXkoNDAwKSwgMTAsIDEwKTtcbiAgICAgIENBTl9ORVdfSU1BR0VfREFUQSA9IHRydWU7XG4gICAgfSBjYXRjaCAoX18pIHt9XG4gIH0gLy8gSW1hZ2VCaXRtYXAgY2FuIGJlIGVmZmVjdGl2ZSBpbiAyIHBsYWNlczpcbiAgLy9cbiAgLy8gMS4gVGhyZWFkZWQganBlZyB1bnBhY2sgKGJhc2ljKVxuICAvLyAyLiBCdWlsdC1pbiByZXNpemUgKGJsb2NrZWQgZHVlIHByb2JsZW0gaW4gY2hyb21lLCBzZWUgaXNzdWUgIzg5KVxuICAvL1xuICAvLyBGb3IgYmFzaWMgdXNlIHdlIGFsc28gbmVlZCBJbWFnZUJpdG1hcCB3byBzdXBwb3J0IC5jbG9zZSgpIG1ldGhvZCxcbiAgLy8gc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL3J1L2RvY3MvV2ViL0FQSS9JbWFnZUJpdG1hcFxuXG5cbiAgaWYgKHR5cGVvZiBJbWFnZUJpdG1hcCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoSW1hZ2VCaXRtYXAucHJvdG90eXBlICYmIEltYWdlQml0bWFwLnByb3RvdHlwZS5jbG9zZSkge1xuICAgICAgQ0FOX0NSRUFURV9JTUFHRV9CSVRNQVAgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYnVnKCdJbWFnZUJpdG1hcCBkb2VzIG5vdCBzdXBwb3J0IC5jbG9zZSgpLCBkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBmZWF0dXJlcyA9IHRoaXMub3B0aW9ucy5mZWF0dXJlcy5zbGljZSgpO1xuXG4gIGlmIChmZWF0dXJlcy5pbmRleE9mKCdhbGwnKSA+PSAwKSB7XG4gICAgZmVhdHVyZXMgPSBbJ2NpYicsICd3YXNtJywgJ2pzJywgJ3d3J107XG4gIH1cblxuICB0aGlzLl9fcmVxdWVzdGVkX2ZlYXR1cmVzID0gZmVhdHVyZXM7XG4gIHRoaXMuX19tYXRobGliID0gbmV3IE1hdGhMaWIoZmVhdHVyZXMpOyAvLyBDaGVjayBXZWJXb3JrZXIgc3VwcG9ydCBpZiByZXF1ZXN0ZWRcblxuICBpZiAoZmVhdHVyZXMuaW5kZXhPZignd3cnKSA+PSAwKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdXb3JrZXInIGluIHdpbmRvdykge1xuICAgICAgLy8gSUUgPD0gMTEgZG9uJ3QgYWxsb3cgdG8gY3JlYXRlIHdlYndvcmtlcnMgZnJvbSBzdHJpbmcuIFdlIHNob3VsZCBjaGVjayBpdC5cbiAgICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvODAxODEwL3dlYi13b3JrZXJzLWZyb20tYmxvYi11cmxzLWluLWllLTEwLWFuZC0xMVxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHdrciA9IF9kZXJlcV8oJ3dlYndvcmtpZnknKShmdW5jdGlvbiAoKSB7fSk7XG5cbiAgICAgICAgd2tyLnRlcm1pbmF0ZSgpO1xuICAgICAgICB0aGlzLmZlYXR1cmVzLnd3ID0gdHJ1ZTsgLy8gcG9vbCB1bmlxdWVuZXNzIGRlcGVuZHMgb24gcG9vbCBjb25maWcgKyB3ZWJ3b3JrZXIgY29uZmlnXG5cbiAgICAgICAgdmFyIHdwb29sX2tleSA9IFwid3BfXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHRoaXMub3B0aW9ucykpO1xuXG4gICAgICAgIGlmIChzaW5nbGV0b25lc1t3cG9vbF9rZXldKSB7XG4gICAgICAgICAgdGhpcy5fX3dvcmtlcnNQb29sID0gc2luZ2xldG9uZXNbd3Bvb2xfa2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9fd29ya2Vyc1Bvb2wgPSBuZXcgUG9vbCh3b3JrZXJGYWJyaWMsIHRoaXMub3B0aW9ucy5pZGxlKTtcbiAgICAgICAgICBzaW5nbGV0b25lc1t3cG9vbF9rZXldID0gdGhpcy5fX3dvcmtlcnNQb29sO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChfXykge31cbiAgICB9XG4gIH1cblxuICB2YXIgaW5pdE1hdGggPSB0aGlzLl9fbWF0aGxpYi5pbml0KCkudGhlbihmdW5jdGlvbiAobWF0aGxpYikge1xuICAgIC8vIENvcHkgZGV0ZWN0ZWQgZmVhdHVyZXNcbiAgICBhc3NpZ24oX3RoaXMuZmVhdHVyZXMsIG1hdGhsaWIuZmVhdHVyZXMpO1xuICB9KTtcblxuICB2YXIgY2hlY2tDaWJSZXNpemU7XG5cbiAgaWYgKCFDQU5fQ1JFQVRFX0lNQUdFX0JJVE1BUCkge1xuICAgIGNoZWNrQ2liUmVzaXplID0gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBjaGVja0NpYlJlc2l6ZSA9IHV0aWxzLmNpYl9zdXBwb3J0KHRoaXMub3B0aW9ucy5jcmVhdGVDYW52YXMpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgaWYgKF90aGlzLmZlYXR1cmVzLmNpYiAmJiBmZWF0dXJlcy5pbmRleE9mKCdjaWInKSA8IDApIHtcbiAgICAgICAgX3RoaXMuZGVidWcoJ2NyZWF0ZUltYWdlQml0bWFwKCkgcmVzaXplIHN1cHBvcnRlZCwgYnV0IGRpc2FibGVkIGJ5IGNvbmZpZycpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGZlYXR1cmVzLmluZGV4T2YoJ2NpYicpID49IDApIF90aGlzLmZlYXR1cmVzLmNpYiA9IHN0YXR1cztcbiAgICB9KTtcbiAgfVxuXG4gIENBTl9VU0VfQ0FOVkFTX0dFVF9JTUFHRV9EQVRBID0gdXRpbHMuY2FuX3VzZV9jYW52YXModGhpcy5vcHRpb25zLmNyZWF0ZUNhbnZhcyk7XG4gIHZhciBjaGVja09mZnNjcmVlbkNhbnZhcztcblxuICBpZiAoQ0FOX0NSRUFURV9JTUFHRV9CSVRNQVAgJiYgQ0FOX05FV19JTUFHRV9EQVRBICYmIGZlYXR1cmVzLmluZGV4T2YoJ3d3JykgIT09IC0xKSB7XG4gICAgY2hlY2tPZmZzY3JlZW5DYW52YXMgPSB1dGlscy53b3JrZXJfb2Zmc2NyZWVuX2NhbnZhc19zdXBwb3J0KCk7XG4gIH0gZWxzZSB7XG4gICAgY2hlY2tPZmZzY3JlZW5DYW52YXMgPSBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICB9XG5cbiAgY2hlY2tPZmZzY3JlZW5DYW52YXMgPSBjaGVja09mZnNjcmVlbkNhbnZhcy50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBDQU5fVVNFX09GRlNDUkVFTl9DQU5WQVMgPSByZXN1bHQ7XG4gIH0pOyAvLyB3ZSB1c2UgY3JlYXRlSW1hZ2VCaXRtYXAgdG8gY3JvcCBpbWFnZSBkYXRhIGFuZCBwYXNzIGl0IHRvIHdvcmtlcnMsXG4gIC8vIHNvIG5lZWQgdG8gY2hlY2sgd2hldGhlciBmdW5jdGlvbiB3b3JrcyBjb3JyZWN0bHk7XG4gIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEyMjA2NzFcblxuICB2YXIgY2hlY2tDaWJSZWdpb24gPSB1dGlscy5jaWJfY2FuX3VzZV9yZWdpb24oKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBDQU5fVVNFX0NJQl9SRUdJT05fRk9SX0lNQUdFID0gcmVzdWx0O1xuICB9KTsgLy8gSW5pdCBtYXRoIGxpYi4gVGhhdCdzIGFzeW5jIGJlY2F1c2UgY2FuIGxvYWQgc29tZVxuXG4gIHRoaXMuX19pbml0UHJvbWlzZSA9IFByb21pc2UuYWxsKFtpbml0TWF0aCwgY2hlY2tDaWJSZXNpemUsIGNoZWNrT2Zmc2NyZWVuQ2FudmFzLCBjaGVja0NpYlJlZ2lvbl0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpcztcbiAgfSk7XG4gIHJldHVybiB0aGlzLl9faW5pdFByb21pc2U7XG59OyAvLyBDYWxsIHJlc2l6ZXIgaW4gd2Vid29ya2VyIG9yIGxvY2FsbHksIGRlcGVuZGluZyBvbiBjb25maWdcblxuXG5QaWNhLnByb3RvdHlwZS5fX2ludm9rZVJlc2l6ZSA9IGZ1bmN0aW9uICh0aWxlT3B0cywgb3B0cykge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAvLyBTaGFyZSBjYWNoZSBiZXR3ZWVuIGNhbGxzOlxuICAvL1xuICAvLyAtIHdhc20gaW5zdGFuY2VcbiAgLy8gLSB3YXNtIG1lbW9yeSBvYmplY3RcbiAgLy9cbiAgb3B0cy5fX21hdGhDYWNoZSA9IG9wdHMuX19tYXRoQ2FjaGUgfHwge307XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIV90aGlzMi5mZWF0dXJlcy53dykge1xuICAgICAgLy8gbm90IHBvc3NpYmxlIHRvIGhhdmUgSW1hZ2VCaXRtYXAgaGVyZSBpZiB1c2VyIGRpc2FibGVkIFdXXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiBfdGhpczIuX19tYXRobGliLnJlc2l6ZUFuZFVuc2hhcnAodGlsZU9wdHMsIG9wdHMuX19tYXRoQ2FjaGUpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgdyA9IF90aGlzMi5fX3dvcmtlcnNQb29sLmFjcXVpcmUoKTtcblxuICAgICAgaWYgKG9wdHMuY2FuY2VsVG9rZW4pIG9wdHMuY2FuY2VsVG9rZW5bXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuXG4gICAgICB3LnZhbHVlLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICB3LnJlbGVhc2UoKTtcbiAgICAgICAgaWYgKGV2LmRhdGEuZXJyKSByZWplY3QoZXYuZGF0YS5lcnIpO2Vsc2UgcmVzb2x2ZShldi5kYXRhKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciB0cmFuc2ZlciA9IFtdO1xuICAgICAgaWYgKHRpbGVPcHRzLnNyYykgdHJhbnNmZXIucHVzaCh0aWxlT3B0cy5zcmMuYnVmZmVyKTtcbiAgICAgIGlmICh0aWxlT3B0cy5zcmNCaXRtYXApIHRyYW5zZmVyLnB1c2godGlsZU9wdHMuc3JjQml0bWFwKTtcbiAgICAgIHcudmFsdWUucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBvcHRzOiB0aWxlT3B0cyxcbiAgICAgICAgZmVhdHVyZXM6IF90aGlzMi5fX3JlcXVlc3RlZF9mZWF0dXJlcyxcbiAgICAgICAgcHJlbG9hZDoge1xuICAgICAgICAgIHdhc21fbm9kdWxlOiBfdGhpczIuX19tYXRobGliLl9fXG4gICAgICAgIH1cbiAgICAgIH0sIHRyYW5zZmVyKTtcbiAgICB9KTtcbiAgfSk7XG59OyAvLyB0aGlzIGZ1bmN0aW9uIGNhbiByZXR1cm4gcHJvbWlzZSBpZiBjcmVhdGVJbWFnZUJpdG1hcCBpcyB1c2VkXG5cblxuUGljYS5wcm90b3R5cGUuX19leHRyYWN0VGlsZURhdGEgPSBmdW5jdGlvbiAodGlsZSwgZnJvbSwgb3B0cywgc3RhZ2VFbnYsIGV4dHJhY3RUbykge1xuICBpZiAodGhpcy5mZWF0dXJlcy53dyAmJiBDQU5fVVNFX09GRlNDUkVFTl9DQU5WQVMgJiYgKCAvLyBjcmVhdGVJbWFnZUJpdG1hcCBkb2Vzbid0IHdvcmsgZm9yIGltYWdlcyAoSW1hZ2UsIEltYWdlQml0bWFwKSB3aXRoIEV4aWYgb3JpZW50YXRpb24gaW4gQ2hyb21lLFxuICAvLyBjYW4gdXNlIGNhbnZhcyBiZWNhdXNlIGNhbnZhcyBkb2Vzbid0IGhhdmUgb3JpZW50YXRpb247XG4gIC8vIHNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMjIwNjcxXG4gIHV0aWxzLmlzQ2FudmFzKGZyb20pIHx8IENBTl9VU0VfQ0lCX1JFR0lPTl9GT1JfSU1BR0UpKSB7XG4gICAgdGhpcy5kZWJ1ZygnQ3JlYXRlIHRpbGUgZm9yIE9mZnNjcmVlbkNhbnZhcycpO1xuICAgIHJldHVybiBjcmVhdGVJbWFnZUJpdG1hcChzdGFnZUVudi5zcmNJbWFnZUJpdG1hcCB8fCBmcm9tLCB0aWxlLngsIHRpbGUueSwgdGlsZS53aWR0aCwgdGlsZS5oZWlnaHQpLnRoZW4oZnVuY3Rpb24gKGJpdG1hcCkge1xuICAgICAgZXh0cmFjdFRvLnNyY0JpdG1hcCA9IGJpdG1hcDtcbiAgICAgIHJldHVybiBleHRyYWN0VG87XG4gICAgfSk7XG4gIH0gLy8gRXh0cmFjdCB0aWxlIFJHQkEgYnVmZmVyLCBkZXBlbmRpbmcgb24gaW5wdXQgdHlwZVxuXG5cbiAgaWYgKHV0aWxzLmlzQ2FudmFzKGZyb20pKSB7XG4gICAgaWYgKCFzdGFnZUVudi5zcmNDdHgpIHN0YWdlRW52LnNyY0N0eCA9IGZyb20uZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgICBhbHBoYTogQm9vbGVhbihvcHRzLmFscGhhKVxuICAgIH0pOyAvLyBJZiBpbnB1dCBpcyBDYW52YXMgLSBleHRyYWN0IHJlZ2lvbiBkYXRhIGRpcmVjdGx5XG5cbiAgICB0aGlzLmRlYnVnKCdHZXQgdGlsZSBwaXhlbCBkYXRhJyk7XG4gICAgZXh0cmFjdFRvLnNyYyA9IHN0YWdlRW52LnNyY0N0eC5nZXRJbWFnZURhdGEodGlsZS54LCB0aWxlLnksIHRpbGUud2lkdGgsIHRpbGUuaGVpZ2h0KS5kYXRhO1xuICAgIHJldHVybiBleHRyYWN0VG87XG4gIH0gLy8gSWYgaW5wdXQgaXMgSW1hZ2Ugb3IgZGVjb2RlZCB0byBJbWFnZUJpdG1hcCxcbiAgLy8gZHJhdyByZWdpb24gdG8gdGVtcG9yYXJ5IGNhbnZhcyBhbmQgZXh0cmFjdCBkYXRhIGZyb20gaXRcbiAgLy9cbiAgLy8gTm90ZSEgQXR0ZW1wdCB0byByZXVzZSB0aGlzIGNhbnZhcyBjYXVzZXMgc2lnbmlmaWNhbnQgc2xvd2Rvd24gaW4gY2hyb21lXG4gIC8vXG5cblxuICB0aGlzLmRlYnVnKCdEcmF3IHRpbGUgaW1hZ2VCaXRtYXAvaW1hZ2UgdG8gdGVtcG9yYXJ5IGNhbnZhcycpO1xuICB2YXIgdG1wQ2FudmFzID0gdGhpcy5vcHRpb25zLmNyZWF0ZUNhbnZhcyh0aWxlLndpZHRoLCB0aWxlLmhlaWdodCk7XG4gIHZhciB0bXBDdHggPSB0bXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgYWxwaGE6IEJvb2xlYW4ob3B0cy5hbHBoYSlcbiAgfSk7XG4gIHRtcEN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnY29weSc7XG4gIHRtcEN0eC5kcmF3SW1hZ2Uoc3RhZ2VFbnYuc3JjSW1hZ2VCaXRtYXAgfHwgZnJvbSwgdGlsZS54LCB0aWxlLnksIHRpbGUud2lkdGgsIHRpbGUuaGVpZ2h0LCAwLCAwLCB0aWxlLndpZHRoLCB0aWxlLmhlaWdodCk7XG4gIHRoaXMuZGVidWcoJ0dldCB0aWxlIHBpeGVsIGRhdGEnKTtcbiAgZXh0cmFjdFRvLnNyYyA9IHRtcEN0eC5nZXRJbWFnZURhdGEoMCwgMCwgdGlsZS53aWR0aCwgdGlsZS5oZWlnaHQpLmRhdGE7IC8vIFNhZmFyaSAxMiB3b3JrYXJvdW5kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlY2EvcGljYS9pc3N1ZXMvMTk5XG5cbiAgdG1wQ2FudmFzLndpZHRoID0gdG1wQ2FudmFzLmhlaWdodCA9IDA7XG4gIHJldHVybiBleHRyYWN0VG87XG59O1xuXG5QaWNhLnByb3RvdHlwZS5fX2xhbmRUaWxlRGF0YSA9IGZ1bmN0aW9uICh0aWxlLCByZXN1bHQsIHN0YWdlRW52KSB7XG4gIHZhciB0b0ltYWdlRGF0YTtcbiAgdGhpcy5kZWJ1ZygnQ29udmVydCByYXcgcmdiYSB0aWxlIHJlc3VsdCB0byBJbWFnZURhdGEnKTtcblxuICBpZiAocmVzdWx0LmJpdG1hcCkge1xuICAgIHN0YWdlRW52LnRvQ3R4LmRyYXdJbWFnZShyZXN1bHQuYml0bWFwLCB0aWxlLnRvWCwgdGlsZS50b1kpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKENBTl9ORVdfSU1BR0VfREFUQSkge1xuICAgIC8vIHRoaXMgYnJhbmNoIGlzIGZvciBtb2Rlcm4gYnJvd3NlcnNcbiAgICAvLyBJZiBgbmV3IEltYWdlRGF0YSgpYCAmIFVpbnQ4Q2xhbXBlZEFycmF5IHN1cG9ydGVkXG4gICAgdG9JbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKG5ldyBVaW50OENsYW1wZWRBcnJheShyZXN1bHQuZGF0YSksIHRpbGUudG9XaWR0aCwgdGlsZS50b0hlaWdodCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gZmFsbGJhY2sgZm9yIGBub2RlLWNhbnZhc2AgYW5kIG9sZCBicm93c2Vyc1xuICAgIC8vIChJRTExIGhhcyBJbWFnZURhdGEgYnV0IGRvZXMgbm90IHN1cHBvcnQgYG5ldyBJbWFnZURhdGEoKWApXG4gICAgdG9JbWFnZURhdGEgPSBzdGFnZUVudi50b0N0eC5jcmVhdGVJbWFnZURhdGEodGlsZS50b1dpZHRoLCB0aWxlLnRvSGVpZ2h0KTtcblxuICAgIGlmICh0b0ltYWdlRGF0YS5kYXRhLnNldCkge1xuICAgICAgdG9JbWFnZURhdGEuZGF0YS5zZXQocmVzdWx0LmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJRTkgZG9uJ3QgaGF2ZSBgLnNldCgpYFxuICAgICAgZm9yICh2YXIgaSA9IHRvSW1hZ2VEYXRhLmRhdGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdG9JbWFnZURhdGEuZGF0YVtpXSA9IHJlc3VsdC5kYXRhW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuZGVidWcoJ0RyYXcgdGlsZScpO1xuXG4gIGlmIChORUVEX1NBRkFSSV9GSVgpIHtcbiAgICAvLyBTYWZhcmkgZHJhd3MgdGhpbiB3aGl0ZSBzdHJpcGVzIGJldHdlZW4gdGlsZXMgd2l0aG91dCB0aGlzIGZpeFxuICAgIHN0YWdlRW52LnRvQ3R4LnB1dEltYWdlRGF0YSh0b0ltYWdlRGF0YSwgdGlsZS50b1gsIHRpbGUudG9ZLCB0aWxlLnRvSW5uZXJYIC0gdGlsZS50b1gsIHRpbGUudG9Jbm5lclkgLSB0aWxlLnRvWSwgdGlsZS50b0lubmVyV2lkdGggKyAxZS01LCB0aWxlLnRvSW5uZXJIZWlnaHQgKyAxZS01KTtcbiAgfSBlbHNlIHtcbiAgICBzdGFnZUVudi50b0N0eC5wdXRJbWFnZURhdGEodG9JbWFnZURhdGEsIHRpbGUudG9YLCB0aWxlLnRvWSwgdGlsZS50b0lubmVyWCAtIHRpbGUudG9YLCB0aWxlLnRvSW5uZXJZIC0gdGlsZS50b1ksIHRpbGUudG9Jbm5lcldpZHRoLCB0aWxlLnRvSW5uZXJIZWlnaHQpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5QaWNhLnByb3RvdHlwZS5fX3RpbGVBbmRSZXNpemUgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIG9wdHMpIHtcbiAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgdmFyIHN0YWdlRW52ID0ge1xuICAgIHNyY0N0eDogbnVsbCxcbiAgICBzcmNJbWFnZUJpdG1hcDogbnVsbCxcbiAgICBpc0ltYWdlQml0bWFwUmV1c2VkOiBmYWxzZSxcbiAgICB0b0N0eDogbnVsbFxuICB9O1xuXG4gIHZhciBwcm9jZXNzVGlsZSA9IGZ1bmN0aW9uIHByb2Nlc3NUaWxlKHRpbGUpIHtcbiAgICByZXR1cm4gX3RoaXMzLl9fbGltaXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG9wdHMuY2FuY2VsZWQpIHJldHVybiBvcHRzLmNhbmNlbFRva2VuO1xuICAgICAgdmFyIHRpbGVPcHRzID0ge1xuICAgICAgICB3aWR0aDogdGlsZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aWxlLmhlaWdodCxcbiAgICAgICAgdG9XaWR0aDogdGlsZS50b1dpZHRoLFxuICAgICAgICB0b0hlaWdodDogdGlsZS50b0hlaWdodCxcbiAgICAgICAgc2NhbGVYOiB0aWxlLnNjYWxlWCxcbiAgICAgICAgc2NhbGVZOiB0aWxlLnNjYWxlWSxcbiAgICAgICAgb2Zmc2V0WDogdGlsZS5vZmZzZXRYLFxuICAgICAgICBvZmZzZXRZOiB0aWxlLm9mZnNldFksXG4gICAgICAgIHF1YWxpdHk6IG9wdHMucXVhbGl0eSxcbiAgICAgICAgYWxwaGE6IG9wdHMuYWxwaGEsXG4gICAgICAgIHVuc2hhcnBBbW91bnQ6IG9wdHMudW5zaGFycEFtb3VudCxcbiAgICAgICAgdW5zaGFycFJhZGl1czogb3B0cy51bnNoYXJwUmFkaXVzLFxuICAgICAgICB1bnNoYXJwVGhyZXNob2xkOiBvcHRzLnVuc2hhcnBUaHJlc2hvbGRcbiAgICAgIH07XG5cbiAgICAgIF90aGlzMy5kZWJ1ZygnSW52b2tlIHJlc2l6ZSBtYXRoJyk7XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGlsZU9wdHMpLnRoZW4oZnVuY3Rpb24gKHRpbGVPcHRzKSB7XG4gICAgICAgIHJldHVybiBfdGhpczMuX19leHRyYWN0VGlsZURhdGEodGlsZSwgZnJvbSwgb3B0cywgc3RhZ2VFbnYsIHRpbGVPcHRzKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHRpbGVPcHRzKSB7XG4gICAgICAgIF90aGlzMy5kZWJ1ZygnSW52b2tlIHJlc2l6ZSBtYXRoJyk7XG5cbiAgICAgICAgcmV0dXJuIF90aGlzMy5fX2ludm9rZVJlc2l6ZSh0aWxlT3B0cywgb3B0cyk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKG9wdHMuY2FuY2VsZWQpIHJldHVybiBvcHRzLmNhbmNlbFRva2VuO1xuICAgICAgICBzdGFnZUVudi5zcmNJbWFnZURhdGEgPSBudWxsO1xuICAgICAgICByZXR1cm4gX3RoaXMzLl9fbGFuZFRpbGVEYXRhKHRpbGUsIHJlc3VsdCwgc3RhZ2VFbnYpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07IC8vIE5lZWQgdG8gbm9ybWFsaXplIGRhdGEgc291cmNlIGZpcnN0LiBJdCBjYW4gYmUgY2FudmFzIG9yIGltYWdlLlxuICAvLyBJZiBpbWFnZSAtIHRyeSB0byBkZWNvZGUgaW4gYmFja2dyb3VuZCBpZiBwb3NzaWJsZVxuXG5cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIHN0YWdlRW52LnRvQ3R4ID0gdG8uZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgICBhbHBoYTogQm9vbGVhbihvcHRzLmFscGhhKVxuICAgIH0pO1xuICAgIGlmICh1dGlscy5pc0NhbnZhcyhmcm9tKSkgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAodXRpbHMuaXNJbWFnZUJpdG1hcChmcm9tKSkge1xuICAgICAgc3RhZ2VFbnYuc3JjSW1hZ2VCaXRtYXAgPSBmcm9tO1xuICAgICAgc3RhZ2VFbnYuaXNJbWFnZUJpdG1hcFJldXNlZCA9IHRydWU7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNJbWFnZShmcm9tKSkge1xuICAgICAgLy8gdHJ5IGRvIGRlY29kZSBpbWFnZSBpbiBiYWNrZ3JvdW5kIGZvciBmYXN0ZXIgbmV4dCBvcGVyYXRpb25zO1xuICAgICAgLy8gaWYgd2UncmUgdXNpbmcgb2Zmc2NyZWVuIGNhbnZhcywgY2liIGlzIGNhbGxlZCBwZXIgdGlsZSwgc28gbm90IG5lZWRlZCBoZXJlXG4gICAgICBpZiAoIUNBTl9DUkVBVEVfSU1BR0VfQklUTUFQKSByZXR1cm4gbnVsbDtcblxuICAgICAgX3RoaXMzLmRlYnVnKCdEZWNvZGUgaW1hZ2UgdmlhIGNyZWF0ZUltYWdlQml0bWFwJyk7XG5cbiAgICAgIHJldHVybiBjcmVhdGVJbWFnZUJpdG1hcChmcm9tKS50aGVuKGZ1bmN0aW9uIChpbWFnZUJpdG1hcCkge1xuICAgICAgICBzdGFnZUVudi5zcmNJbWFnZUJpdG1hcCA9IGltYWdlQml0bWFwO1xuICAgICAgfSkgLy8gU3VwcHJlc3MgZXJyb3IgdG8gdXNlIGZhbGxiYWNrLCBpZiBtZXRob2QgZmFpbHNcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlY2EvcGljYS9pc3N1ZXMvMTkwXG5cbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgICBbXCJjYXRjaFwiXShmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcignUGljYTogXCIuZnJvbVwiIHNob3VsZCBiZSBJbWFnZSwgQ2FudmFzIG9yIEltYWdlQml0bWFwJyk7XG4gIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIGlmIChvcHRzLmNhbmNlbGVkKSByZXR1cm4gb3B0cy5jYW5jZWxUb2tlbjtcblxuICAgIF90aGlzMy5kZWJ1ZygnQ2FsY3VsYXRlIHRpbGVzJyk7IC8vXG4gICAgLy8gSGVyZSB3ZSBhcmUgd2l0aCBcIm5vcm1hbGl6ZWRcIiBzb3VyY2UsXG4gICAgLy8gZm9sbG93IHRvIHRpbGluZ1xuICAgIC8vXG5cblxuICAgIHZhciByZWdpb25zID0gY3JlYXRlUmVnaW9ucyh7XG4gICAgICB3aWR0aDogb3B0cy53aWR0aCxcbiAgICAgIGhlaWdodDogb3B0cy5oZWlnaHQsXG4gICAgICBzcmNUaWxlU2l6ZTogX3RoaXMzLm9wdGlvbnMudGlsZSxcbiAgICAgIHRvV2lkdGg6IG9wdHMudG9XaWR0aCxcbiAgICAgIHRvSGVpZ2h0OiBvcHRzLnRvSGVpZ2h0LFxuICAgICAgZGVzdFRpbGVCb3JkZXI6IG9wdHMuX19kZXN0VGlsZUJvcmRlclxuICAgIH0pO1xuICAgIHZhciBqb2JzID0gcmVnaW9ucy5tYXAoZnVuY3Rpb24gKHRpbGUpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzVGlsZSh0aWxlKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNsZWFudXAoc3RhZ2VFbnYpIHtcbiAgICAgIGlmIChzdGFnZUVudi5zcmNJbWFnZUJpdG1hcCkge1xuICAgICAgICBpZiAoIXN0YWdlRW52LmlzSW1hZ2VCaXRtYXBSZXVzZWQpIHN0YWdlRW52LnNyY0ltYWdlQml0bWFwLmNsb3NlKCk7XG4gICAgICAgIHN0YWdlRW52LnNyY0ltYWdlQml0bWFwID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfdGhpczMuZGVidWcoJ1Byb2Nlc3MgdGlsZXMnKTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChqb2JzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMy5kZWJ1ZygnRmluaXNoZWQhJyk7XG5cbiAgICAgIGNsZWFudXAoc3RhZ2VFbnYpO1xuICAgICAgcmV0dXJuIHRvO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNsZWFudXAoc3RhZ2VFbnYpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9KTtcbn07XG5cblBpY2EucHJvdG90eXBlLl9fcHJvY2Vzc1N0YWdlcyA9IGZ1bmN0aW9uIChzdGFnZXMsIGZyb20sIHRvLCBvcHRzKSB7XG4gIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gIGlmIChvcHRzLmNhbmNlbGVkKSByZXR1cm4gb3B0cy5jYW5jZWxUb2tlbjtcblxuICB2YXIgX3N0YWdlcyRzaGlmdCA9IHN0YWdlcy5zaGlmdCgpLFxuICAgICAgX3N0YWdlcyRzaGlmdDIgPSBfc2xpY2VkVG9BcnJheShfc3RhZ2VzJHNoaWZ0LCAyKSxcbiAgICAgIHRvV2lkdGggPSBfc3RhZ2VzJHNoaWZ0MlswXSxcbiAgICAgIHRvSGVpZ2h0ID0gX3N0YWdlcyRzaGlmdDJbMV07XG5cbiAgdmFyIGlzTGFzdFN0YWdlID0gc3RhZ2VzLmxlbmd0aCA9PT0gMDtcbiAgb3B0cyA9IGFzc2lnbih7fSwgb3B0cywge1xuICAgIHRvV2lkdGg6IHRvV2lkdGgsXG4gICAgdG9IZWlnaHQ6IHRvSGVpZ2h0LFxuICAgIC8vIG9ubHkgdXNlIHVzZXItZGVmaW5lZCBxdWFsaXR5IGZvciB0aGUgbGFzdCBzdGFnZSxcbiAgICAvLyB1c2Ugc2ltcGxlciAoSGFtbWluZykgZmlsdGVyIGZvciB0aGUgZmlyc3Qgc3RhZ2VzIHdoZXJlXG4gICAgLy8gc2NhbGUgZmFjdG9yIGlzIGxhcmdlIGVub3VnaCAobW9yZSB0aGFuIDItMylcbiAgICBxdWFsaXR5OiBpc0xhc3RTdGFnZSA/IG9wdHMucXVhbGl0eSA6IE1hdGgubWluKDEsIG9wdHMucXVhbGl0eSlcbiAgfSk7XG4gIHZhciB0bXBDYW52YXM7XG5cbiAgaWYgKCFpc0xhc3RTdGFnZSkge1xuICAgIC8vIGNyZWF0ZSB0ZW1wb3JhcnkgY2FudmFzXG4gICAgdG1wQ2FudmFzID0gdGhpcy5vcHRpb25zLmNyZWF0ZUNhbnZhcyh0b1dpZHRoLCB0b0hlaWdodCk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fX3RpbGVBbmRSZXNpemUoZnJvbSwgaXNMYXN0U3RhZ2UgPyB0byA6IHRtcENhbnZhcywgb3B0cykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzTGFzdFN0YWdlKSByZXR1cm4gdG87XG4gICAgb3B0cy53aWR0aCA9IHRvV2lkdGg7XG4gICAgb3B0cy5oZWlnaHQgPSB0b0hlaWdodDtcbiAgICByZXR1cm4gX3RoaXM0Ll9fcHJvY2Vzc1N0YWdlcyhzdGFnZXMsIHRtcENhbnZhcywgdG8sIG9wdHMpO1xuICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICBpZiAodG1wQ2FudmFzKSB7XG4gICAgICAvLyBTYWZhcmkgMTIgd29ya2Fyb3VuZFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVjYS9waWNhL2lzc3Vlcy8xOTlcbiAgICAgIHRtcENhbnZhcy53aWR0aCA9IHRtcENhbnZhcy5oZWlnaHQgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH0pO1xufTtcblxuUGljYS5wcm90b3R5cGUuX19yZXNpemVWaWFDcmVhdGVJbWFnZUJpdG1hcCA9IGZ1bmN0aW9uIChmcm9tLCB0bywgb3B0cykge1xuICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICB2YXIgdG9DdHggPSB0by5nZXRDb250ZXh0KCcyZCcsIHtcbiAgICBhbHBoYTogQm9vbGVhbihvcHRzLmFscGhhKVxuICB9KTtcbiAgdGhpcy5kZWJ1ZygnUmVzaXplIHZpYSBjcmVhdGVJbWFnZUJpdG1hcCgpJyk7XG4gIHJldHVybiBjcmVhdGVJbWFnZUJpdG1hcChmcm9tLCB7XG4gICAgcmVzaXplV2lkdGg6IG9wdHMudG9XaWR0aCxcbiAgICByZXNpemVIZWlnaHQ6IG9wdHMudG9IZWlnaHQsXG4gICAgcmVzaXplUXVhbGl0eTogdXRpbHMuY2liX3F1YWxpdHlfbmFtZShvcHRzLnF1YWxpdHkpXG4gIH0pLnRoZW4oZnVuY3Rpb24gKGltYWdlQml0bWFwKSB7XG4gICAgaWYgKG9wdHMuY2FuY2VsZWQpIHJldHVybiBvcHRzLmNhbmNlbFRva2VuOyAvLyBpZiBubyB1bnNoYXJwIC0gZHJhdyBkaXJlY3RseSB0byBvdXRwdXQgY2FudmFzXG5cbiAgICBpZiAoIW9wdHMudW5zaGFycEFtb3VudCkge1xuICAgICAgdG9DdHguZHJhd0ltYWdlKGltYWdlQml0bWFwLCAwLCAwKTtcbiAgICAgIGltYWdlQml0bWFwLmNsb3NlKCk7XG4gICAgICB0b0N0eCA9IG51bGw7XG5cbiAgICAgIF90aGlzNS5kZWJ1ZygnRmluaXNoZWQhJyk7XG5cbiAgICAgIHJldHVybiB0bztcbiAgICB9XG5cbiAgICBfdGhpczUuZGVidWcoJ1Vuc2hhcnAgcmVzdWx0Jyk7XG5cbiAgICB2YXIgdG1wQ2FudmFzID0gX3RoaXM1Lm9wdGlvbnMuY3JlYXRlQ2FudmFzKG9wdHMudG9XaWR0aCwgb3B0cy50b0hlaWdodCk7XG5cbiAgICB2YXIgdG1wQ3R4ID0gdG1wQ2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgICAgYWxwaGE6IEJvb2xlYW4ob3B0cy5hbHBoYSlcbiAgICB9KTtcbiAgICB0bXBDdHguZHJhd0ltYWdlKGltYWdlQml0bWFwLCAwLCAwKTtcbiAgICBpbWFnZUJpdG1hcC5jbG9zZSgpO1xuICAgIHZhciBpRGF0YSA9IHRtcEN0eC5nZXRJbWFnZURhdGEoMCwgMCwgb3B0cy50b1dpZHRoLCBvcHRzLnRvSGVpZ2h0KTtcblxuICAgIF90aGlzNS5fX21hdGhsaWIudW5zaGFycF9tYXNrKGlEYXRhLmRhdGEsIG9wdHMudG9XaWR0aCwgb3B0cy50b0hlaWdodCwgb3B0cy51bnNoYXJwQW1vdW50LCBvcHRzLnVuc2hhcnBSYWRpdXMsIG9wdHMudW5zaGFycFRocmVzaG9sZCk7XG5cbiAgICB0b0N0eC5wdXRJbWFnZURhdGEoaURhdGEsIDAsIDApOyAvLyBTYWZhcmkgMTIgd29ya2Fyb3VuZFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlY2EvcGljYS9pc3N1ZXMvMTk5XG5cbiAgICB0bXBDYW52YXMud2lkdGggPSB0bXBDYW52YXMuaGVpZ2h0ID0gMDtcbiAgICBpRGF0YSA9IHRtcEN0eCA9IHRtcENhbnZhcyA9IHRvQ3R4ID0gbnVsbDtcblxuICAgIF90aGlzNS5kZWJ1ZygnRmluaXNoZWQhJyk7XG5cbiAgICByZXR1cm4gdG87XG4gIH0pO1xufTtcblxuUGljYS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKGZyb20sIHRvLCBvcHRpb25zKSB7XG4gIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gIHRoaXMuZGVidWcoJ1N0YXJ0IHJlc2l6ZS4uLicpO1xuICB2YXIgb3B0cyA9IGFzc2lnbih7fSwgREVGQVVMVF9SRVNJWkVfT1BUUyk7XG5cbiAgaWYgKCFpc05hTihvcHRpb25zKSkge1xuICAgIG9wdHMgPSBhc3NpZ24ob3B0cywge1xuICAgICAgcXVhbGl0eTogb3B0aW9uc1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMpIHtcbiAgICBvcHRzID0gYXNzaWduKG9wdHMsIG9wdGlvbnMpO1xuICB9XG5cbiAgb3B0cy50b1dpZHRoID0gdG8ud2lkdGg7XG4gIG9wdHMudG9IZWlnaHQgPSB0by5oZWlnaHQ7XG4gIG9wdHMud2lkdGggPSBmcm9tLm5hdHVyYWxXaWR0aCB8fCBmcm9tLndpZHRoO1xuICBvcHRzLmhlaWdodCA9IGZyb20ubmF0dXJhbEhlaWdodCB8fCBmcm9tLmhlaWdodDsgLy8gUHJldmVudCBzdGVwcGVyIGZyb20gaW5maW5pdGUgbG9vcFxuXG4gIGlmICh0by53aWR0aCA9PT0gMCB8fCB0by5oZWlnaHQgPT09IDApIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvdXRwdXQgc2l6ZTogXCIuY29uY2F0KHRvLndpZHRoLCBcInhcIikuY29uY2F0KHRvLmhlaWdodCkpKTtcbiAgfVxuXG4gIGlmIChvcHRzLnVuc2hhcnBSYWRpdXMgPiAyKSBvcHRzLnVuc2hhcnBSYWRpdXMgPSAyO1xuICBvcHRzLmNhbmNlbGVkID0gZmFsc2U7XG5cbiAgaWYgKG9wdHMuY2FuY2VsVG9rZW4pIHtcbiAgICAvLyBXcmFwIGNhbmNlbFRva2VuIHRvIGF2b2lkIHN1Y2Nlc3NpdmUgcmVzb2x2ZSAmIHNldCBmbGFnXG4gICAgb3B0cy5jYW5jZWxUb2tlbiA9IG9wdHMuY2FuY2VsVG9rZW4udGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgb3B0cy5jYW5jZWxlZCA9IHRydWU7XG4gICAgICB0aHJvdyBkYXRhO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIG9wdHMuY2FuY2VsZWQgPSB0cnVlO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIERFU1RfVElMRV9CT1JERVIgPSAzOyAvLyBNYXggcG9zc2libGUgZmlsdGVyIHdpbmRvdyBzaXplXG5cbiAgb3B0cy5fX2Rlc3RUaWxlQm9yZGVyID0gTWF0aC5jZWlsKE1hdGgubWF4KERFU1RfVElMRV9CT1JERVIsIDIuNSAqIG9wdHMudW5zaGFycFJhZGl1cyB8IDApKTtcbiAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIGlmIChvcHRzLmNhbmNlbGVkKSByZXR1cm4gb3B0cy5jYW5jZWxUb2tlbjsgLy8gaWYgY3JlYXRlSW1hZ2VCaXRtYXAgc3VwcG9ydHMgcmVzaXplLCBqdXN0IGRvIGl0IGFuZCByZXR1cm5cblxuICAgIGlmIChfdGhpczYuZmVhdHVyZXMuY2liKSB7XG4gICAgICByZXR1cm4gX3RoaXM2Ll9fcmVzaXplVmlhQ3JlYXRlSW1hZ2VCaXRtYXAoZnJvbSwgdG8sIG9wdHMpO1xuICAgIH1cblxuICAgIGlmICghQ0FOX1VTRV9DQU5WQVNfR0VUX0lNQUdFX0RBVEEpIHtcbiAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1BpY2E6IGNhbm5vdCB1c2UgZ2V0SW1hZ2VEYXRhIG9uIGNhbnZhcywgJyArIFwibWFrZSBzdXJlIGZpbmdlcnByaW50aW5nIHByb3RlY3Rpb24gaXNuJ3QgZW5hYmxlZFwiKTtcbiAgICAgIGVyci5jb2RlID0gJ0VSUl9HRVRfSU1BR0VfREFUQSc7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSAvL1xuICAgIC8vIE5vIGVhc3kgd2F5LCBsZXQncyByZXNpemUgbWFudWFsbHkgdmlhIGFycmF5c1xuICAgIC8vXG5cblxuICAgIHZhciBzdGFnZXMgPSBjcmVhdGVTdGFnZXMob3B0cy53aWR0aCwgb3B0cy5oZWlnaHQsIG9wdHMudG9XaWR0aCwgb3B0cy50b0hlaWdodCwgX3RoaXM2Lm9wdGlvbnMudGlsZSwgb3B0cy5fX2Rlc3RUaWxlQm9yZGVyKTtcbiAgICByZXR1cm4gX3RoaXM2Ll9fcHJvY2Vzc1N0YWdlcyhzdGFnZXMsIGZyb20sIHRvLCBvcHRzKTtcbiAgfSk7XG59OyAvLyBSR0JBIGJ1ZmZlciByZXNpemVcbi8vXG5cblxuUGljYS5wcm90b3R5cGUucmVzaXplQnVmZmVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgdmFyIG9wdHMgPSBhc3NpZ24oe30sIERFRkFVTFRfUkVTSVpFX09QVFMsIG9wdGlvbnMpO1xuICByZXR1cm4gdGhpcy5pbml0KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzNy5fX21hdGhsaWIucmVzaXplQW5kVW5zaGFycChvcHRzKTtcbiAgfSk7XG59O1xuXG5QaWNhLnByb3RvdHlwZS50b0Jsb2IgPSBmdW5jdGlvbiAoY2FudmFzLCBtaW1lVHlwZSwgcXVhbGl0eSkge1xuICBtaW1lVHlwZSA9IG1pbWVUeXBlIHx8ICdpbWFnZS9wbmcnO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBpZiAoY2FudmFzLnRvQmxvYikge1xuICAgICAgY2FudmFzLnRvQmxvYihmdW5jdGlvbiAoYmxvYikge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShibG9iKTtcbiAgICAgIH0sIG1pbWVUeXBlLCBxdWFsaXR5KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2FudmFzLmNvbnZlcnRUb0Jsb2IpIHtcbiAgICAgIHJlc29sdmUoY2FudmFzLmNvbnZlcnRUb0Jsb2Ioe1xuICAgICAgICB0eXBlOiBtaW1lVHlwZSxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eVxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRmFsbGJhY2sgZm9yIG9sZCBicm93c2Vyc1xuXG5cbiAgICB2YXIgYXNTdHJpbmcgPSBhdG9iKGNhbnZhcy50b0RhdGFVUkwobWltZVR5cGUsIHF1YWxpdHkpLnNwbGl0KCcsJylbMV0pO1xuICAgIHZhciBsZW4gPSBhc1N0cmluZy5sZW5ndGg7XG4gICAgdmFyIGFzQnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGFzQnVmZmVyW2ldID0gYXNTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICB9XG5cbiAgICByZXNvbHZlKG5ldyBCbG9iKFthc0J1ZmZlcl0sIHtcbiAgICAgIHR5cGU6IG1pbWVUeXBlXG4gICAgfSkpO1xuICB9KTtcbn07XG5cblBpY2EucHJvdG90eXBlLmRlYnVnID0gZnVuY3Rpb24gKCkge307XG5cbm1vZHVsZS5leHBvcnRzID0gUGljYTtcblxufSx7XCIuL2xpYi9tYXRobGliXCI6MSxcIi4vbGliL3Bvb2xcIjoxMyxcIi4vbGliL3N0ZXBwZXJcIjoxNCxcIi4vbGliL3RpbGVyXCI6MTUsXCIuL2xpYi91dGlsc1wiOjE2LFwiLi9saWIvd29ya2VyXCI6MTcsXCJvYmplY3QtYXNzaWduXCI6MjMsXCJ3ZWJ3b3JraWZ5XCI6MjR9XX0se30sW10pKFwiL2luZGV4LmpzXCIpXG59KTtcbn0pO1xuXG52YXIgaW1hZ2VfdHJhdmVyc2UgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBIZWxwZXJzXG4vL1xuZnVuY3Rpb24gZXJyb3IobWVzc2FnZSwgY29kZSkge1xuICB2YXIgZXJyID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICBlcnIuY29kZSA9IGNvZGU7XG4gIHJldHVybiBlcnI7XG59XG5cblxuLy8gQ29udmVydCBudW1iZXIgdG8gMHhISCBzdHJpbmdcbi8vXG5mdW5jdGlvbiB0b19oZXgobnVtYmVyKSB7XG4gIHZhciBuID0gbnVtYmVyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuICBmb3IgKHZhciBpID0gMiAtIG4ubGVuZ3RoOyBpID4gMDsgaS0tKSBuID0gJzAnICsgbjtcbiAgcmV0dXJuICcweCcgKyBuO1xufVxuXG5cbmZ1bmN0aW9uIHV0ZjhfZW5jb2RlKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gdXRmOF9kZWNvZGUoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoc3RyKSk7XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuLy8gQ2hlY2sgaWYgaW5wdXQgaXMgYSBVaW50OEFycmF5XG4vL1xuZnVuY3Rpb24gaXNfdWludDhhcnJheShiaW4pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChiaW4pID09PSAnW29iamVjdCBVaW50OEFycmF5XSc7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEV4aWYgcGFyc2VyXG4vL1xuLy8gSW5wdXQ6XG4vLyAgLSBqcGVnX2JpbjogICBVaW50OEFycmF5IC0ganBlZyBmaWxlXG4vLyAgLSBleGlmX3N0YXJ0OiBOdW1iZXIgICAgIC0gc3RhcnQgb2YgVElGRiBoZWFkZXIgKGFmdGVyIEV4aWZcXDBcXDApXG4vLyAgLSBleGlmX2VuZDogICBOdW1iZXIgICAgIC0gZW5kIG9mIEV4aWYgc2VnbWVudFxuLy8gIC0gb25fZW50cnk6ICAgTnVtYmVyICAgICAtIGNhbGxiYWNrXG4vL1xuZnVuY3Rpb24gRXhpZlBhcnNlcihqcGVnX2JpbiwgZXhpZl9zdGFydCwgZXhpZl9lbmQpIHtcbiAgLy8gVWludDhBcnJheSwgZXhpZiB3aXRob3V0IHNpZ25hdHVyZSAod2hpY2ggaXNuJ3QgaW5jbHVkZWQgaW4gb2Zmc2V0cylcbiAgdGhpcy5pbnB1dCAgICAgID0ganBlZ19iaW4uc3ViYXJyYXkoZXhpZl9zdGFydCwgZXhpZl9lbmQpO1xuXG4gIC8vIG9mZnNldCBjb3JyZWN0aW9uIGZvciBgb25fZW50cnlgIGNhbGxiYWNrXG4gIHRoaXMuc3RhcnQgICAgICA9IGV4aWZfc3RhcnQ7XG5cbiAgLy8gQ2hlY2sgVElGRiBoZWFkZXIgKGluY2x1ZGVzIGJ5dGUgYWxpZ25tZW50IGFuZCBmaXJzdCBJRkQgb2Zmc2V0KVxuICB2YXIgc2lnID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCB0aGlzLmlucHV0LnN1YmFycmF5KDAsIDQpKTtcblxuICBpZiAoc2lnICE9PSAnSUlcXHgyQVxcMCcgJiYgc2lnICE9PSAnTU1cXDBcXHgyQScpIHtcbiAgICB0aHJvdyBlcnJvcignaW52YWxpZCBUSUZGIHNpZ25hdHVyZScsICdFQkFEREFUQScpO1xuICB9XG5cbiAgLy8gdHJ1ZSBpZiBtb3Rvcm9sYSAoYmlnIGVuZGlhbikgYnl0ZSBhbGlnbm1lbnQsIGZhbHNlIGlmIGludGVsXG4gIHRoaXMuYmlnX2VuZGlhbiA9IHNpZ1swXSA9PT0gJ00nO1xufVxuXG5cbkV4aWZQYXJzZXIucHJvdG90eXBlLmVhY2ggPSBmdW5jdGlvbiAob25fZW50cnkpIHtcbiAgLy8gYWxsb3cgcHJlbWF0dXJlIGV4aXRcbiAgdGhpcy5hYm9ydGVkID0gZmFsc2U7XG5cbiAgdmFyIG9mZnNldCA9IHRoaXMucmVhZF91aW50MzIoNCk7XG5cbiAgdGhpcy5pZmRzX3RvX3JlYWQgPSBbIHtcbiAgICBpZDogICAgIDAsXG4gICAgb2Zmc2V0OiBvZmZzZXRcbiAgfSBdO1xuXG4gIHdoaWxlICh0aGlzLmlmZHNfdG9fcmVhZC5sZW5ndGggPiAwICYmICF0aGlzLmFib3J0ZWQpIHtcbiAgICB2YXIgaSA9IHRoaXMuaWZkc190b19yZWFkLnNoaWZ0KCk7XG4gICAgaWYgKCFpLm9mZnNldCkgY29udGludWU7XG4gICAgdGhpcy5zY2FuX2lmZChpLmlkLCBpLm9mZnNldCwgb25fZW50cnkpO1xuICB9XG59O1xuXG5cbkV4aWZQYXJzZXIucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChvbl9lbnRyeSkge1xuICB2YXIgaWZkcyA9IHt9O1xuXG4gIC8vIG1ha2Ugc3VyZSBJRkQwIGFsd2F5cyBleGlzdHNcbiAgaWZkcy5pZmQwID0geyBpZDogMCwgZW50cmllczogW10gfTtcblxuICB0aGlzLmVhY2goZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgaWYgKG9uX2VudHJ5KGVudHJ5KSA9PT0gZmFsc2UgJiYgIWVudHJ5LmlzX3N1YmlmZF9saW5rKSByZXR1cm47XG4gICAgaWYgKGVudHJ5LmlzX3N1YmlmZF9saW5rICYmIGVudHJ5LmNvdW50ICE9PSAxICYmIGVudHJ5LmZvcm1hdCAhPT0gNCkgcmV0dXJuOyAvLyBmaWx0ZXIgb3V0IGJvZ3VzIGxpbmtzXG5cbiAgICBpZiAoIWlmZHNbJ2lmZCcgKyBlbnRyeS5pZmRdKSB7XG4gICAgICBpZmRzWydpZmQnICsgZW50cnkuaWZkXSA9IHsgaWQ6IGVudHJ5LmlmZCwgZW50cmllczogW10gfTtcbiAgICB9XG5cbiAgICBpZmRzWydpZmQnICsgZW50cnkuaWZkXS5lbnRyaWVzLnB1c2goZW50cnkpO1xuICB9KTtcblxuICAvLyB0aHVtYm5haWxzIGFyZSBub3Qgc3VwcG9ydGVkIGp1c3QgeWV0LCBzbyBkZWxldGUgYWxsIGluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gaXRcbiAgZGVsZXRlIGlmZHMuaWZkMTtcblxuICAvLyBDYWxjdWxhdGUgb3V0cHV0IHNpemVcbiAgdmFyIGxlbmd0aCA9IDg7XG4gIE9iamVjdC5rZXlzKGlmZHMpLmZvckVhY2goZnVuY3Rpb24gKGlmZF9ubykge1xuICAgIGxlbmd0aCArPSAyO1xuXG4gICAgaWZkc1tpZmRfbm9dLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgIGxlbmd0aCArPSAxMiArIChlbnRyeS5kYXRhX2xlbmd0aCA+IDQgPyBNYXRoLmNlaWwoZW50cnkuZGF0YV9sZW5ndGggLyAyKSAqIDIgOiAwKTtcbiAgICB9KTtcblxuICAgIGxlbmd0aCArPSA0O1xuICB9KTtcblxuICB0aGlzLm91dHB1dCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aCk7XG4gIHRoaXMub3V0cHV0WzBdID0gdGhpcy5vdXRwdXRbMV0gPSAodGhpcy5iaWdfZW5kaWFuID8gJ00nIDogJ0knKS5jaGFyQ29kZUF0KDApO1xuICB0aGlzLndyaXRlX3VpbnQxNigyLCAweDJBKTtcblxuICB2YXIgb2Zmc2V0ID0gODtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLndyaXRlX3VpbnQzMig0LCBvZmZzZXQpO1xuXG4gIE9iamVjdC5rZXlzKGlmZHMpLmZvckVhY2goZnVuY3Rpb24gKGlmZF9ubykge1xuICAgIGlmZHNbaWZkX25vXS53cml0dGVuX29mZnNldCA9IG9mZnNldDtcblxuICAgIHZhciBpZmRfc3RhcnQgPSBvZmZzZXQ7XG4gICAgdmFyIGlmZF9lbmQgICA9IGlmZF9zdGFydCArIDIgKyBpZmRzW2lmZF9ub10uZW50cmllcy5sZW5ndGggKiAxMiArIDQ7XG4gICAgb2Zmc2V0ID0gaWZkX2VuZDtcblxuICAgIHNlbGYud3JpdGVfdWludDE2KGlmZF9zdGFydCwgaWZkc1tpZmRfbm9dLmVudHJpZXMubGVuZ3RoKTtcblxuICAgIGlmZHNbaWZkX25vXS5lbnRyaWVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIC8vIElGRCBlbnRyaWVzIG11c3QgYmUgaW4gb3JkZXIgb2YgaW5jcmVhc2luZyB0YWcgSURzXG4gICAgICByZXR1cm4gYS50YWcgLSBiLnRhZztcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChlbnRyeSwgaWR4KSB7XG4gICAgICB2YXIgZW50cnlfb2Zmc2V0ID0gaWZkX3N0YXJ0ICsgMiArIGlkeCAqIDEyO1xuXG4gICAgICBzZWxmLndyaXRlX3VpbnQxNihlbnRyeV9vZmZzZXQsIGVudHJ5LnRhZyk7XG4gICAgICBzZWxmLndyaXRlX3VpbnQxNihlbnRyeV9vZmZzZXQgKyAyLCBlbnRyeS5mb3JtYXQpO1xuICAgICAgc2VsZi53cml0ZV91aW50MzIoZW50cnlfb2Zmc2V0ICsgNCwgZW50cnkuY291bnQpO1xuXG4gICAgICBpZiAoZW50cnkuaXNfc3ViaWZkX2xpbmspIHtcbiAgICAgICAgLy8gZmlsbGVkIGluIGxhdGVyXG4gICAgICAgIGlmIChpZmRzWydpZmQnICsgZW50cnkudGFnXSkgaWZkc1snaWZkJyArIGVudHJ5LnRhZ10ubGlua19vZmZzZXQgPSBlbnRyeV9vZmZzZXQgKyA4O1xuICAgICAgfSBlbHNlIGlmIChlbnRyeS5kYXRhX2xlbmd0aCA8PSA0KSB7XG4gICAgICAgIHNlbGYub3V0cHV0LnNldChcbiAgICAgICAgICBzZWxmLmlucHV0LnN1YmFycmF5KGVudHJ5LmRhdGFfb2Zmc2V0IC0gc2VsZi5zdGFydCwgZW50cnkuZGF0YV9vZmZzZXQgLSBzZWxmLnN0YXJ0ICsgNCksXG4gICAgICAgICAgZW50cnlfb2Zmc2V0ICsgOFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi53cml0ZV91aW50MzIoZW50cnlfb2Zmc2V0ICsgOCwgb2Zmc2V0KTtcbiAgICAgICAgc2VsZi5vdXRwdXQuc2V0KFxuICAgICAgICAgIHNlbGYuaW5wdXQuc3ViYXJyYXkoZW50cnkuZGF0YV9vZmZzZXQgLSBzZWxmLnN0YXJ0LCBlbnRyeS5kYXRhX29mZnNldCAtIHNlbGYuc3RhcnQgKyBlbnRyeS5kYXRhX2xlbmd0aCksXG4gICAgICAgICAgb2Zmc2V0XG4gICAgICAgICk7XG4gICAgICAgIG9mZnNldCArPSBNYXRoLmNlaWwoZW50cnkuZGF0YV9sZW5ndGggLyAyKSAqIDI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgbmV4dF9pZmQgPSBpZmRzWydpZmQnICsgKGlmZHNbaWZkX25vXS5pZCArIDEpXTtcbiAgICBpZiAobmV4dF9pZmQpIG5leHRfaWZkLmxpbmtfb2Zmc2V0ID0gaWZkX2VuZCAtIDQ7XG4gIH0pO1xuXG4gIE9iamVjdC5rZXlzKGlmZHMpLmZvckVhY2goZnVuY3Rpb24gKGlmZF9ubykge1xuICAgIGlmIChpZmRzW2lmZF9ub10ud3JpdHRlbl9vZmZzZXQgJiYgaWZkc1tpZmRfbm9dLmxpbmtfb2Zmc2V0KSB7XG4gICAgICBzZWxmLndyaXRlX3VpbnQzMihpZmRzW2lmZF9ub10ubGlua19vZmZzZXQsIGlmZHNbaWZkX25vXS53cml0dGVuX29mZnNldCk7XG4gICAgfVxuICB9KTtcblxuICBpZiAodGhpcy5vdXRwdXQubGVuZ3RoICE9PSBvZmZzZXQpIHRocm93IGVycm9yKCdpbnRlcm5hbCBlcnJvcjogaW5jb3JyZWN0IGJ1ZmZlciBzaXplIGFsbG9jYXRlZCcpO1xuXG4gIHJldHVybiB0aGlzLm91dHB1dDtcbn07XG5cblxuRXhpZlBhcnNlci5wcm90b3R5cGUucmVhZF91aW50MTYgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gIHZhciBkID0gdGhpcy5pbnB1dDtcbiAgaWYgKG9mZnNldCArIDIgPiBkLmxlbmd0aCkgdGhyb3cgZXJyb3IoJ3VuZXhwZWN0ZWQgRU9GJywgJ0VCQUREQVRBJyk7XG5cbiAgcmV0dXJuIHRoaXMuYmlnX2VuZGlhbiA/XG4gICAgZFtvZmZzZXRdICogMHgxMDAgKyBkW29mZnNldCArIDFdIDpcbiAgICBkW29mZnNldF0gKyBkW29mZnNldCArIDFdICogMHgxMDA7XG59O1xuXG5cbkV4aWZQYXJzZXIucHJvdG90eXBlLnJlYWRfdWludDMyID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICB2YXIgZCA9IHRoaXMuaW5wdXQ7XG4gIGlmIChvZmZzZXQgKyA0ID4gZC5sZW5ndGgpIHRocm93IGVycm9yKCd1bmV4cGVjdGVkIEVPRicsICdFQkFEREFUQScpO1xuXG4gIHJldHVybiB0aGlzLmJpZ19lbmRpYW4gP1xuICAgIGRbb2Zmc2V0XSAqIDB4MTAwMDAwMCArIGRbb2Zmc2V0ICsgMV0gKiAweDEwMDAwICsgZFtvZmZzZXQgKyAyXSAqIDB4MTAwICsgZFtvZmZzZXQgKyAzXSA6XG4gICAgZFtvZmZzZXRdICsgZFtvZmZzZXQgKyAxXSAqIDB4MTAwICsgZFtvZmZzZXQgKyAyXSAqIDB4MTAwMDAgKyBkW29mZnNldCArIDNdICogMHgxMDAwMDAwO1xufTtcblxuXG5FeGlmUGFyc2VyLnByb3RvdHlwZS53cml0ZV91aW50MTYgPSBmdW5jdGlvbiAob2Zmc2V0LCB2YWx1ZSkge1xuICB2YXIgZCA9IHRoaXMub3V0cHV0O1xuXG4gIGlmICh0aGlzLmJpZ19lbmRpYW4pIHtcbiAgICBkW29mZnNldF0gICAgID0gKHZhbHVlID4+PiA4KSAmIDB4RkY7XG4gICAgZFtvZmZzZXQgKyAxXSA9IHZhbHVlICYgMHhGRjtcbiAgfSBlbHNlIHtcbiAgICBkW29mZnNldF0gICAgID0gdmFsdWUgJiAweEZGO1xuICAgIGRbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpICYgMHhGRjtcbiAgfVxufTtcblxuXG5FeGlmUGFyc2VyLnByb3RvdHlwZS53cml0ZV91aW50MzIgPSBmdW5jdGlvbiAob2Zmc2V0LCB2YWx1ZSkge1xuICB2YXIgZCA9IHRoaXMub3V0cHV0O1xuXG4gIGlmICh0aGlzLmJpZ19lbmRpYW4pIHtcbiAgICBkW29mZnNldF0gICAgID0gKHZhbHVlID4+PiAyNCkgJiAweEZGO1xuICAgIGRbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KSAmIDB4RkY7XG4gICAgZFtvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOCkgJiAweEZGO1xuICAgIGRbb2Zmc2V0ICsgM10gPSB2YWx1ZSAmIDB4RkY7XG4gIH0gZWxzZSB7XG4gICAgZFtvZmZzZXRdICAgICA9IHZhbHVlICYgMHhGRjtcbiAgICBkW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KSAmIDB4RkY7XG4gICAgZFtvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpICYgMHhGRjtcbiAgICBkW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNCkgJiAweEZGO1xuICB9XG59O1xuXG5cbkV4aWZQYXJzZXIucHJvdG90eXBlLmlzX3N1YmlmZF9saW5rID0gZnVuY3Rpb24gKGlmZCwgdGFnKSB7XG4gIHJldHVybiAoaWZkID09PSAwICYmIHRhZyA9PT0gMHg4NzY5KSB8fCAvLyBTdWJJRkRcbiAgICAgICAgIChpZmQgPT09IDAgJiYgdGFnID09PSAweDg4MjUpIHx8IC8vIEdQUyBJbmZvXG4gICAgICAgICAoaWZkID09PSAweDg3NjkgJiYgdGFnID09PSAweEEwMDUpOyAvLyBJbnRlcm9wIElGRFxufTtcblxuXG4vLyBSZXR1cm5zIGJ5dGUgbGVuZ3RoIG9mIGEgc2luZ2xlIGNvbXBvbmVudCBvZiBhIGdpdmVuIGZvcm1hdFxuLy9cbkV4aWZQYXJzZXIucHJvdG90eXBlLmV4aWZfZm9ybWF0X2xlbmd0aCA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICBjYXNlIDE6IC8vIGJ5dGVcbiAgICBjYXNlIDI6IC8vIGFzY2lpXG4gICAgY2FzZSA2OiAvLyBzYnl0ZVxuICAgIGNhc2UgNzogLy8gdW5kZWZpbmVkXG4gICAgICByZXR1cm4gMTtcblxuICAgIGNhc2UgMzogLy8gc2hvcnRcbiAgICBjYXNlIDg6IC8vIHNzaG9ydFxuICAgICAgcmV0dXJuIDI7XG5cbiAgICBjYXNlIDQ6ICAvLyBsb25nXG4gICAgY2FzZSA5OiAgLy8gc2xvbmdcbiAgICBjYXNlIDExOiAvLyBmbG9hdFxuICAgICAgcmV0dXJuIDQ7XG5cbiAgICBjYXNlIDU6ICAvLyByYXRpb25hbFxuICAgIGNhc2UgMTA6IC8vIHNyYXRpb25hbFxuICAgIGNhc2UgMTI6IC8vIGRvdWJsZVxuICAgICAgcmV0dXJuIDg7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gdW5rbm93biB0eXBlXG4gICAgICByZXR1cm4gMDtcbiAgfVxufTtcblxuXG4vLyBSZWFkcyBFeGlmIGRhdGFcbi8vXG5FeGlmUGFyc2VyLnByb3RvdHlwZS5leGlmX2Zvcm1hdF9yZWFkID0gZnVuY3Rpb24gKGZvcm1hdCwgb2Zmc2V0KSB7XG4gIHZhciB2O1xuXG4gIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgY2FzZSAxOiAvLyBieXRlXG4gICAgY2FzZSAyOiAvLyBhc2NpaVxuICAgICAgdiA9IHRoaXMuaW5wdXRbb2Zmc2V0XTtcbiAgICAgIHJldHVybiB2O1xuXG4gICAgY2FzZSA2OiAvLyBzYnl0ZVxuICAgICAgdiA9IHRoaXMuaW5wdXRbb2Zmc2V0XTtcbiAgICAgIHJldHVybiB2IHwgKHYgJiAweDgwKSAqIDB4MWZmZmZmZTtcblxuICAgIGNhc2UgMzogLy8gc2hvcnRcbiAgICAgIHYgPSB0aGlzLnJlYWRfdWludDE2KG9mZnNldCk7XG4gICAgICByZXR1cm4gdjtcblxuICAgIGNhc2UgODogLy8gc3Nob3J0XG4gICAgICB2ID0gdGhpcy5yZWFkX3VpbnQxNihvZmZzZXQpO1xuICAgICAgcmV0dXJuIHYgfCAodiAmIDB4ODAwMCkgKiAweDFmZmZlO1xuXG4gICAgY2FzZSA0OiAvLyBsb25nXG4gICAgICB2ID0gdGhpcy5yZWFkX3VpbnQzMihvZmZzZXQpO1xuICAgICAgcmV0dXJuIHY7XG5cbiAgICBjYXNlIDk6IC8vIHNsb25nXG4gICAgICB2ID0gdGhpcy5yZWFkX3VpbnQzMihvZmZzZXQpO1xuICAgICAgcmV0dXJuIHYgfCAwO1xuXG4gICAgY2FzZSA1OiAgLy8gcmF0aW9uYWxcbiAgICBjYXNlIDEwOiAvLyBzcmF0aW9uYWxcbiAgICBjYXNlIDExOiAvLyBmbG9hdFxuICAgIGNhc2UgMTI6IC8vIGRvdWJsZVxuICAgICAgcmV0dXJuIG51bGw7IC8vIG5vdCBpbXBsZW1lbnRlZFxuXG4gICAgY2FzZSA3OiAvLyB1bmRlZmluZWRcbiAgICAgIHJldHVybiBudWxsOyAvLyBibG9iXG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gdW5rbm93biB0eXBlXG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuXG5FeGlmUGFyc2VyLnByb3RvdHlwZS5zY2FuX2lmZCA9IGZ1bmN0aW9uIChpZmRfbm8sIG9mZnNldCwgb25fZW50cnkpIHtcbiAgdmFyIGVudHJ5X2NvdW50ID0gdGhpcy5yZWFkX3VpbnQxNihvZmZzZXQpO1xuXG4gIG9mZnNldCArPSAyO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZW50cnlfY291bnQ7IGkrKykge1xuICAgIHZhciB0YWcgICAgPSB0aGlzLnJlYWRfdWludDE2KG9mZnNldCk7XG4gICAgdmFyIGZvcm1hdCA9IHRoaXMucmVhZF91aW50MTYob2Zmc2V0ICsgMik7XG4gICAgdmFyIGNvdW50ICA9IHRoaXMucmVhZF91aW50MzIob2Zmc2V0ICsgNCk7XG5cbiAgICB2YXIgY29tcF9sZW5ndGggICAgPSB0aGlzLmV4aWZfZm9ybWF0X2xlbmd0aChmb3JtYXQpO1xuICAgIHZhciBkYXRhX2xlbmd0aCAgICA9IGNvdW50ICogY29tcF9sZW5ndGg7XG4gICAgdmFyIGRhdGFfb2Zmc2V0ICAgID0gZGF0YV9sZW5ndGggPD0gNCA/IG9mZnNldCArIDggOiB0aGlzLnJlYWRfdWludDMyKG9mZnNldCArIDgpO1xuICAgIHZhciBpc19zdWJpZmRfbGluayA9IGZhbHNlO1xuXG4gICAgaWYgKGRhdGFfb2Zmc2V0ICsgZGF0YV9sZW5ndGggPiB0aGlzLmlucHV0Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgZXJyb3IoJ3VuZXhwZWN0ZWQgRU9GJywgJ0VCQUREQVRBJyk7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gW107XG4gICAgdmFyIGNvbXBfb2Zmc2V0ID0gZGF0YV9vZmZzZXQ7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNvdW50OyBqKyssIGNvbXBfb2Zmc2V0ICs9IGNvbXBfbGVuZ3RoKSB7XG4gICAgICB2YXIgaXRlbSA9IHRoaXMuZXhpZl9mb3JtYXRfcmVhZChmb3JtYXQsIGNvbXBfb2Zmc2V0KTtcbiAgICAgIGlmIChpdGVtID09PSBudWxsKSB7XG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB2YWx1ZS5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiBmb3JtYXQgPT09IDIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhbHVlID0gdXRmOF9kZWNvZGUoU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCB2YWx1ZSkpO1xuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXSA9PT0gJ1xcMCcpIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgLTEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzX3N1YmlmZF9saW5rKGlmZF9ubywgdGFnKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIE51bWJlci5pc0ludGVnZXIodmFsdWVbMF0pICYmIHZhbHVlWzBdID4gMCkge1xuICAgICAgICB0aGlzLmlmZHNfdG9fcmVhZC5wdXNoKHtcbiAgICAgICAgICBpZDogICAgIHRhZyxcbiAgICAgICAgICBvZmZzZXQ6IHZhbHVlWzBdXG4gICAgICAgIH0pO1xuICAgICAgICBpc19zdWJpZmRfbGluayA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGVudHJ5ID0ge1xuICAgICAgaXNfYmlnX2VuZGlhbjogIHRoaXMuYmlnX2VuZGlhbixcbiAgICAgIGlmZDogICAgICAgICAgICBpZmRfbm8sXG4gICAgICB0YWc6ICAgICAgICAgICAgdGFnLFxuICAgICAgZm9ybWF0OiAgICAgICAgIGZvcm1hdCxcbiAgICAgIGNvdW50OiAgICAgICAgICBjb3VudCxcbiAgICAgIGVudHJ5X29mZnNldDogICBvZmZzZXQgKyB0aGlzLnN0YXJ0LFxuICAgICAgZGF0YV9sZW5ndGg6ICAgIGRhdGFfbGVuZ3RoLFxuICAgICAgZGF0YV9vZmZzZXQ6ICAgIGRhdGFfb2Zmc2V0ICsgdGhpcy5zdGFydCxcbiAgICAgIHZhbHVlOiAgICAgICAgICB2YWx1ZSxcbiAgICAgIGlzX3N1YmlmZF9saW5rOiBpc19zdWJpZmRfbGlua1xuICAgIH07XG5cbiAgICBpZiAob25fZW50cnkoZW50cnkpID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvZmZzZXQgKz0gMTI7XG4gIH1cblxuICBpZiAoaWZkX25vID09PSAwKSB7XG4gICAgdGhpcy5pZmRzX3RvX3JlYWQucHVzaCh7XG4gICAgICBpZDogICAgIDEsXG4gICAgICBvZmZzZXQ6IHRoaXMucmVhZF91aW50MzIob2Zmc2V0KVxuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIENoZWNrIHdoZXRoZXIgaW5wdXQgaXMgYSBKUEVHIGltYWdlXG4vL1xuLy8gSW5wdXQ6XG4vLyAgLSBqcGVnX2JpbjogVWludDhBcnJheSAtIGpwZWcgZmlsZVxuLy9cbi8vIFJldHVybnMgdHJ1ZSBpZiBpdCBpcyBhbmQgZmFsc2Ugb3RoZXJ3aXNlXG4vL1xubW9kdWxlLmV4cG9ydHMuaXNfanBlZyA9IGZ1bmN0aW9uIChqcGVnX2Jpbikge1xuICByZXR1cm4ganBlZ19iaW4ubGVuZ3RoID49IDQgJiYganBlZ19iaW5bMF0gPT09IDB4RkYgJiYganBlZ19iaW5bMV0gPT09IDB4RDggJiYganBlZ19iaW5bMl0gPT09IDB4RkY7XG59O1xuXG5cbi8vIENhbGwgYW4gaXRlcmF0b3Igb24gZWFjaCBzZWdtZW50IGluIHRoZSBnaXZlbiBKUEVHIGltYWdlXG4vL1xuLy8gSW5wdXQ6XG4vLyAgLSBqcGVnX2JpbjogICBVaW50OEFycmF5IC0ganBlZyBmaWxlXG4vLyAgLSBvbl9zZWdtZW50OiBGdW5jdGlvbiAtIGNhbGxiYWNrIGV4ZWN1dGVkIG9uIGVhY2ggSlBFRyBtYXJrZXIgc2VnbWVudFxuLy8gICAgLSBzZWdtZW50OiAgT2JqZWN0XG4vLyAgICAgIC0gY29kZTogICBOdW1iZXIgLSBtYXJrZXIgdHlwZSAoMm5kIGJ5dGUsIGUuZy4gMHhFMCBmb3IgQVBQMClcbi8vICAgICAgLSBvZmZzZXQ6IE51bWJlciAtIG9mZnNldCBvZiB0aGUgZmlyc3QgYnl0ZSAoMHhGRikgcmVsYXRpdmUgdG8gYGpwZWdfYmluYCBzdGFydFxuLy8gICAgICAtIGxlbmd0aDogTnVtYmVyIC0gbGVuZ3RoIG9mIHRoZSBlbnRpcmUgbWFya2VyIHNlZ21lbnQgaW5jbHVkaW5nIGZpcnN0IHR3byBieXRlcyBhbmQgbGVuZ3RoXG4vLyAgICAgICAgLSAyIGZvciBzdGFuZGFsb25lIG1hcmtlcnNcbi8vICAgICAgICAtIDQrbGVuZ3RoIGZvciBtYXJrZXJzIHdpdGggZGF0YVxuLy9cbi8vIEl0ZXJhdGlvbiBzdG9wcyB3aGVuIGBFT0lgICgweEZGRDkpIG1hcmtlciBpcyByZWFjaGVkIG9yIGlmIGBvbl9zZWdtZW50YFxuLy8gZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgLlxuLy9cbm1vZHVsZS5leHBvcnRzLmpwZWdfc2VnbWVudHNfZWFjaCA9IGZ1bmN0aW9uIChqcGVnX2Jpbiwgb25fc2VnbWVudCkge1xuICBpZiAoIWlzX3VpbnQ4YXJyYXkoanBlZ19iaW4pKSB7XG4gICAgdGhyb3cgZXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgKGpwZWdfYmluKSwgVWludDhBcnJheSBleHBlY3RlZCcsICdFSU5WQUwnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb25fc2VnbWVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IGVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IChvbl9zZWdtZW50KSwgRnVuY3Rpb24gZXhwZWN0ZWQnLCAnRUlOVkFMJyk7XG4gIH1cblxuICBpZiAoIW1vZHVsZS5leHBvcnRzLmlzX2pwZWcoanBlZ19iaW4pKSB7XG4gICAgdGhyb3cgZXJyb3IoJ1Vua25vd24gZmlsZSBmb3JtYXQnLCAnRU5PVEpQRUcnKTtcbiAgfVxuXG4gIHZhciBvZmZzZXQgPSAwLCBsZW5ndGggPSBqcGVnX2Jpbi5sZW5ndGgsIGluc2lkZV9zY2FuID0gZmFsc2U7XG5cbiAgZm9yICg7Oykge1xuICAgIHZhciBzZWdtZW50X2NvZGUsIHNlZ21lbnRfbGVuZ3RoO1xuXG4gICAgaWYgKG9mZnNldCArIDEgPj0gbGVuZ3RoKSB0aHJvdyBlcnJvcignVW5leHBlY3RlZCBFT0YnLCAnRUJBRERBVEEnKTtcbiAgICB2YXIgYnl0ZTEgPSBqcGVnX2JpbltvZmZzZXRdO1xuICAgIHZhciBieXRlMiA9IGpwZWdfYmluW29mZnNldCArIDFdO1xuXG4gICAgaWYgKGJ5dGUxID09PSAweEZGICYmIGJ5dGUyID09PSAweEZGKSB7XG4gICAgICAvLyBwYWRkaW5nXG4gICAgICBzZWdtZW50X2NvZGUgPSAweEZGO1xuICAgICAgc2VnbWVudF9sZW5ndGggPSAxO1xuXG4gICAgfSBlbHNlIGlmIChieXRlMSA9PT0gMHhGRiAmJiBieXRlMiAhPT0gMCkge1xuICAgICAgLy8gbWFya2VyXG4gICAgICBzZWdtZW50X2NvZGUgPSBieXRlMjtcbiAgICAgIHNlZ21lbnRfbGVuZ3RoID0gMjtcblxuICAgICAgaWYgKCgweEQwIDw9IHNlZ21lbnRfY29kZSAmJiBzZWdtZW50X2NvZGUgPD0gMHhEOSkgfHwgc2VnbWVudF9jb2RlID09PSAweDAxKSA7IGVsc2Uge1xuICAgICAgICBpZiAob2Zmc2V0ICsgMyA+PSBsZW5ndGgpIHRocm93IGVycm9yKCdVbmV4cGVjdGVkIEVPRicsICdFQkFEREFUQScpO1xuICAgICAgICBzZWdtZW50X2xlbmd0aCArPSBqcGVnX2JpbltvZmZzZXQgKyAyXSAqIDB4MTAwICsganBlZ19iaW5bb2Zmc2V0ICsgM107XG4gICAgICAgIGlmIChzZWdtZW50X2xlbmd0aCA8IDIpIHRocm93IGVycm9yKCdJbnZhbGlkIHNlZ21lbnQgbGVuZ3RoJywgJ0VCQUREQVRBJyk7XG4gICAgICAgIGlmIChvZmZzZXQgKyBzZWdtZW50X2xlbmd0aCAtIDEgPj0gbGVuZ3RoKSB0aHJvdyBlcnJvcignVW5leHBlY3RlZCBFT0YnLCAnRUJBRERBVEEnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluc2lkZV9zY2FuKSB7XG4gICAgICAgIGlmIChzZWdtZW50X2NvZGUgPj0gMHhEMCAmJiBzZWdtZW50X2NvZGUgPD0gMHhENykgOyBlbHNlIHtcbiAgICAgICAgICBpbnNpZGVfc2NhbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWdtZW50X2NvZGUgPT09IDB4REEgLyogU09TICovKSBpbnNpZGVfc2NhbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChpbnNpZGVfc2Nhbikge1xuICAgICAgLy8gZW50cm9weS1lbmNvZGVkIHNlZ21lbnRcbiAgICAgIGZvciAodmFyIHBvcyA9IG9mZnNldCArIDE7IDsgcG9zKyspIHtcbiAgICAgICAgLy8gc2NhbiB1bnRpbCB3ZSBmaW5kIEZGXG4gICAgICAgIGlmIChwb3MgPj0gbGVuZ3RoKSB0aHJvdyBlcnJvcignVW5leHBlY3RlZCBFT0YnLCAnRUJBRERBVEEnKTtcbiAgICAgICAgaWYgKGpwZWdfYmluW3Bvc10gPT09IDB4RkYpIHtcbiAgICAgICAgICBpZiAocG9zICsgMSA+PSBsZW5ndGgpIHRocm93IGVycm9yKCdVbmV4cGVjdGVkIEVPRicsICdFQkFEREFUQScpO1xuICAgICAgICAgIGlmIChqcGVnX2Jpbltwb3MgKyAxXSAhPT0gMCkge1xuICAgICAgICAgICAgc2VnbWVudF9jb2RlID0gMDtcbiAgICAgICAgICAgIHNlZ21lbnRfbGVuZ3RoID0gcG9zIC0gb2Zmc2V0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVycm9yKCdVbmV4cGVjdGVkIGJ5dGUgYXQgc2VnbWVudCBzdGFydDogJyArIHRvX2hleChieXRlMSkgK1xuICAgICAgICAnIChvZmZzZXQgJyArIHRvX2hleChvZmZzZXQpICsgJyknLCAnRUJBRERBVEEnKTtcbiAgICB9XG5cbiAgICBpZiAob25fc2VnbWVudCh7IGNvZGU6IHNlZ21lbnRfY29kZSwgb2Zmc2V0OiBvZmZzZXQsIGxlbmd0aDogc2VnbWVudF9sZW5ndGggfSkgPT09IGZhbHNlKSBicmVhaztcbiAgICBpZiAoc2VnbWVudF9jb2RlID09PSAweEQ5IC8qIEVPSSAqLykgYnJlYWs7XG4gICAgb2Zmc2V0ICs9IHNlZ21lbnRfbGVuZ3RoO1xuICB9XG59O1xuXG5cbi8vIFJlcGxhY2Ugb3IgcmVtb3ZlIHNlZ21lbnRzIGluIHRoZSBnaXZlbiBKUEVHIGltYWdlXG4vL1xuLy8gSW5wdXQ6XG4vLyAgLSBqcGVnX2JpbjogICBVaW50OEFycmF5IC0ganBlZyBmaWxlXG4vLyAgLSBvbl9zZWdtZW50OiBGdW5jdGlvbiAtIGNhbGxiYWNrIGV4ZWN1dGVkIG9uIGVhY2ggSlBFRyBtYXJrZXIgc2VnbWVudFxuLy8gICAgLSBzZWdtZW50OiAgT2JqZWN0XG4vLyAgICAgIC0gY29kZTogICBOdW1iZXIgLSBtYXJrZXIgdHlwZSAoMm5kIGJ5dGUsIGUuZy4gMHhFMCBmb3IgQVBQMClcbi8vICAgICAgLSBvZmZzZXQ6IE51bWJlciAtIG9mZnNldCBvZiB0aGUgZmlyc3QgYnl0ZSAoMHhGRikgcmVsYXRpdmUgdG8gYGpwZWdfYmluYCBzdGFydFxuLy8gICAgICAtIGxlbmd0aDogTnVtYmVyIC0gbGVuZ3RoIG9mIHRoZSBlbnRpcmUgbWFya2VyIHNlZ21lbnQgaW5jbHVkaW5nIGZpcnN0IHR3byBieXRlcyBhbmQgbGVuZ3RoXG4vLyAgICAgICAgLSAyIGZvciBzdGFuZGFsb25lIG1hcmtlcnNcbi8vICAgICAgICAtIDQrbGVuZ3RoIGZvciBtYXJrZXJzIHdpdGggZGF0YVxuLy9cbi8vIGBvbl9zZWdtZW50YCBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxuLy8gIC0gYGZhbHNlYCAgICAgICAgLSBzZWdtZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgb3V0cHV0XG4vLyAgLSBVaW50OEFycmF5ICAgICAtIHNlZ21lbnQgaXMgcmVwbGFjZWQgd2l0aCB0aGUgbmV3IGRhdGFcbi8vICAtIFsgVWludDhBcnJheSBdIC0gc2VnbWVudCBpcyByZXBsYWNlZCB3aXRoIHRoZSBuZXcgZGF0YVxuLy8gIC0gYW55dGhpbmcgZWxzZSAgLSBzZWdtZW50IGlzIGNvcGllZCB0byB0aGUgb3V0cHV0IGFzIGlzXG4vL1xuLy8gQW55IGRhdGEgYWZ0ZXIgYEVPSWAgKDB4RkZEOSkgbWFya2VyIGlzIHJlbW92ZWQuXG4vL1xubW9kdWxlLmV4cG9ydHMuanBlZ19zZWdtZW50c19maWx0ZXIgPSBmdW5jdGlvbiAoanBlZ19iaW4sIG9uX3NlZ21lbnQpIHtcbiAgaWYgKCFpc191aW50OGFycmF5KGpwZWdfYmluKSkge1xuICAgIHRocm93IGVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IChqcGVnX2JpbiksIFVpbnQ4QXJyYXkgZXhwZWN0ZWQnLCAnRUlOVkFMJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIG9uX3NlZ21lbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBlcnJvcignSW52YWxpZCBhcmd1bWVudCAob25fc2VnbWVudCksIEZ1bmN0aW9uIGV4cGVjdGVkJywgJ0VJTlZBTCcpO1xuICB9XG5cbiAgdmFyIHJhbmdlcyA9IFtdO1xuICB2YXIgb3V0X2xlbmd0aCA9IDA7XG5cbiAgbW9kdWxlLmV4cG9ydHMuanBlZ19zZWdtZW50c19lYWNoKGpwZWdfYmluLCBmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgIHZhciBuZXdfc2VnbWVudCA9IG9uX3NlZ21lbnQoc2VnbWVudCk7XG5cbiAgICBpZiAoaXNfdWludDhhcnJheShuZXdfc2VnbWVudCkpIHtcbiAgICAgIHJhbmdlcy5wdXNoKHsgZGF0YTogbmV3X3NlZ21lbnQgfSk7XG4gICAgICBvdXRfbGVuZ3RoICs9IG5ld19zZWdtZW50Lmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobmV3X3NlZ21lbnQpKSB7XG4gICAgICBuZXdfc2VnbWVudC5maWx0ZXIoaXNfdWludDhhcnJheSkuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgICByYW5nZXMucHVzaCh7IGRhdGE6IHMgfSk7XG4gICAgICAgIG91dF9sZW5ndGggKz0gcy5sZW5ndGg7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG5ld19zZWdtZW50ICE9PSBmYWxzZSkge1xuICAgICAgdmFyIG5ld19yYW5nZSA9IHsgc3RhcnQ6IHNlZ21lbnQub2Zmc2V0LCBlbmQ6IHNlZ21lbnQub2Zmc2V0ICsgc2VnbWVudC5sZW5ndGggfTtcblxuICAgICAgaWYgKHJhbmdlcy5sZW5ndGggPiAwICYmIHJhbmdlc1tyYW5nZXMubGVuZ3RoIC0gMV0uZW5kID09PSBuZXdfcmFuZ2Uuc3RhcnQpIHtcbiAgICAgICAgcmFuZ2VzW3Jhbmdlcy5sZW5ndGggLSAxXS5lbmQgPSBuZXdfcmFuZ2UuZW5kO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmFuZ2VzLnB1c2gobmV3X3JhbmdlKTtcbiAgICAgIH1cblxuICAgICAgb3V0X2xlbmd0aCArPSBzZWdtZW50Lmxlbmd0aDtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciByZXN1bHQgPSBuZXcgVWludDhBcnJheShvdXRfbGVuZ3RoKTtcbiAgdmFyIG9mZnNldCA9IDA7XG5cbiAgcmFuZ2VzLmZvckVhY2goZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgdmFyIGRhdGEgPSByYW5nZS5kYXRhIHx8IGpwZWdfYmluLnN1YmFycmF5KHJhbmdlLnN0YXJ0LCByYW5nZS5lbmQpO1xuICAgIHJlc3VsdC5zZXQoZGF0YSwgb2Zmc2V0KTtcbiAgICBvZmZzZXQgKz0gZGF0YS5sZW5ndGg7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vIENhbGwgYW4gaXRlcmF0b3Igb24gZWFjaCBFeGlmIGVudHJ5IGluIHRoZSBnaXZlbiBKUEVHIGltYWdlXG4vL1xuLy8gSW5wdXQ6XG4vLyAgLSBqcGVnX2JpbjogVWludDhBcnJheSAtIGpwZWcgZmlsZVxuLy8gIC0gb25fZW50cnk6IEZ1bmN0aW9uIC0gY2FsbGJhY2sgZXhlY3V0ZWQgb24gZWFjaCBFeGlmIGVudHJ5XG4vLyAgICAtIGVudHJ5OiAgT2JqZWN0XG4vLyAgICAgIC0gaXNfYmlnX2VuZGlhbjogIEJvb2xlYW4gLSB3aGV0aGVyIEV4aWYgdXNlcyBiaWcgb3IgbGl0dGxlIGVuZGlhbiBieXRlIGFsaWdubWVudFxuLy8gICAgICAtIGlmZDogICAgICAgICAgICBOdW1iZXIgIC0gSUZEIGlkZW50aWZpZXIgKDAgZm9yIElGRDAsIDEgZm9yIElGRDEsIDB4ODc2OSBmb3IgU3ViSUZELFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAweDg4MjUgZm9yIEdQUyBJbmZvLCAweEEwMDUgZm9yIEludGVyb3AgSUZEKVxuLy8gICAgICAtIHRhZzogICAgICAgICAgICBOdW1iZXIgIC0gZXhpZiBlbnRyeSB0YWcgKDB4MDExMCAtIGNhbWVyYSBuYW1lLCAweDAxMTIgLSBvcmllbnRhdGlvbiwgZXRjLiAtIHNlZSBFeGlmIHNwZWMpXG4vLyAgICAgIC0gZm9ybWF0OiAgICAgICAgIE51bWJlciAgLSBleGlmIGVudHJ5IGZvcm1hdCAoMSAtIGJ5dGUsIDIgLSBhc2NpaSwgMyAtIHNob3J0LCBldGMuIC0gc2VlIEV4aWYgc3BlYylcbi8vICAgICAgLSBjb3VudDogICAgICAgICAgTnVtYmVyICAtIG51bWJlciBvZiBjb21wb25lbnRzIG9mIHRoZSBnaXZlbiBmb3JtYXQgaW5zaWRlIGRhdGFcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHVzdWFsbHkgMSwgb3Igc3RyaW5nIGxlbmd0aCBmb3IgYXNjaWkgZm9ybWF0KVxuLy8gICAgICAtIGVudHJ5X29mZnNldDogICBOdW1iZXIgIC0gc3RhcnQgb2YgRXhpZiBlbnRyeSAoZW50cnkgbGVuZ3RoIGlzIGFsd2F5cyAxMiwgc28gbm90IGluY2x1ZGVkKVxuLy8gICAgICAtIGRhdGFfb2Zmc2V0OiAgICBOdW1iZXIgIC0gc3RhcnQgb2YgZGF0YSBhdHRhY2hlZCB0byBFeGlmIGVudHJ5ICh3aWxsIG92ZXJsYXAgd2l0aCBlbnRyeSBpZiBsZW5ndGggPD0gNClcbi8vICAgICAgLSBkYXRhX2xlbmd0aDogICAgTnVtYmVyICAtIGxlbmd0aCBvZiBkYXRhIGF0dGFjaGVkIHRvIEV4aWYgZW50cnlcbi8vICAgICAgLSB2YWx1ZTogICAgICAgICAgQXJyYXl8U3RyaW5nfE51bGwgLSBvdXIgYmVzdCBhdHRlbXB0IGF0IHBhcnNpbmcgZGF0YSAobm90IGFsbCBmb3JtYXRzIHN1cHBvcnRlZCByaWdodCBub3cpXG4vLyAgICAgIC0gaXNfc3ViaWZkX2xpbms6IEJvb2xlYW4gLSB3aGV0aGVyIHRoaXMgZW50cnkgaXMgcmVjb2duaXplZCB0byBiZSBhIGxpbmsgdG8gc3ViaWZkIChjYW4ndCBmaWx0ZXIgdGhlc2Ugb3V0KVxuLy9cbi8vIEl0ZXJhdGlvbiBzdG9wcyBlYXJseSBpZiBpdGVyYXRvciByZXR1cm5zIGBmYWxzZWAuXG4vL1xuLy8gSWYgRXhpZiB3YXNuJ3QgZm91bmQgYW55d2hlcmUgKGJlZm9yZSBzdGFydCBvZiB0aGUgaW1hZ2UgZGF0YSwgU09TKSxcbi8vIGl0ZXJhdG9yIGlzIG5ldmVyIGV4ZWN1dGVkLlxuLy9cbm1vZHVsZS5leHBvcnRzLmpwZWdfZXhpZl90YWdzX2VhY2ggPSBmdW5jdGlvbiAoanBlZ19iaW4sIG9uX2V4aWZfZW50cnkpIHtcbiAgaWYgKCFpc191aW50OGFycmF5KGpwZWdfYmluKSkge1xuICAgIHRocm93IGVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IChqcGVnX2JpbiksIFVpbnQ4QXJyYXkgZXhwZWN0ZWQnLCAnRUlOVkFMJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIG9uX2V4aWZfZW50cnkgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBlcnJvcignSW52YWxpZCBhcmd1bWVudCAob25fZXhpZl9lbnRyeSksIEZ1bmN0aW9uIGV4cGVjdGVkJywgJ0VJTlZBTCcpO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbiAgbW9kdWxlLmV4cG9ydHMuanBlZ19zZWdtZW50c19lYWNoKGpwZWdfYmluLCBmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgIGlmIChzZWdtZW50LmNvZGUgPT09IDB4REEgLyogU09TICovKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBsb29rIGZvciBBUFAxIHNlZ21lbnQgYW5kIGNvbXBhcmUgaGVhZGVyIHdpdGggJ0V4aWZcXDBcXDAnXG4gICAgaWYgKHNlZ21lbnQuY29kZSA9PT0gMHhFMSAmJiBzZWdtZW50Lmxlbmd0aCA+PSAxMCAmJlxuICAgICAgICBqcGVnX2JpbltzZWdtZW50Lm9mZnNldCArIDRdID09PSAweDQ1ICYmIGpwZWdfYmluW3NlZ21lbnQub2Zmc2V0ICsgNV0gPT09IDB4NzggJiZcbiAgICAgICAganBlZ19iaW5bc2VnbWVudC5vZmZzZXQgKyA2XSA9PT0gMHg2OSAmJiBqcGVnX2JpbltzZWdtZW50Lm9mZnNldCArIDddID09PSAweDY2ICYmXG4gICAgICAgIGpwZWdfYmluW3NlZ21lbnQub2Zmc2V0ICsgOF0gPT09IDB4MDAgJiYganBlZ19iaW5bc2VnbWVudC5vZmZzZXQgKyA5XSA9PT0gMHgwMCkge1xuXG4gICAgICBuZXcgRXhpZlBhcnNlcihqcGVnX2Jpbiwgc2VnbWVudC5vZmZzZXQgKyAxMCwgc2VnbWVudC5vZmZzZXQgKyBzZWdtZW50Lmxlbmd0aCkuZWFjaChvbl9leGlmX2VudHJ5KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG4vLyBSZW1vdmUgRXhpZiBlbnRyaWVzIGluIHRoZSBnaXZlbiBKUEVHIGltYWdlXG4vL1xuLy8gSW5wdXQ6XG4vLyAgLSBqcGVnX2JpbjogVWludDhBcnJheSAtIGpwZWcgZmlsZVxuLy8gIC0gb25fZW50cnk6IEZ1bmN0aW9uIC0gY2FsbGJhY2sgZXhlY3V0ZWQgb24gZWFjaCBFeGlmIGVudHJ5XG4vLyAgICAtIGVudHJ5OiAgT2JqZWN0XG4vLyAgICAgIC0gaXNfYmlnX2VuZGlhbjogIEJvb2xlYW4gLSB3aGV0aGVyIEV4aWYgdXNlcyBiaWcgb3IgbGl0dGxlIGVuZGlhbiBieXRlIGFsaWdubWVudFxuLy8gICAgICAtIGlmZDogICAgICAgICAgICBOdW1iZXIgIC0gSUZEIGlkZW50aWZpZXIgKDAgZm9yIElGRDAsIDEgZm9yIElGRDEsIDB4ODc2OSBmb3IgU3ViSUZELFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMHg4ODI1IGZvciBHUFMgSW5mbywgMHhBMDA1IGZvciBJbnRlcm9wIElGRClcbi8vICAgICAgLSB0YWc6ICAgICAgICAgICAgTnVtYmVyICAtIGV4aWYgZW50cnkgdGFnICgweDAxMTAgLSBjYW1lcmEgbmFtZSwgMHgwMTEyIC0gb3JpZW50YXRpb24sIGV0Yy4gLSBzZWUgRXhpZiBzcGVjKVxuLy8gICAgICAtIGZvcm1hdDogICAgICAgICBOdW1iZXIgIC0gZXhpZiBlbnRyeSBmb3JtYXQgKDEgLSBieXRlLCAyIC0gYXNjaWksIDMgLSBzaG9ydCwgZXRjLiAtIHNlZSBFeGlmIHNwZWMpXG4vLyAgICAgIC0gY291bnQ6ICAgICAgICAgIE51bWJlciAgLSBudW1iZXIgb2YgY29tcG9uZW50cyBvZiB0aGUgZ2l2ZW4gZm9ybWF0IGluc2lkZSBkYXRhXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodXN1YWxseSAxLCBvciBzdHJpbmcgbGVuZ3RoIGZvciBhc2NpaSBmb3JtYXQpXG4vLyAgICAgIC0gZW50cnlfb2Zmc2V0OiAgIE51bWJlciAgLSBzdGFydCBvZiBFeGlmIGVudHJ5IChlbnRyeSBsZW5ndGggaXMgYWx3YXlzIDEyLCBzbyBub3QgaW5jbHVkZWQpXG4vLyAgICAgIC0gZGF0YV9vZmZzZXQ6ICAgIE51bWJlciAgLSBzdGFydCBvZiBkYXRhIGF0dGFjaGVkIHRvIEV4aWYgZW50cnkgKHdpbGwgb3ZlcmxhcCB3aXRoIGVudHJ5IGlmIGxlbmd0aCA8PSA0KVxuLy8gICAgICAtIGRhdGFfbGVuZ3RoOiAgICBOdW1iZXIgIC0gbGVuZ3RoIG9mIGRhdGEgYXR0YWNoZWQgdG8gRXhpZiBlbnRyeVxuLy8gICAgICAtIHZhbHVlOiAgICAgICAgICBBcnJheXxTdHJpbmd8TnVsbCAtIG91ciBiZXN0IGF0dGVtcHQgYXQgcGFyc2luZyBkYXRhIChub3QgYWxsIGZvcm1hdHMgc3VwcG9ydGVkIHJpZ2h0IG5vdylcbi8vICAgICAgLSBpc19zdWJpZmRfbGluazogQm9vbGVhbiAtIHdoZXRoZXIgdGhpcyBlbnRyeSBpcyByZWNvZ25pemVkIHRvIGJlIGEgbGluayB0byBzdWJpZmQgKGNhbid0IGZpbHRlciB0aGVzZSBvdXQpXG4vL1xuLy8gVGhpcyBmdW5jdGlvbiByZW1vdmVzIGZvbGxvd2luZyBmcm9tIEV4aWY6XG4vLyAgLSBhbGwgZW50cmllcyB3aGVyZSBpdGVyYXRvciByZXR1cm5lZCBmYWxzZSAoZXhjZXB0IHN1YmlmZCBsaW5rcyB3aGljaCBhcmUgbWFuZGF0b3J5KVxuLy8gIC0gSUZEMSBhbmQgdGh1bWJuYWlsIGltYWdlICh0aGUgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRvIHJlZHVjZSBmaWxlIHNpemUsXG4vLyAgICBzbyB0aHVtYm5haWwgaXMgdXN1YWxseSB0aGUgZmlyc3QgdGhpbmcgdG8gZ28pXG4vLyAgLSBhbGwgb3RoZXIgZGF0YSB0aGF0IGlzbid0IGluIElGRDAsIFN1YklGRCwgR1BTSUZELCBJbnRlcm9wSUZEXG4vLyAgICAodGhlb3JldGljYWxseSBwb3NzaWJsZSBwcm9wcmlldGFyeSBleHRlbnNpb25zLCBJIGhhdmVuJ3Qgc2VlbiBhbnkgb2YgdGhlc2UgeWV0KVxuLy9cbi8vIENoYW5naW5nIGRhdGEgaW5zaWRlIEV4aWYgZW50cmllcyBpcyBOT1Qgc3VwcG9ydGVkIHlldCAobW9kaWZ5aW5nIGBlbnRyeWAgb2JqZWN0IGluc2lkZSBjYWxsYmFjayBtYXkgYnJlYWsgc3R1ZmYpLlxuLy9cbi8vIElmIEV4aWYgd2Fzbid0IGZvdW5kIGFueXdoZXJlIChiZWZvcmUgc3RhcnQgb2YgdGhlIGltYWdlIGRhdGEsIFNPUyksXG4vLyBpdGVyYXRvciBpcyBuZXZlciBleGVjdXRlZCwgYW5kIG9yaWdpbmFsIEpQRUcgaXMgcmV0dXJuZWQgYXMgaXMuXG4vL1xubW9kdWxlLmV4cG9ydHMuanBlZ19leGlmX3RhZ3NfZmlsdGVyID0gZnVuY3Rpb24gKGpwZWdfYmluLCBvbl9leGlmX2VudHJ5KSB7XG4gIGlmICghaXNfdWludDhhcnJheShqcGVnX2JpbikpIHtcbiAgICB0aHJvdyBlcnJvcignSW52YWxpZCBhcmd1bWVudCAoanBlZ19iaW4pLCBVaW50OEFycmF5IGV4cGVjdGVkJywgJ0VJTlZBTCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvbl9leGlmX2VudHJ5ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgZXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgKG9uX2V4aWZfZW50cnkpLCBGdW5jdGlvbiBleHBlY3RlZCcsICdFSU5WQUwnKTtcbiAgfVxuXG4gIHZhciBzdG9wX3NlYXJjaCA9IGZhbHNlO1xuXG4gIHJldHVybiBtb2R1bGUuZXhwb3J0cy5qcGVnX3NlZ21lbnRzX2ZpbHRlcihqcGVnX2JpbiwgZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICBpZiAoc3RvcF9zZWFyY2gpIHJldHVybjtcbiAgICBpZiAoc2VnbWVudC5jb2RlID09PSAweERBIC8qIFNPUyAqLykgc3RvcF9zZWFyY2ggPSB0cnVlO1xuXG4gICAgLy8gbG9vayBmb3IgQVBQMSBzZWdtZW50IGFuZCBjb21wYXJlIGhlYWRlciB3aXRoICdFeGlmXFwwXFwwJ1xuICAgIGlmIChzZWdtZW50LmNvZGUgPT09IDB4RTEgJiYgc2VnbWVudC5sZW5ndGggPj0gMTAgJiZcbiAgICAgICAganBlZ19iaW5bc2VnbWVudC5vZmZzZXQgKyA0XSA9PT0gMHg0NSAmJiBqcGVnX2JpbltzZWdtZW50Lm9mZnNldCArIDVdID09PSAweDc4ICYmXG4gICAgICAgIGpwZWdfYmluW3NlZ21lbnQub2Zmc2V0ICsgNl0gPT09IDB4NjkgJiYganBlZ19iaW5bc2VnbWVudC5vZmZzZXQgKyA3XSA9PT0gMHg2NiAmJlxuICAgICAgICBqcGVnX2JpbltzZWdtZW50Lm9mZnNldCArIDhdID09PSAweDAwICYmIGpwZWdfYmluW3NlZ21lbnQub2Zmc2V0ICsgOV0gPT09IDB4MDApIHtcblxuICAgICAgdmFyIG5ld19leGlmID0gbmV3IEV4aWZQYXJzZXIoanBlZ19iaW4sIHNlZ21lbnQub2Zmc2V0ICsgMTAsIHNlZ21lbnQub2Zmc2V0ICsgc2VnbWVudC5sZW5ndGgpXG4gICAgICAgIC5maWx0ZXIob25fZXhpZl9lbnRyeSk7XG4gICAgICBpZiAoIW5ld19leGlmKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHZhciBoZWFkZXIgPSBuZXcgVWludDhBcnJheSgxMCk7XG5cbiAgICAgIGhlYWRlci5zZXQoanBlZ19iaW4uc2xpY2Uoc2VnbWVudC5vZmZzZXQsIHNlZ21lbnQub2Zmc2V0ICsgMTApKTtcbiAgICAgIGhlYWRlclsyXSA9ICgobmV3X2V4aWYubGVuZ3RoICsgOCkgPj4+IDgpICYgMHhGRjtcbiAgICAgIGhlYWRlclszXSA9IChuZXdfZXhpZi5sZW5ndGggKyA4KSAmIDB4RkY7XG5cbiAgICAgIHN0b3Bfc2VhcmNoID0gdHJ1ZTtcbiAgICAgIHJldHVybiBbIGhlYWRlciwgbmV3X2V4aWYgXTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG4vLyBJbnNlcnRzIGEgY3VzdG9tIGNvbW1lbnQgbWFya2VyIHNlZ21lbnQgaW50byBKUEVHIGZpbGUuXG4vL1xuLy8gSW5wdXQ6XG4vLyAgLSBqcGVnX2JpbjogVWludDhBcnJheSAtIGpwZWcgZmlsZVxuLy8gIC0gY29tbWVudDogIFN0cmluZ1xuLy9cbi8vIENvbW1lbnQgaXMgaW5zZXJ0ZWQgYWZ0ZXIgZmlyc3QgdHdvIGJ5dGVzIChGRkQ4LCBTT0kpLlxuLy9cbi8vIElmIEpGSUYgKEFQUDApIG1hcmtlciBleGlzdHMgaW1tZWRpYXRlbHkgYWZ0ZXIgU09JIChhcyBtYW5kYXRlZCBieSB0aGUgSkZJRlxuLy8gc3BlYyksIHdlIGluc2VydCBjb21tZW50IGFmdGVyIGl0IGluc3RlYWQuXG4vL1xubW9kdWxlLmV4cG9ydHMuanBlZ19hZGRfY29tbWVudCA9IGZ1bmN0aW9uIChqcGVnX2JpbiwgY29tbWVudCkge1xuICB2YXIgY29tbWVudF9pbnNlcnRlZCA9IGZhbHNlLCBzZWdtZW50X2NvdW50ID0gMDtcblxuICByZXR1cm4gbW9kdWxlLmV4cG9ydHMuanBlZ19zZWdtZW50c19maWx0ZXIoanBlZ19iaW4sIGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgc2VnbWVudF9jb3VudCsrO1xuICAgIGlmIChzZWdtZW50X2NvdW50ID09PSAxICYmIHNlZ21lbnQuY29kZSA9PT0gMHhEOCAvKiBTT0kgICovKSByZXR1cm47XG4gICAgaWYgKHNlZ21lbnRfY291bnQgPT09IDIgJiYgc2VnbWVudC5jb2RlID09PSAweEUwIC8qIEFQUDAgKi8pIHJldHVybjtcblxuICAgIGlmIChjb21tZW50X2luc2VydGVkKSByZXR1cm47XG4gICAgY29tbWVudCA9IHV0ZjhfZW5jb2RlKGNvbW1lbnQpO1xuXG4gICAgLy8gY29tbWVudCBzZWdtZW50XG4gICAgdmFyIGNzZWdtZW50ID0gbmV3IFVpbnQ4QXJyYXkoNSArIGNvbW1lbnQubGVuZ3RoKTtcbiAgICB2YXIgb2Zmc2V0ID0gMDtcblxuICAgIGNzZWdtZW50W29mZnNldCsrXSA9IDB4RkY7XG4gICAgY3NlZ21lbnRbb2Zmc2V0KytdID0gMHhGRTtcbiAgICBjc2VnbWVudFtvZmZzZXQrK10gPSAoKGNvbW1lbnQubGVuZ3RoICsgMykgPj4+IDgpICYgMHhGRjtcbiAgICBjc2VnbWVudFtvZmZzZXQrK10gPSAoY29tbWVudC5sZW5ndGggKyAzKSAmIDB4RkY7XG5cbiAgICBjb21tZW50LnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICBjc2VnbWVudFtvZmZzZXQrK10gPSBjLmNoYXJDb2RlQXQoMCkgJiAweEZGO1xuICAgIH0pO1xuXG4gICAgY3NlZ21lbnRbb2Zmc2V0KytdID0gMDtcbiAgICBjb21tZW50X2luc2VydGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiBbIGNzZWdtZW50LCBqcGVnX2Jpbi5zdWJhcnJheShzZWdtZW50Lm9mZnNldCwgc2VnbWVudC5vZmZzZXQgKyBzZWdtZW50Lmxlbmd0aCkgXTtcbiAgfSk7XG59O1xufSk7XG5cbmZ1bmN0aW9uIGpwZWdfcGF0Y2hfZXhpZihlbnYpIHtcbiAgcmV0dXJuIHRoaXMuX2dldFVpbnQ4QXJyYXkoZW52LmJsb2IpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBlbnYuaXNfanBlZyA9IGltYWdlX3RyYXZlcnNlLmlzX2pwZWcoZGF0YSk7XG5cbiAgICBpZiAoIWVudi5pc19qcGVnKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudik7XG5cbiAgICBlbnYub3JpZ19ibG9iID0gZW52LmJsb2I7XG5cbiAgICB0cnkge1xuICAgICAgdmFyIGV4aWZfaXNfYmlnX2VuZGlhbiwgb3JpZW50YXRpb25fb2Zmc2V0O1xuXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuICAgICAgaW1hZ2VfdHJhdmVyc2UuanBlZ19leGlmX3RhZ3NfZWFjaChkYXRhLCBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgaWYgKGVudHJ5LmlmZCA9PT0gMCAmJiBlbnRyeS50YWcgPT09IDB4MTEyICYmIEFycmF5LmlzQXJyYXkoZW50cnkudmFsdWUpKSB7XG4gICAgICAgICAgZW52Lm9yaWVudGF0aW9uICAgID0gZW50cnkudmFsdWVbMF0gfHwgMTtcbiAgICAgICAgICBleGlmX2lzX2JpZ19lbmRpYW4gPSBlbnRyeS5pc19iaWdfZW5kaWFuO1xuICAgICAgICAgIG9yaWVudGF0aW9uX29mZnNldCA9IGVudHJ5LmRhdGFfb2Zmc2V0O1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChvcmllbnRhdGlvbl9vZmZzZXQpIHtcbiAgICAgICAgdmFyIG9yaWVudGF0aW9uX3BhdGNoID0gZXhpZl9pc19iaWdfZW5kaWFuID9cbiAgICAgICAgICBuZXcgVWludDhBcnJheShbIDAsIDEgXSkgOlxuICAgICAgICAgIG5ldyBVaW50OEFycmF5KFsgMSwgMCBdKTtcblxuICAgICAgICBlbnYuYmxvYiA9IG5ldyBCbG9iKFtcbiAgICAgICAgICBkYXRhLnNsaWNlKDAsIG9yaWVudGF0aW9uX29mZnNldCksXG4gICAgICAgICAgb3JpZW50YXRpb25fcGF0Y2gsXG4gICAgICAgICAgZGF0YS5zbGljZShvcmllbnRhdGlvbl9vZmZzZXQgKyAyKVxuICAgICAgICBdLCB7IHR5cGU6ICdpbWFnZS9qcGVnJyB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChfKSB7fVxuXG4gICAgcmV0dXJuIGVudjtcbiAgfSk7XG59XG5cblxuZnVuY3Rpb24ganBlZ19yb3RhdGVfY2FudmFzKGVudikge1xuICBpZiAoIWVudi5pc19qcGVnKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudik7XG5cbiAgdmFyIG9yaWVudGF0aW9uID0gZW52Lm9yaWVudGF0aW9uIC0gMTtcbiAgaWYgKCFvcmllbnRhdGlvbikgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnYpO1xuXG4gIHZhciBjYW52YXM7XG5cbiAgaWYgKG9yaWVudGF0aW9uICYgNCkge1xuICAgIGNhbnZhcyA9IHRoaXMucGljYS5vcHRpb25zLmNyZWF0ZUNhbnZhcyhlbnYub3V0X2NhbnZhcy5oZWlnaHQsIGVudi5vdXRfY2FudmFzLndpZHRoKTtcbiAgfSBlbHNlIHtcbiAgICBjYW52YXMgPSB0aGlzLnBpY2Eub3B0aW9ucy5jcmVhdGVDYW52YXMoZW52Lm91dF9jYW52YXMud2lkdGgsIGVudi5vdXRfY2FudmFzLmhlaWdodCk7XG4gIH1cblxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgY3R4LnNhdmUoKTtcblxuICBpZiAob3JpZW50YXRpb24gJiAxKSBjdHgudHJhbnNmb3JtKC0xLCAwLCAwLCAxLCBjYW52YXMud2lkdGgsIDApO1xuICBpZiAob3JpZW50YXRpb24gJiAyKSBjdHgudHJhbnNmb3JtKC0xLCAwLCAwLCAtMSwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgaWYgKG9yaWVudGF0aW9uICYgNCkgY3R4LnRyYW5zZm9ybSgwLCAxLCAxLCAwLCAwLCAwKTtcblxuICBjdHguZHJhd0ltYWdlKGVudi5vdXRfY2FudmFzLCAwLCAwKTtcbiAgY3R4LnJlc3RvcmUoKTtcblxuICAvLyBTYWZhcmkgMTIgd29ya2Fyb3VuZFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWNhL3BpY2EvaXNzdWVzLzE5OVxuICBlbnYub3V0X2NhbnZhcy53aWR0aCA9IGVudi5vdXRfY2FudmFzLmhlaWdodCA9IDA7XG5cbiAgZW52Lm91dF9jYW52YXMgPSBjYW52YXM7XG5cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnYpO1xufVxuXG5cbmZ1bmN0aW9uIGpwZWdfYXR0YWNoX29yaWdfc2VnbWVudHMoZW52KSB7XG4gIGlmICghZW52LmlzX2pwZWcpIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW52KTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgIHRoaXMuX2dldFVpbnQ4QXJyYXkoZW52LmJsb2IpLFxuICAgIHRoaXMuX2dldFVpbnQ4QXJyYXkoZW52Lm91dF9ibG9iKVxuICBdKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICB2YXIgZGF0YSA9IHJlc1swXTtcbiAgICB2YXIgZGF0YV9vdXQgPSByZXNbMV07XG5cbiAgICBpZiAoIWltYWdlX3RyYXZlcnNlLmlzX2pwZWcoZGF0YSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW52KTtcblxuICAgIHZhciBzZWdtZW50cyA9IFtdO1xuXG4gICAgaW1hZ2VfdHJhdmVyc2UuanBlZ19zZWdtZW50c19lYWNoKGRhdGEsIGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICBpZiAoc2VnbWVudC5jb2RlID09PSAweERBIC8qIFNPUyAqLykgcmV0dXJuIGZhbHNlO1xuICAgICAgc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICB9KTtcblxuICAgIHNlZ21lbnRzID0gc2VnbWVudHNcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgLy8gRHJvcCBJQ0NfUFJPRklMRVxuICAgICAgICAvL1xuICAgICAgICBpZiAoc2VnbWVudC5jb2RlID09PSAweEUyKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLy8gS2VlcCBhbGwgQVBQbiBzZWdtZW50cyBleGNsdWRpbmcgQVBQMiAoSUNDX1BST0ZJTEUpLFxuICAgICAgICAvLyByZW1vdmUgb3RoZXJzIGJlY2F1c2UgbW9zdCBvZiB0aGVtIGRlcGVuZCBvbiBpbWFnZSBkYXRhIChEQ1QgYW5kIHN1Y2gpLlxuICAgICAgICAvL1xuICAgICAgICAvLyBBUFAwIC0gSkZJRiwgQVBQMSAtIEV4aWYsIHRoZSByZXN0IGFyZSBwaG90b3Nob3AgbWV0YWRhdGEgYW5kIHN1Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gU2VlIGZ1bGwgbGlzdCBhdCBodHRwczovL3d3dy53My5vcmcvR3JhcGhpY3MvSlBFRy9pdHUtdDgxLnBkZiAodGFibGUgQi4xIG9uIHBhZ2UgMzIpXG4gICAgICAgIC8vXG4gICAgICAgIGlmIChzZWdtZW50LmNvZGUgPj0gMHhFMCAmJiBzZWdtZW50LmNvZGUgPCAweEYwKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAvLyBLZWVwIGNvbW1lbnRzXG4gICAgICAgIC8vXG4gICAgICAgIGlmIChzZWdtZW50LmNvZGUgPT09IDB4RkUpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAubWFwKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgIHJldHVybiBkYXRhLnNsaWNlKHNlZ21lbnQub2Zmc2V0LCBzZWdtZW50Lm9mZnNldCArIHNlZ21lbnQubGVuZ3RoKTtcbiAgICAgIH0pO1xuXG4gICAgZW52Lm91dF9ibG9iID0gbmV3IEJsb2IoXG4gICAgICAvLyBpbnRlbnRpb25hbGx5IG9taXR0aW5nIGV4cGVjdGVkIEpGSUYgc2VnbWVudCAob2Zmc2V0IDIgdG8gMjApXG4gICAgICBbIGRhdGFfb3V0LnNsaWNlKDAsIDIpIF0uY29uY2F0KHNlZ21lbnRzKS5jb25jYXQoWyBkYXRhX291dC5zbGljZSgyMCkgXSksXG4gICAgICB7IHR5cGU6ICdpbWFnZS9qcGVnJyB9XG4gICAgKTtcblxuICAgIHJldHVybiBlbnY7XG4gIH0pO1xufVxuXG5cbmZ1bmN0aW9uIGFzc2lnbihyZWR1Y2VyKSB7XG4gIHJlZHVjZXIuYmVmb3JlKCdfYmxvYl90b19pbWFnZScsIGpwZWdfcGF0Y2hfZXhpZik7XG4gIHJlZHVjZXIuYWZ0ZXIoJ190cmFuc2Zvcm0nLCAgICAgIGpwZWdfcm90YXRlX2NhbnZhcyk7XG4gIHJlZHVjZXIuYWZ0ZXIoJ19jcmVhdGVfYmxvYicsICAgIGpwZWdfYXR0YWNoX29yaWdfc2VnbWVudHMpO1xufVxuXG5cbnZhciBqcGVnX3BhdGNoX2V4aWZfMSA9IGpwZWdfcGF0Y2hfZXhpZjtcbnZhciBqcGVnX3JvdGF0ZV9jYW52YXNfMSA9IGpwZWdfcm90YXRlX2NhbnZhcztcbnZhciBqcGVnX2F0dGFjaF9vcmlnX3NlZ21lbnRzXzEgPSBqcGVnX2F0dGFjaF9vcmlnX3NlZ21lbnRzO1xudmFyIGFzc2lnbl8xID0gYXNzaWduO1xuXG52YXIganBlZ19wbHVnaW5zID0ge1xuXHRqcGVnX3BhdGNoX2V4aWY6IGpwZWdfcGF0Y2hfZXhpZl8xLFxuXHRqcGVnX3JvdGF0ZV9jYW52YXM6IGpwZWdfcm90YXRlX2NhbnZhc18xLFxuXHRqcGVnX2F0dGFjaF9vcmlnX3NlZ21lbnRzOiBqcGVnX2F0dGFjaF9vcmlnX3NlZ21lbnRzXzEsXG5cdGFzc2lnbjogYXNzaWduXzFcbn07XG5cbmZ1bmN0aW9uIEltYWdlQmxvYlJlZHVjZShvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBJbWFnZUJsb2JSZWR1Y2UpKSByZXR1cm4gbmV3IEltYWdlQmxvYlJlZHVjZShvcHRpb25zKTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB0aGlzLnBpY2EgPSBvcHRpb25zLnBpY2EgfHwgcGljYSh7fSk7XG4gIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICB0aGlzLnV0aWxzID0gdXRpbHM7XG59XG5cblxuSW1hZ2VCbG9iUmVkdWNlLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiAocGx1Z2luIC8qLCBwYXJhbXMsIC4uLiAqLykge1xuICB2YXIgYXJncyA9IFsgdGhpcyBdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgcGx1Z2luLmFwcGx5KHBsdWdpbiwgYXJncyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG5JbWFnZUJsb2JSZWR1Y2UucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMudXNlKGpwZWdfcGx1Z2lucy5hc3NpZ24pO1xufTtcblxuXG5JbWFnZUJsb2JSZWR1Y2UucHJvdG90eXBlLnRvQmxvYiA9IGZ1bmN0aW9uIChibG9iLCBvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gdXRpbHMuYXNzaWduKHsgbWF4OiBJbmZpbml0eSB9LCBvcHRpb25zKTtcbiAgdmFyIGVudiA9IHtcbiAgICBibG9iOiBibG9iLFxuICAgIG9wdHM6IG9wdHNcbiAgfTtcblxuICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW52KVxuICAgIC50aGVuKHRoaXMuX2Jsb2JfdG9faW1hZ2UpXG4gICAgLnRoZW4odGhpcy5fY2FsY3VsYXRlX3NpemUpXG4gICAgLnRoZW4odGhpcy5fdHJhbnNmb3JtKVxuICAgIC50aGVuKHRoaXMuX2NsZWFudXApXG4gICAgLnRoZW4odGhpcy5fY3JlYXRlX2Jsb2IpXG4gICAgLnRoZW4oZnVuY3Rpb24gKF9lbnYpIHtcbiAgICAgIC8vIFNhZmFyaSAxMiB3b3JrYXJvdW5kXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWNhL3BpY2EvaXNzdWVzLzE5OVxuICAgICAgX2Vudi5vdXRfY2FudmFzLndpZHRoID0gX2Vudi5vdXRfY2FudmFzLmhlaWdodCA9IDA7XG5cbiAgICAgIHJldHVybiBfZW52Lm91dF9ibG9iO1xuICAgIH0pO1xufTtcblxuXG5JbWFnZUJsb2JSZWR1Y2UucHJvdG90eXBlLnRvQ2FudmFzID0gZnVuY3Rpb24gKGJsb2IsIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSB1dGlscy5hc3NpZ24oeyBtYXg6IEluZmluaXR5IH0sIG9wdGlvbnMpO1xuICB2YXIgZW52ID0ge1xuICAgIGJsb2I6IGJsb2IsXG4gICAgb3B0czogb3B0c1xuICB9O1xuXG4gIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnYpXG4gICAgLnRoZW4odGhpcy5fYmxvYl90b19pbWFnZSlcbiAgICAudGhlbih0aGlzLl9jYWxjdWxhdGVfc2l6ZSlcbiAgICAudGhlbih0aGlzLl90cmFuc2Zvcm0pXG4gICAgLnRoZW4odGhpcy5fY2xlYW51cClcbiAgICAudGhlbihmdW5jdGlvbiAoX2VudikgeyByZXR1cm4gX2Vudi5vdXRfY2FudmFzOyB9KTtcbn07XG5cblxuSW1hZ2VCbG9iUmVkdWNlLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbiAobWV0aG9kX25hbWUsIGZuKSB7XG4gIGlmICghdGhpc1ttZXRob2RfbmFtZV0pIHRocm93IG5ldyBFcnJvcignTWV0aG9kIFwiJyArIG1ldGhvZF9uYW1lICsgJ1wiIGRvZXMgbm90IGV4aXN0Jyk7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudCBcImZuXCIsIGZ1bmN0aW9uIGV4cGVjdGVkJyk7XG5cbiAgdmFyIG9sZF9mbiA9IHRoaXNbbWV0aG9kX25hbWVdO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdGhpc1ttZXRob2RfbmFtZV0gPSBmdW5jdGlvbiAoZW52KSB7XG4gICAgcmV0dXJuIGZuLmNhbGwoc2VsZiwgZW52KS50aGVuKGZ1bmN0aW9uIChfZW52KSB7XG4gICAgICByZXR1cm4gb2xkX2ZuLmNhbGwoc2VsZiwgX2Vudik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbkltYWdlQmxvYlJlZHVjZS5wcm90b3R5cGUuYWZ0ZXIgPSBmdW5jdGlvbiAobWV0aG9kX25hbWUsIGZuKSB7XG4gIGlmICghdGhpc1ttZXRob2RfbmFtZV0pIHRocm93IG5ldyBFcnJvcignTWV0aG9kIFwiJyArIG1ldGhvZF9uYW1lICsgJ1wiIGRvZXMgbm90IGV4aXN0Jyk7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudCBcImZuXCIsIGZ1bmN0aW9uIGV4cGVjdGVkJyk7XG5cbiAgdmFyIG9sZF9mbiA9IHRoaXNbbWV0aG9kX25hbWVdO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdGhpc1ttZXRob2RfbmFtZV0gPSBmdW5jdGlvbiAoZW52KSB7XG4gICAgcmV0dXJuIG9sZF9mbi5jYWxsKHNlbGYsIGVudikudGhlbihmdW5jdGlvbiAoX2Vudikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwoc2VsZiwgX2Vudik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbkltYWdlQmxvYlJlZHVjZS5wcm90b3R5cGUuX2Jsb2JfdG9faW1hZ2UgPSBmdW5jdGlvbiAoZW52KSB7XG4gIHZhciBVUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93Lm1velVSTCB8fCB3aW5kb3cubXNVUkw7XG5cbiAgZW52LmltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGVudi5pbWFnZV91cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGVudi5ibG9iKTtcbiAgZW52LmltYWdlLnNyYyA9IGVudi5pbWFnZV91cmw7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBlbnYuaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uICgpIHsgcmVqZWN0KG5ldyBFcnJvcignSW1hZ2VCbG9iUmVkdWNlOiBmYWlsZWQgdG8gY3JlYXRlIEltYWdlKCkgZnJvbSBibG9iJykpOyB9O1xuICAgIGVudi5pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IHJlc29sdmUoZW52KTsgfTtcbiAgfSk7XG59O1xuXG5cbkltYWdlQmxvYlJlZHVjZS5wcm90b3R5cGUuX2NhbGN1bGF0ZV9zaXplID0gZnVuY3Rpb24gKGVudikge1xuICAvL1xuICAvLyBOb3RlLCBpZiB5b3VyIG5lZWQgbm90IFwic3ltbWV0cmljXCIgcmVzaXplIGxvZ2ljLCB5b3UgTVVTVCBjaGVja1xuICAvLyBgZW52Lm9yaWVudGF0aW9uYCAoc2V0IGJ5IHBsdWdpbnMpIGFuZCBzd2FwIHdpZHRoL2hlaWdodCBhcHByb3ByaWF0ZWx5LlxuICAvL1xuICB2YXIgc2NhbGVfZmFjdG9yID0gZW52Lm9wdHMubWF4IC8gTWF0aC5tYXgoZW52LmltYWdlLndpZHRoLCBlbnYuaW1hZ2UuaGVpZ2h0KTtcblxuICBpZiAoc2NhbGVfZmFjdG9yID4gMSkgc2NhbGVfZmFjdG9yID0gMTtcblxuICBlbnYudHJhbnNmb3JtX3dpZHRoID0gTWF0aC5tYXgoTWF0aC5yb3VuZChlbnYuaW1hZ2Uud2lkdGggKiBzY2FsZV9mYWN0b3IpLCAxKTtcbiAgZW52LnRyYW5zZm9ybV9oZWlnaHQgPSBNYXRoLm1heChNYXRoLnJvdW5kKGVudi5pbWFnZS5oZWlnaHQgKiBzY2FsZV9mYWN0b3IpLCAxKTtcblxuICAvLyBJbmZvIGZvciB1c2VyIHBsdWdpbnMsIHRvIGNoZWNrIGlmIHNjYWxpbmcgYXBwbGllZFxuICBlbnYuc2NhbGVfZmFjdG9yID0gc2NhbGVfZmFjdG9yO1xuXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW52KTtcbn07XG5cblxuSW1hZ2VCbG9iUmVkdWNlLnByb3RvdHlwZS5fdHJhbnNmb3JtID0gZnVuY3Rpb24gKGVudikge1xuICBlbnYub3V0X2NhbnZhcyA9IHRoaXMucGljYS5vcHRpb25zLmNyZWF0ZUNhbnZhcyhlbnYudHJhbnNmb3JtX3dpZHRoLCBlbnYudHJhbnNmb3JtX2hlaWdodCk7XG5cbiAgLy8gRGltIGVudiB0ZW1wb3JhcnkgdmFycyB0byBwcm9oaWJpdCB1c2UgYW5kIGF2b2lkIGNvbmZ1c2lvbiB3aGVuIG9yaWVudGF0aW9uXG4gIC8vIGNoYW5nZWQuIFlvdSBzaG91bGQgdGFrZSByZWFsIHNpemUgZnJvbSBjYW52YXMuXG4gIGVudi50cmFuc2Zvcm1fd2lkdGggPSBudWxsO1xuICBlbnYudHJhbnNmb3JtX2hlaWdodCA9IG51bGw7XG5cbiAgLy8gQnkgZGVmYXVsdCB1c2UgYWxwaGEgZm9yIHBuZyBvbmx5XG4gIHZhciBwaWNhX29wdHMgPSB7IGFscGhhOiBlbnYuYmxvYi50eXBlID09PSAnaW1hZ2UvcG5nJyB9O1xuXG4gIC8vIEV4dHJhY3QgcGljYSBvcHRpb25zIGlmIGJlZW4gcGFzc2VkXG4gIHRoaXMudXRpbHMuYXNzaWduKHBpY2Ffb3B0cywgdGhpcy51dGlscy5waWNrX3BpY2FfcmVzaXplX29wdGlvbnMoZW52Lm9wdHMpKTtcblxuICByZXR1cm4gdGhpcy5waWNhXG4gICAgLnJlc2l6ZShlbnYuaW1hZ2UsIGVudi5vdXRfY2FudmFzLCBwaWNhX29wdHMpXG4gICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gZW52OyB9KTtcbn07XG5cblxuSW1hZ2VCbG9iUmVkdWNlLnByb3RvdHlwZS5fY2xlYW51cCA9IGZ1bmN0aW9uIChlbnYpIHtcbiAgZW52LmltYWdlLnNyYyA9ICcnO1xuICBlbnYuaW1hZ2UgPSBudWxsO1xuXG4gIHZhciBVUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93Lm1velVSTCB8fCB3aW5kb3cubXNVUkw7XG4gIGlmIChVUkwucmV2b2tlT2JqZWN0VVJMKSBVUkwucmV2b2tlT2JqZWN0VVJMKGVudi5pbWFnZV91cmwpO1xuXG4gIGVudi5pbWFnZV91cmwgPSBudWxsO1xuXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW52KTtcbn07XG5cblxuSW1hZ2VCbG9iUmVkdWNlLnByb3RvdHlwZS5fY3JlYXRlX2Jsb2IgPSBmdW5jdGlvbiAoZW52KSB7XG4gIHJldHVybiB0aGlzLnBpY2EudG9CbG9iKGVudi5vdXRfY2FudmFzLCBlbnYuYmxvYi50eXBlKVxuICAgIC50aGVuKGZ1bmN0aW9uIChibG9iKSB7XG4gICAgICBlbnYub3V0X2Jsb2IgPSBibG9iO1xuICAgICAgcmV0dXJuIGVudjtcbiAgICB9KTtcbn07XG5cblxuSW1hZ2VCbG9iUmVkdWNlLnByb3RvdHlwZS5fZ2V0VWludDhBcnJheSA9IGZ1bmN0aW9uIChibG9iKSB7XG4gIGlmIChibG9iLmFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGJsb2IuYXJyYXlCdWZmZXIoKS50aGVuKGZ1bmN0aW9uIChidWYpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWYpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgZnIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYik7XG5cbiAgICBmci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IHJlc29sdmUobmV3IFVpbnQ4QXJyYXkoZnIucmVzdWx0KSk7IH07XG4gICAgZnIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ltYWdlQmxvYlJlZHVjZTogZmFpbGVkIHRvIGxvYWQgZGF0YSBmcm9tIGlucHV0IGJsb2InKSk7XG4gICAgICBmci5hYm9ydCgpO1xuICAgIH07XG4gICAgZnIub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ltYWdlQmxvYlJlZHVjZTogZmFpbGVkIHRvIGxvYWQgZGF0YSBmcm9tIGlucHV0IGJsb2IgKGFib3J0ZWQpJykpO1xuICAgIH07XG4gIH0pO1xufTtcblxuXG5JbWFnZUJsb2JSZWR1Y2UucGljYSA9IHBpY2E7XG5cbnZhciBpbWFnZUJsb2JSZWR1Y2UgPSBJbWFnZUJsb2JSZWR1Y2U7XG5cbmV4cG9ydCBkZWZhdWx0IGltYWdlQmxvYlJlZHVjZTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0EsSUFBSSxRQUFRLEdBQUcsU0FBUyxNQUFNLENBQUMsRUFBRSxFQUFFO0FBQ25DLEVBQUUsSUFBSSxJQUFJLENBQUM7QUFDWDtBQUNBLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hDO0FBQ0EsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtBQUMxQixNQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9FLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDM0IsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDZDtBQUNBLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsRUFBRTtBQUMvQixJQUFJLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdFLEdBQUcsQ0FBQyxDQUFDO0FBQ0w7QUFDQSxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQSxTQUFTLHdCQUF3QixDQUFDLElBQUksRUFBRTtBQUN4QyxFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRTtBQUNwQixJQUFJLE9BQU87QUFDWCxJQUFJLGVBQWU7QUFDbkIsSUFBSSxlQUFlO0FBQ25CLElBQUksa0JBQWtCO0FBQ3RCLElBQUksYUFBYTtBQUNqQixHQUFHLENBQUMsQ0FBQztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLElBQUksMEJBQTBCLEdBQUcsd0JBQXdCLENBQUM7QUFDMUQ7QUFDQSxJQUFJLEtBQUssR0FBRztBQUNaLENBQUMsTUFBTSxFQUFFLFFBQVE7QUFDakIsQ0FBQyxJQUFJLEVBQUUsTUFBTTtBQUNiLENBQUMsd0JBQXdCLEVBQUUsMEJBQTBCO0FBQ3JELENBQUMsQ0FBQztBQUNGO0FBQ0EsU0FBUyxvQkFBb0IsQ0FBQyxFQUFFLEVBQUU7QUFDbEMsRUFBRSxJQUFJLE1BQU0sR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUMvQixDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUNuRCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLGVBQWUsRUFBRSxNQUFNLEVBQUU7QUFDbEMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxHQUFHLE1BQU0sR0FBRyx5SUFBeUksQ0FBQyxDQUFDO0FBQ3pNLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLEdBQUcsb0JBQW9CLENBQUMsVUFBVSxNQUFNLEVBQUUsT0FBTyxFQUFFO0FBQzNELENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxlQUFlLEVBQUUsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDeGtCO0FBQ0EsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25DO0FBQ0EsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3JDO0FBQ0EsSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDbkQ7QUFDQSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDdkM7QUFDQSxTQUFTLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRTtBQUNyQyxFQUFFLElBQUksb0JBQW9CLEdBQUcsa0JBQWtCLElBQUksRUFBRSxDQUFDO0FBQ3REO0FBQ0EsRUFBRSxJQUFJLFFBQVEsR0FBRztBQUNqQixJQUFJLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUMvQyxJQUFJLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNuRCxHQUFHLENBQUM7QUFDSixFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRztBQUNsQixJQUFJLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRTtBQUNuQixJQUFJLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDMUMsR0FBRyxDQUFDO0FBQ0osRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzVCLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBQ0Q7QUFDQSxRQUFRLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzdCO0FBQ0EsT0FBTyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDL0UsRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMzQztBQUNBLEVBQUUsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO0FBQzdCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN6SSxHQUFHO0FBQ0g7QUFDQSxFQUFFLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUNGO0FBQ0EsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDekI7QUFDQSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDM0c7QUFDQTtBQUNBLFNBQVMsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUNyQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7QUFDckUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqQixFQUFFLElBQUksU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7QUFDekMsRUFBRSxJQUFJLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQztBQUNyQyxFQUFFLElBQUksU0FBUyxHQUFHLENBQUM7QUFDbkIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCO0FBQ0EsRUFBRSxLQUFLLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtBQUN0QyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDbEI7QUFDQSxJQUFJLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO0FBQzVDO0FBQ0EsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDekMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDeEMsTUFBTSxNQUFNLEdBQUcsU0FBUyxHQUFHLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9DLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QjtBQUNBLE1BQU0sT0FBTyxVQUFVLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFO0FBQzNDLFFBQVEsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ3pDO0FBQ0E7QUFDQSxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hELFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNoRCxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUMsUUFBUSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEMsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRTtBQUN6RDtBQUNBLE9BQU8sQ0FBQztBQUNSLE1BQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFO0FBQ3pEO0FBQ0EsT0FBTyxDQUFDO0FBQ1IsTUFBTSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUU7QUFDekQ7QUFDQSxPQUFPLENBQUM7QUFDUixNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFO0FBQ3JEO0FBQ0EsT0FBTyxDQUFDO0FBQ1IsTUFBTSxVQUFVLEdBQUcsVUFBVSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLEtBQUs7QUFDTDtBQUNBLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLElBQUksU0FBUyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQyxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtBQUNuRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pCLEVBQUUsSUFBSSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQztBQUN6QyxFQUFFLElBQUksTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDO0FBQ3JDLEVBQUUsSUFBSSxTQUFTLEdBQUcsQ0FBQztBQUNuQixNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDckI7QUFDQSxFQUFFLEtBQUssSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO0FBQ3RDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNsQjtBQUNBLElBQUksS0FBSyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7QUFDNUM7QUFDQSxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUN6QyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUN4QyxNQUFNLE1BQU0sR0FBRyxTQUFTLEdBQUcsV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCO0FBQ0EsTUFBTSxPQUFPLFVBQVUsR0FBRyxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUU7QUFDM0MsUUFBUSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDekM7QUFDQTtBQUNBLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNoRCxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hELFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QyxRQUFRLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNoQyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFO0FBQ3pEO0FBQ0EsT0FBTyxDQUFDO0FBQ1IsTUFBTSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUU7QUFDekQ7QUFDQSxPQUFPLENBQUM7QUFDUixNQUFNLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRTtBQUN6RDtBQUNBLE9BQU8sQ0FBQztBQUNSLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUU7QUFDckQ7QUFDQSxPQUFPLENBQUM7QUFDUixNQUFNLFVBQVUsR0FBRyxVQUFVLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0MsS0FBSztBQUNMO0FBQ0EsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDcEMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFDLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2pCLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO0FBQzVDLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCO0FBQ3hDLENBQUMsQ0FBQztBQUNGO0FBQ0EsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDekM7QUFDQTtBQUNBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsczNCQUFzM0IsQ0FBQztBQUN4NEI7QUFDQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUN6QztBQUNBLE1BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDakIsRUFBRSxJQUFJLEVBQUUsUUFBUTtBQUNoQixFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3pCLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUM7QUFDbkMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLHdCQUF3QixDQUFDO0FBQzdDLENBQUMsQ0FBQztBQUNGO0FBQ0EsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUNsRztBQUNBLElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ25EO0FBQ0EsSUFBSSxvQkFBb0IsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsb0JBQW9CLENBQUM7QUFDdEU7QUFDQSxJQUFJLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztBQUNsRTtBQUNBLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ3hDLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNiLE1BQU0sR0FBRyxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQztBQUNBLEVBQUUsT0FBTyxHQUFHLEdBQUcsR0FBRyxFQUFFO0FBQ3BCLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNwQixJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QixHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLE1BQU0sQ0FBQyxPQUFPLEVBQUU7QUFDMUMsRUFBRSxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQ3hCLEVBQUUsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztBQUMzQixFQUFFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFDNUIsRUFBRSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQzlCLEVBQUUsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztBQUMvQixFQUFFLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBQ2pFLEVBQUUsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFDbkUsRUFBRSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztBQUNyQyxFQUFFLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO0FBQ3JDLEVBQUUsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9ELEVBQUUsSUFBSSxPQUFPLEdBQUcsT0FBTyxPQUFPLENBQUMsT0FBTyxLQUFLLFdBQVcsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUM3RSxFQUFFLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO0FBQ3JDLEVBQUUsSUFBSSxRQUFRLEdBQUcsYUFBYSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7QUFDckUsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0RSxFQUFFLElBQUksR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzlELEVBQUUsa0JBQWtCLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM5RDtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDN0MsRUFBRSxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUNGO0FBQ0EsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDL0U7QUFDQSxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNsRDtBQUNBO0FBQ0EsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQ3pCO0FBQ0EsU0FBUyxZQUFZLENBQUMsR0FBRyxFQUFFO0FBQzNCLEVBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxlQUFlLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBQ0Q7QUFDQSxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsZUFBZSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDckYsRUFBRSxJQUFJLGNBQWMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ25ELEVBQUUsSUFBSSxhQUFhLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztBQUNsQyxFQUFFLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzFDO0FBQ0E7QUFDQSxFQUFFLElBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDO0FBQzFELEVBQUUsSUFBSSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQztBQUMzSSxFQUFFLElBQUksWUFBWSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDO0FBQzNELEVBQUUsSUFBSSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM3RCxFQUFFLElBQUksWUFBWSxHQUFHLElBQUksVUFBVSxDQUFDLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDO0FBQzNFLEVBQUUsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLEVBQUUsSUFBSSxRQUFRLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztBQUM3RDtBQUNBLEVBQUUsS0FBSyxTQUFTLEdBQUcsQ0FBQyxFQUFFLFNBQVMsR0FBRyxRQUFRLEVBQUUsU0FBUyxFQUFFLEVBQUU7QUFDekQ7QUFDQSxJQUFJLFFBQVEsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQztBQUMxRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzdELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLElBQUksaUJBQWlCLEdBQUcsT0FBTyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDL0MsSUFBSSxXQUFXLEdBQUcsSUFBSSxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN0RCxJQUFJLFNBQVMsR0FBRyxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2xELElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNoQjtBQUNBLElBQUksS0FBSyxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUNoRSxNQUFNLFFBQVEsR0FBRyxjQUFjLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLFFBQVEsSUFBSSxZQUFZLENBQUMsQ0FBQztBQUN2RSxNQUFNLEtBQUssSUFBSSxRQUFRLENBQUM7QUFDeEIsTUFBTSxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO0FBQ2xDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCO0FBQ0EsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7QUFDbkQsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUMzQyxNQUFNLFdBQVcsSUFBSSxTQUFTLENBQUM7QUFDL0IsTUFBTSxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9DLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSxTQUFTLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxJQUFJLFlBQVksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztBQUNyQjtBQUNBLElBQUksT0FBTyxZQUFZLEdBQUcsU0FBUyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzdFLE1BQU0sWUFBWSxFQUFFLENBQUM7QUFDckIsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLFlBQVksR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFO0FBQ3pDLE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzNDO0FBQ0EsTUFBTSxPQUFPLGFBQWEsR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNsRSxRQUFRLGFBQWEsRUFBRSxDQUFDO0FBQ3hCLE9BQU87QUFDUDtBQUNBLE1BQU0sV0FBVyxHQUFHLFFBQVEsR0FBRyxZQUFZLENBQUM7QUFDNUMsTUFBTSxVQUFVLEdBQUcsYUFBYSxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDcEQsTUFBTSxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUM7QUFDcEQ7QUFDQSxNQUFNLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztBQUNuRDtBQUNBLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNyQixRQUFRLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsYUFBYSxHQUFHLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQy9GLFFBQVEsZUFBZSxJQUFJLFVBQVUsQ0FBQztBQUN0QyxPQUFPLE1BQU07QUFDYjtBQUNBLFFBQVEsS0FBSyxHQUFHLEdBQUcsWUFBWSxFQUFFLEdBQUcsSUFBSSxhQUFhLEVBQUUsR0FBRyxFQUFFLEVBQUU7QUFDOUQsVUFBVSxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0QsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLLE1BQU07QUFDWDtBQUNBLE1BQU0sWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFDO0FBQ0EsTUFBTSxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUMsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEVBQUUsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDakU7QUFDQSxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUM7QUFDbEI7QUFDQSxFQUFFLEdBQUcsRUFBRSxHQUFHO0FBQ1YsRUFBRSxNQUFNLEVBQUUsU0FBUyxNQUFNLENBQUMsQ0FBQyxFQUFFO0FBQzdCLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzVDLEdBQUc7QUFDSCxDQUFDLEVBQUU7QUFDSDtBQUNBLEVBQUUsR0FBRyxFQUFFLEdBQUc7QUFDVixFQUFFLE1BQU0sRUFBRSxTQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUU7QUFDN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFO0FBQy9CLE1BQU0sT0FBTyxHQUFHLENBQUM7QUFDakIsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsY0FBYyxFQUFFO0FBQ25ELE1BQU0sT0FBTyxHQUFHLENBQUM7QUFDakIsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUMxQixJQUFJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLEdBQUc7QUFDSCxDQUFDLEVBQUU7QUFDSDtBQUNBLEVBQUUsR0FBRyxFQUFFLEdBQUc7QUFDVixFQUFFLE1BQU0sRUFBRSxTQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUU7QUFDN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFO0FBQy9CLE1BQU0sT0FBTyxHQUFHLENBQUM7QUFDakIsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsY0FBYyxFQUFFO0FBQ25ELE1BQU0sT0FBTyxHQUFHLENBQUM7QUFDakIsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUMxQixJQUFJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ25FLEdBQUc7QUFDSCxDQUFDLEVBQUU7QUFDSDtBQUNBLEVBQUUsR0FBRyxFQUFFLEdBQUc7QUFDVixFQUFFLE1BQU0sRUFBRSxTQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUU7QUFDN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFO0FBQy9CLE1BQU0sT0FBTyxHQUFHLENBQUM7QUFDakIsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsY0FBYyxFQUFFO0FBQ25ELE1BQU0sT0FBTyxHQUFHLENBQUM7QUFDakIsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUMxQixJQUFJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ25FLEdBQUc7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUNIO0FBQ0EsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDekM7QUFDQSxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNuRDtBQUNBLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ3hDLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNiLE1BQU0sR0FBRyxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQztBQUNBLEVBQUUsT0FBTyxHQUFHLEdBQUcsR0FBRyxFQUFFO0FBQ3BCLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNwQixJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QixHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUyxZQUFZLENBQUMsR0FBRyxFQUFFO0FBQzNCLEVBQUUsT0FBTyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUNEO0FBQ0EsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2pCO0FBQ0EsSUFBSTtBQUNKLEVBQUUsS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUU7QUFDZjtBQUNBLFNBQVMsYUFBYSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFO0FBQ25ELEVBQUUsSUFBSSxLQUFLLEVBQUU7QUFDYixJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ2pELElBQUksT0FBTztBQUNYLEdBQUc7QUFDSDtBQUNBLEVBQUUsS0FBSyxJQUFJLEdBQUcsR0FBRyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM1RCxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QixJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEMsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNyQyxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUU7QUFDL0MsRUFBRSxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQ3hCLEVBQUUsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztBQUMzQixFQUFFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFDNUIsRUFBRSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQzlCLEVBQUUsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztBQUMvQixFQUFFLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBQ2pFLEVBQUUsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFDbkUsRUFBRSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQztBQUN2QyxFQUFFLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDO0FBQ3ZDLEVBQUUsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9ELEVBQUUsSUFBSSxPQUFPLEdBQUcsT0FBTyxPQUFPLENBQUMsT0FBTyxLQUFLLFdBQVcsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUM3RSxFQUFFLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO0FBQ3JDLEVBQUUsSUFBSSxRQUFRLEdBQUcsYUFBYSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7QUFDckUsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0RTtBQUNBLEVBQUUsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCO0FBQ0EsRUFBRSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDeEY7QUFDQSxFQUFFLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDcEU7QUFDQSxFQUFFLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM1RTtBQUNBLEVBQUUsSUFBSSxXQUFXLEdBQUcsZUFBZSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7QUFDMUQ7QUFDQSxFQUFFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pELEVBQUUsSUFBSSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwRDtBQUNBLEVBQUUsSUFBSSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQjtBQUNBO0FBQ0EsRUFBRSxhQUFhLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUNoRCxFQUFFLGFBQWEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDdkUsRUFBRSxFQUFFLENBQUMsZUFBZSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1QyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM3QyxFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDaEU7QUFDQSxNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2pCLEVBQUUsSUFBSSxFQUFFLGNBQWM7QUFDdEIsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0FBQy9CLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztBQUN6QyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsNEJBQTRCLENBQUM7QUFDakQsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLDRCQUE0QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUN0SDtBQUNBLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN6QztBQUNBLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ3JDLEVBQUUsSUFBSSxJQUFJLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUM1QixFQUFFLElBQUksR0FBRyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7QUFDbkI7QUFDQSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2QixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFELElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDdEIsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFDRDtBQUNBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7QUFDakYsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDO0FBQ25CLEVBQUUsSUFBSSxJQUFJLEVBQUUsT0FBTyxDQUFDO0FBQ3BCO0FBQ0EsRUFBRSxJQUFJLE1BQU0s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QUFJLFdBQVcsQ0FBQztBQUM5RTtBQUNBO0FBQ0EsRUFBRSxJQUFJLFFBQVEsR0FBRyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDbkQsRUFBRSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDdEY7QUFDQTtBQUNBLEVBQUUsSUFBSSxVQUFVLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ3BELEVBQUUsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2xCO0FBQ0EsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3ZDLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ3pILElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFD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Q0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLE1BQU0sR0FBRyxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDM0I7QUFDQSxFQUFFLElBQUksR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMzQztBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNmLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2Y7QUFDQSxFQUFFLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7QUFDdEMsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFO0FBQ2hDLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQztBQUN2QyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7QUFDdEMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQy9CLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMvRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLFFBQVEsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CO0FBQ0EsRUFBRSxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7QUFDdEIsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDO0FBQ3JDLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQztBQUNwQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7QUFDN0IsR0FBRyxNQUFNLElBQUksUUFBUSxLQUFLLEVBQUUsRUFBRTtBQUM5QixJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUM7QUFDckMsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO0FBQ3BDLEdBQUcsTUFBTSxJQUFJLFFBQVEsS0FBSyxFQUFFLEVBQUU7QUFDOUIsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO0FBQ3BDLEdBQUc7QUFDSDtBQUNBLEVBQUUsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFDRjtBQUNBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0FBQzFDO0FBQ0E7QUFDQSxJQUFJLEVBQUUsQ0FBQztBQUNQO0FBQ0E7QUFDQSxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQzNDO0FBQ0EsRUFBRSxJQUFJLE9BQU8sRUFBRSxLQUFLLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUMzQztBQUNBLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQztBQUNiO0FBQ0EsRUFBRSxJQUFJLE9BQU8sV0FBVyxLQUFLLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUNwRDtBQUNBO0FBQ0EsRUFBRSxJQUFJO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUksR0FBRyxRQUFRLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDNUssSUFBSSxJQUFJLE1BQU0sS0FBSyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0MsSUFBSSxJQUFJLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQztBQUNsRDtBQUNBLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRTtBQUNqQjtBQUNBLEVB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QUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLFdBQVcsSUFBSSwwQ0FBMEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRTtBQUNoYTtBQUNBLFNBQVMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRTtBQUN2TDtBQUNBLFNBQVMscUJBQXFCLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7QUFDamdCO0FBQ0EsU0FBUyxlQUFlLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUU7QUFDckU7QUFDQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDdEM7QUFDQSxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdkM7QUFDQSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDdkM7QUFDQSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDakM7QUFDQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDbkM7QUFDQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDckM7QUFDQSxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDNUM7QUFDQSxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLElBQUksZUFBZSxHQUFHLEtBQUssQ0FBQztBQUM1QjtBQUNBLElBQUk7QUFDSixFQUFFLElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7QUFDL0QsSUFBSSxlQUFlLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pFLEdBQUc7QUFDSCxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTtBQUNkO0FBQ0EsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCO0FBQ0EsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLEVBQUU7QUFDdEMsRUFBRSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLENBQUM7QUFDRDtBQUNBLElBQUksaUJBQWlCLEdBQUc7QUFDeEIsRUFBRSxJQUFJLEVBQUUsSUFBSTtBQUNaLEVBQUUsV0FBVyxFQUFFLFdBQVc7QUFDMUIsRUFBRSxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQztBQUNoQyxFQUFFLElBQUksRUFBRSxJQUFJO0FBQ1osRUFBRSxZQUFZLEVBQUUsU0FBUyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNyRCxJQUFJLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckQsSUFBSSxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUM1QixJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzlCLElBQUksT0FBTyxTQUFTLENBQUM7QUFDckIsR0FBRztBQUNILENBQUMsQ0FBQztBQUNGLElBQUksbUJBQW1CLEdBQUc7QUFDMUIsRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUNaLEVBQUUsS0FBSyxFQUFFLEtBQUs7QUFDZCxFQUFFLGFBQWEsRUFBRSxDQUFDO0FBQ2xCLEVBQUUsYUFBYSxFQUFFLEdBQUc7QUFDcEIsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUNGLElBQUksa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0FBQy9CLElBQUksdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0FBQ3BDLElBQUksNkJBQTZCLEdBQUcsS0FBSyxDQUFDO0FBQzFDLElBQUksd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0FBQ3JDLElBQUksNEJBQTRCLEdBQUcsS0FBSyxDQUFDO0FBQ3pDO0FBQ0EsU0FBUyxZQUFZLEdBQUc7QUFDeEIsRUFBRSxPQUFPO0FBQ1QsSUFBSSxLQUFLLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQztBQUM3QixJQUFJLE9BQU8sRUFBRSxTQUFTLE9BQU8sR0FBRztBQUNoQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDN0I7QUFDQSxNQUFNLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO0FBQ3pDLFFBQVEsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNsRjtBQUNBLFFBQVEsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtBQUNoRSxVQUFVLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwRCxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHLENBQUM7QUFDSixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ3ZCLEVBQUUsSUFBSSxFQUFFLElBQUksWUFBWSxJQUFJLENBQUMsRUFBRSxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hELEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsRUFBRSxFQUFFLGlCQUFpQixFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxFQUFFLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMzRDtBQUNBO0FBQ0EsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDckYsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3pFO0FBQ0EsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHO0FBQ2xCLElBQUksRUFBRSxFQUFFLEtBQUs7QUFDYjtBQUNBLElBQUksSUFBSSxFQUFFLEtBQUs7QUFDZjtBQUNBLElBQUksR0FBRyxFQUFFLEtBQUs7QUFDZDtBQUNBLElBQUksRUFBRSxFQUFFLEtBQUs7QUFDYjtBQUNBLEdBQUcsQ0FBQztBQUNKLEVBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDNUI7QUFDQSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUM7QUFDakMsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUN4QixDQUFDO0FBQ0Q7QUFDQSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxZQUFZO0FBQ2xDLEVBQUUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ25CO0FBQ0EsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQ3BEO0FBQ0EsRUFBRSxJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxPQUFPLGlCQUFpQixLQUFLLFdBQVcsRUFBRTtBQUNwRixJQUFJLElBQUk7QUFDUjtBQUNBLE1BQU0sSUFBSSxTQUFTLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDeEQsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUM7QUFDaEMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUU7QUFDbkIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksT0FBTyxXQUFXLEtBQUssV0FBVyxFQUFFO0FBQzFDLElBQUksSUFBSSxXQUFXLENBQUMsU0FBUyxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO0FBQzlELE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0FBQ3JDLEtBQUssTUFBTTtBQUNYLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0FBQ3BFLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQy9DO0FBQ0EsRUFBRSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3BDLElBQUksUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM0MsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsUUFBUSxDQUFDO0FBQ3ZDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6QztBQUNBLEVBQUUsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNuQyxJQUFJLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLFFBQVEsSUFBSSxNQUFNLEVBQUU7QUFDN0Q7QUFDQTtBQUNBLE1BQU0sSUFBSTtBQUNWLFFBQVEsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7QUFDeEQ7QUFDQSxRQUFRLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN4QixRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztBQUNoQztBQUNBLFFBQVEsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ25FO0FBQ0EsUUFBUSxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUNwQyxVQUFVLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3RELFNBQVMsTUFBTTtBQUNmLFVBQVUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6RSxVQUFVLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQ3RELFNBQVM7QUFDVCxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRTtBQUNyQixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLE9BQU8sRUFBRTtBQUMvRDtBQUNBLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdDLEdBQUcsQ0FBQyxDQUFDO0FBQ0w7QUFDQSxFQUFFLElBQUksY0FBYyxDQUFDO0FBQ3JCO0FBQ0EsRUFBRSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7QUFDaEMsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1QyxHQUFHLE1BQU07QUFDVCxJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFO0FBQ3pGLE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUM3RCxRQUFRLEtBQUssQ0FBQyxLQUFLLENBQUMsOERBQThELENBQUMsQ0FBQztBQUNwRjtBQUNBLFFBQVEsT0FBTztBQUNmLE9BQU87QUFDUDtBQUNBLE1BQU0sSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7QUFDcEUsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHO0FBQ0g7QUFDQSxFQUFFLDZCQUE2QixHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNsRixFQUFFLElBQUksb0JBQW9CLENBQUM7QUFDM0I7QUFDQSxFQUFFLElBQUksdUJBQXVCLElBQUksa0JBQWtCLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUN0RixJQUFJLG9CQUFvQixHQUFHLEtBQUssQ0FBQywrQkFBK0IsRUFBRSxDQUFDO0FBQ25FLEdBQUcsTUFBTTtBQUNULElBQUksb0JBQW9CLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsRCxHQUFHO0FBQ0g7QUFDQSxFQUFFLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRTtBQUNyRSxJQUFJLHdCQUF3QixHQUFHLE1BQU0sQ0FBQztBQUN0QyxHQUFHLENBQUMsQ0FBQztBQUNMO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxjQUFjLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFO0FBQ3pFLElBQUksNEJBQTRCLEdBQUcsTUFBTSxDQUFDO0FBQzFDLEdBQUcsQ0FBQyxDQUFDO0FBQ0w7QUFDQSxFQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWTtBQUN0SCxJQUFJLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsRUFBRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7QUFDNUIsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFVBQVUsUUFBUSxFQUFFLElBQUksRUFBRTtBQUMxRCxFQUFFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7QUFDNUMsRUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWTtBQUM1QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtBQUM3QjtBQUNBLE1BQU0sT0FBTztBQUNiLFFBQVEsSUFBSSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDM0UsT0FBTyxDQUFDO0FBQ1IsS0FBSztBQUNMO0FBQ0EsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUNsRCxNQUFNLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDN0M7QUFDQSxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsR0FBRyxFQUFFO0FBQ3JFLFFBQVEsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0IsT0FBTyxDQUFDLENBQUM7QUFDVDtBQUNBLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsVUFBVSxFQUFFLEVBQUU7QUFDeEMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDcEIsUUFBUSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuRSxPQUFPLENBQUM7QUFDUjtBQUNBLE1BQU0sSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLE1BQU0sSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzRCxNQUFNLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNoRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO0FBQzFCLFFBQVEsSUFBSSxFQUFFLFFBQVE7QUFDdEIsUUFBUSxRQUFRLEVBQUUsTUFBTSxDQUFDLG9CQUFvQjtBQUM3QyxRQUFRLE9BQU8sRUFBRTtBQUNqQixVQUFVLFdBQVcsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDMUMsU0FBUztBQUNULE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNuQixLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFO0FBQ3BGLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSx3QkFBd0I7QUFDbEQ7QUFDQTtBQUNBLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSw0QkFBNEIsQ0FBQyxFQUFFO0FBQ3pELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ2xELElBQUksT0FBTyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsY0FBYyxJQUFJLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFO0FBQzlILE1BQU0sU0FBUyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDbkMsTUFBTSxPQUFPLFNBQVMsQ0FBQztBQUN2QixLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQ2xFLE1BQU0sS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ2hDLEtBQUssQ0FBQyxDQUFDO0FBQ1A7QUFDQSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUN0QyxJQUFJLFNBQVMsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztBQUMvRixJQUFJLE9BQU8sU0FBUyxDQUFDO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQztBQUNoRSxFQUFFLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JFLEVBQUUsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7QUFDMUMsSUFBSSxLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDOUIsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUM7QUFDM0MsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1SCxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNwQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztBQUMxRTtBQUNBO0FBQ0EsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLEVBQUUsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxVQUFVLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO0FBQ2xFLEVBQUUsSUFBSSxXQUFXLENBQUM7QUFDbEIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFDMUQ7QUFDQSxFQUFFLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtBQUNyQixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEUsSUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksa0JBQWtCLEVBQUU7QUFDMUI7QUFDQTtBQUNBLElBQUksV0FBVyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pHLEdBQUcsTUFBTTtBQUNUO0FBQ0E7QUFDQSxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5RTtBQUNBLElBQUksSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtBQUM5QixNQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QyxLQUFLLE1BQU07QUFDWDtBQUNBLE1BQU0sS0FBSyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM3RCxRQUFRLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QyxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMxQjtBQUNBLEVBQUUsSUFBSSxlQUFlLEVBQUU7QUFDdkI7QUFDQSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzFLLEdBQUcsTUFBTTtBQUNULElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzVKLEdBQUc7QUFDSDtBQUNBLEVBQUUsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFDRjtBQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLFVBQVUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7QUFDM0QsRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDcEI7QUFDQSxFQUFFLElBQUksUUFBUSxHQUFHO0FBQ2pCLElBQUksTUFBTSxFQUFFLElBQUk7QUFDaEIsSUFBSSxjQUFjLEVBQUUsSUFBSTtBQUN4QixJQUFJLG1CQUFtQixFQUFFLEtBQUs7QUFDOUIsSUFBSSxLQUFLLEVBQUUsSUFBSTtBQUNmLEdBQUcsQ0FBQztBQUNKO0FBQ0EsRUFBRSxJQUFJLFdBQVcsR0FBRyxTQUFTLFdBQVcsQ0FBQyxJQUFJLEVBQUU7QUFDL0MsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWTtBQUN0QyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDakQsTUFBTSxJQUFJLFFBQVEsR0FBRztBQUNyQixRQUFRLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztBQUN6QixRQUFRLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtBQUMzQixRQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztBQUM3QixRQUFRLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtBQUMvQixRQUFRLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtBQUMzQixRQUFRLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtBQUMzQixRQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztBQUM3QixRQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztBQUM3QixRQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztBQUM3QixRQUFRLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztBQUN6QixRQUFRLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtBQUN6QyxRQUFRLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtBQUN6QyxRQUFRLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7QUFDL0MsT0FBTyxDQUFDO0FBQ1I7QUFDQSxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUN6QztBQUNBLE1BQU0sT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLFFBQVEsRUFBRTtBQUNoRSxRQUFRLE9BQU8sTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM5RSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxRQUFRLEVBQUU7QUFDbEMsUUFBUSxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDM0M7QUFDQSxRQUFRLE9BQU8sTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDckQsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFO0FBQ2hDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUNuRCxRQUFRLFFBQVEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQ3JDLFFBQVEsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDN0QsT0FBTyxDQUFDLENBQUM7QUFDVCxLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUcsQ0FBQztBQUNKO0FBQ0E7QUFDQTtBQUNBLEVBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVk7QUFDNUMsSUFBSSxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQ3pDLE1BQU0sS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ2hDLEtBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBSSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxJQUFJLENBQUM7QUFDMUM7QUFDQSxJQUFJLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNuQyxNQUFNLFFBQVEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQ3JDLE1BQU0sUUFBUSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztBQUMxQyxNQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzdCO0FBQ0E7QUFDQSxNQUFNLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLElBQUksQ0FBQztBQUNoRDtBQUNBLE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0FBQ3pEO0FBQ0EsTUFBTSxPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLFdBQVcsRUFBRTtBQUNqRSxRQUFRLFFBQVEsQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDO0FBQzlDLE9BQU8sQ0FBQztBQUNSO0FBQ0E7QUFDQTtBQUNBLE9BQU8sT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDN0IsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixPQUFPLENBQUMsQ0FBQztBQUNULEtBQUs7QUFDTDtBQUNBLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO0FBQzVFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZO0FBQ3RCLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUMvQztBQUNBLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUksT0FBTyxHQUFHLGFBQWEsQ0FBQztBQUNoQyxNQUFNLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztBQUN2QixNQUFNLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtBQUN6QixNQUFNLFdBQVcsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7QUFDdEMsTUFBTSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87QUFDM0IsTUFBTSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7QUFDN0IsTUFBTSxjQUFjLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtBQUMzQyxLQUFLLENBQUMsQ0FBQztBQUNQLElBQUksSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRTtBQUMzQyxNQUFNLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLEtBQUssQ0FBQyxDQUFDO0FBQ1A7QUFDQSxJQUFJLFNBQVMsT0FBTyxDQUFDLFFBQVEsRUFBRTtBQUMvQixNQUFNLElBQUksUUFBUSxDQUFDLGNBQWMsRUFBRTtBQUNuQyxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMzRSxRQUFRLFFBQVEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQ3ZDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDbEM7QUFDQSxJQUFJLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWTtBQUM5QyxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDaEM7QUFDQSxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN4QixNQUFNLE9BQU8sRUFBRSxDQUFDO0FBQ2hCLEtBQUssRUFBRSxVQUFVLEdBQUcsRUFBRTtBQUN0QixNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN4QixNQUFNLE1BQU0sR0FBRyxDQUFDO0FBQ2hCLEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLFVBQVUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFO0FBQ25FLEVBQUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3BCO0FBQ0EsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQzdDO0FBQ0EsRUFBRSxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFO0FBQ3BDLE1BQU0sY0FBYyxHQUFHLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sT0FBTyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDakMsTUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DO0FBQ0EsRUFBRSxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztBQUN4QyxFQUFFLElBQUksR0FBRyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRTtBQUMxQixJQUFJLE9BQU8sRUFBRSxPQUFPO0FBQ3BCLElBQUksUUFBUSxFQUFFLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxPQUFPLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUNuRSxHQUFHLENBQUMsQ0FBQztBQUNMLEVBQUUsSUFBSSxTQUFTLENBQUM7QUFDaEI7QUFDQSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDcEI7QUFDQSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDN0QsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLFdBQVcsR0FBRyxFQUFFLEdBQUcsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZO0FBQ3pGLElBQUksSUFBSSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDL0IsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO0FBQzNCLElBQUksT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9ELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRTtBQUN6QixJQUFJLElBQUksU0FBUyxFQUFFO0FBQ25CO0FBQ0E7QUFDQSxNQUFNLFNBQVMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDN0MsS0FBSztBQUNMO0FBQ0EsSUFBSSxPQUFPLEdBQUcsQ0FBQztBQUNmLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxJQUFJLENBQUMsU0FBUyxDQUFDLDRCQUE0QixHQUFHLFVBQVUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7QUFDeEUsRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDcEI7QUFDQSxFQUFFLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQ2xDLElBQUksS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQzlCLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDL0MsRUFBRSxPQUFPLGlCQUFpQixDQUFDLElBQUksRUFBRTtBQUNqQyxJQUFJLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTztBQUM3QixJQUFJLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUTtBQUMvQixJQUFJLGFBQWEsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN2RCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxXQUFXLEVBQUU7QUFDakMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQy9DO0FBQ0EsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUM3QixNQUFNLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QyxNQUFNLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbkI7QUFDQSxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDaEM7QUFDQSxNQUFNLE9BQU8sRUFBRSxDQUFDO0FBQ2hCLEtBQUs7QUFDTDtBQUNBLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ25DO0FBQ0EsSUFBSSxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM3RTtBQUNBLElBQUksSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7QUFDNUMsTUFBTSxLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDaEMsS0FBSyxDQUFDLENBQUM7QUFDUCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QyxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN4QixJQUFJLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2RTtBQUNBLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzFJO0FBQ0EsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEM7QUFDQTtBQUNBLElBQUksU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUMzQyxJQUFJLEtBQUssR0FBRyxNQUFNLEdBQUcsU0FBUyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDOUM7QUFDQSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDOUI7QUFDQSxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2QsR0FBRyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUU7QUFDckQsRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDcEI7QUFDQSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNoQyxFQUFFLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQUM3QztBQUNBLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUN2QixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQ3hCLE1BQU0sT0FBTyxFQUFFLE9BQU87QUFDdEIsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHLE1BQU0sSUFBSSxPQUFPLEVBQUU7QUFDdEIsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNqQyxHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztBQUMxQixFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztBQUM1QixFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQy9DLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDbEQ7QUFDQSxFQUFFLElBQUksRUFBRSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDekMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEcsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDeEI7QUFDQSxFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUN4QjtBQUNBLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRTtBQUM3RCxNQUFNLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQzNCLE1BQU0sTUFBTSxJQUFJLENBQUM7QUFDakIsS0FBSyxFQUFFLFVBQVUsR0FBRyxFQUFFO0FBQ3RCLE1BQU0sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDM0IsTUFBTSxNQUFNLEdBQUcsQ0FBQztBQUNoQixLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFDM0I7QUFDQSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5RixFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZO0FBQ3RDLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUMvQztBQUNBLElBQUksSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtBQUM3QixNQUFNLE9BQU8sTUFBTSxDQUFDLDRCQUE0QixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakUsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLENBQUMsNkJBQTZCLEVBQUU7QUFDeEMsTUFBTSxJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsR0FBRyxtREFBbUQsQ0FBQyxDQUFDO0FBQzdILE1BQU0sR0FBRyxDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQztBQUN0QyxNQUFNLE1BQU0sR0FBRyxDQUFDO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDaEksSUFBSSxPQUFPLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUQsR0FBRyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxVQUFVLE9BQU8sRUFBRTtBQUNqRCxFQUFFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUNwQjtBQUNBLEVBQUUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0RCxFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZO0FBQ3RDLElBQUksT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25ELEdBQUcsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFVLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBQzdELEVBQUUsUUFBUSxHQUFHLFFBQVEsSUFBSSxXQUFXLENBQUM7QUFDckMsRUFBRSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFO0FBQ3hDLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQ3ZCLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksRUFBRTtBQUNwQyxRQUFRLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDNUIsTUFBTSxPQUFPO0FBQ2IsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7QUFDOUIsTUFBTSxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztBQUNuQyxRQUFRLElBQUksRUFBRSxRQUFRO0FBQ3RCLFFBQVEsT0FBTyxFQUFFLE9BQU87QUFDeEIsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNWLE1BQU0sT0FBTztBQUNiLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0UsSUFBSSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQzlCLElBQUksSUFBSSxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkM7QUFDQSxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDbEMsTUFBTSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQyxLQUFLO0FBQ0w7QUFDQSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ2pDLE1BQU0sSUFBSSxFQUFFLFFBQVE7QUFDcEIsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNSLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxZQUFZLEVBQUUsQ0FBQztBQUN0QztBQUNBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3RCO0FBQ0EsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUM7QUFDckssQ0FBQyxDQUFDLENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUNIO0FBQ0EsSUFBSSxjQUFjLEdBQUcsb0JBQW9CLENBQUMsVUFBVSxNQUFNLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzlCLEVBQUUsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNsQixFQUFFLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQ3hCLEVBQUUsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM1QyxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNyRCxFQUFFLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNsQixDQUFDO0FBQ0Q7QUFDQTtBQUNBLFNBQVMsV0FBVyxDQUFDLEdBQUcsRUFBRTtBQUMxQixFQUFFLElBQUk7QUFDTixJQUFJLE9BQU8sUUFBUSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDN0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ2QsSUFBSSxPQUFPLEdBQUcsQ0FBQztBQUNmLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLFNBQVMsV0FBVyxDQUFDLEdBQUcsRUFBRTtBQUMxQixFQUFFLElBQUk7QUFDTixJQUFJLE9BQU8sa0JBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDM0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ2QsSUFBSSxPQUFPLEdBQUcsQ0FBQztBQUNmLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGFBQWEsQ0FBQyxHQUFHLEVBQUU7QUFDNUIsRUFBRSxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxxQkFBcUIsQ0FBQztBQUN2RSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO0FBQ3BEO0FBQ0EsRUFBRSxJQUFJLENBQUMsS0FBSyxRQUFRLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzVEO0FBQ0E7QUFDQSxFQUFFLElBQUksQ0FBQyxLQUFLLFFBQVEsVUFBVSxDQUFDO0FBQy9CO0FBQ0E7QUFDQSxFQUFFLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RTtBQUNBLEVBQUUsSUFBSSxHQUFHLEtBQUssVUFBVSxJQUFJLEdBQUcsS0FBSyxVQUFVLEVBQUU7QUFDaEQsSUFBSSxNQUFNLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN0RCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDO0FBQ25DLENBQUM7QUFDRDtBQUNBO0FBQ0EsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxRQUFRLEVBQUU7QUFDaEQ7QUFDQSxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCO0FBQ0EsRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DO0FBQ0EsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUU7QUFDeEIsSUFBSSxFQUFFLE1BQU0sQ0FBQztBQUNiLElBQUksTUFBTSxFQUFFLE1BQU07QUFDbEIsR0FBRyxFQUFFLENBQUM7QUFDTjtBQUNBLEVBQUUsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ3hELElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN0QyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLFNBQVM7QUFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM1QyxHQUFHO0FBQ0gsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsUUFBUSxFQUFFO0FBQ2xELEVBQUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2hCO0FBQ0E7QUFDQSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUNyQztBQUNBLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssRUFBRTtBQUM3QixJQUFJLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsT0FBTztBQUNuRSxJQUFJLElBQUksS0FBSyxDQUFDLGNBQWMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxPQUFPO0FBQ2hGO0FBQ0EsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDbEMsTUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUMvRCxLQUFLO0FBQ0w7QUFDQSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEQsR0FBRyxDQUFDLENBQUM7QUFDTDtBQUNBO0FBQ0EsRUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDbkI7QUFDQTtBQUNBLEVBQUUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxNQUFNLEVBQUU7QUFDOUMsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDO0FBQ2hCO0FBQ0EsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssRUFBRTtBQUNsRCxNQUFNLE1BQU0sSUFBSSxFQUFFLElBQUksS0FBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4RixLQUFLLENBQUMsQ0FBQztBQUNQO0FBQ0EsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDO0FBQ2hCLEdBQUcsQ0FBQyxDQUFDO0FBQ0w7QUFDQSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hGLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0I7QUFDQSxFQUFFLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNqQixFQUFFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNsQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQy9CO0FBQ0EsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLE1BQU0sRUFBRTtBQUM5QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO0FBQ3pDO0FBQ0EsSUFBSSxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDM0IsSUFBSSxJQUFJLE9BQU8sS0FBSyxTQUFTLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDekUsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBQ3JCO0FBQ0EsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlEO0FBQ0EsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDOUM7QUFDQSxNQUFNLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQzNCLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssRUFBRSxHQUFHLEVBQUU7QUFDckMsTUFBTSxJQUFJLFlBQVksR0FBRyxTQUFTLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDbEQ7QUFDQSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqRCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEQsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZEO0FBQ0EsTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLEVBQUU7QUFDaEM7QUFDQSxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDNUYsT0FBTyxNQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUU7QUFDekMsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7QUFDdkIsVUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNqRyxVQUFVLFlBQVksR0FBRyxDQUFDO0FBQzFCLFNBQVMsQ0FBQztBQUNWLE9BQU8sTUFBTTtBQUNiLFFBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3BELFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHO0FBQ3ZCLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0FBQ2pILFVBQVUsTUFBTTtBQUNoQixTQUFTLENBQUM7QUFDVixRQUFRLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZELE9BQU87QUFDUCxLQUFLLENBQUMsQ0FBQztBQUNQO0FBQ0EsSUFBSSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RCxJQUFJLElBQUksUUFBUSxFQUFFLFFBQVEsQ0FBQyxXQUFXLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNyRCxHQUFHLENBQUMsQ0FBQztBQUNMO0FBQ0EsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLE1BQU0sRUFBRTtBQUM5QyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFO0FBQ2pFLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMvRSxLQUFLO0FBQ0wsR0FBRyxDQUFDLENBQUM7QUFDTDtBQUNBLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUUsTUFBTSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQztBQUNwRztBQUNBLEVBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQSxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxVQUFVLE1BQU0sRUFBRTtBQUNyRCxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDckIsRUFBRSxJQUFJLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN2RTtBQUNBLEVBQUUsT0FBTyxJQUFJLENBQUMsVUFBVTtBQUN4QixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDckMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDdEMsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBLFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFVBQVUsTUFBTSxFQUFFO0FBQ3JELEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNyQixFQUFFLElBQUksTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3ZFO0FBQ0EsRUFBRSxPQUFPLElBQUksQ0FBQyxVQUFVO0FBQ3hCLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUMzRixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztBQUM1RixDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0EsVUFBVSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsVUFBVSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQzdELEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN0QjtBQUNBLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ3ZCLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUM7QUFDekMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDakMsR0FBRyxNQUFNO0FBQ1QsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQztBQUNqQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQztBQUN6QyxHQUFHO0FBQ0gsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBLFVBQVUsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUM3RCxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDdEI7QUFDQSxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUN2QixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDO0FBQzFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDO0FBQzFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDO0FBQ3pDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2pDLEdBQUcsTUFBTTtBQUNULElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDakMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUM7QUFDekMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUM7QUFDMUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUM7QUFDMUMsR0FBRztBQUNILENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQSxVQUFVLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDMUQsRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssTUFBTTtBQUNyQyxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLE1BQU0sQ0FBQztBQUN0QyxVQUFVLEdBQUcsS0FBSyxNQUFNLElBQUksR0FBRyxLQUFLLE1BQU0sQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLE1BQU0sRUFBRTtBQUM1RCxFQUFFLFFBQVEsTUFBTTtBQUNoQixJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQ1gsSUFBSSxLQUFLLENBQUMsQ0FBQztBQUNYLElBQUksS0FBSyxDQUFDLENBQUM7QUFDWCxJQUFJLEtBQUssQ0FBQztBQUNWLE1BQU0sT0FBTyxDQUFDLENBQUM7QUFDZjtBQUNBLElBQUksS0FBSyxDQUFDLENBQUM7QUFDWCxJQUFJLEtBQUssQ0FBQztBQUNWLE1BQU0sT0FBTyxDQUFDLENBQUM7QUFDZjtBQUNBLElBQUksS0FBSyxDQUFDLENBQUM7QUFDWCxJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQ1gsSUFBSSxLQUFLLEVBQUU7QUFDWCxNQUFNLE9BQU8sQ0FBQyxDQUFDO0FBQ2Y7QUFDQSxJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQ1gsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLElBQUksS0FBSyxFQUFFO0FBQ1gsTUFBTSxPQUFPLENBQUMsQ0FBQztBQUNmO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsTUFBTSxPQUFPLENBQUMsQ0FBQztBQUNmLEdBQUc7QUFDSCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ2xFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDUjtBQUNBLEVBQUUsUUFBUSxNQUFNO0FBQ2hCLElBQUksS0FBSyxDQUFDLENBQUM7QUFDWCxJQUFJLEtBQUssQ0FBQztBQUNWLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsTUFBTSxPQUFPLENBQUMsQ0FBQztBQUNmO0FBQ0EsSUFBSSxLQUFLLENBQUM7QUFDVixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLFNBQVMsQ0FBQztBQUN4QztBQUNBLElBQUksS0FBSyxDQUFDO0FBQ1YsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQyxNQUFNLE9BQU8sQ0FBQyxDQUFDO0FBQ2Y7QUFDQSxJQUFJLEtBQUssQ0FBQztBQUNWLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLElBQUksT0FBTyxDQUFDO0FBQ3hDO0FBQ0EsSUFBSSxLQUFLLENBQUM7QUFDVixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLE1BQU0sT0FBTyxDQUFDLENBQUM7QUFDZjtBQUNBLElBQUksS0FBSyxDQUFDO0FBQ1YsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQjtBQUNBLElBQUksS0FBSyxDQUFDLENBQUM7QUFDWCxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLElBQUksS0FBSyxFQUFFO0FBQ1gsTUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQjtBQUNBLElBQUksS0FBSyxDQUFDO0FBQ1YsTUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQjtBQUNBLElBQUk7QUFDSjtBQUNBLE1BQU0sT0FBTyxJQUFJLENBQUM7QUFDbEIsR0FBRztBQUNILENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQSxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFVLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO0FBQ3BFLEVBQUUsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QztBQUNBLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQztBQUNkO0FBQ0EsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3hDLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMxQyxJQUFJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzlDLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDOUM7QUFDQSxJQUFJLElBQUksV0FBVyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6RCxJQUFJLElBQUksV0FBVyxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUM7QUFDN0MsSUFBSSxJQUFJLFdBQVcsTUFBTSxXQUFXLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdEYsSUFBSSxJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUM7QUFDL0I7QUFDQSxJQUFJLElBQUksV0FBVyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUN2RCxNQUFNLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2hELEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ25CLElBQUksSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQ2xDO0FBQ0EsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFdBQVcsSUFBSSxXQUFXLEVBQUU7QUFDaEUsTUFBTSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzVELE1BQU0sSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQ3pCLFFBQVEsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNyQixRQUFRLE1BQU07QUFDZCxPQUFPO0FBQ1AsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDOUMsTUFBTSxJQUFJO0FBQ1YsUUFBUSxLQUFLLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNsQixRQUFRLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDckIsT0FBTztBQUNQO0FBQ0EsTUFBTSxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEYsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFO0FBQzFDLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUM5RSxRQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO0FBQy9CLFVBQVUsRUFBRSxNQUFNLEdBQUc7QUFDckIsVUFBVSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMxQixTQUFTLENBQUMsQ0FBQztBQUNYLFFBQVEsY0FBYyxHQUFHLElBQUksQ0FBQztBQUM5QixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLEtBQUssR0FBRztBQUNoQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVTtBQUNyQyxNQUFNLEdBQUcsYUFBYSxNQUFNO0FBQzVCLE1BQU0sR0FBRyxhQUFhLEdBQUc7QUFDekIsTUFBTSxNQUFNLFVBQVUsTUFBTTtBQUM1QixNQUFNLEtBQUssV0FBVyxLQUFLO0FBQzNCLE1BQU0sWUFBWSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSztBQUN6QyxNQUFNLFdBQVcsS0FBSyxXQUFXO0FBQ2pDLE1BQU0sV0FBVyxLQUFLLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSztBQUM5QyxNQUFNLEtBQUssV0FBVyxLQUFLO0FBQzNCLE1BQU0sY0FBYyxFQUFFLGNBQWM7QUFDcEMsS0FBSyxDQUFDO0FBQ047QUFDQSxJQUFJLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRTtBQUNuQyxNQUFNLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQzFCLE1BQU0sT0FBTztBQUNiLEtBQUs7QUFDTDtBQUNBLElBQUksTUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNqQixHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtBQUNwQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO0FBQzNCLE1BQU0sRUFBRSxNQUFNLENBQUM7QUFDZixNQUFNLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztBQUN0QyxLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxVQUFVLFFBQVEsRUFBRTtBQUM3QyxFQUFFLE9BQU8sUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUM7QUFDdEcsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxRQUFRLEVBQUUsVUFBVSxFQUFFO0FBQ3BFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUNoQyxJQUFJLE1BQU0sS0FBSyxDQUFDLGtEQUFrRCxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzlFLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxPQUFPLFVBQVUsS0FBSyxVQUFVLEVBQUU7QUFDeEMsSUFBSSxNQUFNLEtBQUssQ0FBQyxrREFBa0QsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM5RSxHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUN6QyxJQUFJLE1BQU0sS0FBSyxDQUFDLHFCQUFxQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ25ELEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDaEU7QUFDQSxFQUFFLFNBQVM7QUFDWCxJQUFJLElBQUksWUFBWSxFQUFFLGNBQWMsQ0FBQztBQUNyQztBQUNBLElBQUksSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLE1BQU0sRUFBRSxNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN4RSxJQUFJLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNqQyxJQUFJLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckM7QUFDQSxJQUFJLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO0FBQzFDO0FBQ0EsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQzFCLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN6QjtBQUNBLEtBQUssTUFBTSxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtBQUM5QztBQUNBLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQztBQUMzQixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFDekI7QUFDQSxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksWUFBWSxJQUFJLFlBQVksSUFBSSxJQUFJLEtBQUssWUFBWSxLQUFLLElBQUksRUFBRSxDQUFDLE1BQU07QUFDMUYsUUFBUSxJQUFJLE1BQU0sR0FBRyxDQUFDLElBQUksTUFBTSxFQUFFLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQzVFLFFBQVEsY0FBYyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDOUUsUUFBUSxJQUFJLGNBQWMsR0FBRyxDQUFDLEVBQUUsTUFBTSxLQUFLLENBQUMsd0JBQXdCLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDbEYsUUFBUSxJQUFJLE1BQU0sR0FBRyxjQUFjLEdBQUcsQ0FBQyxJQUFJLE1BQU0sRUFBRSxNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUM3RixPQUFPO0FBQ1A7QUFDQSxNQUFNLElBQUksV0FBVyxFQUFFO0FBQ3ZCLFFBQVEsSUFBSSxZQUFZLElBQUksSUFBSSxJQUFJLFlBQVksSUFBSSxJQUFJLEVBQUUsQ0FBQyxNQUFNO0FBQ2pFLFVBQVUsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUM5QixTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsTUFBTSxJQUFJLFlBQVksS0FBSyxJQUFJLFlBQVksV0FBVyxHQUFHLElBQUksQ0FBQztBQUM5RCxLQUFLLE1BQU0sSUFBSSxXQUFXLEVBQUU7QUFDNUI7QUFDQSxNQUFNLEtBQUssSUFBSSxHQUFHLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRTtBQUMxQztBQUNBLFFBQVEsSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3JFLFFBQVEsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFO0FBQ3BDLFVBQVUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLE1BQU0sRUFBRSxNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMzRSxVQUFVLElBQUksUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDdkMsWUFBWSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLFlBQVksY0FBYyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7QUFDMUMsWUFBWSxNQUFNO0FBQ2xCLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUssTUFBTTtBQUNYLE1BQU0sTUFBTSxLQUFLLENBQUMsb0NBQW9DLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUN0RSxRQUFRLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3hELEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxDQUFDLEtBQUssS0FBSyxFQUFFLE1BQU07QUFDcEcsSUFBSSxJQUFJLFlBQVksS0FBSyxJQUFJLFlBQVksTUFBTTtBQUMvQyxJQUFJLE1BQU0sSUFBSSxjQUFjLENBQUM7QUFDN0IsR0FBRztBQUNILENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDdEUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ2hDLElBQUksTUFBTSxLQUFLLENBQUMsa0RBQWtELEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDOUUsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsRUFBRTtBQUN4QyxJQUFJLE1BQU0sS0FBSyxDQUFDLGtEQUFrRCxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzlFLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLEVBQUUsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCO0FBQ0EsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxVQUFVLE9BQU8sRUFBRTtBQUNqRSxJQUFJLElBQUksV0FBVyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMxQztBQUNBLElBQUksSUFBSSxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUU7QUFDcEMsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDekMsTUFBTSxVQUFVLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQztBQUN2QyxLQUFLLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBQzNDLE1BQU0sV0FBVyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDN0QsUUFBUSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDakMsUUFBUSxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUMvQixPQUFPLENBQUMsQ0FBQztBQUNULEtBQUssTUFBTSxJQUFJLFdBQVcsS0FBSyxLQUFLLEVBQUU7QUFDdEMsTUFBTSxJQUFJLFNBQVMsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN0RjtBQUNBLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDLEtBQUssRUFBRTtBQUNsRixRQUFRLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDO0FBQ3RELE9BQU8sTUFBTTtBQUNiLFFBQVEsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMvQixPQUFPO0FBQ1A7QUFDQSxNQUFNLFVBQVUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQ25DLEtBQUs7QUFDTCxHQUFHLENBQUMsQ0FBQztBQUNMO0FBQ0EsRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMxQyxFQUFFLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNqQjtBQUNBLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssRUFBRTtBQUNsQyxJQUFJLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2RSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDMUIsR0FBRyxDQUFDLENBQUM7QUFDTDtBQUNBLEVBQUUsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEdBQUcsVUFBVSxRQUFRLEVBQUUsYUFBYSxFQUFFO0FBQ3hFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUNoQyxJQUFJLE1BQU0sS0FBSyxDQUFDLGtEQUFrRCxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzlFLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxPQUFPLGFBQWEsS0FBSyxVQUFVLEVBQUU7QUFDM0MsSUFBSSxNQUFNLEtBQUssQ0FBQyxxREFBcUQsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNqRixHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxPQUFPLEVBQUU7QUFDakUsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxZQUFZLE9BQU8sS0FBSyxDQUFDO0FBQ3REO0FBQ0E7QUFDQSxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxFQUFFO0FBQ3JELFFBQVEsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUk7QUFDdEYsUUFBUSxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSTtBQUN0RixRQUFRLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7QUFDeEY7QUFDQSxNQUFNLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDekcsTUFBTSxPQUFPLEtBQUssQ0FBQztBQUNuQixLQUFLO0FBQ0wsR0FBRyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQixHQUFHLFVBQVUsUUFBUSxFQUFFLGFBQWEsRUFBRTtBQUMxRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxNQUFNLEtBQUssQ0FBQyxrREFBa0QsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM5RSxHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksT0FBTyxhQUFhLEtBQUssVUFBVSxFQUFFO0FBQzNDLElBQUksTUFBTSxLQUFLLENBQUMscURBQXFELEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDakYsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDMUI7QUFDQSxFQUFFLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxPQUFPLEVBQUU7QUFDMUUsSUFBSSxJQUFJLFdBQVcsRUFBRSxPQUFPO0FBQzVCLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksWUFBWSxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQzVEO0FBQ0E7QUFDQSxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxFQUFFO0FBQ3JELFFBQVEsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUk7QUFDdEYsUUFBUSxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSTtBQUN0RixRQUFRLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7QUFDeEY7QUFDQSxNQUFNLElBQUksUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFDbkcsU0FBUyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDL0IsTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQ2xDO0FBQ0EsTUFBTSxJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0QztBQUNBLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLE1BQU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDO0FBQ3ZELE1BQU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0FBQy9DO0FBQ0EsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLE1BQU0sT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUNsQyxLQUFLO0FBQ0wsR0FBRyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBQy9ELEVBQUUsSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLEVBQUUsYUFBYSxHQUFHLENBQUMsQ0FBQztBQUNsRDtBQUNBLEVBQUUsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxVQUFVLE9BQU8sRUFBRTtBQUMxRSxJQUFJLGFBQWEsRUFBRSxDQUFDO0FBQ3BCLElBQUksSUFBSSxhQUFhLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxhQUFhLE9BQU87QUFDeEUsSUFBSSxJQUFJLGFBQWEsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLGFBQWEsT0FBTztBQUN4RTtBQUNBLElBQUksSUFBSSxnQkFBZ0IsRUFBRSxPQUFPO0FBQ2pDLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuQztBQUNBO0FBQ0EsSUFBSSxJQUFJLFFBQVEsR0FBRyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RELElBQUksSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ25CO0FBQ0EsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDOUIsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDOUIsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQztBQUM3RCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0FBQ3JEO0FBQ0EsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUMzQyxNQUFNLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2xELEtBQUssQ0FBQyxDQUFDO0FBQ1A7QUFDQSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMzQixJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUM1QjtBQUNBLElBQUksT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztBQUM1RixHQUFHLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUNGLENBQUMsQ0FBQyxDQUFDO0FBQ0g7QUFDQSxTQUFTLGVBQWUsQ0FBQyxHQUFHLEVBQUU7QUFDOUIsRUFBRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRTtBQUM1RCxJQUFJLEdBQUcsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQztBQUNBLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xEO0FBQ0EsSUFBSSxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFDN0I7QUFDQSxJQUFJLElBQUk7QUFDUixNQUFNLElBQUksa0JBQWtCLEVBQUUsa0JBQWtCLENBQUM7QUFDakQ7QUFDQTtBQUNBLE1BQU0sY0FBYyxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxVQUFVLEtBQUssRUFBRTtBQUNoRSxRQUFRLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDbEYsVUFBVSxHQUFHLENBQUMsV0FBVyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25ELFVBQVUsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztBQUNuRCxVQUFVLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7QUFDakQsVUFBVSxPQUFPLEtBQUssQ0FBQztBQUN2QixTQUFTO0FBQ1QsT0FBTyxDQUFDLENBQUM7QUFDVDtBQUNBLE1BQU0sSUFBSSxrQkFBa0IsRUFBRTtBQUM5QixRQUFRLElBQUksaUJBQWlCLEdBQUcsa0JBQWtCO0FBQ2xELFVBQVUsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDbEMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ25DO0FBQ0EsUUFBUSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDO0FBQzVCLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUM7QUFDM0MsVUFBVSxpQkFBaUI7QUFDM0IsVUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQUM1QyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUNuQyxPQUFPO0FBQ1AsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7QUFDbEI7QUFDQSxJQUFJLE9BQU8sR0FBRyxDQUFDO0FBQ2YsR0FBRyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLFNBQVMsa0JBQWtCLENBQUMsR0FBRyxFQUFFO0FBQ2pDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hEO0FBQ0EsRUFBRSxJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztBQUN4QyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hEO0FBQ0EsRUFBRSxJQUFJLE1BQU0sQ0FBQztBQUNiO0FBQ0EsRUFBRSxJQUFJLFdBQVcsR0FBRyxDQUFDLEVBQUU7QUFDdkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekYsR0FBRyxNQUFNO0FBQ1QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekYsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDO0FBQ0EsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDYjtBQUNBLEVBQUUsSUFBSSxXQUFXLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuRSxFQUFFLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEYsRUFBRSxJQUFJLFdBQVcsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZEO0FBQ0EsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ25EO0FBQ0EsRUFBRSxHQUFHLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztBQUMxQjtBQUNBLEVBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFDRDtBQUNBO0FBQ0EsU0FBUyx5QkFBeUIsQ0FBQyxHQUFHLEVBQUU7QUFDeEMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEQ7QUFDQSxFQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUNyQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztBQUNqQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUNyQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7QUFDekIsSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEIsSUFBSSxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUI7QUFDQSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRTtBQUNBLElBQUksSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3RCO0FBQ0EsSUFBSSxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLFVBQVUsT0FBTyxFQUFFO0FBQy9ELE1BQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksWUFBWSxPQUFPLEtBQUssQ0FBQztBQUN4RCxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsS0FBSyxDQUFDLENBQUM7QUFDUDtBQUNBLElBQUksUUFBUSxHQUFHLFFBQVE7QUFDdkIsT0FBTyxNQUFNLENBQUMsVUFBVSxPQUFPLEVBQUU7QUFDakM7QUFDQTtBQUNBLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRSxPQUFPLEtBQUssQ0FBQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRSxPQUFPLElBQUksQ0FBQztBQUMvQztBQUNBLFFBQVEsT0FBTyxLQUFLLENBQUM7QUFDckIsT0FBTyxDQUFDO0FBQ1IsT0FBTyxHQUFHLENBQUMsVUFBVSxPQUFPLEVBQUU7QUFDOUIsUUFBUSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzRSxPQUFPLENBQUMsQ0FBQztBQUNUO0FBQ0EsSUFBSSxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSTtBQUMzQjtBQUNBLE1BQU0sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDOUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7QUFDNUIsS0FBSyxDQUFDO0FBQ047QUFDQSxJQUFJLE9BQU8sR0FBRyxDQUFDO0FBQ2YsR0FBRyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLFNBQVMsTUFBTSxDQUFDLE9BQU8sRUFBRTtBQUN6QixFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDcEQsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksT0FBTyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3ZELEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEtBQUsseUJBQXlCLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksaUJBQWlCLEdBQUcsZUFBZSxDQUFDO0FBQ3hDLElBQUksb0JBQW9CLEdBQUcsa0JBQWtCLENBQUM7QUFDOUMsSUFBSSwyQkFBMkIsR0FBRyx5QkFBeUIsQ0FBQztBQUM1RCxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUM7QUFDdEI7QUFDQSxJQUFJLFlBQVksR0FBRztBQUNuQixDQUFDLGVBQWUsRUFBRSxpQkFBaUI7QUFDbkMsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0I7QUFDekMsQ0FBQyx5QkFBeUIsRUFBRSwyQkFBMkI7QUFDdkQsQ0FBQyxNQUFNLEVBQUUsUUFBUTtBQUNqQixDQUFDLENBQUM7QUFDRjtBQUNBLFNBQVMsZUFBZSxDQUFDLE9BQU8sRUFBRTtBQUNsQyxFQUFFLElBQUksRUFBRSxJQUFJLFlBQVksZUFBZSxDQUFDLEVBQUUsT0FBTyxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5RTtBQUNBLEVBQUUsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDMUI7QUFDQSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkMsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUMzQjtBQUNBLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDckIsQ0FBQztBQUNEO0FBQ0E7QUFDQSxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxVQUFVLE1BQU0scUJBQXFCO0FBQ3JFLEVBQUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0IsRUFBRSxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQSxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxZQUFZO0FBQzdDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsSUFBSSxFQUFFLE9BQU8sRUFBRTtBQUM1RCxFQUFFLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEQsRUFBRSxJQUFJLEdBQUcsR0FBRztBQUNaLElBQUksSUFBSSxFQUFFLElBQUk7QUFDZCxJQUFJLElBQUksRUFBRSxJQUFJO0FBQ2QsR0FBRyxDQUFDO0FBQ0o7QUFDQSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2hCLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDNUIsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQzdCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7QUFDOUIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztBQUMvQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQzFCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDeEIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztBQUM1QixLQUFLLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRTtBQUMxQjtBQUNBO0FBQ0EsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDekQ7QUFDQSxNQUFNLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUMzQixLQUFLLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQSxlQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFVLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDOUQsRUFBRSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELEVBQUUsSUFBSSxHQUFHLEdBQUc7QUFDWixJQUFJLElBQUksRUFBRSxJQUFJO0FBQ2QsSUFBSSxJQUFJLEVBQUUsSUFBSTtBQUNkLEdBQUcsQ0FBQztBQUNKO0FBQ0EsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNoQixJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQzVCLEdBQUc7QUFDSDtBQUNBLEVBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUM3QixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0FBQzlCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7QUFDL0IsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUMxQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3hCLEtBQUssSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZELENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQSxlQUFlLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFVLFdBQVcsRUFBRSxFQUFFLEVBQUU7QUFDOUQsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxHQUFHLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3pGLEVBQUUsSUFBSSxPQUFPLEVBQUUsS0FBSyxVQUFVLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0FBQzVGO0FBQ0EsRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDakMsRUFBRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbEI7QUFDQSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxVQUFVLEdBQUcsRUFBRTtBQUNyQyxJQUFJLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFO0FBQ25ELE1BQU0sT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyQyxLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUcsQ0FBQztBQUNKO0FBQ0EsRUFBRSxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQSxlQUFlLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLFdBQVcsRUFBRSxFQUFFLEVBQUU7QUFDN0QsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxHQUFHLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3pGLEVBQUUsSUFBSSxPQUFPLEVBQUUsS0FBSyxVQUFVLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0FBQzVGO0FBQ0EsRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDakMsRUFBRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbEI7QUFDQSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxVQUFVLEdBQUcsRUFBRTtBQUNyQyxJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFO0FBQ3ZELE1BQU0sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqQyxLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUcsQ0FBQztBQUNKO0FBQ0EsRUFBRSxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQSxlQUFlLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxVQUFVLEdBQUcsRUFBRTtBQUMxRCxFQUFFLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDNUU7QUFDQSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1QyxFQUFFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEQsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0FBQ2hDO0FBQ0EsRUFBRSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUNoRCxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFlBQVksRUFBRSxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNsSCxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFlBQVksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3JELEdBQUcsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBLGVBQWUsQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLFVBQVUsR0FBRyxFQUFFO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLFlBQVksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEY7QUFDQSxFQUFFLElBQUksWUFBWSxHQUFHLENBQUMsRUFBRSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDO0FBQ0EsRUFBRSxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNoRixFQUFFLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEY7QUFDQTtBQUNBLEVBQUUsR0FBRyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7QUFDbEM7QUFDQSxFQUFFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0EsZUFBZSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsVUFBVSxHQUFHLEVBQUU7QUFDdEQsRUFBRSxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzdGO0FBQ0E7QUFDQTtBQUNBLEVBQUUsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7QUFDN0IsRUFBRSxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0FBQzlCO0FBQ0E7QUFDQSxFQUFFLElBQUksU0FBUyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRSxDQUFDO0FBQzNEO0FBQ0E7QUFDQSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzlFO0FBQ0EsRUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJO0FBQ2xCLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUM7QUFDakQsS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQSxlQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFVLEdBQUcsRUFBRTtBQUNwRCxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNyQixFQUFFLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ25CO0FBQ0EsRUFBRSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQzVFLEVBQUUsSUFBSSxHQUFHLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlEO0FBQ0EsRUFBRSxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUN2QjtBQUNBLEVBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQSxlQUFlLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxVQUFVLEdBQUcsRUFBRTtBQUN4RCxFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN4RCxLQUFLLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRTtBQUMxQixNQUFNLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQzFCLE1BQU0sT0FBTyxHQUFHLENBQUM7QUFDakIsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0EsZUFBZSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsVUFBVSxJQUFJLEVBQUU7QUFDM0QsRUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDeEIsSUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7QUFDbEQsTUFBTSxPQUFPLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUNoRCxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7QUFDOUI7QUFDQSxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQjtBQUNBLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxZQUFZLEVBQUUsT0FBTyxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEdBQUcsWUFBWTtBQUM3QixNQUFNLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDLENBQUM7QUFDaEYsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDakIsS0FBSyxDQUFDO0FBQ04sSUFBSSxFQUFFLENBQUMsT0FBTyxHQUFHLFlBQVk7QUFDN0IsTUFBTSxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQyxDQUFDO0FBQzFGLEtBQUssQ0FBQztBQUNOLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBLGVBQWUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQzVCO0FBQ0csSUFBQyxlQUFlLEdBQUc7Ozs7In0=
