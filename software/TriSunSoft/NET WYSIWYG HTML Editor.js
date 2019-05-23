'use strict'

let data = {
  commercial: 0,
  url: 'https://www.trisunsoft.com/dotnet-wysiwyg-html-editor/',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://www.trisunsoft.com/freeware/net-wysiwyg-html-editor.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.single(output, iPath)
  }
}
module.exports = data
