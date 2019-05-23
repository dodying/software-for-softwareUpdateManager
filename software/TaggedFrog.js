'use strict'

let data = {
  url: 'http://lunarfrog.com/projects/taggedfrog/download',
  version: {
    selector: 'h2'
  },
  download: {
    selector: '.link-list>a[href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
