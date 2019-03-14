'use strict'

let data = {
  url: 'https://neosmart.net/Software/Changelog/23',
  version: {
    selector: 'a[name]'
  },
  download: {
    func: async (res, $, fns) => fns.download.neosmart(res, $, fns)
  }
}
module.exports = data
