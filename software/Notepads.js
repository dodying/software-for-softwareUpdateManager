'use strict';

module.exports = {
  site: {
    GitHub: 'https://github.com/JasonStein/Notepads/releases/latest'
  },
  versionChoice: '.msixbundle',
  install: (info) => {
    return info.fns.install.cli(info, 'powershell', ['-Command', `Add-AppXPackage "${info.output}"`]);
  }
};
