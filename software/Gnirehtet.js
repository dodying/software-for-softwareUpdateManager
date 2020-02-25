'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/Genymobile/gnirehtet/releases/latest'
  },
  downloadChoice: '[href$=".zip"][href*="rust-win64"]',
  install: 'install',
  other: {
    java: {
    },
    java8: {
      downloadChoice: '[href$="java8.zip"][href*="java"]'
    }
  }
}
module.exports = data
