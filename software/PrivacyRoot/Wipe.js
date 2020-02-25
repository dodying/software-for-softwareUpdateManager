'use strict'

let data = {
  commercial: 2,
  url: 'https://privacyroot.com/software/net1/all.index',
  version: (res, $) => res.body.match(/TITLE=Wipe\r?\nVERSION=(.*)/m)[1],
  download: 'https://privacyroot.com/software/setups/setup_wipe.exe'
}
module.exports = data
