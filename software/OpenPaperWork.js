'use strict'

let data = {
  url: 'https://download.openpaper.work/windows/amd64/',
  version: {
    func: async (res, $, fns, choice) => {
      let latest = $('td:has(a[href="paperwork-master-latest.zip"])+td').eq(0).text()
      let index = $('td:has(a[href^="paperwork-master"][href$=".zip"]:not([href="paperwork-master-latest.zip"]))+td').toArray().map(i => $(i).text() === latest)
      index = index.indexOf(true)
      return $('a[href^="paperwork-master"][href$=".zip"]:not([href="paperwork-master-latest.zip"])').eq(index).text().match(/paperwork-master-(.*?).zip/)[1]
    }
  },
  download: {
    plain: 'https://download.openpaper.work/windows/amd64/paperwork-latest.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
