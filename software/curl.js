'use strict'

let data = {
  url: 'https://curl.haxx.se/windows/',
  version: {
    selector: '.relatedbox+p+p',
    match: /Build: (.*?)\s+/
  },
  download: {
    selector: 'a.windl[href$="win64-mingw.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, '*\\bin')
  }
}
module.exports = data
