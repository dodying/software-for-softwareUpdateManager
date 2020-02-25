'use strict'

let data = {
  commercial: 3,
  url: 'https://www.proximasoftware.com/downloads/',
  version: ['#content .row>.span6:contains("Photo Manager") p>strong', 'text', /Photo Manager Pro ([\d.]+) Release (\d+)/, '$1.$2'],
  changelog: {
    url: 'https://www.proximasoftware.com/photomanager/release-notes/',
    selector: '.well',
    attr: 'text',
    match: /^Version [\d.]+/,
    split: true
  },
  download: '#content .row>.span6:contains("Photo Manager") .btn[href$=".exe"][href*="x64"]',
  install: 'install'
}
module.exports = data
