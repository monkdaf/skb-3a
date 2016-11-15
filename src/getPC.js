// @flow

/**
 * Created by daf on 15.11.2016.
 */
import fetch from 'node-fetch';

const getPC = () => {
  const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';
  console.log('1');
  let pc = {};
  fetch(pcUrl)
    .then(async (res) => {
      pc = await res.json();
      console.log(`pc=${pc.board.vendor}`);
      console.log('2');
      return pc;
    })
    .catch(err => {
      console.log('Чтото пошло не так:', err);
    });
  console.log('5');
};

export default getPC;