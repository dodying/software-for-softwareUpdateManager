'use strict'

let data = {
  commercial: 3,
  url: 'https://www.netlimiter.com/',
  version: {
    selector: '[href$=".exe"]',
    attr: 'href'
  },
  download: {
    selector: '[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.ai.cli(output, iPath)
  }
}
module.exports = data
