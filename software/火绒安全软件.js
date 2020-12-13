'use strict';

module.exports = {
  url: 'https://www.huorong.cn/versionShow.php',
  version: (res) => res.json.version,
  download: (res) => res.json.urlFull,
  install: 'install',
  other: {
    all: {
      download: (res) => res.json.urlAll
    }
  }
};
