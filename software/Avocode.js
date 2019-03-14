'use strict'

let data = {
  commercial: 3,
  url: 'https://avocode.com/changelog',
  version: {
    selector: 'div[class^="Releases__Log"]',
    attr: 'id',
    match: /(.*)/
  },
  download: {
    plain: 'https://manager.avocode.com/download/avocode-app/windows-x64/'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
