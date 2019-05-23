'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Multimedia/Video/Video-Recording/ShowMore.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
