'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/PORTABLE-SOFTWARE/System/System-Enhancements/AltPlusTab.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
