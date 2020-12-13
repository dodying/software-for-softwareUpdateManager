'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/yuzu-emu/yuzu-mainline/releases/latest'
  },
  versionChoice: ['yuzu-windows(.*).7z', /mainline-(.*)/],
  install: ['install', 'yuzu-windows-msvc-source-(.*).tar.xz'],
  other: {
    nightly: {
      site: {
        GitHub: 'https://github.com/yuzu-emu/yuzu-nightly/releases'
      },
      versionChoice: ['yuzu-windows(.*).7z', /nightly-(.*)/]
    },
    canary: {
      site: {
        GitHub: 'https://github.com/yuzu-emu/yuzu-canary/releases'
      },
      versionChoice: ['yuzu-windows(.*).7z', /canary-(.*)/]
    }
  }
};
module.exports = data;
