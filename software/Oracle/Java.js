'use strict'

let data = {
  url: 'https://java.com/en/download/manual.jsp',
  version: ['h4.sub', 'text', /Recommended Version (.*)/],
  download: 'a[title="Download Java software for Windows (64-bit)"]',
  install: ['install_cli', null, ['INSTALLDIR={dir}', 'INSTALL_SILENT=Enable', 'REBOOT=Disable', 'NOSTARTMENU=Enable', 'REMOVEOUTOFDATEJRES=1'], { wait: true }]
}
module.exports = data
