'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/Hard-Disk-Utils/SpaceMonger.shtml'
  },
  fixedPath: '%ProgramFiles(x86)%\\EdgeRunner\\SpaceMonger\\SpaceMonger.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
