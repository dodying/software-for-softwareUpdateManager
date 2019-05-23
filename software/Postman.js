'use strict'

let data = {
  commercial: 2,
  url: 'https://dl.pstmn.io/api/version/notes?channel=stable',
  version: {
    func: async (res, $) => res.json.notes[0].version
  },
  download: {
    plain: 'https://dl.pstmn.io/download/latest/win64'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
