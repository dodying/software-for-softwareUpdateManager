'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/luabinaries/files/',
  version: {
    selector: '.folder .name'
  },
  download: {
    plain: 'https://sourceforge.net/projects/luabinaries/files/{version}/Tools%20Executables/lua-{version}_Win64_bin.zip/download'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
