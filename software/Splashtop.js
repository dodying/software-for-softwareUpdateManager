'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Splashtop Streamer': {
      commercial: 3,
      url: 'https://www.splashtop.com/wp-content/themes/responsive/downloadx.php?platform=windows',
      version: (res, $) => res.json.url.match(/v([\d.]+)\.exe$/),
      download: (res, $) => res.json.url
    },
    'Splashtop Wired XDisplay': {
      commercial: 3,
      url: 'https://www.splashtop.com/wiredxdisplay',
      version: ['[href$=".exe"]', 'href', /v([\d.]+).exe/],
      download: '[href$=".exe"]'
    },
    Splashtop: {
      commercial: 3,
      url: 'https://www.splashtop.com/wp-content/themes/responsive/downloadx.php?product=stb&platform=windows-client',
      version: (res, $) => res.json.url.match(/v([\d.]+)\.exe$/),
      download: (res, $) => res.json.url,
      other: {
        portable: 'https://www.splashtop.com/wp-content/themes/responsive/downloadx.php?product=stb&platform=windows-client-portable',
        Personal: {
          commercial: 1,
          url: 'https://www.splashtop.com/wp-content/themes/responsive/downloadx.php?product=stp&platform=windows-client'
        }
      }
    }
  }
};
