'use strict';

const data = {
  url: 'https://remote-config.gog.com/components/webinstaller?component_version=2.0.0',
  version: (res, $) => res.json.content.windows.version,
  download: (res, $) => res.json.content.windows.downloadLink,
  install: 'install_inno_cli',
  other: {
    1: {
      url: 'https://remote-config.gog.com/components/webinstaller?component_version=1.0.0'
    }
  }
};
module.exports = data;
