// 'use strict';

// // Referrer: https://www.portablefreeware.com/index.php?id=483
// // To disable advertisements: http://www.freewaregenius.com/how-to-turn-ads-off-in-utorrent/

'use strict';
let lastChoice;

module.exports = {
  url: 'https://download-new.utorrent.com/client-versions.json',
  version: (res, $, fns, choice = {}) => { lastChoice = choice; return res.json[choice.edition || 'utorrent'].find(i => i.track === (choice.track || 'stable')).target; },
  changelog: ['https://blog.utorrent.com/releases/windows/', '.entry-content'],
  download: (res, $, fns, choice) => { choice = choice || lastChoice; return `https://download-new.utorrent.com/uuid/${res.json[choice.edition || 'utorrent'].find(i => i.track === (choice.track || 'stable')).uuid}`; }, // download-lb.utorrent.com
  install: ['install_zipped_single', 'Carrier.EXE'],
  afterInstall: info => {
    const path = require('path');
    const fs = require('fs');
    const setting = path.resolve(info.parentPath, 'settings.dat');
    if (!fs.existsSync(setting)) fs.writeFileSync(setting, '');
  },
  other: {
    beta: {
      changelog: ['https://utclient.utorrent.com/offers/beta_release_notes/release_notes.html', '.content>.post'],
      versionChoice: { track: 'beta' },
      install: null
    },
    web: {
      changelog: ['https://blog.utorrent.com/releases/windows-web/', '.entry-content'],
      versionChoice: { edition: 'utweb', track: 'stable' },
      install: 'install'
    },
    'web-beta': {
      changelog: null,
      versionChoice: { edition: 'utweb', track: 'beta' },
      install: 'install_nsis'
    },
    '3rdparty': {
      changelog: null,
      versionChoice: { edition: 'utorrent-3rdparty', track: 'stable' },
      install: null
    },
    browser: {
      changelog: null,
      versionChoice: { edition: 'ut-browser', track: 'beta' },
      install: ['install_zipped', 'install']
    },
    hydra: {
      changelog: null,
      versionChoice: { edition: 'hydra-ut', track: 'stable' },
      install: 'install'
    },
    'hydra-beta': {
      changelog: null,
      versionChoice: { edition: 'hydra-ut', track: 'beta' },
      install: 'install'
    }
  }
};
