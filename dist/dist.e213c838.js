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
	var ab,
		S,
		T = {},
		oa = Object.getOwnPropertySymbols,
		bb = Object.prototype.hasOwnProperty,
		cb = Object.prototype.propertyIsEnumerable,
		db = (function() {
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
							bb.call(t, p) && (e[p] = t[p]);
						if (oa) {
							a = oa(t);
							for (var d = 0; d < a.length; d++)
								cb.call(t, a[d]) && (e[a[d]] = t[a[d]]);
						}
					}
					return e;
			  },
		U = function(r, $) {
			$ || ($ = [0, ""]), (r = String(r));
			var t = parseFloat(r, 10);
			return ($[0] = t), ($[1] = r.match(/[\d.\-\+]*\s*(.*)/)[1] || ""), $;
		},
		f = function(r) {
			return U(r)[0];
		},
		s = function(r) {
			return (
				null == r && (r = r),
				function($, t, a, e) {
					null == a && (a = r), null == e && (e = a);
					var n = U($)[1];
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
		pa = U,
		u = function(r) {
			return pa(r)[1];
		},
		c = function(r) {
			return pa(r)[0];
		},
		eb = {
			baseFontSize: "16px",
			baseLineHeight: 1.5,
			rhythmUnit: "rem",
			defaultRhythmBorderWidth: "1px",
			defaultRhythmBorderStyle: "solid",
			roundToNearestHalfLine: !0,
			minLinePadding: "2px",
		},
		qa = function(r, $) {
			var t,
				a = s($.baseFontSize),
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
		ra = function(r) {
			var $ = s(r.baseFontSize);
			return function(t, a, e) {
				null == t && (t = 1),
					null == a && (a = r.baseFontSize),
					null == e && (e = 0);
				var n = t * c(r.baseLineHeightInPx) - e + "px",
					p = $(n, r.rhythmUnit, a);
				return (
					"px" === u(p) && (p = Math.floor(c(p)) + u(p)),
					parseFloat(c(p).toFixed(5)) + u(p)
				);
			};
		},
		fb = "[object Number]",
		gb = Object.prototype.toString;
	function sa(r) {
		return !isNaN(parseFloat(r)) && isFinite(r);
	}
	(ab = function(r) {
		return (
			"number" == typeof r ||
			((function(r) {
				return !!r && "object" == typeof r;
			})(r) &&
				gb.call(r) == fb)
		);
	}),
		(S = {
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
	var D = function(r, $, t) {
			if (
				(void 0 === $ && ($ = 0),
				void 0 === t && (t = !1),
				"cool" === $
					? ($ = 237)
					: "slate" === $
					? ($ = 122)
					: "warm" === $ && ($ = 69),
				!sa($))
			)
				throw new Error("Hue is not a number");
			if (!sa(r)) throw new Error("Lightness is not a number");
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
		r =
			"undefined" != typeof window
				? window
				: "undefined" != typeof na
				? na
				: "undefined" != typeof self
				? self
				: {};
	function t(r, $) {
		return r(($ = { exports: {} }), $.exports), $.exports;
	}
	var hb,
		ta = "object" == typeof r && r && r.Object === Object && r,
		ib = "object" == typeof self && self && self.Object === Object && self,
		d = ta || ib || Function("return this")(),
		j = d.Symbol,
		ua = Object.prototype,
		jb = ua.hasOwnProperty,
		kb = ua.toString,
		v = j ? j.toStringTag : void 0,
		lb = function(r) {
			var $ = jb.call(r, v),
				t = r[v];
			try {
				r[v] = void 0;
				var a = !0;
			} catch (r) {}
			var e = kb.call(r);
			return a && ($ ? (r[v] = t) : delete r[v]), e;
		},
		mb = Object.prototype.toString,
		nb = function(r) {
			return mb.call(r);
		},
		ob = "[object Null]",
		pb = "[object Undefined]",
		va = j ? j.toStringTag : void 0,
		e = function(r) {
			return null == r
				? void 0 === r
					? pb
					: ob
				: va && va in Object(r)
				? lb(r)
				: nb(r);
		},
		h = function(r) {
			var $ = typeof r;
			return null != r && ("object" == $ || "function" == $);
		},
		qb = "[object AsyncFunction]",
		rb = "[object Function]",
		sb = "[object GeneratorFunction]",
		tb = "[object Proxy]",
		w = function(r) {
			if (!h(r)) return !1;
			var $ = e(r);
			return $ == rb || $ == sb || $ == qb || $ == tb;
		},
		V = d["__core-js_shared__"],
		wa = (hb = /[^.]+$/.exec((V && V.keys && V.keys.IE_PROTO) || ""))
			? "Symbol(src)_1." + hb
			: "",
		ub = function(r) {
			return !!wa && wa in r;
		},
		vb = Function.prototype.toString,
		k = function(r) {
			if (null != r) {
				try {
					return vb.call(r);
				} catch (r) {}
				try {
					return r + "";
				} catch (r) {}
			}
			return "";
		},
		wb = /^\[object .+?Constructor\]$/,
		xb = Function.prototype,
		yb = Object.prototype,
		zb = RegExp(
			"^" +
				xb.toString
					.call(yb.hasOwnProperty)
					.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
					.replace(
						/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
						"$1.*?"
					) +
				"$"
		),
		Ab = function(r) {
			return !(!h(r) || ub(r)) && (w(r) ? zb : wb).test(k(r));
		},
		Bb = function(r, $) {
			return null == r ? void 0 : r[$];
		},
		l = function(r, $) {
			var t = Bb(r, $);
			return Ab(t) ? t : void 0;
		},
		E = (function() {
			try {
				var r = l(Object, "defineProperty");
				return r({}, "", {}), r;
			} catch (r) {}
		})(),
		W = function(r, $, t) {
			"__proto__" == $ && E
				? E(r, $, { configurable: !0, enumerable: !0, value: t, writable: !0 })
				: (r[$] = t);
		},
		x = function(r, $) {
			return r === $ || (r != r && $ != $);
		},
		Cb = Object.prototype.hasOwnProperty,
		xa = function(r, $, t) {
			var a = r[$];
			(Cb.call(r, $) && x(a, t) && (void 0 !== t || $ in r)) || W(r, $, t);
		},
		g = Array.isArray,
		i = function(r) {
			return null != r && "object" == typeof r;
		},
		Db = "[object Symbol]",
		X = function(r) {
			return "symbol" == typeof r || (i(r) && e(r) == Db);
		},
		Eb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
		Fb = /^\w*$/,
		Y = function(r, $) {
			if (g(r)) return !1;
			var t = typeof r;
			return (
				!(
					"number" != t &&
					"symbol" != t &&
					"boolean" != t &&
					null != r &&
					!X(r)
				) ||
				Fb.test(r) ||
				!Eb.test(r) ||
				(null != $ && r in Object($))
			);
		},
		y = l(Object, "create"),
		Gb = function(r) {
			var $ = this.has(r) && delete this.__data__[r];
			return (this.size -= $ ? 1 : 0), $;
		},
		Hb = "__lodash_hash_undefined__",
		Ib = Object.prototype.hasOwnProperty,
		Jb = function(r) {
			var $ = this.__data__;
			if (y) {
				var t = $[r];
				return t === Hb ? void 0 : t;
			}
			return Ib.call($, r) ? $[r] : void 0;
		},
		Kb = Object.prototype.hasOwnProperty,
		Lb = function(r) {
			var $ = this.__data__;
			return y ? void 0 !== $[r] : Kb.call($, r);
		},
		Mb = "__lodash_hash_undefined__",
		Nb = function(r, $) {
			var t = this.__data__;
			return (
				(this.size += this.has(r) ? 0 : 1),
				(t[r] = y && void 0 === $ ? Mb : $),
				this
			);
		};
	function m(r) {
		var $ = -1,
			t = null == r ? 0 : r.length;
		for (this.clear(); ++$ < t; ) {
			var a = r[$];
			this.set(a[0], a[1]);
		}
	}
	(m.prototype.clear = function() {
		(this.__data__ = y ? y(null) : {}), (this.size = 0);
	}),
		(m.prototype.delete = Gb),
		(m.prototype.get = Jb),
		(m.prototype.has = Lb),
		(m.prototype.set = Nb);
	var ya = m,
		F = function(r, $) {
			for (var t = r.length; t--; ) if (x(r[t][0], $)) return t;
			return -1;
		},
		Ob = Array.prototype.splice,
		Pb = function(r) {
			var $ = this.__data__,
				t = F($, r);
			return !(
				t < 0 ||
				(t == $.length - 1 ? $.pop() : Ob.call($, t, 1), --this.size, 0)
			);
		},
		Qb = function(r) {
			var $ = this.__data__,
				t = F($, r);
			return t < 0 ? void 0 : $[t][1];
		},
		Rb = function(r) {
			return F(this.__data__, r) > -1;
		},
		Sb = function(r, $) {
			var t = this.__data__,
				a = F(t, r);
			return a < 0 ? (++this.size, t.push([r, $])) : (t[a][1] = $), this;
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
		(this.__data__ = []), (this.size = 0);
	}),
		(n.prototype.delete = Pb),
		(n.prototype.get = Qb),
		(n.prototype.has = Rb),
		(n.prototype.set = Sb);
	var G = n,
		z = l(d, "Map"),
		Tb = function(r) {
			var $ = typeof r;
			return "string" == $ || "number" == $ || "symbol" == $ || "boolean" == $
				? "__proto__" !== r
				: null === r;
		},
		H = function(r, $) {
			var t = r.__data__;
			return Tb($) ? t["string" == typeof $ ? "string" : "hash"] : t.map;
		},
		Ub = function(r) {
			var $ = H(this, r).delete(r);
			return (this.size -= $ ? 1 : 0), $;
		},
		Vb = function(r) {
			return H(this, r).get(r);
		},
		Wb = function(r) {
			return H(this, r).has(r);
		},
		Xb = function(r, $) {
			var t = H(this, r),
				a = t.size;
			return t.set(r, $), (this.size += t.size == a ? 0 : 1), this;
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
		(this.size = 0),
			(this.__data__ = {
				hash: new ya(),
				map: new (z || G)(),
				string: new ya(),
			});
	}),
		(o.prototype.delete = Ub),
		(o.prototype.get = Vb),
		(o.prototype.has = Wb),
		(o.prototype.set = Xb);
	var I = o,
		Yb = "Expected a function";
	function Z(r, $) {
		if ("function" != typeof r || (null != $ && "function" != typeof $))
			throw new TypeError(Yb);
		var t = function() {
			var a = arguments,
				e = $ ? $.apply(this, a) : a[0],
				n = t.cache;
			if (n.has(e)) return n.get(e);
			var p = r.apply(this, a);
			return (t.cache = n.set(e, p) || n), p;
		};
		return (t.cache = new (Z.Cache || I)()), t;
	}
	Z.Cache = I;
	var Zb = Z,
		$b = 500,
		_b = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
		ac = /\\(\\)?/g,
		bc = (function(r) {
			var $ = Zb(
					function(r) {
						var $ = [];
						return (
							46 === r.charCodeAt(0) && $.push(""),
							r.replace(_b, function(r, t, a, e) {
								$.push(a ? e.replace(ac, "$1") : t || r);
							}),
							$
						);
					},
					function(r) {
						return t.size === $b && t.clear(), r;
					}
				),
				t = $.cache;
			return $;
		})(),
		cc = function(r, $) {
			for (var t = -1, a = null == r ? 0 : r.length, e = Array(a); ++t < a; )
				e[t] = $(r[t], t, r);
			return e;
		},
		dc = 1 / 0,
		za = j ? j.prototype : void 0,
		Aa = za ? za.toString : void 0,
		ec = function r($) {
			if ("string" == typeof $) return $;
			if (g($)) return cc($, r) + "";
			if (X($)) return Aa ? Aa.call($) : "";
			var t = $ + "";
			return "0" == t && 1 / $ == -dc ? "-0" : t;
		},
		fc = function(r) {
			return null == r ? "" : ec(r);
		},
		_ = function(r, $) {
			return g(r) ? r : Y(r, $) ? [r] : bc(fc(r));
		},
		gc = 9007199254740991,
		hc = /^(?:0|[1-9]\d*)$/,
		J = function(r, $) {
			var t = typeof r;
			return (
				!!($ = null == $ ? gc : $) &&
				("number" == t || ("symbol" != t && hc.test(r))) &&
				r > -1 &&
				r % 1 == 0 &&
				r < $
			);
		},
		ic = 1 / 0,
		A = function(r) {
			if ("string" == typeof r || X(r)) return r;
			var $ = r + "";
			return "0" == $ && 1 / r == -ic ? "-0" : $;
		},
		jc = function(r, $, t, a) {
			if (!h(r)) return r;
			for (
				var e = -1, n = ($ = _($, r)).length, p = n - 1, d = r;
				null != d && ++e < n;

			) {
				var v = A($[e]),
					o = t;
				if (e != p) {
					var i = d[v];
					void 0 === (o = a ? a(i, v, d) : void 0) &&
						(o = h(i) ? i : J($[e + 1]) ? [] : {});
				}
				xa(d, v, o), (d = d[v]);
			}
			return r;
		},
		aa = function(r, $, t) {
			return null == r ? r : jc(r, $, t);
		},
		kc = function(r, $) {
			for (
				var t = -1, a = null == r ? 0 : r.length;
				++t < a && !1 !== $(r[t], t, r);

			);
			return r;
		},
		Ba = function(r, $, t) {
			for (var a = -1, e = Object(r), n = t(r), p = n.length; p--; ) {
				var d = n[++a];
				if (!1 === $(e[d], d, e)) break;
			}
			return r;
		},
		lc = function(r, $) {
			for (var t = -1, a = Array(r); ++t < r; ) a[t] = $(t);
			return a;
		},
		mc = "[object Arguments]",
		Ca = function(r) {
			return i(r) && e(r) == mc;
		},
		Da = Object.prototype,
		nc = Da.hasOwnProperty,
		oc = Da.propertyIsEnumerable,
		K = Ca(
			(function() {
				return arguments;
			})()
		)
			? Ca
			: function(r) {
					return i(r) && nc.call(r, "callee") && !oc.call(r, "callee");
			  },
		pc = function() {
			return !1;
		},
		L = t(function(r, $) {
			var t = $ && !$.nodeType && $,
				a = t && r && !r.nodeType && r,
				e = a && a.exports === t ? d.Buffer : void 0;
			r.exports = (e ? e.isBuffer : void 0) || pc;
		}),
		qc = 9007199254740991,
		ba = function(r) {
			return "number" == typeof r && r > -1 && r % 1 == 0 && r <= qc;
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
	var rc = function(r) {
			return i(r) && ba(r.length) && !!a[e(r)];
		},
		sc = function(r) {
			return function($) {
				return r($);
			};
		},
		Ea = t(function(r, $) {
			var t = $ && !$.nodeType && $,
				a = t && r && !r.nodeType && r,
				e = a && a.exports === t && ta.process,
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
		Fa = Ea && Ea.isTypedArray,
		ca = Fa ? sc(Fa) : rc,
		tc = Object.prototype.hasOwnProperty,
		Ga = function(r, $) {
			var t = g(r),
				a = !t && K(r),
				e = !t && !a && L(r),
				n = !t && !a && !e && ca(r),
				p = t || a || e || n,
				d = p ? lc(r.length, String) : [],
				v = d.length;
			for (var o in r)
				(!$ && !tc.call(r, o)) ||
					(p &&
						("length" == o ||
							(e && ("offset" == o || "parent" == o)) ||
							(n &&
								("buffer" == o || "byteLength" == o || "byteOffset" == o)) ||
							J(o, v))) ||
					d.push(o);
			return d;
		},
		uc = Object.prototype,
		da = function(r) {
			var $ = r && r.constructor;
			return r === (("function" == typeof $ && $.prototype) || uc);
		},
		Ha = function(r, $) {
			return function(t) {
				return r($(t));
			};
		},
		vc = Ha(Object.keys, Object),
		wc = Object.prototype.hasOwnProperty,
		xc = function(r) {
			if (!da(r)) return vc(r);
			var $ = [];
			for (var t in Object(r)) wc.call(r, t) && "constructor" != t && $.push(t);
			return $;
		},
		B = function(r) {
			return null != r && ba(r.length) && !w(r);
		},
		ea = function(r) {
			return B(r) ? Ga(r) : xc(r);
		},
		Ia = function(r, $) {
			if (null == r) return r;
			if (!B(r))
				return (function(r, $) {
					return r && Ba(r, $, ea);
				})(r, $);
			for (
				var t = r.length, a = -1, e = Object(r);
				++a < t && !1 !== $(e[a], a, e);

			);
			return r;
		},
		M = function(r) {
			return r;
		},
		yc = function(r) {
			return "function" == typeof r ? r : M;
		},
		N = function(r, $) {
			return (g(r) ? kc : Ia)(r, yc($));
		},
		zc = "[object Number]",
		Ac = function(r) {
			return "number" == typeof r || (i(r) && e(r) == zc);
		},
		Bc = "[object String]",
		Cc = function(r) {
			return "string" == typeof r || (!g(r) && i(r) && e(r) == Bc);
		},
		Dc = function(r) {
			var $ = this.__data__,
				t = $.delete(r);
			return (this.size = $.size), t;
		},
		Ec = function(r) {
			return this.__data__.get(r);
		},
		Fc = function(r) {
			return this.__data__.has(r);
		},
		Gc = 200,
		Hc = function(r, $) {
			var t = this.__data__;
			if (t instanceof G) {
				var a = t.__data__;
				if (!z || a.length < Gc - 1)
					return a.push([r, $]), (this.size = ++t.size), this;
				t = this.__data__ = new I(a);
			}
			return t.set(r, $), (this.size = t.size), this;
		};
	function p(r) {
		var $ = (this.__data__ = new G(r));
		this.size = $.size;
	}
	(p.prototype.clear = function() {
		(this.__data__ = new G()), (this.size = 0);
	}),
		(p.prototype.delete = Dc),
		(p.prototype.get = Ec),
		(p.prototype.has = Fc),
		(p.prototype.set = Hc);
	var C = p,
		fa = function(r, $, t) {
			((void 0 === t || x(r[$], t)) && (void 0 !== t || $ in r)) || W(r, $, t);
		},
		Ic = t(function(r, $) {
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
		O = d.Uint8Array,
		Jc = function(r) {
			var $ = new r.constructor(r.byteLength);
			return new O($).set(new O(r)), $;
		},
		Kc = function(r, $) {
			var t = $ ? Jc(r.buffer) : r.buffer;
			return new r.constructor(t, r.byteOffset, r.length);
		},
		Lc = function(r, $) {
			var t = -1,
				a = r.length;
			for ($ || ($ = Array(a)); ++t < a; ) $[t] = r[t];
			return $;
		},
		Ja = Object.create,
		Mc = (function() {
			function r() {}
			return function($) {
				if (!h($)) return {};
				if (Ja) return Ja($);
				r.prototype = $;
				var t = new r();
				return (r.prototype = void 0), t;
			};
		})(),
		Ka = Ha(Object.getPrototypeOf, Object),
		Nc = function(r) {
			return "function" != typeof r.constructor || da(r) ? {} : Mc(Ka(r));
		},
		Oc = function(r) {
			return i(r) && B(r);
		},
		Pc = "[object Object]",
		Qc = Function.prototype,
		Rc = Object.prototype,
		La = Qc.toString,
		Sc = Rc.hasOwnProperty,
		Tc = La.call(Object),
		Uc = function(r) {
			if (!i(r) || e(r) != Pc) return !1;
			var $ = Ka(r);
			if (null === $) return !0;
			var t = Sc.call($, "constructor") && $.constructor;
			return "function" == typeof t && t instanceof t && La.call(t) == Tc;
		},
		ga = function(r, $) {
			return "__proto__" == $ ? void 0 : r[$];
		},
		Vc = function(r, $, t, a) {
			var e = !t;
			t || (t = {});
			for (var n = -1, p = $.length; ++n < p; ) {
				var d = $[n],
					v = a ? a(t[d], r[d], d, t, r) : void 0;
				void 0 === v && (v = r[d]), e ? W(t, d, v) : xa(t, d, v);
			}
			return t;
		},
		Wc = function(r) {
			var $ = [];
			if (null != r) for (var t in Object(r)) $.push(t);
			return $;
		},
		Xc = Object.prototype.hasOwnProperty,
		Yc = function(r) {
			if (!h(r)) return Wc(r);
			var $ = da(r),
				t = [];
			for (var a in r)
				("constructor" != a || (!$ && Xc.call(r, a))) && t.push(a);
			return t;
		},
		Ma = function(r) {
			return B(r) ? Ga(r, !0) : Yc(r);
		},
		Zc = function(r) {
			return Vc(r, Ma(r));
		},
		$c = function(r, $, t, a, e, n, p) {
			var d = ga(r, t),
				v = ga($, t),
				o = p.get(v);
			if (o) fa(r, t, o);
			else {
				var i = n ? n(d, v, t + "", r, $, p) : void 0,
					u = void 0 === i;
				if (u) {
					var c = g(v),
						l = !c && L(v),
						f = !c && !l && ca(v);
					(i = v),
						c || l || f
							? g(d)
								? (i = d)
								: Oc(d)
								? (i = Lc(d))
								: l
								? ((u = !1), (i = Ic(v, !0)))
								: f
								? ((u = !1), (i = Kc(v, !0)))
								: (i = [])
							: Uc(v) || K(v)
							? ((i = d),
							  K(d) ? (i = Zc(d)) : (!h(d) || (a && w(d))) && (i = Nc(v)))
							: (u = !1);
				}
				u && (p.set(v, i), e(i, v, a, n, p), p.delete(v)), fa(r, t, i);
			}
		},
		_c = function r($, t, a, e, n) {
			$ !== t &&
				Ba(
					t,
					function(p, d) {
						if (h(p)) n || (n = new C()), $c($, t, d, a, r, e, n);
						else {
							var v = e ? e(ga($, d), p, d + "", $, t, n) : void 0;
							void 0 === v && (v = p), fa($, d, v);
						}
					},
					Ma
				);
		},
		ad = function(r, $, t) {
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
		Na = Math.max,
		bd = function(r, $, t) {
			return (
				($ = Na(void 0 === $ ? r.length - 1 : $, 0)),
				function() {
					for (
						var a = arguments, e = -1, n = Na(a.length - $, 0), p = Array(n);
						++e < n;

					)
						p[e] = a[$ + e];
					e = -1;
					for (var d = Array($ + 1); ++e < $; ) d[e] = a[e];
					return (d[$] = t(p)), ad(r, this, d);
				}
			);
		},
		cd = function(r) {
			return function() {
				return r;
			};
		},
		dd = 800,
		ed = 16,
		fd = Date.now,
		gd = (function(r) {
			var $ = 0,
				t = 0;
			return function() {
				var a = fd(),
					e = ed - (a - t);
				if (((t = a), e > 0)) {
					if (++$ >= dd) return arguments[0];
				} else $ = 0;
				return r.apply(void 0, arguments);
			};
		})(
			E
				? function(r, $) {
						return E(r, "toString", {
							configurable: !0,
							enumerable: !1,
							value: cd($),
							writable: !0,
						});
				  }
				: M
		),
		hd = function(r, $) {
			return gd(bd(r, $, M), r + "");
		},
		id = function(r, $, t) {
			if (!h(t)) return !1;
			var a = typeof $;
			return (
				!!("number" == a ? B(t) && J($, t.length) : "string" == a && $ in t) &&
				x(t[$], r)
			);
		},
		ha = (function(r) {
			return hd(function($, t) {
				var a = -1,
					e = t.length,
					n = e > 1 ? t[e - 1] : void 0,
					p = e > 2 ? t[2] : void 0;
				for (
					n = r.length > 3 && "function" == typeof n ? (e--, n) : void 0,
						p && id(t[0], t[1], p) && ((n = e < 3 ? void 0 : n), (e = 1)),
						$ = Object($);
					++a < e;

				) {
					var d = t[a];
					d && r($, d, a);
				}
				return $;
			});
		})(function(r, $, t) {
			_c(r, $, t);
		}),
		jd = function(r, $, t, a) {
			var e = -1,
				n = null == r ? 0 : r.length;
			for (a && n && (t = r[++e]); ++e < n; ) t = $(t, r[e], e, r);
			return t;
		},
		kd = "__lodash_hash_undefined__",
		ld = function(r) {
			return this.__data__.has(r);
		};
	function P(r) {
		var $ = -1,
			t = null == r ? 0 : r.length;
		for (this.__data__ = new I(); ++$ < t; ) this.add(r[$]);
	}
	(P.prototype.add = P.prototype.push = function(r) {
		return this.__data__.set(r, kd), this;
	}),
		(P.prototype.has = ld);
	var md = P,
		nd = function(r, $) {
			for (var t = -1, a = null == r ? 0 : r.length; ++t < a; )
				if ($(r[t], t, r)) return !0;
			return !1;
		},
		od = function(r, $) {
			return r.has($);
		},
		pd = 1,
		qd = 2,
		Oa = function(r, $, t, a, e, n) {
			var p = t & pd,
				d = r.length,
				v = $.length;
			if (d != v && !(p && v > d)) return !1;
			var o = n.get(r);
			if (o && n.get($)) return o == $;
			var i = -1,
				u = !0,
				c = t & qd ? new md() : void 0;
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
						!nd($, function(r, $) {
							if (!od(c, $) && (l === r || e(l, r, t, a, n))) return c.push($);
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
		rd = function(r) {
			var $ = -1,
				t = Array(r.size);
			return (
				r.forEach(function(r, a) {
					t[++$] = [a, r];
				}),
				t
			);
		},
		sd = function(r) {
			var $ = -1,
				t = Array(r.size);
			return (
				r.forEach(function(r) {
					t[++$] = r;
				}),
				t
			);
		},
		td = 1,
		ud = 2,
		vd = "[object Boolean]",
		wd = "[object Date]",
		xd = "[object Error]",
		yd = "[object Map]",
		zd = "[object Number]",
		Ad = "[object RegExp]",
		Bd = "[object Set]",
		Cd = "[object String]",
		Dd = "[object Symbol]",
		Ed = "[object ArrayBuffer]",
		Fd = "[object DataView]",
		Pa = j ? j.prototype : void 0,
		ia = Pa ? Pa.valueOf : void 0,
		Gd = function(r, $, t, a, e, n, p) {
			switch (t) {
				case Fd:
					if (r.byteLength != $.byteLength || r.byteOffset != $.byteOffset)
						return !1;
					(r = r.buffer), ($ = $.buffer);
				case Ed:
					return !(r.byteLength != $.byteLength || !n(new O(r), new O($)));
				case vd:
				case wd:
				case zd:
					return x(+r, +$);
				case xd:
					return r.name == $.name && r.message == $.message;
				case Ad:
				case Cd:
					return r == $ + "";
				case yd:
					var d = rd;
				case Bd:
					if ((d || (d = sd), r.size != $.size && !(a & td))) return !1;
					var v = p.get(r);
					if (v) return v == $;
					(a |= ud), p.set(r, $);
					var o = Oa(d(r), d($), a, e, n, p);
					return p.delete(r), o;
				case Dd:
					if (ia) return ia.call(r) == ia.call($);
			}
			return !1;
		},
		Hd = function(r, $) {
			for (var t = -1, a = $.length, e = r.length; ++t < a; ) r[e + t] = $[t];
			return r;
		},
		Id = function(r, $, t) {
			var a = $(r);
			return g(r) ? a : Hd(a, t(r));
		},
		Jd = function(r, $) {
			for (var t = -1, a = null == r ? 0 : r.length, e = 0, n = []; ++t < a; ) {
				var p = r[t];
				$(p, t, r) && (n[e++] = p);
			}
			return n;
		},
		Kd = Object.prototype.propertyIsEnumerable,
		Qa = Object.getOwnPropertySymbols,
		Ld = Qa
			? function(r) {
					return null == r
						? []
						: ((r = Object(r)),
						  Jd(Qa(r), function($) {
								return Kd.call(r, $);
						  }));
			  }
			: function() {
					return [];
			  },
		Ra = function(r) {
			return Id(r, ea, Ld);
		},
		Md = 1,
		Nd = Object.prototype.hasOwnProperty,
		Od = function(r, $, t, a, e, n) {
			var p = t & Md,
				d = Ra(r),
				v = d.length;
			if (v != Ra($).length && !p) return !1;
			for (var o = v; o--; ) {
				var i = d[o];
				if (!(p ? i in $ : Nd.call($, i))) return !1;
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
		$ = l(d, "DataView"),
		ja = l(d, "Promise"),
		ka = l(d, "Set"),
		la = l(d, "WeakMap"),
		Pd = k($),
		Qd = k(z),
		Rd = k(ja),
		Sd = k(ka),
		Td = k(la),
		q = e;
	(($ && "[object DataView]" != q(new $(new ArrayBuffer(1)))) ||
		(z && "[object Map]" != q(new z())) ||
		(ja && "[object Promise]" != q(ja.resolve())) ||
		(ka && "[object Set]" != q(new ka())) ||
		(la && "[object WeakMap]" != q(new la()))) &&
		(q = function(r) {
			var $ = e(r),
				t = "[object Object]" == $ ? r.constructor : void 0,
				a = t ? k(t) : "";
			if (a)
				switch (a) {
					case Pd:
						return "[object DataView]";
					case Qd:
						return "[object Map]";
					case Rd:
						return "[object Promise]";
					case Sd:
						return "[object Set]";
					case Td:
						return "[object WeakMap]";
				}
			return $;
		});
	var Q,
		Sa = q,
		Ud = 1,
		Ta = "[object Arguments]",
		Ua = "[object Array]",
		R = "[object Object]",
		Va = Object.prototype.hasOwnProperty,
		Vd = function(r, $, t, a, e, n) {
			var p = g(r),
				d = g($),
				v = p ? Ua : Sa(r),
				o = d ? Ua : Sa($),
				i = (v = v == Ta ? R : v) == R,
				u = (o = o == Ta ? R : o) == R,
				c = v == o;
			if (c && L(r)) {
				if (!L($)) return !1;
				(p = !0), (i = !1);
			}
			if (c && !i)
				return (
					n || (n = new C()),
					p || ca(r) ? Oa(r, $, t, a, e, n) : Gd(r, $, v, t, a, e, n)
				);
			if (!(t & Ud)) {
				var l = i && Va.call(r, "__wrapped__"),
					f = u && Va.call($, "__wrapped__");
				if (l || f) {
					var s = l ? r.value() : r,
						h = f ? $.value() : $;
					return n || (n = new C()), e(s, h, t, a, n);
				}
			}
			return !!c && (n || (n = new C()), Od(r, $, t, a, e, n));
		},
		Wa = function r($, t, a, e, n) {
			return (
				$ === t ||
				(null == $ || null == t || (!i($) && !i(t))
					? $ != $ && t != t
					: Vd($, t, a, e, r, n))
			);
		},
		Wd = 1,
		Xd = 2,
		Yd = function(r, $, t, a) {
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
					if (!(void 0 === c ? Wa(i, o, Wd | Xd, a, u) : c)) return !1;
				}
			}
			return !0;
		},
		Xa = function(r) {
			return r == r && !h(r);
		},
		Zd = function(r) {
			for (var $ = ea(r), t = $.length; t--; ) {
				var a = $[t],
					e = r[a];
				$[t] = [a, e, Xa(e)];
			}
			return $;
		},
		Ya = function(r, $) {
			return function(t) {
				return null != t && t[r] === $ && (void 0 !== $ || r in Object(t));
			};
		},
		$d = function(r) {
			var $ = Zd(r);
			return 1 == $.length && $[0][2]
				? Ya($[0][0], $[0][1])
				: function(t) {
						return t === r || Yd(t, r, $);
				  };
		},
		Za = function(r, $) {
			for (var t = 0, a = ($ = _($, r)).length; null != r && t < a; )
				r = r[A($[t++])];
			return t && t == a ? r : void 0;
		},
		_d = function(r, $, t) {
			var a = null == r ? void 0 : Za(r, $);
			return void 0 === a ? t : a;
		},
		ae = function(r, $) {
			return null != r && $ in Object(r);
		},
		be = function(r, $, t) {
			for (var a = -1, e = ($ = _($, r)).length, n = !1; ++a < e; ) {
				var p = A($[a]);
				if (!(n = null != r && t(r, p))) break;
				r = r[p];
			}
			return n || ++a != e
				? n
				: !!(e = null == r ? 0 : r.length) &&
						ba(e) &&
						J(p, e) &&
						(g(r) || K(r));
		},
		ce = function(r, $) {
			return null != r && be(r, $, ae);
		},
		de = 1,
		ee = 2,
		fe = function(r, $) {
			return Y(r) && Xa($)
				? Ya(A(r), $)
				: function(t) {
						var a = _d(t, r);
						return void 0 === a && a === $ ? ce(t, r) : Wa($, a, de | ee);
				  };
		},
		ge = function(r) {
			return function($) {
				return null == $ ? void 0 : $[r];
			};
		},
		he = function(r) {
			return function($) {
				return Za($, r);
			};
		},
		ie = function(r) {
			return Y(r) ? ge(A(r)) : he(r);
		},
		je = function(r) {
			return "function" == typeof r
				? r
				: null == r
				? M
				: "object" == typeof r
				? g(r)
					? fe(r[0], r[1])
					: $d(r)
				: ie(r);
		},
		ke = function(r, $, t, a, e) {
			return (
				e(r, function(r, e, n) {
					t = a ? ((a = !1), r) : $(t, r, e, n);
				}),
				t
			);
		},
		$a = function(r, $, t) {
			var a = g(r) ? jd : ke,
				e = arguments.length < 3;
			return a(r, je($, 4), t, e, Ia);
		},
		b = function(r, $, t) {
			var a;
			return (
				void 0 === r && (r = {}),
				(a = g($) ? $ : [$]),
				N(a, function($) {
					N(t, function(t, a) {
						aa(r, $ + "." + a, t);
					});
				}),
				r
			);
		},
		le = [
			"inherit",
			"default",
			"serif",
			"sans-serif",
			"monospace",
			"fantasy",
			"cursive",
			"-apple-system",
		],
		ma = function(r) {
			return -1 !== le.indexOf(r) ? r : "'" + r + "'";
		},
		me = t(function(r, $) {
			Object.defineProperty($, "__esModule", { value: !0 }),
				($.default =
					"html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}");
		}),
		ne =
			(Q = me) &&
			Q.__esModule &&
			Object.prototype.hasOwnProperty.call(Q, "default")
				? Q.default
				: Q,
		_a = function(r) {
			return $a(
				r,
				function(r, $, t) {
					return (
						(r += t + "{"),
						N($, function($, t) {
							if (h($)) {
								var a = {};
								(a[t] = $), (r += _a(a));
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
			n = db(
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
				(t = JSON.parse(JSON.stringify(eb))),
				(a = Object.assign({}, t, $)),
				(e = s(a.baseFontSize)),
				u(a.baseLineHeight)
					? (c(e(a.baseFontSize, "px")),
					  (a.baseLineHeightInPx = e(a.baseLineHeight, "px")))
					: (a.baseLineHeightInPx =
							c(a.baseFontSize) * a.baseLineHeight + "px"),
				{
					rhythm: ra(a),
					establishBaseline: function() {
						return (
							s((r = a).baseFontSize),
							{
								fontSize: (c(r.baseFontSize) / 16) * 100 + "%",
								lineHeight: r.baseLineHeight.toString(),
							}
						);
						var r;
					},
					linesForFontSize: function(r) {
						return qa(r, a);
					},
					adjustFontSizeTo: function(r, $, t) {
						return (
							null == $ && ($ = "auto"),
							(function(r, $, t, a) {
								null == t && (t = a.baseFontSize),
									"%" === u(r) && (r = c(a.baseFontSize) * (c(r) / 100) + "px");
								var e = s(a.baseFontSize);
								r = e(r, "px", (t = e(t, "px")));
								var n = ra(a);
								return (
									"auto" === $ && ($ = qa(r, a)),
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
								(t = ab($) ? $ : null != S[$] ? S[$] : S.golden),
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
								$.bodyFontFamily.map(ma).join(","),
							boxSizing: "border-box",
							overflowY: "scroll",
						})),
							(t = b(t, ["*", "*:before", "*:after"], {
								boxSizing: "inherit",
							})),
							(t = b(t, "body", {
								color: $.bodyColor,
								fontFamily: $.bodyFontFamily.map(ma).join(","),
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
						(e = Ac($.blockMarginBottom)
							? r.rhythm($.blockMarginBottom)
							: Cc($.blockMarginBottom)
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
								background: D(80),
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
								borderBottom: "1px dotted " + D(50),
								cursor: "help",
							}))["abbr[title]"] = {
								borderBottom: "1px dotted " + D(50),
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
								borderBottom: "1px solid " + D(88),
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
								fontFamily: $.headerFontFamily.map(ma).join(","),
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
							N([n, p, d, v, o, i], function(r, a) {
								(t = aa(t, "h" + (a + 1) + ".fontSize", r.fontSize)),
									(t = aa(
										t,
										"h" + (a + 1) + ".lineHeight",
										$.headerLineHeight
									));
							}),
							g($.plugins) &&
								(t = $a(
									$.plugins,
									function(t, a) {
										return ha(t, a(r, $, t));
									},
									t
								)),
							$.overrideStyles &&
								w($.overrideStyles) &&
								(t = ha(t, $.overrideStyles(r, $, t))),
							$.overrideThemeStyles &&
								w($.overrideThemeStyles) &&
								(t = ha(t, $.overrideThemeStyles(r, $, t))),
							t
						);
					})(p, n);
				},
				toString: function() {
					return (
						(r = n),
						($ = this.toJSON()),
						(t = _a($)),
						r.includeNormalize && (t = "" + ne + t),
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
