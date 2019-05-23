'use strict'

let data = {
  commercial: 3,
  url: 'https://www.chemtable.com/',
  version: {
    selector: '.programname>a[href="//www.chemtable.com/organizer.htm"]'
  },
  download: {
    plain: 'https://www.chemtable.com/builds/portable/reg-organizer-setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
