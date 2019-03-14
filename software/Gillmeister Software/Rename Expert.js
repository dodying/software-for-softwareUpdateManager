'use strict'

let data = {
  url: 'https://www.rename-expert.com/download.aspx',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'https://www.rename-expert.com/downloads/rename_expert-setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
