'use strict'

let data = {
  url: 'https://www.jam-software.com/heavyload/',
  version: {
    selector: '.uppercase'
  },
  download: {
    plain: 'https://www.jam-software.com/heavyload/HeavyLoad-x64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, 'HeavyLoad.exe')
  }
}
module.exports = data
