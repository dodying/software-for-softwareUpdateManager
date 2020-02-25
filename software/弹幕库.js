'use strict'
let str

let data = {
  url: 'https://www.danmaku.live',
  version: async (res, $, fns, choice) => {
    let uri1 = $('script[src^="/js/app."]').eq(0).attr('src')
    let res1 = await fns.req(uri1)
    str = res1.body
    let lineArr = str.match(/t\._v\("(.*?)"\)/g).map(i => i.match(/t\._v\("(.*?)"\)/)[1])
    return lineArr.filter(i => i.match(/弹幕库 v([\d.]+)/))[0].match(/弹幕库 v([\d.]+)/)[1]
  },
  changelog: (res, $) => {
    let lineArr = str.match(/t\._v\("(.*?)"\)/g).map(i => i.match(/t\._v\("(.*?)"\)/)[1])
    let match = /弹幕库 v[\d.]+/

    let split = lineArr.filter(line => line.match(match))
    let start = lineArr.indexOf(split[0])
    if (start === -1) return null
    let end = lineArr.indexOf(split[1])
    end = end === -1 ? lineArr.length : end
    return lineArr.slice(start, end).join('\n')
  },
  download: (res, $) => str.match(/"Windows"===this.platform\?window.location.href="(.*?)"/)[1],
  install: 'install'
}
module.exports = data
