'use strict'

let data = {
  commercial: 2,
  url: 'https://www.fotosizer.com/Download',
  version: '[style="font-size: 18px"]',
  changelog: {
    selector: '.section-title:contains("Whats new")+div',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: async (res, $, fns, choice) => {
    let res1 = await fns.req('https://www.fotosizer.com/Downloader.ashx')
    return res1.body
  },
  install: 'install_nsis'
}
module.exports = data
