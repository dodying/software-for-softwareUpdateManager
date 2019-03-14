'use strict'

let data = {
  url: 'https://mirillis.com/download-splash-free-hd-video-player',
  version: {
    selector: '.download_btn+ul>li'
  },
  download: {
    selector: '.download_btn'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
