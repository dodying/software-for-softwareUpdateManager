'use strict'

let data = {
  commercial: 3,
  url: 'http://www.x-ways.net/winhex/',
  version: {
    selector: 'strong'
  },
  download: {
    plain: 'http://www.x-ways.net/winhex.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
