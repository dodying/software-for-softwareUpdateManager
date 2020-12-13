'use strict'

let data = {
  url: 'https://pan.baidu.com/disk/cmsdata?platform=guanjia',
  version: (res, $) => res.json.list[0].version.match(/百度网盘PC版V(.*)/),
  changelog: (res, $) => res.json.list[0].detail[0].more.join('\n'),
  download: (res, $) => res.json.list[0].url,
  install: 'install_nsis_cli'
}
module.exports = data
