'use strict'

let data = {
  url: 'https://www.majorgeeks.com/mg/getmirror/fiddler,1.html',
  version: {
    selector: '.geekywraplight>h1'
  },
  download: {
    plain: 'https://www.majorgeeks.com/index.php?ct=files&action=download&'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
