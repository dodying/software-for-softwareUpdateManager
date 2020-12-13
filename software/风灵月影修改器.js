'use strict';
let info;

module.exports = {
  url: 'https://bbs.3dmgame.com/thread-6045971-1-1.html',
  version: async (res, $, fns, choice) => {
    const res1 = await fns.req({
      method: 'POST',
      uri: 'https://dl.fucnm.com/softapi/getsoftver',
      body: JSON.stringify({
        uuid: '02b43ddc-1937-4dc0-8946-fb48736f6cf1'
      })
    });
    info = res1.json.data;
    return res1.json.data.version;
  },
  download: () => info.down_url,
  install: 'install_nsis'
};
