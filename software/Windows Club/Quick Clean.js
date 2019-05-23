'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Security/Secure-cleaning/Quick-Clean.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
