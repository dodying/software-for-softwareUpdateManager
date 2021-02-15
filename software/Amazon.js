'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Amazon Music': {
      fixedPath: '%LOCALAPPDATA%\\Amazon Music\\Amazon Music.exe',
      site: {
        Softpedia: 'https://www.softpedia.com/get/Multimedia/Audio/Audio-Players/Amazon-Music.shtml'
      },
      install: 'install_cli'
    },
    'AWS Command Line Interface': {
      url: 'https://github.com/aws/aws-cli/blob/v2/CHANGELOG.rst',
      version: '.markdown-body h2',
      changelog: '.markdown-body h2+ul',
      download: 'https://awscli.amazonaws.com/AWSCLIV2.msi',
      install: ['install_msi', null, 'aws.exe']
    },
    'Kindle Create': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Others/E-Book/Kindle-Textbook-Creator.shtml'
      },
      install: 'install_nsis'
    },
    'Kindle For PC': {
      site: {
        download: 'https://www.amazon.com/l/16571048011'
      },
      versionChoice: ['https://www.amazon.com/kindlepcdownload/', /KindleForPC-installer-([\d.]+).exe/],
      install: 'install_nsis'
    },
    'Kindle Previewer': {
      url: 'https://www.amazon.com/gp/feature.html?ie=UTF8&docId=1000765261',
      version: '[width="20%"]',
      download: 'https://s3.amazonaws.com/kindlepreviewer3/KindlePreviewerInstaller.exe',
      install: 'install_nsis'
    },
    KindleGen: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Authoring-tools/Help-e-book-creators/KindleGen.shtml'
      },
      install: 'install'
    },
    'Send to Kindle': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Office-tools/Other-Office-Tools/Amazon-Send-to-Kindle.shtml'
      },
      install: 'install_nsis'
    }
  }
};
