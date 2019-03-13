'use strict'

let data = {
  url: 'https://s3.amazonaws.com/winds-2.0-releases/latest.html',
  version: {
    selector: '#td-win>a',
    attr: 'href',
    match: /Winds%20Setup%20(.*?).exe/
  },
  download: {
    selector: '#td-win>a'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped')(output, iPath, 'install', 'app-64.7z')
  }
}
module.exports = data
