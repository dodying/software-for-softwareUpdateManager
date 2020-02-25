'use strict'

let data = {
  commercial: 2,
  url: 'https://www.lookeen.com/httpstest.php',
  version: (res, $) => res.body.split('###')[1],
  download: (res, $) => res.body.split('###')[0],
  install: 'install_inno_type'
}
module.exports = data
