'use strict';

const data = {
  commercial: 3,
  url: 'https://www.splashtop.com/wp-content/themes/responsive/downloadx.php?platform=windows',
  version: (res, $) => res.json.url.match(/v([\d.]+)\.exe$/),
  download: (res, $) => res.json.url
};
module.exports = data;
