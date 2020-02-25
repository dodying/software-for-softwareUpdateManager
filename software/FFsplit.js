'use strict'

let data = {
  site: {
    BitBucket: 'https://api.bitbucket.org/2.0/repositories/taqattack/ffsplit-public/downloads'
  },
  versionChoice: /FFsplit-(.*?)-Update.exe/,
  changelog: {
    url: 'https://www.ffsplit.com/changelog.html',
    selector: 'body>p:has(strong)',
    attr: 'text',
    split: true
  },
  install: 'install_inno_type'
}
module.exports = data
