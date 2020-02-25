'use strict'

let data = {
  commercial: 2,
  url: 'https://www.solitaire-spider.com/whats_new.htm',
  version: '#content>h3',
  changelog: {
    selector: '#content',
    attr: 'text',
    match: /^vNew Features in/,
    split: true
  },
  download: async (res, $, fns, choice) => {
    let res1 = await fns.req('https://www.solitaire-spider.com/download_spider_solitaire.htm')
    return res1.body.match(/window.open\("(.*?\.exe)"/)[1]
  },
  install: 'install_inno'
}
module.exports = data
