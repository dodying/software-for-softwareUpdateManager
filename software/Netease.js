'use strict';

let info;
const getInfo = async (res, $, fns, choice) => {
  if (info) return info;
  const uri1 = $('.btn_log_mnq').eq(0).attr('href');
  const res1 = await fns.req(uri1);
  const $1 = fns.cheerio.load(res1.body);
  const downloaderVersion = $1('.artText>p').text().match(/版本：(\d+[\d.]+\d+)/)[1];
  const res2 = await fns.req({
    method: 'POST',
    uri: 'https://mumu.nie.netease.com/api/download',
    form: {
      downloader_version: downloaderVersion,
      machine: '%7B%7D'
    }
  });
  info = res2.json.data;
  return info;
};

module.exports = {
  type: 'software-list',
  list: {
    CloudMusic: {
      site: {
        download: 'https://music.163.com/download'
      },
      versionChoice: ['https://music.163.com/api/pc/download/latest', /cloudmusicsetup([\d.]+).exe/],
      install: 'install_nsis'
    },
    MailMaster: {
      site: {
        'Tencent SoftMgr': 'https://pc.qq.com/detail/14/detail_22814.html'
      }
    },
    MuMu: {
      url: 'https://mumu.163.com/',
      version: async (res, $, fns, choice) => {
        const info = await getInfo(res, $, fns, choice);
        return info.version;
      },
      download: () => info.mumu.link,
      install: info => {
        const path = require('path');
        const fse = require('fs-extra');

        // let iPathArr = iPath.split(/[\\/]+/).map(i => i)
        // iPathArr.splice(-1)
        // let parentPath
        // while (['bin', 'EmulatorShell', 'Hypervisor'].includes(iPathArr.slice(-1)[0])) {
        //   iPathArr.splice(-1)
        // }
        // parentPath = iPathArr.join('\\')

        const tmpNumber = Math.random().toString();
        const tmpFolder = path.resolve(info.fns.dirname, './unzip/', tmpNumber);
        fse.mkdirSync(tmpFolder);

        const installed = info.fns.unzip(info.output, tmpFolder);
        if (!installed) return false;

        const otherFilesFolder = path.resolve(tmpFolder, 'temp');
        const otherFiles = fse.readdirSync(otherFilesFolder).map(i => path.resolve(otherFilesFolder, i)).filter(i => fse.statSync(i).isFile());
        for (const file of otherFiles) {
          const filename = path.parse(file).base;
          if (path.extname(file) === '.zip') {
            if (filename === 'Hypervisor.zip') {
              const installed = info.fns.unzip(file, otherFilesFolder);
              if (!installed) return false;
              fse.copySync(path.resolve(otherFilesFolder, 'hypervisor\\x64'), tmpFolder);
            } else {
              const installed = info.fns.unzip(file, tmpFolder);
              if (!installed) return false;
            }
          } else {
            const fileNew = path.join(tmpFolder, filename);
            fse.copySync(file, fileNew);
          }
        }
        info.fns.copy(tmpFolder, info.parentPath, [
          /^7z\d+/g,
          'getCPUFeature.exe', 'regsvr32.exe', 'regsvr64.exe', 'vm_updater.zip', 'dpinst.exe',
          '^temp'
        ]);
        return true;
      },
      other: {
        hypervisor: {
          version: async (res, $, fns, choice) => {
            const info = await getInfo(res, $, fns, choice);
            return info.hypervisor.link.match(/nemu-hypervisor-([\d.]+)-x86/)[1];
          },
          download: () => info.hypervisor.link
        }
      }
    },
    UU: {
      url: 'https://uu.163.com/baike/js/dl.js',
      version: async (res, $, fns, choice) => res.body.match(/'standbyDlUrl': '(.*?)'/)[1].match(/UU-(.*?).exe/)[1],
      download: async (res, $, fns, choice) => res.body.match(/'standbyDlUrl': '(.*?)'/)[1],
      install: 'install'
    },
    YoudaoDict: {
      site: {
        'Tencent SoftMgr': 'https://pc.qq.com/detail/2/detail_1202.html'
      },
      install: ['install_zipped', 'install', 'dict.7z']
    },
    YoudaoYNote: {
      url: 'https://note.youdao.com/update/updateConfig.json',
      version: (res) => res.json.PC.version,
      download: 'http://download.ydstatic.com/notewebsite/downloads/YNote.exe',
      install: 'install_nsis'
    }
  }
};
