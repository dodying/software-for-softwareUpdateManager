'use strict'

let data = {
  commercial: 2,
  url: 'https://www.phraseexpress.com/download.php',
  version: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: 'a[href$="/changelog.php"]'
    }, {
      selector: 'body > div.container > div > div > table:nth-child(4) > thead > tr:nth-child(2) > td:nth-child(2) > p',
      attr: 'text'
    })
  },
  download: {
    plain: 'https://www.phraseexpress.com/PhraseExpress_USB.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
