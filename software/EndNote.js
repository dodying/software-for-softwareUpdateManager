'use strict'

let data = {
  fixedPath: '%ProgramFiles(x86)%\\EndNote X8\\EndNote.exe',
  site: {
    Softpedia: 'https://www.softpedia.com/get/Office-tools/Other-Office-Tools/EndNote-X.shtml'
  },
  install: ['install_cli', null, ['/passive', '/qr', '/norestart'], { wait: true }]
}
module.exports = data
