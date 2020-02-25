'use strict'

let data = {
  commercial: 1,
  url: 'http://www.hoverdesk.net/download.php',
  version: '.blog-date+h4',
  changelog: {
    url: 'http://www.hoverdesk.net/changelog.php',
    selector: '.changes',
    attr: 'text',
    match: /^Version [\d.]+/,
    split: true
  },
  download: 'a[href$=".zip"]',
  install: 'install'
}
module.exports = data
