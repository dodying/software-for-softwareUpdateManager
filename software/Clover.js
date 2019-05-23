'use strict'

let data = {
  url: 'http://cn.ejie.me/download.html',
  version: {
    func: async (res, $) => res.body.match(/self.location='(.*?)';/)[1].match(/clover@(.*?).exe/)[1]
  },
  download: {
    func: async (res, $) => res.body.match(/self.location='(.*?)';/)[1]
  }
}
module.exports = data
