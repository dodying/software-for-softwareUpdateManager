'use strict'

let data = {
  url: 'http://www.itsamples.com/caps-unlocker.html',
  version: async (res, $) => res.body.match(/version: (\d+[\d.]+\d+)/i)[1],
  download: 'http://www.itsamples.com/downloads/caps-unlocker.zip',
  install: 'install'
}
module.exports = data
