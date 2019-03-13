'use strict'

let data = {
  url: 'https://resource.u-tools.cn/version/latest.yml',
  version: {
    func: async (res, $) => res.body.match(/uTools-(.*?).exe/)[1]
  },
  download: {
    func: async (res, $) => 'https://resource.u-tools.cn/version/' + res.body.match(/path: (.*)/)[1]
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped')(output, iPath, 'install', 'app-64.7z')
  }
}
module.exports = data
