'use strict'

let data = {
  commercial: 3,
  url: 'https://www.benvista.com/downloads',
  version: '#main>table>tbody>tr:nth-child(4)>td',
  changelog: ['https://www.benvista.com/photozoompro/whatsnew', '#compare_none+div'],
  download: '#main>table>tbody>tr:nth-child(4) a[href$="download/win"]',
  other: {
    Classic: {
      version: '#main>table>tbody>tr:nth-child(7)>td',
      changelog: ['https://www.benvista.com/photozoomclassic/whatsnew', '#main>div'],
      download: '#main>table>tbody>tr:nth-child(7) a[href$="download/win"]'
    }
  }
}
module.exports = data
