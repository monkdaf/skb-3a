/**
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

import { it, describe } from 'mocha';
import assert from 'assert';
import getUserName from '../src/getUserName';

describe('Test', () => {
  describe('Check test subsystem', () => {
    it('test system is work	', () => {
      assert.equal('for test', 'for test');
    });
  });

  describe('Check module "getUserName"', () => {
    it('param is empty', () => {
      assert.equal('Invalid username', getUserName(''));
    });

    it('param is "https://vk.com/skillbranch"', () => {
      assert.equal('@skillbranch', getUserName('https://vk.com/skillbranch'));
    });

    it('param is "//vk.com/skillbranch"', () => {
      assert.equal('@skillbranch', getUserName('//vk.com/skillbranch'));
    });

    it('param is "skillbranch"', () => {
      assert.equal('@skillbranch', getUserName('skillbranch'));
    });

    it('param is "https://vk.com/skillbranch?w=wall-117903599_1076"', () => {
      assert.equal('@skillbranch', getUserName('https://vk.com/skillbranch?w=wall-117903599_1076'));
    });

    it('param is "@durov"', () => {
      assert.equal('@durov', getUserName('@durov'));
    });

    it('param is "https://github.com/kriasoft/react-starter-kit"', () => {
      assert.equal('@kriasoft', getUserName('https://github.com/kriasoft/react-starter-kit'));
    });

  });
});
