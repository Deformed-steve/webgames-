! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      e = (new t.Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "c936bc2f-aef6-445f-b572-ffb9cea59d18", t._sentryDebugIdIdentifier = "sentry-dbid-c936bc2f-aef6-445f-b572-ffb9cea59d18")
  } catch (r) {}
}();
var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
  "_sentryBundlerPluginAppKey:@rbitrary-golden-pumpkin": !0
}), ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "9bb9609685d564aaf6e31c5e023cdfb752d47c81"
};
const e = function() {
    const t = "undefined" != typeof document && document.createElement("link").relList;
    return t && t.supports && t.supports("modulepreload") ? "modulepreload" : "preload"
  }(),
  r = {},
  s = function(t, s, i) {
    let n = Promise.resolve();
    if (s && s.length > 0) {
      document.getElementsByTagName("link");
      const t = document.querySelector("meta[property=csp-nonce]"),
        i = (null == t ? void 0 : t.nonce) || (null == t ? void 0 : t.getAttribute("nonce"));
      n = Promise.allSettled(s.map(t => {
        if ((t = function(t) {
            return "/" + t
          }(t)) in r) return;
        r[t] = !0;
        const s = t.endsWith(".css"),
          n = s ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${t}"]${n}`)) return;
        const o = document.createElement("link");
        return o.rel = s ? "stylesheet" : e, s || (o.as = "script"), o.crossOrigin = "", o.href = t, i && o.setAttribute("nonce", i), document.head.appendChild(o), s ? new Promise((e, r) => {
          o.addEventListener("load", e), o.addEventListener("error", () => r(new Error(`Unable to preload CSS for ${t}`)))
        }) : void 0
      }))
    }

    function o(t) {
      const e = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (e.payload = t, window.dispatchEvent(e), !e.defaultPrevented) throw t
    }
    return n.then(e => {
      for (const t of e || []) "rejected" === t.status && o(t.reason);
      return t().catch(o)
    })
  };
var i = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function n(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}

function o(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if ("function" == typeof e) {
    var r = function t() {
      return this instanceof t ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
    };
    r.prototype = e.prototype
  } else r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.keys(t).forEach(function(e) {
    var s = Object.getOwnPropertyDescriptor(t, e);
    Object.defineProperty(r, e, s.get ? s : {
      enumerable: !0,
      get: function() {
        return t[e]
      }
    })
  }), r
}
var a = (t => (t.Application = "application", t.WebGLPipes = "webgl-pipes", t.WebGLPipesAdaptor = "webgl-pipes-adaptor", t.WebGLSystem = "webgl-system", t.WebGPUPipes = "webgpu-pipes", t.WebGPUPipesAdaptor = "webgpu-pipes-adaptor", t.WebGPUSystem = "webgpu-system", t.CanvasSystem = "canvas-system", t.CanvasPipesAdaptor = "canvas-pipes-adaptor", t.CanvasPipes = "canvas-pipes", t.Asset = "asset", t.LoadParser = "load-parser", t.ResolveParser = "resolve-parser", t.CacheParser = "cache-parser", t.DetectionParser = "detection-parser", t.MaskEffect = "mask-effect", t.BlendMode = "blend-mode", t.TextureSource = "texture-source", t.Environment = "environment", t.ShapeBuilder = "shape-builder", t.Batcher = "batcher", t))(a || {});
const h = t => {
    if ("function" == typeof t || "object" == typeof t && t.extension) {
      if (!t.extension) throw new Error("Extension class must have an extension object");
      t = {
        ..."object" != typeof t.extension ? {
          type: t.extension
        } : t.extension,
        ref: t
      }
    }
    if ("object" != typeof t) throw new Error("Invalid extension type");
    return "string" == typeof(t = {
      ...t
    }).type && (t.type = [t.type]), t
  },
  l = (t, e) => h(t).priority ?? e,
  u = {
    _addHandlers: {},
    _removeHandlers: {},
    _queue: {},
    remove(...t) {
      return t.map(h).forEach(t => {
        t.type.forEach(e => {
          var r, s;
          return null == (s = (r = this._removeHandlers)[e]) ? void 0 : s.call(r, t)
        })
      }), this
    },
    add(...t) {
      return t.map(h).forEach(t => {
        t.type.forEach(e => {
          var r, s;
          const i = this._addHandlers,
            n = this._queue;
          i[e] ? null == (s = i[e]) || s.call(i, t) : (n[e] = n[e] || [], null == (r = n[e]) || r.push(t))
        })
      }), this
    },
    handle(t, e, r) {
      var s;
      const i = this._addHandlers,
        n = this._removeHandlers;
      if (i[t] || n[t]) throw new Error(`Extension type ${t} already has a handler`);
      i[t] = e, n[t] = r;
      const o = this._queue;
      return o[t] && (null == (s = o[t]) || s.forEach(t => e(t)), delete o[t]), this
    },
    handleByMap(t, e) {
      return this.handle(t, t => {
        t.name && (e[t.name] = t.ref)
      }, t => {
        t.name && delete e[t.name]
      })
    },
    handleByNamedList(t, e, r = -1) {
      return this.handle(t, t => {
        e.findIndex(e => e.name === t.name) >= 0 || (e.push({
          name: t.name,
          value: t.ref
        }), e.sort((t, e) => l(e.value, r) - l(t.value, r)))
      }, t => {
        const r = e.findIndex(e => e.name === t.name); - 1 !== r && e.splice(r, 1)
      })
    },
    handleByList(t, e, r = -1) {
      return this.handle(t, t => {
        e.includes(t.ref) || (e.push(t.ref), e.sort((t, e) => l(e, r) - l(t, r)))
      }, t => {
        const r = e.indexOf(t.ref); - 1 !== r && e.splice(r, 1)
      })
    },
    mixin(t, ...e) {
      for (const r of e) Object.defineProperties(t.prototype, Object.getOwnPropertyDescriptors(r))
    }
  },
  c = {
    extension: {
      type: a.Environment,
      name: "browser",
      priority: -1
    },
    test: () => !0,
    load: async () => {
      await s(() => import("./browserAll-DAO6TDNy.js"), [])
    }
  },
  d = {
    extension: {
      type: a.Environment,
      name: "webworker",
      priority: 0
    },
    test: () => "undefined" != typeof self && void 0 !== self.WorkerGlobalScope,
    load: async () => {
      await s(() => import("./webworkerAll--GYCcFUK.js"), [])
    }
  };
class p {
  constructor(t, e, r) {
    this._x = e || 0, this._y = r || 0, this._observer = t
  }
  clone(t) {
    return new p(t ?? this._observer, this._x, this._y)
  }
  set(t = 0, e = t) {
    return this._x === t && this._y === e || (this._x = t, this._y = e, this._observer._onUpdate(this)), this
  }
  copyFrom(t) {
    return this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this._observer._onUpdate(this)), this
  }
  copyTo(t) {
    return t.set(this._x, this._y), t
  }
  equals(t) {
    return t.x === this._x && t.y === this._y
  }
  toString() {
    return `[pixi.js/math:ObservablePoint x=${this._x} y=${this._y} scope=${this._observer}]`
  }
  get x() {
    return this._x
  }
  set x(t) {
    this._x !== t && (this._x = t, this._observer._onUpdate(this))
  }
  get y() {
    return this._y
  }
  set y(t) {
    this._y !== t && (this._y = t, this._observer._onUpdate(this))
  }
}
var f = {
  exports: {}
};
! function(t) {
  var e = Object.prototype.hasOwnProperty,
    r = "~";

  function s() {}

  function i(t, e, r) {
    this.fn = t, this.context = e, this.once = r || !1
  }

  function n(t, e, s, n, o) {
    if ("function" != typeof s) throw new TypeError("The listener must be a function");
    var a = new i(s, n || t, o),
      h = r ? r + e : e;
    return t._events[h] ? t._events[h].fn ? t._events[h] = [t._events[h], a] : t._events[h].push(a) : (t._events[h] = a, t._eventsCount++), t
  }

  function o(t, e) {
    0 === --t._eventsCount ? t._events = new s : delete t._events[e]
  }

  function a() {
    this._events = new s, this._eventsCount = 0
  }
  Object.create && (s.prototype = Object.create(null), (new s).__proto__ || (r = !1)), a.prototype.eventNames = function() {
    var t, s, i = [];
    if (0 === this._eventsCount) return i;
    for (s in t = this._events) e.call(t, s) && i.push(r ? s.slice(1) : s);
    return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
  }, a.prototype.listeners = function(t) {
    var e = r ? r + t : t,
      s = this._events[e];
    if (!s) return [];
    if (s.fn) return [s.fn];
    for (var i = 0, n = s.length, o = new Array(n); i < n; i++) o[i] = s[i].fn;
    return o
  }, a.prototype.listenerCount = function(t) {
    var e = r ? r + t : t,
      s = this._events[e];
    return s ? s.fn ? 1 : s.length : 0
  }, a.prototype.emit = function(t, e, s, i, n, o) {
    var a = r ? r + t : t;
    if (!this._events[a]) return !1;
    var h, l, u = this._events[a],
      c = arguments.length;
    if (u.fn) {
      switch (u.once && this.removeListener(t, u.fn, void 0, !0), c) {
        case 1:
          return u.fn.call(u.context), !0;
        case 2:
          return u.fn.call(u.context, e), !0;
        case 3:
          return u.fn.call(u.context, e, s), !0;
        case 4:
          return u.fn.call(u.context, e, s, i), !0;
        case 5:
          return u.fn.call(u.context, e, s, i, n), !0;
        case 6:
          return u.fn.call(u.context, e, s, i, n, o), !0
      }
      for (l = 1, h = new Array(c - 1); l < c; l++) h[l - 1] = arguments[l];
      u.fn.apply(u.context, h)
    } else {
      var d, p = u.length;
      for (l = 0; l < p; l++) switch (u[l].once && this.removeListener(t, u[l].fn, void 0, !0), c) {
        case 1:
          u[l].fn.call(u[l].context);
          break;
        case 2:
          u[l].fn.call(u[l].context, e);
          break;
        case 3:
          u[l].fn.call(u[l].context, e, s);
          break;
        case 4:
          u[l].fn.call(u[l].context, e, s, i);
          break;
        default:
          if (!h)
            for (d = 1, h = new Array(c - 1); d < c; d++) h[d - 1] = arguments[d];
          u[l].fn.apply(u[l].context, h)
      }
    }
    return !0
  }, a.prototype.on = function(t, e, r) {
    return n(this, t, e, r, !1)
  }, a.prototype.once = function(t, e, r) {
    return n(this, t, e, r, !0)
  }, a.prototype.removeListener = function(t, e, s, i) {
    var n = r ? r + t : t;
    if (!this._events[n]) return this;
    if (!e) return o(this, n), this;
    var a = this._events[n];
    if (a.fn) a.fn !== e || i && !a.once || s && a.context !== s || o(this, n);
    else {
      for (var h = 0, l = [], u = a.length; h < u; h++)(a[h].fn !== e || i && !a[h].once || s && a[h].context !== s) && l.push(a[h]);
      l.length ? this._events[n] = 1 === l.length ? l[0] : l : o(this, n)
    }
    return this
  }, a.prototype.removeAllListeners = function(t) {
    var e;
    return t ? (e = r ? r + t : t, this._events[e] && o(this, e)) : (this._events = new s, this._eventsCount = 0), this
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = r, a.EventEmitter = a, t.exports = a
}(f);
const m = n(f.exports),
  g = 2 * Math.PI,
  _ = 180 / Math.PI,
  x = Math.PI / 180;
class y {
  constructor(t = 0, e = 0) {
    this.x = 0, this.y = 0, this.x = t, this.y = e
  }
  clone() {
    return new y(this.x, this.y)
  }
  copyFrom(t) {
    return this.set(t.x, t.y), this
  }
  copyTo(t) {
    return t.set(this.x, this.y), t
  }
  equals(t) {
    return t.x === this.x && t.y === this.y
  }
  set(t = 0, e = t) {
    return this.x = t, this.y = e, this
  }
  toString() {
    return `[pixi.js/math:Point x=${this.x} y=${this.y}]`
  }
  static get shared() {
    return b.x = 0, b.y = 0, b
  }
}
const b = new y;
class v {
  constructor(t = 1, e = 0, r = 0, s = 1, i = 0, n = 0) {
    this.array = null, this.a = t, this.b = e, this.c = r, this.d = s, this.tx = i, this.ty = n
  }
  fromArray(t) {
    this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
  }
  set(t, e, r, s, i, n) {
    return this.a = t, this.b = e, this.c = r, this.d = s, this.tx = i, this.ty = n, this
  }
  toArray(t, e) {
    this.array || (this.array = new Float32Array(9));
    const r = e || this.array;
    return t ? (r[0] = this.a, r[1] = this.b, r[2] = 0, r[3] = this.c, r[4] = this.d, r[5] = 0, r[6] = this.tx, r[7] = this.ty, r[8] = 1) : (r[0] = this.a, r[1] = this.c, r[2] = this.tx, r[3] = this.b, r[4] = this.d, r[5] = this.ty, r[6] = 0, r[7] = 0, r[8] = 1), r
  }
  apply(t, e) {
    e = e || new y;
    const r = t.x,
      s = t.y;
    return e.x = this.a * r + this.c * s + this.tx, e.y = this.b * r + this.d * s + this.ty, e
  }
  applyInverse(t, e) {
    e = e || new y;
    const r = this.a,
      s = this.b,
      i = this.c,
      n = this.d,
      o = this.tx,
      a = this.ty,
      h = 1 / (r * n + i * -s),
      l = t.x,
      u = t.y;
    return e.x = n * h * l + -i * h * u + (a * i - o * n) * h, e.y = r * h * u + -s * h * l + (-a * r + o * s) * h, e
  }
  translate(t, e) {
    return this.tx += t, this.ty += e, this
  }
  scale(t, e) {
    return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
  }
  rotate(t) {
    const e = Math.cos(t),
      r = Math.sin(t),
      s = this.a,
      i = this.c,
      n = this.tx;
    return this.a = s * e - this.b * r, this.b = s * r + this.b * e, this.c = i * e - this.d * r, this.d = i * r + this.d * e, this.tx = n * e - this.ty * r, this.ty = n * r + this.ty * e, this
  }
  append(t) {
    const e = this.a,
      r = this.b,
      s = this.c,
      i = this.d;
    return this.a = t.a * e + t.b * s, this.b = t.a * r + t.b * i, this.c = t.c * e + t.d * s, this.d = t.c * r + t.d * i, this.tx = t.tx * e + t.ty * s + this.tx, this.ty = t.tx * r + t.ty * i + this.ty, this
  }
  appendFrom(t, e) {
    const r = t.a,
      s = t.b,
      i = t.c,
      n = t.d,
      o = t.tx,
      a = t.ty,
      h = e.a,
      l = e.b,
      u = e.c,
      c = e.d;
    return this.a = r * h + s * u, this.b = r * l + s * c, this.c = i * h + n * u, this.d = i * l + n * c, this.tx = o * h + a * u + e.tx, this.ty = o * l + a * c + e.ty, this
  }
  setTransform(t, e, r, s, i, n, o, a, h) {
    return this.a = Math.cos(o + h) * i, this.b = Math.sin(o + h) * i, this.c = -Math.sin(o - a) * n, this.d = Math.cos(o - a) * n, this.tx = t - (r * this.a + s * this.c), this.ty = e - (r * this.b + s * this.d), this
  }
  prepend(t) {
    const e = this.tx;
    if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
      const e = this.a,
        r = this.c;
      this.a = e * t.a + this.b * t.c, this.b = e * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d
    }
    return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
  }
  decompose(t) {
    const e = this.a,
      r = this.b,
      s = this.c,
      i = this.d,
      n = t.pivot,
      o = -Math.atan2(-s, i),
      a = Math.atan2(r, e),
      h = Math.abs(o + a);
    return h < 1e-5 || Math.abs(g - h) < 1e-5 ? (t.rotation = a, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = o, t.skew.y = a), t.scale.x = Math.sqrt(e * e + r * r), t.scale.y = Math.sqrt(s * s + i * i), t.position.x = this.tx + (n.x * e + n.y * s), t.position.y = this.ty + (n.x * r + n.y * i), t
  }
  invert() {
    const t = this.a,
      e = this.b,
      r = this.c,
      s = this.d,
      i = this.tx,
      n = t * s - e * r;
    return this.a = s / n, this.b = -e / n, this.c = -r / n, this.d = t / n, this.tx = (r * this.ty - s * i) / n, this.ty = -(t * this.ty - e * i) / n, this
  }
  isIdentity() {
    return 1 === this.a && 0 === this.b && 0 === this.c && 1 === this.d && 0 === this.tx && 0 === this.ty
  }
  identity() {
    return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
  }
  clone() {
    const t = new v;
    return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
  }
  copyTo(t) {
    return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
  }
  copyFrom(t) {
    return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this
  }
  equals(t) {
    return t.a === this.a && t.b === this.b && t.c === this.c && t.d === this.d && t.tx === this.tx && t.ty === this.ty
  }
  toString() {
    return `[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`
  }
  static get IDENTITY() {
    return S.identity()
  }
  static get shared() {
    return T.identity()
  }
}
const T = new v,
  S = new v,
  w = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
  E = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
  C = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
  P = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
  M = [],
  A = [],
  R = Math.sign;
! function() {
  for (let t = 0; t < 16; t++) {
    const e = [];
    M.push(e);
    for (let r = 0; r < 16; r++) {
      const s = R(w[t] * w[r] + C[t] * E[r]),
        i = R(E[t] * w[r] + P[t] * E[r]),
        n = R(w[t] * C[r] + C[t] * P[r]),
        o = R(E[t] * C[r] + P[t] * P[r]);
      for (let t = 0; t < 16; t++)
        if (w[t] === s && E[t] === i && C[t] === n && P[t] === o) {
          e.push(t);
          break
        }
    }
  }
  for (let t = 0; t < 16; t++) {
    const e = new v;
    e.set(w[t], E[t], C[t], P[t], 0, 0), A.push(e)
  }
}();
const B = {
    E: 0,
    SE: 1,
    S: 2,
    SW: 3,
    W: 4,
    NW: 5,
    N: 6,
    NE: 7,
    MIRROR_VERTICAL: 8,
    MAIN_DIAGONAL: 10,
    MIRROR_HORIZONTAL: 12,
    REVERSE_DIAGONAL: 14,
    uX: t => w[t],
    uY: t => E[t],
    vX: t => C[t],
    vY: t => P[t],
    inv: t => 8 & t ? 15 & t : 7 & -t,
    add: (t, e) => M[t][e],
    sub: (t, e) => M[t][B.inv(e)],
    rotate180: t => 4 ^ t,
    isVertical: t => 2 == (3 & t),
    byDirection: (t, e) => 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? B.S : B.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? B.E : B.W : e > 0 ? t > 0 ? B.SE : B.SW : t > 0 ? B.NE : B.NW,
    matrixAppendRotationInv: (t, e, r = 0, s = 0) => {
      const i = A[B.inv(e)];
      i.tx = r, i.ty = s, t.append(i)
    }
  },
  k = [new y, new y, new y, new y];
class G {
  constructor(t = 0, e = 0, r = 0, s = 0) {
    this.type = "rectangle", this.x = Number(t), this.y = Number(e), this.width = Number(r), this.height = Number(s)
  }
  get left() {
    return this.x
  }
  get right() {
    return this.x + this.width
  }
  get top() {
    return this.y
  }
  get bottom() {
    return this.y + this.height
  }
  isEmpty() {
    return this.left === this.right || this.top === this.bottom
  }
  static get EMPTY() {
    return new G(0, 0, 0, 0)
  }
  clone() {
    return new G(this.x, this.y, this.width, this.height)
  }
  copyFromBounds(t) {
    return this.x = t.minX, this.y = t.minY, this.width = t.maxX - t.minX, this.height = t.maxY - t.minY, this
  }
  copyFrom(t) {
    return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
  }
  copyTo(t) {
    return t.copyFrom(this), t
  }
  contains(t, e) {
    return !(this.width <= 0 || this.height <= 0) && t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height
  }
  strokeContains(t, e, r, s = .5) {
    const {
      width: i,
      height: n
    } = this;
    if (i <= 0 || n <= 0) return !1;
    const o = this.x,
      a = this.y,
      h = r * (1 - s),
      l = r - h;
    return t >= o - h && t <= o + i + h && e >= a - h && e <= a + n + h && !(t > o + l && t < o + i - l && e > a + l && e < a + n - l)
  }
  intersects(t, e) {
    if (!e) {
      const e = this.x < t.x ? t.x : this.x;
      if ((this.right > t.right ? t.right : this.right) <= e) return !1;
      const r = this.y < t.y ? t.y : this.y;
      return (this.bottom > t.bottom ? t.bottom : this.bottom) > r
    }
    const r = this.left,
      s = this.right,
      i = this.top,
      n = this.bottom;
    if (s <= r || n <= i) return !1;
    const o = k[0].set(t.left, t.top),
      a = k[1].set(t.left, t.bottom),
      h = k[2].set(t.right, t.top),
      l = k[3].set(t.right, t.bottom);
    if (h.x <= o.x || a.y <= o.y) return !1;
    const u = Math.sign(e.a * e.d - e.b * e.c);
    if (0 === u) return !1;
    if (e.apply(o, o), e.apply(a, a), e.apply(h, h), e.apply(l, l), Math.max(o.x, a.x, h.x, l.x) <= r || Math.min(o.x, a.x, h.x, l.x) >= s || Math.max(o.y, a.y, h.y, l.y) <= i || Math.min(o.y, a.y, h.y, l.y) >= n) return !1;
    const c = u * (a.y - o.y),
      d = u * (o.x - a.x),
      p = c * r + d * i,
      f = c * s + d * i,
      m = c * r + d * n,
      g = c * s + d * n;
    if (Math.max(p, f, m, g) <= c * o.x + d * o.y || Math.min(p, f, m, g) >= c * l.x + d * l.y) return !1;
    const _ = u * (o.y - h.y),
      x = u * (h.x - o.x),
      y = _ * r + x * i,
      b = _ * s + x * i,
      v = _ * r + x * n,
      T = _ * s + x * n;
    return !(Math.max(y, b, v, T) <= _ * o.x + x * o.y || Math.min(y, b, v, T) >= _ * l.x + x * l.y)
  }
  pad(t = 0, e = t) {
    return this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e, this
  }
  fit(t) {
    const e = Math.max(this.x, t.x),
      r = Math.min(this.x + this.width, t.x + t.width),
      s = Math.max(this.y, t.y),
      i = Math.min(this.y + this.height, t.y + t.height);
    return this.x = e, this.width = Math.max(r - e, 0), this.y = s, this.height = Math.max(i - s, 0), this
  }
  ceil(t = 1, e = .001) {
    const r = Math.ceil((this.x + this.width - e) * t) / t,
      s = Math.ceil((this.y + this.height - e) * t) / t;
    return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = r - this.x, this.height = s - this.y, this
  }
  enlarge(t) {
    const e = Math.min(this.x, t.x),
      r = Math.max(this.x + this.width, t.x + t.width),
      s = Math.min(this.y, t.y),
      i = Math.max(this.y + this.height, t.y + t.height);
    return this.x = e, this.width = r - e, this.y = s, this.height = i - s, this
  }
  getBounds(t) {
    return t || (t = new G), t.copyFrom(this), t
  }
  containsRect(t) {
    if (this.width <= 0 || this.height <= 0) return !1;
    const e = t.x,
      r = t.y,
      s = t.x + t.width,
      i = t.y + t.height;
    return e >= this.x && e < this.x + this.width && r >= this.y && r < this.y + this.height && s >= this.x && s < this.x + this.width && i >= this.y && i < this.y + this.height
  }
  set(t, e, r, s) {
    return this.x = t, this.y = e, this.width = r, this.height = s, this
  }
  toString() {
    return `[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`
  }
}
const I = {
  default: -1
};

function F(t = "default") {
  return void 0 === I[t] && (I[t] = -1), ++I[t]
}
const U = {},
  O = "8.0.0";

function D(t, e, r = 3) {
  if (U[e]) return;
  let s = (new Error).stack;
  void 0 === s ? console.warn("PixiJS Deprecation Warning: ", `${e}\nDeprecated since v${t}`) : (s = s.split("\n").splice(r).join("\n"), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", `${e}\nDeprecated since v${t}`), console.warn(s), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", `${e}\nDeprecated since v${t}`), console.warn(s))), U[e] = !0
}
const L = () => {};

function N(t) {
  return t += 0 === t ? 1 : 0, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, 1 + (t |= t >>> 16)
}

function z(t) {
  return !(t & t - 1 || !t)
}

function H(t) {
  const e = {};
  for (const r in t) void 0 !== t[r] && (e[r] = t[r]);
  return e
}
const W = Object.create(null),
  V = class t extends m {
    constructor(e = {}) {
      super(), this._resourceType = "textureSampler", this._touched = 0, this._maxAnisotropy = 1, this.destroyed = !1, e = {
        ...t.defaultOptions,
        ...e
      }, this.addressMode = e.addressMode, this.addressModeU = e.addressModeU ?? this.addressModeU, this.addressModeV = e.addressModeV ?? this.addressModeV, this.addressModeW = e.addressModeW ?? this.addressModeW, this.scaleMode = e.scaleMode, this.magFilter = e.magFilter ?? this.magFilter, this.minFilter = e.minFilter ?? this.minFilter, this.mipmapFilter = e.mipmapFilter ?? this.mipmapFilter, this.lodMinClamp = e.lodMinClamp, this.lodMaxClamp = e.lodMaxClamp, this.compare = e.compare, this.maxAnisotropy = e.maxAnisotropy ?? 1
    }
    set addressMode(t) {
      this.addressModeU = t, this.addressModeV = t, this.addressModeW = t
    }
    get addressMode() {
      return this.addressModeU
    }
    set wrapMode(t) {
      D(O, "TextureStyle.wrapMode is now TextureStyle.addressMode"), this.addressMode = t
    }
    get wrapMode() {
      return this.addressMode
    }
    set scaleMode(t) {
      this.magFilter = t, this.minFilter = t, this.mipmapFilter = t
    }
    get scaleMode() {
      return this.magFilter
    }
    set maxAnisotropy(t) {
      this._maxAnisotropy = Math.min(t, 16), this._maxAnisotropy > 1 && (this.scaleMode = "linear")
    }
    get maxAnisotropy() {
      return this._maxAnisotropy
    }
    get _resourceId() {
      return this._sharedResourceId || this._generateResourceId()
    }
    update() {
      this.emit("change", this), this._sharedResourceId = null
    }
    _generateResourceId() {
      const t = `${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;
      return this._sharedResourceId = function(t) {
        const e = W[t];
        return void 0 === e && (W[t] = F("resource")), e
      }(t), this._resourceId
    }
    destroy() {
      this.destroyed = !0, this.emit("destroy", this), this.emit("change", this), this.removeAllListeners()
    }
  };
V.defaultOptions = {
  addressMode: "clamp-to-edge",
  scaleMode: "linear"
};
let X = V;
const Y = class t extends m {
  constructor(e = {}) {
    super(), this.options = e, this.uid = F("textureSource"), this._resourceType = "textureSource", this._resourceId = F("resource"), this.uploadMethodId = "unknown", this._resolution = 1, this.pixelWidth = 1, this.pixelHeight = 1, this.width = 1, this.height = 1, this.sampleCount = 1, this.mipLevelCount = 1, this.autoGenerateMipmaps = !1, this.format = "rgba8unorm", this.dimension = "2d", this.antialias = !1, this._touched = 0, this._batchTick = -1, this._textureBindLocation = -1, e = {
      ...t.defaultOptions,
      ...e
    }, this.label = e.label ?? "", this.resource = e.resource, this.autoGarbageCollect = e.autoGarbageCollect, this._resolution = e.resolution, e.width ? this.pixelWidth = e.width * this._resolution : this.pixelWidth = this.resource ? this.resourceWidth ?? 1 : 1, e.height ? this.pixelHeight = e.height * this._resolution : this.pixelHeight = this.resource ? this.resourceHeight ?? 1 : 1, this.width = this.pixelWidth / this._resolution, this.height = this.pixelHeight / this._resolution, this.format = e.format, this.dimension = e.dimensions, this.mipLevelCount = e.mipLevelCount, this.autoGenerateMipmaps = e.autoGenerateMipmaps, this.sampleCount = e.sampleCount, this.antialias = e.antialias, this.alphaMode = e.alphaMode, this.style = new X(H(e)), this.destroyed = !1, this._refreshPOT()
  }
  get source() {
    return this
  }
  get style() {
    return this._style
  }
  set style(t) {
    var e, r;
    this.style !== t && (null == (e = this._style) || e.off("change", this._onStyleChange, this), this._style = t, null == (r = this._style) || r.on("change", this._onStyleChange, this), this._onStyleChange())
  }
  get addressMode() {
    return this._style.addressMode
  }
  set addressMode(t) {
    this._style.addressMode = t
  }
  get repeatMode() {
    return this._style.addressMode
  }
  set repeatMode(t) {
    this._style.addressMode = t
  }
  get magFilter() {
    return this._style.magFilter
  }
  set magFilter(t) {
    this._style.magFilter = t
  }
  get minFilter() {
    return this._style.minFilter
  }
  set minFilter(t) {
    this._style.minFilter = t
  }
  get mipmapFilter() {
    return this._style.mipmapFilter
  }
  set mipmapFilter(t) {
    this._style.mipmapFilter = t
  }
  get lodMinClamp() {
    return this._style.lodMinClamp
  }
  set lodMinClamp(t) {
    this._style.lodMinClamp = t
  }
  get lodMaxClamp() {
    return this._style.lodMaxClamp
  }
  set lodMaxClamp(t) {
    this._style.lodMaxClamp = t
  }
  _onStyleChange() {
    this.emit("styleChange", this)
  }
  update() {
    if (this.resource) {
      const t = this._resolution;
      if (this.resize(this.resourceWidth / t, this.resourceHeight / t)) return
    }
    this.emit("update", this)
  }
  destroy() {
    this.destroyed = !0, this.emit("destroy", this), this.emit("change", this), this._style && (this._style.destroy(), this._style = null), this.uploadMethodId = null, this.resource = null, this.removeAllListeners()
  }
  unload() {
    this._resourceId = F("resource"), this.emit("change", this), this.emit("unload", this)
  }
  get resourceWidth() {
    const {
      resource: t
    } = this;
    return t.naturalWidth || t.videoWidth || t.displayWidth || t.width
  }
  get resourceHeight() {
    const {
      resource: t
    } = this;
    return t.naturalHeight || t.videoHeight || t.displayHeight || t.height
  }
  get resolution() {
    return this._resolution
  }
  set resolution(t) {
    this._resolution !== t && (this._resolution = t, this.width = this.pixelWidth / t, this.height = this.pixelHeight / t)
  }
  resize(t, e, r) {
    r || (r = this._resolution), t || (t = this.width), e || (e = this.height);
    const s = Math.round(t * r),
      i = Math.round(e * r);
    return this.width = s / r, this.height = i / r, this._resolution = r, (this.pixelWidth !== s || this.pixelHeight !== i) && (this._refreshPOT(), this.pixelWidth = s, this.pixelHeight = i, this.emit("resize", this), this._resourceId = F("resource"), this.emit("change", this), !0)
  }
  updateMipmaps() {
    this.autoGenerateMipmaps && this.mipLevelCount > 1 && this.emit("updateMipmaps", this)
  }
  set wrapMode(t) {
    this._style.wrapMode = t
  }
  get wrapMode() {
    return this._style.wrapMode
  }
  set scaleMode(t) {
    this._style.scaleMode = t
  }
  get scaleMode() {
    return this._style.scaleMode
  }
  _refreshPOT() {
    this.isPowerOfTwo = z(this.pixelWidth) && z(this.pixelHeight)
  }
  static test(t) {
    throw new Error("Unimplemented")
  }
};
Y.defaultOptions = {
  resolution: 1,
  format: "bgra8unorm",
  alphaMode: "premultiply-alpha-on-upload",
  dimensions: "2d",
  mipLevelCount: 1,
  autoGenerateMipmaps: !1,
  sampleCount: 1,
  antialias: !1,
  autoGarbageCollect: !1
};
let $ = Y;
class j extends $ {
  constructor(t) {
    const e = t.resource || new Float32Array(t.width * t.height * 4);
    let r = t.format;
    r || (r = e instanceof Float32Array ? "rgba32float" : e instanceof Int32Array || e instanceof Uint32Array ? "rgba32uint" : e instanceof Int16Array || e instanceof Uint16Array ? "rgba16uint" : (Int8Array, "bgra8unorm")), super({
      ...t,
      resource: e,
      format: r
    }), this.uploadMethodId = "buffer"
  }
  static test(t) {
    return t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array
  }
}
j.extension = a.TextureSource;
const q = new v;
class K {
  constructor(t, e) {
    this.mapCoord = new v, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, this.clampMargin = void 0 === e ? t.width < 10 ? 0 : .5 : e, this.isSimple = !1, this.texture = t
  }
  get texture() {
    return this._texture
  }
  set texture(t) {
    var e;
    this.texture !== t && (null == (e = this._texture) || e.removeListener("update", this.update, this), this._texture = t, this._texture.addListener("update", this.update, this), this.update())
  }
  multiplyUvs(t, e) {
    void 0 === e && (e = t);
    const r = this.mapCoord;
    for (let s = 0; s < t.length; s += 2) {
      const i = t[s],
        n = t[s + 1];
      e[s] = i * r.a + n * r.c + r.tx, e[s + 1] = i * r.b + n * r.d + r.ty
    }
    return e
  }
  update() {
    const t = this._texture;
    this._updateID++;
    const e = t.uvs;
    this.mapCoord.set(e.x1 - e.x0, e.y1 - e.y0, e.x3 - e.x0, e.y3 - e.y0, e.x0, e.y0);
    const r = t.orig,
      s = t.trim;
    s && (q.set(r.width / s.width, 0, 0, r.height / s.height, -s.x / s.width, -s.y / s.height), this.mapCoord.append(q));
    const i = t.source,
      n = this.uClampFrame,
      o = this.clampMargin / i._resolution,
      a = this.clampOffset / i._resolution;
    return n[0] = (t.frame.x + o + a) / i.width, n[1] = (t.frame.y + o + a) / i.height, n[2] = (t.frame.x + t.frame.width - o + a) / i.width, n[3] = (t.frame.y + t.frame.height - o + a) / i.height, this.uClampOffset[0] = this.clampOffset / i.pixelWidth, this.uClampOffset[1] = this.clampOffset / i.pixelHeight, this.isSimple = t.frame.width === i.width && t.frame.height === i.height && 0 === t.rotate, !0
  }
}
class Z extends m {
  constructor({
    source: t,
    label: e,
    frame: r,
    orig: s,
    trim: i,
    defaultAnchor: n,
    defaultBorders: o,
    rotate: a,
    dynamic: h
  } = {}) {
    if (super(), this.uid = F("texture"), this.uvs = {
        x0: 0,
        y0: 0,
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        x3: 0,
        y3: 0
      }, this.frame = new G, this.noFrame = !1, this.dynamic = !1, this.isTexture = !0, this.label = e, this.source = (null == t ? void 0 : t.source) ?? new $, this.noFrame = !r, r) this.frame.copyFrom(r);
    else {
      const {
        width: t,
        height: e
      } = this._source;
      this.frame.width = t, this.frame.height = e
    }
    this.orig = s || this.frame, this.trim = i, this.rotate = a ?? 0, this.defaultAnchor = n, this.defaultBorders = o, this.destroyed = !1, this.dynamic = h || !1, this.updateUvs()
  }
  set source(t) {
    this._source && this._source.off("resize", this.update, this), this._source = t, t.on("resize", this.update, this), this.emit("update", this)
  }
  get source() {
    return this._source
  }
  get textureMatrix() {
    return this._textureMatrix || (this._textureMatrix = new K(this)), this._textureMatrix
  }
  get width() {
    return this.orig.width
  }
  get height() {
    return this.orig.height
  }
  updateUvs() {
    const {
      uvs: t,
      frame: e
    } = this, {
      width: r,
      height: s
    } = this._source, i = e.x / r, n = e.y / s, o = e.width / r, a = e.height / s;
    let h = this.rotate;
    if (h) {
      const e = o / 2,
        r = a / 2,
        s = i + e,
        l = n + r;
      h = B.add(h, B.NW), t.x0 = s + e * B.uX(h), t.y0 = l + r * B.uY(h), h = B.add(h, 2), t.x1 = s + e * B.uX(h), t.y1 = l + r * B.uY(h), h = B.add(h, 2), t.x2 = s + e * B.uX(h), t.y2 = l + r * B.uY(h), h = B.add(h, 2), t.x3 = s + e * B.uX(h), t.y3 = l + r * B.uY(h)
    } else t.x0 = i, t.y0 = n, t.x1 = i + o, t.y1 = n, t.x2 = i + o, t.y2 = n + a, t.x3 = i, t.y3 = n + a
  }
  destroy(t = !1) {
    this._source && t && (this._source.destroy(), this._source = null), this._textureMatrix = null, this.destroyed = !0, this.emit("destroy", this), this.removeAllListeners()
  }
  update() {
    this.noFrame && (this.frame.width = this._source.width, this.frame.height = this._source.height), this.updateUvs(), this.emit("update", this)
  }
  get baseTexture() {
    return D(O, "Texture.baseTexture is now Texture.source"), this._source
  }
}

function Q(t, e, r) {
  const {
    width: s,
    height: i
  } = r.orig, n = r.trim;
  if (n) {
    const r = n.width,
      o = n.height;
    t.minX = n.x - e._x * s, t.maxX = t.minX + r, t.minY = n.y - e._y * i, t.maxY = t.minY + o
  } else t.minX = -e._x * s, t.maxX = t.minX + s, t.minY = -e._y * i, t.maxY = t.minY + i
}
Z.EMPTY = new Z({
  label: "EMPTY",
  source: new $({
    label: "EMPTY"
  })
}), Z.EMPTY.destroy = L, Z.WHITE = new Z({
  source: new j({
    resource: new Uint8Array([255, 255, 255, 255]),
    width: 1,
    height: 1,
    alphaMode: "premultiply-alpha-on-upload",
    label: "WHITE"
  }),
  label: "WHITE"
}), Z.WHITE.destroy = L;
const J = new v;
class tt {
  constructor(t = 1 / 0, e = 1 / 0, r = -1 / 0, s = -1 / 0) {
    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.matrix = J, this.minX = t, this.minY = e, this.maxX = r, this.maxY = s
  }
  isEmpty() {
    return this.minX > this.maxX || this.minY > this.maxY
  }
  get rectangle() {
    this._rectangle || (this._rectangle = new G);
    const t = this._rectangle;
    return this.minX > this.maxX || this.minY > this.maxY ? (t.x = 0, t.y = 0, t.width = 0, t.height = 0) : t.copyFromBounds(this), t
  }
  clear() {
    return this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.matrix = J, this
  }
  set(t, e, r, s) {
    this.minX = t, this.minY = e, this.maxX = r, this.maxY = s
  }
  addFrame(t, e, r, s, i) {
    i || (i = this.matrix);
    const n = i.a,
      o = i.b,
      a = i.c,
      h = i.d,
      l = i.tx,
      u = i.ty;
    let c = this.minX,
      d = this.minY,
      p = this.maxX,
      f = this.maxY,
      m = n * t + a * e + l,
      g = o * t + h * e + u;
    m < c && (c = m), g < d && (d = g), m > p && (p = m), g > f && (f = g), m = n * r + a * e + l, g = o * r + h * e + u, m < c && (c = m), g < d && (d = g), m > p && (p = m), g > f && (f = g), m = n * t + a * s + l, g = o * t + h * s + u, m < c && (c = m), g < d && (d = g), m > p && (p = m), g > f && (f = g), m = n * r + a * s + l, g = o * r + h * s + u, m < c && (c = m), g < d && (d = g), m > p && (p = m), g > f && (f = g), this.minX = c, this.minY = d, this.maxX = p, this.maxY = f
  }
  addRect(t, e) {
    this.addFrame(t.x, t.y, t.x + t.width, t.y + t.height, e)
  }
  addBounds(t, e) {
    this.addFrame(t.minX, t.minY, t.maxX, t.maxY, e)
  }
  addBoundsMask(t) {
    this.minX = this.minX > t.minX ? this.minX : t.minX, this.minY = this.minY > t.minY ? this.minY : t.minY, this.maxX = this.maxX < t.maxX ? this.maxX : t.maxX, this.maxY = this.maxY < t.maxY ? this.maxY : t.maxY
  }
  applyMatrix(t) {
    const e = this.minX,
      r = this.minY,
      s = this.maxX,
      i = this.maxY,
      {
        a: n,
        b: o,
        c: a,
        d: h,
        tx: l,
        ty: u
      } = t;
    let c = n * e + a * r + l,
      d = o * e + h * r + u;
    this.minX = c, this.minY = d, this.maxX = c, this.maxY = d, c = n * s + a * r + l, d = o * s + h * r + u, this.minX = c < this.minX ? c : this.minX, this.minY = d < this.minY ? d : this.minY, this.maxX = c > this.maxX ? c : this.maxX, this.maxY = d > this.maxY ? d : this.maxY, c = n * e + a * i + l, d = o * e + h * i + u, this.minX = c < this.minX ? c : this.minX, this.minY = d < this.minY ? d : this.minY, this.maxX = c > this.maxX ? c : this.maxX, this.maxY = d > this.maxY ? d : this.maxY, c = n * s + a * i + l, d = o * s + h * i + u, this.minX = c < this.minX ? c : this.minX, this.minY = d < this.minY ? d : this.minY, this.maxX = c > this.maxX ? c : this.maxX, this.maxY = d > this.maxY ? d : this.maxY
  }
  fit(t) {
    return this.minX < t.left && (this.minX = t.left), this.maxX > t.right && (this.maxX = t.right), this.minY < t.top && (this.minY = t.top), this.maxY > t.bottom && (this.maxY = t.bottom), this
  }
  fitBounds(t, e, r, s) {
    return this.minX < t && (this.minX = t), this.maxX > e && (this.maxX = e), this.minY < r && (this.minY = r), this.maxY > s && (this.maxY = s), this
  }
  pad(t, e = t) {
    return this.minX -= t, this.maxX += t, this.minY -= e, this.maxY += e, this
  }
  ceil() {
    return this.minX = Math.floor(this.minX), this.minY = Math.floor(this.minY), this.maxX = Math.ceil(this.maxX), this.maxY = Math.ceil(this.maxY), this
  }
  clone() {
    return new tt(this.minX, this.minY, this.maxX, this.maxY)
  }
  scale(t, e = t) {
    return this.minX *= t, this.minY *= e, this.maxX *= t, this.maxY *= e, this
  }
  get x() {
    return this.minX
  }
  set x(t) {
    const e = this.maxX - this.minX;
    this.minX = t, this.maxX = t + e
  }
  get y() {
    return this.minY
  }
  set y(t) {
    const e = this.maxY - this.minY;
    this.minY = t, this.maxY = t + e
  }
  get width() {
    return this.maxX - this.minX
  }
  set width(t) {
    this.maxX = this.minX + t
  }
  get height() {
    return this.maxY - this.minY
  }
  set height(t) {
    this.maxY = this.minY + t
  }
  get left() {
    return this.minX
  }
  get right() {
    return this.maxX
  }
  get top() {
    return this.minY
  }
  get bottom() {
    return this.maxY
  }
  get isPositive() {
    return this.maxX - this.minX > 0 && this.maxY - this.minY > 0
  }
  get isValid() {
    return this.minX + this.minY !== 1 / 0
  }
  addVertexData(t, e, r, s) {
    let i = this.minX,
      n = this.minY,
      o = this.maxX,
      a = this.maxY;
    s || (s = this.matrix);
    const h = s.a,
      l = s.b,
      u = s.c,
      c = s.d,
      d = s.tx,
      p = s.ty;
    for (let f = e; f < r; f += 2) {
      const e = t[f],
        r = t[f + 1],
        s = h * e + u * r + d,
        m = l * e + c * r + p;
      i = s < i ? s : i, n = m < n ? m : n, o = s > o ? s : o, a = m > a ? m : a
    }
    this.minX = i, this.minY = n, this.maxX = o, this.maxY = a
  }
  containsPoint(t, e) {
    return this.minX <= t && this.minY <= e && this.maxX >= t && this.maxY >= e
  }
  toString() {
    return `[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`
  }
  copyFrom(t) {
    return this.minX = t.minX, this.minY = t.minY, this.maxX = t.maxX, this.maxY = t.maxY, this
  }
}
var et = {
    grad: .9,
    turn: 360,
    rad: 360 / (2 * Math.PI)
  },
  rt = function(t) {
    return "string" == typeof t ? t.length > 0 : "number" == typeof t
  },
  st = function(t, e, r) {
    return void 0 === e && (e = 0), void 0 === r && (r = Math.pow(10, e)), Math.round(r * t) / r + 0
  },
  it = function(t, e, r) {
    return void 0 === e && (e = 0), void 0 === r && (r = 1), t > r ? r : t > e ? t : e
  },
  nt = function(t) {
    return (t = isFinite(t) ? t % 360 : 0) > 0 ? t : t + 360
  },
  ot = function(t) {
    return {
      r: it(t.r, 0, 255),
      g: it(t.g, 0, 255),
      b: it(t.b, 0, 255),
      a: it(t.a)
    }
  },
  at = function(t) {
    return {
      r: st(t.r),
      g: st(t.g),
      b: st(t.b),
      a: st(t.a, 3)
    }
  },
  ht = /^#([0-9a-f]{3,8})$/i,
  lt = function(t) {
    var e = t.toString(16);
    return e.length < 2 ? "0" + e : e
  },
  ut = function(t) {
    var e = t.r,
      r = t.g,
      s = t.b,
      i = t.a,
      n = Math.max(e, r, s),
      o = n - Math.min(e, r, s),
      a = o ? n === e ? (r - s) / o : n === r ? 2 + (s - e) / o : 4 + (e - r) / o : 0;
    return {
      h: 60 * (a < 0 ? a + 6 : a),
      s: n ? o / n * 100 : 0,
      v: n / 255 * 100,
      a: i
    }
  },
  ct = function(t) {
    var e = t.h,
      r = t.s,
      s = t.v,
      i = t.a;
    e = e / 360 * 6, r /= 100, s /= 100;
    var n = Math.floor(e),
      o = s * (1 - r),
      a = s * (1 - (e - n) * r),
      h = s * (1 - (1 - e + n) * r),
      l = n % 6;
    return {
      r: 255 * [s, a, o, o, h, s][l],
      g: 255 * [h, s, s, a, o, o][l],
      b: 255 * [o, o, h, s, s, a][l],
      a: i
    }
  },
  dt = function(t) {
    return {
      h: nt(t.h),
      s: it(t.s, 0, 100),
      l: it(t.l, 0, 100),
      a: it(t.a)
    }
  },
  pt = function(t) {
    return {
      h: st(t.h),
      s: st(t.s),
      l: st(t.l),
      a: st(t.a, 3)
    }
  },
  ft = function(t) {
    return ct((r = (e = t).s, {
      h: e.h,
      s: (r *= ((s = e.l) < 50 ? s : 100 - s) / 100) > 0 ? 2 * r / (s + r) * 100 : 0,
      v: s + r,
      a: e.a
    }));
    var e, r, s
  },
  mt = function(t) {
    return {
      h: (e = ut(t)).h,
      s: (i = (200 - (r = e.s)) * (s = e.v) / 100) > 0 && i < 200 ? r * s / 100 / (i <= 100 ? i : 200 - i) * 100 : 0,
      l: i / 2,
      a: e.a
    };
    var e, r, s, i
  },
  gt = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  _t = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  xt = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  yt = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  bt = {
    string: [
      [function(t) {
        var e = ht.exec(t);
        return e ? (t = e[1]).length <= 4 ? {
          r: parseInt(t[0] + t[0], 16),
          g: parseInt(t[1] + t[1], 16),
          b: parseInt(t[2] + t[2], 16),
          a: 4 === t.length ? st(parseInt(t[3] + t[3], 16) / 255, 2) : 1
        } : 6 === t.length || 8 === t.length ? {
          r: parseInt(t.substr(0, 2), 16),
          g: parseInt(t.substr(2, 2), 16),
          b: parseInt(t.substr(4, 2), 16),
          a: 8 === t.length ? st(parseInt(t.substr(6, 2), 16) / 255, 2) : 1
        } : null : null
      }, "hex"],
      [function(t) {
        var e = xt.exec(t) || yt.exec(t);
        return e ? e[2] !== e[4] || e[4] !== e[6] ? null : ot({
          r: Number(e[1]) / (e[2] ? 100 / 255 : 1),
          g: Number(e[3]) / (e[4] ? 100 / 255 : 1),
          b: Number(e[5]) / (e[6] ? 100 / 255 : 1),
          a: void 0 === e[7] ? 1 : Number(e[7]) / (e[8] ? 100 : 1)
        }) : null
      }, "rgb"],
      [function(t) {
        var e = gt.exec(t) || _t.exec(t);
        if (!e) return null;
        var r, s, i = dt({
          h: (r = e[1], s = e[2], void 0 === s && (s = "deg"), Number(r) * (et[s] || 1)),
          s: Number(e[3]),
          l: Number(e[4]),
          a: void 0 === e[5] ? 1 : Number(e[5]) / (e[6] ? 100 : 1)
        });
        return ft(i)
      }, "hsl"]
    ],
    object: [
      [function(t) {
        var e = t.r,
          r = t.g,
          s = t.b,
          i = t.a,
          n = void 0 === i ? 1 : i;
        return rt(e) && rt(r) && rt(s) ? ot({
          r: Number(e),
          g: Number(r),
          b: Number(s),
          a: Number(n)
        }) : null
      }, "rgb"],
      [function(t) {
        var e = t.h,
          r = t.s,
          s = t.l,
          i = t.a,
          n = void 0 === i ? 1 : i;
        if (!rt(e) || !rt(r) || !rt(s)) return null;
        var o = dt({
          h: Number(e),
          s: Number(r),
          l: Number(s),
          a: Number(n)
        });
        return ft(o)
      }, "hsl"],
      [function(t) {
        var e = t.h,
          r = t.s,
          s = t.v,
          i = t.a,
          n = void 0 === i ? 1 : i;
        if (!rt(e) || !rt(r) || !rt(s)) return null;
        var o, a = (o = {
          h: Number(e),
          s: Number(r),
          v: Number(s),
          a: Number(n)
        }, {
          h: nt(o.h),
          s: it(o.s, 0, 100),
          v: it(o.v, 0, 100),
          a: it(o.a)
        });
        return ct(a)
      }, "hsv"]
    ]
  },
  vt = function(t, e) {
    for (var r = 0; r < e.length; r++) {
      var s = e[r][0](t);
      if (s) return [s, e[r][1]]
    }
    return [null, void 0]
  },
  Tt = function(t, e) {
    var r = mt(t);
    return {
      h: r.h,
      s: it(r.s + 100 * e, 0, 100),
      l: r.l,
      a: r.a
    }
  },
  St = function(t) {
    return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3 / 255
  },
  wt = function(t, e) {
    var r = mt(t);
    return {
      h: r.h,
      s: r.s,
      l: it(r.l + 100 * e, 0, 100),
      a: r.a
    }
  },
  Et = function() {
    function t(t) {
      this.parsed = function(t) {
        return "string" == typeof t ? vt(t.trim(), bt.string) : "object" == typeof t && null !== t ? vt(t, bt.object) : [null, void 0]
      }(t)[0], this.rgba = this.parsed || {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      }
    }
    return t.prototype.isValid = function() {
      return null !== this.parsed
    }, t.prototype.brightness = function() {
      return st(St(this.rgba), 2)
    }, t.prototype.isDark = function() {
      return St(this.rgba) < .5
    }, t.prototype.isLight = function() {
      return St(this.rgba) >= .5
    }, t.prototype.toHex = function() {
      return e = (t = at(this.rgba)).r, r = t.g, s = t.b, n = (i = t.a) < 1 ? lt(st(255 * i)) : "", "#" + lt(e) + lt(r) + lt(s) + n;
      var t, e, r, s, i, n
    }, t.prototype.toRgb = function() {
      return at(this.rgba)
    }, t.prototype.toRgbString = function() {
      return e = (t = at(this.rgba)).r, r = t.g, s = t.b, (i = t.a) < 1 ? "rgba(" + e + ", " + r + ", " + s + ", " + i + ")" : "rgb(" + e + ", " + r + ", " + s + ")";
      var t, e, r, s, i
    }, t.prototype.toHsl = function() {
      return pt(mt(this.rgba))
    }, t.prototype.toHslString = function() {
      return e = (t = pt(mt(this.rgba))).h, r = t.s, s = t.l, (i = t.a) < 1 ? "hsla(" + e + ", " + r + "%, " + s + "%, " + i + ")" : "hsl(" + e + ", " + r + "%, " + s + "%)";
      var t, e, r, s, i
    }, t.prototype.toHsv = function() {
      return t = ut(this.rgba), {
        h: st(t.h),
        s: st(t.s),
        v: st(t.v),
        a: st(t.a, 3)
      };
      var t
    }, t.prototype.invert = function() {
      return Ct({
        r: 255 - (t = this.rgba).r,
        g: 255 - t.g,
        b: 255 - t.b,
        a: t.a
      });
      var t
    }, t.prototype.saturate = function(t) {
      return void 0 === t && (t = .1), Ct(Tt(this.rgba, t))
    }, t.prototype.desaturate = function(t) {
      return void 0 === t && (t = .1), Ct(Tt(this.rgba, -t))
    }, t.prototype.grayscale = function() {
      return Ct(Tt(this.rgba, -1))
    }, t.prototype.lighten = function(t) {
      return void 0 === t && (t = .1), Ct(wt(this.rgba, t))
    }, t.prototype.darken = function(t) {
      return void 0 === t && (t = .1), Ct(wt(this.rgba, -t))
    }, t.prototype.rotate = function(t) {
      return void 0 === t && (t = 15), this.hue(this.hue() + t)
    }, t.prototype.alpha = function(t) {
      return "number" == typeof t ? Ct({
        r: (e = this.rgba).r,
        g: e.g,
        b: e.b,
        a: t
      }) : st(this.rgba.a, 3);
      var e
    }, t.prototype.hue = function(t) {
      var e = mt(this.rgba);
      return "number" == typeof t ? Ct({
        h: t,
        s: e.s,
        l: e.l,
        a: e.a
      }) : st(e.h)
    }, t.prototype.isEqual = function(t) {
      return this.toHex() === Ct(t).toHex()
    }, t
  }(),
  Ct = function(t) {
    return t instanceof Et ? t : new Et(t)
  },
  Pt = [];
[function(t, e) {
  var r = {
      white: "#ffffff",
      bisque: "#ffe4c4",
      blue: "#0000ff",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      azure: "#f0ffff",
      whitesmoke: "#f5f5f5",
      papayawhip: "#ffefd5",
      plum: "#dda0dd",
      blanchedalmond: "#ffebcd",
      black: "#000000",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gainsboro: "#dcdcdc",
      cornsilk: "#fff8dc",
      cornflowerblue: "#6495ed",
      burlywood: "#deb887",
      aquamarine: "#7fffd4",
      beige: "#f5f5dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkkhaki: "#bdb76b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      peachpuff: "#ffdab9",
      darkmagenta: "#8b008b",
      darkred: "#8b0000",
      darkorchid: "#9932cc",
      darkorange: "#ff8c00",
      darkslateblue: "#483d8b",
      gray: "#808080",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      wheat: "#f5deb3",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      ghostwhite: "#f8f8ff",
      darkviolet: "#9400d3",
      magenta: "#ff00ff",
      green: "#008000",
      dodgerblue: "#1e90ff",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      blueviolet: "#8a2be2",
      forestgreen: "#228b22",
      lawngreen: "#7cfc00",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      fuchsia: "#ff00ff",
      brown: "#a52a2a",
      maroon: "#800000",
      mediumblue: "#0000cd",
      lightcoral: "#f08080",
      darkturquoise: "#00ced1",
      lightcyan: "#e0ffff",
      ivory: "#fffff0",
      lightyellow: "#ffffe0",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      linen: "#faf0e6",
      mediumaquamarine: "#66cdaa",
      lemonchiffon: "#fffacd",
      lime: "#00ff00",
      khaki: "#f0e68c",
      mediumseagreen: "#3cb371",
      limegreen: "#32cd32",
      mediumspringgreen: "#00fa9a",
      lightskyblue: "#87cefa",
      lightblue: "#add8e6",
      midnightblue: "#191970",
      lightpink: "#ffb6c1",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      mintcream: "#f5fffa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      navajowhite: "#ffdead",
      navy: "#000080",
      mediumvioletred: "#c71585",
      powderblue: "#b0e0e6",
      palegoldenrod: "#eee8aa",
      oldlace: "#fdf5e6",
      paleturquoise: "#afeeee",
      mediumturquoise: "#48d1cc",
      mediumorchid: "#ba55d3",
      rebeccapurple: "#663399",
      lightsteelblue: "#b0c4de",
      mediumslateblue: "#7b68ee",
      thistle: "#d8bfd8",
      tan: "#d2b48c",
      orchid: "#da70d6",
      mediumpurple: "#9370db",
      purple: "#800080",
      pink: "#ffc0cb",
      skyblue: "#87ceeb",
      springgreen: "#00ff7f",
      palegreen: "#98fb98",
      red: "#ff0000",
      yellow: "#ffff00",
      slateblue: "#6a5acd",
      lavenderblush: "#fff0f5",
      peru: "#cd853f",
      palevioletred: "#db7093",
      violet: "#ee82ee",
      teal: "#008080",
      slategray: "#708090",
      slategrey: "#708090",
      aliceblue: "#f0f8ff",
      darkseagreen: "#8fbc8f",
      darkolivegreen: "#556b2f",
      greenyellow: "#adff2f",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      tomato: "#ff6347",
      silver: "#c0c0c0",
      sienna: "#a0522d",
      lavender: "#e6e6fa",
      lightgreen: "#90ee90",
      orange: "#ffa500",
      orangered: "#ff4500",
      steelblue: "#4682b4",
      royalblue: "#4169e1",
      turquoise: "#40e0d0",
      yellowgreen: "#9acd32",
      salmon: "#fa8072",
      saddlebrown: "#8b4513",
      sandybrown: "#f4a460",
      rosybrown: "#bc8f8f",
      darksalmon: "#e9967a",
      lightgoldenrodyellow: "#fafad2",
      snow: "#fffafa",
      lightgrey: "#d3d3d3",
      lightgray: "#d3d3d3",
      dimgray: "#696969",
      dimgrey: "#696969",
      olivedrab: "#6b8e23",
      olive: "#808000"
    },
    s = {};
  for (var i in r) s[r[i]] = i;
  var n = {};
  t.prototype.toName = function(e) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
    var i, o, a = s[this.toHex()];
    if (a) return a;
    if (null == e ? void 0 : e.closest) {
      var h = this.toRgb(),
        l = 1 / 0,
        u = "black";
      if (!n.length)
        for (var c in r) n[c] = new t(r[c]).toRgb();
      for (var d in r) {
        var p = (i = h, o = n[d], Math.pow(i.r - o.r, 2) + Math.pow(i.g - o.g, 2) + Math.pow(i.b - o.b, 2));
        p < l && (l = p, u = d)
      }
      return u
    }
  }, e.string.push([function(e) {
    var s = e.toLowerCase(),
      i = "transparent" === s ? "#0000" : r[s];
    return i ? new t(i).toRgb() : null
  }, "name"])
}].forEach(function(t) {
  Pt.indexOf(t) < 0 && (t(Et, bt), Pt.push(t))
});
const Mt = class t {
  constructor(t = 16777215) {
    this._value = null, this._components = new Float32Array(4), this._components.fill(1), this._int = 16777215, this.value = t
  }
  get red() {
    return this._components[0]
  }
  get green() {
    return this._components[1]
  }
  get blue() {
    return this._components[2]
  }
  get alpha() {
    return this._components[3]
  }
  setValue(t) {
    return this.value = t, this
  }
  set value(e) {
    if (e instanceof t) this._value = this._cloneSource(e._value), this._int = e._int, this._components.set(e._components);
    else {
      if (null === e) throw new Error("Cannot set Color#value to null");
      null !== this._value && this._isSourceEqual(this._value, e) || (this._value = this._cloneSource(e), this._normalize(this._value))
    }
  }
  get value() {
    return this._value
  }
  _cloneSource(t) {
    return "string" == typeof t || "number" == typeof t || t instanceof Number || null === t ? t : Array.isArray(t) || ArrayBuffer.isView(t) ? t.slice(0) : "object" == typeof t && null !== t ? {
      ...t
    } : t
  }
  _isSourceEqual(t, e) {
    const r = typeof t;
    if (r !== typeof e) return !1;
    if ("number" === r || "string" === r || t instanceof Number) return t === e;
    if (Array.isArray(t) && Array.isArray(e) || ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) return t.length === e.length && t.every((t, r) => t === e[r]);
    if (null !== t && null !== e) {
      const r = Object.keys(t),
        s = Object.keys(e);
      return r.length === s.length && r.every(r => t[r] === e[r])
    }
    return t === e
  }
  toRgba() {
    const [t, e, r, s] = this._components;
    return {
      r: t,
      g: e,
      b: r,
      a: s
    }
  }
  toRgb() {
    const [t, e, r] = this._components;
    return {
      r: t,
      g: e,
      b: r
    }
  }
  toRgbaString() {
    const [t, e, r] = this.toUint8RgbArray();
    return `rgba(${t},${e},${r},${this.alpha})`
  }
  toUint8RgbArray(t) {
    const [e, r, s] = this._components;
    return this._arrayRgb || (this._arrayRgb = []), t || (t = this._arrayRgb), t[0] = Math.round(255 * e), t[1] = Math.round(255 * r), t[2] = Math.round(255 * s), t
  }
  toArray(t) {
    this._arrayRgba || (this._arrayRgba = []), t || (t = this._arrayRgba);
    const [e, r, s, i] = this._components;
    return t[0] = e, t[1] = r, t[2] = s, t[3] = i, t
  }
  toRgbArray(t) {
    this._arrayRgb || (this._arrayRgb = []), t || (t = this._arrayRgb);
    const [e, r, s] = this._components;
    return t[0] = e, t[1] = r, t[2] = s, t
  }
  toNumber() {
    return this._int
  }
  toBgrNumber() {
    const [t, e, r] = this.toUint8RgbArray();
    return (r << 16) + (e << 8) + t
  }
  toLittleEndianNumber() {
    const t = this._int;
    return (t >> 16) + (65280 & t) + ((255 & t) << 16)
  }
  multiply(e) {
    const [r, s, i, n] = t._temp.setValue(e)._components;
    return this._components[0] *= r, this._components[1] *= s, this._components[2] *= i, this._components[3] *= n, this._refreshInt(), this._value = null, this
  }
  premultiply(t, e = !0) {
    return e && (this._components[0] *= t, this._components[1] *= t, this._components[2] *= t), this._components[3] = t, this._refreshInt(), this._value = null, this
  }
  toPremultiplied(t, e = !0) {
    if (1 === t) return (255 << 24) + this._int;
    if (0 === t) return e ? 0 : this._int;
    let r = this._int >> 16 & 255,
      s = this._int >> 8 & 255,
      i = 255 & this._int;
    return e && (r = r * t + .5 | 0, s = s * t + .5 | 0, i = i * t + .5 | 0), (255 * t << 24) + (r << 16) + (s << 8) + i
  }
  toHex() {
    const t = this._int.toString(16);
    return `#${"000000".substring(0,6-t.length)+t}`
  }
  toHexa() {
    const t = Math.round(255 * this._components[3]).toString(16);
    return this.toHex() + "00".substring(0, 2 - t.length) + t
  }
  setAlpha(t) {
    return this._components[3] = this._clamp(t), this
  }
  _normalize(e) {
    let r, s, i, n;
    if (("number" == typeof e || e instanceof Number) && e >= 0 && e <= 16777215) r = (e >> 16 & 255) / 255, s = (e >> 8 & 255) / 255, i = (255 & e) / 255, n = 1;
    else if ((Array.isArray(e) || e instanceof Float32Array) && e.length >= 3 && e.length <= 4) e = this._clamp(e), [r, s, i, n = 1] = e;
    else if ((e instanceof Uint8Array || e instanceof Uint8ClampedArray) && e.length >= 3 && e.length <= 4) e = this._clamp(e, 0, 255), [r, s, i, n = 255] = e, r /= 255, s /= 255, i /= 255, n /= 255;
    else if ("string" == typeof e || "object" == typeof e) {
      if ("string" == typeof e) {
        const r = t.HEX_PATTERN.exec(e);
        r && (e = `#${r[2]}`)
      }
      const o = Ct(e);
      o.isValid() && (({
        r: r,
        g: s,
        b: i,
        a: n
      } = o.rgba), r /= 255, s /= 255, i /= 255)
    }
    if (void 0 === r) throw new Error(`Unable to convert color ${e}`);
    this._components[0] = r, this._components[1] = s, this._components[2] = i, this._components[3] = n, this._refreshInt()
  }
  _refreshInt() {
    this._clamp(this._components);
    const [t, e, r] = this._components;
    this._int = (255 * t << 16) + (255 * e << 8) + (255 * r | 0)
  }
  _clamp(t, e = 0, r = 1) {
    return "number" == typeof t ? Math.min(Math.max(t, e), r) : (t.forEach((s, i) => {
      t[i] = Math.min(Math.max(s, e), r)
    }), t)
  }
  static isColorLike(e) {
    return "number" == typeof e || "string" == typeof e || e instanceof Number || e instanceof t || Array.isArray(e) || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Float32Array || void 0 !== e.r && void 0 !== e.g && void 0 !== e.b || void 0 !== e.r && void 0 !== e.g && void 0 !== e.b && void 0 !== e.a || void 0 !== e.h && void 0 !== e.s && void 0 !== e.l || void 0 !== e.h && void 0 !== e.s && void 0 !== e.l && void 0 !== e.a || void 0 !== e.h && void 0 !== e.s && void 0 !== e.v || void 0 !== e.h && void 0 !== e.s && void 0 !== e.v && void 0 !== e.a
  }
};
Mt.shared = new Mt, Mt._temp = new Mt, Mt.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
let At = Mt,
  Rt = 0;

function Bt(...t) {
  500 !== Rt && (Rt++, 500 === Rt ? console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS.") : console.warn("PixiJS Warning: ", ...t))
}
class kt {
  constructor(t, e) {
    this._pool = [], this._count = 0, this._index = 0, this._classType = t, e && this.prepopulate(e)
  }
  prepopulate(t) {
    for (let e = 0; e < t; e++) this._pool[this._index++] = new this._classType;
    this._count += t
  }
  get(t) {
    var e;
    let r;
    return r = this._index > 0 ? this._pool[--this._index] : new this._classType, null == (e = r.init) || e.call(r, t), r
  }
  return (t) {
    var e;
    null == (e = t.reset) || e.call(t), this._pool[this._index++] = t
  }
  get totalSize() {
    return this._count
  }
  get totalFree() {
    return this._index
  }
  get totalUsed() {
    return this._count - this._index
  }
  clear() {
    this._pool.length = 0, this._index = 0
  }
}
const Gt = new class {
    constructor() {
      this._poolsByClass = new Map
    }
    prepopulate(t, e) {
      this.getPool(t).prepopulate(e)
    }
    get(t, e) {
      return this.getPool(t).get(e)
    }
    return (t) {
      this.getPool(t.constructor).return(t)
    }
    getPool(t) {
      return this._poolsByClass.has(t) || this._poolsByClass.set(t, new kt(t)), this._poolsByClass.get(t)
    }
    stats() {
      const t = {};
      return this._poolsByClass.forEach(e => {
        const r = t[e._classType.name] ? e._classType.name + e._classType.ID : e._classType.name;
        t[r] = {
          free: e.totalFree,
          used: e.totalUsed,
          size: e.totalSize
        }
      }), t
    }
  },
  It = {
    get isCachedAsTexture() {
      var t;
      return !!(null == (t = this.renderGroup) ? void 0 : t.isCachedAsTexture)
    },
    cacheAsTexture(t) {
      "boolean" == typeof t && !1 === t ? this.disableRenderGroup() : (this.enableRenderGroup(), this.renderGroup.enableCacheAsTexture(!0 === t ? {} : t))
    },
    updateCacheTexture() {
      var t;
      null == (t = this.renderGroup) || t.updateCacheTexture()
    },
    get cacheAsBitmap() {
      return this.isCachedAsTexture
    },
    set cacheAsBitmap(t) {
      D("v8.6.0", "cacheAsBitmap is deprecated, use cacheAsTexture instead."), this.cacheAsTexture(t)
    }
  };

function Ft(t, e, r) {
  const s = t.length;
  let i;
  if (e >= s || 0 === r) return;
  const n = s - (r = e + r > s ? s - e : r);
  for (i = e; i < n; ++i) t[i] = t[i + r];
  t.length = n
}
const Ut = {
    allowChildren: !0,
    removeChildren(t = 0, e) {
      var r;
      const s = e ?? this.children.length,
        i = s - t,
        n = [];
      if (i > 0 && i <= s) {
        for (let r = s - 1; r >= t; r--) {
          const t = this.children[r];
          t && (n.push(t), t.parent = null)
        }
        Ft(this.children, t, s);
        const e = this.renderGroup || this.parentRenderGroup;
        e && e.removeChildren(n);
        for (let t = 0; t < n.length; ++t) {
          const e = n[t];
          null == (r = e.parentRenderLayer) || r.detach(e), this.emit("childRemoved", e, this, t), n[t].emit("removed", this)
        }
        return n.length > 0 && this._didViewChangeTick++, n
      }
      if (0 === i && 0 === this.children.length) return n;
      throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
    },
    removeChildAt(t) {
      const e = this.getChildAt(t);
      return this.removeChild(e)
    },
    getChildAt(t) {
      if (t < 0 || t >= this.children.length) throw new Error(`getChildAt: Index (${t}) does not exist.`);
      return this.children[t]
    },
    setChildIndex(t, e) {
      if (e < 0 || e >= this.children.length) throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`);
      this.getChildIndex(t), this.addChildAt(t, e)
    },
    getChildIndex(t) {
      const e = this.children.indexOf(t);
      if (-1 === e) throw new Error("The supplied Container must be a child of the caller");
      return e
    },
    addChildAt(t, e) {
      this.allowChildren || D(O, "addChildAt: Only Containers will be allowed to add children in v8.0.0");
      const {
        children: r
      } = this;
      if (e < 0 || e > r.length) throw new Error(`${t}addChildAt: The index ${e} supplied is out of bounds ${r.length}`);
      if (t.parent) {
        const r = t.parent.children.indexOf(t);
        if (t.parent === this && r === e) return t; - 1 !== r && t.parent.children.splice(r, 1)
      }
      e === r.length ? r.push(t) : r.splice(e, 0, t), t.parent = this, t.didChange = !0, t._updateFlags = 15;
      const s = this.renderGroup || this.parentRenderGroup;
      return s && s.addChild(t), this.sortableChildren && (this.sortDirty = !0), this.emit("childAdded", t, this, e), t.emit("added", this), t
    },
    swapChildren(t, e) {
      if (t === e) return;
      const r = this.getChildIndex(t),
        s = this.getChildIndex(e);
      this.children[r] = e, this.children[s] = t;
      const i = this.renderGroup || this.parentRenderGroup;
      i && (i.structureDidChange = !0), this._didContainerChangeTick++
    },
    removeFromParent() {
      var t;
      null == (t = this.parent) || t.removeChild(this)
    },
    reparentChild(...t) {
      return 1 === t.length ? this.reparentChildAt(t[0], this.children.length) : (t.forEach(t => this.reparentChildAt(t, this.children.length)), t[0])
    },
    reparentChildAt(t, e) {
      if (t.parent === this) return this.setChildIndex(t, e), t;
      const r = t.worldTransform.clone();
      t.removeFromParent(), this.addChildAt(t, e);
      const s = this.worldTransform.clone();
      return s.invert(), r.prepend(s), t.setFromMatrix(r), t
    },
    replaceChild(t, e) {
      t.updateLocalTransform(), this.addChildAt(e, this.getChildIndex(t)), e.setFromMatrix(t.localTransform), e.updateLocalTransform(), this.removeChild(t)
    }
  },
  Ot = {
    collectRenderables(t, e, r) {
      this.parentRenderLayer && this.parentRenderLayer !== r || this.globalDisplayStatus < 7 || !this.includeInBuild || (this.sortableChildren && this.sortChildren(), this.isSimple ? this.collectRenderablesSimple(t, e, r) : this.renderGroup ? e.renderPipes.renderGroup.addRenderGroup(this.renderGroup, t) : this.collectRenderablesWithEffects(t, e, r))
    },
    collectRenderablesSimple(t, e, r) {
      const s = this.children,
        i = s.length;
      for (let n = 0; n < i; n++) s[n].collectRenderables(t, e, r)
    },
    collectRenderablesWithEffects(t, e, r) {
      const {
        renderPipes: s
      } = e;
      for (let i = 0; i < this.effects.length; i++) {
        const e = this.effects[i];
        s[e.pipe].push(e, this, t)
      }
      this.collectRenderablesSimple(t, e, r);
      for (let i = this.effects.length - 1; i >= 0; i--) {
        const e = this.effects[i];
        s[e.pipe].pop(e, this, t)
      }
    }
  };
class Dt {
  constructor() {
    this.pipe = "filter", this.priority = 1
  }
  destroy() {
    for (let t = 0; t < this.filters.length; t++) this.filters[t].destroy();
    this.filters = null, this.filterArea = null
  }
}
const Lt = new class {
  constructor() {
    this._effectClasses = [], this._tests = [], this._initialized = !1
  }
  init() {
    this._initialized || (this._initialized = !0, this._effectClasses.forEach(t => {
      this.add({
        test: t.test,
        maskClass: t
      })
    }))
  }
  add(t) {
    this._tests.push(t)
  }
  getMaskEffect(t) {
    this._initialized || this.init();
    for (let e = 0; e < this._tests.length; e++) {
      const r = this._tests[e];
      if (r.test(t)) return Gt.get(r.maskClass, t)
    }
    return t
  }
  returnMaskEffect(t) {
    Gt.return(t)
  }
};
u.handleByList(a.MaskEffect, Lt._effectClasses);
const Nt = {
    _maskEffect: null,
    _maskOptions: {
      inverse: !1
    },
    _filterEffect: null,
    effects: [],
    _markStructureAsChanged() {
      const t = this.renderGroup || this.parentRenderGroup;
      t && (t.structureDidChange = !0)
    },
    addEffect(t) {
      -1 === this.effects.indexOf(t) && (this.effects.push(t), this.effects.sort((t, e) => t.priority - e.priority), this._markStructureAsChanged(), this._updateIsSimple())
    },
    removeEffect(t) {
      const e = this.effects.indexOf(t); - 1 !== e && (this.effects.splice(e, 1), this._markStructureAsChanged(), this._updateIsSimple())
    },
    set mask(t) {
      const e = this._maskEffect;
      (null == e ? void 0 : e.mask) !== t && (e && (this.removeEffect(e), Lt.returnMaskEffect(e), this._maskEffect = null), null != t && (this._maskEffect = Lt.getMaskEffect(t), this.addEffect(this._maskEffect)))
    },
    get mask() {
      var t;
      return null == (t = this._maskEffect) ? void 0 : t.mask
    },
    setMask(t) {
      this._maskOptions = {
        ...this._maskOptions,
        ...t
      }, t.mask && (this.mask = t.mask), this._markStructureAsChanged()
    },
    set filters(t) {
      var e;
      !Array.isArray(t) && t && (t = [t]);
      const r = this._filterEffect || (this._filterEffect = new Dt),
        s = (null == t ? void 0 : t.length) > 0,
        i = s !== (null == (e = r.filters) ? void 0 : e.length) > 0;
      t = Array.isArray(t) ? t.slice(0) : t, r.filters = Object.freeze(t), i && (s ? this.addEffect(r) : (this.removeEffect(r), r.filters = t ?? null))
    },
    get filters() {
      var t;
      return null == (t = this._filterEffect) ? void 0 : t.filters
    },
    set filterArea(t) {
      this._filterEffect || (this._filterEffect = new Dt), this._filterEffect.filterArea = t
    },
    get filterArea() {
      var t;
      return null == (t = this._filterEffect) ? void 0 : t.filterArea
    }
  },
  zt = {
    label: null,
    get name() {
      return D(O, "Container.name property has been removed, use Container.label instead"), this.label
    },
    set name(t) {
      D(O, "Container.name property has been removed, use Container.label instead"), this.label = t
    },
    getChildByName(t, e = !1) {
      return this.getChildByLabel(t, e)
    },
    getChildByLabel(t, e = !1) {
      const r = this.children;
      for (let s = 0; s < r.length; s++) {
        const e = r[s];
        if (e.label === t || t instanceof RegExp && t.test(e.label)) return e
      }
      if (e)
        for (let s = 0; s < r.length; s++) {
          const e = r[s].getChildByLabel(t, !0);
          if (e) return e
        }
      return null
    },
    getChildrenByLabel(t, e = !1, r = []) {
      const s = this.children;
      for (let i = 0; i < s.length; i++) {
        const e = s[i];
        (e.label === t || t instanceof RegExp && t.test(e.label)) && r.push(e)
      }
      if (e)
        for (let i = 0; i < s.length; i++) s[i].getChildrenByLabel(t, !0, r);
      return r
    }
  },
  Ht = new kt(v),
  Wt = new kt(tt),
  Vt = new v,
  Xt = {
    getFastGlobalBounds(t, e) {
      e || (e = new tt), e.clear(), this._getGlobalBoundsRecursive(!!t, e, this.parentRenderLayer), e.isValid || e.set(0, 0, 0, 0);
      const r = this.renderGroup || this.parentRenderGroup;
      return e.applyMatrix(r.worldTransform), e
    },
    _getGlobalBoundsRecursive(t, e, r) {
      let s = e;
      if (t && this.parentRenderLayer && this.parentRenderLayer !== r) return;
      if (7 !== this.localDisplayStatus || !this.measurable) return;
      const i = !!this.effects.length;
      if ((this.renderGroup || i) && (s = Wt.get().clear()), this.boundsArea) e.addRect(this.boundsArea, this.worldTransform);
      else {
        if (this.renderPipeId) {
          const t = this.bounds;
          s.addFrame(t.minX, t.minY, t.maxX, t.maxY, this.groupTransform)
        }
        const e = this.children;
        for (let i = 0; i < e.length; i++) e[i]._getGlobalBoundsRecursive(t, s, r)
      }
      if (i) {
        let t = !1;
        const r = this.renderGroup || this.parentRenderGroup;
        for (let e = 0; e < this.effects.length; e++) this.effects[e].addBounds && (t || (t = !0, s.applyMatrix(r.worldTransform)), this.effects[e].addBounds(s, !0));
        t && (s.applyMatrix(r.worldTransform.copyTo(Vt).invert()), e.addBounds(s, this.relativeGroupTransform)), e.addBounds(s), Wt.return(s)
      } else this.renderGroup && (e.addBounds(s, this.relativeGroupTransform), Wt.return(s))
    }
  };

function Yt(t, e, r) {
  let s, i;
  return r.clear(), t.parent ? e ? s = t.parent.worldTransform : (i = Ht.get().identity(), s = jt(t, i)) : s = v.IDENTITY, $t(t, r, s, e), i && Ht.return(i), r.isValid || r.set(0, 0, 0, 0), r
}

function $t(t, e, r, s) {
  var i, n;
  if (!t.visible || !t.measurable) return;
  let o;
  s ? o = t.worldTransform : (t.updateLocalTransform(), o = Ht.get(), o.appendFrom(t.localTransform, r));
  const a = e,
    h = !!t.effects.length;
  if (h && (e = Wt.get().clear()), t.boundsArea) e.addRect(t.boundsArea, o);
  else {
    t.bounds && (e.matrix = o, e.addBounds(t.bounds));
    for (let r = 0; r < t.children.length; r++) $t(t.children[r], e, o, s)
  }
  if (h) {
    for (let r = 0; r < t.effects.length; r++) null == (n = (i = t.effects[r]).addBounds) || n.call(i, e);
    a.addBounds(e, v.IDENTITY), Wt.return(e)
  }
  s || Ht.return(o)
}

function jt(t, e) {
  const r = t.parent;
  return r && (jt(r, e), r.updateLocalTransform(), e.append(r.localTransform)), e
}

function qt(t, e) {
  return 16777215 !== t && e ? 16777215 !== e && t ? ((t >> 16 & 255) * (e >> 16 & 255) / 255 << 16) + ((t >> 8 & 255) * (e >> 8 & 255) / 255 << 8) + ((255 & t) * (255 & e) / 255 | 0) : t : e
}
const Kt = 16777215;

function Zt(t, e) {
  return t === Kt ? e : e === Kt ? t : qt(t, e)
}

function Qt(t) {
  return ((255 & t) << 16) + (65280 & t) + (t >> 16 & 255)
}
const Jt = {
  getGlobalAlpha(t) {
    if (t) return this.renderGroup ? this.renderGroup.worldAlpha : this.parentRenderGroup ? this.parentRenderGroup.worldAlpha * this.alpha : this.alpha;
    let e = this.alpha,
      r = this.parent;
    for (; r;) e *= r.alpha, r = r.parent;
    return e
  },
  getGlobalTransform(t, e) {
    if (e) return t.copyFrom(this.worldTransform);
    this.updateLocalTransform();
    const r = jt(this, Ht.get().identity());
    return t.appendFrom(this.localTransform, r), Ht.return(r), t
  },
  getGlobalTint(t) {
    if (t) return this.renderGroup ? Qt(this.renderGroup.worldColor) : this.parentRenderGroup ? Qt(Zt(this.localColor, this.parentRenderGroup.worldColor)) : this.tint;
    let e = this.localColor,
      r = this.parent;
    for (; r;) e = Zt(e, r.localColor), r = r.parent;
    return Qt(e)
  }
};

function te(t, e, r) {
  return e.clear(), r || (r = v.IDENTITY), ee(t, e, r, t, !0), e.isValid || e.set(0, 0, 0, 0), e
}

function ee(t, e, r, s, i) {
  var n, o;
  let a;
  if (i) a = Ht.get(), a = r.copyTo(a);
  else {
    if (!t.visible || !t.measurable) return;
    t.updateLocalTransform();
    const e = t.localTransform;
    a = Ht.get(), a.appendFrom(e, r)
  }
  const h = e,
    l = !!t.effects.length;
  if (l && (e = Wt.get().clear()), t.boundsArea) e.addRect(t.boundsArea, a);
  else {
    t.renderPipeId && (e.matrix = a, e.addBounds(t.bounds));
    const r = t.children;
    for (let t = 0; t < r.length; t++) ee(r[t], e, a, s, !1)
  }
  if (l) {
    for (let r = 0; r < t.effects.length; r++) null == (o = (n = t.effects[r]).addLocalBounds) || o.call(n, e, s);
    h.addBounds(e, v.IDENTITY), Wt.return(e)
  }
  Ht.return(a)
}

function re(t, e) {
  const r = t.children;
  for (let s = 0; s < r.length; s++) {
    const t = r[s],
      i = t.uid,
      n = (65535 & t._didViewChangeTick) << 16 | 65535 & t._didContainerChangeTick,
      o = e.index;
    e.data[o] === i && e.data[o + 1] === n || (e.data[e.index] = i, e.data[e.index + 1] = n, e.didChange = !0), e.index = o + 2, t.children.length && re(t, e)
  }
  return e.didChange
}
const se = new v,
  ie = {
    _localBoundsCacheId: -1,
    _localBoundsCacheData: null,
    _setWidth(t, e) {
      const r = Math.sign(this.scale.x) || 1;
      this.scale.x = 0 !== e ? t / e * r : r
    },
    _setHeight(t, e) {
      const r = Math.sign(this.scale.y) || 1;
      this.scale.y = 0 !== e ? t / e * r : r
    },
    getLocalBounds() {
      this._localBoundsCacheData || (this._localBoundsCacheData = {
        data: [],
        index: 1,
        didChange: !1,
        localBounds: new tt
      });
      const t = this._localBoundsCacheData;
      return t.index = 1, t.didChange = !1, t.data[0] !== this._didViewChangeTick && (t.didChange = !0, t.data[0] = this._didViewChangeTick), re(this, t), t.didChange && te(this, t.localBounds, se), t.localBounds
    },
    getBounds(t, e) {
      return Yt(this, t, e || new tt)
    }
  },
  ne = {
    _onRender: null,
    set onRender(t) {
      const e = this.renderGroup || this.parentRenderGroup;
      if (!t) return this._onRender && (null == e || e.removeOnRender(this)), void(this._onRender = null);
      this._onRender || null == e || e.addOnRender(this), this._onRender = t
    },
    get onRender() {
      return this._onRender
    }
  },
  oe = {
    _zIndex: 0,
    sortDirty: !1,
    sortableChildren: !1,
    get zIndex() {
      return this._zIndex
    },
    set zIndex(t) {
      this._zIndex !== t && (this._zIndex = t, this.depthOfChildModified())
    },
    depthOfChildModified() {
      this.parent && (this.parent.sortableChildren = !0, this.parent.sortDirty = !0), this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0)
    },
    sortChildren() {
      this.sortDirty && (this.sortDirty = !1, this.children.sort(ae))
    }
  };

function ae(t, e) {
  return t._zIndex - e._zIndex
}
const he = {
  getGlobalPosition(t = new y, e = !1) {
    return this.parent ? this.parent.toGlobal(this._position, t, e) : (t.x = this._position.x, t.y = this._position.y), t
  },
  toGlobal(t, e, r = !1) {
    const s = this.getGlobalTransform(Ht.get(), r);
    return e = s.apply(t, e), Ht.return(s), e
  },
  toLocal(t, e, r, s) {
    e && (t = e.toGlobal(t, r, s));
    const i = this.getGlobalTransform(Ht.get(), s);
    return r = i.applyInverse(t, r), Ht.return(i), r
  }
};
class le {
  constructor() {
    this.uid = F("instructionSet"), this.instructions = [], this.instructionSize = 0, this.renderables = [], this.gcTick = 0
  }
  reset() {
    this.instructionSize = 0
  }
  add(t) {
    this.instructions[this.instructionSize++] = t
  }
  log() {
    this.instructions.length = this.instructionSize, console.table(this.instructions, ["type", "action"])
  }
}
let ue = 0;
const ce = new class {
  constructor(t) {
    this._poolKeyHash = Object.create(null), this._texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this.textureStyle = new X(this.textureOptions)
  }
  createTexture(t, e, r) {
    const s = new $({
      ...this.textureOptions,
      width: t,
      height: e,
      resolution: 1,
      antialias: r,
      autoGarbageCollect: !1
    });
    return new Z({
      source: s,
      label: "texturePool_" + ue++
    })
  }
  getOptimalTexture(t, e, r = 1, s) {
    let i = Math.ceil(t * r - 1e-6),
      n = Math.ceil(e * r - 1e-6);
    i = N(i), n = N(n);
    const o = (i << 17) + (n << 1) + (s ? 1 : 0);
    this._texturePool[o] || (this._texturePool[o] = []);
    let a = this._texturePool[o].pop();
    return a || (a = this.createTexture(i, n, s)), a.source._resolution = r, a.source.width = i / r, a.source.height = n / r, a.source.pixelWidth = i, a.source.pixelHeight = n, a.frame.x = 0, a.frame.y = 0, a.frame.width = t, a.frame.height = e, a.updateUvs(), this._poolKeyHash[a.uid] = o, a
  }
  getSameSizeTexture(t, e = !1) {
    const r = t.source;
    return this.getOptimalTexture(t.width, t.height, r._resolution, e)
  }
  returnTexture(t, e = !1) {
    const r = this._poolKeyHash[t.uid];
    e && (t.source.style = this.textureStyle), this._texturePool[r].push(t)
  }
  clear(t) {
    if (t = !1 !== t)
      for (const e in this._texturePool) {
        const t = this._texturePool[e];
        if (t)
          for (let e = 0; e < t.length; e++) t[e].destroy(!0)
      }
    this._texturePool = {}
  }
};
class de {
  constructor() {
    this.renderPipeId = "renderGroup", this.root = null, this.canBundle = !1, this.renderGroupParent = null, this.renderGroupChildren = [], this.worldTransform = new v, this.worldColorAlpha = 4294967295, this.worldColor = 16777215, this.worldAlpha = 1, this.childrenToUpdate = Object.create(null), this.updateTick = 0, this.gcTick = 0, this.childrenRenderablesToUpdate = {
      list: [],
      index: 0
    }, this.structureDidChange = !0, this.instructionSet = new le, this._onRenderContainers = [], this.textureNeedsUpdate = !0, this.isCachedAsTexture = !1, this._matrixDirty = 7
  }
  init(t) {
    this.root = t, t._onRender && this.addOnRender(t), t.didChange = !0;
    const e = t.children;
    for (let r = 0; r < e.length; r++) {
      const t = e[r];
      t._updateFlags = 15, this.addChild(t)
    }
  }
  enableCacheAsTexture(t = {}) {
    this.textureOptions = t, this.isCachedAsTexture = !0, this.textureNeedsUpdate = !0
  }
  disableCacheAsTexture() {
    this.isCachedAsTexture = !1, this.texture && (ce.returnTexture(this.texture), this.texture = null)
  }
  updateCacheTexture() {
    this.textureNeedsUpdate = !0
  }
  reset() {
    this.renderGroupChildren.length = 0;
    for (const t in this.childrenToUpdate) {
      const e = this.childrenToUpdate[t];
      e.list.fill(null), e.index = 0
    }
    this.childrenRenderablesToUpdate.index = 0, this.childrenRenderablesToUpdate.list.fill(null), this.root = null, this.updateTick = 0, this.structureDidChange = !0, this._onRenderContainers.length = 0, this.renderGroupParent = null, this.disableCacheAsTexture()
  }
  get localTransform() {
    return this.root.localTransform
  }
  addRenderGroupChild(t) {
    t.renderGroupParent && t.renderGroupParent._removeRenderGroupChild(t), t.renderGroupParent = this, this.renderGroupChildren.push(t)
  }
  _removeRenderGroupChild(t) {
    const e = this.renderGroupChildren.indexOf(t);
    e > -1 && this.renderGroupChildren.splice(e, 1), t.renderGroupParent = null
  }
  addChild(t) {
    if (this.structureDidChange = !0, t.parentRenderGroup = this, t.updateTick = -1, t.parent === this.root ? t.relativeRenderGroupDepth = 1 : t.relativeRenderGroupDepth = t.parent.relativeRenderGroupDepth + 1, t.didChange = !0, this.onChildUpdate(t), t.renderGroup) return void this.addRenderGroupChild(t.renderGroup);
    t._onRender && this.addOnRender(t);
    const e = t.children;
    for (let r = 0; r < e.length; r++) this.addChild(e[r])
  }
  removeChild(t) {
    if (this.structureDidChange = !0, t._onRender && (t.renderGroup || this.removeOnRender(t)), t.parentRenderGroup = null, t.renderGroup) return void this._removeRenderGroupChild(t.renderGroup);
    const e = t.children;
    for (let r = 0; r < e.length; r++) this.removeChild(e[r])
  }
  removeChildren(t) {
    for (let e = 0; e < t.length; e++) this.removeChild(t[e])
  }
  onChildUpdate(t) {
    let e = this.childrenToUpdate[t.relativeRenderGroupDepth];
    e || (e = this.childrenToUpdate[t.relativeRenderGroupDepth] = {
      index: 0,
      list: []
    }), e.list[e.index++] = t
  }
  updateRenderable(t) {
    t.globalDisplayStatus < 7 || (this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t), t.didViewUpdate = !1)
  }
  onChildViewUpdate(t) {
    this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++] = t
  }
  get isRenderable() {
    return 7 === this.root.localDisplayStatus && this.worldAlpha > 0
  }
  addOnRender(t) {
    this._onRenderContainers.push(t)
  }
  removeOnRender(t) {
    this._onRenderContainers.splice(this._onRenderContainers.indexOf(t), 1)
  }
  runOnRender(t) {
    for (let e = 0; e < this._onRenderContainers.length; e++) this._onRenderContainers[e]._onRender(t)
  }
  destroy() {
    this.disableCacheAsTexture(), this.renderGroupParent = null, this.root = null, this.childrenRenderablesToUpdate = null, this.childrenToUpdate = null, this.renderGroupChildren = null, this._onRenderContainers = null, this.instructionSet = null
  }
  getChildren(t = []) {
    const e = this.root.children;
    for (let r = 0; r < e.length; r++) this._getChildren(e[r], t);
    return t
  }
  _getChildren(t, e = []) {
    if (e.push(t), t.renderGroup) return e;
    const r = t.children;
    for (let s = 0; s < r.length; s++) this._getChildren(r[s], e);
    return e
  }
  invalidateMatrices() {
    this._matrixDirty = 7
  }
  get inverseWorldTransform() {
    return 1 & this._matrixDirty ? (this._matrixDirty &= -2, this._inverseWorldTransform || (this._inverseWorldTransform = new v), this._inverseWorldTransform.copyFrom(this.worldTransform).invert()) : this._inverseWorldTransform
  }
  get textureOffsetInverseTransform() {
    return 2 & this._matrixDirty ? (this._matrixDirty &= -3, this._textureOffsetInverseTransform || (this._textureOffsetInverseTransform = new v), this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x, -this._textureBounds.y)) : this._textureOffsetInverseTransform
  }
  get inverseParentTextureTransform() {
    if (!(4 & this._matrixDirty)) return this._inverseParentTextureTransform;
    this._matrixDirty &= -5;
    const t = this._parentCacheAsTextureRenderGroup;
    return t ? (this._inverseParentTextureTransform || (this._inverseParentTextureTransform = new v), this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(t.inverseWorldTransform).translate(-t._textureBounds.x, -t._textureBounds.y)) : this.worldTransform
  }
  get cacheToLocalTransform() {
    return this._parentCacheAsTextureRenderGroup ? this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform : null
  }
}
const pe = new p(null),
  fe = new p(null),
  me = new p(null, 1, 1),
  ge = new p(null);
class _e extends m {
  constructor(t = {}) {
    var e, r;
    super(), this.uid = F("renderable"), this._updateFlags = 15, this.renderGroup = null, this.parentRenderGroup = null, this.parentRenderGroupIndex = 0, this.didChange = !1, this.didViewUpdate = !1, this.relativeRenderGroupDepth = 0, this.children = [], this.parent = null, this.includeInBuild = !0, this.measurable = !0, this.isSimple = !0, this.updateTick = -1, this.localTransform = new v, this.relativeGroupTransform = new v, this.groupTransform = this.relativeGroupTransform, this.destroyed = !1, this._position = new p(this, 0, 0), this._scale = me, this._pivot = fe, this._origin = ge, this._skew = pe, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._rotation = 0, this.localColor = 16777215, this.localAlpha = 1, this.groupAlpha = 1, this.groupColor = 16777215, this.groupColorAlpha = 4294967295, this.localBlendMode = "inherit", this.groupBlendMode = "normal", this.localDisplayStatus = 7, this.globalDisplayStatus = 7, this._didContainerChangeTick = 0, this._didViewChangeTick = 0, this._didLocalTransformChangeId = -1, this.effects = [],
      function(t, e, r = {}) {
        for (const s in e) r[s] || void 0 === e[s] || (t[s] = e[s])
      }(this, t, {
        children: !0,
        parent: !0,
        effects: !0
      }), null == (e = t.children) || e.forEach(t => this.addChild(t)), null == (r = t.parent) || r.addChild(this)
  }
  static mixin(t) {
    D("8.8.0", "Container.mixin is deprecated, please use extensions.mixin instead."), u.mixin(_e, t)
  }
  set _didChangeId(t) {
    this._didViewChangeTick = t >> 12 & 4095, this._didContainerChangeTick = 4095 & t
  }
  get _didChangeId() {
    return 4095 & this._didContainerChangeTick | (4095 & this._didViewChangeTick) << 12
  }
  addChild(...t) {
    if (this.allowChildren || D(O, "addChild: Only Containers will be allowed to add children in v8.0.0"), t.length > 1) {
      for (let e = 0; e < t.length; e++) this.addChild(t[e]);
      return t[0]
    }
    const e = t[0],
      r = this.renderGroup || this.parentRenderGroup;
    return e.parent === this ? (this.children.splice(this.children.indexOf(e), 1), this.children.push(e), r && (r.structureDidChange = !0), e) : (e.parent && e.parent.removeChild(e), this.children.push(e), this.sortableChildren && (this.sortDirty = !0), e.parent = this, e.didChange = !0, e._updateFlags = 15, r && r.addChild(e), this.emit("childAdded", e, this, this.children.length - 1), e.emit("added", this), this._didViewChangeTick++, 0 !== e._zIndex && e.depthOfChildModified(), e)
  }
  removeChild(...t) {
    if (t.length > 1) {
      for (let e = 0; e < t.length; e++) this.removeChild(t[e]);
      return t[0]
    }
    const e = t[0],
      r = this.children.indexOf(e);
    return r > -1 && (this._didViewChangeTick++, this.children.splice(r, 1), this.renderGroup ? this.renderGroup.removeChild(e) : this.parentRenderGroup && this.parentRenderGroup.removeChild(e), e.parentRenderLayer && e.parentRenderLayer.detach(e), e.parent = null, this.emit("childRemoved", e, this, r), e.emit("removed", this)), e
  }
  _onUpdate(t) {
    t && t === this._skew && this._updateSkew(), this._didContainerChangeTick++, this.didChange || (this.didChange = !0, this.parentRenderGroup && this.parentRenderGroup.onChildUpdate(this))
  }
  set isRenderGroup(t) {
    !!this.renderGroup !== t && (t ? this.enableRenderGroup() : this.disableRenderGroup())
  }
  get isRenderGroup() {
    return !!this.renderGroup
  }
  enableRenderGroup() {
    if (this.renderGroup) return;
    const t = this.parentRenderGroup;
    null == t || t.removeChild(this), this.renderGroup = Gt.get(de, this), this.groupTransform = v.IDENTITY, null == t || t.addChild(this), this._updateIsSimple()
  }
  disableRenderGroup() {
    if (!this.renderGroup) return;
    const t = this.parentRenderGroup;
    null == t || t.removeChild(this), Gt.return(this.renderGroup), this.renderGroup = null, this.groupTransform = this.relativeGroupTransform, null == t || t.addChild(this), this._updateIsSimple()
  }
  _updateIsSimple() {
    this.isSimple = !this.renderGroup && 0 === this.effects.length
  }
  get worldTransform() {
    return this._worldTransform || (this._worldTransform = new v), this.renderGroup ? this._worldTransform.copyFrom(this.renderGroup.worldTransform) : this.parentRenderGroup && this._worldTransform.appendFrom(this.relativeGroupTransform, this.parentRenderGroup.worldTransform), this._worldTransform
  }
  get x() {
    return this._position.x
  }
  set x(t) {
    this._position.x = t
  }
  get y() {
    return this._position.y
  }
  set y(t) {
    this._position.y = t
  }
  get position() {
    return this._position
  }
  set position(t) {
    this._position.copyFrom(t)
  }
  get rotation() {
    return this._rotation
  }
  set rotation(t) {
    this._rotation !== t && (this._rotation = t, this._onUpdate(this._skew))
  }
  get angle() {
    return this.rotation * _
  }
  set angle(t) {
    this.rotation = t * x
  }
  get pivot() {
    return this._pivot === fe && (this._pivot = new p(this, 0, 0)), this._pivot
  }
  set pivot(t) {
    this._pivot === fe && (this._pivot = new p(this, 0, 0), this._origin !== ge && Bt("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")), "number" == typeof t ? this._pivot.set(t) : this._pivot.copyFrom(t)
  }
  get skew() {
    return this._skew === pe && (this._skew = new p(this, 0, 0)), this._skew
  }
  set skew(t) {
    this._skew === pe && (this._skew = new p(this, 0, 0)), this._skew.copyFrom(t)
  }
  get scale() {
    return this._scale === me && (this._scale = new p(this, 1, 1)), this._scale
  }
  set scale(t) {
    this._scale === me && (this._scale = new p(this, 0, 0)), "string" == typeof t && (t = parseFloat(t)), "number" == typeof t ? this._scale.set(t) : this._scale.copyFrom(t)
  }
  get origin() {
    return this._origin === ge && (this._origin = new p(this, 0, 0)), this._origin
  }
  set origin(t) {
    this._origin === ge && (this._origin = new p(this, 0, 0), this._pivot !== fe && Bt("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")), "number" == typeof t ? this._origin.set(t) : this._origin.copyFrom(t)
  }
  get width() {
    return Math.abs(this.scale.x * this.getLocalBounds().width)
  }
  set width(t) {
    const e = this.getLocalBounds().width;
    this._setWidth(t, e)
  }
  get height() {
    return Math.abs(this.scale.y * this.getLocalBounds().height)
  }
  set height(t) {
    const e = this.getLocalBounds().height;
    this._setHeight(t, e)
  }
  getSize(t) {
    t || (t = {});
    const e = this.getLocalBounds();
    return t.width = Math.abs(this.scale.x * e.width), t.height = Math.abs(this.scale.y * e.height), t
  }
  setSize(t, e) {
    const r = this.getLocalBounds();
    "object" == typeof t ? (e = t.height ?? t.width, t = t.width) : e ?? (e = t), void 0 !== t && this._setWidth(t, r.width), void 0 !== e && this._setHeight(e, r.height)
  }
  _updateSkew() {
    const t = this._rotation,
      e = this._skew;
    this._cx = Math.cos(t + e._y), this._sx = Math.sin(t + e._y), this._cy = -Math.sin(t - e._x), this._sy = Math.cos(t - e._x)
  }
  updateTransform(t) {
    return this.position.set("number" == typeof t.x ? t.x : this.position.x, "number" == typeof t.y ? t.y : this.position.y), this.scale.set("number" == typeof t.scaleX ? t.scaleX || 1 : this.scale.x, "number" == typeof t.scaleY ? t.scaleY || 1 : this.scale.y), this.rotation = "number" == typeof t.rotation ? t.rotation : this.rotation, this.skew.set("number" == typeof t.skewX ? t.skewX : this.skew.x, "number" == typeof t.skewY ? t.skewY : this.skew.y), this.pivot.set("number" == typeof t.pivotX ? t.pivotX : this.pivot.x, "number" == typeof t.pivotY ? t.pivotY : this.pivot.y), this.origin.set("number" == typeof t.originX ? t.originX : this.origin.x, "number" == typeof t.originY ? t.originY : this.origin.y), this
  }
  setFromMatrix(t) {
    t.decompose(this)
  }
  updateLocalTransform() {
    const t = this._didContainerChangeTick;
    if (this._didLocalTransformChangeId === t) return;
    this._didLocalTransformChangeId = t;
    const e = this.localTransform,
      r = this._scale,
      s = this._pivot,
      i = this._origin,
      n = this._position,
      o = r._x,
      a = r._y,
      h = s._x,
      l = s._y,
      u = -i._x,
      c = -i._y;
    e.a = this._cx * o, e.b = this._sx * o, e.c = this._cy * a, e.d = this._sy * a, e.tx = n._x - (h * e.a + l * e.c) + (u * e.a + c * e.c) - u * o, e.ty = n._y - (h * e.b + l * e.d) + (u * e.b + c * e.d) - c * a
  }
  set alpha(t) {
    t !== this.localAlpha && (this.localAlpha = t, this._updateFlags |= 1, this._onUpdate())
  }
  get alpha() {
    return this.localAlpha
  }
  set tint(t) {
    const e = At.shared.setValue(t ?? 16777215).toBgrNumber();
    e !== this.localColor && (this.localColor = e, this._updateFlags |= 1, this._onUpdate())
  }
  get tint() {
    return Qt(this.localColor)
  }
  set blendMode(t) {
    this.localBlendMode !== t && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= 2, this.localBlendMode = t, this._onUpdate())
  }
  get blendMode() {
    return this.localBlendMode
  }
  get visible() {
    return !!(2 & this.localDisplayStatus)
  }
  set visible(t) {
    const e = t ? 2 : 0;
    (2 & this.localDisplayStatus) !== e && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= 4, this.localDisplayStatus ^= 2, this._onUpdate())
  }
  get culled() {
    return !(4 & this.localDisplayStatus)
  }
  set culled(t) {
    const e = t ? 0 : 4;
    (4 & this.localDisplayStatus) !== e && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= 4, this.localDisplayStatus ^= 4, this._onUpdate())
  }
  get renderable() {
    return !!(1 & this.localDisplayStatus)
  }
  set renderable(t) {
    const e = t ? 1 : 0;
    (1 & this.localDisplayStatus) !== e && (this._updateFlags |= 4, this.localDisplayStatus ^= 1, this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._onUpdate())
  }
  get isRenderable() {
    return 7 === this.localDisplayStatus && this.groupAlpha > 0
  }
  destroy(t = !1) {
    var e;
    if (this.destroyed) return;
    let r;
    if (this.destroyed = !0, this.children.length && (r = this.removeChildren(0, this.children.length)), this.removeFromParent(), this.parent = null, this._maskEffect = null, this._filterEffect = null, this.effects = null, this._position = null, this._scale = null, this._pivot = null, this._origin = null, this._skew = null, this.emit("destroyed", this), this.removeAllListeners(), ("boolean" == typeof t ? t : null == t ? void 0 : t.children) && r)
      for (let s = 0; s < r.length; ++s) r[s].destroy(t);
    null == (e = this.renderGroup) || e.destroy(), this.renderGroup = null
  }
}
u.mixin(_e, Ut, Xt, he, ne, ie, Nt, zt, oe, {
  cullArea: null,
  cullable: !1,
  cullableChildren: !0
}, It, Jt, Ot);
class xe extends _e {
  constructor(t) {
    super(t), this.canBundle = !0, this.allowChildren = !1, this._roundPixels = 0, this._lastUsed = -1, this._gpuData = Object.create(null), this._bounds = new tt(0, 1, 0, 0), this._boundsDirty = !0
  }
  get bounds() {
    return this._boundsDirty ? (this.updateBounds(), this._boundsDirty = !1, this._bounds) : this._bounds
  }
  get roundPixels() {
    return !!this._roundPixels
  }
  set roundPixels(t) {
    this._roundPixels = t ? 1 : 0
  }
  containsPoint(t) {
    const e = this.bounds,
      {
        x: r,
        y: s
      } = t;
    return r >= e.minX && r <= e.maxX && s >= e.minY && s <= e.maxY
  }
  onViewUpdate() {
    if (this._didViewChangeTick++, this._boundsDirty = !0, this.didViewUpdate) return;
    this.didViewUpdate = !0;
    const t = this.renderGroup || this.parentRenderGroup;
    t && t.onChildViewUpdate(this)
  }
  destroy(t) {
    var e, r;
    super.destroy(t), this._bounds = null;
    for (const s in this._gpuData) null == (r = (e = this._gpuData[s]).destroy) || r.call(e);
    this._gpuData = null
  }
  collectRenderablesSimple(t, e, r) {
    const {
      renderPipes: s
    } = e;
    s.blendMode.setBlendMode(this, this.groupBlendMode, t), s[this.renderPipeId].addRenderable(this, t), this.didViewUpdate = !1;
    const i = this.children,
      n = i.length;
    for (let o = 0; o < n; o++) i[o].collectRenderables(t, e, r)
  }
}
class ye extends xe {
  constructor(t = Z.EMPTY) {
    t instanceof Z && (t = {
      texture: t
    });
    const {
      texture: e = Z.EMPTY,
      anchor: r,
      roundPixels: s,
      width: i,
      height: n,
      ...o
    } = t;
    super({
      label: "Sprite",
      ...o
    }), this.renderPipeId = "sprite", this.batched = !0, this._visualBounds = {
      minX: 0,
      maxX: 1,
      minY: 0,
      maxY: 0
    }, this._anchor = new p({
      _onUpdate: () => {
        this.onViewUpdate()
      }
    }), r ? this.anchor = r : e.defaultAnchor && (this.anchor = e.defaultAnchor), this.texture = e, this.allowChildren = !1, this.roundPixels = s ?? !1, void 0 !== i && (this.width = i), void 0 !== n && (this.height = n)
  }
  static from(t, e = !1) {
    return new ye(t instanceof Z ? t : Z.from(t, e))
  }
  set texture(t) {
    t || (t = Z.EMPTY);
    const e = this._texture;
    e !== t && (e && e.dynamic && e.off("update", this.onViewUpdate, this), t.dynamic && t.on("update", this.onViewUpdate, this), this._texture = t, this._width && this._setWidth(this._width, this._texture.orig.width), this._height && this._setHeight(this._height, this._texture.orig.height), this.onViewUpdate())
  }
  get texture() {
    return this._texture
  }
  get visualBounds() {
    return Q(this._visualBounds, this._anchor, this._texture), this._visualBounds
  }
  get sourceBounds() {
    return D("8.6.1", "Sprite.sourceBounds is deprecated, use visualBounds instead."), this.visualBounds
  }
  updateBounds() {
    const t = this._anchor,
      e = this._texture,
      r = this._bounds,
      {
        width: s,
        height: i
      } = e.orig;
    r.minX = -t._x * s, r.maxX = r.minX + s, r.minY = -t._y * i, r.maxY = r.minY + i
  }
  destroy(t = !1) {
    if (super.destroy(t), "boolean" == typeof t ? t : null == t ? void 0 : t.texture) {
      const e = "boolean" == typeof t ? t : null == t ? void 0 : t.textureSource;
      this._texture.destroy(e)
    }
    this._texture = null, this._visualBounds = null, this._bounds = null, this._anchor = null, this._gpuData = null
  }
  get anchor() {
    return this._anchor
  }
  set anchor(t) {
    "number" == typeof t ? this._anchor.set(t) : this._anchor.copyFrom(t)
  }
  get width() {
    return Math.abs(this.scale.x) * this._texture.orig.width
  }
  set width(t) {
    this._setWidth(t, this._texture.orig.width), this._width = t
  }
  get height() {
    return Math.abs(this.scale.y) * this._texture.orig.height
  }
  set height(t) {
    this._setHeight(t, this._texture.orig.height), this._height = t
  }
  getSize(t) {
    return t || (t = {}), t.width = Math.abs(this.scale.x) * this._texture.orig.width, t.height = Math.abs(this.scale.y) * this._texture.orig.height, t
  }
  setSize(t, e) {
    "object" == typeof t ? (e = t.height ?? t.width, t = t.width) : e ?? (e = t), void 0 !== t && this._setWidth(t, this._texture.orig.width), void 0 !== e && this._setHeight(e, this._texture.orig.height)
  }
}
const be = new tt;

function ve(t, e, r) {
  const s = be;
  t.measurable = !0, Yt(t, r, s), e.addBoundsMask(s), t.measurable = !1
}

function Te(t, e, r) {
  const s = Wt.get();
  t.measurable = !0;
  const i = Ht.get().identity();
  te(t, s, Se(t, r, i)), t.measurable = !1, e.addBoundsMask(s), Ht.return(i), Wt.return(s)
}

function Se(t, e, r) {
  return t ? (t !== e && (Se(t.parent, e, r), t.updateLocalTransform(), r.append(t.localTransform)), r) : (Bt("Mask bounds, renderable is not inside the root container"), r)
}
class we {
  constructor(t) {
    this.priority = 0, this.inverse = !1, this.pipe = "alphaMask", (null == t ? void 0 : t.mask) && this.init(t.mask)
  }
  init(t) {
    this.mask = t, this.renderMaskToTexture = !(t instanceof ye), this.mask.renderable = this.renderMaskToTexture, this.mask.includeInBuild = !this.renderMaskToTexture, this.mask.measurable = !1
  }
  reset() {
    this.mask.measurable = !0, this.mask = null
  }
  addBounds(t, e) {
    this.inverse || ve(this.mask, t, e)
  }
  addLocalBounds(t, e) {
    Te(this.mask, t, e)
  }
  containsPoint(t, e) {
    return e(this.mask, t)
  }
  destroy() {
    this.reset()
  }
  static test(t) {
    return t instanceof ye
  }
}
we.extension = a.MaskEffect;
class Ee {
  constructor(t) {
    this.priority = 0, this.pipe = "colorMask", (null == t ? void 0 : t.mask) && this.init(t.mask)
  }
  init(t) {
    this.mask = t
  }
  destroy() {}
  static test(t) {
    return "number" == typeof t
  }
}
Ee.extension = a.MaskEffect;
class Ce {
  constructor(t) {
    this.priority = 0, this.pipe = "stencilMask", (null == t ? void 0 : t.mask) && this.init(t.mask)
  }
  init(t) {
    this.mask = t, this.mask.includeInBuild = !1, this.mask.measurable = !1
  }
  reset() {
    this.mask.measurable = !0, this.mask.includeInBuild = !0, this.mask = null
  }
  addBounds(t, e) {
    ve(this.mask, t, e)
  }
  addLocalBounds(t, e) {
    Te(this.mask, t, e)
  }
  containsPoint(t, e) {
    return e(this.mask, t)
  }
  destroy() {
    this.reset()
  }
  static test(t) {
    return t instanceof _e
  }
}
Ce.extension = a.MaskEffect;
let Pe = {
  createCanvas: (t, e) => {
    const r = document.createElement("canvas");
    return r.width = t, r.height = e, r
  },
  getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
  getWebGLRenderingContext: () => WebGLRenderingContext,
  getNavigator: () => navigator,
  getBaseUrl: () => document.baseURI ?? window.location.href,
  getFontFaceSet: () => document.fonts,
  fetch: (t, e) => fetch(t, e),
  parseXML: t => (new DOMParser).parseFromString(t, "text/xml")
};
const Me = {
  get: () => Pe,
  set(t) {
    Pe = t
  }
};
class Ae extends $ {
  constructor(t) {
    t.resource || (t.resource = Me.get().createCanvas()), t.width || (t.width = t.resource.width, t.autoDensity || (t.width /= t.resolution)), t.height || (t.height = t.resource.height, t.autoDensity || (t.height /= t.resolution)), super(t), this.uploadMethodId = "image", this.autoDensity = t.autoDensity, this.resizeCanvas(), this.transparent = !!t.transparent
  }
  resizeCanvas() {
    this.autoDensity && "style" in this.resource && (this.resource.style.width = `${this.width}px`, this.resource.style.height = `${this.height}px`), this.resource.width === this.pixelWidth && this.resource.height === this.pixelHeight || (this.resource.width = this.pixelWidth, this.resource.height = this.pixelHeight)
  }
  resize(t = this.width, e = this.height, r = this._resolution) {
    const s = super.resize(t, e, r);
    return s && this.resizeCanvas(), s
  }
  static test(t) {
    return globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement || globalThis.OffscreenCanvas && t instanceof OffscreenCanvas
  }
  get context2D() {
    return this._context2D || (this._context2D = this.resource.getContext("2d"))
  }
}
Ae.extension = a.TextureSource;
class Re extends $ {
  constructor(t) {
    super(t), this.uploadMethodId = "image", this.autoGarbageCollect = !0
  }
  static test(t) {
    return globalThis.HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap || globalThis.VideoFrame && t instanceof VideoFrame
  }
}
Re.extension = a.TextureSource;
var Be = (t => (t[t.INTERACTION = 50] = "INTERACTION", t[t.HIGH = 25] = "HIGH", t[t.NORMAL = 0] = "NORMAL", t[t.LOW = -25] = "LOW", t[t.UTILITY = -50] = "UTILITY", t))(Be || {});
class ke {
  constructor(t, e = null, r = 0, s = !1) {
    this.next = null, this.previous = null, this._destroyed = !1, this._fn = t, this._context = e, this.priority = r, this._once = s
  }
  match(t, e = null) {
    return this._fn === t && this._context === e
  }
  emit(t) {
    this._fn && (this._context ? this._fn.call(this._context, t) : this._fn(t));
    const e = this.next;
    return this._once && this.destroy(!0), this._destroyed && (this.next = null), e
  }
  connect(t) {
    this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this
  }
  destroy(t = !1) {
    this._destroyed = !0, this._fn = null, this._context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
    const e = this.next;
    return this.next = t ? null : e, this.previous = null, e
  }
}
const Ge = class t {
  constructor() {
    this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new ke(null, null, 1 / 0), this.deltaMS = 1 / t.targetFPMS, this.elapsedMS = 1 / t.targetFPMS, this._tick = t => {
      this._requestId = null, this.started && (this.update(t), this.started && null === this._requestId && this._head.next && (this._requestId = requestAnimationFrame(this._tick)))
    }
  }
  _requestIfNeeded() {
    null === this._requestId && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick))
  }
  _cancelIfNeeded() {
    null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
  }
  _startIfPossible() {
    this.started ? this._requestIfNeeded() : this.autoStart && this.start()
  }
  add(t, e, r = Be.NORMAL) {
    return this._addListener(new ke(t, e, r))
  }
  addOnce(t, e, r = Be.NORMAL) {
    return this._addListener(new ke(t, e, r, !0))
  }
  _addListener(t) {
    let e = this._head.next,
      r = this._head;
    if (e) {
      for (; e;) {
        if (t.priority > e.priority) {
          t.connect(r);
          break
        }
        r = e, e = e.next
      }
      t.previous || t.connect(r)
    } else t.connect(r);
    return this._startIfPossible(), this
  }
  remove(t, e) {
    let r = this._head.next;
    for (; r;) r = r.match(t, e) ? r.destroy() : r.next;
    return this._head.next || this._cancelIfNeeded(), this
  }
  get count() {
    if (!this._head) return 0;
    let t = 0,
      e = this._head;
    for (; e = e.next;) t++;
    return t
  }
  start() {
    this.started || (this.started = !0, this._requestIfNeeded())
  }
  stop() {
    this.started && (this.started = !1, this._cancelIfNeeded())
  }
  destroy() {
    if (!this._protected) {
      this.stop();
      let t = this._head.next;
      for (; t;) t = t.destroy(!0);
      this._head.destroy(), this._head = null
    }
  }
  update(e = performance.now()) {
    let r;
    if (e > this.lastTime) {
      if (r = this.elapsedMS = e - this.lastTime, r > this._maxElapsedMS && (r = this._maxElapsedMS), r *= this.speed, this._minElapsedMS) {
        const t = e - this._lastFrame | 0;
        if (t < this._minElapsedMS) return;
        this._lastFrame = e - t % this._minElapsedMS
      }
      this.deltaMS = r, this.deltaTime = this.deltaMS * t.targetFPMS;
      const s = this._head;
      let i = s.next;
      for (; i;) i = i.emit(this);
      s.next || this._cancelIfNeeded()
    } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
    this.lastTime = e
  }
  get FPS() {
    return 1e3 / this.elapsedMS
  }
  get minFPS() {
    return 1e3 / this._maxElapsedMS
  }
  set minFPS(e) {
    const r = Math.min(this.maxFPS, e),
      s = Math.min(Math.max(0, r) / 1e3, t.targetFPMS);
    this._maxElapsedMS = 1 / s
  }
  get maxFPS() {
    return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
  }
  set maxFPS(t) {
    if (0 === t) this._minElapsedMS = 0;
    else {
      const e = Math.max(this.minFPS, t);
      this._minElapsedMS = 1 / (e / 1e3)
    }
  }
  static get shared() {
    if (!t._shared) {
      const e = t._shared = new t;
      e.autoStart = !0, e._protected = !0
    }
    return t._shared
  }
  static get system() {
    if (!t._system) {
      const e = t._system = new t;
      e.autoStart = !0, e._protected = !0
    }
    return t._system
  }
};
Ge.targetFPMS = .06;
let Ie, Fe = Ge;
const Ue = class t extends $ {
  constructor(e) {
    super(e), this.isReady = !1, this.uploadMethodId = "video", e = {
      ...t.defaultOptions,
      ...e
    }, this._autoUpdate = !0, this._isConnectedToTicker = !1, this._updateFPS = e.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = !1 !== e.autoPlay, this.alphaMode = e.alphaMode ?? "premultiply-alpha-on-upload", this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this), this._videoFrameRequestCallbackHandle = null, this._load = null, this._resolve = null, this._reject = null, this._onCanPlay = this._onCanPlay.bind(this), this._onCanPlayThrough = this._onCanPlayThrough.bind(this), this._onError = this._onError.bind(this), this._onPlayStart = this._onPlayStart.bind(this), this._onPlayStop = this._onPlayStop.bind(this), this._onSeeked = this._onSeeked.bind(this), !1 !== e.autoLoad && this.load()
  }
  updateFrame() {
    if (!this.destroyed) {
      if (this._updateFPS) {
        const t = Fe.shared.elapsedMS * this.resource.playbackRate;
        this._msToNextUpdate = Math.floor(this._msToNextUpdate - t)
      }(!this._updateFPS || this._msToNextUpdate <= 0) && (this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0), this.isValid && this.update()
    }
  }
  _videoFrameRequestCallback() {
    this.updateFrame(), this.destroyed ? this._videoFrameRequestCallbackHandle = null : this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)
  }
  get isValid() {
    return !!this.resource.videoWidth && !!this.resource.videoHeight
  }
  async load() {
    if (this._load) return this._load;
    const t = this.resource,
      e = this.options;
    return (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0), t.addEventListener("play", this._onPlayStart), t.addEventListener("pause", this._onPlayStop), t.addEventListener("seeked", this._onSeeked), this._isSourceReady() ? this._mediaReady() : (e.preload || t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlayThrough), t.addEventListener("error", this._onError, !0)), this.alphaMode = await async function() {
      return Ie ?? (Ie = (async () => {
        var t;
        const e = document.createElement("canvas").getContext("webgl");
        if (!e) return "premultiply-alpha-on-upload";
        const r = await new Promise(t => {
          const e = document.createElement("video");
          e.onloadeddata = () => t(e), e.onerror = () => t(null), e.autoplay = !1, e.crossOrigin = "anonymous", e.preload = "auto", e.src = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=", e.load()
        });
        if (!r) return "premultiply-alpha-on-upload";
        const s = e.createTexture();
        e.bindTexture(e.TEXTURE_2D, s);
        const i = e.createFramebuffer();
        e.bindFramebuffer(e.FRAMEBUFFER, i), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, s, 0), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.NONE), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, r);
        const n = new Uint8Array(4);
        return e.readPixels(0, 0, 1, 1, e.RGBA, e.UNSIGNED_BYTE, n), e.deleteFramebuffer(i), e.deleteTexture(s), null == (t = e.getExtension("WEBGL_lose_context")) || t.loseContext(), n[0] <= n[3] ? "premultiplied-alpha" : "premultiply-alpha-on-upload"
      })()), Ie
    }(), this._load = new Promise((r, s) => {
      this.isValid ? r(this) : (this._resolve = r, this._reject = s, void 0 !== e.preloadTimeoutMs && (this._preloadTimeout = setTimeout(() => {
        this._onError(new ErrorEvent(`Preload exceeded timeout of ${e.preloadTimeoutMs}ms`))
      })), t.load())
    }), this._load
  }
  _onError(t) {
    this.resource.removeEventListener("error", this._onError, !0), this.emit("error", t), this._reject && (this._reject(t), this._reject = null, this._resolve = null)
  }
  _isSourcePlaying() {
    const t = this.resource;
    return !t.paused && !t.ended
  }
  _isSourceReady() {
    return this.resource.readyState > 2
  }
  _onPlayStart() {
    this.isValid || this._mediaReady(), this._configureAutoUpdate()
  }
  _onPlayStop() {
    this._configureAutoUpdate()
  }
  _onSeeked() {
    this._autoUpdate && !this._isSourcePlaying() && (this._msToNextUpdate = 0, this.updateFrame(), this._msToNextUpdate = 0)
  }
  _onCanPlay() {
    this.resource.removeEventListener("canplay", this._onCanPlay), this._mediaReady()
  }
  _onCanPlayThrough() {
    this.resource.removeEventListener("canplaythrough", this._onCanPlay), this._preloadTimeout && (clearTimeout(this._preloadTimeout), this._preloadTimeout = void 0), this._mediaReady()
  }
  _mediaReady() {
    const t = this.resource;
    this.isValid && (this.isReady = !0, this.resize(t.videoWidth, t.videoHeight)), this._msToNextUpdate = 0, this.updateFrame(), this._msToNextUpdate = 0, this._resolve && (this._resolve(this), this._resolve = null, this._reject = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.resource.play()
  }
  destroy() {
    this._configureAutoUpdate();
    const t = this.resource;
    t && (t.removeEventListener("play", this._onPlayStart), t.removeEventListener("pause", this._onPlayStop), t.removeEventListener("seeked", this._onSeeked), t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlayThrough), t.removeEventListener("error", this._onError, !0), t.pause(), t.src = "", t.load()), super.destroy()
  }
  get autoUpdate() {
    return this._autoUpdate
  }
  set autoUpdate(t) {
    t !== this._autoUpdate && (this._autoUpdate = t, this._configureAutoUpdate())
  }
  get updateFPS() {
    return this._updateFPS
  }
  set updateFPS(t) {
    t !== this._updateFPS && (this._updateFPS = t, this._configureAutoUpdate())
  }
  _configureAutoUpdate() {
    this._autoUpdate && this._isSourcePlaying() ? !this._updateFPS && this.resource.requestVideoFrameCallback ? (this._isConnectedToTicker && (Fe.shared.remove(this.updateFrame, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0), null === this._videoFrameRequestCallbackHandle && (this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))) : (null !== this._videoFrameRequestCallbackHandle && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker || (Fe.shared.add(this.updateFrame, this), this._isConnectedToTicker = !0, this._msToNextUpdate = 0)) : (null !== this._videoFrameRequestCallbackHandle && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker && (Fe.shared.remove(this.updateFrame, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0))
  }
  static test(t) {
    return globalThis.HTMLVideoElement && t instanceof HTMLVideoElement
  }
};
Ue.extension = a.TextureSource, Ue.defaultOptions = {
  ...$.defaultOptions,
  autoLoad: !0,
  autoPlay: !0,
  updateFPS: 0,
  crossorigin: !0,
  loop: !1,
  muted: !0,
  playsinline: !0,
  preload: !1
}, Ue.MIME_TYPES = {
  ogv: "video/ogg",
  mov: "video/quicktime",
  m4v: "video/mp4"
};
let Oe = Ue;
const De = (t, e, r = !1) => (Array.isArray(t) || (t = [t]), e ? t.map(t => "string" == typeof t || r ? e(t) : t) : t),
  Le = new class {
    constructor() {
      this._parsers = [], this._cache = new Map, this._cacheMap = new Map
    }
    reset() {
      this._cacheMap.clear(), this._cache.clear()
    }
    has(t) {
      return this._cache.has(t)
    }
    get(t) {
      const e = this._cache.get(t);
      return e || Bt(`[Assets] Asset id ${t} was not found in the Cache`), e
    }
    set(t, e) {
      const r = De(t);
      let s;
      for (let a = 0; a < this.parsers.length; a++) {
        const t = this.parsers[a];
        if (t.test(e)) {
          s = t.getCacheableAssets(r, e);
          break
        }
      }
      const i = new Map(Object.entries(s || {}));
      s || r.forEach(t => {
        i.set(t, e)
      });
      const n = [...i.keys()],
        o = {
          cacheKeys: n,
          keys: r
        };
      r.forEach(t => {
        this._cacheMap.set(t, o)
      }), n.forEach(t => {
        const r = s ? s[t] : e;
        this._cache.has(t) && this._cache.get(t) !== r && Bt("[Cache] already has key:", t), this._cache.set(t, i.get(t))
      })
    }
    remove(t) {
      if (!this._cacheMap.has(t)) return void Bt(`[Assets] Asset id ${t} was not found in the Cache`);
      const e = this._cacheMap.get(t);
      e.cacheKeys.forEach(t => {
        this._cache.delete(t)
      }), e.keys.forEach(t => {
        this._cacheMap.delete(t)
      })
    }
    get parsers() {
      return this._parsers
    }
  },
  Ne = [];

function ze(t = {}) {
  const e = t && t.resource,
    r = e ? t.resource : t,
    s = e ? t : {
      resource: t
    };
  for (let i = 0; i < Ne.length; i++) {
    const t = Ne[i];
    if (t.test(r)) return new t(s)
  }
  throw new Error(`Could not find a source type for resource: ${s.resource}`)
}
u.handleByList(a.TextureSource, Ne), Z.from = function(t, e = !1) {
  return "string" == typeof t ? Le.get(t) : t instanceof $ ? new Z({
    source: t
  }) : function(t = {}, e = !1) {
    const r = t && t.resource,
      s = r ? t.resource : t,
      i = r ? t : {
        resource: t
      };
    if (!e && Le.has(s)) return Le.get(s);
    const n = new Z({
      source: ze(i)
    });
    return n.on("destroy", () => {
      Le.has(s) && Le.remove(s)
    }), e || Le.set(s, n), n
  }(t, e)
}, $.from = ze, u.add(we, Ee, Ce, Oe, Re, Ae, j);
var He = (t => (t[t.Low = 0] = "Low", t[t.Normal = 1] = "Normal", t[t.High = 2] = "High", t))(He || {});

function We(t) {
  if ("string" != typeof t) throw new TypeError(`Path must be a string. Received ${JSON.stringify(t)}`)
}

function Ve(t) {
  return t.split("?")[0].split("#")[0]
}
const Xe = {
  toPosix: t => t.replace(new RegExp("\\".replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "/"),
  isUrl(t) {
    return /^https?:/.test(this.toPosix(t))
  },
  isDataUrl: t => /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(t),
  isBlobUrl: t => t.startsWith("blob:"),
  hasProtocol(t) {
    return /^[^/:]+:/.test(this.toPosix(t))
  },
  getProtocol(t) {
    We(t), t = this.toPosix(t);
    const e = /^file:\/\/\//.exec(t);
    if (e) return e[0];
    const r = /^[^/:]+:\/{0,2}/.exec(t);
    return r ? r[0] : ""
  },
  toAbsolute(t, e, r) {
    if (We(t), this.isDataUrl(t) || this.isBlobUrl(t)) return t;
    const s = Ve(this.toPosix(e ?? Me.get().getBaseUrl())),
      i = Ve(this.toPosix(r ?? this.rootname(s)));
    return (t = this.toPosix(t)).startsWith("/") ? Xe.join(i, t.slice(1)) : this.isAbsolute(t) ? t : this.join(s, t)
  },
  normalize(t) {
    if (We(t), 0 === t.length) return ".";
    if (this.isDataUrl(t) || this.isBlobUrl(t)) return t;
    let e = "";
    const r = (t = this.toPosix(t)).startsWith("/");
    this.hasProtocol(t) && (e = this.rootname(t), t = t.slice(e.length));
    const s = t.endsWith("/");
    return (t = function(t) {
      let e = "",
        r = 0,
        s = -1,
        i = 0,
        n = -1;
      for (let o = 0; o <= t.length; ++o) {
        if (o < t.length) n = t.charCodeAt(o);
        else {
          if (47 === n) break;
          n = 47
        }
        if (47 === n) {
          if (s === o - 1 || 1 === i);
          else if (s !== o - 1 && 2 === i) {
            if (e.length < 2 || 2 !== r || 46 !== e.charCodeAt(e.length - 1) || 46 !== e.charCodeAt(e.length - 2))
              if (e.length > 2) {
                const t = e.lastIndexOf("/");
                if (t !== e.length - 1) {
                  -1 === t ? (e = "", r = 0) : (e = e.slice(0, t), r = e.length - 1 - e.lastIndexOf("/")), s = o, i = 0;
                  continue
                }
              } else if (2 === e.length || 1 === e.length) {
              e = "", r = 0, s = o, i = 0;
              continue
            }
          } else e.length > 0 ? e += `/${t.slice(s+1,o)}` : e = t.slice(s + 1, o), r = o - s - 1;
          s = o, i = 0
        } else 46 === n && -1 !== i ? ++i : i = -1
      }
      return e
    }(t)).length > 0 && s && (t += "/"), r ? `/${t}` : e + t
  },
  isAbsolute(t) {
    return We(t), t = this.toPosix(t), !!this.hasProtocol(t) || t.startsWith("/")
  },
  join(...t) {
    if (0 === t.length) return ".";
    let e;
    for (let r = 0; r < t.length; ++r) {
      const s = t[r];
      if (We(s), s.length > 0)
        if (void 0 === e) e = s;
        else {
          const i = t[r - 1] ?? "";
          this.joinExtensions.includes(this.extname(i).toLowerCase()) ? e += `/../${s}` : e += `/${s}`
        }
    }
    return void 0 === e ? "." : this.normalize(e)
  },
  dirname(t) {
    if (We(t), 0 === t.length) return ".";
    let e = (t = this.toPosix(t)).charCodeAt(0);
    const r = 47 === e;
    let s = -1,
      i = !0;
    const n = this.getProtocol(t),
      o = t;
    for (let a = (t = t.slice(n.length)).length - 1; a >= 1; --a)
      if (e = t.charCodeAt(a), 47 === e) {
        if (!i) {
          s = a;
          break
        }
      } else i = !1;
    return -1 === s ? r ? "/" : this.isUrl(o) ? n + t : n : r && 1 === s ? "//" : n + t.slice(0, s)
  },
  rootname(t) {
    We(t);
    let e = "";
    if (e = (t = this.toPosix(t)).startsWith("/") ? "/" : this.getProtocol(t), this.isUrl(t)) {
      const r = t.indexOf("/", e.length);
      e = -1 !== r ? t.slice(0, r) : t, e.endsWith("/") || (e += "/")
    }
    return e
  },
  basename(t, e) {
    We(t), e && We(e), t = Ve(this.toPosix(t));
    let r, s = 0,
      i = -1,
      n = !0;
    if (void 0 !== e && e.length > 0 && e.length <= t.length) {
      if (e.length === t.length && e === t) return "";
      let o = e.length - 1,
        a = -1;
      for (r = t.length - 1; r >= 0; --r) {
        const h = t.charCodeAt(r);
        if (47 === h) {
          if (!n) {
            s = r + 1;
            break
          }
        } else - 1 === a && (n = !1, a = r + 1), o >= 0 && (h === e.charCodeAt(o) ? -1 === --o && (i = r) : (o = -1, i = a))
      }
      return s === i ? i = a : -1 === i && (i = t.length), t.slice(s, i)
    }
    for (r = t.length - 1; r >= 0; --r)
      if (47 === t.charCodeAt(r)) {
        if (!n) {
          s = r + 1;
          break
        }
      } else - 1 === i && (n = !1, i = r + 1);
    return -1 === i ? "" : t.slice(s, i)
  },
  extname(t) {
    We(t);
    let e = -1,
      r = 0,
      s = -1,
      i = !0,
      n = 0;
    for (let o = (t = Ve(this.toPosix(t))).length - 1; o >= 0; --o) {
      const a = t.charCodeAt(o);
      if (47 !== a) - 1 === s && (i = !1, s = o + 1), 46 === a ? -1 === e ? e = o : 1 !== n && (n = 1) : -1 !== e && (n = -1);
      else if (!i) {
        r = o + 1;
        break
      }
    }
    return -1 === e || -1 === s || 0 === n || 1 === n && e === s - 1 && e === r + 1 ? "" : t.slice(e, s)
  },
  parse(t) {
    We(t);
    const e = {
      root: "",
      dir: "",
      base: "",
      ext: "",
      name: ""
    };
    if (0 === t.length) return e;
    let r = (t = Ve(this.toPosix(t))).charCodeAt(0);
    const s = this.isAbsolute(t);
    let i;
    e.root = this.rootname(t), i = s || this.hasProtocol(t) ? 1 : 0;
    let n = -1,
      o = 0,
      a = -1,
      h = !0,
      l = t.length - 1,
      u = 0;
    for (; l >= i; --l)
      if (r = t.charCodeAt(l), 47 !== r) - 1 === a && (h = !1, a = l + 1), 46 === r ? -1 === n ? n = l : 1 !== u && (u = 1) : -1 !== n && (u = -1);
      else if (!h) {
      o = l + 1;
      break
    }
    return -1 === n || -1 === a || 0 === u || 1 === u && n === a - 1 && n === o + 1 ? -1 !== a && (e.base = e.name = 0 === o && s ? t.slice(1, a) : t.slice(o, a)) : (0 === o && s ? (e.name = t.slice(1, n), e.base = t.slice(1, a)) : (e.name = t.slice(o, n), e.base = t.slice(o, a)), e.ext = t.slice(n, a)), e.dir = this.dirname(t), e
  },
  sep: "/",
  delimiter: ":",
  joinExtensions: [".html"]
};

function Ye(t, e, r, s, i) {
  const n = e[r];
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    r < e.length - 1 ? Ye(t.replace(s[r], a), e, r + 1, s, i) : i.push(t.replace(s[r], a))
  }
}

function $e(t) {
  const e = t.match(/\{(.*?)\}/g),
    r = [];
  if (e) {
    const s = [];
    e.forEach(t => {
      const e = t.substring(1, t.length - 1).split(",");
      s.push(e)
    }), Ye(t, s, 0, e, r)
  } else r.push(t);
  return r
}
const je = t => !Array.isArray(t);
class qe {
  constructor() {
    this._defaultBundleIdentifierOptions = {
      connector: "-",
      createBundleAssetId: (t, e) => `${t}${this._bundleIdConnector}${e}`,
      extractAssetIdFromBundle: (t, e) => e.replace(`${t}${this._bundleIdConnector}`, "")
    }, this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector, this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId, this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle, this._assetMap = {}, this._preferredOrder = [], this._parsers = [], this._resolverHash = {}, this._bundles = {}
  }
  setBundleIdentifier(t) {
    if (this._bundleIdConnector = t.connector ?? this._bundleIdConnector, this._createBundleAssetId = t.createBundleAssetId ?? this._createBundleAssetId, this._extractAssetIdFromBundle = t.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle, "bar" !== this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar"))) throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")
  }
  prefer(...t) {
    t.forEach(t => {
      this._preferredOrder.push(t), t.priority || (t.priority = Object.keys(t.params))
    }), this._resolverHash = {}
  }
  set basePath(t) {
    this._basePath = t
  }
  get basePath() {
    return this._basePath
  }
  set rootPath(t) {
    this._rootPath = t
  }
  get rootPath() {
    return this._rootPath
  }
  get parsers() {
    return this._parsers
  }
  reset() {
    this.setBundleIdentifier(this._defaultBundleIdentifierOptions), this._assetMap = {}, this._preferredOrder = [], this._resolverHash = {}, this._rootPath = null, this._basePath = null, this._manifest = null, this._bundles = {}, this._defaultSearchParams = null
  }
  setDefaultSearchParams(t) {
    if ("string" == typeof t) this._defaultSearchParams = t;
    else {
      const e = t;
      this._defaultSearchParams = Object.keys(e).map(t => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&")
    }
  }
  getAlias(t) {
    const {
      alias: e,
      src: r
    } = t;
    return De(e || r, t => "string" == typeof t ? t : Array.isArray(t) ? t.map(t => (null == t ? void 0 : t.src) ?? t) : (null == t ? void 0 : t.src) ? t.src : t, !0)
  }
  addManifest(t) {
    this._manifest && Bt("[Resolver] Manifest already exists, this will be overwritten"), this._manifest = t, t.bundles.forEach(t => {
      this.addBundle(t.name, t.assets)
    })
  }
  addBundle(t, e) {
    const r = [];
    let s = e;
    Array.isArray(e) || (s = Object.entries(e).map(([t, e]) => "string" == typeof e || Array.isArray(e) ? {
      alias: t,
      src: e
    } : {
      alias: t,
      ...e
    })), s.forEach(e => {
      const s = e.src,
        i = e.alias;
      let n;
      if ("string" == typeof i) {
        const e = this._createBundleAssetId(t, i);
        r.push(e), n = [i, e]
      } else {
        const e = i.map(e => this._createBundleAssetId(t, e));
        r.push(...e), n = [...i, ...e]
      }
      this.add({
        ...e,
        alias: n,
        src: s
      })
    }), this._bundles[t] = r
  }
  add(t) {
    const e = [];
    let r;
    Array.isArray(t) ? e.push(...t) : e.push(t), r = t => {
      this.hasKey(t) && Bt(`[Resolver] already has key: ${t} overwriting`)
    }, De(e).forEach(t => {
      const {
        src: e
      } = t;
      let {
        data: s,
        format: i,
        loadParser: n
      } = t;
      const o = De(e).map(t => "string" == typeof t ? $e(t) : Array.isArray(t) ? t : [t]),
        a = this.getAlias(t);
      Array.isArray(a) ? a.forEach(r) : r(a);
      const h = [];
      o.forEach(t => {
        t.forEach(t => {
          let e = {};
          if ("object" != typeof t) {
            e.src = t;
            for (let r = 0; r < this._parsers.length; r++) {
              const s = this._parsers[r];
              if (s.test(t)) {
                e = s.parse(t);
                break
              }
            }
          } else s = t.data ?? s, i = t.format ?? i, n = t.loadParser ?? n, e = {
            ...e,
            ...t
          };
          if (!a) throw new Error(`[Resolver] alias is undefined for this asset: ${e.src}`);
          e = this._buildResolvedAsset(e, {
            aliases: a,
            data: s,
            format: i,
            loadParser: n
          }), h.push(e)
        })
      }), a.forEach(t => {
        this._assetMap[t] = h
      })
    })
  }
  resolveBundle(t) {
    const e = je(t);
    t = De(t);
    const r = {};
    return t.forEach(t => {
      const e = this._bundles[t];
      if (e) {
        const s = this.resolve(e),
          i = {};
        for (const e in s) {
          const r = s[e];
          i[this._extractAssetIdFromBundle(t, e)] = r
        }
        r[t] = i
      }
    }), e ? r[t[0]] : r
  }
  resolveUrl(t) {
    const e = this.resolve(t);
    if ("string" != typeof t) {
      const t = {};
      for (const r in e) t[r] = e[r].src;
      return t
    }
    return e.src
  }
  resolve(t) {
    const e = je(t);
    t = De(t);
    const r = {};
    return t.forEach(t => {
      if (!this._resolverHash[t])
        if (this._assetMap[t]) {
          let e = this._assetMap[t];
          const r = this._getPreferredOrder(e);
          null == r || r.priority.forEach(t => {
            r.params[t].forEach(r => {
              const s = e.filter(e => !!e[t] && e[t] === r);
              s.length && (e = s)
            })
          }), this._resolverHash[t] = e[0]
        } else this._resolverHash[t] = this._buildResolvedAsset({
          alias: [t],
          src: t
        }, {});
      r[t] = this._resolverHash[t]
    }), e ? r[t[0]] : r
  }
  hasKey(t) {
    return !!this._assetMap[t]
  }
  hasBundle(t) {
    return !!this._bundles[t]
  }
  _getPreferredOrder(t) {
    for (let e = 0; e < t.length; e++) {
      const r = t[e],
        s = this._preferredOrder.find(t => t.params.format.includes(r.format));
      if (s) return s
    }
    return this._preferredOrder[0]
  }
  _appendDefaultSearchParams(t) {
    return this._defaultSearchParams ? `${t}${/\?/.test(t)?"&":"?"}${this._defaultSearchParams}` : t
  }
  _buildResolvedAsset(t, e) {
    const {
      aliases: r,
      data: s,
      loadParser: i,
      format: n
    } = e;
    return (this._basePath || this._rootPath) && (t.src = Xe.toAbsolute(t.src, this._basePath, this._rootPath)), t.alias = r ?? t.alias ?? [t.src], t.src = this._appendDefaultSearchParams(t.src), t.data = {
      ...s || {},
      ...t.data
    }, t.loadParser = i ?? t.loadParser, t.format = n ?? t.format ?? t.src.split(".").pop().split("?").shift().split("#").shift(), t
  }
}
qe.RETINA_PREFIX = /@([0-9\.]+)x/;
const Ke = (t, e) => {
    const r = e.split("?")[1];
    return r && (t += `?${r}`), t
  },
  Ze = class t {
    constructor(t, e) {
      this.linkedSheets = [];
      let r = t;
      (null == t ? void 0 : t.source) instanceof $ && (r = {
        texture: t,
        data: e
      });
      const {
        texture: s,
        data: i,
        cachePrefix: n = ""
      } = r;
      this.cachePrefix = n, this._texture = s instanceof Z ? s : null, this.textureSource = s.source, this.textures = {}, this.animations = {}, this.data = i;
      const o = parseFloat(i.meta.scale);
      o ? (this.resolution = o, s.source.resolution = this.resolution) : this.resolution = s.source._resolution, this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null
    }
    parse() {
      return new Promise(e => {
        this._callback = e, this._batchIndex = 0, this._frameKeys.length <= t.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch()
      })
    }
    _processFrames(e) {
      let r = e;
      const s = t.BATCH_SIZE;
      for (; r - e < s && r < this._frameKeys.length;) {
        const t = this._frameKeys[r],
          e = this._frames[t],
          s = e.frame;
        if (s) {
          let r = null,
            i = null;
          const n = !1 !== e.trimmed && e.sourceSize ? e.sourceSize : e.frame,
            o = new G(0, 0, Math.floor(n.w) / this.resolution, Math.floor(n.h) / this.resolution);
          r = e.rotated ? new G(Math.floor(s.x) / this.resolution, Math.floor(s.y) / this.resolution, Math.floor(s.h) / this.resolution, Math.floor(s.w) / this.resolution) : new G(Math.floor(s.x) / this.resolution, Math.floor(s.y) / this.resolution, Math.floor(s.w) / this.resolution, Math.floor(s.h) / this.resolution), !1 !== e.trimmed && e.spriteSourceSize && (i = new G(Math.floor(e.spriteSourceSize.x) / this.resolution, Math.floor(e.spriteSourceSize.y) / this.resolution, Math.floor(s.w) / this.resolution, Math.floor(s.h) / this.resolution)), this.textures[t] = new Z({
            source: this.textureSource,
            frame: r,
            orig: o,
            trim: i,
            rotate: e.rotated ? 2 : 0,
            defaultAnchor: e.anchor,
            defaultBorders: e.borders,
            label: t.toString()
          })
        }
        r++
      }
    }
    _processAnimations() {
      const t = this.data.animations || {};
      for (const e in t) {
        this.animations[e] = [];
        for (let r = 0; r < t[e].length; r++) {
          const s = t[e][r];
          this.animations[e].push(this.textures[s])
        }
      }
    }
    _parseComplete() {
      const t = this._callback;
      this._callback = null, this._batchIndex = 0, t.call(this, this.textures)
    }
    _nextBatch() {
      this._processFrames(this._batchIndex * t.BATCH_SIZE), this._batchIndex++, setTimeout(() => {
        this._batchIndex * t.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(), this._parseComplete())
      }, 0)
    }
    destroy(t = !1) {
      var e;
      for (const r in this.textures) this.textures[r].destroy();
      this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && (null == (e = this._texture) || e.destroy(), this.textureSource.destroy()), this._texture = null, this.textureSource = null, this.linkedSheets = []
    }
  };
Ze.BATCH_SIZE = 1e3;
let Qe = Ze;
const Je = ["jpg", "png", "jpeg", "avif", "webp", "basis", "etc2", "bc7", "bc6h", "bc5", "bc4", "bc3", "bc2", "bc1", "eac", "astc"];

function tr(t, e, r) {
  const s = {};
  if (t.forEach(t => {
      s[t] = e
    }), Object.keys(e.textures).forEach(t => {
      s[`${e.cachePrefix}${t}`] = e.textures[t]
    }), !r) {
    const r = Xe.dirname(t[0]);
    e.linkedSheets.forEach((t, i) => {
      const n = tr([`${r}/${e.data.meta.related_multi_packs[i]}`], t, !0);
      Object.assign(s, n)
    })
  }
  return s
}
const er = {
  extension: a.Asset,
  cache: {
    test: t => t instanceof Qe,
    getCacheableAssets: (t, e) => tr(t, e, !1)
  },
  resolver: {
    extension: {
      type: a.ResolveParser,
      name: "resolveSpritesheet"
    },
    test: t => {
      const e = t.split("?")[0].split("."),
        r = e.pop(),
        s = e.pop();
      return "json" === r && Je.includes(s)
    },
    parse: t => {
      var e;
      const r = t.split(".");
      return {
        resolution: parseFloat((null == (e = qe.RETINA_PREFIX.exec(t)) ? void 0 : e[1]) ?? "1"),
        format: r[r.length - 2],
        src: t
      }
    }
  },
  loader: {
    name: "spritesheetLoader",
    extension: {
      type: a.LoadParser,
      priority: He.Normal,
      name: "spritesheetLoader"
    },
    testParse: async (t, e) => ".json" === Xe.extname(e.src).toLowerCase() && !!t.frames,
    async parse(t, e, r) {
      var s, i;
      const {
        texture: n,
        imageFilename: o,
        textureOptions: a,
        cachePrefix: h
      } = (null == e ? void 0 : e.data) ?? {};
      let l, u = Xe.dirname(e.src);
      if (u && u.lastIndexOf("/") !== u.length - 1 && (u += "/"), n instanceof Z) l = n;
      else {
        const s = Ke(u + (o ?? t.meta.image), e.src);
        l = (await r.load([{
          src: s,
          data: a
        }]))[s]
      }
      const c = new Qe({
        texture: l.source,
        data: t,
        cachePrefix: h
      });
      await c.parse();
      const d = null == (s = null == t ? void 0 : t.meta) ? void 0 : s.related_multi_packs;
      if (Array.isArray(d)) {
        const t = [];
        for (const n of d) {
          if ("string" != typeof n) continue;
          let s = u + n;
          (null == (i = e.data) ? void 0 : i.ignoreMultiPack) || (s = Ke(s, e.src), t.push(r.load({
            src: s,
            data: {
              textureOptions: a,
              ignoreMultiPack: !0
            }
          })))
        }
        const s = await Promise.all(t);
        c.linkedSheets = s, s.forEach(t => {
          t.linkedSheets = [c].concat(c.linkedSheets.filter(e => e !== t))
        })
      }
      return c
    },
    async unload(t, e, r) {
      await r.unload(t.textureSource._sourceOrigin), t.destroy(!1)
    }
  }
};
u.add(er);
class rr {
  constructor(t) {
    this.bubbles = !0, this.cancelBubble = !0, this.cancelable = !1, this.composed = !1, this.defaultPrevented = !1, this.eventPhase = rr.prototype.NONE, this.propagationStopped = !1, this.propagationImmediatelyStopped = !1, this.layer = new y, this.page = new y, this.NONE = 0, this.CAPTURING_PHASE = 1, this.AT_TARGET = 2, this.BUBBLING_PHASE = 3, this.manager = t
  }
  get layerX() {
    return this.layer.x
  }
  get layerY() {
    return this.layer.y
  }
  get pageX() {
    return this.page.x
  }
  get pageY() {
    return this.page.y
  }
  get data() {
    return this
  }
  composedPath() {
    return !this.manager || this.path && this.path[this.path.length - 1] === this.target || (this.path = this.target ? this.manager.propagationPath(this.target) : []), this.path
  }
  initEvent(t, e, r) {
    throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")
  }
  initUIEvent(t, e, r, s, i) {
    throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")
  }
  preventDefault() {
    this.nativeEvent instanceof Event && this.nativeEvent.cancelable && this.nativeEvent.preventDefault(), this.defaultPrevented = !0
  }
  stopImmediatePropagation() {
    this.propagationImmediatelyStopped = !0
  }
  stopPropagation() {
    this.propagationStopped = !0
  }
}
var sr = /iPhone/i,
  ir = /iPod/i,
  nr = /iPad/i,
  or = /\biOS-universal(?:.+)Mac\b/i,
  ar = /\bAndroid(?:.+)Mobile\b/i,
  hr = /Android/i,
  lr = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
  ur = /Silk/i,
  cr = /Windows Phone/i,
  dr = /\bWindows(?:.+)ARM\b/i,
  pr = /BlackBerry/i,
  fr = /BB10/i,
  mr = /Opera Mini/i,
  gr = /\b(CriOS|Chrome)(?:.+)Mobile/i,
  _r = /Mobile(?:.+)Firefox\b/i,
  xr = function(t) {
    return void 0 !== t && "MacIntel" === t.platform && "number" == typeof t.maxTouchPoints && t.maxTouchPoints > 1 && "undefined" == typeof MSStream
  };

function yr(t) {
  var e = {
    userAgent: "",
    platform: "",
    maxTouchPoints: 0
  };
  t || "undefined" == typeof navigator ? "string" == typeof t ? e.userAgent = t : t && t.userAgent && (e = {
    userAgent: t.userAgent,
    platform: t.platform,
    maxTouchPoints: t.maxTouchPoints || 0
  }) : e = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    maxTouchPoints: navigator.maxTouchPoints || 0
  };
  var r = e.userAgent,
    s = r.split("[FBAN");
  void 0 !== s[1] && (r = s[0]), void 0 !== (s = r.split("Twitter"))[1] && (r = s[0]);
  var i = function(t) {
      return function(e) {
        return e.test(t)
      }
    }(r),
    n = {
      apple: {
        phone: i(sr) && !i(cr),
        ipod: i(ir),
        tablet: !i(sr) && (i(nr) || xr(e)) && !i(cr),
        universal: i(or),
        device: (i(sr) || i(ir) || i(nr) || i(or) || xr(e)) && !i(cr)
      },
      amazon: {
        phone: i(lr),
        tablet: !i(lr) && i(ur),
        device: i(lr) || i(ur)
      },
      android: {
        phone: !i(cr) && i(lr) || !i(cr) && i(ar),
        tablet: !i(cr) && !i(lr) && !i(ar) && (i(ur) || i(hr)),
        device: !i(cr) && (i(lr) || i(ur) || i(ar) || i(hr)) || i(/\bokhttp\b/i)
      },
      windows: {
        phone: i(cr),
        tablet: i(dr),
        device: i(cr) || i(dr)
      },
      other: {
        blackberry: i(pr),
        blackberry10: i(fr),
        opera: i(mr),
        firefox: i(_r),
        chrome: i(gr),
        device: i(pr) || i(fr) || i(mr) || i(_r) || i(gr)
      },
      any: !1,
      phone: !1,
      tablet: !1
    };
  return n.any = n.apple.device || n.android.device || n.windows.device || n.other.device, n.phone = n.apple.phone || n.android.phone || n.windows.phone, n.tablet = n.apple.tablet || n.android.tablet || n.windows.tablet, n
}
const br = (yr.default ?? yr)(globalThis.navigator),
  vr = class t {
    constructor(t, e = br) {
      this._mobileInfo = e, this.debug = !1, this._activateOnTab = !0, this._deactivateOnMouseMove = !0, this._isActive = !1, this._isMobileAccessibility = !1, this._div = null, this._pool = [], this._renderId = 0, this._children = [], this._androidUpdateCount = 0, this._androidUpdateFrequency = 500, this._hookDiv = null, (e.tablet || e.phone) && this._createTouchHook(), this._renderer = t
    }
    get isActive() {
      return this._isActive
    }
    get isMobileAccessibility() {
      return this._isMobileAccessibility
    }
    get hookDiv() {
      return this._hookDiv
    }
    _createTouchHook() {
      const t = document.createElement("button");
      t.style.width = "1px", t.style.height = "1px", t.style.position = "absolute", t.style.top = "-1000px", t.style.left = "-1000px", t.style.zIndex = 2..toString(), t.style.backgroundColor = "#FF0000", t.title = "select to enable accessibility for this content", t.addEventListener("focus", () => {
        this._isMobileAccessibility = !0, this._activate(), this._destroyTouchHook()
      }), document.body.appendChild(t), this._hookDiv = t
    }
    _destroyTouchHook() {
      this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null)
    }
    _activate() {
      if (this._isActive) return;
      this._isActive = !0, this._div || (this._div = document.createElement("div"), this._div.style.width = "100px", this._div.style.height = "100px", this._div.style.position = "absolute", this._div.style.top = "0px", this._div.style.left = "0px", this._div.style.zIndex = 2..toString(), this._div.style.pointerEvents = "none"), this._activateOnTab && (this._onKeyDown = this._onKeyDown.bind(this), globalThis.addEventListener("keydown", this._onKeyDown, !1)), this._deactivateOnMouseMove && (this._onMouseMove = this._onMouseMove.bind(this), globalThis.document.addEventListener("mousemove", this._onMouseMove, !0));
      const t = this._renderer.view.canvas;
      if (t.parentNode) t.parentNode.appendChild(this._div), this._initAccessibilitySetup();
      else {
        const e = new MutationObserver(() => {
          t.parentNode && (t.parentNode.appendChild(this._div), e.disconnect(), this._initAccessibilitySetup())
        });
        e.observe(document.body, {
          childList: !0,
          subtree: !0
        })
      }
    }
    _initAccessibilitySetup() {
      this._renderer.runners.postrender.add(this), this._renderer.lastObjectRendered && this._updateAccessibleObjects(this._renderer.lastObjectRendered)
    }
    _deactivate() {
      if (this._isActive && !this._isMobileAccessibility) {
        this._isActive = !1, globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0), this._activateOnTab && globalThis.addEventListener("keydown", this._onKeyDown, !1), this._renderer.runners.postrender.remove(this);
        for (const t of this._children) t._accessibleDiv && t._accessibleDiv.parentNode && (t._accessibleDiv.parentNode.removeChild(t._accessibleDiv), t._accessibleDiv = null), t._accessibleActive = !1;
        this._pool.forEach(t => {
          t.parentNode && t.parentNode.removeChild(t)
        }), this._div && this._div.parentNode && this._div.parentNode.removeChild(this._div), this._pool = [], this._children = []
      }
    }
    _updateAccessibleObjects(t) {
      if (!t.visible || !t.accessibleChildren) return;
      t.accessible && (t._accessibleActive || this._addChild(t), t._renderId = this._renderId);
      const e = t.children;
      if (e)
        for (let r = 0; r < e.length; r++) this._updateAccessibleObjects(e[r])
    }
    init(e) {
      const r = {
        accessibilityOptions: {
          ...t.defaultOptions,
          ...(null == e ? void 0 : e.accessibilityOptions) || {}
        }
      };
      this.debug = r.accessibilityOptions.debug, this._activateOnTab = r.accessibilityOptions.activateOnTab, this._deactivateOnMouseMove = r.accessibilityOptions.deactivateOnMouseMove, r.accessibilityOptions.enabledByDefault ? this._activate() : this._activateOnTab && (this._onKeyDown = this._onKeyDown.bind(this), globalThis.addEventListener("keydown", this._onKeyDown, !1)), this._renderer.runners.postrender.remove(this)
    }
    postrender() {
      const t = performance.now();
      if (this._mobileInfo.android.device && t < this._androidUpdateCount) return;
      if (this._androidUpdateCount = t + this._androidUpdateFrequency, !this._renderer.renderingToScreen || !this._renderer.view.canvas) return;
      const e = new Set;
      if (this._renderer.lastObjectRendered) {
        this._updateAccessibleObjects(this._renderer.lastObjectRendered);
        for (const t of this._children) t._renderId === this._renderId && e.add(this._children.indexOf(t))
      }
      for (let r = this._children.length - 1; r >= 0; r--) {
        const t = this._children[r];
        e.has(r) || (t._accessibleDiv && t._accessibleDiv.parentNode && (t._accessibleDiv.parentNode.removeChild(t._accessibleDiv), this._pool.push(t._accessibleDiv), t._accessibleDiv = null), t._accessibleActive = !1, Ft(this._children, r, 1))
      }
      if (this._renderer.renderingToScreen) {
        const {
          x: t,
          y: e,
          width: r,
          height: s
        } = this._renderer.screen, i = this._div;
        i.style.left = `${t}px`, i.style.top = `${e}px`, i.style.width = `${r}px`, i.style.height = `${s}px`
      }
      for (let r = 0; r < this._children.length; r++) {
        const t = this._children[r];
        if (!t._accessibleActive || !t._accessibleDiv) continue;
        const e = t._accessibleDiv,
          s = t.hitArea || t.getBounds().rectangle;
        if (t.hitArea) {
          const r = t.worldTransform,
            i = this._renderer.resolution,
            n = this._renderer.resolution;
          e.style.left = (r.tx + s.x * r.a) * i + "px", e.style.top = (r.ty + s.y * r.d) * n + "px", e.style.width = s.width * r.a * i + "px", e.style.height = s.height * r.d * n + "px"
        } else {
          this._capHitArea(s);
          const t = this._renderer.resolution,
            r = this._renderer.resolution;
          e.style.left = s.x * t + "px", e.style.top = s.y * r + "px", e.style.width = s.width * t + "px", e.style.height = s.height * r + "px"
        }
      }
      this._renderId++
    }
    _updateDebugHTML(t) {
      t.innerHTML = `type: ${t.type}</br> title : ${t.title}</br> tabIndex: ${t.tabIndex}`
    }
    _capHitArea(t) {
      t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0);
      const {
        width: e,
        height: r
      } = this._renderer;
      t.x + t.width > e && (t.width = e - t.x), t.y + t.height > r && (t.height = r - t.y)
    }
    _addChild(t) {
      let e = this._pool.pop();
      e || ("button" === t.accessibleType ? e = document.createElement("button") : (e = document.createElement(t.accessibleType), e.style.cssText = "\n                        color: transparent;\n                        pointer-events: none;\n                        padding: 0;\n                        margin: 0;\n                        border: 0;\n                        outline: 0;\n                        background: transparent;\n                        box-sizing: border-box;\n                        user-select: none;\n                        -webkit-user-select: none;\n                        -moz-user-select: none;\n                        -ms-user-select: none;\n                    ", t.accessibleText && (e.innerText = t.accessibleText)), e.style.width = "100px", e.style.height = "100px", e.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = 2..toString(), e.style.borderStyle = "none", navigator.userAgent.toLowerCase().includes("chrome") ? e.setAttribute("aria-live", "off") : e.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? e.setAttribute("aria-relevant", "additions") : e.setAttribute("aria-relevant", "text"), e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), e.style.pointerEvents = t.accessiblePointerEvents, e.type = t.accessibleType, t.accessibleTitle && null !== t.accessibleTitle ? e.title = t.accessibleTitle : t.accessibleHint && null !== t.accessibleHint || (e.title = `container ${t.tabIndex}`), t.accessibleHint && null !== t.accessibleHint && e.setAttribute("aria-label", t.accessibleHint), this.debug && this._updateDebugHTML(e), t._accessibleActive = !0, t._accessibleDiv = e, e.container = t, this._children.push(t), this._div.appendChild(t._accessibleDiv), t.interactive && (t._accessibleDiv.tabIndex = t.tabIndex)
    }
    _dispatchEvent(t, e) {
      const {
        container: r
      } = t.target, s = this._renderer.events.rootBoundary, i = Object.assign(new rr(s), {
        target: r
      });
      s.rootTarget = this._renderer.lastObjectRendered, e.forEach(t => s.dispatchEvent(i, t))
    }
    _onClick(t) {
      this._dispatchEvent(t, ["click", "pointertap", "tap"])
    }
    _onFocus(t) {
      t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "assertive"), this._dispatchEvent(t, ["mouseover"])
    }
    _onFocusOut(t) {
      t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "polite"), this._dispatchEvent(t, ["mouseout"])
    }
    _onKeyDown(t) {
      9 === t.keyCode && this._activateOnTab && this._activate()
    }
    _onMouseMove(t) {
      0 === t.movementX && 0 === t.movementY || this._deactivate()
    }
    destroy() {
      this._deactivate(), this._destroyTouchHook(), this._div = null, this._pool = null, this._children = null, this._renderer = null, this._activateOnTab && globalThis.removeEventListener("keydown", this._onKeyDown)
    }
    setAccessibilityEnabled(t) {
      t ? this._activate() : this._deactivate()
    }
  };
vr.extension = {
  type: [a.WebGLSystem, a.WebGPUSystem],
  name: "accessibility"
}, vr.defaultOptions = {
  enabledByDefault: !1,
  debug: !1,
  activateOnTab: !0,
  deactivateOnMouseMove: !0
};
let Tr = vr;
const Sr = {
    accessible: !1,
    accessibleTitle: null,
    accessibleHint: null,
    tabIndex: 0,
    accessibleType: "button",
    accessibleText: null,
    accessiblePointerEvents: "auto",
    accessibleChildren: !0,
    _accessibleActive: !1,
    _accessibleDiv: null,
    _renderId: -1
  },
  wr = Object.create(null),
  Er = Object.create(null);

function Cr(t, e) {
  let r = Er[t];
  return void 0 === r && (void 0 === wr[e] && (wr[e] = 1), Er[t] = r = wr[e]++), r
}
let Pr, Mr;

function Ar() {
  if (!Pr || (null == Pr ? void 0 : Pr.isContextLost())) {
    const t = Me.get().createCanvas();
    Pr = t.getContext("webgl", {})
  }
  return Pr
}

function Rr() {
  if (!Mr) {
    Mr = "mediump";
    const t = Ar();
    if (t && t.getShaderPrecisionFormat) {
      const e = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT);
      Mr = e.precision ? "highp" : "mediump"
    }
  }
  return Mr
}
const Br = {},
  kr = {},
  Gr = {
    stripVersion: function(t, e) {
      return e ? t.replace("#version 300 es", "") : t
    },
    ensurePrecision: function(t, e, r) {
      const s = r ? e.maxSupportedFragmentPrecision : e.maxSupportedVertexPrecision;
      if ("precision" !== t.substring(0, 9)) {
        let i = r ? e.requestedFragmentPrecision : e.requestedVertexPrecision;
        return "highp" === i && "highp" !== s && (i = "mediump"), `precision ${i} float;\n${t}`
      }
      return "highp" !== s && "precision highp" === t.substring(0, 15) ? t.replace("precision highp", "precision mediump") : t
    },
    addProgramDefines: function(t, e, r) {
      return e ? t : r ? `\n\n        #ifdef GL_ES // This checks if it is WebGL1\n        #define in varying\n        #define finalColor gl_FragColor\n        #define texture texture2D\n        #endif\n        ${t=t.replace("out vec4 finalColor;","")}\n        ` : `\n\n        #ifdef GL_ES // This checks if it is WebGL1\n        #define in attribute\n        #define out varying\n        #endif\n        ${t}\n        `
    },
    setProgramName: function(t, {
      name: e = "pixi-program"
    }, r = !0) {
      e = e.replace(/\s+/g, "-");
      const s = r ? Br : kr;
      return s[e += r ? "-fragment" : "-vertex"] ? (s[e]++, e += `-${s[e]}`) : s[e] = 1, -1 !== t.indexOf("#define SHADER_NAME") ? t : `#define SHADER_NAME ${e}\n${t}`
    },
    insertVersion: function(t, e) {
      return e ? `#version 300 es\n${t}` : t
    }
  },
  Ir = Object.create(null),
  Fr = class t {
    constructor(e) {
      const r = -1 !== (e = {
          ...t.defaultOptions,
          ...e
        }).fragment.indexOf("#version 300 es"),
        s = {
          stripVersion: r,
          ensurePrecision: {
            requestedFragmentPrecision: e.preferredFragmentPrecision,
            requestedVertexPrecision: e.preferredVertexPrecision,
            maxSupportedVertexPrecision: "highp",
            maxSupportedFragmentPrecision: Rr()
          },
          setProgramName: {
            name: e.name
          },
          addProgramDefines: r,
          insertVersion: r
        };
      let i = e.fragment,
        n = e.vertex;
      Object.keys(Gr).forEach(t => {
        const e = s[t];
        i = Gr[t](i, e, !0), n = Gr[t](n, e, !1)
      }), this.fragment = i, this.vertex = n, this.transformFeedbackVaryings = e.transformFeedbackVaryings, this._key = Cr(`${this.vertex}:${this.fragment}`, "gl-program")
    }
    destroy() {
      this.fragment = null, this.vertex = null, this._attributeData = null, this._uniformData = null, this._uniformBlockData = null, this.transformFeedbackVaryings = null
    }
    static from(e) {
      const r = `${e.vertex}:${e.fragment}`;
      return Ir[r] || (Ir[r] = new t(e)), Ir[r]
    }
  };
Fr.defaultOptions = {
  preferredVertexPrecision: "highp",
  preferredFragmentPrecision: "mediump"
};
let Ur = Fr;
const Or = {
  uint8x2: {
    size: 2,
    stride: 2,
    normalised: !1
  },
  uint8x4: {
    size: 4,
    stride: 4,
    normalised: !1
  },
  sint8x2: {
    size: 2,
    stride: 2,
    normalised: !1
  },
  sint8x4: {
    size: 4,
    stride: 4,
    normalised: !1
  },
  unorm8x2: {
    size: 2,
    stride: 2,
    normalised: !0
  },
  unorm8x4: {
    size: 4,
    stride: 4,
    normalised: !0
  },
  snorm8x2: {
    size: 2,
    stride: 2,
    normalised: !0
  },
  snorm8x4: {
    size: 4,
    stride: 4,
    normalised: !0
  },
  uint16x2: {
    size: 2,
    stride: 4,
    normalised: !1
  },
  uint16x4: {
    size: 4,
    stride: 8,
    normalised: !1
  },
  sint16x2: {
    size: 2,
    stride: 4,
    normalised: !1
  },
  sint16x4: {
    size: 4,
    stride: 8,
    normalised: !1
  },
  unorm16x2: {
    size: 2,
    stride: 4,
    normalised: !0
  },
  unorm16x4: {
    size: 4,
    stride: 8,
    normalised: !0
  },
  snorm16x2: {
    size: 2,
    stride: 4,
    normalised: !0
  },
  snorm16x4: {
    size: 4,
    stride: 8,
    normalised: !0
  },
  float16x2: {
    size: 2,
    stride: 4,
    normalised: !1
  },
  float16x4: {
    size: 4,
    stride: 8,
    normalised: !1
  },
  float32: {
    size: 1,
    stride: 4,
    normalised: !1
  },
  float32x2: {
    size: 2,
    stride: 8,
    normalised: !1
  },
  float32x3: {
    size: 3,
    stride: 12,
    normalised: !1
  },
  float32x4: {
    size: 4,
    stride: 16,
    normalised: !1
  },
  uint32: {
    size: 1,
    stride: 4,
    normalised: !1
  },
  uint32x2: {
    size: 2,
    stride: 8,
    normalised: !1
  },
  uint32x3: {
    size: 3,
    stride: 12,
    normalised: !1
  },
  uint32x4: {
    size: 4,
    stride: 16,
    normalised: !1
  },
  sint32: {
    size: 1,
    stride: 4,
    normalised: !1
  },
  sint32x2: {
    size: 2,
    stride: 8,
    normalised: !1
  },
  sint32x3: {
    size: 3,
    stride: 12,
    normalised: !1
  },
  sint32x4: {
    size: 4,
    stride: 16,
    normalised: !1
  }
};

function Dr(t) {
  return Or[t] ?? Or.float32
}
const Lr = {
  f32: "float32",
  "vec2<f32>": "float32x2",
  "vec3<f32>": "float32x3",
  "vec4<f32>": "float32x4",
  vec2f: "float32x2",
  vec3f: "float32x3",
  vec4f: "float32x4",
  i32: "sint32",
  "vec2<i32>": "sint32x2",
  "vec3<i32>": "sint32x3",
  "vec4<i32>": "sint32x4",
  u32: "uint32",
  "vec2<u32>": "uint32x2",
  "vec3<u32>": "uint32x3",
  "vec4<u32>": "uint32x4",
  bool: "uint32",
  "vec2<bool>": "uint32x2",
  "vec3<bool>": "uint32x3",
  "vec4<bool>": "uint32x4"
};

function Nr(t) {
  var e, r;
  const s = /@group\((\d+)\)/,
    i = /@binding\((\d+)\)/,
    n = /var(<[^>]+>)? (\w+)/,
    o = /:\s*(\w+)/,
    a = /(\w+)\s*:\s*([\w\<\>]+)/g,
    h = /struct\s+(\w+)/,
    l = null == (e = t.match(/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g)) ? void 0 : e.map(t => ({
      group: parseInt(t.match(s)[1], 10),
      binding: parseInt(t.match(i)[1], 10),
      name: t.match(n)[2],
      isUniform: "<uniform>" === t.match(n)[1],
      type: t.match(o)[1]
    }));
  if (!l) return {
    groups: [],
    structs: []
  };
  const u = (null == (r = t.match(/struct\s+(\w+)\s*{([^}]+)}/g)) ? void 0 : r.map(t => {
    const e = t.match(h)[1],
      r = t.match(a).reduce((t, e) => {
        const [r, s] = e.split(":");
        return t[r.trim()] = s.trim(), t
      }, {});
    return r ? {
      name: e,
      members: r
    } : null
  }).filter(({
    name: t
  }) => l.some(e => e.type === t))) ?? [];
  return {
    groups: l,
    structs: u
  }
}
var zr = (t => (t[t.VERTEX = 1] = "VERTEX", t[t.FRAGMENT = 2] = "FRAGMENT", t[t.COMPUTE = 4] = "COMPUTE", t))(zr || {});
const Hr = Object.create(null);
class Wr {
  constructor(t) {
    var e, r;
    this._layoutKey = 0, this._attributeLocationsKey = 0;
    const {
      fragment: s,
      vertex: i,
      layout: n,
      gpuLayout: o,
      name: a
    } = t;
    if (this.name = a, this.fragment = s, this.vertex = i, s.source === i.source) {
      const t = Nr(s.source);
      this.structsAndGroups = t
    } else {
      const t = Nr(i.source),
        e = Nr(s.source);
      this.structsAndGroups = function(t, e) {
        const r = new Set,
          s = new Set;
        return {
          structs: [...t.structs, ...e.structs].filter(t => !r.has(t.name) && (r.add(t.name), !0)),
          groups: [...t.groups, ...e.groups].filter(t => {
            const e = `${t.name}-${t.binding}`;
            return !s.has(e) && (s.add(e), !0)
          })
        }
      }(t, e)
    }
    this.layout = n ?? function({
      groups: t
    }) {
      const e = [];
      for (let r = 0; r < t.length; r++) {
        const s = t[r];
        e[s.group] || (e[s.group] = {}), e[s.group][s.name] = s.binding
      }
      return e
    }(this.structsAndGroups), this.gpuLayout = o ?? function({
      groups: t
    }) {
      const e = [];
      for (let r = 0; r < t.length; r++) {
        const s = t[r];
        e[s.group] || (e[s.group] = []), s.isUniform ? e[s.group].push({
          binding: s.binding,
          visibility: zr.VERTEX | zr.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }) : "sampler" === s.type ? e[s.group].push({
          binding: s.binding,
          visibility: zr.FRAGMENT,
          sampler: {
            type: "filtering"
          }
        }) : "texture_2d" === s.type && e[s.group].push({
          binding: s.binding,
          visibility: zr.FRAGMENT,
          texture: {
            sampleType: "float",
            viewDimension: "2d",
            multisampled: !1
          }
        })
      }
      return e
    }(this.structsAndGroups), this.autoAssignGlobalUniforms = !(void 0 === (null == (e = this.layout[0]) ? void 0 : e.globalUniforms)), this.autoAssignLocalUniforms = !(void 0 === (null == (r = this.layout[1]) ? void 0 : r.localUniforms)), this._generateProgramKey()
  }
  _generateProgramKey() {
    const {
      vertex: t,
      fragment: e
    } = this, r = t.source + e.source + t.entryPoint + e.entryPoint;
    this._layoutKey = Cr(r, "program")
  }
  get attributeData() {
    return this._attributeData ?? (this._attributeData = function({
      source: t,
      entryPoint: e
    }) {
      const r = {},
        s = t.indexOf(`fn ${e}`);
      if (-1 !== s) {
        const e = t.indexOf("->", s);
        if (-1 !== e) {
          const i = t.substring(s, e),
            n = /@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;
          let o;
          for (; null !== (o = n.exec(i));) {
            const t = Lr[o[3]] ?? "float32";
            r[o[2]] = {
              location: parseInt(o[1], 10),
              format: t,
              stride: Dr(t).stride,
              offset: 0,
              instance: !1,
              start: 0
            }
          }
        }
      }
      return r
    }(this.vertex)), this._attributeData
  }
  destroy() {
    this.gpuLayout = null, this.layout = null, this.structsAndGroups = null, this.fragment = null, this.vertex = null
  }
  static from(t) {
    const e = `${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;
    return Hr[e] || (Hr[e] = new Wr(t)), Hr[e]
  }
}
const Vr = ["f32", "i32", "vec2<f32>", "vec3<f32>", "vec4<f32>", "mat2x2<f32>", "mat3x3<f32>", "mat4x4<f32>", "mat3x2<f32>", "mat4x2<f32>", "mat2x3<f32>", "mat4x3<f32>", "mat2x4<f32>", "mat3x4<f32>", "vec2<i32>", "vec3<i32>", "vec4<i32>"],
  Xr = Vr.reduce((t, e) => (t[e] = !0, t), {});

function Yr(t, e) {
  switch (t) {
    case "f32":
      return 0;
    case "vec2<f32>":
      return new Float32Array(2 * e);
    case "vec3<f32>":
      return new Float32Array(3 * e);
    case "vec4<f32>":
      return new Float32Array(4 * e);
    case "mat2x2<f32>":
      return new Float32Array([1, 0, 0, 1]);
    case "mat3x3<f32>":
      return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4x4<f32>":
      return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
  }
  return null
}
const $r = class t {
  constructor(e, r) {
    this._touched = 0, this.uid = F("uniform"), this._resourceType = "uniformGroup", this._resourceId = F("resource"), this.isUniformGroup = !0, this._dirtyId = 0, this.destroyed = !1, r = {
      ...t.defaultOptions,
      ...r
    }, this.uniformStructures = e;
    const s = {};
    for (const t in e) {
      const r = e[t];
      if (r.name = t, r.size = r.size ?? 1, !Xr[r.type]) throw new Error(`Uniform type ${r.type} is not supported. Supported uniform types are: ${Vr.join(", ")}`);
      r.value ?? (r.value = Yr(r.type, r.size)), s[t] = r.value
    }
    this.uniforms = s, this._dirtyId = 1, this.ubo = r.ubo, this.isStatic = r.isStatic, this._signature = Cr(Object.keys(s).map(t => `${t}-${e[t].type}`).join("-"), "uniform-group")
  }
  update() {
    this._dirtyId++
  }
};
$r.defaultOptions = {
  ubo: !1,
  isStatic: !1
};
let jr = $r;
class qr {
  constructor(t) {
    this.resources = Object.create(null), this._dirty = !0;
    let e = 0;
    for (const r in t) {
      const s = t[r];
      this.setResource(s, e++)
    }
    this._updateKey()
  }
  _updateKey() {
    if (!this._dirty) return;
    this._dirty = !1;
    const t = [];
    let e = 0;
    for (const r in this.resources) t[e++] = this.resources[r]._resourceId;
    this._key = t.join("|")
  }
  setResource(t, e) {
    var r, s;
    const i = this.resources[e];
    t !== i && (i && (null == (r = t.off) || r.call(t, "change", this.onResourceChange, this)), null == (s = t.on) || s.call(t, "change", this.onResourceChange, this), this.resources[e] = t, this._dirty = !0)
  }
  getResource(t) {
    return this.resources[t]
  }
  _touch(t) {
    const e = this.resources;
    for (const r in e) e[r]._touched = t
  }
  destroy() {
    var t;
    const e = this.resources;
    for (const r in e) {
      const s = e[r];
      null == (t = s.off) || t.call(s, "change", this.onResourceChange, this)
    }
    this.resources = null
  }
  onResourceChange(t) {
    if (this._dirty = !0, t.destroyed) {
      const e = this.resources;
      for (const r in e) e[r] === t && (e[r] = null)
    } else this._updateKey()
  }
}
var Kr = (t => (t[t.WEBGL = 1] = "WEBGL", t[t.WEBGPU = 2] = "WEBGPU", t[t.BOTH = 3] = "BOTH", t))(Kr || {});
class Zr extends m {
  constructor(t) {
    super(), this.uid = F("shader"), this._uniformBindMap = Object.create(null), this._ownedBindGroups = [];
    let {
      gpuProgram: e,
      glProgram: r,
      groups: s,
      resources: i,
      compatibleRenderers: n,
      groupMap: o
    } = t;
    this.gpuProgram = e, this.glProgram = r, void 0 === n && (n = 0, e && (n |= Kr.WEBGPU), r && (n |= Kr.WEBGL)), this.compatibleRenderers = n;
    const a = {};
    if (i || s || (i = {}), i && s) throw new Error("[Shader] Cannot have both resources and groups");
    if (!e && s && !o) throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");
    if (!e && s && o)
      for (const h in o)
        for (const t in o[h]) {
          const e = o[h][t];
          a[e] = {
            group: h,
            binding: t,
            name: e
          }
        } else if (e && s && !o) {
          const t = e.structsAndGroups.groups;
          o = {}, t.forEach(t => {
            o[t.group] = o[t.group] || {}, o[t.group][t.binding] = t.name, a[t.name] = t
          })
        } else if (i) {
      s = {}, o = {}, e && e.structsAndGroups.groups.forEach(t => {
        o[t.group] = o[t.group] || {}, o[t.group][t.binding] = t.name, a[t.name] = t
      });
      let t = 0;
      for (const e in i) a[e] || (s[99] || (s[99] = new qr, this._ownedBindGroups.push(s[99])), a[e] = {
        group: 99,
        binding: t,
        name: e
      }, o[99] = o[99] || {}, o[99][t] = e, t++);
      for (const e in i) {
        const t = e;
        let r = i[e];
        r.source || r._resourceType || (r = new jr(r));
        const n = a[t];
        n && (s[n.group] || (s[n.group] = new qr, this._ownedBindGroups.push(s[n.group])), s[n.group].setResource(r, n.binding))
      }
    }
    this.groups = s, this._uniformBindMap = o, this.resources = this._buildResourceAccessor(s, a)
  }
  addResource(t, e, r) {
    var s, i;
    (s = this._uniformBindMap)[e] || (s[e] = {}), (i = this._uniformBindMap[e])[r] || (i[r] = t), this.groups[e] || (this.groups[e] = new qr, this._ownedBindGroups.push(this.groups[e]))
  }
  _buildResourceAccessor(t, e) {
    const r = {};
    for (const s in e) {
      const i = e[s];
      Object.defineProperty(r, i.name, {
        get: () => t[i.group].getResource(i.binding),
        set(e) {
          t[i.group].setResource(e, i.binding)
        }
      })
    }
    return r
  }
  destroy(t = !1) {
    var e, r;
    this.emit("destroy", this), t && (null == (e = this.gpuProgram) || e.destroy(), null == (r = this.glProgram) || r.destroy()), this.gpuProgram = null, this.glProgram = null, this.removeAllListeners(), this._uniformBindMap = null, this._ownedBindGroups.forEach(t => {
      t.destroy()
    }), this._ownedBindGroups = null, this.resources = null, this.groups = null
  }
  static from(t) {
    const {
      gpu: e,
      gl: r,
      ...s
    } = t;
    let i, n;
    return e && (i = Wr.from(e)), r && (n = Ur.from(r)), new Zr({
      gpuProgram: i,
      glProgram: n,
      ...s
    })
  }
}
const Qr = {
    normal: 0,
    add: 1,
    multiply: 2,
    screen: 3,
    overlay: 4,
    erase: 5,
    "normal-npm": 6,
    "add-npm": 7,
    "screen-npm": 8,
    min: 9,
    max: 10
  },
  Jr = class t {
    constructor() {
      this.data = 0, this.blendMode = "normal", this.polygonOffset = 0, this.blend = !0, this.depthMask = !0
    }
    get blend() {
      return !!(1 & this.data)
    }
    set blend(t) {
      !!(1 & this.data) !== t && (this.data ^= 1)
    }
    get offsets() {
      return !!(2 & this.data)
    }
    set offsets(t) {
      !!(2 & this.data) !== t && (this.data ^= 2)
    }
    set cullMode(t) {
      "none" !== t ? (this.culling = !0, this.clockwiseFrontFace = "front" === t) : this.culling = !1
    }
    get cullMode() {
      return this.culling ? this.clockwiseFrontFace ? "front" : "back" : "none"
    }
    get culling() {
      return !!(4 & this.data)
    }
    set culling(t) {
      !!(4 & this.data) !== t && (this.data ^= 4)
    }
    get depthTest() {
      return !!(8 & this.data)
    }
    set depthTest(t) {
      !!(8 & this.data) !== t && (this.data ^= 8)
    }
    get depthMask() {
      return !!(32 & this.data)
    }
    set depthMask(t) {
      !!(32 & this.data) !== t && (this.data ^= 32)
    }
    get clockwiseFrontFace() {
      return !!(16 & this.data)
    }
    set clockwiseFrontFace(t) {
      !!(16 & this.data) !== t && (this.data ^= 16)
    }
    get blendMode() {
      return this._blendMode
    }
    set blendMode(t) {
      this.blend = "none" !== t, this._blendMode = t, this._blendModeId = Qr[t] || 0
    }
    get polygonOffset() {
      return this._polygonOffset
    }
    set polygonOffset(t) {
      this.offsets = !!t, this._polygonOffset = t
    }
    toString() {
      return `[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`
    }
    static for2d() {
      const e = new t;
      return e.depthTest = !1, e.blend = !0, e
    }
  };
Jr.default2d = Jr.for2d();
let ts = Jr;
const es = class t extends Zr {
  constructor(e) {
    super(e = {
      ...t.defaultOptions,
      ...e
    }), this.enabled = !0, this._state = ts.for2d(), this.blendMode = e.blendMode, this.padding = e.padding, "boolean" == typeof e.antialias ? this.antialias = e.antialias ? "on" : "off" : this.antialias = e.antialias, this.resolution = e.resolution, this.blendRequired = e.blendRequired, this.clipToViewport = e.clipToViewport, this.addResource("uTexture", 0, 1)
  }
  apply(t, e, r, s) {
    t.applyFilter(this, e, r, s)
  }
  get blendMode() {
    return this._state.blendMode
  }
  set blendMode(t) {
    this._state.blendMode = t
  }
  static from(e) {
    const {
      gpu: r,
      gl: s,
      ...i
    } = e;
    let n, o;
    return r && (n = Wr.from(r)), s && (o = Ur.from(s)), new t({
      gpuProgram: n,
      glProgram: o,
      ...i
    })
  }
};
es.defaultOptions = {
  blendMode: "normal",
  resolution: 1,
  padding: 0,
  antialias: "off",
  blendRequired: !1,
  clipToViewport: !0
};
let rs = es;
const ss = [];
let is;

function ns() {
  if ("boolean" == typeof is) return is;
  try {
    const t = new Function("param1", "param2", "param3", "return param1[param2] === param3;");
    is = !0 === t({
      a: "b"
    }, "a", "b")
  } catch (t) {
    is = !1
  }
  return is
}

function os(t, e, r = 2) {
  const s = e && e.length,
    i = s ? e[0] * r : t.length;
  let n = as(t, 0, i, r, !0);
  const o = [];
  if (!n || n.next === n.prev) return o;
  let a, h, l;
  if (s && (n = function(t, e, r, s) {
      const i = [];
      for (let n = 0, o = e.length; n < o; n++) {
        const r = as(t, e[n] * s, n < o - 1 ? e[n + 1] * s : t.length, s, !1);
        r === r.next && (r.steiner = !0), i.push(xs(r))
      }
      i.sort(fs);
      for (let n = 0; n < i.length; n++) r = ms(i[n], r);
      return r
    }(t, e, n, r)), t.length > 80 * r) {
    a = t[0], h = t[1];
    let e = a,
      s = h;
    for (let n = r; n < i; n += r) {
      const r = t[n],
        i = t[n + 1];
      r < a && (a = r), i < h && (h = i), r > e && (e = r), i > s && (s = i)
    }
    l = Math.max(e - a, s - h), l = 0 !== l ? 32767 / l : 0
  }
  return ls(n, o, r, a, h, l, 0), o
}

function as(t, e, r, s, i) {
  let n;
  if (i === function(t, e, r, s) {
      let i = 0;
      for (let n = e, o = r - s; n < r; n += s) i += (t[o] - t[n]) * (t[n + 1] + t[o + 1]), o = n;
      return i
    }(t, e, r, s) > 0)
    for (let o = e; o < r; o += s) n = As(o / s | 0, t[o], t[o + 1], n);
  else
    for (let o = r - s; o >= e; o -= s) n = As(o / s | 0, t[o], t[o + 1], n);
  return n && Ss(n, n.next) && (Rs(n), n = n.next), n
}

function hs(t, e) {
  if (!t) return t;
  e || (e = t);
  let r, s = t;
  do {
    if (r = !1, s.steiner || !Ss(s, s.next) && 0 !== Ts(s.prev, s, s.next)) s = s.next;
    else {
      if (Rs(s), s = e = s.prev, s === s.next) break;
      r = !0
    }
  } while (r || s !== e);
  return e
}

function ls(t, e, r, s, i, n, o) {
  if (!t) return;
  !o && n && function(t, e, r, s) {
    let i = t;
    do {
      0 === i.z && (i.z = _s(i.x, i.y, e, r, s)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next
    } while (i !== t);
    i.prevZ.nextZ = null, i.prevZ = null,
      function(t) {
        let e, r = 1;
        do {
          let s, i = t;
          t = null;
          let n = null;
          for (e = 0; i;) {
            e++;
            let o = i,
              a = 0;
            for (let t = 0; t < r && (a++, o = o.nextZ, o); t++);
            let h = r;
            for (; a > 0 || h > 0 && o;) 0 !== a && (0 === h || !o || i.z <= o.z) ? (s = i, i = i.nextZ, a--) : (s = o, o = o.nextZ, h--), n ? n.nextZ = s : t = s, s.prevZ = n, n = s;
            i = o
          }
          n.nextZ = null, r *= 2
        } while (e > 1)
      }(i)
  }(t, s, i, n);
  let a = t;
  for (; t.prev !== t.next;) {
    const h = t.prev,
      l = t.next;
    if (n ? cs(t, s, i, n) : us(t)) e.push(h.i, t.i, l.i), Rs(t), t = l.next, a = l.next;
    else if ((t = l) === a) {
      o ? 1 === o ? ls(t = ds(hs(t), e), e, r, s, i, n, 2) : 2 === o && ps(t, e, r, s, i, n) : ls(hs(t), e, r, s, i, n, 1);
      break
    }
  }
}

function us(t) {
  const e = t.prev,
    r = t,
    s = t.next;
  if (Ts(e, r, s) >= 0) return !1;
  const i = e.x,
    n = r.x,
    o = s.x,
    a = e.y,
    h = r.y,
    l = s.y,
    u = Math.min(i, n, o),
    c = Math.min(a, h, l),
    d = Math.max(i, n, o),
    p = Math.max(a, h, l);
  let f = s.next;
  for (; f !== e;) {
    if (f.x >= u && f.x <= d && f.y >= c && f.y <= p && bs(i, a, n, h, o, l, f.x, f.y) && Ts(f.prev, f, f.next) >= 0) return !1;
    f = f.next
  }
  return !0
}

function cs(t, e, r, s) {
  const i = t.prev,
    n = t,
    o = t.next;
  if (Ts(i, n, o) >= 0) return !1;
  const a = i.x,
    h = n.x,
    l = o.x,
    u = i.y,
    c = n.y,
    d = o.y,
    p = Math.min(a, h, l),
    f = Math.min(u, c, d),
    m = Math.max(a, h, l),
    g = Math.max(u, c, d),
    _ = _s(p, f, e, r, s),
    x = _s(m, g, e, r, s);
  let y = t.prevZ,
    b = t.nextZ;
  for (; y && y.z >= _ && b && b.z <= x;) {
    if (y.x >= p && y.x <= m && y.y >= f && y.y <= g && y !== i && y !== o && bs(a, u, h, c, l, d, y.x, y.y) && Ts(y.prev, y, y.next) >= 0) return !1;
    if (y = y.prevZ, b.x >= p && b.x <= m && b.y >= f && b.y <= g && b !== i && b !== o && bs(a, u, h, c, l, d, b.x, b.y) && Ts(b.prev, b, b.next) >= 0) return !1;
    b = b.nextZ
  }
  for (; y && y.z >= _;) {
    if (y.x >= p && y.x <= m && y.y >= f && y.y <= g && y !== i && y !== o && bs(a, u, h, c, l, d, y.x, y.y) && Ts(y.prev, y, y.next) >= 0) return !1;
    y = y.prevZ
  }
  for (; b && b.z <= x;) {
    if (b.x >= p && b.x <= m && b.y >= f && b.y <= g && b !== i && b !== o && bs(a, u, h, c, l, d, b.x, b.y) && Ts(b.prev, b, b.next) >= 0) return !1;
    b = b.nextZ
  }
  return !0
}

function ds(t, e) {
  let r = t;
  do {
    const s = r.prev,
      i = r.next.next;
    !Ss(s, i) && ws(s, r, r.next, i) && Ps(s, i) && Ps(i, s) && (e.push(s.i, r.i, i.i), Rs(r), Rs(r.next), r = t = i), r = r.next
  } while (r !== t);
  return hs(r)
}

function ps(t, e, r, s, i, n) {
  let o = t;
  do {
    let t = o.next.next;
    for (; t !== o.prev;) {
      if (o.i !== t.i && vs(o, t)) {
        let a = Ms(o, t);
        return o = hs(o, o.next), a = hs(a, a.next), ls(o, e, r, s, i, n, 0), void ls(a, e, r, s, i, n, 0)
      }
      t = t.next
    }
    o = o.next
  } while (o !== t)
}

function fs(t, e) {
  let r = t.x - e.x;
  return 0 === r && (r = t.y - e.y, 0 === r) && (r = (t.next.y - t.y) / (t.next.x - t.x) - (e.next.y - e.y) / (e.next.x - e.x)), r
}

function ms(t, e) {
  const r = function(t, e) {
    let r = e;
    const s = t.x,
      i = t.y;
    let n, o = -1 / 0;
    if (Ss(t, r)) return r;
    do {
      if (Ss(t, r.next)) return r.next;
      if (i <= r.y && i >= r.next.y && r.next.y !== r.y) {
        const t = r.x + (i - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
        if (t <= s && t > o && (o = t, n = r.x < r.next.x ? r : r.next, t === s)) return n
      }
      r = r.next
    } while (r !== e);
    if (!n) return null;
    const a = n,
      h = n.x,
      l = n.y;
    let u = 1 / 0;
    r = n;
    do {
      if (s >= r.x && r.x >= h && s !== r.x && ys(i < l ? s : o, i, h, l, i < l ? o : s, i, r.x, r.y)) {
        const e = Math.abs(i - r.y) / (s - r.x);
        Ps(r, t) && (e < u || e === u && (r.x > n.x || r.x === n.x && gs(n, r))) && (n = r, u = e)
      }
      r = r.next
    } while (r !== a);
    return n
  }(t, e);
  if (!r) return e;
  const s = Ms(r, t);
  return hs(s, s.next), hs(r, r.next)
}

function gs(t, e) {
  return Ts(t.prev, t, e.prev) < 0 && Ts(e.next, t, t.next) < 0
}

function _s(t, e, r, s, i) {
  return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = (t - r) * i | 0) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (e - s) * i | 0) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
}

function xs(t) {
  let e = t,
    r = t;
  do {
    (e.x < r.x || e.x === r.x && e.y < r.y) && (r = e), e = e.next
  } while (e !== t);
  return r
}

function ys(t, e, r, s, i, n, o, a) {
  return (i - o) * (e - a) >= (t - o) * (n - a) && (t - o) * (s - a) >= (r - o) * (e - a) && (r - o) * (n - a) >= (i - o) * (s - a)
}

function bs(t, e, r, s, i, n, o, a) {
  return !(t === o && e === a) && ys(t, e, r, s, i, n, o, a)
}

function vs(t, e) {
  return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
    let r = t;
    do {
      if (r.i !== t.i && r.next.i !== t.i && r.i !== e.i && r.next.i !== e.i && ws(r, r.next, t, e)) return !0;
      r = r.next
    } while (r !== t);
    return !1
  }(t, e) && (Ps(t, e) && Ps(e, t) && function(t, e) {
    let r = t,
      s = !1;
    const i = (t.x + e.x) / 2,
      n = (t.y + e.y) / 2;
    do {
      r.y > n != r.next.y > n && r.next.y !== r.y && i < (r.next.x - r.x) * (n - r.y) / (r.next.y - r.y) + r.x && (s = !s), r = r.next
    } while (r !== t);
    return s
  }(t, e) && (Ts(t.prev, t, e.prev) || Ts(t, e.prev, e)) || Ss(t, e) && Ts(t.prev, t, t.next) > 0 && Ts(e.prev, e, e.next) > 0)
}

function Ts(t, e, r) {
  return (e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y)
}

function Ss(t, e) {
  return t.x === e.x && t.y === e.y
}

function ws(t, e, r, s) {
  const i = Cs(Ts(t, e, r)),
    n = Cs(Ts(t, e, s)),
    o = Cs(Ts(r, s, t)),
    a = Cs(Ts(r, s, e));
  return i !== n && o !== a || !(0 !== i || !Es(t, r, e)) || !(0 !== n || !Es(t, s, e)) || !(0 !== o || !Es(r, t, s)) || !(0 !== a || !Es(r, e, s))
}

function Es(t, e, r) {
  return e.x <= Math.max(t.x, r.x) && e.x >= Math.min(t.x, r.x) && e.y <= Math.max(t.y, r.y) && e.y >= Math.min(t.y, r.y)
}

function Cs(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0
}

function Ps(t, e) {
  return Ts(t.prev, t, t.next) < 0 ? Ts(t, e, t.next) >= 0 && Ts(t, t.prev, e) >= 0 : Ts(t, e, t.prev) < 0 || Ts(t, t.next, e) < 0
}

function Ms(t, e) {
  const r = Bs(t.i, t.x, t.y),
    s = Bs(e.i, e.x, e.y),
    i = t.next,
    n = e.prev;
  return t.next = e, e.prev = t, r.next = i, i.prev = r, s.next = r, r.prev = s, n.next = s, s.prev = n, s
}

function As(t, e, r, s) {
  const i = Bs(t, e, r);
  return s ? (i.next = s.next, i.prev = s, s.next.prev = i, s.next = i) : (i.prev = i, i.next = i), i
}

function Rs(t) {
  t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
}

function Bs(t, e, r) {
  return {
    i: t,
    x: e,
    y: r,
    prev: null,
    next: null,
    z: 0,
    prevZ: null,
    nextZ: null,
    steiner: !1
  }
}
u.handleByNamedList(a.Environment, ss);
const ks = os.default || os;
var Gs = (t => (t[t.NONE = 0] = "NONE", t[t.COLOR = 16384] = "COLOR", t[t.STENCIL = 1024] = "STENCIL", t[t.DEPTH = 256] = "DEPTH", t[t.COLOR_DEPTH = 16640] = "COLOR_DEPTH", t[t.COLOR_STENCIL = 17408] = "COLOR_STENCIL", t[t.DEPTH_STENCIL = 1280] = "DEPTH_STENCIL", t[t.ALL = 17664] = "ALL", t))(Gs || {});
class Is {
  constructor(t) {
    this.items = [], this._name = t
  }
  emit(t, e, r, s, i, n, o, a) {
    const {
      name: h,
      items: l
    } = this;
    for (let u = 0, c = l.length; u < c; u++) l[u][h](t, e, r, s, i, n, o, a);
    return this
  }
  add(t) {
    return t[this._name] && (this.remove(t), this.items.push(t)), this
  }
  remove(t) {
    const e = this.items.indexOf(t);
    return -1 !== e && this.items.splice(e, 1), this
  }
  contains(t) {
    return -1 !== this.items.indexOf(t)
  }
  removeAll() {
    return this.items.length = 0, this
  }
  destroy() {
    this.removeAll(), this.items = null, this._name = null
  }
  get empty() {
    return 0 === this.items.length
  }
  get name() {
    return this._name
  }
}
const Fs = ["init", "destroy", "contextChange", "resolutionChange", "resetState", "renderEnd", "renderStart", "render", "update", "postrender", "prerender"],
  Us = class t extends m {
    constructor(t) {
      super(), this.uid = F("renderer"), this.runners = Object.create(null), this.renderPipes = Object.create(null), this._initOptions = {}, this._systemsHash = Object.create(null), this.type = t.type, this.name = t.name, this.config = t;
      const e = [...Fs, ...this.config.runners ?? []];
      this._addRunners(...e), this._unsafeEvalCheck()
    }
    async init(e = {}) {
      const r = !0 === e.skipExtensionImports || !1 === e.manageImports;
      await async function(t) {
        if (!t)
          for (let e = 0; e < ss.length; e++) {
            const t = ss[e];
            if (t.value.test()) return void(await t.value.load())
          }
      }(r), this._addSystems(this.config.systems), this._addPipes(this.config.renderPipes, this.config.renderPipeAdaptors);
      for (const t in this._systemsHash) e = {
        ...this._systemsHash[t].constructor.defaultOptions,
        ...e
      };
      e = {
        ...t.defaultOptions,
        ...e
      }, this._roundPixels = e.roundPixels ? 1 : 0;
      for (let t = 0; t < this.runners.init.items.length; t++) await this.runners.init.items[t].init(e);
      this._initOptions = e
    }
    render(t, e) {
      let r = t;
      if (r instanceof _e && (r = {
          container: r
        }, e && (D(O, "passing a second argument is deprecated, please use render options instead"), r.target = e.renderTexture)), r.target || (r.target = this.view.renderTarget), r.target === this.view.renderTarget && (this._lastObjectRendered = r.container, r.clearColor ?? (r.clearColor = this.background.colorRgba), r.clear ?? (r.clear = this.background.clearBeforeRender)), r.clearColor) {
        const t = Array.isArray(r.clearColor) && 4 === r.clearColor.length;
        r.clearColor = t ? r.clearColor : At.shared.setValue(r.clearColor).toArray()
      }
      r.transform || (r.container.updateLocalTransform(), r.transform = r.container.localTransform), r.container.enableRenderGroup(), this.runners.prerender.emit(r), this.runners.renderStart.emit(r), this.runners.render.emit(r), this.runners.renderEnd.emit(r), this.runners.postrender.emit(r)
    }
    resize(t, e, r) {
      const s = this.view.resolution;
      this.view.resize(t, e, r), this.emit("resize", this.view.screen.width, this.view.screen.height, this.view.resolution), void 0 !== r && r !== s && this.runners.resolutionChange.emit(r)
    }
    clear(t = {}) {
      t.target || (t.target = this.renderTarget.renderTarget), t.clearColor || (t.clearColor = this.background.colorRgba), t.clear ?? (t.clear = Gs.ALL);
      const {
        clear: e,
        clearColor: r,
        target: s
      } = t;
      At.shared.setValue(r ?? this.background.colorRgba), this.renderTarget.clear(s, e, At.shared.toArray())
    }
    get resolution() {
      return this.view.resolution
    }
    set resolution(t) {
      this.view.resolution = t, this.runners.resolutionChange.emit(t)
    }
    get width() {
      return this.view.texture.frame.width
    }
    get height() {
      return this.view.texture.frame.height
    }
    get canvas() {
      return this.view.canvas
    }
    get lastObjectRendered() {
      return this._lastObjectRendered
    }
    get renderingToScreen() {
      return this.renderTarget.renderingToScreen
    }
    get screen() {
      return this.view.screen
    }
    _addRunners(...t) {
      t.forEach(t => {
        this.runners[t] = new Is(t)
      })
    }
    _addSystems(t) {
      let e;
      for (e in t) {
        const r = t[e];
        this._addSystem(r.value, r.name)
      }
    }
    _addSystem(t, e) {
      const r = new t(this);
      if (this[e]) throw new Error(`Whoops! The name "${e}" is already in use`);
      this[e] = r, this._systemsHash[e] = r;
      for (const s in this.runners) this.runners[s].add(r);
      return this
    }
    _addPipes(t, e) {
      const r = e.reduce((t, e) => (t[e.name] = e.value, t), {});
      t.forEach(t => {
        const e = t.value,
          s = t.name,
          i = r[s];
        this.renderPipes[s] = new e(this, i ? new i : null)
      })
    }
    destroy(t = !1) {
      this.runners.destroy.items.reverse(), this.runners.destroy.emit(t), Object.values(this.runners).forEach(t => {
        t.destroy()
      }), this._systemsHash = null, this.renderPipes = null
    }
    generateTexture(t) {
      return this.textureGenerator.generateTexture(t)
    }
    get roundPixels() {
      return !!this._roundPixels
    }
    _unsafeEvalCheck() {
      if (!ns()) throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")
    }
    resetState() {
      this.runners.resetState.emit()
    }
  };
Us.defaultOptions = {
  resolution: 1,
  failIfMajorPerformanceCaveat: !1,
  roundPixels: !1
};
let Os, Ds, Ls = Us;

function Ns(t) {
  return void 0 !== Os || (Os = (() => {
    var e;
    const r = {
      stencil: !0,
      failIfMajorPerformanceCaveat: t ?? Ls.defaultOptions.failIfMajorPerformanceCaveat
    };
    try {
      if (!Me.get().getWebGLRenderingContext()) return !1;
      let t = Me.get().createCanvas().getContext("webgl", r);
      const s = !!(null == (e = null == t ? void 0 : t.getContextAttributes()) ? void 0 : e.stencil);
      if (t) {
        const e = t.getExtension("WEBGL_lose_context");
        e && e.loseContext()
      }
      return t = null, s
    } catch (s) {
      return !1
    }
  })()), Os
}
async function zs(t = {}) {
  return void 0 !== Ds || (Ds = await (async () => {
    const e = Me.get().getNavigator().gpu;
    if (!e) return !1;
    try {
      const r = await e.requestAdapter(t);
      return await r.requestDevice(), !0
    } catch (r) {
      return !1
    }
  })()), Ds
}
const Hs = ["webgl", "webgpu", "canvas"],
  Ws = "8.11.0";
class Vs {
  static init() {
    var t;
    null == (t = globalThis.__PIXI_APP_INIT__) || t.call(globalThis, this, Ws)
  }
  static destroy() {}
}
Vs.extension = a.Application;
class Xs {
  constructor(t) {
    this._renderer = t
  }
  init() {
    var t;
    null == (t = globalThis.__PIXI_RENDERER_INIT__) || t.call(globalThis, this._renderer, Ws)
  }
  destroy() {
    this._renderer = null
  }
}
Xs.extension = {
  type: [a.WebGLSystem, a.WebGPUSystem],
  name: "initHook",
  priority: -10
};
const Ys = class t {
  constructor(...t) {
    this.stage = new _e, void 0 !== t[0] && D(O, "Application constructor options are deprecated, please use Application.init() instead.")
  }
  async init(e) {
    e = {
      ...e
    }, this.renderer = await async function(t) {
      let e, r = [];
      t.preference ? (r.push(t.preference), Hs.forEach(e => {
        e !== t.preference && r.push(e)
      })) : r = Hs.slice();
      let i = {};
      for (let o = 0; o < r.length; o++) {
        const n = r[o];
        if ("webgpu" === n && await zs()) {
          const {
            WebGPURenderer: r
          } = await s(async () => {
            const {
              WebGPURenderer: t
            } = await Promise.resolve().then(() => Vu);
            return {
              WebGPURenderer: t
            }
          }, void 0);
          e = r, i = {
            ...t,
            ...t.webgpu
          };
          break
        }
        if ("webgl" === n && Ns(t.failIfMajorPerformanceCaveat ?? Ls.defaultOptions.failIfMajorPerformanceCaveat)) {
          const {
            WebGLRenderer: r
          } = await s(async () => {
            const {
              WebGLRenderer: t
            } = await Promise.resolve().then(() => iu);
            return {
              WebGLRenderer: t
            }
          }, void 0);
          e = r, i = {
            ...t,
            ...t.webgl
          };
          break
        }
        if ("canvas" === n) throw i = {
          ...t
        }, new Error("CanvasRenderer is not yet implemented")
      }
      if (delete i.webgpu, delete i.webgl, !e) throw new Error("No available renderer for the current environment");
      const n = new e;
      return await n.init(i), n
    }(e), t._plugins.forEach(t => {
      t.init.call(this, e)
    })
  }
  render() {
    this.renderer.render({
      container: this.stage
    })
  }
  get canvas() {
    return this.renderer.canvas
  }
  get view() {
    return D(O, "Application.view is deprecated, please use Application.canvas instead."), this.renderer.canvas
  }
  get screen() {
    return this.renderer.screen
  }
  destroy(e = !1, r = !1) {
    const s = t._plugins.slice(0);
    s.reverse(), s.forEach(t => {
      t.destroy.call(this)
    }), this.stage.destroy(r), this.stage = null, this.renderer.destroy(e), this.renderer = null
  }
};
Ys._plugins = [];
let $s = Ys;
u.handleByList(a.Application, $s._plugins), u.add(Vs);
class js {
  static init(t) {
    Object.defineProperty(this, "resizeTo", {
      set(t) {
        globalThis.removeEventListener("resize", this.queueResize), this._resizeTo = t, t && (globalThis.addEventListener("resize", this.queueResize), this.resize())
      },
      get() {
        return this._resizeTo
      }
    }), this.queueResize = () => {
      this._resizeTo && (this._cancelResize(), this._resizeId = requestAnimationFrame(() => this.resize()))
    }, this._cancelResize = () => {
      this._resizeId && (cancelAnimationFrame(this._resizeId), this._resizeId = null)
    }, this.resize = () => {
      if (!this._resizeTo) return;
      let t, e;
      if (this._cancelResize(), this._resizeTo === globalThis.window) t = globalThis.innerWidth, e = globalThis.innerHeight;
      else {
        const {
          clientWidth: r,
          clientHeight: s
        } = this._resizeTo;
        t = r, e = s
      }
      this.renderer.resize(t, e), this.render()
    }, this._resizeId = null, this._resizeTo = null, this.resizeTo = t.resizeTo || null
  }
  static destroy() {
    globalThis.removeEventListener("resize", this.queueResize), this._cancelResize(), this._cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null
  }
}
js.extension = a.Application;
class qs {
  static init(t) {
    t = Object.assign({
      autoStart: !0,
      sharedTicker: !1
    }, t), Object.defineProperty(this, "ticker", {
      set(t) {
        this._ticker && this._ticker.remove(this.render, this), this._ticker = t, t && t.add(this.render, this, Be.LOW)
      },
      get() {
        return this._ticker
      }
    }), this.stop = () => {
      this._ticker.stop()
    }, this.start = () => {
      this._ticker.start()
    }, this._ticker = null, this.ticker = t.sharedTicker ? Fe.shared : new Fe, t.autoStart && this.start()
  }
  static destroy() {
    if (this._ticker) {
      const t = this._ticker;
      this.ticker = null, t.destroy()
    }
  }
}
qs.extension = a.Application;
class Ks extends m {
  constructor() {
    super(...arguments), this.chars = Object.create(null), this.lineHeight = 0, this.fontFamily = "", this.fontMetrics = {
      fontSize: 0,
      ascent: 0,
      descent: 0
    }, this.baseLineOffset = 0, this.distanceField = {
      type: "none",
      range: 0
    }, this.pages = [], this.applyFillAsTint = !0, this.baseMeasurementFontSize = 100, this.baseRenderedFontSize = 100
  }
  get font() {
    return D(O, "BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."), this.fontFamily
  }
  get pageTextures() {
    return D(O, "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."), this.pages
  }
  get size() {
    return D(O, "BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."), this.fontMetrics.fontSize
  }
  get distanceFieldRange() {
    return D(O, "BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."), this.distanceField.range
  }
  get distanceFieldType() {
    return D(O, "BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."), this.distanceField.type
  }
  destroy(t = !1) {
    var e;
    this.emit("destroy", this), this.removeAllListeners();
    for (const r in this.chars) null == (e = this.chars[r].texture) || e.destroy();
    this.chars = null, t && (this.pages.forEach(t => t.texture.destroy(!0)), this.pages = null)
  }
}
const Zs = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"];

function Qs(t) {
  const e = "number" == typeof t.fontSize ? `${t.fontSize}px` : t.fontSize;
  let r = t.fontFamily;
  Array.isArray(t.fontFamily) || (r = t.fontFamily.split(","));
  for (let s = r.length - 1; s >= 0; s--) {
    let t = r[s].trim();
    /([\"\'])[^\'\"]+\1/.test(t) || Zs.includes(t) || (t = `"${t}"`), r[s] = t
  }
  return `${t.fontStyle} ${t.fontVariant} ${t.fontWeight} ${e} ${r.join(",")}`
}
const Js = {
    willReadFrequently: !0
  },
  ti = class t {
    static get experimentalLetterSpacingSupported() {
      let e = t._experimentalLetterSpacingSupported;
      if (void 0 === e) {
        const r = Me.get().getCanvasRenderingContext2D().prototype;
        e = t._experimentalLetterSpacingSupported = "letterSpacing" in r || "textLetterSpacing" in r
      }
      return e
    }
    constructor(t, e, r, s, i, n, o, a, h) {
      this.text = t, this.style = e, this.width = r, this.height = s, this.lines = i, this.lineWidths = n, this.lineHeight = o, this.maxLineWidth = a, this.fontProperties = h
    }
    static measureText(e = " ", r, s = t._canvas, i = r.wordWrap) {
      var n;
      const o = Qs(r),
        a = t.measureFont(o);
      0 === a.fontSize && (a.fontSize = r.fontSize, a.ascent = r.fontSize);
      const h = t.__context;
      h.font = o;
      const l = (i ? t._wordWrap(e, r, s) : e).split(/(?:\r\n|\r|\n)/),
        u = new Array(l.length);
      let c = 0;
      for (let g = 0; g < l.length; g++) {
        const e = t._measureText(l[g], r.letterSpacing, h);
        u[g] = e, c = Math.max(c, e)
      }
      const d = (null == (n = r._stroke) ? void 0 : n.width) || 0;
      let p = c + d;
      r.dropShadow && (p += r.dropShadow.distance);
      const f = r.lineHeight || a.fontSize;
      let m = Math.max(f, a.fontSize + d) + (l.length - 1) * (f + r.leading);
      return r.dropShadow && (m += r.dropShadow.distance), new t(e, r, p, m, l, u, f + r.leading, c, a)
    }
    static _measureText(e, r, s) {
      let i = !1;
      t.experimentalLetterSpacingSupported && (t.experimentalLetterSpacing ? (s.letterSpacing = `${r}px`, s.textLetterSpacing = `${r}px`, i = !0) : (s.letterSpacing = "0px", s.textLetterSpacing = "0px"));
      const n = s.measureText(e);
      let o = n.width;
      const a = -n.actualBoundingBoxLeft;
      let h = n.actualBoundingBoxRight - a;
      if (o > 0)
        if (i) o -= r, h -= r;
        else {
          const s = (t.graphemeSegmenter(e).length - 1) * r;
          o += s, h += s
        } return Math.max(o, h)
    }
    static _wordWrap(e, r, s = t._canvas) {
      const i = s.getContext("2d", Js);
      let n = 0,
        o = "",
        a = "";
      const h = Object.create(null),
        {
          letterSpacing: l,
          whiteSpace: u
        } = r,
        c = t._collapseSpaces(u),
        d = t._collapseNewlines(u);
      let p = !c;
      const f = r.wordWrapWidth + l,
        m = t._tokenize(e);
      for (let g = 0; g < m.length; g++) {
        let e = m[g];
        if (t._isNewline(e)) {
          if (!d) {
            a += t._addLine(o), p = !c, o = "", n = 0;
            continue
          }
          e = " "
        }
        if (c) {
          const r = t.isBreakingSpace(e),
            s = t.isBreakingSpace(o[o.length - 1]);
          if (r && s) continue
        }
        const s = t._getFromCache(e, l, h, i);
        if (s > f)
          if ("" !== o && (a += t._addLine(o), o = "", n = 0), t.canBreakWords(e, r.breakWords)) {
            const s = t.wordWrapSplit(e);
            for (let u = 0; u < s.length; u++) {
              let c = s[u],
                d = c,
                m = 1;
              for (; s[u + m];) {
                const i = s[u + m];
                if (t.canBreakChars(d, i, e, u, r.breakWords)) break;
                c += i, d = i, m++
              }
              u += m - 1;
              const g = t._getFromCache(c, l, h, i);
              g + n > f && (a += t._addLine(o), p = !1, o = "", n = 0), o += c, n += g
            }
          } else {
            o.length > 0 && (a += t._addLine(o), o = "", n = 0);
            const r = g === m.length - 1;
            a += t._addLine(e, !r), p = !1, o = "", n = 0
          }
        else s + n > f && (p = !1, a += t._addLine(o), o = "", n = 0), (o.length > 0 || !t.isBreakingSpace(e) || p) && (o += e, n += s)
      }
      return a += t._addLine(o, !1), a
    }
    static _addLine(e, r = !0) {
      return e = t._trimRight(e), r ? `${e}\n` : e
    }
    static _getFromCache(e, r, s, i) {
      let n = s[e];
      return "number" != typeof n && (n = t._measureText(e, r, i) + r, s[e] = n), n
    }
    static _collapseSpaces(t) {
      return "normal" === t || "pre-line" === t
    }
    static _collapseNewlines(t) {
      return "normal" === t
    }
    static _trimRight(e) {
      if ("string" != typeof e) return "";
      for (let r = e.length - 1; r >= 0; r--) {
        const s = e[r];
        if (!t.isBreakingSpace(s)) break;
        e = e.slice(0, -1)
      }
      return e
    }
    static _isNewline(e) {
      return "string" == typeof e && t._newlines.includes(e.charCodeAt(0))
    }
    static isBreakingSpace(e, r) {
      return "string" == typeof e && t._breakingSpaces.includes(e.charCodeAt(0))
    }
    static _tokenize(e) {
      const r = [];
      let s = "";
      if ("string" != typeof e) return r;
      for (let i = 0; i < e.length; i++) {
        const n = e[i],
          o = e[i + 1];
        t.isBreakingSpace(n, o) || t._isNewline(n) ? ("" !== s && (r.push(s), s = ""), "\r" === n && "\n" === o ? (r.push("\r\n"), i++) : r.push(n)) : s += n
      }
      return "" !== s && r.push(s), r
    }
    static canBreakWords(t, e) {
      return e
    }
    static canBreakChars(t, e, r, s, i) {
      return !0
    }
    static wordWrapSplit(e) {
      return t.graphemeSegmenter(e)
    }
    static measureFont(e) {
      if (t._fonts[e]) return t._fonts[e];
      const r = t._context;
      r.font = e;
      const s = r.measureText(t.METRICS_STRING + t.BASELINE_SYMBOL),
        i = {
          ascent: s.actualBoundingBoxAscent,
          descent: s.actualBoundingBoxDescent,
          fontSize: s.actualBoundingBoxAscent + s.actualBoundingBoxDescent
        };
      return t._fonts[e] = i, i
    }
    static clearMetrics(e = "") {
      e ? delete t._fonts[e] : t._fonts = {}
    }
    static get _canvas() {
      if (!t.__canvas) {
        let r;
        try {
          const e = new OffscreenCanvas(0, 0),
            s = e.getContext("2d", Js);
          if (null == s ? void 0 : s.measureText) return t.__canvas = e, e;
          r = Me.get().createCanvas()
        } catch (e) {
          r = Me.get().createCanvas()
        }
        r.width = r.height = 10, t.__canvas = r
      }
      return t.__canvas
    }
    static get _context() {
      return t.__context || (t.__context = t._canvas.getContext("2d", Js)), t.__context
    }
  };
ti.METRICS_STRING = "|ÉqÅ", ti.BASELINE_SYMBOL = "M", ti.BASELINE_MULTIPLIER = 1.4, ti.HEIGHT_MULTIPLIER = 2, ti.graphemeSegmenter = (() => {
  if ("function" == typeof(null == Intl ? void 0 : Intl.Segmenter)) {
    const t = new Intl.Segmenter;
    return e => {
      const r = t.segment(e),
        s = [];
      let i = 0;
      for (const t of r) s[i++] = t.segment;
      return s
    }
  }
  return t => [...t]
})(), ti.experimentalLetterSpacing = !1, ti._fonts = {}, ti._newlines = [10, 13], ti._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
let ei = ti;
const ri = [{
    offset: 0,
    color: "white"
  }, {
    offset: 1,
    color: "black"
  }],
  si = class t {
    constructor(...e) {
      this.uid = F("fillGradient"), this.type = "linear", this.colorStops = [];
      let r = function(t) {
        let e = t[0] ?? {};
        return ("number" == typeof e || t[1]) && (D("8.5.2", "use options object instead"), e = {
          type: "linear",
          start: {
            x: t[0],
            y: t[1]
          },
          end: {
            x: t[2],
            y: t[3]
          },
          textureSpace: t[4],
          textureSize: t[5] ?? ii.defaultLinearOptions.textureSize
        }), e
      }(e);
      r = {
        ..."radial" === r.type ? t.defaultRadialOptions : t.defaultLinearOptions,
        ...H(r)
      }, this._textureSize = r.textureSize, this._wrapMode = r.wrapMode, "radial" === r.type ? (this.center = r.center, this.outerCenter = r.outerCenter ?? this.center, this.innerRadius = r.innerRadius, this.outerRadius = r.outerRadius, this.scale = r.scale, this.rotation = r.rotation) : (this.start = r.start, this.end = r.end), this.textureSpace = r.textureSpace, this.type = r.type, r.colorStops.forEach(t => {
        this.addColorStop(t.offset, t.color)
      })
    }
    addColorStop(t, e) {
      return this.colorStops.push({
        offset: t,
        color: At.shared.setValue(e).toHexa()
      }), this
    }
    buildLinearGradient() {
      if (this.texture) return;
      let {
        x: t,
        y: e
      } = this.start, {
        x: r,
        y: s
      } = this.end, i = r - t, n = s - e;
      const o = i < 0 || n < 0;
      if ("clamp-to-edge" === this._wrapMode) {
        if (i < 0) {
          const e = t;
          t = r, r = e, i *= -1
        }
        if (n < 0) {
          const t = e;
          e = s, s = t, n *= -1
        }
      }
      const a = this.colorStops.length ? this.colorStops : ri,
        h = this._textureSize,
        {
          canvas: l,
          context: u
        } = oi(h, 1),
        c = o ? u.createLinearGradient(this._textureSize, 0, 0, 0) : u.createLinearGradient(0, 0, this._textureSize, 0);
      ni(c, a), u.fillStyle = c, u.fillRect(0, 0, h, 1), this.texture = new Z({
        source: new Re({
          resource: l,
          addressMode: this._wrapMode
        })
      });
      const d = Math.sqrt(i * i + n * n),
        p = Math.atan2(n, i),
        f = new v;
      f.scale(d / h, 1), f.rotate(p), f.translate(t, e), "local" === this.textureSpace && f.scale(h, h), this.transform = f
    }
    buildGradient() {
      "linear" === this.type ? this.buildLinearGradient() : this.buildRadialGradient()
    }
    buildRadialGradient() {
      if (this.texture) return;
      const t = this.colorStops.length ? this.colorStops : ri,
        e = this._textureSize,
        {
          canvas: r,
          context: s
        } = oi(e, e),
        {
          x: i,
          y: n
        } = this.center,
        {
          x: o,
          y: a
        } = this.outerCenter,
        h = this.innerRadius,
        l = this.outerRadius,
        u = o - l,
        c = a - l,
        d = e / (2 * l),
        p = (i - u) * d,
        f = (n - c) * d,
        m = s.createRadialGradient(p, f, h * d, (o - u) * d, (a - c) * d, l * d);
      ni(m, t), s.fillStyle = t[t.length - 1].color, s.fillRect(0, 0, e, e), s.fillStyle = m, s.translate(p, f), s.rotate(this.rotation), s.scale(1, this.scale), s.translate(-p, -f), s.fillRect(0, 0, e, e), this.texture = new Z({
        source: new Re({
          resource: r,
          addressMode: this._wrapMode
        })
      });
      const g = new v;
      g.scale(1 / d, 1 / d), g.translate(u, c), "local" === this.textureSpace && g.scale(e, e), this.transform = g
    }
    get styleKey() {
      return this.uid
    }
    destroy() {
      var t;
      null == (t = this.texture) || t.destroy(!0), this.texture = null
    }
  };
si.defaultLinearOptions = {
  start: {
    x: 0,
    y: 0
  },
  end: {
    x: 0,
    y: 1
  },
  colorStops: [],
  textureSpace: "local",
  type: "linear",
  textureSize: 256,
  wrapMode: "clamp-to-edge"
}, si.defaultRadialOptions = {
  center: {
    x: .5,
    y: .5
  },
  innerRadius: 0,
  outerRadius: .5,
  colorStops: [],
  scale: 1,
  textureSpace: "local",
  type: "radial",
  textureSize: 256,
  wrapMode: "clamp-to-edge"
};
let ii = si;

function ni(t, e) {
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    t.addColorStop(s.offset, s.color)
  }
}

function oi(t, e) {
  const r = Me.get().createCanvas(t, e),
    s = r.getContext("2d");
  return {
    canvas: r,
    context: s
  }
}
const ai = {
  repeat: {
    addressModeU: "repeat",
    addressModeV: "repeat"
  },
  "repeat-x": {
    addressModeU: "repeat",
    addressModeV: "clamp-to-edge"
  },
  "repeat-y": {
    addressModeU: "clamp-to-edge",
    addressModeV: "repeat"
  },
  "no-repeat": {
    addressModeU: "clamp-to-edge",
    addressModeV: "clamp-to-edge"
  }
};
class hi {
  constructor(t, e) {
    this.uid = F("fillPattern"), this.transform = new v, this._styleKey = null, this.texture = t, this.transform.scale(1 / t.frame.width, 1 / t.frame.height), e && (t.source.style.addressModeU = ai[e].addressModeU, t.source.style.addressModeV = ai[e].addressModeV)
  }
  setTransform(t) {
    const e = this.texture;
    this.transform.copyFrom(t), this.transform.invert(), this.transform.scale(1 / e.frame.width, 1 / e.frame.height), this._styleKey = null
  }
  get styleKey() {
    return this._styleKey || (this._styleKey = `fill-pattern-${this.uid}-${this.texture.uid}-${this.transform.toArray().join("-")}`), this._styleKey
  }
}
var li = function(t) {
    var e = [];
    return t.replace(ci, function(t, r, s) {
      var i = r.toLowerCase();
      for (s = function(t) {
          var e = t.match(di);
          return e ? e.map(Number) : []
        }(s), "m" == i && s.length > 2 && (e.push([r].concat(s.splice(0, 2))), i = "l", r = "m" == r ? "l" : "L");;) {
        if (s.length == ui[i]) return s.unshift(r), e.push(s);
        if (s.length < ui[i]) throw new Error("malformed path data");
        e.push([r].concat(s.splice(0, ui[i])))
      }
    }), e
  },
  ui = {
    a: 7,
    c: 6,
    h: 1,
    l: 2,
    m: 2,
    q: 4,
    s: 4,
    t: 2,
    v: 1,
    z: 0
  },
  ci = /([astvzqmhlc])([^astvzqmhlc]*)/gi,
  di = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
const pi = n(li);
class fi {
  constructor(t = 0, e = 0, r = 0) {
    this.type = "circle", this.x = t, this.y = e, this.radius = r
  }
  clone() {
    return new fi(this.x, this.y, this.radius)
  }
  contains(t, e) {
    if (this.radius <= 0) return !1;
    const r = this.radius * this.radius;
    let s = this.x - t,
      i = this.y - e;
    return s *= s, i *= i, s + i <= r
  }
  strokeContains(t, e, r, s = .5) {
    if (0 === this.radius) return !1;
    const i = this.x - t,
      n = this.y - e,
      o = this.radius,
      a = (1 - s) * r,
      h = Math.sqrt(i * i + n * n);
    return h <= o + a && h > o - (r - a)
  }
  getBounds(t) {
    return t || (t = new G), t.x = this.x - this.radius, t.y = this.y - this.radius, t.width = 2 * this.radius, t.height = 2 * this.radius, t
  }
  copyFrom(t) {
    return this.x = t.x, this.y = t.y, this.radius = t.radius, this
  }
  copyTo(t) {
    return t.copyFrom(this), t
  }
  toString() {
    return `[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`
  }
}
class mi {
  constructor(t = 0, e = 0, r = 0, s = 0) {
    this.type = "ellipse", this.x = t, this.y = e, this.halfWidth = r, this.halfHeight = s
  }
  clone() {
    return new mi(this.x, this.y, this.halfWidth, this.halfHeight)
  }
  contains(t, e) {
    if (this.halfWidth <= 0 || this.halfHeight <= 0) return !1;
    let r = (t - this.x) / this.halfWidth,
      s = (e - this.y) / this.halfHeight;
    return r *= r, s *= s, r + s <= 1
  }
  strokeContains(t, e, r, s = .5) {
    const {
      halfWidth: i,
      halfHeight: n
    } = this;
    if (i <= 0 || n <= 0) return !1;
    const o = r * (1 - s),
      a = r - o,
      h = i - a,
      l = n - a,
      u = i + o,
      c = n + o,
      d = t - this.x,
      p = e - this.y;
    return d * d / (h * h) + p * p / (l * l) > 1 && d * d / (u * u) + p * p / (c * c) <= 1
  }
  getBounds(t) {
    return t || (t = new G), t.x = this.x - this.halfWidth, t.y = this.y - this.halfHeight, t.width = 2 * this.halfWidth, t.height = 2 * this.halfHeight, t
  }
  copyFrom(t) {
    return this.x = t.x, this.y = t.y, this.halfWidth = t.halfWidth, this.halfHeight = t.halfHeight, this
  }
  copyTo(t) {
    return t.copyFrom(this), t
  }
  toString() {
    return `[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`
  }
}

function gi(t, e, r, s, i, n) {
  const o = i - r,
    a = n - s,
    h = o * o + a * a;
  let l, u, c = -1;
  0 !== h && (c = ((t - r) * o + (e - s) * a) / h), c < 0 ? (l = r, u = s) : c > 1 ? (l = i, u = n) : (l = r + c * o, u = s + c * a);
  const d = t - l,
    p = e - u;
  return d * d + p * p
}
class _i {
  constructor(...t) {
    this.type = "polygon";
    let e = Array.isArray(t[0]) ? t[0] : t;
    if ("number" != typeof e[0]) {
      const t = [];
      for (let r = 0, s = e.length; r < s; r++) t.push(e[r].x, e[r].y);
      e = t
    }
    this.points = e, this.closePath = !0
  }
  isClockwise() {
    let t = 0;
    const e = this.points,
      r = e.length;
    for (let s = 0; s < r; s += 2) {
      const i = e[s],
        n = e[s + 1];
      t += (e[(s + 2) % r] - i) * (e[(s + 3) % r] + n)
    }
    return t < 0
  }
  containsPolygon(t) {
    const e = this.getBounds(void 0),
      r = t.getBounds(void 0);
    if (!e.containsRect(r)) return !1;
    const s = t.points;
    for (let i = 0; i < s.length; i += 2) {
      const t = s[i],
        e = s[i + 1];
      if (!this.contains(t, e)) return !1
    }
    return !0
  }
  clone() {
    const t = this.points.slice(),
      e = new _i(t);
    return e.closePath = this.closePath, e
  }
  contains(t, e) {
    let r = !1;
    const s = this.points.length / 2;
    for (let i = 0, n = s - 1; i < s; n = i++) {
      const s = this.points[2 * i],
        o = this.points[2 * i + 1],
        a = this.points[2 * n],
        h = this.points[2 * n + 1];
      o > e != h > e && t < (e - o) / (h - o) * (a - s) + s && (r = !r)
    }
    return r
  }
  strokeContains(t, e, r, s = .5) {
    const i = r * r,
      n = i * (1 - s),
      o = i - n,
      {
        points: a
      } = this,
      h = a.length - (this.closePath ? 0 : 2);
    for (let l = 0; l < h; l += 2) {
      const r = a[l],
        s = a[l + 1],
        i = a[(l + 2) % a.length],
        h = a[(l + 3) % a.length];
      if (gi(t, e, r, s, i, h) <= (Math.sign((i - r) * (e - s) - (h - s) * (t - r)) < 0 ? o : n)) return !0
    }
    return !1
  }
  getBounds(t) {
    t || (t = new G);
    const e = this.points;
    let r = 1 / 0,
      s = -1 / 0,
      i = 1 / 0,
      n = -1 / 0;
    for (let o = 0, a = e.length; o < a; o += 2) {
      const t = e[o],
        a = e[o + 1];
      r = t < r ? t : r, s = t > s ? t : s, i = a < i ? a : i, n = a > n ? a : n
    }
    return t.x = r, t.width = s - r, t.y = i, t.height = n - i, t
  }
  copyFrom(t) {
    return this.points = t.points.slice(), this.closePath = t.closePath, this
  }
  copyTo(t) {
    return t.copyFrom(this), t
  }
  toString() {
    return `[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t,e)=>`${t}, ${e}`,"")}]`
  }
  get lastX() {
    return this.points[this.points.length - 2]
  }
  get lastY() {
    return this.points[this.points.length - 1]
  }
  get x() {
    return D("8.11.0", "Polygon.lastX is deprecated, please use Polygon.lastX instead."), this.points[this.points.length - 2]
  }
  get y() {
    return D("8.11.0", "Polygon.y is deprecated, please use Polygon.lastY instead."), this.points[this.points.length - 1]
  }
  get startX() {
    return this.points[0]
  }
  get startY() {
    return this.points[1]
  }
}
const xi = (t, e, r, s, i, n, o) => {
  const a = t - r,
    h = e - s,
    l = Math.sqrt(a * a + h * h);
  return l >= i - n && l <= i + o
};
class yi {
  constructor(t = 0, e = 0, r = 0, s = 0, i = 20) {
    this.type = "roundedRectangle", this.x = t, this.y = e, this.width = r, this.height = s, this.radius = i
  }
  getBounds(t) {
    return t || (t = new G), t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t
  }
  clone() {
    return new yi(this.x, this.y, this.width, this.height, this.radius)
  }
  copyFrom(t) {
    return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
  }
  copyTo(t) {
    return t.copyFrom(this), t
  }
  contains(t, e) {
    if (this.width <= 0 || this.height <= 0) return !1;
    if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
      const r = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
      if (e >= this.y + r && e <= this.y + this.height - r || t >= this.x + r && t <= this.x + this.width - r) return !0;
      let s = t - (this.x + r),
        i = e - (this.y + r);
      const n = r * r;
      if (s * s + i * i <= n) return !0;
      if (s = t - (this.x + this.width - r), s * s + i * i <= n) return !0;
      if (i = e - (this.y + this.height - r), s * s + i * i <= n) return !0;
      if (s = t - (this.x + r), s * s + i * i <= n) return !0
    }
    return !1
  }
  strokeContains(t, e, r, s = .5) {
    const {
      x: i,
      y: n,
      width: o,
      height: a,
      radius: h
    } = this, l = r * (1 - s), u = r - l, c = i + h, d = n + h, p = i + o, f = n + a;
    return (t >= i - l && t <= i + u || t >= p - u && t <= p + l) && e >= d && e <= d + (a - 2 * h) || (e >= n - l && e <= n + u || e >= f - u && e <= f + l) && t >= c && t <= c + (o - 2 * h) || t < c && e < d && xi(t, e, c, d, h, u, l) || t > p - h && e < d && xi(t, e, p - h, d, h, u, l) || t > p - h && e > f - h && xi(t, e, p - h, f - h, h, u, l) || t < c && e > f - h && xi(t, e, c, f - h, h, u, l)
  }
  toString() {
    return `[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`
  }
}
const bi = {};

function vi(t, e, r) {
  let s = 2166136261;
  for (let i = 0; i < e; i++) s ^= t[i].uid, s = Math.imul(s, 16777619), s >>>= 0;
  return bi[s] || function(t, e, r, s) {
    const i = {};
    let n = 0;
    for (let a = 0; a < s; a++) {
      const r = a < e ? t[a] : Z.EMPTY.source;
      i[n++] = r.source, i[n++] = r.style
    }
    const o = new qr(i);
    return bi[r] = o, o
  }(t, e, s, r)
}
class Ti {
  constructor(t) {
    "number" == typeof t ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData), this.size = this.rawBinaryData.byteLength
  }
  get int8View() {
    return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View
  }
  get uint8View() {
    return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View
  }
  get int16View() {
    return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View
  }
  get int32View() {
    return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View
  }
  get float64View() {
    return this._float64Array || (this._float64Array = new Float64Array(this.rawBinaryData)), this._float64Array
  }
  get bigUint64View() {
    return this._bigUint64Array || (this._bigUint64Array = new BigUint64Array(this.rawBinaryData)), this._bigUint64Array
  }
  view(t) {
    return this[`${t}View`]
  }
  destroy() {
    this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this.uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null
  }
  static sizeOf(t) {
    switch (t) {
      case "int8":
      case "uint8":
        return 1;
      case "int16":
      case "uint16":
        return 2;
      case "int32":
      case "uint32":
      case "float32":
        return 4;
      default:
        throw new Error(`${t} isn't a valid view type`)
    }
  }
}

function Si(t, e) {
  const r = t.byteLength / 8 | 0,
    s = new Float64Array(t, 0, r);
  new Float64Array(e, 0, r).set(s);
  const i = t.byteLength - 8 * r;
  if (i > 0) {
    const s = new Uint8Array(t, 8 * r, i);
    new Uint8Array(e, 8 * r, i).set(s)
  }
}
const wi = {
  normal: "normal-npm",
  add: "add-npm",
  screen: "screen-npm"
};
var Ei = (t => (t[t.DISABLED = 0] = "DISABLED", t[t.RENDERING_MASK_ADD = 1] = "RENDERING_MASK_ADD", t[t.MASK_ACTIVE = 2] = "MASK_ACTIVE", t[t.INVERSE_MASK_ACTIVE = 3] = "INVERSE_MASK_ACTIVE", t[t.RENDERING_MASK_REMOVE = 4] = "RENDERING_MASK_REMOVE", t[t.NONE = 5] = "NONE", t))(Ei || {});

function Ci(t, e) {
  return "no-premultiply-alpha" === e.alphaMode && wi[t] || t
}
const Pi = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");

function Mi(t) {
  let e = "";
  for (let r = 0; r < t; ++r) r > 0 && (e += "\nelse "), r < t - 1 && (e += `if(test == ${r}.0){}`);
  return e
}

function Ai(t, e) {
  if (0 === t) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
  const r = e.createShader(e.FRAGMENT_SHADER);
  try {
    for (;;) {
      const s = Pi.replace(/%forloop%/gi, Mi(t));
      if (e.shaderSource(r, s), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS)) break;
      t = t / 2 | 0
    }
  } finally {
    e.deleteShader(r)
  }
  return t
}
let Ri = null;
class Bi {
  constructor() {
    this.ids = Object.create(null), this.textures = [], this.count = 0
  }
  clear() {
    for (let t = 0; t < this.count; t++) {
      const e = this.textures[t];
      this.textures[t] = null, this.ids[e.uid] = null
    }
    this.count = 0
  }
}
class ki {
  constructor() {
    this.renderPipeId = "batch", this.action = "startBatch", this.start = 0, this.size = 0, this.textures = new Bi, this.blendMode = "normal", this.topology = "triangle-strip", this.canBundle = !0
  }
  destroy() {
    this.textures = null, this.gpuBindGroup = null, this.bindGroup = null, this.batcher = null
  }
}
const Gi = [];
let Ii = 0;

function Fi() {
  return Ii > 0 ? Gi[--Ii] : new ki
}

function Ui(t) {
  Gi[Ii++] = t
}
let Oi = 0;
const Di = class t {
  constructor(e) {
    this.uid = F("batcher"), this.dirty = !0, this.batchIndex = 0, this.batches = [], this._elements = [], (e = {
      ...t.defaultOptions,
      ...e
    }).maxTextures || (D("v8.8.0", "maxTextures is a required option for Batcher now, please pass it in the options"), e.maxTextures = function() {
      var t;
      if (Ri) return Ri;
      const e = Ar();
      return Ri = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), Ri = Ai(Ri, e), null == (t = e.getExtension("WEBGL_lose_context")) || t.loseContext(), Ri
    }());
    const {
      maxTextures: r,
      attributesInitialSize: s,
      indicesInitialSize: i
    } = e;
    this.attributeBuffer = new Ti(4 * s), this.indexBuffer = new Uint16Array(i), this.maxTextures = r
  }
  begin() {
    this.elementSize = 0, this.elementStart = 0, this.indexSize = 0, this.attributeSize = 0;
    for (let t = 0; t < this.batchIndex; t++) Ui(this.batches[t]);
    this.batchIndex = 0, this._batchIndexStart = 0, this._batchIndexSize = 0, this.dirty = !0
  }
  add(t) {
    this._elements[this.elementSize++] = t, t._indexStart = this.indexSize, t._attributeStart = this.attributeSize, t._batcher = this, this.indexSize += t.indexSize, this.attributeSize += t.attributeSize * this.vertexSize
  }
  checkAndUpdateTexture(t, e) {
    const r = t._batch.textures.ids[e._source.uid];
    return !(!r && 0 !== r || (t._textureId = r, t.texture = e, 0))
  }
  updateElement(t) {
    this.dirty = !0;
    const e = this.attributeBuffer;
    t.packAsQuad ? this.packQuadAttributes(t, e.float32View, e.uint32View, t._attributeStart, t._textureId) : this.packAttributes(t, e.float32View, e.uint32View, t._attributeStart, t._textureId)
  }
  break (t) {
    const e = this._elements;
    if (!e[this.elementStart]) return;
    let r = Fi(),
      s = r.textures;
    s.clear();
    const i = e[this.elementStart];
    let n = Ci(i.blendMode, i.texture._source),
      o = i.topology;
    4 * this.attributeSize > this.attributeBuffer.size && this._resizeAttributeBuffer(4 * this.attributeSize), this.indexSize > this.indexBuffer.length && this._resizeIndexBuffer(this.indexSize);
    const a = this.attributeBuffer.float32View,
      h = this.attributeBuffer.uint32View,
      l = this.indexBuffer;
    let u = this._batchIndexSize,
      c = this._batchIndexStart,
      d = "startBatch";
    const p = this.maxTextures;
    for (let f = this.elementStart; f < this.elementSize; ++f) {
      const i = e[f];
      e[f] = null;
      const m = i.texture._source,
        g = Ci(i.blendMode, m),
        _ = n !== g || o !== i.topology;
      m._batchTick !== Oi || _ ? (m._batchTick = Oi, (s.count >= p || _) && (this._finishBatch(r, c, u - c, s, n, o, t, d), d = "renderBatch", c = u, n = g, o = i.topology, r = Fi(), s = r.textures, s.clear(), ++Oi), i._textureId = m._textureBindLocation = s.count, s.ids[m.uid] = s.count, s.textures[s.count++] = m, i._batch = r, u += i.indexSize, i.packAsQuad ? (this.packQuadAttributes(i, a, h, i._attributeStart, i._textureId), this.packQuadIndex(l, i._indexStart, i._attributeStart / this.vertexSize)) : (this.packAttributes(i, a, h, i._attributeStart, i._textureId), this.packIndex(i, l, i._indexStart, i._attributeStart / this.vertexSize))) : (i._textureId = m._textureBindLocation, u += i.indexSize, i.packAsQuad ? (this.packQuadAttributes(i, a, h, i._attributeStart, i._textureId), this.packQuadIndex(l, i._indexStart, i._attributeStart / this.vertexSize)) : (this.packAttributes(i, a, h, i._attributeStart, i._textureId), this.packIndex(i, l, i._indexStart, i._attributeStart / this.vertexSize)), i._batch = r)
    }
    s.count > 0 && (this._finishBatch(r, c, u - c, s, n, o, t, d), c = u, ++Oi), this.elementStart = this.elementSize, this._batchIndexStart = c, this._batchIndexSize = u
  }
  _finishBatch(t, e, r, s, i, n, o, a) {
    t.gpuBindGroup = null, t.bindGroup = null, t.action = a, t.batcher = this, t.textures = s, t.blendMode = i, t.topology = n, t.start = e, t.size = r, ++Oi, this.batches[this.batchIndex++] = t, o.add(t)
  }
  finish(t) {
    this.break(t)
  }
  ensureAttributeBuffer(t) {
    4 * t <= this.attributeBuffer.size || this._resizeAttributeBuffer(4 * t)
  }
  ensureIndexBuffer(t) {
    t <= this.indexBuffer.length || this._resizeIndexBuffer(t)
  }
  _resizeAttributeBuffer(t) {
    const e = Math.max(t, 2 * this.attributeBuffer.size),
      r = new Ti(e);
    Si(this.attributeBuffer.rawBinaryData, r.rawBinaryData), this.attributeBuffer = r
  }
  _resizeIndexBuffer(t) {
    const e = this.indexBuffer;
    let r = Math.max(t, 1.5 * e.length);
    r += r % 2;
    const s = r > 65535 ? new Uint32Array(r) : new Uint16Array(r);
    if (s.BYTES_PER_ELEMENT !== e.BYTES_PER_ELEMENT)
      for (let i = 0; i < e.length; i++) s[i] = e[i];
    else Si(e.buffer, s.buffer);
    this.indexBuffer = s
  }
  packQuadIndex(t, e, r) {
    t[e] = r + 0, t[e + 1] = r + 1, t[e + 2] = r + 2, t[e + 3] = r + 0, t[e + 4] = r + 2, t[e + 5] = r + 3
  }
  packIndex(t, e, r, s) {
    const i = t.indices,
      n = t.indexSize,
      o = t.indexOffset,
      a = t.attributeOffset;
    for (let h = 0; h < n; h++) e[r++] = s + i[h + o] - a
  }
  destroy() {
    for (let t = 0; t < this.batches.length; t++) Ui(this.batches[t]);
    this.batches = null;
    for (let t = 0; t < this._elements.length; t++) this._elements[t]._batch = null;
    this._elements = null, this.indexBuffer = null, this.attributeBuffer.destroy(), this.attributeBuffer = null
  }
};
Di.defaultOptions = {
  maxTextures: null,
  attributesInitialSize: 4,
  indicesInitialSize: 6
};
let Li = Di;
var Ni = (t => (t[t.MAP_READ = 1] = "MAP_READ", t[t.MAP_WRITE = 2] = "MAP_WRITE", t[t.COPY_SRC = 4] = "COPY_SRC", t[t.COPY_DST = 8] = "COPY_DST", t[t.INDEX = 16] = "INDEX", t[t.VERTEX = 32] = "VERTEX", t[t.UNIFORM = 64] = "UNIFORM", t[t.STORAGE = 128] = "STORAGE", t[t.INDIRECT = 256] = "INDIRECT", t[t.QUERY_RESOLVE = 512] = "QUERY_RESOLVE", t[t.STATIC = 1024] = "STATIC", t))(Ni || {});
class zi extends m {
  constructor(t) {
    let {
      data: e,
      size: r
    } = t;
    const {
      usage: s,
      label: i,
      shrinkToFit: n
    } = t;
    super(), this.uid = F("buffer"), this._resourceType = "buffer", this._resourceId = F("resource"), this._touched = 0, this._updateID = 1, this._dataInt32 = null, this.shrinkToFit = !0, this.destroyed = !1, e instanceof Array && (e = new Float32Array(e)), this._data = e, r ?? (r = null == e ? void 0 : e.byteLength);
    const o = !!e;
    this.descriptor = {
      size: r,
      usage: s,
      mappedAtCreation: o,
      label: i
    }, this.shrinkToFit = n ?? !0
  }
  get data() {
    return this._data
  }
  set data(t) {
    this.setDataWithSize(t, t.length, !0)
  }
  get dataInt32() {
    return this._dataInt32 || (this._dataInt32 = new Int32Array(this.data.buffer)), this._dataInt32
  }
  get static() {
    return !!(this.descriptor.usage & Ni.STATIC)
  }
  set static(t) {
    t ? this.descriptor.usage |= Ni.STATIC : this.descriptor.usage &= ~Ni.STATIC
  }
  setDataWithSize(t, e, r) {
    if (this._updateID++, this._updateSize = e * t.BYTES_PER_ELEMENT, this._data === t) return void(r && this.emit("update", this));
    const s = this._data;
    this._data = t, this._dataInt32 = null, s && s.length === t.length || !this.shrinkToFit && s && t.byteLength < s.byteLength ? r && this.emit("update", this) : (this.descriptor.size = t.byteLength, this._resourceId = F("resource"), this.emit("change", this))
  }
  update(t) {
    this._updateSize = t ?? this._updateSize, this._updateID++, this.emit("update", this)
  }
  destroy() {
    this.destroyed = !0, this.emit("destroy", this), this.emit("change", this), this._data = null, this.descriptor = null, this.removeAllListeners()
  }
}

function Hi(t, e) {
  if (!(t instanceof zi)) {
    let r = e ? Ni.INDEX : Ni.VERTEX;
    t instanceof Array && (e ? (t = new Uint32Array(t), r = Ni.INDEX | Ni.COPY_DST) : (t = new Float32Array(t), r = Ni.VERTEX | Ni.COPY_DST)), t = new zi({
      data: t,
      label: e ? "index-mesh-buffer" : "vertex-mesh-buffer",
      usage: r
    })
  }
  return t
}
class Wi extends m {
  constructor(t = {}) {
    super(), this.uid = F("geometry"), this._layoutKey = 0, this.instanceCount = 1, this._bounds = new tt, this._boundsDirty = !0;
    const {
      attributes: e,
      indexBuffer: r,
      topology: s
    } = t;
    if (this.buffers = [], this.attributes = {}, e)
      for (const i in e) this.addAttribute(i, e[i]);
    this.instanceCount = t.instanceCount ?? 1, r && this.addIndex(r), this.topology = s || "triangle-list"
  }
  onBufferUpdate() {
    this._boundsDirty = !0, this.emit("update", this)
  }
  getAttribute(t) {
    return this.attributes[t]
  }
  getIndex() {
    return this.indexBuffer
  }
  getBuffer(t) {
    return this.getAttribute(t).buffer
  }
  getSize() {
    for (const t in this.attributes) {
      const e = this.attributes[t];
      return e.buffer.data.length / (e.stride / 4 || e.size)
    }
    return 0
  }
  addAttribute(t, e) {
    const r = function(t) {
      return (t instanceof zi || Array.isArray(t) || t.BYTES_PER_ELEMENT) && (t = {
        buffer: t
      }), t.buffer = Hi(t.buffer, !1), t
    }(e); - 1 === this.buffers.indexOf(r.buffer) && (this.buffers.push(r.buffer), r.buffer.on("update", this.onBufferUpdate, this), r.buffer.on("change", this.onBufferUpdate, this)), this.attributes[t] = r
  }
  addIndex(t) {
    this.indexBuffer = Hi(t, !0), this.buffers.push(this.indexBuffer)
  }
  get bounds() {
    return this._boundsDirty ? (this._boundsDirty = !1, function(t, e, r) {
      const s = t.getAttribute("aPosition");
      if (!s) return r.minX = 0, r.minY = 0, r.maxX = 0, r.maxY = 0, r;
      const i = s.buffer.data;
      let n = 1 / 0,
        o = 1 / 0,
        a = -1 / 0,
        h = -1 / 0;
      const l = i.BYTES_PER_ELEMENT,
        u = (s.offset || 0) / l,
        c = (s.stride || 8) / l;
      for (let d = u; d < i.length; d += c) {
        const t = i[d],
          e = i[d + 1];
        t > a && (a = t), e > h && (h = e), t < n && (n = t), e < o && (o = e)
      }
      return r.minX = n, r.minY = o, r.maxX = a, r.maxY = h, r
    }(this, 0, this._bounds)) : this._bounds
  }
  destroy(t = !1) {
    this.emit("destroy", this), this.removeAllListeners(), t && this.buffers.forEach(t => t.destroy()), this.attributes = null, this.buffers = null, this.indexBuffer = null, this._bounds = null
  }
}
const Vi = new Float32Array(1),
  Xi = new Uint32Array(1);
class Yi extends Wi {
  constructor() {
    const t = new zi({
      data: Vi,
      label: "attribute-batch-buffer",
      usage: Ni.VERTEX | Ni.COPY_DST,
      shrinkToFit: !1
    });
    super({
      attributes: {
        aPosition: {
          buffer: t,
          format: "float32x2",
          stride: 24,
          offset: 0
        },
        aUV: {
          buffer: t,
          format: "float32x2",
          stride: 24,
          offset: 8
        },
        aColor: {
          buffer: t,
          format: "unorm8x4",
          stride: 24,
          offset: 16
        },
        aTextureIdAndRound: {
          buffer: t,
          format: "uint16x2",
          stride: 24,
          offset: 20
        }
      },
      indexBuffer: new zi({
        data: Xi,
        label: "index-batch-buffer",
        usage: Ni.INDEX | Ni.COPY_DST,
        shrinkToFit: !1
      })
    })
  }
}

function $i(t, e, r) {
  if (t)
    for (const s in t) {
      const i = e[s.toLocaleLowerCase()];
      if (i) {
        let e = t[s];
        "header" === s && (e = e.replace(/@in\s+[^;]+;\s*/g, "").replace(/@out\s+[^;]+;\s*/g, "")), r && i.push(`//----${r}----//`), i.push(e)
      } else Bt(`${s} placement hook does not exist in shader`)
    }
}
const ji = /\{\{(.*?)\}\}/g;

function qi(t) {
  var e;
  const r = {};
  return ((null == (e = t.match(ji)) ? void 0 : e.map(t => t.replace(/[{()}]/g, ""))) ?? []).forEach(t => {
    r[t] = []
  }), r
}

function Ki(t, e) {
  let r;
  const s = /@in\s+([^;]+);/g;
  for (; null !== (r = s.exec(t));) e.push(r[1])
}

function Zi(t, e, r = !1) {
  const s = [];
  Ki(e, s), t.forEach(t => {
    t.header && Ki(t.header, s)
  });
  const i = s;
  r && i.sort();
  const n = i.map((t, e) => `       @location(${e}) ${t},`).join("\n");
  let o = e.replace(/@in\s+[^;]+;\s*/g, "");
  return o = o.replace("{{in}}", `\n${n}\n`), o
}

function Qi(t, e) {
  let r;
  const s = /@out\s+([^;]+);/g;
  for (; null !== (r = s.exec(t));) e.push(r[1])
}

function Ji(t, e) {
  let r = t;
  for (const s in e) {
    const t = e[s];
    r = t.join("\n").length ? r.replace(`{{${s}}}`, `//-----${s} START-----//\n${t.join("\n")}\n//----${s} FINISH----//`) : r.replace(`{{${s}}}`, "")
  }
  return r
}
const tn = Object.create(null),
  en = new Map;
let rn = 0;

function sn({
  template: t,
  bits: e
}) {
  const r = nn(t, e);
  return tn[r] || (tn[r] = on(t.vertex, t.fragment, e)), tn[r]
}

function nn(t, e) {
  return e.map(t => (en.has(t) || en.set(t, rn++), en.get(t))).sort((t, e) => t - e).join("-") + t.vertex + t.fragment
}

function on(t, e, r) {
  const s = qi(t),
    i = qi(e);
  return r.forEach(t => {
    $i(t.vertex, s, t.name), $i(t.fragment, i, t.name)
  }), {
    vertex: Ji(t, s),
    fragment: Ji(e, i)
  }
}
const an = {
    name: "global-uniforms-bit",
    vertex: {
      header: "\n        struct GlobalUniforms {\n            uProjectionMatrix:mat3x3<f32>,\n            uWorldTransformMatrix:mat3x3<f32>,\n            uWorldColorAlpha: vec4<f32>,\n            uResolution: vec2<f32>,\n        }\n\n        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;\n        "
    }
  },
  hn = {
    name: "global-uniforms-bit",
    vertex: {
      header: "\n          uniform mat3 uProjectionMatrix;\n          uniform mat3 uWorldTransformMatrix;\n          uniform vec4 uWorldColorAlpha;\n          uniform vec2 uResolution;\n        "
    }
  };

function ln({
  bits: t,
  name: e
}) {
  const r = function({
    template: t,
    bits: e
  }) {
    const r = nn(t, e);
    if (tn[r]) return tn[r];
    const {
      vertex: s,
      fragment: i
    } = function(t, e) {
      const r = e.map(t => t.vertex).filter(t => !!t),
        s = e.map(t => t.fragment).filter(t => !!t);
      let i = Zi(r, t.vertex, !0);
      return i = function(t, e) {
        const r = [];
        Qi(e, r), t.forEach(t => {
          t.header && Qi(t.header, r)
        });
        let s = 0;
        const i = r.sort().map(t => t.indexOf("builtin") > -1 ? t : `@location(${s++}) ${t}`).join(",\n"),
          n = r.sort().map(t => {
            return `       var ${e=t,e.replace(/@.*?\s+/g,"")};`;
            var e
          }).join("\n"),
          o = `return VSOutput(\n            ${r.sort().map(t=>` ${function(t){const e=/\b(\w+)\s*:/g.exec(t);return e?e[1]:""}(t)}`).join(",\n")});`;
        let a = e.replace(/@out\s+[^;]+;\s*/g, "");
        return a = a.replace("{{struct}}", `\n${i}\n`), a = a.replace("{{start}}", `\n${n}\n`), a = a.replace("{{return}}", `\n${o}\n`), a
      }(r, i), {
        vertex: i,
        fragment: Zi(s, t.fragment, !0)
      }
    }(t, e);
    return tn[r] = on(s, i, e), tn[r]
  }({
    template: {
      fragment: "\n    @in vUV : vec2<f32>;\n    @in vColor : vec4<f32>;\n\n    {{header}}\n\n    @fragment\n    fn main(\n        {{in}}\n      ) -> @location(0) vec4<f32> {\n\n        {{start}}\n\n        var outColor:vec4<f32>;\n\n        {{main}}\n\n        var finalColor:vec4<f32> = outColor * vColor;\n\n        {{end}}\n\n        return finalColor;\n      };\n",
      vertex: "\n    @in aPosition: vec2<f32>;\n    @in aUV: vec2<f32>;\n\n    @out @builtin(position) vPosition: vec4<f32>;\n    @out vUV : vec2<f32>;\n    @out vColor : vec4<f32>;\n\n    {{header}}\n\n    struct VSOutput {\n        {{struct}}\n    };\n\n    @vertex\n    fn main( {{in}} ) -> VSOutput {\n\n        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;\n        var modelMatrix = mat3x3<f32>(\n            1.0, 0.0, 0.0,\n            0.0, 1.0, 0.0,\n            0.0, 0.0, 1.0\n          );\n        var position = aPosition;\n        var uv = aUV;\n\n        {{start}}\n\n        vColor = vec4<f32>(1., 1., 1., 1.);\n\n        {{main}}\n\n        vUV = uv;\n\n        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;\n\n        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);\n\n        vColor *= globalUniforms.uWorldColorAlpha;\n\n        {{end}}\n\n        {{return}}\n    };\n"
    },
    bits: [an, ...t]
  });
  return Wr.from({
    name: e,
    vertex: {
      source: r.vertex,
      entryPoint: "main"
    },
    fragment: {
      source: r.fragment,
      entryPoint: "main"
    }
  })
}

function un({
  bits: t,
  name: e
}) {
  return new Ur({
    name: e,
    ...sn({
      template: {
        vertex: "\n    in vec2 aPosition;\n    in vec2 aUV;\n\n    out vec4 vColor;\n    out vec2 vUV;\n\n    {{header}}\n\n    void main(void){\n\n        mat3 worldTransformMatrix = uWorldTransformMatrix;\n        mat3 modelMatrix = mat3(\n            1.0, 0.0, 0.0,\n            0.0, 1.0, 0.0,\n            0.0, 0.0, 1.0\n          );\n        vec2 position = aPosition;\n        vec2 uv = aUV;\n\n        {{start}}\n\n        vColor = vec4(1.);\n\n        {{main}}\n\n        vUV = uv;\n\n        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;\n\n        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n\n        vColor *= uWorldColorAlpha;\n\n        {{end}}\n    }\n",
        fragment: "\n\n    in vec4 vColor;\n    in vec2 vUV;\n\n    out vec4 finalColor;\n\n    {{header}}\n\n    void main(void) {\n\n        {{start}}\n\n        vec4 outColor;\n\n        {{main}}\n\n        finalColor = outColor * vColor;\n\n        {{end}}\n    }\n"
      },
      bits: [hn, ...t]
    })
  })
}
const cn = {
    name: "color-bit",
    vertex: {
      header: "\n            @in aColor: vec4<f32>;\n        ",
      main: "\n            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);\n        "
    }
  },
  dn = {
    name: "color-bit",
    vertex: {
      header: "\n            in vec4 aColor;\n        ",
      main: "\n            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);\n        "
    }
  },
  pn = {};

function fn(t) {
  const e = [];
  if (1 === t) e.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"), e.push("@group(1) @binding(1) var textureSampler1: sampler;");
  else {
    let r = 0;
    for (let s = 0; s < t; s++) e.push(`@group(1) @binding(${r++}) var textureSource${s+1}: texture_2d<f32>;`), e.push(`@group(1) @binding(${r++}) var textureSampler${s+1}: sampler;`)
  }
  return e.join("\n")
}

function mn(t) {
  const e = [];
  if (1 === t) e.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");
  else {
    e.push("switch vTextureId {");
    for (let r = 0; r < t; r++) r === t - 1 ? e.push("  default:{") : e.push(`  case ${r}:{`), e.push(`      outColor = textureSampleGrad(textureSource${r+1}, textureSampler${r+1}, vUV, uvDx, uvDy);`), e.push("      break;}");
    e.push("}")
  }
  return e.join("\n")
}

function gn(t) {
  return pn[t] || (pn[t] = {
    name: "texture-batch-bit",
    vertex: {
      header: "\n                @in aTextureIdAndRound: vec2<u32>;\n                @out @interpolate(flat) vTextureId : u32;\n            ",
      main: "\n                vTextureId = aTextureIdAndRound.y;\n            ",
      end: "\n                if(aTextureIdAndRound.x == 1)\n                {\n                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);\n                }\n            "
    },
    fragment: {
      header: `\n                @in @interpolate(flat) vTextureId: u32;\n\n                ${fn(t)}\n            `,
      main: `\n                var uvDx = dpdx(vUV);\n                var uvDy = dpdy(vUV);\n\n                ${mn(t)}\n            `
    }
  }), pn[t]
}
const _n = {};

function xn(t) {
  const e = [];
  for (let r = 0; r < t; r++) r > 0 && e.push("else"), r < t - 1 && e.push(`if(vTextureId < ${r}.5)`), e.push("{"), e.push(`\toutColor = texture(uTextures[${r}], vUV);`), e.push("}");
  return e.join("\n")
}

function yn(t) {
  return _n[t] || (_n[t] = {
    name: "texture-batch-bit",
    vertex: {
      header: "\n                in vec2 aTextureIdAndRound;\n                out float vTextureId;\n\n            ",
      main: "\n                vTextureId = aTextureIdAndRound.y;\n            ",
      end: "\n                if(aTextureIdAndRound.x == 1.)\n                {\n                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);\n                }\n            "
    },
    fragment: {
      header: `\n                in float vTextureId;\n\n                uniform sampler2D uTextures[${t}];\n\n            `,
      main: `\n\n                ${xn(t)}\n            `
    }
  }), _n[t]
}
const bn = {
    name: "round-pixels-bit",
    vertex: {
      header: "\n            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>\n            {\n                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;\n            }\n        "
    }
  },
  vn = {
    name: "round-pixels-bit",
    vertex: {
      header: "\n            vec2 roundPixels(vec2 position, vec2 targetSize)\n            {\n                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;\n            }\n        "
    }
  },
  Tn = {};

function Sn(t) {
  let e = Tn[t];
  if (e) return e;
  const r = new Int32Array(t);
  for (let s = 0; s < t; s++) r[s] = s;
  return e = Tn[t] = new jr({
    uTextures: {
      value: r,
      type: "i32",
      size: t
    }
  }, {
    isStatic: !0
  }), e
}
class wn extends Zr {
  constructor(t) {
    super({
      glProgram: un({
        name: "batch",
        bits: [dn, yn(t), vn]
      }),
      gpuProgram: ln({
        name: "batch",
        bits: [cn, gn(t), bn]
      }),
      resources: {
        batchSamplers: Sn(t)
      }
    })
  }
}
let En = null;
const Cn = class t extends Li {
  constructor(e) {
    super(e), this.geometry = new Yi, this.name = t.extension.name, this.vertexSize = 6, En ?? (En = new wn(e.maxTextures)), this.shader = En
  }
  packAttributes(t, e, r, s, i) {
    const n = i << 16 | 65535 & t.roundPixels,
      o = t.transform,
      a = o.a,
      h = o.b,
      l = o.c,
      u = o.d,
      c = o.tx,
      d = o.ty,
      {
        positions: p,
        uvs: f
      } = t,
      m = t.color,
      g = t.attributeOffset,
      _ = g + t.attributeSize;
    for (let x = g; x < _; x++) {
      const t = 2 * x,
        i = p[t],
        o = p[t + 1];
      e[s++] = a * i + l * o + c, e[s++] = u * o + h * i + d, e[s++] = f[t], e[s++] = f[t + 1], r[s++] = m, r[s++] = n
    }
  }
  packQuadAttributes(t, e, r, s, i) {
    const n = t.texture,
      o = t.transform,
      a = o.a,
      h = o.b,
      l = o.c,
      u = o.d,
      c = o.tx,
      d = o.ty,
      p = t.bounds,
      f = p.maxX,
      m = p.minX,
      g = p.maxY,
      _ = p.minY,
      x = n.uvs,
      y = t.color,
      b = i << 16 | 65535 & t.roundPixels;
    e[s + 0] = a * m + l * _ + c, e[s + 1] = u * _ + h * m + d, e[s + 2] = x.x0, e[s + 3] = x.y0, r[s + 4] = y, r[s + 5] = b, e[s + 6] = a * f + l * _ + c, e[s + 7] = u * _ + h * f + d, e[s + 8] = x.x1, e[s + 9] = x.y1, r[s + 10] = y, r[s + 11] = b, e[s + 12] = a * f + l * g + c, e[s + 13] = u * g + h * f + d, e[s + 14] = x.x2, e[s + 15] = x.y2, r[s + 16] = y, r[s + 17] = b, e[s + 18] = a * m + l * g + c, e[s + 19] = u * g + h * m + d, e[s + 20] = x.x3, e[s + 21] = x.y3, r[s + 22] = y, r[s + 23] = b
  }
};
Cn.extension = {
  type: [a.Batcher],
  name: "default"
};
let Pn = Cn;

function Mn(t, e, r, s, i) {
  const n = e.a,
    o = e.b,
    a = e.c,
    h = e.d,
    l = e.tx,
    u = e.ty;
  r || (r = 0), s || (s = 2), i || (i = t.length / s - r);
  let c = r * s;
  for (let d = 0; d < i; d++) {
    const e = t[c],
      r = t[c + 1];
    t[c] = n * e + a * r + l, t[c + 1] = o * e + h * r + u, c += s
  }
}
const An = new v;
class Rn {
  constructor() {
    this.packAsQuad = !1, this.batcherName = "default", this.topology = "triangle-list", this.applyTransform = !0, this.roundPixels = 0, this._batcher = null, this._batch = null
  }
  get uvs() {
    return this.geometryData.uvs
  }
  get positions() {
    return this.geometryData.vertices
  }
  get indices() {
    return this.geometryData.indices
  }
  get blendMode() {
    return this.renderable && this.applyTransform ? this.renderable.groupBlendMode : "normal"
  }
  get color() {
    const t = this.baseColor,
      e = t >> 16 | 65280 & t | (255 & t) << 16,
      r = this.renderable;
    return r ? qt(e, r.groupColor) + (this.alpha * r.groupAlpha * 255 << 24) : e + (255 * this.alpha << 24)
  }
  get transform() {
    var t;
    return (null == (t = this.renderable) ? void 0 : t.groupTransform) || An
  }
  copyTo(t) {
    t.indexOffset = this.indexOffset, t.indexSize = this.indexSize, t.attributeOffset = this.attributeOffset, t.attributeSize = this.attributeSize, t.baseColor = this.baseColor, t.alpha = this.alpha, t.texture = this.texture, t.geometryData = this.geometryData, t.topology = this.topology
  }
  reset() {
    this.applyTransform = !0, this.renderable = null, this.topology = "triangle-list"
  }
}
const Bn = {
    extension: {
      type: a.ShapeBuilder,
      name: "circle"
    },
    build(t, e) {
      let r, s, i, n, o, a;
      if ("circle" === t.type) {
        const e = t;
        if (o = a = e.radius, o <= 0) return !1;
        r = e.x, s = e.y, i = n = 0
      } else if ("ellipse" === t.type) {
        const e = t;
        if (o = e.halfWidth, a = e.halfHeight, o <= 0 || a <= 0) return !1;
        r = e.x, s = e.y, i = n = 0
      } else {
        const e = t,
          h = e.width / 2,
          l = e.height / 2;
        r = e.x + h, s = e.y + l, o = a = Math.max(0, Math.min(e.radius, Math.min(h, l))), i = h - o, n = l - a
      }
      if (i < 0 || n < 0) return !1;
      const h = Math.ceil(2.3 * Math.sqrt(o + a)),
        l = 8 * h + (i ? 4 : 0) + (n ? 4 : 0);
      if (0 === l) return !1;
      if (0 === h) return e[0] = e[6] = r + i, e[1] = e[3] = s + n, e[2] = e[4] = r - i, e[5] = e[7] = s - n, !0;
      let u = 0,
        c = 4 * h + (i ? 2 : 0) + 2,
        d = c,
        p = l,
        f = i + o,
        m = n,
        g = r + f,
        _ = r - f,
        x = s + m;
      if (e[u++] = g, e[u++] = x, e[--c] = x, e[--c] = _, n) {
        const t = s - m;
        e[d++] = _, e[d++] = t, e[--p] = t, e[--p] = g
      }
      for (let b = 1; b < h; b++) {
        const t = Math.PI / 2 * (b / h),
          l = i + Math.cos(t) * o,
          f = n + Math.sin(t) * a,
          m = r + l,
          g = r - l,
          _ = s + f,
          x = s - f;
        e[u++] = m, e[u++] = _, e[--c] = _, e[--c] = g, e[d++] = g, e[d++] = x, e[--p] = x, e[--p] = m
      }
      f = i, m = n + a, g = r + f, _ = r - f, x = s + m;
      const y = s - m;
      return e[u++] = g, e[u++] = x, e[--p] = y, e[--p] = g, i && (e[u++] = _, e[u++] = x, e[--p] = y, e[--p] = _), !0
    },
    triangulate(t, e, r, s, i, n) {
      if (0 === t.length) return;
      let o = 0,
        a = 0;
      for (let u = 0; u < t.length; u += 2) o += t[u], a += t[u + 1];
      o /= t.length / 2, a /= t.length / 2;
      let h = s;
      e[h * r] = o, e[h * r + 1] = a;
      const l = h++;
      for (let u = 0; u < t.length; u += 2) e[h * r] = t[u], e[h * r + 1] = t[u + 1], u > 0 && (i[n++] = h, i[n++] = l, i[n++] = h - 1), h++;
      i[n++] = l + 1, i[n++] = l, i[n++] = h - 1
    }
  },
  kn = {
    ...Bn,
    extension: {
      ...Bn.extension,
      name: "ellipse"
    }
  },
  Gn = {
    ...Bn,
    extension: {
      ...Bn.extension,
      name: "roundedRectangle"
    }
  },
  In = 1e-4;

function Fn(t, e, r, s, i, n, o, a) {
  let h, l;
  o ? (h = s, l = -r) : (h = -s, l = r);
  const u = t - r * i + h,
    c = e - s * i + l,
    d = t + r * n + h,
    p = e + s * n + l;
  return a.push(u, c), a.push(d, p), 2
}

function Un(t, e, r, s, i, n, o, a) {
  const h = r - t,
    l = s - e;
  let u = Math.atan2(h, l),
    c = Math.atan2(i - t, n - e);
  a && u < c ? u += 2 * Math.PI : !a && u > c && (c += 2 * Math.PI);
  let d = u;
  const p = c - u,
    f = Math.abs(p),
    m = Math.sqrt(h * h + l * l),
    g = 1 + (15 * f * Math.sqrt(m) / Math.PI | 0),
    _ = p / g;
  if (d += _, a) {
    o.push(t, e), o.push(r, s);
    for (let r = 1, s = d; r < g; r++, s += _) o.push(t, e), o.push(t + Math.sin(s) * m, e + Math.cos(s) * m);
    o.push(t, e), o.push(i, n)
  } else {
    o.push(r, s), o.push(t, e);
    for (let r = 1, s = d; r < g; r++, s += _) o.push(t + Math.sin(s) * m, e + Math.cos(s) * m), o.push(t, e);
    o.push(i, n), o.push(t, e)
  }
  return 2 * g
}

function On(t, e, r, s, i, n, o) {
  const a = ks(t, e, 2);
  if (!a) return;
  for (let l = 0; l < a.length; l += 3) n[o++] = a[l] + i, n[o++] = a[l + 1] + i, n[o++] = a[l + 2] + i;
  let h = i * s;
  for (let l = 0; l < t.length; l += 2) r[h] = t[l], r[h + 1] = t[l + 1], h += s
}
const Dn = [],
  Ln = {
    extension: {
      type: a.ShapeBuilder,
      name: "polygon"
    },
    build(t, e) {
      for (let r = 0; r < t.points.length; r++) e[r] = t.points[r];
      return !0
    },
    triangulate(t, e, r, s, i, n) {
      On(t, Dn, e, r, s, i, n)
    }
  },
  Nn = {
    extension: {
      type: a.ShapeBuilder,
      name: "rectangle"
    },
    build(t, e) {
      const r = t,
        s = r.x,
        i = r.y,
        n = r.width,
        o = r.height;
      return n > 0 && o > 0 && (e[0] = s, e[1] = i, e[2] = s + n, e[3] = i, e[4] = s + n, e[5] = i + o, e[6] = s, e[7] = i + o, !0)
    },
    triangulate(t, e, r, s, i, n) {
      let o = 0;
      e[(s *= r) + o] = t[0], e[s + o + 1] = t[1], o += r, e[s + o] = t[2], e[s + o + 1] = t[3], o += r, e[s + o] = t[6], e[s + o + 1] = t[7], o += r, e[s + o] = t[4], e[s + o + 1] = t[5], o += r;
      const a = s / r;
      i[n++] = a, i[n++] = a + 1, i[n++] = a + 2, i[n++] = a + 1, i[n++] = a + 3, i[n++] = a + 2
    }
  },
  zn = {
    extension: {
      type: a.ShapeBuilder,
      name: "triangle"
    },
    build: (t, e) => (e[0] = t.x, e[1] = t.y, e[2] = t.x2, e[3] = t.y2, e[4] = t.x3, e[5] = t.y3, !0),
    triangulate(t, e, r, s, i, n) {
      let o = 0;
      e[(s *= r) + o] = t[0], e[s + o + 1] = t[1], o += r, e[s + o] = t[2], e[s + o + 1] = t[3], o += r, e[s + o] = t[4], e[s + o + 1] = t[5];
      const a = s / r;
      i[n++] = a, i[n++] = a + 1, i[n++] = a + 2
    }
  },
  Hn = new v,
  Wn = new G,
  Vn = {};
u.handleByMap(a.ShapeBuilder, Vn), u.add(Nn, Ln, zn, Bn, kn, Gn);
const Xn = new G,
  Yn = new v;

function $n(t, e, r) {
  const s = [],
    i = Vn.rectangle,
    n = Xn;
  n.x = t.dx, n.y = t.dy, n.width = t.dw, n.height = t.dh;
  const o = t.transform;
  if (!i.build(n, s)) return;
  const {
    vertices: a,
    uvs: h,
    indices: l
  } = r, u = l.length, c = a.length / 2;
  o && Mn(s, o), i.triangulate(s, a, 2, c, l, u);
  const d = t.image,
    p = d.uvs;
  h.push(p.x0, p.y0, p.x1, p.y1, p.x3, p.y3, p.x2, p.y2);
  const f = Gt.get(Rn);
  f.indexOffset = u, f.indexSize = l.length - u, f.attributeOffset = c, f.attributeSize = a.length / 2 - c, f.baseColor = t.style, f.alpha = t.alpha, f.texture = d, f.geometryData = r, e.push(f)
}

function jn(t, e, r, s, i) {
  const {
    vertices: n,
    uvs: o,
    indices: a
  } = i;
  t.shapePrimitives.forEach(({
    shape: t,
    transform: h,
    holes: l
  }) => {
    const u = [],
      c = Vn[t.type];
    if (!c.build(t, u)) return;
    const d = a.length,
      p = n.length / 2;
    let f = "triangle-list";
    if (h && Mn(u, h), r) {
      const r = t.closePath ?? !0,
        s = e;
      s.pixelLine ? (function(t, e, r, s) {
        const i = In;
        if (0 === t.length) return;
        const n = t[0],
          o = t[1],
          a = t[t.length - 2],
          h = t[t.length - 1],
          l = e || Math.abs(n - a) < i && Math.abs(o - h) < i,
          u = r,
          c = t.length / 2,
          d = u.length / 2;
        for (let p = 0; p < c; p++) u.push(t[2 * p]), u.push(t[2 * p + 1]);
        for (let p = 0; p < c - 1; p++) s.push(d + p, d + p + 1);
        l && s.push(d + c - 1, d)
      }(u, r, n, a), f = "line-list") : function(t, e, r, s, i, n) {
        const o = In;
        if (0 === t.length) return;
        const a = e;
        let h = a.alignment;
        if (.5 !== e.alignment) {
          let e = function(t) {
            const e = t.length;
            if (e < 6) return 1;
            let r = 0;
            for (let s = 0, i = t[e - 2], n = t[e - 1]; s < e; s += 2) {
              const e = t[s],
                o = t[s + 1];
              r += (e - i) * (o + n), i = e, n = o
            }
            return r < 0 ? -1 : 1
          }(t);
          h = (h - .5) * e + .5
        }
        const l = new y(t[0], t[1]),
          u = new y(t[t.length - 2], t[t.length - 1]),
          c = s,
          d = Math.abs(l.x - u.x) < o && Math.abs(l.y - u.y) < o;
        if (c) {
          t = t.slice(), d && (t.pop(), t.pop(), u.set(t[t.length - 2], t[t.length - 1]));
          const e = .5 * (l.x + u.x),
            r = .5 * (u.y + l.y);
          t.unshift(e, r), t.push(e, r)
        }
        const p = i,
          f = t.length / 2;
        let m = t.length;
        const g = p.length / 2,
          _ = a.width / 2,
          x = _ * _,
          b = a.miterLimit * a.miterLimit;
        let v = t[0],
          T = t[1],
          S = t[2],
          w = t[3],
          E = 0,
          C = 0,
          P = -(T - w),
          M = v - S,
          A = 0,
          R = 0,
          B = Math.sqrt(P * P + M * M);
        P /= B, M /= B, P *= _, M *= _;
        const k = 2 * (1 - h),
          G = 2 * h;
        c || ("round" === a.cap ? m += Un(v - P * (k - G) * .5, T - M * (k - G) * .5, v - P * k, T - M * k, v + P * G, T + M * G, p, !0) + 2 : "square" === a.cap && (m += Fn(v, T, P, M, k, G, !0, p))), p.push(v - P * k, T - M * k), p.push(v + P * G, T + M * G);
        for (let y = 1; y < f - 1; ++y) {
          v = t[2 * (y - 1)], T = t[2 * (y - 1) + 1], S = t[2 * y], w = t[2 * y + 1], E = t[2 * (y + 1)], C = t[2 * (y + 1) + 1], P = -(T - w), M = v - S, B = Math.sqrt(P * P + M * M), P /= B, M /= B, P *= _, M *= _, A = -(w - C), R = S - E, B = Math.sqrt(A * A + R * R), A /= B, R /= B, A *= _, R *= _;
          const e = S - v,
            r = T - w,
            s = S - E,
            i = C - w,
            n = e * s + r * i,
            o = r * s - i * e,
            h = o < 0;
          if (Math.abs(o) < .001 * Math.abs(n)) {
            p.push(S - P * k, w - M * k), p.push(S + P * G, w + M * G), n >= 0 && ("round" === a.join ? m += Un(S, w, S - P * k, w - M * k, S - A * k, w - R * k, p, !1) + 4 : m += 2, p.push(S - A * G, w - R * G), p.push(S + A * k, w + R * k));
            continue
          }
          const l = (-P + v) * (-M + w) - (-P + S) * (-M + T),
            u = (-A + E) * (-R + w) - (-A + S) * (-R + C),
            c = (e * u - s * l) / o,
            d = (i * l - r * u) / o,
            f = (c - S) * (c - S) + (d - w) * (d - w),
            g = S + (c - S) * k,
            I = w + (d - w) * k,
            F = S - (c - S) * G,
            U = w - (d - w) * G,
            O = h ? k : G;
          f <= Math.min(e * e + r * r, s * s + i * i) + O * O * x ? "bevel" === a.join || f / x > b ? (h ? (p.push(g, I), p.push(S + P * G, w + M * G), p.push(g, I), p.push(S + A * G, w + R * G)) : (p.push(S - P * k, w - M * k), p.push(F, U), p.push(S - A * k, w - R * k), p.push(F, U)), m += 2) : "round" === a.join ? h ? (p.push(g, I), p.push(S + P * G, w + M * G), m += Un(S, w, S + P * G, w + M * G, S + A * G, w + R * G, p, !0) + 4, p.push(g, I), p.push(S + A * G, w + R * G)) : (p.push(S - P * k, w - M * k), p.push(F, U), m += Un(S, w, S - P * k, w - M * k, S - A * k, w - R * k, p, !1) + 4, p.push(S - A * k, w - R * k), p.push(F, U)) : (p.push(g, I), p.push(F, U)) : (p.push(S - P * k, w - M * k), p.push(S + P * G, w + M * G), "round" === a.join ? m += h ? Un(S, w, S + P * G, w + M * G, S + A * G, w + R * G, p, !0) + 2 : Un(S, w, S - P * k, w - M * k, S - A * k, w - R * k, p, !1) + 2 : "miter" === a.join && f / x <= b && (h ? (p.push(F, U), p.push(F, U)) : (p.push(g, I), p.push(g, I)), m += 2), p.push(S - A * k, w - R * k), p.push(S + A * G, w + R * G), m += 2)
        }
        v = t[2 * (f - 2)], T = t[2 * (f - 2) + 1], S = t[2 * (f - 1)], w = t[2 * (f - 1) + 1], P = -(T - w), M = v - S, B = Math.sqrt(P * P + M * M), P /= B, M /= B, P *= _, M *= _, p.push(S - P * k, w - M * k), p.push(S + P * G, w + M * G), c || ("round" === a.cap ? m += Un(S - P * (k - G) * .5, w - M * (k - G) * .5, S - P * k, w - M * k, S + P * G, w + M * G, p, !1) + 2 : "square" === a.cap && (m += Fn(S, w, P, M, k, G, !1, p)));
        for (let y = g; y < m + g - 2; ++y) v = p[2 * y], T = p[2 * y + 1], S = p[2 * (y + 1)], w = p[2 * (y + 1) + 1], E = p[2 * (y + 2)], C = p[2 * (y + 2) + 1], Math.abs(v * (w - C) + S * (C - T) + E * (T - w)) < 1e-8 || n.push(y, y + 1, y + 2)
      }(u, s, 0, r, n, a)
    } else if (l) {
      const t = [],
        e = u.slice();
      (function(t) {
        const e = [];
        for (let r = 0; r < t.length; r++) {
          const s = t[r].shape,
            i = [];
          Vn[s.type].build(s, i) && e.push(i)
        }
        return e
      })(l).forEach(r => {
        t.push(e.length / 2), e.push(...r)
      }), On(e, t, n, 2, p, a, d)
    } else c.triangulate(u, n, 2, p, a, d);
    const m = o.length / 2,
      g = e.texture;
    if (g !== Z.WHITE) {
      const r = function(t, e, r, s) {
        const i = e.matrix ? t.copyFrom(e.matrix).invert() : t.identity();
        if ("local" === e.textureSpace) {
          const t = r.getBounds(Wn);
          e.width && t.pad(e.width);
          const {
            x: s,
            y: n
          } = t, o = 1 / t.width, a = 1 / t.height, h = -s * o, l = -n * a, u = i.a, c = i.b, d = i.c, p = i.d;
          i.a *= o, i.b *= o, i.c *= a, i.d *= a, i.tx = h * u + l * d + i.tx, i.ty = h * c + l * p + i.ty
        } else i.translate(e.texture.frame.x, e.texture.frame.y), i.scale(1 / e.texture.source.width, 1 / e.texture.source.height);
        const n = e.texture.source.style;
        return e.fill instanceof ii || "clamp-to-edge" !== n.addressMode || (n.addressMode = "repeat", n.update()), s && i.append(Hn.copyFrom(s).invert()), i
      }(Yn, e, t, h);
      ! function(t, e, r, s, i, n, o, a = null) {
        let h = 0;
        r *= e, i *= n;
        const l = a.a,
          u = a.b,
          c = a.c,
          d = a.d,
          p = a.tx,
          f = a.ty;
        for (; h < o;) {
          const o = t[r],
            a = t[r + 1];
          s[i] = l * o + c * a + p, s[i + 1] = u * o + d * a + f, i += n, r += e, h++
        }
      }(n, 2, p, o, m, 2, n.length / 2 - p, r)
    } else ! function(t, e, r, s) {
      let i = 0;
      for (e *= 2; i < s;) t[e] = 0, t[e + 1] = 0, e += 2, i++
    }(o, m, 0, n.length / 2 - p);
    const _ = Gt.get(Rn);
    _.indexOffset = d, _.indexSize = a.length - d, _.attributeOffset = p, _.attributeSize = n.length / 2 - p, _.baseColor = e.color, _.alpha = e.alpha, _.texture = g, _.geometryData = i, _.topology = f, s.push(_)
  })
}
class qn {
  constructor() {
    this.batches = [], this.geometryData = {
      vertices: [],
      uvs: [],
      indices: []
    }
  }
}
class Kn {
  constructor() {
    this.instructions = new le
  }
  init(t) {
    this.batcher = new Pn({
      maxTextures: t
    }), this.instructions.reset()
  }
  get geometry() {
    return D("8.3.4", "GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."), this.batcher.geometry
  }
}
const Zn = class t {
  constructor(t) {
    this._gpuContextHash = {}, this._graphicsDataContextHash = Object.create(null), this._renderer = t, t.renderableGC.addManagedHash(this, "_gpuContextHash"), t.renderableGC.addManagedHash(this, "_graphicsDataContextHash")
  }
  init(e) {
    t.defaultOptions.bezierSmoothness = (null == e ? void 0 : e.bezierSmoothness) ?? t.defaultOptions.bezierSmoothness
  }
  getContextRenderData(t) {
    return this._graphicsDataContextHash[t.uid] || this._initContextRenderData(t)
  }
  updateGpuContext(t) {
    let e = this._gpuContextHash[t.uid] || this._initContext(t);
    if (t.dirty) {
      e ? this._cleanGraphicsContextData(t) : e = this._initContext(t),
        function(t, e) {
          const {
            geometryData: r,
            batches: s
          } = e;
          s.length = 0, r.indices.length = 0, r.vertices.length = 0, r.uvs.length = 0;
          for (let i = 0; i < t.instructions.length; i++) {
            const e = t.instructions[i];
            if ("texture" === e.action) $n(e.data, s, r);
            else if ("fill" === e.action || "stroke" === e.action) {
              const t = "stroke" === e.action,
                i = e.data.path.shapePath,
                n = e.data.style,
                o = e.data.hole;
              t && o && jn(o.shapePath, n, !0, s, r), o && (i.shapePrimitives[i.shapePrimitives.length - 1].holes = o.shapePath.shapePrimitives), jn(i, n, t, s, r)
            }
          }
        }(t, e);
      const r = t.batchMode;
      t.customShader || "no-batch" === r ? e.isBatchable = !1 : e.isBatchable = "auto" !== r || e.geometryData.vertices.length < 400, t.dirty = !1
    }
    return e
  }
  getGpuContext(t) {
    return this._gpuContextHash[t.uid] || this._initContext(t)
  }
  _initContextRenderData(t) {
    const e = Gt.get(Kn, {
        maxTextures: this._renderer.limits.maxBatchableTextures
      }),
      {
        batches: r,
        geometryData: s
      } = this._gpuContextHash[t.uid],
      i = s.vertices.length,
      n = s.indices.length;
    for (let l = 0; l < r.length; l++) r[l].applyTransform = !1;
    const o = e.batcher;
    o.ensureAttributeBuffer(i), o.ensureIndexBuffer(n), o.begin();
    for (let l = 0; l < r.length; l++) {
      const t = r[l];
      o.add(t)
    }
    o.finish(e.instructions);
    const a = o.geometry;
    a.indexBuffer.setDataWithSize(o.indexBuffer, o.indexSize, !0), a.buffers[0].setDataWithSize(o.attributeBuffer.float32View, o.attributeSize, !0);
    const h = o.batches;
    for (let l = 0; l < h.length; l++) {
      const t = h[l];
      t.bindGroup = vi(t.textures.textures, t.textures.count, this._renderer.limits.maxBatchableTextures)
    }
    return this._graphicsDataContextHash[t.uid] = e, e
  }
  _initContext(t) {
    const e = new qn;
    return e.context = t, this._gpuContextHash[t.uid] = e, t.on("destroy", this.onGraphicsContextDestroy, this), this._gpuContextHash[t.uid]
  }
  onGraphicsContextDestroy(t) {
    this._cleanGraphicsContextData(t), t.off("destroy", this.onGraphicsContextDestroy, this), this._gpuContextHash[t.uid] = null
  }
  _cleanGraphicsContextData(t) {
    const e = this._gpuContextHash[t.uid];
    e.isBatchable || this._graphicsDataContextHash[t.uid] && (Gt.return(this.getContextRenderData(t)), this._graphicsDataContextHash[t.uid] = null), e.batches && e.batches.forEach(t => {
      Gt.return(t)
    })
  }
  destroy() {
    for (const t in this._gpuContextHash) this._gpuContextHash[t] && this.onGraphicsContextDestroy(this._gpuContextHash[t].context)
  }
};
Zn.extension = {
  type: [a.WebGLSystem, a.WebGPUSystem, a.CanvasSystem],
  name: "graphicsContext"
}, Zn.defaultOptions = {
  bezierSmoothness: .5
};
let Qn = Zn;
const Jn = 1.1920929e-7;

function to(t, e, r, s, i, n, o, a, h, l) {
  let u = (1 - Math.min(.99, Math.max(0, l ?? Qn.defaultOptions.bezierSmoothness))) / 1;
  return u *= u,
    function(t, e, r, s, i, n, o, a, h, l) {
      eo(t, e, r, s, i, n, o, a, h, l, 0), h.push(o, a)
    }(e, r, s, i, n, o, a, h, t, u), t
}

function eo(t, e, r, s, i, n, o, a, h, l, u) {
  if (u > 8) return;
  const c = (t + r) / 2,
    d = (e + s) / 2,
    p = (r + i) / 2,
    f = (s + n) / 2,
    m = (i + o) / 2,
    g = (n + a) / 2,
    _ = (c + p) / 2,
    x = (d + f) / 2,
    y = (p + m) / 2,
    b = (f + g) / 2,
    v = (_ + y) / 2,
    T = (x + b) / 2;
  if (u > 0) {
    let u = o - t,
      c = a - e;
    const d = Math.abs((r - o) * c - (s - a) * u),
      p = Math.abs((i - o) * c - (n - a) * u);
    if (d > Jn && p > Jn) {
      if ((d + p) * (d + p) <= l * (u * u + c * c)) return void h.push(v, T)
    } else if (d > Jn) {
      if (d * d <= l * (u * u + c * c)) return void h.push(v, T)
    } else if (p > Jn) {
      if (p * p <= l * (u * u + c * c)) return void h.push(v, T)
    } else if (u = v - (t + o) / 2, c = T - (e + a) / 2, u * u + c * c <= l) return void h.push(v, T)
  }
  eo(t, e, c, d, _, x, v, T, h, l, u + 1), eo(v, T, y, b, m, g, o, a, h, l, u + 1)
}

function ro(t, e, r, s, i, n, o, a) {
  let h = (1 - Math.min(.99, Math.max(0, a ?? Qn.defaultOptions.bezierSmoothness))) / 1;
  return h *= h,
    function(t, e, r, s, i, n, o, a) {
      so(o, t, e, r, s, i, n, a, 0), o.push(i, n)
    }(e, r, s, i, n, o, t, h), t
}

function so(t, e, r, s, i, n, o, a, h) {
  if (h > 8) return;
  const l = (e + s) / 2,
    u = (r + i) / 2,
    c = (s + n) / 2,
    d = (i + o) / 2,
    p = (l + c) / 2,
    f = (u + d) / 2;
  let m = n - e,
    g = o - r;
  const _ = Math.abs((s - n) * g - (i - o) * m);
  if (_ > 1.1920929e-7) {
    if (_ * _ <= a * (m * m + g * g)) return void t.push(p, f)
  } else if (m = p - (e + n) / 2, g = f - (r + o) / 2, m * m + g * g <= a) return void t.push(p, f);
  so(t, e, r, l, u, p, f, a, h + 1), so(t, p, f, c, d, n, o, a, h + 1)
}

function io(t, e, r, s, i, n, o, a) {
  let h = Math.abs(i - n);
  (!o && i > n || o && n > i) && (h = 2 * Math.PI - h), a || (a = Math.max(6, Math.floor(6 * Math.pow(s, 1 / 3) * (h / Math.PI))));
  let l = h / (a = Math.max(a, 3)),
    u = i;
  l *= o ? -1 : 1;
  for (let c = 0; c < a + 1; c++) {
    const i = e + Math.cos(u) * s,
      n = r + Math.sin(u) * s;
    t.push(i, n), u += l
  }
}
const no = 2 * Math.PI,
  oo = {
    centerX: 0,
    centerY: 0,
    ang1: 0,
    ang2: 0
  },
  ao = ({
    x: t,
    y: e
  }, r, s, i, n, o, a, h) => {
    const l = i * (t *= r) - n * (e *= s),
      u = n * t + i * e;
    return h.x = l + o, h.y = u + a, h
  };

function ho(t, e) {
  const r = -1.5707963267948966 === e ? -.551915024494 : 4 / 3 * Math.tan(e / 4),
    s = 1.5707963267948966 === e ? .551915024494 : r,
    i = Math.cos(t),
    n = Math.sin(t),
    o = Math.cos(t + e),
    a = Math.sin(t + e);
  return [{
    x: i - n * s,
    y: n + i * s
  }, {
    x: o + a * s,
    y: a - o * s
  }, {
    x: o,
    y: a
  }]
}
const lo = (t, e, r, s) => {
  let i = t * r + e * s;
  return i > 1 && (i = 1), i < -1 && (i = -1), (t * s - e * r < 0 ? -1 : 1) * Math.acos(i)
};
const uo = new G;
class co {
  constructor(t) {
    this.shapePrimitives = [], this._currentPoly = null, this._bounds = new tt, this._graphicsPath2D = t, this.signed = t.checkForHoles
  }
  moveTo(t, e) {
    return this.startPoly(t, e), this
  }
  lineTo(t, e) {
    this._ensurePoly();
    const r = this._currentPoly.points,
      s = r[r.length - 2],
      i = r[r.length - 1];
    return s === t && i === e || r.push(t, e), this
  }
  arc(t, e, r, s, i, n) {
    return this._ensurePoly(!1), io(this._currentPoly.points, t, e, r, s, i, n), this
  }
  arcTo(t, e, r, s, i) {
    return this._ensurePoly(),
      function(t, e, r, s, i, n) {
        const o = t[t.length - 2],
          a = t[t.length - 1] - r,
          h = o - e,
          l = i - r,
          u = s - e,
          c = Math.abs(a * u - h * l);
        if (c < 1e-8 || 0 === n) return void(t[t.length - 2] === e && t[t.length - 1] === r || t.push(e, r));
        const d = a * a + h * h,
          p = l * l + u * u,
          f = a * l + h * u,
          m = n * Math.sqrt(d) / c,
          g = n * Math.sqrt(p) / c,
          _ = m * f / d,
          x = g * f / p,
          y = m * u + g * h,
          b = m * l + g * a,
          v = h * (g + _),
          T = a * (g + _),
          S = u * (m + x),
          w = l * (m + x);
        io(t, y + e, b + r, n, Math.atan2(T - b, v - y), Math.atan2(w - b, S - y), h * l > u * a)
      }(this._currentPoly.points, t, e, r, s, i), this
  }
  arcToSvg(t, e, r, s, i, n, o) {
    return function(t, e, r, s, i, n, o, a = 0, h = 0, l = 0) {
      if (0 === n || 0 === o) return;
      const u = Math.sin(a * no / 360),
        c = Math.cos(a * no / 360),
        d = c * (e - s) / 2 + u * (r - i) / 2,
        p = -u * (e - s) / 2 + c * (r - i) / 2;
      if (0 === d && 0 === p) return;
      n = Math.abs(n), o = Math.abs(o);
      const f = Math.pow(d, 2) / Math.pow(n, 2) + Math.pow(p, 2) / Math.pow(o, 2);
      f > 1 && (n *= Math.sqrt(f), o *= Math.sqrt(f)), ((t, e, r, s, i, n, o, a, h, l, u, c, d) => {
        const p = Math.pow(i, 2),
          f = Math.pow(n, 2),
          m = Math.pow(u, 2),
          g = Math.pow(c, 2);
        let _ = p * f - p * g - f * m;
        _ < 0 && (_ = 0), _ /= p * g + f * m, _ = Math.sqrt(_) * (o === a ? -1 : 1);
        const x = _ * i / n * c,
          y = _ * -n / i * u,
          b = l * x - h * y + (t + r) / 2,
          v = h * x + l * y + (e + s) / 2,
          T = (u - x) / i,
          S = (c - y) / n,
          w = (-u - x) / i,
          E = (-c - y) / n,
          C = lo(1, 0, T, S);
        let P = lo(T, S, w, E);
        0 === a && P > 0 && (P -= no), 1 === a && P < 0 && (P += no), d.centerX = b, d.centerY = v, d.ang1 = C, d.ang2 = P
      })(e, r, s, i, n, o, h, l, u, c, d, p, oo);
      let {
        ang1: m,
        ang2: g
      } = oo;
      const {
        centerX: _,
        centerY: x
      } = oo;
      let y = Math.abs(g) / (no / 4);
      Math.abs(1 - y) < 1e-7 && (y = 1);
      const b = Math.max(Math.ceil(y), 1);
      g /= b;
      let v = t[t.length - 2],
        T = t[t.length - 1];
      const S = {
        x: 0,
        y: 0
      };
      for (let w = 0; w < b; w++) {
        const e = ho(m, g),
          {
            x: r,
            y: s
          } = ao(e[0], n, o, c, u, _, x, S),
          {
            x: i,
            y: a
          } = ao(e[1], n, o, c, u, _, x, S),
          {
            x: h,
            y: l
          } = ao(e[2], n, o, c, u, _, x, S);
        to(t, v, T, r, s, i, a, h, l), v = h, T = l, m += g
      }
    }(this._currentPoly.points, this._currentPoly.lastX, this._currentPoly.lastY, n, o, t, e, r, s, i), this
  }
  bezierCurveTo(t, e, r, s, i, n, o) {
    this._ensurePoly();
    const a = this._currentPoly;
    return to(this._currentPoly.points, a.lastX, a.lastY, t, e, r, s, i, n, o), this
  }
  quadraticCurveTo(t, e, r, s, i) {
    this._ensurePoly();
    const n = this._currentPoly;
    return ro(this._currentPoly.points, n.lastX, n.lastY, t, e, r, s, i), this
  }
  closePath() {
    return this.endPoly(!0), this
  }
  addPath(t, e) {
    this.endPoly(), e && !e.isIdentity() && (t = t.clone(!0)).transform(e);
    const r = this.shapePrimitives,
      s = r.length;
    for (let i = 0; i < t.instructions.length; i++) {
      const e = t.instructions[i];
      this[e.action](...e.data)
    }
    if (t.checkForHoles && r.length - s > 1) {
      let t = null;
      for (let e = s; e < r.length; e++) {
        const s = r[e];
        if ("polygon" === s.shape.type) {
          const i = s.shape,
            n = null == t ? void 0 : t.shape;
          n && n.containsPolygon(i) ? (t.holes || (t.holes = []), t.holes.push(s), r.copyWithin(e, e + 1), r.length--, e--) : t = s
        }
      }
    }
    return this
  }
  finish(t = !1) {
    this.endPoly(t)
  }
  rect(t, e, r, s, i) {
    return this.drawShape(new G(t, e, r, s), i), this
  }
  circle(t, e, r, s) {
    return this.drawShape(new fi(t, e, r), s), this
  }
  poly(t, e, r) {
    const s = new _i(t);
    return s.closePath = e, this.drawShape(s, r), this
  }
  regularPoly(t, e, r, s, i = 0, n) {
    s = Math.max(0 | s, 3);
    const o = -1 * Math.PI / 2 + i,
      a = 2 * Math.PI / s,
      h = [];
    for (let l = 0; l < s; l++) {
      const s = o - l * a;
      h.push(t + r * Math.cos(s), e + r * Math.sin(s))
    }
    return this.poly(h, !0, n), this
  }
  roundPoly(t, e, r, s, i, n = 0, o) {
    if (s = Math.max(0 | s, 3), i <= 0) return this.regularPoly(t, e, r, s, n);
    const a = r * Math.sin(Math.PI / s) - .001;
    i = Math.min(i, a);
    const h = -1 * Math.PI / 2 + n,
      l = 2 * Math.PI / s,
      u = (s - 2) * Math.PI / s / 2;
    for (let c = 0; c < s; c++) {
      const s = c * l + h,
        n = t + r * Math.cos(s),
        a = e + r * Math.sin(s),
        d = s + Math.PI + u,
        p = s - Math.PI - u,
        f = n + i * Math.cos(d),
        m = a + i * Math.sin(d),
        g = n + i * Math.cos(p),
        _ = a + i * Math.sin(p);
      0 === c ? this.moveTo(f, m) : this.lineTo(f, m), this.quadraticCurveTo(n, a, g, _, o)
    }
    return this.closePath()
  }
  roundShape(t, e, r = !1, s) {
    return t.length < 3 ? this : (r ? function(t, e, r, s) {
      const i = (t, e) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2),
        n = (t, e, r) => ({
          x: t.x + (e.x - t.x) * r,
          y: t.y + (e.y - t.y) * r
        }),
        o = e.length;
      for (let a = 0; a < o; a++) {
        const h = e[(a + 1) % o],
          l = h.radius ?? r;
        if (l <= 0) {
          0 === a ? t.moveTo(h.x, h.y) : t.lineTo(h.x, h.y);
          continue
        }
        const u = e[a],
          c = e[(a + 2) % o],
          d = i(u, h);
        let p;
        p = d < 1e-4 ? h : n(h, u, Math.min(d / 2, l) / d);
        const f = i(c, h);
        let m;
        m = f < 1e-4 ? h : n(h, c, Math.min(f / 2, l) / f), 0 === a ? t.moveTo(p.x, p.y) : t.lineTo(p.x, p.y), t.quadraticCurveTo(h.x, h.y, m.x, m.y, s)
      }
    }(this, t, e, s) : function(t, e, r) {
      const s = (t, e) => {
          const r = e.x - t.x,
            s = e.y - t.y,
            i = Math.sqrt(r * r + s * s);
          return {
            len: i,
            nx: r / i,
            ny: s / i
          }
        },
        i = (e, r) => {
          0 === e ? t.moveTo(r.x, r.y) : t.lineTo(r.x, r.y)
        };
      let n = e[e.length - 1];
      for (let o = 0; o < e.length; o++) {
        const a = e[o % e.length],
          h = a.radius ?? r;
        if (h <= 0) {
          i(o, a), n = a;
          continue
        }
        const l = e[(o + 1) % e.length],
          u = s(a, n),
          c = s(a, l);
        if (u.len < 1e-4 || c.len < 1e-4) {
          i(o, a), n = a;
          continue
        }
        let d = Math.asin(u.nx * c.ny - u.ny * c.nx),
          p = 1,
          f = !1;
        u.nx * c.nx - u.ny * -c.ny < 0 ? d < 0 ? d = Math.PI + d : (d = Math.PI - d, p = -1, f = !0) : d > 0 && (p = -1, f = !0);
        const m = d / 2;
        let g, _ = Math.abs(Math.cos(m) * h / Math.sin(m));
        _ > Math.min(u.len / 2, c.len / 2) ? (_ = Math.min(u.len / 2, c.len / 2), g = Math.abs(_ * Math.sin(m) / Math.cos(m))) : g = h;
        const x = a.x + c.nx * _ + -c.ny * g * p,
          y = a.y + c.ny * _ + c.nx * g * p,
          b = Math.atan2(u.ny, u.nx) + Math.PI / 2 * p,
          v = Math.atan2(c.ny, c.nx) - Math.PI / 2 * p;
        0 === o && t.moveTo(x + Math.cos(b) * g, y + Math.sin(b) * g), t.arc(x, y, g, b, v, f), n = a
      }
    }(this, t, e), this.closePath())
  }
  filletRect(t, e, r, s, i) {
    if (0 === i) return this.rect(t, e, r, s);
    const n = Math.min(r, s) / 2,
      o = Math.min(n, Math.max(-n, i)),
      a = t + r,
      h = e + s,
      l = o < 0 ? -o : 0,
      u = Math.abs(o);
    return this.moveTo(t, e + u).arcTo(t + l, e + l, t + u, e, u).lineTo(a - u, e).arcTo(a - l, e + l, a, e + u, u).lineTo(a, h - u).arcTo(a - l, h - l, t + r - u, h, u).lineTo(t + u, h).arcTo(t + l, h - l, t, h - u, u).closePath()
  }
  chamferRect(t, e, r, s, i, n) {
    if (i <= 0) return this.rect(t, e, r, s);
    const o = Math.min(i, Math.min(r, s) / 2),
      a = t + r,
      h = e + s,
      l = [t + o, e, a - o, e, a, e + o, a, h - o, a - o, h, t + o, h, t, h - o, t, e + o];
    for (let u = l.length - 1; u >= 2; u -= 2) l[u] === l[u - 2] && l[u - 1] === l[u - 3] && l.splice(u - 1, 2);
    return this.poly(l, !0, n)
  }
  ellipse(t, e, r, s, i) {
    return this.drawShape(new mi(t, e, r, s), i), this
  }
  roundRect(t, e, r, s, i, n) {
    return this.drawShape(new yi(t, e, r, s, i), n), this
  }
  drawShape(t, e) {
    return this.endPoly(), this.shapePrimitives.push({
      shape: t,
      transform: e
    }), this
  }
  startPoly(t, e) {
    let r = this._currentPoly;
    return r && this.endPoly(), r = new _i, r.points.push(t, e), this._currentPoly = r, this
  }
  endPoly(t = !1) {
    const e = this._currentPoly;
    return e && e.points.length > 2 && (e.closePath = t, this.shapePrimitives.push({
      shape: e
    })), this._currentPoly = null, this
  }
  _ensurePoly(t = !0) {
    if (!this._currentPoly && (this._currentPoly = new _i, t)) {
      const t = this.shapePrimitives[this.shapePrimitives.length - 1];
      if (t) {
        let e = t.shape.x,
          r = t.shape.y;
        if (t.transform && !t.transform.isIdentity()) {
          const s = t.transform,
            i = e;
          e = s.a * e + s.c * r + s.tx, r = s.b * i + s.d * r + s.ty
        }
        this._currentPoly.points.push(e, r)
      } else this._currentPoly.points.push(0, 0)
    }
  }
  buildPath() {
    const t = this._graphicsPath2D;
    this.shapePrimitives.length = 0, this._currentPoly = null;
    for (let e = 0; e < t.instructions.length; e++) {
      const r = t.instructions[e];
      this[r.action](...r.data)
    }
    this.finish()
  }
  get bounds() {
    const t = this._bounds;
    t.clear();
    const e = this.shapePrimitives;
    for (let r = 0; r < e.length; r++) {
      const s = e[r],
        i = s.shape.getBounds(uo);
      s.transform ? t.addRect(i, s.transform) : t.addRect(i)
    }
    return t
  }
}
class po {
  constructor(t, e = !1) {
    this.instructions = [], this.uid = F("graphicsPath"), this._dirty = !0, this.checkForHoles = e, "string" == typeof t ? function(t, e) {
      const r = pi(t),
        s = [];
      let i = null,
        n = 0,
        o = 0;
      for (let a = 0; a < r.length; a++) {
        const t = r[a],
          h = t[0],
          l = t;
        switch (h) {
          case "M":
            n = l[1], o = l[2], e.moveTo(n, o);
            break;
          case "m":
            n += l[1], o += l[2], e.moveTo(n, o);
            break;
          case "H":
            n = l[1], e.lineTo(n, o);
            break;
          case "h":
            n += l[1], e.lineTo(n, o);
            break;
          case "V":
            o = l[1], e.lineTo(n, o);
            break;
          case "v":
            o += l[1], e.lineTo(n, o);
            break;
          case "L":
            n = l[1], o = l[2], e.lineTo(n, o);
            break;
          case "l":
            n += l[1], o += l[2], e.lineTo(n, o);
            break;
          case "C":
            n = l[5], o = l[6], e.bezierCurveTo(l[1], l[2], l[3], l[4], n, o);
            break;
          case "c":
            e.bezierCurveTo(n + l[1], o + l[2], n + l[3], o + l[4], n + l[5], o + l[6]), n += l[5], o += l[6];
            break;
          case "S":
            n = l[3], o = l[4], e.bezierCurveToShort(l[1], l[2], n, o);
            break;
          case "s":
            e.bezierCurveToShort(n + l[1], o + l[2], n + l[3], o + l[4]), n += l[3], o += l[4];
            break;
          case "Q":
            n = l[3], o = l[4], e.quadraticCurveTo(l[1], l[2], n, o);
            break;
          case "q":
            e.quadraticCurveTo(n + l[1], o + l[2], n + l[3], o + l[4]), n += l[3], o += l[4];
            break;
          case "T":
            n = l[1], o = l[2], e.quadraticCurveToShort(n, o);
            break;
          case "t":
            n += l[1], o += l[2], e.quadraticCurveToShort(n, o);
            break;
          case "A":
            n = l[6], o = l[7], e.arcToSvg(l[1], l[2], l[3], l[4], l[5], n, o);
            break;
          case "a":
            n += l[6], o += l[7], e.arcToSvg(l[1], l[2], l[3], l[4], l[5], n, o);
            break;
          case "Z":
          case "z":
            e.closePath(), s.length > 0 && (i = s.pop(), i ? (n = i.startX, o = i.startY) : (n = 0, o = 0)), i = null;
            break;
          default:
            Bt(`Unknown SVG path command: ${h}`)
        }
        "Z" !== h && "z" !== h && null === i && (i = {
          startX: n,
          startY: o
        }, s.push(i))
      }
    }(t, this) : this.instructions = (null == t ? void 0 : t.slice()) ?? []
  }
  get shapePath() {
    return this._shapePath || (this._shapePath = new co(this)), this._dirty && (this._dirty = !1, this._shapePath.buildPath()), this._shapePath
  }
  addPath(t, e) {
    return t = t.clone(), this.instructions.push({
      action: "addPath",
      data: [t, e]
    }), this._dirty = !0, this
  }
  arc(...t) {
    return this.instructions.push({
      action: "arc",
      data: t
    }), this._dirty = !0, this
  }
  arcTo(...t) {
    return this.instructions.push({
      action: "arcTo",
      data: t
    }), this._dirty = !0, this
  }
  arcToSvg(...t) {
    return this.instructions.push({
      action: "arcToSvg",
      data: t
    }), this._dirty = !0, this
  }
  bezierCurveTo(...t) {
    return this.instructions.push({
      action: "bezierCurveTo",
      data: t
    }), this._dirty = !0, this
  }
  bezierCurveToShort(t, e, r, s, i) {
    const n = this.instructions[this.instructions.length - 1],
      o = this.getLastPoint(y.shared);
    let a = 0,
      h = 0;
    if (n && "bezierCurveTo" === n.action) {
      a = n.data[2], h = n.data[3];
      const t = o.x,
        e = o.y;
      a = t + (t - a), h = e + (e - h)
    } else a = o.x, h = o.y;
    return this.instructions.push({
      action: "bezierCurveTo",
      data: [a, h, t, e, r, s, i]
    }), this._dirty = !0, this
  }
  closePath() {
    return this.instructions.push({
      action: "closePath",
      data: []
    }), this._dirty = !0, this
  }
  ellipse(...t) {
    return this.instructions.push({
      action: "ellipse",
      data: t
    }), this._dirty = !0, this
  }
  lineTo(...t) {
    return this.instructions.push({
      action: "lineTo",
      data: t
    }), this._dirty = !0, this
  }
  moveTo(...t) {
    return this.instructions.push({
      action: "moveTo",
      data: t
    }), this
  }
  quadraticCurveTo(...t) {
    return this.instructions.push({
      action: "quadraticCurveTo",
      data: t
    }), this._dirty = !0, this
  }
  quadraticCurveToShort(t, e, r) {
    const s = this.instructions[this.instructions.length - 1],
      i = this.getLastPoint(y.shared);
    let n = 0,
      o = 0;
    if (s && "quadraticCurveTo" === s.action) {
      n = s.data[0], o = s.data[1];
      const t = i.x,
        e = i.y;
      n = t + (t - n), o = e + (e - o)
    } else n = i.x, o = i.y;
    return this.instructions.push({
      action: "quadraticCurveTo",
      data: [n, o, t, e, r]
    }), this._dirty = !0, this
  }
  rect(t, e, r, s, i) {
    return this.instructions.push({
      action: "rect",
      data: [t, e, r, s, i]
    }), this._dirty = !0, this
  }
  circle(t, e, r, s) {
    return this.instructions.push({
      action: "circle",
      data: [t, e, r, s]
    }), this._dirty = !0, this
  }
  roundRect(...t) {
    return this.instructions.push({
      action: "roundRect",
      data: t
    }), this._dirty = !0, this
  }
  poly(...t) {
    return this.instructions.push({
      action: "poly",
      data: t
    }), this._dirty = !0, this
  }
  regularPoly(...t) {
    return this.instructions.push({
      action: "regularPoly",
      data: t
    }), this._dirty = !0, this
  }
  roundPoly(...t) {
    return this.instructions.push({
      action: "roundPoly",
      data: t
    }), this._dirty = !0, this
  }
  roundShape(...t) {
    return this.instructions.push({
      action: "roundShape",
      data: t
    }), this._dirty = !0, this
  }
  filletRect(...t) {
    return this.instructions.push({
      action: "filletRect",
      data: t
    }), this._dirty = !0, this
  }
  chamferRect(...t) {
    return this.instructions.push({
      action: "chamferRect",
      data: t
    }), this._dirty = !0, this
  }
  star(t, e, r, s, i, n, o) {
    i || (i = s / 2);
    const a = -1 * Math.PI / 2 + n,
      h = 2 * r,
      l = 2 * Math.PI / h,
      u = [];
    for (let c = 0; c < h; c++) {
      const r = c % 2 ? i : s,
        n = c * l + a;
      u.push(t + r * Math.cos(n), e + r * Math.sin(n))
    }
    return this.poly(u, !0, o), this
  }
  clone(t = !1) {
    const e = new po;
    if (e.checkForHoles = this.checkForHoles, t)
      for (let r = 0; r < this.instructions.length; r++) {
        const t = this.instructions[r];
        e.instructions.push({
          action: t.action,
          data: t.data.slice()
        })
      } else e.instructions = this.instructions.slice();
    return e
  }
  clear() {
    return this.instructions.length = 0, this._dirty = !0, this
  }
  transform(t) {
    if (t.isIdentity()) return this;
    const e = t.a,
      r = t.b,
      s = t.c,
      i = t.d,
      n = t.tx,
      o = t.ty;
    let a = 0,
      h = 0,
      l = 0,
      u = 0,
      c = 0,
      d = 0,
      p = 0,
      f = 0;
    for (let m = 0; m < this.instructions.length; m++) {
      const g = this.instructions[m],
        _ = g.data;
      switch (g.action) {
        case "moveTo":
        case "lineTo":
          a = _[0], h = _[1], _[0] = e * a + s * h + n, _[1] = r * a + i * h + o;
          break;
        case "bezierCurveTo":
          l = _[0], u = _[1], c = _[2], d = _[3], a = _[4], h = _[5], _[0] = e * l + s * u + n, _[1] = r * l + i * u + o, _[2] = e * c + s * d + n, _[3] = r * c + i * d + o, _[4] = e * a + s * h + n, _[5] = r * a + i * h + o;
          break;
        case "quadraticCurveTo":
          l = _[0], u = _[1], a = _[2], h = _[3], _[0] = e * l + s * u + n, _[1] = r * l + i * u + o, _[2] = e * a + s * h + n, _[3] = r * a + i * h + o;
          break;
        case "arcToSvg":
          a = _[5], h = _[6], p = _[0], f = _[1], _[0] = e * p + s * f, _[1] = r * p + i * f, _[5] = e * a + s * h + n, _[6] = r * a + i * h + o;
          break;
        case "circle":
          _[4] = fo(_[3], t);
          break;
        case "rect":
          _[4] = fo(_[4], t);
          break;
        case "ellipse":
          _[8] = fo(_[8], t);
          break;
        case "roundRect":
          _[5] = fo(_[5], t);
          break;
        case "addPath":
          _[0].transform(t);
          break;
        case "poly":
          _[2] = fo(_[2], t);
          break;
        default:
          Bt("unknown transform action", g.action)
      }
    }
    return this._dirty = !0, this
  }
  get bounds() {
    return this.shapePath.bounds
  }
  getLastPoint(t) {
    let e = this.instructions.length - 1,
      r = this.instructions[e];
    if (!r) return t.x = 0, t.y = 0, t;
    for (;
      "closePath" === r.action;) {
      if (e--, e < 0) return t.x = 0, t.y = 0, t;
      r = this.instructions[e]
    }
    switch (r.action) {
      case "moveTo":
      case "lineTo":
        t.x = r.data[0], t.y = r.data[1];
        break;
      case "quadraticCurveTo":
        t.x = r.data[2], t.y = r.data[3];
        break;
      case "bezierCurveTo":
        t.x = r.data[4], t.y = r.data[5];
        break;
      case "arc":
      case "arcToSvg":
        t.x = r.data[5], t.y = r.data[6];
        break;
      case "addPath":
        r.data[0].getLastPoint(t)
    }
    return t
  }
}

function fo(t, e) {
  return t ? t.prepend(e) : e.clone()
}

function mo(t, e, r) {
  const s = t.getAttribute(e);
  return s ? Number(s) : r
}

function go(t) {
  const e = mo(t, "x1", 0),
    r = mo(t, "y1", 0),
    s = mo(t, "x2", 1),
    i = mo(t, "y2", 0),
    n = t.getAttribute("gradientUnits") || "objectBoundingBox",
    o = new ii(e, r, s, i, "objectBoundingBox" === n ? "local" : "global");
  for (let a = 0; a < t.children.length; a++) {
    const e = t.children[a],
      r = mo(e, "offset", 0),
      s = At.shared.setValue(e.getAttribute("stop-color")).toNumber();
    o.addColorStop(r, s)
  }
  return o
}

function _o(t) {
  return Bt("[SVG Parser] Radial gradients are not yet supported"), new ii(0, 0, 1, 0)
}

function xo(t) {
  const e = t.match(/url\s*\(\s*['"]?\s*#([^'"\s)]+)\s*['"]?\s*\)/i);
  return e ? e[1] : ""
}
const yo = {
  fill: {
    type: "paint",
    default: 0
  },
  "fill-opacity": {
    type: "number",
    default: 1
  },
  stroke: {
    type: "paint",
    default: 0
  },
  "stroke-width": {
    type: "number",
    default: 1
  },
  "stroke-opacity": {
    type: "number",
    default: 1
  },
  "stroke-linecap": {
    type: "string",
    default: "butt"
  },
  "stroke-linejoin": {
    type: "string",
    default: "miter"
  },
  "stroke-miterlimit": {
    type: "number",
    default: 10
  },
  "stroke-dasharray": {
    type: "string",
    default: "none"
  },
  "stroke-dashoffset": {
    type: "number",
    default: 0
  },
  opacity: {
    type: "number",
    default: 1
  }
};

function bo(t, e) {
  const r = t.getAttribute("style"),
    s = {},
    i = {},
    n = {
      strokeStyle: s,
      fillStyle: i,
      useFill: !1,
      useStroke: !1
    };
  for (const o in yo) {
    const r = t.getAttribute(o);
    r && vo(e, n, o, r.trim())
  }
  if (r) {
    const t = r.split(";");
    for (let r = 0; r < t.length; r++) {
      const s = t[r].trim(),
        [i, o] = s.split(":");
      yo[i] && vo(e, n, i, o.trim())
    }
  }
  return {
    strokeStyle: n.useStroke ? s : null,
    fillStyle: n.useFill ? i : null,
    useFill: n.useFill,
    useStroke: n.useStroke
  }
}

function vo(t, e, r, s) {
  switch (r) {
    case "stroke":
      if ("none" !== s) {
        if (s.startsWith("url(")) {
          const r = xo(s);
          e.strokeStyle.fill = t.defs[r]
        } else e.strokeStyle.color = At.shared.setValue(s).toNumber();
        e.useStroke = !0
      }
      break;
    case "stroke-width":
      e.strokeStyle.width = Number(s);
      break;
    case "fill":
      if ("none" !== s) {
        if (s.startsWith("url(")) {
          const r = xo(s);
          e.fillStyle.fill = t.defs[r]
        } else e.fillStyle.color = At.shared.setValue(s).toNumber();
        e.useFill = !0
      }
      break;
    case "fill-opacity":
      e.fillStyle.alpha = Number(s);
      break;
    case "stroke-opacity":
      e.strokeStyle.alpha = Number(s);
      break;
    case "opacity":
      e.fillStyle.alpha = Number(s), e.strokeStyle.alpha = Number(s)
  }
}

function To(t, e, r, s) {
  const i = t.children,
    {
      fillStyle: n,
      strokeStyle: o
    } = bo(t, e);
  n && r ? r = {
    ...r,
    ...n
  } : n && (r = n), o && s ? s = {
    ...s,
    ...o
  } : o && (s = o);
  const a = !r && !s;
  let h, l, u, c, d, p, f, m, g, _, x, y, b, v, T, S, w;
  switch (a && (r = {
      color: 0
    }), t.nodeName.toLowerCase()) {
    case "path":
      v = t.getAttribute("d"), "evenodd" === t.getAttribute("fill-rule") && Bt("SVG Evenodd fill rule not supported, your svg may render incorrectly"), T = new po(v, !0), e.context.path(T), r && e.context.fill(r), s && e.context.stroke(s);
      break;
    case "circle":
      f = mo(t, "cx", 0), m = mo(t, "cy", 0), g = mo(t, "r", 0), e.context.ellipse(f, m, g, g), r && e.context.fill(r), s && e.context.stroke(s);
      break;
    case "rect":
      h = mo(t, "x", 0), l = mo(t, "y", 0), S = mo(t, "width", 0), w = mo(t, "height", 0), _ = mo(t, "rx", 0), x = mo(t, "ry", 0), _ || x ? e.context.roundRect(h, l, S, w, _ || x) : e.context.rect(h, l, S, w), r && e.context.fill(r), s && e.context.stroke(s);
      break;
    case "ellipse":
      f = mo(t, "cx", 0), m = mo(t, "cy", 0), _ = mo(t, "rx", 0), x = mo(t, "ry", 0), e.context.beginPath(), e.context.ellipse(f, m, _, x), r && e.context.fill(r), s && e.context.stroke(s);
      break;
    case "line":
      u = mo(t, "x1", 0), c = mo(t, "y1", 0), d = mo(t, "x2", 0), p = mo(t, "y2", 0), e.context.beginPath(), e.context.moveTo(u, c), e.context.lineTo(d, p), s && e.context.stroke(s);
      break;
    case "polygon":
      b = t.getAttribute("points"), y = b.match(/\d+/g).map(t => parseInt(t, 10)), e.context.poly(y, !0), r && e.context.fill(r), s && e.context.stroke(s);
      break;
    case "polyline":
      b = t.getAttribute("points"), y = b.match(/\d+/g).map(t => parseInt(t, 10)), e.context.poly(y, !1), s && e.context.stroke(s);
      break;
    case "g":
    case "svg":
      break;
    default:
      Bt(`[SVG parser] <${t.nodeName}> elements unsupported`)
  }
  a && (r = null);
  for (let E = 0; E < i.length; E++) To(i[E], e, r, s)
}

function So(t) {
  return t instanceof hi
}

function wo(t) {
  return t instanceof ii
}

function Eo(t, e, r) {
  return t.fill = e, t.color = 16777215, t.texture = e.texture, t.matrix = e.transform, {
    ...r,
    ...t
  }
}

function Co(t, e, r) {
  return e.buildGradient(), t.fill = e, t.color = 16777215, t.texture = e.texture, t.matrix = e.transform, t.textureSpace = e.textureSpace, {
    ...r,
    ...t
  }
}

function Po(t, e) {
  if (null == t) return null;
  const r = {},
    s = t;
  return function(t) {
    return At.isColorLike(t)
  }(t) ? function(t, e, r) {
    const s = At.shared.setValue(e ?? 0);
    return t.color = s.toNumber(), t.alpha = 1 === s.alpha ? r.alpha : s.alpha, t.texture = Z.WHITE, {
      ...r,
      ...t
    }
  }(r, t, e) : function(t) {
    return t instanceof Z
  }(t) ? function(t, e, r) {
    return t.texture = e, {
      ...r,
      ...t
    }
  }(r, t, e) : So(t) ? Eo(r, t, e) : wo(t) ? Co(r, t, e) : s.fill && So(s.fill) ? Eo(s, s.fill, e) : s.fill && wo(s.fill) ? Co(s, s.fill, e) : function(t, e) {
    const r = {
        ...e,
        ...t
      },
      s = At.shared.setValue(r.color);
    return r.alpha *= s.alpha, r.color = s.toNumber(), r
  }(s, e)
}

function Mo(t, e) {
  const {
    width: r,
    alignment: s,
    miterLimit: i,
    cap: n,
    join: o,
    pixelLine: a,
    ...h
  } = e, l = Po(t, h);
  return l ? {
    width: r,
    alignment: s,
    miterLimit: i,
    cap: n,
    join: o,
    pixelLine: a,
    ...l
  } : null
}
const Ao = new y,
  Ro = new v,
  Bo = class t extends m {
    constructor() {
      super(...arguments), this.uid = F("graphicsContext"), this.dirty = !0, this.batchMode = "auto", this.instructions = [], this._activePath = new po, this._transform = new v, this._fillStyle = {
        ...t.defaultFillStyle
      }, this._strokeStyle = {
        ...t.defaultStrokeStyle
      }, this._stateStack = [], this._tick = 0, this._bounds = new tt, this._boundsDirty = !0
    }
    clone() {
      const e = new t;
      return e.batchMode = this.batchMode, e.instructions = this.instructions.slice(), e._activePath = this._activePath.clone(), e._transform = this._transform.clone(), e._fillStyle = {
        ...this._fillStyle
      }, e._strokeStyle = {
        ...this._strokeStyle
      }, e._stateStack = this._stateStack.slice(), e._bounds = this._bounds.clone(), e._boundsDirty = !0, e
    }
    get fillStyle() {
      return this._fillStyle
    }
    set fillStyle(e) {
      this._fillStyle = Po(e, t.defaultFillStyle)
    }
    get strokeStyle() {
      return this._strokeStyle
    }
    set strokeStyle(e) {
      this._strokeStyle = Mo(e, t.defaultStrokeStyle)
    }
    setFillStyle(e) {
      return this._fillStyle = Po(e, t.defaultFillStyle), this
    }
    setStrokeStyle(e) {
      return this._strokeStyle = Po(e, t.defaultStrokeStyle), this
    }
    texture(t, e, r, s, i, n) {
      return this.instructions.push({
        action: "texture",
        data: {
          image: t,
          dx: r || 0,
          dy: s || 0,
          dw: i || t.frame.width,
          dh: n || t.frame.height,
          transform: this._transform.clone(),
          alpha: this._fillStyle.alpha,
          style: e ? At.shared.setValue(e).toNumber() : 16777215
        }
      }), this.onUpdate(), this
    }
    beginPath() {
      return this._activePath = new po, this
    }
    fill(e, r) {
      let s;
      const i = this.instructions[this.instructions.length - 1];
      return s = 0 === this._tick && i && "stroke" === i.action ? i.data.path : this._activePath.clone(), s ? (null != e && (void 0 !== r && "number" == typeof e && (D(O, "GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"), e = {
        color: e,
        alpha: r
      }), this._fillStyle = Po(e, t.defaultFillStyle)), this.instructions.push({
        action: "fill",
        data: {
          style: this.fillStyle,
          path: s
        }
      }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0, this) : this
    }
    _initNextPathLocation() {
      const {
        x: t,
        y: e
      } = this._activePath.getLastPoint(y.shared);
      this._activePath.clear(), this._activePath.moveTo(t, e)
    }
    stroke(e) {
      let r;
      const s = this.instructions[this.instructions.length - 1];
      return r = 0 === this._tick && s && "fill" === s.action ? s.data.path : this._activePath.clone(), r ? (null != e && (this._strokeStyle = Mo(e, t.defaultStrokeStyle)), this.instructions.push({
        action: "stroke",
        data: {
          style: this.strokeStyle,
          path: r
        }
      }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0, this) : this
    }
    cut() {
      for (let t = 0; t < 2; t++) {
        const e = this.instructions[this.instructions.length - 1 - t],
          r = this._activePath.clone();
        if (e && ("stroke" === e.action || "fill" === e.action)) {
          if (!e.data.hole) {
            e.data.hole = r;
            break
          }
          e.data.hole.addPath(r)
        }
      }
      return this._initNextPathLocation(), this
    }
    arc(t, e, r, s, i, n) {
      this._tick++;
      const o = this._transform;
      return this._activePath.arc(o.a * t + o.c * e + o.tx, o.b * t + o.d * e + o.ty, r, s, i, n), this
    }
    arcTo(t, e, r, s, i) {
      this._tick++;
      const n = this._transform;
      return this._activePath.arcTo(n.a * t + n.c * e + n.tx, n.b * t + n.d * e + n.ty, n.a * r + n.c * s + n.tx, n.b * r + n.d * s + n.ty, i), this
    }
    arcToSvg(t, e, r, s, i, n, o) {
      this._tick++;
      const a = this._transform;
      return this._activePath.arcToSvg(t, e, r, s, i, a.a * n + a.c * o + a.tx, a.b * n + a.d * o + a.ty), this
    }
    bezierCurveTo(t, e, r, s, i, n, o) {
      this._tick++;
      const a = this._transform;
      return this._activePath.bezierCurveTo(a.a * t + a.c * e + a.tx, a.b * t + a.d * e + a.ty, a.a * r + a.c * s + a.tx, a.b * r + a.d * s + a.ty, a.a * i + a.c * n + a.tx, a.b * i + a.d * n + a.ty, o), this
    }
    closePath() {
      var t;
      return this._tick++, null == (t = this._activePath) || t.closePath(), this
    }
    ellipse(t, e, r, s) {
      return this._tick++, this._activePath.ellipse(t, e, r, s, this._transform.clone()), this
    }
    circle(t, e, r) {
      return this._tick++, this._activePath.circle(t, e, r, this._transform.clone()), this
    }
    path(t) {
      return this._tick++, this._activePath.addPath(t, this._transform.clone()), this
    }
    lineTo(t, e) {
      this._tick++;
      const r = this._transform;
      return this._activePath.lineTo(r.a * t + r.c * e + r.tx, r.b * t + r.d * e + r.ty), this
    }
    moveTo(t, e) {
      this._tick++;
      const r = this._transform,
        s = this._activePath.instructions,
        i = r.a * t + r.c * e + r.tx,
        n = r.b * t + r.d * e + r.ty;
      return 1 === s.length && "moveTo" === s[0].action ? (s[0].data[0] = i, s[0].data[1] = n, this) : (this._activePath.moveTo(i, n), this)
    }
    quadraticCurveTo(t, e, r, s, i) {
      this._tick++;
      const n = this._transform;
      return this._activePath.quadraticCurveTo(n.a * t + n.c * e + n.tx, n.b * t + n.d * e + n.ty, n.a * r + n.c * s + n.tx, n.b * r + n.d * s + n.ty, i), this
    }
    rect(t, e, r, s) {
      return this._tick++, this._activePath.rect(t, e, r, s, this._transform.clone()), this
    }
    roundRect(t, e, r, s, i) {
      return this._tick++, this._activePath.roundRect(t, e, r, s, i, this._transform.clone()), this
    }
    poly(t, e) {
      return this._tick++, this._activePath.poly(t, e, this._transform.clone()), this
    }
    regularPoly(t, e, r, s, i = 0, n) {
      return this._tick++, this._activePath.regularPoly(t, e, r, s, i, n), this
    }
    roundPoly(t, e, r, s, i, n) {
      return this._tick++, this._activePath.roundPoly(t, e, r, s, i, n), this
    }
    roundShape(t, e, r, s) {
      return this._tick++, this._activePath.roundShape(t, e, r, s), this
    }
    filletRect(t, e, r, s, i) {
      return this._tick++, this._activePath.filletRect(t, e, r, s, i), this
    }
    chamferRect(t, e, r, s, i, n) {
      return this._tick++, this._activePath.chamferRect(t, e, r, s, i, n), this
    }
    star(t, e, r, s, i = 0, n = 0) {
      return this._tick++, this._activePath.star(t, e, r, s, i, n, this._transform.clone()), this
    }
    svg(t) {
      return this._tick++,
        function(t, e) {
          if ("string" == typeof t) {
            const e = document.createElement("div");
            e.innerHTML = t.trim(), t = e.querySelector("svg")
          }
          const r = {
            context: e,
            defs: {},
            path: new po
          };
          ! function(t, e) {
            const r = t.querySelectorAll("defs");
            for (let s = 0; s < r.length; s++) {
              const t = r[s];
              for (let r = 0; r < t.children.length; r++) {
                const s = t.children[r];
                switch (s.nodeName.toLowerCase()) {
                  case "lineargradient":
                    e.defs[s.id] = go(s);
                    break;
                  case "radialgradient":
                    e.defs[s.id] = _o()
                }
              }
            }
          }(t, r);
          const s = t.children,
            {
              fillStyle: i,
              strokeStyle: n
            } = bo(t, r);
          for (let o = 0; o < s.length; o++) {
            const t = s[o];
            "defs" !== t.nodeName.toLowerCase() && To(t, r, i, n)
          }
        }(t, this), this
    }
    restore() {
      const t = this._stateStack.pop();
      return t && (this._transform = t.transform, this._fillStyle = t.fillStyle, this._strokeStyle = t.strokeStyle), this
    }
    save() {
      return this._stateStack.push({
        transform: this._transform.clone(),
        fillStyle: {
          ...this._fillStyle
        },
        strokeStyle: {
          ...this._strokeStyle
        }
      }), this
    }
    getTransform() {
      return this._transform
    }
    resetTransform() {
      return this._transform.identity(), this
    }
    rotate(t) {
      return this._transform.rotate(t), this
    }
    scale(t, e = t) {
      return this._transform.scale(t, e), this
    }
    setTransform(t, e, r, s, i, n) {
      return t instanceof v ? (this._transform.set(t.a, t.b, t.c, t.d, t.tx, t.ty), this) : (this._transform.set(t, e, r, s, i, n), this)
    }
    transform(t, e, r, s, i, n) {
      return t instanceof v ? (this._transform.append(t), this) : (Ro.set(t, e, r, s, i, n), this._transform.append(Ro), this)
    }
    translate(t, e = t) {
      return this._transform.translate(t, e), this
    }
    clear() {
      return this._activePath.clear(), this.instructions.length = 0, this.resetTransform(), this.onUpdate(), this
    }
    onUpdate() {
      this.dirty || (this.emit("update", this, 16), this.dirty = !0, this._boundsDirty = !0)
    }
    get bounds() {
      if (!this._boundsDirty) return this._bounds;
      const t = this._bounds;
      t.clear();
      for (let e = 0; e < this.instructions.length; e++) {
        const r = this.instructions[e],
          s = r.action;
        if ("fill" === s) {
          const e = r.data;
          t.addBounds(e.path.bounds)
        } else if ("texture" === s) {
          const e = r.data;
          t.addFrame(e.dx, e.dy, e.dx + e.dw, e.dy + e.dh, e.transform)
        }
        if ("stroke" === s) {
          const e = r.data,
            s = e.style.alignment,
            i = e.style.width * (1 - s),
            n = e.path.bounds;
          t.addFrame(n.minX - i, n.minY - i, n.maxX + i, n.maxY + i)
        }
      }
      return t
    }
    containsPoint(t) {
      var e;
      if (!this.bounds.containsPoint(t.x, t.y)) return !1;
      const r = this.instructions;
      let s = !1;
      for (let i = 0; i < r.length; i++) {
        const n = r[i],
          o = n.data,
          a = o.path;
        if (!n.action || !a) continue;
        const h = o.style,
          l = a.shapePath.shapePrimitives;
        for (let r = 0; r < l.length; r++) {
          const i = l[r].shape;
          if (!h || !i) continue;
          const a = l[r].transform,
            u = a ? a.applyInverse(t, Ao) : t;
          if ("fill" === n.action) s = i.contains(u.x, u.y);
          else {
            const t = h;
            s = i.strokeContains(u.x, u.y, t.width, t.alignment)
          }
          const c = o.hole;
          if (c) {
            const t = null == (e = c.shapePath) ? void 0 : e.shapePrimitives;
            if (t)
              for (let e = 0; e < t.length; e++) t[e].shape.contains(u.x, u.y) && (s = !1)
          }
          if (s) return !0
        }
      }
      return s
    }
    destroy(t = !1) {
      if (this._stateStack.length = 0, this._transform = null, this.emit("destroy", this), this.removeAllListeners(), "boolean" == typeof t ? t : null == t ? void 0 : t.texture) {
        const e = "boolean" == typeof t ? t : null == t ? void 0 : t.textureSource;
        this._fillStyle.texture && this._fillStyle.texture.destroy(e), this._strokeStyle.texture && this._strokeStyle.texture.destroy(e)
      }
      this._fillStyle = null, this._strokeStyle = null, this.instructions = null, this._activePath = null, this._bounds = null, this._stateStack = null, this.customShader = null, this._transform = null
    }
  };
Bo.defaultFillStyle = {
  color: 16777215,
  alpha: 1,
  texture: Z.WHITE,
  matrix: null,
  fill: null,
  textureSpace: "local"
}, Bo.defaultStrokeStyle = {
  width: 1,
  color: 16777215,
  alpha: 1,
  alignment: .5,
  miterLimit: 10,
  cap: "butt",
  join: "miter",
  texture: Z.WHITE,
  matrix: null,
  fill: null,
  textureSpace: "local",
  pixelLine: !1
};
let ko = Bo;
const Go = ["align", "breakWords", "cssOverrides", "fontVariant", "fontWeight", "leading", "letterSpacing", "lineHeight", "padding", "textBaseline", "trim", "whiteSpace", "wordWrap", "wordWrapWidth", "fontFamily", "fontStyle", "fontSize"];

function Io(t, e, r) {
  var s;
  return t ? (e[r++] = t.color, e[r++] = t.alpha, e[r++] = null == (s = t.fill) ? void 0 : s.styleKey, r) : r
}
const Fo = class t extends m {
  constructor(e = {}) {
    super(),
      function(t) {
        const e = t;
        if ("boolean" == typeof e.dropShadow && e.dropShadow) {
          const r = Uo.defaultDropShadow;
          t.dropShadow = {
            alpha: e.dropShadowAlpha ?? r.alpha,
            angle: e.dropShadowAngle ?? r.angle,
            blur: e.dropShadowBlur ?? r.blur,
            color: e.dropShadowColor ?? r.color,
            distance: e.dropShadowDistance ?? r.distance
          }
        }
        if (void 0 !== e.strokeThickness) {
          D(O, "strokeThickness is now a part of stroke");
          const r = e.stroke;
          let s = {};
          if (At.isColorLike(r)) s.color = r;
          else if (r instanceof ii || r instanceof hi) s.fill = r;
          else {
            if (!Object.hasOwnProperty.call(r, "color") && !Object.hasOwnProperty.call(r, "fill")) throw new Error("Invalid stroke value.");
            s = r
          }
          t.stroke = {
            ...s,
            width: e.strokeThickness
          }
        }
        if (Array.isArray(e.fillGradientStops)) {
          let r;
          D(O, "gradient fill is now a fill pattern: `new FillGradient(...)`"), null == t.fontSize ? t.fontSize = Uo.defaultTextStyle.fontSize : r = "string" == typeof t.fontSize ? parseInt(t.fontSize, 10) : t.fontSize;
          const s = new ii({
              start: {
                x: 0,
                y: 0
              },
              end: {
                x: 0,
                y: 1.7 * (r || 0)
              }
            }),
            i = e.fillGradientStops.map(t => At.shared.setValue(t).toNumber());
          i.forEach((t, e) => {
            const r = e / (i.length - 1);
            s.addColorStop(r, t)
          }), t.fill = {
            fill: s
          }
        }
      }(e);
    const r = {
      ...t.defaultTextStyle,
      ...e
    };
    for (const t in r) this[t] = r[t];
    this.update()
  }
  get align() {
    return this._align
  }
  set align(t) {
    this._align = t, this.update()
  }
  get breakWords() {
    return this._breakWords
  }
  set breakWords(t) {
    this._breakWords = t, this.update()
  }
  get dropShadow() {
    return this._dropShadow
  }
  set dropShadow(e) {
    this._dropShadow = null !== e && "object" == typeof e ? this._createProxy({
      ...t.defaultDropShadow,
      ...e
    }) : e ? this._createProxy({
      ...t.defaultDropShadow
    }) : null, this.update()
  }
  get fontFamily() {
    return this._fontFamily
  }
  set fontFamily(t) {
    this._fontFamily = t, this.update()
  }
  get fontSize() {
    return this._fontSize
  }
  set fontSize(t) {
    this._fontSize = "string" == typeof t ? parseInt(t, 10) : t, this.update()
  }
  get fontStyle() {
    return this._fontStyle
  }
  set fontStyle(t) {
    this._fontStyle = t.toLowerCase(), this.update()
  }
  get fontVariant() {
    return this._fontVariant
  }
  set fontVariant(t) {
    this._fontVariant = t, this.update()
  }
  get fontWeight() {
    return this._fontWeight
  }
  set fontWeight(t) {
    this._fontWeight = t, this.update()
  }
  get leading() {
    return this._leading
  }
  set leading(t) {
    this._leading = t, this.update()
  }
  get letterSpacing() {
    return this._letterSpacing
  }
  set letterSpacing(t) {
    this._letterSpacing = t, this.update()
  }
  get lineHeight() {
    return this._lineHeight
  }
  set lineHeight(t) {
    this._lineHeight = t, this.update()
  }
  get padding() {
    return this._padding
  }
  set padding(t) {
    this._padding = t, this.update()
  }
  get filters() {
    return this._filters
  }
  set filters(t) {
    this._filters = t, this.update()
  }
  get trim() {
    return this._trim
  }
  set trim(t) {
    this._trim = t, this.update()
  }
  get textBaseline() {
    return this._textBaseline
  }
  set textBaseline(t) {
    this._textBaseline = t, this.update()
  }
  get whiteSpace() {
    return this._whiteSpace
  }
  set whiteSpace(t) {
    this._whiteSpace = t, this.update()
  }
  get wordWrap() {
    return this._wordWrap
  }
  set wordWrap(t) {
    this._wordWrap = t, this.update()
  }
  get wordWrapWidth() {
    return this._wordWrapWidth
  }
  set wordWrapWidth(t) {
    this._wordWrapWidth = t, this.update()
  }
  get fill() {
    return this._originalFill
  }
  set fill(t) {
    t !== this._originalFill && (this._originalFill = t, this._isFillStyle(t) && (this._originalFill = this._createProxy({
      ...ko.defaultFillStyle,
      ...t
    }, () => {
      this._fill = Po({
        ...this._originalFill
      }, ko.defaultFillStyle)
    })), this._fill = Po(0 === t ? "black" : t, ko.defaultFillStyle), this.update())
  }
  get stroke() {
    return this._originalStroke
  }
  set stroke(t) {
    t !== this._originalStroke && (this._originalStroke = t, this._isFillStyle(t) && (this._originalStroke = this._createProxy({
      ...ko.defaultStrokeStyle,
      ...t
    }, () => {
      this._stroke = Mo({
        ...this._originalStroke
      }, ko.defaultStrokeStyle)
    })), this._stroke = Mo(t, ko.defaultStrokeStyle), this.update())
  }
  _generateKey() {
    return this._styleKey = function(t) {
      const e = [];
      let r = 0;
      for (let s = 0; s < Go.length; s++) {
        const i = `_${Go[s]}`;
        e[r++] = t[i]
      }
      return r = Io(t._fill, e, r), r = function(t, e, r) {
        return t ? (r = Io(t, e, r), e[r++] = t.width, e[r++] = t.alignment, e[r++] = t.cap, e[r++] = t.join, e[r++] = t.miterLimit, r) : r
      }(t._stroke, e, r), r = function(t, e, r) {
        return t ? (e[r++] = t.alpha, e[r++] = t.angle, e[r++] = t.blur, e[r++] = t.distance, e[r++] = At.shared.setValue(t.color).toNumber(), r) : r
      }(t.dropShadow, e, r), r = function(t, e, r) {
        if (!t) return r;
        for (const s of t) e[r++] = s.uid;
        return r
      }(t.filters, e, r), e.join("-")
    }(this), this._styleKey
  }
  update() {
    this._styleKey = null, this.emit("update", this)
  }
  reset() {
    const e = t.defaultTextStyle;
    for (const t in e) this[t] = e[t]
  }
  get styleKey() {
    return this._styleKey || this._generateKey()
  }
  clone() {
    return new t({
      align: this.align,
      breakWords: this.breakWords,
      dropShadow: this._dropShadow ? {
        ...this._dropShadow
      } : null,
      fill: this._fill,
      fontFamily: this.fontFamily,
      fontSize: this.fontSize,
      fontStyle: this.fontStyle,
      fontVariant: this.fontVariant,
      fontWeight: this.fontWeight,
      leading: this.leading,
      letterSpacing: this.letterSpacing,
      lineHeight: this.lineHeight,
      padding: this.padding,
      stroke: this._stroke,
      textBaseline: this.textBaseline,
      whiteSpace: this.whiteSpace,
      wordWrap: this.wordWrap,
      wordWrapWidth: this.wordWrapWidth,
      filters: this._filters ? [...this._filters] : void 0
    })
  }
  _getFinalPadding() {
    let t = 0;
    if (this._filters)
      for (let e = 0; e < this._filters.length; e++) t += this._filters[e].padding;
    return Math.max(this._padding, t)
  }
  destroy(t = !1) {
    var e, r, s, i;
    if (this.removeAllListeners(), "boolean" == typeof t ? t : null == t ? void 0 : t.texture) {
      const n = "boolean" == typeof t ? t : null == t ? void 0 : t.textureSource;
      (null == (e = this._fill) ? void 0 : e.texture) && this._fill.texture.destroy(n), (null == (r = this._originalFill) ? void 0 : r.texture) && this._originalFill.texture.destroy(n), (null == (s = this._stroke) ? void 0 : s.texture) && this._stroke.texture.destroy(n), (null == (i = this._originalStroke) ? void 0 : i.texture) && this._originalStroke.texture.destroy(n)
    }
    this._fill = null, this._stroke = null, this.dropShadow = null, this._originalStroke = null, this._originalFill = null
  }
  _createProxy(t, e) {
    return new Proxy(t, {
      set: (t, r, s) => (t[r] = s, null == e || e(r, s), this.update(), !0)
    })
  }
  _isFillStyle(t) {
    return null !== (t ?? null) && !(At.isColorLike(t) || t instanceof ii || t instanceof hi)
  }
};
Fo.defaultDropShadow = {
  alpha: 1,
  angle: Math.PI / 6,
  blur: 0,
  color: "black",
  distance: 5
}, Fo.defaultTextStyle = {
  align: "left",
  breakWords: !1,
  dropShadow: null,
  fill: "black",
  fontFamily: "Arial",
  fontSize: 26,
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "normal",
  leading: 0,
  letterSpacing: 0,
  lineHeight: 0,
  padding: 0,
  stroke: null,
  textBaseline: "alphabetic",
  trim: !1,
  whiteSpace: "pre",
  wordWrap: !1,
  wordWrapWidth: 100
};
let Uo = Fo;
const Oo = new class {
    constructor(t) {
      this._canvasPool = Object.create(null), this.canvasOptions = t || {}, this.enableFullScreen = !1
    }
    _createCanvasAndContext(t, e) {
      const r = Me.get().createCanvas();
      r.width = t, r.height = e;
      const s = r.getContext("2d");
      return {
        canvas: r,
        context: s
      }
    }
    getOptimalCanvasAndContext(t, e, r = 1) {
      t = Math.ceil(t * r - 1e-6), e = Math.ceil(e * r - 1e-6);
      const s = ((t = N(t)) << 17) + ((e = N(e)) << 1);
      this._canvasPool[s] || (this._canvasPool[s] = []);
      let i = this._canvasPool[s].pop();
      return i || (i = this._createCanvasAndContext(t, e)), i
    }
    returnCanvasAndContext(t) {
      const e = t.canvas,
        {
          width: r,
          height: s
        } = e,
        i = (r << 17) + (s << 1);
      t.context.resetTransform(), t.context.clearRect(0, 0, r, s), this._canvasPool[i].push(t)
    }
    clear() {
      this._canvasPool = {}
    }
  },
  Do = 1e5;

function Lo(t, e, r, s = 0) {
  if (t.texture === Z.WHITE && !t.fill) return At.shared.setValue(t.color).setAlpha(t.alpha ?? 1).toHexa();
  if (!t.fill) {
    const r = e.createPattern(t.texture.source.resource, "repeat"),
      s = t.matrix.copyTo(v.shared);
    return s.scale(t.texture.frame.width, t.texture.frame.height), r.setTransform(s), r
  }
  if (t.fill instanceof hi) {
    const r = t.fill,
      s = e.createPattern(r.texture.source.resource, "repeat"),
      i = r.transform.copyTo(v.shared);
    return i.scale(r.texture.frame.width, r.texture.frame.height), s.setTransform(i), s
  }
  if (t.fill instanceof ii) {
    const i = t.fill,
      n = "linear" === i.type,
      o = "local" === i.textureSpace;
    let a, h = 1,
      l = 1;
    o && r && (h = r.width + s, l = r.height + s);
    let u = !1;
    if (n) {
      const {
        start: t,
        end: r
      } = i;
      a = e.createLinearGradient(t.x * h, t.y * l, r.x * h, r.y * l), u = Math.abs(r.x - t.x) < Math.abs(.1 * (r.y - t.y))
    } else {
      const {
        center: t,
        innerRadius: r,
        outerCenter: s,
        outerRadius: n
      } = i;
      a = e.createRadialGradient(t.x * h, t.y * l, r * h, s.x * h, s.y * l, n * h)
    }
    if (u && o && r) {
      const t = r.lineHeight / l;
      for (let e = 0; e < r.lines.length; e++) {
        const n = (e * r.lineHeight + s / 2) / l;
        i.colorStops.forEach(e => {
          const r = n + e.offset * t;
          a.addColorStop(Math.floor(r * Do) / Do, At.shared.setValue(e.color).toHex())
        })
      }
    } else i.colorStops.forEach(t => {
      a.addColorStop(t.offset, At.shared.setValue(t.color).toHex())
    });
    return a
  }
  return Bt("FillStyle not recognised", t), "red"
}
const No = class t extends Ks {
  constructor(e) {
    super(), this.resolution = 1, this.pages = [], this._padding = 0, this._measureCache = Object.create(null), this._currentChars = [], this._currentX = 0, this._currentY = 0, this._currentMaxCharHeight = 0, this._currentPageIndex = -1, this._skipKerning = !1;
    const r = {
      ...t.defaultOptions,
      ...e
    };
    this._textureSize = r.textureSize, this._mipmap = r.mipmap;
    const s = r.style.clone();
    r.overrideFill && (s._fill.color = 16777215, s._fill.alpha = 1, s._fill.texture = Z.WHITE, s._fill.fill = null), this.applyFillAsTint = r.overrideFill;
    const i = s.fontSize;
    s.fontSize = this.baseMeasurementFontSize;
    const n = Qs(s);
    r.overrideSize ? s._stroke && (s._stroke.width *= this.baseRenderedFontSize / i) : s.fontSize = this.baseRenderedFontSize = i, this._style = s, this._skipKerning = r.skipKerning ?? !1, this.resolution = r.resolution ?? 1, this._padding = r.padding ?? 4, r.textureStyle && (this._textureStyle = r.textureStyle instanceof X ? r.textureStyle : new X(r.textureStyle)), this.fontMetrics = ei.measureFont(n), this.lineHeight = s.lineHeight || this.fontMetrics.fontSize || s.fontSize
  }
  ensureCharacters(t) {
    var e, r;
    const s = ei.graphemeSegmenter(t).filter(t => !this._currentChars.includes(t)).filter((t, e, r) => r.indexOf(t) === e);
    if (!s.length) return;
    let i;
    this._currentChars = [...this._currentChars, ...s], i = -1 === this._currentPageIndex ? this._nextPage() : this.pages[this._currentPageIndex];
    let {
      canvas: n,
      context: o
    } = i.canvasAndContext, a = i.texture.source;
    const h = this._style;
    let l = this._currentX,
      u = this._currentY,
      c = this._currentMaxCharHeight;
    const d = this.baseRenderedFontSize / this.baseMeasurementFontSize,
      p = this._padding * d;
    let f = !1;
    const m = n.width / this.resolution,
      g = n.height / this.resolution;
    for (let _ = 0; _ < s.length; _++) {
      const t = s[_],
        i = ei.measureText(t, h, n, !1);
      i.lineHeight = i.height;
      const x = i.width * d,
        y = Math.ceil(("italic" === h.fontStyle ? 2 : 1) * x) + 2 * p,
        b = i.height * d + 2 * p;
      if (f = !1, "\n" !== t && "\r" !== t && "\t" !== t && " " !== t && (f = !0, c = Math.ceil(Math.max(b, c))), l + y > m && (u += c, c = b, l = 0, u + c > g)) {
        a.update();
        const t = this._nextPage();
        n = t.canvasAndContext.canvas, o = t.canvasAndContext.context, a = t.texture.source, l = 0, u = 0, c = 0
      }
      const v = x / d - ((null == (e = h.dropShadow) ? void 0 : e.distance) ?? 0) - ((null == (r = h._stroke) ? void 0 : r.width) ?? 0);
      if (this.chars[t] = {
          id: t.codePointAt(0),
          xOffset: -this._padding,
          yOffset: -this._padding,
          xAdvance: v,
          kerning: {}
        }, f) {
        this._drawGlyph(o, i, l + p, u + p, d, h);
        const e = a.width * d,
          r = a.height * d,
          s = new G(l / e * a.width, u / r * a.height, y / e * a.width, b / r * a.height);
        this.chars[t].texture = new Z({
          source: a,
          frame: s
        }), l += Math.ceil(y)
      }
    }
    a.update(), this._currentX = l, this._currentY = u, this._currentMaxCharHeight = c, this._skipKerning && this._applyKerning(s, o)
  }
  get pageTextures() {
    return D(O, "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."), this.pages
  }
  _applyKerning(t, e) {
    const r = this._measureCache;
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      for (let t = 0; t < this._currentChars.length; t++) {
        const s = this._currentChars[t];
        let n = r[i];
        n || (n = r[i] = e.measureText(i).width);
        let o = r[s];
        o || (o = r[s] = e.measureText(s).width);
        let a = e.measureText(i + s).width,
          h = a - (n + o);
        h && (this.chars[i].kerning[s] = h), a = e.measureText(i + s).width, h = a - (n + o), h && (this.chars[s].kerning[i] = h)
      }
    }
  }
  _nextPage() {
    this._currentPageIndex++;
    const t = this.resolution,
      e = Oo.getOptimalCanvasAndContext(this._textureSize, this._textureSize, t);
    this._setupContext(e.context, this._style, t);
    const r = t * (this.baseRenderedFontSize / this.baseMeasurementFontSize),
      s = new Z({
        source: new Re({
          resource: e.canvas,
          resolution: r,
          alphaMode: "premultiply-alpha-on-upload",
          autoGenerateMipmaps: this._mipmap
        })
      });
    this._textureStyle && (s.source.style = this._textureStyle);
    const i = {
      canvasAndContext: e,
      texture: s
    };
    return this.pages[this._currentPageIndex] = i, i
  }
  _setupContext(t, e, r) {
    e.fontSize = this.baseRenderedFontSize, t.scale(r, r), t.font = Qs(e), e.fontSize = this.baseMeasurementFontSize, t.textBaseline = e.textBaseline;
    const s = e._stroke,
      i = (null == s ? void 0 : s.width) ?? 0;
    if (s && (t.lineWidth = i, t.lineJoin = s.join, t.miterLimit = s.miterLimit, t.strokeStyle = Lo(s, t)), e._fill && (t.fillStyle = Lo(e._fill, t)), e.dropShadow) {
      const s = e.dropShadow,
        i = At.shared.setValue(s.color).toArray(),
        n = s.blur * r,
        o = s.distance * r;
      t.shadowColor = `rgba(${255*i[0]},${255*i[1]},${255*i[2]},${s.alpha})`, t.shadowBlur = n, t.shadowOffsetX = Math.cos(s.angle) * o, t.shadowOffsetY = Math.sin(s.angle) * o
    } else t.shadowColor = "black", t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0
  }
  _drawGlyph(t, e, r, s, i, n) {
    const o = e.text,
      a = e.fontProperties,
      h = n._stroke,
      l = ((null == h ? void 0 : h.width) ?? 0) * i,
      u = r + l / 2,
      c = s - l / 2,
      d = a.descent * i,
      p = e.lineHeight * i;
    let f = !1;
    n.stroke && l && (f = !0, t.strokeText(o, u, c + p - d));
    const {
      shadowBlur: m,
      shadowOffsetX: g,
      shadowOffsetY: _
    } = t;
    n._fill && (f && (t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0), t.fillText(o, u, c + p - d)), f && (t.shadowBlur = m, t.shadowOffsetX = g, t.shadowOffsetY = _)
  }
  destroy() {
    super.destroy();
    for (let t = 0; t < this.pages.length; t++) {
      const {
        canvasAndContext: e,
        texture: r
      } = this.pages[t];
      Oo.returnCanvasAndContext(e), r.destroy(!0)
    }
    this.pages = null
  }
};
No.defaultOptions = {
  textureSize: 512,
  style: new Uo,
  mipmap: !0
};
let zo = No;

function Ho(t, e, r, s) {
  const i = {
    width: 0,
    height: 0,
    offsetY: 0,
    scale: e.fontSize / r.baseMeasurementFontSize,
    lines: [{
      width: 0,
      charPositions: [],
      spaceWidth: 0,
      spacesIndex: [],
      chars: []
    }]
  };
  i.offsetY = r.baseLineOffset;
  let n = i.lines[0],
    o = null,
    a = !0;
  const h = {
      width: 0,
      start: 0,
      index: 0,
      positions: [],
      chars: []
    },
    l = t => {
      const e = n.width;
      for (let r = 0; r < h.index; r++) {
        const s = t.positions[r];
        n.chars.push(t.chars[r]), n.charPositions.push(s + e)
      }
      n.width += t.width, a = !1, h.width = 0, h.index = 0, h.chars.length = 0
    },
    u = () => {
      let t = n.chars.length - 1;
      if (s) {
        let e = n.chars[t];
        for (;
          " " === e;) n.width -= r.chars[e].xAdvance, e = n.chars[--t]
      }
      i.width = Math.max(i.width, n.width), n = {
        width: 0,
        charPositions: [],
        chars: [],
        spaceWidth: 0,
        spacesIndex: []
      }, a = !0, i.lines.push(n), i.height += r.lineHeight
    },
    c = r.baseMeasurementFontSize / e.fontSize,
    d = e.letterSpacing * c,
    p = e.wordWrapWidth * c,
    f = e.wordWrap && e.breakWords,
    m = t => t - d > p;
  for (let g = 0; g < t.length + 1; g++) {
    let s;
    const i = g === t.length;
    i || (s = t[g]);
    const c = r.chars[s] || r.chars[" "];
    if (/(?:\s)/.test(s) || "\r" === s || "\n" === s || i) {
      if (!a && e.wordWrap && m(n.width + h.width) ? (u(), l(h), i || n.charPositions.push(0)) : (h.start = n.width, l(h), i || n.charPositions.push(0)), "\r" === s || "\n" === s) 0 !== n.width && u();
      else if (!i) {
        const t = c.xAdvance + (c.kerning[o] || 0) + d;
        n.width += t, n.spaceWidth = t, n.spacesIndex.push(n.charPositions.length), n.chars.push(s)
      }
    } else {
      const t = c.kerning[o] || 0,
        e = c.xAdvance + t + d;
      f && m(n.width + h.width + e) && (l(h), u()), h.positions[h.index++] = h.width + t, h.chars.push(s), h.width += e
    }
    o = s
  }
  return u(), "center" === e.align ? function(t) {
    for (let e = 0; e < t.lines.length; e++) {
      const r = t.lines[e],
        s = t.width / 2 - r.width / 2;
      for (let t = 0; t < r.charPositions.length; t++) r.charPositions[t] += s
    }
  }(i) : "right" === e.align ? function(t) {
    for (let e = 0; e < t.lines.length; e++) {
      const r = t.lines[e],
        s = t.width - r.width;
      for (let t = 0; t < r.charPositions.length; t++) r.charPositions[t] += s
    }
  }(i) : "justify" === e.align && function(t) {
    const e = t.width;
    for (let r = 0; r < t.lines.length; r++) {
      const s = t.lines[r];
      let i = 0,
        n = s.spacesIndex[i++],
        o = 0;
      const a = s.spacesIndex.length,
        h = (e - s.width) / a;
      for (let t = 0; t < s.charPositions.length; t++) t === n && (n = s.spacesIndex[i++], o += h), s.charPositions[t] += o
    }
  }(i), i
}
let Wo = 0;
const Vo = new class {
  constructor() {
    this.ALPHA = [
      ["a", "z"],
      ["A", "Z"], " "
    ], this.NUMERIC = [
      ["0", "9"]
    ], this.ALPHANUMERIC = [
      ["a", "z"],
      ["A", "Z"],
      ["0", "9"], " "
    ], this.ASCII = [
      [" ", "~"]
    ], this.defaultOptions = {
      chars: this.ALPHANUMERIC,
      resolution: 1,
      padding: 4,
      skipKerning: !1,
      textureStyle: null
    }
  }
  getFont(t, e) {
    var r;
    let s = `${e.fontFamily}-bitmap`,
      i = !0;
    if (e._fill.fill && !e._stroke) s += e._fill.fill.styleKey, i = !1;
    else if (e._stroke || e.dropShadow) {
      let t = e.styleKey;
      t = t.substring(0, t.lastIndexOf("-")), s = `${t}-bitmap`, i = !1
    }
    if (!Le.has(s)) {
      const t = new zo({
        style: e,
        overrideFill: i,
        overrideSize: !0,
        ...this.defaultOptions
      });
      Wo++, Wo > 50 && Bt("BitmapText", `You have dynamically created ${Wo} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``), t.once("destroy", () => {
        Wo--, Le.remove(s)
      }), Le.set(s, t)
    }
    const n = Le.get(s);
    return null == (r = n.ensureCharacters) || r.call(n, t), n
  }
  getLayout(t, e, r = !0) {
    const s = this.getFont(t, e);
    return Ho(ei.graphemeSegmenter(t), e, s, r)
  }
  measureText(t, e, r = !0) {
    return this.getLayout(t, e, r)
  }
  install(...t) {
    var e, r, s, i;
    let n = t[0];
    "string" == typeof n && (n = {
      name: n,
      style: t[1],
      chars: null == (e = t[2]) ? void 0 : e.chars,
      resolution: null == (r = t[2]) ? void 0 : r.resolution,
      padding: null == (s = t[2]) ? void 0 : s.padding,
      skipKerning: null == (i = t[2]) ? void 0 : i.skipKerning
    }, D(O, "BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"));
    const o = null == n ? void 0 : n.name;
    if (!o) throw new Error("[BitmapFontManager] Property `name` is required.");
    n = {
      ...this.defaultOptions,
      ...n
    };
    const a = n.style,
      h = a instanceof Uo ? a : new Uo(a),
      l = null !== h._fill.fill && void 0 !== h._fill.fill,
      u = new zo({
        style: h,
        overrideFill: l,
        skipKerning: n.skipKerning,
        padding: n.padding,
        resolution: n.resolution,
        overrideSize: !1,
        textureStyle: n.textureStyle
      }),
      c = function(t) {
        if ("" === t) return [];
        "string" == typeof t && (t = [t]);
        const e = [];
        for (let r = 0, s = t.length; r < s; r++) {
          const s = t[r];
          if (Array.isArray(s)) {
            if (2 !== s.length) throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${s.length}.`);
            if (0 === s[0].length || 0 === s[1].length) throw new Error("[BitmapFont]: Invalid character delimiter.");
            const t = s[0].charCodeAt(0),
              r = s[1].charCodeAt(0);
            if (r < t) throw new Error("[BitmapFont]: Invalid character range.");
            for (let s = t, i = r; s <= i; s++) e.push(String.fromCharCode(s))
          } else e.push(...Array.from(s))
        }
        if (0 === e.length) throw new Error("[BitmapFont]: Empty set when resolving characters.");
        return e
      }(n.chars);
    return u.ensureCharacters(c.join("")), Le.set(`${o}-bitmap`, u), u.once("destroy", () => Le.remove(`${o}-bitmap`)), u
  }
  uninstall(t) {
    const e = `${t}-bitmap`,
      r = Le.get(e);
    r && r.destroy()
  }
};
class Xo {
  constructor(t) {
    this._attachedDomElements = [], this._renderer = t, this._renderer.runners.postrender.add(this), this._domElement = document.createElement("div"), this._domElement.style.position = "absolute", this._domElement.style.top = "0", this._domElement.style.left = "0", this._domElement.style.pointerEvents = "none", this._domElement.style.zIndex = "1000"
  }
  addRenderable(t, e) {
    this._attachedDomElements.includes(t) || this._attachedDomElements.push(t)
  }
  updateRenderable(t) {}
  validateRenderable(t) {
    return !0
  }
  postrender() {
    var t;
    const e = this._attachedDomElements;
    if (0 === e.length) return void this._domElement.remove();
    const r = this._renderer.view.canvas;
    this._domElement.parentNode !== r.parentNode && (null == (t = r.parentNode) || t.appendChild(this._domElement));
    const s = parseFloat(r.style.width) / r.width * this._renderer.resolution,
      i = parseFloat(r.style.height) / r.height * this._renderer.resolution;
    this._domElement.style.transform = `translate(${r.offsetLeft}px, ${r.offsetTop}px) scale(${s}, ${i})`;
    for (let n = 0; n < e.length; n++) {
      const t = e[n],
        r = t.element;
      if (!t.parent || t.globalDisplayStatus < 7) null == r || r.remove(), e.splice(n, 1), n--;
      else {
        this._domElement.contains(r) || (r.style.position = "absolute", r.style.pointerEvents = "auto", this._domElement.appendChild(r));
        const e = t.worldTransform,
          s = t._anchor,
          i = t.width * s.x,
          n = t.height * s.y;
        r.style.transformOrigin = `${i}px ${n}px`, r.style.transform = `matrix(${e.a}, ${e.b}, ${e.c}, ${e.d}, ${e.tx-i}, ${e.ty-n})`, r.style.opacity = t.groupAlpha.toString()
      }
    }
  }
  destroy() {
    var t;
    this._renderer.runners.postrender.remove(this);
    for (let e = 0; e < this._attachedDomElements.length; e++) null == (t = this._attachedDomElements[e].element) || t.remove();
    this._attachedDomElements.length = 0, this._domElement.remove(), this._renderer = null
  }
}
Xo.extension = {
  type: [a.WebGLPipes, a.WebGPUPipes, a.CanvasPipes],
  name: "dom"
};
let Yo = class {
  constructor() {
    throw new Error("xmldom has been deliberately stripped from the bundle!")
  }
};
const $o = {
    createCanvas: (t, e) => new OffscreenCanvas(t ?? 0, e ?? 0),
    getCanvasRenderingContext2D: () => OffscreenCanvasRenderingContext2D,
    getWebGLRenderingContext: () => WebGLRenderingContext,
    getNavigator: () => navigator,
    getBaseUrl: () => globalThis.location.href,
    getFontFaceSet: () => globalThis.fonts,
    fetch: (t, e) => fetch(t, e),
    parseXML: t => (new Yo).parseFromString(t, "text/xml")
  },
  jo = new class {
    constructor() {
      this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = !1, this._tickerAdded = !1, this._pauseUpdate = !0
    }
    init(t) {
      this.removeTickerListener(), this.events = t, this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = !1, this._tickerAdded = !1, this._pauseUpdate = !0
    }
    get pauseUpdate() {
      return this._pauseUpdate
    }
    set pauseUpdate(t) {
      this._pauseUpdate = t
    }
    addTickerListener() {
      !this._tickerAdded && this.domElement && (Fe.system.add(this._tickerUpdate, this, Be.INTERACTION), this._tickerAdded = !0)
    }
    removeTickerListener() {
      this._tickerAdded && (Fe.system.remove(this._tickerUpdate, this), this._tickerAdded = !1)
    }
    pointerMoved() {
      this._didMove = !0
    }
    _update() {
      if (!this.domElement || this._pauseUpdate) return;
      if (this._didMove) return void(this._didMove = !1);
      const t = this.events._rootPointerEvent;
      this.events.supportsTouchEvents && "touch" === t.pointerType || globalThis.document.dispatchEvent(this.events.supportsPointerEvents ? new PointerEvent("pointermove", {
        clientX: t.clientX,
        clientY: t.clientY,
        pointerType: t.pointerType,
        pointerId: t.pointerId
      }) : new MouseEvent("mousemove", {
        clientX: t.clientX,
        clientY: t.clientY
      }))
    }
    _tickerUpdate(t) {
      this._deltaTime += t.deltaTime, this._deltaTime < this.interactionFrequency || (this._deltaTime = 0, this._update())
    }
  };
class qo extends rr {
  constructor() {
    super(...arguments), this.client = new y, this.movement = new y, this.offset = new y, this.global = new y, this.screen = new y
  }
  get clientX() {
    return this.client.x
  }
  get clientY() {
    return this.client.y
  }
  get x() {
    return this.clientX
  }
  get y() {
    return this.clientY
  }
  get movementX() {
    return this.movement.x
  }
  get movementY() {
    return this.movement.y
  }
  get offsetX() {
    return this.offset.x
  }
  get offsetY() {
    return this.offset.y
  }
  get globalX() {
    return this.global.x
  }
  get globalY() {
    return this.global.y
  }
  get screenX() {
    return this.screen.x
  }
  get screenY() {
    return this.screen.y
  }
  getLocalPosition(t, e, r) {
    return t.worldTransform.applyInverse(r || this.global, e)
  }
  getModifierState(t) {
    return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(t)
  }
  initMouseEvent(t, e, r, s, i, n, o, a, h, l, u, c, d, p, f) {
    throw new Error("Method not implemented.")
  }
}
class Ko extends qo {
  constructor() {
    super(...arguments), this.width = 0, this.height = 0, this.isPrimary = !1
  }
  getCoalescedEvents() {
    return "pointermove" === this.type || "mousemove" === this.type || "touchmove" === this.type ? [this] : []
  }
  getPredictedEvents() {
    throw new Error("getPredictedEvents is not supported!")
  }
}
class Zo extends qo {
  constructor() {
    super(...arguments), this.DOM_DELTA_PIXEL = 0, this.DOM_DELTA_LINE = 1, this.DOM_DELTA_PAGE = 2
  }
}
Zo.DOM_DELTA_PIXEL = 0, Zo.DOM_DELTA_LINE = 1, Zo.DOM_DELTA_PAGE = 2;
const Qo = new y,
  Jo = new y;
class ta {
  constructor(t) {
    this.dispatch = new m, this.moveOnAll = !1, this.enableGlobalMoveEvents = !0, this.mappingState = {
      trackingData: {}
    }, this.eventPool = new Map, this._allInteractiveElements = [], this._hitElements = [], this._isPointerMoveEvent = !1, this.rootTarget = t, this.hitPruneFn = this.hitPruneFn.bind(this), this.hitTestFn = this.hitTestFn.bind(this), this.mapPointerDown = this.mapPointerDown.bind(this), this.mapPointerMove = this.mapPointerMove.bind(this), this.mapPointerOut = this.mapPointerOut.bind(this), this.mapPointerOver = this.mapPointerOver.bind(this), this.mapPointerUp = this.mapPointerUp.bind(this), this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this), this.mapWheel = this.mapWheel.bind(this), this.mappingTable = {}, this.addEventMapping("pointerdown", this.mapPointerDown), this.addEventMapping("pointermove", this.mapPointerMove), this.addEventMapping("pointerout", this.mapPointerOut), this.addEventMapping("pointerleave", this.mapPointerOut), this.addEventMapping("pointerover", this.mapPointerOver), this.addEventMapping("pointerup", this.mapPointerUp), this.addEventMapping("pointerupoutside", this.mapPointerUpOutside), this.addEventMapping("wheel", this.mapWheel)
  }
  addEventMapping(t, e) {
    this.mappingTable[t] || (this.mappingTable[t] = []), this.mappingTable[t].push({
      fn: e,
      priority: 0
    }), this.mappingTable[t].sort((t, e) => t.priority - e.priority)
  }
  dispatchEvent(t, e) {
    t.propagationStopped = !1, t.propagationImmediatelyStopped = !1, this.propagate(t, e), this.dispatch.emit(e || t.type, t)
  }
  mapEvent(t) {
    if (!this.rootTarget) return;
    const e = this.mappingTable[t.type];
    if (e)
      for (let r = 0, s = e.length; r < s; r++) e[r].fn(t);
    else Bt(`[EventBoundary]: Event mapping not defined for ${t.type}`)
  }
  hitTest(t, e) {
    jo.pauseUpdate = !0;
    const r = this[this._isPointerMoveEvent && this.enableGlobalMoveEvents ? "hitTestMoveRecursive" : "hitTestRecursive"](this.rootTarget, this.rootTarget.eventMode, Qo.set(t, e), this.hitTestFn, this.hitPruneFn);
    return r && r[0]
  }
  propagate(t, e) {
    if (!t.target) return;
    const r = t.composedPath();
    t.eventPhase = t.CAPTURING_PHASE;
    for (let s = 0, i = r.length - 1; s < i; s++)
      if (t.currentTarget = r[s], this.notifyTarget(t, e), t.propagationStopped || t.propagationImmediatelyStopped) return;
    if (t.eventPhase = t.AT_TARGET, t.currentTarget = t.target, this.notifyTarget(t, e), !t.propagationStopped && !t.propagationImmediatelyStopped) {
      t.eventPhase = t.BUBBLING_PHASE;
      for (let s = r.length - 2; s >= 0; s--)
        if (t.currentTarget = r[s], this.notifyTarget(t, e), t.propagationStopped || t.propagationImmediatelyStopped) return
    }
  }
  all(t, e, r = this._allInteractiveElements) {
    if (0 === r.length) return;
    t.eventPhase = t.BUBBLING_PHASE;
    const s = Array.isArray(e) ? e : [e];
    for (let i = r.length - 1; i >= 0; i--) s.forEach(e => {
      t.currentTarget = r[i], this.notifyTarget(t, e)
    })
  }
  propagationPath(t) {
    const e = [t];
    for (let r = 0; r < 2048 && t !== this.rootTarget && t.parent; r++) {
      if (!t.parent) throw new Error("Cannot find propagation path to disconnected target");
      e.push(t.parent), t = t.parent
    }
    return e.reverse(), e
  }
  hitTestMoveRecursive(t, e, r, s, i, n = !1) {
    let o = !1;
    if (this._interactivePrune(t)) return null;
    if ("dynamic" !== t.eventMode && "dynamic" !== e || (jo.pauseUpdate = !1), t.interactiveChildren && t.children) {
      const a = t.children;
      for (let h = a.length - 1; h >= 0; h--) {
        const l = a[h],
          u = this.hitTestMoveRecursive(l, this._isInteractive(e) ? e : l.eventMode, r, s, i, n || i(t, r));
        if (u) {
          if (u.length > 0 && !u[u.length - 1].parent) continue;
          const e = t.isInteractive();
          (u.length > 0 || e) && (e && this._allInteractiveElements.push(t), u.push(t)), 0 === this._hitElements.length && (this._hitElements = u), o = !0
        }
      }
    }
    const a = this._isInteractive(e),
      h = t.isInteractive();
    return h && h && this._allInteractiveElements.push(t), n || this._hitElements.length > 0 ? null : o ? this._hitElements : a && !i(t, r) && s(t, r) ? h ? [t] : [] : null
  }
  hitTestRecursive(t, e, r, s, i) {
    if (this._interactivePrune(t) || i(t, r)) return null;
    if ("dynamic" !== t.eventMode && "dynamic" !== e || (jo.pauseUpdate = !1), t.interactiveChildren && t.children) {
      const n = t.children,
        o = r;
      for (let r = n.length - 1; r >= 0; r--) {
        const a = n[r],
          h = this.hitTestRecursive(a, this._isInteractive(e) ? e : a.eventMode, o, s, i);
        if (h) {
          if (h.length > 0 && !h[h.length - 1].parent) continue;
          const e = t.isInteractive();
          return (h.length > 0 || e) && h.push(t), h
        }
      }
    }
    const n = this._isInteractive(e),
      o = t.isInteractive();
    return n && s(t, r) ? o ? [t] : [] : null
  }
  _isInteractive(t) {
    return "static" === t || "dynamic" === t
  }
  _interactivePrune(t) {
    return !(t && t.visible && t.renderable && t.measurable) || "none" === t.eventMode || "passive" === t.eventMode && !t.interactiveChildren
  }
  hitPruneFn(t, e) {
    if (t.hitArea && (t.worldTransform.applyInverse(e, Jo), !t.hitArea.contains(Jo.x, Jo.y))) return !0;
    if (t.effects && t.effects.length)
      for (let r = 0; r < t.effects.length; r++) {
        const s = t.effects[r];
        if (s.containsPoint && !s.containsPoint(e, this.hitTestFn)) return !0
      }
    return !1
  }
  hitTestFn(t, e) {
    return !!t.hitArea || !!(null == t ? void 0 : t.containsPoint) && (t.worldTransform.applyInverse(e, Jo), t.containsPoint(Jo))
  }
  notifyTarget(t, e) {
    var r, s;
    if (!t.currentTarget.isInteractive()) return;
    e ?? (e = t.type);
    const i = `on${e}`;
    null == (s = (r = t.currentTarget)[i]) || s.call(r, t);
    const n = t.eventPhase === t.CAPTURING_PHASE || t.eventPhase === t.AT_TARGET ? `${e}capture` : e;
    this._notifyListeners(t, n), t.eventPhase === t.AT_TARGET && this._notifyListeners(t, e)
  }
  mapPointerDown(t) {
    if (!(t instanceof Ko)) return void Bt("EventBoundary cannot map a non-pointer event as a pointer event");
    const e = this.createPointerEvent(t);
    if (this.dispatchEvent(e, "pointerdown"), "touch" === e.pointerType) this.dispatchEvent(e, "touchstart");
    else if ("mouse" === e.pointerType || "pen" === e.pointerType) {
      const t = 2 === e.button;
      this.dispatchEvent(e, t ? "rightdown" : "mousedown")
    }
    this.trackingData(t.pointerId).pressTargetsByButton[t.button] = e.composedPath(), this.freeEvent(e)
  }
  mapPointerMove(t) {
    var e, r;
    if (!(t instanceof Ko)) return void Bt("EventBoundary cannot map a non-pointer event as a pointer event");
    this._allInteractiveElements.length = 0, this._hitElements.length = 0, this._isPointerMoveEvent = !0;
    const s = this.createPointerEvent(t);
    this._isPointerMoveEvent = !1;
    const i = "mouse" === s.pointerType || "pen" === s.pointerType,
      n = this.trackingData(t.pointerId),
      o = this.findMountedTarget(n.overTargets);
    if ((null == (e = n.overTargets) ? void 0 : e.length) > 0 && o !== s.target) {
      const e = "mousemove" === t.type ? "mouseout" : "pointerout",
        r = this.createPointerEvent(t, e, o);
      if (this.dispatchEvent(r, "pointerout"), i && this.dispatchEvent(r, "mouseout"), !s.composedPath().includes(o)) {
        const e = this.createPointerEvent(t, "pointerleave", o);
        for (e.eventPhase = e.AT_TARGET; e.target && !s.composedPath().includes(e.target);) e.currentTarget = e.target, this.notifyTarget(e), i && this.notifyTarget(e, "mouseleave"), e.target = e.target.parent;
        this.freeEvent(e)
      }
      this.freeEvent(r)
    }
    if (o !== s.target) {
      const e = "mousemove" === t.type ? "mouseover" : "pointerover",
        r = this.clonePointerEvent(s, e);
      this.dispatchEvent(r, "pointerover"), i && this.dispatchEvent(r, "mouseover");
      let n = null == o ? void 0 : o.parent;
      for (; n && n !== this.rootTarget.parent && n !== s.target;) n = n.parent;
      if (!n || n === this.rootTarget.parent) {
        const t = this.clonePointerEvent(s, "pointerenter");
        for (t.eventPhase = t.AT_TARGET; t.target && t.target !== o && t.target !== this.rootTarget.parent;) t.currentTarget = t.target, this.notifyTarget(t), i && this.notifyTarget(t, "mouseenter"), t.target = t.target.parent;
        this.freeEvent(t)
      }
      this.freeEvent(r)
    }
    const a = [],
      h = this.enableGlobalMoveEvents ?? !0;
    this.moveOnAll ? a.push("pointermove") : this.dispatchEvent(s, "pointermove"), h && a.push("globalpointermove"), "touch" === s.pointerType && (this.moveOnAll ? a.splice(1, 0, "touchmove") : this.dispatchEvent(s, "touchmove"), h && a.push("globaltouchmove")), i && (this.moveOnAll ? a.splice(1, 0, "mousemove") : this.dispatchEvent(s, "mousemove"), h && a.push("globalmousemove"), this.cursor = null == (r = s.target) ? void 0 : r.cursor), a.length > 0 && this.all(s, a), this._allInteractiveElements.length = 0, this._hitElements.length = 0, n.overTargets = s.composedPath(), this.freeEvent(s)
  }
  mapPointerOver(t) {
    var e;
    if (!(t instanceof Ko)) return void Bt("EventBoundary cannot map a non-pointer event as a pointer event");
    const r = this.trackingData(t.pointerId),
      s = this.createPointerEvent(t),
      i = "mouse" === s.pointerType || "pen" === s.pointerType;
    this.dispatchEvent(s, "pointerover"), i && this.dispatchEvent(s, "mouseover"), "mouse" === s.pointerType && (this.cursor = null == (e = s.target) ? void 0 : e.cursor);
    const n = this.clonePointerEvent(s, "pointerenter");
    for (n.eventPhase = n.AT_TARGET; n.target && n.target !== this.rootTarget.parent;) n.currentTarget = n.target, this.notifyTarget(n), i && this.notifyTarget(n, "mouseenter"), n.target = n.target.parent;
    r.overTargets = s.composedPath(), this.freeEvent(s), this.freeEvent(n)
  }
  mapPointerOut(t) {
    if (!(t instanceof Ko)) return void Bt("EventBoundary cannot map a non-pointer event as a pointer event");
    const e = this.trackingData(t.pointerId);
    if (e.overTargets) {
      const r = "mouse" === t.pointerType || "pen" === t.pointerType,
        s = this.findMountedTarget(e.overTargets),
        i = this.createPointerEvent(t, "pointerout", s);
      this.dispatchEvent(i), r && this.dispatchEvent(i, "mouseout");
      const n = this.createPointerEvent(t, "pointerleave", s);
      for (n.eventPhase = n.AT_TARGET; n.target && n.target !== this.rootTarget.parent;) n.currentTarget = n.target, this.notifyTarget(n), r && this.notifyTarget(n, "mouseleave"), n.target = n.target.parent;
      e.overTargets = null, this.freeEvent(i), this.freeEvent(n)
    }
    this.cursor = null
  }
  mapPointerUp(t) {
    if (!(t instanceof Ko)) return void Bt("EventBoundary cannot map a non-pointer event as a pointer event");
    const e = performance.now(),
      r = this.createPointerEvent(t);
    if (this.dispatchEvent(r, "pointerup"), "touch" === r.pointerType) this.dispatchEvent(r, "touchend");
    else if ("mouse" === r.pointerType || "pen" === r.pointerType) {
      const t = 2 === r.button;
      this.dispatchEvent(r, t ? "rightup" : "mouseup")
    }
    const s = this.trackingData(t.pointerId),
      i = this.findMountedTarget(s.pressTargetsByButton[t.button]);
    let n = i;
    if (i && !r.composedPath().includes(i)) {
      let e = i;
      for (; e && !r.composedPath().includes(e);) {
        if (r.currentTarget = e, this.notifyTarget(r, "pointerupoutside"), "touch" === r.pointerType) this.notifyTarget(r, "touchendoutside");
        else if ("mouse" === r.pointerType || "pen" === r.pointerType) {
          const t = 2 === r.button;
          this.notifyTarget(r, t ? "rightupoutside" : "mouseupoutside")
        }
        e = e.parent
      }
      delete s.pressTargetsByButton[t.button], n = e
    }
    if (n) {
      const i = this.clonePointerEvent(r, "click");
      i.target = n, i.path = null, s.clicksByButton[t.button] || (s.clicksByButton[t.button] = {
        clickCount: 0,
        target: i.target,
        timeStamp: e
      });
      const o = s.clicksByButton[t.button];
      if (o.target === i.target && e - o.timeStamp < 200 ? ++o.clickCount : o.clickCount = 1, o.target = i.target, o.timeStamp = e, i.detail = o.clickCount, "mouse" === i.pointerType) {
        const t = 2 === i.button;
        this.dispatchEvent(i, t ? "rightclick" : "click")
      } else "touch" === i.pointerType && this.dispatchEvent(i, "tap");
      this.dispatchEvent(i, "pointertap"), this.freeEvent(i)
    }
    this.freeEvent(r)
  }
  mapPointerUpOutside(t) {
    if (!(t instanceof Ko)) return void Bt("EventBoundary cannot map a non-pointer event as a pointer event");
    const e = this.trackingData(t.pointerId),
      r = this.findMountedTarget(e.pressTargetsByButton[t.button]),
      s = this.createPointerEvent(t);
    if (r) {
      let i = r;
      for (; i;) s.currentTarget = i, this.notifyTarget(s, "pointerupoutside"), "touch" === s.pointerType ? this.notifyTarget(s, "touchendoutside") : "mouse" !== s.pointerType && "pen" !== s.pointerType || this.notifyTarget(s, 2 === s.button ? "rightupoutside" : "mouseupoutside"), i = i.parent;
      delete e.pressTargetsByButton[t.button]
    }
    this.freeEvent(s)
  }
  mapWheel(t) {
    if (!(t instanceof Zo)) return void Bt("EventBoundary cannot map a non-wheel event as a wheel event");
    const e = this.createWheelEvent(t);
    this.dispatchEvent(e), this.freeEvent(e)
  }
  findMountedTarget(t) {
    if (!t) return null;
    let e = t[0];
    for (let r = 1; r < t.length && t[r].parent === e; r++) e = t[r];
    return e
  }
  createPointerEvent(t, e, r) {
    const s = this.allocateEvent(Ko);
    return this.copyPointerData(t, s), this.copyMouseData(t, s), this.copyData(t, s), s.nativeEvent = t.nativeEvent, s.originalEvent = t, s.target = r ?? this.hitTest(s.global.x, s.global.y) ?? this._hitElements[0], "string" == typeof e && (s.type = e), s
  }
  createWheelEvent(t) {
    const e = this.allocateEvent(Zo);
    return this.copyWheelData(t, e), this.copyMouseData(t, e), this.copyData(t, e), e.nativeEvent = t.nativeEvent, e.originalEvent = t, e.target = this.hitTest(e.global.x, e.global.y), e
  }
  clonePointerEvent(t, e) {
    const r = this.allocateEvent(Ko);
    return r.nativeEvent = t.nativeEvent, r.originalEvent = t.originalEvent, this.copyPointerData(t, r), this.copyMouseData(t, r), this.copyData(t, r), r.target = t.target, r.path = t.composedPath().slice(), r.type = e ?? r.type, r
  }
  copyWheelData(t, e) {
    e.deltaMode = t.deltaMode, e.deltaX = t.deltaX, e.deltaY = t.deltaY, e.deltaZ = t.deltaZ
  }
  copyPointerData(t, e) {
    t instanceof Ko && e instanceof Ko && (e.pointerId = t.pointerId, e.width = t.width, e.height = t.height, e.isPrimary = t.isPrimary, e.pointerType = t.pointerType, e.pressure = t.pressure, e.tangentialPressure = t.tangentialPressure, e.tiltX = t.tiltX, e.tiltY = t.tiltY, e.twist = t.twist)
  }
  copyMouseData(t, e) {
    t instanceof qo && e instanceof qo && (e.altKey = t.altKey, e.button = t.button, e.buttons = t.buttons, e.client.copyFrom(t.client), e.ctrlKey = t.ctrlKey, e.metaKey = t.metaKey, e.movement.copyFrom(t.movement), e.screen.copyFrom(t.screen), e.shiftKey = t.shiftKey, e.global.copyFrom(t.global))
  }
  copyData(t, e) {
    e.isTrusted = t.isTrusted, e.srcElement = t.srcElement, e.timeStamp = performance.now(), e.type = t.type, e.detail = t.detail, e.view = t.view, e.which = t.which, e.layer.copyFrom(t.layer), e.page.copyFrom(t.page)
  }
  trackingData(t) {
    return this.mappingState.trackingData[t] || (this.mappingState.trackingData[t] = {
      pressTargetsByButton: {},
      clicksByButton: {},
      overTarget: null
    }), this.mappingState.trackingData[t]
  }
  allocateEvent(t) {
    this.eventPool.has(t) || this.eventPool.set(t, []);
    const e = this.eventPool.get(t).pop() || new t(this);
    return e.eventPhase = e.NONE, e.currentTarget = null, e.defaultPrevented = !1, e.path = null, e.target = null, e
  }
  freeEvent(t) {
    if (t.manager !== this) throw new Error("It is illegal to free an event not managed by this EventBoundary!");
    const e = t.constructor;
    this.eventPool.has(e) || this.eventPool.set(e, []), this.eventPool.get(e).push(t)
  }
  _notifyListeners(t, e) {
    const r = t.currentTarget._events[e];
    if (r)
      if ("fn" in r) r.once && t.currentTarget.removeListener(e, r.fn, void 0, !0), r.fn.call(r.context, t);
      else
        for (let s = 0, i = r.length; s < i && !t.propagationImmediatelyStopped; s++) r[s].once && t.currentTarget.removeListener(e, r[s].fn, void 0, !0), r[s].fn.call(r[s].context, t)
  }
}
const ea = {
    touchstart: "pointerdown",
    touchend: "pointerup",
    touchendoutside: "pointerupoutside",
    touchmove: "pointermove",
    touchcancel: "pointercancel"
  },
  ra = class t {
    constructor(e) {
      this.supportsTouchEvents = "ontouchstart" in globalThis, this.supportsPointerEvents = !!globalThis.PointerEvent, this.domElement = null, this.resolution = 1, this.renderer = e, this.rootBoundary = new ta(null), jo.init(this), this.autoPreventDefault = !0, this._eventsAdded = !1, this._rootPointerEvent = new Ko(null), this._rootWheelEvent = new Zo(null), this.cursorStyles = {
        default: "inherit",
        pointer: "pointer"
      }, this.features = new Proxy({
        ...t.defaultEventFeatures
      }, {
        set: (t, e, r) => ("globalMove" === e && (this.rootBoundary.enableGlobalMoveEvents = r), t[e] = r, !0)
      }), this._onPointerDown = this._onPointerDown.bind(this), this._onPointerMove = this._onPointerMove.bind(this), this._onPointerUp = this._onPointerUp.bind(this), this._onPointerOverOut = this._onPointerOverOut.bind(this), this.onWheel = this.onWheel.bind(this)
    }
    static get defaultEventMode() {
      return this._defaultEventMode
    }
    init(e) {
      const {
        canvas: r,
        resolution: s
      } = this.renderer;
      this.setTargetElement(r), this.resolution = s, t._defaultEventMode = e.eventMode ?? "passive", Object.assign(this.features, e.eventFeatures ?? {}), this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove
    }
    resolutionChange(t) {
      this.resolution = t
    }
    destroy() {
      this.setTargetElement(null), this.renderer = null, this._currentCursor = null
    }
    setCursor(t) {
      t || (t = "default");
      let e = !0;
      if (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas && (e = !1), this._currentCursor === t) return;
      this._currentCursor = t;
      const r = this.cursorStyles[t];
      if (r) switch (typeof r) {
        case "string":
          e && (this.domElement.style.cursor = r);
          break;
        case "function":
          r(t);
          break;
        case "object":
          e && Object.assign(this.domElement.style, r)
      } else e && "string" == typeof t && !Object.prototype.hasOwnProperty.call(this.cursorStyles, t) && (this.domElement.style.cursor = t)
    }
    get pointer() {
      return this._rootPointerEvent
    }
    _onPointerDown(t) {
      if (!this.features.click) return;
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
      const e = this._normalizeToPointerData(t);
      this.autoPreventDefault && e[0].isNormalized && (t.cancelable || !("cancelable" in t)) && t.preventDefault();
      for (let r = 0, s = e.length; r < s; r++) {
        const t = e[r],
          s = this._bootstrapEvent(this._rootPointerEvent, t);
        this.rootBoundary.mapEvent(s)
      }
      this.setCursor(this.rootBoundary.cursor)
    }
    _onPointerMove(t) {
      if (!this.features.move) return;
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, jo.pointerMoved();
      const e = this._normalizeToPointerData(t);
      for (let r = 0, s = e.length; r < s; r++) {
        const t = this._bootstrapEvent(this._rootPointerEvent, e[r]);
        this.rootBoundary.mapEvent(t)
      }
      this.setCursor(this.rootBoundary.cursor)
    }
    _onPointerUp(t) {
      if (!this.features.click) return;
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
      let e = t.target;
      t.composedPath && t.composedPath().length > 0 && (e = t.composedPath()[0]);
      const r = e !== this.domElement ? "outside" : "",
        s = this._normalizeToPointerData(t);
      for (let i = 0, n = s.length; i < n; i++) {
        const t = this._bootstrapEvent(this._rootPointerEvent, s[i]);
        t.type += r, this.rootBoundary.mapEvent(t)
      }
      this.setCursor(this.rootBoundary.cursor)
    }
    _onPointerOverOut(t) {
      if (!this.features.click) return;
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
      const e = this._normalizeToPointerData(t);
      for (let r = 0, s = e.length; r < s; r++) {
        const t = this._bootstrapEvent(this._rootPointerEvent, e[r]);
        this.rootBoundary.mapEvent(t)
      }
      this.setCursor(this.rootBoundary.cursor)
    }
    onWheel(t) {
      if (!this.features.wheel) return;
      const e = this.normalizeWheelEvent(t);
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.rootBoundary.mapEvent(e)
    }
    setTargetElement(t) {
      this._removeEvents(), this.domElement = t, jo.domElement = t, this._addEvents()
    }
    _addEvents() {
      if (this._eventsAdded || !this.domElement) return;
      jo.addTickerListener();
      const t = this.domElement.style;
      t && (globalThis.navigator.msPointerEnabled ? (t.msContentZooming = "none", t.msTouchAction = "none") : this.supportsPointerEvents && (t.touchAction = "none")), this.supportsPointerEvents ? (globalThis.document.addEventListener("pointermove", this._onPointerMove, !0), this.domElement.addEventListener("pointerdown", this._onPointerDown, !0), this.domElement.addEventListener("pointerleave", this._onPointerOverOut, !0), this.domElement.addEventListener("pointerover", this._onPointerOverOut, !0), globalThis.addEventListener("pointerup", this._onPointerUp, !0)) : (globalThis.document.addEventListener("mousemove", this._onPointerMove, !0), this.domElement.addEventListener("mousedown", this._onPointerDown, !0), this.domElement.addEventListener("mouseout", this._onPointerOverOut, !0), this.domElement.addEventListener("mouseover", this._onPointerOverOut, !0), globalThis.addEventListener("mouseup", this._onPointerUp, !0), this.supportsTouchEvents && (this.domElement.addEventListener("touchstart", this._onPointerDown, !0), this.domElement.addEventListener("touchend", this._onPointerUp, !0), this.domElement.addEventListener("touchmove", this._onPointerMove, !0))), this.domElement.addEventListener("wheel", this.onWheel, {
        passive: !0,
        capture: !0
      }), this._eventsAdded = !0
    }
    _removeEvents() {
      if (!this._eventsAdded || !this.domElement) return;
      jo.removeTickerListener();
      const t = this.domElement.style;
      t && (globalThis.navigator.msPointerEnabled ? (t.msContentZooming = "", t.msTouchAction = "") : this.supportsPointerEvents && (t.touchAction = "")), this.supportsPointerEvents ? (globalThis.document.removeEventListener("pointermove", this._onPointerMove, !0), this.domElement.removeEventListener("pointerdown", this._onPointerDown, !0), this.domElement.removeEventListener("pointerleave", this._onPointerOverOut, !0), this.domElement.removeEventListener("pointerover", this._onPointerOverOut, !0), globalThis.removeEventListener("pointerup", this._onPointerUp, !0)) : (globalThis.document.removeEventListener("mousemove", this._onPointerMove, !0), this.domElement.removeEventListener("mousedown", this._onPointerDown, !0), this.domElement.removeEventListener("mouseout", this._onPointerOverOut, !0), this.domElement.removeEventListener("mouseover", this._onPointerOverOut, !0), globalThis.removeEventListener("mouseup", this._onPointerUp, !0), this.supportsTouchEvents && (this.domElement.removeEventListener("touchstart", this._onPointerDown, !0), this.domElement.removeEventListener("touchend", this._onPointerUp, !0), this.domElement.removeEventListener("touchmove", this._onPointerMove, !0))), this.domElement.removeEventListener("wheel", this.onWheel, !0), this.domElement = null, this._eventsAdded = !1
    }
    mapPositionToPoint(t, e, r) {
      const s = this.domElement.isConnected ? this.domElement.getBoundingClientRect() : {
          width: this.domElement.width,
          height: this.domElement.height,
          left: 0,
          top: 0
        },
        i = 1 / this.resolution;
      t.x = (e - s.left) * (this.domElement.width / s.width) * i, t.y = (r - s.top) * (this.domElement.height / s.height) * i
    }
    _normalizeToPointerData(t) {
      const e = [];
      if (this.supportsTouchEvents && t instanceof TouchEvent)
        for (let r = 0, s = t.changedTouches.length; r < s; r++) {
          const s = t.changedTouches[r];
          void 0 === s.button && (s.button = 0), void 0 === s.buttons && (s.buttons = 1), void 0 === s.isPrimary && (s.isPrimary = 1 === t.touches.length && "touchstart" === t.type), void 0 === s.width && (s.width = s.radiusX || 1), void 0 === s.height && (s.height = s.radiusY || 1), void 0 === s.tiltX && (s.tiltX = 0), void 0 === s.tiltY && (s.tiltY = 0), void 0 === s.pointerType && (s.pointerType = "touch"), void 0 === s.pointerId && (s.pointerId = s.identifier || 0), void 0 === s.pressure && (s.pressure = s.force || .5), void 0 === s.twist && (s.twist = 0), void 0 === s.tangentialPressure && (s.tangentialPressure = 0), void 0 === s.layerX && (s.layerX = s.offsetX = s.clientX), void 0 === s.layerY && (s.layerY = s.offsetY = s.clientY), s.isNormalized = !0, s.type = t.type, e.push(s)
        } else if (!globalThis.MouseEvent || t instanceof MouseEvent && !(this.supportsPointerEvents && t instanceof globalThis.PointerEvent)) {
          const r = t;
          void 0 === r.isPrimary && (r.isPrimary = !0), void 0 === r.width && (r.width = 1), void 0 === r.height && (r.height = 1), void 0 === r.tiltX && (r.tiltX = 0), void 0 === r.tiltY && (r.tiltY = 0), void 0 === r.pointerType && (r.pointerType = "mouse"), void 0 === r.pointerId && (r.pointerId = 1), void 0 === r.pressure && (r.pressure = .5), void 0 === r.twist && (r.twist = 0), void 0 === r.tangentialPressure && (r.tangentialPressure = 0), r.isNormalized = !0, e.push(r)
        } else e.push(t);
      return e
    }
    normalizeWheelEvent(t) {
      const e = this._rootWheelEvent;
      return this._transferMouseData(e, t), e.deltaX = t.deltaX, e.deltaY = t.deltaY, e.deltaZ = t.deltaZ, e.deltaMode = t.deltaMode, this.mapPositionToPoint(e.screen, t.clientX, t.clientY), e.global.copyFrom(e.screen), e.offset.copyFrom(e.screen), e.nativeEvent = t, e.type = t.type, e
    }
    _bootstrapEvent(t, e) {
      return t.originalEvent = null, t.nativeEvent = e, t.pointerId = e.pointerId, t.width = e.width, t.height = e.height, t.isPrimary = e.isPrimary, t.pointerType = e.pointerType, t.pressure = e.pressure, t.tangentialPressure = e.tangentialPressure, t.tiltX = e.tiltX, t.tiltY = e.tiltY, t.twist = e.twist, this._transferMouseData(t, e), this.mapPositionToPoint(t.screen, e.clientX, e.clientY), t.global.copyFrom(t.screen), t.offset.copyFrom(t.screen), t.isTrusted = e.isTrusted, "pointerleave" === t.type && (t.type = "pointerout"), t.type.startsWith("mouse") && (t.type = t.type.replace("mouse", "pointer")), t.type.startsWith("touch") && (t.type = ea[t.type] || t.type), t
    }
    _transferMouseData(t, e) {
      t.isTrusted = e.isTrusted, t.srcElement = e.srcElement, t.timeStamp = performance.now(), t.type = e.type, t.altKey = e.altKey, t.button = e.button, t.buttons = e.buttons, t.client.x = e.clientX, t.client.y = e.clientY, t.ctrlKey = e.ctrlKey, t.metaKey = e.metaKey, t.movement.x = e.movementX, t.movement.y = e.movementY, t.page.x = e.pageX, t.page.y = e.pageY, t.relatedTarget = null, t.shiftKey = e.shiftKey
    }
  };
ra.extension = {
  name: "events",
  type: [a.WebGLSystem, a.CanvasSystem, a.WebGPUSystem],
  priority: -1
}, ra.defaultEventFeatures = {
  move: !0,
  globalMove: !0,
  click: !0,
  wheel: !0
};
let sa = ra;
const ia = {
  onclick: null,
  onmousedown: null,
  onmouseenter: null,
  onmouseleave: null,
  onmousemove: null,
  onglobalmousemove: null,
  onmouseout: null,
  onmouseover: null,
  onmouseup: null,
  onmouseupoutside: null,
  onpointercancel: null,
  onpointerdown: null,
  onpointerenter: null,
  onpointerleave: null,
  onpointermove: null,
  onglobalpointermove: null,
  onpointerout: null,
  onpointerover: null,
  onpointertap: null,
  onpointerup: null,
  onpointerupoutside: null,
  onrightclick: null,
  onrightdown: null,
  onrightup: null,
  onrightupoutside: null,
  ontap: null,
  ontouchcancel: null,
  ontouchend: null,
  ontouchendoutside: null,
  ontouchmove: null,
  onglobaltouchmove: null,
  ontouchstart: null,
  onwheel: null,
  get interactive() {
    return "dynamic" === this.eventMode || "static" === this.eventMode
  },
  set interactive(t) {
    this.eventMode = t ? "static" : "passive"
  },
  _internalEventMode: void 0,
  get eventMode() {
    return this._internalEventMode ?? sa.defaultEventMode
  },
  set eventMode(t) {
    this._internalEventMode = t
  },
  isInteractive() {
    return "static" === this.eventMode || "dynamic" === this.eventMode
  },
  interactiveChildren: !0,
  hitArea: null,
  addEventListener(t, e, r) {
    const s = "boolean" == typeof r && r || "object" == typeof r && r.capture,
      i = "object" == typeof r ? r.signal : void 0,
      n = "object" == typeof r && !0 === r.once,
      o = "function" == typeof e ? void 0 : e;
    t = s ? `${t}capture` : t;
    const a = "function" == typeof e ? e : e.handleEvent,
      h = this;
    i && i.addEventListener("abort", () => {
      h.off(t, a, o)
    }), n ? h.once(t, a, o) : h.on(t, a, o)
  },
  removeEventListener(t, e, r) {
    const s = "function" == typeof e ? void 0 : e;
    t = "boolean" == typeof r && r || "object" == typeof r && r.capture ? `${t}capture` : t, e = "function" == typeof e ? e : e.handleEvent, this.off(t, e, s)
  },
  dispatchEvent(t) {
    if (!(t instanceof rr)) throw new Error("Container cannot propagate events outside of the Federated Events API");
    return t.defaultPrevented = !1, t.path = null, t.target = this, t.manager.dispatchEvent(t), !t.defaultPrevented
  }
};
class na {
  constructor(t) {
    this._renderer = t
  }
  push(t, e, r) {
    this._renderer.renderPipes.batch.break(r), r.add({
      renderPipeId: "filter",
      canBundle: !1,
      action: "pushFilter",
      container: e,
      filterEffect: t
    })
  }
  pop(t, e, r) {
    this._renderer.renderPipes.batch.break(r), r.add({
      renderPipeId: "filter",
      action: "popFilter",
      canBundle: !1
    })
  }
  execute(t) {
    "pushFilter" === t.action ? this._renderer.filter.push(t) : "popFilter" === t.action && this._renderer.filter.pop()
  }
  destroy() {
    this._renderer = null
  }
}
na.extension = {
  type: [a.WebGLPipes, a.WebGPUPipes, a.CanvasPipes],
  name: "filter"
};
const oa = new Wi({
  attributes: {
    aPosition: {
      buffer: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
      format: "float32x2",
      stride: 8,
      offset: 0
    }
  },
  indexBuffer: new Uint32Array([0, 1, 2, 0, 2, 3])
});
class aa {
  constructor() {
    this.skip = !1, this.inputTexture = null, this.backTexture = null, this.filters = null, this.bounds = new tt, this.container = null, this.blendRequired = !1, this.outputRenderSurface = null, this.globalFrame = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }
  }
}
class ha {
  constructor(t) {
    this._filterStackIndex = 0, this._filterStack = [], this._filterGlobalUniforms = new jr({
      uInputSize: {
        value: new Float32Array(4),
        type: "vec4<f32>"
      },
      uInputPixel: {
        value: new Float32Array(4),
        type: "vec4<f32>"
      },
      uInputClamp: {
        value: new Float32Array(4),
        type: "vec4<f32>"
      },
      uOutputFrame: {
        value: new Float32Array(4),
        type: "vec4<f32>"
      },
      uGlobalFrame: {
        value: new Float32Array(4),
        type: "vec4<f32>"
      },
      uOutputTexture: {
        value: new Float32Array(4),
        type: "vec4<f32>"
      }
    }), this._globalFilterBindGroup = new qr({}), this.renderer = t
  }
  get activeBackTexture() {
    var t;
    return null == (t = this._activeFilterData) ? void 0 : t.backTexture
  }
  push(t) {
    const e = this.renderer,
      r = t.filterEffect.filters,
      s = this._pushFilterData();
    s.skip = !1, s.filters = r, s.container = t.container, s.outputRenderSurface = e.renderTarget.renderSurface;
    const i = e.renderTarget.renderTarget.colorTexture.source,
      n = i.resolution,
      o = i.antialias;
    if (0 === r.length) return void(s.skip = !0);
    const a = s.bounds;
    if (this._calculateFilterArea(t, a), this._calculateFilterBounds(s, e.renderTarget.rootViewPort, o, n, 1), s.skip) return;
    const h = this._getPreviousFilterData(),
      l = this._findFilterResolution(n);
    let u = 0,
      c = 0;
    h && (u = h.bounds.minX, c = h.bounds.minY), this._calculateGlobalFrame(s, u, c, l, i.width, i.height), this._setupFilterTextures(s, a, e, h)
  }
  generateFilteredTexture({
    texture: t,
    filters: e
  }) {
    const r = this._pushFilterData();
    this._activeFilterData = r, r.skip = !1, r.filters = e;
    const s = t.source,
      i = s.resolution,
      n = s.antialias;
    if (0 === e.length) return r.skip = !0, t;
    const o = r.bounds;
    if (o.addRect(t.frame), this._calculateFilterBounds(r, o.rectangle, n, i, 0), r.skip) return t;
    const a = i;
    this._calculateGlobalFrame(r, 0, 0, a, s.width, s.height), r.outputRenderSurface = ce.getOptimalTexture(o.width, o.height, r.resolution, r.antialias), r.backTexture = Z.EMPTY, r.inputTexture = t, this.renderer.renderTarget.finishRenderPass(), this._applyFiltersToTexture(r, !0);
    const h = r.outputRenderSurface;
    return h.source.alphaMode = "premultiplied-alpha", h
  }
  pop() {
    const t = this.renderer,
      e = this._popFilterData();
    e.skip || (t.globalUniforms.pop(), t.renderTarget.finishRenderPass(), this._activeFilterData = e, this._applyFiltersToTexture(e, !1), e.blendRequired && ce.returnTexture(e.backTexture), ce.returnTexture(e.inputTexture))
  }
  getBackTexture(t, e, r) {
    const s = t.colorTexture.source._resolution,
      i = ce.getOptimalTexture(e.width, e.height, s, !1);
    let n = e.minX,
      o = e.minY;
    r && (n -= r.minX, o -= r.minY), n = Math.floor(n * s), o = Math.floor(o * s);
    const a = Math.ceil(e.width * s),
      h = Math.ceil(e.height * s);
    return this.renderer.renderTarget.copyToTexture(t, i, {
      x: n,
      y: o
    }, {
      width: a,
      height: h
    }, {
      x: 0,
      y: 0
    }), i
  }
  applyFilter(t, e, r, s) {
    const i = this.renderer,
      n = this._activeFilterData,
      o = n.outputRenderSurface === r,
      a = i.renderTarget.rootRenderTarget.colorTexture.source._resolution,
      h = this._findFilterResolution(a);
    let l = 0,
      u = 0;
    if (o) {
      const t = this._findPreviousFilterOffset();
      l = t.x, u = t.y
    }
    this._updateFilterUniforms(e, r, n, l, u, h, o, s), this._setupBindGroupsAndRender(t, e, i)
  }
  calculateSpriteMatrix(t, e) {
    const r = this._activeFilterData,
      s = t.set(r.inputTexture._source.width, 0, 0, r.inputTexture._source.height, r.bounds.minX, r.bounds.minY),
      i = e.worldTransform.copyTo(v.shared),
      n = e.renderGroup || e.parentRenderGroup;
    return n && n.cacheToLocalTransform && i.prepend(n.cacheToLocalTransform), i.invert(), s.prepend(i), s.scale(1 / e.texture.frame.width, 1 / e.texture.frame.height), s.translate(e.anchor.x, e.anchor.y), s
  }
  destroy() {}
  _setupBindGroupsAndRender(t, e, r) {
    if (r.renderPipes.uniformBatch) {
      const t = r.renderPipes.uniformBatch.getUboResource(this._filterGlobalUniforms);
      this._globalFilterBindGroup.setResource(t, 0)
    } else this._globalFilterBindGroup.setResource(this._filterGlobalUniforms, 0);
    this._globalFilterBindGroup.setResource(e.source, 1), this._globalFilterBindGroup.setResource(e.source.style, 2), t.groups[0] = this._globalFilterBindGroup, r.encoder.draw({
      geometry: oa,
      shader: t,
      state: t._state,
      topology: "triangle-list"
    }), r.type === Kr.WEBGL && r.renderTarget.finishRenderPass()
  }
  _setupFilterTextures(t, e, r, s) {
    if (t.backTexture = Z.EMPTY, t.blendRequired) {
      r.renderTarget.finishRenderPass();
      const i = r.renderTarget.getRenderTarget(t.outputRenderSurface);
      t.backTexture = this.getBackTexture(i, e, null == s ? void 0 : s.bounds)
    }
    t.inputTexture = ce.getOptimalTexture(e.width, e.height, t.resolution, t.antialias), r.renderTarget.bind(t.inputTexture, !0), r.globalUniforms.push({
      offset: e
    })
  }
  _calculateGlobalFrame(t, e, r, s, i, n) {
    const o = t.globalFrame;
    o.x = e * s, o.y = r * s, o.width = i * s, o.height = n * s
  }
  _updateFilterUniforms(t, e, r, s, i, n, o, a) {
    const h = this._filterGlobalUniforms.uniforms,
      l = h.uOutputFrame,
      u = h.uInputSize,
      c = h.uInputPixel,
      d = h.uInputClamp,
      p = h.uGlobalFrame,
      f = h.uOutputTexture;
    o ? (l[0] = r.bounds.minX - s, l[1] = r.bounds.minY - i) : (l[0] = 0, l[1] = 0), l[2] = t.frame.width, l[3] = t.frame.height, u[0] = t.source.width, u[1] = t.source.height, u[2] = 1 / u[0], u[3] = 1 / u[1], c[0] = t.source.pixelWidth, c[1] = t.source.pixelHeight, c[2] = 1 / c[0], c[3] = 1 / c[1], d[0] = .5 * c[2], d[1] = .5 * c[3], d[2] = t.frame.width * u[2] - .5 * c[2], d[3] = t.frame.height * u[3] - .5 * c[3];
    const m = this.renderer.renderTarget.rootRenderTarget.colorTexture;
    p[0] = s * n, p[1] = i * n, p[2] = m.source.width * n, p[3] = m.source.height * n, e instanceof Z && (e.source.resource = null);
    const g = this.renderer.renderTarget.getRenderTarget(e);
    this.renderer.renderTarget.bind(e, !!a), e instanceof Z ? (f[0] = e.frame.width, f[1] = e.frame.height) : (f[0] = g.width, f[1] = g.height), f[2] = g.isRoot ? -1 : 1, this._filterGlobalUniforms.update()
  }
  _findFilterResolution(t) {
    let e = this._filterStackIndex - 1;
    for (; e > 0 && this._filterStack[e].skip;) --e;
    return e > 0 && this._filterStack[e].inputTexture ? this._filterStack[e].inputTexture.source._resolution : t
  }
  _findPreviousFilterOffset() {
    let t = 0,
      e = 0,
      r = this._filterStackIndex;
    for (; r > 0;) {
      r--;
      const s = this._filterStack[r];
      if (!s.skip) {
        t = s.bounds.minX, e = s.bounds.minY;
        break
      }
    }
    return {
      x: t,
      y: e
    }
  }
  _calculateFilterArea(t, e) {
    if (t.renderables ? function(t, e) {
        e.clear();
        const r = e.matrix;
        for (let s = 0; s < t.length; s++) {
          const r = t[s];
          r.globalDisplayStatus < 7 || (e.matrix = r.worldTransform, e.addBounds(r.bounds))
        }
        e.matrix = r
      }(t.renderables, e) : t.filterEffect.filterArea ? (e.clear(), e.addRect(t.filterEffect.filterArea), e.applyMatrix(t.container.worldTransform)) : t.container.getFastGlobalBounds(!0, e), t.container) {
      const r = (t.container.renderGroup || t.container.parentRenderGroup).cacheToLocalTransform;
      r && e.applyMatrix(r)
    }
  }
  _applyFiltersToTexture(t, e) {
    const r = t.inputTexture,
      s = t.bounds,
      i = t.filters;
    if (this._globalFilterBindGroup.setResource(r.source.style, 2), this._globalFilterBindGroup.setResource(t.backTexture.source, 3), 1 === i.length) i[0].apply(this, r, t.outputRenderSurface, e);
    else {
      let r = t.inputTexture;
      const n = ce.getOptimalTexture(s.width, s.height, r.source._resolution, !1);
      let o = n,
        a = 0;
      for (a = 0; a < i.length - 1; ++a) {
        i[a].apply(this, r, o, !0);
        const t = r;
        r = o, o = t
      }
      i[a].apply(this, r, t.outputRenderSurface, e), ce.returnTexture(n)
    }
  }
  _calculateFilterBounds(t, e, r, s, i) {
    var n;
    const o = this.renderer,
      a = t.bounds,
      h = t.filters;
    let l = 1 / 0,
      u = 0,
      c = !0,
      d = !1,
      p = !1,
      f = !0;
    for (let m = 0; m < h.length; m++) {
      const t = h[m];
      if (l = Math.min(l, "inherit" === t.resolution ? s : t.resolution), u += t.padding, "off" === t.antialias ? c = !1 : "inherit" === t.antialias && c && (c = r), t.clipToViewport || (f = !1), !(t.compatibleRenderers & o.type)) {
        p = !1;
        break
      }
      if (t.blendRequired && !((null == (n = o.backBuffer) ? void 0 : n.useBackBuffer) ?? 1)) {
        Bt("Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options."), p = !1;
        break
      }
      p = t.enabled || p, d || (d = t.blendRequired)
    }
    p ? (f && a.fitBounds(0, e.width / s, 0, e.height / s), a.scale(l).ceil().scale(1 / l).pad((0 | u) * i), a.isPositive ? (t.antialias = c, t.resolution = l, t.blendRequired = d) : t.skip = !0) : t.skip = !0
  }
  _popFilterData() {
    return this._filterStackIndex--, this._filterStack[this._filterStackIndex]
  }
  _getPreviousFilterData() {
    let t, e = this._filterStackIndex - 1;
    for (; e > 1 && (e--, t = this._filterStack[e], t.skip););
    return t
  }
  _pushFilterData() {
    let t = this._filterStack[this._filterStackIndex];
    return t || (t = this._filterStack[this._filterStackIndex] = new aa), this._filterStackIndex++, t
  }
}
ha.extension = {
  type: [a.WebGLSystem, a.WebGPUSystem],
  name: "filter"
};
var la = "struct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct MaskUniforms {\n  uFilterMatrix:mat3x3<f32>,\n  uMaskClamp:vec4<f32>,\n  uAlpha:f32,\n  uInverse:f32,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;\n@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n    @location(1) filterUv : vec2<f32>,\n};\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);\n}\n\nfn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;\n}\n\nfn getSize() -> vec2<f32>\n{\n  return gfu.uGlobalFrame.zw;\n}\n\n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>,\n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition),\n   getFilterCoord(aPosition)\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @location(1) filterUv: vec2<f32>,\n  @builtin(position) position: vec4<f32>\n) -> @location(0) vec4<f32> {\n\n    var maskClamp = filterUniforms.uMaskClamp;\n    var uAlpha = filterUniforms.uAlpha;\n\n    var clip = step(3.5,\n      step(maskClamp.x, filterUv.x) +\n      step(maskClamp.y, filterUv.y) +\n      step(filterUv.x, maskClamp.z) +\n      step(filterUv.y, maskClamp.w));\n\n    var mask = textureSample(uMaskTexture, uSampler, filterUv);\n    var source = textureSample(uTexture, uSampler, uv);\n    var alphaMul = 1.0 - uAlpha * (1.0 - mask.a);\n\n    var a: f32 = alphaMul * mask.r * uAlpha * clip;\n\n    if (filterUniforms.uInverse == 1.0) {\n        a = 1.0 - a;\n    }\n\n    return source * a;\n}\n";
class ua extends rs {
  constructor(t) {
    const {
      sprite: e,
      ...r
    } = t, s = new K(e.texture), i = new jr({
      uFilterMatrix: {
        value: new v,
        type: "mat3x3<f32>"
      },
      uMaskClamp: {
        value: s.uClampFrame,
        type: "vec4<f32>"
      },
      uAlpha: {
        value: 1,
        type: "f32"
      },
      uInverse: {
        value: t.inverse ? 1 : 0,
        type: "f32"
      }
    });
    super({
      ...r,
      gpuProgram: Wr.from({
        vertex: {
          source: la,
          entryPoint: "mainVertex"
        },
        fragment: {
          source: la,
          entryPoint: "mainFragment"
        }
      }),
      glProgram: Ur.from({
        vertex: "in vec2 aPosition;\n\nout vec2 vTextureCoord;\nout vec2 vMaskCoord;\n\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\nuniform mat3 uFilterMatrix;\n\nvec4 filterVertexPosition(  vec2 aPosition )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n       \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord(  vec2 aPosition )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvec2 getFilterCoord( vec2 aPosition )\n{\n    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;\n}   \n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition(aPosition);\n    vTextureCoord = filterTextureCoord(aPosition);\n    vMaskCoord = getFilterCoord(aPosition);\n}\n",
        fragment: "in vec2 vMaskCoord;\nin vec2 vTextureCoord;\n\nuniform sampler2D uTexture;\nuniform sampler2D uMaskTexture;\n\nuniform float uAlpha;\nuniform vec4 uMaskClamp;\nuniform float uInverse;\n\nout vec4 finalColor;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(uMaskClamp.x, vMaskCoord.x) +\n        step(uMaskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, uMaskClamp.z) +\n        step(vMaskCoord.y, uMaskClamp.w));\n\n    // TODO look into why this is needed\n    float npmAlpha = uAlpha;\n    vec4 original = texture(uTexture, vTextureCoord);\n    vec4 masky = texture(uMaskTexture, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    float a = alphaMul * masky.r * npmAlpha * clip;\n\n    if (uInverse == 1.0) {\n        a = 1.0 - a;\n    }\n\n    finalColor = original * a;\n}\n",
        name: "mask-filter"
      }),
      resources: {
        filterUniforms: i,
        uMaskTexture: e.texture.source
      }
    }), this.sprite = e, this._textureMatrix = s
  }
  set inverse(t) {
    this.resources.filterUniforms.uniforms.uInverse = t ? 1 : 0
  }
  get inverse() {
    return 1 === this.resources.filterUniforms.uniforms.uInverse
  }
  apply(t, e, r, s) {
    this._textureMatrix.texture = this.sprite.texture, t.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix, this.sprite).prepend(this._textureMatrix.mapCoord), this.resources.uMaskTexture = this.sprite.texture.source, t.applyFilter(this, e, r, s)
  }
}
class ca extends xe {
  constructor(t) {
    t instanceof ko && (t = {
      context: t
    });
    const {
      context: e,
      roundPixels: r,
      ...s
    } = t || {};
    super({
      label: "Graphics",
      ...s
    }), this.renderPipeId = "graphics", this._context = e || (this._ownedContext = new ko), this._context.on("update", this.onViewUpdate, this), this.didViewUpdate = !0, this.allowChildren = !1, this.roundPixels = r ?? !1
  }
  set context(t) {
    t !== this._context && (this._context.off("update", this.onViewUpdate, this), this._context = t, this._context.on("update", this.onViewUpdate, this), this.onViewUpdate())
  }
  get context() {
    return this._context
  }
  get bounds() {
    return this._context.bounds
  }
  updateBounds() {}
  containsPoint(t) {
    return this._context.containsPoint(t)
  }
  destroy(t) {
    this._ownedContext && !t ? this._ownedContext.destroy(t) : !0 !== t && !0 !== (null == t ? void 0 : t.context) || this._context.destroy(t), this._ownedContext = null, this._context = null, super.destroy(t)
  }
  _callContextMethod(t, e) {
    return this.context[t](...e), this
  }
  setFillStyle(...t) {
    return this._callContextMethod("setFillStyle", t)
  }
  setStrokeStyle(...t) {
    return this._callContextMethod("setStrokeStyle", t)
  }
  fill(...t) {
    return this._callContextMethod("fill", t)
  }
  stroke(...t) {
    return this._callContextMethod("stroke", t)
  }
  texture(...t) {
    return this._callContextMethod("texture", t)
  }
  beginPath() {
    return this._callContextMethod("beginPath", [])
  }
  cut() {
    return this._callContextMethod("cut", [])
  }
  arc(...t) {
    return this._callContextMethod("arc", t)
  }
  arcTo(...t) {
    return this._callContextMethod("arcTo", t)
  }
  arcToSvg(...t) {
    return this._callContextMethod("arcToSvg", t)
  }
  bezierCurveTo(...t) {
    return this._callContextMethod("bezierCurveTo", t)
  }
  closePath() {
    return this._callContextMethod("closePath", [])
  }
  ellipse(...t) {
    return this._callContextMethod("ellipse", t)
  }
  circle(...t) {
    return this._callContextMethod("circle", t)
  }
  path(...t) {
    return this._callContextMethod("path", t)
  }
  lineTo(...t) {
    return this._callContextMethod("lineTo", t)
  }
  moveTo(...t) {
    return this._callContextMethod("moveTo", t)
  }
  quadraticCurveTo(...t) {
    return this._callContextMethod("quadraticCurveTo", t)
  }
  rect(...t) {
    return this._callContextMethod("rect", t)
  }
  roundRect(...t) {
    return this._callContextMethod("roundRect", t)
  }
  poly(...t) {
    return this._callContextMethod("poly", t)
  }
  regularPoly(...t) {
    return this._callContextMethod("regularPoly", t)
  }
  roundPoly(...t) {
    return this._callContextMethod("roundPoly", t)
  }
  roundShape(...t) {
    return this._callContextMethod("roundShape", t)
  }
  filletRect(...t) {
    return this._callContextMethod("filletRect", t)
  }
  chamferRect(...t) {
    return this._callContextMethod("chamferRect", t)
  }
  star(...t) {
    return this._callContextMethod("star", t)
  }
  svg(...t) {
    return this._callContextMethod("svg", t)
  }
  restore(...t) {
    return this._callContextMethod("restore", t)
  }
  save() {
    return this._callContextMethod("save", [])
  }
  getTransform() {
    return this.context.getTransform()
  }
  resetTransform() {
    return this._callContextMethod("resetTransform", [])
  }
  rotateTransform(...t) {
    return this._callContextMethod("rotate", t)
  }
  scaleTransform(...t) {
    return this._callContextMethod("scale", t)
  }
  setTransform(...t) {
    return this._callContextMethod("setTransform", t)
  }
  transform(...t) {
    return this._callContextMethod("transform", t)
  }
  translateTransform(...t) {
    return this._callContextMethod("translate", t)
  }
  clear() {
    return this._callContextMethod("clear", [])
  }
  get fillStyle() {
    return this._context.fillStyle
  }
  set fillStyle(t) {
    this._context.fillStyle = t
  }
  get strokeStyle() {
    return this._context.strokeStyle
  }
  set strokeStyle(t) {
    this._context.strokeStyle = t
  }
  clone(t = !1) {
    return t ? new ca(this._context.clone()) : (this._ownedContext = null, new ca(this._context))
  }
  lineStyle(t, e, r) {
    D(O, "Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");
    const s = {};
    return t && (s.width = t), e && (s.color = e), r && (s.alpha = r), this.context.strokeStyle = s, this
  }
  beginFill(t, e) {
    D(O, "Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");
    const r = {};
    return void 0 !== t && (r.color = t), void 0 !== e && (r.alpha = e), this.context.fillStyle = r, this
  }
  endFill() {
    D(O, "Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."), this.context.fill();
    const t = this.context.strokeStyle;
    return t.width === ko.defaultStrokeStyle.width && t.color === ko.defaultStrokeStyle.color && t.alpha === ko.defaultStrokeStyle.alpha || this.context.stroke(), this
  }
  drawCircle(...t) {
    return D(O, "Graphics#drawCircle has been renamed to Graphics#circle"), this._callContextMethod("circle", t)
  }
  drawEllipse(...t) {
    return D(O, "Graphics#drawEllipse has been renamed to Graphics#ellipse"), this._callContextMethod("ellipse", t)
  }
  drawPolygon(...t) {
    return D(O, "Graphics#drawPolygon has been renamed to Graphics#poly"), this._callContextMethod("poly", t)
  }
  drawRect(...t) {
    return D(O, "Graphics#drawRect has been renamed to Graphics#rect"), this._callContextMethod("rect", t)
  }
  drawRoundedRect(...t) {
    return D(O, "Graphics#drawRoundedRect has been renamed to Graphics#roundRect"), this._callContextMethod("roundRect", t)
  }
  drawStar(...t) {
    return D(O, "Graphics#drawStar has been renamed to Graphics#star"), this._callContextMethod("star", t)
  }
}
const da = class t extends Wi {
  constructor(...e) {
    let r = e[0] ?? {};
    r instanceof Float32Array && (D(O, "use new MeshGeometry({ positions, uvs, indices }) instead"), r = {
      positions: r,
      uvs: e[1],
      indices: e[2]
    }), r = {
      ...t.defaultOptions,
      ...r
    };
    const s = r.positions || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
    let i = r.uvs;
    i || (i = r.positions ? new Float32Array(s.length) : new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]));
    const n = r.indices || new Uint32Array([0, 1, 2, 0, 2, 3]),
      o = r.shrinkBuffersToFit;
    super({
      attributes: {
        aPosition: {
          buffer: new zi({
            data: s,
            label: "attribute-mesh-positions",
            shrinkToFit: o,
            usage: Ni.VERTEX | Ni.COPY_DST
          }),
          format: "float32x2",
          stride: 8,
          offset: 0
        },
        aUV: {
          buffer: new zi({
            data: i,
            label: "attribute-mesh-uvs",
            shrinkToFit: o,
            usage: Ni.VERTEX | Ni.COPY_DST
          }),
          format: "float32x2",
          stride: 8,
          offset: 0
        }
      },
      indexBuffer: new zi({
        data: n,
        label: "index-mesh-buffer",
        shrinkToFit: o,
        usage: Ni.INDEX | Ni.COPY_DST
      }),
      topology: r.topology
    }), this.batchMode = "auto"
  }
  get positions() {
    return this.attributes.aPosition.buffer.data
  }
  set positions(t) {
    this.attributes.aPosition.buffer.data = t
  }
  get uvs() {
    return this.attributes.aUV.buffer.data
  }
  set uvs(t) {
    this.attributes.aUV.buffer.data = t
  }
  get indices() {
    return this.indexBuffer.data
  }
  set indices(t) {
    this.indexBuffer.data = t
  }
};
da.defaultOptions = {
  topology: "triangle-list",
  shrinkBuffersToFit: !1
};
let pa = da;
class fa extends xe {
  constructor(t, e) {
    const {
      text: r,
      resolution: s,
      style: i,
      anchor: n,
      width: o,
      height: a,
      roundPixels: h,
      ...l
    } = t;
    super({
      ...l
    }), this.batched = !0, this._resolution = null, this._autoResolution = !0, this._didTextUpdate = !0, this._styleClass = e, this.text = r ?? "", this.style = i, this.resolution = s ?? null, this.allowChildren = !1, this._anchor = new p({
      _onUpdate: () => {
        this.onViewUpdate()
      }
    }), n && (this.anchor = n), this.roundPixels = h ?? !1, void 0 !== o && (this.width = o), void 0 !== a && (this.height = a)
  }
  get anchor() {
    return this._anchor
  }
  set anchor(t) {
    "number" == typeof t ? this._anchor.set(t) : this._anchor.copyFrom(t)
  }
  set text(t) {
    t = t.toString(), this._text !== t && (this._text = t, this.onViewUpdate())
  }
  get text() {
    return this._text
  }
  set resolution(t) {
    this._autoResolution = null === t, this._resolution = t, this.onViewUpdate()
  }
  get resolution() {
    return this._resolution
  }
  get style() {
    return this._style
  }
  set style(t) {
    var e;
    t || (t = {}), null == (e = this._style) || e.off("update", this.onViewUpdate, this), t instanceof this._styleClass ? this._style = t : this._style = new this._styleClass(t), this._style.on("update", this.onViewUpdate, this), this.onViewUpdate()
  }
  get width() {
    return Math.abs(this.scale.x) * this.bounds.width
  }
  set width(t) {
    this._setWidth(t, this.bounds.width)
  }
  get height() {
    return Math.abs(this.scale.y) * this.bounds.height
  }
  set height(t) {
    this._setHeight(t, this.bounds.height)
  }
  getSize(t) {
    return t || (t = {}), t.width = Math.abs(this.scale.x) * this.bounds.width, t.height = Math.abs(this.scale.y) * this.bounds.height, t
  }
  setSize(t, e) {
    "object" == typeof t ? (e = t.height ?? t.width, t = t.width) : e ?? (e = t), void 0 !== t && this._setWidth(t, this.bounds.width), void 0 !== e && this._setHeight(e, this.bounds.height)
  }
  containsPoint(t) {
    const e = this.bounds.width,
      r = this.bounds.height,
      s = -e * this.anchor.x;
    let i = 0;
    return t.x >= s && t.x <= s + e && (i = -r * this.anchor.y, t.y >= i && t.y <= i + r)
  }
  onViewUpdate() {
    this.didViewUpdate || (this._didTextUpdate = !0), super.onViewUpdate()
  }
  destroy(t = !1) {
    super.destroy(t), this.owner = null, this._bounds = null, this._anchor = null, ("boolean" == typeof t ? t : null == t ? void 0 : t.style) && this._style.destroy(t), this._style = null, this._text = null
  }
}
let ma = null,
  ga = null;

function _a(t, e, r) {
  for (let s = 0, i = 4 * r * e; s < e; ++s, i += 4)
    if (0 !== t[i + 3]) return !1;
  return !0
}

function xa(t, e, r, s, i) {
  const n = 4 * e;
  for (let o = s, a = s * n + 4 * r; o <= i; ++o, a += n)
    if (0 !== t[a + 3]) return !1;
  return !0
}

function ya(...t) {
  let e = t[0];
  e.canvas || (e = {
    canvas: t[0],
    resolution: t[1]
  });
  const {
    canvas: r
  } = e, s = Math.min(e.resolution ?? 1, 1), i = e.width ?? r.width, n = e.height ?? r.height;
  let o = e.output;
  if (function(t, e) {
      ma || (ma = Me.get().createCanvas(256, 128), ga = ma.getContext("2d", {
        willReadFrequently: !0
      }), ga.globalCompositeOperation = "copy", ga.globalAlpha = 1), (ma.width < t || ma.height < e) && (ma.width = N(t), ma.height = N(e))
    }(i, n), !ga) throw new TypeError("Failed to get canvas 2D context");
  ga.drawImage(r, 0, 0, i, n, 0, 0, i * s, n * s);
  const a = ga.getImageData(0, 0, i, n).data;
  let h = 0,
    l = 0,
    u = i - 1,
    c = n - 1;
  for (; l < n && _a(a, i, l);) ++l;
  if (l === n) return G.EMPTY;
  for (; _a(a, i, c);) --c;
  for (; xa(a, i, h, l, c);) ++h;
  for (; xa(a, i, u, l, c);) --u;
  return ++u, ++c, ga.globalCompositeOperation = "source-over", ga.strokeRect(h, l, u - h, c - l), ga.globalCompositeOperation = "copy", o ?? (o = new G), o.set(h / s, l / s, (u - h) / s, (c - l) / s), o
}
const ba = new G,
  va = new class {
    getCanvasAndContext(t) {
      const {
        text: e,
        style: r,
        resolution: s = 1
      } = t, i = r._getFinalPadding(), n = ei.measureText(e || " ", r), o = Math.ceil(Math.ceil(Math.max(1, n.width) + 2 * i) * s), a = Math.ceil(Math.ceil(Math.max(1, n.height) + 2 * i) * s), h = Oo.getOptimalCanvasAndContext(o, a);
      return this._renderTextToCanvas(e, r, i, s, h), {
        canvasAndContext: h,
        frame: r.trim ? ya({
          canvas: h.canvas,
          width: o,
          height: a,
          resolution: 1,
          output: ba
        }) : ba.set(0, 0, o, a)
      }
    }
    returnCanvasAndContext(t) {
      Oo.returnCanvasAndContext(t)
    }
    _renderTextToCanvas(t, e, r, s, i) {
      var n, o, a, h;
      const {
        canvas: l,
        context: u
      } = i, c = Qs(e), d = ei.measureText(t || " ", e), p = d.lines, f = d.lineHeight, m = d.lineWidths, g = d.maxLineWidth, _ = d.fontProperties, x = l.height;
      if (u.resetTransform(), u.scale(s, s), u.textBaseline = e.textBaseline, null == (n = e._stroke) ? void 0 : n.width) {
        const t = e._stroke;
        u.lineWidth = t.width, u.miterLimit = t.miterLimit, u.lineJoin = t.join, u.lineCap = t.cap
      }
      let y, b;
      u.font = c;
      const v = e.dropShadow ? 2 : 1;
      for (let T = 0; T < v; ++T) {
        const t = e.dropShadow && 0 === T,
          n = t ? Math.ceil(Math.max(1, x) + 2 * r) : 0,
          l = n * s;
        if (t) {
          u.fillStyle = "black", u.strokeStyle = "black";
          const t = e.dropShadow,
            r = t.color,
            i = t.alpha;
          u.shadowColor = At.shared.setValue(r).setAlpha(i).toRgbaString();
          const n = t.blur * s,
            o = t.distance * s;
          u.shadowBlur = n, u.shadowOffsetX = Math.cos(t.angle) * o, u.shadowOffsetY = Math.sin(t.angle) * o + l
        } else {
          if (u.fillStyle = e._fill ? Lo(e._fill, u, d) : null, null == (o = e._stroke) ? void 0 : o.width) {
            const t = e._stroke.width * e._stroke.alignment;
            u.strokeStyle = Lo(e._stroke, u, d, t)
          }
          u.shadowColor = "black"
        }
        let c = (f - _.fontSize) / 2;
        f - _.fontSize < 0 && (c = 0);
        const v = (null == (a = e._stroke) ? void 0 : a.width) ?? 0;
        for (let s = 0; s < p.length; s++) y = v / 2, b = v / 2 + s * f + _.ascent + c, "right" === e.align ? y += g - m[s] : "center" === e.align && (y += (g - m[s]) / 2), (null == (h = e._stroke) ? void 0 : h.width) && this._drawLetterSpacing(p[s], e, i, y + r, b + r - n, !0), void 0 !== e._fill && this._drawLetterSpacing(p[s], e, i, y + r, b + r - n)
      }
    }
    _drawLetterSpacing(t, e, r, s, i, n = !1) {
      const {
        context: o
      } = r, a = e.letterSpacing;
      let h = !1;
      if (ei.experimentalLetterSpacingSupported && (ei.experimentalLetterSpacing ? (o.letterSpacing = `${a}px`, o.textLetterSpacing = `${a}px`, h = !0) : (o.letterSpacing = "0px", o.textLetterSpacing = "0px")), 0 === a || h) return void(n ? o.strokeText(t, s, i) : o.fillText(t, s, i));
      let l = s;
      const u = ei.graphemeSegmenter(t);
      let c = o.measureText(t).width,
        d = 0;
      for (let p = 0; p < u.length; ++p) {
        const t = u[p];
        n ? o.strokeText(t, l, i) : o.fillText(t, l, i);
        let e = "";
        for (let r = p + 1; r < u.length; ++r) e += u[r];
        d = o.measureText(e).width, l += c - d + a, c = d
      }
    }
  };
class Ta extends fa {
  constructor(...t) {
    const e = function(t) {
      let e = t[0] ?? {};
      return ("string" == typeof e || t[1]) && (D(O, 'use new Text({ text: "hi!", style }) instead'), e = {
        text: e,
        style: t[1]
      }), e
    }(t);
    super(e, Uo), this.renderPipeId = "text", e.textureStyle && (this.textureStyle = e.textureStyle instanceof X ? e.textureStyle : new X(e.textureStyle))
  }
  updateBounds() {
    const t = this._bounds,
      e = this._anchor;
    let r = 0,
      s = 0;
    if (this._style.trim) {
      const {
        frame: t,
        canvasAndContext: e
      } = va.getCanvasAndContext({
        text: this.text,
        style: this._style,
        resolution: 1
      });
      va.returnCanvasAndContext(e), r = t.width, s = t.height
    } else {
      const t = ei.measureText(this._text, this._style);
      r = t.width, s = t.height
    }
    t.minX = -e._x * r, t.maxX = t.minX + r, t.minY = -e._y * s, t.maxY = t.minY + s
  }
}

function Sa(t) {
  const e = At.shared.setValue(t.color).setAlpha(t.alpha).toHexa(),
    r = `${Math.round(Math.cos(t.angle)*t.distance)}px ${Math.round(Math.sin(t.angle)*t.distance)}px`;
  return t.blur > 0 ? `text-shadow: ${r} ${t.blur}px ${e}` : `text-shadow: ${r} ${e}`
}

function wa(t) {
  return [`-webkit-text-stroke-width: ${t.width}px`, `-webkit-text-stroke-color: ${At.shared.setValue(t.color).toHex()}`, `text-stroke-width: ${t.width}px`, `text-stroke-color: ${At.shared.setValue(t.color).toHex()}`, "paint-order: stroke"].join(";")
}
const Ea = {
    fontSize: "font-size: {{VALUE}}px",
    fontFamily: "font-family: {{VALUE}}",
    fontWeight: "font-weight: {{VALUE}}",
    fontStyle: "font-style: {{VALUE}}",
    fontVariant: "font-variant: {{VALUE}}",
    letterSpacing: "letter-spacing: {{VALUE}}px",
    align: "text-align: {{VALUE}}",
    padding: "padding: {{VALUE}}px",
    whiteSpace: "white-space: {{VALUE}}",
    lineHeight: "line-height: {{VALUE}}px",
    wordWrapWidth: "max-width: {{VALUE}}px"
  },
  Ca = {
    fill: t => `color: ${At.shared.setValue(t).toHex()}`,
    breakWords: t => "word-wrap: " + (t ? "break-all" : "break-word"),
    stroke: wa,
    dropShadow: Sa
  };
class Pa extends Uo {
  constructor(t = {}) {
    super(t), this._cssOverrides = [], this.cssOverrides = t.cssOverrides ?? [], this.tagStyles = t.tagStyles ?? {}
  }
  set cssOverrides(t) {
    this._cssOverrides = t instanceof Array ? t : [t], this.update()
  }
  get cssOverrides() {
    return this._cssOverrides
  }
  update() {
    this._cssStyle = null, super.update()
  }
  clone() {
    return new Pa({
      align: this.align,
      breakWords: this.breakWords,
      dropShadow: this.dropShadow ? {
        ...this.dropShadow
      } : null,
      fill: this._fill,
      fontFamily: this.fontFamily,
      fontSize: this.fontSize,
      fontStyle: this.fontStyle,
      fontVariant: this.fontVariant,
      fontWeight: this.fontWeight,
      letterSpacing: this.letterSpacing,
      lineHeight: this.lineHeight,
      padding: this.padding,
      stroke: this._stroke,
      whiteSpace: this.whiteSpace,
      wordWrap: this.wordWrap,
      wordWrapWidth: this.wordWrapWidth,
      cssOverrides: this.cssOverrides,
      tagStyles: {
        ...this.tagStyles
      }
    })
  }
  get cssStyle() {
    return this._cssStyle || (this._cssStyle = function(t) {
      const e = t._stroke,
        r = t._fill,
        s = [`div { ${[`color: ${At.shared.setValue(r.color).toHex()}`,`font-size: ${t.fontSize}px`,`font-family: ${t.fontFamily}`,`font-weight: ${t.fontWeight}`,`font-style: ${t.fontStyle}`,`font-variant: ${t.fontVariant}`,`letter-spacing: ${t.letterSpacing}px`,`text-align: ${t.align}`,`padding: ${t.padding}px`,`white-space: ${"pre"===t.whiteSpace&&t.wordWrap?"pre-wrap":t.whiteSpace}`,...t.lineHeight?[`line-height: ${t.lineHeight}px`]:[],...t.wordWrap?["word-wrap: "+(t.breakWords?"break-all":"break-word"),`max-width: ${t.wordWrapWidth}px`]:[],...e?[wa(e)]:[],...t.dropShadow?[Sa(t.dropShadow)]:[],...t.cssOverrides].join(";")} }`];
      return function(t, e) {
        for (const r in t) {
          const s = t[r],
            i = [];
          for (const t in s) Ca[t] ? i.push(Ca[t](s[t])) : Ea[t] && i.push(Ea[t].replace("{{VALUE}}", s[t]));
          e.push(`${r} { ${i.join(";")} }`)
        }
      }(t.tagStyles, s), s.join(" ")
    }(this)), this._cssStyle
  }
  addOverride(...t) {
    const e = t.filter(t => !this.cssOverrides.includes(t));
    e.length > 0 && (this.cssOverrides.push(...e), this.update())
  }
  removeOverride(...t) {
    const e = t.filter(t => this.cssOverrides.includes(t));
    e.length > 0 && (this.cssOverrides = this.cssOverrides.filter(t => !e.includes(t)), this.update())
  }
  set fill(t) {
    "string" != typeof t && "number" != typeof t && Bt("[HTMLTextStyle] only color fill is not supported by HTMLText"), super.fill = t
  }
  set stroke(t) {
    t && "string" != typeof t && "number" != typeof t && Bt("[HTMLTextStyle] only color stroke is not supported by HTMLText"), super.stroke = t
  }
}
const Ma = "http://www.w3.org/2000/svg",
  Aa = "http://www.w3.org/1999/xhtml";
class Ra {
  constructor() {
    this.svgRoot = document.createElementNS(Ma, "svg"), this.foreignObject = document.createElementNS(Ma, "foreignObject"), this.domElement = document.createElementNS(Aa, "div"), this.styleElement = document.createElementNS(Aa, "style"), this.image = new Image;
    const {
      foreignObject: t,
      svgRoot: e,
      styleElement: r,
      domElement: s
    } = this;
    t.setAttribute("width", "10000"), t.setAttribute("height", "10000"), t.style.overflow = "hidden", e.appendChild(t), t.appendChild(r), t.appendChild(s)
  }
}
let Ba;
class ka {
  constructor() {
    this._tempState = ts.for2d(), this._didUploadHash = {}
  }
  init(t) {
    t.renderer.runners.contextChange.add(this)
  }
  contextChange() {
    this._didUploadHash = {}
  }
  start(t, e, r) {
    const s = t.renderer,
      i = this._didUploadHash[r.uid];
    s.shader.bind(r, i), i || (this._didUploadHash[r.uid] = !0), s.shader.updateUniformGroup(s.globalUniforms.uniformGroup), s.geometry.bind(e, r.glProgram)
  }
  execute(t, e) {
    const r = t.renderer;
    this._tempState.blendMode = e.blendMode, r.state.set(this._tempState);
    const s = e.textures.textures;
    for (let i = 0; i < e.textures.count; i++) r.texture.bind(s[i], i);
    r.geometry.draw(e.topology, e.size, e.start)
  }
}
ka.extension = {
  type: [a.WebGLPipesAdaptor],
  name: "batch"
};
const Ga = ts.for2d();
class Ia {
  start(t, e, r) {
    const s = t.renderer,
      i = s.encoder,
      n = r.gpuProgram;
    this._shader = r, this._geometry = e, i.setGeometry(e, n), Ga.blendMode = "normal", s.pipeline.getPipeline(e, n, Ga);
    const o = s.globalUniforms.bindGroup;
    i.resetBindGroup(1), i.setBindGroup(0, o, n)
  }
  execute(t, e) {
    const r = this._shader.gpuProgram,
      s = t.renderer,
      i = s.encoder;
    if (!e.bindGroup) {
      const t = e.textures;
      e.bindGroup = vi(t.textures, t.count, s.limits.maxBatchableTextures)
    }
    Ga.blendMode = e.blendMode;
    const n = s.bindGroup.getBindGroup(e.bindGroup, r, 1),
      o = s.pipeline.getPipeline(this._geometry, r, Ga, e.topology);
    e.bindGroup._touch(s.textureGC.count), i.setPipeline(o), i.renderPassEncoder.setBindGroup(1, n), i.renderPassEncoder.drawIndexed(e.size, 1, e.start)
  }
}
Ia.extension = {
  type: [a.WebGPUPipesAdaptor],
  name: "batch"
};
const Fa = class t {
  constructor(t, e) {
    var r, s;
    this.state = ts.for2d(), this._batchersByInstructionSet = Object.create(null), this._activeBatches = Object.create(null), this.renderer = t, this._adaptor = e, null == (s = (r = this._adaptor).init) || s.call(r, this)
  }
  static getBatcher(t) {
    return new this._availableBatchers[t]
  }
  buildStart(t) {
    let e = this._batchersByInstructionSet[t.uid];
    e || (e = this._batchersByInstructionSet[t.uid] = Object.create(null), e.default || (e.default = new Pn({
      maxTextures: this.renderer.limits.maxBatchableTextures
    }))), this._activeBatches = e, this._activeBatch = this._activeBatches.default;
    for (const r in this._activeBatches) this._activeBatches[r].begin()
  }
  addToBatch(e, r) {
    if (this._activeBatch.name !== e.batcherName) {
      this._activeBatch.break(r);
      let s = this._activeBatches[e.batcherName];
      s || (s = this._activeBatches[e.batcherName] = t.getBatcher(e.batcherName), s.begin()), this._activeBatch = s
    }
    this._activeBatch.add(e)
  }
  break (t) {
    this._activeBatch.break(t)
  }
  buildEnd(t) {
    this._activeBatch.break(t);
    const e = this._activeBatches;
    for (const r in e) {
      const t = e[r],
        s = t.geometry;
      s.indexBuffer.setDataWithSize(t.indexBuffer, t.indexSize, !0), s.buffers[0].setDataWithSize(t.attributeBuffer.float32View, t.attributeSize, !1)
    }
  }
  upload(t) {
    const e = this._batchersByInstructionSet[t.uid];
    for (const r in e) {
      const t = e[r],
        s = t.geometry;
      t.dirty && (t.dirty = !1, s.buffers[0].update(4 * t.attributeSize))
    }
  }
  execute(t) {
    if ("startBatch" === t.action) {
      const e = t.batcher,
        r = e.geometry,
        s = e.shader;
      this._adaptor.start(this, r, s)
    }
    this._adaptor.execute(this, t)
  }
  destroy() {
    this.state = null, this.renderer = null, this._adaptor = null;
    for (const t in this._activeBatches) this._activeBatches[t].destroy();
    this._activeBatches = null
  }
};
Fa.extension = {
  type: [a.WebGLPipes, a.WebGPUPipes, a.CanvasPipes],
  name: "batch"
}, Fa._availableBatchers = Object.create(null);
let Ua = Fa;
u.handleByMap(a.Batcher, Ua._availableBatchers), u.add(Pn);
const Oa = {
    name: "local-uniform-bit",
    vertex: {
      header: "\n\n            struct LocalUniforms {\n                uTransformMatrix:mat3x3<f32>,\n                uColor:vec4<f32>,\n                uRound:f32,\n            }\n\n            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;\n        ",
      main: "\n            vColor *= localUniforms.uColor;\n            modelMatrix *= localUniforms.uTransformMatrix;\n        ",
      end: "\n            if(localUniforms.uRound == 1)\n            {\n                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);\n            }\n        "
    }
  },
  Da = {
    ...Oa,
    vertex: {
      ...Oa.vertex,
      header: Oa.vertex.header.replace("group(1)", "group(2)")
    }
  },
  La = {
    name: "local-uniform-bit",
    vertex: {
      header: "\n\n            uniform mat3 uTransformMatrix;\n            uniform vec4 uColor;\n            uniform float uRound;\n        ",
      main: "\n            vColor *= uColor;\n            modelMatrix = uTransformMatrix;\n        ",
      end: "\n            if(uRound == 1.)\n            {\n                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);\n            }\n        "
    }
  },
  Na = {
    name: "texture-bit",
    vertex: {
      header: "\n\n        struct TextureUniforms {\n            uTextureMatrix:mat3x3<f32>,\n        }\n\n        @group(2) @binding(2) var<uniform> textureUniforms : TextureUniforms;\n        ",
      main: "\n            uv = (textureUniforms.uTextureMatrix * vec3(uv, 1.0)).xy;\n        "
    },
    fragment: {
      header: "\n            @group(2) @binding(0) var uTexture: texture_2d<f32>;\n            @group(2) @binding(1) var uSampler: sampler;\n\n\n        ",
      main: "\n            outColor = textureSample(uTexture, uSampler, vUV);\n        "
    }
  },
  za = {
    name: "texture-bit",
    vertex: {
      header: "\n            uniform mat3 uTextureMatrix;\n        ",
      main: "\n            uv = (uTextureMatrix * vec3(uv, 1.0)).xy;\n        "
    },
    fragment: {
      header: "\n        uniform sampler2D uTexture;\n\n\n        ",
      main: "\n            outColor = texture(uTexture, vUV);\n        "
    }
  },
  Ha = new tt;
class Wa extends Dt {
  constructor() {
    super(), this.filters = [new ua({
      sprite: new ye(Z.EMPTY),
      inverse: !1,
      resolution: "inherit",
      antialias: "inherit"
    })]
  }
  get sprite() {
    return this.filters[0].sprite
  }
  set sprite(t) {
    this.filters[0].sprite = t
  }
  get inverse() {
    return this.filters[0].inverse
  }
  set inverse(t) {
    this.filters[0].inverse = t
  }
}
class Va {
  constructor(t) {
    this._activeMaskStage = [], this._renderer = t
  }
  push(t, e, r) {
    const s = this._renderer;
    if (s.renderPipes.batch.break(r), r.add({
        renderPipeId: "alphaMask",
        action: "pushMaskBegin",
        mask: t,
        inverse: e._maskOptions.inverse,
        canBundle: !1,
        maskedContainer: e
      }), t.inverse = e._maskOptions.inverse, t.renderMaskToTexture) {
      const e = t.mask;
      e.includeInBuild = !0, e.collectRenderables(r, s, null), e.includeInBuild = !1
    }
    s.renderPipes.batch.break(r), r.add({
      renderPipeId: "alphaMask",
      action: "pushMaskEnd",
      mask: t,
      maskedContainer: e,
      inverse: e._maskOptions.inverse,
      canBundle: !1
    })
  }
  pop(t, e, r) {
    this._renderer.renderPipes.batch.break(r), r.add({
      renderPipeId: "alphaMask",
      action: "popMaskEnd",
      mask: t,
      inverse: e._maskOptions.inverse,
      canBundle: !1
    })
  }
  execute(t) {
    const e = this._renderer,
      r = t.mask.renderMaskToTexture;
    if ("pushMaskBegin" === t.action) {
      const s = Gt.get(Wa);
      if (s.inverse = t.inverse, r) {
        t.mask.mask.measurable = !0;
        const r = Yt(t.mask.mask, !0, Ha);
        t.mask.mask.measurable = !1, r.ceil();
        const i = e.renderTarget.renderTarget.colorTexture.source,
          n = ce.getOptimalTexture(r.width, r.height, i._resolution, i.antialias);
        e.renderTarget.push(n, !0), e.globalUniforms.push({
          offset: r,
          worldColor: 4294967295
        });
        const o = s.sprite;
        o.texture = n, o.worldTransform.tx = r.minX, o.worldTransform.ty = r.minY, this._activeMaskStage.push({
          filterEffect: s,
          maskedContainer: t.maskedContainer,
          filterTexture: n
        })
      } else s.sprite = t.mask.mask, this._activeMaskStage.push({
        filterEffect: s,
        maskedContainer: t.maskedContainer
      })
    } else if ("pushMaskEnd" === t.action) {
      const t = this._activeMaskStage[this._activeMaskStage.length - 1];
      r && (e.type === Kr.WEBGL && e.renderTarget.finishRenderPass(), e.renderTarget.pop(), e.globalUniforms.pop()), e.filter.push({
        renderPipeId: "filter",
        action: "pushFilter",
        container: t.maskedContainer,
        filterEffect: t.filterEffect,
        canBundle: !1
      })
    } else if ("popMaskEnd" === t.action) {
      e.filter.pop();
      const t = this._activeMaskStage.pop();
      r && ce.returnTexture(t.filterTexture), Gt.return(t.filterEffect)
    }
  }
  destroy() {
    this._renderer = null, this._activeMaskStage = null
  }
}
Va.extension = {
  type: [a.WebGLPipes, a.WebGPUPipes, a.CanvasPipes],
  name: "alphaMask"
};
class Xa {
  constructor(t) {
    this._colorStack = [], this._colorStackIndex = 0, this._currentColor = 0, this._renderer = t
  }
  buildStart() {
    this._colorStack[0] = 15, this._colorStackIndex = 1, this._currentColor = 15
  }
  push(t, e, r) {
    this._renderer.renderPipes.batch.break(r);
    const s = this._colorStack;
    s[this._colorStackIndex] = s[this._colorStackIndex - 1] & t.mask;
    const i = this._colorStack[this._colorStackIndex];
    i !== this._currentColor && (this._currentColor = i, r.add({
      renderPipeId: "colorMask",
      colorMask: i,
      canBundle: !1
    })), this._colorStackIndex++
  }
  pop(t, e, r) {
    this._renderer.renderPipes.batch.break(r);
    const s = this._colorStack;
    this._colorStackIndex--;
    const i = s[this._colorStackIndex - 1];
    i !== this._currentColor && (this._currentColor = i, r.add({
      renderPipeId: "colorMask",
      colorMask: i,
      canBundle: !1
    }))
  }
  execute(t) {
    this._renderer.colorMask.setMask(t.colorMask)
  }
  destroy() {
    this._colorStack = null
  }
}
Xa.extension = {
  type: [a.WebGLPipes, a.WebGPUPipes, a.CanvasPipes],
  name: "colorMask"
};
class Ya {
  constructor(t) {
    this._maskStackHash = {}, this._maskHash = new WeakMap, this._renderer = t
  }
  push(t, e, r) {
    var s;
    const i = t,
      n = this._renderer;
    n.renderPipes.batch.break(r), n.renderPipes.blendMode.setBlendMode(i.mask, "none", r), r.add({
      renderPipeId: "stencilMask",
      action: "pushMaskBegin",
      mask: t,
      inverse: e._maskOptions.inverse,
      canBundle: !1
    });
    const o = i.mask;
    o.includeInBuild = !0, this._maskHash.has(i) || this._maskHash.set(i, {
      instructionsStart: 0,
      instructionsLength: 0
    });
    const a = this._maskHash.get(i);
    a.instructionsStart = r.instructionSize, o.collectRenderables(r, n, null), o.includeInBuild = !1, n.renderPipes.batch.break(r), r.add({
      renderPipeId: "stencilMask",
      action: "pushMaskEnd",
      mask: t,
      inverse: e._maskOptions.inverse,
      canBundle: !1
    });
    const h = r.instructionSize - a.instructionsStart - 1;
    a.instructionsLength = h;
    const l = n.renderTarget.renderTarget.uid;
    (s = this._maskStackHash)[l] ?? (s[l] = 0)
  }
  pop(t, e, r) {
    const s = t,
      i = this._renderer;
    i.renderPipes.batch.break(r), i.renderPipes.blendMode.setBlendMode(s.mask, "none", r), r.add({
      renderPipeId: "stencilMask",
      action: "popMaskBegin",
      inverse: e._maskOptions.inverse,
      canBundle: !1
    });
    const n = this._maskHash.get(t);
    for (let o = 0; o < n.instructionsLength; o++) r.instructions[r.instructionSize++] = r.instructions[n.instructionsStart++];
    r.add({
      renderPipeId: "stencilMask",
      action: "popMaskEnd",
      canBundle: !1
    })
  }
  execute(t) {
    var e;
    const r = this._renderer,
      s = r.renderTarget.renderTarget.uid;
    let i = (e = this._maskStackHash)[s] ?? (e[s] = 0);
    "pushMaskBegin" === t.action ? (r.renderTarget.ensureDepthStencil(), r.stencil.setStencilMode(Ei.RENDERING_MASK_ADD, i), i++, r.colorMask.setMask(0)) : "pushMaskEnd" === t.action ? (t.inverse ? r.stencil.setStencilMode(Ei.INVERSE_MASK_ACTIVE, i) : r.stencil.setStencilMode(Ei.MASK_ACTIVE, i), r.colorMask.setMask(15)) : "popMaskBegin" === t.action ? (r.colorMask.setMask(0), 0 !== i ? r.stencil.setStencilMode(Ei.RENDERING_MASK_REMOVE, i) : (r.renderTarget.clear(null, Gs.STENCIL), r.stencil.setStencilMode(Ei.DISABLED, i)), i--) : "popMaskEnd" === t.action && (t.inverse ? r.stencil.setStencilMode(Ei.INVERSE_MASK_ACTIVE, i) : r.stencil.setStencilMode(Ei.MASK_ACTIVE, i), r.colorMask.setMask(15)), this._maskStackHash[s] = i
  }
  destroy() {
    this._renderer = null, this._maskStackHash = null, this._maskHash = null
  }
}
Ya.extension = {
  type: [a.WebGLPipes, a.WebGPUPipes, a.CanvasPipes],
  name: "stencilMask"
};
var $a = (t => (t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER", t))($a || {});
class ja {
  constructor(t, e) {
    this._lastBindBaseLocation = -1, this._lastBindCallId = -1, this.buffer = t || null, this.updateID = -1, this.byteLength = -1, this.type = e
  }
}
class qa {
  constructor(t) {
    this._gpuBuffers = Object.create(null), this._boundBufferBases = Object.create(null), this._minBaseLocation = 0, this._nextBindBaseIndex = this._minBaseLocation, this._bindCallId = 0, this._renderer = t, this._renderer.renderableGC.addManagedHash(this, "_gpuBuffers")
  }
  destroy() {
    this._renderer = null, this._gl = null, this._gpuBuffers = null, this._boundBufferBases = null
  }
  contextChange() {
    this._gl = this._renderer.gl, this._gpuBuffers = Object.create(null), this._maxBindings = this._renderer.limits.maxUniformBindings
  }
  getGlBuffer(t) {
    return this._gpuBuffers[t.uid] || this.createGLBuffer(t)
  }
  bind(t) {
    const {
      _gl: e
    } = this, r = this.getGlBuffer(t);
    e.bindBuffer(r.type, r.buffer)
  }
  bindBufferBase(t, e) {
    const {
      _gl: r
    } = this;
    this._boundBufferBases[e] !== t && (this._boundBufferBases[e] = t, t._lastBindBaseLocation = e, r.bindBufferBase(r.UNIFORM_BUFFER, e, t.buffer))
  }
  nextBindBase(t) {
    this._bindCallId++, this._minBaseLocation = 0, t && (this._boundBufferBases[0] = null, this._minBaseLocation = 1, this._nextBindBaseIndex < 1 && (this._nextBindBaseIndex = 1))
  }
  freeLocationForBufferBase(t) {
    let e = this.getLastBindBaseLocation(t);
    if (e >= this._minBaseLocation) return t._lastBindCallId = this._bindCallId, e;
    let r = 0,
      s = this._nextBindBaseIndex;
    for (; r < 2;) {
      s >= this._maxBindings && (s = this._minBaseLocation, r++);
      const t = this._boundBufferBases[s];
      if (!t || t._lastBindCallId !== this._bindCallId) break;
      s++
    }
    return e = s, this._nextBindBaseIndex = s + 1, r >= 2 ? -1 : (t._lastBindCallId = this._bindCallId, this._boundBufferBases[e] = null, e)
  }
  getLastBindBaseLocation(t) {
    const e = t._lastBindBaseLocation;
    return this._boundBufferBases[e] === t ? e : -1
  }
  bindBufferRange(t, e, r, s) {
    const {
      _gl: i
    } = this;
    r || (r = 0), e || (e = 0), this._boundBufferBases[e] = null, i.bindBufferRange(i.UNIFORM_BUFFER, e || 0, t.buffer, 256 * r, s || 256)
  }
  updateBuffer(t) {
    const {
      _gl: e
    } = this, r = this.getGlBuffer(t);
    if (t._updateID === r.updateID) return r;
    r.updateID = t._updateID, e.bindBuffer(r.type, r.buffer);
    const s = t.data,
      i = t.descriptor.usage & Ni.STATIC ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
    return s ? r.byteLength >= s.byteLength ? e.bufferSubData(r.type, 0, s, 0, t._updateSize / s.BYTES_PER_ELEMENT) : (r.byteLength = s.byteLength, e.bufferData(r.type, s, i)) : (r.byteLength = t.descriptor.size, e.bufferData(r.type, r.byteLength, i)), r
  }
  destroyAll() {
    const t = this._gl;
    for (const e in this._gpuBuffers) t.deleteBuffer(this._gpuBuffers[e].buffer);
    this._gpuBuffers = Object.create(null)
  }
  onBufferDestroy(t, e) {
    const r = this._gpuBuffers[t.uid],
      s = this._gl;
    e || s.deleteBuffer(r.buffer), this._gpuBuffers[t.uid] = null
  }
  createGLBuffer(t) {
    const {
      _gl: e
    } = this;
    let r = $a.ARRAY_BUFFER;
    t.descriptor.usage & Ni.INDEX ? r = $a.ELEMENT_ARRAY_BUFFER : t.descriptor.usage & Ni.UNIFORM && (r = $a.UNIFORM_BUFFER);
    const s = new ja(e.createBuffer(), r);
    return this._gpuBuffers[t.uid] = s, t.on("destroy", this.onBufferDestroy, this), s
  }
  resetState() {
    this._boundBufferBases = Object.create(null)
  }
}
qa.extension = {
  type: [a.WebGLSystem],
  name: "buffer"
};
const Ka = class t {
  constructor(t) {
    this.supports = {
      uint32Indices: !0,
      uniformBufferObject: !0,
      vertexArrayObject: !0,
      srgbTextures: !0,
      nonPowOf2wrapping: !0,
      msaa: !0,
      nonPowOf2mipmaps: !0
    }, this._renderer = t, this.extensions = Object.create(null), this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this)
  }
  get isLost() {
    return !this.gl || this.gl.isContextLost()
  }
  contextChange(t) {
    this.gl = t, this._renderer.gl = t
  }
  init(e) {
    e = {
      ...t.defaultOptions,
      ...e
    };
    let r = this.multiView = e.multiView;
    if (e.context && r && (Bt("Renderer created with both a context and multiview enabled. Disabling multiView as both cannot work together."), r = !1), this.canvas = r ? Me.get().createCanvas(this._renderer.canvas.width, this._renderer.canvas.height) : this._renderer.view.canvas, e.context) this.initFromContext(e.context);
    else {
      const t = this._renderer.background.alpha < 1,
        r = e.premultipliedAlpha ?? !0,
        s = e.antialias && !this._renderer.backBuffer.useBackBuffer;
      this.createContext(e.preferWebGLVersion, {
        alpha: t,
        premultipliedAlpha: r,
        antialias: s,
        stencil: !0,
        preserveDrawingBuffer: e.preserveDrawingBuffer,
        powerPreference: e.powerPreference ?? "default"
      })
    }
  }
  ensureCanvasSize(t) {
    if (!this.multiView) return void(t !== this.canvas && Bt("multiView is disabled, but targetCanvas is not the main canvas"));
    const {
      canvas: e
    } = this;
    (e.width < t.width || e.height < t.height) && (e.width = Math.max(t.width, t.width), e.height = Math.max(t.height, t.height))
  }
  initFromContext(t) {
    this.gl = t, this.webGLVersion = t instanceof Me.get().getWebGLRenderingContext() ? 1 : 2, this.getExtensions(), this.validateContext(t), this._renderer.runners.contextChange.emit(t);
    const e = this._renderer.view.canvas;
    e.addEventListener("webglcontextlost", this.handleContextLost, !1), e.addEventListener("webglcontextrestored", this.handleContextRestored, !1)
  }
  createContext(t, e) {
    let r;
    const s = this.canvas;
    if (2 === t && (r = s.getContext("webgl2", e)), !r && (r = s.getContext("webgl", e), !r)) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
    this.gl = r, this.initFromContext(this.gl)
  }
  getExtensions() {
    const {
      gl: t
    } = this, e = {
      anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
      floatTextureLinear: t.getExtension("OES_texture_float_linear"),
      s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
      s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
      etc: t.getExtension("WEBGL_compressed_texture_etc"),
      etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
      pvrtc: t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
      atc: t.getExtension("WEBGL_compressed_texture_atc"),
      astc: t.getExtension("WEBGL_compressed_texture_astc"),
      bptc: t.getExtension("EXT_texture_compression_bptc"),
      rgtc: t.getExtension("EXT_texture_compression_rgtc"),
      loseContext: t.getExtension("WEBGL_lose_context")
    };
    if (1 === this.webGLVersion) this.extensions = {
      ...e,
      drawBuffers: t.getExtension("WEBGL_draw_buffers"),
      depthTexture: t.getExtension("WEBGL_depth_texture"),
      vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
      uint32ElementIndex: t.getExtension("OES_element_index_uint"),
      floatTexture: t.getExtension("OES_texture_float"),
      floatTextureLinear: t.getExtension("OES_texture_float_linear"),
      textureHalfFloat: t.getExtension("OES_texture_half_float"),
      textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear"),
      vertexAttribDivisorANGLE: t.getExtension("ANGLE_instanced_arrays"),
      srgb: t.getExtension("EXT_sRGB")
    };
    else {
      this.extensions = {
        ...e,
        colorBufferFloat: t.getExtension("EXT_color_buffer_float")
      };
      const r = t.getExtension("WEBGL_provoking_vertex");
      r && r.provokingVertexWEBGL(r.FIRST_VERTEX_CONVENTION_WEBGL)
    }
  }
  handleContextLost(t) {
    t.preventDefault(), this._contextLossForced && (this._contextLossForced = !1, setTimeout(() => {
      var t;
      this.gl.isContextLost() && (null == (t = this.extensions.loseContext) || t.restoreContext())
    }, 0))
  }
  handleContextRestored() {
    this.getExtensions(), this._renderer.runners.contextChange.emit(this.gl)
  }
  destroy() {
    var t;
    const e = this._renderer.view.canvas;
    this._renderer = null, e.removeEventListener("webglcontextlost", this.handleContextLost), e.removeEventListener("webglcontextrestored", this.handleContextRestored), this.gl.useProgram(null), null == (t = this.extensions.loseContext) || t.loseContext()
  }
  forceContextLoss() {
    var t;
    null == (t = this.extensions.loseContext) || t.loseContext(), this._contextLossForced = !0
  }
  validateContext(t) {
    const e = t.getContextAttributes();
    e && !e.stencil && Bt("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
    const r = this.supports,
      s = 2 === this.webGLVersion,
      i = this.extensions;
    r.uint32Indices = s || !!i.uint32ElementIndex, r.uniformBufferObject = s, r.vertexArrayObject = s || !!i.vertexArrayObject, r.srgbTextures = s || !!i.srgb, r.nonPowOf2wrapping = s, r.nonPowOf2mipmaps = s, r.msaa = s, r.uint32Indices || Bt("Provided WebGL context does not support 32 index buffer, large scenes may not render correctly")
  }
};
Ka.extension = {
  type: [a.WebGLSystem],
  name: "context"
}, Ka.defaultOptions = {
  context: null,
  premultipliedAlpha: !0,
  preserveDrawingBuffer: !1,
  powerPreference: void 0,
  preferWebGLVersion: 2,
  multiView: !1
};
let Za = Ka;

function Qa(t, e) {
  for (const r in t.attributes) {
    const s = t.attributes[r],
      i = e[r];
    i ? (s.format ?? (s.format = i.format), s.offset ?? (s.offset = i.offset), s.instance ?? (s.instance = i.instance)) : Bt(`Attribute ${r} is not present in the shader, but is present in the geometry. Unable to infer attribute details.`)
  }! function(t) {
    const {
      buffers: e,
      attributes: r
    } = t, s = {}, i = {};
    for (const n in e) {
      const t = e[n];
      s[t.uid] = 0, i[t.uid] = 0
    }
    for (const n in r) {
      const t = r[n];
      s[t.buffer.uid] += Dr(t.format).stride
    }
    for (const n in r) {
      const t = r[n];
      t.stride ?? (t.stride = s[t.buffer.uid]), t.start ?? (t.start = i[t.buffer.uid]), i[t.buffer.uid] += Dr(t.format).stride
    }
  }(t)
}
var Ja = (t => (t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", t))(Ja || {}),
  th = (t => (t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z", t))(th || {}),
  eh = (t => (t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT", t))(eh || {});
const rh = {
  uint8x2: eh.UNSIGNED_BYTE,
  uint8x4: eh.UNSIGNED_BYTE,
  sint8x2: eh.BYTE,
  sint8x4: eh.BYTE,
  unorm8x2: eh.UNSIGNED_BYTE,
  unorm8x4: eh.UNSIGNED_BYTE,
  snorm8x2: eh.BYTE,
  snorm8x4: eh.BYTE,
  uint16x2: eh.UNSIGNED_SHORT,
  uint16x4: eh.UNSIGNED_SHORT,
  sint16x2: eh.SHORT,
  sint16x4: eh.SHORT,
  unorm16x2: eh.UNSIGNED_SHORT,
  unorm16x4: eh.UNSIGNED_SHORT,
  snorm16x2: eh.SHORT,
  snorm16x4: eh.SHORT,
  float16x2: eh.HALF_FLOAT,
  float16x4: eh.HALF_FLOAT,
  float32: eh.FLOAT,
  float32x2: eh.FLOAT,
  float32x3: eh.FLOAT,
  float32x4: eh.FLOAT,
  uint32: eh.UNSIGNED_INT,
  uint32x2: eh.UNSIGNED_INT,
  uint32x3: eh.UNSIGNED_INT,
  uint32x4: eh.UNSIGNED_INT,
  sint32: eh.INT,
  sint32x2: eh.INT,
  sint32x3: eh.INT,
  sint32x4: eh.INT
};

function sh(t) {
  return rh[t] ?? rh.float32
}
const ih = {
  "point-list": 0,
  "line-list": 1,
  "line-strip": 3,
  "triangle-list": 4,
  "triangle-strip": 5
};
class nh {
  constructor(t) {
    this._geometryVaoHash = Object.create(null), this._renderer = t, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this._renderer.renderableGC.addManagedHash(this, "_geometryVaoHash")
  }
  contextChange() {
    const t = this.gl = this._renderer.gl;
    if (!this._renderer.context.supports.vertexArrayObject) throw new Error("[PixiJS] Vertex Array Objects are not supported on this device");
    const e = this._renderer.context.extensions.vertexArrayObject;
    e && (t.createVertexArray = () => e.createVertexArrayOES(), t.bindVertexArray = t => e.bindVertexArrayOES(t), t.deleteVertexArray = t => e.deleteVertexArrayOES(t));
    const r = this._renderer.context.extensions.vertexAttribDivisorANGLE;
    r && (t.drawArraysInstanced = (t, e, s, i) => {
      r.drawArraysInstancedANGLE(t, e, s, i)
    }, t.drawElementsInstanced = (t, e, s, i, n) => {
      r.drawElementsInstancedANGLE(t, e, s, i, n)
    }, t.vertexAttribDivisor = (t, e) => r.vertexAttribDivisorANGLE(t, e)), this._activeGeometry = null, this._activeVao = null, this._geometryVaoHash = Object.create(null)
  }
  bind(t, e) {
    const r = this.gl;
    this._activeGeometry = t;
    const s = this.getVao(t, e);
    this._activeVao !== s && (this._activeVao = s, r.bindVertexArray(s)), this.updateBuffers()
  }
  resetState() {
    this.unbind()
  }
  updateBuffers() {
    const t = this._activeGeometry,
      e = this._renderer.buffer;
    for (let r = 0; r < t.buffers.length; r++) {
      const s = t.buffers[r];
      e.updateBuffer(s)
    }
  }
  checkCompatibility(t, e) {
    const r = t.attributes,
      s = e._attributeData;
    for (const i in s)
      if (!r[i]) throw new Error(`shader and geometry incompatible, geometry missing the "${i}" attribute`)
  }
  getSignature(t, e) {
    const r = t.attributes,
      s = e._attributeData,
      i = ["g", t.uid];
    for (const n in r) s[n] && i.push(n, s[n].location);
    return i.join("-")
  }
  getVao(t, e) {
    var r;
    return (null == (r = this._geometryVaoHash[t.uid]) ? void 0 : r[e._key]) || this.initGeometryVao(t, e)
  }
  initGeometryVao(t, e, r = !0) {
    const s = this._renderer.gl,
      i = this._renderer.buffer;
    this._renderer.shader._getProgramData(e), this.checkCompatibility(t, e);
    const n = this.getSignature(t, e);
    this._geometryVaoHash[t.uid] || (this._geometryVaoHash[t.uid] = Object.create(null), t.on("destroy", this.onGeometryDestroy, this));
    const o = this._geometryVaoHash[t.uid];
    let a = o[n];
    if (a) return o[e._key] = a, a;
    Qa(t, e._attributeData);
    const h = t.buffers;
    a = s.createVertexArray(), s.bindVertexArray(a);
    for (let l = 0; l < h.length; l++) {
      const t = h[l];
      i.bind(t)
    }
    return this.activateVao(t, e), o[e._key] = a, o[n] = a, s.bindVertexArray(null), a
  }
  onGeometryDestroy(t, e) {
    const r = this._geometryVaoHash[t.uid],
      s = this.gl;
    if (r) {
      if (e)
        for (const t in r) this._activeVao !== r[t] && this.unbind(), s.deleteVertexArray(r[t]);
      this._geometryVaoHash[t.uid] = null
    }
  }
  destroyAll(t = !1) {
    const e = this.gl;
    for (const r in this._geometryVaoHash) {
      if (t)
        for (const t in this._geometryVaoHash[r]) {
          const s = this._geometryVaoHash[r];
          this._activeVao !== s && this.unbind(), e.deleteVertexArray(s[t])
        }
      this._geometryVaoHash[r] = null
    }
  }
  activateVao(t, e) {
    var r;
    const s = this._renderer.gl,
      i = this._renderer.buffer,
      n = t.attributes;
    t.indexBuffer && i.bind(t.indexBuffer);
    let o = null;
    for (const a in n) {
      const t = n[a],
        h = t.buffer,
        l = i.getGlBuffer(h),
        u = e._attributeData[a];
      if (u) {
        o !== l && (i.bind(h), o = l);
        const e = u.location;
        s.enableVertexAttribArray(e);
        const n = Dr(t.format),
          a = sh(t.format);
        if ("int" === (null == (r = u.format) ? void 0 : r.substring(1, 4)) ? s.vertexAttribIPointer(e, n.size, a, t.stride, t.offset) : s.vertexAttribPointer(e, n.size, a, n.normalised, t.stride, t.offset), t.instance) {
          if (!this.hasInstance) throw new Error("geometry error, GPU Instancing is not supported on this device");
          {
            const r = t.divisor ?? 1;
            s.vertexAttribDivisor(e, r)
          }
        }
      }
    }
  }
  draw(t, e, r, s) {
    const {
      gl: i
    } = this._renderer, n = this._activeGeometry, o = ih[t || n.topology];
    if (s ?? (s = n.instanceCount), n.indexBuffer) {
      const t = n.indexBuffer.data.BYTES_PER_ELEMENT,
        a = 2 === t ? i.UNSIGNED_SHORT : i.UNSIGNED_INT;
      s > 1 ? i.drawElementsInstanced(o, e || n.indexBuffer.data.length, a, (r || 0) * t, s) : i.drawElements(o, e || n.indexBuffer.data.length, a, (r || 0) * t)
    } else s > 1 ? i.drawArraysInstanced(o, r || 0, e || n.getSize(), s) : i.drawArrays(o, r || 0, e || n.getSize());
    return this
  }
  unbind() {
    this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null
  }
  destroy() {
    this._renderer = null, this.gl = null, this._activeVao = null, this._activeGeometry = null
  }
}
nh.extension = {
  type: [a.WebGLSystem],
  name: "geometry"
};
const oh = new Wi({
    attributes: {
      aPosition: [-1, -1, 3, -1, -1, 3]
    }
  }),
  ah = class t {
    constructor(t) {
      this.useBackBuffer = !1, this._useBackBufferThisRender = !1, this._renderer = t
    }
    init(e = {}) {
      const {
        useBackBuffer: r,
        antialias: s
      } = {
        ...t.defaultOptions,
        ...e
      };
      this.useBackBuffer = r, this._antialias = s, this._renderer.context.supports.msaa || (Bt("antialiasing, is not supported on when using the back buffer"), this._antialias = !1), this._state = ts.for2d();
      const i = new Ur({
        vertex: "\n                attribute vec2 aPosition;\n                out vec2 vUv;\n\n                void main() {\n                    gl_Position = vec4(aPosition, 0.0, 1.0);\n\n                    vUv = (aPosition + 1.0) / 2.0;\n\n                    // flip dem UVs\n                    vUv.y = 1.0 - vUv.y;\n                }",
        fragment: "\n                in vec2 vUv;\n                out vec4 finalColor;\n\n                uniform sampler2D uTexture;\n\n                void main() {\n                    finalColor = texture(uTexture, vUv);\n                }",
        name: "big-triangle"
      });
      this._bigTriangleShader = new Zr({
        glProgram: i,
        resources: {
          uTexture: Z.WHITE.source
        }
      })
    }
    renderStart(t) {
      const e = this._renderer.renderTarget.getRenderTarget(t.target);
      if (this._useBackBufferThisRender = this.useBackBuffer && !!e.isRoot, this._useBackBufferThisRender) {
        const e = this._renderer.renderTarget.getRenderTarget(t.target);
        this._targetTexture = e.colorTexture, t.target = this._getBackBufferTexture(e.colorTexture)
      }
    }
    renderEnd() {
      this._presentBackBuffer()
    }
    _presentBackBuffer() {
      const t = this._renderer;
      t.renderTarget.finishRenderPass(), this._useBackBufferThisRender && (t.renderTarget.bind(this._targetTexture, !1), this._bigTriangleShader.resources.uTexture = this._backBufferTexture.source, t.encoder.draw({
        geometry: oh,
        shader: this._bigTriangleShader,
        state: this._state
      }))
    }
    _getBackBufferTexture(t) {
      return this._backBufferTexture = this._backBufferTexture || new Z({
        source: new $({
          width: t.width,
          height: t.height,
          resolution: t._resolution,
          antialias: this._antialias
        })
      }), this._backBufferTexture.source.resize(t.width, t.height, t._resolution), this._backBufferTexture
    }
    destroy() {
      this._backBufferTexture && (this._backBufferTexture.destroy(), this._backBufferTexture = null)
    }
  };
ah.extension = {
  type: [a.WebGLSystem],
  name: "backBuffer",
  priority: 1
}, ah.defaultOptions = {
  useBackBuffer: !1
};
let hh = ah;
class lh {
  constructor(t) {
    this._colorMaskCache = 15, this._renderer = t
  }
  setMask(t) {
    this._colorMaskCache !== t && (this._colorMaskCache = t, this._renderer.gl.colorMask(!!(8 & t), !!(4 & t), !!(2 & t), !!(1 & t)))
  }
}
lh.extension = {
  type: [a.WebGLSystem],
  name: "colorMask"
};
class uh {
  constructor(t) {
    this.commandFinished = Promise.resolve(), this._renderer = t
  }
  setGeometry(t, e) {
    this._renderer.geometry.bind(t, e.glProgram)
  }
  finishRenderPass() {}
  draw(t) {
    const e = this._renderer,
      {
        geometry: r,
        shader: s,
        state: i,
        skipSync: n,
        topology: o,
        size: a,
        start: h,
        instanceCount: l
      } = t;
    e.shader.bind(s, n), e.geometry.bind(r, e.shader._activeProgram), i && e.state.set(i), e.geometry.draw(o, a, h, l ?? r.instanceCount)
  }
  destroy() {
    this._renderer = null
  }
}
uh.extension = {
  type: [a.WebGLSystem],
  name: "encoder"
};
class ch {
  constructor(t) {
    this._renderer = t
  }
  contextChange() {
    const t = this._renderer.gl;
    this.maxTextures = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), this.maxBatchableTextures = Ai(this.maxTextures, t), this.maxUniformBindings = t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS)
  }
  destroy() {}
}
ch.extension = {
  type: [a.WebGLSystem],
  name: "limits"
};
class dh {
  constructor() {
    this.width = -1, this.height = -1, this.msaa = !1, this.msaaRenderBuffer = []
  }
}
const ph = [];
ph[Ei.NONE] = void 0, ph[Ei.DISABLED] = {
  stencilWriteMask: 0,
  stencilReadMask: 0
}, ph[Ei.RENDERING_MASK_ADD] = {
  stencilFront: {
    compare: "equal",
    passOp: "increment-clamp"
  },
  stencilBack: {
    compare: "equal",
    passOp: "increment-clamp"
  }
}, ph[Ei.RENDERING_MASK_REMOVE] = {
  stencilFront: {
    compare: "equal",
    passOp: "decrement-clamp"
  },
  stencilBack: {
    compare: "equal",
    passOp: "decrement-clamp"
  }
}, ph[Ei.MASK_ACTIVE] = {
  stencilWriteMask: 0,
  stencilFront: {
    compare: "equal",
    passOp: "keep"
  },
  stencilBack: {
    compare: "equal",
    passOp: "keep"
  }
}, ph[Ei.INVERSE_MASK_ACTIVE] = {
  stencilWriteMask: 0,
  stencilFront: {
    compare: "not-equal",
    passOp: "keep"
  },
  stencilBack: {
    compare: "not-equal",
    passOp: "keep"
  }
};
class fh {
  constructor(t) {
    this._stencilCache = {
      enabled: !1,
      stencilReference: 0,
      stencilMode: Ei.NONE
    }, this._renderTargetStencilState = Object.create(null), t.renderTarget.onRenderTargetChange.add(this)
  }
  contextChange(t) {
    this._gl = t, this._comparisonFuncMapping = {
      always: t.ALWAYS,
      never: t.NEVER,
      equal: t.EQUAL,
      "not-equal": t.NOTEQUAL,
      less: t.LESS,
      "less-equal": t.LEQUAL,
      greater: t.GREATER,
      "greater-equal": t.GEQUAL
    }, this._stencilOpsMapping = {
      keep: t.KEEP,
      zero: t.ZERO,
      replace: t.REPLACE,
      invert: t.INVERT,
      "increment-clamp": t.INCR,
      "decrement-clamp": t.DECR,
      "increment-wrap": t.INCR_WRAP,
      "decrement-wrap": t.DECR_WRAP
    }, this.resetState()
  }
  onRenderTargetChange(t) {
    if (this._activeRenderTarget === t) return;
    this._activeRenderTarget = t;
    let e = this._renderTargetStencilState[t.uid];
    e || (e = this._renderTargetStencilState[t.uid] = {
      stencilMode: Ei.DISABLED,
      stencilReference: 0
    }), this.setStencilMode(e.stencilMode, e.stencilReference)
  }
  resetState() {
    this._stencilCache.enabled = !1, this._stencilCache.stencilMode = Ei.NONE, this._stencilCache.stencilReference = 0
  }
  setStencilMode(t, e) {
    const r = this._renderTargetStencilState[this._activeRenderTarget.uid],
      s = this._gl,
      i = ph[t],
      n = this._stencilCache;
    r.stencilMode = t, r.stencilReference = e, t !== Ei.DISABLED ? (this._stencilCache.enabled || (this._stencilCache.enabled = !0, s.enable(s.STENCIL_TEST)), t === n.stencilMode && n.stencilReference === e || (n.stencilMode = t, n.stencilReference = e, s.stencilFunc(this._comparisonFuncMapping[i.stencilBack.compare], e, 255), s.stencilOp(s.KEEP, s.KEEP, this._stencilOpsMapping[i.stencilBack.passOp]))) : this._stencilCache.enabled && (this._stencilCache.enabled = !1, s.disable(s.STENCIL_TEST))
  }
}
fh.extension = {
  type: [a.WebGLSystem],
  name: "stencil"
};
class mh {
  constructor(t) {
    this._syncFunctionHash = Object.create(null), this._adaptor = t, this._systemCheck()
  }
  _systemCheck() {
    if (!ns()) throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")
  }
  ensureUniformGroup(t) {
    const e = this.getUniformGroupData(t);
    t.buffer || (t.buffer = new zi({
      data: new Float32Array(e.layout.size / 4),
      usage: Ni.UNIFORM | Ni.COPY_DST
    }))
  }
  getUniformGroupData(t) {
    return this._syncFunctionHash[t._signature] || this._initUniformGroup(t)
  }
  _initUniformGroup(t) {
    const e = t._signature;
    let r = this._syncFunctionHash[e];
    if (!r) {
      const s = Object.keys(t.uniformStructures).map(e => t.uniformStructures[e]),
        i = this._adaptor.createUboElements(s),
        n = this._generateUboSync(i.uboElements);
      r = this._syncFunctionHash[e] = {
        layout: i,
        syncFunction: n
      }
    }
    return this._syncFunctionHash[e]
  }
  _generateUboSync(t) {
    return this._adaptor.generateUboSync(t)
  }
  syncUniformGroup(t, e, r) {
    const s = this.getUniformGroupData(t);
    t.buffer || (t.buffer = new zi({
      data: new Float32Array(s.layout.size / 4),
      usage: Ni.UNIFORM | Ni.COPY_DST
    }));
    let i = null;
    return e || (e = t.buffer.data, i = t.buffer.dataInt32), r || (r = 0), s.syncFunction(t.uniforms, e, i, r), !0
  }
  updateUniformGroup(t) {
    if (t.isStatic && !t._dirtyId) return !1;
    t._dirtyId = 0;
    const e = this.syncUniformGroup(t);
    return t.buffer.update(), e
  }
  destroy() {
    this._syncFunctionHash = null
  }
}
const gh = {
  f32: 4,
  i32: 4,
  "vec2<f32>": 8,
  "vec3<f32>": 12,
  "vec4<f32>": 16,
  "vec2<i32>": 8,
  "vec3<i32>": 12,
  "vec4<i32>": 16,
  "mat2x2<f32>": 32,
  "mat3x3<f32>": 48,
  "mat4x4<f32>": 64
};

function _h(t) {
  const e = t.map(t => ({
    data: t,
    offset: 0,
    size: 0
  }));
  let r = 0,
    s = 0;
  for (let i = 0; i < e.length; i++) {
    const t = e[i];
    if (r = gh[t.data.type], !r) throw new Error(`Unknown type ${t.data.type}`);
    t.data.size > 1 && (r = Math.max(r, 16) * t.data.size);
    const n = 12 === r ? 16 : r;
    t.size = r;
    const o = s % 16;
    s += o > 0 && 16 - o < n ? (16 - o) % 16 : (r - o % r) % r, t.offset = s, s += r
  }
  return s = 16 * Math.ceil(s / 16), {
    uboElements: e,
    size: s
  }
}
const xh = [{
  type: "mat3x3<f32>",
  test: t => void 0 !== t.value.a,
  ubo: "\n            var matrix = uv[name].toArray(true);\n            data[offset] = matrix[0];\n            data[offset + 1] = matrix[1];\n            data[offset + 2] = matrix[2];\n            data[offset + 4] = matrix[3];\n            data[offset + 5] = matrix[4];\n            data[offset + 6] = matrix[5];\n            data[offset + 8] = matrix[6];\n            data[offset + 9] = matrix[7];\n            data[offset + 10] = matrix[8];\n        ",
  uniform: "\n            gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));\n        "
}, {
  type: "vec4<f32>",
  test: t => "vec4<f32>" === t.type && 1 === t.size && void 0 !== t.value.width,
  ubo: "\n            v = uv[name];\n            data[offset] = v.x;\n            data[offset + 1] = v.y;\n            data[offset + 2] = v.width;\n            data[offset + 3] = v.height;\n        ",
  uniform: "\n            cv = ud[name].value;\n            v = uv[name];\n            if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {\n                cv[0] = v.x;\n                cv[1] = v.y;\n                cv[2] = v.width;\n                cv[3] = v.height;\n                gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);\n            }\n        "
}, {
  type: "vec2<f32>",
  test: t => "vec2<f32>" === t.type && 1 === t.size && void 0 !== t.value.x,
  ubo: "\n            v = uv[name];\n            data[offset] = v.x;\n            data[offset + 1] = v.y;\n        ",
  uniform: "\n            cv = ud[name].value;\n            v = uv[name];\n            if (cv[0] !== v.x || cv[1] !== v.y) {\n                cv[0] = v.x;\n                cv[1] = v.y;\n                gl.uniform2f(ud[name].location, v.x, v.y);\n            }\n        "
}, {
  type: "vec4<f32>",
  test: t => "vec4<f32>" === t.type && 1 === t.size && void 0 !== t.value.red,
  ubo: "\n            v = uv[name];\n            data[offset] = v.red;\n            data[offset + 1] = v.green;\n            data[offset + 2] = v.blue;\n            data[offset + 3] = v.alpha;\n        ",
  uniform: "\n            cv = ud[name].value;\n            v = uv[name];\n            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {\n                cv[0] = v.red;\n                cv[1] = v.green;\n                cv[2] = v.blue;\n                cv[3] = v.alpha;\n                gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);\n            }\n        "
}, {
  type: "vec3<f32>",
  test: t => "vec3<f32>" === t.type && 1 === t.size && void 0 !== t.value.red,
  ubo: "\n            v = uv[name];\n            data[offset] = v.red;\n            data[offset + 1] = v.green;\n            data[offset + 2] = v.blue;\n        ",
  uniform: "\n            cv = ud[name].value;\n            v = uv[name];\n            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {\n                cv[0] = v.red;\n                cv[1] = v.green;\n                cv[2] = v.blue;\n                gl.uniform3f(ud[name].location, v.red, v.green, v.blue);\n            }\n        "
}];

function yh(t, e, r, s) {
  const i = ["\n        var v = null;\n        var v2 = null;\n        var t = 0;\n        var index = 0;\n        var name = null;\n        var arrayOffset = null;\n    "];
  let n = 0;
  for (let a = 0; a < t.length; a++) {
    const o = t[a],
      h = o.data.name;
    let l = !1,
      u = 0;
    for (let t = 0; t < xh.length; t++)
      if (xh[t].test(o.data)) {
        u = o.offset / 4, i.push(`name = "${h}";`, `offset += ${u-n};`, xh[t][e] || xh[t].ubo), l = !0;
        break
      } if (!l)
      if (o.data.size > 1) u = o.offset / 4, i.push(r(o, u - n));
      else {
        const t = s[o.data.type];
        u = o.offset / 4, i.push(`\n                    v = uv.${h};\n                    offset += ${u-n};\n                    ${t};\n                `)
      } n = u
  }
  const o = i.join("\n");
  return new Function("uv", "data", "dataInt32", "offset", o)
}

function bh(t, e) {
  return `\n        for (let i = 0; i < ${t*e}; i++) {\n            data[offset + (((i / ${t})|0) * 4) + (i % ${t})] = v[i];\n        }\n    `
}
const vh = {
    f32: "\n        data[offset] = v;",
    i32: "\n        dataInt32[offset] = v;",
    "vec2<f32>": "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];",
    "vec3<f32>": "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 2] = v[2];",
    "vec4<f32>": "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 2] = v[2];\n        data[offset + 3] = v[3];",
    "vec2<i32>": "\n        dataInt32[offset] = v[0];\n        dataInt32[offset + 1] = v[1];",
    "vec3<i32>": "\n        dataInt32[offset] = v[0];\n        dataInt32[offset + 1] = v[1];\n        dataInt32[offset + 2] = v[2];",
    "vec4<i32>": "\n        dataInt32[offset] = v[0];\n        dataInt32[offset + 1] = v[1];\n        dataInt32[offset + 2] = v[2];\n        dataInt32[offset + 3] = v[3];",
    "mat2x2<f32>": "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 4] = v[2];\n        data[offset + 5] = v[3];",
    "mat3x3<f32>": "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 2] = v[2];\n        data[offset + 4] = v[3];\n        data[offset + 5] = v[4];\n        data[offset + 6] = v[5];\n        data[offset + 8] = v[6];\n        data[offset + 9] = v[7];\n        data[offset + 10] = v[8];",
    "mat4x4<f32>": "\n        for (let i = 0; i < 16; i++) {\n            data[offset + i] = v[i];\n        }",
    "mat3x2<f32>": bh(3, 2),
    "mat4x2<f32>": bh(4, 2),
    "mat2x3<f32>": bh(2, 3),
    "mat4x3<f32>": bh(4, 3),
    "mat2x4<f32>": bh(2, 4),
    "mat3x4<f32>": bh(3, 4)
  },
  Th = {
    ...vh,
    "mat2x2<f32>": "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 2] = v[2];\n        data[offset + 3] = v[3];\n    "
  };

function Sh(t, e) {
  const r = Math.max(gh[t.data.type] / 16, 1),
    s = t.data.value.length / t.data.size,
    i = (4 - s % 4) % 4,
    n = t.data.type.indexOf("i32") >= 0 ? "dataInt32" : "data";
  return `\n        v = uv.${t.data.name};\n        offset += ${e};\n\n        arrayOffset = offset;\n\n        t = 0;\n\n        for(var i=0; i < ${t.data.size*r}; i++)\n        {\n            for(var j = 0; j < ${s}; j++)\n            {\n                ${n}[arrayOffset++] = v[t++];\n            }\n            ${0!==i?`arrayOffset += ${i};`:""}\n        }\n    `
}

function wh(t) {
  return yh(t, "uboStd40", Sh, vh)
}
class Eh extends mh {
  constructor() {
    super({
      createUboElements: _h,
      generateUboSync: wh
    })
  }
}
Eh.extension = {
  type: [a.WebGLSystem],
  name: "ubo"
};
class Ch {
  constructor() {
    this._clearColorCache = [0, 0, 0, 0], this._viewPortCache = new G
  }
  init(t, e) {
    this._renderer = t, this._renderTargetSystem = e, t.runners.contextChange.add(this)
  }
  contextChange() {
    this._clearColorCache = [0, 0, 0, 0], this._viewPortCache = new G
  }
  copyToTexture(t, e, r, s, i) {
    const n = this._renderTargetSystem,
      o = this._renderer,
      a = n.getGpuRenderTarget(t),
      h = o.gl;
    return this.finishRenderPass(t), h.bindFramebuffer(h.FRAMEBUFFER, a.resolveTargetFramebuffer), o.texture.bind(e, 0), h.copyTexSubImage2D(h.TEXTURE_2D, 0, i.x, i.y, r.x, r.y, s.width, s.height), e
  }
  startRenderPass(t, e = !0, r, s) {
    const i = this._renderTargetSystem,
      n = t.colorTexture,
      o = i.getGpuRenderTarget(t);
    let a = s.y;
    t.isRoot && (a = n.pixelHeight - s.height), t.colorTextures.forEach(t => {
      this._renderer.texture.unbind(t)
    });
    const h = this._renderer.gl;
    h.bindFramebuffer(h.FRAMEBUFFER, o.framebuffer);
    const l = this._viewPortCache;
    l.x === s.x && l.y === a && l.width === s.width && l.height === s.height || (l.x = s.x, l.y = a, l.width = s.width, l.height = s.height, h.viewport(s.x, a, s.width, s.height)), o.depthStencilRenderBuffer || !t.stencil && !t.depth || this._initStencil(o), this.clear(t, e, r)
  }
  finishRenderPass(t) {
    const e = this._renderTargetSystem.getGpuRenderTarget(t);
    if (!e.msaa) return;
    const r = this._renderer.gl;
    r.bindFramebuffer(r.FRAMEBUFFER, e.resolveTargetFramebuffer), r.bindFramebuffer(r.READ_FRAMEBUFFER, e.framebuffer), r.blitFramebuffer(0, 0, e.width, e.height, 0, 0, e.width, e.height, r.COLOR_BUFFER_BIT, r.NEAREST), r.bindFramebuffer(r.FRAMEBUFFER, e.framebuffer)
  }
  initGpuRenderTarget(t) {
    const e = this._renderer.gl,
      r = new dh;
    return t.colorTexture instanceof Ae ? (this._renderer.context.ensureCanvasSize(t.colorTexture.resource), r.framebuffer = null, r) : (this._initColor(t, r), e.bindFramebuffer(e.FRAMEBUFFER, null), r)
  }
  destroyGpuRenderTarget(t) {
    const e = this._renderer.gl;
    t.framebuffer && (e.deleteFramebuffer(t.framebuffer), t.framebuffer = null), t.resolveTargetFramebuffer && (e.deleteFramebuffer(t.resolveTargetFramebuffer), t.resolveTargetFramebuffer = null), t.depthStencilRenderBuffer && (e.deleteRenderbuffer(t.depthStencilRenderBuffer), t.depthStencilRenderBuffer = null), t.msaaRenderBuffer.forEach(t => {
      e.deleteRenderbuffer(t)
    }), t.msaaRenderBuffer = null
  }
  clear(t, e, r) {
    if (!e) return;
    const s = this._renderTargetSystem;
    "boolean" == typeof e && (e = e ? Gs.ALL : Gs.NONE);
    const i = this._renderer.gl;
    if (e & Gs.COLOR) {
      r ?? (r = s.defaultClearColor);
      const t = this._clearColorCache,
        e = r;
      t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] || (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], i.clearColor(e[0], e[1], e[2], e[3]))
    }
    i.clear(e)
  }
  resizeGpuRenderTarget(t) {
    if (t.isRoot) return;
    const e = this._renderTargetSystem.getGpuRenderTarget(t);
    this._resizeColor(t, e), (t.stencil || t.depth) && this._resizeStencil(e)
  }
  _initColor(t, e) {
    const r = this._renderer,
      s = r.gl,
      i = s.createFramebuffer();
    if (e.resolveTargetFramebuffer = i, s.bindFramebuffer(s.FRAMEBUFFER, i), e.width = t.colorTexture.source.pixelWidth, e.height = t.colorTexture.source.pixelHeight, t.colorTextures.forEach((t, i) => {
        const n = t.source;
        n.antialias && (r.context.supports.msaa ? e.msaa = !0 : Bt("[RenderTexture] Antialiasing on textures is not supported in WebGL1")), r.texture.bindSource(n, 0);
        const o = r.texture.getGlSource(n).texture;
        s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + i, 3553, o, 0)
      }), e.msaa) {
      const r = s.createFramebuffer();
      e.framebuffer = r, s.bindFramebuffer(s.FRAMEBUFFER, r), t.colorTextures.forEach((t, r) => {
        const i = s.createRenderbuffer();
        e.msaaRenderBuffer[r] = i
      })
    } else e.framebuffer = i;
    this._resizeColor(t, e)
  }
  _resizeColor(t, e) {
    const r = t.colorTexture.source;
    if (e.width = r.pixelWidth, e.height = r.pixelHeight, t.colorTextures.forEach((t, e) => {
        0 !== e && t.source.resize(r.width, r.height, r._resolution)
      }), e.msaa) {
      const r = this._renderer,
        s = r.gl,
        i = e.framebuffer;
      s.bindFramebuffer(s.FRAMEBUFFER, i), t.colorTextures.forEach((t, i) => {
        const n = t.source;
        r.texture.bindSource(n, 0);
        const o = r.texture.getGlSource(n).internalFormat,
          a = e.msaaRenderBuffer[i];
        s.bindRenderbuffer(s.RENDERBUFFER, a), s.renderbufferStorageMultisample(s.RENDERBUFFER, 4, o, n.pixelWidth, n.pixelHeight), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + i, s.RENDERBUFFER, a)
      })
    }
  }
  _initStencil(t) {
    if (null === t.framebuffer) return;
    const e = this._renderer.gl,
      r = e.createRenderbuffer();
    t.depthStencilRenderBuffer = r, e.bindRenderbuffer(e.RENDERBUFFER, r), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, r), this._resizeStencil(t)
  }
  _resizeStencil(t) {
    const e = this._renderer.gl;
    e.bindRenderbuffer(e.RENDERBUFFER, t.depthStencilRenderBuffer), t.msaa ? e.renderbufferStorageMultisample(e.RENDERBUFFER, 4, e.DEPTH24_STENCIL8, t.width, t.height) : e.renderbufferStorage(e.RENDERBUFFER, 2 === this._renderer.context.webGLVersion ? e.DEPTH24_STENCIL8 : e.DEPTH_STENCIL, t.width, t.height)
  }
  prerender(t) {
    const e = t.colorTexture.resource;
    this._renderer.context.multiView && Ae.test(e) && this._renderer.context.ensureCanvasSize(e)
  }
  postrender(t) {
    if (this._renderer.context.multiView && Ae.test(t.colorTexture.resource)) {
      const e = this._renderer.context.canvas,
        r = t.colorTexture;
      r.context2D.drawImage(e, 0, r.pixelHeight - e.height)
    }
  }
}
const Ph = new Map;

function Mh(t, e) {
  if (!Ph.has(t)) {
    const r = new Z({
        source: new Ae({
          resource: t,
          ...e
        })
      }),
      s = () => {
        Ph.get(t) === r && Ph.delete(t)
      };
    r.once("destroy", s), r.source.once("destroy", s), Ph.set(t, r)
  }
  return Ph.get(t)
}
const Ah = class t {
  constructor(e = {}) {
    if (this.uid = F("renderTarget"), this.colorTextures = [], this.dirtyId = 0, this.isRoot = !1, this._size = new Float32Array(2), this._managedColorTextures = !1, e = {
        ...t.defaultOptions,
        ...e
      }, this.stencil = e.stencil, this.depth = e.depth, this.isRoot = e.isRoot, "number" == typeof e.colorTextures) {
      this._managedColorTextures = !0;
      for (let t = 0; t < e.colorTextures; t++) this.colorTextures.push(new $({
        width: e.width,
        height: e.height,
        resolution: e.resolution,
        antialias: e.antialias
      }))
    } else {
      this.colorTextures = [...e.colorTextures.map(t => t.source)];
      const t = this.colorTexture.source;
      this.resize(t.width, t.height, t._resolution)
    }
    this.colorTexture.source.on("resize", this.onSourceResize, this), (e.depthStencilTexture || this.stencil) && (e.depthStencilTexture instanceof Z || e.depthStencilTexture instanceof $ ? this.depthStencilTexture = e.depthStencilTexture.source : this.ensureDepthStencilTexture())
  }
  get size() {
    const t = this._size;
    return t[0] = this.pixelWidth, t[1] = this.pixelHeight, t
  }
  get width() {
    return this.colorTexture.source.width
  }
  get height() {
    return this.colorTexture.source.height
  }
  get pixelWidth() {
    return this.colorTexture.source.pixelWidth
  }
  get pixelHeight() {
    return this.colorTexture.source.pixelHeight
  }
  get resolution() {
    return this.colorTexture.source._resolution
  }
  get colorTexture() {
    return this.colorTextures[0]
  }
  onSourceResize(t) {
    this.resize(t.width, t.height, t._resolution, !0)
  }
  ensureDepthStencilTexture() {
    this.depthStencilTexture || (this.depthStencilTexture = new $({
      width: this.width,
      height: this.height,
      resolution: this.resolution,
      format: "depth24plus-stencil8",
      autoGenerateMipmaps: !1,
      antialias: !1,
      mipLevelCount: 1
    }))
  }
  resize(t, e, r = this.resolution, s = !1) {
    this.dirtyId++, this.colorTextures.forEach((i, n) => {
      s && 0 === n || i.source.resize(t, e, r)
    }), this.depthStencilTexture && this.depthStencilTexture.source.resize(t, e, r)
  }
  destroy() {
    this.colorTexture.source.off("resize", this.onSourceResize, this), this._managedColorTextures && this.colorTextures.forEach(t => {
      t.destroy()
    }), this.depthStencilTexture && (this.depthStencilTexture.destroy(), delete this.depthStencilTexture)
  }
};
Ah.defaultOptions = {
  width: 0,
  height: 0,
  resolution: 1,
  colorTextures: 1,
  stencil: !1,
  depth: !1,
  antialias: !1,
  isRoot: !1
};
let Rh = Ah;
class Bh {
  constructor(t) {
    this.rootViewPort = new G, this.viewport = new G, this.onRenderTargetChange = new Is("onRenderTargetChange"), this.projectionMatrix = new v, this.defaultClearColor = [0, 0, 0, 0], this._renderSurfaceToRenderTargetHash = new Map, this._gpuRenderTargetHash = Object.create(null), this._renderTargetStack = [], this._renderer = t, t.renderableGC.addManagedHash(this, "_gpuRenderTargetHash")
  }
  finishRenderPass() {
    this.adaptor.finishRenderPass(this.renderTarget)
  }
  renderStart({
    target: t,
    clear: e,
    clearColor: r,
    frame: s
  }) {
    var i, n;
    this._renderTargetStack.length = 0, this.push(t, e, r, s), this.rootViewPort.copyFrom(this.viewport), this.rootRenderTarget = this.renderTarget, this.renderingToScreen = function(t) {
      const e = t.colorTexture.source.resource;
      return globalThis.HTMLCanvasElement && e instanceof HTMLCanvasElement && document.body.contains(e)
    }(this.rootRenderTarget), null == (n = (i = this.adaptor).prerender) || n.call(i, this.rootRenderTarget)
  }
  postrender() {
    var t, e;
    null == (e = (t = this.adaptor).postrender) || e.call(t, this.rootRenderTarget)
  }
  bind(t, e = !0, r, s) {
    const i = this.getRenderTarget(t),
      n = this.renderTarget !== i;
    this.renderTarget = i, this.renderSurface = t;
    const o = this.getGpuRenderTarget(i);
    i.pixelWidth === o.width && i.pixelHeight === o.height || (this.adaptor.resizeGpuRenderTarget(i), o.width = i.pixelWidth, o.height = i.pixelHeight);
    const a = i.colorTexture,
      h = this.viewport,
      l = a.pixelWidth,
      u = a.pixelHeight;
    if (!s && t instanceof Z && (s = t.frame), s) {
      const t = a._resolution;
      h.x = s.x * t + .5 | 0, h.y = s.y * t + .5 | 0, h.width = s.width * t + .5 | 0, h.height = s.height * t + .5 | 0
    } else h.x = 0, h.y = 0, h.width = l, h.height = u;
    return function(t, e, r, s, i, n) {
      const o = n ? 1 : -1;
      t.identity(), t.a = 1 / s * 2, t.d = o * (1 / i * 2), t.tx = -1 - 0 * t.a, t.ty = -o - 0 * t.d
    }(this.projectionMatrix, 0, 0, h.width / a.resolution, h.height / a.resolution, !i.isRoot), this.adaptor.startRenderPass(i, e, r, h), n && this.onRenderTargetChange.emit(i), i
  }
  clear(t, e = Gs.ALL, r) {
    e && (t && (t = this.getRenderTarget(t)), this.adaptor.clear(t || this.renderTarget, e, r, this.viewport))
  }
  contextChange() {
    this._gpuRenderTargetHash = Object.create(null)
  }
  push(t, e = Gs.ALL, r, s) {
    const i = this.bind(t, e, r, s);
    return this._renderTargetStack.push({
      renderTarget: i,
      frame: s
    }), i
  }
  pop() {
    this._renderTargetStack.pop();
    const t = this._renderTargetStack[this._renderTargetStack.length - 1];
    this.bind(t.renderTarget, !1, null, t.frame)
  }
  getRenderTarget(t) {
    return t.isTexture && (t = t.source), this._renderSurfaceToRenderTargetHash.get(t) ?? this._initRenderTarget(t)
  }
  copyToTexture(t, e, r, s, i) {
    r.x < 0 && (s.width += r.x, i.x -= r.x, r.x = 0), r.y < 0 && (s.height += r.y, i.y -= r.y, r.y = 0);
    const {
      pixelWidth: n,
      pixelHeight: o
    } = t;
    return s.width = Math.min(s.width, n - r.x), s.height = Math.min(s.height, o - r.y), this.adaptor.copyToTexture(t, e, r, s, i)
  }
  ensureDepthStencil() {
    this.renderTarget.stencil || (this.renderTarget.stencil = !0, this.adaptor.startRenderPass(this.renderTarget, !1, null, this.viewport))
  }
  destroy() {
    this._renderer = null, this._renderSurfaceToRenderTargetHash.forEach((t, e) => {
      t !== e && t.destroy()
    }), this._renderSurfaceToRenderTargetHash.clear(), this._gpuRenderTargetHash = Object.create(null)
  }
  _initRenderTarget(t) {
    let e = null;
    return Ae.test(t) && (t = Mh(t).source), t instanceof Rh ? e = t : t instanceof $ && (e = new Rh({
      colorTextures: [t]
    }), t.source instanceof Ae && (e.isRoot = !0), t.once("destroy", () => {
      e.destroy(), this._renderSurfaceToRenderTargetHash.delete(t);
      const r = this._gpuRenderTargetHash[e.uid];
      r && (this._gpuRenderTargetHash[e.uid] = null, this.adaptor.destroyGpuRenderTarget(r))
    })), this._renderSurfaceToRenderTargetHash.set(t, e), e
  }
  getGpuRenderTarget(t) {
    return this._gpuRenderTargetHash[t.uid] || (this._gpuRenderTargetHash[t.uid] = this.adaptor.initGpuRenderTarget(t))
  }
  resetState() {
    this.renderTarget = null, this.renderSurface = null
  }
}
class kh extends Bh {
  constructor(t) {
    super(t), this.adaptor = new Ch, this.adaptor.init(t, this)
  }
}
kh.extension = {
  type: [a.WebGLSystem],
  name: "renderTarget"
};
class Gh extends m {
  constructor({
    buffer: t,
    offset: e,
    size: r
  }) {
    super(), this.uid = F("buffer"), this._resourceType = "bufferResource", this._touched = 0, this._resourceId = F("resource"), this._bufferResource = !0, this.destroyed = !1, this.buffer = t, this.offset = 0 | e, this.size = r, this.buffer.on("change", this.onBufferChange, this)
  }
  onBufferChange() {
    this._resourceId = F("resource"), this.emit("change", this)
  }
  destroy(t = !1) {
    this.destroyed = !0, t && this.buffer.destroy(), this.emit("change", this), this.buffer = null
  }
}
class Ih {
  constructor(t, e) {
    this.program = t, this.uniformData = e, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBlockBindings = {}
  }
  destroy() {
    this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBlockBindings = null, this.program = null
  }
}

function Fh(t, e, r) {
  const s = t.createShader(e);
  return t.shaderSource(s, r), t.compileShader(s), s
}

function Uh(t) {
  const e = new Array(t);
  for (let r = 0; r < e.length; r++) e[r] = !1;
  return e
}

function Oh(t, e) {
  switch (t) {
    case "float":
    case "int":
    case "uint":
    case "sampler2D":
    case "sampler2DArray":
      return 0;
    case "vec2":
      return new Float32Array(2 * e);
    case "vec3":
      return new Float32Array(3 * e);
    case "vec4":
      return new Float32Array(4 * e);
    case "ivec2":
      return new Int32Array(2 * e);
    case "ivec3":
      return new Int32Array(3 * e);
    case "ivec4":
      return new Int32Array(4 * e);
    case "uvec2":
      return new Uint32Array(2 * e);
    case "uvec3":
      return new Uint32Array(3 * e);
    case "uvec4":
      return new Uint32Array(4 * e);
    case "bool":
      return !1;
    case "bvec2":
      return Uh(2 * e);
    case "bvec3":
      return Uh(3 * e);
    case "bvec4":
      return Uh(4 * e);
    case "mat2":
      return new Float32Array([1, 0, 0, 1]);
    case "mat3":
      return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4":
      return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
  }
  return null
}
let Dh = null;
const Lh = {
    FLOAT: "float",
    FLOAT_VEC2: "vec2",
    FLOAT_VEC3: "vec3",
    FLOAT_VEC4: "vec4",
    INT: "int",
    INT_VEC2: "ivec2",
    INT_VEC3: "ivec3",
    INT_VEC4: "ivec4",
    UNSIGNED_INT: "uint",
    UNSIGNED_INT_VEC2: "uvec2",
    UNSIGNED_INT_VEC3: "uvec3",
    UNSIGNED_INT_VEC4: "uvec4",
    BOOL: "bool",
    BOOL_VEC2: "bvec2",
    BOOL_VEC3: "bvec3",
    BOOL_VEC4: "bvec4",
    FLOAT_MAT2: "mat2",
    FLOAT_MAT3: "mat3",
    FLOAT_MAT4: "mat4",
    SAMPLER_2D: "sampler2D",
    INT_SAMPLER_2D: "sampler2D",
    UNSIGNED_INT_SAMPLER_2D: "sampler2D",
    SAMPLER_CUBE: "samplerCube",
    INT_SAMPLER_CUBE: "samplerCube",
    UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
    SAMPLER_2D_ARRAY: "sampler2DArray",
    INT_SAMPLER_2D_ARRAY: "sampler2DArray",
    UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
  },
  Nh = {
    float: "float32",
    vec2: "float32x2",
    vec3: "float32x3",
    vec4: "float32x4",
    int: "sint32",
    ivec2: "sint32x2",
    ivec3: "sint32x3",
    ivec4: "sint32x4",
    uint: "uint32",
    uvec2: "uint32x2",
    uvec3: "uint32x3",
    uvec4: "uint32x4",
    bool: "uint32",
    bvec2: "uint32x2",
    bvec3: "uint32x3",
    bvec4: "uint32x4"
  };

function zh(t, e) {
  if (!Dh) {
    const e = Object.keys(Lh);
    Dh = {};
    for (let r = 0; r < e.length; ++r) {
      const s = e[r];
      Dh[t[s]] = Lh[s]
    }
  }
  return Dh[e]
}

function Hh(t, e) {
  const r = zh(t, e);
  return Nh[r] || "float32"
}

function Wh(t, e) {
  const r = t.getShaderSource(e).split("\n").map((t, e) => `${e}: ${t}`),
    s = t.getShaderInfoLog(e),
    i = s.split("\n"),
    n = {},
    o = i.map(t => parseFloat(t.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))).filter(t => !(!t || n[t] || (n[t] = !0, 0))),
    a = [""];
  o.forEach(t => {
    r[t - 1] = `%c${r[t-1]}%c`, a.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px")
  });
  const h = r.join("\n");
  a[0] = h, console.error(s), console.groupCollapsed("click to view full shader code"), console.warn(...a), console.groupEnd()
}
const Vh = {
  textureCount: 0,
  blockIndex: 0
};
class Xh {
  constructor(t) {
    this._activeProgram = null, this._programDataHash = Object.create(null), this._shaderSyncFunctions = Object.create(null), this._renderer = t, this._renderer.renderableGC.addManagedHash(this, "_programDataHash")
  }
  contextChange(t) {
    this._gl = t, this._programDataHash = Object.create(null), this._shaderSyncFunctions = Object.create(null), this._activeProgram = null
  }
  bind(t, e) {
    if (this._setProgram(t.glProgram), e) return;
    Vh.textureCount = 0, Vh.blockIndex = 0;
    let r = this._shaderSyncFunctions[t.glProgram._key];
    r || (r = this._shaderSyncFunctions[t.glProgram._key] = this._generateShaderSync(t, this)), this._renderer.buffer.nextBindBase(!!t.glProgram.transformFeedbackVaryings), r(this._renderer, t, Vh)
  }
  updateUniformGroup(t) {
    this._renderer.uniformGroup.updateUniformGroup(t, this._activeProgram, Vh)
  }
  bindUniformBlock(t, e, r = 0) {
    const s = this._renderer.buffer,
      i = this._getProgramData(this._activeProgram),
      n = t._bufferResource;
    n || this._renderer.ubo.updateUniformGroup(t);
    const o = t.buffer,
      a = s.updateBuffer(o),
      h = s.freeLocationForBufferBase(a);
    if (n) {
      const {
        offset: e,
        size: r
      } = t;
      0 === e && r === o.data.byteLength ? s.bindBufferBase(a, h) : s.bindBufferRange(a, h, e)
    } else s.getLastBindBaseLocation(a) !== h && s.bindBufferBase(a, h);
    const l = this._activeProgram._uniformBlockData[e].index;
    i.uniformBlockBindings[r] !== h && (i.uniformBlockBindings[r] = h, this._renderer.gl.uniformBlockBinding(i.program, l, h))
  }
  _setProgram(t) {
    if (this._activeProgram === t) return;
    this._activeProgram = t;
    const e = this._getProgramData(t);
    this._gl.useProgram(e.program)
  }
  _getProgramData(t) {
    return this._programDataHash[t._key] || this._createProgramData(t)
  }
  _createProgramData(t) {
    const e = t._key;
    return this._programDataHash[e] = function(t, e) {
      const r = Fh(t, t.VERTEX_SHADER, e.vertex),
        s = Fh(t, t.FRAGMENT_SHADER, e.fragment),
        i = t.createProgram();
      t.attachShader(i, r), t.attachShader(i, s);
      const n = e.transformFeedbackVaryings;
      n && ("function" != typeof t.transformFeedbackVaryings ? Bt("TransformFeedback is not supported but TransformFeedbackVaryings are given.") : t.transformFeedbackVaryings(i, n.names, "separate" === n.bufferMode ? t.SEPARATE_ATTRIBS : t.INTERLEAVED_ATTRIBS)), t.linkProgram(i), t.getProgramParameter(i, t.LINK_STATUS) || function(t, e, r, s) {
        t.getProgramParameter(e, t.LINK_STATUS) || (t.getShaderParameter(r, t.COMPILE_STATUS) || Wh(t, r), t.getShaderParameter(s, t.COMPILE_STATUS) || Wh(t, s), console.error("PixiJS Error: Could not initialize shader."), "" !== t.getProgramInfoLog(e) && console.warn("PixiJS Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(e)))
      }(t, i, r, s), e._attributeData = function(t, e, r = !1) {
        const s = {},
          i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
        for (let o = 0; o < i; o++) {
          const r = e.getActiveAttrib(t, o);
          if (r.name.startsWith("gl_")) continue;
          const i = Hh(e, r.type);
          s[r.name] = {
            location: 0,
            format: i,
            stride: Dr(i).stride,
            offset: 0,
            instance: !1,
            start: 0
          }
        }
        const n = Object.keys(s);
        if (r) {
          n.sort((t, e) => t > e ? 1 : -1);
          for (let r = 0; r < n.length; r++) s[n[r]].location = r, e.bindAttribLocation(t, r, n[r]);
          e.linkProgram(t)
        } else
          for (let o = 0; o < n.length; o++) s[n[o]].location = e.getAttribLocation(t, n[o]);
        return s
      }(i, t, !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertex)), e._uniformData = function(t, e) {
        const r = {},
          s = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
        for (let i = 0; i < s; i++) {
          const s = e.getActiveUniform(t, i),
            n = s.name.replace(/\[.*?\]$/, ""),
            o = !!s.name.match(/\[.*?\]$/),
            a = zh(e, s.type);
          r[n] = {
            name: n,
            index: i,
            type: a,
            size: s.size,
            isArray: o,
            value: Oh(a, s.size)
          }
        }
        return r
      }(i, t), e._uniformBlockData = function(t, e) {
        if (!e.ACTIVE_UNIFORM_BLOCKS) return {};
        const r = {},
          s = e.getProgramParameter(t, e.ACTIVE_UNIFORM_BLOCKS);
        for (let i = 0; i < s; i++) {
          const s = e.getActiveUniformBlockName(t, i),
            n = e.getUniformBlockIndex(t, s),
            o = e.getActiveUniformBlockParameter(t, i, e.UNIFORM_BLOCK_DATA_SIZE);
          r[s] = {
            name: s,
            index: n,
            size: o
          }
        }
        return r
      }(i, t), t.deleteShader(r), t.deleteShader(s);
      const o = {};
      for (const a in e._uniformData) {
        const r = e._uniformData[a];
        o[a] = {
          location: t.getUniformLocation(i, a),
          value: Oh(r.type, r.size)
        }
      }
      return new Ih(i, o)
    }(this._gl, t), this._programDataHash[e]
  }
  destroy() {
    for (const t of Object.keys(this._programDataHash)) this._programDataHash[t].destroy(), this._programDataHash[t] = null;
    this._programDataHash = null
  }
  _generateShaderSync(t, e) {
    return function(t, e) {
      const r = [],
        s = ["\n        var g = s.groups;\n        var sS = r.shader;\n        var p = s.glProgram;\n        var ugS = r.uniformGroup;\n        var resources;\n    "];
      let i = !1,
        n = 0;
      const o = e._getProgramData(t.glProgram);
      for (const h in t.groups) {
        const a = t.groups[h];
        r.push(`\n            resources = g[${h}].resources;\n        `);
        for (const l in a.resources) {
          const u = a.resources[l];
          if (u instanceof jr)
            if (u.ubo) {
              const e = t._uniformBindMap[h][Number(l)];
              r.push(`\n                        sS.bindUniformBlock(\n                            resources[${l}],\n                            '${e}',\n                            ${t.glProgram._uniformBlockData[e].index}\n                        );\n                    `)
            } else r.push(`\n                        ugS.updateUniformGroup(resources[${l}], p, sD);\n                    `);
          else if (u instanceof Gh) {
            const e = t._uniformBindMap[h][Number(l)];
            r.push(`\n                    sS.bindUniformBlock(\n                        resources[${l}],\n                        '${e}',\n                        ${t.glProgram._uniformBlockData[e].index}\n                    );\n                `)
          } else if (u instanceof $) {
            const a = t._uniformBindMap[h][l],
              u = o.uniformData[a];
            u && (i || (i = !0, s.push("\n                        var tS = r.texture;\n                        ")), e._gl.uniform1i(u.location, n), r.push(`\n                        tS.bind(resources[${l}], ${n});\n                    `), n++)
          }
        }
      }
      const a = [...s, ...r].join("\n");
      return new Function("r", "s", "sD", a)
    }(t, e)
  }
  resetState() {
    this._activeProgram = null
  }
}
Xh.extension = {
  type: [a.WebGLSystem],
  name: "shader"
};
const Yh = {
    f32: "if (cv !== v) {\n            cu.value = v;\n            gl.uniform1f(location, v);\n        }",
    "vec2<f32>": "if (cv[0] !== v[0] || cv[1] !== v[1]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            gl.uniform2f(location, v[0], v[1]);\n        }",
    "vec3<f32>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            gl.uniform3f(location, v[0], v[1], v[2]);\n        }",
    "vec4<f32>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            cv[3] = v[3];\n            gl.uniform4f(location, v[0], v[1], v[2], v[3]);\n        }",
    i32: "if (cv !== v) {\n            cu.value = v;\n            gl.uniform1i(location, v);\n        }",
    "vec2<i32>": "if (cv[0] !== v[0] || cv[1] !== v[1]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            gl.uniform2i(location, v[0], v[1]);\n        }",
    "vec3<i32>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            gl.uniform3i(location, v[0], v[1], v[2]);\n        }",
    "vec4<i32>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            cv[3] = v[3];\n            gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n        }",
    u32: "if (cv !== v) {\n            cu.value = v;\n            gl.uniform1ui(location, v);\n        }",
    "vec2<u32>": "if (cv[0] !== v[0] || cv[1] !== v[1]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            gl.uniform2ui(location, v[0], v[1]);\n        }",
    "vec3<u32>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            gl.uniform3ui(location, v[0], v[1], v[2]);\n        }",
    "vec4<u32>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            cv[3] = v[3];\n            gl.uniform4ui(location, v[0], v[1], v[2], v[3]);\n        }",
    bool: "if (cv !== v) {\n            cu.value = v;\n            gl.uniform1i(location, v);\n        }",
    "vec2<bool>": "if (cv[0] !== v[0] || cv[1] !== v[1]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            gl.uniform2i(location, v[0], v[1]);\n        }",
    "vec3<bool>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            gl.uniform3i(location, v[0], v[1], v[2]);\n        }",
    "vec4<bool>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            cv[3] = v[3];\n            gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n        }",
    "mat2x2<f32>": "gl.uniformMatrix2fv(location, false, v);",
    "mat3x3<f32>": "gl.uniformMatrix3fv(location, false, v);",
    "mat4x4<f32>": "gl.uniformMatrix4fv(location, false, v);"
  },
  $h = {
    f32: "gl.uniform1fv(location, v);",
    "vec2<f32>": "gl.uniform2fv(location, v);",
    "vec3<f32>": "gl.uniform3fv(location, v);",
    "vec4<f32>": "gl.uniform4fv(location, v);",
    "mat2x2<f32>": "gl.uniformMatrix2fv(location, false, v);",
    "mat3x3<f32>": "gl.uniformMatrix3fv(location, false, v);",
    "mat4x4<f32>": "gl.uniformMatrix4fv(location, false, v);",
    i32: "gl.uniform1iv(location, v);",
    "vec2<i32>": "gl.uniform2iv(location, v);",
    "vec3<i32>": "gl.uniform3iv(location, v);",
    "vec4<i32>": "gl.uniform4iv(location, v);",
    u32: "gl.uniform1iv(location, v);",
    "vec2<u32>": "gl.uniform2iv(location, v);",
    "vec3<u32>": "gl.uniform3iv(location, v);",
    "vec4<u32>": "gl.uniform4iv(location, v);",
    bool: "gl.uniform1iv(location, v);",
    "vec2<bool>": "gl.uniform2iv(location, v);",
    "vec3<bool>": "gl.uniform3iv(location, v);",
    "vec4<bool>": "gl.uniform4iv(location, v);"
  };
class jh {
  constructor(t) {
    this._cache = {}, this._uniformGroupSyncHash = {}, this._renderer = t, this.gl = null, this._cache = {}
  }
  contextChange(t) {
    this.gl = t
  }
  updateUniformGroup(t, e, r) {
    const s = this._renderer.shader._getProgramData(e);
    t.isStatic && t._dirtyId === s.uniformDirtyGroups[t.uid] || (s.uniformDirtyGroups[t.uid] = t._dirtyId, this._getUniformSyncFunction(t, e)(s.uniformData, t.uniforms, this._renderer, r))
  }
  _getUniformSyncFunction(t, e) {
    var r;
    return (null == (r = this._uniformGroupSyncHash[t._signature]) ? void 0 : r[e._key]) || this._createUniformSyncFunction(t, e)
  }
  _createUniformSyncFunction(t, e) {
    const r = this._uniformGroupSyncHash[t._signature] || (this._uniformGroupSyncHash[t._signature] = {}),
      s = this._getSignature(t, e._uniformData, "u");
    return this._cache[s] || (this._cache[s] = this._generateUniformsSync(t, e._uniformData)), r[e._key] = this._cache[s], r[e._key]
  }
  _generateUniformsSync(t, e) {
    return function(t, e) {
      const r = ["\n        var v = null;\n        var cv = null;\n        var cu = null;\n        var t = 0;\n        var gl = renderer.gl;\n        var name = null;\n    "];
      for (const s in t.uniforms) {
        if (!e[s]) {
          t.uniforms[s] instanceof jr ? t.uniforms[s].ubo ? r.push(`\n                        renderer.shader.bindUniformBlock(uv.${s}, "${s}");\n                    `) : r.push(`\n                        renderer.shader.updateUniformGroup(uv.${s});\n                    `) : t.uniforms[s] instanceof Gh && r.push(`\n                        renderer.shader.bindBufferResource(uv.${s}, "${s}");\n                    `);
          continue
        }
        const i = t.uniformStructures[s];
        let n = !1;
        for (let t = 0; t < xh.length; t++) {
          const e = xh[t];
          if (i.type === e.type && e.test(i)) {
            r.push(`name = "${s}";`, xh[t].uniform), n = !0;
            break
          }
        }
        if (!n) {
          const t = (1 === i.size ? Yh : $h)[i.type].replace("location", `ud["${s}"].location`);
          r.push(`\n            cu = ud["${s}"];\n            cv = cu.value;\n            v = uv["${s}"];\n            ${t};`)
        }
      }
      return new Function("ud", "uv", "renderer", "syncData", r.join("\n"))
    }(t, e)
  }
  _getSignature(t, e, r) {
    const s = t.uniforms,
      i = [`${r}-`];
    for (const n in s) i.push(n), e[n] && i.push(e[n].type);
    return i.join("-")
  }
  destroy() {
    this._renderer = null, this._cache = null
  }
}
jh.extension = {
  type: [a.WebGLSystem],
  name: "uniformGroup"
};
const qh = class t {
  constructor(t) {
    this._invertFrontFace = !1, this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = "none", this._blendEq = !1, this.map = [], this.map[0] = this.setBlend, this.map[1] = this.setOffset, this.map[2] = this.setCullFace, this.map[3] = this.setDepthTest, this.map[4] = this.setFrontFace, this.map[5] = this.setDepthMask, this.checks = [], this.defaultState = ts.for2d(), t.renderTarget.onRenderTargetChange.add(this)
  }
  onRenderTargetChange(t) {
    this._invertFrontFace = !t.isRoot, this._cullFace ? this.setFrontFace(this._frontFace) : this._frontFaceDirty = !0
  }
  contextChange(t) {
    this.gl = t, this.blendModesMap = function(t) {
      const e = {};
      if (e.normal = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.add = [t.ONE, t.ONE], e.multiply = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e.screen = [t.ONE, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e.none = [0, 0], e["normal-npm"] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e["add-npm"] = [t.SRC_ALPHA, t.ONE, t.ONE, t.ONE], e["screen-npm"] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e.erase = [t.ZERO, t.ONE_MINUS_SRC_ALPHA], t instanceof Me.get().getWebGLRenderingContext()) {
        const r = t.getExtension("EXT_blend_minmax");
        r && (e.min = [t.ONE, t.ONE, t.ONE, t.ONE, r.MIN_EXT, r.MIN_EXT], e.max = [t.ONE, t.ONE, t.ONE, t.ONE, r.MAX_EXT, r.MAX_EXT])
      } else e.min = [t.ONE, t.ONE, t.ONE, t.ONE, t.MIN, t.MIN], e.max = [t.ONE, t.ONE, t.ONE, t.ONE, t.MAX, t.MAX];
      return e
    }(t), this.resetState()
  }
  set(t) {
    if (t || (t = this.defaultState), this.stateId !== t.data) {
      let e = this.stateId ^ t.data,
        r = 0;
      for (; e;) 1 & e && this.map[r].call(this, !!(t.data & 1 << r)), e >>= 1, r++;
      this.stateId = t.data
    }
    for (let e = 0; e < this.checks.length; e++) this.checks[e](this, t)
  }
  forceState(t) {
    t || (t = this.defaultState);
    for (let e = 0; e < this.map.length; e++) this.map[e].call(this, !!(t.data & 1 << e));
    for (let e = 0; e < this.checks.length; e++) this.checks[e](this, t);
    this.stateId = t.data
  }
  setBlend(e) {
    this._updateCheck(t._checkBlendMode, e), this.gl[e ? "enable" : "disable"](this.gl.BLEND)
  }
  setOffset(e) {
    this._updateCheck(t._checkPolygonOffset, e), this.gl[e ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL)
  }
  setDepthTest(t) {
    this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST)
  }
  setDepthMask(t) {
    this.gl.depthMask(t)
  }
  setCullFace(t) {
    this._cullFace = t, this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE), this._cullFace && this._frontFaceDirty && this.setFrontFace(this._frontFace)
  }
  setFrontFace(t) {
    this._frontFace = t, this._frontFaceDirty = !1;
    const e = this._invertFrontFace ? !t : t;
    this._glFrontFace !== e && (this._glFrontFace = e, this.gl.frontFace(this.gl[e ? "CW" : "CCW"]))
  }
  setBlendMode(t) {
    if (this.blendModesMap[t] || (t = "normal"), t === this.blendMode) return;
    this.blendMode = t;
    const e = this.blendModesMap[t],
      r = this.gl;
    2 === e.length ? r.blendFunc(e[0], e[1]) : r.blendFuncSeparate(e[0], e[1], e[2], e[3]), 6 === e.length ? (this._blendEq = !0, r.blendEquationSeparate(e[4], e[5])) : this._blendEq && (this._blendEq = !1, r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD))
  }
  setPolygonOffset(t, e) {
    this.gl.polygonOffset(t, e)
  }
  resetState() {
    this._glFrontFace = !1, this._frontFace = !1, this._cullFace = !1, this._frontFaceDirty = !1, this._invertFrontFace = !1, this.gl.frontFace(this.gl.CCW), this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = "", this.setBlendMode("normal")
  }
  _updateCheck(t, e) {
    const r = this.checks.indexOf(t);
    e && -1 === r ? this.checks.push(t) : e || -1 === r || this.checks.splice(r, 1)
  }
  static _checkBlendMode(t, e) {
    t.setBlendMode(e.blendMode)
  }
  static _checkPolygonOffset(t, e) {
    t.setPolygonOffset(1, e.polygonOffset)
  }
  destroy() {
    this.gl = null, this.checks.length = 0
  }
};
qh.extension = {
  type: [a.WebGLSystem],
  name: "state"
};
let Kh = qh;
class Zh {
  constructor(t) {
    this.target = th.TEXTURE_2D, this.texture = t, this.width = -1, this.height = -1, this.type = eh.UNSIGNED_BYTE, this.internalFormat = Ja.RGBA, this.format = Ja.RGBA, this.samplerType = 0
  }
}
const Qh = {
    id: "buffer",
    upload(t, e, r) {
      e.width === t.width || e.height === t.height ? r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, t.width, t.height, e.format, e.type, t.resource) : r.texImage2D(e.target, 0, e.internalFormat, t.width, t.height, 0, e.format, e.type, t.resource), e.width = t.width, e.height = t.height
    }
  },
  Jh = {
    "bc1-rgba-unorm": !0,
    "bc1-rgba-unorm-srgb": !0,
    "bc2-rgba-unorm": !0,
    "bc2-rgba-unorm-srgb": !0,
    "bc3-rgba-unorm": !0,
    "bc3-rgba-unorm-srgb": !0,
    "bc4-r-unorm": !0,
    "bc4-r-snorm": !0,
    "bc5-rg-unorm": !0,
    "bc5-rg-snorm": !0,
    "bc6h-rgb-ufloat": !0,
    "bc6h-rgb-float": !0,
    "bc7-rgba-unorm": !0,
    "bc7-rgba-unorm-srgb": !0,
    "etc2-rgb8unorm": !0,
    "etc2-rgb8unorm-srgb": !0,
    "etc2-rgb8a1unorm": !0,
    "etc2-rgb8a1unorm-srgb": !0,
    "etc2-rgba8unorm": !0,
    "etc2-rgba8unorm-srgb": !0,
    "eac-r11unorm": !0,
    "eac-r11snorm": !0,
    "eac-rg11unorm": !0,
    "eac-rg11snorm": !0,
    "astc-4x4-unorm": !0,
    "astc-4x4-unorm-srgb": !0,
    "astc-5x4-unorm": !0,
    "astc-5x4-unorm-srgb": !0,
    "astc-5x5-unorm": !0,
    "astc-5x5-unorm-srgb": !0,
    "astc-6x5-unorm": !0,
    "astc-6x5-unorm-srgb": !0,
    "astc-6x6-unorm": !0,
    "astc-6x6-unorm-srgb": !0,
    "astc-8x5-unorm": !0,
    "astc-8x5-unorm-srgb": !0,
    "astc-8x6-unorm": !0,
    "astc-8x6-unorm-srgb": !0,
    "astc-8x8-unorm": !0,
    "astc-8x8-unorm-srgb": !0,
    "astc-10x5-unorm": !0,
    "astc-10x5-unorm-srgb": !0,
    "astc-10x6-unorm": !0,
    "astc-10x6-unorm-srgb": !0,
    "astc-10x8-unorm": !0,
    "astc-10x8-unorm-srgb": !0,
    "astc-10x10-unorm": !0,
    "astc-10x10-unorm-srgb": !0,
    "astc-12x10-unorm": !0,
    "astc-12x10-unorm-srgb": !0,
    "astc-12x12-unorm": !0,
    "astc-12x12-unorm-srgb": !0
  },
  tl = {
    id: "compressed",
    upload(t, e, r) {
      r.pixelStorei(r.UNPACK_ALIGNMENT, 4);
      let s = t.pixelWidth,
        i = t.pixelHeight;
      const n = !!Jh[t.format];
      for (let o = 0; o < t.resource.length; o++) {
        const a = t.resource[o];
        n ? r.compressedTexImage2D(r.TEXTURE_2D, o, e.internalFormat, s, i, 0, a) : r.texImage2D(r.TEXTURE_2D, o, e.internalFormat, s, i, 0, e.format, e.type, a), s = Math.max(s >> 1, 1), i = Math.max(i >> 1, 1)
      }
    }
  },
  el = {
    id: "image",
    upload(t, e, r, s) {
      const i = e.width,
        n = e.height,
        o = t.pixelWidth,
        a = t.pixelHeight,
        h = t.resourceWidth,
        l = t.resourceHeight;
      h < o || l < a ? (i === o && n === a || r.texImage2D(e.target, 0, e.internalFormat, o, a, 0, e.format, e.type, null), 2 === s ? r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, h, l, e.format, e.type, t.resource) : r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, e.format, e.type, t.resource)) : i === o && n === a ? r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, e.format, e.type, t.resource) : 2 === s ? r.texImage2D(e.target, 0, e.internalFormat, o, a, 0, e.format, e.type, t.resource) : r.texImage2D(e.target, 0, e.internalFormat, e.format, e.type, t.resource), e.width = o, e.height = a
    }
  },
  rl = {
    id: "video",
    upload(t, e, r, s) {
      t.isValid ? el.upload(t, e, r, s) : r.texImage2D(e.target, 0, e.internalFormat, 1, 1, 0, e.format, e.type, null)
    }
  },
  sl = {
    linear: 9729,
    nearest: 9728
  },
  il = {
    linear: {
      linear: 9987,
      nearest: 9985
    },
    nearest: {
      linear: 9986,
      nearest: 9984
    }
  },
  nl = {
    "clamp-to-edge": 33071,
    repeat: 10497,
    "mirror-repeat": 33648
  },
  ol = {
    never: 512,
    less: 513,
    equal: 514,
    "less-equal": 515,
    greater: 516,
    "not-equal": 517,
    "greater-equal": 518,
    always: 519
  };

function al(t, e, r, s, i, n, o, a) {
  const h = n;
  if (!a || "repeat" !== t.addressModeU || "repeat" !== t.addressModeV || "repeat" !== t.addressModeW) {
    const r = nl[o ? "clamp-to-edge" : t.addressModeU],
      s = nl[o ? "clamp-to-edge" : t.addressModeV],
      n = nl[o ? "clamp-to-edge" : t.addressModeW];
    e[i](h, e.TEXTURE_WRAP_S, r), e[i](h, e.TEXTURE_WRAP_T, s), e.TEXTURE_WRAP_R && e[i](h, e.TEXTURE_WRAP_R, n)
  }
  if (a && "linear" === t.magFilter || e[i](h, e.TEXTURE_MAG_FILTER, sl[t.magFilter]), r) {
    if (!a || "linear" !== t.mipmapFilter) {
      const r = il[t.minFilter][t.mipmapFilter];
      e[i](h, e.TEXTURE_MIN_FILTER, r)
    }
  } else e[i](h, e.TEXTURE_MIN_FILTER, sl[t.minFilter]);
  if (s && t.maxAnisotropy > 1) {
    const r = Math.min(t.maxAnisotropy, e.getParameter(s.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
    e[i](h, s.TEXTURE_MAX_ANISOTROPY_EXT, r)
  }
  t.compare && e[i](h, e.TEXTURE_COMPARE_FUNC, ol[t.compare])
}
class hl {
  constructor(t) {
    this.managedTextures = [], this._glTextures = Object.create(null), this._glSamplers = Object.create(null), this._boundTextures = [], this._activeTextureLocation = -1, this._boundSamplers = Object.create(null), this._uploads = {
      image: el,
      buffer: Qh,
      video: rl,
      compressed: tl
    }, this._premultiplyAlpha = !1, this._useSeparateSamplers = !1, this._renderer = t, this._renderer.renderableGC.addManagedHash(this, "_glTextures"), this._renderer.renderableGC.addManagedHash(this, "_glSamplers")
  }
  contextChange(t) {
    this._gl = t, this._mapFormatToInternalFormat || (this._mapFormatToInternalFormat = function(t, e) {
      let r = {},
        s = t.RGBA;
      return t instanceof Me.get().getWebGLRenderingContext() ? e.srgb && (r = {
        "rgba8unorm-srgb": e.srgb.SRGB8_ALPHA8_EXT,
        "bgra8unorm-srgb": e.srgb.SRGB8_ALPHA8_EXT
      }) : (r = {
        "rgba8unorm-srgb": t.SRGB8_ALPHA8,
        "bgra8unorm-srgb": t.SRGB8_ALPHA8
      }, s = t.RGBA8), {
        r8unorm: t.R8,
        r8snorm: t.R8_SNORM,
        r8uint: t.R8UI,
        r8sint: t.R8I,
        r16uint: t.R16UI,
        r16sint: t.R16I,
        r16float: t.R16F,
        rg8unorm: t.RG8,
        rg8snorm: t.RG8_SNORM,
        rg8uint: t.RG8UI,
        rg8sint: t.RG8I,
        r32uint: t.R32UI,
        r32sint: t.R32I,
        r32float: t.R32F,
        rg16uint: t.RG16UI,
        rg16sint: t.RG16I,
        rg16float: t.RG16F,
        rgba8unorm: t.RGBA,
        ...r,
        rgba8snorm: t.RGBA8_SNORM,
        rgba8uint: t.RGBA8UI,
        rgba8sint: t.RGBA8I,
        bgra8unorm: s,
        rgb9e5ufloat: t.RGB9_E5,
        rgb10a2unorm: t.RGB10_A2,
        rg11b10ufloat: t.R11F_G11F_B10F,
        rg32uint: t.RG32UI,
        rg32sint: t.RG32I,
        rg32float: t.RG32F,
        rgba16uint: t.RGBA16UI,
        rgba16sint: t.RGBA16I,
        rgba16float: t.RGBA16F,
        rgba32uint: t.RGBA32UI,
        rgba32sint: t.RGBA32I,
        rgba32float: t.RGBA32F,
        stencil8: t.STENCIL_INDEX8,
        depth16unorm: t.DEPTH_COMPONENT16,
        depth24plus: t.DEPTH_COMPONENT24,
        "depth24plus-stencil8": t.DEPTH24_STENCIL8,
        depth32float: t.DEPTH_COMPONENT32F,
        "depth32float-stencil8": t.DEPTH32F_STENCIL8,
        ...e.s3tc ? {
          "bc1-rgba-unorm": e.s3tc.COMPRESSED_RGBA_S3TC_DXT1_EXT,
          "bc2-rgba-unorm": e.s3tc.COMPRESSED_RGBA_S3TC_DXT3_EXT,
          "bc3-rgba-unorm": e.s3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT
        } : {},
        ...e.s3tc_sRGB ? {
          "bc1-rgba-unorm-srgb": e.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
          "bc2-rgba-unorm-srgb": e.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
          "bc3-rgba-unorm-srgb": e.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
        } : {},
        ...e.rgtc ? {
          "bc4-r-unorm": e.rgtc.COMPRESSED_RED_RGTC1_EXT,
          "bc4-r-snorm": e.rgtc.COMPRESSED_SIGNED_RED_RGTC1_EXT,
          "bc5-rg-unorm": e.rgtc.COMPRESSED_RED_GREEN_RGTC2_EXT,
          "bc5-rg-snorm": e.rgtc.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
        } : {},
        ...e.bptc ? {
          "bc6h-rgb-float": e.bptc.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT,
          "bc6h-rgb-ufloat": e.bptc.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT,
          "bc7-rgba-unorm": e.bptc.COMPRESSED_RGBA_BPTC_UNORM_EXT,
          "bc7-rgba-unorm-srgb": e.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
        } : {},
        ...e.etc ? {
          "etc2-rgb8unorm": e.etc.COMPRESSED_RGB8_ETC2,
          "etc2-rgb8unorm-srgb": e.etc.COMPRESSED_SRGB8_ETC2,
          "etc2-rgb8a1unorm": e.etc.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,
          "etc2-rgb8a1unorm-srgb": e.etc.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,
          "etc2-rgba8unorm": e.etc.COMPRESSED_RGBA8_ETC2_EAC,
          "etc2-rgba8unorm-srgb": e.etc.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC,
          "eac-r11unorm": e.etc.COMPRESSED_R11_EAC,
          "eac-rg11unorm": e.etc.COMPRESSED_SIGNED_RG11_EAC
        } : {},
        ...e.astc ? {
          "astc-4x4-unorm": e.astc.COMPRESSED_RGBA_ASTC_4x4_KHR,
          "astc-4x4-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR,
          "astc-5x4-unorm": e.astc.COMPRESSED_RGBA_ASTC_5x4_KHR,
          "astc-5x4-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR,
          "astc-5x5-unorm": e.astc.COMPRESSED_RGBA_ASTC_5x5_KHR,
          "astc-5x5-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR,
          "astc-6x5-unorm": e.astc.COMPRESSED_RGBA_ASTC_6x5_KHR,
          "astc-6x5-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR,
          "astc-6x6-unorm": e.astc.COMPRESSED_RGBA_ASTC_6x6_KHR,
          "astc-6x6-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR,
          "astc-8x5-unorm": e.astc.COMPRESSED_RGBA_ASTC_8x5_KHR,
          "astc-8x5-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR,
          "astc-8x6-unorm": e.astc.COMPRESSED_RGBA_ASTC_8x6_KHR,
          "astc-8x6-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR,
          "astc-8x8-unorm": e.astc.COMPRESSED_RGBA_ASTC_8x8_KHR,
          "astc-8x8-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR,
          "astc-10x5-unorm": e.astc.COMPRESSED_RGBA_ASTC_10x5_KHR,
          "astc-10x5-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR,
          "astc-10x6-unorm": e.astc.COMPRESSED_RGBA_ASTC_10x6_KHR,
          "astc-10x6-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR,
          "astc-10x8-unorm": e.astc.COMPRESSED_RGBA_ASTC_10x8_KHR,
          "astc-10x8-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR,
          "astc-10x10-unorm": e.astc.COMPRESSED_RGBA_ASTC_10x10_KHR,
          "astc-10x10-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR,
          "astc-12x10-unorm": e.astc.COMPRESSED_RGBA_ASTC_12x10_KHR,
          "astc-12x10-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR,
          "astc-12x12-unorm": e.astc.COMPRESSED_RGBA_ASTC_12x12_KHR,
          "astc-12x12-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
        } : {}
      }
    }(t, this._renderer.context.extensions), this._mapFormatToType = function(t) {
      return {
        r8unorm: t.UNSIGNED_BYTE,
        r8snorm: t.BYTE,
        r8uint: t.UNSIGNED_BYTE,
        r8sint: t.BYTE,
        r16uint: t.UNSIGNED_SHORT,
        r16sint: t.SHORT,
        r16float: t.HALF_FLOAT,
        rg8unorm: t.UNSIGNED_BYTE,
        rg8snorm: t.BYTE,
        rg8uint: t.UNSIGNED_BYTE,
        rg8sint: t.BYTE,
        r32uint: t.UNSIGNED_INT,
        r32sint: t.INT,
        r32float: t.FLOAT,
        rg16uint: t.UNSIGNED_SHORT,
        rg16sint: t.SHORT,
        rg16float: t.HALF_FLOAT,
        rgba8unorm: t.UNSIGNED_BYTE,
        "rgba8unorm-srgb": t.UNSIGNED_BYTE,
        rgba8snorm: t.BYTE,
        rgba8uint: t.UNSIGNED_BYTE,
        rgba8sint: t.BYTE,
        bgra8unorm: t.UNSIGNED_BYTE,
        "bgra8unorm-srgb": t.UNSIGNED_BYTE,
        rgb9e5ufloat: t.UNSIGNED_INT_5_9_9_9_REV,
        rgb10a2unorm: t.UNSIGNED_INT_2_10_10_10_REV,
        rg11b10ufloat: t.UNSIGNED_INT_10F_11F_11F_REV,
        rg32uint: t.UNSIGNED_INT,
        rg32sint: t.INT,
        rg32float: t.FLOAT,
        rgba16uint: t.UNSIGNED_SHORT,
        rgba16sint: t.SHORT,
        rgba16float: t.HALF_FLOAT,
        rgba32uint: t.UNSIGNED_INT,
        rgba32sint: t.INT,
        rgba32float: t.FLOAT,
        stencil8: t.UNSIGNED_BYTE,
        depth16unorm: t.UNSIGNED_SHORT,
        depth24plus: t.UNSIGNED_INT,
        "depth24plus-stencil8": t.UNSIGNED_INT_24_8,
        depth32float: t.FLOAT,
        "depth32float-stencil8": t.FLOAT_32_UNSIGNED_INT_24_8_REV
      }
    }(t), this._mapFormatToFormat = function(t) {
      return {
        r8unorm: t.RED,
        r8snorm: t.RED,
        r8uint: t.RED,
        r8sint: t.RED,
        r16uint: t.RED,
        r16sint: t.RED,
        r16float: t.RED,
        rg8unorm: t.RG,
        rg8snorm: t.RG,
        rg8uint: t.RG,
        rg8sint: t.RG,
        r32uint: t.RED,
        r32sint: t.RED,
        r32float: t.RED,
        rg16uint: t.RG,
        rg16sint: t.RG,
        rg16float: t.RG,
        rgba8unorm: t.RGBA,
        "rgba8unorm-srgb": t.RGBA,
        rgba8snorm: t.RGBA,
        rgba8uint: t.RGBA,
        rgba8sint: t.RGBA,
        bgra8unorm: t.RGBA,
        "bgra8unorm-srgb": t.RGBA,
        rgb9e5ufloat: t.RGB,
        rgb10a2unorm: t.RGBA,
        rg11b10ufloat: t.RGB,
        rg32uint: t.RG,
        rg32sint: t.RG,
        rg32float: t.RG,
        rgba16uint: t.RGBA,
        rgba16sint: t.RGBA,
        rgba16float: t.RGBA,
        rgba32uint: t.RGBA,
        rgba32sint: t.RGBA,
        rgba32float: t.RGBA,
        stencil8: t.STENCIL_INDEX8,
        depth16unorm: t.DEPTH_COMPONENT,
        depth24plus: t.DEPTH_COMPONENT,
        "depth24plus-stencil8": t.DEPTH_STENCIL,
        depth32float: t.DEPTH_COMPONENT,
        "depth32float-stencil8": t.DEPTH_STENCIL
      }
    }(t)), this._glTextures = Object.create(null), this._glSamplers = Object.create(null), this._boundSamplers = Object.create(null), this._premultiplyAlpha = !1;
    for (let e = 0; e < 16; e++) this.bind(Z.EMPTY, e)
  }
  initSource(t) {
    this.bind(t)
  }
  bind(t, e = 0) {
    const r = t.source;
    t ? (this.bindSource(r, e), this._useSeparateSamplers && this._bindSampler(r.style, e)) : (this.bindSource(null, e), this._useSeparateSamplers && this._bindSampler(null, e))
  }
  bindSource(t, e = 0) {
    const r = this._gl;
    if (t._touched = this._renderer.textureGC.count, this._boundTextures[e] !== t) {
      this._boundTextures[e] = t, this._activateLocation(e), t || (t = Z.EMPTY.source);
      const s = this.getGlSource(t);
      r.bindTexture(s.target, s.texture)
    }
  }
  _bindSampler(t, e = 0) {
    const r = this._gl;
    if (!t) return this._boundSamplers[e] = null, void r.bindSampler(e, null);
    const s = this._getGlSampler(t);
    this._boundSamplers[e] !== s && (this._boundSamplers[e] = s, r.bindSampler(e, s))
  }
  unbind(t) {
    const e = t.source,
      r = this._boundTextures,
      s = this._gl;
    for (let i = 0; i < r.length; i++)
      if (r[i] === e) {
        this._activateLocation(i);
        const t = this.getGlSource(e);
        s.bindTexture(t.target, null), r[i] = null
      }
  }
  _activateLocation(t) {
    this._activeTextureLocation !== t && (this._activeTextureLocation = t, this._gl.activeTexture(this._gl.TEXTURE0 + t))
  }
  _initSource(t) {
    const e = this._gl,
      r = new Zh(e.createTexture());
    if (r.type = this._mapFormatToType[t.format], r.internalFormat = this._mapFormatToInternalFormat[t.format], r.format = this._mapFormatToFormat[t.format], t.autoGenerateMipmaps && (this._renderer.context.supports.nonPowOf2mipmaps || t.isPowerOfTwo)) {
      const e = Math.max(t.width, t.height);
      t.mipLevelCount = Math.floor(Math.log2(e)) + 1
    }
    return this._glTextures[t.uid] = r, this.managedTextures.includes(t) || (t.on("update", this.onSourceUpdate, this), t.on("resize", this.onSourceUpdate, this), t.on("styleChange", this.onStyleChange, this), t.on("destroy", this.onSourceDestroy, this), t.on("unload", this.onSourceUnload, this), t.on("updateMipmaps", this.onUpdateMipmaps, this), this.managedTextures.push(t)), this.onSourceUpdate(t), this.updateStyle(t, !1), r
  }
  onStyleChange(t) {
    this.updateStyle(t, !1)
  }
  updateStyle(t, e) {
    const r = this._gl,
      s = this.getGlSource(t);
    r.bindTexture(r.TEXTURE_2D, s.texture), this._boundTextures[this._activeTextureLocation] = t, al(t.style, r, t.mipLevelCount > 1, this._renderer.context.extensions.anisotropicFiltering, "texParameteri", r.TEXTURE_2D, !this._renderer.context.supports.nonPowOf2wrapping && !t.isPowerOfTwo, e)
  }
  onSourceUnload(t) {
    const e = this._glTextures[t.uid];
    e && (this.unbind(t), this._glTextures[t.uid] = null, this._gl.deleteTexture(e.texture))
  }
  onSourceUpdate(t) {
    const e = this._gl,
      r = this.getGlSource(t);
    e.bindTexture(e.TEXTURE_2D, r.texture), this._boundTextures[this._activeTextureLocation] = t;
    const s = "premultiply-alpha-on-upload" === t.alphaMode;
    this._premultiplyAlpha !== s && (this._premultiplyAlpha = s, e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s)), this._uploads[t.uploadMethodId] ? this._uploads[t.uploadMethodId].upload(t, r, e, this._renderer.context.webGLVersion) : e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, t.pixelWidth, t.pixelHeight, 0, e.RGBA, e.UNSIGNED_BYTE, null), t.autoGenerateMipmaps && t.mipLevelCount > 1 && this.onUpdateMipmaps(t, !1)
  }
  onUpdateMipmaps(t, e = !0) {
    e && this.bindSource(t, 0);
    const r = this.getGlSource(t);
    this._gl.generateMipmap(r.target)
  }
  onSourceDestroy(t) {
    t.off("destroy", this.onSourceDestroy, this), t.off("update", this.onSourceUpdate, this), t.off("resize", this.onSourceUpdate, this), t.off("unload", this.onSourceUnload, this), t.off("styleChange", this.onStyleChange, this), t.off("updateMipmaps", this.onUpdateMipmaps, this), this.managedTextures.splice(this.managedTextures.indexOf(t), 1), this.onSourceUnload(t)
  }
  _initSampler(t) {
    const e = this._gl,
      r = this._gl.createSampler();
    return this._glSamplers[t._resourceId] = r, al(t, e, this._boundTextures[this._activeTextureLocation].mipLevelCount > 1, this._renderer.context.extensions.anisotropicFiltering, "samplerParameteri", r, !1, !0), this._glSamplers[t._resourceId]
  }
  _getGlSampler(t) {
    return this._glSamplers[t._resourceId] || this._initSampler(t)
  }
  getGlSource(t) {
    return this._glTextures[t.uid] || this._initSource(t)
  }
  generateCanvas(t) {
    const {
      pixels: e,
      width: r,
      height: s
    } = this.getPixels(t), i = Me.get().createCanvas();
    i.width = r, i.height = s;
    const n = i.getContext("2d");
    if (n) {
      const t = n.createImageData(r, s);
      t.data.set(e), n.putImageData(t, 0, 0)
    }
    return i
  }
  getPixels(t) {
    const e = t.source.resolution,
      r = t.frame,
      s = Math.max(Math.round(r.width * e), 1),
      i = Math.max(Math.round(r.height * e), 1),
      n = new Uint8Array(4 * s * i),
      o = this._renderer,
      a = o.renderTarget.getRenderTarget(t),
      h = o.renderTarget.getGpuRenderTarget(a),
      l = o.gl;
    return l.bindFramebuffer(l.FRAMEBUFFER, h.resolveTargetFramebuffer), l.readPixels(Math.round(r.x * e), Math.round(r.y * e), s, i, l.RGBA, l.UNSIGNED_BYTE, n), {
      pixels: new Uint8ClampedArray(n.buffer),
      width: s,
      height: i
    }
  }
  destroy() {
    this.managedTextures.slice().forEach(t => this.onSourceDestroy(t)), this.managedTextures = null, this._renderer = null
  }
  resetState() {
    this._activeTextureLocation = -1, this._boundTextures.fill(Z.EMPTY.source), this._boundSamplers = Object.create(null);
    const t = this._gl;
    this._premultiplyAlpha = !1, t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._premultiplyAlpha)
  }
}
hl.extension = {
  type: [a.WebGLSystem],
  name: "texture"
};
class ll {
  contextChange(t) {
    const e = new jr({
        uColor: {
          value: new Float32Array([1, 1, 1, 1]),
          type: "vec4<f32>"
        },
        uTransformMatrix: {
          value: new v,
          type: "mat3x3<f32>"
        },
        uRound: {
          value: 0,
          type: "f32"
        }
      }),
      r = t.limits.maxBatchableTextures,
      s = un({
        name: "graphics",
        bits: [dn, yn(r), La, vn]
      });
    this.shader = new Zr({
      glProgram: s,
      resources: {
        localUniforms: e,
        batchSamplers: Sn(r)
      }
    })
  }
  execute(t, e) {
    const r = e.context,
      s = r.customShader || this.shader,
      i = t.renderer,
      n = i.graphicsContext,
      {
        batcher: o,
        instructions: a
      } = n.getContextRenderData(r);
    s.groups[0] = i.globalUniforms.bindGroup, i.state.set(t.state), i.shader.bind(s), i.geometry.bind(o.geometry, s.glProgram);
    const h = a.instructions;
    for (let l = 0; l < a.instructionSize; l++) {
      const t = h[l];
      if (t.size) {
        for (let e = 0; e < t.textures.count; e++) i.texture.bind(t.textures.textures[e], e);
        i.geometry.draw(t.topology, t.size, t.start)
      }
    }
  }
  destroy() {
    this.shader.destroy(!0), this.shader = null
  }
}
ll.extension = {
  type: [a.WebGLPipesAdaptor],
  name: "graphics"
};
class ul {
  init() {
    const t = un({
      name: "mesh",
      bits: [La, za, vn]
    });
    this._shader = new Zr({
      glProgram: t,
      resources: {
        uTexture: Z.EMPTY.source,
        textureUniforms: {
          uTextureMatrix: {
            type: "mat3x3<f32>",
            value: new v
          }
        }
      }
    })
  }
  execute(t, e) {
    const r = t.renderer;
    let s = e._shader;
    if (s) {
      if (!s.glProgram) return void Bt("Mesh shader has no glProgram", e.shader)
    } else {
      s = this._shader;
      const t = e.texture,
        r = t.source;
      s.resources.uTexture = r, s.resources.uSampler = r.style, s.resources.textureUniforms.uniforms.uTextureMatrix = t.textureMatrix.mapCoord
    }
    s.groups[100] = r.globalUniforms.bindGroup, s.groups[101] = t.localUniformsBindGroup, r.encoder.draw({
      geometry: e._geometry,
      shader: s,
      state: e.state
    })
  }
  destroy() {
    this._shader.destroy(!0), this._shader = null
  }
}
ul.extension = {
  type: [a.WebGLPipesAdaptor],
  name: "mesh"
};
class cl {
  constructor(t) {
    this._renderer = t
  }
  updateRenderable() {}
  destroyRenderable() {}
  validateRenderable() {
    return !1
  }
  addRenderable(t, e) {
    this._renderer.renderPipes.batch.break(e), e.add(t)
  }
  execute(t) {
    t.isRenderable && t.render(this._renderer)
  }
  destroy() {
    this._renderer = null
  }
}
cl.extension = {
  type: [a.WebGLPipes, a.WebGPUPipes, a.CanvasPipes],
  name: "customRender"
};
class dl {
  constructor() {
    this.batcherName = "default", this.topology = "triangle-list", this.attributeSize = 4, this.indexSize = 6, this.packAsQuad = !0, this.roundPixels = 0, this._attributeStart = 0, this._batcher = null, this._batch = null
  }
  get blendMode() {
    return this.renderable.groupBlendMode
  }
  get color() {
    return this.renderable.groupColorAlpha
  }
  reset() {
    this.renderable = null, this.texture = null, this._batcher = null, this._batch = null, this.bounds = null
  }
  destroy() {}
}

function pl(t, e) {
  const r = t.instructionSet,
    s = r.instructions;
  for (let i = 0; i < r.instructionSize; i++) {
    const t = s[i];
    e[t.renderPipeId].execute(t)
  }
}
const fl = new v;
class ml {
  constructor(t) {
    this._renderer = t
  }
  addRenderGroup(t, e) {
    t.isCachedAsTexture ? this._addRenderableCacheAsTexture(t, e) : this._addRenderableDirect(t, e)
  }
  execute(t) {
    t.isRenderable && (t.isCachedAsTexture ? this._executeCacheAsTexture(t) : this._executeDirect(t))
  }
  destroy() {
    this._renderer = null
  }
  _addRenderableDirect(t, e) {
    this._renderer.renderPipes.batch.break(e), t._batchableRenderGroup && (Gt.return(t._batchableRenderGroup), t._batchableRenderGroup = null), e.add(t)
  }
  _addRenderableCacheAsTexture(t, e) {
    const r = t._batchableRenderGroup ?? (t._batchableRenderGroup = Gt.get(dl));
    r.renderable = t.root, r.transform = t.root.relativeGroupTransform, r.texture = t.texture, r.bounds = t._textureBounds, e.add(t), this._renderer.renderPipes.batch.addToBatch(r, e)
  }
  _executeCacheAsTexture(t) {
    if (t.textureNeedsUpdate) {
      t.textureNeedsUpdate = !1;
      const e = fl.identity().translate(-t._textureBounds.x, -t._textureBounds.y);
      this._renderer.renderTarget.push(t.texture, !0, null, t.texture.frame), this._renderer.globalUniforms.push({
        worldTransformMatrix: e,
        worldColor: 4294967295
      }), pl(t, this._renderer.renderPipes), this._renderer.renderTarget.finishRenderPass(), this._renderer.renderTarget.pop(), this._renderer.globalUniforms.pop()
    }
    t._batchableRenderGroup._batcher.updateElement(t._batchableRenderGroup), t._batchableRenderGroup._batcher.geometry.buffers[0].update()
  }
  _executeDirect(t) {
    this._renderer.globalUniforms.push({
      worldTransformMatrix: t.inverseParentTextureTransform,
      worldColor: t.worldColorAlpha
    }), pl(t, this._renderer.renderPipes), this._renderer.globalUniforms.pop()
  }
}

function gl(t, e) {
  e || (e = 0);
  for (let r = e; r < t.length && t[r]; r++) t[r] = null
}
ml.extension = {
  type: [a.WebGLPipes, a.WebGPUPipes, a.CanvasPipes],
  name: "renderGroup"
};
const _l = new _e;

function xl(t, e = !1) {
  ! function(t) {
    const e = t.root;
    let r;
    if (t.renderGroupParent) {
      const s = t.renderGroupParent;
      t.worldTransform.appendFrom(e.relativeGroupTransform, s.worldTransform), t.worldColor = Zt(e.groupColor, s.worldColor), r = e.groupAlpha * s.worldAlpha
    } else t.worldTransform.copyFrom(e.localTransform), t.worldColor = e.localColor, r = e.localAlpha;
    r = r < 0 ? 0 : r > 1 ? 1 : r, t.worldAlpha = r, t.worldColorAlpha = t.worldColor + (255 * r << 24)
  }(t);
  const r = t.childrenToUpdate,
    s = t.updateTick++;
  for (const i in r) {
    const e = Number(i),
      n = r[i],
      o = n.list,
      a = n.index;
    for (let r = 0; r < a; r++) {
      const i = o[r];
      i.parentRenderGroup === t && i.relativeRenderGroupDepth === e && yl(i, s, 0)
    }
    gl(o, a), n.index = 0
  }
  if (e)
    for (let i = 0; i < t.renderGroupChildren.length; i++) xl(t.renderGroupChildren[i], e)
}

function yl(t, e, r) {
  if (e === t.updateTick) return;
  t.updateTick = e, t.didChange = !1;
  const s = t.localTransform;
  t.updateLocalTransform();
  const i = t.parent;
  if (i && !i.renderGroup ? (r |= t._updateFlags, t.relativeGroupTransform.appendFrom(s, i.relativeGroupTransform), 7 & r && bl(t, i, r)) : (r = t._updateFlags, t.relativeGroupTransform.copyFrom(s), 7 & r && bl(t, _l, r)), !t.renderGroup) {
    const s = t.children,
      i = s.length;
    for (let t = 0; t < i; t++) yl(s[t], e, r);
    const n = t.parentRenderGroup,
      o = t;
    o.renderPipeId && !n.structureDidChange && n.updateRenderable(o)
  }
}

function bl(t, e, r) {
  if (1 & r) {
    t.groupColor = Zt(t.localColor, e.groupColor);
    let r = t.localAlpha * e.groupAlpha;
    r = r < 0 ? 0 : r > 1 ? 1 : r, t.groupAlpha = r, t.groupColorAlpha = t.groupColor + (255 * r << 24)
  }
  2 & r && (t.groupBlendMode = "inherit" === t.localBlendMode ? e.groupBlendMode : t.localBlendMode), 4 & r && (t.globalDisplayStatus = t.localDisplayStatus & e.globalDisplayStatus), t._updateFlags = 0
}
const vl = new v;
class Tl {
  constructor(t) {
    this._renderer = t
  }
  render({
    container: t,
    transform: e
  }) {
    const r = t.parent,
      s = t.renderGroup.renderGroupParent;
    t.parent = null, t.renderGroup.renderGroupParent = null;
    const i = this._renderer;
    let n = vl;
    e && (n = n.copyFrom(t.renderGroup.localTransform), t.renderGroup.localTransform.copyFrom(e));
    const o = i.renderPipes;
    this._updateCachedRenderGroups(t.renderGroup, null), this._updateRenderGroups(t.renderGroup), i.globalUniforms.start({
      worldTransformMatrix: e ? t.renderGroup.localTransform : t.renderGroup.worldTransform,
      worldColor: t.renderGroup.worldColorAlpha
    }), pl(t.renderGroup, o), o.uniformBatch && o.uniformBatch.renderEnd(), e && t.renderGroup.localTransform.copyFrom(n), t.parent = r, t.renderGroup.renderGroupParent = s
  }
  destroy() {
    this._renderer = null
  }
  _updateCachedRenderGroups(t, e) {
    if (t.isCachedAsTexture) {
      if (!t.updateCacheTexture) return;
      e = t
    }
    t._parentCacheAsTextureRenderGroup = e;
    for (let r = t.renderGroupChildren.length - 1; r >= 0; r--) this._updateCachedRenderGroups(t.renderGroupChildren[r], e);
    if (t.invalidateMatrices(), t.isCachedAsTexture) {
      if (t.textureNeedsUpdate) {
        const e = t.root.getLocalBounds();
        e.ceil();
        const r = t.texture;
        t.texture && ce.returnTexture(t.texture);
        const s = this._renderer,
          i = t.textureOptions.resolution || s.view.resolution,
          n = t.textureOptions.antialias ?? s.view.antialias;
        t.texture = ce.getOptimalTexture(e.width, e.height, i, n), t._textureBounds || (t._textureBounds = new tt), t._textureBounds.copyFrom(e), r !== t.texture && t.renderGroupParent && (t.renderGroupParent.structureDidChange = !0)
      }
    } else t.texture && (ce.returnTexture(t.texture), t.texture = null)
  }
  _updateRenderGroups(t) {
    const e = this._renderer,
      r = e.renderPipes;
    if (t.runOnRender(e), t.instructionSet.renderPipes = r, t.structureDidChange ? gl(t.childrenRenderablesToUpdate.list, 0) : function(t, e) {
        const {
          list: r,
          index: s
        } = t.childrenRenderablesToUpdate;
        let i = !1;
        for (let n = 0; n < s; n++) {
          const t = r[n];
          if (i = e[t.renderPipeId].validateRenderable(t), i) break
        }
        t.structureDidChange = i
      }(t, r), xl(t), t.structureDidChange ? (t.structureDidChange = !1, this._buildInstructions(t, e)) : this._updateRenderables(t), t.childrenRenderablesToUpdate.index = 0, e.renderPipes.batch.upload(t.instructionSet), !t.isCachedAsTexture || t.textureNeedsUpdate)
      for (let s = 0; s < t.renderGroupChildren.length; s++) this._updateRenderGroups(t.renderGroupChildren[s])
  }
  _updateRenderables(t) {
    const {
      list: e,
      index: r
    } = t.childrenRenderablesToUpdate;
    for (let s = 0; s < r; s++) {
      const r = e[s];
      r.didViewUpdate && t.updateRenderable(r)
    }
    gl(e, r)
  }
  _buildInstructions(t, e) {
    const r = t.root,
      s = t.instructionSet;
    s.reset();
    const i = e.renderPipes ? e : e.batch.renderer,
      n = i.renderPipes;
    n.batch.buildStart(s), n.blendMode.buildStart(), n.colorMask.buildStart(), r.sortableChildren && r.sortChildren(), r.collectRenderablesWithEffects(s, i, null), n.batch.buildEnd(s), n.blendMode.buildEnd(s)
  }
}
Tl.extension = {
  type: [a.WebGLSystem, a.WebGPUSystem, a.CanvasSystem],
  name: "renderGroup"
};
class Sl {
  constructor(t) {
    this._renderer = t
  }
  addRenderable(t, e) {
    const r = this._getGpuSprite(t);
    t.didViewUpdate && this._updateBatchableSprite(t, r), this._renderer.renderPipes.batch.addToBatch(r, e)
  }
  updateRenderable(t) {
    const e = this._getGpuSprite(t);
    t.didViewUpdate && this._updateBatchableSprite(t, e), e._batcher.updateElement(e)
  }
  validateRenderable(t) {
    const e = this._getGpuSprite(t);
    return !e._batcher.checkAndUpdateTexture(e, t._texture)
  }
  _updateBatchableSprite(t, e) {
    e.bounds = t.visualBounds, e.texture = t._texture
  }
  _getGpuSprite(t) {
    return t._gpuData[this._renderer.uid] || this._initGPUSprite(t)
  }
  _initGPUSprite(t) {
    const e = new dl;
    return e.renderable = t, e.transform = t.groupTransform, e.texture = t._texture, e.bounds = t.visualBounds, e.roundPixels = this._renderer._roundPixels | t._roundPixels, t._gpuData[this._renderer.uid] = e, e
  }
  destroy() {
    this._renderer = null
  }
}
Sl.extension = {
  type: [a.WebGLPipes, a.WebGPUPipes, a.CanvasPipes],
  name: "sprite"
};
const wl = class t {
  constructor() {
    this.clearBeforeRender = !0, this._backgroundColor = new At(0), this.color = this._backgroundColor, this.alpha = 1
  }
  init(e) {
    e = {
      ...t.defaultOptions,
      ...e
    }, this.clearBeforeRender = e.clearBeforeRender, this.color = e.background || e.backgroundColor || this._backgroundColor, this.alpha = e.backgroundAlpha, this._backgroundColor.setAlpha(e.backgroundAlpha)
  }
  get color() {
    return this._backgroundColor
  }
  set color(t) {
    At.shared.setValue(t).alpha < 1 && 1 === this._backgroundColor.alpha && Bt("Cannot set a transparent background on an opaque canvas. To enable transparency, set backgroundAlpha < 1 when initializing your Application."), this._backgroundColor.setValue(t)
  }
  get alpha() {
    return this._backgroundColor.alpha
  }
  set alpha(t) {
    this._backgroundColor.setAlpha(t)
  }
  get colorRgba() {
    return this._backgroundColor.toArray()
  }
  destroy() {}
};
wl.extension = {
  type: [a.WebGLSystem, a.WebGPUSystem, a.CanvasSystem],
  name: "background",
  priority: 0
}, wl.defaultOptions = {
  backgroundAlpha: 1,
  backgroundColor: 0,
  clearBeforeRender: !0
};
let El = wl;
const Cl = {};
u.handle(a.BlendMode, t => {
  if (!t.name) throw new Error("BlendMode extension must have a name property");
  Cl[t.name] = t.ref
}, t => {
  delete Cl[t.name]
});
class Pl {
  constructor(t) {
    this._isAdvanced = !1, this._filterHash = Object.create(null), this._renderer = t, this._renderer.runners.prerender.add(this)
  }
  prerender() {
    this._activeBlendMode = "normal", this._isAdvanced = !1
  }
  setBlendMode(t, e, r) {
    this._activeBlendMode !== e ? (this._activeBlendMode = e, this._isAdvanced && this._endAdvancedBlendMode(r), this._isAdvanced = !!Cl[e], this._isAdvanced && (this._beginAdvancedBlendMode(r), this._renderableList.push(t))) : this._isAdvanced && this._renderableList.push(t)
  }
  _beginAdvancedBlendMode(t) {
    this._renderer.renderPipes.batch.break(t);
    const e = this._activeBlendMode;
    if (!Cl[e]) return void Bt(`Unable to assign BlendMode: '${e}'. You may want to include: import 'pixi.js/advanced-blend-modes'`);
    let r = this._filterHash[e];
    r || (r = this._filterHash[e] = new Dt, r.filters = [new Cl[e]]);
    const s = {
      renderPipeId: "filter",
      action: "pushFilter",
      renderables: [],
      filterEffect: r,
      canBundle: !1
    };
    this._renderableList = s.renderables, t.add(s)
  }
  _endAdvancedBlendMode(t) {
    this._renderableList = null, this._renderer.renderPipes.batch.break(t), t.add({
      renderPipeId: "filter",
      action: "popFilter",
      canBundle: !1
    })
  }
  buildStart() {
    this._isAdvanced = !1
  }
  buildEnd(t) {
    this._isAdvanced && this._endAdvancedBlendMode(t)
  }
  destroy() {
    this._renderer = null, this._renderableList = null;
    for (const t in this._filterHash) this._filterHash[t].destroy();
    this._filterHash = null
  }
}
Pl.extension = {
  type: [a.WebGLPipes, a.WebGPUPipes, a.CanvasPipes],
  name: "blendMode"
};
const Ml = {
    png: "image/png",
    jpg: "image/jpeg",
    webp: "image/webp"
  },
  Al = class t {
    constructor(t) {
      this._renderer = t
    }
    _normalizeOptions(t, e = {}) {
      return t instanceof _e || t instanceof Z ? {
        target: t,
        ...e
      } : {
        ...e,
        ...t
      }
    }
    async image(t) {
      const e = new Image;
      return e.src = await this.base64(t), e
    }
    async base64(e) {
      e = this._normalizeOptions(e, t.defaultImageOptions);
      const {
        format: r,
        quality: s
      } = e, i = this.canvas(e);
      if (void 0 !== i.toBlob) return new Promise((t, e) => {
        i.toBlob(r => {
          if (!r) return void e(new Error("ICanvas.toBlob failed!"));
          const s = new FileReader;
          s.onload = () => t(s.result), s.onerror = e, s.readAsDataURL(r)
        }, Ml[r], s)
      });
      if (void 0 !== i.toDataURL) return i.toDataURL(Ml[r], s);
      if (void 0 !== i.convertToBlob) {
        const t = await i.convertToBlob({
          type: Ml[r],
          quality: s
        });
        return new Promise((e, r) => {
          const s = new FileReader;
          s.onload = () => e(s.result), s.onerror = r, s.readAsDataURL(t)
        })
      }
      throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")
    }
    canvas(t) {
      const e = (t = this._normalizeOptions(t)).target,
        r = this._renderer;
      if (e instanceof Z) return r.texture.generateCanvas(e);
      const s = r.textureGenerator.generateTexture(t),
        i = r.texture.generateCanvas(s);
      return s.destroy(!0), i
    }
    pixels(t) {
      const e = (t = this._normalizeOptions(t)).target,
        r = this._renderer,
        s = e instanceof Z ? e : r.textureGenerator.generateTexture(t),
        i = r.texture.getPixels(s);
      return e instanceof _e && s.destroy(!0), i
    }
    texture(t) {
      return (t = this._normalizeOptions(t)).target instanceof Z ? t.target : this._renderer.textureGenerator.generateTexture(t)
    }
    download(t) {
      t = this._normalizeOptions(t);
      const e = this.canvas(t),
        r = document.createElement("a");
      r.download = t.filename ?? "image.png", r.href = e.toDataURL("image/png"), document.body.appendChild(r), r.click(), document.body.removeChild(r)
    }
    log(t) {
      const e = t.width ?? 200;
      t = this._normalizeOptions(t);
      const r = this.canvas(t),
        s = r.toDataURL();
      console.log(`[Pixi Texture] ${r.width}px ${r.height}px`);
      const i = ["font-size: 1px;", `padding: ${e}px 300px;`, `background: url(${s}) no-repeat;`, "background-size: contain;"].join(" ");
      console.log("%c ", i)
    }
    destroy() {
      this._renderer = null
    }
  };
Al.extension = {
  type: [a.WebGLSystem, a.WebGPUSystem],
  name: "extract"
}, Al.defaultImageOptions = {
  format: "png",
  quality: 1
};
let Rl = Al;
class Bl extends Z {
  static create(t) {
    return new Bl({
      source: new $(t)
    })
  }
  resize(t, e, r) {
    return this.source.resize(t, e, r), this
  }
}
const kl = new G,
  Gl = new tt,
  Il = [0, 0, 0, 0];
class Fl {
  constructor(t) {
    this._renderer = t
  }
  generateTexture(t) {
    var e;
    t instanceof _e && (t = {
      target: t,
      frame: void 0,
      textureSourceOptions: {},
      resolution: void 0
    });
    const r = t.resolution || this._renderer.resolution,
      s = t.antialias || this._renderer.view.antialias,
      i = t.target;
    let n = t.clearColor;
    n = n ? Array.isArray(n) && 4 === n.length ? n : At.shared.setValue(n).toArray() : Il;
    const o = (null == (e = t.frame) ? void 0 : e.copyTo(kl)) || te(i, Gl).rectangle;
    o.width = 0 | Math.max(o.width, 1 / r), o.height = 0 | Math.max(o.height, 1 / r);
    const a = Bl.create({
        ...t.textureSourceOptions,
        width: o.width,
        height: o.height,
        resolution: r,
        antialias: s
      }),
      h = v.shared.translate(-o.x, -o.y);
    return this._renderer.render({
      container: i,
      transform: h,
      target: a,
      clearColor: n
    }), a.source.updateMipmaps(), a
  }
  destroy() {
    this._renderer = null
  }
}

function Ul(t, e, r) {
  const s = (t >> 24 & 255) / 255;
  e[r++] = (255 & t) / 255 * s, e[r++] = (t >> 8 & 255) / 255 * s, e[r++] = (t >> 16 & 255) / 255 * s, e[r++] = s
}
Fl.extension = {
  type: [a.WebGLSystem, a.WebGPUSystem],
  name: "textureGenerator"
};
class Ol {
  constructor(t) {
    this._stackIndex = 0, this._globalUniformDataStack = [], this._uniformsPool = [], this._activeUniforms = [], this._bindGroupPool = [], this._activeBindGroups = [], this._renderer = t
  }
  reset() {
    this._stackIndex = 0;
    for (let t = 0; t < this._activeUniforms.length; t++) this._uniformsPool.push(this._activeUniforms[t]);
    for (let t = 0; t < this._activeBindGroups.length; t++) this._bindGroupPool.push(this._activeBindGroups[t]);
    this._activeUniforms.length = 0, this._activeBindGroups.length = 0
  }
  start(t) {
    this.reset(), this.push(t)
  }
  bind({
    size: t,
    projectionMatrix: e,
    worldTransformMatrix: r,
    worldColor: s,
    offset: i
  }) {
    const n = this._renderer.renderTarget.renderTarget,
      o = this._stackIndex ? this._globalUniformDataStack[this._stackIndex - 1] : {
        worldTransformMatrix: new v,
        worldColor: 4294967295,
        offset: new y
      },
      a = {
        projectionMatrix: e || this._renderer.renderTarget.projectionMatrix,
        resolution: t || n.size,
        worldTransformMatrix: r || o.worldTransformMatrix,
        worldColor: s || o.worldColor,
        offset: i || o.offset,
        bindGroup: null
      },
      h = this._uniformsPool.pop() || this._createUniforms();
    this._activeUniforms.push(h);
    const l = h.uniforms;
    let u;
    l.uProjectionMatrix = a.projectionMatrix, l.uResolution = a.resolution, l.uWorldTransformMatrix.copyFrom(a.worldTransformMatrix), l.uWorldTransformMatrix.tx -= a.offset.x, l.uWorldTransformMatrix.ty -= a.offset.y, Ul(a.worldColor, l.uWorldColorAlpha, 0), h.update(), this._renderer.renderPipes.uniformBatch ? u = this._renderer.renderPipes.uniformBatch.getUniformBindGroup(h, !1) : (u = this._bindGroupPool.pop() || new qr, this._activeBindGroups.push(u), u.setResource(h, 0)), a.bindGroup = u, this._currentGlobalUniformData = a
  }
  push(t) {
    this.bind(t), this._globalUniformDataStack[this._stackIndex++] = this._currentGlobalUniformData
  }
  pop() {
    this._currentGlobalUniformData = this._globalUniformDataStack[--this._stackIndex - 1], this._renderer.type === Kr.WEBGL && this._currentGlobalUniformData.bindGroup.resources[0].update()
  }
  get bindGroup() {
    return this._currentGlobalUniformData.bindGroup
  }
  get globalUniformData() {
    return this._currentGlobalUniformData
  }
  get uniformGroup() {
    return this._currentGlobalUniformData.bindGroup.resources[0]
  }
  _createUniforms() {
    return new jr({
      uProjectionMatrix: {
        value: new v,
        type: "mat3x3<f32>"
      },
      uWorldTransformMatrix: {
        value: new v,
        type: "mat3x3<f32>"
      },
      uWorldColorAlpha: {
        value: new Float32Array(4),
        type: "vec4<f32>"
      },
      uResolution: {
        value: [0, 0],
        type: "vec2<f32>"
      }
    }, {
      isStatic: !0
    })
  }
  destroy() {
    this._renderer = null
  }
}
Ol.extension = {
  type: [a.WebGLSystem, a.WebGPUSystem, a.CanvasSystem],
  name: "globalUniforms"
};
let Dl = 1;
class Ll {
  constructor() {
    this._tasks = [], this._offset = 0
  }
  init() {
    Fe.system.add(this._update, this)
  }
  repeat(t, e, r = !0) {
    const s = Dl++;
    let i = 0;
    return r && (this._offset += 1e3, i = this._offset), this._tasks.push({
      func: t,
      duration: e,
      start: performance.now(),
      offset: i,
      last: performance.now(),
      repeat: !0,
      id: s
    }), s
  }
  cancel(t) {
    for (let e = 0; e < this._tasks.length; e++)
      if (this._tasks[e].id === t) return void this._tasks.splice(e, 1)
  }
  _update() {
    const t = performance.now();
    for (let e = 0; e < this._tasks.length; e++) {
      const r = this._tasks[e];
      if (t - r.offset - r.last >= r.duration) {
        const e = t - r.start;
        r.func(e), r.last = t
      }
    }
  }
  destroy() {
    Fe.system.remove(this._update, this), this._tasks.length = 0
  }
}
Ll.extension = {
  type: [a.WebGLSystem, a.WebGPUSystem, a.CanvasSystem],
  name: "scheduler",
  priority: 0
};
let Nl = !1;
class zl {
  constructor(t) {
    this._renderer = t
  }
  init(t) {
    if (t.hello) {
      let t = this._renderer.name;
      this._renderer.type === Kr.WEBGL && (t += ` ${this._renderer.context.webGLVersion}`),
        function(t) {
          if (!Nl) {
            if (Me.get().getNavigator().userAgent.toLowerCase().indexOf("chrome") > -1) {
              const e = [`%c  %c  %c  %c  %c PixiJS %c v${Ws} (${t}) http://www.pixijs.com/\n\n`, "background: #E72264; padding:5px 0;", "background: #6CA2EA; padding:5px 0;", "background: #B5D33D; padding:5px 0;", "background: #FED23F; padding:5px 0;", "color: #FFFFFF; background: #E72264; padding:5px 0;", "color: #E72264; background: #FFFFFF; padding:5px 0;"];
              globalThis.console.log(...e)
            } else globalThis.console && globalThis.console.log(`PixiJS ${Ws} - ${t} - http://www.pixijs.com/`);
            Nl = !0
          }
        }(t)
    }
  }
}

function Hl(t) {
  let e = !1;
  for (const s in t)
    if (null == t[s]) {
      e = !0;
      break
    } if (!e) return t;
  const r = Object.create(null);
  for (const s in t) {
    const e = t[s];
    e && (r[s] = e)
  }
  return r
}

function Wl(t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) null == t[r] ? e++ : t[r - e] = t[r];
  return t.length -= e, t
}
zl.extension = {
  type: [a.WebGLSystem, a.WebGPUSystem, a.CanvasSystem],
  name: "hello",
  priority: -2
}, zl.defaultOptions = {
  hello: !1
};
let Vl = 0;
const Xl = class t {
  constructor(t) {
    this._managedRenderables = [], this._managedHashes = [], this._managedArrays = [], this._renderer = t
  }
  init(e) {
    e = {
      ...t.defaultOptions,
      ...e
    }, this.maxUnusedTime = e.renderableGCMaxUnusedTime, this._frequency = e.renderableGCFrequency, this.enabled = e.renderableGCActive
  }
  get enabled() {
    return !!this._handler
  }
  set enabled(t) {
    this.enabled !== t && (t ? (this._handler = this._renderer.scheduler.repeat(() => this.run(), this._frequency, !1), this._hashHandler = this._renderer.scheduler.repeat(() => {
      for (const t of this._managedHashes) t.context[t.hash] = Hl(t.context[t.hash])
    }, this._frequency), this._arrayHandler = this._renderer.scheduler.repeat(() => {
      for (const t of this._managedArrays) Wl(t.context[t.hash])
    }, this._frequency)) : (this._renderer.scheduler.cancel(this._handler), this._renderer.scheduler.cancel(this._hashHandler), this._renderer.scheduler.cancel(this._arrayHandler)))
  }
  addManagedHash(t, e) {
    this._managedHashes.push({
      context: t,
      hash: e
    })
  }
  addManagedArray(t, e) {
    this._managedArrays.push({
      context: t,
      hash: e
    })
  }
  prerender({
    container: t
  }) {
    this._now = performance.now(), t.renderGroup.gcTick = Vl++, this._updateInstructionGCTick(t.renderGroup, t.renderGroup.gcTick)
  }
  addRenderable(t) {
    this.enabled && (-1 === t._lastUsed && (this._managedRenderables.push(t), t.once("destroyed", this._removeRenderable, this)), t._lastUsed = this._now)
  }
  run() {
    var t;
    const e = this._now,
      r = this._managedRenderables,
      s = this._renderer.renderPipes;
    let i = 0;
    for (let n = 0; n < r.length; n++) {
      const o = r[n];
      if (null === o) {
        i++;
        continue
      }
      const a = o.renderGroup ?? o.parentRenderGroup,
        h = (null == (t = null == a ? void 0 : a.instructionSet) ? void 0 : t.gcTick) ?? -1;
      if (((null == a ? void 0 : a.gcTick) ?? 0) === h && (o._lastUsed = e), e - o._lastUsed > this.maxUnusedTime) {
        if (!o.destroyed) {
          const t = s;
          a && (a.structureDidChange = !0), t[o.renderPipeId].destroyRenderable(o)
        }
        o._lastUsed = -1, i++, o.off("destroyed", this._removeRenderable, this)
      } else r[n - i] = o
    }
    r.length -= i
  }
  destroy() {
    this.enabled = !1, this._renderer = null, this._managedRenderables.length = 0, this._managedHashes.length = 0, this._managedArrays.length = 0
  }
  _removeRenderable(t) {
    const e = this._managedRenderables.indexOf(t);
    e >= 0 && (t.off("destroyed", this._removeRenderable, this), this._managedRenderables[e] = null)
  }
  _updateInstructionGCTick(t, e) {
    t.instructionSet.gcTick = e;
    for (const r of t.renderGroupChildren) this._updateInstructionGCTick(r, e)
  }
};
Xl.extension = {
  type: [a.WebGLSystem, a.WebGPUSystem],
  name: "renderableGC",
  priority: 0
}, Xl.defaultOptions = {
  renderableGCActive: !0,
  renderableGCMaxUnusedTime: 6e4,
  renderableGCFrequency: 3e4
};
let Yl = Xl;
const $l = class t {
  constructor(t) {
    this._renderer = t, this.count = 0, this.checkCount = 0
  }
  init(e) {
    e = {
      ...t.defaultOptions,
      ...e
    }, this.checkCountMax = e.textureGCCheckCountMax, this.maxIdle = e.textureGCAMaxIdle ?? e.textureGCMaxIdle, this.active = e.textureGCActive
  }
  postrender() {
    this._renderer.renderingToScreen && (this.count++, this.active && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())))
  }
  run() {
    const t = this._renderer.texture.managedTextures;
    for (let e = 0; e < t.length; e++) {
      const r = t[e];
      r.autoGarbageCollect && r.resource && r._touched > -1 && this.count - r._touched > this.maxIdle && (r._touched = -1, r.unload())
    }
  }
  destroy() {
    this._renderer = null
  }
};
$l.extension = {
  type: [a.WebGLSystem, a.WebGPUSystem],
  name: "textureGC"
}, $l.defaultOptions = {
  textureGCActive: !0,
  textureGCAMaxIdle: null,
  textureGCMaxIdle: 3600,
  textureGCCheckCountMax: 600
};
let jl = $l;
const ql = class t {
  get autoDensity() {
    return this.texture.source.autoDensity
  }
  set autoDensity(t) {
    this.texture.source.autoDensity = t
  }
  get resolution() {
    return this.texture.source._resolution
  }
  set resolution(t) {
    this.texture.source.resize(this.texture.source.width, this.texture.source.height, t)
  }
  init(e) {
    (e = {
      ...t.defaultOptions,
      ...e
    }).view && (D(O, "ViewSystem.view has been renamed to ViewSystem.canvas"), e.canvas = e.view), this.screen = new G(0, 0, e.width, e.height), this.canvas = e.canvas || Me.get().createCanvas(), this.antialias = !!e.antialias, this.texture = Mh(this.canvas, e), this.renderTarget = new Rh({
      colorTextures: [this.texture],
      depth: !!e.depth,
      isRoot: !0
    }), this.texture.source.transparent = e.backgroundAlpha < 1, this.resolution = e.resolution
  }
  resize(t, e, r) {
    this.texture.source.resize(t, e, r), this.screen.width = this.texture.frame.width, this.screen.height = this.texture.frame.height
  }
  destroy(t = !1) {
    ("boolean" == typeof t ? t : null == t ? void 0 : t.removeView) && this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas)
  }
};
ql.extension = {
  type: [a.WebGLSystem, a.WebGPUSystem, a.CanvasSystem],
  name: "view",
  priority: 0
}, ql.defaultOptions = {
  width: 800,
  height: 600,
  autoDensity: !1,
  antialias: !1
};
const Kl = [El, Ol, zl, ql, Tl, jl, Fl, Rl, Xs, Yl, Ll],
  Zl = [Pl, Ua, Sl, ml, Va, Ya, Xa, cl],
  Ql = [...Kl, Eh, hh, Za, ch, qa, hl, kh, nh, jh, Xh, uh, Kh, fh, lh],
  Jl = [...Zl],
  tu = [ka, ul, ll],
  eu = [],
  ru = [],
  su = [];
u.handleByNamedList(a.WebGLSystem, eu), u.handleByNamedList(a.WebGLPipes, ru), u.handleByNamedList(a.WebGLPipesAdaptor, su), u.add(...Ql, ...Jl, ...tu);
const iu = Object.freeze(Object.defineProperty({
  __proto__: null,
  WebGLRenderer: class extends Ls {
    constructor() {
      super({
        name: "webgl",
        type: Kr.WEBGL,
        systems: eu,
        renderPipes: ru,
        renderPipeAdaptors: su
      })
    }
  }
}, Symbol.toStringTag, {
  value: "Module"
}));
class nu {
  constructor(t) {
    this._hash = Object.create(null), this._renderer = t, this._renderer.renderableGC.addManagedHash(this, "_hash")
  }
  contextChange(t) {
    this._gpu = t
  }
  getBindGroup(t, e, r) {
    return t._updateKey(), this._hash[t._key] || this._createBindGroup(t, e, r)
  }
  _createBindGroup(t, e, r) {
    const s = this._gpu.device,
      i = e.layout[r],
      n = [],
      o = this._renderer;
    for (const l in i) {
      const e = t.resources[l] ?? t.resources[i[l]];
      let r;
      if ("uniformGroup" === e._resourceType) {
        const t = e;
        o.ubo.updateUniformGroup(t);
        const s = t.buffer;
        r = {
          buffer: o.buffer.getGPUBuffer(s),
          offset: 0,
          size: s.descriptor.size
        }
      } else if ("buffer" === e._resourceType) {
        const t = e;
        r = {
          buffer: o.buffer.getGPUBuffer(t),
          offset: 0,
          size: t.descriptor.size
        }
      } else if ("bufferResource" === e._resourceType) {
        const t = e;
        r = {
          buffer: o.buffer.getGPUBuffer(t.buffer),
          offset: t.offset,
          size: t.size
        }
      } else if ("textureSampler" === e._resourceType) {
        const t = e;
        r = o.texture.getGpuSampler(t)
      } else if ("textureSource" === e._resourceType) {
        const t = e;
        r = o.texture.getGpuSource(t).createView({})
      }
      n.push({
        binding: i[l],
        resource: r
      })
    }
    const a = o.shader.getProgramData(e).bindGroups[r],
      h = s.createBindGroup({
        layout: a,
        entries: n
      });
    return this._hash[t._key] = h, h
  }
  destroy() {
    for (const t of Object.keys(this._hash)) this._hash[t] = null;
    this._hash = null, this._renderer = null
  }
}
nu.extension = {
  type: [a.WebGPUSystem],
  name: "bindGroup"
};
class ou {
  constructor(t) {
    this._gpuBuffers = Object.create(null), this._managedBuffers = [], t.renderableGC.addManagedHash(this, "_gpuBuffers")
  }
  contextChange(t) {
    this._gpu = t
  }
  getGPUBuffer(t) {
    return this._gpuBuffers[t.uid] || this.createGPUBuffer(t)
  }
  updateBuffer(t) {
    const e = this._gpuBuffers[t.uid] || this.createGPUBuffer(t),
      r = t.data;
    return t._updateID && r && (t._updateID = 0, this._gpu.device.queue.writeBuffer(e, 0, r.buffer, 0, (t._updateSize || r.byteLength) + 3 & -4)), e
  }
  destroyAll() {
    for (const t in this._gpuBuffers) this._gpuBuffers[t].destroy();
    this._gpuBuffers = {}
  }
  createGPUBuffer(t) {
    this._gpuBuffers[t.uid] || (t.on("update", this.updateBuffer, this), t.on("change", this.onBufferChange, this), t.on("destroy", this.onBufferDestroy, this), this._managedBuffers.push(t));
    const e = this._gpu.device.createBuffer(t.descriptor);
    return t._updateID = 0, t.data && (Si(t.data.buffer, e.getMappedRange()), e.unmap()), this._gpuBuffers[t.uid] = e, e
  }
  onBufferChange(t) {
    this._gpuBuffers[t.uid].destroy(), t._updateID = 0, this._gpuBuffers[t.uid] = this.createGPUBuffer(t)
  }
  onBufferDestroy(t) {
    this._managedBuffers.splice(this._managedBuffers.indexOf(t), 1), this._destroyBuffer(t)
  }
  destroy() {
    this._managedBuffers.forEach(t => this._destroyBuffer(t)), this._managedBuffers = null, this._gpuBuffers = null
  }
  _destroyBuffer(t) {
    this._gpuBuffers[t.uid].destroy(), t.off("update", this.updateBuffer, this), t.off("change", this.onBufferChange, this), t.off("destroy", this.onBufferDestroy, this), this._gpuBuffers[t.uid] = null
  }
}
ou.extension = {
  type: [a.WebGPUSystem],
  name: "buffer"
};
class au {
  constructor({
    minUniformOffsetAlignment: t
  }) {
    this._minUniformOffsetAlignment = 256, this.byteIndex = 0, this._minUniformOffsetAlignment = t, this.data = new Float32Array(65535)
  }
  clear() {
    this.byteIndex = 0
  }
  addEmptyGroup(t) {
    if (t > this._minUniformOffsetAlignment / 4) throw new Error("UniformBufferBatch: array is too large: " + 4 * t);
    const e = this.byteIndex;
    let r = e + 4 * t;
    if (r = Math.ceil(r / this._minUniformOffsetAlignment) * this._minUniformOffsetAlignment, r > 4 * this.data.length) throw new Error("UniformBufferBatch: ubo batch got too big");
    return this.byteIndex = r, e
  }
  addGroup(t) {
    const e = this.addEmptyGroup(t.length);
    for (let r = 0; r < t.length; r++) this.data[e / 4 + r] = t[r];
    return e
  }
  destroy() {
    this.data = null
  }
}
class hu {
  constructor(t) {
    this._colorMaskCache = 15, this._renderer = t
  }
  setMask(t) {
    this._colorMaskCache !== t && (this._colorMaskCache = t, this._renderer.pipeline.setColorMask(t))
  }
  destroy() {
    this._renderer = null, this._colorMaskCache = null
  }
}
hu.extension = {
  type: [a.WebGPUSystem],
  name: "colorMask"
};
class lu {
  constructor(t) {
    this._renderer = t
  }
  async init(t) {
    return this._initPromise || (this._initPromise = this._createDeviceAndAdaptor(t).then(t => {
      this.gpu = t, this._renderer.runners.contextChange.emit(this.gpu)
    })), this._initPromise
  }
  contextChange(t) {
    this._renderer.gpu = t
  }
  async _createDeviceAndAdaptor(t) {
    const e = await Me.get().getNavigator().gpu.requestAdapter({
        powerPreference: t.powerPreference,
        forceFallbackAdapter: t.forceFallbackAdapter
      }),
      r = ["texture-compression-bc", "texture-compression-astc", "texture-compression-etc2"].filter(t => e.features.has(t)),
      s = await e.requestDevice({
        requiredFeatures: r
      });
    return {
      adapter: e,
      device: s
    }
  }
  destroy() {
    this.gpu = null, this._renderer = null
  }
}
lu.extension = {
  type: [a.WebGPUSystem],
  name: "device"
}, lu.defaultOptions = {
  powerPreference: void 0,
  forceFallbackAdapter: !1
};
class uu {
  constructor(t) {
    this._boundBindGroup = Object.create(null), this._boundVertexBuffer = Object.create(null), this._renderer = t
  }
  renderStart() {
    this.commandFinished = new Promise(t => {
      this._resolveCommandFinished = t
    }), this.commandEncoder = this._renderer.gpu.device.createCommandEncoder()
  }
  beginRenderPass(t) {
    this.endRenderPass(), this._clearCache(), this.renderPassEncoder = this.commandEncoder.beginRenderPass(t.descriptor)
  }
  endRenderPass() {
    this.renderPassEncoder && this.renderPassEncoder.end(), this.renderPassEncoder = null
  }
  setViewport(t) {
    this.renderPassEncoder.setViewport(t.x, t.y, t.width, t.height, 0, 1)
  }
  setPipelineFromGeometryProgramAndState(t, e, r, s) {
    const i = this._renderer.pipeline.getPipeline(t, e, r, s);
    this.setPipeline(i)
  }
  setPipeline(t) {
    this._boundPipeline !== t && (this._boundPipeline = t, this.renderPassEncoder.setPipeline(t))
  }
  _setVertexBuffer(t, e) {
    this._boundVertexBuffer[t] !== e && (this._boundVertexBuffer[t] = e, this.renderPassEncoder.setVertexBuffer(t, this._renderer.buffer.updateBuffer(e)))
  }
  _setIndexBuffer(t) {
    if (this._boundIndexBuffer === t) return;
    this._boundIndexBuffer = t;
    const e = 2 === t.data.BYTES_PER_ELEMENT ? "uint16" : "uint32";
    this.renderPassEncoder.setIndexBuffer(this._renderer.buffer.updateBuffer(t), e)
  }
  resetBindGroup(t) {
    this._boundBindGroup[t] = null
  }
  setBindGroup(t, e, r) {
    if (this._boundBindGroup[t] === e) return;
    this._boundBindGroup[t] = e, e._touch(this._renderer.textureGC.count);
    const s = this._renderer.bindGroup.getBindGroup(e, r, t);
    this.renderPassEncoder.setBindGroup(t, s)
  }
  setGeometry(t, e) {
    const r = this._renderer.pipeline.getBufferNamesToBind(t, e);
    for (const s in r) this._setVertexBuffer(s, t.attributes[r[s]].buffer);
    t.indexBuffer && this._setIndexBuffer(t.indexBuffer)
  }
  _setShaderBindGroups(t, e) {
    for (const r in t.groups) {
      const s = t.groups[r];
      e || this._syncBindGroup(s), this.setBindGroup(r, s, t.gpuProgram)
    }
  }
  _syncBindGroup(t) {
    for (const e in t.resources) {
      const r = t.resources[e];
      r.isUniformGroup && this._renderer.ubo.updateUniformGroup(r)
    }
  }
  draw(t) {
    const {
      geometry: e,
      shader: r,
      state: s,
      topology: i,
      size: n,
      start: o,
      instanceCount: a,
      skipSync: h
    } = t;
    this.setPipelineFromGeometryProgramAndState(e, r.gpuProgram, s, i), this.setGeometry(e, r.gpuProgram), this._setShaderBindGroups(r, h), e.indexBuffer ? this.renderPassEncoder.drawIndexed(n || e.indexBuffer.data.length, a ?? e.instanceCount, o || 0) : this.renderPassEncoder.draw(n || e.getSize(), a ?? e.instanceCount, o || 0)
  }
  finishRenderPass() {
    this.renderPassEncoder && (this.renderPassEncoder.end(), this.renderPassEncoder = null)
  }
  postrender() {
    this.finishRenderPass(), this._gpu.device.queue.submit([this.commandEncoder.finish()]), this._resolveCommandFinished(), this.commandEncoder = null
  }
  restoreRenderPass() {
    const t = this._renderer.renderTarget.adaptor.getDescriptor(this._renderer.renderTarget.renderTarget, !1, [0, 0, 0, 1]);
    this.renderPassEncoder = this.commandEncoder.beginRenderPass(t);
    const e = this._boundPipeline,
      r = {
        ...this._boundVertexBuffer
      },
      s = this._boundIndexBuffer,
      i = {
        ...this._boundBindGroup
      };
    this._clearCache();
    const n = this._renderer.renderTarget.viewport;
    this.renderPassEncoder.setViewport(n.x, n.y, n.width, n.height, 0, 1), this.setPipeline(e);
    for (const o in r) this._setVertexBuffer(o, r[o]);
    for (const o in i) this.setBindGroup(o, i[o], null);
    this._setIndexBuffer(s)
  }
  _clearCache() {
    for (let t = 0; t < 16; t++) this._boundBindGroup[t] = null, this._boundVertexBuffer[t] = null;
    this._boundIndexBuffer = null, this._boundPipeline = null
  }
  destroy() {
    this._renderer = null, this._gpu = null, this._boundBindGroup = null, this._boundVertexBuffer = null, this._boundIndexBuffer = null, this._boundPipeline = null
  }
  contextChange(t) {
    this._gpu = t
  }
}
uu.extension = {
  type: [a.WebGPUSystem],
  name: "encoder",
  priority: 1
};
class cu {
  constructor(t) {
    this._renderer = t
  }
  contextChange() {
    this.maxTextures = this._renderer.device.gpu.device.limits.maxSampledTexturesPerShaderStage, this.maxBatchableTextures = this.maxTextures
  }
  destroy() {}
}
cu.extension = {
  type: [a.WebGPUSystem],
  name: "limits"
};
class du {
  constructor(t) {
    this._renderTargetStencilState = Object.create(null), this._renderer = t, t.renderTarget.onRenderTargetChange.add(this)
  }
  onRenderTargetChange(t) {
    let e = this._renderTargetStencilState[t.uid];
    e || (e = this._renderTargetStencilState[t.uid] = {
      stencilMode: Ei.DISABLED,
      stencilReference: 0
    }), this._activeRenderTarget = t, this.setStencilMode(e.stencilMode, e.stencilReference)
  }
  setStencilMode(t, e) {
    const r = this._renderTargetStencilState[this._activeRenderTarget.uid];
    r.stencilMode = t, r.stencilReference = e;
    const s = this._renderer;
    s.pipeline.setStencilMode(t), s.encoder.renderPassEncoder.setStencilReference(e)
  }
  destroy() {
    this._renderer.renderTarget.onRenderTargetChange.remove(this), this._renderer = null, this._activeRenderTarget = null, this._renderTargetStencilState = null
  }
}
du.extension = {
  type: [a.WebGPUSystem],
  name: "stencil"
};
const pu = {
  i32: {
    align: 4,
    size: 4
  },
  u32: {
    align: 4,
    size: 4
  },
  f32: {
    align: 4,
    size: 4
  },
  f16: {
    align: 2,
    size: 2
  },
  "vec2<i32>": {
    align: 8,
    size: 8
  },
  "vec2<u32>": {
    align: 8,
    size: 8
  },
  "vec2<f32>": {
    align: 8,
    size: 8
  },
  "vec2<f16>": {
    align: 4,
    size: 4
  },
  "vec3<i32>": {
    align: 16,
    size: 12
  },
  "vec3<u32>": {
    align: 16,
    size: 12
  },
  "vec3<f32>": {
    align: 16,
    size: 12
  },
  "vec3<f16>": {
    align: 8,
    size: 6
  },
  "vec4<i32>": {
    align: 16,
    size: 16
  },
  "vec4<u32>": {
    align: 16,
    size: 16
  },
  "vec4<f32>": {
    align: 16,
    size: 16
  },
  "vec4<f16>": {
    align: 8,
    size: 8
  },
  "mat2x2<f32>": {
    align: 8,
    size: 16
  },
  "mat2x2<f16>": {
    align: 4,
    size: 8
  },
  "mat3x2<f32>": {
    align: 8,
    size: 24
  },
  "mat3x2<f16>": {
    align: 4,
    size: 12
  },
  "mat4x2<f32>": {
    align: 8,
    size: 32
  },
  "mat4x2<f16>": {
    align: 4,
    size: 16
  },
  "mat2x3<f32>": {
    align: 16,
    size: 32
  },
  "mat2x3<f16>": {
    align: 8,
    size: 16
  },
  "mat3x3<f32>": {
    align: 16,
    size: 48
  },
  "mat3x3<f16>": {
    align: 8,
    size: 24
  },
  "mat4x3<f32>": {
    align: 16,
    size: 64
  },
  "mat4x3<f16>": {
    align: 8,
    size: 32
  },
  "mat2x4<f32>": {
    align: 16,
    size: 32
  },
  "mat2x4<f16>": {
    align: 8,
    size: 16
  },
  "mat3x4<f32>": {
    align: 16,
    size: 48
  },
  "mat3x4<f16>": {
    align: 8,
    size: 24
  },
  "mat4x4<f32>": {
    align: 16,
    size: 64
  },
  "mat4x4<f16>": {
    align: 8,
    size: 32
  }
};

function fu(t) {
  const e = t.map(t => ({
    data: t,
    offset: 0,
    size: 0
  }));
  let r = 0;
  for (let s = 0; s < e.length; s++) {
    const t = e[s];
    let i = pu[t.data.type].size;
    const n = pu[t.data.type].align;
    if (!pu[t.data.type]) throw new Error(`[Pixi.js] WebGPU UniformBuffer: Unknown type ${t.data.type}`);
    t.data.size > 1 && (i = Math.max(i, n) * t.data.size), r = Math.ceil(r / n) * n, t.size = i, t.offset = r, r += i
  }
  return r = 16 * Math.ceil(r / 16), {
    uboElements: e,
    size: r
  }
}

function mu(t, e) {
  const {
    size: r,
    align: s
  } = pu[t.data.type], i = (s - r) / 4, n = t.data.type.indexOf("i32") >= 0 ? "dataInt32" : "data";
  return `\n         v = uv.${t.data.name};\n         ${0!==e?`offset += ${e};`:""}\n\n         arrayOffset = offset;\n\n         t = 0;\n\n         for(var i=0; i < ${t.data.size*(r/4)}; i++)\n         {\n             for(var j = 0; j < ${r/4}; j++)\n             {\n                 ${n}[arrayOffset++] = v[t++];\n             }\n             ${0!==i?`arrayOffset += ${i};`:""}\n         }\n     `
}

function gu(t) {
  return yh(t, "uboWgsl", mu, Th)
}
class _u extends mh {
  constructor() {
    super({
      createUboElements: fu,
      generateUboSync: gu
    })
  }
}
_u.extension = {
  type: [a.WebGPUSystem],
  name: "ubo"
};
const xu = 128;
class yu {
  constructor(t) {
    this._bindGroupHash = Object.create(null), this._buffers = [], this._bindGroups = [], this._bufferResources = [], this._renderer = t, this._renderer.renderableGC.addManagedHash(this, "_bindGroupHash"), this._batchBuffer = new au({
      minUniformOffsetAlignment: xu
    });
    for (let e = 0; e < 2; e++) {
      let t = Ni.UNIFORM | Ni.COPY_DST;
      0 === e && (t |= Ni.COPY_SRC), this._buffers.push(new zi({
        data: this._batchBuffer.data,
        usage: t
      }))
    }
  }
  renderEnd() {
    this._uploadBindGroups(), this._resetBindGroups()
  }
  _resetBindGroups() {
    for (const t in this._bindGroupHash) this._bindGroupHash[t] = null;
    this._batchBuffer.clear()
  }
  getUniformBindGroup(t, e) {
    if (!e && this._bindGroupHash[t.uid]) return this._bindGroupHash[t.uid];
    this._renderer.ubo.ensureUniformGroup(t);
    const r = t.buffer.data,
      s = this._batchBuffer.addEmptyGroup(r.length);
    return this._renderer.ubo.syncUniformGroup(t, this._batchBuffer.data, s / 4), this._bindGroupHash[t.uid] = this._getBindGroup(s / xu), this._bindGroupHash[t.uid]
  }
  getUboResource(t) {
    this._renderer.ubo.updateUniformGroup(t);
    const e = t.buffer.data,
      r = this._batchBuffer.addGroup(e);
    return this._getBufferResource(r / xu)
  }
  getArrayBindGroup(t) {
    const e = this._batchBuffer.addGroup(t);
    return this._getBindGroup(e / xu)
  }
  getArrayBufferResource(t) {
    const e = this._batchBuffer.addGroup(t) / xu;
    return this._getBufferResource(e)
  }
  _getBufferResource(t) {
    if (!this._bufferResources[t]) {
      const e = this._buffers[t % 2];
      this._bufferResources[t] = new Gh({
        buffer: e,
        offset: 256 * (t / 2 | 0),
        size: xu
      })
    }
    return this._bufferResources[t]
  }
  _getBindGroup(t) {
    if (!this._bindGroups[t]) {
      const e = new qr({
        0: this._getBufferResource(t)
      });
      this._bindGroups[t] = e
    }
    return this._bindGroups[t]
  }
  _uploadBindGroups() {
    const t = this._renderer.buffer,
      e = this._buffers[0];
    e.update(this._batchBuffer.byteIndex), t.updateBuffer(e);
    const r = this._renderer.gpu.device.createCommandEncoder();
    for (let s = 1; s < this._buffers.length; s++) {
      const i = this._buffers[s];
      r.copyBufferToBuffer(t.getGPUBuffer(e), xu, t.getGPUBuffer(i), 0, this._batchBuffer.byteIndex)
    }
    this._renderer.gpu.device.queue.submit([r.finish()])
  }
  destroy() {
    for (let t = 0; t < this._bindGroups.length; t++) this._bindGroups[t].destroy();
    this._bindGroups = null, this._bindGroupHash = null;
    for (let t = 0; t < this._buffers.length; t++) this._buffers[t].destroy();
    this._buffers = null;
    for (let t = 0; t < this._bufferResources.length; t++) this._bufferResources[t].destroy();
    this._bufferResources = null, this._batchBuffer.destroy(), this._bindGroupHash = null, this._renderer = null
  }
}
yu.extension = {
  type: [a.WebGPUPipes],
  name: "uniformBatch"
};
const bu = {
  "point-list": 0,
  "line-list": 1,
  "line-strip": 2,
  "triangle-list": 3,
  "triangle-strip": 4
};
class vu {
  constructor(t) {
    this._moduleCache = Object.create(null), this._bufferLayoutsCache = Object.create(null), this._bindingNamesCache = Object.create(null), this._pipeCache = Object.create(null), this._pipeStateCaches = Object.create(null), this._colorMask = 15, this._multisampleCount = 1, this._renderer = t
  }
  contextChange(t) {
    this._gpu = t, this.setStencilMode(Ei.DISABLED), this._updatePipeHash()
  }
  setMultisampleCount(t) {
    this._multisampleCount !== t && (this._multisampleCount = t, this._updatePipeHash())
  }
  setRenderTarget(t) {
    this._multisampleCount = t.msaaSamples, this._depthStencilAttachment = t.descriptor.depthStencilAttachment ? 1 : 0, this._updatePipeHash()
  }
  setColorMask(t) {
    this._colorMask !== t && (this._colorMask = t, this._updatePipeHash())
  }
  setStencilMode(t) {
    this._stencilMode !== t && (this._stencilMode = t, this._stencilState = ph[t], this._updatePipeHash())
  }
  setPipeline(t, e, r, s) {
    const i = this.getPipeline(t, e, r);
    s.setPipeline(i)
  }
  getPipeline(t, e, r, s) {
    t._layoutKey || (Qa(t, e.attributeData), this._generateBufferKey(t)), s || (s = t.topology);
    const i = function(t, e, r, s, i) {
      return t << 24 | e << 16 | r << 10 | s << 5 | i
    }(t._layoutKey, e._layoutKey, r.data, r._blendModeId, bu[s]);
    return this._pipeCache[i] || (this._pipeCache[i] = this._createPipeline(t, e, r, s)), this._pipeCache[i]
  }
  _createPipeline(t, e, r, s) {
    const i = this._gpu.device,
      n = this._createVertexBufferLayouts(t, e),
      o = this._renderer.state.getColorTargets(r);
    o[0].writeMask = this._stencilMode === Ei.RENDERING_MASK_ADD ? 0 : this._colorMask;
    const a = this._renderer.shader.getProgramData(e).pipeline,
      h = {
        vertex: {
          module: this._getModule(e.vertex.source),
          entryPoint: e.vertex.entryPoint,
          buffers: n
        },
        fragment: {
          module: this._getModule(e.fragment.source),
          entryPoint: e.fragment.entryPoint,
          targets: o
        },
        primitive: {
          topology: s,
          cullMode: r.cullMode
        },
        layout: a,
        multisample: {
          count: this._multisampleCount
        },
        label: "PIXI Pipeline"
      };
    return this._depthStencilAttachment && (h.depthStencil = {
      ...this._stencilState,
      format: "depth24plus-stencil8",
      depthWriteEnabled: r.depthTest,
      depthCompare: r.depthTest ? "less" : "always"
    }), i.createRenderPipeline(h)
  }
  _getModule(t) {
    return this._moduleCache[t] || this._createModule(t)
  }
  _createModule(t) {
    const e = this._gpu.device;
    return this._moduleCache[t] = e.createShaderModule({
      code: t
    }), this._moduleCache[t]
  }
  _generateBufferKey(t) {
    const e = [];
    let r = 0;
    const s = Object.keys(t.attributes).sort();
    for (let n = 0; n < s.length; n++) {
      const i = t.attributes[s[n]];
      e[r++] = i.offset, e[r++] = i.format, e[r++] = i.stride, e[r++] = i.instance
    }
    const i = e.join("|");
    return t._layoutKey = Cr(i, "geometry"), t._layoutKey
  }
  _generateAttributeLocationsKey(t) {
    const e = [];
    let r = 0;
    const s = Object.keys(t.attributeData).sort();
    for (let n = 0; n < s.length; n++) {
      const i = t.attributeData[s[n]];
      e[r++] = i.location
    }
    const i = e.join("|");
    return t._attributeLocationsKey = Cr(i, "programAttributes"), t._attributeLocationsKey
  }
  getBufferNamesToBind(t, e) {
    const r = t._layoutKey << 16 | e._attributeLocationsKey;
    if (this._bindingNamesCache[r]) return this._bindingNamesCache[r];
    const s = this._createVertexBufferLayouts(t, e),
      i = Object.create(null),
      n = e.attributeData;
    for (let o = 0; o < s.length; o++) {
      const t = Object.values(s[o].attributes)[0].shaderLocation;
      for (const e in n)
        if (n[e].location === t) {
          i[o] = e;
          break
        }
    }
    return this._bindingNamesCache[r] = i, i
  }
  _createVertexBufferLayouts(t, e) {
    e._attributeLocationsKey || this._generateAttributeLocationsKey(e);
    const r = t._layoutKey << 16 | e._attributeLocationsKey;
    if (this._bufferLayoutsCache[r]) return this._bufferLayoutsCache[r];
    const s = [];
    return t.buffers.forEach(r => {
      const i = {
          arrayStride: 0,
          stepMode: "vertex",
          attributes: []
        },
        n = i.attributes;
      for (const s in e.attributeData) {
        const o = t.attributes[s];
        1 !== (o.divisor ?? 1) && Bt(`Attribute ${s} has an invalid divisor value of '${o.divisor}'. WebGPU only supports a divisor value of 1`), o.buffer === r && (i.arrayStride = o.stride, i.stepMode = o.instance ? "instance" : "vertex", n.push({
          shaderLocation: e.attributeData[s].location,
          offset: o.offset,
          format: o.format
        }))
      }
      n.length && s.push(i)
    }), this._bufferLayoutsCache[r] = s, s
  }
  _updatePipeHash() {
    const t = (e = this._stencilMode, r = this._multisampleCount, this._colorMask << 6 | e << 3 | this._depthStencilAttachment << 1 | r);
    var e, r;
    this._pipeStateCaches[t] || (this._pipeStateCaches[t] = Object.create(null)), this._pipeCache = this._pipeStateCaches[t]
  }
  destroy() {
    this._renderer = null, this._bufferLayoutsCache = null
  }
}
vu.extension = {
  type: [a.WebGPUSystem],
  name: "pipeline"
};
class Tu {
  constructor() {
    this.contexts = [], this.msaaTextures = [], this.msaaSamples = 1
  }
}
class Su {
  init(t, e) {
    this._renderer = t, this._renderTargetSystem = e
  }
  copyToTexture(t, e, r, s, i) {
    const n = this._renderer,
      o = this._getGpuColorTexture(t),
      a = n.texture.getGpuSource(e.source);
    return n.encoder.commandEncoder.copyTextureToTexture({
      texture: o,
      origin: r
    }, {
      texture: a,
      origin: i
    }, s), e
  }
  startRenderPass(t, e = !0, r, s) {
    const i = this._renderTargetSystem.getGpuRenderTarget(t),
      n = this.getDescriptor(t, e, r);
    i.descriptor = n, this._renderer.pipeline.setRenderTarget(i), this._renderer.encoder.beginRenderPass(i), this._renderer.encoder.setViewport(s)
  }
  finishRenderPass() {
    this._renderer.encoder.endRenderPass()
  }
  _getGpuColorTexture(t) {
    const e = this._renderTargetSystem.getGpuRenderTarget(t);
    return e.contexts[0] ? e.contexts[0].getCurrentTexture() : this._renderer.texture.getGpuSource(t.colorTextures[0].source)
  }
  getDescriptor(t, e, r) {
    "boolean" == typeof e && (e = e ? Gs.ALL : Gs.NONE);
    const s = this._renderTargetSystem,
      i = s.getGpuRenderTarget(t),
      n = t.colorTextures.map((t, n) => {
        const o = i.contexts[n];
        let a, h;
        a = o ? o.getCurrentTexture().createView() : this._renderer.texture.getGpuSource(t).createView({
          mipLevelCount: 1
        }), i.msaaTextures[n] && (h = a, a = this._renderer.texture.getTextureView(i.msaaTextures[n]));
        const l = e & Gs.COLOR ? "clear" : "load";
        return r ?? (r = s.defaultClearColor), {
          view: a,
          resolveTarget: h,
          clearValue: r,
          storeOp: "store",
          loadOp: l
        }
      });
    let o;
    if (!t.stencil && !t.depth || t.depthStencilTexture || (t.ensureDepthStencilTexture(), t.depthStencilTexture.source.sampleCount = i.msaa ? 4 : 1), t.depthStencilTexture) {
      const r = e & Gs.STENCIL ? "clear" : "load",
        s = e & Gs.DEPTH ? "clear" : "load";
      o = {
        view: this._renderer.texture.getGpuSource(t.depthStencilTexture.source).createView(),
        stencilStoreOp: "store",
        stencilLoadOp: r,
        depthClearValue: 1,
        depthLoadOp: s,
        depthStoreOp: "store"
      }
    }
    return {
      colorAttachments: n,
      depthStencilAttachment: o
    }
  }
  clear(t, e = !0, r, s) {
    if (!e) return;
    const {
      gpu: i,
      encoder: n
    } = this._renderer, o = i.device;
    if (null === n.commandEncoder) {
      const i = o.createCommandEncoder(),
        n = this.getDescriptor(t, e, r),
        a = i.beginRenderPass(n);
      a.setViewport(s.x, s.y, s.width, s.height, 0, 1), a.end();
      const h = i.finish();
      o.queue.submit([h])
    } else this.startRenderPass(t, e, r, s)
  }
  initGpuRenderTarget(t) {
    t.isRoot = !0;
    const e = new Tu;
    return t.colorTextures.forEach((t, r) => {
      if (t instanceof Ae) {
        const i = t.resource.getContext("webgpu"),
          n = t.transparent ? "premultiplied" : "opaque";
        try {
          i.configure({
            device: this._renderer.gpu.device,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
            format: "bgra8unorm",
            alphaMode: n
          })
        } catch (s) {
          console.error(s)
        }
        e.contexts[r] = i
      }
      if (e.msaa = t.source.antialias, t.source.antialias) {
        const t = new $({
          width: 0,
          height: 0,
          sampleCount: 4
        });
        e.msaaTextures[r] = t
      }
    }), e.msaa && (e.msaaSamples = 4, t.depthStencilTexture && (t.depthStencilTexture.source.sampleCount = 4)), e
  }
  destroyGpuRenderTarget(t) {
    t.contexts.forEach(t => {
      t.unconfigure()
    }), t.msaaTextures.forEach(t => {
      t.destroy()
    }), t.msaaTextures.length = 0, t.contexts.length = 0
  }
  ensureDepthStencilTexture(t) {
    const e = this._renderTargetSystem.getGpuRenderTarget(t);
    t.depthStencilTexture && e.msaa && (t.depthStencilTexture.source.sampleCount = 4)
  }
  resizeGpuRenderTarget(t) {
    const e = this._renderTargetSystem.getGpuRenderTarget(t);
    e.width = t.width, e.height = t.height, e.msaa && t.colorTextures.forEach((t, r) => {
      const s = e.msaaTextures[r];
      null == s || s.resize(t.source.width, t.source.height, t.source._resolution)
    })
  }
}
class wu extends Bh {
  constructor(t) {
    super(t), this.adaptor = new Su, this.adaptor.init(t, this)
  }
}
wu.extension = {
  type: [a.WebGPUSystem],
  name: "renderTarget"
};
class Eu {
  constructor() {
    this._gpuProgramData = Object.create(null)
  }
  contextChange(t) {
    this._gpu = t
  }
  getProgramData(t) {
    return this._gpuProgramData[t._layoutKey] || this._createGPUProgramData(t)
  }
  _createGPUProgramData(t) {
    const e = this._gpu.device,
      r = t.gpuLayout.map(t => e.createBindGroupLayout({
        entries: t
      })),
      s = {
        bindGroupLayouts: r
      };
    return this._gpuProgramData[t._layoutKey] = {
      bindGroups: r,
      pipeline: e.createPipelineLayout(s)
    }, this._gpuProgramData[t._layoutKey]
  }
  destroy() {
    this._gpu = null, this._gpuProgramData = null
  }
}
Eu.extension = {
  type: [a.WebGPUSystem],
  name: "shader"
};
const Cu = {
  normal: {
    alpha: {
      srcFactor: "one",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    },
    color: {
      srcFactor: "one",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    }
  },
  add: {
    alpha: {
      srcFactor: "src-alpha",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    },
    color: {
      srcFactor: "one",
      dstFactor: "one",
      operation: "add"
    }
  },
  multiply: {
    alpha: {
      srcFactor: "one",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    },
    color: {
      srcFactor: "dst",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    }
  },
  screen: {
    alpha: {
      srcFactor: "one",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    },
    color: {
      srcFactor: "one",
      dstFactor: "one-minus-src",
      operation: "add"
    }
  },
  overlay: {
    alpha: {
      srcFactor: "one",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    },
    color: {
      srcFactor: "one",
      dstFactor: "one-minus-src",
      operation: "add"
    }
  },
  none: {
    alpha: {
      srcFactor: "one",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    },
    color: {
      srcFactor: "zero",
      dstFactor: "zero",
      operation: "add"
    }
  },
  "normal-npm": {
    alpha: {
      srcFactor: "one",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    },
    color: {
      srcFactor: "src-alpha",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    }
  },
  "add-npm": {
    alpha: {
      srcFactor: "one",
      dstFactor: "one",
      operation: "add"
    },
    color: {
      srcFactor: "src-alpha",
      dstFactor: "one",
      operation: "add"
    }
  },
  "screen-npm": {
    alpha: {
      srcFactor: "one",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    },
    color: {
      srcFactor: "src-alpha",
      dstFactor: "one-minus-src",
      operation: "add"
    }
  },
  erase: {
    alpha: {
      srcFactor: "zero",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    },
    color: {
      srcFactor: "zero",
      dstFactor: "one-minus-src",
      operation: "add"
    }
  },
  min: {
    alpha: {
      srcFactor: "one",
      dstFactor: "one",
      operation: "min"
    },
    color: {
      srcFactor: "one",
      dstFactor: "one",
      operation: "min"
    }
  },
  max: {
    alpha: {
      srcFactor: "one",
      dstFactor: "one",
      operation: "max"
    },
    color: {
      srcFactor: "one",
      dstFactor: "one",
      operation: "max"
    }
  }
};
class Pu {
  constructor() {
    this.defaultState = new ts, this.defaultState.blend = !0
  }
  contextChange(t) {
    this.gpu = t
  }
  getColorTargets(t) {
    return [{
      format: "bgra8unorm",
      writeMask: 0,
      blend: Cu[t.blendMode] || Cu.normal
    }]
  }
  destroy() {
    this.gpu = null
  }
}
Pu.extension = {
  type: [a.WebGPUSystem],
  name: "state"
};
const Mu = {
    type: "image",
    upload(t, e, r) {
      const s = t.resource,
        i = (0 | t.pixelWidth) * (0 | t.pixelHeight),
        n = s.byteLength / i;
      r.device.queue.writeTexture({
        texture: e
      }, s, {
        offset: 0,
        rowsPerImage: t.pixelHeight,
        bytesPerRow: t.pixelHeight * n
      }, {
        width: t.pixelWidth,
        height: t.pixelHeight,
        depthOrArrayLayers: 1
      })
    }
  },
  Au = {
    "bc1-rgba-unorm": {
      blockBytes: 8,
      blockWidth: 4,
      blockHeight: 4
    },
    "bc2-rgba-unorm": {
      blockBytes: 16,
      blockWidth: 4,
      blockHeight: 4
    },
    "bc3-rgba-unorm": {
      blockBytes: 16,
      blockWidth: 4,
      blockHeight: 4
    },
    "bc7-rgba-unorm": {
      blockBytes: 16,
      blockWidth: 4,
      blockHeight: 4
    },
    "etc1-rgb-unorm": {
      blockBytes: 8,
      blockWidth: 4,
      blockHeight: 4
    },
    "etc2-rgba8unorm": {
      blockBytes: 16,
      blockWidth: 4,
      blockHeight: 4
    },
    "astc-4x4-unorm": {
      blockBytes: 16,
      blockWidth: 4,
      blockHeight: 4
    }
  },
  Ru = {
    blockBytes: 4,
    blockWidth: 1,
    blockHeight: 1
  },
  Bu = {
    type: "compressed",
    upload(t, e, r) {
      let s = t.pixelWidth,
        i = t.pixelHeight;
      const n = Au[t.format] || Ru;
      for (let o = 0; o < t.resource.length; o++) {
        const a = t.resource[o],
          h = Math.ceil(s / n.blockWidth) * n.blockBytes;
        r.device.queue.writeTexture({
          texture: e,
          mipLevel: o
        }, a, {
          offset: 0,
          bytesPerRow: h
        }, {
          width: Math.ceil(s / n.blockWidth) * n.blockWidth,
          height: Math.ceil(i / n.blockHeight) * n.blockHeight,
          depthOrArrayLayers: 1
        }), s = Math.max(s >> 1, 1), i = Math.max(i >> 1, 1)
      }
    }
  },
  ku = {
    type: "image",
    upload(t, e, r) {
      const s = t.resource;
      if (!s) return;
      if (globalThis.HTMLImageElement && s instanceof HTMLImageElement) {
        const e = Me.get().createCanvas(s.width, s.height);
        e.getContext("2d").drawImage(s, 0, 0, s.width, s.height), t.resource = e, Bt("ImageSource: Image element passed, converting to canvas and replacing resource.")
      }
      const i = Math.min(e.width, t.resourceWidth || t.pixelWidth),
        n = Math.min(e.height, t.resourceHeight || t.pixelHeight),
        o = "premultiply-alpha-on-upload" === t.alphaMode;
      r.device.queue.copyExternalImageToTexture({
        source: s
      }, {
        texture: e,
        premultipliedAlpha: o
      }, {
        width: i,
        height: n
      })
    }
  },
  Gu = {
    type: "video",
    upload(t, e, r) {
      ku.upload(t, e, r)
    }
  };
class Iu {
  constructor(t) {
    this.device = t, this.sampler = t.createSampler({
      minFilter: "linear"
    }), this.pipelines = {}
  }
  _getMipmapPipeline(t) {
    let e = this.pipelines[t];
    return e || (this.mipmapShaderModule || (this.mipmapShaderModule = this.device.createShaderModule({
      code: "\n                        var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(\n                        vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));\n\n                        struct VertexOutput {\n                        @builtin(position) position : vec4<f32>,\n                        @location(0) texCoord : vec2<f32>,\n                        };\n\n                        @vertex\n                        fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {\n                        var output : VertexOutput;\n                        output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);\n                        output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);\n                        return output;\n                        }\n\n                        @group(0) @binding(0) var imgSampler : sampler;\n                        @group(0) @binding(1) var img : texture_2d<f32>;\n\n                        @fragment\n                        fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {\n                        return textureSample(img, imgSampler, texCoord);\n                        }\n                    "
    })), e = this.device.createRenderPipeline({
      layout: "auto",
      vertex: {
        module: this.mipmapShaderModule,
        entryPoint: "vertexMain"
      },
      fragment: {
        module: this.mipmapShaderModule,
        entryPoint: "fragmentMain",
        targets: [{
          format: t
        }]
      }
    }), this.pipelines[t] = e), e
  }
  generateMipmap(t) {
    const e = this._getMipmapPipeline(t.format);
    if ("3d" === t.dimension || "1d" === t.dimension) throw new Error("Generating mipmaps for non-2d textures is currently unsupported!");
    let r = t;
    const s = t.depthOrArrayLayers || 1,
      i = t.usage & GPUTextureUsage.RENDER_ATTACHMENT;
    if (!i) {
      const e = {
        size: {
          width: Math.ceil(t.width / 2),
          height: Math.ceil(t.height / 2),
          depthOrArrayLayers: s
        },
        format: t.format,
        usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT,
        mipLevelCount: t.mipLevelCount - 1
      };
      r = this.device.createTexture(e)
    }
    const n = this.device.createCommandEncoder({}),
      o = e.getBindGroupLayout(0);
    for (let a = 0; a < s; ++a) {
      let s = t.createView({
          baseMipLevel: 0,
          mipLevelCount: 1,
          dimension: "2d",
          baseArrayLayer: a,
          arrayLayerCount: 1
        }),
        h = i ? 1 : 0;
      for (let i = 1; i < t.mipLevelCount; ++i) {
        const t = r.createView({
            baseMipLevel: h++,
            mipLevelCount: 1,
            dimension: "2d",
            baseArrayLayer: a,
            arrayLayerCount: 1
          }),
          i = n.beginRenderPass({
            colorAttachments: [{
              view: t,
              storeOp: "store",
              loadOp: "clear",
              clearValue: {
                r: 0,
                g: 0,
                b: 0,
                a: 0
              }
            }]
          }),
          l = this.device.createBindGroup({
            layout: o,
            entries: [{
              binding: 0,
              resource: this.sampler
            }, {
              binding: 1,
              resource: s
            }]
          });
        i.setPipeline(e), i.setBindGroup(0, l), i.draw(3, 1, 0, 0), i.end(), s = t
      }
    }
    if (!i) {
      const e = {
        width: Math.ceil(t.width / 2),
        height: Math.ceil(t.height / 2),
        depthOrArrayLayers: s
      };
      for (let s = 1; s < t.mipLevelCount; ++s) n.copyTextureToTexture({
        texture: r,
        mipLevel: s - 1
      }, {
        texture: t,
        mipLevel: s
      }, e), e.width = Math.ceil(e.width / 2), e.height = Math.ceil(e.height / 2)
    }
    return this.device.queue.submit([n.finish()]), i || r.destroy(), t
  }
}
class Fu {
  constructor(t) {
    this.managedTextures = [], this._gpuSources = Object.create(null), this._gpuSamplers = Object.create(null), this._bindGroupHash = Object.create(null), this._textureViewHash = Object.create(null), this._uploads = {
      image: ku,
      buffer: Mu,
      video: Gu,
      compressed: Bu
    }, this._renderer = t, t.renderableGC.addManagedHash(this, "_gpuSources"), t.renderableGC.addManagedHash(this, "_gpuSamplers"), t.renderableGC.addManagedHash(this, "_bindGroupHash"), t.renderableGC.addManagedHash(this, "_textureViewHash")
  }
  contextChange(t) {
    this._gpu = t
  }
  initSource(t) {
    if (t.autoGenerateMipmaps) {
      const e = Math.max(t.pixelWidth, t.pixelHeight);
      t.mipLevelCount = Math.floor(Math.log2(e)) + 1
    }
    let e = GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST;
    "compressed" !== t.uploadMethodId && (e |= GPUTextureUsage.RENDER_ATTACHMENT, e |= GPUTextureUsage.COPY_SRC);
    const r = Au[t.format] || {
        blockWidth: 1,
        blockHeight: 1
      },
      s = Math.ceil(t.pixelWidth / r.blockWidth) * r.blockWidth,
      i = Math.ceil(t.pixelHeight / r.blockHeight) * r.blockHeight,
      n = {
        label: t.label,
        size: {
          width: s,
          height: i
        },
        format: t.format,
        sampleCount: t.sampleCount,
        mipLevelCount: t.mipLevelCount,
        dimension: t.dimension,
        usage: e
      },
      o = this._gpu.device.createTexture(n);
    return this._gpuSources[t.uid] = o, this.managedTextures.includes(t) || (t.on("update", this.onSourceUpdate, this), t.on("resize", this.onSourceResize, this), t.on("destroy", this.onSourceDestroy, this), t.on("unload", this.onSourceUnload, this), t.on("updateMipmaps", this.onUpdateMipmaps, this), this.managedTextures.push(t)), this.onSourceUpdate(t), o
  }
  onSourceUpdate(t) {
    const e = this.getGpuSource(t);
    e && (this._uploads[t.uploadMethodId] && this._uploads[t.uploadMethodId].upload(t, e, this._gpu), t.autoGenerateMipmaps && t.mipLevelCount > 1 && this.onUpdateMipmaps(t))
  }
  onSourceUnload(t) {
    const e = this._gpuSources[t.uid];
    e && (this._gpuSources[t.uid] = null, e.destroy())
  }
  onUpdateMipmaps(t) {
    this._mipmapGenerator || (this._mipmapGenerator = new Iu(this._gpu.device));
    const e = this.getGpuSource(t);
    this._mipmapGenerator.generateMipmap(e)
  }
  onSourceDestroy(t) {
    t.off("update", this.onSourceUpdate, this), t.off("unload", this.onSourceUnload, this), t.off("destroy", this.onSourceDestroy, this), t.off("resize", this.onSourceResize, this), t.off("updateMipmaps", this.onUpdateMipmaps, this), this.managedTextures.splice(this.managedTextures.indexOf(t), 1), this.onSourceUnload(t)
  }
  onSourceResize(t) {
    const e = this._gpuSources[t.uid];
    e ? e.width === t.pixelWidth && e.height === t.pixelHeight || (this._textureViewHash[t.uid] = null, this._bindGroupHash[t.uid] = null, this.onSourceUnload(t), this.initSource(t)) : this.initSource(t)
  }
  _initSampler(t) {
    return this._gpuSamplers[t._resourceId] = this._gpu.device.createSampler(t), this._gpuSamplers[t._resourceId]
  }
  getGpuSampler(t) {
    return this._gpuSamplers[t._resourceId] || this._initSampler(t)
  }
  getGpuSource(t) {
    return this._gpuSources[t.uid] || this.initSource(t)
  }
  getTextureBindGroup(t) {
    return this._bindGroupHash[t.uid] ?? this._createTextureBindGroup(t)
  }
  _createTextureBindGroup(t) {
    const e = t.source;
    return this._bindGroupHash[t.uid] = new qr({
      0: e,
      1: e.style,
      2: new jr({
        uTextureMatrix: {
          type: "mat3x3<f32>",
          value: t.textureMatrix.mapCoord
        }
      })
    }), this._bindGroupHash[t.uid]
  }
  getTextureView(t) {
    const e = t.source;
    return this._textureViewHash[e.uid] ?? this._createTextureView(e)
  }
  _createTextureView(t) {
    return this._textureViewHash[t.uid] = this.getGpuSource(t).createView(), this._textureViewHash[t.uid]
  }
  generateCanvas(t) {
    const e = this._renderer,
      r = e.gpu.device.createCommandEncoder(),
      s = Me.get().createCanvas();
    s.width = t.source.pixelWidth, s.height = t.source.pixelHeight;
    const i = s.getContext("webgpu");
    return i.configure({
      device: e.gpu.device,
      usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC,
      format: Me.get().getNavigator().gpu.getPreferredCanvasFormat(),
      alphaMode: "premultiplied"
    }), r.copyTextureToTexture({
      texture: e.texture.getGpuSource(t.source),
      origin: {
        x: 0,
        y: 0
      }
    }, {
      texture: i.getCurrentTexture()
    }, {
      width: s.width,
      height: s.height
    }), e.gpu.device.queue.submit([r.finish()]), s
  }
  getPixels(t) {
    const e = this.generateCanvas(t),
      r = Oo.getOptimalCanvasAndContext(e.width, e.height),
      s = r.context;
    s.drawImage(e, 0, 0);
    const {
      width: i,
      height: n
    } = e, o = s.getImageData(0, 0, i, n), a = new Uint8ClampedArray(o.data.buffer);
    return Oo.returnCanvasAndContext(r), {
      pixels: a,
      width: i,
      height: n
    }
  }
  destroy() {
    this.managedTextures.slice().forEach(t => this.onSourceDestroy(t)), this.managedTextures = null;
    for (const t of Object.keys(this._bindGroupHash)) {
      const e = Number(t),
        r = this._bindGroupHash[e];
      null == r || r.destroy(), this._bindGroupHash[e] = null
    }
    this._gpu = null, this._mipmapGenerator = null, this._gpuSources = null, this._bindGroupHash = null, this._textureViewHash = null, this._gpuSamplers = null
  }
}
Fu.extension = {
  type: [a.WebGPUSystem],
  name: "texture"
};
class Uu {
  constructor() {
    this._maxTextures = 0
  }
  contextChange(t) {
    const e = new jr({
      uTransformMatrix: {
        value: new v,
        type: "mat3x3<f32>"
      },
      uColor: {
        value: new Float32Array([1, 1, 1, 1]),
        type: "vec4<f32>"
      },
      uRound: {
        value: 0,
        type: "f32"
      }
    });
    this._maxTextures = t.limits.maxBatchableTextures;
    const r = ln({
      name: "graphics",
      bits: [cn, gn(this._maxTextures), Da, bn]
    });
    this.shader = new Zr({
      gpuProgram: r,
      resources: {
        localUniforms: e
      }
    })
  }
  execute(t, e) {
    const r = e.context,
      s = r.customShader || this.shader,
      i = t.renderer,
      n = i.graphicsContext,
      {
        batcher: o,
        instructions: a
      } = n.getContextRenderData(r),
      h = i.encoder;
    h.setGeometry(o.geometry, s.gpuProgram);
    const l = i.globalUniforms.bindGroup;
    h.setBindGroup(0, l, s.gpuProgram);
    const u = i.renderPipes.uniformBatch.getUniformBindGroup(s.resources.localUniforms, !0);
    h.setBindGroup(2, u, s.gpuProgram);
    const c = a.instructions;
    let d = null;
    for (let p = 0; p < a.instructionSize; p++) {
      const e = c[p];
      if (e.topology !== d && (d = e.topology, h.setPipelineFromGeometryProgramAndState(o.geometry, s.gpuProgram, t.state, e.topology)), s.groups[1] = e.bindGroup, !e.gpuBindGroup) {
        const t = e.textures;
        e.bindGroup = vi(t.textures, t.count, this._maxTextures), e.gpuBindGroup = i.bindGroup.getBindGroup(e.bindGroup, s.gpuProgram, 1)
      }
      h.setBindGroup(1, e.bindGroup, s.gpuProgram), h.renderPassEncoder.drawIndexed(e.size, 1, e.start)
    }
  }
  destroy() {
    this.shader.destroy(!0), this.shader = null
  }
}
Uu.extension = {
  type: [a.WebGPUPipesAdaptor],
  name: "graphics"
};
class Ou {
  init() {
    const t = ln({
      name: "mesh",
      bits: [Oa, Na, bn]
    });
    this._shader = new Zr({
      gpuProgram: t,
      resources: {
        uTexture: Z.EMPTY._source,
        uSampler: Z.EMPTY._source.style,
        textureUniforms: {
          uTextureMatrix: {
            type: "mat3x3<f32>",
            value: new v
          }
        }
      }
    })
  }
  execute(t, e) {
    const r = t.renderer;
    let s = e._shader;
    if (s) {
      if (!s.gpuProgram) return void Bt("Mesh shader has no gpuProgram", e.shader)
    } else s = this._shader, s.groups[2] = r.texture.getTextureBindGroup(e.texture);
    const i = s.gpuProgram;
    if (i.autoAssignGlobalUniforms && (s.groups[0] = r.globalUniforms.bindGroup), i.autoAssignLocalUniforms) {
      const e = t.localUniforms;
      s.groups[1] = r.renderPipes.uniformBatch.getUniformBindGroup(e, !0)
    }
    r.encoder.draw({
      geometry: e._geometry,
      shader: s,
      state: e.state
    })
  }
  destroy() {
    this._shader.destroy(!0), this._shader = null
  }
}
Ou.extension = {
  type: [a.WebGPUPipesAdaptor],
  name: "mesh"
};
const Du = [...Kl, _u, uu, lu, cu, ou, Fu, wu, Eu, Pu, vu, hu, du, nu],
  Lu = [...Zl, yu],
  Nu = [Ia, Ou, Uu],
  zu = [],
  Hu = [],
  Wu = [];
u.handleByNamedList(a.WebGPUSystem, zu), u.handleByNamedList(a.WebGPUPipes, Hu), u.handleByNamedList(a.WebGPUPipesAdaptor, Wu), u.add(...Du, ...Lu, ...Nu);
const Vu = Object.freeze(Object.defineProperty({
  __proto__: null,
  WebGPURenderer: class extends Ls {
    constructor() {
      super({
        name: "webgpu",
        type: Kr.WEBGPU,
        systems: zu,
        renderPipes: Hu,
        renderPipeAdaptors: Wu
      })
    }
  }
}, Symbol.toStringTag, {
  value: "Module"
}));
class Xu {
  constructor() {
    this.batches = [], this.batched = !1
  }
  destroy() {
    this.batches.forEach(t => {
      Gt.return(t)
    }), this.batches.length = 0
  }
}
class Yu {
  constructor(t, e) {
    this.state = ts.for2d(), this.renderer = t, this._adaptor = e, this.renderer.runners.contextChange.add(this)
  }
  contextChange() {
    this._adaptor.contextChange(this.renderer)
  }
  validateRenderable(t) {
    const e = t.context,
      r = !!t._gpuData,
      s = this.renderer.graphicsContext.updateGpuContext(e);
    return !(!s.isBatchable && r === s.isBatchable)
  }
  addRenderable(t, e) {
    const r = this.renderer.graphicsContext.updateGpuContext(t.context);
    t.didViewUpdate && this._rebuild(t), r.isBatchable ? this._addToBatcher(t, e) : (this.renderer.renderPipes.batch.break(e), e.add(t))
  }
  updateRenderable(t) {
    const e = this._getGpuDataForRenderable(t).batches;
    for (let r = 0; r < e.length; r++) {
      const t = e[r];
      t._batcher.updateElement(t)
    }
  }
  execute(t) {
    if (!t.isRenderable) return;
    const e = this.renderer,
      r = t.context;
    if (!e.graphicsContext.getGpuContext(r).batches.length) return;
    const s = r.customShader || this._adaptor.shader;
    this.state.blendMode = t.groupBlendMode;
    const i = s.resources.localUniforms.uniforms;
    i.uTransformMatrix = t.groupTransform, i.uRound = e._roundPixels | t._roundPixels, Ul(t.groupColorAlpha, i.uColor, 0), this._adaptor.execute(this, t)
  }
  _rebuild(t) {
    const e = this._getGpuDataForRenderable(t),
      r = this.renderer.graphicsContext.updateGpuContext(t.context);
    e.destroy(), r.isBatchable && this._updateBatchesForRenderable(t, e)
  }
  _addToBatcher(t, e) {
    const r = this.renderer.renderPipes.batch,
      s = this._getGpuDataForRenderable(t).batches;
    for (let i = 0; i < s.length; i++) {
      const t = s[i];
      r.addToBatch(t, e)
    }
  }
  _getGpuDataForRenderable(t) {
    return t._gpuData[this.renderer.uid] || this._initGpuDataForRenderable(t)
  }
  _initGpuDataForRenderable(t) {
    const e = new Xu;
    return t._gpuData[this.renderer.uid] = e, e
  }
  _updateBatchesForRenderable(t, e) {
    const r = t.context,
      s = this.renderer.graphicsContext.getGpuContext(r),
      i = this.renderer._roundPixels | t._roundPixels;
    e.batches = s.batches.map(e => {
      const r = Gt.get(Rn);
      return e.copyTo(r), r.renderable = t, r.roundPixels = i, r
    })
  }
  destroy() {
    this.renderer = null, this._adaptor.destroy(), this._adaptor = null, this.state = null
  }
}
Yu.extension = {
  type: [a.WebGLPipes, a.WebGPUPipes, a.CanvasPipes],
  name: "graphics"
};
const $u = class t extends pa {
  constructor(...t) {
    super({});
    let e = t[0] ?? {};
    "number" == typeof e && (D(O, "PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"), e = {
      width: e,
      height: t[1],
      verticesX: t[2],
      verticesY: t[3]
    }), this.build(e)
  }
  build(e) {
    e = {
      ...t.defaultOptions,
      ...e
    }, this.verticesX = this.verticesX ?? e.verticesX, this.verticesY = this.verticesY ?? e.verticesY, this.width = this.width ?? e.width, this.height = this.height ?? e.height;
    const r = this.verticesX * this.verticesY,
      s = [],
      i = [],
      n = [],
      o = this.verticesX - 1,
      a = this.verticesY - 1,
      h = this.width / o,
      l = this.height / a;
    for (let t = 0; t < r; t++) {
      const e = t % this.verticesX,
        r = t / this.verticesX | 0;
      s.push(e * h, r * l), i.push(e / o, r / a)
    }
    const u = o * a;
    for (let t = 0; t < u; t++) {
      const e = t % o,
        r = t / o | 0,
        s = r * this.verticesX + e,
        i = r * this.verticesX + e + 1,
        a = (r + 1) * this.verticesX + e,
        h = (r + 1) * this.verticesX + e + 1;
      n.push(s, i, a, i, h, a)
    }
    this.buffers[0].data = new Float32Array(s), this.buffers[1].data = new Float32Array(i), this.indexBuffer.data = new Uint32Array(n), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update()
  }
};
$u.defaultOptions = {
  width: 100,
  height: 100,
  verticesX: 10,
  verticesY: 10
};
let ju = $u;
class qu {
  constructor() {
    this.batcherName = "default", this.packAsQuad = !1, this.indexOffset = 0, this.attributeOffset = 0, this.roundPixels = 0, this._batcher = null, this._batch = null, this._textureMatrixUpdateId = -1, this._uvUpdateId = -1
  }
  get blendMode() {
    return this.renderable.groupBlendMode
  }
  get topology() {
    return this._topology || this.geometry.topology
  }
  set topology(t) {
    this._topology = t
  }
  reset() {
    this.renderable = null, this.texture = null, this._batcher = null, this._batch = null, this.geometry = null, this._uvUpdateId = -1, this._textureMatrixUpdateId = -1
  }
  setTexture(t) {
    this.texture !== t && (this.texture = t, this._textureMatrixUpdateId = -1)
  }
  get uvs() {
    const t = this.geometry.getBuffer("aUV"),
      e = t.data;
    let r = e;
    const s = this.texture.textureMatrix;
    return s.isSimple || (r = this._transformedUvs, this._textureMatrixUpdateId === s._updateID && this._uvUpdateId === t._updateID || ((!r || r.length < e.length) && (r = this._transformedUvs = new Float32Array(e.length)), this._textureMatrixUpdateId = s._updateID, this._uvUpdateId = t._updateID, s.multiplyUvs(e, r))), r
  }
  get positions() {
    return this.geometry.positions
  }
  get indices() {
    return this.geometry.indices
  }
  get color() {
    return this.renderable.groupColorAlpha
  }
  get groupTransform() {
    return this.renderable.groupTransform
  }
  get attributeSize() {
    return this.geometry.positions.length / 2
  }
  get indexSize() {
    return this.geometry.indices.length
  }
}
class Ku {
  destroy() {}
}
class Zu {
  constructor(t, e) {
    this.localUniforms = new jr({
      uTransformMatrix: {
        value: new v,
        type: "mat3x3<f32>"
      },
      uColor: {
        value: new Float32Array([1, 1, 1, 1]),
        type: "vec4<f32>"
      },
      uRound: {
        value: 0,
        type: "f32"
      }
    }), this.localUniformsBindGroup = new qr({
      0: this.localUniforms
    }), this.renderer = t, this._adaptor = e, this._adaptor.init()
  }
  validateRenderable(t) {
    const e = this._getMeshData(t),
      r = e.batched,
      s = t.batched;
    if (e.batched = s, r !== s) return !0;
    if (s) {
      const r = t._geometry;
      if (r.indices.length !== e.indexSize || r.positions.length !== e.vertexSize) return e.indexSize = r.indices.length, e.vertexSize = r.positions.length, !0;
      const s = this._getBatchableMesh(t);
      return s.texture.uid !== t._texture.uid && (s._textureMatrixUpdateId = -1), !s._batcher.checkAndUpdateTexture(s, t._texture)
    }
    return !1
  }
  addRenderable(t, e) {
    const r = this.renderer.renderPipes.batch,
      {
        batched: s
      } = this._getMeshData(t);
    if (s) {
      const s = this._getBatchableMesh(t);
      s.setTexture(t._texture), s.geometry = t._geometry, r.addToBatch(s, e)
    } else r.break(e), e.add(t)
  }
  updateRenderable(t) {
    if (t.batched) {
      const e = this._getBatchableMesh(t);
      e.setTexture(t._texture), e.geometry = t._geometry, e._batcher.updateElement(e)
    }
  }
  execute(t) {
    if (!t.isRenderable) return;
    t.state.blendMode = Ci(t.groupBlendMode, t.texture._source);
    const e = this.localUniforms;
    e.uniforms.uTransformMatrix = t.groupTransform, e.uniforms.uRound = this.renderer._roundPixels | t._roundPixels, e.update(), Ul(t.groupColorAlpha, e.uniforms.uColor, 0), this._adaptor.execute(this, t)
  }
  _getMeshData(t) {
    var e, r;
    return (e = t._gpuData)[r = this.renderer.uid] || (e[r] = new Ku), t._gpuData[this.renderer.uid].meshData || this._initMeshData(t)
  }
  _initMeshData(t) {
    var e, r;
    return t._gpuData[this.renderer.uid].meshData = {
      batched: t.batched,
      indexSize: null == (e = t._geometry.indices) ? void 0 : e.length,
      vertexSize: null == (r = t._geometry.positions) ? void 0 : r.length
    }, t._gpuData[this.renderer.uid].meshData
  }
  _getBatchableMesh(t) {
    var e, r;
    return (e = t._gpuData)[r = this.renderer.uid] || (e[r] = new Ku), t._gpuData[this.renderer.uid].batchableMesh || this._initBatchableMesh(t)
  }
  _initBatchableMesh(t) {
    const e = new qu;
    return e.renderable = t, e.setTexture(t._texture), e.transform = t.groupTransform, e.roundPixels = this.renderer._roundPixels | t._roundPixels, t._gpuData[this.renderer.uid].batchableMesh = e, e
  }
  destroy() {
    this.localUniforms = null, this.localUniformsBindGroup = null, this._adaptor.destroy(), this._adaptor = null, this.renderer = null
  }
}
Zu.extension = {
  type: [a.WebGLPipes, a.WebGPUPipes, a.CanvasPipes],
  name: "mesh"
};
class Qu {
  execute(t, e) {
    const r = t.state,
      s = t.renderer,
      i = e.shader || t.defaultShader;
    i.resources.uTexture = e.texture._source, i.resources.uniforms = t.localUniforms;
    const n = s.gl,
      o = t.getBuffers(e);
    s.shader.bind(i), s.state.set(r), s.geometry.bind(o.geometry, i.glProgram);
    const a = 2 === o.geometry.indexBuffer.data.BYTES_PER_ELEMENT ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
    n.drawElements(n.TRIANGLES, 6 * e.particleChildren.length, a, 0)
  }
}
class Ju {
  execute(t, e) {
    const r = t.renderer,
      s = e.shader || t.defaultShader;
    s.groups[0] = r.renderPipes.uniformBatch.getUniformBindGroup(t.localUniforms, !0), s.groups[1] = r.texture.getTextureBindGroup(e.texture);
    const i = t.state,
      n = t.getBuffers(e);
    r.encoder.draw({
      geometry: n.geometry,
      shader: e.shader || t.defaultShader,
      state: i,
      size: 6 * e.particleChildren.length
    })
  }
}

function tc(t, e = null) {
  const r = 6 * t;
  if (r > 65535 ? e || (e = new Uint32Array(r)) : e || (e = new Uint16Array(r)), e.length !== r) throw new Error(`Out buffer length is incorrect, got ${e.length} and expected ${r}`);
  for (let s = 0, i = 0; s < r; s += 6, i += 4) e[s + 0] = i + 0, e[s + 1] = i + 1, e[s + 2] = i + 2, e[s + 3] = i + 0, e[s + 4] = i + 2, e[s + 5] = i + 3;
  return e
}

function ec(t, e) {
  const r = [];
  r.push("\n\n        var index = 0;\n\n        for (let i = 0; i < ps.length; ++i)\n        {\n            const p = ps[i];\n\n            ");
  let s = 0;
  for (const n in t) {
    const i = t[n];
    e === i.dynamic && (r.push(`offset = index + ${s}`), r.push(i.code), s += Dr(i.format).stride / 4)
  }
  r.push("\n            index += stride * 4;\n        }\n    "), r.unshift(`\n        var stride = ${s};\n    `);
  const i = r.join("\n");
  return new Function("ps", "f32v", "u32v", i)
}
class rc {
  constructor(t) {
    this._size = 0, this._generateParticleUpdateCache = {};
    const e = this._size = t.size ?? 1e3,
      r = t.properties;
    let s = 0,
      i = 0;
    for (const l in r) {
      const t = r[l],
        e = Dr(t.format);
      t.dynamic ? i += e.stride : s += e.stride
    }
    this._dynamicStride = i / 4, this._staticStride = s / 4, this.staticAttributeBuffer = new Ti(4 * e * s), this.dynamicAttributeBuffer = new Ti(4 * e * i), this.indexBuffer = tc(e);
    const n = new Wi;
    let o = 0,
      a = 0;
    this._staticBuffer = new zi({
      data: new Float32Array(1),
      label: "static-particle-buffer",
      shrinkToFit: !1,
      usage: Ni.VERTEX | Ni.COPY_DST
    }), this._dynamicBuffer = new zi({
      data: new Float32Array(1),
      label: "dynamic-particle-buffer",
      shrinkToFit: !1,
      usage: Ni.VERTEX | Ni.COPY_DST
    });
    for (const l in r) {
      const t = r[l],
        e = Dr(t.format);
      t.dynamic ? (n.addAttribute(t.attributeName, {
        buffer: this._dynamicBuffer,
        stride: 4 * this._dynamicStride,
        offset: 4 * o,
        format: t.format
      }), o += e.size) : (n.addAttribute(t.attributeName, {
        buffer: this._staticBuffer,
        stride: 4 * this._staticStride,
        offset: 4 * a,
        format: t.format
      }), a += e.size)
    }
    n.addIndex(this.indexBuffer);
    const h = this.getParticleUpdate(r);
    this._dynamicUpload = h.dynamicUpdate, this._staticUpload = h.staticUpdate, this.geometry = n
  }
  getParticleUpdate(t) {
    const e = function(t) {
      const e = [];
      for (const r in t) {
        const s = t[r];
        e.push(r, s.code, s.dynamic ? "d" : "s")
      }
      return e.join("_")
    }(t);
    return this._generateParticleUpdateCache[e] || (this._generateParticleUpdateCache[e] = this.generateParticleUpdate(t)), this._generateParticleUpdateCache[e]
  }
  generateParticleUpdate(t) {
    return function(t) {
      return {
        dynamicUpdate: ec(t, !0),
        staticUpdate: ec(t, !1)
      }
    }(t)
  }
  update(t, e) {
    t.length > this._size && (e = !0, this._size = Math.max(t.length, 1.5 * this._size | 0), this.staticAttributeBuffer = new Ti(this._size * this._staticStride * 4 * 4), this.dynamicAttributeBuffer = new Ti(this._size * this._dynamicStride * 4 * 4), this.indexBuffer = tc(this._size), this.geometry.indexBuffer.setDataWithSize(this.indexBuffer, this.indexBuffer.byteLength, !0));
    const r = this.dynamicAttributeBuffer;
    if (this._dynamicUpload(t, r.float32View, r.uint32View), this._dynamicBuffer.setDataWithSize(this.dynamicAttributeBuffer.float32View, t.length * this._dynamicStride * 4, !0), e) {
      const e = this.staticAttributeBuffer;
      this._staticUpload(t, e.float32View, e.uint32View), this._staticBuffer.setDataWithSize(e.float32View, t.length * this._staticStride * 4, !0)
    }
  }
  destroy() {
    this._staticBuffer.destroy(), this._dynamicBuffer.destroy(), this.geometry.destroy()
  }
}
var sc = "\nstruct ParticleUniforms {\n  uProjectionMatrix:mat3x3<f32>,\n  uColor:vec4<f32>,\n  uResolution:vec2<f32>,\n  uRoundPixels:f32,\n};\n\n@group(0) @binding(0) var<uniform> uniforms: ParticleUniforms;\n\n@group(1) @binding(0) var uTexture: texture_2d<f32>;\n@group(1) @binding(1) var uSampler : sampler;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n    @location(1) color : vec4<f32>,\n  };\n@vertex\nfn mainVertex(\n  @location(0) aVertex: vec2<f32>,\n  @location(1) aPosition: vec2<f32>,\n  @location(2) aUV: vec2<f32>,\n  @location(3) aColor: vec4<f32>,\n  @location(4) aRotation: f32,\n) -> VSOutput {\n  \n   let v = vec2(\n       aVertex.x * cos(aRotation) - aVertex.y * sin(aRotation),\n       aVertex.x * sin(aRotation) + aVertex.y * cos(aRotation)\n   ) + aPosition;\n\n   let position = vec4((uniforms.uProjectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    let vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uniforms.uColor;\n\n  return VSOutput(\n   position,\n   aUV,\n   vColor,\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @location(1) color: vec4<f32>,\n  @builtin(position) position: vec4<f32>,\n) -> @location(0) vec4<f32> {\n\n    var sample = textureSample(uTexture, uSampler, uv) * color;\n   \n    return sample;\n}";
class ic extends Zr {
  constructor() {
    super({
      glProgram: Ur.from({
        vertex: "attribute vec2 aVertex;\nattribute vec2 aUV;\nattribute vec4 aColor;\n\nattribute vec2 aPosition;\nattribute float aRotation;\n\nuniform mat3 uTranslationMatrix;\nuniform float uRound;\nuniform vec2 uResolution;\nuniform vec4 uColor;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\n\nvec2 roundPixels(vec2 position, vec2 targetSize)\n{       \n    return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;\n}\n\nvoid main(void){\n    float cosRotation = cos(aRotation);\n    float sinRotation = sin(aRotation);\n    float x = aVertex.x * cosRotation - aVertex.y * sinRotation;\n    float y = aVertex.x * sinRotation + aVertex.y * cosRotation;\n\n    vec2 v = vec2(x, y);\n    v = v + aPosition;\n\n    gl_Position = vec4((uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    if(uRound == 1.0)\n    {\n        gl_Position.xy = roundPixels(gl_Position.xy, uResolution);\n    }\n\n    vUV = aUV;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uColor;\n}\n",
        fragment: "varying vec2 vUV;\nvarying vec4 vColor;\n\nuniform sampler2D uTexture;\n\nvoid main(void){\n    vec4 color = texture2D(uTexture, vUV) * vColor;\n    gl_FragColor = color;\n}"
      }),
      gpuProgram: Wr.from({
        fragment: {
          source: sc,
          entryPoint: "mainFragment"
        },
        vertex: {
          source: sc,
          entryPoint: "mainVertex"
        }
      }),
      resources: {
        uTexture: Z.WHITE.source,
        uSampler: new X({}),
        uniforms: {
          uTranslationMatrix: {
            value: new v,
            type: "mat3x3<f32>"
          },
          uColor: {
            value: new At(16777215),
            type: "vec4<f32>"
          },
          uRound: {
            value: 1,
            type: "f32"
          },
          uResolution: {
            value: [0, 0],
            type: "vec2<f32>"
          }
        }
      }
    })
  }
}
class nc {
  constructor(t, e) {
    this.state = ts.for2d(), this.localUniforms = new jr({
      uTranslationMatrix: {
        value: new v,
        type: "mat3x3<f32>"
      },
      uColor: {
        value: new Float32Array(4),
        type: "vec4<f32>"
      },
      uRound: {
        value: 1,
        type: "f32"
      },
      uResolution: {
        value: [0, 0],
        type: "vec2<f32>"
      }
    }), this.renderer = t, this.adaptor = e, this.defaultShader = new ic, this.state = ts.for2d()
  }
  validateRenderable(t) {
    return !1
  }
  addRenderable(t, e) {
    this.renderer.renderPipes.batch.break(e), e.add(t)
  }
  getBuffers(t) {
    return t._gpuData[this.renderer.uid] || this._initBuffer(t)
  }
  _initBuffer(t) {
    return t._gpuData[this.renderer.uid] = new rc({
      size: t.particleChildren.length,
      properties: t._properties
    }), t._gpuData[this.renderer.uid]
  }
  updateRenderable(t) {}
  execute(t) {
    const e = t.particleChildren;
    if (0 === e.length) return;
    const r = this.renderer,
      s = this.getBuffers(t);
    t.texture || (t.texture = e[0].texture);
    const i = this.state;
    s.update(e, t._childrenDirty), t._childrenDirty = !1, i.blendMode = Ci(t.blendMode, t.texture._source);
    const n = this.localUniforms.uniforms,
      o = n.uTranslationMatrix;
    t.worldTransform.copyTo(o), o.prepend(r.globalUniforms.globalUniformData.projectionMatrix), n.uResolution = r.globalUniforms.globalUniformData.resolution, n.uRound = r._roundPixels | t._roundPixels, Ul(t.groupColorAlpha, n.uColor, 0), this.adaptor.execute(this, t)
  }
  destroy() {
    this.defaultShader && (this.defaultShader.destroy(), this.defaultShader = null)
  }
}
class oc extends nc {
  constructor(t) {
    super(t, new Qu)
  }
}
oc.extension = {
  type: [a.WebGLPipes],
  name: "particle"
};
class ac extends nc {
  constructor(t) {
    super(t, new Ju)
  }
}
ac.extension = {
  type: [a.WebGPUPipes],
  name: "particle"
};
const hc = class t extends ju {
  constructor(e = {}) {
    super({
      width: (e = {
        ...t.defaultOptions,
        ...e
      }).width,
      height: e.height,
      verticesX: 4,
      verticesY: 4
    }), this.update(e)
  }
  update(t) {
    var e, r;
    this.width = t.width ?? this.width, this.height = t.height ?? this.height, this._originalWidth = t.originalWidth ?? this._originalWidth, this._originalHeight = t.originalHeight ?? this._originalHeight, this._leftWidth = t.leftWidth ?? this._leftWidth, this._rightWidth = t.rightWidth ?? this._rightWidth, this._topHeight = t.topHeight ?? this._topHeight, this._bottomHeight = t.bottomHeight ?? this._bottomHeight, this._anchorX = null == (e = t.anchor) ? void 0 : e.x, this._anchorY = null == (r = t.anchor) ? void 0 : r.y, this.updateUvs(), this.updatePositions()
  }
  updatePositions() {
    const t = this.positions,
      {
        width: e,
        height: r,
        _leftWidth: s,
        _rightWidth: i,
        _topHeight: n,
        _bottomHeight: o,
        _anchorX: a,
        _anchorY: h
      } = this,
      l = s + i,
      u = e > l ? 1 : e / l,
      c = n + o,
      d = r > c ? 1 : r / c,
      p = Math.min(u, d),
      f = a * e,
      m = h * r;
    t[0] = t[8] = t[16] = t[24] = -f, t[2] = t[10] = t[18] = t[26] = s * p - f, t[4] = t[12] = t[20] = t[28] = e - i * p - f, t[6] = t[14] = t[22] = t[30] = e - f, t[1] = t[3] = t[5] = t[7] = -m, t[9] = t[11] = t[13] = t[15] = n * p - m, t[17] = t[19] = t[21] = t[23] = r - o * p - m, t[25] = t[27] = t[29] = t[31] = r - m, this.getBuffer("aPosition").update()
  }
  updateUvs() {
    const t = this.uvs;
    t[0] = t[8] = t[16] = t[24] = 0, t[1] = t[3] = t[5] = t[7] = 0, t[6] = t[14] = t[22] = t[30] = 1, t[25] = t[27] = t[29] = t[31] = 1;
    const e = 1 / this._originalWidth,
      r = 1 / this._originalHeight;
    t[2] = t[10] = t[18] = t[26] = e * this._leftWidth, t[9] = t[11] = t[13] = t[15] = r * this._topHeight, t[4] = t[12] = t[20] = t[28] = 1 - e * this._rightWidth, t[17] = t[19] = t[21] = t[23] = 1 - r * this._bottomHeight, this.getBuffer("aUV").update()
  }
};
hc.defaultOptions = {
  width: 100,
  height: 100,
  leftWidth: 10,
  topHeight: 10,
  rightWidth: 10,
  bottomHeight: 10,
  originalWidth: 100,
  originalHeight: 100
};
let lc = hc;
class uc extends qu {
  constructor() {
    super(), this.geometry = new lc
  }
  destroy() {
    this.geometry.destroy()
  }
}
class cc {
  constructor(t) {
    this._renderer = t
  }
  addRenderable(t, e) {
    const r = this._getGpuSprite(t);
    t.didViewUpdate && this._updateBatchableSprite(t, r), this._renderer.renderPipes.batch.addToBatch(r, e)
  }
  updateRenderable(t) {
    const e = this._getGpuSprite(t);
    t.didViewUpdate && this._updateBatchableSprite(t, e), e._batcher.updateElement(e)
  }
  validateRenderable(t) {
    const e = this._getGpuSprite(t);
    return !e._batcher.checkAndUpdateTexture(e, t._texture)
  }
  _updateBatchableSprite(t, e) {
    e.geometry.update(t), e.setTexture(t._texture)
  }
  _getGpuSprite(t) {
    return t._gpuData[this._renderer.uid] || this._initGPUSprite(t)
  }
  _initGPUSprite(t) {
    const e = t._gpuData[this._renderer.uid] = new uc,
      r = e;
    return r.renderable = t, r.transform = t.groupTransform, r.texture = t._texture, r.roundPixels = this._renderer._roundPixels | t._roundPixels, t.didViewUpdate || this._updateBatchableSprite(t, r), e
  }
  destroy() {
    this._renderer = null
  }
}
cc.extension = {
  type: [a.WebGLPipes, a.WebGPUPipes, a.CanvasPipes],
  name: "nineSliceSprite"
};
const dc = {
    name: "tiling-bit",
    vertex: {
      header: "\n            struct TilingUniforms {\n                uMapCoord:mat3x3<f32>,\n                uClampFrame:vec4<f32>,\n                uClampOffset:vec2<f32>,\n                uTextureTransform:mat3x3<f32>,\n                uSizeAnchor:vec4<f32>\n            };\n\n            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;\n            @group(2) @binding(1) var uTexture: texture_2d<f32>;\n            @group(2) @binding(2) var uSampler: sampler;\n        ",
      main: "\n            uv = (tilingUniforms.uTextureTransform * vec3(uv, 1.0)).xy;\n\n            position = (position - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;\n        "
    },
    fragment: {
      header: "\n            struct TilingUniforms {\n                uMapCoord:mat3x3<f32>,\n                uClampFrame:vec4<f32>,\n                uClampOffset:vec2<f32>,\n                uTextureTransform:mat3x3<f32>,\n                uSizeAnchor:vec4<f32>\n            };\n\n            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;\n            @group(2) @binding(1) var uTexture: texture_2d<f32>;\n            @group(2) @binding(2) var uSampler: sampler;\n        ",
      main: "\n\n            var coord = vUV + ceil(tilingUniforms.uClampOffset - vUV);\n            coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;\n            var unclamped = coord;\n            coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);\n\n            var bias = 0.;\n\n            if(unclamped.x == coord.x && unclamped.y == coord.y)\n            {\n                bias = -32.;\n            }\n\n            outColor = textureSampleBias(uTexture, uSampler, coord, bias);\n        "
    }
  },
  pc = {
    name: "tiling-bit",
    vertex: {
      header: "\n            uniform mat3 uTextureTransform;\n            uniform vec4 uSizeAnchor;\n\n        ",
      main: "\n            uv = (uTextureTransform * vec3(aUV, 1.0)).xy;\n\n            position = (position - uSizeAnchor.zw) * uSizeAnchor.xy;\n        "
    },
    fragment: {
      header: "\n            uniform sampler2D uTexture;\n            uniform mat3 uMapCoord;\n            uniform vec4 uClampFrame;\n            uniform vec2 uClampOffset;\n        ",
      main: "\n\n        vec2 coord = vUV + ceil(uClampOffset - vUV);\n        coord = (uMapCoord * vec3(coord, 1.0)).xy;\n        vec2 unclamped = coord;\n        coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n        outColor = texture(uTexture, coord, unclamped == coord ? 0.0 : -32.0);// lod-bias very negative to force lod 0\n\n        "
    }
  };
let fc, mc;
class gc extends Zr {
  constructor() {
    fc ?? (fc = ln({
      name: "tiling-sprite-shader",
      bits: [Oa, dc, bn]
    })), mc ?? (mc = un({
      name: "tiling-sprite-shader",
      bits: [La, pc, vn]
    }));
    const t = new jr({
      uMapCoord: {
        value: new v,
        type: "mat3x3<f32>"
      },
      uClampFrame: {
        value: new Float32Array([0, 0, 1, 1]),
        type: "vec4<f32>"
      },
      uClampOffset: {
        value: new Float32Array([0, 0]),
        type: "vec2<f32>"
      },
      uTextureTransform: {
        value: new v,
        type: "mat3x3<f32>"
      },
      uSizeAnchor: {
        value: new Float32Array([100, 100, .5, .5]),
        type: "vec4<f32>"
      }
    });
    super({
      glProgram: mc,
      gpuProgram: fc,
      resources: {
        localUniforms: new jr({
          uTransformMatrix: {
            value: new v,
            type: "mat3x3<f32>"
          },
          uColor: {
            value: new Float32Array([1, 1, 1, 1]),
            type: "vec4<f32>"
          },
          uRound: {
            value: 0,
            type: "f32"
          }
        }),
        tilingUniforms: t,
        uTexture: Z.EMPTY.source,
        uSampler: Z.EMPTY.source.style
      }
    })
  }
  updateUniforms(t, e, r, s, i, n) {
    const o = this.resources.tilingUniforms,
      a = n.width,
      h = n.height,
      l = n.textureMatrix,
      u = o.uniforms.uTextureTransform;
    u.set(r.a * a / t, r.b * a / e, r.c * h / t, r.d * h / e, r.tx / t, r.ty / e), u.invert(), o.uniforms.uMapCoord = l.mapCoord, o.uniforms.uClampFrame = l.uClampFrame, o.uniforms.uClampOffset = l.uClampOffset, o.uniforms.uTextureTransform = u, o.uniforms.uSizeAnchor[0] = t, o.uniforms.uSizeAnchor[1] = e, o.uniforms.uSizeAnchor[2] = s, o.uniforms.uSizeAnchor[3] = i, n && (this.resources.uTexture = n.source, this.resources.uSampler = n.source.style)
  }
}
const _c = new class extends pa {
  constructor() {
    super({
      positions: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
      uvs: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
      indices: new Uint32Array([0, 1, 2, 0, 2, 3])
    })
  }
};
class xc {
  constructor() {
    this.canBatch = !0, this.geometry = new pa({
      indices: _c.indices.slice(),
      positions: _c.positions.slice(),
      uvs: _c.uvs.slice()
    })
  }
  destroy() {
    var t;
    this.geometry.destroy(), null == (t = this.shader) || t.destroy()
  }
}
class yc {
  constructor(t) {
    this._state = ts.default2d, this._renderer = t
  }
  validateRenderable(t) {
    const e = this._getTilingSpriteData(t),
      r = e.canBatch;
    this._updateCanBatch(t);
    const s = e.canBatch;
    if (s && s === r) {
      const {
        batchableMesh: r
      } = e;
      return !r._batcher.checkAndUpdateTexture(r, t.texture)
    }
    return r !== s
  }
  addRenderable(t, e) {
    const r = this._renderer.renderPipes.batch;
    this._updateCanBatch(t);
    const s = this._getTilingSpriteData(t),
      {
        geometry: i,
        canBatch: n
      } = s;
    if (n) {
      s.batchableMesh || (s.batchableMesh = new qu);
      const n = s.batchableMesh;
      t.didViewUpdate && (this._updateBatchableMesh(t), n.geometry = i, n.renderable = t, n.transform = t.groupTransform, n.setTexture(t._texture)), n.roundPixels = this._renderer._roundPixels | t._roundPixels, r.addToBatch(n, e)
    } else r.break(e), s.shader || (s.shader = new gc), this.updateRenderable(t), e.add(t)
  }
  execute(t) {
    const {
      shader: e
    } = this._getTilingSpriteData(t);
    e.groups[0] = this._renderer.globalUniforms.bindGroup;
    const r = e.resources.localUniforms.uniforms;
    r.uTransformMatrix = t.groupTransform, r.uRound = this._renderer._roundPixels | t._roundPixels, Ul(t.groupColorAlpha, r.uColor, 0), this._state.blendMode = Ci(t.groupBlendMode, t.texture._source), this._renderer.encoder.draw({
      geometry: _c,
      shader: e,
      state: this._state
    })
  }
  updateRenderable(t) {
    const e = this._getTilingSpriteData(t),
      {
        canBatch: r
      } = e;
    if (r) {
      const {
        batchableMesh: r
      } = e;
      t.didViewUpdate && this._updateBatchableMesh(t), r._batcher.updateElement(r)
    } else if (t.didViewUpdate) {
      const {
        shader: r
      } = e;
      r.updateUniforms(t.width, t.height, t._tileTransform.matrix, t.anchor.x, t.anchor.y, t.texture)
    }
  }
  _getTilingSpriteData(t) {
    return t._gpuData[this._renderer.uid] || this._initTilingSpriteData(t)
  }
  _initTilingSpriteData(t) {
    const e = new xc;
    return e.renderable = t, t._gpuData[this._renderer.uid] = e, e
  }
  _updateBatchableMesh(t) {
    const e = this._getTilingSpriteData(t),
      {
        geometry: r
      } = e,
      s = t.texture.source.style;
    "repeat" !== s.addressMode && (s.addressMode = "repeat", s.update()),
      function(t, e) {
        const r = t.texture,
          s = r.frame.width,
          i = r.frame.height;
        let n = 0,
          o = 0;
        t.applyAnchorToTexture && (n = t.anchor.x, o = t.anchor.y), e[0] = e[6] = -n, e[2] = e[4] = 1 - n, e[1] = e[3] = -o, e[5] = e[7] = 1 - o;
        const a = v.shared;
        a.copyFrom(t._tileTransform.matrix), a.tx /= t.width, a.ty /= t.height, a.invert(), a.scale(t.width / s, t.height / i),
          function(t, e, r, s) {
            let i = 0;
            const n = t.length / 2,
              o = s.a,
              a = s.b,
              h = s.c,
              l = s.d,
              u = s.tx,
              c = s.ty;
            for (r *= 2; i < n;) {
              const e = t[r],
                s = t[r + 1];
              t[r] = o * e + h * s + u, t[r + 1] = a * e + l * s + c, r += 2, i++
            }
          }(e, 0, 0, a)
      }(t, r.uvs),
      function(t, e) {
        const r = t.anchor.x,
          s = t.anchor.y;
        e[0] = -r * t.width, e[1] = -s * t.height, e[2] = (1 - r) * t.width, e[3] = -s * t.height, e[4] = (1 - r) * t.width, e[5] = (1 - s) * t.height, e[6] = -r * t.width, e[7] = (1 - s) * t.height
      }(t, r.positions)
  }
  destroy() {
    this._renderer = null
  }
  _updateCanBatch(t) {
    const e = this._getTilingSpriteData(t),
      r = t.texture;
    let s = !0;
    return this._renderer.type === Kr.WEBGL && (s = this._renderer.context.supports.nonPowOf2wrapping), e.canBatch = r.textureMatrix.isSimple && (s || r.source.isPowerOfTwo), e.canBatch
  }
}
yc.extension = {
  type: [a.WebGLPipes, a.WebGPUPipes, a.CanvasPipes],
  name: "tilingSprite"
};
const bc = {
    name: "local-uniform-msdf-bit",
    vertex: {
      header: "\n            struct LocalUniforms {\n                uColor:vec4<f32>,\n                uTransformMatrix:mat3x3<f32>,\n                uDistance: f32,\n                uRound:f32,\n            }\n\n            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;\n        ",
      main: "\n            vColor *= localUniforms.uColor;\n            modelMatrix *= localUniforms.uTransformMatrix;\n        ",
      end: "\n            if(localUniforms.uRound == 1)\n            {\n                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);\n            }\n        "
    },
    fragment: {
      header: "\n            struct LocalUniforms {\n                uColor:vec4<f32>,\n                uTransformMatrix:mat3x3<f32>,\n                uDistance: f32\n            }\n\n            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;\n         ",
      main: "\n            outColor = vec4<f32>(calculateMSDFAlpha(outColor, localUniforms.uColor, localUniforms.uDistance));\n        "
    }
  },
  vc = {
    name: "local-uniform-msdf-bit",
    vertex: {
      header: "\n            uniform mat3 uTransformMatrix;\n            uniform vec4 uColor;\n            uniform float uRound;\n        ",
      main: "\n            vColor *= uColor;\n            modelMatrix *= uTransformMatrix;\n        ",
      end: "\n            if(uRound == 1.)\n            {\n                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);\n            }\n        "
    },
    fragment: {
      header: "\n            uniform float uDistance;\n         ",
      main: "\n            outColor = vec4(calculateMSDFAlpha(outColor, vColor, uDistance));\n        "
    }
  },
  Tc = {
    name: "msdf-bit",
    fragment: {
      header: "\n            fn calculateMSDFAlpha(msdfColor:vec4<f32>, shapeColor:vec4<f32>, distance:f32) -> f32 {\n\n                // MSDF\n                var median = msdfColor.r + msdfColor.g + msdfColor.b -\n                    min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -\n                    max(msdfColor.r, max(msdfColor.g, msdfColor.b));\n\n                // SDF\n                median = min(median, msdfColor.a);\n\n                var screenPxDistance = distance * (median - 0.5);\n                var alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\n                if (median < 0.01) {\n                    alpha = 0.0;\n                } else if (median > 0.99) {\n                    alpha = 1.0;\n                }\n\n                // Gamma correction for coverage-like alpha\n                var luma: f32 = dot(shapeColor.rgb, vec3<f32>(0.299, 0.587, 0.114));\n                var gamma: f32 = mix(1.0, 1.0 / 2.2, luma);\n                var coverage: f32 = pow(shapeColor.a * alpha, gamma);\n\n                return coverage;\n\n            }\n        "
    }
  },
  Sc = {
    name: "msdf-bit",
    fragment: {
      header: "\n            float calculateMSDFAlpha(vec4 msdfColor, vec4 shapeColor, float distance) {\n\n                // MSDF\n                float median = msdfColor.r + msdfColor.g + msdfColor.b -\n                                min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -\n                                max(msdfColor.r, max(msdfColor.g, msdfColor.b));\n\n                // SDF\n                median = min(median, msdfColor.a);\n\n                float screenPxDistance = distance * (median - 0.5);\n                float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\n\n                if (median < 0.01) {\n                    alpha = 0.0;\n                } else if (median > 0.99) {\n                    alpha = 1.0;\n                }\n\n                // Gamma correction for coverage-like alpha\n                float luma = dot(shapeColor.rgb, vec3(0.299, 0.587, 0.114));\n                float gamma = mix(1.0, 1.0 / 2.2, luma);\n                float coverage = pow(shapeColor.a * alpha, gamma);\n\n                return coverage;\n            }\n        "
    }
  };
let wc, Ec;
class Cc extends Zr {
  constructor(t) {
    const e = new jr({
      uColor: {
        value: new Float32Array([1, 1, 1, 1]),
        type: "vec4<f32>"
      },
      uTransformMatrix: {
        value: new v,
        type: "mat3x3<f32>"
      },
      uDistance: {
        value: 4,
        type: "f32"
      },
      uRound: {
        value: 0,
        type: "f32"
      }
    });
    wc ?? (wc = ln({
      name: "sdf-shader",
      bits: [cn, gn(t), bc, Tc, bn]
    })), Ec ?? (Ec = un({
      name: "sdf-shader",
      bits: [dn, yn(t), vc, Sc, vn]
    })), super({
      glProgram: Ec,
      gpuProgram: wc,
      resources: {
        localUniforms: e,
        batchSamplers: Sn(t)
      }
    })
  }
}
class Pc extends ca {
  destroy() {
    this.context.customShader && this.context.customShader.destroy(), super.destroy()
  }
}
class Mc {
  constructor(t) {
    this._renderer = t, this._renderer.renderableGC.addManagedHash(this, "_gpuBitmapText")
  }
  validateRenderable(t) {
    const e = this._getGpuBitmapText(t);
    return t._didTextUpdate && (t._didTextUpdate = !1, this._updateContext(t, e)), this._renderer.renderPipes.graphics.validateRenderable(e)
  }
  addRenderable(t, e) {
    const r = this._getGpuBitmapText(t);
    Ac(t, r), t._didTextUpdate && (t._didTextUpdate = !1, this._updateContext(t, r)), this._renderer.renderPipes.graphics.addRenderable(r, e), r.context.customShader && this._updateDistanceField(t)
  }
  updateRenderable(t) {
    const e = this._getGpuBitmapText(t);
    Ac(t, e), this._renderer.renderPipes.graphics.updateRenderable(e), e.context.customShader && this._updateDistanceField(t)
  }
  _updateContext(t, e) {
    const {
      context: r
    } = e, s = Vo.getFont(t.text, t._style);
    r.clear(), "none" !== s.distanceField.type && (r.customShader || (r.customShader = new Cc(this._renderer.limits.maxBatchableTextures)));
    const i = ei.graphemeSegmenter(t.text),
      n = t._style;
    let o = s.baseLineOffset;
    const a = Ho(i, n, s, !0),
      h = n.padding,
      l = a.scale;
    let u = a.width,
      c = a.height + a.offsetY;
    n._stroke && (u += n._stroke.width / l, c += n._stroke.width / l), r.translate(-t._anchor._x * u - h, -t._anchor._y * c - h).scale(l, l);
    const d = s.applyFillAsTint ? n._fill.color : 16777215;
    for (let p = 0; p < a.lines.length; p++) {
      const t = a.lines[p];
      for (let e = 0; e < t.charPositions.length; e++) {
        const i = t.chars[e],
          n = s.chars[i];
        (null == n ? void 0 : n.texture) && r.texture(n.texture, d || "black", Math.round(t.charPositions[e] + n.xOffset), Math.round(o + n.yOffset))
      }
      o += s.lineHeight
    }
  }
  _getGpuBitmapText(t) {
    return t._gpuData[this._renderer.uid] || this.initGpuText(t)
  }
  initGpuText(t) {
    const e = new Pc;
    return t._gpuData[this._renderer.uid] = e, this._updateContext(t, e), e
  }
  _updateDistanceField(t) {
    const e = this._getGpuBitmapText(t).context,
      r = t._style.fontFamily,
      s = Le.get(`${r}-bitmap`),
      {
        a: i,
        b: n,
        c: o,
        d: a
      } = t.groupTransform,
      h = Math.sqrt(i * i + n * n),
      l = Math.sqrt(o * o + a * a),
      u = (Math.abs(h) + Math.abs(l)) / 2,
      c = s.baseRenderedFontSize / t._style.fontSize,
      d = u * s.distanceField.range * (1 / c);
    e.customShader.resources.localUniforms.uniforms.uDistance = d
  }
  destroy() {
    this._renderer = null
  }
}

function Ac(t, e) {
  e.groupTransform = t.groupTransform, e.groupColorAlpha = t.groupColorAlpha, e.groupColor = t.groupColor, e.groupBlendMode = t.groupBlendMode, e.globalDisplayStatus = t.globalDisplayStatus, e.groupTransform = t.groupTransform, e.localDisplayStatus = t.localDisplayStatus, e.groupAlpha = t.groupAlpha, e._roundPixels = t._roundPixels
}
Mc.extension = {
  type: [a.WebGLPipes, a.WebGPUPipes, a.CanvasPipes],
  name: "bitmapText"
};
class Rc extends dl {
  constructor(t) {
    super(), this.generatingTexture = !1, this._renderer = t, t.runners.resolutionChange.add(this)
  }
  resolutionChange() {
    const t = this.renderable;
    t._autoResolution && t.onViewUpdate()
  }
  destroy() {
    this._renderer.htmlText.returnTexturePromise(this.texturePromise), this.texturePromise = null, this._renderer = null
  }
}

function Bc(t, e) {
  const {
    texture: r,
    bounds: s
  } = t, i = e._style._getFinalPadding();
  Q(s, e._anchor, r);
  const n = e._anchor._x * i * 2,
    o = e._anchor._y * i * 2;
  s.minX -= i - n, s.minY -= i - o, s.maxX -= i - n, s.maxY -= i - o
}
class kc {
  constructor(t) {
    this._renderer = t
  }
  validateRenderable(t) {
    return t._didTextUpdate
  }
  addRenderable(t, e) {
    const r = this._getGpuText(t);
    t._didTextUpdate && (this._updateGpuText(t).catch(t => {
      console.error(t)
    }), t._didTextUpdate = !1, Bc(r, t)), this._renderer.renderPipes.batch.addToBatch(r, e)
  }
  updateRenderable(t) {
    const e = this._getGpuText(t);
    e._batcher.updateElement(e)
  }
  async _updateGpuText(t) {
    t._didTextUpdate = !1;
    const e = this._getGpuText(t);
    if (e.generatingTexture) return;
    e.texturePromise && (this._renderer.htmlText.returnTexturePromise(e.texturePromise), e.texturePromise = null), e.generatingTexture = !0, t._resolution = t._autoResolution ? this._renderer.resolution : t.resolution;
    const r = this._renderer.htmlText.getTexturePromise(t);
    e.texturePromise = r, e.texture = await r;
    const s = t.renderGroup || t.parentRenderGroup;
    s && (s.structureDidChange = !0), e.generatingTexture = !1, Bc(e, t)
  }
  _getGpuText(t) {
    return t._gpuData[this._renderer.uid] || this.initGpuText(t)
  }
  initGpuText(t) {
    const e = new Rc(this._renderer);
    return e.renderable = t, e.transform = t.groupTransform, e.texture = Z.EMPTY, e.bounds = {
      minX: 0,
      maxX: 1,
      minY: 0,
      maxY: 0
    }, e.roundPixels = this._renderer._roundPixels | t._roundPixels, t._resolution = t._autoResolution ? this._renderer.resolution : t.resolution, t._gpuData[this._renderer.uid] = e, e
  }
  destroy() {
    this._renderer = null
  }
}
kc.extension = {
  type: [a.WebGLPipes, a.WebGPUPipes, a.CanvasPipes],
  name: "htmlText"
};
const Gc = new tt;

function Ic(t, e, r, s) {
  const i = Gc;
  i.minX = 0, i.minY = 0, i.maxX = t.width / s | 0, i.maxY = t.height / s | 0;
  const n = ce.getOptimalTexture(i.width, i.height, s, !1);
  return n.source.uploadMethodId = "image", n.source.resource = t, n.source.alphaMode = "premultiply-alpha-on-upload", n.frame.width = e / s, n.frame.height = r / s, n.source.emit("update", n.source), n.updateUvs(), n
}
async function Fc(t, e) {
  const r = await async function(t) {
    const e = await Me.get().fetch(t),
      r = await e.blob(),
      s = new FileReader;
    return await new Promise((t, e) => {
      s.onloadend = () => t(s.result), s.onerror = e, s.readAsDataURL(r)
    })
  }(e);
  return `@font-face {\n        font-family: "${t.fontFamily}";\n        src: url('${r}');\n        font-weight: ${t.fontWeight};\n        font-style: ${t.fontStyle};\n    }`
}
const Uc = new Map;
class Oc {
  constructor(t) {
    this._renderer = t, this._createCanvas = t.type === Kr.WEBGPU
  }
  getTexture(t) {
    return this.getTexturePromise(t)
  }
  getTexturePromise(t) {
    return this._buildTexturePromise(t)
  }
  async _buildTexturePromise(t) {
    const {
      text: e,
      style: r,
      resolution: s,
      textureStyle: i
    } = t, n = Gt.get(Ra), o = function(t, e) {
      const r = e.fontFamily,
        s = [],
        i = {},
        n = t.match(/font-family:([^;"\s]+)/g);

      function o(t) {
        i[t] || (s.push(t), i[t] = !0)
      }
      if (Array.isArray(r))
        for (let a = 0; a < r.length; a++) o(r[a]);
      else o(r);
      n && n.forEach(t => {
        o(t.split(":")[1].trim())
      });
      for (const a in e.tagStyles) o(e.tagStyles[a].fontFamily);
      return s
    }(e, r), a = await async function(t, e, r) {
      const s = t.filter(t => Le.has(`${t}-and-url`)).map((t, s) => {
        if (!Uc.has(t)) {
          const {
            url: i
          } = Le.get(`${t}-and-url`);
          0 === s ? Uc.set(t, Fc({
            fontWeight: e.fontWeight,
            fontStyle: e.fontStyle,
            fontFamily: t
          }, i)) : Uc.set(t, Fc({
            fontWeight: r.fontWeight,
            fontStyle: r.fontStyle,
            fontFamily: t
          }, i))
        }
        return Uc.get(t)
      });
      return (await Promise.all(s)).join("\n")
    }(o, r, Pa.defaultTextStyle), h = function(t, e, r, s) {
      s || (s = Ba || (Ba = new Ra));
      const {
        domElement: i,
        styleElement: n,
        svgRoot: o
      } = s;
      i.innerHTML = `<style>${e.cssStyle};</style><div style='padding:0'>${t}</div>`, i.setAttribute("style", "transform-origin: top left; display: inline-block"), r && (n.textContent = r), document.body.appendChild(o);
      const a = i.getBoundingClientRect();
      o.remove();
      const h = 2 * e.padding;
      return {
        width: a.width - h,
        height: a.height - h
      }
    }(e, r, a, n), l = Math.ceil(Math.ceil(Math.max(1, h.width) + 2 * r.padding) * s), u = Math.ceil(Math.ceil(Math.max(1, h.height) + 2 * r.padding) * s), c = n.image;
    c.width = 2 + (0 | l), c.height = 2 + (0 | u);
    const d = function(t, e, r, s, i) {
      const {
        domElement: n,
        styleElement: o,
        svgRoot: a
      } = i;
      n.innerHTML = `<style>${e.cssStyle}</style><div style='padding:0;'>${t}</div>`, n.setAttribute("style", `transform: scale(${r});transform-origin: top left; display: inline-block`), o.textContent = s;
      const {
        width: h,
        height: l
      } = i.image;
      return a.setAttribute("width", h.toString()), a.setAttribute("height", l.toString()), (new XMLSerializer).serializeToString(a)
    }(e, r, s, a, n);
    await
    function(t, e, r) {
      return new Promise(async s => {
        r && await new Promise(t => setTimeout(t, 100)), t.onload = () => {
          s()
        }, t.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(e)}`, t.crossOrigin = "anonymous"
      })
    }(c, d, function() {
      const {
        userAgent: t
      } = Me.get().getNavigator();
      return /^((?!chrome|android).)*safari/i.test(t)
    }() && o.length > 0);
    const p = c;
    let f;
    this._createCanvas && (f = function(t, e) {
      const r = Oo.getOptimalCanvasAndContext(t.width, t.height, e),
        {
          context: s
        } = r;
      return s.clearRect(0, 0, t.width, t.height), s.drawImage(t, 0, 0), r
    }(c, s));
    const m = Ic(f ? f.canvas : p, c.width - 2, c.height - 2, s);
    return i && (m.source.style = i), this._createCanvas && (this._renderer.texture.initSource(m.source), Oo.returnCanvasAndContext(f)), Gt.return(n), m
  }
  returnTexturePromise(t) {
    t.then(t => {
      this._cleanUp(t)
    }).catch(() => {
      Bt("HTMLTextSystem: Failed to clean texture")
    })
  }
  _cleanUp(t) {
    ce.returnTexture(t, !0), t.source.resource = null, t.source.uploadMethodId = "unknown"
  }
  destroy() {
    this._renderer = null
  }
}
Oc.extension = {
  type: [a.WebGLSystem, a.WebGPUSystem, a.CanvasSystem],
  name: "htmlText"
};
class Dc extends dl {
  constructor(t) {
    super(), this._renderer = t, t.runners.resolutionChange.add(this)
  }
  resolutionChange() {
    const t = this.renderable;
    t._autoResolution && t.onViewUpdate()
  }
  destroy() {
    this._renderer.canvasText.returnTexture(this.texture), this._renderer = null
  }
}
class Lc {
  constructor(t) {
    this._renderer = t
  }
  validateRenderable(t) {
    return t._didTextUpdate
  }
  addRenderable(t, e) {
    const r = this._getGpuText(t);
    t._didTextUpdate && (this._updateGpuText(t), t._didTextUpdate = !1), this._renderer.renderPipes.batch.addToBatch(r, e)
  }
  updateRenderable(t) {
    const e = this._getGpuText(t);
    e._batcher.updateElement(e)
  }
  _updateGpuText(t) {
    const e = this._getGpuText(t);
    e.texture && this._renderer.canvasText.returnTexture(e.texture), t._resolution = t._autoResolution ? this._renderer.resolution : t.resolution, e.texture = e.texture = this._renderer.canvasText.getTexture(t), Bc(e, t)
  }
  _getGpuText(t) {
    return t._gpuData[this._renderer.uid] || this.initGpuText(t)
  }
  initGpuText(t) {
    const e = new Dc(this._renderer);
    return e.renderable = t, e.transform = t.groupTransform, e.bounds = {
      minX: 0,
      maxX: 1,
      minY: 0,
      maxY: 0
    }, e.roundPixels = this._renderer._roundPixels | t._roundPixels, t._gpuData[this._renderer.uid] = e, e
  }
  destroy() {
    this._renderer = null
  }
}
Lc.extension = {
  type: [a.WebGLPipes, a.WebGPUPipes, a.CanvasPipes],
  name: "text"
};
class Nc {
  constructor(t) {
    this._renderer = t
  }
  getTexture(t, e, r, s) {
    "string" == typeof t && (D("8.0.0", "CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments"), t = {
      text: t,
      style: r,
      resolution: e
    }), t.style instanceof Uo || (t.style = new Uo(t.style)), t.textureStyle instanceof X || (t.textureStyle = new X(t.textureStyle)), "string" != typeof t.text && (t.text = t.text.toString());
    const {
      text: i,
      style: n,
      textureStyle: o
    } = t, a = t.resolution ?? this._renderer.resolution, {
      frame: h,
      canvasAndContext: l
    } = va.getCanvasAndContext({
      text: i,
      style: n,
      resolution: a
    }), u = Ic(l.canvas, h.width, h.height, a);
    if (o && (u.source.style = o), n.trim && (h.pad(n.padding), u.frame.copyFrom(h), u.updateUvs()), n.filters) {
      const t = this._applyFilters(u, n.filters);
      return this.returnTexture(u), va.returnCanvasAndContext(l), t
    }
    return this._renderer.texture.initSource(u._source), va.returnCanvasAndContext(l), u
  }
  returnTexture(t) {
    const e = t.source;
    e.resource = null, e.uploadMethodId = "unknown", e.alphaMode = "no-premultiply-alpha", ce.returnTexture(t, !0)
  }
  renderTextToCanvas() {
    D("8.10.0", "CanvasTextSystem.renderTextToCanvas: no longer supported, use CanvasTextSystem.getTexture instead")
  }
  _applyFilters(t, e) {
    const r = this._renderer.renderTarget.renderTarget,
      s = this._renderer.filter.generateFilteredTexture({
        texture: t,
        filters: e
      });
    return this._renderer.renderTarget.bind(r, !1), s
  }
  destroy() {
    this._renderer = null
  }
}
Nc.extension = {
  type: [a.WebGLSystem, a.WebGPUSystem, a.CanvasSystem],
  name: "canvasText"
}, u.add(c, d);
export {
  Tr as A, tt as B, _e as C, Xo as D, sa as E, ia as F, ca as G, Oc as H, Re as I, Zu as M, cc as N, p as O, y as P, js as R, ye as S, Z as T, Be as U, $o as W, s as _, Sr as a, o as b, i as c, Yt as d, u as e, Ta as f, n as g, $s as h, Me as i, qs as j, Yu as k, Qn as l, oc as m, ac as n, Nc as o, Lc as p, Mc as q, kc as r, yc as s, ha as t, na as u
};