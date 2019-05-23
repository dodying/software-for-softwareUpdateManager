'use strict'

let data = {
  url: 'https://github.com/Tatsu-syo/noMeiryoUI/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /TAG-(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
