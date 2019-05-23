'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Office-tools/Other-Office-Tools/Zotero.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'core')
  }
}
module.exports = data
