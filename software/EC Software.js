'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Help+Manual': {
      commercial: 3,
      url: 'https://www.helpandmanual.com/downloads.html',
      version: ['a.weblink[href$=".exe"][href*="help-and-manual"]>b', 'text', /Help\+Manual ([\d.]+) Build (\d+)/, '$1.$2'],
      download: 'a.weblink[href$=".exe"][href*="help-and-manual"]',
      install: ['install_inno', null, { '{code_MyFILES}': '{dir}' }]
    },
    HelpXplain: {
      commercial: 3,
      url: 'https://www.helpandmanual.com/downloads.html',
      version: ['a.weblink[href$=".exe"][href*="helpxplain"]>b', 'text', /HelpXplain ([\d.]+) Build (\d+)/, '$1.$2'],
      download: 'a.weblink[href$=".exe"][href*="helpxplain"]',
      install: ['install_inno', null, { '{code_MyHMX}': '{dir}' }]
    }
  }
};
