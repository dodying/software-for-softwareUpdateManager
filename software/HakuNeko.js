'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/manga-download/hakuneko/releases/latest'
  },
  versionChoice: 'windows-setup_amd64.exe',
  install: 'install_inno',
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/manga-download/hakuneko/releases'
      },
      versionChoice: ['windows-setup_amd64.exe', /nightly-(.*)/]
    }
  }
};
module.exports = data;
