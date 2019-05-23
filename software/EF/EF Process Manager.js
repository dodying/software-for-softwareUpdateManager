'use strict'

let data = {
  commercial: 3,
  url: 'http://www.efsoftware.com/dw/e.htm',
  version: {
    selector: '.c > tbody:nth-child(1) > tr:nth-child(11) > td:nth-child(2)'
  },
  download: {
    plain: 'http://www.efsoftware.com/_p4/pm'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
