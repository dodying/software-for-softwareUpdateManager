'use strict'

let data = {
  url: 'https://rink.hockeyapp.net/apps/6037e69fa4944acc9d83ef7682e60732',
  version: {
    selector: '.app-body>h3'
  },
  download: {
    selector: '.btn-ha-primary'
  },
  preferPath: 'Stack.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
