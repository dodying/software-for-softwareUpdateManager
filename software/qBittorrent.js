'use strict';

const data = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/qbittorrent/files/qbittorrent-win32/'
  },
  downloadChoice: [null, 'x64_setup.exe'],
  changelog: ['https://www.qbittorrent.org/news.php', '#StretchHome>ul'],
  install: 'install',
  other: {
    ci: {
      site: {
        'GitHub-actions': 'https://github.com/qbittorrent/qBittorrent'
      },
      versionChoice: 'Windows_x64',
      changelog: null,
      downloadChoice: null,
      install: ['install', null, 'build']
    }
  }
};
module.exports = data;
