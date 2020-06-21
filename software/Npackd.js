'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/tim-lebedkov/npackd-cpp/releases/latest'
  },
  versionChoice: ['Npackd64-(.*).zip', /version_(.*)/],
  install: 'install',
  other: {
    cli: {
      versionChoice: ['NpackdCL64-(.*).zip', /version_(.*)/]
    },
    beta: {
      site: {
        GitHub: 'https://github.com/tim-lebedkov/npackd-cpp/releases'
      }
    },
    'cli-beta': {
      site: {
        GitHub: 'https://github.com/tim-lebedkov/npackd-cpp/releases'
      },
      versionChoice: ['NpackdCL64-(.*).zip', /version_(.*)/]
    }
  }
};
module.exports = data;
