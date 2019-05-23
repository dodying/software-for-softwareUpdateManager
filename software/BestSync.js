'use strict'

let data = {
  commercial: 2,
  url: 'http://www.risefly.com/fsedwld.htm',
  version: {
    selector: 'h2:contains("Version")',
    match: /Version (.*?),/
  },
  download: {
    plain: 'http://www.risefly.com/2019/BestSyncFilesX64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'BestSync')
  }
}
module.exports = data
