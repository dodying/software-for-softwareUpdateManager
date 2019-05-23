'use strict'

let data = {
  commercial: 3,
  url: 'http://www.winbrowser.com/download.html',
  version: {
    selector: '.downloadPageContent > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1) > b:nth-child(1)'
  },
  download: {
    plain: 'http://www.winbrowser.com/cgi-bin/download_file.php/WinBrowserSetup64.exe?f=WinBrowserSetup64.exe'
  },
  preferPath: 'WinBrowser.exe',
  install: function (output, iPath, fns) {
    return fns.install.ai.msi(output, iPath, null, 'WinBrowserSetup64.msi', data.preferPath)
  }
}
module.exports = data
