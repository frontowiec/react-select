import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/extends';
import '@babel/runtime/helpers/slicedToArray';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/objectSpread';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/possibleConstructorReturn';
import '@babel/runtime/helpers/getPrototypeOf';
import '@babel/runtime/helpers/inherits';
import '@babel/runtime/helpers/assertThisInitialized';
import 'react';
import 'memoize-one';
import '@babel/runtime/helpers/defineProperty';
import '@emotion/core';
import 'react-dom';
import 'prop-types';
import '@babel/runtime/helpers/typeof';
import '../../dist/utils-02852732.esm.js';
import '../../dist/index-5e36c4ce.esm.js';
import { S as Select } from '../../dist/Select-2aed0e46.esm.js';
import '@emotion/css';
import '@babel/runtime/helpers/taggedTemplateLiteral';
import 'react-input-autosize';
import { m as manageState } from '../../dist/stateManager-fb7e0ce1.esm.js';
import { makeAsyncSelect } from '../../async/dist/react-select.esm.js';
import { makeCreatableSelect } from '../../creatable/dist/react-select.esm.js';

var SelectCreatable = makeCreatableSelect(Select);
var SelectCreatableState = manageState(SelectCreatable);
var AsyncCreatable = makeAsyncSelect(SelectCreatableState);

export default AsyncCreatable;
