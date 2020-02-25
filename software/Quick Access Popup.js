'use strict'

let data = {
  url: 'https://www.quickaccesspopup.com/',
  version: ['h5:contains("What\'s new")+p+pre', 'text', /Version: ([\d.]+) \(/],
  changelog: {
    selector: 'h5:contains("What\'s new")+p+pre',
    attr: 'text',
    match: /^Version: [\d.]+/,
    split: true
  },
  download: 'https://www.quickaccesspopup.com/download/quickaccesspopup.zip',
  install: 'install'
}
module.exports = data
