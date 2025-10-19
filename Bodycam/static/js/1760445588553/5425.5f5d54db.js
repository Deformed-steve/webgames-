! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "decbc974-72c0-51bc-a57f-08c84e99b168")
  } catch (e) {}
}();
try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "511d254c-adf2-4bae-b4d9-4a91466b2c17", e._sentryDebugIdIdentifier = "sentry-dbid-511d254c-adf2-4bae-b4d9-4a91466b2c17")
} catch (e) {} {
  let e = "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    "_sentryBundlerPluginAppKey:crazygames-gameframe": !0
  })
}(self.webpackChunk_crazygames_gameframe = self.webpackChunk_crazygames_gameframe || []).push([
  [5425], {
    5425: (e, n, t) => {
      t.r(n), t.d(n, {
        default: () => f
      });
      var o = t(6446),
        a = t(4542),
        i = t(9353),
        s = t(9070),
        r = t(7068),
        l = t(1399),
        d = t(9671),
        c = t(4447),
        u = t(5043),
        m = t(1517),
        h = t(446),
        g = t.n(h),
        p = t(579);

      function b(e) {
        r.A.getInstance().sendEvent({
          type: "notificationAction",
          notificationSource: "chrome-pointer-warning",
          action: e
        })
      }
      const f = () => {
        var e;
        const [n, r] = u.useState(!1), h = null === (e = (0, c.ug)().device) || void 0 === e ? void 0 : e.browser, f = u.useCallback(() => {
          b("closed"), r(!1)
        }, []), y = u.useCallback(() => {
          r(!1), b("ignored")
        }, []), x = u.useCallback(() => {
          r(!1), b("continue")
        }, []);
        u.useEffect(() => {
          const e = g()(async () => {
            try {
              await async function() {
                var e;
                const n = null === (e = (0, c.ug)().device) || void 0 === e ? void 0 : e.browser,
                  t = "Chrome" === (null === n || void 0 === n ? void 0 : n.name),
                  o = "Opera" === (null === n || void 0 === n ? void 0 : n.name),
                  a = t && n.major && parseInt(n.major) >= 131,
                  i = o && n.major && parseInt(n.major) >= 118;
                if ((a || i) && "denied" === (await navigator.permissions.query({
                    name: "pointer-lock"
                  })).state) {
                  var s, l, u;
                  const e = "".concat(null === n || void 0 === n || null === (s = n.name) || void 0 === s ? void 0 : s.toLowerCase()).concat("PointerKey_count"),
                    t = "".concat(null === n || void 0 === n || null === (l = n.name) || void 0 === l ? void 0 : l.toLowerCase()).concat("PointerKey_lastTime"),
                    o = null !== (u = d.U.Instance.getItem(e)) && void 0 !== u ? u : "1",
                    a = d.U.Instance.getItem(t),
                    i = Date.now() - 3e5,
                    c = a ? new Date(a).getTime() : 0;
                  Number.parseInt(o) <= 5 && c < i && (d.U.Instance.setItem(e, "".concat(Number.parseInt(o) + 1)), d.U.Instance.setItem(t, "".concat(new Date)), b("shown"), r(!0))
                }
              }()
            } catch (e) {
              console.error(e)
            }
          }, 300);
          return e(), () => e.cancel()
        }, []);
        const w = "Chrome" === (null === h || void 0 === h ? void 0 : h.name) ? "chrome_pointer_permissions_v2.png" : "opera_pointer_permissions.png",
          v = u.lazy(() => Promise.resolve().then(t.bind(t, 9070)));
        return n ? (0, p.jsx)(u.Suspense, {
          children: (0, p.jsx)(v, {
            hideBackdrop: !0,
            children: (0, p.jsxs)(s.ModalContent, {
              sx: {
                backgroundColor: m.l.black[70],
                width: 350,
                pb: 2.5
              },
              children: [(0, p.jsx)(o.A, {
                sx: {
                  position: "absolute",
                  width: "30px",
                  height: "30px",
                  right: "8px",
                  top: "8px",
                  backgroundColor: m.l.black[90],
                  borderRadius: "28px",
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: m.l.black[80]
                  },
                  "&:active": {
                    backgroundColor: m.l.black[70]
                  }
                },
                onClick: f,
                children: (0, p.jsx)(a.A, {
                  sx: {
                    height: 20,
                    width: 20,
                    mt: "5px"
                  }
                })
              }), (0, p.jsxs)(o.A, {
                sx: {
                  mt: 1.5,
                  mb: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 1
                },
                children: [(0, p.jsx)(o.A, {
                  sx: {
                    height: 300,
                    width: "100%"
                  },
                  children: (0, p.jsx)("img", {
                    src: (0, l.Ay)(w, {
                      quality: 100
                    }),
                    alt: "Mouse permissions disabled",
                    style: {
                      maxWidth: "100%",
                      maxHeight: "100%"
                    }
                  })
                }), (0, p.jsx)("h2", {
                  style: {
                    margin: "10px 0 4px 0",
                    fontSize: 16,
                    fontWeight: 700
                  },
                  children: "Mouse permissions disabled"
                }), (0, p.jsx)("p", {
                  style: {
                    margin: 0,
                    fontSize: 14,
                    fontWeight: 400,
                    color: m.l.white[60]
                  },
                  children: "To ensure all games run smoothly, CrazyGames needs browser permission to lock your mouse."
                })]
              }), (0, p.jsxs)(o.A, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2
                },
                children: [(0, p.jsx)(i.O, {
                  variant: "outlined",
                  color: "white",
                  height: 34,
                  style: {
                    minWidth: 100,
                    fontSize: 14
                  },
                  onClick: y,
                  children: "Ignore"
                }), (0, p.jsx)(i.O, {
                  variant: "contained",
                  height: 34,
                  style: {
                    minWidth: 100,
                    fontSize: 14
                  },
                  onClick: x,
                  children: "Done"
                })]
              })]
            })
          })
        }) : null
      }
    }
  }
]);
//# debugId=decbc974-72c0-51bc-a57f-08c84e99b168