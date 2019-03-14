'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/kdiff3/files/kdiff3/',
  version: {
    selector: '.folder .name'
  },
  download: {
    func: async (res, $, fns, choice) => {
      let uri1 = $('.folder a[href^="/projects/"]').eq(0).attr('href')
      let res1 = await fns.req(uri1)
      let $1 = fns.cheerio.load(res1.body)
      return $1('a[title^="Click to download"][href*="64bit"][href$=".exe/download"]').eq(0).attr('href')
    }
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
