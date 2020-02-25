'use strict'

let data = {
  commercial: 3,
  url: 'https://www.helpandmanual.com/downloads.html',
  version: ['a.weblink[href$=".exe"][href*="help-and-manual"]>b', 'text', /Help\+Manual ([\d.]+) Build (\d+)/, '$1.$2'],
  download: 'a.weblink[href$=".exe"][href*="help-and-manual"]',
  install: ['install_inno', null, { '{code_MyFILES}': '{dir}' }]
}
module.exports = data
