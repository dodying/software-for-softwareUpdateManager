'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/OS-Enhancements/Ashampoo-WinOptimizer.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data