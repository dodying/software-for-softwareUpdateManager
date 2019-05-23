'use strict'

let data = {
  url: 'https://www.softpedia.com/get/PORTABLE-SOFTWARE/Office/Suites-editors/Portable-RJ-TextEd.shtml',
  version: {
    selector: '.dllabel+span'
  },
  download: {
    plain: 'http://www.rj-texted.com/files/rj-install_x64.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath, null, null, { '{win}': null })
  }
}
module.exports = data
