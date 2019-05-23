'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Icons-Related/IconDeveloper.shtml'
  },
  fixedPath: '%ProgramFiles(x86)%\\Stardock\\Object Desktop\\IconDeveloper\\IconDeveloper.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
