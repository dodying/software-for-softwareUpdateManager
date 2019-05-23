'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Internet/File-Sharing/DropShots.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
