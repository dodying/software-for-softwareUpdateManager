'use strict';

module.exports = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/sdcc/files/sdcc-win64/'
  },
  versionChoice: [null, 'sdcc-(.*?)-x64-setup.exe'],
  install: 'install_nsis',
  other: {
    'i586-mingw32msvc': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/sdcc/files/snapshot_builds/i586-mingw32msvc-setup/'
      },
      versionChoice: 'sdcc-(.*?)-setup.exe'
    },
    'x86_64-w64-mingw32': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/sdcc/files/snapshot_builds/x86_64-w64-mingw32-setup/'
      },
      versionChoice: 'sdcc-(.*?)-x64-setup.exe'
    }
  }
};
