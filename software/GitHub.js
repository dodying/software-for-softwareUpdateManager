'use strict'

let data = {
  url: 'https://central.github.com/deployments/desktop/desktop/changelog.json',
  version: {
    func: async (res, $) => JSON.parse(res.body)[0].version
  },
  download: {
    plain: 'https://central.github.com/deployments/desktop/desktop/latest/win32'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
