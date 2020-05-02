'use strict'

let data = {
  site: {
    'GitHub-Api': 'https://api.github.com/repos/termix-io/releases/releases'
  },
  versionChoice: [/Termix-beta-(.*?)-windows.zip/, /beta-(.*)/],
  install: 'install',
  other: {
    beta: {
      versionChoice: [/Termix-beta-(.*?)-windows.zip/, /beta-(.*)/]
    },
    alpha: {
      versionChoice: [/Termix-alpha-(.*?)-windows.zip/, /alpha-(.*)/]
    }
  }
}
module.exports = data
