'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadialGauge = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

require('kendo.dataviz.gauge.min');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RadialGauge = exports.RadialGauge = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'radial-gauge'), _dec2 = (0, _decorators.generateBindables)('kendoRadialGauge'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function RadialGauge(element, widgetBase, viewResources) {
    _classCallCheck(this, RadialGauge);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoRadialGauge').linkViewModel(this).useValueBinding();
  }

  RadialGauge.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  RadialGauge.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  RadialGauge.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  RadialGauge.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  RadialGauge.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  return RadialGauge;
}()) || _class) || _class) || _class);