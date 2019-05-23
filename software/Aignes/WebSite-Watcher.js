'use strict'

let data = {
  commercial: 3,
  url: 'https://www.aignes.com/download.htm',
  version: {
    selector: '.mobile b',
    match: /\((.*)\)/
  },
  download: {
    plain: 'https://www.aignes.info/download/wswsetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  },
  other: {
    free: {
      commercial: 0,
      url: 'https://www.aignes.com/wswfree.htm',
      version: {
        selector: '.mobile .medium',
        match: /\((.*)\)/
      },
      download: {
        plain: 'https://www.aignes.info/download/wswfreesetup.exe'
      }
    }
  }
}
module.exports = data
