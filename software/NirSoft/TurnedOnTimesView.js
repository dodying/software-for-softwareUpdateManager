'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/computer_turned_on_times.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/turnedontimesview.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
