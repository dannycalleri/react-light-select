'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactLightSelect = function (_React$Component) {
    _inherits(ReactLightSelect, _React$Component);

    function ReactLightSelect(props) {
        _classCallCheck(this, ReactLightSelect);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactLightSelect).call(this, props));

        _this.state = {
            options: [],
            selectedOption: ''
        };

        _this.onSelectChange = _this.onSelectChange.bind(_this);
        return _this;
    }

    _createClass(ReactLightSelect, [{
        key: 'onSelectChange',
        value: function onSelectChange(e) {
            var arr = [].slice.call(e.target.children);
            var label = arr.filter(function (n) {
                return n.value === e.target.value;
            })[0].innerHTML;

            this.setState({
                selectedOption: label
            });

            if (typeof this.props.onSelectChange !== "undefined") {
                // calling user defined callback
                this.props.onSelectChange({
                    label: label,
                    value: e.target.value
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.dataCallback(function (options) {
                this.setState({
                    selectedOption: options[0].label,
                    options: options
                });
            }.bind(this));
        }
    }, {
        key: 'render',
        value: function render() {
            var select = '';
            if (this.state.options.length > 0) {
                select = _react2.default.createElement(
                    'div',
                    { className: typeof this.props.className !== 'undefined' ? this.props.className : 'react-light-select' },
                    _react2.default.createElement(
                        'div',
                        { className: 'placeholder' },
                        this.state.selectedOption
                    ),
                    _react2.default.createElement(
                        'select',
                        { onChange: this.onSelectChange },
                        this.state.options.map(function (o, i) {
                            return _react2.default.createElement(
                                'option',
                                { key: i, value: o.value },
                                o.label
                            );
                        })
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                null,
                select
            );
        }
    }]);

    return ReactLightSelect;
}(_react2.default.Component);

ReactLightSelect.propTypes = {
    dataCallback: _react2.default.PropTypes.func.isRequired,
    onSelectChange: _react2.default.PropTypes.func.isRequired
};

exports.default = ReactLightSelect;