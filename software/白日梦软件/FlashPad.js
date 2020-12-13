'use strict';

module.exports = {
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
};
