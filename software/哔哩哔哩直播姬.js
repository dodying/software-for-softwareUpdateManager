'use strict'

let data = {
  url: 'https://api.live.bilibili.com/client/v1/LiveHime/download?type=3',
  version: (res, $) => res.json.data.version.replace(/Livehime-Win(-beta)?-/, ''),
  changelog: (res, $) => res.json.data.ver_desc,
  download: (res, $) => res.json.data.dl_url,
  install: 'install_inno'
}
module.exports = data
