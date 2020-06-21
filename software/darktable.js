'use strict';

const data = {
  fixedPath: '%ProgramFiles%\\darktable\\bin\\darktable.exe',
  site: {
    GitHub: 'https://github.com/darktable-org/darktable/releases/latest'
  },
  versionChoice: ['win64.exe', /release-(.*)/],
  install: 'install_nsis_cli'
};
module.exports = data;
