'use strict'

let data = {
  site: {
    'GitHub': 'https://github.com/craftwar/suspend/releases/latest'
  },
  versionChoice: [/(.*)/, true],
  downloadChoice: '[href$="suspend.7z"]',
  install: 'install_zipped_single'
}
module.exports = data
