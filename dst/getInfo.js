'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolvePath = function resolvePath(prop, arrPath) {
  if (prop[arrPath[0]] === undefined) {
    return undefined;
  }

  if (arrPath.length === 1) {
    if (arrPath[0] === 'length' && (_lodash2.default.isArray(prop) || typeof prop === 'string')) {
      return undefined;
    }
    return prop[arrPath[0]];
  }

  return resolvePath(prop[arrPath[0]], arrPath.slice(1), prop);
};

/**
 * Created by daf on 16.11.2016.
 */


var getInfo = function getInfo(pc, path) {
  if (!pc) {
    return 'Not Found';
  }
  if (path === '') {
    return pc;
  }

  var arrPath = path.split('/');
  var retData = resolvePath(pc, arrPath, {});

  return retData === undefined ? 'Not Found' : retData;
};

exports.default = getInfo;