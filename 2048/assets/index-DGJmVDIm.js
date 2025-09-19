const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/DebugPane-Dd-fN_bv.css"]))) => i.map(i => d[i]);
var e = Object.defineProperty,
  t = (t, n, r) => ((t, n, r) => n in t ? e(t, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
  }) : t[n] = r)(t, "symbol" != typeof n ? n + "" : n, r);
! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c79aea44-0450-43cf-a54f-76a6850b6402", e._sentryDebugIdIdentifier = "sentry-dbid-c79aea44-0450-43cf-a54f-76a6850b6402")
  } catch (n) {}
}();
var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[(new n.Error).stack] = Object.assign({}, n._sentryModuleMetadata[(new n.Error).stack], {
  "_sentryBundlerPluginAppKey:@rbitrary-golden-pumpkin": !0
});
import {
  n as r,
  L as o,
  r as i,
  N as a,
  O as l,
  P as s,
  Q as c,
  T as u,
  U as d,
  w as f,
  V as p,
  s as h,
  W as m,
  H as g,
  X as v,
  Y as $,
  Z as w,
  _ as y,
  $ as x,
  a0 as b,
  a1 as _,
  a2 as k,
  a3 as C,
  a4 as S,
  a5 as A,
  a6 as B,
  m as M,
  a7 as O,
  C as P,
  J as T,
  f as E,
  a8 as G,
  a9 as D,
  a as I,
  j as L,
  i as q,
  c as z,
  u as F,
  g as j,
  b as N,
  aa as R,
  o as U,
  h as W,
  ab as H,
  ac as V,
  ad as K,
  p as Y,
  ae as Q,
  af as X,
  D as J,
  ag as Z,
  ah as ee,
  ai as te,
  F as ne,
  aj as re,
  ak as oe,
  al as ie,
  am as ae,
  E as le,
  an as se,
  q as ce,
  t as ue,
  v as de,
  ao as fe,
  ap as pe,
  aq as he,
  ar as me,
  S as ge,
  as as ve,
  at as $e,
  au as we,
  av as ye,
  aw as xe,
  ax as be,
  ay as _e,
  az as ke,
  aA as Ce,
  aB as Se,
  aC as Ae,
  aD as Be,
  aE as Me,
  aF as Oe,
  aG as Pe,
  aH as Te,
  aI as Ee,
  aJ as Ge,
  aK as De,
  aL as Ie,
  aM as Le,
  aN as qe,
  k as ze,
  aO as Fe,
  aP as je,
  aQ as Ne,
  aR as Re,
  z as Ue,
  M as We,
  R as He,
  aS as Ve,
  aT as Ke,
  B as Ye,
  aU as Qe,
  aV as Xe,
  aW as Je,
  aX as Ze,
  aY as et,
  aZ as tt,
  a_ as nt,
  a$ as rt,
  b0 as ot,
  b1 as it,
  b2 as at,
  b3 as lt,
  b4 as st,
  b5 as ct,
  b6 as ut,
  b7 as dt,
  b8 as ft
} from "./MessageBroker-DiXDVGNH.js";
import {
  _ as pt
} from "./pixi.js-DlquM4wl.js";
const ht = "undefined" != typeof window;
let mt = ht ? () => window.performance.now() : () => Date.now(),
  gt = ht ? e => requestAnimationFrame(e) : r;
const vt = new Set;

function $t(e) {
  vt.forEach(t => {
    t.c(e) || (vt.delete(t), t.f())
  }), 0 !== vt.size && gt($t)
}

function wt(e) {
  let t;
  return 0 === vt.size && gt($t), {
    promise: new Promise(n => {
      vt.add(t = {
        c: e,
        f: n
      })
    }),
    abort() {
      vt.delete(t)
    }
  }
}
let yt = !1;

function xt(e, t, n, r) {
  for (; e < t;) {
    const o = e + (t - e >> 1);
    n(o) <= r ? e = o + 1 : t = o
  }
  return e
}

function bt(e, t) {
  e.appendChild(t)
}

function _t(e) {
  if (!e) return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && t.host ? t : e.ownerDocument
}

function kt(e) {
  const t = Mt("style");
  return t.textContent = "/* empty */",
    function(e, t) {
      bt(e.head || e, t), t.sheet
    }(_t(e), t), t.sheet
}

function Ct(e, t, n) {
  e.insertBefore(t, n || null)
}

function St(e, t, n) {
  yt && !n ? function(e, t) {
    if (yt) {
      for (function(e) {
          if (e.hydrate_init) return;
          e.hydrate_init = !0;
          let t = e.childNodes;
          if ("HEAD" === e.nodeName) {
            const e = [];
            for (let n = 0; n < t.length; n++) {
              const r = t[n];
              void 0 !== r.claim_order && e.push(r)
            }
            t = e
          }
          const n = new Int32Array(t.length + 1),
            r = new Int32Array(t.length);
          n[0] = -1;
          let o = 0;
          for (let s = 0; s < t.length; s++) {
            const e = t[s].claim_order,
              i = (o > 0 && t[n[o]].claim_order <= e ? o + 1 : xt(1, o, e => t[n[e]].claim_order, e)) - 1;
            r[s] = n[i] + 1;
            const a = i + 1;
            n[a] = s, o = Math.max(a, o)
          }
          const i = [],
            a = [];
          let l = t.length - 1;
          for (let s = n[o] + 1; 0 != s; s = r[s - 1]) {
            for (i.push(t[s - 1]); l >= s; l--) a.push(t[l]);
            l--
          }
          for (; l >= 0; l--) a.push(t[l]);
          i.reverse(), a.sort((e, t) => e.claim_order - t.claim_order);
          for (let s = 0, c = 0; s < a.length; s++) {
            for (; c < i.length && a[s].claim_order >= i[c].claim_order;) c++;
            const t = c < i.length ? i[c] : null;
            e.insertBefore(a[s], t)
          }
        }(e), (void 0 === e.actual_end_child || null !== e.actual_end_child && e.actual_end_child.parentNode !== e) && (e.actual_end_child = e.firstChild); null !== e.actual_end_child && void 0 === e.actual_end_child.claim_order;) e.actual_end_child = e.actual_end_child.nextSibling;
      t !== e.actual_end_child ? void 0 === t.claim_order && t.parentNode === e || e.insertBefore(t, e.actual_end_child) : e.actual_end_child = t.nextSibling
    } else t.parentNode === e && null === t.nextSibling || e.appendChild(t)
  }(e, t) : t.parentNode === e && t.nextSibling == n || e.insertBefore(t, n || null)
}

function At(e) {
  e.parentNode && e.parentNode.removeChild(e)
}

function Bt(e, t) {
  for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
}

function Mt(e) {
  return document.createElement(e)
}

function Ot(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e)
}

function Pt(e) {
  return document.createTextNode(e)
}

function Tt() {
  return Pt(" ")
}

function Et() {
  return Pt("")
}

function Gt(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
}

function Dt(e, t, n) {
  null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}
const It = ["width", "height"];

function Lt(e, t) {
  const n = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const r in t) null == t[r] ? e.removeAttribute(r) : "style" === r ? e.style.cssText = t[r] : "__value" === r ? e.value = e[r] = t[r] : n[r] && n[r].set && -1 === It.indexOf(r) ? e[r] = t[r] : Dt(e, r, t[r])
}

function qt(e, t) {
  for (const n in t) Dt(e, n, t[n])
}

function zt(e, t) {
  Object.keys(t).forEach(n => {
    ! function(e, t, n) {
      const r = t.toLowerCase();
      r in e ? e[r] = "boolean" == typeof e[r] && "" === n || n : t in e ? e[t] = "boolean" == typeof e[t] && "" === n || n : Dt(e, t, n)
    }(e, n, t[n])
  })
}

function Ft(e) {
  return /-/.test(e) ? zt : Lt
}

function jt(e) {
  return Array.from(e.childNodes)
}

function Nt(e) {
  void 0 === e.claim_info && (e.claim_info = {
    last_index: 0,
    total_claimed: 0
  })
}

function Rt(e, t, n) {
  return function(e, t, n, r) {
    return function(e, t, n, r, o = !1) {
      Nt(e);
      const i = (() => {
        for (let r = e.claim_info.last_index; r < e.length; r++) {
          const i = e[r];
          if (t(i)) {
            const t = n(i);
            return void 0 === t ? e.splice(r, 1) : e[r] = t, o || (e.claim_info.last_index = r), i
          }
        }
        for (let r = e.claim_info.last_index - 1; r >= 0; r--) {
          const i = e[r];
          if (t(i)) {
            const t = n(i);
            return void 0 === t ? e.splice(r, 1) : e[r] = t, o ? void 0 === t && e.claim_info.last_index-- : e.claim_info.last_index = r, i
          }
        }
        return r()
      })();
      return i.claim_order = e.claim_info.total_claimed, e.claim_info.total_claimed += 1, i
    }(e, e => e.nodeName === t, e => {
      const t = [];
      for (let r = 0; r < e.attributes.length; r++) {
        const o = e.attributes[r];
        n[o.name] || t.push(o.name)
      }
      t.forEach(t => e.removeAttribute(t))
    }, () => r(t))
  }(e, t, n, Ot)
}

function Ut(e, t, n) {
  for (let r = n; r < e.length; r += 1) {
    const n = e[r];
    if (8 === n.nodeType && n.textContent.trim() === t) return r
  }
  return -1
}

function Wt(e, t) {
  const n = Ut(e, "HTML_TAG_START", 0),
    r = Ut(e, "HTML_TAG_END", n + 1);
  if (-1 === n || -1 === r) return new en(t);
  Nt(e);
  const o = e.splice(n, r - n + 1);
  At(o[0]), At(o[o.length - 1]);
  const i = o.slice(1, o.length - 1);
  if (0 === i.length) return new en(t);
  for (const a of i) a.claim_order = e.claim_info.total_claimed, e.claim_info.total_claimed += 1;
  return new en(t, i)
}

function Ht(e, t) {
  t = "" + t, e.data !== t && (e.data = t)
}

function Vt(e, t, n, r) {
  null == n ? e.style.removeProperty(t) : e.style.setProperty(t, n, "")
}
let Kt;

function Yt(e, t) {
  "static" === getComputedStyle(e).position && (e.style.position = "relative");
  const n = Mt("iframe");
  n.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), n.setAttribute("aria-hidden", "true"), n.tabIndex = -1;
  const r = function() {
    if (void 0 === Kt) {
      Kt = !1;
      try {
        "undefined" != typeof window && window.parent && window.parent.document
      } catch (e) {
        Kt = !0
      }
    }
    return Kt
  }();
  let o;
  return r ? (n.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", o = Gt(window, "message", e => {
    e.source === n.contentWindow && t()
  })) : (n.src = "about:blank", n.onload = () => {
    o = Gt(n.contentWindow, "resize", t), t()
  }), bt(e, n), () => {
    (r || o && n.contentWindow) && o(), At(n)
  }
}
const Qt = new o({
  box: "content-box"
});

function Xt(e, t, n) {
  e.classList.toggle(t, !!n)
}

function Jt(e, t, {
  bubbles: n = !1,
  cancelable: r = !1
} = {}) {
  return new CustomEvent(e, {
    detail: t,
    bubbles: n,
    cancelable: r
  })
}
class Zt {
  constructor(e = !1) {
    t(this, "is_svg", !1), t(this, "e"), t(this, "n"), t(this, "t"), t(this, "a"), this.is_svg = e, this.e = this.n = null
  }
  c(e) {
    this.h(e)
  }
  m(e, t, n = null) {
    this.e || (this.is_svg ? this.e = Ot(t.nodeName) : this.e = Mt(11 === t.nodeType ? "TEMPLATE" : t.nodeName), this.t = "TEMPLATE" !== t.tagName ? t : t.content, this.c(e)), this.i(n)
  }
  h(e) {
    this.e.innerHTML = e, this.n = Array.from("TEMPLATE" === this.e.nodeName ? this.e.content.childNodes : this.e.childNodes)
  }
  i(e) {
    for (let t = 0; t < this.n.length; t += 1) Ct(this.t, this.n[t], e)
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a)
  }
  d() {
    this.n.forEach(At)
  }
}
class en extends Zt {
  constructor(e = !1, n) {
    super(e), t(this, "l"), this.e = this.n = null, this.l = n
  }
  c(e) {
    this.l ? this.n = this.l : super.c(e)
  }
  i(e) {
    for (let t = 0; t < this.n.length; t += 1) St(this.t, this.n[t], e)
  }
}

function tn(e, t) {
  return new e(t)
}
const nn = new Map;
let rn, on = 0;

function an(e, t, n, r, o, i, a, l = 0) {
  const s = 16.666 / r;
  let c = "{\n";
  for (let g = 0; g <= 1; g += s) {
    const e = t + (n - t) * i(g);
    c += 100 * g + `%{${a(e,1-e)}}\n`
  }
  const u = c + `100% {${a(n,1-n)}}\n}`,
    d = `__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${l}`,
    f = _t(e),
    {
      stylesheet: p,
      rules: h
    } = nn.get(f) || function(e, t) {
      const n = {
        stylesheet: kt(t),
        rules: {}
      };
      return nn.set(e, n), n
    }(f, e);
  h[d] || (h[d] = !0, p.insertRule(`@keyframes ${d} ${u}`, p.cssRules.length));
  const m = e.style.animation || "";
  return e.style.animation = `${m?`${m}, `:""}${d} ${r}ms linear ${o}ms 1 both`, on += 1, d
}

function ln(e, t) {
  const n = (e.style.animation || "").split(", "),
    r = n.filter(t ? e => e.indexOf(t) < 0 : e => -1 === e.indexOf("__svelte")),
    o = n.length - r.length;
  o && (e.style.animation = r.join(", "), on -= o, on || gt(() => {
    on || (nn.forEach(e => {
      const {
        ownerNode: t
      } = e.stylesheet;
      t && At(t)
    }), nn.clear())
  }))
}

function sn(e) {
  rn = e
}

function cn() {
  if (!rn) throw new Error("Function called outside component initialization");
  return rn
}

function un(e) {
  cn().$$.before_update.push(e)
}

function dn(e) {
  cn().$$.on_mount.push(e)
}

function fn(e) {
  cn().$$.on_destroy.push(e)
}

function pn() {
  const e = cn();
  return (t, n, {
    cancelable: r = !1
  } = {}) => {
    const o = e.$$.callbacks[t];
    if (o) {
      const i = Jt(t, n, {
        cancelable: r
      });
      return o.slice().forEach(t => {
        t.call(e, i)
      }), !i.defaultPrevented
    }
    return !0
  }
}

function hn(e, t) {
  return cn().$$.context.set(e, t), t
}

function mn(e) {
  return cn().$$.context.get(e)
}

function gn(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach(e => e.call(this, t))
}
const vn = [],
  $n = [];
let wn = [];
const yn = [],
  xn = Promise.resolve();
let bn = !1;

function _n() {
  bn || (bn = !0, xn.then(On))
}

function kn() {
  return _n(), xn
}

function Cn(e) {
  wn.push(e)
}

function Sn(e) {
  yn.push(e)
}
const An = new Set;
let Bn, Mn = 0;

function On() {
  if (0 !== Mn) return;
  const e = rn;
  do {
    try {
      for (; Mn < vn.length;) {
        const e = vn[Mn];
        Mn++, sn(e), Pn(e.$$)
      }
    } catch (t) {
      throw vn.length = 0, Mn = 0, t
    }
    for (sn(null), vn.length = 0, Mn = 0; $n.length;) $n.pop()();
    for (let e = 0; e < wn.length; e += 1) {
      const t = wn[e];
      An.has(t) || (An.add(t), t())
    }
    wn.length = 0
  } while (vn.length);
  for (; yn.length;) yn.pop()();
  bn = !1, An.clear(), sn(e)
}

function Pn(e) {
  if (null !== e.fragment) {
    e.update(), i(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Cn)
  }
}

function Tn() {
  return Bn || (Bn = Promise.resolve(), Bn.then(() => {
    Bn = null
  })), Bn
}

function En(e, t, n) {
  e.dispatchEvent(Jt(`${t?"intro":"outro"}${n}`))
}
const Gn = new Set;
let Dn;

function In() {
  Dn = {
    r: 0,
    c: [],
    p: Dn
  }
}

function Ln() {
  Dn.r || i(Dn.c), Dn = Dn.p
}

function qn(e, t) {
  e && e.i && (Gn.delete(e), e.i(t))
}

function zn(e, t, n, r) {
  if (e && e.o) {
    if (Gn.has(e)) return;
    Gn.add(e), Dn.c.push(() => {
      Gn.delete(e), r && (n && e.d(1), r())
    }), e.o(t)
  } else r && r()
}
const Fn = {
  duration: 0
};

function jn(e, t, n) {
  const o = {
    direction: "in"
  };
  let i, s, c = t(e, n, o),
    u = !1,
    d = 0;

  function f() {
    i && ln(e, i)
  }

  function p() {
    const {
      delay: t = 0,
      duration: n = 300,
      easing: o = l,
      tick: a = r,
      css: p
    } = c || Fn;
    p && (i = an(e, 0, 1, n, t, o, p, d++)), a(0, 1);
    const h = mt() + t,
      m = h + n;
    s && s.abort(), u = !0, Cn(() => En(e, !0, "start")), s = wt(t => {
      if (u) {
        if (t >= m) return a(1, 0), En(e, !0, "end"), f(), u = !1;
        if (t >= h) {
          const e = o((t - h) / n);
          a(e, 1 - e)
        }
      }
      return u
    })
  }
  let h = !1;
  return {
    start() {
      h || (h = !0, ln(e), a(c) ? (c = c(o), Tn().then(p)) : p())
    },
    invalidate() {
      h = !1
    },
    end() {
      u && (f(), u = !1)
    }
  }
}

function Nn(e, t, n, o) {
  let s, c = t(e, n, {
      direction: "both"
    }),
    u = o ? 0 : 1,
    d = null,
    f = null,
    p = null;

  function h() {
    p && ln(e, p)
  }

  function m(e, t) {
    const n = e.b - u;
    return t *= Math.abs(n), {
      a: u,
      b: e.b,
      d: n,
      duration: t,
      start: e.start,
      end: e.start + t,
      group: e.group
    }
  }

  function g(t) {
    const {
      delay: n = 0,
      duration: o = 300,
      easing: a = l,
      tick: g = r,
      css: v
    } = c || Fn, $ = {
      start: mt() + n,
      b: t
    };
    t || ($.group = Dn, Dn.r += 1), "inert" in e && (t ? void 0 !== s && (e.inert = s) : (s = e.inert, e.inert = !0)), d || f ? f = $ : (v && (h(), p = an(e, u, t, o, n, a, v)), t && g(0, 1), d = m($, o), Cn(() => En(e, t, "start")), wt(t => {
      if (f && t > f.start && (d = m(f, o), f = null, En(e, d.b, "start"), v && (h(), p = an(e, u, d.b, d.duration, 0, a, c.css))), d)
        if (t >= d.end) g(u = d.b, 1 - u), En(e, d.b, "end"), f || (d.b ? h() : --d.group.r || i(d.group.c)), d = null;
        else if (t >= d.start) {
        const e = t - d.start;
        u = d.a + d.d * a(e / d.duration), g(u, 1 - u)
      }
      return !(!d && !f)
    }))
  }
  return {
    run(e) {
      a(c) ? Tn().then(() => {
        c = c({
          direction: e ? "in" : "out"
        }), g(e)
      }) : g(e)
    },
    end() {
      h(), d = f = null
    }
  }
}

function Rn(e, t) {
  const n = t.token = {};

  function r(e, r, o, i) {
    if (t.token !== n) return;
    t.resolved = i;
    let a = t.ctx;
    void 0 !== o && (a = a.slice(), a[o] = i);
    const l = e && (t.current = e)(a);
    let s = !1;
    t.block && (t.blocks ? t.blocks.forEach((e, n) => {
      n !== r && e && (In(), zn(e, 1, 1, () => {
        t.blocks[n] === e && (t.blocks[n] = null)
      }), Ln())
    }) : t.block.d(1), l.c(), qn(l, 1), l.m(t.mount(), t.anchor), s = !0), t.block = l, t.blocks && (t.blocks[r] = l), s && On()
  }
  if (s(e)) {
    const n = cn();
    if (e.then(e => {
        sn(n), r(t.then, 1, t.value, e), sn(null)
      }, e => {
        if (sn(n), r(t.catch, 2, t.error, e), sn(null), !t.hasCatch) throw e
      }), t.current !== t.pending) return r(t.pending, 0), !0
  } else {
    if (t.current !== t.then) return r(t.then, 1, t.value, e), !0;
    t.resolved = e
  }
}

function Un(e, t, n) {
  const r = t.slice(),
    {
      resolved: o
    } = e;
  e.current === e.then && (r[e.value] = o), e.current === e.catch && (r[e.error] = o), e.block.p(r, n)
}

function Wn(e) {
  return void 0 !== (null == e ? void 0 : e.length) ? e : Array.from(e)
}

function Hn(e, t) {
  const n = {},
    r = {},
    o = {
      $$scope: 1
    };
  let i = e.length;
  for (; i--;) {
    const a = e[i],
      l = t[i];
    if (l) {
      for (const e in a) e in l || (r[e] = 1);
      for (const e in l) o[e] || (n[e] = l[e], o[e] = 1);
      e[i] = l
    } else
      for (const e in a) o[e] = 1
  }
  for (const a in r) a in n || (n[a] = void 0);
  return n
}

function Vn(e) {
  return "object" == typeof e && null !== e ? e : {}
}

function Kn(e, t, n) {
  const r = e.$$.props[t];
  void 0 !== r && (e.$$.bound[r] = n, n(e.$$.ctx[r]))
}

function Yn(e) {
  e && e.c()
}

function Qn(e, t, n) {
  const {
    fragment: r,
    after_update: o
  } = e.$$;
  r && r.m(t, n), Cn(() => {
    const t = e.$$.on_mount.map(d).filter(a);
    e.$$.on_destroy ? e.$$.on_destroy.push(...t) : i(t), e.$$.on_mount = []
  }), o.forEach(Cn)
}

function Xn(e, t) {
  const n = e.$$;
  null !== n.fragment && (function(e) {
    const t = [],
      n = [];
    wn.forEach(r => -1 === e.indexOf(r) ? t.push(r) : n.push(r)), n.forEach(e => e()), wn = t
  }(n.after_update), i(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
}

function Jn(e, t, n, o, a, l, s = null, c = [-1]) {
  const d = rn;
  sn(e);
  const f = e.$$ = {
    fragment: null,
    ctx: [],
    props: l,
    update: r,
    not_equal: a,
    bound: u(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (d ? d.$$.context : [])),
    callbacks: u(),
    dirty: c,
    skip_bound: !1,
    root: t.target || d.$$.root
  };
  s && s(f.root);
  let p = !1;
  if (f.ctx = n ? n(e, t.props || {}, (t, n, ...r) => {
      const o = r.length ? r[0] : n;
      return f.ctx && a(f.ctx[t], f.ctx[t] = o) && (!f.skip_bound && f.bound[t] && f.bound[t](o), p && function(e, t) {
        -1 === e.$$.dirty[0] && (vn.push(e), _n(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
      }(e, t)), n
    }) : [], f.update(), p = !0, i(f.before_update), f.fragment = !!o && o(f.ctx), t.target) {
    if (t.hydrate) {
      yt = !0;
      const e = jt(t.target);
      f.fragment && f.fragment.l(e), e.forEach(At)
    } else f.fragment && f.fragment.c();
    t.intro && qn(e.$$.fragment), Qn(e, t.target, t.anchor), yt = !1, On()
  }
  sn(d)
}
class Zn {
  constructor() {
    t(this, "$$"), t(this, "$$set")
  }
  $destroy() {
    Xn(this, 1), this.$destroy = r
  }
  $on(e, t) {
    if (!a(t)) return r;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(t), () => {
      const e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
    }
  }
  $set(e) {
    this.$$set && !c(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
  }
}

function er(e) {
  var t, n, r = "";
  if ("string" == typeof e || "number" == typeof e) r += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++) e[t] && (n = er(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e) e[t] && (r && (r += " "), r += t);
  return r
}

function tr() {
  for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = er(e)) && (r && (r += " "), r += t);
  return r
}
"undefined" != typeof window && (window.__svelte || (window.__svelte = {
  v: new Set
})).v.add("4");
const nr = (e, t = "") => {
    const n = f(tr(t).split(" ").filter(Boolean)),
      r = n.subscribe(t => {
        Array.isArray(t) && (null == t ? void 0 : t.length) && e.classList.add(...t)
      }),
      o = () => e.classList.remove(...p(n));
    return {
      update: (e = "") => {
        o(), n.set(tr(e).split(" ").filter(Boolean))
      },
      destroy: () => {
        o(), r()
      }
    }
  },
  rr = (e, t = {}) => {
    const n = document.createElement("div"),
      r = (t = {}) => {
        if ("string" == typeof t && (n.style.cssText = t), "object" == typeof t)
          for (const [e, r] of Object.entries(t)) e.startsWith("--") ? n.style.setProperty(e, r) : n.style[e] = r;
        e.style.cssText = `\n\t\t\t\t\t${e.style.cssText};\n\t\t\t\t\t${n.style.cssText};\n\t\t\t\t`
      };
    r(t);
    const o = () => {
      e.style.cssText = e.style.cssText.replace(n.style.cssText, ""), n.style.cssText = ""
    };
    return {
      update: e => {
        o(), r(e)
      },
      destroy: o
    }
  };

function or(e) {
  let t, n, o, l;
  return {
    c: r,
    m(r, i) {
      o || (l = [m(t = nr.call(null, document.body, e[0])), m(n = rr.call(null, document.body, e[1]))], o = !0)
    },
    p(e, [r]) {
      t && a(t.update) && 1 & r && t.update.call(null, e[0]), n && a(n.update) && 2 & r && n.update.call(null, e[1])
    },
    i: r,
    o: r,
    d(e) {
      o = !1, i(l)
    }
  }
}

function ir(e, t, n) {
  let {
    class: r = ""
  } = t, {
    style: o = ""
  } = t;
  return e.$$set = e => {
    "class" in e && n(0, r = e.class), "style" in e && n(1, o = e.style)
  }, [r, o]
}
class ar extends Zn {
  constructor(e) {
    super(), Jn(this, e, ir, or, h, {
      class: 0,
      style: 1
    })
  }
}

function lr(e) {
  const {
    state: t,
    board: n,
    id: r,
    moveCount: o,
    score: i,
    powerups: a,
    highestReachedTile: l,
    _rng: {
      seed: s
    },
    changes: c
  } = e, u = {
    state: t,
    board: n,
    id: r,
    moveCount: o,
    score: i,
    powerups: a,
    _rng: {
      seed: s,
      seedrandomState: e._rng.srng.state()
    },
    changes: c,
    highestReachedTile: l,
    _gmmus: "2048s"
  };
  return t === g.Selecting && (u.selection = e.selection, u.actionOnSelectionComplete = e.actionOnSelectionComplete), u
}
const sr = /^(?<tile>\d+)(?:(?:\((?<a>\d+),(?<b>\d+)\))|(?:<(?<x>\d+),(?<y>\d+)>))?$/;

function cr(e, t, n) {
  const r = B[t].usesLimit;
  return void 0 === n ? n = r : v(n <= r, `Requested uses ${n} is greater than the powerup's limit ${r}`), {
    ...e,
    powerups: {
      ...e.powerups,
      [t]: {
        ...e.powerups[t],
        usesRemaining: n
      }
    }
  }
}
const ur = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
  dr = M("stores/worker"),
  fr = f(!1),
  pr = Boolean(globalThis.Worker) && Boolean(globalThis.OffscreenCanvas),
  hr = f(!1),
  mr = O([hr, P], ([e, t]) => !pr || e ? (dr("worker not supported or startup failed, using main thread"), !1) : !ur && t !== T.Main);

function gr(e) {
  let t, n, r;
  var o = e[0];

  function i(e, t) {
    return {
      props: {
        useWorker: e[1],
        workerStartupFailed: e[2],
        workerSupported: pr
      }
    }
  }
  return o && (t = tn(o, i(e))), {
    c() {
      t && Yn(t.$$.fragment), n = Et()
    },
    m(e, o) {
      t && Qn(t, e, o), Ct(e, n, o), r = !0
    },
    p(e, r) {
      if (1 & r && o !== (o = e[0])) {
        if (t) {
          In();
          const e = t;
          zn(e.$$.fragment, 1, 0, () => {
            Xn(e, 1)
          }), Ln()
        }
        o ? (t = tn(o, i(e)), Yn(t.$$.fragment), qn(t.$$.fragment, 1), Qn(t, n.parentNode, n)) : t = null
      } else if (o) {
        const n = {};
        2 & r && (n.useWorker = e[1]), 4 & r && (n.workerStartupFailed = e[2]), t.$set(n)
      }
    },
    i(e) {
      r || (t && qn(t.$$.fragment, e), r = !0)
    },
    o(e) {
      t && zn(t.$$.fragment, e), r = !1
    },
    d(e) {
      e && At(n), t && Xn(t, e)
    }
  }
}

function vr(e) {
  let t, n, r = e[0] && gr(e);
  return {
    c() {
      r && r.c(), t = Et()
    },
    m(e, o) {
      r && r.m(e, o), Ct(e, t, o), n = !0
    },
    p(e, [n]) {
      e[0] ? r ? (r.p(e, n), 1 & n && qn(r, 1)) : (r = gr(e), r.c(), qn(r, 1), r.m(t.parentNode, t)) : r && (In(), zn(r, 1, 1, () => {
        r = null
      }), Ln())
    },
    i(e) {
      n || (qn(r), n = !0)
    },
    o(e) {
      zn(r), n = !1
    },
    d(e) {
      e && At(t), r && r.d(e)
    }
  }
}

function $r(e, t, n) {
  let r, o, i;
  return E(e, mr, e => n(1, r = e)), E(e, hr, e => n(2, o = e)), G && dn(async () => {
    n(0, i = (await pt(async () => {
      const {
        default: e
      } = await import("./DebugPane-BGBwRzHm.js");
      return {
        default: e
      }
    }, __vite__mapDeps([0]))).default)
  }), [i, r, o]
}
class wr extends Zn {
  constructor(e) {
    super(), Jn(this, e, $r, vr, h, {})
  }
}

function yr(e) {
  return Object.keys(e).reduce((t, n) => void 0 === e[n] ? t : t + `${n}:${e[n]};`, "")
}

function xr(e) {
  if (null !== e) return ""
}

function br(e, ...t) {
  const n = {};
  for (const r of Object.keys(e)) t.includes(r) || (n[r] = e[r]);
  return n
}

function _r(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    void 0 !== r && (t[n] = r)
  }
  return t
}

function kr(e) {
  return {
    subscribe: function(t) {
      return t(e), () => {}
    }
  }
}
yr({
  position: "absolute",
  opacity: 0,
  "pointer-events": "none",
  margin: 0,
  transform: "translateX(-100%)"
});
const Cr = e => new Proxy(e, {
    get: (e, t, n) => Reflect.get(e, t, n),
    ownKeys: e => Reflect.ownKeys(e).filter(e => "action" !== e)
  }),
  Sr = e => "function" == typeof e;

function Ar(e, t) {
  const {
    stores: n,
    action: r,
    returned: o
  } = t ?? {}, i = (() => {
    if (n && o) return O(n, t => {
      const n = o(t);
      if (Sr(n)) {
        const t = (...t) => Cr(_r({
          ...n(...t),
          [`data-melt-${e}`]: "",
          action: r ?? Er
        }));
        return t.action = r ?? Er, t
      }
      return Cr(_r({
        ...n,
        [`data-melt-${e}`]: "",
        action: r ?? Er
      }))
    });
    {
      const t = null == o ? void 0 : o();
      if (Sr(t)) {
        const n = (...n) => Cr(_r({
          ...t(...n),
          [`data-melt-${e}`]: "",
          action: r ?? Er
        }));
        return n.action = r ?? Er, kr(n)
      }
      return kr(Cr(_r({
        ...t,
        [`data-melt-${e}`]: "",
        action: r ?? Er
      })))
    }
  })(), a = r ?? (() => {});
  return a.subscribe = i.subscribe, a
}
Ar("empty");
const Br = "undefined" != typeof document,
  Mr = e => "function" == typeof e;

function Or(e) {
  return e instanceof Element
}

function Pr(e) {
  return e instanceof HTMLElement
}

function Tr(...e) {
  return (...t) => {
    for (const n of e) "function" == typeof n && n(...t)
  }
}

function Er() {}

function Gr(e, t, n, r) {
  const o = Array.isArray(t) ? t : [t];
  return o.forEach(t => e.addEventListener(t, n, r)), () => {
    o.forEach(t => e.removeEventListener(t, n, r))
  }
}

function Dr(e, t, n, r) {
  const o = Array.isArray(t) ? t : [t];
  if ("function" == typeof n) {
    const t = function(e) {
      return t => {
        const n = function(e) {
          const t = e.currentTarget;
          if (!Pr(t)) return null;
          const n = new CustomEvent(`m-${e.type}`, {
            detail: {
              originalEvent: e
            },
            cancelable: !0
          });
          return t.dispatchEvent(n), n
        }(t);
        if (!(null == n ? void 0 : n.defaultPrevented)) return e(t)
      }
    }(e => n(e));
    return o.forEach(n => e.addEventListener(n, t, r)), () => {
      o.forEach(n => e.removeEventListener(n, t, r))
    }
  }
  return () => {}
}

function Ir(e) {
  return {
    ...e,
    get: () => p(e)
  }
}
Ir.writable = function(e) {
  const t = f(e);
  let n = e;
  return {
    subscribe: t.subscribe,
    set(e) {
      t.set(e), n = e
    },
    update(e) {
      const r = e(n);
      t.set(r), n = r
    },
    get: () => n
  }
}, Ir.derived = function(e, t) {
  const n = new Map,
    r = () => {
      const n = Array.isArray(e) ? e.map(e => e.get()) : e.get();
      return t(n)
    };
  return {
    get: r,
    subscribe: t => {
      const o = [];
      return (Array.isArray(e) ? e : [e]).forEach(e => {
        o.push(e.subscribe(() => {
          t(r())
        }))
      }), t(r()), n.set(t, o), () => {
        const e = n.get(t);
        if (e)
          for (const t of e) t();
        n.delete(t)
      }
    }
  }
};
const Lr = "Enter";

function qr(e, t = 500) {
  let n;
  const r = (...r) => {
    clearTimeout(n), n = setTimeout(() => e(...r), t)
  };
  return r.destroy = () => clearTimeout(n), r
}
const zr = () => "undefined" != typeof window,
  Fr = e => zr() && e.test(function() {
    const e = navigator.userAgentData;
    return (null == e ? void 0 : e.platform) ?? navigator.platform
  }().toLowerCase()),
  jr = () => Fr(/mac|iphone|ipad|ipod/i) && !(Fr(/^mac/) && (!zr() || !navigator.maxTouchPoints)),
  Nr = "data-melt-scroll-lock";

function Rr(e, t) {
  if (!e) return;
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n
  }
}

function Ur(e) {
  const t = document,
    n = t.defaultView ?? window,
    {
      documentElement: r,
      body: o
    } = t;
  if (o.hasAttribute(Nr)) return Er;
  o.setAttribute(Nr, "");
  const i = n.innerWidth - r.clientWidth,
    a = function(e) {
      const t = e.getBoundingClientRect().left;
      return Math.round(t) + e.scrollLeft ? "paddingLeft" : "paddingRight"
    }(r),
    l = n.getComputedStyle(o)[a],
    s = [function(e, t, n) {
      if (!e) return;
      const r = e.style.getPropertyValue(t);
      return e.style.setProperty(t, n), () => {
        r ? e.style.setProperty(t, r) : e.style.removeProperty(t)
      }
    }(r, "--scrollbar-width", `${i}px`), jr() ? (() => {
      const {
        scrollX: e,
        scrollY: t,
        visualViewport: r
      } = n, s = (null == r ? void 0 : r.offsetLeft) ?? 0, c = (null == r ? void 0 : r.offsetTop) ?? 0, u = Rr(o, {
        position: "fixed",
        overflow: "hidden",
        top: -(t - Math.floor(c)) + "px",
        left: -(e - Math.floor(s)) + "px",
        right: "0",
        [a]: `calc(${l} + ${i}px)`
      });
      return () => {
        null == u || u(), n.scrollTo(e, t)
      }
    })() : Rr(o, {
      overflow: "hidden",
      [a]: `calc(${l} + ${i}px)`
    })];
  return () => {
    s.forEach(e => null == e ? void 0 : e()), o.removeAttribute(Nr)
  }
}

function Wr(e, t, n = {}) {
  const {
    skipFirstRun: r
  } = n;
  let o, i = !0;
  const a = O(e, e => {
      null == o || o(), i && r ? i = !1 : o = t(e)
    }).subscribe(Er),
    l = () => {
      a(), null == o || o()
    };
  return (e => {
    try {
      fn(e)
    } catch {
      return e
    }
  })(l), l
}

function Hr(e) {
  const t = {};
  return Object.keys(e).forEach(n => {
    const r = n,
      o = e[r];
    t[r] = Ir(f(o))
  }), t
}

function Vr(e, t) {
  return e === t || e.contains(t)
}
async function Kr(e) {
  const {
    prop: t,
    defaultEl: n
  } = e;
  if (await Promise.all([new Promise(e => setTimeout(e, 1)), kn]), void 0 === t) return void(null == n || n.focus());
  const r = Mr(t) ? t(n) : t;
  if ("string" == typeof r) {
    const e = document.querySelector(r);
    if (!Pr(e)) return;
    e.focus()
  } else Pr(r) && r.focus()
}
D(!1), D(!1), D(void 0), D(void 0);
const Yr = new Map;
var Qr = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
  Xr = Qr.join(","),
  Jr = "undefined" == typeof Element,
  Zr = Jr ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
  eo = !Jr && Element.prototype.getRootNode ? function(e) {
    var t;
    return null == e || null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)
  } : function(e) {
    return null == e ? void 0 : e.ownerDocument
  },
  to = function e(t, n) {
    var r;
    void 0 === n && (n = !0);
    var o = null == t || null === (r = t.getAttribute) || void 0 === r ? void 0 : r.call(t, "inert");
    return "" === o || "true" === o || n && t && e(t.parentNode)
  },
  no = function(e, t, n) {
    if (to(e)) return [];
    var r = Array.prototype.slice.apply(e.querySelectorAll(Xr));
    return t && Zr.call(e, Xr) && r.unshift(e), r.filter(n)
  },
  ro = function e(t, n, r) {
    for (var o = [], i = Array.from(t); i.length;) {
      var a = i.shift();
      if (!to(a, !1))
        if ("SLOT" === a.tagName) {
          var l = a.assignedElements(),
            s = e(l.length ? l : a.children, !0, r);
          r.flatten ? o.push.apply(o, s) : o.push({
            scopeParent: a,
            candidates: s
          })
        } else {
          Zr.call(a, Xr) && r.filter(a) && (n || !t.includes(a)) && o.push(a);
          var c = a.shadowRoot || "function" == typeof r.getShadowRoot && r.getShadowRoot(a),
            u = !to(c, !1) && (!r.shadowRootFilter || r.shadowRootFilter(a));
          if (c && u) {
            var d = e(!0 === c ? a.children : c.children, !0, r);
            r.flatten ? o.push.apply(o, d) : o.push({
              scopeParent: a,
              candidates: d
            })
          } else i.unshift.apply(i, a.children)
        }
    }
    return o
  },
  oo = function(e) {
    return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
  },
  io = function(e) {
    if (!e) throw new Error("No node provided");
    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || function(e) {
      var t, n = null == e || null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "contenteditable");
      return "" === n || "true" === n
    }(e)) && !oo(e) ? 0 : e.tabIndex
  },
  ao = function(e, t) {
    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
  },
  lo = function(e) {
    return "INPUT" === e.tagName
  },
  so = function(e) {
    var t = e.getBoundingClientRect(),
      n = t.width,
      r = t.height;
    return 0 === n && 0 === r
  },
  co = function(e, t) {
    return !(t.disabled || to(t) || function(e) {
      return lo(e) && "hidden" === e.type
    }(t) || function(e, t) {
      var n = t.displayCheck,
        r = t.getShadowRoot;
      if ("hidden" === getComputedStyle(e).visibility) return !0;
      var o = Zr.call(e, "details>summary:first-of-type") ? e.parentElement : e;
      if (Zr.call(o, "details:not([open]) *")) return !0;
      if (n && "full" !== n && "legacy-full" !== n) {
        if ("non-zero-area" === n) return so(e)
      } else {
        if ("function" == typeof r) {
          for (var i = e; e;) {
            var a = e.parentElement,
              l = eo(e);
            if (a && !a.shadowRoot && !0 === r(a)) return so(e);
            e = e.assignedSlot ? e.assignedSlot : a || l === e.ownerDocument ? a : l.host
          }
          e = i
        }
        if (function(e) {
            var t, n, r, o, i = e && eo(e),
              a = null === (t = i) || void 0 === t ? void 0 : t.host,
              l = !1;
            if (i && i !== e)
              for (l = !!(null !== (n = a) && void 0 !== n && null !== (r = n.ownerDocument) && void 0 !== r && r.contains(a) || null != e && null !== (o = e.ownerDocument) && void 0 !== o && o.contains(e)); !l && a;) {
                var s, c, u;
                l = !(null === (c = a = null === (s = i = eo(a)) || void 0 === s ? void 0 : s.host) || void 0 === c || null === (u = c.ownerDocument) || void 0 === u || !u.contains(a))
              }
            return l
          }(e)) return !e.getClientRects().length;
        if ("legacy-full" !== n) return !0
      }
      return !1
    }(t, e) || function(e) {
      return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some(function(e) {
        return "SUMMARY" === e.tagName
      })
    }(t) || function(e) {
      if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
        for (var t = e.parentElement; t;) {
          if ("FIELDSET" === t.tagName && t.disabled) {
            for (var n = 0; n < t.children.length; n++) {
              var r = t.children.item(n);
              if ("LEGEND" === r.tagName) return !!Zr.call(t, "fieldset[disabled] *") || !r.contains(e)
            }
            return !0
          }
          t = t.parentElement
        }
      return !1
    }(t))
  },
  uo = function(e, t) {
    return !(function(e) {
      return function(e) {
        return lo(e) && "radio" === e.type
      }(e) && ! function(e) {
        if (!e.name) return !0;
        var t, n = e.form || eo(e),
          r = function(e) {
            return n.querySelectorAll('input[type="radio"][name="' + e + '"]')
          };
        if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) t = r(window.CSS.escape(e.name));
        else try {
          t = r(e.name)
        } catch (i) {
          return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i.message), !1
        }
        var o = function(e, t) {
          for (var n = 0; n < e.length; n++)
            if (e[n].checked && e[n].form === t) return e[n]
        }(t, e.form);
        return !o || o === e
      }(e)
    }(t) || io(t) < 0 || !co(e, t))
  },
  fo = function(e) {
    var t = parseInt(e.getAttribute("tabindex"), 10);
    return !!(isNaN(t) || t >= 0)
  },
  po = function e(t) {
    var n = [],
      r = [];
    return t.forEach(function(t, o) {
      var i = !!t.scopeParent,
        a = i ? t.scopeParent : t,
        l = function(e, t) {
          var n = io(e);
          return n < 0 && t && !oo(e) ? 0 : n
        }(a, i),
        s = i ? e(t.candidates) : a;
      0 === l ? i ? n.push.apply(n, s) : n.push(a) : r.push({
        documentOrder: o,
        tabIndex: l,
        item: t,
        isScope: i,
        content: s
      })
    }), r.sort(ao).reduce(function(e, t) {
      return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
    }, []).concat(n)
  },
  ho = function(e, t) {
    if (t = t || {}, !e) throw new Error("No node provided");
    return !1 !== Zr.call(e, Xr) && uo(t, e)
  },
  mo = Qr.concat("iframe").join(","),
  go = function(e, t) {
    if (t = t || {}, !e) throw new Error("No node provided");
    return !1 !== Zr.call(e, mo) && co(t, e)
  };

function vo(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r
}

function $o(e, t, n) {
  return (t = function(e) {
    var t = function(e, t) {
      if ("object" != typeof e || !e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var r = n.call(e, t);
        if ("object" != typeof r) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
      }
      return String(e)
    }(e, "string");
    return "symbol" == typeof t ? t : t + ""
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function wo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function yo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? wo(Object(n), !0).forEach(function(t) {
      $o(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wo(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}
var xo = function(e) {
    return "Tab" === (null == e ? void 0 : e.key) || 9 === (null == e ? void 0 : e.keyCode)
  },
  bo = function(e) {
    return xo(e) && !e.shiftKey
  },
  _o = function(e) {
    return xo(e) && e.shiftKey
  },
  ko = function(e) {
    return setTimeout(e, 0)
  },
  Co = function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return "function" == typeof e ? e.apply(void 0, n) : e
  },
  So = function(e) {
    return e.target.shadowRoot && "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
  },
  Ao = [],
  Bo = function(e, t) {
    var n, r = (null == t ? void 0 : t.document) || document,
      o = (null == t ? void 0 : t.trapStack) || Ao,
      i = yo({
        returnFocusOnDeactivate: !0,
        escapeDeactivates: !0,
        delayInitialFocus: !0,
        isKeyForward: bo,
        isKeyBackward: _o
      }, t),
      a = {
        containers: [],
        containerGroups: [],
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1,
        manuallyPaused: !1,
        delayInitialFocusTimer: void 0,
        recentNavEvent: void 0
      },
      l = function(e, t, n) {
        return e && void 0 !== e[t] ? e[t] : i[n || t]
      },
      s = function(e, t) {
        var n = "function" == typeof(null == t ? void 0 : t.composedPath) ? t.composedPath() : void 0;
        return a.containerGroups.findIndex(function(t) {
          var r = t.container,
            o = t.tabbableNodes;
          return r.contains(e) || (null == n ? void 0 : n.includes(r)) || o.find(function(t) {
            return t === e
          })
        })
      },
      c = function(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = n.hasFallback,
          a = void 0 !== o && o,
          l = n.params,
          s = void 0 === l ? [] : l,
          c = i[e];
        if ("function" == typeof c && (c = c.apply(void 0, function(e) {
            if (Array.isArray(e)) return vo(e)
          }(t = s) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
          }(t) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return vo(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vo(e, t) : void 0
            }
          }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }())), !0 === c && (c = void 0), !c) {
          if (void 0 === c || !1 === c) return c;
          throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
        }
        var u = c;
        if ("string" == typeof c) {
          try {
            u = r.querySelector(c)
          } catch (d) {
            throw new Error("`".concat(e, '` appears to be an invalid selector; error="').concat(d.message, '"'))
          }
          if (!u && !a) throw new Error("`".concat(e, "` as selector refers to no known node"))
        }
        return u
      },
      u = function() {
        var e = c("initialFocus", {
          hasFallback: !0
        });
        if (!1 === e) return !1;
        if (void 0 === e || e && !go(e, i.tabbableOptions))
          if (s(r.activeElement) >= 0) e = r.activeElement;
          else {
            var t = a.tabbableGroups[0];
            e = t && t.firstTabbableNode || c("fallbackFocus")
          }
        else null === e && (e = c("fallbackFocus"));
        if (!e) throw new Error("Your focus-trap needs to have at least one focusable element");
        return e
      },
      d = function() {
        if (a.containerGroups = a.containers.map(function(e) {
            var t = function(e, t) {
                var n;
                return n = (t = t || {}).getShadowRoot ? ro([e], t.includeContainer, {
                  filter: uo.bind(null, t),
                  flatten: !1,
                  getShadowRoot: t.getShadowRoot,
                  shadowRootFilter: fo
                }) : no(e, t.includeContainer, uo.bind(null, t)), po(n)
              }(e, i.tabbableOptions),
              n = function(e, t) {
                return (t = t || {}).getShadowRoot ? ro([e], t.includeContainer, {
                  filter: co.bind(null, t),
                  flatten: !0,
                  getShadowRoot: t.getShadowRoot
                }) : no(e, t.includeContainer, co.bind(null, t))
              }(e, i.tabbableOptions),
              r = t.length > 0 ? t[0] : void 0,
              o = t.length > 0 ? t[t.length - 1] : void 0,
              a = n.find(function(e) {
                return ho(e)
              }),
              l = n.slice().reverse().find(function(e) {
                return ho(e)
              }),
              s = !!t.find(function(e) {
                return io(e) > 0
              });
            return {
              container: e,
              tabbableNodes: t,
              focusableNodes: n,
              posTabIndexesFound: s,
              firstTabbableNode: r,
              lastTabbableNode: o,
              firstDomTabbableNode: a,
              lastDomTabbableNode: l,
              nextTabbableNode: function(e) {
                var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                  o = t.indexOf(e);
                return o < 0 ? r ? n.slice(n.indexOf(e) + 1).find(function(e) {
                  return ho(e)
                }) : n.slice(0, n.indexOf(e)).reverse().find(function(e) {
                  return ho(e)
                }) : t[o + (r ? 1 : -1)]
              }
            }
          }), a.tabbableGroups = a.containerGroups.filter(function(e) {
            return e.tabbableNodes.length > 0
          }), a.tabbableGroups.length <= 0 && !c("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
        if (a.containerGroups.find(function(e) {
            return e.posTabIndexesFound
          }) && a.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
      },
      f = function(e) {
        var t = e.activeElement;
        if (t) return t.shadowRoot && null !== t.shadowRoot.activeElement ? f(t.shadowRoot) : t
      },
      p = function(e) {
        !1 !== e && e !== f(document) && (e && e.focus ? (e.focus({
          preventScroll: !!i.preventScroll
        }), a.mostRecentlyFocusedNode = e, function(e) {
          return e.tagName && "input" === e.tagName.toLowerCase() && "function" == typeof e.select
        }(e) && e.select()) : p(u()))
      },
      h = function(e) {
        var t = c("setReturnFocus", {
          params: [e]
        });
        return t || !1 !== t && e
      },
      m = function(e) {
        var t = e.target,
          n = e.event,
          r = e.isBackward,
          o = void 0 !== r && r;
        t = t || So(n), d();
        var l = null;
        if (a.tabbableGroups.length > 0) {
          var u = s(t, n),
            f = u >= 0 ? a.containerGroups[u] : void 0;
          if (u < 0) l = o ? a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : a.tabbableGroups[0].firstTabbableNode;
          else if (o) {
            var p = a.tabbableGroups.findIndex(function(e) {
              var n = e.firstTabbableNode;
              return t === n
            });
            if (p < 0 && (f.container === t || go(t, i.tabbableOptions) && !ho(t, i.tabbableOptions) && !f.nextTabbableNode(t, !1)) && (p = u), p >= 0) {
              var h = 0 === p ? a.tabbableGroups.length - 1 : p - 1,
                m = a.tabbableGroups[h];
              l = io(t) >= 0 ? m.lastTabbableNode : m.lastDomTabbableNode
            } else xo(n) || (l = f.nextTabbableNode(t, !1))
          } else {
            var g = a.tabbableGroups.findIndex(function(e) {
              var n = e.lastTabbableNode;
              return t === n
            });
            if (g < 0 && (f.container === t || go(t, i.tabbableOptions) && !ho(t, i.tabbableOptions) && !f.nextTabbableNode(t)) && (g = u), g >= 0) {
              var v = g === a.tabbableGroups.length - 1 ? 0 : g + 1,
                $ = a.tabbableGroups[v];
              l = io(t) >= 0 ? $.firstTabbableNode : $.firstDomTabbableNode
            } else xo(n) || (l = f.nextTabbableNode(t))
          }
        } else l = c("fallbackFocus");
        return l
      },
      g = function(e) {
        var t = So(e);
        s(t, e) >= 0 || (Co(i.clickOutsideDeactivates, e) ? n.deactivate({
          returnFocus: i.returnFocusOnDeactivate
        }) : Co(i.allowOutsideClick, e) || e.preventDefault())
      },
      v = function(e) {
        var t = So(e),
          n = s(t, e) >= 0;
        if (n || t instanceof Document) n && (a.mostRecentlyFocusedNode = t);
        else {
          var r;
          e.stopImmediatePropagation();
          var o = !0;
          if (a.mostRecentlyFocusedNode)
            if (io(a.mostRecentlyFocusedNode) > 0) {
              var l = s(a.mostRecentlyFocusedNode),
                c = a.containerGroups[l].tabbableNodes;
              if (c.length > 0) {
                var d = c.findIndex(function(e) {
                  return e === a.mostRecentlyFocusedNode
                });
                d >= 0 && (i.isKeyForward(a.recentNavEvent) ? d + 1 < c.length && (r = c[d + 1], o = !1) : d - 1 >= 0 && (r = c[d - 1], o = !1))
              }
            } else a.containerGroups.some(function(e) {
              return e.tabbableNodes.some(function(e) {
                return io(e) > 0
              })
            }) || (o = !1);
          else o = !1;
          o && (r = m({
            target: a.mostRecentlyFocusedNode,
            isBackward: i.isKeyBackward(a.recentNavEvent)
          })), p(r || a.mostRecentlyFocusedNode || u())
        }
        a.recentNavEvent = void 0
      },
      $ = function(e) {
        (i.isKeyForward(e) || i.isKeyBackward(e)) && function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          a.recentNavEvent = e;
          var n = m({
            event: e,
            isBackward: t
          });
          n && (xo(e) && e.preventDefault(), p(n))
        }(e, i.isKeyBackward(e))
      },
      w = function(e) {
        var t;
        "Escape" !== (null == (t = e) ? void 0 : t.key) && "Esc" !== (null == t ? void 0 : t.key) && 27 !== (null == t ? void 0 : t.keyCode) || !1 === Co(i.escapeDeactivates, e) || (e.preventDefault(), n.deactivate())
      },
      y = function(e) {
        var t = So(e);
        s(t, e) >= 0 || Co(i.clickOutsideDeactivates, e) || Co(i.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation())
      },
      x = function() {
        if (a.active) return function(e, t) {
          if (e.length > 0) {
            var n = e[e.length - 1];
            n !== t && n._setPausedState(!0)
          }
          var r = e.indexOf(t); - 1 === r || e.splice(r, 1), e.push(t)
        }(o, n), a.delayInitialFocusTimer = i.delayInitialFocus ? ko(function() {
          p(u())
        }) : p(u()), r.addEventListener("focusin", v, !0), r.addEventListener("mousedown", g, {
          capture: !0,
          passive: !1
        }), r.addEventListener("touchstart", g, {
          capture: !0,
          passive: !1
        }), r.addEventListener("click", y, {
          capture: !0,
          passive: !1
        }), r.addEventListener("keydown", $, {
          capture: !0,
          passive: !1
        }), r.addEventListener("keydown", w), n
      },
      b = function() {
        if (a.active) return r.removeEventListener("focusin", v, !0), r.removeEventListener("mousedown", g, !0), r.removeEventListener("touchstart", g, !0), r.removeEventListener("click", y, !0), r.removeEventListener("keydown", $, !0), r.removeEventListener("keydown", w), n
      },
      _ = "undefined" != typeof window && "MutationObserver" in window ? new MutationObserver(function(e) {
        e.some(function(e) {
          return Array.from(e.removedNodes).some(function(e) {
            return e === a.mostRecentlyFocusedNode
          })
        }) && p(u())
      }) : void 0,
      k = function() {
        _ && (_.disconnect(), a.active && !a.paused && a.containers.map(function(e) {
          _.observe(e, {
            subtree: !0,
            childList: !0
          })
        }))
      };
    return n = {
      get active() {
        return a.active
      },
      get paused() {
        return a.paused
      },
      activate: function(e) {
        if (a.active) return this;
        var t = l(e, "onActivate"),
          n = l(e, "onPostActivate"),
          o = l(e, "checkCanFocusTrap");
        o || d(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = f(r), null == t || t();
        var i = function() {
          o && d(), x(), k(), null == n || n()
        };
        return o ? (o(a.containers.concat()).then(i, i), this) : (i(), this)
      },
      deactivate: function(e) {
        if (!a.active) return this;
        var t = yo({
          onDeactivate: i.onDeactivate,
          onPostDeactivate: i.onPostDeactivate,
          checkCanReturnFocus: i.checkCanReturnFocus
        }, e);
        clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, b(), a.active = !1, a.paused = !1, k(),
          function(e, t) {
            var n = e.indexOf(t); - 1 !== n && e.splice(n, 1), e.length > 0 && !e[e.length - 1]._isManuallyPaused() && e[e.length - 1]._setPausedState(!1)
          }(o, n);
        var r = l(t, "onDeactivate"),
          s = l(t, "onPostDeactivate"),
          c = l(t, "checkCanReturnFocus"),
          u = l(t, "returnFocus", "returnFocusOnDeactivate");
        null == r || r();
        var d = function() {
          ko(function() {
            u && p(h(a.nodeFocusedBeforeActivation)), null == s || s()
          })
        };
        return u && c ? (c(h(a.nodeFocusedBeforeActivation)).then(d, d), this) : (d(), this)
      },
      pause: function(e) {
        return a.active ? (a.manuallyPaused = !0, this._setPausedState(!0, e)) : this
      },
      unpause: function(e) {
        return a.active ? (a.manuallyPaused = !1, o[o.length - 1] !== this ? this : this._setPausedState(!1, e)) : this
      },
      updateContainerElements: function(e) {
        var t = [].concat(e).filter(Boolean);
        return a.containers = t.map(function(e) {
          return "string" == typeof e ? r.querySelector(e) : e
        }), a.active && d(), k(), this
      }
    }, Object.defineProperties(n, {
      _isManuallyPaused: {
        value: function() {
          return a.manuallyPaused
        }
      },
      _setPausedState: {
        value: function(e, t) {
          if (a.paused === e) return this;
          if (a.paused = e, e) {
            var n = l(t, "onPause"),
              r = l(t, "onPostPause");
            null == n || n(), b(), k(), null == r || r()
          } else {
            var o = l(t, "onUnpause"),
              i = l(t, "onPostUnpause");
            null == o || o(), d(), x(), k(), null == i || i()
          }
          return this
        }
      }
    }), n.updateContainerElements(e), n
  };
const Mo = new Set,
  Oo = (e, t = {}) => {
    let n = Er,
      r = Er,
      o = Er,
      i = Er;
    Mo.add(e);
    const a = (null == (l = e) ? void 0 : l.ownerDocument) ?? document;
    var l;
    let s = !1,
      c = !1;
    const u = {
        pointerdown: !1,
        pointerup: !1,
        mousedown: !1,
        mouseup: !1,
        touchstart: !1,
        touchend: !1,
        click: !1
      },
      d = () => {
        for (const e in u) u[e] = !1
      },
      f = () => {
        for (const e of Object.values(u))
          if (e) return !0;
        return !1
      },
      p = (e, t) => Gr(a, e, n => {
        u[e] = !0, null == t || t(n)
      }, !0),
      h = (e, t) => Gr(a, e, n => {
        u[e] = !1, null == t || t(n)
      });

    function m(t) {
      n(), r(), o(), i(), d();
      const {
        onInteractOutside: a,
        onInteractOutsideStart: l,
        enabled: u
      } = {
        enabled: !0,
        ...t
      };
      if (!u) return;
      let m = !1;
      const g = qr(t => {
        if (!m || f()) return;
        a && Po(t, e) && (null == l || l(t));
        const n = t.target;
        Or(n) && Vr(e, n) && (c = !0), s = !0
      }, 10);
      r = g.destroy;
      const v = qr(t => {
        m && !f() && function(t) {
          return !(!s || c || !Po(t, e))
        }(t) && (null == a || a(t)), s = !1, c = !1
      }, 10);
      o = v.destroy;
      const $ = qr(d, 20);
      i = $.destroy;
      const w = () => {
        m = function(e) {
          return Array.from(Mo).at(-1) === e
        }(e)
      };
      n = Tr(p("pointerdown", w), p("mousedown", w), p("touchstart", w), p("pointerup", $), p("mouseup", $), p("touchend", $), p("click", $), h("pointerdown", g), h("mousedown", g), h("touchstart", g), h("pointerup", v), h("mouseup", v), h("touchend", v), h("click", v))
    }
    return m(t), {
      update: m,
      destroy() {
        n(), r(), o(), i(), Mo.delete(e)
      }
    }
  };

function Po(e, t) {
  if ("button" in e && e.button > 0) return !1;
  const n = e.target;
  if (!Or(n)) return !1;
  const r = n.ownerDocument;
  return !(!r || !r.documentElement.contains(n)) && t && !Vr(t, n)
}
br({
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: !1,
  numberOfMonths: 1,
  pagedNavigation: !1,
  weekStartsOn: 0,
  fixedWeeks: !1,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: !1,
  readonly: !1,
  weekdayFormat: "narrow"
}, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat");
const {
  name: To
} = function(e) {
  const t = t => `[data-melt-${e}${t?`-${t}`:""}]`;
  return {
    name: t => t ? `${e}-${t}` : e,
    attribute: t => `data-melt-${e}${t?`-${t}`:""}`,
    selector: t,
    getEl: e => document.querySelector(t(e))
  }
}("dialog"), Eo = {
  preventScroll: !0,
  escapeBehavior: "close",
  closeOnOutsideClick: !0,
  role: "dialog",
  defaultOpen: !1,
  portal: void 0,
  forceVisible: !1,
  openFocus: void 0,
  closeFocus: void 0,
  onOutsideClick: void 0
}, Go = ["content", "title", "description"];

function Do(e) {
  const t = {
      ...Eo,
      ...e
    },
    n = Hr(br(t, "ids")),
    {
      preventScroll: r,
      escapeBehavior: o,
      closeOnOutsideClick: i,
      role: a,
      portal: l,
      forceVisible: s,
      openFocus: c,
      closeFocus: u,
      onOutsideClick: d
    } = n,
    p = Ir.writable(null),
    h = Hr({
      ...(m = Go, m.reduce((e, t) => (e[t] = ((e = 21) => {
        let t = "",
          n = 0 | e;
        for (; n--;) t += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
        return t
      })(10), e), {})),
      ...t.ids
    });
  var m;
  const g = ((e, t) => {
      const n = Ir(e),
        r = (e, r) => {
          n.update(n => {
            const o = e(n);
            let i = o;
            return t && (i = t({
              curr: n,
              next: o
            })), null == r || r(i), i
          })
        };
      return {
        ...n,
        update: r,
        set: e => {
          r(() => e)
        }
      }
    })(t.open ?? f(t.defaultOpen), null == t ? void 0 : t.onOpenChange),
    v = O([g, s], ([e, t]) => e || t);
  let $ = Er;

  function w(e) {
    const t = e.currentTarget,
      n = e.currentTarget;
    Pr(t) && Pr(n) && (g.set(!0), p.set(n))
  }

  function y() {
    g.set(!1)
  }
  const x = Ar(To("trigger"), {
      stores: [g],
      returned: ([e]) => ({
        "aria-haspopup": "dialog",
        "aria-expanded": e,
        type: "button"
      }),
      action: e => ({
        destroy: Tr(Dr(e, "click", e => {
          w(e)
        }), Dr(e, "keydown", e => {
          e.key !== Lr && " " !== e.key || (e.preventDefault(), w(e))
        }))
      })
    }),
    b = Ar(To("overlay"), {
      stores: [v, g],
      returned: ([e, t]) => ({
        hidden: !e || void 0,
        tabindex: -1,
        style: e ? void 0 : yr({
          display: "none"
        }),
        "aria-hidden": !0,
        "data-state": t ? "open" : "closed"
      })
    }),
    _ = Ar(To("content"), {
      stores: [v, h.content, h.description, h.title, g],
      returned: ([e, t, n, r, o]) => ({
        id: t,
        role: a.get(),
        "aria-describedby": n,
        "aria-labelledby": r,
        "aria-modal": e ? "true" : void 0,
        "data-state": o ? "open" : "closed",
        tabindex: -1,
        hidden: !e || void 0,
        style: e ? void 0 : yr({
          display: "none"
        })
      }),
      action: e => {
        let t = Er,
          n = Er,
          r = Er;
        const a = Wr([v, i], ([i, a]) => {
          n(), t(), r(), i && (n = ((e, t) => {
            let n = Er;

            function r(t) {
              n();
              const {
                onClose: r,
                shouldCloseOnInteractOutside: o,
                closeOnInteractOutside: i
              } = t;
              n = Oo(e, {
                onInteractOutsideStart: function(e) {
                  Or(e.target) && e.stopImmediatePropagation()
                },
                onInteractOutside: i ? function(e) {
                  (null == o ? void 0 : o(e)) && (e.stopImmediatePropagation(), null == r || r())
                } : void 0,
                enabled: i
              }).destroy
            }
            return r(t), {
              update: r,
              destroy() {
                n()
              }
            }
          })(e, {
            closeOnInteractOutside: a,
            onClose: y,
            shouldCloseOnInteractOutside(e) {
              var t;
              return null == (t = d.get()) || t(e), !e.defaultPrevented
            }
          }).destroy, t = ((e, t = {}) => {
            let n = Er;

            function r(t = {}) {
              n();
              const r = {
                  behaviorType: "close",
                  ...t
                },
                o = function(e) {
                  return null !== e && "object" == typeof e
                }(i = r.behaviorType) && "subscribe" in i ? r.behaviorType : Ir(D(r.behaviorType));
              var i;
              Yr.set(e, o), n = Tr(Gr(document, "keydown", t => {
                var n;
                "Escape" === t.key && (e => {
                  const t = [...Yr],
                    n = t.findLast(([e, t]) => {
                      const n = t.get();
                      return "close" === n || "ignore" === n
                    });
                  if (n) return n[0] === e;
                  const [r] = t[0];
                  return r === e
                })(e) && Pr(t.target) && (t.preventDefault(), ((e, t) => !(!t || !(Mr(t) && t(e) || Array.isArray(t) && t.some(t => e.target === t))))(t, r.ignore) || (e => "close" === e || "defer-otherwise-close" === e)(o.get()) && (null == (n = r.handler) || n.call(r, t)))
              }, {
                passive: !1
              }), Wr(o, t => {
                "close" === t || "defer-otherwise-close" === t && [...Yr.keys()][0] === e ? e.dataset.escapee = "" : delete e.dataset.escapee
              }), o.destroy || Er)
            }
            return r(t), {
              update: r,
              destroy() {
                Yr.delete(e), delete e.dataset.escapee, n()
              }
            }
          })(e, {
            handler: y,
            behaviorType: o
          }).destroy, r = ((e, t = {}) => {
            let n = Er;
            const r = t => {
              n();
              const r = Bo(e, {
                returnFocusOnDeactivate: !1,
                allowOutsideClick: !0,
                escapeDeactivates: !1,
                clickOutsideDeactivates: !1,
                ...t
              });
              n = r.deactivate, r.activate()
            };
            return r(t), {
              destroy: n,
              update: r
            }
          })(e, {
            fallbackFocus: e
          }).destroy)
        });
        return {
          destroy: () => {
            $(), a(), n(), t(), r()
          }
        }
      }
    }),
    k = Ar(To("portalled"), {
      stores: l,
      returned: e => ({
        "data-portal": xr(e)
      }),
      action: e => {
        const t = Wr([l], ([t]) => {
          if (null === t) return Er;
          const n = function(e, t) {
            if (void 0 !== t) return t;
            const n = function(e) {
              let t = e.parentElement;
              for (; Pr(t) && !t.hasAttribute("data-portal");) t = t.parentElement;
              return t || "body"
            }(e);
            return "body" === n ? document.body : null
          }(e, t);
          return null === n ? Er : ((e, t = "body") => {
            let n;
            if (!Pr(t) && "string" != typeof t) return {
              destroy: Er
            };
            async function r(r) {
              if ("string" == typeof(t = r)) {
                if (n = document.querySelector(t), null === n && (await kn(), n = document.querySelector(t)), null === n) throw new Error(`No element found matching css selector: "${t}"`)
              } else {
                if (!(t instanceof HTMLElement)) throw new TypeError(`Unknown portal target type: ${null===t?"null":typeof t}. Allowed types: string (CSS selector) or HTMLElement.`);
                n = t
              }
              e.dataset.portal = "", n.appendChild(e), e.hidden = !1
            }
            return r(t), {
              update: r,
              destroy: function() {
                e.remove()
              }
            }
          })(e, n).destroy
        });
        return {
          destroy() {
            t()
          }
        }
      }
    }),
    C = Ar(To("title"), {
      stores: [h.title],
      returned: ([e]) => ({
        id: e
      })
    }),
    S = Ar(To("description"), {
      stores: [h.description],
      returned: ([e]) => ({
        id: e
      })
    }),
    A = Ar(To("close"), {
      returned: () => ({
        type: "button"
      }),
      action: e => ({
        destroy: Tr(Dr(e, "click", () => {
          y()
        }), Dr(e, "keydown", e => {
          " " !== e.key && e.key !== Lr || (e.preventDefault(), y())
        }))
      })
    });
  return Wr([g, r], ([e, t]) => {
    if (Br) {
      if (t && e && ($ = Ur()), e) {
        const e = document.getElementById(h.content.get());
        Kr({
          prop: c.get(),
          defaultEl: e
        })
      }
      return () => {
        s.get() || $()
      }
    }
  }), Wr(g, e => {
    Br && !e && Kr({
      prop: u.get(),
      defaultEl: p.get()
    })
  }, {
    skipFirstRun: !0
  }), {
    ids: h,
    elements: {
      content: _,
      trigger: x,
      title: C,
      description: S,
      overlay: b,
      close: A,
      portalled: k
    },
    states: {
      open: g
    },
    options: n
  }
}

function Io(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "24"
    }, {
      height: "24"
    }, {
      fill: "currentColor"
    }, {
      viewBox: "0 -960 960 960"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path d="M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224z"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "24"
      }, {
        height: "24"
      }, {
        fill: "currentColor"
      }, {
        viewBox: "0 -960 960 960"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function Lo(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class qo extends Zn {
  constructor(e) {
    super(), Jn(this, e, Lo, Io, h, {})
  }
}
const zo = (e, ...t) => String.raw({
  raw: e
}, ...t);

function Fo(e) {
  let t, n, r, o, i;
  const a = e[11].default,
    l = z(a, e, e[10], null);
  let s = [{
      autofocus: e[2]
    }, {
      disabled: e[1]
    }, e[6], {
      role: "button"
    }, {
      class: n = "white flex items-center justify-center whitespace-nowrap rounded-lg text-base disabled:opacity-50 " + e[5]() + " " + e[4]() + " " + e[0]
    }],
    c = {};
  for (let u = 0; u < s.length; u += 1) c = I(c, s[u]);
  return {
    c() {
      t = Mt(e[3]), l && l.c(), Ft(e[3])(t, c)
    },
    m(n, a) {
      Ct(n, t, a), l && l.m(t, null), r = !0, o || (i = Gt(t, "click", e[12]), o = !0)
    },
    p(e, o) {
      l && l.p && (!r || 1024 & o) && F(l, a, e, e[10], r ? N(a, e[10], o, null) : j(e[10]), null), Ft(e[3])(t, c = Hn(s, [(!r || 4 & o) && {
        autofocus: e[2]
      }, (!r || 2 & o) && {
        disabled: e[1]
      }, 64 & o && e[6], {
        role: "button"
      }, (!r || 49 & o && n !== (n = "white flex items-center justify-center whitespace-nowrap rounded-lg text-base disabled:opacity-50 " + e[5]() + " " + e[4]() + " " + e[0])) && {
        class: n
      }]))
    },
    i(e) {
      r || (qn(l, e), r = !0)
    },
    o(e) {
      zn(l, e), r = !1
    },
    d(e) {
      e && At(t), l && l.d(e), o = !1, i()
    }
  }
}

function jo(e) {
  let t, n, r = e[3],
    o = e[3] && Fo(e);
  return {
    c() {
      o && o.c(), t = Et()
    },
    m(e, r) {
      o && o.m(e, r), Ct(e, t, r), n = !0
    },
    p(e, [n]) {
      e[3] ? r ? h(r, e[3]) ? (o.d(1), o = Fo(e), r = e[3], o.c(), o.m(t.parentNode, t)) : o.p(e, n) : (o = Fo(e), r = e[3], o.c(), o.m(t.parentNode, t)) : r && (o.d(1), o = null, r = e[3])
    },
    i(e) {
      n || (qn(o, e), n = !0)
    },
    o(e) {
      zn(o, e), n = !1
    },
    d(e) {
      e && At(t), o && o.d(e)
    }
  }
}

function No(e, t, n) {
  let r, o;
  const i = ["class", "size", "type", "disabled", "autofocus", "square", "tag"];
  let a = q(t, i),
    {
      $$slots: l = {},
      $$scope: s
    } = t,
    {
      class: c = ""
    } = t,
    {
      size: u = "md"
    } = t,
    {
      type: d = "primary"
    } = t,
    {
      disabled: f = !1
    } = t,
    {
      autofocus: p = !1
    } = t,
    {
      square: h = !1
    } = t,
    {
      tag: m = "button"
    } = t;
  return e.$$set = e => {
    t = I(I({}, t), L(e)), n(6, a = q(t, i)), "class" in e && n(0, c = e.class), "size" in e && n(7, u = e.size), "type" in e && n(8, d = e.type), "disabled" in e && n(1, f = e.disabled), "autofocus" in e && n(2, p = e.autofocus), "square" in e && n(9, h = e.square), "tag" in e && n(3, m = e.tag), "$$scope" in e && n(10, s = e.$$scope)
  }, e.$$.update = () => {
    256 & e.$$.dirty && n(5, r = () => {
      switch (d) {
        case "primary":
          return zo`from-button-gradient-start to-button-gradient-end shadow-button bg-gradient-to-b text-white`;
        case "secondary":
          return zo`border-tan border-2`;
        case "transparent":
          return zo`text-brown bg-transparent`;
        case "inverted":
          return zo`bg-near-black text-white`;
        default:
          y()
      }
    }), 640 & e.$$.dirty && n(4, o = () => {
      let e, t = h ? zo`aspect-square` : zo`px-4`;
      switch (u) {
        case "md":
          e = zo`h-10`;
          break;
        case "lg":
          e = zo`h-12`;
          break;
        default:
          y()
      }
      return `${t} ${e}`
    })
  }, [c, f, p, m, o, r, a, u, d, h, s, l, function(t) {
    gn.call(this, e, t)
  }]
}
class Ro extends Zn {
  constructor(e) {
    super(), Jn(this, e, No, jo, h, {
      class: 0,
      size: 7,
      type: 8,
      disabled: 1,
      autofocus: 2,
      square: 9,
      tag: 3
    })
  }
}

function Uo(e) {
  let t, n;
  return t = new qo({}), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Wo(e) {
  let t, n;
  return t = new Ro({
    props: {
      class: "absolute right-3 top-3 z-50",
      square: !0,
      $$slots: {
        default: [Uo]
      },
      $$scope: {
        ctx: e
      }
    }
  }), t.$on("click", e[0]), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, [n]) {
      const r = {};
      2 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Ho(e) {
  return [function(t) {
    gn.call(this, e, t)
  }]
}
class Vo extends Zn {
  constructor(e) {
    super(), Jn(this, e, Ho, Wo, h, {})
  }
}
const Ko = e => ({}),
  Yo = e => ({}),
  Qo = e => ({}),
  Xo = e => ({}),
  Jo = e => ({}),
  Zo = e => ({}),
  ei = e => ({}),
  ti = e => ({});

function ni(e) {
  let t, n;
  return t = new Vo({}), t.$on("click", e[9]), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p: r,
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function ri(e) {
  let t, n, r, o;
  const i = e[8].illustration,
    a = z(i, e, e[7], ti);
  return {
    c() {
      t = Mt("div"), n = Mt("div"), r = Tt(), a && a.c(), Dt(n, "class", "shadow-dialog-illustration-box pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-50 bg-transparent"), Dt(t, "class", "from-dialog-illustration-gradient-start to-dialog-illustration-gradient-end relative flex min-h-0 shrink items-center justify-center overflow-hidden bg-gradient-to-b")
    },
    m(e, i) {
      Ct(e, t, i), bt(t, n), bt(t, r), a && a.m(t, null), o = !0
    },
    p(e, t) {
      a && a.p && (!o || 128 & t) && F(a, i, e, e[7], o ? N(i, e[7], t, ei) : j(e[7]), ti)
    },
    i(e) {
      o || (qn(a, e), o = !0)
    },
    o(e) {
      zn(a, e), o = !1
    },
    d(e) {
      e && At(t), a && a.d(e)
    }
  }
}

function oi(e) {
  let t, n, r, o;
  const i = e[8].title,
    a = z(i, e, e[7], Zo);
  let l = [e[3], {
      class: "text-center text-2xl font-semibold md:text-4xl md:font-medium"
    }],
    s = {};
  for (let c = 0; c < l.length; c += 1) s = I(s, l[c]);
  return {
    c() {
      t = Mt("h1"), a && a.c(), Lt(t, s)
    },
    m(i, l) {
      Ct(i, t, l), a && a.m(t, null), n = !0, r || (o = m(e[3].action(t)), r = !0)
    },
    p(e, r) {
      a && a.p && (!n || 128 & r) && F(a, i, e, e[7], n ? N(i, e[7], r, Jo) : j(e[7]), Zo), Lt(t, s = Hn(l, [8 & r && e[3], {
        class: "text-center text-2xl font-semibold md:text-4xl md:font-medium"
      }]))
    },
    i(e) {
      n || (qn(a, e), n = !0)
    },
    o(e) {
      zn(a, e), n = !1
    },
    d(e) {
      e && At(t), a && a.d(e), r = !1, o()
    }
  }
}

function ii(e) {
  let t, n, r, o;
  const i = e[8].description,
    a = z(i, e, e[7], Xo);
  let l = [{
      class: "sr-only"
    }, e[4]],
    s = {};
  for (let c = 0; c < l.length; c += 1) s = I(s, l[c]);
  return {
    c() {
      t = Mt("span"), a && a.c(), Lt(t, s)
    },
    m(i, l) {
      Ct(i, t, l), a && a.m(t, null), n = !0, r || (o = m(e[4].action(t)), r = !0)
    },
    p(e, r) {
      a && a.p && (!n || 128 & r) && F(a, i, e, e[7], n ? N(i, e[7], r, Qo) : j(e[7]), Xo), Lt(t, s = Hn(l, [{
        class: "sr-only"
      }, 16 & r && e[4]]))
    },
    i(e) {
      n || (qn(a, e), n = !0)
    },
    o(e) {
      zn(a, e), n = !1
    },
    d(e) {
      e && At(t), a && a.d(e), r = !1, o()
    }
  }
}

function ai(e) {
  let t, n, r, o, i;
  const a = e[8].actions,
    l = z(a, e, e[7], Yo);
  return {
    c() {
      t = Mt("div"), n = Mt("div"), r = Tt(), o = Mt("div"), l && l.c(), Dt(n, "class", "from-sand pointer-events-none absolute -top-6 left-0 right-0 z-0 h-6 bg-gradient-to-t to-transparent md:-top-8 md:h-8"), Dt(o, "class", "relative z-10 flex flex-col gap-2"), Dt(t, "class", "relative flex shrink-0 flex-col px-6 pb-6 md:px-8 md:pb-8")
    },
    m(e, a) {
      Ct(e, t, a), bt(t, n), bt(t, r), bt(t, o), l && l.m(o, null), i = !0
    },
    p(e, t) {
      l && l.p && (!i || 128 & t) && F(l, a, e, e[7], i ? N(a, e[7], t, Ko) : j(e[7]), Yo)
    },
    i(e) {
      i || (qn(l, e), i = !0)
    },
    o(e) {
      zn(l, e), i = !1
    },
    d(e) {
      e && At(t), l && l.d(e)
    }
  }
}

function li(e) {
  let t, n, r, o, i, a, l, s, c, u = e[0] && ni(e),
    d = e[6].illustration && ri(e),
    f = e[6].title && oi(e),
    p = e[6].description && e[4] && ii(e);
  const h = e[8].default,
    m = z(h, e, e[7], null);
  let g = e[6].actions && ai(e);
  return {
    c() {
      u && u.c(), t = Tt(), d && d.c(), n = Tt(), r = Mt("div"), o = Mt("div"), f && f.c(), i = Tt(), p && p.c(), a = Tt(), m && m.c(), l = Tt(), g && g.c(), s = Et(), Dt(o, "class", "flex flex-col gap-2"), Dt(r, "class", "relative flex min-h-28 shrink-[3] flex-col gap-6 overflow-y-auto overflow-x-hidden p-6 text-center md:p-8")
    },
    m(e, h) {
      u && u.m(e, h), Ct(e, t, h), d && d.m(e, h), Ct(e, n, h), Ct(e, r, h), bt(r, o), f && f.m(o, null), bt(o, i), p && p.m(o, null), bt(o, a), m && m.m(o, null), Ct(e, l, h), g && g.m(e, h), Ct(e, s, h), c = !0
    },
    p(e, [r]) {
      e[0] ? u ? (u.p(e, r), 1 & r && qn(u, 1)) : (u = ni(e), u.c(), qn(u, 1), u.m(t.parentNode, t)) : u && (In(), zn(u, 1, 1, () => {
        u = null
      }), Ln()), e[6].illustration ? d ? (d.p(e, r), 64 & r && qn(d, 1)) : (d = ri(e), d.c(), qn(d, 1), d.m(n.parentNode, n)) : d && (In(), zn(d, 1, 1, () => {
        d = null
      }), Ln()), e[6].title ? f ? (f.p(e, r), 64 & r && qn(f, 1)) : (f = oi(e), f.c(), qn(f, 1), f.m(o, i)) : f && (In(), zn(f, 1, 1, () => {
        f = null
      }), Ln()), e[6].description && e[4] ? p ? (p.p(e, r), 80 & r && qn(p, 1)) : (p = ii(e), p.c(), qn(p, 1), p.m(o, a)) : p && (In(), zn(p, 1, 1, () => {
        p = null
      }), Ln()), m && m.p && (!c || 128 & r) && F(m, h, e, e[7], c ? N(h, e[7], r, null) : j(e[7]), null), e[6].actions ? g ? (g.p(e, r), 64 & r && qn(g, 1)) : (g = ai(e), g.c(), qn(g, 1), g.m(s.parentNode, s)) : g && (In(), zn(g, 1, 1, () => {
        g = null
      }), Ln())
    },
    i(e) {
      c || (qn(u), qn(d), qn(f), qn(p), qn(m, e), qn(g), c = !0)
    },
    o(e) {
      zn(u), zn(d), zn(f), zn(p), zn(m, e), zn(g), c = !1
    },
    d(e) {
      e && (At(t), At(n), At(r), At(l), At(s)), u && u.d(e), d && d.d(e), f && f.d(), p && p.d(), m && m.d(e), g && g.d(e)
    }
  }
}

function si(e, t, n) {
  let o, i, a = r,
    l = () => (a(), a = U(h, e => n(3, o = e)), h),
    s = r,
    c = () => (s(), s = U(m, e => n(4, i = e)), m);
  e.$$.on_destroy.push(() => a()), e.$$.on_destroy.push(() => s());
  let {
    $$slots: u = {},
    $$scope: d
  } = t;
  const f = R(u);
  let {
    showCloseButton: p = !1
  } = t, {
    title: h
  } = t;
  l();
  let {
    description: m
  } = t;
  c();
  const g = pn();
  return e.$$set = e => {
    "showCloseButton" in e && n(0, p = e.showCloseButton), "title" in e && l(n(1, h = e.title)), "description" in e && c(n(2, m = e.description)), "$$scope" in e && n(7, d = e.$$scope)
  }, e.$$.update = () => {
    4 & e.$$.dirty && v(!f.description || m, "If description slot is provided, description prop must be provided")
  }, [p, h, m, o, i, g, f, d, u, () => g("close")]
}
class ci extends Zn {
  constructor(e) {
    super(), Jn(this, e, si, li, h, {
      showCloseButton: 0,
      title: 1,
      description: 2
    })
  }
}

function ui(e) {
  let t;
  return {
    c() {
      t = Mt("a"), t.innerHTML = '<img src="/assets/appStoreBadge-DwXBW7-J.svg" alt="Download on the App Store" class="w-screen max-w-48"/>', Dt(t, "href", "https://apps.apple.com/us/app/2048/id868076805"), Dt(t, "target", "_blank"), Dt(t, "rel", "noopener noreferrer"), Dt(t, "class", "flex flex-col")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function di(e) {
  let t;
  return {
    c() {
      t = Mt("a"), t.innerHTML = '<img src="/assets/playStoreBadge-hXktDahJ.svg" alt="Get it on Google Play" class="w-screen max-w-48"/>', Dt(t, "href", "https://play.google.com/store/apps/details?id=com.gabrielecirulli.app2048"), Dt(t, "target", "_blank"), Dt(t, "rel", "noopener noreferrer"), Dt(t, "class", "flex flex-col")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function fi(e) {
  let t, n, o;
  return {
    c() {
      t = Mt("button"), t.textContent = "Show more download options", Dt(t, "class", "mt-4 underline")
    },
    m(r, i) {
      Ct(r, t, i), n || (o = Gt(t, "click", e[3]), n = !0)
    },
    p: r,
    d(e) {
      e && At(t), n = !1, o()
    }
  }
}

function pi(e) {
  let t, n, r, o, i, a, l = (null === e[1] || "iOS" === e[1]) && ui(),
    s = (null === e[1] || "Android" === e[1]) && di(),
    c = null !== e[1] && fi(e);
  return {
    c() {
      t = Mt("p"), t.textContent = "The official 2048 app is published by Solebon LLC. and available for iOS and Android.", n = Tt(), r = Mt("div"), l && l.c(), o = Tt(), s && s.c(), i = Tt(), c && c.c(), a = Et(), Dt(r, "class", "mt-4 flex flex-col items-center gap-2")
    },
    m(e, u) {
      Ct(e, t, u), Ct(e, n, u), Ct(e, r, u), l && l.m(r, null), bt(r, o), s && s.m(r, null), Ct(e, i, u), c && c.m(e, u), Ct(e, a, u)
    },
    p(e, t) {
      null === e[1] || "iOS" === e[1] ? l || (l = ui(), l.c(), l.m(r, o)) : l && (l.d(1), l = null), null === e[1] || "Android" === e[1] ? s || (s = di(), s.c(), s.m(r, null)) : s && (s.d(1), s = null), null !== e[1] ? c ? c.p(e, t) : (c = fi(e), c.c(), c.m(a.parentNode, a)) : c && (c.d(1), c = null)
    },
    d(e) {
      e && (At(t), At(n), At(r), At(i), At(a)), l && l.d(), s && s.d(), c && c.d(e)
    }
  }
}

function hi(e) {
  let t;
  return {
    c() {
      t = Pt("Get the App")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function mi(e) {
  let t, n;
  return t = new ci({
    props: {
      title: e[0],
      showCloseButton: !0,
      $$slots: {
        title: [hi],
        default: [pi]
      },
      $$scope: {
        ctx: e
      }
    }
  }), t.$on("close", e[4]), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, [n]) {
      const r = {};
      1 & n && (r.title = e[0]), 34 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function gi(e, t, n) {
  let r;
  E(e, Xs, e => n(2, r = e));
  let o = void 0 === navigator.platform ? null : navigator.platform.match(/(iPhone|iPod|iPad)/i) ? "iOS" : /(android)/i.test(navigator.userAgent) ? "Android" : null,
    {
      title: i
    } = t;
  return e.$$set = e => {
    "title" in e && n(0, i = e.title)
  }, [i, o, r, () => n(1, o = null), () => W(Xs, r = null, r)]
}
var vi = class extends Error {
    constructor(e, t, n) {
      super(`Possible EventEmitter memory leak detected. ${n} ${t.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`), this.emitter = e, this.type = t, this.count = n, this.name = "MaxListenersExceededWarning"
    }
  },
  $i = class {
    static listenerCount(e, t) {
      return e.listenerCount(t)
    }
    constructor() {
      this.events = new Map, this.maxListeners = $i.defaultMaxListeners, this.hasWarnedAboutPotentialMemoryLeak = !1
    }
    _emitInternalEvent(e, t, n) {
      this.emit(e, t, n)
    }
    _getListeners(e) {
      return Array.prototype.concat.apply([], this.events.get(e)) || []
    }
    _removeListener(e, t) {
      const n = e.indexOf(t);
      return n > -1 && e.splice(n, 1), []
    }
    _wrapOnceListener(e, t) {
      const n = (...r) => (this.removeListener(e, n), t.apply(this, r));
      return Object.defineProperty(n, "name", {
        value: t.name
      }), n
    }
    setMaxListeners(e) {
      return this.maxListeners = e, this
    }
    getMaxListeners() {
      return this.maxListeners
    }
    eventNames() {
      return Array.from(this.events.keys())
    }
    emit(e, ...t) {
      const n = this._getListeners(e);
      return n.forEach(e => {
        e.apply(this, t)
      }), n.length > 0
    }
    addListener(e, t) {
      this._emitInternalEvent("newListener", e, t);
      const n = this._getListeners(e).concat(t);
      if (this.events.set(e, n), this.maxListeners > 0 && this.listenerCount(e) > this.maxListeners && !this.hasWarnedAboutPotentialMemoryLeak) {
        this.hasWarnedAboutPotentialMemoryLeak = !0;
        const t = new vi(this, e, this.listenerCount(e));
        console.warn(t)
      }
      return this
    }
    on(e, t) {
      return this.addListener(e, t)
    }
    once(e, t) {
      return this.addListener(e, this._wrapOnceListener(e, t))
    }
    prependListener(e, t) {
      const n = this._getListeners(e);
      if (n.length > 0) {
        const r = [t].concat(n);
        this.events.set(e, r)
      } else this.events.set(e, n.concat(t));
      return this
    }
    prependOnceListener(e, t) {
      return this.prependListener(e, this._wrapOnceListener(e, t))
    }
    removeListener(e, t) {
      const n = this._getListeners(e);
      return n.length > 0 && (this._removeListener(n, t), this.events.set(e, n), this._emitInternalEvent("removeListener", e, t)), this
    }
    off(e, t) {
      return this.removeListener(e, t)
    }
    removeAllListeners(e) {
      return e ? this.events.delete(e) : this.events.clear(), this
    }
    listeners(e) {
      return Array.from(this._getListeners(e))
    }
    listenerCount(e) {
      return this._getListeners(e).length
    }
    rawListeners(e) {
      return this.listeners(e)
    }
  },
  wi = $i;
wi.defaultMaxListeners = 10;
const yi = {
    ArrowUp: H.Up,
    ArrowDown: H.Down,
    ArrowLeft: H.Left,
    ArrowRight: H.Right,
    KeyW: H.Up,
    KeyA: H.Left,
    KeyS: H.Down,
    KeyD: H.Right,
    KeyH: H.Left,
    KeyJ: H.Down,
    KeyK: H.Up,
    KeyL: H.Right
  },
  xi = new class extends wi {
    constructor() {
      super(), this.init()
    }
    init() {
      this.initKeyboardListeners()
    }
    initKeyboardListeners() {
      window.addEventListener("keydown", e => {
        var t, n;
        if (!("INPUT" === (null == (t = document.activeElement) ? void 0 : t.tagName) || "TEXTAREA" === (null == (n = document.activeElement) ? void 0 : n.tagName) || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) && e.code in yi) {
          e.preventDefault(), e.stopImmediatePropagation();
          const t = yi[e.code];
          this.emit("move", t)
        }
      }, !0);
      let e = !1,
        t = null,
        n = null;
      window.addEventListener("touchstart", n => {
        n.touches.length > 1 || !n.touches[0] || (n.stopImmediatePropagation(), e = !1, t = {
          x: n.touches[0].clientX,
          y: n.touches[0].clientY
        })
      }), window.addEventListener("touchmove", r => {
        if (r.touches.length > 1 || !r.changedTouches[0]) return;
        if (r.stopImmediatePropagation(), e || !t) return;
        n = {
          x: r.changedTouches[0].clientX,
          y: r.changedTouches[0].clientY
        };
        const o = n.x - t.x,
          i = Math.abs(o),
          a = n.y - t.y,
          l = Math.abs(a);
        if (Math.max(i, l) > 10) {
          e = !0;
          const t = i > l ? o > 0 ? H.Right : H.Left : a > 0 ? H.Down : H.Up;
          this.emit("move", t)
        }
      }), window.addEventListener("touchend", r => {
        r.stopImmediatePropagation(), e = !1, t = null, n = null
      })
    }
  };

function bi(e) {
  var t, n;
  const r = typeof e;
  return "string" === r ? `"${e}"` : "number" === r || "bigint" === r || "boolean" === r ? `${e}` : "object" === r || "function" === r ? (e && (null == (n = null == (t = Object.getPrototypeOf(e)) ? void 0 : t.constructor) ? void 0 : n.name)) ?? "null" : r
}

function _i(e, t, n, r, o) {
  const i = o && "input" in o ? o.input : n.value,
    a = (null == o ? void 0 : o.expected) ?? e.expects ?? null,
    l = (null == o ? void 0 : o.received) ?? bi(i),
    s = {
      kind: e.kind,
      type: e.type,
      input: i,
      expected: a,
      received: l,
      message: `Invalid ${t}: ${a?`Expected ${a} but r`:"R"}eceived ${l}`,
      requirement: e.requirement,
      path: null == o ? void 0 : o.path,
      issues: null == o ? void 0 : o.issues,
      lang: r.lang,
      abortEarly: r.abortEarly,
      abortPipeEarly: r.abortPipeEarly
    },
    c = "schema" === e.kind,
    u = (null == o ? void 0 : o.message) ?? e.message ?? (e.reference, d = s.lang, null == void 0 ? void 0 : undefined.get(d)) ?? (c ? void s.lang : null) ?? r.message ?? void s.lang;
  var d;
  u && (s.message = "function" == typeof u ? u(s) : u), c && (n.typed = !1), n.issues ? n.issues.push(s) : n.issues = [s]
}
var ki = class extends Error {
  constructor(e) {
    super(e[0].message), t(this, "issues"), this.name = "ValiError", this.issues = e
  }
};

function Ci(e, t) {
  return {
    kind: "validation",
    type: "length",
    reference: Ci,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    _run(e, t) {
      return e.typed && e.value.length !== this.requirement && _i(this, "length", e, t, {
        received: `${e.value.length}`
      }), e
    }
  }
}

function Si(e, t) {
  return {
    kind: "validation",
    type: "max_value",
    reference: Si,
    async: !1,
    expects: `<=${e instanceof Date?e.toJSON():bi(e)}`,
    requirement: e,
    message: t,
    _run(e, t) {
      return e.typed && e.value > this.requirement && _i(this, "value", e, t, {
        received: e.value instanceof Date ? e.value.toJSON() : bi(e.value)
      }), e
    }
  }
}

function Ai(e, t) {
  return {
    kind: "validation",
    type: "min_value",
    reference: Ai,
    async: !1,
    expects: `>=${e instanceof Date?e.toJSON():bi(e)}`,
    requirement: e,
    message: t,
    _run(e, t) {
      return e.typed && e.value < this.requirement && _i(this, "value", e, t, {
        received: e.value instanceof Date ? e.value.toJSON() : bi(e.value)
      }), e
    }
  }
}

function Bi(e, t) {
  return {
    kind: "schema",
    type: "array",
    reference: Bi,
    expects: "Array",
    async: !1,
    item: e,
    message: t,
    _run(e, t) {
      var n;
      const r = e.value;
      if (Array.isArray(r)) {
        e.typed = !0, e.value = [];
        for (let o = 0; o < r.length; o++) {
          const i = r[o],
            a = this.item._run({
              typed: !1,
              value: i
            }, t);
          if (a.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: r,
              key: o,
              value: i
            };
            for (const t of a.issues) t.path ? t.path.unshift(l) : t.path = [l], null == (n = e.issues) || n.push(t);
            if (e.issues || (e.issues = a.issues), t.abortEarly) {
              e.typed = !1;
              break
            }
          }
          a.typed || (e.typed = !1), e.value.push(a.value)
        }
      } else _i(this, "type", e, t);
      return e
    }
  }
}

function Mi(e) {
  return {
    kind: "schema",
    type: "boolean",
    reference: Mi,
    expects: "boolean",
    async: !1,
    message: e,
    _run(e, t) {
      return "boolean" == typeof e.value ? e.typed = !0 : _i(this, "type", e, t), e
    }
  }
}

function Oi(e, t) {
  return {
    kind: "schema",
    type: "custom",
    reference: Oi,
    expects: "unknown",
    async: !1,
    check: e,
    message: t,
    _run(e, t) {
      return this.check(e.value) ? e.typed = !0 : _i(this, "type", e, t), e
    }
  }
}

function Pi(e, t) {
  return {
    kind: "schema",
    type: "literal",
    reference: Pi,
    expects: bi(e),
    async: !1,
    literal: e,
    message: t,
    _run(e, t) {
      return e.value === this.literal ? e.typed = !0 : _i(this, "type", e, t), e
    }
  }
}

function Ti(e, ...t) {
  const n = {
    kind: "schema",
    type: "nullable",
    reference: Ti,
    expects: `(${e.expects} | null)`,
    async: !1,
    wrapped: e,
    _run(e, t) {
      return null === e.value && ("default" in this && (e.value = function(e, t, n) {
        return "function" == typeof e.default ? e.default(t, n) : e.default
      }(this, e, t)), null === e.value) ? (e.typed = !0, e) : this.wrapped._run(e, t)
    }
  };
  return 0 in t && (n.default = t[0]), n
}

function Ei(e) {
  return {
    kind: "schema",
    type: "number",
    reference: Ei,
    expects: "number",
    async: !1,
    message: e,
    _run(e, t) {
      return "number" != typeof e.value || isNaN(e.value) ? _i(this, "type", e, t) : e.typed = !0, e
    }
  }
}

function Gi(e, t) {
  return {
    kind: "schema",
    type: "strict_object",
    reference: Gi,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    _run(e, t) {
      var n;
      const r = e.value;
      if (r && "object" == typeof r) {
        e.typed = !0, e.value = {};
        for (const o in this.entries) {
          const i = r[o],
            a = this.entries[o]._run({
              typed: !1,
              value: i
            }, t);
          if (a.issues) {
            const l = {
              type: "object",
              origin: "value",
              input: r,
              key: o,
              value: i
            };
            for (const t of a.issues) t.path ? t.path.unshift(l) : t.path = [l], null == (n = e.issues) || n.push(t);
            if (e.issues || (e.issues = a.issues), t.abortEarly) {
              e.typed = !1;
              break
            }
          }
          a.typed || (e.typed = !1), (void 0 !== a.value || o in r) && (e.value[o] = a.value)
        }
        if (!e.issues || !t.abortEarly)
          for (const n in r)
            if (!(n in this.entries)) {
              const o = r[n];
              _i(this, "type", e, t, {
                input: o,
                expected: "never",
                path: [{
                  type: "object",
                  origin: "value",
                  input: r,
                  key: n,
                  value: o
                }]
              });
              break
            }
      } else _i(this, "type", e, t);
      return e
    }
  }
}

function Di(e, t, n) {
  const r = e._run({
    typed: !1,
    value: t
  }, function(e) {
    return {
      lang: (null == e ? void 0 : e.lang) ?? void 0,
      message: null == e ? void 0 : e.message,
      abortEarly: (null == e ? void 0 : e.abortEarly) ?? void 0,
      abortPipeEarly: (null == e ? void 0 : e.abortPipeEarly) ?? void 0
    }
  }(n));
  if (r.issues) throw new ki(r.issues);
  return r.value
}

function Ii(...e) {
  return {
    ...e[0],
    pipe: e,
    _run(t, n) {
      for (const r of e)
        if ("metadata" !== r.kind) {
          if (t.issues && ("schema" === r.kind || "transformation" === r.kind)) {
            t.typed = !1;
            break
          }
          t.issues && (n.abortEarly || n.abortPipeEarly) || (t = r._run(t, n))
        } return t
    }
  }
}
const Li = M("analytics"),
  qi = (e, t) => {
    if (Li(`Event: ${e}`, t), "function" == typeof gtag) return gtag("event", e, t);
    K(new Error("gtag is not a function - found " + typeof gtag))
  },
  zi = {
    rendererInitialized: (e, t) => qi("renderer_initialized", {
      use_worker: e,
      first_initialization: t
    }),
    timeToFirstTile: (e, t) => qi("time_to_first_tile", {
      time_to_first_tile: e,
      use_worker: t
    }),
    tutorialLoaded: (e, t) => qi("tutorial_loaded", {
      tutorial_version: t,
      gameplay_id: e.id
    }),
    tutorialStepReached: (e, t, n) => qi("tutorial_step_reached", {
      tutorial_version: n,
      gameplay_id: e.id,
      tutorial_step: t
    }),
    tutorialCompleted: (e, t) => qi("tutorial_completed", {
      tutorial_version: t,
      gameplay_id: e.id
    }),
    tutorialDestroyed: (e, t, n) => qi("tutorial_destroyed", {
      tutorial_version: n,
      gameplay_id: e.id,
      tutorial_step: t
    }),
    gameStarted: (e, t) => qi("game_started", {
      mode: e,
      gameplay_id: t.id,
      ...Fi(t)
    }),
    gameResumed: (e, t) => qi("game_resumed", {
      mode: e,
      gameplay_id: t.id,
      ...Fi(t)
    }),
    gameOver: (e, t) => qi("game_over", {
      mode: e,
      gameplay_id: t.id,
      ...Fi(t)
    }),
    undoAtGameOver: (e, t) => qi("undo_at_game_over", {
      mode: e,
      gameplay_id: t.id,
      ...Fi(t)
    }),
    restartAtGameOver: (e, t) => qi("restart_at_game_over", {
      mode: e,
      gameplay_id: t.id,
      ...Fi(t)
    }),
    restartAtGameWon: (e, t) => qi("restart_at_game_won", {
      mode: e,
      gameplay_id: t.id,
      ...Fi(t)
    }),
    restart: V(100, (e, t, n) => qi("restart", {
      mode: e,
      gameplay_id: t.id,
      previous_gameplay_state: n,
      ...Fi(t)
    }), {
      atBegin: !1
    }),
    gameWon: (e, t) => qi("game_won", {
      mode: e,
      gameplay_id: t.id,
      ...Fi(t)
    }),
    continueAfterWin: (e, t) => qi("continue_after_win", {
      mode: e,
      gameplay_id: t.id,
      ...Fi(t)
    }),
    powerupActivated: (e, t, n) => qi("powerup_activated", {
      mode: e,
      gameplay_id: t.id,
      powerup_activated: n,
      ...Fi(t)
    }),
    powerupUsed: (e, t, n) => qi("powerup_used", {
      mode: e,
      gameplay_id: t.id,
      powerup_used: n,
      ...Fi(t)
    }),
    classicGameImportSucceeded: () => qi("classic_game_import_succeeded"),
    classicGameImportFailed: () => qi("classic_game_import_failed"),
    classicBestScoreImportSucceeded: () => qi("classic_best_score_import_succeeded"),
    classicBestScoreImportFailed: () => qi("classic_best_score_import_failed"),
    welcomeStatusMessageShown: (e, t) => {
      qi("welcome_status_message_shown", {
        type: e,
        accepted: t
      })
    },
    gameWonClassicCTAClicked: () => {
      qi("game_won_classic_cta_clicked")
    },
    plusAccessGranted: () => {
      qi("plus_access_granted")
    },
    allRenderersFailed: (e, t, n, r) => {
      qi("all_renderers_failed", {
        worker_supported: e,
        renderer_initialized_once: t,
        worker_startup_failed: n,
        use_worker: r
      })
    },
    troubleshootingClicked: e => {
      qi("troubleshooting_clicked", {
        from: e
      })
    },
    partner1ExpiredDialogShown: () => {
      qi("partner1_expired_dialog_shown")
    },
    partner1ExpiredDialogClosed: () => {
      qi("partner1_expired_dialog_closed")
    },
    partner1ExpiryCalloutClicked: () => {
      qi("partner1_expiry_callout_clicked")
    },
    partner1SurveyLinkClicked: () => {
      qi("partner1_survey_link_clicked")
    }
  };

function Fi(e) {
  const t = e.powerups,
    n = {};
  for (const r in t) {
    const e = t[r];
    e && (n[`powerup_uses_remaining_${r}`] = e.usesRemaining, n[`powerup_uses_count_${r}`] = e.usesCount)
  }
  return n
}
const ji = Ii(Ei("Best score must be a number"), Ai(0, "Best score must be positive")),
  Ni = M("gameplay/import/bestScore"),
  Ri = Y(Q, 0),
  Ui = Y(X, !1);
O([J, Ui, Ri], ([e, t, n]) => ({
  $mode: e,
  $classicBestScoreImportedSuccessfully: t,
  $lastImporterVersionUsed: n
})).subscribe(({
  $mode: e,
  $classicBestScoreImportedSuccessfully: t,
  $lastImporterVersionUsed: n
}) => {
  if (t) return void Ni("already imported successfully");
  if (1 === n) return void Ni("last import unsuccessful, but importer version has not changed");
  if (e !== Z.Standard) return void Ni("not in standard mode, cannot import");
  const r = localStorage.getItem(ne);
  r ? function(e) {
    Ni("attempting to import"), Ri.set(1);
    try {
      const n = (t = ee(e), Di(ji, t));
      ca.set(n), Ui.set(!0), zi.classicBestScoreImportSucceeded(), Ni("imported successfully")
    } catch (n) {
      Ni("failed to import", n, e), te(`Failed to import classic best score with error: ${n} - state: ${e}`), Ui.set(!1), zi.classicBestScoreImportFailed()
    }
    var t
  }(r) : Ni("no stored state found")
});
const Wi = () => Ii(Ei("coordinate must be a number"), Ai(0, "coordinate must be positive"), Si(3, "coordinate must be less than 4")),
  Hi = () => Gi({
    position: Gi({
      x: Wi(),
      y: Wi()
    }, "Position must be an object with x and y"),
    value: Ii(Ei("Tile value must be a number"), Oi(e => "number" == typeof e && (e => e >= 2 && !(e & e - 1))(e), "Tile value must be power of 2"))
  }, "Tile must be an object with position and value"),
  Vi = Ii(Gi({
    grid: Gi({
      size: Pi(4, "Grid must be 4x4"),
      cells: Ii(Bi(Ii(Bi(Ti(Hi()), "Row must be an array of cells"), Ci(4, "Row must have 4 cells")), "Grid must be an array of rows"), Ci(4, "Grid must have 4 rows"))
    }, "Grid must be an object with size and cells"),
    score: Ii(Ei("Score must be a number"), Ai(0, "Score must be positive")),
    over: Pi(!1, "Over must be false"),
    won: Mi("Won must be a boolean"),
    keepPlaying: Mi("Keep playing must be a boolean")
  }, "Game state must be an object with grid, score, over, won, and keepPlaying"), Oi(e => {
    const {
      won: t,
      keepPlaying: n
    } = e;
    return !(n && !t)
  }, "keepPlaying cannot be true if the game is not won")),
  Ki = M("gameplay/import/gameState"),
  Yi = Y(re, 0),
  Qi = Y(oe, !1);
O([J, Qi, Yi], ([e, t, n]) => ({
  $mode: e,
  $classicGameImportedSuccessfully: t,
  $lastImporterVersionUsed: n
})).subscribe(({
  $mode: e,
  $classicGameImportedSuccessfully: t,
  $lastImporterVersionUsed: n
}) => {
  if (t) return void Ki("already imported successfully");
  if (1 === n) return void Ki("last import unsuccessful, but importer version has not changed");
  if (e !== Z.Standard) return void Ki("not in standard mode, cannot import");
  const r = localStorage.getItem(le);
  r ? function(e, t) {
    Ki("attempting to import"), Yi.set(1);
    try {
      const {
        board: n,
        state: r,
        score: o
      } = function(e) {
        if (!e) throw new Error("No state passed");
        const t = function(e) {
            return Di(Vi, e)
          }(ee(e)),
          n = function(e) {
            var t;
            const n = ie(Xi, Xi);
            for (let r = 0; r < Xi; r++)
              for (let o = 0; o < Xi; o++) {
                const i = null == (t = e.grid.cells[r]) ? void 0 : t[o];
                v(void 0 !== i, `tile is undefined at ${r}, ${o}`), i && ae(n, {
                  x: r,
                  y: o
                }, b(i.value, {
                  x: r,
                  y: o
                }))
              }
            return n
          }(t),
          {
            score: r,
            won: o,
            keepPlaying: i
          } = t;
        return {
          board: n,
          state: 0 === r ? g.Fresh : o && !i ? g.GameWon : g.Playing,
          score: r
        }
      }(e);
      sa._import(t, n, r, o), Qi.set(!0), zi.classicGameImportSucceeded(), Ki("imported successfully")
    } catch (n) {
      Ki("failed to import", n, e), te(`Failed to import classic game state with error: ${n} - state: ${e}`), Qi.set(!1), zi.classicGameImportFailed()
    }
  }(r, e) : Ki("no stored state found")
});
const Xi = 4,
  Ji = M("stores/gameplay"),
  Zi = Ji.extend("verbose"),
  ea = M("stores/gameplay/bestScore"),
  ta = he(e => function(e, t) {
    const {
      state: n,
      id: r,
      score: o,
      moveCount: i,
      board: a,
      changes: l,
      powerups: s,
      highestReachedTile: c
    } = e;
    if (!t) {
      const {
        seedrandomState: n,
        seed: r
      } = e._rng, o = $("", {
        state: n
      });
      t = {
        seed: r,
        srng: o,
        rng: w.clone(o)
      }
    }
    const u = {
      board: a,
      id: r,
      moveCount: i,
      changes: l,
      score: o,
      powerups: s,
      highestReachedTile: c,
      _rng: t,
      lastAction: null
    };
    switch (v(n !== g.Selecting, "A selecting game should not have been serialized"), n) {
      case g.Fresh:
        return {
          state: n, ...u
        };
      case g.Playing:
      case g.GameOver:
      case g.GameWon:
        return {
          ...u, state: n, previousGameplay: null
        };
      default:
        y()
    }
  }(ye(e)), e => we(function(e) {
    const t = e.state === g.Selecting ? e.previousGameplay : e;
    return v(t, `Gameplay must be serializable, found ${t} instead`), lr(t)
  }(e))),
  na = f(!1),
  ra = f(null);
ra.subscribe(e => {
  Ji("action filter", e)
});
const oa = f(null),
  ia = f(null),
  aa = f(null),
  la = f(null),
  sa = function() {
    let e, t, n, r, o, i, a, l;
    J.subscribe(t => e = t), na.subscribe(e => t = e), ra.subscribe(e => n = e), oa.subscribe(e => {
      r = e, e ? (Zi("forcedBoardSpec changed, setting new gameplay"), p()) : Zi("forcedBoardSpec changed, but not setting new gameplay (null)")
    }), ia.subscribe(e => {
      o = e, e ? (Zi("forcedSeed changed, setting new gameplay"), p()) : Zi("forcedSeed changed, but not setting new gameplay (null)")
    }), ce.subscribe(e => {
      i = e, Zi("debugUseCustomSeed changed, setting new gameplay"), p()
    }), ue.subscribe(e => {
      a = e, Zi("debugCustomSeed changed, setting new gameplay"), p()
    }), de.subscribe(e => {
      l = e, Zi("debugSyntheticGameScenarioName changed, setting new gameplay"), p()
    });
    const s = Object.values(Z),
      c = s.map(e => function(e) {
        return Y(`${me}-${e}`, void 0, {
          serializer: ta
        })
      }(e));
    let u;

    function d(t) {
      try {
        if (t === u) return;
        const n = function() {
          if (void 0 === e) return;
          const t = c[s.indexOf(e)];
          return v(void 0 !== t, `No store found for mode ${e}.`), t
        }();
        if (!n) return void Ji("store not found (mode: %o), ignoring update", e);
        Ji(`updating (state: ${t.state}); changes: ${t.changes.length})`, t), n.set(t)
      } catch (n) {
        if (n instanceof ReferenceError) return;
        throw n
      }
    }

    function f() {
      try {
        const t = i ? a : o || void 0,
          n = l !== ge.None ? ve[l] : void 0,
          s = (null == n ? void 0 : n.forcePowerups) ?? (e ? $e[e] : void 0),
          c = (null == n ? void 0 : n.board) ?? r;
        let u = c ? function(e, t = _, n) {
          const r = function(e) {
              return function(e) {
                const t = e.trim().split("\n");
                let n = null;
                return t.map((e, t) => {
                  const r = e.trim().replace(/\s+/g, " ").split(" ");
                  return n ? x(r.length === n, `Invalid row: [${r}], expected length ${n} (row ${t})`) : n = r.length, r.map((e, n) => {
                    if ("-" === e) return null;
                    const o = e.match(sr);
                    if (null !== o && o.groups && o.groups.tile) {
                      const e = parseInt(o.groups.tile, 10),
                        r = {
                          x: n,
                          y: t
                        },
                        {
                          a: i,
                          b: a,
                          x: l,
                          y: s
                        } = o.groups,
                        c = {};
                      return i && a && (c.merges = [b(parseInt(i, 10), r), b(parseInt(a, 10), r)]), l && s && (c.previousPosition = {
                        x: parseInt(l, 10),
                        y: parseInt(s, 10)
                      }), b(e, r, c)
                    }
                    throw new Error(`Invalid column: "${e}" in [${r}] (row ${t} col ${n})`)
                  })
                })
              }(e)
            }(e),
            {
              width: o,
              height: i
            } = k(r),
            a = C(o, i, t, n),
            l = S(r, e => e ? {
              type: "tileAdded",
              tileId: e.id,
              position: e.position
            } : null).filter(e => !!e);
          return A({
            ...a,
            board: r,
            changes: l
          })
        }(c, s, t) : C(4, 4, s, t);
        if (null == n ? void 0 : n.forcePowerups)
          for (const e of n.forcePowerups) u = cr(u, e);
        return (null == n ? void 0 : n.score) && (u = {
          ...u,
          score: n.score
        }), (null == n ? void 0 : n.highScore) && ca.set(n.highScore), u
      } catch (t) {
        if (t instanceof ReferenceError) return;
        throw t
      }
    }

    function p() {
      const e = f();
      Zi("setNewGameplay %o", null == e ? void 0 : e.id), e && d(e)
    }

    function h() {
      Ji("reset called, setting new gameplay"), p()
    }

    function m(e) {
      if (Ji("action", e), !t) {
        if (n) {
          if (!n(e)) return void Ji("filter: action ignored");
          Ji("filter: action valid")
        }
        d(pe(u, e))
      }
    }
    return {
      subscribe: O([J, ...c], ([e, ...t]) => {
        let n = e ? t[s.indexOf(e)] : void 0;
        return Zi("selectedModeGameplayStore %o => %o", e, null == n ? void 0 : n.id), void 0 === n && (n = f()), v(void 0 !== n, "Gameplay should not be undefined."), u = n, n
      }).subscribe,
      move: e => {
        m({
          type: "move",
          direction: e
        })
      },
      activatePowerup: e => {
        m({
          type: "activatePowerup",
          powerup: e
        })
      },
      cancelPowerup: e => {
        m({
          type: "cancelPowerup",
          powerup: e
        })
      },
      select(e) {
        m({
          type: "select",
          target: e
        })
      },
      continueAfterWin() {
        d(pe(u, {
          type: "continueAfterWin"
        }))
      },
      reset: h,
      resetWithConfirm() {
        if (u.state === g.GameOver) return h();
        Xs.set("confirmReset")
      },
      sanitize() {
        Ji("sanitizing"), d(fe(u))
      },
      _action: m,
      _import(e, t, n, r) {
        const o = C(4, 4, $e[e]);
        let i;
        switch (n) {
          case g.Fresh:
            i = {
              ...o,
              state: g.Fresh,
              board: t,
              score: r
            };
            break;
          case g.Playing:
          case g.GameWon:
            i = {
              ...o,
              state: g.Playing,
              board: t,
              score: r,
              previousGameplay: null
            };
            break;
          default:
            y()
        }
        const a = c[s.indexOf(e)];
        v(void 0 !== a, `No store found for mode ${e}.`), a.set(i)
      }
    }
  }();
xi.on("move", sa.move), xi.on("reset", sa.resetWithConfirm);
const ca = function() {
  const e = Y(se, 0);
  return {
    subscribe: e.subscribe,
    set: function(t) {
      ea("set", t), e.update(e => e >= t ? e : (ea("new best score", t), t))
    },
    update: () => {
      throw new Error("do not use update on bestScore")
    }
  }
}();

function ua(e) {
  let t;
  return {
    c() {
      t = Mt("p"), t.textContent = "Are you sure you want to start a new game? All progress will be lost."
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    d(e) {
      e && At(t)
    }
  }
}

function da(e) {
  let t;
  return {
    c() {
      t = Pt("New Game")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function fa(e) {
  let t;
  return {
    c() {
      t = Pt("Start New Game")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function pa(e) {
  let t;
  return {
    c() {
      t = Pt("Cancel")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function ha(e) {
  let t, n, r, o;
  return t = new Ro({
    props: {
      size: "lg",
      type: "primary",
      $$slots: {
        default: [fa]
      },
      $$scope: {
        ctx: e
      }
    }
  }), t.$on("click", e[2]), r = new Ro({
    props: {
      size: "lg",
      type: "secondary",
      $$slots: {
        default: [pa]
      },
      $$scope: {
        ctx: e
      }
    }
  }), r.$on("click", e[3]), {
    c() {
      Yn(t.$$.fragment), n = Tt(), Yn(r.$$.fragment)
    },
    m(e, i) {
      Qn(t, e, i), Ct(e, n, i), Qn(r, e, i), o = !0
    },
    p(e, n) {
      const o = {};
      16 & n && (o.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(o);
      const i = {};
      16 & n && (i.$$scope = {
        dirty: n,
        ctx: e
      }), r.$set(i)
    },
    i(e) {
      o || (qn(t.$$.fragment, e), qn(r.$$.fragment, e), o = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), zn(r.$$.fragment, e), o = !1
    },
    d(e) {
      e && At(n), Xn(t, e), Xn(r, e)
    }
  }
}

function ma(e) {
  let t, n;
  return t = new ci({
    props: {
      title: e[0],
      $$slots: {
        actions: [ha],
        title: [da],
        default: [ua]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, [n]) {
      const r = {};
      1 & n && (r.title = e[0]), 18 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function ga(e, t, n) {
  let r;
  E(e, Xs, e => n(1, r = e));
  let {
    title: o
  } = t;
  return e.$$set = e => {
    "title" in e && n(0, o = e.title)
  }, [o, r, () => {
    W(Xs, r = null, r), sa.reset()
  }, () => W(Xs, r = null, r)]
}
sa.subscribe(e => ca.set(e.score));
const va = "/",
  $a = "/classic",
  wa = "/plus",
  ya = "/tutorial",
  xa = "/privacy-policy",
  ba = "/cookie-policy",
  _a = "/about",
  ka = "/troubleshooting";

function Ca(e) {
  let t, n, o, i, a, l, s, c, u, d;
  return {
    c() {
      t = Mt("p"), n = Pt("Check the\n    "), o = Mt("a"), o.textContent = "troubleshooting page", i = Pt(" for common issues and solutions."), a = Tt(), l = Mt("p"), l.innerHTML = 'You can <a class="underline" href="mailto:feedback@play2048.co">email me directly</a>\n    if you have questions or want to share more information.', s = Tt(), c = Mt("p"), c.innerHTML = '<span class="font-medium">The old game is still available,</span>\n    and you can play it at\n    <a class="medium underline" href="https://classic.play2048.co">classic.play2048.co.</a>', Dt(o, "class", "underline"), Dt(o, "href", ka), Dt(o, "target", "_blank")
    },
    m(r, f) {
      Ct(r, t, f), bt(t, n), bt(t, o), bt(t, i), Ct(r, a, f), Ct(r, l, f), Ct(r, s, f), Ct(r, c, f), u || (d = Gt(o, "click", e[2]), u = !0)
    },
    p: r,
    d(e) {
      e && (At(t), At(a), At(l), At(s), At(c)), u = !1, d()
    }
  }
}

function Sa(e) {
  let t;
  return {
    c() {
      t = Pt("Thank you!")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Aa(e) {
  let t, n;
  return t = new ci({
    props: {
      title: e[0],
      showCloseButton: !0,
      $$slots: {
        title: [Sa],
        default: [Ca]
      },
      $$scope: {
        ctx: e
      }
    }
  }), t.$on("close", e[3]), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, [n]) {
      const r = {};
      1 & n && (r.title = e[0]), 16 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Ba(e, t, n) {
  let r;
  E(e, Xs, e => n(1, r = e));
  let {
    title: o
  } = t;
  return e.$$set = e => {
    "title" in e && n(0, o = e.title)
  }, [o, r, () => zi.troubleshootingClicked("GiveFeedbackThanks"), () => W(Xs, r = null, r)]
}
const Ma = {},
  Oa = {},
  Pa = {},
  Ta = () => mn(Ma),
  Ea = /^:(.+)/,
  Ga = e => e.replace(/(^\/+|\/+$)/g, "").split("/"),
  Da = e => e.replace(/(^\/+|\/+$)/g, ""),
  Ia = (e, t) => ({
    route: e,
    score: e.default ? 0 : Ga(e.path).reduce((e, t) => (e += 4, "" === t ? e += 1 : Ea.test(t) ? e += 2 : "*" === t[0] ? e -= 5 : e += 3, e), 0),
    index: t
  }),
  La = (e, t) => {
    let n, r;
    const [o] = t.split("?"), i = Ga(o), a = "" === i[0], l = (e => e.map(Ia).sort((e, t) => e.score < t.score ? 1 : e.score > t.score ? -1 : e.index - t.index))(e);
    for (let s = 0, c = l.length; s < c; s++) {
      const e = l[s].route;
      let o = !1;
      if (e.default) {
        r = {
          route: e,
          params: {},
          uri: t
        };
        continue
      }
      const c = Ga(e.path),
        u = {},
        d = Math.max(i.length, c.length);
      let f = 0;
      for (; f < d; f++) {
        const e = c[f],
          t = i[f];
        if (e && "*" === e[0]) {
          u["*" === e ? "*" : e.slice(1)] = i.slice(f).map(decodeURIComponent).join("/");
          break
        }
        if (void 0 === t) {
          o = !0;
          break
        }
        const n = Ea.exec(e);
        if (n && !a) {
          const e = decodeURIComponent(t);
          u[n[1]] = e
        } else if (e !== t) {
          o = !0;
          break
        }
      }
      if (!o) {
        n = {
          route: e,
          params: u,
          uri: "/" + i.slice(0, f).join("/")
        };
        break
      }
    }
    return n || r || null
  },
  qa = (e, t) => e + (t ? `?${t}` : ""),
  za = (e, t) => `${Da("/"===t?e:`${Da(e)}/${Da(t)}`)}/`,
  Fa = () => "undefined" != typeof window && "document" in window && "location" in window,
  ja = e => ({
    active: 4 & e
  }),
  Na = e => ({
    active: !!e[2]
  });

function Ra(e) {
  let t, n, r, o;
  const i = e[17].default,
    a = z(i, e, e[16], Na);
  let l = [{
      href: e[0]
    }, {
      "aria-current": e[2]
    }, e[1], e[6]],
    s = {};
  for (let c = 0; c < l.length; c += 1) s = I(s, l[c]);
  return {
    c() {
      t = Mt("a"), a && a.c(), Lt(t, s)
    },
    m(i, l) {
      Ct(i, t, l), a && a.m(t, null), n = !0, r || (o = Gt(t, "click", e[5]), r = !0)
    },
    p(e, [r]) {
      a && a.p && (!n || 65540 & r) && F(a, i, e, e[16], n ? N(i, e[16], r, ja) : j(e[16]), Na), Lt(t, s = Hn(l, [(!n || 1 & r) && {
        href: e[0]
      }, (!n || 4 & r) && {
        "aria-current": e[2]
      }, 2 & r && e[1], 64 & r && e[6]]))
    },
    i(e) {
      n || (qn(a, e), n = !0)
    },
    o(e) {
      zn(a, e), n = !1
    },
    d(e) {
      e && At(t), a && a.d(e), r = !1, o()
    }
  }
}

function Ua(e, t, n) {
  let r;
  const o = ["to", "replace", "state", "getProps", "preserveScroll"];
  let i, a, l = q(t, o),
    {
      $$slots: s = {},
      $$scope: c
    } = t,
    {
      to: u = "#"
    } = t,
    {
      replace: d = !1
    } = t,
    {
      state: f = {}
    } = t,
    {
      getProps: p = () => ({})
    } = t,
    {
      preserveScroll: h = !1
    } = t;
  const m = mn(Ma);
  E(e, m, e => n(14, i = e));
  const {
    base: g
  } = mn(Oa);
  E(e, g, e => n(15, a = e));
  const {
    navigate: v
  } = mn(Pa), $ = pn();
  let w, y, x, b;
  return e.$$set = e => {
    t = I(I({}, t), L(e)), n(6, l = q(t, o)), "to" in e && n(7, u = e.to), "replace" in e && n(8, d = e.replace), "state" in e && n(9, f = e.state), "getProps" in e && n(10, p = e.getProps), "preserveScroll" in e && n(11, h = e.preserveScroll), "$$scope" in e && n(16, c = e.$$scope)
  }, e.$$.update = () => {
    32896 & e.$$.dirty && n(0, w = ((e, t) => {
      if (e.startsWith("/")) return e;
      const [n, r] = e.split("?"), [o] = t.split("?"), i = Ga(n), a = Ga(o);
      if ("" === i[0]) return qa(o, r);
      if (!i[0].startsWith(".")) {
        const e = a.concat(i).join("/");
        return qa(("/" === o ? "" : "/") + e, r)
      }
      const l = a.concat(i),
        s = [];
      return l.forEach(e => {
        ".." === e ? s.pop() : "." !== e && s.push(e)
      }), qa("/" + s.join("/"), r)
    })(u, a.uri)), 16385 & e.$$.dirty && n(12, y = i.pathname.startsWith(w)), 16385 & e.$$.dirty && n(13, x = w === i.pathname), 8192 & e.$$.dirty && n(2, r = x ? "page" : void 0), n(1, b = p({
      location: i,
      href: w,
      isPartiallyCurrent: y,
      isCurrent: x,
      existingProps: l
    }))
  }, [w, b, r, m, g, e => {
    if ($("click", e), (e => !e.defaultPrevented && 0 === e.button && !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey))(e)) {
      e.preventDefault();
      const t = i.pathname === w || d;
      v(w, {
        state: f,
        replace: t,
        preserveScroll: h
      })
    }
  }, l, u, d, f, p, h, y, x, i, a, c, s]
}
class Wa extends Zn {
  constructor(e) {
    super(), Jn(this, e, Ua, Ra, h, {
      to: 7,
      replace: 8,
      state: 9,
      getProps: 10,
      preserveScroll: 11
    })
  }
}
const Ha = e => ({
    params: 4 & e
  }),
  Va = e => ({
    params: e[2]
  });

function Ka(e) {
  let t, n, r, o;
  const i = [Qa, Ya],
    a = [];

  function l(e, t) {
    return e[0] ? 0 : 1
  }
  return t = l(e), n = a[t] = i[t](e), {
    c() {
      n.c(), r = Et()
    },
    m(e, n) {
      a[t].m(e, n), Ct(e, r, n), o = !0
    },
    p(e, o) {
      let s = t;
      t = l(e), t === s ? a[t].p(e, o) : (In(), zn(a[s], 1, 1, () => {
        a[s] = null
      }), Ln(), n = a[t], n ? n.p(e, o) : (n = a[t] = i[t](e), n.c()), qn(n, 1), n.m(r.parentNode, r))
    },
    i(e) {
      o || (qn(n), o = !0)
    },
    o(e) {
      zn(n), o = !1
    },
    d(e) {
      e && At(r), a[t].d(e)
    }
  }
}

function Ya(e) {
  let t;
  const n = e[8].default,
    r = z(n, e, e[7], Va);
  return {
    c() {
      r && r.c()
    },
    m(e, n) {
      r && r.m(e, n), t = !0
    },
    p(e, o) {
      r && r.p && (!t || 132 & o) && F(r, n, e, e[7], t ? N(n, e[7], o, Ha) : j(e[7]), Va)
    },
    i(e) {
      t || (qn(r, e), t = !0)
    },
    o(e) {
      zn(r, e), t = !1
    },
    d(e) {
      r && r.d(e)
    }
  }
}

function Qa(e) {
  let t, n, r, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Za,
    then: Ja,
    catch: Xa,
    value: 12,
    blocks: [, , , ]
  };
  return Rn(n = e[0], o), {
    c() {
      t = Et(), o.block.c()
    },
    m(e, n) {
      Ct(e, t, n), o.block.m(e, o.anchor = n), o.mount = () => t.parentNode, o.anchor = t, r = !0
    },
    p(t, r) {
      e = t, o.ctx = e, 1 & r && n !== (n = e[0]) && Rn(n, o) || Un(o, e, r)
    },
    i(e) {
      r || (qn(o.block), r = !0)
    },
    o(e) {
      for (let t = 0; t < 3; t += 1) zn(o.blocks[t]);
      r = !1
    },
    d(e) {
      e && At(t), o.block.d(e), o.token = null, o = null
    }
  }
}

function Xa(e) {
  return {
    c: r,
    m: r,
    p: r,
    i: r,
    o: r,
    d: r
  }
}

function Ja(e) {
  var t;
  let n, r, o;
  const i = [e[2], e[3]];
  var a = (null == (t = e[12]) ? void 0 : t.default) || e[12];

  function l(e, t) {
    let n = {};
    for (let r = 0; r < i.length; r += 1) n = I(n, i[r]);
    return void 0 !== t && 12 & t && (n = I(n, Hn(i, [4 & t && Vn(e[2]), 8 & t && Vn(e[3])]))), {
      props: n
    }
  }
  return a && (n = tn(a, l(e))), {
    c() {
      n && Yn(n.$$.fragment), r = Et()
    },
    m(e, t) {
      n && Qn(n, e, t), Ct(e, r, t), o = !0
    },
    p(e, t) {
      var o;
      if (1 & t && a !== (a = (null == (o = e[12]) ? void 0 : o.default) || e[12])) {
        if (n) {
          In();
          const e = n;
          zn(e.$$.fragment, 1, 0, () => {
            Xn(e, 1)
          }), Ln()
        }
        a ? (n = tn(a, l(e, t)), Yn(n.$$.fragment), qn(n.$$.fragment, 1), Qn(n, r.parentNode, r)) : n = null
      } else if (a) {
        const r = 12 & t ? Hn(i, [4 & t && Vn(e[2]), 8 & t && Vn(e[3])]) : {};
        n.$set(r)
      }
    },
    i(e) {
      o || (n && qn(n.$$.fragment, e), o = !0)
    },
    o(e) {
      n && zn(n.$$.fragment, e), o = !1
    },
    d(e) {
      e && At(r), n && Xn(n, e)
    }
  }
}

function Za(e) {
  return {
    c: r,
    m: r,
    p: r,
    i: r,
    o: r,
    d: r
  }
}

function el(e) {
  let t, n, r = e[1] && e[1].route === e[5] && Ka(e);
  return {
    c() {
      r && r.c(), t = Et()
    },
    m(e, o) {
      r && r.m(e, o), Ct(e, t, o), n = !0
    },
    p(e, [n]) {
      e[1] && e[1].route === e[5] ? r ? (r.p(e, n), 2 & n && qn(r, 1)) : (r = Ka(e), r.c(), qn(r, 1), r.m(t.parentNode, t)) : r && (In(), zn(r, 1, 1, () => {
        r = null
      }), Ln())
    },
    i(e) {
      n || (qn(r), n = !0)
    },
    o(e) {
      zn(r), n = !1
    },
    d(e) {
      e && At(t), r && r.d(e)
    }
  }
}

function tl(e, t, n) {
  let r, {
      $$slots: o = {},
      $$scope: i
    } = t,
    {
      path: a = ""
    } = t,
    {
      component: l = null
    } = t,
    s = {},
    c = {};
  const {
    registerRoute: u,
    unregisterRoute: d,
    activeRoute: f
  } = mn(Oa);
  E(e, f, e => n(1, r = e));
  const p = {
    path: a,
    default: "" === a
  };
  return u(p), fn(() => {
    d(p)
  }), e.$$set = e => {
    n(11, t = I(I({}, t), L(e))), "path" in e && n(6, a = e.path), "component" in e && n(0, l = e.component), "$$scope" in e && n(7, i = e.$$scope)
  }, e.$$.update = () => {
    if (r && r.route === p) {
      n(2, s = r.params);
      const {
        component: e,
        path: o,
        ...i
      } = t;
      n(3, c = i), e && (e.toString().startsWith("class ") ? n(0, l = e) : n(0, l = e())), Fa() && !r.preserveScroll && (null == window || window.scrollTo(0, 0))
    }
  }, t = L(t), [l, r, s, c, f, p, a, i, o]
}
class nl extends Zn {
  constructor(e) {
    super(), Jn(this, e, tl, el, h, {
      path: 6,
      component: 0
    })
  }
}
const rl = e => ({
    ...e.location,
    state: e.history.state,
    key: e.history.state && e.history.state.key || "initial"
  }),
  ol = (e => {
    const t = [];
    let n = rl(e);
    return {
      get location() {
        return n
      },
      listen(r) {
        t.push(r);
        const o = () => {
          n = rl(e), r({
            location: n,
            action: "POP"
          })
        };
        return e.addEventListener("popstate", o), () => {
          e.removeEventListener("popstate", o);
          const n = t.indexOf(r);
          t.splice(n, 1)
        }
      },
      navigate(r, {
        state: o,
        replace: i = !1,
        preserveScroll: a = !1,
        blurActiveElement: l = !0
      } = {}) {
        o = {
          ...o,
          key: Date.now() + ""
        };
        try {
          i ? e.history.replaceState(o, "", r) : e.history.pushState(o, "", r)
        } catch (s) {
          e.location[i ? "replace" : "assign"](r)
        }
        n = rl(e), t.forEach(e => e({
          location: n,
          action: "PUSH",
          preserveScroll: a
        })), l && document.activeElement.blur()
      }
    }
  })(Fa() ? window : ((e = "/") => {
    let t = 0;
    const n = [{
        pathname: e,
        search: ""
      }],
      r = [];
    return {
      get location() {
        return n[t]
      },
      addEventListener(e, t) {},
      removeEventListener(e, t) {},
      history: {
        get entries() {
          return n
        },
        get index() {
          return t
        },
        get state() {
          return r[t]
        },
        pushState(e, o, i) {
          const [a, l = ""] = i.split("?");
          t++, n.push({
            pathname: a,
            search: l
          }), r.push(e)
        },
        replaceState(e, o, i) {
          const [a, l = ""] = i.split("?");
          n[t] = {
            pathname: a,
            search: l
          }, r[t] = e
        }
      }
    }
  })()),
  {
    navigate: il
  } = ol,
  al = e => ({
    route: 4 & e,
    location: 2 & e
  }),
  ll = e => ({
    route: e[2] && e[2].uri,
    location: e[1]
  }),
  sl = e => ({
    route: 4 & e,
    location: 2 & e
  }),
  cl = e => ({
    route: e[2] && e[2].uri,
    location: e[1]
  });

function ul(e) {
  let t;
  const n = e[15].default,
    r = z(n, e, e[14], ll);
  return {
    c() {
      r && r.c()
    },
    m(e, n) {
      r && r.m(e, n), t = !0
    },
    p(e, o) {
      r && r.p && (!t || 16390 & o) && F(r, n, e, e[14], t ? N(n, e[14], o, al) : j(e[14]), ll)
    },
    i(e) {
      t || (qn(r, e), t = !0)
    },
    o(e) {
      zn(r, e), t = !1
    },
    d(e) {
      r && r.d(e)
    }
  }
}

function dl(e) {
  let t, n, o = e[1].pathname,
    i = fl(e);
  return {
    c() {
      i.c(), t = Et()
    },
    m(e, r) {
      i.m(e, r), Ct(e, t, r), n = !0
    },
    p(e, n) {
      2 & n && h(o, o = e[1].pathname) ? (In(), zn(i, 1, 1, r), Ln(), i = fl(e), i.c(), qn(i, 1), i.m(t.parentNode, t)) : i.p(e, n)
    },
    i(e) {
      n || (qn(i), n = !0)
    },
    o(e) {
      zn(i), n = !1
    },
    d(e) {
      e && At(t), i.d(e)
    }
  }
}

function fl(e) {
  let t, n, o, s;
  const c = e[15].default,
    u = z(c, e, e[14], cl);
  return {
    c() {
      t = Mt("div"), u && u.c()
    },
    m(e, n) {
      Ct(e, t, n), u && u.m(t, null), s = !0
    },
    p(e, t) {
      u && u.p && (!s || 16390 & t) && F(u, c, e, e[14], s ? N(c, e[14], t, sl) : j(e[14]), cl)
    },
    i(r) {
      s || (qn(u, r), r && Cn(() => {
        s && (o && o.end(1), n = jn(t, e[3], {}), n.start())
      }), s = !0)
    },
    o(c) {
      zn(u, c), n && n.invalidate(), c && (o = function(e, t) {
        const n = {
          direction: "out"
        };
        let o, s = t(e, {}, n),
          c = !0;
        const u = Dn;
        let d;

        function f() {
          const {
            delay: t = 0,
            duration: n = 300,
            easing: a = l,
            tick: f = r,
            css: p
          } = s || Fn;
          p && (o = an(e, 1, 0, n, t, a, p));
          const h = mt() + t,
            m = h + n;
          Cn(() => En(e, !1, "start")), "inert" in e && (d = e.inert, e.inert = !0), wt(t => {
            if (c) {
              if (t >= m) return f(0, 1), En(e, !1, "end"), --u.r || i(u.c), !1;
              if (t >= h) {
                const e = a((t - h) / n);
                f(1 - e, e)
              }
            }
            return c
          })
        }
        return u.r += 1, a(s) ? Tn().then(() => {
          s = s(n), f()
        }) : f(), {
          end(t) {
            t && "inert" in e && (e.inert = d), t && s.tick && s.tick(1, 0), c && (o && ln(e, o), c = !1)
          }
        }
      }(t, e[3])), s = !1
    },
    d(e) {
      e && At(t), u && u.d(e), e && o && o.end()
    }
  }
}

function pl(e) {
  let t, n, r, o;
  const i = [dl, ul],
    a = [];

  function l(e, t) {
    return e[0] ? 0 : 1
  }
  return t = l(e), n = a[t] = i[t](e), {
    c() {
      n.c(), r = Et()
    },
    m(e, n) {
      a[t].m(e, n), Ct(e, r, n), o = !0
    },
    p(e, [o]) {
      let s = t;
      t = l(e), t === s ? a[t].p(e, o) : (In(), zn(a[s], 1, 1, () => {
        a[s] = null
      }), Ln(), n = a[t], n ? n.p(e, o) : (n = a[t] = i[t](e), n.c()), qn(n, 1), n.m(r.parentNode, r))
    },
    i(e) {
      o || (qn(n), o = !0)
    },
    o(e) {
      zn(n), o = !1
    },
    d(e) {
      e && At(r), a[t].d(e)
    }
  }
}

function hl(e, t, n) {
  let r, o, i, a, {
      $$slots: l = {},
      $$scope: s
    } = t,
    {
      basepath: c = "/"
    } = t,
    {
      url: u = null
    } = t,
    {
      viewtransition: d = null
    } = t,
    {
      history: p = ol
    } = t;
  hn(Pa, p);
  const h = mn(Ma),
    m = mn(Oa),
    g = f([]);
  E(e, g, e => n(12, o = e));
  const v = f(null);
  E(e, v, e => n(2, a = e));
  let $ = !1;
  const w = h || f(u ? {
    pathname: u
  } : p.location);
  E(e, w, e => n(1, r = e));
  const y = m ? m.routerBase : f({
    path: c,
    uri: c
  });
  E(e, y, e => n(13, i = e));
  const x = O([y, v], ([e, t]) => {
    if (!t) return e;
    const {
      path: n
    } = e, {
      route: r,
      uri: o
    } = t;
    return {
      path: r.default ? n : r.path.replace(/\*.*$/, ""),
      uri: o
    }
  });
  let b = !1;
  return h || (dn(() => p.listen(e => {
    n(11, b = e.preserveScroll || !1), w.set(e.location)
  })), hn(Ma, w)), hn(Oa, {
    activeRoute: v,
    base: y,
    routerBase: x,
    registerRoute: e => {
      const {
        path: t
      } = i;
      let {
        path: n
      } = e;
      if (e._path = n, e.path = za(t, n), "undefined" == typeof window) {
        if ($) return;
        const t = La([e], r.pathname);
        t && (v.set(t), $ = !0)
      } else g.update(t => [...t, e])
    },
    unregisterRoute: e => {
      g.update(t => t.filter(t => t !== e))
    }
  }), e.$$set = e => {
    "basepath" in e && n(8, c = e.basepath), "url" in e && n(9, u = e.url), "viewtransition" in e && n(0, d = e.viewtransition), "history" in e && n(10, p = e.history), "$$scope" in e && n(14, s = e.$$scope)
  }, e.$$.update = () => {
    if (8192 & e.$$.dirty) {
      const {
        path: e
      } = i;
      g.update(t => t.map(t => Object.assign(t, {
        path: za(e, t._path)
      })))
    }
    if (6146 & e.$$.dirty) {
      const e = La(o, r.pathname);
      v.set(e ? {
        ...e,
        preserveScroll: b
      } : e)
    }
  }, [d, r, a, (e, t, n) => {
    const r = d(n);
    return "function" == typeof(null == r ? void 0 : r.fn) ? r.fn(e, r) : r
  }, g, v, w, y, c, u, p, b, o, i, s, l]
}
class ml extends Zn {
  constructor(e) {
    super(), Jn(this, e, hl, pl, h, {
      basepath: 8,
      url: 9,
      viewtransition: 0,
      history: 10
    })
  }
}

function gl(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "24"
    }, {
      height: "24"
    }, {
      fill: "none"
    }, {
      viewBox: "0 0 24 24"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path fill="currentColor" d="M3 16h18v1.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5zm0-2-.621-7.452a.75.75 0 0 1 1.163-.686l3.756 2.503a.75.75 0 0 0 1.006-.16L11.41 4.25a.75.75 0 0 1 1.18 0l3.106 3.954a.75.75 0 0 0 1.006.16l3.756-2.503a.75.75 0 0 1 1.163.686L21 14z" style="fill:currentColor;fill-opacity:1"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "24"
      }, {
        height: "24"
      }, {
        fill: "none"
      }, {
        viewBox: "0 0 24 24"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function vl(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class $l extends Zn {
  constructor(e) {
    super(), Jn(this, e, vl, gl, h, {})
  }
}

function wl(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "20"
    }, {
      height: "20"
    }, {
      fill: "currentColor"
    }, {
      viewBox: "0 -960 960 960"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path d="M222.78-124.78q-41 0-69.5-28.5t-28.5-69.5v-514.44q0-41 28.5-69.5t69.5-28.5H431q20.39 0 34.69 14.25Q480-806.73 480-786.43t-14.31 34.76q-14.3 14.45-34.69 14.45H222.78v514.44h514.44V-431q0-20.39 14.24-34.69Q765.71-480 786.01-480q20.29 0 34.75 14.31 14.46 14.3 14.46 34.69v208.22q0 41-28.5 69.5t-69.5 28.5zm514.44-543.91L438-369.48q-14.96 14.96-33.48 14.18-18.52-.79-33.48-15.74-14.95-14.96-14.95-34.27 0-19.3 14.95-34.26l297.65-297.65H625q-20.39 0-34.69-14.24Q576-765.71 576-786.01q0-20.29 14.31-34.75 14.3-14.46 34.69-14.46h161.22q20.38 0 34.69 14.31t14.31 34.69V-625q0 20.39-14.25 34.69Q806.73-576 786.43-576t-34.76-14.31q-14.45-14.3-14.45-34.69z"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "20"
      }, {
        height: "20"
      }, {
        fill: "currentColor"
      }, {
        viewBox: "0 -960 960 960"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function yl(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class xl extends Zn {
  constructor(e) {
    super(), Jn(this, e, yl, wl, h, {})
  }
}

function bl(e) {
  let t, n, r, o;
  return r = new xl({
    props: {
      class: "ml-2"
    }
  }), {
    c() {
      t = Pt(e[0]), n = Tt(), Yn(r.$$.fragment)
    },
    m(e, i) {
      Ct(e, t, i), Ct(e, n, i), Qn(r, e, i), o = !0
    },
    p(e, n) {
      (!o || 1 & n) && Ht(t, e[0])
    },
    i(e) {
      o || (qn(r.$$.fragment, e), o = !0)
    },
    o(e) {
      zn(r.$$.fragment, e), o = !1
    },
    d(e) {
      e && (At(t), At(n)), Xn(r, e)
    }
  }
}

function _l(e) {
  let t, n;
  return t = new Ro({
    props: {
      tag: "a",
      href: xe,
      autofocus: !0,
      size: "lg",
      $$slots: {
        default: [bl]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, [n]) {
      const r = {};
      3 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function kl(e, t, n) {
  let {
    label: r = `Play ${be} with ${_e}`
  } = t;
  return e.$$set = e => {
    "label" in e && n(0, r = e.label)
  }, [r]
}
class Cl extends Zn {
  constructor(e) {
    super(), Jn(this, e, kl, _l, h, {
      label: 0
    })
  }
}

function Sl(e) {
  let t, n, o, i, a, l, s, c, u, d, f, p, h, m, g;
  return i = new $l({
    props: {
      class: "self-center"
    }
  }), {
    c() {
      t = Mt("div"), n = Mt("p"), o = Mt("span"), Yn(i.$$.fragment), a = Tt(), l = Pt(be), s = Pt("\n      gives you "), c = Mt("span"), c.textContent = "three exciting new powerups", u = Pt(" and a dark theme for the\n      2048 board!"), d = Tt(), f = Mt("p"), p = Pt("Only available with\n      "), h = Mt("span"), h.textContent = `${ke} ${_e}`, m = Pt("\n      and included at no additional cost."), Dt(o, "class", "text-64-red inline-flex items-baseline gap-[2px] font-medium"), Dt(c, "class", "font-medium"), Dt(h, "class", "font-medium"), Dt(t, "class", "flex flex-col gap-2")
    },
    m(e, r) {
      Ct(e, t, r), bt(t, n), bt(n, o), Qn(i, o, null), bt(o, a), bt(o, l), bt(n, s), bt(n, c), bt(n, u), bt(t, d), bt(t, f), bt(f, p), bt(f, h), bt(f, m), g = !0
    },
    p: r,
    i(e) {
      g || (qn(i.$$.fragment, e), g = !0)
    },
    o(e) {
      zn(i.$$.fragment, e), g = !1
    },
    d(e) {
      e && At(t), Xn(i)
    }
  }
}

function Al(e) {
  let t, n;
  return {
    c() {
      t = Mt("img"), Ce(t.src, n = "/assets/partner1Authenticate-CnXhhWP4.jpg") || Dt(t, "src", "/assets/partner1Authenticate-CnXhhWP4.jpg"), Dt(t, "alt", ""), Dt(t, "class", "h-40 w-full object-cover sm:h-64")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    d(e) {
      e && At(t)
    }
  }
}

function Bl(e) {
  let t, n;
  return t = new Cl({}), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Ml(e) {
  let t, n;
  return t = new ci({
    props: {
      title: e[0],
      showCloseButton: !0,
      $$slots: {
        actions: [Bl],
        illustration: [Al],
        default: [Sl]
      },
      $$scope: {
        ctx: e
      }
    }
  }), t.$on("close", e[1]), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, [n]) {
      const r = {};
      1 & n && (r.title = e[0]), 4 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Ol(e, t, n) {
  let {
    title: r
  } = t;
  return e.$$set = e => {
    "title" in e && n(0, r = e.title)
  }, [r, () => il(va)]
}

function Pl(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "32"
    }, {
      height: "32"
    }, {
      fill: "none"
    }, {
      viewBox: "0 0 32 32"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path fill="currentColor" d="M4 22h24v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0-2-.828-9.936a1 1 0 0 1 1.551-.915l5.007 3.338a1 1 0 0 0 1.341-.214L15.214 7a1 1 0 0 1 1.572 0l4.143 5.272a1 1 0 0 0 1.34.214l5.008-3.338a1 1 0 0 1 1.551.915L28 20z" style="fill:currentColor;fill-opacity:1"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "32"
      }, {
        height: "32"
      }, {
        fill: "none"
      }, {
        viewBox: "0 0 32 32"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function Tl(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class El extends Zn {
  constructor(e) {
    super(), Jn(this, e, Tl, Pl, h, {})
  }
}

function Gl(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "48"
    }, {
      height: "48"
    }, {
      fill: "currentColor"
    }, {
      viewBox: "0 -960 960 960"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path d="M480-140q-11 0-22-4t-19-12l-53-49Q262-320 171-424.5T80-643q0-90 60.5-150.5T290-854q51 0 101 24.5t89 80.5q44-56 91-80.5t99-24.5q89 0 149.5 60.5T880-643q0 114-91 218.5T574-205l-53 49q-8 8-19 12t-22 4"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "48"
      }, {
        height: "48"
      }, {
        fill: "currentColor"
      }, {
        viewBox: "0 -960 960 960"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function Dl(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class Il extends Zn {
  constructor(e) {
    super(), Jn(this, e, Dl, Gl, h, {})
  }
}
const Ll = Y(Se, !1);

function ql(e) {
  let t, n, o, i, a, l, s, c, u, d, f, p, h, m, g, v, $, w, y, x, b, _, k;
  return u = new Il({
    props: {
      class: "text-64-red inline-block h-5 w-auto"
    }
  }), {
    c() {
      t = Mt("div"), n = Mt("div"), o = Mt("p"), o.innerHTML = '<span class="font-medium">You can keep playing for free until November.</span> After that, the\n        dark board and extra powerups will go away.', i = Tt(), a = Mt("p"), a.textContent = "They may come back in the future, but for now, enjoy them while they last!", l = Tt(), s = Mt("p"), c = Pt("Thanks for your support\n        "), Yn(u.$$.fragment), d = Tt(), f = Mt("div"), p = Mt("h2"), p.textContent = "Share your feedback", h = Tt(), m = Mt("p"), g = Mt("a"), g.textContent = "Click here", v = Pt("\n        to answer a survey about "), $ = Mt("span"), $.textContent = `${be}`, w = Pt("."), y = Tt(), x = Mt("p"), x.innerHTML = 'You can also\n        <a class="font-medium underline" href="mailto:feedback@play2048.co">email me directly.</a>', Dt(s, "class", "font-medium"), Dt(n, "class", "-mx-8 flex flex-col gap-2 px-8 pt-6"), Dt(p, "class", "text-64-red text-sm font-medium uppercase"), Dt(g, "href", "https://docs.google.com/forms/d/e/1FAIpQLSck7gYa4cBl2Wtk81UIoMfXiDrXQebORncN4hAwaUwmC-soWw/viewform?usp=header"), Dt(g, "target", "_blank"), Dt(g, "class", "font-medium underline"), Dt($, "class", "font-medium"), Dt(f, "class", "border-leather/50 -mx-8 flex flex-col gap-2 border-t px-8 pt-6"), Dt(t, "class", "flex flex-col gap-6 text-left")
    },
    m(r, C) {
      Ct(r, t, C), bt(t, n), bt(n, o), bt(n, i), bt(n, a), bt(n, l), bt(n, s), bt(s, c), Qn(u, s, null), bt(t, d), bt(t, f), bt(f, p), bt(f, h), bt(f, m), bt(m, g), bt(m, v), bt(m, $), bt(m, w), bt(f, y), bt(f, x), b = !0, _ || (k = Gt(g, "click", e[4]), _ = !0)
    },
    p: r,
    i(e) {
      b || (qn(u.$$.fragment, e), b = !0)
    },
    o(e) {
      zn(u.$$.fragment, e), b = !1
    },
    d(e) {
      e && At(t), Xn(u), _ = !1, k()
    }
  }
}

function zl(e) {
  let t, n, o, i, a, l;
  return n = new El({
    props: {
      class: "self-center"
    }
  }), {
    c() {
      t = Mt("span"), Yn(n.$$.fragment), o = Tt(), i = Pt(be), a = Pt("\n    is going away in November"), Dt(t, "class", "text-64-red inline-flex items-baseline gap-2 font-medium")
    },
    m(e, r) {
      Ct(e, t, r), Qn(n, t, null), bt(t, o), bt(t, i), Ct(e, a, r), l = !0
    },
    p: r,
    i(e) {
      l || (qn(n.$$.fragment, e), l = !0)
    },
    o(e) {
      zn(n.$$.fragment, e), l = !1
    },
    d(e) {
      e && (At(t), At(a)), Xn(n)
    }
  }
}

function Fl(e) {
  let t;
  return {
    c() {
      t = Pt("I Understand")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function jl(e) {
  let t, n;
  return t = new Ro({
    props: {
      size: "lg",
      autofocus: !0,
      $$slots: {
        default: [Fl]
      },
      $$scope: {
        ctx: e
      }
    }
  }), t.$on("click", e[3]), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, n) {
      const r = {};
      32 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Nl(e) {
  let t, n;
  return t = new ci({
    props: {
      title: e[0],
      $$slots: {
        actions: [jl],
        title: [zl],
        default: [ql]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, [n]) {
      const r = {};
      1 & n && (r.title = e[0]), 38 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Rl(e, t, n) {
  let r, o;
  E(e, Ll, e => n(1, r = e)), E(e, Xs, e => n(2, o = e));
  let {
    title: i
  } = t;
  return dn(() => zi.partner1ExpiredDialogShown()), e.$$set = e => {
    "title" in e && n(0, i = e.title)
  }, [i, r, o, () => {
    zi.partner1ExpiredDialogClosed(), W(Ll, r = !0, r), W(Xs, o = null, o)
  }, () => zi.partner1SurveyLinkClicked()]
}

function Ul(e) {
  let t;
  return {
    c() {
      t = Mt("p"), t.textContent = `Sorry, we couldn’t verify your ${ke} ${_e} membership. Please try again.`
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    d(e) {
      e && At(t)
    }
  }
}

function Wl(e) {
  let t;
  return {
    c() {
      t = Pt("Something’s Wrong")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Hl(e) {
  let t;
  return {
    c() {
      t = Pt("Go Back")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Vl(e) {
  let t, n, r, o;
  return t = new Cl({
    props: {
      label: "Try Again"
    }
  }), r = new Ro({
    props: {
      size: "lg",
      type: "secondary",
      $$slots: {
        default: [Hl]
      },
      $$scope: {
        ctx: e
      }
    }
  }), r.$on("click", e[1]), {
    c() {
      Yn(t.$$.fragment), n = Tt(), Yn(r.$$.fragment)
    },
    m(e, i) {
      Qn(t, e, i), Ct(e, n, i), Qn(r, e, i), o = !0
    },
    p(e, t) {
      const n = {};
      4 & t && (n.$$scope = {
        dirty: t,
        ctx: e
      }), r.$set(n)
    },
    i(e) {
      o || (qn(t.$$.fragment, e), qn(r.$$.fragment, e), o = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), zn(r.$$.fragment, e), o = !1
    },
    d(e) {
      e && At(n), Xn(t, e), Xn(r, e)
    }
  }
}

function Kl(e) {
  let t, n;
  return t = new ci({
    props: {
      title: e[0],
      $$slots: {
        actions: [Vl],
        title: [Wl],
        default: [Ul]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, [n]) {
      const r = {};
      1 & n && (r.title = e[0]), 4 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Yl(e, t, n) {
  let {
    title: r
  } = t;
  return e.$$set = e => {
    "title" in e && n(0, r = e.title)
  }, [r, () => il(va)]
}
const Ql = Y(Ae, !1);

function Xl(e) {
  let t, n, o, i, a, l, s, c, u, d, f;
  return a = new $l({
    props: {
      class: "self-center"
    }
  }), {
    c() {
      t = Mt("div"), n = Mt("p"), o = Pt("Welcome to\n      "), i = Mt("span"), Yn(a.$$.fragment), l = Tt(), s = Pt(be), c = Pt("!"), u = Tt(), d = Mt("p"), d.innerHTML = 'This version of 2048 gives you <span class="font-medium">three new powerups</span> and a\n      <span class="font-medium">dark theme</span>\n      for the 2048 board. Enjoy!', Dt(i, "class", "text-64-red inline-flex items-baseline gap-[2px] font-medium"), Dt(t, "class", "flex flex-col gap-2")
    },
    m(e, r) {
      Ct(e, t, r), bt(t, n), bt(n, o), bt(n, i), Qn(a, i, null), bt(i, l), bt(i, s), bt(i, c), bt(t, u), bt(t, d), f = !0
    },
    p: r,
    i(e) {
      f || (qn(a.$$.fragment, e), f = !0)
    },
    o(e) {
      zn(a.$$.fragment, e), f = !1
    },
    d(e) {
      e && At(t), Xn(a)
    }
  }
}

function Jl(e) {
  let t, n;
  return {
    c() {
      t = Mt("img"), Ce(t.src, n = "/assets/partner1Welcome-DOKpzOU8.jpg") || Dt(t, "src", "/assets/partner1Welcome-DOKpzOU8.jpg"), Dt(t, "alt", ""), Dt(t, "class", "h-40 w-full object-cover sm:h-64")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    d(e) {
      e && At(t)
    }
  }
}

function Zl(e) {
  let t;
  return {
    c() {
      t = Pt("Start Playing")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function es(e) {
  let t, n;
  return t = new Ro({
    props: {
      size: "lg",
      autofocus: !0,
      $$slots: {
        default: [Zl]
      },
      $$scope: {
        ctx: e
      }
    }
  }), t.$on("click", e[2]), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, n) {
      const r = {};
      8 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function ts(e) {
  let t, n;
  return t = new ci({
    props: {
      title: e[0],
      $$slots: {
        actions: [es],
        illustration: [Jl],
        default: [Xl]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, [n]) {
      const r = {};
      1 & n && (r.title = e[0]), 10 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function ns(e, t, n) {
  let r;
  E(e, Ql, e => n(1, r = e));
  let {
    title: o
  } = t;
  return e.$$set = e => {
    "title" in e && n(0, o = e.title)
  }, [o, r, () => W(Ql, r = !0, r)]
}

function rs(e) {
  let t;
  return {
    c() {
      t = Mt("div"), t.innerHTML = '<p class="mb-2">Keep merging the tiles until you get to <span class="font-medium">2048!</span></p> <p class="mb-2">You’ll earn powerups each time you create a <span class="font-medium">128, 256</span> or\n      <span class="font-medium">512.</span> Use them wisely to help you along the way.</p> <p><span class="font-medium">Good luck!</span></p>', Dt(t, "class", "text-balance")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    d(e) {
      e && At(t)
    }
  }
}

function os(e) {
  let t, n;
  return {
    c() {
      t = Mt("img"), Ce(t.src, n = "/assets/tutorialDone-6O6GgIrH.jpg") || Dt(t, "src", "/assets/tutorialDone-6O6GgIrH.jpg"), Dt(t, "alt", ""), Dt(t, "class", "h-32 w-full object-cover md:h-48")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    d(e) {
      e && At(t)
    }
  }
}

function is(e) {
  let t;
  return {
    c() {
      t = Pt("You’re Ready")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function as(e) {
  let t;
  return {
    c() {
      t = Pt("Start Playing")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function ls(e) {
  let t, n;
  return t = new Ro({
    props: {
      size: "lg",
      autofocus: !0,
      $$slots: {
        default: [as]
      },
      $$scope: {
        ctx: e
      }
    }
  }), t.$on("click", e[2]), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, n) {
      const r = {};
      8 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function ss(e) {
  let t, n;
  return t = new ci({
    props: {
      title: e[0],
      $$slots: {
        actions: [ls],
        title: [is],
        illustration: [os],
        default: [rs]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, [n]) {
      const r = {};
      1 & n && (r.title = e[0]), 10 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function cs(e, t, n) {
  let r;
  E(e, Xs, e => n(1, r = e));
  let {
    title: o
  } = t;
  return e.$$set = e => {
    "title" in e && n(0, o = e.title)
  }, [o, r, () => {
    W(Xs, r = null, r), il(va)
  }]
}

function us(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "24"
    }, {
      height: "24"
    }, {
      fill: "currentColor"
    }, {
      viewBox: "0 -960 960 960"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path d="M235.48-101.91q-48.39 0-98.33-26.81-49.93-26.8-84.28-77.5 31.65 0 59.22-18.24 27.56-18.24 29.82-58.93 2.83-52.26 40.37-89.24 37.55-36.98 93.2-36.98t94.89 39.24 39.24 94.89q0 72.22-50.96 122.89-50.95 50.68-123.17 50.68M481.3-353.78 353.78-481.3l384-384.01q11-11 27.5-11.5t28.5 11.5l71.53 71.53q12 12 12 28t-12 28z"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "24"
      }, {
        height: "24"
      }, {
        fill: "currentColor"
      }, {
        viewBox: "0 -960 960 960"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function ds(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class fs extends Zn {
  constructor(e) {
    super(), Jn(this, e, ds, us, h, {})
  }
}

function ps(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "24"
    }, {
      height: "24"
    }, {
      fill: "currentColor"
    }, {
      viewBox: "0 -960 960 960"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path d="M343.04-338.52H232.61q-31.91 0-47.09-28.28-15.17-28.29 3.35-55.07l327.26-471.26q11.7-16.26 30.24-22.33 18.54-6.06 37.24 1.07t28.67 24.11q9.98 16.97 7.42 36.8l-33.7 272h142.57q33.91 0 48.08 30.35 14.18 30.35-7.91 56.56L410.91-63.82q-12.69 15.26-30.95 19.26t-36.09-3.57q-17.83-7.56-27.18-24.32-9.34-16.77-6.78-36.03z"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "24"
      }, {
        height: "24"
      }, {
        fill: "currentColor"
      }, {
        viewBox: "0 -960 960 960"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function hs(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class ms extends Zn {
  constructor(e) {
    super(), Jn(this, e, hs, ps, h, {})
  }
}
const gs = (e, t = location.origin) => new URL(e, t).href,
  vs = M("api");

function $s(e) {
  const t = gs(e);
  return async function(e) {
    const n = new URLSearchParams(e).toString(),
      r = await fetch(t + (n ? `?${n}` : ""));
    if (vs(`(${r.status}) ${t}`), r.ok) return r.json();
    throw new Error(`(${r.status}) ${t} ${r.statusText}`)
  }
}
const ws = $s("/api/v1/geo"),
  ys = $s("/api/v1/token"),
  xs = M("stores/partner1/geo"),
  bs = 3456e5,
  _s = 36e5,
  ks = Y(Be, {
    a: !1,
    e: 0
  }),
  Cs = O(ks, (e, t) => {
    xs("set derived geoStatus", e), t(e), e.e < Date.now() && (xs("fetching geo status (expired)"), async function() {
      try {
        const {
          a: e,
          c: t
        } = await ws();
        return e || xs("geo not available, c response from API:", t), e
      } catch (e) {
        return K(e), xs("geo fetch failed", e), !1
      }
    }().then(e => {
      xs("next geo status", e);
      const t = Date.now() + (e ? bs : _s);
      ks.set({
        a: e,
        e: t
      })
    }))
  });

function Ss() {
  ks.set({
    a: !0,
    e: Date.now() + bs
  })
}

function As() {
  ks.set({
    a: !1,
    e: Date.now() + _s
  })
}
const Bs = M("stores/partner1/token"),
  Ms = f(!1),
  Os = {
    subscribe: Ms.subscribe
  },
  Ps = Y(Me, {
    v: !1
  }),
  Ts = f(!0),
  Es = Y(Oe, !1);
Ps.subscribe(e => {
  e.v && Es.set(!0)
});
const Gs = O(Ps, (e, t) => {
  if (Bs("set derived tokenStatus", e), t(e), e.v && e.t < Date.now()) return Bs(`token expired, clearing (t: ${new Date(e.t).toISOString()})`), Ps.set({
    v: !1
  });
  if (!location.pathname.startsWith(wa)) return void Ts.set(!1);
  Bs("looking for token in URL");
  const n = Pe().get("Signature");
  if (!n) return Bs("no token found in URL"), void Ts.set(!1);
  Bs(`token found in URL, validating (t: ${n})`), ys({
    t: n
  }).then(e => {
    Bs("token validated successfully", e), v(e.v, "Token validation succeeded but response is not valid"), zi.plusAccessGranted(), Ds();
    const t = Date.now() + 2592e6;
    Ps.set({
      ...e,
      t: t
    }), Ms.set(!1)
  }).catch(e => {
    Bs("token validation failed", e), Ms.set(!0), K(e), Ds()
  }).then(() => {
    Ts.set(!1)
  })
});

function Ds() {
  Bs(`clearing token param by navigating to ${location.pathname}`), il(location.pathname)
}

function Is() {
  il(wa), Ps.set({
    v: !0,
    t: Date.now() + 6048e5,
    c: ""
  }), Ms.set(!1)
}

function Ls() {
  il(wa), Ps.set({
    v: !1
  }), Ms.set(!0)
}
const qs = M("stores/partner1/features");
var zs = (e => (e.Unknown = "unknown", e.Unavailable = "unavailable", e.Unauthenticated = "unauthenticated", e.Available = "available", e.Expired = "expired", e))(zs || {});
const Fs = O([Cs, Gs, Ts, Es], ([e, t, n, r]) => Te ? "expired" : 0 === e.e || n ? "unknown" : e.a ? t.v ? "available" : "unauthenticated" : "unavailable");

function js(e) {
  let t, n, r, o, i, a, l, s, c;
  return r = new $l({
    props: {
      class: "size-4"
    }
  }), {
    c() {
      t = Mt("li"), n = Mt("span"), Yn(r.$$.fragment), o = Tt(), i = Mt("span"), a = Mt("span"), a.textContent = `${be},`, l = Pt("\n            an exclusive new game only with\n            "), s = Mt("span"), s.textContent = `${ke} ${_e}.`, Dt(n, "class", "bg-64-red flex aspect-square w-6 shrink-0 items-center justify-center rounded-md text-white"), Dt(a, "class", "text-64-red inline-flex items-baseline gap-[2px] font-medium"), Dt(s, "class", "font-medium"), Dt(i, "class", "pt-px"), Dt(t, "class", "flex items-start gap-2")
    },
    m(e, u) {
      Ct(e, t, u), bt(t, n), Qn(r, n, null), bt(t, o), bt(t, i), bt(i, a), bt(i, l), bt(i, s), c = !0
    },
    i(e) {
      c || (qn(r.$$.fragment, e), c = !0)
    },
    o(e) {
      zn(r.$$.fragment, e), c = !1
    },
    d(e) {
      e && At(t), Xn(r)
    }
  }
}

function Ns(e) {
  let t, n, r, o, i, a, l, s, c, u, d, f, p, h, m, g, v, $, w, y, x;
  l = new fs({
    props: {
      class: "size-4"
    }
  }), p = new ms({
    props: {
      class: "size-4"
    }
  });
  let b = (e[2] === zs.Available || e[2] === zs.Unauthenticated) && js();
  return {
    c() {
      t = Mt("div"), n = Mt("p"), n.innerHTML = '<span class="font-medium">Can you believe 2048 has turned 10?</span> Me neither! Time for\n      an update. Here’s what’s new:', r = Tt(), o = Mt("ul"), i = Mt("li"), a = Mt("span"), Yn(l.$$.fragment), s = Tt(), c = Mt("span"), c.innerHTML = 'A <span class="font-medium">fresh design</span> with\n          <span class="font-medium">new animations</span>', u = Tt(), d = Mt("li"), f = Mt("span"), Yn(p.$$.fragment), h = Tt(), m = Mt("span"), m.innerHTML = '<span class="font-medium">Undo</span> and powerful\n          <span class="font-medium">Powerups</span>', g = Tt(), b && b.c(), v = Tt(), $ = Mt("p"), $.innerHTML = 'Got feedback? In the menu you’ll find a button to <span class="font-medium">Give Feedback</span>\n      and a link to the old version. <span class="font-medium">Enjoy!</span>', w = Tt(), y = Mt("p"), y.textContent = "—Gabriele", Dt(a, "class", "bg-leather flex aspect-square w-6 shrink-0 items-center justify-center rounded-md text-white"), Dt(c, "class", "pt-px"), Dt(i, "class", "flex items-start gap-2"), Dt(f, "class", "bg-leather flex aspect-square w-6 shrink-0 items-center justify-center rounded-md text-white"), Dt(m, "class", "pt-px"), Dt(d, "class", "flex items-start gap-2"), Dt(o, "class", "my-2 flex flex-col gap-3 pl-2 md:pl-4"), Dt(y, "class", "text-right font-medium"), Dt(t, "class", "flex flex-col gap-2 text-left")
    },
    m(e, _) {
      Ct(e, t, _), bt(t, n), bt(t, r), bt(t, o), bt(o, i), bt(i, a), Qn(l, a, null), bt(i, s), bt(i, c), bt(o, u), bt(o, d), bt(d, f), Qn(p, f, null), bt(d, h), bt(d, m), bt(o, g), b && b.m(o, null), bt(t, v), bt(t, $), bt(t, w), bt(t, y), x = !0
    },
    p(e, t) {
      e[2] === zs.Available || e[2] === zs.Unauthenticated ? b ? 4 & t && qn(b, 1) : (b = js(), b.c(), qn(b, 1), b.m(o, null)) : b && (In(), zn(b, 1, 1, () => {
        b = null
      }), Ln())
    },
    i(e) {
      x || (qn(l.$$.fragment, e), qn(p.$$.fragment, e), qn(b), x = !0)
    },
    o(e) {
      zn(l.$$.fragment, e), zn(p.$$.fragment, e), zn(b), x = !1
    },
    d(e) {
      e && At(t), Xn(l), Xn(p), b && b.d()
    }
  }
}

function Rs(e) {
  let t, n;
  return {
    c() {
      t = Mt("img"), Ce(t.src, n = "/assets/whatsNew-FC9r-OXv.jpg") || Dt(t, "src", "/assets/whatsNew-FC9r-OXv.jpg"), Dt(t, "alt", ""), Dt(t, "class", "h-20 w-full object-cover md:h-48")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    d(e) {
      e && At(t)
    }
  }
}

function Us(e) {
  let t;
  return {
    c() {
      t = Pt("2048 Has a New Look")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Ws(e) {
  let t;
  return {
    c() {
      t = Pt("Start Playing")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Hs(e) {
  let t, n;
  return t = new Ro({
    props: {
      size: "lg",
      $$slots: {
        default: [Ws]
      },
      $$scope: {
        ctx: e
      }
    }
  }), t.$on("click", e[3]), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, n) {
      const r = {};
      16 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Vs(e) {
  let t, n;
  return t = new ci({
    props: {
      title: e[0],
      $$slots: {
        actions: [Hs],
        title: [Us],
        illustration: [Rs],
        default: [Ns]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, [n]) {
      const r = {};
      1 & n && (r.title = e[0]), 22 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Ks(e, t, n) {
  let r, o;
  E(e, Xs, e => n(1, r = e)), E(e, Fs, e => n(2, o = e));
  let {
    title: i
  } = t;
  return e.$$set = e => {
    "title" in e && n(0, i = e.title)
  }, [i, r, o, () => {
    W(Xs, r = null, r), il(va)
  }]
}
Fs.subscribe(e => {
  qs("partner1FeaturesStatus", e)
});
const Ys = {
  tutorialDone: Qs(class extends Zn {
    constructor(e) {
      super(), Jn(this, e, cs, ss, h, {
        title: 0
      })
    }
  }),
  whatsNew: Qs(class extends Zn {
    constructor(e) {
      super(), Jn(this, e, Ks, Vs, h, {
        title: 0
      })
    }
  }),
  partner1Authenticate: Qs(class extends Zn {
    constructor(e) {
      super(), Jn(this, e, Ol, Ml, h, {
        title: 0
      })
    }
  }),
  partner1TokenValidationFailed: Qs(class extends Zn {
    constructor(e) {
      super(), Jn(this, e, Yl, Kl, h, {
        title: 0
      })
    }
  }),
  partner1Welcome: Qs(class extends Zn {
    constructor(e) {
      super(), Jn(this, e, ns, ts, h, {
        title: 0
      })
    }
  }),
  confirmReset: Qs(class extends Zn {
    constructor(e) {
      super(), Jn(this, e, ga, ma, h, {
        title: 0
      })
    }
  }),
  appDownload: Qs(class extends Zn {
    constructor(e) {
      super(), Jn(this, e, gi, mi, h, {
        title: 0
      })
    }
  }),
  giveFeedbackThanks: Qs(class extends Zn {
    constructor(e) {
      super(), Jn(this, e, Ba, Aa, h, {
        title: 0
      })
    }
  }),
  partner1Expired: Qs(class extends Zn {
    constructor(e) {
      super(), Jn(this, e, Rl, Nl, h, {
        title: 0
      })
    }
  })
};

function Qs(e) {
  return {
    dialog: Do({
      forceVisible: !0,
      escapeBehavior: "ignore"
    }),
    Component: e
  }
}
const Xs = f(null);
let Js = Er;

function Zs(e, {
  delay: t = 0,
  duration: n = 400,
  easing: r = l
} = {}) {
  const o = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: n,
    easing: r,
    css: e => "opacity: " + e * o
  }
}
Xs.subscribe(e => {
  e ? (na.set(!0), Js = Ur()) : (na.set(!1), Js())
});
const ec = (e, {
    duration: t,
    delay: n
  }) => {
    const r = Ee({
        duration: t,
        bounce: .3
      }),
      o = {
        duration: t,
        easing: e => r.next(e * t).value,
        css: (e, t) => `opacity: ${e}; transform: scale(${e}) translateY(${300*t}px)`
      };
    return n && (o.delay = n), o
  },
  tc = (e, {
    range: t = -70,
    delay: n
  }) => {
    const r = Ee({
        from: 0,
        to: 0,
        velocity: 50,
        stiffness: 200,
        damping: 7,
        mass: .3
      }),
      o = {
        duration: 800,
        easing: e => r.next(800 * e).value,
        css: e => 1 === e ? "" : `transform: translateY(${e*t}px)`
      };
    return n && (o.delay = n), o
  };

function nc(e) {
  let t, n, r, o, a, l, s, c, u, d, f = [e[2], {
      class: "bg-near-black/70 fixed inset-0"
    }],
    p = {};
  for (let i = 0; i < f.length; i += 1) p = I(p, f[i]);
  var h = e[0];

  function g(e, t) {
    return {
      props: {
        title: e[7],
        description: e[8],
        close: e[9]
      }
    }
  }
  h && (l = tn(h, g(e)));
  let v = [e[3], {
      class: "bg-sand relative my-4 flex max-h-[85vh] w-[90vw] max-w-[450px] flex-col overflow-hidden rounded-3xl shadow-xl"
    }],
    $ = {};
  for (let i = 0; i < v.length; i += 1) $ = I($, v[i]);
  let w = [e[1], {
      class: "body-layout-effects fixed inset-0 bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-center justify-center text-pretty"
    }],
    y = {};
  for (let i = 0; i < w.length; i += 1) y = I(y, w[i]);
  return {
    c() {
      t = Mt("div"), n = Mt("div"), o = Tt(), a = Mt("div"), l && Yn(l.$$.fragment), Lt(n, p), Xt(n, "svelte-q5atzs", !0), Lt(a, $), Xt(a, "svelte-q5atzs", !0), Lt(t, y), Xt(t, "svelte-q5atzs", !0)
    },
    m(r, i) {
      Ct(r, t, i), bt(t, n), bt(t, o), bt(t, a), l && Qn(l, a, null), c = !0, u || (d = [m(e[2].action(n)), m(e[3].action(a)), m(e[1].action(t))], u = !0)
    },
    p(e, [r]) {
      if (Lt(n, p = Hn(f, [4 & r && e[2], {
          class: "bg-near-black/70 fixed inset-0"
        }])), Xt(n, "svelte-q5atzs", !0), 1 & r && h !== (h = e[0])) {
        if (l) {
          In();
          const e = l;
          zn(e.$$.fragment, 1, 0, () => {
            Xn(e, 1)
          }), Ln()
        }
        h ? (l = tn(h, g(e)), Yn(l.$$.fragment), qn(l.$$.fragment, 1), Qn(l, a, null)) : l = null
      }
      Lt(a, $ = Hn(v, [8 & r && e[3], {
        class: "bg-sand relative my-4 flex max-h-[85vh] w-[90vw] max-w-[450px] flex-col overflow-hidden rounded-3xl shadow-xl"
      }])), Xt(a, "svelte-q5atzs", !0), Lt(t, y = Hn(w, [2 & r && e[1], {
        class: "body-layout-effects fixed inset-0 bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-center justify-center text-pretty"
      }])), Xt(t, "svelte-q5atzs", !0)
    },
    i(e) {
      c || (e && Cn(() => {
        c && (r || (r = Nn(n, Zs, {
          duration: 300
        }, !0)), r.run(1))
      }), l && qn(l.$$.fragment, e), e && Cn(() => {
        c && (s || (s = Nn(a, ec, {
          duration: 350
        }, !0)), s.run(1))
      }), c = !0)
    },
    o(e) {
      e && (r || (r = Nn(n, Zs, {
        duration: 300
      }, !1)), r.run(0)), l && zn(l.$$.fragment, e), e && (s || (s = Nn(a, ec, {
        duration: 350
      }, !1)), s.run(0)), c = !1
    },
    d(e) {
      e && At(t), e && r && r.end(), l && Xn(l), e && s && s.end(), u = !1, i(d)
    }
  }
}

function rc(e, t, n) {
  let r, o, i, {
      dialog: a
    } = t,
    {
      Component: l
    } = t;
  const {
    elements: {
      portalled: s,
      overlay: c,
      content: u,
      title: d,
      description: f,
      close: p
    }
  } = a;
  return E(e, s, e => n(1, r = e)), E(e, c, e => n(2, o = e)), E(e, u, e => n(3, i = e)), e.$$set = e => {
    "dialog" in e && n(10, a = e.dialog), "Component" in e && n(0, l = e.Component)
  }, [l, r, o, i, s, c, u, d, f, p, a]
}
class oc extends Zn {
  constructor(e) {
    super(), Jn(this, e, rc, nc, h, {
      dialog: 10,
      Component: 0
    })
  }
}

function ic(e) {
  let t, n;
  return t = new oc({
    props: {
      dialog: Ys[e[0]].dialog,
      Component: Ys[e[0]].Component
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, n) {
      const r = {};
      1 & n && (r.dialog = Ys[e[0]].dialog), 1 & n && (r.Component = Ys[e[0]].Component), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function ac(e) {
  let t, n, r = e[0] && Ys[e[0]] && ic(e);
  return {
    c() {
      r && r.c(), t = Et()
    },
    m(e, o) {
      r && r.m(e, o), Ct(e, t, o), n = !0
    },
    p(e, [n]) {
      e[0] && Ys[e[0]] ? r ? (r.p(e, n), 1 & n && qn(r, 1)) : (r = ic(e), r.c(), qn(r, 1), r.m(t.parentNode, t)) : r && (In(), zn(r, 1, 1, () => {
        r = null
      }), Ln())
    },
    i(e) {
      n || (qn(r), n = !0)
    },
    o(e) {
      zn(r), n = !1
    },
    d(e) {
      e && At(t), r && r.d(e)
    }
  }
}

function lc(e, t, n) {
  let r;
  return E(e, Xs, e => n(0, r = e)), [r]
}
class sc extends Zn {
  constructor(e) {
    super(), Jn(this, e, lc, ac, h, {})
  }
}
const cc = M("ezoic");
cc("EZOIC_ACTIVE: %o - EZOIC_ENABLED: %o - IS_PRODUCTION_HOST: %o", Ge, De, Ie);
const uc = D(void 0, (e, t) => {
  window.matchMedia(Le.short).matches ? e(null) : window.matchMedia(Le.md).matches ? e("bottom") : e("top");
  let n = setInterval(() => {
    v(window, "window not defined"), window.ezAnchorPosition && (cc("[ezoicAnchorPosition] detected", window.ezAnchorPosition), clearInterval(n), n = 0, t(e => (window.ezAnchorPosition !== e && K(new Error(`detected window.ezAnchorPosition is different than stored value: (detected) ${window.ezAnchorPosition}, (stored) ${e}`)), window.ezAnchorPosition)))
  }, 100);
  setTimeout(() => {
    n && (clearInterval(n), cc("[ezoicAnchorPosition] timeout (5000) reached without detecting anchor position"))
  }, 5e3)
});
uc.subscribe(e => {
  cc("[ezoicAnchorPosition] changed", e)
});
const dc = [];
let fc = [];

function pc(e) {
  dc.includes(e) ? cc(`[addPlaceholder] id ${e} (ALREADY ADDED)`) : (cc(`[addPlaceholder] id ${e}`), dc.push(e)), gc()
}

function hc(e) {
  const t = dc.indexOf(e); - 1 === t ? cc(`[removePlaceholder] id ${e} (NOT FOUND)`) : (cc(`[removePlaceholder] id ${e}`), dc.splice(t, 1)), gc()
}
let mc = !0;
const gc = V(200, () => {
  var e;
  cc(`[debouncedSubmitActivePlaceholders] activePlaceholders: ${dc.join(", ")}`), e = function() {
    if (cc(`[pushCmd] activePlaceholders: ${dc.join(", ")}`), mc) {
      cc("[pushCmd] firstRun === true, enabling and displaying placeholders"), dc.length > 0 ? (cc(`[pushCmd] there are ${dc.length} active placeholders, calling ezoic.define()`), cc(`[pushCmd] ezoic.define(${dc.join(", ")})`), this.define(...dc)) : cc("[pushCmd] no placeholders to define");
      const e = p(uc),
        t = "string" == typeof e;
      this.setEzoicAnchorAd(t), t && this.config({
        anchorAdPosition: e
      }), cc("[pushCmd] ezoic.enable()"), this.enable(), cc("[pushCmd] ezoic.display()"), this.display(), fc = [...dc], mc = !1
    } else {
      if (cc("[pushCmd] firstRun === false, updating placeholders"), $c) $c = !1, cc("[pushCmd] locationChanged === true, will define and refresh placeholders"), cc(`[pushCmd] ezoic.define(${dc.join(", ")}) `), this.define(...dc), cc("[pushCmd] ezoic.refresh()"), this.refresh();
      else {
        cc("[pushCmd] locationChanged === false, checking for added or removed placeholders");
        const e = dc.filter(e => !fc.includes(e)),
          t = fc.filter(e => !dc.includes(e));
        e.length || t.length || cc("[pushCmd] no added or removed placeholders"), e.length > 0 && (cc(`[pushCmd] added: ${e.join(", ")}, will call ezoic.displayMore()`), cc(`[pushCmd] ezoic.displayMore(${e.join(", ")})`), this.displayMore(...e)), t.length > 0 && (cc(`[pushCmd] removed: ${t.join(", ")}, will call ezoic.destroyPlaceholders()`), cc(`[pushCmd] ezoic.destroyPlaceholders(${t.join(", ")})`), this.destroyPlaceholders(...t))
      }
      fc = [...dc]
    }
  }, cc("[pushCmd] called"), Ge ? (v(window.ezstandalone, "window.ezstandalone not defined"), window.ezstandalone.cmd.push(() => {
    v(window.ezstandalone, "ezstandalone not defined inside cmd.push callback");
    const t = window.ezstandalone;
    e.call(t)
  })) : cc("[pushCmd] Ezoic not enabled, ignoring")
});
let vc = window.location.pathname,
  $c = !1;
! function e() {
  window.location.pathname !== vc && (cc("[checkLocation] pathname changed, setting locationChanged = true and calling debouncedSubmitActivePlaceholders"), vc = window.location.pathname, $c = !0, gc()), qe(e, 400)
}();
const {
  window: wc
} = ze;

function yc(e) {
  let t, n;
  return {
    c: r,
    m(r, o) {
      t || (n = [Gt(wc, "keydown", function() {
        a(e[1]) && e[1].apply(this, arguments)
      }), Gt(wc, "keyup", function() {
        a(e[0]) && e[0].apply(this, arguments)
      })], t = !0)
    },
    p(t, [n]) {
      e = t
    },
    i: r,
    o: r,
    d(e) {
      t = !1, i(n)
    }
  }
}

function xc(e, t, n) {
  let r, o;
  const i = M("KeyboardActionsController");
  let a;
  return e.$$.update = () => {
    4 & e.$$.dirty && n(1, r = e => {
      i("Key down", e.key, e.code, e.shiftKey), "Shift" === e.key && (document.body.dataset.shift = "true", clearTimeout(a), n(2, a = window.setTimeout(() => {
        delete document.body.dataset.shift
      }, 2e3)))
    })
  }, n(0, o = e => {
    "Shift" === e.key && delete document.body.dataset.shift
  }), [o, r, a]
}
class bc extends Zn {
  constructor(e) {
    super(), Jn(this, e, xc, yc, h, {})
  }
}

function _c(e) {
  let t, n, r;
  const o = e[2].default,
    i = z(o, e, e[1], null);
  return {
    c() {
      t = Mt("div"), i && i.c(), Dt(t, "class", n = "document-content " + e[0] + " svelte-t6nza5")
    },
    m(e, n) {
      Ct(e, t, n), i && i.m(t, null), r = !0
    },
    p(e, [a]) {
      i && i.p && (!r || 2 & a) && F(i, o, e, e[1], r ? N(o, e[1], a, null) : j(e[1]), null), (!r || 1 & a && n !== (n = "document-content " + e[0] + " svelte-t6nza5")) && Dt(t, "class", n)
    },
    i(e) {
      r || (qn(i, e), r = !0)
    },
    o(e) {
      zn(i, e), r = !1
    },
    d(e) {
      e && At(t), i && i.d(e)
    }
  }
}

function kc(e, t, n) {
  let {
    $$slots: r = {},
    $$scope: o
  } = t, {
    class: i = ""
  } = t;
  return e.$$set = e => {
    "class" in e && n(0, i = e.class), "$$scope" in e && n(1, o = e.$$scope)
  }, [i, o, r]
}
class Cc extends Zn {
  constructor(e) {
    super(), Jn(this, e, kc, _c, h, {
      class: 0
    })
  }
}

function Sc(e) {
  let t;
  return {
    c() {
      t = Mt("p"), t.textContent = `Something went wrong. ${K(e[2])}`
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function Ac(e) {
  let t, n, r;
  var o = e[1].default;
  return o && (t = tn(o, {})), {
    c() {
      t && Yn(t.$$.fragment), n = Et()
    },
    m(e, o) {
      t && Qn(t, e, o), Ct(e, n, o), r = !0
    },
    p(e, r) {
      if (o !== (o = e[1].default)) {
        if (t) {
          In();
          const e = t;
          zn(e.$$.fragment, 1, 0, () => {
            Xn(e, 1)
          }), Ln()
        }
        o ? (t = tn(o, {}), Yn(t.$$.fragment), qn(t.$$.fragment, 1), Qn(t, n.parentNode, n)) : t = null
      }
    },
    i(e) {
      r || (t && qn(t.$$.fragment, e), r = !0)
    },
    o(e) {
      t && zn(t.$$.fragment, e), r = !1
    },
    d(e) {
      e && At(n), t && Xn(t, e)
    }
  }
}

function Bc(e) {
  let t;
  return {
    c() {
      t = Mt("p"), t.textContent = "Loading..."
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function Mc(e) {
  let t, n, r = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Bc,
    then: Ac,
    catch: Sc,
    value: 1,
    error: 2,
    blocks: [, , , ]
  };
  return Rn(e[0], r), {
    c() {
      t = Et(), r.block.c()
    },
    m(e, o) {
      Ct(e, t, o), r.block.m(e, r.anchor = o), r.mount = () => t.parentNode, r.anchor = t, n = !0
    },
    p(t, n) {
      Un(r, e = t, n)
    },
    i(e) {
      n || (qn(r.block), n = !0)
    },
    o(e) {
      for (let t = 0; t < 3; t += 1) zn(r.blocks[t]);
      n = !1
    },
    d(e) {
      e && At(t), r.block.d(e), r.token = null, r = null
    }
  }
}

function Oc(e) {
  let t, n;
  return t = new Cc({
    props: {
      $$slots: {
        default: [Mc]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, [n]) {
      const r = {};
      8 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Pc(e) {
  return [pt(() => import("./AsyncContent-BI1Zne6r.js"), [])]
}
class Tc extends Zn {
  constructor(e) {
    super(), Jn(this, e, Pc, Oc, h, {})
  }
}

function Ec(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "576"
    }, {
      height: "576"
    }, {
      fill: "none"
    }, {
      viewBox: "0 0 576 576"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<g filter="url(#boardPlaceholder_svg__a)"><rect width="492" height="492" x="42" y="42" fill="url(#boardPlaceholder_svg__b)" rx="22"/></g><g filter="url(#boardPlaceholder_svg__c)"><rect width="108" height="108" x="54" y="54" fill="#baac9a" rx="10" style="fill:#baac9a;fill:color(display-p3 .7306 .6758 .6028);fill-opacity:1"/></g><g filter="url(#boardPlaceholder_svg__d)"><rect width="108" height="108" x="174" y="54" fill="#baac9a" rx="10" style="fill:#baac9a;fill:color(display-p3 .7306 .6758 .6028);fill-opacity:1"/></g><g filter="url(#boardPlaceholder_svg__e)"><rect width="108" height="108" x="294" y="54" fill="#baac9a" rx="10" style="fill:#baac9a;fill:color(display-p3 .7306 .6758 .6028);fill-opacity:1"/></g><g filter="url(#boardPlaceholder_svg__f)"><rect width="108" height="108" x="414" y="54" fill="#baac9a" rx="10" style="fill:#baac9a;fill:color(display-p3 .7306 .6758 .6028);fill-opacity:1"/></g><g filter="url(#boardPlaceholder_svg__g)"><rect width="108" height="108" x="54" y="174" fill="#baac9a" rx="10" style="fill:#baac9a;fill:color(display-p3 .7306 .6758 .6028);fill-opacity:1"/></g><g filter="url(#boardPlaceholder_svg__h)"><rect width="108" height="108" x="174" y="174" fill="#baac9a" rx="10" style="fill:#baac9a;fill:color(display-p3 .7306 .6758 .6028);fill-opacity:1"/></g><g filter="url(#boardPlaceholder_svg__i)"><rect width="108" height="108" x="294" y="174" fill="#baac9a" rx="10" style="fill:#baac9a;fill:color(display-p3 .7306 .6758 .6028);fill-opacity:1"/></g><g filter="url(#boardPlaceholder_svg__j)"><rect width="108" height="108" x="414" y="174" fill="#baac9a" rx="10" style="fill:#baac9a;fill:color(display-p3 .7306 .6758 .6028);fill-opacity:1"/></g><g filter="url(#boardPlaceholder_svg__k)"><rect width="108" height="108" x="54" y="294" fill="#baac9a" rx="10" style="fill:#baac9a;fill:color(display-p3 .7306 .6758 .6028);fill-opacity:1"/></g><g filter="url(#boardPlaceholder_svg__l)"><rect width="108" height="108" x="174" y="294" fill="#baac9a" rx="10" style="fill:#baac9a;fill:color(display-p3 .7306 .6758 .6028);fill-opacity:1"/></g><g filter="url(#boardPlaceholder_svg__m)"><rect width="108" height="108" x="294" y="294" fill="#baac9a" rx="10" style="fill:#baac9a;fill:color(display-p3 .7306 .6758 .6028);fill-opacity:1"/></g><g filter="url(#boardPlaceholder_svg__n)"><rect width="108" height="108" x="414" y="294" fill="#baac9a" rx="10" style="fill:#baac9a;fill:color(display-p3 .7306 .6758 .6028);fill-opacity:1"/></g><g filter="url(#boardPlaceholder_svg__o)"><rect width="108" height="108" x="54" y="414" fill="#baac9a" rx="10" style="fill:#baac9a;fill:color(display-p3 .7306 .6758 .6028);fill-opacity:1"/></g><g filter="url(#boardPlaceholder_svg__p)"><rect width="108" height="108" x="174" y="414" fill="#baac9a" rx="10" style="fill:#baac9a;fill:color(display-p3 .7306 .6758 .6028);fill-opacity:1"/></g><g filter="url(#boardPlaceholder_svg__q)"><rect width="108" height="108" x="294" y="414" fill="#baac9a" rx="10" style="fill:#baac9a;fill:color(display-p3 .7306 .6758 .6028);fill-opacity:1"/></g><g filter="url(#boardPlaceholder_svg__r)"><rect width="108" height="108" x="414" y="414" fill="#baac9a" rx="10" style="fill:#baac9a;fill:color(display-p3 .7306 .6758 .6028);fill-opacity:1"/></g><defs><filter id="boardPlaceholder_svg__a" width="552" height="552" x="12" y="22" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="10"/><feGaussianBlur stdDeviation="15"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.548333 0 0 0 0 0.391667 0 0 0 0 0.235 0 0 0 0.18 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.548333 0 0 0 0 0.391667 0 0 0 0 0.235 0 0 0 0.13 0"/><feBlend in2="effect1_dropShadow_893_2283" result="effect2_dropShadow_893_2283"/><feBlend in="SourceGraphic" in2="effect2_dropShadow_893_2283" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/><feBlend in2="shape" result="effect3_innerShadow_893_2283"/></filter><filter id="boardPlaceholder_svg__c" width="108" height="114" x="54" y="50" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.075 0"/><feBlend in2="effect1_innerShadow_893_2283" result="effect2_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.259553 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2283" result="effect3_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2283" result="effect4_innerShadow_893_2283"/></filter><filter id="boardPlaceholder_svg__d" width="108" height="114" x="174" y="50" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.075 0"/><feBlend in2="effect1_innerShadow_893_2283" result="effect2_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.259553 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2283" result="effect3_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2283" result="effect4_innerShadow_893_2283"/></filter><filter id="boardPlaceholder_svg__e" width="108" height="114" x="294" y="50" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.075 0"/><feBlend in2="effect1_innerShadow_893_2283" result="effect2_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.259553 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2283" result="effect3_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2283" result="effect4_innerShadow_893_2283"/></filter><filter id="boardPlaceholder_svg__f" width="108" height="114" x="414" y="50" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.075 0"/><feBlend in2="effect1_innerShadow_893_2283" result="effect2_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.259553 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2283" result="effect3_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2283" result="effect4_innerShadow_893_2283"/></filter><filter id="boardPlaceholder_svg__g" width="108" height="114" x="54" y="170" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.075 0"/><feBlend in2="effect1_innerShadow_893_2283" result="effect2_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.259553 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2283" result="effect3_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2283" result="effect4_innerShadow_893_2283"/></filter><filter id="boardPlaceholder_svg__h" width="108" height="114" x="174" y="170" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.075 0"/><feBlend in2="effect1_innerShadow_893_2283" result="effect2_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.259553 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2283" result="effect3_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2283" result="effect4_innerShadow_893_2283"/></filter><filter id="boardPlaceholder_svg__i" width="108" height="114" x="294" y="170" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.075 0"/><feBlend in2="effect1_innerShadow_893_2283" result="effect2_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.259553 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2283" result="effect3_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2283" result="effect4_innerShadow_893_2283"/></filter><filter id="boardPlaceholder_svg__j" width="108" height="114" x="414" y="170" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.075 0"/><feBlend in2="effect1_innerShadow_893_2283" result="effect2_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.259553 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2283" result="effect3_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2283" result="effect4_innerShadow_893_2283"/></filter><filter id="boardPlaceholder_svg__k" width="108" height="114" x="54" y="290" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.075 0"/><feBlend in2="effect1_innerShadow_893_2283" result="effect2_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.259553 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2283" result="effect3_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2283" result="effect4_innerShadow_893_2283"/></filter><filter id="boardPlaceholder_svg__l" width="108" height="114" x="174" y="290" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.075 0"/><feBlend in2="effect1_innerShadow_893_2283" result="effect2_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.259553 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2283" result="effect3_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2283" result="effect4_innerShadow_893_2283"/></filter><filter id="boardPlaceholder_svg__m" width="108" height="114" x="294" y="290" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.075 0"/><feBlend in2="effect1_innerShadow_893_2283" result="effect2_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.259553 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2283" result="effect3_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2283" result="effect4_innerShadow_893_2283"/></filter><filter id="boardPlaceholder_svg__n" width="108" height="114" x="414" y="290" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.075 0"/><feBlend in2="effect1_innerShadow_893_2283" result="effect2_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.259553 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2283" result="effect3_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2283" result="effect4_innerShadow_893_2283"/></filter><filter id="boardPlaceholder_svg__o" width="108" height="114" x="54" y="410" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.075 0"/><feBlend in2="effect1_innerShadow_893_2283" result="effect2_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.259553 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2283" result="effect3_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2283" result="effect4_innerShadow_893_2283"/></filter><filter id="boardPlaceholder_svg__p" width="108" height="114" x="174" y="410" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.075 0"/><feBlend in2="effect1_innerShadow_893_2283" result="effect2_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.259553 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2283" result="effect3_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2283" result="effect4_innerShadow_893_2283"/></filter><filter id="boardPlaceholder_svg__q" width="108" height="114" x="294" y="410" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.075 0"/><feBlend in2="effect1_innerShadow_893_2283" result="effect2_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.259553 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2283" result="effect3_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2283" result="effect4_innerShadow_893_2283"/></filter><filter id="boardPlaceholder_svg__r" width="108" height="114" x="414" y="410" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.075 0"/><feBlend in2="effect1_innerShadow_893_2283" result="effect2_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.259553 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2283" result="effect3_innerShadow_893_2283"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2283" result="effect4_innerShadow_893_2283"/></filter><linearGradient id="boardPlaceholder_svg__b" x1="288" x2="288" y1="42" y2="534" gradientUnits="userSpaceOnUse"><stop stop-color="#998c7e" style="stop-color:#998c7e;stop-color:color(display-p3 .6 .5475 .495);stop-opacity:1"/><stop offset="1" stop-color="#988776" style="stop-color:#988776;stop-color:color(display-p3 .5958 .53 .4642);stop-opacity:1"/></linearGradient></defs>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "576"
      }, {
        height: "576"
      }, {
        fill: "none"
      }, {
        viewBox: "0 0 576 576"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function Gc(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class Dc extends Zn {
  constructor(e) {
    super(), Jn(this, e, Gc, Ec, h, {})
  }
}

function Ic(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "576"
    }, {
      height: "576"
    }, {
      fill: "none"
    }, {
      viewBox: "0 0 576 576"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<g filter="url(#boardPlaceholderDark_svg__a)"><rect width="492" height="492" x="42" y="42" fill="url(#boardPlaceholderDark_svg__b)" rx="22"/></g><g filter="url(#boardPlaceholderDark_svg__c)"><rect width="108" height="108" x="54" y="54" fill="#6b665b" rx="10" style="fill:#6b665b;fill:color(display-p3 .4212 .4 .3588);fill-opacity:1"/></g><g filter="url(#boardPlaceholderDark_svg__d)"><rect width="108" height="108" x="174" y="54" fill="#6b665b" rx="10" style="fill:#6b665b;fill:color(display-p3 .4212 .4 .3588);fill-opacity:1"/></g><g filter="url(#boardPlaceholderDark_svg__e)"><rect width="108" height="108" x="294" y="54" fill="#6b665b" rx="10" style="fill:#6b665b;fill:color(display-p3 .4212 .4 .3588);fill-opacity:1"/></g><g filter="url(#boardPlaceholderDark_svg__f)"><rect width="108" height="108" x="414" y="54" fill="#6b665b" rx="10" style="fill:#6b665b;fill:color(display-p3 .4212 .4 .3588);fill-opacity:1"/></g><g filter="url(#boardPlaceholderDark_svg__g)"><rect width="108" height="108" x="54" y="174" fill="#6b665b" rx="10" style="fill:#6b665b;fill:color(display-p3 .4212 .4 .3588);fill-opacity:1"/></g><g filter="url(#boardPlaceholderDark_svg__h)"><rect width="108" height="108" x="174" y="174" fill="#6b665b" rx="10" style="fill:#6b665b;fill:color(display-p3 .4212 .4 .3588);fill-opacity:1"/></g><g filter="url(#boardPlaceholderDark_svg__i)"><rect width="108" height="108" x="294" y="174" fill="#6b665b" rx="10" style="fill:#6b665b;fill:color(display-p3 .4212 .4 .3588);fill-opacity:1"/></g><g filter="url(#boardPlaceholderDark_svg__j)"><rect width="108" height="108" x="414" y="174" fill="#6b665b" rx="10" style="fill:#6b665b;fill:color(display-p3 .4212 .4 .3588);fill-opacity:1"/></g><g filter="url(#boardPlaceholderDark_svg__k)"><rect width="108" height="108" x="54" y="294" fill="#6b665b" rx="10" style="fill:#6b665b;fill:color(display-p3 .4212 .4 .3588);fill-opacity:1"/></g><g filter="url(#boardPlaceholderDark_svg__l)"><rect width="108" height="108" x="174" y="294" fill="#6b665b" rx="10" style="fill:#6b665b;fill:color(display-p3 .4212 .4 .3588);fill-opacity:1"/></g><g filter="url(#boardPlaceholderDark_svg__m)"><rect width="108" height="108" x="294" y="294" fill="#6b665b" rx="10" style="fill:#6b665b;fill:color(display-p3 .4212 .4 .3588);fill-opacity:1"/></g><g filter="url(#boardPlaceholderDark_svg__n)"><rect width="108" height="108" x="414" y="294" fill="#6b665b" rx="10" style="fill:#6b665b;fill:color(display-p3 .4212 .4 .3588);fill-opacity:1"/></g><g filter="url(#boardPlaceholderDark_svg__o)"><rect width="108" height="108" x="54" y="414" fill="#6b665b" rx="10" style="fill:#6b665b;fill:color(display-p3 .4212 .4 .3588);fill-opacity:1"/></g><g filter="url(#boardPlaceholderDark_svg__p)"><rect width="108" height="108" x="174" y="414" fill="#6b665b" rx="10" style="fill:#6b665b;fill:color(display-p3 .4212 .4 .3588);fill-opacity:1"/></g><g filter="url(#boardPlaceholderDark_svg__q)"><rect width="108" height="108" x="294" y="414" fill="#6b665b" rx="10" style="fill:#6b665b;fill:color(display-p3 .4212 .4 .3588);fill-opacity:1"/></g><g filter="url(#boardPlaceholderDark_svg__r)"><rect width="108" height="108" x="414" y="414" fill="#6b665b" rx="10" style="fill:#6b665b;fill:color(display-p3 .4212 .4 .3588);fill-opacity:1"/></g><defs><filter id="boardPlaceholderDark_svg__a" width="552" height="552" x="12" y="22" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="10"/><feGaussianBlur stdDeviation="15"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.301961 0 0 0 0 0.294118 0 0 0 0 0.258824 0 0 0 0.18 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.548333 0 0 0 0 0.391667 0 0 0 0 0.235 0 0 0 0.13 0"/><feBlend in2="effect1_dropShadow_893_2285" result="effect2_dropShadow_893_2285"/><feBlend in="SourceGraphic" in2="effect2_dropShadow_893_2285" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/><feBlend in2="shape" result="effect3_innerShadow_893_2285"/></filter><filter id="boardPlaceholderDark_svg__c" width="108" height="114" x="54" y="50" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="effect1_innerShadow_893_2285" result="effect2_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.323484 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2285" result="effect3_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2285" result="effect4_innerShadow_893_2285"/></filter><filter id="boardPlaceholderDark_svg__d" width="108" height="114" x="174" y="50" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="effect1_innerShadow_893_2285" result="effect2_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.323484 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2285" result="effect3_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2285" result="effect4_innerShadow_893_2285"/></filter><filter id="boardPlaceholderDark_svg__e" width="108" height="114" x="294" y="50" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="effect1_innerShadow_893_2285" result="effect2_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.323484 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2285" result="effect3_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2285" result="effect4_innerShadow_893_2285"/></filter><filter id="boardPlaceholderDark_svg__f" width="108" height="114" x="414" y="50" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="effect1_innerShadow_893_2285" result="effect2_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.323484 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2285" result="effect3_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2285" result="effect4_innerShadow_893_2285"/></filter><filter id="boardPlaceholderDark_svg__g" width="108" height="114" x="54" y="170" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="effect1_innerShadow_893_2285" result="effect2_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.323484 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2285" result="effect3_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2285" result="effect4_innerShadow_893_2285"/></filter><filter id="boardPlaceholderDark_svg__h" width="108" height="114" x="174" y="170" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="effect1_innerShadow_893_2285" result="effect2_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.323484 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2285" result="effect3_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2285" result="effect4_innerShadow_893_2285"/></filter><filter id="boardPlaceholderDark_svg__i" width="108" height="114" x="294" y="170" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="effect1_innerShadow_893_2285" result="effect2_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.323484 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2285" result="effect3_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2285" result="effect4_innerShadow_893_2285"/></filter><filter id="boardPlaceholderDark_svg__j" width="108" height="114" x="414" y="170" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="effect1_innerShadow_893_2285" result="effect2_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.323484 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2285" result="effect3_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2285" result="effect4_innerShadow_893_2285"/></filter><filter id="boardPlaceholderDark_svg__k" width="108" height="114" x="54" y="290" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="effect1_innerShadow_893_2285" result="effect2_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.323484 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2285" result="effect3_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2285" result="effect4_innerShadow_893_2285"/></filter><filter id="boardPlaceholderDark_svg__l" width="108" height="114" x="174" y="290" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="effect1_innerShadow_893_2285" result="effect2_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.323484 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2285" result="effect3_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2285" result="effect4_innerShadow_893_2285"/></filter><filter id="boardPlaceholderDark_svg__m" width="108" height="114" x="294" y="290" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="effect1_innerShadow_893_2285" result="effect2_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.323484 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2285" result="effect3_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2285" result="effect4_innerShadow_893_2285"/></filter><filter id="boardPlaceholderDark_svg__n" width="108" height="114" x="414" y="290" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="effect1_innerShadow_893_2285" result="effect2_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.323484 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2285" result="effect3_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2285" result="effect4_innerShadow_893_2285"/></filter><filter id="boardPlaceholderDark_svg__o" width="108" height="114" x="54" y="410" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="effect1_innerShadow_893_2285" result="effect2_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.323484 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2285" result="effect3_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2285" result="effect4_innerShadow_893_2285"/></filter><filter id="boardPlaceholderDark_svg__p" width="108" height="114" x="174" y="410" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="effect1_innerShadow_893_2285" result="effect2_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.323484 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2285" result="effect3_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2285" result="effect4_innerShadow_893_2285"/></filter><filter id="boardPlaceholderDark_svg__q" width="108" height="114" x="294" y="410" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="effect1_innerShadow_893_2285" result="effect2_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.323484 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2285" result="effect3_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2285" result="effect4_innerShadow_893_2285"/></filter><filter id="boardPlaceholderDark_svg__r" width="108" height="114" x="414" y="410" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="effect1_innerShadow_893_2285" result="effect2_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.323484 0 0 0 0 0.0768924 0 0 0 0.18 0"/><feBlend in2="effect2_innerShadow_893_2285" result="effect3_innerShadow_893_2285"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/><feBlend in2="effect3_innerShadow_893_2285" result="effect4_innerShadow_893_2285"/></filter><linearGradient id="boardPlaceholderDark_svg__b" x1="288" x2="288" y1="42" y2="534" gradientUnits="userSpaceOnUse"><stop stop-color="#54514a" style="stop-color:#54514a;stop-color:color(display-p3 .3286 .3168 .2914);stop-opacity:1"/><stop offset="1" stop-color="#504c44" style="stop-color:#504c44;stop-color:color(display-p3 .3132 .2993 .2668);stop-opacity:1"/></linearGradient></defs>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "576"
      }, {
        height: "576"
      }, {
        fill: "none"
      }, {
        viewBox: "0 0 576 576"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function Lc(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class qc extends Zn {
  constructor(e) {
    super(), Jn(this, e, Lc, Ic, h, {})
  }
}
const zc = M("stores/resolution"),
  Fc = D(jc(), e => {
    var t;
    ! function() {
      let t;
      t = function n() {
        return Nc(`(resolution: ${window.devicePixelRatio}dppx)`, () => {
          window.devicePixelRatio, e(jc()), t(), t = n()
        })
      }()
    }(), t = () => e(jc()), Nc(Le.sm, t)
  });

function jc() {
  const e = window.devicePixelRatio,
    t = e < 1.5 ? e : Math.min(1.5 * e, [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)][0] < parseInt(Fe.sm, 10) ? 2 : 3);
  return t < 1 ? 1 : Math.ceil(4 * t) / 4
}

function Nc(e, t) {
  const n = window.matchMedia(e),
    r = () => t();
  return n.addEventListener("change", r),
    function() {
      n.removeEventListener("change", r)
    }
}
Fc.subscribe(e => {
  zc(`dpr: ${window.devicePixelRatio} -> resolution: ${e}`)
});
const Rc = M("Resources");
let Uc;
const Wc = new Map;
let Hc;

function Vc(e) {
  return Kc(e)
}

function Kc(e, t = !1) {
  if (Wc.has(e)) return v(!t, `Attempted to pre-render a resource that is already cached: ${e}`), Rc(`returning pre-rendered resource "${e}"`), Wc.get(e);
  {
    t || Rc(`just-in-time rendering ${e}`);
    const n = async function(e) {
      const t = await
      function(e) {
        return new Promise((t, n) => {
          const r = new Image;
          r.width = e.width * Hc, r.height = e.height * Hc, r.style.position = "fixed", r.style.top = "100vh", r.style.left = "100vw", r.style.visibility = "hidden", r.style.opacity = "0", r.style.pointerEvents = "none", r.style.userSelect = "none", document.body.appendChild(r), r.onload = () => requestAnimationFrame(() => t(r)), r.onerror = n;
          const o = e.dataURL.replace("%3Csvg", encodeURIComponent(`\x3c!-- ${Date.now()+Math.random()} --\x3e<svg`));
          r.src = o
        })
      }(e), n = await createImageBitmap(t, {
        resizeWidth: e.width * Hc,
        resizeHeight: e.height * Hc
      });
      return t.remove(), n
    }(Ne[e]);
    return Uc.splice(Uc.indexOf(e), 1), Wc.set(e, n), n
  }
}
async function Yc() {
  const e = Uc[0];
  if (!e) return void Rc("all resources pre-rendered");
  const t = je();
  await Kc(e, !0), Rc(`pre-rendered resource "${e}" at resolution ${Hc} (${t.durationMs()})`), qe(Yc)
}
Fc.subscribe(e => {
  Hc = e, Rc("clearing resource cache and re-rendering"), Wc.clear(), Uc = Object.keys(Ne), qe(Yc)
});
const Qc = M("DirectBroker");
class Xc extends Re {
  constructor(e) {
    super(e), this.events = new wi, this.terminated = !1
  }
  connect(e) {
    this.otherBroker = e
  }
  autoConnect(e) {
    this.connect(e), e.connect(this)
  }
  async call(e, t) {
    return this.terminated ? Promise.reject(new Error("DirectBroker cannot send calls because it has been terminated")) : (this.ensureConnected(), Qc(`call: ${String(e)}`, t), this.otherBroker.handleCall(e, t))
  }
  async handleCall(e, t) {
    v(!this.terminated, "Broker is terminated");
    const n = this.callImplementations[e];
    return v(n, `No handler for call ${String(e)}`), await n(...t)
  }
  addListener(e, t) {
    this.terminated || this.otherBroker.handleAddListener(e, t)
  }
  removeListener(e, t) {
    this.otherBroker.handleRemoveListener(e, t)
  }
  removeAllListeners() {
    throw new Error("removeAllListeners is not implemented")
  }
  emit(e, t) {
    this.events.emit(e, ...t)
  }
  handleAddListener(e, t) {
    this.events.addListener(e, t)
  }
  handleRemoveListener(e, t) {
    this.events.removeListener(e, t)
  }
  destroy() {
    this.terminated = !0, this.events.removeAllListeners()
  }
  ensureConnected() {
    v(this.otherBroker, "Broker is not connected")
  }
}
const Jc = M("renderGame");
let Zc, eu, tu;
Jc("early initializing worker");
try {
  const e = new function() {
    return new Worker(new URL("worker-BAgBm6Gi.js", import.meta.url).href, {
      type: "module"
    })
  };
  Zc = function(e) {
    return new We(t => e.onmessage = t, (t, n) => e.postMessage(t, n), {
      async getImageBitmapForSVGResource(e) {
        const t = await createImageBitmap(await Vc(e));
        return {
          response: t,
          transfer: [t]
        }
      }
    })
  }(e)
} catch (lv) {
  console.error("worker was unable to start"), hr.set(!0), Zc = void 0, K(lv)
}

function nu(e) {
  Jc("emitting debugNamespaceChange"), Zc.emit("debugNamespaceChange", [e])
}
async function ru() {
  await tu, eu ? (Jc("destroyRenderer: destroying previous renderer"), tu = eu(), eu = void 0, await tu) : Jc("destroyRenderer: nothing to destroy")
}

function ou(e) {
  let t, n = e[3],
    r = iu(e);
  return {
    c() {
      r.c(), t = Et()
    },
    m(e, n) {
      r.m(e, n), Ct(e, t, n)
    },
    p(e, o) {
      8 & o && h(n, n = e[3]) ? (r.d(1), r = iu(e), r.c(), r.m(t.parentNode, t)) : r.p(e, o)
    },
    d(e) {
      e && At(t), r.d(e)
    }
  }
}

function iu(e) {
  let t, n, r, o;
  return {
    c() {
      t = Mt("canvas"), Dt(t, "style", `width: ${100*Qe.width}% !important; height: ${100*Qe.height}% !important`), Dt(t, "class", n = "absolute touch-none object-contain " + (e[0] ? "opacity-0" : ""))
    },
    m(n, i) {
      Ct(n, t, i), e[12](t), r || (o = [Gt(t, "pointermove", e[6]("pointerMove")), Gt(t, "pointerdown", e[6]("pointerDown")), Gt(t, "pointerleave", e[6]("pointerLeave"))], r = !0)
    },
    p(e, r) {
      1 & r && n !== (n = "absolute touch-none object-contain " + (e[0] ? "opacity-0" : "")) && Dt(t, "class", n)
    },
    d(n) {
      n && At(t), e[12](null), r = !1, i(o)
    }
  }
}

function au(e) {
  let t, n, r, o, i, a;
  return i = new Wa({
    props: {
      class: "underline",
      to: ka,
      $$slots: {
        default: [lu]
      },
      $$scope: {
        ctx: e
      }
    }
  }), i.$on("click", e[13]), {
    c() {
      t = Mt("div"), n = Mt("div"), r = Mt("p"), o = Pt("Something went wrong while starting the game.\n\n          "), Yn(i.$$.fragment), Dt(n, "class", "tooltip-material rounded-lg p-4 text-lg text-white"), Dt(t, "class", "absolute inset-0 flex items-center justify-center p-8 text-center")
    },
    m(e, l) {
      Ct(e, t, l), bt(t, n), bt(n, r), bt(r, o), Qn(i, r, null), a = !0
    },
    i(e) {
      a || (qn(i.$$.fragment, e), a = !0)
    },
    o(e) {
      zn(i.$$.fragment, e), a = !1
    },
    d(e) {
      e && At(t), Xn(i)
    }
  }
}

function lu(e) {
  let t;
  return {
    c() {
      t = Pt("Click here for help.")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function su(e) {
  let t, n, r, o, i;
  var a = e[2] === Ve.Default ? Dc : qc;

  function l(e, t) {
    return {
      props: {
        style: `width: ${100*Qe.width}% !important; height: ${100*Qe.height}% !important`,
        class: "pointer-events-none absolute transform-gpu touch-none " + (e[0] ? "" : "opacity-0")
      }
    }
  }
  a && (n = tn(a, l(e)));
  let s = !e[1] && ou(e),
    c = e[5] && au(e);
  return {
    c() {
      t = Mt("div"), n && Yn(n.$$.fragment), r = Tt(), s && s.c(), o = Tt(), c && c.c(), Dt(t, "class", "relative flex items-center justify-center"), Dt(t, "style", `max-width: ${Ke.width}px; width: 100%; height: 100%`)
    },
    m(e, a) {
      Ct(e, t, a), n && Qn(n, t, null), bt(t, r), s && s.m(t, null), bt(t, o), c && c.m(t, null), i = !0
    },
    p(e, [i]) {
      if (4 & i && a !== (a = e[2] === Ve.Default ? Dc : qc)) {
        if (n) {
          In();
          const e = n;
          zn(e.$$.fragment, 1, 0, () => {
            Xn(e, 1)
          }), Ln()
        }
        a ? (n = tn(a, l(e)), Yn(n.$$.fragment), qn(n.$$.fragment, 1), Qn(n, t, r)) : n = null
      } else if (a) {
        const t = {};
        1 & i && (t.class = "pointer-events-none absolute transform-gpu touch-none " + (e[0] ? "" : "opacity-0")), n.$set(t)
      }
      e[1] ? s && (s.d(1), s = null) : s ? s.p(e, i) : (s = ou(e), s.c(), s.m(t, o)), e[5] ? c ? 32 & i && qn(c, 1) : (c = au(e), c.c(), qn(c, 1), c.m(t, null)) : c && (In(), zn(c, 1, 1, () => {
        c = null
      }), Ln())
    },
    i(e) {
      i || (n && qn(n.$$.fragment, e), qn(c), i = !0)
    },
    o(e) {
      n && zn(n.$$.fragment, e), zn(c), i = !1
    },
    d(e) {
      e && At(t), n && Xn(n), s && s.d(), c && c.d()
    }
  }
}

function cu(e, t, n) {
  let r, o, i, a, l, s, c;
  E(e, sa, e => n(9, o = e)), E(e, mr, e => n(10, i = e)), E(e, fr, e => n(19, a = e)), E(e, hr, e => n(20, l = e)), E(e, Ye, e => n(21, s = e)), E(e, Fc, e => n(11, c = e));
  const u = M("GameRenderer");
  let d, f, p, {
      disabled: h = !1
    } = t,
    {
      displayPlaceholder: m = !0
    } = t,
    {
      visualStyle: g = Ve.Default
    } = t,
    $ = 0,
    w = new Set,
    y = !1,
    x = !1,
    b = 0,
    _ = null;

  function C() {
    if (u("renderer ready"), !a && (W(fr, a = !0, a), "undefined" != typeof performance)) {
      const e = performance.measure("renderer ready");
      e && (u("timeToFirstTile: %sms", e.duration.toFixed(2)), zi.timeToFirstTile(e.duration, i))
    }
    n(0, m = !1)
  }

  function S(e) {
    v(_, "currently initialized, but broker is null"), e !== p ? (p = e, _.call("update", [lr(e)]).catch(e => {
      u("update failed, reinitializing renderer: %o", e), A()
    })) : u("skipping update, already sent")
  }

  function A() {
    n(8, b = 1), n(7, $++, $)
  }
  return dn(() => n(8, b = 1)), fn(ru), e.$$set = e => {
    "disabled" in e && n(1, h = e.disabled), "displayPlaceholder" in e && n(0, m = e.displayPlaceholder), "visualStyle" in e && n(2, g = e.visualStyle)
  }, e.$$.update = () => {
    var t;
    3202 & e.$$.dirty && n(3, r = [h, i, c, $].toString()), 8 & e.$$.dirty && r && (u("canvas changed: %o", r), async function() {
      if (!h) {
        if (2 === b) return u("already initializing, queuing retry (probably attempted to reinitialize twice in quick succession)"), void(y = !0);
        y = !1, u("initializing new renderer ($useWorker: %o, $resolution: %o)", i, c), n(8, b = 2), w.clear(), f = void 0, sa.sanitize(), requestAnimationFrame(() => {
          (async function(e, t, n, r) {
            return Jc("renderGame called with useWorker=%o", e), await ru(), e && Zc ? async function(e, t, n, r) {
              eu = async () => {
                await t.call("destroy", []), t.removeAllListeners()
              }, r(t);
              const o = e.transferControlToOffscreen();
              try {
                return await t.call("init", {
                  args: [{
                    canvas: o,
                    ...n
                  }],
                  transfer: [o]
                }), t
              } catch (lv) {
                throw Jc("error during renderGameUsingWorker, destroying current renderer and throwing. %o", lv), ru(), lv
              }
            }(t, Zc, n, r): async function(e, t, n) {
              const r = new Xc({
                  getImageBitmapForSVGResource: Vc
                }),
                o = new Xc({
                  init: e => i.init(e),
                  update: e => i.update(e),
                  destroy: () => i.destroy()
                });
              r.autoConnect(o);
              const i = new He(o);
              eu = async () => {
                r.call("destroy", []), r.destroy(), o.destroy()
              }, n(r);
              try {
                return await r.call("init", [{
                  canvas: e,
                  ...t
                }]), r
              } catch (lv) {
                throw Jc("error during renderGameUsingMainThread, destroying current renderer and throwing. %o", lv), ru(), lv
              }
            }(t, n, r)
          })(i, d, {
            boardSize: k(o.board),
            resolution: c,
            visualStyle: g
          }, e => {
            e.addListener("fps", e => W(Ye, s = e, s)), e.addListener("selection", e => sa.select(e)), e.addListener("debugNamespaceRegistered", Xe), e.addListener("ready", C)
          }).then(e => {
            u("renderer initialized (useWorker: %o)", i), _ = e, y ? (u("init retry queued, reinitializing"), A()) : (zi.rendererInitialized(i, !a), n(8, b = 3))
          }).catch(() => {
            u("renderer initialization failed (useWorker: %o)", i), _ = null, n(8, b = 1), i ? (u("retrying with main thread renderer"), W(hr, l = !0, l)) : (u("main thread renderer failed, displaying error"), n(5, x = !0), zi.allRenderersFailed(pr, a, l, i))
          })
        })
      }
    }()), 769 & e.$$.dirty && (3 !== b || m ? (t = o, w.has(t) || (void 0 !== f && t.id !== f.id && (u("gameplay queued with different id, clearing queue(before: %o, after: %o)", null == f ? void 0 : f.id, t.id), w.clear()), u("update queued(not sent) - startupState: %o, displayPlaceholder: %o", b, m), w.add(t), f = t)) : (function() {
      if (0 === w.size) return;
      u("flushing %d updates", w.size);
      const e = w;
      w = new Set, e.forEach(S)
    }(), S(o)))
  }, [m, h, g, r, d, x, e => t => {
    if (3 !== b) return;
    if (!(t.target instanceof HTMLElement)) return;
    const n = t.target.getBoundingClientRect(),
      r = n.width / n.height;
    let o = t.offsetX / n.width,
      i = t.offsetY / n.height;
    r > 1 ? o = (o - .5) * r + .5 : i = (i - .5) / r + .5, null == _ || _.emit(e, [o, i])
  }, $, b, o, i, c, function(e) {
    $n[e ? "unshift" : "push"](() => {
      d = e, n(4, d)
    })
  }, () => zi.troubleshootingClicked("GameRenderer")]
}
null == Zc || Zc.addListener("listening", function e() {
  Jc("worker listening, emitting debugNamespaceChange"), Ue.subscribe(nu), Zc.removeListener("listening", e)
});
class uu extends Zn {
  constructor(e) {
    super(), Jn(this, e, cu, su, h, {
      disabled: 1,
      displayPlaceholder: 0,
      visualStyle: 2
    })
  }
}

function du(e) {
  let t, n;
  return t = new uu({}), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p: r,
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function fu(e, t, n) {
  let r;
  return E(e, J, e => n(0, r = e)), W(J, r = Z.Classic, r), []
}
class pu extends Zn {
  constructor(e) {
    super(), Jn(this, e, fu, du, h, {})
  }
}

function hu(e, t, n) {
  const r = e.slice();
  return r[1] = t[n], r
}

function mu(e) {
  let t, n, r, o, i = e[1].title + "";
  return {
    c() {
      t = Mt("div"), n = Pt(i), r = Tt(), Dt(t, "class", o = "flex grow items-center justify-center " + (e[4] ? "bg-brown/60 text-white" : "bg-transparent"))
    },
    m(e, o) {
      Ct(e, t, o), bt(t, n), bt(t, r)
    },
    p(e, r) {
      1 & r && i !== (i = e[1].title + "") && Ht(n, i), 16 & r && o !== (o = "flex grow items-center justify-center " + (e[4] ? "bg-brown/60 text-white" : "bg-transparent")) && Dt(t, "class", o)
    },
    d(e) {
      e && At(t)
    }
  }
}

function gu(e) {
  let t, n;
  return t = new Wa({
    props: {
      class: "flex grow basis-0",
      to: e[1].path,
      $$slots: {
        default: [mu, ({
          active: e
        }) => ({
          4: e
        }), ({
          active: e
        }) => e ? 16 : 0]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, n) {
      const r = {};
      1 & n && (r.to = e[1].path), 49 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function vu(e) {
  let t, n, r = Wn(e[0]),
    o = [];
  for (let a = 0; a < r.length; a += 1) o[a] = gu(hu(e, r, a));
  const i = e => zn(o[e], 1, 1, () => {
    o[e] = null
  });
  return {
    c() {
      t = Mt("div");
      for (let e = 0; e < o.length; e += 1) o[e].c();
      Dt(t, "class", "bg-sand flex h-14 overflow-hidden rounded-lg font-medium")
    },
    m(e, r) {
      Ct(e, t, r);
      for (let n = 0; n < o.length; n += 1) o[n] && o[n].m(t, null);
      n = !0
    },
    p(e, [n]) {
      if (17 & n) {
        let a;
        for (r = Wn(e[0]), a = 0; a < r.length; a += 1) {
          const i = hu(e, r, a);
          o[a] ? (o[a].p(i, n), qn(o[a], 1)) : (o[a] = gu(i), o[a].c(), qn(o[a], 1), o[a].m(t, null))
        }
        for (In(), a = r.length; a < o.length; a += 1) i(a);
        Ln()
      }
    },
    i(e) {
      if (!n) {
        for (let e = 0; e < r.length; e += 1) qn(o[e]);
        n = !0
      }
    },
    o(e) {
      o = o.filter(Boolean);
      for (let t = 0; t < o.length; t += 1) zn(o[t]);
      n = !1
    },
    d(e) {
      e && At(t), Bt(o, e)
    }
  }
}

function $u(e, t, n) {
  let {
    pages: r
  } = t;
  return e.$$set = e => {
    "pages" in e && n(0, r = e.pages)
  }, [r]
}
class wu extends Zn {
  constructor(e) {
    super(), Jn(this, e, $u, vu, h, {
      pages: 0
    })
  }
}

function yu(e) {
  let t, n;
  return t = new wu({
    props: {
      pages: [{
        path: xa,
        title: "Privacy Policy"
      }, {
        path: ba,
        title: "Cookie Policy"
      }]
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p: r,
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function xu(e) {
  return []
}
class bu extends Zn {
  constructor(e) {
    super(), Jn(this, e, xu, yu, h, {})
  }
}

function _u(e) {
  let t;
  return {
    c() {
      t = Mt("p"), t.textContent = `Something went wrong. ${K(e[2])}`
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function ku(e) {
  let t, n, r;
  var o = e[1].default;
  return o && (t = tn(o, {})), {
    c() {
      t && Yn(t.$$.fragment), n = Et()
    },
    m(e, o) {
      t && Qn(t, e, o), Ct(e, n, o), r = !0
    },
    p(e, r) {
      if (o !== (o = e[1].default)) {
        if (t) {
          In();
          const e = t;
          zn(e.$$.fragment, 1, 0, () => {
            Xn(e, 1)
          }), Ln()
        }
        o ? (t = tn(o, {}), Yn(t.$$.fragment), qn(t.$$.fragment, 1), Qn(t, n.parentNode, n)) : t = null
      }
    },
    i(e) {
      r || (t && qn(t.$$.fragment, e), r = !0)
    },
    o(e) {
      t && zn(t.$$.fragment, e), r = !1
    },
    d(e) {
      e && At(n), t && Xn(t, e)
    }
  }
}

function Cu(e) {
  let t;
  return {
    c() {
      t = Mt("p"), t.textContent = "Loading..."
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function Su(e) {
  let t, n, r = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Cu,
    then: ku,
    catch: _u,
    value: 1,
    error: 2,
    blocks: [, , , ]
  };
  return Rn(e[0], r), {
    c() {
      t = Et(), r.block.c()
    },
    m(e, o) {
      Ct(e, t, o), r.block.m(e, r.anchor = o), r.mount = () => t.parentNode, r.anchor = t, n = !0
    },
    p(t, n) {
      Un(r, e = t, n)
    },
    i(e) {
      n || (qn(r.block), n = !0)
    },
    o(e) {
      for (let t = 0; t < 3; t += 1) zn(r.blocks[t]);
      n = !1
    },
    d(e) {
      e && At(t), r.block.d(e), r.token = null, r = null
    }
  }
}

function Au(e) {
  let t, n, r, o;
  return t = new bu({}), r = new Cc({
    props: {
      class: "mt-4",
      $$slots: {
        default: [Su]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      Yn(t.$$.fragment), n = Tt(), Yn(r.$$.fragment)
    },
    m(e, i) {
      Qn(t, e, i), Ct(e, n, i), Qn(r, e, i), o = !0
    },
    p(e, [t]) {
      const n = {};
      8 & t && (n.$$scope = {
        dirty: t,
        ctx: e
      }), r.$set(n)
    },
    i(e) {
      o || (qn(t.$$.fragment, e), qn(r.$$.fragment, e), o = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), zn(r.$$.fragment, e), o = !1
    },
    d(e) {
      e && At(n), Xn(t, e), Xn(r, e)
    }
  }
}

function Bu(e) {
  return [pt(() => import("./AsyncContent-C0tABNj_.js"), [])]
}
class Mu extends Zn {
  constructor(e) {
    super(), Jn(this, e, Bu, Au, h, {})
  }
}

function Ou(e) {
  let t;
  return {
    c() {
      t = Pt("Click here to go back home.")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Pu(e) {
  let t, n, r, o, i, a, l, s, c, u;
  return c = new Wa({
    props: {
      to: va,
      class: "underline",
      $$slots: {
        default: [Ou]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      t = Mt("div"), n = Mt("div"), r = Mt("h1"), r.textContent = "404 — Not Found", o = Tt(), i = Mt("p"), a = Pt("The page you are looking for does not exist. "), l = Mt("br"), s = Tt(), Yn(c.$$.fragment), Dt(r, "class", "mb-4 text-4xl font-medium"), Dt(n, "class", "bg-sand rounded-lg p-8 text-center"), Dt(t, "class", "flex h-screen w-screen items-center justify-center")
    },
    m(e, d) {
      Ct(e, t, d), bt(t, n), bt(n, r), bt(n, o), bt(n, i), bt(i, a), bt(i, l), bt(i, s), Qn(c, i, null), u = !0
    },
    p(e, [t]) {
      const n = {};
      1 & t && (n.$$scope = {
        dirty: t,
        ctx: e
      }), c.$set(n)
    },
    i(e) {
      u || (qn(c.$$.fragment, e), u = !0)
    },
    o(e) {
      zn(c.$$.fragment, e), u = !1
    },
    d(e) {
      e && At(t), Xn(c)
    }
  }
}

function Tu(e) {
  return []
}
class Eu extends Zn {
  constructor(e) {
    super(), Jn(this, e, Tu, Pu, h, {})
  }
}

function Gu(e) {
  let t, n;
  return t = new uu({
    props: {
      disabled: e[0] !== zs.Available && e[0] !== zs.Expired,
      visualStyle: Ve.Dark
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, n) {
      const r = {};
      1 & n && (r.disabled = e[0] !== zs.Available && e[0] !== zs.Expired), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Du(e) {
  let t, n, r = (e[0] === zs.Unauthenticated || e[0] === zs.Available || e[0] === zs.Expired) && Gu(e);
  return {
    c() {
      r && r.c(), t = Et()
    },
    m(e, o) {
      r && r.m(e, o), Ct(e, t, o), n = !0
    },
    p(e, [n]) {
      e[0] === zs.Unauthenticated || e[0] === zs.Available || e[0] === zs.Expired ? r ? (r.p(e, n), 1 & n && qn(r, 1)) : (r = Gu(e), r.c(), qn(r, 1), r.m(t.parentNode, t)) : r && (In(), zn(r, 1, 1, () => {
        r = null
      }), Ln())
    },
    i(e) {
      n || (qn(r), n = !0)
    },
    o(e) {
      zn(r), n = !1
    },
    d(e) {
      e && At(t), r && r.d(e)
    }
  }
}

function Iu(e, t, n) {
  let r, o, i, a, l, s, c, u, d;
  E(e, aa, e => n(6, r = e)), E(e, ra, e => n(7, o = e)), E(e, Xs, e => n(8, i = e)), E(e, Fs, e => n(0, a = e)), E(e, Ll, e => n(2, l = e)), E(e, Ql, e => n(3, s = e)), E(e, Gs, e => n(4, c = e)), E(e, Os, e => n(5, u = e)), E(e, J, e => n(9, d = e));
  const f = M("Partner1Game");
  let p = !1;

  function h() {
    f("store cleanup"), W(Xs, i = null, i), W(ra, o = null, o), W(aa, r = null, r)
  }
  return W(J, d = Z.Partner1, d), dn(() => {
    Ms.set(!1), n(1, p = !0)
  }), fn(h), e.$$.update = () => {
    if (1 & e.$$.dirty && f(`status: ${a}`), 63 & e.$$.dirty && p) switch (a) {
      case zs.Unknown:
        break;
      case zs.Unavailable:
        h(), f("Partner1 features are unavailable, redirecting to root path"), il(va);
        break;
      case zs.Unauthenticated:
        f("blocking game"), W(ra, o = () => !1, o), W(aa, r = new Set, r), u && !c.v ? W(Xs, i = "partner1TokenValidationFailed", i) : W(Xs, i = "partner1Authenticate", i);
        break;
      case zs.Available:
        h(), s || W(Xs, i = "partner1Welcome", i);
        break;
      case zs.Expired:
        h(), l || W(Xs, i = "partner1Expired", i);
        break;
      default:
        y()
    }
  }, [a, p, l, s, c, u]
}
class Lu extends Zn {
  constructor(e) {
    super(), Jn(this, e, Iu, Du, h, {})
  }
}

function qu(e) {
  let t;
  return {
    c() {
      t = Mt("p"), t.textContent = `Something went wrong. ${K(e[2])}`
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function zu(e) {
  let t, n, r;
  var o = e[1].default;
  return o && (t = tn(o, {})), {
    c() {
      t && Yn(t.$$.fragment), n = Et()
    },
    m(e, o) {
      t && Qn(t, e, o), Ct(e, n, o), r = !0
    },
    p(e, r) {
      if (o !== (o = e[1].default)) {
        if (t) {
          In();
          const e = t;
          zn(e.$$.fragment, 1, 0, () => {
            Xn(e, 1)
          }), Ln()
        }
        o ? (t = tn(o, {}), Yn(t.$$.fragment), qn(t.$$.fragment, 1), Qn(t, n.parentNode, n)) : t = null
      }
    },
    i(e) {
      r || (t && qn(t.$$.fragment, e), r = !0)
    },
    o(e) {
      t && zn(t.$$.fragment, e), r = !1
    },
    d(e) {
      e && At(n), t && Xn(t, e)
    }
  }
}

function Fu(e) {
  let t;
  return {
    c() {
      t = Mt("p"), t.textContent = "Loading..."
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function ju(e) {
  let t, n, r = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Fu,
    then: zu,
    catch: qu,
    value: 1,
    error: 2,
    blocks: [, , , ]
  };
  return Rn(e[0], r), {
    c() {
      t = Et(), r.block.c()
    },
    m(e, o) {
      Ct(e, t, o), r.block.m(e, r.anchor = o), r.mount = () => t.parentNode, r.anchor = t, n = !0
    },
    p(t, n) {
      Un(r, e = t, n)
    },
    i(e) {
      n || (qn(r.block), n = !0)
    },
    o(e) {
      for (let t = 0; t < 3; t += 1) zn(r.blocks[t]);
      n = !1
    },
    d(e) {
      e && At(t), r.block.d(e), r.token = null, r = null
    }
  }
}

function Nu(e) {
  let t, n, r, o;
  return t = new bu({}), r = new Cc({
    props: {
      class: "mt-4",
      $$slots: {
        default: [ju]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      Yn(t.$$.fragment), n = Tt(), Yn(r.$$.fragment)
    },
    m(e, i) {
      Qn(t, e, i), Ct(e, n, i), Qn(r, e, i), o = !0
    },
    p(e, [t]) {
      const n = {};
      8 & t && (n.$$scope = {
        dirty: t,
        ctx: e
      }), r.$set(n)
    },
    i(e) {
      o || (qn(t.$$.fragment, e), qn(r.$$.fragment, e), o = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), zn(r.$$.fragment, e), o = !1
    },
    d(e) {
      e && At(n), Xn(t, e), Xn(r, e)
    }
  }
}

function Ru(e) {
  return [pt(() => import("./AsyncContent-BOq9PJTx.js"), [])]
}
class Uu extends Zn {
  constructor(e) {
    super(), Jn(this, e, Ru, Nu, h, {})
  }
}

function Wu(e) {
  let t, n;
  return t = new uu({}), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p: r,
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Hu(e, t, n) {
  let r;
  return E(e, J, e => n(0, r = e)), W(J, r = Z.Standard, r), []
}
class Vu extends Zn {
  constructor(e) {
    super(), Jn(this, e, Hu, Wu, h, {})
  }
}

function Ku(e, t, n) {
  for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
  return e.concat(r || Array.prototype.slice.call(t))
}

function Yu(e, t) {
  var n = void 0 === t ? {} : t,
    r = n.numToTrack,
    o = void 0 === r ? 1 : r,
    i = n.initPrevious,
    a = void 0 === i ? [] : i,
    l = n.requireChange,
    s = void 0 === l || l,
    c = n.isEqual,
    u = void 0 === c ? function(e, t) {
      return e === t
    } : c;
  if (o <= 0) throw new Error("Must track at least 1 previous");
  for (var d = a.slice(0, o); d.length < o;) d.push(null);
  var p = f(Ku([e], d)),
    h = function(e) {
      p.update(function(t) {
        var n = e(t[0]);
        return s && u(n, t[0]) ? t : Ku([n], t.slice(0, o))
      })
    },
    m = {
      subscribe: O(p, function(e) {
        return e[0]
      }).subscribe,
      update: h,
      set: function(e) {
        h(function() {
          return e
        })
      }
    },
    g = Ku([], Array(o)).map(function(e, t) {
      return O(p, function(e) {
        return e[t + 1]
      })
    });
  return Ku([m], g)
}
const Qu = {
    capture: !0
  },
  Xu = D(window.matchMedia("(pointer: coarse)").matches, e => {
    const t = () => e(!0),
      n = () => e(!1);
    return window.addEventListener("touchstart", t, Qu), window.addEventListener("keydown", n, Qu), () => {
      window.removeEventListener("touchstart", t, Qu), window.removeEventListener("keydown", n, Qu)
    }
  });
const Ju = /`([^`]+)`|([^`]+)/g;
var Zu = () => new Proxy(Object.assign(() => "", {}), {
    get: (e, t) => "length" === t ? 0 : Zu()
  }),
  ed = /^\{.*\}$/,
  td = /(\{(?:[^{}]+|\{(?:[^{}]+)*\})*\})/g,
  nd = e => e.substring(1, e.length - 1),
  rd = /\?\?/g,
  od = (e, t, n, r) => {
    const o = r[0],
      i = o && "object" == typeof o && o.constructor === Object;
    return ((e, t, n, r) => e.map(e => {
      if ("string" == typeof e) return e;
      const {
        k: o = "0",
        f: i = []
      } = e, a = r[o];
      return (e => !(!e.o && !e.r))(e) ? (("boolean" == typeof a ? a ? e.o : e.r : ((e, {
        z: t,
        o: n,
        t: r,
        f: o,
        m: i,
        r: a
      }, l) => {
        switch (t && 0 == l ? "zero" : e.select(l)) {
          case "zero":
            return t;
          case "one":
            return n;
          case "two":
            return r;
          case "few":
            return o ?? a;
          case "many":
            return i ?? a;
          default:
            return a
        }
      })(t, e, a)) || "").replace(rd, a) : ("" + ((i.length ? ((e, t, n) => t.reduce((t, n) => {
        var r, o, i;
        return (n.match(ed) ? (i = n, (o = Object.fromEntries(nd(i).split(",").map(e => e.split(":")).reduce((e, t) => 2 === t.length ? [...e, t.map(e => e.trim())] : (e[e.length - 1][1] += "," + t[0], e), [])))[t] ?? o["*"]) : null == (r = e[n]) ? void 0 : r.call(e, t)) ?? t
      }, n))(n, i, a) : a) ?? "")).trim()
    }).join(""))(e, t, n, 1 === r.length && i ? o : r)
  },
  id = (e, t) => {
    const n = {},
      r = new Intl.PluralRules(e);
    return (e, ...o) => od(((e, t) => e[t] || (e[t] = ((e, t = !0, n = "", r = "") => e.split(td).map(e => {
      if (!e.match(td)) return e;
      const t = nd(e);
      if (t.startsWith("{")) return ((e, t) => {
        let [n, r] = e.split(":");
        r || (r = n, n = t);
        const o = r.split("|"),
          [i, a, l, s, c, u] = o,
          d = o.filter(e => void 0 !== e).length;
        return 1 === d ? {
          k: n,
          r: i
        } : 2 === d ? {
          k: n,
          o: i,
          r: a
        } : 3 === d ? {
          k: n,
          z: i,
          o: a,
          r: l
        } : {
          k: n,
          z: i,
          o: a,
          t: l,
          f: s,
          m: c,
          r: u
        }
      })(nd(t), r);
      const o = (e => {
        const [t = "", ...n] = e.split("|"), [r = "", o] = t.split(":"), [i, a] = r.split("?");
        return {
          k: i,
          i: o,
          n: "" === a,
          f: n
        }
      })(t);
      return r = o.k || r, !n && (n = r), o
    }).map(e => {
      if ("string" == typeof e) return e;
      e.k || (e.k = n || "0");
      const r = (e => Object.fromEntries(Object.keys(e).map(t => {
        const n = e[t];
        return [t, Array.isArray(n) ? n.map(e => null == e ? void 0 : e.trim()) : n === !!n ? n : null == n ? void 0 : n.trim()]
      })))(e);
      return t ? (o = r, Object.fromEntries(Object.entries(o).map(([e, t]) => "i" !== e && t && "0" != t && [e, t]).filter(Boolean))) : r;
      var o
    }))(t)))(n, e), r, t, o)
  },
  ad = (e = {}, t) => "string" == typeof e ? t.bind(null, e) : Object.assign(Object.defineProperty(() => "", "name", {
    writable: !0
  }), e),
  ld = (e, t) => new Proxy(ad(e, t), {
    get: (e, n) => n === Symbol.iterator ? [][Symbol.iterator].bind(Object.values(e).map(e => ad(e, t))) : ld(e[n], t)
  });
const sd = {},
  cd = {},
  {
    LL: ud,
    setLocale: dd
  } = ((e, t = {}) => {
    const n = f(),
      r = f(Zu());
    var o;
    return {
      locale: {
        subscribe: (o = n).subscribe.bind(o)
      },
      LL: new Proxy({}, {
        get: (e, t) => "subscribe" === t ? r.subscribe : r[t]
      }),
      setLocale: o => {
        n.set(o), r.set(function(e, t, n = {}) {
          return ld(t, id(e, n))
        }(o, e[o], t[o]))
      }
    }
  })(sd, cd),
  fd = O([sa, ud], ([e, t]) => {
    if (e.state !== g.Selecting) return null;
    const n = e.selection.type,
      r = "completePowerup" === e.actionOnSelectionComplete.type ? e.actionOnSelectionComplete.currentPowerup : null;
    if (!r) return null;
    const o = t.powerup.variants[r].title(),
      i = {
        label: t.selection.status.cancelAction(),
        onAction: () => sa.cancelPowerup(r)
      };
    switch (n) {
      case "adjacentTilesDirectional":
        return Je(e, "adjacentTilesDirectional"), v(null === e.selection.origin || null === e.selection.target, "Invalid state, both origin and target are already set"), vd(o, null === e.selection.origin ? t.selection.variants.adjacentTilesDirectional.selectOrigin() : t.selection.variants.adjacentTilesDirectional.selectTarget(), void 0, i);
      case "bomb":
        return Je(e, "bomb"), vd(o, t.selection.variants.bomb.selectTile(), void 0, i);
      case "byValue":
        return Je(e, "byValue"), vd(o, t.selection.variants.byValue.selectValue(), void 0, i);
      case "multipleTile":
        return Je(e, "multipleTile"), v(2 === e.selection.amount, "Only 2 tiles are supported"), vd(o, 0 === e.selection.tiles.length ? t.selection.variants.multipleTile.twoTiles.selectFirst() : t.selection.variants.multipleTile.twoTiles.selectSecond(), void 0, i);
      case "singleTile":
        return Je(e, "singleTile"), vd(o, t.selection.variants.singleTile.selectTile(), void 0, i);
      case "rotation":
        return Je(e, "rotation"), vd(o, t.selection.variants.rotation.selectDirection(), void 0, i);
      case "singleCell":
        return Je(e, "singleCell"), vd(o, t.selection.variants.singleCell.selectCell(), void 0, i);
      case "tileAndEmptyCell":
        return Je(e, "tileAndEmptyCell"), vd(o, null === e.selection.tile ? t.selection.variants.tileAndEmptyCell.selectTile() : t.selection.variants.tileAndEmptyCell.selectEmptyCell(), void 0, i);
      default:
        y()
    }
  }, null),
  pd = Y(Ze, !1),
  hd = null !== localStorage.getItem(le),
  md = e => {
    const t = hd ? "returningUser" : "newUser";
    zi.welcomeStatusMessageShown(t, e), pd.set(t)
  },
  gd = O([pd], ([e]) => {
    return e ? null : hd ? (t = md, vd("Welcome back!", "2048’s got a new look and some new features!", () => t(!1), {
      label: "What’s New",
      onAction: () => {
        Xs.set("whatsNew"), t(!0)
      }
    })) : function(e) {
      return vd("Welcome to 2048!", "Would you like to learn how to play?", () => e(!1), {
        label: "Play Tutorial",
        onAction: () => {
          il("/tutorial"), e(!0)
        }
      })
    }(md);
    var t
  });

function vd(e, t, n, r) {
  return {
    title: e,
    description: (o = t, o.split("\n").reduce((e, t, n) => (n > 0 && (e = e.concat({
      type: "lineBreak"
    })), e.concat(function(e) {
      const t = e.matchAll(Ju),
        n = [];
      for (const r of t) r[1] ? n.push({
        type: "tile",
        text: r[1]
      }) : r[2] && n.push({
        type: "text",
        text: r[2]
      });
      return n
    }(t))), [])),
    action: r,
    onClose: n
  };
  var o
}
const $d = function() {
  const e = f(null);
  return {
    subscribe: O([fd, gd, e], ([e, t, n]) => null !== e ? e : null !== n ? n : null !== t ? t : null).subscribe,
    set: e.set,
    update: e.update
  }
}();

function wd(e) {
  let t, n;
  return t = new uu({}), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p: r,
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}
const yd = "tutorial.v1";
var xd = (e => (e.Initial = "initial", e.MoveTiles = "moveTiles", e.MergeInto4 = "mergeInto4", e.MergeInto8 = "mergeInto8", e.MergeInto16 = "mergeInto16", e.UseUndo = "useUndo", e.OtherPowerups = "otherPowerups", e.Done = "done", e))(xd || {});

function bd(e, t, n) {
  let r, o, i, a, l, s, c, u, d, f, h, m;
  E(e, $d, e => n(7, r = e)), E(e, la, e => n(8, o = e)), E(e, aa, e => n(9, i = e)), E(e, oa, e => n(10, a = e)), E(e, ia, e => n(11, l = e)), E(e, ra, e => n(12, s = e)), E(e, sa, e => n(13, c = e)), E(e, Xu, e => n(5, f = e)), E(e, J, e => n(14, h = e)), E(e, Xs, e => n(15, m = e));
  const $ = M("Tutorial");
  let w = xd.Initial;
  const [x, b] = Yu(w, {
    requireChange: !1
  });
  E(e, x, e => n(3, u = e)), E(e, b, e => n(4, d = e));
  let _ = () => {};
  return W(J, h = Z.Tutorial, h), dn(() => {
    $("mounted, hooking gameplay"), md(), W(oa, a = "\n      - - - -\n      - 2 - -\n      - - 2 -\n      - - - -\n    ", a), W(ia, l = "tutorial2", l), W(aa, i = new Set([]), i), W(la, o = new Set([]), o), W(Xs, m = null, m), W(ra, s = e => {
      switch (w) {
        case xd.Initial:
          return !1;
        case xd.MoveTiles:
        case xd.MergeInto4:
        case xd.MergeInto8:
        case xd.MergeInto16:
          return "move" === e.type;
        case xd.UseUndo:
          return "activatePowerup" === e.type && e.powerup === et.Undo;
        case xd.OtherPowerups:
          return "activatePowerup" === e.type && e.powerup === et.SwapTwoTiles || "cancelPowerup" === e.type && e.powerup === et.SwapTwoTiles || "select" === e.type;
        case xd.Done:
          return !1;
        default:
          y()
      }
    }, s), _ = sa.subscribe(e => {
      if (h === Z.Tutorial) switch (w) {
        case xd.Initial:
          return v(e.state === g.Fresh && 0 === e.moveCount, "Game should be fresh at the start of the tutorial"), void n(2, w = xd.MoveTiles);
        case xd.MoveTiles:
          return v(e.moveCount <= 1, "Game should have 1 move max at TutorialStep.MoveTiles"), void(1 === e.moveCount && n(2, w = xd.MergeInto4));
        case xd.MergeInto4:
        case xd.MergeInto8:
        case xd.MergeInto16: {
          const t = tt(e.board, (e, t) => t && t.merges && t.value > e ? t.value : e, 0);
          return w === xd.MergeInto4 && 4 === t && n(2, w = xd.MergeInto8), w !== xd.MergeInto4 && w !== xd.MergeInto8 || 8 !== t || n(2, w = xd.MergeInto16), void(w !== xd.MergeInto4 && w !== xd.MergeInto8 && w !== xd.MergeInto16 || 16 !== t || (n(2, w = xd.UseUndo), W(aa, i = new Set([et.Undo]), i), W(la, o = new Set([et.Undo]), o)))
        }
        case xd.UseUndo:
          return void(e.changes.find(e => "powerupConsumed" === e.type && e.powerup === et.Undo) && (n(2, w = xd.OtherPowerups), W(aa, i = null, i), W(la, o = new Set([et.SwapTwoTiles]), o)));
        case xd.OtherPowerups:
          return e.state === g.Selecting && (null == o ? void 0 : o.has(et.SwapTwoTiles)) && W(la, o = null, o), void(e.changes.find(e => "powerupConsumed" === e.type && e.powerup !== et.Undo) && (n(2, w = xd.Done), setTimeout(() => {
            Xs.set("tutorialDone")
          }, 500)));
        case xd.Done:
          return;
        default:
          y()
      }
    })
  }), dn(() => {
    zi.tutorialLoaded(c, yd)
  }), fn(() => {
    zi.tutorialDestroyed(c, w, yd), $("store cleanup"), _(), W(ra, s = null, s), W(ia, l = null, l), W(oa, a = null, a), W(aa, i = null, i), W(la, o = null, o), W($d, r = null, r)
  }), e.$$.update = () => {
    if (4 & e.$$.dirty && $(`Current step: ${w}`), 4 & e.$$.dirty && W(x, u = w, u), 36 & e.$$.dirty) switch (w) {
      case xd.Initial:
        W($d, r = null, r);
        break;
      case xd.MoveTiles:
        W($d, r = vd("Welcome to 2048", [f ? "Swipe in any direction to move the tiles." : "Use the arrow keys to move the tiles.", "`←` `↑` `↓` `→`"].join("\n")), r);
        break;
      case xd.MergeInto4:
        W($d, r = vd("Make a match", "The tiles all moved in the same direction and a new one appeared.\nTry moving the `2` and `2` towards each other."), r);
        break;
      case xd.MergeInto8:
        W($d, r = vd("Boom!", "Tiles with the same number join when they touch.\nKeep going. Can you merge two `4` tiles into an `8`?"), r);
        break;
      case xd.MergeInto16:
        W($d, r = vd("4 + 4 = 8", "You’re getting the hang of it!\nLet’s increase the difficulty. Merge two `8` tiles into a `16` tile."), r);
        break;
      case xd.UseUndo:
        W($d, r = vd("Need a do-over?", "If you make mistakes, you can use undo. Try it out!"), r);
        break;
      case xd.OtherPowerups:
        W($d, r = vd("Powerups!", "Undo isn’t the only powerup you can use. Try “Swap Two Tiles”!"), r);
        break;
      case xd.Done:
        W($d, r = null, r);
        break;
      default:
        y()
    }
    if (24 & e.$$.dirty && u !== d) {
      const e = p(sa);
      u !== xd.Done ? zi.tutorialStepReached(e, u, yd) : zi.tutorialCompleted(e, yd)
    }
  }, [x, b, w, u, d, f]
}
class _d extends Zn {
  constructor(e) {
    super(), Jn(this, e, bd, wd, h, {})
  }
}

function kd(e) {
  let t;
  return {
    c() {
      t = Pt("← Back")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Cd(e) {
  let t;
  return {
    c() {
      t = Pt("2048")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Sd(e) {
  let t, n, r, o, i, a, l, s, c, u;
  o = new Wa({
    props: {
      to: va,
      class: "hover:underline",
      $$slots: {
        default: [kd]
      },
      $$scope: {
        ctx: e
      }
    }
  }), l = new Wa({
    props: {
      to: va,
      $$slots: {
        default: [Cd]
      },
      $$scope: {
        ctx: e
      }
    }
  });
  const d = e[0].default,
    f = z(d, e, e[1], null);
  return {
    c() {
      t = Mt("div"), n = Mt("div"), r = Mt("div"), Yn(o.$$.fragment), i = Tt(), a = Mt("h1"), Yn(l.$$.fragment), s = Tt(), c = Mt("div"), f && f.c(), Dt(a, "class", "mr-auto flex items-center justify-center text-5xl font-bold"), Dt(n, "class", "mb-6 grid h-14 grid-cols-[1fr_min-content_1fr] items-center"), Dt(c, "class", "flex flex-col gap-2"), Dt(t, "class", "mx-auto w-screen max-w-screen-md px-4 py-6 sm:px-8")
    },
    m(e, d) {
      Ct(e, t, d), bt(t, n), bt(n, r), Qn(o, r, null), bt(n, i), bt(n, a), Qn(l, a, null), bt(t, s), bt(t, c), f && f.m(c, null), u = !0
    },
    p(e, [t]) {
      const n = {};
      2 & t && (n.$$scope = {
        dirty: t,
        ctx: e
      }), o.$set(n);
      const r = {};
      2 & t && (r.$$scope = {
        dirty: t,
        ctx: e
      }), l.$set(r), f && f.p && (!u || 2 & t) && F(f, d, e, e[1], u ? N(d, e[1], t, null) : j(e[1]), null)
    },
    i(e) {
      u || (qn(o.$$.fragment, e), qn(l.$$.fragment, e), qn(f, e), u = !0)
    },
    o(e) {
      zn(o.$$.fragment, e), zn(l.$$.fragment, e), zn(f, e), u = !1
    },
    d(e) {
      e && At(t), Xn(o), Xn(l), f && f.d(e)
    }
  }
}

function Ad(e, t, n) {
  let {
    $$slots: r = {},
    $$scope: o
  } = t;
  return e.$$set = e => {
    "$$scope" in e && n(1, o = e.$$scope)
  }, [r, o]
}
class Bd extends Zn {
  constructor(e) {
    super(), Jn(this, e, Ad, Sd, h, {})
  }
}

function Md(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "170"
    }, {
      height: "46"
    }, {
      fill: "currentColor"
    }, {
      viewBox: "0 0 2090 560.3"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path d="M12.78 327.2c-3 0-5.2-.6-6.5-1.9-1.4-1.3-2.1-3.5-2.1-6.7V89.4c0-3.2.7-5.4 2.1-6.7s3.6-1.9 6.5-1.9h24.7c5.3 0 8.5 2.5 9.6 7.6l2.4 8.9c6.9-6.6 15.2-11.9 24.9-15.8s19.6-5.8 29.7-5.8c22.2 0 39.8 8.1 52.8 24.4s19.4 38.3 19.4 66q0 28.5-9.6 49.8c-9.6 21.3-15.1 25.1-26.1 32.8s-23.6 11.5-37.8 11.5c-9.4 0-18.3-1.5-26.8-4.5s-15.7-7.1-21.6-12.4v75.3c0 3.2-.6 5.4-1.9 6.7s-3.5 1.9-6.7 1.9zm75.3-104.8c12.8 0 22.3-4.4 28.4-13.1s9.1-22.5 9.1-41.2c0-19-3-32.9-8.9-41.6-6-8.7-15.5-13.1-28.5-13.1-11.9 0-23.1 3.1-33.7 9.3v90.4q15 9.3 33.6 9.3m130.5 34c-3 0-5.2-.7-6.5-2.1s-2.1-3.5-2.1-6.5V89.4c0-3.2.7-5.4 2.1-6.7s3.5-1.9 6.5-1.9h24.8c5.3 0 8.5 2.5 9.6 7.6l4.5 18.6c9.2-10.1 17.8-17.2 26-21.5 8.1-4.2 16.8-6.4 26-6.4h4.8c3.2 0 5.5.6 6.9 1.9s2.1 3.5 2.1 6.7v28.9c0 3-.6 5.1-1.9 6.5s-3.5 2.1-6.7 2.1c-1.6 0-3.7-.1-6.2-.4q-3.75-.3-9.6-.3c-5.3 0-11.7.8-19.2 2.2q-11.4 2.25-19.2 5.7v115.4c0 3-.6 5.1-1.9 6.5s-3.5 2.1-6.7 2.1zm153.9-202.8q-13.05 0-21-7.2c-7.95-7.2-7.9-11.3-7.9-19.6s2.6-14.8 7.9-19.6 12.2-7.2 21-7.2q13.05 0 21 7.2c7.95 7.2 7.9 11.3 7.9 19.6s-2.6 14.8-7.9 19.6-12.3 7.2-21 7.2m-16.5 202.8c-3 0-5.1-.7-6.5-2.1s-2.1-3.5-2.1-6.5V89.4c0-3.2.7-5.4 2.1-6.7s3.5-1.9 6.5-1.9h33c3.2 0 5.4.6 6.7 1.9s1.9 3.5 1.9 6.7v158.4c0 3-.6 5.1-1.9 6.5s-3.5 2.1-6.7 2.1zm92.7 0c-3 0-5.2-.7-6.5-2.1-1.4-1.4-2.1-3.5-2.1-6.5V89.4c0-3.2.7-5.4 2.1-6.7s3.5-1.9 6.5-1.9h24.7c5.3 0 8.5 2.5 9.6 7.6l2.8 9.3c12.1-8 23.1-13.7 32.8-17s19.8-5 30.1-5c20.6 0 35.2 7.3 43.6 22q17.55-11.7 33-16.8c15.45-5.1 21-5.2 32-5.2 16 0 28.5 4.5 37.3 13.4s13.2 21.4 13.2 37.5v121.2c0 3-.6 5.1-1.9 6.5s-3.5 2.1-6.7 2.1h-33c-3 0-5.2-.7-6.5-2.1-1.4-1.4-2.1-3.5-2.1-6.5V137.5q0-23.4-21-23.4c-12.4 0-24.9 3-37.5 8.9v124.8c0 3-.6 5.1-1.9 6.5s-3.5 2.1-6.7 2.1h-33c-3 0-5.2-.7-6.5-2.1s-2.1-3.5-2.1-6.5V137.5q0-23.4-21-23.4-19.2 0-37.8 9.3v124.4c0 3-.6 5.1-1.9 6.5s-3.5 2.1-6.7 2.1zm378.4 5.1c-28.4 0-50.2-7.8-65.5-23.4-15.2-15.6-22.8-37.9-22.8-67 0-29.8 7.8-53.2 23.4-70.1s37.2-25.4 65-25.4c21.3 0 38 5.2 50 15.5s18 24.1 18 41.2c0 17.2-6.5 30.2-19.4 39-13 8.8-32 13.2-57.2 13.2-13.1 0-24.4-1.3-34-3.8 1.4 15.4 6 26.4 13.9 33s19.9 10 35.9 10c6.4 0 12.7-.4 18.7-1.2 6.1-.8 14.5-2.6 25.3-5.3.7-.2 1.4-.4 2.1-.5s1.3-.2 1.7-.2c3.9 0 5.8 2.6 5.8 7.9v15.8c0 3.7-.5 6.2-1.5 7.7s-3 2.8-6 4c-16.9 6.4-34.6 9.6-53.4 9.6m-11.4-107.9c11.7 0 20.2-1.8 25.4-5.3s7.9-9 7.9-16.3q0-21.6-25.8-21.6c-22 0-34.7 13.5-38.2 40.6 9.3 1.7 19.5 2.6 30.7 2.6"/><path fill-rule="evenodd" d="M809.08 449.5c-98 72.3-240.1 110.8-362.4 110.8-171.5 0-325.9-63.4-442.7-168.9-9.2-8.3-1-19.6 10-13.2 126.1 73.4 282 117.5 443 117.5 108.6 0 228-22.5 337.9-69.2 16.5-7 30.4 11 14.2 23"/><path fill-rule="evenodd" d="M849.88 402.9c-12.5-16-82.9-7.6-114.5-3.8-9.6 1.2-11-7.2-2.4-13.3 56.1-39.4 148-28 158.7-14.8 10.8 13.3-2.8 105.5-55.4 149.4-8.1 6.8-15.8 3.2-12.2-5.8 11.8-29.5 38.3-95.6 25.8-111.7"/><path d="M1062.88 331.6c-18.9 0-36.6-3.5-53-10.4-2.8-1.1-4.6-2.4-5.5-3.8s-1.4-3.6-1.4-6.6v-10c0-4.2 1.4-6.2 4.2-6.2 1.4 0 3.1.4 5 1q3 1.05 8.1 2.4c14.3 3.9 27.6 5.9 39.8 5.9 18.5 0 32-4.4 40.5-13.3s12.8-23.1 12.8-42.8v-15.6c-7.8 6.7-16.3 11.8-25.3 15.4s-18.1 5.4-27.3 5.4q-22.2 0-38.4-11.1c-16.2-11.1-19.2-17.6-24.9-30.8-5.8-13.1-8.7-28.3-8.7-45.3 0-27.7 6.6-49.7 19.7-65.9 13.2-16.3 30.8-24.4 53-24.4 20.8 0 38.9 7.2 54.3 21.5l1.7-9.7c.5-2.5 1.3-4.3 2.6-5.2s3.1-1.4 5.4-1.4h14.9q6.9 0 6.9 6.9v157.8c0 27.5-7.3 48.7-22 63.7q-21.9 22.5-62.4 22.5m8-106.3q21.45 0 42.6-15.9v-91c-6.9-5.3-14-9.2-21.1-11.6-7.2-2.4-15-3.6-23.5-3.6-30 0-45 20.4-45 61.3 0 20.1 4 35.2 11.9 45.5q11.85 15.3 35.1 15.3m162.6 35.3c-16.4 0-29.5-4.7-39.3-14s-14.7-21.9-14.7-37.6c0-16.8 6-30.3 18-40.3s28.2-15.1 48.5-15.1c12.9 0 27.4 2 43.6 5.9v-22.8c0-12.5-2.8-21.2-8.5-26.3s-15.3-7.6-28.9-7.6c-15.9 0-31.5 2.3-46.7 6.9-5.3 1.6-8.7 2.4-10 2.4-2.8 0-4.2-2.1-4.2-6.2v-9.4c0-3 .5-5.2 1.4-6.6s2.8-2.6 5.5-3.8c7.2-3.2 16.2-5.8 27.2-7.8 10.9-2 21.8-2.9 32.7-2.9 21.9 0 38.1 4.6 48.5 13.7s15.6 23 15.6 41.7v118.4q0 6.9-6.9 6.9h-14.9c-4.4 0-6.9-2.2-7.6-6.6l-1.7-11.4c-8.3 7.2-17.5 12.7-27.5 16.6-10.3 4-20.2 5.9-30.1 5.9m8.3-25.9c7.6 0 15.6-1.5 23.9-4.5s16.3-7.4 23.9-13.1v-35.3c-12.5-3-24.7-4.5-36.7-4.5-26.1 0-39.1 10-39.1 30.1 0 8.8 2.4 15.5 7.3 20.2 4.7 4.7 11.7 7.1 20.7 7.1m130.1 21.4q-6.9 0-6.9-6.9V87.6q0-6.9 6.9-6.9h15.2c2.3 0 4.1.5 5.4 1.4s2.1 2.6 2.6 5.2l2.1 11.1c22.2-15.2 43.7-22.8 64.7-22.8 21.5 0 36 8.2 43.6 24.6 22.8-16.4 45.7-24.6 68.5-24.6 15.9 0 28.2 4.5 36.7 13.5s12.8 21.8 12.8 38.4v121.8q0 6.9-6.9 6.9h-20.4q-6.9 0-6.9-6.9V137.1c0-11.5-2.2-20.1-6.6-25.6s-11.3-8.3-20.8-8.3c-16.8 0-33.8 5.2-50.9 15.6.2 1.6.3 3.4.3 5.2v125.3q0 6.9-6.9 6.9h-20.4q-6.9 0-6.9-6.9V137.1c0-11.5-2.2-20.1-6.6-25.6s-11.3-8.3-20.8-8.3c-17.5 0-34.4 5.1-50.5 15.2v130.8q0 6.9-6.9 6.9zm312.1-206.6c-6.7 0-11.9-1.9-15.8-5.7-3.8-3.8-5.7-8.8-5.7-15.1 0-6.2 1.9-11.2 5.7-15.1 3.8-3.8 9.1-5.7 15.8-5.7s11.9 1.9 15.8 5.7c3.8 3.8 5.7 8.8 5.7 15.1 0 6.2-1.9 11.2-5.7 15.1-3.9 3.8-9.2 5.7-15.8 5.7m-10.4 206.6q-6.9 0-6.9-6.9V87.6q0-6.9 6.9-6.9h20.4q6.9 0 6.9 6.9v161.6q0 6.9-6.9 6.9zm77.9 0q-6.9 0-6.9-6.9V87.6q0-6.9 6.9-6.9h15.2c2.3 0 4.1.5 5.4 1.4s2.1 2.6 2.6 5.2l2.1 12.8c21.9-16.4 45-24.6 69.2-24.6 16.8 0 29.7 4.4 38.4 13.3 8.8 8.9 13.2 21.8 13.2 38.6v121.8q0 6.9-6.9 6.9h-20.4q-6.9 0-6.9-6.9V138.8c0-12.2-2.5-21.2-7.4-27-5-5.8-12.8-8.6-23.4-8.6-18.2 0-36.1 5.9-53.7 17.6v128.4q0 6.9-6.9 6.9zm254.1 75.5c-18.9 0-36.6-3.5-53-10.4-2.8-1.1-4.6-2.4-5.5-3.8s-1.4-3.6-1.4-6.6v-10c0-4.2 1.4-6.2 4.2-6.2 1.4 0 3.1.4 5 1q3 1.05 8.1 2.4c14.3 3.9 27.6 5.9 39.8 5.9 18.5 0 32-4.4 40.5-13.3s12.8-23.1 12.8-42.8v-15.6c-7.9 6.7-16.3 11.8-25.3 15.4s-18.1 5.4-27.4 5.4q-22.2 0-38.4-11.1c-10.9-7.4-19.2-17.6-24.9-30.8-5.8-13.1-8.6-28.3-8.6-45.3 0-27.7 6.6-49.7 19.7-65.9 13.1-16.3 30.8-24.4 53-24.4 20.8 0 38.9 7.2 54.3 21.5l1.7-9.7c.5-2.5 1.3-4.3 2.6-5.2s3.1-1.4 5.4-1.4h14.9q6.9 0 6.9 6.9v157.8c0 27.5-7.3 48.7-22 63.7q-21.9 22.5-62.4 22.5m8-106.3q21.45 0 42.6-15.9v-91c-6.9-5.3-14-9.2-21.1-11.6-7.2-2.4-15-3.6-23.5-3.6-30 0-45 20.4-45 61.3 0 20.1 4 35.2 11.9 45.5q11.85 15.3 35.1 15.3"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "170"
      }, {
        height: "46"
      }, {
        fill: "currentColor"
      }, {
        viewBox: "0 0 2090 560.3"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function Od(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class Pd extends Zn {
  constructor(e) {
    super(), Jn(this, e, Od, Md, h, {})
  }
}

function Td(e) {
  let t, n, r, o;
  const i = [Gd, Ed],
    a = [];

  function l(e, t) {
    return e[1] === zs.Expired ? 0 : 1
  }
  return t = l(e), n = a[t] = i[t](e), {
    c() {
      n.c(), r = Et()
    },
    m(e, n) {
      a[t].m(e, n), Ct(e, r, n), o = !0
    },
    p(e, o) {
      let s = t;
      t = l(e), t === s ? a[t].p(e, o) : (In(), zn(a[s], 1, 1, () => {
        a[s] = null
      }), Ln(), n = a[t], n ? n.p(e, o) : (n = a[t] = i[t](e), n.c()), qn(n, 1), n.m(r.parentNode, r))
    },
    i(e) {
      o || (qn(n), o = !0)
    },
    o(e) {
      zn(n), o = !1
    },
    d(e) {
      e && At(r), a[t].d(e)
    }
  }
}

function Ed(e) {
  let t, n, o, i, a, l;
  return o = new Pd({
    props: {
      class: "text-squid-ink h-5 w-auto sm:h-6"
    }
  }), {
    c() {
      t = Mt("a"), n = Mt("div"), Yn(o.$$.fragment), i = Tt(), a = Mt("div"), a.innerHTML = '<span>Daily bonus puzzles exclusive with Prime</span> <span class="font-medium group-hover:underline">Explore now →</span>', Dt(n, "class", "bg-current-color flex shrink-0 items-center justify-center px-3 py-1.5"), Dt(a, "class", "text-brown/80 flex grow flex-col justify-center px-3 py-1.5"), Dt(t, "href", "https://gaming.amazon.com/web-games"), Dt(t, "target", "_blank"), Dt(t, "class", "border-current-color text-sand xs:rounded-2xl group hidden self-center overflow-hidden rounded-xl border-2 text-xs md:flex md:text-sm")
    },
    m(e, r) {
      Ct(e, t, r), bt(t, n), Qn(o, n, null), bt(t, i), bt(t, a), l = !0
    },
    p: r,
    i(e) {
      l || (qn(o.$$.fragment, e), l = !0)
    },
    o(e) {
      zn(o.$$.fragment, e), l = !1
    },
    d(e) {
      e && At(t), Xn(o)
    }
  }
}

function Gd(e) {
  let t, n, o;
  return {
    c() {
      t = Mt("button"), t.innerHTML = '<span>2048 Plus is going away in November!</span> <span class="font-medium group-hover:underline">Learn more →</span>', Dt(t, "type", "button"), Dt(t, "class", "border-current-color text-64-red xs:rounded-2xl group hidden cursor-pointer flex-col self-center overflow-hidden rounded-xl border-2 px-3 py-1.5 text-left text-xs md:flex md:text-sm")
    },
    m(r, i) {
      Ct(r, t, i), n || (o = Gt(t, "click", e[3]), n = !0)
    },
    p: r,
    i: r,
    o: r,
    d(e) {
      e && At(t), n = !1, o()
    }
  }
}

function Dd(e) {
  let t, n, r = e[0] === Z.Partner1 && Td(e);
  return {
    c() {
      r && r.c(), t = Et()
    },
    m(e, o) {
      r && r.m(e, o), Ct(e, t, o), n = !0
    },
    p(e, [n]) {
      e[0] === Z.Partner1 ? r ? (r.p(e, n), 1 & n && qn(r, 1)) : (r = Td(e), r.c(), qn(r, 1), r.m(t.parentNode, t)) : r && (In(), zn(r, 1, 1, () => {
        r = null
      }), Ln())
    },
    i(e) {
      n || (qn(r), n = !0)
    },
    o(e) {
      zn(r), n = !1
    },
    d(e) {
      e && At(t), r && r.d(e)
    }
  }
}

function Id(e, t, n) {
  let r, o, i;
  return E(e, J, e => n(0, r = e)), E(e, Fs, e => n(1, o = e)), E(e, Xs, e => n(2, i = e)), [r, o, i, () => {
    zi.partner1ExpiryCalloutClicked(), W(Xs, i = "partner1Expired", i)
  }]
}
class Ld extends Zn {
  constructor(e) {
    super(), Jn(this, e, Id, Dd, h, {})
  }
}

function qd(e) {
  return "[object Date]" === Object.prototype.toString.call(e)
}

function zd(e, t, n, r) {
  if ("number" == typeof n || qd(n)) {
    const o = r - n,
      i = (n - t) / (e.dt || 1 / 60),
      a = (i + (e.opts.stiffness * o - e.opts.damping * i) * e.inv_mass) * e.dt;
    return Math.abs(a) < e.opts.precision && Math.abs(o) < e.opts.precision ? r : (e.settled = !1, qd(n) ? new Date(n.getTime() + a) : n + a)
  }
  if (Array.isArray(n)) return n.map((o, i) => zd(e, t[i], n[i], r[i]));
  if ("object" == typeof n) {
    const o = {};
    for (const i in n) o[i] = zd(e, t[i], n[i], r[i]);
    return o
  }
  throw new Error(`Cannot spring ${typeof n} values`)
}

function Fd(e, t = {}) {
  const n = f(e),
    {
      stiffness: r = .15,
      damping: o = .8,
      precision: i = .01
    } = t;
  let a, l, s, c = e,
    u = e,
    d = 1,
    p = 0,
    h = !1;

  function m(t, r = {}) {
    u = t;
    const o = s = {};
    if (null == e || r.hard || g.stiffness >= 1 && g.damping >= 1) return h = !0, a = mt(), c = t, n.set(e = u), Promise.resolve();
    if (r.soft) {
      const e = !0 === r.soft ? .5 : +r.soft;
      p = 1 / (60 * e), d = 0
    }
    return l || (a = mt(), h = !1, l = wt(t => {
      if (h) return h = !1, l = null, !1;
      d = Math.min(d + p, 1);
      const r = {
          inv_mass: d,
          opts: g,
          settled: !0,
          dt: 60 * (t - a) / 1e3
        },
        o = zd(r, c, e, u);
      return a = t, c = e, n.set(e = o), r.settled && (l = null), !r.settled
    })), new Promise(e => {
      l.promise.then(() => {
        o === s && e()
      })
    })
  }
  const g = {
    set: m,
    update: (t, n) => m(t(u, e), n),
    subscribe: n.subscribe,
    stiffness: r,
    damping: o,
    precision: i
  };
  return g
}
const jd = O(sa, e => e.state === g.GameOver || e.state === g.GameWon);
x(nt.duration, "TILE_SPRING duration must be defined");
const Nd = nt.duration + 300;
let Rd = 0;
const Ud = O(jd, (e, t) => {
    e ? Rd = setTimeout(() => t(e), Nd) : (clearTimeout(Rd), t(e))
  }),
  Wd = O(sa, (e, t) => {
    var n;
    if (e.state === g.GameOver || e.state === g.GameWon) {
      const r = Object.keys(e.powerups);
      t({
        state: e.state,
        score: e.score,
        moveCount: e.moveCount,
        powerupStates: e.powerups,
        powerupsEnabled: 0 !== r.length,
        powerupKeys: r,
        powerupsUsedCount: r.reduce((t, n) => {
          var r;
          return (null == (r = e.powerups[n]) ? void 0 : r.usesCount) ? t + 1 : t
        }, 0),
        undoUsesRemaining: (null == (n = e.powerups[et.Undo]) ? void 0 : n.usesRemaining) ?? 0,
        hasPreviousGameplay: e.state === g.GameOver && null !== e.previousGameplay,
        undoAvailable: rt(e, et.Undo)
      })
    }
  }, void 0),
  Hd = e => ({}),
  Vd = e => ({}),
  Kd = e => ({}),
  Yd = e => ({});

function Qd(e) {
  let t, n, r, o, i, a, l, s, c, u;
  const d = e[9].main,
    f = z(d, e, e[8], Yd),
    p = e[9].alternate,
    h = z(p, e, e[8], Vd);
  return {
    c() {
      t = Mt("div"), n = Mt("div"), f && f.c(), i = Tt(), a = Mt("div"), h && h.c(), Dt(n, "class", r = "absolute left-0 right-0 " + ("top" === e[1] ? "top-0" : "bottom-0") + " " + (e[2] > 0 ? "pointer-events-none" : "") + " " + (1 === e[2] ? "invisible" : "")), Vt(n, "opacity", ot(1, 0, e[2])), Cn(() => e[10].call(n)), Dt(a, "class", l = "absolute left-0 right-0 " + ("top" === e[1] ? "top-0" : "bottom-0") + " " + (e[2] < 1 ? "pointer-events-none" : "") + " " + (0 === e[2] ? "invisible" : "")), Vt(a, "opacity", ot(0, 1, e[2])), Cn(() => e[11].call(a)), Dt(t, "class", c = "relative shrink-0 transform-gpu will-change-[height,min-height] " + e[0]), Vt(t, "min-height", e[5] + "px")
    },
    m(r, l) {
      Ct(r, t, l), bt(t, n), f && f.m(n, null), o = Yt(n, e[10].bind(n)), bt(t, i), bt(t, a), h && h.m(a, null), s = Yt(a, e[11].bind(a)), u = !0
    },
    p(e, [o]) {
      f && f.p && (!u || 256 & o) && F(f, d, e, e[8], u ? N(d, e[8], o, Kd) : j(e[8]), Yd), (!u || 6 & o && r !== (r = "absolute left-0 right-0 " + ("top" === e[1] ? "top-0" : "bottom-0") + " " + (e[2] > 0 ? "pointer-events-none" : "") + " " + (1 === e[2] ? "invisible" : ""))) && Dt(n, "class", r), (!u || 4 & o) && Vt(n, "opacity", ot(1, 0, e[2])), h && h.p && (!u || 256 & o) && F(h, p, e, e[8], u ? N(p, e[8], o, Hd) : j(e[8]), Vd), (!u || 6 & o && l !== (l = "absolute left-0 right-0 " + ("top" === e[1] ? "top-0" : "bottom-0") + " " + (e[2] < 1 ? "pointer-events-none" : "") + " " + (0 === e[2] ? "invisible" : ""))) && Dt(a, "class", l), (!u || 4 & o) && Vt(a, "opacity", ot(0, 1, e[2])), (!u || 1 & o && c !== (c = "relative shrink-0 transform-gpu will-change-[height,min-height] " + e[0])) && Dt(t, "class", c), (!u || 32 & o) && Vt(t, "min-height", e[5] + "px")
    },
    i(e) {
      u || (qn(f, e), qn(h, e), u = !0)
    },
    o(e) {
      zn(f, e), zn(h, e), u = !1
    },
    d(e) {
      e && At(t), f && f.d(e), o(), h && h.d(e), s()
    }
  }
}

function Xd(e, t, n) {
  let r, o, i, {
      $$slots: a = {},
      $$scope: l
    } = t,
    {
      class: s = ""
    } = t,
    {
      anchor: c
    } = t,
    {
      ratio: u
    } = t;
  const d = f(void 0);
  E(e, d, e => n(4, i = e));
  const p = f(void 0);
  return E(e, p, e => n(3, o = e)), e.$$set = e => {
    "class" in e && n(0, s = e.class), "anchor" in e && n(1, c = e.anchor), "ratio" in e && n(2, u = e.ratio), "$$scope" in e && n(8, l = e.$$scope)
  }, e.$$.update = () => {
    28 & e.$$.dirty && n(5, r = ot(i, o, u))
  }, [s, c, u, o, i, r, d, p, l, a, function() {
    i = this.clientHeight, d.set(i)
  }, function() {
    o = this.clientHeight, p.set(o)
  }]
}
class Jd extends Zn {
  constructor(e) {
    super(), Jn(this, e, Xd, Qd, h, {
      class: 0,
      anchor: 1,
      ratio: 2
    })
  }
}
const Zd = e => ({}),
  ef = e => ({});

function tf(e) {
  let t, n, r, o = !Ge && function(e) {
    let t;
    const n = e[10].placeholder,
      r = z(n, e, e[9], ef);
    return {
      c() {
        r && r.c()
      },
      m(e, n) {
        r && r.m(e, n), t = !0
      },
      p(e, o) {
        r && r.p && (!t || 512 & o) && F(r, n, e, e[9], t ? N(n, e[9], o, Zd) : j(e[9]), ef)
      },
      i(e) {
        t || (qn(r, e), t = !0)
      },
      o(e) {
        zn(r, e), t = !1
      },
      d(e) {
        r && r.d(e)
      }
    }
  }(e);
  return {
    c() {
      t = Mt("div"), o && o.c(), Dt(t, "id", n = "ezoic-pub-ad-placeholder-" + e[0]), Dt(t, "class", e[1])
    },
    m(n, i) {
      Ct(n, t, i), o && o.m(t, null), e[11](t), r = !0
    },
    p(e, [i]) {
      Ge || o.p(e, i), (!r || 1 & i && n !== (n = "ezoic-pub-ad-placeholder-" + e[0])) && Dt(t, "id", n), (!r || 2 & i) && Dt(t, "class", e[1])
    },
    i(e) {
      r || (qn(o), r = !0)
    },
    o(e) {
      zn(o), r = !1
    },
    d(n) {
      n && At(t), o && o.d(), e[11](null)
    }
  }
}

function nf(e, t, n) {
  let r, o, {
    $$slots: i = {},
    $$scope: a
  } = t;
  const l = M("EzoicPlaceholder");
  let s, c, {
      id: u
    } = t,
    {
      class: d = ""
    } = t,
    f = !1;
  const [p, h] = Yu(u);
  return E(e, p, e => n(7, r = e)), E(e, h, e => n(8, o = e)), fn(() => {
    l(`EzoicPlaceholder ${u} unmounted`), c(), hc(r)
  }), e.$$set = e => {
    "id" in e && n(0, u = e.id), "class" in e && n(1, d = e.class), "$$scope" in e && n(9, a = e.$$scope)
  }, e.$$.update = () => {
    1 & e.$$.dirty && W(p, r = u, r), 36 & e.$$.dirty && s && !c && n(5, c = function(e, t) {
      const n = new IntersectionObserver(e => {
        for (const n of e) t(n.isIntersecting)
      }, {
        root: document.documentElement
      });
      return n.observe(e), () => {
        n.disconnect()
      }
    }(s, e => {
      n(6, f = e)
    })), 193 & e.$$.dirty && (f ? (l(`EzoicPlaceholder ${u} visible`), pc(r)) : (l(`EzoicPlaceholder ${u} not visible`), hc(r))), 384 & e.$$.dirty && o && r !== o && (l(`EzoicPlaceholder ${o} -> ${r}`), hc(o), pc(r))
  }, [u, d, s, p, h, c, f, r, o, a, i, function(e) {
    $n[e ? "unshift" : "push"](() => {
      s = e, n(2, s)
    })
  }]
}
class rf extends Zn {
  constructor(e) {
    super(), Jn(this, e, nf, tf, h, {
      id: 0,
      class: 1
    })
  }
}

function of(e) {
  let t, n, o, a, l, s, c, u, d, f, p, h, m, g, v, $, w, y;
  return v = new El({}), {
    c() {
      t = Mt("div"), n = Mt("div"), o = Mt("span"), o.textContent = "Need more powerups?", a = Tt(), l = Mt("span"), s = Pt("Play "), c = Mt("span"), c.textContent = `${be}`, u = Pt(" to get bonus powerups!\n      Only with "), d = Pt(ke), f = Pt(" "), p = Pt(_e), h = Pt("."), m = Tt(), g = Mt("button"), Yn(v.$$.fragment), Dt(o, "class", "mb-1 font-medium uppercase"), Dt(c, "class", "font-medium text-white"), Dt(l, "class", "text-white/70"), Dt(n, "class", "tooltip-material absolute -top-2 z-30 hidden w-max max-w-64 basis-full -translate-y-full flex-col rounded-xl px-4 py-3 text-xs text-white opacity-0 group-hover:-top-4 group-hover:flex group-hover:opacity-100 group-data-[active=active]:hidden"), Dt(g, "class", "xs:px-2 xs:rounded-lg text-tan border-current-color relative z-40 flex aspect-square w-full shrink items-center justify-center self-stretch rounded-md border-2 p-1 opacity-50 transition-[background] duration-[50ms]"), Dt(t, "class", "group relative flex w-screen max-w-12 grow flex-col items-center gap-2")
    },
    m(r, i) {
      Ct(r, t, i), bt(t, n), bt(n, o), bt(n, a), bt(n, l), bt(l, s), bt(l, c), bt(l, u), bt(l, d), bt(l, f), bt(l, p), bt(l, h), bt(t, m), bt(t, g), Qn(v, g, null), e[2](g), $ = !0, w || (y = [Gt(g, "pointerdown", e[3]), Gt(g, "pointerup", e[4])], w = !0)
    },
    p: r,
    i(e) {
      $ || (qn(v.$$.fragment, e), $ = !0)
    },
    o(e) {
      zn(v.$$.fragment, e), $ = !1
    },
    d(n) {
      n && At(t), Xn(v), e[2](null), w = !1, i(y)
    }
  }
}

function af(e, t, n) {
  let r, o = !1;
  return [r, o, function(e) {
    $n[e ? "unshift" : "push"](() => {
      r = e, n(0, r)
    })
  }, () => n(1, o = !0), e => {
    r.contains(document.elementFromPoint(e.clientX, e.clientY)) && o && il(wa), n(1, o = !1)
  }]
}
class lf extends Zn {
  constructor(e) {
    super(), Jn(this, e, af, of, h, {})
  }
}

function sf(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "24"
    }, {
      height: "24"
    }, {
      fill: "#e8eaed"
    }, {
      viewBox: "0 -960 960 960"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487z"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "24"
      }, {
        height: "24"
      }, {
        fill: "#e8eaed"
      }, {
        viewBox: "0 -960 960 960"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function cf(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class uf extends Zn {
  constructor(e) {
    super(), Jn(this, e, cf, sf, h, {})
  }
}

function df(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "20"
    }, {
      height: "20"
    }, {
      fill: "currentColor"
    }, {
      viewBox: "0 -960 960 960"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path d="M480-429 316-265q-11 11-25 10.5T266-266t-11-25.5 11-25.5l163-163-164-164q-11-11-10.5-25.5T266-695t25.5-11 25.5 11l163 164 164-164q11-11 25.5-11t25.5 11 11 25.5-11 25.5L531-480l164 164q11 11 11 25t-11 25-25.5 11-25.5-11z"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "20"
      }, {
        height: "20"
      }, {
        fill: "currentColor"
      }, {
        viewBox: "0 -960 960 960"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function ff(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class pf extends Zn {
  constructor(e) {
    super(), Jn(this, e, ff, df, h, {})
  }
}

function hf(e) {
  let t, n, r;
  const o = e[5].default,
    i = z(o, e, e[4], null);
  return {
    c() {
      t = Mt("div"), i && i.c(), Dt(t, "class", n = "bg-dark-grey auto-hide pointer-events-none absolute right-0 top-0 z-50 flex h-5 min-w-5 -translate-y-1/2 translate-x-1/2 select-none items-center justify-center rounded px-1 text-sm font-medium text-white transition-opacity " + (e[1] ? "!opacity-0" : "") + " svelte-xz8oc0")
    },
    m(e, n) {
      Ct(e, t, n), i && i.m(t, null), r = !0
    },
    p(e, a) {
      i && i.p && (!r || 16 & a) && F(i, o, e, e[4], r ? N(o, e[4], a, null) : j(e[4]), null), (!r || 2 & a && n !== (n = "bg-dark-grey auto-hide pointer-events-none absolute right-0 top-0 z-50 flex h-5 min-w-5 -translate-y-1/2 translate-x-1/2 select-none items-center justify-center rounded px-1 text-sm font-medium text-white transition-opacity " + (e[1] ? "!opacity-0" : "") + " svelte-xz8oc0")) && Dt(t, "class", n)
    },
    i(e) {
      r || (qn(i, e), r = !0)
    },
    o(e) {
      zn(i, e), r = !1
    },
    d(e) {
      e && At(t), i && i.d(e)
    }
  }
}

function mf(e) {
  let t, n, r, o, i = !e[0] && hf(e);
  return {
    c() {
      i && i.c(), t = Et()
    },
    m(a, l) {
      i && i.m(a, l), Ct(a, t, l), n = !0, r || (o = Gt(window, "keydown", e[2]), r = !0)
    },
    p(e, [n]) {
      e[0] ? i && (In(), zn(i, 1, 1, () => {
        i = null
      }), Ln()) : i ? (i.p(e, n), 1 & n && qn(i, 1)) : (i = hf(e), i.c(), qn(i, 1), i.m(t.parentNode, t))
    },
    i(e) {
      n || (qn(i), n = !0)
    },
    o(e) {
      zn(i), n = !1
    },
    d(e) {
      e && At(t), i && i.d(e), r = !1, o()
    }
  }
}

function gf(e, t, n) {
  let {
    $$slots: r = {},
    $$scope: o
  } = t;
  const i = M("KeyboardAction");
  let {
    hidden: a = !1
  } = t, {
    shortcut: l
  } = t, {
    disabled: s = !1
  } = t;
  const c = pn(),
    u = e => {
      i("KeyboardAction Triggered by", e.code, e.shiftKey), c("activate")
    };
  return e.$$set = e => {
    "hidden" in e && n(0, a = e.hidden), "shortcut" in e && n(3, l = e.shortcut), "disabled" in e && n(1, s = e.disabled), "$$scope" in e && n(4, o = e.$$scope)
  }, [a, s, e => {
    var t, n;
    if ("INPUT" === (null == (t = document.activeElement) ? void 0 : t.tagName) || "TEXTAREA" === (null == (n = document.activeElement) ? void 0 : n.tagName) || e.ctrlKey || e.metaKey || e.altKey) return;
    const r = e.key.toLowerCase(),
      o = e.code;
    for (const i of l)
      if ("key" in i) {
        if (i.key.toLowerCase() === r) return void u(e)
      } else if (i.code === o) return void u(e)
  }, l, o, r]
}
class vf extends Zn {
  constructor(e) {
    super(), Jn(this, e, gf, mf, h, {
      hidden: 0,
      shortcut: 3,
      disabled: 1
    })
  }
}

function $f(e, t, n) {
  const r = e.slice();
  return r[4] = t[n], r[6] = n, r
}

function wf(e) {
  let t, n;
  return {
    c() {
      t = Mt("div"), Dt(t, "class", n = "h-[3px] flex-auto rounded-full " + (e[1] === Ve.Dark ? e[6] < e[2] ? "bg-white/40" : "bg-white/10" : e[6] < e[2] ? "bg-[#A79B8B]" : "bg-[#A79B8B]/30"))
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p(e, r) {
      6 & r && n !== (n = "h-[3px] flex-auto rounded-full " + (e[1] === Ve.Dark ? e[6] < e[2] ? "bg-white/40" : "bg-white/10" : e[6] < e[2] ? "bg-[#A79B8B]" : "bg-[#A79B8B]/30")) && Dt(t, "class", n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function yf(e) {
  let t, n = Wn({
      length: B[e[0]].usesLimit
    }),
    o = [];
  for (let r = 0; r < n.length; r += 1) o[r] = wf($f(e, n, r));
  return {
    c() {
      t = Mt("div");
      for (let e = 0; e < o.length; e += 1) o[e].c();
      Dt(t, "class", "flex gap-[3px] self-stretch px-1.5")
    },
    m(e, n) {
      Ct(e, t, n);
      for (let r = 0; r < o.length; r += 1) o[r] && o[r].m(t, null)
    },
    p(e, [r]) {
      if (7 & r) {
        let i;
        for (n = Wn({
            length: B[e[0]].usesLimit
          }), i = 0; i < n.length; i += 1) {
          const a = $f(e, n, i);
          o[i] ? o[i].p(a, r) : (o[i] = wf(a), o[i].c(), o[i].m(t, null))
        }
        for (; i < o.length; i += 1) o[i].d(1);
        o.length = n.length
      }
    },
    i: r,
    o: r,
    d(e) {
      e && At(t), Bt(o, e)
    }
  }
}

function xf(e, t, n) {
  let r, o;
  E(e, sa, e => n(3, o = e));
  let {
    powerup: i
  } = t, {
    visualStyle: a = Ve.Default
  } = t;
  return e.$$set = e => {
    "powerup" in e && n(0, i = e.powerup), "visualStyle" in e && n(1, a = e.visualStyle)
  }, e.$$.update = () => {
    var t, a;
    9 & e.$$.dirty && v(void 0 !== (null == (t = o.powerups[i]) ? void 0 : t.usesRemaining), `Powerup ${i} not found in gameplay store`), 9 & e.$$.dirty && n(2, r = (null == (a = o.powerups[i]) ? void 0 : a.usesRemaining) ?? 0)
  }, [i, a, r, o]
}
class bf extends Zn {
  constructor(e) {
    super(), Jn(this, e, xf, yf, h, {
      powerup: 0,
      visualStyle: 1
    })
  }
}

function _f(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "32"
    }, {
      height: "32"
    }, {
      fill: "none"
    }, {
      viewBox: "0 0 32 32"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path fill="currentColor" d="M22.667 10.067q-.166 0-.334-.034A1 1 0 0 1 22 9.9l-1.167-.667a1.3 1.3 0 0 0-1.016-.116 1.3 1.3 0 0 0-.817.616l-.167.267 1.334.767q.7.399.916 1.2a1.9 1.9 0 0 1-.183 1.5l-.9 1.6q.767 1.2 1.15 2.55.384 1.35.383 2.783 0 4.167-2.916 7.083T11.533 30.4 4.45 27.45t-2.917-7.117 2.884-7.05 7.05-2.883h.433l.9-1.567a1.87 1.87 0 0 1 1.2-.95 1.92 1.92 0 0 1 1.533.217l1 .567.167-.267q.767-1.434 2.4-1.867t3.067.4l1.133.634q.3.166.5.483t.2.683q0 .567-.383.95a1.3 1.3 0 0 1-.95.384m4 .333q0-.567.383-.95a1.3 1.3 0 0 1 .95-.383h1.333q.567 0 .95.383.384.383.384.95 0 .566-.384.95a1.3 1.3 0 0 1-.95.383H28a1.3 1.3 0 0 1-.95-.383 1.3 1.3 0 0 1-.383-.95m-6-6a1.3 1.3 0 0 1-.95-.383 1.3 1.3 0 0 1-.384-.95V1.733q0-.566.384-.95a1.3 1.3 0 0 1 .95-.383q.567 0 .95.383.383.384.383.95v1.334q0 .566-.383.95a1.3 1.3 0 0 1-.95.383M24.9 6.167q-.366-.367-.367-.934 0-.567.367-.933l.967-.967q.366-.366.933-.366t.933.366q.367.367.367.934 0 .565-.367.933l-.966.967q-.367.366-.934.366-.565 0-.933-.366" style="fill:currentColor;fill-opacity:1"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "32"
      }, {
        height: "32"
      }, {
        fill: "none"
      }, {
        viewBox: "0 0 32 32"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function kf(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class Cf extends Zn {
  constructor(e) {
    super(), Jn(this, e, kf, _f, h, {})
  }
}

function Sf(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "32"
    }, {
      height: "32"
    }, {
      fill: "none"
    }, {
      viewBox: "0 0 32 32"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path fill="currentColor" fill-rule="evenodd" d="M27 15a4 4 0 0 1-4 4h-6a4 4 0 0 1-.46-.026l-.04-.005A4 4 0 0 1 13 15V9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4zm-16-2H9a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-2h-2q-.252 0-.5-.02V23a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 23v-6A1.5 1.5 0 0 1 9 15.5h2.02A6 6 0 0 1 11 15zm10-4a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z" clip-rule="evenodd" style="fill:currentColor;fill-opacity:1"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "32"
      }, {
        height: "32"
      }, {
        fill: "none"
      }, {
        viewBox: "0 0 32 32"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function Af(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class Bf extends Zn {
  constructor(e) {
    super(), Jn(this, e, Af, Sf, h, {})
  }
}

function Mf(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "32"
    }, {
      height: "32"
    }, {
      fill: "none"
    }, {
      viewBox: "0 0 32 32"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<rect width="12" height="12" x="15" y="15" fill="currentColor" rx="4" style="fill:currentColor;fill-opacity:1" transform="rotate(180 15 15)"/><rect width="9.5" height="9.5" x="13.75" y="27.75" stroke="currentColor" stroke-linecap="round" stroke-width="2.5" rx="2.75" style="stroke:currentColor;stroke-opacity:1" transform="rotate(180 13.75 27.75)"/><rect width="9.5" height="9.5" x="27.75" y="13.75" stroke="currentColor" stroke-linecap="round" stroke-width="2.5" rx="2.75" style="stroke:currentColor;stroke-opacity:1" transform="rotate(180 27.75 13.75)"/><rect width="12" height="12" x="29" y="29" fill="currentColor" rx="4" style="fill:currentColor;fill-opacity:1" transform="rotate(180 29 29)"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "32"
      }, {
        height: "32"
      }, {
        fill: "none"
      }, {
        viewBox: "0 0 32 32"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function Of(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class Pf extends Zn {
  constructor(e) {
    super(), Jn(this, e, Of, Mf, h, {})
  }
}

function Tf(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "32"
    }, {
      height: "32"
    }, {
      fill: "none"
    }, {
      viewBox: "0 0 32 32"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 26.8c-4.564-.927-8-4.962-8-9.8 0-5.523 4.477-10 10-10h3m0 0-3-4m3 4-3 4" style="stroke:currentColor;stroke-opacity:1"/><path stroke="currentColor" stroke-dasharray="3 4" stroke-linecap="round" stroke-width="2.5" d="M25.037 12.716a9.95 9.95 0 0 1 .865 5.676c-.673 4.79-4.637 8.309-9.286 8.59" style="stroke:currentColor;stroke-opacity:1"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "32"
      }, {
        height: "32"
      }, {
        fill: "none"
      }, {
        viewBox: "0 0 32 32"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function Ef(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class Gf extends Zn {
  constructor(e) {
    super(), Jn(this, e, Ef, Tf, h, {})
  }
}

function Df(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "32"
    }, {
      height: "32"
    }, {
      fill: "none"
    }, {
      viewBox: "0 0 32 32"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9h.53a4 4 0 0 1 3.96 3.434L23 16m0 0 3.5-3.5M23 16l-4-2" style="stroke:currentColor;stroke-opacity:1"/><path fill="currentColor" fill-rule="evenodd" d="M16.006 25.23A4 4 0 0 0 20 29h5a4 4 0 0 0 4-4v-5a4 4 0 0 0-2.19-3.568l-1.689 1.69a3 3 0 0 1-3.463.561l-3.939-1.97A4 4 0 0 0 16 20v.764c.614.55 1 1.347 1 2.236 0 .885-.384 1.681-.994 2.23" clip-rule="evenodd" style="fill:currentColor;fill-opacity:1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 23h-.53a4 4 0 0 1-3.96-3.434L9 16m0 0-3.5 3.5M9 16l4 2" style="stroke:currentColor;stroke-opacity:1"/><path fill="currentColor" fill-rule="evenodd" d="M3 7a4 4 0 0 1 4-4h5a4 4 0 0 1 3.993 3.77A3 3 0 0 0 15 9a3 3 0 0 0 1 2.236V12c0 1.361-.68 2.564-1.72 3.286l-3.938-1.97a3 3 0 0 0-3.463.563l-1.69 1.689A4 4 0 0 1 3 12z" clip-rule="evenodd" style="fill:currentColor;fill-opacity:1"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "32"
      }, {
        height: "32"
      }, {
        fill: "none"
      }, {
        viewBox: "0 0 32 32"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function If(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class Lf extends Zn {
  constructor(e) {
    super(), Jn(this, e, If, Df, h, {})
  }
}

function qf(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "32"
    }, {
      height: "32"
    }, {
      fill: "none"
    }, {
      viewBox: "0 0 32 32"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 13-6 6m6-6 .5 5m-.5-5-5-.5" style="stroke:currentColor;stroke-opacity:1"/><path fill="currentColor" fill-rule="evenodd" d="M20 5.5h5A1.5 1.5 0 0 1 26.5 7v5a1.5 1.5 0 0 1-1.5 1.5h-2.935l.25 2.5H25a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-5a4 4 0 0 0-4 4v2.685l2.5.25V7A1.5 1.5 0 0 1 20 5.5M11.757 16H6.6A3.6 3.6 0 0 0 3 19.6v5.8A3.6 3.6 0 0 0 6.6 29h5.8a3.6 3.6 0 0 0 3.6-3.6v-5.157l-.879.878a3 3 0 1 1-4.242-4.242z" clip-rule="evenodd" style="fill:currentColor;fill-opacity:1"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "32"
      }, {
        height: "32"
      }, {
        fill: "none"
      }, {
        viewBox: "0 0 32 32"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function zf(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class Ff extends Zn {
  constructor(e) {
    super(), Jn(this, e, zf, qf, h, {})
  }
}

function jf(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "32"
    }, {
      height: "32"
    }, {
      fill: "none"
    }, {
      viewBox: "0 0 32 32"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 25h6.5a8.5 8.5 0 0 0 8.5-8.5v0A8.5 8.5 0 0 0 16.5 8H8m0 0 3.5-4M8 8l3.5 4" style="stroke:currentColor;stroke-opacity:1"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "32"
      }, {
        height: "32"
      }, {
        fill: "none"
      }, {
        viewBox: "0 0 32 32"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function Nf(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class Rf extends Zn {
  constructor(e) {
    super(), Jn(this, e, Nf, jf, h, {})
  }
}

function Uf(e) {
  switch (e) {
    case et.MergeAnyTwoAdjacentTiles:
      return Bf;
    case et.RemoveTilesByValue:
      return Pf;
    case et.RotateOuterRingOfBoard:
      return Gf;
    case et.SwapTwoTiles:
      return Lf;
    case et.TeleportTileToEmptyCell:
      return Ff;
    case et.Undo:
      return Rf;
    case et.Bomb:
      return Cf;
    default:
      y()
  }
}

function Wf(e) {
  let t, n, r, o;
  return r = new uf({}), {
    c() {
      t = Mt("div"), n = Mt("div"), Yn(r.$$.fragment), Dt(n, "class", "tooltip-material absolute -top-2 flex h-8 w-8 -translate-y-full items-center justify-center rounded-md text-2xl font-medium text-white"), Dt(t, "class", "animate-throb absolute flex items-center justify-center group-hover:hidden")
    },
    m(e, i) {
      Ct(e, t, i), bt(t, n), Qn(r, n, null), o = !0
    },
    i(e) {
      o || (qn(r.$$.fragment, e), o = !0)
    },
    o(e) {
      zn(r.$$.fragment, e), o = !1
    },
    d(e) {
      e && At(t), Xn(r)
    }
  }
}

function Hf(e) {
  let t, n = (e[1] + 1).toString() + "";
  return {
    c() {
      t = Pt(n)
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p(e, r) {
      2 & r[0] && n !== (n = (e[1] + 1).toString() + "") && Ht(t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Vf(e) {
  let t, n, o, i, a, l, s;
  return t = new vf({
    props: {
      hidden: !0,
      shortcut: [{
        key: "Escape"
      }]
    }
  }), t.$on("activate", e[29]), i = new pf({}), {
    c() {
      Yn(t.$$.fragment), n = Tt(), o = Mt("button"), Yn(i.$$.fragment), Dt(o, "class", "bg-dark-grey absolute bottom-0 right-1/2 flex h-6 w-6 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full text-white")
    },
    m(r, c) {
      Qn(t, r, c), Ct(r, n, c), Ct(r, o, c), Qn(i, o, null), a = !0, l || (s = Gt(o, "click", e[30]), l = !0)
    },
    p: r,
    i(e) {
      a || (qn(t.$$.fragment, e), qn(i.$$.fragment, e), a = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), zn(i.$$.fragment, e), a = !1
    },
    d(e) {
      e && (At(n), At(o)), Xn(t, e), Xn(i), l = !1, s()
    }
  }
}

function Kf(e) {
  let t, n, r, o, i, a, l, s, c, u, d, f, p, h, m, g, v, $, w, y, x, b, _, k, C, S, A, B = e[12].powerup.variants[e[2]].title() + "",
    M = e[12].powerup.usesLeft({
      usesRemaining: e[5]
    }) + "",
    O = e[12].powerup.obtainByCreatingTile({
      tile: lt[e[2]]
    }) + "",
    P = e[10] && Wf();
  h = new vf({
    props: {
      shortcut: [{
        code: `Digit${e[1]+1}`
      }],
      disabled: e[7],
      $$slots: {
        default: [Hf]
      },
      $$scope: {
        ctx: e
      }
    }
  }), h.$on("activate", e[27]);
  var T = Uf(e[2]);
  T && (v = tn(T, {
    props: {
      class: "aspect-square h-auto w-full min-w-0 max-w-8 shrink"
    }
  }));
  let E = e[3] && Vf(e);
  return x = new bf({
    props: {
      powerup: e[2],
      visualStyle: e[0]
    }
  }), {
    c() {
      t = Mt("div"), P && P.c(), n = Tt(), r = Mt("div"), o = Mt("div"), i = Mt("span"), a = Pt(B), l = Tt(), s = Mt("span"), c = Pt(M), u = Tt(), d = Mt("span"), f = Pt(O), p = Tt(), Yn(h.$$.fragment), m = Tt(), g = Mt("button"), v && Yn(v.$$.fragment), w = Tt(), E && E.c(), y = Tt(), Yn(x.$$.fragment), Dt(i, "class", "font-medium uppercase"), Dt(s, "class", "shrink-0 opacity-70"), Dt(o, "class", "mb-1 flex items-start gap-2"), Dt(d, "class", "opacity-70"), Dt(r, "class", "tooltip-material absolute -top-2 z-30 hidden w-max max-w-64 basis-full -translate-y-full flex-col rounded-xl px-4 py-3 text-xs text-white opacity-0 group-hover:-top-4 group-hover:flex group-hover:opacity-100 group-data-[active=active]:hidden"), Vt(g, "transform", "translateY(" + -30 * e[11] + "px)"), Dt(g, "class", $ = "xs:p-2 xs:rounded-lg relative z-40 flex aspect-square w-full shrink items-center justify-center self-stretch rounded-md p-1 text-white transition-[background,shadow] duration-[50ms] " + (e[0] === Ve.Dark ? e[7] ? "bg-near-black shadow-button" : e[8] ? "bg-light-grey shadow-button" : "bg-light-grey/40" : e[7] ? "bg-tan shadow-button" : e[8] ? "bg-leather shadow-button" : "bg-leather/30")), Dt(t, "data-active", b = e[7] ? "active" : ""), Dt(t, "class", _ = "group relative flex w-screen max-w-12 grow flex-col items-center gap-2 " + (e[4] ? "" : "opacity-0"))
    },
    m($, b) {
      Ct($, t, b), P && P.m(t, null), bt(t, n), bt(t, r), bt(r, o), bt(o, i), bt(i, a), bt(o, l), bt(o, s), bt(s, c), bt(r, u), bt(r, d), bt(d, f), bt(t, p), Qn(h, t, null), bt(t, m), bt(t, g), v && Qn(v, g, null), bt(t, w), E && E.m(t, null), bt(t, y), Qn(x, t, null), C = !0, S || (A = Gt(g, "click", e[28]), S = !0)
    },
    p(e, r) {
      e[10] ? P ? 1024 & r[0] && qn(P, 1) : (P = Wf(), P.c(), qn(P, 1), P.m(t, n)) : P && (In(), zn(P, 1, 1, () => {
        P = null
      }), Ln()), (!C || 4100 & r[0]) && B !== (B = e[12].powerup.variants[e[2]].title() + "") && Ht(a, B), (!C || 4128 & r[0]) && M !== (M = e[12].powerup.usesLeft({
        usesRemaining: e[5]
      }) + "") && Ht(c, M), (!C || 4100 & r[0]) && O !== (O = e[12].powerup.obtainByCreatingTile({
        tile: lt[e[2]]
      }) + "") && Ht(f, O);
      const o = {};
      if (2 & r[0] && (o.shortcut = [{
          code: `Digit${e[1]+1}`
        }]), 128 & r[0] && (o.disabled = e[7]), 2 & r[0] | 1 & r[1] && (o.$$scope = {
          dirty: r,
          ctx: e
        }), h.$set(o), 4 & r[0] && T !== (T = Uf(e[2]))) {
        if (v) {
          In();
          const e = v;
          zn(e.$$.fragment, 1, 0, () => {
            Xn(e, 1)
          }), Ln()
        }
        T ? (v = tn(T, {
          props: {
            class: "aspect-square h-auto w-full min-w-0 max-w-8 shrink"
          }
        }), Yn(v.$$.fragment), qn(v.$$.fragment, 1), Qn(v, g, null)) : v = null
      }(!C || 2048 & r[0]) && Vt(g, "transform", "translateY(" + -30 * e[11] + "px)"), (!C || 385 & r[0] && $ !== ($ = "xs:p-2 xs:rounded-lg relative z-40 flex aspect-square w-full shrink items-center justify-center self-stretch rounded-md p-1 text-white transition-[background,shadow] duration-[50ms] " + (e[0] === Ve.Dark ? e[7] ? "bg-near-black shadow-button" : e[8] ? "bg-light-grey shadow-button" : "bg-light-grey/40" : e[7] ? "bg-tan shadow-button" : e[8] ? "bg-leather shadow-button" : "bg-leather/30"))) && Dt(g, "class", $), e[3] ? E ? (E.p(e, r), 8 & r[0] && qn(E, 1)) : (E = Vf(e), E.c(), qn(E, 1), E.m(t, y)) : E && (In(), zn(E, 1, 1, () => {
        E = null
      }), Ln());
      const i = {};
      4 & r[0] && (i.powerup = e[2]), 1 & r[0] && (i.visualStyle = e[0]), x.$set(i), (!C || 128 & r[0] && b !== (b = e[7] ? "active" : "")) && Dt(t, "data-active", b), (!C || 16 & r[0] && _ !== (_ = "group relative flex w-screen max-w-12 grow flex-col items-center gap-2 " + (e[4] ? "" : "opacity-0"))) && Dt(t, "class", _)
    },
    i(n) {
      C || (qn(P), qn(h.$$.fragment, n), v && qn(v.$$.fragment, n), qn(E), qn(x.$$.fragment, n), k || Cn(() => {
        k = jn(t, e[9], {}), k.start()
      }), C = !0)
    },
    o(e) {
      zn(P), zn(h.$$.fragment, e), v && zn(v.$$.fragment, e), zn(E), zn(x.$$.fragment, e), C = !1
    },
    d(e) {
      e && At(t), P && P.d(), Xn(h), v && Xn(v), E && E.d(), Xn(x), S = !1, A()
    }
  }
}

function Yf(e) {
  let t, n, o = e[4] && e[5],
    i = Kf(e);
  return {
    c() {
      i.c(), t = Et()
    },
    m(e, r) {
      i.m(e, r), Ct(e, t, r), n = !0
    },
    p(e, n) {
      48 & n[0] && h(o, o = e[4] && e[5]) ? (In(), zn(i, 1, 1, r), Ln(), i = Kf(e), i.c(), qn(i, 1), i.m(t.parentNode, t)) : i.p(e, n)
    },
    i(e) {
      n || (qn(i), n = !0)
    },
    o(e) {
      zn(i), n = !1
    },
    d(e) {
      e && At(t), i.d(e)
    }
  }
}

function Qf(e, t, n) {
  let r, o, i, a, l, s, c, u, d, f, p, h, m, v, $, w;
  E(e, sa, e => n(20, d = e)), E(e, la, e => n(25, v = e)), E(e, aa, e => n(26, $ = e)), E(e, ud, e => n(12, w = e));
  let {
    visualStyle: y = Ve.Default
  } = t, {
    index: x
  } = t, {
    powerup: b
  } = t, {
    justBecameAllowed: _ = !1
  } = t, {
    playAllowedAnimation: k = !1
  } = t;
  const [C, S] = Yu(r, {
    requireChange: !1
  });
  E(e, C, e => n(23, h = e)), E(e, S, e => n(24, m = e));
  let A = !_ && (null === $ || $.has(b));
  const [B, M] = Yu(i, {
    requireChange: !1
  });
  E(e, B, e => n(22, p = e)), E(e, M, e => n(21, f = e));
  const O = Fd(0);
  return E(e, O, e => n(11, u = e)), O.damping = .35, O.stiffness = .15, e.$$set = e => {
    "visualStyle" in e && n(0, y = e.visualStyle), "index" in e && n(1, x = e.index), "powerup" in e && n(2, b = e.powerup), "justBecameAllowed" in e && n(17, _ = e.justBecameAllowed), "playAllowedAnimation" in e && n(18, k = e.playAllowedAnimation)
  }, e.$$.update = () => {
    var t;
    67108868 & e.$$.dirty[0] && n(4, r = null === $ || $.has(b)), 16 & e.$$.dirty[0] && W(C, h = r, h), 33554436 & e.$$.dirty[0] && n(10, o = v && v.has(b)), 1048580 & e.$$.dirty[0] && n(5, i = (null == (t = d.powerups[b]) ? void 0 : t.usesRemaining) ?? 0), 32 & e.$$.dirty[0] && W(B, p = i, p), 33423362 & e.$$.dirty[0] && n(9, a = e => k && (_ && void 0 === m || !1 === m && !0 === h) && !A ? (n(19, A = !0), tc(0, {
      range: -30,
      delay: 400 + 100 * x
    })) : d.state !== g.Fresh && null != f && p > f ? tc(0, {
      range: -30
    }) : Zs(e, {
      duration: 0
    })), 1048596 & e.$$.dirty[0] && n(8, l = r && rt(d, b) && d.state !== g.GameOver && d.state !== g.GameWon), 1048580 & e.$$.dirty[0] && n(7, s = it(d, b)), 1048580 & e.$$.dirty[0] && n(3, c = at(d, b)), 8 & e.$$.dirty[0] && W(O, u = c ? 1 : 0, u)
  }, [y, x, b, c, r, i, O, s, l, a, o, u, w, C, S, B, M, _, k, A, d, f, p, h, m, v, $, () => sa.activatePowerup(b), () => sa.activatePowerup(b), () => sa.cancelPowerup(b), () => sa.cancelPowerup(b)]
}
class Xf extends Zn {
  constructor(e) {
    super(), Jn(this, e, Qf, Yf, h, {
      visualStyle: 0,
      index: 1,
      powerup: 2,
      justBecameAllowed: 17,
      playAllowedAnimation: 18
    }, null, [-1, -1])
  }
}

function Jf(e, t, n) {
  const r = e.slice();
  return r[12] = t[n], r[14] = n, r
}

function Zf(e) {
  var t;
  let n, o, i = 0 !== (null == (t = e[1]) ? void 0 : t.size),
    a = rp(e);
  return {
    c() {
      a.c(), n = Et()
    },
    m(e, t) {
      a.m(e, t), Ct(e, n, t), o = !0
    },
    p(e, t) {
      var o;
      2 & t && h(i, i = 0 !== (null == (o = e[1]) ? void 0 : o.size)) ? (In(), zn(a, 1, 1, r), Ln(), a = rp(e), a.c(), qn(a, 1), a.m(n.parentNode, n)) : a.p(e, t)
    },
    i(e) {
      o || (qn(a), o = !0)
    },
    o(e) {
      zn(a), o = !1
    },
    d(e) {
      e && At(n), a.d(e)
    }
  }
}

function ep(e) {
  let t, n;
  return t = new Xf({
    props: {
      powerup: e[12],
      index: e[14],
      visualStyle: e[5],
      playAllowedAnimation: e[2] === Z.Tutorial,
      justBecameAllowed: !!e[7] && (null === e[6] || e[6].has(e[12]) && !e[7].has(e[12]))
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, n) {
      const r = {};
      16 & n && (r.powerup = e[12]), 32 & n && (r.visualStyle = e[5]), 4 & n && (r.playAllowedAnimation = e[2] === Z.Tutorial), 208 & n && (r.justBecameAllowed = !!e[7] && (null === e[6] || e[6].has(e[12]) && !e[7].has(e[12]))), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function tp(e) {
  let t, n, o = e[12],
    i = ep(e);
  return {
    c() {
      i.c(), t = Et()
    },
    m(e, r) {
      i.m(e, r), Ct(e, t, r), n = !0
    },
    p(e, n) {
      16 & n && h(o, o = e[12]) ? (In(), zn(i, 1, 1, r), Ln(), i = ep(e), i.c(), qn(i, 1), i.m(t.parentNode, t)) : i.p(e, n)
    },
    i(e) {
      n || (qn(i), n = !0)
    },
    o(e) {
      zn(i), n = !1
    },
    d(e) {
      e && At(t), i.d(e)
    }
  }
}

function np(e) {
  let t, n;
  return t = new lf({}), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function rp(e) {
  let t, n, r, o, i, a = Wn(e[4]),
    l = [];
  for (let u = 0; u < a.length; u += 1) l[u] = tp(Jf(e, a, u));
  const s = e => zn(l[e], 1, 1, () => {
    l[e] = null
  });
  let c = e[2] === Z.Standard && (e[8] === zs.Unauthenticated || e[8] === zs.Available) && np();
  return {
    c() {
      t = Mt("div");
      for (let e = 0; e < l.length; e += 1) l[e].c();
      n = Tt(), c && c.c(), Dt(t, "class", r = "xs:p-3 xs:rounded-3xl relative flex max-w-[calc(100vw-20px)] gap-2 rounded-xl p-2 transition-opacity sm:gap-3 " + (e[5] === Ve.Dark ? "bg-dark-grey" : "bg-sand") + " " + (e[3] ? "" : "pointer-events-none opacity-0"))
    },
    m(e, r) {
      Ct(e, t, r);
      for (let n = 0; n < l.length; n += 1) l[n] && l[n].m(t, null);
      bt(t, n), c && c.m(t, null), i = !0
    },
    p(e, o) {
      if (244 & o) {
        let r;
        for (a = Wn(e[4]), r = 0; r < a.length; r += 1) {
          const i = Jf(e, a, r);
          l[r] ? (l[r].p(i, o), qn(l[r], 1)) : (l[r] = tp(i), l[r].c(), qn(l[r], 1), l[r].m(t, n))
        }
        for (In(), r = a.length; r < l.length; r += 1) s(r);
        Ln()
      }
      e[2] !== Z.Standard || e[8] !== zs.Unauthenticated && e[8] !== zs.Available ? c && (In(), zn(c, 1, 1, () => {
        c = null
      }), Ln()) : c ? 260 & o && qn(c, 1) : (c = np(), c.c(), qn(c, 1), c.m(t, null)), (!i || 40 & o && r !== (r = "xs:p-3 xs:rounded-3xl relative flex max-w-[calc(100vw-20px)] gap-2 rounded-xl p-2 transition-opacity sm:gap-3 " + (e[5] === Ve.Dark ? "bg-dark-grey" : "bg-sand") + " " + (e[3] ? "" : "pointer-events-none opacity-0"))) && Dt(t, "class", r)
    },
    i(e) {
      if (!i) {
        for (let e = 0; e < a.length; e += 1) qn(l[e]);
        qn(c), e && (o || Cn(() => {
          o = jn(t, tc, {
            range: 30
          }), o.start()
        })), i = !0
      }
    },
    o(e) {
      l = l.filter(Boolean);
      for (let t = 0; t < l.length; t += 1) zn(l[t]);
      zn(c), i = !1
    },
    d(e) {
      e && At(t), Bt(l, e), c && c.d()
    }
  }
}

function op(e) {
  let t, n, r = e[0] && Zf(e);
  return {
    c() {
      r && r.c(), t = Et()
    },
    m(e, o) {
      r && r.m(e, o), Ct(e, t, o), n = !0
    },
    p(e, [n]) {
      e[0] ? r ? (r.p(e, n), 1 & n && qn(r, 1)) : (r = Zf(e), r.c(), qn(r, 1), r.m(t.parentNode, t)) : r && (In(), zn(r, 1, 1, () => {
        r = null
      }), Ln())
    },
    i(e) {
      n || (qn(r), n = !0)
    },
    o(e) {
      zn(r), n = !1
    },
    d(e) {
      e && At(t), r && r.d(e)
    }
  }
}

function ip(e, t, n) {
  let r, o, i, a, l, s, c, u, d, f;
  E(e, aa, e => n(1, l = e)), E(e, sa, e => n(11, s = e)), E(e, J, e => n(2, c = e)), E(e, Fs, e => n(8, f = e));
  const [p, h] = Yu(l);
  return E(e, p, e => n(6, u = e)), E(e, h, e => n(7, d = e)), e.$$.update = () => {
    2048 & e.$$.dirty && n(4, o = Object.keys(s.powerups)), 2 & e.$$.dirty && W(p, u = l, u), 2052 & e.$$.dirty && n(0, i = void 0 !== c && 0 !== Object.keys(s.powerups).length), 3 & e.$$.dirty && n(3, a = i && 0 !== (null == l ? void 0 : l.size))
  }, n(5, r = Ve.Default), [i, l, c, a, o, r, u, d, f, p, h, s]
}
class ap extends Zn {
  constructor(e) {
    super(), Jn(this, e, ip, op, h, {})
  }
}
var lp, sp;
(sp = lp || (lp = {})).string = "string", sp.array = "array", sp.object = "object", sp.mediaQueryList = "mediaQueryList";
const cp = e => e instanceof Object && "function" == typeof e.addListener && "function" == typeof e.removeListener ? lp.mediaQueryList : Array.isArray(e) ? lp.array : e instanceof Object ? lp.object : lp.string;
class up {
  static get(e) {
    return !!e.media && e.matches
  }
  static inline(e) {
    return up.get(e)
  }
  static array(e) {
    return e.map(e => dp(e))
  }
  static object(e) {
    const t = {};
    for (const n in e) t[n] = dp(e[n]);
    return t
  }
}

function dp(e) {
  const t = cp(e);
  return t === lp.mediaQueryList ? up.inline(e) : t === lp.array ? up.array(e) : t === lp.object ? up.object(e) : void 0
}
class fp {
  static get(e) {
    return window.matchMedia(e)
  }
  static inline(e) {
    return fp.get(e)
  }
  static array(e) {
    return e.map(e => pp(e))
  }
  static object(e) {
    const t = {};
    for (const n in e) t[n] = pp(e[n]);
    return t
  }
}

function pp(e) {
  const t = cp(e);
  return t === lp.string ? fp.inline(e) : t === lp.array ? fp.array(e) : t === lp.object ? fp.object(e) : void 0
}
var hp, mp;
(mp = hp || (hp = {})).add = "addEventListener", mp.remove = "removeEventListener";
class gp {
  static inline(e, t = () => {}, n = hp.add) {
    e && e[n] && e[n]("change", t)
  }
  static array(e, t = () => {}, n = hp.add) {
    e.flat(1 / 0).forEach(e => vp(e, t, n))
  }
  static object(e, t = () => {}, n = hp.add) {
    for (const r in e) vp(e[r], t, n)
  }
}

function vp(e, t = () => {}, n = hp.add) {
  const r = cp(e);
  return r === lp.mediaQueryList ? gp.inline(e, t, n) : r === lp.array ? gp.array(e, t, n) : r === lp.object ? gp.object(e, t, n) : void 0
}
const $p = e => ({
    matches: 1 & e,
    matchesArray: 2 & e
  }),
  wp = e => ({
    matches: e[0],
    matchesArray: e[1]
  });

function yp(e) {
  let t;
  const n = e[7].default,
    r = z(n, e, e[6], wp);
  return {
    c() {
      r && r.c()
    },
    m(e, n) {
      r && r.m(e, n), t = !0
    },
    p(e, [o]) {
      r && r.p && (!t || 67 & o) && F(r, n, e, e[6], t ? N(n, e[6], o, $p) : j(e[6]), wp)
    },
    i(e) {
      t || (qn(r, e), t = !0)
    },
    o(e) {
      zn(r, e), t = !1
    },
    d(e) {
      r && r.d(e)
    }
  }
}

function xp(e, t, n) {
  let o, i = r;
  e.$$.on_destroy.push(() => i());
  let a, {
      $$slots: l = {},
      $$scope: s
    } = t,
    {
      query: c = ""
    } = t,
    {
      matches: u = !1
    } = t,
    {
      matchesArray: d = []
    } = t,
    {
      matchesObject: p = {}
    } = t;
  const h = (...e) => {
      c ? (n(1, d = Array.isArray(o) ? o : []), n(3, p = cp(o) === lp.object ? o : {}), n(0, u = o ?? (cp(c) === lp.array ? [] : cp(c) === lp.object && {}))) : (n(0, u = !1), n(1, d = []))
    },
    m = () => {
      n(2, a = function(e) {
        if ("undefined" == typeof window) return {
          ...f(void 0),
          destroy: () => {}
        };
        const {
          subscribe: t,
          set: n
        } = f(void 0), r = pp(e), o = () => n(dp(r));
        return o(), vp(r, o), {
          subscribe: t,
          destroy() {
            vp(r, o, hp.remove)
          }
        }
      }(c)), i(), i = U(a, e => n(5, o = e)), h()
    },
    g = () => {
      h(), null == a || a.destroy
    };
  return dn(() => {
    m()
  }), fn(() => {
    g()
  }), e.$$set = e => {
    "query" in e && n(4, c = e.query), "matches" in e && n(0, u = e.matches), "matchesArray" in e && n(1, d = e.matchesArray), "matchesObject" in e && n(3, p = e.matchesObject), "$$scope" in e && n(6, s = e.$$scope)
  }, e.$$.update = () => {
    16 & e.$$.dirty && (g(), c && m()), 32 & e.$$.dirty && h()
  }, [u, d, a, p, c, o, s, l]
}
class bp extends Zn {
  constructor(e) {
    super(), Jn(this, e, xp, yp, h, {
      query: 4,
      matches: 0,
      matchesArray: 1,
      matchesObject: 3
    })
  }
}

function _p(e) {
  let t;
  return {
    c() {
      t = Pt("Play Again")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function kp(e) {
  var t, n, r;
  let o, i, a, l;

  function s(e, t) {
    var n, r;
    return (null == (n = e[1]) ? void 0 : n.undoAvailable) ? Bp : (null == (r = e[1]) ? void 0 : r.hasPreviousGameplay) ? Sp : Ap
  }
  o = new Ro({
    props: {
      type: (null == (t = e[1]) ? void 0 : t.undoAvailable) ? "primary" : "secondary",
      size: e[0],
      disabled: !(null == (n = e[1]) ? void 0 : n.undoAvailable),
      autofocus: null == (r = e[1]) ? void 0 : r.undoAvailable,
      $$slots: {
        default: [Cp]
      },
      $$scope: {
        ctx: e
      }
    }
  }), o.$on("click", e[4]);
  let c = s(e),
    u = c(e);
  return {
    c() {
      Yn(o.$$.fragment), i = Tt(), a = Mt("p"), u.c(), Dt(a, "class", "text-leather text-center text-sm")
    },
    m(e, t) {
      Qn(o, e, t), Ct(e, i, t), Ct(e, a, t), u.m(a, null), l = !0
    },
    p(e, t) {
      var n, r, i;
      const l = {};
      2 & t && (l.type = (null == (n = e[1]) ? void 0 : n.undoAvailable) ? "primary" : "secondary"), 1 & t && (l.size = e[0]), 2 & t && (l.disabled = !(null == (r = e[1]) ? void 0 : r.undoAvailable)), 2 & t && (l.autofocus = null == (i = e[1]) ? void 0 : i.undoAvailable), 32 & t && (l.$$scope = {
        dirty: t,
        ctx: e
      }), o.$set(l), c === (c = s(e)) && u ? u.p(e, t) : (u.d(1), u = c(e), u && (u.c(), u.m(a, null)))
    },
    i(e) {
      l || (qn(o.$$.fragment, e), l = !0)
    },
    o(e) {
      zn(o.$$.fragment, e), l = !1
    },
    d(e) {
      e && (At(i), At(a)), Xn(o, e), u.d()
    }
  }
}

function Cp(e) {
  let t;
  return {
    c() {
      t = Pt("Undo")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Sp(e) {
  let t;
  return {
    c() {
      t = Pt("You’re out of undos!")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    d(e) {
      e && At(t)
    }
  }
}

function Ap(e) {
  let t;
  return {
    c() {
      t = Pt("You can’t undo right now")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    d(e) {
      e && At(t)
    }
  }
}

function Bp(e) {
  var t;
  let n, r = e[2].powerup.usesLeftLong({
    usesRemaining: null == (t = e[1]) ? void 0 : t.undoUsesRemaining
  }) + "";
  return {
    c() {
      n = Pt(r)
    },
    m(e, t) {
      Ct(e, n, t)
    },
    p(e, t) {
      var o;
      6 & t && r !== (r = e[2].powerup.usesLeftLong({
        usesRemaining: null == (o = e[1]) ? void 0 : o.undoUsesRemaining
      }) + "") && Ht(n, r)
    },
    d(e) {
      e && At(n)
    }
  }
}

function Mp(e) {
  var t, n, r;
  let o, i, a, l;
  o = new Ro({
    props: {
      type: (null == (t = e[1]) ? void 0 : t.undoAvailable) ? "secondary" : "primary",
      size: e[0],
      autofocus: !(null == (n = e[1]) ? void 0 : n.undoAvailable),
      $$slots: {
        default: [_p]
      },
      $$scope: {
        ctx: e
      }
    }
  }), o.$on("click", e[3]);
  let s = (null == (r = e[1]) ? void 0 : r.powerupsEnabled) && kp(e);
  return {
    c() {
      Yn(o.$$.fragment), i = Tt(), s && s.c(), a = Et()
    },
    m(e, t) {
      Qn(o, e, t), Ct(e, i, t), s && s.m(e, t), Ct(e, a, t), l = !0
    },
    p(e, [t]) {
      var n, r, i;
      const l = {};
      2 & t && (l.type = (null == (n = e[1]) ? void 0 : n.undoAvailable) ? "secondary" : "primary"), 1 & t && (l.size = e[0]), 2 & t && (l.autofocus = !(null == (r = e[1]) ? void 0 : r.undoAvailable)), 32 & t && (l.$$scope = {
        dirty: t,
        ctx: e
      }), o.$set(l), (null == (i = e[1]) ? void 0 : i.powerupsEnabled) ? s ? (s.p(e, t), 2 & t && qn(s, 1)) : (s = kp(e), s.c(), qn(s, 1), s.m(a.parentNode, a)) : s && (In(), zn(s, 1, 1, () => {
        s = null
      }), Ln())
    },
    i(e) {
      l || (qn(o.$$.fragment, e), qn(s), l = !0)
    },
    o(e) {
      zn(o.$$.fragment, e), zn(s), l = !1
    },
    d(e) {
      e && (At(i), At(a)), Xn(o, e), s && s.d(e)
    }
  }
}

function Op(e, t, n) {
  let r, o;
  E(e, Wd, e => n(1, r = e)), E(e, ud, e => n(2, o = e));
  let {
    buttonSize: i
  } = t;
  return e.$$set = e => {
    "buttonSize" in e && n(0, i = e.buttonSize)
  }, [i, r, o, () => sa.reset(), () => sa.activatePowerup(et.Undo)]
}
class Pp extends Zn {
  constructor(e) {
    super(), Jn(this, e, Op, Mp, h, {
      buttonSize: 0
    })
  }
}

function Tp(e) {
  let t;
  return {
    c() {
      t = Pt("Start Over")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Ep(e) {
  let t;
  return {
    c() {
      t = Pt("Keep Going")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Gp(e) {
  let t, n, r, o, i, a;
  return i = new Wa({
    props: {
      to: $a,
      class: "underline",
      $$slots: {
        default: [Dp]
      },
      $$scope: {
        ctx: e
      }
    }
  }), i.$on("click", e[2]), {
    c() {
      t = Mt("span"), n = Pt("Need a bigger challenge?\n    "), r = Mt("br"), o = Tt(), Yn(i.$$.fragment), Dt(t, "class", "mt-1 text-center text-sm lg:mt-2")
    },
    m(e, l) {
      Ct(e, t, l), bt(t, n), bt(t, r), bt(t, o), Qn(i, t, null), a = !0
    },
    i(e) {
      a || (qn(i.$$.fragment, e), a = !0)
    },
    o(e) {
      zn(i.$$.fragment, e), a = !1
    },
    d(e) {
      e && At(t), Xn(i)
    }
  }
}

function Dp(e) {
  let t;
  return {
    c() {
      t = Pt("Try classic mode without powerups!")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Ip(e) {
  let t, n, r, o, i, a;
  t = new Ro({
    props: {
      size: e[0],
      type: "secondary",
      $$slots: {
        default: [Tp]
      },
      $$scope: {
        ctx: e
      }
    }
  }), t.$on("click", sa.resetWithConfirm), r = new Ro({
    props: {
      size: e[0],
      autofocus: !0,
      $$slots: {
        default: [Ep]
      },
      $$scope: {
        ctx: e
      }
    }
  }), r.$on("click", sa.continueAfterWin);
  let l = e[1] === Z.Standard && Gp(e);
  return {
    c() {
      Yn(t.$$.fragment), n = Tt(), Yn(r.$$.fragment), o = Tt(), l && l.c(), i = Et()
    },
    m(e, s) {
      Qn(t, e, s), Ct(e, n, s), Qn(r, e, s), Ct(e, o, s), l && l.m(e, s), Ct(e, i, s), a = !0
    },
    p(e, [n]) {
      const o = {};
      1 & n && (o.size = e[0]), 8 & n && (o.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(o);
      const a = {};
      1 & n && (a.size = e[0]), 8 & n && (a.$$scope = {
        dirty: n,
        ctx: e
      }), r.$set(a), e[1] === Z.Standard ? l ? 2 & n && qn(l, 1) : (l = Gp(e), l.c(), qn(l, 1), l.m(i.parentNode, i)) : l && (In(), zn(l, 1, 1, () => {
        l = null
      }), Ln())
    },
    i(e) {
      a || (qn(t.$$.fragment, e), qn(r.$$.fragment, e), qn(l), a = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), zn(r.$$.fragment, e), zn(l), a = !1
    },
    d(e) {
      e && (At(n), At(o), At(i)), Xn(t, e), Xn(r, e), l && l.d(e)
    }
  }
}

function Lp(e, t, n) {
  let r;
  E(e, J, e => n(1, r = e));
  let {
    buttonSize: o
  } = t;
  return e.$$set = e => {
    "buttonSize" in e && n(0, o = e.buttonSize)
  }, [o, r, () => zi.gameWonClassicCTAClicked()]
}
class qp extends Zn {
  constructor(e) {
    super(), Jn(this, e, Lp, Ip, h, {
      buttonSize: 0
    })
  }
}

function zp(e) {
  let t, n;
  return t = new qp({
    props: {
      buttonSize: e[1] ? "lg" : "md"
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, n) {
      const r = {};
      2 & n && (r.buttonSize = e[1] ? "lg" : "md"), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Fp(e) {
  let t, n;
  return t = new Pp({
    props: {
      buttonSize: e[1] ? "lg" : "md"
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, n) {
      const r = {};
      2 & n && (r.buttonSize = e[1] ? "lg" : "md"), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function jp(e) {
  let t, n, r, o;
  const i = [Fp, zp],
    a = [];

  function l(e, t) {
    var n, r;
    return (null == (n = e[0]) ? void 0 : n.state) === g.GameOver ? 0 : (null == (r = e[0]) ? void 0 : r.state) === g.GameWon ? 1 : -1
  }
  return ~(n = l(e)) && (r = a[n] = i[n](e)), {
    c() {
      t = Mt("div"), r && r.c(), Dt(t, "class", "actions-grid w-100 relative z-10 mx-auto md:max-w-96 svelte-1m0923a")
    },
    m(e, r) {
      Ct(e, t, r), ~n && a[n].m(t, null), o = !0
    },
    p(e, o) {
      let s = n;
      n = l(e), n === s ? ~n && a[n].p(e, o) : (r && (In(), zn(a[s], 1, 1, () => {
        a[s] = null
      }), Ln()), ~n ? (r = a[n], r ? r.p(e, o) : (r = a[n] = i[n](e), r.c()), qn(r, 1), r.m(t, null)) : r = null)
    },
    i(e) {
      o || (qn(r), o = !0)
    },
    o(e) {
      zn(r), o = !1
    },
    d(e) {
      e && At(t), ~n && a[n].d()
    }
  }
}

function Np(e) {
  let t, n;
  return t = new bp({
    props: {
      query: Le.md,
      $$slots: {
        default: [jp, ({
          matches: e
        }) => ({
          1: e
        }), ({
          matches: e
        }) => e ? 2 : 0]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, [n]) {
      const r = {};
      7 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Rp(e, t, n) {
  let r;
  return E(e, Wd, e => n(0, r = e)), [r]
}
class Up extends Zn {
  constructor(e) {
    super(), Jn(this, e, Rp, Np, h, {})
  }
}

function Wp(e, t, n) {
  const r = e.slice();
  return r[2] = t[n], r
}

function Hp(e) {
  let t;
  return {
    c() {
      t = Pt("You Win")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Vp(e) {
  let t;
  return {
    c() {
      t = Pt("Game Over")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Kp(e) {
  let t;
  return {
    c() {
      t = Pt(".")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    d(e) {
      e && At(t)
    }
  }
}

function Yp(e) {
  var t;
  let n, r, o, i, a = (null == (t = e[0]) ? void 0 : t.moveCount) + "";
  return {
    c() {
      n = Pt(" "), r = Pt("in "), o = Pt(a), i = Pt(" moves.")
    },
    m(e, t) {
      Ct(e, n, t), Ct(e, r, t), Ct(e, o, t), Ct(e, i, t)
    },
    p(e, t) {
      var n;
      1 & t && a !== (a = (null == (n = e[0]) ? void 0 : n.moveCount) + "") && Ht(o, a)
    },
    d(e) {
      e && (At(n), At(r), At(o), At(i))
    }
  }
}

function Qp(e) {
  let t;
  return {
    c() {
      t = Mt("span"), t.textContent = "No undo!", Dt(t, "class", "font-medium")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    d(e) {
      e && At(t)
    }
  }
}

function Xp(e) {
  let t;

  function n(e, t) {
    var n;
    return (null == (n = e[0]) ? void 0 : n.powerupsUsedCount) ? Zp : Jp
  }
  let r = n(e),
    o = r(e);
  return {
    c() {
      o.c(), t = Et()
    },
    m(e, n) {
      o.m(e, n), Ct(e, t, n)
    },
    p(e, i) {
      r === (r = n(e)) && o ? o.p(e, i) : (o.d(1), o = r(e), o && (o.c(), o.m(t.parentNode, t)))
    },
    d(e) {
      e && At(t), o.d(e)
    }
  }
}

function Jp(e) {
  let t;
  return {
    c() {
      t = Mt("span"), t.textContent = "No powerups used!", Dt(t, "class", "font-medium")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    d(e) {
      e && At(t)
    }
  }
}

function Zp(e) {
  var t;
  let n, r, o = e[1].powerup.powerupsUsed({
    count: null == (t = e[0]) ? void 0 : t.powerupsUsedCount
  }) + "";
  return {
    c() {
      n = Mt("span"), r = Pt(o), Dt(n, "class", "font-medium")
    },
    m(e, t) {
      Ct(e, n, t), bt(n, r)
    },
    p(e, t) {
      var n;
      3 & t && o !== (o = e[1].powerup.powerupsUsed({
        count: null == (n = e[0]) ? void 0 : n.powerupsUsedCount
      }) + "") && Ht(r, o)
    },
    d(e) {
      e && At(n)
    }
  }
}

function eh(e) {
  var t;
  let n, r, o = Wn(null == (t = e[0]) ? void 0 : t.powerupKeys),
    i = [];
  for (let l = 0; l < o.length; l += 1) i[l] = nh(Wp(e, o, l));
  const a = e => zn(i[e], 1, 1, () => {
    i[e] = null
  });
  return {
    c() {
      n = Mt("div");
      for (let e = 0; e < i.length; e += 1) i[e].c();
      Dt(n, "class", "mb-3 mt-3 flex flex-wrap justify-center gap-3")
    },
    m(e, t) {
      Ct(e, n, t);
      for (let r = 0; r < i.length; r += 1) i[r] && i[r].m(n, null);
      r = !0
    },
    p(e, t) {
      var r;
      if (1 & t) {
        let l;
        for (o = Wn(null == (r = e[0]) ? void 0 : r.powerupKeys), l = 0; l < o.length; l += 1) {
          const r = Wp(e, o, l);
          i[l] ? (i[l].p(r, t), qn(i[l], 1)) : (i[l] = nh(r), i[l].c(), qn(i[l], 1), i[l].m(n, null))
        }
        for (In(), l = o.length; l < i.length; l += 1) a(l);
        Ln()
      }
    },
    i(e) {
      if (!r) {
        for (let e = 0; e < o.length; e += 1) qn(i[e]);
        r = !0
      }
    },
    o(e) {
      i = i.filter(Boolean);
      for (let t = 0; t < i.length; t += 1) zn(i[t]);
      r = !1
    },
    d(e) {
      e && At(n), Bt(i, e)
    }
  }
}

function th(e) {
  var t, n;
  let r, o, i, a, l, s, c, u, d = (null == (n = null == (t = e[0]) ? void 0 : t.powerupStates[e[2]]) ? void 0 : n.usesCount) + "";
  var f = Uf(e[2]);
  return f && (i = tn(f, {
    props: {
      class: "aspect-square h-auto w-6 shrink text-white"
    }
  })), {
    c() {
      r = Mt("div"), o = Mt("div"), i && Yn(i.$$.fragment), a = Tt(), l = Mt("span"), s = Pt(d), c = Tt(), Dt(o, "class", "bg-leather rounded-lg p-[6px]"), Dt(l, "class", "bg-off-white text-tan absolute bottom-0 right-0 flex min-w-4 translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full px-1 py-0.5 text-xs font-semibold"), Dt(r, "class", "relative")
    },
    m(e, t) {
      Ct(e, r, t), bt(r, o), i && Qn(i, o, null), bt(r, a), bt(r, l), bt(l, s), bt(r, c), u = !0
    },
    p(e, t) {
      var n, r;
      if (1 & t && f !== (f = Uf(e[2]))) {
        if (i) {
          In();
          const e = i;
          zn(e.$$.fragment, 1, 0, () => {
            Xn(e, 1)
          }), Ln()
        }
        f ? (i = tn(f, {
          props: {
            class: "aspect-square h-auto w-6 shrink text-white"
          }
        }), Yn(i.$$.fragment), qn(i.$$.fragment, 1), Qn(i, o, null)) : i = null
      }(!u || 1 & t) && d !== (d = (null == (r = null == (n = e[0]) ? void 0 : n.powerupStates[e[2]]) ? void 0 : r.usesCount) + "") && Ht(s, d)
    },
    i(e) {
      u || (i && qn(i.$$.fragment, e), u = !0)
    },
    o(e) {
      i && zn(i.$$.fragment, e), u = !1
    },
    d(e) {
      e && At(r), i && Xn(i)
    }
  }
}

function nh(e) {
  var t, n;
  let r, o, i = (null == (n = null == (t = e[0]) ? void 0 : t.powerupStates[e[2]]) ? void 0 : n.usesCount) && th(e);
  return {
    c() {
      i && i.c(), r = Et()
    },
    m(e, t) {
      i && i.m(e, t), Ct(e, r, t), o = !0
    },
    p(e, t) {
      var n, o;
      (null == (o = null == (n = e[0]) ? void 0 : n.powerupStates[e[2]]) ? void 0 : o.usesCount) ? i ? (i.p(e, t), 1 & t && qn(i, 1)) : (i = th(e), i.c(), qn(i, 1), i.m(r.parentNode, r)): i && (In(), zn(i, 1, 1, () => {
        i = null
      }), Ln())
    },
    i(e) {
      o || (qn(i), o = !0)
    },
    o(e) {
      zn(i), o = !1
    },
    d(e) {
      e && At(r), i && i.d(e)
    }
  }
}

function rh(e) {
  var t, n, r;
  let o, i, a, l, s, c, u, d, f, p, h, m = (null == (t = e[0]) ? void 0 : t.score) + "";

  function v(e, t) {
    var n, r;
    return (null == (n = e[0]) ? void 0 : n.state) === g.GameOver ? Vp : (null == (r = e[0]) ? void 0 : r.state) === g.GameWon ? Hp : void 0
  }
  let $ = v(e),
    w = $ && $(e);

  function y(e, t) {
    var n;
    return (null == (n = e[0]) ? void 0 : n.moveCount) ? Yp : Kp
  }
  let x = y(e),
    b = x(e);

  function _(e, t) {
    var n;
    return (null == (n = e[0]) ? void 0 : n.powerupsEnabled) ? Xp : Qp
  }
  let k = _(e),
    C = k(e),
    S = (null == (n = e[0]) ? void 0 : n.powerupsEnabled) && (null == (r = e[0]) ? void 0 : r.powerupsUsedCount) && eh(e);
  return {
    c() {
      o = Mt("div"), i = Mt("div"), w && w.c(), a = Tt(), l = Mt("div"), s = Mt("span"), c = Pt(m), u = Pt(" points scored"), b.c(), d = Tt(), f = Mt("span"), C.c(), p = Tt(), S && S.c(), Dt(i, "class", "text-4xl font-semibold md:text-5xl"), Dt(f, "class", "whitespace-nowrap"), Dt(l, "class", "short:text-sm flex flex-col items-center"), Dt(o, "class", "flex flex-col items-center gap-1 text-pretty px-4 pt-2 text-center md:gap-2 md:pt-8")
    },
    m(e, t) {
      Ct(e, o, t), bt(o, i), w && w.m(i, null), bt(o, a), bt(o, l), bt(l, s), bt(s, c), bt(s, u), b.m(s, null), bt(s, d), bt(s, f), C.m(f, null), bt(l, p), S && S.m(l, null), h = !0
    },
    p(e, [t]) {
      var n, r, o;
      $ !== ($ = v(e)) && (w && w.d(1), w = $ && $(e), w && (w.c(), w.m(i, null))), (!h || 1 & t) && m !== (m = (null == (n = e[0]) ? void 0 : n.score) + "") && Ht(c, m), x === (x = y(e)) && b ? b.p(e, t) : (b.d(1), b = x(e), b && (b.c(), b.m(s, d))), k === (k = _(e)) && C ? C.p(e, t) : (C.d(1), C = k(e), C && (C.c(), C.m(f, null))), (null == (r = e[0]) ? void 0 : r.powerupsEnabled) && (null == (o = e[0]) ? void 0 : o.powerupsUsedCount) ? S ? (S.p(e, t), 1 & t && qn(S, 1)) : (S = eh(e), S.c(), qn(S, 1), S.m(l, null)) : S && (In(), zn(S, 1, 1, () => {
        S = null
      }), Ln())
    },
    i(e) {
      h || (qn(S), h = !0)
    },
    o(e) {
      zn(S), h = !1
    },
    d(e) {
      e && At(o), w && w.d(), b.d(), C.d(), S && S.d()
    }
  }
}

function oh(e, t, n) {
  let r, o;
  return E(e, Wd, e => n(0, r = e)), E(e, ud, e => n(1, o = e)), [r, o]
}
class ih extends Zn {
  constructor(e) {
    super(), Jn(this, e, oh, rh, h, {})
  }
}

function ah(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "20"
    }, {
      height: "20"
    }, {
      fill: "currentColor"
    }, {
      viewBox: "0 -960 960 960"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path d="M180-264q-15.3 0-25.65-10.29T144-299.79t10.35-25.71T180-336h600q15.3 0 25.65 10.29t10.35 25.5-10.35 25.71T780-264zm0-180q-15.3 0-25.65-10.29T144-479.79t10.35-25.71T180-516h600q15.3 0 25.65 10.29t10.35 25.5-10.35 25.71T780-444zm0-180q-15.3 0-25.65-10.29T144-659.79t10.35-25.71T180-696h600q15.3 0 25.65 10.29t10.35 25.5-10.35 25.71T780-624z"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "20"
      }, {
        height: "20"
      }, {
        fill: "currentColor"
      }, {
        viewBox: "0 -960 960 960"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function lh(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class sh extends Zn {
  constructor(e) {
    super(), Jn(this, e, lh, ah, h, {})
  }
}
const ch = {
    "Web worker supported": pr,
    "User agent": navigator.userAgent,
    "Window width": window.innerWidth,
    "Window height": window.innerHeight,
    "Screen width": window.screen.width,
    "Screen height": window.screen.height,
    "Device pixel ratio": window.devicePixelRatio,
    "Current URL": window.location.href,
    "Cookies enabled": navigator.cookieEnabled,
    Platform: "platform" in navigator ? navigator.platform : "N/A",
    "Browser version": "appVersion" in navigator ? navigator.appVersion : "N/A",
    "Browser vendor": "vendor" in navigator ? navigator.vendor : "N/A",
    "Browser product": "product" in navigator ? navigator.product : "N/A",
    "Device memory": "deviceMemory" in navigator ? navigator.deviceMemory : "N/A"
  },
  uh = O([mr, fr, hr, Fc], ([e, t, n, r]) => {
    const o = Object.entries({
      "Using worker": e,
      "Renderer initialized once": t,
      "Worker startup failed": n,
      Resolution: r,
      ...ch
    }).map(([e, t]) => `${e}: ${t}`).join("\n");
    return `https://docs.google.com/forms/d/e/${st}/viewform?usp=pp_url&entry.1880902338=${encodeURIComponent(o)}`
  });

function dh(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "20"
    }, {
      height: "20"
    }, {
      fill: "currentColor"
    }, {
      viewBox: "0 -960 960 960"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path d="M431-361.09v-377.15q0-20.38 14.25-34.68 14.24-14.3 34.54-14.3t34.75 14.3Q529-758.62 529-738.24v377.15l154.17-154.17q14.74-14.74 34.9-15.02 20.15-.29 35.58 14.67 14.48 14.96 14.2 35.11t-15.06 34.92L514.7-207.8q-7.11 7.1-16.24 11.02-9.14 3.91-18.62 3.91t-18.61-3.91q-9.14-3.92-15.84-10.61L206.83-445.96q-15.53-15.52-15.03-35.11.5-19.58 15.55-34.54 15.43-14.96 35.47-14.96t34.66 14.96z"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "20"
      }, {
        height: "20"
      }, {
        fill: "currentColor"
      }, {
        viewBox: "0 -960 960 960"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function fh(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class ph extends Zn {
  constructor(e) {
    super(), Jn(this, e, fh, dh, h, {})
  }
}

function hh(e) {
  let t, n, r;
  var o = e[0];

  function i(e, t) {
    return {
      props: {
        class: "h-4 w-auto text-white " + e[1]
      }
    }
  }
  return o && (t = tn(o, i(e))), {
    c() {
      t && Yn(t.$$.fragment), n = Et()
    },
    m(e, o) {
      t && Qn(t, e, o), Ct(e, n, o), r = !0
    },
    p(e, r) {
      if (1 & r && o !== (o = e[0])) {
        if (t) {
          In();
          const e = t;
          zn(e.$$.fragment, 1, 0, () => {
            Xn(e, 1)
          }), Ln()
        }
        o ? (t = tn(o, i(e)), Yn(t.$$.fragment), qn(t.$$.fragment, 1), Qn(t, n.parentNode, n)) : t = null
      } else if (o) {
        const n = {};
        2 & r && (n.class = "h-4 w-auto text-white " + e[1]), t.$set(n)
      }
    },
    i(e) {
      r || (t && qn(t.$$.fragment, e), r = !0)
    },
    o(e) {
      t && zn(t.$$.fragment, e), r = !1
    },
    d(e) {
      e && At(n), t && Xn(t, e)
    }
  }
}

function mh(e) {
  let t;
  return {
    c() {
      t = Pt(e[0])
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p(e, n) {
      1 & n && Ht(t, e[0])
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function gh(e) {
  let t, n, r, o;
  const i = [mh, hh],
    a = [];

  function l(e, t) {
    return "string" == typeof e[0] ? 0 : 1
  }
  return n = l(e), r = a[n] = i[n](e), {
    c() {
      t = Mt("span"), r.c(), Dt(t, "class", "bg-near-black inline-flex aspect-square w-5 items-center justify-center rounded-md font-medium text-white")
    },
    m(e, r) {
      Ct(e, t, r), a[n].m(t, null), o = !0
    },
    p(e, [o]) {
      let s = n;
      n = l(e), n === s ? a[n].p(e, o) : (In(), zn(a[s], 1, 1, () => {
        a[s] = null
      }), Ln(), r = a[n], r ? r.p(e, o) : (r = a[n] = i[n](e), r.c()), qn(r, 1), r.m(t, null))
    },
    i(e) {
      o || (qn(r), o = !0)
    },
    o(e) {
      zn(r), o = !1
    },
    d(e) {
      e && At(t), a[n].d()
    }
  }
}

function vh(e, t, n) {
  let r, {
      text: o
    } = t,
    i = "";
  return e.$$set = e => {
    "text" in e && n(2, o = e.text)
  }, e.$$.update = () => {
    if (4 & e.$$.dirty) switch (o) {
      case "←":
        n(0, r = ph), n(1, i = zo`rotate-90`);
        break;
      case "↑":
        n(0, r = ph), n(1, i = zo`rotate-180`);
        break;
      case "↓":
        n(0, r = ph), n(1, i = "");
        break;
      case "→":
        n(0, r = ph), n(1, i = zo`-rotate-90`);
        break;
      default:
        n(0, r = o)
    }
  }, [r, i, o]
}
class $h extends Zn {
  constructor(e) {
    super(), Jn(this, e, vh, gh, h, {
      text: 2
    })
  }
}

function wh(e, t, n) {
  const r = e.slice();
  return r[6] = t[n], r
}

function yh(e) {
  let t;
  return {
    c() {
      t = Mt("div"), Dt(t, "class", "mb-1")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function xh(e) {
  let t, n, r;
  return t = new $h({
    props: {
      text: e[6].text
    }
  }), {
    c() {
      Yn(t.$$.fragment), n = Mt("span"), n.textContent = " ", Vt(n, "margin-left", "-3px")
    },
    m(e, o) {
      Qn(t, e, o), Ct(e, n, o), r = !0
    },
    p(e, n) {
      const r = {};
      1 & n && (r.text = e[6].text), t.$set(r)
    },
    i(e) {
      r || (qn(t.$$.fragment, e), r = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), r = !1
    },
    d(e) {
      e && At(n), Xn(t, e)
    }
  }
}

function bh(e) {
  let t, n, o = e[6].text + "";
  return {
    c() {
      t = Mt("span"), n = Pt(o), Dt(t, "class", "mb-1 last:mb-0")
    },
    m(e, r) {
      Ct(e, t, r), bt(t, n)
    },
    p(e, t) {
      1 & t && o !== (o = e[6].text + "") && Ht(n, o)
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function _h(e) {
  let t, n, r, o;
  const i = [bh, xh, yh],
    a = [];

  function l(e, t) {
    return "text" === e[6].type ? 0 : "tile" === e[6].type ? 1 : "lineBreak" === e[6].type ? 2 : -1
  }
  return ~(t = l(e)) && (n = a[t] = i[t](e)), {
    c() {
      n && n.c(), r = Et()
    },
    m(e, n) {
      ~t && a[t].m(e, n), Ct(e, r, n), o = !0
    },
    p(e, o) {
      let s = t;
      t = l(e), t === s ? ~t && a[t].p(e, o) : (n && (In(), zn(a[s], 1, 1, () => {
        a[s] = null
      }), Ln()), ~t ? (n = a[t], n ? n.p(e, o) : (n = a[t] = i[t](e), n.c()), qn(n, 1), n.m(r.parentNode, r)) : n = null)
    },
    i(e) {
      o || (qn(n), o = !0)
    },
    o(e) {
      zn(n), o = !1
    },
    d(e) {
      e && At(r), ~t && a[t].d(e)
    }
  }
}

function kh(e) {
  let t, n;
  return t = new Ro({
    props: {
      type: "inverted",
      class: "text-sm sm:text-base",
      $$slots: {
        default: [Ch]
      },
      $$scope: {
        ctx: e
      }
    }
  }), t.$on("click", function() {
    a(e[0].action.onAction) && e[0].action.onAction.apply(this, arguments)
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(n, r) {
      e = n;
      const o = {};
      513 & r && (o.$$scope = {
        dirty: r,
        ctx: e
      }), t.$set(o)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Ch(e) {
  let t, n = e[0].action.label + "";
  return {
    c() {
      t = Pt(n)
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p(e, r) {
      1 & r && n !== (n = e[0].action.label + "") && Ht(t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Sh(e) {
  let t, n, r, o, i;
  return n = new pf({}), {
    c() {
      t = Mt("button"), Yn(n.$$.fragment), Dt(t, "class", "bg-near-black absolute right-0 top-0 flex h-6 w-6 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full")
    },
    m(l, s) {
      Ct(l, t, s), Qn(n, t, null), r = !0, o || (i = Gt(t, "click", function() {
        a(e[0].onClose) && e[0].onClose.apply(this, arguments)
      }), o = !0)
    },
    p(t, n) {
      e = t
    },
    i(e) {
      r || (qn(n.$$.fragment, e), r = !0)
    },
    o(e) {
      zn(n.$$.fragment, e), r = !1
    },
    d(e) {
      e && At(t), Xn(n), o = !1, i()
    }
  }
}

function Ah(e) {
  let t, n, r, o, i, a, l, s, c, u, d, f = e[0].title + "",
    p = Wn(e[0].description),
    h = [];
  for (let $ = 0; $ < p.length; $ += 1) h[$] = _h(wh(e, p, $));
  const m = e => zn(h[e], 1, 1, () => {
    h[e] = null
  });
  let g = e[0].action && kh(e),
    v = e[0].onClose && Sh(e);
  return {
    c() {
      t = Mt("div"), n = Mt("div"), r = Mt("span"), o = Pt(f), i = Tt(), a = Mt("div");
      for (let e = 0; e < h.length; e += 1) h[e].c();
      l = Tt(), g && g.c(), s = Tt(), v && v.c(), Dt(r, "class", "mb-1 font-medium uppercase"), Dt(n, "class", "flex flex-col"), Dt(t, "class", "tooltip-material absolute top-1.5 z-30 flex w-screen max-w-[calc(100vw-100px)] transform-gpu items-center justify-between gap-2 justify-self-center text-pretty rounded-xl px-4 py-3 text-sm text-white sm:max-w-80 md:top-0")
    },
    m(u, f) {
      Ct(u, t, f), bt(t, n), bt(n, r), bt(r, o), bt(n, i), bt(n, a);
      for (let e = 0; e < h.length; e += 1) h[e] && h[e].m(a, null);
      bt(t, l), g && g.m(t, null), bt(t, s), v && v.m(t, null), e[4](t), c = Qt.observe(t, e[5].bind(t)), d = !0
    },
    p(e, [n]) {
      if ((!d || 1 & n) && f !== (f = e[0].title + "") && Ht(o, f), 1 & n) {
        let t;
        for (p = Wn(e[0].description), t = 0; t < p.length; t += 1) {
          const r = wh(e, p, t);
          h[t] ? (h[t].p(r, n), qn(h[t], 1)) : (h[t] = _h(r), h[t].c(), qn(h[t], 1), h[t].m(a, null))
        }
        for (In(), t = p.length; t < h.length; t += 1) m(t);
        Ln()
      }
      e[0].action ? g ? (g.p(e, n), 1 & n && qn(g, 1)) : (g = kh(e), g.c(), qn(g, 1), g.m(t, s)) : g && (In(), zn(g, 1, 1, () => {
        g = null
      }), Ln()), e[0].onClose ? v ? (v.p(e, n), 1 & n && qn(v, 1)) : (v = Sh(e), v.c(), qn(v, 1), v.m(t, null)) : v && (In(), zn(v, 1, 1, () => {
        v = null
      }), Ln())
    },
    i(e) {
      if (!d) {
        for (let e = 0; e < p.length; e += 1) qn(h[e]);
        qn(g), qn(v), e && (u || Cn(() => {
          u = jn(t, tc, {
            range: 40
          }), u.start()
        })), d = !0
      }
    },
    o(e) {
      h = h.filter(Boolean);
      for (let t = 0; t < h.length; t += 1) zn(h[t]);
      zn(g), zn(v), d = !1
    },
    d(n) {
      n && At(t), Bt(h, n), g && g.d(), v && v.d(), e[4](null), c()
    }
  }
}

function Bh(e, t, n) {
  let r, i, {
      statusMessage: a
    } = t,
    {
      height: l
    } = t;
  return e.$$set = e => {
    "statusMessage" in e && n(0, a = e.statusMessage), "height" in e && n(3, l = e.height)
  }, e.$$.update = () => {
    6 & e.$$.dirty && i && n(3, l = r.offsetHeight + r.offsetTop)
  }, [a, r, i, l, function(e) {
    $n[e ? "unshift" : "push"](() => {
      r = e, n(1, r)
    })
  }, function() {
    var e;
    i = null == (e = o.entries.get(this)) ? void 0 : e.contentRect, n(2, i)
  }]
}
class Mh extends Zn {
  constructor(e) {
    super(), Jn(this, e, Bh, Ah, h, {
      statusMessage: 0,
      height: 3
    })
  }
}

function Oh(e) {
  let t, n, r, o, i;
  const a = e[2].default,
    l = z(a, e, e[1], null);
  return {
    c() {
      t = Mt("button"), l && l.c(), Dt(t, "class", n = "hover:bg-beige relative z-30 flex items-center gap-2 rounded-xl p-1 px-2 transition-colors duration-75 md:-mx-2 " + (e[0] ? "bg-beige" : ""))
    },
    m(n, a) {
      Ct(n, t, a), l && l.m(t, null), r = !0, o || (i = Gt(t, "click", e[3]), o = !0)
    },
    p(e, [o]) {
      l && l.p && (!r || 2 & o) && F(l, a, e, e[1], r ? N(a, e[1], o, null) : j(e[1]), null), (!r || 1 & o && n !== (n = "hover:bg-beige relative z-30 flex items-center gap-2 rounded-xl p-1 px-2 transition-colors duration-75 md:-mx-2 " + (e[0] ? "bg-beige" : ""))) && Dt(t, "class", n)
    },
    i(e) {
      r || (qn(l, e), r = !0)
    },
    o(e) {
      zn(l, e), r = !1
    },
    d(e) {
      e && At(t), l && l.d(e), o = !1, i()
    }
  }
}

function Ph(e, t, n) {
  let {
    $$slots: r = {},
    $$scope: o
  } = t, {
    open: i
  } = t;
  return e.$$set = e => {
    "open" in e && n(0, i = e.open), "$$scope" in e && n(1, o = e.$$scope)
  }, [i, o, r, () => n(0, i = !i)]
}
class Th extends Zn {
  constructor(e) {
    super(), Jn(this, e, Ph, Oh, h, {
      open: 0
    })
  }
}

function Eh(e) {
  let t, n, r, o, i, a, l, s, c, u, d, f = new Array(e[6]).fill(4).join("") + "";
  return {
    c() {
      t = Mt("div"), n = Mt("span"), r = Pt(e[3]), o = Tt(), i = Mt("span"), a = Pt(f), l = Tt(), s = Mt("span"), c = Pt(e[4]), Dt(n, "class", "min-w-0 shrink-[500] grow basis-[20px] truncate text-xs font-medium uppercase sm:flex-initial"), Dt(i, "class", "invisible hidden h-0 sm:block"), Dt(s, "class", "shrink-1 truncate"), Vt(t, "min-width", (e[8] ? e[5] : 0) + "px"), Dt(t, "class", u = "text-tan flex min-w-0 grow basis-0 transform-gpu items-center justify-between gap-2 rounded-xl px-4 py-2 text-sm font-bold sm:h-[52px] sm:flex-auto sm:flex-col sm:justify-center sm:gap-0 sm:py-0 sm:text-xl " + e[1] + " " + ("primary" === e[2] ? "bg-sand" : "border-sand border-2")), Cn(() => e[7].call(t))
    },
    m(u, f) {
      Ct(u, t, f), bt(t, n), bt(n, r), bt(t, o), bt(t, i), bt(i, a), bt(t, l), bt(t, s), bt(s, c), d = Yt(t, e[7].bind(t))
    },
    p(e, n) {
      8 & n && Ht(r, e[3]), 64 & n && f !== (f = new Array(e[6]).fill(4).join("") + "") && Ht(a, f), 16 & n && Ht(c, e[4]), 288 & n && Vt(t, "min-width", (e[8] ? e[5] : 0) + "px"), 6 & n && u !== (u = "text-tan flex min-w-0 grow basis-0 transform-gpu items-center justify-between gap-2 rounded-xl px-4 py-2 text-sm font-bold sm:h-[52px] sm:flex-auto sm:flex-col sm:justify-center sm:gap-0 sm:py-0 sm:text-xl " + e[1] + " " + ("primary" === e[2] ? "bg-sand" : "border-sand border-2")) && Dt(t, "class", u)
    },
    d(e) {
      e && At(t), d()
    }
  }
}

function Gh(e) {
  let t, n;
  return t = new bp({
    props: {
      query: Le.sm,
      $$slots: {
        default: [Eh, ({
          matches: e
        }) => ({
          8: e
        }), ({
          matches: e
        }) => e ? 256 : 0]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, [n]) {
      const r = {};
      895 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Dh(e, t, n) {
  let r, {
      class: o
    } = t,
    {
      type: i
    } = t,
    {
      label: a
    } = t,
    {
      value: l
    } = t,
    {
      width: s
    } = t,
    {
      minWidth: c = 0
    } = t;
  return e.$$set = e => {
    "class" in e && n(1, o = e.class), "type" in e && n(2, i = e.type), "label" in e && n(3, a = e.label), "value" in e && n(4, l = e.value), "width" in e && n(0, s = e.width), "minWidth" in e && n(5, c = e.minWidth)
  }, e.$$.update = () => {
    16 & e.$$.dirty && n(6, r = l.toString().length)
  }, [s, o, i, a, l, c, r, function() {
    s = this.clientWidth, n(0, s)
  }]
}
class Ih extends Zn {
  constructor(e) {
    super(), Jn(this, e, Dh, Gh, h, {
      class: 1,
      type: 2,
      label: 3,
      value: 4,
      width: 0,
      minWidth: 5
    })
  }
}
const Lh = f(0);

function qh(e) {
  let t, n, r, o, i, a;

  function l(t) {
    e[8](t)
  }
  let s = {
    minWidth: e[4] ? e[5] : 0,
    class: e[0],
    type: "primary",
    label: "Score",
    value: e[6].score
  };

  function c(t) {
    e[9](t)
  }
  void 0 !== e[2] && (s.width = e[2]), t = new Ih({
    props: s
  }), $n.push(() => Kn(t, "width", l));
  let u = {
    minWidth: e[4] ? e[5] : 0,
    class: e[1],
    type: "secondary",
    label: "Best",
    value: e[7]
  };
  return void 0 !== e[3] && (u.width = e[3]), o = new Ih({
    props: u
  }), $n.push(() => Kn(o, "width", c)), {
    c() {
      Yn(t.$$.fragment), r = Tt(), Yn(o.$$.fragment)
    },
    m(e, n) {
      Qn(t, e, n), Ct(e, r, n), Qn(o, e, n), a = !0
    },
    p(e, r) {
      const a = {};
      48 & r && (a.minWidth = e[4] ? e[5] : 0), 1 & r && (a.class = e[0]), 64 & r && (a.value = e[6].score), !n && 4 & r && (n = !0, a.width = e[2], Sn(() => n = !1)), t.$set(a);
      const l = {};
      48 & r && (l.minWidth = e[4] ? e[5] : 0), 2 & r && (l.class = e[1]), 128 & r && (l.value = e[7]), !i && 8 & r && (i = !0, l.width = e[3], Sn(() => i = !1)), o.$set(l)
    },
    i(e) {
      a || (qn(t.$$.fragment, e), qn(o.$$.fragment, e), a = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), zn(o.$$.fragment, e), a = !1
    },
    d(e) {
      e && At(r), Xn(t, e), Xn(o, e)
    }
  }
}

function zh(e) {
  let t, n, r;

  function o(t) {
    e[10](t)
  }
  let i = {
    query: Le.md,
    $$slots: {
      default: [qh]
    },
    $$scope: {
      ctx: e
    }
  };
  return void 0 !== e[4] && (i.matches = e[4]), t = new bp({
    props: i
  }), $n.push(() => Kn(t, "matches", o)), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, n) {
      Qn(t, e, n), r = !0
    },
    p(e, [r]) {
      const o = {};
      2303 & r && (o.$$scope = {
        dirty: r,
        ctx: e
      }), !n && 16 & r && (n = !0, o.matches = e[4], Sn(() => n = !1)), t.$set(o)
    },
    i(e) {
      r || (qn(t.$$.fragment, e), r = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), r = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Fh(e, t, n) {
  let r, o, i;
  E(e, Lh, e => n(5, r = e)), E(e, sa, e => n(6, o = e)), E(e, ca, e => n(7, i = e));
  let a, l, s, {
      leftScoreBoxClass: c = ""
    } = t,
    {
      rightScoreBoxClass: u = ""
    } = t;
  return e.$$set = e => {
    "leftScoreBoxClass" in e && n(0, c = e.leftScoreBoxClass), "rightScoreBoxClass" in e && n(1, u = e.rightScoreBoxClass)
  }, e.$$.update = () => {
    28 & e.$$.dirty && s && a && l && W(Lh, r = Math.max(a, l), r)
  }, [c, u, a, l, s, r, o, i, function(e) {
    a = e, n(2, a)
  }, function(e) {
    l = e, n(3, l)
  }, function(e) {
    s = e, n(4, s)
  }]
}
class jh extends Zn {
  constructor(e) {
    super(), Jn(this, e, Fh, zh, h, {
      leftScoreBoxClass: 0,
      rightScoreBoxClass: 1
    })
  }
}

function Nh(e) {
  let t, n, r, o, i, a, l;
  return a = new Pd({
    props: {
      class: "w-[115px] group-hover:text-white " + (e[0] ? "text-white" : "text-squid-ink")
    }
  }), {
    c() {
      t = Pt("Bonus powerups! Only with "), n = Pt(ke), r = Pt(" "), o = Pt(_e), i = Tt(), Yn(a.$$.fragment)
    },
    m(e, s) {
      Ct(e, t, s), Ct(e, n, s), Ct(e, r, s), Ct(e, o, s), Ct(e, i, s), Qn(a, e, s), l = !0
    },
    p(e, t) {
      const n = {};
      1 & t && (n.class = "w-[115px] group-hover:text-white " + (e[0] ? "text-white" : "text-squid-ink")), a.$set(n)
    },
    i(e) {
      l || (qn(a.$$.fragment, e), l = !0)
    },
    o(e) {
      zn(a.$$.fragment, e), l = !1
    },
    d(e) {
      e && (At(t), At(n), At(r), At(o), At(i)), Xn(a, e)
    }
  }
}

function Rh(e) {
  let t, n, o;
  return {
    c() {
      t = Pt("Bonus powerups and dark board! "), n = Mt("br"), o = Pt("Available until November.")
    },
    m(e, r) {
      Ct(e, t, r), Ct(e, n, r), Ct(e, o, r)
    },
    p: r,
    i: r,
    o: r,
    d(e) {
      e && (At(t), At(n), At(o))
    }
  }
}

function Uh(e) {
  let t, n, r, o;
  const i = [Rh, Nh],
    a = [];

  function l(e, t) {
    return e[1] === zs.Expired ? 0 : 1
  }
  return t = l(e), n = a[t] = i[t](e), {
    c() {
      n.c(), r = Et()
    },
    m(e, n) {
      a[t].m(e, n), Ct(e, r, n), o = !0
    },
    p(e, [o]) {
      let s = t;
      t = l(e), t === s ? a[t].p(e, o) : (In(), zn(a[s], 1, 1, () => {
        a[s] = null
      }), Ln(), n = a[t], n ? n.p(e, o) : (n = a[t] = i[t](e), n.c()), qn(n, 1), n.m(r.parentNode, r))
    },
    i(e) {
      o || (qn(n), o = !0)
    },
    o(e) {
      zn(n), o = !1
    },
    d(e) {
      e && At(r), a[t].d(e)
    }
  }
}

function Wh(e, t, n) {
  let r;
  E(e, Fs, e => n(1, r = e));
  let {
    active: o
  } = t;
  return e.$$set = e => {
    "active" in e && n(0, o = e.active)
  }, [o, r]
}

function Hh(e) {
  let t, n, r, o;
  var i = e[1];
  return i && (n = tn(i, {
    props: {
      "aria-hidden": "true"
    }
  })), {
    c() {
      t = Mt("span"), n && Yn(n.$$.fragment), Dt(t, "class", r = "shrink-0 group-hover:text-white " + (e[4] ? "text-white" : e[2] ? `text-${e[2]}` : ""))
    },
    m(e, r) {
      Ct(e, t, r), n && Qn(n, t, null), o = !0
    },
    p(e, a) {
      if (2 & a && i !== (i = e[1])) {
        if (n) {
          In();
          const e = n;
          zn(e.$$.fragment, 1, 0, () => {
            Xn(e, 1)
          }), Ln()
        }
        i ? (n = tn(i, {
          props: {
            "aria-hidden": "true"
          }
        }), Yn(n.$$.fragment), qn(n.$$.fragment, 1), Qn(n, t, null)) : n = null
      }(!o || 20 & a && r !== (r = "shrink-0 group-hover:text-white " + (e[4] ? "text-white" : e[2] ? `text-${e[2]}` : ""))) && Dt(t, "class", r)
    },
    i(e) {
      o || (n && qn(n.$$.fragment, e), o = !0)
    },
    o(e) {
      n && zn(n.$$.fragment, e), o = !1
    },
    d(e) {
      e && At(t), n && Xn(n)
    }
  }
}

function Vh(e) {
  let t, n, r, o;
  const i = [Yh, Kh],
    a = [];

  function l(e, t) {
    return "string" == typeof e[3] ? 0 : 1
  }
  return n = l(e), r = a[n] = i[n](e), {
    c() {
      t = Mt("span"), r.c(), Dt(t, "class", "text-sm opacity-75")
    },
    m(e, r) {
      Ct(e, t, r), a[n].m(t, null), o = !0
    },
    p(e, o) {
      let s = n;
      n = l(e), n === s ? a[n].p(e, o) : (In(), zn(a[s], 1, 1, () => {
        a[s] = null
      }), Ln(), r = a[n], r ? r.p(e, o) : (r = a[n] = i[n](e), r.c()), qn(r, 1), r.m(t, null))
    },
    i(e) {
      o || (qn(r), o = !0)
    },
    o(e) {
      zn(r), o = !1
    },
    d(e) {
      e && At(t), a[n].d()
    }
  }
}

function Kh(e) {
  let t, n, r;
  var o = e[3];

  function i(e, t) {
    return {
      props: {
        active: e[4]
      }
    }
  }
  return o && (t = tn(o, i(e))), {
    c() {
      t && Yn(t.$$.fragment), n = Et()
    },
    m(e, o) {
      t && Qn(t, e, o), Ct(e, n, o), r = !0
    },
    p(e, r) {
      if (8 & r && o !== (o = e[3])) {
        if (t) {
          In();
          const e = t;
          zn(e.$$.fragment, 1, 0, () => {
            Xn(e, 1)
          }), Ln()
        }
        o ? (t = tn(o, i(e)), Yn(t.$$.fragment), qn(t.$$.fragment, 1), Qn(t, n.parentNode, n)) : t = null
      } else if (o) {
        const n = {};
        16 & r && (n.active = e[4]), t.$set(n)
      }
    },
    i(e) {
      r || (t && qn(t.$$.fragment, e), r = !0)
    },
    o(e) {
      t && zn(t.$$.fragment, e), r = !1
    },
    d(e) {
      e && At(n), t && Xn(t, e)
    }
  }
}

function Yh(e) {
  let t;
  return {
    c() {
      t = Pt(e[3])
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p(e, n) {
      8 & n && Ht(t, e[3])
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function Qh(e) {
  let t, n, r, o, i, a, l, s, c, u = e[1] && Hh(e),
    d = e[3] && Vh(e);
  return {
    c() {
      t = Mt("span"), u && u.c(), n = Tt(), r = Mt("span"), o = Mt("span"), i = Pt(e[0]), l = Tt(), d && d.c(), Dt(o, "class", a = "group-hover:text-white " + (e[3] ? "font-medium" : "text-sm") + " " + (e[4] ? "text-white" : `text-${e[2]}`)), Dt(r, "class", "flex flex-col"), Dt(t, "class", s = "group-hover:bg-tan flex flex-auto gap-2 rounded-md p-2 group-hover:text-white group-hover:shadow-none " + (e[4] ? "bg-tan/70 text-white" : ""))
    },
    m(e, a) {
      Ct(e, t, a), u && u.m(t, null), bt(t, n), bt(t, r), bt(r, o), bt(o, i), bt(r, l), d && d.m(r, null), c = !0
    },
    p(e, [l]) {
      e[1] ? u ? (u.p(e, l), 2 & l && qn(u, 1)) : (u = Hh(e), u.c(), qn(u, 1), u.m(t, n)) : u && (In(), zn(u, 1, 1, () => {
        u = null
      }), Ln()), (!c || 1 & l) && Ht(i, e[0]), (!c || 28 & l && a !== (a = "group-hover:text-white " + (e[3] ? "font-medium" : "text-sm") + " " + (e[4] ? "text-white" : `text-${e[2]}`))) && Dt(o, "class", a), e[3] ? d ? (d.p(e, l), 8 & l && qn(d, 1)) : (d = Vh(e), d.c(), qn(d, 1), d.m(r, null)) : d && (In(), zn(d, 1, 1, () => {
        d = null
      }), Ln()), (!c || 16 & l && s !== (s = "group-hover:bg-tan flex flex-auto gap-2 rounded-md p-2 group-hover:text-white group-hover:shadow-none " + (e[4] ? "bg-tan/70 text-white" : ""))) && Dt(t, "class", s)
    },
    i(e) {
      c || (qn(u), qn(d), c = !0)
    },
    o(e) {
      zn(u), zn(d), c = !1
    },
    d(e) {
      e && At(t), u && u.d(), d && d.d()
    }
  }
}

function Xh(e, t, n) {
  let {
    label: r
  } = t, {
    icon: o
  } = t, {
    accent: i
  } = t, {
    subtitle: a
  } = t, {
    active: l = !1
  } = t;
  return e.$$set = e => {
    "label" in e && n(0, r = e.label), "icon" in e && n(1, o = e.icon), "accent" in e && n(2, i = e.accent), "subtitle" in e && n(3, a = e.subtitle), "active" in e && n(4, l = e.active)
  }, [r, o, i, a, l]
}
class Jh extends Zn {
  constructor(e) {
    super(), Jn(this, e, Xh, Qh, h, {
      label: 0,
      icon: 1,
      accent: 2,
      subtitle: 3,
      active: 4
    })
  }
}

function Zh(e) {
  let t, n, r, o, i;
  return n = new Jh({
    props: {
      label: e[0],
      icon: e[2],
      accent: e[3],
      subtitle: e[4]
    }
  }), {
    c() {
      t = Mt("button"), Yn(n.$$.fragment), Dt(t, "type", "button")
    },
    m(a, l) {
      Ct(a, t, l), Qn(n, t, null), r = !0, o || (i = Gt(t, "click", e[6]), o = !0)
    },
    p(e, t) {
      const r = {};
      1 & t && (r.label = e[0]), 4 & t && (r.icon = e[2]), 8 & t && (r.accent = e[3]), 16 & t && (r.subtitle = e[4]), n.$set(r)
    },
    i(e) {
      r || (qn(n.$$.fragment, e), r = !0)
    },
    o(e) {
      zn(n.$$.fragment, e), r = !1
    },
    d(e) {
      e && At(t), Xn(n), o = !1, i()
    }
  }
}

function em(e) {
  let t, n, r, o;
  const i = [nm, tm],
    a = [];

  function l(e, t) {
    return e[5] ? 0 : 1
  }
  return t = l(e), n = a[t] = i[t](e), {
    c() {
      n.c(), r = Et()
    },
    m(e, n) {
      a[t].m(e, n), Ct(e, r, n), o = !0
    },
    p(e, o) {
      let s = t;
      t = l(e), t === s ? a[t].p(e, o) : (In(), zn(a[s], 1, 1, () => {
        a[s] = null
      }), Ln(), n = a[t], n ? n.p(e, o) : (n = a[t] = i[t](e), n.c()), qn(n, 1), n.m(r.parentNode, r))
    },
    i(e) {
      o || (qn(n), o = !0)
    },
    o(e) {
      zn(n), o = !1
    },
    d(e) {
      e && At(r), a[t].d(e)
    }
  }
}

function tm(e) {
  let t, n;
  return t = new Wa({
    props: {
      to: e[1],
      $$slots: {
        default: [rm, ({
          active: e
        }) => ({
          8: e
        }), ({
          active: e
        }) => e ? 256 : 0]
      },
      $$scope: {
        ctx: e
      }
    }
  }), t.$on("click", e[7]), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, n) {
      const r = {};
      2 & n && (r.to = e[1]), 797 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function nm(e) {
  let t, n, r;
  return n = new Jh({
    props: {
      label: e[0],
      icon: e[2],
      accent: e[3],
      subtitle: e[4]
    }
  }), {
    c() {
      t = Mt("a"), Yn(n.$$.fragment), Dt(t, "href", e[1]), Dt(t, "target", "_blank"), Dt(t, "rel", "noopener noreferrer")
    },
    m(e, o) {
      Ct(e, t, o), Qn(n, t, null), r = !0
    },
    p(e, o) {
      const i = {};
      1 & o && (i.label = e[0]), 4 & o && (i.icon = e[2]), 8 & o && (i.accent = e[3]), 16 & o && (i.subtitle = e[4]), n.$set(i), (!r || 2 & o) && Dt(t, "href", e[1])
    },
    i(e) {
      r || (qn(n.$$.fragment, e), r = !0)
    },
    o(e) {
      zn(n.$$.fragment, e), r = !1
    },
    d(e) {
      e && At(t), Xn(n)
    }
  }
}

function rm(e) {
  let t, n;
  return t = new Jh({
    props: {
      label: e[0],
      icon: e[2],
      accent: e[3],
      subtitle: e[4],
      active: e[8]
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, n) {
      const r = {};
      1 & n && (r.label = e[0]), 4 & n && (r.icon = e[2]), 8 & n && (r.accent = e[3]), 16 & n && (r.subtitle = e[4]), 256 & n && (r.active = e[8]), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function om(e) {
  let t, n, r, o;
  const i = [em, Zh],
    a = [];

  function l(e, t) {
    return e[1] ? 0 : 1
  }
  return n = l(e), r = a[n] = i[n](e), {
    c() {
      t = Mt("li"), r.c(), Dt(t, "class", "firsto group flex flex-auto flex-col text-pretty px-2 first:pt-2 last:pb-2")
    },
    m(e, r) {
      Ct(e, t, r), a[n].m(t, null), o = !0
    },
    p(e, [o]) {
      let s = n;
      n = l(e), n === s ? a[n].p(e, o) : (In(), zn(a[s], 1, 1, () => {
        a[s] = null
      }), Ln(), r = a[n], r ? r.p(e, o) : (r = a[n] = i[n](e), r.c()), qn(r, 1), r.m(t, null))
    },
    i(e) {
      o || (qn(r), o = !0)
    },
    o(e) {
      zn(r), o = !1
    },
    d(e) {
      e && At(t), a[n].d()
    }
  }
}

function im(e, t, n) {
  let {
    label: r
  } = t, {
    path: o
  } = t, {
    icon: i
  } = t, {
    accent: a
  } = t, {
    subtitle: l
  } = t, {
    external: s = !1
  } = t;
  return e.$$set = e => {
    "label" in e && n(0, r = e.label), "path" in e && n(1, o = e.path), "icon" in e && n(2, i = e.icon), "accent" in e && n(3, a = e.accent), "subtitle" in e && n(4, l = e.subtitle), "external" in e && n(5, s = e.external)
  }, [r, o, i, a, l, s, function(t) {
    gn.call(this, e, t)
  }, function(t) {
    gn.call(this, e, t)
  }]
}
class am extends Zn {
  constructor(e) {
    super(), Jn(this, e, im, om, h, {
      label: 0,
      path: 1,
      icon: 2,
      accent: 3,
      subtitle: 4,
      external: 5
    })
  }
}

function lm(e, t, n) {
  const r = e.slice();
  return r[2] = t[n], r
}

function sm(e) {
  let t, n;
  return t = new am({
    props: {
      path: e[2].path,
      icon: e[2].icon,
      accent: e[2].accent,
      subtitle: e[2].subtitle,
      label: e[2].label
    }
  }), t.$on("click", e[1]), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, n) {
      const r = {};
      1 & n && (r.path = e[2].path), 1 & n && (r.icon = e[2].icon), 1 & n && (r.accent = e[2].accent), 1 & n && (r.subtitle = e[2].subtitle), 1 & n && (r.label = e[2].label), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function cm(e) {
  let t, n, r = Wn(e[0]),
    o = [];
  for (let a = 0; a < r.length; a += 1) o[a] = sm(lm(e, r, a));
  const i = e => zn(o[e], 1, 1, () => {
    o[e] = null
  });
  return {
    c() {
      for (let e = 0; e < o.length; e += 1) o[e].c();
      t = Et()
    },
    m(e, r) {
      for (let t = 0; t < o.length; t += 1) o[t] && o[t].m(e, r);
      Ct(e, t, r), n = !0
    },
    p(e, [n]) {
      if (1 & n) {
        let a;
        for (r = Wn(e[0]), a = 0; a < r.length; a += 1) {
          const i = lm(e, r, a);
          o[a] ? (o[a].p(i, n), qn(o[a], 1)) : (o[a] = sm(i), o[a].c(), qn(o[a], 1), o[a].m(t.parentNode, t))
        }
        for (In(), a = r.length; a < o.length; a += 1) i(a);
        Ln()
      }
    },
    i(e) {
      if (!n) {
        for (let e = 0; e < r.length; e += 1) qn(o[e]);
        n = !0
      }
    },
    o(e) {
      o = o.filter(Boolean);
      for (let t = 0; t < o.length; t += 1) zn(o[t]);
      n = !1
    },
    d(e) {
      e && At(t), Bt(o, e)
    }
  }
}

function um(e, t, n) {
  let {
    items: r
  } = t;
  return e.$$set = e => {
    "items" in e && n(0, r = e.items)
  }, [r, function(t) {
    gn.call(this, e, t)
  }]
}
class dm extends Zn {
  constructor(e) {
    super(), Jn(this, e, um, cm, h, {
      items: 0
    })
  }
}

function fm(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "24"
    }, {
      height: "24"
    }, {
      fill: "currentColor"
    }, {
      viewBox: "0 -960 960 960"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path d="M480-269 314-169q-11 7-23 6t-21-8-14-17.5-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571t12-18 22-9l194-17 75-178q5-12 15.5-18t21.5-6 21.5 6 15.5 18l75 178 194 17q14 2 22 9t12 18 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171t-21 8-23-6z"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "24"
      }, {
        height: "24"
      }, {
        fill: "currentColor"
      }, {
        viewBox: "0 -960 960 960"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function pm(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}

function hm(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "24"
    }, {
      height: "24"
    }, {
      fill: "currentColor"
    }, {
      viewBox: "0 -960 960 960"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path d="m281-487 33-68q10-21 29.5-33t42.5-12h54v-240q0-17 11.5-28.5T480-880h208q11 0 17 9.5t1 19.5l-22 42q-2 5-2 9t2 9l22 42q5 10-1 19.5t-17 9.5H520v120h51q23 0 41.5 12t29.5 32l35 70-120 80-77-39-77 39zM209-80q-45 0-68.5-37.5T137-195l108-220 152 101 83-41 83 41 150-99 109 217q20 40-3.5 78T750-80z"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "24"
      }, {
        height: "24"
      }, {
        fill: "currentColor"
      }, {
        viewBox: "0 -960 960 960"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function mm(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}

function gm(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "24"
    }, {
      height: "24"
    }, {
      fill: "currentColor"
    }, {
      viewBox: "0 -960 960 960"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path d="M200-520q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h160q33 0 56.5 23.5T440-760v160q0 33-23.5 56.5T360-520zm0 400q-33 0-56.5-23.5T120-200v-160q0-33 23.5-56.5T200-440h160q33 0 56.5 23.5T440-360v160q0 33-23.5 56.5T360-120zm400-400q-33 0-56.5-23.5T520-600v-160q0-33 23.5-56.5T600-840h160q33 0 56.5 23.5T840-760v160q0 33-23.5 56.5T760-520zm0 400q-33 0-56.5-23.5T520-200v-160q0-33 23.5-56.5T600-440h160q33 0 56.5 23.5T840-360v160q0 33-23.5 56.5T760-120z"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "24"
      }, {
        height: "24"
      }, {
        fill: "currentColor"
      }, {
        viewBox: "0 -960 960 960"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function vm(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}

function $m(e) {
  let t;
  return {
    c() {
      t = Pt("Privacy & Cookies")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function wm(e) {
  let t;
  return {
    c() {
      t = Pt("About")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function ym(e) {
  let t;
  return {
    c() {
      t = Pt("Game not working?")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function xm(e) {
  let t, n, r, o, a, l, s, c, u, d, f, p, h, m, g, v, $, w, y, x, b, _, k, C, S, A, B, M, O, P, T, E, G, D, I, L;
  return r = new dm({
    props: {
      items: Sm(e[5])
    }
  }), r.$on("click", e[8]), v = new Wa({
    props: {
      to: xa,
      class: "hover:underline",
      $$slots: {
        default: [$m]
      },
      $$scope: {
        ctx: e
      }
    }
  }), _ = new Wa({
    props: {
      to: _a,
      class: "hover:underline",
      $$slots: {
        default: [wm]
      },
      $$scope: {
        ctx: e
      }
    }
  }), S = new Wa({
    props: {
      to: ka,
      class: "hover:underline",
      $$slots: {
        default: [ym]
      },
      $$scope: {
        ctx: e
      }
    }
  }), S.$on("click", e[12]), {
    c() {
      t = Mt("nav"), n = Mt("ul"), Yn(r.$$.fragment), o = Tt(), a = Mt("hr"), l = Tt(), s = Mt("ul"), c = Mt("li"), u = Mt("a"), d = Pt("Give Feedback"), f = Tt(), p = Mt("li"), h = Mt("button"), h.textContent = "Get the App", m = Tt(), g = Mt("li"), Yn(v.$$.fragment), $ = Tt(), w = Mt("li"), y = Mt("button"), y.textContent = "Consent Preferences", x = Tt(), b = Mt("li"), Yn(_.$$.fragment), k = Tt(), C = Mt("li"), Yn(S.$$.fragment), A = Tt(), B = Mt("li"), B.innerHTML = '<a href="https://online-solitaire.com" target="_blank" rel="noopener" class="hover:underline">Play Solitaire</a>', M = Tt(), O = Mt("li"), O.innerHTML = '<a href="https://worldofcardgames.com" target="_blank" rel="noopener" class="hover:underline">Play Card Games</a>', P = Tt(), T = Mt("ul"), T.innerHTML = '<li class="flex flex-col"><a href="https://classic.play2048.co" class="bg-leather/30 py-2 text-center text-xs hover:underline" target="_blank">Go to the old 2048 →</a></li>', Dt(n, "class", "flex flex-col"), Dt(a, "class", "border-leather/50 mx-2 border-t"), Dt(u, "href", e[6]), Dt(u, "target", "_blank"), Dt(u, "rel", "noopener noreferrer"), Dt(u, "class", "hover:underline"), Dt(h, "class", "hover:underline"), Dt(y, "class", "text-left hover:underline"), Dt(s, "class", "grid grid-cols-2 items-center justify-center gap-x-4 gap-y-3 p-4 text-left text-xs"), Dt(t, "class", E = "sizing bg-beige absolute left-2 right-2 top-8 z-40 mt-2 flex-col rounded-xl shadow-xl will-change-[opacity,transform] md:left-0 md:right-auto md:top-14 md:w-80 " + e[2] + " svelte-17yqhd9"), Dt(t, "style", G = `transform: translate3d(0,${20*-(1-e[4])}px,0); opacity: ${e[4]}`)
    },
    m(i, E) {
      Ct(i, t, E), bt(t, n), Qn(r, n, null), bt(t, o), bt(t, a), bt(t, l), bt(t, s), bt(s, c), bt(c, u), bt(u, d), bt(s, f), bt(s, p), bt(p, h), bt(s, m), bt(s, g), Qn(v, g, null), bt(s, $), bt(s, w), bt(w, y), bt(s, x), bt(s, b), Qn(_, b, null), bt(s, k), bt(s, C), Qn(S, C, null), bt(s, A), bt(s, B), bt(s, M), bt(s, O), bt(t, P), bt(t, T), e[13](t), D = !0, I || (L = [Gt(u, "click", e[9]), Gt(h, "click", e[10]), Gt(y, "click", e[11])], I = !0)
    },
    p(e, [n]) {
      const o = {};
      32 & n && (o.items = Sm(e[5])), r.$set(o), (!D || 64 & n) && Dt(u, "href", e[6]);
      const i = {};
      16384 & n && (i.$$scope = {
        dirty: n,
        ctx: e
      }), v.$set(i);
      const a = {};
      16384 & n && (a.$$scope = {
        dirty: n,
        ctx: e
      }), _.$set(a);
      const l = {};
      16384 & n && (l.$$scope = {
        dirty: n,
        ctx: e
      }), S.$set(l), (!D || 4 & n && E !== (E = "sizing bg-beige absolute left-2 right-2 top-8 z-40 mt-2 flex-col rounded-xl shadow-xl will-change-[opacity,transform] md:left-0 md:right-auto md:top-14 md:w-80 " + e[2] + " svelte-17yqhd9")) && Dt(t, "class", E), (!D || 16 & n && G !== (G = `transform: translate3d(0,${20*-(1-e[4])}px,0); opacity: ${e[4]}`)) && Dt(t, "style", G)
    },
    i(e) {
      D || (qn(r.$$.fragment, e), qn(v.$$.fragment, e), qn(_.$$.fragment, e), qn(S.$$.fragment, e), D = !0)
    },
    o(e) {
      zn(r.$$.fragment, e), zn(v.$$.fragment, e), zn(_.$$.fragment, e), zn(S.$$.fragment, e), D = !1
    },
    d(n) {
      n && At(t), Xn(r), Xn(v), Xn(_), Xn(S), e[13](null), I = !1, i(L)
    }
  }
}
const bm = {
    path: va,
    label: ct[Z.Standard],
    subtitle: "2048 with powerups",
    icon: class extends Zn {
      constructor(e) {
        super(), Jn(this, e, pm, fm, h, {})
      }
    }
  },
  _m = {
    path: $a,
    label: ct[Z.Classic],
    subtitle: "The original 2048, no undo",
    icon: class extends Zn {
      constructor(e) {
        super(), Jn(this, e, vm, gm, h, {})
      }
    }
  },
  km = {
    path: ya,
    label: ct[Z.Tutorial],
    subtitle: "Learn how to play 2048",
    icon: class extends Zn {
      constructor(e) {
        super(), Jn(this, e, mm, hm, h, {})
      }
    }
  },
  Cm = {
    path: wa,
    label: ct[Z.Partner1],
    subtitle: class extends Zn {
      constructor(e) {
        super(), Jn(this, e, Wh, Uh, h, {
          active: 0
        })
      }
    },
    accent: "64-red",
    icon: $l
  };

function Sm(e) {
  return e === zs.Unauthenticated || e === zs.Available || e == zs.Expired ? [bm, _m, km, Cm] : [bm, _m, km]
}

function Am(e, t, n) {
  let r, o, i, a;
  E(e, Fs, e => n(5, o = e)), E(e, uh, e => n(6, i = e)), E(e, Xs, e => n(7, a = e));
  let l, {
      open: s = !1
    } = t,
    c = "hidden",
    u = Fd(0);

  function d() {
    n(0, s = !1)
  }
  return E(e, u, e => n(4, r = e)), u.stiffness = .4, u.damping = .5, dn(() => {
    function e(e) {
      s && p(u) > .1 && l && !l.contains(e.target) && d()
    }
    return document.addEventListener("click", e), () => document.removeEventListener("click", e)
  }), e.$$set = e => {
    "open" in e && n(0, s = e.open)
  }, e.$$.update = () => {
    1 & e.$$.dirty && n(2, c = "flex"), 3 & e.$$.dirty && u.set(s ? 1 : 0, {
      hard: !s
    }).then(() => {
      s || n(2, c = "hidden")
    })
  }, [s, u, c, l, r, o, i, a, d, () => {
    n(0, s = !1), W(Xs, a = "giveFeedbackThanks", a)
  }, () => {
    n(0, s = !1), W(Xs, a = "appDownload", a)
  }, () => {
    void 0 !== window.ezCMP && window.ezCMP.generateCMPFromPrivacyCenter(), n(0, s = !1)
  }, () => zi.troubleshootingClicked("Menu"), function(e) {
    $n[e ? "unshift" : "push"](() => {
      l = e, n(3, l)
    })
  }]
}
class Bm extends Zn {
  constructor(e) {
    super(), Jn(this, e, Am, xm, h, {
      open: 0
    })
  }
}

function Mm(e) {
  let t, n;
  return t = new sh({
    props: {
      class: "size-7"
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Om(e) {
  let t, n;
  return t = new $l({
    props: {
      class: "size-7"
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Pm(e) {
  let t;
  return {
    c() {
      t = Pt("2048")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Tm(e) {
  let t;
  return {
    c() {
      t = Mt("span"), t.innerHTML = '<span class="text-3xl leading-none">2048</span> <span class="bg-leather rounded-md px-1 py-0.5 text-xs font-medium uppercase text-white">Classic</span>', Dt(t, "class", "flex flex-col items-start text-center")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Em(e) {
  let t, n, r, o, i, a = !e[0] && Mm(),
    l = e[0] && Om();

  function s(e, t) {
    return e[2] === Z.Classic ? Tm : Pm
  }
  let c = s(e),
    u = c(e);
  return {
    c() {
      a && a.c(), t = Tt(), n = Mt("h1"), l && l.c(), r = Tt(), u.c(), Dt(n, "class", o = "flex items-center justify-center text-5xl font-bold " + (e[0] ? "text-64-red gap-2" : ""))
    },
    m(e, o) {
      a && a.m(e, o), Ct(e, t, o), Ct(e, n, o), l && l.m(n, null), bt(n, r), u.m(n, null), i = !0
    },
    p(e, d) {
      e[0] ? a && (In(), zn(a, 1, 1, () => {
        a = null
      }), Ln()) : a ? 1 & d && qn(a, 1) : (a = Mm(), a.c(), qn(a, 1), a.m(t.parentNode, t)), e[0] ? l ? 1 & d && qn(l, 1) : (l = Om(), l.c(), qn(l, 1), l.m(n, r)) : l && (In(), zn(l, 1, 1, () => {
        l = null
      }), Ln()), c !== (c = s(e)) && (u.d(1), u = c(e), u && (u.c(), u.m(n, null))), (!i || 1 & d && o !== (o = "flex items-center justify-center text-5xl font-bold " + (e[0] ? "text-64-red gap-2" : ""))) && Dt(n, "class", o)
    },
    i(e) {
      i || (qn(a), qn(l), i = !0)
    },
    o(e) {
      zn(a), zn(l), i = !1
    },
    d(e) {
      e && (At(t), At(n)), a && a.d(e), l && l.d(), u.d()
    }
  }
}

function Gm(e) {
  let t, n, o = e[6],
    i = Dm(e);
  return {
    c() {
      i.c(), t = Et()
    },
    m(e, r) {
      i.m(e, r), Ct(e, t, r), n = !0
    },
    p(e, n) {
      64 & n && h(o, o = e[6]) ? (In(), zn(i, 1, 1, r), Ln(), i = Dm(e), i.c(), qn(i, 1), i.m(t.parentNode, t)) : i.p(e, n)
    },
    i(e) {
      n || (qn(i), n = !0)
    },
    o(e) {
      zn(i), n = !1
    },
    d(e) {
      e && At(t), i.d(e)
    }
  }
}

function Dm(e) {
  let t, n, r;

  function o(t) {
    e[12](t)
  }
  let i = {
    statusMessage: e[6]
  };
  return void 0 !== e[1] && (i.height = e[1]), t = new Mh({
    props: i
  }), $n.push(() => Kn(t, "height", o)), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, n) {
      Qn(t, e, n), r = !0
    },
    p(e, r) {
      const o = {};
      64 & r && (o.statusMessage = e[6]), !n && 2 & r && (n = !0, o.height = e[1], Sn(() => n = !1)), t.$set(o)
    },
    i(e) {
      r || (qn(t.$$.fragment, e), r = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), r = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Im(e) {
  let t, n, r;
  return n = new jh({}), {
    c() {
      t = Mt("div"), Yn(n.$$.fragment), Dt(t, "class", "col-[center] row-[first] flex items-center gap-4")
    },
    m(e, o) {
      Ct(e, t, o), Qn(n, t, null), r = !0
    },
    i(e) {
      r || (qn(n.$$.fragment, e), r = !0)
    },
    o(e) {
      zn(n.$$.fragment, e), r = !1
    },
    d(e) {
      e && At(t), Xn(n)
    }
  }
}

function Lm(e) {
  let t, n;
  return t = new Ro({
    props: {
      class: "relative",
      $$slots: {
        default: [zm]
      },
      $$scope: {
        ctx: e
      }
    }
  }), t.$on("click", sa.resetWithConfirm), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function qm(e) {
  let t;
  return {
    c() {
      t = Mt("span"), t.innerHTML = 'N\n\n            <span class="font-normal">or</span>\n\n            R'
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    d(e) {
      e && At(t)
    }
  }
}

function zm(e) {
  let t, n, r;
  return t = new vf({
    props: {
      shortcut: [{
        key: "N"
      }, {
        key: "R"
      }],
      $$slots: {
        default: [qm]
      },
      $$scope: {
        ctx: e
      }
    }
  }), t.$on("activate", e[14]), {
    c() {
      Yn(t.$$.fragment), n = Pt("\n\n        New Game")
    },
    m(e, o) {
      Qn(t, e, o), Ct(e, n, o), r = !0
    },
    p(e, n) {
      const r = {};
      32768 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      r || (qn(t.$$.fragment, e), r = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), r = !1
    },
    d(e) {
      e && At(n), Xn(t, e)
    }
  }
}

function Fm(e) {
  let t, n, r, o, i, a, l, s, c, u, d, f, p, h, m, g, v, $;

  function w(t) {
    e[10](t)
  }
  let y = {};

  function x(t) {
    e[11](t)
  }
  void 0 !== e[3] && (y.open = e[3]), n = new Bm({
    props: y
  }), $n.push(() => Kn(n, "open", w));
  let b = {
    $$slots: {
      default: [Em]
    },
    $$scope: {
      ctx: e
    }
  };
  void 0 !== e[3] && (b.open = e[3]), a = new Th({
    props: b
  }), $n.push(() => Kn(a, "open", x));
  let _ = e[6] && Gm(e),
    k = !e[4] && Im(),
    C = !e[4] && Lm(e);
  return {
    c() {
      t = Mt("div"), Yn(n.$$.fragment), o = Tt(), i = Mt("div"), Yn(a.$$.fragment), s = Tt(), _ && _.c(), c = Tt(), k && k.c(), u = Tt(), d = Mt("div"), f = Mt("a"), p = Pt("Give Feedback"), h = Tt(), C && C.c(), Dt(i, "class", "col-[left] row-[first] flex items-center"), Dt(f, "href", e[7]), Dt(f, "class", "text-tan hidden text-nowrap text-right text-sm hover:underline xl:block"), Dt(f, "target", "_blank"), Dt(f, "rel", "noopener noreferrer"), Dt(d, "class", "col-[right] row-[first] flex items-center justify-end gap-4"), Dt(t, "class", "header-grid grid transform-gpu px-2 svelte-1vkpbns"), Dt(t, "style", m = e[4] ? `will-change: height, min-height; min-height: ${e[5]}px;` : "")
    },
    m(r, l) {
      Ct(r, t, l), Qn(n, t, null), bt(t, o), bt(t, i), Qn(a, i, null), bt(t, s), _ && _.m(t, null), bt(t, c), k && k.m(t, null), bt(t, u), bt(t, d), bt(d, f), bt(f, p), bt(d, h), C && C.m(d, null), g = !0, v || ($ = Gt(f, "click", e[13]), v = !0)
    },
    p(e, [o]) {
      const i = {};
      !r && 8 & o && (r = !0, i.open = e[3], Sn(() => r = !1)), n.$set(i);
      const s = {};
      32773 & o && (s.$$scope = {
        dirty: o,
        ctx: e
      }), !l && 8 & o && (l = !0, s.open = e[3], Sn(() => l = !1)), a.$set(s), e[6] ? _ ? (_.p(e, o), 64 & o && qn(_, 1)) : (_ = Gm(e), _.c(), qn(_, 1), _.m(t, c)) : _ && (In(), zn(_, 1, 1, () => {
        _ = null
      }), Ln()), e[4] ? k && (In(), zn(k, 1, 1, () => {
        k = null
      }), Ln()) : k ? 16 & o && qn(k, 1) : (k = Im(), k.c(), qn(k, 1), k.m(t, u)), (!g || 128 & o) && Dt(f, "href", e[7]), e[4] ? C && (In(), zn(C, 1, 1, () => {
        C = null
      }), Ln()) : C ? 16 & o && qn(C, 1) : (C = Lm(e), C.c(), qn(C, 1), C.m(d, null)), (!g || 48 & o && m !== (m = e[4] ? `will-change: height, min-height; min-height: ${e[5]}px;` : "")) && Dt(t, "style", m)
    },
    i(e) {
      g || (qn(n.$$.fragment, e), qn(a.$$.fragment, e), qn(_), qn(k), qn(C), g = !0)
    },
    o(e) {
      zn(n.$$.fragment, e), zn(a.$$.fragment, e), zn(_), zn(k), zn(C), g = !1
    },
    d(e) {
      e && At(t), Xn(n), Xn(a), _ && _.d(), k && k.d(), C && C.d(), v = !1, $()
    }
  }
}

function jm(e, t, n) {
  let r, o, i, a, l, s;
  E(e, J, e => n(2, o = e)), E(e, $d, e => n(6, a = e)), E(e, uh, e => n(7, l = e)), E(e, Xs, e => n(8, s = e));
  let c, {
      isPartner1Game: u = !1
    } = t,
    d = !1,
    f = Fd(c, {});
  return E(e, f, e => n(5, i = e)), e.$$set = e => {
    "isPartner1Game" in e && n(0, u = e.isPartner1Game)
  }, e.$$.update = () => {
    2 & e.$$.dirty && W(f, i = c, i), 4 & e.$$.dirty && n(4, r = o === Z.Tutorial)
  }, [u, c, o, d, r, i, a, l, s, f, function(e) {
    d = e, n(3, d)
  }, function(e) {
    d = e, n(3, d)
  }, function(e) {
    c = e, n(1, c)
  }, () => W(Xs, s = "giveFeedbackThanks", s), () => sa.resetWithConfirm()]
}
class Nm extends Zn {
  constructor(e) {
    super(), Jn(this, e, jm, Fm, h, {
      isPartner1Game: 0
    })
  }
}

function Rm(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "24"
    }, {
      height: "24"
    }, {
      fill: "currentColor"
    }, {
      viewBox: "0 -960 960 960"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path d="M480-160q-134 0-227-93t-93-227 93-227 227-93q69 0 132 28.5T720-690v-70q0-17 11.5-28.5T760-800t28.5 11.5T800-760v200q0 17-11.5 28.5T760-520H560q-17 0-28.5-11.5T520-560t11.5-28.5T560-600h128q-32-56-87.5-88T480-720q-100 0-170 70t-70 170 70 170 170 70q68 0 124.5-34.5T692-367q8-14 22.5-19.5t29.5-.5q16 5 23 21t-1 30q-41 80-117 128t-169 48"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "24"
      }, {
        height: "24"
      }, {
        fill: "currentColor"
      }, {
        viewBox: "0 -960 960 960"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function Um(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class Wm extends Zn {
  constructor(e) {
    super(), Jn(this, e, Um, Rm, h, {})
  }
}

function Hm(e) {
  let t, n;
  return t = new sh({
    props: {
      class: "size-6"
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p: r,
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Vm(e) {
  let t, n, r, o, i = e[0] && Km(),
    a = e[2] === Z.Classic && Ym();
  return {
    c() {
      t = Mt("h1"), i && i.c(), n = Pt("\n      2048\n      "), a && a.c(), Dt(t, "class", r = "col-[center] row-[top] flex items-center justify-center text-3xl font-bold " + (e[0] ? "text-64-red gap-2" : ""))
    },
    m(e, r) {
      Ct(e, t, r), i && i.m(t, null), bt(t, n), a && a.m(t, null), o = !0
    },
    p(e, l) {
      e[0] ? i ? 1 & l && qn(i, 1) : (i = Km(), i.c(), qn(i, 1), i.m(t, n)) : i && (In(), zn(i, 1, 1, () => {
        i = null
      }), Ln()), e[2] === Z.Classic ? a || (a = Ym(), a.c(), a.m(t, null)) : a && (a.d(1), a = null), (!o || 1 & l && r !== (r = "col-[center] row-[top] flex items-center justify-center text-3xl font-bold " + (e[0] ? "text-64-red gap-2" : ""))) && Dt(t, "class", r)
    },
    i(e) {
      o || (qn(i), o = !0)
    },
    o(e) {
      zn(i), o = !1
    },
    d(e) {
      e && At(t), i && i.d(), a && a.d()
    }
  }
}

function Km(e) {
  let t, n;
  return t = new $l({
    props: {
      class: "shrink-0"
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Ym(e) {
  let t;
  return {
    c() {
      t = Mt("span"), t.textContent = "Classic", Dt(t, "class", "bg-leather ml-1 rounded-md px-1 py-0.5 text-xs font-medium uppercase text-white")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    d(e) {
      e && At(t)
    }
  }
}

function Qm(e) {
  let t, n, r, o, i, a;
  return r = new Wm({}), {
    c() {
      t = Mt("div"), n = Mt("button"), Yn(r.$$.fragment), Dt(n, "class", "block"), Dt(t, "class", "col-[right] row-[top] flex grow basis-0 justify-end pr-2")
    },
    m(e, l) {
      Ct(e, t, l), bt(t, n), Qn(r, n, null), o = !0, i || (a = Gt(n, "click", sa.resetWithConfirm), i = !0)
    },
    i(e) {
      o || (qn(r.$$.fragment, e), o = !0)
    },
    o(e) {
      zn(r.$$.fragment, e), o = !1
    },
    d(e) {
      e && At(t), Xn(r), i = !1, a()
    }
  }
}

function Xm(e) {
  let t, n, o = e[6],
    i = Jm(e);
  return {
    c() {
      i.c(), t = Et()
    },
    m(e, r) {
      i.m(e, r), Ct(e, t, r), n = !0
    },
    p(e, n) {
      64 & n && h(o, o = e[6]) ? (In(), zn(i, 1, 1, r), Ln(), i = Jm(e), i.c(), qn(i, 1), i.m(t.parentNode, t)) : i.p(e, n)
    },
    i(e) {
      n || (qn(i), n = !0)
    },
    o(e) {
      zn(i), n = !1
    },
    d(e) {
      e && At(t), i.d(e)
    }
  }
}

function Jm(e) {
  let t, n, r;

  function o(t) {
    e[10](t)
  }
  let i = {
    statusMessage: e[6]
  };
  return void 0 !== e[1] && (i.height = e[1]), t = new Mh({
    props: i
  }), $n.push(() => Kn(t, "height", o)), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, n) {
      Qn(t, e, n), r = !0
    },
    p(e, r) {
      const o = {};
      64 & r && (o.statusMessage = e[6]), !n && 2 & r && (n = !0, o.height = e[1], Sn(() => n = !1)), t.$set(o)
    },
    i(e) {
      r || (qn(t.$$.fragment, e), r = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), r = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Zm(e) {
  let t, n;
  return t = new jh({
    props: {
      leftScoreBoxClass: "col-[left] row-[bottom]",
      rightScoreBoxClass: "col-[right] row-[bottom]"
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function eg(e) {
  let t, n, r, o, i, a, l, s, c, u, d, f, p;

  function h(t) {
    e[8](t)
  }
  let m = {};

  function g(t) {
    e[9](t)
  }
  void 0 !== e[3] && (m.open = e[3]), n = new Bm({
    props: m
  }), $n.push(() => Kn(n, "open", h));
  let v = {
    $$slots: {
      default: [Hm]
    },
    $$scope: {
      ctx: e
    }
  };
  void 0 !== e[3] && (v.open = e[3]), a = new Th({
    props: v
  }), $n.push(() => Kn(a, "open", g));
  let $ = !e[4] && Vm(e),
    w = !e[4] && Qm(),
    y = e[6] && Xm(e),
    x = !e[4] && Zm();
  return {
    c() {
      t = Mt("div"), Yn(n.$$.fragment), o = Tt(), i = Mt("div"), Yn(a.$$.fragment), s = Tt(), $ && $.c(), c = Tt(), w && w.c(), u = Tt(), y && y.c(), d = Tt(), x && x.c(), Dt(i, "class", "col-[left] row-[top] flex grow basis-0"), Dt(t, "class", "header-grid grid transform-gpu px-2 svelte-1z6t2w"), Dt(t, "style", f = e[4] ? `will-change: height, min-height; min-height: ${e[5]}px;` : "")
    },
    m(e, r) {
      Ct(e, t, r), Qn(n, t, null), bt(t, o), bt(t, i), Qn(a, i, null), bt(t, s), $ && $.m(t, null), bt(t, c), w && w.m(t, null), bt(t, u), y && y.m(t, null), bt(t, d), x && x.m(t, null), p = !0
    },
    p(e, [o]) {
      const i = {};
      !r && 8 & o && (r = !0, i.open = e[3], Sn(() => r = !1)), n.$set(i);
      const s = {};
      2048 & o && (s.$$scope = {
        dirty: o,
        ctx: e
      }), !l && 8 & o && (l = !0, s.open = e[3], Sn(() => l = !1)), a.$set(s), e[4] ? $ && (In(), zn($, 1, 1, () => {
        $ = null
      }), Ln()) : $ ? ($.p(e, o), 16 & o && qn($, 1)) : ($ = Vm(e), $.c(), qn($, 1), $.m(t, c)), e[4] ? w && (In(), zn(w, 1, 1, () => {
        w = null
      }), Ln()) : w ? 16 & o && qn(w, 1) : (w = Qm(), w.c(), qn(w, 1), w.m(t, u)), e[6] ? y ? (y.p(e, o), 64 & o && qn(y, 1)) : (y = Xm(e), y.c(), qn(y, 1), y.m(t, d)) : y && (In(), zn(y, 1, 1, () => {
        y = null
      }), Ln()), e[4] ? x && (In(), zn(x, 1, 1, () => {
        x = null
      }), Ln()) : x ? 16 & o && qn(x, 1) : (x = Zm(), x.c(), qn(x, 1), x.m(t, null)), (!p || 48 & o && f !== (f = e[4] ? `will-change: height, min-height; min-height: ${e[5]}px;` : "")) && Dt(t, "style", f)
    },
    i(e) {
      p || (qn(n.$$.fragment, e), qn(a.$$.fragment, e), qn($), qn(w), qn(y), qn(x), p = !0)
    },
    o(e) {
      zn(n.$$.fragment, e), zn(a.$$.fragment, e), zn($), zn(w), zn(y), zn(x), p = !1
    },
    d(e) {
      e && At(t), Xn(n), Xn(a), $ && $.d(), w && w.d(), y && y.d(), x && x.d()
    }
  }
}

function tg(e, t, n) {
  let r, o, i, a;
  E(e, J, e => n(2, o = e)), E(e, $d, e => n(6, a = e));
  let l, {
      isPartner1Game: s = !1
    } = t,
    c = !1,
    u = Fd(l, {});
  return E(e, u, e => n(5, i = e)), e.$$set = e => {
    "isPartner1Game" in e && n(0, s = e.isPartner1Game)
  }, e.$$.update = () => {
    2 & e.$$.dirty && W(u, i = l, i), 4 & e.$$.dirty && n(4, r = o === Z.Tutorial)
  }, [s, l, o, c, r, i, a, u, function(e) {
    c = e, n(3, c)
  }, function(e) {
    c = e, n(3, c)
  }, function(e) {
    l = e, n(1, l)
  }]
}
class ng extends Zn {
  constructor(e) {
    super(), Jn(this, e, tg, eg, h, {
      isPartner1Game: 0
    })
  }
}

function rg(e) {
  let t, n;
  return t = new ng({
    props: {
      isPartner1Game: e[0]
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, n) {
      const r = {};
      1 & n && (r.isPartner1Game = e[0]), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function og(e) {
  let t, n;
  return t = new Nm({
    props: {
      isPartner1Game: e[0]
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, n) {
      const r = {};
      1 & n && (r.isPartner1Game = e[0]), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function ig(e) {
  let t, n, r, o;
  const i = [og, rg],
    a = [];

  function l(e, t) {
    return e[3] ? 0 : 1
  }
  return t = l(e), n = a[t] = i[t](e), {
    c() {
      n.c(), r = Et()
    },
    m(e, n) {
      a[t].m(e, n), Ct(e, r, n), o = !0
    },
    p(e, o) {
      let s = t;
      t = l(e), t === s ? a[t].p(e, o) : (In(), zn(a[s], 1, 1, () => {
        a[s] = null
      }), Ln(), n = a[t], n ? n.p(e, o) : (n = a[t] = i[t](e), n.c()), qn(n, 1), n.m(r.parentNode, r))
    },
    i(e) {
      o || (qn(n), o = !0)
    },
    o(e) {
      zn(n), o = !1
    },
    d(e) {
      e && At(r), a[t].d(e)
    }
  }
}

function ag(e) {
  let t, n, r;
  return n = new bp({
    props: {
      query: Le.md,
      $$slots: {
        default: [ig, ({
          matches: e
        }) => ({
          3: e
        }), ({
          matches: e
        }) => e ? 8 : 0]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      t = Mt("header"), Yn(n.$$.fragment), Dt(t, "class", "relative z-50")
    },
    m(e, o) {
      Ct(e, t, o), Qn(n, t, null), r = !0
    },
    p(e, [t]) {
      const r = {};
      25 & t && (r.$$scope = {
        dirty: t,
        ctx: e
      }), n.$set(r)
    },
    i(e) {
      r || (qn(n.$$.fragment, e), r = !0)
    },
    o(e) {
      zn(n.$$.fragment, e), r = !1
    },
    d(e) {
      e && At(t), Xn(n)
    }
  }
}

function lg(e, t, n) {
  let r, o, i;
  return E(e, Fs, e => n(1, o = e)), E(e, J, e => n(2, i = e)), e.$$.update = () => {
    6 & e.$$.dirty && n(0, r = i === Z.Partner1 && o === zs.Available)
  }, [r, o, i]
}
class sg extends Zn {
  constructor(e) {
    super(), Jn(this, e, lg, ag, h, {})
  }
}

function cg(e) {
  let t, n, o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "24"
    }, {
      height: "24"
    }, {
      fill: "currentColor"
    }, {
      viewBox: "0 -960 960 960"
    }, e[0]],
    i = {};
  for (let r = 0; r < o.length; r += 1) i = I(i, o[r]);
  return {
    c() {
      t = Ot("svg"), n = new en(!0), this.h()
    },
    l(e) {
      t = Rt(e, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0
      });
      var r = jt(t);
      n = Wt(r, !0), r.forEach(At), this.h()
    },
    h() {
      n.a = null, qt(t, i)
    },
    m(e, r) {
      St(e, t, r), n.m('<path d="M496-182 182-496q-23-23-23-54t23-54l174-174q23-23 54-23t54 23l314 314q23 23 23 54t-23 54L604-182q-23 23-54 23t-54-23m54-58 170-170-310-310-170 170zm9-633 77 77q11 11 11 28t-11 28-28 11-28-11L410-910q-12-12-6.5-28t22.5-19q14-2 27-2.5t27-.5q99 0 186.5 37.5t153 103 103 153T960-480q0 17-11.5 28.5T920-440t-28.5-11.5T880-480q0-71-24-136t-66.5-117T688-821.5 559-873M401-87l-77-77q-11-11-11-28t11-28 28-11 28 11L550-50q12 12 6.5 28.5T534-3q-14 2-27 2.5T480 0q-99 0-186.5-37.5t-153-103-103-153T0-480q0-17 11.5-28.5T40-520t28.5 11.5T80-480q0 71 24 136t66.5 117T272-138.5 401-87"/>', t)
    },
    p(e, [n]) {
      qt(t, i = Hn(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "24"
      }, {
        height: "24"
      }, {
        fill: "currentColor"
      }, {
        viewBox: "0 -960 960 960"
      }, 1 & n && e[0]]))
    },
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function ug(e, t, n) {
  return e.$$set = e => {
    n(0, t = I(I({}, t), L(e)))
  }, [t = L(t)]
}
class dg extends Zn {
  constructor(e) {
    super(), Jn(this, e, ug, cg, h, {})
  }
}
const {
  window: fg
} = ze;

function pg(e) {
  let t;
  return {
    c() {
      t = Mt("div"), Dt(t, "slot", "placeholder"), Dt(t, "class", "bg-tan/20 h-[600px] w-[336px]")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    d(e) {
      e && At(t)
    }
  }
}

function hg(e) {
  let t, n;
  return t = new sg({
    props: {
      slot: "main"
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p: r,
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function mg(e) {
  let t, n;
  return t = new ih({
    props: {
      slot: "alternate"
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p: r,
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function gg(e) {
  let t, n, o, i;
  return o = new ap({}), {
    c() {
      t = Mt("div"), n = Mt("div"), Yn(o.$$.fragment), Dt(n, "class", "flex flex-col gap-3"), Dt(t, "slot", "main"), Dt(t, "class", "relative z-30 flex shrink-0 flex-col items-center justify-center gap-4")
    },
    m(e, r) {
      Ct(e, t, r), bt(t, n), Qn(o, n, null), i = !0
    },
    p: r,
    i(e) {
      i || (qn(o.$$.fragment, e), i = !0)
    },
    o(e) {
      zn(o.$$.fragment, e), i = !1
    },
    d(e) {
      e && At(t), Xn(o)
    }
  }
}

function vg(e) {
  let t, n;
  return t = new Up({
    props: {
      slot: "alternate"
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p: r,
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function $g(e) {
  let t;
  return {
    c() {
      t = Mt("div"), Dt(t, "slot", "placeholder"), Dt(t, "class", "bg-tan/20 h-[600px] w-[336px]")
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    d(e) {
      e && At(t)
    }
  }
}

function wg(e) {
  let t, n, r, o, a, l, s, c, u, d, f, p, h, m, g, v, $, w, y, x, b, _, k, C, S, A, B, M, O, P;
  t = new ar({
    props: {
      class: "game-layout"
    }
  }), a = new dg({
    props: {
      class: "text-tan h-12 w-auto"
    }
  }), m = new rf({
    props: {
      id: 145,
      class: "narrow:hidden hidden max-h-[700px] shrink-0 items-center justify-center self-center empty:min-w-[160px] md:flex",
      $$slots: {
        placeholder: [pg]
      },
      $$scope: {
        ctx: e
      }
    }
  }), $ = new Jd({
    props: {
      anchor: "bottom",
      ratio: e[0],
      class: "z-50",
      $$slots: {
        alternate: [mg],
        main: [hg]
      },
      $$scope: {
        ctx: e
      }
    }
  });
  const T = e[5].default,
    E = z(T, e, e[6], null);
  return b = new Jd({
    props: {
      anchor: "top",
      ratio: e[0],
      $$slots: {
        alternate: [vg],
        main: [gg]
      },
      $$scope: {
        ctx: e
      }
    }
  }), k = new Ld({}), B = new rf({
    props: {
      id: 138,
      class: "narrow:hidden hidden max-h-[700px] shrink-0 items-center justify-center self-center empty:min-w-[160px] lg:flex",
      $$slots: {
        placeholder: [$g]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      Yn(t.$$.fragment), n = Tt(), r = Mt("div"), o = Mt("div"), Yn(a.$$.fragment), l = Tt(), s = Mt("div"), s.textContent = "Please turn your device to portrait mode to play.", c = Tt(), u = Mt("div"), u.innerHTML = 'Is this showing by mistake?\n      <a class="font-medium underline" href="mailto:feedback@play2048.co">Email me and let me know!</a>', d = Tt(), f = Mt("div"), p = Mt("div"), h = Tt(), Yn(m.$$.fragment), g = Tt(), v = Mt("div"), Yn($.$$.fragment), w = Tt(), y = Mt("div"), E && E.c(), x = Tt(), Yn(b.$$.fragment), _ = Tt(), Yn(k.$$.fragment), C = Tt(), S = Mt("div"), S.textContent = `play2048.co © 2014—${(new Date).getFullYear()} Gabriele Cirulli. All rights reserved.`, A = Tt(), Yn(B.$$.fragment), Dt(s, "class", "mt-4 text-lg"), Dt(u, "class", "mt-2 text-sm"), Dt(o, "class", "flex flex-col"), Dt(r, "class", "orientation-alert bg-beige fixed bottom-0 left-0 right-0 top-0 z-[999999] select-none items-center justify-center text-center svelte-t9ibju"), Dt(p, "class", "pwa:block short:!hidden fixed bottom-0 left-0 right-0 z-50 hidden h-10 md:!hidden"), Dt(y, "class", "flex min-h-0 min-w-0 grow basis-0 flex-col items-center justify-center px-8 sm:min-h-60 sm:px-0"), Dt(y, "data-touch-input", ""), Dt(S, "class", "short:hidden shrink-0 text-center text-xs opacity-30"), Dt(v, "class", "mx-auto flex min-w-0 max-w-screen-2xl grow basis-0 flex-col items-stretch gap-y-4 sm:gap-y-6"), Dt(f, "class", "relative flex grow select-none items-stretch pt-1.5 sm:gap-x-3 sm:px-3 md:pb-2 md:pt-0")
    },
    m(i, T) {
      Qn(t, i, T), Ct(i, n, T), Ct(i, r, T), bt(r, o), Qn(a, o, null), bt(o, l), bt(o, s), bt(o, c), bt(o, u), Ct(i, d, T), Ct(i, f, T), bt(f, p), bt(f, h), Qn(m, f, null), bt(f, g), bt(f, v), Qn($, v, null), bt(v, w), bt(v, y), E && E.m(y, null), bt(v, x), Qn(b, v, null), bt(v, _), Qn(k, v, null), bt(v, C), bt(v, S), bt(f, A), Qn(B, f, null), M = !0, O || (P = [Gt(fg, "resize", e[2]), Gt(p, "touchstart", yg, !0), Gt(p, "touchmove", xg, !0), Gt(p, "touchend", bg, !0)], O = !0)
    },
    p(e, [t]) {
      const n = {};
      64 & t && (n.$$scope = {
        dirty: t,
        ctx: e
      }), m.$set(n);
      const r = {};
      1 & t && (r.ratio = e[0]), 64 & t && (r.$$scope = {
        dirty: t,
        ctx: e
      }), $.$set(r), E && E.p && (!M || 64 & t) && F(E, T, e, e[6], M ? N(T, e[6], t, null) : j(e[6]), null);
      const o = {};
      1 & t && (o.ratio = e[0]), 64 & t && (o.$$scope = {
        dirty: t,
        ctx: e
      }), b.$set(o);
      const i = {};
      64 & t && (i.$$scope = {
        dirty: t,
        ctx: e
      }), B.$set(i)
    },
    i(e) {
      M || (qn(t.$$.fragment, e), qn(a.$$.fragment, e), qn(m.$$.fragment, e), qn($.$$.fragment, e), qn(E, e), qn(b.$$.fragment, e), qn(k.$$.fragment, e), qn(B.$$.fragment, e), M = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), zn(a.$$.fragment, e), zn(m.$$.fragment, e), zn($.$$.fragment, e), zn(E, e), zn(b.$$.fragment, e), zn(k.$$.fragment, e), zn(B.$$.fragment, e), M = !1
    },
    d(e) {
      e && (At(n), At(r), At(d), At(f)), Xn(t, e), Xn(a), Xn(m), Xn($), E && E.d(e), Xn(b), Xn(k), Xn(B), O = !1, i(P)
    }
  }
}
const yg = e => e.stopImmediatePropagation(),
  xg = e => e.stopImmediatePropagation(),
  bg = e => e.stopImmediatePropagation();

function _g(e, t, n) {
  let r, o;
  E(e, Ud, e => n(4, r = e));
  let {
    $$slots: i = {},
    $$scope: a
  } = t;
  const l = M("GameLayout");
  let s = Fd(void 0);
  E(e, s, e => n(0, o = e));
  let c = 0;
  const u = V(100, () => {
    l("Checking for forced height"), CSS.supports("height", "100svh") || (l("100svh not supported, forcing height to window.innerHeight (%o)", window.innerHeight), n(3, c = window.innerHeight))
  });
  return dn(u), e.$$set = e => {
    "$$scope" in e && n(6, a = e.$$scope)
  }, e.$$.update = () => {
    16 & e.$$.dirty && W(s, o = r ? 1 : 0, o), 8 & e.$$.dirty && c && (document.body.style.height = `${c}px`)
  }, [o, s, u, c, r, i, a]
}
class kg extends Zn {
  constructor(e) {
    super(), Jn(this, e, _g, wg, h, {})
  }
}

function Cg(e) {
  let t;
  const n = e[3].default,
    r = z(n, e, e[4], null);
  return {
    c() {
      r && r.c()
    },
    m(e, n) {
      r && r.m(e, n), t = !0
    },
    p(e, o) {
      r && r.p && (!t || 16 & o) && F(r, n, e, e[4], t ? N(n, e[4], o, null) : j(e[4]), null)
    },
    i(e) {
      t || (qn(r, e), t = !0)
    },
    o(e) {
      zn(r, e), t = !1
    },
    d(e) {
      r && r.d(e)
    }
  }
}

function Sg(e) {
  let t, n, r;
  var o = e[0];

  function i(e, t) {
    return {
      props: {
        $$slots: {
          default: [Ag]
        },
        $$scope: {
          ctx: e
        }
      }
    }
  }
  return o && (t = tn(o, i(e))), {
    c() {
      t && Yn(t.$$.fragment), n = Et()
    },
    m(e, o) {
      t && Qn(t, e, o), Ct(e, n, o), r = !0
    },
    p(e, r) {
      if (1 & r && o !== (o = e[0])) {
        if (t) {
          In();
          const e = t;
          zn(e.$$.fragment, 1, 0, () => {
            Xn(e, 1)
          }), Ln()
        }
        o ? (t = tn(o, i(e)), Yn(t.$$.fragment), qn(t.$$.fragment, 1), Qn(t, n.parentNode, n)) : t = null
      } else if (o) {
        const n = {};
        16 & r && (n.$$scope = {
          dirty: r,
          ctx: e
        }), t.$set(n)
      }
    },
    i(e) {
      r || (t && qn(t.$$.fragment, e), r = !0)
    },
    o(e) {
      t && zn(t.$$.fragment, e), r = !1
    },
    d(e) {
      e && At(n), t && Xn(t, e)
    }
  }
}

function Ag(e) {
  let t;
  const n = e[3].default,
    r = z(n, e, e[4], null);
  return {
    c() {
      r && r.c()
    },
    m(e, n) {
      r && r.m(e, n), t = !0
    },
    p(e, o) {
      r && r.p && (!t || 16 & o) && F(r, n, e, e[4], t ? N(n, e[4], o, null) : j(e[4]), null)
    },
    i(e) {
      t || (qn(r, e), t = !0)
    },
    o(e) {
      zn(r, e), t = !1
    },
    d(e) {
      r && r.d(e)
    }
  }
}

function Bg(e) {
  let t, n, r, o;
  const i = [Sg, Cg],
    a = [];

  function l(e, t) {
    return e[0] ? 0 : 1
  }
  return t = l(e), n = a[t] = i[t](e), {
    c() {
      n.c(), r = Et()
    },
    m(e, n) {
      a[t].m(e, n), Ct(e, r, n), o = !0
    },
    p(e, [o]) {
      let s = t;
      t = l(e), t === s ? a[t].p(e, o) : (In(), zn(a[s], 1, 1, () => {
        a[s] = null
      }), Ln(), n = a[t], n ? n.p(e, o) : (n = a[t] = i[t](e), n.c()), qn(n, 1), n.m(r.parentNode, r))
    },
    i(e) {
      o || (qn(n), o = !0)
    },
    o(e) {
      zn(n), o = !1
    },
    d(e) {
      e && At(r), a[t].d(e)
    }
  }
}

function Mg(e, t, n) {
  let r, o;
  E(e, J, e => n(5, r = e));
  let {
    $$slots: i = {},
    $$scope: a
  } = t;
  const l = Ta();
  E(e, l, e => n(2, o = e));
  let s = null;
  return e.$$set = e => {
    "$$scope" in e && n(4, a = e.$$scope)
  }, e.$$.update = () => {
    if (4 & e.$$.dirty) switch (o.pathname) {
      case va:
      case $a:
      case ya:
      case wa:
        n(0, s = kg);
        break;
      case xa:
      case ba:
      case _a:
      case ka:
        n(0, s = Bd);
        break;
      default:
        n(0, s = null)
    }
    1 & e.$$.dirty && s !== kg && W(J, r = void 0, r)
  }, [s, l, o, i, a]
}
class Og extends Zn {
  constructor(e) {
    super(), Jn(this, e, Mg, Bg, h, {})
  }
}

function Pg(e) {
  let t;
  return document.title = t = e[0], {
    c: r,
    m: r,
    p(e, [n]) {
      1 & n && t !== (t = e[0]) && (document.title = t)
    },
    i: r,
    o: r,
    d: r
  }
}

function Tg(e, t, n) {
  let r, o, i, a;
  E(e, J, e => n(3, i = e));
  const l = Ta();
  return E(e, l, e => n(4, a = e)), e.$$.update = () => {
    28 & e.$$.dirty && n(0, o = r(a.pathname, i))
  }, n(2, r = function(e, t) {
    let n;
    return e.startsWith(va) && (n = void 0), t && (e.startsWith($a) || e.startsWith(ya) || e.startsWith(wa)) && (n = ct[t]), e.startsWith(xa) && (n = "Privacy Policy"), e.startsWith(ba) && (n = "Cookie Policy"), e.startsWith(_a) && (n = "About 2048"), n ? `${n} • ${ut}` : ut
  }), [o, l, r, i, a]
}
class Eg extends Zn {
  constructor(e) {
    super(), Jn(this, e, Tg, Pg, h, {})
  }
}

function Gg(e) {
  let t;
  return {
    c() {
      t = Mt("p"), t.textContent = `Something went wrong. ${K(e[2])}`
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function Dg(e) {
  let t, n, r;
  var o = e[1].default;
  return o && (t = tn(o, {})), {
    c() {
      t && Yn(t.$$.fragment), n = Et()
    },
    m(e, o) {
      t && Qn(t, e, o), Ct(e, n, o), r = !0
    },
    p(e, r) {
      if (o !== (o = e[1].default)) {
        if (t) {
          In();
          const e = t;
          zn(e.$$.fragment, 1, 0, () => {
            Xn(e, 1)
          }), Ln()
        }
        o ? (t = tn(o, {}), Yn(t.$$.fragment), qn(t.$$.fragment, 1), Qn(t, n.parentNode, n)) : t = null
      }
    },
    i(e) {
      r || (t && qn(t.$$.fragment, e), r = !0)
    },
    o(e) {
      t && zn(t.$$.fragment, e), r = !1
    },
    d(e) {
      e && At(n), t && Xn(t, e)
    }
  }
}

function Ig(e) {
  let t;
  return {
    c() {
      t = Mt("p"), t.textContent = "Loading..."
    },
    m(e, n) {
      Ct(e, t, n)
    },
    p: r,
    i: r,
    o: r,
    d(e) {
      e && At(t)
    }
  }
}

function Lg(e) {
  let t, n, r = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Ig,
    then: Dg,
    catch: Gg,
    value: 1,
    error: 2,
    blocks: [, , , ]
  };
  return Rn(e[0], r), {
    c() {
      t = Et(), r.block.c()
    },
    m(e, o) {
      Ct(e, t, o), r.block.m(e, r.anchor = o), r.mount = () => t.parentNode, r.anchor = t, n = !0
    },
    p(t, n) {
      Un(r, e = t, n)
    },
    i(e) {
      n || (qn(r.block), n = !0)
    },
    o(e) {
      for (let t = 0; t < 3; t += 1) zn(r.blocks[t]);
      n = !1
    },
    d(e) {
      e && At(t), r.block.d(e), r.token = null, r = null
    }
  }
}

function qg(e) {
  let t, n;
  return t = new Cc({
    props: {
      $$slots: {
        default: [Lg]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, [n]) {
      const r = {};
      8 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function zg(e) {
  return [pt(() => import("./AsyncContent-DRsR-lSa.js"), [])]
}
class Fg extends Zn {
  constructor(e) {
    super(), Jn(this, e, zg, qg, h, {})
  }
}

function jg(e) {
  let t, n, o, i, a, l, s, c, u, d, f, p, h, m, g, v, $, w;
  return t = new nl({
    props: {
      path: va,
      component: Vu
    }
  }), o = new nl({
    props: {
      path: $a,
      component: pu
    }
  }), a = new nl({
    props: {
      path: ya,
      component: _d
    }
  }), s = new nl({
    props: {
      path: wa,
      component: Lu
    }
  }), u = new nl({
    props: {
      path: xa,
      component: Uu
    }
  }), f = new nl({
    props: {
      path: ba,
      component: Mu
    }
  }), h = new nl({
    props: {
      path: _a,
      component: Tc
    }
  }), g = new nl({
    props: {
      path: ka,
      component: Fg
    }
  }), $ = new nl({
    props: {
      component: Eu
    }
  }), {
    c() {
      Yn(t.$$.fragment), n = Tt(), Yn(o.$$.fragment), i = Tt(), Yn(a.$$.fragment), l = Tt(), Yn(s.$$.fragment), c = Tt(), Yn(u.$$.fragment), d = Tt(), Yn(f.$$.fragment), p = Tt(), Yn(h.$$.fragment), m = Tt(), Yn(g.$$.fragment), v = Tt(), Yn($.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), Ct(e, n, r), Qn(o, e, r), Ct(e, i, r), Qn(a, e, r), Ct(e, l, r), Qn(s, e, r), Ct(e, c, r), Qn(u, e, r), Ct(e, d, r), Qn(f, e, r), Ct(e, p, r), Qn(h, e, r), Ct(e, m, r), Qn(g, e, r), Ct(e, v, r), Qn($, e, r), w = !0
    },
    p: r,
    i(e) {
      w || (qn(t.$$.fragment, e), qn(o.$$.fragment, e), qn(a.$$.fragment, e), qn(s.$$.fragment, e), qn(u.$$.fragment, e), qn(f.$$.fragment, e), qn(h.$$.fragment, e), qn(g.$$.fragment, e), qn($.$$.fragment, e), w = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), zn(o.$$.fragment, e), zn(a.$$.fragment, e), zn(s.$$.fragment, e), zn(u.$$.fragment, e), zn(f.$$.fragment, e), zn(h.$$.fragment, e), zn(g.$$.fragment, e), zn($.$$.fragment, e), w = !1
    },
    d(e) {
      e && (At(n), At(i), At(l), At(c), At(d), At(p), At(m), At(v)), Xn(t, e), Xn(o, e), Xn(a, e), Xn(s, e), Xn(u, e), Xn(f, e), Xn(h, e), Xn(g, e), Xn($, e)
    }
  }
}

function Ng(e) {
  let t, n, r, o;
  return t = new Eg({}), r = new Og({
    props: {
      $$slots: {
        default: [jg]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      Yn(t.$$.fragment), n = Tt(), Yn(r.$$.fragment)
    },
    m(e, i) {
      Qn(t, e, i), Ct(e, n, i), Qn(r, e, i), o = !0
    },
    p(e, t) {
      const n = {};
      1 & t && (n.$$scope = {
        dirty: t,
        ctx: e
      }), r.$set(n)
    },
    i(e) {
      o || (qn(t.$$.fragment, e), qn(r.$$.fragment, e), o = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), zn(r.$$.fragment, e), o = !1
    },
    d(e) {
      e && At(n), Xn(t, e), Xn(r, e)
    }
  }
}

function Rg(e) {
  let t, n;
  return t = new ml({
    props: {
      $$slots: {
        default: [Ng]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      Yn(t.$$.fragment)
    },
    m(e, r) {
      Qn(t, e, r), n = !0
    },
    p(e, [n]) {
      const r = {};
      1 & n && (r.$$scope = {
        dirty: n,
        ctx: e
      }), t.$set(r)
    },
    i(e) {
      n || (qn(t.$$.fragment, e), n = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), n = !1
    },
    d(e) {
      Xn(t, e)
    }
  }
}

function Ug(e) {
  return []
}
class Wg extends Zn {
  constructor(e) {
    super(), Jn(this, e, Ug, Rg, h, {})
  }
}

function Hg(e) {
  let t, n = (o = Vg, decodeURIComponent("%3Cscript%20type%3D%22application%2Fld%2Bjson%22%3E") + JSON.stringify(o) + decodeURIComponent("%3C/script%3E") + "");
  var o;
  let i;
  return {
    c() {
      t = new Zt(!1), i = Et(), t.a = i
    },
    m(e, r) {
      t.m(n, document.head), bt(document.head, i)
    },
    p: r,
    i: r,
    o: r,
    d(e) {
      e && t.d(), At(i)
    }
  }
}
const Vg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "2048",
  url: "https://play2048.co/",
  logo: gs("/thumbnail256.png", location.origin),
  sameAs: ["https://twitter.com/gabrielecirulli", "https://github.com/gabrielecirulli"],
  founder: {
    "@type": "Person",
    name: "Gabriele Cirulli"
  },
  email: "feedback@play2048.co"
};
class Kg extends Zn {
  constructor(e) {
    super(), Jn(this, e, null, Hg, h, {})
  }
}

function Yg(e) {
  let t, n, r, o, i, a, l, s, c, u, d, f, p, h;
  t = new ar({
    props: {
      class: [Ge ? "ezoic-active" : void 0, e[0] ? `ezoic-anchor-${e[0]}` : void 0]
    }
  });
  let m = function() {
    let e, t;
    return {
      c() {
        e = Mt("script"), e.innerHTML = "", e.async = !0, Ce(e.src, t = "https://www.googletagmanager.com/gtag/js?id=G-QBRQK7L3ZM") || Dt(e, "src", "https://www.googletagmanager.com/gtag/js?id=G-QBRQK7L3ZM")
      },
      m(t, n) {
        Ct(t, e, n)
      },
      d(t) {
        t && At(e)
      }
    }
  }();
  return i = new wr({}), l = new sc({}), c = new bc({}), d = new Kg({}), p = new Wg({}), {
    c() {
      Yn(t.$$.fragment), n = Tt(), m && m.c(), r = Et(), o = Tt(), Yn(i.$$.fragment), a = Tt(), Yn(l.$$.fragment), s = Tt(), Yn(c.$$.fragment), u = Tt(), Yn(d.$$.fragment), f = Tt(), Yn(p.$$.fragment)
    },
    m(e, g) {
      Qn(t, e, g), Ct(e, n, g), m && m.m(document.head, null), bt(document.head, r), Ct(e, o, g), Qn(i, e, g), Ct(e, a, g), Qn(l, e, g), Ct(e, s, g), Qn(c, e, g), Ct(e, u, g), Qn(d, e, g), Ct(e, f, g), Qn(p, e, g), h = !0
    },
    p(e, [n]) {
      const r = {};
      1 & n && (r.class = [Ge ? "ezoic-active" : void 0, e[0] ? `ezoic-anchor-${e[0]}` : void 0]), t.$set(r)
    },
    i(e) {
      h || (qn(t.$$.fragment, e), qn(i.$$.fragment, e), qn(l.$$.fragment, e), qn(c.$$.fragment, e), qn(d.$$.fragment, e), qn(p.$$.fragment, e), h = !0)
    },
    o(e) {
      zn(t.$$.fragment, e), zn(i.$$.fragment, e), zn(l.$$.fragment, e), zn(c.$$.fragment, e), zn(d.$$.fragment, e), zn(p.$$.fragment, e), h = !1
    },
    d(e) {
      e && (At(n), At(o), At(a), At(s), At(u), At(f)), Xn(t, e), m && m.d(e), At(r), Xn(i, e), Xn(l, e), Xn(c, e), Xn(d, e), Xn(p, e)
    }
  }
}

function Qg(e, t, n) {
  let r;
  return E(e, uc, e => n(0, r = e)), [r]
}
const Xg = {
  en: () => pt(() => import("./index-B6Er4wUd.js"), []),
  it: () => pt(() => import("./index-C2uQc4Gf.js"), [])
};
let Jg, Zg;
sa.subscribe(e => {
  const t = p(J);
  Jg && e !== Jg && t && function(e, t, n, r) {
    var o, i, a, l;
    if (n.id === r.id) n.state === g.Fresh && r.state === g.Playing && zi.gameStarted(t, r), n.state !== g.Fresh && null === n.lastAction && null !== r.lastAction && zi.gameResumed(t, r), n.state !== g.GameOver && r.state === g.GameOver && zi.gameOver(t, r), n.state !== g.GameWon && r.state === g.GameWon && zi.gameWon(t, r), "continueAfterWin" === (null == (o = r.lastAction) ? void 0 : o.type) && zi.continueAfterWin(t, r), n.state === g.GameOver && r.state !== g.GameOver && "activatePowerup" === (null == (i = r.lastAction) ? void 0 : i.type) && r.lastAction.powerup === et.Undo && zi.undoAtGameOver(t, r), "activatePowerup" === (null == (a = r.lastAction) ? void 0 : a.type) && (r.lastAction.powerup === et.Undo ? zi.powerupUsed(t, r, et.Undo) : zi.powerupActivated(t, r, r.lastAction.powerup)), "completePowerup" === (null == (l = r.lastAction) ? void 0 : l.type) && zi.powerupUsed(t, r, r.lastAction.currentPowerup);
    else {
      if (r.state !== g.Fresh) return;
      if (e !== t) return;
      switch (n.state) {
        case g.GameOver:
          return void zi.restartAtGameOver(t, r);
        case g.GameWon:
          return void zi.restartAtGameWon(t, r);
        default:
          zi.restart(t, r, n.state)
      }
    }
  }(Zg, t, Jg, e), Jg = e, Zg = t
});
const ev = M("polyfill/createImageBitmap");
! function(e) {
  function t(e, t, n, r) {
    return "number" == typeof t ? t : "number" != typeof n || "number" != typeof r ? e : n / r * e
  }
  "createImageBitmap" in e ? ev("already supported") : (ev("shimming..."), e.createImageBitmap = async function(e, n) {
    return ev("createImageBitmap called"), new Promise((r, o) => {
      let i;
      n = n || {};
      const a = document.createElement("canvas");
      try {
        const s = a.getContext("2d");
        if (!s) return o("Failed to get canvas 2d context");
        if (e instanceof Blob) {
          ev("data is a Blob"), i = URL.createObjectURL(e);
          const t = new Image;
          t.onerror = o, t.onload = () => r(t), t.src = i
        } else if ((l = e) && l.tagName && ["img", "video", "canvas"].includes(l.tagName.toLowerCase())) {
          ev("data is a CanvasImageSource");
          const o = e.naturalWidth || e.videoWidth || e.clientWidth || e.width,
            i = e.naturalHeight || e.videoHeight || e.clientHeight || e.height;
          a.width = t(o, n.resizeWidth, n.resizeHeight, i), a.height = t(i, n.resizeHeight, n.resizeWidth, o), s.drawImage(e, 0, 0, a.width, a.height), r(a)
        } else e instanceof ImageData ? (ev("data is an ImageData"), a.width = t(e.width, n.resizeWidth, n.resizeHeight, e.height), a.height = t(e.height, n.resizeHeight, n.resizeWidth, e.width), s.putImageData(e, 0, 0), r(a)) : o("createImageBitmap does not handle the provided image source type")
      } finally {}
      var l
    })
  })
}(globalThis || window);
const tv = M("monitorAndRestoreFocus"),
  nv = "function" == typeof requestIdleCallback ? e => requestIdleCallback(e) : e => setTimeout(e, 100),
  rv = e => {
    nv(() => {
      try {
        e()
      } catch (lv) {
        tv("Error in loop", lv), K(lv)
      }
      rv(e)
    })
  },
  ov = "undefined" != typeof performance && performance.now ? performance.now.bind(performance) : Date.now.bind(Date),
  iv = function() {
    if ("function" == typeof WeakSet) return new WeakSet;
    let e, t = [];

    function n() {
      t = t.filter(e => document.body.contains(e))
    }

    function r() {
      clearTimeout(e), e = setTimeout(n, 1e3)
    }
    return {
      add(e) {
        r(), this.has(e) || t.push(e)
      },
      has: e => (r(), -1 !== t.indexOf(e))
    }
  }();
dt(),
  function() {
    let e = null,
      t = null;
    document.addEventListener("keydown", function(e) {
      "Tab" !== e.key && 9 !== e.keyCode || (t = ov())
    }, !0), tv("Monitoring and restoring focus"), rv(() => {
      const n = t && ov() - t < 3e3;
      n || (t = null);
      const r = document.activeElement;
      if ("iframe" === (null == r ? void 0 : r.tagName.toLowerCase())) {
        if (tv("Active element is currently iframe, details:", r, r.getAttribute("src"), r.getAttribute("title"), r.getAttribute("name")), n) return;
        if (e) tv("Restoring focus to last valid focused element", e), e.focus();
        else {
          tv("No valid focused element to restore, focusing body");
          const e = document.body.tabIndex;
          document.body.tabIndex = 1, document.body.focus(), document.body.tabIndex = e
        }
      } else e = r && function(e) {
        if (!(e instanceof HTMLElement)) return !1;
        if (iv.has(e)) return !0;
        const t = e.nodeName.toLowerCase();
        let n = !1;
        parseInt(e.getAttribute("tabindex") || "", 10) > -1 && (n = !0);
        const r = () => !("disabled" in e && e.disabled || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length));
        switch (t) {
          case "area":
            n = !0;
            break;
          case "input":
          case "select":
          case "textarea":
          case "button":
          case "object":
            n = r();
            break;
          case "a":
            n = e.hasAttribute("href") && r()
        }
        return n && iv.add(e), n
      }(r) ? r : null
    })
  }(), ft({
    category: "app",
    message: "main.ts entry point"
  }), (async e => {
    ((e, t) => {
      sd[e] = {
        ...sd[e],
        ...t
      }
    })(e, await (async e => (await Xg[e]()).default)(e)), (e => {
      cd[e] = {}
    })(e)
  })("en").then(() => dd("en"));
const av = document.getElementById("app");
v(av, "No target element found"), new class extends Zn {
  constructor(e) {
    super(), Jn(this, e, Qg, Yg, h, {})
  }
}({
  target: av
});
export {
  $n as A, Kn as B, Vn as C, Sn as D, dn as E, pn as F, gn as G, Xt as H, Yt as I, Gt as J, Cn as K, un as L, sa as M, Fc as N, ur as O, Ss as P, As as Q, Is as R, Zn as S, Ls as T, Ct as a, Dt as b, zn as c, At as d, Mt as e, qn as f, Et as g, Ft as h, Jn as i, Hn as j, Xn as k, Yn as l, Qn as m, Ht as n, bt as o, Wn as p, Bt as q, In as r, Tt as s, Pt as t, Ln as u, Vt as v, mn as w, hn as x, fn as y, kn as z
};
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
/*!
 * focus-trap 7.6.5
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */