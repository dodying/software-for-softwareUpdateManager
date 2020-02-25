'use strict'

let data = {
  url: 'https://rime.im/download/',
  version: 'a[href="https://bintray.com/rime/weasel/release"]',
  changelog: {
    url: 'https://rime.im/release/weasel/',
    selector: '.mypage',
    attr: 'text',
    match: /^#[\d-]+/,
    split: true
  },
  download: 'a[href="https://bintray.com/rime/weasel/release"]+a',
  beforeInstall: info => {
    let path = require('path')
    let setup = path.resolve(info.parentPath, 'WeaselSetup.exe')
    if (require('fs').existsSync(setup)) require('child_process').execSync(`"${setup}" /u`)
  },
  install: 'install_nsis',
  afterInstall: info => {
    let path = require('path')
    let setup = path.resolve(info.parentPath, 'WeaselSetup.exe')
    require('child_process').execSync(`"${setup}" /i`)
  }
}
module.exports = data
