'use strict'

let data = {
  url: 'https://www.pdfzilla.com/free-pdf-reader.html',
  version: ['#colOne', 'text', /Version: ([\d.]+)/],
  download: 'https://www.pdfzilla.com/down/freepdfreader.exe',
  install: 'install_inno'
}
module.exports = data
