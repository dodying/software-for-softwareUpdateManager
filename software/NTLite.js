'use strict'

let data = {
  useProxy: true,
  commercial: 2,
  url: 'https://www.ntlite.com/download/',
  version: {
    selector: 'div.vc_col-sm-6:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > span:nth-child(2)'
  },
  download: {
    plain: 'http://downloads.ntlite.com/files/NTLite_setup_x64.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  },
  other: {
    beta: {
      version: {
        selector: 'div.wpb_column:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > span:nth-child(2)'
      },
      download: {
        plain: 'http://downloads.ntlite.com/files/NTLite_setup_x64_beta.exe'
      }
    }
  }
}
module.exports = data
