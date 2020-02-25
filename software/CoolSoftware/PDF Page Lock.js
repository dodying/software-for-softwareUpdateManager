'use strict'

let data = {
  commercial: 3,
  url: 'https://pdfpagelock.com/download.html',
  version: ['#about>p', 'text', /Version: ([\d.]+)/],
  download: 'https://pdfpagelock.com/down/pdf_page_lock.exe',
  install: 'install_inno_type'
}
module.exports = data
