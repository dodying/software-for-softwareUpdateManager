'use strict';

module.exports = {
  type: 'software-list',
  list: {
    DrMemory: {
      site: {
        GitHub: 'https://github.com/DynamoRIO/drmemory/releases/latest'
      },
      versionChoice: /([\d.]+)/,
      install: 'install'
    },
    DynamoRIO: {
      site: {
        GitHub: 'https://github.com/DynamoRIO/dynamorio/releases/latest'
      },
      versionChoice: /([\d.]+)/,
      install: 'install'
    }
  }
};
