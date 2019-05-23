'use strict'

let data = {
  commercial: 1,
  url: 'https://resonic.at/download',
  version: {
    selector: 'h2',
    match: /Resonic Player (.*) /
  },
  download: {
    plain: 'https://resonic.at/get/player/portable'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
