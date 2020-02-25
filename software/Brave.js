'use strict'

let data = {
  site: {
    'GitHub-Api': 'https://api.github.com/repos/brave/brave-browser/releases'
  },
  versionChoice: i => i.name.match(/Release Channel/) && i.assets.some(j => j.name.match(/win32-x64.zip$/)),
  downloadChoice: /win32-x64.zip$/,
  install: 'install',
  other: {
    beta: {
      versionChoice: i => i.name.match(/Beta Channel/) && i.assets.some(j => j.name.match(/win32-x64.zip$/)),
      downloadChoice: /win32-x64.zip$/
    },
    dev: {
      versionChoice: i => i.name.match(/Dev Channel/) && i.assets.some(j => j.name.match(/win32-x64.zip$/)),
      downloadChoice: /win32-x64.zip$/
    },
    nightly: {
      versionChoice: i => i.name.match(/Nightly Channel/) && i.assets.some(j => j.name.match(/win32-x64.zip$/)),
      downloadChoice: /win32-x64.zip$/
    }
  }
}
module.exports = data
