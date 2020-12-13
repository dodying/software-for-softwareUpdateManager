'use strict';

module.exports = {
  url: 'https://www.crysearch.nl/index.php?p=downloads',
  version: 'p+h4',
  changelog: ['https://www.crysearch.nl/index.php?p=relnotes', '.content>ul'],
  download: '[href$=".zip"]',
  install: ['install', null, 'x64']
};
