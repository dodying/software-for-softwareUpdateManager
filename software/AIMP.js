'use strict'

let data = {
  url: 'http://www.aimp.ru/?do=download&os=windows',
  version: ['h1', 'text', /AIMP v([\d.]+), build ([\d.]+)/, '$1.$2'],
  changelog: ['https://www.aimp.ru/?do=changelog', '.card_content'],
  download: 'https://www.aimp.ru/?do=download.file&id=4',
  install: ['install_cli', null, ['/AUTO={dir}', '/PORTABLE', '/SILENT']]
}
module.exports = data
