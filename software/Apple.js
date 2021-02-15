'use strict';

module.exports = {
  type: 'software-list',
  list: {
    AppleApplicationSupport: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/IPOD-TOOLS/Other-IPOD-tools-Updates/iTunes.shtml'
      },
      download: 'https://www.apple.com/itunes/download/win64',
      fixedPath: '%CommonProgramFiles%\\Apple\\Apple Application Support\\AppleVersions.dll',
      install: info => {
        return info.fns.install.zipped(info, async (from, to) => {
          const path = require('path');

          const temp = path.resolve(info.fns.dirname, 'unzip');
          const list = info.fns.walk(temp);
          const toInstall = ['AppleApplicationSupport.msi', 'AppleApplicationSupport64.msi', 'AppleMobileDeviceSupport64.msi'];
          for (const i of list) {
            const name = path.basename(i);
            if (toInstall.includes(name)) {
              info.output = i;
              const installed = await info.fns.install.msi.cli(info);
              if (!installed) return false;
            }
          }
          return true;
        });
      }
    },
    Bonjour: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/IPOD-TOOLS/Other-IPOD-tools-Updates/iTunes.shtml'
      },
      download: 'https://www.apple.com/itunes/download/win64',
      fixedPath: '%ProgramFiles%\\Bonjour\\mdnsNSP.dll',
      install: info => {
        return info.fns.install.zipped(info, async (from, to) => {
          const path = require('path');

          const temp = path.resolve(info.fns.dirname, 'unzip');
          const list = info.fns.walk(temp);
          const toInstall = ['Bonjour64.msi'];
          for (const i of list) {
            const name = path.basename(i);
            if (toInstall.includes(name)) {
              info.output = i;
              const installed = await info.fns.install.msi.cli(info);
              if (!installed) return false;
            }
          }
          return true;
        });
      }
    },
    iTunes: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/IPOD-TOOLS/Other-IPOD-tools-Updates/iTunes.shtml'
      },
      download: 'https://www.apple.com/itunes/download/win64',
      install: ['install_zipped', 'install_msi', 'iTunes64.msi', null, 'iTunes.exe'],
      other: {
        appstore: {
          url: 'https://www.apple.com.cn/cn/itunes/',
          version: () => '12.6.3.6',
          download: 'https://secure-appldnld.apple.com/itunes12/091-33626-20170922-F51D3530-A003-11E7-8324-03D19A97A551/iTunes64Setup.exe'
        }
      }
    }
  }
};
