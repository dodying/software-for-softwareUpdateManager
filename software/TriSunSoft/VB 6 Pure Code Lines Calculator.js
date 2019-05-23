'use strict'

let data = {
  commercial: 0,
  url: 'https://www.trisunsoft.com/vb6-pure-code-lines-calculator/',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://www.trisunsoft.com/freeware/vb6-pure-code-lines-calculator.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath, null, { '{userappdata}': require('path').resolve(iPath, './../../') })
  }
}
module.exports = data
