'use strict'

let data = {
  commercial: 1,
  url: 'http://www.xt800.cn/support/faq?pid=810',
  version: {
    selector: 'h3+h3',
    match: /V(\d+[\d.]+\d+)/
  },
  download: {
    plain: 'http://www.xt800.cn/download/latest?t=p'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
