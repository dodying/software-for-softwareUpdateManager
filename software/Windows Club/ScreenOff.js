'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Other-Desktop-Enhancements/ScreenOff-Windows-Club.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
