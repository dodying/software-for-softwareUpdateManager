'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/CD-DVD-Tools/Audio-CD-DVD-Burning/Ashampoo-AudioCD-MP-Studio.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
