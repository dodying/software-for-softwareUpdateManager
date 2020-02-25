'use strict'

let data = {
  commercial: 3,
  url: 'https://www.proximasoftware.com/downloads/',
  version: ['#content .row>.span6:contains("FontExpert") p>strong', 'text', /Version ([\d.]+) Release (\d+)/, '$1.$2'],
  changelog: {
    url: 'https://www.proximasoftware.com/fontexpert/release-notes/',
    selector: '.well',
    attr: 'text',
    match: /^Version [\d.]+/,
    split: true
  },
  download: '#content .row>.span6:contains("FontExpert") .btn[href$=".exe"][href*="x64"]',
  install: 'install'
}
module.exports = data
