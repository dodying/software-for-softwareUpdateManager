'use strict'

let data = {
  url: 'https://www.cfos.de/en/ping/ping.htm',
  version: {
    selector: '[href*="hrping"][href$=".zip"]'
  },
  download: {
    func: async (res, $) => 'https://www.cfos.de' + $('[href*="hrping"][href$=".zip"]').eq(0).attr('href').match(/\?file=(.*)$/)[1]
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
