var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// deno:https://esm.sh/stable/preact@10.15.1/denonext/preact.development.mjs
var n;
var l;
var u;
var i;
var t;
var o;
var r;
var f;
var e;
var c = {};
var s = [];
var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var v = Array.isArray;
function h(n22, l22) {
  for (var u22 in l22)
    n22[u22] = l22[u22];
  return n22;
}
__name(h, "h");
function p(n22) {
  var l22 = n22.parentNode;
  l22 && l22.removeChild(n22);
}
__name(p, "p");
function y(l22, u22, i22) {
  var t22, o22, r22, f22 = {};
  for (r22 in u22)
    "key" == r22 ? t22 = u22[r22] : "ref" == r22 ? o22 = u22[r22] : f22[r22] = u22[r22];
  if (arguments.length > 2 && (f22.children = arguments.length > 3 ? n.call(arguments, 2) : i22), "function" == typeof l22 && null != l22.defaultProps)
    for (r22 in l22.defaultProps)
      void 0 === f22[r22] && (f22[r22] = l22.defaultProps[r22]);
  return d(l22, f22, t22, o22, null);
}
__name(y, "y");
function d(n22, i22, t22, o22, r22) {
  var f22 = { type: n22, props: i22, key: t22, ref: o22, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r22 ? ++u : r22 };
  return null == r22 && null != l.vnode && l.vnode(f22), f22;
}
__name(d, "d");
function k(n22) {
  return n22.children;
}
__name(k, "k");
function b(n22, l22) {
  this.props = n22, this.context = l22;
}
__name(b, "b");
function g(n22, l22) {
  if (null == l22)
    return n22.__ ? g(n22.__, n22.__.__k.indexOf(n22) + 1) : null;
  for (var u22; l22 < n22.__k.length; l22++)
    if (null != (u22 = n22.__k[l22]) && null != u22.__e)
      return u22.__e;
  return "function" == typeof n22.type ? g(n22) : null;
}
__name(g, "g");
function m(n22) {
  var l22, u22;
  if (null != (n22 = n22.__) && null != n22.__c) {
    for (n22.__e = n22.__c.base = null, l22 = 0; l22 < n22.__k.length; l22++)
      if (null != (u22 = n22.__k[l22]) && null != u22.__e) {
        n22.__e = n22.__c.base = u22.__e;
        break;
      }
    return m(n22);
  }
}
__name(m, "m");
function w(n22) {
  (!n22.__d && (n22.__d = true) && t.push(n22) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
}
__name(w, "w");
function x() {
  var n22, l22, u22, i22, o22, r22, e22, c22;
  for (t.sort(f); n22 = t.shift(); )
    n22.__d && (l22 = t.length, i22 = void 0, o22 = void 0, e22 = (r22 = (u22 = n22).__v).__e, (c22 = u22.__P) && (i22 = [], (o22 = h({}, r22)).__v = r22.__v + 1, L(c22, r22, o22, u22.__n, void 0 !== c22.ownerSVGElement, null != r22.__h ? [e22] : null, i22, null == e22 ? g(r22) : e22, r22.__h), M(i22, r22), r22.__e != e22 && m(r22)), t.length > l22 && t.sort(f));
  x.__r = 0;
}
__name(x, "x");
function P(n22, l22, u22, i22, t22, o22, r22, f22, e22, a22) {
  var h22, p22, y22, _22, b22, m22, w22, x2 = i22 && i22.__k || s, P22 = x2.length;
  for (u22.__k = [], h22 = 0; h22 < l22.length; h22++)
    if (null != (_22 = u22.__k[h22] = null == (_22 = l22[h22]) || "boolean" == typeof _22 || "function" == typeof _22 ? null : "string" == typeof _22 || "number" == typeof _22 || "bigint" == typeof _22 ? d(null, _22, null, null, _22) : v(_22) ? d(k, { children: _22 }, null, null, null) : _22.__b > 0 ? d(_22.type, _22.props, _22.key, _22.ref ? _22.ref : null, _22.__v) : _22)) {
      if (_22.__ = u22, _22.__b = u22.__b + 1, null === (y22 = x2[h22]) || y22 && _22.key == y22.key && _22.type === y22.type)
        x2[h22] = void 0;
      else
        for (p22 = 0; p22 < P22; p22++) {
          if ((y22 = x2[p22]) && _22.key == y22.key && _22.type === y22.type) {
            x2[p22] = void 0;
            break;
          }
          y22 = null;
        }
      L(n22, _22, y22 = y22 || c, t22, o22, r22, f22, e22, a22), b22 = _22.__e, (p22 = _22.ref) && y22.ref != p22 && (w22 || (w22 = []), y22.ref && w22.push(y22.ref, null, _22), w22.push(p22, _22.__c || b22, _22)), null != b22 ? (null == m22 && (m22 = b22), "function" == typeof _22.type && _22.__k === y22.__k ? _22.__d = e22 = C(_22, e22, n22) : e22 = $(n22, _22, y22, x2, b22, e22), "function" == typeof u22.type && (u22.__d = e22)) : e22 && y22.__e == e22 && e22.parentNode != n22 && (e22 = g(y22));
    }
  for (u22.__e = m22, h22 = P22; h22--; )
    null != x2[h22] && ("function" == typeof u22.type && null != x2[h22].__e && x2[h22].__e == u22.__d && (u22.__d = A(i22).nextSibling), q(x2[h22], x2[h22]));
  if (w22)
    for (h22 = 0; h22 < w22.length; h22++)
      O(w22[h22], w22[++h22], w22[++h22]);
}
__name(P, "P");
function C(n22, l22, u22) {
  for (var i22, t22 = n22.__k, o22 = 0; t22 && o22 < t22.length; o22++)
    (i22 = t22[o22]) && (i22.__ = n22, l22 = "function" == typeof i22.type ? C(i22, l22, u22) : $(u22, i22, i22, t22, i22.__e, l22));
  return l22;
}
__name(C, "C");
function $(n22, l22, u22, i22, t22, o22) {
  var r22, f22, e22;
  if (void 0 !== l22.__d)
    r22 = l22.__d, l22.__d = void 0;
  else if (null == u22 || t22 != o22 || null == t22.parentNode)
    n:
      if (null == o22 || o22.parentNode !== n22)
        n22.appendChild(t22), r22 = null;
      else {
        for (f22 = o22, e22 = 0; (f22 = f22.nextSibling) && e22 < i22.length; e22 += 1)
          if (f22 == t22)
            break n;
        n22.insertBefore(t22, o22), r22 = o22;
      }
  return void 0 !== r22 ? r22 : t22.nextSibling;
}
__name($, "$");
function A(n22) {
  var l22, u22, i22;
  if (null == n22.type || "string" == typeof n22.type)
    return n22.__e;
  if (n22.__k) {
    for (l22 = n22.__k.length - 1; l22 >= 0; l22--)
      if ((u22 = n22.__k[l22]) && (i22 = A(u22)))
        return i22;
  }
  return null;
}
__name(A, "A");
function H(n22, l22, u22, i22, t22) {
  var o22;
  for (o22 in u22)
    "children" === o22 || "key" === o22 || o22 in l22 || T(n22, o22, null, u22[o22], i22);
  for (o22 in l22)
    t22 && "function" != typeof l22[o22] || "children" === o22 || "key" === o22 || "value" === o22 || "checked" === o22 || u22[o22] === l22[o22] || T(n22, o22, l22[o22], u22[o22], i22);
}
__name(H, "H");
function I(n22, l22, u22) {
  "-" === l22[0] ? n22.setProperty(l22, null == u22 ? "" : u22) : n22[l22] = null == u22 ? "" : "number" != typeof u22 || a.test(l22) ? u22 : u22 + "px";
}
__name(I, "I");
function T(n22, l22, u22, i22, t22) {
  var o22;
  n:
    if ("style" === l22)
      if ("string" == typeof u22)
        n22.style.cssText = u22;
      else {
        if ("string" == typeof i22 && (n22.style.cssText = i22 = ""), i22)
          for (l22 in i22)
            u22 && l22 in u22 || I(n22.style, l22, "");
        if (u22)
          for (l22 in u22)
            i22 && u22[l22] === i22[l22] || I(n22.style, l22, u22[l22]);
      }
    else if ("o" === l22[0] && "n" === l22[1])
      o22 = l22 !== (l22 = l22.replace(/Capture$/, "")), l22 = l22.toLowerCase() in n22 ? l22.toLowerCase().slice(2) : l22.slice(2), n22.l || (n22.l = {}), n22.l[l22 + o22] = u22, u22 ? i22 || n22.addEventListener(l22, o22 ? z : j, o22) : n22.removeEventListener(l22, o22 ? z : j, o22);
    else if ("dangerouslySetInnerHTML" !== l22) {
      if (t22)
        l22 = l22.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l22 && "height" !== l22 && "href" !== l22 && "list" !== l22 && "form" !== l22 && "tabIndex" !== l22 && "download" !== l22 && "rowSpan" !== l22 && "colSpan" !== l22 && l22 in n22)
        try {
          n22[l22] = null == u22 ? "" : u22;
          break n;
        } catch (n3) {
        }
      "function" == typeof u22 || (null == u22 || false === u22 && "-" !== l22[4] ? n22.removeAttribute(l22) : n22.setAttribute(l22, u22));
    }
}
__name(T, "T");
function j(n22) {
  return this.l[n22.type + false](l.event ? l.event(n22) : n22);
}
__name(j, "j");
function z(n22) {
  return this.l[n22.type + true](l.event ? l.event(n22) : n22);
}
__name(z, "z");
function L(n22, u22, i22, t22, o22, r22, f22, e22, c22) {
  var s22, a22, p22, y22, d22, _22, g22, m22, w22, x2, C2, S2, $22, A22, H22, I22 = u22.type;
  if (void 0 !== u22.constructor)
    return null;
  null != i22.__h && (c22 = i22.__h, e22 = u22.__e = i22.__e, u22.__h = null, r22 = [e22]), (s22 = l.__b) && s22(u22);
  try {
    n:
      if ("function" == typeof I22) {
        if (m22 = u22.props, w22 = (s22 = I22.contextType) && t22[s22.__c], x2 = s22 ? w22 ? w22.props.value : s22.__ : t22, i22.__c ? g22 = (a22 = u22.__c = i22.__c).__ = a22.__E : ("prototype" in I22 && I22.prototype.render ? u22.__c = a22 = new I22(m22, x2) : (u22.__c = a22 = new b(m22, x2), a22.constructor = I22, a22.render = B), w22 && w22.sub(a22), a22.props = m22, a22.state || (a22.state = {}), a22.context = x2, a22.__n = t22, p22 = a22.__d = true, a22.__h = [], a22._sb = []), null == a22.__s && (a22.__s = a22.state), null != I22.getDerivedStateFromProps && (a22.__s == a22.state && (a22.__s = h({}, a22.__s)), h(a22.__s, I22.getDerivedStateFromProps(m22, a22.__s))), y22 = a22.props, d22 = a22.state, a22.__v = u22, p22)
          null == I22.getDerivedStateFromProps && null != a22.componentWillMount && a22.componentWillMount(), null != a22.componentDidMount && a22.__h.push(a22.componentDidMount);
        else {
          if (null == I22.getDerivedStateFromProps && m22 !== y22 && null != a22.componentWillReceiveProps && a22.componentWillReceiveProps(m22, x2), !a22.__e && null != a22.shouldComponentUpdate && false === a22.shouldComponentUpdate(m22, a22.__s, x2) || u22.__v === i22.__v) {
            for (u22.__v !== i22.__v && (a22.props = m22, a22.state = a22.__s, a22.__d = false), a22.__e = false, u22.__e = i22.__e, u22.__k = i22.__k, u22.__k.forEach(function(n3) {
              n3 && (n3.__ = u22);
            }), C2 = 0; C2 < a22._sb.length; C2++)
              a22.__h.push(a22._sb[C2]);
            a22._sb = [], a22.__h.length && f22.push(a22);
            break n;
          }
          null != a22.componentWillUpdate && a22.componentWillUpdate(m22, a22.__s, x2), null != a22.componentDidUpdate && a22.__h.push(function() {
            a22.componentDidUpdate(y22, d22, _22);
          });
        }
        if (a22.context = x2, a22.props = m22, a22.__P = n22, S2 = l.__r, $22 = 0, "prototype" in I22 && I22.prototype.render) {
          for (a22.state = a22.__s, a22.__d = false, S2 && S2(u22), s22 = a22.render(a22.props, a22.state, a22.context), A22 = 0; A22 < a22._sb.length; A22++)
            a22.__h.push(a22._sb[A22]);
          a22._sb = [];
        } else
          do {
            a22.__d = false, S2 && S2(u22), s22 = a22.render(a22.props, a22.state, a22.context), a22.state = a22.__s;
          } while (a22.__d && ++$22 < 25);
        a22.state = a22.__s, null != a22.getChildContext && (t22 = h(h({}, t22), a22.getChildContext())), p22 || null == a22.getSnapshotBeforeUpdate || (_22 = a22.getSnapshotBeforeUpdate(y22, d22)), P(n22, v(H22 = null != s22 && s22.type === k && null == s22.key ? s22.props.children : s22) ? H22 : [H22], u22, i22, t22, o22, r22, f22, e22, c22), a22.base = u22.__e, u22.__h = null, a22.__h.length && f22.push(a22), g22 && (a22.__E = a22.__ = null), a22.__e = false;
      } else
        null == r22 && u22.__v === i22.__v ? (u22.__k = i22.__k, u22.__e = i22.__e) : u22.__e = N(i22.__e, u22, i22, t22, o22, r22, f22, c22);
    (s22 = l.diffed) && s22(u22);
  } catch (n3) {
    u22.__v = null, (c22 || null != r22) && (u22.__e = e22, u22.__h = !!c22, r22[r22.indexOf(e22)] = null), l.__e(n3, u22, i22);
  }
}
__name(L, "L");
function M(n22, u22) {
  l.__c && l.__c(u22, n22), n22.some(function(u32) {
    try {
      n22 = u32.__h, u32.__h = [], n22.some(function(n3) {
        n3.call(u32);
      });
    } catch (n3) {
      l.__e(n3, u32.__v);
    }
  });
}
__name(M, "M");
function N(l22, u22, i22, t22, o22, r22, f22, e22) {
  var s22, a22, h22, y22 = i22.props, d22 = u22.props, _22 = u22.type, k22 = 0;
  if ("svg" === _22 && (o22 = true), null != r22) {
    for (; k22 < r22.length; k22++)
      if ((s22 = r22[k22]) && "setAttribute" in s22 == !!_22 && (_22 ? s22.localName === _22 : 3 === s22.nodeType)) {
        l22 = s22, r22[k22] = null;
        break;
      }
  }
  if (null == l22) {
    if (null === _22)
      return document.createTextNode(d22);
    l22 = o22 ? document.createElementNS("http://www.w3.org/2000/svg", _22) : document.createElement(_22, d22.is && d22), r22 = null, e22 = false;
  }
  if (null === _22)
    y22 === d22 || e22 && l22.data === d22 || (l22.data = d22);
  else {
    if (r22 = r22 && n.call(l22.childNodes), a22 = (y22 = i22.props || c).dangerouslySetInnerHTML, h22 = d22.dangerouslySetInnerHTML, !e22) {
      if (null != r22)
        for (y22 = {}, k22 = 0; k22 < l22.attributes.length; k22++)
          y22[l22.attributes[k22].name] = l22.attributes[k22].value;
      (h22 || a22) && (h22 && (a22 && h22.__html == a22.__html || h22.__html === l22.innerHTML) || (l22.innerHTML = h22 && h22.__html || ""));
    }
    if (H(l22, d22, y22, o22, e22), h22)
      u22.__k = [];
    else if (P(l22, v(k22 = u22.props.children) ? k22 : [k22], u22, i22, t22, o22 && "foreignObject" !== _22, r22, f22, r22 ? r22[0] : i22.__k && g(i22, 0), e22), null != r22)
      for (k22 = r22.length; k22--; )
        null != r22[k22] && p(r22[k22]);
    e22 || ("value" in d22 && void 0 !== (k22 = d22.value) && (k22 !== l22.value || "progress" === _22 && !k22 || "option" === _22 && k22 !== y22.value) && T(l22, "value", k22, y22.value, false), "checked" in d22 && void 0 !== (k22 = d22.checked) && k22 !== l22.checked && T(l22, "checked", k22, y22.checked, false));
  }
  return l22;
}
__name(N, "N");
function O(n22, u22, i22) {
  try {
    "function" == typeof n22 ? n22(u22) : n22.current = u22;
  } catch (n3) {
    l.__e(n3, i22);
  }
}
__name(O, "O");
function q(n22, u22, i22) {
  var t22, o22;
  if (l.unmount && l.unmount(n22), (t22 = n22.ref) && (t22.current && t22.current !== n22.__e || O(t22, null, u22)), null != (t22 = n22.__c)) {
    if (t22.componentWillUnmount)
      try {
        t22.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u22);
      }
    t22.base = t22.__P = null, n22.__c = void 0;
  }
  if (t22 = n22.__k)
    for (o22 = 0; o22 < t22.length; o22++)
      t22[o22] && q(t22[o22], u22, i22 || "function" != typeof n22.type);
  i22 || null == n22.__e || p(n22.__e), n22.__ = n22.__e = n22.__d = void 0;
}
__name(q, "q");
function B(n22, l22, u22) {
  return this.constructor(n22, u22);
}
__name(B, "B");
function D(u22, i22, t22) {
  var o22, r22, f22;
  l.__ && l.__(u22, i22), r22 = (o22 = "function" == typeof t22) ? null : t22 && t22.__k || i22.__k, f22 = [], L(i22, u22 = (!o22 && t22 || i22).__k = y(k, null, [u22]), r22 || c, c, void 0 !== i22.ownerSVGElement, !o22 && t22 ? [t22] : r22 ? null : i22.firstChild ? n.call(i22.childNodes) : null, f22, !o22 && t22 ? t22 : r22 ? r22.__e : i22.firstChild, o22), M(f22, u22);
}
__name(D, "D");
n = s.slice, l = { __e: function(n22, l22, u22, i22) {
  for (var t22, o22, r22; l22 = l22.__; )
    if ((t22 = l22.__c) && !t22.__)
      try {
        if ((o22 = t22.constructor) && null != o22.getDerivedStateFromError && (t22.setState(o22.getDerivedStateFromError(n22)), r22 = t22.__d), null != t22.componentDidCatch && (t22.componentDidCatch(n22, i22 || {}), r22 = t22.__d), r22)
          return t22.__E = t22;
      } catch (l32) {
        n22 = l32;
      }
  throw n22;
} }, u = 0, i = /* @__PURE__ */ __name(function(n22) {
  return null != n22 && void 0 === n22.constructor;
}, "i"), b.prototype.setState = function(n22, l22) {
  var u22;
  u22 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n22 && (n22 = n22(h({}, u22), this.props)), n22 && h(u22, n22), null != n22 && this.__v && (l22 && this._sb.push(l22), w(this));
}, b.prototype.forceUpdate = function(n22) {
  this.__v && (this.__e = true, n22 && this.__h.push(n22), w(this));
}, b.prototype.render = k, t = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = /* @__PURE__ */ __name(function(n22, l22) {
  return n22.__v.__b - l22.__v.__b;
}, "f"), x.__r = 0, e = 0;

// yaml:/Users/kuboon/ghq/github.com/kuboon/typing-game/src/_data/problems.yaml
var problems_default = [{ q: "\u57FC\u7389", a: "\u3055\u3044\u305F\u307E" }, { q: "\u795E\u5948\u5DDD", a: "\u304B\u306A\u304C\u308F" }, { q: "\u6771\u4EAC", a: "\u3068\u3046\u304D\u3087\u3046" }, { q: "\u5343\u8449", a: "\u3061\u3070" }];

// deno:https://esm.sh/stable/preact@10.15.1/denonext/hooks.development.js
var t2;
var r2;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = [];
var e2 = l.__b;
var a2 = l.__r;
var v2 = l.diffed;
var l2 = l.__c;
var m2 = l.unmount;
function d2(t22, u22) {
  l.__h && l.__h(r2, t22, o2 || u22), o2 = 0;
  var i22 = r2.__H || (r2.__H = { __: [], __h: [] });
  return t22 >= i22.__.length && i22.__.push({ __V: c2 }), i22.__[t22];
}
__name(d2, "d");
function h2(n22) {
  return o2 = 1, s2(B2, n22);
}
__name(h2, "h");
function s2(n22, u22, i22) {
  var o22 = d2(t2++, 2);
  if (o22.t = n22, !o22.__c && (o22.__ = [i22 ? i22(u22) : B2(void 0, u22), function(n3) {
    var t22 = o22.__N ? o22.__N[0] : o22.__[0], r22 = o22.t(t22, n3);
    t22 !== r22 && (o22.__N = [r22, o22.__[1]], o22.__c.setState({}));
  }], o22.__c = r2, !r2.u)) {
    var f22 = /* @__PURE__ */ __name(function(n3, t22, r22) {
      if (!o22.__c.__H)
        return true;
      var u32 = o22.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      if (u32.every(function(n4) {
        return !n4.__N;
      }))
        return !c22 || c22.call(this, n3, t22, r22);
      var i32 = false;
      return u32.forEach(function(n4) {
        if (n4.__N) {
          var t32 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t32 !== n4.__[0] && (i32 = true);
        }
      }), !(!i32 && o22.__c.props === n3) && (!c22 || c22.call(this, n3, t22, r22));
    }, "f2");
    r2.u = true;
    var c22 = r2.shouldComponentUpdate, e22 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n3, t22, r22) {
      if (this.__e) {
        var u32 = c22;
        c22 = void 0, f22(n3, t22, r22), c22 = u32;
      }
      e22 && e22.call(this, n3, t22, r22);
    }, r2.shouldComponentUpdate = f22;
  }
  return o22.__N || o22.__;
}
__name(s2, "s");
function p2(u22, i22) {
  var o22 = d2(t2++, 3);
  !l.__s && z2(o22.__H, i22) && (o22.__ = u22, o22.i = i22, r2.__H.__h.push(o22));
}
__name(p2, "p");
function F(n22, r22) {
  var u22 = d2(t2++, 7);
  return z2(u22.__H, r22) ? (u22.__V = n22(), u22.i = r22, u22.__h = n22, u22.__V) : u22.__;
}
__name(F, "F");
function b2() {
  for (var t22; t22 = f2.shift(); )
    if (t22.__P && t22.__H)
      try {
        t22.__H.__h.forEach(k2), t22.__H.__h.forEach(w2), t22.__H.__h = [];
      } catch (r22) {
        t22.__H.__h = [], l.__e(r22, t22.__v);
      }
}
__name(b2, "b");
l.__b = function(n22) {
  r2 = null, e2 && e2(n22);
}, l.__r = function(n22) {
  a2 && a2(n22), t2 = 0;
  var i22 = (r2 = n22.__c).__H;
  i22 && (u2 === r2 ? (i22.__h = [], r2.__h = [], i22.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
  })) : (i22.__h.forEach(k2), i22.__h.forEach(w2), i22.__h = [], t2 = 0)), u2 = r2;
}, l.diffed = function(t22) {
  v2 && v2(t22);
  var o22 = t22.__c;
  o22 && o22.__H && (o22.__H.__h.length && (1 !== f2.push(o22) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o22.__H.__.forEach(function(n22) {
    n22.i && (n22.__H = n22.i), n22.__V !== c2 && (n22.__ = n22.__V), n22.i = void 0, n22.__V = c2;
  })), u2 = r2 = null;
}, l.__c = function(t22, r22) {
  r22.some(function(t32) {
    try {
      t32.__h.forEach(k2), t32.__h = t32.__h.filter(function(n22) {
        return !n22.__ || w2(n22);
      });
    } catch (u22) {
      r22.some(function(n22) {
        n22.__h && (n22.__h = []);
      }), r22 = [], l.__e(u22, t32.__v);
    }
  }), l2 && l2(t22, r22);
}, l.unmount = function(t22) {
  m2 && m2(t22);
  var r22, u22 = t22.__c;
  u22 && u22.__H && (u22.__H.__.forEach(function(n22) {
    try {
      k2(n22);
    } catch (n3) {
      r22 = n3;
    }
  }), u22.__H = void 0, r22 && l.__e(r22, u22.__v));
};
var g2 = "function" == typeof requestAnimationFrame;
function j2(n22) {
  var t22, r22 = /* @__PURE__ */ __name(function() {
    clearTimeout(u22), g2 && cancelAnimationFrame(t22), setTimeout(n22);
  }, "r2"), u22 = setTimeout(r22, 100);
  g2 && (t22 = requestAnimationFrame(r22));
}
__name(j2, "j");
function k2(n22) {
  var t22 = r2, u22 = n22.__c;
  "function" == typeof u22 && (n22.__c = void 0, u22()), r2 = t22;
}
__name(k2, "k");
function w2(n22) {
  var t22 = r2;
  n22.__c = n22.__(), r2 = t22;
}
__name(w2, "w");
function z2(n22, t22) {
  return !n22 || n22.length !== t22.length || t22.some(function(t32, r22) {
    return t32 !== n22[r22];
  });
}
__name(z2, "z");
function B2(n22, t22) {
  return "function" == typeof t22 ? t22(n22) : t22;
}
__name(B2, "B");

// yaml:/Users/kuboon/ghq/github.com/kuboon/typing-game/src/_data/romaji.yaml
var romaji_default = { \u30FC: "-", "\u3002": ".", "\u3093\u3002": "n.", \u3042: "a", \u3044: "i", \u3046: "u", \u3048: "e", \u304A: "o", \u304B: "ka", \u304D: "ki", \u304F: "ku", \u3051: "ke", \u3053: "ko", \u3055: "sa", \u3057: ["si", "shi"], \u3059: "su", \u305B: "se", \u305D: "so", \u305F: "ta", \u3061: ["ti", "chi"], \u3064: ["tu", "tsu"], \u3066: "te", \u3068: "to", \u306A: "na", \u306B: "ni", \u306C: "nu", \u306D: "ne", \u306E: "no", \u306F: "ha", \u3072: "hi", \u3075: ["hu", "fu"], \u3078: "he", \u307B: "ho", \u307E: "ma", \u307F: "mi", \u3080: "mu", \u3081: "me", \u3082: "mo", \u3084: "ya", \u3086: "yu", \u3088: "yo", \u3089: "ra", \u308A: "ri", \u308B: "ru", \u308C: "re", \u308D: "ro", \u308F: "wa", \u3092: "wo", \u3093: "nn", \u3041: ["la", "xa"], \u3043: ["li", "xi"], \u3045: ["lu", "xu"], \u3047: ["le", "xe"], \u3049: ["lo", "xo"], \u3063: ["ltu", "xtu"], \u304C: "ga", \u304E: "gi", \u3050: "gu", \u3052: "ge", \u3054: "go", \u3056: "za", \u3058: ["zi", "ji"], \u305A: "zu", \u305C: "ze", \u305E: "zo", \u3060: "da", \u3062: "di", \u3065: "du", \u3067: "de", \u3069: "do", \u3070: "ba", \u3073: "bi", \u3076: "bu", \u3079: "be", \u307C: "bo", \u3071: "pa", \u3074: "pi", \u3077: "pu", \u307A: "pe", \u307D: "po", \u304D\u3083: "kya", \u304D\u3085: "kyu", \u304D\u3047: "kye", \u304D\u3087: "kyo", \u304E\u3083: "gya", \u304E\u3085: "gyu", \u304E\u3047: "gye", \u304E\u3087: "gyo", \u304F\u3041: "qa", \u304F\u3043: "qi", \u304F\u3047: "qe", \u304F\u3049: "qo", \u3057\u3083: ["sha", "sya"], \u3057\u3085: ["shu", "syu"], \u3057\u3047: ["she", "sye"], \u3057\u3087: ["sho", "syo"], \u3058\u3083: "ja", \u3058\u3085: "ju", \u3058\u3047: "je", \u3058\u3087: "jo", \u3061\u3083: ["cha", "cya", "tya"], \u3061\u3085: ["chu", "cyu", "tyu"], \u3061\u3047: ["che", "cye", "tye"], \u3061\u3087: ["cho", "cyo", "tyo"], \u3062\u3083: "dya", \u3062\u3085: "dyu", \u3062\u3047: "dye", \u3062\u3087: "dyo", \u3064\u3041: "tsa", \u3064\u3043: "tsi", \u3064\u3047: "tse", \u3064\u3049: "tso", \u3066\u3083: "tha", \u3066\u3043: "thi", \u3066\u3085: "thu", \u3066\u3047: "the", \u3066\u3087: "tho", \u3067\u3083: "dha", \u3067\u3043: "dhi", \u3067\u3085: "dhu", \u3067\u3047: "dhe", \u3067\u3087: "dho", \u306B\u3083: "nya", \u306B\u3085: "nyu", \u306B\u3047: "nye", \u306B\u3087: "nyo", \u3072\u3083: "hya", \u3072\u3085: "hyu", \u3072\u3047: "hye", \u3072\u3087: "hyo", \u3073\u3083: "bya", \u3073\u3085: "byu", \u3073\u3047: "bye", \u3073\u3087: "byo", \u3074\u3083: "pya", \u3074\u3085: "pyu", \u3074\u3047: "pye", \u3074\u3087: "pyo", \u3075\u3041: "fa", \u3075\u3043: "fi", \u3075\u3047: "fe", \u3075\u3049: "fo", \u307F\u3083: "mya", \u307F\u3085: "myu", \u307F\u3047: "mye", \u307F\u3087: "myo", \u308A\u3083: "rya", \u308A\u3085: "ryu", \u308A\u3047: "rye", \u308A\u3087: "ryo", \u3046\u3041: "wha", \u3046\u3043: "whi", \u3046\u3047: "whe", \u3046\u3049: "who", \u3094\u3041: "va", \u3094\u3043: "vi", \u3094: "vu", \u3094\u3047: "ve", \u3094\u3049: "vo", \u3094\u3083: "vya", \u3094\u3085: "vyu", \u3094\u3087: "vyo", \u3063\u304B: "kka", \u3063\u304D: "kki", \u3063\u304F: "kku", \u3063\u3051: "kke", \u3063\u3053: "kko", \u3063\u3055: "ssa", \u3063\u3057: ["ssi", "sshi"], \u3063\u3059: "ssu", \u3063\u305B: "sse", \u3063\u305D: "sso", \u3063\u305F: "tta", \u3063\u3061: ["tti", "cchi"], \u3063\u3064: ["ttu", "ttsu"], \u3063\u3066: "tte", \u3063\u3068: "tto", \u3063\u306F: "hha", \u3063\u3072: "hhi", \u3063\u3075: "ffu", \u3063\u3078: "hhe", \u3063\u307B: "hho", \u3063\u307E: "mma", \u3063\u307F: "mmi", \u3063\u3080: "mmu", \u3063\u3081: "mme", \u3063\u3082: "mmo", \u3063\u3084: "yya", \u3063\u3086: "yyu", \u3063\u3088: "yyo", \u3063\u3089: "rra", \u3063\u308A: "rri", \u3063\u308B: "rru", \u3063\u308C: "rre", \u3063\u308D: "rro", \u3063\u308F: "wwa", \u3063\u3092: "wwo", \u3063\u304C: "gga", \u3063\u304E: "ggi", \u3063\u3050: "ggu", \u3063\u3052: "gge", \u3063\u3054: "ggo", \u3063\u3056: "zza", \u3063\u3058: ["zzi", "jji"], \u3063\u305A: "zzu", \u3063\u305C: "zze", \u3063\u305E: "zzo", \u3063\u3060: "dda", \u3063\u3062: "ddi", \u3063\u3065: "ddu", \u3063\u3067: "dde", \u3063\u3069: "ddo", \u3063\u3070: "bba", \u3063\u3073: "bbi", \u3063\u3076: "bbu", \u3063\u3079: "bbe", \u3063\u307C: "bbo", \u3063\u3071: "ppa", \u3063\u3074: "ppi", \u3063\u3077: "ppu", \u3063\u307A: "ppe", \u3063\u307D: "ppo", \u3063\u304D\u3083: "kkya", \u3063\u304D\u3085: "kkyu", \u3063\u304D\u3047: "kkye", \u3063\u304D\u3087: "kkyo", \u3063\u304E\u3083: "ggya", \u3063\u304E\u3085: "ggyu", \u3063\u304E\u3047: "ggye", \u3063\u304E\u3087: "ggyo", \u3063\u304F\u3041: "qqa", \u3063\u304F\u3043: "qqi", \u3063\u304F\u3047: "qqe", \u3063\u304F\u3049: "qqo", \u3063\u3057\u3083: ["ssha", "ssya"], \u3063\u3057\u3085: ["sshu", "ssyu"], \u3063\u3057\u3047: ["sshe", "ssye"], \u3063\u3057\u3087: ["ssho", "ssyo"], \u3063\u3058\u3083: "jjya", \u3063\u3058\u3085: "jjyu", \u3063\u3058\u3047: "jjye", \u3063\u3058\u3087: "jjyo", \u3063\u3061\u3083: ["ccha", "ccya", "ttya"], \u3063\u3061\u3085: ["cchu", "ccyu", "ttyu"], \u3063\u3061\u3047: ["cche", "ccye", "ttye"], \u3063\u3061\u3087: ["ccho", "ccyo", "ttyo"], \u3063\u3062\u3083: "ddya", \u3063\u3062\u3085: "ddyu", \u3063\u3062\u3047: "ddye", \u3063\u3062\u3087: "ddyo", \u3063\u3064\u3041: "ttsa", \u3063\u3064\u3043: "ttsi", \u3063\u3064\u3047: "ttse", \u3063\u3064\u3049: "ttso", \u3063\u3066\u3083: "ttya", \u3063\u3066\u3043: "tti", \u3063\u3066\u3085: "ttyu", \u3063\u3066\u3047: "tthe", \u3063\u3066\u3087: "ttyo", \u3063\u3067\u3083: "ddha", \u3063\u3067\u3043: "ddhi", \u3063\u3067\u3085: "ddhu", \u3063\u3067\u3047: "ddhe", \u3063\u3067\u3087: "ddho", \u3063\u3072\u3083: "hhya", \u3063\u3072\u3085: "hhyu", \u3063\u3072\u3047: "hhye", \u3063\u3072\u3087: "hhyo", \u3063\u3073\u3083: "bbya", \u3063\u3073\u3085: "bbyu", \u3063\u3073\u3047: "bbye", \u3063\u3073\u3087: "bbyo", \u3063\u3074\u3083: "ppya", \u3063\u3074\u3085: "ppyu", \u3063\u3074\u3047: "ppye", \u3063\u3074\u3087: "ppyo", \u3063\u3075\u3041: "ffa", \u3063\u3075\u3043: "ffi", \u3063\u3075\u3047: "ffe", \u3063\u3075\u3049: "ffo", \u3063\u307F\u3083: "mmya", \u3063\u307F\u3085: "mmyu", \u3063\u307F\u3047: "mmye", \u3063\u307F\u3087: "mmyo", \u3063\u308A\u3083: "rrya", \u3063\u308A\u3085: "rryu", \u3063\u308A\u3047: "rrye", \u3063\u308A\u3087: "rryo", \u3063\u3094\u3041: "vva", \u3063\u3094\u3043: "vvi", \u3063\u3094: "vvu", \u3063\u3094\u3047: "vve", \u3063\u3094\u3049: "vvo", \u3063\u3094\u3083: "vvyu", \u3063\u3094\u3085: "vvyu", \u3063\u3094\u3087: "vvyo" };

// deno:file:///Users/kuboon/ghq/github.com/kuboon/typing-game/src/_components/_engine.ts
var RomajiYaml = romaji_default;
var KanaRomansDict = {};
var RomansKanaDict = {};
for (const kana in RomajiYaml) {
  const val = RomajiYaml[kana];
  const arr = Array.isArray(val) ? val : [val];
  KanaRomansDict[kana] = arr;
  for (const roman of arr) {
    RomansKanaDict[roman] = kana;
  }
}
var LongestKana = Object.keys(KanaRomansDict).reduce(
  (acc, cur) => acc.length > cur.length ? acc : cur,
  ""
).length;
var LongestRoman = Object.keys(RomansKanaDict).reduce(
  (acc, cur) => acc.length > cur.length ? acc : cur,
  ""
).length;
function firstLongestKanaMatch(kana, input = "") {
  for (let l4 = LongestKana; l4 > 0; l4--) {
    const k4 = kana.slice(0, l4);
    if (k4 in KanaRomansDict) {
      let candidates = KanaRomansDict[k4];
      if (input === "") {
        return { kana: k4, roman: candidates[0], state: "yet" };
      }
      let inputLen = 1;
      while (inputLen <= input.length) {
        const next = candidates.filter(
          (c5) => c5.startsWith(input.slice(0, inputLen++))
        );
        if (next.length === 0) {
          return { kana: k4, roman: candidates[0], state: "ng", input };
        }
        candidates = next;
      }
      return { kana: k4, roman: candidates[0], state: "in", input };
    }
  }
  if (input === "") {
    return { kana: kana[0], roman: kana[0], state: "yet" };
  }
  const correct = kana[0] === input[0];
  return {
    kana: kana[0],
    roman: input[0],
    state: correct ? "ok" : "ng",
    input: input[0]
  };
}
__name(firstLongestKanaMatch, "firstLongestKanaMatch");
function matchInput(roman, kana) {
  if (kana.length === 0)
    return [];
  for (let len = 1; len <= LongestRoman; len++) {
    const r4 = roman.slice(0, len);
    if (r4 in RomansKanaDict) {
      const k4 = RomansKanaDict[r4];
      const correct = kana.startsWith(k4);
      if (correct) {
        return [
          { kana: k4, roman: r4, state: "ok" },
          ...matchInput(roman.slice(len), kana.slice(k4.length))
        ];
      }
    }
  }
  const nextChar = firstLongestKanaMatch(kana, roman);
  return [nextChar, ...kanaToRomanChars(kana.slice(nextChar.kana.length))];
}
__name(matchInput, "matchInput");
function kanaToRomanChars(kana) {
  const result = [];
  while (kana.length > 0) {
    const romanChar = firstLongestKanaMatch(kana);
    if (romanChar) {
      result.push(romanChar);
      kana = kana.slice(romanChar.kana.length);
    } else {
      throw new Error(`No match for ${kana}`);
    }
  }
  return result;
}
__name(kanaToRomanChars, "kanaToRomanChars");
matchInput("wassh", "\u308F\u3063\u3057\u3083\u30FC");

// deno:https://esm.sh/stable/preact@10.15.1/denonext/preact.mjs
var w3;
var d3;
var j3;
var oe;
var b3;
var $2;
var z3;
var H2;
var q2;
var N2 = {};
var J = [];
var re = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var W = Array.isArray;
function k3(e4, t4) {
  for (var _3 in t4)
    e4[_3] = t4[_3];
  return e4;
}
__name(k3, "k");
function K(e4) {
  var t4 = e4.parentNode;
  t4 && t4.removeChild(e4);
}
__name(K, "K");
function S(e4, t4, _3, r4, l4) {
  var o4 = { type: e4, props: t4, key: _3, ref: r4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l4 ?? ++j3 };
  return l4 == null && d3.vnode != null && d3.vnode(o4), o4;
}
__name(S, "S");
function A2(e4) {
  return e4.children;
}
__name(A2, "A");
function T2(e4, t4) {
  this.props = e4, this.context = t4;
}
__name(T2, "T");
function P2(e4, t4) {
  if (t4 == null)
    return e4.__ ? P2(e4.__, e4.__.__k.indexOf(e4) + 1) : null;
  for (var _3; t4 < e4.__k.length; t4++)
    if ((_3 = e4.__k[t4]) != null && _3.__e != null)
      return _3.__e;
  return typeof e4.type == "function" ? P2(e4) : null;
}
__name(P2, "P");
function Q(e4) {
  var t4, _3;
  if ((e4 = e4.__) != null && e4.__c != null) {
    for (e4.__e = e4.__c.base = null, t4 = 0; t4 < e4.__k.length; t4++)
      if ((_3 = e4.__k[t4]) != null && _3.__e != null) {
        e4.__e = e4.__c.base = _3.__e;
        break;
      }
    return Q(e4);
  }
}
__name(Q, "Q");
function I2(e4) {
  (!e4.__d && (e4.__d = true) && b3.push(e4) && !L2.__r++ || $2 !== d3.debounceRendering) && (($2 = d3.debounceRendering) || z3)(L2);
}
__name(I2, "I");
function L2() {
  var e4, t4, _3, r4, l4, o4, s4, u5;
  for (b3.sort(H2); e4 = b3.shift(); )
    e4.__d && (t4 = b3.length, r4 = void 0, l4 = void 0, s4 = (o4 = (_3 = e4).__v).__e, (u5 = _3.__P) && (r4 = [], (l4 = k3({}, o4)).__v = o4.__v + 1, O2(u5, o4, l4, _3.__n, u5.ownerSVGElement !== void 0, o4.__h != null ? [s4] : null, r4, s4 ?? P2(o4), o4.__h), te(r4, o4), o4.__e != s4 && Q(o4)), b3.length > t4 && b3.sort(H2));
  L2.__r = 0;
}
__name(L2, "L");
function X(e4, t4, _3, r4, l4, o4, s4, u5, p5, a5) {
  var n3, h5, c5, i5, f4, x2, v5, y3 = r4 && r4.__k || J, g4 = y3.length;
  for (_3.__k = [], n3 = 0; n3 < t4.length; n3++)
    if ((i5 = _3.__k[n3] = (i5 = t4[n3]) == null || typeof i5 == "boolean" || typeof i5 == "function" ? null : typeof i5 == "string" || typeof i5 == "number" || typeof i5 == "bigint" ? S(null, i5, null, null, i5) : W(i5) ? S(A2, { children: i5 }, null, null, null) : i5.__b > 0 ? S(i5.type, i5.props, i5.key, i5.ref ? i5.ref : null, i5.__v) : i5) != null) {
      if (i5.__ = _3, i5.__b = _3.__b + 1, (c5 = y3[n3]) === null || c5 && i5.key == c5.key && i5.type === c5.type)
        y3[n3] = void 0;
      else
        for (h5 = 0; h5 < g4; h5++) {
          if ((c5 = y3[h5]) && i5.key == c5.key && i5.type === c5.type) {
            y3[h5] = void 0;
            break;
          }
          c5 = null;
        }
      O2(e4, i5, c5 = c5 || N2, l4, o4, s4, u5, p5, a5), f4 = i5.__e, (h5 = i5.ref) && c5.ref != h5 && (v5 || (v5 = []), c5.ref && v5.push(c5.ref, null, i5), v5.push(h5, i5.__c || f4, i5)), f4 != null ? (x2 == null && (x2 = f4), typeof i5.type == "function" && i5.__k === c5.__k ? i5.__d = p5 = Y(i5, p5, e4) : p5 = Z(e4, i5, c5, y3, f4, p5), typeof _3.type == "function" && (_3.__d = p5)) : p5 && c5.__e == p5 && p5.parentNode != e4 && (p5 = P2(c5));
    }
  for (_3.__e = x2, n3 = g4; n3--; )
    y3[n3] != null && (typeof _3.type == "function" && y3[n3].__e != null && y3[n3].__e == _3.__d && (_3.__d = ee(r4).nextSibling), ne(y3[n3], y3[n3]));
  if (v5)
    for (n3 = 0; n3 < v5.length; n3++)
      _e(v5[n3], v5[++n3], v5[++n3]);
}
__name(X, "X");
function Y(e4, t4, _3) {
  for (var r4, l4 = e4.__k, o4 = 0; l4 && o4 < l4.length; o4++)
    (r4 = l4[o4]) && (r4.__ = e4, t4 = typeof r4.type == "function" ? Y(r4, t4, _3) : Z(_3, r4, r4, l4, r4.__e, t4));
  return t4;
}
__name(Y, "Y");
function Z(e4, t4, _3, r4, l4, o4) {
  var s4, u5, p5;
  if (t4.__d !== void 0)
    s4 = t4.__d, t4.__d = void 0;
  else if (_3 == null || l4 != o4 || l4.parentNode == null)
    e:
      if (o4 == null || o4.parentNode !== e4)
        e4.appendChild(l4), s4 = null;
      else {
        for (u5 = o4, p5 = 0; (u5 = u5.nextSibling) && p5 < r4.length; p5 += 1)
          if (u5 == l4)
            break e;
        e4.insertBefore(l4, o4), s4 = o4;
      }
  return s4 !== void 0 ? s4 : l4.nextSibling;
}
__name(Z, "Z");
function ee(e4) {
  var t4, _3, r4;
  if (e4.type == null || typeof e4.type == "string")
    return e4.__e;
  if (e4.__k) {
    for (t4 = e4.__k.length - 1; t4 >= 0; t4--)
      if ((_3 = e4.__k[t4]) && (r4 = ee(_3)))
        return r4;
  }
  return null;
}
__name(ee, "ee");
function se(e4, t4, _3, r4, l4) {
  var o4;
  for (o4 in _3)
    o4 === "children" || o4 === "key" || o4 in t4 || M2(e4, o4, null, _3[o4], r4);
  for (o4 in t4)
    l4 && typeof t4[o4] != "function" || o4 === "children" || o4 === "key" || o4 === "value" || o4 === "checked" || _3[o4] === t4[o4] || M2(e4, o4, t4[o4], _3[o4], r4);
}
__name(se, "se");
function B3(e4, t4, _3) {
  t4[0] === "-" ? e4.setProperty(t4, _3 ?? "") : e4[t4] = _3 == null ? "" : typeof _3 != "number" || re.test(t4) ? _3 : _3 + "px";
}
__name(B3, "B");
function M2(e4, t4, _3, r4, l4) {
  var o4;
  e:
    if (t4 === "style")
      if (typeof _3 == "string")
        e4.style.cssText = _3;
      else {
        if (typeof r4 == "string" && (e4.style.cssText = r4 = ""), r4)
          for (t4 in r4)
            _3 && t4 in _3 || B3(e4.style, t4, "");
        if (_3)
          for (t4 in _3)
            r4 && _3[t4] === r4[t4] || B3(e4.style, t4, _3[t4]);
      }
    else if (t4[0] === "o" && t4[1] === "n")
      o4 = t4 !== (t4 = t4.replace(/Capture$/, "")), t4 = t4.toLowerCase() in e4 ? t4.toLowerCase().slice(2) : t4.slice(2), e4.l || (e4.l = {}), e4.l[t4 + o4] = _3, _3 ? r4 || e4.addEventListener(t4, o4 ? V : G, o4) : e4.removeEventListener(t4, o4 ? V : G, o4);
    else if (t4 !== "dangerouslySetInnerHTML") {
      if (l4)
        t4 = t4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t4 !== "width" && t4 !== "height" && t4 !== "href" && t4 !== "list" && t4 !== "form" && t4 !== "tabIndex" && t4 !== "download" && t4 !== "rowSpan" && t4 !== "colSpan" && t4 in e4)
        try {
          e4[t4] = _3 ?? "";
          break e;
        } catch {
        }
      typeof _3 == "function" || (_3 == null || _3 === false && t4[4] !== "-" ? e4.removeAttribute(t4) : e4.setAttribute(t4, _3));
    }
}
__name(M2, "M");
function G(e4) {
  return this.l[e4.type + false](d3.event ? d3.event(e4) : e4);
}
__name(G, "G");
function V(e4) {
  return this.l[e4.type + true](d3.event ? d3.event(e4) : e4);
}
__name(V, "V");
function O2(e4, t4, _3, r4, l4, o4, s4, u5, p5) {
  var a5, n3, h5, c5, i5, f4, x2, v5, y3, g4, E, C2, R, U, F2, m3 = t4.type;
  if (t4.constructor !== void 0)
    return null;
  _3.__h != null && (p5 = _3.__h, u5 = t4.__e = _3.__e, t4.__h = null, o4 = [u5]), (a5 = d3.__b) && a5(t4);
  try {
    e:
      if (typeof m3 == "function") {
        if (v5 = t4.props, y3 = (a5 = m3.contextType) && r4[a5.__c], g4 = a5 ? y3 ? y3.props.value : a5.__ : r4, _3.__c ? x2 = (n3 = t4.__c = _3.__c).__ = n3.__E : ("prototype" in m3 && m3.prototype.render ? t4.__c = n3 = new m3(v5, g4) : (t4.__c = n3 = new T2(v5, g4), n3.constructor = m3, n3.render = ce), y3 && y3.sub(n3), n3.props = v5, n3.state || (n3.state = {}), n3.context = g4, n3.__n = r4, h5 = n3.__d = true, n3.__h = [], n3._sb = []), n3.__s == null && (n3.__s = n3.state), m3.getDerivedStateFromProps != null && (n3.__s == n3.state && (n3.__s = k3({}, n3.__s)), k3(n3.__s, m3.getDerivedStateFromProps(v5, n3.__s))), c5 = n3.props, i5 = n3.state, n3.__v = t4, h5)
          m3.getDerivedStateFromProps == null && n3.componentWillMount != null && n3.componentWillMount(), n3.componentDidMount != null && n3.__h.push(n3.componentDidMount);
        else {
          if (m3.getDerivedStateFromProps == null && v5 !== c5 && n3.componentWillReceiveProps != null && n3.componentWillReceiveProps(v5, g4), !n3.__e && n3.shouldComponentUpdate != null && n3.shouldComponentUpdate(v5, n3.__s, g4) === false || t4.__v === _3.__v) {
            for (t4.__v !== _3.__v && (n3.props = v5, n3.state = n3.__s, n3.__d = false), n3.__e = false, t4.__e = _3.__e, t4.__k = _3.__k, t4.__k.forEach(function(D2) {
              D2 && (D2.__ = t4);
            }), E = 0; E < n3._sb.length; E++)
              n3.__h.push(n3._sb[E]);
            n3._sb = [], n3.__h.length && s4.push(n3);
            break e;
          }
          n3.componentWillUpdate != null && n3.componentWillUpdate(v5, n3.__s, g4), n3.componentDidUpdate != null && n3.__h.push(function() {
            n3.componentDidUpdate(c5, i5, f4);
          });
        }
        if (n3.context = g4, n3.props = v5, n3.__P = e4, C2 = d3.__r, R = 0, "prototype" in m3 && m3.prototype.render) {
          for (n3.state = n3.__s, n3.__d = false, C2 && C2(t4), a5 = n3.render(n3.props, n3.state, n3.context), U = 0; U < n3._sb.length; U++)
            n3.__h.push(n3._sb[U]);
          n3._sb = [];
        } else
          do
            n3.__d = false, C2 && C2(t4), a5 = n3.render(n3.props, n3.state, n3.context), n3.state = n3.__s;
          while (n3.__d && ++R < 25);
        n3.state = n3.__s, n3.getChildContext != null && (r4 = k3(k3({}, r4), n3.getChildContext())), h5 || n3.getSnapshotBeforeUpdate == null || (f4 = n3.getSnapshotBeforeUpdate(c5, i5)), X(e4, W(F2 = a5 != null && a5.type === A2 && a5.key == null ? a5.props.children : a5) ? F2 : [F2], t4, _3, r4, l4, o4, s4, u5, p5), n3.base = t4.__e, t4.__h = null, n3.__h.length && s4.push(n3), x2 && (n3.__E = n3.__ = null), n3.__e = false;
      } else
        o4 == null && t4.__v === _3.__v ? (t4.__k = _3.__k, t4.__e = _3.__e) : t4.__e = ue(_3.__e, t4, _3, r4, l4, o4, s4, p5);
    (a5 = d3.diffed) && a5(t4);
  } catch (D2) {
    t4.__v = null, (p5 || o4 != null) && (t4.__e = u5, t4.__h = !!p5, o4[o4.indexOf(u5)] = null), d3.__e(D2, t4, _3);
  }
}
__name(O2, "O");
function te(e4, t4) {
  d3.__c && d3.__c(t4, e4), e4.some(function(_3) {
    try {
      e4 = _3.__h, _3.__h = [], e4.some(function(r4) {
        r4.call(_3);
      });
    } catch (r4) {
      d3.__e(r4, _3.__v);
    }
  });
}
__name(te, "te");
function ue(e4, t4, _3, r4, l4, o4, s4, u5) {
  var p5, a5, n3, h5 = _3.props, c5 = t4.props, i5 = t4.type, f4 = 0;
  if (i5 === "svg" && (l4 = true), o4 != null) {
    for (; f4 < o4.length; f4++)
      if ((p5 = o4[f4]) && "setAttribute" in p5 == !!i5 && (i5 ? p5.localName === i5 : p5.nodeType === 3)) {
        e4 = p5, o4[f4] = null;
        break;
      }
  }
  if (e4 == null) {
    if (i5 === null)
      return document.createTextNode(c5);
    e4 = l4 ? document.createElementNS("http://www.w3.org/2000/svg", i5) : document.createElement(i5, c5.is && c5), o4 = null, u5 = false;
  }
  if (i5 === null)
    h5 === c5 || u5 && e4.data === c5 || (e4.data = c5);
  else {
    if (o4 = o4 && w3.call(e4.childNodes), a5 = (h5 = _3.props || N2).dangerouslySetInnerHTML, n3 = c5.dangerouslySetInnerHTML, !u5) {
      if (o4 != null)
        for (h5 = {}, f4 = 0; f4 < e4.attributes.length; f4++)
          h5[e4.attributes[f4].name] = e4.attributes[f4].value;
      (n3 || a5) && (n3 && (a5 && n3.__html == a5.__html || n3.__html === e4.innerHTML) || (e4.innerHTML = n3 && n3.__html || ""));
    }
    if (se(e4, c5, h5, l4, u5), n3)
      t4.__k = [];
    else if (X(e4, W(f4 = t4.props.children) ? f4 : [f4], t4, _3, r4, l4 && i5 !== "foreignObject", o4, s4, o4 ? o4[0] : _3.__k && P2(_3, 0), u5), o4 != null)
      for (f4 = o4.length; f4--; )
        o4[f4] != null && K(o4[f4]);
    u5 || ("value" in c5 && (f4 = c5.value) !== void 0 && (f4 !== e4.value || i5 === "progress" && !f4 || i5 === "option" && f4 !== h5.value) && M2(e4, "value", f4, h5.value, false), "checked" in c5 && (f4 = c5.checked) !== void 0 && f4 !== e4.checked && M2(e4, "checked", f4, h5.checked, false));
  }
  return e4;
}
__name(ue, "ue");
function _e(e4, t4, _3) {
  try {
    typeof e4 == "function" ? e4(t4) : e4.current = t4;
  } catch (r4) {
    d3.__e(r4, _3);
  }
}
__name(_e, "_e");
function ne(e4, t4, _3) {
  var r4, l4;
  if (d3.unmount && d3.unmount(e4), (r4 = e4.ref) && (r4.current && r4.current !== e4.__e || _e(r4, null, t4)), (r4 = e4.__c) != null) {
    if (r4.componentWillUnmount)
      try {
        r4.componentWillUnmount();
      } catch (o4) {
        d3.__e(o4, t4);
      }
    r4.base = r4.__P = null, e4.__c = void 0;
  }
  if (r4 = e4.__k)
    for (l4 = 0; l4 < r4.length; l4++)
      r4[l4] && ne(r4[l4], t4, _3 || typeof e4.type != "function");
  _3 || e4.__e == null || K(e4.__e), e4.__ = e4.__e = e4.__d = void 0;
}
__name(ne, "ne");
function ce(e4, t4, _3) {
  return this.constructor(e4, _3);
}
__name(ce, "ce");
w3 = J.slice, d3 = { __e: function(e4, t4, _3, r4) {
  for (var l4, o4, s4; t4 = t4.__; )
    if ((l4 = t4.__c) && !l4.__)
      try {
        if ((o4 = l4.constructor) && o4.getDerivedStateFromError != null && (l4.setState(o4.getDerivedStateFromError(e4)), s4 = l4.__d), l4.componentDidCatch != null && (l4.componentDidCatch(e4, r4 || {}), s4 = l4.__d), s4)
          return l4.__E = l4;
      } catch (u5) {
        e4 = u5;
      }
  throw e4;
} }, j3 = 0, oe = /* @__PURE__ */ __name(function(e4) {
  return e4 != null && e4.constructor === void 0;
}, "oe"), T2.prototype.setState = function(e4, t4) {
  var _3;
  _3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k3({}, this.state), typeof e4 == "function" && (e4 = e4(k3({}, _3), this.props)), e4 && k3(_3, e4), e4 != null && this.__v && (t4 && this._sb.push(t4), I2(this));
}, T2.prototype.forceUpdate = function(e4) {
  this.__v && (this.__e = true, e4 && this.__h.push(e4), I2(this));
}, T2.prototype.render = A2, b3 = [], z3 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, H2 = /* @__PURE__ */ __name(function(e4, t4) {
  return e4.__v.__b - t4.__v.__b;
}, "H"), L2.__r = 0, q2 = 0;

// deno:https://esm.sh/stable/preact@10.15.1/denonext/jsx-runtime.js
var i3 = 0;
function v3(n3, s4, f4, a5, l4, u5) {
  var r4, o4, _3 = {};
  for (o4 in s4)
    o4 == "ref" ? r4 = s4[o4] : _3[o4] = s4[o4];
  var t4 = { type: n3, props: _3, key: f4, ref: r4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --i3, __source: l4, __self: u5 };
  if (typeof n3 == "function" && (r4 = n3.defaultProps))
    for (o4 in r4)
      _3[o4] === void 0 && (_3[o4] = r4[o4]);
  return d3.vnode && d3.vnode(t4), t4;
}
__name(v3, "v");

// deno:file:///Users/kuboon/ghq/github.com/kuboon/typing-game/src/_components/RomajiField.tsx
function RomajiField({ answer, complete }) {
  const [input, setInput] = h2("");
  p2(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const handleKeyDown = /* @__PURE__ */ __name((event) => {
    if (event.code === "Backspace") {
      setInput((x2) => x2.slice(0, -1));
      return;
    }
    if ("abcdefghijklmnopqrstuvwxyz".includes(event.key)) {
      setInput((x2) => x2 + event.key);
    }
  }, "handleKeyDown");
  const match = matchInput(input, answer);
  if (match.every((x2) => x2.state === "ok")) {
    setInput("");
    complete();
  }
  return /* @__PURE__ */ v3("div", { class: "answer", children: match.map(({ kana, roman, state, input: input2 }) => /* @__PURE__ */ v3("ruby", { class: state, children: [
    kana,
    /* @__PURE__ */ v3("rt", { children: input2 || roman })
  ] })) });
}
__name(RomajiField, "RomajiField");

// deno:https://esm.sh/v128/@preact/signals-core@1.3.1/denonext/signals-core.development.mjs
function i4() {
  throw new Error("Cycle detected");
}
__name(i4, "i");
function t3() {
  if (h3 > 1) {
    h3--;
    return;
  }
  let i22, t22 = false;
  while (void 0 !== s3) {
    let n22 = s3;
    s3 = void 0;
    f3++;
    while (void 0 !== n22) {
      const o22 = n22.o;
      n22.o = void 0;
      n22.f &= -3;
      if (!(8 & n22.f) && d4(n22))
        try {
          n22.c();
        } catch (n3) {
          if (!t22) {
            i22 = n3;
            t22 = true;
          }
        }
      n22 = o22;
    }
  }
  f3 = 0;
  h3--;
  if (t22)
    throw i22;
}
__name(t3, "t");
var o3;
var s3;
var h3 = 0;
var f3 = 0;
var r3 = 0;
function e3(i22) {
  if (void 0 === o3)
    return;
  let t22 = i22.n;
  if (void 0 === t22 || t22.t !== o3) {
    t22 = { i: 0, S: i22, p: o3.s, n: void 0, t: o3, e: void 0, x: void 0, r: t22 };
    if (void 0 !== o3.s)
      o3.s.n = t22;
    o3.s = t22;
    i22.n = t22;
    if (32 & o3.f)
      i22.S(t22);
    return t22;
  } else if (-1 === t22.i) {
    t22.i = 0;
    if (void 0 !== t22.n) {
      t22.n.p = t22.p;
      if (void 0 !== t22.p)
        t22.p.n = t22.n;
      t22.p = o3.s;
      t22.n = void 0;
      o3.s.n = t22;
      o3.s = t22;
    }
    return t22;
  }
}
__name(e3, "e");
function c3(i22) {
  this.v = i22;
  this.i = 0;
  this.n = void 0;
  this.t = void 0;
}
__name(c3, "c");
c3.prototype.h = function() {
  return true;
};
c3.prototype.S = function(i22) {
  if (this.t !== i22 && void 0 === i22.e) {
    i22.x = this.t;
    if (void 0 !== this.t)
      this.t.e = i22;
    this.t = i22;
  }
};
c3.prototype.U = function(i22) {
  if (void 0 !== this.t) {
    const t22 = i22.e, n22 = i22.x;
    if (void 0 !== t22) {
      t22.x = n22;
      i22.e = void 0;
    }
    if (void 0 !== n22) {
      n22.e = t22;
      i22.x = void 0;
    }
    if (i22 === this.t)
      this.t = n22;
  }
};
c3.prototype.subscribe = function(i22) {
  const t22 = this;
  return b4(function() {
    const n22 = t22.value, o22 = 32 & this.f;
    this.f &= -33;
    try {
      i22(n22);
    } finally {
      this.f |= o22;
    }
  });
};
c3.prototype.valueOf = function() {
  return this.value;
};
c3.prototype.toString = function() {
  return this.value + "";
};
c3.prototype.toJSON = function() {
  return this.value;
};
c3.prototype.peek = function() {
  return this.v;
};
Object.defineProperty(c3.prototype, "value", { get() {
  const i22 = e3(this);
  if (void 0 !== i22)
    i22.i = this.i;
  return this.v;
}, set(n22) {
  if (o3 instanceof a3)
    !function() {
      throw new Error("Computed cannot have side-effects");
    }();
  if (n22 !== this.v) {
    if (f3 > 100)
      i4();
    this.v = n22;
    this.i++;
    r3++;
    h3++;
    try {
      for (let i22 = this.t; void 0 !== i22; i22 = i22.x)
        i22.t.N();
    } finally {
      t3();
    }
  }
} });
function u3(i22) {
  return new c3(i22);
}
__name(u3, "u");
function d4(i22) {
  for (let t22 = i22.s; void 0 !== t22; t22 = t22.n)
    if (t22.S.i !== t22.i || !t22.S.h() || t22.S.i !== t22.i)
      return true;
  return false;
}
__name(d4, "d");
function v4(i22) {
  for (let t22 = i22.s; void 0 !== t22; t22 = t22.n) {
    const n22 = t22.S.n;
    if (void 0 !== n22)
      t22.r = n22;
    t22.S.n = t22;
    t22.i = -1;
    if (void 0 === t22.n) {
      i22.s = t22;
      break;
    }
  }
}
__name(v4, "v");
function l3(i22) {
  let t22, n22 = i22.s;
  while (void 0 !== n22) {
    const i32 = n22.p;
    if (-1 === n22.i) {
      n22.S.U(n22);
      if (void 0 !== i32)
        i32.n = n22.n;
      if (void 0 !== n22.n)
        n22.n.p = i32;
    } else
      t22 = n22;
    n22.S.n = n22.r;
    if (void 0 !== n22.r)
      n22.r = void 0;
    n22 = i32;
  }
  i22.s = t22;
}
__name(l3, "l");
function a3(i22) {
  c3.call(this, void 0);
  this.x = i22;
  this.s = void 0;
  this.g = r3 - 1;
  this.f = 4;
}
__name(a3, "a");
(a3.prototype = new c3()).h = function() {
  this.f &= -3;
  if (1 & this.f)
    return false;
  if (32 == (36 & this.f))
    return true;
  this.f &= -5;
  if (this.g === r3)
    return true;
  this.g = r3;
  this.f |= 1;
  if (this.i > 0 && !d4(this)) {
    this.f &= -2;
    return true;
  }
  const i22 = o3;
  try {
    v4(this);
    o3 = this;
    const i32 = this.x();
    if (16 & this.f || this.v !== i32 || 0 === this.i) {
      this.v = i32;
      this.f &= -17;
      this.i++;
    }
  } catch (i32) {
    this.v = i32;
    this.f |= 16;
    this.i++;
  }
  o3 = i22;
  l3(this);
  this.f &= -2;
  return true;
};
a3.prototype.S = function(i22) {
  if (void 0 === this.t) {
    this.f |= 36;
    for (let i32 = this.s; void 0 !== i32; i32 = i32.n)
      i32.S.S(i32);
  }
  c3.prototype.S.call(this, i22);
};
a3.prototype.U = function(i22) {
  if (void 0 !== this.t) {
    c3.prototype.U.call(this, i22);
    if (void 0 === this.t) {
      this.f &= -33;
      for (let i32 = this.s; void 0 !== i32; i32 = i32.n)
        i32.S.U(i32);
    }
  }
};
a3.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (let i22 = this.t; void 0 !== i22; i22 = i22.x)
      i22.t.N();
  }
};
a3.prototype.peek = function() {
  if (!this.h())
    i4();
  if (16 & this.f)
    throw this.v;
  return this.v;
};
Object.defineProperty(a3.prototype, "value", { get() {
  if (1 & this.f)
    i4();
  const t22 = e3(this);
  this.h();
  if (void 0 !== t22)
    t22.i = this.i;
  if (16 & this.f)
    throw this.v;
  return this.v;
} });
function w4(i22) {
  return new a3(i22);
}
__name(w4, "w");
function y2(i22) {
  const n22 = i22.u;
  i22.u = void 0;
  if ("function" == typeof n22) {
    h3++;
    const s22 = o3;
    o3 = void 0;
    try {
      n22();
    } catch (t22) {
      i22.f &= -2;
      i22.f |= 8;
      _(i22);
      throw t22;
    } finally {
      o3 = s22;
      t3();
    }
  }
}
__name(y2, "y");
function _(i22) {
  for (let t22 = i22.s; void 0 !== t22; t22 = t22.n)
    t22.S.U(t22);
  i22.x = void 0;
  i22.s = void 0;
  y2(i22);
}
__name(_, "_");
function p3(i22) {
  if (o3 !== this)
    throw new Error("Out-of-order effect");
  l3(this);
  o3 = i22;
  this.f &= -2;
  if (8 & this.f)
    _(this);
  t3();
}
__name(p3, "p");
function g3(i22) {
  this.x = i22;
  this.u = void 0;
  this.s = void 0;
  this.o = void 0;
  this.f = 32;
}
__name(g3, "g");
g3.prototype.c = function() {
  const i22 = this.S();
  try {
    if (8 & this.f)
      return;
    if (void 0 === this.x)
      return;
    const t22 = this.x();
    if ("function" == typeof t22)
      this.u = t22;
  } finally {
    i22();
  }
};
g3.prototype.S = function() {
  if (1 & this.f)
    i4();
  this.f |= 1;
  this.f &= -9;
  y2(this);
  v4(this);
  h3++;
  const t22 = o3;
  o3 = this;
  return p3.bind(this, t22);
};
g3.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 2;
    this.o = s3;
    s3 = this;
  }
};
g3.prototype.d = function() {
  this.f |= 8;
  if (!(1 & this.f))
    _(this);
};
function b4(i22) {
  const t22 = new g3(i22);
  try {
    t22.c();
  } catch (i32) {
    t22.d();
    throw i32;
  }
  return t22.d.bind(t22);
}
__name(b4, "b");

// deno:https://esm.sh/v128/@preact/signals@1.1.4/denonext/signals.development.mjs
function c4(t22, e22) {
  l[t22] = e22.bind(null, l[t22] || (() => {
  }));
}
__name(c4, "c");
var u4;
var a4;
function d5(t22) {
  if (a4)
    a4();
  a4 = t22 && t22.S();
}
__name(d5, "d");
function p4({ data: t22 }) {
  const i22 = useSignal(t22);
  i22.value = t22;
  const n22 = F(() => {
    let t32 = this.__v;
    while (t32 = t32.__)
      if (t32.__c) {
        t32.__c.__$f |= 4;
        break;
      }
    this.__$u.c = () => {
      this.base.data = n22.peek();
    };
    return w4(() => {
      let t4 = i22.value.value;
      return 0 === t4 ? 0 : true === t4 ? "" : t4 || "";
    });
  }, []);
  return n22.value;
}
__name(p4, "p");
p4.displayName = "_st";
Object.defineProperties(c3.prototype, { constructor: { configurable: true, value: void 0 }, type: { configurable: true, value: p4 }, props: { configurable: true, get() {
  return { data: this };
} }, __b: { configurable: true, value: 1 } });
c4("__b", (t22, i22) => {
  if ("string" == typeof i22.type) {
    let t32, e22 = i22.props;
    for (let n22 in e22) {
      if ("children" === n22)
        continue;
      let o22 = e22[n22];
      if (o22 instanceof c3) {
        if (!t32)
          i22.__np = t32 = {};
        t32[n22] = o22;
        e22[n22] = o22.peek();
      }
    }
  }
  t22(i22);
});
c4("__r", (t22, i22) => {
  d5();
  let e22, n22 = i22.__c;
  if (n22) {
    n22.__$f &= -2;
    e22 = n22.__$u;
    if (void 0 === e22)
      n22.__$u = e22 = function(t32) {
        let i32;
        b4(function() {
          i32 = this;
        });
        i32.c = () => {
          n22.__$f |= 1;
          n22.setState({});
        };
        return i32;
      }();
  }
  u4 = n22;
  d5(e22);
  t22(i22);
});
c4("__e", (t22, i22, e22, n22) => {
  d5();
  u4 = void 0;
  t22(i22, e22, n22);
});
c4("diffed", (t22, i22) => {
  d5();
  u4 = void 0;
  let e22;
  if ("string" == typeof i22.type && (e22 = i22.__e)) {
    let t32 = i22.__np, n22 = i22.props;
    if (t32) {
      let i32 = e22.U;
      if (i32)
        for (let e32 in i32) {
          let n3 = i32[e32];
          if (void 0 !== n3 && !(e32 in t32)) {
            n3.d();
            i32[e32] = void 0;
          }
        }
      else {
        i32 = {};
        e22.U = i32;
      }
      for (let o22 in t32) {
        let r22 = i32[o22], f22 = t32[o22];
        if (void 0 === r22) {
          r22 = h4(e22, o22, f22, n22);
          i32[o22] = r22;
        } else
          r22.o(f22, n22);
      }
    }
  }
  t22(i22);
});
function h4(t22, i22, e22, n22) {
  const o22 = i22 in t22 && void 0 === t22.ownerSVGElement, r22 = u3(e22);
  return { o: (t32, i32) => {
    r22.value = t32;
    n22 = i32;
  }, d: b4(() => {
    const e32 = r22.value.value;
    if (n22[i22] !== e32) {
      n22[i22] = e32;
      if (o22)
        t22[i22] = e32;
      else if (e32)
        t22.setAttribute(i22, e32);
      else
        t22.removeAttribute(i22);
    }
  }) };
}
__name(h4, "h");
c4("unmount", (t22, i22) => {
  if ("string" == typeof i22.type) {
    let t32 = i22.__e;
    if (t32) {
      const i32 = t32.U;
      if (i32) {
        t32.U = void 0;
        for (let t4 in i32) {
          let e22 = i32[t4];
          if (e22)
            e22.d();
        }
      }
    }
  } else {
    let t32 = i22.__c;
    if (t32) {
      const i32 = t32.__$u;
      if (i32) {
        t32.__$u = void 0;
        i32.d();
      }
    }
  }
  t22(i22);
});
c4("__h", (t22, i22, e22, n22) => {
  if (n22 < 3)
    i22.__$f |= 2;
  t22(i22, e22, n22);
});
b.prototype.shouldComponentUpdate = function(t22, i22) {
  const e22 = this.__$u;
  if (!(e22 && void 0 !== e22.s || 4 & this.__$f))
    return true;
  if (3 & this.__$f)
    return true;
  for (let t32 in i22)
    return true;
  for (let i32 in t22)
    if ("__source" !== i32 && t22[i32] !== this.props[i32])
      return true;
  for (let i32 in this.props)
    if (!(i32 in t22))
      return true;
  return false;
};
function useSignal(t22) {
  return F(() => u3(t22), []);
}
__name(useSignal, "useSignal");

// deno:file:///Users/kuboon/ghq/github.com/kuboon/typing-game/src/_components/GameMain.tsx
function parseCsv(text) {
  return text.split("\n").map((x2) => {
    const y3 = x2.split(",");
    return { q: y3[0], a: y3[1].trim() };
  });
}
__name(parseCsv, "parseCsv");
function GameMain() {
  const problems = useSignal(problems_default);
  const hash = location.hash.slice(1);
  fetch(hash).then((x2) => x2.text()).then(parseCsv).then(
    (x2) => problems.value = x2
  );
  const currentNum = useSignal(0);
  const complete = /* @__PURE__ */ __name(() => {
    currentNum.value = (currentNum.value + 1) % problems.value.length;
  }, "complete");
  const current = problems.value[currentNum.value];
  return /* @__PURE__ */ v3("div", { class: "GameMain", children: /* @__PURE__ */ v3("div", { class: "current", children: [
    /* @__PURE__ */ v3("div", { class: "question", children: current.q }),
    /* @__PURE__ */ v3(RomajiField, { answer: current.a, complete })
  ] }) });
}
__name(GameMain, "GameMain");

// yaml:/Users/kuboon/ghq/github.com/kuboon/typing-game/src/_data/keyboards.yaml
var keyboards_default = { qwerty: ["1234567890-\\", "qwertyuiop ", "asdfghjkl ", "zxcvbnm,."] };

// deno:file:///Users/kuboon/ghq/github.com/kuboon/typing-game/src/_components/Keyboard.tsx
function HalfCols({ count }) {
  return /* @__PURE__ */ v3(A2, { children: Array(count).fill(0).map(() => {
    return /* @__PURE__ */ v3("div", { class: "half" });
  }) });
}
__name(HalfCols, "HalfCols");
function Keyboard() {
  return /* @__PURE__ */ v3("div", { class: "keyboard", children: keyboards_default["qwerty"].map((row, i5) => {
    return /* @__PURE__ */ v3("div", { class: "row", children: [
      /* @__PURE__ */ v3(HalfCols, { count: i5 }),
      row.split("").map((key) => {
        if (key == " ")
          return /* @__PURE__ */ v3("div", { class: "key" });
        if (key == "\\") {
          return /* @__PURE__ */ v3("div", { class: "key", id: "Backspace", children: "\u3051\u3059" });
        }
        return /* @__PURE__ */ v3("div", { class: "key", id: `key-${key}`, children: key });
      }),
      /* @__PURE__ */ v3(HalfCols, { count: i5 })
    ] });
  }) });
}
__name(Keyboard, "Keyboard");
document.addEventListener("keydown", (e4) => {
  const key = document.getElementById(`key-${e4.key}`);
  if (key) {
    key.classList.add("active");
  }
});
document.addEventListener("keyup", (e4) => {
  const key = document.getElementById(`key-${e4.key}`);
  if (key) {
    key.classList.remove("active");
  }
});
document.addEventListener("click", (e4) => {
  const target = e4.target;
  if (target.classList.contains("key")) {
    const key = target.innerText;
    const event = key == "\u3051\u3059" ? { code: "Backspace" } : { key };
    document.dispatchEvent(new KeyboardEvent("keydown", event));
    setTimeout(
      () => document.dispatchEvent(new KeyboardEvent("keyup", event)),
      200
    );
  }
});

// deno:file:///Users/kuboon/ghq/github.com/kuboon/typing-game/src/main.tsx
var App = /* @__PURE__ */ __name(() => /* @__PURE__ */ v3(A2, { children: [
  /* @__PURE__ */ v3(GameMain, {}),
  /* @__PURE__ */ v3("details", { open: true, children: [
    /* @__PURE__ */ v3("summary", { children: "\u30AD\u30FC\u30DC\u30FC\u30C9" }),
    /* @__PURE__ */ v3(Keyboard, {})
  ] })
] }), "App");
if ("document" in window) {
  D(/* @__PURE__ */ v3(App, {}), document.getElementById("main"));
}
