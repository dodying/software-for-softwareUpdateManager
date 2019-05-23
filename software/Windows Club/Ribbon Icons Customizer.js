'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/OS-Enhancements/Ribbon-Icons-Customizer.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
