'use strict'

let data = {
  commercial: 2,
  url: 'https://shemes.com/index.php?p=download',
  version: ['td>[href$=".exe"]', 'text', /GrabIt (.*)/],
  download: 'td>[href$=".exe"]',
  install: 'install_inno_type'
}
module.exports = data
