
import { it, describe } from 'mocha';
import assert from 'assert';
import getInfo from '../src/getInfo';
import getVolumes from '../src/getVolumes';

describe('Test', () => {
  describe('Check test subsystem', () => {
    it('test system is work	', () => {
      assert.equal('for test', 'for test');
    });
  });

  describe('Check module "getVolumes"', () => {
    it('param is empty', () => {
      assert.equal(null, getVolumes({}));
    });
    it('param is\'t hdd property', () => {
      assert.equal(null, getVolumes({ floppy: 0 }));
    });
    it('Only one disk C', () => {
      const expected = JSON.stringify({ 'C:': '33554432B' });
      const actual = JSON.stringify(getVolumes({ hdd: [{ vendor: 'Samsung', size: 33554432, volume: 'C:' }] }));
      assert.equal(expected, actual);
    });
    it('Only one disk D', () => {
      const expected = JSON.stringify(
        {
          'D:': '16777216B',
        });
      const actual = JSON.stringify(getVolumes({ hdd: [{ vendor: 'Maxtor', size: 16777216, volume: 'D:' }] }));
      assert.equal(expected, actual);
    });
    it('Only one disk C and one disk D', () => {
      const expected = JSON.stringify({
        'C:': '33554432B',
        'D:': '16777216B',
      });
      const actual = JSON.stringify(getVolumes({ hdd: [{ vendor: 'Samsung', size: 33554432, volume: 'C:' }, { vendor: 'Maxtor', size: 16777216, volume: 'D:' }] }));
      assert.equal(expected, actual);
    });
    it('Only two disk C and one disk D', () => {
      const expected = JSON.stringify({
        'C:': '41943040B',
        'D:': '16777216B',
      });
      const actual = JSON.stringify(getVolumes({ hdd: [{ vendor: 'Samsung', size: 33554432, volume: 'C:' }, { vendor: 'Maxtor', size: 16777216, volume: 'D:' }, { vendor: 'Maxtor', size: 8388608, volume: 'C:' }] }));
      assert.equal(expected, actual);
    });
  });

  const pc = {
    board: {
      vendor: 'IBM',
      model: 'IBM-PC S-100',
      cpu: {
        model: '80286',
        hz: 12000,
      },
      image: 'http://www.s100computers.com/My%20System%20Pages/80286%20Board/Picture%20of%2080286%20V2%20BoardJPG.jpg',
      video: 'http://www.s100computers.com/My%20System%20Pages/80286%20Board/80286-Demo3.mp4',
    },
    ram: {
      vendor: 'CTS',
      volume: 1048576,
      pins: 30 },
    os: 'MS-DOS 1.25',
    floppy: 0,
    hdd: [
      {
        vendor: 'Samsung',
        size: 33554432,
        volume: 'C:',
      },
      {
        vendor: 'Maxtor',
        size: 16777216,
        volume: 'D:',
      },
      {
        vendor: 'Maxtor',
        size: 8388608,
        volume: 'C:',
      },
    ],
    monitor: null,
    length: 42,
    height: 21,
    width: 54,
  };
  describe('Check module "getInfo",', () => {
    it('path = /', () => {
      const expected = JSON.stringify(pc);
      const path = '';
      const actual = JSON.stringify(getInfo(pc, path));
      assert.equal(actual, expected);
    });

    it('pc = undefined', () => {
      const expected = 'Not Found';
      const path = 'board';
      const actual = getInfo(undefined, path);
      assert.equal(actual, expected);
    });

    it('path = /board', () => {
      const expected = JSON.stringify({ vendor: 'IBM', model: 'IBM-PC S-100', cpu: { model: '80286', hz: 12000 }, image: 'http://www.s100computers.com/My%20System%20Pages/80286%20Board/Picture%20of%2080286%20V2%20BoardJPG.jpg', video: 'http://www.s100computers.com/My%20System%20Pages/80286%20Board/80286-Demo3.mp4' });
      const path = 'board';
      const actual = JSON.stringify(getInfo(pc, path));
      assert.equal(actual, expected);
    });

    it('path = /board/vendor', () => {
      const expected = 'IBM';
      const path = 'board/vendor';
      const actual = getInfo(pc, path);
      assert.equal(actual, expected);
    });

    it('path = /hdd/22', () => {
      const expected = 'Not Found';
      const path = 'hdd/22';
      const actual = getInfo(pc, path);
      assert.equal(actual, expected);
    });

    it('path = /some/other', () => {
      const expected = 'Not Found';
      const path = 'some/other';
      const actual = getInfo(pc, path);
      assert.equal(actual, expected);
    });

    it('path = /hdd/length', () => {
      const expected = 'Not Found';
      const path = 'hdd/length';
      const actual = getInfo(pc, path);
      assert.equal(actual, expected);
    });

    it('path = /board/vendor/length', () => {
      const expected = 'Not Found';
      const path = 'board/vendor/length';
      const actual = getInfo(pc, path);
      assert.equal(actual, expected);
    });

    it('path = /length', () => {
      const expected = 42;
      const path = 'length';
      const actual = getInfo(pc, path);
      assert.equal(actual, expected);
    });
  });
});
