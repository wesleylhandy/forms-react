parcelRequire = (function(e) {
	var r = "function" == typeof parcelRequire && parcelRequire,
		n = "function" == typeof require && require,
		i = {};
	function u(e, u) {
		if (e in i) return i[e];
		var t = "function" == typeof parcelRequire && parcelRequire;
		if (!u && t) return t(e, !0);
		if (r) return r(e, !0);
		if (n && "string" == typeof e) return n(e);
		var o = new Error("Cannot find module '" + e + "'");
		throw ((o.code = "MODULE_NOT_FOUND"), o);
	}
	return (
		(u.register = function(e, r) {
			i[e] = r;
		}),
		(i = e(u)),
		(u.modules = i),
		u
	);
})(function(require) {
	var na = this;
	var Ib,
		ba,
		T = {},
		ua = Object.getOwnPropertySymbols,
		ke = Object.prototype.hasOwnProperty,
		ie = Object.prototype.propertyIsEnumerable,
		he = (function() {
			try {
				if (!Object.assign) return !1;
				var r = new String("abc");
				if (((r[5] = "de"), "5" === Object.getOwnPropertyNames(r)[0]))
					return !1;
				for (var $ = {}, t = 0; t < 10; t++)
					$["_" + String.fromCharCode(t)] = t;
				if (
					"0123456789" !==
					Object.getOwnPropertyNames($)
						.map(function(r) {
							return $[r];
						})
						.join("")
				)
					return !1;
				var a = {};
				return (
					"abcdefghijklmnopqrst".split("").forEach(function(r) {
						a[r] = r;
					}),
					"abcdefghijklmnopqrst" === Object.keys(Object.assign({}, a)).join("")
				);
			} catch (r) {
				return !1;
			}
		})()
			? Object.assign
			: function(r, $) {
					for (
						var t,
							a,
							e = (function(r) {
								if (null == r)
									throw new TypeError(
										"Object.assign cannot be called with null or undefined"
									);
								return Object(r);
							})(r),
							n = 1;
						n < arguments.length;
						n++
					) {
						for (var p in (t = Object(arguments[n])))
							ke.call(t, p) && (e[p] = t[p]);
						if (ua) {
							a = ua(t);
							for (var d = 0; d < a.length; d++)
								ie.call(t, a[d]) && (e[a[d]] = t[a[d]]);
						}
					}
					return e;
			  },
		ia = function(r, $) {
			$ || ($ = [0, ""]), (r = String(r));
			var t = parseFloat(r, 10);
			return ($[0] = t), ($[1] = r.match(/[\d.\-\+]*\s*(.*)/)[1] || ""), $;
		},
		f = function(r) {
			return ia(r)[0];
		},
		x = function(r) {
			return (
				null == r && (r = r),
				function($, t, a, e) {
					null == a && (a = r), null == e && (e = a);
					var n = ia($)[1];
					if (n === t) return $;
					var p = f($);
					if ("px" !== n)
						if ("em" === n) p = f($) * f(a);
						else if ("rem" === n) p = f($) * f(r);
						else {
							if ("ex" !== n) return $;
							p = f($) * f(a) * 2;
						}
					var d = p;
					if ("px" !== t)
						if ("em" === t) d = p / f(e);
						else if ("rem" === t) d = p / f(r);
						else {
							if ("ex" !== t) return $;
							d = p / f(e) / 2;
						}
					return parseFloat(d.toFixed(5)) + t;
				}
			);
		},
		oa = ia,
		y = function(r) {
			return oa(r)[1];
		},
		c = function(r) {
			return oa(r)[0];
		},
		Wd = {
			baseFontSize: "16px",
			baseLineHeight: 1.5,
			rhythmUnit: "rem",
			defaultRhythmBorderWidth: "1px",
			defaultRhythmBorderStyle: "solid",
			roundToNearestHalfLine: !0,
			minLinePadding: "2px",
		},
		Fa = function(r, $) {
			var t,
				a = x($.baseFontSize),
				e = c(a(r, "px")),
				n = c($.baseLineHeightInPx),
				p = c(a($.minLinePadding, "px"));
			return (
				(t = $.roundToNearestHalfLine
					? Math.ceil((2 * e) / n) / 2
					: Math.ceil(e / n)) *
					n -
					e <
					2 * p && (t += $.roundToNearestHalfLine ? 0.5 : 1),
				t
			);
		},
		Ka = function(r) {
			var $ = x(r.baseFontSize);
			return function(t, a, e) {
				null == t && (t = 1),
					null == a && (a = r.baseFontSize),
					null == e && (e = 0);
				var n = t * c(r.baseLineHeightInPx) - e + "px",
					p = $(n, r.rhythmUnit, a);
				return (
					"px" === y(p) && (p = Math.floor(c(p)) + y(p)),
					parseFloat(c(p).toFixed(5)) + y(p)
				);
			};
		},
		Ud = "[object Number]",
		Sd = Object.prototype.toString;
	function Ra(r) {
		return !isNaN(parseFloat(r)) && isFinite(r);
	}
	(Ib = function(r) {
		return (
			"number" == typeof r ||
			((function(r) {
				return !!r && "object" == typeof r;
			})(r) &&
				Sd.call(r) == Ud)
		);
	}),
		(ba = {
			"minor second": 16 / 15,
			"major second": 9 / 8,
			"minor third": 1.2,
			"major third": 4 / 3,
			"diminished fourth": Math.sqrt(2),
			"perfect fifth": 1.5,
			"minor sixth": 1.6,
			golden: 1.61803398875,
			phi: 1.61803398875,
			"major sixth": 5 / 3,
			"minor seventh": 16 / 9,
			"major seventh": 15 / 8,
			octave: 2,
			"major tenth": 2.5,
			"major eleventh": 8 / 3,
			"major twelfth": 3,
			"double octave": 4,
		});
	var Q = function(r, $, t) {
			if (
				(void 0 === $ && ($ = 0),
				void 0 === t && (t = !1),
				"cool" === $
					? ($ = 237)
					: "slate" === $
					? ($ = 122)
					: "warm" === $ && ($ = 69),
				!Ra($))
			)
				throw new Error("Hue is not a number");
			if (!Ra(r)) throw new Error("Lightness is not a number");
			r > 100 && (r = 100), r < 0 && (r = 0);
			var a = 0;
			0 !== $ && (a = 19.92978 + -0.3651759 * r + 0.001737214 * Math.pow(r, 2));
			var e = 0;
			return (
				t
					? ((e = r / 100), (r = "100%,"))
					: ((e = (100 - r) / 100), (r = "0%,")),
				"hsla(" + $ + "," + a + "%," + r + e + ")"
			);
		},
		N =
			"undefined" != typeof window
				? window
				: "undefined" != typeof na
				? na
				: "undefined" != typeof self
				? self
				: {};
	function L(r, $) {
		return r(($ = { exports: {} }), $.exports), $.exports;
	}
	var Od,
		ra = "object" == typeof N && N && N.Object === Object && N,
		Md = "object" == typeof self && self && self.Object === Object && self,
		d = ra || Md || Function("return this")(),
		j = d.Symbol,
		Aa = Object.prototype,
		Ld = Aa.hasOwnProperty,
		Kd = Aa.toString,
		w = j ? j.toStringTag : void 0,
		Jd = function(r) {
			var $ = Ld.call(r, w),
				t = r[w];
			try {
				r[w] = void 0;
				var a = !0;
			} catch (r) {}
			var e = Kd.call(r);
			return a && ($ ? (r[w] = t) : delete r[w]), e;
		},
		Hd = Object.prototype.toString,
		Gd = function(r) {
			return Hd.call(r);
		},
		Fd = "[object Null]",
		zd = "[object Undefined]",
		Sa = j ? j.toStringTag : void 0,
		e = function(r) {
			return null == r
				? void 0 === r
					? zd
					: Fd
				: Sa && Sa in Object(r)
				? Jd(r)
				: Gd(r);
		},
		h = function(r) {
			var $ = typeof r;
			return null != r && ("object" == $ || "function" == $);
		},
		yd = "[object AsyncFunction]",
		xd = "[object Function]",
		wd = "[object GeneratorFunction]",
		sd = "[object Proxy]",
		s = function(r) {
			if (!h(r)) return !1;
			var $ = e(r);
			return $ == xd || $ == wd || $ == yd || $ == sd;
		},
		ma = d["__core-js_shared__"],
		va = (Od = /[^.]+$/.exec((ma && ma.keys && ma.keys.IE_PROTO) || ""))
			? "Symbol(src)_1." + Od
			: "",
		qd = function(r) {
			return !!va && va in r;
		},
		kd = Function.prototype.toString,
		k = function(r) {
			if (null != r) {
				try {
					return kd.call(r);
				} catch (r) {}
				try {
					return r + "";
				} catch (r) {}
			}
			return "";
		},
		jd = /^\[object .+?Constructor\]$/,
		Vc = Function.prototype,
		Pc = Object.prototype,
		Lc = RegExp(
			"^" +
				Vc.toString
					.call(Pc.hasOwnProperty)
					.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
					.replace(
						/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
						"$1.*?"
					) +
				"$"
		),
		Cc = function(r) {
			return !(!h(r) || qd(r)) && (s(r) ? Lc : jd).test(k(r));
		},
		xc = function(r, $) {
			return null == r ? void 0 : r[$];
		},
		l = function(r, $) {
			var t = xc(r, $);
			return Cc(t) ? t : void 0;
		},
		F = (function() {
			try {
				var r = l(Object, "defineProperty");
				return r({}, "", {}), r;
			} catch (r) {}
		})(),
		aa = function(r, $, t) {
			"__proto__" == $ && F
				? F(r, $, { configurable: !0, enumerable: !0, value: t, writable: !0 })
				: (r[$] = t);
		},
		z = function(r, $) {
			return r === $ || (r != r && $ != $);
		},
		sc = Object.prototype.hasOwnProperty,
		Qa = function(r, $, t) {
			var a = r[$];
			(sc.call(r, $) && z(a, t) && (void 0 !== t || $ in r)) || aa(r, $, t);
		},
		g = Array.isArray,
		i = function(r) {
			return null != r && "object" == typeof r;
		},
		oc = "[object Symbol]",
		fa = function(r) {
			return "symbol" == typeof r || (i(r) && e(r) == oc);
		},
		ic = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
		gc = /^\w*$/,
		ga = function(r, $) {
			if (g(r)) return !1;
			var t = typeof r;
			return (
				!(
					"number" != t &&
					"symbol" != t &&
					"boolean" != t &&
					null != r &&
					!fa(r)
				) ||
				gc.test(r) ||
				!ic.test(r) ||
				(null != $ && r in Object($))
			);
		},
		A = l(Object, "create"),
		cc = function(r) {
			var $ = this.has(r) && delete this.__data__[r];
			return (this.size -= $ ? 1 : 0), $;
		},
		ac = "__lodash_hash_undefined__",
		_b = Object.prototype.hasOwnProperty,
		$b = function(r) {
			var $ = this.__data__;
			if (A) {
				var t = $[r];
				return t === ac ? void 0 : t;
			}
			return _b.call($, r) ? $[r] : void 0;
		},
		Qb = Object.prototype.hasOwnProperty,
		Ob = function(r) {
			var $ = this.__data__;
			return A ? void 0 !== $[r] : Qb.call($, r);
		},
		Nb = "__lodash_hash_undefined__",
		Mb = function(r, $) {
			var t = this.__data__;
			return (
				(this.size += this.has(r) ? 0 : 1),
				(t[r] = A && void 0 === $ ? Nb : $),
				this
			);
		};
	function n(r) {
		var $ = -1,
			t = null == r ? 0 : r.length;
		for (this.clear(); ++$ < t; ) {
			var a = r[$];
			this.set(a[0], a[1]);
		}
	}
	(n.prototype.clear = function() {
		(this.__data__ = A ? A(null) : {}), (this.size = 0);
	}),
		(n.prototype.delete = cc),
		(n.prototype.get = $b),
		(n.prototype.has = Ob),
		(n.prototype.set = Mb);
	var za = n,
		G = function(r, $) {
			for (var t = r.length; t--; ) if (z(r[t][0], $)) return t;
			return -1;
		},
		Lb = Array.prototype.splice,
		Hb = function(r) {
			var $ = this.__data__,
				t = G($, r);
			return !(
				t < 0 ||
				(t == $.length - 1 ? $.pop() : Lb.call($, t, 1), --this.size, 0)
			);
		},
		Gb = function(r) {
			var $ = this.__data__,
				t = G($, r);
			return t < 0 ? void 0 : $[t][1];
		},
		Eb = function(r) {
			return G(this.__data__, r) > -1;
		},
		Cb = function(r, $) {
			var t = this.__data__,
				a = G(t, r);
			return a < 0 ? (++this.size, t.push([r, $])) : (t[a][1] = $), this;
		};
	function o(r) {
		var $ = -1,
			t = null == r ? 0 : r.length;
		for (this.clear(); ++$ < t; ) {
			var a = r[$];
			this.set(a[0], a[1]);
		}
	}
	(o.prototype.clear = function() {
		(this.__data__ = []), (this.size = 0);
	}),
		(o.prototype.delete = Hb),
		(o.prototype.get = Gb),
		(o.prototype.has = Eb),
		(o.prototype.set = Cb);
	var I = o,
		u = l(d, "Map"),
		Bb = function(r) {
			var $ = typeof r;
			return "string" == $ || "number" == $ || "symbol" == $ || "boolean" == $
				? "__proto__" !== r
				: null === r;
		},
		K = function(r, $) {
			var t = r.__data__;
			return Bb($) ? t["string" == typeof $ ? "string" : "hash"] : t.map;
		},
		Ab = function(r) {
			var $ = K(this, r).delete(r);
			return (this.size -= $ ? 1 : 0), $;
		},
		xb = function(r) {
			return K(this, r).get(r);
		},
		wb = function(r) {
			return K(this, r).has(r);
		},
		ub = function(r, $) {
			var t = K(this, r),
				a = t.size;
			return t.set(r, $), (this.size += t.size == a ? 0 : 1), this;
		};
	function p(r) {
		var $ = -1,
			t = null == r ? 0 : r.length;
		for (this.clear(); ++$ < t; ) {
			var a = r[$];
			this.set(a[0], a[1]);
		}
	}
	(p.prototype.clear = function() {
		(this.size = 0),
			(this.__data__ = {
				hash: new za(),
				map: new (u || I)(),
				string: new za(),
			});
	}),
		(p.prototype.delete = Ab),
		(p.prototype.get = xb),
		(p.prototype.has = wb),
		(p.prototype.set = ub);
	var O = p,
		sb = "Expected a function";
	function ja(r, $) {
		if ("function" != typeof r || (null != $ && "function" != typeof $))
			throw new TypeError(sb);
		var t = function() {
			var a = arguments,
				e = $ ? $.apply(this, a) : a[0],
				n = t.cache;
			if (n.has(e)) return n.get(e);
			var p = r.apply(this, a);
			return (t.cache = n.set(e, p) || n), p;
		};
		return (t.cache = new (ja.Cache || O)()), t;
	}
	ja.Cache = O;
	var pb = ja,
		ob = 500,
		lb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
		jb = /\\(\\)?/g,
		hb = (function(r) {
			var $ = pb(
					function(r) {
						var $ = [];
						return (
							46 === r.charCodeAt(0) && $.push(""),
							r.replace(lb, function(r, t, a, e) {
								$.push(a ? e.replace(jb, "$1") : t || r);
							}),
							$
						);
					},
					function(r) {
						return t.size === ob && t.clear(), r;
					}
				),
				t = $.cache;
			return $;
		})(),
		fb = function(r, $) {
			for (var t = -1, a = null == r ? 0 : r.length, e = Array(a); ++t < a; )
				e[t] = $(r[t], t, r);
			return e;
		},
		cb = 1 / 0,
		$a = j ? j.prototype : void 0,
		_a = $a ? $a.toString : void 0,
		bb = function r($) {
			if ("string" == typeof $) return $;
			if (g($)) return fb($, r) + "";
			if (fa($)) return _a ? _a.call($) : "";
			var t = $ + "";
			return "0" == t && 1 / $ == -cb ? "-0" : t;
		},
		Ic = function(r) {
			return null == r ? "" : bb(r);
		},
		Y = function(r, $) {
			return g(r) ? r : ga(r, $) ? [r] : hb(Ic(r));
		},
		db = 9007199254740991,
		eb = /^(?:0|[1-9]\d*)$/,
		R = function(r, $) {
			var t = typeof r;
			return (
				!!($ = null == $ ? db : $) &&
				("number" == t || ("symbol" != t && eb.test(r))) &&
				r > -1 &&
				r % 1 == 0 &&
				r < $
			);
		},
		gb = 1 / 0,
		B = function(r) {
			if ("string" == typeof r || fa(r)) return r;
			var $ = r + "";
			return "0" == $ && 1 / r == -gb ? "-0" : $;
		},
		ib = function(r, $, t, a) {
			if (!h(r)) return r;
			for (
				var e = -1, n = ($ = Y($, r)).length, p = n - 1, d = r;
				null != d && ++e < n;

			) {
				var v = B($[e]),
					o = t;
				if (e != p) {
					var i = d[v];
					void 0 === (o = a ? a(i, v, d) : void 0) &&
						(o = h(i) ? i : R($[e + 1]) ? [] : {});
				}
				Qa(d, v, o), (d = d[v]);
			}
			return r;
		},
		ka = function(r, $, t) {
			return null == r ? r : ib(r, $, t);
		},
		kb = function(r, $) {
			for (
				var t = -1, a = null == r ? 0 : r.length;
				++t < a && !1 !== $(r[t], t, r);

			);
			return r;
		},
		Va = function(r, $, t) {
			for (var a = -1, e = Object(r), n = t(r), p = n.length; p--; ) {
				var d = n[++a];
				if (!1 === $(e[d], d, e)) break;
			}
			return r;
		},
		mb = function(r, $) {
			for (var t = -1, a = Array(r); ++t < r; ) a[t] = $(t);
			return a;
		},
		nb = "[object Arguments]",
		Ua = function(r) {
			return i(r) && e(r) == nb;
		},
		Ta = Object.prototype,
		qb = Ta.hasOwnProperty,
		rb = Ta.propertyIsEnumerable,
		P = Ua(
			(function() {
				return arguments;
			})()
		)
			? Ua
			: function(r) {
					return i(r) && qb.call(r, "callee") && !rb.call(r, "callee");
			  },
		tb = function() {
			return !1;
		},
		M = L(function(r, $) {
			var t = $ && !$.nodeType && $,
				a = t && r && !r.nodeType && r,
				e = a && a.exports === t ? d.Buffer : void 0;
			r.exports = (e ? e.isBuffer : void 0) || tb;
		}),
		vb = 9007199254740991,
		ea = function(r) {
			return "number" == typeof r && r > -1 && r % 1 == 0 && r <= vb;
		},
		a = {};
	(a["[object Float32Array]"] = a["[object Float64Array]"] = a[
		"[object Int8Array]"
	] = a["[object Int16Array]"] = a["[object Int32Array]"] = a[
		"[object Uint8Array]"
	] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a[
		"[object Uint32Array]"
	] = !0),
		(a["[object Arguments]"] = a["[object Array]"] = a[
			"[object ArrayBuffer]"
		] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a[
			"[object Error]"
		] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a[
			"[object Object]"
		] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a[
			"[object WeakMap]"
		] = !1);
	var yb = function(r) {
			return i(r) && ea(r.length) && !!a[e(r)];
		},
		zb = function(r) {
			return function($) {
				return r($);
			};
		},
		La = L(function(r, $) {
			var t = $ && !$.nodeType && $,
				a = t && r && !r.nodeType && r,
				e = a && a.exports === t && ra.process,
				n = (function() {
					try {
						return (
							(a && a.require && a.require("util").types) ||
							(e && e.binding && e.binding("util"))
						);
					} catch (r) {}
				})();
			r.exports = n;
		}),
		Ja = La && La.isTypedArray,
		_ = Ja ? zb(Ja) : yb,
		Db = Object.prototype.hasOwnProperty,
		Ea = function(r, $) {
			var t = g(r),
				a = !t && P(r),
				e = !t && !a && M(r),
				n = !t && !a && !e && _(r),
				p = t || a || e || n,
				d = p ? mb(r.length, String) : [],
				v = d.length;
			for (var o in r)
				(!$ && !Db.call(r, o)) ||
					(p &&
						("length" == o ||
							(e && ("offset" == o || "parent" == o)) ||
							(n &&
								("buffer" == o || "byteLength" == o || "byteOffset" == o)) ||
							R(o, v))) ||
					d.push(o);
			return d;
		},
		Fb = Object.prototype,
		Z = function(r) {
			var $ = r && r.constructor;
			return r === (("function" == typeof $ && $.prototype) || Fb);
		},
		Ca = function(r, $) {
			return function(t) {
				return r($(t));
			};
		},
		ne = Ca(Object.keys, Object),
		Jb = Object.prototype.hasOwnProperty,
		Kb = function(r) {
			if (!Z(r)) return ne(r);
			var $ = [];
			for (var t in Object(r)) Jb.call(r, t) && "constructor" != t && $.push(t);
			return $;
		},
		v = function(r) {
			return null != r && ea(r.length) && !s(r);
		},
		V = function(r) {
			return v(r) ? Ea(r) : Kb(r);
		},
		wa = function(r, $) {
			if (null == r) return r;
			if (!v(r))
				return (function(r, $) {
					return r && Va(r, $, V);
				})(r, $);
			for (
				var t = r.length, a = -1, e = Object(r);
				++a < t && !1 !== $(e[a], a, e);

			);
			return r;
		},
		t = function(r) {
			return r;
		},
		Pb = function(r) {
			return "function" == typeof r ? r : t;
		},
		J = function(r, $) {
			return (g(r) ? kb : wa)(r, Pb($));
		},
		Rb = "[object Number]",
		Sb = function(r) {
			return "number" == typeof r || (i(r) && e(r) == Rb);
		},
		Tb = "[object String]",
		Ub = function(r) {
			return "string" == typeof r || (!g(r) && i(r) && e(r) == Tb);
		},
		Vb = function(r) {
			var $ = this.__data__,
				t = $.delete(r);
			return (this.size = $.size), t;
		},
		Wb = function(r) {
			return this.__data__.get(r);
		},
		Xb = function(r) {
			return this.__data__.has(r);
		},
		Yb = 200,
		Zb = function(r, $) {
			var t = this.__data__;
			if (t instanceof I) {
				var a = t.__data__;
				if (!u || a.length < Yb - 1)
					return a.push([r, $]), (this.size = ++t.size), this;
				t = this.__data__ = new O(a);
			}
			return t.set(r, $), (this.size = t.size), this;
		};
	function m(r) {
		var $ = (this.__data__ = new I(r));
		this.size = $.size;
	}
	(m.prototype.clear = function() {
		(this.__data__ = new I()), (this.size = 0);
	}),
		(m.prototype.delete = Vb),
		(m.prototype.get = Wb),
		(m.prototype.has = Xb),
		(m.prototype.set = Zb);
	var C = m,
		la = function(r, $, t) {
			((void 0 === t || z(r[$], t)) && (void 0 !== t || $ in r)) || aa(r, $, t);
		},
		bc = L(function(r, $) {
			var t = $ && !$.nodeType && $,
				a = t && r && !r.nodeType && r,
				e = a && a.exports === t ? d.Buffer : void 0,
				n = e ? e.allocUnsafe : void 0;
			r.exports = function(r, $) {
				if ($) return r.slice();
				var t = r.length,
					a = n ? n(t) : new r.constructor(t);
				return r.copy(a), a;
			};
		}),
		E = d.Uint8Array,
		dc = function(r) {
			var $ = new r.constructor(r.byteLength);
			return new E($).set(new E(r)), $;
		},
		ec = function(r, $) {
			var t = $ ? dc(r.buffer) : r.buffer;
			return new r.constructor(t, r.byteOffset, r.length);
		},
		fc = function(r, $) {
			var t = -1,
				a = r.length;
			for ($ || ($ = Array(a)); ++t < a; ) $[t] = r[t];
			return $;
		},
		Za = Object.create,
		hc = (function() {
			function r() {}
			return function($) {
				if (!h($)) return {};
				if (Za) return Za($);
				r.prototype = $;
				var t = new r();
				return (r.prototype = void 0), t;
			};
		})(),
		Ya = Ca(Object.getPrototypeOf, Object),
		jc = function(r) {
			return "function" != typeof r.constructor || Z(r) ? {} : hc(Ya(r));
		},
		kc = function(r) {
			return i(r) && v(r);
		},
		lc = "[object Object]",
		mc = Function.prototype,
		nc = Object.prototype,
		Wa = mc.toString,
		pc = nc.hasOwnProperty,
		qc = Wa.call(Object),
		rc = function(r) {
			if (!i(r) || e(r) != lc) return !1;
			var $ = Ya(r);
			if (null === $) return !0;
			var t = pc.call($, "constructor") && $.constructor;
			return "function" == typeof t && t instanceof t && Wa.call(t) == qc;
		},
		ca = function(r, $) {
			return "__proto__" == $ ? void 0 : r[$];
		},
		tc = function(r, $, t, a) {
			var e = !t;
			t || (t = {});
			for (var n = -1, p = $.length; ++n < p; ) {
				var d = $[n],
					v = a ? a(t[d], r[d], d, t, r) : void 0;
				void 0 === v && (v = r[d]), e ? aa(t, d, v) : Qa(t, d, v);
			}
			return t;
		},
		uc = function(r) {
			var $ = [];
			if (null != r) for (var t in Object(r)) $.push(t);
			return $;
		},
		vc = Object.prototype.hasOwnProperty,
		wc = function(r) {
			if (!h(r)) return uc(r);
			var $ = Z(r),
				t = [];
			for (var a in r)
				("constructor" != a || (!$ && vc.call(r, a))) && t.push(a);
			return t;
		},
		Ia = function(r) {
			return v(r) ? Ea(r, !0) : wc(r);
		},
		yc = function(r) {
			return tc(r, Ia(r));
		},
		zc = function(r, $, t, a, e, n, p) {
			var d = ca(r, t),
				v = ca($, t),
				o = p.get(v);
			if (o) la(r, t, o);
			else {
				var i = n ? n(d, v, t + "", r, $, p) : void 0,
					u = void 0 === i;
				if (u) {
					var c = g(v),
						l = !c && M(v),
						f = !c && !l && _(v);
					(i = v),
						c || l || f
							? g(d)
								? (i = d)
								: kc(d)
								? (i = fc(d))
								: l
								? ((u = !1), (i = bc(v, !0)))
								: f
								? ((u = !1), (i = ec(v, !0)))
								: (i = [])
							: rc(v) || P(v)
							? ((i = d),
							  P(d) ? (i = yc(d)) : (!h(d) || (a && s(d))) && (i = jc(v)))
							: (u = !1);
				}
				u && (p.set(v, i), e(i, v, a, n, p), p.delete(v)), la(r, t, i);
			}
		},
		Ac = function r($, t, a, e, n) {
			$ !== t &&
				Va(
					t,
					function(p, d) {
						if (h(p)) n || (n = new C()), zc($, t, d, a, r, e, n);
						else {
							var v = e ? e(ca($, d), p, d + "", $, t, n) : void 0;
							void 0 === v && (v = p), la($, d, v);
						}
					},
					Ia
				);
		},
		Bc = function(r, $, t) {
			switch (t.length) {
				case 0:
					return r.call($);
				case 1:
					return r.call($, t[0]);
				case 2:
					return r.call($, t[0], t[1]);
				case 3:
					return r.call($, t[0], t[1], t[2]);
			}
			return r.apply($, t);
		},
		Ha = Math.max,
		Dc = function(r, $, t) {
			return (
				($ = Ha(void 0 === $ ? r.length - 1 : $, 0)),
				function() {
					for (
						var a = arguments, e = -1, n = Ha(a.length - $, 0), p = Array(n);
						++e < n;

					)
						p[e] = a[$ + e];
					e = -1;
					for (var d = Array($ + 1); ++e < $; ) d[e] = a[e];
					return (d[$] = t(p)), Bc(r, this, d);
				}
			);
		},
		Ec = function(r) {
			return function() {
				return r;
			};
		},
		Fc = 800,
		Gc = 16,
		Hc = Date.now,
		ab = (function(r) {
			var $ = 0,
				t = 0;
			return function() {
				var a = Hc(),
					e = Gc - (a - t);
				if (((t = a), e > 0)) {
					if (++$ >= Fc) return arguments[0];
				} else $ = 0;
				return r.apply(void 0, arguments);
			};
		})(
			F
				? function(r, $) {
						return F(r, "toString", {
							configurable: !0,
							enumerable: !1,
							value: Ec($),
							writable: !0,
						});
				  }
				: t
		),
		Jc = function(r, $) {
			return ab(Dc(r, $, t), r + "");
		},
		Kc = function(r, $, t) {
			if (!h(t)) return !1;
			var a = typeof $;
			return (
				!!("number" == a ? v(t) && R($, t.length) : "string" == a && $ in t) &&
				z(t[$], r)
			);
		},
		W = (function(r) {
			return Jc(function($, t) {
				var a = -1,
					e = t.length,
					n = e > 1 ? t[e - 1] : void 0,
					p = e > 2 ? t[2] : void 0;
				for (
					n = r.length > 3 && "function" == typeof n ? (e--, n) : void 0,
						p && Kc(t[0], t[1], p) && ((n = e < 3 ? void 0 : n), (e = 1)),
						$ = Object($);
					++a < e;

				) {
					var d = t[a];
					d && r($, d, a);
				}
				return $;
			});
		})(function(r, $, t) {
			Ac(r, $, t);
		}),
		Mc = function(r, $, t, a) {
			var e = -1,
				n = null == r ? 0 : r.length;
			for (a && n && (t = r[++e]); ++e < n; ) t = $(t, r[e], e, r);
			return t;
		},
		Nc = "__lodash_hash_undefined__",
		Oc = function(r) {
			return this.__data__.has(r);
		};
	function r(r) {
		var $ = -1,
			t = null == r ? 0 : r.length;
		for (this.__data__ = new O(); ++$ < t; ) this.add(r[$]);
	}
	(r.prototype.add = r.prototype.push = function(r) {
		return this.__data__.set(r, Nc), this;
	}),
		(r.prototype.has = Oc);
	var Qc = r,
		Rc = function(r, $) {
			for (var t = -1, a = null == r ? 0 : r.length; ++t < a; )
				if ($(r[t], t, r)) return !0;
			return !1;
		},
		Sc = function(r, $) {
			return r.has($);
		},
		Tc = 1,
		Uc = 2,
		Da = function(r, $, t, a, e, n) {
			var p = t & Tc,
				d = r.length,
				v = $.length;
			if (d != v && !(p && v > d)) return !1;
			var o = n.get(r);
			if (o && n.get($)) return o == $;
			var i = -1,
				u = !0,
				c = t & Uc ? new Qc() : void 0;
			for (n.set(r, $), n.set($, r); ++i < d; ) {
				var l = r[i],
					f = $[i];
				if (a) var s = p ? a(f, l, i, $, r, n) : a(l, f, i, r, $, n);
				if (void 0 !== s) {
					if (s) continue;
					u = !1;
					break;
				}
				if (c) {
					if (
						!Rc($, function(r, $) {
							if (!Sc(c, $) && (l === r || e(l, r, t, a, n))) return c.push($);
						})
					) {
						u = !1;
						break;
					}
				} else if (l !== f && !e(l, f, t, a, n)) {
					u = !1;
					break;
				}
			}
			return n.delete(r), n.delete($), u;
		},
		Wc = function(r) {
			var $ = -1,
				t = Array(r.size);
			return (
				r.forEach(function(r, a) {
					t[++$] = [a, r];
				}),
				t
			);
		},
		Xc = function(r) {
			var $ = -1,
				t = Array(r.size);
			return (
				r.forEach(function(r) {
					t[++$] = r;
				}),
				t
			);
		},
		Yc = 1,
		Zc = 2,
		$c = "[object Boolean]",
		_c = "[object Date]",
		ad = "[object Error]",
		bd = "[object Map]",
		cd = "[object Number]",
		dd = "[object RegExp]",
		ed = "[object Set]",
		fd = "[object String]",
		gd = "[object Symbol]",
		hd = "[object ArrayBuffer]",
		id = "[object DataView]",
		Ba = j ? j.prototype : void 0,
		S = Ba ? Ba.valueOf : void 0,
		ld = function(r, $, t, a, e, n, p) {
			switch (t) {
				case id:
					if (r.byteLength != $.byteLength || r.byteOffset != $.byteOffset)
						return !1;
					(r = r.buffer), ($ = $.buffer);
				case hd:
					return !(r.byteLength != $.byteLength || !n(new E(r), new E($)));
				case $c:
				case _c:
				case cd:
					return z(+r, +$);
				case ad:
					return r.name == $.name && r.message == $.message;
				case dd:
				case fd:
					return r == $ + "";
				case bd:
					var d = Wc;
				case ed:
					if ((d || (d = Xc), r.size != $.size && !(a & Yc))) return !1;
					var v = p.get(r);
					if (v) return v == $;
					(a |= Zc), p.set(r, $);
					var o = Da(d(r), d($), a, e, n, p);
					return p.delete(r), o;
				case gd:
					if (S) return S.call(r) == S.call($);
			}
			return !1;
		},
		md = function(r, $) {
			for (var t = -1, a = $.length, e = r.length; ++t < a; ) r[e + t] = $[t];
			return r;
		},
		nd = function(r, $, t) {
			var a = $(r);
			return g(r) ? a : md(a, t(r));
		},
		od = function(r, $) {
			for (var t = -1, a = null == r ? 0 : r.length, e = 0, n = []; ++t < a; ) {
				var p = r[t];
				$(p, t, r) && (n[e++] = p);
			}
			return n;
		},
		pd = Object.prototype.propertyIsEnumerable,
		xa = Object.getOwnPropertySymbols,
		rd = xa
			? function(r) {
					return null == r
						? []
						: ((r = Object(r)),
						  od(xa(r), function($) {
								return pd.call(r, $);
						  }));
			  }
			: function() {
					return [];
			  },
		sa = function(r) {
			return nd(r, V, rd);
		},
		td = 1,
		ud = Object.prototype.hasOwnProperty,
		vd = function(r, $, t, a, e, n) {
			var p = t & td,
				d = sa(r),
				v = d.length;
			if (v != sa($).length && !p) return !1;
			for (var o = v; o--; ) {
				var i = d[o];
				if (!(p ? i in $ : ud.call($, i))) return !1;
			}
			var u = n.get(r);
			if (u && n.get($)) return u == $;
			var c = !0;
			n.set(r, $), n.set($, r);
			for (var l = p; ++o < v; ) {
				var f = r[(i = d[o])],
					s = $[i];
				if (a) var h = p ? a(s, f, i, $, r, n) : a(f, s, i, r, $, n);
				if (!(void 0 === h ? f === s || e(f, s, t, a, n) : h)) {
					c = !1;
					break;
				}
				l || (l = "constructor" == i);
			}
			if (c && !l) {
				var b = r.constructor,
					g = $.constructor;
				b != g &&
					"constructor" in r &&
					"constructor" in $ &&
					!(
						"function" == typeof b &&
						b instanceof b &&
						"function" == typeof g &&
						g instanceof g
					) &&
					(c = !1);
			}
			return n.delete(r), n.delete($), c;
		},
		ha = l(d, "DataView"),
		da = l(d, "Promise"),
		$ = l(d, "Set"),
		U = l(d, "WeakMap"),
		Ad = k(ha),
		Bd = k(u),
		Cd = k(da),
		Dd = k($),
		Ed = k(U),
		q = e;
	((ha && "[object DataView]" != q(new ha(new ArrayBuffer(1)))) ||
		(u && "[object Map]" != q(new u())) ||
		(da && "[object Promise]" != q(da.resolve())) ||
		($ && "[object Set]" != q(new $())) ||
		(U && "[object WeakMap]" != q(new U()))) &&
		(q = function(r) {
			var $ = e(r),
				t = "[object Object]" == $ ? r.constructor : void 0,
				a = t ? k(t) : "";
			if (a)
				switch (a) {
					case Ad:
						return "[object DataView]";
					case Bd:
						return "[object Map]";
					case Cd:
						return "[object Promise]";
					case Dd:
						return "[object Set]";
					case Ed:
						return "[object WeakMap]";
				}
			return $;
		});
	var H,
		Na = q,
		Id = 1,
		Ma = "[object Arguments]",
		Ga = "[object Array]",
		D = "[object Object]",
		ta = Object.prototype.hasOwnProperty,
		Nd = function(r, $, t, a, e, n) {
			var p = g(r),
				d = g($),
				v = p ? Ga : Na(r),
				o = d ? Ga : Na($),
				i = (v = v == Ma ? D : v) == D,
				u = (o = o == Ma ? D : o) == D,
				c = v == o;
			if (c && M(r)) {
				if (!M($)) return !1;
				(p = !0), (i = !1);
			}
			if (c && !i)
				return (
					n || (n = new C()),
					p || _(r) ? Da(r, $, t, a, e, n) : ld(r, $, v, t, a, e, n)
				);
			if (!(t & Id)) {
				var l = i && ta.call(r, "__wrapped__"),
					f = u && ta.call($, "__wrapped__");
				if (l || f) {
					var s = l ? r.value() : r,
						h = f ? $.value() : $;
					return n || (n = new C()), e(s, h, t, a, n);
				}
			}
			return !!c && (n || (n = new C()), vd(r, $, t, a, e, n));
		},
		qa = function r($, t, a, e, n) {
			return (
				$ === t ||
				(null == $ || null == t || (!i($) && !i(t))
					? $ != $ && t != t
					: Nd($, t, a, e, r, n))
			);
		},
		Pd = 1,
		Qd = 2,
		Rd = function(r, $, t, a) {
			var e = t.length,
				n = e,
				p = !a;
			if (null == r) return !n;
			for (r = Object(r); e--; ) {
				var d = t[e];
				if (p && d[2] ? d[1] !== r[d[0]] : !(d[0] in r)) return !1;
			}
			for (; ++e < n; ) {
				var v = (d = t[e])[0],
					o = r[v],
					i = d[1];
				if (p && d[2]) {
					if (void 0 === o && !(v in r)) return !1;
				} else {
					var u = new C();
					if (a) var c = a(o, i, v, r, $, u);
					if (!(void 0 === c ? qa(i, o, Pd | Qd, a, u) : c)) return !1;
				}
			}
			return !0;
		},
		Pa = function(r) {
			return r == r && !h(r);
		},
		Td = function(r) {
			for (var $ = V(r), t = $.length; t--; ) {
				var a = $[t],
					e = r[a];
				$[t] = [a, e, Pa(e)];
			}
			return $;
		},
		Oa = function(r, $) {
			return function(t) {
				return null != t && t[r] === $ && (void 0 !== $ || r in Object(t));
			};
		},
		Vd = function(r) {
			var $ = Td(r);
			return 1 == $.length && $[0][2]
				? Oa($[0][0], $[0][1])
				: function(t) {
						return t === r || Rd(t, r, $);
				  };
		},
		ya = function(r, $) {
			for (var t = 0, a = ($ = Y($, r)).length; null != r && t < a; )
				r = r[B($[t++])];
			return t && t == a ? r : void 0;
		},
		Xd = function(r, $, t) {
			var a = null == r ? void 0 : ya(r, $);
			return void 0 === a ? t : a;
		},
		Yd = function(r, $) {
			return null != r && $ in Object(r);
		},
		Zd = function(r, $, t) {
			for (var a = -1, e = ($ = Y($, r)).length, n = !1; ++a < e; ) {
				var p = B($[a]);
				if (!(n = null != r && t(r, p))) break;
				r = r[p];
			}
			return n || ++a != e
				? n
				: !!(e = null == r ? 0 : r.length) &&
						ea(e) &&
						R(p, e) &&
						(g(r) || P(r));
		},
		$d = function(r, $) {
			return null != r && Zd(r, $, Yd);
		},
		_d = 1,
		ae = 2,
		be = function(r, $) {
			return ga(r) && Pa($)
				? Oa(B(r), $)
				: function(t) {
						var a = Xd(t, r);
						return void 0 === a && a === $ ? $d(t, r) : qa($, a, _d | ae);
				  };
		},
		ce = function(r) {
			return function($) {
				return null == $ ? void 0 : $[r];
			};
		},
		de = function(r) {
			return function($) {
				return ya($, r);
			};
		},
		ee = function(r) {
			return ga(r) ? ce(B(r)) : de(r);
		},
		fe = function(r) {
			return "function" == typeof r
				? r
				: null == r
				? t
				: "object" == typeof r
				? g(r)
					? be(r[0], r[1])
					: Vd(r)
				: ee(r);
		},
		ge = function(r, $, t, a, e) {
			return (
				e(r, function(r, e, n) {
					t = a ? ((a = !1), r) : $(t, r, e, n);
				}),
				t
			);
		},
		Xa = function(r, $, t) {
			var a = g(r) ? Mc : ge,
				e = arguments.length < 3;
			return a(r, fe($, 4), t, e, wa);
		},
		b = function(r, $, t) {
			var a;
			return (
				void 0 === r && (r = {}),
				(a = g($) ? $ : [$]),
				J(a, function($) {
					J(t, function(t, a) {
						ka(r, $ + "." + a, t);
					});
				}),
				r
			);
		},
		je = [
			"inherit",
			"default",
			"serif",
			"sans-serif",
			"monospace",
			"fantasy",
			"cursive",
			"-apple-system",
		],
		X = function(r) {
			return -1 !== je.indexOf(r) ? r : "'" + r + "'";
		},
		le = L(function(r, $) {
			Object.defineProperty($, "__esModule", { value: !0 }),
				($.default =
					"html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}");
		}),
		me =
			(H = le) &&
			H.__esModule &&
			Object.prototype.hasOwnProperty.call(H, "default")
				? H.default
				: H,
		pa = function(r) {
			return Xa(
				r,
				function(r, $, t) {
					return (
						(r += t + "{"),
						J($, function($, t) {
							if (h($)) {
								var a = {};
								(a[t] = $), (r += pa(a));
							} else {
								var e =
									(function(r, $) {
										if ("string" != typeof r)
											throw new TypeError("Expected a string");
										return r
											.replace(
												/([a-z\d])([A-Z])/g,
												"$1" + ($ = void 0 === $ ? "_" : $) + "$2"
											)
											.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + $ + "$2")
											.toLowerCase();
									})(t, "-") +
									":" +
									$ +
									";";
								["Webkit", "ms", "Moz", "O"].forEach(function(r) {
									t.slice(0, r.length) === r && (e = "-" + e);
								}),
									(r += e);
							}
						}),
						(r += "}")
					);
				},
				""
			);
		};
	T = function(r) {
		var $,
			t,
			a,
			e,
			n = he(
				{},
				{
					baseFontSize: "16px",
					baseLineHeight: 1.45,
					headerLineHeight: 1.1,
					scaleRatio: 2,
					googleFonts: [],
					headerFontFamily: [
						"-apple-system",
						"BlinkMacSystemFont",
						"Segoe UI",
						"Roboto",
						"Oxygen",
						"Ubuntu",
						"Cantarell",
						"Fira Sans",
						"Droid Sans",
						"Helvetica Neue",
						"sans-serif",
					],
					bodyFontFamily: ["georgia", "serif"],
					headerColor: "inherit",
					bodyColor: "hsla(0,0%,0%,0.8)",
					headerWeight: "bold",
					bodyWeight: "normal",
					boldWeight: "bold",
					includeNormalize: !0,
					blockMarginBottom: 1,
				},
				r
			),
			p =
				(($ = n),
				(t = JSON.parse(JSON.stringify(Wd))),
				(a = Object.assign({}, t, $)),
				(e = x(a.baseFontSize)),
				y(a.baseLineHeight)
					? (c(e(a.baseFontSize, "px")),
					  (a.baseLineHeightInPx = e(a.baseLineHeight, "px")))
					: (a.baseLineHeightInPx =
							c(a.baseFontSize) * a.baseLineHeight + "px"),
				{
					rhythm: Ka(a),
					establishBaseline: function() {
						return (
							x((r = a).baseFontSize),
							{
								fontSize: (c(r.baseFontSize) / 16) * 100 + "%",
								lineHeight: r.baseLineHeight.toString(),
							}
						);
						var r;
					},
					linesForFontSize: function(r) {
						return Fa(r, a);
					},
					adjustFontSizeTo: function(r, $, t) {
						return (
							null == $ && ($ = "auto"),
							(function(r, $, t, a) {
								null == t && (t = a.baseFontSize),
									"%" === y(r) && (r = c(a.baseFontSize) * (c(r) / 100) + "px");
								var e = x(a.baseFontSize);
								r = e(r, "px", (t = e(t, "px")));
								var n = Ka(a);
								return (
									"auto" === $ && ($ = Fa(r, a)),
									{ fontSize: e(r, a.rhythmUnit, t), lineHeight: n($, t) }
								);
							})(r, $, t, a)
						);
					},
				});
		return (
			(p.scale = function(r) {
				var $ = parseInt(n.baseFontSize, 10),
					t =
						(function(r, $) {
							var t;
							return (
								null == r && (r = 0),
								null == $ && ($ = "golden"),
								(t = Ib($) ? $ : null != ba[$] ? ba[$] : ba.golden),
								Math.pow(t, r)
							);
						})(r, n.scaleRatio) *
							$ +
						"px";
				return p.adjustFontSizeTo(t);
			}),
			Object.assign({}, { options: n }, p, {
				createStyles: function() {
					return this.toString();
				},
				toJSON: function() {
					return (function(r, $) {
						var t = {},
							a = r.establishBaseline();
						(t = b(t, "html", {
							font:
								a.fontSize +
								"/" +
								a.lineHeight +
								" " +
								$.bodyFontFamily.map(X).join(","),
							boxSizing: "border-box",
							overflowY: "scroll",
						})),
							(t = b(t, ["*", "*:before", "*:after"], {
								boxSizing: "inherit",
							})),
							(t = b(t, "body", {
								color: $.bodyColor,
								fontFamily: $.bodyFontFamily.map(X).join(","),
								fontWeight: $.bodyWeight,
								wordWrap: "break-word",
								fontKerning: "normal",
								MozFontFeatureSettings: '"kern", "liga", "clig", "calt"',
								msFontFeatureSettings: '"kern", "liga", "clig", "calt"',
								WebkitFontFeatureSettings: '"kern", "liga", "clig", "calt"',
								fontFeatureSettings: '"kern", "liga", "clig", "calt"',
							})),
							(t = b(t, "img", { maxWidth: "100%" }));
						var e;
						(e = Sb($.blockMarginBottom)
							? r.rhythm($.blockMarginBottom)
							: Ub($.blockMarginBottom)
							? $.blockMarginBottom
							: r.rhythm(1)),
							(t = b(
								t,
								[
									"h1",
									"h2",
									"h3",
									"h4",
									"h5",
									"h6",
									"hgroup",
									"ul",
									"ol",
									"dl",
									"dd",
									"p",
									"figure",
									"pre",
									"table",
									"fieldset",
									"blockquote",
									"form",
									"noscript",
									"iframe",
									"img",
									"hr",
									"address",
								],
								{
									marginLeft: 0,
									marginRight: 0,
									marginTop: 0,
									paddingBottom: 0,
									paddingLeft: 0,
									paddingRight: 0,
									paddingTop: 0,
									marginBottom: e,
								}
							)),
							(t = b(t, "blockquote", {
								marginRight: r.rhythm(1),
								marginBottom: e,
								marginLeft: r.rhythm(1),
							})),
							(t = b(t, ["b", "strong", "dt", "th"], {
								fontWeight: $.boldWeight,
							})),
							(t = b(t, "hr", {
								background: Q(80),
								border: "none",
								height: "1px",
								marginBottom: "calc(" + e + " - 1px)",
							})),
							(t = b(t, ["ol", "ul"], {
								listStylePosition: "outside",
								listStyleImage: "none",
								marginLeft: r.rhythm(1),
							})),
							(t = b(t, "li", { marginBottom: "calc(" + e + " / 2)" })),
							(t = b(t, ["ol li", "ul li"], { paddingLeft: 0 })),
							(t = b(t, ["li > ol", "li > ul"], {
								marginLeft: r.rhythm(1),
								marginBottom: "calc(" + e + " / 2)",
								marginTop: "calc(" + e + " / 2)",
							})),
							(t = b(
								t,
								[
									"blockquote *:last-child",
									"li *:last-child",
									"p *:last-child",
								],
								{ marginBottom: 0 }
							)),
							(t = b(t, ["li > p"], { marginBottom: "calc(" + e + " / 2)" })),
							(t = b(
								t,
								["code", "kbd", "pre", "samp"],
								Object.assign({}, r.adjustFontSizeTo("85%"))
							)),
							((t = b(t, ["abbr", "acronym"], {
								borderBottom: "1px dotted " + Q(50),
								cursor: "help",
							}))["abbr[title]"] = {
								borderBottom: "1px dotted " + Q(50),
								cursor: "help",
								textDecoration: "none",
							}),
							(t = b(
								t,
								["table"],
								Object.assign({}, r.adjustFontSizeTo($.baseFontSize), {
									borderCollapse: "collapse",
									width: "100%",
								})
							)),
							(t = b(t, ["thead"], { textAlign: "left" })),
							(t = b(t, ["td,th"], {
								textAlign: "left",
								borderBottom: "1px solid " + Q(88),
								fontFeatureSettings: '"tnum"',
								MozFontFeatureSettings: '"tnum"',
								msFontFeatureSettings: '"tnum"',
								WebkitFontFeatureSettings: '"tnum"',
								paddingLeft: r.rhythm(2 / 3),
								paddingRight: r.rhythm(2 / 3),
								paddingTop: r.rhythm(0.5),
								paddingBottom: "calc(" + r.rhythm(0.5) + " - 1px)",
							})),
							(t = b(t, "th:first-child,td:first-child", { paddingLeft: 0 })),
							(t = b(t, "th:last-child,td:last-child", { paddingRight: 0 })),
							(t = b(t, ["h1", "h2", "h3", "h4", "h5", "h6"], {
								color: $.headerColor,
								fontFamily: $.headerFontFamily.map(X).join(","),
								fontWeight: $.headerWeight,
								textRendering: "optimizeLegibility",
							}));
						var n = r.scale(1),
							p = r.scale(0.6),
							d = r.scale(0.4),
							v = r.scale(0),
							o = r.scale(-0.2),
							i = r.scale(-0.3);
						return (
							J([n, p, d, v, o, i], function(r, a) {
								(t = ka(t, "h" + (a + 1) + ".fontSize", r.fontSize)),
									(t = ka(
										t,
										"h" + (a + 1) + ".lineHeight",
										$.headerLineHeight
									));
							}),
							g($.plugins) &&
								(t = Xa(
									$.plugins,
									function(t, a) {
										return W(t, a(r, $, t));
									},
									t
								)),
							$.overrideStyles &&
								s($.overrideStyles) &&
								(t = W(t, $.overrideStyles(r, $, t))),
							$.overrideThemeStyles &&
								s($.overrideThemeStyles) &&
								(t = W(t, $.overrideThemeStyles(r, $, t))),
							t
						);
					})(p, n);
				},
				toString: function() {
					return (
						(r = n),
						($ = this.toJSON()),
						(t = pa($)),
						r.includeNormalize && (t = "" + me + t),
						t
					);
					var r, $, t;
				},
				injectStyles: function() {
					if ("undefined" != typeof document)
						if (document.getElementById("typography.js"))
							document.getElementById(
								"typography.js"
							).innerHTML = this.toString();
						else {
							var r = document.createElement("style");
							(r.id = "typography.js"), (r.innerHTML = this.toString());
							var $ = document.head;
							$.firstChild ? $.insertBefore(r, $.firstChild) : $.appendChild(r);
						}
				},
			})
		);
	};
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = T;
	} else if (typeof define === "function" && define.amd) {
		define(function() {
			return T;
		});
	}
	return { "0prd": T };
});
