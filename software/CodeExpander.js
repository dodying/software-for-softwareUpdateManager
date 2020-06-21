'use strict';

module.exports = {
  site: {
    GitHub: 'https://github.com/oncework/codeexpander/releases/latest'
  },
  versionChoice: ['.exe', 'Setup.(.*?).exe', false, i => i.assets.map(j => j.name).join('\n')],
  install: 'install'
};
