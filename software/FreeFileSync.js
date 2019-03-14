'use strict'

let data = {
  commercial: 2,
  url: 'https://freefilesync.org/download.php',
  version: {
    selector: '.changelog-header'
  },
  download: {
    selector: '.dl-section .direct-download-link[href*="Windows"]'
  }/* ,
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  } */
}
module.exports = data
