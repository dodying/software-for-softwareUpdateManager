'use strict'

let data = {
  url: 'https://myco.yonan.ro/',
  version: {
    selector: '.standard-button',
    attr: 'href',
    match: /myco_(.*?).zip/
  },
  download: {
    selector: '.standard-button'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
