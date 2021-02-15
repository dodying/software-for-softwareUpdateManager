'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Assistant: {
      url: 'http://zhushou.xiaomi.com/',
      version: ['#zip_link', 'href', /MiAssistant-(.*?).zip/],
      download: '#zip_link',
      install: ['install_zipped', 'install_inno']
    },
    MiFlashPro: {
      url: 'http://update.miui.com/updates/mi-updateV6.php?v=1.0.0.0&c=4.0&d=miflash_pro&b=X',
      version: (res) => res.json.LatestVersion.version,
      changelog: async (res, $, fns, choice) => {
        const uri1 = res.json.LatestVersion.descriptionUrl;
        const res1 = await fns.req(uri1);
        return [res1.body, true];
      },
      download: (res) => `${res.json.MirrorList[0]}/${res.json.LatestVersion.version}/${res.json.LatestVersion.filename}`,
      install: ['install_zipped', 'install_inno']
    },
    MiFlashUnlock: {
      url: 'http://update.miui.com/updates/mi-updateV6.php?v=1.0.0.0&c=4.0&d=miflash_unlock&b=X',
      version: (res) => res.json.LatestVersion.version,
      changelog: async (res, $, fns, choice) => {
        const uri1 = res.json.LatestVersion.descriptionUrl;
        const res1 = await fns.req(uri1);
        return [res1.body, true];
      },
      download: (res) => `${res.json.MirrorList[0]}/${res.json.LatestVersion.version}/${res.json.LatestVersion.filename}`,
      install: 'install'
    }
  }
};
