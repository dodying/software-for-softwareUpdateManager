'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/Back-Up-and-Recovery/KeepSafe.shtml'
  },
  fixedPath: '%ProgramFiles(x86)%\\Stardock\\KeepSafe\\keepsafe.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
