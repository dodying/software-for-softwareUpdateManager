'use strict';

module.exports = {
  url: 'https://www.microsoft.com/en-us/download/100607',
  version: '#refineDrawer1 .header:contains("Version")+p',
  download: async (res, $, fns, choice) => {
    const uri1 = res.body.match(/\$\("a.download-button"\).attr\("href","(.*?)"\)/)[1];
    const res1 = await fns.req(uri1);
    return res1.body.match(/downloadData=\{base_0:\{url:"(.*?)"/)[1];
  }
};
