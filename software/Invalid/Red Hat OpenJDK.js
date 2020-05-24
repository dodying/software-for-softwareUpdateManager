'use strict';
let info;

const data = {
  url: 'https://developers.redhat.com/products/openjdk/download',
  version: async (res, $, fns, choice = { version: 14, type: 'jdk' }) => {
    const arr = $('.product-version').toArray().map(i => ({
      text: $(i).find('.product-version__file-label').text(),
      href: $(i).find('.pf-c-button[href]').attr('href')
    }));
    info = arr.find(i => i.text.match(`${choice.type}-${choice.version}`) && i.text.match(/ZIP$/));
    return info.text.match(`${choice.type}-(${choice.version}.*)-x64`)[1];
  },
  download: () => info.href,
  install: 'install',
  other: {
    '14-jdk': { versionChoice: { version: 14, type: 'jdk' } }
  }
};

for (let version = 8; version <= 14; version++) {
  data.other[`${version}`] = { versionChoice: { version, type: 'jdk' } };
  for (const type of ['jdk', 'jre']) {
    data.other[`${version}-${type}`] = { versionChoice: { version, type } };
  }
}
module.exports = data;
