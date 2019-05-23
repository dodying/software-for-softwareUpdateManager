'use strict'

let data = {
  url: 'http://www.7stickynotes.com/download.php',
  version: {
    selector: '#download_details'
  },
  download: {
    selector: '#downloadbt>a'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
