'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/tim-lebedkov/npackd-cpp/releases/latest'
  },
  versionChoice: /version_(.*)/,
  downloadChoice: '[href*="Npackd64-"][href$=".zip"]',
  install: 'install',
  other: {
    cli: {
      downloadChoice: '[href*="NpackdCL64-"][href$=".zip"]'
    }
  }
}
module.exports = data
