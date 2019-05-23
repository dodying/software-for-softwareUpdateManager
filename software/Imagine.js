'use strict'

let data = {
  url: 'http://www.nyam.pe.kr/dev/imagine/',
  version: {
    selector: '.lead .label-default'
  },
  download: {
    selector: '[data-lang-id="zip_version"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
