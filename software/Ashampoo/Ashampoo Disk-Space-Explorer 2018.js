'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/Hard-Disk-Utils/Ashampoo-Disk-Space-Explorer.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
