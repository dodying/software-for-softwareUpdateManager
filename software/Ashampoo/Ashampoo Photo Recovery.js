'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/Back-Up-and-Recovery/Ashampoo-GetBack-Photo.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
