'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Internet/Download-Managers/Stardock-Central.shtml'
  },
  fixedPath: '%ProgramFiles(x86)%\\Stardock\\SDCentral\\loader.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
