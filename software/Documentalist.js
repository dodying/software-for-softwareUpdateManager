'use strict';

module.exports = {
  url: 'https://kjkpubsf.sfo2.digitaloceanspaces.com/software/documentalist/rel/latestver.js',
  version: (res, $) => res.body.match(/"Ver": "([\d.]+)"/)[1],
  download: (res, $) => res.body.match(/"URL": "(.*?)"/)[1],
  install: 'install'
};
