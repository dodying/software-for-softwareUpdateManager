'use strict'

let data = {
  url: 'https://github.com/mashirozx/Pixiv-Nginx/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    selector: 'a[href*="archive"][href$=".zip"]'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
