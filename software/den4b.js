'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Colors: {
      commercial: 1,
      url: 'https://www.den4b.com/changelogs/colors',
      version: '.changelogVersionBlock>.bg-success>td:nth-child(1)',
      changelog: '.changelogVersionBlock>.bg-success+tr',
      download: async (res, $, fns, choice) => fns.walkLink('https://www.den4b.com/download/colors/portable', fns, '#elementDownloadLink'),
      install: 'install',
      other: {
        beta: {
          version: '.changelogVersionBlock>tr>td:nth-child(1)',
          changelog: '.changelogVersionBlock>tr+tr',
          download: async (res, $, fns, choice) => fns.walkLink('https://www.den4b.com/download/colors/beta', fns, '#elementDownloadLink')
        }
      }
    },
    CPUMon: {
      url: 'https://www.den4b.com/changelogs/cpumon',
      version: '.changelogVersionBlock>.bg-success>td:nth-child(1)',
      changelog: '.changelogVersionBlock>.bg-success+tr',
      download: async (res, $, fns, choice) => fns.walkLink('https://www.den4b.com/download/cpumon/portable', fns, '#elementDownloadLink'),
      install: 'install'
    },
    Hasher: {
      commercial: 1,
      url: 'https://www.den4b.com/changelogs/hasher',
      version: '.changelogVersionBlock>.bg-success>td:nth-child(1)',
      changelog: '.changelogVersionBlock>.bg-success+tr',
      download: async (res, $, fns, choice) => fns.walkLink('https://www.den4b.com/download/hasher/portable', fns, '#elementDownloadLink'),
      install: 'install',
      other: {
        beta: {
          version: '.changelogVersionBlock>tr>td:nth-child(1)',
          changelog: '.changelogVersionBlock>tr+tr',
          download: async (res, $, fns, choice) => fns.walkLink('https://www.den4b.com/download/hasher/beta', fns, '#elementDownloadLink')
        }
      }
    },
    Hooker: {
      url: 'https://www.den4b.com/changelogs/hooker',
      version: '.changelogVersionBlock>.bg-success>td:nth-child(1)',
      changelog: '.changelogVersionBlock>.bg-success+tr',
      download: async (res, $, fns, choice) => fns.walkLink('https://www.den4b.com/download/hooker/portable', fns, '#elementDownloadLink'),
      install: 'install'
    },
    RandPass: {
      commercial: 1,
      url: 'https://www.den4b.com/changelogs/randpass',
      version: '.changelogVersionBlock>.bg-success>td:nth-child(1)',
      changelog: '.changelogVersionBlock>.bg-success+tr',
      download: async (res, $, fns, choice) => fns.walkLink('https://www.den4b.com/download/randpass/portable', fns, '#elementDownloadLink'),
      install: 'install',
      other: {
        beta: {
          version: '.changelogVersionBlock>tr>td:nth-child(1)',
          changelog: '.changelogVersionBlock>tr+tr',
          download: async (res, $, fns, choice) => fns.walkLink('https://www.den4b.com/download/randpass/beta', fns, '#elementDownloadLink')
        }
      }
    },
    ReNamer: {
      commercial: 1,
      url: 'https://www.den4b.com/changelogs/renamer',
      version: '.changelogVersionBlock>.bg-success>td:nth-child(1)',
      changelog: '.changelogVersionBlock>.bg-success+tr',
      download: async (res, $, fns, choice) => fns.walkLink('https://www.den4b.com/download/renamer/portable', fns, '#elementDownloadLink'),
      install: 'install',
      other: {
        beta: {
          version: '.changelogVersionBlock>tr>td:nth-child(1)',
          changelog: '.changelogVersionBlock>tr+tr',
          download: async (res, $, fns, choice) => fns.walkLink('https://www.den4b.com/download/renamer/beta', fns, '#elementDownloadLink')
        }
      }
    },
    Resizer: {
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
    },
    Shutter: {
      commercial: 1,
      url: 'https://www.den4b.com/changelogs/shutter',
      version: '.changelogVersionBlock>.bg-success>td:nth-child(1)',
      changelog: '.changelogVersionBlock>.bg-success+tr',
      download: async (res, $, fns, choice) => fns.walkLink('https://www.den4b.com/download/shutter/portable', fns, '#elementDownloadLink'),
      install: 'install',
      other: {
        beta: {
          version: '.changelogVersionBlock>tr>td:nth-child(1)',
          changelog: '.changelogVersionBlock>tr+tr',
          download: async (res, $, fns, choice) => fns.walkLink('https://www.den4b.com/download/shutter/beta', fns, '#elementDownloadLink')
        }
      }
    }
  }
};
