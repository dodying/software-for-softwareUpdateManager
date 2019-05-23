'use strict'

let data = {
  commercial: 2,
  url: 'https://authy.com/download/',
  version: {
    func: async (res, $, fns) => {
      let res1 = await fns.reqHEAD('https://electron.authy.com/download?channel=stable&arch=x64&platform=win32&version=latest&product=authy')
      return decodeURI(res1.request.uri.href).match(/(\d+[\d.]+\d+).exe/)[1]
    }
  },
  download: {
    plain: 'https://electron.authy.com/download?channel=stable&arch=x64&platform=win32&version=latest&product=authy'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
