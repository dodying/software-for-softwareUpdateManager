'use strict'

let data = {
  url: 'https://www.snipaste.com/download.html',
  version: {
    selector: 'body > div.jumbotron > div > div:nth-child(2) > p:nth-child(7)'
  },
  download: {
    plain: 'https://dl.snipaste.com/win-x64'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
