'use strict'

let data = {
  commercial: 1,
  url: 'http://www.xt800.cn/support/faq?pid=810',
  version: ['h3+h3', 'text', /V(\d+[\d.]+\d+)/],
  changelog: {
    url: 'http://www.xt800.cn/support/faq?pid=810',
    selector: '.p_custom ',
    attr: 'text',
    match: /V[\d.]+==$/,
    split: true
  },
  download: 'http://www.xt800.cn/download/latest?t=p',
  install: 'install_nsis'
}
module.exports = data
