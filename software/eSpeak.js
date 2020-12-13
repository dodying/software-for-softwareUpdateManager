'use strict';

module.exports = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/espeak/files/espeak/'
  },
  versionChoice: /espeak-(.*)/,
  downloadChoice: [/espeak-(.*)/, '.exe'],
  install: 'install_inno'
};
