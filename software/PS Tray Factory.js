'use strict'

let data = {
  commercial: 3,
  url: 'http://www.pssoftlab.com/pstf_info.phtml',
  version: {
    selector: '.menu_content font'
  },
  download: {
    plain: 'http://www.pssoftlab.com/download/pstrayf.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
