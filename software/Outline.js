'use strict'

let data = {
  site: {
    'GitHub-Api': 'https://api.github.com/repos/Jigsaw-Code/outline-client/releases'
  },
  versionChoice: [/.exe$/, /windows-v(.*)/, false],
  install: 'install_nsis',
  other: {
    daily: { versionChoice: [/.exe$/, /daily-(.*)/] }
  }
}
module.exports = data
