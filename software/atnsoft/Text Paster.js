'use strict'

let data = {
  url: 'https://atnsoft.com/textpaster/versions/',
  version: ['h3', 'text', /^(.*) \(/],
  changelog: {
    selector: '#share+div',
    attr: 'text',
    split: true
  },
  download: 'https://atnsoft.com/downloads/textpaster_setup.exe',
  install: 'install_inno_single'
}
module.exports = data
