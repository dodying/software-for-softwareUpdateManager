'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/PORTABLE-SOFTWARE/System/System-Enhancements/Windows-Tile-Color-Changer.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
