'use strict'

let data = {
  commercial: 3,
  url: 'https://www.startisback.com',
  version: '[href="StartIsBack_setup.exe"]',
  changelog: '.history',
  download: 'https://s3.amazonaws.com/startisback/StartIsBackPlusPlus_setup.exe',
  install: 'install',
  other: {
    Plus: {
      version: '[href="StartIsBackPlus_setup.exe"]',
      download: 'https://s3.amazonaws.com/startisback/StartIsBackPlus_setup.exe'
    },
    PlusPlus: {
      version: '[href^="StartIsBackPlusPlus"][href$=".exe"]',
      download: '[href^="StartIsBackPlusPlus"][href$=".exe"]'
    }
  }
}
module.exports = data
