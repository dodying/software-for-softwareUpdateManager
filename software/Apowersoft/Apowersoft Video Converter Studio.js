'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/Multimedia/Video/Encoders-Converter-DIVX-Related/Apowersoft-Video-Converter-Studio.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
