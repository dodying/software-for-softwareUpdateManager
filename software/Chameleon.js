'use strict'

let data = {
  url: 'https://raw.githubusercontent.com/ianmartinez/Chameleon/master/Changelog.txt',
  version: (res, $) => res.body.match(/Version (.*?) \(/)[1],
  changelog: {
    match: /Version [\d.]+/,
    split: true
  },
  download: 'https://github.com/ianmartinez/Chameleon/raw/master/Release/Chameleon.exe',
  install: 'install_single'
}
module.exports = data
