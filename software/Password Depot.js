'use strict'

let data = {
  commercial: 3,
  url: 'https://www.password-depot.de/en/news/',
  version: '#client+h2',
  changelog: '#client+h2+ul',
  download: async (res, $, fns, choice) => fns.walkLink('https://www.password-depot.de/en/downloading.htm', fns, '[href$=".exe"]'),
  install: 'install_inno',
  other: {
    server: {
      version: '#server+h2',
      changelog: '#server+h2+ul',
      download: async (res, $, fns, choice) => fns.walkLink('https://www.password-depot.de/en/downloadingsvr.htm', fns, '[href$=".exe"]')
    }
  }
}
module.exports = data
