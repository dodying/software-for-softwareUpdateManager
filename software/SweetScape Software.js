'use strict';

module.exports = {
  type: 'software-list',
  list: {
    '010 Editor': {
      commercial: 3,
      url: 'https://www.sweetscape.com/010editor/latest_version.html',
      version: 'h2',
      changelog: 'h2+ul',
      download: 'https://www.sweetscape.com/download/010EditorWin64Installer.exe',
      install: 'install_inno'
    },
    '010 Memorizer': {
      url: 'https://www.sweetscape.com/download/',
      version: '[width="33%"][valign="top"]+td+td',
      download: '[href^="../download/010mem"][href$=".exe"]',
      install: 'install_inno'
    },
    Hamic: {
      url: 'https://www.sweetscape.com/download/',
      version: '[width="33%"][valign="top"]+td+td+td+td',
      download: '[href^="../download/hamic"][href$=".exe"]',
      install: 'install_inno'
    }
  }
};
