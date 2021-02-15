'use strict';

const data = {
  url: 'https://www.strokesplus.com/downloads/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'tr>td[valign="middle"]:nth-child(2)',
    attr: 'text',
    match: /Version ([\d.]+)/,
    sort: true
  }),
  download: async (res, $, fns, choice) => (await fns.walkLink(res, fns, {
    selector: 'tr>td[valign="middle"]:nth-child(2) a',
    matchCheck: /version-\d+$/,
    sort: true
  }, {
    selector: '[href*="/files/"][href$="x64_Signed.exe"]'
  })).replace('http://', 'https://'),
  install: 'install_inno'
};
module.exports = data;
