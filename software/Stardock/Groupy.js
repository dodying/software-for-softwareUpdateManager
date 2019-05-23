'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Other-Desktop-Enhancements/Groupy.shtml'
  },
  fixedPath: '%ProgramFiles(x86)%\\Stardock\\Groupy\\Groupy32.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
