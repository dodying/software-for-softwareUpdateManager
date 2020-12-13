'use strict';

const data = {
  url: 'https://www.enterprisedb.com/downloads/postgres-postgresql-downloads',
  version: '.table-responsive tbody>tr>td:nth-child(1)',
  changelog: ['https://www.postgresql.org/docs/release/{version}/', '#docContent'],
  download: 'https://get.enterprisedb.com/postgresql/postgresql-{version}-1-windows-x64-binaries.zip',
  install: 'install',
  other: {
    installer: {
      download: 'https://get.enterprisedb.com/postgresql/postgresql-{version}-1-windows-x64.exe',
      install: null
    },
    12: {
      version: '.table-responsive tbody>tr:contains("12.")>td:nth-child(1)'
    },
    '12-installer': {
      version: '.table-responsive tbody>tr:contains("12.")>td:nth-child(1)',
      download: 'https://get.enterprisedb.com/postgresql/postgresql-{version}-1-windows-x64.exe'
    },
    11: {
      version: '.table-responsive tbody>tr:contains("11.")>td:nth-child(1)'
    },
    '11-installer': {
      version: '.table-responsive tbody>tr:contains("11.")>td:nth-child(1)',
      download: 'https://get.enterprisedb.com/postgresql/postgresql-{version}-1-windows-x64.exe'
    },
    10: {
      version: '.table-responsive tbody>tr:contains("10.")>td:nth-child(1)'
    },
    '10-installer': {
      version: '.table-responsive tbody>tr:contains("10.")>td:nth-child(1)',
      download: 'https://get.enterprisedb.com/postgresql/postgresql-{version}-1-windows-x64.exe'
    },
    9.6: {
      version: '.table-responsive tbody>tr:contains("9.6.")>td:nth-child(1)'
    },
    '9.6-installer': {
      version: '.table-responsive tbody>tr:contains("9.6.")>td:nth-child(1)',
      download: 'https://get.enterprisedb.com/postgresql/postgresql-{version}-1-windows-x64.exe'
    },
    9.5: {
      version: '.table-responsive tbody>tr:contains("9.5.")>td:nth-child(1)'
    },
    '9.5-installer': {
      version: '.table-responsive tbody>tr:contains("9.5.")>td:nth-child(1)',
      download: 'https://get.enterprisedb.com/postgresql/postgresql-{version}-1-windows-x64.exe'
    },
    9.4: {
      version: '.table-responsive tbody>tr:contains("9.4.")>td:nth-child(1)'
    },
    '9.4-installer': {
      version: '.table-responsive tbody>tr:contains("9.4.")>td:nth-child(1)',
      download: 'https://get.enterprisedb.com/postgresql/postgresql-{version}-1-windows-x64.exe'
    },
    9.3: {
      version: '.table-responsive tbody>tr:contains("9.3.")>td:nth-child(1)'
    },
    '9.3-installer': {
      version: '.table-responsive tbody>tr:contains("9.3.")>td:nth-child(1)',
      download: 'https://get.enterprisedb.com/postgresql/postgresql-{version}-1-windows-x64.exe'
    }
  }
};
module.exports = data;
