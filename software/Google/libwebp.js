'use strict';

const data = {
  url: 'http://downloads.webmproject.org/releases/webp/index.html',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a',
    sort: true,
    match: /libwebp-(\d+[\d.]+\d+)-windows-x64.zip$/
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a',
    sort: true,
    matchCheck: /libwebp-(\d+[\d.]+\d+)-windows-x64.zip$/
  }),
  install: ['install', null, '*/bin']
};
module.exports = data;
