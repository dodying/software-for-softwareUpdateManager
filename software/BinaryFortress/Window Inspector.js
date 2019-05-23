'use strict'

let data = {
  url: 'https://www.binaryfortress.com/WindowInspector/Download/',
  version: {
    selector: 'h2:has([href^="https://www.binaryfortress.com/Data/Download/?package="])+div>ul>li>div'
  },
  download: {
    plain: 'https://www.binaryfortress.com/Data/Download/?package=windowinspector&log=100'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.single(output, iPath)
  }
}
module.exports = data
