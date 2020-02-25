'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/yuzu-emu/yuzu-nightly/releases/latest'
  },
  versionChoice: /nightly-(.*)/,
  downloadChoice: '[href$=".7z"][href*="yuzu-windows"]',
  install: 'install',
  other: {
    nightly: {
      site: {
        GitHub: 'https://github.com/yuzu-emu/yuzu-nightly/releases/latest'
      },
      versionChoice: /nightly-(.*)/
    },
    canary: {
      site: {
        GitHub: 'https://github.com/yuzu-emu/yuzu-canary/releases/latest'
      },
      versionChoice: /canary-(.*)/
    }
  }
}
module.exports = data
