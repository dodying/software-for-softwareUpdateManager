'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Chroma: {
      site: {
        GitHub: 'https://github.com/alecthomas/chroma/releases/latest'
      },
      versionChoice: 'windows-amd64.tar.gz',
      install: ['install_zipped', 'install_zipped_single']
    },
    'Go Meta Linter': {
      site: {
        GitHub: 'https://github.com/alecthomas/gometalinter/releases/latest'
      },
      versionChoice: 'windows-amd64.zip',
      install: 'install'
    }
  }
};
