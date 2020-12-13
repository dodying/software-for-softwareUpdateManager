'use strict';

const data = {
  url: 'https://www.wireshark.org/download.html',
  version: '[href="#group_accordion_stable"]',
  changelog: ['https://www.wireshark.org/docs/relnotes/wireshark-{version}.html', '#content>.sect1:nth-child(2)'],
  download: '.platform-win64+a',
  install: 'install_nsis',
  other: {
    // development: {
    //   version: '[href="#group_accordion_development"]',
    //   download: '#group_accordion_development .platform-win64+a'
    // },
    oldstable: {
      version: '[href="#group_accordion_oldstable"]',
      download: '#group_accordion_oldstable .platform-win64+a'
    },
    automated: {
      url: 'https://www.wireshark.org/download/automated/win64/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.indexcolname>a',
        sort: true,
        match: /Wireshark-win64-(.*?).exe/
      }),
      changelog: null,
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.indexcolname>a',
        sort: true,
        matchCheck: /Wireshark-win64-(.*?).exe/
      })
    }
  }
};
module.exports = data;
