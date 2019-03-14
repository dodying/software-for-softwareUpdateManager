'use strict'

let data = {
  url: 'https://antibody-software.com/web/software/software/wizfile-finds-your-files-fast/',
  version: {
    selector: '.smalldark'
  },
  download: {
    selector: 'a[href*="/files/"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
