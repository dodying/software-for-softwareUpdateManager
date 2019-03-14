'use strict'

let data = {
  commercial: 2,
  url: 'https://koofr.eu/desktop-apps/',
  version: {
    func: async (res, $, fns) => {
      let res1 = await fns.req('https://app.koofr.net/dl/apps/win', {
        method: 'HEAD'
      })
      return res1.headers['content-disposition'].match(/filename="(.*)"/)[1].match(/v(\d+[\d.]+\d+)/)[1]
    }
  },
  download: {
    plain: 'https://app.koofr.net/dl/apps/win'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
