'use strict'

let data = {
  commercial: 3,
  url: 'https://www.binarymark.com/products/streaming-video-downloader',
  version: {
    selector: '[title^="Latest"]',
    attr: 'title'
  },
  download: {
    plain: 'https://www.binarymark.com/download/10'
  }
}
module.exports = data
