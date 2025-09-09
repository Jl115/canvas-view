'use strict';

var main = require('./main-8c6d7706.js');
var index = require('./index-d3f4d11e.js');
var linear = require('./linear-2bc49a18.js');
var init = require('./init-8ddd39ad.js');
require('obsidian');
require('@/components/modals');
require('@/views/view');

function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  }
  return max;
}

function min(values, valueof) {
  let min;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  }
  return min;
}

function identity(x) {
  return x;
}

var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + x + ",0)";
}

function translateY(y) {
  return "translate(0," + y + ")";
}

function number$1(scale) {
  return d => +scale(d);
}

function center(scale, offset) {
  offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
  if (scale.round()) offset = Math.round(offset);
  return d => +scale(d) + offset;
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + offset,
        range1 = +range[range.length - 1] + offset,
        position = (scale.bandwidth ? center : number$1)(scale.copy(), offset),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "currentColor"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "currentColor")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "currentColor")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform((p && isFinite(p = p(d)) ? p : position(d)) + offset); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient === right
            ? (tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1)
            : (tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1));

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d) + offset); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = Array.from(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  axis.offset = function(_) {
    return arguments.length ? (offset = +_, axis) : offset;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

const radians = Math.PI / 180;
const degrees = 180 / Math.PI;

// https://observablehq.com/@mbostock/lab-and-rgb
const K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0$1 = 4 / 29,
    t1$1 = 6 / 29,
    t2 = 3 * t1$1 * t1$1,
    t3 = t1$1 * t1$1 * t1$1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) return hcl2lab(o);
  if (!(o instanceof index.Rgb)) o = index.rgbConvert(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

index.define(Lab, lab, index.extend(index.Color$1, {
  brighter(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new index.Rgb(
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0$1;
}

function lab2xyz(t) {
  return t > t1$1 ? t * t * t : t2 * (t - t0$1);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * degrees;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function hcl$1(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

function hcl2lab(o) {
  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * radians;
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}

index.define(Hcl, hcl$1, index.extend(index.Color$1, {
  brighter(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb() {
    return hcl2lab(this).rgb();
  }
}));

function hcl(hue) {
  return function(start, end) {
    var h = hue((start = hcl$1(start)).h, (end = hcl$1(end)).h),
        c = index.nogamma(start.c, end.c),
        l = index.nogamma(start.l, end.l),
        opacity = index.nogamma(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

var interpolateHcl = hcl(index.hue);

function nice(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}

const t0 = new Date, t1 = new Date;

function timeInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
  }

  interval.floor = (date) => {
    return floori(date = new Date(+date)), date;
  };

  interval.ceil = (date) => {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = (date) => {
    const d0 = interval(date), d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = (date, step) => {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = (start, stop, step) => {
    const range = [];
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    let previous;
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = (test) => {
    return timeInterval((date) => {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, (date, step) => {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = (start, end) => {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = (step) => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? (d) => field(d) % step === 0
              : (d) => interval.count(0, d) % step === 0);
    };
  }

  return interval;
}

const millisecond = timeInterval(() => {
  // noop
}, (date, step) => {
  date.setTime(+date + step);
}, (start, end) => {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = (k) => {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return timeInterval((date) => {
    date.setTime(Math.floor(date / k) * k);
  }, (date, step) => {
    date.setTime(+date + step * k);
  }, (start, end) => {
    return (end - start) / k;
  });
};

millisecond.range;

const durationSecond = 1000;
const durationMinute = durationSecond * 60;
const durationHour = durationMinute * 60;
const durationDay = durationHour * 24;
const durationWeek = durationDay * 7;
const durationMonth = durationDay * 30;
const durationYear = durationDay * 365;

const second = timeInterval((date) => {
  date.setTime(date - date.getMilliseconds());
}, (date, step) => {
  date.setTime(+date + step * durationSecond);
}, (start, end) => {
  return (end - start) / durationSecond;
}, (date) => {
  return date.getUTCSeconds();
});

second.range;

const timeMinute = timeInterval((date) => {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
}, (date, step) => {
  date.setTime(+date + step * durationMinute);
}, (start, end) => {
  return (end - start) / durationMinute;
}, (date) => {
  return date.getMinutes();
});

timeMinute.range;

const utcMinute = timeInterval((date) => {
  date.setUTCSeconds(0, 0);
}, (date, step) => {
  date.setTime(+date + step * durationMinute);
}, (start, end) => {
  return (end - start) / durationMinute;
}, (date) => {
  return date.getUTCMinutes();
});

utcMinute.range;

const timeHour = timeInterval((date) => {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
}, (date, step) => {
  date.setTime(+date + step * durationHour);
}, (start, end) => {
  return (end - start) / durationHour;
}, (date) => {
  return date.getHours();
});

timeHour.range;

const utcHour = timeInterval((date) => {
  date.setUTCMinutes(0, 0, 0);
}, (date, step) => {
  date.setTime(+date + step * durationHour);
}, (start, end) => {
  return (end - start) / durationHour;
}, (date) => {
  return date.getUTCHours();
});

utcHour.range;

const timeDay = timeInterval(
  date => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
  date => date.getDate() - 1
);

timeDay.range;

const utcDay = timeInterval((date) => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date) => {
  return date.getUTCDate() - 1;
});

utcDay.range;

const unixDay = timeInterval((date) => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date) => {
  return Math.floor(date / durationDay);
});

unixDay.range;

function timeWeekday(i) {
  return timeInterval((date) => {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setDate(date.getDate() + step * 7);
  }, (start, end) => {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}

const timeSunday = timeWeekday(0);
const timeMonday = timeWeekday(1);
const timeTuesday = timeWeekday(2);
const timeWednesday = timeWeekday(3);
const timeThursday = timeWeekday(4);
const timeFriday = timeWeekday(5);
const timeSaturday = timeWeekday(6);

timeSunday.range;
timeMonday.range;
timeTuesday.range;
timeWednesday.range;
timeThursday.range;
timeFriday.range;
timeSaturday.range;

function utcWeekday(i) {
  return timeInterval((date) => {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, (start, end) => {
    return (end - start) / durationWeek;
  });
}

const utcSunday = utcWeekday(0);
const utcMonday = utcWeekday(1);
const utcTuesday = utcWeekday(2);
const utcWednesday = utcWeekday(3);
const utcThursday = utcWeekday(4);
const utcFriday = utcWeekday(5);
const utcSaturday = utcWeekday(6);

utcSunday.range;
utcMonday.range;
utcTuesday.range;
utcWednesday.range;
utcThursday.range;
utcFriday.range;
utcSaturday.range;

const timeMonth = timeInterval((date) => {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, (date, step) => {
  date.setMonth(date.getMonth() + step);
}, (start, end) => {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, (date) => {
  return date.getMonth();
});

timeMonth.range;

const utcMonth = timeInterval((date) => {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCMonth(date.getUTCMonth() + step);
}, (start, end) => {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, (date) => {
  return date.getUTCMonth();
});

utcMonth.range;

const timeYear = timeInterval((date) => {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, (date, step) => {
  date.setFullYear(date.getFullYear() + step);
}, (start, end) => {
  return end.getFullYear() - start.getFullYear();
}, (date) => {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
timeYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval((date) => {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

timeYear.range;

const utcYear = timeInterval((date) => {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, (start, end) => {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, (date) => {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval((date) => {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

utcYear.range;

function ticker(year, month, week, day, hour, minute) {

  const tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function ticks(start, stop, count) {
    const reverse = stop < start;
    if (reverse) [start, stop] = [stop, start];
    const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
    const ticks = interval ? interval.range(start, +stop + 1) : []; // inclusive stop
    return reverse ? ticks.reverse() : ticks;
  }

  function tickInterval(start, stop, count) {
    const target = Math.abs(stop - start) / count;
    const i = linear.bisector(([,, step]) => step).right(tickIntervals, target);
    if (i === tickIntervals.length) return year.every(linear.tickStep(start / durationYear, stop / durationYear, count));
    if (i === 0) return millisecond.every(Math.max(linear.tickStep(start, stop, count), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }

  return [ticks, tickInterval];
}
const [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);

function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newDate(y, m, d) {
  return {y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, undefined, 1),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

      // If this is utcParse, never use the local timezone.
      if (Z && !("Z" in d)) d.Z = 0;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // If the month was not specified, inherit from the quarter.
      if (d.m === undefined) d.m = "q" in d ? d.q : 0;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return localDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + timeDay.count(timeYear(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(timeSunday.count(timeYear(d) - 1, d), p, 2);
}

function dISO(d) {
  var day = d.getDay();
  return (day >= 4 || day === 0) ? timeThursday(d) : timeThursday.ceil(d);
}

function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(timeMonday.count(timeYear(d) - 1, d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? timeThursday(d) : timeThursday.ceil(d);
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
}

function UTCdISO(d) {
  var day = d.getUTCDay();
  return (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
}

function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}

var locale;
var timeFormat;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = formatLocale(definition);
  timeFormat = locale.format;
  locale.parse;
  locale.utcFormat;
  locale.utcParse;
  return locale;
}

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
  var scale = linear.continuous(),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice(d, interval)) : scale;
  };

  scale.copy = function() {
    return linear.copy(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
  };

  return scale;
}

function time() {
  return init.initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
}

var isoWeek$1 = {exports: {}};

var isoWeek = isoWeek$1.exports;

var hasRequiredIsoWeek;

function requireIsoWeek () {
	if (hasRequiredIsoWeek) return isoWeek$1.exports;
	hasRequiredIsoWeek = 1;
	(function (module, exports) {
		!function(e,t){module.exports=t();}(isoWeek,(function(){var e="day";return function(t,i,s){var a=function(t){return t.add(4-t.isoWeekday(),e)},d=i.prototype;d.isoWeekYear=function(){return a(this).year()},d.isoWeek=function(t){if(!this.$utils().u(t))return this.add(7*(t-this.isoWeek()),e);var i,d,n,o,r=a(this),u=(i=this.isoWeekYear(),d=this.$u,n=(d?s.utc:s)().year(i).startOf("year"),o=4-n.isoWeekday(),n.isoWeekday()>4&&(o+=7),n.add(o,e));return r.diff(u,"week")+1},d.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var n=d.startOf;d.startOf=function(e,t){var i=this.$utils(),s=!!i.u(t)||t;return "isoweek"===i.p(e)?s?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):n.bind(this)(e,t)};}})); 
	} (isoWeek$1, isoWeek$1.exports));
	return isoWeek$1.exports;
}

var isoWeekExports = requireIsoWeek();
var dayjsIsoWeek = /*@__PURE__*/main.getDefaultExportFromCjs(isoWeekExports);

var customParseFormat$1 = {exports: {}};

var customParseFormat = customParseFormat$1.exports;

var hasRequiredCustomParseFormat;

function requireCustomParseFormat () {
	if (hasRequiredCustomParseFormat) return customParseFormat$1.exports;
	hasRequiredCustomParseFormat = 1;
	(function (module, exports) {
		!function(e,t){module.exports=t();}(customParseFormat,(function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,s={},a=function(e){return (e=+e)+(e>68?1900:2e3)};var f=function(e){return function(t){this[e]=+t;}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e);}],u=function(e){var t=s[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=s.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},c={A:[o,function(e){this.afternoon=d(e,!1);}],a:[o,function(e){this.afternoon=d(e,!0);}],Q:[n,function(e){this.month=3*(e-1)+1;}],S:[n,function(e){this.milliseconds=100*+e;}],SS:[r,function(e){this.milliseconds=10*+e;}],SSS:[/\d{3}/,function(e){this.milliseconds=+e;}],s:[i,f("seconds")],ss:[i,f("seconds")],m:[i,f("minutes")],mm:[i,f("minutes")],H:[i,f("hours")],h:[i,f("hours")],HH:[i,f("hours")],hh:[i,f("hours")],D:[i,f("day")],DD:[r,f("day")],Do:[o,function(e){var t=s.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r);}],w:[i,f("week")],ww:[r,f("week")],M:[i,f("month")],MM:[r,f("month")],MMM:[o,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n;}],MMMM:[o,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t;}],Y:[/[+-]?\d+/,f("year")],YY:[r,function(e){this.year=a(e);}],YYYY:[/\d{4}/,f("year")],Z:h,ZZ:h};function l(n){var r,i;r=n,i=s&&s.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),a=o.length,f=0;f<a;f+=1){var h=o[f],u=c[h],d=u&&u[0],l=u&&u[1];o[f]=l?{regex:d,parser:l}:h.replace(/^\[|\]$/g,"");}return function(e){for(var t={},n=0,r=0;n<a;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else {var s=i.regex,f=i.parser,h=e.slice(r),u=s.exec(h)[0];f.call(t,u),e=e.replace(u,"");}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon;}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var a=o[1];if("string"==typeof a){var f=!0===o[2],h=!0===o[3],u=f||h,d=o[2];h&&(d=o[2]),s=this.$locale(),!f&&d&&(s=n.Ls[d]),this.$d=function(e,t,n,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var i=l(t)(e),o=i.year,s=i.month,a=i.day,f=i.hours,h=i.minutes,u=i.seconds,d=i.milliseconds,c=i.zone,m=i.week,M=new Date,Y=a||(o||s?1:M.getDate()),p=o||M.getFullYear(),v=0;o&&!s||(v=s>0?s-1:M.getMonth());var D,w=f||0,g=h||0,y=u||0,L=d||0;return c?new Date(Date.UTC(p,v,Y,w,g,y,L+60*c.offset*1e3)):n?new Date(Date.UTC(p,v,Y,w,g,y,L)):(D=new Date(p,v,Y,w,g,y,L),m&&(D=r(D).week(m).toDate()),D)}catch(e){return new Date("")}}(t,a,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(a)&&(this.$d=new Date("")),s={};}else if(a instanceof Array)for(var c=a.length,m=1;m<=c;m+=1){o[1]=a[m-1];var M=n.apply(this,o);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===c&&(this.$d=new Date(""));}else i.call(this,e);};}})); 
	} (customParseFormat$1, customParseFormat$1.exports));
	return customParseFormat$1.exports;
}

var customParseFormatExports = requireCustomParseFormat();
var dayjsCustomParseFormat = /*@__PURE__*/main.getDefaultExportFromCjs(customParseFormatExports);

var advancedFormat$1 = {exports: {}};

var advancedFormat = advancedFormat$1.exports;

var hasRequiredAdvancedFormat;

function requireAdvancedFormat () {
	if (hasRequiredAdvancedFormat) return advancedFormat$1.exports;
	hasRequiredAdvancedFormat = 1;
	(function (module, exports) {
		!function(e,t){module.exports=t();}(advancedFormat,(function(){return function(e,t){var r=t.prototype,n=r.format;r.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return n.bind(this)(e);var s=this.$utils(),a=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return r.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return r.ordinal(t.week(),"W");case"w":case"ww":return s.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return s.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return s.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return "["+t.offsetName()+"]";case"zzz":return "["+t.offsetName("long")+"]";default:return e}}));return n.bind(this)(a)};}})); 
	} (advancedFormat$1, advancedFormat$1.exports));
	return advancedFormat$1.exports;
}

var advancedFormatExports = requireAdvancedFormat();
var dayjsAdvancedFormat = /*@__PURE__*/main.getDefaultExportFromCjs(advancedFormatExports);

var parser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 32, 33, 35, 37], $V1 = [1, 25], $V2 = [1, 26], $V3 = [1, 27], $V4 = [1, 28], $V5 = [1, 29], $V6 = [1, 30], $V7 = [1, 31], $V8 = [1, 9], $V9 = [1, 10], $Va = [1, 11], $Vb = [1, 12], $Vc = [1, 13], $Vd = [1, 14], $Ve = [1, 15], $Vf = [1, 16], $Vg = [1, 18], $Vh = [1, 19], $Vi = [1, 20], $Vj = [1, 21], $Vk = [1, 22], $Vl = [1, 24], $Vm = [1, 32];
  var parser2 = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "start": 3, "gantt": 4, "document": 5, "EOF": 6, "line": 7, "SPACE": 8, "statement": 9, "NL": 10, "weekday": 11, "weekday_monday": 12, "weekday_tuesday": 13, "weekday_wednesday": 14, "weekday_thursday": 15, "weekday_friday": 16, "weekday_saturday": 17, "weekday_sunday": 18, "dateFormat": 19, "inclusiveEndDates": 20, "topAxis": 21, "axisFormat": 22, "tickInterval": 23, "excludes": 24, "includes": 25, "todayMarker": 26, "title": 27, "acc_title": 28, "acc_title_value": 29, "acc_descr": 30, "acc_descr_value": 31, "acc_descr_multiline_value": 32, "section": 33, "clickStatement": 34, "taskTxt": 35, "taskData": 36, "click": 37, "callbackname": 38, "callbackargs": 39, "href": 40, "clickStatementDebug": 41, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 4: "gantt", 6: "EOF", 8: "SPACE", 10: "NL", 12: "weekday_monday", 13: "weekday_tuesday", 14: "weekday_wednesday", 15: "weekday_thursday", 16: "weekday_friday", 17: "weekday_saturday", 18: "weekday_sunday", 19: "dateFormat", 20: "inclusiveEndDates", 21: "topAxis", 22: "axisFormat", 23: "tickInterval", 24: "excludes", 25: "includes", 26: "todayMarker", 27: "title", 28: "acc_title", 29: "acc_title_value", 30: "acc_descr", 31: "acc_descr_value", 32: "acc_descr_multiline_value", 33: "section", 35: "taskTxt", 36: "taskData", 37: "click", 38: "callbackname", 39: "callbackargs", 40: "href" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 2], [34, 2], [34, 3], [34, 3], [34, 4], [34, 3], [34, 4], [34, 2], [41, 2], [41, 3], [41, 3], [41, 4], [41, 3], [41, 4], [41, 2]],
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
          yy.setWeekday("monday");
          break;
        case 9:
          yy.setWeekday("tuesday");
          break;
        case 10:
          yy.setWeekday("wednesday");
          break;
        case 11:
          yy.setWeekday("thursday");
          break;
        case 12:
          yy.setWeekday("friday");
          break;
        case 13:
          yy.setWeekday("saturday");
          break;
        case 14:
          yy.setWeekday("sunday");
          break;
        case 15:
          yy.setDateFormat($$[$0].substr(11));
          this.$ = $$[$0].substr(11);
          break;
        case 16:
          yy.enableInclusiveEndDates();
          this.$ = $$[$0].substr(18);
          break;
        case 17:
          yy.TopAxis();
          this.$ = $$[$0].substr(8);
          break;
        case 18:
          yy.setAxisFormat($$[$0].substr(11));
          this.$ = $$[$0].substr(11);
          break;
        case 19:
          yy.setTickInterval($$[$0].substr(13));
          this.$ = $$[$0].substr(13);
          break;
        case 20:
          yy.setExcludes($$[$0].substr(9));
          this.$ = $$[$0].substr(9);
          break;
        case 21:
          yy.setIncludes($$[$0].substr(9));
          this.$ = $$[$0].substr(9);
          break;
        case 22:
          yy.setTodayMarker($$[$0].substr(12));
          this.$ = $$[$0].substr(12);
          break;
        case 24:
          yy.setDiagramTitle($$[$0].substr(6));
          this.$ = $$[$0].substr(6);
          break;
        case 25:
          this.$ = $$[$0].trim();
          yy.setAccTitle(this.$);
          break;
        case 26:
        case 27:
          this.$ = $$[$0].trim();
          yy.setAccDescription(this.$);
          break;
        case 28:
          yy.addSection($$[$0].substr(8));
          this.$ = $$[$0].substr(8);
          break;
        case 30:
          yy.addTask($$[$0 - 1], $$[$0]);
          this.$ = "task";
          break;
        case 31:
          this.$ = $$[$0 - 1];
          yy.setClickEvent($$[$0 - 1], $$[$0], null);
          break;
        case 32:
          this.$ = $$[$0 - 2];
          yy.setClickEvent($$[$0 - 2], $$[$0 - 1], $$[$0]);
          break;
        case 33:
          this.$ = $$[$0 - 2];
          yy.setClickEvent($$[$0 - 2], $$[$0 - 1], null);
          yy.setLink($$[$0 - 2], $$[$0]);
          break;
        case 34:
          this.$ = $$[$0 - 3];
          yy.setClickEvent($$[$0 - 3], $$[$0 - 2], $$[$0 - 1]);
          yy.setLink($$[$0 - 3], $$[$0]);
          break;
        case 35:
          this.$ = $$[$0 - 2];
          yy.setClickEvent($$[$0 - 2], $$[$0], null);
          yy.setLink($$[$0 - 2], $$[$0 - 1]);
          break;
        case 36:
          this.$ = $$[$0 - 3];
          yy.setClickEvent($$[$0 - 3], $$[$0 - 1], $$[$0]);
          yy.setLink($$[$0 - 3], $$[$0 - 2]);
          break;
        case 37:
          this.$ = $$[$0 - 1];
          yy.setLink($$[$0 - 1], $$[$0]);
          break;
        case 38:
        case 44:
          this.$ = $$[$0 - 1] + " " + $$[$0];
          break;
        case 39:
        case 40:
        case 42:
          this.$ = $$[$0 - 2] + " " + $$[$0 - 1] + " " + $$[$0];
          break;
        case 41:
        case 43:
          this.$ = $$[$0 - 3] + " " + $$[$0 - 2] + " " + $$[$0 - 1] + " " + $$[$0];
          break;
      }
    },
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, o($V0, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: 17, 12: $V1, 13: $V2, 14: $V3, 15: $V4, 16: $V5, 17: $V6, 18: $V7, 19: $V8, 20: $V9, 21: $Va, 22: $Vb, 23: $Vc, 24: $Vd, 25: $Ve, 26: $Vf, 27: $Vg, 28: $Vh, 30: $Vi, 32: $Vj, 33: $Vk, 34: 23, 35: $Vl, 37: $Vm }, o($V0, [2, 7], { 1: [2, 1] }), o($V0, [2, 3]), { 9: 33, 11: 17, 12: $V1, 13: $V2, 14: $V3, 15: $V4, 16: $V5, 17: $V6, 18: $V7, 19: $V8, 20: $V9, 21: $Va, 22: $Vb, 23: $Vc, 24: $Vd, 25: $Ve, 26: $Vf, 27: $Vg, 28: $Vh, 30: $Vi, 32: $Vj, 33: $Vk, 34: 23, 35: $Vl, 37: $Vm }, o($V0, [2, 5]), o($V0, [2, 6]), o($V0, [2, 15]), o($V0, [2, 16]), o($V0, [2, 17]), o($V0, [2, 18]), o($V0, [2, 19]), o($V0, [2, 20]), o($V0, [2, 21]), o($V0, [2, 22]), o($V0, [2, 23]), o($V0, [2, 24]), { 29: [1, 34] }, { 31: [1, 35] }, o($V0, [2, 27]), o($V0, [2, 28]), o($V0, [2, 29]), { 36: [1, 36] }, o($V0, [2, 8]), o($V0, [2, 9]), o($V0, [2, 10]), o($V0, [2, 11]), o($V0, [2, 12]), o($V0, [2, 13]), o($V0, [2, 14]), { 38: [1, 37], 40: [1, 38] }, o($V0, [2, 4]), o($V0, [2, 25]), o($V0, [2, 26]), o($V0, [2, 30]), o($V0, [2, 31], { 39: [1, 39], 40: [1, 40] }), o($V0, [2, 37], { 38: [1, 41] }), o($V0, [2, 32], { 40: [1, 42] }), o($V0, [2, 33]), o($V0, [2, 35], { 39: [1, 43] }), o($V0, [2, 34]), o($V0, [2, 36])],
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
            this.begin("open_directive");
            return "open_directive";
          case 1:
            this.begin("acc_title");
            return 28;
          case 2:
            this.popState();
            return "acc_title_value";
          case 3:
            this.begin("acc_descr");
            return 30;
          case 4:
            this.popState();
            return "acc_descr_value";
          case 5:
            this.begin("acc_descr_multiline");
            break;
          case 6:
            this.popState();
            break;
          case 7:
            return "acc_descr_multiline_value";
          case 8:
            break;
          case 9:
            break;
          case 10:
            break;
          case 11:
            return 10;
          case 12:
            break;
          case 13:
            break;
          case 14:
            this.begin("href");
            break;
          case 15:
            this.popState();
            break;
          case 16:
            return 40;
          case 17:
            this.begin("callbackname");
            break;
          case 18:
            this.popState();
            break;
          case 19:
            this.popState();
            this.begin("callbackargs");
            break;
          case 20:
            return 38;
          case 21:
            this.popState();
            break;
          case 22:
            return 39;
          case 23:
            this.begin("click");
            break;
          case 24:
            this.popState();
            break;
          case 25:
            return 37;
          case 26:
            return 4;
          case 27:
            return 19;
          case 28:
            return 20;
          case 29:
            return 21;
          case 30:
            return 22;
          case 31:
            return 23;
          case 32:
            return 25;
          case 33:
            return 24;
          case 34:
            return 26;
          case 35:
            return 12;
          case 36:
            return 13;
          case 37:
            return 14;
          case 38:
            return 15;
          case 39:
            return 16;
          case 40:
            return 17;
          case 41:
            return 18;
          case 42:
            return "date";
          case 43:
            return 27;
          case 44:
            return "accDescription";
          case 45:
            return 33;
          case 46:
            return 35;
          case 47:
            return 36;
          case 48:
            return ":";
          case 49:
            return 6;
          case 50:
            return "INVALID";
        }
      },
      rules: [/^(?:%%\{)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:%%(?!\{)*[^\n]*)/i, /^(?:[^\}]%%*[^\n]*)/i, /^(?:%%*[^\n]*[\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:%[^\n]*)/i, /^(?:href[\s]+["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:call[\s]+)/i, /^(?:\([\s]*\))/i, /^(?:\()/i, /^(?:[^(]*)/i, /^(?:\))/i, /^(?:[^)]*)/i, /^(?:click[\s]+)/i, /^(?:[\s\n])/i, /^(?:[^\s\n]*)/i, /^(?:gantt\b)/i, /^(?:dateFormat\s[^#\n;]+)/i, /^(?:inclusiveEndDates\b)/i, /^(?:topAxis\b)/i, /^(?:axisFormat\s[^#\n;]+)/i, /^(?:tickInterval\s[^#\n;]+)/i, /^(?:includes\s[^#\n;]+)/i, /^(?:excludes\s[^#\n;]+)/i, /^(?:todayMarker\s[^\n;]+)/i, /^(?:weekday\s+monday\b)/i, /^(?:weekday\s+tuesday\b)/i, /^(?:weekday\s+wednesday\b)/i, /^(?:weekday\s+thursday\b)/i, /^(?:weekday\s+friday\b)/i, /^(?:weekday\s+saturday\b)/i, /^(?:weekday\s+sunday\b)/i, /^(?:\d\d\d\d-\d\d-\d\d\b)/i, /^(?:title\s[^\n]+)/i, /^(?:accDescription\s[^#\n;]+)/i, /^(?:section\s[^\n]+)/i, /^(?:[^:\n]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { "acc_descr_multiline": { "rules": [6, 7], "inclusive": false }, "acc_descr": { "rules": [4], "inclusive": false }, "acc_title": { "rules": [2], "inclusive": false }, "callbackargs": { "rules": [21, 22], "inclusive": false }, "callbackname": { "rules": [18, 19, 20], "inclusive": false }, "href": { "rules": [15, 16], "inclusive": false }, "click": { "rules": [24, 25], "inclusive": false }, "INITIAL": { "rules": [0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 17, 23, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], "inclusive": true } }
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
const ganttParser = parser;
index.dayjs.extend(dayjsIsoWeek);
index.dayjs.extend(dayjsCustomParseFormat);
index.dayjs.extend(dayjsAdvancedFormat);
let dateFormat = "";
let axisFormat = "";
let tickInterval = void 0;
let todayMarker = "";
let includes = [];
let excludes = [];
let links = {};
let sections = [];
let tasks = [];
let currentSection = "";
let displayMode = "";
const tags = ["active", "done", "crit", "milestone"];
let funs = [];
let inclusiveEndDates = false;
let topAxis = false;
let weekday = "sunday";
let lastOrder = 0;
const clear = function() {
  sections = [];
  tasks = [];
  currentSection = "";
  funs = [];
  taskCnt = 0;
  lastTask = void 0;
  lastTaskID = void 0;
  rawTasks = [];
  dateFormat = "";
  axisFormat = "";
  displayMode = "";
  tickInterval = void 0;
  todayMarker = "";
  includes = [];
  excludes = [];
  inclusiveEndDates = false;
  topAxis = false;
  lastOrder = 0;
  links = {};
  index.clear();
  weekday = "sunday";
};
const setAxisFormat = function(txt) {
  axisFormat = txt;
};
const getAxisFormat = function() {
  return axisFormat;
};
const setTickInterval = function(txt) {
  tickInterval = txt;
};
const getTickInterval = function() {
  return tickInterval;
};
const setTodayMarker = function(txt) {
  todayMarker = txt;
};
const getTodayMarker = function() {
  return todayMarker;
};
const setDateFormat = function(txt) {
  dateFormat = txt;
};
const enableInclusiveEndDates = function() {
  inclusiveEndDates = true;
};
const endDatesAreInclusive = function() {
  return inclusiveEndDates;
};
const enableTopAxis = function() {
  topAxis = true;
};
const topAxisEnabled = function() {
  return topAxis;
};
const setDisplayMode = function(txt) {
  displayMode = txt;
};
const getDisplayMode = function() {
  return displayMode;
};
const getDateFormat = function() {
  return dateFormat;
};
const setIncludes = function(txt) {
  includes = txt.toLowerCase().split(/[\s,]+/);
};
const getIncludes = function() {
  return includes;
};
const setExcludes = function(txt) {
  excludes = txt.toLowerCase().split(/[\s,]+/);
};
const getExcludes = function() {
  return excludes;
};
const getLinks = function() {
  return links;
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
  const maxDepth = 10;
  let iterationCount = 0;
  while (!allItemsProcessed && iterationCount < maxDepth) {
    allItemsProcessed = compileTasks();
    iterationCount++;
  }
  tasks = rawTasks;
  return tasks;
};
const isInvalidDate = function(date, dateFormat2, excludes2, includes2) {
  if (includes2.includes(date.format(dateFormat2.trim()))) {
    return false;
  }
  if (date.isoWeekday() >= 6 && excludes2.includes("weekends")) {
    return true;
  }
  if (excludes2.includes(date.format("dddd").toLowerCase())) {
    return true;
  }
  return excludes2.includes(date.format(dateFormat2.trim()));
};
const setWeekday = function(txt) {
  weekday = txt;
};
const getWeekday = function() {
  return weekday;
};
const checkTaskDates = function(task, dateFormat2, excludes2, includes2) {
  if (!excludes2.length || task.manualEndTime) {
    return;
  }
  let startTime;
  if (task.startTime instanceof Date) {
    startTime = index.dayjs(task.startTime);
  } else {
    startTime = index.dayjs(task.startTime, dateFormat2, true);
  }
  startTime = startTime.add(1, "d");
  let originalEndTime;
  if (task.endTime instanceof Date) {
    originalEndTime = index.dayjs(task.endTime);
  } else {
    originalEndTime = index.dayjs(task.endTime, dateFormat2, true);
  }
  const [fixedEndTime, renderEndTime] = fixTaskDates(
    startTime,
    originalEndTime,
    dateFormat2,
    excludes2,
    includes2
  );
  task.endTime = fixedEndTime.toDate();
  task.renderEndTime = renderEndTime;
};
const fixTaskDates = function(startTime, endTime, dateFormat2, excludes2, includes2) {
  let invalid = false;
  let renderEndTime = null;
  while (startTime <= endTime) {
    if (!invalid) {
      renderEndTime = endTime.toDate();
    }
    invalid = isInvalidDate(startTime, dateFormat2, excludes2, includes2);
    if (invalid) {
      endTime = endTime.add(1, "d");
    }
    startTime = startTime.add(1, "d");
  }
  return [endTime, renderEndTime];
};
const getStartDate = function(prevTime, dateFormat2, str) {
  str = str.trim();
  const afterRePattern = /^after\s+(?<ids>[\d\w- ]+)/;
  const afterStatement = afterRePattern.exec(str);
  if (afterStatement !== null) {
    let latestTask = null;
    for (const id of afterStatement.groups.ids.split(" ")) {
      let task = findTaskById(id);
      if (task !== void 0 && (!latestTask || task.endTime > latestTask.endTime)) {
        latestTask = task;
      }
    }
    if (latestTask) {
      return latestTask.endTime;
    }
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  }
  let mDate = index.dayjs(str, dateFormat2.trim(), true);
  if (mDate.isValid()) {
    return mDate.toDate();
  } else {
    index.log$1.debug("Invalid date:" + str);
    index.log$1.debug("With date format:" + dateFormat2.trim());
    const d = new Date(str);
    if (d === void 0 || isNaN(d.getTime()) || // WebKit browsers can mis-parse invalid dates to be ridiculously
    // huge numbers, e.g. new Date('202304') gets parsed as January 1, 202304.
    // This can cause virtually infinite loops while rendering, so for the
    // purposes of Gantt charts we'll just treat any date beyond 10,000 AD/BC as
    // invalid.
    d.getFullYear() < -1e4 || d.getFullYear() > 1e4) {
      throw new Error("Invalid date:" + str);
    }
    return d;
  }
};
const parseDuration = function(str) {
  const statement = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(str.trim());
  if (statement !== null) {
    return [Number.parseFloat(statement[1]), statement[2]];
  }
  return [NaN, "ms"];
};
const getEndDate = function(prevTime, dateFormat2, str, inclusive = false) {
  str = str.trim();
  const untilRePattern = /^until\s+(?<ids>[\d\w- ]+)/;
  const untilStatement = untilRePattern.exec(str);
  if (untilStatement !== null) {
    let earliestTask = null;
    for (const id of untilStatement.groups.ids.split(" ")) {
      let task = findTaskById(id);
      if (task !== void 0 && (!earliestTask || task.startTime < earliestTask.startTime)) {
        earliestTask = task;
      }
    }
    if (earliestTask) {
      return earliestTask.startTime;
    }
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  }
  let parsedDate = index.dayjs(str, dateFormat2.trim(), true);
  if (parsedDate.isValid()) {
    if (inclusive) {
      parsedDate = parsedDate.add(1, "d");
    }
    return parsedDate.toDate();
  }
  let endTime = index.dayjs(prevTime);
  const [durationValue, durationUnit] = parseDuration(str);
  if (!Number.isNaN(durationValue)) {
    const newEndTime = endTime.add(durationValue, durationUnit);
    if (newEndTime.isValid()) {
      endTime = newEndTime;
    }
  }
  return endTime.toDate();
};
let taskCnt = 0;
const parseId = function(idStr) {
  if (idStr === void 0) {
    taskCnt = taskCnt + 1;
    return "task" + taskCnt;
  }
  return idStr;
};
const compileData = function(prevTask, dataStr) {
  let ds;
  if (dataStr.substr(0, 1) === ":") {
    ds = dataStr.substr(1, dataStr.length);
  } else {
    ds = dataStr;
  }
  const data = ds.split(",");
  const task = {};
  getTaskTags(data, task, tags);
  for (let i = 0; i < data.length; i++) {
    data[i] = data[i].trim();
  }
  let endTimeData = "";
  switch (data.length) {
    case 1:
      task.id = parseId();
      task.startTime = prevTask.endTime;
      endTimeData = data[0];
      break;
    case 2:
      task.id = parseId();
      task.startTime = getStartDate(void 0, dateFormat, data[0]);
      endTimeData = data[1];
      break;
    case 3:
      task.id = parseId(data[0]);
      task.startTime = getStartDate(void 0, dateFormat, data[1]);
      endTimeData = data[2];
      break;
  }
  if (endTimeData) {
    task.endTime = getEndDate(task.startTime, dateFormat, endTimeData, inclusiveEndDates);
    task.manualEndTime = index.dayjs(endTimeData, "YYYY-MM-DD", true).isValid();
    checkTaskDates(task, dateFormat, excludes, includes);
  }
  return task;
};
const parseData = function(prevTaskId, dataStr) {
  let ds;
  if (dataStr.substr(0, 1) === ":") {
    ds = dataStr.substr(1, dataStr.length);
  } else {
    ds = dataStr;
  }
  const data = ds.split(",");
  const task = {};
  getTaskTags(data, task, tags);
  for (let i = 0; i < data.length; i++) {
    data[i] = data[i].trim();
  }
  switch (data.length) {
    case 1:
      task.id = parseId();
      task.startTime = {
        type: "prevTaskEnd",
        id: prevTaskId
      };
      task.endTime = {
        data: data[0]
      };
      break;
    case 2:
      task.id = parseId();
      task.startTime = {
        type: "getStartDate",
        startData: data[0]
      };
      task.endTime = {
        data: data[1]
      };
      break;
    case 3:
      task.id = parseId(data[0]);
      task.startTime = {
        type: "getStartDate",
        startData: data[1]
      };
      task.endTime = {
        data: data[2]
      };
      break;
  }
  return task;
};
let lastTask;
let lastTaskID;
let rawTasks = [];
const taskDb = {};
const addTask = function(descr, data) {
  const rawTask = {
    section: currentSection,
    type: currentSection,
    processed: false,
    manualEndTime: false,
    renderEndTime: null,
    raw: { data },
    task: descr,
    classes: []
  };
  const taskInfo = parseData(lastTaskID, data);
  rawTask.raw.startTime = taskInfo.startTime;
  rawTask.raw.endTime = taskInfo.endTime;
  rawTask.id = taskInfo.id;
  rawTask.prevTaskId = lastTaskID;
  rawTask.active = taskInfo.active;
  rawTask.done = taskInfo.done;
  rawTask.crit = taskInfo.crit;
  rawTask.milestone = taskInfo.milestone;
  rawTask.order = lastOrder;
  lastOrder++;
  const pos = rawTasks.push(rawTask);
  lastTaskID = rawTask.id;
  taskDb[rawTask.id] = pos - 1;
};
const findTaskById = function(id) {
  const pos = taskDb[id];
  return rawTasks[pos];
};
const addTaskOrg = function(descr, data) {
  const newTask = {
    section: currentSection,
    type: currentSection,
    description: descr,
    task: descr,
    classes: []
  };
  const taskInfo = compileData(lastTask, data);
  newTask.startTime = taskInfo.startTime;
  newTask.endTime = taskInfo.endTime;
  newTask.id = taskInfo.id;
  newTask.active = taskInfo.active;
  newTask.done = taskInfo.done;
  newTask.crit = taskInfo.crit;
  newTask.milestone = taskInfo.milestone;
  lastTask = newTask;
  tasks.push(newTask);
};
const compileTasks = function() {
  const compileTask = function(pos) {
    const task = rawTasks[pos];
    let startTime = "";
    switch (rawTasks[pos].raw.startTime.type) {
      case "prevTaskEnd": {
        const prevTask = findTaskById(task.prevTaskId);
        task.startTime = prevTask.endTime;
        break;
      }
      case "getStartDate":
        startTime = getStartDate(void 0, dateFormat, rawTasks[pos].raw.startTime.startData);
        if (startTime) {
          rawTasks[pos].startTime = startTime;
        }
        break;
    }
    if (rawTasks[pos].startTime) {
      rawTasks[pos].endTime = getEndDate(
        rawTasks[pos].startTime,
        dateFormat,
        rawTasks[pos].raw.endTime.data,
        inclusiveEndDates
      );
      if (rawTasks[pos].endTime) {
        rawTasks[pos].processed = true;
        rawTasks[pos].manualEndTime = index.dayjs(
          rawTasks[pos].raw.endTime.data,
          "YYYY-MM-DD",
          true
        ).isValid();
        checkTaskDates(rawTasks[pos], dateFormat, excludes, includes);
      }
    }
    return rawTasks[pos].processed;
  };
  let allProcessed = true;
  for (const [i, rawTask] of rawTasks.entries()) {
    compileTask(i);
    allProcessed = allProcessed && rawTask.processed;
  }
  return allProcessed;
};
const setLink = function(ids, _linkStr) {
  let linkStr = _linkStr;
  if (index.getConfig().securityLevel !== "loose") {
    linkStr = main.distExports.sanitizeUrl(_linkStr);
  }
  ids.split(",").forEach(function(id) {
    let rawTask = findTaskById(id);
    if (rawTask !== void 0) {
      pushFun(id, () => {
        window.open(linkStr, "_self");
      });
      links[id] = linkStr;
    }
  });
  setClass(ids, "clickable");
};
const setClass = function(ids, className) {
  ids.split(",").forEach(function(id) {
    let rawTask = findTaskById(id);
    if (rawTask !== void 0) {
      rawTask.classes.push(className);
    }
  });
};
const setClickFun = function(id, functionName, functionArgs) {
  if (index.getConfig().securityLevel !== "loose") {
    return;
  }
  if (functionName === void 0) {
    return;
  }
  let argList = [];
  if (typeof functionArgs === "string") {
    argList = functionArgs.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let i = 0; i < argList.length; i++) {
      let item = argList[i].trim();
      if (item.charAt(0) === '"' && item.charAt(item.length - 1) === '"') {
        item = item.substr(1, item.length - 2);
      }
      argList[i] = item;
    }
  }
  if (argList.length === 0) {
    argList.push(id);
  }
  let rawTask = findTaskById(id);
  if (rawTask !== void 0) {
    pushFun(id, () => {
      index.utils.runFunc(functionName, ...argList);
    });
  }
};
const pushFun = function(id, callbackFunction) {
  funs.push(
    function() {
      const elem = document.querySelector(`[id="${id}"]`);
      if (elem !== null) {
        elem.addEventListener("click", function() {
          callbackFunction();
        });
      }
    },
    function() {
      const elem = document.querySelector(`[id="${id}-text"]`);
      if (elem !== null) {
        elem.addEventListener("click", function() {
          callbackFunction();
        });
      }
    }
  );
};
const setClickEvent = function(ids, functionName, functionArgs) {
  ids.split(",").forEach(function(id) {
    setClickFun(id, functionName, functionArgs);
  });
  setClass(ids, "clickable");
};
const bindFunctions = function(element) {
  funs.forEach(function(fun) {
    fun(element);
  });
};
const ganttDb = {
  getConfig: () => index.getConfig().gantt,
  clear,
  setDateFormat,
  getDateFormat,
  enableInclusiveEndDates,
  endDatesAreInclusive,
  enableTopAxis,
  topAxisEnabled,
  setAxisFormat,
  getAxisFormat,
  setTickInterval,
  getTickInterval,
  setTodayMarker,
  getTodayMarker,
  setAccTitle: index.setAccTitle,
  getAccTitle: index.getAccTitle,
  setDiagramTitle: index.setDiagramTitle,
  getDiagramTitle: index.getDiagramTitle,
  setDisplayMode,
  getDisplayMode,
  setAccDescription: index.setAccDescription,
  getAccDescription: index.getAccDescription,
  addSection,
  getSections,
  getTasks,
  addTask,
  findTaskById,
  addTaskOrg,
  setIncludes,
  getIncludes,
  setExcludes,
  getExcludes,
  setClickEvent,
  setLink,
  getLinks,
  bindFunctions,
  parseDuration,
  isInvalidDate,
  setWeekday,
  getWeekday
};
function getTaskTags(data, task, tags2) {
  let matchFound = true;
  while (matchFound) {
    matchFound = false;
    tags2.forEach(function(t) {
      const pattern = "^\\s*" + t + "\\s*$";
      const regex = new RegExp(pattern);
      if (data[0].match(regex)) {
        task[t] = true;
        data.shift(1);
        matchFound = true;
      }
    });
  }
}
const setConf = function() {
  index.log$1.debug("Something is calling, setConf, remove the call");
};
const mapWeekdayToTimeFunction = {
  monday: timeMonday,
  tuesday: timeTuesday,
  wednesday: timeWednesday,
  thursday: timeThursday,
  friday: timeFriday,
  saturday: timeSaturday,
  sunday: timeSunday
};
const getMaxIntersections = (tasks2, orderOffset) => {
  let timeline = [...tasks2].map(() => -Infinity);
  let sorted = [...tasks2].sort((a, b) => a.startTime - b.startTime || a.order - b.order);
  let maxIntersections = 0;
  for (const element of sorted) {
    for (let j = 0; j < timeline.length; j++) {
      if (element.startTime >= timeline[j]) {
        timeline[j] = element.endTime;
        element.order = j + orderOffset;
        if (j > maxIntersections) {
          maxIntersections = j;
        }
        break;
      }
    }
  }
  return maxIntersections;
};
let w;
const draw = function(text, id, version, diagObj) {
  const conf = index.getConfig().gantt;
  const securityLevel = index.getConfig().securityLevel;
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = index.select("#i" + id);
  }
  const root = securityLevel === "sandbox" ? index.select(sandboxElement.nodes()[0].contentDocument.body) : index.select("body");
  const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
  const elem = doc.getElementById(id);
  w = elem.parentElement.offsetWidth;
  if (w === void 0) {
    w = 1200;
  }
  if (conf.useWidth !== void 0) {
    w = conf.useWidth;
  }
  const taskArray = diagObj.db.getTasks();
  let categories = [];
  for (const element of taskArray) {
    categories.push(element.type);
  }
  categories = checkUnique(categories);
  const categoryHeights = {};
  let h = 2 * conf.topPadding;
  if (diagObj.db.getDisplayMode() === "compact" || conf.displayMode === "compact") {
    const categoryElements = {};
    for (const element of taskArray) {
      if (categoryElements[element.section] === void 0) {
        categoryElements[element.section] = [element];
      } else {
        categoryElements[element.section].push(element);
      }
    }
    let intersections = 0;
    for (const category of Object.keys(categoryElements)) {
      const categoryHeight = getMaxIntersections(categoryElements[category], intersections) + 1;
      intersections += categoryHeight;
      h += categoryHeight * (conf.barHeight + conf.barGap);
      categoryHeights[category] = categoryHeight;
    }
  } else {
    h += taskArray.length * (conf.barHeight + conf.barGap);
    for (const category of categories) {
      categoryHeights[category] = taskArray.filter((task) => task.type === category).length;
    }
  }
  elem.setAttribute("viewBox", "0 0 " + w + " " + h);
  const svg = root.select(`[id="${id}"]`);
  const timeScale = time().domain([
    min(taskArray, function(d) {
      return d.startTime;
    }),
    max(taskArray, function(d) {
      return d.endTime;
    })
  ]).rangeRound([0, w - conf.leftPadding - conf.rightPadding]);
  function taskCompare(a, b) {
    const taskA = a.startTime;
    const taskB = b.startTime;
    let result = 0;
    if (taskA > taskB) {
      result = 1;
    } else if (taskA < taskB) {
      result = -1;
    }
    return result;
  }
  taskArray.sort(taskCompare);
  makeGantt(taskArray, w, h);
  index.configureSvgSize(svg, h, w, conf.useMaxWidth);
  svg.append("text").text(diagObj.db.getDiagramTitle()).attr("x", w / 2).attr("y", conf.titleTopMargin).attr("class", "titleText");
  function makeGantt(tasks2, pageWidth, pageHeight) {
    const barHeight = conf.barHeight;
    const gap = barHeight + conf.barGap;
    const topPadding = conf.topPadding;
    const leftPadding = conf.leftPadding;
    const colorScale = linear.linear().domain([0, categories.length]).range(["#00B9FA", "#F95002"]).interpolate(interpolateHcl);
    drawExcludeDays(
      gap,
      topPadding,
      leftPadding,
      pageWidth,
      pageHeight,
      tasks2,
      diagObj.db.getExcludes(),
      diagObj.db.getIncludes()
    );
    makeGrid(leftPadding, topPadding, pageWidth, pageHeight);
    drawRects(tasks2, gap, topPadding, leftPadding, barHeight, colorScale, pageWidth);
    vertLabels(gap, topPadding);
    drawToday(leftPadding, topPadding, pageWidth, pageHeight);
  }
  function drawRects(theArray, theGap, theTopPad, theSidePad, theBarHeight, theColorScale, w2) {
    const uniqueTaskOrderIds = [...new Set(theArray.map((item) => item.order))];
    const uniqueTasks = uniqueTaskOrderIds.map((id2) => theArray.find((item) => item.order === id2));
    svg.append("g").selectAll("rect").data(uniqueTasks).enter().append("rect").attr("x", 0).attr("y", function(d, i) {
      i = d.order;
      return i * theGap + theTopPad - 2;
    }).attr("width", function() {
      return w2 - conf.rightPadding / 2;
    }).attr("height", theGap).attr("class", function(d) {
      for (const [i, category] of categories.entries()) {
        if (d.type === category) {
          return "section section" + i % conf.numberSectionStyles;
        }
      }
      return "section section0";
    });
    const rectangles = svg.append("g").selectAll("rect").data(theArray).enter();
    const links2 = diagObj.db.getLinks();
    rectangles.append("rect").attr("id", function(d) {
      return d.id;
    }).attr("rx", 3).attr("ry", 3).attr("x", function(d) {
      if (d.milestone) {
        return timeScale(d.startTime) + theSidePad + 0.5 * (timeScale(d.endTime) - timeScale(d.startTime)) - 0.5 * theBarHeight;
      }
      return timeScale(d.startTime) + theSidePad;
    }).attr("y", function(d, i) {
      i = d.order;
      return i * theGap + theTopPad;
    }).attr("width", function(d) {
      if (d.milestone) {
        return theBarHeight;
      }
      return timeScale(d.renderEndTime || d.endTime) - timeScale(d.startTime);
    }).attr("height", theBarHeight).attr("transform-origin", function(d, i) {
      i = d.order;
      return (timeScale(d.startTime) + theSidePad + 0.5 * (timeScale(d.endTime) - timeScale(d.startTime))).toString() + "px " + (i * theGap + theTopPad + 0.5 * theBarHeight).toString() + "px";
    }).attr("class", function(d) {
      const res = "task";
      let classStr = "";
      if (d.classes.length > 0) {
        classStr = d.classes.join(" ");
      }
      let secNum = 0;
      for (const [i, category] of categories.entries()) {
        if (d.type === category) {
          secNum = i % conf.numberSectionStyles;
        }
      }
      let taskClass = "";
      if (d.active) {
        if (d.crit) {
          taskClass += " activeCrit";
        } else {
          taskClass = " active";
        }
      } else if (d.done) {
        if (d.crit) {
          taskClass = " doneCrit";
        } else {
          taskClass = " done";
        }
      } else {
        if (d.crit) {
          taskClass += " crit";
        }
      }
      if (taskClass.length === 0) {
        taskClass = " task";
      }
      if (d.milestone) {
        taskClass = " milestone " + taskClass;
      }
      taskClass += secNum;
      taskClass += " " + classStr;
      return res + taskClass;
    });
    rectangles.append("text").attr("id", function(d) {
      return d.id + "-text";
    }).text(function(d) {
      return d.task;
    }).attr("font-size", conf.fontSize).attr("x", function(d) {
      let startX = timeScale(d.startTime);
      let endX = timeScale(d.renderEndTime || d.endTime);
      if (d.milestone) {
        startX += 0.5 * (timeScale(d.endTime) - timeScale(d.startTime)) - 0.5 * theBarHeight;
      }
      if (d.milestone) {
        endX = startX + theBarHeight;
      }
      const textWidth = this.getBBox().width;
      if (textWidth > endX - startX) {
        if (endX + textWidth + 1.5 * conf.leftPadding > w2) {
          return startX + theSidePad - 5;
        } else {
          return endX + theSidePad + 5;
        }
      } else {
        return (endX - startX) / 2 + startX + theSidePad;
      }
    }).attr("y", function(d, i) {
      i = d.order;
      return i * theGap + conf.barHeight / 2 + (conf.fontSize / 2 - 2) + theTopPad;
    }).attr("text-height", theBarHeight).attr("class", function(d) {
      const startX = timeScale(d.startTime);
      let endX = timeScale(d.endTime);
      if (d.milestone) {
        endX = startX + theBarHeight;
      }
      const textWidth = this.getBBox().width;
      let classStr = "";
      if (d.classes.length > 0) {
        classStr = d.classes.join(" ");
      }
      let secNum = 0;
      for (const [i, category] of categories.entries()) {
        if (d.type === category) {
          secNum = i % conf.numberSectionStyles;
        }
      }
      let taskType = "";
      if (d.active) {
        if (d.crit) {
          taskType = "activeCritText" + secNum;
        } else {
          taskType = "activeText" + secNum;
        }
      }
      if (d.done) {
        if (d.crit) {
          taskType = taskType + " doneCritText" + secNum;
        } else {
          taskType = taskType + " doneText" + secNum;
        }
      } else {
        if (d.crit) {
          taskType = taskType + " critText" + secNum;
        }
      }
      if (d.milestone) {
        taskType += " milestoneText";
      }
      if (textWidth > endX - startX) {
        if (endX + textWidth + 1.5 * conf.leftPadding > w2) {
          return classStr + " taskTextOutsideLeft taskTextOutside" + secNum + " " + taskType;
        } else {
          return classStr + " taskTextOutsideRight taskTextOutside" + secNum + " " + taskType + " width-" + textWidth;
        }
      } else {
        return classStr + " taskText taskText" + secNum + " " + taskType + " width-" + textWidth;
      }
    });
    const securityLevel2 = index.getConfig().securityLevel;
    if (securityLevel2 === "sandbox") {
      let sandboxElement2;
      sandboxElement2 = index.select("#i" + id);
      const doc2 = sandboxElement2.nodes()[0].contentDocument;
      rectangles.filter(function(d) {
        return links2[d.id] !== void 0;
      }).each(function(o) {
        var taskRect = doc2.querySelector("#" + o.id);
        var taskText = doc2.querySelector("#" + o.id + "-text");
        const oldParent = taskRect.parentNode;
        var Link = doc2.createElement("a");
        Link.setAttribute("xlink:href", links2[o.id]);
        Link.setAttribute("target", "_top");
        oldParent.appendChild(Link);
        Link.appendChild(taskRect);
        Link.appendChild(taskText);
      });
    }
  }
  function drawExcludeDays(theGap, theTopPad, theSidePad, w2, h2, tasks2, excludes2, includes2) {
    if (excludes2.length === 0 && includes2.length === 0) {
      return;
    }
    let minTime;
    let maxTime;
    for (const { startTime, endTime } of tasks2) {
      if (minTime === void 0 || startTime < minTime) {
        minTime = startTime;
      }
      if (maxTime === void 0 || endTime > maxTime) {
        maxTime = endTime;
      }
    }
    if (!minTime || !maxTime) {
      return;
    }
    if (index.dayjs(maxTime).diff(index.dayjs(minTime), "year") > 5) {
      index.log$1.warn(
        "The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days."
      );
      return;
    }
    const dateFormat2 = diagObj.db.getDateFormat();
    const excludeRanges = [];
    let range = null;
    let d = index.dayjs(minTime);
    while (d.valueOf() <= maxTime) {
      if (diagObj.db.isInvalidDate(d, dateFormat2, excludes2, includes2)) {
        if (!range) {
          range = {
            start: d,
            end: d
          };
        } else {
          range.end = d;
        }
      } else {
        if (range) {
          excludeRanges.push(range);
          range = null;
        }
      }
      d = d.add(1, "d");
    }
    const rectangles = svg.append("g").selectAll("rect").data(excludeRanges).enter();
    rectangles.append("rect").attr("id", function(d2) {
      return "exclude-" + d2.start.format("YYYY-MM-DD");
    }).attr("x", function(d2) {
      return timeScale(d2.start) + theSidePad;
    }).attr("y", conf.gridLineStartPadding).attr("width", function(d2) {
      const renderEnd = d2.end.add(1, "day");
      return timeScale(renderEnd) - timeScale(d2.start);
    }).attr("height", h2 - theTopPad - conf.gridLineStartPadding).attr("transform-origin", function(d2, i) {
      return (timeScale(d2.start) + theSidePad + 0.5 * (timeScale(d2.end) - timeScale(d2.start))).toString() + "px " + (i * theGap + 0.5 * h2).toString() + "px";
    }).attr("class", "exclude-range");
  }
  function makeGrid(theSidePad, theTopPad, w2, h2) {
    let bottomXAxis = axisBottom(timeScale).tickSize(-h2 + theTopPad + conf.gridLineStartPadding).tickFormat(timeFormat(diagObj.db.getAxisFormat() || conf.axisFormat || "%Y-%m-%d"));
    const reTickInterval = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/;
    const resultTickInterval = reTickInterval.exec(
      diagObj.db.getTickInterval() || conf.tickInterval
    );
    if (resultTickInterval !== null) {
      const every = resultTickInterval[1];
      const interval = resultTickInterval[2];
      const weekday2 = diagObj.db.getWeekday() || conf.weekday;
      switch (interval) {
        case "millisecond":
          bottomXAxis.ticks(millisecond.every(every));
          break;
        case "second":
          bottomXAxis.ticks(second.every(every));
          break;
        case "minute":
          bottomXAxis.ticks(timeMinute.every(every));
          break;
        case "hour":
          bottomXAxis.ticks(timeHour.every(every));
          break;
        case "day":
          bottomXAxis.ticks(timeDay.every(every));
          break;
        case "week":
          bottomXAxis.ticks(mapWeekdayToTimeFunction[weekday2].every(every));
          break;
        case "month":
          bottomXAxis.ticks(timeMonth.every(every));
          break;
      }
    }
    svg.append("g").attr("class", "grid").attr("transform", "translate(" + theSidePad + ", " + (h2 - 50) + ")").call(bottomXAxis).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em");
    if (diagObj.db.topAxisEnabled() || conf.topAxis) {
      let topXAxis = axisTop(timeScale).tickSize(-h2 + theTopPad + conf.gridLineStartPadding).tickFormat(timeFormat(diagObj.db.getAxisFormat() || conf.axisFormat || "%Y-%m-%d"));
      if (resultTickInterval !== null) {
        const every = resultTickInterval[1];
        const interval = resultTickInterval[2];
        const weekday2 = diagObj.db.getWeekday() || conf.weekday;
        switch (interval) {
          case "millisecond":
            topXAxis.ticks(millisecond.every(every));
            break;
          case "second":
            topXAxis.ticks(second.every(every));
            break;
          case "minute":
            topXAxis.ticks(timeMinute.every(every));
            break;
          case "hour":
            topXAxis.ticks(timeHour.every(every));
            break;
          case "day":
            topXAxis.ticks(timeDay.every(every));
            break;
          case "week":
            topXAxis.ticks(mapWeekdayToTimeFunction[weekday2].every(every));
            break;
          case "month":
            topXAxis.ticks(timeMonth.every(every));
            break;
        }
      }
      svg.append("g").attr("class", "grid").attr("transform", "translate(" + theSidePad + ", " + theTopPad + ")").call(topXAxis).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
    }
  }
  function vertLabels(theGap, theTopPad) {
    let prevGap = 0;
    const numOccurrences = Object.keys(categoryHeights).map((d) => [d, categoryHeights[d]]);
    svg.append("g").selectAll("text").data(numOccurrences).enter().append(function(d) {
      const rows = d[0].split(index.common$1.lineBreakRegex);
      const dy = -(rows.length - 1) / 2;
      const svgLabel = doc.createElementNS("http://www.w3.org/2000/svg", "text");
      svgLabel.setAttribute("dy", dy + "em");
      for (const [j, row] of rows.entries()) {
        const tspan = doc.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.setAttribute("alignment-baseline", "central");
        tspan.setAttribute("x", "10");
        if (j > 0) {
          tspan.setAttribute("dy", "1em");
        }
        tspan.textContent = row;
        svgLabel.appendChild(tspan);
      }
      return svgLabel;
    }).attr("x", 10).attr("y", function(d, i) {
      if (i > 0) {
        for (let j = 0; j < i; j++) {
          prevGap += numOccurrences[i - 1][1];
          return d[1] * theGap / 2 + prevGap * theGap + theTopPad;
        }
      } else {
        return d[1] * theGap / 2 + theTopPad;
      }
    }).attr("font-size", conf.sectionFontSize).attr("class", function(d) {
      for (const [i, category] of categories.entries()) {
        if (d[0] === category) {
          return "sectionTitle sectionTitle" + i % conf.numberSectionStyles;
        }
      }
      return "sectionTitle";
    });
  }
  function drawToday(theSidePad, theTopPad, w2, h2) {
    const todayMarker2 = diagObj.db.getTodayMarker();
    if (todayMarker2 === "off") {
      return;
    }
    const todayG = svg.append("g").attr("class", "today");
    const today = /* @__PURE__ */ new Date();
    const todayLine = todayG.append("line");
    todayLine.attr("x1", timeScale(today) + theSidePad).attr("x2", timeScale(today) + theSidePad).attr("y1", conf.titleTopMargin).attr("y2", h2 - conf.titleTopMargin).attr("class", "today");
    if (todayMarker2 !== "") {
      todayLine.attr("style", todayMarker2.replace(/,/g, ";"));
    }
  }
  function checkUnique(arr) {
    const hash = {};
    const result = [];
    for (let i = 0, l = arr.length; i < l; ++i) {
      if (!Object.prototype.hasOwnProperty.call(hash, arr[i])) {
        hash[arr[i]] = true;
        result.push(arr[i]);
      }
    }
    return result;
  }
};
const ganttRenderer = {
  setConf,
  draw
};
const getStyles = (options) => `
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${options.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${options.sectionBkgColor};
  }

  .section2 {
    fill: ${options.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${options.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${options.titleColor};
  }

  .sectionTitle1 {
    fill: ${options.titleColor};
  }

  .sectionTitle2 {
    fill: ${options.titleColor};
  }

  .sectionTitle3 {
    fill: ${options.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${options.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${options.fontFamily};
    fill: ${options.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${options.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${options.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${options.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${options.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${options.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${options.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${options.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${options.taskBkgColor};
    stroke: ${options.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${options.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${options.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${options.activeTaskBkgColor};
    stroke: ${options.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${options.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${options.doneTaskBorderColor};
    fill: ${options.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${options.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${options.critBorderColor};
    fill: ${options.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${options.critBorderColor};
    fill: ${options.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${options.critBorderColor};
    fill: ${options.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${options.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${options.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${options.titleColor || options.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`;
const ganttStyles = getStyles;
const diagram = {
  parser: ganttParser,
  db: ganttDb,
  renderer: ganttRenderer,
  styles: ganttStyles
};

exports.diagram = diagram;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FudHREaWFncmFtLWMzNjFhZDU0LTZjYjRlMDQ0LmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL21heC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbWluLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLWF4aXMvc3JjL2lkZW50aXR5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLWF4aXMvc3JjL2F4aXMuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL21hdGguanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2xhYi5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvaGNsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9uaWNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL2ludGVydmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL21pbGxpc2Vjb25kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL2R1cmF0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL3NlY29uZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy9taW51dGUuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtdGltZS9zcmMvaG91ci5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy9kYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtdGltZS9zcmMvd2Vlay5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy9tb250aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy95ZWFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL3RpY2tzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QzLXRpbWUtZm9ybWF0L3NyYy9sb2NhbGUuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtdGltZS1mb3JtYXQvc3JjL2RlZmF1bHRMb2NhbGUuanMiLCIuLi9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL3RpbWUuanMiLCIuLi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL2lzb1dlZWsuanMiLCIuLi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL2N1c3RvbVBhcnNlRm9ybWF0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9hZHZhbmNlZEZvcm1hdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZXJtYWlkL2Rpc3QvZ2FudHREaWFncmFtLWMzNjFhZDU0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1heCh2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgbGV0IG1heDtcbiAgaWYgKHZhbHVlb2YgPT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbFxuICAgICAgICAgICYmIChtYXggPCB2YWx1ZSB8fCAobWF4ID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gdmFsdWUpKSkge1xuICAgICAgICBtYXggPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVvZih2YWx1ZSwgKytpbmRleCwgdmFsdWVzKSkgIT0gbnVsbFxuICAgICAgICAgICYmIChtYXggPCB2YWx1ZSB8fCAobWF4ID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gdmFsdWUpKSkge1xuICAgICAgICBtYXggPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1heDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pbih2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgbGV0IG1pbjtcbiAgaWYgKHZhbHVlb2YgPT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbFxuICAgICAgICAgICYmIChtaW4gPiB2YWx1ZSB8fCAobWluID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gdmFsdWUpKSkge1xuICAgICAgICBtaW4gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVvZih2YWx1ZSwgKytpbmRleCwgdmFsdWVzKSkgIT0gbnVsbFxuICAgICAgICAgICYmIChtaW4gPiB2YWx1ZSB8fCAobWluID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gdmFsdWUpKSkge1xuICAgICAgICBtaW4gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1pbjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHg7XG59XG4iLCJpbXBvcnQgaWRlbnRpdHkgZnJvbSBcIi4vaWRlbnRpdHkuanNcIjtcblxudmFyIHRvcCA9IDEsXG4gICAgcmlnaHQgPSAyLFxuICAgIGJvdHRvbSA9IDMsXG4gICAgbGVmdCA9IDQsXG4gICAgZXBzaWxvbiA9IDFlLTY7XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVgoeCkge1xuICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsMClcIjtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlWSh5KSB7XG4gIHJldHVybiBcInRyYW5zbGF0ZSgwLFwiICsgeSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiBudW1iZXIoc2NhbGUpIHtcbiAgcmV0dXJuIGQgPT4gK3NjYWxlKGQpO1xufVxuXG5mdW5jdGlvbiBjZW50ZXIoc2NhbGUsIG9mZnNldCkge1xuICBvZmZzZXQgPSBNYXRoLm1heCgwLCBzY2FsZS5iYW5kd2lkdGgoKSAtIG9mZnNldCAqIDIpIC8gMjtcbiAgaWYgKHNjYWxlLnJvdW5kKCkpIG9mZnNldCA9IE1hdGgucm91bmQob2Zmc2V0KTtcbiAgcmV0dXJuIGQgPT4gK3NjYWxlKGQpICsgb2Zmc2V0O1xufVxuXG5mdW5jdGlvbiBlbnRlcmluZygpIHtcbiAgcmV0dXJuICF0aGlzLl9fYXhpcztcbn1cblxuZnVuY3Rpb24gYXhpcyhvcmllbnQsIHNjYWxlKSB7XG4gIHZhciB0aWNrQXJndW1lbnRzID0gW10sXG4gICAgICB0aWNrVmFsdWVzID0gbnVsbCxcbiAgICAgIHRpY2tGb3JtYXQgPSBudWxsLFxuICAgICAgdGlja1NpemVJbm5lciA9IDYsXG4gICAgICB0aWNrU2l6ZU91dGVyID0gNixcbiAgICAgIHRpY2tQYWRkaW5nID0gMyxcbiAgICAgIG9mZnNldCA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxID8gMCA6IDAuNSxcbiAgICAgIGsgPSBvcmllbnQgPT09IHRvcCB8fCBvcmllbnQgPT09IGxlZnQgPyAtMSA6IDEsXG4gICAgICB4ID0gb3JpZW50ID09PSBsZWZ0IHx8IG9yaWVudCA9PT0gcmlnaHQgPyBcInhcIiA6IFwieVwiLFxuICAgICAgdHJhbnNmb3JtID0gb3JpZW50ID09PSB0b3AgfHwgb3JpZW50ID09PSBib3R0b20gPyB0cmFuc2xhdGVYIDogdHJhbnNsYXRlWTtcblxuICBmdW5jdGlvbiBheGlzKGNvbnRleHQpIHtcbiAgICB2YXIgdmFsdWVzID0gdGlja1ZhbHVlcyA9PSBudWxsID8gKHNjYWxlLnRpY2tzID8gc2NhbGUudGlja3MuYXBwbHkoc2NhbGUsIHRpY2tBcmd1bWVudHMpIDogc2NhbGUuZG9tYWluKCkpIDogdGlja1ZhbHVlcyxcbiAgICAgICAgZm9ybWF0ID0gdGlja0Zvcm1hdCA9PSBudWxsID8gKHNjYWxlLnRpY2tGb3JtYXQgPyBzY2FsZS50aWNrRm9ybWF0LmFwcGx5KHNjYWxlLCB0aWNrQXJndW1lbnRzKSA6IGlkZW50aXR5KSA6IHRpY2tGb3JtYXQsXG4gICAgICAgIHNwYWNpbmcgPSBNYXRoLm1heCh0aWNrU2l6ZUlubmVyLCAwKSArIHRpY2tQYWRkaW5nLFxuICAgICAgICByYW5nZSA9IHNjYWxlLnJhbmdlKCksXG4gICAgICAgIHJhbmdlMCA9ICtyYW5nZVswXSArIG9mZnNldCxcbiAgICAgICAgcmFuZ2UxID0gK3JhbmdlW3JhbmdlLmxlbmd0aCAtIDFdICsgb2Zmc2V0LFxuICAgICAgICBwb3NpdGlvbiA9IChzY2FsZS5iYW5kd2lkdGggPyBjZW50ZXIgOiBudW1iZXIpKHNjYWxlLmNvcHkoKSwgb2Zmc2V0KSxcbiAgICAgICAgc2VsZWN0aW9uID0gY29udGV4dC5zZWxlY3Rpb24gPyBjb250ZXh0LnNlbGVjdGlvbigpIDogY29udGV4dCxcbiAgICAgICAgcGF0aCA9IHNlbGVjdGlvbi5zZWxlY3RBbGwoXCIuZG9tYWluXCIpLmRhdGEoW251bGxdKSxcbiAgICAgICAgdGljayA9IHNlbGVjdGlvbi5zZWxlY3RBbGwoXCIudGlja1wiKS5kYXRhKHZhbHVlcywgc2NhbGUpLm9yZGVyKCksXG4gICAgICAgIHRpY2tFeGl0ID0gdGljay5leGl0KCksXG4gICAgICAgIHRpY2tFbnRlciA9IHRpY2suZW50ZXIoKS5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcInRpY2tcIiksXG4gICAgICAgIGxpbmUgPSB0aWNrLnNlbGVjdChcImxpbmVcIiksXG4gICAgICAgIHRleHQgPSB0aWNrLnNlbGVjdChcInRleHRcIik7XG5cbiAgICBwYXRoID0gcGF0aC5tZXJnZShwYXRoLmVudGVyKCkuaW5zZXJ0KFwicGF0aFwiLCBcIi50aWNrXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJkb21haW5cIilcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJjdXJyZW50Q29sb3JcIikpO1xuXG4gICAgdGljayA9IHRpY2subWVyZ2UodGlja0VudGVyKTtcblxuICAgIGxpbmUgPSBsaW5lLm1lcmdlKHRpY2tFbnRlci5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiY3VycmVudENvbG9yXCIpXG4gICAgICAgIC5hdHRyKHggKyBcIjJcIiwgayAqIHRpY2tTaXplSW5uZXIpKTtcblxuICAgIHRleHQgPSB0ZXh0Lm1lcmdlKHRpY2tFbnRlci5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcImN1cnJlbnRDb2xvclwiKVxuICAgICAgICAuYXR0cih4LCBrICogc3BhY2luZylcbiAgICAgICAgLmF0dHIoXCJkeVwiLCBvcmllbnQgPT09IHRvcCA/IFwiMGVtXCIgOiBvcmllbnQgPT09IGJvdHRvbSA/IFwiMC43MWVtXCIgOiBcIjAuMzJlbVwiKSk7XG5cbiAgICBpZiAoY29udGV4dCAhPT0gc2VsZWN0aW9uKSB7XG4gICAgICBwYXRoID0gcGF0aC50cmFuc2l0aW9uKGNvbnRleHQpO1xuICAgICAgdGljayA9IHRpY2sudHJhbnNpdGlvbihjb250ZXh0KTtcbiAgICAgIGxpbmUgPSBsaW5lLnRyYW5zaXRpb24oY29udGV4dCk7XG4gICAgICB0ZXh0ID0gdGV4dC50cmFuc2l0aW9uKGNvbnRleHQpO1xuXG4gICAgICB0aWNrRXhpdCA9IHRpY2tFeGl0LnRyYW5zaXRpb24oY29udGV4dClcbiAgICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgZXBzaWxvbilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBpc0Zpbml0ZShkID0gcG9zaXRpb24oZCkpID8gdHJhbnNmb3JtKGQgKyBvZmZzZXQpIDogdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIik7IH0pO1xuXG4gICAgICB0aWNrRW50ZXJcbiAgICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgZXBzaWxvbilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHZhciBwID0gdGhpcy5wYXJlbnROb2RlLl9fYXhpczsgcmV0dXJuIHRyYW5zZm9ybSgocCAmJiBpc0Zpbml0ZShwID0gcChkKSkgPyBwIDogcG9zaXRpb24oZCkpICsgb2Zmc2V0KTsgfSk7XG4gICAgfVxuXG4gICAgdGlja0V4aXQucmVtb3ZlKCk7XG5cbiAgICBwYXRoXG4gICAgICAgIC5hdHRyKFwiZFwiLCBvcmllbnQgPT09IGxlZnQgfHwgb3JpZW50ID09PSByaWdodFxuICAgICAgICAgICAgPyAodGlja1NpemVPdXRlciA/IFwiTVwiICsgayAqIHRpY2tTaXplT3V0ZXIgKyBcIixcIiArIHJhbmdlMCArIFwiSFwiICsgb2Zmc2V0ICsgXCJWXCIgKyByYW5nZTEgKyBcIkhcIiArIGsgKiB0aWNrU2l6ZU91dGVyIDogXCJNXCIgKyBvZmZzZXQgKyBcIixcIiArIHJhbmdlMCArIFwiVlwiICsgcmFuZ2UxKVxuICAgICAgICAgICAgOiAodGlja1NpemVPdXRlciA/IFwiTVwiICsgcmFuZ2UwICsgXCIsXCIgKyBrICogdGlja1NpemVPdXRlciArIFwiVlwiICsgb2Zmc2V0ICsgXCJIXCIgKyByYW5nZTEgKyBcIlZcIiArIGsgKiB0aWNrU2l6ZU91dGVyIDogXCJNXCIgKyByYW5nZTAgKyBcIixcIiArIG9mZnNldCArIFwiSFwiICsgcmFuZ2UxKSk7XG5cbiAgICB0aWNrXG4gICAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCAxKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB0cmFuc2Zvcm0ocG9zaXRpb24oZCkgKyBvZmZzZXQpOyB9KTtcblxuICAgIGxpbmVcbiAgICAgICAgLmF0dHIoeCArIFwiMlwiLCBrICogdGlja1NpemVJbm5lcik7XG5cbiAgICB0ZXh0XG4gICAgICAgIC5hdHRyKHgsIGsgKiBzcGFjaW5nKVxuICAgICAgICAudGV4dChmb3JtYXQpO1xuXG4gICAgc2VsZWN0aW9uLmZpbHRlcihlbnRlcmluZylcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCAxMClcbiAgICAgICAgLmF0dHIoXCJmb250LWZhbWlseVwiLCBcInNhbnMtc2VyaWZcIilcbiAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBvcmllbnQgPT09IHJpZ2h0ID8gXCJzdGFydFwiIDogb3JpZW50ID09PSBsZWZ0ID8gXCJlbmRcIiA6IFwibWlkZGxlXCIpO1xuXG4gICAgc2VsZWN0aW9uXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkgeyB0aGlzLl9fYXhpcyA9IHBvc2l0aW9uOyB9KTtcbiAgfVxuXG4gIGF4aXMuc2NhbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc2NhbGUgPSBfLCBheGlzKSA6IHNjYWxlO1xuICB9O1xuXG4gIGF4aXMudGlja3MgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGlja0FyZ3VtZW50cyA9IEFycmF5LmZyb20oYXJndW1lbnRzKSwgYXhpcztcbiAgfTtcblxuICBheGlzLnRpY2tBcmd1bWVudHMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja0FyZ3VtZW50cyA9IF8gPT0gbnVsbCA/IFtdIDogQXJyYXkuZnJvbShfKSwgYXhpcykgOiB0aWNrQXJndW1lbnRzLnNsaWNlKCk7XG4gIH07XG5cbiAgYXhpcy50aWNrVmFsdWVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tWYWx1ZXMgPSBfID09IG51bGwgPyBudWxsIDogQXJyYXkuZnJvbShfKSwgYXhpcykgOiB0aWNrVmFsdWVzICYmIHRpY2tWYWx1ZXMuc2xpY2UoKTtcbiAgfTtcblxuICBheGlzLnRpY2tGb3JtYXQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja0Zvcm1hdCA9IF8sIGF4aXMpIDogdGlja0Zvcm1hdDtcbiAgfTtcblxuICBheGlzLnRpY2tTaXplID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tTaXplSW5uZXIgPSB0aWNrU2l6ZU91dGVyID0gK18sIGF4aXMpIDogdGlja1NpemVJbm5lcjtcbiAgfTtcblxuICBheGlzLnRpY2tTaXplSW5uZXIgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja1NpemVJbm5lciA9ICtfLCBheGlzKSA6IHRpY2tTaXplSW5uZXI7XG4gIH07XG5cbiAgYXhpcy50aWNrU2l6ZU91dGVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tTaXplT3V0ZXIgPSArXywgYXhpcykgOiB0aWNrU2l6ZU91dGVyO1xuICB9O1xuXG4gIGF4aXMudGlja1BhZGRpbmcgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja1BhZGRpbmcgPSArXywgYXhpcykgOiB0aWNrUGFkZGluZztcbiAgfTtcblxuICBheGlzLm9mZnNldCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChvZmZzZXQgPSArXywgYXhpcykgOiBvZmZzZXQ7XG4gIH07XG5cbiAgcmV0dXJuIGF4aXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlzVG9wKHNjYWxlKSB7XG4gIHJldHVybiBheGlzKHRvcCwgc2NhbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpc1JpZ2h0KHNjYWxlKSB7XG4gIHJldHVybiBheGlzKHJpZ2h0LCBzY2FsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlzQm90dG9tKHNjYWxlKSB7XG4gIHJldHVybiBheGlzKGJvdHRvbSwgc2NhbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpc0xlZnQoc2NhbGUpIHtcbiAgcmV0dXJuIGF4aXMobGVmdCwgc2NhbGUpO1xufVxuIiwiZXhwb3J0IGNvbnN0IHJhZGlhbnMgPSBNYXRoLlBJIC8gMTgwO1xuZXhwb3J0IGNvbnN0IGRlZ3JlZXMgPSAxODAgLyBNYXRoLlBJO1xuIiwiaW1wb3J0IGRlZmluZSwge2V4dGVuZH0gZnJvbSBcIi4vZGVmaW5lLmpzXCI7XG5pbXBvcnQge0NvbG9yLCByZ2JDb252ZXJ0LCBSZ2J9IGZyb20gXCIuL2NvbG9yLmpzXCI7XG5pbXBvcnQge2RlZ3JlZXMsIHJhZGlhbnN9IGZyb20gXCIuL21hdGguanNcIjtcblxuLy8gaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0BtYm9zdG9jay9sYWItYW5kLXJnYlxuY29uc3QgSyA9IDE4LFxuICAgIFhuID0gMC45NjQyMixcbiAgICBZbiA9IDEsXG4gICAgWm4gPSAwLjgyNTIxLFxuICAgIHQwID0gNCAvIDI5LFxuICAgIHQxID0gNiAvIDI5LFxuICAgIHQyID0gMyAqIHQxICogdDEsXG4gICAgdDMgPSB0MSAqIHQxICogdDE7XG5cbmZ1bmN0aW9uIGxhYkNvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIExhYikgcmV0dXJuIG5ldyBMYWIoby5sLCBvLmEsIG8uYiwgby5vcGFjaXR5KTtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIY2wpIHJldHVybiBoY2wybGFiKG8pO1xuICBpZiAoIShvIGluc3RhbmNlb2YgUmdiKSkgbyA9IHJnYkNvbnZlcnQobyk7XG4gIHZhciByID0gcmdiMmxyZ2Ioby5yKSxcbiAgICAgIGcgPSByZ2IybHJnYihvLmcpLFxuICAgICAgYiA9IHJnYjJscmdiKG8uYiksXG4gICAgICB5ID0geHl6MmxhYigoMC4yMjI1MDQ1ICogciArIDAuNzE2ODc4NiAqIGcgKyAwLjA2MDYxNjkgKiBiKSAvIFluKSwgeCwgejtcbiAgaWYgKHIgPT09IGcgJiYgZyA9PT0gYikgeCA9IHogPSB5OyBlbHNlIHtcbiAgICB4ID0geHl6MmxhYigoMC40MzYwNzQ3ICogciArIDAuMzg1MDY0OSAqIGcgKyAwLjE0MzA4MDQgKiBiKSAvIFhuKTtcbiAgICB6ID0geHl6MmxhYigoMC4wMTM5MzIyICogciArIDAuMDk3MTA0NSAqIGcgKyAwLjcxNDE3MzMgKiBiKSAvIFpuKTtcbiAgfVxuICByZXR1cm4gbmV3IExhYigxMTYgKiB5IC0gMTYsIDUwMCAqICh4IC0geSksIDIwMCAqICh5IC0geiksIG8ub3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmF5KGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIG5ldyBMYWIobCwgMCwgMCwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYWIobCwgYSwgYiwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGxhYkNvbnZlcnQobCkgOiBuZXcgTGFiKGwsIGEsIGIsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExhYihsLCBhLCBiLCBvcGFjaXR5KSB7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLmEgPSArYTtcbiAgdGhpcy5iID0gK2I7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoTGFiLCBsYWIsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcihrKSB7XG4gICAgcmV0dXJuIG5ldyBMYWIodGhpcy5sICsgSyAqIChrID09IG51bGwgPyAxIDogayksIHRoaXMuYSwgdGhpcy5iLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXIoaykge1xuICAgIHJldHVybiBuZXcgTGFiKHRoaXMubCAtIEsgKiAoayA9PSBudWxsID8gMSA6IGspLCB0aGlzLmEsIHRoaXMuYiwgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgcmdiKCkge1xuICAgIHZhciB5ID0gKHRoaXMubCArIDE2KSAvIDExNixcbiAgICAgICAgeCA9IGlzTmFOKHRoaXMuYSkgPyB5IDogeSArIHRoaXMuYSAvIDUwMCxcbiAgICAgICAgeiA9IGlzTmFOKHRoaXMuYikgPyB5IDogeSAtIHRoaXMuYiAvIDIwMDtcbiAgICB4ID0gWG4gKiBsYWIyeHl6KHgpO1xuICAgIHkgPSBZbiAqIGxhYjJ4eXooeSk7XG4gICAgeiA9IFpuICogbGFiMnh5eih6KTtcbiAgICByZXR1cm4gbmV3IFJnYihcbiAgICAgIGxyZ2IycmdiKCAzLjEzMzg1NjEgKiB4IC0gMS42MTY4NjY3ICogeSAtIDAuNDkwNjE0NiAqIHopLFxuICAgICAgbHJnYjJyZ2IoLTAuOTc4NzY4NCAqIHggKyAxLjkxNjE0MTUgKiB5ICsgMC4wMzM0NTQwICogeiksXG4gICAgICBscmdiMnJnYiggMC4wNzE5NDUzICogeCAtIDAuMjI4OTkxNCAqIHkgKyAxLjQwNTI0MjcgKiB6KSxcbiAgICAgIHRoaXMub3BhY2l0eVxuICAgICk7XG4gIH1cbn0pKTtcblxuZnVuY3Rpb24geHl6MmxhYih0KSB7XG4gIHJldHVybiB0ID4gdDMgPyBNYXRoLnBvdyh0LCAxIC8gMykgOiB0IC8gdDIgKyB0MDtcbn1cblxuZnVuY3Rpb24gbGFiMnh5eih0KSB7XG4gIHJldHVybiB0ID4gdDEgPyB0ICogdCAqIHQgOiB0MiAqICh0IC0gdDApO1xufVxuXG5mdW5jdGlvbiBscmdiMnJnYih4KSB7XG4gIHJldHVybiAyNTUgKiAoeCA8PSAwLjAwMzEzMDggPyAxMi45MiAqIHggOiAxLjA1NSAqIE1hdGgucG93KHgsIDEgLyAyLjQpIC0gMC4wNTUpO1xufVxuXG5mdW5jdGlvbiByZ2IybHJnYih4KSB7XG4gIHJldHVybiAoeCAvPSAyNTUpIDw9IDAuMDQwNDUgPyB4IC8gMTIuOTIgOiBNYXRoLnBvdygoeCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xufVxuXG5mdW5jdGlvbiBoY2xDb252ZXJ0KG8pIHtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIY2wpIHJldHVybiBuZXcgSGNsKG8uaCwgby5jLCBvLmwsIG8ub3BhY2l0eSk7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBMYWIpKSBvID0gbGFiQ29udmVydChvKTtcbiAgaWYgKG8uYSA9PT0gMCAmJiBvLmIgPT09IDApIHJldHVybiBuZXcgSGNsKE5hTiwgMCA8IG8ubCAmJiBvLmwgPCAxMDAgPyAwIDogTmFOLCBvLmwsIG8ub3BhY2l0eSk7XG4gIHZhciBoID0gTWF0aC5hdGFuMihvLmIsIG8uYSkgKiBkZWdyZWVzO1xuICByZXR1cm4gbmV3IEhjbChoIDwgMCA/IGggKyAzNjAgOiBoLCBNYXRoLnNxcnQoby5hICogby5hICsgby5iICogby5iKSwgby5sLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGNoKGwsIGMsIGgsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBoY2xDb252ZXJ0KGwpIDogbmV3IEhjbChoLCBjLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoY2woaCwgYywgbCwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGhjbENvbnZlcnQoaCkgOiBuZXcgSGNsKGgsIGMsIGwsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhjbChoLCBjLCBsLCBvcGFjaXR5KSB7XG4gIHRoaXMuaCA9ICtoO1xuICB0aGlzLmMgPSArYztcbiAgdGhpcy5sID0gK2w7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5mdW5jdGlvbiBoY2wybGFiKG8pIHtcbiAgaWYgKGlzTmFOKG8uaCkpIHJldHVybiBuZXcgTGFiKG8ubCwgMCwgMCwgby5vcGFjaXR5KTtcbiAgdmFyIGggPSBvLmggKiByYWRpYW5zO1xuICByZXR1cm4gbmV3IExhYihvLmwsIE1hdGguY29zKGgpICogby5jLCBNYXRoLnNpbihoKSAqIG8uYywgby5vcGFjaXR5KTtcbn1cblxuZGVmaW5lKEhjbCwgaGNsLCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXIoaykge1xuICAgIHJldHVybiBuZXcgSGNsKHRoaXMuaCwgdGhpcy5jLCB0aGlzLmwgKyBLICogKGsgPT0gbnVsbCA/IDEgOiBrKSwgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyKGspIHtcbiAgICByZXR1cm4gbmV3IEhjbCh0aGlzLmgsIHRoaXMuYywgdGhpcy5sIC0gSyAqIChrID09IG51bGwgPyAxIDogayksIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIHJnYigpIHtcbiAgICByZXR1cm4gaGNsMmxhYih0aGlzKS5yZ2IoKTtcbiAgfVxufSkpO1xuIiwiaW1wb3J0IHtoY2wgYXMgY29sb3JIY2x9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IGNvbG9yLCB7aHVlfSBmcm9tIFwiLi9jb2xvci5qc1wiO1xuXG5mdW5jdGlvbiBoY2woaHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgdmFyIGggPSBodWUoKHN0YXJ0ID0gY29sb3JIY2woc3RhcnQpKS5oLCAoZW5kID0gY29sb3JIY2woZW5kKSkuaCksXG4gICAgICAgIGMgPSBjb2xvcihzdGFydC5jLCBlbmQuYyksXG4gICAgICAgIGwgPSBjb2xvcihzdGFydC5sLCBlbmQubCksXG4gICAgICAgIG9wYWNpdHkgPSBjb2xvcihzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHN0YXJ0LmggPSBoKHQpO1xuICAgICAgc3RhcnQuYyA9IGModCk7XG4gICAgICBzdGFydC5sID0gbCh0KTtcbiAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgcmV0dXJuIHN0YXJ0ICsgXCJcIjtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhjbChodWUpO1xuZXhwb3J0IHZhciBoY2xMb25nID0gaGNsKGNvbG9yKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5pY2UoZG9tYWluLCBpbnRlcnZhbCkge1xuICBkb21haW4gPSBkb21haW4uc2xpY2UoKTtcblxuICB2YXIgaTAgPSAwLFxuICAgICAgaTEgPSBkb21haW4ubGVuZ3RoIC0gMSxcbiAgICAgIHgwID0gZG9tYWluW2kwXSxcbiAgICAgIHgxID0gZG9tYWluW2kxXSxcbiAgICAgIHQ7XG5cbiAgaWYgKHgxIDwgeDApIHtcbiAgICB0ID0gaTAsIGkwID0gaTEsIGkxID0gdDtcbiAgICB0ID0geDAsIHgwID0geDEsIHgxID0gdDtcbiAgfVxuXG4gIGRvbWFpbltpMF0gPSBpbnRlcnZhbC5mbG9vcih4MCk7XG4gIGRvbWFpbltpMV0gPSBpbnRlcnZhbC5jZWlsKHgxKTtcbiAgcmV0dXJuIGRvbWFpbjtcbn1cbiIsImNvbnN0IHQwID0gbmV3IERhdGUsIHQxID0gbmV3IERhdGU7XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lSW50ZXJ2YWwoZmxvb3JpLCBvZmZzZXRpLCBjb3VudCwgZmllbGQpIHtcblxuICBmdW5jdGlvbiBpbnRlcnZhbChkYXRlKSB7XG4gICAgcmV0dXJuIGZsb29yaShkYXRlID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMCA/IG5ldyBEYXRlIDogbmV3IERhdGUoK2RhdGUpKSwgZGF0ZTtcbiAgfVxuXG4gIGludGVydmFsLmZsb29yID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gZmxvb3JpKGRhdGUgPSBuZXcgRGF0ZSgrZGF0ZSkpLCBkYXRlO1xuICB9O1xuXG4gIGludGVydmFsLmNlaWwgPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBmbG9vcmkoZGF0ZSA9IG5ldyBEYXRlKGRhdGUgLSAxKSksIG9mZnNldGkoZGF0ZSwgMSksIGZsb29yaShkYXRlKSwgZGF0ZTtcbiAgfTtcblxuICBpbnRlcnZhbC5yb3VuZCA9IChkYXRlKSA9PiB7XG4gICAgY29uc3QgZDAgPSBpbnRlcnZhbChkYXRlKSwgZDEgPSBpbnRlcnZhbC5jZWlsKGRhdGUpO1xuICAgIHJldHVybiBkYXRlIC0gZDAgPCBkMSAtIGRhdGUgPyBkMCA6IGQxO1xuICB9O1xuXG4gIGludGVydmFsLm9mZnNldCA9IChkYXRlLCBzdGVwKSA9PiB7XG4gICAgcmV0dXJuIG9mZnNldGkoZGF0ZSA9IG5ldyBEYXRlKCtkYXRlKSwgc3RlcCA9PSBudWxsID8gMSA6IE1hdGguZmxvb3Ioc3RlcCkpLCBkYXRlO1xuICB9O1xuXG4gIGludGVydmFsLnJhbmdlID0gKHN0YXJ0LCBzdG9wLCBzdGVwKSA9PiB7XG4gICAgY29uc3QgcmFuZ2UgPSBbXTtcbiAgICBzdGFydCA9IGludGVydmFsLmNlaWwoc3RhcnQpO1xuICAgIHN0ZXAgPSBzdGVwID09IG51bGwgPyAxIDogTWF0aC5mbG9vcihzdGVwKTtcbiAgICBpZiAoIShzdGFydCA8IHN0b3ApIHx8ICEoc3RlcCA+IDApKSByZXR1cm4gcmFuZ2U7IC8vIGFsc28gaGFuZGxlcyBJbnZhbGlkIERhdGVcbiAgICBsZXQgcHJldmlvdXM7XG4gICAgZG8gcmFuZ2UucHVzaChwcmV2aW91cyA9IG5ldyBEYXRlKCtzdGFydCkpLCBvZmZzZXRpKHN0YXJ0LCBzdGVwKSwgZmxvb3JpKHN0YXJ0KTtcbiAgICB3aGlsZSAocHJldmlvdXMgPCBzdGFydCAmJiBzdGFydCA8IHN0b3ApO1xuICAgIHJldHVybiByYW5nZTtcbiAgfTtcblxuICBpbnRlcnZhbC5maWx0ZXIgPSAodGVzdCkgPT4ge1xuICAgIHJldHVybiB0aW1lSW50ZXJ2YWwoKGRhdGUpID0+IHtcbiAgICAgIGlmIChkYXRlID49IGRhdGUpIHdoaWxlIChmbG9vcmkoZGF0ZSksICF0ZXN0KGRhdGUpKSBkYXRlLnNldFRpbWUoZGF0ZSAtIDEpO1xuICAgIH0sIChkYXRlLCBzdGVwKSA9PiB7XG4gICAgICBpZiAoZGF0ZSA+PSBkYXRlKSB7XG4gICAgICAgIGlmIChzdGVwIDwgMCkgd2hpbGUgKCsrc3RlcCA8PSAwKSB7XG4gICAgICAgICAgd2hpbGUgKG9mZnNldGkoZGF0ZSwgLTEpLCAhdGVzdChkYXRlKSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuICAgICAgICB9IGVsc2Ugd2hpbGUgKC0tc3RlcCA+PSAwKSB7XG4gICAgICAgICAgd2hpbGUgKG9mZnNldGkoZGF0ZSwgKzEpLCAhdGVzdChkYXRlKSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKGNvdW50KSB7XG4gICAgaW50ZXJ2YWwuY291bnQgPSAoc3RhcnQsIGVuZCkgPT4ge1xuICAgICAgdDAuc2V0VGltZSgrc3RhcnQpLCB0MS5zZXRUaW1lKCtlbmQpO1xuICAgICAgZmxvb3JpKHQwKSwgZmxvb3JpKHQxKTtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGNvdW50KHQwLCB0MSkpO1xuICAgIH07XG5cbiAgICBpbnRlcnZhbC5ldmVyeSA9IChzdGVwKSA9PiB7XG4gICAgICBzdGVwID0gTWF0aC5mbG9vcihzdGVwKTtcbiAgICAgIHJldHVybiAhaXNGaW5pdGUoc3RlcCkgfHwgIShzdGVwID4gMCkgPyBudWxsXG4gICAgICAgICAgOiAhKHN0ZXAgPiAxKSA/IGludGVydmFsXG4gICAgICAgICAgOiBpbnRlcnZhbC5maWx0ZXIoZmllbGRcbiAgICAgICAgICAgICAgPyAoZCkgPT4gZmllbGQoZCkgJSBzdGVwID09PSAwXG4gICAgICAgICAgICAgIDogKGQpID0+IGludGVydmFsLmNvdW50KDAsIGQpICUgc3RlcCA9PT0gMCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBpbnRlcnZhbDtcbn1cbiIsImltcG9ydCB7dGltZUludGVydmFsfSBmcm9tIFwiLi9pbnRlcnZhbC5qc1wiO1xuXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmQgPSB0aW1lSW50ZXJ2YWwoKCkgPT4ge1xuICAvLyBub29wXG59LCAoZGF0ZSwgc3RlcCkgPT4ge1xuICBkYXRlLnNldFRpbWUoK2RhdGUgKyBzdGVwKTtcbn0sIChzdGFydCwgZW5kKSA9PiB7XG4gIHJldHVybiBlbmQgLSBzdGFydDtcbn0pO1xuXG4vLyBBbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gZm9yIHRoaXMgc2ltcGxlIGNhc2UuXG5taWxsaXNlY29uZC5ldmVyeSA9IChrKSA9PiB7XG4gIGsgPSBNYXRoLmZsb29yKGspO1xuICBpZiAoIWlzRmluaXRlKGspIHx8ICEoayA+IDApKSByZXR1cm4gbnVsbDtcbiAgaWYgKCEoayA+IDEpKSByZXR1cm4gbWlsbGlzZWNvbmQ7XG4gIHJldHVybiB0aW1lSW50ZXJ2YWwoKGRhdGUpID0+IHtcbiAgICBkYXRlLnNldFRpbWUoTWF0aC5mbG9vcihkYXRlIC8gaykgKiBrKTtcbiAgfSwgKGRhdGUsIHN0ZXApID0+IHtcbiAgICBkYXRlLnNldFRpbWUoK2RhdGUgKyBzdGVwICogayk7XG4gIH0sIChzdGFydCwgZW5kKSA9PiB7XG4gICAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBrO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZC5yYW5nZTtcbiIsImV4cG9ydCBjb25zdCBkdXJhdGlvblNlY29uZCA9IDEwMDA7XG5leHBvcnQgY29uc3QgZHVyYXRpb25NaW51dGUgPSBkdXJhdGlvblNlY29uZCAqIDYwO1xuZXhwb3J0IGNvbnN0IGR1cmF0aW9uSG91ciA9IGR1cmF0aW9uTWludXRlICogNjA7XG5leHBvcnQgY29uc3QgZHVyYXRpb25EYXkgPSBkdXJhdGlvbkhvdXIgKiAyNDtcbmV4cG9ydCBjb25zdCBkdXJhdGlvbldlZWsgPSBkdXJhdGlvbkRheSAqIDc7XG5leHBvcnQgY29uc3QgZHVyYXRpb25Nb250aCA9IGR1cmF0aW9uRGF5ICogMzA7XG5leHBvcnQgY29uc3QgZHVyYXRpb25ZZWFyID0gZHVyYXRpb25EYXkgKiAzNjU7XG4iLCJpbXBvcnQge3RpbWVJbnRlcnZhbH0gZnJvbSBcIi4vaW50ZXJ2YWwuanNcIjtcbmltcG9ydCB7ZHVyYXRpb25TZWNvbmR9IGZyb20gXCIuL2R1cmF0aW9uLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBzZWNvbmQgPSB0aW1lSW50ZXJ2YWwoKGRhdGUpID0+IHtcbiAgZGF0ZS5zZXRUaW1lKGRhdGUgLSBkYXRlLmdldE1pbGxpc2Vjb25kcygpKTtcbn0sIChkYXRlLCBzdGVwKSA9PiB7XG4gIGRhdGUuc2V0VGltZSgrZGF0ZSArIHN0ZXAgKiBkdXJhdGlvblNlY29uZCk7XG59LCAoc3RhcnQsIGVuZCkgPT4ge1xuICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAvIGR1cmF0aW9uU2Vjb25kO1xufSwgKGRhdGUpID0+IHtcbiAgcmV0dXJuIGRhdGUuZ2V0VVRDU2Vjb25kcygpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBzZWNvbmRzID0gc2Vjb25kLnJhbmdlO1xuIiwiaW1wb3J0IHt0aW1lSW50ZXJ2YWx9IGZyb20gXCIuL2ludGVydmFsLmpzXCI7XG5pbXBvcnQge2R1cmF0aW9uTWludXRlLCBkdXJhdGlvblNlY29uZH0gZnJvbSBcIi4vZHVyYXRpb24uanNcIjtcblxuZXhwb3J0IGNvbnN0IHRpbWVNaW51dGUgPSB0aW1lSW50ZXJ2YWwoKGRhdGUpID0+IHtcbiAgZGF0ZS5zZXRUaW1lKGRhdGUgLSBkYXRlLmdldE1pbGxpc2Vjb25kcygpIC0gZGF0ZS5nZXRTZWNvbmRzKCkgKiBkdXJhdGlvblNlY29uZCk7XG59LCAoZGF0ZSwgc3RlcCkgPT4ge1xuICBkYXRlLnNldFRpbWUoK2RhdGUgKyBzdGVwICogZHVyYXRpb25NaW51dGUpO1xufSwgKHN0YXJ0LCBlbmQpID0+IHtcbiAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBkdXJhdGlvbk1pbnV0ZTtcbn0sIChkYXRlKSA9PiB7XG4gIHJldHVybiBkYXRlLmdldE1pbnV0ZXMoKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgdGltZU1pbnV0ZXMgPSB0aW1lTWludXRlLnJhbmdlO1xuXG5leHBvcnQgY29uc3QgdXRjTWludXRlID0gdGltZUludGVydmFsKChkYXRlKSA9PiB7XG4gIGRhdGUuc2V0VVRDU2Vjb25kcygwLCAwKTtcbn0sIChkYXRlLCBzdGVwKSA9PiB7XG4gIGRhdGUuc2V0VGltZSgrZGF0ZSArIHN0ZXAgKiBkdXJhdGlvbk1pbnV0ZSk7XG59LCAoc3RhcnQsIGVuZCkgPT4ge1xuICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAvIGR1cmF0aW9uTWludXRlO1xufSwgKGRhdGUpID0+IHtcbiAgcmV0dXJuIGRhdGUuZ2V0VVRDTWludXRlcygpO1xufSk7XG5cbmV4cG9ydCBjb25zdCB1dGNNaW51dGVzID0gdXRjTWludXRlLnJhbmdlO1xuIiwiaW1wb3J0IHt0aW1lSW50ZXJ2YWx9IGZyb20gXCIuL2ludGVydmFsLmpzXCI7XG5pbXBvcnQge2R1cmF0aW9uSG91ciwgZHVyYXRpb25NaW51dGUsIGR1cmF0aW9uU2Vjb25kfSBmcm9tIFwiLi9kdXJhdGlvbi5qc1wiO1xuXG5leHBvcnQgY29uc3QgdGltZUhvdXIgPSB0aW1lSW50ZXJ2YWwoKGRhdGUpID0+IHtcbiAgZGF0ZS5zZXRUaW1lKGRhdGUgLSBkYXRlLmdldE1pbGxpc2Vjb25kcygpIC0gZGF0ZS5nZXRTZWNvbmRzKCkgKiBkdXJhdGlvblNlY29uZCAtIGRhdGUuZ2V0TWludXRlcygpICogZHVyYXRpb25NaW51dGUpO1xufSwgKGRhdGUsIHN0ZXApID0+IHtcbiAgZGF0ZS5zZXRUaW1lKCtkYXRlICsgc3RlcCAqIGR1cmF0aW9uSG91cik7XG59LCAoc3RhcnQsIGVuZCkgPT4ge1xuICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAvIGR1cmF0aW9uSG91cjtcbn0sIChkYXRlKSA9PiB7XG4gIHJldHVybiBkYXRlLmdldEhvdXJzKCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHRpbWVIb3VycyA9IHRpbWVIb3VyLnJhbmdlO1xuXG5leHBvcnQgY29uc3QgdXRjSG91ciA9IHRpbWVJbnRlcnZhbCgoZGF0ZSkgPT4ge1xuICBkYXRlLnNldFVUQ01pbnV0ZXMoMCwgMCwgMCk7XG59LCAoZGF0ZSwgc3RlcCkgPT4ge1xuICBkYXRlLnNldFRpbWUoK2RhdGUgKyBzdGVwICogZHVyYXRpb25Ib3VyKTtcbn0sIChzdGFydCwgZW5kKSA9PiB7XG4gIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gZHVyYXRpb25Ib3VyO1xufSwgKGRhdGUpID0+IHtcbiAgcmV0dXJuIGRhdGUuZ2V0VVRDSG91cnMoKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgdXRjSG91cnMgPSB1dGNIb3VyLnJhbmdlO1xuIiwiaW1wb3J0IHt0aW1lSW50ZXJ2YWx9IGZyb20gXCIuL2ludGVydmFsLmpzXCI7XG5pbXBvcnQge2R1cmF0aW9uRGF5LCBkdXJhdGlvbk1pbnV0ZX0gZnJvbSBcIi4vZHVyYXRpb24uanNcIjtcblxuZXhwb3J0IGNvbnN0IHRpbWVEYXkgPSB0aW1lSW50ZXJ2YWwoXG4gIGRhdGUgPT4gZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKSxcbiAgKGRhdGUsIHN0ZXApID0+IGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIHN0ZXApLFxuICAoc3RhcnQsIGVuZCkgPT4gKGVuZCAtIHN0YXJ0IC0gKGVuZC5nZXRUaW1lem9uZU9mZnNldCgpIC0gc3RhcnQuZ2V0VGltZXpvbmVPZmZzZXQoKSkgKiBkdXJhdGlvbk1pbnV0ZSkgLyBkdXJhdGlvbkRheSxcbiAgZGF0ZSA9PiBkYXRlLmdldERhdGUoKSAtIDFcbik7XG5cbmV4cG9ydCBjb25zdCB0aW1lRGF5cyA9IHRpbWVEYXkucmFuZ2U7XG5cbmV4cG9ydCBjb25zdCB1dGNEYXkgPSB0aW1lSW50ZXJ2YWwoKGRhdGUpID0+IHtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbn0sIChkYXRlLCBzdGVwKSA9PiB7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIHN0ZXApO1xufSwgKHN0YXJ0LCBlbmQpID0+IHtcbiAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBkdXJhdGlvbkRheTtcbn0sIChkYXRlKSA9PiB7XG4gIHJldHVybiBkYXRlLmdldFVUQ0RhdGUoKSAtIDE7XG59KTtcblxuZXhwb3J0IGNvbnN0IHV0Y0RheXMgPSB1dGNEYXkucmFuZ2U7XG5cbmV4cG9ydCBjb25zdCB1bml4RGF5ID0gdGltZUludGVydmFsKChkYXRlKSA9PiB7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG59LCAoZGF0ZSwgc3RlcCkgPT4ge1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBzdGVwKTtcbn0sIChzdGFydCwgZW5kKSA9PiB7XG4gIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gZHVyYXRpb25EYXk7XG59LCAoZGF0ZSkgPT4ge1xuICByZXR1cm4gTWF0aC5mbG9vcihkYXRlIC8gZHVyYXRpb25EYXkpO1xufSk7XG5cbmV4cG9ydCBjb25zdCB1bml4RGF5cyA9IHVuaXhEYXkucmFuZ2U7XG4iLCJpbXBvcnQge3RpbWVJbnRlcnZhbH0gZnJvbSBcIi4vaW50ZXJ2YWwuanNcIjtcbmltcG9ydCB7ZHVyYXRpb25NaW51dGUsIGR1cmF0aW9uV2Vla30gZnJvbSBcIi4vZHVyYXRpb24uanNcIjtcblxuZnVuY3Rpb24gdGltZVdlZWtkYXkoaSkge1xuICByZXR1cm4gdGltZUludGVydmFsKChkYXRlKSA9PiB7XG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gKGRhdGUuZ2V0RGF5KCkgKyA3IC0gaSkgJSA3KTtcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICB9LCAoZGF0ZSwgc3RlcCkgPT4ge1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIHN0ZXAgKiA3KTtcbiAgfSwgKHN0YXJ0LCBlbmQpID0+IHtcbiAgICByZXR1cm4gKGVuZCAtIHN0YXJ0IC0gKGVuZC5nZXRUaW1lem9uZU9mZnNldCgpIC0gc3RhcnQuZ2V0VGltZXpvbmVPZmZzZXQoKSkgKiBkdXJhdGlvbk1pbnV0ZSkgLyBkdXJhdGlvbldlZWs7XG4gIH0pO1xufVxuXG5leHBvcnQgY29uc3QgdGltZVN1bmRheSA9IHRpbWVXZWVrZGF5KDApO1xuZXhwb3J0IGNvbnN0IHRpbWVNb25kYXkgPSB0aW1lV2Vla2RheSgxKTtcbmV4cG9ydCBjb25zdCB0aW1lVHVlc2RheSA9IHRpbWVXZWVrZGF5KDIpO1xuZXhwb3J0IGNvbnN0IHRpbWVXZWRuZXNkYXkgPSB0aW1lV2Vla2RheSgzKTtcbmV4cG9ydCBjb25zdCB0aW1lVGh1cnNkYXkgPSB0aW1lV2Vla2RheSg0KTtcbmV4cG9ydCBjb25zdCB0aW1lRnJpZGF5ID0gdGltZVdlZWtkYXkoNSk7XG5leHBvcnQgY29uc3QgdGltZVNhdHVyZGF5ID0gdGltZVdlZWtkYXkoNik7XG5cbmV4cG9ydCBjb25zdCB0aW1lU3VuZGF5cyA9IHRpbWVTdW5kYXkucmFuZ2U7XG5leHBvcnQgY29uc3QgdGltZU1vbmRheXMgPSB0aW1lTW9uZGF5LnJhbmdlO1xuZXhwb3J0IGNvbnN0IHRpbWVUdWVzZGF5cyA9IHRpbWVUdWVzZGF5LnJhbmdlO1xuZXhwb3J0IGNvbnN0IHRpbWVXZWRuZXNkYXlzID0gdGltZVdlZG5lc2RheS5yYW5nZTtcbmV4cG9ydCBjb25zdCB0aW1lVGh1cnNkYXlzID0gdGltZVRodXJzZGF5LnJhbmdlO1xuZXhwb3J0IGNvbnN0IHRpbWVGcmlkYXlzID0gdGltZUZyaWRheS5yYW5nZTtcbmV4cG9ydCBjb25zdCB0aW1lU2F0dXJkYXlzID0gdGltZVNhdHVyZGF5LnJhbmdlO1xuXG5mdW5jdGlvbiB1dGNXZWVrZGF5KGkpIHtcbiAgcmV0dXJuIHRpbWVJbnRlcnZhbCgoZGF0ZSkgPT4ge1xuICAgIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIChkYXRlLmdldFVUQ0RheSgpICsgNyAtIGkpICUgNyk7XG4gICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgfSwgKGRhdGUsIHN0ZXApID0+IHtcbiAgICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBzdGVwICogNyk7XG4gIH0sIChzdGFydCwgZW5kKSA9PiB7XG4gICAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBkdXJhdGlvbldlZWs7XG4gIH0pO1xufVxuXG5leHBvcnQgY29uc3QgdXRjU3VuZGF5ID0gdXRjV2Vla2RheSgwKTtcbmV4cG9ydCBjb25zdCB1dGNNb25kYXkgPSB1dGNXZWVrZGF5KDEpO1xuZXhwb3J0IGNvbnN0IHV0Y1R1ZXNkYXkgPSB1dGNXZWVrZGF5KDIpO1xuZXhwb3J0IGNvbnN0IHV0Y1dlZG5lc2RheSA9IHV0Y1dlZWtkYXkoMyk7XG5leHBvcnQgY29uc3QgdXRjVGh1cnNkYXkgPSB1dGNXZWVrZGF5KDQpO1xuZXhwb3J0IGNvbnN0IHV0Y0ZyaWRheSA9IHV0Y1dlZWtkYXkoNSk7XG5leHBvcnQgY29uc3QgdXRjU2F0dXJkYXkgPSB1dGNXZWVrZGF5KDYpO1xuXG5leHBvcnQgY29uc3QgdXRjU3VuZGF5cyA9IHV0Y1N1bmRheS5yYW5nZTtcbmV4cG9ydCBjb25zdCB1dGNNb25kYXlzID0gdXRjTW9uZGF5LnJhbmdlO1xuZXhwb3J0IGNvbnN0IHV0Y1R1ZXNkYXlzID0gdXRjVHVlc2RheS5yYW5nZTtcbmV4cG9ydCBjb25zdCB1dGNXZWRuZXNkYXlzID0gdXRjV2VkbmVzZGF5LnJhbmdlO1xuZXhwb3J0IGNvbnN0IHV0Y1RodXJzZGF5cyA9IHV0Y1RodXJzZGF5LnJhbmdlO1xuZXhwb3J0IGNvbnN0IHV0Y0ZyaWRheXMgPSB1dGNGcmlkYXkucmFuZ2U7XG5leHBvcnQgY29uc3QgdXRjU2F0dXJkYXlzID0gdXRjU2F0dXJkYXkucmFuZ2U7XG4iLCJpbXBvcnQge3RpbWVJbnRlcnZhbH0gZnJvbSBcIi4vaW50ZXJ2YWwuanNcIjtcblxuZXhwb3J0IGNvbnN0IHRpbWVNb250aCA9IHRpbWVJbnRlcnZhbCgoZGF0ZSkgPT4ge1xuICBkYXRlLnNldERhdGUoMSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG59LCAoZGF0ZSwgc3RlcCkgPT4ge1xuICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIHN0ZXApO1xufSwgKHN0YXJ0LCBlbmQpID0+IHtcbiAgcmV0dXJuIGVuZC5nZXRNb250aCgpIC0gc3RhcnQuZ2V0TW9udGgoKSArIChlbmQuZ2V0RnVsbFllYXIoKSAtIHN0YXJ0LmdldEZ1bGxZZWFyKCkpICogMTI7XG59LCAoZGF0ZSkgPT4ge1xuICByZXR1cm4gZGF0ZS5nZXRNb250aCgpO1xufSk7XG5cbmV4cG9ydCBjb25zdCB0aW1lTW9udGhzID0gdGltZU1vbnRoLnJhbmdlO1xuXG5leHBvcnQgY29uc3QgdXRjTW9udGggPSB0aW1lSW50ZXJ2YWwoKGRhdGUpID0+IHtcbiAgZGF0ZS5zZXRVVENEYXRlKDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xufSwgKGRhdGUsIHN0ZXApID0+IHtcbiAgZGF0ZS5zZXRVVENNb250aChkYXRlLmdldFVUQ01vbnRoKCkgKyBzdGVwKTtcbn0sIChzdGFydCwgZW5kKSA9PiB7XG4gIHJldHVybiBlbmQuZ2V0VVRDTW9udGgoKSAtIHN0YXJ0LmdldFVUQ01vbnRoKCkgKyAoZW5kLmdldFVUQ0Z1bGxZZWFyKCkgLSBzdGFydC5nZXRVVENGdWxsWWVhcigpKSAqIDEyO1xufSwgKGRhdGUpID0+IHtcbiAgcmV0dXJuIGRhdGUuZ2V0VVRDTW9udGgoKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgdXRjTW9udGhzID0gdXRjTW9udGgucmFuZ2U7XG4iLCJpbXBvcnQge3RpbWVJbnRlcnZhbH0gZnJvbSBcIi4vaW50ZXJ2YWwuanNcIjtcblxuZXhwb3J0IGNvbnN0IHRpbWVZZWFyID0gdGltZUludGVydmFsKChkYXRlKSA9PiB7XG4gIGRhdGUuc2V0TW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG59LCAoZGF0ZSwgc3RlcCkgPT4ge1xuICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSArIHN0ZXApO1xufSwgKHN0YXJ0LCBlbmQpID0+IHtcbiAgcmV0dXJuIGVuZC5nZXRGdWxsWWVhcigpIC0gc3RhcnQuZ2V0RnVsbFllYXIoKTtcbn0sIChkYXRlKSA9PiB7XG4gIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCk7XG59KTtcblxuLy8gQW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIGZvciB0aGlzIHNpbXBsZSBjYXNlLlxudGltZVllYXIuZXZlcnkgPSAoaykgPT4ge1xuICByZXR1cm4gIWlzRmluaXRlKGsgPSBNYXRoLmZsb29yKGspKSB8fCAhKGsgPiAwKSA/IG51bGwgOiB0aW1lSW50ZXJ2YWwoKGRhdGUpID0+IHtcbiAgICBkYXRlLnNldEZ1bGxZZWFyKE1hdGguZmxvb3IoZGF0ZS5nZXRGdWxsWWVhcigpIC8gaykgKiBrKTtcbiAgICBkYXRlLnNldE1vbnRoKDAsIDEpO1xuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIH0sIChkYXRlLCBzdGVwKSA9PiB7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyBzdGVwICogayk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHRpbWVZZWFycyA9IHRpbWVZZWFyLnJhbmdlO1xuXG5leHBvcnQgY29uc3QgdXRjWWVhciA9IHRpbWVJbnRlcnZhbCgoZGF0ZSkgPT4ge1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xufSwgKGRhdGUsIHN0ZXApID0+IHtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgKyBzdGVwKTtcbn0sIChzdGFydCwgZW5kKSA9PiB7XG4gIHJldHVybiBlbmQuZ2V0VVRDRnVsbFllYXIoKSAtIHN0YXJ0LmdldFVUQ0Z1bGxZZWFyKCk7XG59LCAoZGF0ZSkgPT4ge1xuICByZXR1cm4gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xufSk7XG5cbi8vIEFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBmb3IgdGhpcyBzaW1wbGUgY2FzZS5cbnV0Y1llYXIuZXZlcnkgPSAoaykgPT4ge1xuICByZXR1cm4gIWlzRmluaXRlKGsgPSBNYXRoLmZsb29yKGspKSB8fCAhKGsgPiAwKSA/IG51bGwgOiB0aW1lSW50ZXJ2YWwoKGRhdGUpID0+IHtcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKE1hdGguZmxvb3IoZGF0ZS5nZXRVVENGdWxsWWVhcigpIC8gaykgKiBrKTtcbiAgICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIH0sIChkYXRlLCBzdGVwKSA9PiB7XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgKyBzdGVwICogayk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHV0Y1llYXJzID0gdXRjWWVhci5yYW5nZTtcbiIsImltcG9ydCB7YmlzZWN0b3IsIHRpY2tTdGVwfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7ZHVyYXRpb25EYXksIGR1cmF0aW9uSG91ciwgZHVyYXRpb25NaW51dGUsIGR1cmF0aW9uTW9udGgsIGR1cmF0aW9uU2Vjb25kLCBkdXJhdGlvbldlZWssIGR1cmF0aW9uWWVhcn0gZnJvbSBcIi4vZHVyYXRpb24uanNcIjtcbmltcG9ydCB7bWlsbGlzZWNvbmR9IGZyb20gXCIuL21pbGxpc2Vjb25kLmpzXCI7XG5pbXBvcnQge3NlY29uZH0gZnJvbSBcIi4vc2Vjb25kLmpzXCI7XG5pbXBvcnQge3RpbWVNaW51dGUsIHV0Y01pbnV0ZX0gZnJvbSBcIi4vbWludXRlLmpzXCI7XG5pbXBvcnQge3RpbWVIb3VyLCB1dGNIb3VyfSBmcm9tIFwiLi9ob3VyLmpzXCI7XG5pbXBvcnQge3RpbWVEYXksIHVuaXhEYXl9IGZyb20gXCIuL2RheS5qc1wiO1xuaW1wb3J0IHt0aW1lU3VuZGF5LCB1dGNTdW5kYXl9IGZyb20gXCIuL3dlZWsuanNcIjtcbmltcG9ydCB7dGltZU1vbnRoLCB1dGNNb250aH0gZnJvbSBcIi4vbW9udGguanNcIjtcbmltcG9ydCB7dGltZVllYXIsIHV0Y1llYXJ9IGZyb20gXCIuL3llYXIuanNcIjtcblxuZnVuY3Rpb24gdGlja2VyKHllYXIsIG1vbnRoLCB3ZWVrLCBkYXksIGhvdXIsIG1pbnV0ZSkge1xuXG4gIGNvbnN0IHRpY2tJbnRlcnZhbHMgPSBbXG4gICAgW3NlY29uZCwgIDEsICAgICAgZHVyYXRpb25TZWNvbmRdLFxuICAgIFtzZWNvbmQsICA1LCAgNSAqIGR1cmF0aW9uU2Vjb25kXSxcbiAgICBbc2Vjb25kLCAxNSwgMTUgKiBkdXJhdGlvblNlY29uZF0sXG4gICAgW3NlY29uZCwgMzAsIDMwICogZHVyYXRpb25TZWNvbmRdLFxuICAgIFttaW51dGUsICAxLCAgICAgIGR1cmF0aW9uTWludXRlXSxcbiAgICBbbWludXRlLCAgNSwgIDUgKiBkdXJhdGlvbk1pbnV0ZV0sXG4gICAgW21pbnV0ZSwgMTUsIDE1ICogZHVyYXRpb25NaW51dGVdLFxuICAgIFttaW51dGUsIDMwLCAzMCAqIGR1cmF0aW9uTWludXRlXSxcbiAgICBbICBob3VyLCAgMSwgICAgICBkdXJhdGlvbkhvdXIgIF0sXG4gICAgWyAgaG91ciwgIDMsICAzICogZHVyYXRpb25Ib3VyICBdLFxuICAgIFsgIGhvdXIsICA2LCAgNiAqIGR1cmF0aW9uSG91ciAgXSxcbiAgICBbICBob3VyLCAxMiwgMTIgKiBkdXJhdGlvbkhvdXIgIF0sXG4gICAgWyAgIGRheSwgIDEsICAgICAgZHVyYXRpb25EYXkgICBdLFxuICAgIFsgICBkYXksICAyLCAgMiAqIGR1cmF0aW9uRGF5ICAgXSxcbiAgICBbICB3ZWVrLCAgMSwgICAgICBkdXJhdGlvbldlZWsgIF0sXG4gICAgWyBtb250aCwgIDEsICAgICAgZHVyYXRpb25Nb250aCBdLFxuICAgIFsgbW9udGgsICAzLCAgMyAqIGR1cmF0aW9uTW9udGggXSxcbiAgICBbICB5ZWFyLCAgMSwgICAgICBkdXJhdGlvblllYXIgIF1cbiAgXTtcblxuICBmdW5jdGlvbiB0aWNrcyhzdGFydCwgc3RvcCwgY291bnQpIHtcbiAgICBjb25zdCByZXZlcnNlID0gc3RvcCA8IHN0YXJ0O1xuICAgIGlmIChyZXZlcnNlKSBbc3RhcnQsIHN0b3BdID0gW3N0b3AsIHN0YXJ0XTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IGNvdW50ICYmIHR5cGVvZiBjb3VudC5yYW5nZSA9PT0gXCJmdW5jdGlvblwiID8gY291bnQgOiB0aWNrSW50ZXJ2YWwoc3RhcnQsIHN0b3AsIGNvdW50KTtcbiAgICBjb25zdCB0aWNrcyA9IGludGVydmFsID8gaW50ZXJ2YWwucmFuZ2Uoc3RhcnQsICtzdG9wICsgMSkgOiBbXTsgLy8gaW5jbHVzaXZlIHN0b3BcbiAgICByZXR1cm4gcmV2ZXJzZSA/IHRpY2tzLnJldmVyc2UoKSA6IHRpY2tzO1xuICB9XG5cbiAgZnVuY3Rpb24gdGlja0ludGVydmFsKHN0YXJ0LCBzdG9wLCBjb3VudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IE1hdGguYWJzKHN0b3AgLSBzdGFydCkgLyBjb3VudDtcbiAgICBjb25zdCBpID0gYmlzZWN0b3IoKFssLCBzdGVwXSkgPT4gc3RlcCkucmlnaHQodGlja0ludGVydmFscywgdGFyZ2V0KTtcbiAgICBpZiAoaSA9PT0gdGlja0ludGVydmFscy5sZW5ndGgpIHJldHVybiB5ZWFyLmV2ZXJ5KHRpY2tTdGVwKHN0YXJ0IC8gZHVyYXRpb25ZZWFyLCBzdG9wIC8gZHVyYXRpb25ZZWFyLCBjb3VudCkpO1xuICAgIGlmIChpID09PSAwKSByZXR1cm4gbWlsbGlzZWNvbmQuZXZlcnkoTWF0aC5tYXgodGlja1N0ZXAoc3RhcnQsIHN0b3AsIGNvdW50KSwgMSkpO1xuICAgIGNvbnN0IFt0LCBzdGVwXSA9IHRpY2tJbnRlcnZhbHNbdGFyZ2V0IC8gdGlja0ludGVydmFsc1tpIC0gMV1bMl0gPCB0aWNrSW50ZXJ2YWxzW2ldWzJdIC8gdGFyZ2V0ID8gaSAtIDEgOiBpXTtcbiAgICByZXR1cm4gdC5ldmVyeShzdGVwKTtcbiAgfVxuXG4gIHJldHVybiBbdGlja3MsIHRpY2tJbnRlcnZhbF07XG59XG5cbmNvbnN0IFt1dGNUaWNrcywgdXRjVGlja0ludGVydmFsXSA9IHRpY2tlcih1dGNZZWFyLCB1dGNNb250aCwgdXRjU3VuZGF5LCB1bml4RGF5LCB1dGNIb3VyLCB1dGNNaW51dGUpO1xuY29uc3QgW3RpbWVUaWNrcywgdGltZVRpY2tJbnRlcnZhbF0gPSB0aWNrZXIodGltZVllYXIsIHRpbWVNb250aCwgdGltZVN1bmRheSwgdGltZURheSwgdGltZUhvdXIsIHRpbWVNaW51dGUpO1xuXG5leHBvcnQge3V0Y1RpY2tzLCB1dGNUaWNrSW50ZXJ2YWwsIHRpbWVUaWNrcywgdGltZVRpY2tJbnRlcnZhbH07XG4iLCJpbXBvcnQge1xuICB0aW1lRGF5LFxuICB0aW1lU3VuZGF5LFxuICB0aW1lTW9uZGF5LFxuICB0aW1lVGh1cnNkYXksXG4gIHRpbWVZZWFyLFxuICB1dGNEYXksXG4gIHV0Y1N1bmRheSxcbiAgdXRjTW9uZGF5LFxuICB1dGNUaHVyc2RheSxcbiAgdXRjWWVhclxufSBmcm9tIFwiZDMtdGltZVwiO1xuXG5mdW5jdGlvbiBsb2NhbERhdGUoZCkge1xuICBpZiAoMCA8PSBkLnkgJiYgZC55IDwgMTAwKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgtMSwgZC5tLCBkLmQsIGQuSCwgZC5NLCBkLlMsIGQuTCk7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcihkLnkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIHJldHVybiBuZXcgRGF0ZShkLnksIGQubSwgZC5kLCBkLkgsIGQuTSwgZC5TLCBkLkwpO1xufVxuXG5mdW5jdGlvbiB1dGNEYXRlKGQpIHtcbiAgaWYgKDAgPD0gZC55ICYmIGQueSA8IDEwMCkge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoLTEsIGQubSwgZC5kLCBkLkgsIGQuTSwgZC5TLCBkLkwpKTtcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGQueSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbiAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKGQueSwgZC5tLCBkLmQsIGQuSCwgZC5NLCBkLlMsIGQuTCkpO1xufVxuXG5mdW5jdGlvbiBuZXdEYXRlKHksIG0sIGQpIHtcbiAgcmV0dXJuIHt5OiB5LCBtOiBtLCBkOiBkLCBIOiAwLCBNOiAwLCBTOiAwLCBMOiAwfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9jYWxlKGxvY2FsZSkge1xuICB2YXIgbG9jYWxlX2RhdGVUaW1lID0gbG9jYWxlLmRhdGVUaW1lLFxuICAgICAgbG9jYWxlX2RhdGUgPSBsb2NhbGUuZGF0ZSxcbiAgICAgIGxvY2FsZV90aW1lID0gbG9jYWxlLnRpbWUsXG4gICAgICBsb2NhbGVfcGVyaW9kcyA9IGxvY2FsZS5wZXJpb2RzLFxuICAgICAgbG9jYWxlX3dlZWtkYXlzID0gbG9jYWxlLmRheXMsXG4gICAgICBsb2NhbGVfc2hvcnRXZWVrZGF5cyA9IGxvY2FsZS5zaG9ydERheXMsXG4gICAgICBsb2NhbGVfbW9udGhzID0gbG9jYWxlLm1vbnRocyxcbiAgICAgIGxvY2FsZV9zaG9ydE1vbnRocyA9IGxvY2FsZS5zaG9ydE1vbnRocztcblxuICB2YXIgcGVyaW9kUmUgPSBmb3JtYXRSZShsb2NhbGVfcGVyaW9kcyksXG4gICAgICBwZXJpb2RMb29rdXAgPSBmb3JtYXRMb29rdXAobG9jYWxlX3BlcmlvZHMpLFxuICAgICAgd2Vla2RheVJlID0gZm9ybWF0UmUobG9jYWxlX3dlZWtkYXlzKSxcbiAgICAgIHdlZWtkYXlMb29rdXAgPSBmb3JtYXRMb29rdXAobG9jYWxlX3dlZWtkYXlzKSxcbiAgICAgIHNob3J0V2Vla2RheVJlID0gZm9ybWF0UmUobG9jYWxlX3Nob3J0V2Vla2RheXMpLFxuICAgICAgc2hvcnRXZWVrZGF5TG9va3VwID0gZm9ybWF0TG9va3VwKGxvY2FsZV9zaG9ydFdlZWtkYXlzKSxcbiAgICAgIG1vbnRoUmUgPSBmb3JtYXRSZShsb2NhbGVfbW9udGhzKSxcbiAgICAgIG1vbnRoTG9va3VwID0gZm9ybWF0TG9va3VwKGxvY2FsZV9tb250aHMpLFxuICAgICAgc2hvcnRNb250aFJlID0gZm9ybWF0UmUobG9jYWxlX3Nob3J0TW9udGhzKSxcbiAgICAgIHNob3J0TW9udGhMb29rdXAgPSBmb3JtYXRMb29rdXAobG9jYWxlX3Nob3J0TW9udGhzKTtcblxuICB2YXIgZm9ybWF0cyA9IHtcbiAgICBcImFcIjogZm9ybWF0U2hvcnRXZWVrZGF5LFxuICAgIFwiQVwiOiBmb3JtYXRXZWVrZGF5LFxuICAgIFwiYlwiOiBmb3JtYXRTaG9ydE1vbnRoLFxuICAgIFwiQlwiOiBmb3JtYXRNb250aCxcbiAgICBcImNcIjogbnVsbCxcbiAgICBcImRcIjogZm9ybWF0RGF5T2ZNb250aCxcbiAgICBcImVcIjogZm9ybWF0RGF5T2ZNb250aCxcbiAgICBcImZcIjogZm9ybWF0TWljcm9zZWNvbmRzLFxuICAgIFwiZ1wiOiBmb3JtYXRZZWFySVNPLFxuICAgIFwiR1wiOiBmb3JtYXRGdWxsWWVhcklTTyxcbiAgICBcIkhcIjogZm9ybWF0SG91cjI0LFxuICAgIFwiSVwiOiBmb3JtYXRIb3VyMTIsXG4gICAgXCJqXCI6IGZvcm1hdERheU9mWWVhcixcbiAgICBcIkxcIjogZm9ybWF0TWlsbGlzZWNvbmRzLFxuICAgIFwibVwiOiBmb3JtYXRNb250aE51bWJlcixcbiAgICBcIk1cIjogZm9ybWF0TWludXRlcyxcbiAgICBcInBcIjogZm9ybWF0UGVyaW9kLFxuICAgIFwicVwiOiBmb3JtYXRRdWFydGVyLFxuICAgIFwiUVwiOiBmb3JtYXRVbml4VGltZXN0YW1wLFxuICAgIFwic1wiOiBmb3JtYXRVbml4VGltZXN0YW1wU2Vjb25kcyxcbiAgICBcIlNcIjogZm9ybWF0U2Vjb25kcyxcbiAgICBcInVcIjogZm9ybWF0V2Vla2RheU51bWJlck1vbmRheSxcbiAgICBcIlVcIjogZm9ybWF0V2Vla051bWJlclN1bmRheSxcbiAgICBcIlZcIjogZm9ybWF0V2Vla051bWJlcklTTyxcbiAgICBcIndcIjogZm9ybWF0V2Vla2RheU51bWJlclN1bmRheSxcbiAgICBcIldcIjogZm9ybWF0V2Vla051bWJlck1vbmRheSxcbiAgICBcInhcIjogbnVsbCxcbiAgICBcIlhcIjogbnVsbCxcbiAgICBcInlcIjogZm9ybWF0WWVhcixcbiAgICBcIllcIjogZm9ybWF0RnVsbFllYXIsXG4gICAgXCJaXCI6IGZvcm1hdFpvbmUsXG4gICAgXCIlXCI6IGZvcm1hdExpdGVyYWxQZXJjZW50XG4gIH07XG5cbiAgdmFyIHV0Y0Zvcm1hdHMgPSB7XG4gICAgXCJhXCI6IGZvcm1hdFVUQ1Nob3J0V2Vla2RheSxcbiAgICBcIkFcIjogZm9ybWF0VVRDV2Vla2RheSxcbiAgICBcImJcIjogZm9ybWF0VVRDU2hvcnRNb250aCxcbiAgICBcIkJcIjogZm9ybWF0VVRDTW9udGgsXG4gICAgXCJjXCI6IG51bGwsXG4gICAgXCJkXCI6IGZvcm1hdFVUQ0RheU9mTW9udGgsXG4gICAgXCJlXCI6IGZvcm1hdFVUQ0RheU9mTW9udGgsXG4gICAgXCJmXCI6IGZvcm1hdFVUQ01pY3Jvc2Vjb25kcyxcbiAgICBcImdcIjogZm9ybWF0VVRDWWVhcklTTyxcbiAgICBcIkdcIjogZm9ybWF0VVRDRnVsbFllYXJJU08sXG4gICAgXCJIXCI6IGZvcm1hdFVUQ0hvdXIyNCxcbiAgICBcIklcIjogZm9ybWF0VVRDSG91cjEyLFxuICAgIFwialwiOiBmb3JtYXRVVENEYXlPZlllYXIsXG4gICAgXCJMXCI6IGZvcm1hdFVUQ01pbGxpc2Vjb25kcyxcbiAgICBcIm1cIjogZm9ybWF0VVRDTW9udGhOdW1iZXIsXG4gICAgXCJNXCI6IGZvcm1hdFVUQ01pbnV0ZXMsXG4gICAgXCJwXCI6IGZvcm1hdFVUQ1BlcmlvZCxcbiAgICBcInFcIjogZm9ybWF0VVRDUXVhcnRlcixcbiAgICBcIlFcIjogZm9ybWF0VW5peFRpbWVzdGFtcCxcbiAgICBcInNcIjogZm9ybWF0VW5peFRpbWVzdGFtcFNlY29uZHMsXG4gICAgXCJTXCI6IGZvcm1hdFVUQ1NlY29uZHMsXG4gICAgXCJ1XCI6IGZvcm1hdFVUQ1dlZWtkYXlOdW1iZXJNb25kYXksXG4gICAgXCJVXCI6IGZvcm1hdFVUQ1dlZWtOdW1iZXJTdW5kYXksXG4gICAgXCJWXCI6IGZvcm1hdFVUQ1dlZWtOdW1iZXJJU08sXG4gICAgXCJ3XCI6IGZvcm1hdFVUQ1dlZWtkYXlOdW1iZXJTdW5kYXksXG4gICAgXCJXXCI6IGZvcm1hdFVUQ1dlZWtOdW1iZXJNb25kYXksXG4gICAgXCJ4XCI6IG51bGwsXG4gICAgXCJYXCI6IG51bGwsXG4gICAgXCJ5XCI6IGZvcm1hdFVUQ1llYXIsXG4gICAgXCJZXCI6IGZvcm1hdFVUQ0Z1bGxZZWFyLFxuICAgIFwiWlwiOiBmb3JtYXRVVENab25lLFxuICAgIFwiJVwiOiBmb3JtYXRMaXRlcmFsUGVyY2VudFxuICB9O1xuXG4gIHZhciBwYXJzZXMgPSB7XG4gICAgXCJhXCI6IHBhcnNlU2hvcnRXZWVrZGF5LFxuICAgIFwiQVwiOiBwYXJzZVdlZWtkYXksXG4gICAgXCJiXCI6IHBhcnNlU2hvcnRNb250aCxcbiAgICBcIkJcIjogcGFyc2VNb250aCxcbiAgICBcImNcIjogcGFyc2VMb2NhbGVEYXRlVGltZSxcbiAgICBcImRcIjogcGFyc2VEYXlPZk1vbnRoLFxuICAgIFwiZVwiOiBwYXJzZURheU9mTW9udGgsXG4gICAgXCJmXCI6IHBhcnNlTWljcm9zZWNvbmRzLFxuICAgIFwiZ1wiOiBwYXJzZVllYXIsXG4gICAgXCJHXCI6IHBhcnNlRnVsbFllYXIsXG4gICAgXCJIXCI6IHBhcnNlSG91cjI0LFxuICAgIFwiSVwiOiBwYXJzZUhvdXIyNCxcbiAgICBcImpcIjogcGFyc2VEYXlPZlllYXIsXG4gICAgXCJMXCI6IHBhcnNlTWlsbGlzZWNvbmRzLFxuICAgIFwibVwiOiBwYXJzZU1vbnRoTnVtYmVyLFxuICAgIFwiTVwiOiBwYXJzZU1pbnV0ZXMsXG4gICAgXCJwXCI6IHBhcnNlUGVyaW9kLFxuICAgIFwicVwiOiBwYXJzZVF1YXJ0ZXIsXG4gICAgXCJRXCI6IHBhcnNlVW5peFRpbWVzdGFtcCxcbiAgICBcInNcIjogcGFyc2VVbml4VGltZXN0YW1wU2Vjb25kcyxcbiAgICBcIlNcIjogcGFyc2VTZWNvbmRzLFxuICAgIFwidVwiOiBwYXJzZVdlZWtkYXlOdW1iZXJNb25kYXksXG4gICAgXCJVXCI6IHBhcnNlV2Vla051bWJlclN1bmRheSxcbiAgICBcIlZcIjogcGFyc2VXZWVrTnVtYmVySVNPLFxuICAgIFwid1wiOiBwYXJzZVdlZWtkYXlOdW1iZXJTdW5kYXksXG4gICAgXCJXXCI6IHBhcnNlV2Vla051bWJlck1vbmRheSxcbiAgICBcInhcIjogcGFyc2VMb2NhbGVEYXRlLFxuICAgIFwiWFwiOiBwYXJzZUxvY2FsZVRpbWUsXG4gICAgXCJ5XCI6IHBhcnNlWWVhcixcbiAgICBcIllcIjogcGFyc2VGdWxsWWVhcixcbiAgICBcIlpcIjogcGFyc2Vab25lLFxuICAgIFwiJVwiOiBwYXJzZUxpdGVyYWxQZXJjZW50XG4gIH07XG5cbiAgLy8gVGhlc2UgcmVjdXJzaXZlIGRpcmVjdGl2ZSBkZWZpbml0aW9ucyBtdXN0IGJlIGRlZmVycmVkLlxuICBmb3JtYXRzLnggPSBuZXdGb3JtYXQobG9jYWxlX2RhdGUsIGZvcm1hdHMpO1xuICBmb3JtYXRzLlggPSBuZXdGb3JtYXQobG9jYWxlX3RpbWUsIGZvcm1hdHMpO1xuICBmb3JtYXRzLmMgPSBuZXdGb3JtYXQobG9jYWxlX2RhdGVUaW1lLCBmb3JtYXRzKTtcbiAgdXRjRm9ybWF0cy54ID0gbmV3Rm9ybWF0KGxvY2FsZV9kYXRlLCB1dGNGb3JtYXRzKTtcbiAgdXRjRm9ybWF0cy5YID0gbmV3Rm9ybWF0KGxvY2FsZV90aW1lLCB1dGNGb3JtYXRzKTtcbiAgdXRjRm9ybWF0cy5jID0gbmV3Rm9ybWF0KGxvY2FsZV9kYXRlVGltZSwgdXRjRm9ybWF0cyk7XG5cbiAgZnVuY3Rpb24gbmV3Rm9ybWF0KHNwZWNpZmllciwgZm9ybWF0cykge1xuICAgIHJldHVybiBmdW5jdGlvbihkYXRlKSB7XG4gICAgICB2YXIgc3RyaW5nID0gW10sXG4gICAgICAgICAgaSA9IC0xLFxuICAgICAgICAgIGogPSAwLFxuICAgICAgICAgIG4gPSBzcGVjaWZpZXIubGVuZ3RoLFxuICAgICAgICAgIGMsXG4gICAgICAgICAgcGFkLFxuICAgICAgICAgIGZvcm1hdDtcblxuICAgICAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSBkYXRlID0gbmV3IERhdGUoK2RhdGUpO1xuXG4gICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICBpZiAoc3BlY2lmaWVyLmNoYXJDb2RlQXQoaSkgPT09IDM3KSB7XG4gICAgICAgICAgc3RyaW5nLnB1c2goc3BlY2lmaWVyLnNsaWNlKGosIGkpKTtcbiAgICAgICAgICBpZiAoKHBhZCA9IHBhZHNbYyA9IHNwZWNpZmllci5jaGFyQXQoKytpKV0pICE9IG51bGwpIGMgPSBzcGVjaWZpZXIuY2hhckF0KCsraSk7XG4gICAgICAgICAgZWxzZSBwYWQgPSBjID09PSBcImVcIiA/IFwiIFwiIDogXCIwXCI7XG4gICAgICAgICAgaWYgKGZvcm1hdCA9IGZvcm1hdHNbY10pIGMgPSBmb3JtYXQoZGF0ZSwgcGFkKTtcbiAgICAgICAgICBzdHJpbmcucHVzaChjKTtcbiAgICAgICAgICBqID0gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RyaW5nLnB1c2goc3BlY2lmaWVyLnNsaWNlKGosIGkpKTtcbiAgICAgIHJldHVybiBzdHJpbmcuam9pbihcIlwiKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbmV3UGFyc2Uoc3BlY2lmaWVyLCBaKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgdmFyIGQgPSBuZXdEYXRlKDE5MDAsIHVuZGVmaW5lZCwgMSksXG4gICAgICAgICAgaSA9IHBhcnNlU3BlY2lmaWVyKGQsIHNwZWNpZmllciwgc3RyaW5nICs9IFwiXCIsIDApLFxuICAgICAgICAgIHdlZWssIGRheTtcbiAgICAgIGlmIChpICE9IHN0cmluZy5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gICAgICAvLyBJZiBhIFVOSVggdGltZXN0YW1wIGlzIHNwZWNpZmllZCwgcmV0dXJuIGl0LlxuICAgICAgaWYgKFwiUVwiIGluIGQpIHJldHVybiBuZXcgRGF0ZShkLlEpO1xuICAgICAgaWYgKFwic1wiIGluIGQpIHJldHVybiBuZXcgRGF0ZShkLnMgKiAxMDAwICsgKFwiTFwiIGluIGQgPyBkLkwgOiAwKSk7XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgdXRjUGFyc2UsIG5ldmVyIHVzZSB0aGUgbG9jYWwgdGltZXpvbmUuXG4gICAgICBpZiAoWiAmJiAhKFwiWlwiIGluIGQpKSBkLlogPSAwO1xuXG4gICAgICAvLyBUaGUgYW0tcG0gZmxhZyBpcyAwIGZvciBBTSwgYW5kIDEgZm9yIFBNLlxuICAgICAgaWYgKFwicFwiIGluIGQpIGQuSCA9IGQuSCAlIDEyICsgZC5wICogMTI7XG5cbiAgICAgIC8vIElmIHRoZSBtb250aCB3YXMgbm90IHNwZWNpZmllZCwgaW5oZXJpdCBmcm9tIHRoZSBxdWFydGVyLlxuICAgICAgaWYgKGQubSA9PT0gdW5kZWZpbmVkKSBkLm0gPSBcInFcIiBpbiBkID8gZC5xIDogMDtcblxuICAgICAgLy8gQ29udmVydCBkYXktb2Ytd2VlayBhbmQgd2Vlay1vZi15ZWFyIHRvIGRheS1vZi15ZWFyLlxuICAgICAgaWYgKFwiVlwiIGluIGQpIHtcbiAgICAgICAgaWYgKGQuViA8IDEgfHwgZC5WID4gNTMpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoIShcIndcIiBpbiBkKSkgZC53ID0gMTtcbiAgICAgICAgaWYgKFwiWlwiIGluIGQpIHtcbiAgICAgICAgICB3ZWVrID0gdXRjRGF0ZShuZXdEYXRlKGQueSwgMCwgMSkpLCBkYXkgPSB3ZWVrLmdldFVUQ0RheSgpO1xuICAgICAgICAgIHdlZWsgPSBkYXkgPiA0IHx8IGRheSA9PT0gMCA/IHV0Y01vbmRheS5jZWlsKHdlZWspIDogdXRjTW9uZGF5KHdlZWspO1xuICAgICAgICAgIHdlZWsgPSB1dGNEYXkub2Zmc2V0KHdlZWssIChkLlYgLSAxKSAqIDcpO1xuICAgICAgICAgIGQueSA9IHdlZWsuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgICAgICBkLm0gPSB3ZWVrLmdldFVUQ01vbnRoKCk7XG4gICAgICAgICAgZC5kID0gd2Vlay5nZXRVVENEYXRlKCkgKyAoZC53ICsgNikgJSA3O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlZWsgPSBsb2NhbERhdGUobmV3RGF0ZShkLnksIDAsIDEpKSwgZGF5ID0gd2Vlay5nZXREYXkoKTtcbiAgICAgICAgICB3ZWVrID0gZGF5ID4gNCB8fCBkYXkgPT09IDAgPyB0aW1lTW9uZGF5LmNlaWwod2VlaykgOiB0aW1lTW9uZGF5KHdlZWspO1xuICAgICAgICAgIHdlZWsgPSB0aW1lRGF5Lm9mZnNldCh3ZWVrLCAoZC5WIC0gMSkgKiA3KTtcbiAgICAgICAgICBkLnkgPSB3ZWVrLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgZC5tID0gd2Vlay5nZXRNb250aCgpO1xuICAgICAgICAgIGQuZCA9IHdlZWsuZ2V0RGF0ZSgpICsgKGQudyArIDYpICUgNztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcIldcIiBpbiBkIHx8IFwiVVwiIGluIGQpIHtcbiAgICAgICAgaWYgKCEoXCJ3XCIgaW4gZCkpIGQudyA9IFwidVwiIGluIGQgPyBkLnUgJSA3IDogXCJXXCIgaW4gZCA/IDEgOiAwO1xuICAgICAgICBkYXkgPSBcIlpcIiBpbiBkID8gdXRjRGF0ZShuZXdEYXRlKGQueSwgMCwgMSkpLmdldFVUQ0RheSgpIDogbG9jYWxEYXRlKG5ld0RhdGUoZC55LCAwLCAxKSkuZ2V0RGF5KCk7XG4gICAgICAgIGQubSA9IDA7XG4gICAgICAgIGQuZCA9IFwiV1wiIGluIGQgPyAoZC53ICsgNikgJSA3ICsgZC5XICogNyAtIChkYXkgKyA1KSAlIDcgOiBkLncgKyBkLlUgKiA3IC0gKGRheSArIDYpICUgNztcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYSB0aW1lIHpvbmUgaXMgc3BlY2lmaWVkLCBhbGwgZmllbGRzIGFyZSBpbnRlcnByZXRlZCBhcyBVVEMgYW5kIHRoZW5cbiAgICAgIC8vIG9mZnNldCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCB0aW1lIHpvbmUuXG4gICAgICBpZiAoXCJaXCIgaW4gZCkge1xuICAgICAgICBkLkggKz0gZC5aIC8gMTAwIHwgMDtcbiAgICAgICAgZC5NICs9IGQuWiAlIDEwMDtcbiAgICAgICAgcmV0dXJuIHV0Y0RhdGUoZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSwgYWxsIGZpZWxkcyBhcmUgaW4gbG9jYWwgdGltZS5cbiAgICAgIHJldHVybiBsb2NhbERhdGUoZCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlU3BlY2lmaWVyKGQsIHNwZWNpZmllciwgc3RyaW5nLCBqKSB7XG4gICAgdmFyIGkgPSAwLFxuICAgICAgICBuID0gc3BlY2lmaWVyLmxlbmd0aCxcbiAgICAgICAgbSA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgIGMsXG4gICAgICAgIHBhcnNlO1xuXG4gICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICBpZiAoaiA+PSBtKSByZXR1cm4gLTE7XG4gICAgICBjID0gc3BlY2lmaWVyLmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgIGlmIChjID09PSAzNykge1xuICAgICAgICBjID0gc3BlY2lmaWVyLmNoYXJBdChpKyspO1xuICAgICAgICBwYXJzZSA9IHBhcnNlc1tjIGluIHBhZHMgPyBzcGVjaWZpZXIuY2hhckF0KGkrKykgOiBjXTtcbiAgICAgICAgaWYgKCFwYXJzZSB8fCAoKGogPSBwYXJzZShkLCBzdHJpbmcsIGopKSA8IDApKSByZXR1cm4gLTE7XG4gICAgICB9IGVsc2UgaWYgKGMgIT0gc3RyaW5nLmNoYXJDb2RlQXQoaisrKSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGo7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVBlcmlvZChkLCBzdHJpbmcsIGkpIHtcbiAgICB2YXIgbiA9IHBlcmlvZFJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgICByZXR1cm4gbiA/IChkLnAgPSBwZXJpb2RMb29rdXAuZ2V0KG5bMF0udG9Mb3dlckNhc2UoKSksIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlU2hvcnRXZWVrZGF5KGQsIHN0cmluZywgaSkge1xuICAgIHZhciBuID0gc2hvcnRXZWVrZGF5UmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICAgIHJldHVybiBuID8gKGQudyA9IHNob3J0V2Vla2RheUxvb2t1cC5nZXQoblswXS50b0xvd2VyQ2FzZSgpKSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VXZWVrZGF5KGQsIHN0cmluZywgaSkge1xuICAgIHZhciBuID0gd2Vla2RheVJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgICByZXR1cm4gbiA/IChkLncgPSB3ZWVrZGF5TG9va3VwLmdldChuWzBdLnRvTG93ZXJDYXNlKCkpLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVNob3J0TW9udGgoZCwgc3RyaW5nLCBpKSB7XG4gICAgdmFyIG4gPSBzaG9ydE1vbnRoUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICAgIHJldHVybiBuID8gKGQubSA9IHNob3J0TW9udGhMb29rdXAuZ2V0KG5bMF0udG9Mb3dlckNhc2UoKSksIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTW9udGgoZCwgc3RyaW5nLCBpKSB7XG4gICAgdmFyIG4gPSBtb250aFJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgICByZXR1cm4gbiA/IChkLm0gPSBtb250aExvb2t1cC5nZXQoblswXS50b0xvd2VyQ2FzZSgpKSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VMb2NhbGVEYXRlVGltZShkLCBzdHJpbmcsIGkpIHtcbiAgICByZXR1cm4gcGFyc2VTcGVjaWZpZXIoZCwgbG9jYWxlX2RhdGVUaW1lLCBzdHJpbmcsIGkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VMb2NhbGVEYXRlKGQsIHN0cmluZywgaSkge1xuICAgIHJldHVybiBwYXJzZVNwZWNpZmllcihkLCBsb2NhbGVfZGF0ZSwgc3RyaW5nLCBpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTG9jYWxlVGltZShkLCBzdHJpbmcsIGkpIHtcbiAgICByZXR1cm4gcGFyc2VTcGVjaWZpZXIoZCwgbG9jYWxlX3RpbWUsIHN0cmluZywgaSk7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRTaG9ydFdlZWtkYXkoZCkge1xuICAgIHJldHVybiBsb2NhbGVfc2hvcnRXZWVrZGF5c1tkLmdldERheSgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFdlZWtkYXkoZCkge1xuICAgIHJldHVybiBsb2NhbGVfd2Vla2RheXNbZC5nZXREYXkoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRTaG9ydE1vbnRoKGQpIHtcbiAgICByZXR1cm4gbG9jYWxlX3Nob3J0TW9udGhzW2QuZ2V0TW9udGgoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRNb250aChkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV9tb250aHNbZC5nZXRNb250aCgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFBlcmlvZChkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV9wZXJpb2RzWysoZC5nZXRIb3VycygpID49IDEyKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRRdWFydGVyKGQpIHtcbiAgICByZXR1cm4gMSArIH5+KGQuZ2V0TW9udGgoKSAvIDMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VVRDU2hvcnRXZWVrZGF5KGQpIHtcbiAgICByZXR1cm4gbG9jYWxlX3Nob3J0V2Vla2RheXNbZC5nZXRVVENEYXkoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRVVENXZWVrZGF5KGQpIHtcbiAgICByZXR1cm4gbG9jYWxlX3dlZWtkYXlzW2QuZ2V0VVRDRGF5KCldO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VVRDU2hvcnRNb250aChkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV9zaG9ydE1vbnRoc1tkLmdldFVUQ01vbnRoKCldO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VVRDTW9udGgoZCkge1xuICAgIHJldHVybiBsb2NhbGVfbW9udGhzW2QuZ2V0VVRDTW9udGgoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRVVENQZXJpb2QoZCkge1xuICAgIHJldHVybiBsb2NhbGVfcGVyaW9kc1srKGQuZ2V0VVRDSG91cnMoKSA+PSAxMildO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VVRDUXVhcnRlcihkKSB7XG4gICAgcmV0dXJuIDEgKyB+fihkLmdldFVUQ01vbnRoKCkgLyAzKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZm9ybWF0OiBmdW5jdGlvbihzcGVjaWZpZXIpIHtcbiAgICAgIHZhciBmID0gbmV3Rm9ybWF0KHNwZWNpZmllciArPSBcIlwiLCBmb3JtYXRzKTtcbiAgICAgIGYudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHNwZWNpZmllcjsgfTtcbiAgICAgIHJldHVybiBmO1xuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uKHNwZWNpZmllcikge1xuICAgICAgdmFyIHAgPSBuZXdQYXJzZShzcGVjaWZpZXIgKz0gXCJcIiwgZmFsc2UpO1xuICAgICAgcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gc3BlY2lmaWVyOyB9O1xuICAgICAgcmV0dXJuIHA7XG4gICAgfSxcbiAgICB1dGNGb3JtYXQ6IGZ1bmN0aW9uKHNwZWNpZmllcikge1xuICAgICAgdmFyIGYgPSBuZXdGb3JtYXQoc3BlY2lmaWVyICs9IFwiXCIsIHV0Y0Zvcm1hdHMpO1xuICAgICAgZi50b1N0cmluZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gc3BlY2lmaWVyOyB9O1xuICAgICAgcmV0dXJuIGY7XG4gICAgfSxcbiAgICB1dGNQYXJzZTogZnVuY3Rpb24oc3BlY2lmaWVyKSB7XG4gICAgICB2YXIgcCA9IG5ld1BhcnNlKHNwZWNpZmllciArPSBcIlwiLCB0cnVlKTtcbiAgICAgIHAudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHNwZWNpZmllcjsgfTtcbiAgICAgIHJldHVybiBwO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIHBhZHMgPSB7XCItXCI6IFwiXCIsIFwiX1wiOiBcIiBcIiwgXCIwXCI6IFwiMFwifSxcbiAgICBudW1iZXJSZSA9IC9eXFxzKlxcZCsvLCAvLyBub3RlOiBpZ25vcmVzIG5leHQgZGlyZWN0aXZlXG4gICAgcGVyY2VudFJlID0gL14lLyxcbiAgICByZXF1b3RlUmUgPSAvW1xcXFxeJCorP3xbXFxdKCkue31dL2c7XG5cbmZ1bmN0aW9uIHBhZCh2YWx1ZSwgZmlsbCwgd2lkdGgpIHtcbiAgdmFyIHNpZ24gPSB2YWx1ZSA8IDAgPyBcIi1cIiA6IFwiXCIsXG4gICAgICBzdHJpbmcgPSAoc2lnbiA/IC12YWx1ZSA6IHZhbHVlKSArIFwiXCIsXG4gICAgICBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuICByZXR1cm4gc2lnbiArIChsZW5ndGggPCB3aWR0aCA/IG5ldyBBcnJheSh3aWR0aCAtIGxlbmd0aCArIDEpLmpvaW4oZmlsbCkgKyBzdHJpbmcgOiBzdHJpbmcpO1xufVxuXG5mdW5jdGlvbiByZXF1b3RlKHMpIHtcbiAgcmV0dXJuIHMucmVwbGFjZShyZXF1b3RlUmUsIFwiXFxcXCQmXCIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRSZShuYW1lcykge1xuICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIG5hbWVzLm1hcChyZXF1b3RlKS5qb2luKFwifFwiKSArIFwiKVwiLCBcImlcIik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdExvb2t1cChuYW1lcykge1xuICByZXR1cm4gbmV3IE1hcChuYW1lcy5tYXAoKG5hbWUsIGkpID0+IFtuYW1lLnRvTG93ZXJDYXNlKCksIGldKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlV2Vla2RheU51bWJlclN1bmRheShkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMSkpO1xuICByZXR1cm4gbiA/IChkLncgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVdlZWtkYXlOdW1iZXJNb25kYXkoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDEpKTtcbiAgcmV0dXJuIG4gPyAoZC51ID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VXZWVrTnVtYmVyU3VuZGF5KGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gIHJldHVybiBuID8gKGQuVSA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlV2Vla051bWJlcklTTyhkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMikpO1xuICByZXR1cm4gbiA/IChkLlYgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVdlZWtOdW1iZXJNb25kYXkoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC5XID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VGdWxsWWVhcihkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgNCkpO1xuICByZXR1cm4gbiA/IChkLnkgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC55ID0gK25bMF0gKyAoK25bMF0gPiA2OCA/IDE5MDAgOiAyMDAwKSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVpvbmUoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gL14oWil8KFsrLV1cXGRcXGQpKD86Oj8oXFxkXFxkKSk/Ly5leGVjKHN0cmluZy5zbGljZShpLCBpICsgNikpO1xuICByZXR1cm4gbiA/IChkLlogPSBuWzFdID8gMCA6IC0oblsyXSArIChuWzNdIHx8IFwiMDBcIikpLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUXVhcnRlcihkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMSkpO1xuICByZXR1cm4gbiA/IChkLnEgPSBuWzBdICogMyAtIDMsIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VNb250aE51bWJlcihkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMikpO1xuICByZXR1cm4gbiA/IChkLm0gPSBuWzBdIC0gMSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZURheU9mTW9udGgoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC5kID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXlPZlllYXIoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDMpKTtcbiAgcmV0dXJuIG4gPyAoZC5tID0gMCwgZC5kID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VIb3VyMjQoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC5IID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VNaW51dGVzKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gIHJldHVybiBuID8gKGQuTSA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlU2Vjb25kcyhkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMikpO1xuICByZXR1cm4gbiA/IChkLlMgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZU1pbGxpc2Vjb25kcyhkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMykpO1xuICByZXR1cm4gbiA/IChkLkwgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZU1pY3Jvc2Vjb25kcyhkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgNikpO1xuICByZXR1cm4gbiA/IChkLkwgPSBNYXRoLmZsb29yKG5bMF0gLyAxMDAwKSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZUxpdGVyYWxQZXJjZW50KGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IHBlcmNlbnRSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMSkpO1xuICByZXR1cm4gbiA/IGkgKyBuWzBdLmxlbmd0aCA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVVuaXhUaW1lc3RhbXAoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICByZXR1cm4gbiA/IChkLlEgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVVuaXhUaW1lc3RhbXBTZWNvbmRzKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgcmV0dXJuIG4gPyAoZC5zID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF5T2ZNb250aChkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXREYXRlKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRIb3VyMjQoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0SG91cnMoKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEhvdXIxMihkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRIb3VycygpICUgMTIgfHwgMTIsIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXlPZlllYXIoZCwgcCkge1xuICByZXR1cm4gcGFkKDEgKyB0aW1lRGF5LmNvdW50KHRpbWVZZWFyKGQpLCBkKSwgcCwgMyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE1pbGxpc2Vjb25kcyhkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRNaWxsaXNlY29uZHMoKSwgcCwgMyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE1pY3Jvc2Vjb25kcyhkLCBwKSB7XG4gIHJldHVybiBmb3JtYXRNaWxsaXNlY29uZHMoZCwgcCkgKyBcIjAwMFwiO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRNb250aE51bWJlcihkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRNb250aCgpICsgMSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE1pbnV0ZXMoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0TWludXRlcygpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0U2Vjb25kcyhkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRTZWNvbmRzKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRXZWVrZGF5TnVtYmVyTW9uZGF5KGQpIHtcbiAgdmFyIGRheSA9IGQuZ2V0RGF5KCk7XG4gIHJldHVybiBkYXkgPT09IDAgPyA3IDogZGF5O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRXZWVrTnVtYmVyU3VuZGF5KGQsIHApIHtcbiAgcmV0dXJuIHBhZCh0aW1lU3VuZGF5LmNvdW50KHRpbWVZZWFyKGQpIC0gMSwgZCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBkSVNPKGQpIHtcbiAgdmFyIGRheSA9IGQuZ2V0RGF5KCk7XG4gIHJldHVybiAoZGF5ID49IDQgfHwgZGF5ID09PSAwKSA/IHRpbWVUaHVyc2RheShkKSA6IHRpbWVUaHVyc2RheS5jZWlsKGQpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRXZWVrTnVtYmVySVNPKGQsIHApIHtcbiAgZCA9IGRJU08oZCk7XG4gIHJldHVybiBwYWQodGltZVRodXJzZGF5LmNvdW50KHRpbWVZZWFyKGQpLCBkKSArICh0aW1lWWVhcihkKS5nZXREYXkoKSA9PT0gNCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRXZWVrZGF5TnVtYmVyU3VuZGF5KGQpIHtcbiAgcmV0dXJuIGQuZ2V0RGF5KCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFdlZWtOdW1iZXJNb25kYXkoZCwgcCkge1xuICByZXR1cm4gcGFkKHRpbWVNb25kYXkuY291bnQodGltZVllYXIoZCkgLSAxLCBkKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFllYXIoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0RnVsbFllYXIoKSAlIDEwMCwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFllYXJJU08oZCwgcCkge1xuICBkID0gZElTTyhkKTtcbiAgcmV0dXJuIHBhZChkLmdldEZ1bGxZZWFyKCkgJSAxMDAsIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRGdWxsWWVhcihkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRGdWxsWWVhcigpICUgMTAwMDAsIHAsIDQpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRGdWxsWWVhcklTTyhkLCBwKSB7XG4gIHZhciBkYXkgPSBkLmdldERheSgpO1xuICBkID0gKGRheSA+PSA0IHx8IGRheSA9PT0gMCkgPyB0aW1lVGh1cnNkYXkoZCkgOiB0aW1lVGh1cnNkYXkuY2VpbChkKTtcbiAgcmV0dXJuIHBhZChkLmdldEZ1bGxZZWFyKCkgJSAxMDAwMCwgcCwgNCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFpvbmUoZCkge1xuICB2YXIgeiA9IGQuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgcmV0dXJuICh6ID4gMCA/IFwiLVwiIDogKHogKj0gLTEsIFwiK1wiKSlcbiAgICAgICsgcGFkKHogLyA2MCB8IDAsIFwiMFwiLCAyKVxuICAgICAgKyBwYWQoeiAlIDYwLCBcIjBcIiwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ0RheU9mTW9udGgoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0VVRDRGF0ZSgpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDSG91cjI0KGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ0hvdXJzKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENIb3VyMTIoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDRGF5T2ZZZWFyKGQsIHApIHtcbiAgcmV0dXJuIHBhZCgxICsgdXRjRGF5LmNvdW50KHV0Y1llYXIoZCksIGQpLCBwLCAzKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDTWlsbGlzZWNvbmRzKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ01pbGxpc2Vjb25kcygpLCBwLCAzKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDTWljcm9zZWNvbmRzKGQsIHApIHtcbiAgcmV0dXJuIGZvcm1hdFVUQ01pbGxpc2Vjb25kcyhkLCBwKSArIFwiMDAwXCI7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ01vbnRoTnVtYmVyKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ01vbnRoKCkgKyAxLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDTWludXRlcyhkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRVVENNaW51dGVzKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENTZWNvbmRzKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ1NlY29uZHMoKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ1dlZWtkYXlOdW1iZXJNb25kYXkoZCkge1xuICB2YXIgZG93ID0gZC5nZXRVVENEYXkoKTtcbiAgcmV0dXJuIGRvdyA9PT0gMCA/IDcgOiBkb3c7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ1dlZWtOdW1iZXJTdW5kYXkoZCwgcCkge1xuICByZXR1cm4gcGFkKHV0Y1N1bmRheS5jb3VudCh1dGNZZWFyKGQpIC0gMSwgZCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBVVENkSVNPKGQpIHtcbiAgdmFyIGRheSA9IGQuZ2V0VVRDRGF5KCk7XG4gIHJldHVybiAoZGF5ID49IDQgfHwgZGF5ID09PSAwKSA/IHV0Y1RodXJzZGF5KGQpIDogdXRjVGh1cnNkYXkuY2VpbChkKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDV2Vla051bWJlcklTTyhkLCBwKSB7XG4gIGQgPSBVVENkSVNPKGQpO1xuICByZXR1cm4gcGFkKHV0Y1RodXJzZGF5LmNvdW50KHV0Y1llYXIoZCksIGQpICsgKHV0Y1llYXIoZCkuZ2V0VVRDRGF5KCkgPT09IDQpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDV2Vla2RheU51bWJlclN1bmRheShkKSB7XG4gIHJldHVybiBkLmdldFVUQ0RheSgpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENXZWVrTnVtYmVyTW9uZGF5KGQsIHApIHtcbiAgcmV0dXJuIHBhZCh1dGNNb25kYXkuY291bnQodXRjWWVhcihkKSAtIDEsIGQpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDWWVhcihkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRVVENGdWxsWWVhcigpICUgMTAwLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDWWVhcklTTyhkLCBwKSB7XG4gIGQgPSBVVENkSVNPKGQpO1xuICByZXR1cm4gcGFkKGQuZ2V0VVRDRnVsbFllYXIoKSAlIDEwMCwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ0Z1bGxZZWFyKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ0Z1bGxZZWFyKCkgJSAxMDAwMCwgcCwgNCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ0Z1bGxZZWFySVNPKGQsIHApIHtcbiAgdmFyIGRheSA9IGQuZ2V0VVRDRGF5KCk7XG4gIGQgPSAoZGF5ID49IDQgfHwgZGF5ID09PSAwKSA/IHV0Y1RodXJzZGF5KGQpIDogdXRjVGh1cnNkYXkuY2VpbChkKTtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ0Z1bGxZZWFyKCkgJSAxMDAwMCwgcCwgNCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ1pvbmUoKSB7XG4gIHJldHVybiBcIiswMDAwXCI7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdExpdGVyYWxQZXJjZW50KCkge1xuICByZXR1cm4gXCIlXCI7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVuaXhUaW1lc3RhbXAoZCkge1xuICByZXR1cm4gK2Q7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVuaXhUaW1lc3RhbXBTZWNvbmRzKGQpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoK2QgLyAxMDAwKTtcbn1cbiIsImltcG9ydCBmb3JtYXRMb2NhbGUgZnJvbSBcIi4vbG9jYWxlLmpzXCI7XG5cbnZhciBsb2NhbGU7XG5leHBvcnQgdmFyIHRpbWVGb3JtYXQ7XG5leHBvcnQgdmFyIHRpbWVQYXJzZTtcbmV4cG9ydCB2YXIgdXRjRm9ybWF0O1xuZXhwb3J0IHZhciB1dGNQYXJzZTtcblxuZGVmYXVsdExvY2FsZSh7XG4gIGRhdGVUaW1lOiBcIiV4LCAlWFwiLFxuICBkYXRlOiBcIiUtbS8lLWQvJVlcIixcbiAgdGltZTogXCIlLUk6JU06JVMgJXBcIixcbiAgcGVyaW9kczogW1wiQU1cIiwgXCJQTVwiXSxcbiAgZGF5czogW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl0sXG4gIHNob3J0RGF5czogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICBtb250aHM6IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdLFxuICBzaG9ydE1vbnRoczogW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmYXVsdExvY2FsZShkZWZpbml0aW9uKSB7XG4gIGxvY2FsZSA9IGZvcm1hdExvY2FsZShkZWZpbml0aW9uKTtcbiAgdGltZUZvcm1hdCA9IGxvY2FsZS5mb3JtYXQ7XG4gIHRpbWVQYXJzZSA9IGxvY2FsZS5wYXJzZTtcbiAgdXRjRm9ybWF0ID0gbG9jYWxlLnV0Y0Zvcm1hdDtcbiAgdXRjUGFyc2UgPSBsb2NhbGUudXRjUGFyc2U7XG4gIHJldHVybiBsb2NhbGU7XG59XG4iLCJpbXBvcnQge3RpbWVZZWFyLCB0aW1lTW9udGgsIHRpbWVXZWVrLCB0aW1lRGF5LCB0aW1lSG91ciwgdGltZU1pbnV0ZSwgdGltZVNlY29uZCwgdGltZVRpY2tzLCB0aW1lVGlja0ludGVydmFsfSBmcm9tIFwiZDMtdGltZVwiO1xuaW1wb3J0IHt0aW1lRm9ybWF0fSBmcm9tIFwiZDMtdGltZS1mb3JtYXRcIjtcbmltcG9ydCBjb250aW51b3VzLCB7Y29weX0gZnJvbSBcIi4vY29udGludW91cy5qc1wiO1xuaW1wb3J0IHtpbml0UmFuZ2V9IGZyb20gXCIuL2luaXQuanNcIjtcbmltcG9ydCBuaWNlIGZyb20gXCIuL25pY2UuanNcIjtcblxuZnVuY3Rpb24gZGF0ZSh0KSB7XG4gIHJldHVybiBuZXcgRGF0ZSh0KTtcbn1cblxuZnVuY3Rpb24gbnVtYmVyKHQpIHtcbiAgcmV0dXJuIHQgaW5zdGFuY2VvZiBEYXRlID8gK3QgOiArbmV3IERhdGUoK3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsZW5kYXIodGlja3MsIHRpY2tJbnRlcnZhbCwgeWVhciwgbW9udGgsIHdlZWssIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIGZvcm1hdCkge1xuICB2YXIgc2NhbGUgPSBjb250aW51b3VzKCksXG4gICAgICBpbnZlcnQgPSBzY2FsZS5pbnZlcnQsXG4gICAgICBkb21haW4gPSBzY2FsZS5kb21haW47XG5cbiAgdmFyIGZvcm1hdE1pbGxpc2Vjb25kID0gZm9ybWF0KFwiLiVMXCIpLFxuICAgICAgZm9ybWF0U2Vjb25kID0gZm9ybWF0KFwiOiVTXCIpLFxuICAgICAgZm9ybWF0TWludXRlID0gZm9ybWF0KFwiJUk6JU1cIiksXG4gICAgICBmb3JtYXRIb3VyID0gZm9ybWF0KFwiJUkgJXBcIiksXG4gICAgICBmb3JtYXREYXkgPSBmb3JtYXQoXCIlYSAlZFwiKSxcbiAgICAgIGZvcm1hdFdlZWsgPSBmb3JtYXQoXCIlYiAlZFwiKSxcbiAgICAgIGZvcm1hdE1vbnRoID0gZm9ybWF0KFwiJUJcIiksXG4gICAgICBmb3JtYXRZZWFyID0gZm9ybWF0KFwiJVlcIik7XG5cbiAgZnVuY3Rpb24gdGlja0Zvcm1hdChkYXRlKSB7XG4gICAgcmV0dXJuIChzZWNvbmQoZGF0ZSkgPCBkYXRlID8gZm9ybWF0TWlsbGlzZWNvbmRcbiAgICAgICAgOiBtaW51dGUoZGF0ZSkgPCBkYXRlID8gZm9ybWF0U2Vjb25kXG4gICAgICAgIDogaG91cihkYXRlKSA8IGRhdGUgPyBmb3JtYXRNaW51dGVcbiAgICAgICAgOiBkYXkoZGF0ZSkgPCBkYXRlID8gZm9ybWF0SG91clxuICAgICAgICA6IG1vbnRoKGRhdGUpIDwgZGF0ZSA/ICh3ZWVrKGRhdGUpIDwgZGF0ZSA/IGZvcm1hdERheSA6IGZvcm1hdFdlZWspXG4gICAgICAgIDogeWVhcihkYXRlKSA8IGRhdGUgPyBmb3JtYXRNb250aFxuICAgICAgICA6IGZvcm1hdFllYXIpKGRhdGUpO1xuICB9XG5cbiAgc2NhbGUuaW52ZXJ0ID0gZnVuY3Rpb24oeSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShpbnZlcnQoeSkpO1xuICB9O1xuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IGRvbWFpbihBcnJheS5mcm9tKF8sIG51bWJlcikpIDogZG9tYWluKCkubWFwKGRhdGUpO1xuICB9O1xuXG4gIHNjYWxlLnRpY2tzID0gZnVuY3Rpb24oaW50ZXJ2YWwpIHtcbiAgICB2YXIgZCA9IGRvbWFpbigpO1xuICAgIHJldHVybiB0aWNrcyhkWzBdLCBkW2QubGVuZ3RoIC0gMV0sIGludGVydmFsID09IG51bGwgPyAxMCA6IGludGVydmFsKTtcbiAgfTtcblxuICBzY2FsZS50aWNrRm9ybWF0ID0gZnVuY3Rpb24oY291bnQsIHNwZWNpZmllcikge1xuICAgIHJldHVybiBzcGVjaWZpZXIgPT0gbnVsbCA/IHRpY2tGb3JtYXQgOiBmb3JtYXQoc3BlY2lmaWVyKTtcbiAgfTtcblxuICBzY2FsZS5uaWNlID0gZnVuY3Rpb24oaW50ZXJ2YWwpIHtcbiAgICB2YXIgZCA9IGRvbWFpbigpO1xuICAgIGlmICghaW50ZXJ2YWwgfHwgdHlwZW9mIGludGVydmFsLnJhbmdlICE9PSBcImZ1bmN0aW9uXCIpIGludGVydmFsID0gdGlja0ludGVydmFsKGRbMF0sIGRbZC5sZW5ndGggLSAxXSwgaW50ZXJ2YWwgPT0gbnVsbCA/IDEwIDogaW50ZXJ2YWwpO1xuICAgIHJldHVybiBpbnRlcnZhbCA/IGRvbWFpbihuaWNlKGQsIGludGVydmFsKSkgOiBzY2FsZTtcbiAgfTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvcHkoc2NhbGUsIGNhbGVuZGFyKHRpY2tzLCB0aWNrSW50ZXJ2YWwsIHllYXIsIG1vbnRoLCB3ZWVrLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBmb3JtYXQpKTtcbiAgfTtcblxuICByZXR1cm4gc2NhbGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWUoKSB7XG4gIHJldHVybiBpbml0UmFuZ2UuYXBwbHkoY2FsZW5kYXIodGltZVRpY2tzLCB0aW1lVGlja0ludGVydmFsLCB0aW1lWWVhciwgdGltZU1vbnRoLCB0aW1lV2VlaywgdGltZURheSwgdGltZUhvdXIsIHRpbWVNaW51dGUsIHRpbWVTZWNvbmQsIHRpbWVGb3JtYXQpLmRvbWFpbihbbmV3IERhdGUoMjAwMCwgMCwgMSksIG5ldyBEYXRlKDIwMDAsIDAsIDIpXSksIGFyZ3VtZW50cyk7XG59XG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOmV8fHNlbGYpLmRheWpzX3BsdWdpbl9pc29XZWVrPXQoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1cImRheVwiO3JldHVybiBmdW5jdGlvbih0LGkscyl7dmFyIGE9ZnVuY3Rpb24odCl7cmV0dXJuIHQuYWRkKDQtdC5pc29XZWVrZGF5KCksZSl9LGQ9aS5wcm90b3R5cGU7ZC5pc29XZWVrWWVhcj1mdW5jdGlvbigpe3JldHVybiBhKHRoaXMpLnllYXIoKX0sZC5pc29XZWVrPWZ1bmN0aW9uKHQpe2lmKCF0aGlzLiR1dGlscygpLnUodCkpcmV0dXJuIHRoaXMuYWRkKDcqKHQtdGhpcy5pc29XZWVrKCkpLGUpO3ZhciBpLGQsbixvLHI9YSh0aGlzKSx1PShpPXRoaXMuaXNvV2Vla1llYXIoKSxkPXRoaXMuJHUsbj0oZD9zLnV0YzpzKSgpLnllYXIoaSkuc3RhcnRPZihcInllYXJcIiksbz00LW4uaXNvV2Vla2RheSgpLG4uaXNvV2Vla2RheSgpPjQmJihvKz03KSxuLmFkZChvLGUpKTtyZXR1cm4gci5kaWZmKHUsXCJ3ZWVrXCIpKzF9LGQuaXNvV2Vla2RheT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy4kdXRpbHMoKS51KGUpP3RoaXMuZGF5KCl8fDc6dGhpcy5kYXkodGhpcy5kYXkoKSU3P2U6ZS03KX07dmFyIG49ZC5zdGFydE9mO2Quc3RhcnRPZj1mdW5jdGlvbihlLHQpe3ZhciBpPXRoaXMuJHV0aWxzKCkscz0hIWkudSh0KXx8dDtyZXR1cm5cImlzb3dlZWtcIj09PWkucChlKT9zP3RoaXMuZGF0ZSh0aGlzLmRhdGUoKS0odGhpcy5pc29XZWVrZGF5KCktMSkpLnN0YXJ0T2YoXCJkYXlcIik6dGhpcy5kYXRlKHRoaXMuZGF0ZSgpLTEtKHRoaXMuaXNvV2Vla2RheSgpLTEpKzcpLmVuZE9mKFwiZGF5XCIpOm4uYmluZCh0aGlzKShlLHQpfX19KSk7IiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczplfHxzZWxmKS5kYXlqc19wbHVnaW5fY3VzdG9tUGFyc2VGb3JtYXQ9dCgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPXtMVFM6XCJoOm1tOnNzIEFcIixMVDpcImg6bW0gQVwiLEw6XCJNTS9ERC9ZWVlZXCIsTEw6XCJNTU1NIEQsIFlZWVlcIixMTEw6XCJNTU1NIEQsIFlZWVkgaDptbSBBXCIsTExMTDpcImRkZGQsIE1NTU0gRCwgWVlZWSBoOm1tIEFcIn0sdD0vKFxcW1teW10qXFxdKXwoWy1fOi8uLCgpXFxzXSspfChBfGF8UXxZWVlZfFlZP3x3dz98TU0/TT9NP3xEb3xERD98aGg/fEhIP3xtbT98c3M/fFN7MSwzfXx6fFpaPykvZyxuPS9cXGQvLHI9L1xcZFxcZC8saT0vXFxkXFxkPy8sbz0vXFxkKlteLV86LywoKVxcc1xcZF0rLyxzPXt9LGE9ZnVuY3Rpb24oZSl7cmV0dXJuKGU9K2UpKyhlPjY4PzE5MDA6MmUzKX07dmFyIGY9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3RoaXNbZV09K3R9fSxoPVsvWystXVxcZFxcZDo/KFxcZFxcZCk/fFovLGZ1bmN0aW9uKGUpeyh0aGlzLnpvbmV8fCh0aGlzLnpvbmU9e30pKS5vZmZzZXQ9ZnVuY3Rpb24oZSl7aWYoIWUpcmV0dXJuIDA7aWYoXCJaXCI9PT1lKXJldHVybiAwO3ZhciB0PWUubWF0Y2goLyhbKy1dfFxcZFxcZCkvZyksbj02MCp0WzFdKygrdFsyXXx8MCk7cmV0dXJuIDA9PT1uPzA6XCIrXCI9PT10WzBdPy1uOm59KGUpfV0sdT1mdW5jdGlvbihlKXt2YXIgdD1zW2VdO3JldHVybiB0JiYodC5pbmRleE9mP3Q6dC5zLmNvbmNhdCh0LmYpKX0sZD1mdW5jdGlvbihlLHQpe3ZhciBuLHI9cy5tZXJpZGllbTtpZihyKXtmb3IodmFyIGk9MTtpPD0yNDtpKz0xKWlmKGUuaW5kZXhPZihyKGksMCx0KSk+LTEpe249aT4xMjticmVha319ZWxzZSBuPWU9PT0odD9cInBtXCI6XCJQTVwiKTtyZXR1cm4gbn0sYz17QTpbbyxmdW5jdGlvbihlKXt0aGlzLmFmdGVybm9vbj1kKGUsITEpfV0sYTpbbyxmdW5jdGlvbihlKXt0aGlzLmFmdGVybm9vbj1kKGUsITApfV0sUTpbbixmdW5jdGlvbihlKXt0aGlzLm1vbnRoPTMqKGUtMSkrMX1dLFM6W24sZnVuY3Rpb24oZSl7dGhpcy5taWxsaXNlY29uZHM9MTAwKitlfV0sU1M6W3IsZnVuY3Rpb24oZSl7dGhpcy5taWxsaXNlY29uZHM9MTAqK2V9XSxTU1M6Wy9cXGR7M30vLGZ1bmN0aW9uKGUpe3RoaXMubWlsbGlzZWNvbmRzPStlfV0sczpbaSxmKFwic2Vjb25kc1wiKV0sc3M6W2ksZihcInNlY29uZHNcIildLG06W2ksZihcIm1pbnV0ZXNcIildLG1tOltpLGYoXCJtaW51dGVzXCIpXSxIOltpLGYoXCJob3Vyc1wiKV0saDpbaSxmKFwiaG91cnNcIildLEhIOltpLGYoXCJob3Vyc1wiKV0saGg6W2ksZihcImhvdXJzXCIpXSxEOltpLGYoXCJkYXlcIildLEREOltyLGYoXCJkYXlcIildLERvOltvLGZ1bmN0aW9uKGUpe3ZhciB0PXMub3JkaW5hbCxuPWUubWF0Y2goL1xcZCsvKTtpZih0aGlzLmRheT1uWzBdLHQpZm9yKHZhciByPTE7cjw9MzE7cis9MSl0KHIpLnJlcGxhY2UoL1xcW3xcXF0vZyxcIlwiKT09PWUmJih0aGlzLmRheT1yKX1dLHc6W2ksZihcIndlZWtcIildLHd3OltyLGYoXCJ3ZWVrXCIpXSxNOltpLGYoXCJtb250aFwiKV0sTU06W3IsZihcIm1vbnRoXCIpXSxNTU06W28sZnVuY3Rpb24oZSl7dmFyIHQ9dShcIm1vbnRoc1wiKSxuPSh1KFwibW9udGhzU2hvcnRcIil8fHQubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gZS5zbGljZSgwLDMpfSkpKS5pbmRleE9mKGUpKzE7aWYobjwxKXRocm93IG5ldyBFcnJvcjt0aGlzLm1vbnRoPW4lMTJ8fG59XSxNTU1NOltvLGZ1bmN0aW9uKGUpe3ZhciB0PXUoXCJtb250aHNcIikuaW5kZXhPZihlKSsxO2lmKHQ8MSl0aHJvdyBuZXcgRXJyb3I7dGhpcy5tb250aD10JTEyfHx0fV0sWTpbL1srLV0/XFxkKy8sZihcInllYXJcIildLFlZOltyLGZ1bmN0aW9uKGUpe3RoaXMueWVhcj1hKGUpfV0sWVlZWTpbL1xcZHs0fS8sZihcInllYXJcIildLFo6aCxaWjpofTtmdW5jdGlvbiBsKG4pe3ZhciByLGk7cj1uLGk9cyYmcy5mb3JtYXRzO2Zvcih2YXIgbz0obj1yLnJlcGxhY2UoLyhcXFtbXlxcXV0rXSl8KExUUz98bHsxLDR9fEx7MSw0fSkvZywoZnVuY3Rpb24odCxuLHIpe3ZhciBvPXImJnIudG9VcHBlckNhc2UoKTtyZXR1cm4gbnx8aVtyXXx8ZVtyXXx8aVtvXS5yZXBsYWNlKC8oXFxbW15cXF1dK10pfChNTU1NfE1NfEREfGRkZGQpL2csKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdHx8bi5zbGljZSgxKX0pKX0pKSkubWF0Y2godCksYT1vLmxlbmd0aCxmPTA7ZjxhO2YrPTEpe3ZhciBoPW9bZl0sdT1jW2hdLGQ9dSYmdVswXSxsPXUmJnVbMV07b1tmXT1sP3tyZWdleDpkLHBhcnNlcjpsfTpoLnJlcGxhY2UoL15cXFt8XFxdJC9nLFwiXCIpfXJldHVybiBmdW5jdGlvbihlKXtmb3IodmFyIHQ9e30sbj0wLHI9MDtuPGE7bis9MSl7dmFyIGk9b1tuXTtpZihcInN0cmluZ1wiPT10eXBlb2YgaSlyKz1pLmxlbmd0aDtlbHNle3ZhciBzPWkucmVnZXgsZj1pLnBhcnNlcixoPWUuc2xpY2UociksdT1zLmV4ZWMoaClbMF07Zi5jYWxsKHQsdSksZT1lLnJlcGxhY2UodSxcIlwiKX19cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PWUuYWZ0ZXJub29uO2lmKHZvaWQgMCE9PXQpe3ZhciBuPWUuaG91cnM7dD9uPDEyJiYoZS5ob3Vycys9MTIpOjEyPT09biYmKGUuaG91cnM9MCksZGVsZXRlIGUuYWZ0ZXJub29ufX0odCksdH19cmV0dXJuIGZ1bmN0aW9uKGUsdCxuKXtuLnAuY3VzdG9tUGFyc2VGb3JtYXQ9ITAsZSYmZS5wYXJzZVR3b0RpZ2l0WWVhciYmKGE9ZS5wYXJzZVR3b0RpZ2l0WWVhcik7dmFyIHI9dC5wcm90b3R5cGUsaT1yLnBhcnNlO3IucGFyc2U9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5kYXRlLHI9ZS51dGMsbz1lLmFyZ3M7dGhpcy4kdT1yO3ZhciBhPW9bMV07aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEpe3ZhciBmPSEwPT09b1syXSxoPSEwPT09b1szXSx1PWZ8fGgsZD1vWzJdO2gmJihkPW9bMl0pLHM9dGhpcy4kbG9jYWxlKCksIWYmJmQmJihzPW4uTHNbZF0pLHRoaXMuJGQ9ZnVuY3Rpb24oZSx0LG4scil7dHJ5e2lmKFtcInhcIixcIlhcIl0uaW5kZXhPZih0KT4tMSlyZXR1cm4gbmV3IERhdGUoKFwiWFwiPT09dD8xZTM6MSkqZSk7dmFyIGk9bCh0KShlKSxvPWkueWVhcixzPWkubW9udGgsYT1pLmRheSxmPWkuaG91cnMsaD1pLm1pbnV0ZXMsdT1pLnNlY29uZHMsZD1pLm1pbGxpc2Vjb25kcyxjPWkuem9uZSxtPWkud2VlayxNPW5ldyBEYXRlLFk9YXx8KG98fHM/MTpNLmdldERhdGUoKSkscD1vfHxNLmdldEZ1bGxZZWFyKCksdj0wO28mJiFzfHwodj1zPjA/cy0xOk0uZ2V0TW9udGgoKSk7dmFyIEQsdz1mfHwwLGc9aHx8MCx5PXV8fDAsTD1kfHwwO3JldHVybiBjP25ldyBEYXRlKERhdGUuVVRDKHAsdixZLHcsZyx5LEwrNjAqYy5vZmZzZXQqMWUzKSk6bj9uZXcgRGF0ZShEYXRlLlVUQyhwLHYsWSx3LGcseSxMKSk6KEQ9bmV3IERhdGUocCx2LFksdyxnLHksTCksbSYmKEQ9cihEKS53ZWVrKG0pLnRvRGF0ZSgpKSxEKX1jYXRjaChlKXtyZXR1cm4gbmV3IERhdGUoXCJcIil9fSh0LGEscixuKSx0aGlzLmluaXQoKSxkJiYhMCE9PWQmJih0aGlzLiRMPXRoaXMubG9jYWxlKGQpLiRMKSx1JiZ0IT10aGlzLmZvcm1hdChhKSYmKHRoaXMuJGQ9bmV3IERhdGUoXCJcIikpLHM9e319ZWxzZSBpZihhIGluc3RhbmNlb2YgQXJyYXkpZm9yKHZhciBjPWEubGVuZ3RoLG09MTttPD1jO20rPTEpe29bMV09YVttLTFdO3ZhciBNPW4uYXBwbHkodGhpcyxvKTtpZihNLmlzVmFsaWQoKSl7dGhpcy4kZD1NLiRkLHRoaXMuJEw9TS4kTCx0aGlzLmluaXQoKTticmVha31tPT09YyYmKHRoaXMuJGQ9bmV3IERhdGUoXCJcIikpfWVsc2UgaS5jYWxsKHRoaXMsZSl9fX0pKTsiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOmV8fHNlbGYpLmRheWpzX3BsdWdpbl9hZHZhbmNlZEZvcm1hdD10KCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7dmFyIHI9dC5wcm90b3R5cGUsbj1yLmZvcm1hdDtyLmZvcm1hdD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9dGhpcy4kbG9jYWxlKCk7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVybiBuLmJpbmQodGhpcykoZSk7dmFyIHM9dGhpcy4kdXRpbHMoKSxhPShlfHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIpLnJlcGxhY2UoL1xcWyhbXlxcXV0rKV18UXx3b3x3d3x3fFdXfFd8enp6fHp8Z2dnZ3xHR0dHfERvfFh8eHxrezEsMn18Uy9nLChmdW5jdGlvbihlKXtzd2l0Y2goZSl7Y2FzZVwiUVwiOnJldHVybiBNYXRoLmNlaWwoKHQuJE0rMSkvMyk7Y2FzZVwiRG9cIjpyZXR1cm4gci5vcmRpbmFsKHQuJEQpO2Nhc2VcImdnZ2dcIjpyZXR1cm4gdC53ZWVrWWVhcigpO2Nhc2VcIkdHR0dcIjpyZXR1cm4gdC5pc29XZWVrWWVhcigpO2Nhc2VcIndvXCI6cmV0dXJuIHIub3JkaW5hbCh0LndlZWsoKSxcIldcIik7Y2FzZVwid1wiOmNhc2VcInd3XCI6cmV0dXJuIHMucyh0LndlZWsoKSxcIndcIj09PWU/MToyLFwiMFwiKTtjYXNlXCJXXCI6Y2FzZVwiV1dcIjpyZXR1cm4gcy5zKHQuaXNvV2VlaygpLFwiV1wiPT09ZT8xOjIsXCIwXCIpO2Nhc2VcImtcIjpjYXNlXCJra1wiOnJldHVybiBzLnMoU3RyaW5nKDA9PT10LiRIPzI0OnQuJEgpLFwia1wiPT09ZT8xOjIsXCIwXCIpO2Nhc2VcIlhcIjpyZXR1cm4gTWF0aC5mbG9vcih0LiRkLmdldFRpbWUoKS8xZTMpO2Nhc2VcInhcIjpyZXR1cm4gdC4kZC5nZXRUaW1lKCk7Y2FzZVwielwiOnJldHVyblwiW1wiK3Qub2Zmc2V0TmFtZSgpK1wiXVwiO2Nhc2VcInp6elwiOnJldHVyblwiW1wiK3Qub2Zmc2V0TmFtZShcImxvbmdcIikrXCJdXCI7ZGVmYXVsdDpyZXR1cm4gZX19KSk7cmV0dXJuIG4uYmluZCh0aGlzKShhKX19fSkpOyIsImltcG9ydCB7IHNhbml0aXplVXJsIH0gZnJvbSBcIkBicmFpbnRyZWUvc2FuaXRpemUtdXJsXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgZGF5anNJc29XZWVrIGZyb20gXCJkYXlqcy9wbHVnaW4vaXNvV2Vlay5qc1wiO1xuaW1wb3J0IGRheWpzQ3VzdG9tUGFyc2VGb3JtYXQgZnJvbSBcImRheWpzL3BsdWdpbi9jdXN0b21QYXJzZUZvcm1hdC5qc1wiO1xuaW1wb3J0IGRheWpzQWR2YW5jZWRGb3JtYXQgZnJvbSBcImRheWpzL3BsdWdpbi9hZHZhbmNlZEZvcm1hdC5qc1wiO1xuaW1wb3J0IHsgYyBhcyBnZXRDb25maWcsIHMgYXMgc2V0QWNjVGl0bGUsIGcgYXMgZ2V0QWNjVGl0bGUsIHEgYXMgc2V0RGlhZ3JhbVRpdGxlLCB0IGFzIGdldERpYWdyYW1UaXRsZSwgYiBhcyBzZXRBY2NEZXNjcmlwdGlvbiwgYSBhcyBnZXRBY2NEZXNjcmlwdGlvbiwgdiBhcyBjbGVhciQxLCB1IGFzIHV0aWxzLCBsIGFzIGxvZywgaSBhcyBjb25maWd1cmVTdmdTaXplLCBlIGFzIGNvbW1vbiB9IGZyb20gXCIuL21lcm1haWQtYjU4NjBiNTQuanNcIjtcbmltcG9ydCB7IHNlbGVjdCwgc2NhbGVUaW1lLCBtaW4sIG1heCwgc2NhbGVMaW5lYXIsIGludGVycG9sYXRlSGNsLCBheGlzQm90dG9tLCB0aW1lRm9ybWF0LCB0aW1lTW9udGgsIHRpbWVEYXksIHRpbWVIb3VyLCB0aW1lTWludXRlLCB0aW1lU2Vjb25kLCB0aW1lTWlsbGlzZWNvbmQsIGF4aXNUb3AsIHRpbWVNb25kYXksIHRpbWVUdWVzZGF5LCB0aW1lV2VkbmVzZGF5LCB0aW1lVGh1cnNkYXksIHRpbWVGcmlkYXksIHRpbWVTYXR1cmRheSwgdGltZVN1bmRheSB9IGZyb20gXCJkM1wiO1xuaW1wb3J0IFwidHMtZGVkZW50XCI7XG5pbXBvcnQgXCJkb21wdXJpZnlcIjtcbmltcG9ydCBcImtocm9tYVwiO1xuaW1wb3J0IFwibG9kYXNoLWVzL21lbW9pemUuanNcIjtcbmltcG9ydCBcImxvZGFzaC1lcy9tZXJnZS5qc1wiO1xuaW1wb3J0IFwic3R5bGlzXCI7XG5pbXBvcnQgXCJsb2Rhc2gtZXMvaXNFbXB0eS5qc1wiO1xudmFyIHBhcnNlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbyA9IGZ1bmN0aW9uKGssIHYsIG8yLCBsKSB7XG4gICAgZm9yIChvMiA9IG8yIHx8IHt9LCBsID0gay5sZW5ndGg7IGwtLTsgbzJba1tsXV0gPSB2KVxuICAgICAgO1xuICAgIHJldHVybiBvMjtcbiAgfSwgJFYwID0gWzYsIDgsIDEwLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwLCAyMSwgMjIsIDIzLCAyNCwgMjUsIDI2LCAyNywgMjgsIDMwLCAzMiwgMzMsIDM1LCAzN10sICRWMSA9IFsxLCAyNV0sICRWMiA9IFsxLCAyNl0sICRWMyA9IFsxLCAyN10sICRWNCA9IFsxLCAyOF0sICRWNSA9IFsxLCAyOV0sICRWNiA9IFsxLCAzMF0sICRWNyA9IFsxLCAzMV0sICRWOCA9IFsxLCA5XSwgJFY5ID0gWzEsIDEwXSwgJFZhID0gWzEsIDExXSwgJFZiID0gWzEsIDEyXSwgJFZjID0gWzEsIDEzXSwgJFZkID0gWzEsIDE0XSwgJFZlID0gWzEsIDE1XSwgJFZmID0gWzEsIDE2XSwgJFZnID0gWzEsIDE4XSwgJFZoID0gWzEsIDE5XSwgJFZpID0gWzEsIDIwXSwgJFZqID0gWzEsIDIxXSwgJFZrID0gWzEsIDIyXSwgJFZsID0gWzEsIDI0XSwgJFZtID0gWzEsIDMyXTtcbiAgdmFyIHBhcnNlcjIgPSB7XG4gICAgdHJhY2U6IGZ1bmN0aW9uIHRyYWNlKCkge1xuICAgIH0sXG4gICAgeXk6IHt9LFxuICAgIHN5bWJvbHNfOiB7IFwiZXJyb3JcIjogMiwgXCJzdGFydFwiOiAzLCBcImdhbnR0XCI6IDQsIFwiZG9jdW1lbnRcIjogNSwgXCJFT0ZcIjogNiwgXCJsaW5lXCI6IDcsIFwiU1BBQ0VcIjogOCwgXCJzdGF0ZW1lbnRcIjogOSwgXCJOTFwiOiAxMCwgXCJ3ZWVrZGF5XCI6IDExLCBcIndlZWtkYXlfbW9uZGF5XCI6IDEyLCBcIndlZWtkYXlfdHVlc2RheVwiOiAxMywgXCJ3ZWVrZGF5X3dlZG5lc2RheVwiOiAxNCwgXCJ3ZWVrZGF5X3RodXJzZGF5XCI6IDE1LCBcIndlZWtkYXlfZnJpZGF5XCI6IDE2LCBcIndlZWtkYXlfc2F0dXJkYXlcIjogMTcsIFwid2Vla2RheV9zdW5kYXlcIjogMTgsIFwiZGF0ZUZvcm1hdFwiOiAxOSwgXCJpbmNsdXNpdmVFbmREYXRlc1wiOiAyMCwgXCJ0b3BBeGlzXCI6IDIxLCBcImF4aXNGb3JtYXRcIjogMjIsIFwidGlja0ludGVydmFsXCI6IDIzLCBcImV4Y2x1ZGVzXCI6IDI0LCBcImluY2x1ZGVzXCI6IDI1LCBcInRvZGF5TWFya2VyXCI6IDI2LCBcInRpdGxlXCI6IDI3LCBcImFjY190aXRsZVwiOiAyOCwgXCJhY2NfdGl0bGVfdmFsdWVcIjogMjksIFwiYWNjX2Rlc2NyXCI6IDMwLCBcImFjY19kZXNjcl92YWx1ZVwiOiAzMSwgXCJhY2NfZGVzY3JfbXVsdGlsaW5lX3ZhbHVlXCI6IDMyLCBcInNlY3Rpb25cIjogMzMsIFwiY2xpY2tTdGF0ZW1lbnRcIjogMzQsIFwidGFza1R4dFwiOiAzNSwgXCJ0YXNrRGF0YVwiOiAzNiwgXCJjbGlja1wiOiAzNywgXCJjYWxsYmFja25hbWVcIjogMzgsIFwiY2FsbGJhY2thcmdzXCI6IDM5LCBcImhyZWZcIjogNDAsIFwiY2xpY2tTdGF0ZW1lbnREZWJ1Z1wiOiA0MSwgXCIkYWNjZXB0XCI6IDAsIFwiJGVuZFwiOiAxIH0sXG4gICAgdGVybWluYWxzXzogeyAyOiBcImVycm9yXCIsIDQ6IFwiZ2FudHRcIiwgNjogXCJFT0ZcIiwgODogXCJTUEFDRVwiLCAxMDogXCJOTFwiLCAxMjogXCJ3ZWVrZGF5X21vbmRheVwiLCAxMzogXCJ3ZWVrZGF5X3R1ZXNkYXlcIiwgMTQ6IFwid2Vla2RheV93ZWRuZXNkYXlcIiwgMTU6IFwid2Vla2RheV90aHVyc2RheVwiLCAxNjogXCJ3ZWVrZGF5X2ZyaWRheVwiLCAxNzogXCJ3ZWVrZGF5X3NhdHVyZGF5XCIsIDE4OiBcIndlZWtkYXlfc3VuZGF5XCIsIDE5OiBcImRhdGVGb3JtYXRcIiwgMjA6IFwiaW5jbHVzaXZlRW5kRGF0ZXNcIiwgMjE6IFwidG9wQXhpc1wiLCAyMjogXCJheGlzRm9ybWF0XCIsIDIzOiBcInRpY2tJbnRlcnZhbFwiLCAyNDogXCJleGNsdWRlc1wiLCAyNTogXCJpbmNsdWRlc1wiLCAyNjogXCJ0b2RheU1hcmtlclwiLCAyNzogXCJ0aXRsZVwiLCAyODogXCJhY2NfdGl0bGVcIiwgMjk6IFwiYWNjX3RpdGxlX3ZhbHVlXCIsIDMwOiBcImFjY19kZXNjclwiLCAzMTogXCJhY2NfZGVzY3JfdmFsdWVcIiwgMzI6IFwiYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZVwiLCAzMzogXCJzZWN0aW9uXCIsIDM1OiBcInRhc2tUeHRcIiwgMzY6IFwidGFza0RhdGFcIiwgMzc6IFwiY2xpY2tcIiwgMzg6IFwiY2FsbGJhY2tuYW1lXCIsIDM5OiBcImNhbGxiYWNrYXJnc1wiLCA0MDogXCJocmVmXCIgfSxcbiAgICBwcm9kdWN0aW9uc186IFswLCBbMywgM10sIFs1LCAwXSwgWzUsIDJdLCBbNywgMl0sIFs3LCAxXSwgWzcsIDFdLCBbNywgMV0sIFsxMSwgMV0sIFsxMSwgMV0sIFsxMSwgMV0sIFsxMSwgMV0sIFsxMSwgMV0sIFsxMSwgMV0sIFsxMSwgMV0sIFs5LCAxXSwgWzksIDFdLCBbOSwgMV0sIFs5LCAxXSwgWzksIDFdLCBbOSwgMV0sIFs5LCAxXSwgWzksIDFdLCBbOSwgMV0sIFs5LCAxXSwgWzksIDJdLCBbOSwgMl0sIFs5LCAxXSwgWzksIDFdLCBbOSwgMV0sIFs5LCAyXSwgWzM0LCAyXSwgWzM0LCAzXSwgWzM0LCAzXSwgWzM0LCA0XSwgWzM0LCAzXSwgWzM0LCA0XSwgWzM0LCAyXSwgWzQxLCAyXSwgWzQxLCAzXSwgWzQxLCAzXSwgWzQxLCA0XSwgWzQxLCAzXSwgWzQxLCA0XSwgWzQxLCAyXV0sXG4gICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24gYW5vbnltb3VzKHl5dGV4dCwgeXlsZW5nLCB5eWxpbmVubywgeXksIHl5c3RhdGUsICQkLCBfJCkge1xuICAgICAgdmFyICQwID0gJCQubGVuZ3RoIC0gMTtcbiAgICAgIHN3aXRjaCAoeXlzdGF0ZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgcmV0dXJuICQkWyQwIC0gMV07XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLiQgPSBbXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwIC0gMV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgdGhpcy4kID0gW107XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICB5eS5zZXRXZWVrZGF5KFwibW9uZGF5XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgeXkuc2V0V2Vla2RheShcInR1ZXNkYXlcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgeXkuc2V0V2Vla2RheShcIndlZG5lc2RheVwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICB5eS5zZXRXZWVrZGF5KFwidGh1cnNkYXlcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgeXkuc2V0V2Vla2RheShcImZyaWRheVwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICB5eS5zZXRXZWVrZGF5KFwic2F0dXJkYXlcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgeXkuc2V0V2Vla2RheShcInN1bmRheVwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICB5eS5zZXREYXRlRm9ybWF0KCQkWyQwXS5zdWJzdHIoMTEpKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0uc3Vic3RyKDExKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICB5eS5lbmFibGVJbmNsdXNpdmVFbmREYXRlcygpO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXS5zdWJzdHIoMTgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgIHl5LlRvcEF4aXMoKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0uc3Vic3RyKDgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgIHl5LnNldEF4aXNGb3JtYXQoJCRbJDBdLnN1YnN0cigxMSkpO1xuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXS5zdWJzdHIoMTEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgIHl5LnNldFRpY2tJbnRlcnZhbCgkJFskMF0uc3Vic3RyKDEzKSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdLnN1YnN0cigxMyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgeXkuc2V0RXhjbHVkZXMoJCRbJDBdLnN1YnN0cig5KSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdLnN1YnN0cig5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICB5eS5zZXRJbmNsdWRlcygkJFskMF0uc3Vic3RyKDkpKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0uc3Vic3RyKDkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgIHl5LnNldFRvZGF5TWFya2VyKCQkWyQwXS5zdWJzdHIoMTIpKTtcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0uc3Vic3RyKDEyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICB5eS5zZXREaWFncmFtVGl0bGUoJCRbJDBdLnN1YnN0cig2KSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdLnN1YnN0cig2KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMF0udHJpbSgpO1xuICAgICAgICAgIHl5LnNldEFjY1RpdGxlKHRoaXMuJCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjY6XG4gICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdLnRyaW0oKTtcbiAgICAgICAgICB5eS5zZXRBY2NEZXNjcmlwdGlvbih0aGlzLiQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgIHl5LmFkZFNlY3Rpb24oJCRbJDBdLnN1YnN0cig4KSk7XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDBdLnN1YnN0cig4KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMDpcbiAgICAgICAgICB5eS5hZGRUYXNrKCQkWyQwIC0gMV0sICQkWyQwXSk7XG4gICAgICAgICAgdGhpcy4kID0gXCJ0YXNrXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDAgLSAxXTtcbiAgICAgICAgICB5eS5zZXRDbGlja0V2ZW50KCQkWyQwIC0gMV0sICQkWyQwXSwgbnVsbCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDAgLSAyXTtcbiAgICAgICAgICB5eS5zZXRDbGlja0V2ZW50KCQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDAgLSAyXTtcbiAgICAgICAgICB5eS5zZXRDbGlja0V2ZW50KCQkWyQwIC0gMl0sICQkWyQwIC0gMV0sIG51bGwpO1xuICAgICAgICAgIHl5LnNldExpbmsoJCRbJDAgLSAyXSwgJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMCAtIDNdO1xuICAgICAgICAgIHl5LnNldENsaWNrRXZlbnQoJCRbJDAgLSAzXSwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSk7XG4gICAgICAgICAgeXkuc2V0TGluaygkJFskMCAtIDNdLCAkJFskMF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM1OlxuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwIC0gMl07XG4gICAgICAgICAgeXkuc2V0Q2xpY2tFdmVudCgkJFskMCAtIDJdLCAkJFskMF0sIG51bGwpO1xuICAgICAgICAgIHl5LnNldExpbmsoJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzY6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDAgLSAzXTtcbiAgICAgICAgICB5eS5zZXRDbGlja0V2ZW50KCQkWyQwIC0gM10sICQkWyQwIC0gMV0sICQkWyQwXSk7XG4gICAgICAgICAgeXkuc2V0TGluaygkJFskMCAtIDNdLCAkJFskMCAtIDJdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMCAtIDFdO1xuICAgICAgICAgIHl5LnNldExpbmsoJCRbJDAgLSAxXSwgJCRbJDBdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzODpcbiAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICB0aGlzLiQgPSAkJFskMCAtIDFdICsgXCIgXCIgKyAkJFskMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzk6XG4gICAgICAgIGNhc2UgNDA6XG4gICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgdGhpcy4kID0gJCRbJDAgLSAyXSArIFwiIFwiICsgJCRbJDAgLSAxXSArIFwiIFwiICsgJCRbJDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQxOlxuICAgICAgICBjYXNlIDQzOlxuICAgICAgICAgIHRoaXMuJCA9ICQkWyQwIC0gM10gKyBcIiBcIiArICQkWyQwIC0gMl0gKyBcIiBcIiArICQkWyQwIC0gMV0gKyBcIiBcIiArICQkWyQwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuICAgIHRhYmxlOiBbeyAzOiAxLCA0OiBbMSwgMl0gfSwgeyAxOiBbM10gfSwgbygkVjAsIFsyLCAyXSwgeyA1OiAzIH0pLCB7IDY6IFsxLCA0XSwgNzogNSwgODogWzEsIDZdLCA5OiA3LCAxMDogWzEsIDhdLCAxMTogMTcsIDEyOiAkVjEsIDEzOiAkVjIsIDE0OiAkVjMsIDE1OiAkVjQsIDE2OiAkVjUsIDE3OiAkVjYsIDE4OiAkVjcsIDE5OiAkVjgsIDIwOiAkVjksIDIxOiAkVmEsIDIyOiAkVmIsIDIzOiAkVmMsIDI0OiAkVmQsIDI1OiAkVmUsIDI2OiAkVmYsIDI3OiAkVmcsIDI4OiAkVmgsIDMwOiAkVmksIDMyOiAkVmosIDMzOiAkVmssIDM0OiAyMywgMzU6ICRWbCwgMzc6ICRWbSB9LCBvKCRWMCwgWzIsIDddLCB7IDE6IFsyLCAxXSB9KSwgbygkVjAsIFsyLCAzXSksIHsgOTogMzMsIDExOiAxNywgMTI6ICRWMSwgMTM6ICRWMiwgMTQ6ICRWMywgMTU6ICRWNCwgMTY6ICRWNSwgMTc6ICRWNiwgMTg6ICRWNywgMTk6ICRWOCwgMjA6ICRWOSwgMjE6ICRWYSwgMjI6ICRWYiwgMjM6ICRWYywgMjQ6ICRWZCwgMjU6ICRWZSwgMjY6ICRWZiwgMjc6ICRWZywgMjg6ICRWaCwgMzA6ICRWaSwgMzI6ICRWaiwgMzM6ICRWaywgMzQ6IDIzLCAzNTogJFZsLCAzNzogJFZtIH0sIG8oJFYwLCBbMiwgNV0pLCBvKCRWMCwgWzIsIDZdKSwgbygkVjAsIFsyLCAxNV0pLCBvKCRWMCwgWzIsIDE2XSksIG8oJFYwLCBbMiwgMTddKSwgbygkVjAsIFsyLCAxOF0pLCBvKCRWMCwgWzIsIDE5XSksIG8oJFYwLCBbMiwgMjBdKSwgbygkVjAsIFsyLCAyMV0pLCBvKCRWMCwgWzIsIDIyXSksIG8oJFYwLCBbMiwgMjNdKSwgbygkVjAsIFsyLCAyNF0pLCB7IDI5OiBbMSwgMzRdIH0sIHsgMzE6IFsxLCAzNV0gfSwgbygkVjAsIFsyLCAyN10pLCBvKCRWMCwgWzIsIDI4XSksIG8oJFYwLCBbMiwgMjldKSwgeyAzNjogWzEsIDM2XSB9LCBvKCRWMCwgWzIsIDhdKSwgbygkVjAsIFsyLCA5XSksIG8oJFYwLCBbMiwgMTBdKSwgbygkVjAsIFsyLCAxMV0pLCBvKCRWMCwgWzIsIDEyXSksIG8oJFYwLCBbMiwgMTNdKSwgbygkVjAsIFsyLCAxNF0pLCB7IDM4OiBbMSwgMzddLCA0MDogWzEsIDM4XSB9LCBvKCRWMCwgWzIsIDRdKSwgbygkVjAsIFsyLCAyNV0pLCBvKCRWMCwgWzIsIDI2XSksIG8oJFYwLCBbMiwgMzBdKSwgbygkVjAsIFsyLCAzMV0sIHsgMzk6IFsxLCAzOV0sIDQwOiBbMSwgNDBdIH0pLCBvKCRWMCwgWzIsIDM3XSwgeyAzODogWzEsIDQxXSB9KSwgbygkVjAsIFsyLCAzMl0sIHsgNDA6IFsxLCA0Ml0gfSksIG8oJFYwLCBbMiwgMzNdKSwgbygkVjAsIFsyLCAzNV0sIHsgMzk6IFsxLCA0M10gfSksIG8oJFYwLCBbMiwgMzRdKSwgbygkVjAsIFsyLCAzNl0pXSxcbiAgICBkZWZhdWx0QWN0aW9uczoge30sXG4gICAgcGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcbiAgICAgIGlmIChoYXNoLnJlY292ZXJhYmxlKSB7XG4gICAgICAgIHRoaXMudHJhY2Uoc3RyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihzdHIpO1xuICAgICAgICBlcnJvci5oYXNoID0gaGFzaDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcywgc3RhY2sgPSBbMF0sIHRzdGFjayA9IFtdLCB2c3RhY2sgPSBbbnVsbF0sIGxzdGFjayA9IFtdLCB0YWJsZSA9IHRoaXMudGFibGUsIHl5dGV4dCA9IFwiXCIsIHl5bGluZW5vID0gMCwgeXlsZW5nID0gMCwgVEVSUk9SID0gMiwgRU9GID0gMTtcbiAgICAgIHZhciBhcmdzID0gbHN0YWNrLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHZhciBsZXhlcjIgPSBPYmplY3QuY3JlYXRlKHRoaXMubGV4ZXIpO1xuICAgICAgdmFyIHNoYXJlZFN0YXRlID0geyB5eToge30gfTtcbiAgICAgIGZvciAodmFyIGsgaW4gdGhpcy55eSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMueXksIGspKSB7XG4gICAgICAgICAgc2hhcmVkU3RhdGUueXlba10gPSB0aGlzLnl5W2tdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXhlcjIuc2V0SW5wdXQoaW5wdXQsIHNoYXJlZFN0YXRlLnl5KTtcbiAgICAgIHNoYXJlZFN0YXRlLnl5LmxleGVyID0gbGV4ZXIyO1xuICAgICAgc2hhcmVkU3RhdGUueXkucGFyc2VyID0gdGhpcztcbiAgICAgIGlmICh0eXBlb2YgbGV4ZXIyLnl5bGxvYyA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGxleGVyMi55eWxsb2MgPSB7fTtcbiAgICAgIH1cbiAgICAgIHZhciB5eWxvYyA9IGxleGVyMi55eWxsb2M7XG4gICAgICBsc3RhY2sucHVzaCh5eWxvYyk7XG4gICAgICB2YXIgcmFuZ2VzID0gbGV4ZXIyLm9wdGlvbnMgJiYgbGV4ZXIyLm9wdGlvbnMucmFuZ2VzO1xuICAgICAgaWYgKHR5cGVvZiBzaGFyZWRTdGF0ZS55eS5wYXJzZUVycm9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhpcy5wYXJzZUVycm9yID0gc2hhcmVkU3RhdGUueXkucGFyc2VFcnJvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFyc2VFcnJvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZUVycm9yO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gbGV4KCkge1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHRva2VuID0gdHN0YWNrLnBvcCgpIHx8IGxleGVyMi5sZXgoKSB8fCBFT0Y7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBpZiAodG9rZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgdHN0YWNrID0gdG9rZW47XG4gICAgICAgICAgICB0b2tlbiA9IHRzdGFjay5wb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG9rZW4gPSBzZWxmLnN5bWJvbHNfW3Rva2VuXSB8fCB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICB9XG4gICAgICB2YXIgc3ltYm9sLCBzdGF0ZSwgYWN0aW9uLCByLCB5eXZhbCA9IHt9LCBwLCBsZW4sIG5ld1N0YXRlLCBleHBlY3RlZDtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHN0YXRlID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlXSkge1xuICAgICAgICAgIGFjdGlvbiA9IHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzeW1ib2wgPT09IG51bGwgfHwgdHlwZW9mIHN5bWJvbCA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBzeW1ib2wgPSBsZXgoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWN0aW9uID0gdGFibGVbc3RhdGVdICYmIHRhYmxlW3N0YXRlXVtzeW1ib2xdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSBcInVuZGVmaW5lZFwiIHx8ICFhY3Rpb24ubGVuZ3RoIHx8ICFhY3Rpb25bMF0pIHtcbiAgICAgICAgICB2YXIgZXJyU3RyID0gXCJcIjtcbiAgICAgICAgICBleHBlY3RlZCA9IFtdO1xuICAgICAgICAgIGZvciAocCBpbiB0YWJsZVtzdGF0ZV0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRlcm1pbmFsc19bcF0gJiYgcCA+IFRFUlJPUikge1xuICAgICAgICAgICAgICBleHBlY3RlZC5wdXNoKFwiJ1wiICsgdGhpcy50ZXJtaW5hbHNfW3BdICsgXCInXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobGV4ZXIyLnNob3dQb3NpdGlvbikge1xuICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjpcXG5cIiArIGxleGVyMi5zaG93UG9zaXRpb24oKSArIFwiXFxuRXhwZWN0aW5nIFwiICsgZXhwZWN0ZWQuam9pbihcIiwgXCIpICsgXCIsIGdvdCAnXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJTdHIgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoeXlsaW5lbm8gKyAxKSArIFwiOiBVbmV4cGVjdGVkIFwiICsgKHN5bWJvbCA9PSBFT0YgPyBcImVuZCBvZiBpbnB1dFwiIDogXCInXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wYXJzZUVycm9yKGVyclN0ciwge1xuICAgICAgICAgICAgdGV4dDogbGV4ZXIyLm1hdGNoLFxuICAgICAgICAgICAgdG9rZW46IHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCxcbiAgICAgICAgICAgIGxpbmU6IGxleGVyMi55eWxpbmVubyxcbiAgICAgICAgICAgIGxvYzogeXlsb2MsXG4gICAgICAgICAgICBleHBlY3RlZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rpb25bMF0gaW5zdGFuY2VvZiBBcnJheSAmJiBhY3Rpb24ubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcnNlIEVycm9yOiBtdWx0aXBsZSBhY3Rpb25zIHBvc3NpYmxlIGF0IHN0YXRlOiBcIiArIHN0YXRlICsgXCIsIHRva2VuOiBcIiArIHN5bWJvbCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChhY3Rpb25bMF0pIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBzdGFjay5wdXNoKHN5bWJvbCk7XG4gICAgICAgICAgICB2c3RhY2sucHVzaChsZXhlcjIueXl0ZXh0KTtcbiAgICAgICAgICAgIGxzdGFjay5wdXNoKGxleGVyMi55eWxsb2MpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChhY3Rpb25bMV0pO1xuICAgICAgICAgICAgc3ltYm9sID0gbnVsbDtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeXlsZW5nID0gbGV4ZXIyLnl5bGVuZztcbiAgICAgICAgICAgICAgeXl0ZXh0ID0gbGV4ZXIyLnl5dGV4dDtcbiAgICAgICAgICAgICAgeXlsaW5lbm8gPSBsZXhlcjIueXlsaW5lbm87XG4gICAgICAgICAgICAgIHl5bG9jID0gbGV4ZXIyLnl5bGxvYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxlbiA9IHRoaXMucHJvZHVjdGlvbnNfW2FjdGlvblsxXV1bMV07XG4gICAgICAgICAgICB5eXZhbC4kID0gdnN0YWNrW3ZzdGFjay5sZW5ndGggLSBsZW5dO1xuICAgICAgICAgICAgeXl2YWwuXyQgPSB7XG4gICAgICAgICAgICAgIGZpcnN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgbGFzdF9saW5lOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9jb2x1bW5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocmFuZ2VzKSB7XG4gICAgICAgICAgICAgIHl5dmFsLl8kLnJhbmdlID0gW1xuICAgICAgICAgICAgICAgIGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0ucmFuZ2VbMF0sXG4gICAgICAgICAgICAgICAgbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5yYW5nZVsxXVxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgciA9IHRoaXMucGVyZm9ybUFjdGlvbi5hcHBseSh5eXZhbCwgW1xuICAgICAgICAgICAgICB5eXRleHQsXG4gICAgICAgICAgICAgIHl5bGVuZyxcbiAgICAgICAgICAgICAgeXlsaW5lbm8sXG4gICAgICAgICAgICAgIHNoYXJlZFN0YXRlLnl5LFxuICAgICAgICAgICAgICBhY3Rpb25bMV0sXG4gICAgICAgICAgICAgIHZzdGFjayxcbiAgICAgICAgICAgICAgbHN0YWNrXG4gICAgICAgICAgICBdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIHN0YWNrID0gc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4gKiAyKTtcbiAgICAgICAgICAgICAgdnN0YWNrID0gdnN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcbiAgICAgICAgICAgICAgbHN0YWNrID0gbHN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YWNrLnB1c2godGhpcy5wcm9kdWN0aW9uc19bYWN0aW9uWzFdXVswXSk7XG4gICAgICAgICAgICB2c3RhY2sucHVzaCh5eXZhbC4kKTtcbiAgICAgICAgICAgIGxzdGFjay5wdXNoKHl5dmFsLl8kKTtcbiAgICAgICAgICAgIG5ld1N0YXRlID0gdGFibGVbc3RhY2tbc3RhY2subGVuZ3RoIC0gMl1dW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDFdXTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV3U3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbiAgdmFyIGxleGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxleGVyMiA9IHtcbiAgICAgIEVPRjogMSxcbiAgICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XG4gICAgICAgIGlmICh0aGlzLnl5LnBhcnNlcikge1xuICAgICAgICAgIHRoaXMueXkucGFyc2VyLnBhcnNlRXJyb3Ioc3RyLCBoYXNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJlc2V0cyB0aGUgbGV4ZXIsIHNldHMgbmV3IGlucHV0XG4gICAgICBzZXRJbnB1dDogZnVuY3Rpb24oaW5wdXQsIHl5KSB7XG4gICAgICAgIHRoaXMueXkgPSB5eSB8fCB0aGlzLnl5IHx8IHt9O1xuICAgICAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuICAgICAgICB0aGlzLl9tb3JlID0gdGhpcy5fYmFja3RyYWNrID0gdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDA7XG4gICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbXCJJTklUSUFMXCJdO1xuICAgICAgICB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogMCxcbiAgICAgICAgICBsYXN0X2xpbmU6IDEsXG4gICAgICAgICAgbGFzdF9jb2x1bW46IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFswLCAwXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIGNvbnN1bWVzIGFuZCByZXR1cm5zIG9uZSBjaGFyIGZyb20gdGhlIGlucHV0XG4gICAgICBpbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMuX2lucHV0WzBdO1xuICAgICAgICB0aGlzLnl5dGV4dCArPSBjaDtcbiAgICAgICAgdGhpcy55eWxlbmcrKztcbiAgICAgICAgdGhpcy5vZmZzZXQrKztcbiAgICAgICAgdGhpcy5tYXRjaCArPSBjaDtcbiAgICAgICAgdGhpcy5tYXRjaGVkICs9IGNoO1xuICAgICAgICB2YXIgbGluZXMgPSBjaC5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG4gICAgICAgIGlmIChsaW5lcykge1xuICAgICAgICAgIHRoaXMueXlsaW5lbm8rKztcbiAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2VbMV0rKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKDEpO1xuICAgICAgICByZXR1cm4gY2g7XG4gICAgICB9LFxuICAgICAgLy8gdW5zaGlmdHMgb25lIGNoYXIgKG9yIGEgc3RyaW5nKSBpbnRvIHRoZSBpbnB1dFxuICAgICAgdW5wdXQ6IGZ1bmN0aW9uKGNoKSB7XG4gICAgICAgIHZhciBsZW4gPSBjaC5sZW5ndGg7XG4gICAgICAgIHZhciBsaW5lcyA9IGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gY2ggKyB0aGlzLl9pbnB1dDtcbiAgICAgICAgdGhpcy55eXRleHQgPSB0aGlzLnl5dGV4dC5zdWJzdHIoMCwgdGhpcy55eXRleHQubGVuZ3RoIC0gbGVuKTtcbiAgICAgICAgdGhpcy5vZmZzZXQgLT0gbGVuO1xuICAgICAgICB2YXIgb2xkTGluZXMgPSB0aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMubWF0Y2ggPSB0aGlzLm1hdGNoLnN1YnN0cigwLCB0aGlzLm1hdGNoLmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSAxKTtcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLnl5bGluZW5vIC09IGxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSB0aGlzLnl5bGxvYy5yYW5nZTtcbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MuZmlyc3RfbGluZSxcbiAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiBsaW5lcyA/IChsaW5lcy5sZW5ndGggPT09IG9sZExpbmVzLmxlbmd0aCA/IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiA6IDApICsgb2xkTGluZXNbb2xkTGluZXMubGVuZ3RoIC0gbGluZXMubGVuZ3RoXS5sZW5ndGggLSBsaW5lc1swXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gLSBsZW5cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFtyWzBdLCByWzBdICsgdGhpcy55eWxlbmcgLSBsZW5dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBXaGVuIGNhbGxlZCBmcm9tIGFjdGlvbiwgY2FjaGVzIG1hdGNoZWQgdGV4dCBhbmQgYXBwZW5kcyBpdCBvbiBuZXh0IGFjdGlvblxuICAgICAgbW9yZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX21vcmUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBXaGVuIGNhbGxlZCBmcm9tIGFjdGlvbiwgc2lnbmFscyB0aGUgbGV4ZXIgdGhhdCB0aGlzIHJ1bGUgZmFpbHMgdG8gbWF0Y2ggdGhlIGlucHV0LCBzbyB0aGUgbmV4dCBtYXRjaGluZyBydWxlIChyZWdleCkgc2hvdWxkIGJlIHRlc3RlZCBpbnN0ZWFkLlxuICAgICAgcmVqZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFlvdSBjYW4gb25seSBpbnZva2UgcmVqZWN0KCkgaW4gdGhlIGxleGVyIHdoZW4gdGhlIGxleGVyIGlzIG9mIHRoZSBiYWNrdHJhY2tpbmcgcGVyc3Vhc2lvbiAob3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIgPSB0cnVlKS5cXG5cIiArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgIGxpbmU6IHRoaXMueXlsaW5lbm9cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyByZXRhaW4gZmlyc3QgbiBjaGFyYWN0ZXJzIG9mIHRoZSBtYXRjaFxuICAgICAgbGVzczogZnVuY3Rpb24obikge1xuICAgICAgICB0aGlzLnVucHV0KHRoaXMubWF0Y2guc2xpY2UobikpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIGFscmVhZHkgbWF0Y2hlZCBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHBhc3RJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwYXN0ID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gdGhpcy5tYXRjaC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gKHBhc3QubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikgKyBwYXN0LnN1YnN0cigtMjApLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sXG4gICAgICAvLyBkaXNwbGF5cyB1cGNvbWluZyBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHVwY29taW5nSW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbmV4dCA9IHRoaXMubWF0Y2g7XG4gICAgICAgIGlmIChuZXh0Lmxlbmd0aCA8IDIwKSB7XG4gICAgICAgICAgbmV4dCArPSB0aGlzLl9pbnB1dC5zdWJzdHIoMCwgMjAgLSBuZXh0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChuZXh0LnN1YnN0cigwLCAyMCkgKyAobmV4dC5sZW5ndGggPiAyMCA/IFwiLi4uXCIgOiBcIlwiKSkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuICAgICAgfSxcbiAgICAgIC8vIGRpc3BsYXlzIHRoZSBjaGFyYWN0ZXIgcG9zaXRpb24gd2hlcmUgdGhlIGxleGluZyBlcnJvciBvY2N1cnJlZCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHNob3dQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwcmUgPSB0aGlzLnBhc3RJbnB1dCgpO1xuICAgICAgICB2YXIgYyA9IG5ldyBBcnJheShwcmUubGVuZ3RoICsgMSkuam9pbihcIi1cIik7XG4gICAgICAgIHJldHVybiBwcmUgKyB0aGlzLnVwY29taW5nSW5wdXQoKSArIFwiXFxuXCIgKyBjICsgXCJeXCI7XG4gICAgICB9LFxuICAgICAgLy8gdGVzdCB0aGUgbGV4ZWQgdG9rZW46IHJldHVybiBGQUxTRSB3aGVuIG5vdCBhIG1hdGNoLCBvdGhlcndpc2UgcmV0dXJuIHRva2VuXG4gICAgICB0ZXN0X21hdGNoOiBmdW5jdGlvbihtYXRjaCwgaW5kZXhlZF9ydWxlKSB7XG4gICAgICAgIHZhciB0b2tlbiwgbGluZXMsIGJhY2t1cDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICBiYWNrdXAgPSB7XG4gICAgICAgICAgICB5eWxpbmVubzogdGhpcy55eWxpbmVubyxcbiAgICAgICAgICAgIHl5bGxvYzoge1xuICAgICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMubGFzdF9saW5lLFxuICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeXl0ZXh0OiB0aGlzLnl5dGV4dCxcbiAgICAgICAgICAgIG1hdGNoOiB0aGlzLm1hdGNoLFxuICAgICAgICAgICAgbWF0Y2hlczogdGhpcy5tYXRjaGVzLFxuICAgICAgICAgICAgbWF0Y2hlZDogdGhpcy5tYXRjaGVkLFxuICAgICAgICAgICAgeXlsZW5nOiB0aGlzLnl5bGVuZyxcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgICBfbW9yZTogdGhpcy5fbW9yZSxcbiAgICAgICAgICAgIF9pbnB1dDogdGhpcy5faW5wdXQsXG4gICAgICAgICAgICB5eTogdGhpcy55eSxcbiAgICAgICAgICAgIGNvbmRpdGlvblN0YWNrOiB0aGlzLmNvbmRpdGlvblN0YWNrLnNsaWNlKDApLFxuICAgICAgICAgICAgZG9uZTogdGhpcy5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgICAgYmFja3VwLnl5bGxvYy5yYW5nZSA9IHRoaXMueXlsbG9jLnJhbmdlLnNsaWNlKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsaW5lcyA9IG1hdGNoWzBdLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgaWYgKGxpbmVzKSB7XG4gICAgICAgICAgdGhpcy55eWxpbmVubyArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5sZW5ndGggLSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIG1hdGNoWzBdLmxlbmd0aFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnl5dGV4dCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gbWF0Y2g7XG4gICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3RoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZ107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9yZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICB0aGlzLm1hdGNoZWQgKz0gbWF0Y2hbMF07XG4gICAgICAgIHRva2VuID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodGhpcywgdGhpcy55eSwgdGhpcywgaW5kZXhlZF9ydWxlLCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pO1xuICAgICAgICBpZiAodGhpcy5kb25lICYmIHRoaXMuX2lucHV0KSB7XG4gICAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgIGZvciAodmFyIGsgaW4gYmFja3VwKSB7XG4gICAgICAgICAgICB0aGlzW2tdID0gYmFja3VwW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiBuZXh0IG1hdGNoIGluIGlucHV0XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lucHV0KSB7XG4gICAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG9rZW4sIG1hdGNoLCB0ZW1wTWF0Y2gsIGluZGV4O1xuICAgICAgICBpZiAoIXRoaXMuX21vcmUpIHtcbiAgICAgICAgICB0aGlzLnl5dGV4dCA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5tYXRjaCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJ1bGVzID0gdGhpcy5fY3VycmVudFJ1bGVzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0ZW1wTWF0Y2ggPSB0aGlzLl9pbnB1dC5tYXRjaCh0aGlzLnJ1bGVzW3J1bGVzW2ldXSk7XG4gICAgICAgICAgaWYgKHRlbXBNYXRjaCAmJiAoIW1hdGNoIHx8IHRlbXBNYXRjaFswXS5sZW5ndGggPiBtYXRjaFswXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBtYXRjaCA9IHRlbXBNYXRjaDtcbiAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgICAgIHRva2VuID0gdGhpcy50ZXN0X21hdGNoKHRlbXBNYXRjaCwgcnVsZXNbaV0pO1xuICAgICAgICAgICAgICBpZiAodG9rZW4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuZmxleCkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdG9rZW4gPSB0aGlzLnRlc3RfbWF0Y2gobWF0Y2gsIHJ1bGVzW2luZGV4XSk7XG4gICAgICAgICAgaWYgKHRva2VuICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lucHV0ID09PSBcIlwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFVucmVjb2duaXplZCB0ZXh0LlxcblwiICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggdGhhdCBoYXMgYSB0b2tlblxuICAgICAgbGV4OiBmdW5jdGlvbiBsZXgoKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5uZXh0KCk7XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubGV4KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBhY3RpdmF0ZXMgYSBuZXcgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIChwdXNoZXMgdGhlIG5ldyBsZXhlciBjb25kaXRpb24gc3RhdGUgb250byB0aGUgY29uZGl0aW9uIHN0YWNrKVxuICAgICAgYmVnaW46IGZ1bmN0aW9uIGJlZ2luKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrLnB1c2goY29uZGl0aW9uKTtcbiAgICAgIH0sXG4gICAgICAvLyBwb3AgdGhlIHByZXZpb3VzbHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvZmYgdGhlIGNvbmRpdGlvbiBzdGFja1xuICAgICAgcG9wU3RhdGU6IGZ1bmN0aW9uIHBvcFN0YXRlKCkge1xuICAgICAgICB2YXIgbiA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKG4gPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbMF07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBwcm9kdWNlIHRoZSBsZXhlciBydWxlIHNldCB3aGljaCBpcyBhY3RpdmUgZm9yIHRoZSBjdXJyZW50bHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZVxuICAgICAgX2N1cnJlbnRSdWxlczogZnVuY3Rpb24gX2N1cnJlbnRSdWxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoICYmIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbnNbdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdXS5ydWxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zW1wiSU5JVElBTFwiXS5ydWxlcztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJldHVybiB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGU7IHdoZW4gYW4gaW5kZXggYXJndW1lbnQgaXMgcHJvdmlkZWQgaXQgcHJvZHVjZXMgdGhlIE4tdGggcHJldmlvdXMgY29uZGl0aW9uIHN0YXRlLCBpZiBhdmFpbGFibGVcbiAgICAgIHRvcFN0YXRlOiBmdW5jdGlvbiB0b3BTdGF0ZShuKSB7XG4gICAgICAgIG4gPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDEgLSBNYXRoLmFicyhuIHx8IDApO1xuICAgICAgICBpZiAobiA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbbl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiSU5JVElBTFwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gYWxpYXMgZm9yIGJlZ2luKGNvbmRpdGlvbilcbiAgICAgIHB1c2hTdGF0ZTogZnVuY3Rpb24gcHVzaFN0YXRlKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmJlZ2luKGNvbmRpdGlvbik7XG4gICAgICB9LFxuICAgICAgLy8gcmV0dXJuIHRoZSBudW1iZXIgb2Ygc3RhdGVzIGN1cnJlbnRseSBvbiB0aGUgc3RhY2tcbiAgICAgIHN0YXRlU3RhY2tTaXplOiBmdW5jdGlvbiBzdGF0ZVN0YWNrU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoO1xuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHsgXCJjYXNlLWluc2Vuc2l0aXZlXCI6IHRydWUgfSxcbiAgICAgIHBlcmZvcm1BY3Rpb246IGZ1bmN0aW9uIGFub255bW91cyh5eSwgeXlfLCAkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zLCBZWV9TVEFSVCkge1xuICAgICAgICBzd2l0Y2ggKCRhdm9pZGluZ19uYW1lX2NvbGxpc2lvbnMpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwib3Blbl9kaXJlY3RpdmVcIik7XG4gICAgICAgICAgICByZXR1cm4gXCJvcGVuX2RpcmVjdGl2ZVwiO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJhY2NfdGl0bGVcIik7XG4gICAgICAgICAgICByZXR1cm4gMjg7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX3RpdGxlX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImFjY19kZXNjclwiKTtcbiAgICAgICAgICAgIHJldHVybiAzMDtcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfZGVzY3JfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiYWNjX2Rlc2NyX211bHRpbGluZVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHJldHVybiBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIHJldHVybiAxMDtcbiAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiaHJlZlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgcmV0dXJuIDQwO1xuICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiY2FsbGJhY2tuYW1lXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiY2FsbGJhY2thcmdzXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgIHJldHVybiAzODtcbiAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICAgIHJldHVybiAzOTtcbiAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImNsaWNrXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICByZXR1cm4gMzc7XG4gICAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICAgIHJldHVybiA0O1xuICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICByZXR1cm4gMTk7XG4gICAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICAgIHJldHVybiAyMDtcbiAgICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgICAgcmV0dXJuIDIxO1xuICAgICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgICByZXR1cm4gMjI7XG4gICAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICAgIHJldHVybiAyMztcbiAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgcmV0dXJuIDI1O1xuICAgICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgICByZXR1cm4gMjQ7XG4gICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgIHJldHVybiAyNjtcbiAgICAgICAgICBjYXNlIDM1OlxuICAgICAgICAgICAgcmV0dXJuIDEyO1xuICAgICAgICAgIGNhc2UgMzY6XG4gICAgICAgICAgICByZXR1cm4gMTM7XG4gICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgIHJldHVybiAxNDtcbiAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgcmV0dXJuIDE1O1xuICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICByZXR1cm4gMTY7XG4gICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgIHJldHVybiAxNztcbiAgICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgICAgcmV0dXJuIDE4O1xuICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICByZXR1cm4gXCJkYXRlXCI7XG4gICAgICAgICAgY2FzZSA0MzpcbiAgICAgICAgICAgIHJldHVybiAyNztcbiAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgcmV0dXJuIFwiYWNjRGVzY3JpcHRpb25cIjtcbiAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgcmV0dXJuIDMzO1xuICAgICAgICAgIGNhc2UgNDY6XG4gICAgICAgICAgICByZXR1cm4gMzU7XG4gICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDQ4OlxuICAgICAgICAgICAgcmV0dXJuIFwiOlwiO1xuICAgICAgICAgIGNhc2UgNDk6XG4gICAgICAgICAgICByZXR1cm4gNjtcbiAgICAgICAgICBjYXNlIDUwOlxuICAgICAgICAgICAgcmV0dXJuIFwiSU5WQUxJRFwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcnVsZXM6IFsvXig/OiUlXFx7KS9pLCAvXig/OmFjY1RpdGxlXFxzKjpcXHMqKS9pLCAvXig/Oig/IVxcbnx8KSpbXlxcbl0qKS9pLCAvXig/OmFjY0Rlc2NyXFxzKjpcXHMqKS9pLCAvXig/Oig/IVxcbnx8KSpbXlxcbl0qKS9pLCAvXig/OmFjY0Rlc2NyXFxzKlxce1xccyopL2ksIC9eKD86W1xcfV0pL2ksIC9eKD86W15cXH1dKikvaSwgL14oPzolJSg/IVxceykqW15cXG5dKikvaSwgL14oPzpbXlxcfV0lJSpbXlxcbl0qKS9pLCAvXig/OiUlKlteXFxuXSpbXFxuXSopL2ksIC9eKD86W1xcbl0rKS9pLCAvXig/OlxccyspL2ksIC9eKD86JVteXFxuXSopL2ksIC9eKD86aHJlZltcXHNdK1tcIl0pL2ksIC9eKD86W1wiXSkvaSwgL14oPzpbXlwiXSopL2ksIC9eKD86Y2FsbFtcXHNdKykvaSwgL14oPzpcXChbXFxzXSpcXCkpL2ksIC9eKD86XFwoKS9pLCAvXig/OlteKF0qKS9pLCAvXig/OlxcKSkvaSwgL14oPzpbXildKikvaSwgL14oPzpjbGlja1tcXHNdKykvaSwgL14oPzpbXFxzXFxuXSkvaSwgL14oPzpbXlxcc1xcbl0qKS9pLCAvXig/OmdhbnR0XFxiKS9pLCAvXig/OmRhdGVGb3JtYXRcXHNbXiNcXG47XSspL2ksIC9eKD86aW5jbHVzaXZlRW5kRGF0ZXNcXGIpL2ksIC9eKD86dG9wQXhpc1xcYikvaSwgL14oPzpheGlzRm9ybWF0XFxzW14jXFxuO10rKS9pLCAvXig/OnRpY2tJbnRlcnZhbFxcc1teI1xcbjtdKykvaSwgL14oPzppbmNsdWRlc1xcc1teI1xcbjtdKykvaSwgL14oPzpleGNsdWRlc1xcc1teI1xcbjtdKykvaSwgL14oPzp0b2RheU1hcmtlclxcc1teXFxuO10rKS9pLCAvXig/OndlZWtkYXlcXHMrbW9uZGF5XFxiKS9pLCAvXig/OndlZWtkYXlcXHMrdHVlc2RheVxcYikvaSwgL14oPzp3ZWVrZGF5XFxzK3dlZG5lc2RheVxcYikvaSwgL14oPzp3ZWVrZGF5XFxzK3RodXJzZGF5XFxiKS9pLCAvXig/OndlZWtkYXlcXHMrZnJpZGF5XFxiKS9pLCAvXig/OndlZWtkYXlcXHMrc2F0dXJkYXlcXGIpL2ksIC9eKD86d2Vla2RheVxccytzdW5kYXlcXGIpL2ksIC9eKD86XFxkXFxkXFxkXFxkLVxcZFxcZC1cXGRcXGRcXGIpL2ksIC9eKD86dGl0bGVcXHNbXlxcbl0rKS9pLCAvXig/OmFjY0Rlc2NyaXB0aW9uXFxzW14jXFxuO10rKS9pLCAvXig/OnNlY3Rpb25cXHNbXlxcbl0rKS9pLCAvXig/OlteOlxcbl0rKS9pLCAvXig/OjpbXiNcXG47XSspL2ksIC9eKD86OikvaSwgL14oPzokKS9pLCAvXig/Oi4pL2ldLFxuICAgICAgY29uZGl0aW9uczogeyBcImFjY19kZXNjcl9tdWx0aWxpbmVcIjogeyBcInJ1bGVzXCI6IFs2LCA3XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJhY2NfZGVzY3JcIjogeyBcInJ1bGVzXCI6IFs0XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJhY2NfdGl0bGVcIjogeyBcInJ1bGVzXCI6IFsyXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJjYWxsYmFja2FyZ3NcIjogeyBcInJ1bGVzXCI6IFsyMSwgMjJdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImNhbGxiYWNrbmFtZVwiOiB7IFwicnVsZXNcIjogWzE4LCAxOSwgMjBdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImhyZWZcIjogeyBcInJ1bGVzXCI6IFsxNSwgMTZdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImNsaWNrXCI6IHsgXCJydWxlc1wiOiBbMjQsIDI1XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJJTklUSUFMXCI6IHsgXCJydWxlc1wiOiBbMCwgMSwgMywgNSwgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNywgMjMsIDI2LCAyNywgMjgsIDI5LCAzMCwgMzEsIDMyLCAzMywgMzQsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDQxLCA0MiwgNDMsIDQ0LCA0NSwgNDYsIDQ3LCA0OCwgNDksIDUwXSwgXCJpbmNsdXNpdmVcIjogdHJ1ZSB9IH1cbiAgICB9O1xuICAgIHJldHVybiBsZXhlcjI7XG4gIH0oKTtcbiAgcGFyc2VyMi5sZXhlciA9IGxleGVyO1xuICBmdW5jdGlvbiBQYXJzZXIoKSB7XG4gICAgdGhpcy55eSA9IHt9O1xuICB9XG4gIFBhcnNlci5wcm90b3R5cGUgPSBwYXJzZXIyO1xuICBwYXJzZXIyLlBhcnNlciA9IFBhcnNlcjtcbiAgcmV0dXJuIG5ldyBQYXJzZXIoKTtcbn0oKTtcbnBhcnNlci5wYXJzZXIgPSBwYXJzZXI7XG5jb25zdCBnYW50dFBhcnNlciA9IHBhcnNlcjtcbmRheWpzLmV4dGVuZChkYXlqc0lzb1dlZWspO1xuZGF5anMuZXh0ZW5kKGRheWpzQ3VzdG9tUGFyc2VGb3JtYXQpO1xuZGF5anMuZXh0ZW5kKGRheWpzQWR2YW5jZWRGb3JtYXQpO1xubGV0IGRhdGVGb3JtYXQgPSBcIlwiO1xubGV0IGF4aXNGb3JtYXQgPSBcIlwiO1xubGV0IHRpY2tJbnRlcnZhbCA9IHZvaWQgMDtcbmxldCB0b2RheU1hcmtlciA9IFwiXCI7XG5sZXQgaW5jbHVkZXMgPSBbXTtcbmxldCBleGNsdWRlcyA9IFtdO1xubGV0IGxpbmtzID0ge307XG5sZXQgc2VjdGlvbnMgPSBbXTtcbmxldCB0YXNrcyA9IFtdO1xubGV0IGN1cnJlbnRTZWN0aW9uID0gXCJcIjtcbmxldCBkaXNwbGF5TW9kZSA9IFwiXCI7XG5jb25zdCB0YWdzID0gW1wiYWN0aXZlXCIsIFwiZG9uZVwiLCBcImNyaXRcIiwgXCJtaWxlc3RvbmVcIl07XG5sZXQgZnVucyA9IFtdO1xubGV0IGluY2x1c2l2ZUVuZERhdGVzID0gZmFsc2U7XG5sZXQgdG9wQXhpcyA9IGZhbHNlO1xubGV0IHdlZWtkYXkgPSBcInN1bmRheVwiO1xubGV0IGxhc3RPcmRlciA9IDA7XG5jb25zdCBjbGVhciA9IGZ1bmN0aW9uKCkge1xuICBzZWN0aW9ucyA9IFtdO1xuICB0YXNrcyA9IFtdO1xuICBjdXJyZW50U2VjdGlvbiA9IFwiXCI7XG4gIGZ1bnMgPSBbXTtcbiAgdGFza0NudCA9IDA7XG4gIGxhc3RUYXNrID0gdm9pZCAwO1xuICBsYXN0VGFza0lEID0gdm9pZCAwO1xuICByYXdUYXNrcyA9IFtdO1xuICBkYXRlRm9ybWF0ID0gXCJcIjtcbiAgYXhpc0Zvcm1hdCA9IFwiXCI7XG4gIGRpc3BsYXlNb2RlID0gXCJcIjtcbiAgdGlja0ludGVydmFsID0gdm9pZCAwO1xuICB0b2RheU1hcmtlciA9IFwiXCI7XG4gIGluY2x1ZGVzID0gW107XG4gIGV4Y2x1ZGVzID0gW107XG4gIGluY2x1c2l2ZUVuZERhdGVzID0gZmFsc2U7XG4gIHRvcEF4aXMgPSBmYWxzZTtcbiAgbGFzdE9yZGVyID0gMDtcbiAgbGlua3MgPSB7fTtcbiAgY2xlYXIkMSgpO1xuICB3ZWVrZGF5ID0gXCJzdW5kYXlcIjtcbn07XG5jb25zdCBzZXRBeGlzRm9ybWF0ID0gZnVuY3Rpb24odHh0KSB7XG4gIGF4aXNGb3JtYXQgPSB0eHQ7XG59O1xuY29uc3QgZ2V0QXhpc0Zvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gYXhpc0Zvcm1hdDtcbn07XG5jb25zdCBzZXRUaWNrSW50ZXJ2YWwgPSBmdW5jdGlvbih0eHQpIHtcbiAgdGlja0ludGVydmFsID0gdHh0O1xufTtcbmNvbnN0IGdldFRpY2tJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGlja0ludGVydmFsO1xufTtcbmNvbnN0IHNldFRvZGF5TWFya2VyID0gZnVuY3Rpb24odHh0KSB7XG4gIHRvZGF5TWFya2VyID0gdHh0O1xufTtcbmNvbnN0IGdldFRvZGF5TWFya2VyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0b2RheU1hcmtlcjtcbn07XG5jb25zdCBzZXREYXRlRm9ybWF0ID0gZnVuY3Rpb24odHh0KSB7XG4gIGRhdGVGb3JtYXQgPSB0eHQ7XG59O1xuY29uc3QgZW5hYmxlSW5jbHVzaXZlRW5kRGF0ZXMgPSBmdW5jdGlvbigpIHtcbiAgaW5jbHVzaXZlRW5kRGF0ZXMgPSB0cnVlO1xufTtcbmNvbnN0IGVuZERhdGVzQXJlSW5jbHVzaXZlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBpbmNsdXNpdmVFbmREYXRlcztcbn07XG5jb25zdCBlbmFibGVUb3BBeGlzID0gZnVuY3Rpb24oKSB7XG4gIHRvcEF4aXMgPSB0cnVlO1xufTtcbmNvbnN0IHRvcEF4aXNFbmFibGVkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0b3BBeGlzO1xufTtcbmNvbnN0IHNldERpc3BsYXlNb2RlID0gZnVuY3Rpb24odHh0KSB7XG4gIGRpc3BsYXlNb2RlID0gdHh0O1xufTtcbmNvbnN0IGdldERpc3BsYXlNb2RlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBkaXNwbGF5TW9kZTtcbn07XG5jb25zdCBnZXREYXRlRm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBkYXRlRm9ybWF0O1xufTtcbmNvbnN0IHNldEluY2x1ZGVzID0gZnVuY3Rpb24odHh0KSB7XG4gIGluY2x1ZGVzID0gdHh0LnRvTG93ZXJDYXNlKCkuc3BsaXQoL1tcXHMsXSsvKTtcbn07XG5jb25zdCBnZXRJbmNsdWRlcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gaW5jbHVkZXM7XG59O1xuY29uc3Qgc2V0RXhjbHVkZXMgPSBmdW5jdGlvbih0eHQpIHtcbiAgZXhjbHVkZXMgPSB0eHQudG9Mb3dlckNhc2UoKS5zcGxpdCgvW1xccyxdKy8pO1xufTtcbmNvbnN0IGdldEV4Y2x1ZGVzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBleGNsdWRlcztcbn07XG5jb25zdCBnZXRMaW5rcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbGlua3M7XG59O1xuY29uc3QgYWRkU2VjdGlvbiA9IGZ1bmN0aW9uKHR4dCkge1xuICBjdXJyZW50U2VjdGlvbiA9IHR4dDtcbiAgc2VjdGlvbnMucHVzaCh0eHQpO1xufTtcbmNvbnN0IGdldFNlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBzZWN0aW9ucztcbn07XG5jb25zdCBnZXRUYXNrcyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgYWxsSXRlbXNQcm9jZXNzZWQgPSBjb21waWxlVGFza3MoKTtcbiAgY29uc3QgbWF4RGVwdGggPSAxMDtcbiAgbGV0IGl0ZXJhdGlvbkNvdW50ID0gMDtcbiAgd2hpbGUgKCFhbGxJdGVtc1Byb2Nlc3NlZCAmJiBpdGVyYXRpb25Db3VudCA8IG1heERlcHRoKSB7XG4gICAgYWxsSXRlbXNQcm9jZXNzZWQgPSBjb21waWxlVGFza3MoKTtcbiAgICBpdGVyYXRpb25Db3VudCsrO1xuICB9XG4gIHRhc2tzID0gcmF3VGFza3M7XG4gIHJldHVybiB0YXNrcztcbn07XG5jb25zdCBpc0ludmFsaWREYXRlID0gZnVuY3Rpb24oZGF0ZSwgZGF0ZUZvcm1hdDIsIGV4Y2x1ZGVzMiwgaW5jbHVkZXMyKSB7XG4gIGlmIChpbmNsdWRlczIuaW5jbHVkZXMoZGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdDIudHJpbSgpKSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGRhdGUuaXNvV2Vla2RheSgpID49IDYgJiYgZXhjbHVkZXMyLmluY2x1ZGVzKFwid2Vla2VuZHNcIikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoZXhjbHVkZXMyLmluY2x1ZGVzKGRhdGUuZm9ybWF0KFwiZGRkZFwiKS50b0xvd2VyQ2FzZSgpKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBleGNsdWRlczIuaW5jbHVkZXMoZGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdDIudHJpbSgpKSk7XG59O1xuY29uc3Qgc2V0V2Vla2RheSA9IGZ1bmN0aW9uKHR4dCkge1xuICB3ZWVrZGF5ID0gdHh0O1xufTtcbmNvbnN0IGdldFdlZWtkYXkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdlZWtkYXk7XG59O1xuY29uc3QgY2hlY2tUYXNrRGF0ZXMgPSBmdW5jdGlvbih0YXNrLCBkYXRlRm9ybWF0MiwgZXhjbHVkZXMyLCBpbmNsdWRlczIpIHtcbiAgaWYgKCFleGNsdWRlczIubGVuZ3RoIHx8IHRhc2subWFudWFsRW5kVGltZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgc3RhcnRUaW1lO1xuICBpZiAodGFzay5zdGFydFRpbWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgc3RhcnRUaW1lID0gZGF5anModGFzay5zdGFydFRpbWUpO1xuICB9IGVsc2Uge1xuICAgIHN0YXJ0VGltZSA9IGRheWpzKHRhc2suc3RhcnRUaW1lLCBkYXRlRm9ybWF0MiwgdHJ1ZSk7XG4gIH1cbiAgc3RhcnRUaW1lID0gc3RhcnRUaW1lLmFkZCgxLCBcImRcIik7XG4gIGxldCBvcmlnaW5hbEVuZFRpbWU7XG4gIGlmICh0YXNrLmVuZFRpbWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgb3JpZ2luYWxFbmRUaW1lID0gZGF5anModGFzay5lbmRUaW1lKTtcbiAgfSBlbHNlIHtcbiAgICBvcmlnaW5hbEVuZFRpbWUgPSBkYXlqcyh0YXNrLmVuZFRpbWUsIGRhdGVGb3JtYXQyLCB0cnVlKTtcbiAgfVxuICBjb25zdCBbZml4ZWRFbmRUaW1lLCByZW5kZXJFbmRUaW1lXSA9IGZpeFRhc2tEYXRlcyhcbiAgICBzdGFydFRpbWUsXG4gICAgb3JpZ2luYWxFbmRUaW1lLFxuICAgIGRhdGVGb3JtYXQyLFxuICAgIGV4Y2x1ZGVzMixcbiAgICBpbmNsdWRlczJcbiAgKTtcbiAgdGFzay5lbmRUaW1lID0gZml4ZWRFbmRUaW1lLnRvRGF0ZSgpO1xuICB0YXNrLnJlbmRlckVuZFRpbWUgPSByZW5kZXJFbmRUaW1lO1xufTtcbmNvbnN0IGZpeFRhc2tEYXRlcyA9IGZ1bmN0aW9uKHN0YXJ0VGltZSwgZW5kVGltZSwgZGF0ZUZvcm1hdDIsIGV4Y2x1ZGVzMiwgaW5jbHVkZXMyKSB7XG4gIGxldCBpbnZhbGlkID0gZmFsc2U7XG4gIGxldCByZW5kZXJFbmRUaW1lID0gbnVsbDtcbiAgd2hpbGUgKHN0YXJ0VGltZSA8PSBlbmRUaW1lKSB7XG4gICAgaWYgKCFpbnZhbGlkKSB7XG4gICAgICByZW5kZXJFbmRUaW1lID0gZW5kVGltZS50b0RhdGUoKTtcbiAgICB9XG4gICAgaW52YWxpZCA9IGlzSW52YWxpZERhdGUoc3RhcnRUaW1lLCBkYXRlRm9ybWF0MiwgZXhjbHVkZXMyLCBpbmNsdWRlczIpO1xuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlbmRUaW1lID0gZW5kVGltZS5hZGQoMSwgXCJkXCIpO1xuICAgIH1cbiAgICBzdGFydFRpbWUgPSBzdGFydFRpbWUuYWRkKDEsIFwiZFwiKTtcbiAgfVxuICByZXR1cm4gW2VuZFRpbWUsIHJlbmRlckVuZFRpbWVdO1xufTtcbmNvbnN0IGdldFN0YXJ0RGF0ZSA9IGZ1bmN0aW9uKHByZXZUaW1lLCBkYXRlRm9ybWF0Miwgc3RyKSB7XG4gIHN0ciA9IHN0ci50cmltKCk7XG4gIGNvbnN0IGFmdGVyUmVQYXR0ZXJuID0gL15hZnRlclxccysoPzxpZHM+W1xcZFxcdy0gXSspLztcbiAgY29uc3QgYWZ0ZXJTdGF0ZW1lbnQgPSBhZnRlclJlUGF0dGVybi5leGVjKHN0cik7XG4gIGlmIChhZnRlclN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGxldCBsYXRlc3RUYXNrID0gbnVsbDtcbiAgICBmb3IgKGNvbnN0IGlkIG9mIGFmdGVyU3RhdGVtZW50Lmdyb3Vwcy5pZHMuc3BsaXQoXCIgXCIpKSB7XG4gICAgICBsZXQgdGFzayA9IGZpbmRUYXNrQnlJZChpZCk7XG4gICAgICBpZiAodGFzayAhPT0gdm9pZCAwICYmICghbGF0ZXN0VGFzayB8fCB0YXNrLmVuZFRpbWUgPiBsYXRlc3RUYXNrLmVuZFRpbWUpKSB7XG4gICAgICAgIGxhdGVzdFRhc2sgPSB0YXNrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGF0ZXN0VGFzaykge1xuICAgICAgcmV0dXJuIGxhdGVzdFRhc2suZW5kVGltZTtcbiAgICB9XG4gICAgY29uc3QgdG9kYXkgPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKTtcbiAgICB0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gdG9kYXk7XG4gIH1cbiAgbGV0IG1EYXRlID0gZGF5anMoc3RyLCBkYXRlRm9ybWF0Mi50cmltKCksIHRydWUpO1xuICBpZiAobURhdGUuaXNWYWxpZCgpKSB7XG4gICAgcmV0dXJuIG1EYXRlLnRvRGF0ZSgpO1xuICB9IGVsc2Uge1xuICAgIGxvZy5kZWJ1ZyhcIkludmFsaWQgZGF0ZTpcIiArIHN0cik7XG4gICAgbG9nLmRlYnVnKFwiV2l0aCBkYXRlIGZvcm1hdDpcIiArIGRhdGVGb3JtYXQyLnRyaW0oKSk7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKHN0cik7XG4gICAgaWYgKGQgPT09IHZvaWQgMCB8fCBpc05hTihkLmdldFRpbWUoKSkgfHwgLy8gV2ViS2l0IGJyb3dzZXJzIGNhbiBtaXMtcGFyc2UgaW52YWxpZCBkYXRlcyB0byBiZSByaWRpY3Vsb3VzbHlcbiAgICAvLyBodWdlIG51bWJlcnMsIGUuZy4gbmV3IERhdGUoJzIwMjMwNCcpIGdldHMgcGFyc2VkIGFzIEphbnVhcnkgMSwgMjAyMzA0LlxuICAgIC8vIFRoaXMgY2FuIGNhdXNlIHZpcnR1YWxseSBpbmZpbml0ZSBsb29wcyB3aGlsZSByZW5kZXJpbmcsIHNvIGZvciB0aGVcbiAgICAvLyBwdXJwb3NlcyBvZiBHYW50dCBjaGFydHMgd2UnbGwganVzdCB0cmVhdCBhbnkgZGF0ZSBiZXlvbmQgMTAsMDAwIEFEL0JDIGFzXG4gICAgLy8gaW52YWxpZC5cbiAgICBkLmdldEZ1bGxZZWFyKCkgPCAtMWU0IHx8IGQuZ2V0RnVsbFllYXIoKSA+IDFlNCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkYXRlOlwiICsgc3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIGQ7XG4gIH1cbn07XG5jb25zdCBwYXJzZUR1cmF0aW9uID0gZnVuY3Rpb24oc3RyKSB7XG4gIGNvbnN0IHN0YXRlbWVudCA9IC9eKFxcZCsoPzpcXC5cXGQrKT8pKFtNZGhtc3d5XXxtcykkLy5leGVjKHN0ci50cmltKCkpO1xuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtOdW1iZXIucGFyc2VGbG9hdChzdGF0ZW1lbnRbMV0pLCBzdGF0ZW1lbnRbMl1dO1xuICB9XG4gIHJldHVybiBbTmFOLCBcIm1zXCJdO1xufTtcbmNvbnN0IGdldEVuZERhdGUgPSBmdW5jdGlvbihwcmV2VGltZSwgZGF0ZUZvcm1hdDIsIHN0ciwgaW5jbHVzaXZlID0gZmFsc2UpIHtcbiAgc3RyID0gc3RyLnRyaW0oKTtcbiAgY29uc3QgdW50aWxSZVBhdHRlcm4gPSAvXnVudGlsXFxzKyg/PGlkcz5bXFxkXFx3LSBdKykvO1xuICBjb25zdCB1bnRpbFN0YXRlbWVudCA9IHVudGlsUmVQYXR0ZXJuLmV4ZWMoc3RyKTtcbiAgaWYgKHVudGlsU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgbGV0IGVhcmxpZXN0VGFzayA9IG51bGw7XG4gICAgZm9yIChjb25zdCBpZCBvZiB1bnRpbFN0YXRlbWVudC5ncm91cHMuaWRzLnNwbGl0KFwiIFwiKSkge1xuICAgICAgbGV0IHRhc2sgPSBmaW5kVGFza0J5SWQoaWQpO1xuICAgICAgaWYgKHRhc2sgIT09IHZvaWQgMCAmJiAoIWVhcmxpZXN0VGFzayB8fCB0YXNrLnN0YXJ0VGltZSA8IGVhcmxpZXN0VGFzay5zdGFydFRpbWUpKSB7XG4gICAgICAgIGVhcmxpZXN0VGFzayA9IHRhc2s7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlYXJsaWVzdFRhc2spIHtcbiAgICAgIHJldHVybiBlYXJsaWVzdFRhc2suc3RhcnRUaW1lO1xuICAgIH1cbiAgICBjb25zdCB0b2RheSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpO1xuICAgIHRvZGF5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHJldHVybiB0b2RheTtcbiAgfVxuICBsZXQgcGFyc2VkRGF0ZSA9IGRheWpzKHN0ciwgZGF0ZUZvcm1hdDIudHJpbSgpLCB0cnVlKTtcbiAgaWYgKHBhcnNlZERhdGUuaXNWYWxpZCgpKSB7XG4gICAgaWYgKGluY2x1c2l2ZSkge1xuICAgICAgcGFyc2VkRGF0ZSA9IHBhcnNlZERhdGUuYWRkKDEsIFwiZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZERhdGUudG9EYXRlKCk7XG4gIH1cbiAgbGV0IGVuZFRpbWUgPSBkYXlqcyhwcmV2VGltZSk7XG4gIGNvbnN0IFtkdXJhdGlvblZhbHVlLCBkdXJhdGlvblVuaXRdID0gcGFyc2VEdXJhdGlvbihzdHIpO1xuICBpZiAoIU51bWJlci5pc05hTihkdXJhdGlvblZhbHVlKSkge1xuICAgIGNvbnN0IG5ld0VuZFRpbWUgPSBlbmRUaW1lLmFkZChkdXJhdGlvblZhbHVlLCBkdXJhdGlvblVuaXQpO1xuICAgIGlmIChuZXdFbmRUaW1lLmlzVmFsaWQoKSkge1xuICAgICAgZW5kVGltZSA9IG5ld0VuZFRpbWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBlbmRUaW1lLnRvRGF0ZSgpO1xufTtcbmxldCB0YXNrQ250ID0gMDtcbmNvbnN0IHBhcnNlSWQgPSBmdW5jdGlvbihpZFN0cikge1xuICBpZiAoaWRTdHIgPT09IHZvaWQgMCkge1xuICAgIHRhc2tDbnQgPSB0YXNrQ250ICsgMTtcbiAgICByZXR1cm4gXCJ0YXNrXCIgKyB0YXNrQ250O1xuICB9XG4gIHJldHVybiBpZFN0cjtcbn07XG5jb25zdCBjb21waWxlRGF0YSA9IGZ1bmN0aW9uKHByZXZUYXNrLCBkYXRhU3RyKSB7XG4gIGxldCBkcztcbiAgaWYgKGRhdGFTdHIuc3Vic3RyKDAsIDEpID09PSBcIjpcIikge1xuICAgIGRzID0gZGF0YVN0ci5zdWJzdHIoMSwgZGF0YVN0ci5sZW5ndGgpO1xuICB9IGVsc2Uge1xuICAgIGRzID0gZGF0YVN0cjtcbiAgfVxuICBjb25zdCBkYXRhID0gZHMuc3BsaXQoXCIsXCIpO1xuICBjb25zdCB0YXNrID0ge307XG4gIGdldFRhc2tUYWdzKGRhdGEsIHRhc2ssIHRhZ3MpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBkYXRhW2ldID0gZGF0YVtpXS50cmltKCk7XG4gIH1cbiAgbGV0IGVuZFRpbWVEYXRhID0gXCJcIjtcbiAgc3dpdGNoIChkYXRhLmxlbmd0aCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHRhc2suaWQgPSBwYXJzZUlkKCk7XG4gICAgICB0YXNrLnN0YXJ0VGltZSA9IHByZXZUYXNrLmVuZFRpbWU7XG4gICAgICBlbmRUaW1lRGF0YSA9IGRhdGFbMF07XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB0YXNrLmlkID0gcGFyc2VJZCgpO1xuICAgICAgdGFzay5zdGFydFRpbWUgPSBnZXRTdGFydERhdGUodm9pZCAwLCBkYXRlRm9ybWF0LCBkYXRhWzBdKTtcbiAgICAgIGVuZFRpbWVEYXRhID0gZGF0YVsxXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIHRhc2suaWQgPSBwYXJzZUlkKGRhdGFbMF0pO1xuICAgICAgdGFzay5zdGFydFRpbWUgPSBnZXRTdGFydERhdGUodm9pZCAwLCBkYXRlRm9ybWF0LCBkYXRhWzFdKTtcbiAgICAgIGVuZFRpbWVEYXRhID0gZGF0YVsyXTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGlmIChlbmRUaW1lRGF0YSkge1xuICAgIHRhc2suZW5kVGltZSA9IGdldEVuZERhdGUodGFzay5zdGFydFRpbWUsIGRhdGVGb3JtYXQsIGVuZFRpbWVEYXRhLCBpbmNsdXNpdmVFbmREYXRlcyk7XG4gICAgdGFzay5tYW51YWxFbmRUaW1lID0gZGF5anMoZW5kVGltZURhdGEsIFwiWVlZWS1NTS1ERFwiLCB0cnVlKS5pc1ZhbGlkKCk7XG4gICAgY2hlY2tUYXNrRGF0ZXModGFzaywgZGF0ZUZvcm1hdCwgZXhjbHVkZXMsIGluY2x1ZGVzKTtcbiAgfVxuICByZXR1cm4gdGFzaztcbn07XG5jb25zdCBwYXJzZURhdGEgPSBmdW5jdGlvbihwcmV2VGFza0lkLCBkYXRhU3RyKSB7XG4gIGxldCBkcztcbiAgaWYgKGRhdGFTdHIuc3Vic3RyKDAsIDEpID09PSBcIjpcIikge1xuICAgIGRzID0gZGF0YVN0ci5zdWJzdHIoMSwgZGF0YVN0ci5sZW5ndGgpO1xuICB9IGVsc2Uge1xuICAgIGRzID0gZGF0YVN0cjtcbiAgfVxuICBjb25zdCBkYXRhID0gZHMuc3BsaXQoXCIsXCIpO1xuICBjb25zdCB0YXNrID0ge307XG4gIGdldFRhc2tUYWdzKGRhdGEsIHRhc2ssIHRhZ3MpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBkYXRhW2ldID0gZGF0YVtpXS50cmltKCk7XG4gIH1cbiAgc3dpdGNoIChkYXRhLmxlbmd0aCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHRhc2suaWQgPSBwYXJzZUlkKCk7XG4gICAgICB0YXNrLnN0YXJ0VGltZSA9IHtcbiAgICAgICAgdHlwZTogXCJwcmV2VGFza0VuZFwiLFxuICAgICAgICBpZDogcHJldlRhc2tJZFxuICAgICAgfTtcbiAgICAgIHRhc2suZW5kVGltZSA9IHtcbiAgICAgICAgZGF0YTogZGF0YVswXVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHRhc2suaWQgPSBwYXJzZUlkKCk7XG4gICAgICB0YXNrLnN0YXJ0VGltZSA9IHtcbiAgICAgICAgdHlwZTogXCJnZXRTdGFydERhdGVcIixcbiAgICAgICAgc3RhcnREYXRhOiBkYXRhWzBdXG4gICAgICB9O1xuICAgICAgdGFzay5lbmRUaW1lID0ge1xuICAgICAgICBkYXRhOiBkYXRhWzFdXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgdGFzay5pZCA9IHBhcnNlSWQoZGF0YVswXSk7XG4gICAgICB0YXNrLnN0YXJ0VGltZSA9IHtcbiAgICAgICAgdHlwZTogXCJnZXRTdGFydERhdGVcIixcbiAgICAgICAgc3RhcnREYXRhOiBkYXRhWzFdXG4gICAgICB9O1xuICAgICAgdGFzay5lbmRUaW1lID0ge1xuICAgICAgICBkYXRhOiBkYXRhWzJdXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHRhc2s7XG59O1xubGV0IGxhc3RUYXNrO1xubGV0IGxhc3RUYXNrSUQ7XG5sZXQgcmF3VGFza3MgPSBbXTtcbmNvbnN0IHRhc2tEYiA9IHt9O1xuY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uKGRlc2NyLCBkYXRhKSB7XG4gIGNvbnN0IHJhd1Rhc2sgPSB7XG4gICAgc2VjdGlvbjogY3VycmVudFNlY3Rpb24sXG4gICAgdHlwZTogY3VycmVudFNlY3Rpb24sXG4gICAgcHJvY2Vzc2VkOiBmYWxzZSxcbiAgICBtYW51YWxFbmRUaW1lOiBmYWxzZSxcbiAgICByZW5kZXJFbmRUaW1lOiBudWxsLFxuICAgIHJhdzogeyBkYXRhIH0sXG4gICAgdGFzazogZGVzY3IsXG4gICAgY2xhc3NlczogW11cbiAgfTtcbiAgY29uc3QgdGFza0luZm8gPSBwYXJzZURhdGEobGFzdFRhc2tJRCwgZGF0YSk7XG4gIHJhd1Rhc2sucmF3LnN0YXJ0VGltZSA9IHRhc2tJbmZvLnN0YXJ0VGltZTtcbiAgcmF3VGFzay5yYXcuZW5kVGltZSA9IHRhc2tJbmZvLmVuZFRpbWU7XG4gIHJhd1Rhc2suaWQgPSB0YXNrSW5mby5pZDtcbiAgcmF3VGFzay5wcmV2VGFza0lkID0gbGFzdFRhc2tJRDtcbiAgcmF3VGFzay5hY3RpdmUgPSB0YXNrSW5mby5hY3RpdmU7XG4gIHJhd1Rhc2suZG9uZSA9IHRhc2tJbmZvLmRvbmU7XG4gIHJhd1Rhc2suY3JpdCA9IHRhc2tJbmZvLmNyaXQ7XG4gIHJhd1Rhc2subWlsZXN0b25lID0gdGFza0luZm8ubWlsZXN0b25lO1xuICByYXdUYXNrLm9yZGVyID0gbGFzdE9yZGVyO1xuICBsYXN0T3JkZXIrKztcbiAgY29uc3QgcG9zID0gcmF3VGFza3MucHVzaChyYXdUYXNrKTtcbiAgbGFzdFRhc2tJRCA9IHJhd1Rhc2suaWQ7XG4gIHRhc2tEYltyYXdUYXNrLmlkXSA9IHBvcyAtIDE7XG59O1xuY29uc3QgZmluZFRhc2tCeUlkID0gZnVuY3Rpb24oaWQpIHtcbiAgY29uc3QgcG9zID0gdGFza0RiW2lkXTtcbiAgcmV0dXJuIHJhd1Rhc2tzW3Bvc107XG59O1xuY29uc3QgYWRkVGFza09yZyA9IGZ1bmN0aW9uKGRlc2NyLCBkYXRhKSB7XG4gIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgc2VjdGlvbjogY3VycmVudFNlY3Rpb24sXG4gICAgdHlwZTogY3VycmVudFNlY3Rpb24sXG4gICAgZGVzY3JpcHRpb246IGRlc2NyLFxuICAgIHRhc2s6IGRlc2NyLFxuICAgIGNsYXNzZXM6IFtdXG4gIH07XG4gIGNvbnN0IHRhc2tJbmZvID0gY29tcGlsZURhdGEobGFzdFRhc2ssIGRhdGEpO1xuICBuZXdUYXNrLnN0YXJ0VGltZSA9IHRhc2tJbmZvLnN0YXJ0VGltZTtcbiAgbmV3VGFzay5lbmRUaW1lID0gdGFza0luZm8uZW5kVGltZTtcbiAgbmV3VGFzay5pZCA9IHRhc2tJbmZvLmlkO1xuICBuZXdUYXNrLmFjdGl2ZSA9IHRhc2tJbmZvLmFjdGl2ZTtcbiAgbmV3VGFzay5kb25lID0gdGFza0luZm8uZG9uZTtcbiAgbmV3VGFzay5jcml0ID0gdGFza0luZm8uY3JpdDtcbiAgbmV3VGFzay5taWxlc3RvbmUgPSB0YXNrSW5mby5taWxlc3RvbmU7XG4gIGxhc3RUYXNrID0gbmV3VGFzaztcbiAgdGFza3MucHVzaChuZXdUYXNrKTtcbn07XG5jb25zdCBjb21waWxlVGFza3MgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgY29tcGlsZVRhc2sgPSBmdW5jdGlvbihwb3MpIHtcbiAgICBjb25zdCB0YXNrID0gcmF3VGFza3NbcG9zXTtcbiAgICBsZXQgc3RhcnRUaW1lID0gXCJcIjtcbiAgICBzd2l0Y2ggKHJhd1Rhc2tzW3Bvc10ucmF3LnN0YXJ0VGltZS50eXBlKSB7XG4gICAgICBjYXNlIFwicHJldlRhc2tFbmRcIjoge1xuICAgICAgICBjb25zdCBwcmV2VGFzayA9IGZpbmRUYXNrQnlJZCh0YXNrLnByZXZUYXNrSWQpO1xuICAgICAgICB0YXNrLnN0YXJ0VGltZSA9IHByZXZUYXNrLmVuZFRpbWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBcImdldFN0YXJ0RGF0ZVwiOlxuICAgICAgICBzdGFydFRpbWUgPSBnZXRTdGFydERhdGUodm9pZCAwLCBkYXRlRm9ybWF0LCByYXdUYXNrc1twb3NdLnJhdy5zdGFydFRpbWUuc3RhcnREYXRhKTtcbiAgICAgICAgaWYgKHN0YXJ0VGltZSkge1xuICAgICAgICAgIHJhd1Rhc2tzW3Bvc10uc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocmF3VGFza3NbcG9zXS5zdGFydFRpbWUpIHtcbiAgICAgIHJhd1Rhc2tzW3Bvc10uZW5kVGltZSA9IGdldEVuZERhdGUoXG4gICAgICAgIHJhd1Rhc2tzW3Bvc10uc3RhcnRUaW1lLFxuICAgICAgICBkYXRlRm9ybWF0LFxuICAgICAgICByYXdUYXNrc1twb3NdLnJhdy5lbmRUaW1lLmRhdGEsXG4gICAgICAgIGluY2x1c2l2ZUVuZERhdGVzXG4gICAgICApO1xuICAgICAgaWYgKHJhd1Rhc2tzW3Bvc10uZW5kVGltZSkge1xuICAgICAgICByYXdUYXNrc1twb3NdLnByb2Nlc3NlZCA9IHRydWU7XG4gICAgICAgIHJhd1Rhc2tzW3Bvc10ubWFudWFsRW5kVGltZSA9IGRheWpzKFxuICAgICAgICAgIHJhd1Rhc2tzW3Bvc10ucmF3LmVuZFRpbWUuZGF0YSxcbiAgICAgICAgICBcIllZWVktTU0tRERcIixcbiAgICAgICAgICB0cnVlXG4gICAgICAgICkuaXNWYWxpZCgpO1xuICAgICAgICBjaGVja1Rhc2tEYXRlcyhyYXdUYXNrc1twb3NdLCBkYXRlRm9ybWF0LCBleGNsdWRlcywgaW5jbHVkZXMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmF3VGFza3NbcG9zXS5wcm9jZXNzZWQ7XG4gIH07XG4gIGxldCBhbGxQcm9jZXNzZWQgPSB0cnVlO1xuICBmb3IgKGNvbnN0IFtpLCByYXdUYXNrXSBvZiByYXdUYXNrcy5lbnRyaWVzKCkpIHtcbiAgICBjb21waWxlVGFzayhpKTtcbiAgICBhbGxQcm9jZXNzZWQgPSBhbGxQcm9jZXNzZWQgJiYgcmF3VGFzay5wcm9jZXNzZWQ7XG4gIH1cbiAgcmV0dXJuIGFsbFByb2Nlc3NlZDtcbn07XG5jb25zdCBzZXRMaW5rID0gZnVuY3Rpb24oaWRzLCBfbGlua1N0cikge1xuICBsZXQgbGlua1N0ciA9IF9saW5rU3RyO1xuICBpZiAoZ2V0Q29uZmlnKCkuc2VjdXJpdHlMZXZlbCAhPT0gXCJsb29zZVwiKSB7XG4gICAgbGlua1N0ciA9IHNhbml0aXplVXJsKF9saW5rU3RyKTtcbiAgfVxuICBpZHMuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICBsZXQgcmF3VGFzayA9IGZpbmRUYXNrQnlJZChpZCk7XG4gICAgaWYgKHJhd1Rhc2sgIT09IHZvaWQgMCkge1xuICAgICAgcHVzaEZ1bihpZCwgKCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbihsaW5rU3RyLCBcIl9zZWxmXCIpO1xuICAgICAgfSk7XG4gICAgICBsaW5rc1tpZF0gPSBsaW5rU3RyO1xuICAgIH1cbiAgfSk7XG4gIHNldENsYXNzKGlkcywgXCJjbGlja2FibGVcIik7XG59O1xuY29uc3Qgc2V0Q2xhc3MgPSBmdW5jdGlvbihpZHMsIGNsYXNzTmFtZSkge1xuICBpZHMuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICBsZXQgcmF3VGFzayA9IGZpbmRUYXNrQnlJZChpZCk7XG4gICAgaWYgKHJhd1Rhc2sgIT09IHZvaWQgMCkge1xuICAgICAgcmF3VGFzay5jbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgICB9XG4gIH0pO1xufTtcbmNvbnN0IHNldENsaWNrRnVuID0gZnVuY3Rpb24oaWQsIGZ1bmN0aW9uTmFtZSwgZnVuY3Rpb25BcmdzKSB7XG4gIGlmIChnZXRDb25maWcoKS5zZWN1cml0eUxldmVsICE9PSBcImxvb3NlXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGZ1bmN0aW9uTmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBhcmdMaXN0ID0gW107XG4gIGlmICh0eXBlb2YgZnVuY3Rpb25BcmdzID09PSBcInN0cmluZ1wiKSB7XG4gICAgYXJnTGlzdCA9IGZ1bmN0aW9uQXJncy5zcGxpdCgvLCg/PSg/Oig/OlteXCJdKlwiKXsyfSkqW15cIl0qJCkvKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gYXJnTGlzdFtpXS50cmltKCk7XG4gICAgICBpZiAoaXRlbS5jaGFyQXQoMCkgPT09ICdcIicgJiYgaXRlbS5jaGFyQXQoaXRlbS5sZW5ndGggLSAxKSA9PT0gJ1wiJykge1xuICAgICAgICBpdGVtID0gaXRlbS5zdWJzdHIoMSwgaXRlbS5sZW5ndGggLSAyKTtcbiAgICAgIH1cbiAgICAgIGFyZ0xpc3RbaV0gPSBpdGVtO1xuICAgIH1cbiAgfVxuICBpZiAoYXJnTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICBhcmdMaXN0LnB1c2goaWQpO1xuICB9XG4gIGxldCByYXdUYXNrID0gZmluZFRhc2tCeUlkKGlkKTtcbiAgaWYgKHJhd1Rhc2sgIT09IHZvaWQgMCkge1xuICAgIHB1c2hGdW4oaWQsICgpID0+IHtcbiAgICAgIHV0aWxzLnJ1bkZ1bmMoZnVuY3Rpb25OYW1lLCAuLi5hcmdMaXN0KTtcbiAgICB9KTtcbiAgfVxufTtcbmNvbnN0IHB1c2hGdW4gPSBmdW5jdGlvbihpZCwgY2FsbGJhY2tGdW5jdGlvbikge1xuICBmdW5zLnB1c2goXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpZH1cIl1gKTtcbiAgICAgIGlmIChlbGVtICE9PSBudWxsKSB7XG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNhbGxiYWNrRnVuY3Rpb24oKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2lkfS10ZXh0XCJdYCk7XG4gICAgICBpZiAoZWxlbSAhPT0gbnVsbCkge1xuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG5jb25zdCBzZXRDbGlja0V2ZW50ID0gZnVuY3Rpb24oaWRzLCBmdW5jdGlvbk5hbWUsIGZ1bmN0aW9uQXJncykge1xuICBpZHMuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICBzZXRDbGlja0Z1bihpZCwgZnVuY3Rpb25OYW1lLCBmdW5jdGlvbkFyZ3MpO1xuICB9KTtcbiAgc2V0Q2xhc3MoaWRzLCBcImNsaWNrYWJsZVwiKTtcbn07XG5jb25zdCBiaW5kRnVuY3Rpb25zID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICBmdW5zLmZvckVhY2goZnVuY3Rpb24oZnVuKSB7XG4gICAgZnVuKGVsZW1lbnQpO1xuICB9KTtcbn07XG5jb25zdCBnYW50dERiID0ge1xuICBnZXRDb25maWc6ICgpID0+IGdldENvbmZpZygpLmdhbnR0LFxuICBjbGVhcixcbiAgc2V0RGF0ZUZvcm1hdCxcbiAgZ2V0RGF0ZUZvcm1hdCxcbiAgZW5hYmxlSW5jbHVzaXZlRW5kRGF0ZXMsXG4gIGVuZERhdGVzQXJlSW5jbHVzaXZlLFxuICBlbmFibGVUb3BBeGlzLFxuICB0b3BBeGlzRW5hYmxlZCxcbiAgc2V0QXhpc0Zvcm1hdCxcbiAgZ2V0QXhpc0Zvcm1hdCxcbiAgc2V0VGlja0ludGVydmFsLFxuICBnZXRUaWNrSW50ZXJ2YWwsXG4gIHNldFRvZGF5TWFya2VyLFxuICBnZXRUb2RheU1hcmtlcixcbiAgc2V0QWNjVGl0bGUsXG4gIGdldEFjY1RpdGxlLFxuICBzZXREaWFncmFtVGl0bGUsXG4gIGdldERpYWdyYW1UaXRsZSxcbiAgc2V0RGlzcGxheU1vZGUsXG4gIGdldERpc3BsYXlNb2RlLFxuICBzZXRBY2NEZXNjcmlwdGlvbixcbiAgZ2V0QWNjRGVzY3JpcHRpb24sXG4gIGFkZFNlY3Rpb24sXG4gIGdldFNlY3Rpb25zLFxuICBnZXRUYXNrcyxcbiAgYWRkVGFzayxcbiAgZmluZFRhc2tCeUlkLFxuICBhZGRUYXNrT3JnLFxuICBzZXRJbmNsdWRlcyxcbiAgZ2V0SW5jbHVkZXMsXG4gIHNldEV4Y2x1ZGVzLFxuICBnZXRFeGNsdWRlcyxcbiAgc2V0Q2xpY2tFdmVudCxcbiAgc2V0TGluayxcbiAgZ2V0TGlua3MsXG4gIGJpbmRGdW5jdGlvbnMsXG4gIHBhcnNlRHVyYXRpb24sXG4gIGlzSW52YWxpZERhdGUsXG4gIHNldFdlZWtkYXksXG4gIGdldFdlZWtkYXlcbn07XG5mdW5jdGlvbiBnZXRUYXNrVGFncyhkYXRhLCB0YXNrLCB0YWdzMikge1xuICBsZXQgbWF0Y2hGb3VuZCA9IHRydWU7XG4gIHdoaWxlIChtYXRjaEZvdW5kKSB7XG4gICAgbWF0Y2hGb3VuZCA9IGZhbHNlO1xuICAgIHRhZ3MyLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgY29uc3QgcGF0dGVybiA9IFwiXlxcXFxzKlwiICsgdCArIFwiXFxcXHMqJFwiO1xuICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuICAgICAgaWYgKGRhdGFbMF0ubWF0Y2gocmVnZXgpKSB7XG4gICAgICAgIHRhc2tbdF0gPSB0cnVlO1xuICAgICAgICBkYXRhLnNoaWZ0KDEpO1xuICAgICAgICBtYXRjaEZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuY29uc3Qgc2V0Q29uZiA9IGZ1bmN0aW9uKCkge1xuICBsb2cuZGVidWcoXCJTb21ldGhpbmcgaXMgY2FsbGluZywgc2V0Q29uZiwgcmVtb3ZlIHRoZSBjYWxsXCIpO1xufTtcbmNvbnN0IG1hcFdlZWtkYXlUb1RpbWVGdW5jdGlvbiA9IHtcbiAgbW9uZGF5OiB0aW1lTW9uZGF5LFxuICB0dWVzZGF5OiB0aW1lVHVlc2RheSxcbiAgd2VkbmVzZGF5OiB0aW1lV2VkbmVzZGF5LFxuICB0aHVyc2RheTogdGltZVRodXJzZGF5LFxuICBmcmlkYXk6IHRpbWVGcmlkYXksXG4gIHNhdHVyZGF5OiB0aW1lU2F0dXJkYXksXG4gIHN1bmRheTogdGltZVN1bmRheVxufTtcbmNvbnN0IGdldE1heEludGVyc2VjdGlvbnMgPSAodGFza3MyLCBvcmRlck9mZnNldCkgPT4ge1xuICBsZXQgdGltZWxpbmUgPSBbLi4udGFza3MyXS5tYXAoKCkgPT4gLUluZmluaXR5KTtcbiAgbGV0IHNvcnRlZCA9IFsuLi50YXNrczJdLnNvcnQoKGEsIGIpID0+IGEuc3RhcnRUaW1lIC0gYi5zdGFydFRpbWUgfHwgYS5vcmRlciAtIGIub3JkZXIpO1xuICBsZXQgbWF4SW50ZXJzZWN0aW9ucyA9IDA7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBzb3J0ZWQpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRpbWVsaW5lLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoZWxlbWVudC5zdGFydFRpbWUgPj0gdGltZWxpbmVbal0pIHtcbiAgICAgICAgdGltZWxpbmVbal0gPSBlbGVtZW50LmVuZFRpbWU7XG4gICAgICAgIGVsZW1lbnQub3JkZXIgPSBqICsgb3JkZXJPZmZzZXQ7XG4gICAgICAgIGlmIChqID4gbWF4SW50ZXJzZWN0aW9ucykge1xuICAgICAgICAgIG1heEludGVyc2VjdGlvbnMgPSBqO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWF4SW50ZXJzZWN0aW9ucztcbn07XG5sZXQgdztcbmNvbnN0IGRyYXcgPSBmdW5jdGlvbih0ZXh0LCBpZCwgdmVyc2lvbiwgZGlhZ09iaikge1xuICBjb25zdCBjb25mID0gZ2V0Q29uZmlnKCkuZ2FudHQ7XG4gIGNvbnN0IHNlY3VyaXR5TGV2ZWwgPSBnZXRDb25maWcoKS5zZWN1cml0eUxldmVsO1xuICBsZXQgc2FuZGJveEVsZW1lbnQ7XG4gIGlmIChzZWN1cml0eUxldmVsID09PSBcInNhbmRib3hcIikge1xuICAgIHNhbmRib3hFbGVtZW50ID0gc2VsZWN0KFwiI2lcIiArIGlkKTtcbiAgfVxuICBjb25zdCByb290ID0gc2VjdXJpdHlMZXZlbCA9PT0gXCJzYW5kYm94XCIgPyBzZWxlY3Qoc2FuZGJveEVsZW1lbnQubm9kZXMoKVswXS5jb250ZW50RG9jdW1lbnQuYm9keSkgOiBzZWxlY3QoXCJib2R5XCIpO1xuICBjb25zdCBkb2MgPSBzZWN1cml0eUxldmVsID09PSBcInNhbmRib3hcIiA/IHNhbmRib3hFbGVtZW50Lm5vZGVzKClbMF0uY29udGVudERvY3VtZW50IDogZG9jdW1lbnQ7XG4gIGNvbnN0IGVsZW0gPSBkb2MuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICB3ID0gZWxlbS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICBpZiAodyA9PT0gdm9pZCAwKSB7XG4gICAgdyA9IDEyMDA7XG4gIH1cbiAgaWYgKGNvbmYudXNlV2lkdGggIT09IHZvaWQgMCkge1xuICAgIHcgPSBjb25mLnVzZVdpZHRoO1xuICB9XG4gIGNvbnN0IHRhc2tBcnJheSA9IGRpYWdPYmouZGIuZ2V0VGFza3MoKTtcbiAgbGV0IGNhdGVnb3JpZXMgPSBbXTtcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRhc2tBcnJheSkge1xuICAgIGNhdGVnb3JpZXMucHVzaChlbGVtZW50LnR5cGUpO1xuICB9XG4gIGNhdGVnb3JpZXMgPSBjaGVja1VuaXF1ZShjYXRlZ29yaWVzKTtcbiAgY29uc3QgY2F0ZWdvcnlIZWlnaHRzID0ge307XG4gIGxldCBoID0gMiAqIGNvbmYudG9wUGFkZGluZztcbiAgaWYgKGRpYWdPYmouZGIuZ2V0RGlzcGxheU1vZGUoKSA9PT0gXCJjb21wYWN0XCIgfHwgY29uZi5kaXNwbGF5TW9kZSA9PT0gXCJjb21wYWN0XCIpIHtcbiAgICBjb25zdCBjYXRlZ29yeUVsZW1lbnRzID0ge307XG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRhc2tBcnJheSkge1xuICAgICAgaWYgKGNhdGVnb3J5RWxlbWVudHNbZWxlbWVudC5zZWN0aW9uXSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGNhdGVnb3J5RWxlbWVudHNbZWxlbWVudC5zZWN0aW9uXSA9IFtlbGVtZW50XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhdGVnb3J5RWxlbWVudHNbZWxlbWVudC5zZWN0aW9uXS5wdXNoKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgaW50ZXJzZWN0aW9ucyA9IDA7XG4gICAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiBPYmplY3Qua2V5cyhjYXRlZ29yeUVsZW1lbnRzKSkge1xuICAgICAgY29uc3QgY2F0ZWdvcnlIZWlnaHQgPSBnZXRNYXhJbnRlcnNlY3Rpb25zKGNhdGVnb3J5RWxlbWVudHNbY2F0ZWdvcnldLCBpbnRlcnNlY3Rpb25zKSArIDE7XG4gICAgICBpbnRlcnNlY3Rpb25zICs9IGNhdGVnb3J5SGVpZ2h0O1xuICAgICAgaCArPSBjYXRlZ29yeUhlaWdodCAqIChjb25mLmJhckhlaWdodCArIGNvbmYuYmFyR2FwKTtcbiAgICAgIGNhdGVnb3J5SGVpZ2h0c1tjYXRlZ29yeV0gPSBjYXRlZ29yeUhlaWdodDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaCArPSB0YXNrQXJyYXkubGVuZ3RoICogKGNvbmYuYmFySGVpZ2h0ICsgY29uZi5iYXJHYXApO1xuICAgIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgICAgY2F0ZWdvcnlIZWlnaHRzW2NhdGVnb3J5XSA9IHRhc2tBcnJheS5maWx0ZXIoKHRhc2spID0+IHRhc2sudHlwZSA9PT0gY2F0ZWdvcnkpLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgZWxlbS5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIFwiICsgdyArIFwiIFwiICsgaCk7XG4gIGNvbnN0IHN2ZyA9IHJvb3Quc2VsZWN0KGBbaWQ9XCIke2lkfVwiXWApO1xuICBjb25zdCB0aW1lU2NhbGUgPSBzY2FsZVRpbWUoKS5kb21haW4oW1xuICAgIG1pbih0YXNrQXJyYXksIGZ1bmN0aW9uKGQpIHtcbiAgICAgIHJldHVybiBkLnN0YXJ0VGltZTtcbiAgICB9KSxcbiAgICBtYXgodGFza0FycmF5LCBmdW5jdGlvbihkKSB7XG4gICAgICByZXR1cm4gZC5lbmRUaW1lO1xuICAgIH0pXG4gIF0pLnJhbmdlUm91bmQoWzAsIHcgLSBjb25mLmxlZnRQYWRkaW5nIC0gY29uZi5yaWdodFBhZGRpbmddKTtcbiAgZnVuY3Rpb24gdGFza0NvbXBhcmUoYSwgYikge1xuICAgIGNvbnN0IHRhc2tBID0gYS5zdGFydFRpbWU7XG4gICAgY29uc3QgdGFza0IgPSBiLnN0YXJ0VGltZTtcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICBpZiAodGFza0EgPiB0YXNrQikge1xuICAgICAgcmVzdWx0ID0gMTtcbiAgICB9IGVsc2UgaWYgKHRhc2tBIDwgdGFza0IpIHtcbiAgICAgIHJlc3VsdCA9IC0xO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHRhc2tBcnJheS5zb3J0KHRhc2tDb21wYXJlKTtcbiAgbWFrZUdhbnR0KHRhc2tBcnJheSwgdywgaCk7XG4gIGNvbmZpZ3VyZVN2Z1NpemUoc3ZnLCBoLCB3LCBjb25mLnVzZU1heFdpZHRoKTtcbiAgc3ZnLmFwcGVuZChcInRleHRcIikudGV4dChkaWFnT2JqLmRiLmdldERpYWdyYW1UaXRsZSgpKS5hdHRyKFwieFwiLCB3IC8gMikuYXR0cihcInlcIiwgY29uZi50aXRsZVRvcE1hcmdpbikuYXR0cihcImNsYXNzXCIsIFwidGl0bGVUZXh0XCIpO1xuICBmdW5jdGlvbiBtYWtlR2FudHQodGFza3MyLCBwYWdlV2lkdGgsIHBhZ2VIZWlnaHQpIHtcbiAgICBjb25zdCBiYXJIZWlnaHQgPSBjb25mLmJhckhlaWdodDtcbiAgICBjb25zdCBnYXAgPSBiYXJIZWlnaHQgKyBjb25mLmJhckdhcDtcbiAgICBjb25zdCB0b3BQYWRkaW5nID0gY29uZi50b3BQYWRkaW5nO1xuICAgIGNvbnN0IGxlZnRQYWRkaW5nID0gY29uZi5sZWZ0UGFkZGluZztcbiAgICBjb25zdCBjb2xvclNjYWxlID0gc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIGNhdGVnb3JpZXMubGVuZ3RoXSkucmFuZ2UoW1wiIzAwQjlGQVwiLCBcIiNGOTUwMDJcIl0pLmludGVycG9sYXRlKGludGVycG9sYXRlSGNsKTtcbiAgICBkcmF3RXhjbHVkZURheXMoXG4gICAgICBnYXAsXG4gICAgICB0b3BQYWRkaW5nLFxuICAgICAgbGVmdFBhZGRpbmcsXG4gICAgICBwYWdlV2lkdGgsXG4gICAgICBwYWdlSGVpZ2h0LFxuICAgICAgdGFza3MyLFxuICAgICAgZGlhZ09iai5kYi5nZXRFeGNsdWRlcygpLFxuICAgICAgZGlhZ09iai5kYi5nZXRJbmNsdWRlcygpXG4gICAgKTtcbiAgICBtYWtlR3JpZChsZWZ0UGFkZGluZywgdG9wUGFkZGluZywgcGFnZVdpZHRoLCBwYWdlSGVpZ2h0KTtcbiAgICBkcmF3UmVjdHModGFza3MyLCBnYXAsIHRvcFBhZGRpbmcsIGxlZnRQYWRkaW5nLCBiYXJIZWlnaHQsIGNvbG9yU2NhbGUsIHBhZ2VXaWR0aCk7XG4gICAgdmVydExhYmVscyhnYXAsIHRvcFBhZGRpbmcpO1xuICAgIGRyYXdUb2RheShsZWZ0UGFkZGluZywgdG9wUGFkZGluZywgcGFnZVdpZHRoLCBwYWdlSGVpZ2h0KTtcbiAgfVxuICBmdW5jdGlvbiBkcmF3UmVjdHModGhlQXJyYXksIHRoZUdhcCwgdGhlVG9wUGFkLCB0aGVTaWRlUGFkLCB0aGVCYXJIZWlnaHQsIHRoZUNvbG9yU2NhbGUsIHcyKSB7XG4gICAgY29uc3QgdW5pcXVlVGFza09yZGVySWRzID0gWy4uLm5ldyBTZXQodGhlQXJyYXkubWFwKChpdGVtKSA9PiBpdGVtLm9yZGVyKSldO1xuICAgIGNvbnN0IHVuaXF1ZVRhc2tzID0gdW5pcXVlVGFza09yZGVySWRzLm1hcCgoaWQyKSA9PiB0aGVBcnJheS5maW5kKChpdGVtKSA9PiBpdGVtLm9yZGVyID09PSBpZDIpKTtcbiAgICBzdmcuYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCJyZWN0XCIpLmRhdGEodW5pcXVlVGFza3MpLmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwieFwiLCAwKS5hdHRyKFwieVwiLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICBpID0gZC5vcmRlcjtcbiAgICAgIHJldHVybiBpICogdGhlR2FwICsgdGhlVG9wUGFkIC0gMjtcbiAgICB9KS5hdHRyKFwid2lkdGhcIiwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdzIgLSBjb25mLnJpZ2h0UGFkZGluZyAvIDI7XG4gICAgfSkuYXR0cihcImhlaWdodFwiLCB0aGVHYXApLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbihkKSB7XG4gICAgICBmb3IgKGNvbnN0IFtpLCBjYXRlZ29yeV0gb2YgY2F0ZWdvcmllcy5lbnRyaWVzKCkpIHtcbiAgICAgICAgaWYgKGQudHlwZSA9PT0gY2F0ZWdvcnkpIHtcbiAgICAgICAgICByZXR1cm4gXCJzZWN0aW9uIHNlY3Rpb25cIiArIGkgJSBjb25mLm51bWJlclNlY3Rpb25TdHlsZXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBcInNlY3Rpb24gc2VjdGlvbjBcIjtcbiAgICB9KTtcbiAgICBjb25zdCByZWN0YW5nbGVzID0gc3ZnLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwicmVjdFwiKS5kYXRhKHRoZUFycmF5KS5lbnRlcigpO1xuICAgIGNvbnN0IGxpbmtzMiA9IGRpYWdPYmouZGIuZ2V0TGlua3MoKTtcbiAgICByZWN0YW5nbGVzLmFwcGVuZChcInJlY3RcIikuYXR0cihcImlkXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgIHJldHVybiBkLmlkO1xuICAgIH0pLmF0dHIoXCJyeFwiLCAzKS5hdHRyKFwicnlcIiwgMykuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgaWYgKGQubWlsZXN0b25lKSB7XG4gICAgICAgIHJldHVybiB0aW1lU2NhbGUoZC5zdGFydFRpbWUpICsgdGhlU2lkZVBhZCArIDAuNSAqICh0aW1lU2NhbGUoZC5lbmRUaW1lKSAtIHRpbWVTY2FsZShkLnN0YXJ0VGltZSkpIC0gMC41ICogdGhlQmFySGVpZ2h0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRpbWVTY2FsZShkLnN0YXJ0VGltZSkgKyB0aGVTaWRlUGFkO1xuICAgIH0pLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgIGkgPSBkLm9yZGVyO1xuICAgICAgcmV0dXJuIGkgKiB0aGVHYXAgKyB0aGVUb3BQYWQ7XG4gICAgfSkuYXR0cihcIndpZHRoXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgIGlmIChkLm1pbGVzdG9uZSkge1xuICAgICAgICByZXR1cm4gdGhlQmFySGVpZ2h0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRpbWVTY2FsZShkLnJlbmRlckVuZFRpbWUgfHwgZC5lbmRUaW1lKSAtIHRpbWVTY2FsZShkLnN0YXJ0VGltZSk7XG4gICAgfSkuYXR0cihcImhlaWdodFwiLCB0aGVCYXJIZWlnaHQpLmF0dHIoXCJ0cmFuc2Zvcm0tb3JpZ2luXCIsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgIGkgPSBkLm9yZGVyO1xuICAgICAgcmV0dXJuICh0aW1lU2NhbGUoZC5zdGFydFRpbWUpICsgdGhlU2lkZVBhZCArIDAuNSAqICh0aW1lU2NhbGUoZC5lbmRUaW1lKSAtIHRpbWVTY2FsZShkLnN0YXJ0VGltZSkpKS50b1N0cmluZygpICsgXCJweCBcIiArIChpICogdGhlR2FwICsgdGhlVG9wUGFkICsgMC41ICogdGhlQmFySGVpZ2h0KS50b1N0cmluZygpICsgXCJweFwiO1xuICAgIH0pLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbihkKSB7XG4gICAgICBjb25zdCByZXMgPSBcInRhc2tcIjtcbiAgICAgIGxldCBjbGFzc1N0ciA9IFwiXCI7XG4gICAgICBpZiAoZC5jbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2xhc3NTdHIgPSBkLmNsYXNzZXMuam9pbihcIiBcIik7XG4gICAgICB9XG4gICAgICBsZXQgc2VjTnVtID0gMDtcbiAgICAgIGZvciAoY29uc3QgW2ksIGNhdGVnb3J5XSBvZiBjYXRlZ29yaWVzLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoZC50eXBlID09PSBjYXRlZ29yeSkge1xuICAgICAgICAgIHNlY051bSA9IGkgJSBjb25mLm51bWJlclNlY3Rpb25TdHlsZXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCB0YXNrQ2xhc3MgPSBcIlwiO1xuICAgICAgaWYgKGQuYWN0aXZlKSB7XG4gICAgICAgIGlmIChkLmNyaXQpIHtcbiAgICAgICAgICB0YXNrQ2xhc3MgKz0gXCIgYWN0aXZlQ3JpdFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhc2tDbGFzcyA9IFwiIGFjdGl2ZVwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGQuZG9uZSkge1xuICAgICAgICBpZiAoZC5jcml0KSB7XG4gICAgICAgICAgdGFza0NsYXNzID0gXCIgZG9uZUNyaXRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXNrQ2xhc3MgPSBcIiBkb25lXCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkLmNyaXQpIHtcbiAgICAgICAgICB0YXNrQ2xhc3MgKz0gXCIgY3JpdFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGFza0NsYXNzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0YXNrQ2xhc3MgPSBcIiB0YXNrXCI7XG4gICAgICB9XG4gICAgICBpZiAoZC5taWxlc3RvbmUpIHtcbiAgICAgICAgdGFza0NsYXNzID0gXCIgbWlsZXN0b25lIFwiICsgdGFza0NsYXNzO1xuICAgICAgfVxuICAgICAgdGFza0NsYXNzICs9IHNlY051bTtcbiAgICAgIHRhc2tDbGFzcyArPSBcIiBcIiArIGNsYXNzU3RyO1xuICAgICAgcmV0dXJuIHJlcyArIHRhc2tDbGFzcztcbiAgICB9KTtcbiAgICByZWN0YW5nbGVzLmFwcGVuZChcInRleHRcIikuYXR0cihcImlkXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgIHJldHVybiBkLmlkICsgXCItdGV4dFwiO1xuICAgIH0pLnRleHQoZnVuY3Rpb24oZCkge1xuICAgICAgcmV0dXJuIGQudGFzaztcbiAgICB9KS5hdHRyKFwiZm9udC1zaXplXCIsIGNvbmYuZm9udFNpemUpLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgIGxldCBzdGFydFggPSB0aW1lU2NhbGUoZC5zdGFydFRpbWUpO1xuICAgICAgbGV0IGVuZFggPSB0aW1lU2NhbGUoZC5yZW5kZXJFbmRUaW1lIHx8IGQuZW5kVGltZSk7XG4gICAgICBpZiAoZC5taWxlc3RvbmUpIHtcbiAgICAgICAgc3RhcnRYICs9IDAuNSAqICh0aW1lU2NhbGUoZC5lbmRUaW1lKSAtIHRpbWVTY2FsZShkLnN0YXJ0VGltZSkpIC0gMC41ICogdGhlQmFySGVpZ2h0O1xuICAgICAgfVxuICAgICAgaWYgKGQubWlsZXN0b25lKSB7XG4gICAgICAgIGVuZFggPSBzdGFydFggKyB0aGVCYXJIZWlnaHQ7XG4gICAgICB9XG4gICAgICBjb25zdCB0ZXh0V2lkdGggPSB0aGlzLmdldEJCb3goKS53aWR0aDtcbiAgICAgIGlmICh0ZXh0V2lkdGggPiBlbmRYIC0gc3RhcnRYKSB7XG4gICAgICAgIGlmIChlbmRYICsgdGV4dFdpZHRoICsgMS41ICogY29uZi5sZWZ0UGFkZGluZyA+IHcyKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXJ0WCArIHRoZVNpZGVQYWQgLSA1O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBlbmRYICsgdGhlU2lkZVBhZCArIDU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoZW5kWCAtIHN0YXJ0WCkgLyAyICsgc3RhcnRYICsgdGhlU2lkZVBhZDtcbiAgICAgIH1cbiAgICB9KS5hdHRyKFwieVwiLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICBpID0gZC5vcmRlcjtcbiAgICAgIHJldHVybiBpICogdGhlR2FwICsgY29uZi5iYXJIZWlnaHQgLyAyICsgKGNvbmYuZm9udFNpemUgLyAyIC0gMikgKyB0aGVUb3BQYWQ7XG4gICAgfSkuYXR0cihcInRleHQtaGVpZ2h0XCIsIHRoZUJhckhlaWdodCkuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0WCA9IHRpbWVTY2FsZShkLnN0YXJ0VGltZSk7XG4gICAgICBsZXQgZW5kWCA9IHRpbWVTY2FsZShkLmVuZFRpbWUpO1xuICAgICAgaWYgKGQubWlsZXN0b25lKSB7XG4gICAgICAgIGVuZFggPSBzdGFydFggKyB0aGVCYXJIZWlnaHQ7XG4gICAgICB9XG4gICAgICBjb25zdCB0ZXh0V2lkdGggPSB0aGlzLmdldEJCb3goKS53aWR0aDtcbiAgICAgIGxldCBjbGFzc1N0ciA9IFwiXCI7XG4gICAgICBpZiAoZC5jbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2xhc3NTdHIgPSBkLmNsYXNzZXMuam9pbihcIiBcIik7XG4gICAgICB9XG4gICAgICBsZXQgc2VjTnVtID0gMDtcbiAgICAgIGZvciAoY29uc3QgW2ksIGNhdGVnb3J5XSBvZiBjYXRlZ29yaWVzLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoZC50eXBlID09PSBjYXRlZ29yeSkge1xuICAgICAgICAgIHNlY051bSA9IGkgJSBjb25mLm51bWJlclNlY3Rpb25TdHlsZXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCB0YXNrVHlwZSA9IFwiXCI7XG4gICAgICBpZiAoZC5hY3RpdmUpIHtcbiAgICAgICAgaWYgKGQuY3JpdCkge1xuICAgICAgICAgIHRhc2tUeXBlID0gXCJhY3RpdmVDcml0VGV4dFwiICsgc2VjTnVtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhc2tUeXBlID0gXCJhY3RpdmVUZXh0XCIgKyBzZWNOdW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkLmRvbmUpIHtcbiAgICAgICAgaWYgKGQuY3JpdCkge1xuICAgICAgICAgIHRhc2tUeXBlID0gdGFza1R5cGUgKyBcIiBkb25lQ3JpdFRleHRcIiArIHNlY051bTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXNrVHlwZSA9IHRhc2tUeXBlICsgXCIgZG9uZVRleHRcIiArIHNlY051bTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGQuY3JpdCkge1xuICAgICAgICAgIHRhc2tUeXBlID0gdGFza1R5cGUgKyBcIiBjcml0VGV4dFwiICsgc2VjTnVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZC5taWxlc3RvbmUpIHtcbiAgICAgICAgdGFza1R5cGUgKz0gXCIgbWlsZXN0b25lVGV4dFwiO1xuICAgICAgfVxuICAgICAgaWYgKHRleHRXaWR0aCA+IGVuZFggLSBzdGFydFgpIHtcbiAgICAgICAgaWYgKGVuZFggKyB0ZXh0V2lkdGggKyAxLjUgKiBjb25mLmxlZnRQYWRkaW5nID4gdzIpIHtcbiAgICAgICAgICByZXR1cm4gY2xhc3NTdHIgKyBcIiB0YXNrVGV4dE91dHNpZGVMZWZ0IHRhc2tUZXh0T3V0c2lkZVwiICsgc2VjTnVtICsgXCIgXCIgKyB0YXNrVHlwZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gY2xhc3NTdHIgKyBcIiB0YXNrVGV4dE91dHNpZGVSaWdodCB0YXNrVGV4dE91dHNpZGVcIiArIHNlY051bSArIFwiIFwiICsgdGFza1R5cGUgKyBcIiB3aWR0aC1cIiArIHRleHRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNsYXNzU3RyICsgXCIgdGFza1RleHQgdGFza1RleHRcIiArIHNlY051bSArIFwiIFwiICsgdGFza1R5cGUgKyBcIiB3aWR0aC1cIiArIHRleHRXaWR0aDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBzZWN1cml0eUxldmVsMiA9IGdldENvbmZpZygpLnNlY3VyaXR5TGV2ZWw7XG4gICAgaWYgKHNlY3VyaXR5TGV2ZWwyID09PSBcInNhbmRib3hcIikge1xuICAgICAgbGV0IHNhbmRib3hFbGVtZW50MjtcbiAgICAgIHNhbmRib3hFbGVtZW50MiA9IHNlbGVjdChcIiNpXCIgKyBpZCk7XG4gICAgICBjb25zdCBkb2MyID0gc2FuZGJveEVsZW1lbnQyLm5vZGVzKClbMF0uY29udGVudERvY3VtZW50O1xuICAgICAgcmVjdGFuZ2xlcy5maWx0ZXIoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gbGlua3MyW2QuaWRdICE9PSB2b2lkIDA7XG4gICAgICB9KS5lYWNoKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgdmFyIHRhc2tSZWN0ID0gZG9jMi5xdWVyeVNlbGVjdG9yKFwiI1wiICsgby5pZCk7XG4gICAgICAgIHZhciB0YXNrVGV4dCA9IGRvYzIucXVlcnlTZWxlY3RvcihcIiNcIiArIG8uaWQgKyBcIi10ZXh0XCIpO1xuICAgICAgICBjb25zdCBvbGRQYXJlbnQgPSB0YXNrUmVjdC5wYXJlbnROb2RlO1xuICAgICAgICB2YXIgTGluayA9IGRvYzIuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIExpbmsuc2V0QXR0cmlidXRlKFwieGxpbms6aHJlZlwiLCBsaW5rczJbby5pZF0pO1xuICAgICAgICBMaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl90b3BcIik7XG4gICAgICAgIG9sZFBhcmVudC5hcHBlbmRDaGlsZChMaW5rKTtcbiAgICAgICAgTGluay5hcHBlbmRDaGlsZCh0YXNrUmVjdCk7XG4gICAgICAgIExpbmsuYXBwZW5kQ2hpbGQodGFza1RleHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGRyYXdFeGNsdWRlRGF5cyh0aGVHYXAsIHRoZVRvcFBhZCwgdGhlU2lkZVBhZCwgdzIsIGgyLCB0YXNrczIsIGV4Y2x1ZGVzMiwgaW5jbHVkZXMyKSB7XG4gICAgaWYgKGV4Y2x1ZGVzMi5sZW5ndGggPT09IDAgJiYgaW5jbHVkZXMyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgbWluVGltZTtcbiAgICBsZXQgbWF4VGltZTtcbiAgICBmb3IgKGNvbnN0IHsgc3RhcnRUaW1lLCBlbmRUaW1lIH0gb2YgdGFza3MyKSB7XG4gICAgICBpZiAobWluVGltZSA9PT0gdm9pZCAwIHx8IHN0YXJ0VGltZSA8IG1pblRpbWUpIHtcbiAgICAgICAgbWluVGltZSA9IHN0YXJ0VGltZTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhUaW1lID09PSB2b2lkIDAgfHwgZW5kVGltZSA+IG1heFRpbWUpIHtcbiAgICAgICAgbWF4VGltZSA9IGVuZFRpbWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbWluVGltZSB8fCAhbWF4VGltZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGF5anMobWF4VGltZSkuZGlmZihkYXlqcyhtaW5UaW1lKSwgXCJ5ZWFyXCIpID4gNSkge1xuICAgICAgbG9nLndhcm4oXG4gICAgICAgIFwiVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggdGltZSBpcyBtb3JlIHRoYW4gNSB5ZWFycy4gVGhpcyB3aWxsIGNhdXNlIHBlcmZvcm1hbmNlIGlzc3Vlcy4gU2tpcHBpbmcgZHJhd2luZyBleGNsdWRlIGRheXMuXCJcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRhdGVGb3JtYXQyID0gZGlhZ09iai5kYi5nZXREYXRlRm9ybWF0KCk7XG4gICAgY29uc3QgZXhjbHVkZVJhbmdlcyA9IFtdO1xuICAgIGxldCByYW5nZSA9IG51bGw7XG4gICAgbGV0IGQgPSBkYXlqcyhtaW5UaW1lKTtcbiAgICB3aGlsZSAoZC52YWx1ZU9mKCkgPD0gbWF4VGltZSkge1xuICAgICAgaWYgKGRpYWdPYmouZGIuaXNJbnZhbGlkRGF0ZShkLCBkYXRlRm9ybWF0MiwgZXhjbHVkZXMyLCBpbmNsdWRlczIpKSB7XG4gICAgICAgIGlmICghcmFuZ2UpIHtcbiAgICAgICAgICByYW5nZSA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiBkLFxuICAgICAgICAgICAgZW5kOiBkXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByYW5nZS5lbmQgPSBkO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmFuZ2UpIHtcbiAgICAgICAgICBleGNsdWRlUmFuZ2VzLnB1c2gocmFuZ2UpO1xuICAgICAgICAgIHJhbmdlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZCA9IGQuYWRkKDEsIFwiZFwiKTtcbiAgICB9XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHN2Zy5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcInJlY3RcIikuZGF0YShleGNsdWRlUmFuZ2VzKS5lbnRlcigpO1xuICAgIHJlY3RhbmdsZXMuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwiaWRcIiwgZnVuY3Rpb24oZDIpIHtcbiAgICAgIHJldHVybiBcImV4Y2x1ZGUtXCIgKyBkMi5zdGFydC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgIH0pLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQyKSB7XG4gICAgICByZXR1cm4gdGltZVNjYWxlKGQyLnN0YXJ0KSArIHRoZVNpZGVQYWQ7XG4gICAgfSkuYXR0cihcInlcIiwgY29uZi5ncmlkTGluZVN0YXJ0UGFkZGluZykuYXR0cihcIndpZHRoXCIsIGZ1bmN0aW9uKGQyKSB7XG4gICAgICBjb25zdCByZW5kZXJFbmQgPSBkMi5lbmQuYWRkKDEsIFwiZGF5XCIpO1xuICAgICAgcmV0dXJuIHRpbWVTY2FsZShyZW5kZXJFbmQpIC0gdGltZVNjYWxlKGQyLnN0YXJ0KTtcbiAgICB9KS5hdHRyKFwiaGVpZ2h0XCIsIGgyIC0gdGhlVG9wUGFkIC0gY29uZi5ncmlkTGluZVN0YXJ0UGFkZGluZykuYXR0cihcInRyYW5zZm9ybS1vcmlnaW5cIiwgZnVuY3Rpb24oZDIsIGkpIHtcbiAgICAgIHJldHVybiAodGltZVNjYWxlKGQyLnN0YXJ0KSArIHRoZVNpZGVQYWQgKyAwLjUgKiAodGltZVNjYWxlKGQyLmVuZCkgLSB0aW1lU2NhbGUoZDIuc3RhcnQpKSkudG9TdHJpbmcoKSArIFwicHggXCIgKyAoaSAqIHRoZUdhcCArIDAuNSAqIGgyKS50b1N0cmluZygpICsgXCJweFwiO1xuICAgIH0pLmF0dHIoXCJjbGFzc1wiLCBcImV4Y2x1ZGUtcmFuZ2VcIik7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUdyaWQodGhlU2lkZVBhZCwgdGhlVG9wUGFkLCB3MiwgaDIpIHtcbiAgICBsZXQgYm90dG9tWEF4aXMgPSBheGlzQm90dG9tKHRpbWVTY2FsZSkudGlja1NpemUoLWgyICsgdGhlVG9wUGFkICsgY29uZi5ncmlkTGluZVN0YXJ0UGFkZGluZykudGlja0Zvcm1hdCh0aW1lRm9ybWF0KGRpYWdPYmouZGIuZ2V0QXhpc0Zvcm1hdCgpIHx8IGNvbmYuYXhpc0Zvcm1hdCB8fCBcIiVZLSVtLSVkXCIpKTtcbiAgICBjb25zdCByZVRpY2tJbnRlcnZhbCA9IC9eKFsxLTldXFxkKikobWlsbGlzZWNvbmR8c2Vjb25kfG1pbnV0ZXxob3VyfGRheXx3ZWVrfG1vbnRoKSQvO1xuICAgIGNvbnN0IHJlc3VsdFRpY2tJbnRlcnZhbCA9IHJlVGlja0ludGVydmFsLmV4ZWMoXG4gICAgICBkaWFnT2JqLmRiLmdldFRpY2tJbnRlcnZhbCgpIHx8IGNvbmYudGlja0ludGVydmFsXG4gICAgKTtcbiAgICBpZiAocmVzdWx0VGlja0ludGVydmFsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBldmVyeSA9IHJlc3VsdFRpY2tJbnRlcnZhbFsxXTtcbiAgICAgIGNvbnN0IGludGVydmFsID0gcmVzdWx0VGlja0ludGVydmFsWzJdO1xuICAgICAgY29uc3Qgd2Vla2RheTIgPSBkaWFnT2JqLmRiLmdldFdlZWtkYXkoKSB8fCBjb25mLndlZWtkYXk7XG4gICAgICBzd2l0Y2ggKGludGVydmFsKSB7XG4gICAgICAgIGNhc2UgXCJtaWxsaXNlY29uZFwiOlxuICAgICAgICAgIGJvdHRvbVhBeGlzLnRpY2tzKHRpbWVNaWxsaXNlY29uZC5ldmVyeShldmVyeSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2Vjb25kXCI6XG4gICAgICAgICAgYm90dG9tWEF4aXMudGlja3ModGltZVNlY29uZC5ldmVyeShldmVyeSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibWludXRlXCI6XG4gICAgICAgICAgYm90dG9tWEF4aXMudGlja3ModGltZU1pbnV0ZS5ldmVyeShldmVyeSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaG91clwiOlxuICAgICAgICAgIGJvdHRvbVhBeGlzLnRpY2tzKHRpbWVIb3VyLmV2ZXJ5KGV2ZXJ5KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJkYXlcIjpcbiAgICAgICAgICBib3R0b21YQXhpcy50aWNrcyh0aW1lRGF5LmV2ZXJ5KGV2ZXJ5KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ3ZWVrXCI6XG4gICAgICAgICAgYm90dG9tWEF4aXMudGlja3MobWFwV2Vla2RheVRvVGltZUZ1bmN0aW9uW3dlZWtkYXkyXS5ldmVyeShldmVyeSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibW9udGhcIjpcbiAgICAgICAgICBib3R0b21YQXhpcy50aWNrcyh0aW1lTW9udGguZXZlcnkoZXZlcnkpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgc3ZnLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiZ3JpZFwiKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgdGhlU2lkZVBhZCArIFwiLCBcIiArIChoMiAtIDUwKSArIFwiKVwiKS5jYWxsKGJvdHRvbVhBeGlzKS5zZWxlY3RBbGwoXCJ0ZXh0XCIpLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIikuYXR0cihcImZpbGxcIiwgXCIjMDAwXCIpLmF0dHIoXCJzdHJva2VcIiwgXCJub25lXCIpLmF0dHIoXCJmb250LXNpemVcIiwgMTApLmF0dHIoXCJkeVwiLCBcIjFlbVwiKTtcbiAgICBpZiAoZGlhZ09iai5kYi50b3BBeGlzRW5hYmxlZCgpIHx8IGNvbmYudG9wQXhpcykge1xuICAgICAgbGV0IHRvcFhBeGlzID0gYXhpc1RvcCh0aW1lU2NhbGUpLnRpY2tTaXplKC1oMiArIHRoZVRvcFBhZCArIGNvbmYuZ3JpZExpbmVTdGFydFBhZGRpbmcpLnRpY2tGb3JtYXQodGltZUZvcm1hdChkaWFnT2JqLmRiLmdldEF4aXNGb3JtYXQoKSB8fCBjb25mLmF4aXNGb3JtYXQgfHwgXCIlWS0lbS0lZFwiKSk7XG4gICAgICBpZiAocmVzdWx0VGlja0ludGVydmFsICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGV2ZXJ5ID0gcmVzdWx0VGlja0ludGVydmFsWzFdO1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHJlc3VsdFRpY2tJbnRlcnZhbFsyXTtcbiAgICAgICAgY29uc3Qgd2Vla2RheTIgPSBkaWFnT2JqLmRiLmdldFdlZWtkYXkoKSB8fCBjb25mLndlZWtkYXk7XG4gICAgICAgIHN3aXRjaCAoaW50ZXJ2YWwpIHtcbiAgICAgICAgICBjYXNlIFwibWlsbGlzZWNvbmRcIjpcbiAgICAgICAgICAgIHRvcFhBeGlzLnRpY2tzKHRpbWVNaWxsaXNlY29uZC5ldmVyeShldmVyeSkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcInNlY29uZFwiOlxuICAgICAgICAgICAgdG9wWEF4aXMudGlja3ModGltZVNlY29uZC5ldmVyeShldmVyeSkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm1pbnV0ZVwiOlxuICAgICAgICAgICAgdG9wWEF4aXMudGlja3ModGltZU1pbnV0ZS5ldmVyeShldmVyeSkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImhvdXJcIjpcbiAgICAgICAgICAgIHRvcFhBeGlzLnRpY2tzKHRpbWVIb3VyLmV2ZXJ5KGV2ZXJ5KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICAgICAgICB0b3BYQXhpcy50aWNrcyh0aW1lRGF5LmV2ZXJ5KGV2ZXJ5KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwid2Vla1wiOlxuICAgICAgICAgICAgdG9wWEF4aXMudGlja3MobWFwV2Vla2RheVRvVGltZUZ1bmN0aW9uW3dlZWtkYXkyXS5ldmVyeShldmVyeSkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgICAgICB0b3BYQXhpcy50aWNrcyh0aW1lTW9udGguZXZlcnkoZXZlcnkpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJncmlkXCIpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB0aGVTaWRlUGFkICsgXCIsIFwiICsgdGhlVG9wUGFkICsgXCIpXCIpLmNhbGwodG9wWEF4aXMpLnNlbGVjdEFsbChcInRleHRcIikuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKS5hdHRyKFwiZmlsbFwiLCBcIiMwMDBcIikuYXR0cihcInN0cm9rZVwiLCBcIm5vbmVcIikuYXR0cihcImZvbnQtc2l6ZVwiLCAxMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHZlcnRMYWJlbHModGhlR2FwLCB0aGVUb3BQYWQpIHtcbiAgICBsZXQgcHJldkdhcCA9IDA7XG4gICAgY29uc3QgbnVtT2NjdXJyZW5jZXMgPSBPYmplY3Qua2V5cyhjYXRlZ29yeUhlaWdodHMpLm1hcCgoZCkgPT4gW2QsIGNhdGVnb3J5SGVpZ2h0c1tkXV0pO1xuICAgIHN2Zy5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcInRleHRcIikuZGF0YShudW1PY2N1cnJlbmNlcykuZW50ZXIoKS5hcHBlbmQoZnVuY3Rpb24oZCkge1xuICAgICAgY29uc3Qgcm93cyA9IGRbMF0uc3BsaXQoY29tbW9uLmxpbmVCcmVha1JlZ2V4KTtcbiAgICAgIGNvbnN0IGR5ID0gLShyb3dzLmxlbmd0aCAtIDEpIC8gMjtcbiAgICAgIGNvbnN0IHN2Z0xhYmVsID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwidGV4dFwiKTtcbiAgICAgIHN2Z0xhYmVsLnNldEF0dHJpYnV0ZShcImR5XCIsIGR5ICsgXCJlbVwiKTtcbiAgICAgIGZvciAoY29uc3QgW2osIHJvd10gb2Ygcm93cy5lbnRyaWVzKCkpIHtcbiAgICAgICAgY29uc3QgdHNwYW4gPSBkb2MuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJ0c3BhblwiKTtcbiAgICAgICAgdHNwYW4uc2V0QXR0cmlidXRlKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsIFwiY2VudHJhbFwiKTtcbiAgICAgICAgdHNwYW4uc2V0QXR0cmlidXRlKFwieFwiLCBcIjEwXCIpO1xuICAgICAgICBpZiAoaiA+IDApIHtcbiAgICAgICAgICB0c3Bhbi5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBcIjFlbVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0c3Bhbi50ZXh0Q29udGVudCA9IHJvdztcbiAgICAgICAgc3ZnTGFiZWwuYXBwZW5kQ2hpbGQodHNwYW4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN2Z0xhYmVsO1xuICAgIH0pLmF0dHIoXCJ4XCIsIDEwKS5hdHRyKFwieVwiLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICBwcmV2R2FwICs9IG51bU9jY3VycmVuY2VzW2kgLSAxXVsxXTtcbiAgICAgICAgICByZXR1cm4gZFsxXSAqIHRoZUdhcCAvIDIgKyBwcmV2R2FwICogdGhlR2FwICsgdGhlVG9wUGFkO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZFsxXSAqIHRoZUdhcCAvIDIgKyB0aGVUb3BQYWQ7XG4gICAgICB9XG4gICAgfSkuYXR0cihcImZvbnQtc2l6ZVwiLCBjb25mLnNlY3Rpb25Gb250U2l6ZSkuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgIGZvciAoY29uc3QgW2ksIGNhdGVnb3J5XSBvZiBjYXRlZ29yaWVzLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoZFswXSA9PT0gY2F0ZWdvcnkpIHtcbiAgICAgICAgICByZXR1cm4gXCJzZWN0aW9uVGl0bGUgc2VjdGlvblRpdGxlXCIgKyBpICUgY29uZi5udW1iZXJTZWN0aW9uU3R5bGVzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJzZWN0aW9uVGl0bGVcIjtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBkcmF3VG9kYXkodGhlU2lkZVBhZCwgdGhlVG9wUGFkLCB3MiwgaDIpIHtcbiAgICBjb25zdCB0b2RheU1hcmtlcjIgPSBkaWFnT2JqLmRiLmdldFRvZGF5TWFya2VyKCk7XG4gICAgaWYgKHRvZGF5TWFya2VyMiA9PT0gXCJvZmZcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0b2RheUcgPSBzdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJ0b2RheVwiKTtcbiAgICBjb25zdCB0b2RheSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRvZGF5TGluZSA9IHRvZGF5Ry5hcHBlbmQoXCJsaW5lXCIpO1xuICAgIHRvZGF5TGluZS5hdHRyKFwieDFcIiwgdGltZVNjYWxlKHRvZGF5KSArIHRoZVNpZGVQYWQpLmF0dHIoXCJ4MlwiLCB0aW1lU2NhbGUodG9kYXkpICsgdGhlU2lkZVBhZCkuYXR0cihcInkxXCIsIGNvbmYudGl0bGVUb3BNYXJnaW4pLmF0dHIoXCJ5MlwiLCBoMiAtIGNvbmYudGl0bGVUb3BNYXJnaW4pLmF0dHIoXCJjbGFzc1wiLCBcInRvZGF5XCIpO1xuICAgIGlmICh0b2RheU1hcmtlcjIgIT09IFwiXCIpIHtcbiAgICAgIHRvZGF5TGluZS5hdHRyKFwic3R5bGVcIiwgdG9kYXlNYXJrZXIyLnJlcGxhY2UoLywvZywgXCI7XCIpKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tVbmlxdWUoYXJyKSB7XG4gICAgY29uc3QgaGFzaCA9IHt9O1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGFzaCwgYXJyW2ldKSkge1xuICAgICAgICBoYXNoW2FycltpXV0gPSB0cnVlO1xuICAgICAgICByZXN1bHQucHVzaChhcnJbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuY29uc3QgZ2FudHRSZW5kZXJlciA9IHtcbiAgc2V0Q29uZixcbiAgZHJhd1xufTtcbmNvbnN0IGdldFN0eWxlcyA9IChvcHRpb25zKSA9PiBgXG4gIC5tZXJtYWlkLW1haW4tZm9udCB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1lcm1haWQtZm9udC1mYW1pbHksIFwidHJlYnVjaGV0IG1zXCIsIHZlcmRhbmEsIGFyaWFsLCBzYW5zLXNlcmlmKTtcbiAgfVxuXG4gIC5leGNsdWRlLXJhbmdlIHtcbiAgICBmaWxsOiAke29wdGlvbnMuZXhjbHVkZUJrZ0NvbG9yfTtcbiAgfVxuXG4gIC5zZWN0aW9uIHtcbiAgICBzdHJva2U6IG5vbmU7XG4gICAgb3BhY2l0eTogMC4yO1xuICB9XG5cbiAgLnNlY3Rpb24wIHtcbiAgICBmaWxsOiAke29wdGlvbnMuc2VjdGlvbkJrZ0NvbG9yfTtcbiAgfVxuXG4gIC5zZWN0aW9uMiB7XG4gICAgZmlsbDogJHtvcHRpb25zLnNlY3Rpb25Ca2dDb2xvcjJ9O1xuICB9XG5cbiAgLnNlY3Rpb24xLFxuICAuc2VjdGlvbjMge1xuICAgIGZpbGw6ICR7b3B0aW9ucy5hbHRTZWN0aW9uQmtnQ29sb3J9O1xuICAgIG9wYWNpdHk6IDAuMjtcbiAgfVxuXG4gIC5zZWN0aW9uVGl0bGUwIHtcbiAgICBmaWxsOiAke29wdGlvbnMudGl0bGVDb2xvcn07XG4gIH1cblxuICAuc2VjdGlvblRpdGxlMSB7XG4gICAgZmlsbDogJHtvcHRpb25zLnRpdGxlQ29sb3J9O1xuICB9XG5cbiAgLnNlY3Rpb25UaXRsZTIge1xuICAgIGZpbGw6ICR7b3B0aW9ucy50aXRsZUNvbG9yfTtcbiAgfVxuXG4gIC5zZWN0aW9uVGl0bGUzIHtcbiAgICBmaWxsOiAke29wdGlvbnMudGl0bGVDb2xvcn07XG4gIH1cblxuICAuc2VjdGlvblRpdGxlIHtcbiAgICB0ZXh0LWFuY2hvcjogc3RhcnQ7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1lcm1haWQtZm9udC1mYW1pbHksIFwidHJlYnVjaGV0IG1zXCIsIHZlcmRhbmEsIGFyaWFsLCBzYW5zLXNlcmlmKTtcbiAgfVxuXG5cbiAgLyogR3JpZCBhbmQgYXhpcyAqL1xuXG4gIC5ncmlkIC50aWNrIHtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy5ncmlkQ29sb3J9O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XG4gIH1cblxuICAuZ3JpZCAudGljayB0ZXh0IHtcbiAgICBmb250LWZhbWlseTogJHtvcHRpb25zLmZvbnRGYW1pbHl9O1xuICAgIGZpbGw6ICR7b3B0aW9ucy50ZXh0Q29sb3J9O1xuICB9XG5cbiAgLmdyaWQgcGF0aCB7XG4gICAgc3Ryb2tlLXdpZHRoOiAwO1xuICB9XG5cblxuICAvKiBUb2RheSBsaW5lICovXG5cbiAgLnRvZGF5IHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZTogJHtvcHRpb25zLnRvZGF5TGluZUNvbG9yfTtcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcbiAgfVxuXG5cbiAgLyogVGFzayBzdHlsaW5nICovXG5cbiAgLyogRGVmYXVsdCB0YXNrICovXG5cbiAgLnRhc2sge1xuICAgIHN0cm9rZS13aWR0aDogMjtcbiAgfVxuXG4gIC50YXNrVGV4dCB7XG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWVybWFpZC1mb250LWZhbWlseSwgXCJ0cmVidWNoZXQgbXNcIiwgdmVyZGFuYSwgYXJpYWwsIHNhbnMtc2VyaWYpO1xuICB9XG5cbiAgLnRhc2tUZXh0T3V0c2lkZVJpZ2h0IHtcbiAgICBmaWxsOiAke29wdGlvbnMudGFza1RleHREYXJrQ29sb3J9O1xuICAgIHRleHQtYW5jaG9yOiBzdGFydDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWVybWFpZC1mb250LWZhbWlseSwgXCJ0cmVidWNoZXQgbXNcIiwgdmVyZGFuYSwgYXJpYWwsIHNhbnMtc2VyaWYpO1xuICB9XG5cbiAgLnRhc2tUZXh0T3V0c2lkZUxlZnQge1xuICAgIGZpbGw6ICR7b3B0aW9ucy50YXNrVGV4dERhcmtDb2xvcn07XG4gICAgdGV4dC1hbmNob3I6IGVuZDtcbiAgfVxuXG5cbiAgLyogU3BlY2lhbCBjYXNlIGNsaWNrYWJsZSAqL1xuXG4gIC50YXNrLmNsaWNrYWJsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnRhc2tUZXh0LmNsaWNrYWJsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbGw6ICR7b3B0aW9ucy50YXNrVGV4dENsaWNrYWJsZUNvbG9yfSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLnRhc2tUZXh0T3V0c2lkZUxlZnQuY2xpY2thYmxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsbDogJHtvcHRpb25zLnRhc2tUZXh0Q2xpY2thYmxlQ29sb3J9ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAudGFza1RleHRPdXRzaWRlUmlnaHQuY2xpY2thYmxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsbDogJHtvcHRpb25zLnRhc2tUZXh0Q2xpY2thYmxlQ29sb3J9ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuXG4gIC8qIFNwZWNpZmljIHRhc2sgc2V0dGluZ3MgZm9yIHRoZSBzZWN0aW9ucyovXG5cbiAgLnRhc2tUZXh0MCxcbiAgLnRhc2tUZXh0MSxcbiAgLnRhc2tUZXh0MixcbiAgLnRhc2tUZXh0MyB7XG4gICAgZmlsbDogJHtvcHRpb25zLnRhc2tUZXh0Q29sb3J9O1xuICB9XG5cbiAgLnRhc2swLFxuICAudGFzazEsXG4gIC50YXNrMixcbiAgLnRhc2szIHtcbiAgICBmaWxsOiAke29wdGlvbnMudGFza0JrZ0NvbG9yfTtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy50YXNrQm9yZGVyQ29sb3J9O1xuICB9XG5cbiAgLnRhc2tUZXh0T3V0c2lkZTAsXG4gIC50YXNrVGV4dE91dHNpZGUyXG4gIHtcbiAgICBmaWxsOiAke29wdGlvbnMudGFza1RleHRPdXRzaWRlQ29sb3J9O1xuICB9XG5cbiAgLnRhc2tUZXh0T3V0c2lkZTEsXG4gIC50YXNrVGV4dE91dHNpZGUzIHtcbiAgICBmaWxsOiAke29wdGlvbnMudGFza1RleHRPdXRzaWRlQ29sb3J9O1xuICB9XG5cblxuICAvKiBBY3RpdmUgdGFzayAqL1xuXG4gIC5hY3RpdmUwLFxuICAuYWN0aXZlMSxcbiAgLmFjdGl2ZTIsXG4gIC5hY3RpdmUzIHtcbiAgICBmaWxsOiAke29wdGlvbnMuYWN0aXZlVGFza0JrZ0NvbG9yfTtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy5hY3RpdmVUYXNrQm9yZGVyQ29sb3J9O1xuICB9XG5cbiAgLmFjdGl2ZVRleHQwLFxuICAuYWN0aXZlVGV4dDEsXG4gIC5hY3RpdmVUZXh0MixcbiAgLmFjdGl2ZVRleHQzIHtcbiAgICBmaWxsOiAke29wdGlvbnMudGFza1RleHREYXJrQ29sb3J9ICFpbXBvcnRhbnQ7XG4gIH1cblxuXG4gIC8qIENvbXBsZXRlZCB0YXNrICovXG5cbiAgLmRvbmUwLFxuICAuZG9uZTEsXG4gIC5kb25lMixcbiAgLmRvbmUzIHtcbiAgICBzdHJva2U6ICR7b3B0aW9ucy5kb25lVGFza0JvcmRlckNvbG9yfTtcbiAgICBmaWxsOiAke29wdGlvbnMuZG9uZVRhc2tCa2dDb2xvcn07XG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xuICB9XG5cbiAgLmRvbmVUZXh0MCxcbiAgLmRvbmVUZXh0MSxcbiAgLmRvbmVUZXh0MixcbiAgLmRvbmVUZXh0MyB7XG4gICAgZmlsbDogJHtvcHRpb25zLnRhc2tUZXh0RGFya0NvbG9yfSAhaW1wb3J0YW50O1xuICB9XG5cblxuICAvKiBUYXNrcyBvbiB0aGUgY3JpdGljYWwgbGluZSAqL1xuXG4gIC5jcml0MCxcbiAgLmNyaXQxLFxuICAuY3JpdDIsXG4gIC5jcml0MyB7XG4gICAgc3Ryb2tlOiAke29wdGlvbnMuY3JpdEJvcmRlckNvbG9yfTtcbiAgICBmaWxsOiAke29wdGlvbnMuY3JpdEJrZ0NvbG9yfTtcbiAgICBzdHJva2Utd2lkdGg6IDI7XG4gIH1cblxuICAuYWN0aXZlQ3JpdDAsXG4gIC5hY3RpdmVDcml0MSxcbiAgLmFjdGl2ZUNyaXQyLFxuICAuYWN0aXZlQ3JpdDMge1xuICAgIHN0cm9rZTogJHtvcHRpb25zLmNyaXRCb3JkZXJDb2xvcn07XG4gICAgZmlsbDogJHtvcHRpb25zLmFjdGl2ZVRhc2tCa2dDb2xvcn07XG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xuICB9XG5cbiAgLmRvbmVDcml0MCxcbiAgLmRvbmVDcml0MSxcbiAgLmRvbmVDcml0MixcbiAgLmRvbmVDcml0MyB7XG4gICAgc3Ryb2tlOiAke29wdGlvbnMuY3JpdEJvcmRlckNvbG9yfTtcbiAgICBmaWxsOiAke29wdGlvbnMuZG9uZVRhc2tCa2dDb2xvcn07XG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XG4gIH1cblxuICAubWlsZXN0b25lIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMC44LDAuOCk7XG4gIH1cblxuICAubWlsZXN0b25lVGV4dCB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG4gIC5kb25lQ3JpdFRleHQwLFxuICAuZG9uZUNyaXRUZXh0MSxcbiAgLmRvbmVDcml0VGV4dDIsXG4gIC5kb25lQ3JpdFRleHQzIHtcbiAgICBmaWxsOiAke29wdGlvbnMudGFza1RleHREYXJrQ29sb3J9ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWN0aXZlQ3JpdFRleHQwLFxuICAuYWN0aXZlQ3JpdFRleHQxLFxuICAuYWN0aXZlQ3JpdFRleHQyLFxuICAuYWN0aXZlQ3JpdFRleHQzIHtcbiAgICBmaWxsOiAke29wdGlvbnMudGFza1RleHREYXJrQ29sb3J9ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGl0bGVUZXh0IHtcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmaWxsOiAke29wdGlvbnMudGl0bGVDb2xvciB8fCBvcHRpb25zLnRleHRDb2xvcn07XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1lcm1haWQtZm9udC1mYW1pbHksIFwidHJlYnVjaGV0IG1zXCIsIHZlcmRhbmEsIGFyaWFsLCBzYW5zLXNlcmlmKTtcbiAgfVxuYDtcbmNvbnN0IGdhbnR0U3R5bGVzID0gZ2V0U3R5bGVzO1xuY29uc3QgZGlhZ3JhbSA9IHtcbiAgcGFyc2VyOiBnYW50dFBhcnNlcixcbiAgZGI6IGdhbnR0RGIsXG4gIHJlbmRlcmVyOiBnYW50dFJlbmRlcmVyLFxuICBzdHlsZXM6IGdhbnR0U3R5bGVzXG59O1xuZXhwb3J0IHtcbiAgZGlhZ3JhbVxufTtcbiJdLCJuYW1lcyI6WyJudW1iZXIiLCJ0MCIsInQxIiwiUmdiIiwicmdiQ29udmVydCIsImRlZmluZSIsImV4dGVuZCIsIkNvbG9yIiwiaGNsIiwiY29sb3JIY2wiLCJjb2xvciIsImh1ZSIsImJpc2VjdG9yIiwidGlja1N0ZXAiLCJjb250aW51b3VzIiwiY29weSIsImluaXRSYW5nZSIsInRpbWVXZWVrIiwidGltZVNlY29uZCIsInRoaXMiLCJkYXlqcyIsImNsZWFyJDEiLCJsb2ciLCJnZXRDb25maWciLCJzYW5pdGl6ZVVybCIsInV0aWxzIiwic2V0QWNjVGl0bGUiLCJnZXRBY2NUaXRsZSIsInNldERpYWdyYW1UaXRsZSIsImdldERpYWdyYW1UaXRsZSIsInNldEFjY0Rlc2NyaXB0aW9uIiwiZ2V0QWNjRGVzY3JpcHRpb24iLCJzZWxlY3QiLCJzY2FsZVRpbWUiLCJjb25maWd1cmVTdmdTaXplIiwic2NhbGVMaW5lYXIiLCJ0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U0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0SixLQUFLO0FBQ0w7QUFDQSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN0QjtBQUNBLElBQUksSUFBSTtBQUNSLFNBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxLQUFLO0FBQ3RELGVBQWUsYUFBYSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsYUFBYSxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsYUFBYSxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTTtBQUMxSyxlQUFlLGFBQWEsR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsYUFBYSxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLGFBQWEsR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDN0s7QUFDQSxJQUFJLElBQUk7QUFDUixTQUFTLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLFNBQVMsSUFBSSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFLE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwRjtBQUNBLElBQUksSUFBSTtBQUNSLFNBQVMsSUFB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RSxHQUFHQSxJQUFFLEdBQUdBLElBQUUsR0FBR0EsSUFBRSxDQUFDO0FBQ3RCO0FBQ0EsU0FBUyxVQUFVLENBQUMsQ0FBQyxFQUFFO0FBQ3ZCLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2pFLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFDLEVBQUUsSUFBSSxFQUFFLENBQUMsWUFBWUMsU0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHQyxnQkFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdDLEVBQUUsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkIsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkIsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkIsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM5RSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU07QUFDMUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDdEUsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsU0FBUyxH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TUFBTSxRQUFRLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUM5RCxNQUFNLFFBQVEsRUFBRSxTQUFTLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUM5RCxNQUFNLElBQUksQ0FBQyxPQUFPO0FBQ2xCLEtBQUssQ0FBQztBQUNOLEdBQUc7QUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ0o7QUFDQSxTQUFTLE9BQU8sQ0FBQyxDQUFDLEVBQUU7QUFDcEIsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUdGLElBQUUsQ0FBQztBQUNuRCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLE9BQU8sQ0FBQyxDQUFDLEVBQUU7QUFDcEIsRUFBRSxPQUFPLENBQUMsR0FBR0MsSUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUdELElBQUUsQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFDRDtBQUNBLFNBQVMsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUNyQixFQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxTQUFTLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ25GLENBQUM7QUFDRDtBQUNBLFNBQVMsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUNyQixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLE9BQU8sR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNoRixDQUFDO0FBQ0Q7QUFDQSxTQUFTLFVBQVUsQ0FBQyxDQUFDLEVBQUU7QUFDdkIsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0MsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEcsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUN6QyxFQUFFLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4RixDQUFDO0FBS0Q7QUFDTyxTQUFTTyxLQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFO0FBQ3RDLEVBQUUsT0FBTyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7QUFDbEcsQ0FBQztBQUNEO0FBQ08sU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFO0FBQ3RDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNkLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNkLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNkLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUMxQixDQUFDO0FBQ0Q7QUFDQSxTQUFTLE9BQU8sQ0FBQyxDQUFDLEVBQUU7QUFDcEIsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZELEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDeEIsRUFBRSxPQUFPLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkUsQ0FBQztBQUNEO0FBQ0FILFlBQU0s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QUMxQzVHLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRTtBQUN0QixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7QUFDN0IsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUIsSUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixHQUFHO0FBQ0gsRUFBRSxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLE9BQU8sQ0FBQyxDQUFDLEVBQUU7QUFDcEIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO0FBQzdCLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEUsSUFBSSxJQUFJ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SUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xELFNBQVMsTUFBTTtBQUNmLFVBQVUsSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3BFLFVBQVUsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqRixVQUFVLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3JELFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbkMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNoQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9DLFNBQVM7QUFDVCxPQUFPLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7QUFDdkMsUUFBUSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckUsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEIsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakcsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO0FBQ3BCLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDN0IsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ3pCLFFBQVEsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUIsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFCLEtBQUssQ0FBQztBQUNOLEdBQUc7QUFDSDtBQUNBLEVBQUUsU0FBUyxjQUFjLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO0FBQ25ELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNiLFFBQVEsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNO0FBQzVCLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNO0FBQ3pCLFFBQVEsQ0FBQztBQUNULFFBQVEsS0FBSyxDQUFDO0FBQ2Q7QUFDQSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNsQixNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwQyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtBQUNwQixRQUFRLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbEMsUUFBUSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzlELFFBQVEsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLE9BQU8sTUFBTSxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDOUMsUUFBUSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxJQUFJLE9BQU8sQ0FBQyxDQUFDO0FBQ2IsR0FBRztBQUNIO0FBQ0EsRUFBRSxTQUFTLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtBQUNyQyxJQUFJLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzND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T0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLHFCQUFxQixDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO0FBQzdDLEVBQUUsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRCxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUNEO0FBQ0EsU0FBUyxhQUFhLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7QUFDckMsRUFBRSxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hELEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtBQUNqQyxFQUFFLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEQsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDOUUsQ0FBQztBQUNEO0FBQ0EsU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7QUFDakMsRUFBRSxJQUFJLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEUsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDL0UsQ0FBQztBQUNEO0FBQ0EsU0FBUyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7QUFDcEMsRUFBRSxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hELEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxD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Q0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDQXQrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFzRCxNQUFBLENBQUEsT0FBQSxDQUFlLENBQUMsR0FBMkksQ0FBQyxDQUFDQSxpQkFBSSxFQUFFLFVBQVUsQ0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQywrRkFBK0YsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsbUNBQW1DLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBQyxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsWUFBWSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdHlILEVBQUEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBc0QsTUFBQSxDQUFBLE9BQUEsQ0FBZSxDQUFDLEdBQXdJLENBQUMsQ0FBQ0EsY0FBSSxFQUFFLFVBQVUsQ0FBYyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLDZEQUE2RCxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTs7Ozs7Ozs7QUNjemtDLElBQUksTUFBTSxHQUFHLFdBQVc7QUFDeEIsRUFBRSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDdkQsTUFBTSxDQUFDO0FBQ1AsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNkLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdmIsRUFBRSxJQUFJLE9BQU8sR0FBRztBQUNoQixJQUFJLEtBQUssRUFBRSxTQUFTLEtBQUssR0FBRztBQUM1QixLQUFLO0FBQ0wsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNWLElBQUksUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtBQUN6dkIsSUFBSSxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLDJCQUEyQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUU7QUFDNW1CLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFZLElBQUksYUFBYSxFQUFFLFNBQVMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNyRixNQUFNLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLE1BQU0sUUFBUSxPQUFPO0FBQ3JCLFFBQVEsS0FBSyxDQUFDO0FBQ2QsVUFBVSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDNUIsUUFBUSxLQUFLLENBQUM7QUFDZCxVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssQ0FBQztBQUNkLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEMsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDOUIsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxDQUFDLENBQUM7QUFDZixRQUFRLEtBQUssQ0FBQztBQUNkLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUIsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxDQUFDLENBQUM7QUFDZixRQUFRLEtBQUssQ0FBQztBQUNkLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDdEIsVUFBVSxNQUFNO0FBQ2hCLFFBQVEsS0FBSyxDQUFDO0FBQ2QsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEs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LENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbkYsVUFBVSxNQUFNO0FBQ2hCLE9BQU87QUFDUCxLQUFLO0FBQ0wsSUFBSSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVB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QUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7QUFDM0IsUUFBUSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN6RCxRQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLFFBQVEsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkUsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzlCLFVBQVUsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUM1QyxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNsQyxRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUc7QUFDdEIsVUFBVSxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO0FBQzVDLFVBQVUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztBQUN0QyxVQUFVLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVk7QUFDaEQsVUFBVSxXQUFXLEVBQUUsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFH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LEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO0FBQ3JtQyxNQUFNLFVBQVUsRUFBRSxFQUFFLHFCQUFxQixFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFB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
