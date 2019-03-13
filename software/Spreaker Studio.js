'use strict'

let data = {
  commercial: 2,
  site: {
    Softpedia: 'https://www.softpedia.com/get/IPOD-TOOLS/Podcast/Spreaker-Studio.shtml'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped')(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
