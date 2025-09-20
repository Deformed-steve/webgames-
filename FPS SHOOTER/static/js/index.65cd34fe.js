! function() {
  "use strict";
  var e, t, a, l, i, n, r, s, o = {
      7024: function(e, t) {
        t.Z = {
          placeholder: "UbfxB",
          blink: "SvZak"
        }
      },
      7949: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return m
          }
        }), a(9929), a(6301), a(5123);
        var l = a(5595),
          i = a(1584),
          n = a(6365),
          r = a(9253),
          s = a(407),
          o = a(4423),
          d = a(8612);
        let c = ["id"];
        var u = (0, l.aZ)({
            __name: "AdBlock",
            props: {
              type: {},
              checkHeight: {
                type: Boolean
              },
              emptyClass: {},
              intersectionRootMargin: {},
              refreshSec: {},
              reserveHeight: {
                type: Boolean
              }
            },
            emits: ["update:visible"],
            setup(e, {
              emit: t
            }) {
              let a = (0, s.x)(),
                u = {
                  sidebar: {
                    sizes: [
                      [300, 300], "fluid"
                    ],
                    placeholderHeight: 300
                  },
                  sidebar_bottom: {
                    sizes: [
                      [300, 300],
                      [300, 600],
                      [120, 600],
                      [160, 600],
                      [300, 250], "fluid"
                    ],
                    placeholderHeight: 300
                  },
                  leaderboard: {
                    sizes: [
                      [728, 90],
                      [950, 90],
                      [960, 90],
                      [970, 90],
                      [980, 90], "fluid"
                    ],
                    placeholderHeight: 90
                  },
                  leaderboard_rest: {
                    sizes: [
                      [728, 90],
                      [950, 90],
                      [960, 90],
                      [970, 90],
                      [980, 90], "fluid"
                    ],
                    placeholderHeight: 90
                  },
                  sticky_mobile_non_game_page: {
                    sizes: [
                      [320, 100],
                      [300, 50],
                      [320, 50], "fluid"
                    ]
                  },
                  sticky_mobile: {
                    sizes: [
                      [300, 50],
                      [320, 50], "fluid"
                    ]
                  },
                  sticky_tablet: {
                    sizes: [
                      [728, 90], "fluid"
                    ]
                  },
                  sticky_desktop: {
                    sizes: [
                      [970, 90],
                      [960, 90],
                      [950, 90],
                      [980, 90],
                      [728, 90], "fluid"
                    ]
                  },
                  widget_sidebar: {
                    sizes: [
                      [120, 600],
                      [300, 300],
                      [300, 600],
                      [160, 600],
                      [300, 250], "fluid"
                    ]
                  },
                  widget_sidebar_bottom: {
                    sizes: [
                      [300, 250], "fluid"
                    ]
                  },
                  widget_horizontal: {
                    sizes: [
                      [728, 90], "fluid"
                    ]
                  },
                  widget_horizontal_2: {
                    sizes: [
                      [728, 90], "fluid"
                    ]
                  },
                  widget_sticky_mobile: {
                    sizes: [
                      [300, 50],
                      [320, 50], "fluid"
                    ]
                  },
                  widget_sticky_tablet: {
                    sizes: [
                      [728, 90], "fluid"
                    ]
                  }
                },
                p = (0, d.t)(),
                g = (0, l.Fl)(() => u[e.type]),
                v = (0, l.Fl)(() => g.value.sizes.slice().sort((e, t) => "fluid" === e ? 1 : "fluid" === t ? -1 : t[0] - e[0])),
                m = (0, l.iH)(),
                h = (0, l.iH)(!0),
                f = (0, l.iH)(!1),
                _ = (0, l.Fl)(() => {
                  if (h.value && g.value.placeholderHeight && e.reserveHeight) return g.value.placeholderHeight
                }),
                y = (0, l.Me)(),
                w = (0, l.iH)(null),
                b = (0, l.iH)(),
                k = (0, l.iH)(void 0 === e.intersectionRootMargin);
              async function C() {
                if (!k.value || !a.adService) return;
                let l = w.value;
                if (!l) return;
                await (0, o.S8)();
                let i = l.getBoundingClientRect(),
                  n = v.value.filter(t => "fluid" === t ? i.width > 0 : e.checkHeight ? i.width >= t[0] && i.height >= t[1] : i.width >= t[0]);
                if (JSON.stringify(n) !== JSON.stringify(b.value) && (b.value = n, m.value?.destroy(), m.value = void 0, n.length > 0 && i.width > 0)) {
                  if (await (0, o.S8)(), m.value = await a.adService?.requestPageAd({
                      type: e.type,
                      refresh: e.refreshSec,
                      el: y,
                      sizes: n
                    }), !p.value) return void m.value.destroy();
                  let l = () => {
                      f.value = !0, h.value = !1, t("update:visible", !0)
                    },
                    i = () => {
                      f.value = !1, h.value = !1, t("update:visible", !1)
                    },
                    s = () => {
                      f.value = !1, h.value = !1, t("update:visible", !1)
                    };
                  switch (m.value?.addEventListener("rendered", l), m.value?.addEventListener("closed", i), m.value?.addEventListener("empty", s), m.value?.state) {
                    case r.qc.empty:
                      s();
                      break;
                    case r.qc.showing:
                      l();
                      break;
                    case r.qc.closed:
                      i()
                  }
                }
              }
              let $ = (0, i.vA)(C, 1e3);
              async function E() {
                if (!e.emptyClass) return;
                await (0, o.S8)();
                let t = w.value?.appendChild(document.createElement("div"));
                t && (t.classList.add(e.emptyClass), "none" === window.getComputedStyle(t).display && console.error(`AdBlock: class .${e.emptyClass} sets display to "none". That breaks tracking of the future size changes.

Use negative margins to hide empty ad in the layout.`), t.remove())
              }
              if ((0, l.bv)(() => {
                  E(), $()
                }), (0, l.YP)(() => e.emptyClass, () => {
                  E()
                }), (0, n.yU7)(w, $), void 0 !== e.intersectionRootMargin) {
                let {
                  stop: t
                } = (0, n.S1d)(w, ([e]) => {
                  e.isIntersecting && (k.value = !0, $(), t())
                }, {
                  rootMargin: e.intersectionRootMargin
                })
              }
              return (0, l.Jd)(() => {
                m.value?.destroy()
              }), (t, a) => ((0, l.wg)(), (0, l.iD)("div", {
                ref_key: "containerRef",
                ref: w,
                class: (0, l.C_)({
                  [e.emptyClass || ""]: e.emptyClass && !f.value && !_.value
                })
              }, [(0, l._)("div", {
                class: (0, l.C_)(t.$style.adBlockWrap),
                style: (0, l.j5)({
                  height: _.value ? `${_.value}rem` : void 0
                })
              }, [(0, l._)("div", {
                id: (0, l.SU)(y),
                class: (0, l.C_)(t.$style.adBlock)
              }, null, 10, c), (0, l.WI)(t.$slots, "default", {
                isVisible: f.value
              })], 6)], 2))
            }
          }),
          p = a(3744);
        let g = {},
          v = {};
        v.$style || (v.$style = {}), v.$style.style0 = {
          adBlockWrap: "y7qPE",
          adBlock: "vgekH"
        }, g.$style = Object.values(v.$style).reduce((e, t) => Object.assign(e, t), {});
        var m = (0, p.default)(u, [
          ["__cssModules", g]
        ])
      },
      9989: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return n
          }
        });
        var l = a(5595),
          i = a(7024),
          n = {
            __name: "AnimatedPlaceholder",
            setup: e => (e, t) => ((0, l.wg)(), (0, l.iD)("div", {
              class: (0, l.C_)((0, l.SU)(i.Z).placeholder)
            }, null, 2))
          }
      },
      2203: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return p
          }
        });
        var l = a(5595),
          i = a(6365),
          n = a(1584),
          r = a(2635),
          s = a(6381),
          o = (0, l.aZ)({
            __name: "Balance",
            props: {
              balance: {}
            },
            setup(e) {
              let t = (0, l.fb)(),
                a = (0, l.iH)(void 0),
                o = (0, l.iH)(null),
                d = (0, l.iH)(null),
                c = (0, l.iH)(void 0),
                u = (0, l.Fl)(() => e.balance),
                p = (0, i.Yzy)(u, {
                  duration: 1e3,
                  transition: i.iqj.linear,
                  onStarted: () => {
                    d.value?.classList.add(t.bouncing)
                  },
                  onFinished: () => {
                    d.value?.classList.remove(t.bouncing)
                  }
                });

              function g() {
                if (void 0 === c.value || !d.value) return;
                let {
                  display: e,
                  tooltip: t
                } = function({
                  maxChars: e,
                  value: t
                }) {
                  let a = (0, s.B)(t);
                  return e < a.length ? {
                    display: (0, s.B)(t, {
                      shorten: !0
                    }),
                    tooltip: a
                  } : {
                    display: a,
                    tooltip: void 0
                  }
                }({
                  maxChars: c.value,
                  value: Math.round(p.value)
                });
                a.value = t, d.value.textContent = e
              }

              function v() {
                let e = o.value,
                  t = d.value;
                if (!e || !t) return;
                t.textContent = "";
                let a = e.clientWidth;
                t.textContent = "X", c.value = Math.floor(a / t.clientWidth), g()
              }(0, l.YP)(p, g);
              let m = (0, n.DI)(v, 100);
              return (0, i.yU7)(o, m), (0, l.bv)(() => {
                v()
              }), (e, t) => ((0, l.wg)(), (0, l.iD)("div", {
                ref_key: "containerRef",
                ref: o,
                class: (0, l.C_)(e.$style.container)
              }, [(0, l.Wm)(r.Z, {
                content: a.value,
                position: "bottom"
              }, {
                default: (0, l.w5)(() => [(0, l._)("span", {
                  ref_key: "spanRef",
                  ref: d,
                  class: (0, l.C_)(e.$style.text)
                }, null, 2)]),
                _: 1
              }, 8, ["content"])], 2))
            }
          }),
          d = a(3744);
        let c = {},
          u = {};
        u.$style || (u.$style = {}), u.$style.style0 = {
          text: "cgICw",
          bouncing: "JoO2V"
        }, c.$style = Object.values(u.$style).reduce((e, t) => Object.assign(e, t), {});
        var p = (0, d.default)(o, [
          ["__cssModules", c]
        ])
      },
      9632: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return u
          }
        });
        var l = a(5595),
          i = a(9938),
          n = a(2157);
        let r = ["href"];
        var s = (0, l.aZ)({
            __name: "BaseLink",
            props: {
              disabled: {
                type: Boolean
              },
              to: {},
              externalTo: {}
            },
            setup(e) {
              let {
                keepRequiredParams: t
              } = (0, n.w)(), a = (0, n.L)(), s = (0, l.Fl)(() => "_blank" === e.target && e.to ? a(e.to) : e.to);
              return (a, n) => e.externalTo ? ((0, l.wg)(), (0, l.iD)("a", {
                key: 0,
                href: a.externalTo,
                class: (0, l.C_)([a.$style.baseLink, e.disabled ? a.$style.disabled : ""])
              }, [(0, l.WI)(a.$slots, "default")], 10, r)) : s.value ? ((0, l.wg)(), (0, l.j4)((0, l.SU)(i.rH), {
                key: 1,
                to: (0, l.SU)(t)(s.value),
                class: (0, l.C_)([a.$style.baseLink, e.disabled ? a.$style.disabled : ""])
              }, {
                default: (0, l.w5)(() => [(0, l.WI)(a.$slots, "default")]),
                _: 3
              }, 8, ["to", "class"])) : (0, l.kq)("", !0)
            }
          }),
          o = a(3744);
        let d = {},
          c = {};
        c.$style || (c.$style = {}), c.$style.style0 = {
          baseLink: "Mfnbj",
          disabled: "T6EOH"
        }, d.$style = Object.values(c.$style).reduce((e, t) => Object.assign(e, t), {});
        var u = (0, o.default)(s, [
          ["__cssModules", d]
        ])
      },
      7773: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return u
          }
        });
        var l = a(5595),
          i = a(9632),
          n = a(2893),
          r = a(6049),
          s = (0, l.aZ)({
            __name: "Button",
            props: {
              type: {
                default: "button"
              },
              disabled: {
                type: Boolean,
                default: !1
              },
              size: {
                default: "m"
              },
              width: {
                default: "normal"
              },
              visual: {
                default: "fill"
              },
              color: {
                default: "purple-400"
              },
              effect: {},
              target: {},
              to: {},
              externalTo: {},
              iconLeft: {},
              iconRight: {},
              icon: {},
              interfaceTarget: {}
            },
            setup(e) {
              let t = (0, l.iH)(null),
                a = {
                  xs: {
                    size: "xs",
                    accent: !0
                  },
                  s: {
                    size: "s",
                    accent: !0
                  },
                  m: {
                    size: "m",
                    accent: !0
                  },
                  l: {
                    size: "m",
                    accent: !0
                  },
                  xl: {
                    size: "l",
                    semibold: !0
                  }
                };
              return (s, o) => ((0, l.wg)(), (0, l.j4)((0, l.LL)(s.to ?? s.externalTo ? i.Z : "button"), (0, l.dG)(s.to ?? s.externalTo ? {
                to: s.to,
                externalTo: s.externalTo,
                target: s.target
              } : {}, {
                class: [s.$style.button, s.$style[`size_${e.size}`], s.$style[`width_${e.width}`], s.$style[`visual_${e.visual}`], s.$style[`color_${e.color}`], e.effect && s.$style[`effect_${e.effect}`], e.disabled && s.$style.disabled],
                type: e.type,
                disabled: e.disabled,
                "data-interface-target": s.interfaceTarget,
                onClick: e.onClick,
                onPointerdown: e.onPointerdown
              }), {
                default: (0, l.w5)(() => [(0, l._)("div", {
                  ref_key: "contentRef",
                  ref: t,
                  class: (0, l.C_)(s.$style.content)
                }, [e.iconLeft ? ((0, l.wg)(), (0, l.j4)(n.Z, {
                  key: 0,
                  name: e.iconLeft,
                  class: (0, l.C_)(s.$style.iconLeft)
                }, null, 8, ["name", "class"])) : (0, l.kq)("", !0), s.$slots.default ? ((0, l.wg)(), (0, l.j4)(r.Z, (0, l.dG)({
                  key: 1,
                  type: "label",
                  responsive: !1
                }, a[e.size]), {
                  default: (0, l.w5)(() => [(0, l.WI)(s.$slots, "default")]),
                  _: 3
                }, 16)) : (0, l.kq)("", !0), e.iconRight ? ((0, l.wg)(), (0, l.j4)(n.Z, {
                  key: 2,
                  name: e.iconRight,
                  class: (0, l.C_)(s.$style.iconRight)
                }, null, 8, ["name", "class"])) : (0, l.kq)("", !0), e.icon ? ((0, l.wg)(), (0, l.j4)(n.Z, {
                  key: 3,
                  name: e.icon,
                  class: (0, l.C_)(s.$style.iconCenter)
                }, null, 8, ["name", "class"])) : (0, l.kq)("", !0)], 2)]),
                _: 3
              }, 16, ["class", "type", "disabled", "data-interface-target", "onClick", "onPointerdown"]))
            }
          }),
          o = a(3744);
        let d = {},
          c = {};
        c.$style || (c.$style = {}), c.$style.style0 = {
          button: "XwS2x",
          "color_purple-400": "NfQWf",
          colorPurple400: "NfQWf",
          "color_purple-500": "wsvMl",
          colorPurple500: "wsvMl",
          "color_purple-600": "de_1J",
          colorPurple600: "de_1J",
          "color_purple-graphite": "QsJh0",
          colorPurpleGraphite: "QsJh0",
          color_golden: "n1de0",
          colorGolden: "n1de0",
          color_white: "_dARM",
          colorWhite: "_dARM",
          "color_white-60": "Yf6Gb",
          colorWhite60: "Yf6Gb",
          "color_carbon-300": "Q6WSz",
          colorCarbon300: "Q6WSz",
          "color_carbon-400": "PpXkz",
          colorCarbon400: "PpXkz",
          color_lime: "VIcaP",
          colorLime: "VIcaP",
          "color_rose-400": "qqln_",
          colorRose400: "qqln_",
          color_salad: "oOv8W",
          colorSalad: "oOv8W",
          color_blue: "ZkCLo",
          colorBlue: "ZkCLo",
          content: "k9qYi",
          disabled: "rrN5C",
          visual_fill: "lX1fd",
          visualFill: "lX1fd",
          visual_outline: "aFNKa",
          visualOutline: "aFNKa",
          visual_text: "YsZwD",
          visualText: "YsZwD",
          visual_ghost: "Nv8RJ",
          visualGhost: "Nv8RJ",
          size_s: "o9JYN",
          sizeS: "o9JYN",
          iconLeft: "n5fqI",
          iconRight: "PtyOF",
          iconCenter: "AcE2X",
          size_m: "D7VHT",
          sizeM: "D7VHT",
          size_l: "PGrAN",
          sizeL: "PGrAN",
          size_xl: "wV2hj",
          sizeXl: "wV2hj",
          width_normal: "lKpBS",
          widthNormal: "lKpBS",
          width_full: "_M0lI",
          widthFull: "_M0lI",
          effect_bevel: "Xxy75",
          effectBevel: "Xxy75",
          effect_shimmer: "oTN0_",
          effectShimmer: "oTN0_",
          shimmer: "q7XRP"
        }, d.$style = Object.values(c.$style).reduce((e, t) => Object.assign(e, t), {});
        var u = (0, o.default)(s, [
          ["__cssModules", d]
        ])
      },
      6503: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return v
          }
        }), a(5646), a(9774), a(5123), a(2394);
        var l = a(5595),
          i = a(1099);
        a(7090);
        var n = a(7024),
          r = a(9632);
        a(7886), a(5451), a(6015), a(8334), a(4880), a(5643), a(9761), a(8558), a(7980), a(6236), a(2833), a(7906), a(2114), a(2613), a(874), a(2240), a(8675), a(6857), a(8137), a(6501), a(6834), a(1549), a(3485);
        var s = a(1704),
          o = a(4919);
        (() => {
          if ("undefined" == typeof window) return;
          let e = new Set;
          document.addEventListener("lazybeforeunveil", t => {
            let a = t.target;
            if (a.dataset.videoId) return void
            function(t) {
              let a = `${s.W_}${t}/manifest/video.mpd`;
              if (e.has(a)) return;
              e.add(a);
              let l = document.createElement("link");
              l.rel = "preload", l.as = "fetch", l.href = a, l.fetchPriority = "low", l.crossOrigin = "anonymous";
              let i = window.setTimeout(n, 15e3);

              function n() {
                window.clearTimeout(i), l.remove()
              }
              l.addEventListener("load", n, {
                once: !0
              }), l.addEventListener("error", n, {
                once: !0
              }), document.head.appendChild(l)
            }(a.dataset.videoId);
            let l = a._lazysizesWidth;
            if (!l) return;
            let {
              src: i
            } = a.dataset;
            i && (a.dataset.src = (0, o.Mq)(i, l), a.dataset.srcset = (0, o.bJ)(i, l))
          })
        })();
        let d = ["alt"];
        var c = (0, l.aZ)({
            __name: "CardContainer",
            props: {
              is: {
                default: "div"
              },
              to: {},
              externalTo: {},
              appearance: {
                default: "medium_horizontal"
              },
              approximateWidth: {},
              target: {},
              src: {},
              alt: {},
              srcsetOn: {
                type: Boolean,
                default: !0
              },
              responsive: {
                type: Boolean
              },
              lazy: {
                type: Boolean,
                default: !0
              },
              preload: {
                type: Boolean
              },
              placeholder: {
                type: Boolean
              },
              sources: {},
              appearanceMedia: {}
            },
            setup(e) {
              let t = (0, l.iH)(),
                a = (0, l.iH)(),
                s = (0, l.iH)(!1),
                c = (0, l.Fl)(() => t.value || e.appearance),
                u = (0, l.Fl)(() => a.value || e.src),
                p = (0, l.iH)([]);

              function g() {
                p.value.forEach(({
                  matcher: e,
                  appearance: l,
                  src: i
                }) => {
                  e?.matches && (t.value = l, a.value = i)
                })
              }

              function v() {
                m(), e.appearanceMedia?.length && e.sources?.length && (e.appearanceMedia.forEach((t, a) => {
                  let l = window.matchMedia(t.media);
                  p.value.push({
                    matcher: l,
                    appearance: t.appearance,
                    src: e.sources[a]
                  }), l.addEventListener("change", () => g())
                }), g())
              }

              function m() {
                p.value.length && (p.value.forEach(({
                  matcher: e
                }) => {
                  e?.removeEventListener("change", () => g())
                }), p.value = [])
              }(0, l.bv)(() => {
                v()
              }), (0, l.Jd)(() => {
                m()
              }), (0, l.YP)(() => e.sources, () => {
                v()
              });
              let h = (0, l.Fl)(() => {
                  if (e.srcsetOn && !e.lazy && u.value) {
                    let t = 160;
                    return "icon" === e.appearance && (t = 90), "big_horizontal" === e.appearance && (t *= 2), e.approximateWidth && (t = e.approximateWidth), (0, o.bJ)(u.value, t)
                  }
                  return ""
                }),
                f = (0, l.Fl)(() => {
                  let t = [];
                  return e.preload && u.value && t.push({
                    rel: "preload",
                    as: "image",
                    href: u.value,
                    imagesrcset: h.value,
                    fetchpriority: "high"
                  }), {
                    link: t
                  }
                });
              return (0, i.u)(f), (t, a) => ((0, l.wg)(), (0, l.j4)((0, l.LL)(e.is), (0, l.dG)(e.is === r.Z ? {
                to: e.to,
                externalTo: e.externalTo,
                target: e.target
              } : {}, {
                class: {
                  [t.$style.cardContainer]: !0,
                  [t.$style.responsive]: e.responsive,
                  [t.$style.bigCard]: "big_horizontal" === c.value,
                  [t.$style.icon]: "icon" === c.value,
                  [(0, l.SU)(n.Z).placeholder]: !!u.value && !s.value || e.placeholder
                }
              }), {
                default: (0, l.w5)(() => [u.value ? ((0, l.wg)(), (0, l.iD)("img", (0, l.dG)({
                  key: e.lazy ? `${u.value}_${c.value}` : void 0,
                  "data-allow-mismatch": "",
                  alt: e.alt
                }, e.lazy ? {
                  "data-src": u.value,
                  "data-sizes": "auto",
                  class: [t.$style.img, "lazyload"],
                  loading: "lazy"
                } : {
                  src: u.value,
                  class: t.$style.img,
                  fetchpriority: "high",
                  srcset: h.value
                }, {
                  itemprop: "image",
                  onLoad: a[0] || (a[0] = () => s.value = !0)
                }), null, 16, d)) : (0, l.kq)("", !0), (0, l.WI)(t.$slots, "default")]),
                _: 3
              }, 16, ["class"]))
            }
          }),
          u = a(3744);
        let p = {},
          g = {};
        g.$style || (g.$style = {}), g.$style.style0 = {
          cardContainer: "as_tL",
          icon: "ByCAJ",
          responsive: "NkQCK",
          bigCard: "Ge0uE",
          img: "pUGtV"
        }, p.$style = Object.values(g.$style).reduce((e, t) => Object.assign(e, t), {});
        var v = (0, u.default)(c, [
          ["__cssModules", p]
        ])
      },
      4630: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return h
          }
        }), a(9929), a(6301), a(5123);
        var l = a(5595),
          i = a(9938),
          n = a(7773),
          r = a(2413),
          s = a(4886),
          o = a(6049),
          d = a.p + "static/image/404.32c777b2.webp",
          c = a.p + "static/image/joystick-on-fire.07bef854.webp";
        let u = ["src", "alt"];
        var p = (0, l.aZ)({
            __name: "ErrorContent",
            props: {
              type: {},
              noRandomGame: {
                type: Boolean
              },
              showButtons: {
                type: Boolean
              }
            },
            setup(e) {
              let t = (0, r.y)(),
                a = (0, i.yj)(),
                p = (0, l.Fl)(() => ({
                  404: {
                    img: d,
                    imgAlt: t("errorContent.404_imgAlt"),
                    title: t("errorContent.404_title"),
                    text: t("errorContent.404_text"),
                    buttons: [{
                      text: t("errorContent.404_back"),
                      link: {
                        name: s.m8.MAIN
                      },
                      interfaceTarget: "navigation-link"
                    }, !e.noRandomGame && {
                      text: t("errorContent.404_randomGame"),
                      interfaceTarget: "random-game",
                      link: {
                        name: s.m8.RANDOM_GAME
                      }
                    }].filter(e => !!e)
                  },
                  500: {
                    img: c,
                    imgAlt: t("errorContent.500_imgAlt"),
                    title: t("errorContent.500_title"),
                    text: t("errorContent.500_text"),
                    buttons: [{
                      text: t("errorContent.500_reload"),
                      link: a.fullPath,
                      interfaceTarget: "reload-page"
                    }, {
                      text: t("errorContent.500_back"),
                      link: {
                        name: s.m8.MAIN
                      },
                      interfaceTarget: "navigation-link"
                    }]
                  }
                })),
                g = (0, l.Fl)(() => p.value[e.type] || p.value[500]);
              return (e, t) => ((0, l.wg)(), (0, l.iD)("div", {
                class: (0, l.C_)(e.$style.container)
              }, [(0, l._)("div", {
                class: (0, l.C_)(e.$style.center)
              }, [(0, l._)("img", {
                class: (0, l.C_)(e.$style.img),
                src: g.value.img,
                alt: g.value.imgAlt
              }, null, 10, u), (0, l._)("div", {
                class: (0, l.C_)(e.$style.texts)
              }, [(0, l.Wm)(o.Z, {
                is: "h2",
                type: "header",
                size: "m"
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(g.value.title), 1)]),
                _: 1
              }), (0, l.Wm)(o.Z, {
                type: "paragraph",
                size: "s"
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(g.value.text), 1)]),
                _: 1
              })], 2), e.showButtons ? ((0, l.wg)(), (0, l.iD)("div", {
                key: 0,
                class: (0, l.C_)(e.$style.buttons)
              }, [((0, l.wg)(!0), (0, l.iD)(l.HY, null, (0, l.Ko)(g.value.buttons, (t, a) => ((0, l.wg)(), (0, l.j4)(n.Z, {
                key: a,
                class: (0, l.C_)(e.$style.button_override),
                size: "l",
                interfaceTarget: t.interfaceTarget,
                to: t.link,
                visual: 0 === a ? "fill" : "outline"
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(t.text), 1)]),
                _: 2
              }, 1032, ["class", "interfaceTarget", "to", "visual"]))), 128))], 2)) : (0, l.kq)("", !0)], 2)], 2))
            }
          }),
          g = a(3744);
        let v = {},
          m = {};
        m.$style || (m.$style = {}), m.$style.style0 = {
          container: "Wn9Yy",
          center: "hHpvG",
          img: "jlcVs",
          texts: "hkQFP",
          buttons: "ARfaN",
          button_override: "dnz3V",
          buttonOverride: "dnz3V",
          "#": "QOCx0"
        }, v.$style = Object.values(m.$style).reduce((e, t) => Object.assign(e, t), {});
        var h = (0, g.default)(p, [
          ["__cssModules", v]
        ])
      },
      7309: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return c
          }
        });
        var l = a(5595),
          i = a(144),
          n = a(3488),
          r = (0, l.aZ)({
            __name: "GoogleAuth",
            props: {
              onFinish: {
                type: Function
              }
            },
            setup(e) {
              let t = (0, n.E)(),
                {
                  initialized: a
                } = (0, i.Jk)(t),
                r = (0, l.iH)(null),
                s = () => {
                  window.google && r.value && window.google.accounts.id.renderButton(r.value, {
                    type: "standard",
                    text: "signin_with",
                    theme: "outline",
                    shape: "pill",
                    size: "large",
                    logo_alignment: "left",
                    click_listener: o
                  })
                };

              function o() {
                t.onFinishSignIn(e.onFinish)
              }
              return (0, l.YP)(a, s), (0, l.bv)(() => {
                a.value && s()
              }), (e, t) => ((0, l.wg)(), (0, l.iD)("div", {
                ref_key: "googleBtn",
                ref: r,
                class: (0, l.C_)(e.$style.google_signin)
              }, null, 2))
            }
          }),
          s = a(3744);
        let o = {},
          d = {};
        d.$style || (d.$style = {}), d.$style.style0 = {
          google_signin: "e7zf3",
          googleSignin: "e7zf3"
        }, o.$style = Object.values(d.$style).reduce((e, t) => Object.assign(e, t), {});
        var c = (0, s.default)(r, [
          ["__cssModules", o]
        ])
      },
      2893: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return ac
          }
        });
        var l = a(5595);
        a(7090);
        let i = {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          fill: "none",
          viewBox: "0 0 24 24"
        };
        var n = a(3744);
        let r = (0, n.default)({}, [
          ["render", function(e, t) {
            return (0, l.wg)(), (0, l.iD)("svg", i, [...t[0] || (t[0] = [(0, l._)("path", {
              fill: "currentColor",
              "fill-rule": "evenodd",
              d: "M18.293 6.571c.487.341.603 1.01.26 1.493l-6.48 9.107a1.085 1.085 0 0 1-1.646.14l-4.86-4.821a1.065 1.065 0 0 1 0-1.515 1.086 1.086 0 0 1 1.527 0l3.953 3.922 5.74-8.068a1.085 1.085 0 0 1 1.506-.258",
              "clip-rule": "evenodd"
            }, null, -1)])])
          }]
        ]);
        var s = a.p + "static/image/badge-hot-text.f729f77b.webp",
          o = a.p + "static/image/badge-hot.541b7f0c.webp",
          d = a.p + "static/image/badge-new-text.63a80975.webp",
          c = a.p + "static/image/badge-new.a1fd5cd2.webp",
          u = a.p + "static/image/badge-top-text.4baee8c1.webp",
          p = a.p + "static/image/badge-top.8dc89ee4.webp";
        let g = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          v = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", g, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M1 12a11 11 0 1 1 22 0 11 11 0 0 1-22 0m8.744-4.108a1.37 1.37 0 0 1-1.181.67 1.374 1.374 0 0 1-.946-2.371 2.753 2.753 0 0 0-3.18 2.716v1.718h5.5V8.906c0-.356-.068-.7-.193-1.014m7.756.67a1.374 1.374 0 0 1-.997-2.32 3.092 3.092 0 0 0-3.816 3.008v1.375h6.188V9.25c0-.447-.095-.868-.262-1.25-.25.343-.653.563-1.113.563m2.063 4.813H4.438l.163.808q.059.29.137.567a7.545 7.545 0 0 0 7.266 5.5c2.402 0 4.58-1.13 5.973-2.935a7.46 7.46 0 0 0 1.427-3.137zm-8.246 5.461a3.534 3.534 0 0 1 5.753-2.612 6.17 6.17 0 0 1-5.753 2.612"
              }, null, -1)])])
            }]
          ]),
          m = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          h = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", m, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M12 7.762a2.393 2.393 0 0 0-2.4-2.38 2.393 2.393 0 0 0-2.4 2.38q0 .285.064.547l-2.456-.305Q4.8 7.883 4.8 7.762C4.8 5.132 6.949 3 9.6 3s4.8 2.132 4.8 4.762v.13l2.272-4.762 3.255 1.53-1.653 3.46L12 8.896l-.27-.034c.172-.327.27-.703.27-1.1m9.6 7.824v4.033L12 22l-9.6-2.381v-4.033l5.67 1.607.885.25.473-.782L12 12.41l2.573 4.252.472.781.885-.249zM2.4 8.904l9.6 1.19 9.6-1.19 2.4 4.762-8.4 2.381-3.6-5.952-3.6 5.952-8.4-2.38z"
              }, null, -1)])])
            }]
          ]),
          f = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          _ = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", f, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M12 8.556A2.778 2.778 0 1 0 12 3a2.778 2.778 0 0 0 0 5.556m-3.889 5.833a2.778 2.778 0 1 0 0-5.556 2.778 2.778 0 0 0 0 5.556M7.556 18A2.778 2.778 0 1 0 2 18a2.778 2.778 0 0 0 5.556 0M12 20.778a2.778 2.778 0 1 0 0-5.556 2.778 2.778 0 0 0 0 5.556M22 18a2.778 2.778 0 1 0-5.556 0A2.778 2.778 0 0 0 22 18m-6.111-3.611a2.778 2.778 0 1 0 0-5.556 2.778 2.778 0 0 0 0 5.556"
              }, null, -1)])])
            }]
          ]),
          y = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          w = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", y, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M4 4v9l9 9 9-9-9-9zm4.5 3.214a1.286 1.286 0 1 1 0 2.572 1.286 1.286 0 0 1 0-2.572"
              }, null, -1)])])
            }]
          ]),
          b = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          k = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", b, [...t[0] || (t[0] = [(0, l._)("g", {
                "clip-path": "url(#b36c3d87a)"
              }, [(0, l._)("path", {
                fill: "currentColor",
                d: "M18.856 10.287a5.144 5.144 0 1 0 0-10.288 5.144 5.144 0 0 0 0 10.288M1.834 17.66c.493.412 1.067.739 1.715.948l16.492 5.31 1.585-2.985-13.18-11.16a5.14 5.14 0 0 0-7.244.632 5.16 5.16 0 0 0 .632 7.255m1.592-3.944a1.715 1.715 0 1 1 3.43 0 1.715 1.715 0 0 1-3.43 0"
              })], -1), (0, l._)("defs", null, [(0, l._)("clipPath", {
                id: "b36c3d87a"
              }, [(0, l._)("path", {
                fill: "currentColor",
                d: "M0 0h24v24H0z"
              })])], -1)])])
            }]
          ]),
          C = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          $ = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", C, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M3 9c0-4.969 4.031-9 9-9s9 4.031 9 9c0 6-7.5 11.25-7.5 11.25L15 24H9l1.5-3.75S3 15 3 9m4.5 0c0-2.484 2.016-4.5 4.5-4.5V3a6 6 0 0 0-6 6z"
              }, null, -1)])])
            }]
          ]),
          E = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          A = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", E, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M3 1h16.5v5.5h-4.812v1.375H8.04l-1.19-.894-.55-.412-.825 1.1.55.412L7.4 9.113l.185.137h7.103v4.125h3.437V12h-2.062V7.875h6.187v5.5L18.125 17.5V23H4.375v-5.5L3 16.125zm6.57 15.241-.572-.382-.764 1.143.571.382 1.203.803-1.203.804-.571.382.764 1.143.572-.382 1.68-1.122 1.68 1.122.572.382.764-1.143-.571-.382-1.203-.803 1.203-.804.571-.382-.764-1.143-.572.382-1.68 1.122z"
              }, null, -1)])])
            }]
          ]),
          T = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 28 28"
          },
          S = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", T, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M7.389 3.5H6.285l-.364 1.04-1.813 5.182H0v3.111h1.556v12.445h4.666v-3.89h15.556v3.89h4.666V12.833H28v-3.11h-4.108L22.08 4.54l-.364-1.04zm13.752 7.778H6.859L8.492 6.61h11.016zM4.667 15.944a1.556 1.556 0 1 1 3.11 0 1.556 1.556 0 0 1-3.11 0m17.11-1.555a1.556 1.556 0 1 1 0 3.111 1.556 1.556 0 0 1 0-3.111"
              }, null, -1)])])
            }]
          ]),
          O = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          M = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", O, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M7.995 0h3.75v8.25h3.75v1.5h3.75v1.5h3.75V18a6 6 0 0 1-6 6h-3.998q-.352.001-.69-.047a9.4 9.4 0 0 1-6.562-3.703l-2.62-3.497L2 15.253l3-2.25 1.125 1.5 1.87 2.499zm5.25 14.25v-.75h-1.5v6h1.5v-5.25m3-.75h-1.5v6h1.5v-6m3 .75v-.75h-1.5v6h1.5v-5.25"
              }, null, -1)])])
            }]
          ]),
          P = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          L = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", P, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M9.944 9.667 21.444 2 24 4.556l-7.667 11.5-3.006 1.201-4.584-4.584zm-2.172 3.841 4.72 4.72a4.47 4.47 0 0 1-4.464 4.216H1V19.89h2.556v-1.917a4.47 4.47 0 0 1 4.216-4.464"
              }, null, -1)])])
            }]
          ]),
          x = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          D = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", x, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22m0-3.437a6.87 6.87 0 0 1-6.84-6.188h13.68A6.87 6.87 0 0 1 12 19.563M5.813 5.813l5.109 2.75-5.11 2.75 1.964-2.75zm7.266 2.75 5.108-2.75-1.963 2.75 1.963 2.75z"
              }, null, -1)])])
            }]
          ]),
          R = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          I = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", R, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M0 10.667 8 4l4 2 4-2 8 6.667S20.667 20 14 20h-4c-6.667 0-10-9.333-10-9.333m2.667 0s3.333 4 9.333 4 9.333-4 9.333-4l-6-1.334S13.33 10 12 10s-3.333-.667-3.333-.667z"
              }, null, -1)])])
            }]
          ]),
          z = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          U = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", z, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M21.333 3.694h.334v1.973H24V9h-2.333v2.667H10.333l-.75 3h1.75V13h2v5.333h-2v-1.666h-2.25L8 21H1.333l2.338-9.346A4 4 0 0 1 0 7.667C0 5.683 1.442 4.01 3.333 3.694z"
              }, null, -1)])])
            }]
          ]),
          B = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          j = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", B, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M22.694 14.929c.188-.786.287-1.605.287-2.448C22.98 6.69 18.289 2 12.5 2S2.02 6.692 2.02 12.48c0 .844.098 1.667.286 2.453l.463-.405.843-.737.86.716c2.354 1.965 3.594 4.831 4.012 7.656a10.4 10.4 0 0 0 4.016.798 10.4 10.4 0 0 0 4.02-.798c.418-2.825 1.654-5.69 4.012-7.656l.86-.716.843.737.463.4zM12.5 15.1c1.085 0 1.965.88 1.965 1.965v1.31a1.966 1.966 0 0 1-3.93 0v-1.31c0-1.085.88-1.965 1.965-1.965m-1.908-3.153c-.92 1.511-2.57 2.24-3.688 1.63s-1.274-2.33-.357-3.836c.917-1.507 2.571-2.24 3.689-1.63s1.273 2.33.356 3.836m7.509 1.63c-1.118.61-2.768-.119-3.69-1.63-.92-1.51-.76-3.226.353-3.836 1.114-.61 2.768.119 3.689 1.63.92 1.51.761 3.226-.352 3.836M7.26 22.96c-.287-2.8-1.425-5.609-3.632-7.447L1 17.811c1.08 1.638 1.785 3.083 1.769 5.146zm14.971 0c-.016-2.067.684-3.508 1.769-5.146l-2.632-2.3c-2.203 1.837-3.341 4.646-3.628 7.446h4.496z"
              }, null, -1)])])
            }]
          ]),
          H = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 28 28"
          },
          Z = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", H, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M7.584 2.333h12.833v4.813h6.417v8.02H1.167v-8.02h6.417zM1.167 16.771h9.625v3.208h6.417v-3.208h9.625v9.625H1.167zM18.011 4.74H9.99v2.406h8.02z"
              }, null, -1)])])
            }]
          ]),
          q = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          W = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", q, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M7.626 16.125c.163-1.272.249-2.668.249-4.125q-.001-1.16-.073-2.252l.76.761.972-.971 1.662-1.663h1.19l-1.344 4.04a2.75 2.75 0 0 0 1.151 3.2l3.704 2.316-.404 1.41-.687 2.406L14.303 23h2.862l.283-.997.688-2.406.687-2.406.284-.997-.876-.546-2.88-1.8 1.247-3.326 1.044 2.088.378.76h4.288v-2.75h-2.587l-1.684-3.364-.232-.468-.485-.193-3.438-1.375-.24-.095h-3.589l-.403.404L7.587 7.59l-.004.005C7.059 3.71 5.847 1 4.438 1 2.538 1 1 5.924 1 12s1.538 11 3.438 11c1.087 0 2.053-1.611 2.685-4.125h3.708l.361-.816.68-1.521-.41-.258a4.1 4.1 0 0 1-1.628-1.93l-.79 1.775zM18.875 3.063a2.062 2.062 0 1 0-4.125 0 2.062 2.062 0 0 0 4.125 0"
              }, null, -1)])])
            }]
          ]),
          F = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          G = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", F, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M4.8 3a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2M0 12.3l1.5-3.9 5.458.004-1.783 4.867L7.2 17.2v3.4H2.4v-4.4zm18.825.971-1.782-4.867L22.5 8.4l1.5 3.9-2.4 3.9v4.4h-4.8v-3.4zM19.2 3a2.1 2.1 0 1 1 0 4.199A2.1 2.1 0 0 1 19.2 3M12 3a2.4 2.4 0 1 1 0 4.8A2.4 2.4 0 0 1 12 3m4.4 10.2-2 4.2v4.4H9.6v-4.4l-2-4.2L9 9h6z"
              }, null, -1)])])
            }]
          ]),
          N = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          V = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", N, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "m23 1-9.135 3.261.197-2.573-8.71 5.044A8.72 8.72 0 0 0 1 14.277a8.723 8.723 0 0 0 16.272 4.37l5.04-8.71-2.573.198zM10.952 12.85l3.798.547L12 16.039l.649 3.73-3.399-1.762-3.399 1.762.649-3.73-2.75-2.643 3.798-.545L9.25 9.456z"
              }, null, -1)])])
            }]
          ]),
          Y = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          K = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", Y, [...t[0] || (t[0] = [(0, l._)("g", {
                "clip-path": "url(#672ca75ea)"
              }, [(0, l._)("path", {
                fill: "currentColor",
                d: "M9 4.2c-.895-.39-1.5-1.116-1.5-1.95C7.5 1.008 8.845 0 10.5 0s3 1.008 3 2.25c0 .834-.605 1.56-1.5 1.95V6h6v6h1.8c.39-.895 1.116-1.5 1.95-1.5 1.242 0 2.25 1.345 2.25 3s-1.008 3-2.25 3c-.834 0-1.56-.605-1.95-1.5H18v9h-6v-1.8c.895-.39 1.5-1.116 1.5-1.95 0-1.242-1.345-2.25-3-2.25s-3 1.008-3 2.25c0 .834.605 1.56 1.5 1.95V24H0v-9h1.8c.39.895 1.116 1.5 1.95 1.5 1.242 0 2.25-1.345 2.25-3s-1.008-3-2.25-3c-.834 0-1.56.605-1.95 1.5H0V6h9z"
              })], -1), (0, l._)("defs", null, [(0, l._)("clipPath", {
                id: "672ca75ea"
              }, [(0, l._)("path", {
                fill: "currentColor",
                d: "M0 0h24v24H0z"
              })])], -1)])])
            }]
          ]),
          J = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          X = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", J, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M22 2H2v20h20zM7.714 6.286a1.429 1.429 0 1 1 0 2.857 1.429 1.429 0 0 1 0-2.857m-1.428 10a1.428 1.428 0 1 1 2.857 0 1.428 1.428 0 0 1-2.857 0M12 10.57a1.429 1.429 0 1 1 0 2.858 1.429 1.429 0 0 1 0-2.858m2.857-2.857a1.429 1.429 0 1 1 2.858 0 1.429 1.429 0 0 1-2.858 0m1.429 7.143a1.429 1.429 0 1 1 0 2.858 1.429 1.429 0 0 1 0-2.858"
              }, null, -1)])])
            }]
          ]),
          Q = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          ee = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", Q, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M11.25 3.673V2h4.5v1.673c0 1.786-.422 3.52-1.21 5.077H24v4.5h-.75V17h-1.125v3.375H21V23h-8.555l-.567-.38-3.375-2.25-1.003-.665V9.917l.844-.675.37-.3a6.74 6.74 0 0 0 2.531-5.269zM6 9.5V23H0V9.5z"
              }, null, -1)])])
            }]
          ]),
          et = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          ea = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", et, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M8 3.667h4V2.333h2v12h-2V13l-4.667 9.333L2 19.667 5.333 13h-.666A4.664 4.664 0 0 1 0 8.333a4.67 4.67 0 0 1 2.667-4.216V1zm9.333 0V7H20l4-2v6.667l-4-2h-2.667V13h-2V3.667zM5.667 8.333a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              }, null, -1)])])
            }]
          ]),
          el = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          ei = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", el, [...t[0] || (t[0] = [(0, l._)("g", {
                "clip-path": "url(#c319a656a)"
              }, [(0, l._)("path", {
                fill: "currentColor",
                d: "m2.357 5.781.804-.483 3.75-2.253.804-.483.965 1.607-.803.483-.804.483 6.647 2.568 4.286-2.575 5.252-.968.643 1.071-3.32 4.183-4.285 2.575-.853 7.075.803-.483.804-.483.965 1.607-.803.483-3.75 2.254-.804.482-.966-1.607.804-.483.268-.16-2.897-4.822-1.072.644-.855 3.43-2.143 1.288-1.931-3.215a1.25 1.25 0 0 1-1.716-.427 1.25 1.25 0 0 1 .428-1.716L.647 12.642l2.143-1.288 3.43.856 1.072-.644-2.898-4.822-.267.161-.804.483zm2.15 9.645-.536.322.644 1.072.536-.322 2.143-1.288.536-.322-.644-1.071-.536.322z"
              })], -1), (0, l._)("defs", null, [(0, l._)("clipPath", {
                id: "c319a656a"
              }, [(0, l._)("path", {
                fill: "currentColor",
                d: "M0 0h24v24H0z"
              })])], -1)])])
            }]
          ]),
          en = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 28 28"
          },
          er = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", en, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "m28 10.967-14 4.9-8.409-2.945 8.667-3.403.652-.259-.516-1.299-.652.258-9.8 3.85-.38.149-.062-.026v6.247c.674 1.098 1.216 2.993 0 5.828l-3.5-.7s1.422-2.035 2.1-4.24v-7.625L0 10.967v-1.4l14-4.9 14 4.9zM6.283 14.65l7.258 2.542.463.162.464-.162 7.258-2.542.674 6.467c0 1.544-3.762 3.15-8.4 3.15-4.637 0-8.4-1.606-8.4-3.15z"
              }, null, -1)])])
            }]
          ]),
          es = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          eo = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", es, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M22.645 4.58 16.194 2l-2.581 1.935H9.097A5.81 5.81 0 0 0 3.29 9.742c0 3.206 2.601 5.806 5.807 5.806h5.806c.714 0 1.29.577 1.29 1.29s-.576 1.291-1.29 1.291H5.871L2 20.064 5.871 22h9.032a5.16 5.16 0 1 0 0-10.323H9.097a1.936 1.936 0 0 1 0-3.87h4.516l2.58 1.935 6.452-2.58zm-6.451 0a.645.645 0 1 1 1.29 0 .645.645 0 0 1-1.29 0m.645 1.936a.645.645 0 1 1 0 1.29.645.645 0 0 1 0-1.29"
              }, null, -1)])])
            }]
          ]),
          ed = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          ec = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", ed, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M24 20.8H12.6v-4.241a4.2 4.2 0 0 0 3.6-4.159 4.2 4.2 0 0 0-3.6-4.159V4H24v3.6h-4.8v9.6H24zM11.4 8.241A4.2 4.2 0 0 0 7.8 12.4a4.2 4.2 0 0 0 3.6 4.159V20.8H0v-3.6h4.8V7.6H0V4h11.4zm0 7.099a3.001 3.001 0 0 1 0-5.88zm1.2 0V9.46a3.001 3.001 0 0 1 0 5.88m7.8-6.54H24V16h-3.6zM3.6 16H0V8.8h3.6z"
              }, null, -1)])])
            }]
          ]),
          eu = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 28 28"
          },
          ep = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", eu, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "m1.81 12.19 3.44-3.44L14 0l8.75 8.75 3.44 3.44a6.188 6.188 0 0 1-8.75 8.75l-1.69-1.69v5.25h3.5V28H8.75v-3.5h3.5v-5.25l-1.69 1.69a6.188 6.188 0 0 1-8.75-8.75"
              }, null, -1)])])
            }]
          ]),
          eg = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          ev = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", eg, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M1.009 11.532Q1 11.762 1 12c0 6.076 4.924 11 11 11q.238 0 .468-.009A8.26 8.26 0 0 1 16.696 12.8a8.25 8.25 0 0 1 6.295-.335c.009-.155.009-.31.009-.468C23 5.924 18.076 1 12 1q-.238 0-.468.009A8.251 8.251 0 0 1 1.009 11.532m8.877-10.33a11.02 11.02 0 0 0-8.684 8.684 6.644 6.644 0 0 0 8.684-8.684m10.252 12.405a6.6 6.6 0 0 0-2.75.649 6.7 6.7 0 0 0-2.234 1.732 6.6 6.6 0 0 0-1.31 2.505 6.6 6.6 0 0 0-.151 2.823c.082.511.223 1.01.421 1.486a11.02 11.02 0 0 0 8.684-8.684 6.7 6.7 0 0 0-2.66-.507z"
              }, null, -1)])])
            }]
          ]),
          em = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          eh = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", em, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M12.802 5.826A1.526 1.526 0 0 0 12 3a1.527 1.527 0 0 0-.802 2.826l-2.865 5.73L3.75 7.889a1.528 1.528 0 1 0-1.222.611h.027l2.112 11.611h14.666L21.446 8.5h.026a1.527 1.527 0 1 0-1.222-.611l-4.583 3.667z"
              }, null, -1)])])
            }]
          ]),
          ef = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          e_ = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", ef, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M10.033 0v16.5h10.5V3h3v12.75a8.25 8.25 0 0 1-8.25 8.25h-.9c-2.794 0-5.48-1.073-7.5-3l-4.524-4.308L1 15.398l2.588-2.714 1.359 1.294 2.09 1.988c0-.07-.004-.146-.004-.216V0zm1.5 7.5h3V15h-3zm7.5 1.5v6h-3V9z"
              }, null, -1)])])
            }]
          ]),
          ey = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          ew = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", ey, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M6.58 3.808a1.808 1.808 0 1 0-3.616 0 1.808 1.808 0 0 0 3.616 0M2.964 6.82H1.76v5.525c0 .64.252 1.255.704 1.707l.851.851L5.45 17.04l.237 1.427.302 1.808.15.904.02.102h2.444l-.083-.501-.15-.904-.302-1.808-.302-1.808-.064-.38-.274-.276-2.053-2.052V11.1l.806 1.209.14.207.21.136L8.4 13.857l.298.192h6.606l.298-.192 1.868-1.205.21-.136.14-.207.806-1.21v2.453l-2.056 2.056-.275.275-.064.38-.302 1.809-.3 1.808-.152.903-.082.501h2.444l.019-.101.15-.904.302-1.808.237-1.428 2.14-2.135.85-.855a2.4 2.4 0 0 0 .705-1.707V6.822h-3.657l-.358.539-2.271 3.408-.335.215V6.821H8.388v4.166l-.343-.219L5.774 7.36l-.358-.539H2.964m-1.036 8.4-1.62 5.095-.308.968h2.531l.075-.237 1.243-3.906zM17.42 3.807a1.807 1.807 0 1 0 3.614 0 1.807 1.807 0 0 0-3.614 0m4.652 11.412-1.921 1.917 1.243 3.906.075.238H24l-.309-.968z"
              }, null, -1)])])
            }]
          ]),
          eb = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          ek = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", eb, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M16.59 15.158a.831.831 0 1 1 0-1.663.831.831 0 0 1 0 1.663m-9.177 0a.83.83 0 1 1 0-1.662.83.83 0 0 1 0 1.662m9.475-5.003 1.658-2.873a.346.346 0 1 0-.599-.346l-1.679 2.911a10.43 10.43 0 0 0-8.537 0L6.052 6.94a.346.346 0 1 0-.599.346l1.659 2.874C4.262 11.706 2.313 14.594 2.03 18h19.94c-.284-3.41-2.233-6.294-5.085-7.845"
              }, null, -1)])])
            }]
          ]),
          eC = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          e$ = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", eC, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M6.9 5.08c2.066 1.56 4.287 4.732 5.1 6.436.813-1.7 3.034-4.872 5.1-6.436 1.488-1.129 3.9-2 3.9.778 0 .554-.315 4.661-.499 5.33-.643 2.314-2.984 2.907-5.067 2.546 3.639.625 4.565 2.696 2.564 4.768-3.798 3.936-5.457-.986-5.881-2.246-.06-.175-.092-.28-.117-.28s-.057.108-.117.28c-.424 1.26-2.086 6.182-5.88 2.246-1.999-2.072-1.076-4.143 2.563-4.768-2.083.36-4.424-.232-5.064-2.55C3.315 10.516 3 6.408 3 5.854c0-2.778 2.412-1.906 3.9-.778z"
              }, null, -1)])])
            }]
          ]),
          eE = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          eA = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", eE, [...t[0] || (t[0] = [(0, l._)("g", {
                fill: "currentColor",
                "clip-path": "url(#dece13d0a)"
              }, [(0, l._)("path", {
                d: "M3 6.283V3h7.112v18H3v-3.192h3.34V6.283zm18 0V3h-7.112v18H21v-3.192h-3.34V6.283z"
              })], -1), (0, l._)("defs", null, [(0, l._)("clipPath", {
                id: "dece13d0a"
              }, [(0, l._)("path", {
                fill: "#fff",
                d: "M3 3h18v18H3z"
              })])], -1)])])
            }]
          ]),
          eT = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          eS = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", eT, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                "fill-rule": "evenodd",
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": ".5",
                d: "M19.916 4.63a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.115l-6-6a.75.75 0 1 1 1.06-1.06l5.353 5.352L18.876 4.84a.75.75 0 0 1 1.04-.208",
                "clip-rule": "evenodd"
              }, null, -1)])])
            }]
          ]),
          eO = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          eM = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", eO, [...t[0] || (t[0] = [(0, l._)("path", {
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "m19.5 8.255-7.5 7.5-7.5-7.5"
              }, null, -1)])])
            }]
          ]),
          eP = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          eL = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", eP, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M15.31 11.37a.894.894 0 0 1 0 1.263l-5.356 5.355a.894.894 0 0 1-1.263-1.263L13.416 12 8.693 7.275a.894.894 0 0 1 1.264-1.264l5.355 5.356z"
              }, null, -1)])])
            }]
          ]),
          ex = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          eD = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", ex, [...t[0] || (t[0] = [(0, l._)("path", {
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "m4.5 15.755 7.5-7.5 7.5 7.5"
              }, null, -1)])])
            }]
          ]),
          eR = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          eI = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", eR, [...t[0] || (t[0] = [(0, l._)("g", {
                "clip-path": "url(#a8856f43a)"
              }, [(0, l._)("path", {
                fill: "currentColor",
                d: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-.937 4.688V12c0 .313.156.605.417.781l3.75 2.5a.935.935 0 0 0 1.301-.261.934.934 0 0 0-.261-1.301L12.938 11.5V6.688A.935.935 0 0 0 12 5.75a.935.935 0 0 0-.937.938"
              })], -1), (0, l._)("defs", null, [(0, l._)("clipPath", {
                id: "a8856f43a"
              }, [(0, l._)("path", {
                fill: "#fff",
                d: "M2 2h20v20H2z"
              })])], -1)])])
            }]
          ]),
          ez = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          eU = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", ez, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M17.886 7.886a1.252 1.252 0 0 0-1.77-1.77l-4.113 4.117L7.886 6.12a1.252 1.252 0 0 0-1.77 1.77l4.117 4.113L6.12 16.12a1.252 1.252 0 0 0 1.77 1.77l4.113-4.117 4.117 4.113a1.252 1.252 0 0 0 1.77-1.77l-4.117-4.113z"
              }, null, -1)])])
            }]
          ]),
          eB = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          ej = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", eB, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M9.711 9.711V4.645a.92.92 0 0 0-.457-.807.91.91 0 0 0-.928 0 .92.92 0 0 0-.457.807v1.922L4.836 3.534a.92.92 0 0 0-1.556.404.92.92 0 0 0 .254.898L6.567 7.87H4.645a.92.92 0 0 0-.807.457.91.91 0 0 0 0 .928.92.92 0 0 0 .807.457zm9.644 0a.92.92 0 0 0 .807-.457.91.91 0 0 0 0-.928.92.92 0 0 0-.807-.457h-1.922l3.033-3.033a.92.92 0 0 0-.404-1.556.92.92 0 0 0-.898.254L16.13 6.567V4.645a.92.92 0 0 0-.457-.807.91.91 0 0 0-.928 0 .92.92 0 0 0-.457.807v5.066zM4.198 20.75a.93.93 0 0 0 .634-.28l3.033-3.032v1.921a.92.92 0 0 0 .935.934.92.92 0 0 0 .907-.934v-5.066H4.64a.92.92 0 0 0-.808.457.91.91 0 0 0 0 .928.92.92 0 0 0 .808.457h1.921L3.53 19.168a.92.92 0 0 0-.207 1.02c.15.35.497.572.876.562m15.631 0a.92.92 0 0 0 .642-1.581l-3.033-3.033h1.922c.332.005.64-.17.807-.457a.91.91 0 0 0 0-.928.92.92 0 0 0-.807-.457h-5.066v5.065a.92.92 0 0 0 .935.934.92.92 0 0 0 .907-.934v-1.92l3.033 3.032a.92.92 0 0 0 .66.279"
              }, null, -1)])])
            }]
          ]),
          eH = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          eZ = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", eH, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "m13.866 14.866 6.441-8.978-1.195-1.195-8.978 6.44 3.728 3.729zm-8.219.252v-4.236L19.412 1 24 5.588l-9.882 13.765H9.882L7.765 21.47l-4.236-4.236zm-5.44 6.56 2.886-2.885 3.114 3.114-1.473 1.474-.208.207H0v-1.702z"
              }, null, -1)])])
            }]
          ]),
          eq = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          eW = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", eq, [...t[0] || (t[0] = [(0, l._)("g", {
                "clip-path": "url(#97b0da48a)"
              }, [(0, l._)("path", {
                fill: "currentColor",
                d: "M4.222 3.25C2.997 3.25 2 4.231 2 5.438V16.53c0 1.207.997 2.188 2.222 2.188h6.111l-.371 1.093H7.556c-.615 0-1.112.49-1.112 1.094S6.941 22 7.556 22h8.888c.615 0 1.112-.489 1.112-1.094s-.497-1.093-1.112-1.093h-2.406l-.371-1.094h6.11c1.226 0 2.223-.981 2.223-2.188V5.438c0-1.207-.997-2.188-2.222-2.188zm15.903 2.188v9.687H3.875V5.438z"
              })], -1), (0, l._)("defs", null, [(0, l._)("clipPath", {
                id: "97b0da48a"
              }, [(0, l._)("path", {
                fill: "#fff",
                d: "M2 2h20v20H2z"
              })])], -1)])])
            }]
          ]),
          eF = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          eG = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", eF, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M18.956 5.287a.05.05 0 0 0-.028-.024A16.5 16.5 0 0 0 14.86 4a.06.06 0 0 0-.064.03q-.28.509-.507 1.041a15.2 15.2 0 0 0-4.571 0 11 11 0 0 0-.514-1.04A.07.07 0 0 0 9.14 4a16.5 16.5 0 0 0-4.075 1.262.06.06 0 0 0-.027.024c-2.592 3.874-3.303 7.65-2.956 11.38a.07.07 0 0 0 .027.048 16.6 16.6 0 0 0 4.993 2.52.064.064 0 0 0 .072-.024 12 12 0 0 0 1.02-1.66.065.065 0 0 0-.034-.088 11 11 0 0 1-1.561-.745.064.064 0 0 1-.026-.08.1.1 0 0 1 .02-.025c.104-.078.21-.16.309-.242a.06.06 0 0 1 .065-.01c3.271 1.493 6.815 1.493 10.05 0a.06.06 0 0 1 .064.007c.1.082.205.167.31.245a.064.064 0 0 1-.007.105q-.748.436-1.561.742a.07.07 0 0 0-.036.037.07.07 0 0 0 .002.051q.45.868 1.02 1.66a.064.064 0 0 0 .072.024 16.5 16.5 0 0 0 5.006-2.52.06.06 0 0 0 .028-.048c.415-4.31-.701-8.054-2.96-11.377M8.684 14.395c-.987 0-1.796-.904-1.796-2.013 0-1.11.796-2.017 1.796-2.017 1.01 0 1.813.911 1.796 2.013 0 1.113-.796 2.017-1.796 2.017m6.646 0c-.986 0-1.796-.904-1.796-2.013 0-1.11.792-2.017 1.796-2.017 1.01 0 1.813.911 1.796 2.013 0 1.113-.79 2.017-1.796 2.017"
              }, null, -1)])])
            }]
          ]),
          eN = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          eV = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", eN, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M2.74 12.26c-.385-.268-.74-.535-.74-1.474 0-.94.502-1.321 1.039-1.586a1.6 1.6 0 0 1-.195-1.194c.169-.753.859-1.337 1.473-1.51-.266-.424-.349-.842-.033-1.356.405-.645.758-.89 2.319-.89h6.356c2.165 0 3.288 1.194 3.288 2.188v5.107c0 2.69-3.216 4.977-3.216 6.847l.232 2.33c.011.142-.017.49-.127.59-.175.173-.66.438-1.391.438-.478 0-.796-.09-1.17-.27-1.274-.605-1.605-2.138-1.605-3.372 0-.593.907-2.37 1.03-2.984 0 0-1.9.42-4.118.435-2.326.014-3.834-.415-3.834-1.841 0-.571.48-1.145.693-1.457m17.945 1.65h-1.488a1.316 1.316 0 0 1-1.315-1.312V5.562a1.31 1.31 0 0 1 1.315-1.312h1.488A1.316 1.316 0 0 1 22 5.563v7.035a1.31 1.31 0 0 1-1.315 1.313"
              }, null, -1)])])
            }]
          ]),
          eY = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            viewBox: "0 0 16 16"
          },
          eK = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", eY, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M3 15a.999.999 0 1 1 0-2h10a.999.999 0 1 1 0 2zm5.706-4.294c-.39.39-1.025.39-1.415 0l-4-4a1.002 1.002 0 0 1 1.415-1.415L7 7.584V2a.999.999 0 1 1 2 0v5.584l2.294-2.293a1.002 1.002 0 0 1 1.415 1.415l-4 4z"
              }, null, -1)])])
            }]
          ]),
          eJ = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          eX = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", eJ, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M22 12.037C22 6.493 17.523 2 12 2S2 6.493 2 12.037a10.04 10.04 0 0 0 7.586 9.743v-6.677H7.523v-3.066h2.063v-1.321c0-3.415 1.539-5 4.883-5 .633 0 1.726.126 2.176.252v2.776c-.235-.024-.645-.04-1.157-.04-1.64 0-2.273.624-2.273 2.243v1.09h3.265l-.562 3.066h-2.707V22C18.164 21.4 22 17.17 22 12.037"
              }, null, -1)])])
            }]
          ]),
          eQ = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          e0 = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", eQ, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                "fill-rule": "evenodd",
                d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12M5.388 11.518l2.256 2.254-1.66 2.963a.423.423 0 0 0 .355.63l2.775.09 2.285 2.602a.846.846 0 0 0 1.27.004l2.317-2.607 2.576-.089c.31-.01.503-.34.362-.615l-1.52-2.971 2.085-2.083c.453-.452.72-1.059.745-1.699l.182-4.546a.423.423 0 0 0-.723-.315l-4.43 4.457c-.344.347-.592.784-.655 1.268a3 3 0 0 0-.03.355l-.873-.238c-.44-.12-.903-.12-1.342.001l-.874.24-.013-.131a2.54 2.54 0 0 0-.73-1.548L5.33 5.11a.423.423 0 0 0-.723.303l.037 4.33a2.54 2.54 0 0 0 .745 1.775",
                "clip-rule": "evenodd"
              }, null, -1)])])
            }]
          ]),
          e1 = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "30",
            height: "30",
            fill: "none",
            viewBox: "0 0 30 30"
          },
          e2 = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", e1, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "m8.514 17.984-3.352-3.587a4.2 4.2 0 0 1-1.106-2.825L4 4.68c-.005-.604.676-.909 1.073-.482l6.563 7.05a4.17 4.17 0 0 1 1.083 2.462l.02.21 1.297-.382a3.53 3.53 0 0 1 1.994-.002l1.297.379c0-.157.018-.357.044-.566.093-.77.462-1.465.973-2.016l6.58-7.095c.405-.435 1.098-.112 1.075.502l-.27 7.235a4.2 4.2 0 0 1-1.108 2.704l-3.097 3.315 2.258 4.727c.21.44-.078.963-.538.98l-3.826.142-3.443 4.148a1.203 1.203 0 0 1-1.885-.006l-3.394-4.142-4.123-.143c-.47-.016-.758-.562-.528-1.002z"
              }, null, -1)])])
            }]
          ]),
          e5 = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          e4 = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", e5, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M6.688 4.344a1.093 1.093 0 1 0-2.188 0v15.312a1.093 1.093 0 1 0 2.188 0v-4.375l2.197-.55a6.08 6.08 0 0 1 4.187.458 6.05 6.05 0 0 0 4.844.253l1.186-.444c.427-.161.71-.568.71-1.026V5.506c0-.786-.827-1.299-1.53-.947l-.329.164a5.61 5.61 0 0 1-5.028 0 5.62 5.62 0 0 0-3.88-.427l-2.357.595z"
              }, null, -1)])])
            }]
          ]),
          e3 = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          e8 = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", e3, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M3.25 3.25v5.066a.92.92 0 0 0 1.385.808.92.92 0 0 0 .457-.808V6.395l3.033 3.033a.92.92 0 0 0 1.556-.405.92.92 0 0 0-.253-.898L6.395 5.092h1.92a.92.92 0 0 0 .809-.457.91.91 0 0 0 0-.928.92.92 0 0 0-.808-.457zm12.434 0a.92.92 0 0 0-.807.457.91.91 0 0 0 0 .928.92.92 0 0 0 .807.457h1.921l-3.033 3.033a.92.92 0 0 0 .405 1.556.92.92 0 0 0 .898-.253l3.033-3.033v1.92a.92.92 0 0 0 .457.809.91.91 0 0 0 .928 0 .92.92 0 0 0 .457-.808V3.25zM8.758 14.294a.93.93 0 0 0-.633.278l-3.033 3.033v-1.92a.92.92 0 0 0-.935-.934.92.92 0 0 0-.907.933v5.066h5.066a.92.92 0 0 0 .808-.457.91.91 0 0 0 0-.928.92.92 0 0 0-.808-.457H6.395l3.033-3.033a.92.92 0 0 0 .206-1.02.925.925 0 0 0-.876-.561m6.457 0a.92.92 0 0 0-.853.575.92.92 0 0 0 .21 1.006l3.033 3.033h-1.92a.92.92 0 0 0-.809.457.91.91 0 0 0 0 .928.92.92 0 0 0 .808.457h5.066v-5.066a.92.92 0 0 0-.936-.933.92.92 0 0 0-.906.933v1.921l-3.033-3.033a.92.92 0 0 0-.66-.278"
              }, null, -1)])])
            }]
          ]),
          e6 = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          e7 = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", e6, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M8.69 18.104c0 .083-.093.149-.21.149-.133.012-.226-.054-.226-.149 0-.083.093-.149.21-.149.12-.012.226.054.226.149m-1.255-.186c-.028.083.053.178.174.203.105.04.226 0 .25-.083s-.053-.178-.174-.215c-.104-.03-.221.012-.25.095m1.783-.07c-.117.029-.198.107-.186.202.012.083.117.137.238.108.117-.03.198-.108.186-.19-.012-.08-.121-.133-.238-.12M11.87 2C6.278 2 2 6.355 2 12.09c0 4.587 2.815 8.512 6.835 9.893.516.095.697-.231.697-.5 0-.257-.012-1.671-.012-2.54 0 0-2.822.62-3.415-1.232 0 0-.46-1.203-1.121-1.513 0 0-.924-.65.064-.637 0 0 1.004.082 1.557 1.067.883 1.596 2.363 1.137 2.94.864.092-.662.354-1.12.645-1.394-2.255-.256-4.529-.591-4.529-4.57 0-1.137.307-1.708.952-2.435-.105-.27-.448-1.378.105-2.809C7.56 6.016 9.5 7.401 9.5 7.401a9.3 9.3 0 0 1 2.532-.351c.86 0 1.726.12 2.533.351 0 0 1.939-1.39 2.782-1.117.552 1.436.21 2.54.105 2.809.645.732 1.04 1.302 1.04 2.435 0 3.991-2.375 4.31-4.63 4.57.372.327.686.947.686 1.92 0 1.393-.012 3.117-.012 3.456 0 .27.186.596.698.5C19.266 20.603 22 16.678 22 12.092 22 6.355 17.464 2 11.871 2M5.919 16.264c-.052.041-.04.136.029.215.064.066.157.095.21.041.052-.041.04-.136-.029-.215-.064-.066-.157-.095-.21-.041m-.435-.335c-.028.053.012.12.093.16.064.042.145.03.173-.028.028-.054-.012-.12-.093-.161-.08-.025-.145-.013-.173.029M6.79 17.4c-.064.054-.04.178.053.256.092.095.21.108.262.042.052-.054.028-.178-.053-.257-.088-.095-.21-.107-.262-.041m-.46-.608c-.064.041-.064.149 0 .244.065.095.174.137.226.095.065-.054.065-.161 0-.256-.056-.095-.16-.137-.225-.083"
              }, null, -1)])])
            }]
          ]);
        var e9 = a.p + "static/image/gold-fennec-coin-large.0d775625.webp",
          te = a.p + "static/image/gold-fennec-coin-small.9180d233.webp";
        let tt = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          ta = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tt, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M10.75 5.125c0-1.035-.84-1.875-1.875-1.875h-3.75c-1.035 0-1.875.84-1.875 1.875v3.75c0 1.035.84 1.875 1.875 1.875h3.75c1.035 0 1.875-.84 1.875-1.875zm0 10c0-1.035-.84-1.875-1.875-1.875h-3.75c-1.035 0-1.875.84-1.875 1.875v3.75c0 1.035.84 1.875 1.875 1.875h3.75c1.035 0 1.875-.84 1.875-1.875zm2.5-10v3.75c0 1.035.84 1.875 1.875 1.875h3.75c1.035 0 1.875-.84 1.875-1.875v-3.75c0-1.035-.84-1.875-1.875-1.875h-3.75c-1.035 0-1.875.84-1.875 1.875m7.5 10c0-1.035-.84-1.875-1.875-1.875h-3.75c-1.035 0-1.875.84-1.875 1.875v3.75c0 1.035.84 1.875 1.875 1.875h3.75c1.035 0 1.875-.84 1.875-1.875z"
              }, null, -1)])])
            }]
          ]),
          tl = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          ti = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tl, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M11.167 3a1 1 0 1 1 2 0v7.306q.692.216 1.333.585V4.333a1 1 0 1 1 2 0v9.722a4 4 0 0 0-2.888 2.11 8 8 0 0 1 3.555-.832.667.667 0 0 0 .666-.666v-2.015a3 3 0 0 1 .879-2.107 1 1 0 0 1 1.414 1.415 1 1 0 0 0-.293.702v2.671h-.004a5.33 5.33 0 0 1-1.558 3.562l-1.542 1.543c-1 1-2.357 1.562-3.771 1.562h-1.791A6.667 6.667 0 0 1 4.5 15.333V7a1 1 0 0 1 2 0v4.906a6.7 6.7 0 0 1 1.333-1.015V4.333a1 1 0 0 1 2 0v5.8Q10.495 10 11.167 10z"
              }, null, -1)])])
            }]
          ]),
          tn = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "25",
            height: "24",
            fill: "none",
            viewBox: "0 0 25 24"
          },
          tr = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tn, [...t[0] || (t[0] = [(0, l._)("g", {
                "clip-path": "url(#1818a044a)"
              }, [(0, l._)("path", {
                fill: "currentColor",
                d: "m3.003 15.019 8.235 7.688a1.85 1.85 0 0 0 2.524 0l8.235-7.688a6.82 6.82 0 0 0 2.17-4.99v-.265a6.513 6.513 0 0 0-11.12-4.607l-.547.547-.547-.547A6.516 6.516 0 0 0 .833 9.764v.265c0 1.891.784 3.7 2.17 4.99"
              })], -1), (0, l._)("defs", null, [(0, l._)("clipPath", {
                id: "1818a044a"
              }, [(0, l._)("path", {
                fill: "#fff",
                d: "M.833.333h23.333v23.333H.833z"
              })])], -1)])])
            }]
          ]),
          ts = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          to = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", ts, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M12 2.4a9.54 9.54 0 0 0-5.556 1.78l-.1-.1a.8.8 0 0 0-1.131 0L4.082 5.212a.8.8 0 0 0 0 1.132l.1.1A9.54 9.54 0 0 0 2.4 12c0 2.073.663 3.987 1.78 5.556l-.1.1a.8.8 0 0 0 0 1.131l1.131 1.132a.8.8 0 0 0 1.132 0l.1-.1A9.55 9.55 0 0 0 12 21.599a9.54 9.54 0 0 0 5.557-1.78l.1.1a.8.8 0 0 0 1.13 0l1.132-1.132a.8.8 0 0 0 0-1.13l-.1-.1A9.54 9.54 0 0 0 21.6 12a9.54 9.54 0 0 0-1.78-5.556l.1-.1a.8.8 0 0 0 0-1.132l-1.132-1.13a.8.8 0 0 0-1.131 0l-.1.1A9.54 9.54 0 0 0 12 2.4M12 4a7.95 7.95 0 0 1 4.408 1.33l-1.745 1.745A5.6 5.6 0 0 0 12 6.4c-.963 0-1.87.245-2.662.675L7.593 5.33A7.95 7.95 0 0 1 12 4M5.33 7.592l1.745 1.745c-.43.793-.675 1.7-.675 2.663s.245 1.87.675 2.662L5.33 16.406A7.95 7.95 0 0 1 4 12c0-1.628.492-3.143 1.33-4.408m13.34 0A7.95 7.95 0 0 1 20 12a7.95 7.95 0 0 1-1.33 4.408l-1.745-1.746c.43-.792.675-1.699.675-2.662s-.245-1.87-.675-2.663zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m-2.662 8.925c.792.43 1.7.675 2.662.675.964 0 1.87-.245 2.663-.675l1.745 1.745A7.95 7.95 0 0 1 12 20a7.95 7.95 0 0 1-4.407-1.331z"
              }, null, -1)])])
            }]
          ]),
          td = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          tc = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", td, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M11.6 2a.8.8 0 0 0-.56.228L2.315 9.366l-.03.023-.03.025v.002A.8.8 0 0 0 2.8 10.8h.8v8.8a1.6 1.6 0 0 0 1.6 1.6H18a1.6 1.6 0 0 0 1.6-1.6v-8.8h.8a.8.8 0 0 0 .545-1.386l-.012-.01-.055-.045L18 7.005V3.6a.8.8 0 0 0-.8-.8h-.8a.8.8 0 0 0-.8.8v1.442l-3.458-2.828A.8.8 0 0 0 11.6 2M9.2 13.2H14v6.4H9.2z"
              }, null, -1)])])
            }]
          ]),
          tu = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          tp = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tu, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M14.8 2.4A6.8 6.8 0 0 0 8 9.2c0 .834.159 1.629.433 2.367L2.4 17.6v4h4v-2.4h2.4v-2.4h2.4l1.233-1.233A6.8 6.8 0 0 0 14.8 16a6.8 6.8 0 0 0 0-13.6m1.6 3.2a2 2 0 1 1 .001 4 2 2 0 0 1 0-4"
              }, null, -1)])])
            }]
          ]),
          tg = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          tv = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tg, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M21.26 11.74c.385.268.74.535.74 1.474 0 .94-.502 1.321-1.039 1.586.22.356.29.787.195 1.194-.169.753-.859 1.337-1.473 1.51.265.424.349.842.033 1.356-.405.645-.758.89-2.319.89h-6.356c-2.165 0-3.287-1.194-3.287-2.187v-5.108c0-2.69 3.215-4.977 3.215-6.847l-.232-2.33c-.011-.142.017-.49.127-.59.175-.173.66-.438 1.391-.438.478 0 .796.09 1.17.27 1.274.605 1.605 2.138 1.605 3.372 0 .593-.907 2.37-1.03 2.984 0 0 1.9-.42 4.118-.435 2.326-.014 3.834.415 3.834 1.842 0 .57-.48 1.144-.693 1.456M3.314 10.09h1.488a1.316 1.316 0 0 1 1.315 1.312v7.036a1.31 1.31 0 0 1-1.315 1.312H3.315A1.317 1.317 0 0 1 2 18.438v-7.036a1.31 1.31 0 0 1 1.315-1.312"
              }, null, -1)])])
            }]
          ]),
          tm = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          th = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tm, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M19.714 3H4.282C3.575 3 3 3.583 3 4.298v15.404C3 20.417 3.575 21 4.282 21h15.432c.707 0 1.286-.583 1.286-1.298V4.298C21 3.583 20.421 3 19.714 3M8.44 18.429H5.772v-8.59h2.672v8.59zM7.106 8.665a1.548 1.548 0 0 1 0-3.094 1.55 1.55 0 0 1 1.547 1.547c0 .856-.691 1.547-1.547 1.547m11.335 9.764h-2.668V14.25c0-.996-.02-2.278-1.386-2.278-1.39 0-1.604 1.085-1.604 2.206v4.25h-2.667v-8.59h2.559v1.174h.036c.358-.675 1.23-1.387 2.527-1.387 2.7 0 3.203 1.78 3.203 4.095z"
              }, null, -1)])])
            }]
          ]),
          tf = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            fill: "none",
            viewBox: "0 0 28 28"
          },
          t_ = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tf, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M3.583 22.25c0 .427.161.854.49 1.177a1.67 1.67 0 0 0 2.359 0l2.36-2.36a1.67 1.67 0 0 0-2.36-2.359l-2.36 2.365c-.322.323-.489.75-.489 1.177m8.25.083v3.334c0 .921.745 1.666 1.667 1.666s1.666-.744 1.666-1.666v-3.334c0-.921-.745-1.666-1.666-1.666-.922 0-1.667.744-1.667 1.666m6.38-15.406a1.67 1.67 0 0 0 2.36 2.36l2.354-2.36a1.67 1.67 0 0 0-1.177-2.849c-.427 0-.855.162-1.177.49zm0 11.787a1.67 1.67 0 0 0 0 2.359l2.36 2.354a1.67 1.67 0 0 0 2.359-2.36l-2.36-2.359a1.67 1.67 0 0 0-2.359 0zM20.166 14c0 .922.745 1.667 1.667 1.667h3.333c.922 0 1.667-.745 1.667-1.667s-.745-1.667-1.667-1.667h-3.333c-.922 0-1.667.745-1.667 1.667",
                opacity: ".4"
              }, null, -1), (0, l._)("path", {
                fill: "currentColor",
                d: "M13.5.667c-.922 0-1.667.744-1.667 1.666v3.334c0 .922.745 1.666 1.667 1.666s1.666-.744 1.666-1.666V2.333c0-.922-.744-1.666-1.666-1.666M.167 14c0 .922.744 1.667 1.666 1.667h3.334c.921 0 1.666-.745 1.666-1.667s-.745-1.667-1.666-1.667H1.833c-.922 0-1.666.745-1.666 1.667m6.26-9.427a1.663 1.663 0 0 0-2.354 0 1.67 1.67 0 0 0 0 2.36l2.36 2.359a1.67 1.67 0 0 0 2.358-2.36z"
              }, null, -1)])])
            }]
          ]),
          ty = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          tw = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", ty, [...t[0] || (t[0] = [(0, l._)("path", {
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M5.636 5.652a9 9 0 1 0 12.728 0M12 3.016v9"
              }, null, -1)])])
            }]
          ]),
          tb = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          tk = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tb, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M5 5a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2zm-1 7a1 1 0 0 0 1 1h14a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1m0 6a1 1 0 0 0 1 1h14a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1"
              }, null, -1)])])
            }]
          ]),
          tC = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          t$ = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tC, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M8.016 4.736a1.6 1.6 0 0 0-1.623-.03 1.61 1.61 0 0 0-.82 1.403v11.783c0 .583.314 1.119.82 1.403a1.61 1.61 0 0 0 1.623-.03l9.641-5.892a1.608 1.608 0 0 0 0-2.745z"
              }, null, -1)])])
            }]
          ]),
          tE = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "148",
            height: "32",
            fill: "none",
            viewBox: "0 0 148 32"
          },
          tA = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tE, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M0 28.484v-21.1h8.105c4.476 0 8.106 3.623 8.106 8.089s-3.63 8.088-8.106 8.088H5.286v4.922zm7.577-16.176h-2.29v6.33h2.29c1.903 0 3.172-1.407 3.172-3.166s-1.27-3.164-3.172-3.164M24.598 23.56H19.1V2.463h5.498zm19.091 0h-8.106c-4.475 0-8.105-3.621-8.105-8.087s3.63-8.088 8.105-8.088h8.105zm-7.577-4.923h2.29v-6.33h-2.29c-1.903 0-3.172 1.407-3.172 3.165s1.269 3.165 3.172 3.165M54.754 32h-7.33v-4.923H54.4c1.868 0 3.243-1.372 3.243-3.235v-.281h-10.22V7.385h5.286v11.252h4.934V7.385h5.286v16.808c0 4.502-3.454 7.807-8.176 7.807M73.992 7.385h8.81v16.492c0 4.712-3.418 8.123-8.14 8.123h-7.014v-5.275h6.978c1.656 0 2.89-1.23 2.89-2.883v-.281h-3.524c-4.476 0-8.106-3.622-8.106-8.088s3.63-8.088 8.106-8.088m-2.643 8.088c0 1.758 1.268 3.164 3.171 3.164h2.996v-6.33H74.52c-1.903 0-3.171 1.407-3.171 3.165m30.466 8.088H93.71c-4.476 0-8.106-3.621-8.106-8.087s3.63-8.088 8.106-8.088h8.105zm-7.577-4.923h2.291v-6.33h-2.29c-1.904 0-3.172 1.407-3.172 3.165s1.268 3.165 3.171 3.165m16.599 4.923h-5.287V7.386h16.387c3.983 0 7.225 3.235 7.225 7.208v8.968h-5.286v-9.32a1.953 1.953 0 0 0-1.939-1.933h-1.938V23.56h-5.286V12.308h-3.876zm37.163 0h-8.105c-4.476 0-8.106-3.621-8.106-8.087s3.63-8.088 8.106-8.088H148zm-7.577-4.923h2.291v-6.33h-2.291c-1.903 0-3.171 1.407-3.171 3.165s1.268 3.165 3.171 3.165"
              }, null, -1)])])
            }]
          ]),
          tT = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          tS = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tT, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M5.018 10.75a1.25 1.25 0 1 0 0 2.5h5.82v5.821a1.25 1.25 0 0 0 2.5 0V13.25h5.822a1.25 1.25 0 1 0 0-2.5h-5.821V4.929a1.25 1.25 0 1 0-2.5 0v5.821z"
              }, null, -1)])])
            }]
          ]),
          tO = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "29",
            height: "28",
            fill: "none",
            viewBox: "0 0 29 28"
          },
          tM = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tO, [...t[0] || (t[0] = [(0, l._)("g", {
                "clip-path": "url(#e77bdb4da)"
              }, [(0, l._)("path", {
                fill: "currentColor",
                d: "M15.53 3.505a.657.657 0 0 0-.71.867 3.3 3.3 0 0 1 .176 1.072 3.284 3.284 0 0 1-3.273 3.286l-.66-.004a2.63 2.63 0 0 0-1.735 4.601h-.562a2.96 2.96 0 0 0-1.805 5.299A2.954 2.954 0 0 0 4.5 21.542 2.953 2.953 0 0 0 7.453 24.5h15.094a2.953 2.953 0 0 0 2.953-2.958 2.954 2.954 0 0 0-2.46-2.916 2.96 2.96 0 0 0 1.148-2.341 2.953 2.953 0 0 0-2.954-2.958h-.562a2.63 2.63 0 0 0-1.735-4.6h-.225a3.943 3.943 0 0 0-3.183-5.22m-3.155 10.48a1.31 1.31 0 0 1 1.313 1.314 1.316 1.316 0 0 1-1.313 1.314 1.31 1.31 0 0 1-1.312-1.314 1.316 1.316 0 0 1 1.312-1.315m3.938 1.314a1.316 1.316 0 0 1 1.312-1.315 1.31 1.31 0 0 1 1.313 1.315 1.316 1.316 0 0 1-1.313 1.314 1.31 1.31 0 0 1-1.312-1.314m2.625 4.448a.44.44 0 0 1-.09.276c-.337.43-1.62 1.848-3.848 1.848s-3.51-1.421-3.847-1.848a.44.44 0 0 1-.09-.276c0-.279.225-.505.504-.505h6.866c.279 0 .505.226.505.505"
              })], -1), (0, l._)("defs", null, [(0, l._)("clipPath", {
                id: "e77bdb4da"
              }, [(0, l._)("path", {
                fill: "#fff",
                d: "M4 3.5h21v21H4z"
              })])], -1)])])
            }]
          ]),
          tP = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          tL = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tP, [...t[0] || (t[0] = [(0, l._)("g", {
                "clip-path": "url(#64e0c26ca)"
              }, [(0, l._)("path", {
                fill: "currentColor",
                d: "M9.441 4.688 10.801 7H7.938a1.562 1.562 0 1 1 0-3.125h.085c.582 0 1.125.309 1.418.813m-4.941.75C4.5 6 4.637 6.53 4.875 7H3.25A1.25 1.25 0 0 0 2 8.25v2.5c0 .691.559 1.25 1.25 1.25h17.5A1.25 1.25 0 0 0 22 10.75v-2.5A1.25 1.25 0 0 0 20.75 7h-1.625a3.44 3.44 0 0 0-3.062-5h-.086c-1.247 0-2.403.66-3.036 1.734L12 5.34l-.941-1.602A3.52 3.52 0 0 0 8.023 2h-.085A3.44 3.44 0 0 0 4.5 5.438m13.125 0c0 .863-.7 1.562-1.562 1.562H13.2l1.359-2.312a1.65 1.65 0 0 1 1.418-.813h.085c.864 0 1.563.7 1.563 1.563M3.25 13.25v6.875C3.25 21.16 4.09 22 5.125 22h5.625v-8.75zm10 8.75h5.625c1.035 0 1.875-.84 1.875-1.875V13.25h-7.5z"
              })], -1), (0, l._)("defs", null, [(0, l._)("clipPath", {
                id: "64e0c26ca"
              }, [(0, l._)("path", {
                fill: "#fff",
                d: "M2 2h20v20H2z"
              })])], -1)])])
            }]
          ]),
          tx = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          tD = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tx, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M10.1 4.32c-.191 0-.37.028-.54.075-.133.036-.27.075-.39.135-.006.002-.01.011-.015.015-.13.068-.248.152-.36.24L8.78 4.8c-.11.09-.208.18-.3.285l-.015.015a2.6 2.6 0 0 0-.255.36 2.2 2.2 0 0 0-.675-.15 1.76 1.76 0 0 0-.945.21c-.546.3-.93.756-1.335 1.095-.415.347-1.654 1.258-2.76 2.055S.41 10.17.41 10.17a.478.478 0 0 0 .026.876.48.48 0 0 0 .514-.096s1.005-.7 2.115-1.5 2.323-1.684 2.82-2.1c.482-.405.853-.816 1.17-.99.26-.142.463-.184.84 0a2 2 0 0 0-.015.195v5.715l-.66.3a.48.48 0 1 0 .39.87l4.44-2.04h.015c.632-.337 1.294-.647 1.8-.75s.76-.06.975.225c.253.334.311.701.195 1.11s-.426.853-.96 1.23c-1.12.791-2.85 1.38-2.85 1.38l-.09.03-.075.06c-.89.758-1.406 1.478-2.055 1.965s-1.451.81-3.105.81h-.03l-5.22.3a.482.482 0 0 0 .06.96l5.19-.3h.03c1.226-.004 2.117-.206 2.82-.525.122.36.373.668.765.795a2.2 2.2 0 0 0 1.53-.06 2.4 2.4 0 0 0 .525-.315c.152.349.424.675.84.825.437.158.872.193 1.26.09s.705-.322 1.005-.6c.05-.047.084-.082.12-.12.101.07.217.116.345.15.622.163 1.35-.015 1.905-.57q.729-.73.885-2.25h4.185q.215-.001.42-.045a2.1 2.1 0 0 0 1.62-1.635q.044-.205.045-.42V6.51c0-.073-.008-.139-.015-.21a2 2 0 0 0-.165-.615 2 2 0 0 0-.21-.375c-.002-.004.002-.011 0-.015a2.3 2.3 0 0 0-1.41-.93 2 2 0 0 0-.42-.045zm-1.26 2.4h14.4v1.92H8.84zm2.4 9.12h.33c-.028.338-.077.846-.135 1.17-.008.04-.01.079-.015.12a.5.5 0 0 0-.075.06c-.206.246-.445.45-.69.555-.246.105-.491.143-.84.03-.086-.028-.184-.167-.195-.39.619-.472 1.074-1.009 1.62-1.545m1.305 0h1.8c-.034.223-.064.478-.09.735-.032.313-.06.688.015 1.065-.026.036-.038.043-.075.09-.079.1-.218.244-.165.195-.234.218-.435.341-.615.39s-.37.036-.675-.075c-.163-.058-.248-.163-.315-.36a1.5 1.5 0 0 1-.045-.705c.082-.454.14-1.033.165-1.335m2.775 0h1.635c-.098.808-.32 1.31-.585 1.575-.356.356-.658.401-.99.315-.11-.03-.12-.056-.165-.255s-.045-.51-.015-.795c.032-.307.079-.606.12-.84"
              }, null, -1)])])
            }]
          ]),
          tR = {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          },
          tI = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tR, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M7.077 18.562a1.093 1.093 0 1 0 0 2.188h3.281a3.283 3.283 0 0 0 3.282-3.281V6.985l2.508 2.509a1.095 1.095 0 0 0 1.549-1.548L13.322 3.57a1.097 1.097 0 0 0-1.549 0L7.398 7.946a1.095 1.095 0 0 0 1.549 1.548l2.505-2.509v10.484c0 .605-.489 1.093-1.094 1.093Z"
              }, null, -1)])])
            }]
          ]),
          tz = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          tU = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tz, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M11.425 1.603c-4.336-.11-8.221 3.06-8.908 7.344-.513 3.206.708 6.151 2.87 8.055.664.584 1.013 1.448 1.013 2.332V22.4h8v-1.247c0-.689.44-1.3 1.094-1.517l2.612-.87a1.6 1.6 0 0 0 1.094-1.52v-3.05l1.814-.626a.8.8 0 0 0 .405-1.275l-.022-.026-.024-.027-2.206-2.644c-.32-4.41-3.278-7.882-7.742-7.995m.416 4.811q.153-.03.317.002a.8.8 0 0 1 .626.94l-1.6 8a.8.8 0 0 1-.94.628.8.8 0 0 1-.628-.942l1.6-8a.8.8 0 0 1 .625-.628m-4.493 1.6q.155.03.296.122a.8.8 0 0 1 .222 1.11L6.56 11.2l1.305 1.956a.8.8 0 1 1-1.332.888l-1.6-2.4a.8.8 0 0 1 0-.888l1.6-2.4a.8.8 0 0 1 .814-.342m7.702 0a.8.8 0 0 1 .816.342l1.6 2.4a.8.8 0 0 1 0 .888l-1.6 2.4a.8.8 0 0 1-1.332-.888L15.84 11.2l-1.305-1.956a.8.8 0 0 1 .516-1.23"
              }, null, -1)])])
            }]
          ]),
          tB = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          tj = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tB, [...t[0] || (t[0] = [(0, l._)("g", {
                "clip-path": "url(#7b42aafca)"
              }, [(0, l._)("path", {
                fill: "currentColor",
                d: "M17.625 10.313a7.3 7.3 0 0 1-1.406 4.313l4.45 4.455a1.127 1.127 0 0 1-1.592 1.592l-4.45-4.454a7.27 7.27 0 0 1-4.315 1.406A7.31 7.31 0 0 1 3 10.313 7.31 7.31 0 0 1 10.313 3a7.31 7.31 0 0 1 7.312 7.313m-7.312 5.062a5.06 5.06 0 0 0 4.677-7 5.062 5.062 0 1 0-4.677 7"
              })], -1), (0, l._)("defs", null, [(0, l._)("clipPath", {
                id: "7b42aafca"
              }, [(0, l._)("path", {
                fill: "#fff",
                d: "M3 3h18v18H3z"
              })])], -1)])])
            }]
          ]),
          tH = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            viewBox: "0 0 20 20"
          },
          tZ = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tH, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M3.175 1.388C1.993.794.814 2.233 1.41 3.543l2.16 4.74c.15.33.431.552.753.599l5.995.857c.116.015.205.129.205.262s-.089.246-.205.262l-5.995.856c-.322.047-.603.27-.754.599l-2.16 4.74c-.595 1.31.584 2.746 1.77 2.155l14.916-7.466c.874-.438.874-1.854 0-2.292z"
              }, null, -1)])])
            }]
          ]);
        var tq = a.p + "static/image/silver-fennec-coin-large.b78bedd8.webp",
          tW = a.p + "static/image/silver-fennec-coin-small.fbd4492a.webp";
        let tF = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          tG = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tF, [...t[0] || (t[0] = [(0, l._)("g", {
                "clip-path": "url(#449655d9a)"
              }, [(0, l._)("path", {
                fill: "currentColor",
                d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20m-3.59-7.285c.7.808 1.895 1.66 3.59 1.66s2.89-.852 3.59-1.66a.625.625 0 1 1 .945.82c-.87 1-2.383 2.09-4.535 2.09s-3.664-1.09-4.535-2.09a.625.625 0 1 1 .945-.82m-.77-4.59a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m7.5-1.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
              })], -1), (0, l._)("defs", null, [(0, l._)("clipPath", {
                id: "449655d9a"
              }, [(0, l._)("path", {
                fill: "#fff",
                d: "M2 2h20v20H2z"
              })])], -1)])])
            }]
          ]),
          tN = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          tV = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tN, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M12 2C6.476 2 2 6.476 2 12s4.476 10 10 10 10-4.476 10-10S17.524 2 12 2m4.637 6.802c-.15 1.581-.802 5.42-1.133 7.19-.141.75-.415 1-.681 1.024-.581.053-1.02-.383-1.585-.754-.88-.577-1.38-.935-2.23-1.5-.988-.65-.347-1.008.214-1.593.149-.153 2.705-2.48 2.754-2.69.008-.027.012-.124-.049-.177-.06-.052-.145-.032-.205-.02q-.133.03-4.218 2.787-.597.411-1.085.399c-.359-.008-1.044-.202-1.556-.367-.625-.202-1.125-.31-1.08-.658q.031-.27.745-.552a514 514 0 0 1 5.83-2.512c2.78-1.153 3.356-1.355 3.73-1.363.085 0 .267.02.388.117.079.07.13.166.14.27q.035.199.021.4"
              }, null, -1)])])
            }]
          ]),
          tY = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          tK = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tY, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M11.6 2C6.298 2 2 6.298 2 11.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S16.902 2 11.6 2m0 1.6a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6m-7.2 8.8a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6m2.674 4.857a.8.8 0 1 1-1.13-1.13.8.8 0 0 1 1.13 1.13m0-10.183a.8.8 0 1 1-1.13-1.129.8.8 0 0 1 1.13 1.13m3.395 5.657a1.6 1.6 0 0 1 0-2.262c.393-.393 3.581-2.688 5.897-4.34.465-.331 1.037.24.705.705-1.652 2.316-3.947 5.504-4.34 5.897a1.6 1.6 0 0 1-2.262 0m6.788 4.526a.8.8 0 1 1-1.131-1.13.8.8 0 0 1 1.13 1.13M18.8 12.4a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6"
              }, null, -1)])])
            }]
          ]),
          tJ = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          tX = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tJ, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                "fill-rule": "evenodd",
                d: "M16.5 4.483v.227a49 49 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.036-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.665l-.209.036a.75.75 0 1 1-.256-1.478A49 49 0 0 1 7.5 4.71v-.227c0-1.565 1.213-2.9 2.816-2.951a53 53 0 0 1 3.369 0c1.603.05 2.815 1.386 2.815 2.95M10.364 3.03a51 51 0 0 1 3.273 0C14.39 3.055 15 3.689 15 4.483v.112a50 50 0 0 0-6 0v-.112c0-.794.609-1.428 1.364-1.452m-.355 5.945a.75.75 0 1 0-1.5.057l.347 9a.75.75 0 1 0 1.499-.057zm5.48.057a.75.75 0 0 0-1.498-.057l-.347 9a.75.75 0 0 0 1.5.058z",
                "clip-rule": "evenodd"
              }, null, -1)])])
            }]
          ]),
          tQ = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          t0 = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", tQ, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M16.6 5.248h2.454l-5.36 6.143L20 19.752h-4.937l-3.87-5.07-4.422 5.07H4.313l5.733-6.572L4 5.248h5.062l3.494 4.633zm-.863 13.033h1.36L8.322 6.642h-1.46z"
              }, null, -1)])])
            }]
          ]),
          t1 = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          t2 = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", t1, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M10.75 2c.69 0 1.25.559 1.25 1.25v8.125H9.5V3.25c0-.691.559-1.25 1.25-1.25m3.75 6.25c.691 0 1.25.559 1.25 1.25V12a1.25 1.25 0 1 1-2.5 0V9.5c0-.691.559-1.25 1.25-1.25m2.5 2.5a1.25 1.25 0 1 1 2.5 0v2.5a1.25 1.25 0 1 1-2.5 0zM5.644 4l3.227 7.375h-2.73L3.355 5A1.25 1.25 0 0 1 4 3.355 1.246 1.246 0 0 1 5.644 4M6.7 12.645l-.008-.02h3.75a1.562 1.562 0 1 1 0 3.125H8.254a.627.627 0 0 0-.625.625c0 .344.281.625.625.625h2.187a2.81 2.81 0 0 0 2.813-2.812v-.024a2.5 2.5 0 0 0 2.64-.086 2.5 2.5 0 0 0 3.61 1.336v.336a6.25 6.25 0 0 1-6.25 6.25h-2.41a6.25 6.25 0 0 1-4.418-1.832l-.453-.453A4.98 4.98 0 0 1 4.5 16.18v-1.055a2.5 2.5 0 0 1 2.2-2.48"
              }, null, -1)])])
            }]
          ]),
          t5 = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          t4 = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", t5, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M12 1.602c-3.393 0-4.8 2.176-4.8 4.8 0 .883.422 1.77.422 1.77-.17.097-.448.407-.378.958.131 1.026.576 1.287.86 1.31.108.957 1.136 2.182 1.496 2.36v1.6c-.8 2.4-7.2.8-7.2 6.4h9.22a7.2 7.2 0 0 1-.42-2.4 7.2 7.2 0 0 1 4.015-6.45c.327-.456.626-1.017.682-1.51.283-.022.728-.284.86-1.31.07-.552-.209-.86-.379-.958 0 0 .422-.802.422-1.77 0-1.943-.762-3.6-2.4-3.6 0 0-.568-1.2-2.4-1.2M18.4 12.8a5.6 5.6 0 1 0 0 11.2 5.6 5.6 0 0 0 0-11.2m0 2.4a.8.8 0 0 1 .8.8v1.6h1.6a.8.8 0 1 1 0 1.6h-1.6v1.6a.8.8 0 1 1-1.6 0v-1.6H16a.8.8 0 1 1 0-1.6h1.6V16a.8.8 0 0 1 .8-.8"
              }, null, -1)])])
            }]
          ]),
          t3 = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          t8 = (0, n.default)({}, [
            ["render", function(e, t) {
              return (0, l.wg)(), (0, l.iD)("svg", t3, [...t[0] || (t[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M5.6 3.2a2.41 2.41 0 0 0-2.4 2.4v12.8a2.4 2.4 0 0 0 2.4 2.4h13.6a1.6 1.6 0 0 0 1.6-1.6V8a1.6 1.6 0 0 0-1.6-1.6H5.6a.787.787 0 0 1-.8-.8c0-.452.348-.8.8-.8h12a.8.8 0 1 0 0-1.6zm12 8.8a1.6 1.6 0 1 1 .001 3.2 1.6 1.6 0 0 1 0-3.2"
              }, null, -1)])])
            }]
          ]);
        var t6 = a.p + "static/svg/de-DE.204eaf51.svg",
          t7 = a.p + "static/svg/en-US.abf88f30.svg",
          t9 = a.p + "static/svg/es-ES.be100724.svg",
          ae = a.p + "static/svg/fr-FR.6a3e73fa.svg",
          at = a.p + "static/svg/id-ID.4ba97704.svg",
          aa = a.p + "static/svg/it-IT.bb28fb0f.svg",
          al = a.p + "static/svg/pl-PL.b481ad86.svg";
        let ai = {
          action: v,
          arcade: k,
          all_games: h,
          all_series: _,
          all_tags: w,
          boys: A,
          "bubble-shooter": $,
          solitaire: ep,
          car: S,
          clicker: M,
          idle: Z,
          skill: er,
          girls: I,
          horror: j,
          io: W,
          multiplayer: G,
          new: V,
          puzzle: K,
          random: X,
          recommended: ee,
          shooting: ea,
          simulation: ei,
          soccer: ec,
          sports: ev,
          strategy: eh,
          trending_now: e_,
          "two-player": ew,
          snake: eo,
          funny: D,
          gun: U,
          drawing: L,
          check: eS,
          chevron_down: eM,
          chevron_l: eL,
          chevron_r: eL,
          chevron_up: eD,
          close: eU,
          purchase: tD,
          complete_reg: eZ,
          collapse: ej,
          clock: eI,
          fennek_circle: e0,
          fennek: e2,
          fullscreen: e8,
          hand: ti,
          help: to,
          home: tc,
          key: tp,
          loader: t_,
          logout: tw,
          menu: tk,
          play: t$,
          "scroll-to-top": tI,
          sdk: tU,
          send: tZ,
          timer: tK,
          trash: tX,
          user_add: t4,
          wallet: t8,
          two_fingers: t2,
          present: tL,
          flag: e4,
          twitter: t0,
          bluesky: e$,
          github: e7,
          like: tv,
          dislike: eV,
          download: eK,
          gold_fennec_coin_small: te,
          gold_fennec_coin_large: e9,
          silver_fennec_coin_small: tW,
          silver_fennec_coin_large: tq,
          linked_in: th,
          plus: tS,
          discord: eG,
          telegram: tV,
          facebook: eX,
          smile: tG,
          grid: ta,
          poop: tM,
          heart: tr,
          bridge: eA,
          "en-US": t7,
          "es-ES": t9,
          "de-DE": t6,
          "fr-FR": ae,
          "it-IT": aa,
          "pt-BR": a.p + "static/svg/pt-BR.c23d802d.svg",
          "tr-TR": a.p + "static/svg/tr-TR.ac282537.svg",
          "pl-PL": al,
          "id-ID": at,
          "badge-hot": o,
          "badge-hot-text": s,
          "badge-new": c,
          "badge-new-text": d,
          "badge-top": p,
          "badge-top-text": u,
          check_for_checkbox: r,
          playgama_logo: tA,
          search: tj,
          android: ek,
          desktop: eW
        };
        var an = a(8612);
        let ar = ["alt"];
        var as = (0, l.aZ)({
          __name: "Icon",
          props: {
            name: {},
            alt: {},
            lazy: {
              type: Boolean
            }
          },
          setup(e) {
            let t = (0, l.Fl)(() => ai[e.name]),
              a = (0, l.Fl)(() => e.alt || `${e.name} icon`),
              i = (0, an.t)(),
              n = (0, l.Fl)(() => {
                if ("loader" === e.name || "chevron_l" === e.name) return e.name
              });
            return (r, s) => "string" == typeof t.value ? ((0, l.wg)(), (0, l.iD)("img", (0, l.dG)({
              key: 0,
              alt: a.value
            }, e.lazy ? {
              key: t.value,
              "data-src": t.value,
              "data-allow-mismatch": "",
              class: [r.$style.icon, r.$style.img, n.value && r.$style[`icon-${n.value}`], "lazyload"],
              loading: "lazy"
            } : {
              src: t.value,
              class: [r.$style.icon, r.$style.img, n.value && r.$style[`icon-${n.value}`]]
            }), null, 16, ar)) : !e.lazy || (0, l.SU)(i) ? ((0, l.wg)(), (0, l.j4)((0, l.LL)(t.value), {
              key: 1,
              class: (0, l.C_)([r.$style.icon, n.value && r.$style[`icon-${n.value}`]]),
              role: "img",
              "aria-label": a.value
            }, null, 8, ["class", "aria-label"])) : ((0, l.wg)(), (0, l.iD)("div", {
              key: 2,
              class: (0, l.C_)([r.$style.icon, r.$style.placeholder])
            }, null, 2))
          }
        });
        let ao = {},
          ad = {};
        ad.$style || (ad.$style = {}), ad.$style.style0 = {
          icon: "fk6zU",
          placeholder: "h5Z3H",
          img: "mG2hv",
          "icon-loader": "bxylZ",
          iconLoader: "bxylZ",
          "loader-spin": "huR47",
          loaderSpin: "huR47",
          "icon-chevron_l": "PS2Z3",
          iconChevronL: "PS2Z3"
        }, ao.$style = Object.values(ad.$style).reduce((e, t) => Object.assign(e, t), {});
        var ac = (0, n.default)(as, [
          ["__cssModules", ao]
        ])
      },
      3816: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return i
          }
        });
        var l = a(5595),
          i = (0, l.aZ)({
            __name: "LazyHydration",
            props: {
              hydrate: {
                type: Function
              }
            },
            setup(e) {
              let t = (0, l.aZ)({
                  render() {
                    return this.$slots.default?.()
                  }
                }),
                a = (0, l.RC)({
                  loader: () => Promise.resolve(t),
                  hydrate: e.hydrate
                });
              return (e, t) => ((0, l.wg)(), (0, l.j4)((0, l.SU)(a), null, {
                default: (0, l.w5)(() => [(0, l.WI)(e.$slots, "default")]),
                _: 3
              }))
            }
          })
      },
      1083: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return d
          }
        });
        var l = a(5595),
          i = a(9632),
          n = (0, l.aZ)({
            __name: "Link",
            props: {
              color: {},
              hoverAnimation: {},
              disabled: {
                type: Boolean
              },
              to: {},
              externalTo: {}
            },
            setup: e => (t, a) => ((0, l.wg)(), (0, l.j4)(i.Z, {
              to: e.to,
              externalTo: e.externalTo,
              target: e.target,
              class: (0, l.C_)([t.$style.link, e.color && t.$style[`color_${e.color}`], e.hoverAnimation && t.$style[`hover_animation_${e.hoverAnimation}`], e.disabled ? t.$style.disabled : ""]),
              disabled: e.disabled,
              onClick: e.onClick
            }, {
              default: (0, l.w5)(() => [(0, l.WI)(t.$slots, "default")]),
              _: 3
            }, 8, ["to", "externalTo", "target", "class", "disabled", "onClick"]))
          }),
          r = a(3744);
        let s = {},
          o = {};
        o.$style || (o.$style = {}), o.$style.style0 = {
          "color_purple-500": "AVhWF",
          colorPurple500: "AVhWF",
          "color_purple-600": "DbhOo",
          colorPurple600: "DbhOo",
          color_golden: "KXyo8",
          colorGolden: "KXyo8",
          color_white: "gM_0P",
          colorWhite: "gM_0P",
          "color_white-80": "nncb7",
          colorWhite80: "nncb7",
          "color_white-60": "rfDtO",
          colorWhite60: "rfDtO",
          "color_white-40": "XrVcW",
          colorWhite40: "XrVcW",
          color_rainbow: "dOFPQ",
          colorRainbow: "dOFPQ",
          "color-change": "_vdd4",
          colorChange: "_vdd4",
          link: "Z4mIu",
          hover_animation_rainbow: "hrG_P",
          hoverAnimationRainbow: "hrG_P",
          disabled: "Vidyj"
        }, s.$style = Object.values(o.$style).reduce((e, t) => Object.assign(e, t), {});
        var d = (0, r.default)(n, [
          ["__cssModules", s]
        ])
      },
      4237: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return g
          }
        });
        var l = a(5595),
          i = a(2893),
          n = a(1083),
          r = a(4886);
        let s = ["aria-label"],
          o = ["aria-label"];
        var d = (0, l.aZ)({
            __name: "Logo",
            props: {
              mode: {},
              noLink: {
                type: Boolean
              }
            },
            setup: e => (t, a) => ((0, l.wg)(), (0, l.j4)((0, l.LL)(t.noLink ? "div" : n.Z), (0, l.dG)(t.noLink ? {} : {
              to: {
                name: (0, l.SU)(r.m8).MAIN
              },
              color: "purple-500"
            }, {
              "data-interface-target": t.noLink ? "logo" : "logo-link",
              class: [t.$style.logo, t.$style[`logo_${t.mode}`]]
            }), {
              default: (0, l.w5)(() => ["short" === e.mode ? ((0, l.wg)(), (0, l.iD)("svg", {
                key: 0,
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 28 26",
                "aria-label": t.$tr("logo.alt")
              }, [...a[0] || (a[0] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M0 21.143V4h6.54c3.611 0 6.54 2.943 6.54 6.571 0 3.629-2.929 6.572-6.54 6.572H4.265v4zM6.113 8H4.265v5.143h1.848c1.536 0 2.56-1.143 2.56-2.572C8.673 9.143 7.649 8 6.113 8m14.778-4H28v13.4c0 3.829-2.758 6.6-6.568 6.6h-5.659v-4.286h5.63c1.337 0 2.332-1 2.332-2.343v-.228H20.89c-3.61 0-6.54-2.943-6.54-6.572S17.281 4 20.891 4m-2.132 6.571c0 1.429 1.023 2.572 2.559 2.572h2.417V8h-2.417c-1.536 0-2.56 1.143-2.56 2.571"
              }, null, -1)])], 8, s)) : "full" === e.mode ? ((0, l.wg)(), (0, l.iD)("svg", {
                key: 1,
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 132 19",
                "aria-label": t.$tr("logo.alt")
              }, [...a[1] || (a[1] = [(0, l._)("path", {
                fill: "currentColor",
                d: "M0 16.357V3.5h4.92a4.925 4.925 0 0 1 4.92 4.929 4.925 4.925 0 0 1-4.92 4.928H3.21v3zM4.6 6.5H3.208v3.857h1.39c1.156 0 1.926-.857 1.926-1.928 0-1.072-.77-1.929-1.926-1.929M14.764 13.357h-3.337V.5h3.337zM26.186 13.357h-4.92a4.925 4.925 0 0 1-4.921-4.928 4.925 4.925 0 0 1 4.92-4.929h4.92zm-4.6-3h1.39V6.5h-1.39c-1.155 0-1.925.857-1.925 1.929 0 1.071.77 1.928 1.925 1.928M32.735 18.5h-4.45v-3h4.236c1.134 0 1.968-.836 1.968-1.971v-.172h-6.204V3.5h3.21v6.857h2.994V3.5h3.21v10.243c0 2.743-2.097 4.757-4.964 4.757M44.246 3.5h5.348v10.05c0 2.871-2.075 4.95-4.942 4.95h-4.257v-3.214h4.236c1.005 0 1.754-.75 1.754-1.757v-.172h-2.14a4.925 4.925 0 0 1-4.92-4.928 4.925 4.925 0 0 1 4.92-4.929M42.64 8.429c0 1.071.77 1.928 1.926 1.928h1.818V6.5h-1.818c-1.156 0-1.926.857-1.926 1.929M60.968 13.357h-4.92a4.925 4.925 0 0 1-4.92-4.928 4.925 4.925 0 0 1 4.92-4.929h4.92zm-4.6-3h1.391V6.5h-1.39c-1.155 0-1.926.857-1.926 1.929 0 1.071.77 1.928 1.926 1.928M66.277 13.357h-3.209V3.5h9.948A4.395 4.395 0 0 1 77.4 7.893v5.464h-3.209V7.68c0-.643-.534-1.179-1.176-1.179h-1.177v6.857H68.63V6.5h-2.353zM88.67 13.357h-4.921a4.925 4.925 0 0 1-4.92-4.928 4.925 4.925 0 0 1 4.92-4.929h4.92zm-4.6-3h1.39V6.5h-1.39c-1.155 0-1.926.857-1.926 1.929 0 1.071.77 1.928 1.926 1.928M94.596 11.412a2.084 2.084 0 1 1-4.168.002 2.084 2.084 0 0 1 4.168-.002M120.876 13.357h-3.209V3.5h9.947A4.395 4.395 0 0 1 132 7.893v5.464h-3.209V7.68c0-.643-.535-1.179-1.177-1.179h-1.176v6.857h-3.209V6.5h-2.353zM100.546 13.385h4.249v-3h-3.929c-1.155 0-1.925-.857-1.925-1.928 0-1.072.77-1.929 1.925-1.929h3.929v-3h-4.249a4.925 4.925 0 0 0-4.92 4.929 4.925 4.925 0 0 0 4.92 4.928"
              }, null, -1), (0, l._)("path", {
                fill: "currentColor",
                "fill-rule": "evenodd",
                d: "M111.13 13.537c2.823 0 5.112-2.297 5.112-5.13 0-2.834-2.289-5.131-5.112-5.131s-5.112 2.297-5.112 5.13c0 2.834 2.288 5.131 5.112 5.131m0-3.196a1.93 1.93 0 0 0 1.927-1.934 1.93 1.93 0 0 0-1.927-1.935 1.93 1.93 0 0 0-1.928 1.935c0 1.068.863 1.934 1.928 1.934",
                "clip-rule": "evenodd"
              }, null, -1)])], 8, o)) : ((0, l.wg)(), (0, l.j4)(i.Z, {
                key: 2,
                name: "playgama_logo",
                alt: t.$tr("logo.alt")
              }, null, 8, ["alt"]))]),
              _: 1
            }, 16, ["data-interface-target", "class"]))
          }),
          c = a(3744);
        let u = {},
          p = {};
        p.$style || (p.$style = {}), p.$style.style0 = {
          logo: "qIiB_",
          logo_short: "DeF8V",
          logoShort: "DeF8V",
          logo_full: "qtvNu",
          logoFull: "qtvNu",
          logo_default: "rFQWP",
          logoDefault: "rFQWP"
        }, u.$style = Object.values(p.$style).reduce((e, t) => Object.assign(e, t), {});
        var g = (0, c.default)(d, [
          ["__cssModules", u]
        ])
      },
      2172: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return u
          }
        });
        var l = a(5595),
          i = a(7773),
          n = a(6049);
        let r = ["src", "alt"];
        var s = (0, l.aZ)({
            __name: "ModalContainer",
            props: {
              title: {},
              description: {},
              image: {},
              alt: {},
              wide: {
                type: Boolean
              },
              isOpened: {
                type: Boolean
              },
              withOutsideClickClose: {
                type: Boolean,
                default: !0
              },
              hasCloseBtn: {
                type: Boolean,
                default: !0
              },
              wrapperClass: {}
            },
            emits: ["closeModal"],
            setup(e, {
              emit: t
            }) {
              function a(e) {
                e.preventDefault(), t("closeModal")
              }

              function s(t) {
                e.withOutsideClickClose && t.target === t.currentTarget && a(t)
              }
              let o = e => e?.showModal(),
                d = (0, l.iH)(0);

              function c() {
                d.value = document.documentElement.scrollTop, requestAnimationFrame(() => {
                  document.body.scrollTop = d.value, document.documentElement.scrollTop = 1
                })
              }

              function u() {
                document.body.scrollTop = 0, document.documentElement.scrollTop = d.value
              }
              return (t, d) => ((0, l.wg)(), (0, l.j4)(l.uT, {
                enterActiveClass: t.$style.transition_enter_active,
                enterFromClass: t.$style.transition_enter_from,
                leaveActiveClass: t.$style.transition_leave_active,
                leaveToClass: t.$style.transition_leave_to,
                appear: "",
                onBeforeEnter: c,
                onAfterLeave: u
              }, {
                default: (0, l.w5)(() => [e.isOpened ? ((0, l.wg)(), (0, l.iD)("dialog", {
                  key: 0,
                  ref: o,
                  class: (0, l.C_)([t.$style.dialog, {
                    [t.$style.wide]: e.wide
                  }]),
                  onClick: s,
                  onCancel: a
                }, [e.hasCloseBtn ? ((0, l.wg)(), (0, l.j4)(i.Z, {
                  key: 0,
                  icon: "close",
                  color: "white-60",
                  visual: "ghost",
                  interfaceTarget: "close",
                  class: (0, l.C_)(t.$style.close_override),
                  onClick: a
                }, null, 8, ["class"])) : (0, l.kq)("", !0), (0, l._)("div", {
                  class: (0, l.C_)([t.$style.dialog_wrap, e.wrapperClass])
                }, [(0, l._)("div", {
                  class: (0, l.C_)(t.$style.dialog_content)
                }, [e.image ? ((0, l.wg)(), (0, l.iD)("img", {
                  key: 0,
                  class: (0, l.C_)(t.$style.dialog_image),
                  src: e.image,
                  alt: e.alt
                }, null, 10, r)) : (0, l.kq)("", !0), e.title ? ((0, l.wg)(), (0, l.j4)(n.Z, {
                  key: 1,
                  type: "header",
                  size: "s",
                  responsive: !1
                }, {
                  default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.title), 1)]),
                  _: 1
                })) : (0, l.kq)("", !0), e.description ? ((0, l.wg)(), (0, l.j4)(n.Z, {
                  key: 2,
                  is: "p",
                  class: (0, l.C_)(t.$style.dialog_description),
                  size: "s",
                  responsive: !1
                }, {
                  default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.description), 1)]),
                  _: 1
                }, 8, ["class"])) : (0, l.kq)("", !0)], 2), (0, l.WI)(t.$slots, "custom-content"), t.$slots.actions ? ((0, l.wg)(), (0, l.iD)("div", {
                  key: 0,
                  class: (0, l.C_)(t.$style.dialog_actions)
                }, [(0, l.WI)(t.$slots, "actions")], 2)) : (0, l.kq)("", !0)], 2)], 34)) : (0, l.kq)("", !0)]),
                _: 3
              }, 8, ["enterActiveClass", "enterFromClass", "leaveActiveClass", "leaveToClass"]))
            }
          }),
          o = a(3744);
        let d = {},
          c = {};
        c.$style || (c.$style = {}), c.$style.style0 = {
          transition_enter_active: "YfckA",
          transitionEnterActive: "YfckA",
          transition_leave_active: "q3R83",
          transitionLeaveActive: "q3R83",
          dialog: "RBmZY",
          transition_enter_from: "Rjm7u",
          transitionEnterFrom: "Rjm7u",
          transition_leave_to: "nIPe3",
          transitionLeaveTo: "nIPe3",
          dialog_wrap: "UDd4v",
          dialogWrap: "UDd4v",
          dialog_image: "svxs0",
          dialogImage: "svxs0",
          dialog_content: "Oce_y",
          dialogContent: "Oce_y",
          dialog_description: "cWUzM",
          dialogDescription: "cWUzM",
          dialog_actions: "eYQM4",
          dialogActions: "eYQM4",
          close_override: "eEtZJ",
          closeOverride: "eEtZJ",
          "#": "xozBk",
          wide: "kHi_z"
        }, d.$style = Object.values(c.$style).reduce((e, t) => Object.assign(e, t), {});
        var u = (0, o.default)(s, [
          ["__cssModules", d]
        ])
      },
      3299: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return d
          }
        });
        var l = a(5595);
        let i = ["aria-hidden"];
        var n = (0, l.aZ)({
            __name: "SeoOnly",
            props: {
              ariaHidden: {
                type: Boolean
              }
            },
            setup: e => (t, a) => ((0, l.wg)(), (0, l.iD)("div", {
              class: (0, l.C_)(t.$style.seo_only),
              "aria-hidden": e.ariaHidden
            }, [(0, l.WI)(t.$slots, "default")], 10, i))
          }),
          r = a(3744);
        let s = {},
          o = {};
        o.$style || (o.$style = {}), o.$style.style0 = {
          seo_only: "VDs2I",
          seoOnly: "VDs2I"
        }, s.$style = Object.values(o.$style).reduce((e, t) => Object.assign(e, t), {});
        var d = (0, r.default)(n, [
          ["__cssModules", s]
        ])
      },
      1409: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return c
          }
        });
        var l = a(5595),
          i = a(2893);
        let n = ["for"];
        var r = (0, l.aZ)({
            __name: "TextInput",
            props: {
              is: {
                default: "input"
              },
              id: {},
              labelText: {},
              modelValue: {},
              disabled: {
                type: Boolean
              },
              withHiddenLabel: {
                type: Boolean
              },
              value: {},
              prefixIcon: {},
              size: {
                default: "m"
              },
              type: {}
            },
            emits: ["input", "update:modelValue"],
            setup(e, {
              emit: t
            }) {
              let a = (0, l.Fl)(() => !e.labelText || e.withHiddenLabel),
                r = (0, l.iH)(!1),
                s = (0, l.Fl)(() => e.modelValue ?? e.value),
                o = (0, l.Fl)(() => "number" === e.type || "number" == typeof s.value);
              return (d, c) => ((0, l.wg)(), (0, l.iD)("label", {
                class: (0, l.C_)([d.$attrs.class, d.$style.rootLabel, d.$style[d.size], {
                  [d.$style.disabled]: d.disabled,
                  [d.$style.invalid]: r.value,
                  [d.$style.filled]: !!s.value,
                  [d.$style.withVisibleLabel]: !a.value
                }]),
                for: d.id
              }, [d.labelText ? ((0, l.wg)(), (0, l.iD)(l.HY, {
                key: 0
              }, [a.value ? (0, l.kq)("", !0) : ((0, l.wg)(), (0, l.iD)("span", {
                key: 0,
                class: (0, l.C_)(d.$style.labelText),
                "aria-hidden": "true"
              }, (0, l.zw)(d.labelText), 3)), (0, l._)("span", {
                class: (0, l.C_)([d.$style.labelText, d.$style.animatedLabelText, {
                  [d.$style.invisible]: a.value
                }])
              }, (0, l.zw)(d.labelText), 3)], 64)) : (0, l.kq)("", !0), d.prefixIcon ? ((0, l.wg)(), (0, l.j4)(i.Z, {
                key: 1,
                name: d.prefixIcon,
                class: (0, l.C_)(d.$style.prefix_icon)
              }, null, 8, ["name", "class"])) : (0, l.kq)("", !0), ((0, l.wg)(), (0, l.j4)((0, l.LL)(d.is), (0, l.dG)({
                ...d.$attrs,
                class: void 0
              }, {
                id: d.id,
                class: d.$style.input,
                disabled: d.disabled,
                type: e.type,
                value: s.value,
                onInput: c[0] || (c[0] = e => {
                  let a;
                  return r.value = !e.target.validity.valid, void(t("update:modelValue", o.value ? Number.isFinite(+(a = e.target.value)) ? +a : 0 : e.target.value), t("input", e))
                })
              }), null, 16, ["id", "class", "disabled", "type", "value"]))], 10, n))
            }
          }),
          s = a(3744);
        let o = {},
          d = {};
        d.$style || (d.$style = {}), d.$style.style0 = {
          rootLabel: "HYjLc",
          withVisibleLabel: "_ltEM",
          m: "JxVeS",
          l: "RnMta",
          labelText: "G8_H_",
          animatedLabelText: "hKAqk",
          invisible: "Bm8V8",
          input: "whKuC",
          disabled: "C9FDu",
          animateBorder: "qnbCr",
          filled: "WddOa",
          invalid: "IG2xb",
          prefix_icon: "UmXfk",
          prefixIcon: "UmXfk"
        }, o.$style = Object.values(d.$style).reduce((e, t) => Object.assign(e, t), {});
        var c = (0, s.default)(r, [
          ["__cssModules", o]
        ])
      },
      2635: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return d
          }
        });
        var l = a(5595);
        let i = ["innerHTML"];
        var n = (0, l.aZ)({
            __name: "Tooltip",
            props: {
              content: {},
              position: {
                default: "top"
              },
              offset: {
                default: 22
              },
              theme: {
                default: "green"
              }
            },
            setup(e) {
              let t = (0, l.iH)(null),
                a = (0, l.iH)(null),
                n = (0, l.iH)(!1),
                r = (0, l.iH)(null),
                s = (0, l.iH)(e.position),
                o = () => {
                  let l = t.value?.firstElementChild;
                  if (!a.value || !l) return;
                  let i = a.value.getBoundingClientRect(),
                    n = l.getBoundingClientRect(),
                    r = window.innerHeight,
                    o = window.innerWidth;
                  s.value = e.position;
                  let d = {
                      top: n.top,
                      bottom: r - n.bottom,
                      left: n.left,
                      right: o - n.right
                    },
                    c = e.offset + 6 + 10;
                  switch (e.position) {
                    case "top":
                      d.top < i.height + c && (s.value = "bottom");
                      break;
                    case "bottom":
                      d.bottom < i.height + c && (s.value = "top");
                      break;
                    case "left":
                      d.left < i.width + c && (s.value = "right");
                      break;
                    case "right":
                      d.right < i.width + c && (s.value = "left")
                  }
                },
                d = () => {
                  r.value && (clearTimeout(r.value), r.value = null), n.value = !1
                },
                c = () => {
                  r.value && clearTimeout(r.value), r.value = window.setTimeout(() => {
                    n.value = !0
                  }, 100)
                },
                u = (0, l.iH)({}),
                p = () => {
                  d()
                };
              return (0, l.YP)(n, a => {
                a && (0, l.Y3)(() => {
                  o(), (() => {
                    let a = t.value?.firstElementChild;
                    if (!a) return;
                    let l = a?.getBoundingClientRect(),
                      i = 0,
                      n = 0,
                      r = "",
                      o = e.offset + 6;
                    switch (s.value) {
                      case "top":
                        i = l.top - o, n = l.left + l.width / 2, r = "translate(-50%, -100%)";
                        break;
                      case "bottom":
                        i = l.bottom + o, n = l.left + l.width / 2, r = "translate(-50%, 0)";
                        break;
                      case "left":
                        i = l.top + l.height / 2, n = l.left - o, r = "translate(-100%, -50%)";
                        break;
                      case "right":
                        i = l.top + l.height / 2, n = l.right + o, r = "translate(0, -50%)"
                    }
                    u.value = {
                      position: "fixed",
                      top: `${i}px`,
                      left: `${n}px`,
                      transform: r
                    }
                  })()
                })
              }), (0, l.bv)(() => {
                window.addEventListener("resize", o), window.addEventListener("scroll", p, !0)
              }), (0, l.Jd)(() => {
                r.value && clearTimeout(r.value), window.removeEventListener("resize", o), window.removeEventListener("scroll", p, !0)
              }), (r, o) => ((0, l.wg)(), (0, l.iD)(l.HY, null, [e.content ? ((0, l.wg)(), (0, l.iD)("span", {
                key: 0,
                ref_key: "trigger",
                ref: t,
                class: (0, l.C_)(r.$style.triggerElement),
                onMouseenter: c,
                onMouseleave: d,
                onFocus: c,
                onBlur: d
              }, [(0, l.WI)(r.$slots, "default")], 34)) : (0, l.WI)(r.$slots, "default", {
                key: 1
              }), n.value ? ((0, l.wg)(), (0, l.j4)(l.lR, {
                key: 2,
                to: "body"
              }, [(0, l._)("div", {
                ref_key: "tooltip",
                ref: a,
                class: (0, l.C_)([r.$style.tooltip, r.$style[`tooltip-${s.value}`], r.$style[`tooltip-${s.value}-${e.theme}`], e.theme ? r.$style[`tooltip-theme-${e.theme}`] : ""]),
                style: (0, l.j5)(u.value),
                innerHTML: r.content
              }, null, 14, i)])) : (0, l.kq)("", !0)], 64))
            }
          }),
          r = a(3744);
        let s = {},
          o = {};
        o.$style || (o.$style = {}), o.$style.style0 = {
          triggerElement: "Yodqo",
          tooltip: "UdOTX",
          "tooltip-theme-green": "FOSil",
          tooltipThemeGreen: "FOSil",
          "tooltip-theme-dark": "t5HG_",
          tooltipThemeDark: "t5HG_",
          "tooltip-top": "AWTK4",
          tooltipTop: "AWTK4",
          "slide-top": "xZuIF",
          slideTop: "xZuIF",
          "tooltip-bottom": "Rf446",
          tooltipBottom: "Rf446",
          "slide-bottom": "L35VT",
          slideBottom: "L35VT",
          "tooltip-left": "ZbdWJ",
          tooltipLeft: "ZbdWJ",
          "slide-left": "ix78r",
          slideLeft: "ix78r",
          "tooltip-right": "N53QV",
          tooltipRight: "N53QV",
          "slide-right": "ly5PJ",
          slideRight: "ly5PJ",
          "tooltip-top-green": "CRkXf",
          tooltipTopGreen: "CRkXf",
          "tooltip-top-dark": "mYeb1",
          tooltipTopDark: "mYeb1",
          "tooltip-bottom-green": "jZ3QY",
          tooltipBottomGreen: "jZ3QY",
          "tooltip-bottom-dark": "hiQiG",
          tooltipBottomDark: "hiQiG",
          "tooltip-left-green": "A86mj",
          tooltipLeftGreen: "A86mj",
          "tooltip-left-dark": "EKH32",
          tooltipLeftDark: "EKH32",
          "tooltip-right-green": "cY5NS",
          tooltipRightGreen: "cY5NS",
          "tooltip-right-dark": "WMIon",
          tooltipRightDark: "WMIon"
        }, s.$style = Object.values(o.$style).reduce((e, t) => Object.assign(e, t), {});
        var d = (0, r.default)(n, [
          ["__cssModules", s]
        ])
      },
      6049: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return o
          }
        });
        var l = a(5595),
          i = (0, l.aZ)({
            __name: "Typography",
            props: {
              type: {
                default: "paragraph"
              },
              is: {
                default: "span"
              },
              size: {},
              accent: {
                type: Boolean
              },
              semibold: {
                type: Boolean
              },
              responsive: {
                type: Boolean,
                default: !0
              }
            },
            setup: e => (t, a) => ((0, l.wg)(), (0, l.j4)((0, l.LL)(e.is), {
              class: (0, l.C_)([t.$style.typography, {
                [t.$style.accent]: e.accent,
                [t.$style.semibold]: e.semibold,
                [t.$style.responsive]: e.responsive
              }, t.$style[`${e.type}_${e.size}`]])
            }, {
              default: (0, l.w5)(() => [(0, l.WI)(t.$slots, "default")]),
              _: 3
            }, 8, ["class"]))
          }),
          n = a(3744);
        let r = {},
          s = {};
        s.$style || (s.$style = {}), s.$style.style0 = {
          typography: "lGeKc",
          caption_xs: "pcmGV",
          captionXs: "pcmGV",
          accent: "hiFVh",
          "header_all-caps": "ixT2Y",
          headerAllCaps: "ixT2Y",
          paragraph_xxxl: "_R23q",
          paragraphXxxl: "_R23q",
          paragraph_xxl: "hyfWh",
          paragraphXxl: "hyfWh",
          paragraph_xl: "KBx9V",
          paragraphXl: "KBx9V",
          "paragraph_all-caps": "l1T0L",
          paragraphAllCaps: "l1T0L",
          label_xxxl: "Rptpr",
          labelXxxl: "Rptpr",
          label_xxl: "p1Dhq",
          labelXxl: "p1Dhq",
          label_xl: "FzTAE",
          labelXl: "FzTAE",
          "label_all-caps": "d7ctk",
          labelAllCaps: "d7ctk",
          caption_xxxl: "wP_Bx",
          captionXxxl: "wP_Bx",
          caption_xxl: "EcR1I",
          captionXxl: "EcR1I",
          caption_xl: "MD1yy",
          captionXl: "MD1yy",
          caption_l: "SJ9lC",
          captionL: "SJ9lC",
          paragraph_l: "PPJuT",
          paragraphL: "PPJuT",
          paragraph_m: "IcsTQ",
          paragraphM: "IcsTQ",
          paragraph_s: "fTslZ",
          paragraphS: "fTslZ",
          paragraph_xs: "WjhNL",
          paragraphXs: "WjhNL",
          label_l: "DZNLz",
          labelL: "DZNLz",
          label_m: "FPu4F",
          labelM: "FPu4F",
          label_s: "l6zjh",
          labelS: "l6zjh",
          label_xs: "NrJPp",
          labelXs: "NrJPp",
          caption_s: "texVl",
          captionS: "texVl",
          caption_m: "Qf3t5",
          captionM: "Qf3t5",
          "caption_all-caps": "YXMYa",
          captionAllCaps: "YXMYa",
          header_xxxl: "BCysT",
          headerXxxl: "BCysT",
          header_xxl: "j5VZs",
          headerXxl: "j5VZs",
          header_xl: "nS8A5",
          headerXl: "nS8A5",
          header_l: "clztK",
          headerL: "clztK",
          header_m: "qYvzA",
          headerM: "qYvzA",
          header_s: "BAqaC",
          headerS: "BAqaC",
          header_xs: "V0wvp",
          headerXs: "V0wvp",
          responsive: "gmXBd",
          semibold: "Ahpss"
        }, r.$style = Object.values(s.$style).reduce((e, t) => Object.assign(e, t), {});
        var o = (0, n.default)(i, [
          ["__cssModules", r]
        ])
      },
      8788: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return t6
          }
        });
        var l = a(5595),
          i = a(144);
        a(9560), a(9734);
        var n = a(1083),
          r = a(6049),
          s = a(4886),
          o = (0, l.aZ)({
            __name: "Copyright",
            setup: e => (e, t) => ((0, l.wg)(), (0, l.j4)(r.Z, {
              is: "div",
              type: "paragraph",
              size: "xs"
            }, {
              default: (0, l.w5)(() => [(0, l.Wm)(n.Z, {
                to: {
                  name: (0, l.SU)(s.m8).MAIN
                },
                color: "white-40"
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.$tr("navigation.copyright", {
                  year: String(new Date().getFullYear())
                })), 1)]),
                _: 1
              }, 8, ["to"])]),
              _: 1
            }))
          }),
          d = a(9938),
          c = a(3811),
          u = a(7626),
          p = a(2512),
          g = a(9632),
          v = a(2893),
          m = (0, l.aZ)({
            __name: "LinkSwitcher",
            props: {
              title: {},
              icon: {},
              to: {},
              externalTo: {},
              isSelected: {
                type: Boolean
              },
              dataInterfaceTarget: {},
              target: {},
              lazyIcon: {
                type: Boolean,
                default: !0
              }
            },
            emits: ["click"],
            setup: (e, {
              emit: t
            }) => (a, i) => ((0, l.wg)(), (0, l.j4)(g.Z, {
              class: (0, l.C_)([a.$style.link, {
                [a.$style.selected]: e.isSelected
              }]),
              "data-interface-target": e.dataInterfaceTarget,
              to: e.to,
              target: e.target,
              externalTo: e.externalTo,
              disabled: e.isSelected,
              onClick: i[0] || (i[0] = e => t("click", e))
            }, {
              default: (0, l.w5)(() => [(0, l.Wm)(v.Z, {
                name: e.icon,
                alt: `switch_to_${e.icon}`,
                class: (0, l.C_)(a.$style.icon),
                lazy: e.lazyIcon
              }, null, 8, ["name", "alt", "class", "lazy"]), (0, l.Wm)(r.Z, {
                type: "label",
                size: "xs",
                accent: "",
                responsive: !1
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(a.title), 1)]),
                _: 1
              })]),
              _: 1
            }, 8, ["class", "data-interface-target", "to", "target", "externalTo", "disabled"]))
          }),
          h = a(3744);
        let f = {},
          _ = {};
        _.$style || (_.$style = {}), _.$style.style0 = {
          link: "MzFpr",
          selected: "oH46A",
          icon: "fZIE8"
        }, f.$style = Object.values(_.$style).reduce((e, t) => Object.assign(e, t), {});
        let y = (0, h.default)(m, [
          ["__cssModules", f]
        ]);
        var w = a(8977),
          b = (0, l.aZ)({
            __name: "LocaleSwitcher",
            props: {
              locale: {},
              href: {},
              isSelected: {
                type: Boolean
              }
            },
            emits: ["click"],
            setup(e, {
              emit: t
            }) {
              let a = (0, l.Fl)(() => w.q6[e.locale]);
              return (i, n) => ((0, l.wg)(), (0, l.j4)(y, {
                title: a.value,
                icon: i.locale,
                externalTo: e.href,
                dataInterfaceTarget: "switch-locale",
                isSelected: e.isSelected,
                onClick: n[0] || (n[0] = a => t("click", e.locale))
              }, null, 8, ["title", "icon", "externalTo", "isSelected"]))
            }
          }),
          k = (0, l.aZ)({
            __name: "LocaleSwitchersList",
            props: {
              languageLinks: {}
            },
            setup(e) {
              let t = (0, u.s2)(),
                {
                  getLocalizedUrls: a
                } = (0, c.W)(),
                i = (0, d.yj)(),
                n = (0, l.Fl)(() => i.meta.noLocaleInRoute),
                r = (0, l.Fl)(() => {
                  let l = t.getSupportedLocales(),
                    i = e.languageLinks || (n.value ? a({
                      forRoute: {
                        name: s.m8.MAIN
                      }
                    }) : a());
                  return l.map(e => ({
                    href: i[e],
                    locale: e,
                    isSelected: e === t.currentLocale.value
                  }))
                });

              function o(e) {
                e !== t.currentLocale.value && (t.setPreferredLocale(e), (0, p.oi)(e))
              }
              return (e, t) => ((0, l.wg)(), (0, l.iD)("div", {
                class: (0, l.C_)(e.$style.locale_switchers)
              }, [((0, l.wg)(!0), (0, l.iD)(l.HY, null, (0, l.Ko)(r.value, ({
                locale: e,
                href: t,
                isSelected: a
              }) => ((0, l.wg)(), (0, l.j4)(b, {
                key: e,
                locale: e,
                href: t,
                isSelected: a,
                onClick: o
              }, null, 8, ["locale", "href", "isSelected"]))), 128))], 2))
            }
          });
        let C = {},
          $ = {};
        $.$style || ($.$style = {}), $.$style.style0 = {
          locale_switchers: "AONqH",
          localeSwitchers: "AONqH"
        }, C.$style = Object.values($.$style).reduce((e, t) => Object.assign(e, t), {});
        let E = (0, h.default)(k, [
          ["__cssModules", C]
        ]);
        var A = a(2157),
          T = a(2413),
          S = a(6132),
          O = a(4600),
          M = a(7788),
          P = a.p + "static/svg/android_image.2c9435a8.svg";
        let L = ["src"];
        var x = (0, l.aZ)({
          __name: "AndroidBadge",
          setup(e) {
            let {
              VUE_APP_ANDROID_APP_URL: t
            } = (0, M.Z)();
            return (e, a) => ((0, l.wg)(), (0, l.j4)(g.Z, {
              externalTo: (0, l.SU)(t),
              target: "_blank",
              class: (0, l.C_)(e.$style.android_link)
            }, {
              default: (0, l.w5)(() => [(0, l._)("img", {
                src: (0, l.SU)(P),
                alt: "Playgama Android",
                loading: "lazy",
                class: (0, l.C_)(e.$style.android_badge)
              }, null, 10, L), (0, l.Wm)(r.Z, {
                size: "s",
                class: (0, l.C_)(e.$style.android_link_desc),
                accent: ""
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.$tr("navigation.android_app_link")), 1)]),
                _: 1
              }, 8, ["class"]), (0, l.Wm)(v.Z, {
                name: "chevron_r",
                class: (0, l.C_)(e.$style.android_link_icon)
              }, null, 8, ["class"])]),
              _: 1
            }, 8, ["externalTo", "class"]))
          }
        });
        let D = {},
          R = {};
        R.$style || (R.$style = {}), R.$style.style0 = {
          android_link: "Le7es",
          androidLink: "Le7es",
          android_badge: "M2go1",
          androidBadge: "M2go1",
          android_link_icon: "KWdTT",
          androidLinkIcon: "KWdTT",
          android_link_desc: "CgvI3",
          androidLinkDesc: "CgvI3"
        }, D.$style = Object.values(R.$style).reduce((e, t) => Object.assign(e, t), {});
        let I = (0, h.default)(x, [
          ["__cssModules", D]
        ]);
        var z = (0, l.aZ)({
          __name: "Footer",
          props: {
            languageLinks: {},
            additionalCategories: {}
          },
          setup(e) {
            let t = (0, T.y)(),
              {
                mainData: a
              } = (0, S.G)(),
              i = (0, l.Fl)(() => (0, O.nh)(t)),
              d = (0, l.Fl)(() => a.value.menuHighlightCategoriesList || []),
              c = (0, l.Fl)(() => [...d.value.map(({
                title: e,
                location: t
              }) => ({
                title: e,
                to: t,
                dataInterfaceTarget: "category"
              })), {
                title: t("navigation.random"),
                to: {
                  name: s.m8.RANDOM_GAME
                },
                dataInterfaceTarget: "random-game"
              }, {
                title: i.value.allTags.title,
                to: i.value.allTags.to
              }, {
                title: i.value.allSeries.title,
                to: i.value.allSeries.to
              }]),
              {
                getCategoryRoute: u
              } = (0, A.w)(),
              p = (0, l.Fl)(() => a.value.menuCategoriesList?.map(({
                title: e,
                location: t
              }) => ({
                title: e,
                to: t
              }))),
              g = (0, l.Fl)(() => e.additionalCategories?.map(({
                title: e,
                hru: t,
                categoryType: a
              }) => ({
                title: e,
                to: u({
                  hru: t,
                  type: a
                })
              }))),
              v = (0, l.Fl)(() => [...g.value || p.value || [], {
                title: i.value.allGames.title,
                to: i.value.allGames.to
              }]),
              m = (0, l.Fl)(() => [{
                title: t("navigation.blog"),
                externalTo: O.bQ,
                target: "_blank"
              }, ...(0, O.EO)(t)]);
            return (t, a) => ((0, l.wg)(), (0, l.iD)("div", {
              class: (0, l.C_)(t.$style.footer),
              "data-interface-section": "footer"
            }, [(0, l.Wm)(I, {
              class: (0, l.C_)(t.$style.android_badge_override)
            }, null, 8, ["class"]), (0, l._)("div", {
              class: (0, l.C_)([t.$style.links_group, t.$style.links_menu_highlight])
            }, [(0, l.Wm)(r.Z, {
              is: "ul",
              type: "paragraph",
              size: "xs",
              class: (0, l.C_)(t.$style.links)
            }, {
              default: (0, l.w5)(() => [((0, l.wg)(!0), (0, l.iD)(l.HY, null, (0, l.Ko)(c.value, e => ((0, l.wg)(), (0, l.iD)("li", {
                key: e.title
              }, [(0, l.Wm)(n.Z, {
                to: e.to,
                "data-interface-target": e.dataInterfaceTarget || "navigation-link",
                class: (0, l.C_)(t.$style.links_item),
                color: "white-60"
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.title), 1)]),
                _: 2
              }, 1032, ["to", "data-interface-target", "class"])]))), 128))]),
              _: 1
            }, 8, ["class"])], 2), (0, l._)("div", {
              class: (0, l.C_)(t.$style.main_links)
            }, [(0, l._)("div", {
              class: (0, l.C_)([t.$style.links_group, t.$style.links_topic_categories])
            }, [(0, l.Wm)(r.Z, {
              is: "ul",
              type: "paragraph",
              size: "xs",
              class: (0, l.C_)(t.$style.links)
            }, {
              default: (0, l.w5)(() => [((0, l.wg)(!0), (0, l.iD)(l.HY, null, (0, l.Ko)(v.value, e => ((0, l.wg)(), (0, l.iD)("li", {
                key: e.title
              }, [(0, l.Wm)(n.Z, {
                to: e.to,
                class: (0, l.C_)(t.$style.links_item),
                color: "white-60",
                "data-interface-target": "navigation-link"
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.title), 1)]),
                _: 2
              }, 1032, ["to", "class"])]))), 128))]),
              _: 1
            }, 8, ["class"])], 2), (0, l._)("div", {
              class: (0, l.C_)(t.$style.links_group)
            }, [(0, l.Wm)(r.Z, {
              is: "ul",
              type: "paragraph",
              size: "xs",
              class: (0, l.C_)(t.$style.links)
            }, {
              default: (0, l.w5)(() => [((0, l.wg)(!0), (0, l.iD)(l.HY, null, (0, l.Ko)(m.value, e => ((0, l.wg)(), (0, l.iD)("li", {
                key: e.title
              }, [(0, l.Wm)(n.Z, {
                externalTo: e.externalTo,
                to: e.to,
                target: e.target,
                class: (0, l.C_)(t.$style.links_item),
                color: "white-60",
                "data-interface-target": e.dataInterfaceTarget || "navigation-link"
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.title), 1)]),
                _: 2
              }, 1032, ["externalTo", "to", "target", "class", "data-interface-target"])]))), 128))]),
              _: 1
            }, 8, ["class"])], 2)], 2), (0, l.Wm)(r.Z, {
              is: "div",
              type: "paragraph",
              size: "xs",
              class: (0, l.C_)(t.$style.other)
            }, {
              default: (0, l.w5)(() => [(0, l.Wm)(E, {
                languageLinks: e.languageLinks,
                class: (0, l.C_)(t.$style.language_override)
              }, null, 8, ["languageLinks", "class"]), (0, l.Wm)(o, {
                class: (0, l.C_)(t.$style.copyright_link_override)
              }, null, 8, ["class"])]),
              _: 1
            }, 8, ["class"])], 2))
          }
        });
        let U = {},
          B = {};
        B.$style || (B.$style = {}), B.$style.style0 = {
          footer: "LRhum",
          language_override: "mzocs",
          languageOverride: "mzocs",
          "#": "tZ9_s",
          main_links: "mB6Qj",
          mainLinks: "mB6Qj",
          links_group: "jXmBC",
          linksGroup: "jXmBC",
          android_badge_override: "LHDeG",
          androidBadgeOverride: "LHDeG",
          other: "YhM4p",
          links: "Z0A6J",
          links_item: "l6FQ4",
          linksItem: "l6FQ4",
          copyright_link_override: "oxRPs",
          copyrightLinkOverride: "oxRPs",
          links_menu_highlight: "uWcFK",
          linksMenuHighlight: "uWcFK",
          links_topic_categories: "pbZZO",
          linksTopicCategories: "pbZZO"
        }, U.$style = Object.values(B.$style).reduce((e, t) => Object.assign(e, t), {});
        let j = (0, h.default)(z, [
          ["__cssModules", U]
        ]);
        var H = a(7773);
        a(2394);
        var Z = a(4423),
          q = a(6381),
          W = (0, l.aZ)({
            __name: "TaskWidget",
            props: {
              task: {},
              clickable: {
                type: Boolean
              },
              disabled: {
                type: Boolean
              },
              isRegister: {
                type: Boolean
              }
            },
            emits: ["claimTask", "taskStart", "taskClick"],
            setup(e, {
              emit: t
            }) {
              let a = (0, d.tv)(),
                i = (0, T.y)(),
                {
                  mainData: n
                } = (0, S.G)(),
                o = (0, l.Fl)(() => ({
                  status: "",
                  id: "",
                  gameLink: "",
                  coins: n.value.p2eBonusInfo.dailyBonus,
                  buttonLabel: i("tasks.claim"),
                  description: i("tasks.daily_bonus_alt"),
                  type: ""
                })),
                c = (0, l.Fl)(() => {
                  if (e.isRegister) return o.value;
                  if (e.task) {
                    if ("VISIT_EVERYDAY" === e.task.type) {
                      let {
                        status: t,
                        coins: a,
                        task_id: l,
                        type: n
                      } = e.task;
                      return {
                        status: t,
                        coins: a,
                        id: l,
                        type: n,
                        buttonLabel: i("tasks.claim"),
                        description: i("tasks.daily_bonus_alt")
                      }
                    }
                    if ("RANDOM_GAME" === e.task.type) {
                      let {
                        status: t,
                        coins: a,
                        settings: l,
                        task_id: n,
                        type: r
                      } = e.task;
                      return {
                        status: t,
                        type: r,
                        id: n,
                        coins: a,
                        description: i("tasks.random_game_description", {
                          min: String(Math.ceil(l.seconds_to_play / 60))
                        }),
                        buttonLabel: i("tasks.play"),
                        gameLink: {
                          name: s.m8.RANDOM_GAME
                        }
                      }
                    }
                    if ("PLAY_GAME" === e.task.type) {
                      let {
                        status: t,
                        coins: a,
                        settings: {
                          game: l,
                          seconds_to_play: n
                        },
                        task_id: r,
                        type: o
                      } = e.task, d = Math.ceil(n / 60);
                      return {
                        status: t,
                        type: o,
                        coins: a,
                        id: r,
                        game: l,
                        description: l.title,
                        buttonLabel: i("tasks.button_label", {
                          min: String(d)
                        }),
                        ...l.hru && {
                          gameLink: {
                            name: s.m8.GAME_PAGE,
                            params: {
                              game: l.hru
                            }
                          }
                        }
                      }
                    }
                    return function(e) {
                      let {
                        status: t,
                        coins: a,
                        task_id: l,
                        type: n,
                        settings: {
                          invitations_not_claimed: r
                        }
                      } = e, s = r > 1 ? Math.floor(a / r) : a, o = r > 1 ? i("tasks.collect_invite_widget_many", {
                        friends: String(r),
                        coins: String(s)
                      }) : i("tasks.collect_invite_widget", {
                        coins: String(s)
                      });
                      return {
                        status: t,
                        coins: a,
                        id: l,
                        type: n,
                        buttonLabel: i("tasks.claim"),
                        description: o
                      }
                    }(e.task)
                  }
                  return null
                }),
                u = (0, l.Fl)(() => c.value?.status === "ACTIVE");

              function p() {
                e.isRegister && !e.task ? a.replace({
                  name: s.m8.PROFILE
                }) : e.task && t("claimTask", e.task)
              }

              function g() {
                e.isRegister ? a.replace({
                  name: s.m8.PROFILE
                }) : u.value && c.value && (0, Z.Lu)(c.value) ? t("taskStart", {
                  taskId: c.value.id,
                  link: c.value.gameLink
                }) : t("taskClick")
              }
              return (t, a) => c.value ? ((0, l.wg)(), (0, l.iD)("div", {
                key: 0,
                class: (0, l.C_)([t.$style.task, {
                  [t.$style.clickable]: e.clickable
                }]),
                onClick: g
              }, [(0, l._)("div", {
                class: (0, l.C_)(t.$style.task_content)
              }, [(0, l._)("div", {
                class: (0, l.C_)(t.$style.fennecs)
              }, [(0, l._)("div", {
                class: (0, l.C_)(t.$style.silver_fennec_coin)
              }, [(0, l.Wm)(v.Z, {
                name: "silver_fennec_coin_small",
                class: (0, l.C_)(t.$style.silver_fennec_coin)
              }, null, 8, ["class"])], 2), (0, l._)("div", {
                class: (0, l.C_)(t.$style.vertical_container)
              }, [(0, l.Wm)(r.Z, {
                type: "label",
                size: "l",
                accent: "",
                responsive: !1
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)((0, l.SU)(q.B)(c.value.coins)), 1)]),
                _: 1
              }), (0, l.Wm)(r.Z, {
                type: "label",
                size: "xs",
                accent: "",
                responsive: !1,
                class: (0, l.C_)(t.$style.mutedText)
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(c.value.description), 1)]),
                _: 1
              }, 8, ["class"])], 2)], 2)], 2), u.value ? ((0, l.wg)(), (0, l.j4)(H.Z, {
                key: 0,
                interfaceTarget: "active-task",
                size: "m",
                color: "purple-400",
                class: (0, l.C_)(t.$style.button_override),
                disabled: t.disabled
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(c.value.buttonLabel), 1)]),
                _: 1
              }, 8, ["class", "disabled"])) : ((0, l.wg)(), (0, l.j4)(H.Z, {
                key: 1,
                color: "purple-400",
                interfaceTarget: "claim-task",
                size: "m",
                class: (0, l.C_)(t.$style.button_override),
                disabled: t.disabled,
                onClick: (0, l.iM)(p, ["stop"])
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(t.$tr("tasks.claim")), 1)]),
                _: 1
              }, 8, ["class", "disabled"]))], 2)) : (0, l.kq)("", !0)
            }
          });
        let F = {},
          G = {};
        G.$style || (G.$style = {}), G.$style.style0 = {
          task: "GHGqt",
          task_content: "lpumR",
          taskContent: "lpumR",
          fennecs: "VCtAD",
          clickable: "gB3kw",
          silver_fennec_coin: "bUN2S",
          silverFennecCoin: "bUN2S",
          button_override: "IHhzC",
          buttonOverride: "IHhzC",
          "#": "Nxp9K",
          vertical_container: "fhk8z",
          verticalContainer: "fhk8z",
          mutedText: "LGb1Z"
        }, F.$style = Object.values(G.$style).reduce((e, t) => Object.assign(e, t), {});
        let N = (0, h.default)(W, [
          ["__cssModules", F]
        ]);
        var V = a(9989),
          Y = (0, l.aZ)({
            __name: "TaskWidgetPlaceholder",
            setup: e => (e, t) => ((0, l.wg)(), (0, l.iD)("div", {
              class: (0, l.C_)(e.$style.container)
            }, [(0, l.Wm)(V.Z, {
              class: (0, l.C_)(e.$style.circle)
            }, null, 8, ["class"]), (0, l._)("div", {
              class: (0, l.C_)(e.$style.verticalGroup)
            }, [(0, l.Wm)(V.Z, {
              class: (0, l.C_)(e.$style.sausageTop)
            }, null, 8, ["class"]), (0, l.Wm)(V.Z, {
              class: (0, l.C_)(e.$style.sausageBottom)
            }, null, 8, ["class"])], 2), (0, l.Wm)(V.Z, {
              class: (0, l.C_)(e.$style.button)
            }, null, 8, ["class"])], 2))
          });
        let K = {},
          J = {};
        J.$style || (J.$style = {}), J.$style.style0 = {
          container: "vacKq",
          circle: "Vptrj",
          button: "UqYae",
          verticalGroup: "W_UQn",
          sausageTop: "eloXM",
          sausageBottom: "HoBee",
          blink: "qsDrv"
        }, K.$style = Object.values(J.$style).reduce((e, t) => Object.assign(e, t), {});
        let X = (0, h.default)(Y, [
          ["__cssModules", K]
        ]);
        var Q = a(3533),
          ee = a(1920),
          et = a(8612),
          ea = (0, l.aZ)({
            __name: "TasksWidget",
            props: {
              redirect: {
                type: Boolean
              }
            },
            setup(e) {
              let t = (0, l.iH)(!1),
                a = (0, l.iH)(!1),
                n = (0, et.t)(),
                o = (0, Q.r)(),
                c = (0, ee.L)(),
                {
                  tasksError: u,
                  allTasksClaimed: p,
                  firstTask: g,
                  isClaimStarted: v
                } = (0, i.Jk)(o),
                m = (0, l.iH)(void 0);

              function h() {
                t.value && (m.value = g.value, t.value = !1, a.value = !0)
              }(0, l.bv)(() => {
                !m.value && g.value && (m.value = g.value)
              }), (0, l.YP)(g, (e, l) => {
                if (!m.value) {
                  m.value = e;
                  return
                }(l?.task_id !== e?.task_id || l?.status !== e?.status) && (t.value = !0, a.value = !1)
              });
              let {
                isAuthorized: f,
                isUserInfoLoaded: _
              } = (0, i.Jk)(c), y = (0, l.Fl)(() => !n.value || !_.value || !!f.value && !m.value && !0), w = (0, d.tv)(), b = e => {
                o.onTaskClaimed(e)
              }, k = () => {
                e.redirect && w.push({
                  name: s.m8.PROFILE
                })
              }, C = ({
                taskId: e,
                link: t
              }) => {
                o.onTaskStart(e), w.push(t)
              };
              return (i, n) => (0, l.SU)(p) ? (0, l.kq)("", !0) : ((0, l.wg)(), (0, l.iD)("div", {
                key: 0,
                class: (0, l.C_)(i.$style.componentContainer),
                "data-interface-section": "tasks-widget"
              }, [(0, l._)("div", {
                class: (0, l.C_)([i.$style.tasksWidget, {
                  [i.$style.rotateOut]: t.value,
                  [i.$style.rotateIn]: a.value
                }]),
                onAnimationend: h
              }, [y.value ? ((0, l.wg)(), (0, l.j4)(X, {
                key: 0
              })) : (0, l.SU)(f) ? ((0, l.wg)(), (0, l.iD)(l.HY, {
                key: 1
              }, [(0, l.SU)(u) ? ((0, l.wg)(), (0, l.iD)("div", {
                key: 1,
                class: (0, l.C_)(i.$style.errorContainer)
              }, [(0, l.Wm)(r.Z, {
                type: "paragraph",
                size: "xs"
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(i.$tr("tasks.error_title")), 1)]),
                _: 1
              }), (0, l.Wm)(H.Z, {
                color: "carbon-400",
                visual: "fill",
                interfaceTarget: "reload-tasks",
                onClick: (0, l.SU)(o).onReloadClick
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(i.$tr("tasks.error_button")), 1)]),
                _: 1
              }, 8, ["onClick"])], 2)) : ((0, l.wg)(), (0, l.j4)(N, {
                key: 0,
                task: m.value,
                clickable: e.redirect,
                disabled: (0, l.SU)(v),
                onClaimTask: b,
                onTaskStart: C,
                onTaskClick: k
              }, null, 8, ["task", "clickable", "disabled"]))], 64)) : ((0, l.wg)(), (0, l.j4)(N, {
                key: 2,
                isRegister: !0,
                clickable: !0
              }))], 34)], 2))
            }
          });
        let el = {},
          ei = {};
        ei.$style || (ei.$style = {}), ei.$style.style0 = {
          tasksWidget: "agcwC",
          componentContainer: "ioZjh",
          errorContainer: "MoBGU",
          rotateOut: "BK6dF",
          rotateIn: "ipG6h"
        }, el.$style = Object.values(ei.$style).reduce((e, t) => Object.assign(e, t), {});
        let en = (0, h.default)(ea, [
          ["__cssModules", el]
        ]);
        var er = a(1318),
          es = a(9626),
          eo = a(8518);
        a(6330), a(8221), a(5863), a(5646), a(9774), a(5123), a(793), a(102);
        var ed = a(8284);
        let ec = async ({
          searchID: e,
          apiKey: t,
          locale: a,
          lang: l,
          q: i,
          resolveRoute: n
        }) => {
          let r = new URLSearchParams({
              cx: e,
              key: t,
              q: i,
              num: "10",
              hl: a,
              lr: `lang_${l}`
            }),
            o = await fetch(`https://customsearch.googleapis.com/customsearch/v1?${r.toString()}`);
          if (!o.ok) throw console.error("Search failed", await o.text()), Error("Search failed");
          let d = await o.json(),
            c = {
              result: [],
              totalItems: 0,
              queryTerm: ""
            };
          return (d.items || []).forEach(e => {
            let t = (0, ed.Z)(e.link)?.pathname;
            if (!t) return;
            let a = n(t);
            if (a.name === s.m8.GAME_PAGE) {
              let {
                listitem: t,
                metatags: l
              } = e.pagemap || {}, i = l?.[0]["og:image"], n = t?.[t?.length - 1]?.name || (e => {
                if (e) return e.split("-").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ").replace(/\s+/g, " ")
              })(a.params.game), r = e.pagemap?.webapplication?.[0], s = r?.image || i;
              n && s && c.result.push({
                routeName: a.name,
                gameHru: a.params.game,
                image: s,
                name: n,
                htmlTitle: e.htmlTitle
              })
            } else if (a.name === s.m8.CATEGORY || a.name === s.m8.TAG || a.name === s.m8.SERIES) {
              let {
                listitem: t
              } = e.pagemap || {}, l = t?.[t?.length - 1]?.name || e.title?.split("|")[0].trim();
              if (l) {
                let t = a.params.hru;
                c.result.find(e => "object" == typeof e && "hru" in e && e.hru === t) || c.result.push({
                  routeName: a.name,
                  hru: t,
                  name: l,
                  htmlTitle: e.htmlTitle
                })
              }
            }
          }), c.totalItems = d.searchInformation.totalResults, c.queryTerm = i, c
        }, eu = ["placeholder"];
        var ep = (0, l.aZ)({
          __name: "SearchInput",
          props: {
            placeholder: {},
            buttonText: {},
            short: {
              type: Boolean
            }
          },
          emits: ["focus", "update:modelValue"],
          setup(e, {
            emit: t
          }) {
            let a = (0, l.iH)(""),
              i = (0, l.iH)(!0),
              n = (0, l.Fl)(() => e.short);

            function r() {
              i.value = !0, t("update:modelValue", a.value)
            }

            function s(e) {
              let l = e.target;
              i.value = a.value.trim().length <= 1, "" === l.value && t("update:modelValue", "")
            }
            return (0, l.YP)(n, e => {
              e && (a.value = "", i.value = !0, t("update:modelValue", a.value))
            }), (t, n) => ((0, l.wg)(), (0, l.iD)("form", {
              class: (0, l.C_)([t.$style.search_form_input, e.short && t.$style.short]),
              role: "search",
              onSubmit: (0, l.iM)(r, ["prevent"])
            }, [(0, l._)("label", {
              class: (0, l.C_)(t.$style.label),
              for: "search"
            }, [(0, l.Wm)(v.Z, {
              name: "search",
              class: (0, l.C_)(t.$style.icon)
            }, null, 8, ["class"]), (0, l.wy)((0, l._)("input", {
              id: "search",
              "onUpdate:modelValue": n[0] || (n[0] = e => a.value = e),
              type: "search",
              placeholder: e.placeholder,
              class: (0, l.C_)(t.$style.input),
              autocomplete: "off",
              style: (0, l.j5)({
                "--digits": e.placeholder?.length || 0
              }),
              inputmode: "search",
              onInput: s,
              onFocus: n[1] || (n[1] = e => t.$emit("focus"))
            }, null, 46, eu), [
              [l.nr, a.value]
            ])], 2), e.short ? (0, l.kq)("", !0) : ((0, l.wg)(), (0, l.j4)(H.Z, {
              key: 0,
              disabled: i.value,
              type: "submit",
              interfaceTarget: "search-submit",
              class: (0, l.C_)(t.$style.button_override)
            }, {
              default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(t.buttonText), 1)]),
              _: 1
            }, 8, ["disabled", "class"]))], 34))
          }
        });
        let eg = {},
          ev = {};
        ev.$style || (ev.$style = {}), ev.$style.style0 = {
          search_form_input: "byqss",
          searchFormInput: "byqss",
          icon: "d_udQ",
          input: "JcvZ_",
          label: "HCJKH",
          short: "lecjY",
          button_override: "HoKLA",
          buttonOverride: "HoKLA",
          "#": "u2_d3"
        }, eg.$style = Object.values(ev.$style).reduce((e, t) => Object.assign(e, t), {});
        let em = (0, h.default)(ep, [
          ["__cssModules", eg]
        ]);
        a(9929), a(6301);
        var eh = a(8028),
          ef = a(7783),
          e_ = (0, l.aZ)({
            __name: "PromoCategoriesSwitchers",
            setup(e) {
              let {
                mainData: t
              } = (0, S.G)();
              return (e, a) => ((0, l.wg)(), (0, l.iD)("div", {
                class: (0, l.C_)(e.$style.promo_list)
              }, [((0, l.wg)(!0), (0, l.iD)(l.HY, null, (0, l.Ko)((0, l.SU)(t).promoCategoriesList, ({
                location: t,
                title: a,
                id: i
              }) => ((0, l.wg)(), (0, l.j4)(y, {
                key: i,
                class: (0, l.C_)(e.$style.switcher),
                title: a,
                icon: i,
                to: t,
                dataInterfaceTarget: "search-promo-category"
              }, null, 8, ["class", "title", "icon", "to"]))), 128))], 2))
            }
          });
        let ey = {},
          ew = {};
        ew.$style || (ew.$style = {}), ew.$style.style0 = {
          switcher: "mj5gq",
          promo_list: "UZbaF",
          promoList: "UZbaF"
        }, ey.$style = Object.values(ew.$style).reduce((e, t) => Object.assign(e, t), {});
        let eb = (0, h.default)(e_, [
          ["__cssModules", ey]
        ]);
        var ek = a(6503),
          eC = (0, l.aZ)({
            __name: "SearchCards",
            props: {
              cards: {}
            },
            setup(e) {
              let t = (0, l.Fl)(() => e.cards ? e.cards : [, , , ].fill(void 0));
              return (e, a) => ((0, l.wg)(), (0, l.iD)("ul", {
                class: (0, l.C_)(e.$style.cards)
              }, [((0, l.wg)(!0), (0, l.iD)(l.HY, null, (0, l.Ko)(t.value, t => {
                var a, i;
                return (0, l.wg)(), (0, l.iD)("li", {
                  key: t?.hru
                }, [t ? ((0, l.wg)(), (0, l.j4)(g.Z, {
                  key: 1,
                  class: (0, l.C_)(e.$style.card),
                  to: (a = t.routeName || (0, l.SU)(s.m8).GAME_PAGE, i = t.hru, a === s.m8.GAME_PAGE ? {
                    name: a,
                    params: {
                      game: i
                    }
                  } : {
                    name: a,
                    params: {
                      hru: i
                    }
                  })
                }, {
                  default: (0, l.w5)(() => [(0, l.Wm)(ek.Z, {
                    src: t.preview,
                    class: (0, l.C_)(e.$style.image_override)
                  }, {
                    default: (0, l.w5)(() => [t.previewIcon ? ((0, l.wg)(), (0, l.j4)(v.Z, {
                      key: 0,
                      name: t.previewIcon,
                      class: (0, l.C_)(e.$style.preview_icon)
                    }, null, 8, ["name", "class"])) : (0, l.kq)("", !0)]),
                    _: 2
                  }, 1032, ["src", "class"]), (0, l.Wm)(r.Z, {
                    type: "label",
                    size: "m"
                  }, {
                    default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(t.title), 1)]),
                    _: 2
                  }, 1024), t.statusIcon ? ((0, l.wg)(), (0, l.j4)(v.Z, {
                    key: 0,
                    name: t.statusIcon,
                    class: (0, l.C_)(e.$style.icon)
                  }, null, 8, ["name", "class"])) : (0, l.kq)("", !0)]),
                  _: 2
                }, 1032, ["class", "to"])) : ((0, l.wg)(), (0, l.iD)("div", {
                  key: 0,
                  class: (0, l.C_)(e.$style.card)
                }, [(0, l.Wm)(ek.Z, {
                  src: void 0,
                  placeholder: "",
                  class: (0, l.C_)(e.$style.image_override)
                }, null, 8, ["class"]), (0, l.Wm)(V.Z, {
                  class: (0, l.C_)(e.$style.title_placeholder)
                }, null, 8, ["class"])], 2))])
              }), 128))], 2))
            }
          });
        let e$ = {},
          eE = {};
        eE.$style || (eE.$style = {}), eE.$style.style0 = {
          cards: "hl8t5",
          card: "qpLLr",
          preview_icon: "f48i0",
          previewIcon: "f48i0",
          icon: "ulQn4",
          image_override: "Sj4Ph",
          imageOverride: "Sj4Ph",
          "#": "ixjtD",
          title_placeholder: "OAn9j",
          titlePlaceholder: "OAn9j"
        }, e$.$style = Object.values(eE.$style).reduce((e, t) => Object.assign(e, t), {});
        let eA = (0, h.default)(eC, [
          ["__cssModules", e$]
        ]);
        var eT = a.p + "static/image/eyes.aeff8f11.webp";
        let eS = ["src"];
        var eO = (0, l.aZ)({
          __name: "SearchResults",
          props: {
            searchResults: {},
            status: {}
          },
          setup(e) {
            let t = {
                [s.m8.CATEGORY]: "all_games",
                [s.m8.SERIES]: "all_series",
                [s.m8.TAG]: "all_tags"
              },
              a = (0, ef.K)(),
              {
                myUnzippedGames: n
              } = (0, i.Jk)(a),
              {
                unzippedTrendingWithGames: o
              } = (0, eh.u)({}),
              d = (0, l.Fl)(() => n.value.slice(0, 3)),
              c = (0, l.Fl)(() => o.value?.slice(0, 3)),
              u = (0, l.Fl)(() => e.searchResults?.result?.filter(e => e.routeName === s.m8.GAME_PAGE).map(e => ({
                hru: e.gameHru,
                preview: e.image,
                title: e.name,
                routeName: e.routeName
              }))),
              p = (0, l.Fl)(() => e.searchResults?.result?.filter(e => e.routeName !== s.m8.GAME_PAGE).map(e => ({
                hru: e.hru,
                title: e.name,
                routeName: e.routeName,
                previewIcon: t[e.routeName]
              })));
            return (t, a) => "loaded" === e.status || "loading" === e.status ? ((0, l.wg)(), (0, l.iD)("div", {
              key: 0,
              class: (0, l.C_)(t.$style.results)
            }, [(0, l.Wm)(eA, {
              cards: u.value
            }, null, 8, ["cards"]), (0, l.Wm)(eA, {
              cards: p.value
            }, null, 8, ["cards"])], 2)) : "empty" === e.status ? ((0, l.wg)(), (0, l.iD)("div", {
              key: 1,
              class: (0, l.C_)(t.$style.empty)
            }, [(0, l._)("div", {
              class: (0, l.C_)(t.$style.empty_wrapper_text)
            }, [(0, l._)("div", {
              class: (0, l.C_)(t.$style.no_results_img_wrapper)
            }, [(0, l._)("img", {
              src: (0, l.SU)(eT),
              alt: "no_results",
              loading: "lazy",
              class: (0, l.C_)(t.$style.no_results_img)
            }, null, 10, eS)], 2), (0, l._)("div", {
              class: (0, l.C_)(t.$style.no_results_text)
            }, [(0, l.Wm)(r.Z, {
              type: "header",
              size: "s",
              responsive: !1
            }, {
              default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(t.$tr("search.empty_title")), 1)]),
              _: 1
            }), (0, l.Wm)(r.Z, {
              size: "s",
              responsive: !1,
              class: (0, l.C_)(t.$style.no_results_desc)
            }, {
              default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(t.$tr("search.empty_desc")), 1)]),
              _: 1
            }, 8, ["class"])], 2)], 2), (0, l._)("div", {
              class: (0, l.C_)(t.$style.sep_section)
            }, null, 2), (0, l.Wm)(r.Z, {
              type: "caption",
              size: "all-caps",
              class: (0, l.C_)(t.$style.title)
            }, {
              default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(t.$tr("search.top_games")), 1)]),
              _: 1
            }, 8, ["class"]), (0, l.Wm)(eA, {
              cards: c.value
            }, null, 8, ["cards"])], 2)) : ((0, l.wg)(), (0, l.iD)("div", {
              key: 2,
              class: (0, l.C_)(t.$style.initial)
            }, [(0, l.Wm)(eb), (0, l.Wm)(r.Z, {
              type: "caption",
              size: "all-caps",
              class: (0, l.C_)(t.$style.title)
            }, {
              default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(t.$tr("search.top_games")), 1)]),
              _: 1
            }, 8, ["class"]), (0, l.Wm)(eA, {
              cards: c.value
            }, null, 8, ["cards"]), d.value?.length ? ((0, l.wg)(), (0, l.iD)(l.HY, {
              key: 0
            }, [(0, l.Wm)(r.Z, {
              type: "caption",
              size: "all-caps",
              class: (0, l.C_)(t.$style.title)
            }, {
              default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(t.$tr("search.recent_games")), 1)]),
              _: 1
            }, 8, ["class"]), (0, l.Wm)(eA, {
              cards: d.value
            }, null, 8, ["cards"])], 64)) : (0, l.kq)("", !0)], 2))
          }
        });
        let eM = {},
          eP = {};
        eP.$style || (eP.$style = {}), eP.$style.style0 = {
          results: "PNi7I",
          title: "TsE2Y",
          initial: "c320J",
          empty: "gqbuy",
          no_results_text: "vgbKO",
          noResultsText: "vgbKO",
          no_results_desc: "jwnaP",
          noResultsDesc: "jwnaP",
          no_results_img_wrapper: "CgPqy",
          noResultsImgWrapper: "CgPqy",
          no_results_img: "rf8uo",
          noResultsImg: "rf8uo",
          empty_wrapper_text: "t9BYo",
          emptyWrapperText: "t9BYo",
          sep_section: "lsRD6",
          sepSection: "lsRD6"
        }, eM.$style = Object.values(eP.$style).reduce((e, t) => Object.assign(e, t), {});
        let eL = (0, h.default)(eO, [
          ["__cssModules", eM]
        ]);
        var ex = (0, l.aZ)({
          __name: "Search",
          emits: ["open", "close"],
          setup(e, {
            emit: t
          }) {
            let a = (0, l.iH)(null),
              i = (0, l.iH)(""),
              n = (0, l.iH)(!1),
              s = (0, eo.o)(),
              o = (0, er.E)(),
              c = (0, u.s2)(),
              p = (0, d.tv)(),
              {
                GOOGLE_SEARCH_ID: g,
                GOOGLE_SEARCH_API_TOKEN: v
              } = (0, M.Z)();

            function m(e) {
              e !== n.value && (n.value = e, o.setFullscreen(e))
            }

            function h() {
              m(!0), t("open")
            }

            function f() {
              m(!1), t("close")
            }
            p.afterEach(f);
            let _ = (0, l.Fl)(() => i.value.trim().length > 1);

            function y(e) {
              i.value = e
            }
            let w = (0, l.Fl)(() => $.value && 0 === $.value.result.length || b.value ? "empty" : $.value ? "loaded" : k.value && i.value ? "loading" : "initial"),
              {
                isError: b,
                isLoading: k,
                isSuccess: C,
                data: $
              } = (0, es.a)({
                queryKey: ["portal-search", i, c.currentLocale],
                enabled: _,
                queryFn: () => ec({
                  searchID: g,
                  apiKey: v,
                  q: i.value,
                  locale: c.currentLocale.value,
                  lang: c.getCurrentLanguage(),
                  resolveRoute: e => p.resolve(e)
                }),
                staleTime: 1 / 0,
                refetchOnMount: !1,
                refetchOnWindowFocus: !1,
                refetchOnReconnect: !1
              });

            function E(e) {
              if (!n.value) return;
              let t = e.target,
                l = a.value?.contains(t);
              a.value?.contains(document.activeElement) || l || f()
            }

            function A(e) {
              if ("Escape" === e.key && n.value) {
                let e = document.activeElement;
                f(), e.blur()
              }
            }
            return (0, l.YP)(C, e => {
              e && $.value && s.logSearchEvent({
                search_result_count: $.value.totalItems,
                search_term: $.value.queryTerm
              })
            }), (0, l.bv)(() => {
              document.addEventListener("keydown", A), document.addEventListener("click", E)
            }), (0, l.Jd)(() => {
              document.removeEventListener("keydown", A), document.removeEventListener("click", E)
            }), (e, t) => ((0, l.wg)(), (0, l.iD)("div", {
              ref_key: "resultRef",
              ref: a,
              class: (0, l.C_)([n.value && e.$style.search_opened])
            }, [(0, l._)("div", {
              class: (0, l.C_)(e.$style.search)
            }, [(0, l.Wm)(em, {
              placeholder: e.$tr("search.placeholder"),
              buttonText: e.$tr("search.placeholder"),
              short: !n.value,
              "onUpdate:modelValue": y,
              onFocus: h
            }, null, 8, ["placeholder", "buttonText", "short"]), (0, l._)("div", {
              class: (0, l.C_)(e.$style.title)
            }, [(0, l.Wm)(r.Z, {
              type: "header",
              size: "m",
              responsive: !1
            }, {
              default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.$tr("search.placeholder")), 1)]),
              _: 1
            }), (0, l.Wm)(H.Z, {
              interfaceTarget: "close-search",
              icon: "close",
              color: "carbon-400",
              onClick: f
            })], 2)], 2), n.value ? ((0, l.wg)(), (0, l.iD)("div", {
              key: 0,
              "data-overlay-blur": "",
              class: (0, l.C_)(e.$style.resultsAnchor)
            }, [(0, l.Wm)(eL, {
              searchResults: (0, l.SU)($),
              status: w.value
            }, null, 8, ["searchResults", "status"])], 2)) : (0, l.kq)("", !0)], 2))
          }
        });
        let eD = {},
          eR = {};
        eR.$style || (eR.$style = {}), eR.$style.style0 = {
          search_opened: "rAqDh",
          searchOpened: "rAqDh",
          resultsAnchor: "jZeXP",
          search: "oHJ6F",
          title: "W86vH"
        }, eD.$style = Object.values(eR.$style).reduce((e, t) => Object.assign(e, t), {});
        let eI = (0, h.default)(ex, [
          ["__cssModules", eD]
        ]);
        var ez = (0, l.aZ)({
          __name: "HeaderTiles",
          setup(e) {
            let t = (0, T.y)(),
              a = (0, l.Fl)(() => [{
                title: t("tiles.add_games"),
                externalTo: O.Qk,
                target: "_blank"
              }, {
                title: t("tiles.publishers"),
                externalTo: O.nL,
                target: "_blank"
              }, {
                title: t("navigation.blog"),
                externalTo: O.bQ,
                target: "_blank"
              }, {
                title: t("tiles.contacts"),
                to: {
                  name: s.m8.CONTACTS
                }
              }]),
              i = (0, l.iH)(null),
              n = (0, l.iH)(null),
              o = (0, l.iH)(!1),
              d = (0, l.Fl)(() => a.value.length > 4);

            function c(e) {
              if (!1 === e) {
                o.value = !1;
                return
              }
              o.value = !o.value
            }

            function u(e) {
              n.value = e.currentTarget, c()
            }

            function p(e) {
              if (!o.value) return;
              let t = e.target,
                a = !i.value?.contains(t),
                l = !n.value?.contains(t);
              a && l && c(!1)
            }
            return (0, l.bv)(() => {
              document.addEventListener("click", p)
            }), (0, l.Jd)(() => {
              document.removeEventListener("click", p)
            }), (e, t) => ((0, l.wg)(), (0, l.iD)("div", {
              class: (0, l.C_)(e.$style.tiles_wrapper)
            }, [(0, l._)("div", {
              class: (0, l.C_)([e.$style.tiles_button, e.$style.tabletPlus])
            }, [(0, l._)("button", {
              "data-interface-target": "open-links-menu",
              class: (0, l.C_)(e.$style.icon_wrapper),
              onClick: u
            }, [(0, l.Wm)(v.Z, {
              name: "plus",
              class: (0, l.C_)([e.$style.icon, o.value && e.$style.icon_rotate])
            }, null, 8, ["class"])], 2)], 2), (0, l._)("div", {
              class: (0, l.C_)([e.$style.tiles_row, e.$style.desktop, d.value && !o.value && e.$style.reduced_tiles, d.value && o.value && e.$style.reduced_tiles_opened])
            }, [((0, l.wg)(!0), (0, l.iD)(l.HY, null, (0, l.Ko)(a.value, (t, a) => ((0, l.wg)(), (0, l.j4)(g.Z, {
              key: a,
              to: t.to,
              externalTo: t.externalTo,
              target: t.target,
              class: (0, l.C_)(e.$style.tile)
            }, {
              default: (0, l.w5)(() => [(0, l.Wm)(r.Z, {
                type: "caption",
                size: "all-caps",
                semibold: ""
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(t.title), 1)]),
                _: 2
              }, 1024)]),
              _: 2
            }, 1032, ["to", "externalTo", "target", "class"]))), 128)), (0, l._)("button", {
              class: (0, l.C_)([e.$style.tile, e.$style.more_btn, !o.value && d.value && e.$style.more_btn_visible]),
              onClick: u
            }, [(0, l.Wm)(r.Z, {
              type: "caption",
              size: "all-caps",
              semibold: ""
            }, {
              default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.$tr("tiles.more")), 1)]),
              _: 1
            })], 2)], 2), (0, l._)("div", {
              ref_key: "popupRef",
              ref: i,
              class: (0, l.C_)(e.$style.popup)
            }, [(0, l.Wm)(l.W3, {
              tag: "div",
              class: (0, l.C_)(e.$style.tiles_popup),
              enterActiveClass: e.$style.fade_enter_active,
              leaveToClass: e.$style.fade_leave_to
            }, {
              default: (0, l.w5)(() => [((0, l.wg)(!0), (0, l.iD)(l.HY, null, (0, l.Ko)(o.value ? a.value : [], (t, a) => ((0, l.wg)(), (0, l.j4)(g.Z, {
                key: a,
                to: t.to,
                externalTo: t.externalTo,
                target: t.target,
                class: (0, l.C_)(e.$style.tile)
              }, {
                default: (0, l.w5)(() => [(0, l.Wm)(r.Z, {
                  type: "caption",
                  size: "all-caps",
                  semibold: "",
                  class: (0, l.C_)(e.$style.desktop)
                }, {
                  default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(t.title), 1)]),
                  _: 2
                }, 1032, ["class"]), (0, l.Wm)(r.Z, {
                  type: "header",
                  size: "xs",
                  semibold: "",
                  class: (0, l.C_)(e.$style.tabletPlus)
                }, {
                  default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(t.title), 1)]),
                  _: 2
                }, 1032, ["class"])]),
                _: 2
              }, 1032, ["to", "externalTo", "target", "class"]))), 128)), (0, l._)("button", {
                key: "close-btn",
                class: (0, l.C_)([e.$style.tile, e.$style.close_btn, e.$style.desktop]),
                onClick: u
              }, [(0, l.Wm)(r.Z, {
                type: "caption",
                size: "all-caps",
                accent: ""
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.$tr("tiles.close")), 1)]),
                _: 1
              })], 2)]),
              _: 1
            }, 8, ["class", "enterActiveClass", "leaveToClass"])], 2)], 2))
          }
        });
        let eU = {},
          eB = {};
        eB.$style || (eB.$style = {}), eB.$style.style0 = {
          tiles_wrapper: "tc5_6",
          tilesWrapper: "tc5_6",
          tiles_button: "UbMBp",
          tilesButton: "UbMBp",
          tiles_row: "pYxh2",
          tilesRow: "pYxh2",
          icon: "zlRMd",
          icon_rotate: "wS9S7",
          iconRotate: "wS9S7",
          desktop: "b4TLG",
          icon_wrapper: "t7f1y",
          iconWrapper: "t7f1y",
          tile: "MKdsd",
          popup: "TGtft",
          more_btn: "atP72",
          moreBtn: "atP72",
          tiles_popup: "Od9KC",
          tilesPopup: "Od9KC",
          close_btn: "fEAYf",
          closeBtn: "fEAYf",
          fade_enter_active: "fdKJD",
          fadeEnterActive: "fdKJD",
          "bounce-in": "_7AHth",
          bounceIn: "_7AHth",
          fade_leave_to: "m2yZz",
          fadeLeaveTo: "m2yZz",
          "bounce-out": "yufZQ",
          bounceOut: "yufZQ",
          tabletPlus: "hRHUK",
          reduced_tiles: "WUQDA",
          reducedTiles: "WUQDA",
          reduced_tiles_opened: "vUGol",
          reducedTilesOpened: "vUGol",
          more_btn_visible: "fo7cd",
          moreBtnVisible: "fo7cd"
        }, eU.$style = Object.values(eB.$style).reduce((e, t) => Object.assign(e, t), {});
        let ej = (0, h.default)(ez, [
          ["__cssModules", eU]
        ]);
        var eH = a(2635);
        let eZ = ["disabled"];
        var eq = (0, l.aZ)({
          __name: "LogoutButton",
          emits: ["logout"],
          setup(e, {
            emit: t
          }) {
            let a = (0, l.iH)(!1);

            function i() {
              a.value || (a.value = !0, t("logout"))
            }
            return (e, t) => ((0, l.wg)(), (0, l.j4)(eH.Z, {
              content: e.$tr("userProfile.logout"),
              position: "bottom"
            }, {
              default: (0, l.w5)(() => [(0, l._)("button", {
                disabled: a.value,
                class: (0, l.C_)(e.$style.logout_button),
                "data-interface-target": "logout",
                onClick: (0, l.iM)(i, ["stop", "prevent"])
              }, [(0, l.Wm)(v.Z, {
                name: "logout",
                class: (0, l.C_)([e.$style.logout_icon, a.value && e.$style.disabled])
              }, null, 8, ["class"])], 10, eZ)]),
              _: 1
            }, 8, ["content"]))
          }
        });
        let eW = {},
          eF = {};
        eF.$style || (eF.$style = {}), eF.$style.style0 = {
          logout_button: "dtx05",
          logoutButton: "dtx05",
          logout_icon: "IjrDK",
          logoutIcon: "IjrDK",
          disabled: "kmaaB"
        }, eW.$style = Object.values(eF.$style).reduce((e, t) => Object.assign(e, t), {});
        let eG = (0, h.default)(eq, [
          ["__cssModules", eW]
        ]);
        var eN = a(730),
          eV = a.p + "static/image/no-ad.fb072e5d.webp";
        let eY = ["src"];
        var eK = (0, l.aZ)({
          __name: "NoAdButton",
          setup(e) {
            let t = (0, eN.u)(),
              {
                isAdDisabled: a
              } = (0, i.Jk)(t);
            return (e, i) => (0, l.SU)(a) ? (0, l.kq)("", !0) : ((0, l.wg)(), (0, l.iD)("button", {
              key: 0,
              class: (0, l.C_)(e.$style.button),
              "data-interface-target": "no-ad-header-button",
              onClick: i[0] || (i[0] = e => (0, l.SU)(t).openDisabledAdModal())
            }, [(0, l._)("img", {
              class: (0, l.C_)(e.$style.icon),
              src: (0, l.SU)(eV),
              alt: "No Ad"
            }, null, 10, eY), (0, l.Wm)(r.Z, {
              type: "label",
              size: "l"
            }, {
              default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.$tr("desktopHeader.noAds")), 1)]),
              _: 1
            })], 2))
          }
        });
        let eJ = {},
          eX = {};
        eX.$style || (eX.$style = {}), eX.$style.style0 = {
          button: "qw4fL",
          icon: "FyoUZ"
        }, eJ.$style = Object.values(eX.$style).reduce((e, t) => Object.assign(e, t), {});
        let eQ = (0, h.default)(eK, [
          ["__cssModules", eJ]
        ]);
        var e0 = a(2203),
          e1 = (0, l.aZ)({
            __name: "UserAvatar",
            props: {
              avatar: {},
              firstName: {},
              lastName: {}
            },
            setup(e) {
              let t = (0, l.Fl)(() => `${e.firstName?.[0]?.toUpperCase()||"x"}${e.lastName?.[0]?.toUpperCase()||""}`);
              return (a, i) => ((0, l.wg)(), (0, l.iD)("div", {
                class: (0, l.C_)(a.$style.avatar)
              }, [(0, l.Wm)(r.Z, {
                class: (0, l.C_)(a.$style.placeholder),
                type: "label",
                size: "xs",
                accent: !0,
                responsive: !1
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(t.value), 1)]),
                _: 1
              }, 8, ["class"]), e.avatar ? ((0, l.wg)(), (0, l.iD)("div", {
                key: 0,
                style: (0, l.j5)({
                  backgroundImage: `url(${e.avatar})`
                }),
                class: (0, l.C_)(a.$style.img)
              }, null, 6)) : (0, l.kq)("", !0)], 2))
            }
          });
        let e2 = {},
          e5 = {};
        e5.$style || (e5.$style = {}), e5.$style.style0 = {
          avatar: "pXwB_",
          placeholder: "jAGh2",
          img: "UgTmm"
        }, e2.$style = Object.values(e5.$style).reduce((e, t) => Object.assign(e, t), {});
        let e4 = (0, h.default)(e1, [
          ["__cssModules", e2]
        ]);
        var e3 = (0, l.aZ)({
          __name: "NoAdBadge",
          setup(e) {
            let t = (0, eN.u)(),
              {
                remainingDaysWithoutAd: a
              } = (0, i.Jk)(t);
            return (e, i) => (0, l.SU)(a) ? ((0, l.wg)(), (0, l.j4)(eH.Z, {
              key: 0,
              content: e.$tr("noAdBadge.tooltip", (0, l.SU)(a)),
              position: "bottom"
            }, {
              default: (0, l.w5)(() => [(0, l._)("button", {
                class: (0, l.C_)(e.$style.button),
                "data-interface-target": "no-ad-badge",
                onClick: i[0] || (i[0] = (0, l.iM)(e => (0, l.SU)(t).openDisabledAdModal(), ["prevent"]))
              }, [(0, l.Wm)(r.Z, {
                type: "caption",
                size: "xs",
                accent: "",
                responsive: !1,
                class: (0, l.C_)(e.$style.no_ad_label)
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.$tr("noAdBadge.label")), 1)]),
                _: 1
              }, 8, ["class"]), (0, l.Wm)(r.Z, {
                type: "label",
                size: "m",
                accent: "",
                responsive: !1,
                class: (0, l.C_)(e.$style.remaining_days)
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.$tr("noAdBadge.days", (0, l.SU)(a))), 1)]),
                _: 1
              }, 8, ["class"])], 2)]),
              _: 1
            }, 8, ["content"])) : (0, l.kq)("", !0)
          }
        });
        let e8 = {},
          e6 = {};
        e6.$style || (e6.$style = {}), e6.$style.style0 = {
          button: "RdqwK",
          no_ad_label: "ZEsD1",
          noAdLabel: "ZEsD1",
          remaining_days: "ddvzo",
          remainingDays: "ddvzo"
        }, e8.$style = Object.values(e6.$style).reduce((e, t) => Object.assign(e, t), {});
        let e7 = (0, h.default)(e3, [
          ["__cssModules", e8]
        ]);
        var e9 = (0, l.aZ)({
          __name: "UserWidget",
          props: {
            user: {},
            userBalance: {},
            isProfilePage: {
              type: Boolean
            }
          },
          setup: e => (t, a) => ((0, l.wg)(), (0, l.j4)(g.Z, {
            class: (0, l.C_)(t.$style.profile),
            to: {
              name: (0, l.SU)(s.m8).PROFILE
            },
            "data-interface-target": "profile-link"
          }, {
            default: (0, l.w5)(() => [(0, l.Wm)(v.Z, {
              name: "silver_fennec_coin_small"
            }), (0, l.Wm)(r.Z, {
              type: "label",
              size: "l",
              semibold: "",
              responsive: !1
            }, {
              default: (0, l.w5)(() => [(0, l.Wm)(e0.Z, {
                balance: e.userBalance
              }, null, 8, ["balance"])]),
              _: 1
            }), (0, l.Wm)(e4, {
              class: (0, l.C_)(t.$style.avatar_override),
              avatar: e.user.avatar,
              firstName: e.user.firstName,
              lastName: e.user.lastName
            }, null, 8, ["class", "avatar", "firstName", "lastName"]), (0, l.Wm)(e7)]),
            _: 1
          }, 8, ["class", "to"]))
        });
        let te = {},
          tt = {};
        tt.$style || (tt.$style = {}), tt.$style.style0 = {
          profile: "VFRWm",
          avatar_override: "jRIeu",
          avatarOverride: "jRIeu",
          "#": "nuAJS"
        }, te.$style = Object.values(tt.$style).reduce((e, t) => Object.assign(e, t), {});
        let ta = (0, h.default)(e9, [
          ["__cssModules", te]
        ]);
        var tl = (0, l.aZ)({
          __name: "DesktopHeader",
          setup(e) {
            let t = (0, er.E)(),
              a = (0, ee.L)(),
              r = (0, d.tv)(),
              o = (0, d.yj)(),
              c = (0, et.t)(),
              u = (0, l.iH)(!1),
              p = (0, l.Fl)(() => o.name === s.m8.PROFILE),
              {
                isAuthorized: g,
                isUserInfoLoaded: m,
                user: h,
                userBalance: f
              } = (0, i.Jk)(a);
            async function _() {
              await a.logout(), r.replace({
                name: s.m8.MAIN
              })
            }

            function y() {
              t.setSignInModalOpened(!0)
            }
            return (e, t) => ((0, l.wg)(), (0, l.iD)("header", {
              class: (0, l.C_)(e.$style.header),
              "data-interface-section": "desktop-header"
            }, [(0, l.Wm)(n.Z, {
              to: {
                name: (0, l.SU)(s.m8).MAIN
              },
              "data-interface-target": "navigation-link",
              class: (0, l.C_)(e.$style.icon_wrapper),
              hoverAnimation: "rainbow"
            }, {
              default: (0, l.w5)(() => [(0, l.Wm)(v.Z, {
                name: "playgama_logo",
                class: (0, l.C_)(e.$style.icon_logo)
              }, null, 8, ["class"])]),
              _: 1
            }, 8, ["to", "class"]), (0, l.Wm)(l.W3, {
              tag: "div",
              enterFromClass: e.$style.fade_enter_from,
              enterActiveClass: e.$style.fade_enter_active,
              moveClass: e.$style.fade_move,
              leaveActiveClass: e.$style.fade_leave_active,
              leaveToClass: e.$style.fade_leave_to,
              class: (0, l.C_)(e.$style.flexible_block)
            }, {
              default: (0, l.w5)(() => [(0, l.Wm)(eI, {
                key: "search",
                onOpen: t[0] || (t[0] = e => u.value = !0),
                onClose: t[1] || (t[1] = e => u.value = !1)
              }), u.value ? (0, l.kq)("", !0) : ((0, l.wg)(), (0, l.j4)(en, {
                key: "tasks",
                class: (0, l.C_)(e.$style.widgets_override),
                redirect: ""
              }, null, 8, ["class"])), (0, l.SU)(m) && (0, l.SU)(c) ? ((0, l.wg)(), (0, l.iD)(l.HY, {
                key: 1
              }, [(0, l.Wm)(eQ, {
                key: "no_ad_button"
              }), (0, l.SU)(h) && (0, l.SU)(g) ? ((0, l.wg)(), (0, l.iD)(l.HY, {
                key: 0
              }, [(0, l.Wm)(ta, {
                key: "user",
                user: (0, l.SU)(h),
                isProfilePage: p.value,
                userBalance: (0, l.SU)(f)
              }, null, 8, ["user", "isProfilePage", "userBalance"]), p.value ? ((0, l.wg)(), (0, l.j4)(eG, {
                key: "logout",
                onLogout: _
              })) : (0, l.kq)("", !0)], 64)) : ((0, l.wg)(), (0, l.j4)(H.Z, {
                key: "signin",
                size: "xl",
                color: "salad",
                interfaceTarget: "open-sign-in-modal",
                onClick: y
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.$tr("mobileHeader.login")), 1)]),
                _: 1
              }))], 64)) : (0, l.kq)("", !0), (0, l._)("div", {
                key: "tiles",
                class: (0, l.C_)([e.$style.right_block, u.value && e.$style.desktop_medium_hidden])
              }, [(0, l.Wm)(ej)], 2)]),
              _: 1
            }, 8, ["enterFromClass", "enterActiveClass", "moveClass", "leaveActiveClass", "leaveToClass", "class"])], 2))
          }
        });
        let ti = {},
          tn = {};
        tn.$style || (tn.$style = {}), tn.$style.style0 = {
          widgets_override: "E7nYU",
          widgetsOverride: "E7nYU",
          "#": "gbBQn",
          header: "eCFc0",
          flexible_block: "HCXyD",
          flexibleBlock: "HCXyD",
          right_block: "GTbGd",
          rightBlock: "GTbGd",
          icon_wrapper: "gk9dY",
          iconWrapper: "gk9dY",
          icon_logo: "kdtNX",
          iconLogo: "kdtNX",
          desktop_medium_hidden: "IIyUF",
          desktopMediumHidden: "IIyUF",
          fade_move: "N99Mx",
          fadeMove: "N99Mx",
          fade_enter_active: "T67IB",
          fadeEnterActive: "T67IB",
          fade_leave_active: "gu1Us",
          fadeLeaveActive: "gu1Us",
          fade_enter_from: "RDlsx",
          fadeEnterFrom: "RDlsx",
          fade_leave_to: "dUyhX",
          fadeLeaveTo: "dUyhX"
        }, ti.$style = Object.values(tn.$style).reduce((e, t) => Object.assign(e, t), {});
        let tr = (0, h.default)(tl, [
          ["__cssModules", ti]
        ]);
        var ts = a(1584),
          to = a(6365),
          td = a(4237),
          tc = (0, l.aZ)({
            __name: "MobileHeader",
            props: {
              categoriesModalMode: {
                type: Boolean,
                default: !1
              }
            },
            setup(e) {
              let t = (0, l.iH)(!1),
                a = (0, l.iH)(null),
                n = (0, ee.L)(),
                o = (0, l.fb)(),
                c = (0, d.yj)(),
                u = (0, d.tv)(),
                p = (0, l.Fl)(() => c.name === s.m8.MAIN);

              function m() {
                n.logout(), u.replace({
                  name: s.m8.MAIN
                })
              }
              let {
                user: h,
                isAuthorized: f,
                userBalance: _,
                isUserInfoLoaded: y
              } = (0, i.Jk)(n), w = (0, er.E)(), {
                categoriesModalOpened: b
              } = (0, i.Jk)(w);

              function k() {
                w.setCategoriesModalOpened(!b.value)
              }

              function C() {
                w.setSignInModalOpened(!0)
              }
              async function $() {
                await (0, Z.S8)();
                let e = a.value?.clientWidth,
                  t = a.value?.querySelector(`.${o.logo_override}`),
                  l = a.value?.querySelector(`.${o.logo_short_override}`);
                t && l && e && (t.hidden = !1, l.hidden = !0, e <= t.clientWidth && (t.hidden = !0, l.hidden = !1))
              }
              let E = (0, ts.vA)($, 50);
              (0, to.yU7)(a, E);
              let A = (0, et.t)();
              return (0, l.bv)(() => {
                E()
              }), (i, n) => ((0, l.wg)(), (0, l.j4)(l.W3, {
                tag: "div",
                enterFromClass: i.$style.fade_enter_from,
                enterActiveClass: i.$style.fade_enter_active,
                moveClass: i.$style.fade_move,
                leaveActiveClass: i.$style.fade_leave_active,
                leaveToClass: i.$style.fade_leave_to,
                class: (0, l.C_)(i.$style.header),
                "data-interface-section": "mobile-header"
              }, {
                default: (0, l.w5)(() => [t.value ? (0, l.kq)("", !0) : ((0, l.wg)(), (0, l.iD)("div", {
                  key: "left-menu",
                  class: (0, l.C_)(i.$style.leftBlock)
                }, [(0, l._)("div", {
                  class: (0, l.C_)(i.$style.menu)
                }, [(0, l._)("div", {
                  class: (0, l.C_)(i.$style.short_menu)
                }, [e.categoriesModalMode ? ((0, l.wg)(), (0, l.j4)(H.Z, {
                  key: 0,
                  iconLeft: "close",
                  visual: "ghost",
                  color: "purple-500",
                  interfaceTarget: "menu-close",
                  onClick: k
                }, {
                  default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(i.$tr("mobileHeader.close")), 1)]),
                  _: 1
                })) : ((0, l.wg)(), (0, l.iD)(l.HY, {
                  key: 1
                }, [(0, l._)("button", {
                  class: (0, l.C_)(i.$style.menu_button),
                  "data-interface-target": "menu",
                  onClick: k
                }, [(0, l.Wm)(v.Z, {
                  name: "menu"
                })], 2), (0, l._)("div", {
                  ref_key: "logoWrapRef",
                  ref: a,
                  class: (0, l.C_)(i.$style.logo_wrapper)
                }, [(0, l.Wm)(td.Z, {
                  class: (0, l.C_)(i.$style.logo_override),
                  noLink: p.value,
                  mode: "default"
                }, null, 8, ["class", "noLink"]), (0, l.SU)(A) ? ((0, l.wg)(), (0, l.j4)(td.Z, {
                  key: 0,
                  noLink: p.value,
                  mode: "short",
                  class: (0, l.C_)(i.$style.logo_short_override),
                  hidden: ""
                }, null, 8, ["noLink", "class"])) : (0, l.kq)("", !0)], 2)], 64))], 2), (0, l._)("div", {
                  class: (0, l.C_)(i.$style.wide_menu)
                }, [(0, l.Wm)(td.Z, {
                  class: (0, l.C_)(i.$style.logo_override),
                  noLink: p.value,
                  mode: "default"
                }, null, 8, ["class", "noLink"]), (0, l.Wm)(H.Z, {
                  iconLeft: "menu",
                  size: "l",
                  visual: "ghost",
                  color: "purple-500",
                  interfaceTarget: "menu",
                  onClick: k
                }, {
                  default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(i.$tr("mobileHeader.all_games")), 1)]),
                  _: 1
                })], 2)], 2)], 2)), !e.categoriesModalMode && (0, l.SU)(A) ? ((0, l.wg)(), (0, l.j4)(eI, {
                  key: "search",
                  onOpen: n[0] || (n[0] = e => t.value = !0),
                  onClose: n[1] || (n[1] = e => t.value = !1)
                })) : (0, l.kq)("", !0), (0, l.SU)(y) && (0, l.SU)(A) && !t.value ? ((0, l.wg)(), (0, l.iD)("div", {
                  key: "user",
                  ref: "rightBlockRef",
                  class: (0, l.C_)(i.$style.rightBlock)
                }, [(0, l.SU)(f) && (0, l.SU)(h) ? ((0, l.wg)(), (0, l.iD)(l.HY, {
                  key: 0
                }, [(0, l.SU)(c).name === (0, l.SU)(s.m8).PROFILE ? ((0, l.wg)(), (0, l.iD)(l.HY, {
                  key: 0
                }, [(0, l.Wm)(e4, {
                  class: (0, l.C_)(i.$style.avatar_override),
                  avatar: (0, l.SU)(h).avatar,
                  firstName: (0, l.SU)(h).firstName,
                  lastName: (0, l.SU)(h).lastName
                }, null, 8, ["class", "avatar", "firstName", "lastName"]), (0, l.Wm)(H.Z, {
                  color: "carbon-400",
                  size: "m",
                  icon: "logout",
                  interfaceTarget: "logout",
                  onClick: m
                })], 64)) : ((0, l.wg)(), (0, l.iD)(l.HY, {
                  key: 1
                }, [(0, l.Wm)(g.Z, {
                  to: {
                    name: (0, l.SU)(s.m8).PROFILE
                  },
                  "data-interface-target": "profile-link"
                }, {
                  default: (0, l.w5)(() => [(0, l.Wm)(e4, {
                    class: (0, l.C_)(i.$style.avatar_override),
                    avatar: (0, l.SU)(h).avatar,
                    firstName: (0, l.SU)(h).firstName,
                    lastName: (0, l.SU)(h).lastName
                  }, null, 8, ["class", "avatar", "firstName", "lastName"])]),
                  _: 1
                }, 8, ["to"]), (0, l.Wm)(g.Z, {
                  to: {
                    name: (0, l.SU)(s.m8).PROFILE
                  },
                  class: (0, l.C_)(i.$style.coins),
                  "data-interface-target": "profile-link"
                }, {
                  default: (0, l.w5)(() => [(0, l.Wm)(v.Z, {
                    name: "silver_fennec_coin_small",
                    class: (0, l.C_)(i.$style.coins_icon)
                  }, null, 8, ["class"]), (0, l.Wm)(r.Z, {
                    type: "header",
                    size: "xs",
                    responsive: !1,
                    class: (0, l.C_)(i.$style.fennecs)
                  }, {
                    default: (0, l.w5)(() => [(0, l.Wm)(e0.Z, {
                      balance: (0, l.SU)(_)
                    }, null, 8, ["balance"])]),
                    _: 1
                  }, 8, ["class"])]),
                  _: 1
                }, 8, ["to", "class"])], 64))], 64)) : ((0, l.wg)(), (0, l.j4)(H.Z, {
                  key: 1,
                  size: "m",
                  color: "salad",
                  interfaceTarget: "open-sign-in-modal",
                  onClick: C
                }, {
                  default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(i.$tr("mobileHeader.login")), 1)]),
                  _: 1
                }))], 2)) : (0, l.kq)("", !0)]),
                _: 1
              }, 8, ["enterFromClass", "enterActiveClass", "moveClass", "leaveActiveClass", "leaveToClass", "class"]))
            }
          }),
          tu = a(7150);
        let tp = {},
          tg = {},
          tv = e => Object.values(tg[e]).reduce((e, t) => Object.assign(e, t), {});
        tg.$styleCrit || (tg.$styleCrit = {}), tg.$styleCrit.style0 = tu.Z, tp.$styleCrit = tv("$styleCrit"), tg.$style || (tg.$style = {}), tg.$style.style1 = {
          header: "mL5Ql",
          leftBlock: "yRYN0",
          rightBlock: "p4jAJ",
          coins: "blIlu",
          wide_menu: "dY7sh",
          wideMenu: "dY7sh",
          short_menu: "nCcRb",
          shortMenu: "nCcRb",
          menu_button: "WMxOB",
          menuButton: "WMxOB",
          menu: "YvO8p",
          logo_wrapper: "m4W_s",
          logoWrapper: "m4W_s",
          logo_override: "mI96Y",
          logoOverride: "mI96Y",
          "#": "QD7mn",
          logo_short_override: "GjItK",
          logoShortOverride: "GjItK",
          coins_icon: "XN3Aw",
          coinsIcon: "XN3Aw",
          avatar_override: "HVGPa",
          avatarOverride: "HVGPa",
          fennecs: "_002OJ",
          fade_move: "OR3vG",
          fadeMove: "OR3vG",
          fade_enter_active: "RBe5v",
          fadeEnterActive: "RBe5v",
          fade_leave_active: "cKile",
          fadeLeaveActive: "cKile",
          fade_enter_from: "lsDav",
          fadeEnterFrom: "lsDav",
          fade_leave_to: "rNN2K",
          fadeLeaveTo: "rNN2K"
        }, tp.$style = tv("$style");
        let tm = (0, h.default)(tc, [
          ["__cssModules", tp]
        ]);
        var th = a(3816),
          tf = a(6177),
          t_ = a(3299);
        let ty = ["title"];
        var tw = (0, l.aZ)({
          __name: "LeftSide",
          props: {
            languageLinks: {}
          },
          setup(e) {
            let t = (0, tf.v)(),
              {
                topActive: a,
                bottomActive: i
              } = t,
              d = (0, l.iH)(null),
              c = e => {
                let t = e.currentTarget,
                  a = e.relatedTarget;
                a === t || t?.contains(a) || setTimeout(() => {
                  d.value && d.value.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  })
                }, 120)
              },
              u = (0, T.y)(),
              {
                mainData: p
              } = (0, S.G)(),
              m = (0, l.Fl)(() => p.value.menuCategoriesList || []),
              h = (0, l.Fl)(() => Object.values((0, O.nh)(u))),
              f = (0, l.Fl)(() => [{
                id: "heart",
                location: {
                  name: s.m8.MY_GAMES
                },
                title: u("myGames.title")
              }, ...m.value, ...h.value.map(e => ({
                id: e.icon,
                title: e.title,
                location: e.to
              }))]),
              _ = (0, l.Fl)(() => [{
                ...(0, O.qU)(u),
                icon: "fennek"
              }, {
                title: u("navigation.developers"),
                externalTo: O.Qk,
                icon: "bridge",
                target: "_blank"
              }, {
                title: u("navigation.publishers"),
                externalTo: O.nL,
                icon: "two_fingers",
                target: "_blank"
              }, {
                title: u("navigation.contact_us"),
                icon: "smile",
                to: {
                  name: s.m8.CONTACTS
                }
              }, {
                title: u("navigation.terms_of_use"),
                icon: "flag",
                to: {
                  name: s.m8.TERMS_OF_USE
                }
              }]),
              y = (0, l.Fl)(() => (0, O.fK)(u));
            return (u, p) => ((0, l.wg)(), (0, l.iD)("div", {
              class: (0, l.C_)(u.$style.sidebar),
              "data-interface-section": "sidebar",
              tabindex: "0",
              onFocusout: c,
              onMouseleave: c
            }, [(0, l.Wm)(n.Z, {
              to: {
                name: (0, l.SU)(s.m8).MAIN
              },
              "data-interface-target": "navigation-link",
              class: (0, l.C_)([u.$style.icon_wrapper, u.$style.hovered]),
              color: "rainbow"
            }, {
              default: (0, l.w5)(() => [(0, l.Wm)(v.Z, {
                name: "fennek",
                class: (0, l.C_)(u.$style.icon)
              }, null, 8, ["class"])]),
              _: 1
            }, 8, ["to", "class"]), (0, l.Wm)(n.Z, {
              to: {
                name: (0, l.SU)(s.m8).MAIN
              },
              "data-interface-target": "navigation-link",
              class: (0, l.C_)([u.$style.icon_wrapper, u.$style.non_hovered]),
              hoverAnimation: "rainbow"
            }, {
              default: (0, l.w5)(() => [(0, l.Wm)(v.Z, {
                name: "fennek",
                class: (0, l.C_)(u.$style.icon)
              }, null, 8, ["class"])]),
              _: 1
            }, 8, ["to", "class"]), (0, l._)("div", {
              class: (0, l.C_)(u.$style.wrapper)
            }, [(0, l._)("div", {
              ref_key: "scrollerRef",
              ref: d,
              class: (0, l.C_)(u.$style.scroller),
              onScroll: p[0] || (p[0] = (...e) => (0, l.SU)(t).onVerticalScroll && (0, l.SU)(t).onVerticalScroll(...e))
            }, [((0, l.wg)(!0), (0, l.iD)(l.HY, null, (0, l.Ko)(f.value, e => ((0, l.wg)(), (0, l.iD)(l.HY, {
              key: e.id
            }, [e.location ? ((0, l.wg)(), (0, l.j4)(g.Z, {
              key: 0,
              to: e.location,
              "data-interface-target": "category",
              title: e.title,
              class: (0, l.C_)(u.$style.item)
            }, {
              default: (0, l.w5)(() => [(0, l._)("div", {
                class: (0, l.C_)(u.$style.item_content)
              }, [(0, l.Wm)(v.Z, {
                name: e.id,
                alt: e.title,
                class: (0, l.C_)(u.$style.item_icon),
                lazy: ""
              }, null, 8, ["name", "alt", "class"]), (0, l.Wm)(r.Z, {
                type: "label",
                size: "m",
                accent: "",
                class: (0, l.C_)(u.$style.item_content_title),
                responsive: !1
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.title), 1)]),
                _: 2
              }, 1032, ["class"])], 2)]),
              _: 2
            }, 1032, ["to", "title", "class"])) : (0, l.kq)("", !0)], 64))), 128)), (0, l._)("div", {
              class: (0, l.C_)(u.$style.rest)
            }, [(0, l._)("div", {
              class: (0, l.C_)(u.$style.sep_section)
            }, null, 2), ((0, l.wg)(!0), (0, l.iD)(l.HY, null, (0, l.Ko)(_.value, e => ((0, l.wg)(), (0, l.j4)(g.Z, {
              key: e.title,
              title: e.title,
              class: (0, l.C_)(u.$style.item),
              tabindex: "-1",
              to: e.to,
              externalTo: e.externalTo,
              target: e.target,
              "data-interface-target": "navigation-link"
            }, {
              default: (0, l.w5)(() => [(0, l._)("div", {
                class: (0, l.C_)(u.$style.item_content)
              }, [(0, l.Wm)(t_.Z, {
                ariaHidden: ""
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.title), 1)]),
                _: 2
              }, 1024), (0, l.Wm)(v.Z, {
                name: e.icon,
                alt: e.title,
                class: (0, l.C_)(u.$style.item_icon),
                lazy: ""
              }, null, 8, ["name", "alt", "class"]), (0, l.Wm)(r.Z, {
                type: "label",
                size: "m",
                accent: "",
                class: (0, l.C_)(u.$style.item_content_title),
                responsive: !1
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.title), 1)]),
                _: 2
              }, 1032, ["class"])], 2)]),
              _: 2
            }, 1032, ["title", "class", "to", "externalTo", "target"]))), 128)), (0, l._)("div", {
              class: (0, l.C_)(u.$style.sep_section)
            }, null, 2), (0, l._)("div", {
              class: (0, l.C_)(u.$style.social_links)
            }, [((0, l.wg)(!0), (0, l.iD)(l.HY, null, (0, l.Ko)(y.value, e => ((0, l.wg)(), (0, l.iD)("div", {
              key: e.id,
              title: e.title,
              class: (0, l.C_)(u.$style.item)
            }, [(0, l.Wm)(g.Z, {
              externalTo: e.externalTo,
              target: e.target,
              "data-interface-target": "navigation-social-link",
              class: (0, l.C_)(u.$style.item_content)
            }, {
              default: (0, l.w5)(() => [(0, l.Wm)(v.Z, {
                name: e.icon,
                alt: e.title,
                class: (0, l.C_)(u.$style.item_icon),
                lazy: ""
              }, null, 8, ["name", "alt", "class"]), (0, l.Wm)(t_.Z, {
                ariaHidden: ""
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.title), 1)]),
                _: 2
              }, 1024)]),
              _: 2
            }, 1032, ["externalTo", "target", "class"])], 10, ty))), 128))], 2), (0, l._)("div", {
              class: (0, l.C_)(u.$style.sep_section)
            }, null, 2), (0, l._)("div", {
              class: (0, l.C_)(u.$style.lang_section)
            }, [(0, l.Wm)(E, {
              languageLinks: e.languageLinks
            }, null, 8, ["languageLinks"])], 2), (0, l._)("div", {
              class: (0, l.C_)(u.$style.sep_section)
            }, null, 2), (0, l._)("div", {
              class: (0, l.C_)(u.$style.copyright_section)
            }, [(0, l.Wm)(o)], 2)], 2)], 34), (0, l._)("div", {
              class: (0, l.C_)([u.$style.shadow, u.$style.shadow_top, {
                [u.$style.visible]: (0, l.SU)(a)
              }])
            }, null, 2), (0, l._)("div", {
              class: (0, l.C_)([u.$style.shadow, u.$style.shadow_bottom, {
                [u.$style.visible]: (0, l.SU)(i)
              }])
            }, null, 2)], 2)], 34))
          }
        });
        let tb = {},
          tk = {};
        tk.$style || (tk.$style = {}), tk.$style.style0 = {
          sidebar: "Zldzq",
          wrapper: "dLYnr",
          scroller: "RLcZ2",
          shadow: "Q4tmu",
          visible: "kfObB",
          shadow_top: "GwTPy",
          shadowTop: "GwTPy",
          shadow_bottom: "ZYmmU",
          shadowBottom: "ZYmmU",
          item: "LWb6j",
          item_icon: "pA8l8",
          itemIcon: "pA8l8",
          item_content: "iu70J",
          itemContent: "iu70J",
          item_content_title: "mqKRr",
          itemContentTitle: "mqKRr",
          icon_wrapper: "dqCmq",
          iconWrapper: "dqCmq",
          hovered: "WD9La",
          icon: "sCjly",
          non_hovered: "oPLYd",
          nonHovered: "oPLYd",
          rest: "kNA2L",
          sep_section: "EC1j_",
          sepSection: "EC1j_",
          lang_section: "yjDTA",
          langSection: "yjDTA",
          copyright_section: "DVvjZ",
          copyrightSection: "DVvjZ",
          social_links: "WNXh2",
          socialLinks: "WNXh2"
        }, tb.$style = Object.values(tk.$style).reduce((e, t) => Object.assign(e, t), {});
        let tC = (0, h.default)(tw, [
          ["__cssModules", tb]
        ]);
        var t$ = (0, l.aZ)({
          __name: "ModalCategories",
          setup(e) {
            let t = (0, er.E)(),
              {
                setCategoriesModalOpened: a
              } = t,
              {
                categoriesModalOpened: n
              } = (0, i.Jk)(t),
              {
                mainData: o
              } = (0, S.G)(),
              d = (0, l.Fl)(() => o.value.menuHighlightCategoriesList),
              c = (0, l.Fl)(() => o.value.menuCategoriesList),
              u = e => e?.showModal();

            function p(e) {
              e?.preventDefault(), a(!1)
            }
            let m = (0, l.iH)(0);

            function h() {
              m.value = document.documentElement.scrollTop, requestAnimationFrame(() => {
                document.body.scrollTop = m.value, document.documentElement.scrollTop = 1
              })
            }

            function f() {
              document.body.scrollTop = 0, document.documentElement.scrollTop = m.value
            }

            function _() {
              p()
            }

            function y(e) {
              e.target === e.currentTarget && p(e)
            }
            let {
              itemDynamicHover: w,
              updateItemDynamicHoverPositionDebounced: b,
              updateItemDynamicHoverPosition: k
            } = (() => {
              let e = (0, l.iH)(null),
                t = ({
                  pageX: t,
                  pageY: a,
                  currentTarget: l
                }) => {
                  let i = e.value;
                  if (!i) return;
                  let n = l.getBoundingClientRect(),
                    r = l.clientWidth / 2,
                    s = l.clientHeight / 2,
                    o = l.offsetLeft,
                    d = l.offsetTop;
                  t && a && (o = l.offsetLeft + (t - n.left - r) / (r / 15), d = l.offsetTop + (a - n.top - s) / (s / 1.5)), i.animate([{
                    transform: `translate(${o}px, ${d}px)`,
                    width: `${l.clientWidth}px`,
                    height: `${l.clientHeight}px`
                  }], {
                    duration: 200,
                    easing: "cubic-bezier(0.2, 0, 0.8, 1.4)",
                    fill: "forwards"
                  })
                },
                a = (0, ts.DI)(t, 100);
              return {
                itemDynamicHover: e,
                updateItemDynamicHoverPosition: t,
                updateItemDynamicHoverPositionDebounced: a
              }
            })();

            function C(e) {
              let t = e.currentTarget;
              "pageX" in e ? b({
                pageX: e.pageX,
                pageY: e.pageY,
                currentTarget: t
              }) : b({
                currentTarget: t
              })
            }

            function $(e) {
              let t = e.currentTarget;
              k({
                pageX: e.pageX,
                pageY: e.pageY,
                currentTarget: t
              })
            }
            return (e, t) => ((0, l.wg)(), (0, l.j4)(l.uT, {
              enterFromClass: e.$style.transition_enter_from,
              enterActiveClass: e.$style.transition_enter_active,
              leaveActiveClass: e.$style.transition_leave_active,
              leaveToClass: e.$style.transition_leave_to,
              appear: "",
              onBeforeEnter: h,
              onAfterLeave: f
            }, {
              default: (0, l.w5)(() => [(0, l.SU)(n) ? ((0, l.wg)(), (0, l.iD)("dialog", {
                key: 0,
                ref: u,
                class: (0, l.C_)(e.$style.modal),
                "data-interface-section": "modal-categories",
                onCancel: p
              }, [(0, l._)("div", {
                class: (0, l.C_)(e.$style.mobile_header)
              }, [(0, l.Wm)(tm, {
                categoriesModalMode: ""
              })], 2), (0, l._)("div", {
                class: (0, l.C_)(e.$style.modalBody)
              }, [(0, l.Wm)(H.Z, {
                icon: "close",
                color: "carbon-400",
                class: (0, l.C_)(e.$style.close_override),
                interfaceTarget: "close",
                onClick: p
              }, null, 8, ["class"]), (0, l.Wm)(H.Z, {
                externalTo: (0, l.SU)(O.Qk),
                target: "_blank",
                iconLeft: "plus",
                interfaceTarget: "navigation-link",
                class: (0, l.C_)(e.$style.add_game_override)
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.$tr("modalCategories.add_game")), 1)]),
                _: 1
              }, 8, ["externalTo", "class"]), (0, l._)("div", {
                class: (0, l.C_)(e.$style.scroller),
                onClick: y
              }, [(0, l._)("div", {
                class: (0, l.C_)(e.$style.grid_wrap),
                onClick: y
              }, [(0, l._)("div", {
                ref_key: "itemDynamicHover",
                ref: w,
                class: (0, l.C_)(e.$style.item_dynamic_hover)
              }, null, 2), (0, l._)("div", {
                class: (0, l.C_)(e.$style.grid)
              }, [((0, l.wg)(!0), (0, l.iD)(l.HY, null, (0, l.Ko)((0, l.SU)(O.nh)(e.$tr), t => ((0, l.wg)(), (0, l.j4)(g.Z, {
                key: t.title,
                "data-interface-target": "navigation-link",
                to: t.to,
                class: (0, l.C_)(e.$style.item),
                onClick: _,
                onMouseenter: C,
                onMousemove: $,
                onFocus: C
              }, {
                default: (0, l.w5)(() => [(0, l.Wm)(v.Z, {
                  name: t.icon,
                  class: (0, l.C_)(e.$style.item_icon)
                }, null, 8, ["name", "class"]), (0, l.Wm)(r.Z, {
                  type: "label",
                  size: "m",
                  accent: !0,
                  responsive: !1
                }, {
                  default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(t.title), 1)]),
                  _: 2
                }, 1024)]),
                _: 2
              }, 1032, ["to", "class"]))), 128)), ((0, l.wg)(!0), (0, l.iD)(l.HY, null, (0, l.Ko)(d.value, (t, a) => ((0, l.wg)(), (0, l.iD)(l.HY, {
                key: t.title
              }, [1 === a ? ((0, l.wg)(), (0, l.j4)(g.Z, {
                key: 0,
                to: {
                  name: (0, l.SU)(s.m8).RANDOM_GAME
                },
                class: (0, l.C_)(e.$style.item),
                "data-interface-target": "random-game",
                onClick: _,
                onMouseenter: C,
                onMousemove: $,
                onFocus: C
              }, {
                default: (0, l.w5)(() => [(0, l.Wm)(v.Z, {
                  name: "random",
                  class: (0, l.C_)(e.$style.item_icon)
                }, null, 8, ["class"]), (0, l.Wm)(r.Z, {
                  type: "label",
                  size: "m",
                  accent: !0,
                  responsive: !1
                }, {
                  default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.$tr("modalCategories.random")), 1)]),
                  _: 1
                })]),
                _: 2
              }, 1032, ["to", "class"])) : (0, l.kq)("", !0), t.location ? ((0, l.wg)(), (0, l.j4)(g.Z, {
                key: 1,
                "data-interface-target": "category",
                to: t.location,
                class: (0, l.C_)(e.$style.item),
                onClick: _,
                onMouseenter: C,
                onMousemove: $,
                onFocus: C
              }, {
                default: (0, l.w5)(() => [(0, l.Wm)(v.Z, {
                  name: t.id,
                  class: (0, l.C_)(e.$style.item_icon)
                }, null, 8, ["name", "class"]), (0, l.Wm)(r.Z, {
                  type: "label",
                  size: "m",
                  accent: !0,
                  responsive: !1
                }, {
                  default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(t.title), 1)]),
                  _: 2
                }, 1024)]),
                _: 2
              }, 1032, ["to", "class"])) : (0, l.kq)("", !0)], 64))), 128)), (0, l.Wm)(g.Z, {
                to: (0, l.SU)(O.Qk),
                target: "_blank",
                "data-interface-target": "navigation-link",
                class: (0, l.C_)([e.$style.item, e.$style.mobile]),
                onMouseenter: C,
                onMousemove: $,
                onFocus: C
              }, {
                default: (0, l.w5)(() => [(0, l.Wm)(v.Z, {
                  name: "plus",
                  class: (0, l.C_)(e.$style.item_icon)
                }, null, 8, ["class"]), (0, l.Wm)(r.Z, {
                  type: "label",
                  size: "m",
                  accent: "",
                  responsive: !1
                }, {
                  default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.$tr("modalCategories.add_game")), 1)]),
                  _: 1
                })]),
                _: 1
              }, 8, ["to", "class"])], 2), (0, l._)("div", {
                class: (0, l.C_)(e.$style.sep)
              }, null, 2), (0, l._)("div", {
                class: (0, l.C_)(e.$style.grid)
              }, [((0, l.wg)(!0), (0, l.iD)(l.HY, null, (0, l.Ko)(c.value, t => ((0, l.wg)(), (0, l.iD)(l.HY, {
                key: t.id
              }, [t.location ? ((0, l.wg)(), (0, l.j4)(g.Z, {
                key: 0,
                to: t.location,
                "data-interface-target": "navigation-link",
                class: (0, l.C_)(e.$style.item),
                onClick: _,
                onMouseenter: C,
                onMousemove: $,
                onFocus: C
              }, {
                default: (0, l.w5)(() => [(0, l.Wm)(v.Z, {
                  name: t.id,
                  class: (0, l.C_)(e.$style.item_icon)
                }, null, 8, ["name", "class"]), (0, l.Wm)(r.Z, {
                  type: "label",
                  size: "m",
                  accent: !0,
                  responsive: !1
                }, {
                  default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(t.title), 1)]),
                  _: 2
                }, 1024)]),
                _: 2
              }, 1032, ["to", "class"])) : (0, l.kq)("", !0)], 64))), 128))], 2), (0, l._)("div", {
                class: (0, l.C_)([e.$style.sep, e.$style.non_desktop])
              }, null, 2), (0, l._)("div", {
                class: (0, l.C_)([e.$style.grid, e.$style.non_desktop])
              }, [((0, l.wg)(!0), (0, l.iD)(l.HY, null, (0, l.Ko)((0, l.SU)(O.EO)(e.$tr), t => ((0, l.wg)(), (0, l.j4)(g.Z, {
                key: t.title,
                externalTo: t.externalTo,
                to: t.to,
                target: t.target,
                "data-interface-target": "navigation-link",
                class: (0, l.C_)(e.$style.item),
                onClick: _,
                onMouseenter: C,
                onMousemove: $,
                onFocus: C
              }, {
                default: (0, l.w5)(() => [(0, l.Wm)(r.Z, {
                  type: "label",
                  size: "m",
                  accent: !0,
                  responsive: !1
                }, {
                  default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(t.title), 1)]),
                  _: 2
                }, 1024)]),
                _: 2
              }, 1032, ["externalTo", "to", "target", "class"]))), 128))], 2)], 2)], 2)], 2)], 34)) : (0, l.kq)("", !0)]),
              _: 1
            }, 8, ["enterFromClass", "enterActiveClass", "leaveActiveClass", "leaveToClass"]))
          }
        });
        let tE = {},
          tA = {};
        tA.$style || (tA.$style = {}), tA.$style.style0 = {
          modal: "WruZy",
          mobile_header: "Iid1U",
          mobileHeader: "Iid1U",
          close_override: "YRfO6",
          closeOverride: "YRfO6",
          "#": "mWBIu",
          add_game_override: "Alz80",
          addGameOverride: "Alz80",
          scroller: "pi4d5",
          grid_wrap: "eicDd",
          gridWrap: "eicDd",
          grid: "eMvta",
          modalBody: "JMfRD",
          transition_enter_from: "blkQO",
          transitionEnterFrom: "blkQO",
          transition_leave_to: "ykz8B",
          transitionLeaveTo: "ykz8B",
          transition_enter_active: "_9f9X",
          transitionEnterActive: "_9f9X",
          transition_leave_active: "vKOeZ",
          transitionLeaveActive: "vKOeZ",
          item: "Fqqws",
          item_icon: "cQv79",
          itemIcon: "cQv79",
          item_dynamic_hover: "Pwyi6",
          itemDynamicHover: "Pwyi6",
          sep: "xKEtV",
          mobile: "QICIe",
          non_desktop: "aBAJG",
          nonDesktop: "aBAJG"
        }, tE.$style = Object.values(tA.$style).reduce((e, t) => Object.assign(e, t), {});
        let tT = (0, h.default)(t$, [
          ["__cssModules", tE]
        ]);
        var tS = a.p + "static/image/silver-fennec-coin-large.b78bedd8.webp",
          tO = a(2172),
          tM = a.p + "static/image/invite-friend.9310d3a5.webp",
          tP = a(1409),
          tL = (0, l.aZ)({
            __name: "ModalInvite",
            setup(e) {
              let t = (0, er.E)(),
                a = (0, ee.L)(),
                n = (0, d.tv)(),
                {
                  mainData: s
                } = (0, S.G)(),
                o = (0, T.y)(),
                {
                  inviteModalOpenedReason: c
                } = (0, i.Jk)(t),
                {
                  VUE_APP_HOST_URL: u
                } = (0, M.Z)(),
                p = (0, l.Fl)(() => (u || "") + n.resolve({
                  name: "invite",
                  params: {
                    inviteCode: a.user?.referralCode
                  }
                }).href),
                g = (0, l.iH)(!1),
                v = (0, l.Fl)(() => g.value ? o("modalInvite.btn_label_copied") : o("modalInvite.btn_label"));

              function m() {
                t.setInviteModalOpened(!1)
              }

              function h() {
                p.value && navigator.clipboard.writeText(p.value).then(() => {
                  g.value = !0, setTimeout(() => {
                    g.value = !1
                  }, 2e3)
                }, () => {
                  console.error("Failed to copy text")
                })
              }
              return (e, t) => ((0, l.wg)(), (0, l.j4)(tO.Z, (0, l.dG)({
                isOpened: !1 !== (0, l.SU)(c),
                description: e.$tr("modalInvite.description")
              }, "need_more_fennecs" === (0, l.SU)(c) ? {
                title: e.$tr("modalInvite.title_need_more_fenneks", {
                  bonus: (0, l.SU)(q.B)((0, l.SU)(s).p2eBonusInfo?.inviteBonus, {
                    shorten: !0
                  })
                }),
                image: (0, l.SU)(tS),
                alt: e.$tr("modalInvite.fennek_alt")
              } : {
                title: e.$tr("modalInvite.title"),
                image: (0, l.SU)(tM),
                alt: e.$tr("modalInvite.alt")
              }, {
                onCloseModal: m
              }), {
                "custom-content": (0, l.w5)(() => [(0, l._)("div", {
                  class: (0, l.C_)(e.$style.content)
                }, [(0, l._)("div", {
                  class: (0, l.C_)(e.$style.hr)
                }, null, 2), (0, l.Wm)(r.Z, {
                  is: "ol",
                  class: (0, l.C_)(e.$style.content_description),
                  type: "paragraph",
                  size: "s",
                  responsive: !1
                }, {
                  default: (0, l.w5)(() => [(0, l._)("li", null, (0, l.zw)(e.$tr("modalInvite.step1")), 1), (0, l._)("li", null, (0, l.zw)(e.$tr("modalInvite.step2")), 1), (0, l._)("li", null, (0, l.zw)(e.$tr("modalInvite.step3")), 1)]),
                  _: 1
                }, 8, ["class"]), (0, l._)("div", {
                  class: (0, l.C_)(e.$style.desktop)
                }, [p.value ? ((0, l.wg)(), (0, l.j4)(tP.Z, {
                  key: 0,
                  id: "invite-link",
                  name: "invite-link",
                  readonly: "",
                  value: p.value
                }, null, 8, ["value"])) : (0, l.kq)("", !0)], 2), (0, l._)("div", {
                  class: (0, l.C_)(e.$style.buttons)
                }, [(0, l.Wm)(H.Z, {
                  width: "full",
                  size: "l",
                  interfaceTarget: "copy-link",
                  disabled: g.value,
                  onClick: h
                }, {
                  default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(v.value), 1)]),
                  _: 1
                }, 8, ["disabled"]), (0, l.Wm)(H.Z, {
                  width: "full",
                  color: "carbon-400",
                  size: "l",
                  interfaceTarget: "close",
                  class: (0, l.C_)(e.$style.non_desktop_override),
                  onClick: m
                }, {
                  default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.$tr("modalInvite.close")), 1)]),
                  _: 1
                }, 8, ["class"])], 2)], 2)]),
                _: 1
              }, 16, ["isOpened", "description"]))
            }
          });
        let tx = {},
          tD = {};
        tD.$style || (tD.$style = {}), tD.$style.style0 = {
          content: "fOlGZ",
          desktop: "b79XH",
          buttons: "Tqr5r",
          hr: "q69at",
          content_description: "hCVCz",
          contentDescription: "hCVCz",
          non_desktop_override: "RlUo7",
          nonDesktopOverride: "RlUo7",
          "#": "N6zqF"
        }, tx.$style = Object.values(tD.$style).reduce((e, t) => Object.assign(e, t), {});
        let tR = (0, h.default)(tL, [
            ["__cssModules", tx]
          ]),
          tI = ["id", "onChange"];
        var tz = (0, l.aZ)({
          __name: "ModalSurvey",
          setup(e) {
            let t = (0, er.E)(),
              {
                isSurveyModalOpened: a,
                questionSurveyInfo: n
              } = (0, i.Jk)(t),
              s = (0, eo.o)(),
              o = (0, Q.r)();
            async function d({
              id: e,
              text: t
            }) {
              s.logSurveyEvent({
                gameHru: n.value.hru,
                eventName: "survey_game_completed",
                questionId: p.value.questionId,
                selectedOptionText: t,
                selectedOptionId: e,
                questionText: p.value.questionText
              }), await o.claimTask(n.value.taskId), g()
            }
            let c = (0, T.y)(),
              u = (0, l.Fl)(() => [{
                questionText: "Did you like the game?",
                questionId: "like_game",
                question: c("modalSurvey.like_game"),
                options: [{
                  selectedOption: c("modalSurvey.like_game_answer1"),
                  selectedOptionText: "yes",
                  selectedOptionId: "yes",
                  icon: "heart"
                }, {
                  selectedOption: c("modalSurvey.like_game_answer2"),
                  selectedOptionText: "ok",
                  selectedOptionId: "ok",
                  icon: "smile"
                }, {
                  selectedOption: c("modalSurvey.like_game_answer3"),
                  selectedOptionText: "no",
                  selectedOptionId: "no",
                  icon: "poop"
                }]
              }, {
                question: c("modalSurvey.recommend_game"),
                questionId: "recommend_game",
                questionText: "Would you recommend it to a friend?",
                options: [{
                  selectedOption: c("modalSurvey.recommend_game_answer1"),
                  selectedOptionText: "yes",
                  selectedOptionId: "yes",
                  icon: "heart"
                }, {
                  selectedOption: c("modalSurvey.recommend_game_answer2"),
                  selectedOptionText: "maybe",
                  selectedOptionId: "maybe",
                  icon: "smile"
                }, {
                  selectedOption: c("modalSurvey.recommend_game_answer3"),
                  selectedOptionText: "no",
                  selectedOptionId: "no",
                  icon: "poop"
                }]
              }, {
                question: c("modalSurvey.game_problems"),
                questionId: "game_problems",
                questionText: "Did you run into any problems?",
                options: [{
                  selectedOption: c("modalSurvey.game_problems_answer1"),
                  selectedOptionText: "no",
                  selectedOptionId: "no",
                  icon: "heart"
                }, {
                  selectedOption: c("modalSurvey.game_problems_answer2"),
                  selectedOptionText: "minor bugs",
                  selectedOptionId: "minor",
                  icon: "smile"
                }, {
                  selectedOption: c("modalSurvey.game_problems_answer3"),
                  selectedOptionText: "yes",
                  selectedOptionId: "yes",
                  icon: "poop"
                }]
              }, {
                question: c("modalSurvey.how_long_play"),
                questionId: "how_long_play",
                questionText: "How long did you play?",
                options: [{
                  selectedOption: c("modalSurvey.how_long_play_answer1"),
                  selectedOptionText: "less 5 min",
                  selectedOptionId: "5_min"
                }, {
                  selectedOption: c("modalSurvey.how_long_play_answer2"),
                  selectedOptionText: "5-20 min",
                  selectedOptionId: "5-20_min"
                }, {
                  selectedOption: c("modalSurvey.how_long_play_answer3"),
                  selectedOptionText: "more 20 min",
                  selectedOptionId: "more_20_min"
                }]
              }, {
                question: c("modalSurvey.game_graphic"),
                questionId: "game_graphic",
                questionText: "How did you like the graphics?",
                options: [{
                  selectedOption: c("modalSurvey.game_graphic_answer1"),
                  selectedOptionText: "awesome",
                  selectedOptionId: "awesome",
                  icon: "heart"
                }, {
                  selectedOption: c("modalSurvey.game_graphic_answer2"),
                  selectedOptionText: "decent",
                  selectedOptionId: "decent",
                  icon: "smile"
                }, {
                  selectedOption: c("modalSurvey.game_graphic_answer3"),
                  selectedOptionText: "not great",
                  selectedOptionId: "not_great",
                  icon: "poop"
                }]
              }]),
              p = (0, l.Fl)(() => (function(e) {
                if (void 0 === e) return;
                let t = (new Date().getDay() + e) % u.value.length;
                return u.value[t]
              })(n.value?.questionSeedNum));

            function g() {
              t.setSurveyModalSurveyInfo(null)
            }
            return (e, t) => ((0, l.wg)(), (0, l.j4)(tO.Z, {
              image: (0, l.SU)(tS),
              alt: e.$tr("modalSurvey.alt"),
              isOpened: (0, l.SU)(a),
              onCloseModal: g
            }, (0, l.Nv)({
              _: 2
            }, [p.value ? {
              name: "custom-content",
              fn: (0, l.w5)(() => [(0, l._)("div", {
                class: (0, l.C_)(e.$style.fieldset)
              }, [(0, l.Wm)(r.Z, {
                type: "header",
                size: "s",
                responsive: !1,
                class: (0, l.C_)(e.$style.legend)
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(p.value?.question), 1)]),
                _: 1
              }, 8, ["class"]), (0, l.Wm)(r.Z, {
                is: "p",
                class: (0, l.C_)(e.$style.description),
                size: "s",
                responsive: !1
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.$tr("modalSurvey.description")), 1)]),
                _: 1
              }, 8, ["class"]), (0, l._)("div", {
                class: (0, l.C_)(e.$style.feedback_list)
              }, [((0, l.wg)(!0), (0, l.iD)(l.HY, null, (0, l.Ko)(p.value.options, t => ((0, l.wg)(), (0, l.iD)("label", {
                key: t.selectedOptionId,
                class: (0, l.C_)(e.$style.feedback)
              }, [(0, l._)("input", {
                id: t.selectedOptionId,
                type: "radio",
                name: "feedback",
                class: (0, l.C_)(e.$style.hiddenInput),
                onChange: e => d({
                  id: t.selectedOptionId,
                  text: t.selectedOptionText
                })
              }, null, 42, tI), t.icon ? ((0, l.wg)(), (0, l.j4)(v.Z, {
                key: 0,
                name: t.icon,
                class: (0, l.C_)(e.$style[t.icon])
              }, null, 8, ["name", "class"])) : (0, l.kq)("", !0), (0, l.Wm)(r.Z, {
                type: "label",
                size: "l",
                accent: "",
                responsive: !1
              }, {
                default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(t.selectedOption), 1)]),
                _: 2
              }, 1024)], 2))), 128))], 2)], 2)]),
              key: "0"
            } : void 0]), 1032, ["image", "alt", "isOpened"]))
          }
        });
        let tU = {},
          tB = {};
        tB.$style || (tB.$style = {}), tB.$style.style0 = {
          fieldset: "HNanm",
          legend: "Rh880",
          description: "EaIuL",
          feedback_list: "kAkin",
          feedbackList: "kAkin",
          feedback: "yeQey",
          hiddenInput: "hORgw",
          heart: "mOeCH",
          poop: "FlHfd",
          smile: "ra6p3"
        }, tU.$style = Object.values(tB.$style).reduce((e, t) => Object.assign(e, t), {});
        let tj = (0, h.default)(tz, [
          ["__cssModules", tU]
        ]);
        var tH = a(8688),
          tZ = a(8932),
          tq = a(4351),
          tW = a(3488),
          tF = a(7949),
          tG = (0, l.aZ)({
            __name: "DesktopStickyBanner",
            setup(e) {
              let t = (0, eo.o)(),
                a = (0, et.t)(),
                i = (0, l.iH)(!0),
                n = (0, l.iH)(!0),
                r = (0, l.iH)();

              function s() {
                t.logEvent({
                  event: "custom_event",
                  eventName: "ad_close",
                  adPlacement: "sticky_desktop"
                }), i.value = !1
              }
              return (0, to.S1d)(r, e => {
                n.value = !e[0].isIntersecting
              }), (e, t) => ((0, l.wg)(), (0, l.iD)(l.HY, null, [(0, l._)("div", {
                ref_key: "sentinelRef",
                ref: r
              }, null, 512), (0, l.SU)(a) ? ((0, l.wg)(), (0, l.j4)(l.uT, {
                key: 0,
                enterFromClass: e.$style.fade_enter_from,
                enterActiveClass: e.$style.fade_enter_active,
                leaveActiveClass: e.$style.fade_leave_active,
                leaveToClass: e.$style.fade_leave_to,
                appear: ""
              }, {
                default: (0, l.w5)(() => [i.value ? ((0, l.wg)(), (0, l.iD)("div", {
                  key: 0,
                  class: (0, l.C_)(e.$style.banner)
                }, [(0, l.Wm)(tF.Z, {
                  type: "sticky_desktop"
                }, {
                  default: (0, l.w5)(({
                    isVisible: t
                  }) => [t && n.value ? ((0, l.wg)(), (0, l.j4)(H.Z, {
                    key: 0,
                    size: "s",
                    color: "carbon-400",
                    class: (0, l.C_)(e.$style.close_button_override),
                    interfaceTarget: "close-sticky-desktop-banner",
                    onClick: s
                  }, {
                    default: (0, l.w5)(() => [(0, l.Uk)((0, l.zw)(e.$tr("desktopStickyBanner.closeButtonLabel")), 1)]),
                    _: 1
                  }, 8, ["class"])) : (0, l.kq)("", !0)]),
                  _: 1
                })], 2)) : (0, l.kq)("", !0)]),
                _: 1
              }, 8, ["enterFromClass", "enterActiveClass", "leaveActiveClass", "leaveToClass"])) : (0, l.kq)("", !0)], 64))
            }
          });
        let tN = {},
          tV = {};
        tV.$style || (tV.$style = {}), tV.$style.style0 = {
          banner: "fuK8J",
          close_button_override: "QNwI2",
          closeButtonOverride: "QNwI2",
          "#": "mwUfF",
          fade_enter_active: "VJgdG",
          fadeEnterActive: "VJgdG",
          fade_leave_active: "dGk5e",
          fadeLeaveActive: "dGk5e",
          fade_enter_from: "WexEe",
          fadeEnterFrom: "WexEe",
          fade_leave_to: "Y2Hv5",
          fadeLeaveTo: "Y2Hv5"
        }, tN.$style = Object.values(tV.$style).reduce((e, t) => Object.assign(e, t), {});
        let tY = (0, h.default)(tG, [
          ["__cssModules", tN]
        ]);
        var tK = (0, l.aZ)({
          __name: "MobileStickyBanner",
          setup(e) {
            let t = (0, eo.o)(),
              a = (0, et.t)(),
              i = (0, l.iH)(!1),
              n = (0, l.iH)(!0),
              r = (0, l.iH)(!0),
              s = (0, l.iH)();

            function o() {
              t.logEvent({
                event: "custom_event",
                eventName: "ad_close",
                adPlacement: "sticky_mobile"
              }), n.value = !1
            }

            function d(e) {
              i.value = e
            }
            return (0, to.S1d)(s, e => {
              r.value = !e[0].isIntersecting
            }), (e, t) => ((0, l.wg)(), (0, l.iD)(l.HY, null, [(0, l._)("div", {
              ref_key: "sentinelRef",
              ref: s
            }, null, 512), (0, l.SU)(a) ? ((0, l.wg)(), (0, l.j4)(l.uT, {
              key: 0,
              enterFromClass: e.$style.fade_enter_from,
              enterActiveClass: e.$style.fade_enter_active,
              leaveActiveClass: e.$style.fade_leave_active,
              leaveToClass: e.$style.fade_leave_to,
              appear: ""
            }, {
              default: (0, l.w5)(() => [n.value ? ((0, l.wg)(), (0, l.iD)("div", {
                key: 0,
                class: (0, l.C_)(e.$style.banner)
              }, [(0, l._)("div", {
                class: (0, l.C_)(e.$style.backdrop)
              }, null, 2), i.value && r.value ? ((0, l.wg)(), (0, l.iD)("button", {
                key: 0,
                class: (0, l.C_)(e.$style.close_button),
                "data-interface-target": "close-sticky-desktop-banner",
                onClick: o
              }, [(0, l.Wm)(v.Z, {
                name: "close",
                class: (0, l.C_)(e.$style.close_icon)
              }, null, 8, ["class"])], 2)) : (0, l.kq)("", !0), (0, l.Wm)(tF.Z, {
                type: "sticky_mobile_non_game_page",
                class: (0, l.C_)(e.$style.ad_block_override),
                "onUpdate:visible": d
              }, null, 8, ["class"])], 2)) : (0, l.kq)("", !0)]),
              _: 1
            }, 8, ["enterFromClass", "enterActiveClass", "leaveActiveClass", "leaveToClass"])) : (0, l.kq)("", !0)], 64))
          }
        });
        let tJ = {},
          tX = {};
        tX.$style || (tX.$style = {}), tX.$style.style0 = {
          banner: "IMIzq",
          close_button: "gsNCd",
          closeButton: "gsNCd",
          close_icon: "Ww9Z6",
          closeIcon: "Ww9Z6",
          backdrop: "kH68r",
          ad_block_override: "jQLbs",
          adBlockOverride: "jQLbs",
          "#": "_awg7",
          fade_enter_active: "t1UTw",
          fadeEnterActive: "t1UTw",
          fade_leave_active: "wYnNG",
          fadeLeaveActive: "wYnNG",
          fade_enter_from: "ihvYh",
          fadeEnterFrom: "ihvYh",
          fade_leave_to: "ul92q",
          fadeLeaveTo: "ul92q"
        }, tJ.$style = Object.values(tX.$style).reduce((e, t) => Object.assign(e, t), {});
        let tQ = (0, h.default)(tK, [
          ["__cssModules", tJ]
        ]);
        var t0 = (0, l.aZ)({
            __name: "StickyBanner",
            setup(e) {
              let t = (0, tH.i)(),
                {
                  promptDisplayed: a
                } = (0, i.Jk)((0, tW.E)()),
                n = (0, d.yj)(),
                {
                  fullScreen: r
                } = (0, i.Jk)((0, er.E)()),
                {
                  platform: s
                } = (0, tq.q)(),
                o = (0, l.Fl)(() => "desktop" === s && n.meta.showDesktopStickyBanner),
                c = (0, l.Fl)(() => "desktop" !== s && n.meta.showMobileStickyBanner && !r.value && !t.isDisplaying && !(0, tZ.W_)() && !a.value);
              return (e, t) => ((0, l.wg)(), (0, l.iD)(l.HY, null, [o.value ? ((0, l.wg)(), (0, l.j4)(tY, {
                key: (0, l.SU)(n).path
              })) : (0, l.kq)("", !0), c.value ? ((0, l.wg)(), (0, l.j4)(tQ, {
                key: (0, l.SU)(n).path
              })) : (0, l.kq)("", !0)], 64))
            }
          }),
          t1 = a(8312),
          t2 = (0, l.aZ)({
            __name: "Layout",
            props: {
              localeData: {},
              additionalCategories: {}
            },
            setup(e) {
              let t = (0, tW.E)(),
                {
                  initialized: a
                } = (0, i.Jk)(t),
                {
                  isUserInfoLoaded: n
                } = (0, i.Jk)((0, ee.L)()),
                {
                  fullScreen: r
                } = (0, i.Jk)((0, er.E)()),
                {
                  suspense: s
                } = (0, S.G)(),
                o = (0, t1.k)();

              function d() {
                a.value && n.value && t.setPrompt()
              }

              function c() {
                o.disableScroll(r.value), r.value ? t.cancelPrompt() : d()
              }
              return (0, l.YP)(r, c), (0, l.YP)([a, n], d), (0, l.vl)(s), (0, l.bv)(c), (t, a) => ((0, l.wg)(), (0, l.iD)("div", {
                class: (0, l.C_)(t.$styleCrit.container)
              }, [(0, l._)("div", {
                class: (0, l.C_)(t.$styleCrit.grid)
              }, [(0, l._)("div", {
                class: (0, l.C_)(t.$styleCrit.overlay_blur)
              }, null, 2), (0, l.Wm)(th.Z, {
                hydrate: (0, l.mI)()
              }, {
                default: (0, l.w5)(() => [(0, l._)("div", {
                  class: (0, l.C_)(t.$styleCrit.left)
                }, [(0, l.Wm)(tC, {
                  languageLinks: e.localeData?.languageLinks
                }, null, 8, ["languageLinks"])], 2)]),
                _: 1
              }, 8, ["hydrate"]), (0, l._)("div", {
                class: (0, l.C_)(t.$styleCrit.right)
              }, [(0, l.Wm)(th.Z, {
                hydrate: (0, l.mI)()
              }, {
                default: (0, l.w5)(() => [(0, l._)("div", {
                  class: (0, l.C_)(t.$styleCrit.desktop_header)
                }, [(0, l.Wm)(tr)], 2)]),
                _: 1
              }, 8, ["hydrate"]), (0, l.Wm)(th.Z, {
                hydrate: (0, l.mI)()
              }, {
                default: (0, l.w5)(() => [(0, l._)("div", {
                  class: (0, l.C_)(t.$styleCrit.mobile_header)
                }, [(0, l.Wm)(tm)], 2)]),
                _: 1
              }, 8, ["hydrate"]), (0, l.WI)(t.$slots, "default"), (0, l.Wm)(th.Z, {
                hydrate: (0, l.mI)()
              }, {
                default: (0, l.w5)(() => [(0, l.Wm)(j, {
                  languageLinks: e.localeData?.languageLinks,
                  additionalCategories: e.additionalCategories
                }, null, 8, ["languageLinks", "additionalCategories"])]),
                _: 1
              }, 8, ["hydrate"])], 2), (0, l.Wm)(t0)], 2), (0, l.Wm)(th.Z, {
                hydrate: (0, l.mI)()
              }, {
                default: (0, l.w5)(() => [(0, l.Wm)(tT), (0, l.Wm)(tR), (0, l.Wm)(tj)]),
                _: 1
              }, 8, ["hydrate"])], 2))
            }
          }),
          t5 = a(2333);
        let t4 = {},
          t3 = {},
          t8 = e => Object.values(t3[e]).reduce((e, t) => Object.assign(e, t), {});
        t3.$styleCrit || (t3.$styleCrit = {}), t3.$styleCrit.style0 = t5.Z, t4.$styleCrit = t8("$styleCrit"), t3.$style || (t3.$style = {}), t3.$style.style1 = {
          desktop_header: "nY4HI",
          desktopHeader: "nY4HI",
          mobile_header: "d_gAk",
          mobileHeader: "d_gAk",
          left: "MGWb5"
        }, t4.$style = t8("$style");
        var t6 = (0, h.default)(t2, [
          ["__cssModules", t4]
        ])
      },
      1485: function(e, t, a) {
        a.d(t, {
          Z: function() {
            return o
          }
        });
        var l = a(5595),
          i = a(1099),
          n = a(4630),
          r = a(3811),
          s = a(4886),
          o = (0, l.aZ)({
            __name: "ErrorPage",
            props: {
              type: {}
            },
            setup(e) {
              let {
                getCanonicalAndAlternates: t
              } = (0, r.W)();
              return (0, i.u)(() => ({
                link: t({
                  forRoute: {
                    name: s.m8.MAIN
                  }
                })
              })), (e, t) => ((0, l.wg)(), (0, l.j4)(n.Z, {
                type: e.type,
                showButtons: ""
              }, null, 8, ["type"]))
            }
          })
      },
      1212: function(e, t, a) {
        e.exports = a.p + "static/image/Playgama-OG.b0c038bf.webp"
      },
      2765: function(e, t, a) {
        e.exports = a.p + "static/image/favicon-192.forced.d3a13dd9.png"
      },
      86: function(e, t, a) {
        e.exports = a.p + "static/image/favicon-512.forced.0b48bc05.png"
      },
      1301: function(e, t, a) {
        e.exports = a.p + "static/svg/favicon.01822d39.svg"
      },
      8688: function(e, t, a) {
        a.d(t, {
          i: function() {
            return c
          }
        });
        var l = a(144),
          i = a(5595),
          n = a(7405),
          r = a(2413),
          s = a(1318),
          o = a.p + "static/svg/chrome-desktop.a5cc9b1f.svg",
          d = a(8932);
        let c = (0, l.Q_)("pwa-install", () => {
          let e = (0, i.iH)(null),
            t = (0, n.E)(),
            l = (0, s.E)(),
            c = (0, r.y)(),
            u = (0, i.iH)(0),
            p = (0, i.iH)(0),
            g = (0, i.iH)(!1),
            v = (0, i.iH)(!1),
            m = (0, i.iH)(0),
            h = (0, i.iH)(!1),
            f = (0, i.iH)(!1),
            _ = (0, i.Fl)(() => !(v.value || l.fullScreen || m.value < 2 || u.value >= 100 || Date.now() - p.value < 6048e5)),
            y = () => {
              g.value = !0, p.value = Date.now(), u.value += 1, f.value = !1
            },
            w = () => {
              v.value = !0, p.value = Date.now(), u.value += 1
            },
            b = () => {
              e.value && k(), f.value = !1
            },
            k = async () => {
              if (e.value) try {
                await e.value.prompt();
                let {
                  outcome: t
                } = await e.value.userChoice;
                "accepted" === t ? w() : y(), e.value = null
              } catch {
                y()
              }
            }, C = async (l = !1) => {
              let i, n;
              if (!l && !_.value) return;
              (0, d.n1)() || (0, d.v0)() ? n = o: i = (0, d.h9)() || (0, d.uL)() ? await a.e("970").then(a.t.bind(a, 5908, 19)).then(e => e.default) : (0, d.rW)() ? await a.e("501").then(a.t.bind(a, 2078, 19)).then(e => e.default) : await a.e("917").then(a.t.bind(a, 3303, 19)).then(e => e.default);
              let r = (0, d.rW)() ? c("toast-pwa.description-safari-desktop") : c("toast-pwa.description"),
                s = e.value ? c("toast-pwa.button_text") : void 0;
              f.value = !0;
              let g = {
                type: "pwa-prompt",
                title: c("toast-pwa.title"),
                description: r,
                animation: i,
                image: n,
                buttonText: s,
                onAccept: b,
                onClose: y,
                isFullScreenAllowed: l
              };
              t.showToast(g), p.value = Date.now(), u.value += 1
            };
          async function $() {
            e.value ? await k() : await C(!0)
          }
          return {
            deferredPrompt: e,
            displayCount: u,
            lastDisplayTime: p,
            optedOut: g,
            installed: v,
            sessions: m,
            triggerNativePrompt: k,
            handleOptOut: y,
            handleAccepted: b,
            handleInstalled: w,
            showPWAInstallPrompt: C,
            shouldShowPrompt: _,
            init: function() {
              if (!h.value) {
                if (h.value = !0, m.value += 1, (0, d.W_)()) {
                  v.value = !0;
                  return
                }
                window.addEventListener("beforeinstallprompt", t => {
                  t.preventDefault(), e.value = t
                }), window.addEventListener("appinstalled", () => {
                  w()
                }), setTimeout(C, 3e3)
              }
            },
            initialized: h,
            isDisplaying: f,
            install: $
          }
        }, {
          persist: {
            key: "pwa_install",
            pick: ["displayCount", "lastDisplayTime", "optedOut", "installed", "sessions"]
          }
        })
      },
      8932: function(e, t, a) {
        function l(e) {
          return !!window.navigator.userAgent.match(e)
        }

        function i() {
          return n() && l(/CriOS/)
        }

        function n() {
          return l(/iPhone|iPad|iPod/) || !!(l(/iPad/) || l(/Macintosh/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1)
        }

        function r() {
          return n() && l(/Safari/) && !i() && !(n() && l(/FxiOS/))
        }

        function s() {
          return window.navigator.userAgent.includes("Safari") && !window.navigator.userAgent.includes("Chrome") && !window.navigator.userAgent.includes("Edg") && window.navigator.userAgent.includes("Macintosh")
        }

        function o() {
          let e = window.navigator.userAgent.includes("Chrome") && !window.navigator.userAgent.includes("Edg"),
            t = window.navigator.userAgent.includes("Windows") || window.navigator.userAgent.includes("Macintosh") || window.navigator.userAgent.includes("Linux");
          return e && t
        }

        function d() {
          return window.navigator.userAgent.includes("Edg/")
        }

        function c() {
          return !!("standalone" in window.navigator && window.navigator.standalone)
        }

        function u() {
          return "undefined" != typeof window && !!window.navigator && (c() || !!window.matchMedia("(display-mode: standalone)").matches || !!document.referrer.includes("android-app://com.playgama.twa"))
        }
        a.d(t, {
          W_: function() {
            return u
          },
          h9: function() {
            return r
          },
          hD: function() {
            return c
          },
          n1: function() {
            return o
          },
          rW: function() {
            return s
          },
          uL: function() {
            return i
          },
          v0: function() {
            return d
          }
        })
      },
      3533: function(e, t, a) {
        a.d(t, {
          r: function() {
            return c
          }
        }), a(9929), a(6301), a(5123), a(793), a(102);
        var l = a(144),
          i = a(5595),
          n = a(1318),
          r = a(8518),
          s = a(1920),
          o = a(4423),
          d = a(1097);
        let c = (0, l.Q_)("tasks", () => {
          let e = (0, s.L)(),
            t = (0, r.o)(),
            a = (0, n.E)(),
            c = (0, d.Ek)(),
            {
              tasks: u,
              tasksError: p
            } = (0, l.Jk)(e),
            g = (0, i.iH)(!1),
            v = (0, i.Fl)(() => u.value.filter(e => "CLAIMED" !== e.status)),
            m = (0, i.Fl)(() => v.value[0]),
            h = (0, i.Fl)(() => u.value.filter(e => (0, o.dQ)(e) && "COMPLETED" === e.status)),
            f = (0, i.Fl)(() => u.value.length > 0 && 0 === v.value.length),
            _ = (0, i.Fl)(() => !f.value || p.value);
          return {
            onTaskClaimed: async function e(e) {
              if ((0, o.dQ)(e)) {
                let t = h.value.findIndex(t => t.task_id === e.task_id);
                a.setSurveyModalSurveyInfo({
                  questionSeedNum: Math.max(t, 0),
                  hru: e.settings.game.hru,
                  taskId: e.task_id
                })
              } else await c.claimTask(e.task_id)
            },
            onTaskStart: function(e) {
              u.value.find(({
                task_id: t
              }) => t === e) && t.logEvent({
                event: "custom_event",
                eventName: "do-task",
                action: "click"
              })
            },
            onReloadClick: async function() {
              await e.getUserTasks()
            },
            claimTask: async function a(a) {
              t.logEvent({
                event: "custom_event",
                eventName: "claim",
                action: "click"
              }), g.value = !0, await e.claimUserTasks(a), g.value = !1
            },
            allTasksClaimed: f,
            notClaimedTasks: v,
            tasksError: p,
            showTasks: _,
            tasks: u,
            firstTask: m,
            isClaimStarted: g
          }
        })
      },
      7405: function(e, t, a) {
        a.d(t, {
          E: function() {
            return n
          }
        });
        var l = a(144),
          i = a(5595);
        let n = (0, l.Q_)("toast", () => {
          let e = (0, i.iH)(!1),
            t = (0, i.iH)(null);
          return {
            toast: t,
            isVisible: e,
            showToast: a => {
              t.value = {
                ...a
              }, e.value = !0
            },
            closeToast: () => {
              t.value?.onClose && t.value.onClose(), e.value = !1, t.value = null
            },
            acceptToast: () => {
              t.value?.onAccept && t.value.onAccept(), e.value = !1, t.value = null
            }
          }
        })
      },
      7788: function(e, t, a) {
        a.d(t, {
          J: function() {
            return n
          },
          Z: function() {
            return r
          }
        });
        var l = a(5595);
        let i = Symbol("config"),
          n = e => t => {
            t.provide(i, e)
          };

        function r() {
          let e = (0, l.f3)(i);
          if (!e) throw Error("No config provided in Vue app.");
          return e
        }
      },
      3811: function(e, t, a) {
        a.d(t, {
          W: function() {
            return p
          },
          v: function() {
            return c
          }
        }), a(2394), a(5646), a(9774), a(5123);
        var l = a(5595),
          i = a(9938),
          n = a(8977),
          r = a(7626),
          s = a(4886),
          o = a(7788);
        let d = Symbol("localized-routers"),
          c = e => t => {
            t.provide(d, e)
          },
          u = e => ({
            ...e,
            query: {}
          });

        function p() {
          let e = (0, r.s2)().getDefaultLocale(),
            t = (0, l.f3)(d),
            {
              VUE_APP_HOST_URL: a
            } = (0, o.Z)();
          if (!t) throw Error("No localized routers provided in Vue app.");
          let c = (0, i.yj)(),
            p = (0, l.Fl)(() => c.name ? {
              name: c.name || void 0,
              params: c.params,
              query: c.query
            } : {
              name: s.m8.MAIN
            });
          return {
            getCanonicalAndAlternates: ({
              forRoute: l = p.value,
              mapRoute: i = u,
              onlyCanonical: r
            } = {}) => {
              let s = [],
                o = t[e],
                d = o.resolve(l).meta.noLocaleInRoute;
              if (d && !1 === r) throw Error("onlyCanonical mode cannot be turned off for routes with noLocaleInRoute meta");
              if (d || r) {
                let t = i(l, e);
                return s.push({
                  rel: "canonical",
                  href: `${a}${o.resolve(t).fullPath}`
                }), s
              }
              let c = p.value.params?.locale,
                g = c ? (0, n.zK)(c) : e;
              return Object.entries(t).forEach(([t, r]) => {
                let {
                  locale: o,
                  ...d
                } = l.params || {}, c = i({
                  ...l,
                  params: d
                }, t);
                s.push({
                  rel: t === g ? "canonical" : "alternate",
                  href: `${a}${r.resolve(c).fullPath}`,
                  hreflang: t === g ? void 0 : (0, n.DH)(t)
                }), t === e && s.push({
                  rel: "alternate",
                  href: `${a}${r.resolve(c).fullPath}`,
                  hreflang: "x-default"
                })
              }), s
            },
            getLocalizedUrls: ({
              forRoute: e = p.value,
              mapRoute: a = u
            } = {}) => {
              let {
                locale: l,
                ...i
              } = e.params || {}, n = {};
              return Object.entries(t).forEach(([t, l]) => {
                let r = a({
                  ...e,
                  params: i
                }, t);
                n[t] = l.resolve(r).fullPath
              }), n
            }
          }
        }
      },
      2157: function(e, t, a) {
        a.d(t, {
          L: function() {
            return d
          },
          w: function() {
            return o
          }
        }), a(6330), a(8221), a(5863), a(5646), a(9774), a(5123);
        var l = a(9938),
          i = a(1704),
          n = a(4886),
          r = a(4351);
        let s = {
          tag: n.m8.TAG,
          series: n.m8.SERIES,
          category: n.m8.CATEGORY
        };

        function o() {
          let e = ["clid", "autoplay", "debug", i.u],
            {
              queryParams: t
            } = (0, r.q)();
          return {
            keepRequiredParams: function(a) {
              try {
                let l = new URLSearchParams;
                if (t.forEach(([t, a]) => {
                    e.includes(t) && l.set(t, a)
                  }), "string" == typeof a) {
                  let [e, t] = a.split("?"), i = new URLSearchParams(t);
                  l.forEach((e, t) => {
                    i.set(t, e)
                  });
                  let n = i.toString();
                  return n ? `${e}?${n}` : e
                } {
                  let e = a.query ? {
                    ...a.query
                  } : {};
                  return l.forEach((t, a) => {
                    e[a] = t
                  }), {
                    ...a,
                    query: e
                  }
                }
              } catch {
                throw Error("Could not retrieve URL params")
              }
            },
            getCategoryRoute: function({
              hru: e,
              type: t
            }) {
              return {
                name: s[t],
                params: {
                  hru: e
                }
              }
            }
          }
        }
        let d = () => {
          let e = (0, l.tv)();
          return t => {
            let {
              href: a
            } = e.resolve(t);
            return a.startsWith("#") && (a = a.slice(1)), a
          }
        }
      },
      8312: function(e, t, a) {
        a.d(t, {
          k: function() {
            return l
          }
        });

        function l() {
          return {
            disableScroll: function(e) {
              document.documentElement.classList.toggle("disable_scroll", e)
            }
          }
        }
      },
      6177: function(e, t, a) {
        a.d(t, {
          v: function() {
            return i
          }
        });
        var l = a(5595);

        function i() {
          let e = (0, l.iH)(!1),
            t = (0, l.iH)(!0);
          return {
            topActive: e,
            bottomActive: t,
            onVerticalScroll: function(a) {
              let l = a.currentTarget;
              if (!(l instanceof HTMLElement)) return;
              let i = l.scrollTop + l.clientHeight >= l.scrollHeight - 1;
              e.value = l.scrollTop > 0, t.value = !i
            }
          }
        }
      },
      2413: function(e, t, a) {
        a.d(t, {
          y: function() {
            return i
          }
        });
        var l = a(4070);

        function i() {
          let {
            t: e
          } = (0, l.QT)();
          return e
        }
      },
      1704: function(e, t, a) {
        a.d(t, {
          CK: function() {
            return n
          },
          DY: function() {
            return r
          },
          Kg: function() {
            return l
          },
          W_: function() {
            return c
          },
          rP: function() {
            return s
          },
          sL: function() {
            return i
          },
          tA: function() {
            return o
          },
          u: function() {
            return d
          }
        });
        let l = ["game_opened", "ping", "navigation", "portal_session_end"],
          i = {
            direct: "direct",
            directTest: "direct-test",
            unknown: "unknown"
          },
          n = "pwa-manifest",
          r = 16,
          s = 45,
          o = 16,
          d = "backend_flags",
          c = "https://customer-8wsds98g05tbeoot.cloudflarestream.com/"
      },
      5597: function(e, t, a) {
        a(2394), a(6330), a(8221), a(5863);
        var l = a(2437),
          i = a(4558),
          n = a(896),
          r = a(5595),
          s = a(9938),
          o = a(1099),
          d = a(8977),
          c = a(7626),
          u = (0, r.aZ)({
            __name: "App",
            setup(e) {
              let {
                currentLocale: t
              } = (0, c.s2)();
              return (0, o.u)({
                htmlAttrs: {
                  class: "strict-px",
                  lang: (0, d.DH)(t.value),
                  translate: "no"
                }
              }), (e, t) => {
                let a = (0, r.up)("RouterView");
                return (0, r.wg)(), (0, r.j4)(a)
              }
            }
          });
        a(1287);
        var p = a(8932),
          g = a(7788),
          v = a(144),
          m = a(5675);
        a(793), a(102), a(5123), a(5646), a(9774), a(9560), a(9734);
        var h = a(2172),
          f = a(9622),
          _ = (0, r.aZ)({
            __name: "DebugDialog",
            setup(e) {
              let t = (0, f.f)(),
                {
                  isOpen: a,
                  debugData: l
                } = (0, v.Jk)(t),
                i = (0, r.Fl)(() => l.value?.data ? JSON.stringify(l.value.data, null, 2) : "");
              return (e, n) => ((0, r.wg)(), (0, r.j4)(h.Z, {
                isOpened: (0, r.SU)(a),
                title: (0, r.SU)(l)?.title,
                wide: !0,
                "data-interface-section": "debug-dialog",
                onCloseModal: (0, r.SU)(t).closeDebugDialog
              }, {
                "custom-content": (0, r.w5)(() => [(0, r._)("pre", {
                  class: (0, r.C_)(e.$style.body)
                }, (0, r.zw)(i.value), 3)]),
                _: 1
              }, 8, ["isOpened", "title", "onCloseModal"]))
            }
          }),
          y = a(3744);
        let w = {},
          b = {};
        b.$style || (b.$style = {}), b.$style.style0 = {
          body: "a98Pt"
        }, w.$style = Object.values(b.$style).reduce((e, t) => Object.assign(e, t), {});
        let k = (0, y.default)(_, [
          ["__cssModules", w]
        ]);
        var C = a(6365),
          $ = a(1212),
          E = a.p + "static/image/favicon-32.forced.d53dd481.png",
          A = a.p + "static/image/favicon-48.forced.36d367ef.png",
          T = a.p + "static/image/favicon-96.forced.47342930.png",
          S = a.p + "static/image/favicon-144.forced.1c4e48d1.png",
          O = a.p + "static/image/favicon-180.forced.07df3385.png",
          M = a(2765),
          P = a(86),
          L = a.p + "static/svg/favicon-mask.ca1635ca.svg",
          x = a(1301),
          D = a(3811),
          R = a(2413),
          I = a(1704),
          z = a(1591),
          U = a(4351),
          B = a(3488),
          j = a(6896);
        let H = {
          "data-head-meta": ""
        };
        var Z = (0, r.aZ)({
            __name: "HeadMeta",
            props: {
              prepareGoogleAds: {
                type: Boolean
              }
            },
            setup(e) {
              let t = {
                  PGFavicon32: E,
                  PGFavicon48: A,
                  PGFavicon96: T,
                  PGFavicon144: S,
                  PGFavicon180: O,
                  PGFavicon192: M,
                  PGFavicon512: P,
                  PGFaviconSVG: x
                },
                a = (0, R.y)(),
                l = (0, s.yj)(),
                i = (0, C.s4v)(),
                n = (0, B.E)(),
                d = (0, U.q)(),
                {
                  platform: c
                } = (0, v.Jk)(d),
                u = (() => {
                  let e = [];
                  return [
                    ["SVG", "image/svg+xml"],
                    [32, "image/png"],
                    [48, "image/png"],
                    [96, "image/png"],
                    [144, "image/png"],
                    [180, "image/png"],
                    [192, "image/png"],
                    [512, "image/png"]
                  ].forEach(([a, l]) => {
                    let i = "number" == typeof a ? `${a}x${a}` : void 0;
                    e.push({
                      rel: "icon",
                      type: l,
                      sizes: i,
                      href: t[`PGFavicon${a}`]
                    })
                  }), e
                })(),
                {
                  VUE_APP_HOST_URL: p,
                  ROBOTS_DISALLOW: m
                } = (0, g.Z)(),
                h = (0, r.Fl)(() => {
                  let t = ["window.dataLayer = window.dataLayer || [];"];
                  return e.prepareGoogleAds && t.push(), i.value && t.push({
                    src: "https://accounts.google.com/gsi/client",
                    async: !0,
                    onload: n.initGlobalSignIn
                  }), t
                }),
                f = (0, r.Fl)(() => {
                  let e = [{
                    name: "description",
                    content: a("headMeta.description")
                  }, {
                    name: "validation-token",
                    content: "hb42hn0e5uyz0bfp"
                  }, {
                    name: 'color-scheme"',
                    content: "dark"
                  }, {
                    name: "mobile-web-app-capable",
                    content: "yes"
                  }, {
                    name: "apple-mobile-web-app-capable",
                    content: "yes"
                  }, {
                    name: "apple-mobile-web-app-status-bar-style",
                    content: "black-translucent"
                  }, {
                    name: "theme-color",
                    content: "#000000"
                  }, {
                    property: "og:image",
                    content: $
                  }, {
                    property: "og:image:alt",
                    content: a("headMeta.alt_image")
                  }, {
                    property: "og:title",
                    content: a("headMeta.title")
                  }, {
                    property: "og:description",
                    content: a("headMeta.description")
                  }, {
                    property: "og:type",
                    content: "website"
                  }, {
                    property: "og:url",
                    content: `${p}${"/"===l.fullPath?"":l.fullPath}`
                  }, {
                    property: "og:site_name",
                    content: "Playgama.com"
                  }, {
                    name: "twitter:card",
                    content: "summary"
                  }, {
                    name: "twitter:title",
                    content: a("headMeta.title")
                  }, {
                    name: "twitter:description",
                    content: a("headMeta.description")
                  }, {
                    name: "twitter:image",
                    content: $
                  }, {
                    name: "twitter:image:alt",
                    content: a("headMeta.alt_image")
                  }];
                  return "DISALLOW" === m && e.push({
                    name: "robots",
                    content: "noindex"
                  }), e
                }),
                {
                  getCanonicalAndAlternates: _
                } = (0, D.W)(),
                y = (0, r.Fl)(() => {
                  let t = [..."ios" !== c.value ? [{
                    rel: "manifest",
                    href: `/manifest/main.webmanifest?clid=${j.y$}`,
                    key: I.CK
                  }] : [], {
                    rel: "shortcut icon",
                    href: "/favicon.ico"
                  }, ...u, {
                    rel: "mask-icon",
                    href: L,
                    color: "#9747FF"
                  }, {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: O,
                    key: "apple-touch-icon"
                  }, ..._()];
                  return e.prepareGoogleAds && t.push({
                    rel: "preconnect",
                    href: "https://securepubads.g.doubleclick.net",
                    as: "script"
                  }, {
                    rel: "preconnect",
                    href: "https://pagead2.googlesyndication.com",
                    as: "script"
                  }, {
                    rel: "preload",
                    href: z.m,
                    as: "script",
                    crossorigin: "anonymous"
                  }), t
                }),
                w = (0, r.Fl)(() => ({
                  title: a("headMeta.title"),
                  meta: f.value,
                  link: y.value,
                  script: h.value
                }));
              return (0, o.u)(w), (e, t) => ((0, r.wg)(), (0, r.iD)("div", H))
            }
          }),
          q = a(3816);
        a(6782);
        var W = a(7773),
          F = a(6049),
          G = a(730),
          N = a(1920),
          V = a.p + "static/image/no-ads.50560c3b.webp";
        let Y = ["value", "checked"];
        var K = (0, r.aZ)({
          __name: "Radio",
          props: {
            label: {},
            value: {},
            checked: {
              type: Boolean
            }
          },
          setup: e => (e, t) => ((0, r.wg)(), (0, r.iD)("label", {
            key: e.value,
            class: (0, r.C_)(e.$style.radio_wrapper)
          }, [(0, r._)("input", {
            type: "radio",
            name: "duration",
            value: e.value,
            checked: e.checked
          }, null, 8, Y), (0, r._)("span", {
            class: (0, r.C_)(e.$style.radio_mark)
          }, null, 2), (0, r._)("span", {
            class: (0, r.C_)(e.$style.radio_content)
          }, [(0, r.Wm)(F.Z, {
            responsive: !1,
            type: "label",
            size: "m"
          }, {
            default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.$tr("disabledAd.duration", +e.value)), 1)]),
            _: 1
          }), (0, r.Wm)(F.Z, {
            class: (0, r.C_)(e.$style.radio_sublabel),
            responsive: !1,
            type: "label",
            size: "xs"
          }, {
            default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.label), 1)]),
            _: 1
          }, 8, ["class"])], 2)], 2))
        });
        let J = {},
          X = {};
        X.$style || (X.$style = {}), X.$style.style0 = {
          radio_wrapper: "eGot5",
          radioWrapper: "eGot5",
          radio_mark: "sZcx2",
          radioMark: "sZcx2",
          radio_content: "WsIVo",
          radioContent: "WsIVo",
          radio_sublabel: "zYRve",
          radioSublabel: "zYRve"
        }, J.$style = Object.values(X.$style).reduce((e, t) => Object.assign(e, t), {});
        let Q = (0, y.default)(K, [
            ["__cssModules", J]
          ]),
          ee = ["src"],
          et = ["innerHTML"];
        var ea = (0, r.aZ)({
          __name: "ModalAdDisabled",
          setup(e) {
            let t = (0, g.Z)(),
              a = (0, G.u)(),
              l = (0, N.L)(),
              {
                user: i
              } = (0, v.Jk)(l),
              {
                adDisabledModalOptions: n
              } = (0, v.Jk)(a),
              s = (0, R.y)(),
              o = [1, 7, 30],
              d = (0, r.Fl)(() => o.map(e => {
                let a = G.x[e],
                  l = a * t.VUE_APP_GAM_TO_USD - .01;
                return {
                  value: e.toString(),
                  label: i.value?.goldFenecBalance ? `${a} Gam = $${l.toFixed(2)}` : s("disabledAd.priceInUsd", {
                    price: l.toFixed(2)
                  })
                }
              })),
              c = (0, r.Fl)(() => n.value.isTopUp ? s("disabledAd.subtitleExtend") : s("disabledAd.subtitle")),
              u = (0, r.Fl)(() => {
                let e = i.value?.goldFenecBalance || 0;
                return o.findLast(t => e >= G.x[t])?.toString() || o[0]?.toString()
              });

            function p(e) {
              let t = new FormData(e.target).get("duration");
              a.disableAd(+t)
            }
            return (e, t) => ((0, r.wg)(), (0, r.j4)(h.Z, {
              isOpened: (0, r.SU)(n).isOpened,
              wrapperClass: e.$style.wrapper_override,
              onCloseModal: t[0] || (t[0] = e => (0, r.SU)(a).closeAdDisabledModal())
            }, {
              "custom-content": (0, r.w5)(() => [(0, r._)("form", {
                class: (0, r.C_)(e.$style.content),
                onSubmit: (0, r.iM)(p, ["prevent"])
              }, [(0, r._)("img", {
                src: (0, r.SU)(V),
                alt: "$tr('disabledAd.imageAlt')",
                class: (0, r.C_)(e.$style.img)
              }, null, 10, ee), (0, r.Wm)(F.Z, {
                type: "header",
                size: "s",
                responsive: !1
              }, {
                default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.$tr("disabledAd.title")), 1)]),
                _: 1
              }), (0, r.Wm)(F.Z, {
                type: "label",
                size: "s",
                responsive: !1,
                class: (0, r.C_)(e.$style.subtitle)
              }, {
                default: (0, r.w5)(() => [(0, r._)("span", {
                  innerHTML: c.value
                }, null, 8, et)]),
                _: 1
              }, 8, ["class"]), (0, r._)("div", {
                class: (0, r.C_)(e.$style.radio_group)
              }, [((0, r.wg)(!0), (0, r.iD)(r.HY, null, (0, r.Ko)(d.value, e => ((0, r.wg)(), (0, r.j4)(Q, {
                key: e.value,
                value: e.value,
                label: e.label,
                checked: e.value === u.value
              }, null, 8, ["value", "label", "checked"]))), 128))], 2), (0, r.Wm)(W.Z, {
                type: "submit",
                color: "lime",
                interfaceTarget: "ad-disabled-modal-submit",
                width: "full",
                size: "l"
              }, {
                default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.$tr("disabledAd.submit")), 1)]),
                _: 1
              })], 34)]),
              _: 1
            }, 8, ["isOpened", "wrapperClass"]))
          }
        });
        let el = {},
          ei = {};
        ei.$style || (ei.$style = {}), ei.$style.style0 = {
          wrapper_override: "oM2i4",
          wrapperOverride: "oM2i4",
          "#": "JTpii",
          content: "L1rrt",
          img: "_CNM6",
          subtitle: "Vinb9",
          radio_group: "TfWxc",
          radioGroup: "TfWxc"
        }, el.$style = Object.values(ei.$style).reduce((e, t) => Object.assign(e, t), {});
        let en = (0, y.default)(ea, [
          ["__cssModules", el]
        ]);
        a(4510);
        var er = a(1584),
          es = a(2893),
          eo = a(1318),
          ed = a(8518),
          ec = a(1097),
          eu = (0, r.aZ)({
            __name: "BalanceBlock",
            props: {
              balance: {},
              showPayment: {
                type: Boolean
              }
            },
            setup: e => (e, t) => ((0, r.wg)(), (0, r.iD)("div", {
              class: (0, r.C_)([e.$style.wrapper, {
                [e.$style.bottom]: e.showPayment
              }])
            }, [(0, r.Wm)(F.Z, {
              is: "div",
              type: "caption",
              size: "all-caps",
              class: (0, r.C_)(e.$style.balance),
              responsive: !1
            }, {
              default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.$tr("paymentModal.balanceLabel")), 1)]),
              _: 1
            }, 8, ["class"]), (0, r.Wm)(F.Z, {
              is: "div",
              type: "label",
              size: "m",
              accent: "",
              responsive: !1
            }, {
              default: (0, r.w5)(() => [(0, r.Wm)(es.Z, {
                name: "gold_fennec_coin_small",
                class: (0, r.C_)(e.$style.coin)
              }, null, 8, ["class"]), (0, r.Uk)(" " + (0, r.zw)(`${e.balance} Gam`), 1)]),
              _: 1
            })], 2))
          });
        let ep = {},
          eg = {};
        eg.$style || (eg.$style = {}), eg.$style.style0 = {
          wrapper: "fSCuL",
          balance: "FxKic",
          coin: "B0GA9",
          bottom: "QglXW"
        }, ep.$style = Object.values(eg.$style).reduce((e, t) => Object.assign(e, t), {});
        let ev = (0, y.default)(eu, [
          ["__cssModules", ep]
        ]);
        var em = (0, r.aZ)({
          __name: "PurchaseInfo",
          props: {
            title: {},
            subtitle: {}
          },
          setup: e => (e, t) => ((0, r.wg)(), (0, r.iD)("div", {
            class: (0, r.C_)(e.$style.purchase)
          }, [e.subtitle ? ((0, r.wg)(), (0, r.iD)("div", {
            key: 0,
            class: (0, r.C_)(e.$style.with_subtitle)
          }, [(0, r.Wm)(F.Z, {
            type: "label",
            size: "m",
            responsive: !1
          }, {
            default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.title), 1)]),
            _: 1
          }), (0, r.Wm)(F.Z, {
            class: (0, r.C_)(e.$style.subtitle),
            type: "label",
            size: "xs",
            responsive: !1
          }, {
            default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.subtitle), 1)]),
            _: 1
          }, 8, ["class"])], 2)) : ((0, r.wg)(), (0, r.j4)(F.Z, {
            key: 1,
            type: "label",
            size: "m"
          }, {
            default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.title), 1)]),
            _: 1
          }))], 2))
        });
        let eh = {},
          ef = {};
        ef.$style || (ef.$style = {}), ef.$style.style0 = {
          purchase: "YRMb6",
          with_subtitle: "Vo5uN",
          withSubtitle: "Vo5uN",
          subtitle: "lBiOv"
        }, eh.$style = Object.values(ef.$style).reduce((e, t) => Object.assign(e, t), {});
        let e_ = (0, y.default)(em, [
            ["__cssModules", eh]
          ]),
          ey = ["src"],
          ew = ["innerHTML"];
        var eb = (0, r.aZ)({
          __name: "DisableAdOrderBlock",
          props: {
            order: {},
            balance: {},
            showPayment: {
              type: Boolean
            }
          },
          setup(e) {
            let t = (0, R.y)(),
              a = (0, r.Fl)(() => G.x[e.order.durationInDays]),
              l = (0, r.Fl)(() => e.order.isTopUp ? t("disabledAd.subtitleExtend") : t("disabledAd.subtitle"));
            return (e, t) => ((0, r.wg)(), (0, r.iD)("div", {
              class: (0, r.C_)(e.$style.wrapper)
            }, [(0, r._)("div", null, [(0, r._)("img", {
              src: (0, r.SU)(V),
              class: (0, r.C_)(e.$style.order_icon)
            }, null, 10, ey), (0, r.Wm)(F.Z, {
              is: "div",
              type: "header",
              size: "s"
            }, {
              default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.$tr("disabledAd.title")), 1)]),
              _: 1
            }), (0, r.Wm)(F.Z, {
              is: "div",
              type: "paragraph",
              size: "xs",
              class: (0, r.C_)(e.$style.subtitle)
            }, {
              default: (0, r.w5)(() => [(0, r._)("span", {
                innerHTML: l.value
              }, null, 8, ew)]),
              _: 1
            }, 8, ["class"])]), (0, r.Wm)(e_, {
              title: e.$tr("disabledAd.duration", e.order.durationInDays),
              subtitle: e.$tr("disabledAd.priceInGam", {
                price: a.value.toString()
              })
            }, null, 8, ["title", "subtitle"]), e.balance > 0 && e.showPayment ? ((0, r.wg)(), (0, r.j4)(F.Z, {
              key: 0,
              is: "div",
              type: "paragraph",
              size: "xs",
              class: (0, r.C_)(e.$style.subtitle)
            }, {
              default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.$tr("paymentModal.paymentExplanation", {
                balance: e.balance.toString()
              })), 1)]),
              _: 1
            }, 8, ["class"])) : (0, r.kq)("", !0)], 2))
          }
        });
        let ek = {},
          eC = {};
        eC.$style || (eC.$style = {}), eC.$style.style0 = {
          order_icon: "r6nJl",
          orderIcon: "r6nJl",
          subtitle: "GTNAL",
          wrapper: "Zza1z"
        }, ek.$style = Object.values(eC.$style).reduce((e, t) => Object.assign(e, t), {});
        let e$ = (0, y.default)(eb, [
            ["__cssModules", ek]
          ]),
          eE = ["src"];
        var eA = (0, r.aZ)({
          __name: "OrderBlock",
          props: {
            order: {},
            amount: {},
            balance: {},
            showPayment: {
              type: Boolean
            }
          },
          setup: e => (e, t) => ((0, r.wg)(), (0, r.iD)("div", null, [(0, r._)("div", null, [e.order.photoUrl ? ((0, r.wg)(), (0, r.iD)("img", {
            key: 0,
            src: e.order.photoUrl,
            class: (0, r.C_)(e.$style.order_icon)
          }, null, 10, eE)) : (0, r.kq)("", !0), (0, r.Wm)(F.Z, {
            is: "div",
            type: "header",
            size: "s"
          }, {
            default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.order.description ? e.$tr("paymentModal.orderHeaderDescription", {
              description: e.order.description,
              amount: e.order.amount.toString()
            }) : e.$tr("paymentModal.orderHeader", {
              game: e.order.gameTitle,
              amount: e.order.amount.toString()
            })), 1)]),
            _: 1
          }), e.order.subtitle ? ((0, r.wg)(), (0, r.j4)(F.Z, {
            key: 1,
            is: "div",
            type: "paragraph",
            size: "xs",
            class: (0, r.C_)(e.$style.subtitle)
          }, {
            default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.order.subtitle), 1)]),
            _: 1
          }, 8, ["class"])) : (0, r.kq)("", !0)]), e.showPayment ? ((0, r.wg)(), (0, r.j4)(e_, {
            key: 0,
            title: e.$tr("paymentModal.buyGam", {
              amount: e.amount.toString()
            })
          }, null, 8, ["title"])) : (0, r.kq)("", !0), e.balance > 0 && e.showPayment ? ((0, r.wg)(), (0, r.j4)(F.Z, {
            key: 1,
            is: "div",
            type: "paragraph",
            size: "xs",
            class: (0, r.C_)(e.$style.subtitle)
          }, {
            default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.$tr("paymentModal.paymentExplanation", {
              balance: e.balance.toString()
            })), 1)]),
            _: 1
          }, 8, ["class"])) : (0, r.kq)("", !0)]))
        });
        let eT = {},
          eS = {};
        eS.$style || (eS.$style = {}), eS.$style.style0 = {
          order_icon: "dqIY3",
          orderIcon: "dqIY3",
          subtitle: "fU9Pk"
        }, eT.$style = Object.values(eS.$style).reduce((e, t) => Object.assign(e, t), {});
        let eO = (0, y.default)(eA, [
          ["__cssModules", eT]
        ]);
        var eM = a(1409),
          eP = (0, r.aZ)({
            __name: "TopUpBlock",
            props: {
              amount: {},
              minPurchase: {}
            },
            emits: ["update:amount"],
            setup: e => (e, t) => ((0, r.wg)(), (0, r.iD)("div", {
              class: (0, r.C_)(e.$style.wrapper)
            }, [(0, r.Wm)(F.Z, {
              type: "header",
              size: "xs",
              responsive: !1
            }, {
              default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.$tr("paymentModal.title")), 1)]),
              _: 1
            }), (0, r.Wm)(eM.Z, {
              id: "gold-amount",
              name: "gold-amount",
              type: "number",
              value: e.amount,
              class: (0, r.C_)(e.$style.margin_top),
              "onUpdate:modelValue": t[0] || (t[0] = t => e.$emit("update:amount", t))
            }, null, 8, ["value", "class"]), (0, r.Wm)(F.Z, {
              is: "p",
              size: "s",
              responsive: !1,
              class: (0, r.C_)(e.$style.margin_top)
            }, {
              default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.$tr("paymentModal.description", {
                amount: e.minPurchase.toString()
              })), 1)]),
              _: 1
            }, 8, ["class"])], 2))
          });
        let eL = {},
          ex = {};
        ex.$style || (ex.$style = {}), ex.$style.style0 = {
          wrapper: "tOHYg",
          margin_top: "TdlPp",
          marginTop: "TdlPp"
        }, eL.$style = Object.values(ex.$style).reduce((e, t) => Object.assign(e, t), {});
        let eD = (0, y.default)(eP, [
            ["__cssModules", eL]
          ]),
          eR = ["src"];
        var eI = (0, r.aZ)({
          __name: "ModalPayment",
          setup(e) {
            let t = (0, eo.E)(),
              a = (0, N.L)(),
              l = (0, ed.o)(),
              i = (0, ec.Ek)(),
              {
                isPaymentModalOpen: n,
                paymentModalOrder: o
              } = (0, v.Jk)(t),
              {
                user: d
              } = (0, v.Jk)(a),
              c = (0, r.iH)(""),
              u = (0, r.iH)(),
              p = (0, r.Fl)(() => `${w}/?token=${c.value}`),
              m = (0, r.Fl)(() => !!c.value),
              f = (0, r.Fl)(() => d.value?.goldFenecBalance || 0),
              _ = (0, r.Fl)(() => o.value.order?.type === "topup" || (o.value.order?.amount || 0) > f.value),
              y = (0, r.Fl)(() => o.value.order),
              {
                VUE_APP_XSOLLA_IFRAME_URL: w,
                VUE_APP_MINIMUM_PURCHASE: b
              } = (0, g.Z)(),
              k = (0, r.Fl)(() => y.value?.type === "disable-ad-order" ? 0 : parseInt(b)),
              C = (0, r.iH)(o.value.order?.amount || 0),
              $ = (0, er.DI)(e => {
                C.value = e, setTimeout(() => {
                  C.value < k.value && (C.value = k.value)
                }, 0)
              }, 200),
              E = e => {
                c.value = "", u.value && (u.value.abort("New request sent"), u.value = void 0), $(e)
              };
            (0, r.YP)(y, e => {
              if (!e) {
                C.value = 0;
                return
              }
              E("topup" === e.type ? k.value : e.amount - f.value)
            }), (0, r.YP)(C, async e => {
              if (e >= k.value) {
                u.value = new AbortController;
                try {
                  let t = await i.request("/api/v1/in-game-payments/createXsollaToken", {
                    method: "POST",
                    body: JSON.stringify({
                      amount: e
                    }),
                    signal: u.value.signal
                  });
                  0 === t.errors.length && t.data && (c.value = t.data)
                } catch (e) {
                  console.error(e)
                } finally {
                  u.value = void 0
                }
              }
            });
            let A = (0, r.iH)(!1);

            function T() {
              t.paymentModalOrder.reject?.(Error("User didn't complete payment")), t.setPaymentModalOrder(null), c.value = ""
            }
            async function S() {
              try {
                if (A.value = !0, y.value?.type !== "order" && y.value?.type !== "disable-ad-order") throw Error("Invalid order type for purchase");
                let {
                  adPlacement: e,
                  ...n
                } = y.value, r = await ((e, t) => {
                  let a;
                  if ("order" === e.type) {
                    let {
                      gameHru: t,
                      attributes: l,
                      ...i
                    } = e;
                    a = JSON.stringify({
                      order: i,
                      gameHru: t,
                      attributes: l
                    })
                  } else {
                    let {
                      amount: t,
                      durationInDays: l,
                      externalId: i
                    } = e;
                    a = JSON.stringify({
                      order: {
                        amount: t,
                        durationInDays: l,
                        externalId: i
                      }
                    })
                  }
                  return t ? i.request(t, {
                    method: "POST",
                    body: a
                  }) : i.signedRequest("/api/v1/in-game-payments/purchase/signed", {
                    method: "POST",
                    body: a
                  })
                })(n, "disable-ad-order" === n.type ? "/api/v1/user/disable-ad" : void 0);
                if (r.errors.length > 0) throw Error(r.errors.join(", "));
                l.logEvent({
                  event: "custom_event",
                  eventName: "purchase_successful",
                  action: n.type,
                  amountInGameCurrency: n.amount,
                  adPlacement: e
                }), await a.fetchUserInfo(), t.paymentModalOrder.resolve?.(r)
              } catch (e) {
                t.paymentModalOrder.reject?.(e)
              } finally {
                A.value = !1, t.setPaymentModalOrder(null)
              }
            }
            async function O(e) {
              let l;
              if (w.includes(e.origin)) {
                try {
                  l = JSON.parse(e.data)
                } catch (e) {
                  console.error("Failed to parse event data", e);
                  return
                }
                try {
                  if ("open-status-success" !== l.command) return;
                  let e = await a.fetchUserInfo();
                  y.value?.type === "topup" && t.paymentModalOrder.resolve?.(e), (y.value?.type === "order" || y.value?.type === "disable-ad-order") && S()
                } catch (e) {
                  t.paymentModalOrder.reject?.(e)
                }
              }
            }
            let M = (0, s.yj)();
            return (0, r.YP)(() => M.fullPath, () => {
              t.paymentModalOrder.reject?.(Error("User left game page")), A.value = !1, t.setPaymentModalOrder(null)
            }), (0, r.YP)(() => [n.value, o.value.order], ([e, t]) => {
              e && t && l.logEvent({
                event: "custom_event",
                eventName: "payment_modal_opened",
                action: t.type,
                adPlacement: "adPlacement" in t ? t.adPlacement : void 0
              })
            }), (0, r.bv)(() => {
              window.addEventListener("message", O)
            }), (0, r.SK)(() => {
              window.removeEventListener("message", O)
            }), (e, t) => ((0, r.wg)(), (0, r.j4)(h.Z, {
              wide: _.value,
              isOpened: (0, r.SU)(n),
              onCloseModal: T
            }, {
              "custom-content": (0, r.w5)(() => [(0, r._)("div", {
                class: (0, r.C_)(e.$style.row)
              }, [(0, r._)("div", {
                class: (0, r.C_)([e.$style.column, e.$style.info])
              }, [y.value?.type === "topup" ? ((0, r.wg)(), (0, r.j4)(eD, {
                key: 0,
                amount: C.value,
                minPurchase: k.value,
                "onUpdate:amount": E
              }, null, 8, ["amount", "minPurchase"])) : (0, r.kq)("", !0), y.value?.type === "order" ? ((0, r.wg)(), (0, r.j4)(eO, {
                key: 1,
                order: y.value,
                amount: C.value,
                balance: f.value,
                showPayment: _.value
              }, null, 8, ["order", "amount", "balance", "showPayment"])) : (0, r.kq)("", !0), y.value?.type === "disable-ad-order" ? ((0, r.wg)(), (0, r.j4)(e$, {
                key: 2,
                order: y.value,
                balance: f.value,
                showPayment: _.value
              }, null, 8, ["order", "balance", "showPayment"])) : (0, r.kq)("", !0), (0, r.Wm)(ev, {
                balance: f.value,
                showPayment: _.value
              }, null, 8, ["balance", "showPayment"]), _.value ? (0, r.kq)("", !0) : ((0, r.wg)(), (0, r.j4)(W.Z, {
                key: 3,
                disabled: A.value,
                width: "full",
                size: "l",
                color: "golden",
                interfaceTarget: "buy-golden-coins-button",
                onClick: S
              }, {
                default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.$tr("paymentModal.purchaseButton")), 1)]),
                _: 1
              }, 8, ["disabled"]))], 2), _.value ? ((0, r.wg)(), (0, r.iD)("div", {
                key: 0,
                class: (0, r.C_)([e.$style.column, e.$style.iframe])
              }, [m.value ? ((0, r.wg)(), (0, r.iD)("iframe", {
                key: 0,
                src: p.value,
                width: "100%",
                height: "600",
                allow: "clipboard-read; clipboard-write; payment"
              }, null, 8, eR)) : (0, r.kq)("", !0), m.value ? (0, r.kq)("", !0) : ((0, r.wg)(), (0, r.j4)(es.Z, {
                key: 1,
                name: "loader",
                class: (0, r.C_)(e.$style.loader)
              }, null, 8, ["class"]))], 2)) : (0, r.kq)("", !0)], 2)]),
              _: 1
            }, 8, ["wide", "isOpened"]))
          }
        });
        let ez = {},
          eU = {};
        eU.$style || (eU.$style = {}), eU.$style.style0 = {
          row: "MO9B3",
          column: "vTnp0",
          iframe: "pd5yh",
          loader: "s8epO",
          info: "merpJ"
        }, ez.$style = Object.values(eU.$style).reduce((e, t) => Object.assign(e, t), {});
        let eB = (0, y.default)(eI, [
          ["__cssModules", ez]
        ]);
        var ej = a(7309),
          eH = a.p + "static/image/sign-in.861513b2.webp",
          eZ = (0, r.aZ)({
            __name: "ModalSignIn",
            setup(e) {
              let t = (0, eo.E)(),
                {
                  signInModalOpened: a
                } = (0, v.Jk)(t);

              function l() {
                t.setSignInModalOpened(!1)
              }
              return (e, t) => ((0, r.wg)(), (0, r.j4)(h.Z, {
                title: e.$tr("modalSignIn.title"),
                description: e.$tr("modalSignIn.description"),
                image: (0, r.SU)(eH),
                alt: e.$tr("modalSignIn.alt"),
                isOpened: (0, r.SU)(a),
                onCloseModal: l
              }, {
                actions: (0, r.w5)(() => [(0, r.Wm)(ej.Z, {
                  class: (0, r.C_)(e.$style.button_sing_in_override),
                  onFinish: l
                }, null, 8, ["class"])]),
                _: 1
              }, 8, ["title", "description", "image", "alt", "isOpened"]))
            }
          });
        let eq = {},
          eW = {};
        eW.$style || (eW.$style = {}), eW.$style.style0 = {
          button_sing_in_override: "tvTf1",
          buttonSingInOverride: "tvTf1",
          "#": "EDVzt"
        }, eq.$style = Object.values(eW.$style).reduce((e, t) => Object.assign(e, t), {});
        let eF = (0, y.default)(eZ, [
          ["__cssModules", eq]
        ]);
        var eG = a(8688),
          eN = (0, r.aZ)({
            __name: "PageLoadBar",
            setup(e) {
              let t = (0, U.q)(),
                a = (0, r.iH)(),
                l = (0, r.iH)();
              return (0, r.YP)(() => t.pageLoadProgress, e => {
                let t = a.value,
                  i = l.value;
                i && t && (e ? (i.style.opacity = "1", i.animate([{
                  width: "0%"
                }, {
                  width: "70%"
                }], {
                  duration: 5e3,
                  easing: "cubic-bezier(0.2, 0, 0.05, 1)",
                  fill: "forwards"
                })) : i.animate([{
                  width: "100%"
                }], {
                  duration: 500,
                  easing: "ease-out",
                  fill: "forwards"
                }).addEventListener("finish", () => {
                  i.style.opacity = "0"
                }))
              }), (e, t) => ((0, r.wg)(), (0, r.iD)("div", {
                ref_key: "barRef",
                ref: a,
                class: (0, r.C_)(e.$style.bar)
              }, [(0, r._)("div", {
                ref_key: "progressRef",
                ref: l,
                class: (0, r.C_)(e.$style.progress)
              }, null, 2)], 2))
            }
          });
        let eV = {},
          eY = {};
        eY.$style || (eY.$style = {}), eY.$style.style0 = {
          bar: "q1g3I",
          progress: "Ss8DM"
        }, eV.$style = Object.values(eY.$style).reduce((e, t) => Object.assign(e, t), {});
        let eK = (0, y.default)(eN, [
          ["__cssModules", eV]
        ]);
        var eJ = a(8612),
          eX = a(7405);
        let eQ = ["data-interface-section"],
          e0 = ["src", "alt"];
        var e1 = (0, r.aZ)({
          __name: "Toaster",
          props: {
            isFullScreen: {
              type: Boolean
            }
          },
          setup(e) {
            let t = (0, R.y)(),
              l = (0, r.RC)(() => a.e("821").then(a.bind(a, 1321)).then(e => e.Vue3Lottie)),
              i = (0, eX.E)(),
              n = (0, eJ.t)(),
              {
                isVisible: s,
                toast: o
              } = (0, v.Jk)(i),
              d = (0, r.Fl)(() => s.value && (!e.isFullScreen || o.value?.isFullScreenAllowed));
            return (e, a) => (0, r.SU)(n) ? ((0, r.wg)(), (0, r.j4)(r.lR, {
              key: 0,
              to: "body"
            }, [(0, r.Wm)(r.uT, {
              enterActiveClass: e.$style.transition_enter_active,
              enterFromClass: e.$style.transition_enter_from,
              leaveActiveClass: e.$style.transition_leave_active,
              leaveToClass: e.$style.transition_leave_to,
              appear: ""
            }, {
              default: (0, r.w5)(() => [d.value && (0, r.SU)(o) ? ((0, r.wg)(), (0, r.iD)("div", {
                key: 0,
                class: (0, r.C_)(e.$style.toast_container),
                "data-interface-section": (0, r.SU)(o).type
              }, [(0, r._)("div", {
                class: (0, r.C_)(e.$style.toast)
              }, [(0, r.Wm)(W.Z, {
                icon: "close",
                color: "white-60",
                visual: "ghost",
                size: "m",
                class: (0, r.C_)(e.$style.close_override),
                interfaceTarget: "close-toast",
                onClick: (0, r.SU)(i).closeToast
              }, null, 8, ["class", "onClick"]), (0, r._)("div", {
                class: (0, r.C_)(e.$style.instructions)
              }, [(0, r.SU)(o).animation ? ((0, r.wg)(), (0, r.iD)("div", {
                key: 0,
                class: (0, r.C_)(e.$style.image)
              }, [(0, r.Wm)((0, r.SU)(l), {
                animationData: (0, r.SU)(o).animation
              }, null, 8, ["animationData"])], 2)) : (0, r.kq)("", !0), (0, r.SU)(o).image ? ((0, r.wg)(), (0, r.iD)("img", {
                key: 1,
                class: (0, r.C_)(e.$style.image),
                src: (0, r.SU)(o).image,
                alt: (0, r.SU)(t)("toast-pwa.description"),
                loading: "lazy"
              }, null, 10, e0)) : (0, r.kq)("", !0), (0, r.Wm)(F.Z, {
                type: "header",
                size: "xs",
                accent: "",
                responsive: !1,
                class: (0, r.C_)(e.$style.header)
              }, {
                default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)((0, r.SU)(o).title), 1)]),
                _: 1
              }, 8, ["class"]), (0, r.Wm)(F.Z, {
                type: "paragraph",
                size: "s",
                responsive: !1,
                class: (0, r.C_)(e.$style.paragraph)
              }, {
                default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)((0, r.SU)(o).description), 1)]),
                _: 1
              }, 8, ["class"]), (0, r.SU)(o).buttonText ? ((0, r.wg)(), (0, r.j4)(W.Z, {
                key: 2,
                color: "purple-400",
                size: "m",
                class: (0, r.C_)(e.$style.accept_override),
                interfaceTarget: "accept-toast",
                onClick: (0, r.SU)(i).acceptToast
              }, {
                default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)((0, r.SU)(o).buttonText), 1)]),
                _: 1
              }, 8, ["class", "onClick"])) : (0, r.kq)("", !0)], 2)], 2)], 10, eQ)) : (0, r.kq)("", !0)]),
              _: 1
            }, 8, ["enterActiveClass", "enterFromClass", "leaveActiveClass", "leaveToClass"])])) : (0, r.kq)("", !0)
          }
        });
        let e2 = {},
          e5 = {};
        e5.$style || (e5.$style = {}), e5.$style.style0 = {
          transition_enter_active: "_1EeK",
          transitionEnterActive: "_1EeK",
          transition_leave_active: "BbFKI",
          transitionLeaveActive: "BbFKI",
          transition_enter_from: "txK6g",
          transitionEnterFrom: "txK6g",
          transition_leave_to: "pkYQe",
          transitionLeaveTo: "pkYQe",
          toast_container: "wZO5R",
          toastContainer: "wZO5R",
          toast: "n7RkC",
          close_override: "Zck8O",
          closeOverride: "Zck8O",
          "#": "p7Mxa",
          instructions: "ErruS",
          image: "laASU",
          header: "P6Yns",
          paragraph: "vWFB6",
          accept_override: "AzjjV",
          acceptOverride: "AzjjV"
        }, e2.$style = Object.values(e5.$style).reduce((e, t) => Object.assign(e, t), {});
        let e4 = (0, y.default)(e1, [
          ["__cssModules", e2]
        ]);
        var e3 = a(8788),
          e8 = a(4423),
          e6 = a(1485),
          e7 = a(4886),
          e9 = a(407),
          te = a(2512),
          tt = (0, r.aZ)({
            __name: "InitWrapper",
            setup(e) {
              (0, ed.s)();
              let t = (0, U.q)(),
                a = (0, e9.x)(),
                l = (0, eo.E)(),
                i = (0, ed.o)(),
                n = (0, eG.i)(),
                o = (0, s.tv)(),
                d = (0, s.yj)(),
                {
                  pageStatus: c,
                  platform: u,
                  isGameDistribution: p
                } = (0, v.Jk)(t),
                m = (0, r.Fl)(() => !d.meta.noLayout),
                h = (0, N.L)(),
                {
                  VUE_APP_USER_TASKS_POLLING_MS: f
                } = (0, g.Z)(),
                _ = Number(f),
                y = (0, r.Fl)(() => d.meta.manuallyHandledErrors),
                w = (0, r.Fl)(() => !p.value);

              function b(e) {
                return `${e.name?.toString()} ${e.params.game||e.params.category||""}`
              }(0, r.vl)(() => {
                let e = (0, r.Zq)();
                e && (e.pageStatus ? t.setPageStatus(e.pageStatus) : (t.$reset(), t.setPlatform(e.platform), t.setUserAgent(e.userAgent), t.setAuid(e.auid)), t.setUrlDetails({
                  host: e.host,
                  query: d.query,
                  referer: e.referer,
                  isIframe: e.isIframe
                }))
              }), (0, r.wF)(() => {
                window.dataLayer = window.dataLayer || [];
                let e = b(d);
                o.beforeEach(l => {
                  t.setPageStatus(200), i.logEvent({
                    event: "user_time",
                    eventName: "navigation",
                    action: e
                  }), e = b(l);
                  let n = {
                    content_category: "",
                    provider: "",
                    hru: l.name && e7.IF.includes(l.name) ? l.params.game : "",
                    page: l.name
                  };
                  a.updateTargeting(n)
                }), window.addEventListener("beforeunload", () => {
                  i.logEvent({
                    event: "user_time",
                    eventName: "navigation",
                    action: e
                  }), i.logEvent({
                    event: "user_time",
                    eventName: "portal_session_end",
                    action: e
                  })
                });
                let l = window.navigator.userAgent,
                  n = (0, te.bU)(document.cookie),
                  r = (0, te.lO)(document.cookie);
                t.setUserAgent(l), t.setAuid(r);
                let s = (0, e8.zT)(l);
                t.setPlatform(s), t.setExperiments(window.additionalServerData?.experiments), t.setUserParams({
                  userAcquisitionParams: n
                }), (!t.host || window.location.hash) && t.setUrlDetails({
                  host: window.location.host,
                  query: d.query,
                  referer: document.referrer,
                  isIframe: window.self !== window.top
                });
                let c = d.query.gd_game_id;
                c && (window.gd_id = c), a.setAdServiceConfig({
                  targeting: {
                    hru: d.name && e7.IF.includes(d.name) ? d.params.game : "",
                    page: d.name
                  },
                  auid: r
                });
                let p = window.additionalServerData?.conversionValues;
                void 0 !== p && window.dataLayer.push({
                  game_conversion_value: p.gameValue,
                  preroll_end_conversion_value: p.prerollEndValue,
                  timespent_5_min_conversion_value: p.timespent5MinValue
                }), window.dataLayer.push({
                  device_platform: u.value
                })
              });
              let C = (0, r.iH)(null),
                {
                  user: $
                } = (0, v.Jk)(h);
              return (0, r.YP)(() => $.value, () => {
                $.value && (window.dataLayer.push({
                  user_id: $.value._id
                }), function e({
                  force: t
                } = {}) {
                  (!document.hidden || t) && h.getUserTasks(), C.value = setTimeout(() => e(), _)
                }({
                  force: !0
                }))
              }), (0, r.bv)(async () => {
                await h.getUser(), i.logEvent({
                    event: "custom_event",
                    eventName: "portal_session_start"
                  }), e7.jx.includes(d.name) && n.init(), document.body.addEventListener("touchstart", () => {}, !1),
                  function(e, t) {
                    let a = document.createElement("script");
                    a.type = "text/javascript", a.src = "/common_ad.js", a.async = !0, a.onerror = e, a.onload = () => {}, (0, e8.S8)().then(() => document.head.appendChild(a))
                  }(() => {
                    i.logEvent({
                      event: "custom_event",
                      eventName: "ad_block_detected"
                    })
                  }), t.initPageLoadProgressTracking()
              }), (0, r.SK)(() => {
                C.value && clearTimeout(C.value)
              }), (e, t) => {
                let a = (0, r.up)("RouterView");
                return (0, r.wg)(), (0, r.iD)(r.HY, null, [(0, r.Wm)(q.Z, {
                  hydrate: (0, r.mI)()
                }, {
                  default: (0, r.w5)(() => [(0, r.Wm)(Z, {
                    prepareGoogleAds: w.value
                  }, null, 8, ["prepareGoogleAds"])]),
                  _: 1
                }, 8, ["hydrate"]), (0, r.Wm)(q.Z, {
                  hydrate: (0, r.mI)()
                }, {
                  default: (0, r.w5)(() => [200 === (0, r.SU)(c) || y.value ? ((0, r.wg)(), (0, r.j4)((0, r.LL)(m.value ? e3.Z : "div"), {
                    key: 0
                  }, {
                    default: (0, r.w5)(() => [(0, r.Wm)(a)]),
                    _: 1
                  })) : ((0, r.wg)(), (0, r.j4)(e3.Z, {
                    key: 1
                  }, {
                    default: (0, r.w5)(() => [404 === (0, r.SU)(c) ? ((0, r.wg)(), (0, r.j4)(e6.Z, {
                      key: 0,
                      type: 404
                    })) : (0, r.SU)(c) >= 500 ? ((0, r.wg)(), (0, r.j4)(e6.Z, {
                      key: 1,
                      type: 500
                    })) : (0, r.kq)("", !0)]),
                    _: 1
                  }))]),
                  _: 1
                }, 8, ["hydrate"]), (0, r.Wm)(q.Z, {
                  hydrate: (0, r.mI)()
                }, {
                  default: (0, r.w5)(() => [(0, r.Wm)(eF), (0, r.Wm)(eB), (0, r.Wm)(en), (0, r.Wm)(e4, {
                    isFullScreen: (0, r.SU)(l).fullScreen
                  }, null, 8, ["isFullScreen"]), (0, r.Wm)(k)]),
                  _: 1
                }, 8, ["hydrate"]), (0, r.Wm)(eK)], 64)
              }
            }
          }),
          ta = a(2659);
        let tl = {
            "en-US": {
              game: "game/:game",
              category: "category/:hru",
              tag: "tag/:hru",
              series: "series/:hru",
              contacts: "contacts",
              profile: "profile",
              shop: "shop",
              invite: "invite/:inviteCode",
              allCategories: "all/categories",
              allTags: "all/tags",
              allSeries: "all/series",
              confidential: "confidential",
              termsofuse: "termsofuse",
              takedown_notice: "takedown-notice",
              license: "license",
              partners_api: "partners-api",
              myGames: "my-games",
              digitalServiceAсt: "digital-service-act"
            },
            "es-ES": {
              game: "juego/:game",
              category: "categoria/:hru",
              tag: "etiqueta/:hru",
              series: "serie/:hru",
              contacts: "contactos",
              profile: "perfil",
              shop: "tienda",
              invite: "invitar/:inviteCode",
              allCategories: "todas/categorias",
              allTags: "todas/etiquetas",
              allSeries: "todas/series",
              confidential: "confidencial",
              termsofuse: "terminosdeuso",
              takedown_notice: "aviso-de-eliminacion",
              license: "licencia",
              partners_api: "api-de-socios",
              myGames: "mis-juegos",
              digitalServiceAсt: "ley-de-servicios-digitales"
            },
            "de-DE": {
              game: "spiel/:game",
              category: "kategorie/:hru",
              tag: "tag/:hru",
              series: "serie/:hru",
              contacts: "kontakte",
              profile: "profil",
              shop: "laden",
              invite: "einladen/:inviteCode",
              allCategories: "alle/kategorien",
              allTags: "alle/tags",
              allSeries: "alle/serien",
              confidential: "vertraulich",
              termsofuse: "nutzungsbedingungen",
              takedown_notice: "entfernungsmitteilung",
              license: "lizenz",
              partners_api: "partner-api",
              myGames: "meine-spiele",
              digitalServiceAсt: "gesetz-uber-digitale-dienste"
            },
            "fr-FR": {
              game: "jeu/:game",
              category: "categorie/:hru",
              tag: "tag/:hru",
              series: "serie/:hru",
              contacts: "contacts",
              profile: "profil",
              shop: "boutique",
              invite: "inviter/:inviteCode",
              allCategories: "toutes/categories",
              allTags: "toutes/tags",
              allSeries: "toutes/series",
              confidential: "confidentiel",
              termsofuse: "conditions-dutilisation",
              takedown_notice: "avis-de-retrait",
              license: "licence",
              partners_api: "api-partenaires",
              myGames: "mes-jeux",
              digitalServiceAсt: "loi-sur-les-services-numeriques"
            },
            "it-IT": {
              game: "gioco/:game",
              category: "categoria/:hru",
              tag: "tag/:hru",
              series: "serie/:hru",
              contacts: "contatti",
              profile: "profilo",
              shop: "negozio",
              invite: "invita/:inviteCode",
              allCategories: "tutte/categorie",
              allTags: "tutte/tag",
              allSeries: "tutte/serie",
              confidential: "riservato",
              termsofuse: "termini-di-uso",
              takedown_notice: "avviso-di-rimozione",
              license: "licenza",
              partners_api: "api-partner",
              myGames: "i-miei-giochi",
              digitalServiceAсt: "legge-sui-servizi-digitali"
            },
            "pt-BR": {
              game: "jogo/:game",
              category: "categoria/:hru",
              tag: "tag/:hru",
              series: "serie/:hru",
              contacts: "contatos",
              profile: "perfil",
              shop: "loja",
              invite: "convidar/:inviteCode",
              allCategories: "todas/categorias",
              allTags: "todas/tags",
              allSeries: "todas/series",
              confidential: "confidencial",
              termsofuse: "termos-de-uso",
              takedown_notice: "aviso-de-remocao",
              license: "licenca",
              partners_api: "api-parceiros",
              myGames: "meus-jogos",
              digitalServiceAсt: "lei-dos-servicos-digitais"
            },
            "tr-TR": {
              game: "oyun/:game",
              category: "kategori/:hru",
              tag: "etiket/:hru",
              series: "seri/:hru",
              contacts: "iletisim",
              profile: "profil",
              shop: "magaza",
              invite: "davet/:inviteCode",
              allCategories: "tum/kategoriler",
              allTags: "tum/etiketler",
              allSeries: "tum/seriler",
              confidential: "gizli",
              termsofuse: "kullanim-kosullari",
              takedown_notice: "kaldirma-bildirimi",
              license: "lisans",
              partners_api: "ortaklar-api",
              myGames: "oyunlarim",
              digitalServiceAсt: "dijital-hizmetler-yasasi"
            },
            "pl-PL": {
              game: "gra/:game",
              category: "kategoria/:hru",
              tag: "tag/:hru",
              series: "seria/:hru",
              contacts: "kontakty",
              profile: "profil",
              shop: "sklep",
              invite: "zaproszenie/:inviteCode",
              allCategories: "wszystkie/kategorie",
              allTags: "wszystkie/tagi",
              allSeries: "wszystkie/serie",
              confidential: "poufne",
              termsofuse: "warunki-uzytkowania",
              takedown_notice: "powiadomienie-o-usunieciu",
              license: "licencja",
              partners_api: "api-partnerow",
              myGames: "moje-gry",
              digitalServiceAсt: "ustawa-o-uslugach-cyfrowych"
            },
            "id-ID": {
              game: "permainan/:game",
              category: "kategori/:hru",
              tag: "tag/:hru",
              series: "seri/:hru",
              contacts: "kontak",
              profile: "profil",
              shop: "toko",
              invite: "undang/:inviteCode",
              allCategories: "semua/kategori",
              allTags: "semua/tag",
              allSeries: "semua/seri",
              confidential: "rahasia",
              termsofuse: "ketentuan-penggunaan",
              takedown_notice: "pemberitahuan-penghapusan",
              license: "lisensi",
              partners_api: "api-mitra",
              myGames: "permainanku",
              digitalServiceAсt: "undang-undang-layanan-digital"
            }
          },
          ti = e => {
            let {
              page: t,
              ...a
            } = e.query;
            if ("1" === t) return {
              path: e.path,
              query: a,
              replace: !0
            }
          },
          tn = (e, t) => {
            let l = tl[e],
              i = e => l[e];
            return [{
              path: "",
              name: e7.m8.MAIN,
              component: t(() => Promise.all([a.e("43"), a.e("123"), a.e("913")]).then(a.bind(a, 6077))),
              meta: {
                showDesktopStickyBanner: !0,
                showMobileStickyBanner: !0
              }
            }, {
              path: i("game"),
              name: e7.m8.GAME_PAGE,
              component: t(() => Promise.all([a.e("689"), a.e("43"), a.e("877"), a.e("681"), a.e("191"), a.e("317")]).then(a.bind(a, 2997))),
              meta: {
                showMobileStickyBanner: !0,
                noLayout: !0
              }
            }, {
              path: "export/game/:game",
              name: e7.m8.EXPORT_GAME_PAGE,
              component: t(() => Promise.all([a.e("205"), a.e("681"), a.e("839")]).then(a.bind(a, 5642))),
              meta: {
                noLocaleInRoute: !0,
                manuallyHandledErrors: !0,
                noLayout: !0
              }
            }, {
              path: "widget/game/:game",
              name: e7.m8.WIDGET_GAME_PAGE,
              component: t(() => Promise.all([a.e("681"), a.e("437")]).then(a.bind(a, 6679))),
              meta: {
                noLocaleInRoute: !0,
                manuallyHandledErrors: !0,
                noLayout: !0
              }
            }, {
              path: "random",
              name: e7.m8.RANDOM_GAME,
              component: t(() => a.e("731").then(a.bind(a, 6023))),
              meta: {
                noLocaleInRoute: !0
              }
            }, {
              path: i("invite"),
              name: e7.m8.INVITE,
              component: t(() => a.e("78").then(a.bind(a, 523)))
            }, {
              path: i("category"),
              name: e7.m8.CATEGORY,
              component: t(() => Promise.all([a.e("43"), a.e("191"), a.e("71")]).then(a.bind(a, 9910))),
              beforeEnter: ti,
              meta: {
                showDesktopStickyBanner: !0,
                showMobileStickyBanner: !0,
                noLayout: !0
              }
            }, {
              path: i("tag"),
              name: e7.m8.TAG,
              component: t(() => Promise.all([a.e("43"), a.e("191"), a.e("71")]).then(a.bind(a, 9910))),
              beforeEnter: ti,
              meta: {
                showDesktopStickyBanner: !0,
                showMobileStickyBanner: !0,
                noLayout: !0
              }
            }, {
              path: i("series"),
              name: e7.m8.SERIES,
              component: t(() => Promise.all([a.e("43"), a.e("191"), a.e("71")]).then(a.bind(a, 9910))),
              beforeEnter: ti,
              meta: {
                showDesktopStickyBanner: !0,
                showMobileStickyBanner: !0,
                noLayout: !0
              }
            }, {
              path: i("contacts"),
              name: e7.m8.CONTACTS,
              component: t(() => Promise.all([a.e("877"), a.e("296")]).then(a.bind(a, 128)))
            }, {
              path: i("profile"),
              name: e7.m8.PROFILE,
              component: t(() => Promise.all([a.e("43"), a.e("123"), a.e("241")]).then(a.bind(a, 6514)))
            }, {
              path: i("shop"),
              name: e7.m8.SHOP,
              beforeEnter: (e, t, a) => {
                a({
                  name: e7.m8.PROFILE,
                  query: e.query,
                  hash: e.hash,
                  state: {
                    statusCode: 301,
                    headers: {
                      "X-BFF-Redirect-Reason": ta.Xc.SHOP_TO_PROFILE,
                      "X-BFF-Redirect-Mechanism": ta.Z.FRONTEND_ROUTER
                    }
                  }
                })
              },
              component: {}
            }, {
              path: i("allCategories"),
              name: e7.m8.ALL_CATEGORIES,
              component: t(() => a.e("411").then(a.bind(a, 6394)))
            }, {
              path: i("allTags"),
              name: e7.m8.ALL_TAGS,
              component: t(() => a.e("411").then(a.bind(a, 6394)))
            }, {
              path: i("allSeries"),
              name: e7.m8.ALL_SERIES,
              component: t(() => a.e("411").then(a.bind(a, 6394)))
            }, {
              path: i("myGames"),
              name: e7.m8.MY_GAMES,
              component: t(() => Promise.all([a.e("43"), a.e("123"), a.e("695")]).then(a.bind(a, 6368)))
            }, {
              path: i("confidential"),
              name: e7.m8.CONFIDENTIAL,
              component: t(() => Promise.all([a.e("949"), a.e("877"), a.e("827")]).then(a.bind(a, 8467)))
            }, {
              path: i("termsofuse"),
              name: e7.m8.TERMS_OF_USE,
              component: t(() => Promise.all([a.e("949"), a.e("877"), a.e("827")]).then(a.bind(a, 8467)))
            }, {
              path: i("digitalServiceAсt"),
              name: e7.m8.DIGITAL_SERVICE_ACT,
              component: t(() => Promise.all([a.e("949"), a.e("877"), a.e("827")]).then(a.bind(a, 8467)))
            }, {
              path: i("takedown_notice"),
              name: e7.m8.TAKEDOWN_NOTICE,
              component: t(() => Promise.all([a.e("949"), a.e("877"), a.e("827")]).then(a.bind(a, 8467)))
            }, {
              path: i("license"),
              name: e7.m8.LICENSE,
              component: t(() => Promise.all([a.e("949"), a.e("877"), a.e("827")]).then(a.bind(a, 8467)))
            }, {
              path: i("partners_api"),
              name: e7.m8.PARTNERS_API,
              component: t(() => Promise.all([a.e("949"), a.e("877"), a.e("827")]).then(a.bind(a, 8467)))
            }, {
              path: "about-us",
              name: e7.m8.ABOUT_US,
              component: t(() => Promise.all([a.e("949"), a.e("877"), a.e("827")]).then(a.bind(a, 8467))),
              meta: {
                noLocaleInRoute: !0
              }
            }, {
              path: "error",
              component: {}
            }, {
              path: ":catchAll(.*)",
              component: t(() => a.e("380").then(a.bind(a, 1628)))
            }]
          },
          tr = (e, t, a) => {
            let l = [{
              path: e === a.getDefaultLocale() ? "/" : `/${(0,d.zK)(e)}/`,
              name: e7.m8.ROOT,
              component: {},
              children: tn(e, e => e)
            }];
            return (0, s.p7)({
              routes: l,
              history: t
            })
          };
        var ts = a(3510),
          to = a(2649);
        a(4912), a(78), a(1416), a(9975), a(1998), a(8023), a(7527), a(4749), a(7881), a(9365), a(2592), a(1819), a(5614), a(7628), a(9929), a(6301);
        let td = e => {
            let t = new Map;
            e.tags.forEach(e => {
              "alternate" === e.props.rel && t.set(e.props.hreflang, e), "canonical" === e.props.rel && t.set("canonical", e)
            }), e.tags = e.tags.filter(e => "alternate" === e.props.rel ? t.get(e.props.hreflang) === e : "canonical" !== e.props.rel || t.get("canonical") === e)
          },
          tc = {
            shallow: !0
          };

        function tu() {
          var e;
          e = {
            type: "custom-crash",
            url: location.href,
            body: null
          }, "sendBeacon" in navigator && navigator.sendBeacon("/reporting/tab-crash", new Blob([JSON.stringify([e])], {
            type: "application/reports+json"
          }))
        }
        var tp = a(3267);
        class tg {
          request;
          constructor({
            request: e
          }) {
            this.request = e
          }
          submitContactForm = e => this.request("/api/v1/email/report", {
            method: "POST",
            cache: "no-store",
            body: JSON.stringify(e)
          });
          getGamesByCategories = async ({
            categoriesIds: e,
            platform: t,
            pagination: a,
            locale: l,
            withDebugInfo: i
          }) => {
            let n = new URLSearchParams;
            n.set("pagination", JSON.stringify(a)), n.set("platform", t), n.set("locale", l), i && n.set("debug", "true"), e && n.set("categoriesIds", JSON.stringify(e));
            let {
              originalResponse: r,
              data: s
            } = await this.request(`/api/v1/categories/games?${n}`);
            return r.ok && s ? {
              categories: s.categories.map(e => ({
                ...e,
                games: e.games
              })),
              pagination: s.pagination
            } : Promise.reject(r.status)
          };
          getMainPageGamesByCategories = async ({
            platform: e,
            locale: t,
            withDebugInfo: a
          }) => {
            let l = new URLSearchParams;
            l.set("platform", e), l.set("pageSize", I.DY.toString()), l.set("locale", t), a && l.set("debug", "true");
            let {
              originalResponse: i,
              data: n
            } = await this.request(`/api/v1/categories/main-page?${l}`);
            return i.ok && n ? {
              categories: n.categories.map(e => ({
                ...e,
                games: e.games
              })),
              pagination: n.pagination
            } : Promise.reject(i.status)
          };
          getMainCategories = async e => {
            let t = new URLSearchParams;
            t.set("locale", e);
            let {
              originalResponse: a,
              data: l
            } = await this.request(`/api/v1/general/info?${t}`);
            return a.ok && l ? l : Promise.reject(a.status)
          };
          getGameByParam = async ({
            param: e,
            locale: t
          }) => {
            let a = `/api/v1/games/info/${e}`,
              l = new URLSearchParams;
            l.set("locale", t);
            try {
              let {
                originalResponse: e,
                data: t
              } = await this.request(`${a}?${l}`);
              if (!e.ok || !t) return Promise.reject(e.status);
              return t
            } catch (e) {
              return console.error({
                URL,
                error: e
              }), Promise.reject(500)
            }
          };
          getRandomGameHRUs = async ({
            platform: e,
            amount: t
          }) => {
            let a = new URLSearchParams;
            a.set("platform", e), t && a.set("amount", t.toString());
            try {
              let {
                originalResponse: e,
                data: t
              } = await this.request(`/api/v1/games/random-hrus?${a}`);
              if (!e.ok || !t) return Promise.reject(e.status);
              return t
            } catch (e) {
              return console.error({
                URL,
                error: e
              }), Promise.reject(500)
            }
          };
          getGamesCategoriesShortInfo = async (e, t) => {
            let a = `/api/v1/categories/short-info/${e}?locale=${t}`;
            try {
              let {
                originalResponse: e,
                data: t
              } = await this.request(a);
              if (!e.ok || !t) return Promise.reject(e.status);
              return t
            } catch (e) {
              return console.error({
                URL,
                error: e
              }), Promise.reject(500)
            }
          };
          getGamesCategoriesSeoById = async ({
            id: e,
            locale: t,
            type: a
          }) => {
            let l = `/api/v1/categories/seo/${e}`,
              i = new URLSearchParams;
            i.set("locale", t), i.set("type", a);
            try {
              let {
                originalResponse: e,
                data: t
              } = await this.request(`${l}?${i}`);
              if (!e.ok || !t) return Promise.reject(e.status);
              return t
            } catch (e) {
              return console.error({
                URL,
                error: e
              }), Promise.reject(500)
            }
          };
          signedRequest = async (e, t = {}) => {
            let a = await this.request(e, t);
            if (!a.data) return a;
            let {
              data: l
            } = a;
            return {
              ...a,
              data: {
                jwt: l,
                ...(0, tp.o)(l)
              }
            }
          };
          getGameRecommendations = async ({
            hru: e,
            types: t,
            platform: a,
            locale: l,
            limit: i = I.tA
          }) => {
            let n = new URLSearchParams;
            n.set("rec_types", t.join(",")), n.set("limit", String(i)), n.set("platform", a), n.set("locale", l);
            let r = `/api/v1/games/recommendations/${e}?${n}`;
            try {
              let {
                originalResponse: e,
                data: t
              } = await this.request(r);
              if (!e.ok || !t) return Promise.reject(e.status);
              return t
            } catch (e) {
              return console.error({
                URL: r,
                error: e
              }), Promise.reject(500)
            }
          };
          purchaseReward = async ({
            rewardId: e,
            userEmail: t,
            countryCode: a
          }) => {
            let l = "/api/v1/rewards/purchase";
            try {
              let {
                originalResponse: i
              } = await this.request(l, {
                method: "post",
                body: JSON.stringify({
                  reward_id: e,
                  user_email: t,
                  country_code: a
                })
              });
              if (!i.ok) return Promise.reject(i.status)
            } catch (e) {
              return console.error({
                URL: l,
                error: e
              }), Promise.reject(500)
            }
          };
          getRewards = async () => {
            let e = "/api/v1/rewards";
            try {
              let {
                originalResponse: t,
                data: a
              } = await this.request(e);
              if (!t.ok || !a) return Promise.reject(t.status);
              return a
            } catch (t) {
              return console.error({
                URL: e,
                error: t
              }), Promise.reject(500)
            }
          };
          claimTask = async e => {
            let t = "/api/v1/p2e/claim";
            try {
              let {
                originalResponse: a,
                data: l
              } = await this.request(t, {
                method: "post",
                body: JSON.stringify({
                  task_id: e
                })
              });
              if (!a.ok || !l) return Promise.reject(a.status);
              return l
            } catch (e) {
              return console.error({
                URL: t,
                error: e
              }), Promise.reject(500)
            }
          };
          getTasks = async () => {
            let e = "/api/v1/p2e/current";
            try {
              let {
                originalResponse: t,
                data: a
              } = await this.request(e);
              if (!t.ok || !a) return Promise.reject(t.status);
              return a
            } catch (t) {
              return console.error({
                URL: e,
                error: t
              }), Promise.reject(500)
            }
          }
        }
        var tv = a(8284);
        (async () => {
          let e;
          (0, p.hD)() ? (e = (0, s.r5)()).push(`${location.pathname}${location.search}`): e = (0, s.PO)();
          let t = "tabCrashDetection",
            a = "started",
            o = "object" == typeof history.state ? history.state : {};
          "wasDiscarded" in document ? document.wasDiscarded && tu() : o && o[t] === a && tu(), history.replaceState({
            ...o,
            [t]: a
          }, ""), document.addEventListener("visibilitychange", () => {
            let e = "object" == typeof history.state ? history.state : {};
            "hidden" === document.visibilityState ? history.replaceState({
              ...e,
              [t]: void 0
            }, "") : history.replaceState({
              ...e,
              [t]: a
            }, "")
          }), window.addEventListener("pagehide", () => {
            let e = "object" == typeof history.state ? history.state : {};
            history.replaceState({
              ...e,
              [t]: a
            }, "")
          }), await (0, e8.S8)();
          let h = window.additionalServerData?.config,
            f = window.additionalServerData?.locale.detectedLocale;
          if (!h) throw Error("No app config provided");
          let _ = (0, g.J)(h),
            y = (0, to.G6)({
              hooks: {
                "tags:resolve": td
              }
            }),
            {
              i18nAddon: w
            } = (0, c.iv)({
              enableI18n: h.VUE_APP_ENABLE_I18N,
              detectedLocale: f
            });
          if ((0, p.W_)()) {
            let t = new URLSearchParams(location.search);
            t.get("clid") || (t.set("clid", j.y$), e.push(`${location.pathname}?${t.toString()}`))
          }
          let b = () => {},
            {
              router: k,
              routersByLocale: C
            } = function({
              history: e,
              registerImport: t,
              i18nAddon: a,
              deferredInit: l = Promise.resolve()
            }) {
              let i = (0, s.p7)({
                  routes: (({
                    i18nAddon: e,
                    registerImport: t
                  }) => {
                    let a = e.getSupportedLocales();
                    return [{
                      path: a.length > 1 ? `/:locale(${a.map(d.zK).join("|")})?/` : "/",
                      name: e7.m8.ROOT,
                      component: tt,
                      children: tn("en-US", t)
                    }]
                  })({
                    i18nAddon: a,
                    registerImport: t
                  }),
                  history: e,
                  scrollBehavior: async (e, t, a) => (await l, e.hash) ? {
                    el: e.hash
                  } : a || {
                    top: 0
                  },
                  linkActiveClass: "",
                  linkExactActiveClass: ""
                }),
                n = a.getDefaultLocale();
              return i.beforeEach(async (e, l, r) => {
                let s = e.params.locale || "",
                  o = (0, d.zK)(s) || n,
                  c = a.currentLocale.value,
                  u = a.getPreferredLocale(),
                  p = o;
                if (e.name && e.meta.noLocaleInRoute) {
                  if ("" !== s) return r({
                    name: e.name,
                    params: {
                      ...e.params,
                      locale: ""
                    },
                    query: e.query,
                    state: {
                      headers: {
                        "X-BFF-Redirect-Reason": ta.Xc.NO_LOCALE_IN_ROUTE,
                        "X-BFF-Redirect-Mechanism": ta.Z.FRONTEND_ROUTER
                      }
                    }
                  });
                  p = u || o
                } else if ("" === s && u && u !== o && e.name) {
                  let t = u === n ? "" : (0, d.zK)(u);
                  return r({
                    name: e.name,
                    params: {
                      ...e.params,
                      locale: t
                    },
                    query: e.query,
                    state: {
                      headers: {
                        "X-BFF-Redirect-Reason": ta.Xc.PREFERRED_LOCALE,
                        "X-BFF-Redirect-Mechanism": ta.Z.FRONTEND_ROUTER
                      }
                    }
                  })
                } else if (s === (0, d.zK)(n)) return r({
                  name: e.name,
                  params: {
                    ...e.params,
                    locale: ""
                  },
                  query: e.query,
                  state: {
                    statusCode: 301,
                    headers: {
                      "X-BFF-Redirect-Reason": ta.Xc.REMOVE_EN_LOCALE,
                      "X-BFF-Redirect-Mechanism": ta.Z.FRONTEND_ROUTER
                    }
                  }
                });
                if (p === c) return r();
                let g = await a.loadLocale({
                    locale: p,
                    registerImport: t
                  }),
                  v = i.getRoutes().find(e => e.name === e7.m8.ROOT);
                return v && (v.children.forEach(e => {
                  e.name && i.removeRoute(e.name)
                }), tn(g, t).forEach(e => i.addRoute(e7.m8.ROOT, e))), r(e)
              }), {
                router: i,
                routersByLocale: function({
                  history: e,
                  i18nAddon: t
                }) {
                  let a = {};
                  for (let l of t.getSupportedLocales()) a[l] = tr(l, e, t);
                  return a
                }({
                  history: e,
                  i18nAddon: a
                })
              }
            }({
              history: e,
              i18nAddon: w,
              registerImport: e => () => e(),
              deferredInit: new Promise(e => {
                b = () => e()
              })
            }),
            $ = (0, tv.Z)(location.href),
            E = $?.searchParams?.get(I.u) ?? "",
            A = (0, ec.eZ)(new tg({
              request: ((e, t = "", a = {}) => (l, i = {}) => {
                if (void 0 === e) throw Error("No apiHost was defined for requests");
                return t && (l.includes("?") ? l += `&flags=${t}` : l += `?flags=${t}`), fetch(`${e}${l}`, {
                  headers: {
                    "content-type": "application/json",
                    ...a
                  },
                  ...i
                }).then(async e => {
                  try {
                    if ("application/json" === e.headers.get("content-type") || "application/json; charset=utf-8" === e.headers.get("content-type")) {
                      let t = await e.json();
                      if (e.ok) return {
                        originalResponse: e,
                        data: t,
                        errors: []
                      };
                      return {
                        originalResponse: e,
                        data: null,
                        errors: t.errors || [t.message]
                      }
                    }
                    return {
                      originalResponse: e,
                      data: await e.text(),
                      errors: []
                    }
                  } catch (t) {
                    return {
                      originalResponse: e,
                      data: null,
                      errors: [t.toString()]
                    }
                  }
                })
              })(h.API_HOST, E)
            })),
            T = (0, D.v)(C),
            S = (() => {
              let e = (0, v.WB)();
              return "undefined" != typeof window && e.use(m.Z), e
            })();
          S.state.value = window.__pinia || {};
          let O = new l.S({
            defaultOptions: {
              queries: tc
            }
          });
          window.__query && (0, i.ZB)(O, window.__query), await (0, e8.S8)();
          let M = (0, r.vr)(u).use(_).use(A).use(w).use(k).use(T).use(S).use(n.P, {
            queryClient: O,
            enableDevtoolsV6Plugin: !0
          }).use(y).mixin(ts.V);
          M.config.performance = !0, await k.isReady(), await (0, e8.S8)(), M.mount("#app"), b()
        })()
      },
      8977: function(e, t, a) {
        a.d(t, {
          Bo: function() {
            return i
          },
          DH: function() {
            return o
          },
          RF: function() {
            return l
          },
          q6: function() {
            return n
          },
          zK: function() {
            return s
          }
        }), a(793), a(102), a(5123);
        let l = ["en-US", "es-ES", "de-DE", "fr-FR", "it-IT", "pt-BR", "tr-TR", "pl-PL", "id-ID"],
          i = {
            "en-US": () => a.e("588").then(a.bind(a, 4740)),
            "es-ES": () => a.e("19").then(a.bind(a, 4456)),
            "de-DE": () => a.e("178").then(a.bind(a, 5037)),
            "fr-FR": () => a.e("848").then(a.bind(a, 6424)),
            "it-IT": () => a.e("561").then(a.bind(a, 6976)),
            "pt-BR": () => a.e("597").then(a.bind(a, 5702)),
            "tr-TR": () => a.e("987").then(a.bind(a, 5104)),
            "pl-PL": () => a.e("37").then(a.bind(a, 3732)),
            "id-ID": () => a.e("621").then(a.bind(a, 5072))
          },
          n = {
            "en-US": "English",
            "es-ES": "Espa\xf1ol",
            "de-DE": "Deutsch",
            "fr-FR": "Fran\xe7ais",
            "it-IT": "Italiano",
            "pt-BR": "Portugu\xeas",
            "tr-TR": "T\xfcrk\xe7e",
            "pl-PL": "Polski",
            "id-ID": "Indonesia"
          },
          r = {
            en: "en-US",
            es: "es-ES",
            de: "de-DE",
            fr: "fr-FR",
            it: "it-IT",
            br: "pt-BR",
            tr: "tr-TR",
            pl: "pl-PL",
            id: "id-ID",
            "en-US": "en",
            "es-ES": "es",
            "de-DE": "de",
            "fr-FR": "fr",
            "it-IT": "it",
            "pt-BR": "br",
            "tr-TR": "tr",
            "pl-PL": "pl",
            "id-ID": "id"
          },
          s = e => r[e],
          o = e => ({
            "en-US": "en",
            "es-ES": "es",
            "de-DE": "de",
            "fr-FR": "fr",
            "it-IT": "it",
            "pt-BR": "pt",
            "tr-TR": "tr",
            "pl-PL": "pl",
            "id-ID": "id"
          })[e]
      },
      7626: function(e, t, a) {
        a.d(t, {
          iv: function() {
            return o
          },
          s2: function() {
            return d
          }
        });
        var l = a(5595),
          i = a(4070),
          n = a(8977);
        let r = "en-US",
          s = Symbol("i18nAddon"),
          o = ({
            enableI18n: e,
            detectedLocale: t
          }) => {
            let a = (0, i.o)({
                legacy: !1,
                locale: "",
                messages: {},
                pluralRules: {
                  "pl-PL": (e, t) => {
                    let a = Math.abs(Number(e));
                    if (1 === t) return 0;
                    if (2 === t) return +(1 !== a);
                    if (!Number.isInteger(a)) return 2;
                    let l = a % 10,
                      i = a % 100;
                    return 1 === a ? 0 : l >= 2 && l <= 4 && !(i >= 12 && i <= 14) ? 1 : 2
                  }
                }
              }),
              l = t,
              o = {
                currentLocale: a.global.locale,
                getCurrentLanguage() {
                  return this.currentLocale.value.split("-")[0]
                },
                getSupportedLocales: () => e ? n.RF : [r],
                getDefaultLocale: () => r,
                getPreferredLocale() {
                  if (e) return l
                },
                setPreferredLocale(e) {
                  l = e
                },
                async loadLocale({
                  locale: e,
                  registerImport: t
                }) {
                  let l = e in n.Bo ? e : r,
                    i = n.Bo[l],
                    s = (await t(i)()).default;
                  return a.global.setLocaleMessage(l, s), a.global.locale.value = l, l
                },
                install(e) {
                  a.install(e), e.provide(s, o), e.mixin({
                    beforeCreate() {
                      this.$tr = this.$t
                    },
                    unmounted() {
                      delete this.$tr
                    }
                  })
                }
              };
            return {
              vueI18n: a,
              i18nAddon: o
            }
          },
          d = () => {
            let e = (0, l.f3)(s);
            if (!e) throw Error("i18nAddon not found");
            return e
          }
      },
      9253: function(e, t, a) {
        a.d(t, {
          $: function() {
            return r
          },
          jL: function() {
            return s
          },
          qc: function() {
            return n
          }
        });
        var l, i, n = ((l = {}).loading = "loading", l.empty = "empty", l.ready = "ready", l.showing = "showing", l.closed = "pending", l),
          r = ((i = {}).banner = "banner", i.outOfPageBanner = "out-of-page-banner", i);
        class s extends EventTarget {
          destroy;
          provider;
          state = "loading";
          adUnit;
          instreamDuration;
          watchedDuration;
          type = "banner";
          constructor(e) {
            super(), this.destroy = e.destroy || (() => {}), this.provider = e.provider, this.adUnit = e.adUnit
          }
          triggerClosed() {
            "pending" !== this.state && (this.state = "pending", this.dispatch("closed"))
          }
          triggerRewarded(e) {
            this.dispatch("rewarded", e)
          }
          triggerEmpty() {
            "empty" !== this.state && (this.state = "empty", this.dispatch("empty"))
          }
          triggerViewable() {
            this.dispatch("viewable")
          }
          triggerRendered() {
            "showing" !== this.state && (this.state = "showing", this.dispatch("rendered"))
          }
          triggerClicked() {
            this.dispatch("clicked")
          }
          triggerTimer(e) {
            this.dispatch("timer", {
              secondsLeft: e
            })
          }
          addEventListener(...e) {
            super.addEventListener(...e)
          }
          removeEventListener(...e) {
            super.removeEventListener(...e)
          }
          dispatch(e, t) {
            this.dispatchEvent(new CustomEvent(e, {
              detail: t
            }))
          }
        }
      },
      7649: function(e, t, a) {
        a.d(t, {
          Dd: function() {
            return d
          },
          U5: function() {
            return s
          },
          nj: function() {
            return o
          },
          zT: function() {
            return r
          }
        });
        let l = ["interstitial", "interstitial_preroll", "interstitial_preroll_2", "rewarded", "rewarded_2", "sticky_portrait"];
        var i, n, r = ((i = {}).loading = "loading", i.online = "online", i.offline = "offline", i),
          s = ((n = {}).preloadRewarded = "preloadRewarded", n.showRewarded = "showRewarded", n.preloadInterstitial = "preloadInterstitial", n.showInterstitial = "showInterstitial", n.setBannerAdvSettings = "setBannerAdvSettings", n);
        class o extends Error {
          constructor(e = "Not implemented yet") {
            super(e), this.name = "NotImplementedError"
          }
        }

        function d(e) {
          return l.includes(e)
        }
      },
      5003: function(e, t, a) {
        a.d(t, {
          S: function() {
            return i
          }
        });
        var l = a(9253);
        class i extends l.jL {
          makeVisible;
          setPlayback;
          type = l.$.outOfPageBanner;
          triggerReady(e, t) {
            this.state !== l.qc.ready && e && (this.makeVisible = e, this.state = l.qc.ready), this.setPlayback = t, this.dispatch("ready")
          }
          show() {
            if (this.makeVisible && this.state !== l.qc.showing) this.triggerRendered(), this.makeVisible();
            else throw Error("The banner is not ready")
          }
          setPlaybackState(e) {
            this.setPlayback?.(e)
          }
        }
      },
      1591: function(e, t, a) {
        a.d(t, {
          B: function() {
            return u
          },
          m: function() {
            return c
          }
        }), a(4912), a(78), a(1416), a(9975), a(1998), a(8023), a(7527), a(4749), a(7881), a(9365), a(2592), a(1819), a(5614), a(7628), a(2394), a(5646), a(9774), a(5123);
        var l = a(9253),
          i = a(5003),
          n = a(2659),
          r = a(4423),
          s = a(5291),
          o = a(9925),
          d = a(7649);
        let c = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
        class u {
          gpt;
          banners = new Map;
          gamAccount;
          adUnitConfig;
          useOnlyConfig;
          currentTargeting;
          isFirstRequestSent = !1;
          firstAdRequestTimeout;
          platform;
          isWidget;
          formats = null;
          gameManualInterstitialTriggeredAt = 0;
          bannerRenderTimeouts = new Map;
          serviceStatus;
          hasPrebidIntegration = !0;
          constructor({
            targeting: e = {},
            gamAccount: t,
            platform: a,
            auid: i,
            isWidget: n,
            adUnitConfig: r,
            useOnlyConfig: s
          }) {
            window.googletag = window.googletag || {
              cmd: []
            }, window.googletag.cmd = window.googletag.cmd || [], this.gpt = window.googletag, this.gamAccount = t, r && (this.adUnitConfig = r), this.useOnlyConfig = !!(r && s), this.platform = a, this.isWidget = n, this.currentTargeting = e, this.serviceStatus = new Promise((e, t) => {
              (0, o.v)({
                src: c,
                useExisting: !0,
                crossorigin: "anonymous"
              }).catch(() => t(d.zT.offline)), this.gpt.cmd.push(() => {
                this.formats = {
                  interstitial: this.gpt.enums.OutOfPageFormat.GAME_MANUAL_INTERSTITIAL,
                  interstitial_preroll: this.gpt.enums.OutOfPageFormat.GAME_MANUAL_INTERSTITIAL,
                  interstitial_preroll_2: this.gpt.enums.OutOfPageFormat.GAME_MANUAL_INTERSTITIAL,
                  rewarded: this.gpt.enums.OutOfPageFormat.REWARDED,
                  rewarded_2: this.gpt.enums.OutOfPageFormat.REWARDED,
                  sticky_portrait: this.gpt.enums.OutOfPageFormat.BOTTOM_ANCHOR
                }, Object.entries(this.currentTargeting).forEach(([e, t]) => {
                  this.gpt.pubads().setTargeting(e, t)
                }), googletag.pubads().setPublisherProvidedId(i), this.gpt.pubads().set("page_url", "playgama.com"), this.gpt.pubads().addEventListener("rewardedSlotReady", e => {
                  let t = this.banners.get(e.slot);
                  t?.triggerReady(e.makeRewardedVisible)
                }), this.gpt.pubads().addEventListener("gameManualInterstitialSlotReady", e => {
                  let t = this.banners.get(e.slot);
                  t?.triggerReady(e.makeGameManualInterstitialVisible), this.gameManualInterstitialTriggeredAt = Date.now()
                }), this.gpt.pubads().addEventListener("rewardedSlotClosed", e => {
                  this.banners.get(e.slot)?.triggerClosed()
                }), this.gpt.pubads().addEventListener("gameManualInterstitialSlotClosed", e => {
                  this.banners.get(e.slot)?.triggerClosed()
                }), this.gpt.pubads().addEventListener("rewardedSlotGranted", e => {
                  this.banners.get(e.slot)?.triggerRewarded(e.payload)
                }), this.gpt.pubads().addEventListener("impressionViewable", e => {
                  let t = this.bannerRenderTimeouts.get(e.slot);
                  "number" == typeof t && (this.banners.get(e.slot)?.triggerRendered(), window.clearTimeout(t), this.bannerRenderTimeouts.delete(e.slot)), this.banners.get(e.slot)?.triggerViewable()
                }), this.gpt.pubads().addEventListener("slotRenderEnded", e => {
                  let t = this.banners.get(e.slot);
                  e.isEmpty ? t?.triggerEmpty() : t?.type === l.$.outOfPageBanner ? this.bannerRenderTimeouts.set(e.slot, window.setTimeout(() => {
                    t?.triggerEmpty(), t?.destroy(), this.bannerRenderTimeouts.delete(e.slot)
                  }, 6e3)) : t?.triggerRendered()
                }), this.gpt.pubads().enableSingleRequest(), this.gpt.enableServices(), e(d.zT.online)
              })
            }), window.addEventListener("resize", this.onViewportResize.bind(this))
          }
          onViewportResize() {
            let e = this.getOutOfPageBanner();
            e && (e.state === l.qc.showing ? e.triggerClosed() : (e.triggerEmpty(), e.destroy()))
          }
          getOutOfPageBanner() {
            for (let e of this.banners.values())
              if (e.type === l.$.outOfPageBanner) return e;
            return null
          }
          throttleRequestAds(e) {
            this.firstAdRequestTimeout && clearTimeout(this.firstAdRequestTimeout), this.firstAdRequestTimeout = setTimeout(() => {
              this.gpt.cmd.push(() => {
                this.isFirstRequestSent = !0, this.gpt.display(e)
              })
            }, 50)
          }
          preloadAd(e) {
            let t = this.getAdUnitByType(e),
              a = e;
            return "interstitial" === e && Date.now() < this.gameManualInterstitialTriggeredAt + 12e4 && (a = "rewarded"), new Promise((e, l) => {
              let r;
              this.gpt.cmd.push(() => {
                if (!(r = this.gpt.defineOutOfPageSlot(t, this.formats[a]))) return void l(Error("Failed to define out-of-page slot"));
                let s = new i.S({
                  provider: n.bu.GOOGLE_AD,
                  adUnit: t,
                  destroy: () => {
                    this.banners.delete(r), this.gpt.cmd.push(() => {
                      googletag.destroySlots([r])
                    })
                  }
                });
                this.banners.set(r, s), e(s), r.addService(this.gpt.pubads()), this.gpt.display(r), this.isFirstRequestSent = !0, s.addEventListener("closed", () => {
                  s.destroy()
                })
              })
            })
          }
          async prepareOutOfPageAd(e, t) {
            let a = t ? (0, r.HT)(t) : Promise.reject(),
              i = await this.preloadAd(e);
            switch (a.then(() => {
                i.state === l.qc.loading && (console.info("empty by timeout, google"), i.triggerEmpty(), i.destroy())
              }), i.state) {
              case l.qc.ready:
                window.setTimeout(() => {
                  i.triggerReady()
                }, 16);
                break;
              case l.qc.empty:
                window.setTimeout(() => {
                  i.triggerEmpty(), i.destroy()
                }, 16)
            }
            return i
          }
          requestPageAd(e, t) {
            let a = this.getAdUnitByType(e.type);
            return new Promise((i, r) => {
              this.gpt.cmd.push(() => {
                let o, d = null;
                if (e.sizes && (d = this.gpt.defineSlot(a, e.sizes, e.el)), !d) {
                  console.error("Failed to define slot"), r(Error("Failed to define slot"));
                  return
                }
                if (t)
                  for (let [e, a] of Object.entries(t)) a && d.setTargeting(e, a);
                d.addService(this.gpt.pubads()), this.gpt.pubads().setCentering(!0), this.gpt.pubads().collapseEmptyDivs(), this.isFirstRequestSent ? this.gpt.display(d) : this.throttleRequestAds(d), e.refresh && (o = window.setInterval(async () => {
                  await (0, s.A)(d.getSlotElementId()) && this.gpt.pubads().refresh([d])
                }, 1e3 * e.refresh));
                let c = new l.jL({
                  provider: n.bu.GOOGLE_AD,
                  adUnit: a,
                  destroy: () => {
                    this.gpt.destroySlots([d]), window.clearInterval(o), this.banners.delete(d)
                  }
                });
                this.banners.set(d, c), i(c)
              })
            })
          }
          updateTargeting(e = {}) {
            Object.entries(e).forEach(([e, t]) => {
              t ? this.currentTargeting[e] = t : delete this.currentTargeting[e]
            }), this.gpt.cmd.push(() => {
              Object.entries(e).forEach(([e, t]) => {
                t ? this.gpt.pubads().setTargeting(e, t) : this.gpt.pubads().clearTargeting(e)
              })
            })
          }
          getAdUnitByType(e) {
            let t = this.isWidget ? "widget_" : "",
              a = "ios" === this.platform || "android" === this.platform ? "mobile" : "desktop",
              l = `_${a}`,
              i = this.adUnitConfig?.[a]?.[e];
            if (i) return `${this.gamAccount}/${i}`;
            if (this.useOnlyConfig) throw Error("No such ad unit in this provider");
            let n = {
              rewarded: "rewarded",
              rewarded_2: "rewarded",
              interstitial: "h5_interstitial",
              interstitial_preroll: "h5_interstitial_preroll",
              interstitial_preroll_2: "h5_interstitial_preroll"
            };
            return e in n ? `${this.gamAccount}/${t}${n[e]}${l}` : `${this.gamAccount}/${({sticky_mobile_non_game_page:"sticky_mobile",sticky_mobile:"sticky_mobile",sticky_tablet:"sticky_mobile",sticky_desktop:"sticky_desktop",sidebar:"sidebar",sidebar_bottom:"sidebar_bottom",leaderboard:"leaderboard",leaderboard_rest:"leaderboard_rest",widget_sidebar:"widget_sidebar",widget_sidebar_bottom:"widget_sidebar_bottom",widget_horizontal:"widget_horizontal",widget_horizontal_2:"widget_horizontal_2",widget_sticky_mobile:"widget_sticky_mobile",widget_sticky_tablet:"widget_sticky_mobile"})[e]}`
          }
        }
      },
      156: function(e, t, a) {
        a.d(t, {
          G: function() {
            return i
          },
          g: function() {
            return n
          }
        });
        var l = a(6897);
        let i = "xiaomi_store";
        class n {
          enabled;
          constructor({
            queryParams: e
          }) {
            this.enabled = e[l.Ty] === i
          }
          listen(e) {
            this.enabled && (this.handleLoadStart(), e.addEventListener("liveness", this.handleLoadReady))
          }
          handleLoadStart() {
            try {
              window.funmax?.loadStart?.()
            } catch (e) {
              console.error(e)
            }
          }
          handleLoadReady() {
            try {
              window.funmax?.loadReady?.()
            } catch (e) {
              console.error(e)
            }
          }
        }
      },
      6132: function(e, t, a) {
        a.d(t, {
          G: function() {
            return p
          }
        }), a(5646), a(9774), a(5123), a(2394);
        var l = a(9626),
          i = a(5595),
          n = a(2157),
          r = a(7626),
          s = a(4423),
          o = a(1097),
          d = a(3095);
        let c = {
            p2eBonusInfo: {},
            promoCategoriesList: [],
            menuHighlightCategoriesList: [],
            contentCategoriesList: [],
            menuCategoriesList: []
          },
          u = ["trending_now", "new"],
          p = () => {
            let {
              currentLocale: e
            } = (0, r.s2)(), {
              getCategoryRoute: t
            } = (0, n.w)(), {
              getMainCategories: a
            } = (0, o.Ek)(), p = (0, i.Fl)(() => h.value || c), g = (0, i.Fl)(() => ["main-data", e.value]);

            function v(e) {
              let a = {},
                l = [],
                i = [],
                n = [],
                {
                  categories: r,
                  p2e: o
                } = e;
              return a = o.coinsInfo, r.forEach(({
                id: e,
                hru: a,
                title: i
              }) => {
                u.includes(e) ? l.push({
                  id: e,
                  title: i,
                  location: t({
                    hru: a,
                    type: "category"
                  })
                }) : n.push({
                  id: e,
                  title: i,
                  location: t({
                    hru: a,
                    type: "category"
                  })
                })
              }), i = [...l, ...n], {
                p2eBonusInfo: a,
                promoCategoriesList: (0, s.TV)(n.slice()).slice(0, Math.min(7, n.length)),
                menuHighlightCategoriesList: l,
                contentCategoriesList: i,
                menuCategoriesList: n
              }
            }
            let m = "undefined" == typeof window,
              {
                data: h,
                suspense: f
              } = (0, l.a)({
                queryKey: g,
                queryFn: () => a(e.value).then(v),
                staleTime: m ? d.YL : 1 / 0,
                refetchOnWindowFocus: !1,
                refetchOnMount: !1
              });
            return {
              mainData: p,
              suspense: f
            }
          }
      },
      8028: function(e, t, a) {
        a.d(t, {
          u: function() {
            return p
          }
        }), a(9560), a(9734);
        var l = a(9626),
          i = a(5595),
          n = a(2157),
          r = a(1704),
          s = a(7626),
          o = a(4351),
          d = a(4423),
          c = a(1097);
        let u = {
            id: "",
            title: "",
            location: "",
            games: []
          },
          p = e => {
            let {
              currentLocale: t
            } = (0, s.s2)(), {
              getCategoryRoute: a
            } = (0, n.w)(), {
              getGamesByCategories: p
            } = (0, c.Ek)(), g = (0, o.q)(), v = (0, i.Fl)(() => ["trending_now", r.DY, t.value]), m = (0, i.Fl)(() => _.value || u), h = (0, i.Fl)(() => m.value.games.map(d.VP));

            function f(e) {
              let [t] = e.categories.map(({
                id: e,
                hru: t,
                title: l,
                games: i
              }) => ({
                id: e,
                title: l,
                location: a({
                  hru: t,
                  type: "category"
                }),
                games: (0, d.TV)(i.map(d.bO))
              }));
              return t
            }
            let {
              data: _
            } = (0, l.a)({
              queryKey: v,
              queryFn: () => p({
                categoriesIds: ["trending_now"],
                pagination: {
                  page: 1,
                  pageSize: r.DY
                },
                platform: g.platform,
                withDebugInfo: g.isDebugMode,
                locale: t.value
              }).then(f),
              staleTime: 1 / 0,
              refetchOnWindowFocus: !1,
              refetchOnMount: !1,
              ...e
            });
            return {
              unzippedTrendingWithGames: h,
              currentTrending: m
            }
          }
      },
      4886: function(e, t, a) {
        a.d(t, {
          IF: function() {
            return i
          },
          OW: function() {
            return o
          },
          aB: function() {
            return r
          },
          go: function() {
            return s
          },
          jx: function() {
            return n
          },
          m8: function() {
            return l
          }
        });
        let l = {
            ROOT: "root",
            MAIN: "main",
            GAME_PAGE: "game-page",
            EXPORT_GAME_PAGE: "export-game-page",
            WIDGET_GAME_PAGE: "widget-game-page",
            CATEGORY: "category",
            TAG: "tag",
            SERIES: "series",
            CONFIDENTIAL: "confidential",
            TERMS_OF_USE: "termsofuse",
            LICENSE: "license",
            PARTNERS_API: "partners-api",
            CONTACTS: "contacts",
            PROFILE: "profile",
            SHOP: "shop",
            INVITE: "invite",
            ALL_CATEGORIES: "all-categories-page",
            ALL_TAGS: "all-tags-page",
            ALL_SERIES: "all-series-page",
            TAKEDOWN_NOTICE: "takedown-notice",
            RANDOM_GAME: "random-game",
            MY_GAMES: "my-games",
            DIGITAL_SERVICE_ACT: "digital-service-act",
            ABOUT_US: "about-us"
          },
          i = [l.GAME_PAGE, l.EXPORT_GAME_PAGE, l.WIDGET_GAME_PAGE],
          n = [l.MAIN, l.CATEGORY, l.TAG, l.SERIES, l.PROFILE, l.GAME_PAGE],
          r = [l.EXPORT_GAME_PAGE],
          s = [l.EXPORT_GAME_PAGE],
          o = [l.EXPORT_GAME_PAGE, l.WIDGET_GAME_PAGE, l.EXPORT_GAME_PAGE]
      },
      4600: function(e, t, a) {
        a.d(t, {
          EO: function() {
            return u
          },
          Qk: function() {
            return i
          },
          bQ: function() {
            return r
          },
          bp: function() {
            return d
          },
          fK: function() {
            return c
          },
          mY: function() {
            return s
          },
          nL: function() {
            return n
          },
          nh: function() {
            return p
          },
          qU: function() {
            return o
          }
        });
        var l = a(4886);
        let i = "/developers",
          n = "/partners",
          r = "/blog",
          s = e => ({
            title: e("navigation.privacy_policy"),
            to: {
              name: l.m8.CONFIDENTIAL
            }
          }),
          o = e => ({
            title: e("navigation.about_us"),
            to: {
              name: l.m8.ABOUT_US,
              params: {
                locale: ""
              }
            },
            target: "_blank"
          }),
          d = ["https://www.linkedin.com/company/playgama", "https://www.instagram.com/playgama/", "https://www.facebook.com/playgamagames", "https://x.com/PlaygamaCom", "https://bsky.app/profile/playgama.bsky.social", "https://www.youtube.com/@playgama_games", "https://www.trustpilot.com/review/playgama.com"],
          c = e => [{
            title: e("socials.playgamaForDevs"),
            icon: "discord",
            externalTo: "https://discord.com/invite/pzqd2upxr8",
            target: "_blank"
          }, {
            title: "Playgama Bridge",
            icon: "telegram",
            externalTo: "https://t.me/playgama_bridge",
            target: "_blank"
          }, {
            title: "LinkedIn",
            icon: "linked_in",
            externalTo: "https://www.linkedin.com/company/playgama",
            target: "_blank"
          }, {
            title: "Facebook",
            icon: "facebook",
            externalTo: "https://www.facebook.com/playgamagames",
            target: "_blank"
          }, {
            title: "X.com (ex-Twitter)",
            icon: "twitter",
            externalTo: "https://x.com/PlaygamaCom",
            target: "_blank"
          }, {
            title: "Bluesky",
            icon: "bluesky",
            externalTo: "https://bsky.app/profile/playgama.bsky.social",
            target: "_blank"
          }, {
            title: "Github",
            icon: "github",
            externalTo: "https://github.com/playgama/bridge",
            target: "_blank"
          }],
          u = e => [o(e), {
            title: e("navigation.developers"),
            externalTo: i,
            target: "_blank"
          }, {
            title: e("navigation.publishers"),
            externalTo: n,
            target: "_blank"
          }, s(e), {
            title: e("navigation.contact_us"),
            to: {
              name: l.m8.CONTACTS
            }
          }, {
            title: e("navigation.takedown_notice"),
            to: {
              name: l.m8.TAKEDOWN_NOTICE
            }
          }, {
            title: e("navigation.terms_of_use"),
            to: {
              name: l.m8.TERMS_OF_USE
            }
          }, {
            title: e("navigation.digital_service_act"),
            to: {
              name: l.m8.DIGITAL_SERVICE_ACT
            }
          }],
          p = e => ({
            allGames: {
              title: e("navigation.all_games"),
              icon: "all_games",
              to: {
                name: l.m8.ALL_CATEGORIES
              }
            },
            allSeries: {
              title: e("navigation.all_series"),
              icon: "all_series",
              to: {
                name: l.m8.ALL_SERIES
              }
            },
            allTags: {
              title: e("navigation.all_tags"),
              icon: "all_tags",
              to: {
                name: l.m8.ALL_TAGS
              }
            }
          })
      },
      6897: function(e, t, a) {
        a.d(t, {
          Ej: function() {
            return n
          },
          Im: function() {
            return l
          },
          Ty: function() {
            return i
          },
          aE: function() {
            return r
          },
          mF: function() {
            return o
          }
        });
        let l = "widget_id",
          i = "clid",
          n = "export_mode",
          r = "use_gd_ads",
          s = "redirCnt",
          o = e => {
            let t = parseInt(e.searchParams.get(s) || "0");
            if (!(t > 5)) return e.searchParams.set(s, (t + 1).toString()), e
          }
      },
      730: function(e, t, a) {
        a.d(t, {
          u: function() {
            return u
          },
          x: function() {
            return c
          }
        });
        var l = a(144),
          i = a(5595),
          n = a(407),
          r = a(4351),
          s = a(1318),
          o = a(8518),
          d = a(1920);
        let c = {
            1: 30,
            7: 40,
            30: 70
          },
          u = (0, l.Q_)("ad-disabled", () => {
            let e = (0, r.q)(),
              t = (0, n.x)(),
              a = (0, d.L)(),
              u = (0, s.E)(),
              p = (0, o.o)(),
              {
                user: g
              } = (0, l.Jk)(a),
              {
                isIframe: v,
                isExportOnPortal: m
              } = (0, l.Jk)(e),
              h = (0, i.iH)(!1),
              f = (0, i.iH)(0);

            function _() {
              let e = !v.value || m.value,
                a = g.value?.adsDisabledUntil,
                l = e && a ? new Date(a).getTime() - Date.now() : 0;
              h.value = l > 0, f.value = h.value ? Math.ceil(l / 864e5) : 0, t.adService?.toggleState(!h.value)
            }
            "undefined" != typeof window && (_(), setInterval(_, 6e4), (0, i.YP)(() => g.value?.adsDisabledUntil, _));
            let y = (0, i.iH)({
                isOpened: !1,
                isTopUp: !1,
                adPlacement: void 0
              }),
              w = (0, i.iH)(!1);
            async function b(e) {
              p.logEvent({
                event: "custom_event",
                eventName: "open_purchase_window",
                adPlacement: e
              });
              try {
                await a.authorizeUser() && (y.value = {
                  isOpened: !0,
                  isTopUp: h.value,
                  adPlacement: e
                })
              } catch {}
            }
            return {
              isAdDisabled: h,
              remainingDaysWithoutAd: f,
              disableAd: async function(e) {
                y.value.isOpened = !1;
                try {
                  await u.setPaymentModalOrder({
                    type: "disable-ad-order",
                    amount: c[e],
                    durationInDays: e,
                    externalId: `no-ads-${e}-days-${Date.now()}`,
                    adPlacement: y.value.adPlacement,
                    isTopUp: y.value.isTopUp
                  }), w.value = !0
                } catch {}
                y.value.adPlacement = void 0
              },
              adDisabledModalOptions: y,
              openDisabledAdModal: b,
              closeAdDisabledModal: function() {
                y.value = {
                  isOpened: !1,
                  isTopUp: !1,
                  adPlacement: void 0
                }
              },
              isAdFinalScreenVisible: w,
              closeNoAdFinalScreen: function() {
                w.value = !1
              }
            }
          })
      },
      407: function(e, t, a) {
        a.d(t, {
          x: function() {
            return q
          }
        }), a(2394);
        var l = a(144),
          i = a(5595),
          n = a(9938),
          r = a(7788),
          s = a(7626);
        a(7886), a(5451), a(6015), a(8334), a(4880), a(5643), a(9761), a(8558), a(7980), a(6236), a(2833), a(7906), a(2114), a(2613), a(874), a(2240), a(8675), a(6857), a(8137), a(6501), a(6834), a(1549), a(3485), a(9560), a(9734), a(5646), a(9774), a(5123);
        var o = a(7649),
          d = a(9253);
        a(3375), a(9929), a(6301);
        var c = a(9925);
        class u {
          config;
          constructor(e) {
            this.config = e
          }
          async init() {
            let {
              promise: e,
              resolve: t,
              reject: a
            } = Promise.withResolvers();
            try {
              if (window.pbjs = window.pbjs || {
                  que: []
                }, await (0, c.v)({
                  src: "/prebid10.9.0.js",
                  useExisting: !0
                }), !window.pbjs || !window.pbjs.setConfig) throw Error("Prebid.js failed to load properly");
              window.pbjs.que.push(() => {
                try {
                  window.pbjs?.setConfig({
                    priceGranularity: "dense",
                    bidderTimeout: this.config?.timeout || 2e3,
                    enableSendAllBids: !0,
                    consentManagement: {
                      gdpr: {
                        cmpApi: "iab",
                        timeout: 8e3,
                        allowAuctionWithoutConsent: !1,
                        defaultGdprScope: !0,
                        rules: [{
                          purpose: "storage",
                          enforcePurpose: !0,
                          enforceVendor: !0
                        }, {
                          purpose: "basicAds",
                          enforcePurpose: !0,
                          enforceVendor: !0
                        }, {
                          purpose: "measurement",
                          enforcePurpose: !0,
                          enforceVendor: !0
                        }, {
                          purpose: "personalizedAds",
                          enforcePurpose: !0,
                          enforceVendor: !0
                        }]
                      },
                      gpp: {
                        cmpApi: "iab",
                        timeout: 8e3,
                        defaultGppScope: !0
                      },
                      usp: {
                        cmpApi: "iab",
                        timeout: 8e3
                      }
                    }
                  }), t()
                } catch (e) {
                  a(e)
                }
              })
            } catch (e) {
              a(e)
            }
            return e
          }
          getAdUnit(e, t) {
            return {
              code: e,
              mediaTypes: (0, o.Dd)(t.type) ? {
                video: {
                  context: "instream"
                }
              } : {
                banner: {
                  sizes: t.sizes?.filter(e => "fluid" !== e)
                }
              },
              bids: this.config?.bidders
            }
          }
          runAuction(e, t) {
            if (!window.pbjs || !this.config) return Promise.resolve(void 0);
            let a = this.config.timeout || 2e3;
            return new Promise(l => {
              let i = setTimeout(() => {
                l(void 0)
              }, a);
              window.pbjs?.que.push(() => {
                window.pbjs?.addAdUnits([this.getAdUnit(e, t)]), window.pbjs?.requestBids({
                  timeout: a,
                  bidsBackHandler: () => {
                    clearTimeout(i), l(window.pbjs?.getAdserverTargetingForAdUnitCode(e))
                  }
                })
              })
            })
          }
        }
        var p = a(5003),
          g = a(2659);
        class v {
          serviceStatus;
          constructor() {
            this.serviceStatus = Promise.resolve(o.zT.online)
          }
          prepareOutOfPageAd(e) {
            return new Promise(t => {
              let a = new p.S({
                provider: g.bu.DEBUG_PROVIDER
              });
              setTimeout(() => {
                t(a)
              }, 100), setTimeout(() => {
                a.triggerReady(() => {
                  setTimeout(() => {
                    a.triggerRendered()
                  }, 800), setTimeout(() => {
                    a.triggerViewable()
                  }, 1400), "rewarded" === e && setTimeout(() => {
                    a.triggerRewarded({})
                  }, 3500), setTimeout(() => {
                    a.triggerClosed()
                  }, 4e3)
                })
              }, 400)
            })
          }
          requestPageAd() {
            return Promise.reject()
          }
          updateTargeting() {}
          getAdUnitByType(e) {}
        }
        a(4912), a(78), a(1416), a(9975), a(1998), a(8023), a(7527), a(4749), a(7881), a(9365), a(2592), a(1819), a(5614), a(7628), a(4898), a(947), a(3293), a(5128), a(793), a(102);
        var m = a(5291);

        function h(e) {
          for (let t of Array.from(e.attributes)) "id" !== t.name && "class" !== t.name && e.removeAttribute(t.name)
        }
        class f {
          logEvent;
          getAdUnit;
          sendRequest;
          getCreative;
          intersectionObserver;
          mutationObserver;
          adTrackingData = new Map;
          constructor({
            logEvent: e,
            getAdUnit: t,
            sendRequest: a,
            getCreative: l
          }) {
            this.logEvent = e, this.getAdUnit = t, this.sendRequest = a, this.getCreative = l, this.intersectionObserver = new IntersectionObserver(e => {
              e.forEach(e => {
                if (e.isIntersecting) {
                  let t = e.target.id,
                    a = this.adTrackingData.get(t);
                  a && (this.log(a.type, "direct_ad_impression", a.creative), this.sendRequest(a.creative.impressionTrackingUrl), this.intersectionObserver.unobserve(e.target), this.adTrackingData.delete(t))
                }
              })
            }, {
              threshold: .5,
              rootMargin: "0px"
            }), this.mutationObserver = new MutationObserver(e => {
              for (let t of e) "attributes" === t.type && h(t.target)
            })
          }
          createAdElement(e, t) {
            let a = document.createElement("img");
            return a.id = e, a.src = `https://playgama.com/cdn-cgi/imagedelivery/LN2S-4p3-GgZvEx3IPaKUA/${t.file}/original`, t.width && t.height && (a.width = t.width, a.height = t.height), this.intersectionObserver.observe(a), a
          }
          log(e, t, a) {
            this.logEvent({
              event: "direct_ad_event",
              eventName: t,
              adPlacement: e,
              adUnit: this.getAdUnit(e, a)
            })
          }
          requestAd(e) {
            let t, {
                type: a,
                el: l,
                sizes: i,
                refresh: n
              } = e,
              r = crypto.randomUUID(),
              s = document.createElement("a");
            this.log(a, "direct_ad_request");
            let o = l && document.querySelector(`#${l}`),
              c = new d.jL({
                provider: g.bu.DIRECT,
                adUnit: this.getAdUnit(a),
                destroy: () => {
                  this.adTrackingData.delete(r), s.remove(), t && window.clearTimeout(t)
                }
              });
            n && (t = window.setTimeout(async () => {
              l && await (0, m.A)(l) && (this.adTrackingData.delete(r), s.remove(), this.requestAd(e))
            }, 1e3 * n));
            let u = this.getCreative(a, i);
            return o && u && "banner" === u.format ? (h(o), this.mutationObserver.observe(o, {
              attributes: !0
            }), this.adTrackingData.set(r, {
              creative: u,
              type: a
            }), s.style.display = "flex", s.style.justifyContent = "center", s.href = `/redirect.html?url=${encodeURIComponent(u.clickUrl)}`, s.target = "_blank", s.addEventListener("click", () => {
              this.log(a, "direct_ad_click", u)
            }), s.appendChild(this.createAdElement(r, u)), o.appendChild(s), window.setTimeout(() => {
              c.triggerRendered()
            }, 16), window.setTimeout(() => {
              c.triggerViewable()
            }, 32)) : window.setTimeout(() => {
              c.triggerEmpty()
            }, 16), Promise.resolve(c)
          }
        }
        var _ = a(1704);
        let y = {
          "en-US": {
            skip: "Skip Ad",
            learnMore: "Learn More"
          },
          "de-DE": {
            skip: "Werbung \xfcberspringen",
            learnMore: "Mehr erfahren"
          },
          "es-ES": {
            skip: "Saltar anuncio",
            learnMore: "Saber m\xe1s"
          },
          "fr-FR": {
            skip: "Passer la pub",
            learnMore: "En savoir plus"
          },
          "id-ID": {
            skip: "Lewati iklan",
            learnMore: "Pelajari lebih lanjut"
          },
          "it-IT": {
            skip: "Salta pubblicit\xe0",
            learnMore: "Scopri di pi\xf9"
          },
          "pl-PL": {
            skip: "Pomiń reklamę",
            learnMore: "Dowiedz się więcej"
          },
          "pt-BR": {
            skip: "Pular an\xfancio",
            learnMore: "Saiba mais"
          },
          "tr-TR": {
            skip: "Reklamı ge\xe7",
            learnMore: "Daha fazla \xf6ğren"
          }
        };
        var w = a.p + "static/media/sample-video.a6694a8e.webm";
        class b {
          ready;
          logEvent;
          getAdUnit;
          sendRequest;
          getCreative;
          locale;
          wrapperControls;
          videoWrapper;
          videoPlayer;
          skipButton;
          learnMoreButton;
          sampleVideoSrc;
          learnMoreClickHandler;
          videoClickHandler;
          isMuted = !1;
          shakaPlayerRef = null;
          constructor({
            logEvent: e,
            getAdUnit: t,
            sendRequest: a,
            getCreative: l,
            footerHeight: i,
            locale: n
          }) {
            this.logEvent = e, this.getAdUnit = t, this.sendRequest = a, this.getCreative = l, this.locale = y[n] ? n : "en-US";
            try {
              let {
                wrapper: e,
                controls: t
              } = function({
                footerHeight: e = "0px",
                locale: t
              }) {
                let a = document.createElement("div");
                a.setAttribute("style", `--footer-height: ${e};`);
                let l = () => {};
                return a.classList.add("PTout"), a.insertAdjacentHTML("beforeend", `
    <div class="_7qoDu">
        <video
            data-id="instream-player"
            playsinline
            webkit-playsinline="true"
            class="hzIdf"
        >
            <source src="${w}" />
        </video>
        <button
             data-id="skip-button"
             class="xge3s"
         />
        <button
             data-id="learn-more-button"
             class="YNZ8V"
         >
             ${y[t].learnMore}
         </button>
    </div>
    <div
        data-id="instream-overlay"
        class="vXg5P"
    />`), a.querySelector('[data-id="instream-overlay"]')?.addEventListener("click", () => {
                  l()
                }), {
                  wrapper: a,
                  controls: {
                    switchOverlayVisibility: e => {
                      a.querySelector('[data-id="instream-overlay"]')?.classList.toggle("a4RqL", e)
                    },
                    setContinueAdHandler: e => {
                      l = e
                    }
                  }
                }
              }({
                footerHeight: i,
                locale: this.locale
              });
              document.body.insertAdjacentElement("beforeend", e), this.wrapperControls = t, this.videoWrapper = e
            } catch (e) {
              throw Error(`Cannot create the instream wrapper app due to error: ${e}`)
            }
            this.videoPlayer = this.videoWrapper.querySelector('[data-id="instream-player"]'), this.skipButton = this.videoWrapper.querySelector('[data-id="skip-button"]'), this.learnMoreButton = this.videoWrapper.querySelector('[data-id="learn-more-button"]'), this.sampleVideoSrc = this.videoPlayer.querySelector("source")?.src || "", this.ready = this.loadShakaPlayer()
          }
          async loadShakaPlayer() {
            if ("" === this.videoPlayer.canPlayType("application/vnd.apple.mpegurl")) {
              let e = await a.e("128").then(a.t.bind(a, 4799, 23));
              this.shakaPlayerRef = new e.Player
            }
          }
          async playVideo(e, t, a) {
            try {
              this.skipButton.disabled = !0, this.skipButton.style.display = t.skippable ? "block" : "none", this.skipButton.textContent = "5";
              let l = !1;
              this.learnMoreClickHandler = () => {
                this.videoPlayer.pause(), this.wrapperControls.switchOverlayVisibility(!0), this.logEvent({
                  event: "direct_ad_event",
                  eventName: "direct_ad_click",
                  adPlacement: a,
                  adUnit: this.getAdUnit(a, t)
                }), window.open(`/redirect.html?url=${encodeURIComponent(t.clickUrl)}`, "_blank")
              }, this.learnMoreButton.addEventListener("click", this.learnMoreClickHandler), this.videoClickHandler = () => {
                this.videoPlayer.pause(), this.wrapperControls.switchOverlayVisibility(!0)
              }, this.videoPlayer.addEventListener("click", this.videoClickHandler), await this.videoPlayer.play(), e.triggerViewable(), this.logEvent({
                event: "direct_ad_event",
                eventName: "direct_ad_impression",
                adPlacement: a,
                adUnit: this.getAdUnit(a, t)
              }), this.sendRequest(t.impressionTrackingUrl), this.videoPlayer.addEventListener("ended", () => {
                this.endAd(e, a, t)
              }), this.videoPlayer.addEventListener("timeupdate", () => {
                let {
                  currentTime: i
                } = this.videoPlayer, n = Math.round(5 - i);
                e.triggerTimer(Math.round(this.videoPlayer.duration - i)), t.skippable && n > 0 && (this.skipButton.textContent = `${n}`), t.skippable && n <= 0 && (this.skipButton.textContent = y[this.locale].skip, this.skipButton.disabled = !1, l || (this.logEvent({
                  event: "direct_ad_event",
                  eventName: "direct_ad_skip_button_shown",
                  adPlacement: a,
                  adUnit: this.getAdUnit(a, t)
                }), l = !0), this.skipButton.addEventListener("click", () => {
                  this.endAd(e, a, t)
                }))
              })
            } catch {
              e.triggerEmpty()
            }
          }
          async loadVideo(e) {
            var t;
            let l = (t = e.file, `${_.W_}${t}/manifest`);
            if ("" !== this.videoPlayer.canPlayType("application/vnd.apple.mpegurl")) {
              this.videoPlayer.src = `${l}/video.m3u8`, this.videoPlayer.load();
              return
            }
            let i = await a.e("128").then(a.t.bind(a, 4799, 23));
            this.shakaPlayerRef = new i.Player, this.shakaPlayerRef.configure({
              abr: {
                restrictToElementSize: !0
              },
              manifest: {
                disableAudio: this.isMuted
              },
              streaming: {
                bufferingGoal: 3
              }
            }), this.shakaPlayerRef.attach(this.videoPlayer);
            try {
              await this.shakaPlayerRef.load(`${l}/video.mpd`, 0, "application/dash+xml")
            } catch {}
          }
          async resetPlayer() {
            try {
              await this.shakaPlayerRef?.destroy(), this.shakaPlayerRef = null
            } catch {}
            if (!this.videoPlayer.querySelector("source")) {
              let e = document.createElement("source");
              e.src = this.sampleVideoSrc, this.videoPlayer.appendChild(e)
            }
            this.videoPlayer.src = "", this.videoPlayer.load(), setTimeout(() => {
              this.videoPlayer.removeAttribute("src")
            }, 1e3)
          }
          endAd(e, t, a) {
            e.watchedDuration = Math.round(this.videoPlayer.currentTime), e.instreamDuration = Math.round(this.videoPlayer.duration), this.videoWrapper.style.removeProperty("opacity"), this.videoWrapper.style.removeProperty("pointer-events"), this.videoWrapper.style.removeProperty("z-index"), this.learnMoreClickHandler && (this.learnMoreButton.removeEventListener("click", this.learnMoreClickHandler), this.learnMoreClickHandler = void 0), this.videoClickHandler && (this.videoPlayer.removeEventListener("click", this.videoClickHandler), this.videoClickHandler = void 0), this.resetPlayer(), "rewarded" === t && e.triggerRewarded({}), this.logEvent({
              event: "direct_ad_event",
              eventName: "direct_ad_close",
              adPlacement: t,
              adUnit: this.getAdUnit(t, a),
              instreamDuration: e.instreamDuration,
              watchedDuration: e.watchedDuration
            }), e.triggerClosed()
          }
          async requestAd(e, t) {
            this.logEvent({
              event: "direct_ad_event",
              eventName: "direct_ad_request",
              adPlacement: e,
              adUnit: this.getAdUnit(e)
            });
            let a = new p.S({
                provider: g.bu.DIRECT,
                adUnit: this.getAdUnit(e)
              }),
              l = this.getCreative(e);
            if (!l || "video" !== l.format) return window.setTimeout(() => {
              a.triggerEmpty()
            }, 16), a;
            let i = await this.checkAutoplaySupport();
            return (await this.loadVideo(l), "muted" === i && (this.videoPlayer.muted = !0, this.videoPlayer.setAttribute("muted", "1")), "no" === i) ? (this.wrapperControls.switchOverlayVisibility(!0), this.wrapperControls.setContinueAdHandler(async () => {
              await this.playVideo(a, l, e)
            })) : (this.wrapperControls.setContinueAdHandler(async () => {
              this.wrapperControls.switchOverlayVisibility(!1), await this.videoPlayer.play()
            }), this.videoWrapper.style.opacity = "1", this.videoWrapper.style.pointerEvents = "auto", this.videoWrapper.style.zIndex = "2147483647", window.setTimeout(() => {
              a.triggerReady(async () => {
                await this.playVideo(a, l, e)
              }, e => {
                e ? this.videoPlayer.play() : this.videoPlayer.pause()
              })
            }, 16)), a
          }
          async checkAutoplaySupport() {
            this.videoPlayer.load(), this.videoPlayer.volume = 1, this.isMuted = !1, this.videoPlayer.removeAttribute("muted");
            try {
              return await this.videoPlayer.play(), this.videoPlayer.pause(), "full"
            } catch {
              return this.checkMutedAutoplaySupport()
            }
          }
          async checkMutedAutoplaySupport() {
            this.videoPlayer.volume = 0, this.videoPlayer.muted = !0;
            try {
              return await this.videoPlayer.play(), this.videoPlayer.pause(), this.isMuted = !0, this.videoPlayer.setAttribute("muted", "1"), "muted"
            } catch {
              return "no"
            }
          }
        }

        function k(e) {
          e && fetch(e, {
            method: "GET",
            mode: "no-cors"
          }).catch(() => {})
        }
        class C {
          serviceStatus;
          imageBanner;
          videoBanner;
          targeting = {};
          platform;
          logEvent;
          data = null;
          roundRobinIndexes = new Map;
          constructor({
            targeting: e,
            platform: t,
            footerHeight: a,
            logEvent: l,
            locale: i
          }) {
            this.targeting = {
              ...e
            }, this.platform = t, this.logEvent = l, this.imageBanner = new f({
              logEvent: this.logEvent,
              getAdUnit: this.getAdUnit.bind(this),
              sendRequest: k,
              getCreative: this.getCreative.bind(this)
            }), this.videoBanner = new b({
              logEvent: this.logEvent,
              getAdUnit: this.getAdUnit.bind(this),
              sendRequest: k,
              getCreative: this.getCreative.bind(this),
              footerHeight: a,
              locale: i
            }), this.serviceStatus = this.loadResources()
          }
          async loadResources() {
            try {
              let {
                targets: e
              } = await a.e("97").then(a.bind(a, 4981));
              return this.data = e, await this.videoBanner.ready, o.zT.online
            } catch {
              return o.zT.offline
            }
          }
          getCreative(e, t) {
            if (!this.data) return null;
            let a = this.data.filter(e => e.platforms.includes(this.platform)).flatMap(e => e.creatives).filter(t => t.adUnits.includes(e));
            if (t?.length && (a = a.filter(e => !e.width || !e.height || t.some(t => "fluid" === t || e.width === t[0] && e.height === t[1]))), 0 === a.length) return null;
            let l = `${this.platform}-${e}`,
              i = this.roundRobinIndexes.get(l) ?? Math.floor(Math.random() * a.length),
              n = (i + 1) % a.length;
            return this.roundRobinIndexes.set(l, n), a[i]
          }
          getAdUnit(e, t) {
            if (t?.file) {
              let a = this.data?.find(e => e.creatives.some(e => e.file === t.file))?.campaignId;
              if (a) return `${this.platform}-${e}-${a}-${t.file}`
            }
            return `${this.platform}-${e}`
          }
          prepareOutOfPageAd(e, t) {
            return this.videoBanner.requestAd(e)
          }
          requestPageAd(e) {
            return this.imageBanner.requestAd(e)
          }
          updateTargeting(e = {}) {
            Object.entries(e).forEach(([e, t]) => {
              t ? this.targeting[e] = t : this.targeting[e] && delete this.targeting[e]
            })
          }
          getAdUnitByType(e) {
            return this.getAdUnit(e)
          }
        }
        class $ {
          serviceStatus;
          targeting = {};
          constructor({
            targeting: e
          }) {
            this.serviceStatus = Promise.resolve(o.zT.online), this.targeting = {
              ...e
            }
          }
          prepareOutOfPageAd() {
            return new Promise(e => {
              let t = new p.S({
                provider: g.bu.EMPTY_PROVIDER
              });
              setTimeout(() => {
                e(t)
              }, 100), setTimeout(() => {
                t.triggerEmpty()
              }, 200)
            })
          }
          requestPageAd() {
            return Promise.reject()
          }
          updateTargeting(e) {
            e && Object.entries(e).forEach(([e, t]) => {
              t ? this.targeting[e] = t : delete this.targeting[e]
            })
          }
          getAdUnitByType(e) {}
        }
        class E {
          bannersMap = {};
          sdk;
          currentBanner;
          startCurrentAd;
          serviceStatus;
          constructor() {
            let e = window.gd_id || "cac6ddd807da4fb899f231feb95b865c";
            this.serviceStatus = new Promise((t, a) => {
              window.GD_OPTIONS = {
                gameId: e,
                onEvent: e => {
                  switch (e.name) {
                    case "SDK_READY":
                      t(o.zT.online), this.sdk = window.gdsdk;
                      break;
                    case "SDK_REWARDED_WATCH_COMPLETE":
                      this.rewarded();
                      break;
                    case "SDK_GAME_START":
                      this.closeCurrentAd();
                      break;
                    case "AD_ERROR":
                      this.currentBanner && (this.bannersMap[this.currentBanner]?.triggerEmpty(), this.closeCurrentAd());
                      break;
                    case "SDK_GAME_PAUSE":
                      this.startCurrentAd && this.startCurrentAd()
                  }
                }
              };
              let l = document.createElement("script");
              l.src = "https://html5.api.gamedistribution.com/libs/gd/api.js", l.addEventListener("error", () => {
                a(o.zT.offline)
              }), document.body.appendChild(l)
            })
          }
          rewarded() {
            this.bannersMap.rewarded?.triggerRewarded({}), setTimeout(() => {
              this.closeCurrentAd()
            }, 1e3)
          }
          closeCurrentAd() {
            setTimeout(() => {
              this.currentBanner && (this.bannersMap[this.currentBanner]?.triggerClosed(), this.currentBanner = void 0, this.startCurrentAd = void 0)
            }, 100)
          }
          prepareOutOfPageAd(e) {
            return this.serviceStatus.then(t => {
              if (t === o.zT.offline || !this.sdk) throw Error("There is something wrong with SDK");
              let a = new p.S({
                provider: g.bu.GAME_DISTRIBUTION
              });
              return this.sdk.preloadAd(e).then(() => (this.bannersMap[e] = a, setTimeout(() => {
                a.triggerReady(() => {
                  let t = setTimeout(() => {
                    a.triggerEmpty(), this.closeCurrentAd()
                  }, 4e3);
                  this.startCurrentAd = () => {
                    clearTimeout(t), a.triggerRendered(), setTimeout(() => {
                      a.triggerViewable()
                    }, 1e3), this.startCurrentAd = void 0
                  }, this.currentBanner = e, this.sdk?.showAd(e).catch(() => {
                    this.closeCurrentAd()
                  })
                })
              }, 20), a), () => (setTimeout(() => {
                a.triggerEmpty()
              }, 20), a))
            })
          }
          requestPageAd() {
            return Promise.reject()
          }
          updateTargeting() {}
          getAdUnitByType(e) {}
        }
        var A = a(1591),
          T = a.p + "static/media/sample-video.a6694a8e.webm";
        class S {
          serviceStatus;
          platform;
          isWidget;
          gamAccount;
          auid;
          adUnitConfig;
          useOnlyConfig;
          adUrl;
          correlator;
          wrapperControls;
          videoWrapper;
          videoContainer;
          videoPlayer;
          type;
          adsLoader = null;
          adDisplayContainer = null;
          isVideoMuted = !1;
          countdownTimer;
          adStartTime = null;
          logEvent;
          preloadedBanners = new Map;
          currentTargeting = {};
          constructor({
            targeting: e = {},
            platform: t,
            gamAccount: a,
            auid: l,
            isWidget: i,
            adUnitConfig: n,
            footerHeight: r,
            adUrl: s,
            useOnlyConfig: o,
            logEvent: d,
            type: c = g.bu.GOOGLE_INSTREAM
          }) {
            this.platform = t, this.isWidget = i, this.correlator = `${Date.now()}`;
            let u = function(e) {
              try {
                let {
                  wrapper: t,
                  controls: a
                } = function({
                  footerHeight: e = "0px"
                }) {
                  let t = document.createElement("div");
                  t.setAttribute("style", `--footer-height: ${e};`);
                  let a = () => {};
                  return t.classList.add("xth56"), t.insertAdjacentHTML("beforeend", `
    <div class="KdezI">
        <video
            data-id="google-instream-player"
            playsinline
            webkit-playsinline="true"
            class="XCyg4"
        >
            <source src="${T}" />
        </video>
        <div
            data-id="google-instream-banner"
            class="wcVqz"
        />
    </div>
    <div
        data-id="google-instream-ad-overlay"
        class="VLcqU"
    />`), t.querySelector('[data-id="google-instream-ad-overlay"]')?.addEventListener("click", () => {
                    a()
                  }), {
                    wrapper: t,
                    controls: {
                      switchOverlayVisibility: e => {
                        t.querySelector('[data-id="google-instream-ad-overlay"]')?.classList.toggle("IXSnS", e)
                      },
                      setContinueAdHandler: e => {
                        a = e
                      }
                    }
                  }
                }(e);
                return document.body.insertAdjacentElement("beforeend", t), {
                  controls: a,
                  wrapper: t
                }
              } catch (e) {
                throw Error(`Cannot create the google instream wrapper app due to error: ${e}`)
              }
            }({
              footerHeight: r
            });
            this.wrapperControls = u.controls, this.videoWrapper = u.wrapper, this.gamAccount = a, this.currentTargeting = e, this.auid = l, this.type = c, this.logEvent = d, this.adUrl = s || "https://pubads.g.doubleclick.net/gampad/ads", n && (this.adUnitConfig = n), this.useOnlyConfig = !!(n && o), this.videoContainer = this.videoWrapper.querySelector('[data-id="google-instream-banner"]'), this.videoPlayer = this.videoWrapper.querySelector('[data-id="google-instream-player"]'), this.serviceStatus = this.loadResources()
          }
          async loadResources() {
            try {
              return await this.checkAutoplaySupport(), await (0, c.v)({
                src: A.m,
                useExisting: !0,
                crossorigin: "anonymous"
              }), window.googletag = window.googletag || {
                cmd: []
              }, window.googletag.cmd = window.googletag.cmd || [], new Promise(e => {
                window.googletag.cmd.push(async () => {
                  await (0, c.v)({
                    src: "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
                    timeoutMs: 1e4,
                    useExisting: !0
                  }), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), this.adDisplayContainer = new google.ima.AdDisplayContainer(this.videoContainer, this.videoPlayer), this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer), this.adDisplayContainer.initialize(), this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsLoaded.bind(this), !1), this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e => {
                    this.debugLog("AdsLoader error", e, e.getError());
                    let t = e.getUserRequestContext();
                    this.triggerEmpty(t.bannerType)
                  }, !1), e(o.zT.online)
                })
              })
            } catch (e) {
              return console.error("Google Instream error: ", e), Promise.reject(o.zT.offline)
            }
          }
          onAdsLoaded(e) {
            let t = new google.ima.AdsRenderingSettings,
              a = e.getUserRequestContext(),
              l = e.getAdsManager({
                currentTime: 0,
                duration: 0
              }, t);
            this.isVideoMuted && l.setVolume(0);
            let i = new ResizeObserver(() => {
              let {
                height: e,
                width: t
              } = this.getRoundedVideoContainerSize();
              requestAnimationFrame(() => {
                l?.resize(t, e)
              })
            });
            i.observe(this.videoContainer), l.addEventListener(google.ima.AdEvent.Type.AD_BREAK_FETCH_ERROR, e => {
              this.debugLog("AD_BREAK_FETCH_ERROR: no proper handling, no retry", e), l.destroy(), i.disconnect(), this.triggerEmpty(a.bannerType)
            }), l.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e => {
              let t = e.getError();
              this.debugLog("AD_ERROR, no retry", e, t?.getErrorCode(), t?.getVastErrorCode(), t?.getMessage()), l.destroy(), i.disconnect(), this.triggerEmpty(a.bannerType)
            }), l.addEventListener(google.ima.AdEvent.Type.CLICK, () => {
              if (this.preloadedBanners.get(a.bannerType)?.triggerClicked(), !l.getAdSkippableState()) {
                let e = () => {
                  this.wrapperControls.switchOverlayVisibility(!1), l.resume()
                };
                this.wrapperControls.switchOverlayVisibility(!0), this.wrapperControls.setContinueAdHandler(e)
              }
              this.resetTimer()
            }), l.addEventListener(google.ima.AdEvent.Type.RESUMED, () => {
              let e = this.preloadedBanners.get(a.bannerType);
              e && this.startTimer(l, e)
            }), l.addEventListener(google.ima.AdEvent.Type.IMPRESSION, () => {
              this.preloadedBanners.get(a.bannerType)?.triggerRendered()
            }), l.addEventListener(google.ima.AdEvent.Type.LOADED, e => {
              this.debugLog("LOADED", e, a);
              let t = this.preloadedBanners.get(a.bannerType),
                i = e.getAd()?.getDuration();
              i && t && (t.instreamDuration = i), t?.triggerReady(() => {
                l.start()
              }, e => {
                e ? l.resume() : l.pause()
              })
            }), l.addEventListener(google.ima.AdEvent.Type.STARTED, e => {
              this.debugLog("STARTED", e);
              let t = this.preloadedBanners.get(a.bannerType);
              t && (this.adStartTime = Date.now(), this.startTimer(l, t), this.videoWrapper.style.opacity = "1", this.videoWrapper.style.pointerEvents = "auto", this.videoWrapper.style.zIndex = "2147483647", t.triggerViewable())
            });
            let n = e => {
              this.debugLog(e.type, e), this.clearDomElements();
              let t = this.preloadedBanners.get(a.bannerType);
              t && null !== this.adStartTime && (t.watchedDuration = Math.round((Date.now() - this.adStartTime) / 1e3), this.adStartTime = null), "rewarded" === a.bannerType && t?.triggerRewarded({}), l.stop(), l.destroy(), i.disconnect(), t?.triggerClosed()
            };
            l.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, n), l.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, n), l.addEventListener(google.ima.AdEvent.Type.COMPLETE, n);
            let {
              height: r,
              width: s
            } = this.getRoundedVideoContainerSize();
            l.init(s, r)
          }
          resetPlayer() {
            this.videoPlayer.src = "", this.videoPlayer.load(), window.setTimeout(() => {
              this.videoPlayer.removeAttribute("src")
            }, 1e3)
          }
          clearDomElements() {
            this.videoWrapper.style.removeProperty("opacity"), this.videoWrapper.style.removeProperty("pointer-events"), this.videoWrapper.style.removeProperty("z-index"), this.resetPlayer()
          }
          getRoundedVideoContainerSize() {
            let {
              height: e,
              width: t
            } = this.videoContainer.getBoundingClientRect();
            return {
              width: Math.floor(t),
              height: Math.floor(e)
            }
          }
          triggerEmpty(e) {
            this.preloadedBanners.get(e)?.triggerEmpty(), this.preloadedBanners.delete(e)
          }
          async preloadAds(e, t) {
            if (this.preloadedBanners.has(e)) return void this.debugLog("Skip preloadAds, another banner loading", this.type);
            try {
              await this.serviceStatus
            } catch (e) {
              throw Error("Instream ads: Service not initialized", {
                cause: e
              })
            }
            let a = this.getAdUnitByType(e),
              l = new p.S({
                provider: g.bu.GOOGLE_INSTREAM,
                adUnit: a,
                destroy: () => {
                  this.resetTimer(), this.clearDomElements(), l.triggerClosed()
                }
              });
            if (!this.videoContainer) throw Error("Instream ads: No video container found.");
            this.preloadedBanners.set(e, l);
            let i = new google.ima.AdsRequest,
              n = this.prepareCurrentTargeting(),
              r = Array.isArray(this.currentTargeting.hru) ? this.currentTargeting.hru[0] : this.currentTargeting.hru,
              s = {
                iu: a,
                description_url: "https://playgama.com",
                url: "https://playgama.com",
                referer: "https://playgama.com",
                content_page_url: `https://playgama.com/game/${r}`,
                placement_id: r,
                ppid: this.auid,
                sz: "400x300|640x480",
                vpos: "preroll",
                gdfp_req: "1",
                output: "vast",
                unviewed_position_start: "1",
                env: "vp",
                impl: "s",
                correlator: this.correlator,
                vpmute: "muted" === t ? "1" : "0"
              };
            n && (s.cust_params = n);
            let o = this.adUrl,
              d = "?"; - 1 !== o.indexOf(d) && (d = "&"), i.adTagUrl = o += `${d}${Object.entries(s).map(([e,t])=>`${e}=${encodeURIComponent(t)}`).join("&")}`;
            let {
              height: c,
              width: u
            } = this.getRoundedVideoContainerSize();
            i.linearAdSlotWidth = i.nonLinearAdSlotWidth = u, i.linearAdSlotHeight = i.nonLinearAdSlotHeight = c, i.forceNonLinearFullSlot = !0, this.adsLoader?.requestAds(i, {
              bannerType: e
            })
          }
          async prepareOutOfPageAd(e, t = 1e3) {
            if (this.debugLog("prepareOutOfPageAd", e, t), !this.preloadedBanners.has(e)) {
              let t = await this.checkAutoplaySupport();
              if ("no" === t) return Promise.reject(Error("Instream ads: Cannot use autoplay currently"));
              await this.preloadAds(e, t)
            }
            let a = this.preloadedBanners.get(e);
            if (!a) throw Error("Instream ads: Failed to create banner");
            if (a.state === d.qc.empty && window.setTimeout(() => {
                this.triggerEmpty(e)
              }, 16), a.state === d.qc.loading) {
              let l = window.setTimeout(() => {
                this.triggerEmpty(e)
              }, t);
              a.addEventListener("ready", () => {
                window.clearTimeout(l)
              }), a.addEventListener("viewable", () => {
                this.type === g.bu.GOOGLE_INSTREAM_HIGH && this.logEvent({
                  event: "custom_event",
                  eventName: "ad_show_high_value",
                  adPlacement: e,
                  action: "show",
                  adUnit: a.adUnit,
                  instreamDuration: a.instreamDuration
                })
              })
            }
            return a.state === d.qc.ready && window.setTimeout(() => {
              a.triggerReady()
            }, 16), a.addEventListener("closed", () => {
              this.preloadedBanners.delete(e)
            }), a
          }
          requestPageAd(e) {
            return this.debugLog("requestPageAd", e), Promise.reject(new o.nj)
          }
          updateTargeting(e = {}) {
            Object.entries(e).forEach(([e, t]) => {
              t ? this.currentTargeting[e] = t : this.currentTargeting[e] && delete this.currentTargeting[e]
            })
          }
          getAdUnitByType(e) {
            let t = this.isWidget ? "widget_" : "",
              a = "ios" === this.platform || "android" === this.platform ? "mobile" : "desktop",
              l = `_${a}`,
              i = this.adUnitConfig?.[a]?.[e];
            if (i) return `${this.gamAccount}/${i}`;
            if (this.useOnlyConfig) throw Error("No such ad unit in this provider");
            return `${this.gamAccount}/${t}${({rewarded:"instream_rewarded",rewarded_2:"instream_rewarded_2",interstitial:"instream",interstitial_preroll:"instream_preroll",interstitial_preroll_2:"instream_preroll_2"})[e]}${l}`
          }
          startTimer(e, t) {
            this.resetTimer();
            let a = () => {
              let a = e.getRemainingTime();
              t.triggerTimer(Math.round(a)), a < 1 && this.resetTimer()
            };
            a(), this.countdownTimer = window.setInterval(a, 150)
          }
          resetTimer() {
            this.countdownTimer && (window.clearInterval(this.countdownTimer), this.countdownTimer = void 0)
          }
          prepareCurrentTargeting() {
            return Object.entries(this.currentTargeting).map(([e, t]) => Array.isArray(t) ? `${e}=${t.join(",")}` : `${e}=${t}`).join("&") || ""
          }
          async checkAutoplaySupport() {
            this.videoPlayer.load(), this.videoPlayer.volume = 1, this.videoPlayer.muted = !1, this.videoPlayer.removeAttribute("muted");
            try {
              return await this.videoPlayer.play(), this.videoPlayer.pause(), this.isVideoMuted = !1, "full"
            } catch {
              return this.checkMutedAutoplaySupport()
            }
          }
          async checkMutedAutoplaySupport() {
            this.videoPlayer.volume = 0, this.videoPlayer.muted = !0;
            try {
              return await this.videoPlayer.play(), this.videoPlayer.pause(), this.videoPlayer.setAttribute("muted", "1"), this.isVideoMuted = !0, "muted"
            } catch {
              return "no"
            }
          }
          debugLog(...e) {
            console.log(`[GoogleInstream ${this.type}]`, ...e)
          }
        }
        var O = a(4423);

        function M() {}
        let P = ["interstitial", "interstitial_preroll", "rewarded"],
          L = {
            group_control: "5883774659",
            group_1: "1903332893"
          };
        class x {
          loadScriptPromise;
          serviceStatus = (async () => {
            try {
              return await this.loadScriptPromise, o.zT.online
            } catch {
              return o.zT.offline
            }
          })();
          abortController = new AbortController;
          isFirstAdBreakPreloaded = !1;
          constructor(e) {
            this.loadScriptPromise = function({
              exp: e
            }) {
              return (0, c.v)({
                src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
                timeoutMs: 3e3,
                onBeforeFirstLoad: t => {
                  t.crossOrigin = "anonymous", t.setAttribute("data-ad-client", "ca-pub-2864899775153797"), t.setAttribute("data-ad-frequency-hint", "30s"), e && e in L && t.setAttribute("data-ad-channel", L[e]), t.async = !0
                }
              }).then(() => {
                let {
                  adsbygoogle: e
                } = document.defaultView;
                if (!e) throw Error("adsbygoogle is not defined");
                return {
                  adBreak: t => {
                    e.push(t)
                  },
                  adConfig: t => {
                    e.push(t)
                  }
                }
              })
            }({
              exp: e.targeting?.exp
            })
          }
          getAdUnitByType() {}
          prepareOutOfPageAd(e, t) {
            if (!P.includes(e)) throw Error(`Unsupported out of page ad type for Google AdSense: ${e}`);
            let a = new p.S({
              provider: g.bu.GOOGLE_AD_SENSE
            });
            a.addEventListener("closed", () => {
              a.destroy(), this.abortController.abort()
            });
            let l = window.history.back;
            window.history.back = M;
            let i = !1;
            return this.showBanner({
              type: e,
              timeout: t,
              banner: a,
              onBeforeAd: () => {
                i = !0
              }
            }).then(e => {
              if ("viewed" === e || "reward_dismissed" === e) return void a.triggerClosed();
              if ("reward_completed" === e) {
                a.triggerRewarded(1), (0, O.HT)(0).then(() => {
                  a.triggerClosed()
                });
                return
              }
              if ("not_started" === e) return void a.triggerEmpty();
              a.triggerClosed()
            }).catch(() => {
              if (i) return void a.triggerClosed();
              a.triggerEmpty()
            }).finally(() => {
              window.history.back = l
            }), Promise.resolve(a)
          }
          updateTargeting() {}
          requestPageAd() {
            return Promise.reject(new o.nj)
          }
          async showBanner({
            timeout: e,
            type: t,
            banner: a,
            onBeforeAd: l
          }) {
            let i = e ?? 3e3,
              n = await this.loadScriptPromise,
              {
                adBreak: r
              } = n;
            return this.isFirstAdBreakPreloaded || (this.isFirstAdBreakPreloaded = !0, await ((e, {
              abortController: t,
              timeoutMs: a
            }) => {
              let {
                adConfig: l
              } = e, i = new AbortController;
              return t.signal.addEventListener("abort", () => {
                i.abort()
              }), Promise.race([new Promise(e => {
                l({
                  sound: "on"
                }), l({
                  preloadAdBreaks: "on",
                  onReady: () => {
                    e(), i.abort()
                  }
                }), t.signal.addEventListener("abort", () => {
                  e()
                })
              }), (0, O.HT)(a, {
                abortSignal: i.signal
              })])
            })(n, {
              abortController: this.abortController,
              timeoutMs: i
            })), new Promise((e, n) => {
              let s = window.setTimeout(() => {
                  n(Error("Ad break timed out")), a.triggerEmpty()
                }, i),
                o = {
                  beforeAd: () => {
                    l(), (0, O.HT)(0).then(() => {
                      a.triggerViewable()
                    })
                  },
                  adBreakDone: a => {
                    window.clearTimeout(s), e((e => {
                      let {
                        breakStatus: a
                      } = e;
                      return "viewed" === a ? "rewarded" === t ? "reward_completed" : "viewed" : "other" === a || "frequencyCapped" === a ? "not_started" : "dismissed" === a ? "reward_dismissed" : "unknown"
                    })(a))
                  }
                },
                d = {
                  interstitial_preroll: {
                    type: "start",
                    name: "start-ad-break-for-game-preroll",
                    ...o
                  },
                  interstitial: {
                    type: "next",
                    name: "start-ad-break-for-game-interstitial",
                    ...o
                  },
                  rewarded: {
                    type: "reward",
                    name: "start-ad-break-for-game-rewarded",
                    ...o,
                    beforeReward: e => {
                      e()
                    },
                    adDismissed: M,
                    adViewed: M
                  }
                };
              a.triggerReady(() => {
                r(d[t])
              })
            })
          }
        }
        let D = "22308795431";
        class R {
          options;
          logEvent;
          startRumEvent;
          waitingProviders = null;
          providers = [];
          enabled = !0;
          headerBidding = null;
          currentOutOfPageAdWaterfallIndex = 0;
          serviceReadyPromise;
          banners = new Set;
          constructor(e) {
            this.options = e, this.logEvent = e.logEvent, this.startRumEvent = e.startRumEvent, this.serviceReadyPromise = (e.initialDelay || Promise.resolve()).then(() => this.initProviders())
          }
          async initProviders() {
            let e = this.startRumEvent({
              operationName: "AdService_initProviders",
              details: this.options.providerKeys.join(",")
            });
            if (this.waitingProviders = this.options.providerKeys.map(e => this.getProvider(e, this.options)), 0 === this.waitingProviders.length) throw e({
              result: "Error: No providers defined"
            }), Error("No providers defined");
            let t = [];
            this.options.headerBiddingConfig && (this.headerBidding = new u(this.options.headerBiddingConfig), t.push(this.headerBidding.init()));
            let a = [];
            return t.push(...this.waitingProviders.map((e, t) => Promise.race([e.serviceStatus.then(l => {
              l === o.zT.online && (this.providers[t] = e, a.push(this.options.providerKeys[t]))
            }), (0, O.HT)(5e3)]))), await Promise.all(t).then(() => {
              a.length === this.options.providerKeys.length ? e({
                result: "Success: All providers were defined"
              }) : e({
                result: `Success: ${a.join(",")} providers among ${this.options.providerKeys.join(",")} were defined'`
              })
            }), 0 === this.providers.length && (e({
              result: "Error: No providers loaded"
            }), this.providers = [new $(this.options)]), o.zT.online
          }
          getProvider(e, t) {
            let a = {
              [g.bu.GAME_DISTRIBUTION]: () => new E,
              [g.bu.DEBUG_PROVIDER]: () => new v,
              [g.bu.EMPTY_PROVIDER]: () => new $({
                ...t
              }),
              [g.bu.GOOGLE_INSTREAM_HIGH]: () => new S({
                ...t,
                targeting: {
                  ...t.targeting || {},
                  segment: "premium"
                },
                adUnitConfig: {
                  desktop: {
                    interstitial_preroll: "instream_preroll_high_floor_desktop",
                    interstitial: "instream_high_floor_desktop",
                    rewarded: "instream_rewarded_high_floor_desktop"
                  },
                  mobile: {
                    interstitial_preroll: "instream_preroll_high_floor_mobile",
                    interstitial: "instream_high_floor_mobile",
                    rewarded: "instream_rewarded_high_floor_mobile"
                  }
                },
                gamAccount: this.options.gamAccount,
                useOnlyConfig: !0,
                type: g.bu.GOOGLE_INSTREAM_HIGH
              }),
              [g.bu.GOOGLE_INSTREAM]: () => new S({
                ...t,
                adUnitConfig: t.adUnitProviderConfig?.[g.bu.GOOGLE_INSTREAM],
                gamAccount: this.options.gamAccount
              }),
              [g.bu.GOOGLE_INSTREAM_CHEAP]: () => new S({
                ...t,
                adUnitConfig: t.adUnitProviderConfig?.[g.bu.GOOGLE_INSTREAM_CHEAP],
                gamAccount: this.options.gamAccount,
                type: g.bu.GOOGLE_INSTREAM_CHEAP,
                logEvent: this.logEvent
              }),
              [g.bu.MEMBRANA]: () => new A.B({
                ...t,
                adUnitConfig: {
                  desktop: {
                    rewarded: "PGM_REWARD",
                    interstitial: "PGM_INTERSTITIAL"
                  },
                  mobile: {
                    rewarded: "PGM_REWARD",
                    interstitial: "PGM_INTERSTITIAL"
                  }
                },
                gamAccount: D,
                useOnlyConfig: !0
              }),
              [g.bu.MEMBRANA_VAST]: () => new S({
                ...t,
                adUnitConfig: {
                  desktop: {
                    interstitial_preroll: "PGM_PREROLL"
                  },
                  mobile: {
                    interstitial_preroll: "PGM_PREROLL"
                  }
                },
                gamAccount: D,
                adUrl: "https://server.smartytech.io/vast?id=204",
                useOnlyConfig: !0
              }),
              [g.bu.GOOGLE_AD_SENSE]: () => new x(t),
              [g.bu.GOOGLE_AD]: () => new A.B({
                ...t,
                adUnitConfig: t.adUnitProviderConfig?.[g.bu.GOOGLE_AD],
                gamAccount: this.options.gamAccount
              }),
              [g.bu.DIRECT]: () => new C({
                ...t,
                logEvent: this.logEvent
              })
            };
            return (a[e] || a[g.bu.GOOGLE_AD])()
          }
          requestAd(e, t, {
            type: a,
            sizes: l
          }, i = 0) {
            return (0, o.Dd)(a) && (this.currentOutOfPageAdWaterfallIndex = i), new Promise(async n => {
              let r = this.options.providerKeys[i],
                s = this.startRumEvent({
                  operationName: "AdService_requestAd",
                  details: `${a}_${r}`
                }),
                o = e => {
                  this.currentOutOfPageAdWaterfallIndex = 0, n(e)
                };
              try {
                let n, r = this.providers[i];
                if (!r) throw s({
                  result: "Error: Provider is not initialized"
                }), Error("Provider is not initialized");
                this.logEvent({
                  event: "custom_event",
                  eventName: "ad_request",
                  adPlacement: a,
                  action: "start",
                  adUnit: r.getAdUnitByType(a),
                  waterfallIndex: i + 1
                }), r.hasPrebidIntegration && this.headerBidding && (n = await this.headerBidding.runAuction(r.getAdUnitByType(a) || a, {
                  type: a,
                  sizes: l
                }));
                let c = await e(r, n);
                if (this.banners.add(c), c.addEventListener("empty", () => {
                    s({
                      result: `Error: ${a} is empty`
                    }), i + 1 === this.providers.length ? o(c) : this.requestAd(e, t, {
                      type: a,
                      sizes: l
                    }, i + 1).then(o)
                  }), c.state === d.qc.ready) o(c);
                else if (c.state === d.qc.closed || c.state === d.qc.empty) throw Error(`Ad is in state=[${c.state}]`);
                else c.addEventListener("ready", () => {
                  s({
                    result: `Success: ${a} is ready`
                  }), o(c)
                });
                c.addEventListener("closed", () => {
                  o(c), this.banners.delete(c)
                }), c.addEventListener("rendered", () => {
                  s({
                    result: `Success: ${a} is rendered`
                  }), o(c)
                }), c.addEventListener("viewable", () => {
                  this.logEvent({
                    event: "custom_event",
                    eventName: "ad_show",
                    adPlacement: a,
                    action: "show",
                    adUnit: c.adUnit,
                    instreamDuration: c.instreamDuration
                  })
                })
              } catch (n) {
                if (i + 1 === this.providers.length) {
                  let e = t();
                  o(e), e.triggerEmpty();
                  let l = n instanceof Error ? n.message : `Cannot show the ad ${a}`;
                  s({
                    result: l
                  }), this.logEvent({
                    event: "custom_event",
                    eventName: "ad_request_failed",
                    adPlacement: a,
                    action: "error",
                    errorMessage: l
                  })
                } else this.requestAd(e, t, {
                  type: a,
                  sizes: l
                }, i + 1).then(o)
              }
            })
          }
          async requestOutOfPageAd(e, t) {
            let a = t ?? this.options.adRequestTimeoutMs;
            if (!this.enabled && !["rewarded", "rewarded_2"].includes(e)) {
              let t = new p.S({
                provider: g.bu.EMPTY_PROVIDER
              });
              return t.triggerEmpty(), this.logEvent({
                event: "custom_event",
                eventName: "ad_skipped",
                adPlacement: e
              }), t
            }
            return await this.serviceReadyPromise, this.requestAd((t, l) => t.prepareOutOfPageAd(e, a, l), () => new p.S({
              provider: g.bu.EMPTY_PROVIDER
            }), {
              type: e
            })
          }
          async requestPageAd(e) {
            if (!this.enabled) {
              let t = new d.jL({
                provider: g.bu.EMPTY_PROVIDER
              });
              return t.triggerEmpty(), this.logEvent({
                event: "custom_event",
                eventName: "ad_skipped",
                adPlacement: e.type
              }), t
            }
            return await this.serviceReadyPromise, this.requestAd((t, a) => t.requestPageAd(e, a), () => new d.jL({
              provider: g.bu.EMPTY_PROVIDER
            }), {
              type: e.type,
              sizes: e.sizes
            })
          }
          setOutOfPageAdPlaybackState(e) {
            for (let t of this.banners) t.type === d.$.outOfPageBanner && t.setPlaybackState(e)
          }
          toggleState(e) {
            if (this.enabled !== e && (this.enabled = e), !e) {
              for (let e of this.banners) e.destroy();
              this.banners.clear()
            }
          }
          updateTargeting(e) {
            this.serviceReadyPromise.then(() => {
              this.waitingProviders?.forEach(t => {
                try {
                  t.updateTargeting(e)
                } catch {}
              })
            })
          }
          getAdMaxTimeout() {
            return this.options.adRequestTimeoutMs * this.options.providerKeys.length
          }
        }
        let I = {
          timeout: 3e3,
          bidders: [{
            bidder: "ix",
            params: {
              siteId: "1208437"
            }
          }, {
            bidder: "bidscube",
            params: {
              placementId: "19512"
            }
          }, {
            bidder: "tappx",
            params: {
              tappxkey: "pub-93521-desktop-7229",
              endpoint: "zz43701pg",
              host: "zz43701pg.pub.tappx.com/rtb/"
            }
          }]
        };
        var z = a(4886),
          U = a(8518),
          B = a(2385),
          j = a(4351);
        let H = [g.bu.GOOGLE_INSTREAM, g.bu.GOOGLE_AD, g.bu.GOOGLE_AD_SENSE],
          Z = [g.bu.GOOGLE_INSTREAM, g.bu.GOOGLE_AD],
          q = (0, l.Q_)("ads", () => {
            let {
              VUE_APP_AD_REQUEST_TIMEOUT_MS: e,
              VUE_APP_AD_MANAGER_ACCOUNT: t
            } = (0, r.Z)(), {
              logEvent: a,
              startRumEvent: o
            } = (0, U.o)(), {
              clid: d,
              widgetId: u,
              userAcquisitionParams: p,
              isGameDistribution: v,
              query: m,
              platform: h,
              isIframe: f,
              isExportOnWidget: _,
              isExportOnPortal: y,
              experiments: w
            } = (0, l.Jk)((0, j.q)()), b = (0, i.XI)(null), k = (0, i.Fl)(() => ({
              adRequestTimeoutMs: e,
              gamAccount: t,
              logEvent: a,
              startRumEvent: o
            })), C = (0, s.s2)(), $ = (0, n.yj)(), E = (0, i.Fl)(() => !!m.value?.use_no_ads && z.go.includes($.name)), A = (0, i.Fl)(() => (0, B.o)(d.value)), T = (0, i.Fl)(() => {
              if (v.value) return {
                providers: [g.bu.GAME_DISTRIBUTION]
              };
              if (E.value) return {
                providers: [g.bu.EMPTY_PROVIDER]
              };
              let e = [];
              return ("p_2e32b702-bbd0-48d6-99b0-459780166adf" === d.value && Math.round(Math.random()) && (console.info("Adding Membrana ads"), e.push(g.bu.MEMBRANA_VAST, g.bu.MEMBRANA)), z.aB.includes($.name)) ? A.value.inGameProviderKeys ? {
                providers: A.value.inGameProviderKeys
              } : y.value ? {
                providers: [...e, ...H]
              } : {
                providers: [...e, ...Z]
              } : {
                providers: [...e, g.bu.GOOGLE_AD]
              }
            }), S = (0, i.Fl)(() => ({
              playgama_clid: d.value,
              widget_id: u.value || "",
              ...p.value
            }));
            return {
              adService: b,
              setAdServiceConfig: function(e) {
                let t, a = e.targeting || {},
                  l = {
                    ...S.value,
                    ...a
                  },
                  i = !f.value || y.value,
                  n = i && w.value?.["desktop-fullscreen"]?.sample;
                n && (l.exp = n), window.additionalServerData?.isGooglebot ? t = new Promise(() => {}) : ((0, c.v)({
                  src: "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
                  useExisting: !0,
                  crossorigin: "anonymous"
                }), t = "string" == typeof l.page && z.OW.includes(l.page) ? (0, O.S8)() : (0, O.HT)(2e3).then(() => (0, O.S8)())), b.value = new R({
                  ...k.value,
                  initialDelay: t,
                  targeting: l,
                  providerKeys: T.value.providers,
                  platform: h.value,
                  auid: e.auid,
                  isWidget: _.value,
                  footerHeight: y.value && "desktop" === h.value ? "0px" : "56px",
                  locale: C.currentLocale.value,
                  adUnitProviderConfig: A.value.inGameAdUnitProviderConfig,
                  headerBiddingConfig: i && m.value?.with_prebid ? I : void 0
                })
              },
              updateTargeting: function(e) {
                b.value && b.value.updateTargeting(e)
              }
            }
          })
      },
      4351: function(e, t, a) {
        a.d(t, {
          q: function() {
            return p
          }
        }), a(9560), a(9734);
        var l = a(144),
          i = a(5595),
          n = a(9938),
          r = a(1704),
          s = a(6897),
          o = a(6896),
          d = a(4423),
          c = a(8284);
        let u = "desktop",
          p = (0, l.Q_)("app", () => {
            let e = (0, i.iH)(200),
              t = (0, i.iH)(""),
              a = (0, i.iH)(u),
              l = (0, i.iH)(),
              p = (0, i.iH)(),
              g = (0, i.iH)(),
              v = (0, i.iH)(),
              m = (0, i.iH)(),
              h = (0, i.iH)({}),
              f = (0, i.iH)(),
              _ = (0, i.XI)(),
              y = (0, i.Fl)(() => _.value ? Object.entries(_.value).map(([e, t]) => `${e}:${t.sample}`).join(", ") : ""),
              w = (0, i.Fl)(() => f.value?.[s.aE]),
              b = (0, i.Fl)(() => f.value?.debug === "true"),
              k = (0, i.iH)({}),
              C = (0, n.yj)(),
              {
                landingClid: $,
                landingWidgetId: E
              } = (0, o.Gn)(C),
              A = (0, i.Fl)(() => f.value?.[s.Im] || E),
              T = (0, i.Fl)(() => {
                let e = g.value && (0, c.Z)(p.value || "")?.hostname || l.value,
                  t = r.sL.unknown;
                return "playgama.com" === e && (t = r.sL.direct), e?.endsWith(".playgama.com") && (t = r.sL.directTest), f.value?.[s.Ty] || $ || t
              }),
              S = (0, i.Fl)(() => {
                switch (f.value?.[s.Ej]) {
                  case "portal":
                    return "portal";
                  case "widget":
                    return "widget"
                }
                return "unknown"
              }),
              O = (0, i.Fl)(() => "portal" === S.value),
              M = (0, i.Fl)(() => "widget" === S.value),
              P = (0, i.Fl)(() => Object.entries(f.value || {})),
              L = (0, i.iH)(!1),
              x = (0, n.tv)();
            (0, i.YP)(() => [e.value, t.value], () => {
              "" !== t.value && e.value > 300 && e.value < 400 && (x.replace(t.value), e.value = 200, t.value = "")
            });
            let D = (0, i.iH)(!1);
            return {
              setPageStatus: function(t) {
                e.value = t
              },
              setTargetURL: function(e) {
                t.value = e
              },
              setUrlDetails: function(e) {
                l.value = e.host, f.value = e.query, p.value = e.referer, g.value = e.isIframe
              },
              setHeaders: function(e) {
                k.value = e
              },
              initPageLoadProgressTracking: function() {
                x.beforeEach(async () => {
                  D.value = !0, await (0, d.S8)()
                }), x.afterEach(() => {
                  D.value = !1
                })
              },
              headers: k,
              pageStatus: e,
              targetURL: t,
              userAcquisitionParams: h,
              clid: T,
              host: l,
              referer: p,
              isIframe: g,
              queryParams: P,
              query: f,
              widgetId: A,
              platform: a,
              exportMode: S,
              isAuthBannerOpen: L,
              isGameDistribution: w,
              isDebugMode: b,
              isExportOnWidget: M,
              isExportOnPortal: O,
              auid: m,
              userAgent: v,
              setAuid: function(e) {
                m.value = e
              },
              setPlatform: function(e) {
                a.value = e
              },
              setUserAgent: function(e) {
                v.value = e
              },
              setUserParams: function(e) {
                h.value = e.userAcquisitionParams
              },
              setExperiments: function(e) {
                _.value = e
              },
              $reset: function() {
                e.value = 200, t.value = "", a.value = u
              },
              experiments: _,
              experimentsString: y,
              pageLoadProgress: D
            }
          })
      },
      9622: function(e, t, a) {
        a.d(t, {
          f: function() {
            return n
          }
        });
        var l = a(144),
          i = a(5595);
        let n = (0, l.Q_)("debug", () => {
          let e = (0, i.iH)(!1),
            t = (0, i.iH)(null);
          return {
            isOpen: e,
            debugData: t,
            setDebugData: function(a) {
              t.value = a, e.value = !0
            },
            closeDebugDialog: function() {
              e.value = !1, t.value = null
            }
          }
        })
      },
      6494: function(e, t, a) {
        a.d(t, {
          G: function() {
            return u
          }
        }), a(9560), a(9734);
        var l = a(144),
          i = a(5595),
          n = a(2157),
          r = a(7626),
          s = a(4351),
          o = a(4423),
          d = a(1097),
          c = a(3095);
        let u = (0, l.Q_)("gamePage", () => {
          let e = (0, i.iH)(void 0),
            t = (0, i.iH)(null),
            {
              getGameByParam: a,
              getGameRecommendations: l
            } = (0, d.Ek)(),
            u = (0, i.iH)(void 0),
            p = (0, i.iH)(void 0),
            g = (0, i.iH)(),
            v = (0, i.Fl)(() => {
              if (p.value) return {
                recommended: p.value.recommended.map(o.VP),
                top_playgama: p.value.top_playgama.map(o.VP),
                related: p.value.related.map(o.VP),
                random: p.value.random.map(o.VP),
                series: p.value.series.map(o.VP)
              }
            }),
            m = (0, i.iH)(null),
            h = (0, s.q)(),
            {
              getCategoryRoute: f
            } = (0, n.w)(),
            {
              currentLocale: _
            } = (0, r.s2)();
          async function y(l) {
            let i = await a({
              param: l,
              locale: _.value
            });
            return (0, c.Es)(i) ? (e.value = void 0, t.value = i, i) : (m.value = _.value, i.game.gameUrlRedirectTarget && h.setHeaders({
              "X-BFF-Redirect-Mechanism": i.game.gameUrlRedirectTarget.mechanism,
              "X-BFF-Redirect-Reason": i.game.gameUrlRedirectTarget.reason
            }), e.value = i.game, t.value = null, u.value = {
              pathCategories: i.pathCategories.map(e => ({
                ...e,
                href: f({
                  hru: e.hru,
                  type: e.categoryType
                })
              })),
              categoriesInfo: i.categoriesInfo.map(e => ({
                ...e,
                href: f({
                  hru: e.hru,
                  type: e.categoryType
                })
              }))
            }, {
              game: e.value,
              ...u.value
            })
          }
          return {
            game: e,
            gameRedirect: t,
            gameCatInfo: u,
            recommendationsRaw: p,
            linkedCategories: g,
            recommendations: v,
            loadedLocale: m,
            setGame: y,
            setGameWithRecommendations: function(e) {
              return Promise.all([y(e), l({
                hru: e,
                types: ["recommended", "top_playgama", "related", "random", "series", "linked_categories"],
                platform: h.platform,
                locale: _.value
              }).then(e => {
                p.value = {
                  recommended: e.recommended?.map(o.bO) || [],
                  top_playgama: e.top_playgama?.map(o.bO) || [],
                  related: e.related?.map(o.bO) || [],
                  random: e.random?.map(o.bO) || [],
                  series: e.series?.map(o.bO) || []
                }, g.value = e.linked_categories?.map(e => ({
                  hru: e.localizations[0].hru,
                  categoryType: e.category_type,
                  title: e.localizations[0].title
                }))
              }).catch(() => {
                p.value = {
                  recommended: [],
                  top_playgama: [],
                  related: [],
                  random: [],
                  series: []
                }
              })])
            },
            resetGameData: function() {
              e.value = void 0, t.value = null, u.value = void 0, p.value = void 0, g.value = void 0
            },
            isDataValid: function(t) {
              return e.value?.hru === t && _.value === m.value
            }
          }
        })
      },
      3488: function(e, t, a) {
        a.d(t, {
          E: function() {
            return d
          }
        });
        var l = a(144),
          i = a(5595),
          n = a(8932),
          r = a(8518),
          s = a(1920),
          o = a(7788);
        let d = (0, l.Q_)("googleAuth", () => {
          let {
            VUE_APP_GAUTH_REDIRECT: e,
            VUE_APP_GAUTH_CLID: t
          } = (0, o.Z)(), a = (0, r.o)(), l = (0, s.L)(), d = (0, i.iH)(null), c = (0, i.iH)(!1), u = (0, i.iH)(!1), p = async ({
            credential: t
          }) => {
            await fetch(e || "", {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify({
                credential: t
              })
            }), await l.fetchUserInfo(), a.logEvent({
              event: "custom_event",
              eventName: "login",
              action: l.isAuthorized ? "success" : "fail"
            }), u.value && l.isAuthorized && (u.value = !1), d.value && (d.value(), d.value = null)
          };
          return {
            initGlobalSignIn: function() {
              window.google && !c.value && (window.google.accounts.id.initialize({
                client_id: t || "",
                auto_select: !1,
                cancel_on_tap_outside: !1,
                use_fedcm_for_prompt: !0,
                callback: p
              }), c.value = !0)
            },
            setPrompt: function() {
              !window.google || (0, n.W_)() || l.isAuthorized || window.google.accounts.id.prompt(e => {
                "function" == typeof e.isDisplayed ? u.value = e.isDisplayed() : u.value = "display" === e.getMomentType()
              })
            },
            cancelPrompt: function() {
              google.accounts.id.cancel()
            },
            onFinishSignIn: function(e) {
              return new Promise(t => {
                d.value = () => {
                  e?.(), t()
                }
              })
            },
            initialized: c,
            promptDisplayed: u
          }
        })
      },
      1318: function(e, t, a) {
        a.d(t, {
          E: function() {
            return r
          }
        });
        var l = a(144),
          i = a(5595);
        let n = {
            order: null,
            resolve: null,
            reject: null
          },
          r = (0, l.Q_)("layout", () => {
            let e = (0, i.iH)(!1),
              t = (0, i.iH)(!1),
              a = (0, i.iH)(!1),
              l = (0, i.iH)(!1),
              r = (0, i.iH)(!1),
              s = (0, i.iH)(n),
              o = (0, i.Fl)(() => !!s.value.order),
              d = (0, i.iH)(null),
              c = (0, i.Fl)(() => null !== d.value);
            return {
              setFullscreen: function(t) {
                e.value = t
              },
              fullScreen: e,
              setCategoriesModalOpened: function(e) {
                t.value = e
              },
              categoriesModalOpened: t,
              setInviteModalOpened: function(e) {
                a.value = e
              },
              inviteModalOpenedReason: a,
              setSignInModalOpened: function(e) {
                l.value = e
              },
              signInModalOpened: l,
              setIsReportBugModalOpen: function(e) {
                r.value = e
              },
              isReportBugModalOpen: r,
              isPaymentModalOpen: o,
              questionSurveyInfo: d,
              isSurveyModalOpened: c,
              setSurveyModalSurveyInfo: function(e) {
                d.value = e
              },
              paymentModalOrder: s,
              setPaymentModalOrder: function(e) {
                if (!e) {
                  s.value.order = null, s.value.reject = null, s.value.resolve = null;
                  return
                }
                return new Promise((t, a) => {
                  s.value.order = e, s.value.resolve = t, s.value.reject = a
                })
              }
            }
          })
      },
      8518: function(e, t, a) {
        a.d(t, {
          s: function() {
            return n
          },
          o: function() {
            return l.o
          }
        });
        var l = a(7819),
          i = a(5595);

        function n() {
          let e = (0, l.o)(),
            t = t => {
              let a = t.target.closest("[data-interface-target]");
              if (!a) return;
              let l = a.closest("[data-interface-section]"),
                i = {
                  interface_target: a.dataset.interfaceTarget,
                  interface_path: l?.dataset.interfaceSection,
                  eventName: "interface_click"
                };
              e.logInterfaceEvents(i)
            },
            a = () => {
              e.logInterfaceEvents({
                eventName: "interface_rotate"
              })
            };
          (0, i.bv)(() => {
            document.body.addEventListener("click", t, !0), screen.orientation.addEventListener("change", a)
          }), (0, i.SK)(() => {
            document.body.removeEventListener("click", t), screen.orientation.removeEventListener("change", a)
          })
        }
      },
      7819: function(e, t, a) {
        a.d(t, {
          o: function() {
            return f
          }
        }), a(2394);
        var l = a(144),
          i = a(5595),
          n = a(9938),
          r = a(7788),
          s = a(1704),
          o = a(7626),
          d = a(4351),
          c = a(6494),
          u = a(1920),
          p = a(4423);
        let g = null;

        function v() {
          return g || (g = (0, p.HT)(5e3)), g
        }
        async function m(e, t) {
          await v();
          try {
            await fetch(e, {
              method: "post",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify(t),
              credentials: "include",
              priority: "low"
            })
          } catch {}
        }
        async function h(e) {
          await v(), await (0, p.S8)(), window.dataLayer.push(e)
        }
        let f = (0, l.Q_)("logger", () => {
          let {
            ANALYTICS_API_HOST: e
          } = (0, r.Z)(), t = (0, n.yj)(), a = (0, u.L)(), l = (0, d.q)(), p = (0, c.G)(), g = (0, i.Fl)(() => t.name || void 0), {
            currentLocale: v
          } = (0, o.s2)();

          function f() {
            let e = window.additionalServerData?.locale?.countryNameEn || "unknown";
            return {
              clid: l.clid,
              widgetId: l.widgetId,
              pageName: g.value,
              gameHru: p.game?.hru,
              gameProvider: p.game?.source,
              gameCategories: p.game?.categories,
              experiments: l.experimentsString,
              country: e,
              locale: v.value,
              referer: l.referer,
              userAgent: l.userAgent,
              platform: l.platform || "unknown"
            }
          }
          async function _() {
            let e = await a.getUser(),
              t = f();
            return {
              userId: e?._id,
              ...t
            }
          }
          return {
            logEvent: async function t(t) {
              let a, {
                clid: l,
                userId: i,
                widgetId: n,
                pageName: r,
                gameHru: o,
                gameProvider: d,
                gameCategories: c,
                experiments: u,
                country: p,
                locale: g,
                referer: v,
                userAgent: f,
                platform: y
              } = await _();
              if (a = t.eventName, s.Kg.includes(a) || h({
                  event: t.event,
                  eventName: t.eventName,
                  action: t.action || "",
                  clid: l,
                  experiments: u,
                  widget_id: n || "",
                  game_provider: d || "",
                  game_categories: c || [],
                  ad_placement: t.adPlacement || "",
                  ad_unit: t.adUnit || "",
                  instream_duration: t.instreamDuration ?? null,
                  watched_duration: t.watchedDuration ?? null,
                  waterfall_index: t.waterfallIndex ?? null,
                  error_message: t.errorMessage || "",
                  amount_in_game_currency: t.amountInGameCurrency ?? null
                }), "direct_ad_event" === t.event) {
                let a = {
                  eventName: t.eventName,
                  clid: l,
                  widgetId: n,
                  userId: i,
                  pageName: r,
                  gameHru: o,
                  adUnit: t.adUnit || "",
                  instreamDuration: t.instreamDuration,
                  watchedDuration: t.watchedDuration
                };
                await m(`${e}/api/v1/events/direct-ads`, a);
                return
              }
              let w = {
                eventName: t.eventName,
                pageName: r,
                gameHru: o,
                userId: i,
                clid: l,
                widgetId: n,
                referer: v,
                locale: g,
                country: p,
                userAgent: f,
                platform: y
              };
              await m(`${e}/api/v1/events`, w)
            },
            logInterfaceEvents: function(e) {
              let {
                clid: a,
                widgetId: l
              } = f();
              h({
                event: "interface_event",
                route_name: t.name,
                clid: a,
                widget_id: l || "",
                interface_path: e.interface_path || "unknown",
                interface_target: e.interface_target || "unknown",
                eventName: e.eventName
              })
            },
            logSurveyEvent: async function t(t) {
              let {
                userId: a,
                locale: l,
                country: i
              } = await _();
              await m(`${e}/api/v1/events/survey`, {
                ...t,
                userId: a,
                country: i,
                locale: l
              })
            },
            logSearchEvent: function(e) {
              let {
                clid: t,
                widgetId: a
              } = f(), l = {
                event: "view_search_results",
                eventName: "view_search_results",
                clid: t,
                widget_id: a || "",
                search_term: e.search_term,
                search_result_count: e.search_result_count
              };
              window.dataLayer.push(l)
            },
            startRumEvent: function(t) {
              let a = Date.now(),
                l = !1;
              return async i => {
                if (l) return;
                let n = Date.now(),
                  {
                    country: r,
                    experiments: s
                  } = f();
                await m(`${e}/api/v1/events/rum`, {
                  ...t,
                  ...i,
                  durationMs: n - a,
                  finishTimestamp: n,
                  country: r,
                  experiments: s
                }), l = !0
              }
            }
          }
        })
      },
      7783: function(e, t, a) {
        a.d(t, {
          K: function() {
            return o
          }
        }), a(9560), a(9734), a(793), a(102), a(5123), a(9929), a(6301);
        var l = a(144),
          i = a(5595),
          n = a(1704),
          r = a(7362);
        let s = 3 * n.rP,
          o = (0, l.Q_)("my-games", () => {
            let e = (0, i.iH)([]),
              t = (0, i.Fl)(() => e.value.map(r.g));
            return {
              myGames: e,
              myUnzippedGames: t,
              update: function(t) {
                let [a] = t, l = e.value.find(([e]) => e === a);
                e.value = l ? [t, ...e.value.filter(([e]) => e !== a)] : [t, ...e.value].slice(0, s)
              }
            }
          }, {
            persist: {
              pick: ["myGames"],
              afterHydrate: e => {
                e.store._storageListenerAdded || (e.store._storageListenerAdded = !0, window.addEventListener("storage", t => {
                  t.key === e.store.$id && e.store.$hydrate()
                }))
              }
            }
          })
      },
      7362: function(e, t, a) {
        function l(e) {
          return [e.hru, e.title, e.preview, e.icon]
        }

        function i([e, t, a, l]) {
          return {
            hru: e,
            title: t,
            preview: a,
            icon: l
          }
        }
        a.d(t, {
          E: function() {
            return l
          },
          g: function() {
            return i
          }
        })
      },
      1920: function(e, t, a) {
        a.d(t, {
          L: function() {
            return c
          }
        }), a(793), a(102), a(5123), a(9560), a(9734);
        var l = a(144),
          i = a(5595);
        let n = {
            VISIT_EVERYDAY: 1,
            PLAY_GAME: 2,
            RANDOM_GAME: 3,
            REGISTER: 4,
            REFERRAL_REGISTER: 5,
            REFERRAL_INVITE: 6
          },
          r = {
            COMPLETED: 10,
            ACTIVE: 20,
            CLAIMED: 30
          };

        function s(e) {
          return e.sort((e, t) => (n[e.type] + r[e.status] || 1e3) - (n[t.type] + r[t.status] || 1e3))
        }
        var o = a(1097),
          d = a(1318);
        let c = (0, l.Q_)("user", () => {
          let e = (0, i.iH)(null),
            t = (0, o.Ek)(),
            a = (0, i.iH)(null),
            l = (0, i.iH)(!1),
            n = (0, i.iH)(!1),
            r = (0, i.iH)([]),
            c = (0, i.iH)(!1),
            u = (0, i.iH)(0),
            p = (0, i.Fl)(() => !!e.value?.email?.endsWith("@playgama.com")),
            g = (0, d.E)();

          function v() {
            return l.value = !1, a.value = Promise.resolve().then(async () => {
              let a;
              return ("undefined" != typeof window && ({
                data: a
              } = await t.request("/api/v1/user/current")), l.value = !0, a) ? (n.value = !0, e.value = a, a) : (n.value = !1, e.value = null, null)
            }), a.value
          }

          function m() {
            return a.value || ("undefined" != typeof window && window?.additionalServerData?.hasToken !== !1 ? a.value = v() : (a.value = Promise.resolve(null), l.value = !0)), a.value
          }
          async function h() {
            if (await m(), e.value || await new Promise(e => {
                g.setSignInModalOpened(!0), g.$subscribe((t, a) => {
                  "direct" !== t.type || a.signInModalOpened || v().then(() => e())
                })
              }), e.value) return {
              ...e.value
            };
            throw Error("User didn't complete login")
          }
          async function f(e) {
            let a = u.value,
              l = r.value;
            u.value += r.value.find(({
              task_id: t
            }) => t === e).coins, r.value = r.value.map(t => t.task_id === e ? {
              ...t,
              status: "CLAIMED"
            } : t);
            try {
              let a = await t.claimTask(e);
              r.value = s(a.tasks), u.value = a.wallet.coins
            } catch {
              r.value = l, u.value = a, c.value = !0
            }
          }
          async function _() {
            a.value = Promise.resolve(null), await t.request("/api/v1/auth/logout", {
              method: "post"
            }), e.value = null, n.value = !1, r.value = []
          }
          async function y({
            key: a,
            account: l
          }) {
            let {
              originalResponse: i
            } = await t.request("/api/v1/user", {
              method: "post",
              body: JSON.stringify({
                [a]: l
              })
            });
            i.ok && (e.value[a] = l)
          }
          return {
            user: e,
            isAuthorized: n,
            isCompanyEmployeeLoggedIn: p,
            isUserInfoLoaded: l,
            getUser: m,
            getUserTasks: async function e() {
              try {
                let e = await t.getTasks();
                c.value = !1, r.value = s(e.tasks), u.value = e.wallet.coins
              } catch {
                c.value = !0, r.value = [], u.value = 1e3
              }
            },
            tasks: r,
            logout: _,
            updateSocials: y,
            tasksError: c,
            userBalance: u,
            claimUserTasks: f,
            authorizeUser: h,
            fetchUserInfo: v,
            cancelCharge: function(e) {
              g.paymentModalOrder?.reject?.(e), g.setPaymentModalOrder(null)
            },
            chargeUser: g.setPaymentModalOrder,
            setUser: function(t) {
              e.value = t, n.value = !0, l.value = !0
            }
          }
        })
      },
      2659: function(e, t, a) {
        a.d(t, {
          Xc: function() {
            return n
          },
          Z: function() {
            return r
          },
          bu: function() {
            return i
          }
        });
        var l, i = ((l = {}).GOOGLE_AD = "googleAd", l.GOOGLE_INSTREAM = "googleInstream", l.GOOGLE_AD_SENSE = "googleAdSense", l.GAME_DISTRIBUTION = "gameDistribution", l.MEMBRANA = "membrana", l.MEMBRANA_VAST = "membrana_vast", l.DEBUG_PROVIDER = "debug", l.EMPTY_PROVIDER = "emptyProvider", l.DIRECT = "direct", l.GOOGLE_INSTREAM_CHEAP = "googleInstream_cheap", l.GOOGLE_INSTREAM_HIGH = "googleInstream_high", l);
        let n = {
            NO_LOCALE_IN_ROUTE: "no_locale_in_route",
            PREFERRED_LOCALE: "preferred_locale",
            REMOVE_EN_LOCALE: "remove_en_locale",
            CATEGORY_TYPE_MISMATCH: "category_type_mismatch",
            RANDOM_GAME_SET: "random_game_set",
            SHOP_TO_PROFILE: "shop_to_profile"
          },
          r = {
            FRONTEND_ROUTER: "frontend_router",
            FRONTEND_REDIRECT: "frontend_redirect"
          }
      },
      6896: function(e, t, a) {
        a.d(t, {
          Gn: function() {
            return r
          },
          y$: function() {
            return n
          }
        });
        var l = a(4886),
          i = a(2512);
        let n = "direct_pwa",
          r = e => {
            let t = "",
              a = "";
            if ("undefined" != typeof window) {
              if ([n, "direct_twa"].includes(a = (t = (0, i.bd)(document.cookie) || "").split(":")[0])) return (0, i.q)(""), {
                landingClid: void 0,
                landingWidgetId: void 0
              };
              e.query.clid && e.params.game && e.name === l.m8.GAME_PAGE && a !== e.query.clid && (t = `${e.query.clid}:${e.params.game}`, a = e.query.clid, (0, i.q)(t))
            }
            return {
              landingClid: a,
              landingWidgetId: t
            }
          }
      },
      2385: function(e, t, a) {
        a.d(t, {
          o: function() {
            return r
          }
        });
        var l = a(156),
          i = a(2659);
        let n = {
          "p_a68073c6-abde-4a55-a494-5ddb9ec8baa0": {
            isInitGameScreenHidden: !0,
            inGameAdUnitProviderConfig: {
              [i.bu.GOOGLE_INSTREAM_CHEAP]: {
                desktop: {
                  interstitial_preroll: "instream_preroll_no_floor_desktop",
                  interstitial: "instream_no_floor_desktop",
                  rewarded: "instream_rewarded_no_floor_desktop"
                },
                mobile: {
                  interstitial_preroll: "instream_preroll_no_floor_mobile",
                  interstitial: "instream_no_floor_mobile",
                  rewarded: "instream_rewarded_no_floor_mobile"
                }
              }
            },
            inGameProviderKeys: [i.bu.GOOGLE_INSTREAM, i.bu.GOOGLE_INSTREAM_CHEAP]
          },
          [l.G]: {
            isInitGameScreenHidden: !0
          }
        };

        function r(e) {
          return n[e] || {}
        }
      },
      2512: function(e, t, a) {
        a.d(t, {
          bU: function() {
            return n
          },
          bd: function() {
            return r
          },
          lO: function() {
            return c
          },
          oi: function() {
            return s
          },
          q: function() {
            return o
          }
        }), a(3479), a(3366), a(5123), a(4510), a(696);
        let l = "landing_wid";

        function i(e) {
          return e.split("; ").reduce((e, t) => {
            let [a, l] = t.split("=");
            return e[a] = decodeURIComponent(l), e
          }, {})
        }

        function n(e) {
          let t = i(e);
          if (t.pg_uac) try {
            return JSON.parse(atob(t.pg_uac))
          } catch {}
          return {}
        }

        function r(e) {
          return i(e)[l]
        }

        function s(e) {
          d("selected_locale", e, 31536e6)
        }

        function o(e) {
          d(l, e, 2592e6)
        }

        function d(e, t, a) {
          let l = new Date;
          l.setTime(l.getTime() + a), document.cookie = `${e}=${encodeURIComponent(t)}; expires=${l.toUTCString()}; path=/; Secure; SameSite=none`
        }

        function c(e) {
          return i(e).auid
        }
      },
      4423: function(e, t, a) {
        function l(e) {
          return e.match(/(iPhone|iPad|iPod)/) ? "ios" : e.match(/Android/) ? "android" : "desktop"
        }

        function i(e) {
          let t, a, l = e.length;
          for (; 0 !== l;) a = Math.floor(Math.random() * l), l -= 1, t = e[l], e[l] = e[a], e[a] = t;
          return e
        }

        function n(e, {
          abortSignal: t
        } = {}) {
          return new Promise(a => {
            let l = setTimeout(() => {
              a()
            }, e);
            t?.addEventListener("abort", () => {
              clearTimeout(l)
            })
          })
        }

        function r(e) {
          return [e.hru, e.title, e.preview, e.icon, e.video_metadata[0]?.external_url, e.video_metadata[0]?.playgama_id, e.hasInAppPurchases, e.rankingDebug?.data, e.badges]
        }

        function s([e, t, a, l, i, n, r, s, o]) {
          return {
            hru: e,
            title: t,
            preview: a,
            icon: l,
            videoUrl: i,
            videoId: n,
            hasInAppPurchases: r,
            debugInfo: s,
            badges: o
          }
        }

        function o(e) {
          return new Promise(t => {
            window.requestIdleCallback ? window.requestIdleCallback(() => {
              t()
            }, {
              timeout: e
            }) : setTimeout(() => {
              t()
            }, 1)
          })
        }

        function d(e) {
          return "PLAY_GAME" === e.type
        }

        function c(e) {
          return "RANDOM_GAME" === e.type || "PLAY_GAME" === e.type
        }

        function u(e) {
          let t = "";
          return e && (e.includes("https://www.youtu.be/") ? t = e.split("https://www.youtu.be/")[1].split("?")[0] : e.includes("https://www.youtube.com/watch?v=") ? t = e.split("https://www.youtube.com/watch?v=")[1].split("&")[0] : e.includes("https://www.youtube.com/embed/") && (t = e.split("https://www.youtube.com/embed/")[1].split("?")[0])), t
        }

        function p(e) {
          let t = u(e);
          if (t) return `https://www.youtube.com/embed/${t}`
        }
        a.d(t, {
          HT: function() {
            return n
          },
          I6: function() {
            return p
          },
          Lu: function() {
            return c
          },
          S8: function() {
            return o
          },
          TV: function() {
            return i
          },
          VP: function() {
            return s
          },
          bO: function() {
            return r
          },
          dQ: function() {
            return d
          },
          qS: function() {
            return u
          },
          zT: function() {
            return l
          }
        })
      },
      5291: function(e, t, a) {
        a.d(t, {
          A: function() {
            return i
          }
        });
        var l = a(4423);
        async function i(e) {
          if (document.hidden || "visible" !== document.visibilityState) return !1;
          await (0, l.S8)();
          let t = document.getElementById(e);
          if (!t) return !1;
          let a = t.getBoundingClientRect();
          if (0 === a.width || 0 === a.height) return !1;
          let i = window.innerWidth,
            n = window.innerHeight,
            r = Math.max(0, a.left),
            s = Math.max(0, a.top),
            o = Math.min(i, a.right),
            d = Math.min(n, a.bottom);
          if (Math.max(0, o - r) * Math.max(0, d - s) / (a.width * a.height) < .51) return !1;
          let c = a.left + a.width / 2,
            u = a.top + a.height / 2,
            p = document.elementFromPoint(c, u);
          return p === t || t.contains(p)
        }
      },
      9925: function(e, t, a) {
        a.d(t, {
          v: function() {
            return i
          }
        }), a(793), a(102), a(5123);
        var l = a(4423);
        let i = ({
          src: e,
          crossorigin: t = null,
          async: a = !0,
          timeoutMs: i,
          useExisting: n = !1,
          onBeforeFirstLoad: r
        }) => {
          let s;
          if (n) {
            let t = Array.from(document.scripts).find(t => t.src === e);
            if (t) return "loaded" === t.scriptLoadingState ? Promise.resolve(t) : "error" === t.scriptLoadingState ? Promise.reject(Error(`Script ${e} has failed state`)) : new Promise((a, l) => {
              t.addEventListener("load", () => {
                a(t), t.scriptLoadingState = "loaded"
              }), t.addEventListener("error", () => {
                l(Error(`Script ${e} has failed state`)), t.scriptLoadingState = "error"
              })
            })
          }
          let o = new AbortController;
          return i && (0, l.HT)(i).then(() => {
            o.abort()
          }), (function({
            src: e,
            document: t,
            abortSignal: a,
            onBeforeLoad: l
          }) {
            let i = !1;
            return new Promise((n, r) => {
              let s = t.createElement("script");
              a?.addEventListener("abort", () => {
                i || (s.remove(), r(Error("Script aborted")))
              }), s.onload = () => {
                i = !0, n(s)
              }, s.onerror = e => {
                i || (s.remove(), r(Error("Failed to load script", {
                  cause: e
                })))
              }, l?.(s), s.src = e, t.body.appendChild(s)
            })
          })({
            document,
            src: e,
            abortSignal: o.signal,
            onBeforeLoad: e => {
              s = e, e.async = a, e.scriptLoadingState = "loading", e.crossOrigin = t, r?.(e)
            }
          }).then(e => (e.scriptLoadingState = "loaded", e)).catch(e => {
            throw s.scriptLoadingState = "error", e
          })
        }
      },
      6381: function(e, t, a) {
        function l(e, t = {
          shorten: !1,
          decimals: 0
        }) {
          if (void 0 === e) return "";
          let {
            shorten: a,
            decimals: i,
            minSeparated: n = 1e4
          } = t;
          if (a) {
            let t = Math.abs(e);
            for (let {
                threshold: a,
                suffix: l
              }
              of [{
                threshold: 1e9,
                suffix: "B"
              }, {
                threshold: 1e6,
                suffix: "M"
              }, {
                threshold: 1e3,
                suffix: "k"
              }])
              if (t >= a) return (e / a).toFixed(i) + l
          }
          let r = e.toString();
          return e >= n ? r.replace(/(\d)(?=(\d{3})+$)/g, "$1 ") : r
        }
        a.d(t, {
          B: function() {
            return l
          },
          c: function() {
            return n
          }
        }), a(9560), a(9734);
        let i = {
          0: "\uD835\uDFCE",
          1: "\uD835\uDFCF",
          2: "\uD835\uDFD0",
          3: "\uD835\uDFD1",
          4: "\uD835\uDFD2",
          5: "\uD835\uDFD3",
          6: "\uD835\uDFD4",
          7: "\uD835\uDFD5",
          8: "\uD835\uDFD6",
          9: "\uD835\uDFD7"
        };

        function n(e) {
          return e.split("").map(e => i[e] ?? e).join("")
        }
      },
      4919: function(e, t, a) {
        a.d(t, {
          Bj: function() {
            return d
          },
          Mq: function() {
            return s
          },
          bJ: function() {
            return o
          }
        }), a(793), a(102), a(5123);
        let l = [420, 480, 90, 160, 190, 320, 380].sort((e, t) => t - e),
          i = "TEMPORARY_DISABLE_TRANSFORMATIONS",
          n = RegExp("(/enlarged|/thumb)$"),
          r = (e, t) => {
            let a = l.find(e => e <= t) || l[l.length - 1],
              i = 75;
            return a <= 160 && (i = 50), e.replace(n, `/width=${a},quality=${i}`)
          },
          s = (e, t) => e.startsWith(i) && n.test(e) ? r(e, t) : e,
          o = (e, t) => e.startsWith(i) && n.test(e) ? `${r(e,t)}, ${r(e,t)} 1.75x, ${r(e,2*t)} 2x, ${r(e,3*t)} 3x` : "",
          d = e => e.startsWith("https://playgama.com/cdn-cgi/imagedelivery/") && n.test(e) ? e.replace(n, "/original") : e
      },
      1097: function(e, t, a) {
        a.d(t, {
          Ek: function() {
            return r
          },
          eZ: function() {
            return n
          }
        });
        var l = a(5595);
        let i = Symbol("ApiRequests");

        function n(e) {
          return {
            install(t) {
              t.provide(i, e)
            }
          }
        }

        function r() {
          let e = (0, l.f3)(i);
          if (!e) throw Error("No API class provided in Vue app.");
          return e
        }
      },
      3095: function(e, t, a) {
        function l(e) {
          return null !== e && "object" == typeof e && "redirectTarget" in e && "status" in e
        }

        function i(e) {
          return null !== e && "object" == typeof e && "categoryType" in e && "string" == typeof e.categoryType
        }
        a.d(t, {
          Es: function() {
            return l
          },
          XV: function() {
            return i
          },
          YL: function() {
            return r
          },
          nw: function() {
            return n
          }
        });
        let n = 3e5,
          r = 6e5
      },
      8284: function(e, t, a) {
        function l(e) {
          try {
            return new URL(e)
          } catch {
            return null
          }
        }
        a.d(t, {
          Z: function() {
            return l
          }
        }), a(6330), a(8221), a(5863)
      },
      8612: function(e, t, a) {
        a.d(t, {
          t: function() {
            return i
          }
        });
        var l = a(5595);
        let i = () => {
          let e = (0, l.iH)(!1);
          return (0, l.bv)(() => {
            e.value = !0
          }), (0, l.SK)(() => {
            e.value = !1
          }), e
        }
      },
      9656: function(e) {
        e.exports = cheerio
      }
    },
    d = {};

  function c(e) {
    var t = d[e];
    if (void 0 !== t) return t.exports;
    var a = d[e] = {
      exports: {}
    };
    return o[e].call(a.exports, a, a.exports, c), a.exports
  }
  if (c.m = o, c.n = function(e) {
      var t = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return c.d(t, {
        a: t
      }), t
    }, t = Object.getPrototypeOf ? function(e) {
      return Object.getPrototypeOf(e)
    } : function(e) {
      return e.__proto__
    }, c.t = function(a, l) {
      if (1 & l && (a = this(a)), 8 & l || "object" == typeof a && a && (4 & l && a.__esModule || 16 & l && "function" == typeof a.then)) return a;
      var i = Object.create(null);
      c.r(i);
      var n = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var r = 2 & l && a;
        "object" == typeof r && !~e.indexOf(r); r = t(r)) Object.getOwnPropertyNames(r).forEach(function(e) {
        n[e] = function() {
          return a[e]
        }
      });
      return n.default = function() {
        return a
      }, c.d(i, n), i
    }, c.d = function(e, t) {
      for (var a in t) c.o(t, a) && !c.o(e, a) && Object.defineProperty(e, a, {
        enumerable: !0,
        get: t[a]
      })
    }, c.f = {}, c.e = function(e) {
      return Promise.all(Object.keys(c.f).reduce(function(t, a) {
        return c.f[a](e, t), t
      }, []))
    }, c.u = function(e) {
      return "static/js/async/" + (({
        317: "game-page",
        689: "game-page.critical"
      })[e] || e) + "." + ({
        123: "cc1d1451",
        128: "59ad7491",
        178: "0ace3a8c",
        19: "0b4e3def",
        191: "1c65bc8c",
        205: "9f8ecfe3",
        241: "05f465f8",
        296: "1fb319a9",
        317: "df64b0b2",
        37: "91553ec0",
        380: "28358574",
        411: "4245eb99",
        43: "45338563",
        437: "f3f55598",
        501: "5c9dd6fc",
        561: "367f005b",
        588: "f1a93c37",
        597: "c6b8a1be",
        621: "aeac5f5d",
        681: "874c6809",
        689: "c87e8d62",
        695: "dd874571",
        71: "5a00feab",
        731: "c2ab5bf7",
        78: "ca235e33",
        821: "423026c8",
        827: "cac9a2eb",
        839: "65986b7d",
        848: "645e58f9",
        877: "68a381a6",
        913: "fcf68e32",
        917: "e2ca7323",
        949: "bb6aaf56",
        97: "17819c6e",
        970: "6397588f",
        987: "f39bf3b4"
      })[e] + ".js"
    }, c.miniCssF = function(e) {
      return "static/css/async/" + (({
        317: "game-page",
        689: "game-page.critical"
      })[e] || e) + "." + ({
        241: "bceefe67",
        296: "b77d34e5",
        317: "cb1bcb67",
        411: "a0a8500f",
        437: "a0e604f0",
        689: "36dc8cd2",
        695: "6986883d",
        71: "1e9b0547",
        731: "98f62233",
        78: "71a648f0",
        827: "d2836428",
        839: "c894dfa7",
        913: "cf5211d9"
      })[e] + ".css"
    }, c.g = function() {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")()
      } catch (e) {
        if ("object" == typeof window) return window
      }
    }(), c.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, a = {}, l = "portal-frontend-vue:", c.l = function(e, t, i, n) {
      if (a[e]) return void a[e].push(t);
      if (void 0 !== i)
        for (var r, s, o = document.getElementsByTagName("script"), d = 0; d < o.length; d++) {
          var u = o[d];
          if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == l + i) {
            r = u;
            break
          }
        }
      r || (s = !0, (r = document.createElement("script")).charset = "utf-8", r.timeout = 120, c.nc && r.setAttribute("nonce", c.nc), r.setAttribute("data-webpack", l + i), r.src = e), a[e] = [t];
      var p = function(t, l) {
          r.onerror = r.onload = null, clearTimeout(g);
          var i = a[e];
          if (delete a[e], r.parentNode && r.parentNode.removeChild(r), i && i.forEach(function(e) {
              return e(l)
            }), t) return t(l)
        },
        g = setTimeout(p.bind(null, void 0, {
          type: "timeout",
          target: r
        }), 12e4);
      r.onerror = p.bind(null, r.onerror), r.onload = p.bind(null, r.onload), s && document.head.appendChild(r)
    }, c.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, i = [], c.O = function(e, t, a, l) {
      if (t) {
        l = l || 0;
        for (var n = i.length; n > 0 && i[n - 1][2] > l; n--) i[n] = i[n - 1];
        i[n] = [t, a, l];
        return
      }
      for (var r = 1 / 0, n = 0; n < i.length; n++) {
        for (var t = i[n][0], a = i[n][1], l = i[n][2], s = !0, o = 0; o < t.length; o++)(!1 & l || r >= l) && Object.keys(c.O).every(function(e) {
          return c.O[e](t[o])
        }) ? t.splice(o--, 1) : (s = !1, l < r && (r = l));
        if (s) {
          i.splice(n--, 1);
          var d = a();
          void 0 !== d && (e = d)
        }
      }
      return e
    }, c.p = "/", "undefined" != typeof document) {
    var u = function(e, t, a, l, i) {
        var n = document.createElement("link");
        return n.rel = "stylesheet", n.type = "text/css", c.nc && (n.nonce = c.nc), n.onerror = n.onload = function(a) {
          if (n.onerror = n.onload = null, "load" === a.type) l();
          else {
            var r = a && ("load" === a.type ? "missing" : a.type),
              s = a && a.target && a.target.href || t,
              o = Error("Loading CSS chunk " + e + " failed.\\n(" + s + ")");
            o.code = "CSS_CHUNK_LOAD_FAILED", o.type = r, o.request = s, n.parentNode && n.parentNode.removeChild(n), i(o)
          }
        }, n.href = t, a ? a.parentNode.insertBefore(n, a.nextSibling) : document.head.appendChild(n), n
      },
      p = function(e, t) {
        for (var a = document.getElementsByTagName("link"), l = 0; l < a.length; l++) {
          var i = a[l],
            n = i.getAttribute("data-href") || i.getAttribute("href");
          if ("stylesheet" === i.rel && (n === e || n === t)) return i
        }
        for (var r = document.getElementsByTagName("style"), l = 0; l < r.length; l++) {
          var i = r[l],
            n = i.getAttribute("data-href");
          if (n === e || n === t) return i
        }
      },
      g = {
        980: 0
      };
    c.f.miniCss = function(e, t) {
      if (g[e]) t.push(g[e]);
      else 0 !== g[e] && ({
        437: 1,
        731: 1,
        78: 1,
        71: 1,
        296: 1,
        241: 1,
        689: 1,
        411: 1,
        695: 1,
        827: 1,
        913: 1,
        317: 1,
        839: 1
      })[e] && t.push(g[e] = new Promise(function(t, a) {
        var l = c.miniCssF(e),
          i = c.p + l;
        if (p(l, i)) return t();
        u(e, i, null, t, a)
      }).then(function() {
        g[e] = 0
      }, function(t) {
        throw delete g[e], t
      }))
    }
  }
  n = {
    980: 0
  }, c.f.j = function(e, t) {
    var a = c.o(n, e) ? n[e] : void 0;
    if (0 !== a)
      if (a) t.push(a[2]);
      else {
        var l = new Promise(function(t, l) {
          a = n[e] = [t, l]
        });
        t.push(a[2] = l);
        var i = c.p + c.u(e),
          r = Error();
        c.l(i, function(t) {
          if (c.o(n, e) && (0 !== (a = n[e]) && (n[e] = void 0), a)) {
            var l = t && ("load" === t.type ? "missing" : t.type),
              i = t && t.target && t.target.src;
            r.message = "Loading chunk " + e + " failed.\n(" + l + ": " + i + ")", r.name = "ChunkLoadError", r.type = l, r.request = i, a[1](r)
          }
        }, "chunk-" + e, e)
      }
  }, c.O.j = function(e) {
    return 0 === n[e]
  }, r = function(e, t) {
    var a, l, i = t[0],
      r = t[1],
      s = t[2],
      o = 0;
    if (i.some(function(e) {
        return 0 !== n[e]
      })) {
      for (a in r) c.o(r, a) && (c.m[a] = r[a]);
      if (s) var d = s(c)
    }
    for (e && e(t); o < i.length; o++) l = i[o], c.o(n, l) && n[l] && n[l][0](), n[l] = 0;
    return c.O(d)
  }, (s = self.webpackChunkportal_frontend_vue = self.webpackChunkportal_frontend_vue || []).forEach(r.bind(null, 0)), s.push = r.bind(null, s.push.bind(s));
  var v = c.O(void 0, ["449", "30"], function() {
    return c(5597)
  });
  c.O(v)
}();
//# sourceMappingURL=index.65cd34fe.js.map