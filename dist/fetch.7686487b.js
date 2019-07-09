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
		MCp7: [
			function(require, module, exports) {
				!(function(t) {
					"use strict";
					if (!t.fetch) {
						var e = {
							searchParams: "URLSearchParams" in t,
							iterable: "Symbol" in t && "iterator" in Symbol,
							blob:
								"FileReader" in t &&
								"Blob" in t &&
								(function() {
									try {
										return new Blob(), !0;
									} catch (t) {
										return !1;
									}
								})(),
							formData: "FormData" in t,
							arrayBuffer: "ArrayBuffer" in t,
						};
						if (e.arrayBuffer)
							var r = [
									"[object Int8Array]",
									"[object Uint8Array]",
									"[object Uint8ClampedArray]",
									"[object Int16Array]",
									"[object Uint16Array]",
									"[object Int32Array]",
									"[object Uint32Array]",
									"[object Float32Array]",
									"[object Float64Array]",
								],
								o = function(t) {
									return t && DataView.prototype.isPrototypeOf(t);
								},
								n =
									ArrayBuffer.isView ||
									function(t) {
										return (
											t && r.indexOf(Object.prototype.toString.call(t)) > -1
										);
									};
						(f.prototype.append = function(t, e) {
							(t = a(t)), (e = h(e));
							var r = this.map[t];
							this.map[t] = r ? r + "," + e : e;
						}),
							(f.prototype.delete = function(t) {
								delete this.map[a(t)];
							}),
							(f.prototype.get = function(t) {
								return (t = a(t)), this.has(t) ? this.map[t] : null;
							}),
							(f.prototype.has = function(t) {
								return this.map.hasOwnProperty(a(t));
							}),
							(f.prototype.set = function(t, e) {
								this.map[a(t)] = h(e);
							}),
							(f.prototype.forEach = function(t, e) {
								for (var r in this.map)
									this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
							}),
							(f.prototype.keys = function() {
								var t = [];
								return (
									this.forEach(function(e, r) {
										t.push(r);
									}),
									u(t)
								);
							}),
							(f.prototype.values = function() {
								var t = [];
								return (
									this.forEach(function(e) {
										t.push(e);
									}),
									u(t)
								);
							}),
							(f.prototype.entries = function() {
								var t = [];
								return (
									this.forEach(function(e, r) {
										t.push([r, e]);
									}),
									u(t)
								);
							}),
							e.iterable &&
								(f.prototype[Symbol.iterator] = f.prototype.entries);
						var i = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
						(b.prototype.clone = function() {
							return new b(this, { body: this._bodyInit });
						}),
							c.call(b.prototype),
							c.call(w.prototype),
							(w.prototype.clone = function() {
								return new w(this._bodyInit, {
									status: this.status,
									statusText: this.statusText,
									headers: new f(this.headers),
									url: this.url,
								});
							}),
							(w.error = function() {
								var t = new w(null, { status: 0, statusText: "" });
								return (t.type = "error"), t;
							});
						var s = [301, 302, 303, 307, 308];
						(w.redirect = function(t, e) {
							if (-1 === s.indexOf(e))
								throw new RangeError("Invalid status code");
							return new w(null, { status: e, headers: { location: t } });
						}),
							(t.Headers = f),
							(t.Request = b),
							(t.Response = w),
							(t.fetch = function(t, r) {
								return new Promise(function(o, n) {
									var i = new b(t, r),
										s = new XMLHttpRequest();
									(s.onload = function() {
										var t,
											e,
											r = {
												status: s.status,
												statusText: s.statusText,
												headers:
													((t = s.getAllResponseHeaders() || ""),
													(e = new f()),
													t
														.replace(/\r?\n[\t ]+/g, " ")
														.split(/\r?\n/)
														.forEach(function(t) {
															var r = t.split(":"),
																o = r.shift().trim();
															if (o) {
																var n = r.join(":").trim();
																e.append(o, n);
															}
														}),
													e),
											};
										r.url =
											"responseURL" in s
												? s.responseURL
												: r.headers.get("X-Request-URL");
										var n = "response" in s ? s.response : s.responseText;
										o(new w(n, r));
									}),
										(s.onerror = function() {
											n(new TypeError("Network request failed"));
										}),
										(s.ontimeout = function() {
											n(new TypeError("Network request failed"));
										}),
										s.open(i.method, i.url, !0),
										"include" === i.credentials
											? (s.withCredentials = !0)
											: "omit" === i.credentials && (s.withCredentials = !1),
										"responseType" in s && e.blob && (s.responseType = "blob"),
										i.headers.forEach(function(t, e) {
											s.setRequestHeader(e, t);
										}),
										s.send(void 0 === i._bodyInit ? null : i._bodyInit);
								});
							}),
							(t.fetch.polyfill = !0);
					}
					function a(t) {
						if (
							("string" != typeof t && (t = String(t)),
							/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
						)
							throw new TypeError("Invalid character in header field name");
						return t.toLowerCase();
					}
					function h(t) {
						return "string" != typeof t && (t = String(t)), t;
					}
					function u(t) {
						var r = {
							next: function() {
								var e = t.shift();
								return { done: void 0 === e, value: e };
							},
						};
						return (
							e.iterable &&
								(r[Symbol.iterator] = function() {
									return r;
								}),
							r
						);
					}
					function f(t) {
						(this.map = {}),
							t instanceof f
								? t.forEach(function(t, e) {
										this.append(e, t);
								  }, this)
								: Array.isArray(t)
								? t.forEach(function(t) {
										this.append(t[0], t[1]);
								  }, this)
								: t &&
								  Object.getOwnPropertyNames(t).forEach(function(e) {
										this.append(e, t[e]);
								  }, this);
					}
					function d(t) {
						if (t.bodyUsed)
							return Promise.reject(new TypeError("Already read"));
						t.bodyUsed = !0;
					}
					function y(t) {
						return new Promise(function(e, r) {
							(t.onload = function() {
								e(t.result);
							}),
								(t.onerror = function() {
									r(t.error);
								});
						});
					}
					function l(t) {
						var e = new FileReader(),
							r = y(e);
						return e.readAsArrayBuffer(t), r;
					}
					function p(t) {
						if (t.slice) return t.slice(0);
						var e = new Uint8Array(t.byteLength);
						return e.set(new Uint8Array(t)), e.buffer;
					}
					function c() {
						return (
							(this.bodyUsed = !1),
							(this._initBody = function(t) {
								if (((this._bodyInit = t), t))
									if ("string" == typeof t) this._bodyText = t;
									else if (e.blob && Blob.prototype.isPrototypeOf(t))
										this._bodyBlob = t;
									else if (e.formData && FormData.prototype.isPrototypeOf(t))
										this._bodyFormData = t;
									else if (
										e.searchParams &&
										URLSearchParams.prototype.isPrototypeOf(t)
									)
										this._bodyText = t.toString();
									else if (e.arrayBuffer && e.blob && o(t))
										(this._bodyArrayBuffer = p(t.buffer)),
											(this._bodyInit = new Blob([this._bodyArrayBuffer]));
									else {
										if (
											!e.arrayBuffer ||
											(!ArrayBuffer.prototype.isPrototypeOf(t) && !n(t))
										)
											throw new Error("unsupported BodyInit type");
										this._bodyArrayBuffer = p(t);
									}
								else this._bodyText = "";
								this.headers.get("content-type") ||
									("string" == typeof t
										? this.headers.set(
												"content-type",
												"text/plain;charset=UTF-8"
										  )
										: this._bodyBlob && this._bodyBlob.type
										? this.headers.set("content-type", this._bodyBlob.type)
										: e.searchParams &&
										  URLSearchParams.prototype.isPrototypeOf(t) &&
										  this.headers.set(
												"content-type",
												"application/x-www-form-urlencoded;charset=UTF-8"
										  ));
							}),
							e.blob &&
								((this.blob = function() {
									var t = d(this);
									if (t) return t;
									if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
									if (this._bodyArrayBuffer)
										return Promise.resolve(new Blob([this._bodyArrayBuffer]));
									if (this._bodyFormData)
										throw new Error("could not read FormData body as blob");
									return Promise.resolve(new Blob([this._bodyText]));
								}),
								(this.arrayBuffer = function() {
									return this._bodyArrayBuffer
										? d(this) || Promise.resolve(this._bodyArrayBuffer)
										: this.blob().then(l);
								})),
							(this.text = function() {
								var t,
									e,
									r,
									o = d(this);
								if (o) return o;
								if (this._bodyBlob)
									return (
										(t = this._bodyBlob),
										(e = new FileReader()),
										(r = y(e)),
										e.readAsText(t),
										r
									);
								if (this._bodyArrayBuffer)
									return Promise.resolve(
										(function(t) {
											for (
												var e = new Uint8Array(t),
													r = new Array(e.length),
													o = 0;
												o < e.length;
												o++
											)
												r[o] = String.fromCharCode(e[o]);
											return r.join("");
										})(this._bodyArrayBuffer)
									);
								if (this._bodyFormData)
									throw new Error("could not read FormData body as text");
								return Promise.resolve(this._bodyText);
							}),
							e.formData &&
								(this.formData = function() {
									return this.text().then(m);
								}),
							(this.json = function() {
								return this.text().then(JSON.parse);
							}),
							this
						);
					}
					function b(t, e) {
						var r,
							o,
							n = (e = e || {}).body;
						if (t instanceof b) {
							if (t.bodyUsed) throw new TypeError("Already read");
							(this.url = t.url),
								(this.credentials = t.credentials),
								e.headers || (this.headers = new f(t.headers)),
								(this.method = t.method),
								(this.mode = t.mode),
								n ||
									null == t._bodyInit ||
									((n = t._bodyInit), (t.bodyUsed = !0));
						} else this.url = String(t);
						if (
							((this.credentials = e.credentials || this.credentials || "omit"),
							(!e.headers && this.headers) || (this.headers = new f(e.headers)),
							(this.method =
								((r = e.method || this.method || "GET"),
								(o = r.toUpperCase()),
								i.indexOf(o) > -1 ? o : r)),
							(this.mode = e.mode || this.mode || null),
							(this.referrer = null),
							("GET" === this.method || "HEAD" === this.method) && n)
						)
							throw new TypeError("Body not allowed for GET or HEAD requests");
						this._initBody(n);
					}
					function m(t) {
						var e = new FormData();
						return (
							t
								.trim()
								.split("&")
								.forEach(function(t) {
									if (t) {
										var r = t.split("="),
											o = r.shift().replace(/\+/g, " "),
											n = r.join("=").replace(/\+/g, " ");
										e.append(decodeURIComponent(o), decodeURIComponent(n));
									}
								}),
							e
						);
					}
					function w(t, e) {
						e || (e = {}),
							(this.type = "default"),
							(this.status = void 0 === e.status ? 200 : e.status),
							(this.ok = this.status >= 200 && this.status < 300),
							(this.statusText = "statusText" in e ? e.statusText : "OK"),
							(this.headers = new f(e.headers)),
							(this.url = e.url || ""),
							this._initBody(t);
					}
				})("undefined" != typeof self ? self : this);
			},
			{},
		],
	},
	{},
	["MCp7"],
	null
);
//# sourceMappingURL=/fetch.7686487b.js.map
