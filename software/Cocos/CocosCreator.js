'use strict';

module.exports = {
  url: 'https://creator-api.cocos.com/api/cocoshub/editor_version_list',
  version: (res, $) => res.json.data['2d'][0].version,
  download: (res, $) => res.json.data['2d'][0].win32,
  install: 'install',
  other: {
    '3d': {
      version: (res, $) => res.json.data['3d'][0].version,
      download: (res, $) => res.json.data['3d'][0].win32
    }
  }
};
