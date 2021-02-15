'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Adapter: {
      url: 'https://macroplant.com/adapter',
      version: ['.btn-primary[ga*="Download Adapter (PC)"]', 'ga', /Version ([\d.]+)/],
      download: async (res, $, fns, choice) => {
        const uri1 = $('.btn-primary[ga*="Download Adapter (PC)"]').eq(0).attr('href');
        const res1 = await fns.reqHEAD(uri1);
        return res1.request.uri.href;
      },
      install: 'install_inno'
    },
    'Dupe Away': {
      commercial: 3,
      url: 'https://macroplant.com/dupeaway',
      version: ['.btn-primary[ga*="Download Dupe Away (PC)"]', 'ga', /Version ([\d.]+)/],
      download: async (res, $, fns, choice) => {
        const uri1 = $('.btn-primary[ga*="Download Dupe Away (PC)"]').eq(0).attr('href');
        const res1 = await fns.reqHEAD(uri1);
        return res1.request.uri.href;
      },
      install: 'install_inno'
    },
    iExplorer: {
      commercial: 3,
      url: 'https://macroplant.com/iexplorer',
      version: ['.btn-primary[ga*="Download iExplorer (PC)"]', 'ga', /Version ([\d.]+)/],
      download: 'https://iexplorer-windows.macroplant.com/iExplorerSetup.exe'
    },
    Sharepod: {
      commercial: 3,
      url: 'https://getsharepod.com/',
      version: ['.btn-primary[ga*="Download Sharepod (PC)"]', 'ga', /Version ([\d.]+)/],
      download: async (res, $, fns, choice) => {
        const uri1 = $('.btn-primary[ga*="Download Sharepod (PC)"]').eq(0).attr('href');
        const res1 = await fns.reqHEAD(uri1);
        return res1.request.uri.href;
      },
      install: 'install_inno'
    }
  }
};
