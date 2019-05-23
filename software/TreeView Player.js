'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/File-managers/Ubiquitous-Player.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
