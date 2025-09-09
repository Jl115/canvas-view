'use strict';

var main = require('./main-8c6d7706.js');
var _commonjsDynamicModules = require('./_commonjs-dynamic-modules-7b2f3bb8.js');

function _mergeNamespaces(n, m) {
  m.forEach(function (e) {
    e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
      if (k !== 'default' && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  });
  return Object.freeze(n);
}

var pica$2 = {exports: {}};

/*!

pica
https://github.com/nodeca/pica

*/
pica$2.exports;

var hasRequiredPica;

function requirePica () {
	if (hasRequiredPica) return pica$2.exports;
	hasRequiredPica = 1;
	(function (module, exports) {
		(function(f){{module.exports=f();}})(function(){return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof _commonjsDynamicModules.commonjsRequire&&_commonjsDynamicModules.commonjsRequire;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t);}return n[i].exports}for(var u="function"==typeof _commonjsDynamicModules.commonjsRequire&&_commonjsDynamicModules.commonjsRequire,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){

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

		module.exports = 'AGFzbQEAAAAADAZkeWxpbmsAAAAAAAE0B2AAAGAEf39/fwBgBn9/f39/fwBgCH9/f39/f39/AGAIf39/f39/f30AYAJ9fwBgAXwBfAIZAgNlbnYDZXhwAAYDZW52Bm1lbW9yeQIAAAMHBgAFAgQBAwYGAX8AQQALB4oBCBFfX3dhc21fY2FsbF9jdG9ycwABFl9fYnVpbGRfZ2F1c3NpYW5fY29lZnMAAg5fX2dhdXNzMTZfbGluZQADCmJsdXJNb25vMTYABAdoc3ZfdjE2AAUHdW5zaGFycAAGDF9fZHNvX2hhbmRsZQMAGF9fd2FzbV9hcHBseV9kYXRhX3JlbG9jcwABCsUMBgMAAQvWAQEHfCABRNuGukOCGvs/IAC7oyICRAAAAAAAAADAohAAIgW2jDgCFCABIAKaEAAiAyADoCIGtjgCECABRAAAAAAAAPA/IAOhIgQgBKIgAyACIAKgokQAAAAAAADwP6AgBaGjIgS2OAIAIAEgBSAEmqIiB7Y4AgwgASADIAJEAAAAAAAA8D+gIASioiIItjgCCCABIAMgAkQAAAAAAADwv6AgBKKiIgK2OAIEIAEgByAIoCAFRAAAAAAAAPA/IAahoCIDo7Y4AhwgASAEIAKgIAOjtjgCGAuGBQMGfwl8An0gAyoCDCEVIAMqAgghFiADKgIUuyERIAMqAhC7IRACQCAEQQFrIghBAEgiCQRAIAIhByAAIQYMAQsgAiAALwEAuCIPIAMqAhi7oiIMIBGiIg0gDCAQoiAPIAMqAgS7IhOiIhQgAyoCALsiEiAPoqCgoCIOtjgCACACQQRqIQcgAEECaiEGIAhFDQAgCEEBIAhBAUgbIgpBf3MhCwJ/IAQgCmtBAXFFBEAgDiENIAgMAQsgAiANIA4gEKIgFCASIAAvAQK4Ig+ioKCgIg22OAIEIAJBCGohByAAQQRqIQYgDiEMIARBAmsLIQIgC0EAIARrRg0AA0AgByAMIBGiIA0gEKIgDyAToiASIAYvAQC4Ig6ioKCgIgy2OAIAIAcgDSARoiAMIBCiIA4gE6IgEiAGLwECuCIPoqCgoCINtjgCBCAHQQhqIQcgBkEEaiEGIAJBAkohACACQQJrIQIgAA0ACwsCQCAJDQAgASAFIAhsQQF0aiIAAn8gBkECay8BACICuCINIBW7IhKiIA0gFrsiE6KgIA0gAyoCHLuiIgwgEKKgIAwgEaKgIg8gB0EEayIHKgIAu6AiDkQAAAAAAADwQWMgDkQAAAAAAAAAAGZxBEAgDqsMAQtBAAs7AQAgCEUNACAGQQRrIQZBACAFa0EBdCEBA0ACfyANIBKiIAJB//8DcbgiDSAToqAgDyIOIBCioCAMIBGioCIPIAdBBGsiByoCALugIgxEAAAAAAAA8EFjIAxEAAAAAAAAAABmcQRAIAyrDAELQQALIQMgBi8BACECIAAgAWoiACADOwEAIAZBAmshBiAIQQFKIQMgDiEMIAhBAWshCCADDQALCwvRAgIBfwd8AkAgB0MAAAAAWw0AIARE24a6Q4Ia+z8gB0MAAAA/l7ujIglEAAAAAAAAAMCiEAAiDLaMOAIUIAQgCZoQACIKIAqgIg22OAIQIAREAAAAAAAA8D8gCqEiCyALoiAKIAkgCaCiRAAAAAAAAPA/oCAMoaMiC7Y4AgAgBCAMIAuaoiIOtjgCDCAEIAogCUQAAAAAAADwP6AgC6KiIg+2OAIIIAQgCiAJRAAAAAAAAPC/oCALoqIiCbY4AgQgBCAOIA+gIAxEAAAAAAAA8D8gDaGgIgqjtjgCHCAEIAsgCaAgCqO2OAIYIAYEQANAIAAgBSAIbEEBdGogAiAIQQF0aiADIAQgBSAGEAMgCEEBaiIIIAZHDQALCyAFRQ0AQQAhCANAIAIgBiAIbEEBdGogASAIQQF0aiADIAQgBiAFEAMgCEEBaiIIIAVHDQALCwtxAQN/IAIgA2wiBQRAA0AgASAAKAIAIgRBEHZB/wFxIgIgAiAEQQh2Qf8BcSIDIAMgBEH/AXEiBEkbIAIgA0sbIgYgBiAEIAIgBEsbIAMgBEsbQQh0OwEAIAFBAmohASAAQQRqIQAgBUEBayIFDQALCwuZAgIDfwF8IAQgBWwhBAJ/IAazQwAAgEWUQwAAyEKVu0QAAAAAAADgP6AiC5lEAAAAAAAA4EFjBEAgC6oMAQtBgICAgHgLIQUgBARAIAdBCHQhCUEAIQYDQCAJIAIgBkEBdCIHai8BACIBIAMgB2ovAQBrIgcgB0EfdSIIaiAIc00EQCAAIAZBAnQiCGoiCiAFIAdsQYAQakEMdSABaiIHQYD+AyAHQYD+A0gbIgdBACAHQQBKG0EMdCABQQEgARtuIgEgCi0AAGxBgBBqQQx2OgAAIAAgCEEBcmoiByABIActAABsQYAQakEMdjoAACAAIAhBAnJqIgcgASAHLQAAbEGAEGpBDHY6AAALIAZBAWoiBiAERw0ACwsL';

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
		      tileOpts.srcBitmap = null; // Temporary force out data to typed array, because Chrome have artefacts
		      // https://github.com/nodeca/pica/issues/223
		      // returnBitmap = true;
		    }

		    if (!mathLib) mathLib = new MathLib(ev.data.features); // Use multimath's sync auto-init. Avoid Promise use in old browsers,
		    // because polyfills are not propagated to webworker.

		    var data = mathLib.resizeAndUnsharp(tileOpts);

		    {
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
	} (pica$2, pica$2.exports));
	return pica$2.exports;
}

var picaExports = requirePica();
var pica = /*@__PURE__*/main.getDefaultExportFromCjs(picaExports);

var pica$1 = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': pica
}, [picaExports]);

exports.pica = pica$1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljYS1lYTVjYmEwMi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3BpY2EvZGlzdC9waWNhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuXG5waWNhXG5odHRwczovL2dpdGh1Yi5jb20vbm9kZWNhL3BpY2FcblxuKi9cblxuKGZ1bmN0aW9uKGYpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPWYoKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXSxmKX1lbHNle3ZhciBnO2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtnPXdpbmRvd31lbHNlIGlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiKXtnPWdsb2JhbH1lbHNlIGlmKHR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIil7Zz1zZWxmfWVsc2V7Zz10aGlzfWcucGljYSA9IGYoKX19KShmdW5jdGlvbigpe3ZhciBkZWZpbmUsbW9kdWxlLGV4cG9ydHM7cmV0dXJuIChmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkoezE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gQ29sbGVjdGlvbiBvZiBtYXRoIGZ1bmN0aW9uc1xuLy9cbi8vIDEuIENvbWJpbmUgY29tcG9uZW50cyB0b2dldGhlclxuLy8gMi4gSGFzIGFzeW5jIGluaXQgdG8gbG9hZCB3YXNtIG1vZHVsZXNcbi8vXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IF9kZXJlcV8oJ2luaGVyaXRzJyk7XG5cbnZhciBNdWx0aW1hdGggPSBfZGVyZXFfKCdtdWx0aW1hdGgnKTtcblxudmFyIG1tX3Vuc2hhcnBfbWFzayA9IF9kZXJlcV8oJy4vbW1fdW5zaGFycF9tYXNrJyk7XG5cbnZhciBtbV9yZXNpemUgPSBfZGVyZXFfKCcuL21tX3Jlc2l6ZScpO1xuXG5mdW5jdGlvbiBNYXRoTGliKHJlcXVlc3RlZF9mZWF0dXJlcykge1xuICB2YXIgX19yZXF1ZXN0ZWRfZmVhdHVyZXMgPSByZXF1ZXN0ZWRfZmVhdHVyZXMgfHwgW107XG5cbiAgdmFyIGZlYXR1cmVzID0ge1xuICAgIGpzOiBfX3JlcXVlc3RlZF9mZWF0dXJlcy5pbmRleE9mKCdqcycpID49IDAsXG4gICAgd2FzbTogX19yZXF1ZXN0ZWRfZmVhdHVyZXMuaW5kZXhPZignd2FzbScpID49IDBcbiAgfTtcbiAgTXVsdGltYXRoLmNhbGwodGhpcywgZmVhdHVyZXMpO1xuICB0aGlzLmZlYXR1cmVzID0ge1xuICAgIGpzOiBmZWF0dXJlcy5qcyxcbiAgICB3YXNtOiBmZWF0dXJlcy53YXNtICYmIHRoaXMuaGFzX3dhc20oKVxuICB9O1xuICB0aGlzLnVzZShtbV91bnNoYXJwX21hc2spO1xuICB0aGlzLnVzZShtbV9yZXNpemUpO1xufVxuXG5pbmhlcml0cyhNYXRoTGliLCBNdWx0aW1hdGgpO1xuXG5NYXRoTGliLnByb3RvdHlwZS5yZXNpemVBbmRVbnNoYXJwID0gZnVuY3Rpb24gcmVzaXplQW5kVW5zaGFycChvcHRpb25zLCBjYWNoZSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5yZXNpemUob3B0aW9ucywgY2FjaGUpO1xuXG4gIGlmIChvcHRpb25zLnVuc2hhcnBBbW91bnQpIHtcbiAgICB0aGlzLnVuc2hhcnBfbWFzayhyZXN1bHQsIG9wdGlvbnMudG9XaWR0aCwgb3B0aW9ucy50b0hlaWdodCwgb3B0aW9ucy51bnNoYXJwQW1vdW50LCBvcHRpb25zLnVuc2hhcnBSYWRpdXMsIG9wdGlvbnMudW5zaGFycFRocmVzaG9sZCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXRoTGliO1xuXG59LHtcIi4vbW1fcmVzaXplXCI6NCxcIi4vbW1fdW5zaGFycF9tYXNrXCI6OSxcImluaGVyaXRzXCI6MTksXCJtdWx0aW1hdGhcIjoyMH1dLDI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gUmVzaXplIGNvbnZvbHZlcnMsIHB1cmUgSlMgaW1wbGVtZW50YXRpb25cbi8vXG4ndXNlIHN0cmljdCc7IC8vIFByZWNpc2lvbiBvZiBmaXhlZCBGUCB2YWx1ZXNcbi8vdmFyIEZJWEVEX0ZSQUNfQklUUyA9IDE0O1xuXG5mdW5jdGlvbiBjbGFtcFRvOChpKSB7XG4gIHJldHVybiBpIDwgMCA/IDAgOiBpID4gMjU1ID8gMjU1IDogaTtcbn0gLy8gQ29udm9sdmUgaW1hZ2UgaW4gaG9yaXpvbnRhbCBkaXJlY3Rpb25zIGFuZCB0cmFuc3Bvc2Ugb3V0cHV0LiBJbiB0aGVvcnksXG4vLyB0cmFuc3Bvc2UgYWxsb3c6XG4vL1xuLy8gLSB1c2UgdGhlIHNhbWUgY29udm9sdmVyIGZvciBib3RoIHBhc3NlcyAodGhpcyBmYWlscyBkdWUgZGlmZmVyZW50XG4vLyAgIHR5cGVzIG9mIGlucHV0IGFycmF5IGFuZCB0ZW1wb3JhcnkgYnVmZmVyKVxuLy8gLSBtYWtpbmcgdmVydGljYWwgcGFzcyBieSBob3Jpc29ubHRhbCBsaW5lcyBpbnByb3ZlIENQVSBjYWNoZSB1c2UuXG4vL1xuLy8gQnV0IGluIHJlYWwgbGlmZSB0aGlzIGRvZXNuJ3Qgd29yayA6KVxuLy9cblxuXG5mdW5jdGlvbiBjb252b2x2ZUhvcml6b250YWxseShzcmMsIGRlc3QsIHNyY1csIHNyY0gsIGRlc3RXLCBmaWx0ZXJzKSB7XG4gIHZhciByLCBnLCBiLCBhO1xuICB2YXIgZmlsdGVyUHRyLCBmaWx0ZXJTaGlmdCwgZmlsdGVyU2l6ZTtcbiAgdmFyIHNyY1B0ciwgc3JjWSwgZGVzdFgsIGZpbHRlclZhbDtcbiAgdmFyIHNyY09mZnNldCA9IDAsXG4gICAgICBkZXN0T2Zmc2V0ID0gMDsgLy8gRm9yIGVhY2ggcm93XG5cbiAgZm9yIChzcmNZID0gMDsgc3JjWSA8IHNyY0g7IHNyY1krKykge1xuICAgIGZpbHRlclB0ciA9IDA7IC8vIEFwcGx5IHByZWNvbXB1dGVkIGZpbHRlcnMgdG8gZWFjaCBkZXN0aW5hdGlvbiByb3cgcG9pbnRcblxuICAgIGZvciAoZGVzdFggPSAwOyBkZXN0WCA8IGRlc3RXOyBkZXN0WCsrKSB7XG4gICAgICAvLyBHZXQgdGhlIGZpbHRlciB0aGF0IGRldGVybWluZXMgdGhlIGN1cnJlbnQgb3V0cHV0IHBpeGVsLlxuICAgICAgZmlsdGVyU2hpZnQgPSBmaWx0ZXJzW2ZpbHRlclB0cisrXTtcbiAgICAgIGZpbHRlclNpemUgPSBmaWx0ZXJzW2ZpbHRlclB0cisrXTtcbiAgICAgIHNyY1B0ciA9IHNyY09mZnNldCArIGZpbHRlclNoaWZ0ICogNCB8IDA7XG4gICAgICByID0gZyA9IGIgPSBhID0gMDsgLy8gQXBwbHkgdGhlIGZpbHRlciB0byB0aGUgcm93IHRvIGdldCB0aGUgZGVzdGluYXRpb24gcGl4ZWwgciwgZywgYiwgYVxuXG4gICAgICBmb3IgKDsgZmlsdGVyU2l6ZSA+IDA7IGZpbHRlclNpemUtLSkge1xuICAgICAgICBmaWx0ZXJWYWwgPSBmaWx0ZXJzW2ZpbHRlclB0cisrXTsgLy8gVXNlIHJldmVyc2Ugb3JkZXIgdG8gd29ya2Fyb3VuZCBkZW9wdHMgaW4gb2xkIHY4IChub2RlIHYuMTApXG4gICAgICAgIC8vIEJpZyB0aGFua3MgdG8gQG1yYWxlcGggKFZ5YWNoZXNsYXYgRWdvcm92KSBmb3IgdGhlIHRpcC5cblxuICAgICAgICBhID0gYSArIGZpbHRlclZhbCAqIHNyY1tzcmNQdHIgKyAzXSB8IDA7XG4gICAgICAgIGIgPSBiICsgZmlsdGVyVmFsICogc3JjW3NyY1B0ciArIDJdIHwgMDtcbiAgICAgICAgZyA9IGcgKyBmaWx0ZXJWYWwgKiBzcmNbc3JjUHRyICsgMV0gfCAwO1xuICAgICAgICByID0gciArIGZpbHRlclZhbCAqIHNyY1tzcmNQdHJdIHwgMDtcbiAgICAgICAgc3JjUHRyID0gc3JjUHRyICsgNCB8IDA7XG4gICAgICB9IC8vIEJyaW5nIHRoaXMgdmFsdWUgYmFjayBpbiByYW5nZS4gQWxsIG9mIHRoZSBmaWx0ZXIgc2NhbGluZyBmYWN0b3JzXG4gICAgICAvLyBhcmUgaW4gZml4ZWQgcG9pbnQgd2l0aCBGSVhFRF9GUkFDX0JJVFMgYml0cyBvZiBmcmFjdGlvbmFsIHBhcnQuXG4gICAgICAvL1xuICAgICAgLy8gKCEpIEFkZCAxLzIgb2YgdmFsdWUgYmVmb3JlIGNsYW1waW5nIHRvIGdldCBwcm9wZXIgcm91bmRpbmcuIEluIG90aGVyXG4gICAgICAvLyBjYXNlIGJyaWdodG5lc3MgbG9zcyB3aWxsIGJlIG5vdGljZWFibGUgaWYgeW91IHJlc2l6ZSBpbWFnZSB3aXRoIHdoaXRlXG4gICAgICAvLyBib3JkZXIgYW5kIHBsYWNlIGl0IG9uIHdoaXRlIGJhY2tncm91bmQuXG4gICAgICAvL1xuXG5cbiAgICAgIGRlc3RbZGVzdE9mZnNldCArIDNdID0gY2xhbXBUbzgoYSArICgxIDw8IDEzKSA+PiAxNFxuICAgICAgLypGSVhFRF9GUkFDX0JJVFMqL1xuICAgICAgKTtcbiAgICAgIGRlc3RbZGVzdE9mZnNldCArIDJdID0gY2xhbXBUbzgoYiArICgxIDw8IDEzKSA+PiAxNFxuICAgICAgLypGSVhFRF9GUkFDX0JJVFMqL1xuICAgICAgKTtcbiAgICAgIGRlc3RbZGVzdE9mZnNldCArIDFdID0gY2xhbXBUbzgoZyArICgxIDw8IDEzKSA+PiAxNFxuICAgICAgLypGSVhFRF9GUkFDX0JJVFMqL1xuICAgICAgKTtcbiAgICAgIGRlc3RbZGVzdE9mZnNldF0gPSBjbGFtcFRvOChyICsgKDEgPDwgMTMpID4+IDE0XG4gICAgICAvKkZJWEVEX0ZSQUNfQklUUyovXG4gICAgICApO1xuICAgICAgZGVzdE9mZnNldCA9IGRlc3RPZmZzZXQgKyBzcmNIICogNCB8IDA7XG4gICAgfVxuXG4gICAgZGVzdE9mZnNldCA9IChzcmNZICsgMSkgKiA0IHwgMDtcbiAgICBzcmNPZmZzZXQgPSAoc3JjWSArIDEpICogc3JjVyAqIDQgfCAwO1xuICB9XG59IC8vIFRlY2huaWNhbGx5LCBjb252b2x2ZXJzIGFyZSB0aGUgc2FtZS4gQnV0IGlucHV0IGFycmF5IGFuZCB0ZW1wb3Jhcnlcbi8vIGJ1ZmZlciBjYW4gYmUgb2YgZGlmZmVyZW50IHR5cGUgKGVzcGVjaWFsbHksIGluIG9sZCBicm93c2VycykuIFNvLFxuLy8ga2VlcCBjb2RlIGluIHNlcGFyYXRlIGZ1bmN0aW9ucyB0byBhdm9pZCBkZW9wdGltaXphdGlvbnMgJiBzcGVlZCBsb3NzLlxuXG5cbmZ1bmN0aW9uIGNvbnZvbHZlVmVydGljYWxseShzcmMsIGRlc3QsIHNyY1csIHNyY0gsIGRlc3RXLCBmaWx0ZXJzKSB7XG4gIHZhciByLCBnLCBiLCBhO1xuICB2YXIgZmlsdGVyUHRyLCBmaWx0ZXJTaGlmdCwgZmlsdGVyU2l6ZTtcbiAgdmFyIHNyY1B0ciwgc3JjWSwgZGVzdFgsIGZpbHRlclZhbDtcbiAgdmFyIHNyY09mZnNldCA9IDAsXG4gICAgICBkZXN0T2Zmc2V0ID0gMDsgLy8gRm9yIGVhY2ggcm93XG5cbiAgZm9yIChzcmNZID0gMDsgc3JjWSA8IHNyY0g7IHNyY1krKykge1xuICAgIGZpbHRlclB0ciA9IDA7IC8vIEFwcGx5IHByZWNvbXB1dGVkIGZpbHRlcnMgdG8gZWFjaCBkZXN0aW5hdGlvbiByb3cgcG9pbnRcblxuICAgIGZvciAoZGVzdFggPSAwOyBkZXN0WCA8IGRlc3RXOyBkZXN0WCsrKSB7XG4gICAgICAvLyBHZXQgdGhlIGZpbHRlciB0aGF0IGRldGVybWluZXMgdGhlIGN1cnJlbnQgb3V0cHV0IHBpeGVsLlxuICAgICAgZmlsdGVyU2hpZnQgPSBmaWx0ZXJzW2ZpbHRlclB0cisrXTtcbiAgICAgIGZpbHRlclNpemUgPSBmaWx0ZXJzW2ZpbHRlclB0cisrXTtcbiAgICAgIHNyY1B0ciA9IHNyY09mZnNldCArIGZpbHRlclNoaWZ0ICogNCB8IDA7XG4gICAgICByID0gZyA9IGIgPSBhID0gMDsgLy8gQXBwbHkgdGhlIGZpbHRlciB0byB0aGUgcm93IHRvIGdldCB0aGUgZGVzdGluYXRpb24gcGl4ZWwgciwgZywgYiwgYVxuXG4gICAgICBmb3IgKDsgZmlsdGVyU2l6ZSA+IDA7IGZpbHRlclNpemUtLSkge1xuICAgICAgICBmaWx0ZXJWYWwgPSBmaWx0ZXJzW2ZpbHRlclB0cisrXTsgLy8gVXNlIHJldmVyc2Ugb3JkZXIgdG8gd29ya2Fyb3VuZCBkZW9wdHMgaW4gb2xkIHY4IChub2RlIHYuMTApXG4gICAgICAgIC8vIEJpZyB0aGFua3MgdG8gQG1yYWxlcGggKFZ5YWNoZXNsYXYgRWdvcm92KSBmb3IgdGhlIHRpcC5cblxuICAgICAgICBhID0gYSArIGZpbHRlclZhbCAqIHNyY1tzcmNQdHIgKyAzXSB8IDA7XG4gICAgICAgIGIgPSBiICsgZmlsdGVyVmFsICogc3JjW3NyY1B0ciArIDJdIHwgMDtcbiAgICAgICAgZyA9IGcgKyBmaWx0ZXJWYWwgKiBzcmNbc3JjUHRyICsgMV0gfCAwO1xuICAgICAgICByID0gciArIGZpbHRlclZhbCAqIHNyY1tzcmNQdHJdIHwgMDtcbiAgICAgICAgc3JjUHRyID0gc3JjUHRyICsgNCB8IDA7XG4gICAgICB9IC8vIEJyaW5nIHRoaXMgdmFsdWUgYmFjayBpbiByYW5nZS4gQWxsIG9mIHRoZSBmaWx0ZXIgc2NhbGluZyBmYWN0b3JzXG4gICAgICAvLyBhcmUgaW4gZml4ZWQgcG9pbnQgd2l0aCBGSVhFRF9GUkFDX0JJVFMgYml0cyBvZiBmcmFjdGlvbmFsIHBhcnQuXG4gICAgICAvL1xuICAgICAgLy8gKCEpIEFkZCAxLzIgb2YgdmFsdWUgYmVmb3JlIGNsYW1waW5nIHRvIGdldCBwcm9wZXIgcm91bmRpbmcuIEluIG90aGVyXG4gICAgICAvLyBjYXNlIGJyaWdodG5lc3MgbG9zcyB3aWxsIGJlIG5vdGljZWFibGUgaWYgeW91IHJlc2l6ZSBpbWFnZSB3aXRoIHdoaXRlXG4gICAgICAvLyBib3JkZXIgYW5kIHBsYWNlIGl0IG9uIHdoaXRlIGJhY2tncm91bmQuXG4gICAgICAvL1xuXG5cbiAgICAgIGRlc3RbZGVzdE9mZnNldCArIDNdID0gY2xhbXBUbzgoYSArICgxIDw8IDEzKSA+PiAxNFxuICAgICAgLypGSVhFRF9GUkFDX0JJVFMqL1xuICAgICAgKTtcbiAgICAgIGRlc3RbZGVzdE9mZnNldCArIDJdID0gY2xhbXBUbzgoYiArICgxIDw8IDEzKSA+PiAxNFxuICAgICAgLypGSVhFRF9GUkFDX0JJVFMqL1xuICAgICAgKTtcbiAgICAgIGRlc3RbZGVzdE9mZnNldCArIDFdID0gY2xhbXBUbzgoZyArICgxIDw8IDEzKSA+PiAxNFxuICAgICAgLypGSVhFRF9GUkFDX0JJVFMqL1xuICAgICAgKTtcbiAgICAgIGRlc3RbZGVzdE9mZnNldF0gPSBjbGFtcFRvOChyICsgKDEgPDwgMTMpID4+IDE0XG4gICAgICAvKkZJWEVEX0ZSQUNfQklUUyovXG4gICAgICApO1xuICAgICAgZGVzdE9mZnNldCA9IGRlc3RPZmZzZXQgKyBzcmNIICogNCB8IDA7XG4gICAgfVxuXG4gICAgZGVzdE9mZnNldCA9IChzcmNZICsgMSkgKiA0IHwgMDtcbiAgICBzcmNPZmZzZXQgPSAoc3JjWSArIDEpICogc3JjVyAqIDQgfCAwO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb252b2x2ZUhvcml6b250YWxseTogY29udm9sdmVIb3Jpem9udGFsbHksXG4gIGNvbnZvbHZlVmVydGljYWxseTogY29udm9sdmVWZXJ0aWNhbGx5XG59O1xuXG59LHt9XSwzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIFRoaXMgaXMgYXV0b2dlbmVyYXRlZCBmaWxlIGZyb20gbWF0aC53YXNtLCBkb24ndCBlZGl0LlxuLy9cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSAnQUdGemJRRUFBQUFBREFaa2VXeHBibXNBQUFBQUFBRVhBMkFBQUdBR2YzOS9mMzkvQUdBSGYzOS9mMzkvZndBQ0R3RURaVzUyQm0xbGJXOXllUUlBQUFNRUF3QUJBZ1lHQVg4QVFRQUxCMWNGRVY5ZmQyRnpiVjlqWVd4c1gyTjBiM0p6QUFBSVkyOXVkbTlzZG1VQUFRcGpiMjUyYjJ4MlpVaFdBQUlNWDE5a2MyOWZhR0Z1Wkd4bEF3QVlYMTkzWVhOdFgyRndjR3g1WDJSaGRHRmZjbVZzYjJOekFBQUs3QU1EQXdBQkM4WURBUTkvQWtBZ0EwVU5BQ0FFUlEwQUEwQWdEQ0VOUVFBaEUwRUFJUWNEUUNBSFFRSnFJUVlDZnlBSFFRRjBJQVZxSWdjdUFRSWlGRVVFUUVHQXdBQWhDRUdBd0FBaENVR0F3QUFoQ2tHQXdBQWhDeUFHREFFTElCSWdCeTRCQUdvaENFRUFJUXNnRkNFSFFRQWhEaUFHSVFsQkFDRVBRUUFoRUFOQUlBVWdDVUVCZEdvdUFRQWlFU0FBSUFoQkFuUnFLQUlBSWdwQkdIWnNJQkJxSVJBZ0NrSC9BWEVnRVd3Z0Myb2hDeUFLUVJCMlFmOEJjU0FSYkNBUGFpRVBJQXBCQ0haQi93RnhJQkZzSUE1cUlRNGdDRUVCYWlFSUlBbEJBV29oQ1NBSFFRRnJJZ2NOQUFzZ0MwR0FRR3NoQ0NBT1FZQkFheUVKSUE5QmdFQnJJUW9nRUVHQVFHc2hDeUFHSUJScUN5RUhJQUVnRFVFQ2RHb2dDVUVPZFNJR1FmOEJJQVpCL3dGSUd5SUdRUUFnQmtFQVNodEJDSFJCZ1A0RGNTQUtRUTUxSWdaQi93RWdCa0gvQVVnYklnWkJBQ0FHUVFCS0cwRVFkRUdBZ1B3SGNTQUxRUTUxSWdaQi93RWdCa0gvQVVnYklnWkJBQ0FHUVFCS0cwRVlkSEp5SUFoQkRuVWlCa0gvQVNBR1FmOEJTQnNpQmtFQUlBWkJBRW9iY2pZQ0FDQURJQTFxSVEwZ0UwRUJhaUlUSUFSSERRQUxJQXhCQVdvaURDQUNiQ0VTSUFNZ0RFY05BQXNMQ3g0QVFRQWdBaUFESUFRZ0JTQUFFQUVnQWtFQUlBUWdCU0FHSUFFUUFRcz0nO1xuXG59LHt9XSw0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6ICdyZXNpemUnLFxuICBmbjogX2RlcmVxXygnLi9yZXNpemUnKSxcbiAgd2FzbV9mbjogX2RlcmVxXygnLi9yZXNpemVfd2FzbScpLFxuICB3YXNtX3NyYzogX2RlcmVxXygnLi9jb252b2x2ZV93YXNtX2Jhc2U2NCcpXG59O1xuXG59LHtcIi4vY29udm9sdmVfd2FzbV9iYXNlNjRcIjozLFwiLi9yZXNpemVcIjo1LFwiLi9yZXNpemVfd2FzbVwiOjh9XSw1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUZpbHRlcnMgPSBfZGVyZXFfKCcuL3Jlc2l6ZV9maWx0ZXJfZ2VuJyk7XG5cbnZhciBjb252b2x2ZUhvcml6b250YWxseSA9IF9kZXJlcV8oJy4vY29udm9sdmUnKS5jb252b2x2ZUhvcml6b250YWxseTtcblxudmFyIGNvbnZvbHZlVmVydGljYWxseSA9IF9kZXJlcV8oJy4vY29udm9sdmUnKS5jb252b2x2ZVZlcnRpY2FsbHk7XG5cbmZ1bmN0aW9uIHJlc2V0QWxwaGEoZHN0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHZhciBwdHIgPSAzLFxuICAgICAgbGVuID0gd2lkdGggKiBoZWlnaHQgKiA0IHwgMDtcblxuICB3aGlsZSAocHRyIDwgbGVuKSB7XG4gICAgZHN0W3B0cl0gPSAweEZGO1xuICAgIHB0ciA9IHB0ciArIDQgfCAwO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVzaXplKG9wdGlvbnMpIHtcbiAgdmFyIHNyYyA9IG9wdGlvbnMuc3JjO1xuICB2YXIgc3JjVyA9IG9wdGlvbnMud2lkdGg7XG4gIHZhciBzcmNIID0gb3B0aW9ucy5oZWlnaHQ7XG4gIHZhciBkZXN0VyA9IG9wdGlvbnMudG9XaWR0aDtcbiAgdmFyIGRlc3RIID0gb3B0aW9ucy50b0hlaWdodDtcbiAgdmFyIHNjYWxlWCA9IG9wdGlvbnMuc2NhbGVYIHx8IG9wdGlvbnMudG9XaWR0aCAvIG9wdGlvbnMud2lkdGg7XG4gIHZhciBzY2FsZVkgPSBvcHRpb25zLnNjYWxlWSB8fCBvcHRpb25zLnRvSGVpZ2h0IC8gb3B0aW9ucy5oZWlnaHQ7XG4gIHZhciBvZmZzZXRYID0gb3B0aW9ucy5vZmZzZXRYIHx8IDA7XG4gIHZhciBvZmZzZXRZID0gb3B0aW9ucy5vZmZzZXRZIHx8IDA7XG4gIHZhciBkZXN0ID0gb3B0aW9ucy5kZXN0IHx8IG5ldyBVaW50OEFycmF5KGRlc3RXICogZGVzdEggKiA0KTtcbiAgdmFyIHF1YWxpdHkgPSB0eXBlb2Ygb3B0aW9ucy5xdWFsaXR5ID09PSAndW5kZWZpbmVkJyA/IDMgOiBvcHRpb25zLnF1YWxpdHk7XG4gIHZhciBhbHBoYSA9IG9wdGlvbnMuYWxwaGEgfHwgZmFsc2U7XG4gIHZhciBmaWx0ZXJzWCA9IGNyZWF0ZUZpbHRlcnMocXVhbGl0eSwgc3JjVywgZGVzdFcsIHNjYWxlWCwgb2Zmc2V0WCksXG4gICAgICBmaWx0ZXJzWSA9IGNyZWF0ZUZpbHRlcnMocXVhbGl0eSwgc3JjSCwgZGVzdEgsIHNjYWxlWSwgb2Zmc2V0WSk7XG4gIHZhciB0bXAgPSBuZXcgVWludDhBcnJheShkZXN0VyAqIHNyY0ggKiA0KTsgLy8gVG8gdXNlIHNpbmdsZSBmdW5jdGlvbiB3ZSBuZWVkIHNyYyAmIHRtcCBvZiB0aGUgc2FtZSB0eXBlLlxuICAvLyBCdXQgc3JjIGNhbiBiZSBDYW52YXNQaXhlbEFycmF5LCBhbmQgdG1wIC0gVWludDhBcnJheS4gU28sIGtlZXBcbiAgLy8gdmVydGljYWwgYW5kIGhvcml6b250YWwgcGFzc2VzIHNlcGFyYXRlbHkgdG8gYXZvaWQgZGVvcHRpbWl6YXRpb24uXG5cbiAgY29udm9sdmVIb3Jpem9udGFsbHkoc3JjLCB0bXAsIHNyY1csIHNyY0gsIGRlc3RXLCBmaWx0ZXJzWCk7XG4gIGNvbnZvbHZlVmVydGljYWxseSh0bXAsIGRlc3QsIHNyY0gsIGRlc3RXLCBkZXN0SCwgZmlsdGVyc1kpOyAvLyBUaGF0J3MgZmFzdGVyIHRoYW4gZG9pbmcgY2hlY2tzIGluIGNvbnZvbHZlci5cbiAgLy8gISEhIE5vdGUsIGNhbnZhcyBkYXRhIGlzIG5vdCBwcmVtdWx0aXBsZWQuIFdlIGRvbid0IG5lZWQgb3RoZXJcbiAgLy8gYWxwaGEgY29ycmVjdGlvbnMuXG5cbiAgaWYgKCFhbHBoYSkgcmVzZXRBbHBoYShkZXN0LCBkZXN0VywgZGVzdEgpO1xuICByZXR1cm4gZGVzdDtcbn07XG5cbn0se1wiLi9jb252b2x2ZVwiOjIsXCIuL3Jlc2l6ZV9maWx0ZXJfZ2VuXCI6Nn1dLDY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gQ2FsY3VsYXRlIGNvbnZvbHV0aW9uIGZpbHRlcnMgZm9yIGVhY2ggZGVzdGluYXRpb24gcG9pbnQsXG4vLyBhbmQgcGFjayBkYXRhIHRvIEludDE2QXJyYXk6XG4vL1xuLy8gWyBzaGlmdCwgbGVuZ3RoLCBkYXRhLi4uLCBzaGlmdDIsIGxlbmd0aDIsIGRhdGEuLi4sIC4uLiBdXG4vL1xuLy8gLSBzaGlmdCAtIG9mZnNldCBpbiBzcmMgaW1hZ2Vcbi8vIC0gbGVuZ3RoIC0gZmlsdGVyIGxlbmd0aCAoaW4gc3JjIHBvaW50cylcbi8vIC0gZGF0YSAtIGZpbHRlciB2YWx1ZXMgc2VxdWVuY2Vcbi8vXG4ndXNlIHN0cmljdCc7XG5cbnZhciBGSUxURVJfSU5GTyA9IF9kZXJlcV8oJy4vcmVzaXplX2ZpbHRlcl9pbmZvJyk7IC8vIFByZWNpc2lvbiBvZiBmaXhlZCBGUCB2YWx1ZXNcblxuXG52YXIgRklYRURfRlJBQ19CSVRTID0gMTQ7XG5cbmZ1bmN0aW9uIHRvRml4ZWRQb2ludChudW0pIHtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogKCgxIDw8IEZJWEVEX0ZSQUNfQklUUykgLSAxKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVzaXplRmlsdGVyR2VuKHF1YWxpdHksIHNyY1NpemUsIGRlc3RTaXplLCBzY2FsZSwgb2Zmc2V0KSB7XG4gIHZhciBmaWx0ZXJGdW5jdGlvbiA9IEZJTFRFUl9JTkZPW3F1YWxpdHldLmZpbHRlcjtcbiAgdmFyIHNjYWxlSW52ZXJ0ZWQgPSAxLjAgLyBzY2FsZTtcbiAgdmFyIHNjYWxlQ2xhbXBlZCA9IE1hdGgubWluKDEuMCwgc2NhbGUpOyAvLyBGb3IgdXBzY2FsZVxuICAvLyBGaWx0ZXIgd2luZG93IChhdmVyYWdpbmcgaW50ZXJ2YWwpLCBzY2FsZWQgdG8gc3JjIGltYWdlXG5cbiAgdmFyIHNyY1dpbmRvdyA9IEZJTFRFUl9JTkZPW3F1YWxpdHldLndpbiAvIHNjYWxlQ2xhbXBlZDtcbiAgdmFyIGRlc3RQaXhlbCwgc3JjUGl4ZWwsIHNyY0ZpcnN0LCBzcmNMYXN0LCBmaWx0ZXJFbGVtZW50U2l6ZSwgZmxvYXRGaWx0ZXIsIGZ4cEZpbHRlciwgdG90YWwsIHB4bCwgaWR4LCBmbG9hdFZhbCwgZmlsdGVyVG90YWwsIGZpbHRlclZhbDtcbiAgdmFyIGxlZnROb3RFbXB0eSwgcmlnaHROb3RFbXB0eSwgZmlsdGVyU2hpZnQsIGZpbHRlclNpemU7XG4gIHZhciBtYXhGaWx0ZXJFbGVtZW50U2l6ZSA9IE1hdGguZmxvb3IoKHNyY1dpbmRvdyArIDEpICogMik7XG4gIHZhciBwYWNrZWRGaWx0ZXIgPSBuZXcgSW50MTZBcnJheSgobWF4RmlsdGVyRWxlbWVudFNpemUgKyAyKSAqIGRlc3RTaXplKTtcbiAgdmFyIHBhY2tlZEZpbHRlclB0ciA9IDA7XG4gIHZhciBzbG93Q29weSA9ICFwYWNrZWRGaWx0ZXIuc3ViYXJyYXkgfHwgIXBhY2tlZEZpbHRlci5zZXQ7IC8vIEZvciBlYWNoIGRlc3RpbmF0aW9uIHBpeGVsIGNhbGN1bGF0ZSBzb3VyY2UgcmFuZ2UgYW5kIGJ1aWx0IGZpbHRlciB2YWx1ZXNcblxuICBmb3IgKGRlc3RQaXhlbCA9IDA7IGRlc3RQaXhlbCA8IGRlc3RTaXplOyBkZXN0UGl4ZWwrKykge1xuICAgIC8vIFNjYWxpbmcgc2hvdWxkIGJlIGRvbmUgcmVsYXRpdmUgdG8gY2VudHJhbCBwaXhlbCBwb2ludFxuICAgIHNyY1BpeGVsID0gKGRlc3RQaXhlbCArIDAuNSkgKiBzY2FsZUludmVydGVkICsgb2Zmc2V0O1xuICAgIHNyY0ZpcnN0ID0gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcihzcmNQaXhlbCAtIHNyY1dpbmRvdykpO1xuICAgIHNyY0xhc3QgPSBNYXRoLm1pbihzcmNTaXplIC0gMSwgTWF0aC5jZWlsKHNyY1BpeGVsICsgc3JjV2luZG93KSk7XG4gICAgZmlsdGVyRWxlbWVudFNpemUgPSBzcmNMYXN0IC0gc3JjRmlyc3QgKyAxO1xuICAgIGZsb2F0RmlsdGVyID0gbmV3IEZsb2F0MzJBcnJheShmaWx0ZXJFbGVtZW50U2l6ZSk7XG4gICAgZnhwRmlsdGVyID0gbmV3IEludDE2QXJyYXkoZmlsdGVyRWxlbWVudFNpemUpO1xuICAgIHRvdGFsID0gMC4wOyAvLyBGaWxsIGZpbHRlciB2YWx1ZXMgZm9yIGNhbGN1bGF0ZWQgcmFuZ2VcblxuICAgIGZvciAocHhsID0gc3JjRmlyc3QsIGlkeCA9IDA7IHB4bCA8PSBzcmNMYXN0OyBweGwrKywgaWR4KyspIHtcbiAgICAgIGZsb2F0VmFsID0gZmlsdGVyRnVuY3Rpb24oKHB4bCArIDAuNSAtIHNyY1BpeGVsKSAqIHNjYWxlQ2xhbXBlZCk7XG4gICAgICB0b3RhbCArPSBmbG9hdFZhbDtcbiAgICAgIGZsb2F0RmlsdGVyW2lkeF0gPSBmbG9hdFZhbDtcbiAgICB9IC8vIE5vcm1hbGl6ZSBmaWx0ZXIsIGNvbnZlcnQgdG8gZml4ZWQgcG9pbnQgYW5kIGFjY3VtdWxhdGUgY29udmVyc2lvbiBlcnJvclxuXG5cbiAgICBmaWx0ZXJUb3RhbCA9IDA7XG5cbiAgICBmb3IgKGlkeCA9IDA7IGlkeCA8IGZsb2F0RmlsdGVyLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgIGZpbHRlclZhbCA9IGZsb2F0RmlsdGVyW2lkeF0gLyB0b3RhbDtcbiAgICAgIGZpbHRlclRvdGFsICs9IGZpbHRlclZhbDtcbiAgICAgIGZ4cEZpbHRlcltpZHhdID0gdG9GaXhlZFBvaW50KGZpbHRlclZhbCk7XG4gICAgfSAvLyBDb21wZW5zYXRlIG5vcm1hbGl6YXRpb24gZXJyb3IsIHRvIG1pbmltaXplIGJyaWdodG5lc3MgZHJpZnRcblxuXG4gICAgZnhwRmlsdGVyW2Rlc3RTaXplID4+IDFdICs9IHRvRml4ZWRQb2ludCgxLjAgLSBmaWx0ZXJUb3RhbCk7IC8vXG4gICAgLy8gTm93IHBhY2sgZmlsdGVyIHRvIHVzZWFibGUgZm9ybVxuICAgIC8vXG4gICAgLy8gMS4gVHJpbSBoZWFkaW5nIGFuZCB0YWlsaW5nIHplcm8gdmFsdWVzLCBhbmQgY29tcGVuc2F0ZSBzaGl0Zi9sZW5ndGhcbiAgICAvLyAyLiBQdXQgYWxsIHRvIHNpbmdsZSBhcnJheSBpbiB0aGlzIGZvcm1hdDpcbiAgICAvL1xuICAgIC8vICAgIFsgcG9zIHNoaWZ0LCBkYXRhIGxlbmd0aCwgdmFsdWUxLCB2YWx1ZTIsIHZhbHVlMywgLi4uIF1cbiAgICAvL1xuXG4gICAgbGVmdE5vdEVtcHR5ID0gMDtcblxuICAgIHdoaWxlIChsZWZ0Tm90RW1wdHkgPCBmeHBGaWx0ZXIubGVuZ3RoICYmIGZ4cEZpbHRlcltsZWZ0Tm90RW1wdHldID09PSAwKSB7XG4gICAgICBsZWZ0Tm90RW1wdHkrKztcbiAgICB9XG5cbiAgICBpZiAobGVmdE5vdEVtcHR5IDwgZnhwRmlsdGVyLmxlbmd0aCkge1xuICAgICAgcmlnaHROb3RFbXB0eSA9IGZ4cEZpbHRlci5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocmlnaHROb3RFbXB0eSA+IDAgJiYgZnhwRmlsdGVyW3JpZ2h0Tm90RW1wdHldID09PSAwKSB7XG4gICAgICAgIHJpZ2h0Tm90RW1wdHktLTtcbiAgICAgIH1cblxuICAgICAgZmlsdGVyU2hpZnQgPSBzcmNGaXJzdCArIGxlZnROb3RFbXB0eTtcbiAgICAgIGZpbHRlclNpemUgPSByaWdodE5vdEVtcHR5IC0gbGVmdE5vdEVtcHR5ICsgMTtcbiAgICAgIHBhY2tlZEZpbHRlcltwYWNrZWRGaWx0ZXJQdHIrK10gPSBmaWx0ZXJTaGlmdDsgLy8gc2hpZnRcblxuICAgICAgcGFja2VkRmlsdGVyW3BhY2tlZEZpbHRlclB0cisrXSA9IGZpbHRlclNpemU7IC8vIHNpemVcblxuICAgICAgaWYgKCFzbG93Q29weSkge1xuICAgICAgICBwYWNrZWRGaWx0ZXIuc2V0KGZ4cEZpbHRlci5zdWJhcnJheShsZWZ0Tm90RW1wdHksIHJpZ2h0Tm90RW1wdHkgKyAxKSwgcGFja2VkRmlsdGVyUHRyKTtcbiAgICAgICAgcGFja2VkRmlsdGVyUHRyICs9IGZpbHRlclNpemU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBmYWxsYmFjayBmb3Igb2xkIElFIDwgMTEsIHdpdGhvdXQgc3ViYXJyYXkvc2V0IG1ldGhvZHNcbiAgICAgICAgZm9yIChpZHggPSBsZWZ0Tm90RW1wdHk7IGlkeCA8PSByaWdodE5vdEVtcHR5OyBpZHgrKykge1xuICAgICAgICAgIHBhY2tlZEZpbHRlcltwYWNrZWRGaWx0ZXJQdHIrK10gPSBmeHBGaWx0ZXJbaWR4XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB6ZXJvIGRhdGEsIHdyaXRlIGhlYWRlciBvbmx5XG4gICAgICBwYWNrZWRGaWx0ZXJbcGFja2VkRmlsdGVyUHRyKytdID0gMDsgLy8gc2hpZnRcblxuICAgICAgcGFja2VkRmlsdGVyW3BhY2tlZEZpbHRlclB0cisrXSA9IDA7IC8vIHNpemVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFja2VkRmlsdGVyO1xufTtcblxufSx7XCIuL3Jlc2l6ZV9maWx0ZXJfaW5mb1wiOjd9XSw3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIEZpbHRlciBkZWZpbml0aW9ucyB0byBidWlsZCB0YWJsZXMgZm9yXG4vLyByZXNpemluZyBjb252b2x2ZXJzLlxuLy9cbi8vIFByZXNldHMgZm9yIHF1YWxpdHkgMC4uMy4gRmlsdGVyIGZ1bmN0aW9ucyArIHdpbmRvdyBzaXplXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFt7XG4gIC8vIE5lYXJlc3QgbmVpYm9yIChCb3gpXG4gIHdpbjogMC41LFxuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcih4KSB7XG4gICAgcmV0dXJuIHggPj0gLTAuNSAmJiB4IDwgMC41ID8gMS4wIDogMC4wO1xuICB9XG59LCB7XG4gIC8vIEhhbW1pbmdcbiAgd2luOiAxLjAsXG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKHgpIHtcbiAgICBpZiAoeCA8PSAtMS4wIHx8IHggPj0gMS4wKSB7XG4gICAgICByZXR1cm4gMC4wO1xuICAgIH1cblxuICAgIGlmICh4ID4gLTEuMTkyMDkyOTBFLTA3ICYmIHggPCAxLjE5MjA5MjkwRS0wNykge1xuICAgICAgcmV0dXJuIDEuMDtcbiAgICB9XG5cbiAgICB2YXIgeHBpID0geCAqIE1hdGguUEk7XG4gICAgcmV0dXJuIE1hdGguc2luKHhwaSkgLyB4cGkgKiAoMC41NCArIDAuNDYgKiBNYXRoLmNvcyh4cGkgLyAxLjApKTtcbiAgfVxufSwge1xuICAvLyBMYW5jem9zLCB3aW4gPSAyXG4gIHdpbjogMi4wLFxuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcih4KSB7XG4gICAgaWYgKHggPD0gLTIuMCB8fCB4ID49IDIuMCkge1xuICAgICAgcmV0dXJuIDAuMDtcbiAgICB9XG5cbiAgICBpZiAoeCA+IC0xLjE5MjA5MjkwRS0wNyAmJiB4IDwgMS4xOTIwOTI5MEUtMDcpIHtcbiAgICAgIHJldHVybiAxLjA7XG4gICAgfVxuXG4gICAgdmFyIHhwaSA9IHggKiBNYXRoLlBJO1xuICAgIHJldHVybiBNYXRoLnNpbih4cGkpIC8geHBpICogTWF0aC5zaW4oeHBpIC8gMi4wKSAvICh4cGkgLyAyLjApO1xuICB9XG59LCB7XG4gIC8vIExhbmN6b3MsIHdpbiA9IDNcbiAgd2luOiAzLjAsXG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKHgpIHtcbiAgICBpZiAoeCA8PSAtMy4wIHx8IHggPj0gMy4wKSB7XG4gICAgICByZXR1cm4gMC4wO1xuICAgIH1cblxuICAgIGlmICh4ID4gLTEuMTkyMDkyOTBFLTA3ICYmIHggPCAxLjE5MjA5MjkwRS0wNykge1xuICAgICAgcmV0dXJuIDEuMDtcbiAgICB9XG5cbiAgICB2YXIgeHBpID0geCAqIE1hdGguUEk7XG4gICAgcmV0dXJuIE1hdGguc2luKHhwaSkgLyB4cGkgKiBNYXRoLnNpbih4cGkgLyAzLjApIC8gKHhwaSAvIDMuMCk7XG4gIH1cbn1dO1xuXG59LHt9XSw4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUZpbHRlcnMgPSBfZGVyZXFfKCcuL3Jlc2l6ZV9maWx0ZXJfZ2VuJyk7XG5cbmZ1bmN0aW9uIHJlc2V0QWxwaGEoZHN0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHZhciBwdHIgPSAzLFxuICAgICAgbGVuID0gd2lkdGggKiBoZWlnaHQgKiA0IHwgMDtcblxuICB3aGlsZSAocHRyIDwgbGVuKSB7XG4gICAgZHN0W3B0cl0gPSAweEZGO1xuICAgIHB0ciA9IHB0ciArIDQgfCAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzVWludDhBcnJheShzcmMpIHtcbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHNyYy5idWZmZXIsIDAsIHNyYy5ieXRlTGVuZ3RoKTtcbn1cblxudmFyIElTX0xFID0gdHJ1ZTsgLy8gc2hvdWxkIG5vdCBjcmFzaCBldmVyeXRoaW5nIG9uIG1vZHVsZSBsb2FkIGluIG9sZCBicm93c2Vyc1xuXG50cnkge1xuICBJU19MRSA9IG5ldyBVaW50MzJBcnJheShuZXcgVWludDhBcnJheShbMSwgMCwgMCwgMF0pLmJ1ZmZlcilbMF0gPT09IDE7XG59IGNhdGNoIChfXykge31cblxuZnVuY3Rpb24gY29weUludDE2YXNMRShzcmMsIHRhcmdldCwgdGFyZ2V0X29mZnNldCkge1xuICBpZiAoSVNfTEUpIHtcbiAgICB0YXJnZXQuc2V0KGFzVWludDhBcnJheShzcmMpLCB0YXJnZXRfb2Zmc2V0KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3IgKHZhciBwdHIgPSB0YXJnZXRfb2Zmc2V0LCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkYXRhID0gc3JjW2ldO1xuICAgIHRhcmdldFtwdHIrK10gPSBkYXRhICYgMHhGRjtcbiAgICB0YXJnZXRbcHRyKytdID0gZGF0YSA+PiA4ICYgMHhGRjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlc2l6ZV93YXNtKG9wdGlvbnMpIHtcbiAgdmFyIHNyYyA9IG9wdGlvbnMuc3JjO1xuICB2YXIgc3JjVyA9IG9wdGlvbnMud2lkdGg7XG4gIHZhciBzcmNIID0gb3B0aW9ucy5oZWlnaHQ7XG4gIHZhciBkZXN0VyA9IG9wdGlvbnMudG9XaWR0aDtcbiAgdmFyIGRlc3RIID0gb3B0aW9ucy50b0hlaWdodDtcbiAgdmFyIHNjYWxlWCA9IG9wdGlvbnMuc2NhbGVYIHx8IG9wdGlvbnMudG9XaWR0aCAvIG9wdGlvbnMud2lkdGg7XG4gIHZhciBzY2FsZVkgPSBvcHRpb25zLnNjYWxlWSB8fCBvcHRpb25zLnRvSGVpZ2h0IC8gb3B0aW9ucy5oZWlnaHQ7XG4gIHZhciBvZmZzZXRYID0gb3B0aW9ucy5vZmZzZXRYIHx8IDAuMDtcbiAgdmFyIG9mZnNldFkgPSBvcHRpb25zLm9mZnNldFkgfHwgMC4wO1xuICB2YXIgZGVzdCA9IG9wdGlvbnMuZGVzdCB8fCBuZXcgVWludDhBcnJheShkZXN0VyAqIGRlc3RIICogNCk7XG4gIHZhciBxdWFsaXR5ID0gdHlwZW9mIG9wdGlvbnMucXVhbGl0eSA9PT0gJ3VuZGVmaW5lZCcgPyAzIDogb3B0aW9ucy5xdWFsaXR5O1xuICB2YXIgYWxwaGEgPSBvcHRpb25zLmFscGhhIHx8IGZhbHNlO1xuICB2YXIgZmlsdGVyc1ggPSBjcmVhdGVGaWx0ZXJzKHF1YWxpdHksIHNyY1csIGRlc3RXLCBzY2FsZVgsIG9mZnNldFgpLFxuICAgICAgZmlsdGVyc1kgPSBjcmVhdGVGaWx0ZXJzKHF1YWxpdHksIHNyY0gsIGRlc3RILCBzY2FsZVksIG9mZnNldFkpOyAvLyBkZXN0aW5hdGlvbiBpcyAwIHRvby5cblxuICB2YXIgc3JjX29mZnNldCA9IDA7IC8vIGJ1ZmZlciBiZXR3ZWVuIGNvbnZvbHZlIHBhc3Nlc1xuXG4gIHZhciB0bXBfb2Zmc2V0ID0gdGhpcy5fX2FsaWduKHNyY19vZmZzZXQgKyBNYXRoLm1heChzcmMuYnl0ZUxlbmd0aCwgZGVzdC5ieXRlTGVuZ3RoKSk7XG5cbiAgdmFyIGZpbHRlcnNYX29mZnNldCA9IHRoaXMuX19hbGlnbih0bXBfb2Zmc2V0ICsgc3JjSCAqIGRlc3RXICogNCk7XG5cbiAgdmFyIGZpbHRlcnNZX29mZnNldCA9IHRoaXMuX19hbGlnbihmaWx0ZXJzWF9vZmZzZXQgKyBmaWx0ZXJzWC5ieXRlTGVuZ3RoKTtcblxuICB2YXIgYWxsb2NfYnl0ZXMgPSBmaWx0ZXJzWV9vZmZzZXQgKyBmaWx0ZXJzWS5ieXRlTGVuZ3RoO1xuXG4gIHZhciBpbnN0YW5jZSA9IHRoaXMuX19pbnN0YW5jZSgncmVzaXplJywgYWxsb2NfYnl0ZXMpOyAvL1xuICAvLyBGaWxsIG1lbW9yeSBibG9jayB3aXRoIGRhdGEgdG8gcHJvY2Vzc1xuICAvL1xuXG5cbiAgdmFyIG1lbSA9IG5ldyBVaW50OEFycmF5KHRoaXMuX19tZW1vcnkuYnVmZmVyKTtcbiAgdmFyIG1lbTMyID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuX19tZW1vcnkuYnVmZmVyKTsgLy8gMzItYml0IGNvcHkgaXMgbXVjaCBmYXN0ZXIgaW4gY2hyb21lXG5cbiAgdmFyIHNyYzMyID0gbmV3IFVpbnQzMkFycmF5KHNyYy5idWZmZXIpO1xuICBtZW0zMi5zZXQoc3JjMzIpOyAvLyBXZSBzaG91bGQgZ3VhcmFudGVlIExFIGJ5dGVzIG9yZGVyLiBGaWx0ZXJzIGFyZSBub3QgYmlnLCBzb1xuICAvLyBzcGVlZCBkaWZmZXJlbmNlIGlzIG5vdCBzaWduaWZpY2FudCB2cyBkaXJlY3QgLnNldCgpXG5cbiAgY29weUludDE2YXNMRShmaWx0ZXJzWCwgbWVtLCBmaWx0ZXJzWF9vZmZzZXQpO1xuICBjb3B5SW50MTZhc0xFKGZpbHRlcnNZLCBtZW0sIGZpbHRlcnNZX29mZnNldCk7IC8vXG4gIC8vIE5vdyBjYWxsIHdlYmFzc2VtYmx5IG1ldGhvZFxuICAvLyBlbXNkayBkb2VzIG1ldGhvZCBuYW1lcyB3aXRoICdfJ1xuXG4gIHZhciBmbiA9IGluc3RhbmNlLmV4cG9ydHMuY29udm9sdmVIViB8fCBpbnN0YW5jZS5leHBvcnRzLl9jb252b2x2ZUhWO1xuICBmbihmaWx0ZXJzWF9vZmZzZXQsIGZpbHRlcnNZX29mZnNldCwgdG1wX29mZnNldCwgc3JjVywgc3JjSCwgZGVzdFcsIGRlc3RIKTsgLy9cbiAgLy8gQ29weSBkYXRhIGJhY2sgdG8gdHlwZWQgYXJyYXlcbiAgLy9cbiAgLy8gMzItYml0IGNvcHkgaXMgbXVjaCBmYXN0ZXIgaW4gY2hyb21lXG5cbiAgdmFyIGRlc3QzMiA9IG5ldyBVaW50MzJBcnJheShkZXN0LmJ1ZmZlcik7XG4gIGRlc3QzMi5zZXQobmV3IFVpbnQzMkFycmF5KHRoaXMuX19tZW1vcnkuYnVmZmVyLCAwLCBkZXN0SCAqIGRlc3RXKSk7IC8vIFRoYXQncyBmYXN0ZXIgdGhhbiBkb2luZyBjaGVja3MgaW4gY29udm9sdmVyLlxuICAvLyAhISEgTm90ZSwgY2FudmFzIGRhdGEgaXMgbm90IHByZW11bHRpcGxlZC4gV2UgZG9uJ3QgbmVlZCBvdGhlclxuICAvLyBhbHBoYSBjb3JyZWN0aW9ucy5cblxuICBpZiAoIWFscGhhKSByZXNldEFscGhhKGRlc3QsIGRlc3RXLCBkZXN0SCk7XG4gIHJldHVybiBkZXN0O1xufTtcblxufSx7XCIuL3Jlc2l6ZV9maWx0ZXJfZ2VuXCI6Nn1dLDk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbmFtZTogJ3Vuc2hhcnBfbWFzaycsXG4gIGZuOiBfZGVyZXFfKCcuL3Vuc2hhcnBfbWFzaycpLFxuICB3YXNtX2ZuOiBfZGVyZXFfKCcuL3Vuc2hhcnBfbWFza193YXNtJyksXG4gIHdhc21fc3JjOiBfZGVyZXFfKCcuL3Vuc2hhcnBfbWFza193YXNtX2Jhc2U2NCcpXG59O1xuXG59LHtcIi4vdW5zaGFycF9tYXNrXCI6MTAsXCIuL3Vuc2hhcnBfbWFza193YXNtXCI6MTEsXCIuL3Vuc2hhcnBfbWFza193YXNtX2Jhc2U2NFwiOjEyfV0sMTA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gVW5zaGFycCBtYXNrIGZpbHRlclxuLy9cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIzMzIyODIwLzEwMzE4MDRcbi8vIFVTTShPKSA9IE8gKyAoMiAqIChBbW91bnQgLyAxMDApICogKE8gLSBHQikpXG4vLyBHQiAtIGdhdXNzaWFuIGJsdXIuXG4vL1xuLy8gSW1hZ2UgaXMgY29udmVydGVkIGZyb20gUkdCIHRvIEhTViwgdW5zaGFycCBtYXNrIGlzIGFwcGxpZWQgdG8gdGhlXG4vLyBicmlnaHRuZXNzIGNoYW5uZWwgYW5kIHRoZW4gaW1hZ2UgaXMgY29udmVydGVkIGJhY2sgdG8gUkdCLlxuLy9cbid1c2Ugc3RyaWN0JztcblxudmFyIGdsdXJfbW9ubzE2ID0gX2RlcmVxXygnZ2x1ci9tb25vMTYnKTtcblxuZnVuY3Rpb24gaHN2X3YxNihpbWcsIHdpZHRoLCBoZWlnaHQpIHtcbiAgdmFyIHNpemUgPSB3aWR0aCAqIGhlaWdodDtcbiAgdmFyIG91dCA9IG5ldyBVaW50MTZBcnJheShzaXplKTtcbiAgdmFyIHIsIGcsIGIsIG1heDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgIHIgPSBpbWdbNCAqIGldO1xuICAgIGcgPSBpbWdbNCAqIGkgKyAxXTtcbiAgICBiID0gaW1nWzQgKiBpICsgMl07XG4gICAgbWF4ID0gciA+PSBnICYmIHIgPj0gYiA/IHIgOiBnID49IGIgJiYgZyA+PSByID8gZyA6IGI7XG4gICAgb3V0W2ldID0gbWF4IDw8IDg7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHVuc2hhcnAoaW1nLCB3aWR0aCwgaGVpZ2h0LCBhbW91bnQsIHJhZGl1cywgdGhyZXNob2xkKSB7XG4gIHZhciB2MSwgdjIsIHZtdWw7XG4gIHZhciBkaWZmLCBpVGltZXM0O1xuXG4gIGlmIChhbW91bnQgPT09IDAgfHwgcmFkaXVzIDwgMC41KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHJhZGl1cyA+IDIuMCkge1xuICAgIHJhZGl1cyA9IDIuMDtcbiAgfVxuXG4gIHZhciBicmlnaHRuZXNzID0gaHN2X3YxNihpbWcsIHdpZHRoLCBoZWlnaHQpO1xuICB2YXIgYmx1cmVkID0gbmV3IFVpbnQxNkFycmF5KGJyaWdodG5lc3MpOyAvLyBjb3B5LCBiZWNhdXNlIGJsdXIgbW9kaWZ5IHNyY1xuXG4gIGdsdXJfbW9ubzE2KGJsdXJlZCwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKTtcbiAgdmFyIGFtb3VudEZwID0gYW1vdW50IC8gMTAwICogMHgxMDAwICsgMC41IHwgMDtcbiAgdmFyIHRocmVzaG9sZEZwID0gdGhyZXNob2xkIDw8IDg7XG4gIHZhciBzaXplID0gd2lkdGggKiBoZWlnaHQ7XG4gIC8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgdjEgPSBicmlnaHRuZXNzW2ldO1xuICAgIGRpZmYgPSB2MSAtIGJsdXJlZFtpXTtcblxuICAgIGlmIChNYXRoLmFicyhkaWZmKSA+PSB0aHJlc2hvbGRGcCkge1xuICAgICAgLy8gYWRkIHVuc2hhcnAgbWFzayB0byB0aGUgYnJpZ2h0bmVzcyBjaGFubmVsXG4gICAgICB2MiA9IHYxICsgKGFtb3VudEZwICogZGlmZiArIDB4ODAwID4+IDEyKTsgLy8gQm90aCB2MSBhbmQgdjIgYXJlIHdpdGhpbiBbMC4wIC4uIDI1NS4wXSAoMDAwMC1GRjAwKSByYW5nZSwgbmV2ZXIgZ29pbmcgaW50b1xuICAgICAgLy8gWzI1NS4wMDMgLi4gMjU1Ljk5Nl0gKEZGMDEtRkZGRikuIFRoaXMgYWxsb3dzIHRvIHJvdW5kIHRoaXMgdmFsdWUgYXMgKHgrLjUpfDBcbiAgICAgIC8vIGxhdGVyIHdpdGhvdXQgb3ZlcmZsb3dpbmcuXG5cbiAgICAgIHYyID0gdjIgPiAweGZmMDAgPyAweGZmMDAgOiB2MjtcbiAgICAgIHYyID0gdjIgPCAweDAwMDAgPyAweDAwMDAgOiB2MjsgLy8gQXZvaWQgZGl2aXNpb24gYnkgMC4gVj0wIG1lYW5zIHJnYigwLDAsMCksIHVuc2hhcnAgd2l0aCB1bnNoYXJwQW1vdW50PjAgY2Fubm90XG4gICAgICAvLyBjaGFuZ2UgdGhpcyB2YWx1ZSAoYmVjYXVzZSBkaWZmIGJldHdlZW4gY29sb3JzIGdldHMgaW5mbGF0ZWQpLCBzbyBubyBuZWVkIHRvIHZlcmlmeSBjb3JyZWN0bmVzcy5cblxuICAgICAgdjEgPSB2MSAhPT0gMCA/IHYxIDogMTsgLy8gTXVsdGlwbHlpbmcgViBpbiBIU1YgbW9kZWwgYnkgYSBjb25zdGFudCBpcyBlcXVpdmFsZW50IHRvIG11bHRpcGx5aW5nIGVhY2ggY29tcG9uZW50XG4gICAgICAvLyBpbiBSR0IgYnkgdGhlIHNhbWUgY29uc3RhbnQgKHNhbWUgZm9yIEhTTCksIHNlZSBhbHNvOlxuICAgICAgLy8gaHR0cHM6Ly9iZWVzYnV6ei5iaXovY29kZS8xNi1oc3YtY29sb3ItdHJhbnNmb3Jtc1xuXG4gICAgICB2bXVsID0gKHYyIDw8IDEyKSAvIHYxIHwgMDsgLy8gUmVzdWx0IHdpbGwgYmUgaW4gWzAuLjI1NV0gcmFuZ2UgYmVjYXVzZTpcbiAgICAgIC8vICAtIGFsbCBudW1iZXJzIGFyZSBwb3NpdGl2ZVxuICAgICAgLy8gIC0gcixnLGIgPD0gKHYxLzI1NilcbiAgICAgIC8vICAtIHIsZyxiLCh2MS8yNTYpLCh2Mi8yNTYpIDw9IDI1NVxuICAgICAgLy8gU28gaGlnaGVzdCB0aGlzIG51bWJlciBjYW4gZ2V0IGlzIFgqMjU1L1grMC41PTI1NS41IHdoaWNoIGlzIDwgMjU2IGFuZCByb3VuZHMgZG93bi5cblxuICAgICAgaVRpbWVzNCA9IGkgKiA0O1xuICAgICAgaW1nW2lUaW1lczRdID0gaW1nW2lUaW1lczRdICogdm11bCArIDB4ODAwID4+IDEyOyAvLyBSXG5cbiAgICAgIGltZ1tpVGltZXM0ICsgMV0gPSBpbWdbaVRpbWVzNCArIDFdICogdm11bCArIDB4ODAwID4+IDEyOyAvLyBHXG5cbiAgICAgIGltZ1tpVGltZXM0ICsgMl0gPSBpbWdbaVRpbWVzNCArIDJdICogdm11bCArIDB4ODAwID4+IDEyOyAvLyBCXG4gICAgfVxuICB9XG59O1xuXG59LHtcImdsdXIvbW9ubzE2XCI6MTh9XSwxMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdW5zaGFycChpbWcsIHdpZHRoLCBoZWlnaHQsIGFtb3VudCwgcmFkaXVzLCB0aHJlc2hvbGQpIHtcbiAgaWYgKGFtb3VudCA9PT0gMCB8fCByYWRpdXMgPCAwLjUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocmFkaXVzID4gMi4wKSB7XG4gICAgcmFkaXVzID0gMi4wO1xuICB9XG5cbiAgdmFyIHBpeGVscyA9IHdpZHRoICogaGVpZ2h0O1xuICB2YXIgaW1nX2J5dGVzX2NudCA9IHBpeGVscyAqIDQ7XG4gIHZhciBoc3ZfYnl0ZXNfY250ID0gcGl4ZWxzICogMjtcbiAgdmFyIGJsdXJfYnl0ZXNfY250ID0gcGl4ZWxzICogMjtcbiAgdmFyIGJsdXJfbGluZV9ieXRlX2NudCA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpICogNDsgLy8gZmxvYXQzMiBhcnJheVxuXG4gIHZhciBibHVyX2NvZWZmc19ieXRlX2NudCA9IDggKiA0OyAvLyBmbG9hdDMyIGFycmF5XG5cbiAgdmFyIGltZ19vZmZzZXQgPSAwO1xuICB2YXIgaHN2X29mZnNldCA9IGltZ19ieXRlc19jbnQ7XG4gIHZhciBibHVyX29mZnNldCA9IGhzdl9vZmZzZXQgKyBoc3ZfYnl0ZXNfY250O1xuICB2YXIgYmx1cl90bXBfb2Zmc2V0ID0gYmx1cl9vZmZzZXQgKyBibHVyX2J5dGVzX2NudDtcbiAgdmFyIGJsdXJfbGluZV9vZmZzZXQgPSBibHVyX3RtcF9vZmZzZXQgKyBibHVyX2J5dGVzX2NudDtcbiAgdmFyIGJsdXJfY29lZmZzX29mZnNldCA9IGJsdXJfbGluZV9vZmZzZXQgKyBibHVyX2xpbmVfYnl0ZV9jbnQ7XG5cbiAgdmFyIGluc3RhbmNlID0gdGhpcy5fX2luc3RhbmNlKCd1bnNoYXJwX21hc2snLCBpbWdfYnl0ZXNfY250ICsgaHN2X2J5dGVzX2NudCArIGJsdXJfYnl0ZXNfY250ICogMiArIGJsdXJfbGluZV9ieXRlX2NudCArIGJsdXJfY29lZmZzX2J5dGVfY250LCB7XG4gICAgZXhwOiBNYXRoLmV4cFxuICB9KTsgLy8gMzItYml0IGNvcHkgaXMgbXVjaCBmYXN0ZXIgaW4gY2hyb21lXG5cblxuICB2YXIgaW1nMzIgPSBuZXcgVWludDMyQXJyYXkoaW1nLmJ1ZmZlcik7XG4gIHZhciBtZW0zMiA9IG5ldyBVaW50MzJBcnJheSh0aGlzLl9fbWVtb3J5LmJ1ZmZlcik7XG4gIG1lbTMyLnNldChpbWczMik7IC8vIEhTTFxuXG4gIHZhciBmbiA9IGluc3RhbmNlLmV4cG9ydHMuaHN2X3YxNiB8fCBpbnN0YW5jZS5leHBvcnRzLl9oc3ZfdjE2O1xuICBmbihpbWdfb2Zmc2V0LCBoc3Zfb2Zmc2V0LCB3aWR0aCwgaGVpZ2h0KTsgLy8gQkxVUlxuXG4gIGZuID0gaW5zdGFuY2UuZXhwb3J0cy5ibHVyTW9ubzE2IHx8IGluc3RhbmNlLmV4cG9ydHMuX2JsdXJNb25vMTY7XG4gIGZuKGhzdl9vZmZzZXQsIGJsdXJfb2Zmc2V0LCBibHVyX3RtcF9vZmZzZXQsIGJsdXJfbGluZV9vZmZzZXQsIGJsdXJfY29lZmZzX29mZnNldCwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKTsgLy8gVU5TSEFSUFxuXG4gIGZuID0gaW5zdGFuY2UuZXhwb3J0cy51bnNoYXJwIHx8IGluc3RhbmNlLmV4cG9ydHMuX3Vuc2hhcnA7XG4gIGZuKGltZ19vZmZzZXQsIGltZ19vZmZzZXQsIGhzdl9vZmZzZXQsIGJsdXJfb2Zmc2V0LCB3aWR0aCwgaGVpZ2h0LCBhbW91bnQsIHRocmVzaG9sZCk7IC8vIDMyLWJpdCBjb3B5IGlzIG11Y2ggZmFzdGVyIGluIGNocm9tZVxuXG4gIGltZzMyLnNldChuZXcgVWludDMyQXJyYXkodGhpcy5fX21lbW9yeS5idWZmZXIsIDAsIHBpeGVscykpO1xufTtcblxufSx7fV0sMTI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gVGhpcyBpcyBhdXRvZ2VuZXJhdGVkIGZpbGUgZnJvbSBtYXRoLndhc20sIGRvbid0IGVkaXQuXG4vL1xuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9ICdBR0Z6YlFFQUFBQUFEQVprZVd4cGJtc0FBQUFBQUFFMEIyQUFBR0FFZjM5L2Z3QmdCbjkvZjM5L2Z3QmdDSDkvZjM5L2YzOS9BR0FJZjM5L2YzOS9mMzBBWUFKOWZ3QmdBWHdCZkFJWkFnTmxibllEWlhod0FBWURaVzUyQm0xbGJXOXllUUlBQUFNSEJnQUZBZ1FCQXdZR0FYOEFRUUFMQjRvQkNCRmZYM2RoYzIxZlkyRnNiRjlqZEc5eWN3QUJGbDlmWW5WcGJHUmZaMkYxYzNOcFlXNWZZMjlsWm5NQUFnNWZYMmRoZFhOek1UWmZiR2x1WlFBRENtSnNkWEpOYjI1dk1UWUFCQWRvYzNaZmRqRTJBQVVIZFc1emFHRnljQUFHREY5ZlpITnZYMmhoYm1Sc1pRTUFHRjlmZDJGemJWOWhjSEJzZVY5a1lYUmhYM0psYkc5amN3QUJDc1VNQmdNQUFRdldBUUVIZkNBQlJOdUd1a09DR3ZzL0lBQzdveUlDUkFBQUFBQUFBQURBb2hBQUlnVzJqRGdDRkNBQklBS2FFQUFpQXlBRG9DSUd0amdDRUNBQlJBQUFBQUFBQVBBL0lBT2hJZ1FnQktJZ0F5QUNJQUtnb2tRQUFBQUFBQUR3UDZBZ0JhR2pJZ1MyT0FJQUlBRWdCU0FFbXFJaUI3WTRBZ3dnQVNBRElBSkVBQUFBQUFBQThEK2dJQVNpb2lJSXRqZ0NDQ0FCSUFNZ0FrUUFBQUFBQUFEd3Y2QWdCS0tpSWdLMk9BSUVJQUVnQnlBSW9DQUZSQUFBQUFBQUFQQS9JQWFob0NJRG83WTRBaHdnQVNBRUlBS2dJQU9qdGpnQ0dBdUdCUU1HZndsOEFuMGdBeW9DRENFVklBTXFBZ2doRmlBREtnSVV1eUVSSUFNcUFoQzdJUkFDUUNBRVFRRnJJZ2hCQUVnaUNRUkFJQUloQnlBQUlRWU1BUXNnQWlBQUx3RUF1Q0lQSUFNcUFoaTdvaUlNSUJHaUlnMGdEQ0FRb2lBUElBTXFBZ1M3SWhPaUloUWdBeW9DQUxzaUVpQVBvcUNnb0NJT3RqZ0NBQ0FDUVFScUlRY2dBRUVDYWlFR0lBaEZEUUFnQ0VFQklBaEJBVWdiSWdwQmYzTWhDd0ovSUFRZ0NtdEJBWEZGQkVBZ0RpRU5JQWdNQVFzZ0FpQU5JQTRnRUtJZ0ZDQVNJQUF2QVFLNElnK2lvS0NnSWcyMk9BSUVJQUpCQ0dvaEJ5QUFRUVJxSVFZZ0RpRU1JQVJCQW1zTElRSWdDMEVBSUFSclJnMEFBMEFnQnlBTUlCR2lJQTBnRUtJZ0R5QVRvaUFTSUFZdkFRQzRJZzZpb0tDZ0lneTJPQUlBSUFjZ0RTQVJvaUFNSUJDaUlBNGdFNklnRWlBR0x3RUN1Q0lQb3FDZ29DSU50amdDQkNBSFFRaHFJUWNnQmtFRWFpRUdJQUpCQWtvaEFDQUNRUUpySVFJZ0FBMEFDd3NDUUNBSkRRQWdBU0FGSUFoc1FRRjBhaUlBQW44Z0JrRUNheThCQUNJQ3VDSU5JQlc3SWhLaUlBMGdGcnNpRTZLZ0lBMGdBeW9DSEx1aUlnd2dFS0tnSUF3Z0VhS2dJZzhnQjBFRWF5SUhLZ0lBdTZBaURrUUFBQUFBQUFEd1FXTWdEa1FBQUFBQUFBQUFBR1p4QkVBZ0Rxc01BUXRCQUFzN0FRQWdDRVVOQUNBR1FRUnJJUVpCQUNBRmEwRUJkQ0VCQTBBQ2Z5QU5JQktpSUFKQi8vOERjYmdpRFNBVG9xQWdEeUlPSUJDaW9DQU1JQkdpb0NJUElBZEJCR3NpQnlvQ0FMdWdJZ3hFQUFBQUFBQUE4RUZqSUF4RUFBQUFBQUFBQUFCbWNRUkFJQXlyREFFTFFRQUxJUU1nQmk4QkFDRUNJQUFnQVdvaUFDQURPd0VBSUFaQkFtc2hCaUFJUVFGS0lRTWdEaUVNSUFoQkFXc2hDQ0FERFFBTEN3dlJBZ0lCZndkOEFrQWdCME1BQUFBQVd3MEFJQVJFMjRhNlE0SWErejhnQjBNQUFBQS9sN3VqSWdsRUFBQUFBQUFBQU1DaUVBQWlETGFNT0FJVUlBUWdDWm9RQUNJS0lBcWdJZzIyT0FJUUlBUkVBQUFBQUFBQThEOGdDcUVpQ3lBTG9pQUtJQWtnQ2FDaVJBQUFBQUFBQVBBL29DQU1vYU1pQzdZNEFnQWdCQ0FNSUF1YW9pSU90amdDRENBRUlBb2dDVVFBQUFBQUFBRHdQNkFnQzZLaUlnKzJPQUlJSUFRZ0NpQUpSQUFBQUFBQUFQQy9vQ0FMb3FJaUNiWTRBZ1FnQkNBT0lBK2dJQXhFQUFBQUFBQUE4RDhnRGFHZ0lncWp0amdDSENBRUlBc2dDYUFnQ3FPMk9BSVlJQVlFUUFOQUlBQWdCU0FJYkVFQmRHb2dBaUFJUVFGMGFpQURJQVFnQlNBR0VBTWdDRUVCYWlJSUlBWkhEUUFMQ3lBRlJRMEFRUUFoQ0FOQUlBSWdCaUFJYkVFQmRHb2dBU0FJUVFGMGFpQURJQVFnQmlBRkVBTWdDRUVCYWlJSUlBVkhEUUFMQ3d0eEFRTi9JQUlnQTJ3aUJRUkFBMEFnQVNBQUtBSUFJZ1JCRUhaQi93RnhJZ0lnQWlBRVFRaDJRZjhCY1NJRElBTWdCRUgvQVhFaUJFa2JJQUlnQTBzYklnWWdCaUFFSUFJZ0JFc2JJQU1nQkVzYlFRaDBPd0VBSUFGQkFtb2hBU0FBUVFScUlRQWdCVUVCYXlJRkRRQUxDd3VaQWdJRGZ3RjhJQVFnQld3aEJBSi9JQWF6UXdBQWdFV1VRd0FBeUVLVnUwUUFBQUFBQUFEZ1A2QWlDNWxFQUFBQUFBQUE0RUZqQkVBZ0M2b01BUXRCZ0lDQWdIZ0xJUVVnQkFSQUlBZEJDSFFoQ1VFQUlRWURRQ0FKSUFJZ0JrRUJkQ0lIYWk4QkFDSUJJQU1nQjJvdkFRQnJJZ2NnQjBFZmRTSUlhaUFJYzAwRVFDQUFJQVpCQW5RaUNHb2lDaUFGSUFkc1FZQVFha0VNZFNBQmFpSUhRWUQrQXlBSFFZRCtBMGdiSWdkQkFDQUhRUUJLRzBFTWRDQUJRUUVnQVJ0dUlnRWdDaTBBQUd4QmdCQnFRUXgyT2dBQUlBQWdDRUVCY21vaUJ5QUJJQWN0QUFCc1FZQVFha0VNZGpvQUFDQUFJQWhCQW5KcUlnY2dBU0FITFFBQWJFR0FFR3BCREhZNkFBQUxJQVpCQVdvaUJpQUVSdzBBQ3dzTCc7XG5cbn0se31dLDEzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIEdDX0lOVEVSVkFMID0gMTAwO1xuXG5mdW5jdGlvbiBQb29sKGNyZWF0ZSwgaWRsZSkge1xuICB0aGlzLmNyZWF0ZSA9IGNyZWF0ZTtcbiAgdGhpcy5hdmFpbGFibGUgPSBbXTtcbiAgdGhpcy5hY3F1aXJlZCA9IHt9O1xuICB0aGlzLmxhc3RJZCA9IDE7XG4gIHRoaXMudGltZW91dElkID0gMDtcbiAgdGhpcy5pZGxlID0gaWRsZSB8fCAyMDAwO1xufVxuXG5Qb29sLnByb3RvdHlwZS5hY3F1aXJlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciByZXNvdXJjZTtcblxuICBpZiAodGhpcy5hdmFpbGFibGUubGVuZ3RoICE9PSAwKSB7XG4gICAgcmVzb3VyY2UgPSB0aGlzLmF2YWlsYWJsZS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICByZXNvdXJjZSA9IHRoaXMuY3JlYXRlKCk7XG4gICAgcmVzb3VyY2UuaWQgPSB0aGlzLmxhc3RJZCsrO1xuXG4gICAgcmVzb3VyY2UucmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5yZWxlYXNlKHJlc291cmNlKTtcbiAgICB9O1xuICB9XG5cbiAgdGhpcy5hY3F1aXJlZFtyZXNvdXJjZS5pZF0gPSByZXNvdXJjZTtcbiAgcmV0dXJuIHJlc291cmNlO1xufTtcblxuUG9vbC5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uIChyZXNvdXJjZSkge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICBkZWxldGUgdGhpcy5hY3F1aXJlZFtyZXNvdXJjZS5pZF07XG4gIHJlc291cmNlLmxhc3RVc2VkID0gRGF0ZS5ub3coKTtcbiAgdGhpcy5hdmFpbGFibGUucHVzaChyZXNvdXJjZSk7XG5cbiAgaWYgKHRoaXMudGltZW91dElkID09PSAwKSB7XG4gICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczIuZ2MoKTtcbiAgICB9LCBHQ19JTlRFUlZBTCk7XG4gIH1cbn07XG5cblBvb2wucHJvdG90eXBlLmdjID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3RoaXMzID0gdGhpcztcblxuICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgdGhpcy5hdmFpbGFibGUgPSB0aGlzLmF2YWlsYWJsZS5maWx0ZXIoZnVuY3Rpb24gKHJlc291cmNlKSB7XG4gICAgaWYgKG5vdyAtIHJlc291cmNlLmxhc3RVc2VkID4gX3RoaXMzLmlkbGUpIHtcbiAgICAgIHJlc291cmNlLmRlc3Ryb3koKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKHRoaXMuYXZhaWxhYmxlLmxlbmd0aCAhPT0gMCkge1xuICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMzLmdjKCk7XG4gICAgfSwgR0NfSU5URVJWQUwpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMudGltZW91dElkID0gMDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb29sO1xuXG59LHt9XSwxNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBBZGQgaW50ZXJtZWRpYXRlIHJlc2l6aW5nIHN0ZXBzIHdoZW4gc2NhbGluZyBkb3duIGJ5IGEgdmVyeSBsYXJnZSBmYWN0b3IuXG4vL1xuLy8gRm9yIGV4YW1wbGUsIHdoZW4gcmVzaXppbmcgMTAwMDB4MTAwMDAgZG93biB0byAxMHgxMCwgaXQnbGwgcmVzaXplIGl0IHRvXG4vLyAzMDB4MzAwIGZpcnN0LlxuLy9cbi8vIEl0J3MgbmVlZGVkIGJlY2F1c2UgdGlsZXIgaGFzIGlzc3VlcyB3aGVuIHRoZSBlbnRpcmUgdGlsZSBpcyBzY2FsZWQgZG93blxuLy8gdG8gYSBmZXcgcGl4ZWxzICgxMDI0cHggc291cmNlIHRpbGUgd2l0aCBib3JkZXIgc2l6ZSAzIHNob3VsZCByZXN1bHQgaW5cbi8vIGF0IGxlYXN0IDMrMysyID0gOHB4IHRhcmdldCB0aWxlLCBzbyBtYXggc2NhbGUgZmFjdG9yIGlzIDEyOCBoZXJlKS5cbi8vXG4vLyBBbHNvLCBhZGRpbmcgaW50ZXJtZWRpYXRlIHN0ZXBzIGNhbiBzcGVlZCB1cCBwcm9jZXNzaW5nIGlmIHdlIHVzZSBsb3dlclxuLy8gcXVhbGl0eSBhbGdvcml0aG1zIGZvciBmaXJzdCBzdGFnZXMuXG4vL1xuJ3VzZSBzdHJpY3QnOyAvLyBtaW4gc2l6ZSA9IDAgcmVzdWx0cyBpbiBpbmZpbml0ZSBsb29wLFxuLy8gbWluIHNpemUgPSAxIGNhbiBjb25zdW1lIGxhcmdlIGFtb3VudCBvZiBtZW1vcnlcblxudmFyIE1JTl9JTk5FUl9USUxFX1NJWkUgPSAyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZVN0YWdlcyhmcm9tV2lkdGgsIGZyb21IZWlnaHQsIHRvV2lkdGgsIHRvSGVpZ2h0LCBzcmNUaWxlU2l6ZSwgZGVzdFRpbGVCb3JkZXIpIHtcbiAgdmFyIHNjYWxlWCA9IHRvV2lkdGggLyBmcm9tV2lkdGg7XG4gIHZhciBzY2FsZVkgPSB0b0hlaWdodCAvIGZyb21IZWlnaHQ7IC8vIGRlcml2ZWQgZnJvbSBjcmVhdGVSZWdpb25zIGVxdWF0aW9uOlxuICAvLyBpbm5lclRpbGVXaWR0aCA9IHBpeGVsRmxvb3Ioc3JjVGlsZVNpemUgKiBzY2FsZVgpIC0gMiAqIGRlc3RUaWxlQm9yZGVyO1xuXG4gIHZhciBtaW5TY2FsZSA9ICgyICogZGVzdFRpbGVCb3JkZXIgKyBNSU5fSU5ORVJfVElMRV9TSVpFICsgMSkgLyBzcmNUaWxlU2l6ZTsgLy8gcmVmdXNlIHRvIHNjYWxlIGltYWdlIG11bHRpcGxlIHRpbWVzIGJ5IGxlc3MgdGhhbiB0d2ljZSBlYWNoIHRpbWUsXG4gIC8vIGl0IGNvdWxkIG9ubHkgaGFwcGVuIGJlY2F1c2Ugb2YgaW52YWxpZCBvcHRpb25zXG5cbiAgaWYgKG1pblNjYWxlID4gMC41KSByZXR1cm4gW1t0b1dpZHRoLCB0b0hlaWdodF1dO1xuICB2YXIgc3RhZ2VDb3VudCA9IE1hdGguY2VpbChNYXRoLmxvZyhNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSkpIC8gTWF0aC5sb2cobWluU2NhbGUpKTsgLy8gbm8gYWRkaXRpb25hbCByZXNpemVzIGFyZSBuZWNlc3NhcnksXG4gIC8vIHN0YWdlQ291bnQgY2FuIGJlIHplcm8gb3IgYmUgbmVnYXRpdmUgd2hlbiBlbmxhcmdpbmcgdGhlIGltYWdlXG5cbiAgaWYgKHN0YWdlQ291bnQgPD0gMSkgcmV0dXJuIFtbdG9XaWR0aCwgdG9IZWlnaHRdXTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhZ2VDb3VudDsgaSsrKSB7XG4gICAgdmFyIHdpZHRoID0gTWF0aC5yb3VuZChNYXRoLnBvdyhNYXRoLnBvdyhmcm9tV2lkdGgsIHN0YWdlQ291bnQgLSBpIC0gMSkgKiBNYXRoLnBvdyh0b1dpZHRoLCBpICsgMSksIDEgLyBzdGFnZUNvdW50KSk7XG4gICAgdmFyIGhlaWdodCA9IE1hdGgucm91bmQoTWF0aC5wb3coTWF0aC5wb3coZnJvbUhlaWdodCwgc3RhZ2VDb3VudCAtIGkgLSAxKSAqIE1hdGgucG93KHRvSGVpZ2h0LCBpICsgMSksIDEgLyBzdGFnZUNvdW50KSk7XG4gICAgcmVzdWx0LnB1c2goW3dpZHRoLCBoZWlnaHRdKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG59LHt9XSwxNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBTcGxpdCBvcmlnaW5hbCBpbWFnZSBpbnRvIG11bHRpcGxlIDEwMjR4MTAyNCBjaHVua3MgdG8gcmVkdWNlIG1lbW9yeSB1c2FnZVxuLy8gKGltYWdlcyBoYXZlIHRvIGJlIHVucGFja2VkIGludG8gdHlwZWQgYXJyYXlzIGZvciByZXNpemluZykgYW5kIGFsbG93XG4vLyBwYXJhbGxlbCBwcm9jZXNzaW5nIG9mIG11bHRpcGxlIHRpbGVzIGF0IGEgdGltZS5cbi8vXG4ndXNlIHN0cmljdCc7XG4vKlxuICogcGl4ZWxGbG9vciBhbmQgcGl4ZWxDZWlsIGFyZSBtb2RpZmllZCB2ZXJzaW9ucyBvZiBNYXRoLmZsb29yIGFuZCBNYXRoLmNlaWxcbiAqIGZ1bmN0aW9ucyB3aGljaCB0YWtlIGludG8gYWNjb3VudCBmbG9hdGluZyBwb2ludCBhcml0aG1ldGljIGVycm9ycy5cbiAqIFRob3NlIGVycm9ycyBjYW4gY2F1c2UgdW5kZXNpcmVkIGluY3JlbWVudHMvZGVjcmVtZW50cyBvZiBzaXplcyBhbmQgb2Zmc2V0czpcbiAqIE1hdGguY2VpbCgzNiAvICgzNiAvIDUwMCkpID0gNTAxXG4gKiBwaXhlbENlaWwoMzYgLyAoMzYgLyA1MDApKSA9IDUwMFxuICovXG5cbnZhciBQSVhFTF9FUFNJTE9OID0gMWUtNTtcblxuZnVuY3Rpb24gcGl4ZWxGbG9vcih4KSB7XG4gIHZhciBuZWFyZXN0ID0gTWF0aC5yb3VuZCh4KTtcblxuICBpZiAoTWF0aC5hYnMoeCAtIG5lYXJlc3QpIDwgUElYRUxfRVBTSUxPTikge1xuICAgIHJldHVybiBuZWFyZXN0O1xuICB9XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IoeCk7XG59XG5cbmZ1bmN0aW9uIHBpeGVsQ2VpbCh4KSB7XG4gIHZhciBuZWFyZXN0ID0gTWF0aC5yb3VuZCh4KTtcblxuICBpZiAoTWF0aC5hYnMoeCAtIG5lYXJlc3QpIDwgUElYRUxfRVBTSUxPTikge1xuICAgIHJldHVybiBuZWFyZXN0O1xuICB9XG5cbiAgcmV0dXJuIE1hdGguY2VpbCh4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVSZWdpb25zKG9wdGlvbnMpIHtcbiAgdmFyIHNjYWxlWCA9IG9wdGlvbnMudG9XaWR0aCAvIG9wdGlvbnMud2lkdGg7XG4gIHZhciBzY2FsZVkgPSBvcHRpb25zLnRvSGVpZ2h0IC8gb3B0aW9ucy5oZWlnaHQ7XG4gIHZhciBpbm5lclRpbGVXaWR0aCA9IHBpeGVsRmxvb3Iob3B0aW9ucy5zcmNUaWxlU2l6ZSAqIHNjYWxlWCkgLSAyICogb3B0aW9ucy5kZXN0VGlsZUJvcmRlcjtcbiAgdmFyIGlubmVyVGlsZUhlaWdodCA9IHBpeGVsRmxvb3Iob3B0aW9ucy5zcmNUaWxlU2l6ZSAqIHNjYWxlWSkgLSAyICogb3B0aW9ucy5kZXN0VGlsZUJvcmRlcjsgLy8gcHJldmVudCBpbmZpbml0ZSBsb29wLCB0aGlzIHNob3VsZCBuZXZlciBoYXBwZW5cblxuICBpZiAoaW5uZXJUaWxlV2lkdGggPCAxIHx8IGlubmVyVGlsZUhlaWdodCA8IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludGVybmFsIGVycm9yIGluIHBpY2E6IHRhcmdldCB0aWxlIHdpZHRoL2hlaWdodCBpcyB0b28gc21hbGwuJyk7XG4gIH1cblxuICB2YXIgeCwgeTtcbiAgdmFyIGlubmVyWCwgaW5uZXJZLCB0b1RpbGVXaWR0aCwgdG9UaWxlSGVpZ2h0O1xuICB2YXIgdGlsZXMgPSBbXTtcbiAgdmFyIHRpbGU7IC8vIHdlIGdvIHRvcC10by1kb3duIGluc3RlYWQgb2YgbGVmdC10by1yaWdodCB0byBtYWtlIGltYWdlIGRpc3BsYXllZCBmcm9tIHRvcCB0b1xuICAvLyBkb2VzbiBpbiB0aGUgYnJvd3NlclxuXG4gIGZvciAoaW5uZXJZID0gMDsgaW5uZXJZIDwgb3B0aW9ucy50b0hlaWdodDsgaW5uZXJZICs9IGlubmVyVGlsZUhlaWdodCkge1xuICAgIGZvciAoaW5uZXJYID0gMDsgaW5uZXJYIDwgb3B0aW9ucy50b1dpZHRoOyBpbm5lclggKz0gaW5uZXJUaWxlV2lkdGgpIHtcbiAgICAgIHggPSBpbm5lclggLSBvcHRpb25zLmRlc3RUaWxlQm9yZGVyO1xuXG4gICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgeCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHRvVGlsZVdpZHRoID0gaW5uZXJYICsgaW5uZXJUaWxlV2lkdGggKyBvcHRpb25zLmRlc3RUaWxlQm9yZGVyIC0geDtcblxuICAgICAgaWYgKHggKyB0b1RpbGVXaWR0aCA+PSBvcHRpb25zLnRvV2lkdGgpIHtcbiAgICAgICAgdG9UaWxlV2lkdGggPSBvcHRpb25zLnRvV2lkdGggLSB4O1xuICAgICAgfVxuXG4gICAgICB5ID0gaW5uZXJZIC0gb3B0aW9ucy5kZXN0VGlsZUJvcmRlcjtcblxuICAgICAgaWYgKHkgPCAwKSB7XG4gICAgICAgIHkgPSAwO1xuICAgICAgfVxuXG4gICAgICB0b1RpbGVIZWlnaHQgPSBpbm5lclkgKyBpbm5lclRpbGVIZWlnaHQgKyBvcHRpb25zLmRlc3RUaWxlQm9yZGVyIC0geTtcblxuICAgICAgaWYgKHkgKyB0b1RpbGVIZWlnaHQgPj0gb3B0aW9ucy50b0hlaWdodCkge1xuICAgICAgICB0b1RpbGVIZWlnaHQgPSBvcHRpb25zLnRvSGVpZ2h0IC0geTtcbiAgICAgIH1cblxuICAgICAgdGlsZSA9IHtcbiAgICAgICAgdG9YOiB4LFxuICAgICAgICB0b1k6IHksXG4gICAgICAgIHRvV2lkdGg6IHRvVGlsZVdpZHRoLFxuICAgICAgICB0b0hlaWdodDogdG9UaWxlSGVpZ2h0LFxuICAgICAgICB0b0lubmVyWDogaW5uZXJYLFxuICAgICAgICB0b0lubmVyWTogaW5uZXJZLFxuICAgICAgICB0b0lubmVyV2lkdGg6IGlubmVyVGlsZVdpZHRoLFxuICAgICAgICB0b0lubmVySGVpZ2h0OiBpbm5lclRpbGVIZWlnaHQsXG4gICAgICAgIG9mZnNldFg6IHggLyBzY2FsZVggLSBwaXhlbEZsb29yKHggLyBzY2FsZVgpLFxuICAgICAgICBvZmZzZXRZOiB5IC8gc2NhbGVZIC0gcGl4ZWxGbG9vcih5IC8gc2NhbGVZKSxcbiAgICAgICAgc2NhbGVYOiBzY2FsZVgsXG4gICAgICAgIHNjYWxlWTogc2NhbGVZLFxuICAgICAgICB4OiBwaXhlbEZsb29yKHggLyBzY2FsZVgpLFxuICAgICAgICB5OiBwaXhlbEZsb29yKHkgLyBzY2FsZVkpLFxuICAgICAgICB3aWR0aDogcGl4ZWxDZWlsKHRvVGlsZVdpZHRoIC8gc2NhbGVYKSxcbiAgICAgICAgaGVpZ2h0OiBwaXhlbENlaWwodG9UaWxlSGVpZ2h0IC8gc2NhbGVZKVxuICAgICAgfTtcbiAgICAgIHRpbGVzLnB1c2godGlsZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRpbGVzO1xufTtcblxufSx7fV0sMTY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvYmpDbGFzcyhvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5pc0NhbnZhcyA9IGZ1bmN0aW9uIGlzQ2FudmFzKGVsZW1lbnQpIHtcbiAgdmFyIGNuYW1lID0gb2JqQ2xhc3MoZWxlbWVudCk7XG4gIHJldHVybiBjbmFtZSA9PT0gJ1tvYmplY3QgSFRNTENhbnZhc0VsZW1lbnRdJ1xuICAvKiBicm93c2VyICovXG4gIHx8IGNuYW1lID09PSAnW29iamVjdCBPZmZzY3JlZW5DYW52YXNdJyB8fCBjbmFtZSA9PT0gJ1tvYmplY3QgQ2FudmFzXSdcbiAgLyogbm9kZS1jYW52YXMgKi9cbiAgO1xufTtcblxubW9kdWxlLmV4cG9ydHMuaXNJbWFnZSA9IGZ1bmN0aW9uIGlzSW1hZ2UoZWxlbWVudCkge1xuICByZXR1cm4gb2JqQ2xhc3MoZWxlbWVudCkgPT09ICdbb2JqZWN0IEhUTUxJbWFnZUVsZW1lbnRdJztcbn07XG5cbm1vZHVsZS5leHBvcnRzLmlzSW1hZ2VCaXRtYXAgPSBmdW5jdGlvbiBpc0ltYWdlQml0bWFwKGVsZW1lbnQpIHtcbiAgcmV0dXJuIG9iakNsYXNzKGVsZW1lbnQpID09PSAnW29iamVjdCBJbWFnZUJpdG1hcF0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMubGltaXRlciA9IGZ1bmN0aW9uIGxpbWl0ZXIoY29uY3VycmVuY3kpIHtcbiAgdmFyIGFjdGl2ZSA9IDAsXG4gICAgICBxdWV1ZSA9IFtdO1xuXG4gIGZ1bmN0aW9uIHJvbGwoKSB7XG4gICAgaWYgKGFjdGl2ZSA8IGNvbmN1cnJlbmN5ICYmIHF1ZXVlLmxlbmd0aCkge1xuICAgICAgYWN0aXZlKys7XG4gICAgICBxdWV1ZS5zaGlmdCgpKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGxpbWl0KGZuKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHF1ZXVlLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICBmbigpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICBhY3RpdmUtLTtcbiAgICAgICAgICByb2xsKCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICBhY3RpdmUtLTtcbiAgICAgICAgICByb2xsKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByb2xsKCk7XG4gICAgfSk7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5jaWJfcXVhbGl0eV9uYW1lID0gZnVuY3Rpb24gY2liX3F1YWxpdHlfbmFtZShudW0pIHtcbiAgc3dpdGNoIChudW0pIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gJ3BpeGVsYXRlZCc7XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gJ2xvdyc7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gJ21lZGl1bSc7XG4gIH1cblxuICByZXR1cm4gJ2hpZ2gnO1xufTtcblxubW9kdWxlLmV4cG9ydHMuY2liX3N1cHBvcnQgPSBmdW5jdGlvbiBjaWJfc3VwcG9ydChjcmVhdGVDYW52YXMpIHtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgY3JlYXRlSW1hZ2VCaXRtYXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGMgPSBjcmVhdGVDYW52YXMoMTAwLCAxMDApO1xuICAgIHJldHVybiBjcmVhdGVJbWFnZUJpdG1hcChjLCAwLCAwLCAxMDAsIDEwMCwge1xuICAgICAgcmVzaXplV2lkdGg6IDEwLFxuICAgICAgcmVzaXplSGVpZ2h0OiAxMCxcbiAgICAgIHJlc2l6ZVF1YWxpdHk6ICdoaWdoJ1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGJpdG1hcCkge1xuICAgICAgdmFyIHN0YXR1cyA9IGJpdG1hcC53aWR0aCA9PT0gMTA7IC8vIEJyYW5jaCBiZWxvdyBpcyBmaWx0ZXJlZCBvbiB1cHBlciBsZXZlbC4gV2UgZG8gbm90IGNhbGwgcmVzaXplXG4gICAgICAvLyBkZXRlY3Rpb24gZm9yIGJhc2ljIEltYWdlQml0bWFwLlxuICAgICAgLy9cbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9JbWFnZUJpdG1hcFxuICAgICAgLy8gb2xkIENyb21lIDUxIGhhcyBJbWFnZUJpdG1hcCB3aXRob3V0IC5jbG9zZSgpLiBUaGVuIHRoaXMgY29kZVxuICAgICAgLy8gd2lsbCB0aHJvdyBhbmQgcmV0dXJuICdmYWxzZScgYXMgZXhwZWN0ZWQuXG4gICAgICAvL1xuXG4gICAgICBiaXRtYXAuY2xvc2UoKTtcbiAgICAgIGMgPSBudWxsO1xuICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICB9KTtcbiAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzLndvcmtlcl9vZmZzY3JlZW5fY2FudmFzX3N1cHBvcnQgPSBmdW5jdGlvbiB3b3JrZXJfb2Zmc2NyZWVuX2NhbnZhc19zdXBwb3J0KCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICh0eXBlb2YgT2Zmc2NyZWVuQ2FudmFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gaWYgT2Zmc2NyZWVuQ2FudmFzIGlzIHByZXNlbnQsIHdlIGFzc3VtZSBicm93c2VyIHN1cHBvcnRzIFdvcmtlciBhbmQgYnVpbHQtaW4gUHJvbWlzZSBhcyB3ZWxsXG4gICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3b3JrZXJQYXlsb2FkKHNlbGYpIHtcbiAgICAgIGlmICh0eXBlb2YgY3JlYXRlSW1hZ2VCaXRtYXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2UoZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2FudmFzID0gbmV3IE9mZnNjcmVlbkNhbnZhcygxMCwgMTApOyAvLyB0ZXN0IHRoYXQgMmQgY29udGV4dCBjYW4gYmUgdXNlZCBpbiB3b3JrZXJcblxuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGN0eC5yZWN0KDAsIDAsIDEsIDEpOyAvLyB0ZXN0IHRoYXQgY2liIGNhbiBiZSB1c2VkIHRvIHJldHVybiBpbWFnZSBiaXRtYXAgZnJvbSB3b3JrZXJcblxuICAgICAgICByZXR1cm4gY3JlYXRlSW1hZ2VCaXRtYXAoY2FudmFzLCAwLCAwLCAxLCAxKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2VsZi5wb3N0TWVzc2FnZSh0cnVlKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYucG9zdE1lc3NhZ2UoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGNvZGUgPSBidG9hKFwiKFwiLmNvbmNhdCh3b3JrZXJQYXlsb2FkLnRvU3RyaW5nKCksIFwiKShzZWxmKTtcIikpO1xuICAgIHZhciB3ID0gbmV3IFdvcmtlcihcImRhdGE6dGV4dC9qYXZhc2NyaXB0O2Jhc2U2NCxcIi5jb25jYXQoY29kZSkpO1xuXG4gICAgdy5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgIHJldHVybiByZXNvbHZlKGV2LmRhdGEpO1xuICAgIH07XG5cbiAgICB3Lm9uZXJyb3IgPSByZWplY3Q7XG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufTsgLy8gQ2hlY2sgaWYgY2FudmFzLmdldENvbnRleHQoJzJkJykuZ2V0SW1hZ2VEYXRhIGNhbiBiZSB1c2VkLFxuLy8gRmlyZUZveCByYW5kb21pemVzIHRoZSBvdXRwdXQgb2YgdGhhdCBmdW5jdGlvbiBpbiBgcHJpdmFjeS5yZXNpc3RGaW5nZXJwcmludGluZ2AgbW9kZVxuXG5cbm1vZHVsZS5leHBvcnRzLmNhbl91c2VfY2FudmFzID0gZnVuY3Rpb24gY2FuX3VzZV9jYW52YXMoY3JlYXRlQ2FudmFzKSB7XG4gIHZhciB1c2FibGUgPSBmYWxzZTtcblxuICB0cnkge1xuICAgIHZhciBjYW52YXMgPSBjcmVhdGVDYW52YXMoMiwgMSk7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHZhciBkID0gY3R4LmNyZWF0ZUltYWdlRGF0YSgyLCAxKTtcbiAgICBkLmRhdGFbMF0gPSAxMjtcbiAgICBkLmRhdGFbMV0gPSAyMztcbiAgICBkLmRhdGFbMl0gPSAzNDtcbiAgICBkLmRhdGFbM10gPSAyNTU7XG4gICAgZC5kYXRhWzRdID0gNDU7XG4gICAgZC5kYXRhWzVdID0gNTY7XG4gICAgZC5kYXRhWzZdID0gNjc7XG4gICAgZC5kYXRhWzddID0gMjU1O1xuICAgIGN0eC5wdXRJbWFnZURhdGEoZCwgMCwgMCk7XG4gICAgZCA9IG51bGw7XG4gICAgZCA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgMiwgMSk7XG5cbiAgICBpZiAoZC5kYXRhWzBdID09PSAxMiAmJiBkLmRhdGFbMV0gPT09IDIzICYmIGQuZGF0YVsyXSA9PT0gMzQgJiYgZC5kYXRhWzNdID09PSAyNTUgJiYgZC5kYXRhWzRdID09PSA0NSAmJiBkLmRhdGFbNV0gPT09IDU2ICYmIGQuZGF0YVs2XSA9PT0gNjcgJiYgZC5kYXRhWzddID09PSAyNTUpIHtcbiAgICAgIHVzYWJsZSA9IHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgcmV0dXJuIHVzYWJsZTtcbn07IC8vIENoZWNrIGlmIGNyZWF0ZUltYWdlQml0bWFwKGltZywgc3gsIHN5LCBzdywgc2gpIHNpZ25hdHVyZSB3b3JrcyBjb3JyZWN0bHlcbi8vIHdpdGggSlBFRyBpbWFnZXMgb3JpZW50ZWQgd2l0aCBFeGlmO1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTIyMDY3MVxuLy8gVE9ETzogcmVtb3ZlIGFmdGVyIGl0J3MgZml4ZWQgaW4gY2hyb21lIGZvciBhdCBsZWFzdCAyIHJlbGVhc2VzXG5cblxubW9kdWxlLmV4cG9ydHMuY2liX2Nhbl91c2VfcmVnaW9uID0gZnVuY3Rpb24gY2liX2Nhbl91c2VfcmVnaW9uKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBpZiAodHlwZW9mIGNyZWF0ZUltYWdlQml0bWFwID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsJyArICcvOWovNFFCaVJYaHBaZ0FBVFUwQUtnQUFBQWdBQlFFU0FBTUFBQUFCQUFZQUFBRWFBQVVBQUFBQkFBQUFTZ0ViQUFVQUEnICsgJ0FBQkFBQUFVZ0VvQUFNQUFBQUJBQUlBQUFJVEFBTUFBQUFCQUFFQUFBQUFBQUFBQUFCSUFBQUFBUUFBQUVnQUFBQUIvOScgKyAnc0FRd0FFQXdNRUF3TUVCQU1FQlFRRUJRWUtCd1lHQmdZTkNRb0lDZzhORUJBUERROE9FUk1ZRkJFU0Z4SU9EeFVjRlJjJyArICdaR1JzYkd4QVVIUjhkR2g4WUdoc2EvOXNBUXdFRUJRVUdCUVlNQndjTUdoRVBFUm9hR2hvYUdob2FHaG9hR2hvYUdob2EnICsgJ0dob2FHaG9hR2hvYUdob2FHaG9hR2hvYUdob2FHaG9hR2hvYUdob2FHaG9hLzhJQUVRZ0FBUUFDQXdFUkFBSVJBUU1SQScgKyAnZi9FQUJRQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFmL3hBQVVBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOW9BREFNQkFBJyArICdJUUF4QUFBQUYvUC8vRUFCUVFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBRC8yZ0FJQVFFQUFRVUNmLy9FQUJRUkFRQUFBQUEnICsgJ0FBQUFBQUFBQUFBQUFBQUQvMmdBSUFRTUJBVDhCZi8vRUFCUVJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBRC8yZ0FJQVFJQicgKyAnQVQ4QmYvL0VBQlFRQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUQvMmdBSUFRRUFCajhDZi8vRUFCUVFBUUFBQUFBQUFBQUFBJyArICdBQUFBQUFBQUFELzJnQUlBUUVBQVQ4aGYvL2FBQXdEQVFBQ0FBTUFBQUFRSC8vRUFCUVJBUUFBQUFBQUFBQUFBQUFBQUEnICsgJ0FBQUFELzJnQUlBUU1CQVQ4UWYvL0VBQlFSQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUQvMmdBSUFRSUJBVDhRZi8vRUFCUScgKyAnUUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFELzJnQUlBUUVBQVQ4UWYvL1onO1xuXG4gICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgY3JlYXRlSW1hZ2VCaXRtYXAoaW1hZ2UsIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpLnRoZW4oZnVuY3Rpb24gKGJpdG1hcCkge1xuICAgICAgICBpZiAoYml0bWFwLndpZHRoID09PSBpbWFnZS53aWR0aCAmJiBiaXRtYXAuaGVpZ2h0ID09PSBpbWFnZS5oZWlnaHQpIHtcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgIH07XG4gIH0pO1xufTtcblxufSx7fV0sMTc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gV2ViIFdvcmtlciB3cmFwcGVyIGZvciBpbWFnZSByZXNpemUgZnVuY3Rpb25cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBNYXRoTGliID0gX2RlcmVxXygnLi9tYXRobGliJyk7XG5cbiAgdmFyIG1hdGhMaWI7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cbiAgb25tZXNzYWdlID0gZnVuY3Rpb24gb25tZXNzYWdlKGV2KSB7XG4gICAgdmFyIHRpbGVPcHRzID0gZXYuZGF0YS5vcHRzO1xuICAgIHZhciByZXR1cm5CaXRtYXAgPSBmYWxzZTtcblxuICAgIGlmICghdGlsZU9wdHMuc3JjICYmIHRpbGVPcHRzLnNyY0JpdG1hcCkge1xuICAgICAgdmFyIGNhbnZhcyA9IG5ldyBPZmZzY3JlZW5DYW52YXModGlsZU9wdHMud2lkdGgsIHRpbGVPcHRzLmhlaWdodCk7XG4gICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgICAgICBhbHBoYTogQm9vbGVhbih0aWxlT3B0cy5hbHBoYSlcbiAgICAgIH0pO1xuICAgICAgY3R4LmRyYXdJbWFnZSh0aWxlT3B0cy5zcmNCaXRtYXAsIDAsIDApO1xuICAgICAgdGlsZU9wdHMuc3JjID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCB0aWxlT3B0cy53aWR0aCwgdGlsZU9wdHMuaGVpZ2h0KS5kYXRhO1xuICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLmhlaWdodCA9IDA7XG4gICAgICBjYW52YXMgPSBudWxsO1xuICAgICAgdGlsZU9wdHMuc3JjQml0bWFwLmNsb3NlKCk7XG4gICAgICB0aWxlT3B0cy5zcmNCaXRtYXAgPSBudWxsOyAvLyBUZW1wb3JhcnkgZm9yY2Ugb3V0IGRhdGEgdG8gdHlwZWQgYXJyYXksIGJlY2F1c2UgQ2hyb21lIGhhdmUgYXJ0ZWZhY3RzXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWNhL3BpY2EvaXNzdWVzLzIyM1xuICAgICAgLy8gcmV0dXJuQml0bWFwID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIW1hdGhMaWIpIG1hdGhMaWIgPSBuZXcgTWF0aExpYihldi5kYXRhLmZlYXR1cmVzKTsgLy8gVXNlIG11bHRpbWF0aCdzIHN5bmMgYXV0by1pbml0LiBBdm9pZCBQcm9taXNlIHVzZSBpbiBvbGQgYnJvd3NlcnMsXG4gICAgLy8gYmVjYXVzZSBwb2x5ZmlsbHMgYXJlIG5vdCBwcm9wYWdhdGVkIHRvIHdlYndvcmtlci5cblxuICAgIHZhciBkYXRhID0gbWF0aExpYi5yZXNpemVBbmRVbnNoYXJwKHRpbGVPcHRzKTtcblxuICAgIGlmIChyZXR1cm5CaXRtYXApIHtcbiAgICAgIHZhciB0b0ltYWdlRGF0YSA9IG5ldyBJbWFnZURhdGEobmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGRhdGEpLCB0aWxlT3B0cy50b1dpZHRoLCB0aWxlT3B0cy50b0hlaWdodCk7XG5cbiAgICAgIHZhciBfY2FudmFzID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh0aWxlT3B0cy50b1dpZHRoLCB0aWxlT3B0cy50b0hlaWdodCk7XG5cbiAgICAgIHZhciBfY3R4ID0gX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHtcbiAgICAgICAgYWxwaGE6IEJvb2xlYW4odGlsZU9wdHMuYWxwaGEpXG4gICAgICB9KTtcblxuICAgICAgX2N0eC5wdXRJbWFnZURhdGEodG9JbWFnZURhdGEsIDAsIDApO1xuXG4gICAgICBjcmVhdGVJbWFnZUJpdG1hcChfY2FudmFzKS50aGVuKGZ1bmN0aW9uIChiaXRtYXApIHtcbiAgICAgICAgcG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIGJpdG1hcDogYml0bWFwXG4gICAgICAgIH0sIFtiaXRtYXBdKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3N0TWVzc2FnZSh7XG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0sIFtkYXRhLmJ1ZmZlcl0pO1xuICAgIH1cbiAgfTtcbn07XG5cbn0se1wiLi9tYXRobGliXCI6MX1dLDE4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIENhbGN1bGF0ZSBHYXVzc2lhbiBibHVyIG9mIGFuIGltYWdlIHVzaW5nIElJUiBmaWx0ZXJcbi8vIFRoZSBtZXRob2QgaXMgdGFrZW4gZnJvbSBJbnRlbCdzIHdoaXRlIHBhcGVyIGFuZCBjb2RlIGV4YW1wbGUgYXR0YWNoZWQgdG8gaXQ6XG4vLyBodHRwczovL3NvZnR3YXJlLmludGVsLmNvbS9lbi11cy9hcnRpY2xlcy9paXItZ2F1c3NpYW4tYmx1ci1maWx0ZXJcbi8vIC1pbXBsZW1lbnRhdGlvbi11c2luZy1pbnRlbC1hZHZhbmNlZC12ZWN0b3ItZXh0ZW5zaW9uc1xuXG52YXIgYTAsIGExLCBhMiwgYTMsIGIxLCBiMiwgbGVmdF9jb3JuZXIsIHJpZ2h0X2Nvcm5lcjtcblxuZnVuY3Rpb24gZ2F1c3NDb2VmKHNpZ21hKSB7XG4gIGlmIChzaWdtYSA8IDAuNSkge1xuICAgIHNpZ21hID0gMC41O1xuICB9XG5cbiAgdmFyIGEgPSBNYXRoLmV4cCgwLjcyNiAqIDAuNzI2KSAvIHNpZ21hLFxuICAgICAgZzEgPSBNYXRoLmV4cCgtYSksXG4gICAgICBnMiA9IE1hdGguZXhwKC0yICogYSksXG4gICAgICBrID0gKDEgLSBnMSkgKiAoMSAtIGcxKSAvICgxICsgMiAqIGEgKiBnMSAtIGcyKTtcblxuICBhMCA9IGs7XG4gIGExID0gayAqIChhIC0gMSkgKiBnMTtcbiAgYTIgPSBrICogKGEgKyAxKSAqIGcxO1xuICBhMyA9IC1rICogZzI7XG4gIGIxID0gMiAqIGcxO1xuICBiMiA9IC1nMjtcbiAgbGVmdF9jb3JuZXIgPSAoYTAgKyBhMSkgLyAoMSAtIGIxIC0gYjIpO1xuICByaWdodF9jb3JuZXIgPSAoYTIgKyBhMykgLyAoMSAtIGIxIC0gYjIpO1xuXG4gIC8vIEF0dGVtcHQgdG8gZm9yY2UgdHlwZSB0byBGUDMyLlxuICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbIGEwLCBhMSwgYTIsIGEzLCBiMSwgYjIsIGxlZnRfY29ybmVyLCByaWdodF9jb3JuZXIgXSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZvbHZlTW9ubzE2KHNyYywgb3V0LCBsaW5lLCBjb2VmZiwgd2lkdGgsIGhlaWdodCkge1xuICAvLyB0YWtlcyBzcmMgaW1hZ2UgYW5kIHdyaXRlcyB0aGUgYmx1cnJlZCBhbmQgdHJhbnNwb3NlZCByZXN1bHQgaW50byBvdXRcblxuICB2YXIgcHJldl9zcmMsIGN1cnJfc3JjLCBjdXJyX291dCwgcHJldl9vdXQsIHByZXZfcHJldl9vdXQ7XG4gIHZhciBzcmNfaW5kZXgsIG91dF9pbmRleCwgbGluZV9pbmRleDtcbiAgdmFyIGksIGo7XG4gIHZhciBjb2VmZl9hMCwgY29lZmZfYTEsIGNvZWZmX2IxLCBjb2VmZl9iMjtcblxuICBmb3IgKGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICBzcmNfaW5kZXggPSBpICogd2lkdGg7XG4gICAgb3V0X2luZGV4ID0gaTtcbiAgICBsaW5lX2luZGV4ID0gMDtcblxuICAgIC8vIGxlZnQgdG8gcmlnaHRcbiAgICBwcmV2X3NyYyA9IHNyY1tzcmNfaW5kZXhdO1xuICAgIHByZXZfcHJldl9vdXQgPSBwcmV2X3NyYyAqIGNvZWZmWzZdO1xuICAgIHByZXZfb3V0ID0gcHJldl9wcmV2X291dDtcblxuICAgIGNvZWZmX2EwID0gY29lZmZbMF07XG4gICAgY29lZmZfYTEgPSBjb2VmZlsxXTtcbiAgICBjb2VmZl9iMSA9IGNvZWZmWzRdO1xuICAgIGNvZWZmX2IyID0gY29lZmZbNV07XG5cbiAgICBmb3IgKGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgY3Vycl9zcmMgPSBzcmNbc3JjX2luZGV4XTtcblxuICAgICAgY3Vycl9vdXQgPSBjdXJyX3NyYyAqIGNvZWZmX2EwICtcbiAgICAgICAgICAgICAgICAgcHJldl9zcmMgKiBjb2VmZl9hMSArXG4gICAgICAgICAgICAgICAgIHByZXZfb3V0ICogY29lZmZfYjEgK1xuICAgICAgICAgICAgICAgICBwcmV2X3ByZXZfb3V0ICogY29lZmZfYjI7XG5cbiAgICAgIHByZXZfcHJldl9vdXQgPSBwcmV2X291dDtcbiAgICAgIHByZXZfb3V0ID0gY3Vycl9vdXQ7XG4gICAgICBwcmV2X3NyYyA9IGN1cnJfc3JjO1xuXG4gICAgICBsaW5lW2xpbmVfaW5kZXhdID0gcHJldl9vdXQ7XG4gICAgICBsaW5lX2luZGV4Kys7XG4gICAgICBzcmNfaW5kZXgrKztcbiAgICB9XG5cbiAgICBzcmNfaW5kZXgtLTtcbiAgICBsaW5lX2luZGV4LS07XG4gICAgb3V0X2luZGV4ICs9IGhlaWdodCAqICh3aWR0aCAtIDEpO1xuXG4gICAgLy8gcmlnaHQgdG8gbGVmdFxuICAgIHByZXZfc3JjID0gc3JjW3NyY19pbmRleF07XG4gICAgcHJldl9wcmV2X291dCA9IHByZXZfc3JjICogY29lZmZbN107XG4gICAgcHJldl9vdXQgPSBwcmV2X3ByZXZfb3V0O1xuICAgIGN1cnJfc3JjID0gcHJldl9zcmM7XG5cbiAgICBjb2VmZl9hMCA9IGNvZWZmWzJdO1xuICAgIGNvZWZmX2ExID0gY29lZmZbM107XG5cbiAgICBmb3IgKGogPSB3aWR0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICBjdXJyX291dCA9IGN1cnJfc3JjICogY29lZmZfYTAgK1xuICAgICAgICAgICAgICAgICBwcmV2X3NyYyAqIGNvZWZmX2ExICtcbiAgICAgICAgICAgICAgICAgcHJldl9vdXQgKiBjb2VmZl9iMSArXG4gICAgICAgICAgICAgICAgIHByZXZfcHJldl9vdXQgKiBjb2VmZl9iMjtcblxuICAgICAgcHJldl9wcmV2X291dCA9IHByZXZfb3V0O1xuICAgICAgcHJldl9vdXQgPSBjdXJyX291dDtcblxuICAgICAgcHJldl9zcmMgPSBjdXJyX3NyYztcbiAgICAgIGN1cnJfc3JjID0gc3JjW3NyY19pbmRleF07XG5cbiAgICAgIG91dFtvdXRfaW5kZXhdID0gbGluZVtsaW5lX2luZGV4XSArIHByZXZfb3V0O1xuXG4gICAgICBzcmNfaW5kZXgtLTtcbiAgICAgIGxpbmVfaW5kZXgtLTtcbiAgICAgIG91dF9pbmRleCAtPSBoZWlnaHQ7XG4gICAgfVxuICB9XG59XG5cblxuZnVuY3Rpb24gYmx1ck1vbm8xNihzcmMsIHdpZHRoLCBoZWlnaHQsIHJhZGl1cykge1xuICAvLyBRdWljayBleGl0IG9uIHplcm8gcmFkaXVzXG4gIGlmICghcmFkaXVzKSB7IHJldHVybjsgfVxuXG4gIHZhciBvdXQgICAgICA9IG5ldyBVaW50MTZBcnJheShzcmMubGVuZ3RoKSxcbiAgICAgIHRtcF9saW5lID0gbmV3IEZsb2F0MzJBcnJheShNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSk7XG5cbiAgdmFyIGNvZWZmID0gZ2F1c3NDb2VmKHJhZGl1cyk7XG5cbiAgY29udm9sdmVNb25vMTYoc3JjLCBvdXQsIHRtcF9saW5lLCBjb2VmZiwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKTtcbiAgY29udm9sdmVNb25vMTYob3V0LCBzcmMsIHRtcF9saW5lLCBjb2VmZiwgaGVpZ2h0LCB3aWR0aCwgcmFkaXVzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBibHVyTW9ubzE2O1xuXG59LHt9XSwxOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5pZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBpZiAoc3VwZXJDdG9yKSB7XG4gICAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGlmIChzdXBlckN0b3IpIHtcbiAgICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gICAgfVxuICB9XG59XG5cbn0se31dLDIwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuXG52YXIgYXNzaWduICAgICAgICAgPSBfZGVyZXFfKCdvYmplY3QtYXNzaWduJyk7XG52YXIgYmFzZTY0ZGVjb2RlICAgPSBfZGVyZXFfKCcuL2xpYi9iYXNlNjRkZWNvZGUnKTtcbnZhciBoYXNXZWJBc3NlbWJseSA9IF9kZXJlcV8oJy4vbGliL3dhX2RldGVjdCcpO1xuXG5cbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIGpzOiB0cnVlLFxuICB3YXNtOiB0cnVlXG59O1xuXG5cbmZ1bmN0aW9uIE11bHRpTWF0aChvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNdWx0aU1hdGgpKSByZXR1cm4gbmV3IE11bHRpTWF0aChvcHRpb25zKTtcblxuICB2YXIgb3B0cyA9IGFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRpb25zIHx8IHt9KTtcblxuICB0aGlzLm9wdGlvbnMgICAgICAgICA9IG9wdHM7XG5cbiAgdGhpcy5fX2NhY2hlICAgICAgICAgPSB7fTtcblxuICB0aGlzLl9faW5pdF9wcm9taXNlICA9IG51bGw7XG4gIHRoaXMuX19tb2R1bGVzICAgICAgID0gb3B0cy5tb2R1bGVzIHx8IHt9O1xuICB0aGlzLl9fbWVtb3J5ICAgICAgICA9IG51bGw7XG4gIHRoaXMuX193YXNtICAgICAgICAgID0ge307XG5cbiAgdGhpcy5fX2lzTEUgPSAoKG5ldyBVaW50MzJBcnJheSgobmV3IFVpbnQ4QXJyYXkoWyAxLCAwLCAwLCAwIF0pKS5idWZmZXIpKVswXSA9PT0gMSk7XG5cbiAgaWYgKCF0aGlzLm9wdGlvbnMuanMgJiYgIXRoaXMub3B0aW9ucy53YXNtKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtYXRobGliOiBhdCBsZWFzdCBcImpzXCIgb3IgXCJ3YXNtXCIgc2hvdWxkIGJlIGVuYWJsZWQnKTtcbiAgfVxufVxuXG5cbk11bHRpTWF0aC5wcm90b3R5cGUuaGFzX3dhc20gPSBoYXNXZWJBc3NlbWJseTtcblxuXG5NdWx0aU1hdGgucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgdGhpcy5fX21vZHVsZXNbbW9kdWxlLm5hbWVdID0gbW9kdWxlO1xuXG4gIC8vIFBpbiB0aGUgYmVzdCBwb3NzaWJsZSBpbXBsZW1lbnRhdGlvblxuICBpZiAodGhpcy5vcHRpb25zLndhc20gJiYgdGhpcy5oYXNfd2FzbSgpICYmIG1vZHVsZS53YXNtX2ZuKSB7XG4gICAgdGhpc1ttb2R1bGUubmFtZV0gPSBtb2R1bGUud2FzbV9mbjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzW21vZHVsZS5uYW1lXSA9IG1vZHVsZS5mbjtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuXG5NdWx0aU1hdGgucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLl9faW5pdF9wcm9taXNlKSByZXR1cm4gdGhpcy5fX2luaXRfcHJvbWlzZTtcblxuICBpZiAoIXRoaXMub3B0aW9ucy5qcyAmJiB0aGlzLm9wdGlvbnMud2FzbSAmJiAhdGhpcy5oYXNfd2FzbSgpKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignbWF0aGxpYjogb25seSBcIndhc21cIiB3YXMgZW5hYmxlZCwgYnV0IGl0XFwncyBub3Qgc3VwcG9ydGVkJykpO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHRoaXMuX19pbml0X3Byb21pc2UgPSBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhzZWxmLl9fbW9kdWxlcykubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIG1vZHVsZSA9IHNlbGYuX19tb2R1bGVzW25hbWVdO1xuXG4gICAgaWYgKCFzZWxmLm9wdGlvbnMud2FzbSB8fCAhc2VsZi5oYXNfd2FzbSgpIHx8ICFtb2R1bGUud2FzbV9mbikgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBJZiBhbHJlYWR5IGNvbXBpbGVkIC0gZXhpdFxuICAgIGlmIChzZWxmLl9fd2FzbVtuYW1lXSkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBDb21waWxlIHdhc20gc291cmNlXG4gICAgcmV0dXJuIFdlYkFzc2VtYmx5LmNvbXBpbGUoc2VsZi5fX2Jhc2U2NGRlY29kZShtb2R1bGUud2FzbV9zcmMpKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKG0pIHsgc2VsZi5fX3dhc21bbmFtZV0gPSBtOyB9KTtcbiAgfSkpXG4gICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZjsgfSk7XG5cbiAgcmV0dXJuIHRoaXMuX19pbml0X3Byb21pc2U7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBNZXRob2RzIGJlbG93IGFyZSBmb3IgaW50ZXJuYWwgdXNlIGZyb20gcGx1Z2luc1xuXG5cbi8vIFNpbXBsZSBkZWNvZGUgYmFzZTY0IHRvIHR5cGVkIGFycmF5LiBVc2VmdWwgdG8gbG9hZCBlbWJlZGRlZCB3ZWJhc3NlbWJseVxuLy8gY29kZS4gWW91IHByb2JhYmx5IGRvbid0IG5lZWQgdG8gY2FsbCB0aGlzIG1ldGhvZCBkaXJlY3RseS5cbi8vXG5NdWx0aU1hdGgucHJvdG90eXBlLl9fYmFzZTY0ZGVjb2RlID0gYmFzZTY0ZGVjb2RlO1xuXG5cbi8vIEluY3JlYXNlIGN1cnJlbnQgbWVtb3J5IHRvIGluY2x1ZGUgc3BlY2lmaWVkIG51bWJlciBvZiBieXRlcy4gRG8gbm90aGluZyBpZlxuLy8gc2l6ZSBpcyBhbHJlYWR5IG9rLiBZb3UgcHJvYmFibHkgZG9uJ3QgbmVlZCB0byBjYWxsIHRoaXMgbWV0aG9kIGRpcmVjdGx5LFxuLy8gYmVjYXVzZSBpdCB3aWxsIGJlIGludm9rZWQgZnJvbSBgLl9faW5zdGFuY2UoKWAuXG4vL1xuTXVsdGlNYXRoLnByb3RvdHlwZS5fX3JlYWxsb2NhdGUgPSBmdW5jdGlvbiBtZW1fZ3Jvd190byhieXRlcykge1xuICBpZiAoIXRoaXMuX19tZW1vcnkpIHtcbiAgICB0aGlzLl9fbWVtb3J5ID0gbmV3IFdlYkFzc2VtYmx5Lk1lbW9yeSh7XG4gICAgICBpbml0aWFsOiBNYXRoLmNlaWwoYnl0ZXMgLyAoNjQgKiAxMDI0KSlcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fX21lbW9yeTtcbiAgfVxuXG4gIHZhciBtZW1fc2l6ZSA9IHRoaXMuX19tZW1vcnkuYnVmZmVyLmJ5dGVMZW5ndGg7XG5cbiAgaWYgKG1lbV9zaXplIDwgYnl0ZXMpIHtcbiAgICB0aGlzLl9fbWVtb3J5Lmdyb3coTWF0aC5jZWlsKChieXRlcyAtIG1lbV9zaXplKSAvICg2NCAqIDEwMjQpKSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fX21lbW9yeTtcbn07XG5cblxuLy8gUmV0dXJucyBpbnN0YW50aW5hdGVkIHdlYmFzc2VtYmx5IGl0ZW0gYnkgbmFtZSwgd2l0aCBzcGVjaWZpZWQgbWVtb3J5IHNpemVcbi8vIGFuZCBlbnZpcm9ubWVudC5cbi8vIC0gdXNlIGNhY2hlIGlmIGF2YWlsYWJsZVxuLy8gLSBkbyBzeW5jIG1vZHVsZSBpbml0LCBpZiBhc3luYyBpbml0IHdhcyBub3QgY2FsbGVkIGVhcmxpZXJcbi8vIC0gYWxsb2NhdGUgbWVtb3J5IGlmIG5vdCBlbm91Z3RoXG4vLyAtIGNhbiBleHBvcnQgZnVuY3Rpb25zIHRvIHdlYmFzc2VtYmx5IHZpYSBcImVudl9leHRyYVwiLFxuLy8gICBmb3IgZXhhbXBsZSwgeyBleHA6IE1hdGguZXhwIH1cbi8vXG5NdWx0aU1hdGgucHJvdG90eXBlLl9faW5zdGFuY2UgPSBmdW5jdGlvbiBpbnN0YW5jZShuYW1lLCBtZW1zaXplLCBlbnZfZXh0cmEpIHtcbiAgaWYgKG1lbXNpemUpIHRoaXMuX19yZWFsbG9jYXRlKG1lbXNpemUpO1xuXG4gIC8vIElmIC5pbml0KCkgd2FzIG5vdCBjYWxsZWQsIGRvIHN5bmMgY29tcGlsZVxuICBpZiAoIXRoaXMuX193YXNtW25hbWVdKSB7XG4gICAgdmFyIG1vZHVsZSA9IHRoaXMuX19tb2R1bGVzW25hbWVdO1xuICAgIHRoaXMuX193YXNtW25hbWVdID0gbmV3IFdlYkFzc2VtYmx5Lk1vZHVsZSh0aGlzLl9fYmFzZTY0ZGVjb2RlKG1vZHVsZS53YXNtX3NyYykpO1xuICB9XG5cbiAgaWYgKCF0aGlzLl9fY2FjaGVbbmFtZV0pIHtcbiAgICB2YXIgZW52X2Jhc2UgPSB7XG4gICAgICBtZW1vcnlCYXNlOiAwLFxuICAgICAgbWVtb3J5OiB0aGlzLl9fbWVtb3J5LFxuICAgICAgdGFibGVCYXNlOiAwLFxuICAgICAgdGFibGU6IG5ldyBXZWJBc3NlbWJseS5UYWJsZSh7IGluaXRpYWw6IDAsIGVsZW1lbnQ6ICdhbnlmdW5jJyB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9fY2FjaGVbbmFtZV0gPSBuZXcgV2ViQXNzZW1ibHkuSW5zdGFuY2UodGhpcy5fX3dhc21bbmFtZV0sIHtcbiAgICAgIGVudjogYXNzaWduKGVudl9iYXNlLCBlbnZfZXh0cmEgfHwge30pXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fX2NhY2hlW25hbWVdO1xufTtcblxuXG4vLyBIZWxwZXIgdG8gY2FsY3VsYXRlIG1lbW9yeSBhbGlnaCBmb3IgcG9pbnRlcnMuIFdlYmFzc2VtYmx5IGRvZXMgbm90IHJlcXVpcmVcbi8vIHRoaXMsIGJ1dCB5b3UgbWF5IHdpc2ggdG8gZXhwZXJpbWVudC4gRGVmYXVsdCBiYXNlID0gODtcbi8vXG5NdWx0aU1hdGgucHJvdG90eXBlLl9fYWxpZ24gPSBmdW5jdGlvbiBhbGlnbihudW1iZXIsIGJhc2UpIHtcbiAgYmFzZSA9IGJhc2UgfHwgODtcbiAgdmFyIHJlbWluZGVyID0gbnVtYmVyICUgYmFzZTtcbiAgcmV0dXJuIG51bWJlciArIChyZW1pbmRlciA/IGJhc2UgLSByZW1pbmRlciA6IDApO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IE11bHRpTWF0aDtcblxufSx7XCIuL2xpYi9iYXNlNjRkZWNvZGVcIjoyMSxcIi4vbGliL3dhX2RldGVjdFwiOjIyLFwib2JqZWN0LWFzc2lnblwiOjIzfV0sMjE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gYmFzZTY0IGRlY29kZSBzdHIgLT4gVWludDhBcnJheSwgdG8gbG9hZCBXQSBtb2R1bGVzXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBCQVNFNjRfTUFQID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmFzZTY0ZGVjb2RlKHN0cikge1xuICB2YXIgaW5wdXQgPSBzdHIucmVwbGFjZSgvW1xcclxcbj1dL2csICcnKSwgLy8gcmVtb3ZlIENSL0xGICYgcGFkZGluZyB0byBzaW1wbGlmeSBzY2FuXG4gICAgICBtYXggICA9IGlucHV0Lmxlbmd0aDtcblxuICB2YXIgb3V0ID0gbmV3IFVpbnQ4QXJyYXkoKG1heCAqIDMpID4+IDIpO1xuXG4gIC8vIENvbGxlY3QgYnkgNio0IGJpdHMgKDMgYnl0ZXMpXG5cbiAgdmFyIGJpdHMgPSAwO1xuICB2YXIgcHRyICA9IDA7XG5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgbWF4OyBpZHgrKykge1xuICAgIGlmICgoaWR4ICUgNCA9PT0gMCkgJiYgaWR4KSB7XG4gICAgICBvdXRbcHRyKytdID0gKGJpdHMgPj4gMTYpICYgMHhGRjtcbiAgICAgIG91dFtwdHIrK10gPSAoYml0cyA+PiA4KSAmIDB4RkY7XG4gICAgICBvdXRbcHRyKytdID0gYml0cyAmIDB4RkY7XG4gICAgfVxuXG4gICAgYml0cyA9IChiaXRzIDw8IDYpIHwgQkFTRTY0X01BUC5pbmRleE9mKGlucHV0LmNoYXJBdChpZHgpKTtcbiAgfVxuXG4gIC8vIER1bXAgdGFpbFxuXG4gIHZhciB0YWlsYml0cyA9IChtYXggJSA0KSAqIDY7XG5cbiAgaWYgKHRhaWxiaXRzID09PSAwKSB7XG4gICAgb3V0W3B0cisrXSA9IChiaXRzID4+IDE2KSAmIDB4RkY7XG4gICAgb3V0W3B0cisrXSA9IChiaXRzID4+IDgpICYgMHhGRjtcbiAgICBvdXRbcHRyKytdID0gYml0cyAmIDB4RkY7XG4gIH0gZWxzZSBpZiAodGFpbGJpdHMgPT09IDE4KSB7XG4gICAgb3V0W3B0cisrXSA9IChiaXRzID4+IDEwKSAmIDB4RkY7XG4gICAgb3V0W3B0cisrXSA9IChiaXRzID4+IDIpICYgMHhGRjtcbiAgfSBlbHNlIGlmICh0YWlsYml0cyA9PT0gMTIpIHtcbiAgICBvdXRbcHRyKytdID0gKGJpdHMgPj4gNCkgJiAweEZGO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn07XG5cbn0se31dLDIyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIERldGVjdCBXZWJBc3NlbWJseSBzdXBwb3J0LlxuLy8gLSBDaGVjayBnbG9iYWwgV2ViQXNzZW1ibHkgb2JqZWN0XG4vLyAtIFRyeSB0byBsb2FkIHNpbXBsZSBtb2R1bGUgKGNhbiBiZSBkaXNhYmxlZCB2aWEgQ1NQKVxuLy9cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgd2E7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNXZWJBc3NlbWJseSgpIHtcbiAgLy8gdXNlIGNhY2hlIGlmIGNhbGxlZCBiZWZvcmU7XG4gIGlmICh0eXBlb2Ygd2EgIT09ICd1bmRlZmluZWQnKSByZXR1cm4gd2E7XG5cbiAgd2EgPSBmYWxzZTtcblxuICBpZiAodHlwZW9mIFdlYkFzc2VtYmx5ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHdhO1xuXG4gIC8vIElmIFdlYkFzc2VuYmx5IGlzIGRpc2FibGVkLCBjb2RlIGNhbiB0aHJvdyBvbiBjb21waWxlXG4gIHRyeSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2JyaW9uL21pbi13YXNtLWZhaWwvYmxvYi9tYXN0ZXIvbWluLXdhc20tZmFpbC5pbi5qc1xuICAgIC8vIEFkZGl0aW9uYWwgY2hlY2sgdGhhdCBXQSBpbnRlcm5hbHMgYXJlIGNvcnJlY3RcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIGNvbW1hLXNwYWNpbmcsIG1heC1sZW4gKi9cbiAgICB2YXIgYmluICAgICAgPSBuZXcgVWludDhBcnJheShbIDAsOTcsMTE1LDEwOSwxLDAsMCwwLDEsNiwxLDk2LDEsMTI3LDEsMTI3LDMsMiwxLDAsNSwzLDEsMCwxLDcsOCwxLDQsMTE2LDEwMSwxMTUsMTE2LDAsMCwxMCwxNiwxLDE0LDAsMzIsMCw2NSwxLDU0LDIsMCwzMiwwLDQwLDIsMCwxMSBdKTtcbiAgICB2YXIgbW9kdWxlICAgPSBuZXcgV2ViQXNzZW1ibHkuTW9kdWxlKGJpbik7XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IFdlYkFzc2VtYmx5Lkluc3RhbmNlKG1vZHVsZSwge30pO1xuXG4gICAgLy8gdGVzdCBzdG9yaW5nIHRvIGFuZCBsb2FkaW5nIGZyb20gYSBub24temVybyBsb2NhdGlvbiB2aWEgYSBwYXJhbWV0ZXIuXG4gICAgLy8gU2FmYXJpIG9uIGlPUyAxMS4yLjUgcmV0dXJucyAwIHVuZXhwZWN0ZWRseSBhdCBub24temVybyBsb2NhdGlvbnNcbiAgICBpZiAoaW5zdGFuY2UuZXhwb3J0cy50ZXN0KDQpICE9PSAwKSB3YSA9IHRydWU7XG5cbiAgICByZXR1cm4gd2E7XG4gIH0gY2F0Y2ggKF9fKSB7fVxuXG4gIHJldHVybiB3YTtcbn07XG5cbn0se31dLDIzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cbn0se31dLDI0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBidW5kbGVGbiA9IGFyZ3VtZW50c1szXTtcbnZhciBzb3VyY2VzID0gYXJndW1lbnRzWzRdO1xudmFyIGNhY2hlID0gYXJndW1lbnRzWzVdO1xuXG52YXIgc3RyaW5naWZ5ID0gSlNPTi5zdHJpbmdpZnk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBvcHRpb25zKSB7XG4gICAgdmFyIHdrZXk7XG4gICAgdmFyIGNhY2hlS2V5cyA9IE9iamVjdC5rZXlzKGNhY2hlKTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2FjaGVLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0gY2FjaGVLZXlzW2ldO1xuICAgICAgICB2YXIgZXhwID0gY2FjaGVba2V5XS5leHBvcnRzO1xuICAgICAgICAvLyBVc2luZyBiYWJlbCBhcyBhIHRyYW5zcGlsZXIgdG8gdXNlIGVzbW9kdWxlLCB0aGUgZXhwb3J0IHdpbGwgYWx3YXlzXG4gICAgICAgIC8vIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBkZWZhdWx0IGV4cG9ydCBhcyBhIHByb3BlcnR5IG9mIGl0LiBUbyBlbnN1cmVcbiAgICAgICAgLy8gdGhlIGV4aXN0aW5nIGFwaSBhbmQgYmFiZWwgZXNtb2R1bGUgZXhwb3J0cyBhcmUgYm90aCBzdXBwb3J0ZWQgd2VcbiAgICAgICAgLy8gY2hlY2sgZm9yIGJvdGhcbiAgICAgICAgaWYgKGV4cCA9PT0gZm4gfHwgZXhwICYmIGV4cC5kZWZhdWx0ID09PSBmbikge1xuICAgICAgICAgICAgd2tleSA9IGtleTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF3a2V5KSB7XG4gICAgICAgIHdrZXkgPSBNYXRoLmZsb29yKE1hdGgucG93KDE2LCA4KSAqIE1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgdmFyIHdjYWNoZSA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNhY2hlS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBjYWNoZUtleXNbaV07XG4gICAgICAgICAgICB3Y2FjaGVba2V5XSA9IGtleTtcbiAgICAgICAgfVxuICAgICAgICBzb3VyY2VzW3drZXldID0gW1xuICAgICAgICAgICAgJ2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpeycgKyBmbiArICcoc2VsZik7IH0nLFxuICAgICAgICAgICAgd2NhY2hlXG4gICAgICAgIF07XG4gICAgfVxuICAgIHZhciBza2V5ID0gTWF0aC5mbG9vcihNYXRoLnBvdygxNiwgOCkgKiBNYXRoLnJhbmRvbSgpKS50b1N0cmluZygxNik7XG5cbiAgICB2YXIgc2NhY2hlID0ge307IHNjYWNoZVt3a2V5XSA9IHdrZXk7XG4gICAgc291cmNlc1tza2V5XSA9IFtcbiAgICAgICAgJ2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpeycgK1xuICAgICAgICAgICAgLy8gdHJ5IHRvIGNhbGwgZGVmYXVsdCBpZiBkZWZpbmVkIHRvIGFsc28gc3VwcG9ydCBiYWJlbCBlc21vZHVsZSBleHBvcnRzXG4gICAgICAgICAgICAndmFyIGYgPSByZXF1aXJlKCcgKyBzdHJpbmdpZnkod2tleSkgKyAnKTsnICtcbiAgICAgICAgICAgICcoZi5kZWZhdWx0ID8gZi5kZWZhdWx0IDogZikoc2VsZik7JyArXG4gICAgICAgICd9JyxcbiAgICAgICAgc2NhY2hlXG4gICAgXTtcblxuICAgIHZhciB3b3JrZXJTb3VyY2VzID0ge307XG4gICAgcmVzb2x2ZVNvdXJjZXMoc2tleSk7XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlU291cmNlcyhrZXkpIHtcbiAgICAgICAgd29ya2VyU291cmNlc1trZXldID0gdHJ1ZTtcblxuICAgICAgICBmb3IgKHZhciBkZXBQYXRoIGluIHNvdXJjZXNba2V5XVsxXSkge1xuICAgICAgICAgICAgdmFyIGRlcEtleSA9IHNvdXJjZXNba2V5XVsxXVtkZXBQYXRoXTtcbiAgICAgICAgICAgIGlmICghd29ya2VyU291cmNlc1tkZXBLZXldKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVNvdXJjZXMoZGVwS2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzcmMgPSAnKCcgKyBidW5kbGVGbiArICcpKHsnXG4gICAgICAgICsgT2JqZWN0LmtleXMod29ya2VyU291cmNlcykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdpZnkoa2V5KSArICc6WydcbiAgICAgICAgICAgICAgICArIHNvdXJjZXNba2V5XVswXVxuICAgICAgICAgICAgICAgICsgJywnICsgc3RyaW5naWZ5KHNvdXJjZXNba2V5XVsxXSkgKyAnXSdcbiAgICAgICAgICAgIDtcbiAgICAgICAgfSkuam9pbignLCcpXG4gICAgICAgICsgJ30se30sWycgKyBzdHJpbmdpZnkoc2tleSkgKyAnXSknXG4gICAgO1xuXG4gICAgdmFyIFVSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTCB8fCB3aW5kb3cubW96VVJMIHx8IHdpbmRvdy5tc1VSTDtcblxuICAgIHZhciBibG9iID0gbmV3IEJsb2IoW3NyY10sIHsgdHlwZTogJ3RleHQvamF2YXNjcmlwdCcgfSk7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5iYXJlKSB7IHJldHVybiBibG9iOyB9XG4gICAgdmFyIHdvcmtlclVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgdmFyIHdvcmtlciA9IG5ldyBXb3JrZXIod29ya2VyVXJsKTtcbiAgICB3b3JrZXIub2JqZWN0VVJMID0gd29ya2VyVXJsO1xuICAgIHJldHVybiB3b3JrZXI7XG59O1xuXG59LHt9XSxcIi9pbmRleC5qc1wiOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG52YXIgYXNzaWduID0gX2RlcmVxXygnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgd2Vid29ya2lmeSA9IF9kZXJlcV8oJ3dlYndvcmtpZnknKTtcblxudmFyIE1hdGhMaWIgPSBfZGVyZXFfKCcuL2xpYi9tYXRobGliJyk7XG5cbnZhciBQb29sID0gX2RlcmVxXygnLi9saWIvcG9vbCcpO1xuXG52YXIgdXRpbHMgPSBfZGVyZXFfKCcuL2xpYi91dGlscycpO1xuXG52YXIgd29ya2VyID0gX2RlcmVxXygnLi9saWIvd29ya2VyJyk7XG5cbnZhciBjcmVhdGVTdGFnZXMgPSBfZGVyZXFfKCcuL2xpYi9zdGVwcGVyJyk7XG5cbnZhciBjcmVhdGVSZWdpb25zID0gX2RlcmVxXygnLi9saWIvdGlsZXInKTsgLy8gRGVkdXBsaWNhdGUgcG9vbHMgJiBsaW1pdGVycyB3aXRoIHRoZSBzYW1lIGNvbmZpZ3Ncbi8vIHdoZW4gdXNlciBjcmVhdGVzIG11bHRpcGxlIHBpY2EgaW5zdGFuY2VzLlxuXG5cbnZhciBzaW5nbGV0b25lcyA9IHt9O1xudmFyIE5FRURfU0FGQVJJX0ZJWCA9IGZhbHNlO1xuXG50cnkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCkge1xuICAgIE5FRURfU0FGQVJJX0ZJWCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignU2FmYXJpJykgPj0gMDtcbiAgfVxufSBjYXRjaCAoZSkge31cblxudmFyIGNvbmN1cnJlbmN5ID0gMTtcblxuaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gIGNvbmN1cnJlbmN5ID0gTWF0aC5taW4obmF2aWdhdG9yLmhhcmR3YXJlQ29uY3VycmVuY3kgfHwgMSwgNCk7XG59XG5cbnZhciBERUZBVUxUX1BJQ0FfT1BUUyA9IHtcbiAgdGlsZTogMTAyNCxcbiAgY29uY3VycmVuY3k6IGNvbmN1cnJlbmN5LFxuICBmZWF0dXJlczogWydqcycsICd3YXNtJywgJ3d3J10sXG4gIGlkbGU6IDIwMDAsXG4gIGNyZWF0ZUNhbnZhczogZnVuY3Rpb24gY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB2YXIgdG1wQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdG1wQ2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdG1wQ2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdG1wQ2FudmFzO1xuICB9XG59O1xudmFyIERFRkFVTFRfUkVTSVpFX09QVFMgPSB7XG4gIHF1YWxpdHk6IDMsXG4gIGFscGhhOiBmYWxzZSxcbiAgdW5zaGFycEFtb3VudDogMCxcbiAgdW5zaGFycFJhZGl1czogMC4wLFxuICB1bnNoYXJwVGhyZXNob2xkOiAwXG59O1xudmFyIENBTl9ORVdfSU1BR0VfREFUQSA9IGZhbHNlO1xudmFyIENBTl9DUkVBVEVfSU1BR0VfQklUTUFQID0gZmFsc2U7XG52YXIgQ0FOX1VTRV9DQU5WQVNfR0VUX0lNQUdFX0RBVEEgPSBmYWxzZTtcbnZhciBDQU5fVVNFX09GRlNDUkVFTl9DQU5WQVMgPSBmYWxzZTtcbnZhciBDQU5fVVNFX0NJQl9SRUdJT05fRk9SX0lNQUdFID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHdvcmtlckZhYnJpYygpIHtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogd2Vid29ya2lmeSh3b3JrZXIpLFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLnZhbHVlLnRlcm1pbmF0ZSgpO1xuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIHVybCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTCB8fCB3aW5kb3cubW96VVJMIHx8IHdpbmRvdy5tc1VSTDtcblxuICAgICAgICBpZiAodXJsICYmIHVybC5yZXZva2VPYmplY3RVUkwgJiYgdGhpcy52YWx1ZS5vYmplY3RVUkwpIHtcbiAgICAgICAgICB1cmwucmV2b2tlT2JqZWN0VVJMKHRoaXMudmFsdWUub2JqZWN0VVJMKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEFQSSBtZXRob2RzXG5cblxuZnVuY3Rpb24gUGljYShvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQaWNhKSkgcmV0dXJuIG5ldyBQaWNhKG9wdGlvbnMpO1xuICB0aGlzLm9wdGlvbnMgPSBhc3NpZ24oe30sIERFRkFVTFRfUElDQV9PUFRTLCBvcHRpb25zIHx8IHt9KTtcbiAgdmFyIGxpbWl0ZXJfa2V5ID0gXCJsa19cIi5jb25jYXQodGhpcy5vcHRpb25zLmNvbmN1cnJlbmN5KTsgLy8gU2hhcmUgbGltaXRlcnMgdG8gYXZvaWQgbXVsdGlwbGUgcGFyYWxsZWwgd29ya2VycyB3aGVuIHVzZXIgY3JlYXRlc1xuICAvLyBtdWx0aXBsZSBwaWNhIGluc3RhbmNlcy5cblxuICB0aGlzLl9fbGltaXQgPSBzaW5nbGV0b25lc1tsaW1pdGVyX2tleV0gfHwgdXRpbHMubGltaXRlcih0aGlzLm9wdGlvbnMuY29uY3VycmVuY3kpO1xuICBpZiAoIXNpbmdsZXRvbmVzW2xpbWl0ZXJfa2V5XSkgc2luZ2xldG9uZXNbbGltaXRlcl9rZXldID0gdGhpcy5fX2xpbWl0OyAvLyBMaXN0IG9mIHN1cHBvcnRlZCBmZWF0dXJlcywgYWNjb3JkaW5nIHRvIG9wdGlvbnMgJiBicm93c2VyL25vZGUuanNcblxuICB0aGlzLmZlYXR1cmVzID0ge1xuICAgIGpzOiBmYWxzZSxcbiAgICAvLyBwdXJlIEpTIGltcGxlbWVudGF0aW9uLCBjYW4gYmUgZGlzYWJsZWQgZm9yIHRlc3RpbmdcbiAgICB3YXNtOiBmYWxzZSxcbiAgICAvLyB3ZWJhc3NlbWJseSBpbXBsZW1lbnRhdGlvbiBmb3IgaGVhdnkgZnVuY3Rpb25zXG4gICAgY2liOiBmYWxzZSxcbiAgICAvLyByZXNpemUgdmlhIGNyZWF0ZUltYWdlQml0bWFwIChvbmx5IEZGIGF0IHRoaXMgbW9tZW50KVxuICAgIHd3OiBmYWxzZSAvLyB3ZWJ3b3JrZXJzXG5cbiAgfTtcbiAgdGhpcy5fX3dvcmtlcnNQb29sID0gbnVsbDsgLy8gU3RvcmUgcmVxdWVzdGVkIGZlYXR1cmVzIGZvciB3ZWJ3b3JrZXJzXG5cbiAgdGhpcy5fX3JlcXVlc3RlZF9mZWF0dXJlcyA9IFtdO1xuICB0aGlzLl9fbWF0aGxpYiA9IG51bGw7XG59XG5cblBpY2EucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgaWYgKHRoaXMuX19pbml0UHJvbWlzZSkgcmV0dXJuIHRoaXMuX19pbml0UHJvbWlzZTsgLy8gVGVzdCBpZiB3ZSBjYW4gY3JlYXRlIEltYWdlRGF0YSB3aXRob3V0IGNhbnZhcyBhbmQgbWVtb3J5IGNvcHlcblxuICBpZiAodHlwZW9mIEltYWdlRGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRyeSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cbiAgICAgIG5ldyBJbWFnZURhdGEobmV3IFVpbnQ4Q2xhbXBlZEFycmF5KDQwMCksIDEwLCAxMCk7XG4gICAgICBDQU5fTkVXX0lNQUdFX0RBVEEgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKF9fKSB7fVxuICB9IC8vIEltYWdlQml0bWFwIGNhbiBiZSBlZmZlY3RpdmUgaW4gMiBwbGFjZXM6XG4gIC8vXG4gIC8vIDEuIFRocmVhZGVkIGpwZWcgdW5wYWNrIChiYXNpYylcbiAgLy8gMi4gQnVpbHQtaW4gcmVzaXplIChibG9ja2VkIGR1ZSBwcm9ibGVtIGluIGNocm9tZSwgc2VlIGlzc3VlICM4OSlcbiAgLy9cbiAgLy8gRm9yIGJhc2ljIHVzZSB3ZSBhbHNvIG5lZWQgSW1hZ2VCaXRtYXAgd28gc3VwcG9ydCAuY2xvc2UoKSBtZXRob2QsXG4gIC8vIHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9ydS9kb2NzL1dlYi9BUEkvSW1hZ2VCaXRtYXBcblxuXG4gIGlmICh0eXBlb2YgSW1hZ2VCaXRtYXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKEltYWdlQml0bWFwLnByb3RvdHlwZSAmJiBJbWFnZUJpdG1hcC5wcm90b3R5cGUuY2xvc2UpIHtcbiAgICAgIENBTl9DUkVBVEVfSU1BR0VfQklUTUFQID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWJ1ZygnSW1hZ2VCaXRtYXAgZG9lcyBub3Qgc3VwcG9ydCAuY2xvc2UoKSwgZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZmVhdHVyZXMgPSB0aGlzLm9wdGlvbnMuZmVhdHVyZXMuc2xpY2UoKTtcblxuICBpZiAoZmVhdHVyZXMuaW5kZXhPZignYWxsJykgPj0gMCkge1xuICAgIGZlYXR1cmVzID0gWydjaWInLCAnd2FzbScsICdqcycsICd3dyddO1xuICB9XG5cbiAgdGhpcy5fX3JlcXVlc3RlZF9mZWF0dXJlcyA9IGZlYXR1cmVzO1xuICB0aGlzLl9fbWF0aGxpYiA9IG5ldyBNYXRoTGliKGZlYXR1cmVzKTsgLy8gQ2hlY2sgV2ViV29ya2VyIHN1cHBvcnQgaWYgcmVxdWVzdGVkXG5cbiAgaWYgKGZlYXR1cmVzLmluZGV4T2YoJ3d3JykgPj0gMCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnV29ya2VyJyBpbiB3aW5kb3cpIHtcbiAgICAgIC8vIElFIDw9IDExIGRvbid0IGFsbG93IHRvIGNyZWF0ZSB3ZWJ3b3JrZXJzIGZyb20gc3RyaW5nLiBXZSBzaG91bGQgY2hlY2sgaXQuXG4gICAgICAvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzgwMTgxMC93ZWItd29ya2Vycy1mcm9tLWJsb2ItdXJscy1pbi1pZS0xMC1hbmQtMTFcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciB3a3IgPSBfZGVyZXFfKCd3ZWJ3b3JraWZ5JykoZnVuY3Rpb24gKCkge30pO1xuXG4gICAgICAgIHdrci50ZXJtaW5hdGUoKTtcbiAgICAgICAgdGhpcy5mZWF0dXJlcy53dyA9IHRydWU7IC8vIHBvb2wgdW5pcXVlbmVzcyBkZXBlbmRzIG9uIHBvb2wgY29uZmlnICsgd2Vid29ya2VyIGNvbmZpZ1xuXG4gICAgICAgIHZhciB3cG9vbF9rZXkgPSBcIndwX1wiLmNvbmNhdChKU09OLnN0cmluZ2lmeSh0aGlzLm9wdGlvbnMpKTtcblxuICAgICAgICBpZiAoc2luZ2xldG9uZXNbd3Bvb2xfa2V5XSkge1xuICAgICAgICAgIHRoaXMuX193b3JrZXJzUG9vbCA9IHNpbmdsZXRvbmVzW3dwb29sX2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fX3dvcmtlcnNQb29sID0gbmV3IFBvb2wod29ya2VyRmFicmljLCB0aGlzLm9wdGlvbnMuaWRsZSk7XG4gICAgICAgICAgc2luZ2xldG9uZXNbd3Bvb2xfa2V5XSA9IHRoaXMuX193b3JrZXJzUG9vbDtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoX18pIHt9XG4gICAgfVxuICB9XG5cbiAgdmFyIGluaXRNYXRoID0gdGhpcy5fX21hdGhsaWIuaW5pdCgpLnRoZW4oZnVuY3Rpb24gKG1hdGhsaWIpIHtcbiAgICAvLyBDb3B5IGRldGVjdGVkIGZlYXR1cmVzXG4gICAgYXNzaWduKF90aGlzLmZlYXR1cmVzLCBtYXRobGliLmZlYXR1cmVzKTtcbiAgfSk7XG5cbiAgdmFyIGNoZWNrQ2liUmVzaXplO1xuXG4gIGlmICghQ0FOX0NSRUFURV9JTUFHRV9CSVRNQVApIHtcbiAgICBjaGVja0NpYlJlc2l6ZSA9IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgY2hlY2tDaWJSZXNpemUgPSB1dGlscy5jaWJfc3VwcG9ydCh0aGlzLm9wdGlvbnMuY3JlYXRlQ2FudmFzKS50aGVuKGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgIGlmIChfdGhpcy5mZWF0dXJlcy5jaWIgJiYgZmVhdHVyZXMuaW5kZXhPZignY2liJykgPCAwKSB7XG4gICAgICAgIF90aGlzLmRlYnVnKCdjcmVhdGVJbWFnZUJpdG1hcCgpIHJlc2l6ZSBzdXBwb3J0ZWQsIGJ1dCBkaXNhYmxlZCBieSBjb25maWcnKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChmZWF0dXJlcy5pbmRleE9mKCdjaWInKSA+PSAwKSBfdGhpcy5mZWF0dXJlcy5jaWIgPSBzdGF0dXM7XG4gICAgfSk7XG4gIH1cblxuICBDQU5fVVNFX0NBTlZBU19HRVRfSU1BR0VfREFUQSA9IHV0aWxzLmNhbl91c2VfY2FudmFzKHRoaXMub3B0aW9ucy5jcmVhdGVDYW52YXMpO1xuICB2YXIgY2hlY2tPZmZzY3JlZW5DYW52YXM7XG5cbiAgaWYgKENBTl9DUkVBVEVfSU1BR0VfQklUTUFQICYmIENBTl9ORVdfSU1BR0VfREFUQSAmJiBmZWF0dXJlcy5pbmRleE9mKCd3dycpICE9PSAtMSkge1xuICAgIGNoZWNrT2Zmc2NyZWVuQ2FudmFzID0gdXRpbHMud29ya2VyX29mZnNjcmVlbl9jYW52YXNfc3VwcG9ydCgpO1xuICB9IGVsc2Uge1xuICAgIGNoZWNrT2Zmc2NyZWVuQ2FudmFzID0gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgfVxuXG4gIGNoZWNrT2Zmc2NyZWVuQ2FudmFzID0gY2hlY2tPZmZzY3JlZW5DYW52YXMudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgQ0FOX1VTRV9PRkZTQ1JFRU5fQ0FOVkFTID0gcmVzdWx0O1xuICB9KTsgLy8gd2UgdXNlIGNyZWF0ZUltYWdlQml0bWFwIHRvIGNyb3AgaW1hZ2UgZGF0YSBhbmQgcGFzcyBpdCB0byB3b3JrZXJzLFxuICAvLyBzbyBuZWVkIHRvIGNoZWNrIHdoZXRoZXIgZnVuY3Rpb24gd29ya3MgY29ycmVjdGx5O1xuICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMjIwNjcxXG5cbiAgdmFyIGNoZWNrQ2liUmVnaW9uID0gdXRpbHMuY2liX2Nhbl91c2VfcmVnaW9uKCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgQ0FOX1VTRV9DSUJfUkVHSU9OX0ZPUl9JTUFHRSA9IHJlc3VsdDtcbiAgfSk7IC8vIEluaXQgbWF0aCBsaWIuIFRoYXQncyBhc3luYyBiZWNhdXNlIGNhbiBsb2FkIHNvbWVcblxuICB0aGlzLl9faW5pdFByb21pc2UgPSBQcm9taXNlLmFsbChbaW5pdE1hdGgsIGNoZWNrQ2liUmVzaXplLCBjaGVja09mZnNjcmVlbkNhbnZhcywgY2hlY2tDaWJSZWdpb25dKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH0pO1xuICByZXR1cm4gdGhpcy5fX2luaXRQcm9taXNlO1xufTsgLy8gQ2FsbCByZXNpemVyIGluIHdlYndvcmtlciBvciBsb2NhbGx5LCBkZXBlbmRpbmcgb24gY29uZmlnXG5cblxuUGljYS5wcm90b3R5cGUuX19pbnZva2VSZXNpemUgPSBmdW5jdGlvbiAodGlsZU9wdHMsIG9wdHMpIHtcbiAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgLy8gU2hhcmUgY2FjaGUgYmV0d2VlbiBjYWxsczpcbiAgLy9cbiAgLy8gLSB3YXNtIGluc3RhbmNlXG4gIC8vIC0gd2FzbSBtZW1vcnkgb2JqZWN0XG4gIC8vXG4gIG9wdHMuX19tYXRoQ2FjaGUgPSBvcHRzLl9fbWF0aENhY2hlIHx8IHt9O1xuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFfdGhpczIuZmVhdHVyZXMud3cpIHtcbiAgICAgIC8vIG5vdCBwb3NzaWJsZSB0byBoYXZlIEltYWdlQml0bWFwIGhlcmUgaWYgdXNlciBkaXNhYmxlZCBXV1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogX3RoaXMyLl9fbWF0aGxpYi5yZXNpemVBbmRVbnNoYXJwKHRpbGVPcHRzLCBvcHRzLl9fbWF0aENhY2hlKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHcgPSBfdGhpczIuX193b3JrZXJzUG9vbC5hY3F1aXJlKCk7XG5cbiAgICAgIGlmIChvcHRzLmNhbmNlbFRva2VuKSBvcHRzLmNhbmNlbFRva2VuW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICB9KTtcblxuICAgICAgdy52YWx1ZS5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgdy5yZWxlYXNlKCk7XG4gICAgICAgIGlmIChldi5kYXRhLmVycikgcmVqZWN0KGV2LmRhdGEuZXJyKTtlbHNlIHJlc29sdmUoZXYuZGF0YSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgdHJhbnNmZXIgPSBbXTtcbiAgICAgIGlmICh0aWxlT3B0cy5zcmMpIHRyYW5zZmVyLnB1c2godGlsZU9wdHMuc3JjLmJ1ZmZlcik7XG4gICAgICBpZiAodGlsZU9wdHMuc3JjQml0bWFwKSB0cmFuc2Zlci5wdXNoKHRpbGVPcHRzLnNyY0JpdG1hcCk7XG4gICAgICB3LnZhbHVlLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgb3B0czogdGlsZU9wdHMsXG4gICAgICAgIGZlYXR1cmVzOiBfdGhpczIuX19yZXF1ZXN0ZWRfZmVhdHVyZXMsXG4gICAgICAgIHByZWxvYWQ6IHtcbiAgICAgICAgICB3YXNtX25vZHVsZTogX3RoaXMyLl9fbWF0aGxpYi5fX1xuICAgICAgICB9XG4gICAgICB9LCB0cmFuc2Zlcik7XG4gICAgfSk7XG4gIH0pO1xufTsgLy8gdGhpcyBmdW5jdGlvbiBjYW4gcmV0dXJuIHByb21pc2UgaWYgY3JlYXRlSW1hZ2VCaXRtYXAgaXMgdXNlZFxuXG5cblBpY2EucHJvdG90eXBlLl9fZXh0cmFjdFRpbGVEYXRhID0gZnVuY3Rpb24gKHRpbGUsIGZyb20sIG9wdHMsIHN0YWdlRW52LCBleHRyYWN0VG8pIHtcbiAgaWYgKHRoaXMuZmVhdHVyZXMud3cgJiYgQ0FOX1VTRV9PRkZTQ1JFRU5fQ0FOVkFTICYmICggLy8gY3JlYXRlSW1hZ2VCaXRtYXAgZG9lc24ndCB3b3JrIGZvciBpbWFnZXMgKEltYWdlLCBJbWFnZUJpdG1hcCkgd2l0aCBFeGlmIG9yaWVudGF0aW9uIGluIENocm9tZSxcbiAgLy8gY2FuIHVzZSBjYW52YXMgYmVjYXVzZSBjYW52YXMgZG9lc24ndCBoYXZlIG9yaWVudGF0aW9uO1xuICAvLyBzZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTIyMDY3MVxuICB1dGlscy5pc0NhbnZhcyhmcm9tKSB8fCBDQU5fVVNFX0NJQl9SRUdJT05fRk9SX0lNQUdFKSkge1xuICAgIHRoaXMuZGVidWcoJ0NyZWF0ZSB0aWxlIGZvciBPZmZzY3JlZW5DYW52YXMnKTtcbiAgICByZXR1cm4gY3JlYXRlSW1hZ2VCaXRtYXAoc3RhZ2VFbnYuc3JjSW1hZ2VCaXRtYXAgfHwgZnJvbSwgdGlsZS54LCB0aWxlLnksIHRpbGUud2lkdGgsIHRpbGUuaGVpZ2h0KS50aGVuKGZ1bmN0aW9uIChiaXRtYXApIHtcbiAgICAgIGV4dHJhY3RUby5zcmNCaXRtYXAgPSBiaXRtYXA7XG4gICAgICByZXR1cm4gZXh0cmFjdFRvO1xuICAgIH0pO1xuICB9IC8vIEV4dHJhY3QgdGlsZSBSR0JBIGJ1ZmZlciwgZGVwZW5kaW5nIG9uIGlucHV0IHR5cGVcblxuXG4gIGlmICh1dGlscy5pc0NhbnZhcyhmcm9tKSkge1xuICAgIGlmICghc3RhZ2VFbnYuc3JjQ3R4KSBzdGFnZUVudi5zcmNDdHggPSBmcm9tLmdldENvbnRleHQoJzJkJywge1xuICAgICAgYWxwaGE6IEJvb2xlYW4ob3B0cy5hbHBoYSlcbiAgICB9KTsgLy8gSWYgaW5wdXQgaXMgQ2FudmFzIC0gZXh0cmFjdCByZWdpb24gZGF0YSBkaXJlY3RseVxuXG4gICAgdGhpcy5kZWJ1ZygnR2V0IHRpbGUgcGl4ZWwgZGF0YScpO1xuICAgIGV4dHJhY3RUby5zcmMgPSBzdGFnZUVudi5zcmNDdHguZ2V0SW1hZ2VEYXRhKHRpbGUueCwgdGlsZS55LCB0aWxlLndpZHRoLCB0aWxlLmhlaWdodCkuZGF0YTtcbiAgICByZXR1cm4gZXh0cmFjdFRvO1xuICB9IC8vIElmIGlucHV0IGlzIEltYWdlIG9yIGRlY29kZWQgdG8gSW1hZ2VCaXRtYXAsXG4gIC8vIGRyYXcgcmVnaW9uIHRvIHRlbXBvcmFyeSBjYW52YXMgYW5kIGV4dHJhY3QgZGF0YSBmcm9tIGl0XG4gIC8vXG4gIC8vIE5vdGUhIEF0dGVtcHQgdG8gcmV1c2UgdGhpcyBjYW52YXMgY2F1c2VzIHNpZ25pZmljYW50IHNsb3dkb3duIGluIGNocm9tZVxuICAvL1xuXG5cbiAgdGhpcy5kZWJ1ZygnRHJhdyB0aWxlIGltYWdlQml0bWFwL2ltYWdlIHRvIHRlbXBvcmFyeSBjYW52YXMnKTtcbiAgdmFyIHRtcENhbnZhcyA9IHRoaXMub3B0aW9ucy5jcmVhdGVDYW52YXModGlsZS53aWR0aCwgdGlsZS5oZWlnaHQpO1xuICB2YXIgdG1wQ3R4ID0gdG1wQ2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgIGFscGhhOiBCb29sZWFuKG9wdHMuYWxwaGEpXG4gIH0pO1xuICB0bXBDdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2NvcHknO1xuICB0bXBDdHguZHJhd0ltYWdlKHN0YWdlRW52LnNyY0ltYWdlQml0bWFwIHx8IGZyb20sIHRpbGUueCwgdGlsZS55LCB0aWxlLndpZHRoLCB0aWxlLmhlaWdodCwgMCwgMCwgdGlsZS53aWR0aCwgdGlsZS5oZWlnaHQpO1xuICB0aGlzLmRlYnVnKCdHZXQgdGlsZSBwaXhlbCBkYXRhJyk7XG4gIGV4dHJhY3RUby5zcmMgPSB0bXBDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHRpbGUud2lkdGgsIHRpbGUuaGVpZ2h0KS5kYXRhOyAvLyBTYWZhcmkgMTIgd29ya2Fyb3VuZFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWNhL3BpY2EvaXNzdWVzLzE5OVxuXG4gIHRtcENhbnZhcy53aWR0aCA9IHRtcENhbnZhcy5oZWlnaHQgPSAwO1xuICByZXR1cm4gZXh0cmFjdFRvO1xufTtcblxuUGljYS5wcm90b3R5cGUuX19sYW5kVGlsZURhdGEgPSBmdW5jdGlvbiAodGlsZSwgcmVzdWx0LCBzdGFnZUVudikge1xuICB2YXIgdG9JbWFnZURhdGE7XG4gIHRoaXMuZGVidWcoJ0NvbnZlcnQgcmF3IHJnYmEgdGlsZSByZXN1bHQgdG8gSW1hZ2VEYXRhJyk7XG5cbiAgaWYgKHJlc3VsdC5iaXRtYXApIHtcbiAgICBzdGFnZUVudi50b0N0eC5kcmF3SW1hZ2UocmVzdWx0LmJpdG1hcCwgdGlsZS50b1gsIHRpbGUudG9ZKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChDQU5fTkVXX0lNQUdFX0RBVEEpIHtcbiAgICAvLyB0aGlzIGJyYW5jaCBpcyBmb3IgbW9kZXJuIGJyb3dzZXJzXG4gICAgLy8gSWYgYG5ldyBJbWFnZURhdGEoKWAgJiBVaW50OENsYW1wZWRBcnJheSBzdXBvcnRlZFxuICAgIHRvSW1hZ2VEYXRhID0gbmV3IEltYWdlRGF0YShuZXcgVWludDhDbGFtcGVkQXJyYXkocmVzdWx0LmRhdGEpLCB0aWxlLnRvV2lkdGgsIHRpbGUudG9IZWlnaHQpO1xuICB9IGVsc2Uge1xuICAgIC8vIGZhbGxiYWNrIGZvciBgbm9kZS1jYW52YXNgIGFuZCBvbGQgYnJvd3NlcnNcbiAgICAvLyAoSUUxMSBoYXMgSW1hZ2VEYXRhIGJ1dCBkb2VzIG5vdCBzdXBwb3J0IGBuZXcgSW1hZ2VEYXRhKClgKVxuICAgIHRvSW1hZ2VEYXRhID0gc3RhZ2VFbnYudG9DdHguY3JlYXRlSW1hZ2VEYXRhKHRpbGUudG9XaWR0aCwgdGlsZS50b0hlaWdodCk7XG5cbiAgICBpZiAodG9JbWFnZURhdGEuZGF0YS5zZXQpIHtcbiAgICAgIHRvSW1hZ2VEYXRhLmRhdGEuc2V0KHJlc3VsdC5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSUU5IGRvbid0IGhhdmUgYC5zZXQoKWBcbiAgICAgIGZvciAodmFyIGkgPSB0b0ltYWdlRGF0YS5kYXRhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHRvSW1hZ2VEYXRhLmRhdGFbaV0gPSByZXN1bHQuZGF0YVtpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLmRlYnVnKCdEcmF3IHRpbGUnKTtcblxuICBpZiAoTkVFRF9TQUZBUklfRklYKSB7XG4gICAgLy8gU2FmYXJpIGRyYXdzIHRoaW4gd2hpdGUgc3RyaXBlcyBiZXR3ZWVuIHRpbGVzIHdpdGhvdXQgdGhpcyBmaXhcbiAgICBzdGFnZUVudi50b0N0eC5wdXRJbWFnZURhdGEodG9JbWFnZURhdGEsIHRpbGUudG9YLCB0aWxlLnRvWSwgdGlsZS50b0lubmVyWCAtIHRpbGUudG9YLCB0aWxlLnRvSW5uZXJZIC0gdGlsZS50b1ksIHRpbGUudG9Jbm5lcldpZHRoICsgMWUtNSwgdGlsZS50b0lubmVySGVpZ2h0ICsgMWUtNSk7XG4gIH0gZWxzZSB7XG4gICAgc3RhZ2VFbnYudG9DdHgucHV0SW1hZ2VEYXRhKHRvSW1hZ2VEYXRhLCB0aWxlLnRvWCwgdGlsZS50b1ksIHRpbGUudG9Jbm5lclggLSB0aWxlLnRvWCwgdGlsZS50b0lubmVyWSAtIHRpbGUudG9ZLCB0aWxlLnRvSW5uZXJXaWR0aCwgdGlsZS50b0lubmVySGVpZ2h0KTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuUGljYS5wcm90b3R5cGUuX190aWxlQW5kUmVzaXplID0gZnVuY3Rpb24gKGZyb20sIHRvLCBvcHRzKSB7XG4gIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gIHZhciBzdGFnZUVudiA9IHtcbiAgICBzcmNDdHg6IG51bGwsXG4gICAgc3JjSW1hZ2VCaXRtYXA6IG51bGwsXG4gICAgaXNJbWFnZUJpdG1hcFJldXNlZDogZmFsc2UsXG4gICAgdG9DdHg6IG51bGxcbiAgfTtcblxuICB2YXIgcHJvY2Vzc1RpbGUgPSBmdW5jdGlvbiBwcm9jZXNzVGlsZSh0aWxlKSB7XG4gICAgcmV0dXJuIF90aGlzMy5fX2xpbWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChvcHRzLmNhbmNlbGVkKSByZXR1cm4gb3B0cy5jYW5jZWxUb2tlbjtcbiAgICAgIHZhciB0aWxlT3B0cyA9IHtcbiAgICAgICAgd2lkdGg6IHRpbGUud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGlsZS5oZWlnaHQsXG4gICAgICAgIHRvV2lkdGg6IHRpbGUudG9XaWR0aCxcbiAgICAgICAgdG9IZWlnaHQ6IHRpbGUudG9IZWlnaHQsXG4gICAgICAgIHNjYWxlWDogdGlsZS5zY2FsZVgsXG4gICAgICAgIHNjYWxlWTogdGlsZS5zY2FsZVksXG4gICAgICAgIG9mZnNldFg6IHRpbGUub2Zmc2V0WCxcbiAgICAgICAgb2Zmc2V0WTogdGlsZS5vZmZzZXRZLFxuICAgICAgICBxdWFsaXR5OiBvcHRzLnF1YWxpdHksXG4gICAgICAgIGFscGhhOiBvcHRzLmFscGhhLFxuICAgICAgICB1bnNoYXJwQW1vdW50OiBvcHRzLnVuc2hhcnBBbW91bnQsXG4gICAgICAgIHVuc2hhcnBSYWRpdXM6IG9wdHMudW5zaGFycFJhZGl1cyxcbiAgICAgICAgdW5zaGFycFRocmVzaG9sZDogb3B0cy51bnNoYXJwVGhyZXNob2xkXG4gICAgICB9O1xuXG4gICAgICBfdGhpczMuZGVidWcoJ0ludm9rZSByZXNpemUgbWF0aCcpO1xuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRpbGVPcHRzKS50aGVuKGZ1bmN0aW9uICh0aWxlT3B0cykge1xuICAgICAgICByZXR1cm4gX3RoaXMzLl9fZXh0cmFjdFRpbGVEYXRhKHRpbGUsIGZyb20sIG9wdHMsIHN0YWdlRW52LCB0aWxlT3B0cyk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh0aWxlT3B0cykge1xuICAgICAgICBfdGhpczMuZGVidWcoJ0ludm9rZSByZXNpemUgbWF0aCcpO1xuXG4gICAgICAgIHJldHVybiBfdGhpczMuX19pbnZva2VSZXNpemUodGlsZU9wdHMsIG9wdHMpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmIChvcHRzLmNhbmNlbGVkKSByZXR1cm4gb3B0cy5jYW5jZWxUb2tlbjtcbiAgICAgICAgc3RhZ2VFbnYuc3JjSW1hZ2VEYXRhID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzMy5fX2xhbmRUaWxlRGF0YSh0aWxlLCByZXN1bHQsIHN0YWdlRW52KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9OyAvLyBOZWVkIHRvIG5vcm1hbGl6ZSBkYXRhIHNvdXJjZSBmaXJzdC4gSXQgY2FuIGJlIGNhbnZhcyBvciBpbWFnZS5cbiAgLy8gSWYgaW1hZ2UgLSB0cnkgdG8gZGVjb2RlIGluIGJhY2tncm91bmQgaWYgcG9zc2libGVcblxuXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICBzdGFnZUVudi50b0N0eCA9IHRvLmdldENvbnRleHQoJzJkJywge1xuICAgICAgYWxwaGE6IEJvb2xlYW4ob3B0cy5hbHBoYSlcbiAgICB9KTtcbiAgICBpZiAodXRpbHMuaXNDYW52YXMoZnJvbSkpIHJldHVybiBudWxsO1xuXG4gICAgaWYgKHV0aWxzLmlzSW1hZ2VCaXRtYXAoZnJvbSkpIHtcbiAgICAgIHN0YWdlRW52LnNyY0ltYWdlQml0bWFwID0gZnJvbTtcbiAgICAgIHN0YWdlRW52LmlzSW1hZ2VCaXRtYXBSZXVzZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzSW1hZ2UoZnJvbSkpIHtcbiAgICAgIC8vIHRyeSBkbyBkZWNvZGUgaW1hZ2UgaW4gYmFja2dyb3VuZCBmb3IgZmFzdGVyIG5leHQgb3BlcmF0aW9ucztcbiAgICAgIC8vIGlmIHdlJ3JlIHVzaW5nIG9mZnNjcmVlbiBjYW52YXMsIGNpYiBpcyBjYWxsZWQgcGVyIHRpbGUsIHNvIG5vdCBuZWVkZWQgaGVyZVxuICAgICAgaWYgKCFDQU5fQ1JFQVRFX0lNQUdFX0JJVE1BUCkgcmV0dXJuIG51bGw7XG5cbiAgICAgIF90aGlzMy5kZWJ1ZygnRGVjb2RlIGltYWdlIHZpYSBjcmVhdGVJbWFnZUJpdG1hcCcpO1xuXG4gICAgICByZXR1cm4gY3JlYXRlSW1hZ2VCaXRtYXAoZnJvbSkudGhlbihmdW5jdGlvbiAoaW1hZ2VCaXRtYXApIHtcbiAgICAgICAgc3RhZ2VFbnYuc3JjSW1hZ2VCaXRtYXAgPSBpbWFnZUJpdG1hcDtcbiAgICAgIH0pIC8vIFN1cHByZXNzIGVycm9yIHRvIHVzZSBmYWxsYmFjaywgaWYgbWV0aG9kIGZhaWxzXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWNhL3BpY2EvaXNzdWVzLzE5MFxuXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgICAgW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1BpY2E6IFwiLmZyb21cIiBzaG91bGQgYmUgSW1hZ2UsIENhbnZhcyBvciBJbWFnZUJpdG1hcCcpO1xuICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob3B0cy5jYW5jZWxlZCkgcmV0dXJuIG9wdHMuY2FuY2VsVG9rZW47XG5cbiAgICBfdGhpczMuZGVidWcoJ0NhbGN1bGF0ZSB0aWxlcycpOyAvL1xuICAgIC8vIEhlcmUgd2UgYXJlIHdpdGggXCJub3JtYWxpemVkXCIgc291cmNlLFxuICAgIC8vIGZvbGxvdyB0byB0aWxpbmdcbiAgICAvL1xuXG5cbiAgICB2YXIgcmVnaW9ucyA9IGNyZWF0ZVJlZ2lvbnMoe1xuICAgICAgd2lkdGg6IG9wdHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IG9wdHMuaGVpZ2h0LFxuICAgICAgc3JjVGlsZVNpemU6IF90aGlzMy5vcHRpb25zLnRpbGUsXG4gICAgICB0b1dpZHRoOiBvcHRzLnRvV2lkdGgsXG4gICAgICB0b0hlaWdodDogb3B0cy50b0hlaWdodCxcbiAgICAgIGRlc3RUaWxlQm9yZGVyOiBvcHRzLl9fZGVzdFRpbGVCb3JkZXJcbiAgICB9KTtcbiAgICB2YXIgam9icyA9IHJlZ2lvbnMubWFwKGZ1bmN0aW9uICh0aWxlKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzc1RpbGUodGlsZSk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwKHN0YWdlRW52KSB7XG4gICAgICBpZiAoc3RhZ2VFbnYuc3JjSW1hZ2VCaXRtYXApIHtcbiAgICAgICAgaWYgKCFzdGFnZUVudi5pc0ltYWdlQml0bWFwUmV1c2VkKSBzdGFnZUVudi5zcmNJbWFnZUJpdG1hcC5jbG9zZSgpO1xuICAgICAgICBzdGFnZUVudi5zcmNJbWFnZUJpdG1hcCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3RoaXMzLmRlYnVnKCdQcm9jZXNzIHRpbGVzJyk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoam9icykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMuZGVidWcoJ0ZpbmlzaGVkIScpO1xuXG4gICAgICBjbGVhbnVwKHN0YWdlRW52KTtcbiAgICAgIHJldHVybiB0bztcbiAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBjbGVhbnVwKHN0YWdlRW52KTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5QaWNhLnByb3RvdHlwZS5fX3Byb2Nlc3NTdGFnZXMgPSBmdW5jdGlvbiAoc3RhZ2VzLCBmcm9tLCB0bywgb3B0cykge1xuICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICBpZiAob3B0cy5jYW5jZWxlZCkgcmV0dXJuIG9wdHMuY2FuY2VsVG9rZW47XG5cbiAgdmFyIF9zdGFnZXMkc2hpZnQgPSBzdGFnZXMuc2hpZnQoKSxcbiAgICAgIF9zdGFnZXMkc2hpZnQyID0gX3NsaWNlZFRvQXJyYXkoX3N0YWdlcyRzaGlmdCwgMiksXG4gICAgICB0b1dpZHRoID0gX3N0YWdlcyRzaGlmdDJbMF0sXG4gICAgICB0b0hlaWdodCA9IF9zdGFnZXMkc2hpZnQyWzFdO1xuXG4gIHZhciBpc0xhc3RTdGFnZSA9IHN0YWdlcy5sZW5ndGggPT09IDA7XG4gIG9wdHMgPSBhc3NpZ24oe30sIG9wdHMsIHtcbiAgICB0b1dpZHRoOiB0b1dpZHRoLFxuICAgIHRvSGVpZ2h0OiB0b0hlaWdodCxcbiAgICAvLyBvbmx5IHVzZSB1c2VyLWRlZmluZWQgcXVhbGl0eSBmb3IgdGhlIGxhc3Qgc3RhZ2UsXG4gICAgLy8gdXNlIHNpbXBsZXIgKEhhbW1pbmcpIGZpbHRlciBmb3IgdGhlIGZpcnN0IHN0YWdlcyB3aGVyZVxuICAgIC8vIHNjYWxlIGZhY3RvciBpcyBsYXJnZSBlbm91Z2ggKG1vcmUgdGhhbiAyLTMpXG4gICAgcXVhbGl0eTogaXNMYXN0U3RhZ2UgPyBvcHRzLnF1YWxpdHkgOiBNYXRoLm1pbigxLCBvcHRzLnF1YWxpdHkpXG4gIH0pO1xuICB2YXIgdG1wQ2FudmFzO1xuXG4gIGlmICghaXNMYXN0U3RhZ2UpIHtcbiAgICAvLyBjcmVhdGUgdGVtcG9yYXJ5IGNhbnZhc1xuICAgIHRtcENhbnZhcyA9IHRoaXMub3B0aW9ucy5jcmVhdGVDYW52YXModG9XaWR0aCwgdG9IZWlnaHQpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuX190aWxlQW5kUmVzaXplKGZyb20sIGlzTGFzdFN0YWdlID8gdG8gOiB0bXBDYW52YXMsIG9wdHMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc0xhc3RTdGFnZSkgcmV0dXJuIHRvO1xuICAgIG9wdHMud2lkdGggPSB0b1dpZHRoO1xuICAgIG9wdHMuaGVpZ2h0ID0gdG9IZWlnaHQ7XG4gICAgcmV0dXJuIF90aGlzNC5fX3Byb2Nlc3NTdGFnZXMoc3RhZ2VzLCB0bXBDYW52YXMsIHRvLCBvcHRzKTtcbiAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgaWYgKHRtcENhbnZhcykge1xuICAgICAgLy8gU2FmYXJpIDEyIHdvcmthcm91bmRcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlY2EvcGljYS9pc3N1ZXMvMTk5XG4gICAgICB0bXBDYW52YXMud2lkdGggPSB0bXBDYW52YXMuaGVpZ2h0ID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9KTtcbn07XG5cblBpY2EucHJvdG90eXBlLl9fcmVzaXplVmlhQ3JlYXRlSW1hZ2VCaXRtYXAgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIG9wdHMpIHtcbiAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgdmFyIHRvQ3R4ID0gdG8uZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgYWxwaGE6IEJvb2xlYW4ob3B0cy5hbHBoYSlcbiAgfSk7XG4gIHRoaXMuZGVidWcoJ1Jlc2l6ZSB2aWEgY3JlYXRlSW1hZ2VCaXRtYXAoKScpO1xuICByZXR1cm4gY3JlYXRlSW1hZ2VCaXRtYXAoZnJvbSwge1xuICAgIHJlc2l6ZVdpZHRoOiBvcHRzLnRvV2lkdGgsXG4gICAgcmVzaXplSGVpZ2h0OiBvcHRzLnRvSGVpZ2h0LFxuICAgIHJlc2l6ZVF1YWxpdHk6IHV0aWxzLmNpYl9xdWFsaXR5X25hbWUob3B0cy5xdWFsaXR5KVxuICB9KS50aGVuKGZ1bmN0aW9uIChpbWFnZUJpdG1hcCkge1xuICAgIGlmIChvcHRzLmNhbmNlbGVkKSByZXR1cm4gb3B0cy5jYW5jZWxUb2tlbjsgLy8gaWYgbm8gdW5zaGFycCAtIGRyYXcgZGlyZWN0bHkgdG8gb3V0cHV0IGNhbnZhc1xuXG4gICAgaWYgKCFvcHRzLnVuc2hhcnBBbW91bnQpIHtcbiAgICAgIHRvQ3R4LmRyYXdJbWFnZShpbWFnZUJpdG1hcCwgMCwgMCk7XG4gICAgICBpbWFnZUJpdG1hcC5jbG9zZSgpO1xuICAgICAgdG9DdHggPSBudWxsO1xuXG4gICAgICBfdGhpczUuZGVidWcoJ0ZpbmlzaGVkIScpO1xuXG4gICAgICByZXR1cm4gdG87XG4gICAgfVxuXG4gICAgX3RoaXM1LmRlYnVnKCdVbnNoYXJwIHJlc3VsdCcpO1xuXG4gICAgdmFyIHRtcENhbnZhcyA9IF90aGlzNS5vcHRpb25zLmNyZWF0ZUNhbnZhcyhvcHRzLnRvV2lkdGgsIG9wdHMudG9IZWlnaHQpO1xuXG4gICAgdmFyIHRtcEN0eCA9IHRtcENhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHtcbiAgICAgIGFscGhhOiBCb29sZWFuKG9wdHMuYWxwaGEpXG4gICAgfSk7XG4gICAgdG1wQ3R4LmRyYXdJbWFnZShpbWFnZUJpdG1hcCwgMCwgMCk7XG4gICAgaW1hZ2VCaXRtYXAuY2xvc2UoKTtcbiAgICB2YXIgaURhdGEgPSB0bXBDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIG9wdHMudG9XaWR0aCwgb3B0cy50b0hlaWdodCk7XG5cbiAgICBfdGhpczUuX19tYXRobGliLnVuc2hhcnBfbWFzayhpRGF0YS5kYXRhLCBvcHRzLnRvV2lkdGgsIG9wdHMudG9IZWlnaHQsIG9wdHMudW5zaGFycEFtb3VudCwgb3B0cy51bnNoYXJwUmFkaXVzLCBvcHRzLnVuc2hhcnBUaHJlc2hvbGQpO1xuXG4gICAgdG9DdHgucHV0SW1hZ2VEYXRhKGlEYXRhLCAwLCAwKTsgLy8gU2FmYXJpIDEyIHdvcmthcm91bmRcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWNhL3BpY2EvaXNzdWVzLzE5OVxuXG4gICAgdG1wQ2FudmFzLndpZHRoID0gdG1wQ2FudmFzLmhlaWdodCA9IDA7XG4gICAgaURhdGEgPSB0bXBDdHggPSB0bXBDYW52YXMgPSB0b0N0eCA9IG51bGw7XG5cbiAgICBfdGhpczUuZGVidWcoJ0ZpbmlzaGVkIScpO1xuXG4gICAgcmV0dXJuIHRvO1xuICB9KTtcbn07XG5cblBpY2EucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uIChmcm9tLCB0bywgb3B0aW9ucykge1xuICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICB0aGlzLmRlYnVnKCdTdGFydCByZXNpemUuLi4nKTtcbiAgdmFyIG9wdHMgPSBhc3NpZ24oe30sIERFRkFVTFRfUkVTSVpFX09QVFMpO1xuXG4gIGlmICghaXNOYU4ob3B0aW9ucykpIHtcbiAgICBvcHRzID0gYXNzaWduKG9wdHMsIHtcbiAgICAgIHF1YWxpdHk6IG9wdGlvbnNcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChvcHRpb25zKSB7XG4gICAgb3B0cyA9IGFzc2lnbihvcHRzLCBvcHRpb25zKTtcbiAgfVxuXG4gIG9wdHMudG9XaWR0aCA9IHRvLndpZHRoO1xuICBvcHRzLnRvSGVpZ2h0ID0gdG8uaGVpZ2h0O1xuICBvcHRzLndpZHRoID0gZnJvbS5uYXR1cmFsV2lkdGggfHwgZnJvbS53aWR0aDtcbiAgb3B0cy5oZWlnaHQgPSBmcm9tLm5hdHVyYWxIZWlnaHQgfHwgZnJvbS5oZWlnaHQ7IC8vIFByZXZlbnQgc3RlcHBlciBmcm9tIGluZmluaXRlIGxvb3BcblxuICBpZiAodG8ud2lkdGggPT09IDAgfHwgdG8uaGVpZ2h0ID09PSAwKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3V0cHV0IHNpemU6IFwiLmNvbmNhdCh0by53aWR0aCwgXCJ4XCIpLmNvbmNhdCh0by5oZWlnaHQpKSk7XG4gIH1cblxuICBpZiAob3B0cy51bnNoYXJwUmFkaXVzID4gMikgb3B0cy51bnNoYXJwUmFkaXVzID0gMjtcbiAgb3B0cy5jYW5jZWxlZCA9IGZhbHNlO1xuXG4gIGlmIChvcHRzLmNhbmNlbFRva2VuKSB7XG4gICAgLy8gV3JhcCBjYW5jZWxUb2tlbiB0byBhdm9pZCBzdWNjZXNzaXZlIHJlc29sdmUgJiBzZXQgZmxhZ1xuICAgIG9wdHMuY2FuY2VsVG9rZW4gPSBvcHRzLmNhbmNlbFRva2VuLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIG9wdHMuY2FuY2VsZWQgPSB0cnVlO1xuICAgICAgdGhyb3cgZGF0YTtcbiAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBvcHRzLmNhbmNlbGVkID0gdHJ1ZTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBERVNUX1RJTEVfQk9SREVSID0gMzsgLy8gTWF4IHBvc3NpYmxlIGZpbHRlciB3aW5kb3cgc2l6ZVxuXG4gIG9wdHMuX19kZXN0VGlsZUJvcmRlciA9IE1hdGguY2VpbChNYXRoLm1heChERVNUX1RJTEVfQk9SREVSLCAyLjUgKiBvcHRzLnVuc2hhcnBSYWRpdXMgfCAwKSk7XG4gIHJldHVybiB0aGlzLmluaXQoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob3B0cy5jYW5jZWxlZCkgcmV0dXJuIG9wdHMuY2FuY2VsVG9rZW47IC8vIGlmIGNyZWF0ZUltYWdlQml0bWFwIHN1cHBvcnRzIHJlc2l6ZSwganVzdCBkbyBpdCBhbmQgcmV0dXJuXG5cbiAgICBpZiAoX3RoaXM2LmZlYXR1cmVzLmNpYikge1xuICAgICAgcmV0dXJuIF90aGlzNi5fX3Jlc2l6ZVZpYUNyZWF0ZUltYWdlQml0bWFwKGZyb20sIHRvLCBvcHRzKTtcbiAgICB9XG5cbiAgICBpZiAoIUNBTl9VU0VfQ0FOVkFTX0dFVF9JTUFHRV9EQVRBKSB7XG4gICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdQaWNhOiBjYW5ub3QgdXNlIGdldEltYWdlRGF0YSBvbiBjYW52YXMsICcgKyBcIm1ha2Ugc3VyZSBmaW5nZXJwcmludGluZyBwcm90ZWN0aW9uIGlzbid0IGVuYWJsZWRcIik7XG4gICAgICBlcnIuY29kZSA9ICdFUlJfR0VUX0lNQUdFX0RBVEEnO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0gLy9cbiAgICAvLyBObyBlYXN5IHdheSwgbGV0J3MgcmVzaXplIG1hbnVhbGx5IHZpYSBhcnJheXNcbiAgICAvL1xuXG5cbiAgICB2YXIgc3RhZ2VzID0gY3JlYXRlU3RhZ2VzKG9wdHMud2lkdGgsIG9wdHMuaGVpZ2h0LCBvcHRzLnRvV2lkdGgsIG9wdHMudG9IZWlnaHQsIF90aGlzNi5vcHRpb25zLnRpbGUsIG9wdHMuX19kZXN0VGlsZUJvcmRlcik7XG4gICAgcmV0dXJuIF90aGlzNi5fX3Byb2Nlc3NTdGFnZXMoc3RhZ2VzLCBmcm9tLCB0bywgb3B0cyk7XG4gIH0pO1xufTsgLy8gUkdCQSBidWZmZXIgcmVzaXplXG4vL1xuXG5cblBpY2EucHJvdG90eXBlLnJlc2l6ZUJ1ZmZlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gIHZhciBvcHRzID0gYXNzaWduKHt9LCBERUZBVUxUX1JFU0laRV9PUFRTLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpczcuX19tYXRobGliLnJlc2l6ZUFuZFVuc2hhcnAob3B0cyk7XG4gIH0pO1xufTtcblxuUGljYS5wcm90b3R5cGUudG9CbG9iID0gZnVuY3Rpb24gKGNhbnZhcywgbWltZVR5cGUsIHF1YWxpdHkpIHtcbiAgbWltZVR5cGUgPSBtaW1lVHlwZSB8fCAnaW1hZ2UvcG5nJztcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgaWYgKGNhbnZhcy50b0Jsb2IpIHtcbiAgICAgIGNhbnZhcy50b0Jsb2IoZnVuY3Rpb24gKGJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoYmxvYik7XG4gICAgICB9LCBtaW1lVHlwZSwgcXVhbGl0eSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNhbnZhcy5jb252ZXJ0VG9CbG9iKSB7XG4gICAgICByZXNvbHZlKGNhbnZhcy5jb252ZXJ0VG9CbG9iKHtcbiAgICAgICAgdHlwZTogbWltZVR5cGUsXG4gICAgICAgIHF1YWxpdHk6IHF1YWxpdHlcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnNcblxuXG4gICAgdmFyIGFzU3RyaW5nID0gYXRvYihjYW52YXMudG9EYXRhVVJMKG1pbWVUeXBlLCBxdWFsaXR5KS5zcGxpdCgnLCcpWzFdKTtcbiAgICB2YXIgbGVuID0gYXNTdHJpbmcubGVuZ3RoO1xuICAgIHZhciBhc0J1ZmZlciA9IG5ldyBVaW50OEFycmF5KGxlbik7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhc0J1ZmZlcltpXSA9IGFzU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuXG4gICAgcmVzb2x2ZShuZXcgQmxvYihbYXNCdWZmZXJdLCB7XG4gICAgICB0eXBlOiBtaW1lVHlwZVxuICAgIH0pKTtcbiAgfSk7XG59O1xuXG5QaWNhLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBpY2E7XG5cbn0se1wiLi9saWIvbWF0aGxpYlwiOjEsXCIuL2xpYi9wb29sXCI6MTMsXCIuL2xpYi9zdGVwcGVyXCI6MTQsXCIuL2xpYi90aWxlclwiOjE1LFwiLi9saWIvdXRpbHNcIjoxNixcIi4vbGliL3dvcmtlclwiOjE3LFwib2JqZWN0LWFzc2lnblwiOjIzLFwid2Vid29ya2lmeVwiOjI0fV19LHt9LFtdKShcIi9pbmRl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LEVBQUUsQ0FBQyxDQUFDO0FBQ3pDOztBQUVBLFVBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDL0MsVUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUMvQyxVQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1VBQ3ZDLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDM0MsVUFBUSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDeEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFFBQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFBO0FBQ3ZEO1NBQ08sQ0FBQTtBQUNQLFFBQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFBO0FBQ3ZEO1NBQ08sQ0FBQTtBQUNQLFFBQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFBO0FBQ3ZEO1NBQ08sQ0FBQTtBQUNQLFFBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUE7QUFDbkQ7U0FDTyxDQUFBO1FBQ0QsVUFBVSxHQUFHLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUM1QyxPQUFBOztNQUVJLFVBQVUsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtNQUMvQixTQUFTLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ3pDLEtBQUE7R0FDQztBQUNEO0FBQ0E7OztBQUdBLEVBQUEsU0FBUyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtBQUNuRSxJQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQ2hCLElBQUUsSUFBSSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQTtBQUN4QyxJQUFFLElBQUksTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFBO0lBQ2xDLElBQUksU0FBUyxHQUFHLENBQUM7UUFDYixVQUFVLEdBQUcsQ0FBQyxDQUFDOztJQUVuQixLQUFLLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtNQUNsQyxTQUFTLEdBQUcsQ0FBQyxDQUFDOztNQUVkLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO0FBQzVDO0FBQ0EsUUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUE7QUFDeEMsUUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUE7UUFDakMsTUFBTSxHQUFHLFNBQVMsR0FBRyxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN4QyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUV4QixRQUFNLE9BQU8sVUFBVSxHQUFHLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRTtBQUMzQyxVQUFRLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUN6Qzs7QUFFQSxVQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQy9DLFVBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDL0MsVUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtVQUN2QyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQzNDLFVBQVEsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3hCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxRQUFNLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBQTtBQUN2RDtTQUNPLENBQUE7QUFDUCxRQUFNLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBQTtBQUN2RDtTQUNPLENBQUE7QUFDUCxRQUFNLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBQTtBQUN2RDtTQUNPLENBQUE7QUFDUCxRQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxF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LElBQUksRUFBRSxDQUFDLENBQUM7QUFDaEQ7QUFDQTs7UUFFTSxFQUFFLEdBQUcsRUFBRSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBQzlCLEVBQUUsR0FBRyxFQUFFLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDckM7O1FBRU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM3QjtBQUNBOztRQUVNLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFNLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ3JCLFFBQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQzs7QUFFdkQsUUFBTSxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7O0FBRS9ELFFBQU0sR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO0FBQy9ELE9BQUE7QUFDQSxLQUFBO0dBQ0MsQ0FBQTs7QUFFRCxHQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDOztBQUcxRCxFQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7SUFDL0Us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QUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDdEY7O0FBRUEsSUFBRSxJQUFJLFVBQVUsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFDakQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFBOztBQUVqQixJQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDdkMsTUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUE7QUFDeEgsTUFBSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUE7TUFDdkgsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO0FBQ2hDLEtBQUE7O0FBRUEsSUFBRSxPQUFPLE1BQU0sQ0FBQTtHQUNkLENBQUE7O0FBRUQsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFNMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUEsSUFB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LGNBQWMsR0FBRztBQUMzQztBQUNBLElBQUUsSUFBSSxPQUFPLEVBQUUsS0FBSyxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUE7O0lBRXhDLEVBQUUsR0FBRyxLQUFLLENBQUE7O0FBRVosSUFBRSxJQUFJLE9BQU8sV0FBVyxLQUFLLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQTs7QUFFbkQ7QUFDQSxJQUFFLElBQUk7QUFDTjtBQUNBOztBQUVBO01BQ0ksSUFBSSxHQUFHLFFBQVEsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtNQUN2SyxJQUFJLE1BQU0sS0FBSyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7TUFDMUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMs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QyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLFdBQVcsSUFBSSwwQ0FBMEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBQTs7QUFFOVosRUFBQSxTQUFTLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUE7O0FBRXJMLEVBQUEsU0FBUyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBQTs7QUFFL2YsRUFBQSxTQUFTLGVBQWUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBQTs7QUFFbkUsRUFBQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUE7O0FBRXJDLEVBQUEsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBOztBQUV0QyxFQUFBLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQTs7QUFFdEMsRUFBQSxJQUFJLElBQUksR0FBRyxP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
