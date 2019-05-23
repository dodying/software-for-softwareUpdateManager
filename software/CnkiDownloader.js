'use strict'

let data = {
  url: 'https://gitee.com/ishare20/cnkidownloader',
  version: {
    selector: '.file_content  h3',
    match: /版本：V(.*)/
  }
}
module.exports = data
