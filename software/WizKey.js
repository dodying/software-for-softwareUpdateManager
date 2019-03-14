'use strict'

let data = {
  commercial: 3,
  url: 'https://antibody-software.com/web/software/software/wizkey-makes-it-easy-to-type-accented-and-other-special-unicode-characters/',
  version: {
    selector: 'a[href*="/files/"]'
  },
  download: {
    selector: 'a[href*="/files/"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
