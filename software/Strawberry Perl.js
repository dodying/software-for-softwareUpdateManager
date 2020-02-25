'use strict'

let data = {
  url: 'http://strawberryperl.com/releases.html',
  version: '.file>tbody>tr:nth-child(2)>td',
  changelog: {
    url: '[href^="http://strawberryperl.com/release-notes"]',
    selector: '#whatsnew>ul'
  },
  download: '.file>tbody>tr:nth-child(2)>td:nth-child(4)>a[href$="64bit-portable.zip"]',
  install: 'install'
}
module.exports = data
