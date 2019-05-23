'use strict'

let data = {
  url: 'https://www.softpedia.com/get/Office-tools/Clipboard/PinClipBoard.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'https://pinclipboard.com/Download/PinClipBoard_Portable.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
