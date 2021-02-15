'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'AutoIt Tools': {
      url: 'https://www.autoitscript.com/site/autoit-tools/',
      version: () => '1.0.0',
      download: 'https://www.autoitscript.com/cgi-bin/getfile.pl?tools/tools.zip',
      install: 'install'
    },
    AutoIt: {
      url: 'https://www.autoitscript.com/site/autoit/downloads/',
      version: '.entry-content table>tbody>tr>td',
      changelog: {
        url: 'https://www.autoitscript.com/autoit3/docs/history.htm',
        selector: 'body',
        attr: 'text',
        match: /^[\d.]+/,
        split: true
      },
      download: 'https://www.autoitscript.com/cgi-bin/getfile.pl?autoit3/autoit-v3.zip',
      install: 'install',
      other: {
        beta: {
          url: 'https://www.autoitscript.com/autoit3/files/beta/autoit/',
          version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
            selector: 'a',
            sort: true,
            match: /autoit-v([\d.]+).zip/
          }),
          download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
            selector: 'a',
            sort: true,
            matchCheck: /autoit-v([\d.]+).zip/
          })
        }
      }
    },
    GImageX: {
      url: 'https://www.autoitconsulting.com/site/software/gimagex/',
      version: '.entry-content table>tbody>tr>td',
      download: 'https://www.autoitconsulting.com/files/gimagex/gimagex.zip',
      install: ['install_zipped_single', 'gimagex_x64.exe']
    },
    'Logoff Screensaver': {
      url: 'https://www.autoitscript.com/site/autoit-tools/logoff-screensaver/',
      version: '.et-box-content',
      download: 'https://www.autoitscript.com/cgi-bin/getfile.pl?tools/LogoffScreensaver.zip',
      install: 'install'
    },
    'OSD Background': {
      url: 'https://www.autoitconsulting.com/site/software/osd-background/',
      version: '.entry-content table>tbody>tr>td',
      download: 'https://www.autoitconsulting.com/files/autoit-osd-background/autoit-osd-background.zip',
      install: 'install'
    },
    'VDI Optimizer': {
      url: 'https://www.autoitscript.com/site/autoit-tools/vdi-optimizer/',
      version: '.et-box-content',
      download: 'https://www.autoitscript.com/cgi-bin/getfile.pl?tools/VDIOptimizer.zip',
      install: 'install_zipped_single'
    },
    'Windows 10 Telemetry Group Policy Pack': {
      url: 'https://www.autoitconsulting.com/site/software/windows-10-telemetry-group-policy-pack/',
      version: '.entry-content table>tbody>tr>td',
      download: 'https://www.autoitconsulting.com/files/autoit-win10-telemetry-gpo/autoit-win10-telemetry-gpo.zip',
      install: 'install'
    }
  }
};
