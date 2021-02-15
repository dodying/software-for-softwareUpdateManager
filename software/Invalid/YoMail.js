'use strict';

const data = {
  commercial: 2,
  url: 'http://www.nextechat.com/download/',
  version: '.platform:contains("PC版") h3',
  changelog: 'section>ul',
  download: async (res, $, fns, choice) => {
    const res1 = await fns.req('http://www.nextechat.com/assets/version.js');
    return `http://winupgrade-1251063063.file.myqcloud.com/download/${res1.body.match(/var version = ([\d]+)/)[1]}/YoMailSetup.zip`;
  },
  install: 'install'
};
module.exports = data;
