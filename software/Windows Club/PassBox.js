'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/PORTABLE-SOFTWARE/Security/Password-Managers---Generators/PassBox-Portable.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
