'use strict';

module.exports = {
  type: 'software-list',
  list: {
    FormatFactory: {
      url: 'http://www.pcfreetime.com/formatfactory/CN/index.html',
      version: '.info>span',
      changelog: ['http://www.pcfreetime.com/formatfactory/CN/log.html', '.log>ul'],
      download: 'http://down.pcgeshi.com/FormatFactory_setup.exe',
      install: 'install_nsis_cli'
    },
    'Picosmos Show': {
      url: 'http://pcfreetime.com/picosmos/ps_index.php',
      version: '[style="font-size:1em;"]',
      download: '[href*="/pure/"][href$=".exe"]',
      install: 'install_nsis'
    },
    Picosmos: {
      url: 'http://www.pcfreetime.com/picosmos/index.php',
      version: '[style="font-size:1em;"]',
      changelog: ['http://www.pcfreetime.com/picosmos/changelog.php', '.changlog dl>dd'],
      download: '[href*="/pure/"][href$=".exe"]',
      install: 'install_nsis'
    }
  }
};
