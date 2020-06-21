'use strict';

module.exports = {
  site: {
    GitHub: 'https://github.com/microsoft/winget-cli/releases/latest'
  },
  versionChoice: 'Microsoft.DesktopAppInstaller_(.*?).appxbundle',
  install: (info) => {
    return info.fns.install.cli(info, 'powershell', ['-Command', `Add-AppXPackage "${info.output}"`]);
  }
};
