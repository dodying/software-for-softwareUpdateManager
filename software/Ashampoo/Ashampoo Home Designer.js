'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Others/Home-Education/Ashampoo-Home-Designer.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
