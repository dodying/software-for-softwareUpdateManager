'use strict'

let data = {
  url: 'https://uu.163.com/baike/js/dl.js',
  version: async (res, $, fns, choice) => res.body.match(/'standbyDlUrl': '(.*?)'/)[1].match(/UU-(.*?).exe/)[1],
  download: async (res, $, fns, choice) => res.body.match(/'standbyDlUrl': '(.*?)'/)[1],
  install: 'install'
}
module.exports = data
