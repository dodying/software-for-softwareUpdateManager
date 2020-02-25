'use strict'

let data = {
  url: 'http://leagueskin.net/p/download-mod-skin-lol-pro-2016-chn',
  version: (res, $) => res.body.match(/link1 = "(http:\/\/.*?)"/)[1].match(/LEAGUESKIN__(.*?)\//)[1],
  changelog: '.alert-warning',
  download: (res, $) => res.body.match(/link1 = "(http:\/\/.*?)"/)[1],
  install: 'install'
}
module.exports = data
