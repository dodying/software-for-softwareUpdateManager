'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Http Proxy Scanner': {
      url: 'http://www.mylanviewer.com/downloads.html',
      version: '[width="620"] tr:contains("Http Proxy Scanner")>td:nth-child(2)',
      download: 'http://www.mylanviewer.com/proxy-scanner.zip',
      install: 'install'
    },
    'IP Scanner Shared Resources': {
      url: 'http://www.mylanviewer.com/downloads.html',
      version: '[width="620"] tr:contains("IP Scanner Shared Resources")>td:nth-child(2)',
      download: 'http://www.mylanviewer.com/network-ip-scanner.zip',
      install: 'install'
    },
    'MyLanViewer Network IP Scanner': {
      commercial: 3,
      url: 'http://www.mylanviewer.com/downloads.html',
      version: '[width="620"] tr:contains("MyLanViewer Network/IP Scanner")>td:nth-child(2)',
      download: 'http://www.mylanviewer.com/MyLanViewer-setup.exe',
      install: 'install_inno'
    },
    'Ping Manager': {
      commercial: 3,
      url: 'http://www.mylanviewer.com/downloads.html',
      version: '[width="620"] tr:contains("Ping Manager")>td:nth-child(2)',
      download: 'http://www.mylanviewer.com/PingManager-setup.exe',
      install: 'install_inno'
    },
    'Remote Computer Manager': {
      commercial: 3,
      url: 'http://www.mylanviewer.com/downloads.html',
      version: '[width="620"] tr:contains("Remote Computer")>td:nth-child(2)',
      download: 'http://www.mylanviewer.com/RemoteComputerManager-setup.exe',
      install: 'install_inno'
    },
    ShortcutsToTray: {
      url: 'http://www.mylanviewer.com/downloads.html',
      version: '[width="620"] tr:contains("ShortcutsToTray")>td:nth-child(2)',
      download: 'http://www.mylanviewer.com/shortcuts-to-tray.zip',
      install: 'install_zipped_single'
    },
    'Socks Proxy Scanner': {
      url: 'http://www.mylanviewer.com/downloads.html',
      version: '[width="620"] tr:contains("Socks Proxy Scanner")>td:nth-child(2)',
      download: 'http://www.mylanviewer.com/socks-scanner.zip',
      install: 'install'
    },
    'Tcp Port Scanner': {
      url: 'http://www.mylanviewer.com/downloads.html',
      version: '[width="620"] tr:contains("Tcp Port Scanner")>td:nth-child(2)',
      download: 'http://www.mylanviewer.com/port-scanner.zip',
      install: 'install'
    },
    'Wake-On-LAN Proxy Server': {
      commercial: 3,
      url: 'http://www.mylanviewer.com/downloads.html',
      version: '[width="620"] tr:contains("Wake-On-LAN Proxy Server")>td:nth-child(2)',
      download: 'http://www.mylanviewer.com/WolProxyServer-setup.exe',
      install: 'install_inno'
    }
  }
};
