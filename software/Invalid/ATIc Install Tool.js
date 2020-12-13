'use strict';

const data = {
  url: 'https://bluesky-soft.com/en/ATIcInstallTool.html',
  version: 'b:contains("Changes")+div',
  changelog: 'b:contains("Changes")+div>ul',
  download: ['[type="button"][onclick*="Zip"]', 'onclick', /location.href='(.*?)'/],
  install: 'install'
};
module.exports = data;
