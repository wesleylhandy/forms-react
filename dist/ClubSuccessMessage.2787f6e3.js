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
	function b(a) {
		return a && a.__esModule ? { d: a.default } : { d: a };
	}
	var a = {};
	require("haMh"),
		require("1n8/"),
		require("zetz"),
		require("A22t"),
		require("dDLv"),
		require("5N4C"),
		require("whbU"),
		require("8Txh");
	var c = function(e) {
			return { __html: e };
		},
		d = function(e) {
			var r = e.confirmed,
				o = e.successMessage;
			require("1n8/").useContext(require("zetz").GivingFormContext)
				.trackingVars;
			var $n8$$interop$default = b(require("1n8/"));
			return (
				r &&
				require("haMh").jsx(
					$n8$$interop$default.d.Fragment,
					null,
					require("haMh").jsx(require("whbU").default, null),
					require("haMh").jsx(require("A22t").LiveMessage, {
						message:
							"Your payment is being processed. A new page with a thank you message just loaded.",
						"aria-live": "polite",
					}),
					require("haMh").jsx(
						require("dDLv").default,
						{ style: { maxWidth: "818px", margin: "0 auto" } },
						require("haMh").jsx(require("5N4C").default, {
							className: "success-message",
							dangerouslySetInnerHTML: c(o),
						})
					),
					require("haMh").jsx(require("8Txh").default, null)
				)
			);
		};
	a.default = d;
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = a;
	} else if (typeof define === "function" && define.amd) {
		define(function() {
			return a;
		});
	}
	a.__esModule = true;
	return { "EI/h": a };
});
