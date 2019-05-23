'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Other-Desktop-Enhancements/Stardock-Tiles.shtml'
  },
  fixedPath: '%ProgramFiles(x86)%\\Stardock\\Tiles\\Tiles64.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
