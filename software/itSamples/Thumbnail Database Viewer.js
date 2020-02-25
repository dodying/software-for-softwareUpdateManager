'use strict'

let data = {
  url: 'http://www.itsamples.com/thumbnail-database-viewer.html',
  version: async (res, $) => res.body.match(/version: (\d+[\d.]+\d+)/i)[1],
  download: 'http://www.itsamples.com/downloads/thumbnail-database-viewer.zip',
  install: 'install'
}
module.exports = data
