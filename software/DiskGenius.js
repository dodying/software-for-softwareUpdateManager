'use strict'

let data = {
  commercial: 2,
  url: 'http://www.eassos.com/download.php',
  version: {
    selector: 'tr:contains("DiskGenius") .download-ver'
  },
  download: {
    selector: '.menu-partitionguru .par-group>a'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
