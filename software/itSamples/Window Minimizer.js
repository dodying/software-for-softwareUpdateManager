'use strict'

let data = {
  url: 'http://www.itsamples.com/window-minimizer.html',
  version: async (res, $) => res.body.match(/version: (\d+[\d.]+\d+)/i)[1],
  download: 'http://www.itsamples.com/downloads/window-minimizer.zip',
  install: 'install'
}
module.exports = data
