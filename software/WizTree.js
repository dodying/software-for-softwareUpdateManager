'use strict'

let data = {
  url: 'https://antibody-software.com/web/software/software/wiztree-finds-the-files-and-folders-using-the-most-disk-space-on-your-hard-drive/',
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
