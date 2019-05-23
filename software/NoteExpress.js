'use strict'

let data = {
  commercial: 3,
  url: 'http://www.inoteexpress.com/aegean/index.php/home/ne/index.html',
  version: {
    selector: '.banner-3'
  },
  download: {
    plain: 'http://www.inoteexpress.com/support/cgi-bin/download_chs.cgi'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
