'use strict'

let data = {
  url: 'https://cacher-download.nyc3.digitaloceanspaces.com/latest.yml',
  version: {
    func: async (res, $) => res.body.match(/Cacher Setup (.*?).exe/)[1]
  },
  download: {
    func: async (res, $) => 'https://s3.amazonaws.com/download.cacher.io/' + res.body.match(/path:\s+(.*)/)[1]
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'app-64.7z')
  }
}
module.exports = data
