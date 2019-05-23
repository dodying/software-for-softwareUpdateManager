'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/Tweak/System-Tweak/Decor8.shtml'
  },
  fixedPath: '%ProgramFiles(x86)%\\Stardock\\Decor8\\Decor8.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
