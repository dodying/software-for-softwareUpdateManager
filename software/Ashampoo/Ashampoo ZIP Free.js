'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Compression-tools/Ashampoo-ZIP-Free.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
