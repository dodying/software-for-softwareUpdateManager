'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Other-Desktop-Enhancements/SkinStudio.shtml'
  },
  fixedPath: '%ProgramFiles(x86)%\\Stardock\\Object Desktop\\SkinStudio\\SkinStudio.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
