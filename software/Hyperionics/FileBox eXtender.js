'use strict'

let data = {
  url: 'http://www.hyperionics.com/files/index.asp',
  version: {
    selector: '[href="downloads.asp"]'
  },
  download: {
    plain: 'http://www.hyperionics.com/downloads/Fbx64Setup.exe'
  },
  fixedPath: '%ProgramFiles%\\FileBX\\FileBX.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/S'])
  }
}
module.exports = data
