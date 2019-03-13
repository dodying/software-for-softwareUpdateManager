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
  install: function (output, iPath) {
    return require('./../../js/install_inno_with_type')(output, iPath)
  }
}
module.exports = data
