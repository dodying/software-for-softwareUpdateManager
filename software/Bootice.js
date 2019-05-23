'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/Boot-Manager-Disk/Bootice.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, /x64.*\.exe$/)
  }
}
module.exports = data
