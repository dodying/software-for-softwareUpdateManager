'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Tweak/CPU-Tweak/iTunes-CPU-Redux.shtml'
  },
  preferPath: 'iTunes CPU Redux.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
