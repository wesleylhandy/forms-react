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
	var a = {};
	require("haMh"), require("1n8/"), require("HMVu"), require("5N4C");
	var b = function(e) {
			return { __html: e };
		},
		c = function(e) {
			var r = e.submitted,
				n = e.successMessage,
				$ = require("1n8/").useContext(require("HMVu").SignUpFormContext)
					.fields;
			$.Firstname, $.Lastname, $.Spousename;
			return (
				r &&
				require("haMh").jsx(require("5N4C").default, {
					className: "success-message",
					dangerouslySetInnerHTML: b(n),
				})
			);
		};
	a.default = c;
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = a;
	} else if (typeof define === "function" && define.amd) {
		define(function() {
			return a;
		});
	}
	a.__esModule = true;
	return { LJnF: a };
});
