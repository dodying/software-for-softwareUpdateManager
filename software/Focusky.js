'use strict'

let data = {
  commercial: 1,
  url: 'http://focusky.com/',
  version: {
    func: async (res, $, fns, choice) => {
      let res1 = await fns.reqHEAD('http://focusky.com/download/index.php?platform=win')
      return res1.request.uri.href.match(/focusky_v(.*?)_win_setup.zip/)[1]
    }
  },
  download: {
    plain: 'http://focusky.com/download/index.php?platform=win'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_inno')
  }
}
module.exports = data
