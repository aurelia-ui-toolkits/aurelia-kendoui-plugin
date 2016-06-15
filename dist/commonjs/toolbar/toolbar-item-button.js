'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarItemButton = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _constants = require('../common/constants');

var _decorators = require('../common/decorators');

var _optionsBuilder = require('../common/options-builder');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToolbarItemButton = exports.ToolbarItemButton = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'toolbar-item-button'), _dec2 = (0, _decorators.generateBindables)('ToolBarItemButton'), _dec3 = (0, _aureliaDependencyInjection.inject)(_optionsBuilder.OptionsBuilder), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function ToolbarItemButton(optionsBuilder) {
    _classCallCheck(this, ToolbarItemButton);

    this.optionsBuilder = optionsBuilder;
  }

  ToolbarItemButton.prototype.getOptions = function getOptions() {
    return this.optionsBuilder.getOptions(this, 'ToolBarItemButton');
  };

  return ToolbarItemButton;
}()) || _class) || _class) || _class);