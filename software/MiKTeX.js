'use strict'

let data = {
  url: 'https://miktex.org/download',
  version: ['#basic a[href$=".exe"]', 'href', /miktex-([\d.]+)-x64.exe/],
  download: '#basic a[href$=".exe"]'
}
module.exports = data
