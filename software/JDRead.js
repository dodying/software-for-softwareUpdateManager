'use strict';

const data = {
  url: 'https://jdread-api.jd.com/jdread/api/version?app=pc&os=windows',
  version: (res, $) => res.json.data.version_no,
  changelog: (res, $) => res.json.data.info,
  download: (res, $) => res.json.data.url,
  install: 'install'
};
module.exports = data;
