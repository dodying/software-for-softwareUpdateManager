'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/File-Management/File-Association-Fixer.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
