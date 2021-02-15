'use strict';

module.exports = {
  type: 'software-list',
  list: {
    RunDotNetDll32: {
      site: {
        GitHub: 'https://github.com/0xbadjuju/rundotnetdll32/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    Tokenvator: {
      site: {
        GitHub: 'https://github.com/0xbadjuju/Tokenvator/releases/latest'
      },
      versionChoice: '4.5.exe',
      install: 'install_single',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/0xbadjuju/Tokenvator/releases'
          }
        }
      }
    }
  }
};
