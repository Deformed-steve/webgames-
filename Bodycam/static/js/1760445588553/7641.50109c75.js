! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b7cb39b4-dbeb-5e06-a108-4f4d3c23c456")
  } catch (e) {}
}();
try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "79584d2d-33a6-46e3-921e-173b19e6925c", e._sentryDebugIdIdentifier = "sentry-dbid-79584d2d-33a6-46e3-921e-173b19e6925c")
} catch (e) {} {
  let e = "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    "_sentryBundlerPluginAppKey:crazygames-gameframe": !0
  })
}(self.webpackChunk_crazygames_gameframe = self.webpackChunk_crazygames_gameframe || []).push([
  [7641], {
    2233: (e, t, n) => {
      n.d(t, {
        A: () => a
      });
      var r = n(9665);
      class s extends r.Ay {
        trackProgress(e) {
          const t = super.trackProgress(e);
          return Math.min(t + .1, 1)
        }
      }
      const a = s
    },
    3517: (e, t, n) => {
      n.d(t, {
        A: () => h
      });
      var r = n(9379),
        s = n(8122),
        a = n(5043),
        o = n(579);
      const i = e => (0, o.jsxs)(s.A, (0, r.A)((0, r.A)({}, e), {}, {
        viewBox: "0 0 194 218",
        fill: "none",
        children: [(0, o.jsxs)("g", {
          clipPath: "url(#clip0_11_913)",
          children: [(0, o.jsx)("path", {
            d: "M187.633 58.3368C187.983 39.5888 186.254 15.3036 176.167 3.815C173.957 1.308 171.003 0 167.545 0C161.659 0 154.285 4.0548 145.073 12.3606C131.726 6.649 115.927 3.8586 96.9562 3.8586C77.9851 3.8586 62.2087 6.649 48.8829 12.3388C39.7146 4.0548 32.3406 0 26.4545 0C23.0192 0 20.0433 1.308 17.8771 3.7932C7.81164 15.2818 6.06113 39.5016 6.41123 58.2278C2.16625 70.2832 0 84.3224 0 99.953C0 134.375 10.0873 160.099 29.9993 176.406C39.3864 184.057 50.6115 189.42 64.0029 192.581L61.2896 193.911H61.224L61.1584 193.976C60.1737 194.5 59.189 194.979 58.2044 195.481C58.0074 195.59 57.8105 195.677 57.5917 195.786C54.5283 197.312 51.3774 198.881 47.9639 200.952L47.0011 201.454L46.6291 201.65L46.279 201.89C44.6379 203.067 43.5439 204.833 43.2375 206.773C42.9312 208.67 43.3907 210.675 44.5285 212.223C45.6882 213.814 47.4825 214.904 49.43 215.166C50.6115 215.34 51.8588 215.558 53.0841 215.755C53.2592 215.776 53.4124 215.82 53.5874 215.842C56.3882 216.3 59.2547 216.757 62.2305 216.997L65.3158 217.346C66.4974 217.477 67.6352 217.586 68.7949 217.629L75.1405 217.978H75.3812C76.4097 218 77.4381 218 78.4446 218C86.6064 218 94.5055 217.411 101.901 216.256C110.632 214.948 119.407 212.506 127.984 208.997C136.561 205.465 144.526 200.931 151.725 195.524C166.276 184.254 177.545 169.386 184.372 152.447C186.735 146.649 188.617 140.392 189.974 133.874C192.621 123.737 193.934 112.314 193.934 99.9748C193.934 84.3878 191.79 70.3922 187.567 58.3586L187.633 58.3368ZM184.307 132.566C183.081 138.604 181.309 144.556 178.989 150.311C172.622 166.138 161.878 180.351 148.224 190.924C141.332 196.113 133.739 200.386 125.774 203.656C117.787 206.926 109.472 209.28 101.004 210.566C93.5209 211.743 85.9718 212.245 78.4665 212.245C77.4818 212.245 76.4972 212.245 75.5125 212.223L69.1669 211.874C68.0947 211.809 67.0444 211.722 65.9941 211.613L62.8213 211.264C59.9111 211.024 57.0447 210.544 54.1782 210.087C52.8872 209.869 51.5743 209.651 50.2833 209.476C49.4518 209.345 48.8829 208.561 49.0361 207.732C49.1017 207.296 49.3862 206.904 49.7144 206.664L50.8522 206.075C54.1344 204.07 57.2416 202.522 60.2831 201.018C61.4866 200.407 62.6901 199.819 63.8716 199.208L68.1385 197.137L75.6438 193.475C77.3068 192.625 78.926 191.84 80.5233 191.055C81.4205 190.619 82.2957 190.205 83.1491 189.769C62.4275 188.025 46.1696 182.161 33.7192 171.98C15.2294 156.851 5.84232 132.675 5.84232 100.04C5.84232 84.4968 8.00857 70.9154 12.2754 59.2742C11.9253 44.3848 12.8225 18.53 22.2752 7.7172C23.3912 6.4528 24.8134 5.9078 26.4545 5.9078C32.5157 5.9078 41.487 13.3198 47.767 19.3584C60.9833 12.9492 77.2411 9.7882 96.9781 9.7882C116.715 9.7882 132.995 12.9492 146.211 19.3802C152.491 13.3416 161.462 5.9296 167.545 5.9296V5.8642C169.208 5.8642 170.631 6.4092 171.747 7.6736C181.221 18.4864 182.097 44.4284 181.746 59.3178C185.991 70.9372 188.136 84.5186 188.136 99.9966C188.136 112.03 186.845 122.887 184.328 132.588L184.307 132.566Z",
            fill: "#F9FAFF"
          }), (0, o.jsx)("path", {
            d: "M139.275 53.3664C130.238 45.9762 116.387 42.3356 96.9781 42.3356C77.5694 42.3356 63.7185 45.9326 54.6815 53.3664C43.9815 62.13 38.7957 77.39 38.7957 99.953C38.7957 147.782 62.0555 157.57 96.9781 157.57C131.901 157.57 155.161 147.782 155.161 99.953C155.161 77.3682 149.931 62.13 139.275 53.3664ZM66.9569 98.8412C65.9285 98.8412 64.9001 98.4488 64.1124 97.664C62.5369 96.0944 62.5369 93.5438 64.1124 91.9742L68.8606 87.2436L64.1124 82.513C62.5369 80.9434 62.5369 78.3928 64.1124 76.8232C65.6878 75.2536 68.2479 75.2536 69.8234 76.8232L74.5717 81.5538L79.3199 76.8232C80.8954 75.2536 83.4555 75.2536 85.0309 76.8232C86.6064 78.3928 86.6064 80.9434 85.0309 82.513L80.2827 87.2436L85.0309 91.9742C86.6064 93.5438 86.6064 96.0944 85.0309 97.664C84.2432 98.4488 83.2148 98.8412 82.1864 98.8412C81.1579 98.8412 80.1295 98.4488 79.3418 97.664L74.5935 92.9334L69.8453 97.664C69.0576 98.4488 68.0291 98.8412 67.0007 98.8412H66.9569ZM120.479 127.966H118.75V132.348C118.75 138.692 114.396 143.88 109.057 143.88C103.718 143.88 99.3632 138.692 99.3632 132.348V127.966H73.6745C71.9678 127.966 70.5674 126.593 70.5674 124.87C70.5674 123.148 71.9459 121.775 73.6745 121.775H120.457C122.164 121.775 123.564 123.148 123.564 124.87C123.564 126.593 122.185 127.966 120.457 127.966H120.479ZM129.888 91.9742C131.463 93.5438 131.463 96.0944 129.888 97.664C129.1 98.4488 128.072 98.8412 127.043 98.8412C126.015 98.8412 124.986 98.4488 124.199 97.664L119.45 92.9334L114.702 97.664C113.914 98.4488 112.886 98.8412 111.857 98.8412C110.829 98.8412 109.801 98.4488 109.013 97.664C107.437 96.0944 107.437 93.5438 109.013 91.9742L113.761 87.2436L109.013 82.513C107.437 80.9434 107.437 78.3928 109.013 76.8232C110.588 75.2536 113.148 75.2536 114.724 76.8232L119.472 81.5538L124.22 76.8232C125.796 75.2536 128.356 75.2536 129.931 76.8232C131.507 78.3928 131.507 80.9434 129.931 82.513L125.183 87.2436L129.931 91.9742H129.888Z",
            fill: "#F9FAFF"
          })]
        }), (0, o.jsx)("defs", {
          children: (0, o.jsx)("clipPath", {
            id: "clip0_11_913",
            children: (0, o.jsx)("rect", {
              width: "194",
              height: "218",
              fill: "white"
            })
          })
        })]
      }));
      var l = n(9070),
        d = n(9353),
        c = n(3699),
        u = n(1517),
        C = n(7068),
        g = n(2404),
        f = n(7491),
        y = n(8073);
      const h = () => {
        const [e, t] = a.useState(!1);
        return a.useEffect(() => {
          function e(e) {
            switch (e.data.type) {
              case "unityCrashModalOpen":
                t(!0);
                break;
              case "unityCrashError": {
                const {
                  error: t,
                  errorMessage: n,
                  origin: r
                } = e.data;
                C.A.getInstance().sendEvent({
                  type: "unityCrash",
                  error: t,
                  errorMessage: n,
                  origin: r
                }), C.A.getInstance().sendEvent({
                  type: "gameError",
                  slug: (0, y.lZ)().gameSlug,
                  errorName: t,
                  errorMessage: n,
                  pageVisitId: (0, f.kc)(),
                  context: "unityCrash"
                });
                break
              }
            }
          }
          return window.addEventListener("message", e), () => {
            window.removeEventListener("message", e)
          }
        }, []), e ? (0, o.jsx)(l.Modal, {
          hideBackdrop: !0,
          children: (0, o.jsxs)(l.ModalContent, {
            sx: {
              backgroundColor: u.l.black[70],
              width: "min(100vh,400px)",
              pb: 2.5
            },
            children: [(0, o.jsx)(i, {
              style: {
                width: 93,
                height: 107,
                marginTop: 32
              }
            }), (0, o.jsx)("h2", {
              style: {
                fontSize: 27,
                marginBlockEnd: 0,
                marginBlockStart: 8
              },
              children: (0, o.jsx)(c.A, {
                id: "error.unity.crashed.title"
              })
            }), (0, o.jsx)("p", {
              style: {
                fontWeight: 400,
                fontSize: 16,
                color: u.l.white[50],
                marginBottom: 20,
                marginBlockStart: 8
              },
              children: (0, o.jsx)(c.A, {
                id: "error.unity.crashed.text"
              })
            }), (0, o.jsx)(d.O, {
              variant: "contained",
              color: "purple",
              style: {
                width: "100%"
              },
              height: 45,
              onClick: () => g.A.refreshGamePage(),
              children: (0, o.jsx)(c.A, {
                id: "error.unity.crashed.button"
              })
            })]
          })
        }) : null
      }
    },
    7641: (e, t, n) => {
      n.r(t), n.d(t, {
        DEFAULT_DPR_VALUE: () => F,
        default: () => I
      });
      var r = n(9379),
        s = n(45),
        a = n(5043),
        o = n(8073),
        i = n(6580),
        l = n(1350),
        d = n(8908),
        c = n(9036),
        u = n(7717),
        C = n(605),
        g = n(428),
        f = n(9448),
        y = n(8708),
        h = n(7068),
        p = n(7135),
        m = n(7702),
        w = n(1662),
        b = n(8209),
        x = n(7801),
        L = n(3517),
        A = n(5271),
        v = n(4447),
        k = n(2233),
        M = n(7491),
        E = n(579);
      const j = ["devicePixelRatio"],
        _ = new C.A("unity2020ready"),
        F = 1,
        I = () => {
          const {
            isGameDisabled: e
          } = (0, a.useContext)(d.P), {
            isMobile: t,
            isAndroid: n,
            isIos: C
          } = (0, a.useContext)(u.A), {
            onLoadFinished: I
          } = (0, a.useContext)(f.h), {
            isFullscreen: P
          } = (0, a.useContext)(b.Z), {
            gfInit: S
          } = (0, a.useContext)(M.Rk), [R, D] = (0, a.useState)(0), [Z, H] = (0, a.useState)("loading"), B = a.useRef(null), G = a.useRef(null), O = navigator.deviceMemory || void 0;
          null === G.current && (G.current = new k.A);
          const T = (0, o.lZ)(),
            U = T.loaderOptions,
            V = "".concat((0, x.y)("unity2020"), "/").concat(T.gameSlug, ".html").concat(window.location.search);
          (0, a.useEffect)(() => {
            if (e) return void(B.current && (B.current.remove(), B.current = null));
            const t = (0, y.UR)(V);
            B.current = t, (0, A.sx)(() => {
              _.sendMessage({
                type: "focusGame"
              })
            });
            (0, l.yu)().appendChild(t)
          }, [V, e]), (0, a.useEffect)(() => {
            const e = (0, o.lZ)().loaderOptions,
              {
                unityConfigOptions: a,
                unitySaveFileNames: i
              } = e,
              {
                devicePixelRatio: l
              } = a,
              d = (0, s.A)(a, j),
              u = (0, r.A)((0, r.A)({}, d), {}, {
                companyName: "CrazyGames",
                productName: (0, c.A)(),
                productVersion: "1.0"
              });
            let f = !1;
            if ("success" === (null === S || void 0 === S ? void 0 : S.state)) {
              const e = S.data.portalDprExp25;
              f = "current_1" === e || "current_2" === e
            }
            f && t && (!n || O < 4) && (u.devicePixelRatio = null !== l && void 0 !== l ? l : F);
            const y = {
              gameLink: (0, o.lZ)().gameLink,
              userInfo: (0, v.yV)()
            };
            _.sendMessage({
              type: "unity2020config",
              loaderOptions: e,
              unityConfig: u,
              unitySaveFileNames: i,
              oldSdkInitObject: y,
              isIos: C
            });
            const h = () => {
              _.sendMessage({
                type: "focusGame"
              })
            };
            return (async () => {
              G.current.trackLoadStarted(), await g.A.Instance.waitForAPS(), _.sendMessage({
                type: "loadGame"
              })
            })(), (0, p._)().addAdFinishedListener(h), () => {
              (0, p._)().addAdFinishedListener(h)
            }
          }, [O, n, t, C, S]), (0, a.useEffect)(() => {
            function e(e) {
              switch (e.data.type) {
                case "loadProgress":
                case "loadprogress": {
                  if ("loading" !== Z) return;
                  const t = G.current.trackProgress(e.data.progress);
                  D(t), 1 === e.data.progress && (G.current.trackLoadFinished(), "REQUIRED" !== T.fullscreen || (0, w.BV)() || P ? (H("loaded"), I()) : H("fullscreen"));
                  break
                }
                case "syncUnityData":
                  g.A.Instance.autoSyncUnityData();
                  break;
                case "unityMemoryUsage":
                  h.A.getInstance().sendEvent(e.data.usageData);
                  break;
                case "unityError":
                  H("error")
              }
            }
            return window.addEventListener("message", e), () => {
              window.removeEventListener("message", e)
            }
          }, [Z, I, T, P]);
          const z = async () => {
            H("loaded"), I()
          };
          return (0, E.jsxs)(E.Fragment, {
            children: [(() => {
              switch (Z) {
                case "loading":
                  return (0, E.jsx)(i.A, {
                    progress: R,
                    showProgress: U.showProgress
                  });
                case "error":
                  return (0, E.jsx)(m.A, {
                    warning: "unity-unavailable"
                  });
                case "fullscreen":
                  return (0, E.jsx)(m.A, {
                    warning: "force-fullscreen",
                    close: z
                  });
                default:
                  return null
              }
            })(), (0, E.jsx)(L.A, {})]
          })
        }
    },
    8708: (e, t, n) => {
      n.d(t, {
        MN: () => o,
        UR: () => i,
        ap: () => a
      });
      var r = n(1662),
        s = n(4990);

      function a() {
        if ((0, r.lT)()) return !1;
        try {
          const e = document.createElement("canvas");
          return "WebGLRenderingContext" in window && !!e.getContext("webgl2")
        } catch (e) {
          return !1
        }
      }

      function o() {
        if ((0, r.lT)()) return !1;
        try {
          const e = document.createElement("canvas");
          return "WebGLRenderingContext" in window && (!!e.getContext("webgl") || !!e.getContext("experimental-webgl"))
        } catch (e) {
          return !1
        }
      }

      function i(e) {
        const t = document.createElement("iframe");
        return t.id = "game-iframe", t.src = e, t.style.border = "0", t.style.backgroundColor = "#fff", t.style.width = "10px", t.style.height = "10px", t.style.minWidth = "100%", t.style.minHeight = "100%", t.setAttribute("allow", "accelerometer; gyroscope; gamepad; autoplay; payment; fullscreen; microphone; clipboard-read; clipboard-write 'self' ".concat(e)), t.setAttribute("webkitallowfullscreen", "true"), t.setAttribute("mozallowfullscreen", "true"), t.setAttribute("msallowfullscreen", "true"), t.setAttribute("allowfullscreen", "true"), t.setAttribute("sandbox", ""), t.sandbox.add(...s.n), t
      }
    }
  }
]);
//# debugId=b7cb39b4-dbeb-5e06-a108-4f4d3c23c456