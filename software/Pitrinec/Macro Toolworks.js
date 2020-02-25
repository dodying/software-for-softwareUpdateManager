'use strict'

let data = {
  commercial: 2,
  url: 'http://macrotoolworks.com/index.php/?id=25',
  version: '.newsitem_text>h3',
  changelog: {
    selector: '.newsitem_text',
    attr: 'text',
    match: /^Version [\d.]+/,
    split: true
  },
  download: 'http://www.mtwfiles.cz/downloads/latest/mtw_pro.exe',
  install: 'install_inno_type'
}
module.exports = data
