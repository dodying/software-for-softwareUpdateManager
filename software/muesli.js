'use strict';

module.exports = {
  type: 'software-list',
  list: {
    beehive: {
      site: {
        GitHub: 'https://github.com/muesli/beehive/releases/latest'
      },
      versionChoice: 'Windows_x86_64.tar.gz',
      install: 'install_zipped_single'
    },
    duf: {
      site: {
        GitHub: 'https://github.com/muesli/duf/releases/latest'
      },
      versionChoice: 'Windows_x86_64.zip',
      install: 'install_zipped_single'
    },
    'git-o-matic': {
      site: {
        GitHub: 'https://github.com/muesli/gitomatic/releases/latest'
      },
      versionChoice: 'Windows_x86_64.tar.gz',
      install: 'install_zipped_single'
    }
  }
};
