function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
import { v4 as uuidv4 } from "uuid";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
var BUG_ADDED = "bugAdded";
var BUG_REMOVED = "bugRemoved";
var BUG_RESOLVED = "bugResolved";
export function bugAdded(description) {
    return {
        type: BUG_ADDED,
        payload: {
            description: description
        }
    };
}
export function bugRemoved(id) {
    return {
        type: BUG_REMOVED,
        payload: {
            id: id
        }
    };
}
export function bugResolved(id) {
    return {
        type: BUG_RESOLVED,
        payload: {
            id: id
        }
    };
}
// state = []
var nextid = 1;
function getID() {
    return nextid++;
}
function reducer(state, action) {
    var newState;
    if (state === undefined) {
        return [];
    }
    if (!action) {
        return state;
    }
    if (!action.type) {
        return state;
    }
    if (action.type == BUG_ADDED) {
        newState = _toConsumableArray(state);
        newState.push({
            // id: uuidv4(),
            id: getID(),
            resolved: false,
            description: action.payload.description
        });
    } else if (action.type == BUG_RESOLVED) {
        newState = state.map(function(bug) {
            if (bug.id != action.payload.id) {
                return bug;
            } else {
                return _objectSpreadProps(_objectSpread({}, bug), {
                    resolved: true
                });
            }
        });
    } else if (action.type == BUG_REMOVED) {
        newState = state.filter(function(bug) {
            return bug.id != action.payload.id;
        });
    } else {
        newState = state;
    }
    return newState;
}
var store = createStore(reducer, devToolsEnhancer({
    trace: true
}));
export { reducer };
export { store };
