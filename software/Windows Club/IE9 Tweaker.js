'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Tweak/Browser-Tweak/IE9-Tweaker.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
