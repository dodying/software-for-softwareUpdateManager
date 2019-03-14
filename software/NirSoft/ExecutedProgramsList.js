'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/executed_programs_list.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/executedprogramslist.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
