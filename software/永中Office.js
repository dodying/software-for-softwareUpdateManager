'use strict';

let info;

module.exports = {
  url: 'https://www.yozosoft.com/portal-api/system/fileManager/getJsonDataByType?type=PRODUCT',
  version: async (res, $, fns, choice = /windows_\d+_personal_edition/) => {
    info = Object.values(res.json.data).find(i => i.code.match(choice));
    return info.newName;
  },
  download: () => info.filePath,
  install: 'install',
  other: {
    trial: {
      commercial: 3,
      versionChoice: /windows_\d+_trial/
    }
  }
};
