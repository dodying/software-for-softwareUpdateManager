'use strict'

let data = {
  url: 'https://tim.qq.com/download.html',
  fixedPath: '%ProgramFiles(x86)%\\Tencent\\TIM\\Bin\\TIM.exe',
  version: {
    selector: '.d-item-desc'
  },
  download: {
    selector: '.down-btn>a'
  },
  install: function (output, iPath, fns) { // /S|-S
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
