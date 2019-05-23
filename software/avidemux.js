'use strict'

let data = {
  url: 'https://sourceforge.net/projects/avidemux/files/avidemux/',
  version: {
    selector: '[headers="files_name_h"]>a'
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a'
    }, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: /64bits(.*?).exe/
    })
  }
}
module.exports = data
