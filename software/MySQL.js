'use strict';

const data = {
  url: 'https://dev.mysql.com/downloads/mysql/?tpl=platform&os=3',
  version: '[class^="table"] tr>td:nth-child(2)',
  download: async (res, $, fns, choice) => {
    const uri1 = $('[href^="/downloads/file/?id="]').eq(0).attr('href');
    const res1 = await fns.req(uri1);
    const $1 = fns.cheerio.load(res1.body);
    return $1('[href^="/get/Downloads"]').eq(0).attr('href');
  },
  install: 'install',
  other: {
    workbench: {
      url: 'https://dev.mysql.com/downloads/workbench/?tpl=platform&os=3',
      install: ['install_msi', null, 'MySQLWorkbench.exe']
    }
  }
};
module.exports = data;
