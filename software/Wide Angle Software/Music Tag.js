'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/Multimedia/Audio/Tag-Editors/Music-Tag-Tool.shtml'
  },
  preferPath: 'Music Tag.exe',
  install: function (output, iPath, fns) {
    return fns.install.ai.msi(output, iPath, null, 'Music Tag.msi', data.preferPath)
  }
}
module.exports = data
