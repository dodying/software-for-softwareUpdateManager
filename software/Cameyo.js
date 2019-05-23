'use strict'

let data = {
  url: 'https://www.softpedia.com/get/System/System-Miscellaneous/Cameyo.shtml',
  version: {
    selector: '.dllabel+span'
  },
  download: {
    plain: 'https://online.cameyo.com/apps/1/download'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
