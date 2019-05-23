'use strict'

let data = {
  url: 'https://alltags.net/?target=download&lang=en_us',
  version: {
    selector: '.alternating > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1)'
  },
  download: {
    selector: '[href$="64bit.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
