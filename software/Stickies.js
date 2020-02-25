'use strict'

let data = {
  url: 'https://www.zhornsoftware.co.uk/stickies/versions.html',
  version: ['.versionheading', 'text', /v(.*?) -/],
  changelog: {
    selector: 'body > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > table',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: async (res, $, fns, choice) => fns.walkLink('https://www.zhornsoftware.co.uk/stickies/download.html', fns, 'a[href$=".exe"]')
}
module.exports = data
