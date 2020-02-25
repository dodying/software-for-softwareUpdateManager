'use strict'

let data = {
  url: 'https://www.osforensics.com/tools/mount-disk-images.html',
  version: '.feature:contains("Download")+p',
  changelog: {
    selector: '#sub-content',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: 'https://www.osforensics.com/downloads/osfmount.exe',
  install: 'install_inno'
}
module.exports = data
