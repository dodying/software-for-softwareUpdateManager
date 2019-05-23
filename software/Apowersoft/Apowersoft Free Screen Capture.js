'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Multimedia/Graphic/Graphic-Capture/Apowersoft-Free-Screen-Capture.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
