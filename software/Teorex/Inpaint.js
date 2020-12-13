'use strict';

const data = {
  commercial: 3,
  url: 'https://www.theinpaint.com/download.html',
  version: 'h3:contains("Changelog")+p',
  changelog: 'h3:contains("Changelog")+p+ul',
  download: 'https://www.theinpaint.com/download/InpaintSetup.exe',
  install: 'install_inno_single'
};
module.exports = data;
