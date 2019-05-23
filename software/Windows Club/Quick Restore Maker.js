'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/Back-Up-and-Recovery/Quick-Restore-Maker.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
