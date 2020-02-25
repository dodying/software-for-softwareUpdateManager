'use strict'

let data = {
  url: 'http://www.itsamples.com/eudora-password-recovery.html',
  version: async (res, $) => res.body.match(/version: (\d+[\d.]+\d+)/i)[1],
  download: 'http://www.itsamples.com/downloads/eudora-password-recovery.zip',
  install: 'install_zipped_single'
}
module.exports = data
