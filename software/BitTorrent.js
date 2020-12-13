'use strict';
let lastChoice;

module.exports = {
  url: 'https://download-new.utorrent.com/client-versions.json',
  version: (res, $, fns, choice = {}) => { lastChoice = choice; return res.json[choice.edition || 'bittorrent'].find(i => i.track === (choice.track || 'stable')).target; },
  changelog: ['https://blog.bittorrent.com/releases/windows/', 'div>h3'],
  download: (res, $, fns, choice) => { choice = choice || lastChoice; return `https://download-new.utorrent.com/uuid/${res.json[choice.edition || 'bittorrent'].find(i => i.track === (choice.track || 'stable')).uuid}`; }, // download-lb.utorrent.com
  install: ['install_zipped_single', 'Carrier.EXE'],
  afterInstall: info => {
    const path = require('path');
    const fs = require('fs');
    const setting = path.resolve(info.parentPath, 'settings.dat');
    if (!fs.existsSync(setting)) fs.writeFileSync(setting, '');
  },
  other: {
    beta: {
      changelog: null,
      versionChoice: { track: 'beta' },
      install: null
    },
    web: {
      changelog: ['https://blog.bittorrent.com/releases/windows-web/', '.entry-content'],
      versionChoice: { edition: 'utweb', track: 'stable' },
      install: 'install'
    },
    'web-beta': {
      changelog: null,
      versionChoice: { edition: 'utweb', track: 'beta' },
      install: 'install_nsis'
    },
    sync: {
      changelog: null,
      versionChoice: { edition: 'btsync', track: 'stable' },
      install: null
    },
    '3rdparty': {
      changelog: null,
      versionChoice: { edition: 'bittorrent-3rdparty', track: 'stable' },
      install: null
    },
    '3rdparty-beta': {
      changelog: null,
      versionChoice: { edition: 'bittorrent-3rdparty', track: 'beta' },
      install: null
    },
    hydra: {
      changelog: null,
      versionChoice: { edition: 'hydra-bt', track: 'stable' },
      install: 'install'
    }
  }
};
