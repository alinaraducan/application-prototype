var isNode	= ( typeof global !== "undefined" &&
	typeof process !== "undefined" &&
	{}.toString.call(global) == '[object global]' );

;((function (window, undefined) {
	window.ApplicationPrototype	= (function (builder) {
		var methods = {};
		var private_methods	= [];
		var public_methods	= {};
		var vars	= {};
		var config	= {};
		var crudEvents	= function (methods, public_methods, private_methods) {
			var events		= {};
			var bind_method	= function (v, f, conf) {
				var method	= "" + v;
				var method_config	= {
					listenedBefore	: true,
					listenedOn		: true,
					listenedAfter	: true,
					allowInteruption: true
				};
				if (typeof(conf) === "string" && conf !== "all" && conf !== "default") {
					method_config	= {
						listenedBefore	: false,
						listenedOn		: false,
						listenedAfter	: false,
						allowInteruption: false
					}
					if (conf.indexOf("light") !== -1) { // on
						method_config.listenedOn	= true;
						method_config.allowInteruption	= true;
					}
					if (conf.indexOf("af") !== -1) { // after
						method_config.listenedAfter	= true;
					}
					if (conf.indexOf("on") !== -1) { // on
						method_config.listenedOn	= true;
					}
					if (conf.indexOf("st") !== -1) { // interupt
						method_config.allowInteruption	= true;
					}
					if (conf.indexOf("before") !== -1 || conf.indexOf("bf") !== -1) { // before
						method_config.listenedBefore	= true;
					}
				}
				if (conf && typeof(conf) === "object") {
					((function (config, conf) {
						var i;
						for (i in config) if (i in conf) {
							if (typeof(conf[i]) === typeof(config[i])) {
								config[i]	= conf[i];
							}
						}
					})(method_config, conf));
				}
				public_methods[method]	= function () {
					var status	= true;
					if (method_config.listenedBefore) {
						if (methods.emit("before" + (method + "").replace(/^./, function (m) { return m.toUpperCase(); }), arguments, false, !method_config.allowInteruption) === false) {
							return false;
						}
					}
					if (method_config.listenedOn) {
						if (!methods.emit("on" + (method + "").replace(/^./, function (m) { return m.toUpperCase(); }), arguments, false, !method_config.allowInteruption) === false) {
							return false;
						}
					}
					var response	= ( f || methods[method] ).apply(public_methods, arguments);
					if (method_config.listenedAfter) {
						var args = arguments;
						setTimeout(function () {
							if (!methods.emit("after" + (method + "").replace(/^./, function (m) { return m.toUpperCase(); }), args, false, !method_config.allowInteruption) === false) {
								return false;
							}
						}, 1);
					}
					return response;
				};
				return public_methods;
			};
			methods.on	= function (eventName, handler, handlerId) {
				if (typeof(handler) !== "function")
					return false;
				if (!(eventName in events)) {
					events[eventName]	= {};
				}
				if (!handlerId) {
					handlerId	= "s" + (new Date().valueOf().toString(36)) + "-" + (Math.floor(Math.random() * 10000000).toString(36));
				}
				if (handlerId in events[eventName]) {
					delete events[eventName][handlerId];
				}
				events[eventName][handlerId]	= handler;
				return handlerId;
			};
			methods.off	= function (eventName, handlerId) {
				if (handlerId) {
					if (eventName in events) {
						if (handlerId in events[eventName]) {
							delete	events[eventName][handlerId];
							return true;
						}
					}
				} else if (eventName in events) {
					var b = false;
					for (handlerId in events[eventName]) {
						delete	events[eventName][handlerId];
						b = true;
					}
					return b;
				}
				return false;
			};
			methods.emit	= function (eventName, args, track, noSkipStopReturn) {
				if (eventName in events) {
					var i, err, status;
					for(i in events[eventName]) {
						try {
							if (events[eventName][i].apply(( track ? public_methods : methods ), (args || [])) === false && !noSkipStopReturn) {
								return false;
							}
						} catch(err) {
							console.error("Error detected: ", err);
						}
					}
				}
			};
			methods.bind	= function (method, callback, conf) {
				return bind_method(method, callback, conf);
			};
			var method;
			for (method in methods) {
				if (private_methods.indexOf(method) === -1) {
					((bind_method)(method));
				}
			}
		};

		methods.crudEvents	= function () {
			return crudEvents.apply(methods, arguments);
		};
		if (typeof(builder) === "function") {
			if (builder(config, vars, methods, public_methods, private_methods) !== false) {
				crudEvents(methods, public_methods, private_methods);
			} else {
				return methods;
			}
		} else {
			crudEvents(methods, public_methods, private_methods);
		}
		return public_methods;
	});
})((function () {
	if (typeof(window) !== "undefined") { return window;
	} else if (typeof(global) !== "undefined") { return global;
	} else if (typeof(APP_BUILDER_GLOBAL) === "undefined") {
		throw new Error("Define APP_BUILDER_GLOBAL as global reference");
	} else {
		return APP_BUILDER_GLOBAL;
	}
})()));


if (isNode) {
	module.exports	= ApplicationPrototype;
}
