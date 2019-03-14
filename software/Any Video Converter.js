'use strict'

let data = {
  commercial: 2,
  url: 'https://www.any-video-converter.com/products/for_video_ultimate/whatnew.php',
  version: {
    selector: '.number'
  },
  download: {
    plain: 'https://www.any-video-converter.com/avc-ultimate.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
