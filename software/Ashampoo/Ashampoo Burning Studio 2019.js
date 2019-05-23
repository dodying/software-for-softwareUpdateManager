'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/CD-DVD-Tools/Data-CD-DVD-Burning/Ashampoo-Burning-Studio-2019.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
