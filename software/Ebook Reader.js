'use strict'

let data = {
  commercial: 2,
  url: 'https://icecreamapps.com/Ebook-Reader/',
  version: {
    selector: '.fab-minspecs'
  },
  download: {
    plain: 'https://icecreamapps.com/download/ebook_reader_setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
