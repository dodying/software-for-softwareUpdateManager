'use strict'

let data = {
  url: 'https://www.redcrab-software.com/en/RedCrab/Updates',
  version: {
    selector: 'p>strong'
  },
  download: {
    plain: 'https://www.redcrab-software.com/download/redcrab.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
