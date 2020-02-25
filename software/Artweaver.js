'use strict'

let data = {
  commercial: 2,
  url: 'https://www.artweaver.de/en/changelog',
  version: '.tabs_container>div:nth-child(2) a[href^="/en/help/"]',
  changelog: {
    url: '.tabs_container>div:nth-child(2) a[href^="/en/help/"]',
    selector: '.content'
  },
  download: 'https://www.artweaver.de/direct/ArtweaverPlus.exe',
  install: 'install_inno_type',
  other: {
    free: {
      commercial: 0,
      version: '.tabs_container>div:nth-child(3) a[href^="/en/help/"]',
      changelog: {
        url: '.tabs_container>div:nth-child(3) a[href^="/en/help/"]',
        selector: '.content'
      },
      download: 'https://www.artweaver.de/direct/Artweaver.exe'
    }
  }
}
module.exports = data
