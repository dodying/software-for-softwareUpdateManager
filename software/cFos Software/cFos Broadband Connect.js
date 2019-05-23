'use strict'

let data = {
  url: 'https://www.cfos.de/en/download/download.htm',
  commercial: 3,
  version: {
    selector: '#cfosbc_release_x86_version'
  },
  download: {
    selector: '.cfosbc_release_x64_link'
  }
}
module.exports = data
