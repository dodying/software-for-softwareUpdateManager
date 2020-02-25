'use strict'

let data = {
  url: 'http://www.itsamples.com/password-viewer.html',
  version: async (res, $) => res.body.match(/version: (\d+[\d.]+\d+)/i)[1],
  download: 'http://www.itsamples.com/downloads/password-viewer.zip',
  install: 'install'
}
module.exports = data
