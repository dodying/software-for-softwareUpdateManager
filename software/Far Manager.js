'use strict';

const data = {
  url: 'https://farmanager.com/download.php?l=en',
  version: ['li>b', 'text', /v([\d.]+) build (\d+) x/, '$1.$2'],
  download: 'a.body_link[href$=".7z"][href*="x64"]',
  install: 'install',
  other: {
    nightly: {
      version: ['h2:contains("Nightly")+div li>b', 'text', /v([\d.]+) build (\d+) x/, '$1.$2'],
      download: 'h2:contains("Nightly")+div a.body_link[href$=".7z"][href*="x64"]'
    },
    latest: {
      site: {
        GitHub: 'https://github.com/FarGroup/FarManager/releases/latest'
      },
      versionChoice: ['Far.x64(.*).7z', /^ci\/v(.*)$/]
    }
  }
};
module.exports = data;
