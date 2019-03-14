'use strict'

let data = {
  url: 'https://imagemagick.org/script/download.php',
  version: {
    selector: 'a[href*="portable"][href$="x64.zip"]',
    attr: 'href',
    match: /(\d+[\d.-]+\d+)/
  },
  download: {
    selector: 'a[href*="portable"][href$="x64.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, ['www', 'index.html', 'images'])
  }
}
module.exports = data
