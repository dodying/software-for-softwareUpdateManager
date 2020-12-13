'use strict';

module.exports = {
  url: 'https://www.den4b.com/changelogs/hooker',
  version: '.changelogVersionBlock>.bg-success>td:nth-child(1)',
  changelog: '.changelogVersionBlock>.bg-success+tr',
  download: async (res, $, fns, choice) => fns.walkLink('https://www.den4b.com/download/hooker/portable', fns, '#elementDownloadLink'),
  install: 'install'
};
