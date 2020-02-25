'use strict'

let data = {
  commercial: 3,
  url: 'https://tarma.com/installmate/download',
  version: '#content > article > table > tbody > tr:nth-child(2) > td:nth-child(2)',
  changelog: {
    url: '[href$="/whatsnew.htm"]',
    selector: '#page > div.content > table > tbody > tr:nth-child(2) > td:nth-child(3)'
  },
  download: '[href$=".exe"]'
}
module.exports = data
