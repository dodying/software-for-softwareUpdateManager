'use strict'

let data = {
  url: 'http://www.kami233.com/download/',
  version: {
    selector: '.kami-session-item-title'
  },
  download: {
    plain: 'http://res.kami233.com/download/shenjianji64.7z'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
