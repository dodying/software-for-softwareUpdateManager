'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/OS-Enhancements/Start10.shtml'
  },
  fixedPath: '%ProgramFiles(x86)%\\Stardock\\Start10\\Start10_64.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
