'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/HandBrake/HandBrake/releases/latest'
  },
  versionChoice: 'x86_64-Win_GUI.exe',
  install: 'install_nsis',
  other: {
    cli: {
      versionChoice: 'HandBrakeCLI(.*)win-x86_64.zip',
      install: 'install'
    }
  }
};
module.exports = data;
