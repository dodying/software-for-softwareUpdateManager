'use strict'

let data = {
  useProxy: true,
  commercial: 2,
  url: 'https://www.filehorse.com/download-hotspot-shield/download/',
  preferPath: 'bin/hsscp.exe',
  version: {
    selector: '.pageing>li:nth-child(3)'
  },
  download: {
    selector: '#download_url_dlm'
  },
  install: function (output, iPath, fns) {
    return fns.install.wix(output, iPath, null, /^HSS/i, data.preferPath)
  }
}
module.exports = data
