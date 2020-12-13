'use strict';

let url;

const data = {
  commercial: 2,
  url: 'https://www.notion.so/desktop',
  version: async (res, $, fns) => {
    const res1 = await fns.req({
      method: 'POST',
      uri: 'https://www.notion.so/api/v3/getDesktopDownloadUrl',
      headers: {
        'Content-Type': 'application/json'
      },
      body: '{"platform":"windows"}'
    });
    url = res1.json.url;
    return url.match(/%20(\d+[\d.]+\d+).exe/)[1];
  },
  download: (res, $) => url,
  install: ['install_zipped', 'install', 'app-64.7z']
};
module.exports = data;
