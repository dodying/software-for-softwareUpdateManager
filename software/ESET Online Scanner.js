'use strict';

module.exports = {
  url: 'https://www.eset.com/int/home/online-scanner/?type=13554&tx_esetdownloads_ajax%5Bproduct%5D=51&tx_esetdownloads_ajax%5Bbeta%5D=0&tx_esetdownloads_ajax%5Bpage_id%5D=128&tx_esetdownloads_ajax%5Bplugin_id%5D=2285910&tx_esetdownloads_ajax%5Bproduct%5D=51&tx_esetdownloads_ajax%5Bbeta%5D=0&tx_esetdownloads_ajax%5Bpage_id%5D=128&tx_esetdownloads_ajax%5Bplugin_id%5D=2285910',
  version: (res) => Object.values(res.json.files.installer)[0].full_version,
  download: (res) => Object.values(res.json.files.installer)[0].url,
  install: 'install_single'
};
