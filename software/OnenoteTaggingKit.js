'use strict'

let data = {
  url: 'https://github.com/WetHat/OnenoteTaggingKit/releases/latest',
  version: {
    selector: '.muted-link.css-truncate'
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".msi"]'
  },
  fixedPath: '%ProgramFiles(x86)%\\WetHat Lab\\OneNoteTaggingKit\\OneNoteTaggingKit.dll',
  install: function (output, iPath, fns) {
    return fns.install.msi.i(output, iPath)
  }
}
module.exports = data
