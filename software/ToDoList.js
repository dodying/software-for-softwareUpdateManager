'use strict'

let data = {
  url: 'https://abstractspoon.weebly.com/',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'http://abstractspoon.pbwiki.com/f/todolist_exe.zip'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
