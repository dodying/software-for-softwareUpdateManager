'use strict'

let data = {
  commercial: 3,
  url: 'https://www.mindgems.com/products/VS-Duplicate-Image-Finder/VSDIF-Download.htm',
  version: {
    selector: 'body > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(2)'
  },
  download: {
    plain: 'https://www.mindgems.com/software/VSDuplicateImageFinder.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install_inno_with_type')(output, iPath)
  }
}
module.exports = data
