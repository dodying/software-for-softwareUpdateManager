'use strict'

let data = {
  url: 'https://typora.io/windows/dev_release.html',
  version: 'h4',
  changelog: {
    selector: 'body',
    attr: 'text',
    match: /^[\d.]{3,}/,
    split: true
  },
  download: 'https://typora.io/windows/typora-setup-x64.exe',
  install: 'install_inno_type'
}
module.exports = data
