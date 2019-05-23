'use strict'

let data = {
  url: 'https://xmedia-recode.de/en/download.html',
  version: {
    selector: 'table.download_table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)'
  },
  download: {
    func: async (res, $) => $('.download_link[href$=".zip"]').eq(0).attr('href').replace('http://', 'https://')
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
