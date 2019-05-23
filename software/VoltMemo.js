'use strict'

let data = {
  commercial: 3,
  url: 'http://www.voltmemo.com/chs/downloading.php?id=chs-en',
  version: {
    selector: 'a[href$=".exe"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  },
  other: {
    fr: { url: 'http://www.voltmemo.com/chs/downloading.php?id=chs-fr' },
    jp: { url: 'http://www.voltmemo.com/chs/downloading.php?id=chs-jp' },
    ru: { url: 'http://www.voltmemo.com/chs/downloading.php?id=chs-ru' },
    de: { url: 'http://www.voltmemo.com/chs/downloading.php?id=chs-de' },
    'cht-en': { url: 'http://www.voltmemo.com/chs/downloading.php?id=cht-en' }
  }
}
module.exports = data
