'use strict'

let data = {
  url: 'https://sourceforge.net/projects/wxhexeditor/files/wxHexEditor/',
  version: {
    selector: 'a.download .sub-label'
  },
  download: {
    func: async (res, $, req, cheerio, choice) => {
      let uri1 = $('#files_list>tbody .folder>th>a').eq(0).attr('href')
      let res1 = await req(uri1)
      let $1 = cheerio.load(res1.body)
      return $1('.file a[href$="Win64.zip/download"]').eq(0).attr('href')
    }
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
