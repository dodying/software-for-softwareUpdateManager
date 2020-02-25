'use strict'

let data = {
  commercial: 3,
  url: 'https://www.solveigmm.com/en/products/hypercam/',
  version: ['.header-block__title', 'text', /HyperCam ([\d.]+)/],
  changelog: '.version-history',
  download: '[data-ga-category="HyperCam_Home"]',
  installType: 'Ghost Installer',
  other: {
    Business: {
      download: '[data-ga-category="HyperCam_Business"]'
    }
  }
}
module.exports = data
