'use strict';

const data = {
  url: 'https://mirrors.ustc.edu.cn/kde/stable/umbrello/latest/win64/',
  version: ['a[href$="portable.7z"]', 'text', /mingw64-(.*?)-portable.7z/],
  download: 'a[href$="portable.7z"]',
  install: 'install'
};
module.exports = data;
