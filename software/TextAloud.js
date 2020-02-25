'use strict'

let data = {
  commercial: 3,
  url: 'https://nextup.com/download.html',
  version: '[href="javascript:linkToID(\'ta4\')"]',
  download: async (res, $, fns, choice) => {
    let uri1 = 'https://nextup.com/php/nextup-urls/fileurl.php?id=ta4'
    let res1 = await fns.req(uri1)
    return res1.body.match(/^"(.*)"$/)[1]
  },
  install: 'install'
}
module.exports = data
