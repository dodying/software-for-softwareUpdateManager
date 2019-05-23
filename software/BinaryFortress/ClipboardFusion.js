'use strict'

let data = {
  commercial: 2,
  url: 'https://www.clipboardfusion.com/Download/',
  version: {
    selector: 'h2:has([href^="https://www.binaryfortress.com/Data/Download/?package="])+div>ul>li>div'
  },
  download: {
    plain: 'https://www.binaryfortress.com/Data/Download/?package=clipboardfusion&log=104'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
