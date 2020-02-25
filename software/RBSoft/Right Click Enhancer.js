'use strict'

let data = {
  commercial: 2,
  url: 'https://rbsoft.org/downloads/right-click-enhancer/rce-changelog.html',
  version: '#section-changelog>h3',
  changelog: {
    selector: '#section-changelog',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: 'https://rbsoft.org/downloads/right-click-enhancer/Right-Click-Enhancer.zip',
  install: 'install'
}
module.exports = data
