'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/Authoring-tools/Authoring-Related/Ashampoo-Gadge-It.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
