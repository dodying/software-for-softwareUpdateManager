'use strict';

module.exports = {
  site: {
    GitHub: 'https://github.com/ShankarBUS/ModernFlyouts/releases/latest'
  },
  versionChoice: '.Msixbundle',
  install: (info) => {
    return info.fns.install.cli(info, 'powershell', ['-Command', `Add-AppXPackage "${info.output}"`]);
  }
};
