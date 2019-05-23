'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Antivirus/Removal-Tools/Autorun-Deleter.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
