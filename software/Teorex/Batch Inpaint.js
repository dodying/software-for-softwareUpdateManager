'use strict'

let data = {
  commercial: 3,
  url: 'https://www.theinpaint.com/download.html',
  version: 'h3:has([name="batch-inpaint-changelog"])+p',
  changelog: 'h3:has([name="batch-inpaint-changelog"])+p+ul',
  download: 'https://www.theinpaint.com/download/BatchInpaintSetup.exe',
  install: 'install_inno_single'
}
module.exports = data
