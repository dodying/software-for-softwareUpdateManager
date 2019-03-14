'use strict'

let data = {
  url: 'https://filezilla-project.org/download.php?type=server',
  version: {
    selector: '.downloadscreenshot+p'
  },
  download: {
    selector: '#quickdownloadbuttonlink'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
