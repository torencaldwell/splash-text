"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SplashText = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useState = React.useState,
    useEffect = React.useEffect;
var circleCount = 0;

var ExpandingCircle = function ExpandingCircle(_ref) {
  var fill = _ref.fill,
      interval = _ref.interval,
      duration = _ref.duration,
      id = _ref.id;

  var _useState = useState('0'),
      _useState2 = _slicedToArray(_useState, 2),
      radius = _useState2[0],
      setRadius = _useState2[1];

  useEffect(function () {
    var radiusTimeout = setTimeout(function () {
      setRadius('105%');
    }, interval);
    return function cleanup() {
      clearTimeout(radiusTimeout);
    };
  });
  return /*#__PURE__*/React.createElement("circle", {
    id: "circle_".concat(id),
    style: {
      transition: "r ".concat(duration, "s ease-out")
    },
    r: radius,
    cx: "50%",
    cy: "50%",
    fill: fill
  });
};

var SplashText = function SplashText(_ref2) {
  var enterColors = _ref2.enterColors,
      exitColors = _ref2.exitColors,
      baseColor = _ref2.baseColor,
      interval = _ref2.interval,
      duration = _ref2.duration,
      text = _ref2.text,
      textStyle = _ref2.textStyle,
      style = _ref2.style;

  var _useState3 = useState(baseColor),
      _useState4 = _slicedToArray(_useState3, 2),
      fillColor = _useState4[0],
      setBaseFillColor = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      circles = _useState6[0],
      setCircles = _useState6[1];

  useEffect(function () {
    document.ontransitionend = function () {
      var color = circles[0].props.fill;
      setBaseFillColor(color);
      circles.shift();
    };
  });

  var mouseEnter = function mouseEnter() {
    var elements = _toConsumableArray(circles);

    for (var index in enterColors) {
      var i = parseInt(index);
      var color = enterColors[i];
      elements.push( /*#__PURE__*/React.createElement(ExpandingCircle, {
        fill: color,
        interval: interval * (i + 1),
        duration: duration,
        key: "circle_".concat(circleCount),
        id: circleCount
      }));
      circleCount++;
    }

    setCircles(elements);
  };

  var mouseLeave = function mouseLeave() {
    var elements = _toConsumableArray(circles);

    var colors = [].concat(_toConsumableArray(exitColors), [baseColor]);

    for (var index in colors) {
      var i = parseInt(index);
      var color = colors[i];
      elements.push( /*#__PURE__*/React.createElement(ExpandingCircle, {
        fill: color,
        interval: interval * (i + 1),
        duration: duration,
        key: "circle_".concat(circleCount),
        id: circleCount
      }));
      circleCount++;
    }

    setCircles(elements);
  };

  return /*#__PURE__*/React.createElement("svg", {
    id: "container",
    style: _objectSpread(_objectSpread({}, style), {}, {
      overflow: 'visible'
    })
  }, /*#__PURE__*/React.createElement("clipPath", {
    id: "textClip"
  }, /*#__PURE__*/React.createElement("text", {
    x: "50%",
    y: "50%",
    textAnchor: "middle",
    fontSize: textStyle.fontSize
  }, text)), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#textClip)",
    onMouseEnter: function onMouseEnter() {
      return mouseEnter();
    },
    onMouseLeave: function onMouseLeave() {
      return mouseLeave();
    }
  }, /*#__PURE__*/React.createElement("circle", {
    id: "baseCircle",
    r: "105%",
    cx: "50%",
    cy: "50%",
    fill: fillColor
  }), circles));
};

exports.SplashText = SplashText;
SplashText.defaultProps = {
  enterColors: [],
  exitColors: [],
  baseColor: '#FFFFFF',
  interval: 20,
  duration: 2,
  text: '',
  textStyle: {
    fontSize: 20
  },
  style: null
};
