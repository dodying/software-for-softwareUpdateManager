'use strict'

let data = {
  url: 'http://balabolka.site/data/sizes.js',
  version: {
    func: async (res, $) => res.body.match(/return \('(.*?)'\);/)[1]
  },
  download: {
    plain: 'http://balabolka.site/balabolka.zip'
  }
}
module.exports = data
