'use strict'

let data = {
  url: 'http://dejavu.narod.ru/hiddex.html',
  version: ['.post_date', 'text', /version (.*) \(/],
  download: 'http://dejavu.narod.ru/hiddex.zip',
  install: 'install_zipped_single'
}
module.exports = data
