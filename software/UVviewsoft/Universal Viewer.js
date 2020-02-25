'use strict'

let data = {
  commercial: 3,
  url: 'http://uvviewsoft.com/uviewer/download.htm',
  version: 'body > table:nth-child(2) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > ul:nth-child(3) > li:nth-child(1) > b',
  download: 'http://uvviewsoft.com/uviewer/files/UniversalViewerPro.zip',
  install: 'install',
  other: {
    free: {
      commercial: 0,
      version: 'body > table:nth-child(2) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > ul:nth-child(5) > li:nth-child(1) > b',
      download: 'http://uvviewsoft.com/uviewer/files/UniversalViewer.zip'
    }
  }
}
module.exports = data
