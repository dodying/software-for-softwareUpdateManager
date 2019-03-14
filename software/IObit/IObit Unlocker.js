'use strict'

let data = {
  url: 'https://www.majorgeeks.com/mg/getmirror/iobit_unlocker,1.html',
  version: {
    selector: '.geekywraplight>h1'
  },
  download: {
    plain: 'https://www.majorgeeks.com/index.php?ct=files&action=download&'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath, null, { 'IObitUnlockerExtension': '2', 'IObitUnlocker': '9' })
  }
}
module.exports = data
