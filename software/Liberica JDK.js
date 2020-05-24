'use strict';
let uri1;

const data = {
  url: 'https://bell-sw.com/',
  version: async (res, $, fns, choice = 14) => {
    const elem = $(`.liberica-button:contains("${choice}")`);
    uri1 = elem.attr('href');
    return uri1.match(/pages\/java-(.*?)\//)[1];
  },
  download: async (res, $, fns, choice = 'jdk') => {
    const res1 = await fns.req(uri1);
    const $1 = fns.cheerio.load(res1.body);
    return $1(`.bs-table .bs-link[href*="${choice}"][href$="windows-amd64.zip"]`).attr('href');
  },
  install: 'install',
  other: {
    '14-jdk': { versionChoice: 'Current release', downloadChoice: 'jdk' }
  }
};

for (const version of [8, 11, 14]) {
  data.other[`${version}`] = { versionChoice: version, downloadChoice: 'jdk' };
  for (const type of ['jdk', 'jre']) {
    data.other[`${version}-${type}`] = { versionChoice: version, downloadChoice: type };
  }
}
module.exports = data;
