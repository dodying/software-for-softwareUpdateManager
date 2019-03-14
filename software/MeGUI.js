'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/megui/files',
  version: {
    selector: 'a.download .sub-label'
  },
  download: {
    plain: 'https://sourceforge.net/projects/megui/files/latest/download'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
