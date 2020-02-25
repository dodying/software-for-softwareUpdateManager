'use strict'

let data = {
  url: 'https://www.cgsecurity.org/wiki/TestDisk_Download',
  version: (res, $) => $('script[src="/mw/extensions/Download/download.js"]+style+script').eq(0).html().match(/<span class="download-title">TestDisk (.*?)<img /)[1],
  changelog: {
    url: '[href$="Release"][href^="/wiki/TestDisk"]',
    selector: '#mw-content-text'
  },
  download: (res, $) => $('script[src="/mw/extensions/Download/download.js"]+style+script').eq(0).html().match(/<a class="download-link" href="(.*?)">/)[1].replace('/Download_and_donate.php', ''),
  install: 'install'
}
module.exports = data
