'use strict';

let info;

const data = {
  url: 'https://pan.bitqiu.com/download',
  version: async (res, $, fns, choice) => {
    const res1 = await fns.req({
      method: 'POST',
      uri: 'https://pan.bitqiu.com/ver/getVersionHis',
      form: {
        page: 1,
        pageSize: 20,
        type: 3,
        org_channel: 'default|default|default'
      }
    });
    info = res1.json.data.data[0];
    return info.version;
  },
  changelog: () => info.desc,
  download: async (res, $, fns, choice) => {
    const res1 = await fns.req('https://pan.bitqiu.com/loginServer/download');
    return res1.json.data.pc_url;
  },
  install: 'install'
};
module.exports = data;
