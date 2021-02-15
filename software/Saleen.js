'use strict';

module.exports = {
  type: 'software-list',
  list: {
    FilePro: {
      commercial: 1,
      url: 'https://www.saleensoftware.com/FilePro',
      version: ['.TdVersionBox1+td', 'text', /(.*)/],
      changelog: {
        selector: 'tr:contains("Change Log")+tr',
        attr: 'text',
        match: /^build [\d.]+/,
        split: true
      },
      download: async (res, $, fns, choice) => {
        const res1 = await fns.reqHEAD('http://download.saleensoftware.com/TreeMapFs_setup_exe');
        return res1.request.uri.href;
      }
    },
    'Folder Sync': {
      commercial: 1,
      url: 'https://www.saleensoftware.com/FolderSync',
      version: ['.TdVersionBox1+td', 'text', /(.*)/],
      changelog: {
        selector: 'tr:contains("Change Log")+tr',
        attr: 'text',
        match: /^build [\d.]+/,
        split: true
      },
      download: async (res, $, fns, choice) => {
        const res1 = await fns.reqHEAD('http://download.saleensoftware.com/FolderSync_setup_exe');
        return res1.request.uri.href;
      }
    },
    KeyboardExt: {
      commercial: 1,
      url: 'https://www.saleensoftware.com/KeyboardExt',
      version: ['.TdVersionBox1+td', 'text', /(.*)/],
      changelog: {
        selector: 'tr:contains("Change Log")+tr',
        attr: 'text',
        match: /^build [\d.]+/,
        split: true
      },
      download: async (res, $, fns, choice) => {
        const res1 = await fns.reqHEAD('http://download.saleensoftware.com/KeyboardExt_setup_zip');
        return res1.request.uri.href;
      }
    },
    ScanFs: {
      commercial: 1,
      url: 'https://www.saleensoftware.com/ScanFs',
      version: ['.TdVersionBox1+td', 'text', /(.*)/],
      changelog: {
        selector: 'tr:contains("Change Log")+tr',
        attr: 'text',
        match: /^build [\d.]+/,
        split: true
      },
      download: async (res, $, fns, choice) => {
        const res1 = await fns.reqHEAD('http://download.saleensoftware.com/ScanFs_setup_exe');
        return res1.request.uri.href;
      }
    },
    'Tasks Manager': {
      commercial: 1,
      url: 'https://www.saleensoftware.com/TasksManager',
      version: ['.TdVersionBox1+td', 'text', /(.*)/],
      changelog: {
        selector: 'tr:contains("Change Log")+tr',
        attr: 'text',
        match: /^build [\d.]+/,
        split: true
      },
      download: async (res, $, fns, choice) => {
        const res1 = await fns.reqHEAD('http://download.saleensoftware.com/tasks_setup_zip');
        return res1.request.uri.href;
      }
    },
    'Video Manager': {
      commercial: 1,
      url: 'https://www.saleensoftware.com/VideoManager',
      version: ['.TdVersionBox1+td', 'text', /(.*)/],
      changelog: {
        selector: 'tr:contains("Change Log")+tr',
        attr: 'text',
        match: /^build [\d.]+/,
        split: true
      },
      download: async (res, $, fns, choice) => {
        const res1 = await fns.reqHEAD('http://download.saleensoftware.com/VideoManager_setup_exe');
        return res1.request.uri.href;
      }
    },
    WebDownloader: {
      commercial: 1,
      url: 'https://www.saleensoftware.com/WebDownloader',
      version: ['.TdVersionBox1+td', 'text', /(.*)/],
      changelog: {
        selector: 'tr:contains("Change Log")+tr',
        attr: 'text',
        match: /^build [\d.]+/,
        split: true
      },
      download: async (res, $, fns, choice) => {
        const res1 = await fns.reqHEAD('http://download.saleensoftware.com/WebDownloaderCef_setup_exe');
        return res1.request.uri.href;
      }
    }
  }
};
