(() => {
  "use strict";

  var t = {
      d: (n, e) => {
        for (var a in e) t.o(e, a) && !t.o(n, a) && Object.defineProperty(n, a, {
          enumerable: !0,
          get: e[a]
        });
      },
      o: (t, n) => Object.prototype.hasOwnProperty.call(t, n),
      r: t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }
    },
    n = {};
  t.r(n), t.d(n, {
    hasBrowserEnv: () => et,
    hasStandardBrowserEnv: () => at,
    hasStandardBrowserWebWorkerEnv: () => it
  });
  const e = function (t, n) {
    console.error(`Variable ${t} from file ${n} is null`);
  };
  function a(t, n) {
    return function () {
      return t.apply(n, arguments);
    };
  }
  const {
      toString: r
    } = Object.prototype,
    {
      getPrototypeOf: i
    } = Object,
    o = (s = Object.create(null), t => {
      const n = r.call(t);
      return s[n] || (s[n] = n.slice(8, -1).toLowerCase());
    });
  var s;
  const c = t => (t = t.toLowerCase(), n => o(n) === t),
    f = t => n => typeof n === t,
    {
      isArray: l
    } = Array,
    u = f("undefined"),
    d = c("ArrayBuffer"),
    m = f("string"),
    p = f("function"),
    h = f("number"),
    b = t => null !== t && "object" == typeof t,
    g = t => {
      if ("object" !== o(t)) return !1;
      const n = i(t);
      return !(null !== n && n !== Object.prototype && null !== Object.getPrototypeOf(n) || Symbol.toStringTag in t || Symbol.iterator in t);
    },
    v = c("Date"),
    y = c("File"),
    w = c("Blob"),
    k = c("FileList"),
    x = c("URLSearchParams");
  function O(t, n, {
    allOwnKeys: e = !1
  } = {}) {
    if (null == t) return;
    let a, r;
    if ("object" != typeof t && (t = [t]), l(t)) for (a = 0, r = t.length; a < r; a++) n.call(null, t[a], a, t);else {
      const r = e ? Object.getOwnPropertyNames(t) : Object.keys(t),
        i = r.length;
      let o;
      for (a = 0; a < i; a++) o = r[a], n.call(null, t[o], o, t);
    }
  }
  function E(t, n) {
    n = n.toLowerCase();
    const e = Object.keys(t);
    let a,
      r = e.length;
    for (; r-- > 0;) if (a = e[r], n === a.toLowerCase()) return a;
    return null;
  }
  const S = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
    A = t => !u(t) && t !== S,
    j = (N = "undefined" != typeof Uint8Array && i(Uint8Array), t => N && t instanceof N);
  var N;
  const C = c("HTMLFormElement"),
    R = (({
      hasOwnProperty: t
    }) => (n, e) => t.call(n, e))(Object.prototype),
    P = c("RegExp"),
    T = (t, n) => {
      const e = Object.getOwnPropertyDescriptors(t),
        a = {};
      O(e, (e, r) => {
        let i;
        !1 !== (i = n(e, r, t)) && (a[r] = i || e);
      }), Object.defineProperties(t, a);
    },
    L = "abcdefghijklmnopqrstuvwxyz",
    M = "0123456789",
    D = {
      DIGIT: M,
      ALPHA: L,
      ALPHA_DIGIT: L + L.toUpperCase() + M
    },
    z = c("AsyncFunction"),
    F = {
      isArray: l,
      isArrayBuffer: d,
      isBuffer: function (t) {
        return null !== t && !u(t) && null !== t.constructor && !u(t.constructor) && p(t.constructor.isBuffer) && t.constructor.isBuffer(t);
      },
      isFormData: t => {
        let n;
        return t && ("function" == typeof FormData && t instanceof FormData || p(t.append) && ("formdata" === (n = o(t)) || "object" === n && p(t.toString) && "[object FormData]" === t.toString()));
      },
      isArrayBufferView: function (t) {
        let n;
        return n = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && d(t.buffer), n;
      },
      isString: m,
      isNumber: h,
      isBoolean: t => !0 === t || !1 === t,
      isObject: b,
      isPlainObject: g,
      isUndefined: u,
      isDate: v,
      isFile: y,
      isBlob: w,
      isRegExp: P,
      isFunction: p,
      isStream: t => b(t) && p(t.pipe),
      isURLSearchParams: x,
      isTypedArray: j,
      isFileList: k,
      forEach: O,
      merge: function t() {
        const {
            caseless: n
          } = A(this) && this || {},
          e = {},
          a = (a, r) => {
            const i = n && E(e, r) || r;
            g(e[i]) && g(a) ? e[i] = t(e[i], a) : g(a) ? e[i] = t({}, a) : l(a) ? e[i] = a.slice() : e[i] = a;
          };
        for (let t = 0, n = arguments.length; t < n; t++) arguments[t] && O(arguments[t], a);
        return e;
      },
      extend: (t, n, e, {
        allOwnKeys: r
      } = {}) => (O(n, (n, r) => {
        e && p(n) ? t[r] = a(n, e) : t[r] = n;
      }, {
        allOwnKeys: r
      }), t),
      trim: t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
      stripBOM: t => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
      inherits: (t, n, e, a) => {
        t.prototype = Object.create(n.prototype, a), t.prototype.constructor = t, Object.defineProperty(t, "super", {
          value: n.prototype
        }), e && Object.assign(t.prototype, e);
      },
      toFlatObject: (t, n, e, a) => {
        let r, o, s;
        const c = {};
        if (n = n || {}, null == t) return n;
        do {
          for (r = Object.getOwnPropertyNames(t), o = r.length; o-- > 0;) s = r[o], a && !a(s, t, n) || c[s] || (n[s] = t[s], c[s] = !0);
          t = !1 !== e && i(t);
        } while (t && (!e || e(t, n)) && t !== Object.prototype);
        return n;
      },
      kindOf: o,
      kindOfTest: c,
      endsWith: (t, n, e) => {
        t = String(t), (void 0 === e || e > t.length) && (e = t.length), e -= n.length;
        const a = t.indexOf(n, e);
        return -1 !== a && a === e;
      },
      toArray: t => {
        if (!t) return null;
        if (l(t)) return t;
        let n = t.length;
        if (!h(n)) return null;
        const e = new Array(n);
        for (; n-- > 0;) e[n] = t[n];
        return e;
      },
      forEachEntry: (t, n) => {
        const e = (t && t[Symbol.iterator]).call(t);
        let a;
        for (; (a = e.next()) && !a.done;) {
          const e = a.value;
          n.call(t, e[0], e[1]);
        }
      },
      matchAll: (t, n) => {
        let e;
        const a = [];
        for (; null !== (e = t.exec(n));) a.push(e);
        return a;
      },
      isHTMLForm: C,
      hasOwnProperty: R,
      hasOwnProp: R,
      reduceDescriptors: T,
      freezeMethods: t => {
        T(t, (n, e) => {
          if (p(t) && -1 !== ["arguments", "caller", "callee"].indexOf(e)) return !1;
          const a = t[e];
          p(a) && (n.enumerable = !1, "writable" in n ? n.writable = !1 : n.set || (n.set = () => {
            throw Error("Can not rewrite read-only method '" + e + "'");
          }));
        });
      },
      toObjectSet: (t, n) => {
        const e = {},
          a = t => {
            t.forEach(t => {
              e[t] = !0;
            });
          };
        return l(t) ? a(t) : a(String(t).split(n)), e;
      },
      toCamelCase: t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, n, e) {
        return n.toUpperCase() + e;
      }),
      noop: () => {},
      toFiniteNumber: (t, n) => (t = +t, Number.isFinite(t) ? t : n),
      findKey: E,
      global: S,
      isContextDefined: A,
      ALPHABET: D,
      generateString: (t = 16, n = D.ALPHA_DIGIT) => {
        let e = "";
        const {
          length: a
        } = n;
        for (; t--;) e += n[Math.random() * a | 0];
        return e;
      },
      isSpecCompliantForm: function (t) {
        return !!(t && p(t.append) && "FormData" === t[Symbol.toStringTag] && t[Symbol.iterator]);
      },
      toJSONObject: t => {
        const n = new Array(10),
          e = (t, a) => {
            if (b(t)) {
              if (n.indexOf(t) >= 0) return;
              if (!("toJSON" in t)) {
                n[a] = t;
                const r = l(t) ? [] : {};
                return O(t, (t, n) => {
                  const i = e(t, a + 1);
                  !u(i) && (r[n] = i);
                }), n[a] = void 0, r;
              }
            }
            return t;
          };
        return e(t, 0);
      },
      isAsyncFn: z,
      isThenable: t => t && (b(t) || p(t)) && p(t.then) && p(t.catch)
    };
  function I(t, n, e, a, r) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", n && (this.code = n), e && (this.config = e), a && (this.request = a), r && (this.response = r);
  }
  F.inherits(I, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: F.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  const _ = I.prototype,
    U = {};
  ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(t => {
    U[t] = {
      value: t
    };
  }), Object.defineProperties(I, U), Object.defineProperty(_, "isAxiosError", {
    value: !0
  }), I.from = (t, n, e, a, r, i) => {
    const o = Object.create(_);
    return F.toFlatObject(t, o, function (t) {
      return t !== Error.prototype;
    }, t => "isAxiosError" !== t), I.call(o, t.message, n, e, a, r), o.cause = t, o.name = t.name, i && Object.assign(o, i), o;
  };
  const B = I;
  function q(t) {
    return F.isPlainObject(t) || F.isArray(t);
  }
  function H(t) {
    return F.endsWith(t, "[]") ? t.slice(0, -2) : t;
  }
  function Y(t, n, e) {
    return t ? t.concat(n).map(function (t, n) {
      return t = H(t), !e && n ? "[" + t + "]" : t;
    }).join(e ? "." : "") : n;
  }
  const W = F.toFlatObject(F, {}, null, function (t) {
      return /^is[A-Z]/.test(t);
    }),
    V = function (t, n, e) {
      if (!F.isObject(t)) throw new TypeError("target must be an object");
      n = n || new FormData();
      const a = (e = F.toFlatObject(e, {
          metaTokens: !0,
          dots: !1,
          indexes: !1
        }, !1, function (t, n) {
          return !F.isUndefined(n[t]);
        })).metaTokens,
        r = e.visitor || f,
        i = e.dots,
        o = e.indexes,
        s = (e.Blob || "undefined" != typeof Blob && Blob) && F.isSpecCompliantForm(n);
      if (!F.isFunction(r)) throw new TypeError("visitor must be a function");
      function c(t) {
        if (null === t) return "";
        if (F.isDate(t)) return t.toISOString();
        if (!s && F.isBlob(t)) throw new B("Blob is not supported. Use a Buffer instead.");
        return F.isArrayBuffer(t) || F.isTypedArray(t) ? s && "function" == typeof Blob ? new Blob([t]) : Buffer.from(t) : t;
      }
      function f(t, e, r) {
        let s = t;
        if (t && !r && "object" == typeof t) if (F.endsWith(e, "{}")) e = a ? e : e.slice(0, -2), t = JSON.stringify(t);else if (F.isArray(t) && function (t) {
          return F.isArray(t) && !t.some(q);
        }(t) || (F.isFileList(t) || F.endsWith(e, "[]")) && (s = F.toArray(t))) return e = H(e), s.forEach(function (t, a) {
          !F.isUndefined(t) && null !== t && n.append(!0 === o ? Y([e], a, i) : null === o ? e : e + "[]", c(t));
        }), !1;
        return !!q(t) || (n.append(Y(r, e, i), c(t)), !1);
      }
      const l = [],
        u = Object.assign(W, {
          defaultVisitor: f,
          convertValue: c,
          isVisitable: q
        });
      if (!F.isObject(t)) throw new TypeError("data must be an object");
      return function t(e, a) {
        if (!F.isUndefined(e)) {
          if (-1 !== l.indexOf(e)) throw Error("Circular reference detected in " + a.join("."));
          l.push(e), F.forEach(e, function (e, i) {
            !0 === (!(F.isUndefined(e) || null === e) && r.call(n, e, F.isString(i) ? i.trim() : i, a, u)) && t(e, a ? a.concat(i) : [i]);
          }), l.pop();
        }
      }(t), n;
    };
  function J(t) {
    const n = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
      return n[t];
    });
  }
  function $(t, n) {
    this._pairs = [], t && V(t, this, n);
  }
  const K = $.prototype;
  K.append = function (t, n) {
    this._pairs.push([t, n]);
  }, K.toString = function (t) {
    const n = t ? function (n) {
      return t.call(this, n, J);
    } : J;
    return this._pairs.map(function (t) {
      return n(t[0]) + "=" + n(t[1]);
    }, "").join("&");
  };
  const X = $;
  function G(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function Q(t, n, e) {
    if (!n) return t;
    const a = e && e.encode || G,
      r = e && e.serialize;
    let i;
    if (i = r ? r(n, e) : F.isURLSearchParams(n) ? n.toString() : new X(n, e).toString(a), i) {
      const n = t.indexOf("#");
      -1 !== n && (t = t.slice(0, n)), t += (-1 === t.indexOf("?") ? "?" : "&") + i;
    }
    return t;
  }
  const Z = class {
      constructor() {
        this.handlers = [];
      }
      use(t, n, e) {
        return this.handlers.push({
          fulfilled: t,
          rejected: n,
          synchronous: !!e && e.synchronous,
          runWhen: e ? e.runWhen : null
        }), this.handlers.length - 1;
      }
      eject(t) {
        this.handlers[t] && (this.handlers[t] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(t) {
        F.forEach(this.handlers, function (n) {
          null !== n && t(n);
        });
      }
    },
    tt = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1
    },
    nt = {
      isBrowser: !0,
      classes: {
        URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : X,
        FormData: "undefined" != typeof FormData ? FormData : null,
        Blob: "undefined" != typeof Blob ? Blob : null
      },
      protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    et = "undefined" != typeof window && "undefined" != typeof document,
    at = (rt = "undefined" != typeof navigator && navigator.product, et && ["ReactNative", "NativeScript", "NS"].indexOf(rt) < 0);
  var rt;
  const it = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
    ot = {
      ...n,
      ...nt
    },
    st = function (t) {
      function n(t, e, a, r) {
        let i = t[r++];
        if ("__proto__" === i) return !0;
        const o = Number.isFinite(+i),
          s = r >= t.length;
        return i = !i && F.isArray(a) ? a.length : i, s ? (F.hasOwnProp(a, i) ? a[i] = [a[i], e] : a[i] = e, !o) : (a[i] && F.isObject(a[i]) || (a[i] = []), n(t, e, a[i], r) && F.isArray(a[i]) && (a[i] = function (t) {
          const n = {},
            e = Object.keys(t);
          let a;
          const r = e.length;
          let i;
          for (a = 0; a < r; a++) i = e[a], n[i] = t[i];
          return n;
        }(a[i])), !o);
      }
      if (F.isFormData(t) && F.isFunction(t.entries)) {
        const e = {};
        return F.forEachEntry(t, (t, a) => {
          n(function (t) {
            return F.matchAll(/\w+|\[(\w*)]/g, t).map(t => "[]" === t[0] ? "" : t[1] || t[0]);
          }(t), a, e, 0);
        }), e;
      }
      return null;
    },
    ct = {
      transitional: tt,
      adapter: ["xhr", "http"],
      transformRequest: [function (t, n) {
        const e = n.getContentType() || "",
          a = e.indexOf("application/json") > -1,
          r = F.isObject(t);
        if (r && F.isHTMLForm(t) && (t = new FormData(t)), F.isFormData(t)) return a ? JSON.stringify(st(t)) : t;
        if (F.isArrayBuffer(t) || F.isBuffer(t) || F.isStream(t) || F.isFile(t) || F.isBlob(t)) return t;
        if (F.isArrayBufferView(t)) return t.buffer;
        if (F.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let i;
        if (r) {
          if (e.indexOf("application/x-www-form-urlencoded") > -1) return function (t, n) {
            return V(t, new ot.classes.URLSearchParams(), Object.assign({
              visitor: function (t, n, e, a) {
                return ot.isNode && F.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
              }
            }, n));
          }(t, this.formSerializer).toString();
          if ((i = F.isFileList(t)) || e.indexOf("multipart/form-data") > -1) {
            const n = this.env && this.env.FormData;
            return V(i ? {
              "files[]": t
            } : t, n && new n(), this.formSerializer);
          }
        }
        return r || a ? (n.setContentType("application/json", !1), function (t, n, e) {
          if (F.isString(t)) try {
            return (0, JSON.parse)(t), F.trim(t);
          } catch (t) {
            if ("SyntaxError" !== t.name) throw t;
          }
          return (0, JSON.stringify)(t);
        }(t)) : t;
      }],
      transformResponse: [function (t) {
        const n = this.transitional || ct.transitional,
          e = n && n.forcedJSONParsing,
          a = "json" === this.responseType;
        if (t && F.isString(t) && (e && !this.responseType || a)) {
          const e = !(n && n.silentJSONParsing) && a;
          try {
            return JSON.parse(t);
          } catch (t) {
            if (e) {
              if ("SyntaxError" === t.name) throw B.from(t, B.ERR_BAD_RESPONSE, this, null, this.response);
              throw t;
            }
          }
        }
        return t;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: {
        FormData: ot.classes.FormData,
        Blob: ot.classes.Blob
      },
      validateStatus: function (t) {
        return t >= 200 && t < 300;
      },
      headers: {
        common: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": void 0
        }
      }
    };
  F.forEach(["delete", "get", "head", "post", "put", "patch"], t => {
    ct.headers[t] = {};
  });
  const ft = ct,
    lt = F.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    ut = Symbol("internals");
  function dt(t) {
    return t && String(t).trim().toLowerCase();
  }
  function mt(t) {
    return !1 === t || null == t ? t : F.isArray(t) ? t.map(mt) : String(t);
  }
  function pt(t, n, e, a, r) {
    return F.isFunction(a) ? a.call(this, n, e) : (r && (n = e), F.isString(n) ? F.isString(a) ? -1 !== n.indexOf(a) : F.isRegExp(a) ? a.test(n) : void 0 : void 0);
  }
  class ht {
    constructor(t) {
      t && this.set(t);
    }
    set(t, n, e) {
      const a = this;
      function r(t, n, e) {
        const r = dt(n);
        if (!r) throw new Error("header name must be a non-empty string");
        const i = F.findKey(a, r);
        (!i || void 0 === a[i] || !0 === e || void 0 === e && !1 !== a[i]) && (a[i || n] = mt(t));
      }
      const i = (t, n) => F.forEach(t, (t, e) => r(t, e, n));
      return F.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : F.isString(t) && (t = t.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim()) ? i((t => {
        const n = {};
        let e, a, r;
        return t && t.split("\n").forEach(function (t) {
          r = t.indexOf(":"), e = t.substring(0, r).trim().toLowerCase(), a = t.substring(r + 1).trim(), !e || n[e] && lt[e] || ("set-cookie" === e ? n[e] ? n[e].push(a) : n[e] = [a] : n[e] = n[e] ? n[e] + ", " + a : a);
        }), n;
      })(t), n) : null != t && r(n, t, e), this;
    }
    get(t, n) {
      if (t = dt(t)) {
        const e = F.findKey(this, t);
        if (e) {
          const t = this[e];
          if (!n) return t;
          if (!0 === n) return function (t) {
            const n = Object.create(null),
              e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let a;
            for (; a = e.exec(t);) n[a[1]] = a[2];
            return n;
          }(t);
          if (F.isFunction(n)) return n.call(this, t, e);
          if (F.isRegExp(n)) return n.exec(t);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(t, n) {
      if (t = dt(t)) {
        const e = F.findKey(this, t);
        return !(!e || void 0 === this[e] || n && !pt(0, this[e], e, n));
      }
      return !1;
    }
    delete(t, n) {
      const e = this;
      let a = !1;
      function r(t) {
        if (t = dt(t)) {
          const r = F.findKey(e, t);
          !r || n && !pt(0, e[r], r, n) || (delete e[r], a = !0);
        }
      }
      return F.isArray(t) ? t.forEach(r) : r(t), a;
    }
    clear(t) {
      const n = Object.keys(this);
      let e = n.length,
        a = !1;
      for (; e--;) {
        const r = n[e];
        t && !pt(0, this[r], r, t, !0) || (delete this[r], a = !0);
      }
      return a;
    }
    normalize(t) {
      const n = this,
        e = {};
      return F.forEach(this, (a, r) => {
        const i = F.findKey(e, r);
        if (i) return n[i] = mt(a), void delete n[r];
        const o = t ? function (t) {
          return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, e) => n.toUpperCase() + e);
        }(r) : String(r).trim();
        o !== r && delete n[r], n[o] = mt(a), e[o] = !0;
      }), this;
    }
    concat(...t) {
      return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
      const n = Object.create(null);
      return F.forEach(this, (e, a) => {
        null != e && !1 !== e && (n[a] = t && F.isArray(e) ? e.join(", ") : e);
      }), n;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(t) {
      return t instanceof this ? t : new this(t);
    }
    static concat(t, ...n) {
      const e = new this(t);
      return n.forEach(t => e.set(t)), e;
    }
    static accessor(t) {
      const n = (this[ut] = this[ut] = {
          accessors: {}
        }).accessors,
        e = this.prototype;
      function a(t) {
        const a = dt(t);
        n[a] || (function (t, n) {
          const e = F.toCamelCase(" " + n);
          ["get", "set", "has"].forEach(a => {
            Object.defineProperty(t, a + e, {
              value: function (t, e, r) {
                return this[a].call(this, n, t, e, r);
              },
              configurable: !0
            });
          });
        }(e, t), n[a] = !0);
      }
      return F.isArray(t) ? t.forEach(a) : a(t), this;
    }
  }
  ht.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), F.reduceDescriptors(ht.prototype, ({
    value: t
  }, n) => {
    let e = n[0].toUpperCase() + n.slice(1);
    return {
      get: () => t,
      set(t) {
        this[e] = t;
      }
    };
  }), F.freezeMethods(ht);
  const bt = ht;
  function gt(t, n) {
    const e = this || ft,
      a = n || e,
      r = bt.from(a.headers);
    let i = a.data;
    return F.forEach(t, function (t) {
      i = t.call(e, i, r.normalize(), n ? n.status : void 0);
    }), r.normalize(), i;
  }
  function vt(t) {
    return !(!t || !t.__CANCEL__);
  }
  function yt(t, n, e) {
    B.call(this, null == t ? "canceled" : t, B.ERR_CANCELED, n, e), this.name = "CanceledError";
  }
  F.inherits(yt, B, {
    __CANCEL__: !0
  });
  const wt = yt,
    kt = ot.hasStandardBrowserEnv ? {
      write(t, n, e, a, r, i) {
        const o = [t + "=" + encodeURIComponent(n)];
        F.isNumber(e) && o.push("expires=" + new Date(e).toGMTString()), F.isString(a) && o.push("path=" + a), F.isString(r) && o.push("domain=" + r), !0 === i && o.push("secure"), document.cookie = o.join("; ");
      },
      read(t) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove(t) {
        this.write(t, "", Date.now() - 864e5);
      }
    } : {
      write() {},
      read: () => null,
      remove() {}
    };
  function xt(t, n) {
    return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n) ? function (t, n) {
      return n ? t.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : t;
    }(t, n) : n;
  }
  const Ot = ot.hasStandardBrowserEnv ? function () {
    const t = /(msie|trident)/i.test(navigator.userAgent),
      n = document.createElement("a");
    let e;
    function a(e) {
      let a = e;
      return t && (n.setAttribute("href", a), a = n.href), n.setAttribute("href", a), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
      };
    }
    return e = a(window.location.href), function (t) {
      const n = F.isString(t) ? a(t) : t;
      return n.protocol === e.protocol && n.host === e.host;
    };
  }() : function () {
    return !0;
  };
  function Et(t, n) {
    let e = 0;
    const a = function (t, n) {
      t = t || 10;
      const e = new Array(t),
        a = new Array(t);
      let r,
        i = 0,
        o = 0;
      return n = void 0 !== n ? n : 1e3, function (s) {
        const c = Date.now(),
          f = a[o];
        r || (r = c), e[i] = s, a[i] = c;
        let l = o,
          u = 0;
        for (; l !== i;) u += e[l++], l %= t;
        if (i = (i + 1) % t, i === o && (o = (o + 1) % t), c - r < n) return;
        const d = f && c - f;
        return d ? Math.round(1e3 * u / d) : void 0;
      };
    }(50, 250);
    return r => {
      const i = r.loaded,
        o = r.lengthComputable ? r.total : void 0,
        s = i - e,
        c = a(s);
      e = i;
      const f = {
        loaded: i,
        total: o,
        progress: o ? i / o : void 0,
        bytes: s,
        rate: c || void 0,
        estimated: c && o && i <= o ? (o - i) / c : void 0,
        event: r
      };
      f[n ? "download" : "upload"] = !0, t(f);
    };
  }
  const St = "undefined" != typeof XMLHttpRequest && function (t) {
      return new Promise(function (n, e) {
        let a = t.data;
        const r = bt.from(t.headers).normalize();
        let i,
          o,
          {
            responseType: s,
            withXSRFToken: c
          } = t;
        function f() {
          t.cancelToken && t.cancelToken.unsubscribe(i), t.signal && t.signal.removeEventListener("abort", i);
        }
        if (F.isFormData(a)) if (ot.hasStandardBrowserEnv || ot.hasStandardBrowserWebWorkerEnv) r.setContentType(!1);else if (!1 !== (o = r.getContentType())) {
          const [t, ...n] = o ? o.split(";").map(t => t.trim()).filter(Boolean) : [];
          r.setContentType([t || "multipart/form-data", ...n].join("; "));
        }
        let l = new XMLHttpRequest();
        if (t.auth) {
          const n = t.auth.username || "",
            e = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
          r.set("Authorization", "Basic " + btoa(n + ":" + e));
        }
        const u = xt(t.baseURL, t.url);
        function d() {
          if (!l) return;
          const a = bt.from("getAllResponseHeaders" in l && l.getAllResponseHeaders());
          !function (t, n, e) {
            const a = e.config.validateStatus;
            e.status && a && !a(e.status) ? n(new B("Request failed with status code " + e.status, [B.ERR_BAD_REQUEST, B.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4], e.config, e.request, e)) : t(e);
          }(function (t) {
            n(t), f();
          }, function (t) {
            e(t), f();
          }, {
            data: s && "text" !== s && "json" !== s ? l.response : l.responseText,
            status: l.status,
            statusText: l.statusText,
            headers: a,
            config: t,
            request: l
          }), l = null;
        }
        if (l.open(t.method.toUpperCase(), Q(u, t.params, t.paramsSerializer), !0), l.timeout = t.timeout, "onloadend" in l ? l.onloadend = d : l.onreadystatechange = function () {
          l && 4 === l.readyState && (0 !== l.status || l.responseURL && 0 === l.responseURL.indexOf("file:")) && setTimeout(d);
        }, l.onabort = function () {
          l && (e(new B("Request aborted", B.ECONNABORTED, t, l)), l = null);
        }, l.onerror = function () {
          e(new B("Network Error", B.ERR_NETWORK, t, l)), l = null;
        }, l.ontimeout = function () {
          let n = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
          const a = t.transitional || tt;
          t.timeoutErrorMessage && (n = t.timeoutErrorMessage), e(new B(n, a.clarifyTimeoutError ? B.ETIMEDOUT : B.ECONNABORTED, t, l)), l = null;
        }, ot.hasStandardBrowserEnv && (c && F.isFunction(c) && (c = c(t)), c || !1 !== c && Ot(u))) {
          const n = t.xsrfHeaderName && t.xsrfCookieName && kt.read(t.xsrfCookieName);
          n && r.set(t.xsrfHeaderName, n);
        }
        void 0 === a && r.setContentType(null), "setRequestHeader" in l && F.forEach(r.toJSON(), function (t, n) {
          l.setRequestHeader(n, t);
        }), F.isUndefined(t.withCredentials) || (l.withCredentials = !!t.withCredentials), s && "json" !== s && (l.responseType = t.responseType), "function" == typeof t.onDownloadProgress && l.addEventListener("progress", Et(t.onDownloadProgress, !0)), "function" == typeof t.onUploadProgress && l.upload && l.upload.addEventListener("progress", Et(t.onUploadProgress)), (t.cancelToken || t.signal) && (i = n => {
          l && (e(!n || n.type ? new wt(null, t, l) : n), l.abort(), l = null);
        }, t.cancelToken && t.cancelToken.subscribe(i), t.signal && (t.signal.aborted ? i() : t.signal.addEventListener("abort", i)));
        const m = function (t) {
          const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
          return n && n[1] || "";
        }(u);
        m && -1 === ot.protocols.indexOf(m) ? e(new B("Unsupported protocol " + m + ":", B.ERR_BAD_REQUEST, t)) : l.send(a || null);
      });
    },
    At = {
      http: null,
      xhr: St
    };
  F.forEach(At, (t, n) => {
    if (t) {
      try {
        Object.defineProperty(t, "name", {
          value: n
        });
      } catch (t) {}
      Object.defineProperty(t, "adapterName", {
        value: n
      });
    }
  });
  const jt = t => `- ${t}`,
    Nt = t => F.isFunction(t) || null === t || !1 === t,
    Ct = t => {
      t = F.isArray(t) ? t : [t];
      const {
        length: n
      } = t;
      let e, a;
      const r = {};
      for (let i = 0; i < n; i++) {
        let n;
        if (e = t[i], a = e, !Nt(e) && (a = At[(n = String(e)).toLowerCase()], void 0 === a)) throw new B(`Unknown adapter '${n}'`);
        if (a) break;
        r[n || "#" + i] = a;
      }
      if (!a) {
        const t = Object.entries(r).map(([t, n]) => `adapter ${t} ` + (!1 === n ? "is not supported by the environment" : "is not available in the build"));
        let e = n ? t.length > 1 ? "since :\n" + t.map(jt).join("\n") : " " + jt(t[0]) : "as no adapter specified";
        throw new B("There is no suitable adapter to dispatch the request " + e, "ERR_NOT_SUPPORT");
      }
      return a;
    };
  function Rt(t) {
    if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new wt(null, t);
  }
  function Pt(t) {
    return Rt(t), t.headers = bt.from(t.headers), t.data = gt.call(t, t.transformRequest), -1 !== ["post", "put", "patch"].indexOf(t.method) && t.headers.setContentType("application/x-www-form-urlencoded", !1), Ct(t.adapter || ft.adapter)(t).then(function (n) {
      return Rt(t), n.data = gt.call(t, t.transformResponse, n), n.headers = bt.from(n.headers), n;
    }, function (n) {
      return vt(n) || (Rt(t), n && n.response && (n.response.data = gt.call(t, t.transformResponse, n.response), n.response.headers = bt.from(n.response.headers))), Promise.reject(n);
    });
  }
  const Tt = t => t instanceof bt ? {
    ...t
  } : t;
  function Lt(t, n) {
    n = n || {};
    const e = {};
    function a(t, n, e) {
      return F.isPlainObject(t) && F.isPlainObject(n) ? F.merge.call({
        caseless: e
      }, t, n) : F.isPlainObject(n) ? F.merge({}, n) : F.isArray(n) ? n.slice() : n;
    }
    function r(t, n, e) {
      return F.isUndefined(n) ? F.isUndefined(t) ? void 0 : a(void 0, t, e) : a(t, n, e);
    }
    function i(t, n) {
      if (!F.isUndefined(n)) return a(void 0, n);
    }
    function o(t, n) {
      return F.isUndefined(n) ? F.isUndefined(t) ? void 0 : a(void 0, t) : a(void 0, n);
    }
    function s(e, r, i) {
      return i in n ? a(e, r) : i in t ? a(void 0, e) : void 0;
    }
    const c = {
      url: i,
      method: i,
      data: i,
      baseURL: o,
      transformRequest: o,
      transformResponse: o,
      paramsSerializer: o,
      timeout: o,
      timeoutMessage: o,
      withCredentials: o,
      withXSRFToken: o,
      adapter: o,
      responseType: o,
      xsrfCookieName: o,
      xsrfHeaderName: o,
      onUploadProgress: o,
      onDownloadProgress: o,
      decompress: o,
      maxContentLength: o,
      maxBodyLength: o,
      beforeRedirect: o,
      transport: o,
      httpAgent: o,
      httpsAgent: o,
      cancelToken: o,
      socketPath: o,
      responseEncoding: o,
      validateStatus: s,
      headers: (t, n) => r(Tt(t), Tt(n), !0)
    };
    return F.forEach(Object.keys(Object.assign({}, t, n)), function (a) {
      const i = c[a] || r,
        o = i(t[a], n[a], a);
      F.isUndefined(o) && i !== s || (e[a] = o);
    }), e;
  }
  const Mt = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((t, n) => {
    Mt[t] = function (e) {
      return typeof e === t || "a" + (n < 1 ? "n " : " ") + t;
    };
  });
  const Dt = {};
  Mt.transitional = function (t, n, e) {
    function a(t, n) {
      return "[Axios v1.6.8] Transitional option '" + t + "'" + n + (e ? ". " + e : "");
    }
    return (e, r, i) => {
      if (!1 === t) throw new B(a(r, " has been removed" + (n ? " in " + n : "")), B.ERR_DEPRECATED);
      return n && !Dt[r] && (Dt[r] = !0, console.warn(a(r, " has been deprecated since v" + n + " and will be removed in the near future"))), !t || t(e, r, i);
    };
  };
  const zt = {
      assertOptions: function (t, n, e) {
        if ("object" != typeof t) throw new B("options must be an object", B.ERR_BAD_OPTION_VALUE);
        const a = Object.keys(t);
        let r = a.length;
        for (; r-- > 0;) {
          const i = a[r],
            o = n[i];
          if (o) {
            const n = t[i],
              e = void 0 === n || o(n, i, t);
            if (!0 !== e) throw new B("option " + i + " must be " + e, B.ERR_BAD_OPTION_VALUE);
          } else if (!0 !== e) throw new B("Unknown option " + i, B.ERR_BAD_OPTION);
        }
      },
      validators: Mt
    },
    Ft = zt.validators;
  class It {
    constructor(t) {
      this.defaults = t, this.interceptors = {
        request: new Z(),
        response: new Z()
      };
    }
    async request(t, n) {
      try {
        return await this._request(t, n);
      } catch (t) {
        if (t instanceof Error) {
          let n;
          Error.captureStackTrace ? Error.captureStackTrace(n = {}) : n = new Error();
          const e = n.stack ? n.stack.replace(/^.+\n/, "") : "";
          t.stack ? e && !String(t.stack).endsWith(e.replace(/^.+\n.+\n/, "")) && (t.stack += "\n" + e) : t.stack = e;
        }
        throw t;
      }
    }
    _request(t, n) {
      "string" == typeof t ? (n = n || {}).url = t : n = t || {}, n = Lt(this.defaults, n);
      const {
        transitional: e,
        paramsSerializer: a,
        headers: r
      } = n;
      void 0 !== e && zt.assertOptions(e, {
        silentJSONParsing: Ft.transitional(Ft.boolean),
        forcedJSONParsing: Ft.transitional(Ft.boolean),
        clarifyTimeoutError: Ft.transitional(Ft.boolean)
      }, !1), null != a && (F.isFunction(a) ? n.paramsSerializer = {
        serialize: a
      } : zt.assertOptions(a, {
        encode: Ft.function,
        serialize: Ft.function
      }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
      let i = r && F.merge(r.common, r[n.method]);
      r && F.forEach(["delete", "get", "head", "post", "put", "patch", "common"], t => {
        delete r[t];
      }), n.headers = bt.concat(i, r);
      const o = [];
      let s = !0;
      this.interceptors.request.forEach(function (t) {
        "function" == typeof t.runWhen && !1 === t.runWhen(n) || (s = s && t.synchronous, o.unshift(t.fulfilled, t.rejected));
      });
      const c = [];
      let f;
      this.interceptors.response.forEach(function (t) {
        c.push(t.fulfilled, t.rejected);
      });
      let l,
        u = 0;
      if (!s) {
        const t = [Pt.bind(this), void 0];
        for (t.unshift.apply(t, o), t.push.apply(t, c), l = t.length, f = Promise.resolve(n); u < l;) f = f.then(t[u++], t[u++]);
        return f;
      }
      l = o.length;
      let d = n;
      for (u = 0; u < l;) {
        const t = o[u++],
          n = o[u++];
        try {
          d = t(d);
        } catch (t) {
          n.call(this, t);
          break;
        }
      }
      try {
        f = Pt.call(this, d);
      } catch (t) {
        return Promise.reject(t);
      }
      for (u = 0, l = c.length; u < l;) f = f.then(c[u++], c[u++]);
      return f;
    }
    getUri(t) {
      return Q(xt((t = Lt(this.defaults, t)).baseURL, t.url), t.params, t.paramsSerializer);
    }
  }
  F.forEach(["delete", "get", "head", "options"], function (t) {
    It.prototype[t] = function (n, e) {
      return this.request(Lt(e || {}, {
        method: t,
        url: n,
        data: (e || {}).data
      }));
    };
  }), F.forEach(["post", "put", "patch"], function (t) {
    function n(n) {
      return function (e, a, r) {
        return this.request(Lt(r || {}, {
          method: t,
          headers: n ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: e,
          data: a
        }));
      };
    }
    It.prototype[t] = n(), It.prototype[t + "Form"] = n(!0);
  });
  const _t = It;
  class Ut {
    constructor(t) {
      if ("function" != typeof t) throw new TypeError("executor must be a function.");
      let n;
      this.promise = new Promise(function (t) {
        n = t;
      });
      const e = this;
      this.promise.then(t => {
        if (!e._listeners) return;
        let n = e._listeners.length;
        for (; n-- > 0;) e._listeners[n](t);
        e._listeners = null;
      }), this.promise.then = t => {
        let n;
        const a = new Promise(t => {
          e.subscribe(t), n = t;
        }).then(t);
        return a.cancel = function () {
          e.unsubscribe(n);
        }, a;
      }, t(function (t, a, r) {
        e.reason || (e.reason = new wt(t, a, r), n(e.reason));
      });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(t) {
      this.reason ? t(this.reason) : this._listeners ? this._listeners.push(t) : this._listeners = [t];
    }
    unsubscribe(t) {
      if (!this._listeners) return;
      const n = this._listeners.indexOf(t);
      -1 !== n && this._listeners.splice(n, 1);
    }
    static source() {
      let t;
      return {
        token: new Ut(function (n) {
          t = n;
        }),
        cancel: t
      };
    }
  }
  const Bt = Ut,
    qt = {
      Continue: 100,
      SwitchingProtocols: 101,
      Processing: 102,
      EarlyHints: 103,
      Ok: 200,
      Created: 201,
      Accepted: 202,
      NonAuthoritativeInformation: 203,
      NoContent: 204,
      ResetContent: 205,
      PartialContent: 206,
      MultiStatus: 207,
      AlreadyReported: 208,
      ImUsed: 226,
      MultipleChoices: 300,
      MovedPermanently: 301,
      Found: 302,
      SeeOther: 303,
      NotModified: 304,
      UseProxy: 305,
      Unused: 306,
      TemporaryRedirect: 307,
      PermanentRedirect: 308,
      BadRequest: 400,
      Unauthorized: 401,
      PaymentRequired: 402,
      Forbidden: 403,
      NotFound: 404,
      MethodNotAllowed: 405,
      NotAcceptable: 406,
      ProxyAuthenticationRequired: 407,
      RequestTimeout: 408,
      Conflict: 409,
      Gone: 410,
      LengthRequired: 411,
      PreconditionFailed: 412,
      PayloadTooLarge: 413,
      UriTooLong: 414,
      UnsupportedMediaType: 415,
      RangeNotSatisfiable: 416,
      ExpectationFailed: 417,
      ImATeapot: 418,
      MisdirectedRequest: 421,
      UnprocessableEntity: 422,
      Locked: 423,
      FailedDependency: 424,
      TooEarly: 425,
      UpgradeRequired: 426,
      PreconditionRequired: 428,
      TooManyRequests: 429,
      RequestHeaderFieldsTooLarge: 431,
      UnavailableForLegalReasons: 451,
      InternalServerError: 500,
      NotImplemented: 501,
      BadGateway: 502,
      ServiceUnavailable: 503,
      GatewayTimeout: 504,
      HttpVersionNotSupported: 505,
      VariantAlsoNegotiates: 506,
      InsufficientStorage: 507,
      LoopDetected: 508,
      NotExtended: 510,
      NetworkAuthenticationRequired: 511
    };
  Object.entries(qt).forEach(([t, n]) => {
    qt[n] = t;
  });
  const Ht = qt,
    Yt = function t(n) {
      const e = new _t(n),
        r = a(_t.prototype.request, e);
      return F.extend(r, _t.prototype, e, {
        allOwnKeys: !0
      }), F.extend(r, e, null, {
        allOwnKeys: !0
      }), r.create = function (e) {
        return t(Lt(n, e));
      }, r;
    }(ft);
  Yt.Axios = _t, Yt.CanceledError = wt, Yt.CancelToken = Bt, Yt.isCancel = vt, Yt.VERSION = "1.6.8", Yt.toFormData = V, Yt.AxiosError = B, Yt.Cancel = Yt.CanceledError, Yt.all = function (t) {
    return Promise.all(t);
  }, Yt.spread = function (t) {
    return function (n) {
      return t.apply(null, n);
    };
  }, Yt.isAxiosError = function (t) {
    return F.isObject(t) && !0 === t.isAxiosError;
  }, Yt.mergeConfig = Lt, Yt.AxiosHeaders = bt, Yt.formToJSON = t => st(F.isHTMLForm(t) ? new FormData(t) : t), Yt.getAdapter = Ct, Yt.HttpStatusCode = Ht, Yt.default = Yt;
  const Wt = Yt,
    Vt = function (t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    },
    Jt = function (t) {
      return `a${Vt(t)}`;
    };
  var $t = {
    prefix: "fas",
    iconName: "xmark",
    icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
  };
  function Kt(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(t);
      n && (a = a.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      })), e.push.apply(e, a);
    }
    return e;
  }
  function Xt(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2 ? Kt(Object(e), !0).forEach(function (n) {
        Zt(t, n, e[n]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Kt(Object(e)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
      });
    }
    return t;
  }
  function Gt(t) {
    return Gt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, Gt(t);
  }
  function Qt(t, n) {
    for (var e = 0; e < n.length; e++) {
      var a = n[e];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
    }
  }
  function Zt(t, n, e) {
    return n in t ? Object.defineProperty(t, n, {
      value: e,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = e, t;
  }
  function tn(t, n) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, n) {
      var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (null != e) {
        var a,
          r,
          i = [],
          o = !0,
          s = !1;
        try {
          for (e = e.call(t); !(o = (a = e.next()).done) && (i.push(a.value), !n || i.length !== n); o = !0);
        } catch (t) {
          s = !0, r = t;
        } finally {
          try {
            o || null == e.return || e.return();
          } finally {
            if (s) throw r;
          }
        }
        return i;
      }
    }(t, n) || en(t, n) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function nn(t) {
    return function (t) {
      if (Array.isArray(t)) return an(t);
    }(t) || function (t) {
      if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }(t) || en(t) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function en(t, n) {
    if (t) {
      if ("string" == typeof t) return an(t, n);
      var e = Object.prototype.toString.call(t).slice(8, -1);
      return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? an(t, n) : void 0;
    }
  }
  function an(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
    return a;
  }
  var rn = function () {},
    on = {},
    sn = {},
    cn = null,
    fn = {
      mark: rn,
      measure: rn
    };
  try {
    "undefined" != typeof window && (on = window), "undefined" != typeof document && (sn = document), "undefined" != typeof MutationObserver && (cn = MutationObserver), "undefined" != typeof performance && (fn = performance);
  } catch (t) {}
  var ln,
    un,
    dn,
    mn,
    pn,
    hn = (on.navigator || {}).userAgent,
    bn = void 0 === hn ? "" : hn,
    gn = on,
    vn = sn,
    yn = cn,
    wn = fn,
    kn = (gn.document, !!vn.documentElement && !!vn.head && "function" == typeof vn.addEventListener && "function" == typeof vn.createElement),
    xn = ~bn.indexOf("MSIE") || ~bn.indexOf("Trident/"),
    On = "___FONT_AWESOME___",
    En = "fa",
    Sn = "svg-inline--fa",
    An = "data-fa-i2svg",
    jn = "data-fa-pseudo-element",
    Nn = "data-fa-pseudo-element-pending",
    Cn = "data-prefix",
    Rn = "data-icon",
    Pn = "fontawesome-i2svg",
    Tn = "async",
    Ln = ["HTML", "HEAD", "STYLE", "SCRIPT"],
    Mn = function () {
      try {
        return !0;
      } catch (t) {
        return !1;
      }
    }(),
    Dn = "classic",
    zn = "sharp",
    Fn = [Dn, zn];
  function In(t) {
    return new Proxy(t, {
      get: function (t, n) {
        return n in t ? t[n] : t[Dn];
      }
    });
  }
  var _n = In((Zt(ln = {}, Dn, {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
      fak: "kit",
      fakd: "kit",
      "fa-kit": "kit",
      "fa-kit-duotone": "kit"
    }), Zt(ln, zn, {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin"
    }), ln)),
    Un = In((Zt(un = {}, Dn, {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak"
    }), Zt(un, zn, {
      solid: "fass",
      regular: "fasr",
      light: "fasl",
      thin: "fast"
    }), un)),
    Bn = In((Zt(dn = {}, Dn, {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin"
    }), Zt(dn, zn, {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin"
    }), dn)),
    qn = In((Zt(mn = {}, Dn, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat"
    }), Zt(mn, zn, {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast"
    }), mn)),
    Hn = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
    Yn = "fa-layers-text",
    Wn = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
    Vn = In((Zt(pn = {}, Dn, {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    }), Zt(pn, zn, {
      900: "fass",
      400: "fasr",
      300: "fasl",
      100: "fast"
    }), pn)),
    Jn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    $n = Jn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    Kn = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
    Xn = {
      GROUP: "duotone-group",
      SWAP_OPACITY: "swap-opacity",
      PRIMARY: "primary",
      SECONDARY: "secondary"
    },
    Gn = new Set();
  Object.keys(Un[Dn]).map(Gn.add.bind(Gn)), Object.keys(Un[zn]).map(Gn.add.bind(Gn));
  var Qn = [].concat(Fn, nn(Gn), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Xn.GROUP, Xn.SWAP_OPACITY, Xn.PRIMARY, Xn.SECONDARY]).concat(Jn.map(function (t) {
      return "".concat(t, "x");
    })).concat($n.map(function (t) {
      return "w-".concat(t);
    })),
    Zn = gn.FontAwesomeConfig || {};
  vn && "function" == typeof vn.querySelector && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach(function (t) {
    var n = tn(t, 2),
      e = n[0],
      a = n[1],
      r = function (t) {
        return "" === t || "false" !== t && ("true" === t || t);
      }(function (t) {
        var n = vn.querySelector("script[" + t + "]");
        if (n) return n.getAttribute(t);
      }(e));
    null != r && (Zn[a] = r);
  });
  var te = {
    styleDefault: "solid",
    familyDefault: "classic",
    cssPrefix: En,
    replacementClass: Sn,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0
  };
  Zn.familyPrefix && (Zn.cssPrefix = Zn.familyPrefix);
  var ne = Xt(Xt({}, te), Zn);
  ne.autoReplaceSvg || (ne.observeMutations = !1);
  var ee = {};
  Object.keys(te).forEach(function (t) {
    Object.defineProperty(ee, t, {
      enumerable: !0,
      set: function (n) {
        ne[t] = n, ae.forEach(function (t) {
          return t(ee);
        });
      },
      get: function () {
        return ne[t];
      }
    });
  }), Object.defineProperty(ee, "familyPrefix", {
    enumerable: !0,
    set: function (t) {
      ne.cssPrefix = t, ae.forEach(function (t) {
        return t(ee);
      });
    },
    get: function () {
      return ne.cssPrefix;
    }
  }), gn.FontAwesomeConfig = ee;
  var ae = [],
    re = 16,
    ie = {
      size: 16,
      x: 0,
      y: 0,
      rotate: 0,
      flipX: !1,
      flipY: !1
    },
    oe = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function se() {
    for (var t = 12, n = ""; t-- > 0;) n += oe[62 * Math.random() | 0];
    return n;
  }
  function ce(t) {
    for (var n = [], e = (t || []).length >>> 0; e--;) n[e] = t[e];
    return n;
  }
  function fe(t) {
    return t.classList ? ce(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function (t) {
      return t;
    });
  }
  function le(t) {
    return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function ue(t) {
    return Object.keys(t || {}).reduce(function (n, e) {
      return n + "".concat(e, ": ").concat(t[e].trim(), ";");
    }, "");
  }
  function de(t) {
    return t.size !== ie.size || t.x !== ie.x || t.y !== ie.y || t.rotate !== ie.rotate || t.flipX || t.flipY;
  }
  var me = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
  function pe() {
    var t = En,
      n = Sn,
      e = ee.cssPrefix,
      a = ee.replacementClass,
      r = me;
    if (e !== t || a !== n) {
      var i = new RegExp("\\.".concat(t, "\\-"), "g"),
        o = new RegExp("\\--".concat(t, "\\-"), "g"),
        s = new RegExp("\\.".concat(n), "g");
      r = r.replace(i, ".".concat(e, "-")).replace(o, "--".concat(e, "-")).replace(s, ".".concat(a));
    }
    return r;
  }
  var he = !1;
  function be() {
    ee.autoAddCss && !he && (function (t) {
      if (t && kn) {
        var n = vn.createElement("style");
        n.setAttribute("type", "text/css"), n.innerHTML = t;
        for (var e = vn.head.childNodes, a = null, r = e.length - 1; r > -1; r--) {
          var i = e[r],
            o = (i.tagName || "").toUpperCase();
          ["STYLE", "LINK"].indexOf(o) > -1 && (a = i);
        }
        vn.head.insertBefore(n, a);
      }
    }(pe()), he = !0);
  }
  var ge = {
      mixout: function () {
        return {
          dom: {
            css: pe,
            insertCss: be
          }
        };
      },
      hooks: function () {
        return {
          beforeDOMElementCreation: function () {
            be();
          },
          beforeI2svg: function () {
            be();
          }
        };
      }
    },
    ve = gn || {};
  ve[On] || (ve[On] = {}), ve[On].styles || (ve[On].styles = {}), ve[On].hooks || (ve[On].hooks = {}), ve[On].shims || (ve[On].shims = []);
  var ye = ve[On],
    we = [],
    ke = !1;
  function xe(t) {
    var n = t.tag,
      e = t.attributes,
      a = void 0 === e ? {} : e,
      r = t.children,
      i = void 0 === r ? [] : r;
    return "string" == typeof t ? le(t) : "<".concat(n, " ").concat(function (t) {
      return Object.keys(t || {}).reduce(function (n, e) {
        return n + "".concat(e, '="').concat(le(t[e]), '" ');
      }, "").trim();
    }(a), ">").concat(i.map(xe).join(""), "</").concat(n, ">");
  }
  function Oe(t, n, e) {
    if (t && t[n] && t[n][e]) return {
      prefix: n,
      iconName: e,
      icon: t[n][e]
    };
  }
  kn && ((ke = (vn.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(vn.readyState)) || vn.addEventListener("DOMContentLoaded", function t() {
    vn.removeEventListener("DOMContentLoaded", t), ke = 1, we.map(function (t) {
      return t();
    });
  }));
  var Ee = function (t, n, e, a) {
    var r,
      i,
      o,
      s = Object.keys(t),
      c = s.length,
      f = void 0 !== a ? function (t, n) {
        return function (e, a, r, i) {
          return t.call(n, e, a, r, i);
        };
      }(n, a) : n;
    for (void 0 === e ? (r = 1, o = t[s[0]]) : (r = 0, o = e); r < c; r++) o = f(o, t[i = s[r]], i, t);
    return o;
  };
  function Se(t) {
    var n = function (t) {
      for (var n = [], e = 0, a = t.length; e < a;) {
        var r = t.charCodeAt(e++);
        if (r >= 55296 && r <= 56319 && e < a) {
          var i = t.charCodeAt(e++);
          56320 == (64512 & i) ? n.push(((1023 & r) << 10) + (1023 & i) + 65536) : (n.push(r), e--);
        } else n.push(r);
      }
      return n;
    }(t);
    return 1 === n.length ? n[0].toString(16) : null;
  }
  function Ae(t) {
    return Object.keys(t).reduce(function (n, e) {
      var a = t[e];
      return a.icon ? n[a.iconName] = a.icon : n[e] = a, n;
    }, {});
  }
  function je(t, n) {
    var e = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
      a = void 0 !== e && e,
      r = Ae(n);
    "function" != typeof ye.hooks.addPack || a ? ye.styles[t] = Xt(Xt({}, ye.styles[t] || {}), r) : ye.hooks.addPack(t, Ae(n)), "fas" === t && je("fa", n);
  }
  var Ne,
    Ce,
    Re,
    Pe = ye.styles,
    Te = ye.shims,
    Le = (Zt(Ne = {}, Dn, Object.values(Bn[Dn])), Zt(Ne, zn, Object.values(Bn[zn])), Ne),
    Me = null,
    De = {},
    ze = {},
    Fe = {},
    Ie = {},
    _e = {},
    Ue = (Zt(Ce = {}, Dn, Object.keys(_n[Dn])), Zt(Ce, zn, Object.keys(_n[zn])), Ce);
  var Be,
    qe = function () {
      var t = function (t) {
        return Ee(Pe, function (n, e, a) {
          return n[a] = Ee(e, t, {}), n;
        }, {});
      };
      De = t(function (t, n, e) {
        return n[3] && (t[n[3]] = e), n[2] && n[2].filter(function (t) {
          return "number" == typeof t;
        }).forEach(function (n) {
          t[n.toString(16)] = e;
        }), t;
      }), ze = t(function (t, n, e) {
        return t[e] = e, n[2] && n[2].filter(function (t) {
          return "string" == typeof t;
        }).forEach(function (n) {
          t[n] = e;
        }), t;
      }), _e = t(function (t, n, e) {
        var a = n[2];
        return t[e] = e, a.forEach(function (n) {
          t[n] = e;
        }), t;
      });
      var n = "far" in Pe || ee.autoFetchSvg,
        e = Ee(Te, function (t, e) {
          var a = e[0],
            r = e[1],
            i = e[2];
          return "far" !== r || n || (r = "fas"), "string" == typeof a && (t.names[a] = {
            prefix: r,
            iconName: i
          }), "number" == typeof a && (t.unicodes[a.toString(16)] = {
            prefix: r,
            iconName: i
          }), t;
        }, {
          names: {},
          unicodes: {}
        });
      Fe = e.names, Ie = e.unicodes, Me = $e(ee.styleDefault, {
        family: ee.familyDefault
      });
    };
  function He(t, n) {
    return (De[t] || {})[n];
  }
  function Ye(t, n) {
    return (_e[t] || {})[n];
  }
  function We(t) {
    return Fe[t] || {
      prefix: null,
      iconName: null
    };
  }
  function Ve() {
    return Me;
  }
  Be = function (t) {
    Me = $e(t.styleDefault, {
      family: ee.familyDefault
    });
  }, ae.push(Be), qe();
  var Je = function () {
    return {
      prefix: null,
      iconName: null,
      rest: []
    };
  };
  function $e(t) {
    var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
      e = void 0 === n ? Dn : n,
      a = _n[e][t],
      r = Un[e][t] || Un[e][a],
      i = t in ye.styles ? t : null;
    return r || i || null;
  }
  var Ke = (Zt(Re = {}, Dn, Object.keys(Bn[Dn])), Zt(Re, zn, Object.keys(Bn[zn])), Re);
  function Xe(t) {
    var n,
      e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
      a = void 0 !== e && e,
      r = (Zt(n = {}, Dn, "".concat(ee.cssPrefix, "-").concat(Dn)), Zt(n, zn, "".concat(ee.cssPrefix, "-").concat(zn)), n),
      i = null,
      o = Dn;
    (t.includes(r[Dn]) || t.some(function (t) {
      return Ke[Dn].includes(t);
    })) && (o = Dn), (t.includes(r[zn]) || t.some(function (t) {
      return Ke[zn].includes(t);
    })) && (o = zn);
    var s = t.reduce(function (t, n) {
      var e = function (t, n) {
        var e,
          a = n.split("-"),
          r = a[0],
          i = a.slice(1).join("-");
        return r !== t || "" === i || (e = i, ~Qn.indexOf(e)) ? null : i;
      }(ee.cssPrefix, n);
      if (Pe[n] ? (n = Le[o].includes(n) ? qn[o][n] : n, i = n, t.prefix = n) : Ue[o].indexOf(n) > -1 ? (i = n, t.prefix = $e(n, {
        family: o
      })) : e ? t.iconName = e : n !== ee.replacementClass && n !== r[Dn] && n !== r[zn] && t.rest.push(n), !a && t.prefix && t.iconName) {
        var s = "fa" === i ? We(t.iconName) : {},
          c = Ye(t.prefix, t.iconName);
        s.prefix && (i = null), t.iconName = s.iconName || c || t.iconName, t.prefix = s.prefix || t.prefix, "far" !== t.prefix || Pe.far || !Pe.fas || ee.autoFetchSvg || (t.prefix = "fas");
      }
      return t;
    }, Je());
    return (t.includes("fa-brands") || t.includes("fab")) && (s.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (s.prefix = "fad"), s.prefix || o !== zn || !Pe.fass && !ee.autoFetchSvg || (s.prefix = "fass", s.iconName = Ye(s.prefix, s.iconName) || s.iconName), "fa" !== s.prefix && "fa" !== i || (s.prefix = Ve() || "fas"), s;
  }
  var Ge = function () {
      function t() {
        !function (t, n) {
          if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.definitions = {};
      }
      var n, e;
      return n = t, e = [{
        key: "add",
        value: function () {
          for (var t = this, n = arguments.length, e = new Array(n), a = 0; a < n; a++) e[a] = arguments[a];
          var r = e.reduce(this._pullDefinitions, {});
          Object.keys(r).forEach(function (n) {
            t.definitions[n] = Xt(Xt({}, t.definitions[n] || {}), r[n]), je(n, r[n]);
            var e = Bn[Dn][n];
            e && je(e, r[n]), qe();
          });
        }
      }, {
        key: "reset",
        value: function () {
          this.definitions = {};
        }
      }, {
        key: "_pullDefinitions",
        value: function (t, n) {
          var e = n.prefix && n.iconName && n.icon ? {
            0: n
          } : n;
          return Object.keys(e).map(function (n) {
            var a = e[n],
              r = a.prefix,
              i = a.iconName,
              o = a.icon,
              s = o[2];
            t[r] || (t[r] = {}), s.length > 0 && s.forEach(function (n) {
              "string" == typeof n && (t[r][n] = o);
            }), t[r][i] = o;
          }), t;
        }
      }], e && Qt(n.prototype, e), Object.defineProperty(n, "prototype", {
        writable: !1
      }), t;
    }(),
    Qe = [],
    Ze = {},
    ta = {},
    na = Object.keys(ta);
  function ea(t, n) {
    for (var e = arguments.length, a = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++) a[r - 2] = arguments[r];
    return (Ze[t] || []).forEach(function (t) {
      n = t.apply(null, [n].concat(a));
    }), n;
  }
  function aa(t) {
    for (var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) e[a - 1] = arguments[a];
    (Ze[t] || []).forEach(function (t) {
      t.apply(null, e);
    });
  }
  function ra() {
    var t = arguments[0],
      n = Array.prototype.slice.call(arguments, 1);
    return ta[t] ? ta[t].apply(null, n) : void 0;
  }
  function ia(t) {
    "fa" === t.prefix && (t.prefix = "fas");
    var n = t.iconName,
      e = t.prefix || Ve();
    if (n) return n = Ye(e, n) || n, Oe(oa.definitions, e, n) || Oe(ye.styles, e, n);
  }
  var oa = new Ge(),
    sa = {
      i2svg: function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return kn ? (aa("beforeI2svg", t), ra("pseudoElements2svg", t), ra("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
      },
      watch: function () {
        var t,
          n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = n.autoReplaceSvgRoot;
        !1 === ee.autoReplaceSvg && (ee.autoReplaceSvg = !0), ee.observeMutations = !0, t = function () {
          fa({
            autoReplaceSvgRoot: e
          }), aa("watch", n);
        }, kn && (ke ? setTimeout(t, 0) : we.push(t));
      }
    },
    ca = {
      noAuto: function () {
        ee.autoReplaceSvg = !1, ee.observeMutations = !1, aa("noAuto");
      },
      config: ee,
      dom: sa,
      parse: {
        icon: function (t) {
          if (null === t) return null;
          if ("object" === Gt(t) && t.prefix && t.iconName) return {
            prefix: t.prefix,
            iconName: Ye(t.prefix, t.iconName) || t.iconName
          };
          if (Array.isArray(t) && 2 === t.length) {
            var n = 0 === t[1].indexOf("fa-") ? t[1].slice(3) : t[1],
              e = $e(t[0]);
            return {
              prefix: e,
              iconName: Ye(e, n) || n
            };
          }
          if ("string" == typeof t && (t.indexOf("".concat(ee.cssPrefix, "-")) > -1 || t.match(Hn))) {
            var a = Xe(t.split(" "), {
              skipLookups: !0
            });
            return {
              prefix: a.prefix || Ve(),
              iconName: Ye(a.prefix, a.iconName) || a.iconName
            };
          }
          if ("string" == typeof t) {
            var r = Ve();
            return {
              prefix: r,
              iconName: Ye(r, t) || t
            };
          }
        }
      },
      library: oa,
      findIconDefinition: ia,
      toHtml: xe
    },
    fa = function () {
      var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
        n = void 0 === t ? vn : t;
      (Object.keys(ye.styles).length > 0 || ee.autoFetchSvg) && kn && ee.autoReplaceSvg && ca.dom.i2svg({
        node: n
      });
    };
  function la(t, n) {
    return Object.defineProperty(t, "abstract", {
      get: n
    }), Object.defineProperty(t, "html", {
      get: function () {
        return t.abstract.map(function (t) {
          return xe(t);
        });
      }
    }), Object.defineProperty(t, "node", {
      get: function () {
        if (kn) {
          var n = vn.createElement("div");
          return n.innerHTML = t.html, n.children;
        }
      }
    }), t;
  }
  function ua(t) {
    var n = t.icons,
      e = n.main,
      a = n.mask,
      r = t.prefix,
      i = t.iconName,
      o = t.transform,
      s = t.symbol,
      c = t.title,
      f = t.maskId,
      l = t.titleId,
      u = t.extra,
      d = t.watchable,
      m = void 0 !== d && d,
      p = a.found ? a : e,
      h = p.width,
      b = p.height,
      g = "fak" === r,
      v = [ee.replacementClass, i ? "".concat(ee.cssPrefix, "-").concat(i) : ""].filter(function (t) {
        return -1 === u.classes.indexOf(t);
      }).filter(function (t) {
        return "" !== t || !!t;
      }).concat(u.classes).join(" "),
      y = {
        children: [],
        attributes: Xt(Xt({}, u.attributes), {}, {
          "data-prefix": r,
          "data-icon": i,
          class: v,
          role: u.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(h, " ").concat(b)
        })
      },
      w = g && !~u.classes.indexOf("fa-fw") ? {
        width: "".concat(h / b * 16 * .0625, "em")
      } : {};
    m && (y.attributes[An] = ""), c && (y.children.push({
      tag: "title",
      attributes: {
        id: y.attributes["aria-labelledby"] || "title-".concat(l || se())
      },
      children: [c]
    }), delete y.attributes.title);
    var k = Xt(Xt({}, y), {}, {
        prefix: r,
        iconName: i,
        main: e,
        mask: a,
        maskId: f,
        transform: o,
        symbol: s,
        styles: Xt(Xt({}, w), u.styles)
      }),
      x = a.found && e.found ? ra("generateAbstractMask", k) || {
        children: [],
        attributes: {}
      } : ra("generateAbstractIcon", k) || {
        children: [],
        attributes: {}
      },
      O = x.children,
      E = x.attributes;
    return k.children = O, k.attributes = E, s ? function (t) {
      var n = t.prefix,
        e = t.iconName,
        a = t.children,
        r = t.attributes,
        i = t.symbol,
        o = !0 === i ? "".concat(n, "-").concat(ee.cssPrefix, "-").concat(e) : i;
      return [{
        tag: "svg",
        attributes: {
          style: "display: none;"
        },
        children: [{
          tag: "symbol",
          attributes: Xt(Xt({}, r), {}, {
            id: o
          }),
          children: a
        }]
      }];
    }(k) : function (t) {
      var n = t.children,
        e = t.main,
        a = t.mask,
        r = t.attributes,
        i = t.styles,
        o = t.transform;
      if (de(o) && e.found && !a.found) {
        var s = {
          x: e.width / e.height / 2,
          y: .5
        };
        r.style = ue(Xt(Xt({}, i), {}, {
          "transform-origin": "".concat(s.x + o.x / 16, "em ").concat(s.y + o.y / 16, "em")
        }));
      }
      return [{
        tag: "svg",
        attributes: r,
        children: n
      }];
    }(k);
  }
  function da(t) {
    var n = t.content,
      e = t.width,
      a = t.height,
      r = t.transform,
      i = t.title,
      o = t.extra,
      s = t.watchable,
      c = void 0 !== s && s,
      f = Xt(Xt(Xt({}, o.attributes), i ? {
        title: i
      } : {}), {}, {
        class: o.classes.join(" ")
      });
    c && (f[An] = "");
    var l = Xt({}, o.styles);
    de(r) && (l.transform = function (t) {
      var n = t.transform,
        e = t.width,
        a = void 0 === e ? 16 : e,
        r = t.height,
        i = void 0 === r ? 16 : r,
        o = t.startCentered,
        s = void 0 !== o && o,
        c = "";
      return c += s && xn ? "translate(".concat(n.x / re - a / 2, "em, ").concat(n.y / re - i / 2, "em) ") : s ? "translate(calc(-50% + ".concat(n.x / re, "em), calc(-50% + ").concat(n.y / re, "em)) ") : "translate(".concat(n.x / re, "em, ").concat(n.y / re, "em) "), (c += "scale(".concat(n.size / re * (n.flipX ? -1 : 1), ", ").concat(n.size / re * (n.flipY ? -1 : 1), ") ")) + "rotate(".concat(n.rotate, "deg) ");
    }({
      transform: r,
      startCentered: !0,
      width: e,
      height: a
    }), l["-webkit-transform"] = l.transform);
    var u = ue(l);
    u.length > 0 && (f.style = u);
    var d = [];
    return d.push({
      tag: "span",
      attributes: f,
      children: [n]
    }), i && d.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [i]
    }), d;
  }
  var ma = ye.styles;
  function pa(t) {
    var n = t[0],
      e = t[1],
      a = tn(t.slice(4), 1)[0];
    return {
      found: !0,
      width: n,
      height: e,
      icon: Array.isArray(a) ? {
        tag: "g",
        attributes: {
          class: "".concat(ee.cssPrefix, "-").concat(Xn.GROUP)
        },
        children: [{
          tag: "path",
          attributes: {
            class: "".concat(ee.cssPrefix, "-").concat(Xn.SECONDARY),
            fill: "currentColor",
            d: a[0]
          }
        }, {
          tag: "path",
          attributes: {
            class: "".concat(ee.cssPrefix, "-").concat(Xn.PRIMARY),
            fill: "currentColor",
            d: a[1]
          }
        }]
      } : {
        tag: "path",
        attributes: {
          fill: "currentColor",
          d: a
        }
      }
    };
  }
  var ha = {
    found: !1,
    width: 512,
    height: 512
  };
  function ba(t, n) {
    var e = n;
    return "fa" === n && null !== ee.styleDefault && (n = Ve()), new Promise(function (a, r) {
      if (ra("missingIconAbstract"), "fa" === e) {
        var i = We(t) || {};
        t = i.iconName || t, n = i.prefix || n;
      }
      if (t && n && ma[n] && ma[n][t]) return a(pa(ma[n][t]));
      !function (t, n) {
        Mn || ee.showMissingIcons || !t || console.error('Icon with name "'.concat(t, '" and prefix "').concat(n, '" is missing.'));
      }(t, n), a(Xt(Xt({}, ha), {}, {
        icon: ee.showMissingIcons && t && ra("missingIconAbstract") || {}
      }));
    });
  }
  var ga = function () {},
    va = ee.measurePerformance && wn && wn.mark && wn.measure ? wn : {
      mark: ga,
      measure: ga
    },
    ya = 'FA "6.5.1"',
    wa = function (t) {
      va.mark("".concat(ya, " ").concat(t, " ends")), va.measure("".concat(ya, " ").concat(t), "".concat(ya, " ").concat(t, " begins"), "".concat(ya, " ").concat(t, " ends"));
    },
    ka = {
      begin: function (t) {
        return va.mark("".concat(ya, " ").concat(t, " begins")), function () {
          return wa(t);
        };
      },
      end: wa
    },
    xa = function () {};
  function Oa(t) {
    return "string" == typeof (t.getAttribute ? t.getAttribute(An) : null);
  }
  function Ea(t) {
    return vn.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function Sa(t) {
    return vn.createElement(t);
  }
  function Aa(t) {
    var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
      e = void 0 === n ? "svg" === t.tag ? Ea : Sa : n;
    if ("string" == typeof t) return vn.createTextNode(t);
    var a = e(t.tag);
    return Object.keys(t.attributes || []).forEach(function (n) {
      a.setAttribute(n, t.attributes[n]);
    }), (t.children || []).forEach(function (t) {
      a.appendChild(Aa(t, {
        ceFn: e
      }));
    }), a;
  }
  var ja = {
    replace: function (t) {
      var n = t[0];
      if (n.parentNode) if (t[1].forEach(function (t) {
        n.parentNode.insertBefore(Aa(t), n);
      }), null === n.getAttribute(An) && ee.keepOriginalSource) {
        var e = vn.createComment(function (t) {
          var n = " ".concat(t.outerHTML, " ");
          return "".concat(n, "Font Awesome fontawesome.com ");
        }(n));
        n.parentNode.replaceChild(e, n);
      } else n.remove();
    },
    nest: function (t) {
      var n = t[0],
        e = t[1];
      if (~fe(n).indexOf(ee.replacementClass)) return ja.replace(t);
      var a = new RegExp("".concat(ee.cssPrefix, "-.*"));
      if (delete e[0].attributes.id, e[0].attributes.class) {
        var r = e[0].attributes.class.split(" ").reduce(function (t, n) {
          return n === ee.replacementClass || n.match(a) ? t.toSvg.push(n) : t.toNode.push(n), t;
        }, {
          toNode: [],
          toSvg: []
        });
        e[0].attributes.class = r.toSvg.join(" "), 0 === r.toNode.length ? n.removeAttribute("class") : n.setAttribute("class", r.toNode.join(" "));
      }
      var i = e.map(function (t) {
        return xe(t);
      }).join("\n");
      n.setAttribute(An, ""), n.innerHTML = i;
    }
  };
  function Na(t) {
    t();
  }
  function Ca(t, n) {
    var e = "function" == typeof n ? n : xa;
    if (0 === t.length) e();else {
      var a = Na;
      ee.mutateApproach === Tn && (a = gn.requestAnimationFrame || Na), a(function () {
        var n = !0 === ee.autoReplaceSvg ? ja.replace : ja[ee.autoReplaceSvg] || ja.replace,
          a = ka.begin("mutate");
        t.map(n), a(), e();
      });
    }
  }
  var Ra = !1;
  function Pa() {
    Ra = !0;
  }
  function Ta() {
    Ra = !1;
  }
  var La = null;
  function Ma(t) {
    if (yn && ee.observeMutations) {
      var n = t.treeCallback,
        e = void 0 === n ? xa : n,
        a = t.nodeCallback,
        r = void 0 === a ? xa : a,
        i = t.pseudoElementsCallback,
        o = void 0 === i ? xa : i,
        s = t.observeMutationsRoot,
        c = void 0 === s ? vn : s;
      La = new yn(function (t) {
        if (!Ra) {
          var n = Ve();
          ce(t).forEach(function (t) {
            if ("childList" === t.type && t.addedNodes.length > 0 && !Oa(t.addedNodes[0]) && (ee.searchPseudoElements && o(t.target), e(t.target)), "attributes" === t.type && t.target.parentNode && ee.searchPseudoElements && o(t.target.parentNode), "attributes" === t.type && Oa(t.target) && ~Kn.indexOf(t.attributeName)) if ("class" === t.attributeName && function (t) {
              var n = t.getAttribute ? t.getAttribute(Cn) : null,
                e = t.getAttribute ? t.getAttribute(Rn) : null;
              return n && e;
            }(t.target)) {
              var a = Xe(fe(t.target)),
                i = a.prefix,
                s = a.iconName;
              t.target.setAttribute(Cn, i || n), s && t.target.setAttribute(Rn, s);
            } else (c = t.target) && c.classList && c.classList.contains && c.classList.contains(ee.replacementClass) && r(t.target);
            var c;
          });
        }
      }), kn && La.observe(c, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0
      });
    }
  }
  function Da(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        styleParser: !0
      },
      e = function (t) {
        var n,
          e,
          a = t.getAttribute("data-prefix"),
          r = t.getAttribute("data-icon"),
          i = void 0 !== t.innerText ? t.innerText.trim() : "",
          o = Xe(fe(t));
        return o.prefix || (o.prefix = Ve()), a && r && (o.prefix = a, o.iconName = r), o.iconName && o.prefix || (o.prefix && i.length > 0 && (o.iconName = (n = o.prefix, e = t.innerText, (ze[n] || {})[e] || He(o.prefix, Se(t.innerText)))), !o.iconName && ee.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = t.firstChild.data)), o;
      }(t),
      a = e.iconName,
      r = e.prefix,
      i = e.rest,
      o = function (t) {
        var n = ce(t.attributes).reduce(function (t, n) {
            return "class" !== t.name && "style" !== t.name && (t[n.name] = n.value), t;
          }, {}),
          e = t.getAttribute("title"),
          a = t.getAttribute("data-fa-title-id");
        return ee.autoA11y && (e ? n["aria-labelledby"] = "".concat(ee.replacementClass, "-title-").concat(a || se()) : (n["aria-hidden"] = "true", n.focusable = "false")), n;
      }(t),
      s = ea("parseNodeAttributes", {}, t),
      c = n.styleParser ? function (t) {
        var n = t.getAttribute("style"),
          e = [];
        return n && (e = n.split(";").reduce(function (t, n) {
          var e = n.split(":"),
            a = e[0],
            r = e.slice(1);
          return a && r.length > 0 && (t[a] = r.join(":").trim()), t;
        }, {})), e;
      }(t) : [];
    return Xt({
      iconName: a,
      title: t.getAttribute("title"),
      titleId: t.getAttribute("data-fa-title-id"),
      prefix: r,
      transform: ie,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      symbol: !1,
      extra: {
        classes: i,
        styles: c,
        attributes: o
      }
    }, s);
  }
  var za = ye.styles;
  function Fa(t) {
    var n = "nest" === ee.autoReplaceSvg ? Da(t, {
      styleParser: !1
    }) : Da(t);
    return ~n.extra.classes.indexOf(Yn) ? ra("generateLayersText", t, n) : ra("generateSvgReplacementMutation", t, n);
  }
  var Ia = new Set();
  function _a(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (!kn) return Promise.resolve();
    var e = vn.documentElement.classList,
      a = function (t) {
        return e.add("".concat(Pn, "-").concat(t));
      },
      r = function (t) {
        return e.remove("".concat(Pn, "-").concat(t));
      },
      i = ee.autoFetchSvg ? Ia : Fn.map(function (t) {
        return "fa-".concat(t);
      }).concat(Object.keys(za));
    i.includes("fa") || i.push("fa");
    var o = [".".concat(Yn, ":not([").concat(An, "])")].concat(i.map(function (t) {
      return ".".concat(t, ":not([").concat(An, "])");
    })).join(", ");
    if (0 === o.length) return Promise.resolve();
    var s = [];
    try {
      s = ce(t.querySelectorAll(o));
    } catch (t) {}
    if (!(s.length > 0)) return Promise.resolve();
    a("pending"), r("complete");
    var c = ka.begin("onTree"),
      f = s.reduce(function (t, n) {
        try {
          var e = Fa(n);
          e && t.push(e);
        } catch (t) {
          Mn || "MissingIcon" === t.name && console.error(t);
        }
        return t;
      }, []);
    return new Promise(function (t, e) {
      Promise.all(f).then(function (e) {
        Ca(e, function () {
          a("active"), a("complete"), r("pending"), "function" == typeof n && n(), c(), t();
        });
      }).catch(function (t) {
        c(), e(t);
      });
    });
  }
  function Ua(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    Fa(t).then(function (t) {
      t && Ca([t], n);
    });
  }
  Fn.map(function (t) {
    Ia.add("fa-".concat(t));
  }), Object.keys(_n[Dn]).map(Ia.add.bind(Ia)), Object.keys(_n[zn]).map(Ia.add.bind(Ia)), Ia = nn(Ia);
  var Ba = function (t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        e = n.transform,
        a = void 0 === e ? ie : e,
        r = n.symbol,
        i = void 0 !== r && r,
        o = n.mask,
        s = void 0 === o ? null : o,
        c = n.maskId,
        f = void 0 === c ? null : c,
        l = n.title,
        u = void 0 === l ? null : l,
        d = n.titleId,
        m = void 0 === d ? null : d,
        p = n.classes,
        h = void 0 === p ? [] : p,
        b = n.attributes,
        g = void 0 === b ? {} : b,
        v = n.styles,
        y = void 0 === v ? {} : v;
      if (t) {
        var w = t.prefix,
          k = t.iconName,
          x = t.icon;
        return la(Xt({
          type: "icon"
        }, t), function () {
          return aa("beforeDOMElementCreation", {
            iconDefinition: t,
            params: n
          }), ee.autoA11y && (u ? g["aria-labelledby"] = "".concat(ee.replacementClass, "-title-").concat(m || se()) : (g["aria-hidden"] = "true", g.focusable = "false")), ua({
            icons: {
              main: pa(x),
              mask: s ? pa(s.icon) : {
                found: !1,
                width: null,
                height: null,
                icon: {}
              }
            },
            prefix: w,
            iconName: k,
            transform: Xt(Xt({}, ie), a),
            symbol: i,
            title: u,
            maskId: f,
            titleId: m,
            extra: {
              attributes: g,
              styles: y,
              classes: h
            }
          });
        });
      }
    },
    qa = {
      mixout: function () {
        return {
          icon: (t = Ba, function (n) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              a = (n || {}).icon ? n : ia(n || {}),
              r = e.mask;
            return r && (r = (r || {}).icon ? r : ia(r || {})), t(a, Xt(Xt({}, e), {}, {
              mask: r
            }));
          })
        };
        var t;
      },
      hooks: function () {
        return {
          mutationObserverCallbacks: function (t) {
            return t.treeCallback = _a, t.nodeCallback = Ua, t;
          }
        };
      },
      provides: function (t) {
        t.i2svg = function (t) {
          var n = t.node,
            e = void 0 === n ? vn : n,
            a = t.callback;
          return _a(e, void 0 === a ? function () {} : a);
        }, t.generateSvgReplacementMutation = function (t, n) {
          var e = n.iconName,
            a = n.title,
            r = n.titleId,
            i = n.prefix,
            o = n.transform,
            s = n.symbol,
            c = n.mask,
            f = n.maskId,
            l = n.extra;
          return new Promise(function (n, u) {
            Promise.all([ba(e, i), c.iconName ? ba(c.iconName, c.prefix) : Promise.resolve({
              found: !1,
              width: 512,
              height: 512,
              icon: {}
            })]).then(function (c) {
              var u = tn(c, 2),
                d = u[0],
                m = u[1];
              n([t, ua({
                icons: {
                  main: d,
                  mask: m
                },
                prefix: i,
                iconName: e,
                transform: o,
                symbol: s,
                maskId: f,
                title: a,
                titleId: r,
                extra: l,
                watchable: !0
              })]);
            }).catch(u);
          });
        }, t.generateAbstractIcon = function (t) {
          var n,
            e = t.children,
            a = t.attributes,
            r = t.main,
            i = t.transform,
            o = ue(t.styles);
          return o.length > 0 && (a.style = o), de(i) && (n = ra("generateAbstractTransformGrouping", {
            main: r,
            transform: i,
            containerWidth: r.width,
            iconWidth: r.width
          })), e.push(n || r.icon), {
            children: e,
            attributes: a
          };
        };
      }
    },
    Ha = {
      mixout: function () {
        return {
          layer: function (t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              e = n.classes,
              a = void 0 === e ? [] : e;
            return la({
              type: "layer"
            }, function () {
              aa("beforeDOMElementCreation", {
                assembler: t,
                params: n
              });
              var e = [];
              return t(function (t) {
                Array.isArray(t) ? t.map(function (t) {
                  e = e.concat(t.abstract);
                }) : e = e.concat(t.abstract);
              }), [{
                tag: "span",
                attributes: {
                  class: ["".concat(ee.cssPrefix, "-layers")].concat(nn(a)).join(" ")
                },
                children: e
              }];
            });
          }
        };
      }
    },
    Ya = {
      mixout: function () {
        return {
          counter: function (t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              e = n.title,
              a = void 0 === e ? null : e,
              r = n.classes,
              i = void 0 === r ? [] : r,
              o = n.attributes,
              s = void 0 === o ? {} : o,
              c = n.styles,
              f = void 0 === c ? {} : c;
            return la({
              type: "counter",
              content: t
            }, function () {
              return aa("beforeDOMElementCreation", {
                content: t,
                params: n
              }), function (t) {
                var n = t.content,
                  e = t.title,
                  a = t.extra,
                  r = Xt(Xt(Xt({}, a.attributes), e ? {
                    title: e
                  } : {}), {}, {
                    class: a.classes.join(" ")
                  }),
                  i = ue(a.styles);
                i.length > 0 && (r.style = i);
                var o = [];
                return o.push({
                  tag: "span",
                  attributes: r,
                  children: [n]
                }), e && o.push({
                  tag: "span",
                  attributes: {
                    class: "sr-only"
                  },
                  children: [e]
                }), o;
              }({
                content: t.toString(),
                title: a,
                extra: {
                  attributes: s,
                  styles: f,
                  classes: ["".concat(ee.cssPrefix, "-layers-counter")].concat(nn(i))
                }
              });
            });
          }
        };
      }
    },
    Wa = {
      mixout: function () {
        return {
          text: function (t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              e = n.transform,
              a = void 0 === e ? ie : e,
              r = n.title,
              i = void 0 === r ? null : r,
              o = n.classes,
              s = void 0 === o ? [] : o,
              c = n.attributes,
              f = void 0 === c ? {} : c,
              l = n.styles,
              u = void 0 === l ? {} : l;
            return la({
              type: "text",
              content: t
            }, function () {
              return aa("beforeDOMElementCreation", {
                content: t,
                params: n
              }), da({
                content: t,
                transform: Xt(Xt({}, ie), a),
                title: i,
                extra: {
                  attributes: f,
                  styles: u,
                  classes: ["".concat(ee.cssPrefix, "-layers-text")].concat(nn(s))
                }
              });
            });
          }
        };
      },
      provides: function (t) {
        t.generateLayersText = function (t, n) {
          var e = n.title,
            a = n.transform,
            r = n.extra,
            i = null,
            o = null;
          if (xn) {
            var s = parseInt(getComputedStyle(t).fontSize, 10),
              c = t.getBoundingClientRect();
            i = c.width / s, o = c.height / s;
          }
          return ee.autoA11y && !e && (r.attributes["aria-hidden"] = "true"), Promise.resolve([t, da({
            content: t.innerHTML,
            width: i,
            height: o,
            transform: a,
            title: e,
            extra: r,
            watchable: !0
          })]);
        };
      }
    },
    Va = new RegExp('"', "ug"),
    Ja = [1105920, 1112319];
  function $a(t, n) {
    var e = "".concat(Nn).concat(n.replace(":", "-"));
    return new Promise(function (a, r) {
      if (null !== t.getAttribute(e)) return a();
      var i,
        o,
        s,
        c = ce(t.children).filter(function (t) {
          return t.getAttribute(jn) === n;
        })[0],
        f = gn.getComputedStyle(t, n),
        l = f.getPropertyValue("font-family").match(Wn),
        u = f.getPropertyValue("font-weight"),
        d = f.getPropertyValue("content");
      if (c && !l) return t.removeChild(c), a();
      if (l && "none" !== d && "" !== d) {
        var m = f.getPropertyValue("content"),
          p = ~["Sharp"].indexOf(l[2]) ? zn : Dn,
          h = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? Un[p][l[2].toLowerCase()] : Vn[p][u],
          b = function (t) {
            var n,
              e,
              a,
              r,
              i = t.replace(Va, ""),
              o = (0, a = (n = i).length, (r = n.charCodeAt(0)) >= 55296 && r <= 56319 && a > 1 && (e = n.charCodeAt(1)) >= 56320 && e <= 57343 ? 1024 * (r - 55296) + e - 56320 + 65536 : r),
              s = o >= Ja[0] && o <= Ja[1],
              c = 2 === i.length && i[0] === i[1];
            return {
              value: Se(c ? i[0] : i),
              isSecondary: s || c
            };
          }(m),
          g = b.value,
          v = b.isSecondary,
          y = l[0].startsWith("FontAwesome"),
          w = He(h, g),
          k = w;
        if (y) {
          var x = (o = Ie[i = g], s = He("fas", i), o || (s ? {
            prefix: "fas",
            iconName: s
          } : null) || {
            prefix: null,
            iconName: null
          });
          x.iconName && x.prefix && (w = x.iconName, h = x.prefix);
        }
        if (!w || v || c && c.getAttribute(Cn) === h && c.getAttribute(Rn) === k) a();else {
          t.setAttribute(e, k), c && t.removeChild(c);
          var O = {
              iconName: null,
              title: null,
              titleId: null,
              prefix: null,
              transform: ie,
              symbol: !1,
              mask: {
                iconName: null,
                prefix: null,
                rest: []
              },
              maskId: null,
              extra: {
                classes: [],
                styles: {},
                attributes: {}
              }
            },
            E = O.extra;
          E.attributes[jn] = n, ba(w, h).then(function (r) {
            var i = ua(Xt(Xt({}, O), {}, {
                icons: {
                  main: r,
                  mask: Je()
                },
                prefix: h,
                iconName: k,
                extra: E,
                watchable: !0
              })),
              o = vn.createElementNS("http://www.w3.org/2000/svg", "svg");
            "::before" === n ? t.insertBefore(o, t.firstChild) : t.appendChild(o), o.outerHTML = i.map(function (t) {
              return xe(t);
            }).join("\n"), t.removeAttribute(e), a();
          }).catch(r);
        }
      } else a();
    });
  }
  function Ka(t) {
    return Promise.all([$a(t, "::before"), $a(t, "::after")]);
  }
  function Xa(t) {
    return !(t.parentNode === document.head || ~Ln.indexOf(t.tagName.toUpperCase()) || t.getAttribute(jn) || t.parentNode && "svg" === t.parentNode.tagName);
  }
  function Ga(t) {
    if (kn) return new Promise(function (n, e) {
      var a = ce(t.querySelectorAll("*")).filter(Xa).map(Ka),
        r = ka.begin("searchPseudoElements");
      Pa(), Promise.all(a).then(function () {
        r(), Ta(), n();
      }).catch(function () {
        r(), Ta(), e();
      });
    });
  }
  var Qa = !1,
    Za = function (t) {
      return t.toLowerCase().split(" ").reduce(function (t, n) {
        var e = n.toLowerCase().split("-"),
          a = e[0],
          r = e.slice(1).join("-");
        if (a && "h" === r) return t.flipX = !0, t;
        if (a && "v" === r) return t.flipY = !0, t;
        if (r = parseFloat(r), isNaN(r)) return t;
        switch (a) {
          case "grow":
            t.size = t.size + r;
            break;
          case "shrink":
            t.size = t.size - r;
            break;
          case "left":
            t.x = t.x - r;
            break;
          case "right":
            t.x = t.x + r;
            break;
          case "up":
            t.y = t.y - r;
            break;
          case "down":
            t.y = t.y + r;
            break;
          case "rotate":
            t.rotate = t.rotate + r;
        }
        return t;
      }, {
        size: 16,
        x: 0,
        y: 0,
        flipX: !1,
        flipY: !1,
        rotate: 0
      });
    },
    tr = {
      mixout: function () {
        return {
          parse: {
            transform: function (t) {
              return Za(t);
            }
          }
        };
      },
      hooks: function () {
        return {
          parseNodeAttributes: function (t, n) {
            var e = n.getAttribute("data-fa-transform");
            return e && (t.transform = Za(e)), t;
          }
        };
      },
      provides: function (t) {
        t.generateAbstractTransformGrouping = function (t) {
          var n = t.main,
            e = t.transform,
            a = t.containerWidth,
            r = t.iconWidth,
            i = {
              transform: "translate(".concat(a / 2, " 256)")
            },
            o = "translate(".concat(32 * e.x, ", ").concat(32 * e.y, ") "),
            s = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "),
            c = "rotate(".concat(e.rotate, " 0 0)"),
            f = {
              outer: i,
              inner: {
                transform: "".concat(o, " ").concat(s, " ").concat(c)
              },
              path: {
                transform: "translate(".concat(r / 2 * -1, " -256)")
              }
            };
          return {
            tag: "g",
            attributes: Xt({}, f.outer),
            children: [{
              tag: "g",
              attributes: Xt({}, f.inner),
              children: [{
                tag: n.icon.tag,
                children: n.icon.children,
                attributes: Xt(Xt({}, n.icon.attributes), f.path)
              }]
            }]
          };
        };
      }
    },
    nr = {
      x: 0,
      y: 0,
      width: "100%",
      height: "100%"
    };
  function er(t) {
    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return t.attributes && (t.attributes.fill || n) && (t.attributes.fill = "black"), t;
  }
  var ar,
    rr = {
      hooks: function () {
        return {
          parseNodeAttributes: function (t, n) {
            var e = n.getAttribute("data-fa-mask"),
              a = e ? Xe(e.split(" ").map(function (t) {
                return t.trim();
              })) : Je();
            return a.prefix || (a.prefix = Ve()), t.mask = a, t.maskId = n.getAttribute("data-fa-mask-id"), t;
          }
        };
      },
      provides: function (t) {
        t.generateAbstractMask = function (t) {
          var n,
            e = t.children,
            a = t.attributes,
            r = t.main,
            i = t.mask,
            o = t.maskId,
            s = t.transform,
            c = r.width,
            f = r.icon,
            l = i.width,
            u = i.icon,
            d = function (t) {
              var n = t.transform,
                e = t.iconWidth,
                a = {
                  transform: "translate(".concat(t.containerWidth / 2, " 256)")
                },
                r = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "),
                i = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "),
                o = "rotate(".concat(n.rotate, " 0 0)");
              return {
                outer: a,
                inner: {
                  transform: "".concat(r, " ").concat(i, " ").concat(o)
                },
                path: {
                  transform: "translate(".concat(e / 2 * -1, " -256)")
                }
              };
            }({
              transform: s,
              containerWidth: l,
              iconWidth: c
            }),
            m = {
              tag: "rect",
              attributes: Xt(Xt({}, nr), {}, {
                fill: "white"
              })
            },
            p = f.children ? {
              children: f.children.map(er)
            } : {},
            h = {
              tag: "g",
              attributes: Xt({}, d.inner),
              children: [er(Xt({
                tag: f.tag,
                attributes: Xt(Xt({}, f.attributes), d.path)
              }, p))]
            },
            b = {
              tag: "g",
              attributes: Xt({}, d.outer),
              children: [h]
            },
            g = "mask-".concat(o || se()),
            v = "clip-".concat(o || se()),
            y = {
              tag: "mask",
              attributes: Xt(Xt({}, nr), {}, {
                id: g,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse"
              }),
              children: [m, b]
            },
            w = {
              tag: "defs",
              children: [{
                tag: "clipPath",
                attributes: {
                  id: v
                },
                children: (n = u, "g" === n.tag ? n.children : [n])
              }, y]
            };
          return e.push(w, {
            tag: "rect",
            attributes: Xt({
              fill: "currentColor",
              "clip-path": "url(#".concat(v, ")"),
              mask: "url(#".concat(g, ")")
            }, nr)
          }), {
            children: e,
            attributes: a
          };
        };
      }
    },
    ir = {
      provides: function (t) {
        var n = !1;
        gn.matchMedia && (n = gn.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function () {
          var t = [],
            e = {
              fill: "currentColor"
            },
            a = {
              attributeType: "XML",
              repeatCount: "indefinite",
              dur: "2s"
            };
          t.push({
            tag: "path",
            attributes: Xt(Xt({}, e), {}, {
              d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
            })
          });
          var r = Xt(Xt({}, a), {}, {
              attributeName: "opacity"
            }),
            i = {
              tag: "circle",
              attributes: Xt(Xt({}, e), {}, {
                cx: "256",
                cy: "364",
                r: "28"
              }),
              children: []
            };
          return n || i.children.push({
            tag: "animate",
            attributes: Xt(Xt({}, a), {}, {
              attributeName: "r",
              values: "28;14;28;28;14;28;"
            })
          }, {
            tag: "animate",
            attributes: Xt(Xt({}, r), {}, {
              values: "1;0;1;1;0;1;"
            })
          }), t.push(i), t.push({
            tag: "path",
            attributes: Xt(Xt({}, e), {}, {
              opacity: "1",
              d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
            }),
            children: n ? [] : [{
              tag: "animate",
              attributes: Xt(Xt({}, r), {}, {
                values: "1;0;0;0;0;1;"
              })
            }]
          }), n || t.push({
            tag: "path",
            attributes: Xt(Xt({}, e), {}, {
              opacity: "0",
              d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
            }),
            children: [{
              tag: "animate",
              attributes: Xt(Xt({}, r), {}, {
                values: "0;0;1;1;0;0;"
              })
            }]
          }), {
            tag: "g",
            attributes: {
              class: "missing"
            },
            children: t
          };
        };
      }
    };
  ar = {
    mixoutsTo: ca
  }.mixoutsTo, Qe = [ge, qa, Ha, Ya, Wa, {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (t) {
          return t.pseudoElementsCallback = Ga, t;
        }
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (t) {
        var n = t.node,
          e = void 0 === n ? vn : n;
        ee.searchPseudoElements && Ga(e);
      };
    }
  }, {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            Pa(), Qa = !0;
          }
        }
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Ma(ea("mutationObserverCallbacks", {}));
        },
        noAuto: function () {
          La && La.disconnect();
        },
        watch: function (t) {
          var n = t.observeMutationsRoot;
          Qa ? Ta() : Ma(ea("mutationObserverCallbacks", {
            observeMutationsRoot: n
          }));
        }
      };
    }
  }, tr, rr, ir, {
    hooks: function () {
      return {
        parseNodeAttributes: function (t, n) {
          var e = n.getAttribute("data-fa-symbol"),
            a = null !== e && ("" === e || e);
          return t.symbol = a, t;
        }
      };
    }
  }], Ze = {}, Object.keys(ta).forEach(function (t) {
    -1 === na.indexOf(t) && delete ta[t];
  }), Qe.forEach(function (t) {
    var n = t.mixout ? t.mixout() : {};
    if (Object.keys(n).forEach(function (t) {
      "function" == typeof n[t] && (ar[t] = n[t]), "object" === Gt(n[t]) && Object.keys(n[t]).forEach(function (e) {
        ar[t] || (ar[t] = {}), ar[t][e] = n[t][e];
      });
    }), t.hooks) {
      var e = t.hooks();
      Object.keys(e).forEach(function (t) {
        Ze[t] || (Ze[t] = []), Ze[t].push(e[t]);
      });
    }
    t.provides && t.provides(ta);
  });
  var or = ca.library,
    sr = ca.icon;
  const cr = async function () {
      or.add($t);
      const t = sr($t),
        //n = "https://keineahnung.eu/resi-script-manager",
        a = document.querySelector("#iframe");
      if (null === a) return void e(Object.keys({
        frame: a
      })[0], "init.ts");
      if (a.removeEventListener("load", cr), null === a.contentWindow) return void e(`${Object.keys({
        frame: a
      })[0]}.contentWindow`, "init.ts");
      const r = a.contentWindow.document.querySelector("head");
      if (null === r) return void e(Object.keys({
        head: r
      })[0], "init.ts");
      r.querySelectorAll("script").length > 0 && r.querySelectorAll("script").forEach(t => {
        t.remove();
      }), r.querySelectorAll("link").length > 0 && r.querySelectorAll("link").forEach(t => {
        t.remove();
      }), a.contentWindow.document.body.innerHTML = "", a.contentWindow.document.body.style.overflowX = "hidden";
      const i = document.createElement("div");
      i.id = "closeDivIcon", i.style.width = "100%", i.style.display = "flex", i.style.justifyContent = "end";
      const o = document.createElement("span");
      o.id = "closeSpanIcon", o.style.height = "25px", o.insertAdjacentHTML("beforeend", t.html[0]), o.style.cursor = "pointer", o.style.display = "block", o.style.width = "25px", o.style.marginRight = "5px", i.insertAdjacentHTML("beforeend", o.outerHTML), a.contentWindow.document.body.insertAdjacentHTML("afterbegin", i.outerHTML);
      const s = a.contentWindow.document.querySelector("svg.svg-inline--fa.fa-xmark");
      if (null === s) return void e(Object.keys({
        svgCloseElement: s
      })[0], "init.ts");
      s.style.height = "25px";
      const c = a.contentWindow.document.querySelector("#closeSpanIcon");
      if (null === c) return void e(Object.keys({
        closeSpanIcon: c
      })[0], "init.ts");
      c.addEventListener("click", () => {
        fr();
      });
      const f = document.createElement("script");
      f.src = `${n}/js/svelte/settings.js`, r.appendChild(f);
      const l = document.createElement("link");
      (await async function (t, n, e = !0, a) {
        var r;
        const i = function (t, n) {
            var e, a;
            const r = Jt(t);
            return n.getItem(r) && JSON.parse(null !== (e = n.getItem(`a${Vt(t)}`)) && void 0 !== e ? e : "{}").lastUpdate > new Date().getTime() - 3e5 ? "up-to-date" : JSON.parse(null !== (a = n.getItem(r)) && void 0 !== a ? a : "{}").lastUpdate < new Date().getTime() - 3e5 ? "outdated" : "non-existent";
          }(t, n),
          o = Jt(t);
        if ("up-to-date" === i && e) return JSON.parse(null !== (r = n.getItem(o)) && void 0 !== r ? r : "{}").value;
        let s;
        try {
          s = await Wt({
            method: "get",
            url: t,
            params: a,
            baseURL: "https://rettungssimulator.online/api/"
          });
        } catch (t) {
          return void console.error(t);
        }
        if (s.status >= 400) throw new Error(`Request failed with statuscode ${s.status}. Message: ${s.data}`);
        return n.setItem(o, JSON.stringify({
          lastUpdate: new Date().getTime(),
          value: s.data
        })), s.data;
      }("user", sessionStorage, !1)).usesDarkMode ? l.href = `${n}/theme/smui-dark.css` : l.href = `${n}/theme/smui.css`, l.rel = "stylesheet", r.appendChild(l);
      const u = document.createElement("link");
      u.href = `${n}/js/svelte/css/settings.css`, u.rel = "stylesheet", r.appendChild(u);
      const d = document.createElement("meta");
      d.setAttribute("charset", "utf-8"), r.appendChild(d);
    },
    fr = function () {
      const t = document.querySelector("#iframe");
      if (null === t) return void e(Object.keys({
        iframe: t
      })[0], "iframe.ts");
      t.remove();
      const n = document.createElement("iframe");
      n.id = "iframe", n.classList.add("panel"), n.setAttribute("data-hj-allow-iframe", "");
      const a = document.querySelector("#mainarea");
      if (null !== a) {
        a.style.overflow = "unset", a.appendChild(n);
        for (const t in frameVisible) frameVisible[t] = !0;
        hidePanels();
      } else e(Object.keys({
        mainarea: a
      })[0], "iframe.ts");
    };
  var lr = {
    prefix: "fab",
    iconName: "square-js",
    icon: [448, 512, ["js-square"], "f3b9", "M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM180.9 444.9c-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1V381.4c0 43.6-25.6 63.5-62.9 63.5zm85.8-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6c-39.1 0-64.4-18.6-76.7-43z"]
  };
  (async () => {
    self.top && RegExp(/^https:\/\/(www.)?rettungssimulator.online(\/#?\??(#[A-Za-z=]*)?)?$/).test(window.location.href) && function () {
      or.add(lr);
      const t = sr(lr),
        n = document.querySelector("#darkMode");
      if (null === n) return void e(Object.keys({
        anchorPoint: n
      })[0], "init.ts");
      const a = document.createElement("li");
      a.id = "scriptManager", a.innerHTML = `Skripte ${t.html}`, n.insertAdjacentHTML("afterend", a.outerHTML);
      const r = document.querySelector("#scriptManager");
      null !== r ? r.addEventListener("click", () => {
        openFrame("", "1/1/4/5");
        const t = document.querySelector("#iframe");
        null !== t && null !== t.contentWindow ? (t.setAttribute("data-source", "scriptManager"), "" !== t.src && "https://rettungssimulator.online/" !== t.src || t.contentWindow.document.querySelector("#scriptManagerSettings") || "scriptManager" !== t.getAttribute("data-source") || t.addEventListener("load", cr)) : e(null === t ? Object.keys({
          frame: t
        })[0] : `${Object.keys({
          frame: t
        })[0]}.contentWindow`, "init.ts");
      }) : e(Object.keys({
        scriptManagerSettingsOpener: r
      })[0], "init.ts");
    }();
  })();
})();
