'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Antivirus/Ashampoo-Virus-Quickscan.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
