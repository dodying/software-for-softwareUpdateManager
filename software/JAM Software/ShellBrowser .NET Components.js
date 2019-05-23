'use strict'

let data = {
  commercial: 3,
  url: 'https://www.jam-software.com/shellbrowser_net/',
  version: {
    selector: '.uppercase'
  },
  download: {
    plain: 'https://www.jam-software.com/dotnet/ShellBrowser.NET-Demo.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath, null, '1')
  }
}
module.exports = data
