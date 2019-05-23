'use strict'

let data = {
  commercial: 3,
  url: 'https://fman.io/download/thank-you?os=Windows',
  version: {
    selector: '.lead2 a[href$=".exe"]',
    attr: 'href'
  },
  download: {
    selector: '.lead2 a[href$=".exe"]'
  }
}
module.exports = data
