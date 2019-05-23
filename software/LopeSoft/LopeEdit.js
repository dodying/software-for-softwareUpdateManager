'use strict'

let data = {
  commercial: 3,
  url: 'https://www.lopesoft.com/index.php/en/lopeedit/download',
  version: {
    selector: '.pd-title'
  },
  download: {
    plain: 'https://www.lopesoft.com/index.php/en/download/lopeedit?download=27:lopeedit-portable'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
