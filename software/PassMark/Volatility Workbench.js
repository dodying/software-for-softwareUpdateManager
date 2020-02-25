'use strict'

let data = {
  url: 'https://www.osforensics.com/tools/volatility-workbench.html',
  version: '.feature:contains("Download")+p',
  changelog: {
    selector: '#sub-content',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: 'https://www.osforensics.com/downloads/VolatilityWorkbench.zip',
  install: 'install'
}
module.exports = data
