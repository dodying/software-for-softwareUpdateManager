'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/Cameyo.shtml'
  },
  install: function (output, iPath) {
    return require('./../js/install_single')(output, iPath)
  }
}
module.exports = data
