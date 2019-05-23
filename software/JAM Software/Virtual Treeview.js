'use strict'

let data = {
  url: 'https://www.jam-software.com/virtual-treeview/',
  version: {
    selector: '.uppercase'
  },
  download: {
    plain: 'https://www.jam-software.com/virtual-treeview/VirtualTreeView.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath, null, '1')
  }
}
module.exports = data
