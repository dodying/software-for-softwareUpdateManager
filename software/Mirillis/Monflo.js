'use strict'

let data = {
  commercial: 3,
  url: 'https://monflo.mirillis.com/download/thank-you?file=monflopc',
  version: {
    selector: '.download+ul>li'
  },
  download: {
    selector: 'a.download'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
