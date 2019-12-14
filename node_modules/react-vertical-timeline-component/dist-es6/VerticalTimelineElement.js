"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactVisibilitySensor = _interopRequireDefault(require("react-visibility-sensor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class VerticalTimelineElement extends _react.Component {
  constructor(props) {
    super(props);
    this.onVisibilitySensorChange = this.onVisibilitySensorChange.bind(this);
    this.state = {
      visible: false
    };
  }

  onVisibilitySensorChange(isVisible) {
    if (isVisible) {
      this.setState({
        visible: true
      });
    }
  }

  render() {
    const {
      id,
      children,
      contentArrowStyle,
      contentStyle,
      icon,
      iconStyle,
      iconOnClick,
      date,
      position,
      style,
      className,
      visibilitySensorProps
    } = this.props;
    const {
      visible
    } = this.state;
    return _react.default.createElement("div", {
      id: id,
      className: (0, _classnames.default)(className, 'vertical-timeline-element', {
        'vertical-timeline-element--left': position === 'left',
        'vertical-timeline-element--right': position === 'right',
        'vertical-timeline-element--no-children': children === ''
      }),
      style: style
    }, _react.default.createElement(_reactVisibilitySensor.default, _extends({}, visibilitySensorProps, {
      onChange: this.onVisibilitySensorChange
    }), _react.default.createElement("div", null, _react.default.createElement("span", {
      // eslint-disable-line jsx-a11y/no-static-element-interactions
      style: iconStyle,
      onClick: iconOnClick,
      className: `vertical-timeline-element-icon ${visible ? 'bounce-in' : 'is-hidden'}`
    }, icon), _react.default.createElement("div", {
      style: contentStyle,
      className: `vertical-timeline-element-content ${visible ? 'bounce-in' : 'is-hidden'}`
    }, _react.default.createElement("div", {
      style: contentArrowStyle,
      className: "vertical-timeline-element-content-arrow"
    }), children, _react.default.createElement("span", {
      className: "vertical-timeline-element-date"
    }, date)))));
  }

}

VerticalTimelineElement.propTypes = {
  id: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  className: _propTypes.default.string,
  contentArrowStyle: _propTypes.default.shape({}),
  contentStyle: _propTypes.default.shape({}),
  icon: _propTypes.default.element,
  iconStyle: _propTypes.default.shape({}),
  iconOnClick: _propTypes.default.func,
  style: _propTypes.default.shape({}),
  date: _propTypes.default.node,
  position: _propTypes.default.string,
  visibilitySensorProps: _propTypes.default.shape({})
};
VerticalTimelineElement.defaultProps = {
  id: '',
  children: '',
  className: '',
  contentArrowStyle: null,
  contentStyle: null,
  icon: null,
  iconStyle: null,
  style: null,
  date: '',
  position: '',
  iconOnClick: null,
  visibilitySensorProps: {
    partialVisibility: true,
    offset: {
      bottom: 40
    }
  }
};
var _default = VerticalTimelineElement;
exports.default = _default;