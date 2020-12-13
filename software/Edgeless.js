'use strict';

let info;

module.exports = {
  url: 'https://home.edgeless.top/fodi/',
  version: async (res, $, fns, choice) => {
    const uri1 = res.body.match(/SCF_GATEWAY: "(.*?)",/)[1];
    const res1 = await fns.req(uri1);
    info = res1.json.files.find(i => i.name.match(/启动盘制作工具_(.*?).7z/));
    return info.name.match(/启动盘制作工具_(.*?).7z/)[1];
  },
  download: () => info.url,
  install: 'install'
};
