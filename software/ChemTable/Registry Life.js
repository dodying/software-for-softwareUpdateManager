'use strict'

let data = {
  url: 'https://www.chemtable.com/',
  version: {
    selector: '.programname>a[href="//www.chemtable.com/RegistryLife.htm"]'
  },
  download: {
    plain: 'https://www.chemtable.com/files/registry-life-installer.exe'
  }
}
module.exports = data
