'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/kohsuke/winsw/releases'
  },
  versionChoice: /winsw-v(.*)/,
  downloadChoice: '[href$="NET4.exe"]',
  install: 'install_single'
}
module.exports = data
