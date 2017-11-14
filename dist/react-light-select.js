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

        var _this = _possibleConstructorReturn(this, (ReactLightSelect.__proto__ || Object.getPrototypeOf(ReactLightSelect)).call(this, props));

        _this.state = {
            options: props.data,
            selectedOption: _this.getOptionFromValue(props.data, props.value)
        };

        _this.onSelectChange = _this.onSelectChange.bind(_this);
        return _this;
    }

    _createClass(ReactLightSelect, [{
        key: 'getOptionFromValue',
        value: function getOptionFromValue(options, value) {
            return options.find(function (o) {
                return o.value === value;
            });
        }
    }, {
        key: 'onSelectChange',
        value: function onSelectChange(e) {
            this.props.onSelectChange(e.target.value);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.value) {
                this.setState({ selectedOption: this.getOptionFromValue(this.state.options, nextProps.value) });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var select = this.state.options.length === 0 ? null : _react2.default.createElement(
                'div',
                { className: typeof this.props.className !== 'undefined' ? this.props.className : 'react-light-select' },
                _react2.default.createElement(
                    'div',
                    { className: 'placeholder' },
                    this.state.selectedOption ? this.state.selectedOption.label : 'Select...'
                ),
                _react2.default.createElement(
                    'select',
                    { onChange: this.onSelectChange, value: this.state.selectedOption ? this.state.selectedOption.value : '' },
                    _react2.default.createElement(
                        'option',
                        { key: 'disabled', value: '', disabled: true },
                        'Select...'
                    ),
                    this.state.options.map(function (o, i) {
                        return _react2.default.createElement(
                            'option',
                            { key: i, value: o.value },
                            o.label
                        );
                    })
                )
            );

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
    data: _react2.default.PropTypes.array.isRequired,
    onSelectChange: _react2.default.PropTypes.func.isRequired,
    value: _react2.default.PropTypes.string.isRequired
};

exports.default = ReactLightSelect;