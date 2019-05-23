'use strict'

let data = {
  url: 'https://www.mythicsoft.com/',
  version: {
    selector: 'a[href*="filelocator"][href$=".exe"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href*="filelocator"][href$=".exe"]'
  },
  preferPath: 'flpsearch.exe',
  install: function (output, iPath, fns) {
    return require('./Agent Ransack').install(output, iPath, fns, null, 'filelocator_sh.cab', data.preferPath)
  }
}
module.exports = data
