'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/termix-io/releases/releases'
  },
  versionChoice: [/Termix-beta-(.*?)-windows.zip/, /beta-(.*)/],
  install: 'install',
  other: {
    beta: {
      versionChoice: [/Termix-beta-(.*?)-windows.zip/, /beta-(.*)/]
    },
    alpha: {
      versionChoice: [/Termix-alpha-(.*?)-windows.zip/, /alpha-(.*)/]
    }
  }
};
module.exports = data;
