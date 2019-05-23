'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Clocks-Time-Management/Snow-Globe-Countdown.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
