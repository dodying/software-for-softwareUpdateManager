'use strict';

module.exports = {
  url: 'https://grevival.net/api/sandburst/version.php',
  version: (res) => res.json.version,
  changelog: (res) => res.json.comment,
  download: (res) => res.json.url,
  install: 'install'
};
