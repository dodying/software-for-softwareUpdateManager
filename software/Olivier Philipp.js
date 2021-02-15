'use strict';

module.exports = {
  type: 'software-list',
  list: {
    mColorPix: {
      url: 'http://ophilipp.free.fr/op_ctl.htm',
      version: 'body > table:nth-child(5) > tbody > tr > td > table > tbody > tr:nth-child(4) > td > p > font > strong',
      changelog: 'body > table:nth-child(5) > tbody > tr > td > table > tbody > tr:nth-child(6) > td > p',
      download: 'http://ophilipp.free.fr/soft/mColorPix.zip',
      install: 'install_zipped_single'
    },
    'MOX Renamer': {
      url: 'http://ophilipp.free.fr/op_ctl.htm',
      version: 'body > table:nth-child(8) > tbody > tr > td > table > tbody > tr:nth-child(4) > td > p > font > strong',
      changelog: 'body > table:nth-child(8) > tbody > tr > td > table > tbody > tr:nth-child(6) > td > p',
      download: 'http://ophilipp.free.fr/soft/MOX.rar',
      install: 'install_zipped_single'
    },
    mTAIL: {
      url: 'http://ophilipp.free.fr/op_tail.htm',
      version: 'body > div:nth-child(4) > center > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > p:nth-child(1) > font > strong',
      changelog: 'body > div:nth-child(4) > center > table > tbody > tr > td > table > tbody > tr:nth-child(6) > td > p:nth-child(2)',
      download: 'http://ophilipp.free.fr/soft/mTail.zip',
      install: 'install_zipped_single'
    },
    UnitMon: {
      url: 'http://ophilipp.free.fr/op_ctl.htm',
      version: 'body > table:nth-child(11) > tbody > tr > td > table > tbody > tr:nth-child(4) > td > p > font > strong',
      changelog: 'body > table:nth-child(11) > tbody > tr > td > table > tbody > tr:nth-child(6) > td > p',
      download: 'http://ophilipp.free.fr/soft/UnitMon.zip',
      install: 'install_zipped_single'
    }
  }
};
