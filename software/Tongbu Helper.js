'use strict'

let data = {
  url: 'http://tbconfig.tongbu.com/tbzs/tbzs.ashx?appname=zhushou30&channel=sdxz&x64=1&env=0',
  version: (res, $) => res.json.Data[0].Version,
  download: (res, $) => res.json.Data[0].Url,
  install: 'install_nsis'
}
module.exports = data
