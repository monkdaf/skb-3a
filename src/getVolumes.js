// @flow

/**
 * Created by daf on 16.11.2016.
 */

const getVolumes = (pcProps) => {
  if (!pcProps || !pcProps.hdd) {
    return null;
  }
  let mapVol = new Map();
  mapVol = pcProps.hdd.reduce((prevVal, item) => {
    if (prevVal.has(item.volume)) {
      prevVal.set(item.volume, prevVal.get(item.volume) + item.size);
    } else {
      prevVal.set(item.volume, item.size);
    }
    return prevVal;
  }, new Map());
  let str = '{';
  mapVol.forEach((val, key) => {
    str += `"${key}" : "${val}B",`;
  });
  return JSON.parse(`${str.slice(0, -1)}}`);
};

export default getVolumes;
