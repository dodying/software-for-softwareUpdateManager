'use strict'

let data = {
  url: 'https://github.com/benbuck/rbtray/releases',
  version: {
    selector: '.commit-title',
    match: /v(.*)/
  },
  download: {
    selector: '.muted-link[href*="archive"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, '*\\x64')
  }
}
module.exports = data
