'use strict'

let data = {
  url: 'https://www.cgsecurity.org/wiki/TestDisk_Download',
  version: {
    func: async (res, $) => $('script[src="/mw/extensions/Download/download.js"]+style+script').eq(0).html().match(/<span class="download-title">TestDisk (.*?)<img /)[1]
  },
  download: {
    func: async (res, $) => $('script[src="/mw/extensions/Download/download.js"]+style+script').eq(0).html().match(/<a class="download-link" href="(.*?)">/)[1].replace('/Download_and_donate.php', '')
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
