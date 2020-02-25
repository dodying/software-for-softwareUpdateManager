'use strict'

let data = {
  url: 'https://rammichael.com/downloads/textify_setup.exe?changelog',
  version: 'b',
  changelog: async (res, $, fns, choice) => {
    let $1 = fns.cheerio.load(res.json.message)
    return [$1.html($1('b+ul').eq(0)), true]
  },
  download: 'https://rammichael.com/downloads/textify_setup.exe',
  install: ['install_nsis', ['Textify.ini', 'WebApp.ini']]
}
module.exports = data
