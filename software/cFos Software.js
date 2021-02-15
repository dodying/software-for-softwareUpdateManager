'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'cFos Broadband Connect': {
      commercial: 3,
      url: 'https://www.cfos.de/en/download/download.htm',
      version: '#cfosbc_release_x86_version',
      changelog: {
        url: 'https://www.cfos.de/en/broadband-connect/whats-new.txt',
        match: /^cFos BC [\d.]+/,
        split: true
      },
      download: '.cfosbc_release_x64_link'
    },
    'cFos IPv6 Link': {
      commercial: 3,
      url: 'https://www.cfos.de/en/download/download.htm',
      version: '#cfos6link_release_x86_version',
      changelog: {
        url: 'https://www.cfos.de/en/cfos-ipv6-link/whats-new.txt',
        match: /^cfos6link [\d.]+/,
        split: true
      },
      download: '.cfos6link_release_x64_link'
    },
    'cFos Notifier': {
      url: 'https://www.cfos.de/en/cfos-notifier/whats-new.txt',
      version: ['body', 'text', /\ncFos Notifier ([\d.]+)/],
      changelog: {
        match: /^cFos Notifier [\d.]+/,
        split: true
      },
      download: 'https://www.cfos.de/files/notify.msi',
      install: ['install_msi', null, 'notify.exe']
    },
    'cFos Outlook DAV': {
      commercial: 3,
      url: 'https://www.cfos.de/en/download/download.htm',
      version: 'h2:contains("cFos Outlook DAV")',
      changelog: {
        url: 'https://www.cfos.de/en/cfos-outlook-dav/whats-new.txt',
        match: /^cFos Outlook DAV v[\d.]+/,
        split: true
      },
      download: (res, $) => 'https://www.cfos.de' + $('[title="Download cFos Outlook DAV"]').eq(0).attr('href').match(/\?file=(.*)$/)[1]
    },
    'cFos Personal Net': {
      commercial: 3,
      url: 'https://www.cfos.de/en/download/download.htm',
      version: '#cfospnet_release_x86_version',
      changelog: {
        url: 'https://www.cfos.de/en/cfos-personal-net/whats-new.txt',
        match: /^cFos Personal Net [\d.]+/,
        split: true
      },
      download: '.cfospnet_release_x86_link'
    },
    cFos: {
      commercial: 3,
      url: 'https://www.cfos.de/en/download/download.htm',
      version: '#cfos_release_x86_version',
      changelog: {
        url: 'https://www.cfos.de/en/cfos-professional/whats-new.txt',
        match: /^cFos [\d.]+/,
        split: true
      },
      download: '.cfos_release_x64_link'
    },
    cFosICS: {
      url: 'https://www.cfos.de/en/download/download.htm',
      version: (res, $) => $('[href*="cFosICS"][href$=".zip"]').eq(0).attr('href').match(/\?file=(.*)$/)[1].match(/v(\d+)/)[1].replace(/(\d)(\d+)/, '$1.$2'),
      download: (res, $) => 'https://www.cfos.de' + $('[href*="cFosICS"][href$=".zip"]').eq(0).attr('href').match(/\?file=(.*)$/)[1],
      install: 'install_zipped_single'
    },
    cFosSpeed: {
      commercial: 3,
      url: 'https://www.cfos.de/en/download/download.htm',
      version: '#cfosspeed_release_x86_version',
      changelog: {
        url: 'https://www.cfos.de/en/cfosspeed/whats-new.txt',
        match: /^cFosSpeed [\d.]+/,
        split: true
      },
      download: '#cfosspeed_release_x86_link'
    },
    hrPing: {
      url: 'https://www.cfos.de/en/ping/ping.htm',
      version: '[href*="hrping"][href$=".zip"]',
      changelog: {
        url: 'https://www.cfos.de/en/ping/whats-new.txt',
        match: /^hrPing v[\d.]+/,
        split: true
      },
      download: (res, $) => 'https://www.cfos.de' + $('[href*="hrping"][href$=".zip"]').eq(0).attr('href').match(/\?file=(.*)$/)[1],
      install: 'install'
    }
  }
};
