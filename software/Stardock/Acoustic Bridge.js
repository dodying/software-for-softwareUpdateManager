'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Multimedia/Audio/Other-AUDIO-Tools/Acoustic-Bridge.shtml'
  },
  fixedPath: '%ProgramFiles(x86)%\\Stardock\\AcousticBridge\\AcousticBridge.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
