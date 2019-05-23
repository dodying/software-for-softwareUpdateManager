'use strict'

let data = {
  url: 'https://im.qq.com/pcqq/',
  fixedPath: '%ProgramFiles(x86)%\\Tencent\\QQ\\Bin\\QQ.exe',
  version: {
    selector: 'h2'
  },
  download: {
    selector: '.download'
  },
  install: function (output, iPath, fns) { // /S|-S
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
