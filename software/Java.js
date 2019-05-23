'use strict'

let data = {
  url: 'https://java.com/en/download/manual.jsp',
  version: {
    selector: 'h4.sub',
    match: /Recommended Version (.*)/
  },
  download: {
    selector: 'a[title="Download Java software for Windows (64-bit)"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['INSTALLDIR={dir}', 'INSTALL_SILENT=Enable', 'REBOOT=Disable', 'NOSTARTMENU=Enable', 'REMOVEOUTOFDATEJRES=1'], { wait: true })
  }
}
module.exports = data
