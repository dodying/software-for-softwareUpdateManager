'use strict';

module.exports = {
  url: 'https://osdn.net/projects/systemrescuecd/storage/releases/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '[data-name]>a',
    sort: true,
    attr: 'text'
  }),
  changelog: ['https://www.system-rescue-cd.org/Changes-x86/', 'p+ul>li>p+ul'],
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '[data-name]>a',
    sort: true
  }, {
    selector: '[data-name]>a',
    matchCheck: /systemrescuecd-amd64-([\d.]+).iso/
  })
};
