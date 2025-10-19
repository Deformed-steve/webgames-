! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3831e1de-0b15-5ff1-869a-e04737e601e1")
  } catch (e) {}
}();
try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e866dca1-f9f1-4a54-a7eb-5b9788ef444f", e._sentryDebugIdIdentifier = "sentry-dbid-e866dca1-f9f1-4a54-a7eb-5b9788ef444f")
} catch (e) {} {
  let e = "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    "_sentryBundlerPluginAppKey:crazygames-gameframe": !0
  })
}(self.webpackChunk_crazygames_gameframe = self.webpackChunk_crazygames_gameframe || []).push([
  [8e3], {
    8e3: (e, t, i) => {
      i.r(t), i.d(t, {
        default: () => Z
      });
      var n = i(5043),
        o = i(3538),
        s = i(8073),
        l = i(3699),
        a = i(9379),
        r = i(4535),
        d = i(1517),
        c = i(8122),
        h = i(579);
      const g = n.memo(e => (0, h.jsx)(c.A, (0, a.A)((0, a.A)({}, e), {}, {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        children: (0, h.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10.0001 6C8.52833 6 7.47159 6.70623 7.13224 7.4263C6.89681 7.92589 6.30095 8.14002 5.80136 7.90458C5.30178 7.66914 5.08764 7.07329 5.32308 6.5737C6.08197 4.96338 7.98852 4 10.0001 4C11.3001 4 12.5155 4.39395 13.4285 5.07868C14.3418 5.76364 15.0001 6.78625 15.0001 8C15.0001 10.0693 13.166 11.5082 11.1827 11.8887C11.11 11.9026 11.0522 11.9386 11.0206 11.972C11.0064 11.9871 11.0014 11.9974 11.0002 12.0001C11.0002 12.0003 11.0001 12.0004 11.0001 12.0005C10.9998 12.5526 10.5522 13 10.0001 13C9.44777 13 9.00005 12.5523 9.00005 12C9.00005 10.8579 9.90969 10.0964 10.8059 9.92451C12.2788 9.64194 13.0001 8.72954 13.0001 8C13.0001 7.5569 12.7629 7.0795 12.2285 6.67868C11.6937 6.27763 10.9092 6 10.0001 6ZM9 15C9 14.4477 9.44771 14 10 14H10.01C10.5623 14 11.01 14.4477 11.01 15C11.01 15.5523 10.5623 16 10.01 16H10C9.44771 16 9 15.5523 9 15Z"
        })
      })));
      var u = i(6608);
      const p = (0, r.Ay)("div")(e => {
          let {
            theme: {
              breakpoints: t
            }
          } = e;
          return {
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginBottom: 20,
            [t.down(u.fc.xSmallDesktopWidth)]: {
              display: "none"
            }
          }
        }),
        x = {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontFamily: "Nunito",
          zIndex: 3,
          width: "100%",
          position: "absolute",
          fontSize: 12,
          padding: 7
        },
        f = (0, r.Ay)("div")(e => {
          let {
            theme: {
              breakpoints: t
            }
          } = e;
          return (0, a.A)((0, a.A)({}, x), {}, {
            color: d.l.white[80],
            fontSize: 14,
            padding: "8px 12px",
            [t.down(360)]: {
              fontSize: 12
            }
          })
        }),
        j = (0, r.Ay)("div")(e => {
          let {
            theme: {
              breakpoints: t,
              spacing: i
            }
          } = e;
          return (0, a.A)((0, a.A)({}, x), {}, {
            background: "rgba(104, 66, 255, 0.70)",
            borderRadius: 12,
            color: d.l.white[100],
            cursor: "pointer",
            top: i(1.5),
            left: i(1.5),
            width: "calc(100% - ".concat(i(3), ")"),
            [t.down(360)]: {
              padding: 6,
              "& span": {
                padding: "2px 6px"
              }
            },
            "&:hover": {
              background: "rgba(104, 66, 255, 0.85)"
            }
          })
        }),
        m = (0, r.Ay)("div")(e => {
          let {
            theme: {
              spacing: t,
              breakpoints: i
            }
          } = e;
          return (0, a.A)((0, a.A)({}, x), {}, {
            fontSize: 14,
            fontWeight: 400,
            background: "rgba(104, 66, 255, 0.70)",
            borderRadius: 12,
            color: d.l.white[100],
            width: "calc(100vw - ".concat(t(3), ")"),
            padding: t(1.5),
            transition: "opacity 0.3s ease-out",
            left: t(1.5),
            top: 10,
            "& button": {
              fontSize: 14
            },
            "& svg": {
              fill: "#fff",
              width: 20,
              height: 20
            },
            "> div": {
              display: "flex",
              flexDirection: "row",
              gap: t(1),
              textAlign: "center",
              alignItems: "center",
              "> div": {
                display: "flex",
                marginTop: 0
              },
              [i.down(600)]: {
                flexDirection: "column",
                gap: 0,
                "> div": {
                  marginTop: 8
                }
              }
            },
            [i.down(360)]: {
              fontSize: 12,
              "& button": {
                fontSize: 13
              },
              "& svg": {
                width: 17,
                height: 17
              }
            }
          })
        }),
        y = (0, r.Ay)("div", {
          shouldForwardProp: e => "isBottomPadded" !== e
        })(e => {
          let {
            isBottomPadded: t,
            theme: {
              spacing: i
            }
          } = e;
          return (0, a.A)((0, a.A)((0, a.A)({}, x), {}, {
            cursor: "pointer",
            borderRadius: 12,
            background: "rgba(89, 32, 42, 0.70)",
            color: d.l.alert[40],
            top: i(1.5),
            left: i(1.5),
            width: "calc(100% - ".concat(i(3), ")")
          }, t && {
            marginBottom: 50
          }), {}, {
            "&:hover": {
              background: "rgba(51, 14, 27, 0.70)"
            }
          })
        }),
        b = (0, r.Ay)(g)({
          width: 16,
          marginLeft: 6,
          color: d.l.white[100],
          "&:hover": {
            cursor: "pointer",
            color: d.l.white[60]
          },
          "&:active": {
            color: d.l.white[20]
          }
        });
      var w = i(8908),
        C = i(4542),
        A = i(9070),
        v = i(9353);
      const k = e => {
          let {
            title: t,
            body: i,
            action: n
          } = e;
          return (0, h.jsx)(A.Modal, {
            children: (0, h.jsxs)(A.ModalContent, {
              sx: {
                backgroundColor: d.l.black[70],
                width: "min(600px, 70vw)",
                pb: 2.5
              },
              children: [(0, h.jsx)(A.ModalCloseIconContainer, {
                onClick: () => n(!1),
                children: (0, h.jsx)(C.A, {
                  sx: {
                    height: 20,
                    width: 20,
                    mt: "5px"
                  }
                })
              }), (0, h.jsx)("h2", {
                style: {
                  marginBlock: 0,
                  fontSize: 24,
                  fontWeight: 800,
                  marginBottom: 16,
                  marginTop: 20,
                  paddingLeft: 10,
                  lineHeight: "130%"
                },
                children: t
              }), (0, h.jsx)("p", {
                style: {
                  marginBlock: 0,
                  fontSize: 14,
                  fontWeight: 400,
                  color: d.l.white[60]
                },
                children: i
              }), (0, h.jsx)("div", {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 15
                },
                children: (0, h.jsx)(v.O, {
                  variant: "contained",
                  color: "purple",
                  height: 40,
                  style: {
                    minWidth: 150,
                    fontSize: 14
                  },
                  onClick: () => n(!1),
                  children: (0, h.jsx)(l.A, {
                    id: "aps.tooltip.button"
                  })
                })
              })]
            })
          })
        },
        S = () => {
          const {
            userId: e
          } = (0, n.useContext)(o.r), {
            gameLoadStatus: t
          } = (0, n.useContext)(w.P), [i, s] = n.useState(!1);
          return e && "NOT_STARTED" === t ? i ? (0, h.jsx)(k, {
            title: (0, h.jsx)(l.A, {
              id: "aps.tooltip.crazyAccount.title"
            }),
            body: (0, h.jsx)(l.A, {
              id: "aps.tooltip.crazyAccount.body"
            }),
            action: s
          }) : (0, h.jsx)(p, {
            children: (0, h.jsxs)(f, {
              sx: {
                "& svg": {
                  color: d.l.success[100]
                }
              },
              children: [(0, h.jsx)("div", {
                children: (0, h.jsx)(l.A, {
                  id: "aps.info.base",
                  values: {
                    highlight: (0, h.jsx)("span", {
                      style: {
                        color: d.l.success[100]
                      },
                      children: (0, h.jsx)(l.A, {
                        id: "aps.info.base.enabled"
                      })
                    })
                  }
                })
              }), (0, h.jsx)(b, {
                onClick: () => s(!0)
              })]
            })
          }) : null
        };
      var T = i(6446),
        _ = i(1399),
        I = i(5722),
        z = i(1662),
        O = i(9671),
        P = i(7491),
        D = i(7068);
      const E = "apsnotice_hidden_day";

      function M(e) {
        D.A.getInstance().sendEvent({
          type: "notificationAction",
          notificationSource: "dont-lose-progress",
          action: e
        })
      }
      const B = () => {
          const [e, t] = n.useState(!1), {
            gameLoadStatus: i
          } = (0, n.useContext)(w.P), {
            gfInit: o
          } = (0, n.useContext)(P.Rk), s = (0, z.BV)(), a = n.useRef(null), [r, c] = n.useState(!1), [g, u] = n.useState(!1), p = O.U.Instance.getItem(E), x = p ? Date.now() - Number(p) : null, f = !r && !(!!x && x < 864e5), b = f && "GAME_LOADED" === i, k = f && "NOT_STARTED" === i, S = () => {
            c(!0);
            const e = Date.now();
            O.U.Instance.setItem(E, "".concat(e))
          };
          n.useEffect(() => {
            e && M("shown")
          }, [e]), n.useEffect(() => {
            let e, t;
            if (!s) return;
            const i = new IntersectionObserver(i => {
              let [n] = i;
              n.isIntersecting && !g && (e || (e = window.setTimeout(() => {
                u(!0), t || (t = window.setTimeout(() => {
                  u(!1), c(!0)
                }, 7e3))
              }, 2e3)))
            });
            return a && a.current && i.observe(a.current),
              function() {
                i.disconnect(), e && window.clearTimeout(e), t && window.clearTimeout(t)
              }
          }, [s, a, i]), n.useEffect(() => {
            o && "success" === o.state && o.data.wasUserLoggedIn && t(!0)
          }, [o]);
          const D = () => {
            (0, I.u)(!0)
          };
          return "GAME_LOADED" !== i || s ? e && "NOT_STARTED" === i && !s ? (0, h.jsx)(A.Modal, {
            hideBackdrop: !0,
            children: (0, h.jsxs)(A.ModalContent, {
              sx: {
                backgroundColor: d.l.black[70],
                width: 250,
                pb: 2.5
              },
              children: [(0, h.jsx)(T.A, {
                sx: {
                  position: "absolute",
                  width: "30px",
                  height: "30px",
                  right: "8px",
                  top: "8px",
                  backgroundColor: d.l.black[90],
                  borderRadius: "28px",
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: d.l.black[80]
                  },
                  "&:active": {
                    backgroundColor: d.l.black[70]
                  }
                },
                onClick: () => {
                  M("closed"), t(!1)
                },
                children: (0, h.jsx)(C.A, {
                  sx: {
                    height: 20,
                    width: 20,
                    mt: "5px"
                  }
                })
              }), (0, h.jsx)("div", {
                style: {
                  marginTop: 12,
                  marginBottom: 10,
                  height: 121,
                  width: "100%"
                },
                children: (0, h.jsx)("img", {
                  src: (0, _.Ay)("gameframe/astronaut.svg"),
                  alt: "Don't lose your progress!"
                })
              }), (0, h.jsx)("h2", {
                style: {
                  marginBlock: 0,
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 4,
                  marginTop: 10
                },
                children: (0, h.jsx)(l.A, {
                  id: "aps.userWasLogged.title"
                })
              }), (0, h.jsx)("p", {
                style: {
                  marginBlock: 0,
                  fontSize: 14,
                  fontWeight: 400,
                  color: d.l.white[60]
                },
                children: (0, h.jsx)(l.A, {
                  id: "aps.userWasLogged.text"
                })
              }), (0, h.jsxs)("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 15
                },
                children: [(0, h.jsx)(v.O, {
                  variant: "outlined",
                  color: "white",
                  height: 34,
                  style: {
                    minWidth: 100,
                    fontSize: 14
                  },
                  onClick: () => {
                    t(!1), M("ignored")
                  },
                  children: (0, h.jsx)(l.A, {
                    id: "aps.userWasLogged.ignore"
                  })
                }), (0, h.jsx)(v.O, {
                  variant: "contained",
                  height: 34,
                  style: {
                    minWidth: 100,
                    fontSize: 14
                  },
                  onClick: () => {
                    D(), M("login")
                  },
                  children: (0, h.jsx)(l.A, {
                    id: "aps.userWasLogged.login"
                  })
                })]
              })]
            })
          }) : k ? (0, h.jsx)(j, {
            onClick: D,
            children: (0, h.jsxs)(T.A, {
              sx: {
                display: "flex",
                gap: 1,
                alignItems: "center",
                justifyContent: "center"
              },
              children: [(0, h.jsx)(l.A, {
                id: "aps.info.loginPrompt"
              }), (0, h.jsx)(v.O, {
                variant: "outlined",
                color: "white",
                height: 32,
                onClick: S,
                sx: {
                  ml: 1
                },
                children: (0, h.jsx)(l.A, {
                  id: "aps.info.loginPrompt.close"
                })
              }), (0, h.jsx)(v.O, {
                variant: "contained",
                color: "white",
                height: 32,
                onClick: D,
                children: (0, h.jsx)(l.A, {
                  id: "aps.info.loginPrompt.cta"
                })
              })]
            })
          }) : "POST_PREROLL" === i ? (0, h.jsx)(y, {
            isBottomPadded: s,
            onClick: D,
            children: (0, h.jsxs)(T.A, {
              sx: {
                display: "flex",
                gap: 1,
                alignItems: "center",
                justifyContent: "center"
              },
              children: [(0, h.jsx)(l.A, {
                id: "aps.splash.loginPrompt"
              }), (0, h.jsx)(v.O, {
                variant: "outlined",
                color: "white",
                height: 32,
                onClick: S,
                sx: {
                  ml: 1
                },
                children: (0, h.jsx)(l.A, {
                  id: "aps.info.loginPrompt.close"
                })
              }), (0, h.jsx)(v.O, {
                variant: "contained",
                color: "white",
                height: 32,
                onClick: D,
                children: (0, h.jsx)(l.A, {
                  id: "aps.info.loginPrompt.cta"
                })
              })]
            })
          }) : b ? (0, h.jsx)(m, {
            style: {
              opacity: g ? 1 : 0,
              pointerEvents: g ? void 0 : "none"
            },
            ref: a,
            children: (0, h.jsxs)("div", {
              children: [(0, h.jsx)(l.A, {
                id: "aps.info.loginPrompt"
              }), (0, h.jsxs)("div", {
                children: [(0, h.jsx)(v.O, {
                  variant: "outlined",
                  color: "white",
                  height: 32,
                  onClick: S,
                  children: (0, h.jsx)(l.A, {
                    id: "aps.info.loginPrompt.close"
                  })
                }), (0, h.jsx)(v.O, {
                  variant: "contained",
                  color: "white",
                  height: 32,
                  onClick: D,
                  sx: {
                    ml: 1
                  },
                  children: (0, h.jsx)(l.A, {
                    id: "aps.info.loginPrompt.cta"
                  })
                })]
              })]
            })
          }) : null : null
        },
        L = () => {
          const {
            gameLoadStatus: e
          } = (0, n.useContext)(w.P), t = (0, z.BV)(), [i, o] = n.useState(!1);
          return "NOT_STARTED" !== e || t ? null : i ? (0, h.jsx)(k, {
            title: (0, h.jsx)(l.A, {
              id: "aps.tooltip.account.title"
            }),
            body: (0, h.jsx)(l.A, {
              id: "aps.tooltip.account.body"
            }),
            action: o
          }) : (0, h.jsx)(p, {
            children: (0, h.jsxs)(f, {
              children: [(0, h.jsx)("div", {
                children: (0, h.jsx)(l.A, {
                  id: "aps.info.ingame",
                  values: {
                    highlight: (0, h.jsx)("span", {
                      style: {
                        color: d.l.warning[100]
                      },
                      children: (0, h.jsx)(l.A, {
                        id: "aps.info.ingame.highlight"
                      })
                    })
                  }
                })
              }), (0, h.jsx)(b, {
                onClick: () => o(!0)
              })]
            })
          })
        },
        R = () => {
          const {
            gameLoadStatus: e
          } = (0, n.useContext)(w.P), [t, i] = n.useState(!1);
          return "NOT_STARTED" !== e ? null : t ? (0, h.jsx)(k, {
            title: (0, h.jsx)(l.A, {
              id: "aps.tooltip.locally.title"
            }),
            body: (0, h.jsx)(l.A, {
              id: "aps.tooltip.locally.body"
            }),
            action: i
          }) : (0, h.jsx)(p, {
            children: (0, h.jsxs)(f, {
              children: [(0, h.jsx)("div", {
                children: (0, h.jsx)(l.A, {
                  id: "aps.info.base",
                  values: {
                    highlight: (0, h.jsx)("span", {
                      style: {
                        color: d.l.warning[100]
                      },
                      children: (0, h.jsx)(l.A, {
                        id: "aps.info.base.local"
                      })
                    })
                  }
                })
              }), (0, h.jsx)(b, {
                onClick: () => i(!0)
              })]
            })
          })
        };
      var W = i(5492),
        N = i(9944);
      const Z = () => {
        const {
          userId: e,
          hasUserLoaded: t
        } = (0, n.useContext)(o.r), i = N.A.isCometFlowEnabled(), l = (0, W.l2)(), a = (0, W.Cm)();
        return i ? null : "ingame" === l ? (0, h.jsx)(L, {}) : "local" === l ? (0, h.jsx)(R, {}) : "cloud" === l && t && ("aps" !== a || (() => {
          const e = (0, s.lZ)().loader;
          return !!(0, W.gv)() && (s.V7.includes(e) ? (0, W.m0)() : "ruffle" === e ? (0, W.qX)() : !!s.el.includes(e) && (0, W.jl)())
        })()) ? e ? (0, h.jsx)(S, {}) : (0, h.jsx)(B, {}) : null
      }
    }
  }
]);
//# debugId=3831e1de-0b15-5ff1-869a-e04737e601e1