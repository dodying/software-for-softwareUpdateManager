'use strict'

let data = {
  url: 'http://www.chken.com/KenPlayer.html',
  version: {
    selector: '#m > tbody > tr:nth-child(2) > td > center > a:nth-child(7)'
  },
  download: {
    selector: '#m > tbody > tr:nth-child(2) > td > center > a:nth-child(7)'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
