'use strict'

let data = {
  commercial: 3,
  url: 'https://www.helpandmanual.com/downloads.html',
  version: ['a.weblink[href$=".exe"][href*="helpxplain"]>b', 'text', /HelpXplain ([\d.]+) Build (\d+)/, '$1.$2'],
  download: 'a.weblink[href$=".exe"][href*="helpxplain"]',
  install: ['install_inno', null, { '{code_MyHMX}': '{dir}' }]
}
module.exports = data
