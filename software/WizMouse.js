'use strict'

let data = {
  url: 'https://antibody-software.com/web/software/software/wizmouse-makes-your-mouse-wheel-work-on-the-window-under-the-mouse/',
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
