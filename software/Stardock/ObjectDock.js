'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Themes/ObjectDock.shtml'
  },
  fixedPath: '%ProgramFiles(x86)%\\Stardock\\ObjectDock\\ObjectDock.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
