'use strict'

let data = {
  url: 'http://www.itsamples.com/disk-activity-indicator.html',
  version: async (res, $) => res.body.match(/version: (\d+[\d.]+\d+)/i)[1],
  download: 'http://www.itsamples.com/downloads/disk-activity-indicator.zip',
  install: 'install_zipped_single'
}
module.exports = data
