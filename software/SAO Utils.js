'use strict'

let data = {
  url: 'http://sao.gpbeta.com/',
  version: ['#section_log+div+h3', 'text', /\(([\d.]+)\)/],
  changelog: '#section_log+div+h3+ol',
  download: '[aria-labelledby="downloadMenu"] a[href$=".exe"]',
  install: 'install_inno_type',
  other: {
    exp: {
      url: 'http://sao.gpbeta.com/exp/',
      install: null
    }
  }
}
module.exports = data
