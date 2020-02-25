'use strict'

let data = {
  url: 'https://rbsoft.org/downloads/autoshutdown-scheduler/',
  version: '#section-changelog>h3',
  changelog: {
    selector: '#section-changelog',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: 'https://rbsoft.org/downloads/autoshutdown-scheduler/AutoShutdown-Scheduler.zip',
  install: 'install'
}
module.exports = data
