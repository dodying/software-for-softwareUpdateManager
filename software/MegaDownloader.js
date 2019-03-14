'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Internet/Download-Managers/MegaDownloader.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.single(output, iPath)
  }
}
module.exports = data
