'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/Program-Blocker.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
