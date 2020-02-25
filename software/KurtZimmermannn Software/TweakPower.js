'use strict'

let data = {
  url: 'https://kurtzimmermann.com/index_e.html',
  version: ['.col-lg-3 .card-block:contains("TweakPower")>.card-text', 'text', /Version ([\d.]+)/],
  download: '.col-lg-3 .card-block:contains("TweakPower") [href$=".exe"]'
}
module.exports = data
