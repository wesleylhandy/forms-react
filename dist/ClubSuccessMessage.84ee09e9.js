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
		"EI/h": [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = require("@emotion/core"),
					r = l(require("react")),
					t = require("../Contexts/GivingFormProvider"),
					o = require("react-aria-live"),
					n = i(require("../StyledComponents/FormWrapper")),
					s = i(require("../FormComponents/StyledComponents/FormPanel")),
					a = i(require("../FormComponents/Blocks/HeaderBlock")),
					u = i(require("../FormComponents/Blocks/FooterBlock"));
				function i(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function l(e) {
					if (e && e.__esModule) return e;
					var r = {};
					if (null != e)
						for (var t in e)
							if (Object.prototype.hasOwnProperty.call(e, t)) {
								var o =
									Object.defineProperty && Object.getOwnPropertyDescriptor
										? Object.getOwnPropertyDescriptor(e, t)
										: {};
								o.get || o.set ? Object.defineProperty(r, t, o) : (r[t] = e[t]);
							}
					return (r.default = e), r;
				}
				var c = function(e) {
						return { __html: e };
					},
					d = function(i) {
						var l = i.confirmed,
							d = i.successMessage;
						(0, r.useContext)(t.GivingFormContext).trackingVars;
						return (
							l &&
							(0, e.jsx)(
								r.default.Fragment,
								null,
								(0, e.jsx)(a.default, null),
								(0, e.jsx)(o.LiveMessage, {
									message:
										"Your payment is being processed. A new page with a thank you message just loaded.",
									"aria-live": "polite",
								}),
								(0, e.jsx)(
									n.default,
									{ style: { maxWidth: "818px", margin: "0 auto" } },
									(0, e.jsx)(s.default, {
										className: "success-message",
										dangerouslySetInnerHTML: c(d),
									})
								),
								(0, e.jsx)(u.default, null)
							)
						);
					},
					p = d;
				exports.default = p;
			},
			{
				"@emotion/core": "haMh",
				react: "1n8/",
				"../Contexts/GivingFormProvider": "zetz",
				"react-aria-live": "A22t",
				"../StyledComponents/FormWrapper": "dDLv",
				"../FormComponents/StyledComponents/FormPanel": "5N4C",
				"../FormComponents/Blocks/HeaderBlock": "whbU",
				"../FormComponents/Blocks/FooterBlock": "8Txh",
			},
		],
	},
	{},
	[],
	null
);
//# sourceMappingURL=/ClubSuccessMessage.84ee09e9.js.map
