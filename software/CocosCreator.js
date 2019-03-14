'use strict'

let data = {
  preferPath: 'CocosCreator.exe',
  url: 'http://cocos2d-x.org/download',
  version: {
    selector: '#content > div.download > div:nth-child(3) > div.text > a:nth-child(4)'
  },
  download: {
    func: async (res, $, fns, choice) => {
      let url = $('#content > div.download > div:nth-child(3) > div.text > a:nth-child(4)').eq(0).attr('href')
      let res1 = await fns.req(url)
      return res1.body.match(/\$\("#direct-link"\).attr\("href","(.*)"\)/)[1]
    }
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, (from, to) => {
      const path = require('path')

      require('child_process').execSync(`"${from}" /extract:"${path.parse(__dirname).dir}\\unzip\\"`)
      let fromNew = require('fs-extra').readdirSync('unzip')
      fromNew = path.join('unzip', fromNew.filter(i => path.parse(i).ext === '.msi')[0])
      return fns.install.msi(fromNew, to, null, data.preferPath)
    })
  }
}
module.exports = data
