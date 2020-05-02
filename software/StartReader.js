'use strict';

let info;
const data = {
  url: 'https://www.startreader.com/downloads.html',
  version: async (res, $, fns, choice) => {
    const res1 = await fns.req({
      uri: 'https://www.startreader.com/app/getByTerminal',
      method: 'POST',
      form: {
        terminal: 'WINDOWS'
      }
    });
    info = res1.json.data[0];
    return info.version;
  },
  changelog: (res, $) => [info.versionDesc, true],
  download: (res, $) => `http://res.sdkreader.com/${info.md5FileName}`,
  install: 'install_inno_type'
};
module.exports = data;
