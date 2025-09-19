! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9c7e97ae-f29c-49f5-970b-56f2240ca878", e._sentryDebugIdIdentifier = "sentry-dbid-9c7e97ae-f29c-49f5-970b-56f2240ca878")
  } catch (s) {}
}();
var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
  "_sentryBundlerPluginAppKey:@rbitrary-golden-pumpkin": !0
});
import {
  M as n,
  l as s,
  m as t,
  R as d,
  d as r,
  e as i
} from "./MessageBroker-DiXDVGNH.js";
import "./pixi.js-DlquM4wl.js";
s("rubikSemiBold");
const a = t("worker");
a("initializing worker");
const o = new class extends n {
  constructor(e) {
    super(e => self.onmessage = e, (e, n) => self.postMessage(e, n), e)
  }
}({
  init: e => (r(e => {
    o.emit("debugNamespaceRegistered", [e])
  }), a("initializing renderer"), l.destroyed && (l = new d(o)), l.init(e)),
  update: e => l.update(e),
  destroy: () => {
    a("destroying existing renderer"), l.destroy(), a("renderer destroyed")
  }
});
o.addListener("debugNamespaceChange", i), o.emit("listening", [], [], !0);
let l = new d(o);