'use strict'

let data = {
  useProxy: true,
  commercial: 1,
  url: 'https://www.bitcomet.com/en/downloads',
  version: '#version',
  changelog: async (res, $) => {
    let lineArr = $('.bc_downloads_changelog dl').eq(0).html().split(/<d[dt]>(.*)<\/d[dt]>/).map(i => i.trim()).filter(i => i)
    let split = lineArr.filter(line => line.match(/^v[\d.]+/))
    let start = lineArr.indexOf(split[0])
    let end = lineArr.indexOf(split[1])
    return lineArr.slice(start, end).join('\n')
  },
  download: 'https://download.bitcomet.com/achive/BitComet_{version}.zip',
  install: 'install'
}
module.exports = data
