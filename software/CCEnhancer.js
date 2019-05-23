'use strict'

let data = {
  url: 'https://singularlabs.com/software/ccenhancer/download-ccenhancer/',
  version: {
    selector: '#post-970 > div > table > tbody > tr:nth-child(3) > td:nth-child(2)'
  },
  download: {
    selector: '#post-970 > div > table > tbody > tr:nth-child(3) > td:nth-child(3) > p > a'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
