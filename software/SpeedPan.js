'use strict'

let data = {
  site: {
    Pc6: 'http://www.pc6.com/softview/SoftView_611279.html'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'SpeedPan*\\*')
  }
}
module.exports = data
