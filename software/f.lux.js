'use strict'

let data = {
  url: 'https://justgetflux.com/update/v4/windows-download.json',
  version: {
    func: async (res, $) => JSON.parse(res.body.match(/^fluxupdate\((.*)\)$/)[1]).version
  },
  download: {
    func: async (res, $) => new URL(JSON.parse(res.body.match(/^fluxupdate\((.*)\)$/)[1]).update).href.replace(/\?.*/, '')
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
