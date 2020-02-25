'use strict'

let data = {
  url: 'http://cn.ejie.me/download.html',
  version: (res, $) => res.body.match(/self.location='(.*?)';/)[1].match(/clover@(.*?).exe/)[1],
  changelog: ['http://cn.ejie.me/', '.simpleTabs>div:nth-child(3)>ul'],
  download: (res, $) => res.body.match(/self.location='(.*?)';/)[1]
}
module.exports = data
