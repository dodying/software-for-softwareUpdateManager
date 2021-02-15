'use strict';

module.exports = {
  type: 'software-list',
  list: {
    arkade: {
      site: {
        GitHub: 'https://github.com/alexellis/arkade/releases/latest'
      },
      versionChoice: '.exe$',
      install: 'install_single'
    },
    k3sup: {
      site: {
        GitHub: 'https://github.com/alexellis/k3sup/releases/latest'
      },
      versionChoice: '.exe$',
      install: 'install_single',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/alexellis/k3sup/releases'
          }
        }
      }
    }
  }
};
