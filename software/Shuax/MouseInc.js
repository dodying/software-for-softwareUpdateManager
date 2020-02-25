'use strict'

let data = {
  url: 'https://shuax.com/project/mouseinc/',
  version: '.title',
  changelog: {
    url: 'https://docs.shuax.com/MouseInc/docs/update.md',
    match: /^## [\d.]+/,
    split: true
  },
  download: 'https://shuax.com/mi',
  install: 'install_zipped_single'
}
module.exports = data
