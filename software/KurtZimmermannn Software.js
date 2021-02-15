'use strict';

module.exports = {
  type: 'software-list',
  list: {
    HDCleaner: {
      url: 'https://kurtzimmermann.com/index_e.html',
      version: ['.col-lg-3 .card-block:contains("HDCleaner")>.card-text', 'text', /Version ([\d.]+)/],
      download: '.col-lg-3 .card-block:contains("HDCleaner") [href$=".exe"]'
    },
    ImageFinder: {
      url: 'https://kurtzimmermann.com/index_e.html',
      version: ['.col-lg-3 .card-block:contains("ImageFinder")>.card-text', 'text', /Version ([\d.]+)/],
      download: '.col-lg-3 .card-block:contains("ImageFinder") [href$=".exe"]'
    },
    RegCool: {
      url: 'https://kurtzimmermann.com/index_e.html',
      version: ['.col-lg-3 .card-block:contains("RegCool")>.card-text', 'text', /Version ([\d.]+)/],
      download: '.col-lg-3 .card-block:contains("RegCool") [href$=".exe"]'
    },
    TweakPower: {
      url: 'https://kurtzimmermann.com/index_e.html',
      version: ['.col-lg-3 .card-block:contains("TweakPower")>.card-text', 'text', /Version ([\d.]+)/],
      download: '.col-lg-3 .card-block:contains("TweakPower") [href$=".exe"]'
    }
  }
};
