'use strict'

let data = {
  url: 'https://netbeans.apache.org/download/index.html',
  version: 'h1',
  download: async (res, $, fns) => {
    let res1 = await fns.req('https://netbeans.apache.org/download/nb100/nb100.html')
    let $1 = fns.cheerio.load(res1.body)
    return $1('a[href$="bin.zip"]').eq(0).attr('href').replace('https://www.apache.org/dyn/closer.cgi/', 'https://mirrors.ustc.edu.cn/apache/')
  },
  install: 'install'
}
module.exports = data
