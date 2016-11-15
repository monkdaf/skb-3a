'use strict';

var _mocha = require('mocha');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _getUserName = require('../src/getUserName');

var _getUserName2 = _interopRequireDefault(_getUserName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mocha.describe)('Test', function () {
  (0, _mocha.describe)('Check test subsystem', function () {
    (0, _mocha.it)('test system is work	', function () {
      _assert2.default.equal('for test', 'for test');
    });
  });

  (0, _mocha.describe)('Check module "getUserName"', function () {
    (0, _mocha.it)('param is empty', function () {
      _assert2.default.equal('Invalid username', (0, _getUserName2.default)(''));
    });

    (0, _mocha.it)('param is "https://vk.com/skillbranch"', function () {
      _assert2.default.equal('@skillbranch', (0, _getUserName2.default)('https://vk.com/skillbranch'));
    });

    (0, _mocha.it)('param is "//vk.com/skillbranch"', function () {
      _assert2.default.equal('@skillbranch', (0, _getUserName2.default)('//vk.com/skillbranch'));
    });

    (0, _mocha.it)('param is "skillbranch"', function () {
      _assert2.default.equal('@skillbranch', (0, _getUserName2.default)('skillbranch'));
    });

    (0, _mocha.it)('param is "https://vk.com/skillbranch?w=wall-117903599_1076"', function () {
      _assert2.default.equal('@skillbranch', (0, _getUserName2.default)('https://vk.com/skillbranch?w=wall-117903599_1076'));
    });

    (0, _mocha.it)('param is "@durov"', function () {
      _assert2.default.equal('@durov', (0, _getUserName2.default)('@durov'));
    });

    (0, _mocha.it)('param is "https://github.com/kriasoft/react-starter-kit"', function () {
      _assert2.default.equal('@kriasoft', (0, _getUserName2.default)('https://github.com/kriasoft/react-starter-kit'));
    });
  });
}); /**
     list of test from skill-branch:
     https://vk.com/durov
     http://vk.com/durov
     http://www.vk.com/durov
     //vk.com/durov
     vk.com/durov
     durov
     @durov
     https://twitter.com/tjholowaychuk
     https://github.com/kriasoft/react-starter-kit
     vk.com/pavel.durov
     https://vk.com/pavel.durov/spam-url
     https://vk.com/pavel.durov/spam-url/vk.com/pavel.ne.durov
     http://www.vk.com/pavel.durov
     vk.com/pavel.durov
     https://twitter.com/pavel.durov
     http://xn--80adtgbbrh1bc.xn--p1ai/pavel.durov
     https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750
     */