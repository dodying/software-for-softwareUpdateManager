'use strict';

const data = {
  site: {
    GitHub: ' https://github.com/mpv-player/mpv/releases/latest'
  },
  versionChoice: i => !i.prerelease,
  download: 'https://downloads.sourceforge.net/project/mpv-player-windows/stable/mpv-{version}-x86_64.7z',
  install: ['install_zipped_single', 'mpv.exe'],
  other: {
    git: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/mpv-player-windows/files/64bit/'
      },
      versionChoice: /mpv-x86_64-(.*?).7z/,
      changelog: null,
      download: null,
      install: 'install'
    }
  }
};
module.exports = data;
