'use strict'

let data = {
  commercial: 3,
  url: 'https://joytokey.net/en/news',
  version: {
    selector: 'h5'
  },
  download: {
    plain: 'https://joytokey.net/download/JoyToKey_en.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
