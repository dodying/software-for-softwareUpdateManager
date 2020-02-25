'use strict'

let data = {
  preferPath: 'CocosCreator.exe',
  url: 'http://cocos2d-x.org/download',
  version: '#content > div.download > div:nth-child(3) > div.text > a:nth-child(4)',
  download: async (res, $, fns, choice) => {
    let url = $('#content > div.download > div:nth-child(3) > div.text > a:nth-child(4)').eq(0).attr('href')
    let res1 = await fns.req(url)
    return res1.body.match(/\$\("#direct-link"\).attr\("href","(.*)"\)/)[1]
  },
  install: info => {
    return info.fns.install.zipped(info, (from, to) => {
      const path = require('path')

      let temp = path.resolve(info.fns.dirname, 'unzip')
      require('child_process').execSync(`"${from}" /extract:"${temp}"`)
      let fromNew = require('fs-extra').readdirSync(temp)
      fromNew = path.join(temp, fromNew.filter(i => path.parse(i).ext === '.msi')[0])

      info.output = fromNew
      return info.fns.install.msi(info, null, data.preferPath)
    })
  }
}
module.exports = data
