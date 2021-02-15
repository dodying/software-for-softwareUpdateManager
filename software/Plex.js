'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Plex: {
      url: 'https://plex.tv/api/downloads/6.json',
      version: (res, $) => res.json.computer.Windows.version,
      changelog: async (res, $) => [].concat('Added', res.json.computer.Windows.items_added, 'Fixed', res.json.computer.Windows.items_fixed).join('\n'),
      download: (res, $) => res.json.computer.Windows.releases[0].url,
      install: 'install_nsis'
    },
    PlexMediaPlayer: {
      url: 'https://plex.tv/api/downloads/3.json',
      version: (res, $) => res.json.computer.Windows.version,
      changelog: async (res, $) => [].concat('Added', res.json.computer.Windows.items_added, 'Fixed', res.json.computer.Windows.items_fixed).join('\n'),
      download: (res, $) => res.json.computer.Windows.releases[0].url,
      install: ['install_wix', null, 'PMP.msi', 'PlexMediaPlayer.exe']
    },
    PlexMediaServer: {
      url: 'https://plex.tv/api/downloads/1.json',
      version: (res, $) => res.json.computer.Windows.version,
      changelog: async (res, $) => [].concat('Added', res.json.computer.Windows.items_added, 'Fixed', res.json.computer.Windows.items_fixed).join('\n'),
      download: (res, $) => res.json.computer.Windows.releases[0].url,
      install: ['install_wix', null, 'pms.msi', 'Plex Media Server.exe']
    }
  }
};
