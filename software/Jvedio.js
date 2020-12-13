'use strict';

module.exports = {
  url: 'https://hitchao.gitee.io/jvedioupdate/Version', // https://hitchao.gitee.io/jvediowebpage/download.html
  version: (res, $) => res.body.split(/[\n]/)[0]
};
// https://hitchao.gitee.io/jvedioupdate/list
// http://hitchao.gitee.io/jvedioupdate/File/Jvedio.exe
