'use strict';

const data = {
  site: {
    // https://github.com/citra-emu/citra
    GitHub: 'https://github.com/citra-emu/citra-nightly/releases/latest'
  },
  versionChoice: ['citra-windows-mingw-(.*).7z', /nightly-(.*)/],
  install: ['install'],
  other: {
    nightly: {
      site: {
        GitHub: 'https://github.com/citra-emu/citra-nightly/releases/latest'
      },
      versionChoice: ['citra-windows-mingw-(.*).7z', /nightly-(.*)/]
    },
    canary: {
      site: {
        GitHub: 'https://github.com/citra-emu/citra-canary/releases/latest'
      },
      versionChoice: ['citra-windows-mingw-(.*).7z', /canary-(.*)/]
    }
  }
};
module.exports = data;
