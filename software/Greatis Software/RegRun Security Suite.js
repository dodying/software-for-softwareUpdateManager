'use strict'

let data = {
  commercial: 3,
  url: 'https://greatis.com/security/download.htm',
  version: ['#block > tbody > tr > td:nth-child(1) > b', 'text', /\([\d.]+\)/],
  changelog: '#block > tbody > tr > td:nth-child(1) > ol',
  download: 'http://www.greatis.net/regrunplat.zip',
  install: ['install_zipped', 'install_inno_type']
}
module.exports = data
