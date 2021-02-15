'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Cloaker: {
      site: {
        GitHub: 'https://github.com/spieglt/Cloaker/releases/latest'
      },
      versionChoice: 'cloakerWindows.zip',
      install: 'install_zipped_single'
    },
    FlyingCarpet: {
      site: {
        GitHub: 'https://github.com/spieglt/FlyingCarpet/releases/latest'
      },
      versionChoice: 'Flying.Carpet.Windows.zip',
      install: 'install',
      other: {
        cli: {
          versionChoice: 'flyingcarpet.CLI.Windows.zip',
          install: 'install_zipped_single'
        }
      }
    }
  }
};
