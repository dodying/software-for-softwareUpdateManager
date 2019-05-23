'use strict'

let data = {
  url: 'http://www.alldup.de/download.php',
  version: {
    selector: 'a[href="/hilfe/a_versionshistory3.php"]'
  },
  download: {
    plain: 'http://www.allsync.de/download/AllSyncSetupDemo.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
