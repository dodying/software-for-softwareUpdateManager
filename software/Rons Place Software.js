'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'License Tool': {
      url: 'https://www.ronsplace.eu/Products/LicenseTool/History',
      version: '.col-sm-8>table>tbody>tr',
      changelog: {
        selector: '.col-sm-8>table',
        attr: 'text',
        match: /Version \(?[\d.]+/,
        split: true
      },
      download: 'https://www.ronsplace.eu/ContentProduct/UTIL-LIC/Install.zip',
      install: 'install'
    },
    'Rons CSV Editor': {
      url: 'https://www.ronsplace.eu/Products/RonsEditor/History',
      version: '.col-sm-8>table>tbody>tr',
      changelog: {
        selector: '.col-sm-8>table',
        attr: 'text',
        match: /Version \(?[\d.]+/,
        split: true
      },
      download: 'https://www.ronsplace.eu/ContentProduct/EDITR/Setup.exe',
      install: 'install_inno'
    },
    'Rons Data Cleanser': {
      url: 'https://www.ronsplace.eu/Products/RonsDataCleanser/History',
      version: '.col-sm-8>table>tbody>tr',
      changelog: {
        selector: '.col-sm-8>table',
        attr: 'text',
        match: /Version \(?[\d.]+/,
        split: true
      },
      download: 'https://www.ronsplace.eu/ContentProduct/DATA-CLNR/Setup.exe',
      install: 'install_inno'
    },
    'Rons HTML Cleaner': {
      url: 'https://www.ronsplace.eu/Products/RonsHTMLCleaner/History',
      version: '.col-sm-8>table>tbody>tr',
      changelog: {
        selector: '.col-sm-8>table',
        attr: 'text',
        match: /Version \(?[\d.]+/,
        split: true
      },
      download: 'https://www.ronsplace.eu/ContentProduct/HTML-CLNR/Setup.exe',
      install: 'install_inno'
    },
    'Rons Renamer': {
      url: 'https://www.ronsplace.eu/Products/RonsRenamer/History',
      version: '.col-sm-8>table>tbody>tr',
      changelog: {
        selector: '.col-sm-8>table',
        attr: 'text',
        match: /Version \(?[\d.]+/,
        split: true
      },
      download: 'https://www.ronsplace.eu/ContentProduct/RENAM/Setup.exe',
      install: 'install_inno'
    },
    'Rons WebLynx': {
      url: 'https://www.ronsplace.eu/Products/RonsWebLynx/History',
      version: '.col-sm-8>table>tbody>tr',
      changelog: {
        selector: '.col-sm-8>table',
        attr: 'text',
        match: /Version \(?[\d.]+/,
        split: true
      },
      download: 'https://www.ronsplace.eu/ContentProduct/LINKR/Setup.exe',
      install: 'install_inno'
    },
    'VisualFiles Script Editor': {
      url: 'https://www.ronsplace.eu/Products/VisualFilesScriptEditor/History',
      version: '.col-sm-8>table>tbody>tr',
      changelog: {
        selector: '.col-sm-8>table',
        attr: 'text',
        match: /Version \(?[\d.]+/,
        split: true
      },
      download: 'https://www.ronsplace.eu/ContentProduct/VF-SCPTED/Setup.exe',
      install: 'install_inno'
    }
  }
};
