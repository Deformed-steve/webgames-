"use strict";
(self.webpackChunkportal_frontend_vue = self.webpackChunkportal_frontend_vue || []).push([
  ["681"], {
    2273: function(e, t, a) {
      a.d(t, {
        Z: function() {
          return $
        }
      }), a(9560), a(9734), a(2394);
      var r = a(5595),
        l = a(1099),
        i = a(144),
        n = a(9938),
        u = a(7788),
        o = a(3811),
        s = a(3496),
        p = a(2413),
        m = a(1704),
        c = a(2765),
        d = a(86),
        g = a(1301),
        v = a(4886),
        h = a(3095);
      class y {
        router;
        apiRequests;
        static CDN_REGEX = /playgama\.com\/cdn-cgi\/imagedelivery\//;
        static CDN_SIZE_REGEX = /\/(thumb|enlarged)$/;
        static MANIFEST_COLORS = {
          background: "#000",
          theme: "#000"
        };
        constructor(e, t) {
          this.router = e, this.apiRequests = t
        }
        static isCDNImage(e) {
          return y.CDN_REGEX.test(e)
        }
        static removeSizeParam(e) {
          return e.replace(y.CDN_SIZE_REGEX, "/")
        }
        static getScaledImage(e, t, a = t) {
          if (!y.isCDNImage(e)) return e;
          let r = y.removeSizeParam(e);
          return `${r}fit=cover,w=${t},h=${a}`
        }
        getRouterPath(e, t, a) {
          let {
            fullPath: r
          } = this.router.resolve({
            name: e,
            params: t,
            query: a
          });
          return r
        }
        generateMainManifest(e) {
          return {
            name: "Playgama.com",
            short_name: "Playgama",
            id: this.getRouterPath(v.m8.MAIN),
            start_url: this.getRouterPath(v.m8.MAIN, void 0, e ? {
              clid: e
            } : void 0),
            display: "standalone",
            background_color: y.MANIFEST_COLORS.background,
            theme_color: y.MANIFEST_COLORS.theme,
            icons: [{
              src: g,
              sizes: "512x512",
              type: "image/svg+xml",
              purpose: "maskable"
            }, {
              src: c,
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable"
            }, {
              src: d,
              sizes: "512x512",
              type: "image/png",
              purpose: "any"
            }],
            screenshots: []
          }
        }
        async generateGameManifest(e, t) {
          let a = await this.apiRequests.getGameByParam({
            param: e,
            locale: "en-US"
          });
          if ((0, h.Es)(a)) throw 404;
          let {
            game: r
          } = a, {
            title: l,
            description: i,
            icon: n
          } = r, u = {
            autoplay: "true"
          };
          t && (u.clid = t);
          let o = this.getRouterPath(v.m8.GAME_PAGE, {
              game: e
            }, u),
            s = this.getRouterPath(v.m8.GAME_PAGE, {
              game: e
            });
          return {
            name: `${l} - Playgama.com`,
            short_name: l,
            id: s,
            start_url: o,
            scope: s,
            display: "fullscreen",
            background_color: y.MANIFEST_COLORS.background,
            theme_color: y.MANIFEST_COLORS.theme,
            description: i,
            icons: [{
              src: y.getScaledImage(n, 512),
              sizes: "512x512",
              type: "image/webp",
              purpose: "any"
            }, {
              src: y.getScaledImage(n, 384),
              sizes: "384x384",
              type: "image/webp",
              purpose: "any"
            }, {
              src: y.getScaledImage(n, 192),
              sizes: "192x192",
              type: "image/webp",
              purpose: "any"
            }],
            screenshots: [],
            categories: ["games", "entertainment"],
            orientation: "any",
            related_applications: [],
            prefer_related_applications: !1
          }
        }
      }
      var _ = a(9376),
        f = a(4351),
        b = a(6494),
        w = a(6896),
        E = a(4423),
        I = a(4919);
      let S = {
        "data-head-meta-game": ""
      };
      var $ = (0, r.aZ)({
        __name: "HeadMetaGame",
        props: {
          noindex: {
            type: Boolean,
            default: !1
          },
          breadcrumbs: {}
        },
        setup(e) {
          let t = (0, p.y)(),
            a = (0, n.tv)(),
            c = (0, b.G)(),
            {
              game: d,
              gameCatInfo: g
            } = (0, i.Jk)(c),
            {
              getCanonicalAndAlternates: h
            } = (0, o.W)(),
            {
              isPartOf: $,
              getInLanguage: k,
              getFullLink: A
            } = (0, s.C)(),
            G = (0, r.Fl)(() => (0, _.z)("category", g.value).map(e => e.title)),
            M = (0, r.Fl)(() => d.value?.developer && d.value?.developer !== "Playgama" ? t("headMetaGame.developer", {
              developer: d.value?.developer
            }) : ""),
            P = (0, r.Fl)(() => `${t("headMetaGame.description",{title:d.value?.title??""})} ${M.value}`.trim()),
            R = (0, r.Fl)(() => `${t("headMetaGame.title",{title:d.value?.title??""})} ${M.value}`.trim()),
            C = (0, r.Fl)(() => t("headMetaGame.alt_image", {
              title: d.value?.title ?? ""
            })),
            {
              VUE_APP_HOST_URL: O
            } = (0, u.Z)(),
            F = (0, r.Fl)(() => d.value?.hru ? `${O}${a.resolve({name:v.m8.GAME_PAGE,params:{game:d.value?.hru}}).fullPath}` : ""),
            x = (0, _.x)(d),
            D = (0, f.q)(),
            {
              platform: N
            } = (0, i.Jk)(D),
            z = (0, r.Fl)(() => ({
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: e.breadcrumbs?.map((e, t) => ({
                  "@type": "ListItem",
                  position: t + 1,
                  item: {
                    "@type": "Thing",
                    "@id": A(e.href),
                    name: e.title
                  }
                }))
              }
            })),
            j = (0, r.Fl)(() => {
              if (!d.value?.createdAt) return;
              let e = new Date(d.value.createdAt);
              return e.setDate(e.getDate() - 1), e.toISOString().slice(0, 10)
            }),
            L = (0, r.Fl)(() => {
              if (d.value?.updatedAt) return new Date(d.value.updatedAt).toISOString().slice(0, 10)
            }),
            T = (0, r.Fl)(() => {
              if (!d.value) return [];
              let e = [];
              return d.value.is_desktop && e.push("Desktop"), (d.value.is_android || d.value.is_ios) && !e.includes("Mobile") && e.push("Mobile", "Tablet"), e
            }),
            U = (0, r.Fl)(() => d.value?.video_metadata?.[0] ?? null),
            q = (0, r.Fl)(() => (0, E.qS)(d.value?.youtube_video)),
            B = (0, r.Fl)(() => {
              let e = "",
                t = "",
                a = "";
              return q.value ? (e = `https://img.youtube.com/vi/${q.value}/hqdefault.jpg`, t = `https://www.youtube.com/watch?v=${q.value}`, a = `https://www.youtube.com/embed/${q.value}`) : U.value && (e = U.value.playgama_id ? `${m.W_}${U.value.playgama_id}/thumbnails/thumbnail.jpg` : (0, I.Bj)(d.value?.preview || ""), t = U.value.playgama_id ? `${m.W_}${U.value.playgama_id}/downloads/default.mp4` : U.value.external_url, a = U.value.playgama_id ? `${m.W_}${U.value.playgama_id}/downloads/default.mp4` : U.value.external_url), {
                thumbnail: e,
                content: t,
                embed: a
              }
            }),
            W = (0, r.Fl)(() => (function({
              game: a
            }) {
              if (!a.value) return {};
              let r = function() {
                if (!d.value) return {};
                let a = A({
                    name: v.m8.GAME_PAGE,
                    params: {
                      game: d.value.hru
                    }
                  }),
                  r = `${a}#item`,
                  l = `${a}#app`,
                  i = (0, I.Bj)(d.value.preview),
                  {
                    title: n
                  } = d.value || {},
                  u = B.value?.content ? {
                    video: {
                      "@type": "VideoObject",
                      name: `${d.value?.title} - ${t("seo.gameplay_video")}`,
                      description: P.value,
                      thumbnailUrl: B.value?.thumbnail,
                      uploadDate: d.value?.updatedAt,
                      contentUrl: B.value?.content,
                      embedUrl: B.value?.embed
                    }
                  } : {};
                return [{
                  "@context": "https://schema.org",
                  "@type": "ItemPage",
                  "@id": r,
                  url: a,
                  name: R.value,
                  description: P.value,
                  inLanguage: k(),
                  ...e.breadcrumbs ? z.value : {},
                  primaryImageOfPage: {
                    "@type": "ImageObject",
                    url: i,
                    contentUrl: i,
                    width: 1920,
                    height: 1080
                  },
                  image: {
                    "@type": "ImageObject",
                    url: i,
                    contentUrl: i,
                    width: 1920,
                    height: 1080
                  },
                  ...u,
                  mainEntity: {
                    "@id": l
                  },
                  ...$.value
                }, {
                  "@context": "https://schema.org",
                  "@type": "WebApplication",
                  "@id": l,
                  mainEntityOfPage: {
                    "@id": r
                  },
                  name: n,
                  applicationCategory: "Game",
                  additionalType: "https://schema.org/VideoGame",
                  url: a,
                  image: [i, {
                    "@type": "ImageObject",
                    url: i,
                    contentUrl: i
                  }],
                  applicationSubCategory: G.value,
                  availableOnDevice: T.value,
                  operatingSystem: x.value,
                  ...d.value?.developer ? {
                    author: {
                      "@type": "Person",
                      name: d.value.developer
                    }
                  } : {},
                  ...d.value?.rating ? {
                    aggregateRating: {
                      "@type": "AggregateRating",
                      worstRating: 1,
                      bestRating: 5,
                      ratingValue: d.value.rating.value,
                      ratingCount: d.value.rating.count
                    }
                  } : {},
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: s.R,
                    availability: "https://schema.org/InStock"
                  },
                  ...d.value?.screenshots && d.value.screenshots.length > 0 ? {
                    screenshot: d.value.screenshots.map(e => ({
                      "@type": "ImageObject",
                      url: e,
                      contentUrl: e
                    }))
                  } : {},
                  ...j.value ? {
                    datePublished: j.value
                  } : {},
                  ...L.value ? {
                    dateModified: L.value
                  } : {},
                  potentialAction: {
                    "@type": "PlayAction",
                    target: a,
                    name: n
                  }
                }]
              }();
              return {
                title: () => R.value,
                meta: [{
                  name: "description",
                  content: () => P.value
                }, {
                  property: "og:title",
                  content: () => R.value
                }, {
                  property: "og:description",
                  content: () => P.value
                }, {
                  property: "og:url",
                  content: () => F.value
                }, {
                  property: "og:image",
                  content: () => a.value?.preview
                }, {
                  property: "og:image:alt",
                  content: () => C.value
                }, {
                  property: "game:platform",
                  content: () => x.value
                }, {
                  name: "twitter:title",
                  content: () => R.value
                }, {
                  name: "twitter:description",
                  content: () => P.value
                }, {
                  name: "twitter:image",
                  content: () => a.value?.preview
                }, {
                  name: "twitter:image:alt",
                  content: () => C.value
                }, e.noindex ? {
                  name: "robots",
                  content: () => "noindex, follow"
                } : {}],
                link: [...h({
                  forRoute: {
                    name: v.m8.GAME_PAGE,
                    params: {
                      game: a.value.hru
                    }
                  }
                }), ...a.value?.hru && "ios" !== N.value ? [{
                  rel: "manifest",
                  href: `/manifest/game/${a.value.hru}.webmanifest?clid=${w.y$}`,
                  key: m.CK
                }] : [], ...a.value?.icon ? [{
                  rel: "apple-touch-icon",
                  sizes: "180x180",
                  href: y.getScaledImage(a.value.icon, 180, 180),
                  media: "(prefers-color-scheme:light)",
                  key: "apple-touch-icon-light"
                }, {
                  rel: "apple-touch-icon",
                  sizes: "180x180",
                  href: y.getScaledImage(a.value.icon, 180, 180),
                  media: "(prefers-color-scheme:dark)",
                  key: "apple-touch-icon-dark"
                }] : []],
                script: [{
                  type: "application/ld+json",
                  innerHTML: r
                }]
              }
            })({
              game: d
            }));
          return (0, l.u)(W), (e, t) => ((0, r.wg)(), (0, r.iD)("div", S))
        }
      })
    },
    9376: function(e, t, a) {
      a.d(t, {
        x: function() {
          return n
        },
        z: function() {
          return i
        }
      }), a(2394), a(9929), a(6301), a(5123), a(9560), a(9734);
      var r = a(5595),
        l = a(2413);

      function i(e, t) {
        return t && t.categoriesInfo ? t.categoriesInfo.filter(t => t.categoryType === e) : []
      }

      function n(e) {
        let t = (0, l.y)();
        return (0, r.Fl)(() => e.value ? (function(e) {
          let t = [];
          return e.is_ios && t.push("ios"), e.is_android && t.push("android"), e.is_desktop && t.push("desktop"), t
        })(e.value).map(e => {
          switch (e) {
            case "desktop":
              return t("gameContainer.desktop");
            case "android":
              return t("gameContainer.android");
            case "ios":
              return t("gameContainer.ios")
          }
        }).join(", ") : "")
      }
    }
  }
]);
//# sourceMappingURL=681.874c6809.js.map