'use strict'

let data = {
  url: 'https://www.miranda-ng.org/distr/stable/',
  version: {
    selector: '[href*="miranda-ng-v"][href$="x64.7z"]',
    attr: 'href'
  },
  download: {
    selector: '[href*="miranda-ng-v"][href$="x64.7z"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
