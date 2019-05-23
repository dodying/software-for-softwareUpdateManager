'use strict'

let data = {
  commercial: 2,
  url: 'https://www.fileseek.ca/Download/',
  version: {
    selector: 'h2:has([href^="https://www.binaryfortress.com/Data/Download/?package="])+div>ul>li>div'
  },
  download: {
    plain: 'https://www.binaryfortress.com/Data/Download/?package=fileseek&log=103'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
