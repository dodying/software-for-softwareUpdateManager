'use strict'

let data = {
  site: {
    'Tencent SoftMgr': 'https://pc.qq.com/detail/1/detail_23761.html'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install')
  }
}
module.exports = data
