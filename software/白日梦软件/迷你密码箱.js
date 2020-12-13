'use strict';

module.exports = {
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
};
