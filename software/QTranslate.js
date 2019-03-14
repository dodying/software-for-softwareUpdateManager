'use strict'

let data = {
  url: 'https://quest-app.appspot.com/',
  version: {
    selector: 'a[title="Download QTranslate"]'
  },
  download: {
    selector: 'a[title="Download QTranslate"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
