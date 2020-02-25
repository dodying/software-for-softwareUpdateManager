'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/metabrainz/picard/releases/latest'
  },
  versionChoice: /release-(.*)/,
  downloadChoice: '[href$=".exe"]',
  install: 'install_nsis'
}
module.exports = data
