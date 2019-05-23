'use strict'

let data = {
  url: 'https://www.cfos.de/en/download/download.htm',
  commercial: 3,
  version: {
    selector: '#cfos_release_x86_version'
  },
  download: {
    selector: '.cfos_release_x64_link'
  }
}
module.exports = data
