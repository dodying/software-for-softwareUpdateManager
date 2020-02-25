'use strict'

let data = {
  commercial: 1,
  url: 'https://www.nurgo-software.com/company/news/20-tidytabs',
  version: '[href^="/company/news/"][title^="TidyTabs"]',
  changelog: '.article-intro>ul',
  download: 'https://www.nurgo-software.com/download/TidyTabs.msi',
  install: ['install_msi', null, 'TidyTabs.Gui.exe']
}
module.exports = data
