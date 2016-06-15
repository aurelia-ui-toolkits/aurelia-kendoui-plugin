'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.dataviz.map.min'], function (_export, _context) {
  "use strict";

  var inject, customElement, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, Map;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_kendoDatavizMapMin) {}],
    execute: function () {
      _export('Map', Map = (_dec = customElement(constants.elementPrefix + 'map'), _dec2 = generateBindables('kendoMap'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Map(element, widgetBase) {
          _classCallCheck(this, Map);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoMap').linkViewModel(this);
        }

        Map.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Map.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Map.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Map.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        Map.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Map;
      }()) || _class) || _class) || _class));

      _export('Map', Map);
    }
  };
});