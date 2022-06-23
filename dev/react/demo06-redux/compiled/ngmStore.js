function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
    return _classApplyDescriptorGet(receiver, descriptor);
}
function _classPrivateFieldInit(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
    _classApplyDescriptorSet(receiver, descriptor, value);
    return value;
}
function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _classPrivateMethodInit(obj, privateSet) {
    _checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
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
var _state = /*#__PURE__*/ new WeakMap(), _subscriptions = /*#__PURE__*/ new WeakMap(), _reducer = /*#__PURE__*/ new WeakMap(), _setState = /*#__PURE__*/ new WeakSet();
export var ngmStore = /*#__PURE__*/ function() {
    "use strict";
    function ngmStore(reducer) {
        _classCallCheck(this, ngmStore);
        _classPrivateMethodInit(this, _setState);
        _classPrivateFieldInit(this, _state, {
            writable: true,
            value: undefined
        });
        _classPrivateFieldInit(this, _subscriptions, {
            writable: true,
            value: []
        });
        _classPrivateFieldInit(this, _reducer, {
            writable: true,
            value: null
        });
        if (!reducer) {
            throw "Reducer must be provided";
        }
        _classPrivateFieldSet(this, _reducer, reducer);
        this.dispatch(null);
        console.log("Initial State:");
        console.log(_classPrivateFieldGet(this, _state));
    }
    _createClass(ngmStore, [
        {
            key: "getState",
            value: function getState() {
                return _classPrivateFieldGet(this, _state);
            }
        },
        {
            key: "subscribe",
            value: function subscribe(fn) {
                _classPrivateFieldGet(this, _subscriptions).push(fn);
            }
        },
        {
            key: "replaceReducer",
            value: function replaceReducer(reducer) {
                _classPrivateFieldSet(this, _reducer, reducer);
            }
        },
        {
            key: "dispatch",
            value: function dispatch(action) {
                if (!_classPrivateFieldGet(this, _reducer)) {
                    return;
                }
                var newState = _classPrivateFieldGet(this, _reducer).call(this, _classPrivateFieldGet(this, _state), action);
                _classPrivateMethodGet(this, _setState, setState).call(this, newState);
            }
        }
    ]);
    return ngmStore;
}();
function setState(newState) {
    _classPrivateFieldSet(this, _state, newState);
    for(var i = 0; i < _classPrivateFieldGet(this, _subscriptions).length; i++){
        var fn = _classPrivateFieldGet(this, _subscriptions)[i];
        fn(_classPrivateFieldGet(this, _state));
    }
}
