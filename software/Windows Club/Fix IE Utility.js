'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/Fix-IE-Utility.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
