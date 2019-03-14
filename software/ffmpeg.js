'use strict'

let data = {
  url: 'https://ffmpeg.zeranoe.com/builds/',
  version: {
    selector: 'label[title^="Nightly"]'
  },
  download: {
    plain: 'https://ffmpeg.zeranoe.com/builds/win64/static/ffmpeg-latest-win64-static.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, '*\\bin\\*.exe')
  }
}
module.exports = data
