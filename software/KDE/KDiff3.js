'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/kdiff3/files/kdiff3/',
  version: {
    selector: '.folder .name'
  },
  download: {
    func: async (res, $, req, cheerio, choice) => {
      let uri1 = $('.folder a[href^="/projects/"]').eq(0).attr('href')
      let res1 = await req(uri1)
      let $1 = cheerio.load(res1.body)
      return $1('a[title^="Click to download"][href*="64bit"][href$=".exe/download"]').eq(0).attr('href')
    }
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
