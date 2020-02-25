'use strict'

let data = {
  url: 'https://wpd.app/changelog/',
  version: '.badge-primary',
  changelog: {
    selector: '.container',
    attr: 'text',
    // match: /^v[\d.]+/,
    split: true
  },
  download: 'https://wpd.app/get/latest.zip',
  install: 'install'
}
module.exports = data
