'use strict'

let data = {
  withoutHeader: true,
  url: 'http://oss.netfarm.it/mplayer/',
  version: {
    selector: '#content>ul>li',
    match: /MPlayer (r\d+)/
  },
  download: {
    selector: 'a[rel="external"][href*="x86_64"]'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
