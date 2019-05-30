'use strict'

let data = {
  site: {
    Pc6: 'http://www.pc6.com/softview/SoftView_657095.html'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
