'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/Jigsaw-Code/outline-client/releases/latest'
  },
  versionChoice: [/.exe$/, /windows-v(.*)/],
  install: 'install_nsis',
  other: {
    daily: {
      site: {
        GitHub: 'https://github.com/Jigsaw-Code/outline-client/releases'
      },
      versionChoice: [/.exe$/, /daily-(.*)/]
    }
  }
};
module.exports = data;
