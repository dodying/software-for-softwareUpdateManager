'use strict'

let data = {
  url: 'https://www.softpedia.com/get/Internet/Other-Internet-Related/FiddlerCap-Web-Recorder.shtml',
  version: {
    selector: '.dllabel+span'
  },
  download: {
    plain: 'https://telerik-fiddler.s3.amazonaws.com/fiddler/FiddlerCapSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
