'use strict'

let data = {
  url: 'http://registry-finder.com/',
  version: {
    selector: 'h2+p'
  },
  download: {
    selector: 'a[href$="RegistryFinder64.zip"]'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
