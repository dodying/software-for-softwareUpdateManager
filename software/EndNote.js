'use strict'

let data = {
  fixedPath: '%ProgramFiles(x86)%\\EndNote X8\\EndNote.exe',
  site: {
    Softpedia: 'https://www.softpedia.com/get/Office-tools/Other-Office-Tools/EndNote-X.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/passive', '/qr', '/norestart'], { wait: true })
  }
}
module.exports = data
