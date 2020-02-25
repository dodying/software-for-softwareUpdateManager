'use strict'

let data = {
  commercial: 1,
  url: 'https://www.syntevo.com/smartgit/download/',
  version: '.formatted-content',
  changelog: {
    url: 'https://www.syntevo.com/smartgit/changelog.txt',
    match: /^SmartGit [\d.]+/,
    split: true
  },
  download: 'a[href*="portable"][href$=".7z"]',
  install: 'install',
  afterInstall: info => {
    let path = require('path')
    let fs = require('fs')

    let setting = path.resolve(info.parentPath, '.settings', 'settings.xml')
    if (fs.existsSync(setting)) fs.unlinkSync(setting)
  },
  other: {
    preview: {
      url: 'https://www.syntevo.com/smartgit/preview/',
      version: ['.headline--lvl-2', 'text', /Download SmartGit (.*)/],
      changelog: {
        url: 'https://www.syntevo.com/smartgit/changelog-eap.txt',
        match: /^SmartGit [\d.]+/,
        split: true
      }
    }
  }
}
module.exports = data
