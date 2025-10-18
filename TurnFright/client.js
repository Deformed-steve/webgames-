let au = `default`,
  ad = null,
  ac = 128,
  ae = 1,
  aw = `error`,
  ar = 4,
  al = `number`,
  am = `boolean`,
  a9 = `undefined`,
  af = `utf-8`,
  av = `cors`,
  ak = 3,
  aC = 1435,
  aj = `function`,
  ao = `Object`,
  ah = 0,
  at = `same-origin`,
  aD = 2292,
  an = `string`,
  ab = Array,
  az = Date,
  ag = Error,
  aq = FinalizationRegistry,
  ap = JSON.stringify,
  aB = Math.random,
  ay = Object,
  aE = Object.getPrototypeOf,
  aA = Promise,
  ax = Reflect,
  ai = Uint8Array,
  aa = undefined;
var R = ((a, b) => {
  a = a >>> ah;
  return s().subarray(a / ae, a / ae + b)
});
var J = ((a, b) => {
  g._ZN132__LT_dyn_u20_core__ops__function__FnMut_LT__LP__RP__GT__u2b_Output_u20__u3d__u20_R_u20_as_u20_wasm_bindgen__closure__WasmClosure_GT_8describe6invoke17hb4d6a34e90ab0eb5E(a, b)
});
var a7 = (a => {
  if (g !== aa) return g;
  if (typeof a !== a9) {
    if (aE(a) === ay.prototype) {
      ({
        module: a
      } = a)
    } else {
      console.warn(`using deprecated parameters for \`initSync()\`; pass a single object instead`)
    }
  };
  const b = a4();
  a5(b);
  if (!(a instanceof WebAssembly.Module)) {
    a = new WebAssembly.Module(a)
  };
  const c = new WebAssembly.Instance(a, b);
  return a6(c, a)
});
var t = ((a, b) => {
  a = a >>> ah;
  return q.decode(s().subarray(a, a + b))
});
var T = (a => () => {
  throw new ag(`${a} is not defined`)
});
var n = (a => a === aa || a === ad);
var m = (a => {
  if (j === h.length) h.push(h.length + ae);
  const b = j;
  j = h[b];
  h[b] = a;
  return b
});
var i = (a => h[a]);
var k = (a => {
  if (a < 132) return;
  h[a] = j;
  j = a
});
var K = ((a, b, c) => {
  try {
    g._ZN140__LT_dyn_u20_core__ops__function__FnMut_LT__LP__RF_A_C__RP__GT__u2b_Output_u20__u3d__u20_R_u20_as_u20_wasm_bindgen__closure__WasmClosure_GT_8describe6invoke17h47ba17dce3755214E(a, b, G(c))
  } finally {
    h[F++] = aa
  }
});
var a5 = ((a, b) => {});
var a8 = (async (a) => {
  if (g !== aa) return g;
  if (typeof a !== a9) {
    if (aE(a) === ay.prototype) {
      ({
        module_or_path: a
      } = a)
    } else {
      console.warn(`using deprecated parameters for the initialization function; pass a single object instead`)
    }
  };
  if (typeof a === a9) {
    a = new URL(`client_bg.wasm`, import.meta.url)
  };
  const b = a4();
  if (typeof a === an || typeof Request === aj && a instanceof Request || typeof URL === aj && a instanceof URL) {
    a = fetch(a)
  };
  a5(b);
  const {
    instance: c,
    module: d
  } = await a3(await a, b);
  return a6(c, d)
});
var a4 = (() => {
  const h = {};
  h.wbg = {};
  h.wbg.__wbindgen_object_drop_ref = (a => {
    l(a)
  });
  h.wbg.__wbindgen_cb_drop = (a => {
    const b = l(a).original;
    if (b.cnt-- == ae) {
      b.a = ah;
      return !0
    };
    const c = !1;
    return c
  });
  h.wbg.__wbindgen_object_clone_ref = (a => {
    const b = i(a);
    return m(b)
  });
  h.wbg.__wbindgen_is_string = (a => {
    const b = typeof i(a) === an;
    return b
  });
  h.wbg.__wbindgen_is_object = (a => {
    const b = i(a);
    const c = typeof b === `object` && b !== ad;
    return c
  });
  h.wbg.__wbindgen_number_get = ((a, b) => {
    const c = i(b);
    const d = typeof c === al ? c : aa;
    p().setFloat64(a + 8 * ae, n(d) ? ah : d, !0);
    p().setInt32(a + ar * ah, !n(d), !0)
  });
  h.wbg.__wbindgen_string_new = ((a, b) => {
    const c = t(a, b);
    return m(c)
  });
  h.wbg.__wbindgen_boolean_get = (a => {
    const b = i(a);
    const c = typeof b === am ? (b ? ae : ah) : 2;
    return c
  });
  h.wbg.__wbindgen_string_get = ((a, b) => {
    const c = i(b);
    const d = typeof c === an ? c : aa;
    var e = n(d) ? ah : x(d, g.__wbindgen_malloc, g.__wbindgen_realloc);
    var f = u;
    p().setInt32(a + ar * ae, f, !0);
    p().setInt32(a + ar * ah, e, !0)
  });
  h.wbg.__wbg_drawBulletFFI_90859e0bf64a90dd = ((a, b, c, e, f, g, h, i, j, k, l, m) => {
    d(a, b, c, e, f, g, h, i, j, k, l, m !== ah)
  });
  h.wbg.__wbg_init_c5d3397f68787eae = (b => {
    const c = a(b !== ah);
    return c
  });
  h.wbg.__wbg_drawPlane_25818c32eb6ffa4c = ((a, c, d, e, f, h, i, j, k, l, m, n, o, p, q) => {
    let r;
    let s;
    try {
      r = a;
      s = c;
      let u;
      if (o !== ah) {
        u = t(o, p).slice();
        g.__wbindgen_free(o, p * ae, ae)
      };
      b(t(a, c), d, e, f, h, i, j, k, l, m !== ah, n, u, q !== ah)
    } finally {
      g.__wbindgen_free(r, s, ae)
    }
  });
  h.wbg.__wbg_drawCapture_fd08f1c726cf101d = ((a, b, d) => {
    let e;
    let f;
    try {
      e = a;
      f = b;
      c(t(a, b), d)
    } finally {
      g.__wbindgen_free(e, f, ae)
    }
  });
  h.wbg.__wbindgen_is_undefined = (a => {
    const b = i(a) === aa;
    return b
  });
  h.wbg.__wbg_requestpointerlockwithunadjustedmovement_1e2561fade2347ea = (a => {
    request_pointer_lock_with_unadjusted_movement(i(a))
  });
  h.wbg.__wbg_error_2c8f4b35bc7da3fc = ((a, b) => {
    console.error(t(a, b))
  });
  h.wbg.__wbg_log_6276e3ff81a75be2 = ((a, b) => {
    console.log(t(a, b))
  });
  h.wbg.__wbg_cachekey_b81c1aacc6a0645c = ((a, b) => {
    const c = i(b).__yew_subtree_cache_key;
    p().setInt32(a + ar * ae, n(c) ? ah : c, !0);
    p().setInt32(a + ar * ah, !n(c), !0)
  });
  h.wbg.__wbg_subtreeid_e80a1798fee782f9 = ((a, b) => {
    const c = i(b).__yew_subtree_id;
    p().setInt32(a + ar * ae, n(c) ? ah : c, !0);
    p().setInt32(a + ar * ah, !n(c), !0)
  });
  h.wbg.__wbg_setsubtreeid_e1fab6b578c800cf = ((a, b) => {
    i(a).__yew_subtree_id = b >>> ah
  });
  h.wbg.__wbg_setcachekey_75bcd45312087529 = ((a, b) => {
    i(a).__yew_subtree_cache_key = b >>> ah
  });
  h.wbg.__wbg_setlistenerid_f2e783343fa0cec1 = ((a, b) => {
    i(a).__yew_listener_id = b >>> ah
  });
  h.wbg.__wbg_listenerid_6dcf1c62b7b7de58 = ((a, b) => {
    const c = i(b).__yew_listener_id;
    p().setInt32(a + ar * ae, n(c) ? ah : c, !0);
    p().setInt32(a + ar * ah, !n(c), !0)
  });
  h.wbg.__wbg_new_abda76e883ba8a5f = (() => {
    const a = new ag();
    return m(a)
  });
  h.wbg.__wbg_stack_658279fe44541cf6 = ((a, b) => {
    const c = i(b).stack;
    const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    const e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_error_f851667af71bcfc6 = ((a, b) => {
    let c;
    let d;
    try {
      c = a;
      d = b;
      console.error(t(a, b))
    } finally {
      g.__wbindgen_free(c, d, ae)
    }
  });
  h.wbg.__wbg_clearTimeout_76877dbc010e786d = (a => {
    const b = clearTimeout(l(a));
    return m(b)
  });
  h.wbg.__wbg_setTimeout_75cb9b6991a4031d = function() {
    return P(((a, b) => {
      const c = setTimeout(i(a), b);
      return m(c)
    }), arguments)
  };
  h.wbg.__wbg_queueMicrotask_481971b0d87f3dd4 = (a => {
    queueMicrotask(i(a))
  });
  h.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6 = (a => {
    const b = i(a).queueMicrotask;
    return m(b)
  });
  h.wbg.__wbindgen_is_function = (a => {
    const b = typeof i(a) === aj;
    return b
  });
  h.wbg.__wbindgen_in = ((a, b) => {
    const c = i(a) in i(b);
    return c
  });
  h.wbg.__wbindgen_error_new = ((a, b) => {
    const c = new ag(t(a, b));
    return m(c)
  });
  h.wbg.__wbindgen_jsval_loose_eq = ((a, b) => {
    const c = i(a) == i(b);
    return c
  });
  h.wbg.__wbindgen_as_number = (a => {
    const b = +i(a);
    return b
  });
  h.wbg.__wbindgen_number_new = (a => {
    const b = a;
    return m(b)
  });
  h.wbg.__wbg_getwithrefkey_edc2c8960f0f1191 = ((a, b) => {
    const c = i(a)[i(b)];
    return m(c)
  });
  h.wbg.__wbg_set_f975102236d3c502 = ((a, b, c) => {
    i(a)[l(b)] = l(c)
  });
  h.wbg.__wbg_error_a526fb08a0205972 = ((a, b) => {
    var c = Q(a, b).slice();
    g.__wbindgen_free(a, b * ar, ar);
    console.error(...c)
  });
  h.wbg.__wbg_instanceof_Window_6575cd7f1322f82f = (a => {
    let b;
    try {
      b = i(a) instanceof Window
    } catch (a) {
      b = !1
    }
    const c = b;
    return c
  });
  h.wbg.__wbg_document_d7fa2c739c2b191a = (a => {
    const b = i(a).document;
    return n(b) ? ah : m(b)
  });
  h.wbg.__wbg_location_72721055fbff81f2 = (a => {
    const b = i(a).location;
    return m(b)
  });
  h.wbg.__wbg_history_95935eecf7ecc279 = function() {
    return P((a => {
      const b = i(a).history;
      return m(b)
    }), arguments)
  };
  h.wbg.__wbg_navigator_3d3836196a5d8e62 = (a => {
    const b = i(a).navigator;
    return m(b)
  });
  h.wbg.__wbg_screen_9751a7338d4b711d = function() {
    return P((a => {
      const b = i(a).screen;
      return m(b)
    }), arguments)
  };
  h.wbg.__wbg_innerWidth_5b613b2887aa7496 = function() {
    return P((a => {
      const b = i(a).innerWidth;
      return m(b)
    }), arguments)
  };
  h.wbg.__wbg_innerHeight_481b9a364b365f83 = function() {
    return P((a => {
      const b = i(a).innerHeight;
      return m(b)
    }), arguments)
  };
  h.wbg.__wbg_devicePixelRatio_5d0556383aa83231 = (a => {
    const b = i(a).devicePixelRatio;
    return b
  });
  h.wbg.__wbg_localStorage_6026615061e890bf = function() {
    return P((a => {
      const b = i(a).localStorage;
      return n(b) ? ah : m(b)
    }), arguments)
  };
  h.wbg.__wbg_performance_8efa15a3e0d18099 = (a => {
    const b = i(a).performance;
    return n(b) ? ah : m(b)
  });
  h.wbg.__wbg_sessionStorage_9b4e948b2d3da7a9 = function() {
    return P((a => {
      const b = i(a).sessionStorage;
      return n(b) ? ah : m(b)
    }), arguments)
  };
  h.wbg.__wbg_matchMedia_2c5a513148e49e4a = function() {
    return P(((a, b, c) => {
      const d = i(a).matchMedia(t(b, c));
      return n(d) ? ah : m(d)
    }), arguments)
  };
  h.wbg.__wbg_open_245c3e57ba96efce = function() {
    return P(((a, b, c, d, e) => {
      const f = i(a).open(t(b, c), t(d, e));
      return n(f) ? ah : m(f)
    }), arguments)
  };
  h.wbg.__wbg_open_078fd8922666ce7e = function() {
    return P(((a, b, c, d, e, f, g) => {
      const h = i(a).open(t(b, c), t(d, e), t(f, g));
      return n(h) ? ah : m(h)
    }), arguments)
  };
  h.wbg.__wbg_postMessage_317c582cf7e21c87 = function() {
    return P(((a, b, c, d) => {
      i(a).postMessage(i(b), t(c, d))
    }), arguments)
  };
  h.wbg.__wbg_get_86fe30ee7fce99d1 = ((a, b, c) => {
    const d = i(a)[t(b, c)];
    return n(d) ? ah : m(d)
  });
  h.wbg.__wbg_cancelAnimationFrame_f802bc3f3a9b2e5c = function() {
    return P(((a, b) => {
      i(a).cancelAnimationFrame(b)
    }), arguments)
  };
  h.wbg.__wbg_requestAnimationFrame_8c3436f4ac89bc48 = function() {
    return P(((a, b) => {
      const c = i(a).requestAnimationFrame(i(b));
      return c
    }), arguments)
  };
  h.wbg.__wbg_fetch_bb5ee426272994d9 = ((a, b) => {
    const c = i(a).fetch(i(b));
    return m(c)
  });
  h.wbg.__wbg_fetch_bfd3aa46955593c3 = ((a, b, c) => {
    const d = i(a).fetch(t(b, c));
    return m(d)
  });
  h.wbg.__wbg_referrer_cb5b862370ffe3bf = ((a, b) => {
    const c = i(b).referrer;
    const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    const e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_body_8e909b791b1745d3 = (a => {
    const b = i(a).body;
    return n(b) ? ah : m(b)
  });
  h.wbg.__wbg_head_01a058f7b7d3cd52 = (a => {
    const b = i(a).head;
    return n(b) ? ah : m(b)
  });
  h.wbg.__wbg_visibilityState_5e9ade0fb5df3c9c = (a => {
    const b = i(a).visibilityState;
    return (a1.indexOf(b) + ae || ak) - ae
  });
  h.wbg.__wbg_pointerLockElement_20248daf00ad9489 = (a => {
    const b = i(a).pointerLockElement;
    return n(b) ? ah : m(b)
  });
  h.wbg.__wbg_createElement_e4523490bd0ae51d = function() {
    return P(((a, b, c) => {
      const d = i(a).createElement(t(b, c));
      return m(d)
    }), arguments)
  };
  h.wbg.__wbg_createElementNS_e51a368ab3a64b37 = function() {
    return P(((a, b, c, d, e) => {
      const f = i(a).createElementNS(b === ah ? aa : t(b, c), t(d, e));
      return m(f)
    }), arguments)
  };
  h.wbg.__wbg_createTextNode_3b33c97f8ef3e999 = ((a, b, c) => {
    const d = i(a).createTextNode(t(b, c));
    return m(d)
  });
  h.wbg.__wbg_exitPointerLock_42de2c91cfcc3203 = (a => {
    i(a).exitPointerLock()
  });
  h.wbg.__wbg_getElementById_734c4eac4fec5911 = ((a, b, c) => {
    const d = i(a).getElementById(t(b, c));
    return n(d) ? ah : m(d)
  });
  h.wbg.__wbg_querySelector_e4353fe90bee0601 = function() {
    return P(((a, b, c) => {
      const d = i(a).querySelector(t(b, c));
      return n(d) ? ah : m(d)
    }), arguments)
  };
  h.wbg.__wbg_instanceof_Element_1a81366cc90e70e2 = (a => {
    let b;
    try {
      b = i(a) instanceof Element
    } catch (a) {
      b = !1
    }
    const c = b;
    return c
  });
  h.wbg.__wbg_namespaceURI_dc264d717ce10acb = ((a, b) => {
    const c = i(b).namespaceURI;
    var d = n(c) ? ah : x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    var e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_setinnerHTML_559d45055154f1d8 = ((a, b, c) => {
    i(a).innerHTML = t(b, c)
  });
  h.wbg.__wbg_outerHTML_02fdcad893a01b32 = ((a, b) => {
    const c = i(b).outerHTML;
    const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    const e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_getBoundingClientRect_5ad16be1e2955e83 = (a => {
    const b = i(a).getBoundingClientRect();
    return m(b)
  });
  h.wbg.__wbg_removeAttribute_2dc68056b5e6ea3d = function() {
    return P(((a, b, c) => {
      i(a).removeAttribute(t(b, c))
    }), arguments)
  };
  h.wbg.__wbg_requestFullscreen_071d18d1af5653ef = function() {
    return P((a => {
      i(a).requestFullscreen()
    }), arguments)
  };
  h.wbg.__wbg_setAttribute_2a8f647a8d92c712 = function() {
    return P(((a, b, c, d, e) => {
      i(a).setAttribute(t(b, c), t(d, e))
    }), arguments)
  };
  h.wbg.__wbg_blur_d7e0bcc31c40e996 = function() {
    return P((a => {
      i(a).blur()
    }), arguments)
  };
  h.wbg.__wbg_focus_6b6181f7644f6dbc = function() {
    return P((a => {
      i(a).focus()
    }), arguments)
  };
  h.wbg.__wbg_destination_f7f82a0a30ca8bba = (a => {
    const b = i(a).destination;
    return m(b)
  });
  h.wbg.__wbg_currentTime_a3102f1ef74fca96 = (a => {
    const b = i(a).currentTime;
    return b
  });
  h.wbg.__wbg_state_4cb19ca21325c1a7 = (a => {
    const b = i(a).state;
    return (U.indexOf(b) + ae || ar) - ae
  });
  h.wbg.__wbg_new_803eec48b5d3212b = function() {
    return P((() => {
      const a = new f();
      return m(a)
    }), arguments)
  };
  h.wbg.__wbg_createBufferSource_ed2df6b1d0df0f14 = function() {
    return P((a => {
      const b = i(a).createBufferSource();
      return m(b)
    }), arguments)
  };
  h.wbg.__wbg_decodeAudioData_9831d69b447a81ed = function() {
    return P(((a, b) => {
      const c = i(a).decodeAudioData(i(b));
      return m(c)
    }), arguments)
  };
  h.wbg.__wbg_resume_9c4295ca96d8c40a = function() {
    return P((a => {
      const b = i(a).resume();
      return m(b)
    }), arguments)
  };
  h.wbg.__wbg_instanceof_CanvasRenderingContext2d_775df7bd32f07559 = (a => {
    let b;
    try {
      b = i(a) instanceof CanvasRenderingContext2D
    } catch (a) {
      b = !1
    }
    const c = b;
    return c
  });
  h.wbg.__wbg_setglobalAlpha_11359e7b6edc46d0 = ((a, b) => {
    i(a).globalAlpha = b
  });
  h.wbg.__wbg_setfillStyle_2cc2c748b938a95e = ((a, b, c) => {
    i(a).fillStyle = t(b, c)
  });
  h.wbg.__wbg_beginPath_03b82752a91dba4b = (a => {
    i(a).beginPath()
  });
  h.wbg.__wbg_fill_b7e7fd440fcd53b1 = (a => {
    i(a).fill()
  });
  h.wbg.__wbg_closePath_f5b06f55d416841e = (a => {
    i(a).closePath()
  });
  h.wbg.__wbg_ellipse_ad0bddf007c5e28c = function() {
    return P(((a, b, c, d, e, f, g, h) => {
      i(a).ellipse(b, c, d, e, f, g, h)
    }), arguments)
  };
  h.wbg.__wbg_lineTo_1da60c4e058c338e = ((a, b, c) => {
    i(a).lineTo(b, c)
  });
  h.wbg.__wbg_moveTo_8756b579ffc530b4 = ((a, b, c) => {
    i(a).moveTo(b, c)
  });
  h.wbg.__wbg_reset_1157d6490cc3983e = (a => {
    i(a).reset()
  });
  h.wbg.__wbg_code_9d4413f8b44b70c2 = (a => {
    const b = i(a).code;
    return b
  });
  h.wbg.__wbg_instanceof_ReadableStreamDefaultReader_ed641a2e3f11142b = (a => {
    let b;
    try {
      b = i(a) instanceof ReadableStreamDefaultReader
    } catch (a) {
      b = !1
    }
    const c = b;
    return c
  });
  h.wbg.__wbg_read_08d62388e7870059 = (a => {
    const b = i(a).read();
    return m(b)
  });
  h.wbg.__wbg_lock_bdb2c69542bfbccb = function() {
    return P(((a, b) => {
      const c = i(a).lock(W[b]);
      return m(c)
    }), arguments)
  };
  h.wbg.__wbg_setclosecode_20554a1734b08cdd = ((a, b) => {
    i(a).closeCode = b >>> ah
  });
  h.wbg.__wbg_writeText_9d976569ea57aa0d = ((a, b, c) => {
    const d = i(a).writeText(t(b, c));
    return m(d)
  });
  h.wbg.__wbg_top_5f4586313f3e086f = (a => {
    const b = i(a).top;
    return b
  });
  h.wbg.__wbg_left_324ad4ce0086311f = (a => {
    const b = i(a).left;
    return b
  });
  h.wbg.__wbg_keyCode_b40a8c053bb90ca7 = (a => {
    const b = i(a).keyCode;
    return b
  });
  h.wbg.__wbg_ctrlKey_f592192d87040d94 = (a => {
    const b = i(a).ctrlKey;
    return b
  });
  h.wbg.__wbg_shiftKey_cb120edc9c25950d = (a => {
    const b = i(a).shiftKey;
    return b
  });
  h.wbg.__wbg_metaKey_0735ca81e2ec6c72 = (a => {
    const b = i(a).metaKey;
    return b
  });
  h.wbg.__wbg_domainLookupStart_288ba911e6f3f0bd = (a => {
    const b = i(a).domainLookupStart;
    return b
  });
  h.wbg.__wbg_domainLookupEnd_c6b7add9c12d2719 = (a => {
    const b = i(a).domainLookupEnd;
    return b
  });
  h.wbg.__wbg_connectStart_3125731380accc5d = (a => {
    const b = i(a).connectStart;
    return b
  });
  h.wbg.__wbg_connectEnd_ff72e4f8207c5495 = (a => {
    const b = i(a).connectEnd;
    return b
  });
  h.wbg.__wbg_secureConnectionStart_d1b3cca1b36b09ab = (a => {
    const b = i(a).secureConnectionStart;
    return b
  });
  h.wbg.__wbg_requestStart_9f60a4d744f649e0 = (a => {
    const b = i(a).requestStart;
    return b
  });
  h.wbg.__wbg_responseEnd_5c9d036f01a00d26 = (a => {
    const b = i(a).responseEnd;
    return b
  });
  h.wbg.__wbg_href_07ab8fba72e97d85 = ((a, b) => {
    const c = i(b).href;
    const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    const e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_protocol_f686ce4d3de7e30d = ((a, b) => {
    const c = i(b).protocol;
    const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    const e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_host_e417901470d71f54 = ((a, b) => {
    const c = i(b).host;
    const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    const e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_pathname_e2ffbf8ec6773a59 = ((a, b) => {
    const c = i(b).pathname;
    const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    const e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_search_b46ea3b7e7b1866c = ((a, b) => {
    const c = i(b).search;
    const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    const e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_setsearch_189e8dd0ab28f146 = ((a, b, c) => {
    i(a).search = t(b, c)
  });
  h.wbg.__wbg_hash_cabc4c43a4d7e941 = ((a, b) => {
    const c = i(b).hash;
    const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    const e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_sethash_d89aaa1f20568488 = ((a, b, c) => {
    i(a).hash = t(b, c)
  });
  h.wbg.__wbg_new_1cabf49927794f50 = function() {
    return P(((a, b) => {
      const c = new URL(t(a, b));
      return m(c)
    }), arguments)
  };
  h.wbg.__wbg_newwithbase_ba00450eb5df91c3 = function() {
    return P(((a, b, c, d) => {
      const e = new URL(t(a, b), t(c, d));
      return m(e)
    }), arguments)
  };
  h.wbg.__wbg_newwithstrandinit_4b92c89af0a8e383 = function() {
    return P(((a, b, c) => {
      const d = new Request(t(a, b), i(c));
      return m(d)
    }), arguments)
  };
  h.wbg.__wbg_instanceof_Response_3c0e210a57ff751d = (a => {
    let b;
    try {
      b = i(a) instanceof Response
    } catch (a) {
      b = !1
    }
    const c = b;
    return c
  });
  h.wbg.__wbg_url_58af972663531d16 = ((a, b) => {
    const c = i(b).url;
    const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    const e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_ok_abdcc292e508a59f = (a => {
    const b = i(a).ok;
    return b
  });
  h.wbg.__wbg_arrayBuffer_144729e09879650e = function() {
    return P((a => {
      const b = i(a).arrayBuffer();
      return m(b)
    }), arguments)
  };
  h.wbg.__wbg_text_ebeee8b31af4c919 = function() {
    return P((a => {
      const b = i(a).text();
      return m(b)
    }), arguments)
  };
  h.wbg.__wbg_state_ea7aeeadc8019f77 = function() {
    return P((a => {
      const b = i(a).state;
      return m(b)
    }), arguments)
  };
  h.wbg.__wbg_pushState_fd9ad18c3fdad921 = function() {
    return P(((a, b, c, d, e, f) => {
      i(a).pushState(i(b), t(c, d), e === ah ? aa : t(e, f))
    }), arguments)
  };
  h.wbg.__wbg_replaceState_590d6294219f655e = function() {
    return P(((a, b, c, d, e, f) => {
      i(a).replaceState(i(b), t(c, d), e === ah ? aa : t(e, f))
    }), arguments)
  };
  h.wbg.__wbg_value_a8d0480de0da39cf = ((a, b) => {
    const c = i(b).value;
    const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    const e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_setvalue_b68cd0e5fd3eb17f = ((a, b, c) => {
    i(a).value = t(b, c)
  });
  h.wbg.__wbg_href_a78089b3b726e0af = function() {
    return P(((a, b) => {
      const c = i(b).href;
      const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
      const e = u;
      p().setInt32(a + ar * ae, e, !0);
      p().setInt32(a + ar * ah, d, !0)
    }), arguments)
  };
  h.wbg.__wbg_origin_1830c25dfb01148b = function() {
    return P(((a, b) => {
      const c = i(b).origin;
      const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
      const e = u;
      p().setInt32(a + ar * ae, e, !0);
      p().setInt32(a + ar * ah, d, !0)
    }), arguments)
  };
  h.wbg.__wbg_protocol_39dcf7495862d01b = function() {
    return P(((a, b) => {
      const c = i(b).protocol;
      const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
      const e = u;
      p().setInt32(a + ar * ae, e, !0);
      p().setInt32(a + ar * ah, d, !0)
    }), arguments)
  };
  h.wbg.__wbg_host_0dbedd515e7d7dff = function() {
    return P(((a, b) => {
      const c = i(b).host;
      const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
      const e = u;
      p().setInt32(a + ar * ae, e, !0);
      p().setInt32(a + ar * ah, d, !0)
    }), arguments)
  };
  h.wbg.__wbg_hostname_f0edc9340c081d0e = function() {
    return P(((a, b) => {
      const c = i(b).hostname;
      const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
      const e = u;
      p().setInt32(a + ar * ae, e, !0);
      p().setInt32(a + ar * ah, d, !0)
    }), arguments)
  };
  h.wbg.__wbg_pathname_f807053b46d955a7 = function() {
    return P(((a, b) => {
      const c = i(b).pathname;
      const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
      const e = u;
      p().setInt32(a + ar * ae, e, !0);
      p().setInt32(a + ar * ah, d, !0)
    }), arguments)
  };
  h.wbg.__wbg_search_aaeccdb8c45f3efa = function() {
    return P(((a, b) => {
      const c = i(b).search;
      const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
      const e = u;
      p().setInt32(a + ar * ae, e, !0);
      p().setInt32(a + ar * ah, d, !0)
    }), arguments)
  };
  h.wbg.__wbg_hash_acef7ae4422b13b0 = function() {
    return P(((a, b) => {
      const c = i(b).hash;
      const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
      const e = u;
      p().setInt32(a + ar * ae, e, !0);
      p().setInt32(a + ar * ah, d, !0)
    }), arguments)
  };
  h.wbg.__wbg_reload_48ef5b2fe5c81cca = function() {
    return P((a => {
      i(a).reload()
    }), arguments)
  };
  h.wbg.__wbg_instanceof_PerformanceNavigationTiming_27d53de72d2503e8 = (a => {
    let b;
    try {
      b = i(a) instanceof PerformanceNavigationTiming
    } catch (a) {
      b = !1
    }
    const c = b;
    return c
  });
  h.wbg.__wbg_domInteractive_dfb9e360bd91c695 = (a => {
    const b = i(a).domInteractive;
    return b
  });
  h.wbg.__wbg_loadEventEnd_b9c52e194590c6fc = (a => {
    const b = i(a).loadEventEnd;
    return b
  });
  h.wbg.__wbg_orientation_19c060e1e95228ab = (a => {
    const b = i(a).orientation;
    return m(b)
  });
  h.wbg.__wbg_get_b30f231264475a51 = function() {
    return P(((a, b, c, d) => {
      const e = i(b)[t(c, d)];
      var f = n(e) ? ah : x(e, g.__wbindgen_malloc, g.__wbindgen_realloc);
      var h = u;
      p().setInt32(a + ar * ae, h, !0);
      p().setInt32(a + ar * ah, f, !0)
    }), arguments)
  };
  h.wbg.__wbg_set_3992eb5ebf27cbdc = function() {
    return P(((a, b, c, d, e) => {
      i(a)[t(b, c)] = t(d, e)
    }), arguments)
  };
  h.wbg.__wbg_delete_a51d3c029e9c7b0d = function() {
    return P(((a, b, c) => {
      delete i(a)[t(b, c)]
    }), arguments)
  };
  h.wbg.__wbg_setalgorithm_4306b3ca0a61a41a = ((a, b, c) => {
    i(a).algorithm = t(b, c)
  });
  h.wbg.__wbg_setvalue_4ac64fd66035afd5 = ((a, b) => {
    i(a).value = i(b)
  });
  h.wbg.__wbg_connect_9a09c3bcaa0c9d22 = function() {
    return P(((a, b) => {
      const c = i(a).connect(i(b));
      return m(c)
    }), arguments)
  };
  h.wbg.__wbg_message_81c104ef29dcf2fc = ((a, b) => {
    const c = i(b).message;
    const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    const e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_error_53b825b78553741c = (a => {
    const b = i(a).error;
    return m(b)
  });
  h.wbg.__wbg_instanceof_Event_ed543a14ff261c08 = (a => {
    let b;
    try {
      b = i(a) instanceof Event
    } catch (a) {
      b = !1
    }
    const c = b;
    return c
  });
  h.wbg.__wbg_type_739ef24b64f58229 = ((a, b) => {
    const c = i(b).type;
    const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    const e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_target_b0499015ea29563d = (a => {
    const b = i(a).target;
    return n(b) ? ah : m(b)
  });
  h.wbg.__wbg_bubbles_c48a1056384e852c = (a => {
    const b = i(a).bubbles;
    return b
  });
  h.wbg.__wbg_cancelBubble_1fc3632e2ba513ed = (a => {
    const b = i(a).cancelBubble;
    return b
  });
  h.wbg.__wbg_composedPath_d27a772830ab5dd0 = (a => {
    const b = i(a).composedPath();
    return m(b)
  });
  h.wbg.__wbg_preventDefault_eecc4a63e64c4526 = (a => {
    i(a).preventDefault()
  });
  h.wbg.__wbg_stopPropagation_8a8fc87824cc6f0b = (a => {
    i(a).stopPropagation()
  });
  h.wbg.__wbg_instanceof_HtmlCanvasElement_022ad88c76df9031 = (a => {
    let b;
    try {
      b = i(a) instanceof HTMLCanvasElement
    } catch (a) {
      b = !1
    }
    const c = b;
    return c
  });
  h.wbg.__wbg_getContext_bf8985355a4d22ca = function() {
    return P(((a, b, c) => {
      const d = i(a).getContext(t(b, c));
      return n(d) ? ah : m(d)
    }), arguments)
  };
  h.wbg.__wbg_isComposing_67ecb026b0e0555e = (a => {
    const b = i(a).isComposing;
    return b
  });
  h.wbg.__wbg_data_134d3a704b9fca32 = (a => {
    const b = i(a).data;
    return m(b)
  });
  h.wbg.__wbg_clientX_a8eebf094c107e43 = (a => {
    const b = i(a).clientX;
    return b
  });
  h.wbg.__wbg_clientY_ffe0a79af8089cd4 = (a => {
    const b = i(a).clientY;
    return b
  });
  h.wbg.__wbg_x_5afb353c7a4166cb = (a => {
    const b = i(a).x;
    return b
  });
  h.wbg.__wbg_y_86927adc9ef15475 = (a => {
    const b = i(a).y;
    return b
  });
  h.wbg.__wbg_button_d8226b772c8cf494 = (a => {
    const b = i(a).button;
    return b
  });
  h.wbg.__wbg_movementX_468fdc7a7281744b = (a => {
    const b = i(a).movementX;
    return b
  });
  h.wbg.__wbg_movementY_8bbbf8c3bffd1fce = (a => {
    const b = i(a).movementY;
    return b
  });
  h.wbg.__wbg_new_47f4f78a5323a599 = function() {
    return P(((a, b) => {
      const c = new MouseEvent(t(a, b));
      return m(c)
    }), arguments)
  };
  h.wbg.__wbg_identifier_b858c904e1c72507 = (a => {
    const b = i(a).identifier;
    return b
  });
  h.wbg.__wbg_clientX_0e075d664eb70517 = (a => {
    const b = i(a).clientX;
    return b
  });
  h.wbg.__wbg_clientY_32b24b7be6b2e79d = (a => {
    const b = i(a).clientY;
    return b
  });
  h.wbg.__wbg_ready_5983240fbf1e48cb = (a => {
    const b = i(a).ready;
    return m(b)
  });
  h.wbg.__wbg_closed_7da0c5dc67244360 = (a => {
    const b = i(a).closed;
    return m(b)
  });
  h.wbg.__wbg_datagrams_3a320e2ccef54a0b = (a => {
    const b = i(a).datagrams;
    return m(b)
  });
  h.wbg.__wbg_newwithoptions_7692f6ccf98568cc = function() {
    return P(((a, b, c) => {
      const d = new WebTransport(t(a, b), i(c));
      return m(d)
    }), arguments)
  };
  h.wbg.__wbg_close_b64f210801cfc505 = ((a, b) => {
    i(a).close(i(b))
  });
  h.wbg.__wbg_createBidirectionalStream_d605e4189f72d713 = (a => {
    const b = i(a).createBidirectionalStream();
    return m(b)
  });
  h.wbg.__wbg_instanceof_AudioBuffer_f9dd07677b9c9362 = (a => {
    let b;
    try {
      b = i(a) instanceof AudioBuffer
    } catch (a) {
      b = !1
    }
    const c = b;
    return c
  });
  h.wbg.__wbg_x_a9a34a1bc15c8dea = (a => {
    const b = i(a).x;
    return b
  });
  h.wbg.__wbg_y_4926ebe58a2a92c8 = (a => {
    const b = i(a).y;
    return b
  });
  h.wbg.__wbg_width_28175f04c07458aa = (a => {
    const b = i(a).width;
    return b
  });
  h.wbg.__wbg_height_dbd0616ae39a99b1 = (a => {
    const b = i(a).height;
    return b
  });
  h.wbg.__wbg_instanceof_HtmlSelectElement_66dfc08c717b1515 = (a => {
    let b;
    try {
      b = i(a) instanceof HTMLSelectElement
    } catch (a) {
      b = !1
    }
    const c = b;
    return c
  });
  h.wbg.__wbg_value_0b0cebe9335a78ae = ((a, b) => {
    const c = i(b).value;
    const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    const e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_matches_7df350fbe7beb09f = (a => {
    const b = i(a).matches;
    return b
  });
  h.wbg.__wbg_parentNode_7e7d8adc9b41ce58 = (a => {
    const b = i(a).parentNode;
    return n(b) ? ah : m(b)
  });
  h.wbg.__wbg_parentElement_bf013e6093029477 = (a => {
    const b = i(a).parentElement;
    return n(b) ? ah : m(b)
  });
  h.wbg.__wbg_childNodes_87c5e311593a6192 = (a => {
    const b = i(a).childNodes;
    return m(b)
  });
  h.wbg.__wbg_firstChild_66afcbc8d433a83b = (a => {
    const b = i(a).firstChild;
    return n(b) ? ah : m(b)
  });
  h.wbg.__wbg_lastChild_d6a3eebc8b3cdd8c = (a => {
    const b = i(a).lastChild;
    return n(b) ? ah : m(b)
  });
  h.wbg.__wbg_nextSibling_46da01c3a2ce3774 = (a => {
    const b = i(a).nextSibling;
    return n(b) ? ah : m(b)
  });
  h.wbg.__wbg_setnodeValue_ddb802810d61c610 = ((a, b, c) => {
    i(a).nodeValue = b === ah ? aa : t(b, c)
  });
  h.wbg.__wbg_textContent_389dd460500a44bd = ((a, b) => {
    const c = i(b).textContent;
    var d = n(c) ? ah : x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    var e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_settextContent_f9c4b60e6c009ea2 = ((a, b, c) => {
    i(a).textContent = b === ah ? aa : t(b, c)
  });
  h.wbg.__wbg_appendChild_bc4a0deae90a5164 = function() {
    return P(((a, b) => {
      const c = i(a).appendChild(i(b));
      return m(c)
    }), arguments)
  };
  h.wbg.__wbg_cloneNode_bd4b7e47afe3ce9f = function() {
    return P((a => {
      const b = i(a).cloneNode();
      return m(b)
    }), arguments)
  };
  h.wbg.__wbg_insertBefore_5caa6ab4d3d6b481 = function() {
    return P(((a, b, c) => {
      const d = i(a).insertBefore(i(b), i(c));
      return m(d)
    }), arguments)
  };
  h.wbg.__wbg_removeChild_aa85e67649730769 = function() {
    return P(((a, b) => {
      const c = i(a).removeChild(i(b));
      return m(c)
    }), arguments)
  };
  h.wbg.__wbg_instanceof_ShadowRoot_6d00cedbc919c9a6 = (a => {
    let b;
    try {
      b = i(a) instanceof ShadowRoot
    } catch (a) {
      b = !1
    }
    const c = b;
    return c
  });
  h.wbg.__wbg_host_4a0b95cc36a45cb6 = (a => {
    const b = i(a).host;
    return m(b)
  });
  h.wbg.__wbg_bufferedAmount_3ddc063945250627 = (a => {
    const b = i(a).bufferedAmount;
    return b
  });
  h.wbg.__wbg_setonopen_c0e1464e3ea28727 = ((a, b) => {
    i(a).onopen = i(b)
  });
  h.wbg.__wbg_setonerror_e16deca7fd15a59c = ((a, b) => {
    i(a).onerror = i(b)
  });
  h.wbg.__wbg_setonclose_9a28780f7d46ed03 = ((a, b) => {
    i(a).onclose = i(b)
  });
  h.wbg.__wbg_setonmessage_84cd941c1df08da7 = ((a, b) => {
    i(a).onmessage = i(b)
  });
  h.wbg.__wbg_setbinaryType_2befea8ba88b61e2 = ((a, b) => {
    i(a).binaryType = V[b]
  });
  h.wbg.__wbg_new_d550f7a7120dd942 = function() {
    return P(((a, b) => {
      const c = new WebSocket(t(a, b));
      return m(c)
    }), arguments)
  };
  h.wbg.__wbg_close_9e3b743c528a8d31 = function() {
    return P((a => {
      i(a).close()
    }), arguments)
  };
  h.wbg.__wbg_send_fe006eb24f5e2694 = function() {
    return P(((a, b, c) => {
      i(a).send(R(b, c))
    }), arguments)
  };
  h.wbg.__wbg_getEntriesByType_d9c73b7b08bad6a8 = ((a, b, c) => {
    const d = i(a).getEntriesByType(t(b, c));
    return m(d)
  });
  h.wbg.__wbg_reason_487876b7088b85c6 = (a => {
    const b = i(a).reason;
    return m(b)
  });
  h.wbg.__wbg_getWriter_2fe953e01e7ca9c5 = function() {
    return P((a => {
      const b = i(a).getWriter();
      return m(b)
    }), arguments)
  };
  h.wbg.__wbg_debug_69675dd374e2c249 = (a => {
    console.debug(i(a))
  });
  h.wbg.__wbg_error_53abcd6a461f73d8 = (a => {
    console.error(i(a))
  });
  h.wbg.__wbg_info_f073b719c8035bbf = (a => {
    console.info(i(a))
  });
  h.wbg.__wbg_log_f740dc2253ea759b = (a => {
    console.log(i(a))
  });
  h.wbg.__wbg_warn_41503a1c2194de89 = (a => {
    console.warn(i(a))
  });
  h.wbg.__wbg_gain_d2293f920e9fbe2f = (a => {
    const b = i(a).gain;
    return m(b)
  });
  h.wbg.__wbg_new_e2532ce8a131595c = function() {
    return P((a => {
      const b = new GainNode(i(a));
      return m(b)
    }), arguments)
  };
  h.wbg.__wbg_addEventListener_0ac72681badaf1aa = function() {
    return P(((a, b, c, d, e) => {
      i(a).addEventListener(t(b, c), i(d), i(e))
    }), arguments)
  };
  h.wbg.__wbg_removeEventListener_4740f011c11e2737 = function() {
    return P(((a, b, c, d, e) => {
      i(a).removeEventListener(t(b, c), i(d), e !== ah)
    }), arguments)
  };
  h.wbg.__wbg_targetTouches_faffde5127036c13 = (a => {
    const b = i(a).targetTouches;
    return m(b)
  });
  h.wbg.__wbg_readable_98c34c75bea719e5 = (a => {
    const b = i(a).readable;
    return m(b)
  });
  h.wbg.__wbg_writable_533b4c4ce303f02c = (a => {
    const b = i(a).writable;
    return m(b)
  });
  h.wbg.__wbg_maxDatagramSize_237e892bbf3cd782 = (a => {
    const b = i(a).maxDatagramSize;
    return b
  });
  h.wbg.__wbg_setincomingMaxAge_692d9c9c8d042faa = ((a, b) => {
    i(a).incomingMaxAge = b
  });
  h.wbg.__wbg_setoutgoingMaxAge_b2130e6fdd4f9308 = ((a, b) => {
    i(a).outgoingMaxAge = b
  });
  h.wbg.__wbg_setallowpooling_e3089782268dbc6c = ((a, b) => {
    i(a).allowPooling = b !== ah
  });
  h.wbg.__wbg_setcongestioncontrol_0b763b16208a3996 = ((a, b) => {
    i(a).congestionControl = a2[b]
  });
  h.wbg.__wbg_setrequireunreliable_af798bd2ef6444c8 = ((a, b) => {
    i(a).requireUnreliable = b !== ah
  });
  h.wbg.__wbg_setservercertificatehashes_9196d5618c2dbfbc = ((a, b) => {
    i(a).serverCertificateHashes = i(b)
  });
  h.wbg.__wbg_href_31116c78f661d5b2 = ((a, b) => {
    const c = i(b).href;
    const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    const e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_clipboard_e43b3472696043c3 = (a => {
    const b = i(a).clipboard;
    return m(b)
  });
  h.wbg.__wbg_userAgent_b433f0f22dfedec5 = function() {
    return P(((a, b) => {
      const c = i(b).userAgent;
      const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
      const e = u;
      p().setInt32(a + ar * ae, e, !0);
      p().setInt32(a + ar * ah, d, !0)
    }), arguments)
  };
  h.wbg.__wbg_language_61b86dba8fc5aaf3 = ((a, b) => {
    const c = i(b).language;
    var d = n(c) ? ah : x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    var e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_length_1b6ac4894265d4e6 = (a => {
    const b = i(a).length;
    return b
  });
  h.wbg.__wbg_item_b480aa49bad2197f = ((a, b) => {
    const c = i(a).item(b >>> ah);
    return n(c) ? ah : m(c)
  });
  h.wbg.__wbg_get_4d863ed1d42a2b7d = ((a, b) => {
    const c = i(a)[b >>> ah];
    return n(c) ? ah : m(c)
  });
  h.wbg.__wbg_write_8516d1ea4c89b39d = ((a, b) => {
    const c = i(a).write(i(b));
    return m(c)
  });
  h.wbg.__wbg_setcapture_216080a2de0d127c = ((a, b) => {
    i(a).capture = b !== ah
  });
  h.wbg.__wbg_setonce_9f2ce9d61cf01425 = ((a, b) => {
    i(a).once = b !== ah
  });
  h.wbg.__wbg_setpassive_b1f337166a79f6c5 = ((a, b) => {
    i(a).passive = b !== ah
  });
  h.wbg.__wbg_setbody_aa8b691bec428bf4 = ((a, b) => {
    i(a).body = i(b)
  });
  h.wbg.__wbg_setcredentials_a4e661320cdb9738 = ((a, b) => {
    i(a).credentials = Z[b]
  });
  h.wbg.__wbg_setmethod_ce2da76000b02f6a = ((a, b, c) => {
    i(a).method = t(b, c)
  });
  h.wbg.__wbg_setmode_4919fd636102c586 = ((a, b) => {
    i(a).mode = _[b]
  });
  h.wbg.__wbg_instanceof_AudioBufferSourceNode_d3e8d898c51be5ff = (a => {
    let b;
    try {
      b = i(a) instanceof AudioBufferSourceNode
    } catch (a) {
      b = !1
    }
    const c = b;
    return c
  });
  h.wbg.__wbg_setbuffer_f4457f8f6a733e5a = ((a, b) => {
    i(a).buffer = i(b)
  });
  h.wbg.__wbg_detune_2cba6321a3ccd938 = (a => {
    const b = i(a).detune;
    return m(b)
  });
  h.wbg.__wbg_setloop_ddd69d64a8ad0286 = ((a, b) => {
    i(a).loop = b !== ah
  });
  h.wbg.__wbg_setloopStart_beda3560d191d806 = ((a, b) => {
    i(a).loopStart = b
  });
  h.wbg.__wbg_setloopEnd_39632db5e5500897 = ((a, b) => {
    i(a).loopEnd = b
  });
  h.wbg.__wbg_setonended_95d7e5856cbda569 = ((a, b) => {
    i(a).onended = i(b)
  });
  h.wbg.__wbg_start_90a0bf3f38b48ab2 = function() {
    return P(((a, b, c) => {
      i(a).start(b, c)
    }), arguments)
  };
  h.wbg.__wbg_start_305be83e41b3859e = function() {
    return P(((a, b, c, d) => {
      i(a).start(b, c, d)
    }), arguments)
  };
  h.wbg.__wbg_stop_c7413e0071a3af6e = function() {
    return P((a => {
      i(a).stop()
    }), arguments)
  };
  h.wbg.__wbg_instanceof_HtmlInputElement_ee25196edbacced9 = (a => {
    let b;
    try {
      b = i(a) instanceof HTMLInputElement
    } catch (a) {
      b = !1
    }
    const c = b;
    return c
  });
  h.wbg.__wbg_setchecked_0b332e38c9022183 = ((a, b) => {
    i(a).checked = b !== ah
  });
  h.wbg.__wbg_value_0cffd86fb9a5a18d = ((a, b) => {
    const c = i(b).value;
    const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    const e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_setvalue_36bcf6f86c998f0a = ((a, b, c) => {
    i(a).value = t(b, c)
  });
  h.wbg.__wbg_setSelectionRange_11dab7d1f532735f = function() {
    return P(((a, b, c) => {
      i(a).setSelectionRange(b >>> ah, c >>> ah)
    }), arguments)
  };
  h.wbg.__wbg_getReader_aea534f0f9288b85 = (a => {
    const b = i(a).getReader();
    return m(b)
  });
  h.wbg.__wbg_statusMessage_d002a639632880b1 = ((a, b) => {
    const c = i(b).statusMessage;
    const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    const e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbg_instanceof_WebTransportBidirectionalStream_72dda618b3c61f49 = (a => {
    let b;
    try {
      b = i(a) instanceof WebTransportBidirectionalStream
    } catch (a) {
      b = !1
    }
    const c = b;
    return c
  });
  h.wbg.__wbg_readable_08e296c2782e4e9a = (a => {
    const b = i(a).readable;
    return m(b)
  });
  h.wbg.__wbg_writable_2c1037c980fa0a8a = (a => {
    const b = i(a).writable;
    return m(b)
  });
  h.wbg.__wbg_setvalue_59e0ee1befc256e8 = ((a, b) => {
    i(a).value = b
  });
  h.wbg.__wbg_cancelScheduledValues_26c5a54f7f20558d = function() {
    return P(((a, b) => {
      const c = i(a).cancelScheduledValues(b);
      return m(c)
    }), arguments)
  };
  h.wbg.__wbg_linearRampToValueAtTime_93ac470231f4254e = function() {
    return P(((a, b, c) => {
      const d = i(a).linearRampToValueAtTime(b, c);
      return m(d)
    }), arguments)
  };
  h.wbg.__wbg_new_4e7308fbedde3997 = function() {
    return P((() => {
      const a = new FormData();
      return m(a)
    }), arguments)
  };
  h.wbg.__wbg_append_43a4b1c9d5df4168 = function() {
    return P(((a, b, c, d, e) => {
      i(a).append(t(b, c), t(d, e))
    }), arguments)
  };
  h.wbg.__wbg_set_54b025a47e88e70c = function() {
    return P(((a, b, c, d, e) => {
      i(a).set(t(b, c), t(d, e))
    }), arguments)
  };
  h.wbg.__wbg_deltaY_afd77a1b9e0d9ccd = (a => {
    const b = i(a).deltaY;
    return b
  });
  h.wbg.__wbg_crypto_566d7465cdbb6b7a = (a => {
    const b = i(a).crypto;
    return m(b)
  });
  h.wbg.__wbg_process_dc09a8c7d59982f6 = (a => {
    const b = i(a).process;
    return m(b)
  });
  h.wbg.__wbg_versions_d98c6400c6ca2bd8 = (a => {
    const b = i(a).versions;
    return m(b)
  });
  h.wbg.__wbg_node_caaf83d002149bd5 = (a => {
    const b = i(a).node;
    return m(b)
  });
  h.wbg.__wbg_require_94a9da52636aacbf = function() {
    return P((() => {
      const a = module.require;
      return m(a)
    }), arguments)
  };
  h.wbg.__wbg_msCrypto_0b84745e9245cdf6 = (a => {
    const b = i(a).msCrypto;
    return m(b)
  });
  h.wbg.__wbg_randomFillSync_290977693942bf03 = function() {
    return P(((a, b) => {
      i(a).randomFillSync(l(b))
    }), arguments)
  };
  h.wbg.__wbg_getRandomValues_260cc23a41afad9a = function() {
    return P(((a, b) => {
      i(a).getRandomValues(i(b))
    }), arguments)
  };
  h.wbg.__wbg_get_5419cf6b954aa11d = ((a, b) => {
    const c = i(a)[b >>> ah];
    return m(c)
  });
  h.wbg.__wbg_length_f217bbbf7e8e4df4 = (a => {
    const b = i(a).length;
    return b
  });
  h.wbg.__wbg_newnoargs_1ede4bf2ebbaaf43 = ((a, b) => {
    const c = new Function(t(a, b));
    return m(c)
  });
  h.wbg.__wbg_get_ef828680c64da212 = function() {
    return P(((a, b) => {
      const c = ax.get(i(a), i(b));
      return m(c)
    }), arguments)
  };
  h.wbg.__wbg_call_a9ef466721e824f2 = function() {
    return P(((a, b) => {
      const c = i(a).call(i(b));
      return m(c)
    }), arguments)
  };
  h.wbg.__wbg_new_e69b5f66fda8f13c = (() => {
    const a = new ay();
    return m(a)
  });
  h.wbg.__wbg_length_ace210b441c50e19 = (a => {
    const b = i(a).length;
    return b
  });
  h.wbg.__wbg_self_bf91bf94d9e04084 = function() {
    return P((() => {
      const a = self.self;
      return m(a)
    }), arguments)
  };
  h.wbg.__wbg_window_52dd9f07d03fd5f8 = function() {
    return P((() => {
      const a = window.window;
      return m(a)
    }), arguments)
  };
  h.wbg.__wbg_globalThis_05c129bf37fcf1be = function() {
    return P((() => {
      const a = globalThis.globalThis;
      return m(a)
    }), arguments)
  };
  h.wbg.__wbg_global_3eca19bb09e9c484 = function() {
    return P((() => {
      const a = global.global;
      return m(a)
    }), arguments)
  };
  h.wbg.__wbg_from_91a67a5f04c98a54 = (a => {
    const b = ab.from(i(a));
    return m(b)
  });
  h.wbg.__wbg_of_064d1507296514c2 = (a => {
    const b = ab.of(i(a));
    return m(b)
  });
  h.wbg.__wbg_instanceof_ArrayBuffer_74945570b4a62ec7 = (a => {
    let b;
    try {
      b = i(a) instanceof ArrayBuffer
    } catch (a) {
      b = !1
    }
    const c = b;
    return c
  });
  h.wbg.__wbg_call_3bfa248576352471 = function() {
    return P(((a, b, c) => {
      const d = i(a).call(i(b), i(c));
      return m(d)
    }), arguments)
  };
  h.wbg.__wbg_isSafeInteger_b9dff570f01a9100 = (a => {
    const b = Number.isSafeInteger(i(a));
    return b
  });
  h.wbg.__wbg_getHours_5e2daaa82aceec10 = (a => {
    const b = i(a).getHours();
    return b
  });
  h.wbg.__wbg_getTimezoneOffset_93f7d384c8ade3be = (a => {
    const b = i(a).getTimezoneOffset();
    return b
  });
  h.wbg.__wbg_new0_218ada33b570be35 = (() => {
    const a = new az();
    return m(a)
  });
  h.wbg.__wbg_now_70af4fe37a792251 = (() => {
    const a = az.now();
    return a
  });
  h.wbg.__wbg_entries_c02034de337d3ee2 = (a => {
    const b = ay.entries(i(a));
    return m(b)
  });
  h.wbg.__wbg_is_4b64bc96710d6a0f = ((a, b) => {
    const c = ay.is(i(a), i(b));
    return c
  });
  h.wbg.__wbg_new_1073970097e5a420 = ((a, b) => {
    try {
      var c = {
        a: a,
        b: b
      };
      var d = (a, b) => {
        const d = c.a;
        c.a = ah;
        try {
          return S(d, c.b, a, b)
        } finally {
          c.a = d
        }
      };
      const e = new aA(d);
      return m(e)
    } finally {
      c.a = c.b = ah
    }
  });
  h.wbg.__wbg_resolve_0aad7c1484731c99 = (a => {
    const b = aA.resolve(i(a));
    return m(b)
  });
  h.wbg.__wbg_then_748f75edfb032440 = ((a, b) => {
    const c = i(a).then(i(b));
    return m(c)
  });
  h.wbg.__wbg_then_4866a7d9f55d8f3e = ((a, b, c) => {
    const d = i(a).then(i(b), i(c));
    return m(d)
  });
  h.wbg.__wbg_buffer_ccaed51a635d8a2d = (a => {
    const b = i(a).buffer;
    return m(b)
  });
  h.wbg.__wbg_newwithbyteoffsetandlength_7e3eb787208af730 = ((a, b, c) => {
    const d = new ai(i(a), b >>> ah, c >>> ah);
    return m(d)
  });
  h.wbg.__wbg_new_fec2611eb9180f95 = (a => {
    const b = new ai(i(a));
    return m(b)
  });
  h.wbg.__wbg_set_ec2fcf81bc573fd9 = ((a, b, c) => {
    i(a).set(i(b), c >>> ah)
  });
  h.wbg.__wbg_length_9254c4bd3b9f23c4 = (a => {
    const b = i(a).length;
    return b
  });
  h.wbg.__wbg_instanceof_Uint8Array_df0761410414ef36 = (a => {
    let b;
    try {
      b = i(a) instanceof ai
    } catch (a) {
      b = !1
    }
    const c = b;
    return c
  });
  h.wbg.__wbg_newwithlength_76462a666eca145f = (a => {
    const b = new ai(a >>> ah);
    return m(b)
  });
  h.wbg.__wbg_subarray_975a06f9dbd16995 = ((a, b, c) => {
    const d = i(a).subarray(b >>> ah, c >>> ah);
    return m(d)
  });
  h.wbg.__wbg_random_ff204240120aa46e = typeof aB == aj ? aB : T(`Math.random`);
  h.wbg.__wbg_stringify_eead5648c09faaf8 = function() {
    return P((a => {
      const b = ap(i(a));
      return m(b)
    }), arguments)
  };
  h.wbg.__wbg_set_e864d25d9b399c9f = function() {
    return P(((a, b, c) => {
      const d = ax.set(i(a), i(b), i(c));
      return d
    }), arguments)
  };
  h.wbg.__wbindgen_debug_string = ((a, b) => {
    const c = y(i(b));
    const d = x(c, g.__wbindgen_malloc, g.__wbindgen_realloc);
    const e = u;
    p().setInt32(a + ar * ae, e, !0);
    p().setInt32(a + ar * ah, d, !0)
  });
  h.wbg.__wbindgen_throw = ((a, b) => {
    throw new ag(t(a, b))
  });
  h.wbg.__wbindgen_memory = (() => {
    const a = g.memory;
    return m(a)
  });
  h.wbg.__wbindgen_closure_wrapper2167 = ((a, b, c) => {
    const d = A(a, b, aC, B);
    return m(d)
  });
  h.wbg.__wbindgen_closure_wrapper2169 = ((a, b, c) => {
    const d = A(a, b, aC, C);
    return m(d)
  });
  h.wbg.__wbindgen_closure_wrapper2171 = ((a, b, c) => {
    const d = A(a, b, aC, B);
    return m(d)
  });
  h.wbg.__wbindgen_closure_wrapper2173 = ((a, b, c) => {
    const d = A(a, b, aC, B);
    return m(d)
  });
  h.wbg.__wbindgen_closure_wrapper2175 = ((a, b, c) => {
    const d = D(a, b, aC, E);
    return m(d)
  });
  h.wbg.__wbindgen_closure_wrapper2177 = ((a, b, c) => {
    const d = A(a, b, aC, B);
    return m(d)
  });
  h.wbg.__wbindgen_closure_wrapper2179 = ((a, b, c) => {
    const d = A(a, b, aC, H);
    return m(d)
  });
  h.wbg.__wbindgen_closure_wrapper3598 = ((a, b, c) => {
    const d = D(a, b, aD, I);
    return m(d)
  });
  h.wbg.__wbindgen_closure_wrapper3599 = ((a, b, c) => {
    const d = A(a, b, aD, J);
    return m(d)
  });
  h.wbg.__wbindgen_closure_wrapper3602 = ((a, b, c) => {
    const d = A(a, b, aD, K);
    return m(d)
  });
  h.wbg.__wbindgen_closure_wrapper4540 = ((a, b, c) => {
    const d = A(a, b, 2776, L);
    return m(d)
  });
  h.wbg.__wbindgen_closure_wrapper5344 = ((a, b, c) => {
    const d = D(a, b, 3072, M);
    return m(d)
  });
  h.wbg.__wbindgen_closure_wrapper5720 = ((a, b, c) => {
    const d = A(a, b, 3167, N);
    return m(d)
  });
  h.wbg.__wbindgen_closure_wrapper5789 = ((a, b, c) => {
    const d = A(a, b, 3192, O);
    return m(d)
  });
  h[`/data/renderer.js`] = e;
  return h
});
var a3 = (async (a, b) => {
  if (typeof Response === aj && a instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === aj) {
      try {
        return await WebAssembly.instantiateStreaming(a, b)
      } catch (b) {
        if (a.headers.get(`Content-Type`) != `application/wasm`) {
          console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve Wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`, b)
        } else {
          throw b
        }
      }
    };
    const c = await a.arrayBuffer();
    return await WebAssembly.instantiate(c, b)
  } else {
    const c = await WebAssembly.instantiate(a, b);
    if (c instanceof WebAssembly.Instance) {
      return {
        instance: c,
        module: a
      }
    } else {
      return c
    }
  }
});
var E = ((a, b, c) => {
  g._ZN133__LT_dyn_u20_core__ops__function__Fn_LT__LP_A_C__RP__GT__u2b_Output_u20__u3d__u20_R_u20_as_u20_wasm_bindgen__closure__WasmClosure_GT_8describe6invoke17hc3abefee8eaaf21fE(a, b, m(c))
});
var C = ((a, b) => {
  g._ZN132__LT_dyn_u20_core__ops__function__FnMut_LT__LP__RP__GT__u2b_Output_u20__u3d__u20_R_u20_as_u20_wasm_bindgen__closure__WasmClosure_GT_8describe6invoke17h726c7cf7ba3b649dE(a, b)
});

function P(a, b) {
  try {
    return a.apply(this, b)
  } catch (a) {
    g.__wbindgen_exn_store(m(a))
  }
}
var L = ((a, b, c) => {
  g._ZN136__LT_dyn_u20_core__ops__function__FnMut_LT__LP_A_C__RP__GT__u2b_Output_u20__u3d__u20_R_u20_as_u20_wasm_bindgen__closure__WasmClosure_GT_8describe6invoke17hc36b2b6b32662e8aE(a, b, c)
});
var B = ((a, b, c) => {
  g._ZN136__LT_dyn_u20_core__ops__function__FnMut_LT__LP_A_C__RP__GT__u2b_Output_u20__u3d__u20_R_u20_as_u20_wasm_bindgen__closure__WasmClosure_GT_8describe6invoke17h098747d197b8d01bE(a, b, m(c))
});
var l = (a => {
  const b = i(a);
  k(a);
  return b
});
var H = ((a, b, c) => {
  try {
    g._ZN140__LT_dyn_u20_core__ops__function__FnMut_LT__LP__RF_A_C__RP__GT__u2b_Output_u20__u3d__u20_R_u20_as_u20_wasm_bindgen__closure__WasmClosure_GT_8describe6invoke17hb0dada27d9c624e7E(a, b, G(c))
  } finally {
    h[F++] = aa
  }
});
var N = ((a, b, c) => {
  g._ZN136__LT_dyn_u20_core__ops__function__FnMut_LT__LP_A_C__RP__GT__u2b_Output_u20__u3d__u20_R_u20_as_u20_wasm_bindgen__closure__WasmClosure_GT_8describe6invoke17hee91ef0d6fcffabdE(a, b, m(c))
});
var A = ((a, b, c, d) => {
  const e = {
    a: a,
    b: b,
    cnt: ae,
    dtor: c
  };
  const f = (...a) => {
    e.cnt++;
    const b = e.a;
    e.a = ah;
    try {
      return d(b, e.b, ...a)
    } finally {
      if (--e.cnt === ah) {
        g.__wbindgen_export_2.get(e.dtor)(b, e.b);
        z.unregister(e)
      } else {
        e.a = b
      }
    }
  };
  f.original = e;
  z.register(f, e, e);
  return f
});
var a6 = ((a, b) => {
  g = a.exports;
  a8.__wbindgen_wasm_module = b;
  o = ad;
  r = ad;
  g.__wbindgen_start();
  return g
});
var O = ((a, b, c) => {
  try {
    g._ZN140__LT_dyn_u20_core__ops__function__FnMut_LT__LP__RF_A_C__RP__GT__u2b_Output_u20__u3d__u20_R_u20_as_u20_wasm_bindgen__closure__WasmClosure_GT_8describe6invoke17h776a8b4922b56effE(a, b, G(c))
  } finally {
    h[F++] = aa
  }
});
var I = ((a, b) => {
  g._ZN129__LT_dyn_u20_core__ops__function__Fn_LT__LP__RP__GT__u2b_Output_u20__u3d__u20_R_u20_as_u20_wasm_bindgen__closure__WasmClosure_GT_8describe6invoke17h7543b38a028887f4E(a, b)
});
var M = ((a, b, c) => {
  try {
    g._ZN137__LT_dyn_u20_core__ops__function__Fn_LT__LP__RF_A_C__RP__GT__u2b_Output_u20__u3d__u20_R_u20_as_u20_wasm_bindgen__closure__WasmClosure_GT_8describe6invoke17h22bcd0a4a8f29463E(a, b, G(c))
  } finally {
    h[F++] = aa
  }
});
var S = ((a, b, c, d) => {
  g._ZN12wasm_bindgen7convert8closures11invoke2_mut17h1211b970fa000798E(a, b, m(c), m(d))
});
var Q = ((a, b) => {
  a = a >>> ah;
  const c = p();
  const d = [];
  for (let e = a; e < a + ar * b; e += ar) {
    d.push(l(c.getUint32(e, !0)))
  };
  return d
});
var G = (a => {
  if (F == ae) throw new ag(`out of js stack`);
  h[--F] = a;
  return F
});
var D = ((a, b, c, d) => {
  const e = {
    a: a,
    b: b,
    cnt: ae,
    dtor: c
  };
  const f = (...a) => {
    e.cnt++;
    try {
      return d(e.a, e.b, ...a)
    } finally {
      if (--e.cnt === ah) {
        g.__wbindgen_export_2.get(e.dtor)(e.a, e.b);
        e.a = ah;
        z.unregister(e)
      }
    }
  };
  f.original = e;
  z.register(f, e, e);
  return f
});
var p = (() => {
  if (o === ad || o.buffer.detached === !0 || o.buffer.detached === aa && o.buffer !== g.memory.buffer) {
    o = new DataView(g.memory.buffer)
  };
  return o
});
var y = (a => {
  const b = typeof a;
  if (b == al || b == am || a == ad) {
    return `${a}`
  };
  if (b == an) {
    return `"${a}"`
  };
  if (b == `symbol`) {
    const b = a.description;
    if (b == ad) {
      return `Symbol`
    } else {
      return `Symbol(${b})`
    }
  };
  if (b == aj) {
    const b = a.name;
    if (typeof b == an && b.length > ah) {
      return `Function(${b})`
    } else {
      return `Function`
    }
  };
  if (ab.isArray(a)) {
    const b = a.length;
    let c = `[`;
    if (b > ah) {
      c += y(a[ah])
    };
    for (let d = ae; d < b; d++) {
      c += `, ` + y(a[d])
    };
    c += `]`;
    return c
  };
  const c = /\[object ([^\]]+)\]/.exec(toString.call(a));
  let d;
  if (c.length > ae) {
    d = c[ae]
  } else {
    return toString.call(a)
  };
  if (d == ao) {
    try {
      return `Object(` + ap(a) + `)`
    } catch (a) {
      return ao
    }
  };
  if (a instanceof ag) {
    return `${a.name}: ${a.message}\n${a.stack}`
  };
  return d
});
var x = ((a, b, c) => {
  if (c === aa) {
    const c = v.encode(a);
    const d = b(c.length, ae) >>> ah;
    s().subarray(d, d + c.length).set(c);
    u = c.length;
    return d
  };
  let d = a.length;
  let e = b(d, ae) >>> ah;
  const f = s();
  let g = ah;
  for (; g < d; g++) {
    const b = a.charCodeAt(g);
    if (b > 127) break;
    f[e + g] = b
  };
  if (g !== d) {
    if (g !== ah) {
      a = a.slice(g)
    };
    e = c(e, d, d = g + a.length * ak, ae) >>> ah;
    const b = s().subarray(e + g, e + d);
    const f = w(a, b);
    g += f.written;
    e = c(e, d, g, ae) >>> ah
  };
  u = g;
  return e
});
var s = (() => {
  if (r === ad || r.byteLength === ah) {
    r = new ai(g.memory.buffer)
  };
  return r
});
import {
  init as a,
  drawPlane as b,
  drawCapture as c,
  drawBulletFFI as d
} from "/data/renderer.js";
import * as e from "/data/renderer.js";
const f = typeof AudioContext !== a9 ? AudioContext : (typeof webkitAudioContext !== a9 ? webkitAudioContext : aa);
let g;
const h = new ab(ac).fill(aa);
h.push(aa, ad, !0, !1);
let j = h.length;
let o = ad;
const q = typeof TextDecoder !== a9 ? new TextDecoder(af, {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw ag(`TextDecoder not available`)
  }
};
if (typeof TextDecoder !== a9) {
  q.decode()
};
let r = ad;
let u = ah;
const v = typeof TextEncoder !== a9 ? new TextEncoder(af) : {
  encode: () => {
    throw ag(`TextEncoder not available`)
  }
};
const w = typeof v.encodeInto === aj ? ((a, b) => v.encodeInto(a, b)) : ((a, b) => {
  const c = v.encode(a);
  b.set(c);
  return {
    read: a.length,
    written: c.length
  }
});
const z = typeof aq === a9 ? {
  register: () => {},
  unregister: () => {}
} : new aq(a => {
  g.__wbindgen_export_2.get(a.dtor)(a.a, a.b)
});
let F = ac;
const U = [`suspended`, `running`, `closed`];
const V = [`blob`, `arraybuffer`];
const W = [`any`, `natural`, `landscape`, `portrait`, `portrait-primary`, `portrait-secondary`, `landscape-primary`, `landscape-secondary`];
const X = [``, `no-referrer`, `no-referrer-when-downgrade`, `origin`, `origin-when-cross-origin`, `unsafe-url`, at, `strict-origin`, `strict-origin-when-cross-origin`];
const Y = [au, `no-store`, `reload`, `no-cache`, `force-cache`, `only-if-cached`];
const Z = [`omit`, at, `include`];
const _ = [at, `no-cors`, av, `navigate`];
const $ = [`follow`, aw, `manual`];
const a0 = [`basic`, av, au, aw, `opaque`, `opaqueredirect`];
const a1 = [`hidden`, `visible`];
const a2 = [au, `throughput`, `low-latency`];
export default a8;
export {
  a7 as initSync
}