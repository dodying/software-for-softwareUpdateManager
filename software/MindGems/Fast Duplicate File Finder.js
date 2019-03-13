'use strict'

let data = {
  url: 'https://www.mindgems.com/products/Fast-Duplicate-File-Finder/Fast-Duplicate-File-Finder-Download.htm',
  version: {
    selector: 'body > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(2)'
  },
  download: {
    plain: 'https://www.mindgems.com/software/FastDuplicateFileFinder.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install_inno_with_type')(output, iPath)
  }
}
module.exports = data
