'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Clicador: {
      url: 'https://www.hnsoft.pt/Clicador',
      version: ['[href$=".zip"]', 'href'],
      changelog: {
        selector: '#body',
        attr: 'text',
        match: /^Version [\d.]+/,
        split: true
      },
      download: '[href$=".zip"]',
      install: 'install'
    },
    CSearcher: {
      url: 'https://www.hnsoft.pt/Downloads_CSearcher',
      version: ['[href$=".zip"]', 'href'],
      changelog: {
        selector: '#body',
        attr: 'text',
        match: /^Version [\d.]+/,
        split: true
      },
      download: '[href$=".zip"]',
      install: 'install'
    },
    cStatus: {
      url: 'https://www.hnsoft.pt/Downloads_cstatus',
      version: ['[href$=".zip"]', 'href'],
      changelog: {
        selector: '#body',
        attr: 'text',
        match: /^Version [\d.]+/,
        split: true
      },
      download: '[href$=".zip"]',
      install: 'install'
    }
  }
};
