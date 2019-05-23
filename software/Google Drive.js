'use strict'

let data = {
  useProxy: true,
  url: 'https://www.softpedia.com/get/Internet/File-Sharing/Google-Drive.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'http://dl.google.com/drive/{version}/gsync.msi'
  },
  preferPath: 'googledrivesync.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
