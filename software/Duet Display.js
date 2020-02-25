'use strict'

let data = {
  site: {
    download: 'https://www.duetdisplay.com/'
  },
  versionChoice: ['http://updates.duetdisplay.com/latestWindows', /DuetSetup-((\d)-(\d)-(\d)-(\d)).exe/, '$2.$3.$4.$5'],
  changelog: {
    url: 'https://help.duetdisplay.com/updates/windows-release-notes',
    selector: '#js_page_content',
    attr: 'text',
    match: /^Version [\d.]+/,
    split: true
  },
  install: 'install_ai_cli'
}
module.exports = data
