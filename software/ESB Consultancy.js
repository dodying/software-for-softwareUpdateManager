'use strict';

module.exports = {
  type: 'software-list',
  list: {
    ESBCalc: {
      commercial: 2,
      url: 'https://www.esbconsult.com/esbcalc/esbcalcpro.htm',
      version: 'p:has([href$=".zip"])>strong',
      download: 'https://www.esbconsult.com/esbcalcpro-nosetup.zip',
      install: 'install_zipped_single',
      other: {
        free: {
          commercial: 0,
          url: 'https://www.esbconsult.com/esbcalc/esbcalc.htm',
          download: 'https://www.esbconsult.com/esbcalcport.zip'
        }
      }
    },
    ESBDateCalc: {
      commercial: 2,
      url: 'https://www.esbconsult.com/esbcalc/esbdatecalcpro.htm',
      version: 'p:has([href$=".zip"])>strong',
      download: 'https://www.esbconsult.com/esbdatecalcpro-nosetup.zip',
      install: 'install_zipped_single'
    },
    ESBFinCalc: {
      commercial: 2,
      url: 'https://www.esbconsult.com/esbcalc/esbfincalcpro.htm',
      version: 'p:has([href$=".zip"])>strong',
      download: 'https://www.esbconsult.com/esbfincalcpro-nosetup.zip',
      install: 'install_zipped_single'
    },
    ESBProgCalc: {
      commercial: 2,
      url: 'https://www.esbconsult.com/esbcalc/esbprogcalcpro.htm',
      version: 'p:has([href$=".zip"])>strong',
      download: 'https://www.esbconsult.com/esbprogcalcpro-nosetup.zip',
      install: 'install_zipped_single'
    },
    ESBUnitConv: {
      commercial: 2,
      url: 'https://www.esbconsult.com/esbcalc/esbunitconvpro.htm',
      version: 'p:has([href$=".zip"])>strong',
      download: 'https://www.esbconsult.com/esbunitconvpro-nosetup.zip',
      install: 'install_zipped_single',
      other: {
        free: {
          commercial: 0,
          url: 'https://www.esbconsult.com/esbcalc/esbunitconv.htm',
          download: 'https://www.esbconsult.com/esbunitconvport.zip'
        }
      }
    }
  }
};
