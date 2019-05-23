'use strict'

let data = {
  withoutHeader: true,
  url: 'https://www.charlesproxy.com/latest-release/download.do',
  version: {
    selector: '[name="version"]',
    attr: 'value'
  },
  download: {
    func: async (res, $, fns, choice) => {
      let res1 = await fns.reqHEAD({
        uri: data.url,
        method: 'POST',
        form: {
          __csrf: $('[name="__csrf"]').eq(0).attr('value'),
          os: 'windows64',
          beta: 'false',
          version: $('[name="version"]').eq(0).attr('value')
        }
      })
      return res1.request.uri
    }
  },
  install: function (output, iPath, fns) {
    return fns.install.msi.i(output, iPath)
  }
}
module.exports = data
