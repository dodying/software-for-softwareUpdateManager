'use strict'

let data = {
  url: 'https://www.bleachbit.org/download/windows',
  version: '.field-item>p',
  download: async (res, $, fns, choice) => {
    let uri1 = $('[href$="portable.zip"]').eq(0).attr('href')
    let res1 = await fns.reqHEAD(uri1)
    return res1.request.uri.href
  },
  install: 'install',
  other: {
    nightly: {
      site: {
        AppVeyor: 'https://ci.appveyor.com/api/projects/az0/bleachbit'
      },
      downloadChoice: 'portable.zip'
    }
  }
}
module.exports = data
