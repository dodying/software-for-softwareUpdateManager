'use strict';

module.exports = {
  url: 'https://www.nano-editor.org/dist/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'table>tbody>tr:not(:nth-child(1))>td:nth-child(2)>a',
    matchCheck: /v[\d.]+/,
    sort: true
  }, {
    selector: 'table>tbody>tr:not(:nth-child(1))>td:nth-child(2)>a',
    matchCheck: 'NT/'
  }, {
    selector: 'table>tbody>tr:not(:nth-child(1))>td:nth-child(2)>a',
    match: /nano-([\d.]+).zip/,
    sort: true
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'table>tbody>tr:not(:nth-child(1))>td:nth-child(2)>a',
    matchCheck: /v[\d.]+/,
    sort: true
  }, {
    selector: 'table>tbody>tr:not(:nth-child(1))>td:nth-child(2)>a',
    matchCheck: 'NT/'
  }, {
    selector: 'table>tbody>tr:not(:nth-child(1))>td:nth-child(2)>a',
    matchCheck: /nano-([\d.]+).zip/,
    sort: true
  }),
  install: 'install',
  other: {
    git: {
      url: 'https://www.nano-editor.org/dist/win32-support/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'table>tbody>tr:not(:nth-child(1))>td:nth-child(2)>a',
        sort: true,
        match: /nano-git-(.*?).exe/
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'table>tbody>tr:not(:nth-child(1))>td:nth-child(2)>a',
        sort: true,
        matchCheck: /nano-git-(.*?).exe/
      }),
      install: 'install_single'
    }
  }
};
