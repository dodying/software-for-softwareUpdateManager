'use strict'

let data = {
  url: 'http://www.itsamples.com/exif-date-changer.html',
  version: async (res, $) => res.body.match(/version: (\d+[\d.]+\d+)/i)[1],
  download: 'http://www.itsamples.com/downloads/exif-date-changer.zip',
  install: 'install_zipped_single'
}
module.exports = data
