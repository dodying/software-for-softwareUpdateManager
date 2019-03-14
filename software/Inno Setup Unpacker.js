'use strict'

let data = {
  withoutHeader: true,
  // url: 'http://innounp.sourceforge.net/',
  url: 'https://sourceforge.net/projects/innounp/files/innounp/',
  version: {
    // selector: 'h2:contains("History")+p>b'
    selector: '.name'
  },
  download: {
    plain: 'https://sourceforge.net/projects/innounp/files/latest/download'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, 'innounp.exe')
  }
}
module.exports = data
