'use strict'

let data = {
  commercial: 2,
  url: 'https://freefilesync.org/download.php',
  version: {
    selector: '.changelog-header'
  },
  download: {
    selector: '.dl-section .direct-download-link[href*="Windows"]'
  },
  other: {
    // The latest version support install with portable is 8.6
    'portable': { // The latest version don't need install.dat is 7.9
      url: null,
      site: {
        FileHippo: 'https://filehippo.com/download_freefilesync_windows/66224/'
      },
      install: function (output, iPath, fns) {
        return fns.install.inno(output, iPath)
      }
    }
  }
}
module.exports = data
