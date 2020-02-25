'use strict'

let data = {
  commercial: 3,
  url: 'https://fman.io/download/thank-you?os=Windows',
  version: ['.lead2 a[href$=".exe"]', 'href'],
  changelog: {
    url: 'https://fman.io/changelog',
    selector: '.changelog',
    attr: 'text',
    match: /^Version [\d.]+/,
    split: true
  },
  download: '.lead2 a[href$=".exe"]'
}
module.exports = data
