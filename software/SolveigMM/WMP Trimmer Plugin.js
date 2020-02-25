'use strict'

let data = {
  commercial: 3,
  url: 'https://www.solveigmm.com/en/products/wmp-trimmer-plugin/',
  version: ['.header-block__title', 'text', /Plugin ([\d.]+)/],
  changelog: '.version-history',
  download: '[data-ga-action="download"][data-ga-category="WMP_Trimmer_Plugin_Home"]',
  installType: 'Ghost Installer',
  other: {
    Business: {
      download: '[data-ga-action="download"][data-ga-category="WMP_Trimmer_Plugin_Business"]'
    }
  }
}
module.exports = data
