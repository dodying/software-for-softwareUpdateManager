'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/QRM-Plus-Manager.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
