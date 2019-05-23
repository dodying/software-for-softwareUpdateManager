'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Authoring-tools/Cover-editors/Ashampoo-Cover-Studio.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
