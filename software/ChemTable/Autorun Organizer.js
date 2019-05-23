'use strict'

let data = {
  url: 'https://www.chemtable.com/',
  version: {
    selector: '.programname>a[href="//www.chemtable.com/autorun-organizer.htm"]'
  },
  download: {
    plain: 'https://www.chemtable.com/files/ao3/autorun-organizer-installer.exe'
  }
}
module.exports = data
