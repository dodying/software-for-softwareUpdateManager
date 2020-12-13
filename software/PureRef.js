'use strict';

module.exports = {
  url: 'https://www.pureref.com/download.php',
  version: async (res, $, fns, choice) => {
    const res1 = await fns.req('https://www.pureref.com/buildfinder.php?build=WIN64.exe');
    return res1.body.match(/PureRef-([\d.]+)_x64.exe/)[1];
  },
  download: async (res, $, fns, choice) => {
    const uri1 = $('#paypalDownload~input[name="return"]').attr('value').replace('thankyou.php', 'freedownload.php');
    const res1 = await fns.req(uri1);
    return res1.body.match(/\$\("body"\).append\('<iframe style="display:none;" src="(.*?)"><\/iframe>'\);/)[1];
  },
  install: 'install_nsis'
};
