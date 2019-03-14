'use strict'

let data = {
  url: 'https://www.mp3tag.de/en/download.html',
  version: {
    selector: 'h2',
    match: /v(\d+\.\w+)/
  },
  download: {
    func: async (res, $) => 'https://download.mp3tag.de/' + $('a[href="dodownload.html"]').text().trim()
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
