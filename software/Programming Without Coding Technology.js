'use strict';

module.exports = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/doublesvsoop/files/PWCT%20For%20MS-Windows/'
  },
  versionChoice: /PWCT ([\d.]+) \(/,
  downloadChoice: [/PWCT ([\d.]+) \(/, 'Fayed_PWCT_.*?.exe'],
  install: 'install_nsis'
};
