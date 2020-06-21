'use strict';

module.exports = {
  fixedPath: '%ProgramFiles%/WindowsApps/Microsoft.WindowsTerminal_1.0.1401.0_x64__8wekyb3d8bbwe',
  site: {
    GitHub: 'https://github.com/microsoft/terminal/releases/latest'
  },
  versionChoice: 'Microsoft.WindowsTerminal_(.*?).msixbundle',
  install: (info) => {
    return info.fns.install.cli(info, 'powershell', ['-Command', `Add-AppXPackage "${info.output}"`]);
  },
  other: {
    preview: {
      versionChoice: 'Microsoft.WindowsTerminalPreview_(.*?).msixbundle'
    }
  }
};
