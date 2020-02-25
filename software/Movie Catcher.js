'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/EvilCult/moviecatcher/releases'
  },
  versionChoice: /Beta(.*)\(/,
  downloadChoice: '[href$="Windows.zip"]',
  install: ['install_zipped_single', 'Movie Catcher.exe']
}
module.exports = data
