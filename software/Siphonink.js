'use strict'

let data = {
  site: {
    Pc6: 'http://www.pc6.com/softview/SoftView_105138.html'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'Siphonink*')
  }
}
module.exports = data
