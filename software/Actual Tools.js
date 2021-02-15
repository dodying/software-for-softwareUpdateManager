'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Actual File Folders': {
      commercial: 3,
      url: 'https://www.actualtools.com/filefolders/download/',
      version: '.fix1 > div:nth-child(3) > table:nth-child(6) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(5)',
      changelog: {
        url: 'https://www.actualtools.com/filefolders/whatsnew/',
        selector: 'h1~pre',
        attr: 'text',
        match: /^Actual File Folders [\d.]+/,
        split: true
      },
      download: 'https://www.actualtools.com/files/affsetup.exe',
      install: info => {
        info.choice = info.choice || (require('readline-sync').keyInYNStrict('是否支持系统工具 (像 Tablet PC 输入面板)和管理工具(像注册表编辑器, 电脑管理, 等等.)\n请注意, 尽管更加灵活, 此选项将增加您的系统启动时间') ? '2' : '1');
        return info.fns.install.inno.type(info);
      },
      other: {
        admin: { installChoice: '2' },
        noadmin: { installChoice: '1' }
      }
    },
    'Actual Multiple Monitors': {
      commercial: 3,
      url: 'https://www.actualtools.com/multiplemonitors/',
      version: 'h1>b>span>a',
      changelog: {
        url: 'https://www.actualtools.com/multiplemonitors/whatsnew/',
        selector: 'h1~pre',
        attr: 'text',
        match: /^Actual Multiple Monitors [\d.]+/,
        split: true
      },
      download: 'https://www.actualtools.com/files/ammsetup.exe',
      install: info => {
        info.choice = info.choice || (require('readline-sync').keyInYNStrict('是否支持系统工具 (像 Tablet PC 输入面板)和管理工具(像注册表编辑器, 电脑管理, 等等.)\n请注意, 尽管更加灵活, 此选项将增加您的系统启动时间') ? '2' : '1');
        return info.fns.install.inno.type(info);
      },
      other: {
        admin: { installChoice: '2' },
        noadmin: { installChoice: '1' }
      }
    },
    'Actual Title Buttons': {
      commercial: 3,
      url: 'https://www.actualtools.com/titlebuttons/',
      version: 'h1>b>span>a',
      changelog: {
        url: 'https://www.actualtools.com/titlebuttons/whatsnew/',
        selector: 'h1~pre',
        attr: 'text',
        match: /^Actual Title Buttons [\d.]+/,
        split: true
      },
      download: 'https://www.actualtools.com/files/atbsetup.exe',
      install: info => {
        info.choice = info.choice || (require('readline-sync').keyInYNStrict('是否支持系统工具 (像 Tablet PC 输入面板)和管理工具(像注册表编辑器, 电脑管理, 等等.)\n请注意, 尽管更加灵活, 此选项将增加您的系统启动时间') ? '2' : '1');
        return info.fns.install.inno.type(info);
      },
      other: {
        admin: { installChoice: '2' },
        noadmin: { installChoice: '1' }
      }
    },
    'Actual Transparent Window': {
      commercial: 3,
      url: 'https://www.actualtools.com/transparentwindow/',
      version: 'div.header > table:nth-child(6) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > b:nth-child(1)',
      changelog: {
        url: 'https://www.actualtools.com/transparentwindow/whatsnew/',
        selector: 'h1~pre',
        attr: 'text',
        match: /^Actual Transparent Window [\d.]+/,
        split: true
      },
      download: 'https://www.actualtools.com/files/atwsetup.exe',
      install: info => {
        info.choice = info.choice || (require('readline-sync').keyInYNStrict('是否支持系统工具 (像 Tablet PC 输入面板)和管理工具(像注册表编辑器, 电脑管理, 等等.)\n请注意, 尽管更加灵活, 此选项将增加您的系统启动时间') ? '2' : '1');
        return info.fns.install.inno.type(info);
      },
      other: {
        admin: { installChoice: '2' },
        noadmin: { installChoice: '1' }
      }
    },
    'Actual Virtual Desktops': {
      commercial: 3,
      url: 'https://www.actualtools.com/virtualdesktops/',
      version: 'h1>b>span>a',
      changelog: {
        url: 'https://www.actualtools.com/virtualdesktops/whatsnew/',
        selector: 'h1~pre',
        attr: 'text',
        match: /^Actual Virtual Desktops [\d.]+/,
        split: true
      },
      download: 'https://www.actualtools.com/files/avdsetup.exe',
      install: info => {
        info.choice = info.choice || (require('readline-sync').keyInYNStrict('是否支持系统工具 (像 Tablet PC 输入面板)和管理工具(像注册表编辑器, 电脑管理, 等等.)\n请注意, 尽管更加灵活, 此选项将增加您的系统启动时间') ? '2' : '1');
        return info.fns.install.inno.type(info);
      },
      other: {
        admin: { installChoice: '2' },
        noadmin: { installChoice: '1' }
      }
    },
    'Actual Window Guard': {
      commercial: 3,
      url: 'https://www.actualtools.com/windowguard/',
      version: '#content > div.blocks > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(2) > b',
      changelog: {
        url: 'https://www.actualtools.com/windowguard/whatsnew/',
        selector: 'h1~pre',
        attr: 'text',
        match: /^Actual Window Guard [\d.]+/,
        split: true
      },
      download: 'https://www.actualtools.com/files/awgsetup.exe',
      install: info => {
        info.choice = info.choice || (require('readline-sync').keyInYNStrict('是否支持系统工具 (像 Tablet PC 输入面板)和管理工具(像注册表编辑器, 电脑管理, 等等.)\n请注意, 尽管更加灵活, 此选项将增加您的系统启动时间') ? '2' : '1');
        return info.fns.install.inno.type(info);
      },
      other: {
        admin: { installChoice: '2' },
        noadmin: { installChoice: '1' }
      }
    },
    'Actual Window Manager': {
      commercial: 3,
      url: 'https://www.actualtools.com/windowmanager/',
      version: 'h1>b>span>a',
      changelog: {
        url: 'https://www.actualtools.com/windowmanager/whatsnew/',
        selector: 'h1~pre',
        attr: 'text',
        match: /^Actual Window Manager [\d.]+/,
        split: true
      },
      download: 'https://www.actualtools.com/files/aimsetup.exe',
      install: info => {
        info.choice = info.choice || (require('readline-sync').keyInYNStrict('是否支持系统工具 (像 Tablet PC 输入面板)和管理工具(像注册表编辑器, 电脑管理, 等等.)\n请注意, 尽管更加灵活, 此选项将增加您的系统启动时间') ? '2' : '1');
        return info.fns.install.inno.type(info);
      },
      other: {
        admin: { installChoice: '2' },
        noadmin: { installChoice: '1' }
      }
    },
    'Actual Window Menu': {
      commercial: 3,
      url: 'https://www.actualtools.com/windowmenu/',
      version: 'div.header > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > b:nth-child(1)',
      changelog: {
        url: 'https://www.actualtools.com/windowmenu/whatsnew/',
        selector: 'h1~pre',
        attr: 'text',
        match: /^Actual Window Menu [\d.]+/,
        split: true
      },
      download: 'https://www.actualtools.com/files/asmsetup.exe',
      install: info => {
        info.choice = info.choice || (require('readline-sync').keyInYNStrict('是否支持系统工具 (像 Tablet PC 输入面板)和管理工具(像注册表编辑器, 电脑管理, 等等.)\n请注意, 尽管更加灵活, 此选项将增加您的系统启动时间') ? '2' : '1');
        return info.fns.install.inno.type(info);
      },
      other: {
        admin: { installChoice: '2' },
        noadmin: { installChoice: '1' }
      }
    },
    'Actual Window Minimizer': {
      commercial: 3,
      url: 'https://www.actualtools.com/windowminimizer/download/',
      version: '.fix1 > div:nth-child(3) > table:nth-child(6) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(5)',
      changelog: {
        url: 'https://www.actualtools.com/windowminimizer/whatsnew/',
        selector: 'h1~pre',
        attr: 'text',
        match: /^Actual Window Minimizer [\d.]+/,
        split: true
      },
      download: 'https://www.actualtools.com/files/awmsetup.exe',
      install: info => {
        info.choice = info.choice || (require('readline-sync').keyInYNStrict('是否支持系统工具 (像 Tablet PC 输入面板)和管理工具(像注册表编辑器, 电脑管理, 等等.)\n请注意, 尽管更加灵活, 此选项将增加您的系统启动时间') ? '2' : '1');
        return info.fns.install.inno.type(info);
      },
      other: {
        admin: { installChoice: '2' },
        noadmin: { installChoice: '1' }
      }
    },
    'Actual Window Rollup': {
      commercial: 3,
      url: 'https://www.actualtools.com/windowrollup/',
      version: 'div.header > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > b:nth-child(1)',
      changelog: {
        url: 'https://www.actualtools.com/windowrollup/whatsnew/',
        selector: 'h1~pre',
        attr: 'text',
        match: /^Actual Window Rollup [\d.]+/,
        split: true
      },
      download: 'https://www.actualtools.com/files/awrsetup.exe',
      install: info => {
        info.choice = info.choice || (require('readline-sync').keyInYNStrict('是否支持系统工具 (像 Tablet PC 输入面板)和管理工具(像注册表编辑器, 电脑管理, 等等.)\n请注意, 尽管更加灵活, 此选项将增加您的系统启动时间') ? '2' : '1');
        return info.fns.install.inno.type(info);
      },
      other: {
        admin: { installChoice: '2' },
        noadmin: { installChoice: '1' }
      }
    }
  }
};
