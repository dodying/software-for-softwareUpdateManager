'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/Multimedia/Audio/Other-AUDIO-Tools/Tune-Sweeper.shtml'
  },
  preferPath: 'Tune_Sweeper.exe',
  install: function (output, iPath, fns) {
    return fns.install.ai.msi(output, iPath, null, 'TuneSweeper.msi', data.preferPath)
  }
}
module.exports = data
