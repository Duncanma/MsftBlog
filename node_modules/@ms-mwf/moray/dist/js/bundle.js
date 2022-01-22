
/*!
 * MWF (Moray) v1.9.2
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Copyright 2011-2020 The Bootstrap Authors and Twitter, Inc.
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.mwf = {}));
}(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global$m =
	  // eslint-disable-next-line es/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var objectGetOwnPropertyDescriptor = {};

	var fails$l = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$k = fails$l;

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails$k(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable = {}.propertyIsEnumerable;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$2(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable;

	var createPropertyDescriptor$4 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString$1 = {}.toString;

	var classofRaw$1 = function (it) {
	  return toString$1.call(it).slice(8, -1);
	};

	var fails$j = fails$l;
	var classof$8 = classofRaw$1;

	var split = ''.split;

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails$j(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$8(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$9 = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject$4 = indexedObject;
	var requireObjectCoercible$8 = requireObjectCoercible$9;

	var toIndexedObject$7 = function (it) {
	  return IndexedObject$4(requireObjectCoercible$8(it));
	};

	var isObject$e = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var isObject$d = isObject$e;

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var toPrimitive$4 = function (input, PREFERRED_STRING) {
	  if (!isObject$d(input)) return input;
	  var fn, val;
	  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$d(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject$d(val = fn.call(input))) return val;
	  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$d(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var requireObjectCoercible$7 = requireObjectCoercible$9;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$a = function (argument) {
	  return Object(requireObjectCoercible$7(argument));
	};

	var toObject$9 = toObject$a;

	var hasOwnProperty = {}.hasOwnProperty;

	var has$b = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty.call(toObject$9(it), key);
	};

	var global$l = global$m;
	var isObject$c = isObject$e;

	var document$1 = global$l.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS = isObject$c(document$1) && isObject$c(document$1.createElement);

	var documentCreateElement$1 = function (it) {
	  return EXISTS ? document$1.createElement(it) : {};
	};

	var DESCRIPTORS$a = descriptors;
	var fails$i = fails$l;
	var createElement = documentCreateElement$1;

	// Thank's IE8 for his funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$a && !fails$i(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var DESCRIPTORS$9 = descriptors;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
	var createPropertyDescriptor$3 = createPropertyDescriptor$4;
	var toIndexedObject$6 = toIndexedObject$7;
	var toPrimitive$3 = toPrimitive$4;
	var has$a = has$b;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$9 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$6(O);
	  P = toPrimitive$3(P, true);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor(O, P);
	  } catch (error) { /* empty */ }
	  if (has$a(O, P)) return createPropertyDescriptor$3(!propertyIsEnumerableModule$1.f.call(O, P), O[P]);
	};

	var objectDefineProperty = {};

	var isObject$b = isObject$e;

	var anObject$f = function (it) {
	  if (!isObject$b(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  } return it;
	};

	var DESCRIPTORS$8 = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var anObject$e = anObject$f;
	var toPrimitive$2 = toPrimitive$4;

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var $defineProperty = Object.defineProperty;

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	objectDefineProperty.f = DESCRIPTORS$8 ? $defineProperty : function defineProperty(O, P, Attributes) {
	  anObject$e(O);
	  P = toPrimitive$2(P, true);
	  anObject$e(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$7 = descriptors;
	var definePropertyModule$5 = objectDefineProperty;
	var createPropertyDescriptor$2 = createPropertyDescriptor$4;

	var createNonEnumerableProperty$9 = DESCRIPTORS$7 ? function (object, key, value) {
	  return definePropertyModule$5.f(object, key, createPropertyDescriptor$2(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var redefine$9 = {exports: {}};

	var global$k = global$m;
	var createNonEnumerableProperty$8 = createNonEnumerableProperty$9;

	var setGlobal$3 = function (key, value) {
	  try {
	    createNonEnumerableProperty$8(global$k, key, value);
	  } catch (error) {
	    global$k[key] = value;
	  } return value;
	};

	var global$j = global$m;
	var setGlobal$2 = setGlobal$3;

	var SHARED = '__core-js_shared__';
	var store$3 = global$j[SHARED] || setGlobal$2(SHARED, {});

	var sharedStore = store$3;

	var store$2 = sharedStore;

	var functionToString = Function.toString;

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (typeof store$2.inspectSource != 'function') {
	  store$2.inspectSource = function (it) {
	    return functionToString.call(it);
	  };
	}

	var inspectSource$2 = store$2.inspectSource;

	var global$i = global$m;
	var inspectSource$1 = inspectSource$2;

	var WeakMap$2 = global$i.WeakMap;

	var nativeWeakMap = typeof WeakMap$2 === 'function' && /native code/.test(inspectSource$1(WeakMap$2));

	var shared$4 = {exports: {}};

	var store$1 = sharedStore;

	(shared$4.exports = function (key, value) {
	  return store$1[key] || (store$1[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.14.0',
	  mode: 'global',
	  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
	});

	var id$2 = 0;
	var postfix = Math.random();

	var uid$3 = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id$2 + postfix).toString(36);
	};

	var shared$3 = shared$4.exports;
	var uid$2 = uid$3;

	var keys$2 = shared$3('keys');

	var sharedKey$3 = function (key) {
	  return keys$2[key] || (keys$2[key] = uid$2(key));
	};

	var hiddenKeys$5 = {};

	var NATIVE_WEAK_MAP$1 = nativeWeakMap;
	var global$h = global$m;
	var isObject$a = isObject$e;
	var createNonEnumerableProperty$7 = createNonEnumerableProperty$9;
	var objectHas = has$b;
	var shared$2 = sharedStore;
	var sharedKey$2 = sharedKey$3;
	var hiddenKeys$4 = hiddenKeys$5;

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var WeakMap$1 = global$h.WeakMap;
	var set, get, has$9;

	var enforce = function (it) {
	  return has$9(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$a(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (NATIVE_WEAK_MAP$1 || shared$2.state) {
	  var store = shared$2.state || (shared$2.state = new WeakMap$1());
	  var wmget = store.get;
	  var wmhas = store.has;
	  var wmset = store.set;
	  set = function (it, metadata) {
	    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    wmset.call(store, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget.call(store, it) || {};
	  };
	  has$9 = function (it) {
	    return wmhas.call(store, it);
	  };
	} else {
	  var STATE = sharedKey$2('state');
	  hiddenKeys$4[STATE] = true;
	  set = function (it, metadata) {
	    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$7(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return objectHas(it, STATE) ? it[STATE] : {};
	  };
	  has$9 = function (it) {
	    return objectHas(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has$9,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var global$g = global$m;
	var createNonEnumerableProperty$6 = createNonEnumerableProperty$9;
	var has$8 = has$b;
	var setGlobal$1 = setGlobal$3;
	var inspectSource = inspectSource$2;
	var InternalStateModule$3 = internalState;

	var getInternalState$2 = InternalStateModule$3.get;
	var enforceInternalState$1 = InternalStateModule$3.enforce;
	var TEMPLATE = String(String).split('String');

	(redefine$9.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  var state;
	  if (typeof value == 'function') {
	    if (typeof key == 'string' && !has$8(value, 'name')) {
	      createNonEnumerableProperty$6(value, 'name', key);
	    }
	    state = enforceInternalState$1(value);
	    if (!state.source) {
	      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
	    }
	  }
	  if (O === global$g) {
	    if (simple) O[key] = value;
	    else setGlobal$1(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }
	  if (simple) O[key] = value;
	  else createNonEnumerableProperty$6(O, key, value);
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return typeof this == 'function' && getInternalState$2(this).source || inspectSource(this);
	});

	var global$f = global$m;

	var path$1 = global$f;

	var path = path$1;
	var global$e = global$m;

	var aFunction$4 = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn$4 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction$4(path[namespace]) || aFunction$4(global$e[namespace])
	    : path[namespace] && path[namespace][method] || global$e[namespace] && global$e[namespace][method];
	};

	var objectGetOwnPropertyNames = {};

	var ceil = Math.ceil;
	var floor$1 = Math.floor;

	// `ToInteger` abstract operation
	// https://tc39.es/ecma262/#sec-tointeger
	var toInteger$5 = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$1 : ceil)(argument);
	};

	var toInteger$4 = toInteger$5;

	var min$4 = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$b = function (argument) {
	  return argument > 0 ? min$4(toInteger$4(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toInteger$3 = toInteger$5;

	var max$3 = Math.max;
	var min$3 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$3 = function (index, length) {
	  var integer = toInteger$3(index);
	  return integer < 0 ? max$3(integer + length, 0) : min$3(integer, length);
	};

	var toIndexedObject$5 = toIndexedObject$7;
	var toLength$a = toLength$b;
	var toAbsoluteIndex$2 = toAbsoluteIndex$3;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$5 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$5($this);
	    var length = toLength$a(O.length);
	    var index = toAbsoluteIndex$2(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$5(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$5(false)
	};

	var has$7 = has$b;
	var toIndexedObject$4 = toIndexedObject$7;
	var indexOf = arrayIncludes.indexOf;
	var hiddenKeys$3 = hiddenKeys$5;

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$4(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !has$7(hiddenKeys$3, key) && has$7(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has$7(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys$3 = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var internalObjectKeys$1 = objectKeysInternal;
	var enumBugKeys$2 = enumBugKeys$3;

	var hiddenKeys$2 = enumBugKeys$2.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es/no-object-getownpropertynames -- safe
	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys$1(O, hiddenKeys$2);
	};

	var objectGetOwnPropertySymbols = {};

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var getBuiltIn$3 = getBuiltIn$4;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
	var anObject$d = anObject$f;

	// all object keys, includes non-enumerable and symbols
	var ownKeys$1 = getBuiltIn$3('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule.f(anObject$d(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};

	var has$6 = has$b;
	var ownKeys = ownKeys$1;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var definePropertyModule$4 = objectDefineProperty;

	var copyConstructorProperties$1 = function (target, source) {
	  var keys = ownKeys(source);
	  var defineProperty = definePropertyModule$4.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!has$6(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	  }
	};

	var fails$h = fails$l;

	var replacement = /#|\.prototype\./;

	var isForced$4 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : typeof detection == 'function' ? fails$h(detection)
	    : !!detection;
	};

	var normalize = isForced$4.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$4.data = {};
	var NATIVE = isForced$4.NATIVE = 'N';
	var POLYFILL = isForced$4.POLYFILL = 'P';

	var isForced_1 = isForced$4;

	var global$d = global$m;
	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var createNonEnumerableProperty$5 = createNonEnumerableProperty$9;
	var redefine$8 = redefine$9.exports;
	var setGlobal = setGlobal$3;
	var copyConstructorProperties = copyConstructorProperties$1;
	var isForced$3 = isForced_1;

	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global$d;
	  } else if (STATIC) {
	    target = global$d[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global$d[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$1(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced$3(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty === typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty$5(sourceProperty, 'sham', true);
	    }
	    // extend global
	    redefine$8(target, key, sourceProperty, options);
	  }
	};

	var fails$g = fails$l;

	var arrayMethodIsStrict$4 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails$g(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};

	/* eslint-disable es/no-array-prototype-indexof -- required for testing */
	var $$l = _export;
	var $indexOf = arrayIncludes.indexOf;
	var arrayMethodIsStrict$3 = arrayMethodIsStrict$4;

	var nativeIndexOf = [].indexOf;

	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
	var STRICT_METHOD$3 = arrayMethodIsStrict$3('indexOf');

	// `Array.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.indexof
	$$l({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD$3 }, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? nativeIndexOf.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var classof$7 = classofRaw$1;

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray$3 = Array.isArray || function isArray(arg) {
	  return classof$7(arg) == 'Array';
	};

	var getBuiltIn$2 = getBuiltIn$4;

	var engineUserAgent = getBuiltIn$2('navigator', 'userAgent') || '';

	var global$c = global$m;
	var userAgent = engineUserAgent;

	var process = global$c.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8;
	var match, version$1;

	if (v8) {
	  match = v8.split('.');
	  version$1 = match[0] < 4 ? 1 : match[0] + match[1];
	} else if (userAgent) {
	  match = userAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent.match(/Chrome\/(\d+)/);
	    if (match) version$1 = match[1];
	  }
	}

	var engineV8Version = version$1 && +version$1;

	/* eslint-disable es/no-symbol -- required for testing */

	var V8_VERSION$2 = engineV8Version;
	var fails$f = fails$l;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$f(function () {
	  var symbol = Symbol();
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
	});

	/* eslint-disable es/no-symbol -- required for testing */

	var NATIVE_SYMBOL$1 = nativeSymbol;

	var useSymbolAsUid = NATIVE_SYMBOL$1
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var global$b = global$m;
	var shared$1 = shared$4.exports;
	var has$5 = has$b;
	var uid$1 = uid$3;
	var NATIVE_SYMBOL = nativeSymbol;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;

	var WellKnownSymbolsStore = shared$1('wks');
	var Symbol$1 = global$b.Symbol;
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

	var wellKnownSymbol$k = function (name) {
	  if (!has$5(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
	    if (NATIVE_SYMBOL && has$5(Symbol$1, name)) {
	      WellKnownSymbolsStore[name] = Symbol$1[name];
	    } else {
	      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
	    }
	  } return WellKnownSymbolsStore[name];
	};

	var isObject$9 = isObject$e;
	var isArray$2 = isArray$3;
	var wellKnownSymbol$j = wellKnownSymbol$k;

	var SPECIES$5 = wellKnownSymbol$j('species');

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate$3 = function (originalArray, length) {
	  var C;
	  if (isArray$2(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray$2(C.prototype))) C = undefined;
	    else if (isObject$9(C)) {
	      C = C[SPECIES$5];
	      if (C === null) C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
	};

	var toPrimitive$1 = toPrimitive$4;
	var definePropertyModule$3 = objectDefineProperty;
	var createPropertyDescriptor$1 = createPropertyDescriptor$4;

	var createProperty$4 = function (object, key, value) {
	  var propertyKey = toPrimitive$1(key);
	  if (propertyKey in object) definePropertyModule$3.f(object, propertyKey, createPropertyDescriptor$1(0, value));
	  else object[propertyKey] = value;
	};

	var fails$e = fails$l;
	var wellKnownSymbol$i = wellKnownSymbol$k;
	var V8_VERSION$1 = engineV8Version;

	var SPECIES$4 = wellKnownSymbol$i('species');

	var arrayMethodHasSpeciesSupport$4 = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION$1 >= 51 || !fails$e(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$4] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $$k = _export;
	var toAbsoluteIndex$1 = toAbsoluteIndex$3;
	var toInteger$2 = toInteger$5;
	var toLength$9 = toLength$b;
	var toObject$8 = toObject$a;
	var arraySpeciesCreate$2 = arraySpeciesCreate$3;
	var createProperty$3 = createProperty$4;
	var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;

	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$3('splice');

	var max$2 = Math.max;
	var min$2 = Math.min;
	var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

	// `Array.prototype.splice` method
	// https://tc39.es/ecma262/#sec-array.prototype.splice
	// with adding support of @@species
	$$k({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
	  splice: function splice(start, deleteCount /* , ...items */) {
	    var O = toObject$8(this);
	    var len = toLength$9(O.length);
	    var actualStart = toAbsoluteIndex$1(start, len);
	    var argumentsLength = arguments.length;
	    var insertCount, actualDeleteCount, A, k, from, to;
	    if (argumentsLength === 0) {
	      insertCount = actualDeleteCount = 0;
	    } else if (argumentsLength === 1) {
	      insertCount = 0;
	      actualDeleteCount = len - actualStart;
	    } else {
	      insertCount = argumentsLength - 2;
	      actualDeleteCount = min$2(max$2(toInteger$2(deleteCount), 0), len - actualStart);
	    }
	    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER$1) {
	      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
	    }
	    A = arraySpeciesCreate$2(O, actualDeleteCount);
	    for (k = 0; k < actualDeleteCount; k++) {
	      from = actualStart + k;
	      if (from in O) createProperty$3(A, k, O[from]);
	    }
	    A.length = actualDeleteCount;
	    if (insertCount < actualDeleteCount) {
	      for (k = actualStart; k < len - actualDeleteCount; k++) {
	        from = k + actualDeleteCount;
	        to = k + insertCount;
	        if (from in O) O[to] = O[from];
	        else delete O[to];
	      }
	      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
	    } else if (insertCount > actualDeleteCount) {
	      for (k = len - actualDeleteCount; k > actualStart; k--) {
	        from = k + actualDeleteCount - 1;
	        to = k + insertCount - 1;
	        if (from in O) O[to] = O[from];
	        else delete O[to];
	      }
	    }
	    for (k = 0; k < insertCount; k++) {
	      O[k + actualStart] = arguments[k + 2];
	    }
	    O.length = len - actualDeleteCount + insertCount;
	    return A;
	  }
	});

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys$1 = enumBugKeys$3;

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es/no-object-keys -- safe
	var objectKeys$3 = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys$1);
	};

	var DESCRIPTORS$6 = descriptors;
	var fails$d = fails$l;
	var objectKeys$2 = objectKeys$3;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var toObject$7 = toObject$a;
	var IndexedObject$3 = indexedObject;

	// eslint-disable-next-line es/no-object-assign -- safe
	var $assign = Object.assign;
	// eslint-disable-next-line es/no-object-defineproperty -- required for testing
	var defineProperty$5 = Object.defineProperty;

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	var objectAssign = !$assign || fails$d(function () {
	  // should have correct order of operations (Edge bug)
	  if (DESCRIPTORS$6 && $assign({ b: 1 }, $assign(defineProperty$5({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty$5(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), { b: 2 })).b !== 1) return true;
	  // should work with symbols and should have deterministic property order (V8 bug)
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line es/no-symbol -- safe
	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
	  return $assign({}, A)[symbol] != 7 || objectKeys$2($assign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
	  var T = toObject$7(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  var propertyIsEnumerable = propertyIsEnumerableModule.f;
	  while (argumentsLength > index) {
	    var S = IndexedObject$3(arguments[index++]);
	    var keys = getOwnPropertySymbols ? objectKeys$2(S).concat(getOwnPropertySymbols(S)) : objectKeys$2(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!DESCRIPTORS$6 || propertyIsEnumerable.call(S, key)) T[key] = S[key];
	    }
	  } return T;
	} : $assign;

	var $$j = _export;
	var assign = objectAssign;

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	// eslint-disable-next-line es/no-object-assign -- required for testing
	$$j({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
	  assign: assign
	});

	// a string of all valid unicode whitespaces
	var whitespaces$4 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
	  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var requireObjectCoercible$6 = requireObjectCoercible$9;
	var whitespaces$3 = whitespaces$4;

	var whitespace = '[' + whitespaces$3 + ']';
	var ltrim = RegExp('^' + whitespace + whitespace + '*');
	var rtrim = RegExp(whitespace + whitespace + '*$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod$4 = function (TYPE) {
	  return function ($this) {
	    var string = String(requireObjectCoercible$6($this));
	    if (TYPE & 1) string = string.replace(ltrim, '');
	    if (TYPE & 2) string = string.replace(rtrim, '');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
	  start: createMethod$4(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimend
	  end: createMethod$4(2),
	  // `String.prototype.trim` method
	  // https://tc39.es/ecma262/#sec-string.prototype.trim
	  trim: createMethod$4(3)
	};

	var global$a = global$m;
	var trim$2 = stringTrim.trim;
	var whitespaces$2 = whitespaces$4;

	var $parseInt = global$a.parseInt;
	var hex = /^[+-]?0[Xx]/;
	var FORCED$3 = $parseInt(whitespaces$2 + '08') !== 8 || $parseInt(whitespaces$2 + '0x16') !== 22;

	// `parseInt` method
	// https://tc39.es/ecma262/#sec-parseint-string-radix
	var numberParseInt = FORCED$3 ? function parseInt(string, radix) {
	  var S = trim$2(String(string));
	  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
	} : $parseInt;

	var $$i = _export;
	var parseIntImplementation = numberParseInt;

	// `parseInt` method
	// https://tc39.es/ecma262/#sec-parseint-string-radix
	$$i({ global: true, forced: parseInt != parseIntImplementation }, {
	  parseInt: parseIntImplementation
	});

	var $$h = _export;
	var isObject$8 = isObject$e;
	var isArray$1 = isArray$3;
	var toAbsoluteIndex = toAbsoluteIndex$3;
	var toLength$8 = toLength$b;
	var toIndexedObject$3 = toIndexedObject$7;
	var createProperty$2 = createProperty$4;
	var wellKnownSymbol$h = wellKnownSymbol$k;
	var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;

	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2('slice');

	var SPECIES$3 = wellKnownSymbol$h('species');
	var nativeSlice = [].slice;
	var max$1 = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.es/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	$$h({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject$3(this);
	    var length = toLength$8(O.length);
	    var k = toAbsoluteIndex(start, length);
	    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray$1(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (typeof Constructor == 'function' && (Constructor === Array || isArray$1(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject$8(Constructor)) {
	        Constructor = Constructor[SPECIES$3];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === Array || Constructor === undefined) {
	        return nativeSlice.call(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$2(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var ViewPort = {
	  XS: 0,
	  SM: 540,
	  MD: 860,
	  LG: 1084,
	  XL: 1400
	};
	var DetectionUtil = {
	  detectIE: function detectIE() {
	    /**
	    * detect IE
	    * returns version of IE or false, if browser is not Internet Explorer
	    */
	    var UA = window.navigator.userAgent;
	    var MSIE = UA.indexOf('MSIE ');
	    var TRIDENT = UA.indexOf('Trident/');
	    var EDGE = UA.indexOf('Edge/'); // IE 10 or older => return version number

	    if (MSIE > 0) {
	      return parseInt(UA.slice(MSIE + 5, UA.indexOf('.', MSIE)), 10);
	    } // IE 11 => return version number


	    if (TRIDENT > 0) {
	      var RV = UA.indexOf('rv:');
	      return parseInt(UA.slice(RV + 3, UA.indexOf('.', RV)), 10);
	    } // Edge (IE 12+) => return version number


	    if (EDGE > 0) {
	      return parseInt(UA.slice(EDGE + 5, UA.indexOf('.', EDGE)), 10);
	    } // other browser


	    return false;
	  },

	  /* eslint-disable no-useless-escape, unicorn/better-regex */
	  detectMobile: function detectMobile(includeTabletCheck) {
	    if (includeTabletCheck === void 0) {
	      includeTabletCheck = false;
	    }

	    /**
	    * detect if mobile and/or tablet device
	    * returns bool
	    */
	    var check = false;

	    if (includeTabletCheck) {
	      (function (a) {
	        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.slice(0, 4))) {
	          check = true;
	        }
	      })(navigator.userAgent || navigator.vendor || window.opera);
	    } else {
	      (function (a) {
	        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.slice(0, 4))) {
	          check = true;
	        }
	      })(navigator.userAgent || navigator.vendor || window.opera);
	    }

	    return check;
	  },

	  /**
	  * Gets viewport based on brower's window width.
	  * @return {string} Returns viewport
	  */
	  detectViewport: function detectViewport() {
	    var windowWidth = window.innerWidth;

	    if (windowWidth >= ViewPort.XS && windowWidth < ViewPort.SM) {
	      return 'xs';
	    }

	    if (windowWidth < ViewPort.MD && windowWidth >= ViewPort.SM) {
	      return 'sm';
	    }

	    if (windowWidth < ViewPort.LG && windowWidth >= ViewPort.MD) {
	      return 'md';
	    }

	    if (windowWidth < ViewPort.XL && windowWidth >= ViewPort.LG) {
	      return 'lg';
	    }

	    if (windowWidth >= ViewPort.XL) {
	      return 'xl';
	    }
	  },

	  /* eslint-enable no-useless-escape */
	  isBiDirectional: function isBiDirectional(el) {
	    if (!el) {
	      el = document.querySelector('html');
	    }

	    return el.getAttribute('dir') === 'rtl';
	  }
	};

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;

	  _setPrototypeOf(subClass, superClass);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

	  return arr2;
	}

	function _createForOfIteratorHelperLoose(o, allowArrayLike) {
	  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
	  if (it) return (it = it.call(o)).next.bind(it);

	  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
	    if (it) o = it;
	    var i = 0;
	    return function () {
	      if (i >= o.length) return {
	        done: true
	      };
	      return {
	        done: false,
	        value: o[i++]
	      };
	    };
	  }

	  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	var aFunction$3 = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  } return it;
	};

	var aFunction$2 = aFunction$3;

	// optional / simple context binding
	var functionBindContext = function (fn, that, length) {
	  aFunction$2(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 0: return function () {
	      return fn.call(that);
	    };
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var bind$2 = functionBindContext;
	var IndexedObject$2 = indexedObject;
	var toObject$6 = toObject$a;
	var toLength$7 = toLength$b;
	var arraySpeciesCreate$1 = arraySpeciesCreate$3;

	var push = [].push;

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
	var createMethod$3 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var IS_FILTER_OUT = TYPE == 7;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject$6($this);
	    var self = IndexedObject$2(O);
	    var boundFunction = bind$2(callbackfn, that, 3);
	    var length = toLength$7(self.length);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate$1;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push.call(target, value); // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push.call(target, value); // filterOut
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$3(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod$3(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod$3(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod$3(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod$3(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod$3(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$3(6),
	  // `Array.prototype.filterOut` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterOut: createMethod$3(7)
	};

	var $forEach = arrayIteration.forEach;
	var arrayMethodIsStrict$2 = arrayMethodIsStrict$4;

	var STRICT_METHOD$2 = arrayMethodIsStrict$2('forEach');

	// `Array.prototype.forEach` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	var arrayForEach = !STRICT_METHOD$2 ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	// eslint-disable-next-line es/no-array-prototype-foreach -- safe
	} : [].forEach;

	var global$9 = global$m;
	var DOMIterables$1 = domIterables;
	var forEach = arrayForEach;
	var createNonEnumerableProperty$4 = createNonEnumerableProperty$9;

	for (var COLLECTION_NAME$1 in DOMIterables$1) {
	  var Collection$1 = global$9[COLLECTION_NAME$1];
	  var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;
	  // some Chrome versions have non-configurable methods on DOMTokenList
	  if (CollectionPrototype$1 && CollectionPrototype$1.forEach !== forEach) try {
	    createNonEnumerableProperty$4(CollectionPrototype$1, 'forEach', forEach);
	  } catch (error) {
	    CollectionPrototype$1.forEach = forEach;
	  }
	}

	var wellKnownSymbol$g = wellKnownSymbol$k;

	var TO_STRING_TAG$3 = wellKnownSymbol$g('toStringTag');
	var test = {};

	test[TO_STRING_TAG$3] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
	var classofRaw = classofRaw$1;
	var wellKnownSymbol$f = wellKnownSymbol$k;

	var TO_STRING_TAG$2 = wellKnownSymbol$f('toStringTag');
	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof$6 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$2)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
	};

	var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
	var classof$5 = classof$6;

	// `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
	  return '[object ' + classof$5(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var redefine$7 = redefine$9.exports;
	var toString = objectToString;

	// `Object.prototype.toString` method
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	if (!TO_STRING_TAG_SUPPORT) {
	  redefine$7(Object.prototype, 'toString', toString, { unsafe: true });
	}

	var anObject$c = anObject$f;

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
	var regexpFlags$1 = function () {
	  var that = anObject$c(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.dotAll) result += 's';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

	var redefine$6 = redefine$9.exports;
	var anObject$b = anObject$f;
	var fails$c = fails$l;
	var flags = regexpFlags$1;

	var TO_STRING = 'toString';
	var RegExpPrototype$2 = RegExp.prototype;
	var nativeToString = RegExpPrototype$2[TO_STRING];

	var NOT_GENERIC = fails$c(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
	// FF44- RegExp#toString has a wrong name
	var INCORRECT_NAME = nativeToString.name != TO_STRING;

	// `RegExp.prototype.toString` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
	if (NOT_GENERIC || INCORRECT_NAME) {
	  redefine$6(RegExp.prototype, TO_STRING, function toString() {
	    var R = anObject$b(this);
	    var p = String(R.source);
	    var rf = R.flags;
	    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype$2) ? flags.call(R) : rf);
	    return '/' + p + '/' + f;
	  }, { unsafe: true });
	}

	var InitializationUtil = {
	  /**
	   * Initialize a component after DOM is loaded
	   * @param {string} selector - DOM selector for component
	   * @param {Function} init - Callback function to initialize the component
	   */
	  initializeComponent: function initializeComponent(selector, init) {
	    document.querySelectorAll(selector).forEach(function (node) {
	      return init(node);
	    });
	  },

	  /**
	   * Iterate over list to add event listeners
	   * @param {array} eventList - List of event maps
	   */
	  addEvents: function addEvents(eventList) {
	    for (var _iterator = _createForOfIteratorHelperLoose(eventList), _step; !(_step = _iterator()).done;) {
	      var obj = _step.value;

	      if (typeof obj.options === 'undefined') {
	        obj.options = {};
	      }

	      if (typeof obj.el.addEventListener === 'function') {
	        obj.el.addEventListener(obj.type, obj.handler, obj.options);
	      } else if (obj.el.toString() === '[object MediaQueryList]' && typeof obj.el.addListener === 'function') {
	        obj.el.addListener(obj.handler); // for Safari <14
	      }
	    }
	  },

	  /**
	   * Iterate over list to remove event listeners
	   * @param {array} eventList - List of event maps
	   */
	  removeEvents: function removeEvents(eventList) {
	    for (var _iterator2 = _createForOfIteratorHelperLoose(eventList), _step2; !(_step2 = _iterator2()).done;) {
	      var obj = _step2.value;

	      if (typeof obj.el.removeEventListener === 'function') {
	        obj.el.removeEventListener(obj.type, obj.handler);
	      } else if (obj.el.toString() === '[object MediaQueryList]' && typeof obj.el.removeListener === 'function') {
	        obj.el.removeListener(obj.handler); // for Safari <14
	      }
	    }
	  },

	  /**
	   * Tears down each in a list of mwf component instances
	   * @param {Array} componentList an array of mwf component instance
	   */
	  tearDownComponentList: function tearDownComponentList(componentList) {
	    if (Array.isArray(componentList)) {
	      var component;

	      while (componentList.length > 0) {
	        component = componentList.pop();

	        if (typeof component.remove === 'function') {
	          component.remove();
	        }
	      }
	    }
	  }
	};

	var $$g = _export;
	var fails$b = fails$l;
	var isArray = isArray$3;
	var isObject$7 = isObject$e;
	var toObject$5 = toObject$a;
	var toLength$6 = toLength$b;
	var createProperty$1 = createProperty$4;
	var arraySpeciesCreate = arraySpeciesCreate$3;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;
	var wellKnownSymbol$e = wellKnownSymbol$k;
	var V8_VERSION = engineV8Version;

	var IS_CONCAT_SPREADABLE = wellKnownSymbol$e('isConcatSpreadable');
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$b(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('concat');

	var isConcatSpreadable = function (O) {
	  if (!isObject$7(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray(O);
	};

	var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	$$g({ target: 'Array', proto: true, forced: FORCED$2 }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject$5(this);
	    var A = arraySpeciesCreate(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = toLength$6(E.length);
	        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
	      } else {
	        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        createProperty$1(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	var anObject$a = anObject$f;

	var iteratorClose$2 = function (iterator) {
	  var returnMethod = iterator['return'];
	  if (returnMethod !== undefined) {
	    return anObject$a(returnMethod.call(iterator)).value;
	  }
	};

	var anObject$9 = anObject$f;
	var iteratorClose$1 = iteratorClose$2;

	// call something on iterator step with safe closing on error
	var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject$9(value)[0], value[1]) : fn(value);
	  } catch (error) {
	    iteratorClose$1(iterator);
	    throw error;
	  }
	};

	var iterators = {};

	var wellKnownSymbol$d = wellKnownSymbol$k;
	var Iterators$4 = iterators;

	var ITERATOR$5 = wellKnownSymbol$d('iterator');
	var ArrayPrototype$1 = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod$2 = function (it) {
	  return it !== undefined && (Iterators$4.Array === it || ArrayPrototype$1[ITERATOR$5] === it);
	};

	var classof$4 = classof$6;
	var Iterators$3 = iterators;
	var wellKnownSymbol$c = wellKnownSymbol$k;

	var ITERATOR$4 = wellKnownSymbol$c('iterator');

	var getIteratorMethod$2 = function (it) {
	  if (it != undefined) return it[ITERATOR$4]
	    || it['@@iterator']
	    || Iterators$3[classof$4(it)];
	};

	var bind$1 = functionBindContext;
	var toObject$4 = toObject$a;
	var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
	var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
	var toLength$5 = toLength$b;
	var createProperty = createProperty$4;
	var getIteratorMethod$1 = getIteratorMethod$2;

	// `Array.from` method implementation
	// https://tc39.es/ecma262/#sec-array.from
	var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	  var O = toObject$4(arrayLike);
	  var C = typeof this == 'function' ? this : Array;
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  var iteratorMethod = getIteratorMethod$1(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  if (mapping) mapfn = bind$1(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
	  // if the target is not iterable or it's an array with the default iterator - use a simple case
	  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod$1(iteratorMethod))) {
	    iterator = iteratorMethod.call(O);
	    next = iterator.next;
	    result = new C();
	    for (;!(step = next.call(iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty(result, index, value);
	    }
	  } else {
	    length = toLength$5(O.length);
	    result = new C(length);
	    for (;length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty(result, index, value);
	    }
	  }
	  result.length = index;
	  return result;
	};

	var wellKnownSymbol$b = wellKnownSymbol$k;

	var ITERATOR$3 = wellKnownSymbol$b('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR$3] = function () {
	    return this;
	  };
	  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration$2 = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR$3] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	var $$f = _export;
	var from = arrayFrom;
	var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2;

	var INCORRECT_ITERATION = !checkCorrectnessOfIteration$1(function (iterable) {
	  // eslint-disable-next-line es/no-array-from -- required for testing
	  Array.from(iterable);
	});

	// `Array.from` method
	// https://tc39.es/ecma262/#sec-array.from
	$$f({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
	  from: from
	});

	var toInteger$1 = toInteger$5;
	var requireObjectCoercible$5 = requireObjectCoercible$9;

	// `String.prototype.{ codePointAt, at }` methods implementation
	var createMethod$2 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = String(requireObjectCoercible$5($this));
	    var position = toInteger$1(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = S.charCodeAt(position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING ? S.charAt(position) : first
	        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$2(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$2(true)
	};

	var fails$a = fails$l;

	var correctPrototypeGetter = !fails$a(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var has$4 = has$b;
	var toObject$3 = toObject$a;
	var sharedKey$1 = sharedKey$3;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

	var IE_PROTO$1 = sharedKey$1('IE_PROTO');
	var ObjectPrototype = Object.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	// eslint-disable-next-line es/no-object-getprototypeof -- safe
	var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
	  O = toObject$3(O);
	  if (has$4(O, IE_PROTO$1)) return O[IE_PROTO$1];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectPrototype : null;
	};

	var fails$9 = fails$l;
	var getPrototypeOf$1 = objectGetPrototypeOf;
	var createNonEnumerableProperty$3 = createNonEnumerableProperty$9;
	var has$3 = has$b;
	var wellKnownSymbol$a = wellKnownSymbol$k;

	var ITERATOR$2 = wellKnownSymbol$a('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;

	var returnThis$2 = function () { return this; };

	// `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

	/* eslint-disable es/no-array-prototype-keys -- safe */
	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails$9(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype$2[ITERATOR$2].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (!has$3(IteratorPrototype$2, ITERATOR$2)) {
	  createNonEnumerableProperty$3(IteratorPrototype$2, ITERATOR$2, returnThis$2);
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$2,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var DESCRIPTORS$5 = descriptors;
	var definePropertyModule$2 = objectDefineProperty;
	var anObject$8 = anObject$f;
	var objectKeys$1 = objectKeys$3;

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es/no-object-defineproperties -- safe
	var objectDefineProperties = DESCRIPTORS$5 ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$8(O);
	  var keys = objectKeys$1(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule$2.f(O, key = keys[index++], Properties[key]);
	  return O;
	};

	var getBuiltIn$1 = getBuiltIn$4;

	var html$1 = getBuiltIn$1('document', 'documentElement');

	var anObject$7 = anObject$f;
	var defineProperties = objectDefineProperties;
	var enumBugKeys = enumBugKeys$3;
	var hiddenKeys$1 = hiddenKeys$5;
	var html = html$1;
	var documentCreateElement = documentCreateElement$1;
	var sharedKey = sharedKey$3;

	var GT = '>';
	var LT = '<';
	var PROTOTYPE = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO = sharedKey('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    /* global ActiveXObject -- old IE */
	    activeXDocument = document.domain && new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys$1[IE_PROTO] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE] = anObject$7(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : defineProperties(result, Properties);
	};

	var defineProperty$4 = objectDefineProperty.f;
	var has$2 = has$b;
	var wellKnownSymbol$9 = wellKnownSymbol$k;

	var TO_STRING_TAG$1 = wellKnownSymbol$9('toStringTag');

	var setToStringTag$3 = function (it, TAG, STATIC) {
	  if (it && !has$2(it = STATIC ? it : it.prototype, TO_STRING_TAG$1)) {
	    defineProperty$4(it, TO_STRING_TAG$1, { configurable: true, value: TAG });
	  }
	};

	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
	var create$2 = objectCreate;
	var createPropertyDescriptor = createPropertyDescriptor$4;
	var setToStringTag$2 = setToStringTag$3;
	var Iterators$2 = iterators;

	var returnThis$1 = function () { return this; };

	var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create$2(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
	  setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false);
	  Iterators$2[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var isObject$6 = isObject$e;

	var aPossiblePrototype$1 = function (it) {
	  if (!isObject$6(it) && it !== null) {
	    throw TypeError("Can't set " + String(it) + ' as a prototype');
	  } return it;
	};

	/* eslint-disable no-proto -- safe */

	var anObject$6 = anObject$f;
	var aPossiblePrototype = aPossiblePrototype$1;

	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	// eslint-disable-next-line es/no-object-setprototypeof -- safe
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
	    setter.call(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject$6(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter.call(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var $$e = _export;
	var createIteratorConstructor = createIteratorConstructor$1;
	var getPrototypeOf = objectGetPrototypeOf;
	var setPrototypeOf$1 = objectSetPrototypeOf;
	var setToStringTag$1 = setToStringTag$3;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$9;
	var redefine$5 = redefine$9.exports;
	var wellKnownSymbol$8 = wellKnownSymbol$k;
	var Iterators$1 = iterators;
	var IteratorsCore = iteratorsCore;

	var IteratorPrototype = IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$1 = wellKnownSymbol$8('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () { return this; };

	var defineIterator$2 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$1]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
	        if (setPrototypeOf$1) {
	          setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
	        } else if (typeof CurrentIteratorPrototype[ITERATOR$1] != 'function') {
	          createNonEnumerableProperty$2(CurrentIteratorPrototype, ITERATOR$1, returnThis);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    INCORRECT_VALUES_NAME = true;
	    defaultIterator = function values() { return nativeIterator.call(this); };
	  }

	  // define iterator
	  if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
	    createNonEnumerableProperty$2(IterablePrototype, ITERATOR$1, defaultIterator);
	  }
	  Iterators$1[NAME] = defaultIterator;

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        redefine$5(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$e({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  return methods;
	};

	var charAt$1 = stringMultibyte.charAt;
	var InternalStateModule$2 = internalState;
	var defineIterator$1 = defineIterator$2;

	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$2 = InternalStateModule$2.set;
	var getInternalState$1 = InternalStateModule$2.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
	defineIterator$1(String, 'String', function (iterated) {
	  setInternalState$2(this, {
	    type: STRING_ITERATOR,
	    string: String(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState$1(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return { value: undefined, done: true };
	  point = charAt$1(string, index);
	  state.index += point.length;
	  return { value: point, done: false };
	});

	var $$d = _export;
	var IndexedObject$1 = indexedObject;
	var toIndexedObject$2 = toIndexedObject$7;
	var arrayMethodIsStrict$1 = arrayMethodIsStrict$4;

	var nativeJoin = [].join;

	var ES3_STRINGS = IndexedObject$1 != Object;
	var STRICT_METHOD$1 = arrayMethodIsStrict$1('join', ',');

	// `Array.prototype.join` method
	// https://tc39.es/ecma262/#sec-array.prototype.join
	$$d({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD$1 }, {
	  join: function join(separator) {
	    return nativeJoin.call(toIndexedObject$2(this), separator === undefined ? ',' : separator);
	  }
	});

	var wellKnownSymbol$7 = wellKnownSymbol$k;
	var create$1 = objectCreate;
	var definePropertyModule$1 = objectDefineProperty;

	var UNSCOPABLES = wellKnownSymbol$7('unscopables');
	var ArrayPrototype = Array.prototype;

	// Array.prototype[@@unscopables]
	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	if (ArrayPrototype[UNSCOPABLES] == undefined) {
	  definePropertyModule$1.f(ArrayPrototype, UNSCOPABLES, {
	    configurable: true,
	    value: create$1(null)
	  });
	}

	// add a key to Array.prototype[@@unscopables]
	var addToUnscopables$3 = function (key) {
	  ArrayPrototype[UNSCOPABLES][key] = true;
	};

	var $$c = _export;
	var $includes = arrayIncludes.includes;
	var addToUnscopables$2 = addToUnscopables$3;

	// `Array.prototype.includes` method
	// https://tc39.es/ecma262/#sec-array.prototype.includes
	$$c({ target: 'Array', proto: true }, {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$2('includes');

	var isObject$5 = isObject$e;
	var classof$3 = classofRaw$1;
	var wellKnownSymbol$6 = wellKnownSymbol$k;

	var MATCH$2 = wellKnownSymbol$6('match');

	// `IsRegExp` abstract operation
	// https://tc39.es/ecma262/#sec-isregexp
	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject$5(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$3(it) == 'RegExp');
	};

	var isRegExp$2 = isRegexp;

	var notARegexp = function (it) {
	  if (isRegExp$2(it)) {
	    throw TypeError("The method doesn't accept regular expressions");
	  } return it;
	};

	var wellKnownSymbol$5 = wellKnownSymbol$k;

	var MATCH$1 = wellKnownSymbol$5('match');

	var correctIsRegexpLogic = function (METHOD_NAME) {
	  var regexp = /./;
	  try {
	    '/./'[METHOD_NAME](regexp);
	  } catch (error1) {
	    try {
	      regexp[MATCH$1] = false;
	      return '/./'[METHOD_NAME](regexp);
	    } catch (error2) { /* empty */ }
	  } return false;
	};

	var $$b = _export;
	var notARegExp = notARegexp;
	var requireObjectCoercible$4 = requireObjectCoercible$9;
	var correctIsRegExpLogic = correctIsRegexpLogic;

	// `String.prototype.includes` method
	// https://tc39.es/ecma262/#sec-string.prototype.includes
	$$b({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~String(requireObjectCoercible$4(this))
	      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var toIndexedObject$1 = toIndexedObject$7;
	var addToUnscopables$1 = addToUnscopables$3;
	var Iterators = iterators;
	var InternalStateModule$1 = internalState;
	var defineIterator = defineIterator$2;

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$1 = InternalStateModule$1.set;
	var getInternalState = InternalStateModule$1.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.es/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.es/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.es/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.es/ecma262/#sec-createarrayiterator
	var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
	  setInternalState$1(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject$1(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return { value: undefined, done: true };
	  }
	  if (kind == 'keys') return { value: index, done: false };
	  if (kind == 'values') return { value: target[index], done: false };
	  return { value: [index, target[index]], done: false };
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.es/ecma262/#sec-createmappedargumentsobject
	Iterators.Arguments = Iterators.Array;

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$1('keys');
	addToUnscopables$1('values');
	addToUnscopables$1('entries');

	var global$8 = global$m;
	var DOMIterables = domIterables;
	var ArrayIteratorMethods = es_array_iterator;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$9;
	var wellKnownSymbol$4 = wellKnownSymbol$k;

	var ITERATOR = wellKnownSymbol$4('iterator');
	var TO_STRING_TAG = wellKnownSymbol$4('toStringTag');
	var ArrayValues = ArrayIteratorMethods.values;

	for (var COLLECTION_NAME in DOMIterables) {
	  var Collection = global$8[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  if (CollectionPrototype) {
	    // some Chrome versions have non-configurable methods on DOMTokenList
	    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
	      createNonEnumerableProperty$1(CollectionPrototype, ITERATOR, ArrayValues);
	    } catch (error) {
	      CollectionPrototype[ITERATOR] = ArrayValues;
	    }
	    if (!CollectionPrototype[TO_STRING_TAG]) {
	      createNonEnumerableProperty$1(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
	    }
	    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
	      // some Chrome versions have non-configurable methods on DOMTokenList
	      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
	        createNonEnumerableProperty$1(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
	      } catch (error) {
	        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
	      }
	    }
	  }
	}

	var fails$8 = fails$l;
	var whitespaces$1 = whitespaces$4;

	var non = '\u200B\u0085\u180E';

	// check that a method works with the correct list
	// of whitespaces and has a correct name
	var stringTrimForced = function (METHOD_NAME) {
	  return fails$8(function () {
	    return !!whitespaces$1[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces$1[METHOD_NAME].name !== METHOD_NAME;
	  });
	};

	var $$a = _export;
	var $trim = stringTrim.trim;
	var forcedStringTrimMethod = stringTrimForced;

	// `String.prototype.trim` method
	// https://tc39.es/ecma262/#sec-string.prototype.trim
	$$a({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
	  trim: function trim() {
	    return $trim(this);
	  }
	});

	var selectors = ['input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'a[href]', 'button:not([disabled])', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
	var tabSelectors = [].concat(selectors, ['[tabindex]:not([tabindex^="-"]):not([disabled])']);
	var focusSelectors = [].concat(selectors, ['[tabindex]:not([disabled])']);
	var HelpersUtil = {
	  /**
	  * Returns array of tabbable elements
	  * @param {node} node container to search, default is document
	  * @returns {Array} returns elements that can be tabbed to using the keyboard
	  */
	  getTabbableElements: function getTabbableElements(node) {
	    if (node === void 0) {
	      node = document;
	    }

	    return Array.from(node.querySelectorAll(tabSelectors.join(', ')));
	  },

	  /**
	  * Checks if a node is a tabbable element
	  * @param {node} node the node to compare
	  * @returns {boolean} returns true or false depending on whether the node is considered tabbable or not
	  */
	  isElementTabbable: function isElementTabbable(node) {
	    return node.matches(tabSelectors.join(', '));
	  },
	  getUid: function getUid() {
	    // Convert random number to base 36 (numbers + letters),
	    // and grab the first 9 characters after the decimal.
	    return Math.random().toString(36).slice(2, 9);
	  },

	  /**
	  * Returns array of focusable elements
	  * @param {node} node container to search, default is document
	  * @returns {Array} returns elements that can receive focus
	  */
	  getFocusableElements: function getFocusableElements(node) {
	    if (node === void 0) {
	      node = document;
	    }

	    return Array.from(node.querySelectorAll(focusSelectors.join(', ')));
	  },

	  /**
	  * Returns outer height of element, includes element offsetHeight
	  * @param {node}       node container to search
	  * @param {object}     options
	  * @param {string[]}   options.cssSelectors array of css properties
	  * @example
	  *   const options = { cssSelectors: ['margin', 'padding'] };
	  *   const options = { cssSelectors: ['marginTop'] };
	  * @returns {number}   returns height value
	  */
	  getElementOuterHeight: function getElementOuterHeight(node, options) {
	    if (options === void 0) {
	      options = null;
	    }

	    var computedNodeStyles = getComputedStyle(node);

	    if (!options) {
	      return computedNodeStyles.offsetHeight;
	    }

	    var outerHeight = node.offsetHeight;
	    options.cssSelectors.forEach(function (selector) {
	      // if no values are specified, calculate spacing for the top and bottom
	      if (!selector.toLowerCase().includes('top') && !selector.toLowerCase().includes('bottom')) {
	        outerHeight += parseInt(computedNodeStyles[selector + 'Top'], 10) + parseInt(computedNodeStyles[selector + 'Bottom'], 10);
	      } else if (selector.values.length > 0) {
	        outerHeight += parseInt(computedNodeStyles[selector], 10);
	      }
	    });
	    return outerHeight;
	  },

	  /**
	  * Returns outer width of element, includes element offsetWidth
	  * @param {node}       node container to search
	  * @param {object}     options
	  * @param {string[]}   options.cssSelectors array of css properties
	  * @example
	  *   const options = { cssSelectors: ['margin', 'padding'] };
	  *   const options = { cssSelectors: ['marginLeft'] };
	  * @returns {number}   returns width value
	  */
	  getElementOuterWidth: function getElementOuterWidth(node, options) {
	    if (options === void 0) {
	      options = null;
	    }

	    var computedNodeStyles = getComputedStyle(node);

	    if (!options) {
	      return computedNodeStyles.offsetWidth;
	    }

	    var outerWidth = node.offsetWidth;
	    options.cssSelectors.forEach(function (selector) {
	      // if no values are specifed, calculate spacing for the left and right
	      if (!selector.toLowerCase().includes('left') && !selector.toLowerCase().includes('right')) {
	        outerWidth += parseInt(computedNodeStyles[selector + 'Left'], 10) + parseInt(computedNodeStyles[selector + 'Right'], 10);
	      } else if (selector.values.length > 0) {
	        outerWidth += parseInt(computedNodeStyles[selector], 10);
	      }
	    });
	    return outerWidth;
	  },

	  /**
	   * Returns the element pointed to from a data-target attribute
	   * @param {node} element element with the data-target attribute
	   * @returns {node} returns the element
	   */
	  getSelectorFromElement: function getSelectorFromElement(element) {
	    var selector = element.getAttribute('data-target');

	    if (!selector || selector === '#') {
	      var hrefAttr = element.getAttribute('href');
	      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
	    }

	    try {
	      return document.querySelector(selector) ? selector : null;
	    } catch (_unused) {
	      return null;
	    }
	  },

	  /**
	   * Gets the offset height of the element
	   * @param {node} element the element
	   * @returns {number} returns the offset height
	   */
	  reflow: function reflow(element) {
	    return element.offsetHeight;
	  },

	  /**
	   * Gets the full height of the document
	   * May be a little dated but this seems to be an established approach
	   * https://javascript.info/size-and-scroll-window#width-height-of-the-document
	   * @returns {number} the full height of the document
	   */
	  getDocumentHeight: function getDocumentHeight() {
	    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
	  }
	};

	var regexpStickyHelpers = {};

	var fails$7 = fails$l;

	// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
	// so we use an intermediate function.
	function RE(s, f) {
	  return RegExp(s, f);
	}

	regexpStickyHelpers.UNSUPPORTED_Y = fails$7(function () {
	  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
	  var re = RE('a', 'y');
	  re.lastIndex = 2;
	  return re.exec('abcd') != null;
	});

	regexpStickyHelpers.BROKEN_CARET = fails$7(function () {
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
	  var re = RE('^r', 'gy');
	  re.lastIndex = 2;
	  return re.exec('str') != null;
	});

	/* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
	/* eslint-disable regexp/no-useless-quantifier -- testing */
	var regexpFlags = regexpFlags$1;
	var stickyHelpers$2 = regexpStickyHelpers;
	var shared = shared$4.exports;

	var nativeExec = RegExp.prototype.exec;
	var nativeReplace = shared('native-string-replace', String.prototype.replace);

	var patchedExec = nativeExec;

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/;
	  var re2 = /b*/g;
	  nativeExec.call(re1, 'a');
	  nativeExec.call(re2, 'a');
	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	})();

	var UNSUPPORTED_Y$2 = stickyHelpers$2.UNSUPPORTED_Y || stickyHelpers$2.BROKEN_CARET;

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$2;

	if (PATCH) {
	  patchedExec = function exec(str) {
	    var re = this;
	    var lastIndex, reCopy, match, i;
	    var sticky = UNSUPPORTED_Y$2 && re.sticky;
	    var flags = regexpFlags.call(re);
	    var source = re.source;
	    var charsAdded = 0;
	    var strCopy = str;

	    if (sticky) {
	      flags = flags.replace('y', '');
	      if (flags.indexOf('g') === -1) {
	        flags += 'g';
	      }

	      strCopy = String(str).slice(re.lastIndex);
	      // Support anchored sticky behavior.
	      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
	        source = '(?: ' + source + ')';
	        strCopy = ' ' + strCopy;
	        charsAdded++;
	      }
	      // ^(? + rx + ) is needed, in combination with some str slicing, to
	      // simulate the 'y' flag.
	      reCopy = new RegExp('^(?:' + source + ')', flags);
	    }

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

	    match = nativeExec.call(sticky ? reCopy : re, strCopy);

	    if (sticky) {
	      if (match) {
	        match.input = match.input.slice(charsAdded);
	        match[0] = match[0].slice(charsAdded);
	        match.index = re.lastIndex;
	        re.lastIndex += match[0].length;
	      } else re.lastIndex = 0;
	    } else if (UPDATES_LAST_INDEX_WRONG && match) {
	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
	      nativeReplace.call(match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    return match;
	  };
	}

	var regexpExec$3 = patchedExec;

	var $$9 = _export;
	var exec = regexpExec$3;

	// `RegExp.prototype.exec` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.exec
	$$9({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
	  exec: exec
	});

	// TODO: Remove from `core-js@4` since it's moved to entry points

	var redefine$4 = redefine$9.exports;
	var regexpExec$2 = regexpExec$3;
	var fails$6 = fails$l;
	var wellKnownSymbol$3 = wellKnownSymbol$k;
	var createNonEnumerableProperty = createNonEnumerableProperty$9;

	var SPECIES$2 = wellKnownSymbol$3('species');
	var RegExpPrototype$1 = RegExp.prototype;

	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$6(function () {
	  // #replace needs built-in support for named groups.
	  // #match works fine because it just return the exec results, even if it has
	  // a "grops" property.
	  var re = /./;
	  re.exec = function () {
	    var result = [];
	    result.groups = { a: '7' };
	    return result;
	  };
	  return ''.replace(re, '$<a>') !== '7';
	});

	// IE <= 11 replaces $0 with the whole match, as if it was $&
	// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
	var REPLACE_KEEPS_$0 = (function () {
	  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
	  return 'a'.replace(/./, '$0') === '$0';
	})();

	var REPLACE = wellKnownSymbol$3('replace');
	// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
	var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
	  if (/./[REPLACE]) {
	    return /./[REPLACE]('a', '$0') === '';
	  }
	  return false;
	})();

	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	// Weex JS has frozen built-in prototypes, so use try / catch wrapper
	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$6(function () {
	  // eslint-disable-next-line regexp/no-empty-group -- required for testing
	  var re = /(?:)/;
	  var originalExec = re.exec;
	  re.exec = function () { return originalExec.apply(this, arguments); };
	  var result = 'ab'.split(re);
	  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
	});

	var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
	  var SYMBOL = wellKnownSymbol$3(KEY);

	  var DELEGATES_TO_SYMBOL = !fails$6(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  });

	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$6(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;

	    if (KEY === 'split') {
	      // We can't use real regex here since it causes deoptimization
	      // and serious performance degradation in V8
	      // https://github.com/zloirock/core-js/issues/306
	      re = {};
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};
	      re.constructor[SPECIES$2] = function () { return re; };
	      re.flags = '';
	      re[SYMBOL] = /./[SYMBOL];
	    }

	    re.exec = function () { execCalled = true; return null; };

	    re[SYMBOL]('');
	    return !execCalled;
	  });

	  if (
	    !DELEGATES_TO_SYMBOL ||
	    !DELEGATES_TO_EXEC ||
	    (KEY === 'replace' && !(
	      REPLACE_SUPPORTS_NAMED_GROUPS &&
	      REPLACE_KEEPS_$0 &&
	      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
	    )) ||
	    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
	  ) {
	    var nativeRegExpMethod = /./[SYMBOL];
	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
	      var $exec = regexp.exec;
	      if ($exec === regexpExec$2 || $exec === RegExpPrototype$1.exec) {
	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	          // The native String method already delegates to @@method (this
	          // polyfilled function), leasing to infinite recursion.
	          // We avoid it by directly calling the native @@method method.
	          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
	        }
	        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
	      }
	      return { done: false };
	    }, {
	      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
	      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
	    });
	    var stringMethod = methods[0];
	    var regexMethod = methods[1];

	    redefine$4(String.prototype, KEY, stringMethod);
	    redefine$4(RegExpPrototype$1, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return regexMethod.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return regexMethod.call(string, this); }
	    );
	  }

	  if (sham) createNonEnumerableProperty(RegExpPrototype$1[SYMBOL], 'sham', true);
	};

	var charAt = stringMultibyte.charAt;

	// `AdvanceStringIndex` abstract operation
	// https://tc39.es/ecma262/#sec-advancestringindex
	var advanceStringIndex$3 = function (S, index, unicode) {
	  return index + (unicode ? charAt(S, index).length : 1);
	};

	var classof$2 = classofRaw$1;
	var regexpExec$1 = regexpExec$3;

	// `RegExpExec` abstract operation
	// https://tc39.es/ecma262/#sec-regexpexec
	var regexpExecAbstract = function (R, S) {
	  var exec = R.exec;
	  if (typeof exec === 'function') {
	    var result = exec.call(R, S);
	    if (typeof result !== 'object') {
	      throw TypeError('RegExp exec method returned something other than an Object or null');
	    }
	    return result;
	  }

	  if (classof$2(R) !== 'RegExp') {
	    throw TypeError('RegExp#exec called on incompatible receiver');
	  }

	  return regexpExec$1.call(R, S);
	};

	var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
	var anObject$5 = anObject$f;
	var toLength$4 = toLength$b;
	var requireObjectCoercible$3 = requireObjectCoercible$9;
	var advanceStringIndex$2 = advanceStringIndex$3;
	var regExpExec$1 = regexpExecAbstract;

	// @@match logic
	fixRegExpWellKnownSymbolLogic$2('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
	  return [
	    // `String.prototype.match` method
	    // https://tc39.es/ecma262/#sec-string.prototype.match
	    function match(regexp) {
	      var O = requireObjectCoercible$3(this);
	      var matcher = regexp == undefined ? undefined : regexp[MATCH];
	      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	    },
	    // `RegExp.prototype[@@match]` method
	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
	    function (regexp) {
	      var res = maybeCallNative(nativeMatch, regexp, this);
	      if (res.done) return res.value;

	      var rx = anObject$5(regexp);
	      var S = String(this);

	      if (!rx.global) return regExpExec$1(rx, S);

	      var fullUnicode = rx.unicode;
	      rx.lastIndex = 0;
	      var A = [];
	      var n = 0;
	      var result;
	      while ((result = regExpExec$1(rx, S)) !== null) {
	        var matchStr = String(result[0]);
	        A[n] = matchStr;
	        if (matchStr === '') rx.lastIndex = advanceStringIndex$2(S, toLength$4(rx.lastIndex), fullUnicode);
	        n++;
	      }
	      return n === 0 ? null : A;
	    }
	  ];
	});

	var ColorUtil = {
	  /**
	     * Calculates the YIQ of the color
	     * @param {object} rgb The RGB notation of the color
	     * @returns {null} null
	     */
	  getYiq: function getYiq(_ref) {
	    var r = _ref.r,
	        g = _ref.g,
	        b = _ref.b;
	    return (r * 299 + g * 587 + b * 114) / 1000;
	  },

	  /**
	     * Gets the RGB object notation for a string
	     * @param {string} str a string representing a css rgb value
	     * @returns {object} an object for rgb notation
	     */
	  getRGB: function getRGB(str) {
	    var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d\.\d?)\))?/);
	    return match ? {
	      r: match[1],
	      g: match[2],
	      b: match[3]
	    } : {};
	  }
	};

	var KeyboardUtil = {
	  keyCodes: {
	    ARROW_DOWN: 40,
	    ARROW_UP: 38,
	    ARROW_LEFT: 37,
	    ARROW_RIGHT: 39,
	    ENTER: 13,
	    ESC: 27,
	    SPACE: 32,
	    BACKSPACE: 8,
	    TAB: 9
	  },
	  getKeyCode: function getKeyCode(e) {
	    return e.which || e.keyCode || 0;
	  }
	};

	var toObject$2 = toObject$a;

	var floor = Math.floor;
	var replace = ''.replace;
	var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

	// `GetSubstitution` abstract operation
	// https://tc39.es/ecma262/#sec-getsubstitution
	var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
	  var tailPos = position + matched.length;
	  var m = captures.length;
	  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
	  if (namedCaptures !== undefined) {
	    namedCaptures = toObject$2(namedCaptures);
	    symbols = SUBSTITUTION_SYMBOLS;
	  }
	  return replace.call(replacement, symbols, function (match, ch) {
	    var capture;
	    switch (ch.charAt(0)) {
	      case '$': return '$';
	      case '&': return matched;
	      case '`': return str.slice(0, position);
	      case "'": return str.slice(tailPos);
	      case '<':
	        capture = namedCaptures[ch.slice(1, -1)];
	        break;
	      default: // \d\d?
	        var n = +ch;
	        if (n === 0) return match;
	        if (n > m) {
	          var f = floor(n / 10);
	          if (f === 0) return match;
	          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
	          return match;
	        }
	        capture = captures[n - 1];
	    }
	    return capture === undefined ? '' : capture;
	  });
	};

	var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
	var anObject$4 = anObject$f;
	var toLength$3 = toLength$b;
	var toInteger = toInteger$5;
	var requireObjectCoercible$2 = requireObjectCoercible$9;
	var advanceStringIndex$1 = advanceStringIndex$3;
	var getSubstitution = getSubstitution$1;
	var regExpExec = regexpExecAbstract;

	var max = Math.max;
	var min$1 = Math.min;

	var maybeToString = function (it) {
	  return it === undefined ? it : String(it);
	};

	// @@replace logic
	fixRegExpWellKnownSymbolLogic$1('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
	  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
	  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
	  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

	  return [
	    // `String.prototype.replace` method
	    // https://tc39.es/ecma262/#sec-string.prototype.replace
	    function replace(searchValue, replaceValue) {
	      var O = requireObjectCoercible$2(this);
	      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
	      return replacer !== undefined
	        ? replacer.call(searchValue, O, replaceValue)
	        : nativeReplace.call(String(O), searchValue, replaceValue);
	    },
	    // `RegExp.prototype[@@replace]` method
	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
	    function (regexp, replaceValue) {
	      if (
	        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
	        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
	      ) {
	        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
	        if (res.done) return res.value;
	      }

	      var rx = anObject$4(regexp);
	      var S = String(this);

	      var functionalReplace = typeof replaceValue === 'function';
	      if (!functionalReplace) replaceValue = String(replaceValue);

	      var global = rx.global;
	      if (global) {
	        var fullUnicode = rx.unicode;
	        rx.lastIndex = 0;
	      }
	      var results = [];
	      while (true) {
	        var result = regExpExec(rx, S);
	        if (result === null) break;

	        results.push(result);
	        if (!global) break;

	        var matchStr = String(result[0]);
	        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$3(rx.lastIndex), fullUnicode);
	      }

	      var accumulatedResult = '';
	      var nextSourcePosition = 0;
	      for (var i = 0; i < results.length; i++) {
	        result = results[i];

	        var matched = String(result[0]);
	        var position = max(min$1(toInteger(result.index), S.length), 0);
	        var captures = [];
	        // NOTE: This is equivalent to
	        //   captures = result.slice(1).map(maybeToString)
	        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
	        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
	        var namedCaptures = result.groups;
	        if (functionalReplace) {
	          var replacerArgs = [matched].concat(captures, position, S);
	          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
	          var replacement = String(replaceValue.apply(undefined, replacerArgs));
	        } else {
	          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
	        }
	        if (position >= nextSourcePosition) {
	          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
	          nextSourcePosition = position + matched.length;
	        }
	      }
	      return accumulatedResult + S.slice(nextSourcePosition);
	    }
	  ];
	});

	var StringUtil = {
	  /**
	   * Interpolate a string.
	   * @param {string} template - The template string to interpolate, with keys in the format %{key}.
	   * @param {object} data - An object containing the keys and values to replace in the template.
	   * @returns {string} - The interpolated string.
	   */
	  interpolateString: function interpolateString(template, data) {
	    return template.replace(/%{(\w+)}/g, function (match, key) {
	      if (Object.prototype.hasOwnProperty.call(data, key)) {
	        return data[key];
	      } // %{key} not found, show a warning in the console and return an empty string
	      // eslint-disable-next-line no-console


	      console.warn("Template error, %{" + key + "} not found:", template);
	      return '';
	    });
	  }
	};

	var EventName$n = {
	  ON_REMOVE: 'onRemove'
	};
	var focusControls = [];
	/**
	 * Class representing Focus Controls.
	 * Solve for Firefox bug where following on-page anchor links loses focus:
	 * https://bugzilla.mozilla.org/show_bug.cgi?id=308064
	 * https://bugzilla.mozilla.org/show_bug.cgi?id=277178
	 */

	var FocusControls = /*#__PURE__*/function () {
	  /**
	   * Initialize focus controls.
	   * @param {Object} opts - The focus control options.
	   * @param {Node} opts.el - The anchor element node, must have href attribute with fragment identifier.
	   */
	  function FocusControls(opts) {
	    var _this = this;

	    this.el = opts.el;
	    this.target = document.querySelector(this.el.getAttribute('href'));
	    this.events = [{
	      el: this.el,
	      type: 'click',
	      handler: function handler(e) {
	        _this.onClick(e);
	      }
	    }]; // Add event handlers.

	    InitializationUtil.addEvents(this.events);
	    focusControls.push(this);
	  }
	  /**
	   * Click event.
	   * @param {Event} e - The event object.
	   */


	  var _proto = FocusControls.prototype;

	  _proto.onClick = function onClick(e) {
	    e.preventDefault();
	    this.target.focus();
	  }
	  /**
	   * Remove the focus controls and events.
	   */
	  ;

	  _proto.remove = function remove() {
	    // Remove event handlers
	    InitializationUtil.removeEvents(this.events); // Remove this focus controls reference from array of instances

	    var index = focusControls.indexOf(this);
	    focusControls.splice(index, 1); // Create and dispatch custom event

	    this[EventName$n.ON_REMOVE] = new CustomEvent(EventName$n.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$n.ON_REMOVE]);
	  }
	  /**
	   * Get an array of focus controls instances.
	   * @returns {Object[]} Array of focus controls instances.
	   */
	  ;

	  FocusControls.getInstances = function getInstances() {
	    return focusControls;
	  };

	  return FocusControls;
	}();

	var global$7 = global$m;
	var trim$1 = stringTrim.trim;
	var whitespaces = whitespaces$4;

	var $parseFloat = global$7.parseFloat;
	var FORCED$1 = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

	// `parseFloat` method
	// https://tc39.es/ecma262/#sec-parsefloat-string
	var numberParseFloat = FORCED$1 ? function parseFloat(string) {
	  var trimmedString = trim$1(String(string));
	  var result = $parseFloat(trimmedString);
	  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

	var $$8 = _export;
	var parseFloatImplementation = numberParseFloat;

	// `parseFloat` method
	// https://tc39.es/ecma262/#sec-parsefloat-string
	$$8({ global: true, forced: parseFloat != parseFloatImplementation }, {
	  parseFloat: parseFloatImplementation
	});

	var anObject$3 = anObject$f;
	var aFunction$1 = aFunction$3;
	var wellKnownSymbol$2 = wellKnownSymbol$k;

	var SPECIES$1 = wellKnownSymbol$2('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-speciesconstructor
	var speciesConstructor$1 = function (O, defaultConstructor) {
	  var C = anObject$3(O).constructor;
	  var S;
	  return C === undefined || (S = anObject$3(C)[SPECIES$1]) == undefined ? defaultConstructor : aFunction$1(S);
	};

	var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
	var isRegExp$1 = isRegexp;
	var anObject$2 = anObject$f;
	var requireObjectCoercible$1 = requireObjectCoercible$9;
	var speciesConstructor = speciesConstructor$1;
	var advanceStringIndex = advanceStringIndex$3;
	var toLength$2 = toLength$b;
	var callRegExpExec = regexpExecAbstract;
	var regexpExec = regexpExec$3;
	var stickyHelpers$1 = regexpStickyHelpers;

	var UNSUPPORTED_Y$1 = stickyHelpers$1.UNSUPPORTED_Y;
	var arrayPush = [].push;
	var min = Math.min;
	var MAX_UINT32 = 0xFFFFFFFF;

	// @@split logic
	fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
	  var internalSplit;
	  if (
	    'abbc'.split(/(b)*/)[1] == 'c' ||
	    // eslint-disable-next-line regexp/no-empty-group -- required for testing
	    'test'.split(/(?:)/, -1).length != 4 ||
	    'ab'.split(/(?:ab)*/).length != 2 ||
	    '.'.split(/(.?)(.?)/).length != 4 ||
	    // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
	    '.'.split(/()()/).length > 1 ||
	    ''.split(/.?/).length
	  ) {
	    // based on es5-shim implementation, need to rework it
	    internalSplit = function (separator, limit) {
	      var string = String(requireObjectCoercible$1(this));
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (separator === undefined) return [string];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp$1(separator)) {
	        return nativeSplit.call(string, separator, lim);
	      }
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var match, lastIndex, lastLength;
	      while (match = regexpExec.call(separatorCopy, string)) {
	        lastIndex = separatorCopy.lastIndex;
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
	          lastLength = match[0].length;
	          lastLastIndex = lastIndex;
	          if (output.length >= lim) break;
	        }
	        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string.length) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output.length > lim ? output.slice(0, lim) : output;
	    };
	  // Chakra, V8
	  } else if ('0'.split(undefined, 0).length) {
	    internalSplit = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
	    };
	  } else internalSplit = nativeSplit;

	  return [
	    // `String.prototype.split` method
	    // https://tc39.es/ecma262/#sec-string.prototype.split
	    function split(separator, limit) {
	      var O = requireObjectCoercible$1(this);
	      var splitter = separator == undefined ? undefined : separator[SPLIT];
	      return splitter !== undefined
	        ? splitter.call(separator, O, limit)
	        : internalSplit.call(String(O), separator, limit);
	    },
	    // `RegExp.prototype[@@split]` method
	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
	    //
	    // NOTE: This cannot be properly polyfilled in engines that don't support
	    // the 'y' flag.
	    function (regexp, limit) {
	      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
	      if (res.done) return res.value;

	      var rx = anObject$2(regexp);
	      var S = String(this);
	      var C = speciesConstructor(rx, RegExp);

	      var unicodeMatching = rx.unicode;
	      var flags = (rx.ignoreCase ? 'i' : '') +
	                  (rx.multiline ? 'm' : '') +
	                  (rx.unicode ? 'u' : '') +
	                  (UNSUPPORTED_Y$1 ? 'g' : 'y');

	      // ^(? + rx + ) is needed, in combination with some S slicing, to
	      // simulate the 'y' flag.
	      var splitter = new C(UNSUPPORTED_Y$1 ? '^(?:' + rx.source + ')' : rx, flags);
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
	      var p = 0;
	      var q = 0;
	      var A = [];
	      while (q < S.length) {
	        splitter.lastIndex = UNSUPPORTED_Y$1 ? 0 : q;
	        var z = callRegExpExec(splitter, UNSUPPORTED_Y$1 ? S.slice(q) : S);
	        var e;
	        if (
	          z === null ||
	          (e = min(toLength$2(splitter.lastIndex + (UNSUPPORTED_Y$1 ? q : 0)), S.length)) === p
	        ) {
	          q = advanceStringIndex(S, q, unicodeMatching);
	        } else {
	          A.push(S.slice(p, q));
	          if (A.length === lim) return A;
	          for (var i = 1; i <= z.length - 1; i++) {
	            A.push(z[i]);
	            if (A.length === lim) return A;
	          }
	          q = p = e;
	        }
	      }
	      A.push(S.slice(p));
	      return A;
	    }
	  ];
	}, UNSUPPORTED_Y$1);

	var TRANSITION_END = 'transitionend';
	/**
	 * Gets the transition duration from an element's styles
	 * @param {node} element - element
	 * @returns {number} - transition duration in milliseconds
	 */

	var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
	  var MILLISECONDS_MULTIPLIER = 1000;

	  if (!element) {
	    return 0;
	  } // Get transition-duration of the element


	  var transitionDuration = getComputedStyle(element)['transition-duration'];
	  var transitionDelay = getComputedStyle(element)['transition-delay'];
	  var floatTransitionDuration = parseFloat(transitionDuration);
	  var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

	  if (!floatTransitionDuration && !floatTransitionDelay) {
	    return 0;
	  } // If multiple durations are defined, take the first


	  transitionDuration = transitionDuration.split(',')[0];
	  transitionDelay = transitionDelay.split(',')[0];
	  return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
	};
	/**
	 * Dispatches a transition-end event.
	 * @param {node} element - element on which to dispatch event
	 */


	var triggerTransitionEnd = function triggerTransitionEnd(element) {
	  element.dispatchEvent(new Event(TRANSITION_END));
	};
	/**
	 * Ensures transition-end is triggered on an element.
	 * @param {node} element - element on which transition occurs
	 * @param {number} duration - transition duration in milliseconds
	 */


	var emulateTransitionEnd = function emulateTransitionEnd(element, duration) {
	  if (duration === void 0) {
	    duration = 0;
	  }

	  var called = false;
	  var durationPadding = 5;
	  var emulatedDuration = duration + durationPadding;

	  function listener() {
	    called = true;
	    element.removeEventListener(TRANSITION_END, listener);
	  }

	  element.addEventListener(TRANSITION_END, listener);
	  setTimeout(function () {
	    if (!called) {
	      triggerTransitionEnd(element);
	    }
	  }, emulatedDuration);
	};

	var TransitionUtil = {
	  TRANSITION_END: TRANSITION_END,
	  getTransitionDurationFromElement: getTransitionDurationFromElement,
	  triggerTransitionEnd: triggerTransitionEnd,
	  emulateTransitionEnd: emulateTransitionEnd
	};

	var Util = Object.assign({}, DetectionUtil, HelpersUtil, InitializationUtil, ColorUtil, KeyboardUtil, StringUtil, {
	  FocusControls: FocusControls
	}, TransitionUtil);

	var instances$5 = [];
	var Selector$n = {
	  DATA_MOUNT: '.alert-dismissible, [data-mount="alert-dismissible"]',
	  DISMISS: '[data-dismiss="alert"]'
	};
	var EventName$m = {
	  CLOSE: 'onClose',
	  CLOSED: 'onClosed',
	  ON_REMOVE: 'onRemove',
	  ON_UPDATE: 'onUpdate'
	};
	var ClassName$i = {
	  FADE: 'fade',
	  SHOW: 'show'
	};

	function _removeElement(element) {
	  var _this = this;

	  element.classList.remove(ClassName$i.SHOW);

	  if (!element.classList.contains(ClassName$i.FADE)) {
	    _destroyElement.bind(this)(element);

	    return;
	  }

	  var transitionDuration = Util.getTransitionDurationFromElement(element);
	  element.addEventListener(Util.TRANSITION_END, function (event) {
	    return _destroyElement.bind(_this)(element, event);
	  }, {
	    once: true
	  });
	  Util.emulateTransitionEnd(element, transitionDuration);
	}

	function _destroyElement(element) {
	  element.dispatchEvent(this[EventName$m.CLOSED]);
	  element.remove();
	}

	var Alert = /*#__PURE__*/function () {
	  function Alert(opts) {
	    var _this2 = this;

	    this.el = opts.el;
	    this.dismiss = this.el.querySelector(Selector$n.DISMISS); // Custom Events

	    this[EventName$m.CLOSE] = new CustomEvent(EventName$m.CLOSE);
	    this[EventName$m.CLOSED] = new CustomEvent(EventName$m.CLOSED); // Add event handlers

	    if (this.dismiss) {
	      this.events = [{
	        el: this.dismiss,
	        type: 'click',
	        handler: function handler() {
	          _this2.close();
	        }
	      }];
	      Util.addEvents(this.events);
	    }

	    instances$5.push(this);
	  }
	  /**
	   * Perform a close action
	   */


	  var _proto = Alert.prototype;

	  _proto.close = function close() {
	    var rootElement = this.el;
	    rootElement.dispatchEvent(this[EventName$m.CLOSE]);

	    _removeElement.bind(this)(rootElement);
	  }
	  /**
	   * Update instance. Added for API consistency
	   */
	  ;

	  _proto.update = function update() {
	    // Create and dispatch custom event
	    this[EventName$m.ON_UPDATE] = new CustomEvent(EventName$m.ON_UPDATE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$m.ON_UPDATE]);
	  }
	  /**
	   * Remove the instance
	   */
	  ;

	  _proto.remove = function remove() {
	    Util.removeEvents(this.events);
	    var index = instances$5.indexOf(this);
	    instances$5.splice(index, 1); // Create and dispatch custom event

	    this[EventName$m.ON_REMOVE] = new CustomEvent(EventName$m.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$m.ON_REMOVE]);
	  }
	  /**
	   * Get alert instances.
	   * @returns {Object[]} An array of alert instances
	   */
	  ;

	  Alert.getInstances = function getInstances() {
	    return instances$5;
	  };

	  return Alert;
	}();

	var $$7 = _export;
	var $filter = arrayIteration.filter;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

	// `Array.prototype.filter` method
	// https://tc39.es/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	$$7({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var isObject$4 = isObject$e;
	var setPrototypeOf = objectSetPrototypeOf;

	// makes subclassing work correct for wrapped built-ins
	var inheritIfRequired$3 = function ($this, dummy, Wrapper) {
	  var NewTarget, NewTargetPrototype;
	  if (
	    // it can work only with native `setPrototypeOf`
	    setPrototypeOf &&
	    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
	    typeof (NewTarget = dummy.constructor) == 'function' &&
	    NewTarget !== Wrapper &&
	    isObject$4(NewTargetPrototype = NewTarget.prototype) &&
	    NewTargetPrototype !== Wrapper.prototype
	  ) setPrototypeOf($this, NewTargetPrototype);
	  return $this;
	};

	var getBuiltIn = getBuiltIn$4;
	var definePropertyModule = objectDefineProperty;
	var wellKnownSymbol$1 = wellKnownSymbol$k;
	var DESCRIPTORS$4 = descriptors;

	var SPECIES = wellKnownSymbol$1('species');

	var setSpecies$1 = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
	  var defineProperty = definePropertyModule.f;

	  if (DESCRIPTORS$4 && Constructor && !Constructor[SPECIES]) {
	    defineProperty(Constructor, SPECIES, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var DESCRIPTORS$3 = descriptors;
	var global$6 = global$m;
	var isForced$2 = isForced_1;
	var inheritIfRequired$2 = inheritIfRequired$3;
	var defineProperty$3 = objectDefineProperty.f;
	var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
	var isRegExp = isRegexp;
	var getFlags = regexpFlags$1;
	var stickyHelpers = regexpStickyHelpers;
	var redefine$3 = redefine$9.exports;
	var fails$5 = fails$l;
	var enforceInternalState = internalState.enforce;
	var setSpecies = setSpecies$1;
	var wellKnownSymbol = wellKnownSymbol$k;

	var MATCH = wellKnownSymbol('match');
	var NativeRegExp = global$6.RegExp;
	var RegExpPrototype = NativeRegExp.prototype;
	var re1 = /a/g;
	var re2 = /a/g;

	// "new" should create a new object, old webkit bug
	var CORRECT_NEW = new NativeRegExp(re1) !== re1;

	var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

	var FORCED = DESCRIPTORS$3 && isForced$2('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails$5(function () {
	  re2[MATCH] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
	})));

	// `RegExp` constructor
	// https://tc39.es/ecma262/#sec-regexp-constructor
	if (FORCED) {
	  var RegExpWrapper = function RegExp(pattern, flags) {
	    var thisIsRegExp = this instanceof RegExpWrapper;
	    var patternIsRegExp = isRegExp(pattern);
	    var flagsAreUndefined = flags === undefined;
	    var sticky;

	    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
	      return pattern;
	    }

	    if (CORRECT_NEW) {
	      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
	    } else if (pattern instanceof RegExpWrapper) {
	      if (flagsAreUndefined) flags = getFlags.call(pattern);
	      pattern = pattern.source;
	    }

	    if (UNSUPPORTED_Y) {
	      sticky = !!flags && flags.indexOf('y') > -1;
	      if (sticky) flags = flags.replace(/y/g, '');
	    }

	    var result = inheritIfRequired$2(
	      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
	      thisIsRegExp ? this : RegExpPrototype,
	      RegExpWrapper
	    );

	    if (UNSUPPORTED_Y && sticky) {
	      var state = enforceInternalState(result);
	      state.sticky = true;
	    }

	    return result;
	  };
	  var proxy = function (key) {
	    key in RegExpWrapper || defineProperty$3(RegExpWrapper, key, {
	      configurable: true,
	      get: function () { return NativeRegExp[key]; },
	      set: function (it) { NativeRegExp[key] = it; }
	    });
	  };
	  var keys$1 = getOwnPropertyNames$1(NativeRegExp);
	  var index = 0;
	  while (keys$1.length > index) proxy(keys$1[index++]);
	  RegExpPrototype.constructor = RegExpWrapper;
	  RegExpWrapper.prototype = RegExpPrototype;
	  redefine$3(global$6, 'RegExp', RegExpWrapper);
	}

	// https://tc39.es/ecma262/#sec-get-regexp-@@species
	setSpecies('RegExp');

	var $$6 = _export;
	var toObject$1 = toObject$a;
	var nativeKeys = objectKeys$3;
	var fails$4 = fails$l;

	var FAILS_ON_PRIMITIVES = fails$4(function () { nativeKeys(1); });

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	$$6({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
	  keys: function keys(it) {
	    return nativeKeys(toObject$1(it));
	  }
	});

	/*
	 * @constant
	 * @type {string}
	 */

	var Config = {
	  DEFAULT_SEARCH_RESULT: 10
	};
	var autocompleteInstances = [];
	var Selector$m = {
	  RESULT_LIST: '.result-list',
	  RESULTS_CONTAINER: '.search-results-container',
	  SEARCH_INPUT: '.search-input',
	  RESULT_STATUS: '.result-status',
	  LIST_FIRST_CHILD: 'li:first-child',
	  LIST_SELECTED: 'li.selected'
	};
	var Messages = {
	  // default message is set, if custom message not set.
	  RESULTS_TEMPLATE_MANY: '%{numResults} results are available, use up and down arrow keys to navigate',
	  RESULTS_TEMPLATE_ONE: '%{numResults} result is available, use up and down arrow keys to navigate',
	  NO_RESULTS: 'No results are available'
	};
	var Errors = {
	  DATA_TYPE_ERROR: 'Data must be of type Array[<string>] or Array[{value: <string>}]'
	};
	var ClassName$h = {
	  ACTIVE: 'active',
	  SELECTED: 'selected'
	};
	var EventName$l = {
	  ON_CLOSE: 'onClose',
	  ON_OPEN: 'onOpen',
	  ON_UPDATE: 'onUpdate',
	  ON_REMOVE: 'onRemove'
	};
	/*
	* filter the data.
	*/

	function _filterData(data) {
	  var re = _getSearchPattern.bind(this)();

	  return data.filter(function (item) {
	    if (typeof item === 'object' && re.test(item.value) || typeof item === 'string' && re.test(item)) {
	      return item;
	    }

	    return false;
	  });
	}
	/*
	* fetch the data to li tag.
	*/


	function _fetchData(data) {
	  var _this = this;

	  // data is an array of results
	  var searchData = data.slice(0, Config.DEFAULT_SEARCH_RESULT);
	  var targetHtmlContainer = '';
	  var str = null;
	  var resultsMessage; // if the length of sesarchData is 0, there are no results

	  if (searchData.length > 0 && this.searchInput.value !== '') {
	    searchData.forEach(function (item) {
	      if (typeof item === 'string') {
	        str = item;
	      } else if (typeof item === 'object') {
	        str = item.value;
	      }

	      targetHtmlContainer += '<li class="result"  role="option" tabindex="-1">' + _highlightMatch.bind(_this)(str) + '</li>';
	    });
	    resultsMessage = Util.interpolateString(searchData.length > 1 ? this.resultsAvailableTemplateMany : this.resultsAvailableTemplateOne, {
	      numResults: searchData.length
	    });

	    if (!this.shown) {
	      this.open();
	    }
	  } else {
	    this.close();
	    resultsMessage = this.noResultsMsg;
	  }

	  this.target.innerHTML = targetHtmlContainer;
	  /* Sets sr_only message for a11y */

	  this.container.querySelector(Selector$m.RESULT_STATUS).textContent = resultsMessage;
	}
	/*
	* populates the selected matching values
	*/


	function _populateSelect() {
	  var filteredSearchData = this.suggestedData;

	  if (typeof this.suggestedData === 'object') {
	    if (this.filter === 'true') {
	      filteredSearchData = _filterData.bind(this)(filteredSearchData);
	    }

	    _fetchData.bind(this)(filteredSearchData);
	  }
	}
	/**
	  @func _clearSuggestionsMenu
	  @desc Clears the results from the suggestions menu.
	  @this AutoComplete
	*/


	function _clearSuggestionsMenu() {
	  this.target.innerHTML = '';
	  this.container.querySelector(Selector$m.RESULT_STATUS).textContent = '';
	}
	/**
	  @func _getSearchPattern
	  @desc Returns a new regular expression object from the internal searchInput property.
	  @returns {RegExp} Regular expression object with the autocomplete's searchInput value as the source.
	  @this AutoComplete
	*/


	function _getSearchPattern() {
	  /* replacing instances of regex characters with string literals to disable use of regular expressions in search input */
	  var re = /([()*+.?\\])/gi;
	  var sanitizedInput = this.searchInput.value.replace(re, '\\$&');
	  /* Second parameter flags - 'g': global (matches multiple instances in string), 'i': case insensitive */

	  /* \\b used to only begin match at start of a word (rather than matching a character in the middle of a word) */

	  /* \\s used to allow matching of accepted special characters (e.g. &) when in between words */

	  return new RegExp('\\b\\s?' + sanitizedInput, 'gi');
	}
	/**
	  @func _setSuggestionItemSelectedStatus
	  @desc Given a string, returns the same string with a <strong> tag encapsulating the matching substring.
	  @param {string} str - String used to create the regex for matching.
	  @returns {string} String with a <strong> tag encapsulating matched sub string.
	  @this AutoComplete
	*/


	function _highlightMatch(str) {
	  var re = _getSearchPattern.bind(this)();

	  return str.replace(re, '<strong>$&</strong>');
	}
	/**
	  @func _removeSuggestionItemSelectedStatus
	  @desc Removes the HTML classes and attributes used to markup the "selected" status for suggestions (li elements) displayed in the auto suggestion menu (ul element, this.target).
	  @param {Node} element - HTML element that should remove classes/attributes for showing "selected" status
	*/


	function _removeSuggestionItemSelectedStatus(element) {
	  element.classList.remove(ClassName$h.SELECTED);
	  element.removeAttribute('aria-selected');
	}
	/**
	  @func _setSuggestionItemSelectedStatus
	  @desc Sets the HTML classes and attributes used to markup the "selected" status for suggestions (li elements) displayed in the auto suggestion menu (ul element, this.target).
	  @param {Node} element - HTML element that should receive classes/attributes for showing "selected" status
	*/


	function _setSuggestionItemSelectedStatus(element) {
	  element.classList.add(ClassName$h.SELECTED);
	  element.setAttribute('aria-selected', true);
	  element.focus();
	}
	/**
	  @func _verifyData
	  @desc Verifies that the passed in parameter is either Array[<string>] or Array[{value: <string>}]
	  @param {Array} data - Data to verify.
	  @returns {boolean} Whether the data has the correct structure.
	*/


	function _verifyData(data) {
	  if (Array.isArray(data) && data.every(function (entry) {
	    return typeof entry === 'string' || typeof entry === 'object' && Object.keys(entry).includes('value') && typeof entry.value === 'string';
	  })) {
	    return true;
	  }

	  return false;
	}
	/***********/

	/* EVENTS */

	/***********/

	/*
	* close suggested list.
	*/


	function _onDocumentClick(e) {
	  if (e.target !== this.searchInput && e.target !== this.searchResultsContainer) {
	    var _target = this.target;

	    _target.classList.remove(ClassName$h.ACTIVE);

	    this.searchInput.setAttribute('aria-expanded', false);
	  }
	}
	/*
	* after entering the data,populating the value through populateSelect function
	* @param {object} e - present event
	*/


	function _onSearchInputInput(e) {
	  if (this.searchInput.value === '') {
	    _clearSuggestionsMenu.bind(this)(e);

	    if (this.shown) {
	      this.close();
	    }
	  } else {
	    _populateSelect.bind(this)(e);
	  }
	}
	/**
	  @func _onSearchInputKeyDown
	  @desc Handles keydown event for arrow down.
	  @param {Event} e - Keydown event attached to this.searchInput
	  @this AutoComplete
	*/


	function _onSearchInputKeyDown(e) {
	  var suggestionMenu = this.target;

	  if (e.keyCode === Util.keyCodes.ARROW_DOWN && suggestionMenu.children.length > 0) {
	    this.open();

	    _setSuggestionItemSelectedStatus(suggestionMenu.querySelector(Selector$m.LIST_FIRST_CHILD));
	  }

	  if (e.keyCode === Util.keyCodes.TAB && this.shown) {
	    this.close();
	  }
	}
	/**
	  @func _onSearchInputFocus
	  @desc Sets the cursor position to the end of the text when focus is set to the input element
	  @this AutoComplete
	*/


	function _onSearchInputFocus() {
	  /* Requires 2 parameters */
	  this.searchInput.setSelectionRange(this.searchInput.value.length, this.searchInput.value.length);
	}
	/**
	  @func _onSuggestionMenuKeyDown
	  @desc Handles keydown events for backspace, arrow right, and character input.
	Is attached to this.target (ul with suggestions that appears underneath input) during initializaiton.
	  @param {Event} e
	  @this AutoComplete
	*/


	function _onSuggestionMenuKeyDown(e) {
	  if (this.target.classList.contains(ClassName$h.ACTIVE)) {
	    var _target = this.target;

	    var selected = _target.querySelector(Selector$m.LIST_SELECTED);

	    var prevSibling;

	    switch (e.keyCode) {
	      case Util.keyCodes.ARROW_UP:
	        if (selected) {
	          prevSibling = selected.previousElementSibling;

	          _removeSuggestionItemSelectedStatus(selected);

	          if (prevSibling) {
	            _setSuggestionItemSelectedStatus(prevSibling);
	          } else {
	            this.searchInput.focus();
	          }
	        }

	        break;

	      case Util.keyCodes.ARROW_DOWN:
	        if (_target.querySelector('li') && !_target.querySelector(Selector$m.LIST_SELECTED)) {
	          var firstLiElement = _target.querySelector(Selector$m.LIST_FIRST_CHILD);

	          _setSuggestionItemSelectedStatus(firstLiElement);
	        } else {
	          var nextSibling = null;
	          nextSibling = selected.nextElementSibling;

	          if (nextSibling) {
	            _removeSuggestionItemSelectedStatus(selected);

	            _setSuggestionItemSelectedStatus(nextSibling);
	          }
	        }

	        break;

	      case Util.keyCodes.ARROW_RIGHT:
	      case Util.keyCodes.BACKSPACE:
	        this.searchInput.focus();
	        break;

	      case Util.keyCodes.ENTER:
	        if (selected) {
	          this.searchInput.value = selected.textContent;

	          _clearSuggestionsMenu.bind(this)();

	          this.searchInput.focus();
	          this.close();
	          e.preventDefault();
	        }

	        break;

	      case Util.keyCodes.ESC:
	        this.searchInput.value = '';
	        this.searchInput.focus();

	        _clearSuggestionsMenu.bind(this)();

	        break;

	      case Util.keyCodes.TAB:
	        this.close();
	        this.searchInput.focus();

	        _removeSuggestionItemSelectedStatus(selected);

	        break;

	      default:
	        if (e.key.length === 1) {
	          this.searchInput.focus();
	        }

	        break;
	    }
	  }
	}
	/*
	* fetch the suggested data from drop down to the autocomplete
	* @param {object} e - present event
	*/


	function _onSuggestionMenuMouseUp(e) {
	  this.searchInput.value = e.target.textContent;

	  _clearSuggestionsMenu.bind(this)();

	  this.searchInput.focus();
	  this.close();
	  e.stopPropagation();
	}
	/*
	 * Class representing a Autocomplete.
	 */


	var AutoComplete = /*#__PURE__*/function () {
	  /**
	   * Create the Autocomplete.
	   @param {Object} opts - The autocomplete options.
	   @param {Node} opts.target - The autocomplete DOM node.
	   @throws {TypeError} Will throw a TypeError when opts.data is not of type Array[<string>] or Array[{value: <string>}]
	   */
	  function AutoComplete(opts) {
	    this.container = opts.target; // defaults to a sr message for en locales if none is provided

	    this.resultsAvailableTemplateMany = opts.multipleResultsMsg || Messages.RESULTS_TEMPLATE_MANY;
	    this.resultsAvailableTemplateOne = opts.oneResultMsg || Messages.RESULTS_TEMPLATE_ONE;
	    this.noResultsMsg = opts.noResultsMsg || Messages.NO_RESULTS;
	    this.filter = opts.filter || opts.target.getAttribute('data-filter') || true;

	    if (_verifyData(opts.data)) {
	      this.suggestedData = opts.data;
	    } else {
	      throw new TypeError(Errors.DATA_TYPE_ERROR);
	    }

	    this.target = opts.target.querySelector(Selector$m.RESULT_LIST);
	    this.searchResultsContainer = this.container.querySelector(Selector$m.RESULTS_CONTAINER);
	    this.searchInput = this.container.querySelector(Selector$m.SEARCH_INPUT);
	    this.shown = false;
	    autocompleteInstances.push(this); // Add event handlers.

	    this.events = [{
	      el: document,
	      type: 'click',
	      handler: _onDocumentClick.bind(this)
	    }, {
	      el: this.searchInput,
	      type: 'input',
	      handler: _onSearchInputInput.bind(this)
	    }, {
	      el: this.searchInput,
	      type: 'keydown',
	      handler: _onSearchInputKeyDown.bind(this)
	    }, {
	      el: this.searchInput,
	      type: 'focus',
	      handler: _onSearchInputFocus.bind(this)
	    }, {
	      el: this.target,
	      type: 'mouseup',
	      handler: _onSuggestionMenuMouseUp.bind(this)
	    }, {
	      el: this.target,
	      type: 'keydown',
	      handler: _onSuggestionMenuKeyDown.bind(this)
	    }];
	    Util.addEvents(this.events); // Create custom events.

	    this[EventName$l.ON_CLOSE] = new CustomEvent(EventName$l.ON_CLOSE, {
	      bubbles: true,
	      cancelable: true
	    });
	    this[EventName$l.ON_OPEN] = new CustomEvent(EventName$l.ON_OPEN, {
	      bubbles: true,
	      cancelable: true
	    });
	  }
	  /*
	   * Get an array of autocomplete instances.
	   * @returns {Object[]} Array of search instances.
	   */


	  AutoComplete.getInstances = function getInstances() {
	    return autocompleteInstances;
	  }
	  /**
	  @func open
	  @desc Opens the suggestions menu.
	  @this AutoComplete
	  */
	  ;

	  var _proto = AutoComplete.prototype;

	  _proto.open = function open() {
	    this.shown = true;
	    this.target.classList.add(ClassName$h.ACTIVE);
	    this.searchInput.setAttribute('aria-expanded', true);
	    this.container.dispatchEvent(this[EventName$l.ON_OPEN]);
	  }
	  /**
	  @func close
	  @desc Closes the suggestions menu.
	  @this AutoComplete
	  */
	  ;

	  _proto.close = function close() {
	    this.shown = false;
	    this.target.classList.remove(ClassName$h.ACTIVE);
	    this.searchInput.setAttribute('aria-expanded', false);
	    this.container.dispatchEvent(this[EventName$l.ON_CLOSE]);
	  }
	  /**
	  @func update
	  @desc Updates the value of this.searchInput with given string.
	  @param {string} value - String to set this.searchInput
	  @this AutoComplete
	  */
	  ;

	  _proto.update = function update(value) {
	    // Changed if(value) to if(typeof value === 'string') to allow empty string values.
	    if (typeof value === 'string') {
	      this.searchInput.value = value;

	      if (value) {
	        _populateSelect.bind(this)(); // Create and dispatch custom event


	        this[EventName$l.ON_UPDATE] = new CustomEvent(EventName$l.ON_UPDATE, {
	          bubbles: true
	        });
	        this.container.dispatchEvent(this[EventName$l.ON_UPDATE]); // Is empty string. Menu should be closed.
	      } else {
	        this.close();
	      }
	    }
	  }
	  /**
	  @func updateDataSource
	  @desc Closes the suggestions menu.
	  @param {Array} data - Data to set this.suggestedData
	  @this AutoComplete
	  @throws {TypeError} Will throw a TypeError when opts.data is not of type Array[<string>] or Array[{value: <string>}]
	  */
	  ;

	  _proto.updateDataSource = function updateDataSource(data) {
	    if (_verifyData(data)) {
	      this.suggestedData = data;

	      _populateSelect.bind(this)();
	    } else {
	      throw new TypeError(Errors.DATA_TYPE_ERROR);
	    }
	  }
	  /**
	   * Remove all event listeners.
	   */
	  ;

	  _proto.remove = function remove() {
	    Util.removeEvents(this.events); // Remove this autocomplete reference from array of instances

	    var index = autocompleteInstances.indexOf(this);
	    autocompleteInstances.splice(index, 1); // Create and dispatch custom event

	    this[EventName$l.ON_REMOVE] = new CustomEvent(EventName$l.ON_REMOVE, {
	      bubbles: true
	    });
	    this.container.dispatchEvent(this[EventName$l.ON_REMOVE]);
	  };

	  return AutoComplete;
	}();

	var DESCRIPTORS$2 = descriptors;
	var objectKeys = objectKeys$3;
	var toIndexedObject = toIndexedObject$7;
	var propertyIsEnumerable = objectPropertyIsEnumerable.f;

	// `Object.{ entries, values }` methods implementation
	var createMethod$1 = function (TO_ENTRIES) {
	  return function (it) {
	    var O = toIndexedObject(it);
	    var keys = objectKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) {
	      key = keys[i++];
	      if (!DESCRIPTORS$2 || propertyIsEnumerable.call(O, key)) {
	        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
	      }
	    }
	    return result;
	  };
	};

	var objectToArray = {
	  // `Object.entries` method
	  // https://tc39.es/ecma262/#sec-object.entries
	  entries: createMethod$1(true),
	  // `Object.values` method
	  // https://tc39.es/ecma262/#sec-object.values
	  values: createMethod$1(false)
	};

	var $$5 = _export;
	var $values = objectToArray.values;

	// `Object.values` method
	// https://tc39.es/ecma262/#sec-object.values
	$$5({ target: 'Object', stat: true }, {
	  values: function values(O) {
	    return $values(O);
	  }
	});

	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset).
	 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
	 *                                    schedule `callback` to execute after `delay` ms.
	 *
	 * @returns {Function}  A new, throttled, function.
	 */
	function throttle (delay, noTrailing, callback, debounceMode) {
	  /*
	   * After wrapper has stopped being called, this timeout ensures that
	   * `callback` is executed at the proper times in `throttle` and `end`
	   * debounce modes.
	   */
	  var timeoutID;
	  var cancelled = false; // Keep track of the last time `callback` was executed.

	  var lastExec = 0; // Function to clear existing timeout

	  function clearExistingTimeout() {
	    if (timeoutID) {
	      clearTimeout(timeoutID);
	    }
	  } // Function to cancel next exec


	  function cancel() {
	    clearExistingTimeout();
	    cancelled = true;
	  } // `noTrailing` defaults to falsy.


	  if (typeof noTrailing !== 'boolean') {
	    debounceMode = callback;
	    callback = noTrailing;
	    noTrailing = undefined;
	  }
	  /*
	   * The `wrapper` function encapsulates all of the throttling / debouncing
	   * functionality and when executed will limit the rate at which `callback`
	   * is executed.
	   */


	  function wrapper() {
	    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
	      arguments_[_key] = arguments[_key];
	    }

	    var self = this;
	    var elapsed = Date.now() - lastExec;

	    if (cancelled) {
	      return;
	    } // Execute `callback` and update the `lastExec` timestamp.


	    function exec() {
	      lastExec = Date.now();
	      callback.apply(self, arguments_);
	    }
	    /*
	     * If `debounceMode` is true (at begin) this is used to clear the flag
	     * to allow future `callback` executions.
	     */


	    function clear() {
	      timeoutID = undefined;
	    }

	    if (debounceMode && !timeoutID) {
	      /*
	       * Since `wrapper` is being called for the first time and
	       * `debounceMode` is true (at begin), execute `callback`.
	       */
	      exec();
	    }

	    clearExistingTimeout();

	    if (debounceMode === undefined && elapsed > delay) {
	      /*
	       * In throttle mode, if `delay` time has been exceeded, execute
	       * `callback`.
	       */
	      exec();
	    } else if (noTrailing !== true) {
	      /*
	       * In trailing throttle mode, since `delay` time has not been
	       * exceeded, schedule `callback` to execute `delay` ms after most
	       * recent execution.
	       *
	       * If `debounceMode` is true (at begin), schedule `clear` to execute
	       * after `delay` ms.
	       *
	       * If `debounceMode` is false (at end), schedule `callback` to
	       * execute after `delay` ms.
	       */
	      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
	    }
	  }

	  wrapper.cancel = cancel; // Return the wrapper function.

	  return wrapper;
	}

	/* eslint-disable no-undefined */
	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
	 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
	 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
	 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                  to `callback` when the debounced-function is executed.
	 *
	 * @returns {Function} A new, debounced function.
	 */

	function debounce (delay, atBegin, callback) {
	  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
	}

	var Selector$l = {
	  DATA_MOUNT: '[data-mount="sticky"]',
	  SHOW_STUCK: '.sticky-show-stuck',
	  HIDE_STUCK: '.sticky-hide-stuck'
	};
	var ClassName$g = {
	  STICKY: 'sticky',
	  SENTINEL: 'sticky-sentinel',
	  STUCK: 'stuck',
	  GET_HEIGHT: 'get-height',
	  STICKY_TOP: 'sticky-direction-top',
	  STICKY_BOTTOM: 'sticky-direction-bottom'
	};
	var Direction$2 = {
	  TOP: 'top',
	  BOTTOM: 'bottom'
	};
	var EventName$k = {
	  ON_STUCK: 'onSticky',
	  ON_UNSTUCK: 'onStatic',
	  ON_UPDATE: 'onUpdate',
	  ON_REMOVE: 'onRemove',
	  FOCUS_IN: 'focusin',
	  RESIZE: 'resize'
	};
	var Default$4 = {
	  DIRECTION: 'top'
	};
	var customEvents = {}; // Create custom events

	customEvents[EventName$k.ON_STUCK] = new CustomEvent(EventName$k.ON_STUCK, {
	  bubbles: true,
	  cancelable: true
	});
	customEvents[EventName$k.ON_UNSTUCK] = new CustomEvent(EventName$k.ON_UNSTUCK, {
	  bubbles: true,
	  cancelable: true
	});
	var stickies = [];
	/**
	 * Private functions.
	 */

	/**
	 * Check for the `data-smooth-transition` attribute.
	 * Its presence makes this option "true" unless the value is specifically set to "false"
	 * @param {Node} node - The element to check for the attribute `data-smooth-transition`
	 * @returns {Boolean} return false if contentDivTarget is null
	 */

	function _hasSmoothTransition(node) {
	  if (node.hasAttribute('data-smooth-transition') && node.dataset.smoothTransition !== 'false') {
	    return true;
	  }

	  return false;
	}
	/**
	 * Get the direction of the sticky.
	 * @param {string} string - The string to parse.
	 * @param {string} [defaultValue=top] - The default value to fallback to.
	 * @returns {string} The direction of the sticky.
	 */


	function _getDirection(str, defaultValue) {
	  if (defaultValue === void 0) {
	    defaultValue = Default$4.DIRECTION;
	  }

	  switch (str) {
	    case 'top':
	    case 'bottom':
	      return str;

	    default:
	      return defaultValue;
	  }
	}
	/**
	 * Handle intersection observer
	 */


	function _onStickyChange() {
	  this.el.classList.toggle(ClassName$g.STUCK, this.isStuck);

	  _updateContentDivSpacing.bind(this)();

	  _updateScrollPadding.bind(this)();
	}
	/**
	 * Update margin spacing on the element before/after the sticky bar so that overlapping
	 * does not occur when the page bar is fixed. Remove property if it is not stuck
	 */


	function _updateContentDivSpacing() {
	  if (this.contentDivTarget === null) {
	    return;
	  }

	  var adjustNextElementSpacing = this.stickyElementHeight + this.contentDivTargetSpacing;

	  if (this.rootMarginOffset !== 0) {
	    adjustNextElementSpacing -= this.rootMarginOffset;
	  }

	  if (this.isStuck) {
	    this.contentDivTarget.style.setProperty(this.styleProp, adjustNextElementSpacing + 'px', 'important');
	  } else {
	    this.contentDivTarget.style.setProperty(this.styleProp, '');
	  }
	}
	/**
	 * Updates scroll padding so that elements scrolled into view don't stay behind
	 */


	function _updateScrollPadding(removeScrollPadding) {
	  var htmlElement = document.querySelector('html');
	  this.stickyElementHeight = this.el.getBoundingClientRect().height;

	  if (removeScrollPadding) {
	    htmlElement.style.scrollPaddingTop = 0;
	    htmlElement.style.scrollPaddingBottom = 0;
	  }

	  if (this.direction === Direction$2.TOP) {
	    if (this.isStuck) {
	      htmlElement.style.scrollPaddingTop = this.stickyElementHeight + this.extraScrollPaddingPx + 'px';
	    } else {
	      htmlElement.style.scrollPaddingTop = this.stickyElementHeight + this.rootMarginOffset + this.extraScrollPaddingPx + 'px';
	    }
	  } else if (this.direction === Direction$2.BOTTOM) {
	    if (this.isStuck) {
	      htmlElement.style.scrollPaddingBottom = this.stickyElementHeight + this.extraScrollPaddingPx + 'px';
	    } else {
	      htmlElement.style.scrollPaddingBottom = this.stickyElementHeight + this.rootMarginOffset + this.extraScrollPaddingPx + 'px';
	    }
	  }
	}
	/**
	 * Triggers a boundary check when focus changes to handle edge cases where Intersection Observer does not fire
	 * Uses focusin because focus does not bubble
	 */


	function _onFocusin() {
	  if (this.enableObserver) {
	    this.isStuck = this.doesSentinelExceedBoundary();
	    this.el.classList.toggle(ClassName$g.STUCK, this.isStuck);

	    _updateScrollPadding.bind(this)();
	  }
	}
	/**
	  @func _stickyExceedsAcceptedHeight
	  @desc Calculates and returns whether the height of the sticky has exceeded 33% of the viewport height based on height of the sticky's hidden elements and the height of the sticky's visible elements.
	  @returns {boolean} Whether the height of the sticky has exceeded 33% of the viewport height.
	  @this Sticky
	*/


	function _stickyExceedsAcceptedHeight() {
	  // Subtracting two additional pixels based on a border that is toggled based on visibility.
	  return (this.hiddenElementsHeight + this.visibleElementsHeight - 2) / window.innerHeight > 0.33;
	}
	/**
	  @func _noStickyIfTooTall
	  @desc If the height of the sticky has exceeded 33% of the viewport height based on height of the sticky's hidden elements and the height of the sticky's visible elements, makes it not sticky
	  @this Sticky
	*/


	function _noStickyIfTooTall() {
	  // Subtracting two additional pixels based on a border that is toggled based on visibility.
	  if (this.enableObserverInitial) {
	    if (_stickyExceedsAcceptedHeight.call(this)) {
	      this.setObserverStatus(false);
	    } else {
	      this.setObserverStatus(true);
	    }
	  }
	}
	/**
	  @func _getShowStuckHeight
	  @desc Calculates and returns the combined height of all .sticky-show-stuck elements.
	  @returns {number} Combined height of all .sticky-show-stuck elements.
	  @this Sticky
	*/


	function _getShowStuckHeight() {
	  var _this = this;

	  var hiddenHeight = 0; // Calculate the height of hidden elements when not stuck

	  var showStuck = this.el.querySelectorAll(Selector$l.SHOW_STUCK);

	  if (showStuck && showStuck instanceof NodeList) {
	    // Get the height of all hidden elements
	    showStuck.forEach(function (el, index, list) {
	      hiddenHeight += Util.getElementOuterHeight(el, {
	        cssSelectors: ['margin', 'padding']
	      }); // If this is the last item in the node list, remove the CSS hack that displays hidden elements

	      if (index === list.length - 1) {
	        _this.el.classList.remove(ClassName$g.GET_HEIGHT);
	      }
	    });
	  }

	  return hiddenHeight;
	}
	/**
	  @func _calculateHeights
	  @desc Calculates and returns the height of hidden and visible elements.
	  @returns {Object} Object containing height of hidden and visible elements.
	  @this Sticky
	*/


	function _calculateHeights() {
	  this.el.classList.add(ClassName$g.GET_HEIGHT);

	  var hiddenHeight = _getShowStuckHeight.call(this);

	  var visibleHeight = this.el.offsetHeight;
	  this.el.classList.remove(ClassName$g.GET_HEIGHT);
	  return {
	    hidden: hiddenHeight,
	    visible: visibleHeight
	  };
	}
	/**
	 * @func _setDirectionalProps
	 * @desc Sets value of instances members and DOM node properties depending on the direction instance member
	 */


	function _setDirectionalProps() {
	  if (this.direction === Direction$2.BOTTOM) {
	    this.el.style.top = null; // prevent interference

	    this.el.style.bottom = '0';
	    this.contentDivTarget = this.el.previousElementSibling;
	    this.contentDivTargetSpacing = this.contentDivTarget ? parseInt(getComputedStyle(this.contentDivTarget).paddingBottom, 10) + parseInt(getComputedStyle(this.contentDivTarget).marginBottom, 10) : 0;
	    this.styleProp = 'margin-bottom';
	    this.el.classList.add(ClassName$g.STICKY_BOTTOM);
	    this.el.classList.remove(ClassName$g.STICKY_TOP);
	  } else {
	    // Assume direction is Direction.TOP
	    this.el.style.bottom = null;
	    this.el.style.top = '0';
	    this.contentDivTarget = this.el.nextElementSibling;
	    this.contentDivTargetSpacing = this.contentDivTarget ? parseInt(getComputedStyle(this.contentDivTarget).paddingTop, 10) + parseInt(getComputedStyle(this.contentDivTarget).marginTop, 10) : 0;
	    this.styleProp = 'margin-top';
	    this.el.classList.add(ClassName$g.STICKY_TOP);
	    this.el.classList.remove(ClassName$g.STICKY_BOTTOM);
	  }
	}
	/**
	 * @func _createObserver
	 * @desc creates a new observer instance member, disconnecting the old one if present. Instance member sentinel must already exist
	 */


	function _createObserver() {
	  var _this2 = this;

	  if (this.observer) {
	    this.observer.disconnect();
	  } // If smooth transition is enabled, the`rootMarginOffset` value should reflect the combined height
	  // of all elements hidden prior to the sticky becoming stuck. Adding this value to the rootMargin option
	  // of the intersection observer will allow for the sticky to activate sooner, resulting in a more
	  // seamless transition


	  var observerOptions = {
	    rootMargin: "-" + this.rootMarginOffset + "px 0px 0px 0px"
	  };

	  var onStickyChange = _onStickyChange.bind(this);

	  this.observer = new IntersectionObserver(function (entries) {
	    // fire onStickyChange if not in viewport
	    if (_this2.enableObserver) {
	      var prevState = _this2.isStuck;
	      _this2.isStuck = _this2.doesSentinelExceedBoundary() && !entries[0].isIntersecting; // Check if sticky has changed state from unstuck to stuck and vice versa
	      // in order to trigger custom events

	      if (typeof prevState !== 'undefined' && prevState !== _this2.isStuck) {
	        if (_this2.isStuck) {
	          _this2.el.dispatchEvent(customEvents[EventName$k.ON_STUCK]);
	        } else {
	          _this2.el.dispatchEvent(customEvents[EventName$k.ON_UNSTUCK]);
	        }
	      }

	      onStickyChange();
	    }
	  }, observerOptions);

	  if (this.sentinel) {
	    this.observer.observe(this.sentinel);
	  }
	}
	/**
	 * Helper function to clear key properties of an instance
	 */


	function _teardownInstance() {
	  Util.removeEvents(this.events); // remove the attribute from the element

	  this.el.classList.remove(ClassName$g.STICKY);

	  _updateScrollPadding.call(this, [true]); // remove sticky-sentinel element


	  this.sentinel.remove(); // disconnect observer

	  this.observer.disconnect();
	}
	/**
	 * Class representing a Sticky Element.
	 */


	var Sticky = /*#__PURE__*/function () {
	  /**
	   * Create the Sticky Element
	   * @param {Object} opts - The Sticky Element options.
	   * @param {Node} opts.el - The Sticky Element DOM node.
	   * @param {string} opts.direction - Whether the Sticky element sticks to the top when scrolled below a certain point (TOP) or sticks to the bottom when scrolled above a certain point (BOTTOM). If not defined, will attempt to read `data-direction` atrribute, then defaults TOP
	   * @param {boolean} opts.enableSmoothTransition - Whether to enable a smoother transition to hiding/showing elements as the sticky become stuck. If not defined, will attempt to read `data-smooth-transition` attribute, defaults to false
	   * @param {boolean} opts.enableObserver - enable the observer on initialization (defaults to true)
	   * @param {number} opts.extraScrollPaddingPx - Extra scroll padding to reduce crowding into sticky bars, defaults to 12px, same as minimal gutters
	   */
	  function Sticky(opts) {
	    this.el = opts.el;
	    this.direction = _getDirection(opts.direction || this.el.dataset.direction);
	    this.enableSmoothTransition = typeof opts.enableSmoothTransition === 'boolean' ? opts.enableSmoothTransition : _hasSmoothTransition(this.el);
	    this.extraScrollPaddingPx = typeof opts.extraScrollPaddingPx === 'number' ? opts.extraScrollPaddingPx : 12;
	    this.enableObserver = typeof opts.enableObserver === 'boolean' ? opts.enableObserver : true; // Saves the initial value of enable observer status from construction. Is used to flag whether the sticky should be automatically disabled when the height of the sticky exceeds 33% of the viewport

	    this.enableObserverInitial = this.enableObserver; // Add "sticky" class only while initialized to attach style and functionality provided by CSS
	    // Set prior to all height calculations so that styles are applied first

	    this.el.classList.add(ClassName$g.STICKY); // HTML element with the property data-mount="sticky"
	    // Create a property to hold the value for the sticky element height to be reused in both the _updateContentDivSpacing and _updateScrollPadding function.

	    this.stickyElementHeight = 0; // Set properties based on the anchor direction

	    _setDirectionalProps.call(this); // Add event handlers


	    this.events = [{
	      el: document.body,
	      type: EventName$k.FOCUS_IN,
	      handler: _onFocusin.bind(this)
	    }, {
	      el: window,
	      type: EventName$k.RESIZE,
	      handler: throttle(200, _updateScrollPadding.bind(this))
	    }, {
	      el: window,
	      type: EventName$k.RESIZE,
	      handler: debounce(300, _noStickyIfTooTall.bind(this)),
	      options: {
	        passive: true
	      }
	    }];
	    Util.addEvents(this.events);

	    var _calculateHeights$cal = _calculateHeights.call(this),
	        hiddenElementsHeight = _calculateHeights$cal.hidden,
	        visibleElementsHeight = _calculateHeights$cal.visible; // Adjusts where the sentinel to the intersection observer triggers. Expected to be 0 if smooth transition is disabled.


	    this.rootMarginOffset = this.enableSmoothTransition ? hiddenElementsHeight : 0;
	    this.hiddenElementsHeight = hiddenElementsHeight;
	    this.visibleElementsHeight = visibleElementsHeight;
	    this.sentinel = document.createElement('div');
	    this.sentinel.classList.add(ClassName$g.SENTINEL);
	    this.el.insertAdjacentElement('beforebegin', this.sentinel);

	    _createObserver.call(this);

	    if (this.doesSentinelExceedBoundary() && this.enableObserver) {
	      this.el.classList.add(ClassName$g.STUCK);

	      _updateScrollPadding.bind(this)();
	    }

	    _noStickyIfTooTall.call(this);

	    stickies.push(this);
	  }
	  /**
	   * Check if the sentinel Exceeds the boundary
	   * @returns {boolean} State of sentinel boundary
	   */


	  var _proto = Sticky.prototype;

	  _proto.doesSentinelExceedBoundary = function doesSentinelExceedBoundary() {
	    var sentinelRect = this.sentinel.getBoundingClientRect();
	    var sentinelTop = sentinelRect.top - this.rootMarginOffset;
	    var sentinelBottom = sentinelRect.bottom;

	    if (this.direction === Direction$2.TOP && sentinelTop < 0) {
	      return true;
	    }

	    if (this.direction === Direction$2.BOTTOM && sentinelBottom > window.innerHeight) {
	      return true;
	    }

	    return false;
	  }
	  /**
	   * Set the status of the observer (to enable or disable the observer)
	   * @param {boolean} status The status to set
	   */
	  ;

	  _proto.setObserverStatus = function setObserverStatus(status) {
	    if (this.doesSentinelExceedBoundary()) {
	      _updateScrollPadding.bind(this)();

	      if (status) {
	        this.el.classList.add(ClassName$g.STUCK);
	      } else {
	        this.el.classList.remove(ClassName$g.STUCK);
	      }
	    }

	    this.enableObserver = status;
	  }
	  /**
	   * Updates key aspects the instance
	   * @param {Object} opts - The Sticky options.
	   * @param {string} opts.direction - Whether the Sticky element sticks to the top when scrolled below a certain point (TOP) or sticks to the bottom when scrolled above a certain point (BOTTOM). If not defined, will maintain current setting
	   * @param {boolean} opts.enableSmoothTransition - Whether to enable a smoother transition to hiding/showing elements as the sticky become stuck. If not defined, will maintain current setting
	   * @param {number} opts.extraScrollPaddingPx - Extra scroll padding to reduce crowding into sticky bars. If not define, will maintain current setting
	   */
	  ;

	  _proto.update = function update(opts) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    var updateDirection = typeof opts.direction === 'string' ? _getDirection(opts.direction) : this.direction;
	    var updateEnableSmoothTransition = typeof opts.enableSmoothTransition === 'boolean' ? opts.enableSmoothTransition : this.enableSmoothTransition;
	    var updateExtraScrollPaddingPx = typeof opts.extraScrollPaddingPx === 'number' ? opts.extraScrollPaddingPx : this.extraScrollPaddingPx;

	    var _calculateHeights$cal2 = _calculateHeights.call(this),
	        updateHiddenElementsHeight = _calculateHeights$cal2.hidden,
	        updateVisibleElementsHeight = _calculateHeights$cal2.visible; // update visibleElementsHeight for future calculations


	    this.visibleElementsHeight = updateVisibleElementsHeight; // Set properties based on the anchor direction if changed

	    if (this.direction !== updateDirection) {
	      this.direction = updateDirection;

	      _setDirectionalProps.call(this); // need to update scroll padding if direction changes


	      this.extraScrollPaddingPx = updateExtraScrollPaddingPx;

	      _updateScrollPadding.call(this, [true]);
	    } // update scroll padding if extraScrollPaddingPx updated but direction not updated


	    if (this.extraScrollPaddingPx !== updateExtraScrollPaddingPx) {
	      this.extraScrollPaddingPx = updateExtraScrollPaddingPx;

	      _updateScrollPadding.call(this, [true]);
	    } // update observer if smooth transition has changed, or hiddenElementsHeight has changed


	    if (this.enableSmoothTransition !== updateEnableSmoothTransition || this.hiddenElementsHeight !== updateHiddenElementsHeight) {
	      this.enableSmoothTransition = updateEnableSmoothTransition;
	      this.hiddenElementsHeight = updateHiddenElementsHeight;
	      this.rootMarginOffset = this.enableSmoothTransition ? updateHiddenElementsHeight : 0;

	      _createObserver.call(this);
	    }

	    if (this.doesSentinelExceedBoundary()) {
	      this.el.classList.add(ClassName$g.STUCK);
	    }

	    _noStickyIfTooTall.call(this); // Create and dispatch custom event


	    this[EventName$k.ON_UPDATE] = new CustomEvent(EventName$k.ON_UPDATE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$k.ON_UPDATE]);
	    return this;
	  }
	  /**
	   * Remove the sticky.
	   */
	  ;

	  _proto.remove = function remove() {
	    _teardownInstance.call(this); // remove this sticky reference from array of instances


	    var index = stickies.indexOf(this);
	    stickies.splice(index, 1); // Create and dispatch custom event

	    this[EventName$k.ON_REMOVE] = new CustomEvent(EventName$k.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$k.ON_REMOVE]);
	  }
	  /**
	   * Get an array of sticky instances.
	   * @returns {Object[]} Array of sticky instances.
	   */
	  ;

	  Sticky.getInstances = function getInstances() {
	    return stickies;
	  };

	  return Sticky;
	}();

	var backToTopInstances = [];
	var Selector$k = {
	  DATA_MOUNT: '[data-mount="back-to-top"]'
	};
	var EventName$j = {
	  SCROLL: 'scroll',
	  ON_REMOVE: 'onRemove',
	  ON_RESIZE: 'resize',
	  ON_UPDATE: 'onUpdate'
	};
	var Attributes$2 = {
	  TABINDEX: 'tabindex'
	};
	var DISPLAY_BUTTON_THRESHOLD = 0.7; // percentage of the page where button will display

	var initialPageLoad = true;
	/**
	 * Switch the back to top element between static and sticky
	 */

	function _scrollListener() {
	  var _this = this;

	  // use offset margin and subtract the top position of the sentinel
	  var offsetWithSentinel = this.stickyElement.sentinel.offsetTop - this.offsetMarginTop;
	  var scrollY = window.scrollY || window.pageYOffset;

	  if (scrollY > offsetWithSentinel) {
	    this.stickyElement.setObserverStatus(true);
	    this.el.style.opacity = 1;
	  } else {
	    var timeout = initialPageLoad ? 0 : 175; // prevent button flashing on page load

	    this.el.style.opacity = 0;
	    setTimeout(function () {
	      _this.el.classList.remove(ClassName$g.STUCK);

	      _this.stickyElement.enableObserver = false;
	    }, timeout);
	    initialPageLoad = false;
	  }
	}
	/**
	 * Update sticky offset margin top value when browser height changes
	 * and remove/create new sticky element
	 */


	function _onWindowResize$1() {
	  // extra conditional check to prevent code from constantly running on resize
	  if (this.offsetMarginTop !== Util.getDocumentHeight() * DISPLAY_BUTTON_THRESHOLD) {
	    this.offsetMarginTop = Util.getDocumentHeight() * DISPLAY_BUTTON_THRESHOLD;
	    this.stickyElement.remove();
	    this.stickyElement = new Sticky({
	      el: this.el,
	      direction: Direction$2.BOTTOM
	    });
	  }
	}
	/**
	 * Class representing Back to Top.
	 */


	var BackToTop = /*#__PURE__*/function () {
	  /**
	   * Create the Back to Top.
	   * @param {Object} opts - The Back to Top options.
	   * @param {Node} opts.el - The Back to Top DOM node.
	   * @param {number} [opts.offsetMarginTop] - Offset in pixels from top of page where Back to Top should begin to be sticky.
	   * @param {Function} [opts.onScroll] - Function to override the scroll event handler.
	   * @param {Function} [opts.onWindowResize] - Function to override the window resize event handler.
	   */
	  function BackToTop(opts) {
	    this.el = opts.el;
	    this.offsetMarginTop = opts.offsetMarginTop || Util.getDocumentHeight() * DISPLAY_BUTTON_THRESHOLD;
	    this.onScroll = opts.onScroll || _scrollListener.bind(this);
	    this.onWindowResize = opts.onWindowResize || _onWindowResize$1.bind(this);
	    this.setTabindex(); // Create custom events

	    backToTopInstances.push(this);
	    this.stickyElement = new Sticky({
	      el: this.el,
	      direction: Direction$2.BOTTOM
	    }); // Do the initial firing of the listener to set the state

	    this.onScroll(); // attach event listeners

	    this.events = {
	      scrollEvent: {
	        el: document,
	        type: EventName$j.SCROLL,
	        handler: throttle(200, this.onScroll),
	        options: {
	          passive: true
	        }
	      },
	      resizeEvent: {
	        el: window,
	        type: EventName$j.ON_RESIZE,
	        handler: throttle(200, this.onWindowResize)
	      }
	    };
	    Util.addEvents(Object.values(this.events));
	  }
	  /**
	   * Check if the element needs a tabindex and set it
	   */


	  var _proto = BackToTop.prototype;

	  _proto.setTabindex = function setTabindex() {
	    var link = this.el.querySelector('a');
	    var href = link.getAttribute('href');
	    var targetElement = document.querySelector(href);
	    var isElementFound = document.querySelector(href) !== null;

	    if (isElementFound && // Only do something if the element is not tabbable
	    !Util.isElementTabbable(targetElement)) {
	      var tabindex = targetElement.getAttribute(Attributes$2.TABINDEX); // If we don't have a tabindex

	      if (tabindex === null) {
	        // Set the tabindex of the element to -1
	        targetElement.setAttribute(Attributes$2.TABINDEX, '-1');
	      }
	    }
	  }
	  /**
	   * Update the Back to Top.
	   * @param {Object} [opts] - The Back to Top options.
	   * @param {number} [opts.offsetMarginTop] - Offset in pixels from top of page where Back to Top should begin to be sticky.
	   * @param {Function} [opts.onScroll] - Function to override the scroll event handler.
	   * @param {Function} [opts.onWindowResize] - Function to override the window resize event handler.
	   */
	  ;

	  _proto.update = function update(opts) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    if (opts.offsetMarginTop) {
	      this.offsetMarginTop = opts.offsetMarginTop;
	    }

	    if (opts.onScroll) {
	      Util.removeEvents([this.events.scrollEvent]);
	      this.onScroll = opts.onScroll;
	      Util.addEvents([this.events.scrollEvent]);
	    }

	    if (opts.onWindowResize) {
	      Util.removeEvents([this.events.resizeEvent]);
	      this.onWindowResize = opts.onWindowResize;
	      Util.addEvents([this.events.resizeEvent]);
	    } // Do the initial firing of the listener to set the state


	    this.onScroll(); // Create and dispatch custom event

	    this[EventName$j.ON_UPDATE] = new CustomEvent(EventName$j.ON_UPDATE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$j.ON_UPDATE]);
	  }
	  /**
	   * Remove the event listener from the back to top element
	   */
	  ;

	  _proto.remove = function remove() {
	    Util.removeEvents(Object.values(this.events));
	    this.stickyElement.remove(); // remove this back to top reference from array of instances

	    var index = backToTopInstances.indexOf(this);
	    backToTopInstances.splice(index, 1); // Create and dispatch custom event

	    this[EventName$j.ON_REMOVE] = new CustomEvent(EventName$j.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$j.ON_REMOVE]);
	  }
	  /**
	   * Get back to top instances.
	   * @returns {Object[]} Array of back to top instances
	   */
	  ;

	  BackToTop.getInstances = function getInstances() {
	    return backToTopInstances;
	  };

	  return BackToTop;
	}();

	var imagesloaded = {exports: {}};

	var evEmitter = {exports: {}};

	/**
	 * EvEmitter v1.1.0
	 * Lil' event emitter
	 * MIT License
	 */

	(function (module) {
	/* jshint unused: true, undef: true, strict: true */

	( function( global, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, window */
	  if ( module.exports ) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory();
	  } else {
	    // Browser globals
	    global.EvEmitter = factory();
	  }

	}( typeof window != 'undefined' ? window : commonjsGlobal, function() {

	function EvEmitter() {}

	var proto = EvEmitter.prototype;

	proto.on = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // set events hash
	  var events = this._events = this._events || {};
	  // set listeners array
	  var listeners = events[ eventName ] = events[ eventName ] || [];
	  // only add once
	  if ( listeners.indexOf( listener ) == -1 ) {
	    listeners.push( listener );
	  }

	  return this;
	};

	proto.once = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // add event
	  this.on( eventName, listener );
	  // set once flag
	  // set onceEvents hash
	  var onceEvents = this._onceEvents = this._onceEvents || {};
	  // set onceListeners object
	  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
	  // set flag
	  onceListeners[ listener ] = true;

	  return this;
	};

	proto.off = function( eventName, listener ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var index = listeners.indexOf( listener );
	  if ( index != -1 ) {
	    listeners.splice( index, 1 );
	  }

	  return this;
	};

	proto.emitEvent = function( eventName, args ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  // copy over to avoid interference if .off() in listener
	  listeners = listeners.slice(0);
	  args = args || [];
	  // once stuff
	  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

	  for ( var i=0; i < listeners.length; i++ ) {
	    var listener = listeners[i];
	    var isOnce = onceListeners && onceListeners[ listener ];
	    if ( isOnce ) {
	      // remove listener
	      // remove before trigger to prevent recursion
	      this.off( eventName, listener );
	      // unset once flag
	      delete onceListeners[ listener ];
	    }
	    // trigger listener
	    listener.apply( this, args );
	  }

	  return this;
	};

	proto.allOff = function() {
	  delete this._events;
	  delete this._onceEvents;
	};

	return EvEmitter;

	}));
	}(evEmitter));

	/*!
	 * imagesLoaded v4.1.4
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */

	(function (module) {
	( function( window, factory ) {  // universal module definition

	  /*global define: false, module: false, require: false */

	  if ( module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      evEmitter.exports
	    );
	  } else {
	    // browser global
	    window.imagesLoaded = factory(
	      window,
	      window.EvEmitter
	    );
	  }

	})( typeof window !== 'undefined' ? window : commonjsGlobal,

	// --------------------------  factory -------------------------- //

	function factory( window, EvEmitter ) {

	var $ = window.jQuery;
	var console = window.console;

	// -------------------------- helpers -------------------------- //

	// extend objects
	function extend( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	}

	var arraySlice = Array.prototype.slice;

	// turn element or nodeList into an array
	function makeArray( obj ) {
	  if ( Array.isArray( obj ) ) {
	    // use object if already an array
	    return obj;
	  }

	  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
	  if ( isArrayLike ) {
	    // convert nodeList to array
	    return arraySlice.call( obj );
	  }

	  // array of single index
	  return [ obj ];
	}

	// -------------------------- imagesLoaded -------------------------- //

	/**
	 * @param {Array, Element, NodeList, String} elem
	 * @param {Object or Function} options - if function, use as callback
	 * @param {Function} onAlways - callback function
	 */
	function ImagesLoaded( elem, options, onAlways ) {
	  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
	  if ( !( this instanceof ImagesLoaded ) ) {
	    return new ImagesLoaded( elem, options, onAlways );
	  }
	  // use elem as selector string
	  var queryElem = elem;
	  if ( typeof elem == 'string' ) {
	    queryElem = document.querySelectorAll( elem );
	  }
	  // bail if bad element
	  if ( !queryElem ) {
	    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
	    return;
	  }

	  this.elements = makeArray( queryElem );
	  this.options = extend( {}, this.options );
	  // shift arguments if no options set
	  if ( typeof options == 'function' ) {
	    onAlways = options;
	  } else {
	    extend( this.options, options );
	  }

	  if ( onAlways ) {
	    this.on( 'always', onAlways );
	  }

	  this.getImages();

	  if ( $ ) {
	    // add jQuery Deferred object
	    this.jqDeferred = new $.Deferred();
	  }

	  // HACK check async to allow time to bind listeners
	  setTimeout( this.check.bind( this ) );
	}

	ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

	ImagesLoaded.prototype.options = {};

	ImagesLoaded.prototype.getImages = function() {
	  this.images = [];

	  // filter & find items if we have an item selector
	  this.elements.forEach( this.addElementImages, this );
	};

	/**
	 * @param {Node} element
	 */
	ImagesLoaded.prototype.addElementImages = function( elem ) {
	  // filter siblings
	  if ( elem.nodeName == 'IMG' ) {
	    this.addImage( elem );
	  }
	  // get background image on element
	  if ( this.options.background === true ) {
	    this.addElementBackgroundImages( elem );
	  }

	  // find children
	  // no non-element nodes, #143
	  var nodeType = elem.nodeType;
	  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
	    return;
	  }
	  var childImgs = elem.querySelectorAll('img');
	  // concat childElems to filterFound array
	  for ( var i=0; i < childImgs.length; i++ ) {
	    var img = childImgs[i];
	    this.addImage( img );
	  }

	  // get child background images
	  if ( typeof this.options.background == 'string' ) {
	    var children = elem.querySelectorAll( this.options.background );
	    for ( i=0; i < children.length; i++ ) {
	      var child = children[i];
	      this.addElementBackgroundImages( child );
	    }
	  }
	};

	var elementNodeTypes = {
	  1: true,
	  9: true,
	  11: true
	};

	ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
	  var style = getComputedStyle( elem );
	  if ( !style ) {
	    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
	    return;
	  }
	  // get url inside url("...")
	  var reURL = /url\((['"])?(.*?)\1\)/gi;
	  var matches = reURL.exec( style.backgroundImage );
	  while ( matches !== null ) {
	    var url = matches && matches[2];
	    if ( url ) {
	      this.addBackground( url, elem );
	    }
	    matches = reURL.exec( style.backgroundImage );
	  }
	};

	/**
	 * @param {Image} img
	 */
	ImagesLoaded.prototype.addImage = function( img ) {
	  var loadingImage = new LoadingImage( img );
	  this.images.push( loadingImage );
	};

	ImagesLoaded.prototype.addBackground = function( url, elem ) {
	  var background = new Background( url, elem );
	  this.images.push( background );
	};

	ImagesLoaded.prototype.check = function() {
	  var _this = this;
	  this.progressedCount = 0;
	  this.hasAnyBroken = false;
	  // complete if no images
	  if ( !this.images.length ) {
	    this.complete();
	    return;
	  }

	  function onProgress( image, elem, message ) {
	    // HACK - Chrome triggers event before object properties have changed. #83
	    setTimeout( function() {
	      _this.progress( image, elem, message );
	    });
	  }

	  this.images.forEach( function( loadingImage ) {
	    loadingImage.once( 'progress', onProgress );
	    loadingImage.check();
	  });
	};

	ImagesLoaded.prototype.progress = function( image, elem, message ) {
	  this.progressedCount++;
	  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
	  // progress event
	  this.emitEvent( 'progress', [ this, image, elem ] );
	  if ( this.jqDeferred && this.jqDeferred.notify ) {
	    this.jqDeferred.notify( this, image );
	  }
	  // check if completed
	  if ( this.progressedCount == this.images.length ) {
	    this.complete();
	  }

	  if ( this.options.debug && console ) {
	    console.log( 'progress: ' + message, image, elem );
	  }
	};

	ImagesLoaded.prototype.complete = function() {
	  var eventName = this.hasAnyBroken ? 'fail' : 'done';
	  this.isComplete = true;
	  this.emitEvent( eventName, [ this ] );
	  this.emitEvent( 'always', [ this ] );
	  if ( this.jqDeferred ) {
	    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
	    this.jqDeferred[ jqMethod ]( this );
	  }
	};

	// --------------------------  -------------------------- //

	function LoadingImage( img ) {
	  this.img = img;
	}

	LoadingImage.prototype = Object.create( EvEmitter.prototype );

	LoadingImage.prototype.check = function() {
	  // If complete is true and browser supports natural sizes,
	  // try to check for image status manually.
	  var isComplete = this.getIsImageComplete();
	  if ( isComplete ) {
	    // report based on naturalWidth
	    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
	    return;
	  }

	  // If none of the checks above matched, simulate loading on detached element.
	  this.proxyImage = new Image();
	  this.proxyImage.addEventListener( 'load', this );
	  this.proxyImage.addEventListener( 'error', this );
	  // bind to image as well for Firefox. #191
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  this.proxyImage.src = this.img.src;
	};

	LoadingImage.prototype.getIsImageComplete = function() {
	  // check for non-zero, non-undefined naturalWidth
	  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
	  return this.img.complete && this.img.naturalWidth;
	};

	LoadingImage.prototype.confirm = function( isLoaded, message ) {
	  this.isLoaded = isLoaded;
	  this.emitEvent( 'progress', [ this, this.img, message ] );
	};

	// ----- events ----- //

	// trigger specified handler for event type
	LoadingImage.prototype.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};

	LoadingImage.prototype.onload = function() {
	  this.confirm( true, 'onload' );
	  this.unbindEvents();
	};

	LoadingImage.prototype.onerror = function() {
	  this.confirm( false, 'onerror' );
	  this.unbindEvents();
	};

	LoadingImage.prototype.unbindEvents = function() {
	  this.proxyImage.removeEventListener( 'load', this );
	  this.proxyImage.removeEventListener( 'error', this );
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	};

	// -------------------------- Background -------------------------- //

	function Background( url, element ) {
	  this.url = url;
	  this.element = element;
	  this.img = new Image();
	}

	// inherit LoadingImage prototype
	Background.prototype = Object.create( LoadingImage.prototype );

	Background.prototype.check = function() {
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  this.img.src = this.url;
	  // check if image is already complete
	  var isComplete = this.getIsImageComplete();
	  if ( isComplete ) {
	    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
	    this.unbindEvents();
	  }
	};

	Background.prototype.unbindEvents = function() {
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	};

	Background.prototype.confirm = function( isLoaded, message ) {
	  this.isLoaded = isLoaded;
	  this.emitEvent( 'progress', [ this, this.element, message ] );
	};

	// -------------------------- jQuery -------------------------- //

	ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
	  jQuery = jQuery || window.jQuery;
	  if ( !jQuery ) {
	    return;
	  }
	  // set local variable
	  $ = jQuery;
	  // $().imagesLoaded()
	  $.fn.imagesLoaded = function( options, callback ) {
	    var instance = new ImagesLoaded( this, options, callback );
	    return instance.jqDeferred.promise( $(this) );
	  };
	};
	// try making plugin
	ImagesLoaded.makeJQueryPlugin();

	// --------------------------  -------------------------- //

	return ImagesLoaded;

	});
	}(imagesloaded));

	var imagesLoaded = imagesloaded.exports;

	var PointerType = {
	  TOUCH: 'touch',
	  PEN: 'pen'
	};
	var EventName$i = {
	  POINTER_DOWN: 'pointerdown',
	  POINTER_UP: 'pointerup',
	  TOUCH_START: 'touchstart',
	  TOUCH_MOVE: 'touchmove',
	  TOUCH_END: 'touchend'
	};
	var ClassName$f = {
	  POINTER_EVENT: 'pointer-event'
	};

	function _handleSwipe() {
	  var absDeltax = Math.abs(this.touchDeltaX);

	  if (absDeltax <= this.swipeThreshold) {
	    return;
	  }

	  var direction = absDeltax / this.touchDeltaX; // swipe left

	  if (direction > 0) {
	    this.negativeCallback();
	  } // swipe right


	  if (direction < 0) {
	    this.positiveCallback();
	  }
	}

	function _swipeStart(event) {
	  if (this.pointerEvent && PointerType[event.pointerType.toUpperCase()]) {
	    this.touchStartX = event.clientX;
	  } else if (!this.pointerEvent) {
	    this.touchStartX = event.touches[0].clientX;
	  }
	}

	function _swipeMove(event) {
	  // ensure swiping with one touch and not pinching
	  if (event.touches && event.touches.length > 1) {
	    this.touchDeltaX = 0;
	  } else {
	    this.touchDeltaX = event.touches[0].clientX - this.touchStartX;
	  }
	}

	function _swipeEnd(event) {
	  if (this.pointerEvent && PointerType[event.pointerType.toUpperCase()]) {
	    this.touchDeltaX = event.clientX - this.touchStartX;
	  }

	  _handleSwipe.bind(this)();
	}
	/**
	 * Class for handling touch events.
	 */


	var TouchUtil = /*#__PURE__*/function () {
	  /**
	   * Create the touch events handler.
	   * @param {Object} opts - The touch events options.
	   * @param {Node} opts.el - The swipeable DOM node.
	   * @param {Function} opts.positiveCallback - Callback function to be called after swiping in a positive direction.
	   * @param {Function} opts.negativeCallback - Callback function to be called after swiping in a negative direction.
	   * @param {number} [opts.swipeThreshold] - The minimum swipe size
	   * @param {string} [opts.pointerEventClassName] - The classname to add for pointer events
	   */
	  function TouchUtil(opts) {
	    this.el = opts.el;
	    this.positiveCallback = opts.positiveCallback;
	    this.negativeCallback = opts.negativeCallback;
	    this.swipeThreshold = opts.swipeThreshold || 40;
	    this.pointerEventClassName = opts.pointerEventClassName || ClassName$f.POINTER_EVENT;
	    this.touchStartX = 0;
	    this.touchDeltaX = 0;
	    this.touchSupported = 'ontouchstart' in document.documentElement || Boolean(navigator.maxTouchPoints > 0);
	    this.pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);
	  }
	  /**
	   * Add the touch event listeners.
	   */


	  var _proto = TouchUtil.prototype;

	  _proto.addEventListeners = function addEventListeners() {
	    if (this.touchSupported) {
	      if (this.pointerEvent) {
	        this.el.addEventListener(EventName$i.POINTER_DOWN, _swipeStart.bind(this));
	        this.el.addEventListener(EventName$i.POINTER_UP, _swipeEnd.bind(this));
	        this.el.classList.add(this.pointerEventClassName);
	      } else {
	        this.el.addEventListener(EventName$i.TOUCH_START, _swipeStart.bind(this));
	        this.el.addEventListener(EventName$i.TOUCH_MOVE, _swipeMove.bind(this));
	        this.el.addEventListener(EventName$i.TOUCH_END, _swipeEnd.bind(this));
	      }
	    }
	  }
	  /**
	   * Remove the touch event listeners.
	   */
	  ;

	  _proto.removeEventListeners = function removeEventListeners() {
	    if (this.touchSupported) {
	      if (this.pointerEvent) {
	        this.el.removeEventListener(EventName$i.POINTER_DOWN, _swipeStart.bind(this));
	        this.el.removeEventListener(EventName$i.POINTER_UP, _swipeEnd.bind(this));
	        this.el.classList.remove(this.pointerEventClassName);
	      } else {
	        this.el.removeEventListener(EventName$i.TOUCH_START, _swipeStart.bind(this));
	        this.el.removeEventListener(EventName$i.TOUCH_MOVE, _swipeMove.bind(this));
	        this.el.removeEventListener(EventName$i.TOUCH_END, _swipeEnd.bind(this));
	      }
	    }
	  };

	  return TouchUtil;
	}();

	var ClassName$e = {
	  ACTIVE: 'active',
	  SLIDE: 'slide',
	  SLIDE_IN: 'sliding-in',
	  SNEAK_PEAK: 'carousel-sneak-peek',
	  PRODUCT_CARD: 'carousel-product-card',
	  VARIABLE_HEIGHT: 'carousel-variable-height',
	  RIGHT: 'carousel-item-right',
	  LEFT: 'carousel-item-left',
	  NEXT: 'carousel-item-next',
	  PREV: 'carousel-item-prev',
	  GET_HEIGHT: 'get-height',
	  MARGIN_X_0: 'mx-0',
	  PADDING_X_0: 'px-0'
	};
	var Direction$1 = {
	  NEXT: 'next',
	  PREV: 'prev',
	  LEFT: 'left',
	  RIGHT: 'right'
	};
	var Selector$j = {
	  ACTIVE: '.active',
	  ACTIVE_ITEM: '.active.carousel-item',
	  ITEM: '.carousel-item',
	  ITEM_IMG: '.carousel-item img',
	  INDICATORS: '.carousel-indicators',
	  DATA_SLIDE_PREV: '[data-slide="prev"]',
	  DATA_SLIDE_NEXT: '[data-slide="next"]',
	  DATA_MOUNT: '[data-mount="carousel"]',
	  DATA_LOOP: 'data-loop',
	  DATA_STATUS: 'data-status',
	  CAROUSEL_INNER: '.carousel-inner',
	  ROW: '.row',
	  SLIDE_ITEM: '.slide-item',
	  VISIBLE_STATUS: '[aria-hidden="true"]',
	  SR_STATUS: '[aria-live]',
	  BACK_TO_CONTROLS: '.back-to-controls'
	};
	var EventName$h = {
	  ON_CHANGE: 'onChange',
	  ON_UPDATE: 'onUpdate',
	  ON_REMOVE: 'onRemove'
	};
	/**
	 * Private functions.
	 */

	function _getItemIndex(element) {
	  var items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$j.ITEM)) : [];
	  return items.indexOf(element);
	}

	function _getInitialSlideIndex() {
	  var activeItem = this.el.querySelector(Selector$j.ACTIVE_ITEM);
	  return _getItemIndex.bind(this)(activeItem);
	}

	function _getNextSlide() {
	  var index = this.currentSlideIndex + 1; // If index exceeds slide length, return to index 0

	  return index > this.slides.length - 1 ? 0 : index;
	}

	function _getPrevSlide() {
	  var index = this.currentSlideIndex - 1; // If index is less than 0, move to last slide index

	  return index < 0 ? this.slides.length - 1 : index;
	}

	function _getSlide(num) {
	  // Record highest number, 0 or passed-in value
	  var max = Math.max(num, 0); // Return lowest number, either previous number or the maximum slide index

	  return Math.min(max, this.slides.length - 1);
	}

	function _getStatusContainer() {
	  // Check if we are maintaing a status message for this carousel
	  // and that the element exists on the page
	  var statusContainer = this.el.getAttribute(Selector$j.DATA_STATUS);
	  return statusContainer ? document.getElementById(statusContainer) : null;
	}

	function _shouldLoopSlides() {
	  // Loop by default unless data-loop is set to false
	  return !(this.el.getAttribute(Selector$j.DATA_LOOP) === 'false');
	}

	function _onFirstSlide() {
	  return this.currentSlideIndex === 0;
	}

	function _onLastSlide() {
	  return this.currentSlideIndex === this.slides.length - 1;
	}

	function _shouldGoForward() {
	  return _onLastSlide.bind(this)() ? this.loopSlides : true;
	}

	function _shouldGoBack() {
	  return _onFirstSlide.bind(this)() ? this.loopSlides : true;
	}

	function _prevBtnOnClick() {
	  this.goToPrevSlide();
	}

	function _nextBtnOnClick() {
	  // Add events to manage focus order for accessibility
	  Util.addEvents(this.nextBtnEvents);
	  this.goToNextSlide();
	}

	function _backToControlsBtnOnClick() {
	  if (!this.backToControlsBtn) {
	    return;
	  } // focus logic: prefer "previous" button, then "next", otherwise carousel container


	  if (!this.prevBtn.disabled) {
	    this.prevBtn.focus();
	    return;
	  }

	  if (!this.nextBtn.disabled) {
	    this.nextBtn.focus();
	    return;
	  }

	  this.el.setAttribute('tabindex', -1);
	  this.el.focus();
	}

	function _imgOnDrag(event) {
	  // Prevent images inside slides from being dragged and interfering with touch interaction
	  event.preventDefault();
	}

	function _slide(direction, nextElementIndex) {
	  var _this = this;

	  var activeElement = this.slides[this.currentSlideIndex];
	  var nextElement = this.slides[nextElementIndex];
	  var directionalClassName;
	  var orderClassName;

	  if (direction === Direction$1.NEXT) {
	    directionalClassName = ClassName$e.LEFT;
	    orderClassName = ClassName$e.NEXT;
	  } else {
	    directionalClassName = ClassName$e.RIGHT;
	    orderClassName = ClassName$e.PREV;
	  }

	  if (nextElement && nextElement.classList.contains(ClassName$e.ACTIVE)) {
	    this.isSliding = false;
	    return;
	  }

	  if (!activeElement || !nextElement) {
	    // Some weirdness is happening, so we bail
	    return;
	  }

	  this.isSliding = true;

	  _setActiveIndicatorElement.bind(this)(nextElementIndex);

	  if (this.el.classList.contains(ClassName$e.SNEAK_PEAK)) {
	    _removeNextPrevClasses.bind(this)();
	  }

	  if (this.el.classList.contains(ClassName$e.SLIDE)) {
	    if (this.el.classList.contains(ClassName$e.VARIABLE_HEIGHT)) {
	      this.el.classList.add(ClassName$e.MARGIN_X_0, ClassName$e.PADDING_X_0);
	    }

	    nextElement.classList.add(orderClassName, ClassName$e.SLIDE_IN);
	    Util.reflow(nextElement);
	    activeElement.classList.add(directionalClassName);
	    nextElement.classList.add(directionalClassName);
	    var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
	    setTimeout(function () {
	      nextElement.classList.remove(directionalClassName, orderClassName, ClassName$e.SLIDE_IN);
	      nextElement.classList.add(ClassName$e.ACTIVE);
	      activeElement.classList.remove(ClassName$e.ACTIVE, orderClassName, directionalClassName);

	      if (_this.el.classList.contains(ClassName$e.VARIABLE_HEIGHT)) {
	        _this.el.classList.remove(ClassName$e.MARGIN_X_0, ClassName$e.PADDING_X_0);
	      }

	      _this.isSliding = false;
	    }, transitionDuration);
	  } else {
	    activeElement.classList.remove(ClassName$e.ACTIVE);
	    nextElement.classList.add(ClassName$e.ACTIVE);
	    this.isSliding = false;
	  }

	  _setSlideAttributes.bind(this)(nextElementIndex);

	  this.didSlide = true;
	  this.currentSlideIndex = nextElementIndex;

	  if (this.el.classList.contains(ClassName$e.SNEAK_PEAK)) {
	    _addNextPrevClasses.bind(this)();
	  }

	  _setButtonAttributes.bind(this)(); // Update the status message


	  if (this.statusContainer) {
	    _setStatusMessage.bind(this)(nextElementIndex);
	  }
	}

	function _setActiveIndicatorElement(index) {
	  if (this.indicators) {
	    var indicators = [].slice.call(this.indicators.querySelectorAll(Selector$j.ACTIVE));
	    indicators.forEach(function (indicator) {
	      indicator.classList.remove(ClassName$e.ACTIVE);
	    });
	    var nextIndicator = this.indicators.children[index];

	    if (nextIndicator) {
	      nextIndicator.classList.add(ClassName$e.ACTIVE);
	    }
	  }
	}

	function _removeNextPrevClasses() {
	  var nextElementIndex = _getNextSlide.bind(this)();

	  var prevElementIndex = _getPrevSlide.bind(this)();

	  this.slides[prevElementIndex].classList.remove(ClassName$e.PREV);
	  this.slides[nextElementIndex].classList.remove(ClassName$e.NEXT);
	}

	function _addNextPrevClasses() {
	  var nextElementIndex = _getNextSlide.bind(this)();

	  var prevElementIndex = _getPrevSlide.bind(this)();

	  this.slides[nextElementIndex].classList.add(ClassName$e.NEXT);
	  this.slides[prevElementIndex].classList.add(ClassName$e.PREV);
	}

	function _setSlideAttributes(index) {
	  for (var i = 0; i < this.slides.length; i++) {
	    if (i === index) {
	      this.slides[i].removeAttribute('aria-hidden');

	      if (this.el.classList.contains(ClassName$e.PRODUCT_CARD)) {
	        // Product card carousel needs the first product card focusable, not the whole slide
	        var slideItems = [].slice.call(this.slides[i].querySelectorAll(Selector$j.SLIDE_ITEM));
	        this.slides[i].removeAttribute('tabindex');
	        slideItems[0].firstElementChild.setAttribute('tabindex', 0);
	      } else {
	        this.slides[i].setAttribute('tabindex', 0);
	      }
	    } else {
	      this.slides[i].removeAttribute('tabindex');
	      this.slides[i].setAttribute('aria-hidden', 'true');
	    }
	  }
	}

	function _setActiveClass(index) {
	  for (var i = 0; i < this.slides.length; i++) {
	    if (i === index) {
	      this.slides[i].classList.add(ClassName$e.ACTIVE);
	    } else {
	      this.slides[i].classList.remove(ClassName$e.ACTIVE);
	    }
	  }
	}

	function _setButtonAttributes() {
	  if (!this.loopSlides) {
	    if (_onFirstSlide.bind(this)()) {
	      this.prevBtn.setAttribute('disabled', '');
	      this.prevBtn.setAttribute('tabindex', -1);
	      this.nextBtn.removeAttribute('disabled');
	    } else if (_onLastSlide.bind(this)()) {
	      this.prevBtn.removeAttribute('disabled');
	      this.prevBtn.removeAttribute('tabindex');
	      this.nextBtn.setAttribute('disabled', '');
	    } else {
	      this.prevBtn.removeAttribute('disabled');
	      this.prevBtn.removeAttribute('tabindex');
	      this.nextBtn.removeAttribute('disabled');
	    }
	  }
	}
	/**
	 * @desc finds appropriate title text for a carousel slide
	 * @param {Node} searchNode the Node to seach
	 * @returns {String} Appropriate text, or empty string if none is found
	 */


	function _getSlideTitleText(searchNode) {
	  var headerSelectors = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
	  var i;
	  var headerNode = null;

	  for (i = 0; i < headerSelectors.length; i++) {
	    headerNode = searchNode.querySelector(headerSelectors[i]);

	    if (headerNode) {
	      return headerNode.textContent;
	    }
	  }

	  var imageNodeList = searchNode.querySelectorAll('img');

	  if (imageNodeList.length === 1 && imageNodeList[0].hasAttribute('alt')) {
	    return imageNodeList[0].getAttribute('alt');
	  }

	  return '';
	}

	function _setStatusMessage(index) {
	  // Sets status message if a status container (visible, screen reader, or both) was registered at initialization
	  if (this.visibleStatusContainer || this.srStatusContainer) {
	    // for carousels that display multiple items at once, like product cards, each item is a slideItem
	    // one or more slideItems are grouped together in a slide.
	    var slideItems = [].slice.call(this.el.querySelectorAll(Selector$j.SLIDE_ITEM)); // all slideItems

	    var activeSlide = this.slides[index]; // The currently shown slide

	    var activeSlideItems = activeSlide.querySelectorAll(Selector$j.SLIDE_ITEM); // the slideItems in the currently shown slide

	    var start = slideItems.indexOf(activeSlideItems[0]) + 1;
	    var separator = '–';
	    var end = slideItems.indexOf(activeSlideItems[activeSlideItems.length - 1]) + 1;
	    var data = {
	      start: start,
	      separator: separator,
	      end: end,
	      total: slideItems.length,
	      slideNumber: index + 1
	    }; // Check if there are no slideItems and we're instead just dealing with regular slides

	    if (!slideItems || slideItems.length < 1) {
	      data.start = index + 1;
	      data.end = index + 1;
	      data.total = this.slides.length;
	    } // Check if we're showing exactly one thing


	    if (activeSlide && start === end) {
	      // Make title of shown slide available to template if there's only one
	      data.slideTitle = _getSlideTitleText(activeSlide);
	    }

	    if (this.srStatusContainer && this.srStatusTemplate) {
	      this.srStatusContainer.textContent = Util.interpolateString(this.srStatusTemplate, data);
	    } // If we are only showing one item, set separator and end to an empty string for the visible template only


	    if (start === end) {
	      data.separator = '';
	      data.end = '';
	    }

	    if (this.visibleStatusContainer && this.visibleStatusTemplate) {
	      this.visibleStatusContainer.textContent = Util.interpolateString(this.visibleStatusTemplate, data);
	    }
	  }
	}

	function _setSlideHeights() {
	  // Enforce consistent height (flexbox messes with animation)
	  var slideArray = [].slice.call(this.slides);
	  var maxHeight = slideArray[0].clientHeight;
	  slideArray.forEach(function (slide) {
	    if (!slide.classList.contains(ClassName$e.ACTIVE)) {
	      slide.classList.add(ClassName$e.GET_HEIGHT);
	    }

	    if (slide.clientHeight > maxHeight) {
	      maxHeight = slide.clientHeight;
	    }

	    slide.classList.remove(ClassName$e.GET_HEIGHT);
	  });
	  slideArray.forEach(function (slide) {
	    slide.style.height = maxHeight + "px";
	  });
	}

	function _removeSlideHeights() {
	  var slideArray = [].slice.call(this.slides);
	  slideArray.forEach(function (slide) {
	    slide.style.height = '';
	  });
	}

	function _recalculateSlideHeights() {
	  var _this2 = this;

	  _removeSlideHeights.bind(this)();

	  imagesLoaded(this.el, function () {
	    _setSlideHeights.bind(_this2)();
	  });
	}

	function _handleKeyDown(event) {
	  var keycode = event.keycode || event.which;

	  if (keycode === Util.keyCodes.TAB && this.didSlide) {
	    _focusOnSlide.bind(this)(this.currentSlideIndex);

	    this.didSlide = false;
	    event.preventDefault();
	  }

	  _removeControlEventListeners.bind(this)();
	}

	function _focusOnSlide(index) {
	  this.slides[index].focus();
	}

	function _removeControlEventListeners() {
	  this.didSlide = false;
	  Util.removeEvents(this.nextBtnEvents);
	}

	function _reallocateSlideItems() {
	  var inner = this.el.querySelector(Selector$j.CAROUSEL_INNER);
	  var activeSlide = this.el.querySelector(Selector$j.ACTIVE_ITEM);
	  var slideItemsContainer = activeSlide.querySelector(Selector$j.ROW);
	  var slideItems = [].slice.call(this.el.querySelectorAll(Selector$j.SLIDE_ITEM));
	  var activeSlideItems = activeSlide.querySelectorAll(Selector$j.SLIDE_ITEM);
	  var maxItems = Math.round(slideItemsContainer.clientWidth / activeSlideItems[0].clientWidth);
	  var slidesNeeded = Math.ceil(slideItems.length / maxItems);
	  var slidesToAdd = slidesNeeded - this.slides.length; // Reset CSS properties

	  _removeSlideHeights.bind(this)();

	  this.prevBtn.style.display = '';
	  this.nextBtn.style.display = '';

	  if (this.statusContainer) {
	    this.statusContainer.style.display = '';
	    this.statusContainer.nextElementSibling.style.display = '';
	  }

	  if (slidesToAdd > 0) {
	    // We need to add more slides
	    for (var i = 0; i < slidesToAdd; i++) {
	      var newNode = this.slides[this.slides.length - 1].cloneNode(true);
	      inner.append(newNode);
	      var newParent = newNode.querySelector(Selector$j.ROW); // Clear out duplicated slide items

	      while (newParent.firstChild) {
	        newParent.lastChild.remove();
	      }
	    }
	  } else if (slidesToAdd < 0) {
	    // We need to remove some slides
	    for (var _i = 0; _i > slidesToAdd; _i--) {
	      inner.lastChild.remove();
	    }
	  } // Reallocate the slide items among the slides


	  var slideItemsContainers = this.el.querySelectorAll(Selector$j.ROW);
	  var itemsToAppend;

	  var _loop = function _loop(_i2) {
	    var remainder = slideItems.length % maxItems;

	    if (remainder > 0) {
	      itemsToAppend = slideItems.splice(slideItems.length - remainder, remainder);
	    } else {
	      itemsToAppend = slideItems.splice(slideItems.length - maxItems, maxItems);
	    }

	    itemsToAppend.forEach(function (item) {
	      slideItemsContainers[_i2].append(item);
	    });
	  };

	  for (var _i2 = slideItemsContainers.length - 1; _i2 >= 0; _i2--) {
	    _loop(_i2);
	  } // Update the slides property


	  this.slides = this.el.querySelectorAll(Selector$j.ITEM); // Reset current slide index if it's on a slide that's been removed

	  if (this.currentSlideIndex > this.slides.length - 1) {
	    this.currentSlideIndex = this.slides.length - 1;
	  } // If there is only one slide, hide the controls, status msg, and cta


	  if (this.slides.length === 1) {
	    this.prevBtn.style.display = 'none';
	    this.nextBtn.style.display = 'none';

	    if (this.statusContainer) {
	      this.statusContainer.style.display = 'none';
	      this.statusContainer.nextElementSibling.style.display = 'none';
	    }
	  }

	  _recalculateSlideHeights.bind(this)();
	}

	function _setupDom() {
	  // Reallocate slide items for product card carousel
	  if (this.el.classList.contains(ClassName$e.PRODUCT_CARD)) {
	    _reallocateSlideItems.bind(this)();
	  } // Carousels that aren't layered can't use flexbox to ensure consistent height
	  // so we need an option to set slide height via JS


	  if (this.el.classList.contains(ClassName$e.VARIABLE_HEIGHT)) {
	    _recalculateSlideHeights.bind(this)();
	  } // Make sure slide attributes and indicators are up to date


	  _setSlideAttributes.bind(this)(this.currentSlideIndex);

	  _setActiveClass.bind(this)(this.currentSlideIndex);

	  _setActiveIndicatorElement.bind(this)(this.currentSlideIndex); // For layered carousel layouts, add prev and next classes to slides


	  if (this.el.classList.contains(ClassName$e.SNEAK_PEAK)) {
	    _addNextPrevClasses.bind(this)();
	  } // Update button attributes, for non-looping carousels


	  _setButtonAttributes.bind(this)(); // Update the status message


	  if (this.statusContainer) {
	    _setStatusMessage.bind(this)(this.currentSlideIndex);

	    this.statusContainer.parentNode.classList.remove('d-none');
	  }
	}
	/**
	 * Class representing carousel controls.
	 */


	var CarouselControls = /*#__PURE__*/function () {
	  /**
	   * Create the carousel controls.
	   * @param {Object} opts - The carousel controls options.
	   * @param {Node} opts.el - The carousel DOM node.
	   * @param {Node[]} opts.slides - Array of carousel slides.
	   * @param {number} [opts.initialSlideIndex] - Index of the first carousel slide.
	   * @param {boolean} [opts.loopSlides=true] - Whether the carousel should loop. Defaults to true.
	   * @param {Node} [opts.statusContainer] - Node that contains the status message templates.
	   * @param {Function} [opts.prevOnClick] - Function to override the previous button click handler.
	   * @param {Function} [opts.nextOnClick] - Function to override the next button click handler.
	   */
	  function CarouselControls(opts) {
	    var _this3 = this;

	    this.el = opts.el;
	    this.slides = opts.slides;
	    this.currentSlideIndex = opts.initialSlideIndex || _getInitialSlideIndex.bind(this)();
	    this.loopSlides = typeof opts.loopSlides === 'boolean' ? opts.loopSlides : _shouldLoopSlides.bind(this)();
	    this.statusContainer = opts.statusContainer || _getStatusContainer.bind(this)();
	    this.prevOnClick = opts.prevOnClick || _prevBtnOnClick.bind(this);
	    this.nextOnClick = opts.nextOnClick || _nextBtnOnClick.bind(this);
	    this.backToControlsBtnOnClick = _backToControlsBtnOnClick.bind(this); // Internal variables

	    this.isSliding = false;
	    this.didSlide = false;
	    this.touchUtil = new TouchUtil({
	      el: this.el,
	      positiveCallback: this.goToNextSlide.bind(this),
	      negativeCallback: this.goToPrevSlide.bind(this)
	    }); // Select control nodes

	    this.prevBtn = this.el.querySelector(Selector$j.DATA_SLIDE_PREV);
	    this.nextBtn = this.el.querySelector(Selector$j.DATA_SLIDE_NEXT);
	    this.backToControlsBtn = this.el.querySelector(Selector$j.BACK_TO_CONTROLS);
	    this.indicators = this.el.querySelector(Selector$j.INDICATORS);
	    this.itemImg = this.el.querySelectorAll(Selector$j.ITEM_IMG);

	    if (this.statusContainer) {
	      this.visibleStatusContainer = this.statusContainer.querySelector(Selector$j.VISIBLE_STATUS);
	      this.srStatusContainer = this.statusContainer.querySelector(Selector$j.SR_STATUS);

	      if (this.visibleStatusContainer) {
	        this.visibleStatusTemplate = this.visibleStatusContainer.textContent;
	      }

	      if (this.srStatusContainer) {
	        this.srStatusTemplate = this.srStatusContainer.textContent;
	      }
	    } // Attach event listeners


	    this.events = [{
	      el: this.prevBtn,
	      type: 'click',
	      handler: this.prevOnClick
	    }, {
	      el: this.nextBtn,
	      type: 'click',
	      handler: this.nextOnClick
	    }]; // Can be null

	    if (this.backToControlsBtn) {
	      this.events.push({
	        el: this.backToControlsBtn,
	        type: 'click',
	        handler: this.backToControlsBtnOnClick
	      });
	    }

	    if (this.itemImg) {
	      this.itemImg.forEach(function (img) {
	        _this3.events.push({
	          el: img,
	          type: 'dragstart',
	          handler: _imgOnDrag
	        });
	      });
	    } // Product card and variable height carousels need an event listener for window resize


	    if (this.el.classList.contains(ClassName$e.PRODUCT_CARD) || this.el.classList.contains(ClassName$e.VARIABLE_HEIGHT)) {
	      this.events.push({
	        el: window,
	        type: 'resize',
	        handler: debounce(300, this.update.bind(this)),
	        options: {
	          passive: true
	        }
	      });
	    }

	    Util.addEvents(this.events);
	    this.touchUtil.addEventListeners(); // Event listeners that need to be added/removed based on user interaction for accessibility
	    // After someone activates the next button, but before the slide animation is over, the next tab keypress
	    // needs to direct focus to the next slide

	    this.nextBtnEvents = [{
	      el: this.nextBtn,
	      type: 'keydown',
	      handler: _handleKeyDown.bind(this)
	    }, {
	      el: this.nextBtn,
	      type: 'blur',
	      handler: _removeControlEventListeners.bind(this)
	    }]; // Create custom events

	    this[EventName$h.ON_CHANGE] = new CustomEvent(EventName$h.ON_CHANGE, {
	      bubbles: true,
	      cancelable: true
	    }); // Fix for product card and variable height carousels placed inside other interactive elements like tabs or modals

	    if (this.el.classList.contains(ClassName$e.PRODUCT_CARD) || this.el.classList.contains(ClassName$e.VARIABLE_HEIGHT)) {
	      this.observer = new IntersectionObserver(function (entries) {
	        if (entries[0].isIntersecting) {
	          _this3.update();
	        }
	      });
	      this.observer.observe(this.el);
	    } // Setup DOM


	    _setupDom.bind(this)();
	  }
	  /**
	   * Remove the carousel controls event handlers.
	   */


	  var _proto = CarouselControls.prototype;

	  _proto.remove = function remove() {
	    // Remove event listeners
	    Util.removeEvents(this.events);
	    this.touchUtil.removeEventListeners();

	    _removeControlEventListeners.bind(this)(); // Disconnect intersection observer


	    if (this.el.classList.contains(ClassName$e.PRODUCT_CARD) || this.el.classList.contains(ClassName$e.VARIABLE_HEIGHT)) {
	      this.observer.disconnect();
	    } // Create and dispatch custom event


	    this[EventName$h.ON_REMOVE] = new CustomEvent(EventName$h.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$h.ON_REMOVE]);
	  }
	  /**
	   * Update the carousel controls instance.
	   */
	  ;

	  _proto.update = function update() {
	    // For layered carousel layouts, remove prev and next classes from existing slides
	    if (this.el.classList.contains(ClassName$e.SNEAK_PEAK)) {
	      _removeNextPrevClasses.bind(this)();
	    } // Update the slides property


	    this.slides = this.el.querySelectorAll(Selector$j.ITEM); // Setup DOM

	    _setupDom.bind(this)(); // Create and dispatch custom event


	    this[EventName$h.ON_UPDATE] = new CustomEvent(EventName$h.ON_UPDATE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$h.ON_UPDATE]);
	  }
	  /**
	   * Go forward to the next slide.
	   */
	  ;

	  _proto.goToNextSlide = function goToNextSlide() {
	    if (!this.isSliding && _shouldGoForward.bind(this)()) {
	      _slide.bind(this)(Direction$1.NEXT, _getNextSlide.bind(this)());

	      this.el.dispatchEvent(this[EventName$h.ON_CHANGE]);
	    }
	  }
	  /**
	   * Go back to the previous slide.
	   */
	  ;

	  _proto.goToPrevSlide = function goToPrevSlide() {
	    if (!this.isSliding && _shouldGoBack.bind(this)()) {
	      _slide.bind(this)(Direction$1.PREV, _getPrevSlide.bind(this)());

	      this.el.dispatchEvent(this[EventName$h.ON_CHANGE]);
	    }
	  }
	  /**
	   * Go to a specific slide.
	   * @param {number} num - 0-based index of the slide to change to.
	   */
	  ;

	  _proto.goToSlide = function goToSlide(num) {
	    if (!this.isSliding) {
	      _slide.bind(this)(Direction$1.PREV, _getSlide.bind(this)(num));

	      this.el.dispatchEvent(this[EventName$h.ON_CHANGE]);
	    }
	  };

	  return CarouselControls;
	}();

	var carousels = [];
	/**
	 * Class representing a carousel.
	 */

	var Carousel = /*#__PURE__*/function () {
	  /**
	   * Create the carousel.
	   * @param {Object} opts - The carousel options.
	   * @param {Node} opts.el - The carousel DOM node.
	   */
	  function Carousel(opts) {
	    this.el = opts.el;
	    this.controls = new CarouselControls(Object.assign({
	      slides: opts.el.querySelectorAll(Selector$j.ITEM)
	    }, opts));
	    carousels.push(this);
	  }
	  /**
	   * Remove the carousel.
	   */


	  var _proto = Carousel.prototype;

	  _proto.remove = function remove() {
	    // remove any references from controls
	    this.controls.remove();
	    delete this.controls; // remove this carousel reference from array of instances

	    var index = carousels.indexOf(this);
	    carousels.splice(index, 1);
	  }
	  /**
	   * Get an array of carousel instances.
	   * @returns {Object[]} Array of carousel instances.
	   */
	  ;

	  Carousel.getInstances = function getInstances() {
	    return carousels;
	  };

	  return Carousel;
	}();

	var DESCRIPTORS$1 = descriptors;
	var global$5 = global$m;
	var isForced$1 = isForced_1;
	var redefine$2 = redefine$9.exports;
	var has$1 = has$b;
	var classof$1 = classofRaw$1;
	var inheritIfRequired$1 = inheritIfRequired$3;
	var toPrimitive = toPrimitive$4;
	var fails$3 = fails$l;
	var create = objectCreate;
	var getOwnPropertyNames = objectGetOwnPropertyNames.f;
	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var defineProperty$2 = objectDefineProperty.f;
	var trim = stringTrim.trim;

	var NUMBER = 'Number';
	var NativeNumber = global$5[NUMBER];
	var NumberPrototype = NativeNumber.prototype;

	// Opera ~12 has broken Object#toString
	var BROKEN_CLASSOF = classof$1(create(NumberPrototype)) == NUMBER;

	// `ToNumber` abstract operation
	// https://tc39.es/ecma262/#sec-tonumber
	var toNumber = function (argument) {
	  var it = toPrimitive(argument, false);
	  var first, third, radix, maxCode, digits, length, index, code;
	  if (typeof it == 'string' && it.length > 2) {
	    it = trim(it);
	    first = it.charCodeAt(0);
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
	        default: return +it;
	      }
	      digits = it.slice(2);
	      length = digits.length;
	      for (index = 0; index < length; index++) {
	        code = digits.charCodeAt(index);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	// `Number` constructor
	// https://tc39.es/ecma262/#sec-number-constructor
	if (isForced$1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
	  var NumberWrapper = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var dummy = this;
	    return dummy instanceof NumberWrapper
	      // check on 1..constructor(foo) case
	      && (BROKEN_CLASSOF ? fails$3(function () { NumberPrototype.valueOf.call(dummy); }) : classof$1(dummy) != NUMBER)
	        ? inheritIfRequired$1(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
	  };
	  for (var keys = DESCRIPTORS$1 ? getOwnPropertyNames(NativeNumber) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES2015 (in case, if modules with ES2015 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
	    // ESNext
	    'fromString,range'
	  ).split(','), j = 0, key; keys.length > j; j++) {
	    if (has$1(NativeNumber, key = keys[j]) && !has$1(NumberWrapper, key)) {
	      defineProperty$2(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
	    }
	  }
	  NumberWrapper.prototype = NumberPrototype;
	  NumberPrototype.constructor = NumberWrapper;
	  redefine$2(global$5, NUMBER, NumberWrapper);
	}

	var Selector$i = {
	  DATA_MOUNT: '[data-mount="character-count"]'
	};
	var EventName$g = {
	  ON_UPDATE: 'onUpdate',
	  ON_REMOVE: 'onRemove'
	};
	var characterCountInstances = [];
	var UPDATE_RATE_LIMIT = 400; // rate limit in ms for screen reader announcement

	/**
	 * Gets the target form element to monitor
	 * @returns {Node} The target element
	 */

	function _getTarget$2() {
	  // Reads selector from data-target attribute
	  var selector = Util.getSelectorFromElement(this.statusMessage); // There should only be one element targeted, gets the first match

	  return document.querySelector(selector);
	}
	/**
	 * Updates the textContent of a node with the most up to date character count status message
	 * @param {Node} node The node to update the textContent of
	 */


	function _updateStatusMessageText(node) {
	  var msgTemplate = this.isMaxInputReached() ? this.maxMessageTemplate : this.statusMessageTemplate;
	  var inputLength = this.getUserInputLength();
	  node.textContent = Util.interpolateString(msgTemplate, {
	    remaining: this.inputMaxLength - inputLength,
	    entered: inputLength,
	    max: this.inputMaxLength
	  });
	}
	/**
	 * Updates the visual status message only, immediately
	 */


	function _updateVisualStatusMessage() {
	  _updateStatusMessageText.bind(this)(this.statusMessageVisual);
	}
	/**
	 * Updates the screen reader status message only, immediately
	 */


	function _updateScreenReaderStatusMessage() {
	  _updateStatusMessageText.bind(this)(this.statusMessageSR);
	}
	/**
	 * Computes whether key typed is printable
	 * @param {KeyboardEvent} keyboardEventKey
	 * @returns {Boolean} Whether the key entered is printable
	 */


	function _isPrintable(keyboardEventKey) {
	  return /^.$/.test(keyboardEventKey);
	}
	/**
	 * Causes the screen reader status message to narrate
	 */


	function _narrateStatusMessage() {
	  var _this = this;

	  this.statusMessageSR.textContent = '';
	  setTimeout(function () {
	    _updateScreenReaderStatusMessage.bind(_this)();
	  }, 200);
	}
	/**
	 * Narrates the screen reader status message if the given KeyboardEvent represents a printable character
	 * @param {KeyboardEvent} keyboardEvent
	 */


	function _narrateIfMaxInputAndPrintableKey(keyboardEvent) {
	  if (this.isMaxInputReached() && _isPrintable(keyboardEvent.key)) {
	    _narrateStatusMessage.bind(this)();
	  }
	}

	var CharacterCount = /*#__PURE__*/function () {
	  /**
	   * Creates a CharacterCount object
	   * @param {Object} opts The CharacterCount options
	   * @param {HTMLElement} opts.el The node that wraps the status message elements and stores configuration information
	   */
	  function CharacterCount(opts) {
	    var _this2 = this;

	    this.statusMessage = opts.el || opts.statusMessage;

	    if (opts.statusMessage) {
	      console.warn('Warning: the CharacterCount "statusMessage" option is deprecated and will be removed in favor of "el" in a future version');
	    }

	    this.statusMessageSR = this.statusMessage.querySelector('.sr-only');
	    this.statusMessageVisual = this.statusMessage.querySelector(':not(.sr-only)');
	    this.target = _getTarget$2.bind(this)();
	    this.inputMaxLength = Number(this.target.getAttribute('maxLength'));
	    this.statusMessageTemplate = this.statusMessage.getAttribute('data-status-msg-template');
	    this.maxMessageTemplate = this.statusMessage.getAttribute('data-max-msg-template');
	    this.debouncedSRUpdate = debounce(UPDATE_RATE_LIMIT, function () {
	      _updateScreenReaderStatusMessage.bind(_this2)();
	    });
	    this.srLowCharWarnLvl = this.statusMessage.getAttribute('data-sr-low-char-warning-lvl');
	    this.userHasBeenWarned = false;
	    this.ariaLiveWasReset = false; // Add event handlers

	    this.events = [{
	      el: this.target,
	      type: 'input',
	      handler: this.updateStatusMessage.bind(this)
	    }, {
	      el: this.target,
	      type: 'keydown',
	      handler: _narrateIfMaxInputAndPrintableKey.bind(this)
	    }, {
	      el: this.target,
	      type: 'focus',
	      handler: _narrateStatusMessage.bind(this)
	    }];
	    Util.addEvents(this.events); // Initialize visual message

	    _updateVisualStatusMessage.bind(this)(); // push to instances list


	    characterCountInstances.push(this);
	  }
	  /**
	   * Get the length of the current value of the monitored form element
	   * @returns {Number} The length of the value
	   */


	  var _proto = CharacterCount.prototype;

	  _proto.getUserInputLength = function getUserInputLength() {
	    return this.target.value.length;
	  }
	  /**
	   * Determine whether the max input length has been reached
	   * @returns {Boolean} Whether the max input length has been reached
	   */
	  ;

	  _proto.isMaxInputReached = function isMaxInputReached() {
	    return this.getUserInputLength() === this.inputMaxLength;
	  }
	  /**
	   * Determine whether the low character warning level has been met
	   * @returns {Boolean} Whether the low character warning level has been met
	   */
	  ;

	  _proto.isInputAtOrBelowLowCharWarnLvl = function isInputAtOrBelowLowCharWarnLvl() {
	    return this.inputMaxLength - this.getUserInputLength() <= this.srLowCharWarnLvl;
	  }
	  /**
	   * Updates both status messages. The visual one immediatey, the screen reader in a debounced manner.
	   */
	  ;

	  _proto.updateStatusMessage = function updateStatusMessage() {
	    this.debouncedSRUpdate();

	    _updateVisualStatusMessage.bind(this)();

	    if (!this.isMaxInputReached() && this.userHasBeenWarned && !this.ariaLiveWasReset) {
	      this.statusMessageSR.setAttribute('aria-live', 'polite');
	    }

	    if (this.isMaxInputReached() || !this.userHasBeenWarned && this.isInputAtOrBelowLowCharWarnLvl()) {
	      this.debouncedSRUpdate.cancel();
	      this.statusMessageSR.setAttribute('aria-live', 'assertive');

	      _updateScreenReaderStatusMessage.bind(this)();
	    }
	  }
	  /**
	   * Updates the object by re-reading all configuration options stored in the DOM
	   */
	  ;

	  _proto.update = function update() {
	    var _this3 = this;

	    this.target = _getTarget$2.bind(this)();
	    this.inputMaxLength = Number(this.target.getAttribute('maxLength'));
	    this.statusMessageTemplate = this.statusMessage.getAttribute('data-status-msg-template');
	    this.maxMessageTemplate = this.statusMessage.getAttribute('data-max-msg-template');
	    this.debouncedSRUpdate = debounce(UPDATE_RATE_LIMIT, function () {
	      _updateScreenReaderStatusMessage.bind(_this3)();
	    });
	    this.srLowCharWarnLvl = this.statusMessage.getAttribute('data-sr-low-char-warning-lvl');
	    this.userHasBeenWarned = false;
	    this.ariaLiveWasReset = false; // Create and dispatch custom event

	    this[EventName$g.ON_UPDATE] = new CustomEvent(EventName$g.ON_UPDATE, {
	      bubbles: true
	    });
	    this.statusMessage.dispatchEvent(this[EventName$g.ON_UPDATE]);
	  }
	  /**
	   * Removes the CharacterCount instance
	   */
	  ;

	  _proto.remove = function remove() {
	    Util.removeEvents(this.events);
	    var index = characterCountInstances.indexOf(this);
	    characterCountInstances.splice(index, 1); // Create and dispatch custom event

	    this[EventName$g.ON_REMOVE] = new CustomEvent(EventName$g.ON_REMOVE, {
	      bubbles: true
	    });
	    this.statusMessage.dispatchEvent(this[EventName$g.ON_REMOVE]);
	  }
	  /**
	   * Gets the array of CharacterCount instances
	   * @returns {Object[]} Array of CharacterCount instances
	   */
	  ;

	  CharacterCount.getInstances = function getInstances() {
	    return characterCountInstances;
	  };

	  return CharacterCount;
	}();

	var Selector$h = {
	  DATA_MOUNT: '[data-mount="click-group"]'
	};
	var EventName$f = {
	  ON_CLICK: 'onClick',
	  ON_REMOVE: 'onRemove',
	  ON_UPDATE: 'onUpdate'
	};
	var clickGroups = [];
	/**
	 * Private functions.
	 */

	function _getTarget$1() {
	  var selector = this.el.dataset.target;

	  if (selector) {
	    return document.querySelector("#" + selector);
	  }

	  var firstLink = this.el.getElementsByTagName('a')[0];
	  return firstLink ? firstLink : null;
	}

	function _onElClick(e) {
	  if (e.target !== this.target) {
	    this.el.dispatchEvent(this[EventName$f.ON_CLICK]);
	    this.target.click();
	  }
	}
	/**
	 * Class representing a click group.
	 */


	var ClickGroup = /*#__PURE__*/function () {
	  /**
	   * Create the click group.
	   * @param {Object} opts - The click group options.
	   * @param {Node} opts.el - The click group DOM node.
	   * @param {Node} [opts.target] - Node that contains the target of the click group.
	   * @param {Function} [opts.onClick] - Function to override the click group click handler.
	   */
	  function ClickGroup(opts) {
	    this.el = opts.el;
	    this.target = opts.target || _getTarget$1.bind(this)();
	    this.onClick = opts.onClick || _onElClick.bind(this); // Check for multiple links and/or buttons, which would present an a11y problem

	    if (this.el.querySelectorAll('a, button').length > 1) {
	      this.target = null; // TODO: add error message notifying multiple clickable descendants found
	    }

	    if (this.target) {
	      this.el.style.cursor = 'pointer';
	      this.events = [{
	        el: this.el,
	        type: 'click',
	        handler: this.onClick
	      }];
	      Util.addEvents(this.events);
	    } // TODO: add error message in an else block, notifying clickable target not found
	    // Create custom events


	    this[EventName$f.ON_CLICK] = new CustomEvent(EventName$f.ON_CLICK, {
	      bubbles: true,
	      cancelable: true
	    });
	    clickGroups.push(this);
	  }
	  /**
	   * Update the click group.
	   * @param {Object} opts - The click group options.
	   * @param {Function} [opts.onClick] - Function to override the click group click handler.
	   * @param {Node} [opts.target] - Node that contains the target of the click group.
	   */


	  var _proto = ClickGroup.prototype;

	  _proto.update = function update(opts) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    if (opts) {
	      if (opts.onClick) {
	        this.onClick = opts.onClick;
	      }

	      if (opts.target) {
	        this.target = opts.target;
	      }

	      if ((opts.onClick || opts.target) && this.target && this.onClick) {
	        Util.removeEvents(this.events);
	        this.events = [{
	          el: this.el,
	          type: 'click',
	          handler: this.onClick
	        }];
	        Util.addEvents(this.events);
	      }
	    } // Create and dispatch custom event


	    this[EventName$f.ON_UPDATE] = new CustomEvent(EventName$f.ON_UPDATE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$f.ON_UPDATE]);
	  }
	  /**
	   * Remove the click group.
	   */
	  ;

	  _proto.remove = function remove() {
	    if (this.target) {
	      this.el.style.cursor = '';
	      Util.removeEvents(this.events);
	    }

	    var index = clickGroups.indexOf(this);
	    clickGroups.splice(index, 1); // Create and dispatch custom event

	    this[EventName$f.ON_REMOVE] = new CustomEvent(EventName$f.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$f.ON_REMOVE]);
	  }
	  /**
	   * Get an array of click group instances.
	   * @returns {Object[]} Array of click group instances.
	   */
	  ;

	  ClickGroup.getInstances = function getInstances() {
	    return clickGroups;
	  };

	  return ClickGroup;
	}();

	var instances$4 = [];
	var EventName$e = {
	  SHOW: 'onShow',
	  SHOWN: 'onShown',
	  HIDE: 'onHide',
	  HIDDEN: 'onHidden',
	  ON_REMOVE: 'onRemove',
	  ON_UPDATE: 'onUpdate'
	};
	var ClassName$d = {
	  SHOW: 'show',
	  COLLAPSE: 'collapse',
	  COLLAPSING: 'collapsing',
	  COLLAPSED: 'collapsed'
	};
	var Dimension = {
	  WIDTH: 'width',
	  HEIGHT: 'height'
	};
	var Selector$g = {
	  ACTIVES: '.show, .collapsing',
	  DATA_MOUNT: '[data-mount="collapse"]'
	};

	function _getDimension() {
	  var hasWidth = this.el.classList.contains(Dimension.WIDTH);
	  return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
	}

	function _addAriaAndCollapsedClass(element, triggerArray) {
	  var isOpen = element.classList.contains(ClassName$d.SHOW);

	  if (triggerArray.length) {
	    triggerArray.forEach(function (triggerItem) {
	      triggerItem.classList.toggle(ClassName$d.COLLAPSED, !isOpen);
	      triggerItem.setAttribute('aria-expanded', isOpen);
	    });
	  }
	}

	var Collapse = /*#__PURE__*/function () {
	  /**
	   * Create the Collapse
	   * @param {Object} opts - the Collapse options
	   * @param {Node} opts.el - the Collapse trigger element
	   * @param {boolean} [opts.toggle] - whether to toggle the Collapse on initialization
	   * @param {Node} [opts.parent] - the parent (accordion) element for group management
	   * @param {boolean} [opts.addEventListener] - suppress event listeners on Collapse trigger (when false)
	   */
	  function Collapse(opts) {
	    var _this = this;

	    this.isTransitioning = false;
	    this.isCollapsed = true;
	    this.triggerElement = opts.el;

	    if (this.triggerElement.getAttribute('aria-expanded').toString() === 'true') {
	      this.isCollapsed = false;
	    } // Get the affected selectors


	    var element = Util.getSelectorFromElement(this.triggerElement);
	    this.el = document.querySelector(element);
	    this.toggleOnInit = opts.toggle ? opts.toggle : false;
	    this.toggleArray = [].slice.call(document.querySelectorAll(Selector$g.DATA_MOUNT + "[href=\"#" + this.el.id + "\"]," + Selector$g.DATA_MOUNT + "[data-target=\"#" + this.el.id + "\"]")); // Create custom events.

	    this[EventName$e.SHOWN] = new CustomEvent(EventName$e.SHOWN);
	    this[EventName$e.HIDDEN] = new CustomEvent(EventName$e.HIDDEN);
	    var toggleList = [].slice.call(document.querySelectorAll(Selector$g.DATA_MOUNT));
	    toggleList.forEach(function (elem) {
	      var selector = Util.getSelectorFromElement(elem);
	      var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
	        return foundElem === opts.el;
	      });

	      if (selector !== null && filterElement.length > 0) {
	        _this._selector = selector;

	        _this.toggleArray.push(elem);
	      }
	    });
	    this.parent = this.el.getAttribute('data-parent');

	    if (!opts.parent) {
	      _addAriaAndCollapsedClass.bind(this)(this.el, this.toggleArray);
	    }

	    if (this.toggleOnInit) {
	      this.toggle();
	    } // Add event handlers


	    if (opts.addEventListener !== false) {
	      this.events = [{
	        el: opts.el,
	        type: 'click',
	        handler: function handler(event) {
	          // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
	          if (event.currentTarget.tagName === 'A') {
	            event.preventDefault();
	          }

	          _this.toggle();
	        }
	      }];
	      Util.addEvents(this.events);
	    }

	    instances$4.push(this);
	  }
	  /**
	   * Toggles the collapse from show to hide and vice versa
	   */


	  var _proto = Collapse.prototype;

	  _proto.toggle = function toggle() {
	    if (this.el.classList.contains(ClassName$d.SHOW)) {
	      this.hide();
	    } else {
	      this.show();
	    }
	  }
	  /**
	   * Shows the collapse
	   */
	  ;

	  _proto.show = function show() {
	    var _this2 = this;

	    if (this.isTransitioning || this.el.classList.contains(ClassName$d.SHOW)) {
	      return;
	    }

	    this[EventName$e.SHOW] = new CustomEvent(EventName$e.SHOW, {
	      cancelable: true
	    });
	    this.el.dispatchEvent(this[EventName$e.SHOW]);

	    if (this[EventName$e.SHOW].defaultPrevented) {
	      return;
	    }

	    var dimension = _getDimension.bind(this)();

	    this.el.classList.remove(ClassName$d.COLLAPSE);
	    this.el.classList.add(ClassName$d.COLLAPSING);
	    this.el.style[dimension] = 0;

	    if (this.toggleArray.length) {
	      this.toggleArray.forEach(function (elem) {
	        elem.classList.remove(ClassName$d.COLLAPSED);
	        elem.setAttribute('aria-expanded', true);
	      });
	    }

	    this.isTransitioning = true; // If we have a parent (group management), hide the other elements when other is shown

	    if (this.parent) {
	      var collapseInstances = Collapse.getInstances();
	      collapseInstances.forEach(function (collapse) {
	        if (collapse !== _this2 && collapse.parent === _this2.parent && !collapse.isCollapsed) {
	          // Hide the collapse
	          collapse.toggle();
	        }
	      });
	    }

	    var complete = function complete() {
	      _this2.el.classList.remove(ClassName$d.COLLAPSING);

	      _this2.el.classList.add(ClassName$d.COLLAPSE);

	      _this2.el.classList.add(ClassName$d.SHOW);

	      _this2.el.style[dimension] = '';
	      _this2.isTransitioning = false;
	      _this2.isCollapsed = false;

	      _this2.el.dispatchEvent(_this2[EventName$e.SHOWN]);
	    };

	    var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
	    var scrollSize = "scroll" + capitalizedDimension;
	    var transitionDuration = Util.getTransitionDurationFromElement(this.el);
	    this.el.addEventListener(Util.TRANSITION_END, complete.bind(this), {
	      once: true
	    });
	    Util.emulateTransitionEnd(this.el, transitionDuration);
	    this.el.style[dimension] = this.el[scrollSize] + "px";
	  }
	  /**
	   * Hides the collapse
	   */
	  ;

	  _proto.hide = function hide() {
	    var _this3 = this;

	    if (this.isTransitioning || !this.el.classList.contains(ClassName$d.SHOW)) {
	      return;
	    }

	    this[EventName$e.HIDE] = new CustomEvent(EventName$e.HIDE, {
	      cancelable: true
	    });
	    this.el.dispatchEvent(this[EventName$e.HIDE]);

	    if (this[EventName$e.HIDE].defaultPrevented) {
	      return;
	    }

	    var dimension = _getDimension.bind(this)();

	    this.el.style[dimension] = this.el.getBoundingClientRect()[dimension] + "px";
	    Util.reflow(this.el);
	    this.el.classList.add(ClassName$d.COLLAPSING);
	    this.el.classList.remove(ClassName$d.COLLAPSE);
	    this.el.classList.remove(ClassName$d.SHOW);
	    this.toggleArray.forEach(function (toggle) {
	      var toggleSelector = Util.getSelectorFromElement(toggle);

	      if (toggleSelector !== null) {
	        var toggleArray = [].slice.call(document.querySelectorAll(toggleSelector));
	        toggleArray.forEach(function (el) {
	          if (!el.classList.contains(ClassName$d.SHOW)) {
	            toggle.classList.add(ClassName$d.COLLAPSED);
	            toggle.setAttribute('aria-expanded', false);
	          }
	        });
	      }
	    });
	    this.isTransitioning = true;

	    var complete = function complete() {
	      _this3.isTransitioning = false;

	      _this3.el.classList.remove(ClassName$d.COLLAPSING);

	      _this3.el.classList.add(ClassName$d.COLLAPSE);

	      _this3.isCollapsed = true;

	      _this3.el.dispatchEvent(_this3[EventName$e.HIDDEN]);
	    };

	    this.el.style[dimension] = '';
	    var transitionDuration = Util.getTransitionDurationFromElement(this.el);
	    this.el.addEventListener(Util.TRANSITION_END, complete.bind(this), {
	      once: true
	    });
	    Util.emulateTransitionEnd(this.el, transitionDuration);
	  }
	  /**
	   * Update instance
	   */
	  ;

	  _proto.update = function update() {
	    // TODO: Add ability to pass in an event handler function as an option to override the default behavior.
	    this[EventName$e.ON_UPDATE] = new CustomEvent(EventName$e.ON_UPDATE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$e.ON_UPDATE]);
	  }
	  /**
	   * Remove the event listener and the instance
	   */
	  ;

	  _proto.remove = function remove() {
	    Util.removeEvents(this.events); // remove this collapse reference from array of instances

	    var index = instances$4.indexOf(this);
	    instances$4.splice(index, 1);
	    this[EventName$e.ON_REMOVE] = new CustomEvent(EventName$e.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$e.ON_REMOVE]);
	  }
	  /**
	   * Get instances.
	   * @returns {Object[]} An array of instances
	   */
	  ;

	  Collapse.getInstances = function getInstances() {
	    return instances$4;
	  };

	  return Collapse;
	}();

	var $$4 = _export;
	var $find = arrayIteration.find;
	var addToUnscopables = addToUnscopables$3;

	var FIND = 'find';
	var SKIPS_HOLES = true;

	// Shouldn't skip holes
	if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

	// `Array.prototype.find` method
	// https://tc39.es/ecma262/#sec-array.prototype.find
	$$4({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables(FIND);

	var instances$3 = [];
	var Selector$f = {
	  DATA_MOUNT: '[data-mount="collapse-controls"]',
	  DATA_ACTION_COLLAPSE: '[data-action="collapse"]',
	  DATA_ACTION_EXPAND: '[data-action="expand"]'
	};

	function _getTarget(el) {
	  var selector = Util.getSelectorFromElement(el);
	  return [].slice.call(document.querySelectorAll(selector));
	}

	function _syncDisabledStyle() {
	  var openCount = 0;
	  this.collapseList.forEach(function (collapse) {
	    if (!collapse.isCollapsed) {
	      openCount++;
	    }
	  });

	  if (openCount === this.collapseListCount) {
	    _enableButton(this.collapse);

	    _disableButton(this.expand);
	  } else if (openCount === 0) {
	    _enableButton(this.expand);

	    _disableButton(this.collapse);
	  } else {
	    _enableButton(this.expand);

	    _enableButton(this.collapse);
	  }
	}

	function _disableButton(elem) {
	  elem.setAttribute('aria-pressed', true);
	  elem.setAttribute('aria-disabled', true);
	  elem.classList.add('inactive');
	}

	function _enableButton(elem) {
	  elem.setAttribute('aria-pressed', false);
	  elem.setAttribute('aria-disabled', false);
	  elem.classList.remove('inactive');
	}

	var CollapseControls = /*#__PURE__*/function () {
	  /**
	   * Create the CollapseControls
	   * @param {Object} opts - The CollapseControls options
	   * @param {Node} opts.el - The CollapseControls DOM node.
	   */
	  function CollapseControls(opts) {
	    var _this = this;

	    this.el = opts.el;
	    this.accordion = _getTarget(this.el)[0];
	    this.collapse = this.el.querySelector(Selector$f.DATA_ACTION_COLLAPSE);
	    this.expand = this.el.querySelector(Selector$f.DATA_ACTION_EXPAND);
	    this.collapseBtnList = this.accordion.querySelectorAll(Selector$g.DATA_MOUNT);
	    this.collapseList = []; // Get the collapse instances and find the corresponding elements

	    var collapseInstances = Collapse.getInstances();
	    this.collapseBtnList.forEach(function (el) {
	      _this.collapseList.push(collapseInstances.find(function (collapse) {
	        return collapse.triggerElement === el;
	      }));
	    });
	    this.collapseListCount = this.collapseBtnList.length;
	    this.openCount = 0;
	    this.events = [{
	      el: this.collapse,
	      type: 'click',
	      handler: this.collapseAll.bind(this)
	    }, {
	      el: this.expand,
	      type: 'click',
	      handler: this.expandAll.bind(this)
	    }];
	    this.collapseList.forEach(function (collapse) {
	      // Add shown/hidden handlers to each Collapse
	      _this.events.push({
	        el: collapse.el,
	        type: EventName$e.SHOWN,
	        handler: _syncDisabledStyle.bind(_this)
	      }, {
	        el: collapse.el,
	        type: EventName$e.HIDDEN,
	        handler: _syncDisabledStyle.bind(_this)
	      });
	    });
	    Util.addEvents(this.events);

	    _syncDisabledStyle.call(this);

	    instances$3.push(this);
	  }
	  /**
	   * Collapse all the elements
	   */


	  var _proto = CollapseControls.prototype;

	  _proto.collapseAll = function collapseAll() {
	    this.collapseList.forEach(function (element) {
	      element.hide();
	    });
	    this.openCount = 0;

	    _syncDisabledStyle.call(this);
	  }
	  /**
	   * Update instance (added for API consistency)
	   */
	  ;

	  _proto.update = function update() {
	    // Create and dispatch custom event
	    this[EventName$e.ON_UPDATE] = new CustomEvent(EventName$e.ON_UPDATE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$e.ON_UPDATE]);
	  }
	  /**
	   * Expand all the elements
	   */
	  ;

	  _proto.expandAll = function expandAll() {
	    var _this2 = this;

	    this.collapseList.forEach(function (element) {
	      element.show();
	      _this2.openCount = _this2.collapseListCount;
	    });

	    _syncDisabledStyle.call(this);
	  }
	  /**
	   * Remove the event listeners and the instance
	   */
	  ;

	  _proto.remove = function remove() {
	    Util.removeEvents(this.events); // Remove this collapse reference from array of instances

	    var index = instances$3.indexOf(this);
	    instances$3.splice(index, 1); // Create and dispatch custom event

	    this[EventName$e.ON_REMOVE] = new CustomEvent(EventName$e.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$e.ON_REMOVE]);
	  }
	  /**
	   * Get instances.
	   * @returns {CollapseControls[]} An array of instances
	   */
	  ;

	  CollapseControls.getInstances = function getInstances() {
	    return instances$3;
	  };

	  return CollapseControls;
	}();

	var controlElements = []; // YIQ Threshold for color changes

	var yiqContrastedThreshold = 128;
	var EventName$d = {
	  ON_CHANGE: 'onChange',
	  ON_REMOVE: 'onRemove',
	  CHANGE: 'change'
	};
	var Selector$e = {
	  COLOR_PICKER_DOT: '.color-picker-dot'
	};
	var Attributes$1 = {
	  DATA_CONTROLS: 'data-controls',
	  IMAGE: 'data-color-picker-image',
	  ID: 'id',
	  SRC: 'src'
	};
	var ClassName$c = {
	  COLOR_LIGHT: 'color-picker-dot-light'
	};
	/**
	 * Perform the calculations to figure out color of elements
	 */

	function _initializeColor() {
	  var id = this.el.getAttribute(Attributes$1.ID);
	  var label = this.el.parentNode.querySelector("label[for=\"" + id + "\"]");
	  var backgroundColor = label.querySelector(Selector$e.COLOR_PICKER_DOT).style.backgroundColor;
	  var rgbObject = Util.getRGB(backgroundColor);
	  var darkColor = {
	    r: 0,
	    g: 0,
	    b: 0
	  };
	  var darkYiq = Util.getYiq(darkColor);
	  var bgYiq = Util.getYiq(rgbObject);

	  if (Math.floor(Math.abs(bgYiq - darkYiq) > yiqContrastedThreshold)) {
	    label.classList.add(ClassName$c.COLOR_LIGHT);
	  }
	}

	var ColorPickerControl = /*#__PURE__*/function () {
	  function ColorPickerControl(opts) {
	    var _this = this;

	    this.el = opts.el;
	    this.containerTarget = opts.containerTarget;

	    _initializeColor.bind(this)();

	    this.events = [{
	      el: this.el,
	      type: EventName$d.CHANGE,
	      handler: function handler(e) {
	        return _this._controlListener(e, _this.containerTarget);
	      }
	    }];
	    Util.addEvents(this.events);
	    controlElements.push(this);
	  }
	  /**
	   * Event handler for change events
	   * @param {event} e Event
	   * @param {string} imageContainer a reference to the image container
	   */


	  var _proto = ColorPickerControl.prototype;

	  _proto._controlListener = function _controlListener(e, imageContainer) {
	    if (imageContainer) {
	      var nodeName = imageContainer.nodeName.toLowerCase();
	      var imageUrl = e.target.getAttribute(Attributes$1.IMAGE);
	      var event = new CustomEvent(EventName$d.ON_CHANGE, {
	        element: imageContainer.getAttribute(Attributes$1.ID),
	        imageUrl: imageUrl
	      });

	      if (imageUrl) {
	        // Figure out whether it's an image element or not
	        if (nodeName === 'img') {
	          imageContainer.setAttribute(Attributes$1.SRC, imageUrl);
	        } else {
	          imageContainer.style.backgroundImage = "url(" + imageUrl + ")";
	        }

	        imageContainer.dispatchEvent(event);
	      }
	    }
	  }
	  /**
	   * Get an array of color picker control instances
	   * @returns {ColorPickerControl[]} color picker control instances
	   */
	  ;

	  ColorPickerControl.getInstances = function getInstances() {
	    return controlElements;
	  }
	  /**
	   * Remove the color picker control instance
	   */
	  ;

	  _proto.remove = function remove() {
	    Util.removeEvents(this.events);
	    var index = controlElements.indexOf(this);
	    controlElements.splice(index, 1); // Create and dispatch custom event

	    this[EventName$d.ON_REMOVE] = new CustomEvent(EventName$d.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$d.ON_REMOVE]);
	  };

	  return ColorPickerControl;
	}();

	var Selector$d = {
	  CONTROL: 'input',
	  DATA_MOUNT: '[data-mount="color-picker"]',
	  CHECKED: ':checked'
	};
	var Attributes = {
	  DATA_CONTROLS: 'data-controls',
	  IMAGE: 'data-color-picker-image'
	};
	var colorPickers = [];

	function _initializeImageSrc() {
	  // Find all the fieldsets that have a target
	  var currentFieldSet = this.el;
	  var nodeName = this.containerTarget ? this.containerTarget.nodeName.toLowerCase() : null;
	  var defaultElement = currentFieldSet.querySelector(Selector$d.CHECKED); // Set the default selected image

	  if (defaultElement) {
	    var imageUrl = defaultElement.getAttribute(Attributes.IMAGE);

	    if (imageUrl && nodeName) {
	      if (nodeName === 'img') {
	        this.containerTarget.setAttribute('src', imageUrl);
	      } else {
	        this.containerTarget.style.backgroundImage = "url(" + imageUrl + ")";
	      }
	    }
	  }
	}
	/**
	 * Initializes an instance, helper for constructor and update function
	 * @param {Object} opts the ColorPicker init options
	 * @returns {Object} the initialized or update instance of ColorPicker
	 */


	function _initInstance(opts) {
	  var _this = this;

	  // TODO remove old "opts.target" API
	  this.el = opts && opts.el || opts && opts.target || this.el;

	  if (opts && opts.target) {
	    console.warn('Warning: the ColorPicker "target" option is deprecated and will be removed in favor of "el" in a future version');
	  }

	  if (!this.el) {
	    // abort init if no valid base element
	    return this;
	  }

	  var controlElement = this.el.getAttribute(Attributes.DATA_CONTROLS);

	  if (controlElement) {
	    this.containerTarget = document.querySelector("#" + controlElement);

	    _initializeImageSrc.call(this);
	  }

	  this.controls = [];
	  var controls = this.el.querySelectorAll(Selector$d.CONTROL); // Iterate through our controls, adding an event listener to change the image

	  controls.forEach(function (control) {
	    _this.controls.push(new ColorPickerControl({
	      el: control,
	      containerTarget: _this.containerTarget
	    }));
	  });
	  return this;
	}
	/**
	 * Class for ColorPicker overall. Spawns instances of ColorPickerControl for each color
	 */


	var ColorPicker = /*#__PURE__*/function () {
	  /**
	   * Construct instance of ColorPicker
	   * @param {Object} opts - The ColorPicker options.
	   * @param {Node} opts.el - The ColorPicker DOM node.
	   */
	  function ColorPicker(opts) {
	    // initialize the instance and push it to the master list
	    colorPickers.push(_initInstance.call(this, opts));
	  }
	  /**
	   * Get an array of color picker instances
	   * @returns {ColorPicker[]} color picker instances
	   */


	  ColorPicker.getInstances = function getInstances() {
	    return colorPickers;
	  }
	  /**
	   * Re-initializes the instance
	   * @param {Object} opts - The ColorPicker options.
	   * @param {Node} [opts.el] - The ColorPicker DOM node.
	   */
	  ;

	  var _proto = ColorPicker.prototype;

	  _proto.update = function update(opts) {
	    Util.tearDownComponentList(this.controls);

	    _initInstance.call(this, opts);
	  }
	  /**
	   * Remove the color picker instance
	   */
	  ;

	  _proto.remove = function remove() {
	    // Call remove on each of the ColorPickerControls
	    Util.tearDownComponentList(this.controls);
	    var index = colorPickers.indexOf(this);
	    colorPickers.splice(index, 1);
	  };

	  return ColorPicker;
	}();

	var Selector$c = {
	  DATA_MOUNT: '[data-mount="content-swap"]'
	};
	var EventName$c = {
	  ON_SWAP: 'onSwap',
	  ON_HIDE: 'onHide',
	  ON_SHOW: 'onShow',
	  ON_UPDATE: 'onUpdate',
	  ON_REMOVE: 'onRemove'
	};
	var contentSwapInstances = [];

	function _getTargetList() {
	  // Reads selector from data-target attribute
	  var selector = Util.getSelectorFromElement(this.swapTrigger);
	  return [].slice.call(document.querySelectorAll(selector));
	}

	var ContentSwap = /*#__PURE__*/function () {
	  function ContentSwap(opts) {
	    this.swapTrigger = opts.el || opts.swapTrigger;

	    if (opts.swapTrigger) {
	      console.warn('Warning: the ContentSwap "swapTrigger" option is deprecated and will be removed in favor of "el" in a future version');
	    }

	    this.targetList = _getTargetList.bind(this)(); // Add event handlers

	    this.events = [{
	      el: this.swapTrigger,
	      type: 'click',
	      handler: this.swapContent.bind(this)
	    }];
	    Util.addEvents(this.events); // Create custom events.

	    this[EventName$c.ON_SWAP] = new CustomEvent(EventName$c.ON_SWAP, {
	      bubbles: true,
	      cancelable: true
	    });
	    this[EventName$c.ON_HIDE] = new CustomEvent(EventName$c.ON_HIDE, {
	      bubbles: true,
	      cancelable: true
	    });
	    this[EventName$c.ON_SHOW] = new CustomEvent(EventName$c.ON_SHOW, {
	      bubbles: true,
	      cancelable: true
	    }); // push to instances list

	    contentSwapInstances.push(this);
	  }

	  var _proto = ContentSwap.prototype;

	  _proto.update = function update() {
	    this.targetList = _getTargetList.bind(this)(); // Create and dispatch custom event

	    this[EventName$c.ON_UPDATE] = new CustomEvent(EventName$c.ON_UPDATE, {
	      bubbles: true
	    });
	    this.swapTrigger.dispatchEvent(this[EventName$c.ON_UPDATE]);
	  };

	  _proto.remove = function remove() {
	    Util.removeEvents(this.events);
	    var index = contentSwapInstances.indexOf(this);
	    contentSwapInstances.splice(index, 1); // Create and dispatch custom event

	    this[EventName$c.ON_REMOVE] = new CustomEvent(EventName$c.ON_REMOVE, {
	      bubbles: true
	    });
	    this.swapTrigger.dispatchEvent(this[EventName$c.ON_REMOVE]);
	  };

	  _proto.hide = function hide(element) {
	    element.setAttribute('hidden', '');
	    element.dispatchEvent(this[EventName$c.ON_HIDE]);
	  };

	  _proto.show = function show(element) {
	    element.removeAttribute('hidden');
	    element.dispatchEvent(this[EventName$c.ON_SHOW]);
	  };

	  _proto.swapContent = function swapContent() {
	    var _this = this;

	    this.swapTrigger.dispatchEvent(this[EventName$c.ON_SWAP]);
	    this.targetList.forEach(function (element) {
	      if (element.hasAttribute('hidden')) {
	        // unhides the hidden
	        _this.show(element);
	      } else {
	        // hides the unhidden
	        _this.hide(element);
	      }
	    });
	  };

	  ContentSwap.getInstances = function getInstances() {
	    return contentSwapInstances;
	  };

	  return ContentSwap;
	}();

	var biDirectional = Util.isBiDirectional();
	var ClassName$b = {
	  SHOW: 'show',
	  FADE: 'fade',
	  FADING_OUT: 'fading-out',
	  ACTIVE: 'active',
	  FLYOUT: 'flyout'
	};
	var Default$3 = {
	  START: biDirectional ? 'right' : 'left',
	  END: biDirectional ? 'left' : 'right',
	  ALIGNMENT: 'start'
	};
	var DefaultReflow = {
	  left: ['left', 'bottom', 'top', 'right'],
	  right: ['right', 'bottom', 'top', 'left'],
	  top: ['top', 'right', 'bottom', 'left'],
	  bottom: ['bottom', 'right', 'top', 'left']
	};
	/**
	 * Private functions
	 */

	function _hasReflow(node) {
	  if (node.hasAttribute('data-disable-reflow') && node.getAttribute('data-disable-reflow') !== 'false') {
	    return false;
	  }

	  return true;
	}
	/**
	 * Get the placement of a flyout.
	 * @param {string} string - The string to parse.
	 * @param {string} [defaultValue=start] - The default value to fallback to.
	 * @returns {string} The placement of the flyout.
	 */


	function _getPlacement(str, defaultValue) {
	  if (defaultValue === void 0) {
	    defaultValue = Default$3.END;
	  }

	  switch (str) {
	    case 'top':
	    case 'bottom':
	      return str;

	    case 'left':
	    case 'start':
	      return Default$3.START;

	    case 'right':
	    case 'end':
	      return Default$3.END;

	    default:
	      return defaultValue;
	  }
	}
	/**
	 * Get the alignment of a flyout.
	 * @param {string} str - The string to parse.
	 * @param {string} [defaultValue=start] - The default value to fallback to.
	 * @returns {string} The alignment enum of the flyout.
	 */

	function _getAlignment(str, defaultValue) {
	  if (defaultValue === void 0) {
	    defaultValue = Default$3.ALIGNMENT;
	  }

	  switch (str) {
	    case 'center':
	    case 'start':
	    case 'end':
	      return str;

	    default:
	      return defaultValue;
	  }
	}
	/**
	 * Get the related menu for an element.
	 * @param {Node} node - The element to find a related menu for, typically the flyout instance target.
	 * @returns {Node} The menu element.
	 */

	function _getRelatedMenu(node) {
	  if (node.attributes['aria-controls']) {
	    return document.querySelector("#" + node.attributes['aria-controls'].value);
	  }
	}
	/**
	* Get the X distance for menu positioning.
	* @param {string} textAlignment - The text alignment of the flyout's parent. Affects the left/right CSS positioning, therefore changes the translate coordinates.
	* @param {string} placement - Menu's placement in relation to the flyout trigger: 'left', 'right', 'top', or 'bottom'.
	* @param {string} alignment - Menu's alignment with the flyout trigger, correlates to read order: 'center', 'start', 'end'.
	* @param {object} boundingRect - An object containing the getBoundingClientRect() objects for the trigger and the menu.
	* @returns {number} The X distance to translate the menu.
	*/


	function _getTranslateX(textAlignment, placement, alignment) {
	  var translateX = 0;
	  var overflowOffset = 0;
	  /* eslint-disable no-lonely-if */
	  // If text is aligned left

	  if (textAlignment === 'left') {
	    if (placement === 'right') {
	      // Place menu right of trigger
	      translateX += this.boundingRect.el.width + this.offset;
	    } else if (placement === 'left') {
	      // Place menu left of trigger
	      translateX -= this.boundingRect.menu.width + this.offset;
	    } else {
	      // Adjust alignment for top and bottom menus
	      if (alignment === 'center') {
	        translateX -= (this.boundingRect.menu.width - this.boundingRect.el.width) / 2;
	      } else if (alignment === 'end' && !biDirectional || alignment === 'start' && biDirectional) {
	        translateX -= this.boundingRect.menu.width - this.boundingRect.el.width; // Shift menu left if needed to fit menu in tiny window sizes, record offset for future use

	        overflowOffset = _shiftLeftToFitWindow.call(this, translateX);
	        translateX += overflowOffset;
	      } else {
	        // Shift menu right if needed to fit menu in tiny window sizes, record offset for future use
	        overflowOffset = _shiftRightToFitWindow.call(this, translateX);
	        translateX += overflowOffset;
	      }
	    } // If text is aligned right

	  } else {
	    if (placement === 'right') {
	      translateX += this.boundingRect.menu.width + this.offset;
	    } else if (placement === 'left') {
	      translateX -= this.boundingRect.el.width + this.offset;
	    } else {
	      if (alignment === 'center') {
	        translateX += (this.boundingRect.menu.width - this.boundingRect.el.width) / 2;
	      } else if (alignment === 'start' && !biDirectional || alignment === 'end' && biDirectional) {
	        translateX += this.boundingRect.menu.width - this.boundingRect.el.width; // Shift menu right if needed to fit menu in tiny window sizes, record offset for future use

	        overflowOffset = _shiftRightToFitWindow.call(this, translateX);
	        translateX += overflowOffset;
	      } else {
	        // Shift menu left if needed to fit menu in tiny window sizes, record offset for future use
	        overflowOffset = _shiftLeftToFitWindow.call(this, translateX);
	        translateX += overflowOffset;
	      }
	    }
	  }
	  /* eslint-enable no-lonely-if */
	  // Save any overflowOffset (rounded) to the instance for later use


	  this.overflowOffset = Math.round(overflowOffset);
	  return translateX;
	}
	/**
	* Returns distance in pixels needed to prevent overflow on the right side of the window.
	* @returns {number} The distance in pixels to shift the menu left.
	*/


	function _shiftLeftToFitWindow() {
	  var xOverflow = this.boundingRect.window.width - (this.boundingRect.el.x + this.boundingRect.el.width) + this.boundingRect.menu.width;
	  return xOverflow > this.boundingRect.window.width ? xOverflow - this.boundingRect.window.width : 0;
	}
	/**
	* Returns distance in pixels needed to prevent overflow on the left side of the window.
	* @returns {number} The distance in pixels to shift the menu right.
	*/


	function _shiftRightToFitWindow() {
	  var xOverflow = this.boundingRect.el.x + this.boundingRect.menu.width;
	  return xOverflow > this.boundingRect.window.width ? -(xOverflow - this.boundingRect.window.width) : 0;
	}
	/**
	 * Get the Y distance for menu positioning.
	 * @param {string} placement - Menu's placement in relation to the flyout trigger: 'left', 'right', 'top', or 'bottom'.
	 * @param {string} alignment - Menu's alignment with the flyout trigger, correlates to read order: 'center', 'start', 'end'.
	 * @param {object} boundingRect - An object containing the getBoundingClientRect() objects for the trigger and the menu.
	 * @returns {number} The Y distance to translate the menu.
	 */


	function _getTranslateY(placement, alignment) {
	  var translateY = 0; // Place menu above trigger

	  if (placement === 'top') {
	    translateY -= this.boundingRect.menu.height + this.offset; // Place menu below trigger
	  } else if (placement === 'bottom') {
	    translateY += this.boundingRect.el.height + this.offset;
	  } else {
	    // Adjust alignment for left and right menus

	    /* eslint-disable no-lonely-if */
	    if (alignment === 'center') {
	      translateY -= (this.boundingRect.menu.height - this.boundingRect.el.height) / 2;
	    } else if (alignment === 'end') {
	      translateY -= this.boundingRect.menu.height - this.boundingRect.el.height;
	    }
	    /* eslint-enable no-lonely-if */

	  }

	  return translateY;
	}

	var Flyout = /*#__PURE__*/function () {
	  /**
	   * Create a flyout
	   * @param {Object} opts - The flyout options
	   * @param {Node} opts.el - The element that toggles the flyout
	   * @param {Node} [opts.menu] - The element that defines the flyout menu
	   * @param {string} [opts.placement=right] - A string that defines the placement of the menu
	   * @param {string} [opts.alignment=start] - A string that defines the alignment of the menu
	   * @param {number} [opts.offset=0] - The number of pixels the menu should be offset from the trigger
	   * @param {boolean} [opts.enableReflow=true] - Whether the menu should reflow to fit within the window as best as possible
	   * @param {boolean} [opts.enableFade=true] - Whether the menu should fade in and out
	   */
	  function Flyout(opts) {
	    this.el = opts.el; // the toggle

	    this.menu = opts.menu || _getRelatedMenu(this.el); // the flyout menu

	    this.parent = this.el.offsetParent || this.el.parentElement;
	    this.placement = _getPlacement(opts.placement || this.el.getAttribute('data-placement'));
	    this.alignment = _getAlignment(opts.alignment || this.el.getAttribute('data-alignment'));
	    this.offset = opts.offset ? parseInt(opts.offset, 10) : 0;
	    this.translateX = 0;
	    this.translateY = 0;
	    this.overflowOffset = 0;
	    this.enableReflow = typeof opts.enableReflow === 'boolean' ? opts.enableReflow : _hasReflow(this.el);
	    this.enableFade = typeof opts.enableFade === 'boolean' ? opts.enableFade : this.menu.classList.contains(ClassName$b.FADE);
	    this.shown = false; // Ensure position is set on parent element, needed for absolute positioning of menu

	    var parentPositionProperty = window.getComputedStyle(this.parent).position;

	    if (parentPositionProperty !== 'relative' && parentPositionProperty !== 'absolute') {
	      this.parent.style.position = 'relative';
	    } // Setup fade animation based on options supplied


	    if (opts.enableFade === true) {
	      this.menu.classList.add(ClassName$b.FADE);
	    } else if (opts.enableFade === false) {
	      this.menu.classList.remove(ClassName$b.FADE);
	    }
	  }
	  /**
	   * Get the current position of the menu based on enableReflow setting
	   * @returns {object} The instance's position object
	   */


	  var _proto = Flyout.prototype;

	  /**
	   * Calculates and sets the reflow position value (placement and alignment)
	   */
	  _proto.calcReflowPosition = function calcReflowPosition() {
	    // Calculate the distance of the trigger from each side of the window
	    var distFrom = {
	      top: this.boundingRect.el.top,
	      bottom: window.innerHeight - this.boundingRect.el.bottom,
	      left: this.boundingRect.el.left,
	      right: document.body.clientWidth - this.boundingRect.el.right
	    }; // Add the menu offset spacing to the width and height of the menu

	    var menuWidth = this.boundingRect.menu.width + this.offset;
	    var menuHeight = this.boundingRect.menu.height + this.offset;
	    var placements = DefaultReflow[this.placement].slice(); // Calculate the distance needed for the menu to fit inside the window

	    var distX = menuWidth - this.boundingRect.el.width;
	    var distY = menuHeight - this.boundingRect.el.height;

	    if (this.alignment === 'center') {
	      distX /= 2;
	      distY /= 2;
	    } // Copy values so we don't override original instance property


	    var placement = this.placement,
	        alignment = this.alignment; // Eliminate the placements that won't fit

	    if (distFrom.left < menuWidth) {
	      placements.splice(placements.indexOf('left'), 1);
	    }

	    if (distFrom.right < menuWidth) {
	      placements.splice(placements.indexOf('right'), 1);
	    }

	    if (distFrom.top < menuHeight) {
	      placements.splice(placements.indexOf('top'), 1);
	    }

	    if (distFrom.bottom < menuHeight) {
	      placements.splice(placements.indexOf('bottom'), 1);
	    }

	    placement = placements.length ? placements.shift() : 'bottom'; // fallback placement is always bottom
	    // Adjust the alignment of the chosen placement
	    // NOTE: Keep this logic as is for readability and sanity

	    if (placement === 'bottom' || placement === 'top') {
	      // If neither side is ideal
	      if (distFrom.left < distX && distFrom.right < distX) {
	        // Align to the Read order
	        alignment = 'start'; // LTR: If distFrom.left < distX
	      } else if (distFrom[Default$3.START] < distX) {
	        alignment = 'start';
	      } else if (distFrom[Default$3.END] <= distX) {
	        alignment = 'end';
	      }
	    } else {
	      // If placement is 'left' or 'right'
	      // If neither above nor below is ideal

	      /* eslint-disable no-lonely-if */
	      if (distFrom.top < distY && distFrom.bottom < distY) {
	        // Force the beginning of the menu content to be in view,
	        // which should force window to grow, enabling user to scroll to view entire menu
	        alignment = 'start';
	      } else if (distFrom.top < distY) {
	        alignment = 'start';
	      } else if (distFrom.bottom <= distY) {
	        alignment = 'end';
	      }
	      /* eslint-enable no-lonely-if */

	    }

	    this.reflowPosition = {
	      placement: placement,
	      alignment: alignment
	    };
	  }
	  /**
	   * Position the flyout menu
	   */
	  ;

	  _proto.positionMenu = function positionMenu() {
	    if (this.enableReflow) {
	      this.calcReflowPosition();
	    }

	    var position = this.currentPosition; // TODO - make this more robust to check box alignment (Grid/Flex) as well as inline alignment (text-align)
	    // Get the direction of text flow (affected by cascade of text-align css property and/or RTL)

	    var textAlignProperty = window.getComputedStyle(this.parent).textAlign;
	    var textAlignment = Default$3.START;

	    if (textAlignProperty === 'left' || textAlignProperty === 'right') {
	      textAlignment = textAlignProperty;
	    } else if (textAlignProperty === 'end') {
	      textAlignment = Default$3.END;
	    } // Set the transformation's "origin" based on text alignment


	    this.menu.style.top = Math.round(this.boundingRect.el.top - this.boundingRect.parent.top) + 'px';

	    if (textAlignment === 'left') {
	      this.menu.style.left = Math.round(this.boundingRect.el.left - this.boundingRect.parent.left) + 'px';
	      this.menu.style.right = 'auto';
	    } else {
	      this.menu.style.left = 'auto';
	      this.menu.style.right = -Math.round(this.boundingRect.el.right - this.boundingRect.parent.right) + 'px';
	    } // Allow the menu to define its own width according to the needed width of its contents


	    this.menu.style.minWidth = Math.round(this.boundingRect.menu.width) + 'px'; // Calculate the x and y distances needed to push the menu to the correct position.

	    this.translateX = Math.round(_getTranslateX.call(this, textAlignment, position.placement, position.alignment));
	    this.translateY = Math.round(_getTranslateY.call(this, position.placement, position.alignment)); // Set the transform style

	    this.menu.style.transform = "translate(" + this.translateX + "px, " + this.translateY + "px)"; // Reset menu classes associated with position

	    this.menu.classList.remove(ClassName$b.FLYOUT + "-left", ClassName$b.FLYOUT + "-right", ClassName$b.FLYOUT + "-top", ClassName$b.FLYOUT + "-bottom", ClassName$b.FLYOUT + "-align-start", ClassName$b.FLYOUT + "-align-end", ClassName$b.FLYOUT + "-align-center"); // Set the menu classes associated with position

	    this.menu.classList.add(ClassName$b.FLYOUT + "-" + position.placement, ClassName$b.FLYOUT + "-align-" + position.alignment);
	  }
	  /**
	   * Show the menu
	   */
	  ;

	  _proto.show = function show() {
	    // Record window width prior to showing the menu,
	    // otherwise the menu will effect the window width
	    var windowWidth = window.innerWidth;
	    this.shown = true;
	    this.el.classList.add(ClassName$b.ACTIVE);
	    this.menu.classList.add(ClassName$b.SHOW); // Store the coordinates of the associated elements for ease of reuse now that the menu has layout

	    this.boundingRect = {
	      el: this.el.getBoundingClientRect(),
	      menu: this.menu.getBoundingClientRect(),
	      parent: this.parent.getBoundingClientRect(),
	      window: {
	        width: windowWidth
	      }
	    };
	    this.positionMenu();
	  }
	  /**
	   * Hide the menu
	   * @param {string} [opts={}] - Options for hiding the menu
	   * @param {boolean} [opts.setFocus=true] - Whether or not the focus should be set on the toggling element; defaults to true
	   */
	  ;

	  _proto.hide = function hide(opts) {
	    var _this = this;

	    if (opts === void 0) {
	      opts = {};
	    }

	    // Default behavior should be to set focus on toggling element
	    var setFocus = typeof opts.setFocus === 'boolean' ? opts.setFocus : true;
	    this.shown = false;
	    this.el.classList.remove(ClassName$b.ACTIVE);
	    this.menu.classList.remove(ClassName$b.SHOW); // 1. Add a class that triggers a CSS animation
	    // 2. Create an event listener that removes the class once it's animation is complete

	    if (this.enableFade) {
	      this.menu.addEventListener('animationend', function () {
	        _this.menu.classList.remove(ClassName$b.FADING_OUT);
	      }, {
	        once: true
	      }); // 2.

	      this.menu.classList.add(ClassName$b.FADING_OUT); // 1.
	    }

	    if (setFocus) {
	      // Set focus on the toggle
	      this.el.focus();
	    }
	  }
	  /**
	   * Toggle the menu state
	   */
	  ;

	  _proto.toggle = function toggle() {
	    if (this.shown) {
	      this.hide();
	    } else {
	      this.show();
	    }
	  }
	  /**
	   * Update the flyout instance
	   * @param {string} [opts={}] - Options for updating the flyout instance
	   */
	  ;

	  _proto.update = function update(opts) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    // Change the placement of the menu
	    if (opts.placement) {
	      this.placement = _getPlacement(opts.placement);
	    } // Change the alignment of the menu


	    if (opts.alignment) {
	      this.alignment = _getAlignment(opts.alignment);
	    } // Change the offset of the menu


	    if (typeof opts.offset !== 'undefined') {
	      var offset = parseInt(opts.offset, 10);

	      if (!isNaN(offset)) {
	        this.offset = offset;
	      }
	    } // Change whether the menu should reflow


	    if (typeof opts.enableReflow === 'boolean') {
	      this.enableReflow = opts.enableReflow;
	    } // Change whether the menu should enable a fade animation


	    if (typeof opts.enableFade === 'boolean' && opts.enableFade !== this.enableFade) {
	      this.enableFade = opts.enableFade;
	      this.menu.classList.toggle(ClassName$b.FADE);
	    } // Update the menu position if its open


	    if (this.shown) {
	      this.positionMenu();
	    }
	  };

	  _createClass(Flyout, [{
	    key: "currentPosition",
	    get: function get() {
	      var position = {
	        placement: this.placement,
	        alignment: this.alignment
	      };

	      if (this.enableReflow) {
	        return this.reflowPosition || position; // fallback to original position, if undefined
	      }

	      return position;
	    }
	  }]);

	  return Flyout;
	}();

	var Selector$b = {
	  DATA_MOUNT: '[data-mount="dropdown"]',
	  MENU: '.dropdown-menu'
	};
	var EventName$b = {
	  ON_HIDE: 'onHide',
	  ON_SHOW: 'onShow',
	  ON_UPDATE: 'onUpdate',
	  ON_REMOVE: 'onRemove'
	};
	var ClassName$a = {
	  SHOW: 'show',
	  ACTIVE: 'active',
	  BOTTOM: 'dropdown',
	  TOP: 'dropup',
	  RIGHT: 'dropright',
	  LEFT: 'dropleft',
	  MENU_RIGHT: 'dropdown-menu-right',
	  MENU_LEFT: 'dropdown-menu-left'
	};
	var Default$2 = Object.assign({}, Default$3, {
	  PLACEMENT: 'bottom'
	});
	var dropdowns = [];
	/**
	 * The event handler for when the target element is clicked.
	 * @param {MouseEvent} event - The event object.
	 */

	function _elOnClick$2(event) {
	  // Prevent page from trying to scroll to a page anchor.
	  event.preventDefault();
	  this.toggle();
	}
	/**
	 * The event handler for when a key is pressed on the target element.
	 * @param {KeyboardEvent} event - The event object.
	 */


	function _elOnKeydown$1(event) {
	  // Override keyboard functionality if element is an anchor.
	  if (event.keyCode === Util.keyCodes.SPACE || event.keyCode === Util.keyCodes.ENTER) {
	    // Trigger the same event as a click for consistency.
	    event.preventDefault();

	    _elOnClick$2.bind(this)(event);
	  } // Events for when the menu is open.


	  if (this.shown) {
	    // Menu should close with the Esc key.
	    if (event.keyCode === Util.keyCodes.ESC) {
	      this.hide();
	    }

	    if (this.arrowableItems && event.keyCode === Util.keyCodes.ARROW_DOWN) {
	      // Prevent scrolling page on down arrow.
	      event.preventDefault(); // Set focus to first focusable element in menu.

	      this.arrowableItems[0].focus();
	    }
	  }
	}
	/**
	 * The event handler for when a key is pressed on the menu
	 * @param {KeyboardEvent} event - The event object
	 */


	function _menuOnKeydown$1(event) {
	  if (event.keyCode === Util.keyCodes.ESC) {
	    this.hide();
	  }

	  if (this.arrowableItems && (event.keyCode === Util.keyCodes.ARROW_DOWN || event.keyCode === Util.keyCodes.ARROW_UP)) {
	    // Prevent scrolling page on down arrow.
	    event.preventDefault();

	    if (event.keyCode === Util.keyCodes.ARROW_DOWN && document.activeElement !== this.arrowableItems[this.arrowableItems.length - 1]) {
	      // If the down key is pressed and its NOT on the last item in the list
	      this.arrowableItems[this.arrowableItems.indexOf(document.activeElement) + 1].focus();
	    } else if (event.keyCode === Util.keyCodes.ARROW_UP && document.activeElement !== this.arrowableItems[0]) {
	      // If the up key is pressed and its NOT on the first item in the list
	      this.arrowableItems[this.arrowableItems.indexOf(document.activeElement) - 1].focus();
	    } else {
	      this.hide();
	    }
	  }
	}
	/**
	 * The event handler for when mousedown is triggered on the document.
	 * Happens before mouseup, click, and focusin to control closing of the menu without conflicting with other events.
	 * @param {Event} event - The event object
	 */


	function _documentOnMousedown$1(event) {
	  if (this.shown && !this.menu.contains(event.target) && !this.el.contains(event.target)) {
	    this.hide({
	      setFocus: false
	    });
	  }
	}
	/**
	 * The event handler for when the document receives focus
	 * @param {Event} event - The event object
	 */


	function _documentOnFocusin$1(event) {
	  if (this.shown && !this.menu.contains(event.target)) {
	    this.hide();
	  }
	}
	/**
	 * Get the placement of a dropdown from the parent node class
	 * @param {Node} node - The element to check for a placement class
	 * @returns {string} The placement of the dropdown
	 */


	function _getPlacementFromClass(node) {
	  for (var i = 0; i < node.classList.length; i++) {
	    switch (node.classList[i]) {
	      case ClassName$a.BOTTOM:
	        return 'bottom';

	      case ClassName$a.TOP:
	        return 'top';

	      case ClassName$a.LEFT:
	        return 'start';

	      case ClassName$a.RIGHT:
	        return 'end';
	    }
	  }
	}
	/**
	 * Apply the correct `drop{direction}` class according to the placement
	 * @param {Node} node - The element to apply the class to
	 * @returns {string} The placement enum of the dropdown
	 */


	function _updatePlacementClass(node, placement) {
	  var className = ClassName$a[placement.toUpperCase()];
	  node.classList.remove(ClassName$a.BOTTOM, ClassName$a.TOP, ClassName$a.RIGHT, ClassName$a.LEFT);
	  node.classList.add(className);
	}

	var Dropdown = /*#__PURE__*/function (_Flyout) {
	  _inheritsLoose(Dropdown, _Flyout);

	  /**
	   * Create a dropdown, inherited from flyout
	   * @param {Object} opts - The flyout options
	   * @param {Node} opts.el - The element that toggles the flyout
	   * @param {Node} [opts.menu] - The element that defines the flyout menu
	   * @param {string} [opts.placement=bottom] - A string that defines the placement of the menu
	   * @param {string} [opts.alignment=start] - A string that defines the alignment of the menu
	   * @param {number} [opts.offset=0] - The number of pixels the menu should be offset from the trigger
	   * @param {boolean} [opts.enableReflow=true] - Whether the menu should reflow to fit within the window as best as possible
	   */
	  function Dropdown(opts) {
	    var _this;

	    // Set super options
	    var flyoutOpts = Object.assign({}, opts);
	    var parent = flyoutOpts.el.offsetParent || flyoutOpts.el.parentElement;

	    var placementFromClass = _getPlacementFromClass(parent);

	    flyoutOpts.placement = opts.placement || placementFromClass || flyoutOpts.el.getAttribute('data-placement') || Default$2.PLACEMENT;
	    flyoutOpts.enableFade = false;
	    _this = _Flyout.call(this, flyoutOpts) || this; // Dropdown-specific setup
	    // Ensure `drop` class matches the placement of the menu
	    // Invert

	    var invertedPlacement = _getPlacement(_this.placement, Default$2.PLACEMENT);

	    _updatePlacementClass(_this.parent, invertedPlacement);

	    if (_this.menu.nodeName.toLowerCase() === 'ul' || _this.menu.nodeName.toLowerCase() === 'ol') {
	      _this.arrowableItems = Util.getTabbableElements(_this.menu);
	    } // Add event handlers.


	    _this.events = [{
	      el: _this.el,
	      type: 'click',
	      handler: _elOnClick$2.bind(_assertThisInitialized(_this))
	    }, {
	      el: _this.el,
	      type: 'keydown',
	      handler: _elOnKeydown$1.bind(_assertThisInitialized(_this))
	    }, {
	      el: _this.menu,
	      type: 'keydown',
	      handler: _menuOnKeydown$1.bind(_assertThisInitialized(_this))
	    }, {
	      el: document,
	      type: 'mousedown',
	      handler: _documentOnMousedown$1.bind(_assertThisInitialized(_this))
	    }, {
	      el: document,
	      type: 'focusin',
	      handler: _documentOnFocusin$1.bind(_assertThisInitialized(_this))
	    }];
	    Util.addEvents(_this.events); // Add mutation observers.

	    _this.menuObserver = new MutationObserver(_this.update.bind(_assertThisInitialized(_this)));

	    _this.menuObserver.observe(_this.menu, {
	      childList: true,
	      subtree: true
	    }); // Create custom events.


	    _this[EventName$b.ON_HIDE] = new CustomEvent(EventName$b.ON_HIDE, {
	      bubbles: true,
	      cancelable: true
	    });
	    _this[EventName$b.ON_SHOW] = new CustomEvent(EventName$b.ON_SHOW, {
	      bubbles: true,
	      cancelable: true
	    });
	    dropdowns.push(_assertThisInitialized(_this));
	    return _this;
	  }
	  /**
	   * Show the menu
	   */


	  var _proto = Dropdown.prototype;

	  _proto.show = function show() {
	    _Flyout.prototype.show.call(this);

	    this.el.setAttribute('aria-expanded', this.shown);
	    this.el.dispatchEvent(this[EventName$b.ON_SHOW]);
	  }
	  /**
	   * Hide the menu
	   * @param {string} [opts={}] - Options for hiding the menu
	   * @param {boolean} [opts.setFocus=true] - Whether or not the focus should be set on the toggling element; defaults to true
	   */
	  ;

	  _proto.hide = function hide(opts) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    _Flyout.prototype.hide.call(this, opts);

	    this.el.setAttribute('aria-expanded', this.shown);
	    this.el.dispatchEvent(this[EventName$b.ON_HIDE]);
	  }
	  /**
	   * Update the dropdown instance
	   * @param {string} [opts={}] - Options for updating the instance
	   */
	  ;

	  _proto.update = function update(opts) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    var flyoutOpts = Object.assign({}, opts);
	    flyoutOpts.enableFade = false; // disable flyout fade feature

	    if (typeof this.arrowableItems !== 'undefined') {
	      // Update the list of known focusable items within the menu.
	      this.arrowableItems = Util.getTabbableElements(this.menu);
	    }

	    if (opts.placement) {
	      flyoutOpts.placement = _getPlacement(opts.placement, Default$2.PLACEMENT);
	    }

	    _Flyout.prototype.update.call(this, flyoutOpts); // Invert dropleft/dropright classes that switch orientation in RTL


	    var invertedPlacement = _getPlacement(this.placement, Default$2.PLACEMENT);

	    _updatePlacementClass(this.parent, invertedPlacement); // Create and dispatch custom event


	    this[EventName$b.ON_UPDATE] = new CustomEvent(EventName$b.ON_UPDATE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$b.ON_UPDATE]);
	  }
	  /**
	   * Remove the dropdown instance
	   */
	  ;

	  _proto.remove = function remove() {
	    // Remove event handlers, observers, etc.
	    Util.removeEvents(this.events); // Remove this reference from the array of instances

	    var index = dropdowns.indexOf(this);
	    dropdowns.splice(index, 1); // Create and dispatch custom event

	    this[EventName$b.ON_REMOVE] = new CustomEvent(EventName$b.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$b.ON_REMOVE]);
	  }
	  /**
	   * Get an array of dropdown instances
	   * @returns {Object[]} Array of dropdown instances
	   */
	  ;

	  Dropdown.getInstances = function getInstances() {
	    return dropdowns;
	  };

	  return Dropdown;
	}(Flyout);

	var formStars = [];
	var Selector$a = {
	  DATA_MOUNT: '[data-mount="form-star"]',
	  INPUTS: '.form-star-input',
	  LABEL: 'data-checked-label',
	  TEXT: '.form-star-text'
	};
	var ClassName$9 = {
	  EMPTY: 'form-star-empty'
	};
	var EventName$a = {
	  ON_REMOVE: 'onRemove'
	};
	/**
	 * Remove empty class
	 */

	function _removeEmptyStyles() {
	  this.el.classList.remove(ClassName$9.EMPTY);
	}
	/**
	 * Mouse leave event
	 */


	function _onMouseLeave() {
	  if (!this.getCheckedInputs().length) {
	    this.el.classList.add(ClassName$9.EMPTY);
	  }
	}
	/**
	 * Change event
	 */


	function _onChange(e) {
	  this.checkedLabel.textContent = e.target.labels[0].querySelector(Selector$a.TEXT).textContent;

	  _removeEmptyStyles.bind(this)();
	}
	/**
	 * Check for disabled form elements
	 * @returns {boolean} true if fieldset or all radios are disabled
	 */


	function _isDisabled() {
	  var disabled = [].slice.call(this.inputs).filter(function (input) {
	    return input.disabled === true;
	  });
	  return disabled.length === this.inputs.length || this.el.closest('fieldset').disabled;
	}
	/**
	 * HTMLInputElement.labels for unsupported browsers
	 */


	function _setLabels() {
	  if (!this.inputs[0].labels) {
	    var labels = this.el.querySelectorAll('label');
	    [].slice.call(labels).forEach(function (label) {
	      if (label.htmlFor) {
	        var input = document.getElementById(label.htmlFor);

	        if (input) {
	          input.labels = [label];
	        }
	      }
	    });
	  }
	}
	/**
	 * Class representing form star.
	 */


	var FormStar = /*#__PURE__*/function () {
	  /**
	   * Initialize form star.
	   * @param {Object} opts - The form star options.
	   * @param {Node} opts.el - The form star wrapping element.
	   * @param {Node} opts.checkedLabel - The visible container for the checked input label text.
	   */
	  function FormStar(opts) {
	    var _this = this;

	    this.el = opts.el;
	    this.inputs = this.el.querySelectorAll(Selector$a.INPUTS);
	    this.checkedLabel = opts.checkedLabel || document.getElementById(this.el.getAttribute(Selector$a.LABEL));
	    this.isDisabled = _isDisabled.bind(this)();
	    this.events = [{
	      el: this.el,
	      type: 'mouseenter',
	      handler: _removeEmptyStyles.bind(this)
	    }, {
	      el: this.el,
	      type: 'mouseleave',
	      handler: _onMouseLeave.bind(this)
	    }, {
	      el: this.el,
	      type: 'change',
	      handler: function handler(e) {
	        _onChange.bind(_this)(e);
	      }
	    }];

	    if (this.isDisabled) {
	      this.events = [];
	    }

	    formStars.push(this);

	    _setLabels.bind(this)();

	    var checked = this.getCheckedInputs();

	    if (checked.length) {
	      this.checkedLabel.textContent = checked[0].labels[0].querySelector(Selector$a.TEXT).textContent;
	    } else {
	      this.el.classList.add(ClassName$9.EMPTY);
	    } // Add event handlers.


	    Util.addEvents(this.events);
	  }
	  /**
	   * Filters for checked inputs
	   * @returns {array} checked inputs
	   */


	  var _proto = FormStar.prototype;

	  _proto.getCheckedInputs = function getCheckedInputs() {
	    return [].slice.call(this.inputs).filter(function (input) {
	      return input.checked === true;
	    });
	  }
	  /**
	   * Remove the form star.
	   */
	  ;

	  _proto.remove = function remove() {
	    // Remove event handlers.
	    Util.removeEvents(this.events); // Remove this form star reference from array of instances

	    var index = formStars.indexOf(this);
	    formStars.splice(index, 1); // Create and dispatch custom event

	    this[EventName$a.ON_REMOVE] = new CustomEvent(EventName$a.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$a.ON_REMOVE]);
	  }
	  /**
	   * Get an array of form star instances.
	   * @returns {Object[]} Array of form star instances.
	   */
	  ;

	  FormStar.getInstances = function getInstances() {
	    return formStars;
	  };

	  return FormStar;
	}();

	var requireObjectCoercible = requireObjectCoercible$9;

	var quot = /"/g;

	// `CreateHTML` abstract operation
	// https://tc39.es/ecma262/#sec-createhtml
	var createHtml = function (string, tag, attribute, value) {
	  var S = String(requireObjectCoercible(string));
	  var p1 = '<' + tag;
	  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};

	var fails$2 = fails$l;

	// check the existence of a method, lowercase
	// of a tag and escaping quotes in arguments
	var stringHtmlForced = function (METHOD_NAME) {
	  return fails$2(function () {
	    var test = ''[METHOD_NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  });
	};

	var $$3 = _export;
	var createHTML = createHtml;
	var forcedStringHTMLMethod = stringHtmlForced;

	// `String.prototype.link` method
	// https://tc39.es/ecma262/#sec-string.prototype.link
	$$3({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
	  link: function link(url) {
	    return createHTML(this, 'a', 'href', url);
	  }
	});

	var DESCRIPTORS = descriptors;
	var defineProperty$1 = objectDefineProperty.f;

	var FunctionPrototype = Function.prototype;
	var FunctionPrototypeToString = FunctionPrototype.toString;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME = 'name';

	// Function instances `.name` property
	// https://tc39.es/ecma262/#sec-function-instances-name
	if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
	  defineProperty$1(FunctionPrototype, NAME, {
	    configurable: true,
	    get: function () {
	      try {
	        return FunctionPrototypeToString.call(this).match(nameRE)[1];
	      } catch (error) {
	        return '';
	      }
	    }
	  });
	}

	var aFunction = aFunction$3;
	var toObject = toObject$a;
	var IndexedObject = indexedObject;
	var toLength$1 = toLength$b;

	// `Array.prototype.{ reduce, reduceRight }` methods implementation
	var createMethod = function (IS_RIGHT) {
	  return function (that, callbackfn, argumentsLength, memo) {
	    aFunction(callbackfn);
	    var O = toObject(that);
	    var self = IndexedObject(O);
	    var length = toLength$1(O.length);
	    var index = IS_RIGHT ? length - 1 : 0;
	    var i = IS_RIGHT ? -1 : 1;
	    if (argumentsLength < 2) while (true) {
	      if (index in self) {
	        memo = self[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if (IS_RIGHT ? index < 0 : length <= index) {
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	    return memo;
	  };
	};

	var arrayReduce = {
	  // `Array.prototype.reduce` method
	  // https://tc39.es/ecma262/#sec-array.prototype.reduce
	  left: createMethod(false),
	  // `Array.prototype.reduceRight` method
	  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
	  right: createMethod(true)
	};

	var classof = classofRaw$1;
	var global$4 = global$m;

	var engineIsNode = classof(global$4.process) == 'process';

	var $$2 = _export;
	var $reduce = arrayReduce.left;
	var arrayMethodIsStrict = arrayMethodIsStrict$4;
	var CHROME_VERSION = engineV8Version;
	var IS_NODE = engineIsNode;

	var STRICT_METHOD = arrayMethodIsStrict('reduce');
	// Chrome 80-82 has a critical bug
	// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
	var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

	// `Array.prototype.reduce` method
	// https://tc39.es/ecma262/#sec-array.prototype.reduce
	$$2({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var _excluded = ["feedback"];
	var Selector$9 = {
	  DATA_MOUNT: '.needs-validation, [data-mount="validation"]',
	  INPUTS: 'input, select, textarea',
	  SUBMIT: '[type="submit"]',
	  FEEDBACK_LIST: '[data-mount="feedback-list"]',
	  FEEDBACK_EL: 'data-feedback',
	  FEEDBACK_CONTENT: 'data-feedback-content',
	  CHECKBOX_REQUIRED: 'data-form-check-required',
	  CHECKBOX_MAX: 'data-form-check-max'
	};
	var EventName$9 = {
	  ON_VALID: 'onValid',
	  ON_REMOVE: 'onRemove',
	  ON_UPDATE: 'onUpdate'
	};
	var ClassName$8 = {
	  DISPLAY: {
	    NONE: 'd-none'
	  },
	  IS_INVALID: 'is-invalid'
	};
	var formValidations = [];
	/**
	 * Private functions.
	 */

	/**
	 * Create link to input field with feedback at bottom of form
	 * @param {Node} input - The form input field.
	 */

	function _createFeedbackLink(input) {
	  if (!input.feedback.link) {
	    var feedbackItem = document.createElement('li');
	    var feedbackLink = document.createElement('a');
	    var feedbackTextNode = document.createTextNode(input.feedback.content);
	    feedbackLink.setAttribute('href', "#" + input.id);
	    input.feedback.focusControls = new Util.FocusControls({
	      el: feedbackLink
	    });
	    feedbackLink.append(feedbackTextNode);
	    feedbackItem.append(feedbackLink);
	    input.feedback.link = feedbackItem;

	    if (input.group) {
	      input.group.siblings.forEach(function (sibling) {
	        sibling.feedback.link = feedbackItem;
	        sibling.feedback.focusControls = input.feedback.focusControls;
	      });
	    }
	  }

	  this.feedbackList.append(input.feedback.link);

	  if (!input.feedback.focusControls) {
	    input.feedback.focusControls = new Util.FocusControls({
	      el: input.feedback.link.querySelector('a')
	    });
	  }

	  input.feedback.linkRemoved = false;

	  if (input.group) {
	    input.group.siblings.forEach(function (sibling) {
	      sibling.feedback.linkRemoved = false;
	    });
	  }

	  this.feedbackListContainer.classList.remove(ClassName$8.DISPLAY.NONE);
	}
	/**
	 * Remove link to input field with feedback at bottom of form
	 * @param {Node} input - The form input field.
	 */


	function _removeFeedbackLink(input) {
	  if (input.group) {
	    input.group.siblings.forEach(function (sibling) {
	      sibling.feedback.linkRemoved = true;
	      sibling.feedback.focusControls.remove();
	    });
	  } else {
	    input.feedback.linkRemoved = true;
	    input.feedback.focusControls.remove();
	  }

	  input.feedback.link.remove();

	  if (this.feedbackList.children.length === 0) {
	    this.feedbackListContainer.classList.add(ClassName$8.DISPLAY.NONE);
	  }
	}
	/**
	 * Generate feedback data object from data attrbutes
	 * @param {Node} input - The form input field.
	 * @returns {Object} Object with feedback data.
	 */


	function _getFeedbackData(input) {
	  var feedback = {
	    id: input.getAttribute(Selector$9.FEEDBACK_EL)
	  };

	  if (feedback.id) {
	    feedback.content = input.getAttribute(Selector$9.FEEDBACK_CONTENT);
	    feedback.el = this.el.querySelector("#" + feedback.id);
	    feedback.linkRemoved = true;
	  }

	  return feedback;
	}
	/**
	 * Events for when input is valid
	 * @param {Node} input - The form input field.
	 */


	function _onValid(input) {
	  input.classList.remove(ClassName$8.IS_INVALID);
	  input.setAttribute('aria-invalid', false);

	  if (input.group) {
	    input.group.siblings.forEach(function (sibling) {
	      sibling.classList.remove(ClassName$8.IS_INVALID);
	      sibling.setAttribute('aria-invalid', false);
	    });
	  }

	  if (input.feedback.el) {
	    input.feedback.el.classList.remove(ClassName$8.IS_INVALID);
	    input.feedback.el.textContent = '';

	    if (this.feedbackList && input.feedback.link && !input.feedback.linkRemoved) {
	      _removeFeedbackLink.bind(this)(input);
	    }
	  }
	}
	/**
	 * Events for when input is invalid
	 * @param {Node} input - The form input field.
	 * @param {Object} feedback - The feedback options.
	 * @param {Node} feedback.el - The input feedback element.
	 * @param {string} feedback.content - The feedback content.
	 */


	function _onInvalid(input) {
	  input.classList.add(ClassName$8.IS_INVALID);
	  input.setAttribute('aria-invalid', true);

	  if (input.group) {
	    input.group.siblings.forEach(function (sibling) {
	      sibling.classList.add(ClassName$8.IS_INVALID);
	      sibling.setAttribute('aria-invalid', true);
	    });
	  }

	  if (input.feedback.el && input.feedback.content) {
	    input.feedback.el.classList.add(ClassName$8.IS_INVALID);
	    input.feedback.el.textContent = input.feedback.content;

	    if (this.feedbackList && input.feedback.linkRemoved) {
	      _createFeedbackLink.bind(this)(input);
	    }
	  }
	}
	/**
	 * Generate group data object from input
	 * @param {Node} input - The form input field.
	 * @returns {Object} Object with group data.
	 */


	function _inputCheckReducer(input) {
	  var name = input.name,
	      type = input.type;
	  return [].slice.call(this.inputs).reduce(function (obj, _input) {
	    if (_input.type === type && _input.name === name) {
	      if (obj.siblings) {
	        obj.siblings.push(_input);
	      } else {
	        obj.siblings = [_input];
	      }

	      var requiredMin = _input.getAttribute(Selector$9.CHECKBOX_REQUIRED);

	      var maxValid = _input.getAttribute(Selector$9.CHECKBOX_MAX); // Selector.CHECKBOX_REQUIRED attribute accepts either a boolean or integer
	      // If it's a boolean convert to an integer


	      if (requiredMin) {
	        var requiredMinInt = Number(requiredMin);

	        if (isNaN(requiredMinInt)) {
	          requiredMinInt = requiredMin === 'true' ? 1 : 0;
	        }

	        obj.requiredMin = requiredMinInt;
	      }

	      if (maxValid) {
	        var maxValidInt = Number(maxValid);
	        var maxValidIntIsNaN = isNaN(maxValidInt);

	        if (!maxValidIntIsNaN) {
	          obj.maxValid = maxValidInt;
	        }
	      }

	      if (_input.getAttribute(Selector$9.FEEDBACK_EL)) {
	        if (obj.feedback) {
	          obj.feedback.push(_input);
	        } else {
	          obj.feedback = [_input];
	        }
	      }
	    }

	    return obj;
	  }, {});
	}
	/**
	 * Setup inputs with required data.
	 * @param {Node} input - The form input field.
	 */


	function _inputInit(input) {
	  var type = input.type,
	      required = input.required;
	  var feedbackEl = input;

	  if (required) {
	    // the default aria-invalid attribute is false but some screenreaders do not respect this
	    input.setAttribute('aria-invalid', false);
	  }

	  if (type === 'radio' || type === 'checkbox') {
	    var group = _inputCheckReducer.bind(this)(input);

	    var feedback = group.feedback,
	        _group = _objectWithoutPropertiesLoose(group, _excluded);

	    if (_group.siblings.length > 1) {
	      input.group = _group;
	    }

	    if (feedback) {
	      feedbackEl = feedback[0];
	    }
	  }

	  input.feedback = _getFeedbackData.bind(this)(feedbackEl);
	}
	/**
	 * Set first element to recieve focus in the feedback list
	 */


	function _setFeedbackListFocusEl() {
	  var tagNames = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P'];
	  var prevEl = this.feedbackList.previousElementSibling;
	  this.feedbackListFocusEl = this.feedbackListContainer;

	  if (prevEl && tagNames.indexOf(prevEl.tagName) > -1) {
	    this.feedbackListFocusEl = prevEl;
	  }

	  this.feedbackListFocusEl.tabIndex = -1;
	}
	/**
	 * Unset current element to receive focus in the feedbacklist
	 */


	function _unsetFeedbackListFocusEl() {
	  this.feedbackListFocusEl.removeAttribute('tabIndex');
	} // Moved event declarations outside of constructor for calling in update.

	/**
	 * Adds submit event to events array
	 */


	function _setupSubmitEvent() {
	  var _this = this;

	  this.events.push({
	    el: this.el,
	    type: 'submit',
	    handler: function handler(e) {
	      _this.onSubmit(e);
	    }
	  });
	}
	/**
	 * Adds blur and change events for all input, select, and textarea elements to events array
	 */


	function _setupInputEvents() {
	  var _this2 = this;

	  // Set up inputs
	  this.inputs.forEach(function (input) {
	    _inputInit.bind(_this2)(input);

	    _this2.events.push({
	      el: input,
	      type: 'blur',
	      handler: function handler() {
	        setTimeout(function () {
	          _this2.validate(input, true);
	        }, 0);
	      }
	    }, {
	      el: input,
	      type: 'change',
	      handler: function handler() {
	        _this2.validate(input, true);
	      }
	    });
	  });
	}
	/**
	 * Class representing form validation.
	 */


	var FormValidation = /*#__PURE__*/function () {
	  /**
	   * Initialize form validation.
	   * @param {Object} opts - The form validation options
	   * @param {Node} opts.el - The form DOM node
	   * @param {Boolean} opts.preventFormSubmission - Flag to prevent form submission
	   * @param {Boolean} opts.allowEmptySubmit - Flag that determines whether to allow empty forms to submit
	   * @param {Node} opts.feedbackListContainer - The feedback list container DOM node
	   */
	  function FormValidation(opts) {
	    this.el = opts.el; // Property `preventFormSubmission` takes precedence over `allowEmptySubmit`

	    this.preventFormSubmission = opts.preventFormSubmission || this.el.dataset.preventFormSubmission !== undefined;
	    this.allowEmptySubmit = opts.allowEmptySubmit || this.el.dataset.allowEmptySubmit !== undefined;
	    this.inputs = this.el.querySelectorAll(Selector$9.INPUTS);
	    this.submit = this.el.querySelector(Selector$9.SUBMIT);
	    this.feedbackListContainer = opts.feedbackListContainer || this.el.querySelector(Selector$9.FEEDBACK_LIST);

	    if (this.feedbackListContainer) {
	      this.feedbackList = this.feedbackListContainer.querySelector('ol');

	      _setFeedbackListFocusEl.call(this);
	    }

	    this.events = [];

	    _setupSubmitEvent.call(this);

	    formValidations.push(this); // Hide empty feedback list

	    if (this.feedbackList && this.feedbackList.children.length === 0) {
	      this.feedbackListContainer.classList.add(ClassName$8.DISPLAY.NONE);
	    }

	    _setupInputEvents.call(this); // Add event handlers.


	    Util.addEvents(this.events); // Create custom events.

	    this[EventName$9.ON_VALID] = new CustomEvent(EventName$9.ON_VALID, {
	      bubbles: true,
	      cancelable: true
	    });
	  }
	  /**
	   * Validate form input
	   * @param {Node} input - The form input field.
	   * @param {boolean} onlyOnValid - Only runs if valid.
	   */


	  var _proto = FormValidation.prototype;

	  _proto.validate = function validate(input, onlyOnValid) {
	    var activeEl = document.activeElement;

	    if (!input.name || input.name !== activeEl.name) {
	      if (this.isInputValid(input)) {
	        _onValid.bind(this)(input);
	      } else if (!onlyOnValid) {
	        _onInvalid.bind(this)(input);
	      }
	    }
	  }
	  /**
	   * Check if input is valid
	   * @param {Node} input - The form input field.
	   * @returns {Boolean} - true if input is valid.
	   */
	  ;

	  _proto.isInputValid = function isInputValid(input) {
	    // Radio and check groups
	    if (input.group && (input.group.requiredMin || input.group.maxValid)) {
	      // get number of checked inputs in the group
	      var checked = input.group.siblings.filter(function (sibling) {
	        return sibling.checked === true;
	      }); // compare against required min or max

	      if (input.group.requiredMin && checked.length < input.group.requiredMin || input.group.maxValid && checked.length > input.group.maxValid) {
	        return false;
	      }

	      return true;
	    }

	    return input.checkValidity();
	  }
	  /**
	   * Check if form is valid
	   * @returns {Boolean} - true if all form inputs are valid.
	   */
	  ;

	  _proto.isFormValid = function isFormValid() {
	    var _this3 = this;

	    var checkValidity = [].slice.call(this.inputs).some(function (input) {
	      return _this3.isInputValid(input) === false;
	    });
	    return !checkValidity;
	  }
	  /**
	   * Check if form is empty
	   * @returns {Boolean} - false if any form inputs are checked or have a value.
	   */
	  ;

	  _proto.isFormEmpty = function isFormEmpty() {
	    var notEmpty = [].slice.call(this.inputs).some(function (input) {
	      var type = input.type,
	          value = input.value,
	          checked = input.checked;

	      if (type === 'radio' || type === 'checkbox') {
	        if (checked) {
	          return true;
	        }
	      } else if (value !== null && value !== undefined && value.trim().length) {
	        return true;
	      }

	      return false;
	    });
	    return !notEmpty;
	  }
	  /**
	   * Submit form
	   * @param {Event} e - The event object.
	   */
	  ;

	  _proto.onSubmit = function onSubmit(e) {
	    var _this4 = this;

	    e.preventDefault();
	    this.inputs.forEach(function (input) {
	      _this4.validate(input);
	    });

	    if (this.isFormValid()) {
	      this.el.dispatchEvent(this[EventName$9.ON_VALID]);

	      if (!this.preventFormSubmission && (!this.isFormEmpty() || this.allowEmptySubmit)) {
	        this.el.submit();
	      }
	    } else if (this.feedbackListFocusEl) {
	      this.feedbackListFocusEl.focus();
	    }
	  }
	  /**
	   * Update form validation.
	   * @param {Object} opts - The form validation options
	   * @param {Boolean} opts.preventFormSubmission - Flag to prevent form submission
	   * @param {Node} opts.feedbackListContainer - The feedback list container DOM node
	   * @param {Boolean} opts.allowEmptySubmit - Flag that determines whether to allow empty forms to submit
	   */
	  ;

	  _proto.update = function update(opts) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    if (opts) {
	      this.inputs = this.el.querySelectorAll(Selector$9.INPUTS);
	      this.submit = this.el.querySelector(Selector$9.SUBMIT); // Remove event handlers

	      Util.removeEvents(this.events); // Rebuild events array

	      this.events = [];

	      _setupSubmitEvent.call(this);

	      _setupInputEvents.call(this);

	      Util.addEvents(this.events); // Property `preventFormSubmission` takes precedence over `allowEmptySubmit`

	      if (opts.preventFormSubmission) {
	        this.preventFormSubmission = opts.preventFormSubmission;
	      }

	      if (opts.feedbackListContainer) {
	        _unsetFeedbackListFocusEl.call(this);

	        this.feedbackListContainer = opts.feedbackListContainer;
	        this.feedbackList = this.feedbackListContainer.querySelector('ol');

	        _setFeedbackListFocusEl.call(this);

	        if (this.feedbackList.children.length === 0) {
	          this.feedbackListContainer.classList.add(ClassName$8.DISPLAY.NONE);
	        } else {
	          this.feedbackListContainer.classList.remove(ClassName$8.DISPLAY.NONE);
	        }
	      }

	      if (opts.allowEmptySubmit) {
	        this.allowEmptySubmit = opts.allowEmptySubmit;
	      }
	    } // Create and dispatch custom event


	    this[EventName$9.ON_UPDATE] = new CustomEvent(EventName$9.ON_UPDATE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$9.ON_UPDATE]);
	  }
	  /**
	   * Remove the form validation.
	   */
	  ;

	  _proto.remove = function remove() {
	    // Remove event handlers
	    Util.removeEvents(this.events); // Remove this form validation reference from array of instances

	    var index = formValidations.indexOf(this);
	    formValidations.splice(index, 1); // Create and dispatch custom event

	    this[EventName$9.ON_REMOVE] = new CustomEvent(EventName$9.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$9.ON_REMOVE]);
	  }
	  /**
	   * Get an array of form validation instances.
	   * @returns {Object[]} Array of form validation instances.
	   */
	  ;

	  FormValidation.getInstances = function getInstances() {
	    return formValidations;
	  };

	  return FormValidation;
	}();

	var redefine$1 = redefine$9.exports;

	var redefineAll$2 = function (target, src, options) {
	  for (var key in src) redefine$1(target, key, src[key], options);
	  return target;
	};

	var internalMetadata = {exports: {}};

	var fails$1 = fails$l;

	var freezing = !fails$1(function () {
	  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
	  return Object.isExtensible(Object.preventExtensions({}));
	});

	var hiddenKeys = hiddenKeys$5;
	var isObject$3 = isObject$e;
	var has = has$b;
	var defineProperty = objectDefineProperty.f;
	var uid = uid$3;
	var FREEZING = freezing;

	var METADATA = uid('meta');
	var id$1 = 0;

	// eslint-disable-next-line es/no-object-isextensible -- safe
	var isExtensible$1 = Object.isExtensible || function () {
	  return true;
	};

	var setMetadata = function (it) {
	  defineProperty(it, METADATA, { value: {
	    objectID: 'O' + ++id$1, // object ID
	    weakData: {}          // weak collections IDs
	  } });
	};

	var fastKey = function (it, create) {
	  // return a primitive with prefix
	  if (!isObject$3(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible$1(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMetadata(it);
	  // return object ID
	  } return it[METADATA].objectID;
	};

	var getWeakData$1 = function (it, create) {
	  if (!has(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible$1(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMetadata(it);
	  // return the store of weak collections IDs
	  } return it[METADATA].weakData;
	};

	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZING && meta.REQUIRED && isExtensible$1(it) && !has(it, METADATA)) setMetadata(it);
	  return it;
	};

	var meta = internalMetadata.exports = {
	  REQUIRED: false,
	  fastKey: fastKey,
	  getWeakData: getWeakData$1,
	  onFreeze: onFreeze
	};

	hiddenKeys[METADATA] = true;

	var anObject$1 = anObject$f;
	var isArrayIteratorMethod = isArrayIteratorMethod$2;
	var toLength = toLength$b;
	var bind = functionBindContext;
	var getIteratorMethod = getIteratorMethod$2;
	var iteratorClose = iteratorClose$2;

	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var iterate$2 = function (iterable, unboundFunction, options) {
	  var that = options && options.that;
	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
	  var INTERRUPTED = !!(options && options.INTERRUPTED);
	  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
	  var iterator, iterFn, index, length, result, next, step;

	  var stop = function (condition) {
	    if (iterator) iteratorClose(iterator);
	    return new Result(true, condition);
	  };

	  var callFn = function (value) {
	    if (AS_ENTRIES) {
	      anObject$1(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    } return INTERRUPTED ? fn(value, stop) : fn(value);
	  };

	  if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod(iterable);
	    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = toLength(iterable.length); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && result instanceof Result) return result;
	      } return new Result(false);
	    }
	    iterator = iterFn.call(iterable);
	  }

	  next = iterator.next;
	  while (!(step = next.call(iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose(iterator);
	      throw error;
	    }
	    if (typeof result == 'object' && result && result instanceof Result) return result;
	  } return new Result(false);
	};

	var anInstance$2 = function (it, Constructor, name) {
	  if (!(it instanceof Constructor)) {
	    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
	  } return it;
	};

	var $$1 = _export;
	var global$3 = global$m;
	var isForced = isForced_1;
	var redefine = redefine$9.exports;
	var InternalMetadataModule$1 = internalMetadata.exports;
	var iterate$1 = iterate$2;
	var anInstance$1 = anInstance$2;
	var isObject$2 = isObject$e;
	var fails = fails$l;
	var checkCorrectnessOfIteration = checkCorrectnessOfIteration$2;
	var setToStringTag = setToStringTag$3;
	var inheritIfRequired = inheritIfRequired$3;

	var collection$1 = function (CONSTRUCTOR_NAME, wrapper, common) {
	  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
	  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var NativeConstructor = global$3[CONSTRUCTOR_NAME];
	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
	  var Constructor = NativeConstructor;
	  var exported = {};

	  var fixMethod = function (KEY) {
	    var nativeMethod = NativePrototype[KEY];
	    redefine(NativePrototype, KEY,
	      KEY == 'add' ? function add(value) {
	        nativeMethod.call(this, value === 0 ? 0 : value);
	        return this;
	      } : KEY == 'delete' ? function (key) {
	        return IS_WEAK && !isObject$2(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
	      } : KEY == 'get' ? function get(key) {
	        return IS_WEAK && !isObject$2(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
	      } : KEY == 'has' ? function has(key) {
	        return IS_WEAK && !isObject$2(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
	      } : function set(key, value) {
	        nativeMethod.call(this, key === 0 ? 0 : key, value);
	        return this;
	      }
	    );
	  };

	  var REPLACE = isForced(
	    CONSTRUCTOR_NAME,
	    typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
	      new NativeConstructor().entries().next();
	    }))
	  );

	  if (REPLACE) {
	    // create collection constructor
	    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
	    InternalMetadataModule$1.REQUIRED = true;
	  } else if (isForced(CONSTRUCTOR_NAME, true)) {
	    var instance = new Constructor();
	    // early implementations not supports chaining
	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
	    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
	    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    // eslint-disable-next-line no-new -- required for testing
	    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
	    // for early implementations -0 and +0 not the same
	    var BUGGY_ZERO = !IS_WEAK && fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new NativeConstructor();
	      var index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });

	    if (!ACCEPT_ITERABLES) {
	      Constructor = wrapper(function (dummy, iterable) {
	        anInstance$1(dummy, Constructor, CONSTRUCTOR_NAME);
	        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
	        if (iterable != undefined) iterate$1(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
	        return that;
	      });
	      Constructor.prototype = NativePrototype;
	      NativePrototype.constructor = Constructor;
	    }

	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }

	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

	    // weak collections should not contains .clear method
	    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
	  }

	  exported[CONSTRUCTOR_NAME] = Constructor;
	  $$1({ global: true, forced: Constructor != NativeConstructor }, exported);

	  setToStringTag(Constructor, CONSTRUCTOR_NAME);

	  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

	  return Constructor;
	};

	var redefineAll$1 = redefineAll$2;
	var getWeakData = internalMetadata.exports.getWeakData;
	var anObject = anObject$f;
	var isObject$1 = isObject$e;
	var anInstance = anInstance$2;
	var iterate = iterate$2;
	var ArrayIterationModule = arrayIteration;
	var $has = has$b;
	var InternalStateModule = internalState;

	var setInternalState = InternalStateModule.set;
	var internalStateGetterFor = InternalStateModule.getterFor;
	var find = ArrayIterationModule.find;
	var findIndex = ArrayIterationModule.findIndex;
	var id = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function (store) {
	  return store.frozen || (store.frozen = new UncaughtFrozenStore());
	};

	var UncaughtFrozenStore = function () {
	  this.entries = [];
	};

	var findUncaughtFrozen = function (store, key) {
	  return find(store.entries, function (it) {
	    return it[0] === key;
	  });
	};

	UncaughtFrozenStore.prototype = {
	  get: function (key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function (key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function (key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;
	    else this.entries.push([key, value]);
	  },
	  'delete': function (key) {
	    var index = findIndex(this.entries, function (it) {
	      return it[0] === key;
	    });
	    if (~index) this.entries.splice(index, 1);
	    return !!~index;
	  }
	};

	var collectionWeak$1 = {
	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, CONSTRUCTOR_NAME);
	      setInternalState(that, {
	        type: CONSTRUCTOR_NAME,
	        id: id++,
	        frozen: undefined
	      });
	      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
	    });

	    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

	    var define = function (that, key, value) {
	      var state = getInternalState(that);
	      var data = getWeakData(anObject(key), true);
	      if (data === true) uncaughtFrozenStore(state).set(key, value);
	      else data[state.id] = value;
	      return that;
	    };

	    redefineAll$1(C.prototype, {
	      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
	      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
	      'delete': function (key) {
	        var state = getInternalState(this);
	        if (!isObject$1(key)) return false;
	        var data = getWeakData(key);
	        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
	        return data && $has(data, state.id) && delete data[state.id];
	      },
	      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
	      // https://tc39.es/ecma262/#sec-weakset.prototype.has
	      has: function has(key) {
	        var state = getInternalState(this);
	        if (!isObject$1(key)) return false;
	        var data = getWeakData(key);
	        if (data === true) return uncaughtFrozenStore(state).has(key);
	        return data && $has(data, state.id);
	      }
	    });

	    redefineAll$1(C.prototype, IS_MAP ? {
	      // `WeakMap.prototype.get(key)` method
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
	      get: function get(key) {
	        var state = getInternalState(this);
	        if (isObject$1(key)) {
	          var data = getWeakData(key);
	          if (data === true) return uncaughtFrozenStore(state).get(key);
	          return data ? data[state.id] : undefined;
	        }
	      },
	      // `WeakMap.prototype.set(key, value)` method
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
	      set: function set(key, value) {
	        return define(this, key, value);
	      }
	    } : {
	      // `WeakSet.prototype.add(value)` method
	      // https://tc39.es/ecma262/#sec-weakset.prototype.add
	      add: function add(value) {
	        return define(this, value, true);
	      }
	    });

	    return C;
	  }
	};

	var global$2 = global$m;
	var redefineAll = redefineAll$2;
	var InternalMetadataModule = internalMetadata.exports;
	var collection = collection$1;
	var collectionWeak = collectionWeak$1;
	var isObject = isObject$e;
	var enforceIternalState = internalState.enforce;
	var NATIVE_WEAK_MAP = nativeWeakMap;

	var IS_IE11 = !global$2.ActiveXObject && 'ActiveXObject' in global$2;
	// eslint-disable-next-line es/no-object-isextensible -- safe
	var isExtensible = Object.isExtensible;
	var InternalWeakMap;

	var wrapper = function (init) {
	  return function WeakMap() {
	    return init(this, arguments.length ? arguments[0] : undefined);
	  };
	};

	// `WeakMap` constructor
	// https://tc39.es/ecma262/#sec-weakmap-constructor
	var $WeakMap = collection('WeakMap', wrapper, collectionWeak);

	// IE11 WeakMap frozen keys fix
	// We can't use feature detection because it crash some old IE builds
	// https://github.com/zloirock/core-js/issues/485
	if (NATIVE_WEAK_MAP && IS_IE11) {
	  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
	  InternalMetadataModule.REQUIRED = true;
	  var WeakMapPrototype = $WeakMap.prototype;
	  var nativeDelete = WeakMapPrototype['delete'];
	  var nativeHas = WeakMapPrototype.has;
	  var nativeGet = WeakMapPrototype.get;
	  var nativeSet = WeakMapPrototype.set;
	  redefineAll(WeakMapPrototype, {
	    'delete': function (key) {
	      if (isObject(key) && !isExtensible(key)) {
	        var state = enforceIternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeDelete.call(this, key) || state.frozen['delete'](key);
	      } return nativeDelete.call(this, key);
	    },
	    has: function has(key) {
	      if (isObject(key) && !isExtensible(key)) {
	        var state = enforceIternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeHas.call(this, key) || state.frozen.has(key);
	      } return nativeHas.call(this, key);
	    },
	    get: function get(key) {
	      if (isObject(key) && !isExtensible(key)) {
	        var state = enforceIternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
	      } return nativeGet.call(this, key);
	    },
	    set: function set(key, value) {
	      if (isObject(key) && !isExtensible(key)) {
	        var state = enforceIternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
	      } else nativeSet.call(this, key, value);
	      return this;
	    }
	  });
	}

	var instances$2 = [];
	var EventName$8 = {
	  HIDE: 'onHide',
	  HIDDEN: 'onHidden',
	  SHOW: 'onShow',
	  SHOWN: 'onShown',
	  ON_REMOVE: 'onRemove',
	  FOCUSIN: 'focusin',
	  RESIZE: 'resize',
	  CLICK_DISMISS: 'click.dismiss',
	  KEYDOWN: 'keydown'
	};
	var ClassName$7 = {
	  SCROLLABLE: 'modal-dialog-scrollable',
	  SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
	  BACKDROP: 'modal-backdrop',
	  OPEN: 'modal-open',
	  FADE: 'fade',
	  SHOW: 'show'
	};
	var Selector$8 = {
	  DIALOG: '.modal-dialog',
	  MODAL_BODY: '.modal-body',
	  DATA_MOUNT: '[data-mount="modal"]',
	  DATA_DISMISS: '[data-dismiss="modal"]',
	  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
	  STICKY_CONTENT: '.sticky-top'
	}; // Event Handlers

	/**
	 * Handler for keydown event
	 * @param {Event} event The event fired by the listener
	 */

	function keydownEvent(event) {
	  switch (Util.getKeyCode(event)) {
	    case Util.keyCodes.ESC:
	      event.preventDefault();
	      this.hide();
	      break;

	    case Util.keyCodes.TAB:
	      if ((document.activeElement === this.firstTabbableElement || document.activeElement === this.el) && event.shiftKey) {
	        event.preventDefault();
	        this.lastTabbableElement.focus();
	      }

	      if (document.activeElement === this.lastTabbableElement && !event.shiftKey) {
	        event.preventDefault();
	        this.firstTabbableElement.focus();
	      }

	      break;
	  }
	}
	/**
	 * Handler for focus event
	 * @param {Event} event The event fired by the listener
	 */


	function focusEvent(event) {
	  if (document !== event.target && this.el !== event.target && !this.el.contains(event.target)) {
	    this.el.focus();
	  }
	}
	/**
	 * Handler for backdrop event
	 * @param {Event} event The event fired by the listener
	 */


	function backdropEvent(event) {
	  if (!this.dialog.contains(event.target)) {
	    // create and dispatch the event
	    this.el.dispatchEvent(this[EventName$8.CLICK_DISMISS]);
	  }
	}
	/**
	 * Handler for dismiss click event
	 * @param {Event} event The event fired by the listener
	 */


	function clickDismissHandler(event) {
	  if (this.ignoreBackdropClick) {
	    this.ignoreBackdropClick = false;
	    return;
	  }

	  if (event.target !== event.currentTarget) {
	    return;
	  }

	  this.hide();
	}
	/**
	 * Handles the internal logic for showing an element
	 */


	function _showElement() {
	  var _this = this;

	  var transition = this.el.classList.contains(ClassName$7.FADE);

	  if (!this.el.parentNode || this.el.parentNode.nodeType !== Node.ELEMENT_NODE) {
	    // Don't move modal's DOM position
	    document.body.append(this.el);
	  }

	  this.el.style.display = 'block';
	  this.el.removeAttribute('aria-hidden');
	  this.el.setAttribute('aria-modal', true);

	  if (this.dialog.classList.contains(ClassName$7.SCROLLABLE)) {
	    this.dialog.querySelector(Selector$8.MODAL_BODY).scrollTop = 0;
	  } else {
	    this.el.scrollTop = 0;
	  }

	  if (transition) {
	    Util.reflow(this.el);
	  }

	  this.el.classList.add(ClassName$7.SHOW);

	  _enforceFocus.call(this);

	  var transitionComplete = function transitionComplete() {
	    var modalHeader = _this.el.querySelector('.modal-header'); // For accessibility purposes, scrollable modals will have the focus set to the header if the following conditions are met:
	    // 1) Modal is scrollable
	    // 2) There is a value for title.
	    // If there is no value for title, then there will be no text in the header. So, focus will be set to the modal window.
	    // Implemented for instances such as image gallery, where content is automatically read by screen readers when shown (2439).


	    var elementReceivingFocus = modalHeader.getAttribute('tabindex') === '-1' ? modalHeader : _this.el;
	    elementReceivingFocus.focus();
	    _this.isTransitioning = false;

	    _this.el.dispatchEvent(_this[EventName$8.SHOWN]);
	  };

	  if (transition) {
	    var transitionDuration = Util.getTransitionDurationFromElement(this.dialog);
	    this.dialog.addEventListener(Util.TRANSITION_END, transitionComplete.bind(this), {
	      once: true
	    });
	    Util.emulateTransitionEnd(this.dialog, transitionDuration);
	  } else {
	    transitionComplete.call(this);
	  }
	}
	/**
	 * Ensures the the focus is enforced on an element
	 */


	function _enforceFocus() {
	  document.removeEventListener(EventName$8.FOCUSIN, focusEvent); // Guard against infinite focus loop

	  document.addEventListener(EventName$8.FOCUSIN, focusEvent.bind(this));
	}
	/**
	 * Add and remove the event listeners for the keydown event
	 */


	function _setKeydownEvents() {
	  if (this.isShown) {
	    this.el.addEventListener(EventName$8.KEYDOWN, keydownEvent.bind(this));
	  } else {
	    this.el.removeEventListener(EventName$8.KEYDOWN, keydownEvent);
	  }
	}
	/**
	 * Add and remove the resize event
	 */


	function _setResizeEvent() {
	  var _this2 = this;

	  if (this.isShown) {
	    window.addEventListener(EventName$8.RESIZE, function (event) {
	      return _this2.handleUpdate(event);
	    });
	  } else {
	    window.removeEventListener(EventName$8.RESIZE, function (event) {
	      return _this2.handleUpdate(event);
	    });
	  }
	}
	/**
	 * Private handler for hiding a modal
	 */


	function _hideModal() {
	  var _this3 = this;

	  this.el.style.display = 'none';
	  this.el.setAttribute('aria-hidden', true);
	  this.el.removeAttribute('aria-modal');
	  this.isTransitioning = false;

	  _showBackdrop.call(this, function () {
	    document.body.classList.remove(ClassName$7.OPEN);

	    _resetAdjustments.call(_this3);

	    _resetScrollbar.call(_this3);

	    _this3.el.dispatchEvent(_this3[EventName$8.HIDDEN]);

	    document.body.removeEventListener('click', backdropEvent);
	  });
	}
	/**
	 * Remove backdrop from DOM
	 */


	function _removeBackdrop() {
	  if (this.backdrop) {
	    this.backdrop.remove();
	    this.backdrop = null;
	  } // Return the focus to the trigger


	  if (this.trigger) {
	    this.trigger.focus();
	  }
	}
	/**
	 * Show Backdrop
	 * @param {*} callback Function to callback once backdrop is shown
	 */


	function _showBackdrop(callback) {
	  var _this4 = this;

	  var animate = this.el.classList.contains(ClassName$7.FADE) ? ClassName$7.FADE : '';

	  if (this.isShown) {
	    this.backdrop = document.createElement('div');
	    this.backdrop.className = ClassName$7.BACKDROP;

	    if (animate) {
	      this.backdrop.classList.add(animate);
	    }

	    document.body.append(this.backdrop);
	    document.body.addEventListener('click', backdropEvent.bind(this));
	    this.el.addEventListener(EventName$8.CLICK_DISMISS, clickDismissHandler.bind(this));

	    if (animate) {
	      Util.reflow(this.backdrop);
	    }

	    this.backdrop.classList.add(ClassName$7.SHOW);

	    if (!callback) {
	      return;
	    }

	    if (!animate) {
	      callback();
	      return;
	    }

	    var backdropTransitionDuration = Util.getTransitionDurationFromElement(this.backdrop);
	    this.backdrop.addEventListener(Util.TRANSITION_END, callback, {
	      once: true
	    });
	    Util.emulateTransitionEnd(this.backdrop, backdropTransitionDuration);
	  } else if (!this.isShown && this.backdrop) {
	    this.backdrop.classList.remove(ClassName$7.SHOW);

	    var callbackRemove = function callbackRemove() {
	      _removeBackdrop.call(_this4);

	      if (callback) {
	        callback();
	      }
	    };

	    if (this.el.classList.contains(ClassName$7.FADE)) {
	      var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this.backdrop);

	      this.backdrop.addEventListener(Util.TRANSITION_END, callbackRemove, {
	        once: true
	      });
	      Util.emulateTransitionEnd(this.backdrop, _backdropTransitionDuration);
	    } else {
	      callbackRemove();
	    }
	  } else if (callback) {
	    callback();
	  }
	} // ----------------------------------------------------------------------
	// the following methods are used to handle overflowing modals
	// ----------------------------------------------------------------------


	function _adjustDialog() {
	  var isModalOverflowing = this.el.scrollHeight > document.documentElement.clientHeight;

	  if (!this.isBodyOverflowing && isModalOverflowing) {
	    this.el.style.paddingLeft = this.scrollbarWidth + "px";
	  }

	  if (this.isBodyOverflowing && !isModalOverflowing) {
	    this.el.style.paddingRight = this.scrollbarWidth + "px";
	  }
	}

	function _resetAdjustments() {
	  this.el.style.paddingLeft = '';
	  this.el.style.paddingRight = '';
	}

	function _checkScrollbar() {
	  var rect = document.body.getBoundingClientRect();
	  this.isBodyOverflowing = rect.left + rect.right < window.innerWidth;
	  this.scrollbarWidth = _getScrollbarWidth();
	}

	function _setScrollbar() {
	  var _this5 = this;

	  if (this.isBodyOverflowing) {
	    // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
	    var fixedContent = [].slice.call(document.querySelectorAll(Selector$8.FIXED_CONTENT));
	    var stickyContent = [].slice.call(document.querySelectorAll(Selector$8.STICKY_CONTENT)); // Adjust fixed content padding

	    fixedContent.forEach(function (element) {
	      var actualPadding = element.style.paddingRight ? element.style.paddingRight : 0;
	      var calculatedPadding = getComputedStyle(element)['padding-right'];

	      _this5.data.set({
	        element: element,
	        attribute: 'padding-right'
	      }, actualPadding);

	      element.style.paddingRight = parseFloat(calculatedPadding) + _this5.scrollbarWidth + "px";
	    }); // Adjust sticky content margin

	    stickyContent.forEach(function (element) {
	      var actualMargin = element.style.marginRight ? element.style.marginRight : 0;
	      var calculatedMargin = getComputedStyle(element)['margin-right'];

	      _this5.data.set({
	        element: element,
	        attribute: 'margin-right'
	      }, actualMargin);

	      element.style.marginRight = parseFloat(calculatedMargin) - _this5.scrollbarWidth + "px";
	    }); // Adjust body padding

	    var actualPadding = document.body.style.paddingRight ? document.body.style.paddingRight : 0;
	    var calculatedPadding = getComputedStyle(document.body)['padding-right'];
	    this.data.set({
	      element: document.body,
	      attribute: 'padding-right'
	    }, actualPadding);
	    document.body.style.paddingRight = parseFloat(calculatedPadding) + this.scrollbarWidth + "px";
	  }

	  document.body.classList.add(ClassName$7.OPEN);
	}

	function _resetScrollbar() {
	  var _this6 = this;

	  // Restore fixed content padding
	  var fixedContent = [].slice.call(document.querySelectorAll(Selector$8.FIXED_CONTENT));
	  fixedContent.forEach(function (element) {
	    var key = {
	      element: element,
	      attribute: 'padding-right'
	    }; // Retrieve the element from the Map

	    var padding = _this6.data.get(key);

	    element.style.paddingRight = padding ? padding : ''; // Remove the item from the map

	    _this6.data.delete(key);
	  }); // Restore sticky content

	  var elements = [].slice.call(document.querySelectorAll("" + Selector$8.STICKY_CONTENT));
	  elements.forEach(function (element) {
	    var key = {
	      element: element,
	      attribute: 'margin-right'
	    }; // Retrieve the element from the Map

	    var margin = _this6.data.get(key);

	    if (typeof margin !== 'undefined') {
	      element.style.marginRight = margin;

	      _this6.data.delete(key);
	    }
	  }); // Restore body padding

	  var key = {
	    element: document.body,
	    attribute: 'padding-right'
	  };
	  var padding = this.data.get(key);
	  this.data.delete(key);
	  document.body.style.paddingRight = padding ? padding : '';
	}

	function _getScrollbarWidth() {
	  // thx d.walsh
	  var scrollDiv = document.createElement('div');
	  scrollDiv.className = ClassName$7.SCROLLBAR_MEASURER;
	  document.body.append(scrollDiv);
	  var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
	  scrollDiv.remove();
	  return scrollbarWidth;
	}

	function _setTabbableElements() {
	  this.tabbableElements = Util.getTabbableElements(this.dialog).filter(function (el) {
	    return el.offsetHeight > 0;
	  });
	  this.firstTabbableElement = this.tabbableElements[0];
	  this.lastTabbableElement = this.tabbableElements[this.tabbableElements.length - 1];
	}
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */


	var Modal = /*#__PURE__*/function () {
	  /**
	   * Create a Modal.
	   * @param {Object} opts - The modal options.
	   * @param {Node} opts.el - The modal.
	   * @param {Boolean} opts.displayOnInit - whether to display modal after init, defaults to false
	   */
	  function Modal(opts) {
	    var _this7 = this;

	    // Modal element
	    this.el = opts.el; // Toggle button for modal

	    this.button = document.querySelector("[data-target=\"#" + this.el.id + "\"]");
	    this.dialog = this.el.querySelector(Selector$8.DIALOG);
	    this.backdrop = null;
	    this.isShown = false;
	    this.isBodyOverflowing = false;
	    this.ignoreBackdropClick = false;
	    this.isTransitioning = false;
	    this.scrollbarWidth = 0;
	    this.data = new WeakMap();
	    this.dialogObserver = new MutationObserver(_setTabbableElements.bind(this));
	    this[EventName$8.SHOWN] = new CustomEvent(EventName$8.SHOWN, {
	      detail: this.el
	    });
	    this[EventName$8.SHOW] = new CustomEvent(EventName$8.SHOW, {
	      detail: this.el
	    });
	    this[EventName$8.HIDE] = new CustomEvent(EventName$8.HIDE);
	    this[EventName$8.HIDDEN] = new CustomEvent(EventName$8.HIDDEN);
	    this[EventName$8.CLICK_DISMISS] = new CustomEvent(EventName$8.CLICK_DISMISS); // Add event handlers

	    this.events = [];

	    if (this.button) {
	      this.events = [{
	        el: this.button,
	        type: 'click',
	        handler: function handler(event) {
	          _this7.toggle(event);
	        }
	      }];
	      Util.addEvents(this.events);
	    }

	    if (opts.displayOnInit || this.el.dataset.displayOnInit === 'true') {
	      this.show();
	    }

	    instances$2.push(this);
	  }
	  /**
	   * Toggle hide and show states of the modal
	   * @param {Event} event - The event that fired the toggle
	   */


	  var _proto = Modal.prototype;

	  _proto.toggle = function toggle(event) {
	    if (event) {
	      this.trigger = event.target;
	    }

	    return this.isShown ? this.hide() : this.show();
	  }
	  /**
	   * Show the modal
	   */
	  ;

	  _proto.show = function show() {
	    var _this8 = this;

	    if (this.isShown || this.isTransitioning) {
	      return;
	    }

	    if (this.el.classList.contains(ClassName$7.FADE)) {
	      this.isTransitioning = true;
	    }

	    this.el.dispatchEvent(this[EventName$8.SHOW]);

	    if (this.isShown || this[EventName$8.SHOW].defaultPrevented) {
	      return;
	    }

	    this.isShown = true;

	    _checkScrollbar.call(this);

	    _setScrollbar.call(this);

	    _adjustDialog.call(this);

	    _setResizeEvent.call(this); // Add event listeners to the dismiss action


	    this.el.addEventListener(EventName$8.CLICK_DISMISS, function (event) {
	      return _this8.hide(event);
	    }); // Find all the dismiss attribute elements and cause the modal to hide

	    this.el.querySelectorAll(Selector$8.DATA_DISMISS).forEach(function (_element) {
	      return _element.addEventListener('click', function (event) {
	        return _this8.hide(event);
	      });
	    });

	    _showBackdrop.call(this, function () {
	      _showElement.call(_this8);

	      _setTabbableElements.call(_this8);

	      _setKeydownEvents.call(_this8);

	      _this8.dialogObserver.observe(_this8.dialog, {
	        attributes: true,
	        childList: true,
	        subtree: true
	      });
	    });
	  }
	  /**
	   * Hide the modal
	   * @param {Event} event the event that triggered the hide
	   */
	  ;

	  _proto.hide = function hide(event) {
	    var _this9 = this;

	    if (event) {
	      event.preventDefault();
	    }

	    if (!this.isShown || this.isTransitioning) {
	      return;
	    }

	    this.el.dispatchEvent(this[EventName$8.HIDE]);

	    if (!this.isShown || this[EventName$8.HIDE].defaultPrevented) {
	      return;
	    }

	    this.isShown = false;
	    var transition = this.el.classList.contains(ClassName$7.FADE);

	    if (transition) {
	      this.isTransitioning = true;
	    }

	    _setKeydownEvents.call(this);

	    _setResizeEvent.call(this);

	    var mainContent = document.querySelector('body > main');

	    if (mainContent && mainContent.getAttribute('aria-hidden') === 'true') {
	      mainContent.removeAttribute('aria-hidden');
	    }

	    document.removeEventListener(EventName$8.FOCUSIN, focusEvent);
	    this.el.classList.remove(ClassName$7.SHOW);
	    this.el.removeEventListener(EventName$8.CLICK_DISMISS, clickDismissHandler);
	    this.dialogObserver.disconnect();

	    if (transition) {
	      var transitionDuration = Util.getTransitionDurationFromElement(this.el);
	      this.el.addEventListener(Util.TRANSITION_END, function (event) {
	        return _hideModal.call(_this9, event);
	      }, {
	        once: true
	      });
	      Util.emulateTransitionEnd(this.el, transitionDuration);
	    } else {
	      _hideModal.call(this);
	    }
	  }
	  /**
	   * Handle update that happens with the modal
	   */
	  ;

	  _proto.handleUpdate = function handleUpdate() {
	    _adjustDialog.call(this);
	  }
	  /**
	   * Remove the event handlers
	   */
	  ;

	  _proto.remove = function remove() {
	    // Remove event handlers, observers, etc.
	    Util.removeEvents(this.events);
	    document.removeEventListener(EventName$8.FOCUSIN, focusEvent); // Remove this reference from the array of instances.

	    var index = instances$2.indexOf(this);
	    instances$2.splice(index, 1); // Create and dispatch custom event

	    this[EventName$8.ON_REMOVE] = new CustomEvent(EventName$8.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$8.ON_REMOVE]);
	  }
	  /**
	   * Get the modal instances.
	   * @returns {Object[]} An array of modal instances
	   */
	  ;

	  Modal.getInstances = function getInstances() {
	    return instances$2;
	  };

	  return Modal;
	}();

	var Selector$7 = {
	  DATA_MOUNT: '[data-mount="multi-feature"]',
	  FEATURE: '.multi-feature-feature',
	  ACCORDION: '.accordion'
	};
	var EventName$7 = {
	  ON_REMOVE: 'onRemove',
	  ON_UPDATE: 'onUpdate'
	};
	var ClassName$6 = {
	  DISPLAY: {
	    BLOCK: 'block',
	    NONE: 'd-none'
	  }
	};
	var instances$1 = []; // Set accordion height so it is never taller than the shortest feature

	function _setAccordionHeight() {
	  var _this = this;

	  if (this.inCustomViewport()) {
	    // Wait for any images to load before calculating height
	    imagesLoaded(this.el, function () {
	      var maxAccordionHeight;
	      var firstCollapseHeight;

	      _this.collapses.forEach(function (c, i) {
	        // Save current styles
	        var display = c.el.style.display;
	        var dNone = c.feature.classList.contains(ClassName$6.DISPLAY.NONE); // Set visible styles

	        c.el.style.display = ClassName$6.DISPLAY.BLOCK;

	        if (dNone) {
	          c.feature.classList.remove(ClassName$6.DISPLAY.NONE);
	        } // Calculate heights


	        var featureHeight = c.feature.offsetHeight;

	        if (!maxAccordionHeight || featureHeight < maxAccordionHeight) {
	          maxAccordionHeight = featureHeight;
	        }

	        if (i === 0) {
	          firstCollapseHeight = c.el.offsetHeight + c.triggerElement.offsetHeight;
	        } // Reset styles to original state


	        c.el.style.display = display;

	        if (dNone) {
	          c.feature.classList.add(ClassName$6.DISPLAY.NONE);
	        }
	      }); // set a min height equal to the height of the first collapse while open, plus a peek of the second collapse button


	      _this.accordionElement.style.minHeight = firstCollapseHeight + 32 + "px";

	      if (maxAccordionHeight) {
	        _this.accordionElement.style.height = maxAccordionHeight + "px";
	        _this.accordionElement.style.overflowY = 'auto';
	      }
	    });
	  } else {
	    this.accordionElement.style.minHeight = '';
	    this.accordionElement.style.height = '';
	    this.accordionElement.style.overflowY = '';
	  }
	} // Calculate height of absolute positioned content


	function _setMultiFeatureHeight() {
	  var _this$open, _this$open$feature;

	  var featureHeight = (_this$open = this.open) == null ? void 0 : (_this$open$feature = _this$open.feature) == null ? void 0 : _this$open$feature.offsetHeight;

	  if (this.inCustomViewport() && featureHeight) {
	    this.el.style.height = featureHeight + "px";
	  } else {
	    this.el.style.height = '';
	  }
	}

	function _onShown(collapse) {
	  this.open = collapse;

	  if (this.inCustomViewport()) {
	    var _this$open$feature2;

	    (_this$open$feature2 = this.open.feature) == null ? void 0 : _this$open$feature2.classList.remove(ClassName$6.DISPLAY.NONE);

	    _setMultiFeatureHeight.call(this);
	  }
	}

	function _onHide(e) {
	  var otherOpen = this.collapses.some(function (collapse) {
	    var notTarget = collapse.el !== e.target;
	    var open = !collapse.isCollapsed && !collapse.isTransitioning && notTarget;
	    var transitioningOpen = collapse.isCollapsed && collapse.isTransitioning && notTarget;
	    return open || transitioningOpen;
	  });

	  if (this.inCustomViewport()) {
	    if (otherOpen) {
	      var _this$open$feature3;

	      (_this$open$feature3 = this.open.feature) == null ? void 0 : _this$open$feature3.classList.add(ClassName$6.DISPLAY.NONE);
	    } else {
	      e.preventDefault();
	    }
	  } else if (!otherOpen) {
	    this.open = undefined;
	  }
	}

	function _onResize() {
	  _setAccordionHeight.call(this);

	  _setMultiFeatureHeight.call(this);

	  if (this.inCustomViewport()) {
	    if (!this.open && this.collapses.length) {
	      this.collapses[0].toggle();
	      this.open = this.collapses[0];
	    }
	  } else {
	    this.collapses.forEach(function (collapse) {
	      collapse.feature.classList.remove(ClassName$6.DISPLAY.NONE);
	    });
	  }
	}

	function _generateEvents() {
	  var _this2 = this;

	  var events = [{
	    el: window,
	    type: 'resize',
	    handler: debounce(300, _onResize.bind(this)),
	    options: {
	      passive: true
	    }
	  }];
	  this.collapses.forEach(function (collapse) {
	    events.push({
	      el: collapse.el,
	      type: EventName$e.SHOWN,
	      handler: function handler() {
	        _onShown.call(_this2, collapse);
	      }
	    }, {
	      el: collapse.el,
	      type: EventName$e.HIDE,
	      handler: function handler(e) {
	        _onHide.call(_this2, e);
	      }
	    });
	  });
	  return events;
	}

	function _setupCollapse(collapse) {
	  collapse.feature = collapse.el.querySelector(Selector$7.FEATURE);
	  collapse.parent = "#" + this.accordionElement.id;

	  if (collapse.isCollapsed === false) {
	    this.open = collapse;
	  }
	}
	/**
	 * Class representing a multi feature.
	 */


	var MultiFeature = /*#__PURE__*/function () {
	  /**
	   * Create the multi feature.
	   * @param {Object} opts - The multi feature options.
	   * @param {Node} opts.el - The multi feature DOM node.
	   * @param {Node} [opts.accordionElement] - The accordion DOM node.
	   * @param {Collapse[]} [opts.collapses] - The list of Collapse instances.
	   * @param {Array} [opts.customViewports] - The list of viewports with custom accordion logic.
	   */
	  function MultiFeature(opts) {
	    var _this3 = this;

	    this.el = opts.el;
	    this.accordionElement = opts.accordion || this.el.querySelector(Selector$7.ACCORDION);
	    this.collapses = opts.collapses || [];
	    this.customViewports = opts.customViewports || ['lg', 'xl'];

	    if (this.collapses.length) {
	      this.collapses.forEach(function (collapse) {
	        _setupCollapse.call(_this3, collapse);
	      });
	    } else {
	      // Get the collapse instances and find the collapse elements
	      var collapseTriggers = this.el.querySelectorAll(Selector$g.DATA_MOUNT);
	      var collapseInstances = Collapse.getInstances();
	      collapseTriggers.forEach(function (el) {
	        var collapseInstance = collapseInstances.find(function (collapse) {
	          return collapse.triggerElement === el;
	        });

	        _setupCollapse.call(_this3, collapseInstance);

	        _this3.collapses.push(collapseInstance);
	      });
	    }

	    _setAccordionHeight.call(this);

	    if (!this.open && this.collapses.length) {
	      this.collapses[0].toggle();
	      this.open = this.collapses[0];
	    }

	    this.events = _generateEvents.call(this);
	    Util.addEvents(this.events);
	    instances$1.push(this);
	  }
	  /**
	   * Check if current viewport is in custom viewport list
	   * @returns {Boolean}
	   */


	  var _proto = MultiFeature.prototype;

	  _proto.inCustomViewport = function inCustomViewport() {
	    var viewport = Util.detectViewport();
	    return this.customViewports.indexOf(viewport) > -1;
	  }
	  /**
	   * Update instance.
	   * @param {Object} opts - The multi feature options
	   * @param {Node} [opts.accordionElement] - The accordion DOM node.
	   * @param {Array} [opts.collapses] - The list of Collapse instances.
	   * @param {Array} [opts.customViewports] - The list of viewports with custom accordion logic.
	   */
	  ;

	  _proto.update = function update(opts) {
	    var _this4 = this;

	    if (opts === void 0) {
	      opts = {};
	    }

	    // Remove event handlers
	    Util.removeEvents(this.events);

	    if (opts.accordionElement) {
	      this.accordionElement = opts.accordionElement;
	    }

	    if (opts.customViewports) {
	      this.customViewports = opts.customViewports;
	    }

	    if (opts.collapses) {
	      this.open = null;
	      this.collapses = opts.collapses;
	      this.collapses.forEach(function (collapse) {
	        _setupCollapse.call(_this4, collapse);
	      });
	    }

	    _setAccordionHeight.call(this);

	    if (!this.open && this.collapses.length) {
	      this.collapses[0].toggle();
	      this.open = this.collapses[0];
	    } // Add event handlers


	    this.events = _generateEvents.call(this);
	    Util.addEvents(this.events); // Trigger event

	    this[EventName$7.ON_UPDATE] = new CustomEvent(EventName$7.ON_UPDATE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$7.ON_UPDATE]);
	  }
	  /**
	   * Remove the multi feature.
	   */
	  ;

	  _proto.remove = function remove() {
	    // Remove event handlers
	    Util.removeEvents(this.events); // remove this multi feature reference from array of instances

	    var index = instances$1.indexOf(this);
	    instances$1.splice(index, 1); // Trigger event

	    this[EventName$7.ON_REMOVE] = new CustomEvent(EventName$7.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$7.ON_REMOVE]);
	  }
	  /**
	   * Get an array of multi feature instances.
	   * @returns {Object[]} Array of multi feature instances.
	   */
	  ;

	  MultiFeature.getInstances = function getInstances() {
	    return instances$1;
	  };

	  return MultiFeature;
	}();

	var Selector$6 = {
	  DATA_MOUNT: '[data-mount="popover"]'
	};
	var EventName$6 = {
	  ON_HIDE: 'onHide',
	  ON_SHOW: 'onShow',
	  ON_UPDATE: 'onUpdate',
	  ON_REMOVE: 'onRemove'
	};
	var ClassName$5 = Object.assign({}, ClassName$b, {
	  POPOVER: 'popover',
	  CLOSE: 'close',
	  ARROW: 'arrow'
	});
	var Default$1 = Object.assign({}, Default$3, {
	  CLOSE_LABEL: 'Close dialog',
	  ALIGNMENT: 'center'
	});
	var popovers = [];
	/**
	 * The event handler for when the target element is clicked
	 * @param {MouseEvent} event - The event object
	 */

	function _elOnClick$1(event) {
	  // Prevent page from trying to scroll to a page anchor
	  event.preventDefault();
	  this.toggle();
	}
	/**
	 * The event handler for when a key is pressed on the target element
	 * @param {KeyboardEvent} event - The event object
	 */


	function _elOnKeydown(event) {
	  if (event.keyCode === Util.keyCodes.SPACE || event.keyCode === Util.keyCodes.ENTER) {
	    // Trigger the same event as a click for consistency.
	    // Note: Since focus should be trapped within the menu while open, these events should only ever apply when the menu is closed.
	    // If somehow a keyboard event is triggered on the target element, go a head and close the menu as if it was clicked.
	    event.preventDefault();

	    _elOnClick$1.call(this, event);
	  }
	}
	/**
	 * The event handler for when a key is pressed on the menu
	 * @param {KeyboardEvent} event - The event object
	 */


	function _menuOnKeydown(event) {
	  if (event.keyCode === Util.keyCodes.ESC) {
	    this.hide();
	  }
	}
	/**
	 * The event handler for when the close button is clicked.
	 * Note: browser also triggers this when space or enter is pressed on a button.
	 * @param {MouseEvent} event - The event object
	 */


	function _closeOnClick(event) {
	  // Prevent page from trying to scroll to a page anchor
	  event.preventDefault();
	  this.hide();
	}
	/**
	 * The event handler for when mousedown is triggered on the document.
	 * Happens before mouseup, click, and focusin to control closing of the menu without conflicting with other events.
	 * @param {Event} event - The event object
	 */


	function _documentOnMousedown(event) {
	  if (this.shown && !this.menu.contains(event.target) && !this.el.contains(event.target)) {
	    this.hide({
	      setFocus: false
	    });
	  }
	}
	/**
	 * The event handler for when the document receives focus
	 * @param {Event} event - The event object
	 */


	function _documentOnFocusin(event) {
	  if (this.shown && !this.menu.contains(event.target)) {
	    // Create a keyboard trap within the menu until the popover is closed by the user
	    if (event.relatedTarget === this.closeBtn) {
	      this.tabbableElements[this.tabbableElements.length - 1].focus();
	    } else {
	      this.closeBtn.focus();
	    }
	  }
	}
	/**
	 * Gets the related menu or creates one if none is associated
	 * @param {Node} node - The element associated with the menu, typically the popover trigger
	 * @returns {Node} The menu element
	 */


	function _getOrCreateMenu$1(node) {
	  if (node.attributes['aria-controls']) {
	    return document.querySelector("#" + node.attributes['aria-controls'].value);
	  }

	  if (node.attributes['data-content']) {
	    var menu = document.createElement('div');
	    var menuId = ClassName$5.POPOVER + "_" + Util.getUid();
	    var menuContent = document.createElement('div');
	    var menuContentBody = document.createElement('div');
	    menu.setAttribute('id', menuId);
	    menu.classList.add(ClassName$5.POPOVER);
	    menu.setAttribute('role', 'dialog');
	    menu.setAttribute('aria-labelledby', node.id);
	    menuContent.classList.add('popover-content');
	    menu.appendChild(menuContent);
	    menuContentBody.classList.add('popover-body');
	    menuContentBody.textContent = node.getAttribute('data-content');
	    menuContent.appendChild(menuContentBody);
	    menu.prepend(_createCloseBtn({
	      label: node.getAttribute('data-close-label')
	    }));
	    node.setAttribute('aria-expanded', 'false');
	    node.setAttribute('aria-controls', menuId);
	    node.after(menu);
	    return menu;
	  }
	}
	/**
	 * Create a close button element
	 * @param {Object} [opts={}] - Options for the button element
	 * @param {string} [opts.label=Default.CLOSE_LABEL] - The aria-label value for the button
	 * @returns {Node} The a close button element
	 */


	function _createCloseBtn(opts) {
	  if (opts === void 0) {
	    opts = {};
	  }

	  var btn = document.createElement('button');
	  btn.classList.add(ClassName$5.CLOSE);
	  btn.setAttribute('aria-label', opts.label || Default$1.CLOSE_LABEL);
	  return btn;
	}
	/**
	 * Creates a decorative arrow element for the menu
	 * @param {Node} node - The element to add the arrow to, typically the menu
	 * @returns {Node} The arrow element
	 */


	function _createPopoverArrow(node) {
	  var arrow = document.createElement('div');
	  arrow.classList.add(ClassName$5.ARROW);
	  node.append(arrow);
	  return arrow;
	}

	var Popover = /*#__PURE__*/function (_Flyout) {
	  _inheritsLoose(Popover, _Flyout);

	  /**
	   * Create a popover, inherited from flyout
	   * @param {Object} opts - The flyout options
	   * @param {Node} opts.el - The element that toggles the flyout
	   * @param {Node} [opts.menu] - The element that defines the flyout menu
	   * @param {string} [opts.placement=right] - A string that defines the placement of the menu
	   * @param {string} [opts.alignment=center] - A string that defines the alignment of the menu
	   * @param {number} [opts.offset=16] - The number of pixels the menu should be offset from the trigger
	   * @param {boolean} [opts.enableReflow=true] - Whether the menu should reflow to fit within the window as best as possible
	   * @param {boolean} [opts.enableFade=true] - Whether the menu should fade in and out
	   */
	  function Popover(opts) {
	    var _this;

	    // Set super options
	    var flyoutOpts = Object.assign({}, opts);
	    flyoutOpts.menu = opts.menu || _getOrCreateMenu$1(flyoutOpts.el);
	    flyoutOpts.alignment = _getAlignment(opts.alignment || flyoutOpts.el.getAttribute('data-alignment'), Default$1.ALIGNMENT);
	    flyoutOpts.offset = opts.offset ? parseInt(opts.offset, 10) : 16;
	    flyoutOpts.enableFade = typeof opts.enableFade === 'boolean' ? opts.enableFade : true;
	    _this = _Flyout.call(this, flyoutOpts) || this; // Popover-specific setup

	    _this.arrow = _createPopoverArrow(_this.menu); // Get the "close" button within the menu

	    _this.closeBtn = _this.menu.querySelector('button.close');

	    if (!_this.closeBtn) {
	      _this.closeBtn = _createCloseBtn({
	        label: _this.el.getAttribute('data-close-label')
	      });

	      _this.menu.prepend(_this.closeBtn);
	    } // Get a list of tabbable elements within the menu


	    _this.tabbableElements = Util.getTabbableElements(_this.menu); // Add event handlers

	    _this.events = [{
	      el: _this.el,
	      type: 'click',
	      handler: _elOnClick$1.bind(_assertThisInitialized(_this))
	    }, {
	      el: _this.el,
	      type: 'keydown',
	      handler: _elOnKeydown.bind(_assertThisInitialized(_this))
	    }, {
	      el: _this.menu,
	      type: 'keydown',
	      handler: _menuOnKeydown.bind(_assertThisInitialized(_this))
	    }, {
	      el: _this.closeBtn,
	      type: 'click',
	      handler: _closeOnClick.bind(_assertThisInitialized(_this))
	    }, {
	      el: document,
	      type: 'mousedown',
	      handler: _documentOnMousedown.bind(_assertThisInitialized(_this))
	    }, {
	      el: document,
	      type: 'focusin',
	      handler: _documentOnFocusin.bind(_assertThisInitialized(_this))
	    }];
	    Util.addEvents(_this.events); // Create custom events

	    _this[EventName$6.ON_HIDE] = new CustomEvent(EventName$6.ON_HIDE, {
	      bubbles: true,
	      cancelable: true
	    });
	    _this[EventName$6.ON_SHOW] = new CustomEvent(EventName$6.ON_SHOW, {
	      bubbles: true,
	      cancelable: true
	    });
	    popovers.push(_assertThisInitialized(_this));
	    return _this;
	  }
	  /**
	   * Position the flyout menu
	   */


	  var _proto = Popover.prototype;

	  _proto.positionMenu = function positionMenu() {
	    _Flyout.prototype.positionMenu.call(this);

	    this.positionMenuArrow();
	  }
	  /**
	   * Position the menu's arrow
	   */
	  ;

	  _proto.positionMenuArrow = function positionMenuArrow() {
	    var position = this.currentPosition; // Reset positioning

	    this.arrow.style.top = null;
	    this.arrow.style.bottom = null;
	    this.arrow.style.left = null;
	    this.arrow.style.right = null; // Top and bottom menus

	    if (position.placement === 'top' || position.placement === 'bottom') {
	      if (position.alignment === 'start') {
	        this.arrow.style[Default$1.START] = Math.round(this.boundingRect.el.width / 2) - this.arrow.offsetWidth / 2 + Math.abs(this.overflowOffset) + 'px';
	      } else if (position.alignment === 'end') {
	        this.arrow.style[Default$1.END] = Math.round(this.boundingRect.el.width / 2) - this.arrow.offsetWidth / 2 + Math.abs(this.overflowOffset) + 'px';
	      } else {
	        this.arrow.style.left = Math.round(this.boundingRect.menu.width / 2) - this.arrow.offsetWidth / 2 + Math.abs(this.overflowOffset) + 'px';
	      } // Left and right menus

	    } else if (position.alignment === 'start') {
	      this.arrow.style.top = Math.round(this.boundingRect.el.height / 2) - this.arrow.offsetWidth / 2 + 'px';
	    } else if (position.alignment === 'end') {
	      this.arrow.style.bottom = Math.round(this.boundingRect.el.height / 2) - this.arrow.offsetWidth / 2 + 'px';
	    } else {
	      this.arrow.style.top = Math.round(this.boundingRect.menu.height / 2) - this.arrow.offsetWidth / 2 + 'px';
	    }
	  }
	  /**
	   * Show the menu
	   */
	  ;

	  _proto.show = function show() {
	    _Flyout.prototype.show.call(this);

	    this.el.setAttribute('aria-expanded', this.shown);
	    this.menu.setAttribute('aria-modal', true);
	    this.closeBtn.focus();
	    this.el.dispatchEvent(this[EventName$6.ON_SHOW]);
	  }
	  /**
	   * Hide the menu
	   * @param {string} [opts={}] - Options for hiding the menu
	   * @param {boolean} [opts.setFocus=true] - Whether or not the focus should be set on the toggling element; defaults to true
	   */
	  ;

	  _proto.hide = function hide(opts) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    _Flyout.prototype.hide.call(this, opts);

	    this.el.setAttribute('aria-expanded', this.shown);
	    this.menu.removeAttribute('aria-modal');
	    this.el.dispatchEvent(this[EventName$6.ON_HIDE]);
	  }
	  /**
	   * Update the popover instance
	   * @param {string} [opts={}] - Options for updating the instance
	   */
	  ;

	  _proto.update = function update(opts) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    var flyoutOpts = Object.assign({}, opts); // Refresh the list of tabbable elements within the menu

	    this.tabbableElements = Util.getTabbableElements(this.menu); // Enforce popover's default alignment as fallback

	    if (opts.alignment) {
	      flyoutOpts.alignment = _getAlignment(opts.alignment, Default$1.ALIGNMENT);
	    }

	    _Flyout.prototype.update.call(this, flyoutOpts); // Create and dispatch custom event


	    this[EventName$6.ON_UPDATE] = new CustomEvent(EventName$6.ON_UPDATE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$6.ON_UPDATE]);
	  }
	  /**
	   * Remove the popover instance
	   */
	  ;

	  _proto.remove = function remove() {
	    // Remove event handlers, observers, etc.
	    Util.removeEvents(this.events); // Remove this reference from the array of instances

	    var index = popovers.indexOf(this);
	    popovers.splice(index, 1); // Create and dispatch custom event

	    this[EventName$6.ON_REMOVE] = new CustomEvent(EventName$6.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$6.ON_REMOVE]);
	  }
	  /**
	   * Get an array of popover instances
	   * @returns {Object[]} Array of popover instances
	   */
	  ;

	  Popover.getInstances = function getInstances() {
	    return popovers;
	  };

	  return Popover;
	}(Flyout);

	var global$1 = global$m;

	var globalIsFinite = global$1.isFinite;

	// `Number.isFinite` method
	// https://tc39.es/ecma262/#sec-number.isfinite
	// eslint-disable-next-line es/no-number-isfinite -- safe
	var numberIsFinite$1 = Number.isFinite || function isFinite(it) {
	  return typeof it == 'number' && globalIsFinite(it);
	};

	var $ = _export;
	var numberIsFinite = numberIsFinite$1;

	// `Number.isFinite` method
	// https://tc39.es/ecma262/#sec-number.isfinite
	$({ target: 'Number', stat: true }, { isFinite: numberIsFinite });

	var Selector$5 = {
	  DATA_MOUNT: '[data-position="positioner"]'
	};
	var EventName$5 = {
	  ON_UPDATE: 'onUpdate',
	  ON_REMOVE: 'onRemove'
	};
	var BreakpointRank = {
	  default: 0,
	  xs: 0,
	  sm: 1,
	  md: 2,
	  lg: 3,
	  xl: 4
	};
	var RankedBreakpoints = ['default', 'sm', 'md', 'lg', 'xl'];
	var breakpointWatchers = {};
	var positionerInstances = [];

	function _readBreakpointFromDataAttr(breakpointName) {
	  if (this.el.getAttribute('data-position-top-' + breakpointName) && this.el.getAttribute('data-position-left-' + breakpointName)) {
	    this.positionMap[breakpointName] = {};
	    this.positionMap[breakpointName].top = parseFloat(this.el.getAttribute('data-position-top-' + breakpointName));
	    this.positionMap[breakpointName].left = parseFloat(this.el.getAttribute('data-position-left-' + breakpointName));
	  }
	}

	function _onBreakpointChange() {
	  var detectedViewportName = Util.detectViewport();
	  var i;
	  var viewportName;

	  for (i = BreakpointRank[detectedViewportName]; i >= 0; i--) {
	    viewportName = RankedBreakpoints[i]; // prevent out of bounds if doing on tail end, translate 'xs' to 'default'

	    if (this.positionMap[viewportName] && Number.isFinite(this.positionMap[viewportName].top) && Number.isFinite(this.positionMap[viewportName].left)) {
	      this.el.style.top = this.positionMap[viewportName].top + '%';
	      this.el.style.left = this.positionMap[viewportName].left + '%';
	      return; // done setting position
	    }
	  } // No default/xs case, remove inline styles


	  Positioner.clearInlinePosition(this.el);
	}

	var Positioner = /*#__PURE__*/function () {
	  /**
	   * Create a Positioner, which positions an absolutely or relatively positioned element by percentages
	   * @param {Object} opts - The Positioner options
	   * @param {Node} opts.el - The element that is positioned
	   * @param {Object} [opts.positionMap] - A map of positions and breakpoints, see README for details
	   */
	  function Positioner(opts) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    this.el = opts.el;
	    this.positionMap = {}; // see if there are any positions to read from data- attributes

	    var i;

	    for (i = 0; i < RankedBreakpoints.length; i++) {
	      _readBreakpointFromDataAttr.call(this, RankedBreakpoints[i]);
	    } // object passed by JS takes precedence


	    if (opts.positionMap) {
	      Object.assign(this.positionMap, opts.positionMap); // position info passed in here takes precedence
	    } // If this is the first Positioner instance on the page, set up the breakpoint watchers


	    if (!breakpointWatchers.sm) {
	      breakpointWatchers.sm = window.matchMedia('screen and (min-width: ' + ViewPort.SM + 'px)');
	      breakpointWatchers.md = window.matchMedia('screen and (min-width: ' + ViewPort.MD + 'px)');
	      breakpointWatchers.lg = window.matchMedia('screen and (min-width: ' + ViewPort.LG + 'px)');
	      breakpointWatchers.xl = window.matchMedia('screen and (min-width: ' + ViewPort.XL + 'px)');
	    } // Add event handlers


	    this.events = [{
	      el: breakpointWatchers.sm,
	      type: 'change',
	      handler: _onBreakpointChange.bind(this)
	    }, {
	      el: breakpointWatchers.md,
	      type: 'change',
	      handler: _onBreakpointChange.bind(this)
	    }, {
	      el: breakpointWatchers.lg,
	      type: 'change',
	      handler: _onBreakpointChange.bind(this)
	    }, {
	      el: breakpointWatchers.xl,
	      type: 'change',
	      handler: _onBreakpointChange.bind(this)
	    }];
	    Util.addEvents(this.events); // push to instances list

	    positionerInstances.push(this); // check poisition initially

	    _onBreakpointChange.call(this);
	  }

	  var _proto = Positioner.prototype;

	  _proto.update = function update(opts) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    if (opts.positionMap) {
	      Object.assign(this.positionMap, opts.positionMap);
	    }

	    _onBreakpointChange.call(this); // Create and dispatch custom event


	    this[EventName$5.ON_UPDATE] = new CustomEvent(EventName$5.ON_UPDATE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$5.ON_UPDATE]);
	  };

	  _proto.remove = function remove() {
	    Util.removeEvents(this.events);
	    var index = positionerInstances.indexOf(this);
	    positionerInstances.splice(index, 1); // Create and dispatch custom event

	    this[EventName$5.ON_REMOVE] = new CustomEvent(EventName$5.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$5.ON_REMOVE]);
	  };

	  Positioner.getInstances = function getInstances() {
	    return positionerInstances;
	  };

	  Positioner.setPosition = function setPosition(node, xPos, yPos, unit) {
	    if (xPos === void 0) {
	      xPos = 0;
	    }

	    if (yPos === void 0) {
	      yPos = 0;
	    }

	    if (unit === void 0) {
	      unit = '';
	    }

	    if (node && node.style) {
	      node.style.left = xPos + unit;
	      node.style.top = yPos + unit;
	      return node;
	    }
	  };

	  Positioner.clearInlinePosition = function clearInlinePosition(node) {
	    if (node && node.style) {
	      node.style.left = null;
	      node.style.top = null;
	      node.style.bottom = null;
	      node.style.top = null;
	      return node;
	    }
	  };

	  return Positioner;
	}();

	var Selector$4 = {
	  DATA_MOUNT: '[data-mount="range"]',
	  MAXTEXT: 'maxtext',
	  MINTEXT: 'mintext',
	  VALUETEXT: 'valuetext'
	};
	var ClassName$4 = {
	  TOOLTIP: 'custom-range-tooltip',
	  DISABLED: 'disabled'
	};
	var EventName$4 = {
	  ON_UPDATE: 'onUpdate',
	  ON_REMOVE: 'onRemove',
	  CHANGE: 'change',
	  INPUT: 'input',
	  POINTERMOVE: 'pointermove',
	  RESIZE: 'resize'
	};
	var ranges = [];
	/**
	 * Private functions.
	 */

	function _getValuetext(value) {
	  if (value === this.min && this.valueTextTemplates[Selector$4.MINTEXT]) {
	    return Util.interpolateString(this.valueTextTemplates[Selector$4.MINTEXT], {
	      value: value
	    });
	  }

	  if (value === this.max && this.valueTextTemplates[Selector$4.MAXTEXT]) {
	    return Util.interpolateString(this.valueTextTemplates[Selector$4.MAXTEXT], {
	      value: value
	    });
	  }

	  if (this.valueTextTemplates[Selector$4.VALUETEXT]) {
	    return Util.interpolateString(this.valueTextTemplates[Selector$4.VALUETEXT], {
	      value: value
	    });
	  }

	  return value;
	}

	function _setValuetext() {
	  this.el.setAttribute('aria-valuetext', this.getValuetext(this.el.value));
	}

	function _getValueTextTemplates() {
	  var templates = {};
	  templates[Selector$4.VALUETEXT] = this.el.dataset[Selector$4.VALUETEXT] || null;
	  templates[Selector$4.MINTEXT] = this.el.dataset[Selector$4.MINTEXT] || null;
	  templates[Selector$4.MAXTEXT] = this.el.dataset[Selector$4.MAXTEXT] || null;
	  return templates;
	}

	function _createTooltip() {
	  var wrapper = document.createElement('div');
	  var span = document.createElement('span');
	  wrapper.classList.add(ClassName$4.TOOLTIP);
	  wrapper.setAttribute('aria-hidden', 'true');
	  wrapper.append(span);
	  this.el.before(wrapper);
	  return {
	    wrapper: wrapper,
	    span: span
	  };
	}

	function _updateTooltip() {
	  var ratio = (this.el.value - this.min) / (this.max - this.min);
	  var thumbWidth = 24; // Shadow DOM

	  var inputWidth = this.el.offsetWidth;
	  this.tooltip.span.textContent = this.el.value;
	  var spanWidth = this.tooltip.span.offsetWidth;
	  var offset = ratio * (inputWidth - thumbWidth) - spanWidth / 2 + thumbWidth / 2;
	  var direction = Util.isBiDirectional() ? 'right' : 'left';
	  this.tooltip.span.style[direction] = offset + "px";

	  if (this.el.hasAttribute('disabled')) {
	    this.el.parentElement.classList.add(ClassName$4.DISABLED);
	  } else {
	    this.el.parentElement.classList.remove(ClassName$4.DISABLED);
	  }
	}
	/**
	 * Class representing a range slider.
	 */


	var Range = /*#__PURE__*/function () {
	  /**
	   * Create the range slider.
	   * @param {Object} opts - The range options.
	   * @param {Node} opts.el - The range DOM node.
	   * @param {Function} [opts.onInput] - Function to override the range input handler.
	   * @param {Function} [opts.getValuetext] - Function that returns the aria-valuetext value for a particular range value.
	   * @param {Object} [opts.valueTextTemplates] - Object containing string templates for maxtext, mintext, and valuetext.
	   * @param {Object} [opts.tooltip] - Object containing references to two Nodes: the tooltip wrapper and span (text container).
	   */
	  function Range(opts) {
	    this.el = opts.el;
	    this.min = this.el.min || 0; // HTML default

	    this.max = this.el.max || 100; // HTML default

	    this.onInput = opts.onInput || _updateTooltip.bind(this);
	    this.getValuetext = opts.getValuetext || _getValuetext.bind(this);
	    this.valueTextTemplates = opts.valueTextTemplates || _getValueTextTemplates.call(this); // IE provides its own built-in tooltip

	    var isIE = Util.detectIE() && Util.detectIE() <= 11;
	    this.tooltip = isIE || opts.tooltip === null ? null : opts.tooltip || _createTooltip.call(this);

	    if (this.tooltip) {
	      // Perform initial tooltip setup
	      this.onInput(); // Add tooltip event handlers

	      this.tooltipEvents = {
	        inputEvent: {
	          el: this.el,
	          type: EventName$4.INPUT,
	          handler: this.onInput
	        },
	        changeEvent: {
	          el: this.el,
	          type: EventName$4.CHANGE,
	          handler: this.onInput
	        },
	        // Required for iOS/VoiceOver
	        windowEvent: {
	          el: window,
	          type: EventName$4.RESIZE,
	          handler: throttle(100, this.onInput)
	        }
	      };
	      Util.addEvents(Object.values(this.tooltipEvents));
	    } // Set the initial aria-valuetext


	    _setValuetext.call(this); // Both change and pointermove are required to update aria-valuetext properly in various SR/device combos
	    // See https://github.com/w3c/aria-practices/pull/1757


	    this.valueTextEvents = {
	      changeEvent: {
	        el: this.el,
	        type: EventName$4.CHANGE,
	        handler: _setValuetext.bind(this)
	      },
	      pointerEvent: {
	        el: this.el,
	        type: EventName$4.POINTERMOVE,
	        handler: throttle(250, _setValuetext.bind(this))
	      }
	    };
	    Util.addEvents(Object.values(this.valueTextEvents));
	    ranges.push(this);
	  }
	  /**
	   * Update the range.
	   * @param {Object} [opts] - The range options.
	   * @param {Function} [opts.onInput] - Function to override the range input handler.
	   * @param {Function} [opts.getValuetext] - Function that returns the aria-valuetext value for a particular range value.
	   * @param {Object} [opts.valueTextTemplates] - Object containing string templates for maxtext, mintext, and valuetext.
	   * @param {Object} [opts.tooltip] - Object containing references to two Nodes: the tooltip wrapper and span (text container).
	   */


	  var _proto = Range.prototype;

	  _proto.update = function update(opts) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    // Only update the input event handler if the tooltip exists
	    if (opts.onInput && this.tooltip) {
	      Util.removeEvents(Object.values(this.tooltipEvents));
	      this.onInput = opts.onInput;
	      this.tooltipEvents = {
	        inputEvent: {
	          el: this.el,
	          type: EventName$4.INPUT,
	          handler: this.onInput
	        },
	        changeEvent: {
	          el: this.el,
	          type: EventName$4.CHANGE,
	          handler: this.onInput
	        },
	        // Required for iOS/VoiceOver
	        windowEvent: {
	          el: window,
	          type: EventName$4.RESIZE,
	          handler: throttle(100, this.onInput)
	        }
	      };
	      Util.addEvents(Object.values(this.tooltipEvents));
	    }

	    if (opts.getValuetext) {
	      this.getValuetext = opts.getValuetext;
	    }

	    if (opts.valueTextTemplates) {
	      this.valueTextTemplates = opts.valueTextTemplates;
	    }

	    if (opts.tooltip === null || opts.tooltip) {
	      if (opts.tooltip === null) {
	        // Remove the tooltip DOM node and event listeners
	        this.tooltip.wrapper.remove();
	        Util.removeEvents(Object.values(this.tooltipEvents));
	      }

	      this.tooltip = opts.tooltip;
	    }

	    if (this.tooltip) {
	      // Min and max may have changed, perform tooltip setup again
	      this.onInput();
	    } // Set the initial aria-valuetext


	    _setValuetext.call(this); // Create and dispatch custom event


	    this[EventName$4.ON_UPDATE] = new CustomEvent(EventName$4.ON_UPDATE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$4.ON_UPDATE]);
	  }
	  /**
	   * Remove the range.
	   */
	  ;

	  _proto.remove = function remove() {
	    Util.removeEvents(Object.values(this.valueTextEvents));

	    if (this.tooltip) {
	      Util.removeEvents(Object.values(this.tooltipEvents));
	    }

	    var index = ranges.indexOf(this);
	    ranges.splice(index, 1); // Create and dispatch custom event

	    this[EventName$4.ON_REMOVE] = new CustomEvent(EventName$4.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$4.ON_REMOVE]);
	  }
	  /**
	   * Get an array of range instances.
	   * @returns {Object[]} Array of range instances.
	   */
	  ;

	  Range.getInstances = function getInstances() {
	    return ranges;
	  };

	  return Range;
	}();

	var Selector$3 = {
	  TOGGLE: '.show-more-show-less-toggle',
	  ELLIPSIS: '.show-more-show-less-ellipsis',
	  TOGGLEABLE_CONTENT: '.show-more-show-less-toggleable-content',
	  DATA_MOUNT: '[data-mount="show-more-show-less"]'
	};
	var ClassName$3 = {
	  DISPLAY_NONE: 'd-none'
	};
	var EventName$3 = {
	  ON_HIDE: 'onHide',
	  ON_SHOW: 'onShow',
	  ON_REMOVE: 'onRemove',
	  ON_UPDATE: 'onUpdate'
	};
	var instances = [];

	function _elOnClick() {
	  this.toggle();
	} // Makes hidden content untabbable after hide()


	function _toggleableContentOnFocusOut(element) {
	  element.removeAttribute('tabindex');
	}

	var ShowMoreShowLess = /*#__PURE__*/function () {
	  /**
	   * Create a show-more-show-less component.
	   * @param {Object} opts - The show-more-show-less options.
	   * @param {Node} opts.el - The container element for content that will be hidden/shown.
	   * @returns {Object} show-more-show-less instance.
	   */
	  function ShowMoreShowLess(opts) {
	    /**
	     * Defines which variant should be instantiated.
	     */
	    if (opts.el.hasAttribute('data-count')) {
	      // eslint-disable-next-line no-constructor-return
	      return new ShowMoreShowLessMultiElement({
	        el: opts.el,
	        hideAfter: opts.el.getAttribute('data-count')
	      });
	    } // eslint-disable-next-line no-constructor-return


	    return new ShowMoreShowLessSingleElement({
	      el: opts.el
	    });
	  }
	  /**
	   * Return the number of instances.
	   * @returns {Object[]} an array of active instances.
	   */


	  ShowMoreShowLess.getInstances = function getInstances() {
	    return instances;
	  };

	  return ShowMoreShowLess;
	}();

	var ShowMoreShowLessBase = /*#__PURE__*/function () {
	  /**
	   * Defines a show-more-show-less base component.
	   * @param {Object} opts - The show-more-show-less options.
	   */
	  function ShowMoreShowLessBase(opts) {
	    /**
	     * The container element for content that will be hidden/shown.
	     */
	    this.el = opts.el;
	    /**
	     * The element bound with the toggle event handler.
	     */

	    this.control = this.el.querySelector(Selector$3.TOGGLE);
	    /**
	     * The control text values.
	     */

	    this.showMoreText = opts.showMoreText || this.control.textContent;
	    this.showLessText = opts.showLessText || this.control.getAttribute('data-show-less-text');
	    /**
	     * The optional control aria-label values.
	     */

	    if (this.control.hasAttribute('aria-label')) {
	      this.showMoreLabelText = this.control.getAttribute('aria-label');
	      this.showLessLabelText = opts.showLessAriaLabel || this.control.getAttribute('data-alternate-aria-label') || this.showLessText;
	    }
	    /**
	     * The element demarking shown and hidden content.
	     */


	    this.ellipsis = this.el.querySelector(Selector$3.ELLIPSIS);
	    this.shown = false;
	    /**
	     * Event binders.
	     */

	    this.events = [{
	      el: this.control,
	      type: 'click',
	      handler: _elOnClick.bind(this)
	    }];
	    /**
	     * Custom events to track component state.
	     */

	    this[EventName$3.ON_HIDE] = new CustomEvent(EventName$3.ON_HIDE, {
	      bubbles: true,
	      cancelable: true
	    });
	    this[EventName$3.ON_SHOW] = new CustomEvent(EventName$3.ON_SHOW, {
	      bubbles: true,
	      cancelable: true
	    });
	    instances.push(this);
	  }
	  /**
	   * Focus new element when show and hide.
	   * @param {Node} element. The element to focus.
	   */


	  var _proto = ShowMoreShowLessBase.prototype;

	  _proto.setFocusToElement = function setFocusToElement(element) {
	    element.setAttribute('tabindex', 0);
	    document.activeElement.blur();
	    element.focus();
	  }
	  /**
	   * Show toggleable content.
	   */
	  ;

	  _proto.show = function show() {
	    this.shown = true;

	    if (this.ellipsis) {
	      this.ellipsis.classList.add(ClassName$3.DISPLAY_NONE);
	    }

	    this.control.setAttribute('aria-expanded', true);
	    this.control.textContent = this.showLessText;

	    if (this.control.hasAttribute('aria-label')) {
	      this.control.setAttribute('aria-label', this.showLessLabelText);
	    }

	    this.control.dispatchEvent(this[EventName$3.ON_SHOW]);
	  }
	  /**
	   * Hide toggleable content.
	   */
	  ;

	  _proto.hide = function hide() {
	    this.shown = false;

	    if (this.ellipsis) {
	      this.ellipsis.classList.remove(ClassName$3.DISPLAY_NONE);
	    }

	    this.control.setAttribute('aria-expanded', false);

	    if (this.control.hasAttribute('aria-label')) {
	      this.control.setAttribute('aria-label', this.showMoreLabelText);
	    }

	    this.control.textContent = this.showMoreText;
	    this.control.dispatchEvent(this[EventName$3.ON_HIDE]);
	  }
	  /**
	   * Event handler for control click event.
	   */
	  ;

	  _proto.toggle = function toggle() {
	    if (this.shown) {
	      this.hide();
	    } else {
	      this.show();
	    }
	  }
	  /**
	   * Removes active instance of component.
	   */
	  ;

	  _proto.remove = function remove() {
	    Util.removeEvents(this.events); // Remove this reference from the array of instances.

	    var index = instances.indexOf(this);
	    instances.splice(index, 1); // Create and dispatch custom event

	    this[EventName$3.ON_REMOVE] = new CustomEvent(EventName$3.ON_REMOVE, {
	      bubbles: true
	    });
	    this.control.dispatchEvent(this[EventName$3.ON_REMOVE]);
	  };

	  return ShowMoreShowLessBase;
	}();

	var ShowMoreShowLessSingleElement = /*#__PURE__*/function (_ShowMoreShowLessBase) {
	  _inheritsLoose(ShowMoreShowLessSingleElement, _ShowMoreShowLessBase);

	  /**
	   * Create a single-element variant, inherits from ShowMoreShowLessBase.
	   *  @param {Object} opts - The show-more-show-less options.
	   */
	  function ShowMoreShowLessSingleElement(opts) {
	    var _this;

	    _this = _ShowMoreShowLessBase.call(this, opts) || this;
	    /**
	     * The content that will be shown/hidden.
	     */

	    _this.toggleableContent = _this.el.querySelector(Selector$3.TOGGLEABLE_CONTENT);

	    _this.events.push({
	      el: _this.toggleableContent,
	      type: 'focusout',
	      handler: _toggleableContentOnFocusOut.bind(null, _this.toggleableContent)
	    });

	    Util.addEvents(_this.events);

	    _this.toggleableContent.setAttribute('tabindex', -1);

	    _this.toggleableContent.classList.add(ClassName$3.DISPLAY_NONE);

	    return _this;
	  }
	  /**
	   * Show toggleable content.
	   */


	  var _proto2 = ShowMoreShowLessSingleElement.prototype;

	  _proto2.show = function show() {
	    _ShowMoreShowLessBase.prototype.show.call(this);

	    this.toggleableContent.classList.remove(ClassName$3.DISPLAY_NONE);

	    _ShowMoreShowLessBase.prototype.setFocusToElement.call(this, this.toggleableContent);
	  }
	  /**
	   * Hide toggleable content.
	   */
	  ;

	  _proto2.hide = function hide() {
	    _ShowMoreShowLessBase.prototype.hide.call(this);

	    this.toggleableContent.classList.add(ClassName$3.DISPLAY_NONE);
	    this.toggleableContent.setAttribute('tabindex', -1);
	  }
	  /**
	   * Updates component element if content changes dynamically.
	   * @param {Object} opts The options defined for the updated component.
	   */
	  ;

	  _proto2.update = function update(opts) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    var _self = opts._self || this;

	    if (_self.toggleableContent.innerHTML) {
	      _self.control.classList.remove(ClassName$3.DISPLAY_NONE);

	      _self.hide();
	    } else {
	      _self.control.classList.add(ClassName$3.DISPLAY_NONE);

	      _self.ellipsis.classList.add(ClassName$3.DISPLAY_NONE);
	    } // Create and dispatch custom event


	    _self[EventName$3.ON_UPDATE] = new CustomEvent(EventName$3.ON_UPDATE, {
	      bubbles: true
	    });

	    _self.el.dispatchEvent(_self[EventName$3.ON_UPDATE]);
	  };

	  return ShowMoreShowLessSingleElement;
	}(ShowMoreShowLessBase);

	var ShowMoreShowLessMultiElement = /*#__PURE__*/function (_ShowMoreShowLessBase2) {
	  _inheritsLoose(ShowMoreShowLessMultiElement, _ShowMoreShowLessBase2);

	  /**
	   * Create a multi-element variant, inherits from ShowMoreShowLessBase.
	   * @param {Object} opts - The show-more-show-less options.
	   * @param {Number} opts.hideAfter - The index of the element in the multi-element variant after which elements will be toggleable.
	   */
	  function ShowMoreShowLessMultiElement(opts) {
	    var _this2;

	    _this2 = _ShowMoreShowLessBase2.call(this, opts) || this;
	    _this2.hideAfter = opts.hideAfter || null;

	    _this2.setChildren();

	    var focusOuttarget = _this2.toggleableContent[0];

	    _this2.events.push({
	      el: _this2.toggleableContent[0],
	      type: 'focusout',
	      handler: _toggleableContentOnFocusOut.bind(null, focusOuttarget)
	    });

	    Util.addEvents(_this2.events); // Set attributes on html elements
	    // Tabindex set to -1 so content can be focused when shown.

	    _this2.toggleableContent[0].setAttribute('tabindex', -1); // Set default state to hidden.


	    _this2.toggleableContent.forEach(function (node) {
	      node.classList.add(ClassName$3.DISPLAY_NONE);
	    }); // Add mutation observers.


	    _this2.childObserver = new MutationObserver(function () {
	      _this2.update({
	        _self: _assertThisInitialized(_this2)
	      });
	    });

	    _this2.childObserver.observe(_this2.el.querySelector(Selector$3.TOGGLEABLE_CONTENT), {
	      childList: true,
	      subtree: true
	    });

	    return _this2;
	  }
	  /**
	   * Define visible and non-visible children in toggleable content based on data-count attribute passed to constructor.
	   */


	  var _proto3 = ShowMoreShowLessMultiElement.prototype;

	  _proto3.setChildren = function setChildren() {
	    this.visibleContent = this.el.querySelectorAll(Selector$3.TOGGLEABLE_CONTENT + ' > :nth-child(-n+' + (this.hideAfter - 1) + ')');
	    this.toggleableContent = this.el.querySelectorAll(Selector$3.TOGGLEABLE_CONTENT + ' > :nth-child(n+' + this.hideAfter + ')');
	  }
	  /**
	   * Show toggleable child elements.
	   */
	  ;

	  _proto3.show = function show() {
	    _ShowMoreShowLessBase2.prototype.show.call(this);

	    this.toggleableContent.forEach(function (node) {
	      node.classList.remove(ClassName$3.DISPLAY_NONE);
	    });

	    if (this.toggleableContent) {
	      _ShowMoreShowLessBase2.prototype.setFocusToElement.call(this, this.toggleableContent[0]);
	    }
	  }
	  /**
	   * Hide toggleable child elements.
	   */
	  ;

	  _proto3.hide = function hide() {
	    _ShowMoreShowLessBase2.prototype.hide.call(this);

	    if (this.toggleableContent.length > 0) {
	      this.toggleableContent.forEach(function (node) {
	        node.classList.add(ClassName$3.DISPLAY_NONE);
	      });
	      this.toggleableContent[0].setAttribute('tabindex', -1);
	    }
	  }
	  /**
	   * Updates the visible and nonvisible children if elements are added/removed dynamically.
	   * @param {Object} opts the options for the updated component.
	   */
	  ;

	  _proto3.update = function update(opts) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    var _self = opts._self || this;

	    _self.setChildren();

	    _self.visibleContent.forEach(function (node) {
	      if (node.classList.contains(ClassName$3.DISPLAY_NONE)) {
	        node.classList.remove(ClassName$3.DISPLAY_NONE);
	      }

	      if (node.hasAttribute('tabindex')) {
	        node.removeAttribute('tabindex');
	      }
	    });

	    if (_self.toggleableContent.length > 0) {
	      _self.hide();
	    }

	    if (_self.toggleableContent.length > 1) {
	      var hasTabIndex = false;

	      _self.toggleableContent.forEach(function (node) {
	        if (hasTabIndex) {
	          node.removeAttribute('tabindex');
	        }

	        if (node.hasAttribute('tabindex')) {
	          hasTabIndex = true;
	        }
	      });
	    }

	    if (_self.toggleableContent.length === 0 && !_self.el.classList.contains(ClassName$3.DISPLAY_NONE)) {
	      _self.el.classList.add(ClassName$3.DISPLAY_NONE);
	    }

	    if (_self.toggleableContent.length > 0 && _self.el.classList.contains(ClassName$3.DISPLAY_NONE)) {
	      _self.el.classList.remove(ClassName$3.DISPLAY_NONE);
	    } // Create and dispatch custom event


	    _self[EventName$3.ON_UPDATE] = new CustomEvent(EventName$3.ON_UPDATE, {
	      bubbles: true
	    });

	    _self.el.dispatchEvent(_self[EventName$3.ON_UPDATE]);
	  }
	  /**
	   * Remove instance of ShowMoreShowLess.
	   */
	  ;

	  _proto3.remove = function remove() {
	    _ShowMoreShowLessBase2.prototype.remove.call(this);

	    this.childObserver.disconnect();
	  };

	  return ShowMoreShowLessMultiElement;
	}(ShowMoreShowLessBase);

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	var tabs = [];
	var EventName$2 = {
	  HIDE: 'onHide',
	  HIDDEN: 'onHidden',
	  SHOW: 'onShow',
	  SHOWN: 'onShown',
	  CLICK_DATA_API: 'click',
	  KEYDOWN_DATA_API: 'keydown',
	  ON_REMOVE: 'onRemove',
	  POP_STATE: 'popstate'
	};
	var Attribute$1 = {
	  HIDDEN: 'hidden'
	};
	var ClassName$2 = {
	  DROPDOWN_MENU: 'dropdown-menu',
	  ACTIVE: 'active',
	  DISABLED: 'disabled',
	  FADE: 'fade',
	  SHOW: 'show'
	};
	var Selector$2 = {
	  NAV_LIST_GROUP: '.nav, .list-group, .tab-group',
	  ACTIVE: '.active',
	  ACTIVE_UL: 'li .active',
	  DATA_MOUNT: '[data-mount="tab"]',
	  BACK_TO_TABS: '[data-focus="back-to-tabs"]',
	  ROLE_TAB: '[role="tab"]',
	  TAB_CONTENT: '.tab-content, .tab-panel-group'
	}; // Private

	/**
	 * Activate tab.
	 * @param {HTMLElement} element - Tab element.
	 * @param {HTMLElement} container - Tab container element.
	 * @param {Function} callback - Function to run after transition ends.
	 * @this Tab
	 */

	function _activate(element, container, callback) {
	  var _this = this;

	  var activeElements;

	  if (container && (container.nodeName === 'UL' || container.nodeName === 'OL')) {
	    activeElements = container.querySelector(Selector$2.ACTIVE_UL);
	  } else {
	    // make sure that any selected tab panel .active element is a direct descendant of the tab panel container
	    activeElements = [].slice.call(container.children).filter(function (e) {
	      return e.classList.contains(ClassName$2.ACTIVE);
	    });
	  }

	  var active = activeElements[0];
	  var isTransitioning = callback && active && active.classList.contains(ClassName$2.FADE);

	  var complete = function complete() {
	    return _transitionComplete.call(_this, element, active, callback);
	  };

	  if (active && isTransitioning) {
	    var transitionDuration = Util.getTransitionDurationFromElement(active);
	    active.classList.remove(ClassName$2.SHOW);
	    active.addEventListener(Util.TRANSITION_END, complete, {
	      once: true
	    });
	    Util.emulateTransitionEnd(active, transitionDuration);
	  } else {
	    complete();
	  }
	}
	/**
	 * Callback for completed tab transitions.
	 * @param {HTMLElement} element - Newly selected tab element.
	 * @param {HTMLElement} active - Previously active tab element.
	 * @param {Function} callback - Function to run after transition ends.
	 * @this Tab
	 */


	function _transitionComplete(element, active, callback) {
	  if (active) {
	    active.classList.remove(ClassName$2.ACTIVE);

	    if (active.getAttribute('role') === 'tab') {
	      active.setAttribute('aria-selected', 'false');
	      active.setAttribute('tabindex', '-1');
	    } else if (active.getAttribute('role') === 'tabpanel') {
	      active.hidden = true;
	    }
	  }

	  element.classList.add(ClassName$2.ACTIVE);

	  if (element.getAttribute('role') === 'tab') {
	    element.setAttribute('aria-selected', 'true');
	    element.setAttribute('tabindex', '0');
	  } else if (element.getAttribute('role') === 'tabpanel') {
	    element.removeAttribute(Attribute$1.HIDDEN); // Scroll back to top of panel if necessary

	    var activePanelTop = element.getBoundingClientRect().top;
	    var documentElementNode = document.documentElement;
	    var documentScrollPaddingTop = 0;

	    if (documentElementNode.style.scrollPaddingTop) {
	      documentScrollPaddingTop = parseInt(documentElementNode.style.scrollPaddingTop, 10);
	    }

	    if (activePanelTop < 0) {
	      var scrollOffset = activePanelTop - documentElementNode.getBoundingClientRect().top - documentScrollPaddingTop;
	      window.scrollTo(0, scrollOffset);
	    }

	    if (this.backToTabs && this.backToTabs instanceof HTMLAnchorElement) {
	      var _this$backToTabs$focu;

	      (_this$backToTabs$focu = this.backToTabs.focusControls) == null ? void 0 : _this$backToTabs$focu.remove();
	      this.backToTabs.href = "#" + element.id + "-tab";
	      this.backToTabs.focusControls = new Util.FocusControls({
	        el: this.backToTabs
	      });
	    }
	  }

	  Util.reflow(element);

	  if (element.classList.contains(ClassName$2.FADE)) {
	    element.classList.add(ClassName$2.SHOW);
	  }

	  if (callback) {
	    callback();
	  }
	}
	/**
	 * Callback function for all key events on tabs.
	 * Facilitates left <-> right focus movement between tabs recommended by W3C: https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html
	 * @param {KeyboardEvent} event - Keyboard event.
	 * @this Tab
	 */


	function _onKeycodeEvent(event) {
	  var keycode = Util.getKeyCode(event);

	  switch (keycode) {
	    case Util.keyCodes.SPACE:
	    case Util.keyCodes.ENTER:
	      event.preventDefault();
	      this.show(event);
	      break;

	    case Util.keyCodes.ARROW_LEFT:
	      if (this.isRTL) {
	        _onKeycodeRight.call(this);
	      } else {
	        _onKeycodeLeft.call(this);
	      }

	      break;

	    case Util.keyCodes.ARROW_RIGHT:
	      if (this.isRTL) {
	        _onKeycodeLeft.call(this);
	      } else {
	        _onKeycodeRight.call(this);
	      }

	      break;
	  }
	}
	/**
	 * Callback function for arrow-left key.
	 * @this Tab
	 */


	function _onKeycodeLeft() {
	  if (this.tabIndex === 0) {
	    return;
	  }

	  this.listNodeList[this.tabIndex - 1].focus();
	}
	/**
	 * Callback function for arrow-right key.
	 * @this Tab
	 */


	function _onKeycodeRight() {
	  if (this.tabIndex === this.listNodeList.length - 1) {
	    return;
	  }

	  this.listNodeList[this.tabIndex + 1].focus();
	}

	function _onPopState() {
	  var hash = window.location.hash; // Check if hash matches the id of the tab panel or a tab panel child and show.
	  // If no hash assume the default Tab panel should be shown.

	  if (hash) {
	    if (hash === "#" + this.tabPanel.id) {
	      this.show();
	      this.el.scrollIntoView(true);
	    } else {
	      var tabPanelChild = this.tabPanel.querySelector("[id=\"" + hash.slice(1) + "\"]");

	      if (tabPanelChild) {
	        this.show();
	        this.tabContent.addEventListener(Util.TRANSITION_END, function () {
	          tabPanelChild.scrollIntoView(true);
	        }, {
	          once: true
	        });
	      }
	    }
	  } else if (this.tabIndex === this.defaultTabIndex) {
	    this.show();
	  }
	}
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */


	var Tab = /*#__PURE__*/function () {
	  /**
	   * Create a tab instance.
	   * @param {Object} opts - Tab options.
	   * @param {HTMLElement} opts.el - Tab element.
	   * @param {Boolean} [opts.addUrlToHistory=false] - Use pushtate instead of replaceState, defaults to false.
	   * @param {Number} [opts.defaultTabIndex=0] - Index of default tab in list group. Defaults to first tab with class active or 0.
	   */
	  function Tab(_ref) {
	    var el = _ref.el,
	        _ref$addUrlToHistory = _ref.addUrlToHistory,
	        addUrlToHistory = _ref$addUrlToHistory === void 0 ? false : _ref$addUrlToHistory,
	        _ref$defaultTabIndex = _ref.defaultTabIndex,
	        defaultTabIndex = _ref$defaultTabIndex === void 0 ? 0 : _ref$defaultTabIndex;
	    this.el = el;
	    this.listGroup = this.el.closest(Selector$2.NAV_LIST_GROUP);
	    this.targetSelector = Util.getSelectorFromElement(this.el);
	    this.tabPanel = document.querySelector(this.targetSelector);
	    this.tabContent = this.tabPanel.closest(Selector$2.TAB_CONTENT);
	    this.isRTL = document.dir === 'rtl';
	    this.backToTabs = [].concat(Array.from(this.tabContent.children), Array.from(this.tabContent.parentNode.children)).find(function (el) {
	      return el.dataset.focus === 'back-to-tabs';
	    }); // set back to tab href to active tab's id

	    if (this.el.classList.contains(ClassName$2.ACTIVE) && this.backToTabs && this.backToTabs instanceof HTMLAnchorElement) {
	      this.backToTabs.href = "#" + this.el.id;
	      this.backToTabs.focusControls = new Util.FocusControls({
	        el: this.backToTabs
	      });
	    } // prevents error if tab is not within a list group


	    if (this.listGroup) {
	      this.listNodeList = this.listGroup.querySelectorAll(Selector$2.ROLE_TAB) || [];
	      this.nodeListArray = [].slice.call(this.listNodeList);
	      this.tabIndex = this.nodeListArray.indexOf(this.el);
	      this.addUrlToHistory = addUrlToHistory || this.listGroup.dataset.addUrlToHistory !== undefined;
	      var activeTab = this.listGroup.querySelector(Selector$2.ACTIVE);
	      var activeIndex = this.nodeListArray.indexOf(activeTab) > -1 ? this.nodeListArray.indexOf(activeTab) : null;
	      this.defaultTabIndex = defaultTabIndex || activeIndex || 0;
	    } // enable deep linking


	    _onPopState.call(this); // attach event listeners


	    this.events = [{
	      el: this.el,
	      type: EventName$2.CLICK_DATA_API,
	      handler: this.show.bind(this)
	    }, {
	      el: this.el,
	      type: EventName$2.KEYDOWN_DATA_API,
	      handler: _onKeycodeEvent.bind(this)
	    }, {
	      el: window,
	      type: EventName$2.POP_STATE,
	      handler: _onPopState.bind(this)
	    }]; // add event listeners

	    Util.addEvents(this.events);
	    tabs.push(this);
	  } // Public

	  /**
	   * Shows a tab panel based on the tab clicked and hides other panels.
	   * @param {Event} [event] - Event trigger.
	   * @this Tab
	   */


	  var _proto = Tab.prototype;

	  _proto.show = function show(event) {
	    var _this2 = this;

	    if (event) {
	      event.preventDefault();
	    }

	    var hasParentEl = this.el.parentNode && this.el.parentNode.nodeType === Node.ELEMENT_NODE;
	    var isActive = this.el.classList.contains(ClassName$2.ACTIVE);
	    var isDisabled = this.el.classList.contains(ClassName$2.DISABLED);

	    if (hasParentEl && isActive || isDisabled) {
	      return;
	    }

	    var target = this.tabPanel;
	    var previous;
	    var listElement = this.listGroup || this.el.closest(Selector$2.NAV_LIST_GROUP);

	    if (listElement) {
	      var isList = listElement.nodeName === 'UL' || listElement.nodeName === 'OL';
	      var itemSelector = isList ? Selector$2.ACTIVE_UL : Selector$2.ACTIVE;
	      previous = this.el.parentNode.querySelector(itemSelector);
	    }

	    var hideEvent = new CustomEvent(EventName$2.HIDE, {
	      detail: {
	        relatedTarget: this.el
	      }
	    });
	    var showEvent = new CustomEvent(EventName$2.SHOW, {
	      detail: {
	        relatedTarget: previous
	      }
	    });

	    if (previous) {
	      previous.dispatchEvent(hideEvent);
	    }

	    this.el.dispatchEvent(showEvent);

	    if (showEvent.defaultPrevented || hideEvent.defaultPrevented) {
	      return;
	    }

	    _activate.call(this, this.el, listElement);

	    var complete = function complete() {
	      var hiddenEvent = new CustomEvent(EventName$2.HIDDEN, {
	        detail: {
	          relatedTarget: _this2.el
	        }
	      });
	      var shownEvent = new CustomEvent(EventName$2.SHOWN, {
	        detail: {
	          relatedTarget: previous
	        }
	      });

	      if (previous) {
	        previous.dispatchEvent(hiddenEvent);
	      }

	      _this2.el.dispatchEvent(shownEvent);

	      var hash = window.location.hash;
	      var url = "#" + _this2.tabPanel.id;
	      var _document = document,
	          title = _document.title;
	      var state = window.history.state;
	      var noHashAndNotOnDefaultTab = !hash && _this2.tabIndex !== _this2.defaultTabIndex;
	      var notChild = hash && !_this2.tabPanel.querySelector(hash);
	      var notSelf = hash !== url;

	      if (noHashAndNotOnDefaultTab || notChild && notSelf) {
	        if (_this2.addUrlToHistory) {
	          window.history.pushState(state, title, url);
	        } else {
	          window.history.replaceState(state, title, url);
	        }
	      }
	    };

	    if (target) {
	      _activate.call(this, target, target.parentNode, complete);
	    } else {
	      complete();
	    }
	  }
	  /**
	   * Remove event handlers.
	   * @this Tab
	   */
	  ;

	  _proto.remove = function remove() {
	    Util.removeEvents(this.events); // remove this reference from array of instances

	    var index = tabs.indexOf(this);
	    tabs.splice(index, 1); // Create and dispatch custom event

	    this[EventName$2.ON_REMOVE] = new CustomEvent(EventName$2.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$2.ON_REMOVE]);
	  }
	  /**
	   * Get instances.
	   * @returns {Tab[]} Array of tab instances.
	   */
	  ;

	  Tab.getInstances = function getInstances() {
	    return tabs;
	  };

	  return Tab;
	}();

	var tabSliders = [];
	var EventName$1 = {
	  CLICK_DATA_API: 'click',
	  RESIZE_DATA_API: 'resize',
	  FOCUS_DATA_API: 'focus',
	  SCROLL_DATA_API: 'scroll',
	  ON_SCROLL: 'onScroll',
	  ON_REMOVE: 'onRemove'
	};
	var Direction = {
	  LEFT: 'left',
	  RIGHT: 'right'
	};
	var ClassName$1 = {
	  ACTIVE: 'active',
	  ARROWS: 'tab-arrows',
	  ARROW_PREV: 'arrow-prev',
	  ARROW_NEXT: 'arrow-next',
	  TAB_OVERFLOW: 'tab-overflow',
	  TAB_WINDOW: 'tab-window',
	  TAB_GROUP: 'tab-group',
	  JUSTIFY_CENTER: 'justify-content-center',
	  MOBILE_ARROWS: 'mobile-arrows',
	  IMAGE_TAB: 'tab-image',
	  IMAGE_TAB_LABEL: 'tab-image-label'
	};
	var Selector$1 = {
	  ACTIVE: "." + ClassName$1.ACTIVE,
	  ARROWS: "." + ClassName$1.ARROWS,
	  ARROW_PREV: "." + ClassName$1.ARROW_PREV,
	  ARROW_NEXT: "." + ClassName$1.ARROW_NEXT,
	  TAB_OVERFLOW: "." + ClassName$1.TAB_OVERFLOW,
	  TAB_WINDOW: "." + ClassName$1.TAB_WINDOW,
	  TAB_GROUP: "." + ClassName$1.TAB_GROUP,
	  DATA_MOUNT: '[data-mount="tab-slider"]',
	  IMAGE_TAB: "." + ClassName$1.IMAGE_TAB,
	  IMAGE_TAB_LABEL: "." + ClassName$1.IMAGE_TAB_LABEL
	};
	var Attribute = {
	  DATA_DISABLE_SCROLL_INTO_VIEW: 'data-disable-scroll-into-view'
	};
	/**
	 * Private functions.
	 */

	/**
	 * Helper function to check if single tab element is within tab window.
	 * @param {HTMLElement} tab - Single tab element.
	 * @param {HTMLElement} tabListWindow - Tab window.
	 * @return {boolean} Returns true if the tab element is visible within the tab window.
	 */

	function _inTabWindow(tab, tabListWindow) {
	  var tabBounds = tab.getBoundingClientRect();
	  var tabListWindowBounds = tabListWindow.getBoundingClientRect();
	  return Math.ceil(tabBounds.left) >= Math.ceil(tabListWindowBounds.left) && Math.ceil(tabBounds.right) < Math.ceil(tabListWindowBounds.right);
	}
	/**
	 * Hide and/or show arrows dependent on visible tabs.
	 * @this TabSlider
	 */


	function _showHideArrow() {
	  var tabListWindow = this.el;
	  var scrollLeftVal = this.scrollElement.scrollLeft;
	  var arrowTarget1 = this.isRTL ? this.arrowNext : this.arrowPrev;
	  var arrowTarget2 = this.isRTL ? this.arrowPrev : this.arrowNext; // for image tabs, match arrows height to image height

	  var imageTab = tabListWindow.querySelector(Selector$1.IMAGE_TAB); // only need one; all are same height w/ flex styles

	  if (imageTab) {
	    imagesLoaded(tabListWindow, function () {
	      var arrowTargetHeight = imageTab.offsetHeight - (imageTab.querySelector(Selector$1.IMAGE_TAB_LABEL).offsetHeight || 0);
	      arrowTarget1.style.height = arrowTargetHeight + "px";
	      arrowTarget2.style.height = arrowTargetHeight + "px";
	    });
	  }

	  if (_inTabWindow(this.tabListItems[0], tabListWindow) || !this.isRTL && scrollLeftVal === 0) {
	    arrowTarget1.style.display = 'none';
	    arrowTarget2.style.display = 'block';
	  } else if (_inTabWindow(this.tabListItems[this.tabListItems.length - 1], tabListWindow)) {
	    arrowTarget1.style.display = 'block';
	    arrowTarget2.style.display = 'none';
	  } else {
	    this.arrowNext.style.display = 'block';
	    this.arrowPrev.style.display = 'block';
	  }
	}
	/**
	 * Keep focus on clicked arrow when slider moves.
	 * @this TabSlider
	 */


	function _onArrowFocus() {
	  var arrowTarget1 = this.isRTL ? this.arrowNext : this.arrowPrev;
	  var arrowTarget2 = this.isRTL ? this.arrowPrev : this.arrowNext;

	  if (this.arrowDirection === Direction.LEFT) {
	    if (arrowTarget1.style.display === 'block') {
	      arrowTarget1.focus();
	    } else {
	      arrowTarget2.focus();
	    }
	  } else if (this.arrowDirection === Direction.RIGHT) {
	    if (arrowTarget2.style.display === 'block') {
	      arrowTarget2.focus();
	    } else {
	      arrowTarget1.focus();
	    }
	  }
	}
	/**
	 * Event trigger on click to move the slide left or right depending on which arrow has been clicked.
	 * @param {Event} event - DOM event.
	 * @this TabSlider
	 */


	function _onArrowClick(event) {
	  event.preventDefault();
	  this.isArrowClicked = true;

	  _updateTabWindowWidth.call(this); // check for which arrow has been clicked


	  if (event.target.matches(Selector$1.ARROW_NEXT)) {
	    this.arrowDirection = this.isRTL ? Direction.LEFT : Direction.RIGHT;
	  } else {
	    this.arrowDirection = this.isRTL ? Direction.RIGHT : Direction.LEFT;
	  }

	  var slideToTarget = _getSlideToTarget.call(this);

	  if (!slideToTarget) {
	    return;
	  }

	  _setScrollLeft.call(this, slideToTarget);
	}
	/**
	 * Set left position of tab window to left position of target element.
	 * @param {HTMLElement} slideToTarget - Target element for position alignment.
	 * @this TabSlider
	 */


	function _setScrollLeft(slideToTarget) {
	  var arrowPadding = parseInt(getComputedStyle(this.arrowPrev).paddingLeft, 10) || parseInt(getComputedStyle(this.arrowNext).paddingLeft, 10);
	  var scrollElementLeft = Math.floor(this.scrollElement.scrollLeft);
	  var slideToTargetVal = Math.floor(_getBoundingRectValue.call(this, slideToTarget, 'left'));
	  var scrollElementVal = Math.floor(_getBoundingRectValue.call(this, this.scrollElement, 'left'));
	  var scrollAmount;

	  if (this.isRTL) {
	    if (this.arrowDirection === Direction.LEFT) {
	      scrollAmount = scrollElementLeft + slideToTargetVal + scrollElementVal + arrowPadding;
	    } else {
	      scrollAmount = scrollElementLeft - slideToTargetVal - scrollElementVal + arrowPadding;
	    }
	  } else {
	    scrollAmount = scrollElementLeft + slideToTargetVal - scrollElementVal - arrowPadding;
	  }

	  try {
	    this.scrollElement.scrollTo({
	      left: scrollAmount,
	      behavior: 'smooth'
	    });
	  } catch (_unused) {
	    this.scrollElement.scrollLeft = scrollAmount;
	  }
	}
	/**
	 * Get tab element for scroll target positioning.
	 * @return {Element|undefined} - element for which to set left position
	 * @this TabSlider
	 */


	function _getSlideToTarget() {
	  var tabTarget;
	  var i;
	  var widthRemaining;
	  var tabBounds;
	  var tabListWindowBounds = this.el.getBoundingClientRect();

	  if (this.arrowDirection === Direction.RIGHT) {
	    i = this.tabListItems.length;
	    /**
	     * Start at right most tab and decrement until
	     * the first tab not in the tab window is found
	     * */

	    while (i--) {
	      tabBounds = this.tabListItems[i].getBoundingClientRect(); // break if last tab is within tab window

	      if (i === this.tabListItems.length - 1 && _inTabWindow(this.tabListItems[i], this.el)) {
	        break;
	      } // update to track the left most tab within the tab window


	      if (_getBoundingRectValue.call(this, this.tabListItems[i], 'right') >= _getBoundingRectValue.call(this, this.el, 'right')) {
	        tabTarget = this.tabListItems[i]; // update left most tab shown in tab window

	        this.tabSlideTarget.el = tabTarget;
	        this.tabSlideTarget.index = i;
	      } else {
	        break;
	      }
	    }
	  } else {
	    /**
	     * Start at left most tab in tab window, decrement and find
	     * out how many tabs can fit within the tab window.
	     * */
	    i = this.tabSlideTarget.index;
	    widthRemaining = tabListWindowBounds.width;

	    if (i === -1) {
	      return;
	    }

	    while (i-- && widthRemaining >= 0) {
	      tabBounds = this.tabListItems[i].getBoundingClientRect(); // break if first tab is within tab window

	      if (i === 0 && _inTabWindow(this.tabListItems[i], this.el)) {
	        break;
	      }

	      widthRemaining -= tabBounds.width; // subtract tab width from tab window

	      tabTarget = this.tabListItems[i]; // update left most tab shown in tab window

	      this.tabSlideTarget.el = tabTarget;
	      this.tabSlideTarget.index = i; // break if the tab before this tab element creates a negative value

	      if (this.tabListItems[i - 1] && widthRemaining - this.tabListItems[i - 1].getBoundingClientRect().width < 0) {
	        break;
	      }
	    }
	  }

	  return tabTarget;
	}
	/**
	 * Window resize handler (also runs on instantiation).
	 * Sets container width, shows/hides arrows depending on visible tabs, and resets
	 * styles when slider is not needed.
	 * @this TabSlider
	 */


	function _onWindowResize() {
	  // width of tab container - left/right padding
	  var tabContainerWidth = this.el.offsetWidth - parseInt(getComputedStyle(this.el).paddingLeft, 10) * 2;
	  var arrowsStyleDisplay = getComputedStyle(this.arrows).display; // recalculate if tabs have changed widths from media queries, etc

	  _updateTabWindowWidth.call(this); // don't do anything if container is large enough to hold tabs


	  if (tabContainerWidth >= this.tabListWidth) {
	    if (arrowsStyleDisplay === 'block' || this.tabWindow.style.width) {
	      this.arrows.style.display = 'none';
	      this.tabWindow.style.width = '';
	    } // add justify center class if it existed


	    if (this.tabContentCentered) {
	      this.tabGroup.classList.add(ClassName$1.JUSTIFY_CENTER);
	    }

	    return;
	  } // else: set container overflow for tabs


	  this.tabWindow.style.width = this.tabListWidth + 'px'; // align tabs to the left when arrows appear

	  if (this.tabContentCentered) {
	    this.tabGroup.classList.remove(ClassName$1.JUSTIFY_CENTER);
	  } // update tab list and last tab bounds


	  this.tabListItems = this.el.querySelectorAll(Selector$2.ROLE_TAB);
	  this.lastTabBounds = this.tabListItems[this.tabListItems.length - 1].getBoundingClientRect(); // show arrows when the right most tab is out of bounds of the container by 40px (arrow width)

	  var lastTabBoundsRightVal = _getBoundingRectValue.call(this, this.tabListItems[this.tabListItems.length - 1], 'right');

	  var tabMountBoundsRightVal = _getBoundingRectValue.call(this, this.el, 'right');

	  if (arrowsStyleDisplay === 'none' && tabMountBoundsRightVal - this.arrowOffsetWidth <= lastTabBoundsRightVal - this.arrowOffsetWidth) {
	    this.arrows.style.display = 'block';
	  } // hide arrows before shifting left position


	  _showHideArrow.call(this);
	}
	/**
	 * Focus event handler to capture selected tab and its index for positioning.
	 * @param {Event} event - DOM focus event.
	 * @this TabSlider
	 */


	function _onFocus(_ref) {
	  var target = _ref.target;

	  if (target.matches(Selector$2.ROLE_TAB)) {
	    _updateTabWindowWidth.call(this);

	    var slideToTarget = target; // update left-most tab shown in tab window

	    this.tabSlideTarget.el = slideToTarget;
	    this.tabSlideTarget.index = [].slice.call(this.tabListItems).indexOf(slideToTarget);
	  }
	}
	/**
	 * Event handler to scroll tab into view (can be prevented with option).
	 * @param {HTMLElement} tab - The selected tab element.
	 * @param {boolean} scrollIntoView - Whether to scroll element into view.
	 */


	function _onShow(tab, scrollIntoView) {
	  if (scrollIntoView) {
	    tab.scrollIntoView({
	      block: 'nearest',
	      // vertical alignment
	      inline: 'center',
	      // horizontal alignment
	      behavior: 'smooth'
	    });
	  }
	}
	/**
	 * Scroll callback to move slider if triggered by keyboard events: left/right, tab/shift+tab.
	 * @this TabSlider
	 */


	function _onScroll() {
	  var _this = this;

	  if (this.scrollTimeout !== null) {
	    clearTimeout(this.scrollTimeout);
	  }

	  this.scrollTimeout = setTimeout(function () {
	    _updateTabWindowWidth.call(_this);

	    _showHideArrow.call(_this); // focus on the arrow only if an arrow was clicked (prevents keyboard presses from activating arrow focus)


	    if (_this.arrowDirection && (document.activeElement === _this.arrowNext || document.activeElement === _this.arrowPrev)) {
	      _onArrowFocus.call(_this);
	    } // prevent scroll event from doing additional variable updates


	    if (_this.isArrowClicked) {
	      _this.isArrowClicked = false;
	      return false;
	    } // update left most tab shown in tab window


	    for (var i = _this.tabSlideTarget.index; i < _this.tabListItems.length; i++) {
	      if (_this.tabListItems[i].getBoundingClientRect().left > 0) {
	        _this.tabSlideTarget.el = _this.tabListItems[i];
	        _this.tabSlideTarget.index = i;
	        break;
	      }
	    }
	  }, 100);
	}
	/**
	 * Accurately calculate all elements that make up the tab width.
	 * @param {HTMLElement} tab - tab element
	 * @return {number} tab width value
	 */


	function _getTabWidth(tab) {
	  var eleStyleObj = getComputedStyle(tab);
	  var marginLeft = Math.abs(parseInt(eleStyleObj.marginLeft, 10)) || 0;
	  var marginRight = Math.abs(parseInt(eleStyleObj.marginRight, 10)) || 0;
	  var borderLeft = parseInt(eleStyleObj.borderLeftWidth, 10) || 0;
	  var borderRight = parseInt(eleStyleObj.borderRightWidth, 10) || 0;
	  return tab.offsetWidth + (marginLeft + marginRight) + (borderLeft + borderRight);
	}
	/**
	 * Update tab window width.
	 * On page load, whitespace buffer is created to account for tab widths when letter-spacing increases,
	 * but tab window should be readjusted to remove whitespace.
	 * @this TabSlider
	 */


	function _updateTabWindowWidth() {
	  var _this2 = this;

	  this.tabListWidth = 0;
	  this.tabListItems.forEach(function (tab) {
	    _this2.tabListWidth += _getTabWidth(tab);
	  });
	  this.tabListWidth += 2 * 3; // account for outer VFIs
	  // do not reset style on first load

	  if (!this.isTabWindowWidthAdjusted && this.tabWindow.style.width) {
	    this.tabWindow.style.width = this.tabListWidth + 'px';
	    this.isTabWindowWidthAdjusted = true;
	  }
	}
	/**
	 * Get left (LTR) or right (RTL) rectangle bounding value.
	 * @param {HTMLElement} tab - tab element
	 * @param {('left'|'right')} side - side on which to calculate position.
	 * @return {number} - left or right bounding value of element.
	 */


	function _getBoundingRectValue(tab, side) {
	  if (side === void 0) {
	    side = 'left';
	  }

	  var tabBounds = tab.getBoundingClientRect();

	  if (side === 'left') {
	    if (this.isRTL) {
	      var elementStyles = getComputedStyle(tab);
	      var borderRight = parseInt(elementStyles.borderRightWidth, 10);
	      var marginRight = parseInt(elementStyles.marginRight, 10);
	      return Math.abs(tabBounds.right + borderRight + marginRight - window.innerWidth);
	    }

	    return tabBounds.left;
	  }

	  if (this.isRTL) {
	    return Math.abs(tabBounds.left - window.innerWidth);
	  }

	  return tabBounds.right;
	}
	/**
	 * Tab slider
	 * @class
	 */


	var TabSlider = /*#__PURE__*/function () {
	  /**
	   * Create the tab slider controls.
	   * @param {Object} opts - The tab slider control options.
	   * @param {HTMLElement} opts.el - The tab slider DOM node.
	   * @param {boolean} [opts.scrollIntoView=true] - Whether to scroll the selected tab into view (if overflowing container).
	   * @param {Function} [opts.onPrevArrowClick] - Function to override the previous button click handler.
	   * @param {Function} [opts.onNextArrowClick] - Function to override the next button click handler.
	   * @param {Function} [opts.onFocusEvent] - Function to override the focus event handler.
	   * @param {Function} [opts.onScrollEvent] - Function to override the scroll event handler.
	   * @param {Function} [opts.onWindowResize] - Function to override the resize handler.
	   */
	  function TabSlider(_ref2) {
	    var _this3 = this;

	    var el = _ref2.el,
	        _ref2$scrollIntoView = _ref2.scrollIntoView,
	        scrollIntoView = _ref2$scrollIntoView === void 0 ? true : _ref2$scrollIntoView,
	        onPrevArrowClick = _ref2.onPrevArrowClick,
	        onNextArrowClick = _ref2.onNextArrowClick,
	        onFocusEvent = _ref2.onFocusEvent,
	        onScrollEvent = _ref2.onScrollEvent,
	        onWindowResize = _ref2.onWindowResize;
	    // select control nodes
	    this.el = el;
	    this.tabListItems = this.el.querySelectorAll(Selector$2.ROLE_TAB);
	    this.scrollElement = this.el.querySelector(Selector$1.TAB_OVERFLOW);
	    this.tabWindow = this.el.querySelector(Selector$1.TAB_WINDOW);
	    this.tabGroup = this.el.querySelector(Selector$1.TAB_GROUP);
	    this.tabContentCentered = this.tabGroup.classList.contains(ClassName$1.JUSTIFY_CENTER);
	    this.arrows = this.el.querySelector(Selector$1.ARROWS);
	    this.arrowPrev = this.el.querySelector(Selector$1.ARROW_PREV);
	    this.arrowNext = this.el.querySelector(Selector$1.ARROW_NEXT);
	    this.arrowOffsetWidth = parseInt(this.arrowNext.dataset.width, 10) || 40; // event controls

	    this.onPrevArrowClick = onPrevArrowClick || _onArrowClick.bind(this);
	    this.onNextArrowClick = onNextArrowClick || _onArrowClick.bind(this);
	    this.onFocusEvent = onFocusEvent || _onFocus.bind(this);
	    this.onScrollEvent = onScrollEvent || _onScroll.bind(this);
	    this.onWindowResize = onWindowResize || _onWindowResize.bind(this); // internal variables

	    this.isRTL = document.dir === 'rtl';
	    this.isTabWindowWidthAdjusted = false;
	    this.isArrowClicked = false;
	    this.arrowDirection = Direction.LEFT;
	    this.scrollTimeout = null;
	    this.tabListWidth = 0;
	    this.tabListWidthBuffer = 0; // a11y fix to increase tab list window width to allow for increased letter spacing

	    this.lastTabBounds = this.tabListItems[this.tabListItems.length - 1].getBoundingClientRect(); // keep track of tab that is on the far left of the tab window

	    this.tabSlideTarget = {
	      el: this.isRTL ? this.tabListItems[this.tabListItems.length - 1] : this.tabListItems[0],
	      index: this.isRTL ? this.tabListItems.length - 1 : 0
	    };
	    this.scrollIntoView = scrollIntoView !== false && !this.el.hasAttribute(Attribute.DATA_DISABLE_SCROLL_INTO_VIEW); // get width of all tabs; include borders and margins

	    this.tabListItems.forEach(function (tab) {
	      _this3.tabListWidth += _getTabWidth(tab);
	    }); // create a buffer of the tab window width on page load

	    this.tabListWidth *= 1.5; // add class name to arrows for mobile only

	    if (Util.detectMobile(true)) {
	      this.arrows.classList.add(ClassName$1.MOBILE_ARROWS);
	    } // attach event listeners


	    this.events = [{
	      el: this.arrowPrev,
	      type: EventName$1.CLICK_DATA_API,
	      handler: this.onPrevArrowClick
	    }, {
	      el: this.arrowNext,
	      type: EventName$1.CLICK_DATA_API,
	      handler: this.onNextArrowClick
	    }, {
	      el: window,
	      type: EventName$1.RESIZE_DATA_API,
	      handler: throttle(100, this.onWindowResize)
	    }, {
	      el: this.scrollElement,
	      type: EventName$1.SCROLL_DATA_API,
	      handler: throttle(100, this.onScrollEvent)
	    }];
	    this.tabListItems.forEach(function (tab) {
	      _this3.events.push({
	        el: tab,
	        type: EventName$1.FOCUS_DATA_API,
	        handler: _this3.onFocusEvent
	      }, {
	        el: tab,
	        type: EventName$2.SHOW,
	        handler: function handler(_event) {
	          return _onShow(tab, _this3.scrollIntoView);
	        }
	      });
	    });
	    Util.addEvents(this.events);
	    tabSliders.push(this);
	    this.observer = new IntersectionObserver(function (entries) {
	      if (entries[0].isIntersecting) {
	        _this3.onWindowResize();
	      }
	    });
	    this.observer.observe(this.el); // Create custom events

	    this[EventName$1.ON_SCROLL] = new CustomEvent(EventName$1.ON_SCROLL, {
	      bubbles: true,
	      cancelable: true
	    });
	  }
	  /**
	   * Remove event handlers.
	   * @this TabSlider
	   */


	  var _proto = TabSlider.prototype;

	  _proto.remove = function remove() {
	    Util.removeEvents(this.events); // Disconnect intersection observer

	    this.observer.disconnect(); // remove this reference from array of instances

	    var index = tabSliders.indexOf(this);
	    tabSliders.splice(index, 1); // Create and dispatch custom event

	    this[EventName$1.ON_REMOVE] = new CustomEvent(EventName$1.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName$1.ON_REMOVE]);
	  }
	  /**
	   * Go to next tabs
	   * @this TabSlider
	   */
	  ;

	  _proto.onClickNextArrow = function onClickNextArrow() {
	    this.arrowNext.click();
	    this.el.dispatchEvent(this[EventName$1.ON_SCROLL]);
	  }
	  /**
	   * Go to previous tabs
	   * @this TabSlider
	   */
	  ;

	  _proto.onClickPrevArrow = function onClickPrevArrow() {
	    this.arrowPrev.click();
	    this.el.dispatchEvent(this[EventName$1.ON_SCROLL]);
	  }
	  /**
	   * Get instances.
	   * @returns {Object} A object instance
	   */
	  ;

	  TabSlider.getInstances = function getInstances() {
	    return tabSliders;
	  };

	  return TabSlider;
	}();

	var Selector = {
	  DATA_MOUNT: '[data-mount="tooltip"]'
	};
	var EventName = {
	  ON_HIDE: 'onHide',
	  ON_SHOW: 'onShow',
	  ON_UPDATE: 'onUpdate',
	  ON_REMOVE: 'onRemove'
	};
	var ClassName = Object.assign({}, ClassName$b, {
	  TOOLTIP: 'tooltip',
	  ARROW: 'arrow'
	});
	var Default = Object.assign({}, Default$3, {
	  SR_CLOSE: 'Press escape to close tooltip',
	  ALIGNMENT: 'center'
	});
	var tooltips = [];
	/**
	 * The event handler for when the trigger is hovered over
	 */

	function _onEnter() {
	  this.show();
	}
	/**
	 * The event handler for when the trigger or menu is hovered over
	 * @param {MouseEvent} event - The event object
	 */


	function _onLeave(event) {
	  // Note: must check if `this.shown` is true for edge case when the mouse is hovered on the menu, but user tabs away from the trigger.
	  // This results in an infinite `mouseleave` event on the menu unless we've tripped the `this.shown` flag to false.
	  if (this.shown && !this.el.contains(event.relatedTarget) && !this.menu.contains(event.relatedTarget)) {
	    this.hide();
	  }
	}
	/**
	 * The event handler for when a key is pressed on the trigger
	 * @param {KeyboardEvent} event - The event object
	 */


	function _onKeydown(event) {
	  if (this.shown && event.keyCode === Util.keyCodes.ESC) {
	    this.hide();
	  } else if (!this.shown && event.keyCode === Util.keyCodes.ENTER) {
	    this.show();
	  }
	}
	/**
	 * The event handler for when a touch point is placed on the trigger
	 * @param {TouchEvent} event - The event object
	 */


	function _onTouchstart(event) {
	  // Prevent mouse events such as "click" from happening
	  event.preventDefault();
	  this.show();
	}
	/**
	 * The event handler for when a touch point is removed from the trigger
	 * Note: The event's target will be the element in which the touch occurred
	 */


	function _onTouchend() {
	  if (this.shown) {
	    this.hide();
	  }
	}
	/**
	 * The generic event handler for the document
	 * @param {Event} event - The event object
	 */


	function _documentEventHandler(event) {
	  if (this.shown && !this.el.contains(event.target) && !this.menu.contains(event.target)) {
	    this.hide();
	  }
	}
	/**
	 * Gets the related menu or creates one if none is associated
	 * @param {Node} node - The element associated with the menu, typically the tooltip trigger
	 * @returns {Node} The menu element
	 */


	function _getOrCreateMenu(node) {
	  if (node.attributes['aria-describedby']) {
	    return document.querySelector("#" + node.attributes['aria-describedby'].value);
	  }

	  if (node.attributes.title) {
	    var menu = document.createElement('div');
	    var menuId = ClassName.TOOLTIP + "_" + Util.getUid();
	    var menuContentWrapper = document.createElement('div');
	    var menuScreenReaderMsg = document.createElement('span');
	    menuContentWrapper.textContent = node.getAttribute('title');
	    menuContentWrapper.classList.add('tooltip-inner');
	    menuScreenReaderMsg.classList.add('sr-only');
	    menuScreenReaderMsg.textContent = node.getAttribute('data-sr-close') || Default.SR_CLOSE;
	    menu.classList.add(ClassName.TOOLTIP);
	    menu.setAttribute('id', menuId);
	    menu.setAttribute('role', 'tooltip');
	    menuContentWrapper.appendChild(menuScreenReaderMsg);
	    menu.appendChild(menuContentWrapper);
	    node.removeAttribute('title'); // Remove the default browser tooltip

	    node.setAttribute('aria-describedby', menuId);
	    node.after(menu);
	    return menu;
	  }
	}
	/**
	 * Creates a decorative arrow element for the menu
	 * @param {Node} node - The element to add the arrow to, typically the menu
	 * @returns {Node} The arrow element
	 */


	function _createTooltipArrow(node) {
	  var arrow = document.createElement('span');
	  var wrapper = document.createElement('div');
	  arrow.classList.add("" + ClassName.ARROW);
	  wrapper.classList.add(ClassName.ARROW + "-wrapper");
	  wrapper.append(arrow);
	  node.append(wrapper);
	  return arrow;
	}

	var Tooltip = /*#__PURE__*/function (_Flyout) {
	  _inheritsLoose(Tooltip, _Flyout);

	  /**
	   * Create a tooltip, inherited from flyout
	   * @param {Object} opts - The flyout options
	   * @param {Node} opts.el - The element that toggles the flyout
	   * @param {Node} [opts.menu] - The element that defines the flyout menu
	   * @param {string} [opts.direction=right] - A string that defines the direction of the menu
	   */
	  function Tooltip(opts) {
	    var _this;

	    // Set super options
	    var flyoutOpts = Object.assign({}, opts);
	    flyoutOpts.menu = opts.menu || _getOrCreateMenu(flyoutOpts.el);
	    flyoutOpts.alignment = _getAlignment(opts.alignment || flyoutOpts.el.getAttribute('data-alignment'), Default.ALIGNMENT);
	    flyoutOpts.offset = opts.offset ? parseInt(opts.offset, 10) : 16;
	    flyoutOpts.enableFade = typeof opts.enableFade === 'boolean' ? opts.enableFade : true;
	    _this = _Flyout.call(this, flyoutOpts) || this; // Tooltip-specific setup

	    _this.arrow = _createTooltipArrow(_this.menu);
	    _this.events = [{
	      el: _this.el,
	      type: 'mouseenter',
	      handler: _onEnter.bind(_assertThisInitialized(_this))
	    }, {
	      el: _this.el,
	      type: 'focusin',
	      handler: _onEnter.bind(_assertThisInitialized(_this))
	    }, {
	      el: _this.el,
	      type: 'mouseleave',
	      handler: _onLeave.bind(_assertThisInitialized(_this))
	    }, {
	      el: _this.menu,
	      type: 'mouseleave',
	      handler: _onLeave.bind(_assertThisInitialized(_this))
	    }, {
	      el: _this.el,
	      type: 'keydown',
	      handler: _onKeydown.bind(_assertThisInitialized(_this))
	    }, {
	      el: _this.el,
	      type: 'touchstart',
	      handler: _onTouchstart.bind(_assertThisInitialized(_this))
	    }, {
	      el: _this.el,
	      type: 'touchend',
	      handler: _onTouchend.bind(_assertThisInitialized(_this))
	    }, {
	      el: document,
	      type: 'mousedown',
	      handler: _documentEventHandler.bind(_assertThisInitialized(_this))
	    }, {
	      el: document,
	      type: 'focusin',
	      handler: _documentEventHandler.bind(_assertThisInitialized(_this))
	    }];
	    Util.addEvents(_this.events); // Create custom events

	    _this[EventName.ON_HIDE] = new CustomEvent(EventName.ON_HIDE, {
	      bubbles: true,
	      cancelable: true
	    });
	    _this[EventName.ON_SHOW] = new CustomEvent(EventName.ON_SHOW, {
	      bubbles: true,
	      cancelable: true
	    });
	    tooltips.push(_assertThisInitialized(_this));
	    return _this;
	  }
	  /**
	   * Position the flyout menu
	   */


	  var _proto = Tooltip.prototype;

	  _proto.positionMenu = function positionMenu() {
	    _Flyout.prototype.positionMenu.call(this);

	    this.positionMenuArrow();
	  }
	  /**
	   * Position the menu's arrow
	   */
	  ;

	  _proto.positionMenuArrow = function positionMenuArrow() {
	    var position = this.currentPosition;
	    var wrapper = this.menu.querySelector("." + ClassName.ARROW + "-wrapper");

	    if (wrapper !== null) {
	      if (position.placement === 'top' || position.placement === 'bottom') {
	        wrapper.style.width = null;
	        wrapper.style.height = this.offset + 'px';
	      } else {
	        wrapper.style.width = this.offset + 'px';
	        wrapper.style.height = null;
	      }
	    } // Reset positioning


	    this.arrow.style.top = null;
	    this.arrow.style.bottom = null;
	    this.arrow.style.left = null;
	    this.arrow.style.right = null; // Top and bottom menus

	    if (position.placement === 'top' || position.placement === 'bottom') {
	      if (position.alignment === 'start') {
	        this.arrow.style[Default.START] = Math.round(this.boundingRect.el.width / 2) - this.arrow.offsetWidth / 2 + 'px';
	      } else if (position.alignment === 'end') {
	        this.arrow.style[Default.END] = Math.round(this.boundingRect.el.width / 2) - this.arrow.offsetWidth / 2 + 'px';
	      } else {
	        this.arrow.style.left = Math.round(this.boundingRect.menu.width / 2) - this.arrow.offsetWidth / 2 + 'px';
	      } // Left and right menus

	    } else if (position.alignment === 'start') {
	      this.arrow.style.top = Math.round(this.boundingRect.el.height / 2) - this.arrow.offsetWidth / 2 + 'px';
	    } else if (position.alignment === 'end') {
	      this.arrow.style.bottom = Math.round(this.boundingRect.el.height / 2) - this.arrow.offsetWidth / 2 + 'px';
	    } else {
	      this.arrow.style.top = Math.round(this.boundingRect.menu.height / 2) - this.arrow.offsetWidth / 2 + 'px';
	    }
	  }
	  /**
	   * Show the menu
	   */
	  ;

	  _proto.show = function show() {
	    _Flyout.prototype.show.call(this);

	    this.el.focus();
	    this.el.dispatchEvent(this[EventName.ON_SHOW]);
	  }
	  /**
	   * Hide the menu
	   */
	  ;

	  _proto.hide = function hide() {
	    // Never automatically set focus to Tooltip trigger when closing the tooltip
	    _Flyout.prototype.hide.call(this, {
	      setFocus: false
	    });

	    this.el.dispatchEvent(this[EventName.ON_HIDE]);
	  }
	  /**
	   * Update the tooltip instance
	   * @param {object} [opts={}] - Options for updating the instance
	   */
	  ;

	  _proto.update = function update(opts) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    var flyoutOpts = Object.assign({}, opts); // Enforce tooltips default alignment as fallback

	    if (opts.alignment) {
	      flyoutOpts.alignment = _getAlignment(opts.alignment, Default.ALIGNMENT);
	    }

	    _Flyout.prototype.update.call(this, flyoutOpts); // Create and dispatch custom event


	    this[EventName.ON_UPDATE] = new CustomEvent(EventName.ON_UPDATE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName.ON_UPDATE]);
	  }
	  /**
	   * Remove the tooltip instance
	   */
	  ;

	  _proto.remove = function remove() {
	    // Remove event handlers, observers, etc.
	    Util.removeEvents(this.events); // Remove this reference from the array of instances

	    var index = tooltips.indexOf(this);
	    tooltips.splice(index, 1); // Create and dispatch custom event

	    this[EventName.ON_REMOVE] = new CustomEvent(EventName.ON_REMOVE, {
	      bubbles: true
	    });
	    this.el.dispatchEvent(this[EventName.ON_REMOVE]);
	  }
	  /**
	   * Get an array of tooltip instances
	   * @returns {Object[]} Array of tooltip instances
	   */
	  ;

	  Tooltip.getInstances = function getInstances() {
	    return tooltips;
	  };

	  return Tooltip;
	}(Flyout);

	var Debug = {
	  focusedElement: function focusedElement() {
	    document.addEventListener('focus', function () {
	      /* eslint-disable-next-line no-console */
	      console.log('focused', document.activeElement);
	    }, true);
	  }
	};

	var version = "1.9.2";

	var MWF_INITIALIZED = 'mwfInitialized';
	var componentTuples = [[Alert, Selector$n], [BackToTop, Selector$k], [Carousel, Selector$j], [CharacterCount, Selector$i], [ClickGroup, Selector$h], [Collapse, Selector$g], [CollapseControls, Selector$f], [ColorPicker, Selector$d], [ContentSwap, Selector$c], [Dropdown, Selector$b], [FormStar, Selector$a], [FormValidation, Selector$9], [Modal, Selector$8], [MultiFeature, Selector$7], [Popover, Selector$6], [Positioner, Selector$5], [Range, Selector$4], [ShowMoreShowLess, Selector$3], [Sticky, Selector$l], [Tab, Selector$2], [TabSlider, Selector$1], [Tooltip, Selector]];
	function initializeComponents() {
	  componentTuples.forEach(function (_ref) {
	    var Component = _ref[0],
	        selector = _ref[1];
	    Util.initializeComponent(selector.DATA_MOUNT, function (el) {
	      return new Component({
	        el: el
	      });
	    });
	  });
	}

	document.addEventListener('DOMContentLoaded', function () {
	  initializeComponents();
	  document.dispatchEvent(new CustomEvent(MWF_INITIALIZED));
	});

	exports.Alert = Alert;
	exports.AutoComplete = AutoComplete;
	exports.BackToTop = BackToTop;
	exports.Carousel = Carousel;
	exports.CharacterCount = CharacterCount;
	exports.ClickGroup = ClickGroup;
	exports.Collapse = Collapse;
	exports.CollapseControls = CollapseControls;
	exports.ColorPicker = ColorPicker;
	exports.ContentSwap = ContentSwap;
	exports.Debug = Debug;
	exports.Dropdown = Dropdown;
	exports.FormStar = FormStar;
	exports.FormValidation = FormValidation;
	exports.Modal = Modal;
	exports.MultiFeature = MultiFeature;
	exports.Popover = Popover;
	exports.Positioner = Positioner;
	exports.Range = Range;
	exports.ShowMoreShowLess = ShowMoreShowLess;
	exports.Sticky = Sticky;
	exports.Tab = Tab;
	exports.TabSlider = TabSlider;
	exports.Tooltip = Tooltip;
	exports.Util = Util;
	exports.version = version;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
