'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/OS-Enhancements/KDE-Mover-Sizer.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data