
import { it, describe } from 'mocha';
import assert from 'assert';
import getUserName from '../src/getUserName';
import getPC from '../src/getPC';

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

  describe('Check module "getPC"', () => {
    it('param is empty', () => {
      const pc = getPC();
      assert.equal('Invalid username', pc.board.vendor);
    });



  });
});
