'use strict'

let data = {
  url: 'https://ffmpeg.zeranoe.com/builds/',
  version: {
    selector: 'label[title^="Release"]',
    match: /(.*)/
  },
  download: {
    plain: 'https://ffmpeg.zeranoe.com/builds/win64/static/ffmpeg-{version}-win64-static.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, '*\\bin\\*.exe')
  },
  other: {
    nightly: {
      version: {
        selector: 'label[title^="Nightly"]',
        match: /(.*)/
      }
    }
  }
}
module.exports = data
