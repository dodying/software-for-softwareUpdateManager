'use strict';

module.exports = {
  type: 'software-list',
  list: {
    nexusfile: {
      url: 'http://www.xiles.net/',
      version: ['.product:contains("nexusfile") [title$=".zip"]', 'href', /ver=([\d.]+)/],
      download: '.product:contains("nexusfile") [title$=".zip"]',
      install: 'install'
    },
    nexusfont: {
      url: 'http://www.xiles.net/',
      version: ['.product:contains("nexusfont") [title$=".zip"]', 'href', /ver=([\d.]+)/],
      download: '.product:contains("nexusfont") [title$=".zip"]',
      install: 'install'
    },
    nexusimage: {
      url: 'http://www.xiles.net/',
      version: ['.product:contains("nexusimage") .download-button', 'href', /ver=([\d.]+)/],
      download: '.product:contains("nexusimage") .download-button',
      install: 'install'
    }
  }
};
