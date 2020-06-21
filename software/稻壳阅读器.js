'use strict';

const data = {
  url: 'https://www.daokeyuedu.com/index.php?act=download',
  version: ['.text-rt-s', 'text', /版本：([\d.]+)/],
  download: 'http://www.daokeyuedu.com/docbox/稻壳阅读器安装程序.exe'
};
module.exports = data;
