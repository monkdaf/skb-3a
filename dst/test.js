'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _mocha = require('mocha');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _getInfo = require('../src/getInfo');

var _getInfo2 = _interopRequireDefault(_getInfo);

var _getVolumes = require('../src/getVolumes');

var _getVolumes2 = _interopRequireDefault(_getVolumes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mocha.describe)('Test', function () {
  (0, _mocha.describe)('Check test subsystem', function () {
    (0, _mocha.it)('test system is work	', function () {
      _assert2.default.equal('for test', 'for test');
    });
  });

  (0, _mocha.describe)('Check module "getVolumes"', function () {
    (0, _mocha.it)('param is empty', function () {
      _assert2.default.equal(null, (0, _getVolumes2.default)({}));
    });
    (0, _mocha.it)('param is\'t hdd property', function () {
      _assert2.default.equal(null, (0, _getVolumes2.default)({ floppy: 0 }));
    });
    (0, _mocha.it)('Only one disk C', function () {
      var expected = (0, _stringify2.default)({ 'C:': '33554432B' });
      var actual = (0, _stringify2.default)((0, _getVolumes2.default)({ hdd: [{ vendor: 'Samsung', size: 33554432, volume: 'C:' }] }));
      _assert2.default.equal(expected, actual);
    });
    (0, _mocha.it)('Only one disk D', function () {
      var expected = (0, _stringify2.default)({
        'D:': '16777216B'
      });
      var actual = (0, _stringify2.default)((0, _getVolumes2.default)({ hdd: [{ vendor: 'Maxtor', size: 16777216, volume: 'D:' }] }));
      _assert2.default.equal(expected, actual);
    });
    (0, _mocha.it)('Only one disk C and one disk D', function () {
      var expected = (0, _stringify2.default)({
        'C:': '33554432B',
        'D:': '16777216B'
      });
      var actual = (0, _stringify2.default)((0, _getVolumes2.default)({ hdd: [{ vendor: 'Samsung', size: 33554432, volume: 'C:' }, { vendor: 'Maxtor', size: 16777216, volume: 'D:' }] }));
      _assert2.default.equal(expected, actual);
    });
    (0, _mocha.it)('Only two disk C and one disk D', function () {
      var expected = (0, _stringify2.default)({
        'C:': '41943040B',
        'D:': '16777216B'
      });
      var actual = (0, _stringify2.default)((0, _getVolumes2.default)({ hdd: [{ vendor: 'Samsung', size: 33554432, volume: 'C:' }, { vendor: 'Maxtor', size: 16777216, volume: 'D:' }, { vendor: 'Maxtor', size: 8388608, volume: 'C:' }] }));
      _assert2.default.equal(expected, actual);
    });
  });

  var pc = {
    board: {
      vendor: 'IBM',
      model: 'IBM-PC S-100',
      cpu: {
        model: '80286',
        hz: 12000
      },
      image: 'http://www.s100computers.com/My%20System%20Pages/80286%20Board/Picture%20of%2080286%20V2%20BoardJPG.jpg',
      video: 'http://www.s100computers.com/My%20System%20Pages/80286%20Board/80286-Demo3.mp4'
    },
    ram: {
      vendor: 'CTS',
      volume: 1048576,
      pins: 30 },
    os: 'MS-DOS 1.25',
    floppy: 0,
    hdd: [{
      vendor: 'Samsung',
      size: 33554432,
      volume: 'C:'
    }, {
      vendor: 'Maxtor',
      size: 16777216,
      volume: 'D:'
    }, {
      vendor: 'Maxtor',
      size: 8388608,
      volume: 'C:'
    }],
    monitor: null,
    length: 42,
    height: 21,
    width: 54
  };
  (0, _mocha.describe)('Check module "getInfo",', function () {
    (0, _mocha.it)('path = /', function () {
      var expected = (0, _stringify2.default)(pc);
      var path = '';
      var actual = (0, _stringify2.default)((0, _getInfo2.default)(pc, path));
      _assert2.default.equal(actual, expected);
    });

    (0, _mocha.it)('pc = undefined', function () {
      var expected = 'Not Found';
      var path = 'board';
      var actual = (0, _getInfo2.default)(undefined, path);
      _assert2.default.equal(actual, expected);
    });

    (0, _mocha.it)('path = /board', function () {
      var expected = (0, _stringify2.default)({ vendor: 'IBM', model: 'IBM-PC S-100', cpu: { model: '80286', hz: 12000 }, image: 'http://www.s100computers.com/My%20System%20Pages/80286%20Board/Picture%20of%2080286%20V2%20BoardJPG.jpg', video: 'http://www.s100computers.com/My%20System%20Pages/80286%20Board/80286-Demo3.mp4' });
      var path = 'board';
      var actual = (0, _stringify2.default)((0, _getInfo2.default)(pc, path));
      _assert2.default.equal(actual, expected);
    });

    (0, _mocha.it)('path = /board/vendor', function () {
      var expected = 'IBM';
      var path = 'board/vendor';
      var actual = (0, _getInfo2.default)(pc, path);
      _assert2.default.equal(actual, expected);
    });

    (0, _mocha.it)('path = /hdd/22', function () {
      var expected = 'Not Found';
      var path = 'hdd/22';
      var actual = (0, _getInfo2.default)(pc, path);
      _assert2.default.equal(actual, expected);
    });

    (0, _mocha.it)('path = /some/other', function () {
      var expected = 'Not Found';
      var path = 'some/other';
      var actual = (0, _getInfo2.default)(pc, path);
      _assert2.default.equal(actual, expected);
    });

    (0, _mocha.it)('path = /hdd/length', function () {
      var expected = 'Not Found';
      var path = 'hdd/length';
      var actual = (0, _getInfo2.default)(pc, path);
      _assert2.default.equal(actual, expected);
    });

    (0, _mocha.it)('path = /board/vendor/length', function () {
      var expected = 'Not Found';
      var path = 'board/vendor/length';
      var actual = (0, _getInfo2.default)(pc, path);
      _assert2.default.equal(actual, expected);
    });

    (0, _mocha.it)('path = /length', function () {
      var expected = 42;
      var path = 'length';
      var actual = (0, _getInfo2.default)(pc, path);
      _assert2.default.equal(actual, expected);
    });
  });
});