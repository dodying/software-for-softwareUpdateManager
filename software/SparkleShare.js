'use strict'

let data = {
  url: 'https://bitbucket.org/hbons/sparkleshare/downloads/',
  preferPath: 'SparkleShare.exe',
  version: {
    selector: '.execute[href$=".msi"]'
  },
  download: {
    selector: '.execute[href$=".msi"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
