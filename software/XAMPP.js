'use strict'

let data = {
  withoutHeader: true,
  url: 'https://www.apachefriends.org/index.html',
  version: {
    selector: 'a[data-delayed-href="/download_success.html"]'
  },
  download: {
    plain: 'https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/{version}/xampp-windows-x64-{version}-0-VC15.7z/download'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
