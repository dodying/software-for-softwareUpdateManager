'use strict';

module.exports = {
  type: 'software-list',
  list: {
    '7+ Taskbar Tweaker': {
      url: 'https://rammichael.com/downloads/7tt_setup.exe?changelog',
      version: 'b',
      changelog: async (res, $, fns, choice) => {
        const $1 = fns.cheerio.load(res.json.message);
        return [$1.html($1('b+ul').eq(0)), true];
      },
      download: 'https://rammichael.com/downloads/7tt_setup.exe',
      install: ['install_nsis', '^inject.dll']
    },
    Textify: {
      url: 'https://rammichael.com/downloads/textify_setup.exe?changelog',
      version: 'b',
      changelog: async (res, $, fns, choice) => {
        const $1 = fns.cheerio.load(res.json.message);
        return [$1.html($1('b+ul').eq(0)), true];
      },
      download: 'https://rammichael.com/downloads/textify_setup.exe',
      install: ['install_nsis', ['Textify.ini', 'WebApp.ini']]
    }
  }
};
