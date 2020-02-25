'use strict'

let data = {
  url: 'https://www.solveigmm.com/en/products/zond/',
  version: ['.header-block__title', 'text', /Zond 265 ([\d.]+)/],
  changelog: '.version-history',
  download: (res, $) => 'https://www.solveigmm.com/dist/' + $('#os-1 .os-version__text>p:nth-child(2)').text().replace(/^File:/, '').trim(),
  installType: 'Ghost Installer'
}
module.exports = data
