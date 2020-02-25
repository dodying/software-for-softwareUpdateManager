'use strict'

let data = {
  url: 'https://www.yozosoft.com/',
  version: ['.linkto+a[href^="download"]', 'href', /download\/(.*?).zip/],
  download: '.linkto+a[href^="download"]'
}
module.exports = data
