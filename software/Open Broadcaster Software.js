'use strict'

let data = {
  url: 'https://obsproject.com/download',
  version: {
    selector: '#win_blurb .dl_ver'
  },
  download: {
    selector: '#win_blurb a.green_btn'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
