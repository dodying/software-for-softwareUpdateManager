'use strict'

let data = {
  commercial: 2,
  url: 'https://www.trillian.im/shared/scripts/news.items.js',
  version: {
    func: async (res, $) => res.body.match(/"windows", (\d+\.\d+), (\d+)/)[0].replace(/"windows", (\d+\.\d+), (\d+)/, '$1.$2')
  },
  download: {
    plain: 'https://www.trillian.im/get/windows/'
  }
}
module.exports = data
