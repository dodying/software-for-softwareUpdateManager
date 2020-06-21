'use strict';

const data = {
  url: 'http://update.miui.com/updates/mi-updateV6.php?v=1.0.0.0&c=4.0&d=miflash_pro&b=X',
  version: (res) => res.json.LatestVersion.version,
  changelog: async (res, $, fns, choice) => {
    const uri1 = res.json.LatestVersion.descriptionUrl;
    const res1 = await fns.req(uri1);
    return [res1.body, true];
  },
  download: (res) => `${res.json.MirrorList[0]}/${res.json.LatestVersion.version}/${res.json.LatestVersion.filename}`,
  install: ['install_zipped', 'install_inno']
};
module.exports = data;
