'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/OS-Enhancements/ObjectBar.shtml'
  },
  fixedPath: '%ProgramFiles(x86)%\\Stardock\\Object Desktop\\ObjectBar\\ObjectBar.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
