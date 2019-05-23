'use strict'

let data = {
  url: 'https://www.cfos.de/en/download/download.htm',
  commercial: 3,
  version: {
    selector: '#cfospnet_release_x86_version'
  },
  download: {
    selector: '.cfospnet_release_x86_link'
  }
}
module.exports = data
