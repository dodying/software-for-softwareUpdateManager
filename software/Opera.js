'use strict'

let data = {
  url: 'https://download.operachina.com/pub/opera/desktop/', // https://get.geo.opera.com
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a',
    sort: true,
    attr: 'text',
    match: /^(.*)\/$/
  }),
  changelog: async (res, $, fns, choice) => [(await fns.walkLink('https://blogs.opera.com/desktop/?s=changelog', fns, '[itemprop="url"]', {
    selector: 'h4[id]+ul',
    attr: 'html'
  })), true],
  download: 'https://download.operachina.com/pub/opera/desktop/{version}/win/Opera_{version}_Setup_x64.exe',
  install: 'install',
  other: {
    beta: {
      url: 'https://download.operachina.com/pub/opera-beta/',
      changelog: null,
      download: 'https://download.operachina.com/pub/opera-beta/{version}/win/Opera_beta_{version}_Setup_x64.exe'
    },
    developer: {
      url: 'https://download.operachina.com/pub/opera-developer',
      changelog: null,
      download: 'https://download.operachina.com/pub/opera-developer/{version}/win/Opera_Developer_{version}_Setup_x64.exe'
    },
    GX: {
      url: 'https://download.operachina.com/pub/opera_gx/',
      changelog: null,
      download: 'https://download.operachina.com/pub/opera_gx/{version}/win/Opera_GX_{version}_Setup_x64.exe'
    }
  }
}
module.exports = data
