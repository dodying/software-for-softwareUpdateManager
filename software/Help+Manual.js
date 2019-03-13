'use strict'

let data = {
  commercial: 3,
  url: 'https://www.helpandmanual.com/downloads.html',
  version: {
    selector: 'a.weblink[href$=".exe"]>b',
    match: /Version (.*?) Setup/
  },
  download: {
    selector: 'a.weblink[href$=".exe"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_inno')(output, iPath, null, { '{code_MyHMX}': null })
  }
}
module.exports = data
