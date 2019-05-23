'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Tweak/System-Tweak/Create-A-Shortcut.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
