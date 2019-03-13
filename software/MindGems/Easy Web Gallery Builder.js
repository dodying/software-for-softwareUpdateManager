'use strict'

let data = {
  commercial: 3,
  url: 'https://www.mindgems.com/products/Easy-Web-Gallery-Builder/Easy_Web_Gallery_Builder-Download.htm',
  version: {
    selector: 'body > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(2)'
  },
  download: {
    plain: 'http://www.mindgems.com/software/EWGalleryBuilder.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install_inno')(output, iPath)
  }
}
module.exports = data
