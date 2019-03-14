'use strict'

let data = {
  url: 'https://www.majorgeeks.com/mg/getmirror/hostsman,1.html',
  version: {
    selector: '.geekywraplight>h1'
  },
  download: {
    plain: 'https://www.majorgeeks.com/index.php?ct=files&action=download&'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_inno')
  }
}
module.exports = data
