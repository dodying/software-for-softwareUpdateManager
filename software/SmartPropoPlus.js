'use strict';

module.exports = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/smartpropoplus/files/smartpropoplus/'
  },
  versionChoice: /SPP-(.*)/,
  downloadChoice: [/SPP-(.*)/, 'SppSetup.exe'],
  install: 'install_inno_type'
};
