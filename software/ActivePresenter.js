'use strict'

let data = {
  commercial: 2,
  url: 'https://atomisystems.com/download/',
  version: '.et_pb_text_inner>h4',
  changelog: ['https://cdn.atomisystems.com/updates/ActivePresenter/v7/releasenotes_v7.html', '.version'],
  download: '.et_pb_button_0',
  install: 'install_inno',
  other: {
    6: {
      version: '.et_pb_text_inner>h4:contains("6")',
      changelog: ['https://cdn.atomisystems.com/updates/ActivePresenter/v6/releasenotes_v6.html', '.version'],
      download: '.et_pb_button_2'
    }
  }
}
module.exports = data
