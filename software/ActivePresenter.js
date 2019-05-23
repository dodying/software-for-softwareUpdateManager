'use strict'

let data = {
  commercial: 2,
  url: 'https://atomisystems.com/download/',
  version: {
    selector: '.et_pb_text_1 > div:nth-child(1) > h4:nth-child(1) > span:nth-child(1) > strong:nth-child(1)'
  },
  download: {
    selector: '.et_pb_button_0'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
