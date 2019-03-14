'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/simple_wmi_view.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/simplewmiview-x64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
