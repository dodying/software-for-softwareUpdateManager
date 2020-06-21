'use strict';

module.exports = {
  url: 'http://www.jsdroid.com/doc/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97/readme.md',
  version: (res) => res.body.match(/\[jsdroid(.*?).exe.*?\]\((.*?)\)/)[1],
  download: (res) => res.body.match(/\[jsdroid(.*?).exe.*?\]\((.*?)\)/)[2],
  install: 'install'
};
