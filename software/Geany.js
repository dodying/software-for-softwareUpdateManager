'use strict'

let data = {
  url: 'https://www.geany.org/Download/Releases',
  version: {
    selector: 'a[href$="_setup.exe"]'
  },
  download: {
    selector: 'a[href$="_setup.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
