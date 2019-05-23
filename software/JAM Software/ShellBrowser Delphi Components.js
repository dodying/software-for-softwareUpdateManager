'use strict'

let data = {
  commercial: 3,
  url: 'https://www.jam-software.com/shellbrowser_delphi/',
  version: {
    selector: '.uppercase'
  },
  download: {
    plain: 'https://www.jam-software.com/delphi/ShellBrowser-Demo.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath, null, '1')
  }
}
module.exports = data
