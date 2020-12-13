'use strict';

module.exports = {
  url: 'https://bundle.bh3.com/tmp/pc/VersionInfo.txt',
  version: (res, $) => res.json.cur_version,
  download: (res, $) => res.json.download_url + '/' + res.json.full_version_file.name,
  install: 'install'
};
