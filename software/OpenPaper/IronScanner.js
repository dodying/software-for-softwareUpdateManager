'use strict'

let data = {
  url: 'https://download.openpaper.work/windows/amd64/',
  version: async (res, $, fns, choice) => {
    let latest = $('td:has(a[href="ironscanner-master-latest.exe"])+td').eq(0).text()
    let index = $('td:has(a[href^="ironscanner-master"][href$=".exe"]:not([href="ironscanner-master-latest.exe"]))+td').toArray().map(i => $(i).text() === latest)
    index = index.indexOf(true)
    return $('a[href^="ironscanner-master"][href$=".exe"]:not([href="ironscanner-master-latest.exe"])').eq(index).text().match(/ironscanner-master-(.*?).exe/)[1]
  },
  download: 'https://download.openpaper.work/windows/amd64/ironscanner.exe',
  install: 'install_single'
}
module.exports = data
