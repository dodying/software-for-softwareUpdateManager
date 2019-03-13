'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/nevernote/files',
  version: {
    selector: '.download',
    attr: 'title',
    match: / - (\d+[\d.]+\d+)/
  },
  download: {
    plain: 'https://sourceforge.net/projects/nevernote/files/latest/download'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
