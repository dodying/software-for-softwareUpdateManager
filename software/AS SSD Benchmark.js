'use strict'

let data = {
  url: 'https://www.alex-is.de/PHP/fusion/downloads.php?download_id=9',
  version: 'h2',
  changelog: {
    url: 'https://www.alex-is.de/PHP/fusion/articles.php?article_id=4',
    selector: '.main-body:contains("Changelog:")',
    attr: 'text',
    match: /^[\d.]+/,
    split: true
  },
  download: 'https://www.alex-is.de/progs/AS%20SSD%20Benchmark.zip',
  install: 'install_zipped_single'
}
module.exports = data
