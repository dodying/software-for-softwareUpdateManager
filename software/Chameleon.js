'use strict'

let data = {
  url: 'https://raw.githubusercontent.com/ianmartinez/Chameleon/master/Changelog.txt',
  version: {
    func: async (res, $) => res.body.match(/Version (.*?) \(/)[1]
  },
  download: {
    plain: 'https://github.com/ianmartinez/Chameleon/raw/master/Release/Chameleon.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
