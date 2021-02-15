'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Color Picker': {
      url: 'http://www.haoxg.net/tools.html',
      version: 'p:has([name="colorpicker"])~table[cellpadding="1"]',
      download: 'p:has([name="colorpicker"])~table[cellpadding="1"] [href^="download"][href$=".zip"]',
      install: 'install_zipped_single'
    },
    FlashPad: {
      url: 'http://www.haoxg.net/tools.html',
      version: 'p:has([name="flashpad"])~table[cellpadding="1"]',
      changelog: {
        selector: 'p:has([name="flashpad"])~table[cellpadding="1"]',
        attr: 'text',
        match: /^[\d.]+/,
        split: true
      },
      download: 'p:has([name="flashpad"])~table[cellpadding="1"] [href^="download"][href$=".zip"]',
      install: 'install_zipped_single'
    },
    'Iris Code Counter': {
      url: 'http://www.haoxg.net/tools.html',
      version: 'p:has([name="iriscodecounter"])~table[cellpadding="1"]',
      download: 'p:has([name="iriscodecounter"])~table[cellpadding="1"] [href^="download"][href$=".zip"]',
      install: 'install_zipped_single'
    },
    MiniHex: {
      url: 'http://www.haoxg.net/tools.html',
      version: '[name="minihex"]~table[cellpadding="1"]',
      download: '[name="minihex"]~table[cellpadding="1"] [href^="download"][href$=".zip"]',
      install: 'install_zipped_single'
    },
    TinyDB: {
      url: 'http://www.haoxg.net/tinydb.html',
      version: '[height="20"]:contains("下载")',
      download: '[href^="download/"][href$=".zip"]',
      install: ['install_single', 'Dbd.exe']
    },
    'Window Spy': {
      url: 'http://www.haoxg.net/tools.html',
      version: '[name="winspy"]~table[cellpadding="1"]',
      download: '[name="winspy"]~table[cellpadding="1"] [href^="download"][href$=".zip"]',
      install: 'install'
    },
    电子日记本: {
      url: 'http://www.haoxg.net/ediary/download.html',
      version: '.STYLE2',
      download: '[href$="copy.zip"]',
      install: 'install'
    },
    迷你密码箱: {
      url: 'http://www.haoxg.net/tools.html',
      version: '[name="myvault"]~table[cellpadding="1"]',
      changelog: {
        selector: '[name="myvault"]~table[cellpadding="1"]',
        attr: 'text',
        match: /^[\d.]+/,
        split: true
      },
      download: '[name="myvault"]~table[cellpadding="1"] [href^="download"][href$=".zip"]',
      install: 'install_zipped_single'
    },
    迷你成语词典: {
      url: 'http://www.haoxg.net/tools.html',
      version: 'p:has([name="cydict"])~table[cellpadding="1"]',
      download: 'p:has([name="cydict"])~table[cellpadding="1"] [href^="download"][href$=".zip"]',
      install: 'install'
    }
  }
};
