'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Tweak/System-Tweak/CursorXP.shtml'
  },
  fixedPath: '%ProgramFiles(x86)%\\Stardock\\CursorFX\\CursorFX.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
