'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/Hard-Disk-Utils/Ashampoo-HDD-Control.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data