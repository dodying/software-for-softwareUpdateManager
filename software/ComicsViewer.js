'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/PORTABLE-SOFTWARE/Multimedia/Graphics/Portable-ComicsViewer.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
