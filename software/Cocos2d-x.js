'use strict'

let data = {
  url: 'http://cocos2d-x.org/download',
  version: {
    selector: '#content > div.download > div:nth-child(2) > div.text > a:nth-child(2)'
  },
  download: {
    func: async (res, $, req, cheerio, choice) => {
      let url = $('#content > div.download > div:nth-child(2) > div.text > a:nth-child(2)').eq(0).attr('href')
      let res1 = await req(url)
      return res1.body.match(/\$\("#direct-link"\).attr\("href","(.*)"\)/)[1]
    }
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
