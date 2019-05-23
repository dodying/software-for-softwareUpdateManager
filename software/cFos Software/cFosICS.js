'use strict'

let data = {
  url: 'https://www.cfos.de/en/download/download.htm',
  version: {
    selector: '#cfosics>.red'
  },
  download: {
    func: async (res, $) => 'https://www.cfos.de' + $('[href*="cFosICS"][href$=".zip"]').eq(0).attr('href').match(/\?file=(.*)$/)[1]
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
