'use strict'

let data = {
  url: 'https://wiki.actiona.tools/doku.php?id=:en:start',
  version: 'p:has([href="/doku.php?id=en:changelog"])',
  changelog: {
    url: 'https://wiki.actiona.tools/doku.php?id=en:changelog',
    selector: '.page',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: 'a[href$="windows-64bit.7z"]',
  install: 'install',
  other: {
    unstable: {
      version: 'p:has([href="/doku.php?id=en:changelog"]):contains("Unstable")',
      download: 'p:has([href="/doku.php?id=en:changelog"]):contains("Unstable")+ul a[href$="windows-64bit.7z"]'
    }
  }
}
module.exports = data
