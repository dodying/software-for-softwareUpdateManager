'use strict'

let data = {
  url: 'https://www.majorgeeks.com/mg/getmirror/k_lite_codec_pack_standard,1.html',
  version: {
    selector: '.geekywraplight>h1'
  },
  download: {
    plain: 'https://www.majorgeeks.com/index.php?ct=files&action=download&'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.cli(output, iPath)
  },
  other: {
    Basic: {
      url: 'https://www.majorgeeks.com/mg/getmirror/k_lite_codec_pack_basic,1.html'
    },
    Full: {
      url: 'https://www.majorgeeks.com/mg/getmirror/k_lite_codec_pack_full,1.html'
    },
    Update: {
      url: 'https://www.majorgeeks.com/mg/getmirror/k_lite_codec_pack_update,1.html'
    }
  }
}
module.exports = data
