'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/Cameyo.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
