'use strict'

let data = {
  url: 'https://gitlab.com/api/v4/projects/7098481/releases', // https://gitlab.com/angelkyo/w10-digitallicense/releases
  version: (res, $) => res.json.filter(i => i.name.match(/DigitalLicense/))[0].name.match(/DigitalLicense_v(.*)/)[1],
  download: (res, $) => res.json.filter(i => i.name.match(/DigitalLicense/))[0].description_html.match(/href="(.*?\/uploads\/.*?\.zip)"/)[1],
  install: 'install_zipped_single'
}
module.exports = data
