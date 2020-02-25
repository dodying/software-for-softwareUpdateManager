'use strict'

let data = {
  commercial: 1,
  url: 'https://www.advancedrenamer.com/versionlog',
  version: '.siteblock>b',
  changelog: {
    selector: '.siteblock',
    attr: 'text',
    match: /Advanced Renamer [\d.]+/,
    split: true
  },
  download: 'https://www.advancedrenamer.com/down/advanced_renamer_portable.zip',
  install: 'install'
}
module.exports = data
