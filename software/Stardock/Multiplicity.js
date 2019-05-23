'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/Internet/Remote-Utils/Multiplicity.shtml'
  },
  fixedPath: '%ProgramFiles(x86)%\\Stardock\\Multiplicity\\MPRDP64.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
