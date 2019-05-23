'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/Ashampoo-Spectre-Meltdown-CPU-Checker.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
