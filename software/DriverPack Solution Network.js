'use strict'

let data = {
  url: 'https://drp.su/api/miscs/products',
  version: (res, $) => res.json.data.value.network.version,
  download: (res, $) => res.json.data.value.network.links[0].downloadLink,
  install: 'install'
}
module.exports = data
