'use strict'

let data = {
  url: 'https://github.com/babun/babun/releases',
  version: {
    selector: '.commit-title>a',
    match: /v(.*)/
  },
  download: {
    plain: 'http://projects.reficio.org/babun/download'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
