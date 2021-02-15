'use strict';

module.exports = {
  type: 'software-list',
  list: {
    YeApkBatchRename: {
      site: {
        BitBucket: 'https://api.bitbucket.org/2.0/repositories/AsionTang/67.yeapkbatchrename/downloads'
      },
      versionChoice: /YeApkBatchRename.(.*?).7z/,
      install: 'install'
    },
    YeM3U8Downloader: {
      site: {
        GitHub: 'https://github.com/asiontang/93.Ye.M3U8.Downloader/releases'
      },
      versionChoice: '.7z',
      install: 'install'
    }
  }
};
