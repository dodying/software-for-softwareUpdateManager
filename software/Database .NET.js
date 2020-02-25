'use strict'

let data = {
  commercial: 1,
  url: 'https://fishcodelib.com/Database.htm',
  version: '[href="files/DatabaseNet5Pro.zip"]',
  changelog: {
    url: 'https://fishcodelib.com/Database_new.htm',
    selector: 'fieldset',
    attr: 'text',
    match: /^Ver [\d.]+/,
    split: true
  },
  download: 'https://fishcodelib.com/files/DatabaseNet5Pro.zip',
  install: 'install_zipped_single'
}
module.exports = data
