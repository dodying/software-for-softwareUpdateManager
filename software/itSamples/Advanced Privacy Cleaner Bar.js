'use strict'

let data = {
  url: 'http://www.itsamples.com/advanced-privacy-cleaner.html',
  version: async (res, $) => res.body.match(/version: (\d+[\d.]+\d+)/i)[1],
  download: 'http://www.itsamples.com/downloads/advanced-privacy-cleaner-ie.zip',
  install: 'install_zipped_single'
}
module.exports = data
