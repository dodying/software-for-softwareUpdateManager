'use strict'

let data = {
  url: 'https://gitlab.com/api/v4/projects/7098481/releases',
  version: {
    func: async (res, $) => JSON.parse(res.body).filter(i => i.name.match(/DigitalLicense/))[0].name.match(/DigitalLicense_v(.*)/)[1]
  },
  download: {
    func: async (res, $) => JSON.parse(res.body).filter(i => i.name.match(/DigitalLicense/))[0].description_html.match(/href="(.*?\/uploads\/.*?\.zip)"/)[1]
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
