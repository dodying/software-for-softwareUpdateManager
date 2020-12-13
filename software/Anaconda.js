'use strict';

module.exports = {
  url: 'https://repo.anaconda.com/archive/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a[href$=".exe"]',
    sort: true,
    match: /Anaconda3-(.*?)-Windows-x86_64.exe/
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a[href$=".exe"]',
    sort: true,
    matchCheck: /Anaconda3-(.*?)-Windows-x86_64.exe/
  }),
  // https://docs.anaconda.com/anaconda/install/silent-mode/
  install: 'install_nsis_cli',
  other: {
    2: {
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a[href$=".exe"]',
        sort: true,
        match: /Anaconda2-(.*?)-Windows-x86_64.exe/
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a[href$=".exe"]',
        sort: true,
        matchCheck: /Anaconda2-(.*?)-Windows-x86_64.exe/
      })
    },
    mini: {
      url: 'https://repo.anaconda.com/miniconda/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a[href$=".exe"]',
        sort: true,
        match: /Miniconda3-py\d+_(.*?)-Windows-x86_64.exe/
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a[href$=".exe"]',
        sort: true,
        matchCheck: /Miniconda3-py\d+_(.*?)-Windows-x86_64.exe/
      })
    },
    mini2: {
      url: 'https://repo.anaconda.com/miniconda/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a[href$=".exe"]',
        sort: true,
        match: /Miniconda2-py\d+_(.*?)-Windows-x86_64.exe/
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a[href$=".exe"]',
        sort: true,
        matchCheck: /Miniconda2-py\d+_(.*?)-Windows-x86_64.exe/
      })
    }
  }
};
