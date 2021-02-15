'use strict';

module.exports = {
  type: 'software-list',
  list: {
    GitHub: {
      url: 'https://central.github.com/deployments/desktop/desktop/changelog.json',
      version: (res, $) => res.json[0].version,
      changelog: async (res, $) => res.json[0].notes.join('\n'),
      download: 'https://central.github.com/deployments/desktop/desktop/latest/win32',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    runner: {
      site: {
        GitHub: 'https://github.com/actions/runner/releases/latest'
      },
      versionChoice: '-win-x64-(.*?).zip',
      install: 'install'
    }
  }
};
