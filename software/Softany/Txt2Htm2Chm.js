'use strict'

let data = {
  commercial: 3,
  url: 'http://www.softany.com/txt2htm2chm/',
  version: {
    selector: '#content>h1'
  },
  download: {
    plain: 'http://download.softany.com/Softany_Txt2Htm2Chm_Trial.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
