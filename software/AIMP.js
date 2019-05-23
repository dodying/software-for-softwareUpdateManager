'use strict'

let data = {
  url: 'http://www.aimp.ru/?do=download&os=windows',
  version: {
    selector: 'h1'
  },
  download: {
    selector: 'a:contains("Programki.net")'
  },
  install: function (output, iPath, fns, choice) {
    return fns.install.cli(output, iPath, output, ['/AUTO={dir}', '/PORTABLE', '/SILENT'])
  },
  afterInstall: async function (output, iPath, fns, choice) {
    const path = require('path')
    const fse = require('fs-extra')
    let parentPath = path.parse(iPath).dir
    let backup = path.resolve(parentPath, '!Backup')
    if (fse.existsSync(backup)) {
      if (typeof choice === 'undefined' && require('readline-sync').keyInYNStrict('Continue to delete backup?')) {
        require('fs-extra').removeSync(backup)
      } else if (typeof choice === 'boolean' && choice) {
        require('fs-extra').removeSync(backup)
      }
    }
  },
  other: {
    backup: { installChoice: false },
    nobackup: { installChoice: true }
  }
}
module.exports = data
