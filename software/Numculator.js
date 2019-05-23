'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/PORTABLE-SOFTWARE/Education/Portable-Numculator.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
