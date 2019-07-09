parcelRequire = (function(e, r, t, n) {
	var i,
		o = "function" == typeof parcelRequire && parcelRequire,
		u = "function" == typeof require && require;
	function f(t, n) {
		if (!r[t]) {
			if (!e[t]) {
				var i = "function" == typeof parcelRequire && parcelRequire;
				if (!n && i) return i(t, !0);
				if (o) return o(t, !0);
				if (u && "string" == typeof t) return u(t);
				var c = new Error("Cannot find module '" + t + "'");
				throw ((c.code = "MODULE_NOT_FOUND"), c);
			}
			(p.resolve = function(r) {
				return e[t][1][r] || r;
			}),
				(p.cache = {});
			var l = (r[t] = new f.Module(t));
			e[t][0].call(l.exports, p, l, l.exports, this);
		}
		return r[t].exports;
		function p(e) {
			return f(p.resolve(e));
		}
	}
	(f.isParcelRequire = !0),
		(f.Module = function(e) {
			(this.id = e), (this.bundle = f), (this.exports = {});
		}),
		(f.modules = e),
		(f.cache = r),
		(f.parent = o),
		(f.register = function(r, t) {
			e[r] = [
				function(e, r) {
					r.exports = t;
				},
				{},
			];
		});
	for (var c = 0; c < t.length; c++)
		try {
			f(t[c]);
		} catch (e) {
			i || (i = e);
		}
	if (t.length) {
		var l = f(t[t.length - 1]);
		"object" == typeof exports && "undefined" != typeof module
			? (module.exports = l)
			: "function" == typeof define && define.amd
			? define(function() {
					return l;
			  })
			: n && (this[n] = l);
	}
	if (((parcelRequire = f), i)) throw i;
	return f;
})(
	{
		"0prd": [
			function(require, module, exports) {
				var global = arguments[3];
				var t,
					e,
					n = arguments[3],
					r = Object.getOwnPropertySymbols,
					o = Object.prototype.hasOwnProperty,
					i = Object.prototype.propertyIsEnumerable,
					a = (function() {
						try {
							if (!Object.assign) return !1;
							var t = new String("abc");
							if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
								return !1;
							for (var e = {}, n = 0; n < 10; n++)
								e["_" + String.fromCharCode(n)] = n;
							if (
								"0123456789" !==
								Object.getOwnPropertyNames(e)
									.map(function(t) {
										return e[t];
									})
									.join("")
							)
								return !1;
							var r = {};
							return (
								"abcdefghijklmnopqrst".split("").forEach(function(t) {
									r[t] = t;
								}),
								"abcdefghijklmnopqrst" ===
									Object.keys(Object.assign({}, r)).join("")
							);
						} catch (t) {
							return !1;
						}
					})()
						? Object.assign
						: function(t, e) {
								for (
									var n,
										a,
										u = (function(t) {
											if (null == t)
												throw new TypeError(
													"Object.assign cannot be called with null or undefined"
												);
											return Object(t);
										})(t),
										c = 1;
									c < arguments.length;
									c++
								) {
									for (var l in (n = Object(arguments[c])))
										o.call(n, l) && (u[l] = n[l]);
									if (r) {
										a = r(n);
										for (var f = 0; f < a.length; f++)
											i.call(n, a[f]) && (u[a[f]] = n[a[f]]);
									}
								}
								return u;
						  },
					u = function(t, e) {
						e || (e = [0, ""]), (t = String(t));
						var n = parseFloat(t, 10);
						return (
							(e[0] = n), (e[1] = t.match(/[\d.\-\+]*\s*(.*)/)[1] || ""), e
						);
					},
					c = function(t) {
						return u(t)[0];
					},
					l = function(t) {
						return (
							null == t && (t = t),
							function(e, n, r, o) {
								null == r && (r = t), null == o && (o = r);
								var i = u(e)[1];
								if (i === n) return e;
								var a = c(e);
								if ("px" !== i)
									if ("em" === i) a = c(e) * c(r);
									else if ("rem" === i) a = c(e) * c(t);
									else {
										if ("ex" !== i) return e;
										a = c(e) * c(r) * 2;
									}
								var l = a;
								if ("px" !== n)
									if ("em" === n) l = a / c(o);
									else if ("rem" === n) l = a / c(t);
									else {
										if ("ex" !== n) return e;
										l = a / c(o) / 2;
									}
								return parseFloat(l.toFixed(5)) + n;
							}
						);
					},
					f = u,
					s = function(t) {
						return f(t)[1];
					},
					p = function(t) {
						return f(t)[0];
					},
					h = {
						baseFontSize: "16px",
						baseLineHeight: 1.5,
						rhythmUnit: "rem",
						defaultRhythmBorderWidth: "1px",
						defaultRhythmBorderStyle: "solid",
						roundToNearestHalfLine: !0,
						minLinePadding: "2px",
					},
					d = function(t, e) {
						var n,
							r = l(e.baseFontSize),
							o = p(r(t, "px")),
							i = p(e.baseLineHeightInPx),
							a = p(r(e.minLinePadding, "px"));
						return (
							(n = e.roundToNearestHalfLine
								? Math.ceil((2 * o) / i) / 2
								: Math.ceil(o / i)) *
								i -
								o <
								2 * a && (n += e.roundToNearestHalfLine ? 0.5 : 1),
							n
						);
					},
					b = function(t) {
						var e = l(t.baseFontSize);
						return function(n, r, o) {
							null == n && (n = 1),
								null == r && (r = t.baseFontSize),
								null == o && (o = 0);
							var i = n * p(t.baseLineHeightInPx) - o + "px",
								a = e(i, t.rhythmUnit, r);
							return (
								"px" === s(a) && (a = Math.floor(p(a)) + s(a)),
								parseFloat(p(a).toFixed(5)) + s(a)
							);
						};
					},
					g = "[object Number]",
					y = Object.prototype.toString;
				function v(t) {
					return !isNaN(parseFloat(t)) && isFinite(t);
				}
				(t = function(t) {
					return (
						"number" == typeof t ||
						((function(t) {
							return !!t && "object" == typeof t;
						})(t) &&
							y.call(t) == g)
					);
				}),
					(e = {
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
				var m = function(t, e, n) {
						if (
							(void 0 === e && (e = 0),
							void 0 === n && (n = !1),
							"cool" === e
								? (e = 237)
								: "slate" === e
								? (e = 122)
								: "warm" === e && (e = 69),
							!v(e))
						)
							throw new Error("Hue is not a number");
						if (!v(t)) throw new Error("Lightness is not a number");
						t > 100 && (t = 100), t < 0 && (t = 0);
						var r = 0;
						0 !== e &&
							(r = 19.92978 + -0.3651759 * t + 0.001737214 * Math.pow(t, 2));
						var o = 0;
						return (
							n
								? ((o = t / 100), (t = "100%,"))
								: ((o = (100 - t) / 100), (t = "0%,")),
							"hsla(" + e + "," + r + "%," + t + o + ")"
						);
					},
					j =
						"undefined" != typeof window
							? window
							: void 0 !== n
							? n
							: "undefined" != typeof self
							? self
							: {};
				function _(t, e) {
					return t((e = { exports: {} }), e.exports), e.exports;
				}
				var w,
					O = "object" == typeof j && j && j.Object === Object && j,
					S = "object" == typeof self && self && self.Object === Object && self,
					x = O || S || Function("return this")(),
					z = x.Symbol,
					F = Object.prototype,
					k = F.hasOwnProperty,
					A = F.toString,
					L = z ? z.toStringTag : void 0,
					B = function(t) {
						var e = k.call(t, L),
							n = t[L];
						try {
							t[L] = void 0;
							var r = !0;
						} catch (t) {}
						var o = A.call(t);
						return r && (e ? (t[L] = n) : delete t[L]), o;
					},
					P = Object.prototype.toString,
					T = function(t) {
						return P.call(t);
					},
					M = "[object Null]",
					E = "[object Undefined]",
					H = z ? z.toStringTag : void 0,
					N = function(t) {
						return null == t
							? void 0 === t
								? E
								: M
							: H && H in Object(t)
							? B(t)
							: T(t);
					},
					W = function(t) {
						var e = typeof t;
						return null != t && ("object" == e || "function" == e);
					},
					C = "[object AsyncFunction]",
					I = "[object Function]",
					R = "[object GeneratorFunction]",
					$ = "[object Proxy]",
					U = function(t) {
						if (!W(t)) return !1;
						var e = N(t);
						return e == I || e == R || e == C || e == $;
					},
					D = x["__core-js_shared__"],
					q = (w = /[^.]+$/.exec((D && D.keys && D.keys.IE_PROTO) || ""))
						? "Symbol(src)_1." + w
						: "",
					V = function(t) {
						return !!q && q in t;
					},
					J = Function.prototype.toString,
					Z = function(t) {
						if (null != t) {
							try {
								return J.call(t);
							} catch (t) {}
							try {
								return t + "";
							} catch (t) {}
						}
						return "";
					},
					G = /^\[object .+?Constructor\]$/,
					K = Function.prototype,
					Y = Object.prototype,
					Q = RegExp(
						"^" +
							K.toString
								.call(Y.hasOwnProperty)
								.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
								.replace(
									/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
									"$1.*?"
								) +
							"$"
					),
					X = function(t) {
						return !(!W(t) || V(t)) && (U(t) ? Q : G).test(Z(t));
					},
					tt = function(t, e) {
						return null == t ? void 0 : t[e];
					},
					et = function(t, e) {
						var n = tt(t, e);
						return X(n) ? n : void 0;
					},
					nt = (function() {
						try {
							var t = et(Object, "defineProperty");
							return t({}, "", {}), t;
						} catch (t) {}
					})(),
					rt = function(t, e, n) {
						"__proto__" == e && nt
							? nt(t, e, {
									configurable: !0,
									enumerable: !0,
									value: n,
									writable: !0,
							  })
							: (t[e] = n);
					},
					ot = function(t, e) {
						return t === e || (t != t && e != e);
					},
					it = Object.prototype.hasOwnProperty,
					at = function(t, e, n) {
						var r = t[e];
						(it.call(t, e) && ot(r, n) && (void 0 !== n || e in t)) ||
							rt(t, e, n);
					},
					ut = Array.isArray,
					ct = function(t) {
						return null != t && "object" == typeof t;
					},
					lt = "[object Symbol]",
					ft = function(t) {
						return "symbol" == typeof t || (ct(t) && N(t) == lt);
					},
					st = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
					pt = /^\w*$/,
					ht = function(t, e) {
						if (ut(t)) return !1;
						var n = typeof t;
						return (
							!(
								"number" != n &&
								"symbol" != n &&
								"boolean" != n &&
								null != t &&
								!ft(t)
							) ||
							pt.test(t) ||
							!st.test(t) ||
							(null != e && t in Object(e))
						);
					},
					dt = et(Object, "create"),
					bt = function(t) {
						var e = this.has(t) && delete this.__data__[t];
						return (this.size -= e ? 1 : 0), e;
					},
					gt = "__lodash_hash_undefined__",
					yt = Object.prototype.hasOwnProperty,
					vt = function(t) {
						var e = this.__data__;
						if (dt) {
							var n = e[t];
							return n === gt ? void 0 : n;
						}
						return yt.call(e, t) ? e[t] : void 0;
					},
					mt = Object.prototype.hasOwnProperty,
					jt = function(t) {
						var e = this.__data__;
						return dt ? void 0 !== e[t] : mt.call(e, t);
					},
					_t = "__lodash_hash_undefined__",
					wt = function(t, e) {
						var n = this.__data__;
						return (
							(this.size += this.has(t) ? 0 : 1),
							(n[t] = dt && void 0 === e ? _t : e),
							this
						);
					};
				function Ot(t) {
					var e = -1,
						n = null == t ? 0 : t.length;
					for (this.clear(); ++e < n; ) {
						var r = t[e];
						this.set(r[0], r[1]);
					}
				}
				(Ot.prototype.clear = function() {
					(this.__data__ = dt ? dt(null) : {}), (this.size = 0);
				}),
					(Ot.prototype.delete = bt),
					(Ot.prototype.get = vt),
					(Ot.prototype.has = jt),
					(Ot.prototype.set = wt);
				var St = Ot,
					xt = function(t, e) {
						for (var n = t.length; n--; ) if (ot(t[n][0], e)) return n;
						return -1;
					},
					zt = Array.prototype.splice,
					Ft = function(t) {
						var e = this.__data__,
							n = xt(e, t);
						return !(
							n < 0 ||
							(n == e.length - 1 ? e.pop() : zt.call(e, n, 1), --this.size, 0)
						);
					},
					kt = function(t) {
						var e = this.__data__,
							n = xt(e, t);
						return n < 0 ? void 0 : e[n][1];
					},
					At = function(t) {
						return xt(this.__data__, t) > -1;
					},
					Lt = function(t, e) {
						var n = this.__data__,
							r = xt(n, t);
						return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
					};
				function Bt(t) {
					var e = -1,
						n = null == t ? 0 : t.length;
					for (this.clear(); ++e < n; ) {
						var r = t[e];
						this.set(r[0], r[1]);
					}
				}
				(Bt.prototype.clear = function() {
					(this.__data__ = []), (this.size = 0);
				}),
					(Bt.prototype.delete = Ft),
					(Bt.prototype.get = kt),
					(Bt.prototype.has = At),
					(Bt.prototype.set = Lt);
				var Pt = Bt,
					Tt = et(x, "Map"),
					Mt = function(t) {
						var e = typeof t;
						return "string" == e ||
							"number" == e ||
							"symbol" == e ||
							"boolean" == e
							? "__proto__" !== t
							: null === t;
					},
					Et = function(t, e) {
						var n = t.__data__;
						return Mt(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
					},
					Ht = function(t) {
						var e = Et(this, t).delete(t);
						return (this.size -= e ? 1 : 0), e;
					},
					Nt = function(t) {
						return Et(this, t).get(t);
					},
					Wt = function(t) {
						return Et(this, t).has(t);
					},
					Ct = function(t, e) {
						var n = Et(this, t),
							r = n.size;
						return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
					};
				function It(t) {
					var e = -1,
						n = null == t ? 0 : t.length;
					for (this.clear(); ++e < n; ) {
						var r = t[e];
						this.set(r[0], r[1]);
					}
				}
				(It.prototype.clear = function() {
					(this.size = 0),
						(this.__data__ = {
							hash: new St(),
							map: new (Tt || Pt)(),
							string: new St(),
						});
				}),
					(It.prototype.delete = Ht),
					(It.prototype.get = Nt),
					(It.prototype.has = Wt),
					(It.prototype.set = Ct);
				var Rt = It,
					$t = "Expected a function";
				function Ut(t, e) {
					if ("function" != typeof t || (null != e && "function" != typeof e))
						throw new TypeError($t);
					var n = function() {
						var r = arguments,
							o = e ? e.apply(this, r) : r[0],
							i = n.cache;
						if (i.has(o)) return i.get(o);
						var a = t.apply(this, r);
						return (n.cache = i.set(o, a) || i), a;
					};
					return (n.cache = new (Ut.Cache || Rt)()), n;
				}
				Ut.Cache = Rt;
				var Dt = Ut,
					qt = 500,
					Vt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
					Jt = /\\(\\)?/g,
					Zt = (function(t) {
						var e = Dt(
								function(t) {
									var e = [];
									return (
										46 === t.charCodeAt(0) && e.push(""),
										t.replace(Vt, function(t, n, r, o) {
											e.push(r ? o.replace(Jt, "$1") : n || t);
										}),
										e
									);
								},
								function(t) {
									return n.size === qt && n.clear(), t;
								}
							),
							n = e.cache;
						return e;
					})(),
					Gt = function(t, e) {
						for (
							var n = -1, r = null == t ? 0 : t.length, o = Array(r);
							++n < r;

						)
							o[n] = e(t[n], n, t);
						return o;
					},
					Kt = 1 / 0,
					Yt = z ? z.prototype : void 0,
					Qt = Yt ? Yt.toString : void 0,
					Xt = function t(e) {
						if ("string" == typeof e) return e;
						if (ut(e)) return Gt(e, t) + "";
						if (ft(e)) return Qt ? Qt.call(e) : "";
						var n = e + "";
						return "0" == n && 1 / e == -Kt ? "-0" : n;
					},
					te = function(t) {
						return null == t ? "" : Xt(t);
					},
					ee = function(t, e) {
						return ut(t) ? t : ht(t, e) ? [t] : Zt(te(t));
					},
					ne = 9007199254740991,
					re = /^(?:0|[1-9]\d*)$/,
					oe = function(t, e) {
						var n = typeof t;
						return (
							!!(e = null == e ? ne : e) &&
							("number" == n || ("symbol" != n && re.test(t))) &&
							t > -1 &&
							t % 1 == 0 &&
							t < e
						);
					},
					ie = 1 / 0,
					ae = function(t) {
						if ("string" == typeof t || ft(t)) return t;
						var e = t + "";
						return "0" == e && 1 / t == -ie ? "-0" : e;
					},
					ue = function(t, e, n, r) {
						if (!W(t)) return t;
						for (
							var o = -1, i = (e = ee(e, t)).length, a = i - 1, u = t;
							null != u && ++o < i;

						) {
							var c = ae(e[o]),
								l = n;
							if (o != a) {
								var f = u[c];
								void 0 === (l = r ? r(f, c, u) : void 0) &&
									(l = W(f) ? f : oe(e[o + 1]) ? [] : {});
							}
							at(u, c, l), (u = u[c]);
						}
						return t;
					},
					ce = function(t, e, n) {
						return null == t ? t : ue(t, e, n);
					},
					le = function(t, e) {
						for (
							var n = -1, r = null == t ? 0 : t.length;
							++n < r && !1 !== e(t[n], n, t);

						);
						return t;
					},
					fe = function(t, e, n) {
						for (var r = -1, o = Object(t), i = n(t), a = i.length; a--; ) {
							var u = i[++r];
							if (!1 === e(o[u], u, o)) break;
						}
						return t;
					},
					se = function(t, e) {
						for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
						return r;
					},
					pe = "[object Arguments]",
					he = function(t) {
						return ct(t) && N(t) == pe;
					},
					de = Object.prototype,
					be = de.hasOwnProperty,
					ge = de.propertyIsEnumerable,
					ye = he(
						(function() {
							return arguments;
						})()
					)
						? he
						: function(t) {
								return ct(t) && be.call(t, "callee") && !ge.call(t, "callee");
						  },
					ve = function() {
						return !1;
					},
					me = _(function(t, e) {
						var n = e && !e.nodeType && e,
							r = n && t && !t.nodeType && t,
							o = r && r.exports === n ? x.Buffer : void 0;
						t.exports = (o ? o.isBuffer : void 0) || ve;
					}),
					je = 9007199254740991,
					_e = function(t) {
						return "number" == typeof t && t > -1 && t % 1 == 0 && t <= je;
					},
					we = {};
				(we["[object Float32Array]"] = we["[object Float64Array]"] = we[
					"[object Int8Array]"
				] = we["[object Int16Array]"] = we["[object Int32Array]"] = we[
					"[object Uint8Array]"
				] = we["[object Uint8ClampedArray]"] = we["[object Uint16Array]"] = we[
					"[object Uint32Array]"
				] = !0),
					(we["[object Arguments]"] = we["[object Array]"] = we[
						"[object ArrayBuffer]"
					] = we["[object Boolean]"] = we["[object DataView]"] = we[
						"[object Date]"
					] = we["[object Error]"] = we["[object Function]"] = we[
						"[object Map]"
					] = we["[object Number]"] = we["[object Object]"] = we[
						"[object RegExp]"
					] = we["[object Set]"] = we["[object String]"] = we[
						"[object WeakMap]"
					] = !1);
				var Oe = function(t) {
						return ct(t) && _e(t.length) && !!we[N(t)];
					},
					Se = function(t) {
						return function(e) {
							return t(e);
						};
					},
					xe = _(function(t, e) {
						var n = e && !e.nodeType && e,
							r = n && t && !t.nodeType && t,
							o = r && r.exports === n && O.process,
							i = (function() {
								try {
									return (
										(r && r.require && r.require("util").types) ||
										(o && o.binding && o.binding("util"))
									);
								} catch (t) {}
							})();
						t.exports = i;
					}),
					ze = xe && xe.isTypedArray,
					Fe = ze ? Se(ze) : Oe,
					ke = Object.prototype.hasOwnProperty,
					Ae = function(t, e) {
						var n = ut(t),
							r = !n && ye(t),
							o = !n && !r && me(t),
							i = !n && !r && !o && Fe(t),
							a = n || r || o || i,
							u = a ? se(t.length, String) : [],
							c = u.length;
						for (var l in t)
							(!e && !ke.call(t, l)) ||
								(a &&
									("length" == l ||
										(o && ("offset" == l || "parent" == l)) ||
										(i &&
											("buffer" == l ||
												"byteLength" == l ||
												"byteOffset" == l)) ||
										oe(l, c))) ||
								u.push(l);
						return u;
					},
					Le = Object.prototype,
					Be = function(t) {
						var e = t && t.constructor;
						return t === (("function" == typeof e && e.prototype) || Le);
					},
					Pe = function(t, e) {
						return function(n) {
							return t(e(n));
						};
					},
					Te = Pe(Object.keys, Object),
					Me = Object.prototype.hasOwnProperty,
					Ee = function(t) {
						if (!Be(t)) return Te(t);
						var e = [];
						for (var n in Object(t))
							Me.call(t, n) && "constructor" != n && e.push(n);
						return e;
					},
					He = function(t) {
						return null != t && _e(t.length) && !U(t);
					},
					Ne = function(t) {
						return He(t) ? Ae(t) : Ee(t);
					},
					We = function(t, e) {
						if (null == t) return t;
						if (!He(t))
							return (function(t, e) {
								return t && fe(t, e, Ne);
							})(t, e);
						for (
							var n = t.length, r = -1, o = Object(t);
							++r < n && !1 !== e(o[r], r, o);

						);
						return t;
					},
					Ce = function(t) {
						return t;
					},
					Ie = function(t) {
						return "function" == typeof t ? t : Ce;
					},
					Re = function(t, e) {
						return (ut(t) ? le : We)(t, Ie(e));
					},
					$e = "[object Number]",
					Ue = function(t) {
						return "number" == typeof t || (ct(t) && N(t) == $e);
					},
					De = "[object String]",
					qe = function(t) {
						return "string" == typeof t || (!ut(t) && ct(t) && N(t) == De);
					},
					Ve = function(t) {
						var e = this.__data__,
							n = e.delete(t);
						return (this.size = e.size), n;
					},
					Je = function(t) {
						return this.__data__.get(t);
					},
					Ze = function(t) {
						return this.__data__.has(t);
					},
					Ge = 200,
					Ke = function(t, e) {
						var n = this.__data__;
						if (n instanceof Pt) {
							var r = n.__data__;
							if (!Tt || r.length < Ge - 1)
								return r.push([t, e]), (this.size = ++n.size), this;
							n = this.__data__ = new Rt(r);
						}
						return n.set(t, e), (this.size = n.size), this;
					};
				function Ye(t) {
					var e = (this.__data__ = new Pt(t));
					this.size = e.size;
				}
				(Ye.prototype.clear = function() {
					(this.__data__ = new Pt()), (this.size = 0);
				}),
					(Ye.prototype.delete = Ve),
					(Ye.prototype.get = Je),
					(Ye.prototype.has = Ze),
					(Ye.prototype.set = Ke);
				var Qe = Ye,
					Xe = function(t, e, n) {
						((void 0 === n || ot(t[e], n)) && (void 0 !== n || e in t)) ||
							rt(t, e, n);
					},
					tn = _(function(t, e) {
						var n = e && !e.nodeType && e,
							r = n && t && !t.nodeType && t,
							o = r && r.exports === n ? x.Buffer : void 0,
							i = o ? o.allocUnsafe : void 0;
						t.exports = function(t, e) {
							if (e) return t.slice();
							var n = t.length,
								r = i ? i(n) : new t.constructor(n);
							return t.copy(r), r;
						};
					}),
					en = x.Uint8Array,
					nn = function(t) {
						var e = new t.constructor(t.byteLength);
						return new en(e).set(new en(t)), e;
					},
					rn = function(t, e) {
						var n = e ? nn(t.buffer) : t.buffer;
						return new t.constructor(n, t.byteOffset, t.length);
					},
					on = function(t, e) {
						var n = -1,
							r = t.length;
						for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
						return e;
					},
					an = Object.create,
					un = (function() {
						function t() {}
						return function(e) {
							if (!W(e)) return {};
							if (an) return an(e);
							t.prototype = e;
							var n = new t();
							return (t.prototype = void 0), n;
						};
					})(),
					cn = Pe(Object.getPrototypeOf, Object),
					ln = function(t) {
						return "function" != typeof t.constructor || Be(t) ? {} : un(cn(t));
					},
					fn = function(t) {
						return ct(t) && He(t);
					},
					sn = "[object Object]",
					pn = Function.prototype,
					hn = Object.prototype,
					dn = pn.toString,
					bn = hn.hasOwnProperty,
					gn = dn.call(Object),
					yn = function(t) {
						if (!ct(t) || N(t) != sn) return !1;
						var e = cn(t);
						if (null === e) return !0;
						var n = bn.call(e, "constructor") && e.constructor;
						return "function" == typeof n && n instanceof n && dn.call(n) == gn;
					},
					vn = function(t, e) {
						return "__proto__" == e ? void 0 : t[e];
					},
					mn = function(t, e, n, r) {
						var o = !n;
						n || (n = {});
						for (var i = -1, a = e.length; ++i < a; ) {
							var u = e[i],
								c = r ? r(n[u], t[u], u, n, t) : void 0;
							void 0 === c && (c = t[u]), o ? rt(n, u, c) : at(n, u, c);
						}
						return n;
					},
					jn = function(t) {
						var e = [];
						if (null != t) for (var n in Object(t)) e.push(n);
						return e;
					},
					_n = Object.prototype.hasOwnProperty,
					wn = function(t) {
						if (!W(t)) return jn(t);
						var e = Be(t),
							n = [];
						for (var r in t)
							("constructor" != r || (!e && _n.call(t, r))) && n.push(r);
						return n;
					},
					On = function(t) {
						return He(t) ? Ae(t, !0) : wn(t);
					},
					Sn = function(t) {
						return mn(t, On(t));
					},
					xn = function(t, e, n, r, o, i, a) {
						var u = vn(t, n),
							c = vn(e, n),
							l = a.get(c);
						if (l) Xe(t, n, l);
						else {
							var f = i ? i(u, c, n + "", t, e, a) : void 0,
								s = void 0 === f;
							if (s) {
								var p = ut(c),
									h = !p && me(c),
									d = !p && !h && Fe(c);
								(f = c),
									p || h || d
										? ut(u)
											? (f = u)
											: fn(u)
											? (f = on(u))
											: h
											? ((s = !1), (f = tn(c, !0)))
											: d
											? ((s = !1), (f = rn(c, !0)))
											: (f = [])
										: yn(c) || ye(c)
										? ((f = u),
										  ye(u)
												? (f = Sn(u))
												: (!W(u) || (r && U(u))) && (f = ln(c)))
										: (s = !1);
							}
							s && (a.set(c, f), o(f, c, r, i, a), a.delete(c)), Xe(t, n, f);
						}
					},
					zn = function t(e, n, r, o, i) {
						e !== n &&
							fe(
								n,
								function(a, u) {
									if (W(a)) i || (i = new Qe()), xn(e, n, u, r, t, o, i);
									else {
										var c = o ? o(vn(e, u), a, u + "", e, n, i) : void 0;
										void 0 === c && (c = a), Xe(e, u, c);
									}
								},
								On
							);
					},
					Fn = function(t, e, n) {
						switch (n.length) {
							case 0:
								return t.call(e);
							case 1:
								return t.call(e, n[0]);
							case 2:
								return t.call(e, n[0], n[1]);
							case 3:
								return t.call(e, n[0], n[1], n[2]);
						}
						return t.apply(e, n);
					},
					kn = Math.max,
					An = function(t, e, n) {
						return (
							(e = kn(void 0 === e ? t.length - 1 : e, 0)),
							function() {
								for (
									var r = arguments,
										o = -1,
										i = kn(r.length - e, 0),
										a = Array(i);
									++o < i;

								)
									a[o] = r[e + o];
								o = -1;
								for (var u = Array(e + 1); ++o < e; ) u[o] = r[o];
								return (u[e] = n(a)), Fn(t, this, u);
							}
						);
					},
					Ln = function(t) {
						return function() {
							return t;
						};
					},
					Bn = 800,
					Pn = 16,
					Tn = Date.now,
					Mn = (function(t) {
						var e = 0,
							n = 0;
						return function() {
							var r = Tn(),
								o = Pn - (r - n);
							if (((n = r), o > 0)) {
								if (++e >= Bn) return arguments[0];
							} else e = 0;
							return t.apply(void 0, arguments);
						};
					})(
						nt
							? function(t, e) {
									return nt(t, "toString", {
										configurable: !0,
										enumerable: !1,
										value: Ln(e),
										writable: !0,
									});
							  }
							: Ce
					),
					En = function(t, e) {
						return Mn(An(t, e, Ce), t + "");
					},
					Hn = function(t, e, n) {
						if (!W(n)) return !1;
						var r = typeof e;
						return (
							!!("number" == r
								? He(n) && oe(e, n.length)
								: "string" == r && e in n) && ot(n[e], t)
						);
					},
					Nn = (function(t) {
						return En(function(e, n) {
							var r = -1,
								o = n.length,
								i = o > 1 ? n[o - 1] : void 0,
								a = o > 2 ? n[2] : void 0;
							for (
								i = t.length > 3 && "function" == typeof i ? (o--, i) : void 0,
									a && Hn(n[0], n[1], a) && ((i = o < 3 ? void 0 : i), (o = 1)),
									e = Object(e);
								++r < o;

							) {
								var u = n[r];
								u && t(e, u, r);
							}
							return e;
						});
					})(function(t, e, n) {
						zn(t, e, n);
					}),
					Wn = function(t, e, n, r) {
						var o = -1,
							i = null == t ? 0 : t.length;
						for (r && i && (n = t[++o]); ++o < i; ) n = e(n, t[o], o, t);
						return n;
					},
					Cn = "__lodash_hash_undefined__",
					In = function(t) {
						return this.__data__.has(t);
					};
				function Rn(t) {
					var e = -1,
						n = null == t ? 0 : t.length;
					for (this.__data__ = new Rt(); ++e < n; ) this.add(t[e]);
				}
				(Rn.prototype.add = Rn.prototype.push = function(t) {
					return this.__data__.set(t, Cn), this;
				}),
					(Rn.prototype.has = In);
				var $n = Rn,
					Un = function(t, e) {
						for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
							if (e(t[n], n, t)) return !0;
						return !1;
					},
					Dn = function(t, e) {
						return t.has(e);
					},
					qn = 1,
					Vn = 2,
					Jn = function(t, e, n, r, o, i) {
						var a = n & qn,
							u = t.length,
							c = e.length;
						if (u != c && !(a && c > u)) return !1;
						var l = i.get(t);
						if (l && i.get(e)) return l == e;
						var f = -1,
							s = !0,
							p = n & Vn ? new $n() : void 0;
						for (i.set(t, e), i.set(e, t); ++f < u; ) {
							var h = t[f],
								d = e[f];
							if (r) var b = a ? r(d, h, f, e, t, i) : r(h, d, f, t, e, i);
							if (void 0 !== b) {
								if (b) continue;
								s = !1;
								break;
							}
							if (p) {
								if (
									!Un(e, function(t, e) {
										if (!Dn(p, e) && (h === t || o(h, t, n, r, i)))
											return p.push(e);
									})
								) {
									s = !1;
									break;
								}
							} else if (h !== d && !o(h, d, n, r, i)) {
								s = !1;
								break;
							}
						}
						return i.delete(t), i.delete(e), s;
					},
					Zn = function(t) {
						var e = -1,
							n = Array(t.size);
						return (
							t.forEach(function(t, r) {
								n[++e] = [r, t];
							}),
							n
						);
					},
					Gn = function(t) {
						var e = -1,
							n = Array(t.size);
						return (
							t.forEach(function(t) {
								n[++e] = t;
							}),
							n
						);
					},
					Kn = 1,
					Yn = 2,
					Qn = "[object Boolean]",
					Xn = "[object Date]",
					tr = "[object Error]",
					er = "[object Map]",
					nr = "[object Number]",
					rr = "[object RegExp]",
					or = "[object Set]",
					ir = "[object String]",
					ar = "[object Symbol]",
					ur = "[object ArrayBuffer]",
					cr = "[object DataView]",
					lr = z ? z.prototype : void 0,
					fr = lr ? lr.valueOf : void 0,
					sr = function(t, e, n, r, o, i, a) {
						switch (n) {
							case cr:
								if (
									t.byteLength != e.byteLength ||
									t.byteOffset != e.byteOffset
								)
									return !1;
								(t = t.buffer), (e = e.buffer);
							case ur:
								return !(
									t.byteLength != e.byteLength || !i(new en(t), new en(e))
								);
							case Qn:
							case Xn:
							case nr:
								return ot(+t, +e);
							case tr:
								return t.name == e.name && t.message == e.message;
							case rr:
							case ir:
								return t == e + "";
							case er:
								var u = Zn;
							case or:
								if ((u || (u = Gn), t.size != e.size && !(r & Kn))) return !1;
								var c = a.get(t);
								if (c) return c == e;
								(r |= Yn), a.set(t, e);
								var l = Jn(u(t), u(e), r, o, i, a);
								return a.delete(t), l;
							case ar:
								if (fr) return fr.call(t) == fr.call(e);
						}
						return !1;
					},
					pr = function(t, e) {
						for (var n = -1, r = e.length, o = t.length; ++n < r; )
							t[o + n] = e[n];
						return t;
					},
					hr = function(t, e, n) {
						var r = e(t);
						return ut(t) ? r : pr(r, n(t));
					},
					dr = function(t, e) {
						for (
							var n = -1, r = null == t ? 0 : t.length, o = 0, i = [];
							++n < r;

						) {
							var a = t[n];
							e(a, n, t) && (i[o++] = a);
						}
						return i;
					},
					br = Object.prototype.propertyIsEnumerable,
					gr = Object.getOwnPropertySymbols,
					yr = gr
						? function(t) {
								return null == t
									? []
									: ((t = Object(t)),
									  dr(gr(t), function(e) {
											return br.call(t, e);
									  }));
						  }
						: function() {
								return [];
						  },
					vr = function(t) {
						return hr(t, Ne, yr);
					},
					mr = 1,
					jr = Object.prototype.hasOwnProperty,
					_r = function(t, e, n, r, o, i) {
						var a = n & mr,
							u = vr(t),
							c = u.length;
						if (c != vr(e).length && !a) return !1;
						for (var l = c; l--; ) {
							var f = u[l];
							if (!(a ? f in e : jr.call(e, f))) return !1;
						}
						var s = i.get(t);
						if (s && i.get(e)) return s == e;
						var p = !0;
						i.set(t, e), i.set(e, t);
						for (var h = a; ++l < c; ) {
							var d = t[(f = u[l])],
								b = e[f];
							if (r) var g = a ? r(b, d, f, e, t, i) : r(d, b, f, t, e, i);
							if (!(void 0 === g ? d === b || o(d, b, n, r, i) : g)) {
								p = !1;
								break;
							}
							h || (h = "constructor" == f);
						}
						if (p && !h) {
							var y = t.constructor,
								v = e.constructor;
							y != v &&
								"constructor" in t &&
								"constructor" in e &&
								!(
									"function" == typeof y &&
									y instanceof y &&
									"function" == typeof v &&
									v instanceof v
								) &&
								(p = !1);
						}
						return i.delete(t), i.delete(e), p;
					},
					wr = et(x, "DataView"),
					Or = et(x, "Promise"),
					Sr = et(x, "Set"),
					xr = et(x, "WeakMap"),
					zr = Z(wr),
					Fr = Z(Tt),
					kr = Z(Or),
					Ar = Z(Sr),
					Lr = Z(xr),
					Br = N;
				((wr && "[object DataView]" != Br(new wr(new ArrayBuffer(1)))) ||
					(Tt && "[object Map]" != Br(new Tt())) ||
					(Or && "[object Promise]" != Br(Or.resolve())) ||
					(Sr && "[object Set]" != Br(new Sr())) ||
					(xr && "[object WeakMap]" != Br(new xr()))) &&
					(Br = function(t) {
						var e = N(t),
							n = "[object Object]" == e ? t.constructor : void 0,
							r = n ? Z(n) : "";
						if (r)
							switch (r) {
								case zr:
									return "[object DataView]";
								case Fr:
									return "[object Map]";
								case kr:
									return "[object Promise]";
								case Ar:
									return "[object Set]";
								case Lr:
									return "[object WeakMap]";
							}
						return e;
					});
				var Pr,
					Tr = Br,
					Mr = 1,
					Er = "[object Arguments]",
					Hr = "[object Array]",
					Nr = "[object Object]",
					Wr = Object.prototype.hasOwnProperty,
					Cr = function(t, e, n, r, o, i) {
						var a = ut(t),
							u = ut(e),
							c = a ? Hr : Tr(t),
							l = u ? Hr : Tr(e),
							f = (c = c == Er ? Nr : c) == Nr,
							s = (l = l == Er ? Nr : l) == Nr,
							p = c == l;
						if (p && me(t)) {
							if (!me(e)) return !1;
							(a = !0), (f = !1);
						}
						if (p && !f)
							return (
								i || (i = new Qe()),
								a || Fe(t) ? Jn(t, e, n, r, o, i) : sr(t, e, c, n, r, o, i)
							);
						if (!(n & Mr)) {
							var h = f && Wr.call(t, "__wrapped__"),
								d = s && Wr.call(e, "__wrapped__");
							if (h || d) {
								var b = h ? t.value() : t,
									g = d ? e.value() : e;
								return i || (i = new Qe()), o(b, g, n, r, i);
							}
						}
						return !!p && (i || (i = new Qe()), _r(t, e, n, r, o, i));
					},
					Ir = function t(e, n, r, o, i) {
						return (
							e === n ||
							(null == e || null == n || (!ct(e) && !ct(n))
								? e != e && n != n
								: Cr(e, n, r, o, t, i))
						);
					},
					Rr = 1,
					$r = 2,
					Ur = function(t, e, n, r) {
						var o = n.length,
							i = o,
							a = !r;
						if (null == t) return !i;
						for (t = Object(t); o--; ) {
							var u = n[o];
							if (a && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1;
						}
						for (; ++o < i; ) {
							var c = (u = n[o])[0],
								l = t[c],
								f = u[1];
							if (a && u[2]) {
								if (void 0 === l && !(c in t)) return !1;
							} else {
								var s = new Qe();
								if (r) var p = r(l, f, c, t, e, s);
								if (!(void 0 === p ? Ir(f, l, Rr | $r, r, s) : p)) return !1;
							}
						}
						return !0;
					},
					Dr = function(t) {
						return t == t && !W(t);
					},
					qr = function(t) {
						for (var e = Ne(t), n = e.length; n--; ) {
							var r = e[n],
								o = t[r];
							e[n] = [r, o, Dr(o)];
						}
						return e;
					},
					Vr = function(t, e) {
						return function(n) {
							return (
								null != n && n[t] === e && (void 0 !== e || t in Object(n))
							);
						};
					},
					Jr = function(t) {
						var e = qr(t);
						return 1 == e.length && e[0][2]
							? Vr(e[0][0], e[0][1])
							: function(n) {
									return n === t || Ur(n, t, e);
							  };
					},
					Zr = function(t, e) {
						for (var n = 0, r = (e = ee(e, t)).length; null != t && n < r; )
							t = t[ae(e[n++])];
						return n && n == r ? t : void 0;
					},
					Gr = function(t, e, n) {
						var r = null == t ? void 0 : Zr(t, e);
						return void 0 === r ? n : r;
					},
					Kr = function(t, e) {
						return null != t && e in Object(t);
					},
					Yr = function(t, e, n) {
						for (var r = -1, o = (e = ee(e, t)).length, i = !1; ++r < o; ) {
							var a = ae(e[r]);
							if (!(i = null != t && n(t, a))) break;
							t = t[a];
						}
						return i || ++r != o
							? i
							: !!(o = null == t ? 0 : t.length) &&
									_e(o) &&
									oe(a, o) &&
									(ut(t) || ye(t));
					},
					Qr = function(t, e) {
						return null != t && Yr(t, e, Kr);
					},
					Xr = 1,
					to = 2,
					eo = function(t, e) {
						return ht(t) && Dr(e)
							? Vr(ae(t), e)
							: function(n) {
									var r = Gr(n, t);
									return void 0 === r && r === e ? Qr(n, t) : Ir(e, r, Xr | to);
							  };
					},
					no = function(t) {
						return function(e) {
							return null == e ? void 0 : e[t];
						};
					},
					ro = function(t) {
						return function(e) {
							return Zr(e, t);
						};
					},
					oo = function(t) {
						return ht(t) ? no(ae(t)) : ro(t);
					},
					io = function(t) {
						return "function" == typeof t
							? t
							: null == t
							? Ce
							: "object" == typeof t
							? ut(t)
								? eo(t[0], t[1])
								: Jr(t)
							: oo(t);
					},
					ao = function(t, e, n, r, o) {
						return (
							o(t, function(t, o, i) {
								n = r ? ((r = !1), t) : e(n, t, o, i);
							}),
							n
						);
					},
					uo = function(t, e, n) {
						var r = ut(t) ? Wn : ao,
							o = arguments.length < 3;
						return r(t, io(e, 4), n, o, We);
					},
					co = function(t, e, n) {
						var r;
						return (
							void 0 === t && (t = {}),
							(r = ut(e) ? e : [e]),
							Re(r, function(e) {
								Re(n, function(n, r) {
									ce(t, e + "." + r, n);
								});
							}),
							t
						);
					},
					lo = [
						"inherit",
						"default",
						"serif",
						"sans-serif",
						"monospace",
						"fantasy",
						"cursive",
						"-apple-system",
					],
					fo = function(t) {
						return -1 !== lo.indexOf(t) ? t : "'" + t + "'";
					},
					so = _(function(t, e) {
						Object.defineProperty(e, "__esModule", { value: !0 }),
							(e.default =
								"html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}");
					}),
					po =
						(Pr = so) &&
						Pr.__esModule &&
						Object.prototype.hasOwnProperty.call(Pr, "default")
							? Pr.default
							: Pr,
					ho = function(t) {
						return uo(
							t,
							function(t, e, n) {
								return (
									(t += n + "{"),
									Re(e, function(e, n) {
										if (W(e)) {
											var r = {};
											(r[n] = e), (t += ho(r));
										} else {
											var o =
												(function(t, e) {
													if ("string" != typeof t)
														throw new TypeError("Expected a string");
													return t
														.replace(
															/([a-z\d])([A-Z])/g,
															"$1" + (e = void 0 === e ? "_" : e) + "$2"
														)
														.replace(
															/([A-Z]+)([A-Z][a-z\d]+)/g,
															"$1" + e + "$2"
														)
														.toLowerCase();
												})(n, "-") +
												":" +
												e +
												";";
											["Webkit", "ms", "Moz", "O"].forEach(function(t) {
												n.slice(0, t.length) === t && (o = "-" + o);
											}),
												(t += o);
										}
									}),
									(t += "}")
								);
							},
							""
						);
					};
				module.exports = function(n) {
					var r,
						o,
						i,
						u,
						c = a(
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
							n
						),
						f =
							((r = c),
							(o = JSON.parse(JSON.stringify(h))),
							(i = Object.assign({}, o, r)),
							(u = l(i.baseFontSize)),
							s(i.baseLineHeight)
								? (p(u(i.baseFontSize, "px")),
								  (i.baseLineHeightInPx = u(i.baseLineHeight, "px")))
								: (i.baseLineHeightInPx =
										p(i.baseFontSize) * i.baseLineHeight + "px"),
							{
								rhythm: b(i),
								establishBaseline: function() {
									return (
										l((t = i).baseFontSize),
										{
											fontSize: (p(t.baseFontSize) / 16) * 100 + "%",
											lineHeight: t.baseLineHeight.toString(),
										}
									);
									var t;
								},
								linesForFontSize: function(t) {
									return d(t, i);
								},
								adjustFontSizeTo: function(t, e, n) {
									return (
										null == e && (e = "auto"),
										(function(t, e, n, r) {
											null == n && (n = r.baseFontSize),
												"%" === s(t) &&
													(t = p(r.baseFontSize) * (p(t) / 100) + "px");
											var o = l(r.baseFontSize);
											t = o(t, "px", (n = o(n, "px")));
											var i = b(r);
											return (
												"auto" === e && (e = d(t, r)),
												{ fontSize: o(t, r.rhythmUnit, n), lineHeight: i(e, n) }
											);
										})(t, e, n, i)
									);
								},
							});
					return (
						(f.scale = function(n) {
							var r = parseInt(c.baseFontSize, 10),
								o =
									(function(n, r) {
										var o;
										return (
											null == n && (n = 0),
											null == r && (r = "golden"),
											(o = t(r) ? r : null != e[r] ? e[r] : e.golden),
											Math.pow(o, n)
										);
									})(n, c.scaleRatio) *
										r +
									"px";
							return f.adjustFontSizeTo(o);
						}),
						Object.assign({}, { options: c }, f, {
							createStyles: function() {
								return this.toString();
							},
							toJSON: function() {
								return (function(t, e) {
									var n = {},
										r = t.establishBaseline();
									(n = co(n, "html", {
										font:
											r.fontSize +
											"/" +
											r.lineHeight +
											" " +
											e.bodyFontFamily.map(fo).join(","),
										boxSizing: "border-box",
										overflowY: "scroll",
									})),
										(n = co(n, ["*", "*:before", "*:after"], {
											boxSizing: "inherit",
										})),
										(n = co(n, "body", {
											color: e.bodyColor,
											fontFamily: e.bodyFontFamily.map(fo).join(","),
											fontWeight: e.bodyWeight,
											wordWrap: "break-word",
											fontKerning: "normal",
											MozFontFeatureSettings: '"kern", "liga", "clig", "calt"',
											msFontFeatureSettings: '"kern", "liga", "clig", "calt"',
											WebkitFontFeatureSettings:
												'"kern", "liga", "clig", "calt"',
											fontFeatureSettings: '"kern", "liga", "clig", "calt"',
										})),
										(n = co(n, "img", { maxWidth: "100%" }));
									var o;
									(o = Ue(e.blockMarginBottom)
										? t.rhythm(e.blockMarginBottom)
										: qe(e.blockMarginBottom)
										? e.blockMarginBottom
										: t.rhythm(1)),
										(n = co(
											n,
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
												marginBottom: o,
											}
										)),
										(n = co(n, "blockquote", {
											marginRight: t.rhythm(1),
											marginBottom: o,
											marginLeft: t.rhythm(1),
										})),
										(n = co(n, ["b", "strong", "dt", "th"], {
											fontWeight: e.boldWeight,
										})),
										(n = co(n, "hr", {
											background: m(80),
											border: "none",
											height: "1px",
											marginBottom: "calc(" + o + " - 1px)",
										})),
										(n = co(n, ["ol", "ul"], {
											listStylePosition: "outside",
											listStyleImage: "none",
											marginLeft: t.rhythm(1),
										})),
										(n = co(n, "li", { marginBottom: "calc(" + o + " / 2)" })),
										(n = co(n, ["ol li", "ul li"], { paddingLeft: 0 })),
										(n = co(n, ["li > ol", "li > ul"], {
											marginLeft: t.rhythm(1),
											marginBottom: "calc(" + o + " / 2)",
											marginTop: "calc(" + o + " / 2)",
										})),
										(n = co(
											n,
											[
												"blockquote *:last-child",
												"li *:last-child",
												"p *:last-child",
											],
											{ marginBottom: 0 }
										)),
										(n = co(n, ["li > p"], {
											marginBottom: "calc(" + o + " / 2)",
										})),
										(n = co(
											n,
											["code", "kbd", "pre", "samp"],
											Object.assign({}, t.adjustFontSizeTo("85%"))
										)),
										((n = co(n, ["abbr", "acronym"], {
											borderBottom: "1px dotted " + m(50),
											cursor: "help",
										}))["abbr[title]"] = {
											borderBottom: "1px dotted " + m(50),
											cursor: "help",
											textDecoration: "none",
										}),
										(n = co(
											n,
											["table"],
											Object.assign({}, t.adjustFontSizeTo(e.baseFontSize), {
												borderCollapse: "collapse",
												width: "100%",
											})
										)),
										(n = co(n, ["thead"], { textAlign: "left" })),
										(n = co(n, ["td,th"], {
											textAlign: "left",
											borderBottom: "1px solid " + m(88),
											fontFeatureSettings: '"tnum"',
											MozFontFeatureSettings: '"tnum"',
											msFontFeatureSettings: '"tnum"',
											WebkitFontFeatureSettings: '"tnum"',
											paddingLeft: t.rhythm(2 / 3),
											paddingRight: t.rhythm(2 / 3),
											paddingTop: t.rhythm(0.5),
											paddingBottom: "calc(" + t.rhythm(0.5) + " - 1px)",
										})),
										(n = co(n, "th:first-child,td:first-child", {
											paddingLeft: 0,
										})),
										(n = co(n, "th:last-child,td:last-child", {
											paddingRight: 0,
										})),
										(n = co(n, ["h1", "h2", "h3", "h4", "h5", "h6"], {
											color: e.headerColor,
											fontFamily: e.headerFontFamily.map(fo).join(","),
											fontWeight: e.headerWeight,
											textRendering: "optimizeLegibility",
										}));
									var i = t.scale(1),
										a = t.scale(0.6),
										u = t.scale(0.4),
										c = t.scale(0),
										l = t.scale(-0.2),
										f = t.scale(-0.3);
									return (
										Re([i, a, u, c, l, f], function(t, r) {
											(n = ce(n, "h" + (r + 1) + ".fontSize", t.fontSize)),
												(n = ce(
													n,
													"h" + (r + 1) + ".lineHeight",
													e.headerLineHeight
												));
										}),
										ut(e.plugins) &&
											(n = uo(
												e.plugins,
												function(n, r) {
													return Nn(n, r(t, e, n));
												},
												n
											)),
										e.overrideStyles &&
											U(e.overrideStyles) &&
											(n = Nn(n, e.overrideStyles(t, e, n))),
										e.overrideThemeStyles &&
											U(e.overrideThemeStyles) &&
											(n = Nn(n, e.overrideThemeStyles(t, e, n))),
										n
									);
								})(f, c);
							},
							toString: function() {
								return (
									(t = c),
									(e = this.toJSON()),
									(n = ho(e)),
									t.includeNormalize && (n = "" + po + n),
									n
								);
								var t, e, n;
							},
							injectStyles: function() {
								if ("undefined" != typeof document)
									if (document.getElementById("typography.js"))
										document.getElementById(
											"typography.js"
										).innerHTML = this.toString();
									else {
										var t = document.createElement("style");
										(t.id = "typography.js"), (t.innerHTML = this.toString());
										var e = document.head;
										e.firstChild
											? e.insertBefore(t, e.firstChild)
											: e.appendChild(t);
									}
							},
						})
					);
				};
			},
			{},
		],
	},
	{},
	["0prd"],
	null
);
//# sourceMappingURL=/dist.a30c10f9.js.map
