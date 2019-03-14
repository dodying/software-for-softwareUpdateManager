'use strict'

let data = {
  url: 'https://sourceforge.net/projects/wxhexeditor/files/wxHexEditor/',
  version: {
    selector: 'a.download .sub-label'
  },
  download: {
    func: async (res, $, fns, choice) => {
      let uri1 = $('#files_list>tbody .folder>th>a').eq(0).attr('href')
      let res1 = await fns.req(uri1)
      let $1 = fns.cheerio.load(res1.body)
      return $1('.file a[href$="Win64.zip/download"]').eq(0).attr('href')
    }
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
