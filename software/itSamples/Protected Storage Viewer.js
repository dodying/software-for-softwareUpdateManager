'use strict'

let data = {
  url: 'http://www.itsamples.com/protected-storage-viewer.html',
  version: async (res, $) => res.body.match(/version: (\d+[\d.]+\d+)/i)[1],
  download: 'http://www.itsamples.com/downloads/protected-storage-viewer.zip',
  install: 'install_zipped_single'
}
module.exports = data
