'use strict'

let data = {
  commercial: 3,
  url: 'https://www.boxedapp.com/boxedapppacker/changelog.html',
  version: {
    selector: 'h2>a[name]',
    attr: 'name'
  },
  download: {
    plain: 'https://www.boxedapp.com/download/boxedapppacker__demo'
  },
  install: function (output, iPath) {
    return require('./../js/install_inno')(output, iPath)
  }
}
module.exports = data
