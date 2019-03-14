'use strict'

let data = {
  url: 'http://dejavu.narod.ru/hiddex.html',
  version: {
    selector: '.post_date',
    match: /version (.*) \(/
  },
  download: {
    plain: 'http://dejavu.narod.ru/hiddex.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
