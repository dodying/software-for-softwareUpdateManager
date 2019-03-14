'use strict'

let data = {
  url: 'https://eternallybored.org/misc/wget/',
  version: {
    selector: '#content > table > tbody > tr:nth-child(2) > td:nth-child(1)'
  },
  download: {
    plain: 'https://eternallybored.org/misc/wget/{version}/64/wget.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
