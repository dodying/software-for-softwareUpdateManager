'use strict'

let data = {
  commercial: 3,
  url: 'https://www.solveigmm.com/en/products/video-splitter/',
  version: ['.header-block__title', 'text', /Video Splitter ([\d.]+)/],
  changelog: '.version-history',
  download: async (res, $, fns, choice) => fns.walkLink('https://www.solveigmm.com/en/download-vs/?popup=1', fns, '[data-ga-category="Video_Splitter_Home_x64"]'),
  installType: 'Ghost Installer',
  other: {
    Business: {
      download: async (res, $, fns, choice) => fns.walkLink('https://www.solveigmm.com/en/download-vs/?popup=1', fns, '[data-ga-category="Video_Splitter_Business_x64"]'),
    }
  }
}
module.exports = data
