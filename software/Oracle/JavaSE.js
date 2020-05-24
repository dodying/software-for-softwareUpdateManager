'use strict';
let download;

const data = {
  url: 'https://www.oracle.com/java/technologies/javase-downloads.html',
  version: async (res, $, fns, choice) => {
    const uris = $('.col-w1 .cta-list>li:nth-child(1)>a[href$="downloads.html"][href*="javase-jdk"]').toArray().map(i => $(i).attr('href'));
    const uri1 = choice ? uris.find(choice) : uris[0];
    const res1 = await fns.req(uri1);
    const $1 = fns.cheerio.load(res1.body);
    download = $1('[data-file*="windows-x64"]').eq(0).attr('data-file').replace('/otn/', '/otn-pub/');
    return download.match(/jdk-(.*?)[-_]windows-x64/)[1];
  },
  download: async (res, $, fns, choice) => {
    const res1 = await fns.reqHEAD({
      mothed: 'GET',
      uri: download,
      headers: {
        Cookie: 'gpw_e24=https://www.oracle.com; oraclelicense=accept-securebackup-cookie'
      }
    });
    return res1.request.uri.href;
  },
  install: ['install_cli', null, ['INSTALLDIR={dir}', 'INSTALL_SILENT=Enable', 'REBOOT=Disable'], { wait: true }],
  other: {
    lts: {
      versionChoice: (item, index, array) => index === 1
    },
    8: {
      versionChoice: (item) => item.includes('javase-jdk8-downloads.html')
    }
  }
};
module.exports = data;
