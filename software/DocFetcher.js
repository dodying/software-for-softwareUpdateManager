'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/docfetcher/files',
  version: {
    selector: 'a.download .sub-label'
  },
  download: {
    plain: 'https://sourceforge.net/projects/docfetcher/files/latest/download'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
