'use strict'

let data = {
  commercial: 3,
  url: 'https://www.smartuninstall.com/download_uninstaller.html',
  version: '.span12:contains("Version History")>h5',
  changelog: {
    selector: '.span12:contains("Version History")',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: '[href^="download.php"]',
  install: 'install_inno'
}
module.exports = data
