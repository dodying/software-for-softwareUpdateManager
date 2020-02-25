'use strict'

let data = {
  commercial: 3,
  url: 'https://www.winbrowser.com/download.html',
  version: '.downloadPageContent > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1) > b:nth-child(1)',
  changelog: ['https://www.winbrowser.com/whatsnew.html', '.indentedList'],
  download: 'https://www.winbrowser.com/cgi-bin/download_file.php/WinBrowserSetup64.exe?f=WinBrowserSetup64.exe',
  install: ['install_ai_msi', null, 'WinBrowserSetup64.msi', 'WinBrowser.exe']
}
module.exports = data
