'use strict'

let data = {
  useProxy: true,
  url: 'https://github.com/derceg/explorerplusplus/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /version-(.*)/
  },
  download: {
    plain: 'https://ci.appveyor.com/api/projects/derceg/explorerplusplus/artifacts/explorer++_x64.zip?branch=master&job=Platform%3A%20x64'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
