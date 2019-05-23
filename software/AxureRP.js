'use strict'

let data = {
  commercial: 3,
  url: 'https://www.axure.com/release-history',
  version: {
    selector: '.b-sidebar-box__content>h3'
  },
  download: {
    plain: 'https://axure.cachefly.net/AxureRP-Setup.exe'
    // https://d3uii9pxdigrx1.cloudfront.net/AxureRP-Setup.exe
    // https://maxure.s3.amazonaws.com/AxureRP-Setup.exe
  },
  preferPath: 'AxureRP9.exe',
  install: function (output, iPath, fns) {
    return fns.install.wix(output, iPath, null, /AxureRp/)
  }
}
module.exports = data
