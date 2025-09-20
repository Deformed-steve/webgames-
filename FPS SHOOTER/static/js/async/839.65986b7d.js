"use strict";
(self.webpackChunkportal_frontend_vue = self.webpackChunkportal_frontend_vue || []).push([
  ["839"], {
    1810: function(e, t, a) {
      a.d(t, {
        Z: function() {
          return n
        }
      });
      var s = a(5595);
      let r = ["innerHTML"];
      var n = (0, s.aZ)({
        __name: "SeoTextRaw",
        props: {
          content: {}
        },
        setup(e) {
          let t = (0, s.Fl)(() => {
            let t = e.content;
            return "undefined" == typeof window && (t = a(9656).load(t, null, !1).html()), t.replace(/<!--[\s\S]*?-->/g, "").replace(/(<img\s)([^>]*?)(\/?>)/gi, (e, t, a, s) => a.includes("loading=") ? e : `${t}loading="lazy" ${a}${s}`).replace(/(<iframe\s)([^>]*?)(>)/gi, (e, t, a, s) => a.includes("loading=") ? e : `${t}loading="lazy" ${a}${s}`)
          });
          return (e, a) => ((0, s.wg)(), (0, s.iD)("div", {
            "data-allow-mismatch": "",
            innerHTML: t.value
          }, null, 8, r))
        }
      })
    },
    5642: function(e, t, a) {
      a.r(t), a.d(t, {
        default: function() {
          return tc
        }
      }), a(2394), a(4510);
      var s, r = a(5595),
        n = a(144),
        i = a(9938),
        l = a(7773),
        o = a(4630),
        d = a(7788),
        c = a(1704),
        u = a(7626),
        g = a(1097),
        p = ((s = {}).pong = "pong", s.userInfo = "userInfo", s.getUser = "getUser", s.getPlatformInfo = "getPlatformInfo", s.platformInfo = "platformInfo", s.getState = "getState", s.getCloudSaveState = "getCloudSaveState", s.setCloudSaveState = "setCloudSaveState", s.cloudSaveStateResponse = "cloudSaveStateResponse", s.cloudSaveOperationResponse = "cloudSaveOperationResponse", s.setItems = "setItems", s.deleteItems = "deleteItems", s.initStorage = "initStorage", s.authorizeUser = "authorizeUser", s.requestPurchase = "requestPurchase", s.requestTopup = "requestTopup", s.purchaseStatus = "purchaseStatus", s.topupStatus = "topupStatus", s.unknownMessageAction = "unknownMessageAction", s.unknownMessageType = "unknownMessageType", s.loginError = "loginError", s);
      a(5646), a(9774), a(5123), a(3479), a(3366);
      var h = a(869);
      let v = "game_saved_state",
        m = [{
          upgrade: e => {
            e.createObjectStore(v, {
              keyPath: ["gameId", "gameKey"]
            }).createIndex("gameId", "gameId", {
              unique: !1
            })
          }
        }],
        y = async () => await (0, h.X3)("pg_game_safe_storage", m.length, {
          upgrade(e, t, a) {
            for (let s = t; s < (a || m.length - 1); s += 1) m[s].upgrade(e)
          }
        }), w = e => {
          let t, a = async () => (t || (t = await y()), t);
          return {
            getState: async () => {
              let t = await a();
              return (await t.getAllFromIndex(v, "gameId", e)).reduce((e, t) => (e[t.gameKey] = t.value, e), {})
            },
            setItems: async t => {
              let s = (await a()).transaction(v, "readwrite");
              return Object.keys(t).forEach(a => {
                s.store.put({
                  value: t[a],
                  gameId: e,
                  gameKey: a
                })
              }), s.done
            },
            deleteKeys: async t => {
              let s = (await a()).transaction(v, "readwrite");
              return t.forEach(t => {
                s.store.delete([e, t])
              }), s.done
            }
          }
        }, _ = (e, t) => {
          let a = e.data;
          return e.errors.length && (a = {
            status: "FAILED",
            error: e.errors.join(", ")
          }), {
            type: "in-game-payments",
            action: p.purchaseStatus,
            originalMessageEvent: t,
            payload: a
          }
        };
      class f {
        bus;
        constructor() {
          this.bus = new EventTarget
        }
        dispatch(e, t) {
          this.bus.dispatchEvent(new CustomEvent(e, {
            detail: t
          }))
        }
        addEventListener(e, t) {
          this.bus.addEventListener(e, e => {
            t(e)
          })
        }
        removeEventListener(e, t) {
          this.bus.removeEventListener(e, e => {
            t(e)
          })
        }
      }
      class C {
        currentLanguage;
        constructor(e) {
          this.currentLanguage = e
        }
        handleMessage(e) {
          return e.data.action === p.getPlatformInfo ? {
            action: p.platformInfo,
            originalMessageEvent: e,
            payload: {
              language: this.currentLanguage
            }
          } : {
            action: p.unknownMessageType,
            originalMessageEvent: e,
            payload: {
              error: `Unknown message action "${e.data.action}"`
            },
            type: "error"
          }
        }
      }
      let b = "GameEvents";
      class H {
        boundMessageHandler;
        boundGameAdHandlerCallback;
        gameAdHandler;
        userService;
        platformService;
        storageMessageHandler;
        inGamePaymentsMessageHandler;
        cloudSaveMessageHandler;
        onLogin;
        onGameStart;
        onGameStartCalled = !1;
        boundStickyRecalculateBanner;
        eventBus = new f;
        constructor(e) {
          let {
            userService: t,
            storageMessageHandler: a,
            gameAdHandler: s,
            inGamePaymentsMessageHandler: r,
            cloudSaveMessageHandler: n,
            onLogin: i,
            onGameStart: l
          } = e;
          this.userService = t, this.platformService = new C(e.currentLanguage), this.storageMessageHandler = a, this.inGamePaymentsMessageHandler = r, this.cloudSaveMessageHandler = n, this.onLogin = i, this.onGameStart = l, this.gameAdHandler = s, this.boundGameAdHandlerCallback = this.gameAdHandlerCallback.bind(this), this.gameAdHandler.eventBus.addEventListener("adMessage", this.boundGameAdHandlerCallback), this.boundMessageHandler = this.messageHandler.bind(this), window.addEventListener("message", this.boundMessageHandler)
        }
        destroy() {
          window.removeEventListener("message", this.boundMessageHandler), this.gameAdHandler.eventBus.removeEventListener("adMessage", this.boundGameAdHandlerCallback), this.boundStickyRecalculateBanner && window.screen.orientation.removeEventListener("change", this.boundStickyRecalculateBanner)
        }
        messageHandler(e) {
          if (e.data.source !== b || !e.source) return;
          let {
            action: t,
            type: a
          } = e.data;
          switch (this.eventBus.dispatch(a, e.data), console.info(t, a), a) {
            case "liveness":
              this.onGameStartCalled || (this.onGameStart(), this.onGameStartCalled = !0), this.sendMessage({
                action: p.pong,
                originalMessageEvent: e
              });
              break;
            case "adv":
              this.gameAdHandler.handleMessage(e);
              break;
            case "storage":
              this.storageMessageHandler(e).then(e => {
                e && this.sendMessage(e)
              });
              break;
            case "user":
              this.userService?.handleMessage(e, this.onLogin).then(e => {
                e && this.sendMessage(e)
              });
              break;
            case "in-game-payments":
              this.inGamePaymentsMessageHandler(e).then(e => {
                this.sendMessage(e)
              });
              break;
            case "cloud-save":
              this.cloudSaveMessageHandler(e).then(e => {
                e && this.sendMessage(e)
              });
              break;
            case "platform":
              this.sendMessage(this.platformService.handleMessage(e));
              break;
            default:
              let s;
              this.sendMessage((s = `Unknown message type "${a}"`, {
                action: p.unknownMessageType,
                originalMessageEvent: e,
                payload: {
                  error: s
                },
                type: "error"
              }))
          }
        }
        sendMessage({
          action: e,
          originalMessageEvent: t,
          payload: a,
          type: s
        }) {
          console.info(e, s, a);
          let r = {
            action: e,
            id: `${Date.now()}-${Math.random()}`,
            payload: a || {},
            responseToId: t.data.id,
            source: b,
            type: s || t.data.type,
            ver: 1
          };
          t.source.postMessage(r, "*"), this.eventBus.dispatch(r.type, r)
        }
        gameAdHandlerCallback(e) {
          e.detail && this.sendMessage(e.detail)
        }
      }
      a(4912), a(78), a(1416), a(9975), a(1998), a(8023), a(7527), a(4749), a(7881), a(9365), a(2592), a(1819), a(5614), a(7628);
      var k = a(2659);
      let M = {
        interstitial_preroll: {
          nextType: "interstitial_preroll_2",
          conditions: {
            maxDurationSec: 10,
            providers: [k.bu.GOOGLE_INSTREAM],
            platforms: ["desktop"]
          }
        },
        rewarded: {
          nextType: "rewarded_2",
          conditions: {
            maxDurationSec: 25,
            providers: [k.bu.GOOGLE_INSTREAM],
            platforms: ["desktop"]
          }
        }
      };
      a(8321), a(3375);
      var S = a(9253);
      class $ extends EventTarget {
        config;
        adService;
        type;
        platform;
        banners = [];
        currentIndex = 0;
        constructor(e, t, a, s) {
          super(), this.config = e, this.adService = t, this.type = a, this.platform = s
        }
        dispatch(e, t) {
          this.dispatchEvent(new CustomEvent(e, {
            detail: {
              totalAds: this.banners.length,
              currentAdIndex: this.currentIndex,
              banner: this.banners.at(this.currentIndex),
              ...t
            }
          }))
        }
        async handleNextBanner(e, t) {
          let a = this.config[t];
          if (a && (!a.conditions.maxDurationSec || e.instreamDuration && !(e.instreamDuration >= a.conditions.maxDurationSec)) && (!a.conditions.providers || a.conditions.providers.includes(e.provider)) && (!a.conditions.platforms || a.conditions.platforms.includes(this.platform))) try {
            let e = await this.loadBanner(a.nextType, !1);
            e.provider === k.bu.GOOGLE_INSTREAM && (this.banners.push(e), this.dispatch("update"))
          } catch {}
        }
        setHandlers(e) {
          e.addEventListener("closed", () => {
            "rewarded" === this.type && this.currentIndex > 0 && this.currentIndex === this.banners.length - 1 && this.dispatch("rewarded"), this.dispatch("banner_closed");
            let e = this.banners[this.currentIndex + 1];
            e ? (this.currentIndex += 1, this.showBanner(e)) : this.dispatch("closed")
          }), e.addEventListener("rewarded", () => {
            1 === this.banners.length && this.dispatch("rewarded")
          }), e.addEventListener("rendered", () => {
            0 === this.currentIndex && this.dispatch("rendered")
          }), e.addEventListener("viewable", () => {
            this.dispatch("update"), 0 === this.currentIndex && this.dispatch("viewable")
          }), e.addEventListener("timer", e => {
            this.dispatch("timer", {
              secondsLeft: e.detail?.secondsLeft
            })
          }), e.addEventListener("clicked", () => {
            this.dispatch("clicked")
          })
        }
        async loadBanner(e, t) {
          let a = await this.adService.requestOutOfPageAd(e),
            {
              promise: s,
              resolve: r,
              reject: n
            } = Promise.withResolvers(),
            i = () => {
              t && this.dispatch("ready"), this.handleNextBanner(a, e), r(a)
            },
            l = () => {
              t && (this.dispatch("empty"), n(Error("No ads available")))
            };
          return a.addEventListener("empty", l), a.state === S.qc.ready ? i() : a.state === S.qc.empty ? l() : a.addEventListener("ready", i), s
        }
        showBanner(e) {
          this.setHandlers(e), e.show()
        }
        async load() {
          let e = await this.loadBanner(this.type, !0);
          this.banners.push(e)
        }
        show() {
          this.showBanner(this.banners[0])
        }
        addEventListener(...e) {
          super.addEventListener(...e)
        }
        removeEventListener(...e) {
          super.removeEventListener(...e)
        }
      }
      var E = a(4423),
        A = a(7649);
      class V {
        adService;
        logEvent;
        platform;
        options;
        isShowingFullscreenAd = !1;
        banners = new Map;
        originalMessages = new Map;
        lastShownTimestamps = new Map;
        initTime;
        eventBus = new f;
        constructor(e, t, a, s = {
          skipInterstitials: !1
        }) {
          this.adService = e, this.logEvent = t, this.platform = a, this.options = s, this.initTime = Date.now()
        }
        refreshInitTime() {
          this.initTime = Date.now()
        }
        async handleMessage(e) {
          switch (this.originalMessages.set(e.data.id, e), e.data.action) {
            case "setBannerAdvSettings":
              this.eventBus.dispatch("adMessage", {
                action: A.U5.setBannerAdvSettings,
                originalMessageEvent: e,
                payload: {},
                type: "adv"
              });
              break;
            case "preloadInterstitial":
              await this.preloadAd("interstitial", e.data.id);
              break;
            case "preloadRewarded":
              await this.preloadAd("rewarded", e.data.id);
              break;
            case "showInterstitial":
              await this.showAd("interstitial", e.data.id);
              break;
            case "showRewarded":
              await this.showAd("rewarded", e.data.id);
              break;
            default:
              this.eventBus.dispatch("adMessage", {
                originalMessageEvent: e,
                payload: {
                  error: `Unknown message action "${e.data.action}"`
                },
                type: "error"
              }), this.originalMessages.delete(e.data.id)
          }
        }
        async showPreroll() {
          let e = "PREROLL_MESSAGE_ID";
          this.originalMessages.set(e, {}), await this.showAd("interstitial_preroll", e)
        }
        validateAdDisplayConditions(e, t) {
          let a = Date.now(),
            s = this.lastShownTimestamps.get("interstitial_preroll"),
            r = this.lastShownTimestamps.get(e);
          if ("interstitial" === e) {
            if (s && a - s < 2e4 || a - this.initTime < 1e4) return this.fakeBannerOpening(t), "EARLY_INTERSTITIAL";
            if (this.options.skipInterstitials) return this.triggerMessage({
              status: "error",
              error: "Skip this ad type"
            }, t), "SKIPPED_INTERSTITIAL"
          }
          return r && a - r < 5e3 ? (this.triggerMessage({
            status: "error",
            error: "Too many requests for this ad type"
          }, t), "TOO_MANY_REQUESTS") : this.isShowingFullscreenAd ? (this.triggerMessage({
            status: "error",
            error: "Another ad is already open"
          }, t), "AD_ALREADY_OPEN") : "ok"
        }
        async showAd(e, t) {
          let a = this.validateAdDisplayConditions(e, t);
          if ("ok" !== a) return void this.logEvent({
            event: "custom_event",
            eventName: "in_game_ad_not_requested",
            adPlacement: e,
            action: a
          });
          this.dispatchAdStateChanged("start", e);
          let s = (0, E.HT)(1800),
            r = this.banners.get(e) || await this.preloadAd(e, t);
          if (!r) {
            this.isShowingFullscreenAd = !1;
            return
          }
          this.listenToRenderedBannerEvents(r, e, t), this.isShowingFullscreenAd = !0, r.addEventListener("empty", () => {
            this.isShowingFullscreenAd = !1, this.triggerMessage({
              status: "close"
            }, t)
          }), await s;
          try {
            r.show()
          } catch {
            this.dispatchAdStateChanged("errored", e)
          }
          this.banners.delete(e)
        }
        async preloadAd(e, t) {
          try {
            if (await this.adService.serviceReadyPromise, !this.originalMessages.get(t)) throw Error("Message not found");
            this.triggerMessage({
              status: "start"
            }, t);
            let a = new $(M, this.adService, e, this.platform);
            return a.addEventListener("empty", () => {
              this.triggerMessage({
                status: "empty"
              }, t), this.dispatchAdStateChanged("empty", e)
            }), await a.load(), this.triggerMessage({
              status: "done"
            }, t), this.banners.set(e, a), a
          } catch {
            return this.triggerMessage({
              status: "error",
              error: "Cannot preload the ad"
            }, t), this.dispatchAdStateChanged("errored", e), this.originalMessages.delete(t), null
          }
        }
        listenToRenderedBannerEvents(e, t, a) {
          this.originalMessages.get(a) && (e.addEventListener("rewarded", () => {
            this.triggerMessage({
              status: "rewarded"
            }, a)
          }), e.addEventListener("clicked", () => {
            this.triggerMessage({
              status: "clicked"
            }, a)
          }), e.addEventListener("timer", e => {
            this.dispatchAdStateChanged("timer", t, {
              secondsLeft: e.detail?.secondsLeft
            })
          }), e.addEventListener("closed", ({
            detail: e
          }) => {
            let s = Date.now();
            this.lastShownTimestamps.set(t, s), this.triggerMessage({
              status: "close"
            }, a), this.isShowingFullscreenAd = !1, this.originalMessages.delete(a), this.dispatchAdStateChanged("closed", t), e?.banner && this.logEvent({
              event: "custom_event",
              eventName: "ad_close",
              adUnit: e?.banner.adUnit,
              adPlacement: t
            })
          }), e.addEventListener("rendered", () => {
            this.triggerMessage({
              status: "open"
            }, a)
          }), e.addEventListener("viewable", ({
            detail: e
          }) => {
            this.triggerMessage({
              status: "show"
            }, a), this.dispatchAdStateChanged("opened", t, {
              provider: e?.banner?.provider
            })
          }), e.addEventListener("update", ({
            detail: e
          }) => {
            this.dispatchAdStateChanged("update", t, {
              totalAds: e?.totalAds ?? 1,
              currentAd: (e?.currentAdIndex || 0) + 1
            })
          }), e.addEventListener("banner_closed", ({
            detail: e
          }) => {
            "interstitial_preroll" === t && e?.banner && this.logEvent({
              event: "custom_event",
              eventName: "preroll_end",
              adUnit: e?.banner.adUnit,
              instreamDuration: e?.banner.instreamDuration,
              watchedDuration: e?.banner.watchedDuration
            })
          }))
        }
        triggerMessage(e, t) {
          let a = this.originalMessages.get(t);
          a?.data && this.eventBus.dispatch("adMessage", {
            action: a.data.action,
            type: "adv",
            originalMessageEvent: a,
            payload: e
          })
        }
        fakeBannerOpening(e) {
          this.triggerMessage({
            status: "start"
          }, e), setTimeout(() => this.triggerMessage({
            status: "done"
          }, e), 300), setTimeout(() => this.triggerMessage({
            status: "open"
          }, e), 600), setTimeout(() => this.triggerMessage({
            status: "show"
          }, e), 1e3), setTimeout(() => {
            this.triggerMessage({
              status: "close"
            }, e), this.originalMessages.delete(e)
          }, 3e3)
        }
        dispatchAdStateChanged(e, t, a = {}) {
          this.eventBus.dispatch("adStateChanged", {
            action: e,
            adType: t,
            ...a
          })
        }
      }
      a(696), a(6590), a(4390), a(5658), a(5313), a(3152), a(7148), a(7654), a(8248), a(5099), a(7303), a(8441), a(4006), a(7913), a(3579), a(7810), a(3044), a(3694), a(7886), a(5451), a(6015), a(8334), a(4880), a(5643), a(9761), a(8558), a(7980), a(6236), a(2833), a(7906), a(2114), a(2613), a(874), a(2240), a(8675), a(6857), a(8137), a(6501), a(6834), a(1549), a(3485), a(9929), a(6301), a(793), a(102);
      var P = a(6897),
        Z = a(9925);
      async function L(e) {
        let t = atob(e),
          a = t.length,
          s = new Uint8Array(a);
        for (let e = 0; e < a; e++) s[e] = t.charCodeAt(e);
        let r = new DecompressionStream("gzip"),
          n = new Response(new Blob([s]).stream().pipeThrough(r));
        return await n.text()
      }
      class I {
        sdkPromise;
        reportedStat = new Set;
        enabled;
        gameHRU;
        storageMessageHandler;
        constructor({
          queryParams: e,
          gameHRU: t,
          storageMessageHandler: a
        }) {
          this.enabled = "p_a68073c6-abde-4a55-a494-5ddb9ec8baa0" === e[P.Ty], this.gameHRU = t, this.storageMessageHandler = a, this.sdkPromise = Promise.resolve(void 0), this.enabled && (this.sdkPromise = (0, Z.v)({
            src: "https://ssl.minijuegosgratis.com/lechuck/js/latest.js",
            useExisting: !0
          }).then(() => {
            if (!window.LeChuckAPI) throw Error("Cannot instantiate Minijuego's LeChuckAPI");
            return new window.LeChuckAPI({})
          }))
        }
        async listen(e) {
          if (this.enabled) {
            e.addEventListener("storage", this.handleMessage), e.addEventListener("cloud-save", this.handleMessage);
            let t = await this.storageMessageHandler({
                data: {
                  action: p.getState
                }
              }),
              a = t?.payload;
            a?.state && this.handleMessage(new CustomEvent("storage", {
              detail: {
                type: "storage",
                payload: a.state
              }
            }))
          }
        }
        async reportStat(e, t) {
          let a = await this.sdkPromise,
            s = `${e}-${t}`;
          this.reportedStat.has(s) || (this.reportedStat.add(s), console.info(`[PG<->MINIPLAY] Reporting stat ${e}: ${t}`), a?.stat.put(e => {
            console.info("window.lechuck.stat.put response", e)
          }, e, t))
        }
        handleMessage = async e => {
          let t = e.detail;
          if ("type" in t && "storage" === t.type) {
            let e = t.payload,
              a = {
                "mr-racer-car-racing": this.handleMRRacer,
                "geometry-arrow": this.handleGeometryArrow,
                "geometry-arrow-2": this.handleGeometryArrow2,
                "gangster-island-crime-city": this.handleGangstaIsland,
                "rooftop-run": this.handleRooftopRun,
                "zombie-space-episode-ii": this.handleZombieSpaceEpisodeII,
                "crazy-bus-station": this.handleCrazyBusStation,
                "archery-ragdoll": this.handleArcheryRagdoll
              };
            if (this.gameHRU in a) try {
              await a[this.gameHRU](e)
            } catch (e) {
              console.error("Error during message handle", t, e)
            }
          }
        };
        handleMRRacer = e => {
          let t = JSON.parse(e.mrr);
          t.carsUnlocked.split("|").forEach((e, t) => {
            "0" === e && this.reportStat(`carsUnlocked${t+1}`, 1)
          }), t.locationLockStatus.split("|").forEach((e, t) => {
            "0" === e && this.reportStat(`locationUnlocked${t+1}`, 1)
          }), t.achievementsUnlocked.split("|").forEach((e, t) => {
            "1" === e && this.reportStat(`achievementUnlocked${t+1}`, 1)
          }), this.reportStat("maxSpeed", Number(t.maxSpeed))
        };
        handleGeometryArrow = e => {
          Object.entries(e).forEach(([e, t]) => {
            let a = e.match(/level(\d+)_progress/);
            a && "1" === t && this.reportStat(`lvl${a[1]}`, 1)
          })
        };
        handleGeometryArrow2 = e => {
          Object.entries(e).forEach(([e, t]) => {
            let a = e.match(/level(\d+)_progress/);
            if (a && "1" === t) {
              let e = Number(a[1]) + 1;
              this.reportStat(`lvl${e}`, 1)
            }
          }), e.global_score && this.reportStat("globalScore", Number(e.global_score)), e.total_deaths && this.reportStat("totalDeaths", Number(e.total_deaths))
        };
        handleGangstaIsland = async e => {
          if ("product_chunks_pg" in e) {
            let t = "";
            for (let a = 0; a < Number(e.product_chunks_pg); a++) t += e[`product_chunk_pg_${a}`];
            JSON.parse(await L(t)).tileSaves.forEach((e, t) => {
              let a = e.values.filter(e => e.unlocked).length;
              a > 0 && this.reportStat(`level_${t+1}_progress`, a)
            })
          }
        };
        handleRooftopRun = e => {
          e.level && Number(e.level) > 0 && this.reportStat("level", Number(e.level)), e.coins && this.reportStat("coins", Number(e.coins))
        };
        handleZombieSpaceEpisodeII = e => {
          if (!e.savesData) return;
          let t = JSON.parse(e.savesData.replaceAll('{"Key":"","Value":0,"StrValue":""},', "")),
            a = t.keys.find(e => "MONEY" === e.Key)?.Value;
          a && this.reportStat("coins", Number(a));
          let s = t.keys.find(e => "progress_level" === e.Key)?.Value;
          s && s > 1 && this.reportStat("level", s - 1)
        };
        handleCrazyBusStation = e => {
          e.COINS && this.reportStat("coins", Number(e.COINS)), e.VIEW_LEVEL && Number(e.VIEW_LEVEL) > 1 && this.reportStat("level", Number(e.VIEW_LEVEL) - 1)
        };
        handleArcheryRagdoll = e => {
          if (!e.savedArcher) return;
          let t = JSON.parse(e.savedArcher);
          t?.level_player && t.level_player > 1 && this.reportStat("level", t.level_player - 1), t?.wave > 1 && t.wave > 1 && this.reportStat("waves", t.wave - 1)
        }
      }
      var T = a(156);
      let U = ["hazmob-fps-online-shooter"],
        O = {
          name: null,
          id: null,
          photos: [],
          isAuthorized: !1,
          goldBalance: 0
        },
        x = e => ({
          action: p.userInfo,
          type: "user",
          payload: e
        }),
        B = (e, t) => ({
          ...t,
          originalMessageEvent: e
        });
      class z {
        authorizeUser;
        anonymousProfile;
        signedRequest;
        constructor(e) {
          this.authorizeUser = e.authorizeUser, this.signedRequest = e.signedRequest, this.anonymousProfile = U.includes(e.gameHru) ? (e => ({
            name: `Guest-${e.split("-")[0]}`,
            id: e,
            photos: [],
            isAuthorized: !1,
            goldBalance: 0
          }))(e.auid) : O
        }
        async getUser() {
          let {
            data: e
          } = await this.signedRequest("/api/v1/user/gameProfile");
          return e ? x(e) : x(this.anonymousProfile)
        }
        async handleMessage(e, t) {
          let a;
          switch (e.data.action) {
            case p.getUser:
              return B(e, await this.getUser());
            case p.authorizeUser:
              if (!(a = await this.getUser()).payload.isAuthorized) try {
                await this.authorizeUser(), (a = await this.getUser()) && t()
              } catch (e) {
                console.info(e), a = x(this.anonymousProfile)
              }
              return B(e, a);
            default:
              return B(e, {
                action: p.unknownMessageType,
                payload: {
                  error: `Unknown message action "${e.data.action}"`
                },
                type: "error"
              })
          }
        }
      }
      var R = a(730),
        j = a(407),
        D = a(4351),
        q = a(6494),
        N = a(8518),
        G = a(7783),
        W = a(7362),
        F = a(1920),
        K = a(2385),
        J = a(8284),
        Y = a(7949),
        X = (0, r.aZ)({
          __name: "AdFlipCards",
          props: {
            frontDurationMs: {
              default: 15e3
            },
            backDurationMs: {
              default: 6e4
            },
            adMode: {},
            sizes: {}
          },
          setup(e) {
            let t = (0, r.iH)(!1),
              a = (0, r.iH)(!1),
              s = (0, r.iH)(null),
              n = (0, r.iH)(null),
              i = (0, r.Fl)(() => "widget" === e.adMode ? "widget_sticky_mobile" : "sticky_mobile"),
              l = (0, r.Fl)(() => "widget" === e.adMode ? "widget_sticky_tablet" : "sticky_tablet");

            function o(t) {
              d(), s.value = setTimeout(() => {
                a.value = !0
              }, t ?? e.frontDurationMs)
            }

            function d() {
              clearTimeout(s.value), clearTimeout(n.value)
            }

            function c(s) {
              s ? (t.value = !0, n.value = setTimeout(() => {
                t.value = !1
              }, e.backDurationMs)) : (a.value = !1, t.value = !1, o(6e4))
            }

            function u() {
              t.value || (a.value = !1, o())
            }
            return (0, r.bv)(() => {
              o()
            }), (0, r.Jd)(() => {
              d()
            }), (e, s) => ((0, r.wg)(), (0, r.iD)("div", {
              class: (0, r.C_)(e.$style.container)
            }, [(0, r._)("div", {
              class: (0, r.C_)([e.$style.front, t.value && e.$style.hideUnder])
            }, [(0, r.WI)(e.$slots, "front")], 2), (0, r._)("div", {
              class: (0, r.C_)([e.$style.back, t.value && e.$style.visible]),
              onTransitionend: u
            }, [a.value ? ((0, r.wg)(), (0, r.j4)(Y.Z, {
              key: 0,
              class: (0, r.C_)(e.$style.mobile),
              type: i.value,
              "onUpdate:visible": c
            }, null, 8, ["class", "type"])) : (0, r.kq)("", !0), a.value ? ((0, r.wg)(), (0, r.j4)(Y.Z, {
              key: 1,
              class: (0, r.C_)(e.$style.tablet),
              type: l.value,
              "onUpdate:visible": c
            }, null, 8, ["class", "type"])) : (0, r.kq)("", !0)], 34)], 2))
          }
        }),
        Q = a(3744);
      let ee = {},
        et = {};
      et.$style || (et.$style = {}), et.$style.style0 = {
        container: "dzj3Y",
        front: "coR4A",
        back: "Hrpth",
        hideUnder: "gJKFU",
        visible: "QiqMk",
        tablet: "VXt1x",
        mobile: "VcoyI"
      }, ee.$style = Object.values(et.$style).reduce((e, t) => Object.assign(e, t), {});
      let ea = (0, Q.default)(X, [
        ["__cssModules", ee]
      ]);
      var es = a(6049),
        er = a(2413),
        en = a.p + "static/image/img-backpack.3b9dcd33.webp",
        ei = a.p + "static/image/img-ball.8c855712.webp",
        el = a.p + "static/image/img-gum.e58f7439.webp",
        eo = a.p + "static/image/img-heart.81e13f21.webp",
        ed = a.p + "static/image/img-pigeon.bcc0c14e.webp";
      let ec = ["src", "alt"];
      var eu = (0, r.aZ)({
        __name: "ErrorState",
        props: {
          adType: {}
        },
        setup(e) {
          let t = (0, er.y)(),
            a = (0, r.Fl)(() => "rewarded" === e.adType ? t("brandPreloader.reward") : t("brandPreloader.adSkipped")),
            s = (0, r.Fl)(() => {
              let e = [en, ei, el, eo, ed];
              return e[Math.floor(Math.random() * e.length)]
            });
          return (e, t) => ((0, r.wg)(), (0, r.iD)("div", {
            class: (0, r.C_)(e.$style.wrapper),
            "data-interface-section": "brand-preloader-error-state"
          }, [(0, r._)("img", {
            src: s.value,
            alt: a.value,
            class: (0, r.C_)([e.$style.image, e.$style.image_animated])
          }, null, 10, ec), (0, r.Wm)(es.Z, {
            type: "label",
            size: "l",
            class: (0, r.C_)(e.$style.label)
          }, {
            default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(a.value), 1)]),
            _: 1
          }, 8, ["class"]), (0, r.Wm)(l.Z, {
            size: "m",
            interfaceTarget: "brand-preloader-continue-button"
          }, {
            default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.$tr("brandPreloader.continuePlaying")), 1)]),
            _: 1
          })], 2))
        }
      });
      let eg = {},
        ep = {};
      ep.$style || (ep.$style = {}), ep.$style.style0 = {
        wrapper: "e3M5B",
        label: "QYk1d",
        image: "pkJuu",
        image_animated: "UibAa",
        imageAnimated: "UibAa",
        bounceIn: "oDNm6"
      }, eg.$style = Object.values(ep.$style).reduce((e, t) => Object.assign(e, t), {});
      let eh = (0, Q.default)(eu, [
          ["__cssModules", eg]
        ]),
        ev = {
          id: "logoClip"
        },
        em = ["width"];
      var ey = (0, r.aZ)({
        __name: "AffiliateProgress",
        props: {
          fillWidth: {}
        },
        setup: e => (e, t) => ((0, r.wg)(), (0, r.iD)("svg", {
          viewBox: "0 0 276 49",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          class: (0, r.C_)(e.$style.progress)
        }, [(0, r._)("defs", null, [(0, r._)("clipPath", ev, [(0, r._)("rect", {
          x: "0",
          y: "0",
          width: e.fillWidth,
          height: "49"
        }, null, 8, em)])]), t[0] || (t[0] = (0, r.uE)('<g fill="var(--carbon-500)"><path d="M0 42.7052V14.1402H10.9619C17.0147 14.1402 21.9238 19.0438 21.9238 25.0901C21.9238 31.1364 17.0147 36.0401 10.9619 36.0401H7.14905V42.7052H0ZM10.247 20.8053H7.14905V29.3749H10.247C12.8206 29.3749 14.5364 27.4705 14.5364 25.0901C14.5364 22.7097 12.8206 20.8053 10.247 20.8053Z"></path><path d="M32.5197 36.0401H25.0847V7.47497H32.5197V36.0401Z"></path><path d="M57.5914 36.0401H46.6295C40.5766 36.0401 35.6676 31.1364 35.6676 25.0901C35.6676 19.0438 40.5766 14.1402 46.6295 14.1402H57.5914V36.0401ZM47.3444 29.3749H50.4423V20.8053H47.3444C44.7707 20.8053 43.055 22.7097 43.055 25.0901C43.055 27.4705 44.7707 29.3749 47.3444 29.3749Z"></path><path d="M71.8095 47.4661H61.8961V40.8009H71.3329C73.8589 40.8009 75.7176 38.9442 75.7176 36.4209V36.0401H61.8961V14.1402H69.0452V29.3749H75.7176V14.1402H82.8667V36.897C82.8667 42.9909 78.196 47.4661 71.8095 47.4661Z"></path><path d="M97.0803 14.1402H108.995V36.4685C108.995 42.8481 104.372 47.4661 97.9859 47.4661H88.5015V40.3248H97.9382C100.178 40.3248 101.846 38.6585 101.846 36.4209V36.0401H97.0803C91.0275 36.0401 86.1184 31.1364 86.1184 25.0901C86.1184 19.0438 91.0275 14.1402 97.0803 14.1402ZM93.5058 25.0901C93.5058 27.4705 95.2216 29.3749 97.7952 29.3749H101.846V20.8053H97.7952C95.2216 20.8053 93.5058 22.7097 93.5058 25.0901Z"></path><path d="M133.962 36.0401H123.001C116.948 36.0401 112.039 31.1364 112.039 25.0901C112.039 19.0438 116.948 14.1402 123.001 14.1402H133.962V36.0401ZM123.715 29.3749H126.813V20.8053H123.715C121.142 20.8053 119.426 22.7097 119.426 25.0901C119.426 27.4705 121.142 29.3749 123.715 29.3749Z"></path><path d="M145.416 36.0401H138.267V14.1402H160.429C165.815 14.1402 170.2 18.5201 170.2 23.8999V36.0401H163.051V23.4238C163.051 21.9956 161.859 20.8053 160.429 20.8053H157.808V36.0401H150.659V20.8053H145.416V36.0401Z"></path><path d="M194.93 36.0401H183.968C177.915 36.0401 173.006 31.1364 173.006 25.0901C173.006 19.0438 177.915 14.1402 183.968 14.1402H194.93V36.0401ZM184.683 29.3749H187.781V20.8053H184.683C182.109 20.8053 180.393 22.7097 180.393 25.0901C180.393 27.4705 182.109 29.3749 184.683 29.3749Z"></path><path d="M230.243 20.8053V29.3749H227.145C224.572 29.3748 222.856 27.4705 222.856 25.0901C222.856 22.7097 224.572 20.8053 227.145 20.8053H230.243Z"></path><path d="M255.901 20.8053V29.3749H252.803C250.23 29.3749 248.514 27.4705 248.514 25.0901C248.514 22.7097 250.23 20.8053 252.803 20.8053H255.901Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M275.03 48.0267H205.012V0H275.03V48.0267ZM226.43 14.1402C220.377 14.1402 215.468 19.0438 215.468 25.0901C215.468 31.1363 220.377 36.0401 226.43 36.0401H237.392V14.1402H226.43ZM255.901 7.47497V14.1402H252.088C246.036 14.1402 241.127 19.0438 241.127 25.0901C241.127 31.1363 246.036 36.0401 252.088 36.0401H263.05V7.47497H255.901Z"></path></g><g clip-path="url(#logoClip)" fill="var(--purple-500)"><path d="M0 42.7052V14.1402H10.9619C17.0147 14.1402 21.9238 19.0438 21.9238 25.0901C21.9238 31.1364 17.0147 36.0401 10.9619 36.0401H7.14905V42.7052H0ZM10.247 20.8053H7.14905V29.3749H10.247C12.8206 29.3749 14.5364 27.4705 14.5364 25.0901C14.5364 22.7097 12.8206 20.8053 10.247 20.8053Z"></path><path d="M32.5197 36.0401H25.0847V7.47497H32.5197V36.0401Z"></path><path d="M57.5914 36.0401H46.6295C40.5766 36.0401 35.6676 31.1364 35.6676 25.0901C35.6676 19.0438 40.5766 14.1402 46.6295 14.1402H57.5914V36.0401ZM47.3444 29.3749H50.4423V20.8053H47.3444C44.7707 20.8053 43.055 22.7097 43.055 25.0901C43.055 27.4705 44.7707 29.3749 47.3444 29.3749Z"></path><path d="M71.8095 47.4661H61.8961V40.8009H71.3329C73.8589 40.8009 75.7176 38.9442 75.7176 36.4209V36.0401H61.8961V14.1402H69.0452V29.3749H75.7176V14.1402H82.8667V36.897C82.8667 42.9909 78.196 47.4661 71.8095 47.4661Z"></path><path d="M97.0803 14.1402H108.995V36.4685C108.995 42.8481 104.372 47.4661 97.9859 47.4661H88.5015V40.3248H97.9382C100.178 40.3248 101.846 38.6585 101.846 36.4209V36.0401H97.0803C91.0275 36.0401 86.1184 31.1364 86.1184 25.0901C86.1184 19.0438 91.0275 14.1402 97.0803 14.1402ZM93.5058 25.0901C93.5058 27.4705 95.2216 29.3749 97.7952 29.3749H101.846V20.8053H97.7952C95.2216 20.8053 93.5058 22.7097 93.5058 25.0901Z"></path><path d="M133.962 36.0401H123.001C116.948 36.0401 112.039 31.1364 112.039 25.0901C112.039 19.0438 116.948 14.1402 123.001 14.1402H133.962V36.0401ZM123.715 29.3749H126.813V20.8053H123.715C121.142 20.8053 119.426 22.7097 119.426 25.0901C119.426 27.4705 121.142 29.3749 123.715 29.3749Z"></path><path d="M145.416 36.0401H138.267V14.1402H160.429C165.815 14.1402 170.2 18.5201 170.2 23.8999V36.0401H163.051V23.4238C163.051 21.9956 161.859 20.8053 160.429 20.8053H157.808V36.0401H150.659V20.8053H145.416V36.0401Z"></path><path d="M194.93 36.0401H183.968C177.915 36.0401 173.006 31.1364 173.006 25.0901C173.006 19.0438 177.915 14.1402 183.968 14.1402H194.93V36.0401ZM184.683 29.3749H187.781V20.8053H184.683C182.109 20.8053 180.393 22.7097 180.393 25.0901C180.393 27.4705 182.109 29.3749 184.683 29.3749Z"></path><path d="M230.243 20.8053V29.3749H227.145C224.572 29.3748 222.856 27.4705 222.856 25.0901C222.856 22.7097 224.572 20.8053 227.145 20.8053H230.243Z"></path><path d="M255.901 20.8053V29.3749H252.803C250.23 29.3749 248.514 27.4705 248.514 25.0901C248.514 22.7097 250.23 20.8053 252.803 20.8053H255.901Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M275.03 48.0267H205.012V0H275.03V48.0267ZM226.43 14.1402C220.377 14.1402 215.468 19.0438 215.468 25.0901C215.468 31.1363 220.377 36.0401 226.43 36.0401H237.392V14.1402H226.43ZM255.901 7.47497V14.1402H252.088C246.036 14.1402 241.127 19.0438 241.127 25.0901C241.127 31.1363 246.036 36.0401 252.088 36.0401H263.05V7.47497H255.901Z"></path></g>', 2))], 2))
      });
      let ew = {},
        e_ = {};
      e_.$style || (e_.$style = {}), e_.$style.style0 = {
        progress: "GDuyg"
      }, ew.$style = Object.values(e_.$style).reduce((e, t) => Object.assign(e, t), {});
      let ef = (0, Q.default)(ey, [
          ["__cssModules", ew]
        ]),
        eC = {
          id: "logoClip"
        },
        eb = ["width"];
      var eH = (0, r.aZ)({
        __name: "PortalProgress",
        props: {
          fillWidth: {}
        },
        setup: e => (e, t) => ((0, r.wg)(), (0, r.iD)("svg", {
          viewBox: "0 0 229 46",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          class: (0, r.C_)(e.$style.progress)
        }, [(0, r._)("defs", null, [(0, r._)("clipPath", eC, [(0, r._)("rect", {
          x: "0",
          y: "0",
          width: e.fillWidth,
          height: "46"
        }, null, 8, eb)])]), t[0] || (t[0] = (0, r.uE)('<g fill="var(--carbon-500)"><path d="M0 40.5238V7.66667H12.5415C19.4665 7.66667 25.0829 13.3071 25.0829 20.2619C25.0829 27.2167 19.4665 32.8571 12.5415 32.8571H8.17921V40.5238H0ZM11.7235 15.3333H8.17921V25.1905H11.7235C14.6681 25.1905 16.6311 23 16.6311 20.2619C16.6311 17.5238 14.6681 15.3333 11.7235 15.3333Z"></path><path d="M38.0602 32.8571H29.5538V0H38.0602V32.8571Z"></path><path d="M67.5991 32.8571H55.0576C48.1325 32.8571 42.5161 27.2167 42.5161 20.2619C42.5161 13.3071 48.1325 7.66667 55.0576 7.66667H67.5991V32.8571ZM55.8755 25.1905H59.4198V15.3333H55.8755C52.931 15.3333 50.968 17.5238 50.968 20.2619C50.968 23 52.931 25.1905 55.8755 25.1905Z"></path><path d="M84.7204 46H73.3786V38.3333H84.1752C87.0651 38.3333 89.1917 36.1976 89.1917 33.2952V32.8571H73.3786V7.66667H81.5578V25.1905H89.1917V7.66667H97.3709V33.8429C97.3709 40.8524 92.0272 46 84.7204 46Z"></path><path d="M114.487 7.66667H128.119V33.35C128.119 40.6881 122.83 46 115.523 46H104.672V37.7857H115.469C118.032 37.7857 119.94 35.869 119.94 33.2952V32.8571H114.487C107.562 32.8571 101.946 27.2167 101.946 20.2619C101.946 13.3071 107.562 7.66667 114.487 7.66667ZM110.398 20.2619C110.398 23 112.361 25.1905 115.305 25.1905H119.94V15.3333H115.305C112.361 15.3333 110.398 17.5238 110.398 20.2619Z"></path><path d="M157.538 32.8571H144.997C138.072 32.8571 132.456 27.2167 132.456 20.2619C132.456 13.3071 138.072 7.66667 144.997 7.66667H157.538V32.8571ZM145.815 25.1905H149.359V15.3333H145.815C142.87 15.3333 140.907 17.5238 140.907 20.2619C140.907 23 142.87 25.1905 145.815 25.1905Z"></path><path d="M171.497 32.8571H163.318V7.66667H188.674C194.835 7.66667 199.852 12.7048 199.852 18.8929V32.8571H191.673V18.3452C191.673 16.7024 190.309 15.3333 188.674 15.3333H185.674V32.8571H177.495V15.3333H171.497V32.8571Z"></path><path d="M229 32.8571H216.459C209.533 32.8571 203.917 27.2167 203.917 20.2619C203.917 13.3071 209.533 7.66667 216.459 7.66667H229V32.8571ZM217.276 25.1905H220.821V15.3333H217.276C214.332 15.3333 212.369 17.5238 212.369 20.2619C212.369 23 214.332 25.1905 217.276 25.1905Z"></path></g><g clip-path="url(#logoClip)" fill="var(--purple-500)"><path d="M0 40.5238V7.66667H12.5415C19.4665 7.66667 25.0829 13.3071 25.0829 20.2619C25.0829 27.2167 19.4665 32.8571 12.5415 32.8571H8.17921V40.5238H0ZM11.7235 15.3333H8.17921V25.1905H11.7235C14.6681 25.1905 16.6311 23 16.6311 20.2619C16.6311 17.5238 14.6681 15.3333 11.7235 15.3333Z"></path><path d="M38.0602 32.8571H29.5538V0H38.0602V32.8571Z"></path><path d="M67.5991 32.8571H55.0576C48.1325 32.8571 42.5161 27.2167 42.5161 20.2619C42.5161 13.3071 48.1325 7.66667 55.0576 7.66667H67.5991V32.8571ZM55.8755 25.1905H59.4198V15.3333H55.8755C52.931 15.3333 50.968 17.5238 50.968 20.2619C50.968 23 52.931 25.1905 55.8755 25.1905Z"></path><path d="M84.7204 46H73.3786V38.3333H84.1752C87.0651 38.3333 89.1917 36.1976 89.1917 33.2952V32.8571H73.3786V7.66667H81.5578V25.1905H89.1917V7.66667H97.3709V33.8429C97.3709 40.8524 92.0272 46 84.7204 46Z"></path><path d="M114.487 7.66667H128.119V33.35C128.119 40.6881 122.83 46 115.523 46H104.672V37.7857H115.469C118.032 37.7857 119.94 35.869 119.94 33.2952V32.8571H114.487C107.562 32.8571 101.946 27.2167 101.946 20.2619C101.946 13.3071 107.562 7.66667 114.487 7.66667ZM110.398 20.2619C110.398 23 112.361 25.1905 115.305 25.1905H119.94V15.3333H115.305C112.361 15.3333 110.398 17.5238 110.398 20.2619Z"></path><path d="M157.538 32.8571H144.997C138.072 32.8571 132.456 27.2167 132.456 20.2619C132.456 13.3071 138.072 7.66667 144.997 7.66667H157.538V32.8571ZM145.815 25.1905H149.359V15.3333H145.815C142.87 15.3333 140.907 17.5238 140.907 20.2619C140.907 23 142.87 25.1905 145.815 25.1905Z"></path><path d="M171.497 32.8571H163.318V7.66667H188.674C194.835 7.66667 199.852 12.7048 199.852 18.8929V32.8571H191.673V18.3452C191.673 16.7024 190.309 15.3333 188.674 15.3333H185.674V32.8571H177.495V15.3333H171.497V32.8571Z"></path><path d="M229 32.8571H216.459C209.533 32.8571 203.917 27.2167 203.917 20.2619C203.917 13.3071 209.533 7.66667 216.459 7.66667H229V32.8571ZM217.276 25.1905H220.821V15.3333H217.276C214.332 15.3333 212.369 17.5238 212.369 20.2619C212.369 23 214.332 25.1905 217.276 25.1905Z"></path></g>', 2))], 2))
      });
      let ek = {},
        eM = {};
      eM.$style || (eM.$style = {}), eM.$style.style0 = {
        progress: "xbIL4"
      }, ek.$style = Object.values(eM.$style).reduce((e, t) => Object.assign(e, t), {});
      let eS = (0, Q.default)(eH, [
        ["__cssModules", ek]
      ]);
      var e$ = (0, r.aZ)({
          __name: "Progress",
          props: {
            isPortal: {
              type: Boolean
            }
          },
          setup(e) {
            let t = (0, r.iH)(0),
              a = (0, r.Fl)(() => e.isPortal ? 229 : 276),
              s = (0, r.Fl)(() => a.value * t.value / 100);
            return (0, r.bv)(() => {
              {
                t.value = 0;
                let e = Date.now(),
                  a = () => {
                    let s = Math.min((Date.now() - e) / 2e3, 1);
                    t.value = 100 * (e => {
                      if (!(e <= .7)) return .4 + (1 - Math.pow(1 - (e - .7) / .3, 5)) * .6;
                      {
                        let t = e / .7;
                        return t * t * t * .4
                      }
                    })(s), s < 1 && requestAnimationFrame(a)
                  };
                requestAnimationFrame(a)
              }
            }), (e, t) => e.isPortal ? ((0, r.wg)(), (0, r.j4)(eS, {
              key: 0,
              fillWidth: s.value
            }, null, 8, ["fillWidth"])) : ((0, r.wg)(), (0, r.j4)(ef, {
              key: 1,
              fillWidth: s.value
            }, null, 8, ["fillWidth"]))
          }
        }),
        eE = (0, r.aZ)({
          __name: "BrandPreloader",
          props: {
            hasError: {
              type: Boolean
            },
            isPortal: {
              type: Boolean
            },
            adType: {}
          },
          emits: ["close"],
          setup(e, {
            emit: t
          }) {
            function a() {
              e.hasError && t("close")
            }
            return (e, t) => ((0, r.wg)(), (0, r.iD)("div", {
              class: (0, r.C_)([e.$style.preloader, {
                [e.$style.clickable]: e.hasError
              }]),
              onClick: a
            }, [e.hasError ? ((0, r.wg)(), (0, r.j4)(eh, {
              key: 0,
              adType: e.adType
            }, null, 8, ["adType"])) : ((0, r.wg)(), (0, r.j4)(e$, {
              key: 1,
              isPortal: e.isPortal
            }, null, 8, ["isPortal"]))], 2))
          }
        });
      let eA = {},
        eV = {};
      eV.$style || (eV.$style = {}), eV.$style.style0 = {
        preloader: "Bcvdv",
        clickable: "_Zkfq"
      }, eA.$style = Object.values(eV.$style).reduce((e, t) => Object.assign(e, t), {});
      let eP = (0, Q.default)(eE, [
        ["__cssModules", eA]
      ]);
      var eZ = a(2893),
        eL = (0, r.aZ)({
          __name: "DragnDropClose",
          props: {
            startPosition: {
              default: 0
            },
            startLandscapePosition: {},
            mode: {},
            onClick: {}
          },
          setup(e) {
            let t = (0, r.iH)(null),
              a = (0, r.iH)(e.startPosition),
              s = (0, r.iH)(!1),
              n = (0, r.iH)(0),
              i = (0, r.Fl)(() => "portal" === e.mode);

            function l(e) {
              if (!t?.value) return;
              let {
                clientY: a
              } = e.touches[0];
              s.value = !0, n.value = a - t.value.getBoundingClientRect().top, document.addEventListener("touchmove", o), document.addEventListener("touchend", c)
            }

            function o(e) {
              if (!s.value || !t?.value) return;
              e.preventDefault();
              let {
                clientY: r
              } = e.touches[0], i = t.value, l = document.body.getBoundingClientRect().height, o = i.offsetHeight, d = r - n.value;
              a.value = Math.min(l - o, d = Math.max(0, d))
            }

            function d() {
              screen.orientation.type.startsWith("landscape") ? a.value = e.startLandscapePosition ?? e.startPosition : a.value = e.startPosition
            }

            function c() {
              s.value = !1, document.removeEventListener("touchmove", o), document.removeEventListener("touchend", c)
            }
            return (0, r.bv)(() => {
              window.addEventListener("orientationchange", d)
            }), (0, r.Jd)(() => {
              document.removeEventListener("touchmove", o), document.removeEventListener("touchend", c), window.removeEventListener("orientationchange", d)
            }), (s, n) => ((0, r.wg)(), (0, r.iD)("button", {
              ref_key: "buttonRef",
              ref: t,
              class: (0, r.C_)([s.$style.button, i.value && s.$style.button_portal]),
              "data-interface-target": "close-game",
              style: (0, r.j5)({
                top: `${a.value}px`
              }),
              "aria-label": "Close game",
              onTouchstart: l,
              onClick: n[0] || (n[0] = (...t) => e.onClick && e.onClick(...t))
            }, [i.value ? ((0, r.wg)(), (0, r.j4)(eZ.Z, {
              key: 0,
              name: "chevron_l",
              class: (0, r.C_)(s.$style.chevron_icon)
            }, null, 8, ["class"])) : (0, r.kq)("", !0), (0, r.Wm)(eZ.Z, {
              name: i.value ? "fennek" : "close",
              class: (0, r.C_)([s.$style.button_icon])
            }, null, 8, ["name", "class"])], 38))
          }
        });
      let eI = {},
        eT = {};
      eT.$style || (eT.$style = {}), eT.$style.style0 = {
        button: "GoSdU",
        button_portal: "E7N8T",
        buttonPortal: "E7N8T",
        button_icon: "MXMdf",
        buttonIcon: "MXMdf",
        chevron_icon: "SELeQ",
        chevronIcon: "SELeQ"
      }, eI.$style = Object.values(eT.$style).reduce((e, t) => Object.assign(e, t), {});
      let eU = (0, Q.default)(eL, [
        ["__cssModules", eI]
      ]);
      var eO = a(1810);
      let ex = ["src", "alt"];
      var eB = (0, r.aZ)({
        __name: "ExportInitScreen",
        props: {
          game: {},
          categories: {},
          onClick: {
            type: Function
          }
        },
        setup(e) {
          let t = (0, r.Fl)(() => e.categories?.categoriesInfo.filter(e => "category" === e.categoryType) || []);
          return (a, s) => ((0, r.wg)(), (0, r.iD)("div", {
            class: (0, r.C_)(a.$style.initScreen),
            "data-interface-target": "init_screen",
            onClick: s[0] || (s[0] = (...t) => e.onClick && e.onClick(...t))
          }, [(0, r._)("div", {
            class: (0, r.C_)(a.$style.blurBg),
            style: (0, r.j5)({
              "--bg": `url(${e.game.preview})`
            })
          }, null, 6), (0, r._)("div", {
            class: (0, r.C_)(a.$style.content)
          }, [(0, r._)("div", {
            class: (0, r.C_)(a.$style.imageAndButton)
          }, [(0, r._)("img", {
            class: (0, r.C_)(a.$style.image),
            src: e.game.preview,
            alt: e.game.title
          }, null, 10, ex), (0, r.Wm)(l.Z, {
            interfaceTarget: "init_button",
            effect: "bevel",
            visual: "fill",
            size: "l",
            iconLeft: "play",
            class: (0, r.C_)(a.$style.initButton_override)
          }, {
            default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(a.$tr("gameContainer.init_button")), 1)]),
            _: 1
          }, 8, ["class"])], 2), (0, r._)("div", {
            class: (0, r.C_)(a.$style.texts)
          }, [(0, r.Wm)(es.Z, {
            is: "h1",
            type: "header",
            size: "s"
          }, {
            default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(`${e.game.title} ${e.game.gameUrlRedirectTarget?"*":""}`), 1)]),
            _: 1
          }), (0, r.Wm)(es.Z, {
            is: "div",
            type: "paragraph",
            size: "xs"
          }, {
            default: (0, r.w5)(() => [(0, r._)("span", {
              class: (0, r.C_)(a.$style.categoriesLabel)
            }, (0, r.zw)(a.$tr("gameDetails.categories")) + ": ", 3), ((0, r.wg)(!0), (0, r.iD)(r.HY, null, (0, r.Ko)(t.value, (e, a) => ((0, r.wg)(), (0, r.iD)(r.HY, {
              key: e.id
            }, [(0, r._)("span", null, (0, r.zw)(e.title), 1), (0, r.Uk)((0, r.zw)(a !== t.value.length - 1 ? ", " : ""), 1)], 64))), 128))]),
            _: 1
          }), (0, r._)("div", {
            class: (0, r.C_)(a.$style.divider)
          }, null, 2), (0, r.Wm)(es.Z, {
            is: "div",
            type: "paragraph",
            size: "xs",
            class: (0, r.C_)(a.$style.seoText)
          }, {
            default: (0, r.w5)(() => [(0, r.Wm)(eO.Z, {
              content: e.game.seo_text
            }, null, 8, ["content"])]),
            _: 1
          }, 8, ["class"])], 2)], 2)], 2))
        }
      });
      let ez = {},
        eR = {};
      eR.$style || (eR.$style = {}), eR.$style.style0 = {
        initScreen: "GAOeM",
        blurBg: "LW2RU",
        content: "eykSs",
        imageAndButton: "wdcaB",
        image: "urH5s",
        texts: "dMA3W",
        categoriesLabel: "c8vRX",
        divider: "u1GHR",
        seoText: "NCRP9",
        initButton_override: "dPhpZ",
        initButtonOverride: "dPhpZ",
        "#": "AMs5g"
      }, ez.$style = Object.values(eR.$style).reduce((e, t) => Object.assign(e, t), {});
      let ej = (0, Q.default)(eB, [
        ["__cssModules", ez]
      ]);
      var eD = a(2273),
        eq = a(3501),
        eN = a(9632),
        eG = a(6132),
        eW = a(1318),
        eF = a(6381);
      let eK = (0, n.Q_)("promo", () => {
          let {
            mainData: e
          } = (0, eG.G)(), t = (0, r.Fl)(() => e.value.p2eBonusInfo), a = (0, r.Fl)(() => (0, eF.B)(t.value?.inviteBonus)), s = (0, r.Fl)(() => (0, eF.B)(t.value?.inviteBonus, {
            shorten: !0
          })), n = (0, r.Fl)(() => (0, eF.B)(t.value?.signInBonus)), i = (0, r.Fl)(() => (0, eF.B)(t.value?.signInBonus, {
            shorten: !0
          })), l = (0, r.iH)(null), {
            setInviteModalOpened: o,
            setSignInModalOpened: d
          } = (0, eW.E)(), c = (0, N.o)();
          return {
            setPromoAction: function(e) {
              "sign_in" === e && (d(!0), c.logEvent({
                event: "custom_event",
                eventName: "sign-in",
                action: "click"
              })), "invite" === e && (o(!0), c.logEvent({
                event: "custom_event",
                eventName: "invite-friend",
                action: "click"
              }))
            },
            shouldShowAddGameBanner: l,
            inviteBonus: a,
            signInBonus: n,
            inviteBonusShort: s,
            signInBonusShort: i
          }
        }),
        eJ = ["src", "alt"];
      var eY = (0, r.aZ)({
        __name: "PromoBanner",
        props: {
          title: {},
          titleProps: {},
          description: {},
          direction: {},
          buttonPosition: {
            default: "bottom"
          },
          textAlign: {
            default: "center"
          },
          icon: {},
          hasCloseBtn: {
            type: Boolean
          },
          closeBtnProps: {},
          link: {},
          image: {}
        },
        emits: ["activatePromo", "closePromo"],
        setup(e, {
          emit: t
        }) {
          let a = {
              size: "m",
              accent: !0,
              type: "header"
            },
            s = {
              visual: "ghost"
            },
            n = (0, r.Fl)(() => ({
              ...a,
              ...e.titleProps || {}
            })),
            i = (0, r.Fl)(() => ({
              ...s,
              ...e.closeBtnProps || {}
            })),
            o = (0, r.Fl)(() => ({
              width: e.image?.width || "80px",
              height: e.image?.height || "80px"
            })),
            d = (0, r.Fl)(() => {
              if (!e.image) return "";
              if (e.image.src && !e.image.alt) throw Error("Promo Banner alt for image is required");
              return e.image.alt
            }),
            c = eK();

          function u(e) {
            c.setPromoAction(e), t("activatePromo")
          }
          return (a, s) => ((0, r.wg)(), (0, r.iD)("div", {
            class: (0, r.C_)(a.$style.promo_wrapper)
          }, [e.hasCloseBtn || e.closeBtnProps ? ((0, r.wg)(), (0, r.j4)(l.Z, {
            key: 0,
            size: "s",
            visual: i.value?.visual,
            icon: "close",
            color: "white-60",
            interfaceTarget: "close",
            class: (0, r.C_)(a.$style.close_override),
            onClick: s[0] || (s[0] = e => t("closePromo"))
          }, null, 8, ["visual", "class"])) : (0, r.kq)("", !0), ((0, r.wg)(), (0, r.j4)((0, r.LL)(e.link ? eN.Z : "div"), {
            to: e.link?.to,
            externalTo: e.link?.externalTo,
            target: e.link?.target,
            class: (0, r.C_)([a.$style.promo, a.$style[e.direction]])
          }, {
            default: (0, r.w5)(() => [(0, r._)("div", {
              class: (0, r.C_)(a.$style.promo_content)
            }, [e.image ? ((0, r.wg)(), (0, r.iD)("img", {
              key: 0,
              style: (0, r.j5)(o.value),
              class: (0, r.C_)(e.image.class),
              src: e.image.src,
              alt: d.value,
              loading: "lazy"
            }, null, 14, eJ)) : (0, r.kq)("", !0), (0, r._)("div", {
              class: (0, r.C_)([a.$style.promo_text, a.$style[e.textAlign]])
            }, [(0, r._)("div", {
              class: (0, r.C_)(a.$style.promo_title)
            }, [e.icon ? ((0, r.wg)(), (0, r.j4)(eZ.Z, {
              key: 0,
              name: e.icon
            }, null, 8, ["name"])) : (0, r.kq)("", !0), (0, r.Wm)(es.Z, {
              type: n.value.type,
              size: n.value.size,
              responsive: !1,
              accent: n.value.accent
            }, {
              default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.title), 1)]),
              _: 1
            }, 8, ["type", "size", "accent"])], 2), (0, r.Wm)(es.Z, {
              size: "s",
              responsive: !1,
              class: (0, r.C_)(a.$style.promo_description)
            }, {
              default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.description), 1)]),
              _: 1
            }, 8, ["class"])], 2)], 2), a.$slots.default ? ((0, r.wg)(), (0, r.iD)("div", {
              key: 0,
              class: (0, r.C_)(a.$style[`promo_button_${e.buttonPosition}`])
            }, [(0, r.WI)(a.$slots, "default", {
              handleClick: u
            })], 2)) : (0, r.kq)("", !0)]),
            _: 3
          }, 8, ["to", "externalTo", "target", "class"]))], 2))
        }
      });
      let eX = {},
        eQ = {};
      eQ.$style || (eQ.$style = {}), eQ.$style.style0 = {
        promo_wrapper: "ycEMw",
        promoWrapper: "ycEMw",
        promo: "MN5Ad",
        column: "PmsqC",
        row: "RhPxs",
        promo_button_bottom: "AwR_M",
        promoButtonBottom: "AwR_M",
        promo_content: "oeNe3",
        promoContent: "oeNe3",
        promo_button_right: "_I6Xj",
        promoButtonRight: "_I6Xj",
        promo_text: "xZajT",
        promoText: "xZajT",
        center: "RkElO",
        left: "Zq98j",
        promo_description: "GStfD",
        promoDescription: "GStfD",
        promo_title: "i_grq",
        promoTitle: "i_grq",
        close_override: "I4gzJ",
        closeOverride: "I4gzJ",
        "#": "A6HgX"
      }, eX.$style = Object.values(eQ.$style).reduce((e, t) => Object.assign(e, t), {});
      let e0 = (0, Q.default)(eY, [
        ["__cssModules", eX]
      ]);
      var e1 = a.p + "static/svg/rotate-horizontal.cbee53cf.svg",
        e2 = (0, r.aZ)({
          __name: "RotateBanner",
          props: {
            orientation: {},
            class: {}
          },
          emits: ["close"],
          setup(e, {
            emit: t
          }) {
            let {
              platform: a
            } = (0, D.q)(), s = (0, er.y)(), n = (0, r.iH)(), i = (0, r.iH)(null), l = () => {
              let t = i.value?.matches ? "vertical" : "horizontal";
              e.orientation.includes(t) ? n.value = void 0 : n.value = t
            }, o = (0, r.Fl)(() => "horizontal" === e.orientation[0] ? s("orientationLabel.horizontalOrientation") : "vertical" === e.orientation[0] ? s("orientationLabel.verticalOrientation") : e.orientation[0]);
            return (0, r.bv)(() => {
              "desktop" !== a && 2 !== e.orientation.length && (i.value = window.matchMedia("(orientation: portrait)"), i.value.addEventListener("change", l), l())
            }), (0, r.SK)(() => {
              i.value?.removeEventListener("change", l)
            }), (a, s) => n.value ? ((0, r.wg)(), (0, r.j4)(e0, {
              key: 0,
              description: a.$tr("rotateMessage.message", {
                orientation: o.value
              }),
              image: {
                src: (0, r.SU)(e1),
                alt: a.$tr("rotateMessage.rotate"),
                class: "horizontal" === n.value && a.$style.rotate_vertical || void 0
              },
              titleProps: {
                type: "label",
                size: "l"
              },
              direction: "row",
              class: (0, r.C_)([a.$style.banner_override, e.class]),
              title: a.$tr("rotateMessage.rotate"),
              textAlign: "left",
              closeBtnProps: {
                visual: "fill"
              },
              onClosePromo: s[0] || (s[0] = e => t("close"))
            }, null, 8, ["description", "image", "class", "title"])) : (0, r.kq)("", !0)
          }
        });
      let e3 = {},
        e5 = {};
      e5.$style || (e5.$style = {}), e5.$style.style0 = {
        banner_override: "P3m1a",
        bannerOverride: "P3m1a",
        "#": "WuBOj",
        image: "CfWWn",
        rotate_vertical: "O0noi",
        rotateVertical: "O0noi"
      }, e3.$style = Object.values(e5.$style).reduce((e, t) => Object.assign(e, t), {});
      let e4 = (0, Q.default)(e2, [
          ["__cssModules", e3]
        ]),
        e7 = ["src", "alt"];
      var e6 = (0, r.aZ)({
        __name: "StickyGameBanner",
        props: {
          game: {},
          categories: {}
        },
        setup: e => (t, a) => ((0, r.wg)(), (0, r.iD)("div", {
          class: (0, r.C_)(t.$style.sticky_banner)
        }, [(0, r._)("img", {
          src: e.game.icon,
          alt: e.game.title,
          class: (0, r.C_)(t.$style.icon)
        }, null, 10, e7), (0, r._)("div", {
          class: (0, r.C_)(t.$style.texts)
        }, [(0, r.Wm)(es.Z, {
          type: "label",
          size: "m",
          accent: "",
          class: (0, r.C_)(t.$style.title)
        }, {
          default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.game.title), 1)]),
          _: 1
        }, 8, ["class"]), (0, r.Wm)(es.Z, {
          type: "label",
          size: "xs",
          class: (0, r.C_)(t.$style.category)
        }, {
          default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.categories?.categoriesInfo?.[0]?.title || "-"), 1)]),
          _: 1
        }, 8, ["class"])], 2)], 2))
      });
      let e9 = {},
        e8 = {};
      e8.$style || (e8.$style = {}), e8.$style.style0 = {
        sticky_banner: "wwKsv",
        stickyBanner: "wwKsv",
        icon: "wvTAk",
        texts: "Hkyo2",
        title: "qRzt5",
        category: "mCAR2",
        logo: "x9WCM"
      }, e9.$style = Object.values(e8.$style).reduce((e, t) => Object.assign(e, t), {});
      let te = (0, Q.default)(e6, [
        ["__cssModules", e9]
      ]);
      var tt = a(4237),
        ta = (0, r.aZ)({
          __name: "StickyWidgetBanner",
          setup(e) {
            let {
              VUE_APP_HOST_URL: t
            } = (0, d.Z)(), a = `${t}?from=widget`;
            return (e, t) => ((0, r.wg)(), (0, r.iD)("div", {
              class: (0, r.C_)(e.$style.sticky_banner)
            }, [(0, r.Wm)(eN.Z, {
              target: "_blank",
              externalTo: a
            }, {
              default: (0, r.w5)(() => [(0, r.Wm)(es.Z, {
                is: "div",
                type: "caption",
                size: "s",
                class: (0, r.C_)(e.$style.logoContainer)
              }, {
                default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.$tr("widgetGame.powered_by")) + " ", 1), (0, r.Wm)(tt.Z, {
                  class: (0, r.C_)(e.$style.logo_override),
                  mode: "full",
                  noLink: ""
                }, null, 8, ["class"])]),
                _: 1
              }, 8, ["class"])]),
              _: 1
            })], 2))
          }
        });
      let ts = {},
        tr = {};
      tr.$style || (tr.$style = {}), tr.$style.style0 = {
        sticky_banner: "mz96z",
        stickyBanner: "mz96z",
        logoContainer: "I505J",
        logo_override: "PtPZG",
        logoOverride: "PtPZG",
        "#": "Kh7Fc"
      }, ts.$style = Object.values(tr.$style).reduce((e, t) => Object.assign(e, t), {});
      let tn = (0, Q.default)(ta, [
          ["__cssModules", ts]
        ]),
        ti = ["title", "src"];
      var tl = (0, r.aZ)({
        __name: "ExportGame",
        setup(e) {
          let t = (0, u.s2)(),
            a = (0, r.iH)(15e3),
            s = (0, q.G)(),
            h = (0, G.K)(),
            v = (0, D.q)(),
            m = (0, j.x)(),
            y = (0, N.o)(),
            f = (0, F.L)(),
            C = (0, R.u)(),
            {
              createCloudSave: b,
              getCloudSaveApi: k
            } = (() => {
              let e = (0, g.Ek)(),
                t = (t, a) => {
                  let s;
                  return Promise.race([e.request(t, a), (s = {
                    originalResponse: void 0,
                    data: null,
                    errors: ["Client timeout"]
                  }, new Promise(e => setTimeout(() => e(s), 5e3)))])
                },
                a = e => ({
                  getState: async () => {
                    let a = await t(`/api/v1/cloud-save/games/${encodeURIComponent(e)}/load`);
                    return a?.errors?.length ? (console.error(a.errors), {}) : a.data?.saveData || {}
                  },
                  setItems: async a => {
                    let s = await t(`/api/v1/cloud-save/games/${encodeURIComponent(e)}/save`, {
                      method: "POST",
                      body: JSON.stringify({
                        saveData: a
                      })
                    });
                    return !s.errors?.length
                  }
                });
              return {
                createCloudSave: (e, t) => {
                  let {
                    getState: s,
                    setItems: r
                  } = a(e);
                  return async e => {
                    let a = (t, a) => ({
                      type: "cloud-save",
                      originalMessageEvent: e,
                      payload: a,
                      action: t
                    });
                    switch (e.data.action) {
                      case p.getCloudSaveState: {
                        let e = await s();
                        if (0 === Object.keys(e).length) {
                          let {
                            getState: a
                          } = w(t);
                          e = await a()
                        }
                        return a(p.cloudSaveStateResponse, e)
                      }
                      case p.setCloudSaveState:
                        try {
                          let t = await r(e.data.payload);
                          return a(p.cloudSaveOperationResponse, {
                            success: t
                          })
                        } catch (t) {
                          console.error(t);
                          let e = t.toString();
                          return a(p.cloudSaveOperationResponse, {
                            success: !1,
                            error: e
                          })
                        }
                    }
                  }
                },
                getCloudSaveApi: a
              }
            })(),
            {
              signedRequest: M
            } = (0, g.Ek)(),
            {
              pageStatus: S,
              isExportOnWidget: $,
              isExportOnPortal: A
            } = (0, n.Jk)(v),
            {
              game: Z,
              gameCatInfo: L
            } = (0, n.Jk)(s),
            {
              isAdDisabled: U
            } = (0, n.Jk)(C),
            O = (0, i.yj)(),
            x = (0, r.iH)(!1),
            B = (0, r.iH)(!1),
            Y = (0, r.iH)(""),
            X = (0, r.iH)({
              isVisible: !1,
              secondsLeft: 0,
              currentAd: 1,
              totalAds: 1
            }),
            Q = (0, r.iH)(!1),
            ee = (0, r.iH)(!1),
            et = (0, r.iH)(null),
            es = (0, r.iH)(!(0, K.o)(v.clid).isInitGameScreenHidden),
            er = (0, r.Fl)(() => es.value && !$.value),
            en = (0, r.XI)(),
            ei = (0, r.iH)(),
            el = (0, r.Fl)(() => "desktop" === v.platform),
            eo = (0, r.Fl)(() => "ios" === v.platform || "android" === v.platform),
            ed = (0, r.Fl)(() => !el.value && Z.value && (A.value || $.value)),
            ec = (0, r.Fl)(() => X.value.isVisible && (!A.value || !el.value)),
            eu = (0, r.Fl)(() => $.value ? "widget" : "portal"),
            eg = (0, r.Fl)(() => !x.value && B.value && Z.value?.source !== "playhop");
          async function ep(e) {
            Z && Z.value && Z.value.hru === e || (s.resetGameData(), await s.setGame(e))
          }
          let eh = (0, r.iH)(0),
            ev = (0, r.iH)(!1),
            em = (0, r.iH)(!1),
            ey = (0, r.iH)(!1);

          function ew(e, t) {
            eh.value >= 6e4 * t && !e.value && (e.value = !0, y.logEvent({
              event: "custom_event",
              eventName: `playgame_${t}min`
            }))
          }
          let {
            VUE_APP_GAME_PING_INTERVAL_MS: e_
          } = (0, d.Z)(), ef = (0, r.iH)(), eC = (0, r.XI)(), eb = (0, r.XI)(), eH = (0, r.XI)();

          function ek() {
            eC.value?.()
          }
          let eM = (0, r.Fl)(() => {
            let e = [];
            return Z.value?.vertical && e.push("vertical"), Z.value?.horizontal && e.push("horizontal"), e
          });

          function eS() {
            x.value = !0
          }

          function e$(e) {
            let t = !1;
            for (let a in e) X.value[a] !== e[a] && (X.value[a] = e[a], t = !0);
            t && eb.value?.(e)
          }

          function eE() {
            e$({
              isVisible: !1,
              secondsLeft: 0,
              currentAd: 1,
              totalAds: 1
            })
          }

          function eA(e) {
            (!U.value || "rewarded" === e) && (e$({
              adType: e
            }), Q.value || (Q.value = !0, ee.value = !1, et.value = e, setTimeout(() => {
              Q.value && !ee.value && (eV(), eZ(), y.logEvent({
                event: "custom_event",
                eventName: "game_preloader_timeout",
                waterfallIndex: m.adService?.currentOutOfPageAdWaterfallIndex
              }))
            }, m.adService?.getAdMaxTimeout())))
          }

          function eV() {
            Q.value = !1, ee.value = !1, et.value = null
          }

          function eZ() {
            B.value || (B.value = !0, y.logEvent({
              event: "custom_event",
              eventName: "game",
              action: "init"
            }))
          }

          function eL({
            data: e
          }) {
            if ("setOutOfPageAdPlaybackState" === e.type && A.value && m.adService?.setOutOfPageAdPlaybackState(e.play), "userChanged" === e.type && A.value) {
              let t = JSON.parse(e.user);
              f.setUser(t)
            }
          }
          let eI = (0, r.iH)();

          function eT() {
            es.value = !1, ef.value = setInterval(() => {
              !document.hidden && document.hasFocus() && (y.logEvent({
                event: "custom_event",
                eventName: "ping"
              }), void 0 !== a.value && (a.value -= e_, a.value <= 0 && (a.value = void 0, h.update((0, W.E)(Z.value)))), eh.value += e_, ew(ev, 3), ew(em, 5), ew(ey, 10))
            }, e_), $.value || eo.value && A.value || eI.value?.enabled ? eZ() : (eA("interstitial_preroll"), m.adService?.serviceReadyPromise.then(() => {
              en.value?.showPreroll()
            }))
          }

          function eO() {
            es.value = !1, eT(), y.logEvent({
              event: "custom_event",
              eventName: "export-init-click"
            })
          }
          return (0, r.bv)(async () => {
            var e, a, s, r;
            if (window.addEventListener("message", eL), 200 !== S.value) return;
            if (Z.value || await ep(O.params.game), !Z.value) return void console.error("Error: No game found");
            if (!m.adService) return void console.error("Error: No ad service was passed to the main frame");
            m.updateTargeting({
              content_category: Z.value.categories,
              provider: Z.value.source || ""
            });
            let n = O.query.payload || "",
              i = (0, J.Z)(Z.value.game_url);
            if (!i) return;
            v.clid && !Object.values(c.sL).includes(v.clid) && i.searchParams.set("clid", v.clid), n && i.searchParams.set("payload", n), i.hostname.endsWith("games.playgama.com") && (i.hostname = i.hostname.replace("games.playgama.com", "games.playgama.net")), y.logEvent({
              event: "custom_event",
              eventName: "game_opened"
            });
            let {
              authorizeUser: l,
              getUser: o,
              chargeUser: d,
              cancelCharge: u
            } = f, g = {
              clid: v.clid,
              widgetId: v.widgetId,
              userAcquisitionParams: v.userAcquisitionParams
            };
            if (A.value || $.value) {
              let e = window.parent.exportApi;
              e && (l = e.authorizeUser, o = e.getUser, d = e.chargeUser, u = e.cancelCharge, eb.value = e.updateInstreamData, eC.value = e.closeGame, g = e.getGameAttributes(), eH.value = e.openDisabledAdModal)
            }
            if (Y.value = i.href, !v.query) return void console.error("Error: appStore.query should be defined");
            let h = k(Z.value.id),
              C = b(Z.value.id, Z.value.hru),
              L = ((e, t, a) => {
                let s, r = async () => {
                  if (await t()) return void 0 === s && (s = 0 === Object.keys(await o()).length), s
                }, {
                  getState: n,
                  setItems: i,
                  deleteKeys: l
                } = w(e), {
                  getState: o,
                  setItems: d
                } = a;
                return async e => {
                  let t = await r();
                  switch (e.data.action) {
                    case p.getState:
                      return {
                        type: "storage", action: p.initStorage, originalMessageEvent: e, payload: {
                          state: await n()
                        }
                      };
                    case p.setItems:
                      await i(e.data.payload || {}), t && d(await n());
                      break;
                    case p.deleteItems: {
                      let a = e.data.payload?.keys || [];
                      await l(a), t && d(await n())
                    }
                  }
                }
              })(Z.value.hru, o, h),
              U = new I({
                queryParams: v.query,
                gameHRU: Z.value.hru,
                storageMessageHandler: L
              });
            eI.value = new T.g({
              queryParams: v.query
            }), en.value = new V(m.adService, y.logEvent, v.platform, {
              skipInterstitials: eI.value.enabled
            }), ei.value = new H({
              currentLanguage: t.getCurrentLanguage(),
              gameAdHandler: en.value,
              inGamePaymentsMessageHandler: (e = Z.value.hru, a = Z.value.title, s = d, r = {
                ...g
              }, async t => {
                switch (t.data.action) {
                  case p.requestPurchase:
                    try {
                      let n = await s({
                        type: "order",
                        gameHru: e,
                        gameTitle: a,
                        attributes: r,
                        ...t.data.payload
                      });
                      return _(n, t)
                    } catch (e) {
                      return console.error("Caught error during purchase request:", e), _({
                        errors: [e?.toString()],
                        data: null,
                        originalResponse: null
                      }, t)
                    }
                  case p.requestTopup:
                    try {
                      let e = await s({
                        type: "topup",
                        ...t.data.payload
                      });
                      return {
                        type: "in-game-payments",
                        action: p.topupStatus,
                        originalMessageEvent: t,
                        payload: e
                      }
                    } catch (e) {
                      return _({
                        errors: [e?.toString()],
                        data: null,
                        originalResponse: null
                      }, t)
                    }
                  default:
                    return {
                      action: p.unknownMessageType, originalMessageEvent: t, payload: {
                        error: `Unknown message action "${t.data.action}"`
                      }, type: "error"
                    }
                }
              }),
              storageMessageHandler: L,
              cloudSaveMessageHandler: C,
              userService: new z({
                authorizeUser: l,
                gameHru: Z.value.hru,
                auid: v.auid || "",
                signedRequest: M
              }),
              onLogin: async () => {
                if (!Z.value) return;
                let e = k(Z.value.id),
                  t = await e.getState();
                t && 0 === Object.keys(t).length || (u("Game is reloading"), (0, P.mF)(i), Y.value = i.href)
              },
              onGameStart: () => {
                en.value?.refreshInitTime(), y.logEvent({
                  event: "custom_event",
                  eventName: "game_bridge_loaded"
                })
              }
            }), U.listen(ei.value.eventBus), eI.value.listen(ei.value.eventBus), en.value.eventBus.addEventListener("adStateChanged", async e => {
              let t = e.detail;
              switch (t.action) {
                case "start":
                  eA(t.adType);
                  break;
                case "closed":
                  eE(), eV(), "interstitial_preroll" === t.adType && eZ();
                  break;
                case "empty":
                case "errored":
                  eE(), Q.value && (await (0, E.HT)(1200), ee.value = "interstitial_preroll" !== t.adType), "interstitial_preroll" === t.adType && (eV(), eZ());
                  break;
                case "timer":
                  void 0 !== t.secondsLeft && t.secondsLeft >= 0 && t.secondsLeft !== X.value.secondsLeft && e$({
                    isVisible: !0,
                    secondsLeft: t.secondsLeft
                  });
                  break;
                case "opened":
                  eV();
                  break;
                case "update":
                  e$({
                    currentAd: t.currentAd || 1,
                    totalAds: t.totalAds || 1
                  })
              }
            }), er.value || eT()
          }), (0, r.Jd)(() => {
            window.removeEventListener("message", eL), ei.value?.destroy(), clearInterval(ef.value || 0)
          }), (0, r.vl)(async () => {
            try {
              await s.setGame(O.params.game)
            } catch (e) {
              "number" == typeof e ? v.setPageStatus(e) : v.setPageStatus(500)
            }
          }), (e, t) => ((0, r.wg)(), (0, r.iD)(r.HY, null, [(0, r.Wm)(eD.Z, {
            noindex: ""
          }), (0, r.SU)(Z) ? ((0, r.wg)(), (0, r.iD)("div", {
            key: 0,
            class: (0, r.C_)(e.$style.export_game)
          }, [er.value ? ((0, r.wg)(), (0, r.j4)(ej, {
            key: 0,
            class: (0, r.C_)(e.$style.exportInitScreen_override),
            game: (0, r.SU)(Z),
            categories: (0, r.SU)(L),
            onClick: eO
          }, null, 8, ["class", "game", "categories"])) : ((0, r.wg)(), (0, r.iD)("div", {
            key: 1,
            class: (0, r.C_)(e.$style.iframe_wrapper)
          }, [B.value ? ((0, r.wg)(), (0, r.iD)("iframe", {
            key: 0,
            class: (0, r.C_)(e.$style.iframe),
            title: (0, r.SU)(Z).title,
            src: Y.value
          }, null, 10, ti)) : (0, r.kq)("", !0), !B.value || X.value.totalAds > 1 ? ((0, r.wg)(), (0, r.iD)("div", {
            key: 1,
            class: (0, r.C_)(e.$style.iframe_fallback)
          }, null, 2)) : (0, r.kq)("", !0)], 2)), ec.value ? ((0, r.wg)(), (0, r.j4)(eq.Z, {
            key: 2,
            class: (0, r.C_)(e.$style.instream_info_override),
            secondsLeft: X.value.secondsLeft,
            currentAd: X.value.currentAd,
            totalAds: X.value.totalAds
          }, {
            default: (0, r.w5)(() => [(0, r.SU)(A) && !(0, r.SU)(U) ? ((0, r.wg)(), (0, r.j4)(l.Z, {
              key: 0,
              color: "lime",
              interfaceTarget: "no-ads-button",
              class: (0, r.C_)(e.$style.no_ads_button_override),
              onClick: eH.value
            }, {
              default: (0, r.w5)(() => [(0, r.Uk)((0, r.zw)(e.$tr("gameContainer.noAds")), 1)]),
              _: 1
            }, 8, ["class", "onClick"])) : (0, r.kq)("", !0)]),
            _: 1
          }, 8, ["class", "secondsLeft", "currentAd", "totalAds"])) : (0, r.kq)("", !0), ed.value ? ((0, r.wg)(), (0, r.iD)(r.HY, {
            key: 3
          }, [ed.value ? ((0, r.wg)(), (0, r.j4)(ea, {
            key: 0,
            adMode: eu.value,
            class: (0, r.C_)([e.$style.ad_block_override, (0, r.SU)($) && e.$style.ad_block_widget_override])
          }, {
            front: (0, r.w5)(() => [(0, r.SU)(A) ? ((0, r.wg)(), (0, r.j4)(te, {
              key: 0,
              game: (0, r.SU)(Z),
              categories: (0, r.SU)(L)
            }, null, 8, ["game", "categories"])) : ((0, r.wg)(), (0, r.j4)(tn, {
              key: 1
            }))]),
            _: 1
          }, 8, ["adMode", "class"])) : (0, r.kq)("", !0), eg.value ? ((0, r.wg)(), (0, r.j4)(e4, {
            key: 1,
            orientation: eM.value,
            class: (0, r.C_)(e.$style.rotateBanner_override),
            onClose: eS
          }, null, 8, ["orientation", "class"])) : (0, r.kq)("", !0), B.value ? ((0, r.wg)(), (0, r.j4)(eU, {
            key: 2,
            mode: eu.value,
            startPosition: 40,
            startLandscapePosition: 10,
            class: (0, r.C_)((0, r.SU)($) && e.$style.close_widget_override),
            onClick: ek
          }, null, 8, ["mode", "class"])) : (0, r.kq)("", !0)], 64)) : (0, r.kq)("", !0), Q.value ? ((0, r.wg)(), (0, r.j4)(eP, {
            key: 4,
            hasError: ee.value,
            adType: et.value,
            isPortal: (0, r.SU)(A),
            onClose: eV
          }, null, 8, ["hasError", "adType", "isPortal"])) : (0, r.kq)("", !0)], 2)) : 200 !== (0, r.SU)(S) ? ((0, r.wg)(), (0, r.j4)(o.Z, {
            key: 1,
            noRandomGame: "",
            type: (0, r.SU)(S)
          }, null, 8, ["type"])) : (0, r.kq)("", !0)], 64))
        }
      });
      let to = {},
        td = {};
      td.$style || (td.$style = {}), td.$style.style0 = {
        rotateBanner_override: "vSAie",
        rotateBannerOverride: "vSAie",
        "#": "Rw_mp",
        export_game: "gTUd0",
        exportGame: "gTUd0",
        exportInitScreen_override: "VUpGy",
        exportInitScreenOverride: "VUpGy",
        iframe_wrapper: "Gv8aN",
        iframeWrapper: "Gv8aN",
        iframe: "BqLvg",
        iframe_fallback: "Lp3nm",
        iframeFallback: "Lp3nm",
        ad_block_override: "VHRAg",
        adBlockOverride: "VHRAg",
        instream_info_override: "kyT5_",
        instreamInfoOverride: "kyT5_",
        no_ads_button_override: "wnhM9",
        noAdsButtonOverride: "wnhM9",
        close_widget_override: "rHohd",
        closeWidgetOverride: "rHohd",
        ad_block_widget_override: "H5ZcT",
        adBlockWidgetOverride: "H5ZcT"
      }, to.$style = Object.values(td.$style).reduce((e, t) => Object.assign(e, t), {});
      var tc = (0, Q.default)(tl, [
        ["__cssModules", to]
      ])
    },
    3501: function(e, t, a) {
      a.d(t, {
        Z: function() {
          return g
        }
      });
      var s = a(5595),
        r = a(6049),
        n = a(2413),
        i = a.p + "static/image/fennec.e0408bdd.webp";
      let l = ["src"];
      var o = (0, s.aZ)({
          __name: "InstreamInfo",
          props: {
            secondsLeft: {},
            currentAd: {},
            totalAds: {}
          },
          setup(e) {
            let t = (0, n.y)(),
              a = (0, s.Fl)(() => e.totalAds > 1),
              o = (0, s.Fl)(() => a.value ? `(${t("instreamWrapper.adCounter",{current:`${e.currentAd}`,total:`${e.totalAds}`})})` : "");
            return (e, t) => ((0, s.wg)(), (0, s.iD)("div", {
              class: (0, s.C_)(e.$style.content)
            }, [(0, s._)("img", {
              src: (0, s.SU)(i),
              alt: "fennec",
              class: (0, s.C_)(e.$style.icon)
            }, null, 10, l), (0, s._)("div", {
              class: (0, s.C_)(e.$style.info)
            }, [(0, s.Wm)(r.Z, {
              accent: "",
              size: "s",
              class: (0, s.C_)(e.$style.text)
            }, {
              default: (0, s.w5)(() => [e.$slots.default ? ((0, s.wg)(), (0, s.iD)(s.HY, {
                key: 1
              }, [(0, s.Uk)((0, s.zw)(e.$tr("instreamWrapper.infoShort")), 1)], 64)) : ((0, s.wg)(), (0, s.iD)(s.HY, {
                key: 0
              }, [(0, s.Uk)((0, s.zw)(e.$tr("instreamWrapper.info")), 1)], 64))]),
              _: 1
            }, 8, ["class"]), (0, s._)("div", {
              class: (0, s.C_)(e.$style.sub_info)
            }, [a.value ? (0, s.kq)("", !0) : ((0, s.wg)(), (0, s.j4)(r.Z, {
              key: 0,
              size: "xs",
              class: (0, s.C_)(e.$style.subtext)
            }, {
              default: (0, s.w5)(() => [(0, s.Uk)((0, s.zw)(e.$tr("instreamWrapper.ad")), 1)]),
              _: 1
            }, 8, ["class"])), e.secondsLeft > 0 ? ((0, s.wg)(), (0, s.j4)(r.Z, {
              key: 1,
              size: "xs",
              class: (0, s.C_)(e.$style.subtext)
            }, {
              default: (0, s.w5)(() => [(0, s.Uk)((0, s.zw)(e.secondsLeft) + " " + (0, s.zw)(e.$tr("instreamWrapper.sec")), 1)]),
              _: 1
            }, 8, ["class"])) : (0, s.kq)("", !0), a.value ? ((0, s.wg)(), (0, s.j4)(r.Z, {
              key: 2,
              size: "xs",
              class: (0, s.C_)(e.$style.subtext)
            }, {
              default: (0, s.w5)(() => [(0, s.Uk)((0, s.zw)(o.value), 1)]),
              _: 1
            }, 8, ["class"])) : (0, s.kq)("", !0)], 2)], 2), (0, s.WI)(e.$slots, "default")], 2))
          }
        }),
        d = a(3744);
      let c = {},
        u = {};
      u.$style || (u.$style = {}), u.$style.style0 = {
        content: "ti62U",
        icon: "GKWiU",
        info: "KNGWB",
        sub_info: "zVM1c",
        subInfo: "zVM1c",
        text: "h49ge",
        subtext: "_a_9K"
      }, c.$style = Object.values(u.$style).reduce((e, t) => Object.assign(e, t), {});
      var g = (0, d.default)(o, [
        ["__cssModules", c]
      ])
    },
    3496: function(e, t, a) {
      a.d(t, {
        C: function() {
          return p
        },
        R: function() {
          return g
        }
      });
      var s = a(5595),
        r = a(9938),
        n = a(1301),
        i = a(8977),
        l = a(7626),
        o = a(4886),
        d = a(4600),
        c = a(7788),
        u = a(2413);
      let g = "USD";

      function p() {
        let e = (0, r.tv)(),
          t = (0, u.y)(),
          {
            currentLocale: a
          } = (0, l.s2)(),
          {
            VUE_APP_ANDROID_APP_URL: g
          } = (0, c.Z)(),
          p = (0, s.Fl)(() => h({
            name: o.m8.MAIN
          }));

        function h(t) {
          return "string" == typeof t ? `https://playgama.com${t}` : `https://playgama.com${e.resolve(t).fullPath}`
        }

        function v(e) {
          return (0, i.DH)(e || a.value)
        }
        return {
          isPartOf: (0, s.Fl)(() => ({
            isPartOf: {
              "@type": "WebSite",
              "@id": `${p.value}#website`,
              name: "Playgama",
              url: p.value,
              description: t("headMeta.description"),
              inLanguage: v(),
              publisher: {
                "@type": "Organization",
                "@id": "https://playgama.com/#organization",
                url: "https://playgama.com",
                logo: n,
                name: "Playgama",
                legalName: "Playgama",
                description: "Playgama is a fast-growing platform that connects HTML5 game developers with a global audience of over 300 million monthly players. Whether you’re looking to publish, monetize, or scale your game, Playgama gives you the tools and exposure to make it happen.",
                brand: {
                  "@type": "Brand",
                  "@id": "https://playgama.com/#brand",
                  name: "Playgama",
                  slogan: "Play, Share, Profit. Game on!"
                },
                email: "support@playgama.com",
                sameAs: [...d.bp, g],
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "User Feedback",
                  url: h({
                    name: o.m8.CONTACTS
                  }),
                  email: "support@playgama.com"
                },
                address: {
                  "@type": "PostalAddress",
                  postalCode: "500001",
                  addressLocality: "Dubai",
                  streetAddress: "Nad Al Sheba",
                  addressCountry: {
                    "@type": "Country",
                    name: "AE"
                  }
                },
                location: {
                  "@type": "PostalAddress",
                  postalCode: "500001",
                  addressLocality: "Dubai",
                  streetAddress: "Nad Al Sheba",
                  addressCountry: {
                    "@type": "Country",
                    name: "AE"
                  }
                },
                founder: [{
                  "@type": "Person",
                  name: "Dmitry Kachmar",
                  jobTitle: "Founder",
                  sameAs: ["https://www.linkedin.com/in/dmitry-kachmar-84392725/"]
                }]
              }
            }
          })),
          getFullLink: h,
          getInLanguage: v
        }
      }
    }
  }
]);
//# sourceMappingURL=839.65986b7d.js.map