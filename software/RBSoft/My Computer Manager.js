'use strict'

let data = {
  url: 'https://rbsoft.org/downloads/my-computer-manager/',
  version: '#section-changelog>h3',
  changelog: {
    selector: '#section-changelog',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: 'https://rbsoft.org/downloads/my-computer-manager/My-Computer-Manager.zip',
  install: 'install'
}
module.exports = data
