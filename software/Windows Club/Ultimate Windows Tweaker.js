'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Tweak/System-Tweak/Ultimate-Windows-Tweaker.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
