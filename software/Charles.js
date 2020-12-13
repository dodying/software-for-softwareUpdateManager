'use strict';

const data = {
  withoutHeader: true,
  url: 'https://www.charlesproxy.com/latest-release/download.do',
  version: ['[name="version"]', 'value'],
  changelog: {
    url: 'https://www.charlesproxy.com/documentation/version-history/',
    selector: '.content',
    attr: 'text',
    match: /^Version [\d.]+/,
    split: true
  },
  download: async (res, $, fns, choice) => {
    const res1 = await fns.reqHEAD({
      uri: data.url,
      method: 'POST',
      form: {
        __csrf: $('[name="__csrf"]').eq(0).attr('value'),
        os: 'windows64',
        beta: 'false',
        version: $('[name="version"]').eq(0).attr('value')
      }
    });
    return res1.request.uri.href;
  },
  install: 'install_msi_cli'
};
module.exports = data;
