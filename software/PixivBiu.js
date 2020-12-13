'use strict';

const data = {
  url: 'https://biu.tls.moe/lib/dl.md',
  version: (res) => res.body.match(/^####\s*(.*?)\s/m)[1]
};
module.exports = data;
