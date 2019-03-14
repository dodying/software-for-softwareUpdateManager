'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/simple_program_debugger.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/simpleprogramdebugger-x64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
