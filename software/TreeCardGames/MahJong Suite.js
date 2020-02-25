'use strict'

let data = {
  commercial: 2,
  url: 'https://www.mahjongsuite.com/whatsnew.htm',
  version: '[size="5"]+[size="3"]',
  changelog: '[background="images/lft.gif"]+td',
  download: (res, $) => res.body.match(/window.open\("(.*?)"/)[1],
  install: 'install_inno'
}
module.exports = data
