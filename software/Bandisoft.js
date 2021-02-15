'use strict';

const readlineSync = require('readline-sync');
const fs = require('fs');
const cp = require('child_process');
const path = require('path');
let shell, portable, regDll;

module.exports = {
  type: 'software-list',
  list: {
    Bandicam: {
      commercial: 2,
      url: 'https://www.bandicam.com/downloads/',
      version: '.col-sm-push-5>ul>li:nth-child(3)',
      changelog: ['https://www.bandicam.com/downloads/version_history/', '.container>ul'],
      download: 'https://dl.bandicam.com/bdcamsetup.exe',
      install: 'install_nsis'
    },
    Bandicut: {
      commercial: 2,
      url: 'https://www.bandicam.com/bandicut-video-cutter/download/',
      version: '.keyword[href$="/ing/"]',
      changelog: ['https://www.bandicam.com/bandicut-video-cutter/history/', '.container>ul'],
      download: 'https://dl.bandicam.com/bandicut/bandicut-setup.exe',
      install: 'install_nsis',
      other: {
        beta: {
          version: '[href$="/dl.php?beta"]',
          changelog: null,
          download: 'https://dl.bandicam.com/bandicut/bandicut-setup-beta.exe'
        },
        old: {
          version: '.keyword[href$="/dl.php?old"]',
          changelog: null,
          download: 'https://dl.bandicam.com/bandicut/bandicut-setup-old.exe'
        }
      }
    },
    Bandizip: {
      commercial: 2,
      url: 'https://www.bandisoft.com/bandizip/history/',
      version: '.content h2',
      changelog: '.content ul',
      download: 'https://dl.bandisoft.com/bandizip.std/BANDIZIP-SETUP-STD-ALL.EXE',
      install: 'install',
      beforeInstall: info => {
        if (info.choice) {
          [shell] = info.choice;
        } else {
          shell = readlineSync.keyInYNStrict('Do you use context menu in Windows Explorer?');
          portable = shell ? false : readlineSync.keyInYNStrict('Make it portable?');
        }
        regDll = `${info.parentPath}\\data\\RegDllx64.exe`; // old-version is regdll64.exe; new version support arm64

        if (fs.existsSync(regDll) && shell) cp.execSync(`${regDll} /calldll "${info.parentPath}\\bdzshlx64.dll" UnregSvr`);

        try {
          if (fs.existsSync(`${info.parentPath}\\bdzshlx64.dll`)) fs.renameSync(`${info.parentPath}\\bdzshlx64.dll`, `${info.parentPath}\\bdzshlx64.dll.bak`);
        } catch (error) {
          console.error('Error:\tPlease install Bandizip after Restart');
          return false;
        }
      },
      afterInstall: info => {
        if (shell) cp.execSync(`${regDll} /calldll "${info.parentPath}\\bdzshlx64.dll" RegSvr`);
        if (portable) {
          const configFile = path.resolve(info.parentPath, 'config.ini');
          let config = fs.readFileSync(configFile, 'utf-8');
          config = config.replace(/(is_portable\s+=\s+)0/, '$11');
          fs.writeFileSync(configFile, config);
        }
      },
      other: {
        shell: { installChoice: [true, false] },
        portable: { installChoice: [false, true] },
        noshell: { installChoice: [false, false] },
        old: {
          commercial: 0,
          url: 'https://www.bandisoft.com/bandizip/',
          version: '[href*="/old/"]',
          changelog: null,
          download: 'https://www.bandisoft.com/bandizip/dl.php?old-ca',
          beforeInstall: null,
          afterInstall: null
        },
        beta: {
          url: 'https://www.bandisoft.com/bandizip/beta/',
          version: '[href="/bandizip/dl.php?beta"]',
          download: 'https://www.bandisoft.com/bandizip/dl.php?beta'
        }
      }
    },
    Honeycam: {
      commercial: 2,
      url: 'https://www.bandisoft.com/honeycam/history/',
      version: '.content h2',
      changelog: '.content ul',
      download: 'https://dl.bandisoft.com/honeycam/HONEYCAM-SETUP-ALL.EXE',
      install: 'install',
      other: {
        beta: {
          url: 'https://www.bandisoft.com/honeycam/beta/',
          download: 'https://www.bandisoft.com/honeycam/dl.php?beta'
        }
      }
    },
    Honeyview: {
      url: 'https://www.bandisoft.com/honeyview/history/',
      version: '.content h2',
      changelog: '.content ul',
      download: 'https://dl.bandisoft.com/honeyview/HONEYVIEW-SETUP.EXE',
      install: 'install_nsis',
      beforeInstall: info => {
        if (info.choice) {
          [shell, portable] = info.choice;
        } else {
          shell = readlineSync.keyInYNStrict('Do you use context menu in Windows Explorer?');
          portable = shell ? false : readlineSync.keyInYNStrict('Make it portable?');
        }

        if (shell) cp.execSync(`regsvr32 /u /s "${info.parentPath}\\HVShell64.dll"`);
      },
      afterInstall: info => {
        if (shell) cp.execSync(`regsvr32 /s "${info.parentPath}\\HVShell64.dll"`);
        if (portable) {
          const configFile = path.resolve(info.parentPath, 'config.ini');
          let config = fs.readFileSync(configFile, 'utf-8');
          config = config.replace(/(is_portable\s+=\s+)0/, '$11');
          fs.writeFileSync(configFile, config);
        }
      },
      other: {
        shell: { installChoice: [true, false] },
        portable: { installChoice: [false, true] },
        noshell: { installChoice: [false, false] }
      }
    }
  }
};
