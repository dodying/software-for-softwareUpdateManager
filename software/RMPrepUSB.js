'use strict'

let data = {
  useProxy: true,
  url: 'https://www.rmprepusb.com/documents/release-2-0',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '.td-value',
    sort: true,
    attr: 'text',
    matchCheck: /RMPrepUSB_Portable_v(.*?).zip/,
    match: /RMPrepUSB_Portable_v(.*?).zip/
  }),
  download: 'https://www.rmprepusb.com/documents/release-2-0/RMPrepUSB_Portable_v{version}.zip?attredirects=0&d=1',
  install: 'install'
}
module.exports = data
