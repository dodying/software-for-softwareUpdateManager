'use strict';

module.exports = {
  url: 'https://ruffle-rs.s3-us-west-1.amazonaws.com/?delimiter=/&prefix=builds/windows/', // https://github.com/ruffle-rs/ruffle
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'ListBucketResult>Contents>Key',
    match: 'ruffle_windows_(.*?).zip',
    attr: 'text'
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'ListBucketResult>Contents>Key',
    matchCheck: 'ruffle_windows_(.*?).zip',
    attr: 'text'
  }),
  install: 'install_zipped_single'
};
