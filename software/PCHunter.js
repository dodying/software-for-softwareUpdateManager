'use strict'

let data = {
  url: 'http://www.xuetr.com/?p=191',
  version: {
    selector: '#content>h1'
  },
  download: {
    plain: 'http://www.xuetr.com/download/PCHunter_free.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
