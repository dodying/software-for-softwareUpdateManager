'use strict'

let data = {
  url: 'https://www.zhornsoftware.co.uk/stickies/download.html',
  version: {
    selector: 'a[href$=".exe"]',
    match: /Stickies (.*?) setup program/
  },
  download: {
    selector: 'a[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
