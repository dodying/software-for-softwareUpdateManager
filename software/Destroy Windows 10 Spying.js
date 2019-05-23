'use strict'

let data = {
  url: 'https://www.majorgeeks.com/mg/getmirror/destroy_windows_10_spying,1.html',
  version: {
    selector: '.geekywraplight>h1'
  },
  download: {
    plain: 'https://www.majorgeeks.com/index.php?ct=files&action=download&'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
