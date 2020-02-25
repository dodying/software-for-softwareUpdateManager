'use strict'

let data = {
  commercial: 2,
  url: 'https://freefilesync.org/download.php',
  version: '.changelog-header',
  changelog: '.sub-section:has(.changelog-header)>.content-margin',
  download: '.dl-section .direct-download-link[href*="Windows"]',
  other: {
    // The latest version support install with portable is 8.6
    'portable': { // The latest version don't need install.dat is 7.9
      site: {
        'FileHippo': 'https://filehippo.com/download_freefilesync_windows/66224/'
      },
      install: 'install_inno'
    }
  }
}
module.exports = data
