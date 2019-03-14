'use strict'

let data = {
  url: 'https://www.majorgeeks.com/mg/getmirror/k_lite_codec_pack_update,1.html',
  version: {
    selector: '.geekywraplight>h1'
  },
  download: {
    plain: 'https://www.majorgeeks.com/index.php?ct=files&action=download&'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.cli(output, iPath)
  }
}
module.exports = data
