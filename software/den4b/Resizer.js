'use strict';

module.exports = {
  commercial: 1,
  url: 'https://www.den4b.com/changelogs/resizer',
  version: '.changelogVersionBlock>.bg-success>td:nth-child(1)',
  changelog: '.changelogVersionBlock>.bg-success+tr',
  download: async (res, $, fns, choice) => fns.walkLink('https://www.den4b.com/download/resizer/portable', fns, '#elementDownloadLink'),
  install: 'install',
  other: {
    beta: {
      version: '.changelogVersionBlock>tr>td:nth-child(1)',
      changelog: '.changelogVersionBlock>tr+tr',
      download: async (res, $, fns, choice) => fns.walkLink('https://www.den4b.com/download/resizer/beta', fns, '#elementDownloadLink')
    }
  }
};
