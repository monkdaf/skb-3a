// @flow

/**
 * Created by daf on 16.11.2016.
 */
import _ from 'lodash';

const resolvePath = (prop, arrPath) => {
  if (prop[arrPath[0]] === undefined) {
    return undefined;
  }

  if (arrPath.length === 1) {
    if ((arrPath[0] === 'length') &&
      (_.isArray(prop) || (typeof prop === 'string'))
    ) {
      return undefined;
    }
    return prop[arrPath[0]];
  }

  return resolvePath(prop[arrPath[0]], arrPath.slice(1), prop);
};

const getInfo = (pc, path) => {
  if (!pc) {
    return 'Not Found';
  }
  if (path === '') {
    return pc;
  }

  const arrPath = path.split('/');
  const retData = resolvePath(pc, arrPath, {});

  return retData === undefined ? 'Not Found' : retData;
};

export default getInfo;
