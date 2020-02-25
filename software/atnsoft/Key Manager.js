'use strict'

let data = {
  url: 'https://atnsoft.com/keymanager/versions/',
  version: ['h3', 'text', /^(.*) \(/],
  changelog: {
    selector: '#share+div',
    attr: 'text',
    split: true
  },
  download: 'https://atnsoft.com/downloads/keymanager_setup.exe',
  install: 'install_inno_single'
}
module.exports = data
