'use strict'

let data = {
  url: 'https://www.cfos.de/en/download/download.htm',
  version: (res, $) => $('[href*="cFosICS"][href$=".zip"]').eq(0).attr('href').match(/\?file=(.*)$/)[1].match(/v(\d+)/)[1].replace(/(\d)(\d+)/, '$1.$2'),
  download: (res, $) => 'https://www.cfos.de' + $('[href*="cFosICS"][href$=".zip"]').eq(0).attr('href').match(/\?file=(.*)$/)[1],
  install: 'install_zipped_single'
}
module.exports = data
