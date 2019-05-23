'use strict'

let data = {
  url: 'https://github.com/Pulover/PuloversMacroCreator/releases//latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'MacroCreatorPortable\\x64')
  }
}
module.exports = data
