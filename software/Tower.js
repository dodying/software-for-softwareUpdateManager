'use strict'

let data = {
  commercial: 3,
  url: 'https://www.git-tower.com/release-notes/windows',
  version: {
    selector: '[id="releases--windows"] .release__header>h2'
  },
  download: {
    selector: '[id="releases--windows"] .release__header>.release__download-link>a'
  },
  install: function (output, iPath, fns) {
    return fns.install.ai(output, iPath)
  }
}
module.exports = data
