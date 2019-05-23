'use strict'

let data = {
  url: 'https://www.softpedia.com/get/Programming/Debuggers-Decompilers-Dissasemblers/Telerik-Fiddler.shtml',
  version: {
    selector: '.dllabel+span'
  },
  download: {
    plain: 'https://telerik-fiddler.s3.amazonaws.com/fiddler/FiddlerSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'FiddlerSetup.exe')
  }
}
module.exports = data
