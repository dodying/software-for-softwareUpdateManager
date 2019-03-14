'use strict'

let data = {
  url: 'https://handbrake.fr/downloads.php',
  version: {
    selector: 'h2'
  },
  download: {
    func: async (res, $, fns) => {
      let res1 = await fns.req('https://handbrake.fr/' + $('a[href$="64-Win_GUI.zip"]').attr('href'))
      let $1 = fns.cheerio.load(res1.body)
      return $1('a[href$="64-Win_GUI.zip"]').attr('href')
    }
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
