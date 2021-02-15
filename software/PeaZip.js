'use strict';

module.exports = {
  type: 'software-list',
  list: {
    PeaExtractor: {
      withoutHeader: true,
      url: 'https://www.peazip.org/peaextractor-unace-unrar-unzip.html',
      version: 'a[name="download_rar_extractor"]+a',
      changelog: '[style="margin-left: 40px;"]',
      download: 'a[href$="WIN64.zip"]',
      install: 'install'
    },
    PeaUtils: {
      withoutHeader: true,
      url: 'https://www.peazip.org/peautils-hash-secure-delete.html',
      version: 'a[name="download_hash_utility"]+a',
      changelog: '[style="margin-left: 40px;"]',
      download: 'a[href$="WIN64.zip"]',
      install: 'install_zipped_single'
    },
    PeaZip: {
      site: {
        GitHub: 'https://github.com/giorgiotani/PeaZip/releases/latest'
      },
      versionChoice: 'portable(.*)WIN64.zip',
      install: 'install'
    }
  }
};
