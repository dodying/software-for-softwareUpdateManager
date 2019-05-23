'use strict'

let data = {
  commercial: 3,
  url: 'https://www.lopesoft.com/index.php/en/filemenutools/download',
  version: {
    selector: '.pd-title'
  },
  download: {
    plain: 'https://www.lopesoft.com/index.php/en/download/filemenu-tools?download=2:filemenutools-portable'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
