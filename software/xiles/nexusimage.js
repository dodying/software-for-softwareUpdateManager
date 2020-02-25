'use strict'

let data = {
  url: 'http://www.xiles.net/',
  version: ['.product:contains("nexusimage") .download-button', 'href', /ver=([\d.]+)/],
  download: '.product:contains("nexusimage") .download-button',
  install: 'install'
}
module.exports = data
