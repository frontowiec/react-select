"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), require("@babel/runtime/helpers/objectWithoutProperties"), require("@babel/runtime/helpers/extends"), 
require("@babel/runtime/helpers/slicedToArray"), require("@babel/runtime/helpers/toConsumableArray"), 
require("@babel/runtime/helpers/objectSpread"), require("@babel/runtime/helpers/classCallCheck"), 
require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), 
require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), 
require("@babel/runtime/helpers/assertThisInitialized"), require("react"), require("memoize-one"), 
require("@babel/runtime/helpers/defineProperty"), require("@emotion/core"), require("react-dom"), 
require("prop-types"), require("@babel/runtime/helpers/typeof"), require("../../dist/utils-fa5f2029.cjs.prod.js"), 
require("../../dist/index-c72d1a7e.cjs.prod.js");

var reactSelect = require("../../dist/Select-bef5b47f.cjs.prod.js");

require("@emotion/css"), require("@babel/runtime/helpers/taggedTemplateLiteral"), 
require("react-input-autosize");

var stateManager = require("../../dist/stateManager-18a421c0.cjs.prod.js"), reactSelect$1 = require("../../async/dist/react-select.cjs.prod.js"), reactSelect$2 = require("../../creatable/dist/react-select.cjs.prod.js"), SelectCreatable = reactSelect$2.makeCreatableSelect(reactSelect.Select), SelectCreatableState = stateManager.manageState(SelectCreatable), AsyncCreatable = reactSelect$1.makeAsyncSelect(SelectCreatableState);

exports.default = AsyncCreatable;
