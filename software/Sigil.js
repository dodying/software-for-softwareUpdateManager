'use strict';

module.exports = {
  type: 'software-list',
  list: {
    PageEdit: {
      site: {
        GitHub: 'https://github.com/Sigil-Ebook/PageEdit/releases/latest'
      },
      versionChoice: 'Windows-x64-Setup.exe',
      install: 'install_inno'
    },
    Sigil: {
      site: {
        GitHub: 'https://github.com/Sigil-Ebook/Sigil/releases/latest'
      },
      versionChoice: 'x64-Setup.exe',
      install: 'install_inno',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/Sigil-Ebook/Sigil/releases'
          }
        }
      }
    }
  }
};
