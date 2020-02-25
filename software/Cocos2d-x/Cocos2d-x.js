'use strict'

let data = {
  url: 'http://cocos2d-x.org/download',
  version: '#content > div.download > div:nth-child(2) > div.text > a:nth-child(2)',
  download: async (res, $, fns, choice) => {
    let url = $('#content > div.download > div:nth-child(2) > div.text > a:nth-child(2)').eq(0).attr('href')
    let res1 = await fns.req(url)
    return res1.body.match(/\$\("#direct-link"\).attr\("href","(.*)"\)/)[1]
  },
  install: 'install'
}
module.exports = data
