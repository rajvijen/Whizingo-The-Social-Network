'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Event = exports.Timeline = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timeline = exports.Timeline = function Timeline(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: _style2.default.container },
    _react2.default.createElement(
      'ul',
      { className: _style2.default.timeline },
      children
    )
  );
};

var Event = exports.Event = function Event(_ref2) {
  var title = _ref2.title,
      subtitle = _ref2.subtitle,
      interval = _ref2.interval,
      children = _ref2.children;
  return _react2.default.createElement(
    'li',
    { className: _style2.default.event },
    _react2.default.createElement('label', { className: _style2.default.icon }),
    _react2.default.createElement(
      'div',
      { className: _style2.default.body },
      _react2.default.createElement(
        'p',
        { className: _style2.default.date },
        interval
      ),
      _react2.default.createElement(
        'h3',
        null,
        title
      ),
      subtitle && _react2.default.createElement(
        'h4',
        null,
        subtitle
      ),
      _react2.default.createElement(
        'div',
        { className: _style2.default.description },
        children
      )
    )
  );
};