'use strict'

let data = {
  commercial: 3,
  url: 'https://www.binarymark.com/products/random-number-generator',
  version: {
    selector: '[title^="Latest"]',
    attr: 'title'
  },
  download: {
    plain: 'https://www.binarymark.com/download/42'
  }
}
module.exports = data
