! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4ce4a18a-b12d-478e-8a84-d1ccda73e715", e._sentryDebugIdIdentifier = "sentry-dbid-4ce4a18a-b12d-478e-8a84-d1ccda73e715")
  } catch (s) {}
}();
var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
  "_sentryBundlerPluginAppKey:@rbitrary-golden-pumpkin": !0
});
import {
  s as t,
  c as s,
  a,
  u as n,
  g as d,
  b as l
} from "./MessageBroker-DiXDVGNH.js";
import {
  S as o,
  i as r,
  d as i,
  c as u,
  f as c,
  a as f,
  g as p,
  h as y,
  j as b,
  e as g
} from "./index-DGJmVDIm.js";

function m(e) {
  let t, o;
  const r = e[4].default,
    p = s(r, e, e[3], null);
  let m = [{
      class: e[0]
    }],
    $ = {};
  for (let s = 0; s < m.length; s += 1) $ = a($, m[s]);
  return {
    c() {
      t = g(e[1]), p && p.c(), y(e[1])(t, $)
    },
    m(e, s) {
      f(e, t, s), p && p.m(t, null), o = !0
    },
    p(e, s) {
      p && p.p && (!o || 8 & s) && n(p, r, e, e[3], o ? l(r, e[3], s, null) : d(e[3]), null), y(e[1])(t, $ = b(m, [(!o || 1 & s) && {
        class: e[0]
      }]))
    },
    i(e) {
      o || (c(p, e), o = !0)
    },
    o(e) {
      u(p, e), o = !1
    },
    d(e) {
      e && i(t), p && p.d(e)
    }
  }
}

function $(e) {
  let s, a, n = e[1],
    d = e[1] && m(e);
  return {
    c() {
      d && d.c(), s = p()
    },
    m(e, t) {
      d && d.m(e, t), f(e, s, t), a = !0
    },
    p(e, [a]) {
      e[1] ? n ? t(n, e[1]) ? (d.d(1), d = m(e), n = e[1], d.c(), d.m(s.parentNode, s)) : d.p(e, a) : (d = m(e), n = e[1], d.c(), d.m(s.parentNode, s)) : n && (d.d(1), d = null, n = e[1])
    },
    i(e) {
      a || (c(d, e), a = !0)
    },
    o(e) {
      u(d, e), a = !1
    },
    d(e) {
      e && i(s), d && d.d(e)
    }
  }
}

function w(e, t, s) {
  let a, n, {
      $$slots: d = {},
      $$scope: l
    } = t,
    {
      level: o = 2
    } = t;
  return e.$$set = e => {
    "level" in e && s(2, o = e.level), "$$scope" in e && s(3, l = e.$$scope)
  }, e.$$.update = () => {
    if (4 & e.$$.dirty) switch (o) {
      case 2:
        s(1, n = "h2"), s(0, a = "mt-5 text-3xl font-medium");
        break;
      case 3:
        s(1, n = "h3"), s(0, a = "mt-5 text-2xl font-medium")
    }
  }, [a, n, o, l, d]
}
class h extends o {
  constructor(e) {
    super(), r(this, e, w, $, t, {
      level: 2
    })
  }
}
export {
  h as D
};