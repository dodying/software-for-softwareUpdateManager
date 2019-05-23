'use strict'

let data = {
  commercial: 2,
  url: 'https://antdownloadmanager.com/download.php',
  version: {
    selector: '.download_header:contains("Current version")',
    match: /Current version: (\d+[\d.]+\d+ Build \d+) \(/
  },
  download: {
    selector: 'a[href$=".7z"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
