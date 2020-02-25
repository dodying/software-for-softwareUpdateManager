'use strict'

let data = {
  url: 'http://www.quickpar.org.uk/Download.htm',
  version: '.title:contains("Download version")',
  changelog: ['http://www.quickpar.org.uk/ReleaseNotes.htm', 'tr:contains("Release Notes")+tr'],
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, '[href^="Download-"]', '[href$=".exe"]'),
  install: 'install_nsis'
}
module.exports = data
