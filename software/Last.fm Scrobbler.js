'use strict'

let data = {
  url: 'https://www.last.fm/about/trackmymusic',
  preferPath: 'Last.fm Desktop Scrobbler.exe',
  version: {
    func: async (res, $, fns) => {
      let res1 = await fns.req('https://www.last.fm/download/windows-scrobbler', { method: 'HEAD' })
      return res1.request.uri.href.match(/(\d+[\d.]+\d+)/)[1]
    }
  },
  download: {
    plain: 'https://www.last.fm/download/windows-scrobbler'
  },
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
