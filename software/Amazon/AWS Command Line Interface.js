'use strict';

const data = {
  url: 'https://github.com/aws/aws-cli/blob/v2/CHANGELOG.rst',
  version: '.markdown-body h2',
  changelog: '.markdown-body h2+ul',
  download: 'https://awscli.amazonaws.com/AWSCLIV2.msi',
  install: ['install_msi', null, 'aws.exe']
};
module.exports = data;
