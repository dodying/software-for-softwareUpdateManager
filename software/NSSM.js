'use strict'

let data = {
  url: 'https://nssm.cc/download',
  version: ['.noIndent>a[href$=".zip"]', 'text', /nssm (.*)/],
  download: '.noIndent>a[href$=".zip"]',
  install: 'install',
  other: {
    'pre-release': {
      version: ['h4:contains("pre-release")+.noIndent>a[href$=".zip"]', 'text', /nssm (.*)/],
      download: 'h4:contains("pre-release")+.noIndent>a[href$=".zip"]'
    }
  }
}
module.exports = data
