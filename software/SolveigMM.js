'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'AVI Trimmer': {
      commercial: 3,
      url: 'https://www.solveigmm.com/en/products/avi-trimmer-mkv/',
      version: ['.header-block__title', 'text', /AVI Trimmer\+ ([\d.]+)/],
      changelog: '.version-history',
      download: '[data-ga-category="AVI_Trimmer_MKV"]',
      install: 'install_inno_type'
    },
    HyperCam: {
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
    },
    'Video Splitter': {
      commercial: 3,
      url: 'https://www.solveigmm.com/en/products/video-splitter/',
      version: ['.header-block__title', 'text', /Video Splitter ([\d.]+)/],
      changelog: '.version-history',
      download: async (res, $, fns, choice) => fns.walkLink('https://www.solveigmm.com/en/download-vs/?popup=1', fns, '[data-ga-category="Video_Splitter_Home_x64"]'),
      installType: 'Ghost Installer',
      other: {
        Business: {
          download: async (res, $, fns, choice) => fns.walkLink('https://www.solveigmm.com/en/download-vs/?popup=1', fns, '[data-ga-category="Video_Splitter_Business_x64"]')
        }
      }
    },
    'WMP Trimmer Plugin': {
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
    },
    'Zond 265': {
      url: 'https://www.solveigmm.com/en/products/zond/',
      version: ['.header-block__title', 'text', /Zond 265 ([\d.]+)/],
      changelog: '.version-history',
      download: (res, $) => 'https://www.solveigmm.com/dist/' + $('#os-1 .os-version__text>p:nth-child(2)').text().replace(/^File:/, '').trim(),
      installType: 'Ghost Installer'
    }
  }
};
