'use strict';

const data = {
  fixedPath: '%ProgramFiles%\\darktable\\bin\\darktable.exe',
  site: {
    GitHub: 'https://github.com/darktable-org/darktable/releases/latest'
  },
  versionChoice: /release-(.*)/,
  downloadChoice: '[href$="win64.exe"]',
  install: 'install_nsis_cli'
};
module.exports = data;
