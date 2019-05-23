'use strict'

let data = {
  url: 'https://cdn01.moecube.com/downloads/latest.yml',
  version: {
    func: async (res, $) => res.body.match(/mycard-setup-(.*?).exe/)[1]
  },
  download: {
    func: async (res, $) => 'https://cdn01.moecube.com/downloads/' + res.body.match(/path: (.*)/)[1]
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'app-32.7z')
  }
}
module.exports = data
