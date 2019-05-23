'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/ModernMix.shtml'
  },
  fixedPath: '%ProgramFiles(x86)%\\Stardock\\ModernMix\\MMix_64.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
