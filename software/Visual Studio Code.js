'use strict'

let data = {
  url: 'https://github.com/Microsoft/vscode/releases',
  version: {
    selector: '.commit-title>a'
  },
  download: {
    plain: 'https://go.microsoft.com/fwlink/?Linkid=850641'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
