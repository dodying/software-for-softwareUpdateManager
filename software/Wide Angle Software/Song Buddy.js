'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Multimedia/Audio/Other-AUDIO-Tools/Song-Buddy.shtml'
  },
  preferPath: 'SongBuddy.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
