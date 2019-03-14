'use strict'

let data = {
  commercial: 2,
  url: 'https://www.minitool.com/backup/upgrade-history.html',
  version: {
    selector: '.sm-upgrade-history>h3'
  },
  download: {
    selector: 'a[href*="download"][href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
