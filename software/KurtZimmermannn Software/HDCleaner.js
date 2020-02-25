'use strict'

let data = {
  url: 'https://kurtzimmermann.com/index_e.html',
  version: ['.col-lg-3 .card-block:contains("HDCleaner")>.card-text', 'text', /Version ([\d.]+)/],
  download: '.col-lg-3 .card-block:contains("HDCleaner") [href$=".exe"]'
}
module.exports = data
