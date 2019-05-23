'use strict'

let data = {
  commercial: 2,
  url: 'https://www.dupscout.com/downloads.html',
  version: {
    selector: '.downloads_table > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2) > div:nth-child(1) > b:nth-child(1)'
  },
  download: {
    plain: 'http://www.dupscout.com/setups/dupscoutpro_setup_v11.7.26.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
