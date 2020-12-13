'use strict';

module.exports = {
  url: 'http://www.haoxg.net/tools.html',
  version: 'p:has([name="cydict"])~table[cellpadding="1"]',
  download: 'p:has([name="cydict"])~table[cellpadding="1"] [href^="download"][href$=".zip"]',
  install: 'install'
};
