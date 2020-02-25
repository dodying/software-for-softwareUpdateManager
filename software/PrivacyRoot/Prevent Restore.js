'use strict'

let data = {
  commercial: 2,
  url: 'https://privacyroot.com/software/net1/all.index',
  version: (res, $) => res.body.match(/TITLE=Prevent Restore\r?\nVERSION=(.*)/m)[1],
  download: 'https://privacyroot.com/software/setups/setup_prevent_restore.exe'
}
module.exports = data
