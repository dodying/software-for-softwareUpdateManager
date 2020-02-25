'use strict'

let data = {
  url: 'https://www.osforensics.com/tools/write-usb-images.html',
  version: '.feature:contains("Download")+p',
  changelog: {
    selector: '#sub-content',
    attr: 'text',
    match: /^Release [\d.]+/,
    split: true
  },
  download: 'https://www.osforensics.com/downloads/imageusb.zip',
  install: 'install_zipped_single'
}
module.exports = data
