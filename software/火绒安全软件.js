'use strict'

let data = {
  fixedPath: '%ProgramFiles(x86)%\\Huorong\\Sysdiag\\bin\\HipsMain.exe',
  url: 'https://www.huorong.cn/downloadv5.html',
  version: (res, $) => res.body.match(/var version = "(.*?)";/)[1],
  download: 'https://down5.huorong.cn/sysdiag-full-{version}.exe',
  // install: 'install_nsis_cli',
  other: {
    all: {
      download: 'https://down5.huorong.cn/sysdiag-all-{version}.exe'
    }
  }
}
module.exports = data
