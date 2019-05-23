'use strict'

let data = {
  commercial: 2,
  url: 'https://www.traystatus.com/Download/',
  version: {
    selector: 'h2:has([href^="https://www.binaryfortress.com/Data/Download/?package="])+div>ul>li>div'
  },
  download: {
    plain: 'https://www.binaryfortress.com/Data/Download/?package=traystatus&log=114'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
