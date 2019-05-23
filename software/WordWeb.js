'use strict'

let data = {
  commercial: 3,
  url: 'https://wordweb.info/',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'https://wordweb.info/cgi-bin/geoip/wordweb.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
